import { useState } from "react";
import { useNavigation } from "expo-router";
import { Text, View, ScrollView, Alert, Linking } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ProductCartProps, useCartStore } from '@/stores/cart-store';

import { formatCurrency } from "@/utils/functions/format-currency";

import { Header } from '@/components/header';
import { Product } from '@/components/product';
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";

const PHONE_NUMBER = "+237699453580"

export default function Cart() {
  const [address, setAddress] = useState('');
  const cartStore = useCartStore();
  const navigation = useNavigation();

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  );

  function handleProductRemove(product: ProductCartProps) {
    Alert.alert('Retirer', `Voulez-vous retirer ${product.title} du panier ?`,
    [
      {
        text: 'Annuler'
      },
      {
        text: 'Retirer',
        onPress: () => cartStore.remove(product.id)
      }
    ])
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert(
        "Commande, Veuillez fournir les données de livraison.")
    }

    const products = cartStore.products.map((product) => `\n ${product.quantity}  ${product.title}`).join('');
    const message = `
    🍔 NOUVELLE COMMANDE
    \n Livraison à : ${address}
    
    ${products}
    
    \n Montant total : ${total}
    `
    
    Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`)

    cartStore.clear();
    navigation.goBack();
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Votre Panier" />

      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="p-5 flex-1">
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-700">
                {cartStore.products.map((product) => (
                  <Product
                    key={product.id}
                    data={product}
                    onPress={() => handleProductRemove(product)}
                  />
                ))}
              </View>
            ) : (
              <Text className="font-body text-slate-400 text-center my-8">
Votre panier est vide              </Text>
            )}

            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-white text-xl font-subtitle">Total:</Text>
              <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
            </View>

            <Input
              placeholder="Veuillez fournir l'adresse de livraison avec le nom de la rue, le quartier, le code postal, le numéro et le complément..."
              onChangeText={setAddress}
              blurOnSubmit={true}
              onSubmitEditing={handleOrder}
              returnKeyType="next"
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
          <Button.Text>Enregistrer la commande</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton title="Retour à l'accueil" href="/" />
      </View>
    </View>
  );
}
