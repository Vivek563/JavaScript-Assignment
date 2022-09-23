// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

import { country } from "./24Question/countries.mjs";

// console.log(countryList);

if(country.find(e => e=='Ethiopia')){
    console.log('ETHIOPIA');
}
else{
    country.push('Ethiopia');
    console.log('Ethiopia added');
}

