window.onload = () => {
    initial()
}

const Programs = [
    {
        ID: 0,
        Name: "Program 1",
        Price: "20e",
        Description: ""
    },
    {
        ID: 1,
        Name: "Program 2",
        Price: "20e",
        Description: ""
    },
    {
        ID: 2,
        Name: "Program 3",
        Price: "20e",
        Description: ""
    },
    {
        ID: 3,
        Name: "Program 4",
        Price: "20e",
        Description: ""
    },
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
    navigation(undefined, true);
    animate(); */
}

/* function detectmob() {
    if (window.innerWidth <= 800 || window.innerHeight <= 600) {
        return true;
    } else {
        return false;
    }
} */


const animate = () => {
    /* console.log("hererere")
    var btn = document.getElementsByClassName("btn-animate");

    for(let i = 0; i<btn.length; i++) {
        State.interval = setInterval(() => {
            btn[i].style.Top += 10; 
        } ,500)
        
    }

    btn.animate({ top: '10px', opacity: '0.9' }, "slow");
    btn.animate({ top: '-10px', opacity: '1' }, "slow"); */
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
            btns[i].className = "btn btn-success text-uppercase custom-btn-size";
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
    // Put program in state
    //State.Program = Programs[id];
    document.getElementById("promoPic").src = `promo-pictures/${id}.jpg`;
    // UI CHANGES
    showCard(5);
    navigation(undefined, true);
}

const emailForm = () => {
    const { Program } = State;
    // UI CHANGES
    showCard(6);
    // Video autoplay
    var myVideo = document.getElementById("promo-video");
    myVideo.play();
    //animate();
    //navigation(undefined, true);
    return false;
}