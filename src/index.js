// Import and create a new instance of the `Converter` class.
const { Converter } = require('./converter');
const converter = new Converter();

// TODO: Capture the user input here.
const myArgs = process.argv.slice(2);
const action = myArgs[0];

switch (action) {
  case 'list':
    console.log(converter.list());
    break;
  case 'add':
    console.log(converter.add(myArgs[1], myArgs[2]));
    break;
  case 'convert':
    const result = converter.convert(myArgs[1], myArgs[2], myArgs[3]);
    if (result === 'Currency not supported') {
      console.log('Whoops, one or both of the currencies are unsupported');
      break;
    }
    console.log(result);
    break;
  case 'help':
    console.log(`Converter CLI:
\tlist: Lists all supported currencies
\tadd: Adds a new currency to the list
\tconvert: Converts one currency to another
\thelp: Displays this help message`);
    break;
  default:
    console.log(`Whoops, the following command is unknown: ${action}`);
    break;
}

// TODO: Validate and handle the user input here.
