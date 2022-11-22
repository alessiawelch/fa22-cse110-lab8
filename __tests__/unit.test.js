// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');


/**
 * IS PHONE NUMBER TESTS
 */
test('123-456-7890 is recognized as valid phone number ', () => {
    // TODO
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('000-000-0000 is recognized as valid phone number ', () => {
    // TODO
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});

test('123-456-789-10 is not a valid phone number ', () => {
    // TODO
    expect(functions.isPhoneNumber('123-456-789-10')).toBe(false);
});

test('0000000000 is not recognized as valid phone number ', () => {
    // TODO
    expect(functions.isPhoneNumber('0000000000')).toBe(false);
});


/**
 * IS EMAIL TESTS
 */
 test('aawelch@ucsd.edu is recognized as valid email ', () => {
    // TODO
    expect(functions.isEmail('aawelch@ucsd.edu')).toBe(true);
});

test('alessiaw@gmail.com is recognized as valid email  ', () => {
    // TODO
    expect(functions.isEmail('alessiaw@gmail.com')).toBe(true);
});

test('aawelch@ucsd is not recognized as valid email ', () => {
    // TODO
    expect(functions.isEmail('aawelch@ucsd')).toBe(false);
});

test('aawelch is not a valid email ', () => {
    // TODO
    expect(functions.isEmail('aawelch')).toBe(false);
});


/**
 * IS STRONG PASSWORD TEST
 */
 test('GoodPassword1_ is recognized as valid strong password ', () => {
    // TODO
    expect(functions.isStrongPassword('GoodPassword1_')).toBe(true);
});

test('goodPassword12_ is recognized as valid strong password ', () => {
    // TODO
    expect(functions.isStrongPassword('goodPassword12_')).toBe(true);
});

test('GoodPasswordNOTLOL1_ is not recognized as valid strong password ', () => {
    // TODO
    expect(functions.isStrongPassword('GoodPasswordNOTLOL1_')).toBe(false);
});

test('GoodPassword1_! is not recognized a valid strong password ', () => {
    // TODO
    expect(functions.isStrongPassword('GoodPassword1_!')).toBe(false);
});


/**
 * IS DATE TEST
 */
 test('04/10/2003 is recognized as valid date ', () => {
    // TODO
    expect(functions.isDate('04/10/2003')).toBe(true);
});

test('4/10/2003 is recognized as valid date ', () => {
    // TODO
    expect(functions.isDate('4/10/2003')).toBe(true);
});

test('04/10/03 is not recognized as valid date ', () => {
    // TODO
    expect(functions.isDate('04/10/03')).toBe(false);
});

test('4102003 is not recognized a valid date ', () => {
    // TODO
    expect(functions.isDate('4102003')).toBe(false);
});


/**
 * IS HEX COLOR TEST
 */
 test('#8080FF is recognized as valid color ', () => {
    // TODO
    expect(functions.isHexColor('#8080FF')).toBe(true);
});

test('#3FF is recognized as valid color ', () => {
    // TODO
    expect(functions.isHexColor('#3FF')).toBe(true);
});

test('#FF is not recognized as valid color ', () => {
    // TODO
    expect(functions.isHexColor('#FF')).toBe(false);
});

test('blue is not recognized a valid color ', () => {
    // TODO
    expect(functions.isHexColor('blue')).toBe(false);
});

