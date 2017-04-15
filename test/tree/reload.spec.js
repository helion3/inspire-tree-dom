'use strict';

describe('Tree.reload', function() {
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

    it('reloads data', function() {
        data.push({
            text: 'B'
        });

        tree.reload();

        expect($tree.find('li')).to.have.length(2);
    });

    after(helpers.clearDOM);
});
