const readLineSync = require('readline-sync');

console.log('Hi, Welcome to Unit Convertor\n');

const valueToConvert = readLineSync.question('Enter the value to convert\n');

const typeOfConversion = readLineSync.question('We have following Convertors:\n1. Meter to Kilometer \n2. Kilometer to Meter\n3. Meter to Centimeter\n4. Centimeter to Meter\n\nEnter your choice ');

function meterToKilometer(inputVale){
  return inputValue / 1000;
}

function kilometerToMeter(inputValue){
  return inputValue * 1000;
}

function meterToCentimeter(inputValue){
  return inputValue * 100;
}

function centimeterToMeter(inputValue){
  return inputValue / 100;
}

switch(typeOfConversion){
  case '1':
    console.log(`output: ${meterToKilometer(valueToConvert)}`);
    break;
  case '2':
    console.log(`output: ${kilometerToMeter(valueToConvert)}`);
    break;
  case '3':
    console.log(`output: ${meterToCentimeter(valueToConvert)}`);
    break;
  case '4':
    console.log(`output: ${centimeterToMeter(valueToConvert)}`);
    break;
  default:
    console.log(`Invalid Option`);
}