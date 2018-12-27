const expect = require('expect');
const utils  = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
});

it('should square a number', () => {
    let res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
    // if (res !== 9) {
    //     throw new Error(`Expected 9, but got ${res}.`);
    // }
});

it('should set firstName and lastName', () => {
    let user = { age: 60, location: 'Washington' }
    let res = utils.setName(user, 'Ronald Reagan');

    expect(res).toInclude({
        firstName: 'Ronald',
        lastName: 'Reagan'
    });
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({ name: 'andrew' }).toNotEqual({ name: 'Andrew' });
//     // expect([2,3,4]).toInclude(2);
//     // expect([2,3,4]).toExclude(5);
//     // expect({
//     //     name: 'Ronald',
//     //     age: 60,
//     //     location: 'Washington'
//     // }).toExclude({
//     //     age: 20
//     // });
// });
