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
  <section class="article-content ng-binding" style="color: #4c4c4c;"><em></em></section>
<section class="featured-articles" style="color: #4c4c4c;">
<p><em style="color: #4c4c4c"></em></p>
  <table>
    <tr>
      <td class="grHighlight" style="padding-left: 6px;">Single Family/Condo</td>
      <td class="grHighlight" style="padding-left: 6px; text-align: center;">N/A</td>
      <td class="grHighlight" style="padding-left: 6px; text-align: center;">15%</td>
      <td class="grHighlight" style="padding-left: 6px; text-align: center;">50%</td>
    </tr>
    </table>


    <p><font size="2&gt;&#xB9;EllieMae.com, &#x201C;Home purchases by millennials increased in January, according to latest Ellie Mae Millennial tracker&#x201D;&lt;/p&gt;
&lt;p&gt;&#xB2;HomeGuides.SFGate.com, &#x201C;Five conventional mortgage requirements to consider when buying a home&#x201D;&lt;/p&gt;
&lt;p&gt;&#x1D9F;MyMortgageInsider.com, &#x201C;Low credit score homebuyers in 2017 could qualify because of this new FHA policy&#x201D;&lt;/p&gt;
&lt;p&gt;&#x2074;MyMortgageinsider.com, &#x201C;FHA reduces 2017 mortgage insurance premiums&#x201D;&lt;/font&gt;&lt;/p&gt;
&lt;p&gt;&lt;font size=" 2"=""><em>Guaranteed Rate, Inc. is a private corporation organized under the laws of the State of Delaware. It has no affiliation with the US Department of Housing and Urban Development, the US Department of Veterans Affairs, the US Department of Agriculture or any other government agency.</em></font></p>
<p><font size="2"><em></em></font></p>

<p><b style="line-height: 1.5em;">FHA&#x2019;s Cash Down Payment</b></p>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>


<ul type="disc"><li>Be careful when clicking links and opening attachments. If possible, hover your mouse over linkable text or a graphic to see the destination URL. Proceed with caution (or not at all) to avoid landing on a dangerous site or inadvertently downloading a virus.</li><li>Most of the correspondence you receive should be addressed to you specifically. If you receive an email with a generic greeting, that&#x2019;s a red flag.</li><li>Be on the lookout for misspellings and bad grammar. These can be an indicator of a fake email and at times it may even be intentional&#x2014;mistakes like this can help fraudsters avoid spam filters.</li></ul><p>If you feel you&#x2019;ve been a victim of a phishing scam or fraud as it pertains to getting a mortgage, give your loan officer a call right away to let them know. You should also report any such instance to the Federal Trade Commission (FTC.gov), which aims to protect America&#x2019;s consumers.</p>


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