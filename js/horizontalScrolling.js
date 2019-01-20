const sliders = document.querySelectorAll(".screenshots");
sliders.forEach((slider) =>
{
    var sliding = false;
    var startX;

    slider.addEventListener("mousedown", (eventArg) =>
    {
        sliding = true;
        startX = eventArg.pageX;
    });

    slider.addEventListener("mousemove", (eventArg) =>
    {
        if (sliding)
        {
            eventArg.preventDefault();
            slider.scrollLeft += (startX - eventArg.pageX) * $(window).width() / (2 * slider.scrollWidth);
        }
    });
    
    slider.addEventListener("mouseup", () =>
    {
        sliding = false;
    });
    slider.addEventListener("mouseleave", () => {
        sliding = false;
    });
});