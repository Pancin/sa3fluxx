
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
            name: "All You Need Is Love",
            filename: "allLove.png",
            description: "Player with love on the table wins",
            type: "goal",
            condition: {0:"love.png", k: 1, c: 0}
        },
        {
            name: "Appliances",
            filename: "appliances.png",
            description: "Player with Television and Toaster wins",
            type: "goal",
            condition: {0:"tv.png", 1: "toaster.png", k: -1, c: 0}
        },
        {
            name: "Baked Goods",
            filename: "bakedGoods.png",
            description: "Player with Bread and Cookies wins",
            type: "goal",
            condition: {0:"bread.png", 1: "cookie.png", k: -1, c: 0}
        },
        {
            name: "Bed Time",
            filename: "bedTime.png",
            description: "Player with Time and Sleep wins",
            type: "goal",
            condition: {0:"time.png", 1: "sleep.png", k: -1, c: 0}
        },
        {
            name: "Chocolate Cookies",
            filename: "chcocCookies.png",
            description: "Player with Chocolate and Cookies wins",
            type: "goal",
            condition: {0:"chocolate.png", 1: "cookie.png", k: -1, c: 0}
        },
        {
            name: "Chocolate Milk",
            filename: "chocMilk.png",
            description: "Player with Chocolate and Milk wins",
            type: "goal",
            condition: {0:"chocolate.png", 1: "milk.png", k: -1, c: 0}
        },
        {
            name: "Dough",
            filename: "dough.png",
            description: "Player with Bread and Money wins",
            type: "goal",
            condition: {0:"bread.png", 1: "money.png", k: -1, c: 0}
        },
        {
            name: "Dreamland",
            filename: "dreamland.png",
            description: "Player with Dreams and Sleep wins",
            type: "goal",
            condition: {0:"dreams.png", 1: "sleep.png", k: -1, c: 0}
        },
        {
            name: "Hearts and Minds",
            filename: "heartsMinds.png",
            description: "Player with Love and Brain wins",
            type: "goal",
            condition: {0:"love.png", 1: "brain.png", k: -1, c: 0}
        },
        {
            name: "Hippyism",
            filename: "hippyism.png",
            description: "Player with Love and Peace wins",
            type: "goal",
            condition: {0:"love.png", 1: "peace.png", k: -1, c: 0}
        },
        {
            name: "Interstellar",
            filename: "interstellar.png",
            description: "Player with Rocket and Cosmos wins",
            type: "goal",
            condition: {0:"rocket.png", 1: "cosmos.png", k: -1, c: 0}
        },
        {
            name: "Winning the Lottery",
            filename: "lottery.png",
            description: "Player with Dreams and Money wins",
            type: "goal",
            condition: {0:"dreams.png", 1: "money.png", k: -1, c: 0}
        },
        {
            name: "Melted Chocolate",
            filename: "meltChoc.png",
            description: "Player with Sun and Chocolate wins",
            type: "goal",
            condition: {0:"sun.png", 1: "chocolate.png", k: -1, c: 0}
        },
        {
            name: "Milk and Cookies",
            filename: "milkCookies.png",
            description: "Player with Milk and Cookies wins",
            type: "goal",
            condition: {0:"milk.png", 1: "cookie.png", k: -1, c: 0}
        },
        {
            name: "Mind's Eye",
            filename: "mindEye.png",
            description: "Player with Brain and Eye wins",
            type: "goal",
            condition: {0:"brain.png", 1: "eye.png", k: -1, c: 0}
        },
        {
            name: "Night and Day",
            filename: "nightDay.png",
            description: "Player with Sun and Moon wins",
            type: "goal",
            condition: {0:"sun.png", 1: "moon.png", k: -1, c: 0}
        },
        {
            name: "Rocket to the Moon",
            filename: "rocketMoon.png",
            description: "Player with Rocket and Moon wins",
            type: "goal",
            condition: {0:"rocket.png", 1: "moon.png", k: -1, c: 0}
        },
        {
            name: "Rocket Science",
            filename: "rocketSci.png",
            description: "Player with Rocket and Brain wins",
            type: "goal",
            condition: {0:"rocket.png", 1: "brain.png", k: -1, c: 0}
        },
        {
            name: "Star Gazing",
            filename: "starGaziing.png",
            description: "Player with Eye and Cosmos wins",
            type: "goal",
            condition: {0:"eye.png", 1: "cosmos.png", k: -1, c: 0}
        },
        {
            name: "Time is Money",
            filename: "timeMoney.png",
            description: "Player with Time and Money wins",
            type: "goal",
            condition: {0:"time.png", 1: "money.png", k: -1, c: 0}
        },
        {
            name: "Toast",
            filename: "toast.png",
            description: "Player with Bread and Toaster wins",
            type: "goal",
            condition: {0:"bread.png", 1: "toaster.png", k: -1, c: 0}
        }
    ];

    module.exports = deck;