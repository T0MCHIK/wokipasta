/* SETTINGS */

let currentLanguage = "ru";
let cart = [];
let currentProduct = null;
let currentCategory = "all";
let currentImageIndex = 0;
let reviews = [];
let currentVariant = null;

/* UI */

const ui = {

    ru: {
        add: "Добавить в корзину",
        cart: "Корзина",
        emptyCart: "Корзина пока пустая",
        reviews: "Отзывы",
        noReviews: "Пока нет отзывов",
        leaveReview: "Оставить отзыв",
        name: "Ваше имя",
        comment: "Ваш отзыв",
        sendReview: "Отправить отзыв",
        checkout: "Оформить заказ",
        orderEmpty: "Корзина пустая",
        thankReview: "Спасибо за отзыв!",
        fillReview: "Заполните имя и отзыв.",
        reviewWord: "отзывов",
        clearCart: "Очистить корзину",
        total: "Итого",
        promo: "АКЦИЯ",
        promoText: "Берёшь 2 любых WOK — WOK с курицей и яичной лапшой бесплатно",
        promoTime: "По будням с 15:00 до 17:00",
        free: "БЕСПЛАТНО",
        choose: "Выберите вариант",
        combo: "Вариант"
    },

    kz: {
        add: "Себетке қосу",
        cart: "Себет",
        emptyCart: "Себет әзірге бос",
        reviews: "Пікірлер",
        noReviews: "Әзірге пікір жоқ",
        leaveReview: "Пікір қалдыру",
        name: "Атыңыз",
        comment: "Пікіріңіз",
        sendReview: "Пікір жіберу",
        checkout: "Тапсырыс беру",
        orderEmpty: "Себет бос",
        thankReview: "Пікіріңізге рахмет!",
        fillReview: "Атыңыз бен пікіріңізді толтырыңыз.",
        reviewWord: "пікір",
        clearCart: "Себетті тазалау",
        total: "Барлығы",
        promo: "АКЦИЯ",
        promoText: "Кез келген 2 WOK ал — тауық пен жұмыртқалы кеспесі бар WOK тегін",
        promoTime: "Жұмыс күндері 15:00-ден 17:00-ге дейін",
        free: "ТЕГІН",
        choose: "Нұсқаны таңдаңыз",
        combo: "Нұсқа"
    },

    en: {
        add: "Add to cart",
        cart: "Cart",
        emptyCart: "Your cart is empty",
        reviews: "Reviews",
        noReviews: "No reviews yet",
        leaveReview: "Leave a review",
        name: "Your name",
        comment: "Your review",
        sendReview: "Submit review",
        checkout: "Checkout",
        orderEmpty: "Your cart is empty",
        thankReview: "Thank you for your review!",
        fillReview: "Please enter your name and review.",
        reviewWord: "reviews",
        clearCart: "Clear cart",
        total: "Total",
        promo: "PROMOTION",
        promoText: "Buy any 2 WOKs — get Chicken Egg Noodle WOK free",
        promoTime: "Weekdays from 15:00 to 17:00",
        free: "FREE",
        choose: "Choose an option",
        combo: "Option"
    }
};

/* PRODUCTS */

