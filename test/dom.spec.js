'use strict';

describe('Inspire Tree DOM', function() {
    before(function() {
        helpers.createTreeContainer();
    });

    it('exists in root', function() {
        expect(InspireTreeDOM).to.be.a('function');
    });

    it('throws error when no tree instance given', function() {
        expect(InspireTreeDOM).to.throw(TypeError);
    });

    it('throws error when no target config given', function() {
        var tree = new InspireTree({
            data: []
        });

        var wrapped = function() {
            new InspireTreeDOM(tree);
        };

        expect(wrapped).to.throw(TypeError);
    });

    it('returns API', function() {
        var tree = new InspireTree({
            data: []
        });

        var dom = new InspireTreeDOM(tree, {
            target: '.tree'
        });

        expect(dom).to.be.an('object');
    });

    after(helpers.clearDOM);
});
