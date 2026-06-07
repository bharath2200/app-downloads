document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Configure APK Download links
    // Replace the "#" with the actual URL where the APK is hosted
    const apkUrl = "https://github.com/bharath2200/app-downloads/releases/download/v1.0/Stayspot.apk"; 
    const downloadBtns = document.querySelectorAll('#download-btn, #footer-download-btn');
    
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (apkUrl === "#") {
                e.preventDefault();
                alert("APK download link will be available soon! Please replace the placeholder URL in script.js.");
            } else {
                // If it's a real link, we can just let the browser handle the navigation
                btn.setAttribute('href', apkUrl);
            }
        });
    });
});
