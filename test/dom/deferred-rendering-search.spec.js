'use strict';

describe('Deferred Rendering and Search', function() {
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
        var $titles = $tree.find('.title');

        // Two visible nodes + "Load More"
        expect($titles).to.have.length(3);

        expect($titles.eq(0).text()).to.equal('Jaga');
        expect($titles.eq(1).text()).to.equal('Lion-O');
    });

    it('paginates only nodes matching a search', function() {
        tree.search('o');

        var $titles = $tree.find('.title');

        // Two visible nodes + "Load More"
        expect($titles).to.have.length(3);

        expect($titles.eq(0).text()).to.equal('Lion-O');
        expect($titles.eq(1).text()).to.equal('Panthro');
    });

    after(helpers.clearDOM);
});
