const toggleDesktop = document.querySelector(".desktop-toggle");
let logoD = document.querySelector('.desktop-logo');

toggleDesktop.addEventListener('click', ()=>{
    if(toggleDesktop.classList.contains("light")){
        document.documentElement.style.setProperty('--color1', '#FFFFFF');
        document.documentElement.style.setProperty('--color2', '#001F3F');
        toggleDesktop.classList.add("dark");
        toggleDesktop.classList.remove("light");
        logoD.src="./images/image 1 (1).png";
    } else {
        document.documentElement.style.setProperty('--color1', '#001F3F');
        document.documentElement.style.setProperty('--color2', '#FFFFFF');
        toggleDesktop.classList.add("light");
        toggleDesktop.classList.remove("dark");
        logoD.src="./images/image 1.png";
    }
})

const toggleMobile = document.querySelector(".mobile-toggle");
let logoM = document.querySelector('.mobile-logo');
toggleMobile.addEventListener('click', ()=>{
    if(toggleMobile.classList.contains("light")){
        document.documentElement.style.setProperty('--color1', '#FFFFFF');
        document.documentElement.style.setProperty('--color2', '#001F3F');
        toggleMobile.classList.add("dark");
        toggleMobile.classList.remove("light");
        logoM.src="./images/image 1 (1).png";
    } else {
        document.documentElement.style.setProperty('--color1', '#001F3F');
        document.documentElement.style.setProperty('--color2', '#FFFFFF');
        toggleMobile.classList.add("light");
        toggleMobile.classList.remove("dark");
        logoM.src="./images/image 1.png";
    }
})