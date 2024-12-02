let openedDoors = [];

function toggleDoor(div, text, color) {
    // Für Smartphone: Vollbildmodus umschalten
    if (window.innerWidth <= 600) {
        if (!div.classList.contains('open')) {
            div.classList.add('open');
            div.innerHTML = text;
            div.style.backgroundColor = color;
        } else {
            div.classList.remove('open');
            div.innerHTML = div.getAttribute('data-number');
        }
    } else {
        // Desktop: Normaler Modus
        if (!openedDoors.includes(div)) {
            div.innerHTML = text;
            div.style.fontSize = '15px';
            div.style.backgroundColor = color;
            openedDoors.push(div); // Tür merken
        }
    }
}

// Funktionen für die Türen
function door1(div) {
    toggleDoor(div, '"I’ll never feel alone again with you by my side." – Lonely Day (System of a Down)', 'rgb(126, 182, 126)');
    div.setAttribute('data-number', '1');
}

function door2(div) {
    toggleDoor(div, '"You are all I’m not, all I’ve got." – Snuff (Slipknot)', 'rgb(57,79,193)');
    div.setAttribute('data-number', '2');
}

function door3(div) {
    toggleDoor(div, '"Love you so much, it makes me sick." – Aneurysm (Nirvana)', 'rgb(250,187,237)');
    div.setAttribute('data-number', '3');
}

function door4(div) {
    toggleDoor(div, '"I want your love and I want it now." – Some Kinda Hate (The Misfits)', 'rgb(110,159,209)');
    div.setAttribute('data-number', '4');
}

function door5(div) {
    toggleDoor(div, '"There’s no point in asking, you’ll get no reply, but I still love you." – No Feelings (Sex Pistols)', 'rgb(28,99,28)');
    div.setAttribute('data-number', '5');
}

function door6(div) {
    toggleDoor(div, '"Every little bit hurts, every little bit hurts, but I still love you." – Every Little Bit Hurts (The Clash)', 'rgb(147,78,232)');
    div.setAttribute('data-number', '6');
}

function door7(div) {
    toggleDoor(div, '"All the words we are screaming, silence will not stop my love for you." – Toxicity (interpretive) (System of a Down)', 'rgb(126, 182, 126)');
    div.setAttribute('data-number', '7');
}

function door8(div) {
    toggleDoor(div, '"If I could start again, a million miles away, I would keep myself, I would find a way – for you." – Vermilion Pt. 2 (Slipknot)', 'rgb(177,65,65)');
    div.setAttribute('data-number', '8');
}

function door9(div) {
    toggleDoor(div, '"I\'m so happy, \'cause today I found my friends – they\'re in my head and you\'re in my heart." – Lithium (adapted) (Nirvana)', 'rgb(57,79,193)');
    div.setAttribute('data-number', '9');
}

function door10(div) {
    toggleDoor(div, '"I’ll put a spell on you, forever you’ll be mine." – Hybrid Moments (adapted) (The Misfits)', 'rgb(126, 182, 126)');
    div.setAttribute('data-number', '10');
}

function door11(div) {
    toggleDoor(div, '"Don\'t be told what you want, don\'t be told what you need – you are everything to me." – Anarchy in the UK (adapted) (Sex Pistols)', 'rgb(241,205,205)');
    div.setAttribute('data-number', '11');
}

function door12(div) {
    toggleDoor(div, '"Darling, you got to let me know, should I stay or should I go – I’ll stay, always." – Should I Stay or Should I Go (adapted) (The Clash)', 'rgb(205,81,236)');
    div.setAttribute('data-number', '12');
}

function door13(div) {
    toggleDoor(div, '"My soul is alive, and I feel the love in your eyes." – Aerials (System of a Down)', 'rgb(126, 182, 126)');
    div.setAttribute('data-number', '13');
}

function door14(div) {
    toggleDoor(div, '"I’m not going anywhere without you, you’re the voice in my head that I can’t replace." – Snuff (Slipknot)', 'rgb(221,128,128)');
    div.setAttribute('data-number', '14');
}

function door15(div) {
    toggleDoor(div, '"Even in my darkest hour, your light keeps shining through." – All Apologies (adapted) (Nirvana)', 'rgb(27,108,133)');
    div.setAttribute('data-number', '15');
}

function door16(div) {
    toggleDoor(div, '"I will always remember your heart – it’s my Halloween forever." – Halloween (adapted) (The Misfits)', 'rgb(111,77,166)');
    div.setAttribute('data-number', '16');
}

function door17(div) {
    toggleDoor(div, '"There is no future without you in it." – God Save the Queen (adapted) (Sex Pistols)', 'rgb(4,94,184)');
    div.setAttribute('data-number', '17');
}

function door18(div) {
    toggleDoor(div, '"Rocking your heart like the Casbah – I’ll never stop." – Rock the Casbah (adapted) (The Clash)', 'rgb(253,249,249)');
    div.setAttribute('data-number', '18');
}

function door19(div) {
    toggleDoor(div, '"Your love feels like the rhythm of the universe in perfect harmony." – Science (adapted) (System of a Down)', 'rgb(246,224,178)');
    div.setAttribute('data-number', '19');
}

function door20(div) {
    toggleDoor(div, '"My heart is a knot, and you are the one who untangles me." – Duality (adapted) (Slipknot)', 'rgb(182,182,202)');
    div.setAttribute('data-number', '20');
}

function door21(div) {
    toggleDoor(div, '"I’ll hold you in my arms, as the lights go out forever." – Heart-Shaped Box (adapted) (Nirvana)', 'rgb(126, 182, 126)');
    div.setAttribute('data-number', '21');
}

function door22(div) {
    toggleDoor(div, '"Love me tender, love me sweet – even if I’m a little offbeat." – Skulls (adapted) (The Misfits)', 'rgb(177,65,65)');
    div.setAttribute('data-number', '22');
}

function door23(div) {
    toggleDoor(div, '"Anarchy for the world, but love for only you." – Anarchy in the UK (adapted) (Sex Pistols)', 'rgb(87,188,188)');
    div.setAttribute('data-number', '23');
}

function door24(div) {
    toggleDoor(div, '"You are the beat to my rhythm – you are my revolution." – London Calling (adapted) (The Clash)', 'rgb(57,79,193)');
    div.setAttribute('data-number', '24');
}
