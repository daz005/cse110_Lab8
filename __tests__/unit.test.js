// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('functions isPhoneNumber', () => {
    expect(functions.isPhoneNumber("(669)342-8379")).toBe(true);
    expect(functions.isPhoneNumber('(408)-981-3903')).toBe(true);
    expect(functions.isPhoneNumber("daz005@ucsd.edu")).toBe(false);
    expect(functions.isPhoneNumber("06/06/2001")).toBe(false); 
});

test('functions isEmail', () => {
    expect(functions.isEmail("(669)342-8379")).toBe(false);
    expect(functions.isEmail('(408)-981-3903')).toBe(false);
    expect(functions.isEmail("daz005@ucsd.edu")).toBe(true);
    expect(functions.isEmail("derekzhu@zoom.us")).toBe(true); 
});

test('functions isStrongPassword', () => {
    expect(functions.isStrongPassword("123")).toBe(false);
    expect(functions.isStrongPassword('abc')).toBe(false);
    expect(functions.isStrongPassword("daZ005")).toBe(true);
    expect(functions.isStrongPassword("dereK123")).toBe(true); 
});

test('functions isDate', () => {
    expect(functions.isDate("123")).toBe(false);
    expect(functions.isDate('abc')).toBe(false);
    expect(functions.isDate("06/06/2001")).toBe(true);
    expect(functions.isDate("03/23/1962")).toBe(true); 
 });


test('functions isHexColor', () => {
    expect(functions.isHexColor("#ff0000")).toBe(true);
    expect(functions.isHexColor('#00FF00')).toBe(true);
    expect(functions.isHexColor("06/06/2001")).toBe(false);
    expect(functions.isHexColor("daz005@ucsd.edu")).toBe(false); 
});
