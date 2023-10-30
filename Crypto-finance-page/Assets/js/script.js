        const content = document.getElementById('nav-mobile');
        const displayIcon = document.getElementById('mobile-icon');
        
        displayIcon.addEventListener('click', () => {
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
        })

        // const review = document.querySelector('.review');
        // const userReview = document.querySelectorAll('.user-review');
        // let currentIndex = 0;
        // const userReviewWidth = userReview[0].clientWidth;

        // function updateReview() {
        //     const offset = -currentIndex * userReviewWidth;
        //     review.style.transform = `translateX(${offset}px)`;
        // }

        // // Automatic sliding
        // setInterval(() => {
        //     if (currentIndex < userReview.length - 1) {
        //         currentIndex++;
        //     } else {
        //         currentIndex = 0;
        //     }
        //     updateReview();
        // }, 2000); // Change slide every 3 seconds



        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;
        const slideWidth = slides[0].clientWidth;

        function updateSlider() {
            const offset = -currentIndex * slideWidth;
            slider.style.transform = `translateX(${offset}px)`;
        }

        // Automatic sliding
        setInterval(() => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }, 3000); // Change slide every 3 seconds