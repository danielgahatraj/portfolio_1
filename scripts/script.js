
const toggle=document.getElementById('menu-toggle');
if(toggle){
    toggle.addEventListener('change',
        ()=>{
            document.body.classList.toggle("no-scroll",toggle.checked);
        }
    );
}

const words=[
    "Engineer",
    "Student",
    "Developer",
    "Creator"
];

const typingText = document.
getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay=100;
let ersingDelay=100;
let nextWordDelay=1000;


const type = () =>{
    const currentWord = words[wordIndex];

    if(!isDeleting){
        typingText.textContent = currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){
            isDeleting=true;
            setTimeout(type,nextWordDelay);
        }else{
                setTimeout(type,typingDelay);
        }
    }else{
        typingText.textContent=currentWord.
        substring(0,charIndex-1);
        charIndex--;

        if(charIndex === 0){
            isDeleting=false;
            wordIndex=(wordIndex+1)%words.length;
            setTimeout(type,500);
        }else{
            setTimeout(type,ersingDelay);
        }
    }
};

document.addEventListener
('DOMContentLoaded',()=>{
    if(words?.length) type();
})


const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active from all links
        navlinks.forEach((l) => {

           if(l === link){
            link.classList.add("active");
           }else{


            l.classList.remove("active");
           }
        });

        // Activate clicked link
        link.classList.add("active");

        // Get tab name
        const tabName = link.dataset.tab;

        // Show corresponding tab
        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

    if(tabName === "services"){
    
   const serviceList = [
    {
        id: 1,
        icon: "ph-globe",
        text: "Web Development",
        para: "Building responsive and modern websites using HTML, CSS, and JavaScript."
    },
    {
        id: 2,
        icon: "ph-code",
        text: "Frontend Development",
        para: "Creating interactive and responsive web interfaces with clean and efficient code."
    },
    {
        id: 3,
        icon: "ph-brain",
        text: "Python & AIML",
        para: "Developing Python-based projects while exploring Artificial Intelligence and Machine Learning."
    },
    {
        id: 4,
        icon: "ph-lightbulb",
        text: "Problem Solving",
        para: "Applying programming concepts, algorithms, and logical thinking to solve technical problems."
    }
];
       const services = document.
       getElementsByClassName
       ("service-list");

       const innerContent = serviceList.
       map((l)=>{
        return `
        <div class="box" key=${l?.id}>
            <div class="head-icons">
                <i class="ph ${l?.icon}"></i>
               
                <span>
                     <i class="ph ph-arrow-down-right"></i>
                </span>
            </div>
            <h3>${l?.text}</h3>
            <span class="spacer"></span>

            <p>${l?.para}</p>
           
           </div>
        `;
       }) .join("");

    Array.from(services).forEach
    ((ele)=>{
        ele.innerHTML = innerContent;
    });

    }

    toggle.checked = false;

    });

});


