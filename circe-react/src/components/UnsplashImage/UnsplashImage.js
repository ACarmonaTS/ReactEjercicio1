function UnsplashImage(props){
    console.log(props);
    const src = props.src;
    const alt = props.alt;
    console.log(src);
    console.log(alt);
    return <img src={src} alt={alt}/>
}

export default UnsplashImage