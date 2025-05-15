
            // GSAP animation for the hero section
            gsap.from(".nav-hero", {
                duration: 1,
                opacity: 0,
                y: -50,
                ease: "power2.out",
                scrollTrigger: {
                trigger: ".nav-hero",
                start: "top center",
                end: "bottom center",
                scrub: true,
                },
            });

            // GSAP animation for the text typing effect headline
            const text = "Find contact info for anyone";
            const typed = document.getElementById("typed-text");

            gsap.to({}, {
                duration: text.length * 0.07,
                repeat: 0,
                onUpdate: function () {
                const progress = Math.floor(this.progress() * text.length);
                typed.textContent = text.substring(0, progress);
                },
                ease: "none"
            });

            // GSAP animation for the text typing effect subheading
            // and type it out in reverse
            const fullText = "real-time research and validation on over 1.3 billion+ business contacts and 121 million+ companies";
            const reversed = fullText.split("").reverse().join("");
            const target = document.getElementById("backward-text");

            gsap.to({}, {
                duration: fullText.length * 0.02,
                onUpdate: function () {
                const progress = Math.floor(this.progress() * fullText.length);
                const typed = reversed.substring(0, progress).split("").reverse().join("");
                target.textContent = typed;
                },
                ease: "none"
            });

            // GSAP animation for the email input box
            gsap.from("#slide-in-box", {
                x: 300,           // starts 300px to the right
                opacity: 0,
                duration: 3,
                ease: "power3.out"
            });

            // GSAP animation for the text below the email input box
            gsap.from("#slide-in-left", {
                x: -200,           // starts 200px to the left
                opacity: 0,
                duration: 3,
                ease: "power3.out"
            });

            // GSAP animation for first card
            gsap.from("#slide-left", {
                x: -200,           // starts 200px to the left
                opacity: 0,
                stagger: 0.2,
                duration: 3,
                ease: "power3.out"
            });

            // GSAP animation for second card
            gsap.from("#slide-top", {
                y: 200,           // starts 200px to the left
                opacity: 0,
                stagger: 0.2,
                duration: 3,
                ease: "power3.out"
            });

            // GSAP animation for third card
            gsap.from("#slide-right", {
                x: 200,           // starts 200px to the left
                opacity: 0,
                stagger: 0.2,
                duration: 3,
                ease: "power3.out"
            });