const products = [

    {
        id: 20,
        category: "sushi",
        price: 3290,
        image: "images/PhiladelphiaLight.jpeg",
        images: ["images/PhiladelphiaLight.jpeg"],
        name: {
            ru: "Филадельфия лайт",
            kz: "Филадельфия лайт",
            en: "Philadelphia Light"
        },
        description: {
            ru: "Лосось, сливочный сыр, рис, нори",
            kz: "Албырт, кремді ірімшік, күріш, нори",
            en: "Salmon, cream cheese, rice, nori"
        }
    },

    {
        id: 21,
        category: "sushi",
        price: 2390,
        image: "images/CaliforniaRoll.jpeg",
        images: ["images/CaliforniaRoll.jpeg"],
        name: {
            ru: "Калифорния ролл",
            kz: "Калифорния роллы",
            en: "California Roll"
        },
        description: {
            ru: "Краб, авокадо, рис, нори",
            kz: "Краб, авокадо, күріш, нори",
            en: "Crab, avocado, rice, nori"
        }
    },

    {
        id: 22,
        category: "sushi",
        price: 3290,
        image: "images/Dragon.jpeg",
        images: ["images/Dragon.jpeg"],
        name: {
            ru: "Дракон",
            kz: "Айдаһар",
            en: "Dragon"
        },
        description: {
            ru: "Ролл с лососем и сливочным сыром",
            kz: "Албырт және кремді ірімшік қосылған ролл",
            en: "Roll with salmon and cream cheese"
        }
    },

    {
        id: 23,
        category: "sushi",
        price: 2590,
        image: "images/tasty-roll.jpeg",
        images: ["images/tasty-roll.jpeg"],
        name: {
            ru: "Вкусный ролл",
            kz: "Дәмді ролл",
            en: "Tasty Roll"
        },
        description: {
            ru: "Фирменный ролл WokiPasta",
            kz: "WokiPasta фирмалық роллы",
            en: "Signature WokiPasta roll"
        }
    },

    {
        id: 24,
        category: "sushi",
        price: 2590,
        image: "images/murakami.jpeg",
        images: ["images/murakami.jpeg"],
        name: {
            ru: "Ролл Мураками",
            kz: "Мураками роллы",
            en: "Murakami Roll"
        },
        description: {
            ru: "Фирменный ролл с нежной начинкой",
            kz: "Жұмсақ салмасы бар фирмалық ролл",
            en: "Signature roll with a delicate filling"
        }
    },
    {
        id: 26,
        category: "sushi",
        price: 2390,
        image: "images/ying-yang.jpeg",
        images: ["images/ying-yang.jpeg"],
        name: {
            ru: "Ролл Инь Янь",
            kz: "Инь Янь роллы",
            en: "Yin Yang Roll"
        },
        description: {
            ru: "Фирменный ролл Инь Янь",
            kz: "Инь Янь фирмалық роллы",
            en: "Signature Yin Yang roll"
        }
    },

    {
        id: 27,
        category: "sushi",
        price: 1450,
        image: "images/vegan.jpeg",
        images: ["images/vegan.jpeg"],
        name: {
            ru: "Ролл Веган",
            kz: "Веган роллы",
            en: "Vegan Roll"
        },
        description: {
            ru: "Овощной ролл",
            kz: "Көкөністі ролл",
            en: "Vegetable roll"
        }
    },

    {
        id: 28,
        category: "sushi",
        price: 3590,
        image: "images/geisha's-kiss.jpeg",
        images: ["images/geisha's-kiss.jpeg"],
        name: {
            ru: "Поцелуй гейши",
            kz: "Гейшаның сүйісі",
            en: "Geisha Kiss"
        },
        description: {
            ru: "Фирменный ролл",
            kz: "Фирмалық ролл",
            en: "Signature roll"
        }
    },

    {
        id: 29,
        category: "sushi",
        price: 3040,
        image: "images/EbiTempura.jpeg",
        category: "sushi",
        images: ["images/EbiTempura.jpeg"],
        name: {
            ru: "Эби темпура ролл жареный",
            kz: "Эби темпура қуырылған роллы",
            en: "Fried Ebi Tempura Roll"
        },
        description: {
            ru: "Креветка темпура, хрустящий ролл",
            kz: "Темпура асшаяны, қытырлақ ролл",
            en: "Tempura shrimp, crispy roll"
        }
    },

    {
        id: 30,
        category: "sushi",
        price: 2890,
        image: "images/SakeTempura.jpeg",
        images: ["images/SakeTempura.jpeg"],
        name: {
            ru: "Сяке темпура",
            kz: "Сяке темпура",
            en: "Sake Tempura"
        },
        description: {
            ru: "Жареный ролл с лососем",
            kz: "Албырт қосылған қуырылған ролл",
            en: "Fried salmon roll"
        }
    },

    {
        id: 31,
        category: "sushi",
        price: 2590,
        image: "images/KaniTempura.jpeg",
        images: ["images/KaniTempura.jpeg"],
        name: {
            ru: "Кани темпура",
            kz: "Кани темпура",
            en: "Kani Tempura"
        },
        description: {
            ru: "Крабовый ролл в темпуре",
            kz: "Темпурадағы краб роллы",
            en: "Crab roll in tempura"
        }
    },

    {
        id: 32,
        category: "sushi",
        price: 2790,
        image: "images/KaniWokBaked.jpeg",
        images: ["images/KaniWokBaked.jpeg"],
        name: {
            ru: "Кани вок запеченный",
            kz: "Кани вок пісірілген",
            en: "Baked Kani Wok Roll"
        },
        description: {
            ru: "Запеченный ролл с крабом",
            kz: "Краб қосылған пісірілген ролл",
            en: "Baked crab roll"
        }
    },

    {
        id: 33,
        category: "sushi",
        price: 3590,
        image: "images/philadelphia-grill.jpeg",
        images: ["images/philadelphia-grill.jpeg"],
        name: {
            ru: "Филадельфия гриль",
            kz: "Филадельфия гриль",
            en: "Philadelphia Grill"
        },
        description: {
            ru: "Горячая версия Филадельфии",
            kz: "Филадельфияның ыстық нұсқасы",
            en: "Hot Philadelphia roll"
        }
    },
    {
        id: 35,
        category: "sushi",
        price: 2590,
        image: "images/hosomaki-sake.jpeg",
        images: ["images/hosomaki-sake.jpeg"],
        name: {
            ru: "Хосомаки сяке",
            kz: "Сяке хосомаки",
            en: "Sake Maki"
        },
        description: {
            ru: "Лосось, рис, нори",
            kz: "Албырт, күріш, нори",
            en: "Salmon, rice, nori"
        }
    },

    {
        id: 36,
        category: "sushi",
        price: 1190,
        image: "images/hosomaki-kappa.jpeg",
        images: ["images/hosomaki-kappa.jpeg"],
        name: {
            ru: "Хосомаки каппа",
            kz: "Каппа хосомаки",
            en: "Kappa Maki"
        },
        description: {
            ru: "Огурец, рис, нори",
            kz: "Қияр, күріш, нори",
            en: "Cucumber, rice, nori"
        }
    },

    {
        id: 37,
        category: "sushi",
        price: 2890,
        image: "images/NewYork.jpeg",
        images: ["images/NewYork.jpeg"],
        name: {
            ru: "Нью-Йорк",
            kz: "Нью-Йорк",
            en: "New York"
        },
        description: {
            ru: "Фирменный ролл",
            kz: "Фирмалық ролл",
            en: "Signature roll"
        }
    },
    {
        id: 39,
        category: "sushi",
        price: 2590,
        image: "images/DonutRoll.webp",
        images: [
            "images/DonutRoll.webp",
            "images/DonutRoll2.webp",
            "images/DonutRoll3.webp"
        ],
        name: {
            ru: "Пончик ролл",
            kz: "Пончик роллы",
            en: "Donut Roll"
        },
        description: {
            ru: "Фирменный пончик ролл",
            kz: "Фирмалық пончик роллы",
            en: "Signature donut roll"
        },
        options: [
            {
                id: "chicken",
                label: {
                    ru: "С курицей",
                    kz: "Тауықпен",
                    en: "Chicken"
                },
                price: 2590
            },
            {
                id: "shrimp",
                label: {
                    ru: "С креветками",
                    kz: "Асшаянмен",
                    en: "Shrimp"
                },
                price: 3090
            },
            {
                id: "salmon",
                label: {
                    ru: "С лососем",
                    kz: "Албыртпен",
                    en: "Salmon"
                },
                price: 3290
            }
        ]
    },
/* WOK */

{
    id: 40,
    category: "wok",
    price: 2890,
    image: "images/WokUdon.jpeg",
    images: ["images/WokUdon.jpeg"],
    name: {
        ru: "Вок удон с курицей в соусе удон",
        kz: "Удон соусындағы тауық еті қосылған вок",
        en: "Chicken Udon WOK with Udon Sauce"
    },
    description: {
        ru: "Лапша пшеничная, куриное филе, овощи: болгарский перец, лук, стручковая фасоль, древесные грибы, соус удон, семена кунжута.",
        kz: "Бидай кеспесі, тауық филесі, көкөністер: болгар бұрышы, пияз, жасыл бұршақ, ағаш саңырауқұлақтары, удон соусы, күнжіт.",
        en: "Wheat noodles, chicken fillet, vegetables: bell pepper, onion, green beans, wood mushrooms, udon sauce, sesame seeds."
    }
},

{
    id: 41,
    category: "wok",
    price: 2890,
    image: "images/WokSichuan.jpeg",
    images: ["images/WokSichuan.jpeg"],
    name: {
        ru: "Вок удон с курицей в сычуаньском соусе",
        kz: "Сычуань соусындағы тауық еті қосылған удон",
        en: "Chicken Udon WOK in Sichuan Sauce"
    },
    description: {
        ru: "Лапша пшеничная, куриное филе, овощи: болгарский перец, лук, стручковая фасоль, древесные грибы, семена кунжута, сычуаньский соус.",
        kz: "Бидай кеспесі, тауық филесі, көкөністер: болгар бұрышы, пияз, жасыл бұршақ, ағаш саңырауқұлақтары, күнжіт, сычуань соусы.",
        en: "Wheat noodles, chicken fillet, vegetables: bell pepper, onion, green beans, wood mushrooms, sesame seeds, Sichuan sauce."
    }
},

{
    id: 42,
    category: "wok",
    price: 3290,
    image: "images/WokUdonUnagi.jpeg",
    images: ["images/WokUdonUnagi.jpeg"],
    name: {
        ru: "Вок удон с морепродуктами под соусом унаги",
        kz: "Унаги соусындағы теңіз өнімдері қосылған удон вок",
        en: "Seafood Udon WOK with Unagi Sauce"
    },
    description: {
        ru: "Лапша пшеничная, овощи: болгарский перец, лук, стручковая фасоль, древесные грибы, соус унаги, семена кунжута, осьминог, мидии, креветки.",
        kz: "Бидай кеспесі, көкөністер: болгар бұрышы, пияз, жасыл бұршақ, ағаш саңырауқұлақтары, унаги соусы, күнжіт, сегізаяқ, мидия, асшаян.",
        en: "Wheat noodles, vegetables: bell pepper, onion, green beans, wood mushrooms, unagi sauce, sesame seeds, octopus, mussels, shrimp."
    }
},

{
    id: 43,
    category: "wok",
    price: 3090,
    image: "images/BeefWok.jpeg",
    images: ["images/BeefWok.jpeg"],
    name: {
        ru: "Вок с говядиной и гречневой лапшой",
        kz: "Сиыр еті қосылған қарақұмық кеспесі бар вок",
        en: "Beef Buckwheat Noodle WOK"
    },
    description: {
        ru: "Гречневая лапша, говядина, овощи: капуста, морковь, стручковая фасоль, перец болгарский, древесные грибы, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Қарақұмық кеспесі, сиыр еті, көкөністер: орамжапырақ, сәбіз, жасыл бұршақ, болгар бұрышы, ағаш саңырауқұлақтары, күнжіт, таңдау бойынша соус: кілегейлі-соя, қышқыл-тәтті, терияки.",
        en: "Buckwheat noodles, beef, vegetables: cabbage, carrot, green beans, bell pepper, wood mushrooms, sesame, choice of creamy-soy, sweet-and-sour or teriyaki sauce."
    }
},

{
    id: 44,
    category: "wok",
    price: 2890,
    image: "images/wokbuckwheat.jpeg",
    images: ["images/wokbuckwheat.jpeg"],
    name: {
        ru: "Вок с курицей и гречневой лапшой",
        kz: "Тауық еті мен қарақұмық кеспесі бар вок",
        en: "Chicken Buckwheat Noodle WOK"
    },
    description: {
        ru: "Гречневая лапша, мясо курицы, древесные грибы, овощи: капуста, морковь, стручковая фасоль, перец болгарский, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Қарақұмық кеспесі, тауық еті, ағаш саңырауқұлақтары, көкөністер: орамжапырақ, сәбіз, жасыл бұршақ, болгар бұрышы, күнжіт, таңдау бойынша соус.",
        en: "Buckwheat noodles, chicken, wood mushrooms, vegetables, sesame and choice of creamy-soy, sweet-and-sour or teriyaki sauce."
    }
},

{
    id: 45,
    category: "wok",
    price: 3290,
    image: "images/wok-shrimps-buckwheat.jpeg",
    images: ["images/wok-shrimps-buckwheat.jpeg"],
    name: {
        ru: "Вок с креветками и гречневой лапшой",
        kz: "Асшаяндар мен қарақұмық кеспесі бар вок",
        en: "Shrimp Buckwheat Noodle WOK"
    },
    description: {
        ru: "Гречневая лапша, креветки, овощи: капуста, морковь, стручковая фасоль, перец болгарский, древесные грибы, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Қарақұмық кеспесі, асшаяндар, көкөністер: орамжапырақ, сәбіз, жасыл бұршақ, болгар бұрышы, ағаш саңырауқұлақтары, күнжіт, таңдау бойынша соус.",
        en: "Buckwheat noodles, shrimp, vegetables, sesame and choice of creamy-soy, sweet-and-sour or teriyaki sauce."
    }
},

{
    id: 46,
    category: "wok",
    price: 3290,
    image: "images/WokSeafoodBuckwheat.jpeg",
    images: ["images/WokSeafoodBuckwheat.jpeg"],
    name: {
        ru: "Вок с морепродуктами и гречневой лапшой",
        kz: "Теңіз өнімдері мен қарақұмық кеспесі бар вок",
        en: "Seafood Buckwheat Noodle WOK"
    },
    description: {
        ru: "Гречневая лапша, креветки, мидии, осьминог, овощи: капуста, морковь, стручковая фасоль, перец болгарский, древесные грибы, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Қарақұмық кеспесі, асшаяндар, мидиялар, сегізаяқ, көкөністер, ағаш саңырауқұлақтары, күнжіт, таңдау бойынша соус.",
        en: "Buckwheat noodles, shrimp, mussels, octopus, vegetables, wood mushrooms, sesame and choice of sauce."
    }
},

{
    id: 47,
    category: "wok",
    price: 2890,
    image: "images/wokeggnoodle.webp",
    images: [
        "images/wokeggnoodle.webp",
        "images/wokeegnoodle2.webp",
        "images/wokeggnoodle3.webp",
        "images/wokeggnoodle4.webp",
        "images/wokeggnoodle5.webp"
    ],
    promoProduct: true,
    name: {
        ru: "Вок с курицей и яичной лапшой",
        kz: "Тауық еті мен жұмыртқалы кеспесі бар вок",
        en: "Chicken Egg Noodle WOK"
    },
    description: {
        ru: "Яичная лапша, мясо курицы, овощи: капуста, морковь, стручковая фасоль, перец болгарский, древесные грибы, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Жұмыртқалы кеспе, тауық еті, көкөністер: орамжапырақ, сәбіз, жасыл бұршақ, болгар бұрышы, ағаш саңырауқұлақтары, күнжіт, таңдау бойынша соус.",
        en: "Egg noodles, chicken, vegetables, wood mushrooms, sesame and choice of creamy-soy, sweet-and-sour or teriyaki sauce."
    }
},

{
    id: 49,
    category: "wok",
    price: 3290,
    image: "images/WokSeafoodRice.jpeg",
    images: ["images/WokSeafoodRice.jpeg"],
    name: {
        ru: "Вок с морепродуктами и рисом",
        kz: "Теңіз өнімдері қосылған күріш вок",
        en: "Seafood Rice WOK"
    },
    description: {
        ru: "Рис, креветки, мидии, осьминог, древесные грибы, овощи: капуста, морковь, перец болгарский, стручковая фасоль, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Күріш, асшаяндар, мидиялар, сегізаяқ, ағаш саңырауқұлақтары, көкөністер, күнжіт, таңдау бойынша соус.",
        en: "Rice, shrimp, mussels, octopus, wood mushrooms, vegetables, sesame and choice of sauce."
    }
},

{
    id: 50,
    category: "wok",
    price: 2890,
    image: "images/WokRiceChicken.jpeg",
    images: ["images/WokRiceChicken.jpeg"],
    name: {
        ru: "Вок с курицей и рисом",
        kz: "Тауық еті қосылған күріш вок",
        en: "Chicken Rice WOK"
    },
    description: {
        ru: "Рис, мясо курицы, древесные грибы, овощи: капуста, морковь, стручковая фасоль, перец болгарский, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Күріш, тауық еті, ағаш саңырауқұлақтары, көкөністер, күнжіт, таңдау бойынша соус.",
        en: "Rice, chicken, wood mushrooms, vegetables, sesame and choice of sauce."
    }
},

{
    id: 51,
    category: "wok",
    price: 3290,
    image: "images/WokSeafoodEgg.jpeg",
    images: ["images/WokSeafoodEgg.jpeg"],
    name: {
        ru: "Вок с морепродуктами и яичной лапшой",
        kz: "Теңіз өнімдері мен жұмыртқалы кеспесі бар вок",
        en: "Seafood Egg Noodle WOK"
    },
    description: {
        ru: "Яичная лапша, креветки, мидии, осьминог, овощи: капуста, морковь, стручковая фасоль, перец болгарский, древесные грибы, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Жұмыртқалы кеспе, асшаяндар, мидиялар, сегізаяқ, көкөністер, ағаш саңырауқұлақтары, күнжіт, таңдау бойынша соус.",
        en: "Egg noodles, shrimp, mussels, octopus, vegetables, wood mushrooms, sesame and choice of sauce."
    }
},

{
    id: 52,
    category: "wok",
    price: 3290,
    image: "images/wok-shrimps-egg.jpeg",
    images: ["images/wok-shrimps-egg.jpeg"],
    name: {
        ru: "Вок с креветками и яичной лапшой",
        kz: "Асшаяндар мен жұмыртқалы кеспе бар вок",
        en: "Shrimp Egg Noodle WOK"
    },
    description: {
        ru: "Яичная лапша, креветки, овощи: капуста, морковь, стручковая фасоль, перец болгарский, древесные грибы, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Жұмыртқалы кеспе, асшаяндар, көкөністер, ағаш саңырауқұлақтары, күнжіт, таңдау бойынша соус.",
        en: "Egg noodles, shrimp, vegetables, wood mushrooms, sesame and choice of sauce."
    }
},

{
    id: 53,
    category: "wok",
    price: 2890,
    image: "images/WokRiceChicken.jpeg",
    images: ["images/WokRiceChicken.jpeg"],
    name: {
        ru: "Рис с овощами и яйцом под соусом",
        kz: "Тұздық астындағы көкөніс пен жұмыртқалы күріш",
        en: "Rice with Vegetables and Egg"
    },
    description: {
        ru: "Рис, болгарский перец, лук, стручковая фасоль, древесные грибы, яйцо, зеленый лук, соевый соус.",
        kz: "Күріш, болгар бұрышы, пияз, жасыл бұршақ, ағаш саңырауқұлақтары, жұмыртқа, жасыл пияз, соя соусы.",
        en: "Rice, bell pepper, onion, green beans, wood mushrooms, egg, green onion and soy sauce."
    }
},

{
    id: 54,
    category: "wok",
    price: 3090,
    image: "images/BeefWok.jpeg",
    images: ["images/BeefWok.jpeg"],
    name: {
        ru: "Вок удон с говядиной под соусом удон",
        kz: "Удон соусындағы сиыр еті қосылған вок",
        en: "Beef Udon WOK with Udon Sauce"
    },
    description: {
        ru: "Лапша пшеничная, говядина, овощи: болгарский перец, лук, стручковая фасоль, древесные грибы, соус удон, семена кунжута.",
        kz: "Бидай кеспесі, сиыр еті, көкөністер: болгар бұрышы, пияз, жасыл бұршақ, ағаш саңырауқұлақтары, удон соусы, күнжіт.",
        en: "Wheat noodles, beef, vegetables, wood mushrooms, udon sauce and sesame seeds."
    }
},

{
    id: 55,
    category: "wok",
    price: 3090,
    image: "images/BeefWok.jpeg",
    images: ["images/BeefWok.jpeg"],
    name: {
        ru: "Вок с говядиной и яичной лапшой",
        kz: "Сиыр еті мен жұмыртқалы кеспесі бар вок",
        en: "Beef Egg Noodle WOK"
    },
    description: {
        ru: "Яичная лапша, говядина, овощи: капуста, морковь, стручковая фасоль, перец болгарский, древесные грибы, кунжут, соус на выбор: сливочно-соевый, кисло-сладкий, терияки.",
        kz: "Жұмыртқалы кеспе, сиыр еті, көкөністер, ағаш саңырауқұлақтары, күнжіт, таңдау бойынша соус.",
        en: "Egg noodles, beef, vegetables, wood mushrooms, sesame and choice of sauce."
    }
}
    /* BURGERS */

    ,{
        id: 60,
        category: "burgers",
        price: 2490,
        image: "images/Beverly.webp",
        images: [
            "images/Beverly.webp",
            "images/Beverly2.webp",
            "images/Beverly3.webp"
        ],
        name: {
            ru: "Беверли Хилз",
            kz: "Беверли Хиллз",
            en: "Beverly Hills"
        },
        description: {
            ru: "Котлета из говядины, черная булочка, фирменный соус, салат айсберг, маринованный лук, карамелизированный лук, соленные огурцы, сыр чеддер",
            kz: "Сиыр котлетасы, қара тоқаш, фирмалық соус, айсберг, маринадталған пияз, карамельденген пияз, тұздалған қияр, чеддер",
            en: "Beef patty, black bun, signature sauce, iceberg lettuce, pickled onion, caramelized onion, pickles, cheddar"
        },
        options: [
            {
                id: "burger",
                label: {
                    ru: "Бургер",
                    kz: "Бургер",
                    en: "Burger"
                },
                price:2490
            },
            {
                id: "combo",
                label: {
                    ru: "Комбо",
                    kz: "Комбо",
                    en: "Combo"
                },
                extra: {
                    ru: "Фри + напиток",
                    kz: "Фри + сусын",
                    en: "Fries + drink"
                },
                price: 4190
            }
        ]
    },

    {
        id: 61,
        category: "burgers",
        price: 2790,
        image: "images/California.webp",
        images: [
            "images/California.webp",
            "images/California2.webp"
        ],
        name: {
            ru: "Бургер Калифорния",
            kz: "Калифорния бургері",
            en: "California Burger"
        },
        description: {
            ru: "Куриная котлета, креветки, авокадо, салат микс, соус карри",
            kz: "Тауық котлетасы, асшаян, авокадо, салат миксі, карри соусы",
            en: "Chicken patty, shrimp, avocado, salad mix, curry sauce"
        },
        options: [
            {
                id: "burger",
                label: {
                    ru: "Бургер",
                    kz: "Бургер",
                    en: "Burger"
                },
                price: 2790
            },
            {
                id: "combo",
                label: {
                    ru: "Комбо",
                    kz: "Комбо",
                    en: "Combo"
                },
                extra: {
                    ru: "Фри + напиток",
                    kz: "Фри + сусын",
                    en: "Fries + drink"
                },
                price: 4190
            }
        ]
    },

    {
        id: 62,
        category: "burgers",
        price: 2790,
        image: "images/StreetBurger.webp",
        images: [
            "images/StreetBurger.webp",
            "images/StreetBurger2.webp"
        ],
        name: {
            ru: "Стрит бургер",
            kz: "Стрит бургер",
            en: "Street Burger"
        },
        description: {
            ru: "Белая картофельная булочка, котлета из говядины, сыр чеддер, помидоры, салат айсберг, соленые огурцы",
            kz: "Ақ картоп тоқашы, сиыр котлетасы, чеддер, қызанақ, айсберг, тұздалған қияр",
            en: "White potato bun, beef patty, cheddar, tomatoes, iceberg lettuce, pickles"
        },
        options: [
            {
                id: "burger",
                label: {
                    ru: "Бургер",
                    kz: "Бургер",
                    en: "Burger"
                },
                price: 2490
            },
            {
                id: "combo",
                label: {
                    ru: "Комбо",
                    kz: "Комбо",
                    en: "Combo"
                },
                extra: {
                    ru: "Фри + напиток",
                    kz: "Фри + сусын",
                    en: "Fries + drink"
                },
                price: 3890
            }
        ]
    },

    {
        id: 63,
        category: "burgers",
        price: 2790,
        image: "images/Manhattan.webp",
        images: [
            "images/Manhattan.webp",
            "images/Manhattan2.webp",
            "images/Manhattan3.webp"
        ],
        name: {
            ru: "Манхэттен",
            kz: "Манхэттен",
            en: "Manhattan"
        },
        description: {
            ru: "Котлета из говядины, черная булочка, фирменный соус",
            kz: "Сиыр котлетасы, қара тоқаш, фирмалық соус",
            en: "Beef patty, black bun, signature sauce"
        },
        options: [
            {
                id: "burger",
                label: {
                    ru: "Бургер",
                    kz: "Бургер",
                    en: "Burger"
                },
                price: 2790
            },
            {
                id: "combo",
                label: {
                    ru: "Комбо",
                    kz: "Комбо",
                    en: "Combo"
                },
                extra: {
                    ru: "Фри + напиток",
                    kz: "Фри + сусын",
                    en: "Fries + drink"
                },
                price: 4190
            }
        ]
    },

    {
        id: 64,
        category: "burgers",
        price: 2290,
        image: "images/Streetchicken.webp",
        images: [
            "images/Streetchicken.webp",
            "images/Streetchicken2.webp",
            "images/Streetchicken3.webp"
        ],
        name: {
            ru: "Стрит куриный",
            kz: "Стрит тауық бургері",
            en: "Street Chicken"
        },
        description: {
            ru: "Куриная котлета, сыр чеддер, помидоры, салат айсберг, соленные огурцы",
            kz: "Тауық котлетасы, чеддер, қызанақ, айсберг, тұздалған қияр",
            en: "Chicken patty, cheddar, tomatoes, iceberg lettuce, pickles"
        },
        options: [
            {
                id: "burger",
                label: {
                    ru: "Бургер",
                    kz: "Бургер",
                    en: "Burger"
                },
                price: 2290
            },
            {
                id: "combo",
                label: {
                    ru: "Комбо",
                    kz: "Комбо",
                    en: "Combo"
                },
                extra: {
                    ru: "Фри + напиток",
                    kz: "Фри + сусын",
                    en: "Fries + drink"
                },
                price: 3690
            }
        ]
    },

    {
        id: 65,
        category: "burgers",
        price: 2790,
        image: "images/chinatown.webp",
        images: [
            "images/chinatown.webp",
            "images/chinatown2.webp",
            "images/chinatown3.webp"
        ],
        name: {
            ru: "Чайна Таун",
            kz: "Чайна Таун",
            en: "Chinatown"
        },
        description: {
            ru: "Куриная грудка sous-vide, айсберг, халапеньо, кинза, сальса",
            kz: "Sous-vide тауық төс еті, айсберг, халапеньо, кинза, сальса",
            en: "Sous-vide chicken breast, iceberg, jalapeño, cilantro, salsa"
        },
        options: [
            {
                id: "burger",
                label: {
                    ru: "Бургер",
                    kz: "Бургер",
                    en: "Burger"
                },
                price: 2790
            },
            {
                id: "combo",
                label: {
                    ru: "Комбо",
                    kz: "Комбо",
                    en: "Combo"
                },
                extra: {
                    ru: "Фри + напиток",
                    kz: "Фри + сусын",
                    en: "Fries + drink"
                },
                price: 4190
            }
        ]
    },

    /* PIZZA */

    {
        id: 70,
        category: "pizza",
        price: 2690,
        image: "images/margherita.webp",
        images: [
            "images/margherita.webp",
            "images/margherita2.webp"
        ],
        name: {
            ru: "Маргарита",
            kz: "Маргарита",
            en: "Margherita"
        },
        description: {
            ru: "Томатный соус, моцарелла, томаты",
            kz: "Томат соусы, моцарелла, қызанақ",
            en: "Tomato sauce, mozzarella, tomatoes"
        }
    },

    {
        id: 71,
        category: "pizza",
        price: 3790,
        image: "images/4cheese.jpeg",
        images: ["images/4cheese.jpeg"],
        name: {
            ru: "Пицца 4 сыра",
            kz: "4 ірімшік пиццасы",
            en: "Four Cheese Pizza"
        },
        description: {
            ru: "Сливочный соус, моцарелла, дорблю, пармезан",
            kz: "Кілегейлі соус, моцарелла, дорблю, пармезан",
            en: "Cream sauce, mozzarella, blue cheese, parmesan"
        }
    },

    {
        id: 72,
        category: "pizza",
        price: 2690,
        image: "images/Pepperoni.webp",
        images: [
            "images/Pepperoni.webp",
            "images/Pepperoni2.webp"
        ],
        name: {
            ru: "Пепперони",
            kz: "Пепперони",
            en: "Pepperoni"
        },
        description: {
            ru: "Томатный соус, халяльная колбаса, моцарелла",
            kz: "Томат соусы, халал шұжық, моцарелла",
            en: "Tomato sauce, halal sausage, mozzarella"
        }
    },

    {
        id: 73,
        category: "pizza",
        price: 3890,
        image: "images/ChickenHoisiki.jpeg",
        images: ["images/ChickenHoisiki.jpeg"],
        name: {
            ru: "Курица хойсин",
            kz: "Хойсин тауық пиццасы",
            en: "Hoisin Chicken Pizza"
        },
        description: {
            ru: "Курица хойсин, халапеньо, вяленые томаты, запеченный перец, горчица, моцарелла",
            kz: "Хойсин тауық, халапеньо, кептірілген қызанақ, бұрыш, қыша, моцарелла",
            en: "Hoisin chicken, jalapeño, sun-dried tomatoes, roasted pepper, mustard, mozzarella"
        }
    },

    {
        id: 74,
        category: "pizza",
        price: 3790,
        image: "images/HincedMeat.webp",
        images: [
            "images/HincedMeat.webp",
            "images/HincedMeat2.webp"
        ],
        name: {
            ru: "Пицца с фаршем",
            kz: "Фарш қосылған пицца",
            en: "Minced Meat Pizza"
        },
        description: {
            ru: "Говяжий фарш, томаты, болгарский перец, лук, зелень, моцарелла",
            kz: "Сиыр фаршы, қызанақ, болгар бұрышы, пияз, көк, моцарелла",
            en: "Beef mince, tomatoes, bell pepper, onion, greens, mozzarella"
        }
    },

    {
        id: 75,
        category: "pizza",
        price: 3390,
        image: "images/4seasons.webp",
        images: ["images/4seasons.webp"],
        name: {
            ru: "Пицца Четыре сезона",
            kz: "Төрт маусым пиццасы",
            en: "Four Seasons Pizza"
        },
        description: {
            ru: "Четыре разных вкуса в одной пицце",
            kz: "Бір пиццада төрт түрлі дәм",
            en: "Four different flavors in one pizza"
        }
    },

    {
        id: 76,
        category: "pizza",
        price: 3790,
        image: "images/caesar-pizza.jpeg",
        images: ["images/caesar-pizza.jpeg"],
        name: {
            ru: "Пицца Цезарь",
            kz: "Цезарь пиццасы",
            en: "Caesar Pizza"
        },
        description: {
            ru: "Соус Цезарь, куриное филе, черри, айсберг, пармезан",
            kz: "Цезарь соусы, тауық филесі, черри, айсберг, пармезан",
            en: "Caesar sauce, chicken fillet, cherry tomatoes, iceberg, parmesan"
        }
    },

    /* PASTA */

    {
        id: 80,
        category: "pasta",
        price: 2890,
        image: "images/PastaMushroomsCream.jpeg",
        images: ["images/PastaMushroomsCream.jpeg"],
        name: {
            ru: "Паста с грибами в сливочном соусе",
            kz: "Кілегейлі саңырауқұлақ пастасы",
            en: "Mushroom Cream Pasta"
        },
        description: {
            ru: "Паста, грибы, сливочный соус",
            kz: "Паста, саңырауқұлақтар, кілегейлі соус",
            en: "Pasta, mushrooms, cream sauce"
        }
    },

    {
        id: 81,
        category: "pasta",
        price: 2890,
        image: "images/PastaChickenCream.jpeg",
        images: ["images/PastaChickenCream.jpeg"],
        name: {
            ru: "Паста с курицей в сливочном соусе",
            kz: "Кілегейлі тауық пастасы",
            en: "Chicken Cream Pasta"
        },
        description: {
            ru: "Паста, курица, сливочный соус",
            kz: "Паста, тауық, кілегейлі соус",
            en: "Pasta, chicken, cream sauce"
        }
    },

    {
        id: 82,
        category: "pasta",
        price: 2890,
        image: "images/PastaMix.jpeg",
        images: ["images/PastaMix.jpeg"],
        name: {
            ru: "Паста микс грибы",
            kz: "Саңырауқұлақ микс пастасы",
            en: "Pasta Mix Mushrooms"
        },
        description: {
            ru: "Паста с грибным миксом",
            kz: "Саңырауқұлақ миксі қосылған паста",
            en: "Pasta with mixed mushrooms"
        }
    },

    {
        id: 83,
        category: "pasta",
        price: 2890,
        image: "images/PastaChickenTomato.jpeg",
        images: ["images/PastaChickenTomato.jpeg"],
        name: {
            ru: "Паста с курицей в томатном соусе",
            kz: "Томат соусындағы тауық пастасы",
            en: "Chicken Tomato Pasta"
        },
        description: {
            ru: "Паста, курица, томатный соус",
            kz: "Паста, тауық, томат соусы",
            en: "Pasta, chicken, tomato sauce"
        }
    },

    {
        id: 84,
        category: "pasta",
        price: 3090,
        image: "images/PastaSeafoodTomato.jpeg",
        images: ["images/PastaSeafoodTomato.jpeg"],
        name: {
            ru: "Паста с морепродуктами в томатном соусе",
            kz: "Томат соусындағы теңіз өнімдері пастасы",
            en: "Seafood Tomato Pasta"
        },
        description: {
            ru: "Паста, морепродукты, томатный соус",
            kz: "Паста, теңіз өнімдері, томат соусы",
            en: "Pasta, seafood, tomato sauce"
        }
    },

    {
        id: 85,
        category: "pasta",
        price: 3090,
        image: "images/PastaSeafoodCream.jpeg",
        images: ["images/PastaSeafoodCream.jpeg"],
        name: {
            ru: "Паста с морепродуктами в сливочном соусе",
            kz: "Кілегейлі теңіз өнімдері пастасы",
            en: "Seafood Cream Pasta"
        },
        description: {
            ru: "Паста, морепродукты, сливочный соус",
            kz: "Паста, теңіз өнімдері, кілегейлі соус",
            en: "Pasta, seafood, cream sauce"
        }
    },

    /* SOUPS */

    {
        id: 90,
        category: "soups",
        price: 2600,
        image: "images/Ramen.webp",
        images: [
            "images/Ramen.webp",
            "images/Ramen2.webp"
        ],
        name: {
            ru: "Рамён с курицей",
            kz: "Тауықты рамен",
            en: "Chicken Ramen"
        },
        description: {
            ru: "Рамен с курицей",
            kz: "Тауық қосылған рамен",
            en: "Ramen with chicken"
        }
    },

    {
        id: 91,
        category: "soups",
        price: 3290,
        image: "images/Tomyum.webp",
        images: [
            "images/Tomyum.webp",
            "images/Tomyum2.webp",
            "images/Tomyum3.webp",
            "images/Tomyum4.webp"
        ],
        name: {
            ru: "Том ям с морепродуктами и рисом",
            kz: "Теңіз өнімдері мен күріші бар том ям",
            en: "Tom Yum with Seafood and Rice"
        },
        description: {
            ru: "Острый тайский суп с морепродуктами",
            kz: "Теңіз өнімдері бар ащы тай сорпасы",
            en: "Spicy Thai soup with seafood"
        }
    },

    /* SALADS */

    {
        id: 92,
        category: "salads",
        price: 2190,
        image: "images/SaladAsia.jpeg",
        images: ["images/SaladAsia.jpeg"],
        name: {
            ru: "Салат свежие овощи Азия",
            kz: "Азиялық жаңа көкөніс салаты",
            en: "Fresh Asia Salad"
        },
        description: {
            ru: "Свежие овощи в азиатском стиле",
            kz: "Азия стиліндегі жаңа көкөністер",
            en: "Fresh vegetables in Asian style"
        }
    },

    {
        id: 93,
        category: "salads",
        price: 2390,
        image: "images/SaladChuka.jpeg",
        images: ["images/SaladChuka.jpeg"],
        name: {
            ru: "Чука салат",
            kz: "Чука салаты",
            en: "Chuka Salad"
        },
        description: {
            ru: "Салат чука",
            kz: "Чука салаты",
            en: "Chuka seaweed salad"
        }
    },

    {
        id: 94,
        category: "salads",
        price: 2190,
        image: "images/Tutti-Fruti.jpeg",
        images: ["images/Tutti-Fruti.jpeg"],
        name: {
            ru: "Салат Тутти-Фрутти",
            kz: "Тутти-Фрутти салаты",
            en: "Tutti-Frutti Salad"
        },
        description: {
            ru: "Фирменный салат",
            kz: "Фирмалық салат",
            en: "Signature salad"
        }
    },

    {
        id: 95,
        category: "salads",
        price: 1500,
        image: "images/SaladColeSlaw.jpeg",
        images: ["images/SaladColeSlaw.jpeg"],
        name: {
            ru: "Салат Коул Слоу",
            kz: "Коул Слоу салаты",
            en: "Coleslaw"
        },
        description: {
            ru: "Капустный салат",
            kz: "Қырыққабат салаты",
            en: "Cabbage salad"
        }
    },

    {
        id: 96,
        category: "salads",
        price: 3190,
        image: "images/SaladNicoise.jpeg",
        images: ["images/SaladNicoise.jpeg"],
        name: {
            ru: "Салат Нисуаз",
            kz: "Нисуаз салаты",
            en: "Nicoise Salad"
        },
        description: {
            ru: "Классический салат Нисуаз",
            kz: "Классикалық Нисуаз салаты",
            en: "Classic Nicoise salad"
        }
    },

    {
        id: 97,
        category: "salads",
        price: 2890,
        image: "images/SaladCeasar.jpeg",
        images: ["images/SaladCeasar.jpeg"],
        name: {
            ru: "Цезарь с курицей",
            kz: "Тауықты Цезарь салаты",
            en: "Chicken Caesar Salad"
        },
        description: {
            ru: "Курица, айсберг, черри, пармезан, соус Цезарь",
            kz: "Тауық, айсберг, черри, пармезан, Цезарь соусы",
            en: "Chicken, iceberg, cherry tomatoes, parmesan, Caesar sauce"
        }
    },

    /* SIDES */

    {
        id: 100,
        category: "sides",
        price: 1100,
        image: "images/FrenchFries.jpeg",
        images: ["images/FrenchFries.jpeg"],
        name: {
            ru: "Картофель фри",
            kz: "Картоп фри",
            en: "French Fries"
        },
        description: {
            ru: "Хрустящий картофель фри",
            kz: "Қытырлақ картоп фри",
            en: "Crispy french fries"
        }
    },

    {
        id: 101,
        category: "sides",
        price: 2700,
        image: "images/crispychicken.webp",
        images: ["images/crispychicken.webp",
            "images/crispychicken2.webp",
            "images/crispychicken3.webp"
        ],
        name: {
            ru: "Жареные крылышки",
            kz: "Қуырылған қанаттар",
            en: "Fried Chicken Wings"
        },
        description: {
            ru: "Хрустящие куриные крылышки",
            kz: "Қытырлақ тауық қанаттары",
            en: "Crispy fried chicken wings"
        },
        options: [
            {
                id: "10",
                label: {
                    ru: "10 шт",
                    kz: "10 дана",
                    en: "10 pcs"
                },
                price: 2700
            },
            {
                id: "20",
                label: {
                    ru: "20 шт",
                    kz: "20 дана",
                    en: "20 pcs"
                },
                price: 5200
            },
            {
                id: "30",
                label: {
                    ru: "30 шт",
                    kz: "30 дана",
                    en: "30 pcs"
                },
                price: 7900
            }
        ]
    },

    {
        id: 102,
        category: "sides",
        price: 100,
        image: "images/bun.png",
        images: ["images/bun.png"],
        name: {
            ru: "Булочка",
            kz: "Тоқаш",
            en: "Bun"
        },
        description: {
            ru: "Дополнительная булочка",
            kz: "Қосымша тоқаш",
            en: "Extra bun"
        }
    },

    /* DRINKS */

    {
        id: 110,
        category: "drinks",
        price: 850,
        image: "images/Mors.webp",
        images: ["images/Mors.webp"],
        name: {
            ru: "Морс",
            kz: "Морс",
            en: "Mors"
        },
        description: {
            ru: "Ягодный морс",
            kz: "Жидек морсы",
            en: "Berry fruit drink"
        }
    },

    {
        id: 111,
        category: "drinks",
        price: 700,
        image: "images/coke.jpeg",
        images: ["images/coke.jpeg"],
        name: {
            ru: "Coca-Cola",
            kz: "Coca-Cola",
            en: "Coca-Cola"
        },
        description: {
            ru: "Coca-Cola",
            kz: "Coca-Cola",
            en: "Coca-Cola"
        },
        options: [
            {
                id: "500ml",
                label: {
                    ru: "0.5 л",
                    kz: "0.5 л",
                    en: "0.5 L"
                },
                price: 700
            }
        ]
    },

    {
        id: 112,
        category: "drinks",
        price: 1100,
        image: "images/Borjomi.webp",
        images: ["images/Borjomi.webp"],
        name: {
            ru: "Borjomi",
            kz: "Borjomi",
            en: "Borjomi"
        },
        description: {
            ru: "Borjomi 0.33 л",
            kz: "Borjomi 0.33 л",
            en: "Borjomi 0.33 L"
        },
        options: [
            {
                id: "330ml",
                label: {
                    ru: "0.33 л",
                    kz: "0.33 л",
                    en: "0.33 L"
                },
                price: 1100
            }
        ]
    },

    {
        id: 113,
        category: "drinks",
        price: 1300,
        image: "images/Barbican.png",
        images: ["images/Barbican.png"],
        name: {
            ru: "Barbican",
            kz: "Barbican",
            en: "Barbican"
        },
        description: {
            ru: "Barbican",
            kz: "Barbican",
            en: "Barbican"
        },
        options: [
            {
                id: "default",
                label: {
                    ru: "Barbican",
                    kz: "Barbican",
                    en: "Barbican"
                },
                price: 1300
            }
        ]
    },

    {
        id: 114,
        category: "drinks",
        price: 1190,
        image: "images/Mors.webp",
        images: ["images/Mors.webp"],
        name: {
            ru: "Чай",
            kz: "Шай",
            en: "Tea"
        },
        description: {
            ru: "Выберите чай",
            kz: "Шайды таңдаңыз",
            en: "Choose your tea"
        },
        options: [
            {
                id: "black",
                label: {
                    ru: "Чёрный чай",
                    kz: "Қара шай",
                    en: "Black Tea"
                },
                price: 1190
            },
            {
                id: "green",
                label: {
                    ru: "Зелёный чай",
                    kz: "Жасыл шай",
                    en: "Green Tea"
                },
                price: 1190
            },
            {
                id: "puer",
                label: {
                    ru: "Пуэр",
                    kz: "Пуэр",
                    en: "Pu-erh"
                },
                price: 1500
            },
            {
                id: "tashkent",
                label: {
                    ru: "Ташкентский чай",
                    kz: "Ташкент шайы",
                    en: "Tashkent Tea"
                },
                price: 1500
            },
            {
                id: "sea-buckthorn",
                label: {
                    ru: "Облепиховый чай",
                    kz: "Шырғанақ шайы",
                    en: "Sea Buckthorn Tea"
                },
                price: 1500
            },
            {
                id: "berry",
                label: {
                    ru: "Ягодный чай",
                    kz: "Жидек шайы",
                    en: "Berry Tea"
                },
                price: 1500
            },
            {
                id: "flower",
                label: {
                    ru: "Цветочный чай",
                    kz: "Гүлді шай",
                    en: "Floral Tea"
                },
                price: 1500
            }
        ]
    },

    {
        id: 115,
        category: "drinks",
        price: 1290,
        image: "images/Mors.webp",
        images: ["images/Mors.webp"],
        name: {
            ru: "Лимонад",
            kz: "Лимонад",
            en: "Lemonade"
        },
        description: {
            ru: "Выберите вкус и объём",
            kz: "Дәмі мен көлемін таңдаңыз",
            en: "Choose flavor and volume"
        },
        options: [
            {
                id: "kiwi-apple-500",
                label: {
                    ru: "Киви-яблоко • 500 мл",
                    kz: "Киви-алма • 500 мл",
                    en: "Kiwi-Apple • 500 ml"
                },
                price: 1290
            },
            {
                id: "kiwi-apple-1000",
                label: {
                    ru: "Киви-яблоко • 1 л",
                    kz: "Киви-алма • 1 л",
                    en: "Kiwi-Apple • 1 L"
                },
                price: 2190
            },
            {
                id: "kiwi-mango-500",
                label: {
                    ru: "Киви-манго • 500 мл",
                    kz: "Киви-манго • 500 мл",
                    en: "Kiwi-Mango • 500 ml"
                },
                price: 1290
            },
            {
                id: "kiwi-mango-1000",
                label: {
                    ru: "Киви-манго • 1 л",
                    kz: "Киви-манго • 1 л",
                    en: "Kiwi-Mango • 1 L"
                },
                price: 2190
            },
            {
                id: "mango-passion-500",
                label: {
                    ru: "Манго-маракуйя • 500 мл",
                    kz: "Манго-маракуйя • 500 мл",
                    en: "Mango-Passion Fruit • 500 ml"
                },
                price: 1290
            },
            {
                id: "mango-passion-1000",
                label: {
                    ru: "Манго-маракуйя • 1 л",
                    kz: "Манго-маракуйя • 1 л",
                    en: "Mango-Passion Fruit • 1 L"
                },
                price: 2190
            },
            {
                id: "strawberry-blueberry-500",
                label: {
                    ru: "Клубника-черника • 500 мл",
                    kz: "Құлпынай-көкжидек • 500 мл",
                    en: "Strawberry-Blueberry • 500 ml"
                },
                price: 1290
            },
            {
                id: "strawberry-blueberry-1000",
                label: {
                    ru: "Клубника-черника • 1 л",
                    kz: "Құлпынай-көкжидек • 1 л",
                    en: "Strawberry-Blueberry • 1 L"
                },
                price: 2190
            },
            {
                id: "strawberry-mojito-500",
                label: {
                    ru: "Мохито-клубника • 500 мл",
                    kz: "Мохито-құлпынай • 500 мл",
                    en: "Strawberry Mojito • 500 ml"
                },
                price: 1290
            },
            {
                id: "strawberry-mojito-1000",
                label: {
                    ru: "Мохито-клубника • 1 л",
                    kz: "Мохито-құлпынай • 1 л",
                    en: "Strawberry Mojito • 1 L"
                },
                price: 2190
            },
            {
                id: "mojito-500",
                label: {
                    ru: "Мохито • 500 мл",
                    kz: "Мохито • 500 мл",
                    en: "Mojito • 500 ml"
                },
                price: 1290
            },
            {
                id: "mojito-1000",
                label: {
                    ru: "Мохито • 1 л",
                    kz: "Мохито • 1 л",
                    en: "Mojito • 1 L"
                },
                price: 2190
            },
            {
                id: "berry-lemonade-500",
                label: {
                    ru: "Ягодный • 500 мл",
                    kz: "Жидек • 500 мл",
                    en: "Berry • 500 ml"
                },
                price: 1290
            },
            {
                id: "berry-lemonade-1000",
                label: {
                    ru: "Ягодный • 1 л",
                    kz: "Жидек • 1 л",
                    en: "Berry • 1 L"
                },
                price: 2190
            },
            {
                id: "tropical-500",
                label: {
                    ru: "Тропический • 500 мл",
                    kz: "Тропикалық • 500 мл",
                    en: "Tropical • 500 ml"
                },
                price: 1290
            },
            {
                id: "tropical-1000",
                label: {
                    ru: "Тропический • 1 л",
                    kz: "Тропикалық • 1 л",
                    en: "Tropical • 1 L"
                },
                price: 2190
            }
        ]
    }
];

