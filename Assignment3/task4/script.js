function togglePara() {
    let p = document.getElementById("texting");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
    document.getElementById("firstbutton").style.backgroundColor="Green";
}