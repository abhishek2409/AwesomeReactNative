export const validate = (val, rules, connectedVal) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(val);
        break;
      case 'minLength':
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case 'equaltTo':
        isValid = isValid && equaltToValidator(val, connectedVal[rule]);
        break;
      case 'notEmpty':
        isValid = isValid && notEmptyVlidator(val);
        break;
      default:
        isValid = true
    }
  }
  return isValid;
}

const emailValidator = val => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(val.toLowerCase());
}
const minLengthValidator = (val, minLength) => {
  return val.length >= minLength
}
const equaltToValidator = (val, checkVal) => {
  return val === checkVal
}

const notEmptyVlidator = val => {
  return val.trim() !== "";
}