/* SETS */

const sets = [

    {
        id: 1,
        category: "sets",
        price: 8600,
        image: "images/Seoul.png",
        images: [
            "images/Seoul.png"
        ],
        name: {
            ru: "SEOUL",
            kz: "SEOUL",
            en: "SEOUL"
        },
        description: {
            ru: "Хит ролл 10 шт • Филадельфия лайт 10 шт • Эби темпура 10 шт",
            kz: "Хит ролл 10 дана • Филадельфия лайт 10 дана • Эби темпура 10 дана",
            en: "Hit Roll 10 pcs • Philadelphia Light 10 pcs • Ebi Tempura 10 pcs"
        }
    },

    {
        id: 2,
        category: "sets",
        price: 8800,
        image: "images/Hanai.png",
        images: [
            "images/Hanai.png",
            "images/Hanai2.webp",
            "images/Hanai3.webp",
            "images/Hanai4.webp"
        ],
        name: {
            ru: "HANAI",
            kz: "HANAI",
            en: "HANAI"
        },
        description: {
            ru: "Поцелуй гейши 10 шт • Хот ролл 10 шт • Эби темпура 10 шт • Жареный ролл 10 шт • Кола 1 л",
            kz: "Гейшаның сүйісі 10 дана • Хот ролл 10 дана • Эби темпура 10 дана • Қуырылған ролл 10 дана • Кола 1 л",
            en: "Geisha Kiss 10 pcs • Hot Roll 10 pcs • Ebi Tempura 10 pcs • Fried Roll 10 pcs • Cola 1 L"
        }
    },

    {
        id: 3,
        category: "sets",
        price: 6500,
        image: "images/Tokyo.png",
        images: [
            "images/Tokyo.png",
            "images/Tokyo2.webp",
            "images/Tokyo3.webp",
            "images/Tokyo4.webp"
        ],
        name: {
            ru: "TOKYO",
            kz: "TOKYO",
            en: "TOKYO"
        },
        description: {
            ru: "Поцелуй гейши 10 шт • Чикен темпура 10 шт • В подарок Пицца Маргарита и Кола 1 л",
            kz: "Гейшаның сүйісі 10 дана • Чикен темпура 10 дана • Сыйлыққа Маргарита пиццасы және Кола 1 л",
            en: "Geisha Kiss 10 pcs • Chicken Tempura 10 pcs • Gift: Margherita Pizza and 1 L Cola"
        }
    },

    {
        id: 4,
        category: "sets",
        price: 8600,
        image: "images/Shanghai.png",
        images: [
            "images/Shanghai.png",
            "images/Shangai2.webp",
            "images/Shangai3.webp"
        ],
        name: {
            ru: "SHANGHAI",
            kz: "SHANGHAI",
            en: "SHANGHAI"
        },
        description: {
            ru: "Поцелуй гейши 10 шт • Чикен темпура 10 шт • Филадельфия лайт 10 шт • В подарок WOK с курицей и Кола 1 л",
            kz: "Гейшаның сүйісі 10 дана • Чикен темпура 10 дана • Филадельфия лайт 10 дана • Сыйлыққа тауықты WOK және Кола 1 л",
            en: "Geisha Kiss 10 pcs • Chicken Tempura 10 pcs • Philadelphia Light 10 pcs • Gift: Chicken WOK and 1 L Cola"
        }
    },

    {
        id: 5,
        category: "sets",
        price: 9900,
        image: "images/HongKong.png",
        images: [
            "images/HongKong.png",
            "images/HongKong2.webp",
            "images/HongKong3.webp",
            "images/HongKong4.webp"
        ],
        name: {
            ru: "HONG KONG",
            kz: "HONG KONG",
            en: "HONG KONG"
        },
        description: {
            ru: "Поцелуй гейши 10 шт • Хит ролл 10 шт • Калифорния 10 шт • Чикен темпура 10 шт • Краб темпура 10 шт • В подарок Пицца с фаршем и Кола 1 л",
            kz: "Гейшаның сүйісі 10 дана • Хит ролл 10 дана • Калифорния 10 дана • Чикен темпура 10 дана • Краб темпура 10 дана • Сыйлыққа фарш қосылған пицца және Кола 1 л",
            en: "Geisha Kiss 10 pcs • Hit Roll 10 pcs • California 10 pcs • Chicken Tempura 10 pcs • Crab Tempura 10 pcs • Gift: Minced Meat Pizza and 1 L Cola"
        }
    },

    {
        id: 6,
        category: "sets",
        price: 11900,
        image: "images/Osaka.png",
        images: [
            "images/Osaka.png",
            "images/Osaka2.webp",
            "images/Osaka3.webp",
            "images/Osaka4.webp"
        ],
        name: {
            ru: "OSAKA",
            kz: "OSAKA",
            en: "OSAKA"
        },
        description: {
            ru: "Эби темпура 10 шт • Сяке кунсей 10 шт • Краб темпура 10 шт • Калифорния с крабом 10 шт • Хит ролл 10 шт • Поцелуй гейши 10 шт • В подарок Пицца Маргарита и Кола 1 л",
            kz: "Эби темпура 10 дана • Сяке кунсей 10 дана • Краб темпура 10 дана • Калифорния крабпен 10 дана • Хит ролл 10 дана • Гейшаның сүйісі 10 дана • Сыйлыққа Маргарита пиццасы және Кола 1 л",
            en: "Ebi Tempura 10 pcs • Sake Kunsei 10 pcs • Crab Tempura 10 pcs • California with Crab 10 pcs • Hit Roll 10 pcs • Geisha Kiss 10 pcs • Gift: Margherita Pizza and 1 L Cola"
        }
    },

    {
        id: 8,
        category: "sets",
        price: 16900,
        image: "images/Jakarta.png",
        images: [
            "images/Jakarta.png",
            "images/Jakarta2.webp"
        ],
        name: {
            ru: "JAKARTA",
            kz: "JAKARTA",
            en: "JAKARTA"
        },
        description: {
            ru: "Запечённый ролл с сыром 10 шт • Запечённый ролл с крабом 10 шт • Эби темпура 10 шт • Сяке темпура 10 шт • Хосомаки каппа 10 шт • Хосомаки сяке 10 шт • Филадельфия лайт 10 шт • Калифорния 10 шт • Пицца 4 сезона • Пицца Маргарита • Кола 2 л",
            kz: "Ірімшікті пісірілген ролл 10 дана • Крабты пісірілген ролл 10 дана • Эби темпура 10 дана • Сяке темпура 10 дана • Каппа хосомаки 10 дана • Сяке хосомаки 10 дана • Филадельфия лайт 10 дана • Калифорния 10 дана • 4 маусым пиццасы • Маргарита пиццасы • Кола 2 л",
            en: "Baked Cheese Roll 10 pcs • Baked Crab Roll 10 pcs • Ebi Tempura 10 pcs • Sake Tempura 10 pcs • Kappa Maki 10 pcs • Sake Maki 10 pcs • Philadelphia Light 10 pcs • California 10 pcs • Four Seasons Pizza • Margherita Pizza • Cola 2 L"
        }
    },

    {
        id: 9,
        category: "sets",
        price: 12700,
        image: "images/Bangkok.png",
        images: [
            "images/Bangkok.png"
        ],
        name: {
            ru: "BANGKOK",
            kz: "BANGKOK",
            en: "BANGKOK"
        },
        description: {
            ru: "Филадельфия с крабом 10 шт • Калифорния ролл 10 шт • Эби темпура 10 шт • Чикен темпура 10 шт • Запечённый ролл с крабом 10 шт • Ролл чука • Пицца Маргарита • Пепперони • Кола 1 л",
            kz: "Крабпен Филадельфия 10 дана • Калифорния роллы 10 дана • Эби темпура 10 дана • Чикен темпура 10 дана • Крабты пісірілген ролл 10 дана • Чука роллы • Маргарита пиццасы • Пепперони • Кола 1 л",
            en: "Philadelphia with Crab 10 pcs • California Roll 10 pcs • Ebi Tempura 10 pcs • Chicken Tempura 10 pcs • Baked Crab Roll 10 pcs • Chuka Roll • Margherita Pizza • Pepperoni • Cola 1 L"
        }
    },

    {
        id: 10,
        category: "sets",
        price: 14500,
        image: "images/Beijing.png",
        images: [
            "images/Beijing.png",
            "images/Beijing2.webp",
            "images/Beijing3.webp"
        ],
        name: {
            ru: "BEIJING",
            kz: "BEIJING",
            en: "BEIJING"
        },
        description: {
            ru: "Филадельфия с крабом 10 шт • Калифорния ролл 10 шт • Эби темпура 10 шт • Чикен темпура 10 шт • Запечённый ролл с крабом 10 шт • Ролл чука • Пицца Пепперони • Пицца 4 сезона • Кола 1 л",
            kz: "Крабпен Филадельфия 10 дана • Калифорния роллы 10 дана • Эби темпура 10 дана • Чикен темпура 10 дана • Крабты пісірілген ролл 10 дана • Чука роллы • Пепперони пиццасы • 4 маусым пиццасы • Кола 1 л",
            en: "Philadelphia with Crab 10 pcs • California Roll 10 pcs • Ebi Tempura 10 pcs • Chicken Tempura 10 pcs • Baked Crab Roll 10 pcs • Chuka Roll • Pepperoni Pizza • Four Seasons Pizza • Cola 1 L"
        }
    },

    {
        id: 11,
        category: "sets",
        price: 9900,
        image: "images/Busan.png",
        images: [
            "images/Busan.png",
            "images/Busan2.webp",
            "images/Busan3.webp",
            "images/Busan4.webp"
        ],
        name: {
            ru: "BUSAN",
            kz: "BUSAN",
            en: "BUSAN"
        },
        description: {
            ru: "Краб темпура • Эби темпура • Чикен темпура",
            kz: "Краб темпура • Эби темпура • Чикен темпура",
            en: "Crab Tempura • Ebi Tempura • Chicken Tempura"
        }
    },

    {
        id: 12,
        category: "sets",
        price: 8100,
        image: "images/Kyoto.png",
        images: [
            "images/Kyoto.png",
            "images/Kyoto.webp",
            "images/Kyoto2.webp",
            "images/Kyoto3.webp"
        ],
        name: {
            ru: "KYOTO",
            kz: "KYOTO",
            en: "KYOTO"
        },
        description: {
            ru: "2 бургера + фри • 1 ролл • Coca-Cola",
            kz: "2 бургер + фри • 1 ролл • Coca-Cola",
            en: "2 burgers + fries • 1 roll • Coca-Cola"
        }
    },

    {
        id: 13,
        category: "sets",
        price: 13000,
        image: "images/Suwon.png",
        images: [
            "images/Suwon.png",
            "images/Suwon2.webp",
            "images/Suwon3.webp",
            "images/Suwon4.webp",
            "images/Suwon5.webp"
        ],
        name: {
            ru: "SUWON",
            kz: "SUWON",
            en: "SUWON"
        },
        description: {
            ru: "Поцелуй гейши 10 шт • Хот ролл 10 шт • Ролл микс 10 шт • Краб темпура 10 шт • Каппа маки 10 шт • Курица маки 10 шт • Жаренные крылья 20 шт • В подарок Пицца Маргарита и Кола 1 л",
            kz: "Гейшаның сүйісі 10 дана • Хот ролл 10 дана • Ролл микс 10 дана • Краб темпура 10 дана • Каппа маки 10 дана • Тауық маки 10 дана • Қуырылған қанаттар 20 дана • Сыйлыққа Маргарита пиццасы және Кола 1 л",
            en: "Geisha Kiss 10 pcs • Hot Roll 10 pcs • Roll Mix 10 pcs • Crab Tempura 10 pcs • Kappa Maki 10 pcs • Chicken Maki 10 pcs • Fried Wings 20 pcs • Gift: Margherita Pizza and 1 L Cola"
        }
    }
];

