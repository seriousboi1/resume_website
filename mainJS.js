const typed = new Typed('.animation_typed', {
    strings: [
        '<span style="color: #D8533B;"> C#</span>',
        '<span style="color: #C44B36;"> C</span>',
        '<span style="color: #B84835;"> C++</span>',
        '<span style="color: #247DCB;"> Python</span>',
        '<span style="color: #4DBC5E;"> Java</span>',
        '<span style="color: #F99D18;"> HTML-CSS-JS</span>',
        '<span style="color: #8E44AD;"> SQL</span>',
        '<span style="color: #3E35CA;"> Lua</span>'
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    showCursor: true,
    smartBackspace: true
});

const textbox1 = document.getElementById('textbox_1');
const textbox2 = document.getElementById('textbox_2');
const textbox3 = document.getElementById('textbox_3');
const textbox4 = document.getElementById('textbox_4');
const textbox5 = document.getElementById('textbox_5');
const textbox6 = document.getElementById('textbox_6');
const blueCable = document.getElementById('cable');
const redCable = document.getElementById('red_cable');
const greenCable = document.getElementById('green_cable');

function getVwValue(valueInPx) {
    const viewportWidth = window.innerWidth;
    return (valueInPx / viewportWidth) * 100;
}

let blueCableAnimationTriggered = false;
let redCableAnimationTriggered = false;
let greenCableAnimationTriggered = false;

function checkVisibility() {
    const viewportHeightVW = getVwValue(window.innerHeight);

    const textbox1Rect = textbox1.getBoundingClientRect();
    const textbox2Rect = textbox2.getBoundingClientRect();
    const textbox3Rect = textbox3.getBoundingClientRect();
    const textbox4Rect = textbox4.getBoundingClientRect();
    const textbox5Rect = textbox5.getBoundingClientRect();
    const textbox6Rect = textbox6.getBoundingClientRect();

    const textbox1TopVW = getVwValue(textbox1Rect.top);
    const textbox1BottomVW = getVwValue(textbox1Rect.bottom);
    const textbox2TopVW = getVwValue(textbox2Rect.top);
    const textbox2BottomVW = getVwValue(textbox2Rect.bottom);
    const textbox3TopVW = getVwValue(textbox3Rect.top);
    const textbox3BottomVW = getVwValue(textbox3Rect.bottom);
    const textbox4TopVW = getVwValue(textbox4Rect.top);
    const textbox4BottomVW = getVwValue(textbox4Rect.bottom);
    const textbox5TopVW = getVwValue(textbox5Rect.top);
    const textbox5BottomVW = getVwValue(textbox5Rect.bottom);
    const textbox6TopVW = getVwValue(textbox6Rect.top);
    const textbox6BottomVW = getVwValue(textbox6Rect.bottom);

    const thresholdVW = 5; // VW threshold

    const textbox1Visible = textbox1TopVW <= viewportHeightVW - thresholdVW && textbox1BottomVW >= thresholdVW;
    const textbox2Visible = textbox2TopVW <= viewportHeightVW - thresholdVW && textbox2BottomVW >= thresholdVW;
    const textbox3Visible = textbox3TopVW <= viewportHeightVW - thresholdVW && textbox3BottomVW >= thresholdVW;
    const textbox4Visible = textbox4TopVW <= viewportHeightVW - thresholdVW && textbox4BottomVW >= thresholdVW;
    const textbox5Visible = textbox5TopVW <= viewportHeightVW - thresholdVW && textbox5BottomVW >= thresholdVW;
    const textbox6Visible = textbox6TopVW <= viewportHeightVW - thresholdVW && textbox6BottomVW >= thresholdVW;


    if (textbox1Visible) {
        textbox1.classList.remove('invisible');
        textbox1.classList.add('visible');
    } else {
        textbox1.classList.remove('visible');
        textbox1.classList.add('invisible');
    }

    if (textbox2Visible) {
        textbox2.classList.remove('invisible');
        textbox2.classList.add('visible');
    } else {
        textbox2.classList.remove('visible');
        textbox2.classList.add('invisible');
    }

    if (textbox3Visible) {
        textbox3.classList.remove('invisible');
        textbox3.classList.add('visible');
    } else {
        textbox3.classList.remove('visible');
        textbox3.classList.add('invisible');
    }

    if (textbox4Visible) {
        textbox4.classList.remove('invisible');
        textbox4.classList.add('visible');
    } else {
        textbox4.classList.remove('visible');
        textbox4.classList.add('invisible');
    }

    if (textbox5Visible) {
        textbox5.classList.remove('invisible');
        textbox5.classList.add('visible');
    } else {
        textbox5.classList.remove('visible');
        textbox5.classList.add('invisible');
    }

    if (textbox6Visible) {
        textbox6.classList.remove('invisible');
        textbox6.classList.add('visible');
    } else {
        textbox6.classList.remove('visible');
        textbox6.classList.add('invisible');
    }

    const blueCableTopVW = getVwValue(blueCable.getBoundingClientRect().top);
    if (blueCableTopVW + 10 <= viewportHeightVW - thresholdVW && !blueCableAnimationTriggered) {
        blueCable.classList.add('blue_connect-animation');
        blueCableAnimationTriggered = true;
    }

    if (blueCableTopVW + 55 > viewportHeightVW - thresholdVW && blueCableAnimationTriggered) {
        blueCable.classList.remove('blue_connect-animation');
        blueCableAnimationTriggered = false;
    }

    const redCableTopVW = getVwValue(redCable.getBoundingClientRect().top);
    if (redCableTopVW + 10 <= viewportHeightVW - thresholdVW && !redCableAnimationTriggered) {
        redCable.classList.add('red_connect-animation');
        redCableAnimationTriggered = true;
    }

    if (redCableTopVW + 40 > viewportHeightVW - thresholdVW && redCableAnimationTriggered) {
        redCable.classList.remove('red_connect-animation');
        redCableAnimationTriggered = false;
    }

    const greenCableTopVW = getVwValue(greenCable.getBoundingClientRect().top);
    if (greenCableTopVW + 10 <= viewportHeightVW - thresholdVW && !greenCableAnimationTriggered) {
        greenCable.classList.add('green_connect-animation');
        greenCableAnimationTriggered = true;
    }

    if (greenCableTopVW + 20 > viewportHeightVW - thresholdVW && greenCableAnimationTriggered) {
        greenCable.classList.remove('green_connect-animation');
        greenCableAnimationTriggered = false;
    }
}

let ticking = false;

function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            checkVisibility();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', checkVisibility);
window.addEventListener('load', checkVisibility);
checkVisibility();

function moveNavigationBall() {
    const ball = document.getElementById('indicator_ball');
    const skills_section = document.getElementById('textbox3');

    if (skills_section.classList.contains('visible')) {
        ball.classList.add('move_ball_to_right');
    } else {
        ball.classList.remove('move_ball_to_right');
    }
}

window.addEventListener('scroll', moveNavigationBall);
window.addEventListener('resize', moveNavigationBall);
window.addEventListener('load', moveNavigationBall);
