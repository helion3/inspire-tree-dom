'use strict';

describe('TreeNode.prototype.indeterminate', function() {
    var $tree;
    var tree;

    before(function() {
        helpers.createTreeContainer();

        $tree = $('.tree');

        // Create tree
        tree = new InspireTree({
            selection: {
                mode: 'checkbox'
            },
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'B',
                    id: 2
                }, {
                    text: 'C',
                    id: 3
                }]
            }]
        });

        new InspireTreeDOM(tree, {
            showCheckboxes: true,
            target: $tree
        });
    });

    it('sets a checkbox to indeterminate state', function() {
        tree.node(3).select();

        var checkbox = $(tree.node(1).itree.ref).find('input')[0];
        expect(checkbox.indeterminate).to.be.true;
    });

    after(helpers.clearDOM);
});
