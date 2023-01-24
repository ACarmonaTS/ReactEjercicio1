import React from "react";

import * as Names from "./components/resources/NameImage.js";
import Card from "./components/Card/Card.js";
import UnsplashImage from "./components/UnsplashImage/UnsplashImage.js";
import * as interaction from './interaction.js'

setTimeout( () => {
  console.clear(interaction.animations)
}, 100)

function App() {
  return (
    <React.Fragment>
      <header><h1>HEADER</h1></header>
      <main>
        <div>
          { Names.blockOneImage.map( (image) => {
            console.log(image)
            return (
              <Card key={image.alt}>
                <UnsplashImage alt={image.alt} src={image.scr} />
              </Card>
            )
          })}
        </div>
        <div>
          { Names.blockTwoImage.map( (image) => {
            console.log(image)
            return (
              <Card key={image.alt}>
                <UnsplashImage alt={image.alt} src={image.scr} />
              </Card>
            )
          })}
        </div>
        <div>
          { Names.blockOneImage.map( (image) => {
            console.log(image)
            return (
              <Card key={image.alt}>
                <UnsplashImage alt={image.alt} src={image.scr} />
              </Card>
            )
          })}
        </div>
        <div>
          { Names.blockTwoImage.map( (image) => {
            console.log(image)
            return (
              <Card key={image.alt}>
                <UnsplashImage alt={image.alt} src={image.scr} />
              </Card>
            )
          })}
        </div>
        <div>
          { Names.blockOneImage.map( (image) => {
            console.log(image)
            return (
              <Card key={image.alt}>
                <UnsplashImage alt={image.alt} src={image.scr} />
              </Card>
            )
          })}
        </div>
        <div>
          { Names.blockTwoImage.map( (image) => {
            console.log(image)
            return (
              <Card key={image.alt}>
                <UnsplashImage alt={image.alt} src={image.scr} />
              </Card>
            )
          })}
        </div>
        <div>
          { Names.blockOneImage.map( (image) => {
            console.log(image)
            return (
              <Card key={image.alt}>
                <UnsplashImage alt={image.alt} src={image.scr} />
              </Card>
            )
          })}
        </div>
        <div>
          { Names.blockTwoImage.map( (image) => {
            console.log(image)
            return (
              <Card key={image.alt}>
                <UnsplashImage alt={image.alt} src={image.scr} />
              </Card>
            )
          })}
        </div>
      </main>
      <footer><h2>FOOTER</h2></footer>
    </React.Fragment>
  );
}

export default App;