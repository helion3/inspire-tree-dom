'use strict';

describe('TreeNode.prototype.focus', function() {
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

    it('focus via browser focus', function() {
        var node = tree.node(1);

        var $node = $(node.itree.ref);
        expect($node.hasClass('focused')).to.be.false;

        // Inferno doesn't like jquery's .focus()
        $node.find('> div .title')[0].focus();
        expect($node.hasClass('focused')).to.be.true;
    });

    it('blurs other nodes on node change', function() {
        tree.node(2).focus();

        expect($(tree.node(1).itree.ref).hasClass('focused')).to.be.false;
    });

    after(helpers.clearDOM);
});
