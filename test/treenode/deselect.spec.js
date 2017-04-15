'use strict';

describe('TreeNode.prototype.deselect', function() {
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

    it('deselects via click', function() {
        var node = tree.node(1);
        node.select();

        var $node = $(node.itree.ref);
        expect($node.hasClass('selected')).to.be.true;

        // Inferno doesn't like jquery's .click()
        $node.find('> div .title')[0].click();
        expect($node.hasClass('selected')).to.be.false;
    });

    after(helpers.clearDOM);
});
