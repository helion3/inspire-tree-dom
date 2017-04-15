'use strict';

describe('TreeNode.prototype.collapse', function() {
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
            }, {
                text: 'B',
                id: 2,
                itree: {
                    state: {
                        collapsed: false
                    }
                }
            }]
        });

        new InspireTreeDOM(tree, {
            target: $tree
        });
    });

    it('collapses children via click', function() {
        var node = tree.node(1);
        node.expand();

        var $node = $(node.itree.ref);
        expect($node.hasClass('collapsed')).to.be.false;

        // Inferno doesn't like jquery's .click()
        $node.find('> div .toggle')[0].click();
        expect($node.hasClass('collapsed')).to.be.true;
    });

    after(helpers.clearDOM);
});
