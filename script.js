//counter section - about page

$(document).ready(function () {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            var settings = $.extend({}, {
                from: $(this).data('from') || 0,
                to: $(this).data('to'),
                speed: $(this).data('speed') || 1000,
                refreshInterval: 50,
                decimals: 0
            }, options);

            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from;

            function updateCounter() {
                value += increment;
                loopCount++;

                $self.text(Math.floor(value));

                if (loopCount >= loops) {
                    clearInterval(data.interval);
                    $self.text(settings.to);
                }
            }

            var data = $self.data('countTo') || {};
            $self.data('countTo', data);

            if (data.interval) {
                clearInterval(data.interval);
            }

            data.interval = setInterval(updateCounter, settings.refreshInterval);
        });
    };

    $(".timer").each(function () {
        $(this).countTo();
    });
});


// Team section - About page 

let marqueeAnimation;

        function createInfiniteLoop() {
            const marquee = document.querySelector(".marquee");
            const items = Array.from(document.querySelectorAll(".marquee-item"));
            const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth + 20, 0); // 20px gap

            // Duplicate items for seamless loop
            items.forEach(item => {
                let clone = item.cloneNode(true);
                marquee.appendChild(clone);
            });

            // GSAP animation for infinite scrolling
            marqueeAnimation = gsap.to(".marquee", {
                x: `-${totalWidth}px`,
                duration: 10,
                ease: "linear",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
                }
            });

            // Pause on hover
            document.querySelectorAll(".marquee-item").forEach(item => {
                item.addEventListener("mouseenter", () => marqueeAnimation.pause());
                item.addEventListener("mouseleave", () => marqueeAnimation.resume());
            });
        }

        window.addEventListener("load", createInfiniteLoop);
