import FaceBookInstantArticle from '../src/fb/fbConverter';
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
</html>`;

describe('Testing Facebppl converter', () => {
   
    test('Main Project AMP Page test body', () => {
        let fbia = new FaceBookInstantArticle(contents);
        let $ = fbia.getHTML(contents);
        //let lang = fbia.getLanguage($);
        //console.log("finish\n",lang);
        expect($).not.toBeNull();
    });
});