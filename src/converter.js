class Converter {
  // 'Pre-load' a selection of currencies.
  // Remember, each currency's value is relative to USD.
  data = {
    USD: 1,
    CAD: 0.78,
    GBP: 1.36,
  };

  list() {
    // TODO: Return an array containing the list of supported currencies.
    return Object.keys(this.data);
  }

  add(currency, value) {
    // TODO: Add the currency and value supplied; return a success message.
    // TODO: Return an error message if the currency has already been added.
    try {
      if (this.data.hasOwnProperty(currency)) {
        throw new Error('Currency already added');
      }
      this.data[currency] = value;
      return `${currency} added successfully`;
    } catch (error) {
      return error.message;
    }
  }

  convert(base, target, amount) {
    // TODO: Convert the amount using the base and target currencies; return a success message.
    // TODO: Return an error message if either currency is not supported.
    try {
      if (
        !this.data.hasOwnProperty(base) ||
        !this.data.hasOwnProperty(target)
      ) {
        throw new Error('Currency not supported');
      }
      return `${amount} ${base} = ${(amount * this.data[target]).toFixed(
        2
      )} ${target}`;
    } catch (error) {
      return error.message;
    }
  }
}

// Export the `Converter` so that it can be used within the command line interface and test files.
module.exports = { Converter };
