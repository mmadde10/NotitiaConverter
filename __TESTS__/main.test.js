import NotitiaConverter from '../src/main';
import * as Jest from 'jest';

let contents = `<!doctype html>
<html lang="en">
  <head>

    <title>News Article</title>

    <style>
        p{
          font-family: helvetica;
        }
        img{
          width: 10;
          height: 10;
        }
        h5{
          font-family: helvetica;
        }
        h3{
          font-family: helvetica;
        }
    </style>

    <link href="base.css" rel="stylesheet" />


    <script type="text/javascript" src="base.js"></script>
  </head>
  <body>
  <table>
    <tr>
      <td class="grHighlight" style="padding-left: 6px;">Single Family/Condo</td>
      <td class="grHighlight" style="padding-left: 6px; text-align: center;">N/A</td>
      <td class="grHighlight" style="padding-left: 6px; text-align: center;">15%</td>
      <td class="grHighlight" style="padding-left: 6px; text-align: center;">50%</td>
    </tr>
    </table>
  </body>
</html>`;


describe('Testing AMP Pages in main', () => {
   
    test('Main Project AMP Page test body', () => {
        let Not = new NotitiaConverter(contents);
        let ampPage = Not.createAMPBody(contents);
        console.log("finish Body\n",ampPage);
        expect(ampPage).not.toBeNull();
    });
    test('Main Project AMP', () => {
        let Not = new NotitiaConverter(contents);
        let ampPage = Not.createAMPDocument(contents);
        //console.log("finish HTML\n",ampPage);
        expect(ampPage).not.toBeNull();
    });
});