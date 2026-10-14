const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

// document.addEventListener
// ('DOMContentLoaded',()=>{
//     if(aboutTabs){
//         aboutTabs[0].click();
//     }
// });


aboutTabs.forEach((tab) => {

    tab.addEventListener("click", (e) => {

        e.preventDefault();


        // Remove active from all tabs

        aboutTabs.forEach((a) => {

            a.classList.remove("active");

        });


        // Add active to clicked tab

        tab.classList.add("active");


        // Remove active from all content

        aboutContent.forEach((c) => {

            c.classList.remove("active");

        });


        // Get selected section

        const activeTab = tab.dataset.section;


        // Show selected section

        const activeContent =
            document.getElementById(activeTab);


        if (activeContent) {

            activeContent.classList.add("active");

        }

    });

});