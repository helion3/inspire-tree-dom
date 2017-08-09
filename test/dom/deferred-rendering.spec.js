'use strict';

describe('Deferred Rendering', function() {
    var $tree;

    before(function() {
        helpers.clearDOM();
        helpers.createTreeContainer();

        $tree = $('.tree');

        var tree = new InspireTree({
            pagination: {
                limit: 2
            },
            data: function(node, resolve) {
                resolve([{
                    text: 'Jaga'
                }, {
                    text: 'Lion-O'
                }, {
                    text: 'Tygra'
                }, {
                    text: 'Panthro'
                }, {
                    text: 'Cheetara'
                }, {
                    text: 'Mumm-Ra'
                }]);
            }
        });

        new InspireTreeDOM(tree, {
            autoLoadMore: false,
            deferredRendering: true,
            target: $tree
        });
    });

    it('renders a limited subset', function() {
        // Two visible nodes + "Load More"
        expect($tree.find('.title')).to.have.length(3);
    });

    it('renders larger subset on load more click', function(done) {
        // Inferno doesn't like jquery's click
        $tree.find('.load-more')[0].click();

        // Four visible nodes + "Load More"
        setTimeout(function() {
            expect($tree.find('.title')).to.have.length(5);
            done();
        });
    });

    it('renders full set on load more click', function() {
        // Inferno doesn't like jquery's click
        $tree.find('.load-more')[0].click();

        expect($tree.find('.title')).to.have.length(6);
    });

    after(helpers.clearDOM);
});
