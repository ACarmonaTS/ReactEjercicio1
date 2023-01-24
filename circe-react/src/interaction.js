import './index.css';

export const animations = Array.from(document.getElementsByTagName("img"));

export const look = animations.forEach( (imagen) =>
    imagen.addEventListener("mouseover", () => {
        imagen.className = "img-hover";
    })
)

export const finale = animations.forEach( (imagen) =>
    imagen.addEventListener("mouseleave", () => {
        imagen.className = "main div div";
    })
)

