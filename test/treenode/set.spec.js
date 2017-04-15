'use strict';

describe('TreeNode.prototype.set', function() {
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

    it('updates node text', function() {
        var node = tree.node(1);
        var $title = $(node.itree.ref).find('.title');

        expect($title.text()).to.equal('A');

        node.set('text', 'New');
        expect($title.text()).to.equal('New');
    });

    after(helpers.clearDOM);
});
