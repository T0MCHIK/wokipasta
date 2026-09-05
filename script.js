/* SETTINGS */

let currentLanguage = "ru";
let cart = [];
let currentProduct = null;
let currentCategory = "all";
let currentImageIndex = 0;
let reviews = [];

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
        free: "БЕСПЛАТНО"
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
        free: "ТЕГІН"
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
        free: "FREE"
    }
};

/* PRODUCTS */

const products = [

    {
        id: 20,
        category: "sushi",
        price: 3590,
        image: "images/philadelphia-light.png",
        images: [
            "images/philadelphia-light.png"
        ],
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
        price: 2590,
        image: "images/california.png",
        images: [
            "images/california.png"
        ],
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
        price: 3590,
        image: "images/dragon.png",
        images: [
            "images/dragon.png"
        ],
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
        price: 2990,
        image: "images/tasty-roll.png",
        images: [
            "images/tasty-roll.png"
        ],
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
        price: 2890,
        image: "images/murakami.png",
        images: [
            "images/murakami.png"
        ],
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
        id: 25,
        category: "sushi",
        price: 3090,
        image: "images/caesar-roll.png",
        images: [
            "images/caesar-roll.png"
        ],
        name: {
            ru: "Ролл Цезарь",
            kz: "Цезарь роллы",
            en: "Caesar Roll"
        },
        description: {
            ru: "Ролл в стиле Цезарь",
            kz: "Цезарь стиліндегі ролл",
            en: "Caesar-style roll"
        }
    },

    {
        id: 26,
        category: "sushi",
        price: 2790,
        image: "images/yin-yang.png",
        images: [
            "images/yin-yang.png"
        ],
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
        price: 1900,
        image: "images/vegan-roll.png",
        images: [
            "images/vegan-roll.png"
        ],
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
        price: 3890,
        image: "images/geisha-kiss.png",
        images: [
            "images/geisha-kiss.png"
        ],
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
        price: 3390,
        image: "images/ebi-tempura.png",
        images: [
            "images/ebi-tempura.png"
        ],
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
        price: 3190,
        image: "images/sake-tempura.png",
        images: [
            "images/sake-tempura.png"
        ],
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
        price: 2890,
        image: "images/kani-tempura.png",
        images: [
            "images/kani-tempura.png"
        ],
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
        price: 3090,
        image: "images/kani-wok-baked.png",
        images: [
            "images/kani-wok-baked.png"
        ],
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
        price: 3890,
        image: "images/philadelphia-grill.png",
        images: [
            "images/philadelphia-grill.png"
        ],
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
        id: 34,
        category: "sushi",
        price: 2390,
        image: "images/unagi-maki.png",
        images: [
            "images/unagi-maki.png"
        ],
        name: {
            ru: "Хосомаки унаги",
            kz: "Унаги хосомаки",
            en: "Unagi Maki"
        },
        description: {
            ru: "Угорь, рис, нори",
            kz: "Жыланбалық, күріш, нори",
            en: "Eel, rice, nori"
        }
    },

    {
        id: 35,
        category: "sushi",
        price: 2890,
        image: "images/sake-maki.png",
        images: [
            "images/sake-maki.png"
        ],
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
        price: 1490,
        image: "images/kappa-maki.png",
        images: [
            "images/kappa-maki.png"
        ],
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
        price: 3190,
        image: "images/new-york.png",
        images: [
            "images/new-york.png"
        ],
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
        id: 38,
        category: "sushi",
        price: 3090,
        image: "images/sake-kunsei.png",
        images: [
            "images/sake-kunsei.png"
        ],
        name: {
            ru: "Сяке кунсей",
            kz: "Сяке кунсей",
            en: "Sake Kunsei"
        },
        description: {
            ru: "Ролл с копченым лососем",
            kz: "Ысталған албырт қосылған ролл",
            en: "Roll with smoked salmon"
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
            ru: "Пончик ролл с курицей",
            kz: "Тауықты пончик роллы",
            en: "Chicken Donut Roll"
        },
        description: {
            ru: "Фирменный ролл с курицей",
            kz: "Тауық қосылған фирмалық ролл",
            en: "Signature chicken roll"
        }
    },

    /* WOK */

    {
        id: 40,
        category: "wok",
        price: 3290,
        image: "images/wok-chicken-udon.png",
        images: [
            "images/wok-chicken-udon.png"
        ],
        name: {
            ru: "Вок с курицей с соусом удон",
            kz: "Тауық еті қосылған удон вок",
            en: "Chicken Udon WOK"
        },
        description: {
            ru: "Курица, удон и фирменный соус",
            kz: "Тауық, удон және фирмалық соус",
            en: "Chicken, udon and signature sauce"
        }
    },

    {
        id: 41,
        category: "wok",
        price: 3290,
        image: "images/wok-chicken-sichuan.png",
        images: [
            "images/wok-chicken-sichuan.png"
        ],
        name: {
            ru: "Вок удон с курицей в сычуанском соусе",
            kz: "Сычуань соусындағы тауықты удон",
            en: "Chicken Sichuan Udon WOK"
        },
        description: {
            ru: "Курица, удон, острый сычуанский соус",
            kz: "Тауық, удон, ащы сычуань соусы",
            en: "Chicken, udon and spicy Sichuan sauce"
        }
    },

    {
        id: 42,
        category: "wok",
        price: 3690,
        image: "images/wok-seafood-udon.png",
        images: [
            "images/wok-seafood-udon.png"
        ],
        name: {
            ru: "Вок удон с морепродуктами под соусом унаги",
            kz: "Унаги соусындағы теңіз өнімдері бар удон",
            en: "Seafood Udon WOK with Unagi Sauce"
        },
        description: {
            ru: "Морепродукты, удон, соус унаги",
            kz: "Теңіз өнімдері, удон, унаги соусы",
            en: "Seafood, udon and unagi sauce"
        }
    },

    {
        id: 43,
        category: "wok",
        price: 3490,
        image: "images/wok-beef.png",
        images: [
            "images/wok-beef.png"
        ],
        name: {
            ru: "Вок с говядиной и гречневой лапшой",
            kz: "Сиыр еті мен қарақұмық кеспесі бар вок",
            en: "Beef Buckwheat WOK"
        },
        description: {
            ru: "Говядина, гречневая лапша, овощи",
            kz: "Сиыр еті, қарақұмық кеспесі, көкөністер",
            en: "Beef, buckwheat noodles, vegetables"
        }
    },

    {
        id: 44,
        category: "wok",
        price: 3290,
        image: "images/wok-chicken-buckwheat.png",
        images: [
            "images/wok-chicken-buckwheat.png"
        ],
        name: {
            ru: "Вок с курицей и гречневой лапшой",
            kz: "Тауық еті мен қарақұмық кеспесі бар вок",
            en: "Chicken Buckwheat WOK"
        },
        description: {
            ru: "Курица, гречневая лапша, овощи",
            kz: "Тауық, қарақұмық кеспесі, көкөністер",
            en: "Chicken, buckwheat noodles, vegetables"
        }
    },

    {
        id: 45,
        category: "wok",
        price: 3690,
        image: "images/wok-shrimp-buckwheat.png",
        images: [
            "images/wok-shrimp-buckwheat.png"
        ],
        name: {
            ru: "Вок с королевскими креветками и гречневой лапшой",
            kz: "Корольдік асшаяндар мен қарақұмық кеспесі бар вок",
            en: "Royal Shrimp Buckwheat WOK"
        },
        description: {
            ru: "Королевские креветки, гречневая лапша, овощи",
            kz: "Корольдік асшаяндар, қарақұмық кеспесі, көкөністер",
            en: "Royal shrimp, buckwheat noodles, vegetables"
        }
    },

    {
        id: 46,
        category: "wok",
        price: 3690,
        image: "images/wok-seafood-buckwheat.png",
        images: [
            "images/wok-seafood-buckwheat.png"
        ],
        name: {
            ru: "Вок с морепродуктами и гречневой лапшой",
            kz: "Теңіз өнімдері мен қарақұмық кеспесі бар вок",
            en: "Seafood Buckwheat WOK"
        },
        description: {
            ru: "Морепродукты, гречневая лапша, овощи",
            kz: "Теңіз өнімдері, қарақұмық кеспесі, көкөністер",
            en: "Seafood, buckwheat noodles, vegetables"
        }
    },

    {
        id: 47,
        category: "wok",
        price: 3290,
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
            ru: "Курица, яичная лапша, овощи",
            kz: "Тауық, жұмыртқалы кеспе, көкөністер",
            en: "Chicken, egg noodles, vegetables"
        }
    },

    {
        id: 48,
        category: "wok",
        price: 3690,
        image: "images/wok-rice-shrimp.png",
        images: [
            "images/wok-rice-shrimp.png"
        ],
        name: {
            ru: "Рис с королевскими креветками",
            kz: "Корольдік асшаяндар қосылған күріш",
            en: "Rice with Royal Shrimp"
        },
        description: {
            ru: "Рис, королевские креветки, овощи",
            kz: "Күріш, корольдік асшаяндар, көкөністер",
            en: "Rice, royal shrimp, vegetables"
        }
    },

    {
        id: 49,
        category: "wok",
        price: 3690,
        image: "images/wok-rice-seafood.png",
        images: [
            "images/wok-rice-seafood.png"
        ],
        name: {
            ru: "Рис с морепродуктами",
            kz: "Теңіз өнімдері қосылған күріш",
            en: "Seafood Rice"
        },
        description: {
            ru: "Рис, морепродукты, овощи",
            kz: "Күріш, теңіз өнімдері, көкөністер",
            en: "Rice, seafood, vegetables"
        }
    },

    {
        id: 50,
        category: "wok",
        price: 3290,
        image: "images/wok-rice-chicken.png",
        images: [
            "images/wok-rice-chicken.png"
        ],
        name: {
            ru: "Рис с курицей",
            kz: "Тауық еті қосылған күріш",
            en: "Chicken Rice"
        },
        description: {
            ru: "Рис, курица, овощи",
            kz: "Күріш, тауық, көкөністер",
            en: "Rice, chicken, vegetables"
        }
    },

    {
        id: 51,
        category: "wok",
        price: 3690,
        image: "images/wok-noodles-seafood.png",
        images: [
            "images/wok-noodles-seafood.png"
        ],
        name: {
            ru: "Яичная лапша с морепродуктами",
            kz: "Теңіз өнімдері қосылған жұмыртқалы кеспе",
            en: "Egg Noodles with Seafood"
        },
        description: {
            ru: "Яичная лапша, морепродукты, овощи",
            kz: "Жұмыртқалы кеспе, теңіз өнімдері, көкөністер",
            en: "Egg noodles, seafood, vegetables"
        }
    },

    {
        id: 52,
        category: "wok",
        price: 3690,
        image: "images/wok-shrimp-egg.png",
        images: [
            "images/wok-shrimp-egg.png"
        ],
        name: {
            ru: "Вок с креветками и яичной лапшой",
            kz: "Асшаяндар мен жұмыртқалы кеспе бар вок",
            en: "Shrimp Egg Noodle WOK"
        },
        description: {
            ru: "Креветки, яичная лапша, овощи",
            kz: "Асшаяндар, жұмыртқалы кеспе, көкөністер",
            en: "Shrimp, egg noodles, vegetables"
        }
    },

    /* BURGERS */

    {
        id: 60,
        category: "burgers",
        price: 2890,
        image: "images/Beverly.webp",
        images: [
            "images/Beverly.webp",
            "images/Beverly2.webp",
            "images/Beverly3.webp"
        ],
        name: {
            ru: "Беверлли Хилз",
            kz: "Беверли Хиллз",
            en: "Beverly Hills"
        },
        description: {
            ru: "Говяжья котлета, черная картофельная булочка, соус чипотле, гуакамоле",
            kz: "Сиыр котлетасы, қара картоп булочкасы, чипотле соусы, гуакамоле",
            en: "Beef patty, black potato bun, chipotle sauce, guacamole"
        }
    },

    {
        id: 61,
        category: "burgers",
        price: 3190,
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
        }
    },

    {
        id: 62,
        category: "burgers",
        price: 2890,
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
            ru: "Говяжья котлета, чеддер, томат, айсберг",
            kz: "Сиыр котлетасы, чеддер, қызанақ, айсберг",
            en: "Beef patty, cheddar, tomato, iceberg"
        }
    },

    {
        id: 63,
        category: "burgers",
        price: 3190,
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
            ru: "Говяжья котлета, копченый вишневый соус, айсберг",
            kz: "Сиыр котлетасы, ысталған шие соусы, айсберг",
            en: "Beef patty, smoked cherry sauce, iceberg"
        }
    },

    {
        id: 64,
        category: "burgers",
        price: 2690,
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
            ru: "Куриная котлета, чеддер, томат, айсберг",
            kz: "Тауық котлетасы, чеддер, қызанақ, айсберг",
            en: "Chicken patty, cheddar, tomato, iceberg"
        }
    },

    {
        id: 65,
        category: "burgers",
        price: 2890,
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
        }
    },

    /* PIZZA */

    {
        id: 70,
        category: "pizza",
        price: 3090,
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
        price: 4190,
        image: "images/four-cheese.png",
        images: [
            "images/four-cheese.png"
        ],
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
        price: 3090,
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
        price: 4290,
        image: "images/hoisin-chicken.png",
        images: [
            "images/hoisin-chicken.png"
        ],
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
        price: 4190,
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
        price: 3790,
        image: "images/4seasons.webp",
        images: [
            "images/4seasons.webp"
        ],
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
        price: 4190,
        image: "images/caesar-pizza.png",
        images: [
            "images/caesar-pizza.png"
        ],
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
        price: 3290,
        image: "images/pasta-mushroom-cream.png",
        images: [
            "images/pasta-mushroom-cream.png"
        ],
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
        price: 3290,
        image: "images/pasta-chicken-cream.png",
        images: [
            "images/pasta-chicken-cream.png"
        ],
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
        price: 3290,
        image: "images/pasta-mix-mushrooms.png",
        images: [
            "images/pasta-mix-mushrooms.png"
        ],
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
        price: 3290,
        image: "images/pasta-chicken-tomato.png",
        images: [
            "images/pasta-chicken-tomato.png"
        ],
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
        price: 3690,
        image: "images/pasta-seafood-tomato.png",
        images: [
            "images/pasta-seafood-tomato.png"
        ],
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
        price: 3690,
        image: "images/pasta-seafood-cream.png",
        images: [
            "images/pasta-seafood-cream.png"
        ],
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
        price: 3000,
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
        price: 3690,
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
        price: 2590,
        image: "images/fresh-asia.png",
        images: [
            "images/fresh-asia.png"
        ],
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
        price: 2790,
        image: "images/chuka.png",
        images: [
            "images/chuka.png"
        ],
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
        price: 2590,
        image: "images/tutti-frutti.png",
        images: [
            "images/tutti-frutti.png"
        ],
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
        price: 1900,
        image: "images/coleslaw.png",
        images: [
            "images/coleslaw.png"
        ],
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
        price: 3590,
        image: "images/nicoise.png",
        images: [
            "images/nicoise.png"
        ],
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
        price: 3290,
        image: "images/caesar-chicken.png",
        images: [
            "images/caesar-chicken.png"
        ],
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
        price: 1400,
        image: "images/fries.png",
        images: [
            "images/fries.png"
        ],
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
        price: 3100,
        image: "images/chicken-wings.png",
        images: [
            "images/chicken-wings.png"
        ],
        name: {
            ru: "Крылья жареные хрустящие 10 шт",
            kz: "Қытырлақ қуырылған қанаттар 10 дана",
            en: "Crispy Fried Chicken Wings 10 pcs"
        },
        description: {
            ru: "10 хрустящих куриных крылышек",
            kz: "10 қытырлақ тауық қанаты",
            en: "10 crispy chicken wings"
        }
    },

    {
        id: 102,
        category: "sides",
        price: 100,
        image: "images/bun.png",
        images: [
            "images/bun.png"
        ],
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
        price: 1290,
        image: "images/Mors.webp",
        images: [
            "images/Mors.webp"
        ],
        name: {
            ru: "Морс ягодный 500 мл",
            kz: "Жидек морсы 500 мл",
            en: "Berry Mors 500 ml"
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
        price: 1000,
        image: "images/coca-cola.png",
        images: [
            "images/coca-cola.png"
        ],
        name: {
            ru: "Coca-Cola 330 мл",
            kz: "Coca-Cola 330 мл",
            en: "Coca-Cola 330 ml"
        },
        description: {
            ru: "Coca-Cola 330 мл",
            kz: "Coca-Cola 330 мл",
            en: "Coca-Cola 330 ml"
        }
    },

    {
        id: 112,
        category: "drinks",
        price: 1000,
        image: "images/coca-cola-zero.png",
        images: [
            "images/coca-cola-zero.png"
        ],
        name: {
            ru: "Coca-Cola Zero Sugar 330 мл",
            kz: "Coca-Cola Zero Sugar 330 мл",
            en: "Coca-Cola Zero Sugar 330 ml"
        },
        description: {
            ru: "Coca-Cola Zero Sugar 330 мл",
            kz: "Coca-Cola Zero Sugar 330 мл",
            en: "Coca-Cola Zero Sugar 330 ml"
        }
    },

    {
        id: 113,
        category: "drinks",
        price: 1000,
        image: "images/fanta.png",
        images: [
            "images/fanta.png"
        ],
        name: {
            ru: "Fanta 330 мл",
            kz: "Fanta 330 мл",
            en: "Fanta 330 ml"
        },
        description: {
            ru: "Fanta 330 мл",
            kz: "Fanta 330 мл",
            en: "Fanta 330 ml"
        }
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

    if (!value) return "";

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

/* PROMO */

function isPromoTime() {

    const now = new Date();

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
                return total + item.quantity;
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

    const quantity =
        getPromoEligibleQuantity();

    return Math.floor(
        quantity / 2
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
            <strong>${ui[currentLanguage].promo}</strong>
            <span>${ui[currentLanguage].promoText}</span>
            <small>${ui[currentLanguage].promoTime}</small>
        </div>
    `;
}

/* PROMO BANNER */

function renderPromoBanner() {

    let banner =
        document.getElementById(
            "wokipasta-promo"
        );

    const menu =
        document.getElementById("menu");

    if (!menu) return;

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

    if (!container) return;

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

    container.innerHTML = "";

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

    filtered.forEach(product => {

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
                            addToCart(${product.id})
                        "
                    >
                        ${ui[currentLanguage].add}
                    </button>

                </div>

            </div>
        `;

        container.appendChild(card);
    });
}

/* SETS */

function renderSets() {

    const container =
        document.getElementById(
            "sets-grid"
        );

    if (!container) return;

    container.innerHTML = "";

    sets.forEach(set => {

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
    });
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
        .querySelectorAll(
            ".category"
        )
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });

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

    } catch {

        cart = [];
    }
}

