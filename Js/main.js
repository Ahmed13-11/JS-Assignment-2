var arr = [
    "“Be yourself; everyone else is already taken.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“A friend is someone who knows all about you and still loves you.”",
    "“Always forgive your enemies; nothing annoys them so much.”"
];

var arr1 = [];

function givingQuote() {
    if (arr1.length===arr.length) {
        return;
    }
    var x = Math.floor(Math.random() * arr.length);
    var trs=``;
    if (arr1.includes(arr[x])) {
        givingQuote();
    } else {
        var quote = arr[x];
        arr1.push(quote);
        trs += `${quote}`
        document.getElementById('quote').innerHTML=trs;
    }
}
