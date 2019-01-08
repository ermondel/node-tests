const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Terry', 44);
        expect(spy).toHaveBeenCalledWith('Terry', 44);
    });

    it('Should call saveUser with user object', () => {
        var email = 'example@example.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });

});