/* HELPERS */

function getText(value) {

    if (!value) {
        return "";
    }

    if (typeof value === "string") {
        return value;
    }

    return (
        value[currentLanguage] ||
        value.ru ||
        ""
    );
}

function formatPrice(price) {

    return `${Number(price).toLocaleString("ru-RU")} ₸`;
}

function escapeHtml(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text ?? "";

    return div.innerHTML;
}

function getAllProducts() {

    return [
        ...products,
        ...sets
    ];
}

function getProductById(id) {

    const numberId =
        Number(id);

    return getAllProducts().find(
        product =>
            product.id === numberId
    );
}

function getProductImages(product) {

    if (
        product.images &&
        Array.isArray(product.images) &&
        product.images.length
    ) {
        return product.images;
    }

    if (product.image) {
        return [product.image];
    }

    return [];
}

function getProductOptions(product) {

    if (
        !product.options ||
        !Array.isArray(product.options) ||
        !product.options.length
    ) {
        return [];
    }

    return product.options;
}

/* PROMO */

function isPromoTime() {

    const now =
        new Date();

    const day =
        now.getDay();

    const hour =
        now.getHours();

    const minutes =
        now.getMinutes();

    const currentMinutes =
        hour * 60 + minutes;

    const start =
        15 * 60;

    const end =
        17 * 60;

    const weekday =
        day >= 1 &&
        day <= 5;

    return (
        weekday &&
        currentMinutes >= start &&
        currentMinutes < end
    );
}

