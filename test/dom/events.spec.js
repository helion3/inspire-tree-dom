'use strict';

describe('DOM-related events', function() {
    var $tree;
    var tree;

    before(function() {
        helpers.createTreeContainer();

        $tree = $('.tree');

        tree = new InspireTree({
            data: [{
                text: 'A'
            }]
        });

        new InspireTreeDOM(tree, {
            target: $tree
        });
    });

    it('provides a preventTreeDefault method', function(done) {
        tree.on('node.click', function(event) {
            expect(event.preventTreeDefault).to.be.a('function');
            done();
        });

        // Inferno doesn't like jquery's click
        $tree.find('a.title')[0].click();
    });

    it('passes handler as an argument', function(done) {
        tree.on('node.click', function(event, node, handler) {
            expect(handler).to.be.a('function');
            done();
        });

        // Inferno doesn't like jquery's click
        $tree.find('a.title')[0].click();
    });

    after(helpers.clearDOM);
});
