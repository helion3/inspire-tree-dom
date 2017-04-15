'use strict';

describe('TreeNode.prototype.restore', function() {
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

    it('soft removes node', function() {
        var node = tree.node(1);
        var $node = $(node.itree.ref);

        node.softRemove();
        expect($node.hasClass('hidden')).to.be.true;

        node.restore();
        expect($node.hasClass('hidden')).to.be.false;
    });

    after(helpers.clearDOM);
});
