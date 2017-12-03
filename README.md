# NotitiaConverter

## Description

Quick Converter of Regular HTML Article Pages into Google AMP Pages

## Information

Notitia (Latin for Knowledge) is a node module. Notitia converts basic HTML based articles into either AMP (Accelerated Mobile Pages) markup or into Facebook Instant Article Markup. Notitia automates the process of converting plain html code into these two article formats, eliminating the need to create multiple copies of the same article. 

* [AMP's Documentation](https://www.ampproject.org/)
* [Facebook Instant Articles Documentation](https://developers.facebook.com/docs/instant-articles/)

## Set up

```bash
npm install notitia converter
```

### Methods

#### Build AMP Page HTML

```javascript
let Not = new Notitia(contents);
let ampPage = Not.createAMPDocument(contents);
//Returns AMP Complient HTML
```

#### Build AMP Page HTML (Body Only)

```javascript
let Not = new Notitia(contents);
let ampPageBody = Not.createAMPBody(contents);
//Returns AMP Complient HTML (Body Only)
```

__Note:__
CreateAMPBody Method will only return the body of the AMP HTML Page. 
This will not pass the AMP Validator. 
For More info visit [AMP's Documentation](https://www.ampproject.org/docs/getting-started/)

## Testing

Jest is used to run tests on Notitia

```bash
npm run test
```

## License

MIT