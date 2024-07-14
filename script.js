var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
var sidemenu = document.getElementById("sidemenu");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function loadSection(section) {
    const sections = {
        home: 'home.html',
        about: 'about.html',
        services: 'services.html',
        portfolio: 'portfolio.html',
        contact: 'contact.html'
    };

    fetch(sections[section])
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading section:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('nav .fas');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
});
// Load the home section by default
document.addEventListener('DOMContentLoaded', () => loadSection('home'));




