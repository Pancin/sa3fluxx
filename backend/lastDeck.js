const deck =
{
    size: 55,
    cards:
    [
        {
            name: "Discard and Draw",
            filename: "discAndDraw.png",
            dataURL: "",
            description: "Discard all your cards and draw as many cards as you've discarded",
            type: "action"
        },
        {
            name: "Jackpot",
            filename: "jackpot.png",
            dataURL: "",
            description: "Draw 3 cards",
            type: "action"
        },
        {
            name: "Rules Reset",
            filename: "reset.png",
            dataURL: "",
            description: "Remove all New Rules cards",
            type: "action"
        },
        {
            name: "Brain",
            filename: "brain.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Bread",
            filename: "bread.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Chocolate",
            filename: "chocolate.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Cookie",
            filename: "cookie.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Cosmos",
            filename: "cosmos.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Dreams",
            filename: "dreams.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Eye",
            filename: "eye.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Love",
            filename: "love.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Milk",
            filename: "milk.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Money",
            filename: "money.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Moon",
            filename: "moon.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Peace",
            filename: "peace.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Rocket",
            filename: "rocket.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Sleep",
            filename: "sleep.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Sun",
            filename: "sun.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Time",
            filename: "time.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Toaster",
            filename: "toaster.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Television",
            filename: "tv.png",
            dataURL: "",
            description: "",
            type: "keeper"
        },
        {
            name: "Death",
            filename: "death.png",
            dataURL: "",
            description: "",
            type: "creeper"
        },
        {
            name: "Taxes",
            filename: "taxes.png",
            dataURL: "",
            description: "",
            type: "creeper"
        },
        {
            name: "War",
            filename: "war.png",
            dataURL: "",
            description: "",
            type: "creeper"
        },
        {
            name: "Draw 2",
            filename: "draw2.png",
            dataURL: "",
            description: "Draw 2 cards",
            type: "rule"
        },
        {
            name: "Draw 3",
            filename: "draw3.png",
            dataURL: "",
            description: "Draw 3 cards",
            type: "rule"
        },
        {
            name: "Draw 4",
            filename: "draw4.png",
            dataURL: "",
            description: "Draw 4 cards",
            type: "rule"
        },
        {
            name: "Draw 5",
            filename: "draw5.png",
            dataURL: "",
            description: "Draw 5 cards",
            type: "rule"
        },
        {
            name: "No-Hand Bonus",
            filename: "nhBonus.png",
            dataURL: "",
            description: "Draw 3 cards more if you have no cards in your hands",
            type: "rule"
        },
        {
            name: "Play 2",
            filename: "play2.png",
            dataURL: "",
            description: "Play 2 cards",
            type: "rule"
        },
        {
            name: "Play 3",
            filename: "play3.png",
            dataURL: "",
            description: "Play 3 cards",
            type: "rule"
        },
        {
            name: "Play 4",
            filename: "play4.png",
            dataURL: "",
            description: "Play 4 cards",
            type: "rule"
        },
        {
            name: "Play All",
            filename: "playAll.png",
            dataURL: "",
            description: "Play all cards in your hand",
            type: "rule"
        },
        {
            name: "Silver Lining",
            filename: "sLining.png",
            dataURL: "",
            description: "Creepers do not prevent victory",
            type: "rule"
        },
        {
            name: "All You Need Is Love",
            filename: "allLove.png",
            dataURL: "",
            description: "Player with love on the table wins",
            type: "goal"
        },
        {
            name: "Appliances",
            filename: "appliances.png",
            dataURL: "",
            description: "Player with Television and Toaster wins",
            type: "goal"
        },
        {
            name: "Baked Goods",
            filename: "bakedGoods.png",
            dataURL: "",
            description: "Player with Bread and Cookies wins",
            type: "goal"
        },
        {
            name: "Bed Time",
            filename: "bedTime.png",
            dataURL: "",
            description: "Player with Time and Sleep wins",
            type: "goal"
        },
        {
            name: "Chocolate Cookies",
            filename: "chcocCookies.png",
            dataURL: "",
            description: "Player with Chocolate and Cookies wins",
            type: "goal"
        },
        {
            name: "Chocolate Milk",
            filename: "chocMilk.png",
            dataURL: "",
            description: "Player with Chocolate and Milk wins",
            type: "goal"
        },
        {
            name: "Dough",
            filename: "dough.png",
            dataURL: "",
            description: "Player with Bread and Money wins",
            type: "goal"
        },
        {
            name: "Dreamland",
            filename: "dreamland.png",
            dataURL: "",
            description: "Player with Dreams and Sleep wins",
            type: "goal"
        },
        {
            name: "Hearts and Minds",
            filename: "heartsMinds.png",
            dataURL: "",
            description: "Player with Love and Brain wins",
            type: "goal"
        },
        {
            name: "Hippyism",
            filename: "hippyism.png",
            dataURL: "",
            description: "Player with Love and Peace wins",
            type: "goal"
        },
        {
            name: "Interstellar",
            filename: "interstellar.png",
            dataURL: "",
            description: "Player with Rocket and Cosmos wins",
            type: "goal"
        },
        {
            name: "Winning the Lottery",
            filename: "lottery.png",
            dataURL: "",
            description: "Player with Dreams and Money wins",
            type: "goal"
        },
        {
            name: "Melted Chocolate",
            filename: "meltChoc.png",
            dataURL: "",
            description: "Player with Sun and Chocolate wins",
            type: "goal"
        },
        {
            name: "Milk and Cookies",
            filename: "milkCookies.png",
            dataURL: "",
            description: "Player with Milk and Cookies wins",
            type: "goal"
        },
        {
            name: "Mind's Eye",
            filename: "mindEye.png",
            dataURL: "",
            description: "Player with Brain and Eye wins",
            type: "goal"
        },
        {
            name: "Night and Day",
            filename: "nightDay.png",
            dataURL: "",
            description: "Player with Sun and Moon wins",
            type: "goal"
        },
        {
            name: "Rocket to the Moon",
            filename: "rocketMoon.png",
            dataURL: "",
            description: "Player with Rocket and Moon wins",
            type: "goal"
        },
        {
            name: "Rocket Science",
            filename: "rocketSci.png",
            dataURL: "",
            description: "Player with Rocket and Brain wins",
            type: "goal"
        },
        {
            name: "Star Gazing",
            filename: "starGaziing.png",
            dataURL: "",
            description: "Player with Eye and Cosmos wins",
            type: "goal"
        },
        {
            name: "Time is Money",
            filename: "timeMoney.png",
            dataURL: "",
            description: "Player with Time and Money wins",
            type: "goal"
        },
        {
            name: "Toast",
            filename: "toast.png",
            dataURL: "",
            description: "Player with Bread and Toaster wins",
            type: "goal"
        },
    ]
};

    module.exports = deck;

