/* ===================================================================
   BASILIC — HAUTE GASTRONOMIE DATA & LOCALIZATION
   100% Non-Alcoholic / Halal-Friendly Pure Culinary Experience
   Complete Multilingual Dataset (UZ, EN, RU) with Calories & Specs
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
      calories: 385,
      portion: "260 g",
      prepTime: "10 min",
      origin: "Puglia, Italy",
      nutrition: { protein: "18g", carbs: "9g", fat: "29g" },
      title: {
        en: "Burrata di Puglia",
        uz: "Puglia Burratasi",
        ru: "Буррата ди Пулья"
      },
      subtitle: {
        en: "Pomodori Heirloom & Basilico Fresco",
        uz: "Heirloom Pomidorlari & Yangi Rayhon",
        ru: "Фермерские Томаты & Свежий Базилик"
      },
      desc: {
        en: "Creamy artisanal Pugliese burrata, marinated heirloom tomatoes, 12-year aged balsamic reduction, and fresh sweet basil leaves.",
        uz: "Qaymoqli Puglia burratasi, marinadlangan rang-barang heirloom pomidorlar, 12 yillik balzamik va yangi rayhon barglari.",
        ru: "Сливочная буррата из Пульи, фермерские томаты, 12-летний бальзамик и свежий базилик."
      }
    },
    {
      id: "tartare-tonno",
      category: "starters",
      dietary: ["GF", "Chef"],
      image: "assets/images/tartare.jpg",
      price: 245000,
      calories: 290,
      portion: "190 g",
      prepTime: "12 min",
      origin: "Maldives / Amalfi",
      nutrition: { protein: "32g", carbs: "4g", fat: "14g" },
      title: {
        en: "Tartare di Tonno",
        uz: "Sariq Qanotli Tuna Tartari",
        ru: "Тартар из Желтоперого Тунца"
      },
      subtitle: {
        en: "Capperi di Pantelleria & Limone di Amalfi",
        uz: "Pantelleria Kaparisi & Amalfi Limoni",
        ru: "Каперсы Пантеллерии & Лимон Амальфи"
      },
      desc: {
        en: "Knife-cut yellowfin tuna, Pantelleria wild capers, Amalfi lemon zest, cold-pressed olive oil, and flaky sea salt crystals.",
        uz: "Pichoqda maydalangan sariq qanotli tuna filesi, yovvoyi kapari, Amalfi limon qobig'i va sovuq presslangan zaytun moyi.",
        ru: "Тартар ручной нарезки из желтоперого тунца, дикие каперсы Пантеллерии, цедра лимона Амальфи и хлопья морской соли."
      }
    },
    {
      id: "carpaccio-manzo",
      category: "starters",
      dietary: ["GF"],
      image: "assets/images/carpaccio.jpg",
      price: 195000,
      calories: 320,
      portion: "180 g",
      prepTime: "10 min",
      origin: "Black Angus / Emilia",
      nutrition: { protein: "28g", carbs: "3g", fat: "21g" },
      title: {
        en: "Carpaccio di Manzo",
        uz: "Mol Go'shti Karpachchosi",
        ru: "Карпаччо из Мраморной Говядины"
      },
      subtitle: {
        en: "Parmigiano Reggiano 24 Mesi & Rucola",
        uz: "24 Oylik Parmigiano & Yovvoyi Rukola",
        ru: "Пармезан 24 Месяца & Дикая Руккола"
      },
      desc: {
        en: "Thinly sliced Black Angus beef tenderloin, 24-month aged Parmigiano Reggiano shavings, wild baby arugula, and whole-grain mustard vinaigrette.",
        uz: "Yupqa kesilgan Black Angus go'shti filesi, 24 oylik Parmigiano Reggiano qirindilari, yovvoyi rukola va xantal emulsiya.",
        ru: "Тончайшие слайсы вырезки Black Angus, пармезан 24 месяца выдержки, дикая руккола и горчичный винегрет."
      }
    },
    {
      id: "sea-bass-chilean",
      category: "seafood",
      dietary: ["Chef", "GF"],
      image: "assets/images/seabass.jpg",
      price: 460000,
      calories: 440,
      portion: "240 g",
      prepTime: "20 min",
      origin: "Patagonia / Japan",
      nutrition: { protein: "38g", carbs: "8g", fat: "26g" },
      title: {
        en: "Chilean Sea Bass",
        uz: "Chili Sibasi Filesi",
        ru: "Чилийский Сибас Глейз"
      },
      subtitle: {
        en: "Asparagi Selvatici & Miso Bianco",
        uz: "Yovvoyi Qushqo'nmas & Oq Miso Sousi",
        ru: "Дикая Спаржа & Белый Мисо"
      },
      desc: {
        en: "Caramelized glazed sea bass fillet, white miso reduction, charred wild asparagus spears, edible borage blossoms, and citrus oil.",
        uz: "Oq miso sousida sirlangan Chili sibasi filesi, ko'mirda pishgan yovvoyi qushqo'nmas va sitrus moyi emulsiya.",
        ru: "Глазированное филе сибаса, белый мисо, дикая спаржа на гриле, съедобные цветы и цитрусовое масло."
      }
    },
    {
      id: "prime-ribeye-300g",
      category: "grill",
      dietary: ["Chef"],
      image: "assets/images/ribeye.jpg",
      price: 490000,
      calories: 780,
      portion: "300 g",
      prepTime: "25 min",
      origin: "Black Onyx, Australia",
      nutrition: { protein: "58g", carbs: "0g", fat: "60g" },
      title: {
        en: "Australian Prime Ribeye 300g",
        uz: "Avstraliya Prime Ribeye 300g",
        ru: "Австралийский Рибай Прайм 300г"
      },
      subtitle: {
        en: "Josper Grilled & Rosmarino Selvatico",
        uz: "Josper Ko'mir Pechi & Tog' Rozmarini",
        ru: "Печь Josper & Дикий Розмарин"
      },
      desc: {
        en: "28-day dry-aged grain-fed ribeye prepared over oak embers in our Josper oven, roasted confit garlic head, and Maldon smoked salt.",
        uz: "28 kun quruq yetiltirilgan donli boqilgan Avstraliya ribeyi, eman cho'g'ida Josper pechida pishirilgan sarimsoq va Maldon dudlangan tuzi bilan.",
        ru: "28 дней сухой выдержки, стейк из печи Josper на дубовых углях, печеный чеснок конфи и копченая соль Maldon."
      }
    },
    {
      id: "tagliolini-tartufo",
      category: "pasta",
      dietary: ["V", "Chef"],
      image: "assets/images/tagliolini.jpg",
      price: 340000,
      calories: 520,
      portion: "230 g",
      prepTime: "15 min",
      origin: "Norcia / Piedmont",
      nutrition: { protein: "16g", carbs: "64g", fat: "22g" },
      title: {
        en: "Tagliolini al Tartufo Nero",
        uz: "Qora Truffelli Tagliolini",
        ru: "Тальолини с Черным Трюфелем"
      },
      subtitle: {
        en: "Burro di Malga & Tartufo di Norcia",
        uz: "Alp Tog' Saryog'i & Norcia Truffeli",
        ru: "Альпийское Масло & Трюфель из Норчии"
      },
      desc: {
        en: "Artisanal fresh egg tagliolini spun with cultured Alpine butter, 30-month Parmigiano Reggiano, and generous shavings of fresh black winter truffle.",
        uz: "Qo'lda yoyilgan tuxumli tagliolini, Alp tog' saryog'i, 30 oylik Parmigiano va yangi qirg'ichlangan qora qishki truffel.",
        ru: "Свежая яичная паста ручной работы, альпийское масло, пармезан 30 месяцев и щедрые слайсы черного зимнего трюфеля."
      }
    },
    {
      id: "duck-breast-cherry",
      category: "mains",
      dietary: ["GF"],
      image: "assets/images/duck.jpg",
      price: 275000,
      calories: 610,
      portion: "280 g",
      prepTime: "22 min",
      origin: "Vendée, France",
      nutrition: { protein: "42g", carbs: "18g", fat: "38g" },
      title: {
        en: "Canard Rôti aux Cerises",
        uz: "Qovurilgan O'rdak Ko'kragi",
        ru: "Утиная Грудка с Вишневым Демиглясом"
      },
      subtitle: {
        en: "Réduction de Cerises Noires & Panais",
        uz: "Nordon Qora Olcha & Pasternak Pyuresi",
        ru: "Черная Вишня & Шелковистый Пастернак"
      },
      desc: {
        en: "Pan-roasted French duck breast with crispy golden skin, sour Morello cherry reduction, and velvety organic parsnip purée.",
        uz: "Qarsildoq tilla rang terili nozik o'rdak filesi, nordon Morello olchasi qaynatmasi va baxmaldek pasternak ildizi pyuresi.",
        ru: "Обжаренное филе французской утки с хрустящей корочкой, редукция из вишни морелло и бархатистое пюре из пастернака."
      }
    },
    {
      id: "signature-pavlova",
      category: "desserts",
      dietary: ["Chef", "GF"],
      image: "assets/images/pavlova.jpg",
      price: 135000,
      calories: 340,
      portion: "170 g",
      prepTime: "8 min",
      origin: "Madagascar / Berries",
      nutrition: { protein: "6g", carbs: "48g", fat: "14g" },
      title: {
        en: "Signature Pavlova",
        uz: "Mualliflik Pavlova Deserti",
        ru: "Фирменная Павлова"
      },
      subtitle: {
        en: "Frutti di Bosco & Oro Alimentare 24k",
        uz: "Yovvoyi Rezavorlar & 24k Sof Oltin",
        ru: "Лесные Ягоды & Сусальное Золото 24k"
      },
      desc: {
        en: "Featherlight crisp meringue, Madagascar vanilla mascarpone chantilly, wild mountain berries, tart passionfruit coulis, and 24-karat edible gold leaves.",
        uz: "Havoiy yengil beze qobig'i, Madagaskar vanili va maskarpone kremi, yovvoyi tog' rezavorlari, marakuya sousi va 24-karat yegulik oltin yaproqlari.",
        ru: "Невесомое безе, шантильи из маскарпоне с мадагаскарской ванилью, лесные ягоды, кули из маракуйи и сусальное золото 24 карата."
      }
    },
    {
      id: "tiramisu-tradizionale",
      category: "desserts",
      dietary: ["V"],
      image: "assets/images/tiramisu.jpg",
      price: 120000,
      calories: 390,
      portion: "180 g",
      prepTime: "5 min",
      origin: "Treviso, Italy",
      nutrition: { protein: "7g", carbs: "42g", fat: "21g" },
      title: {
        en: "Tiramisú Tradizionale",
        uz: "Klassik Italyancha Tiramisu",
        ru: "Классический Тирамису"
      },
      subtitle: {
        en: "Savoiardi Artigianali & Cacao Valrhona",
        uz: "Savoiardi Pechenyesi & Valrhona Kakaosi",
        ru: "Савоярди Ручной Работы & Какао Valrhona"
      },
      desc: {
        en: "Artisanal sponge biscuits soaked in single-origin Ethiopian espresso, velvety mascarpone mousse, and bitter Valrhona grand cru cocoa dusting.",
        uz: "Efiopiya espressosiga botirilgan Savoiardi pechenyelari, ipakdek nozik maskarpone mussasi va achchiq Valrhona grand cru kakaosi.",
        ru: "Печенье савоярди на эфиопском эспрессо, воздушный мусс из маскарпоне и горькое какао Valrhona grand cru."
      }
    },
    {
      id: "pistachio-gelato",
      category: "desserts",
      dietary: ["V", "GF"],
      image: "assets/images/pistachio.jpg",
      price: 85000,
      calories: 260,
      portion: "140 g",
      prepTime: "5 min",
      origin: "Bronte, Sicily",
      nutrition: { protein: "6g", carbs: "28g", fat: "13g" },
      title: {
        en: "Gelato al Pistacchio di Bronte",
        uz: "Bronte Pistali Djelato",
        ru: "Джелато из Фисташек Бронте"
      },
      subtitle: {
        en: "Sale di Maldon & Olio Extravergine",
        uz: "Maldon Dengiz Tuzi & Virgin Zaytun Moyi",
        ru: "Соль Maldon & Оливковое Масло Extra Virgin"
      },
      desc: {
        en: "Pure Sicilian Bronte DOP pistachio gelato served with crushed roasted kernels, a touch of cold-pressed olive oil, and flaky Maldon sea salt.",
        uz: "Haqiqiy Sitsiliya Bronte DOP pistalaridan tayyorlangan muzqaymoq, qovurilgan mag'izlar, bir tomchi zaytun moyi va Maldon tuzi bilan.",
        ru: "Аутентичное джелато из фисташек Бронте DOP, жареные фисташки, капля масла первого отжима и хлопья соли Maldon."
      }
    },
    {
      id: "emerald-basilic-mocktail",
      category: "drinks",
      dietary: ["V", "GF", "Chef"],
      image: "assets/images/cocktail.jpg",
      price: 85000,
      calories: 95,
      portion: "240 ml",
      prepTime: "4 min",
      origin: "Basilic Organic Garden",
      nutrition: { protein: "0g", carbs: "12g", fat: "0g" },
      title: {
        en: "Emerald Basilic (Mocktail)",
        uz: "Emerald Basilic (Mualliflik Mokteyli)",
        ru: "Emerald Basilic (Органический Моктейль)"
      },
      subtitle: {
        en: "Fresh Garden Basil, Pressed Lime & Botanic Tonic",
        uz: "Yangi Bog' Rayhoni, Laym Sharbat & Botanik Tonik",
        ru: "Свежий Базилик, Сок Лайма & Ботанический Тоник"
      },
      desc: {
        en: "Refreshing 100% non-alcoholic mocktail made with freshly crushed garden basil, cold-pressed Persian lime, organic elderflower syrup, and crisp Mediterranean tonic.",
        uz: "Yangi ezilgan xushbo'y bog' rayhoni, sovuq presslangan laym sharbati, elderflower ekstrakti va O'rta yer dengizi tonigidan tayyorlangan 100% alkogolsiz tetiklantiruvchi ichimlik.",
        ru: "Освежающий 100% безалкогольный моктейль из садового базилика, сока лайма холодного отжима, экстракта цветов бузины и средиземноморского тоника."
      }
    },
    {
      id: "botanical-cold-brew",
      category: "drinks",
      dietary: ["V", "GF"],
      image: "assets/images/botanical_tea.jpg",
      price: 75000,
      calories: 45,
      portion: "220 ml",
      prepTime: "3 min",
      origin: "Alpine Herbs & Wild Berries",
      nutrition: { protein: "0g", carbs: "6g", fat: "0g" },
      title: {
        en: "Artisanal Botanical Cold Brew",
        uz: "Alp O'tlari Sovuq Damlamasi",
        ru: "Холодный Травяной Чай Cold Brew"
      },
      subtitle: {
        en: "Mountain Wildflowers & Forest Berries",
        uz: "Tog' Yovvoyi Gullari & O'rmon Rezavorlari",
        ru: "Горные Травы & Дикие Лесные Ягоды"
      },
      desc: {
        en: "16-hour slow cold-brewed alpine herbal tisane infused with wild mountain blossoms, garden mint, dried blueberries, and served over hand-cut crystal ice.",
        uz: "16 soat davomida sovuq usulda damlangan tog' giyohlari damlamasi, yovvoyi tog' gullari, yalpiz va quritilgan o'rmon rezavorlari bilan kristall qadahda.",
        ru: "16 часов медленного холодного настаивания сбора горных трав, мяты, черники и диких цветов. Подается с кристалльным чистым льдом."
      }
    }
  ],

  translations: {
    en: {
      siteTitle: "BASILIC — Haute Gastronomie Minimaliste | Tashkent",
      siteTagline: "A Pure Expression of Mediterranean Soul & European Artistry.",
      navHome: "Home",
      navMenu: "Menu",
      navAbout: "About",
      navReservations: "Reservations",
      btnReserve: "Reserve a Table",
      btnMenu: "Explore Menu",
      btnContact: "Contact Concierge",
      
      // Hero
      heroEyebrow: "EST. 2024 · TASHKENT · HAUTE GASTRONOMIE",
      heroHeadline: "A Pure Expression of Mediterranean Soul & European Artistry.",
      heroSubtitle: "Welcome to Basilic—where seasonal provenance, quiet architectural luxury, and timeless culinary craft converge in the center of Tashkent.",
      heroCaptionRoom: "Main Dining Room · Architectural Panorama",
      heroCaptionCity: "Tashkent City",
      
      // Pillars
      pillarsEyebrow: "OUR FOUNDATION",
      pillarsTitle: "The Four Pillars of Basilic",
      
      // Highlights
      highlightsEyebrow: "SIGNATURE CREATIONS",
      highlightsTitle: "Curated Highlights",
      highlightsSubtitle: "Selected tasting courses honoring seasonal harvests and impeccable European technique.",
      
      // Chef
      chefQuote: "“Great cuisine is not about masking ingredients; it is about having the courage to reveal their truest character.”",
      chefAuthor: "Executive Chef Marco V. · European Three-Star Heritage",
      
      // Sanctuary / Atmosphere
      sanctuaryEyebrow: "THE SANCTUARY",
      sanctuaryTitle: "Quiet Luxury & Spatial Harmony",
      sanctuarySubtitle: "Architectural stone, custom walnut fixtures, and acoustic tranquility.",
      loungeTitle: "Emerald Velvet Lounge & Botanical Tea Salon",
      loungeDesc: "Artisanal cold-brew tisanes, handcrafted mocktails & vinyl jazz",
      loungeBadge: "Salons",
      diningSalonTitle: "Panoramic Dining Salon",
      diningSalonDesc: "Generous 12-column spacing and discreet table appointments",
      diningSalonBadge: "Dining Room",
      
      // Private Dining
      privateEyebrow: "EXCLUSIVE SALONS",
      privateDiningTitle: "Private Dining & Executive Salons",
      privateDiningDesc: "Bespoke tasting courses, botanical pairings, and discreet accommodations tailored for high-level delegations, celebrations, and intimate gatherings.",
      btnDiscoverPrivate: "Discover Private Dining →",
      
      // Menu Page
      menuEyebrow: "GASTRONOMIE EUROPÉENNE",
      menuTitle: "Our Menu",
      menuSubtitle: "Thoughtfully crafted dishes using exceptional seasonal ingredients and centuries-old culinary heritage.",
      degustationEyebrow: "EXECUTIVE TASTING EXPERIENCE",
      degustationTitle: "Degustation 6-Course Menu",
      degustationSubtitle: "Curated by the Executive Chef with Artisanal Botanical Infusion Pairing",
      degustationC1: "Pugliese Burrata & Heirloom Tartare",
      degustationC2: "Handmade Black Truffle Tagliolini",
      degustationC3: "Wild Chilean Sea Bass Miso Glacé",
      degustationC4: "Charcoal Josper Prime Ribeye 120g",
      degustationC5: "Artisanal Bronte Pistachio Granita",
      degustationC6: "Signature Gold Leaf Pavlova Meringue",
      degustationPrice: "850,000 UZS",
      degustationNote: "per guest · non-alcoholic botanical pairing included",
      btnReserveDegustation: "Reserve Degustation",
      
      // Filters
      filterAll: "All Courses",
      filterStarters: "Starters & Crudo",
      filterSeafood: "Seafood & Fish",
      filterGrill: "Josper Grill & Steaks",
      filterPasta: "Pasta & Risotto",
      filterMains: "Main Courses",
      filterDesserts: "Pastry & Desserts",
      filterDrinks: "Artisanal Mocktails & Tea",
      
      // Menu Card Info
      caloriesLabel: "Calories",
      portionLabel: "Portion",
      prepLabel: "Prep",
      reserveCardBtn: "Reserve Table →",
      
      // About
      aboutEyebrow: "HERITAGE & CRAFT",
      aboutTitle: "A Symphony of Mediterranean Soul & European Precision.",
      aboutSubtitle: "Founded on the belief that dining is an art form of hospitality, intention, and seasonal purity.",
      aboutStoryTitle: "Our Story",
      aboutStoryP1: "Basilic was conceived as an unhurried sanctuary in the energetic heart of Tashkent. Drawing inspiration from Mediterranean coastal villas, Parisian culinary discipline, and high-modern architectural restraint, our space provides a calm refuge for guests who appreciate exacting craft.",
      aboutStoryP2: "From our custom charcoal Josper ovens to climate-controlled tea cellars, every detail is engineered to let ingredients express their highest natural state without compromise.",
      
      // Reservations
      resEyebrow: "ONLINE CONCIERGE",
      resTitle: "Reserve a Table",
      resSubtitle: "We look forward to welcoming you. For parties larger than 8 guests or private salon inquiries, our concierge is at your service.",
      resStepCounter: "STEP 1 OF 2",
      resStep1: "Table & Schedule Selection",
      resGuestsLabel: "Number of Guests",
      guest1: "1 Guest",
      guest2: "2 Guests",
      guest3: "3 Guests",
      guest4: "4 Guests",
      guest5: "5 Guests",
      guest6: "6 Guests",
      guest8: "8+ Guests",
      resDateLabel: "Select Date",
      resTimeLabel: "Dining Time Slot",
      resTimeNote: "Dinner & Evening Service",
      resZoneLabel: "Seating Preference",
      zoneMain: "Main Dining Room (Panoramic)",
      zoneGarden: "Olive Garden Conservatory",
      zoneLounge: "Emerald Lounge & Tea Salon",
      zoneCounter: "Chef's Tasting Counter",
      resNameLabel: "Full Name",
      resNamePlaceholder: "e.g. Jasur Alimov",
      resPhoneLabel: "Phone Number",
      resPhonePlaceholder: "+998 (90) 000-00-00",
      resNotesLabel: "Occasion & Dietary Preferences",
      resNotesPlaceholder: "Birthday, anniversary, quiet window table, dietary notes...",
      resSubmitBtn: "Request a Reservation →",
      
      // Protocol & Concierge
      resProtocolEyebrow: "HOSPITALITY PROTOCOL",
      resDeskTitle: "Direct Concierge Desk",
      resLocLabel: "Location",
      resLocVal: "O'qchi Street 1A, Tashkent City, Shaykhontokhur district, Tashkent",
      resTelLabel: "Telephone",
      resEmailLabel: "Email",
      resHoursLabel: "Operating Hours",
      resHoursVal: "Monday — Sunday: 08:00 to 02:00 (Kitchen closes at 00:30)",
      resEtiquetteTitle: "Dining Etiquette & Notes",
      resEtiquette1: "· Smart casual to formal attire appreciated (athletic wear discouraged).",
      resEtiquette2: "· Table holding policy: Reservations are held for 20 minutes past booking.",
      resEtiquette3: "· Soft live acoustic and vinyl jazz from 19:30 onwards.",
      
      // Modal
      modalEyebrow: "ONLINE CONCIERGE CONFIRMATION",
      successTitle: "Reservation Received",
      successDesc: "Thank you. Our hospitality concierge will contact you promptly to finalize your table arrangements.",
      modalBtnUnderstood: "Understood",
      
      // Footer
      footerAbout: "A sanctuary of European three-star Michelin gastronomy and Mediterranean hospitality in the center of Tashkent City.",
      footerNavTitle: "Navigation",
      footerHoursTitle: "Hours",
      footerHours1: "Monday — Sunday: 08:00 — 02:00",
      footerHours2: "Breakfast: 08:00 — 12:00",
      footerHours3: "Lunch: 12:00 — 16:00",
      footerHours4: "Dinner: 18:00 — 00:30",
      footerDeskTitle: "Concierge & Desk",
      footerRights: "© 2026 BASILIC Tashkent. All rights reserved.",
      footerPrivacy: "Privacy Policy",
      footerTerms: "Terms of Hospitality",
      
      // Dietary Tags
      tagV: "Vegetarian",
      tagGF: "Gluten-Free",
      tagChef: "Chef's Choice"
    },
    
    uz: {
      siteTitle: "BASILIC — Oliy Gastronomiya Minimalizm | Toshkent",
      siteTagline: "O'rta Yer Dengizi Ruhiyati va Yevropa Mahoratining Sof Ifodasi.",
      navHome: "Bosh sahifa",
      navMenu: "Menyu",
      navAbout: "Biz haqimizda",
      navReservations: "Stol band qilish",
      btnReserve: "Stol band qilish",
      btnMenu: "Menyuni ko'rish",
      btnContact: "Konsyerj bilan aloqa",
      
      // Hero
      heroEyebrow: "TOSHKENT · HAUTE GASTRONOMIE · 2024",
      heroHeadline: "O'rta Yer Dengizi Ruhiyati va Yevropa Mahoratining Sof Ifodasi.",
      heroSubtitle: "Basilic restoraniga xush kelibsiz — bu yerda mavsumiy noz-ne'matlar, sokin me'moriy hashamat va asrlar osha sayqallangan taomlar Toshkent markazida birlashadi.",
      heroCaptionRoom: "Asosiy Zal · Arxitektura Panoramasi",
      heroCaptionCity: "Toshkent City",
      
      // Pillars
      pillarsEyebrow: "BIZNING POYDEVOR",
      pillarsTitle: "Basilic Restoranining To'rtta Ustuni",
      
      // Highlights
      highlightsEyebrow: "MUALLIFLIK ASARLARI",
      highlightsTitle: "Saralangan Taomlar",
      highlightsSubtitle: "Yil fasllari ne'matlari va mukammal Yevropa texnikasini aks ettiruvchi maxsus taomlar to'plami.",
      
      // Chef
      chefQuote: "“Buyuk kulinariya ingredientlarni yashirish emas; balki ularning asl tabiatini jasorat bilan ochib berish san'atidir.”",
      chefAuthor: "Bosh Oshpaz Marco V. · Yevropa Michelin Maktabi",
      
      // Sanctuary / Atmosphere
      sanctuaryEyebrow: "SOKIN MAKON",
      sanctuaryTitle: "Vazmin Hashamat & Fazo Uyg'unligi",
      sanctuarySubtitle: "Tabiiy tosh arxitekturasi, maxsus yong'oq daraxti bezaklari va akustik osoyishtalik.",
      loungeTitle: "Emerald Velvet Lounge & Organik Choy Saloni",
      loungeDesc: "Organik o'tli damlamalar, mualliflik mokteyllari va jonli vinil jaz",
      loungeBadge: "Salonlar",
      diningSalonTitle: "Panoramik Asosiy Zal",
      diningSalonDesc: "Keng 12 ustunli fazo va mehmonlar uchun alohida ehtiromli joylashuv",
      diningSalonBadge: "Asosiy Zal",
      
      // Private Dining
      privateEyebrow: "VIP SALONLAR",
      privateDiningTitle: "Shaxsiy VIP Zallar va Tadbirlar",
      privateDiningDesc: "Maxsus degustatsiya taomnomasi, mualliflik organik ichimliklari va rasmiy delegatsiyalar, oilaviy bayramlar uchun mo'ljallangan yopiq shinam salonlar.",
      btnDiscoverPrivate: "VIP Zallarni Ko'rish →",
      
      // Menu Page
      menuEyebrow: "YEVROPA GASTRONOMIYASI",
      menuTitle: "Bizning Menyu",
      menuSubtitle: "Nodir mavsumiy mahsulotlar va asriy an'analar asosida mehr bilan tayyorlangan taomlar to'plami.",
      degustationEyebrow: "MAHSUS DEGUSTATSIYA TAJRIBASI",
      degustationTitle: "6 Bosqichli Degustatsiya Menyusi",
      degustationSubtitle: "Bosh Oshpaz tavsiyasi va mualliflik organik o'tli ichimliklar uyg'unligida",
      degustationC1: "Pugliese Burratasi & Pomidor Tartari",
      degustationC2: "Qo'lda Tayyorlangan Qora Truffelli Tagliolini",
      degustationC3: "Yovvoyi Chili Sibasi Miso Glace",
      degustationC4: "Josper Ko'mir Pechidagi Prime Ribeye 120g",
      degustationC5: "Sitsiliya Bronte Pistali Granitasi",
      degustationC6: "Mualliflik Oltin Varoqli Pavlova Bezesi",
      degustationPrice: "850 000 UZS",
      degustationNote: "har bir mehmon uchun · noalkogol organik ichimliklar to'plami bilan",
      btnReserveDegustation: "Degustatsiyani Band Qilish",
      
      // Filters
      filterAll: "Barchasi",
      filterStarters: "Gazaklar & Krudo",
      filterSeafood: "Dengiz Mahsulotlari",
      filterGrill: "Josper Gril & Steyklar",
      filterPasta: "Pasta & Risotto",
      filterMains: "Asosiy Taomlar",
      filterDesserts: "Desertlar",
      filterDrinks: "Organik Ichimliklar & Choy",
      
      // Menu Card Info
      caloriesLabel: "Kaloriya",
      portionLabel: "Og'irligi",
      prepLabel: "Vaqti",
      reserveCardBtn: "Stol Band Qilish →",
      
      // About
      aboutEyebrow: "MEROS VA MAHORAT",
      aboutTitle: "O'rta Yer Dengizi Ruhiyati va Yevropa Aniqligi Uyg'unligi.",
      aboutSubtitle: "Taom tanovuli mehmondo'stlik, samimiyat va toza ne'matlar san'ati ekanligiga ishonamiz.",
      aboutStoryTitle: "Bizning Tariximiz",
      aboutStoryP1: "Basilic Toshkentning qaynoq markazida shoshilmas va sokin maskan sifatida barpo etildi. O'rta yer dengizi sohil villalari, Parij oshxona intizomi va zamonaviy arxitektura vazminligidan ilhomlangan makonimiz nozik did egalari uchun qulay boshpana hisoblanadi.",
      aboutStoryP2: "Maxsus ko'mirli Josper pechlaridan tortib, harorati nazorat qilinadigan organik choy xonalarigacha — har bir detal ingredientlarning tabiiy fazilatlarini eng yuqori darajada ochib berish uchun moslangan.",
      
      // Reservations
      resEyebrow: "ONLAYN KONSYERJ",
      resTitle: "Stol Band Qilish",
      resSubtitle: "Sizni kutib olishdan mamnunmiz. 8 kishidan ortiq kompaniyalar yoki VIP xonalar uchun konsyerjimiz xizmatingizda.",
      resStepCounter: "1-BOSQICH (JAMI 2)",
      resStep1: "Stol va Vaqtni Tanlash",
      resGuestsLabel: "Mehmonlar Soni",
      guest1: "1 Mehmon",
      guest2: "2 Mehmon",
      guest3: "3 Mehmon",
      guest4: "4 Mehmon",
      guest5: "5 Mehmon",
      guest6: "6 Mehmon",
      guest8: "8+ Mehmon",
      resDateLabel: "Tashrif Sanasi",
      resTimeLabel: "Qulay Vaqt Oralig'i",
      resTimeNote: "Kechki xizmat va samimiy uchrashuvlar",
      resZoneLabel: "Zal Tanlovi",
      zoneMain: "Asosiy Zal (Panoramik)",
      zoneGarden: "Zaytun Bog'i Oranjereyasi",
      zoneLounge: "Emerald Lounge & Choy Saloni",
      zoneCounter: "Oshpazning Degustatsiya Stoli",
      resNameLabel: "Ism va Familiyangiz",
      resNamePlaceholder: "Masalan, Jasur Alimov",
      resPhoneLabel: "Telefon Raqamingiz",
      resPhonePlaceholder: "+998 (90) 000-00-00",
      resNotesLabel: "Bayram Munosabati va Maxsus Istaklar",
      resNotesPlaceholder: "Tug'ilgan kun, yubiley, sokin deraza yonidagi stol, parhez istaklari...",
      resSubmitBtn: "Band Qilish So'rovini Yuborish →",
      
      // Protocol & Concierge
      resProtocolEyebrow: "MEHMONDO'STLIK QOIDALARI",
      resDeskTitle: "To'g'ridan-To'g'ri Konsyerj Xizmati",
      resLocLabel: "Manzil",
      resLocVal: "O'qchi ko'chasi 1A, Toshkent City, Shayxontohur tumani, Toshkent",
      resTelLabel: "Telefon",
      resEmailLabel: "Elektron Pochta",
      resHoursLabel: "Ish Vaqti",
      resHoursVal: "Dushanba — Yakshanba: 08:00 dan 02:00 gacha (Oshxona 00:30 gacha)",
      resEtiquetteTitle: "Restoran Odobi va Eslatmalar",
      resEtiquette1: "· Smart casual yoki rasmiy kiyinish uslubi tavsiya etiladi (sport kiyimlari taqiqlanadi).",
      resEtiquette2: "· Stolni ushlab turish tartibi: Bron qilingan vaqtdan so'ng 20 daqiqa kutiladi.",
      resEtiquette3: "· Har kuni soat 19:30 dan boshlab sokin jonli akustik va vinil jaz musiqasi.",
      
      // Modal
      modalEyebrow: "ONLAYN KONSYERJ TASDIQLOVI",
      successTitle: "Stol Muvaffaqiyatli Band Qilindi",
      successDesc: "Rahmat. Bosh konsyerjimiz tez orada siz bilan bog'lanib, barcha tafsilotlarni tasdiqlaydi.",
      modalBtnUnderstood: "Tushundim",
      
      // Footer
      footerAbout: "Toshkent City markazida Yevropa uch yulduzli Michelin gastronomiyasi va O'rta yer dengizi mehmondo'stligi maskani.",
      footerNavTitle: "Bo'limlar",
      footerHoursTitle: "Ish Vaqti",
      footerHours1: "Dushanba — Yakshanba: 08:00 — 02:00",
      footerHours2: "Nonushta: 08:00 — 12:00",
      footerHours3: "Tushlik: 12:00 — 16:00",
      footerHours4: "Kechki ovqat: 18:00 — 00:30",
      footerDeskTitle: "Konsyerj & Aloqa",
      footerRights: "© 2026 BASILIC Toshkent. Barcha huquqlar himoyalangan.",
      footerPrivacy: "Maxfiylik Siyosati",
      footerTerms: "Mehmondo'stlik Qoidalari",
      
      // Dietary Tags
      tagV: "Vegetarian",
      tagGF: "Kleykovinasiz (GF)",
      tagChef: "Oshpaz Tanlovi"
    },
    
    ru: {
      siteTitle: "BASILIC — Высокая Гастрономия Минимализм | Ташкент",
      siteTagline: "Чистое Выражение Средиземноморской Души и Европейского Мастерства.",
      navHome: "Главная",
      navMenu: "Меню",
      navAbout: "О ресторане",
      navReservations: "Бронь стола",
      btnReserve: "Забронировать",
      btnMenu: "Смотреть меню",
      btnContact: "Консьерж-сервис",
      
      // Hero
      heroEyebrow: "ТАШКЕНТ · HAUTE GASTRONOMIE · 2024",
      heroHeadline: "Чистое Выражение Средиземноморской Души и Европейского Мастерства.",
      heroSubtitle: "Добро пожаловать в Basilic — место, где сезонная чистота продуктов, сдержанная архитектурная роскошь и кулинарное искусство встречаются в центре Ташкента.",
      heroCaptionRoom: "Главный Зал · Архитектурная Панорама",
      heroCaptionCity: "Tashkent City",
      
      // Pillars
      pillarsEyebrow: "НАШИ ОСНОВЫ",
      pillarsTitle: "Четыре Столпа Ресторана Basilic",
      
      // Highlights
      highlightsEyebrow: "АВТОРСКИЕ БЛЮДА",
      highlightsTitle: "Избранные Блюда",
      highlightsSubtitle: "Сет дегустационных подач, отражающих пик урожая и безупречную европейскую технику.",
      
      // Chef
      chefQuote: "“Великая гастрономия — это не маскировка ингредиентов; это смелость раскрыть их истинный природный характер.”",
      chefAuthor: "Шеф-повар Марко В. · Школа европейского гида Мишлен",
      
      // Sanctuary / Atmosphere
      sanctuaryEyebrow: "ПРОСТРАНСТВО",
      sanctuaryTitle: "Тихая Роскошь & Пространственная Гармония",
      sanctuarySubtitle: "Архитектурный камень, панели из ореха и акустическое умиротворение.",
      loungeTitle: "Emerald Velvet Lounge & Чайная Гостиная",
      loungeDesc: "Авторские холодные настои, фирменные моктейли и виниловый джаз",
      loungeBadge: "Салоны",
      diningSalonTitle: "Панорамный Обеденный Салон",
      diningSalonDesc: "Просторная 12-колонная рассадка и уединенное расположение столиков",
      diningSalonBadge: "Основной Зал",
      
      // Private Dining
      privateEyebrow: "VIP САЛОНЫ",
      privateDiningTitle: "Приватные Салоны и VIP Залы",
      privateDiningDesc: "Авторские дегустационные сеты, органические чайные церемонии и безупречный комфорт для деловых переговоров, торжеств и закрытых ужинов.",
      btnDiscoverPrivate: "О VIP Залах →",
      
      // Menu Page
      menuEyebrow: "ЕВРОПЕЙСКАЯ ГАСТРОНОМИЯ",
      menuTitle: "Наше Меню",
      menuSubtitle: "Изысканные блюда из сезонных фермерских продуктов и вековых кулинарных традиций.",
      degustationEyebrow: "ДЕГУСТАЦИОННЫЙ ОПЫТ",
      degustationTitle: "Дегустационный Сет из 6 Подач",
      degustationSubtitle: "Авторский сет от шеф-повара с безалкогольным ботаническим пейрингом",
      degustationC1: "Буррата из Пульи & Томатный Тартар",
      degustationC2: "Домашняя Паста Тальолини с Черным Трюфелем",
      degustationC3: "Чилийский Сибас в Глазури Мисо",
      degustationC4: "Рибай Прайм 120г из Печи Josper",
      degustationC5: "Гранита из Сицилийских Фисташек Бронте",
      degustationC6: "Фирменная Павлова с Сусальным Золотом",
      degustationPrice: "850 000 UZS",
      degustationNote: "за персону · безалкогольное сопровождение включено",
      btnReserveDegustation: "Забронировать Дегустацию",
      
      // Filters
      filterAll: "Все блюда",
      filterStarters: "Закуски и Крудо",
      filterSeafood: "Морепродукты",
      filterGrill: "Josper Гриль и Стейки",
      filterPasta: "Паста и Ризотто",
      filterMains: "Основные Блюда",
      filterDesserts: "Десерты",
      filterDrinks: "Безалкогольные Напитки & Чай",
      
      // Menu Card Info
      caloriesLabel: "Калории",
      portionLabel: "Порция",
      prepLabel: "Время",
      reserveCardBtn: "Забронировать Стол →",
      
      // About
      aboutEyebrow: "НАСЛЕДИЕ И МАСТЕРСТВО",
      aboutTitle: "Симфония Средиземноморской Души и Европейской Точности.",
      aboutSubtitle: "Создан на убеждении, что гастрономия — это высшее искусство гостеприимства и чистоты продуктов.",
      aboutStoryTitle: "Наша История",
      aboutStoryP1: "Basilic задуман как оазис неторопливого комфорта в динамичном центре Ташкента. Вдохновленный виллами Средиземноморья, парижской кулинарной дисциплиной и архитектурным минимализмом, ресторан дарит гостям умиротворение.",
      aboutStoryP2: "От уникальных угольных печей Josper до чайных комнат с выверенной температурой — каждая деталь подчеркивает подлинный вкус продуктов наивысшего качества.",
      
      // Reservations
      resEyebrow: "ОНЛАЙН КОНСЬЕРЖ",
      resTitle: "Бронирование Стола",
      resSubtitle: "Будем рады приветствовать вас. Для мероприятий от 8 гостей или приватных салонов наш консьерж к вашим услугам.",
      resStepCounter: "ШАГ 1 ИЗ 2",
      resStep1: "Выбор столика и времени",
      resGuestsLabel: "Количество гостей",
      guest1: "1 Гость",
      guest2: "2 Гостя",
      guest3: "3 Гостя",
      guest4: "4 Гостя",
      guest5: "5 Гостей",
      guest6: "6 Гостей",
      guest8: "8+ Гостей",
      resDateLabel: "Дата визита",
      resTimeLabel: "Удобное время",
      resTimeNote: "Вечерний сервис и деловые ужины",
      resZoneLabel: "Зона посадки",
      zoneMain: "Главный Зал (Панорамный)",
      zoneGarden: "Оливковая Оранжерея",
      zoneLounge: "Emerald Lounge & Чайная Гостиная",
      zoneCounter: "Дегустационный Стол Шефа",
      resNameLabel: "Ваше Имя и Фамилия",
      resNamePlaceholder: "Например, Жасур Алимов",
      resPhoneLabel: "Номер телефона",
      resPhonePlaceholder: "+998 (90) 000-00-00",
      resNotesLabel: "Повод визита и особые пожелания",
      resNotesPlaceholder: "День рождения, годовщина, столик у окна, диетические предпочтения...",
      resSubmitBtn: "Отправить запрос на бронь →",
      
      // Protocol & Concierge
      resProtocolEyebrow: "ПРОТОКОЛ ГОСТЕПРИИМСТВА",
      resDeskTitle: "Служба Консьерж-Сервиса",
      resLocLabel: "Адрес",
      resLocVal: "Улица Укчи 1А, Tashkent City, Шайхантахурский район, Ташкент",
      resTelLabel: "Телефон",
      resEmailLabel: "Электронная почта",
      resHoursLabel: "Часы работы",
      resHoursVal: "Понедельник — Воскресенье: с 08:00 до 02:00 (Кухня до 00:30)",
      resEtiquetteTitle: "Правила Посещения и Этикет",
      resEtiquette1: "· Приветствуется стиль smart casual или деловой (спортивная одежда не допускается).",
      resEtiquette2: "· Политика бронирования: стол сохраняется за гостем в течение 20 минут.",
      resEtiquette3: "· Ежедневно с 19:30 звучит живая акустическая музыка и виниловый джаз.",
      
      // Modal
      modalEyebrow: "ПОДТВЕРЖДЕНИЕ ОНЛАЙН БРОНИ",
      successTitle: "Столик Забронирован",
      successDesc: "Благодарим вас. Наша служба сервиса свяжется с вами в ближайшее время для подтверждения всех деталей.",
      modalBtnUnderstood: "Понятно",
      
      // Footer
      footerAbout: "Оазис европейской высокой кухни трех звезд Мишлен и средиземноморского гостеприимства в сердце Tashkent City.",
      footerNavTitle: "Навигация",
      footerHoursTitle: "Часы Работы",
      footerHours1: "Понедельник — Воскресенье: 08:00 — 02:00",
      footerHours2: "Завтраки: 08:00 — 12:00",
      footerHours3: "Обеды: 12:00 — 16:00",
      footerHours4: "Ужины: 18:00 — 00:30",
      footerDeskTitle: "Консьерж & Контакты",
      footerRights: "© 2026 BASILIC Ташкент. Все права защищены.",
      footerPrivacy: "Политика Конфиденциальности",
      footerTerms: "Условия Гостеприимства",
      
      // Dietary Tags
      tagV: "Вегетарианское",
      tagGF: "Без Глютена (GF)",
      tagChef: "Выбор Шефа"
    }
  }
};
