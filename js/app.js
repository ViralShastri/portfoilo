$(document).ready(function () {
    // image filter
    var $wrapper = $("#portfolio__wrapper");
    // Initialize isotope
    $wrapper.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear",
        },
    });

    let links = document.querySelectorAll("#projects a");

    links.forEach(link => {
        let selector = link.dataset.filter;
        link.addEventListener("click", function (e) {
            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: "masonry",
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                },
            });

            links.forEach(link => {
                link.classList.remove("active");
            });

            e.target.classList.add("active");
        });
    });

    var $skill_wrapper = $("#skill__wrapper");
    // Initialize isotope
    $skill_wrapper.isotope({
        filter: "*",
        layoutMode: "fitRows",
        animationOptions: {
            duration: 750,
            easing: "linear",
        },
    });

    let skills_links = document.querySelectorAll("#skills a");

    skills_links.forEach(link => {
        let selector = link.dataset.filter;
        link.addEventListener("click", function (e) {
            e.preventDefault();

            $skill_wrapper.isotope({
                filter: selector,
                layoutMode: "fitRows",
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                },
            });

            skills_links.forEach(link => {
                link.classList.remove("active");
            });

            e.target.classList.add("active");
        });
    });
});