function getPromoEligibleQuantity() {

    return cart.reduce(
        (total, item) => {

            const product =
                getProductById(item.id);

            if (
                product &&
                product.category === "wok"
            ) {
                return (
                    total +
                    item.quantity
                );
            }

            return total;
        },
        0
    );
}

function getPromoRewards() {

    if (!isPromoTime()) {
        return 0;
    }

    return Math.floor(
        getPromoEligibleQuantity() / 2
    );
}

function getPromoDiscount() {

    const rewards =
        getPromoRewards();

    const freeProduct =
        getProductById(47);

    if (!freeProduct) {
        return 0;
    }

    return (
        rewards *
        freeProduct.price
    );
}

function getPromoText() {

    return `
        <div class="promo-box">

            <strong>
                ${ui[currentLanguage].promo}
            </strong>

            <span>
                ${ui[currentLanguage].promoText}
            </span>

            <small>
                ${ui[currentLanguage].promoTime}
            </small>

        </div>
    `;
}

function renderPromoBanner() {

    let banner =
        document.getElementById(
            "wokipasta-promo"
        );

    const menu =
        document.getElementById("menu");

    if (!menu) {
        return;
    }

    if (!banner) {

        banner =
            document.createElement("div");

        banner.id =
            "wokipasta-promo";

        menu.prepend(banner);
    }

    banner.innerHTML =
        getPromoText();

    if (isPromoTime()) {

        banner.classList.add(
            "promo-active"
        );

    } else {

        banner.classList.remove(
            "promo-active"
        );
    }
}

