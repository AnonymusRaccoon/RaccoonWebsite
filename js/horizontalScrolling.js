const sliders = document.querySelectorAll(".screenshots");
sliders.forEach((slider) =>
{
    var sliding = false;
    var startX;

    slider.addEventListener("mousedown", (eventArg) =>
    {
        sliding = true;
        startX = eventArg.pageX + slider.scrollLeft;
    });

    slider.addEventListener("mousemove", (eventArg) =>
    {
        if (sliding)
        {
            eventArg.preventDefault();
            slider.scrollLeft = startX - eventArg.pageX;

            if (slider.scrollLeft == 0)
                document.getElementById("left-scroll").style.display = "none";
            else
                document.getElementById("left-scroll").style.display = "inline-block";
            
            if (slider.scrollLeft + 10 >= slider.scrollWidth - slider.clientWidth)
                document.getElementById("right-scroll").style.display = "none";
            else
                document.getElementById("right-scroll").style.display = "inline-block";
        }
    });
    
    slider.addEventListener("mouseup", () =>
    {
        sliding = false;
    });
    slider.addEventListener("mouseleave", () => {
        sliding = false;
    });


    slider.onscroll = function ()
    {
        if (slider.scrollLeft == 0)
            document.getElementById("left-scroll").style.display = "none";
        else
            document.getElementById("left-scroll").style.display = "inline-block";

        if (slider.scrollLeft + 10 >= slider.scrollWidth - slider.clientWidth)
            document.getElementById("right-scroll").style.display = "none";
        else
            document.getElementById("right-scroll").style.display = "inline-block";
    };


    //Shouldn't do it here, but will say it's ok.
    document.getElementById("left-scroll").onclick = function()
    {
        slider.scrollBy({ top: 0, left: -slider.offsetWidth * 0.66, behavior: "smooth" });
        document.getElementById("right-scroll").style.display = "inline-block";

        if (slider.scrollLeft - slider.offsetWidth * 0.66 <= 0)
            document.getElementById("left-scroll").style.display = "none";            
    }

    document.getElementById("right-scroll").onclick = function()
    {
        slider.scrollBy({ top: 0, left: slider.offsetWidth * 0.66, behavior: "smooth" });
        document.getElementById("left-scroll").style.display = "inline-block";

        if (slider.scrollLeft + slider.offsetWidth * 0.66 + 10 >= slider.scrollWidth - slider.clientWidth)
            document.getElementById("right-scroll").style.display = "none";
    }
});