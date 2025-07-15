window.onload = function()
{
    alert("Welcome to Nitesh's Personal Website");
};
//call the function to display date and time when the page loads
 
window.onload = function() {
    displayDateTime();
}

function changeAboutMeText()
{
    const aboutMeTexts =['Tech Enthusiast','Data Scientist','Full Stack Developer'];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type()
    {
        const currentText = aboutMeTexts[textIndex];
        /*typing*/
        if(!isDeleting && charIndex < currentText.length)
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type,typingSpeed);
        }
        /*Ereasing*/
        else if(isDeleting && charIndex > 0)
        {
            aboutMeElement.textContent = currentText.substring(0, charIndex -1);
            charIndex--;
            setTimeout(type,eraseSpeed);
        }
        /*switcing the deleting or typing processes*/
        else
        {
            isDeleting = !isDeleting;
            if(!isDeleting)
            {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }
    type();
}
changeAboutMeText();
