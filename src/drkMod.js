// Icons
const sunIcon = document.querySelector(".moon");
const monnIcon = document.querySelector(".sun");

// Them vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon toggling
const iconToggle = () => {
    monnIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

// Initial Theme check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        monnIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};

// Manual Theme check
const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
}

// Call theme switch on clicking 
sunIcon.addEventListener("click", () => {
    themeSwitch();
});

monnIcon.addEventListener("click", () => {
    themeSwitch();
});


// invoke theme check on initial load
themeCheck();