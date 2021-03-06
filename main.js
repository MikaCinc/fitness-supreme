window.onload = () => {
    initial()
}

const URLs = [
    "https://fitness-supreme.com/checkout/?add-to-cart=2491",
    "https://fitness-supreme.com/checkout/?add-to-cart=2500",
    "https://fitness-supreme.com/checkout/?add-to-cart=2520",
    "https://fitness-supreme.com/checkout/?add-to-cart=2519"    
]

var State = {
    Gender: "",
    Age: "",
    interval: null
}

const initial = () => {
    showCard(0);
    navigation(0);

    /* showCard(6);
    navigation(undefined, true); */
}

const showCard = (index) => {
    var cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        if (i === index) {
            cards[i].className = "card card-width mx-auto mt-3 text-center"
        } else {
            cards[i].className = "card w-50 mx-auto mt-3 d-none"
        }
    }
}

const navigation = (index, hide) => {
    if (hide) {
        document.getElementById("navigation").className = "d-none";
        return;
    }
    var btns = document.getElementById("navigation").getElementsByTagName("button");
    for (let i = 0; i < btns.length; i++) {
        if (i === index) {
            btns[i].className = "btn btn-primary text-uppercase custom-btn-size";
            break;
        }
    }
}

const gender = (type) => {
    State.Gender = type
    showCard(1);
    navigation(1);
    changeMetrics('metrics')
}


const changeMetrics = (type) => {
    if (type === "metrics") {
        $("#metrics").collapse('show');
        /* $("#imperial").collapse('hide'); */
    } /* else {
        $("#" + type).collapse('show');
        $("#metrics").collapse('hide');
    } */
}

const measurements = () => {
    showCard(2);
    navigation(2);
    return false;
}

const age = (age) => {
    State.Age = age;
    showCard(3);
    navigation(3);
}

const activity = (activity) => {
    State.activity = activity;
    showCard(4);
    navigation(4);
}

const program = (id) => {
    var promoPic = document.getElementById("promoPic");
    promoPic.src = `promo-pictures/${id}.jpg`;
    promoPic.onclick = () => {
        window.open(URLs[id-1],'_blank');
    }
    document.getElementById("finalButton").onclick = () => {
        window.open(URLs[id-1],'_blank');
    }
    // UI CHANGES
    showCard(5);
    navigation(undefined, true);
}

const emailForm = () => {
    // UI CHANGES
    showCard(6);
    // Video autoplay
    /* var myVideo = document.getElementById("promo-video");
    myVideo.play(); */
    //navigation(undefined, true);
    return false;
}