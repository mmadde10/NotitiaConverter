var notitiaConverter = require('../dist/main');
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

      <p><span style = "ont-size: small;">Lorem ipsum Lorem ipsum Lorem ipsum </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas tortor sapien, non tristique ligula accumsan eu.</p>
    </article>
    <img src="mountains.jpg">
  </body>
</html>`;


describe('Testing AMP Pages in main', () => {
   
    test('Main Project AMP Page test body', () => {
        var Not = new notitiaConverter(contents);
        var ampPage = Not.createAMPBody(contents);
        console.log("ES6.main.test\n",ampPage);
        expect(ampPage).not.toBeNull();
    });
});