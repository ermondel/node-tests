const expect = require('expect');

describe('App', () => {
    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Terry', 44);
        expect(spy).toHaveBeenCalledWith('Terry', 44);
    })
});
