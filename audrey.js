const audrey = document.getElementById("audrey")


/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
   let y = window.scrollY;
   audrey.style.minWidth = '50px';
   audrey.style.width = `${y/3}px`;


    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   audrey.style.minHeight = '100px';
   audrey.style.height = `${y/4}px`;
})



