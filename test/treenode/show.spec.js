'use strict';

describe('TreeNode.prototype.show', function() {
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

    it('shows node', function() {
        var node = tree.node(1);
        node.hide();

        var $node = $(node.itree.ref);
        expect($node.hasClass('hidden')).to.be.true;

        node.show();
        expect($node.hasClass('hidden')).to.be.false;
    });

    after(helpers.clearDOM);
});
