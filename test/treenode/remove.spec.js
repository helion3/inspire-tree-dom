'use strict';

describe('TreeNode.prototype.remove', function() {
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

    it('removes a node', function() {
        expect($tree.find('li')).to.have.length(1);

        tree.node(1).remove();
        expect($tree.find('li')).to.have.length(0);
    });

    after(helpers.clearDOM);
});