/* PRODUCTS */

function renderProducts(
    category = "all"
) {

    const container =
        document.getElementById(
            "products"
        );

    if (!container) {
        return;
    }

    let filtered =
        products;

    if (
        category &&
        category !== "all" &&
        category !== "sets"
    ) {

        filtered =
            products.filter(
                product =>
                    product.category ===
                    category
            );
    }

    container.innerHTML =
        "";

    if (!filtered.length) {

        container.innerHTML = `
            <p class="empty-products">

                ${
                    currentLanguage === "ru"
                        ? "Ничего не найдено"
                        : currentLanguage === "kz"
                            ? "Ештеңе табылмады"
                            : "Nothing found"
                }

            </p>
        `;

        return;
    }

    filtered.forEach(
        product => {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "product";

            card.innerHTML = `
                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${escapeHtml(
                        getText(
                            product.name
                        )
                    )}"
                    onclick="openProduct(${product.id})"
                    onerror="this.style.display='none'"
                >

                <div class="product-info">

                    <h3>
                        ${escapeHtml(
                            getText(
                                product.name
                            )
                        )}
                    </h3>

                    <p>
                        ${escapeHtml(
                            getText(
                                product.description
                            )
                        )}
                    </p>

                    <div class="product-bottom">

                        <strong>
                            ${formatPrice(
                                product.price
                            )}
                            ${
                                getProductOptions(product).length
                                    ? " +"
                                    : ""
                            }
                        </strong>

                        <button
                            class="add-to-cart"
                            onclick="
                                event.stopPropagation();
                                ${
                                    getProductOptions(product).length
                                        ? `openProduct(${product.id})`
                                        : `addToCart(${product.id})`
                                }
                            "
                        >
                            ${ui[currentLanguage].add}
                        </button>

                    </div>

                </div>
            `;

            container.appendChild(card);
        }
    );
}

/* SETS */

function renderSets() {

    const container =
        document.getElementById(
            "sets-grid"
        );

    if (!container) {
        return;
    }

    container.innerHTML =
        "";

    sets.forEach(
        set => {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "set-card";

            card.innerHTML = `
                <img
                    src="${set.image}"
                    alt="${escapeHtml(
                        getText(
                            set.name
                        )
                    )}"
                    onclick="openProduct(${set.id})"
                    onerror="this.style.display='none'"
                >

                <div class="set-info">

                    <h3>
                        ${escapeHtml(
                            getText(
                                set.name
                            )
                        )}
                    </h3>

                    <p>
                        ${escapeHtml(
                            getText(
                                set.description
                            )
                        )}
                    </p>

                    <div class="product-bottom">

                        <strong>
                            ${formatPrice(
                                set.price
                            )}
                        </strong>

                        <button
                            class="add-to-cart"
                            onclick="
                                event.stopPropagation();
                                addToCart(${set.id})
                            "
                        >
                            ${ui[currentLanguage].add}
                        </button>

                    </div>

                </div>
            `;

            container.appendChild(card);
        }
    );
}

/* CATEGORIES */

function filterMenu(
    category,
    button
) {

    currentCategory =
        category;

    window.currentCategory =
        category;

    document
        .querySelectorAll(".category")
        .forEach(
            item => {

                item.classList.remove(
                    "active"
                );
            }
        );

    if (button) {

        button.classList.add(
            "active"
        );
    }

    if (category === "sets") {

        renderSets();

        const section =
            document.getElementById(
                "sets"
            );

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        return;
    }

    renderProducts(
        category
    );

    const menu =
        document.getElementById(
            "menu"
        );

    if (menu) {

        menu.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

/* CART */

function createCartKey(
    productId,
    variantId = null
) {

    return `${productId}__${variantId ?? "default"}`;
}

function saveCart() {

    localStorage.setItem(
        "wokipasta_cart",
        JSON.stringify(cart)
    );
}

function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                "wokipasta_cart"
            );

        cart =
            saved
                ? JSON.parse(saved)
                : [];

        if (!Array.isArray(cart)) {
            cart = [];
        }

        cart =
            cart.filter(
                item =>
                    item &&
                    typeof item.id !== "undefined"
            );

        cart.forEach(
            item => {

                if (!item.key) {

                    item.variantId =
                        item.variantId ??
                        null;

                    item.key =
                        createCartKey(
                            item.id,
                            item.variantId
                        );
                }
            }
        );

    } catch {

        cart = [];
    }
}

function getSelectedProductPrice(
    product,
    variant
) {

    if (variant) {
        return Number(
            variant.price
        );
    }

    return Number(
        product.price
    );
}

function addToCart(
    id,
    variantId = null
) {

    const product =
        getProductById(id);

    if (!product) {
        return;
    }

    const options =
        getProductOptions(product);

    let variant =
        null;

    if (options.length) {

        variant =
            options.find(
                option =>
                    String(
                        option.id
                    ) ===
                    String(
                        variantId
                    )
            );

        if (!variant) {

            openProduct(
                product.id
            );

            return;
        }
    }

    const key =
        createCartKey(
            product.id,
            variant
                ? variant.id
                : null
        );

    const existing =
        cart.find(
            item =>
                item.key === key
        );

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id:
                product.id,

            variantId:
                variant
                    ? variant.id
                    : null,

            key,

            quantity: 1
        });
    }

    saveCart();
    updateCart();
}

