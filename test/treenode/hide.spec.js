'use strict';

describe('TreeNode.prototype.hide', function() {
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
                children: [{
                    text: 'AA'
                }]
            }]
        });

        new InspireTreeDOM(tree, {
            target: $tree
        });
    });

    it('hides node', function() {
        var node = tree.node(1);

        var $node = $(node.itree.ref);
        expect($node.hasClass('hidden')).to.be.false;

        node.hide();
        expect($node.hasClass('hidden')).to.be.true;
    });

    after(helpers.clearDOM);
});
