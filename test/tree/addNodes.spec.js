'use strict';

describe('Tree.addNodes', function() {
    var $tree;
    var tree;

    before(function() {
        helpers.createTreeContainer();

        // Query DOM
        $tree = $('.tree');

        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1,
                children: []
            }]
        });

        new InspireTreeDOM(tree, {
            target: $tree
        });
    });

    it('adds new nodes', function() {
        expect($tree.find('li')).to.have.length(1);

        tree.addNodes([{
            text: 'B'
        }]);

        expect($tree.find('li')).to.have.length(2);
    });

    after(helpers.clearDOM);
});
