'use strict';

describe('TreeNode.prototype.expand', function() {
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

    it('expands children via click', function() {
        var node = tree.node(1);
        node.collapse();

        var $node = $(node.itree.ref);
        expect($node.hasClass('collapsed')).to.be.true;

        // Inferno doesn't like jquery's .click()
        $node.find('> div .toggle')[0].click();
        expect($node.hasClass('collapsed')).to.be.false;
    });

    after(helpers.clearDOM);
});
