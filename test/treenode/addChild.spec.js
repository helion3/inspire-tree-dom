'use strict';

describe('TreeNode.prototype.addChild', function() {
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
                id: 1
            }]
        });

        new InspireTreeDOM(tree, {
            target: $tree
        });
    });

    it('adds a new child', function() {
        var node = tree.node(1);
        var $node = $(node.itree.ref);

        // Make sure nothing exists yet
        expect($node.find('li')).to.have.length(0);

        node.addChild({
            text: 'C'
        });

        expect($node.find('li')).to.have.length(1);
    });

    after(helpers.clearDOM);
});
