document.addEventListener('DOMContentLoaded', function() {
    // Page transition effect
    const pageTransition = document.querySelector('.page-transition');
    
    if (pageTransition) {
        // Show transition when page loads
        pageTransition.classList.add('active');
        
        // Hide transition after a delay
        setTimeout(() => {
            pageTransition.classList.remove('active');
        }, 500);
    }
    
    // Add animation classes to elements
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-up');
    
    if (fadeElements.length > 0 || slideElements.length > 0) {
        // Create an intersection observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px 50px 0px'
        });
        
        // Observe fade elements
        fadeElements.forEach(element => {
            element.style.opacity = 0;
            observer.observe(element);
        });
        
        // Observe slide elements
        slideElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(50px)';
            observer.observe(element);
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close flash messages
    const closeButtons = document.querySelectorAll('.close-flash');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const flashMessage = button.parentElement;
            flashMessage.style.opacity = 0;
            setTimeout(() => {
                flashMessage.remove();
            }, 300);
        });
    });
    
    // Auto-hide flash messages after 5 seconds
    const flashMessages = document.querySelectorAll('.flash-message');
    
    flashMessages.forEach(message => {
        setTimeout(() => {
            message.style.opacity = 0;
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 5000);
    });
    
    // File upload functionality
    const uploadArea = document.querySelector('.upload-area');
    const fileInput = document.querySelector('#file-input');
    
    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });
        
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('active');
        });
        
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('active');
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('active');
            
            if (e.dataTransfer.files.length) {
                fileInput.files = e.dataTransfer.files;
                const form = fileInput.closest('form');
                if (form) form.submit();
            }
        });
        
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length) {
                const form = fileInput.closest('form');
                if (form) form.submit();
            }
        });
    }
    
    // Scroll to top button
    const scrollTopButton = document.querySelector('.scroll-top');
    
    if (scrollTopButton) {
        const scrollHandler = () => {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('show');
            } else {
                scrollTopButton.classList.remove('show');
            }
        };
        
        // Use passive event listener for better scroll performance
        window.addEventListener('scroll', scrollHandler, { passive: true });
        
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 