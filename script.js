document.addEventListener('DOMContentLoaded', () => {

    // --- Estrelas de Fundo ---
    const starBackgroundContainer = document.querySelector('.star-background');
    const numStars = 200; // Quantidade de estrelas

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        starBackgroundContainer.appendChild(star);

        const size = Math.random() * 2 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const twinkleDelay = Math.random() * 10;
        const twinkleDuration = Math.random() * 5 + 5;

        const floatDelay = Math.random() * 20;
        const floatDuration = Math.random() * 20 + 20;

        star.style.animation = `
            twinkle ${twinkleDuration}s ease-in-out ${twinkleDelay}s infinite alternate,
            floatStar ${floatDuration}s linear ${floatDelay}s infinite
        `;
    }

    // --- Asteroides de Fundo ---
    const asteroidFieldContainer = document.querySelector('.asteroid-field');
    const numAsteroids = 15; // Quantidade de asteroides

    for (let i = 0; i < numAsteroids; i++) {
        const asteroid = document.createElement('div');
        asteroid.classList.add('asteroid');
        asteroidFieldContainer.appendChild(asteroid);

        const size = Math.random() * 40 + 20; // Tamanho entre 20px e 60px
        asteroid.style.width = `${size}px`;
        asteroid.style.height = `${size}px`;

        // Posição inicial fora da tela, para virem de longe
        asteroid.style.left = `${Math.random() * 200 - 50}%`; // De -50% a 150%
        asteroid.style.top = `${Math.random() * 200 - 50}%`;   // De -50% a 150%

        const moveDuration = Math.random() * 30 + 40; // Duração do movimento mais longa para os maiores
        const fadeDelay = Math.random() * 8; // Atraso para o fade
        const fadeDuration = Math.random() * 5 + 3; // Duração do fade

        asteroid.style.animation = `
            moveAsteroid ${moveDuration}s linear ${Math.random() * 10}s infinite,
            fadeAsteroid ${fadeDuration}s ease-in-out ${fadeDelay}s infinite alternate
        `;
    }


    // --- Animação de digitação no cabeçalho ---
    const textElement = document.querySelector('.header-text p');
    const textToType = "Futuro Cientista da Computação";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            textElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        } else {
            textElement.style.borderRight = 'none';
        }
    }

    setTimeout(typeWriter, 1500);

    // --- Animação de fade-in das seções ---
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    if (header) {
        header.classList.add('active');
    }

    // --- Botão "Voltar ao Topo" ---
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Lógica para botões (Download PDF, Contato) ---
    const downloadPdfBtn = document.getElementById('downloadPdf');
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', () => {
            alert('Funcionalidade de download de PDF será implementada em breve!');
        });
    }

    const contactMeBtn = document.getElementById('contactMe');
    if (contactMeBtn) {
        contactMeBtn.addEventListener('click', () => {
            alert('Redirecionando para o contato...');
        });
    }

});