'use strict';

describe('Custom Anchor Attributes', function() {
    beforeEach(function() {
        helpers.createTreeContainer();
    });

    afterEach(helpers.clearDOM);

    it('uses a custom href', function() {
        var tree = new InspireTree({
            data: [{
                text: 'A',
                itree: {
                    a: {
                        attributes: {
                            href: 'http://inspire-tree.com'
                        }
                    }
                }
            }]
        });

        var $tree = $('.tree');

        new InspireTreeDOM(tree, {
            target: $tree
        });

        expect($tree.find('a').attr('href')).to.equal('http://inspire-tree.com');
    });
});
