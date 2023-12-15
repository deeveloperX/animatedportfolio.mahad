let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
let layer5 = document.getElementById("layer5");
let layer6 = document.getElementById("layer6");
let layer7 = document.getElementById("layer7");
let layer8 = document.getElementById("layer8");
let layer9 = document.getElementById("layer9");
let text = document.getElementById("parallax-text");

let skills = document.getElementById("skills-container");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    text.style.marginRight = value * 1 + 'px';
    layer2.style.top = value * 2.5 + 'px';
    layer5.style.left = value * -1 + 'px';
    layer6.style.top = value * 1 + 'px';
    layer6.style.left = value * 1 + 'px';
    layer7.style.left = value * 1 + 'px';

    
});

// ------------------------------------------------------------------------


