
// for Trick One 
const trickOne_Button = document.querySelector('#trick-one button');
const trickOne_Text = document.querySelector('#trick-one p');

trickOne_Button.addEventListener('click', () => {
    trickOne_Text.innerHTML = "🎩 Ta-Daaaa! Ala-Kazam! The Waverly Wand does Magical Wanders 💫";
});


// for Trick Two 
const trickTwo_Button = document.querySelector('#trick-two button');
const trickTwo_Text = document.querySelector('#trick-two p');

trickTwo_Button.addEventListener('click', () => {
    trickTwo_Text.style.color = "#42BD00";
});


// for Trick Three 
const trickThree_Button = document.querySelector('#trick-three button');
const trickThree_Text = document.querySelector('#trick-three p');
const trickThree_Section = document.querySelector('#trick-three');
const trickThree_Image = document.createElement('img');
trickThree_Image.src = "/lab-Six/trickThree.gif";
trickThree_Image.alt = "Magic Bunny GIF";

trickThree_Button.addEventListener('click', () => {
    if(trickThree_Text){
         trickThree_Text.remove();
    }
    trickThree_Section.insertBefore(trickThree_Image, trickThree_Button);
});