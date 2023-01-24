const animations = Array.from(document.getElementsByTagName("img"));

animations.forEach( (imagen) =>
    imagen.addEventListener("mouseover", () => {
        imagen.className = "img-hover"
    })
)

animations.forEach( (imagen) =>
    imagen.addEventListener("mouseleave", () => {
        imagen.className = "main div div"
    })
)