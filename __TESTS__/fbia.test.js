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

      <div id="socialButtons">
         <a id="facebookLink" app_id="2223332" data-track="articleMod-facebookButton" data-social-type="facebook" class="btn btn-default btn-raised no-decoration" href="http://www.facebook.com/share.php?u={{appUrl}}{{getConfig "ARTICLE_BASE_PATH"}}/{{urlKey}}&title={{title}}" target="_blank"><i class="fa fa-facebook"></i></a>
         <a id="twitterLink" data-track="articleMod-twitterButton"  data-social-type="twitter" class="btn btn-default btn-raised no-decoration" href="http://twitter.com/intent/tweet?status={{title}}+{{appUrl}}{{getConfig "ARTICLE_BASE_PATH"}}/{{urlKey}}" target="_blank"><i class="fa fa-twitter"></i></a>
         <a id="linkedinLink" data-track="articleMod-linkedinButton" data-social-type="linkedin" class="btn btn-default btn-raised no-decoration" href="http://www.linkedin.com/shareArticle?mini=true&url={{appUrl}}{{getConfig "ARTICLE_BASE_PATH"}}/{{urlKey}}&title={{title}}&source=rate.com" target="_blank"><i class="fa fa-linkedin"></i></a>
    </div>

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