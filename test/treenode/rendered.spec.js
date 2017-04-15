'use strict';

describe('TreeNode.prototype.rendered', function() {
    var $tree;
    var tree;

    before(function() {
        helpers.clearDOM();
        helpers.createTreeContainer();

        $tree = $('.tree');

        tree = new InspireTree({
            pagination: {
                limit: 2
            },
            data: function(node, resolve) {
                var nodes = [];

                for (var i = 0; i < 6; i++) {
                    nodes.push({
                        text: 'Node ' + i,
                        id: i + 1
                    });
                }

                resolve(nodes);
            }
        });

        new InspireTreeDOM(tree, {
            autoLoadMore: false,
            deferredRendering: true,
            target: $tree
        });
    });

    it('returns false when node has not been rendered', function() {
        expect(tree.node(3).rendered()).to.be.false;
    });

    it('returns true when node has rendered', function() {
        expect(tree.node(1).rendered()).to.be.true;
    });

    after(helpers.clearDOM);
});
