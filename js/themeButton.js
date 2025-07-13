let switchMode = document.getElementById("themeButton");
switchMode.onclick = function () {
    let theme = document.getElementById("theme")
    if (theme.getAttribute("href") == "css/style.css") {
        theme.href = "css/style2.css"
    } else {
        theme.href = "css/style.css"
    }
}