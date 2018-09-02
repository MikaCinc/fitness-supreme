window.onload = () => {
    initial()
}

var State = {
    Gender: "",
    Age: "",
}

const initial = () => {
    showCard(0);
    navigation(0);
}

const showCard = (index) => {
    var cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        if (i === index) {
            cards[i].className = "card w-50 mx-auto mt-3"
        } else {
            cards[i].className = "card w-50 mx-auto mt-3 d-none"
        }
    }
}

const navigation = (index) => {
    var btns = document.getElementById("navigation").getElementsByTagName("button");
    for (let i = 0; i < btns.length; i++) {
        if (i === index) {
            btns[i].className = "btn btn-success btn-lg"
        }
    }
}

const gender = (type) => {
    State.Gender = type
    showCard(1);
    navigation(1);
}


const changeMetrics = (type) => {
    if(type === "metrics") {
        $("#" + type).collapse('show');
        $("#imperial").collapse('hide');
    } else {
        $("#" + type).collapse('show');
        $("#metrics").collapse('hide');
    }
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