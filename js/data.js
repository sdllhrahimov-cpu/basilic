/* ===================================================================
   BASILIC — HAUTE GASTRONOMIE DATA & LOCALIZATION
   Strictly matched with Google Stitch Prompts and Design System
   =================================================================== */

const RESTAURANT_DATA = {
  pillars: [
    {
      num: "01",
      title: {
        en: "Purity of Provenance",
        uz: "Kelib Chiqish Sofligi",
        ru: "Чистота Происхождения"
      },
      desc: {
        en: "Fresh seafood flown in weekly, heirloom organic produce, and cold-pressed single-estate virgin olive oil.",
        uz: "Har hafta keltiriladigan yangi baliqlar, nodir organik mahsulotlar va sovuq presslangan zaytun moyi.",
        ru: "Свежие морепродукты каждую неделю, фермерские томаты и оливковое масло холодного первого отжима."
      }
    },
    {
      num: "02",
      title: {
        en: "Modern Artistry",
        uz: "Zamonaviy Mahorat",
        ru: "Современное Искусство"
      },
      desc: {
        en: "Honoring classical French and Italian foundations with contemporary lightness, precision, and architectural balance.",
        uz: "Klassik Fransiya va Italiya gastronomiyasi poydevori, zamonaviy yengillik va aniq me'moriy muvozanat.",
        ru: "Классические французские и итальянские каноны в сочетании с легкостью и современной гармонией."
      }
    },
    {
      num: "03",
      title: {
        en: "Meticulous Seasonality",
        uz: "Nozik Mavsumiylik",
        ru: "Тонкая Сезонность"
      },
      desc: {
        en: "Four annual culinary evolutions reflecting peak harvest periods, wild herbs, and regional micro-seasons.",
        uz: "Yil davomida eng saralangan hosil va yovvoyi o'tlar uyg'unligini aks ettiruvchi to'rtta mavsumiy menyu.",
        ru: "Четыре сезонных обновления меню, отражающих пик урожая, дикорастущие травы и микросезоны."
      }
    },
    {
      num: "04",
      title: {
        en: "Discreet Hospitality",
        uz: "Ehtiromli Mehmondo'stlik",
        ru: "Сдержанное Гостеприимство"
      },
      desc: {
        en: "Attentive, unhurried European service that intuitively anticipates every private guest preference.",
        uz: "Mehmonning har bir istagini oldindan sezuvchi, shoshilmas va oliy darajadagi Yevropa xizmat ko'rsatish madaniyati.",
        ru: "Внимательный, неторопливый европейский сервис, предвосхищающий любые пожелания гостей."
      }
    }
  ],

  menuItems: [
    {
      id: "burrata-puglia",
      category: "starters",
      dietary: ["V", "GF"],
      image: "assets/images/burrata.jpg",
      price: 180000,
      title: {
        en: "Burrata di Puglia",
        uz: "Puglia Burratasi",
        ru: "Буррата ди Пулья"
      },
      subtitle: "Pomodori Heirloom & Basilico",
      desc: {
        en: "Creamy artisanal Pugliese burrata, marinated heirloom tomatoes, aged balsamic reduction, and fresh sweet basil leaves.",
        uz: "Qaymoqli Puglia burratasi, marinadlangan rang-barang pomidorlar, yetiltirilgan balzamik va yangi rayhon barglari.",
        ru: "Сливочная буррата из Пульи, фермерские томаты, выдержанный бальзамик и свежий базилик."
      }
    },
    {
      id: "tartare-tonno",
      category: "starters",
      dietary: ["GF", "Chef"],
      image: "assets/images/seabass.jpg",
      price: 245000,
      title: {
        en: "Tartare di Tonno",
        uz: "Tuna Baliq Tartari",
        ru: "Тартар из Тунца"
      },
      subtitle: "Capperi di Pantelleria & Limone",
      desc: {
        en: "Yellowfin tuna knife-cut tartare, Pantelleria capers, Amalfi lemon zest, cold-pressed olive oil, and sea salt flakes.",
        uz: "Sariq qanotli tuna filesi, Pantelleria kaparisi, Amalfi limon qobig'i va sovuq presslangan zaytun moyi.",
        ru: "Тартар из желтоперого тунца, каперсы Пантеллерии, цедра лимона Амальфи и морская соль."
      }
    },
    {
      id: "carpaccio-manzo",
      category: "starters",
      dietary: ["GF"],
      image: "assets/images/ribeye.jpg",
      price: 195000,
      title: {
        en: "Carpaccio di Manzo",
        uz: "Mol Go'shti Karpachchosi",
        ru: "Карпаччо из Говядины"
      },
      subtitle: "Parmigiano Reggiano 24 Mesi & Rucola",
      desc: {
        en: "Thinly sliced Black Angus beef tenderloin, 24-month aged Parmigiano Reggiano shavings, wild baby arugula, and mustard vinaigrette.",
        uz: "Yupqa kesilgan Black Angus go'shti, 24 oylik Parmigiano Reggiano qirindisi va yovvoyi rukola.",
        ru: "Тончайшие слайсы вырезки Black Angus, пармезан 24 месяца выдержки, дикая руккола и горчичный винегрет."
      }
    },
    {
      id: "sea-bass-chilean",
      category: "seafood",
      dietary: ["Chef", "GF"],
      image: "assets/images/seabass.jpg",
      price: 460000,
      title: {
        en: "Chilean Sea Bass",
        uz: "Chili Sibasi Filesi",
        ru: "Чилийский Сибас"
      },
      subtitle: "Asparagi Selvatici & Miso Bianco",
      desc: {
        en: "Glazed sea bass fillet, white miso reduction, charred wild asparagus, delicate edible flowers, and citrus-herb emulsion.",
        uz: "Oq miso sousida yaltiratilgan nozik file, qovurilgan yovvoyi qushqo'nmas va sitrus-o'tli emulsiya.",
        ru: "Глазированное филе сибаса, белый мисо, дикая спаржа на углях и цитрусово-травяная эмульсия."
      }
    },
    {
      id: "prime-ribeye-300g",
      category: "grill",
      dietary: ["Chef"],
      image: "assets/images/ribeye.jpg",
      price: 490000,
      title: {
        en: "Australian Prime Ribeye 300g",
        uz: "Avstraliya Prime Ribeye 300g",
        ru: "Австралийский Рибай Прайм 300г"
      },
      subtitle: "Josper Grilled & Rosmarino",
      desc: {
        en: "Dry-aged Australian grain-fed ribeye prepared in our charcoal Josper oven, roasted garlic head, and fresh rosemary sprig.",
        uz: "28 kun yetiltirilgan Avstraliya go'shti, ko'mirli Josper pechida pishirilgan sarimsoq va rozmarin bilan.",
        ru: "Выдержанный австралийский рибай из печи Josper на углях, печеный чеснок и розмарин."
      }
    },
    {
      id: "tagliolini-tartufo",
      category: "pasta",
      dietary: ["V", "Chef"],
      image: "assets/images/burrata.jpg",
      price: 340000,
      title: {
        en: "Tagliolini al Tartufo Nero",
        uz: "Qora Truffelli Tagliolini",
        ru: "Тальолини с Черным Трюфелем"
      },
      subtitle: "Burro di Malga & Tartufo di Norcia",
      desc: {
        en: "Handmade egg tagliolini, artisanal cultured alpine butter, and generous shavings of fresh black winter truffle.",
        uz: "Qo'lda yoyilgan tuxumli tagliolini, tog' saryog'i va yangi qirg'ichlangan qora qishki truffel.",
        ru: "Домашняя паста тальолини, фермерское альпийское масло и свежий черный трюфель из Норчии."
      }
    },
    {
      id: "duck-breast-cherry",
      category: "mains",
      dietary: ["GF"],
      image: "assets/images/ribeye.jpg",
      price: 275000,
      title: {
        en: "Canard Rôti aux Cerises",
        uz: "Qovurilgan O'rdak Ko'kragi",
        ru: "Утиная Грудка с Вишней"
      },
      subtitle: "Reduction de Cerises Noires",
      desc: {
        en: "Slow-roasted tender duck breast with crisp skin, sour black cherry reduction, and parsnip velvet purée.",
        uz: "Qarsildoq terili nozik o'rdak filesi, nordon qora olcha demi-glas sousi va ipakdek pyure.",
        ru: "Нежная утиная грудка с хрустящей корочкой, редукция из черной вишни и шелковистое пюре из пастернака."
      }
    },
    {
      id: "signature-pavlova",
      category: "desserts",
      dietary: ["Chef", "GF"],
      image: "assets/images/pavlova.jpg",
      price: 135000,
      title: {
        en: "Signature Pavlova",
        uz: "Mualliflik Pavlova Deserti",
        ru: "Фирменная Павлова"
      },
      subtitle: "Frutti di Bosco & Maracuja",
      desc: {
        en: "Crisp ethereal meringue shell, Madagascar vanilla mascarpone chantilly, wild forest berries, passionfruit coulis, and edible gold flakes.",
        uz: "Havoiy yengil beze, vanil-maskarpone kremi, yovvoyi rezavorlar, marakuya sousi va yegulik oltin zarrasi.",
        ru: "Хрупкое безе, ванильный крем маскарпоне, лесные ягоды, соус маракуйя и сусальное золото."
      }
    },
    {
      id: "tiramisu-tradizionale",
      category: "desserts",
      dietary: ["V"],
      image: "assets/images/pavlova.jpg",
      price: 120000,
      title: {
        en: "Tiramisú Tradizionale",
        uz: "Klassik Italyancha Tiramisu",
        ru: "Классический Тирамису"
      },
      subtitle: "Savoiardi Artigianali & Espresso",
      desc: {
        en: "Artisanal sponge biscuits dipped in single-origin espresso, delicate zabaglione mascarpone mousse, and bitter Valrhona cocoa dusting.",
        uz: "Single-origin espressoga botirilgan pechenye, nozik maskarpone mussasi va Valrhona kakaosi.",
        ru: "Печенье савоярди на спешелти эспрессо, мусс из маскарпоне и горькое какао Valrhona."
      }
    },
    {
      id: "pistachio-gelato",
      category: "desserts",
      dietary: ["V", "GF"],
      image: "assets/images/pavlova.jpg",
      price: 85000,
      title: {
        en: "Gelato al Pistacchio di Bronte",
        uz: "Bronte Pistali Muzqaymoq",
        ru: "Джелато из Фисташек Бронте"
      },
      subtitle: "Sale di Maldon & Olio Extravergine",
      desc: {
        en: "Artisanal Sicilian Bronte pistachio gelato served with a drop of extra virgin olive oil and crushed flaky sea salt.",
        uz: "Sitsiliya Bronte pistalaridan tayyorlangan muzqaymoq, tomchi zaytun moyi va dengiz tuzi.",
        ru: "Аутентичное сицилийское джелато из фисташек Бронте с каплей оливкового масла и кристаллами соли."
      }
    },
    {
      id: "emerald-basilic-drink",
      category: "drinks",
      dietary: ["Chef"],
      image: "assets/images/lounge.jpg",
      price: 125000,
      title: {
        en: "Emerald Basilic (Cocktail)",
        uz: "Emerald Basilic (Kokteyl)",
        ru: "Emerald Basilic (Коктейль)"
      },
      subtitle: "Botanical Gin & Fresh Sweet Basil",
      desc: {
        en: "Craft London dry gin, crushed garden basil, elderflower liqueur, freshly squeezed lime, and effervescent Mediterranean tonic.",
        uz: "London quruq jini, yangi bog' rayhoni, elderflower likyori, yangi siqilgan laym va O'rta dengiz tonigi.",
        ru: "Крафтовый джин, свежий базилик, ликер бузины, лайм и средиземноморский тоник."
      }
    },
    {
      id: "coravin-grand-cru",
      category: "drinks",
      dietary: [],
      image: "assets/images/lounge.jpg",
      price: 210000,
      title: {
        en: "Coravin Cellar Reserve (Glass)",
        uz: "Coravin Vino Kolleksiyasi (Qadah)",
        ru: "Винная Карта Coravin (Бокал)"
      },
      subtitle: "Bordeaux & Barolo Allocations",
      desc: {
        en: "Poured under Argon preservation via the Coravin system: exceptional vintage allocations without extracting the cork.",
        uz: "Argon gazi orqali saqlanadigan nodir Bordo va Barolo vinolari: tiqin ochilmagan holda qadahda taqdim etiladi.",
        ru: "Подача под аргоном через систему Coravin: редкие винтажи Бордо и Бароло без извлечения пробки."
      }
    }
  ],

  translations: {
    en: {
      siteTitle: "BASILIC — Haute Gastronomie",
      navHome: "Home",
      navMenu: "Menu",
      navAbout: "About",
      navReservations: "Reservations",
      btnReserve: "Reserve a Table",
      btnMenu: "Explore Menu",
      btnContact: "Contact Concierge",
      heroEyebrow: "EST. 2024 · TASHKENT · HAUTE GASTRONOMIE",
      heroHeadline: "A Pure Expression of Mediterranean Soul & European Artistry.",
      heroSubtitle: "Welcome to Basilic—where seasonal provenance, quiet architectural luxury, and timeless culinary craft converge in the center of Tashkent.",
      chefQuote: "“Great cuisine is not about masking ingredients; it is about having the courage to reveal their truest character.”",
      chefAuthor: "Executive Chef Marco V. · European Three-Star Heritage",
      privateDiningTitle: "Private Dining & Executive Salons",
      privateDiningDesc: "Bespoke tasting courses, sommelier cellar pairings, and discreet accommodations tailored for high-level delegations and celebrations.",
      menuEyebrow: "GASTRONOMIE EUROPÉENNE",
      menuTitle: "Our Menu",
      menuSubtitle: "Thoughtfully crafted dishes using exceptional seasonal ingredients and centuries-old culinary heritage.",
      degustationTitle: "Degustation 6-Course Menu",
      degustationSubtitle: "Curated by the Executive Chef with Optional Sommelier Cellar Pairing",
      degustationPrice: "850,000 UZS / Guest",
      filterAll: "All Courses",
      filterStarters: "Starters & Crudo",
      filterSeafood: "Seafood & Fish",
      filterGrill: "Josper Grill & Steaks",
      filterPasta: "Pasta & Risotto",
      filterMains: "Main Courses",
      filterDesserts: "Pastry & Desserts",
      filterDrinks: "Cocktails & Cellar",
      resEyebrow: "ONLINE CONCIERGE",
      resTitle: "Reserve a Table",
      resSubtitle: "We look forward to welcoming you. For parties larger than 8 guests or private salon inquiries, our concierge is at your service.",
      resStep1: "Table & Schedule Selection",
      resGuestsLabel: "Number of Guests",
      resDateLabel: "Select Date",
      resTimeLabel: "Dining Time Slot",
      resZoneLabel: "Seating Preference",
      resNameLabel: "Full Name",
      resPhoneLabel: "Phone Number",
      resNotesLabel: "Occasion & Dietary Preferences",
      resSubmitBtn: "Request a Reservation →",
      successTitle: "Reservation Confirmed",
      successDesc: "Thank you. Our hospitality concierge will contact you promptly to finalize your table arrangements."
    },
    uz: {
      siteTitle: "BASILIC — Oliy Gastronomiya",
      navHome: "Bosh sahifa",
      navMenu: "Menyu",
      navAbout: "Biz haqimizda",
      navReservations: "Stol band qilish",
      btnReserve: "Stol band qilish",
      btnMenu: "Menyuni ko'rish",
      btnContact: "Konsyerj bilan aloqa",
      heroEyebrow: "TOSHKENT · HAUTE GASTRONOMIE",
      heroHeadline: "O'rta Yer Dengizi Ruhiyati va Yevropa Mahoratining Sof Ifodasi.",
      heroSubtitle: "Basilic restoraniga xush kelibsiz — bu yerda mavsumiy noz-ne'matlar, sokin arxitektura hashamati va asrlar osha sayqallangan taomlar Toshkent markazida birlashadi.",
      chefQuote: "“Buyuk kulinariya ingredientlarni yashirish emas; balki ularning asl tabiatini jasorat bilan ochib berish san'atidir.”",
      chefAuthor: "Bosh Oshpaz Marco V. · Yevropa Michelin Maktabi",
      privateDiningTitle: "Shaxsiy VIP Zallar va Tadbirlar",
      privateDiningDesc: "Maxsus degustatsiya taomnomasi, sommelier vino tanlovi va rasmiy delegatsiyalar uchun mo'ljallangan yopiq salonlar.",
      menuEyebrow: "YEVROPA GASTRONOMIYASI",
      menuTitle: "Bizning Menyu",
      menuSubtitle: "Nodir mavsumiy mahsulotlar va asriy an'analar asosida mehr bilan tayyorlangan taomlar.",
      degustationTitle: "6 Bosqichli Degustatsiya Menyusi",
      degustationSubtitle: "Bosh Oshpaz tavsiyasi va maxsus vino kolleksiyasi uyg'unligida",
      degustationPrice: "850 000 so'm / Mehmon",
      filterAll: "Barchasi",
      filterStarters: "Gazaklar & Krudo",
      filterSeafood: "Dengiz mahsulotlari",
      filterGrill: "Josper Gril & Steyklar",
      filterPasta: "Pasta & Risotto",
      filterMains: "Asosiy Taomlar",
      filterDesserts: "Desertlar",
      filterDrinks: "Bar & Vino",
      resEyebrow: "ONLAYN KONSYERJ",
      resTitle: "Stol band qilish",
      resSubtitle: "Sizni kutib olishdan mamnunmiz. 8 kishidan ortiq kompaniyalar yoki VIP xonalar uchun konsyerjimiz xizmatingizda.",
      resStep1: "Stol va Vaqtni Tanlash",
      resGuestsLabel: "Mehmonlar Soni",
      resDateLabel: "Tashrif Sanasi",
      resTimeLabel: "Qulay Vaqt Oralig'i",
      resZoneLabel: "Zal Tanlovi",
      resNameLabel: "Ism va Familiyangiz",
      resPhoneLabel: "Telefon Raqamingiz",
      resNotesLabel: "Bayram munosabati yoki maxsus istaklar",
      resSubmitBtn: "Band qilish so'rovini yuborish →",
      successTitle: "Stol Muvaffaqiyatli Band Qilindi",
      successDesc: "Rahmat. Konsyerj xizmatimiz tez orada siz bilan bog'lanib, bron tafsilotlarini tasdiqlaydi."
    },
    ru: {
      siteTitle: "BASILIC — Высокая Гастрономия",
      navHome: "Главная",
      navMenu: "Меню",
      navAbout: "О ресторане",
      navReservations: "Бронь стола",
      btnReserve: "Забронировать",
      btnMenu: "Смотреть меню",
      btnContact: "Консьерж-сервис",
      heroEyebrow: "ТАШКЕНТ · HAUTE GASTRONOMIE",
      heroHeadline: "Чистое Выражение Средиземноморской Души и Европейского Мастерства.",
      heroSubtitle: "Добро пожаловать в Basilic — место, где сезонная чистота продуктов, сдержанная архитектурная роскошь и кулинарное искусство встречаются в центре Ташкента.",
      chefQuote: "“Великая гастрономия — это не маскировка ингредиентов; это смелость раскрыть их истинный природный характер.”",
      chefAuthor: "Шеф-повар Марко В. · Школа европейского гида Мишлен",
      privateDiningTitle: "Приватные Салоны и VIP Залы",
      privateDiningDesc: "Авторские дегустационные сеты, винный пейринг от сомелье и безупречный комфорт для деловых и семейных ужинов.",
      menuEyebrow: "ЕВРОПЕЙСКАЯ ГАСТРОНОМИЯ",
      menuTitle: "Наше Меню",
      menuSubtitle: "Изысканные блюда из сезонных фермерских продуктов и вековых кулинарных традиций.",
      degustationTitle: "Дегустационный Сет из 6 Подач",
      degustationSubtitle: "Авторский сет от шеф-повара с винным сопровождением от сомелье",
      degustationPrice: "850 000 сум / Гость",
      filterAll: "Все блюда",
      filterStarters: "Закуски и Крудо",
      filterSeafood: "Морепродукты",
      filterGrill: "Josper Гриль и Стейки",
      filterPasta: "Паста и Ризотто",
      filterMains: "Основные Блюда",
      filterDesserts: "Десерты",
      filterDrinks: "Бар и Винотека",
      resEyebrow: "ОНЛАЙН КОНСЬЕРЖ",
      resTitle: "Бронирование Стола",
      resSubtitle: "Будем рады приветствовать вас. Для мероприятий от 8 гостей или приватных салонов наш консьерж к вашим услугам.",
      resStep1: "Выбор столика и времени",
      resGuestsLabel: "Количество гостей",
      resDateLabel: "Дата визита",
      resTimeLabel: "Удобное время",
      resZoneLabel: "Зона посадки",
      resNameLabel: "Ваше Имя и Фамилия",
      resPhoneLabel: "Номер телефона",
      resNotesLabel: "Повод визита и особые пожелания",
      resSubmitBtn: "Отправить запрос на бронь →",
      successTitle: "Столик Забронирован",
      successDesc: "Благодарим вас. Наша служба сервиса свяжется с вами в ближайшее время для подтверждения."
    }
  }
};
