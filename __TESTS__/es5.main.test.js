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
      <p><em style="color: #4c4c4c"></em></p>
      <p><span style = "ont-size: small;">Lorem ipsum Lorem ipsum Lorem ipsum </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas tortor sapien, non tristique ligula accumsan eu.</p>
      <tr>
      <td class="grHighlight" style="padding-left: 6px;">Single Family/Condo</td>
      <td class="grHighlight" style="padding-left: 6px; text-align: center;">N/A</td>
      <td class="grHighlight" style="padding-left: 6px; text-align: center;">15%</td>
      <td class="grHighlight" style="padding-left: 6px; text-align: center;">50%</td>
      </tr>
      </article>
    <img src="mountains.jpg">
  </body>
</html>`;


describe('Testing AMP Pages in main', () => {
   
    test('Main Project AMP Page test body', () => {
        var Not = new notitiaConverter(contents);
        var ampPage = Not.createAMPBody(contents);
        //console.log("ES5.main.test\n",ampPage);
        expect(ampPage).not.toBeNull();
    });
});