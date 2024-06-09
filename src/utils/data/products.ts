const MENU = [
  {
    title: "Menu du jour",
    data: [
      {
        id: "12565",
        title: "Taro Sauce jaune",
        price: 3500,
        description:
          "Des tranches de taro frites croustillantes, assaisonnées d'épices et de sel, parfaites en accompagnement ou en snack.",
        thumbnail: require("../../assets/products/cover/taro1.jpg"),
        cover: require("../../assets/products/cover/taro2.jpg"),
        ingredients: ["Taro;", "Épices;", "Sel;"],
      },
      {
        id: "1891",
        title: "Eru and FUFU" ,
        price: 1500,
        description:
          "Un plat traditionnel camerounais à base de feuilles de Gnetum Africanum, de viande et de poisson, épicé et savoureux.",
        thumbnail: require("../../assets/products/cover/eru.jpg"),
        cover: require("../../assets/products/cover/eru.jpg"),
        ingredients: ["Feuilles de Gnetum Africanum;", "Viande;", "Poisson;", "Épices;"],
      },
      {
        id: "111",
        title: "Poulet Yassa",
        price: 1650,
        description:
          "Poulet mariné dans une sauce à base d'oignons, de citron et de moutarde, servi avec du riz blanc.",
        thumbnail: require("../../assets/products/cover/pouletyassa.webp"),
        cover:  require("../../assets/products/cover/pouletyassa.webp"),
        ingredients: [  
          "Poulet;",
          "Oignons;",
          "Citron;",
          "Moutarde;",
          "Riz blanc;",
        ],
      },
      {
        id: "1584",
        title: "Poulet DG",
        price: 1850,
        description:
          "Un plat traditionnel camerounais composé de poulet frit, de plantains, de légumes et de sauce aux arachides.",
        thumbnail: require("../../assets/products/cover/pouletdj.jpg"),
        cover: require("../../assets/products/cover/pouletdj.jpg"),
        ingredients: [  
          "Poulet frit;",
          "Plantains mûrs;",
          "Légumes variés;",
          "Sauce aux arachides;",
        ],
      },
    
      {
        id: "1",
        title: "Burger Geant",
        price: 2400,
        description:
          "Un hamburger si beau que j'avais faim pendant que je faisais cette mise en page pour le projet...",
        thumbnail: require("../../assets/products/cover/1.png"),
        cover: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Pain brioché;",
          "2x steaks hachés (mélange de la maison) de 80g;",
          "Fromage cheddar;",
          "Laitue;",
          "Tomate;",
          "Cornichons;",
          "Oignon;",
          "Sauce maison;",
        ],
      },
      {
        id: "199",
        title: "Maafe",
        price: 1800,
        description:
          "Un ragoût de bœuf ou de poulet dans une sauce à base de beurre de cacahuète, servi avec du riz ou du couscous.",
        thumbnail: require("../../assets/products/cover/Maafe.jpg"),
        cover:  require("../../assets/products/cover/Maafe.jpg"),
        ingredients: [
          "Bœuf ou poulet;",
          "Beurre de cacahuète;",
          "Tomates;",
          "Oignons;",
          "Pâte de tomate;",
          "Riz ou couscous;",
        ],
      },
    ],
  },
  {
    title: "Promotions",
    data: [
      {
        id: "342",
        title: "Ndolé",
        price: 2500,
        description:
          "Un plat camerounais traditionnel à base de feuilles de ndolé, de viande de bœuf, de crevettes séchées et d'arachides.",
        thumbnail:require("../../assets/products/cover/ndole.jpg"),
        cover: require("../../assets/products/cover/ndole.jpg"),
        ingredients: [
          "Feuilles de ndolé;",
          "Viande de bœuf;",
          "Crevettes séchées;",
          "Arachides;",
        ],
      },
      {
        id: "745",
        title: "Sanga Sanga",
        price: 28.7,
        description:
          "Un plat épicé et savoureux du Cameroun, composé de poisson grillé, de banane plantain, de légumes et de sauce pimentée.",
        thumbnail: require("../../assets/products/cover/sanga.png"),
        cover: require("../../assets/products/cover/sanga.png"),
        ingredients: [
          "Poisson grillé;",
          "Banane plantain frite;",
          "Légumes variés;",
          "Sauce pimentée;",
        ],
      },
      {
        id: "2",
        title: "Burger et viande hachée",
        price: 3400,
        description:
          "Les ingredients de ce hamburger changent chaque semaine, alors vous aurez toujours une surprise...",
        thumbnail: require("../../assets/products/cover/2.png"),
        cover: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pain brioché;",
          "2x steaks hachés (mélange de la maison) de 80g;",
          "Fromage cheddar;",
          "Laitue;",
          "Tomate;",
          "Cornichons;",
          "Oignon;",
          "Sauce maison;",
        ],
      },
     
      {
        id: "3",
        title: "Burger à la fraise",
        price: 3200,
        description:
          "Ce hamburger que nous ne pouvons pas enlever du menu en raison des clients les plus anciens de la brasserie...",
        thumbnail: require("../../assets/products/cover/3.png"),
        cover: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pain brioché;",
          "2x steaks hachés (mélange de la maison) de 80g;",
          "Fromage cheddar;",
          "Laitue;",
          "Tomate;",
          "Cornichons;",
          "Oignon;",
          "Sauce maison;",
        ],
      },
      {
        id: "4",
        title: "Burger à la tarte",
        price: 2950,
        description:
          "Celui que vous n'aimez pas d'abord, mais ensuite vous devenez accro et vous ne pouvez plus vous en passer...",
        thumbnail: require("../../assets/products/cover/4.png"),
        cover: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Pain brioché;",
          "2x steaks hachés (mélange de la maison) de 80g;",
          "Fromage cheddar;",
          "Laitue;",
          "Tomate;",
          "Cornichons;",
          "Oignon;",
          "Sauce maison;",
        ],
      },
    ],
  },
  {
    title: "Dessert",
    data: [
      {
        id: "5",
        title: "Glace avec Brownie",
        price: 1500,
        description:
          "Un délicieux dessert à savourer. Choisissez la glace et la sauce que vous désirez...",
        thumbnail: require("../../assets/products/cover/5.png"),
        cover: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x Boule de glace de votre choix",
          "Choisissez votre sauce;",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 2250,
        description:
          "Un délicieux Cupcake pour sucrer. Choisissez le goût que vous aimez...",
        thumbnail: require("../../assets/products/cover/6.png"),
        cover: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Choisissez le goût;", "Crème chantilly;"],
      },
      {
        id: "19",
        title: "Okok",
        price: 750,
        description:
          "Un plat traditionnel congolais à base de feuilles de manioc, de poisson, de viande et d'huile de palme, mijoté lentement pour une saveur riche.",
        thumbnail: require("../../assets/products/cover/okok1.jpg"),
        cover: require("../../assets/products/cover/okok2.jpeg"),
        ingredients: ["Feuilles de manioc;", "Poisson;", "Viande;", "Huile de palme;"],
      },
    ],
  },
  
  {
    title: "Boissons",
    data: [
      {
        id: "5785",
        title: "Vin de Palme",
        price: 8.5,
        description:
          "Une boisson traditionnelle africaine faite à partir de la sève du palmier, légèrement alcoolisée et rafraîchissante.",
        thumbnail: require("../../assets/products/cover/vblanc.jpg"),
        cover:require("../../assets/products/cover/vblanc.jpg"),
        ingredients: ["Sève de palmier;", "Fermentation naturelle;"],
      },
      {
        id: "4578",
        title: "Jus de Bissap",
        price: 500,
        description:
          "Une boisson rafraîchissante faite à partir de fleurs d'hibiscus, sucrée et parfumée.",
        thumbnail:  require("../../assets/products/cover/bissap.jpg"),
        cover: require("../../assets/products/cover/bissap.jpg"),
        ingredients: ["Fleurs d'hibiscus;", "Sucre;", "Eau;"],
      },
      {
        id: "7",
        title: "Hmm, Coca !",
        price: 650,
        cover: require("../../assets/products/thumbnail/7.png"),
        thumbnail: require("../../assets/products/cover/7.png"),
        description:
          "Un coca bien frais pour accompagner votre super sandwich...",
        ingredients: [],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
