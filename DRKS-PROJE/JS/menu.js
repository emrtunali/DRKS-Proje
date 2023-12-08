function open1() {
    const hamburger = document.getElementById("hamburger");
    const x = document.getElementById("x");
    x.style.display = "block";
    hamburger.style.display = "none";
    document.getElementById("sidebar").style.left = "0px";

}
function close1() {
    const x = document.getElementById("x");
    const hamburger = document.getElementById("hamburger");
    x.style.display = "none";
    hamburger.style.display = "block";
    document.getElementById("sidebar").style.left = "-250px";
}