function addCurrentProductToCart() {

    if (!currentProduct) {
        return;
    }

    const options =
        getProductOptions(
            currentProduct
        );

    if (options.length) {

        if (!currentVariant) {
            return;
        }

        addToCart(
            currentProduct.id,
            currentVariant.id
        );

        return;
    }

    addToCart(
        currentProduct.id
    );
}

function removeFromCart(
    key
) {

    const item =
        cart.find(
            product =>
                product.key === key
        );

    if (!item) {
        return;
    }

    item.quantity -= 1;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.key !== key
            );
    }

    saveCart();
    updateCart();
}

function addCartItemAgain(
    key
) {

    const item =
        cart.find(
            product =>
                product.key === key
        );

    if (!item) {
        return;
    }

    item.quantity += 1;

    saveCart();
    updateCart();
}

function clearCart() {

    cart = [];

    saveCart();

    updateCart();
}

function getCartItemVariant(
    product,
    item
) {

    if (
        !item ||
        item.variantId === null ||
        typeof item.variantId === "undefined"
    ) {
        return null;
    }

    return getProductOptions(product)
        .find(
            option =>
                String(
                    option.id
                ) ===
                String(
                    item.variantId
                )
        ) || null;
}

/* CART DISPLAY */

function updateCart() {

    const container =
        document.getElementById(
            "cart-items"
        );

    const totalElement =
        document.getElementById(
            "cart-total"
        );

    const countElement =
        document.getElementById(
            "cart-count"
        );

    if (!container) {
        return;
    }

    if (!cart.length) {

        container.innerHTML = `
            <div class="empty-cart">
                ${ui[currentLanguage].emptyCart}
            </div>
        `;

        if (totalElement) {
            totalElement.textContent =
                "0 ₸";
        }

        if (countElement) {
            countElement.textContent =
                "0";
        }

        return;
    }

    let subtotal = 0;
    let quantity = 0;

    container.innerHTML =
        "";

    cart.forEach(
        item => {

            const product =
                getProductById(
                    item.id
                );

            if (!product) {
                return;
            }

            const variant =
                getCartItemVariant(
                    product,
                    item
                );

            const itemPrice =
                getSelectedProductPrice(
                    product,
                    variant
                );

            subtotal +=
                itemPrice *
                item.quantity;

            quantity +=
                item.quantity;

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "cart-item";

            const variantName =
                variant
                    ? getText(
                        variant.label
                    )
                    : "";

            row.innerHTML = `

                <div class="cart-item-info">

                    <strong>
                        ${escapeHtml(
                            getText(
                                product.name
                            )
                        )}
                    </strong>

                    ${
                        variantName
                            ? `
                                <span class="cart-item-variant">
                                    ${escapeHtml(
                                        variantName
                                    )}
                                </span>
                              `
                            : ""
                    }

                    <span>
                        ${formatPrice(
                            itemPrice
                        )}
                    </span>

                </div>

                <div class="cart-item-controls">

                    <button
                        onclick="
                            removeFromCart(
                                '${escapeHtml(
                                    item.key
                                )}'
                            )
                        "
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="
                            addCartItemAgain(
                                '${escapeHtml(
                                    item.key
                                )}'
                            )
                        "
                    >
                        +
                    </button>

                </div>
            `;

            container.appendChild(
                row
            );
        }
    );

    const discount =
        getPromoDiscount();

    const finalTotal =
        Math.max(
            0,
            subtotal -
            discount
        );

    if (discount > 0) {

        const promoRow =
            document.createElement(
                "div"
            );

        promoRow.className =
            "cart-promo";

        promoRow.innerHTML = `

            <strong>
                ${ui[currentLanguage].promo}
            </strong>

            <span>
                ${
                    currentLanguage === "ru"
                        ? `Бесплатный WOK с курицей и яичной лапшой × ${getPromoRewards()}`
                        : currentLanguage === "kz"
                            ? `Тауық пен жұмыртқалы кеспесі бар тегін WOK × ${getPromoRewards()}`
                            : `Free Chicken Egg Noodle WOK × ${getPromoRewards()}`
                }
            </span>

            <b>
                −${formatPrice(
                    discount
                )}
            </b>

        `;

        container.appendChild(
            promoRow
        );
    }

    if (totalElement) {

        totalElement.textContent =
            formatPrice(
                finalTotal
            );
    }

    if (countElement) {

        countElement.textContent =
            String(
                quantity
            );
    }
}

/* CART MODAL */

function openCart() {

    const modal =
        document.getElementById(
            "cart-modal"
        );

    if (modal) {

        modal.classList.add(
            "open"
        );
    }

    updateCart();
}

function closeCart() {

    const modal =
        document.getElementById(
            "cart-modal"
        );

    if (modal) {

        modal.classList.remove(
            "open"
        );
    }
}

/* PRODUCT MODAL */

function openProduct(
    id
) {

    const product =
        getProductById(id);

    if (!product) {
        return;
    }

    currentProduct =
        product;

    currentImageIndex =
        0;

    const options =
        getProductOptions(
            product
        );

    currentVariant =
        options.length
            ? options[0]
            : null;

    const modal =
        document.getElementById(
            "product-modal"
        );

    const title =
        document.getElementById(
            "modal-title"
        );

    const description =
        document.getElementById(
            "modal-description"
        );

    const price =
        document.getElementById(
            "modal-price"
        );

    const addButton =
        document.getElementById(
            "modal-add"
        );

    if (!modal) {
        return;
    }

    if (title) {

        title.textContent =
            getText(
                product.name
            );
    }

    if (description) {

        description.textContent =
            getText(
                product.description
            );
    }

    renderProductOptions();

    updateModalPrice();

    if (addButton) {

        addButton.textContent =
            ui[currentLanguage].add;

        addButton.onclick =
            () => {

                addCurrentProductToCart();
            };
    }

    renderGallery();

    modal.classList.add(
        "open"
    );

    renderReviews(
        product.id
    );
}

function closeProduct() {

    const modal =
        document.getElementById(
            "product-modal"
        );

    if (modal) {

        modal.classList.remove(
            "open"
        );
    }

    currentProduct =
        null;

    currentVariant =
        null;
}

/* PRODUCT OPTIONS */

function renderProductOptions() {

    const container =
        document.getElementById(
            "modal-options"
        );

    if (!container) {
        return;
    }

    container.innerHTML =
        "";

    if (!currentProduct) {
        return;
    }

    const options =
        getProductOptions(
            currentProduct
        );

    if (!options.length) {
        return;
    }

    const group =
        document.createElement(
            "div"
        );

    group.className =
        "option-group";

    group.innerHTML = `
        <div class="option-group-title">
            ${ui[currentLanguage].combo}
        </div>

        <div class="option-list"></div>
    `;

    const list =
        group.querySelector(
            ".option-list"
        );

    options.forEach(
        option => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "option-button";

            if (
                currentVariant &&
                String(
                    currentVariant.id
                ) ===
                    String(
                        option.id
                    )
            ) {

                button.classList.add(
                    "active"
                );
            }

            const label =
                escapeHtml(
                    getText(
                        option.label
                    )
                );

            const extra =
                option.extra
                    ? `
                        <small>
                            ${escapeHtml(
                                getText(
                                    option.extra
                                )
                            )}
                        </small>
                      `
                    : "";

            button.innerHTML = `
                <span>
                    ${label}
                </span>

                ${extra}

                <small>
                    ${formatPrice(
                        option.price
                    )}
                </small>
            `;

            button.onclick =
                () => {

                    currentVariant =
                        option;

                    renderProductOptions();

                    updateModalPrice();
                };

            list.appendChild(
                button
            );
        }
    );

    container.appendChild(
        group
    );
}

function updateModalPrice() {

    const price =
        document.getElementById(
            "modal-price"
        );

    if (!price || !currentProduct) {
        return;
    }

    const selectedPrice =
        currentVariant
            ? currentVariant.price
            : currentProduct.price;

    price.textContent =
        formatPrice(
            selectedPrice
        );
}

/* GALLERY */

function renderGallery() {

    if (!currentProduct) {
        return;
    }

    const images =
        getProductImages(
            currentProduct
        );

    const image =
        document.getElementById(
            "modal-image"
        );

    const dots =
        document.getElementById(
            "gallery-dots"
        );

    const prev =
        document.querySelector(
            ".gallery-prev"
        );

    const next =
        document.querySelector(
            ".gallery-next"
        );

    if (!image) {
        return;
    }

    if (!images.length) {

        image.style.display =
            "none";

        if (dots) {
            dots.innerHTML =
                "";
        }

        return;
    }

    image.style.display =
        "block";

    image.src =
        images[currentImageIndex];

    image.alt =
        getText(
            currentProduct.name
        );

    if (
        images.length <= 1
    ) {

        if (prev) {
            prev.style.display =
                "none";
        }

        if (next) {
            next.style.display =
                "none";
        }

        if (dots) {
            dots.innerHTML =
                "";
        }

        return;
    }

    if (prev) {
        prev.style.display =
            "flex";
    }

    if (next) {
        next.style.display =
            "flex";
    }

    if (!dots) {
        return;
    }

    dots.innerHTML =
        "";

    images.forEach(
        (_, index) => {

            const dot =
                document.createElement(
                    "button"
                );

            dot.type =
                "button";

            dot.className =
                "gallery-dot";

            if (
                index ===
                currentImageIndex
            ) {

                dot.classList.add(
                    "active"
                );
            }

            dot.onclick =
                () => {

                    currentImageIndex =
                        index;

                    renderGallery();
                };

            dots.appendChild(
                dot
            );
        }
    );
}

function nextImage() {

    if (!currentProduct) {
        return;
    }

    const images =
        getProductImages(
            currentProduct
        );

    if (
        images.length <= 1
    ) {
        return;
    }

    currentImageIndex =
        (
            currentImageIndex +
            1
        ) % images.length;

    renderGallery();
}

function previousImage() {

    if (!currentProduct) {
        return;
    }

    const images =
        getProductImages(
            currentProduct
        );

    if (
        images.length <= 1
    ) {
        return;
    }

    currentImageIndex =
        (
            currentImageIndex -
            1 +
            images.length
        ) % images.length;

    renderGallery();
}

/* MODAL CLICK */

document.addEventListener(
    "click",
    event => {

        const productModal =
            document.getElementById(
                "product-modal"
            );

        const cartModal =
            document.getElementById(
                "cart-modal"
            );

        if (
            productModal &&
            event.target ===
                productModal
        ) {

            closeProduct();
        }

        if (
            cartModal &&
            event.target ===
                cartModal
        ) {

            closeCart();
        }
    }
);

/* REVIEWS */

function loadReviews() {

    try {

        const saved =
            localStorage.getItem(
                "wokipasta_reviews"
            );

        reviews =
            saved
                ? JSON.parse(saved)
                : [];

        if (!Array.isArray(reviews)) {
            reviews = [];
        }

    } catch {

        reviews = [];
    }
}

function saveReviews() {

    localStorage.setItem(
        "wokipasta_reviews",
        JSON.stringify(
            reviews
        )
    );
}

