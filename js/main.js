document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to your buttons
    const informationButton = document.getElementById('Information');
    const projectsButton = document.getElementById('Projects');
    const contactButton = document.getElementById('Contact');

    informationButton.addEventListener('click', function () {
        showContent('InformationContent');
    });

    projectsButton.addEventListener('click', function () {
        showContent('ProjectsContent');
    });

    contactButton.addEventListener('click', function () {
        showContent('ContactContent');
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