function addToCart(id) {

    const product =
        getProductById(id);

    if (!product) return;

    const existing =
        cart.find(
            item =>
                item.id ===
                product.id
        );

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }

    saveCart();
    updateCart();
}

function removeFromCart(id) {

    const item =
        cart.find(
            product =>
                product.id === id
        );

    if (!item) return;

    item.quantity -= 1;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.id !== id
            );
    }

    saveCart();
    updateCart();
}

function clearCart() {

    cart = [];

    saveCart();

    updateCart();
}

/* CART */

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

    if (!container) return;

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

    container.innerHTML = "";

    cart.forEach(item => {

        const product =
            getProductById(item.id);

        if (!product) return;

        subtotal +=
            product.price *
            item.quantity;

        quantity +=
            item.quantity;

        const row =
            document.createElement(
                "div"
            );

        row.className =
            "cart-item";

        row.innerHTML = `
            <div class="cart-item-info">

                <strong>
                    ${escapeHtml(
                        getText(
                            product.name
                        )
                    )}
                </strong>

                <span>
                    ${formatPrice(
                        product.price
                    )}
                </span>

            </div>

            <div class="cart-item-controls">

                <button
                    onclick="
                        removeFromCart(${product.id})
                    "
                >
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="
                        addToCart(${product.id})
                    "
                >
                    +
                </button>

            </div>
        `;

        container.appendChild(row);
    });

    const discount =
        getPromoDiscount();

    const finalTotal =
        Math.max(
            0,
            subtotal - discount
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
                −${formatPrice(discount)}
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
            String(quantity);
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

function getProductImages(
    product
) {

    if (
        product.images &&
        Array.isArray(
            product.images
        ) &&
        product.images.length
    ) {
        return product.images;
    }

    if (product.image) {
        return [
            product.image
        ];
    }

    return [];
}

function openProduct(id) {

    const product =
        getProductById(id);

    if (!product) return;

    currentProduct =
        product;

    currentImageIndex =
        0;

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

    if (!modal) return;

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

    if (price) {

        price.textContent =
            formatPrice(
                product.price
            );
    }

    if (addButton) {

        addButton.textContent =
            ui[currentLanguage].add;

        addButton.onclick =
            () => {

                addToCart(
                    product.id
                );
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

    if (!image) return;

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

    if (images.length <= 1) {

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
            "block";
    }

    if (next) {
        next.style.display =
            "block";
    }

    if (!dots) return;

    dots.innerHTML = "";

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

        if (!modalInfo) return;

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
            class="reviews-list"
        ></div>

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

                <button
                    type="button"
                    data-rating="1"
                >
                    ★
                </button>

                <button
                    type="button"
                    data-rating="2"
                >
                    ★
                </button>

                <button
                    type="button"
                    data-rating="3"
                >
                    ★
                </button>

                <button
                    type="button"
                    data-rating="4"
                >
                    ★
                </button>

                <button
                    type="button"
                    data-rating="5"
                >
                    ★
                </button>

            </div>

            <button
                type="button"
                id="submit-review"
                class="review-submit"
            >
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
                                button.dataset
                                    .rating
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
                                            star.dataset
                                                .rating
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

    /* ACTIVE BUTTON */

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

    /* STATIC */

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

    /* SEARCH */

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

    /* RENDER */

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

    if (!input) return;

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

                        return (
                            name.includes(
                                query
                            ) ||
                            description.includes(
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
                            onerror="
                                this.style.display='none'
                            "
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
                                        addToCart(${product.id})
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

                return (
                    total +
                    product.price *
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
        currentLanguage ===
        "ru"
    ) {

        message =
            `Спасибо! Заказ принят.\n\nИтого: ${formatPrice(total)}`;

        if (discount > 0) {

            message +=
                `\n\nАкция применена: −${formatPrice(discount)}`;
        }

    } else if (
        currentLanguage ===
        "kz"
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

/* STATIC LANGUAGE */

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

        /* ACTIVE LANGUAGE */

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

        /* LOAD */

        loadCart();

        loadReviews();

        /* CATEGORY */

        currentCategory =
            "all";

        window.currentCategory =
            "all";

        /* RENDER */

        renderProducts(
            "all"
        );

        renderSets();

        updateCart();

        renderPromoBanner();

        updateStaticLanguage();

        setupSearch();

        /* PLACEHOLDER */

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

        /* PROMO REFRESH */

        setInterval(
            () => {

                updateCart();

                renderPromoBanner();

            },
            30000
        );
    }
);