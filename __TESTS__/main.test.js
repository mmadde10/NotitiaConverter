import {NotitiaConverter} from '../src/main';
import * as Jest from 'jest';

let contents = `<!doctype html>
<html lang="en">
  <head>

    <title>News Article</title>

    <link href="base.css" rel="stylesheet" />

    <script type="text/javascript" src="base.js"></script>
  </head>
  <body>
    <header>
      News Site
    </header>
    <article>
      <h1>Article Name</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas tortor sapien, non tristique ligula accumsan eu.</p>
    </article>
    <img src="mountains.jpg">
  </body>
</html>`


describe('Testing AMP Pages in main', () => {
   
    test('Main Project AMP Page test body', () => {
        let Not = new NotitiaConverter(contents);
        let ampPage = Not.createAMPBody(contents);
        //console.log("finish\n",ampPage);
        expect(ampPage).not.toBeNull();
    });
    test('Main Project AMP', () => {
        let Not = new NotitiaConverter(contents);
        let ampPage = Not.createAMPDocument(contents);
        console.log("finish\n",ampPage);
        expect(ampPage).not.toBeNull();
    });

});