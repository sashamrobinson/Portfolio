document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to your buttons
    const informationButton = document.getElementById('Information');
    const projectsButton = document.getElementById('Projects');
    const contactButton = document.getElementById('Contact');

    const informationContent = document.getElementById("InformationContent");
    const projectsContent = document.getElementById("ProjectsContent");
    const contactContent = document.getElementById("ContactContent");

    function hideAllContent() {
        informationContent.classList.add("hidden");
        projectsContent.classList.add("hidden");
        contactContent.classList.add("hidden");
        informationContent.classList.remove("showing");
        projectsContent.classList.remove("showing");
        contactContent.classList.remove("showing");
    }

    function addShowing() {
        informationContent.classList.add("showing");
        projectsContent.classList.add("showing");
        contactContent.classList.add("showing");
    }

    informationButton.addEventListener('click', function () {
        hideAllContent();
        
        // Wait 0.5 seconds
        setTimeout(function() {
            showContent('InformationContent');
            informationContent.classList.add("showing");
        }, 500);
    });

    projectsButton.addEventListener('click', function () {
        hideAllContent();

        // Wait 0.5 seconds
        setTimeout(function() {
            showContent('ProjectsContent');
            projectsContent.classList.add("showing");
        }, 500);
    });

    contactButton.addEventListener('click', function () {
        hideAllContent();

        // Wait 0.5 seconds
        setTimeout(function() {
            showContent('ContactContent');
            contactContent.classList.add("showing");
        }, 500);
    });

    // Function to show content based on the provided contentId
    function showContent(contentId) {
        // Hide all content elements
        const allContents = document.querySelectorAll('.content');
        allContents.forEach(function (content) {
            content.style.display = 'none';
        });

        // Show the selected content
        const selectedContent = document.getElementById(contentId);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
    }

    // Show the 'InformationContent' div on page load
    showContent('InformationContent');
});
