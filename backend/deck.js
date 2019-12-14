const deck =
    [
        {
            name: "Brain",
            filename: "brain.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Bread",
            filename: "bread.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Chocolate",
            filename: "chocolate.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Cookie",
            filename: "cookie.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Cosmos",
            filename: "cosmos.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Dreams",
            filename: "dreams.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Eye",
            filename: "eye.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Love",
            filename: "love.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Milk",
            filename: "milk.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Money",
            filename: "money.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Moon",
            filename: "moon.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Party",
            filename: "party.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Peace",
            filename: "peace.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Rocket",
            filename: "rocket.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Sleep",
            filename: "sleep.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Sun",
            filename: "sun.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Time",
            filename: "time.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Toaster",
            filename: "toaster.png",
            description: "",
            type: "keeper"
        },
        {
            name: "Television",
            filename: "tv.png",
            description: "",
            type: "keeper"
        },
        {
            name: "5 Keepers",
            filename: "5keepers.png",
            description: "The first player with 5 Keepers wins",
            type: "goal",
            condition: []
        },
        {
            name: "All You Need Is Love",
            filename: "allLove.png",
            description: "Player with love on the table wins",
            type: "goal",
            condition: []
        },
        {
            name: "Appliances",
            filename: "appliances.png",
            description: "Player with Television and Toaster wins",
            type: "goal",
            condition: []
        },
        {
            name: "Baked Goods",
            filename: "bakedGoods.png",
            description: "Player with Bread and Cookies wins",
            type: "goal",
            condition: []
        },
        {
            name: "Bed Time",
            filename: "bedTime.png",
            description: "Player with Time and Sleep wins",
            type: "goal",
            condition: []
        },
        {
            name: "Brain (and no TV)",
            filename: "brainNoTv.png",
            description: "Player with Brain and no Television (on the whole table) wins",
            type: "goal",
            condition: []
        },
        {
            name: "All That Is Certain",
            filename: "certain.png",
            description: "Player with Death and Taxes wins",
            type: "goal",
            condition: []
        },
        {
            name: "Chocolate Cookies",
            filename: "chcocCookies.png",
            description: "Player with Chocolate and Cookies wins",
            type: "goal",
            condition: []
        },
        {
            name: "Chocolate Milk",
            filename: "chocMilk.png",
            description: "Player with Chocolate and Milk wins",
            type: "goal",
            condition: []
        },
        {
            name: "Death by Chocolate",
            filename: "deathChoc.png",
            description: "Player with Death and Chocolate wins",
            type: "goal",
            condition: []
        },
        {
            name: "Dough",
            filename: "dough.png",
            description: "Player with Bread and Money wins",
            type: "goal",
            condition: []
        },
        {
            name: "Dreamland",
            filename: "dreamland.png",
            description: "Player with Dreams and Sleep wins",
            type: "goal",
            condition: []
        },
        {
            name: "Hearts and Minds",
            filename: "heartsMinds.png",
            description: "Player with Love and Brain wins",
            type: "goal",
            condition: []
        },
        {
            name: "Hippyism",
            filename: "hippyism.png",
            description: "Player with Love and Peace wins",
            type: "goal",
            condition: []
        },
        {
            name: "Interstellar",
            filename: "interstellar.png",
            description: "Player with Rocket and Cosmos wins",
            type: "goal",
            condition: []
        },
        {
            name: "Winning the Lottery",
            filename: "lottery.png",
            description: "Player with Dreams and Money wins",
            type: "goal",
            condition: []
        },
        {
            name: "Melted Chocolate",
            filename: "meltChoc.png",
            description: "Player with Sun and Chocolate wins",
            type: "goal",
            condition: []
        },
        {
            name: "Milk and Cookies",
            filename: "milkCookies.png",
            description: "Player with Milk and Cookies wins",
            type: "goal",
            condition: []
        },
        {
            name: "Mind's Eye",
            filename: "mindEye.png",
            description: "Player with Brain and Eye wins",
            type: "goal",
            condition: []
        },
        {
            name: "Night and Day",
            filename: "nightDay.png",
            description: "Player with Sun and Moon wins",
            type: "goal",
            condition: []
        },
        {
            name: "Peace (and no War)",
            filename: "noWar.png",
            description: "Player with Peace and no War (on the whole table) wins",
            type: "goal",
            condition: []
        },
        {
            name: "Rocket to the Moon",
            filename: "rocketMoon.png",
            description: "Player with Rocket and Moon wins",
            type: "goal",
            condition: []
        },
        {
            name: "Rocket Science",
            filename: "rocketSci.png",
            description: "Player with Rocket and Brain wins",
            type: "goal",
            condition: []
        },
        {
            name: "Star Gazing",
            filename: "starGaziing.png",
            description: "Player with Eye and Cosmos wins",
            type: "goal",
            condition: []
        },
        {
            name: "Time is Money",
            filename: "timeMoney.png",
            description: "Player with Time and Money wins",
            type: "goal",
            condition: []
        },
        {
            name: "Toast",
            filename: "toast.png",
            description: "Player with Bread and Toaster wins",
            type: "goal",
            condition: []
        },
        {
            name: "War = Death",
            filename: "warDeath.png",
            description: "Player with War and Death wins",
            type: "goal",
            condition: []
        }
    ];

    module.exports = deck;