'use strict';

describe('Tree.removeAll', function() {
    var $tree;
    var tree;
    var data = [{
        text: 'A'
    }];

    beforeEach(function() {
        helpers.clearDOM();
        helpers.createTreeContainer();

        $tree = $('.tree');

        tree = new InspireTree({
            data: data
        });

        new InspireTreeDOM(tree, {
            target: $tree
        });
    });

    it('removes all nodes', function() {
        expect($tree.find('li')).to.have.length(1);

        tree.removeAll();

        expect($tree.find('li')).to.have.length(0);
    });

    after(helpers.clearDOM);
});
