'use strict';

describe('TreeNode.prototype.uncheck', function() {
    var $tree;
    var tree;

    before(function() {
        helpers.createTreeContainer();

        $tree = $('.tree');

        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1
            }, {
                text: 'B',
                id: 2
            }]
        });

        new InspireTreeDOM(tree, {
            showCheckboxes: true,
            target: $tree
        });
    });

    it('unchecks the node', function() {
        var node = tree.node(1);
        var checkbox = $(node.itree.ref).find('input')[0];

        node.check();
        expect(checkbox.checked).to.be.true;

        node.uncheck();
        expect(checkbox.checked).to.be.false;
    });

    after(helpers.clearDOM);
});
