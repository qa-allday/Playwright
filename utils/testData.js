function generateRandomString(length = 8) {
    return Math.random().toString(36).slice(2, 2 + length);
  }
  
function generateNewUserData() {
  const rand = generateRandomString();
  return {
    title: 'Mr.',
    name: rand,
    email: `${rand}@pwqavl.com`,
    password: generateRandomString(10),
    dob: '1990-05-07',
    newsletter: 'yes',
    offers: 'yes',
    firstName: 'John',
    lastName: 'Doe',
    company: 'QA All Day',
    address1: '123 Main St',
    address2: '456 Some St',
    country: 'Canada',
    city: 'Toronto',
    state: 'Ontario',
    zipcode: 'M5H2N2',
    mobile: '1234567890',
   };
  }
function  generateNewUserAPIData() {
  const rand = generateRandomString();
  return {
    name: `${rand} QA`,
    email: `${rand}@pwqavl.com`,
    password: 'SecureP@ss123',
    title: 'Mr',
    birth_date: '18',
    birth_month: '1',
    birth_year: '1989',
    firstname: 'LV',
    lastname: 'QA',
    company: 'Test Co',
    address1: 'QA Street 11',
    address2: '',
    country: 'United States',
    zipcode: 'M5H2N2',
    state: 'UT',
    city: 'QACity',
    mobile_number: '1234567890'
   };
  }
  
  module.exports = {
    generateNewUserData,
    generateNewUserAPIData,
  };