function createReviewsBlock() {

    let container =
        document.getElementById(
            "reviews-container"
        );

    if (!container) {

        const modalInfo =
            document.querySelector(
                ".modal-info"
            );

        if (!modalInfo) {
            return;
        }

        container =
            document.createElement(
                "div"
            );

        container.id =
            "reviews-container";

        modalInfo.appendChild(
            container
        );
    }

    let section =
        document.getElementById(
            "reviews-section"
        );

    if (section) {

        updateReviewTexts();

        return;
    }

    section =
        document.createElement(
            "div"
        );

    section.id =
        "reviews-section";

    section.innerHTML = `
        <div class="reviews-summary">

            <h3 id="reviews-title">
                ${ui[currentLanguage].reviews}
            </h3>

            <div id="reviews-average"></div>

        </div>

        <div
            id="reviews-list"
            class="reviews-list">
        </div>

        <div class="review-form">

            <h3 id="review-form-title">
                ${ui[currentLanguage].leaveReview}
            </h3>

            <input
                id="review-name"
                type="text"
                placeholder="${ui[currentLanguage].name}"
            >

            <textarea
                id="review-text"
                placeholder="${ui[currentLanguage].comment}"
            ></textarea>

            <div class="review-stars">

                <button type="button" data-rating="1">
                    ★
                </button>

                <button type="button" data-rating="2">
                    ★
                </button>

                <button type="button" data-rating="3">
                    ★
                </button>

                <button type="button" data-rating="4">
                    ★
                </button>

                <button type="button" data-rating="5">
                    ★
                </button>

            </div>

            <button
                type="button"
                id="submit-review"
                class="review-submit">
                ${ui[currentLanguage].sendReview}
            </button>

        </div>
    `;

    container.appendChild(
        section
    );

    let selectedRating = 5;

    section
        .querySelectorAll(
            ".review-stars button"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        selectedRating =
                            Number(
                                button.dataset.rating
                            );

                        section
                            .querySelectorAll(
                                ".review-stars button"
                            )
                            .forEach(
                                star => {

                                    star.classList.toggle(
                                        "active",
                                        Number(
                                            star.dataset.rating
                                        ) <=
                                            selectedRating
                                    );
                                }
                            );
                    }
                );
            }
        );

    section
        .querySelectorAll(
            ".review-stars button"
        )
        .forEach(
            star => {

                star.classList.toggle(
                    "active",
                    Number(
                        star.dataset.rating
                    ) <=
                        selectedRating
                );
            }
        );

    section
        .querySelector(
            "#submit-review"
        )
        .addEventListener(
            "click",
            () => {

                submitReview(
                    selectedRating
                );
            }
        );
}

function updateReviewTexts() {

    const title =
        document.getElementById(
            "reviews-title"
        );

    const formTitle =
        document.getElementById(
            "review-form-title"
        );

    const name =
        document.getElementById(
            "review-name"
        );

    const text =
        document.getElementById(
            "review-text"
        );

    const submit =
        document.getElementById(
            "submit-review"
        );

    if (title) {

        title.textContent =
            ui[currentLanguage]
                .reviews;
    }

    if (formTitle) {

        formTitle.textContent =
            ui[currentLanguage]
                .leaveReview;
    }

    if (name) {

        name.placeholder =
            ui[currentLanguage]
                .name;
    }

    if (text) {

        text.placeholder =
            ui[currentLanguage]
                .comment;
    }

    if (submit) {

        submit.textContent =
            ui[currentLanguage]
                .sendReview;
    }
}

function renderReviews(
    productId
) {

    createReviewsBlock();

    updateReviewTexts();

    const list =
        document.getElementById(
            "reviews-list"
        );

    const average =
        document.getElementById(
            "reviews-average"
        );

    if (!list || !average) {
        return;
    }

    const productReviews =
        reviews.filter(
            review =>
                Number(
                    review.productId
                ) ===
                Number(productId)
        );

    if (!productReviews.length) {

        average.textContent =
            ui[currentLanguage]
                .noReviews;

        list.innerHTML =
            "";

        return;
    }

    const sum =
        productReviews.reduce(
            (total, review) =>
                total +
                Number(
                    review.rating
                ),
            0
        );

    const avg =
        sum /
        productReviews.length;

    average.innerHTML = `
        <strong>
            ${avg.toFixed(1)} ★
        </strong>

        <span>
            (${productReviews.length}
            ${ui[currentLanguage].reviewWord})
        </span>
    `;

    list.innerHTML =
        "";

    productReviews
        .slice()
        .reverse()
        .forEach(
            review => {

                const item =
                    document.createElement(
                        "div"
                    );

                item.className =
                    "review-item";

                item.innerHTML = `
                    <div class="review-top">

                        <strong>
                            ${escapeHtml(
                                review.name
                            )}
                        </strong>

                        <span class="review-date">
                            ${escapeHtml(
                                review.date
                            )}
                        </span>

                    </div>

                    <div class="review-rating">

                        ${"★".repeat(
                            Number(
                                review.rating
                            )
                        )}

                        ${"☆".repeat(
                            5 -
                            Number(
                                review.rating
                            )
                        )}

                    </div>

                    <p>
                        ${escapeHtml(
                            review.text
                        )}
                    </p>
                `;

                list.appendChild(
                    item
                );
            }
        );
}

function submitReview(
    rating
) {

    if (!currentProduct) {
        return;
    }

    const nameInput =
        document.getElementById(
            "review-name"
        );

    const textInput =
        document.getElementById(
            "review-text"
        );

    if (
        !nameInput ||
        !textInput
    ) {
        return;
    }

    const name =
        nameInput.value.trim();

    const text =
        textInput.value.trim();

    if (!name || !text) {

        alert(
            ui[currentLanguage]
                .fillReview
        );

        return;
    }

    reviews.push({

        productId:
            currentProduct.id,

        name,

        text,

        rating,

        date:
            new Date()
                .toLocaleDateString(
                    currentLanguage === "ru"
                        ? "ru-RU"
                        : currentLanguage === "kz"
                            ? "kk-KZ"
                            : "en-US"
                )
    });

    saveReviews();

    nameInput.value =
        "";

    textInput.value =
        "";

    renderReviews(
        currentProduct.id
    );

    alert(
        ui[currentLanguage]
            .thankReview
    );
}

/* LANGUAGE */

function changeLanguage(
    language
) {

    if (
        !["ru", "kz", "en"]
            .includes(language)
    ) {
        language = "ru";
    }

    currentLanguage =
        language;

    localStorage.setItem(
        "wokipasta_language",
        currentLanguage
    );

    document.documentElement.lang =
        currentLanguage;

    document
        .querySelectorAll(
            ".language"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );
            }
        );

    document
        .querySelectorAll(
            ".language"
        )
        .forEach(
            button => {

                if (
                    button.textContent
                        .trim()
                        .toLowerCase() ===
                    currentLanguage
                ) {

                    button.classList.add(
                        "active"
                    );
                }
            }
        );

    document
        .querySelectorAll(
            "[data-ru], [data-kz], [data-en]"
        )
        .forEach(
            element => {

                const translated =
                    element.getAttribute(
                        `data-${currentLanguage}`
                    );

                if (
                    translated !==
                    null
                ) {

                    element.innerHTML =
                        translated;
                }
            }
        );

    const searchInput =
        document.getElementById(
            "menu-search"
        );

    if (searchInput) {

        const placeholder =
            searchInput.getAttribute(
                `data-placeholder-${currentLanguage}`
            );

        if (placeholder) {

            searchInput.placeholder =
                placeholder;
        }
    }

    renderProducts(
        currentCategory
    );

    renderSets();

    updateCart();

    renderPromoBanner();

    updateReviewTexts();

    if (currentProduct) {

        const id =
            currentProduct.id;

        openProduct(id);
    }
}

/* SEARCH */

function setupSearch() {

    const input =
        document.getElementById(
            "menu-search"
        );

    if (!input) {
        return;
    }

    input.addEventListener(
        "input",
        () => {

            const query =
                input.value
                    .toLowerCase()
                    .trim();

            const container =
                document.getElementById(
                    "products"
                );

            if (!container) {
                return;
            }

            const filtered =
                products.filter(
                    product => {

                        const name =
                            getText(
                                product.name
                            )
                                .toLowerCase();

                        const description =
                            getText(
                                product.description
                            )
                                .toLowerCase();

                        const optionsText =
                            getProductOptions(
                                product
                            )
                                .map(
                                    option =>
                                        getText(
                                            option.label
                                        )
                                )
                                .join(" ")
                                .toLowerCase();

                        return (
                            name.includes(
                                query
                            ) ||
                            description.includes(
                                query
                            ) ||
                            optionsText.includes(
                                query
                            )
                        );
                    }
                );

            container.innerHTML =
                "";

            filtered.forEach(
                product => {

                    const card =
                        document.createElement(
                            "article"
                        );

                    card.className =
                        "product";

                    card.innerHTML = `
                        <img
                            class="product-image"
                            src="${product.image}"
                            alt="${escapeHtml(
                                getText(
                                    product.name
                                )
                            )}"
                            onclick="openProduct(${product.id})"
                            onerror="this.style.display='none'"
                        >

                        <div class="product-info">

                            <h3>
                                ${escapeHtml(
                                    getText(
                                        product.name
                                    )
                                )}
                            </h3>

                            <p>
                                ${escapeHtml(
                                    getText(
                                        product.description
                                    )
                                )}
                            </p>

                            <div class="product-bottom">

                                <strong>
                                    ${formatPrice(
                                        product.price
                                    )}
                                </strong>

                                <button
                                    class="add-to-cart"
                                    onclick="
                                        event.stopPropagation();
                                        ${
                                            getProductOptions(product).length
                                                ? `openProduct(${product.id})`
                                                : `addToCart(${product.id})`
                                        }
                                    "
                                >
                                    ${ui[currentLanguage].add}
                                </button>

                            </div>

                        </div>
                    `;

                    container.appendChild(
                        card
                    );
                }
            );
        }
    );
}

/* STATIC */

function updateStaticLanguage() {

    document
        .querySelectorAll(
            "[data-ru], [data-kz], [data-en]"
        )
        .forEach(
            element => {

                const translated =
                    element.getAttribute(
                        `data-${currentLanguage}`
                    );

                if (
                    translated !==
                    null
                ) {

                    element.innerHTML =
                        translated;
                }
            }
        );
}

/* CHECKOUT */

function checkout() {

    if (!cart.length) {

        alert(
            ui[currentLanguage]
                .orderEmpty
        );

        return;
    }

    const subtotal =
        cart.reduce(
            (total, item) => {

                const product =
                    getProductById(
                        item.id
                    );

                if (!product) {
                    return total;
                }

                const variant =
                    getCartItemVariant(
                        product,
                        item
                    );

                const price =
                    getSelectedProductPrice(
                        product,
                        variant
                    );

                return (
                    total +
                    price *
                    item.quantity
                );

            },
            0
        );

    const discount =
        getPromoDiscount();

    const total =
        Math.max(
            0,
            subtotal -
            discount
        );

    let message;

    if (
        currentLanguage === "ru"
    ) {

        message =
            `Спасибо! Заказ принят.\n\nИтого: ${formatPrice(total)}`;

        if (discount > 0) {

            message +=
                `\n\nАкция применена: −${formatPrice(discount)}`;
        }

    } else if (
        currentLanguage === "kz"
    ) {

        message =
            `Рахмет! Тапсырысыңыз қабылданды.\n\nБарлығы: ${formatPrice(total)}`;

        if (discount > 0) {

            message +=
                `\n\nАкция қолданылды: −${formatPrice(discount)}`;
        }

    } else {

        message =
            `Thank you! Your order has been accepted.\n\nTotal: ${formatPrice(total)}`;

        if (discount > 0) {

            message +=
                `\n\nPromotion applied: −${formatPrice(discount)}`;
        }
    }

    alert(
        message
    );
}

/* INIT */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const savedLanguage =
            localStorage.getItem(
                "wokipasta_language"
            );

        if (
            ["ru", "kz", "en"]
                .includes(
                    savedLanguage
                )
        ) {

            currentLanguage =
                savedLanguage;

        } else {

            currentLanguage =
                "ru";
        }

        document.documentElement.lang =
            currentLanguage;

        document
            .querySelectorAll(
                ".language"
            )
            .forEach(
                button => {

                    button.classList.remove(
                        "active"
                    );
                }
            );

        document
            .querySelectorAll(
                ".language"
            )
            .forEach(
                button => {

                    if (
                        button.textContent
                            .trim()
                            .toLowerCase() ===
                        currentLanguage
                    ) {

                        button.classList.add(
                            "active"
                        );
                    }
                }
            );

        loadCart();

        loadReviews();

        currentCategory =
            "all";

        window.currentCategory =
            "all";

        renderProducts(
            "all"
        );

        renderSets();

        updateCart();

        renderPromoBanner();

        updateStaticLanguage();

        setupSearch();

        const searchInput =
            document.getElementById(
                "menu-search"
            );

        if (searchInput) {

            const placeholder =
                searchInput.getAttribute(
                    `data-placeholder-${currentLanguage}`
                );

            if (placeholder) {

                searchInput.placeholder =
                    placeholder;
            }
        }

        setInterval(
            () => {

                updateCart();

                renderPromoBanner();

            },
            30000
        );
    }
);