import React from "react";

import * as Names from "./components/resources/NameImage.js"
import Card from "./components/Card/Card.js";
import UnsplashImage from "./components/UnsplashImage/UnsplashImage.js";

function App() {
  return (
    <React.Fragment>
      <header><h1>HEADER</h1></header>
      <main>
        <div>
          { Names.blockOneImage.map( (image) => {
            return (
              <Card key={image.alt}>
                <UnsplashImage alt={image.alt.toString()} src={image.scr.toString()} />
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