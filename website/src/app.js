// Wait for the page to load first
window.onload = function () {

    //Get a reference to the link on the page
    // with an id of "mylink"
    var a = document.getElementById("home")
    var b = document.getElementById("bout")
    var c = document.getElementById("hiw")
    //Set code to run when the link is clicked
    // by assigning a function to "onclick"
    if (a.onclick) {
        function doStuff() {
            b.classList.remove("active")
            c.classList.remove("active")
            a.classList.add("active")
            
        }
    } 
    if (b.onclick) {
        function doStuff() {
            a.classList.remove("active")
            c.classList.remove("active")
            b.classList.add("active")
        }
    } 
    if (c.onclick) {
        function doStuff() {
            a.classList.remove("active")
            b.classList.remove("active")
            c.classList.add("active")
        }
    }
}