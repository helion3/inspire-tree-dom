'use strict';

describe('TreeNode.prototype.select', function() {
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
            }, {
                text: 'B',
                id: 2
            }]
        });

        new InspireTreeDOM(tree, {
            target: $tree
        });
    });

    it('select via click', function() {
        var node = tree.node(1);

        var $node = $(node.itree.ref);
        expect($node.hasClass('selected')).to.be.false;

        // Inferno doesn't like jquery's .click()
        $node.find('> div .title')[0].click();
        expect($node.hasClass('selected')).to.be.true;
    });

    after(helpers.clearDOM);
});
