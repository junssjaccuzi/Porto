/**
 * Portfolio Rendra Adie Permana - Fullstack Developer
 * Universitas Perjuangan - S1 Teknik Informatika
 * All class & ID references strictly use 'rendra-' prefix.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle (Dark & Light Mode)
    const rendraBtnTheme = document.getElementById('rendra-btn-theme');
    const rendraHtmlRoot = document.documentElement;
    const rendraSavedTheme = localStorage.getItem('rendra-theme');

    if (rendraSavedTheme === 'light') {
        rendraHtmlRoot.classList.add('rendra-light-mode');
    }

    if (rendraBtnTheme) {
        rendraBtnTheme.addEventListener('click', () => {
            rendraHtmlRoot.classList.toggle('rendra-light-mode');
            const isLight = rendraHtmlRoot.classList.contains('rendra-light-mode');
            localStorage.setItem('rendra-theme', isLight ? 'light' : 'dark');
        });
    }

    // 2. Mobile Drawer Navigation
    const rendraBtnHamburger = document.getElementById('rendra-btn-hamburger');
    const rendraDrawerMenu = document.getElementById('rendra-drawer-menu');
    const rendraDrawerLinks = document.querySelectorAll('.rendra-drawer-link');

    if (rendraBtnHamburger && rendraDrawerMenu) {
        rendraBtnHamburger.addEventListener('click', () => {
            rendraBtnHamburger.classList.toggle('rendra-open');
            rendraDrawerMenu.classList.toggle('rendra-open');
        });

        // Close drawer when any mobile link is clicked
        rendraDrawerLinks.forEach(link => {
            link.addEventListener('click', () => {
                rendraBtnHamburger.classList.remove('rendra-open');
                rendraDrawerMenu.classList.remove('rendra-open');
            });
        });
    }

    // 3. Active Nav Link on Scroll
    const rendraSections = document.querySelectorAll('.rendra-section');
    const rendraNavLinks = document.querySelectorAll('.rendra-nav-link');

    window.addEventListener('scroll', () => {
        let rendraCurrentSection = '';
        const scrollPosition = window.scrollY + 120;

        rendraSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                rendraCurrentSection = section.getAttribute('id');
            }
        });

        rendraNavLinks.forEach(link => {
            link.classList.remove('rendra-active');
            if (link.getAttribute('href') === `#${rendraCurrentSection}`) {
                link.classList.add('rendra-active');
            }
        });
    });

    // 4. Contact Form Submission Simulation
    const rendraContactForm = document.getElementById('rendra-form-contact');
    const rendraFormStatus = document.getElementById('rendra-form-status');
    const rendraBtnSubmit = document.getElementById('rendra-btn-submit');

    if (rendraContactForm && rendraFormStatus) {
        rendraContactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate loading state
            if (rendraBtnSubmit) {
                rendraBtnSubmit.disabled = true;
                rendraBtnSubmit.innerHTML = `<span>Mengirim Pesan...</span>`;
            }

            setTimeout(() => {
                rendraFormStatus.className = 'rendra-form-alert rendra-form-alert-success';
                rendraFormStatus.textContent = 'Terima kasih! Pesan Anda telah terkirim ke Rendra Adie Permana. Saya akan segera menghubungi Anda.';
                rendraFormStatus.style.display = 'block';

                rendraContactForm.reset();

                if (rendraBtnSubmit) {
                    rendraBtnSubmit.disabled = false;
                    rendraBtnSubmit.innerHTML = `
                        <span>Kirim Pesan</span>
                        <svg class="rendra-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    `;
                }

                setTimeout(() => {
                    rendraFormStatus.style.display = 'none';
                }, 5000);
            }, 800);
        });
    }
});
