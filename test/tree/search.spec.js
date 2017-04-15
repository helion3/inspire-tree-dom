'use strict';

describe('Tree.search', function() {
    var $tree;
    var tree;

    before(function() {
        helpers.createTreeContainer();

        $tree = $('.tree');

        tree = new InspireTree({
            data: [{
                text: 'fox',
                id: 1
            }, {
                text: 'lemur',
                id: 2,
                children: [{
                    text: 'bob',
                    id: 3
                }, {
                    text: 'sue'
                }]
            }]
        });

        new InspireTreeDOM(tree, {
            target: $tree
        });
    });

    it('highlights matches for a string query', function(done) {
        tree.search('fox').then(function() {
            expect($tree.find('.matched')).to.have.length(1);

            done();
        });
    });

    it('highlights matches for a regex query', function(done) {
        tree.search(new RegExp('fox', 'i')).then(function() {
            expect($tree.find('.matched')).to.have.length(1);

            done();
        });
    });

    it('highlights matches for a custom matching function', function(done) {
        var matcher = function(node) {
            return node.text.length < 4;
        };

        tree.search(matcher).then(function() {
            expect($tree.find('.matched')).to.have.length(3);

            done();
        });
    });

    it('hides non-matches', function() {
        tree.search('fox');

        expect($(tree.node(1).itree.ref).hasClass('hidden')).to.be.false;
        expect($(tree.node(2).itree.ref).hasClass('hidden')).to.be.true;
    });

    it('clears the search', function() {
        tree.clearSearch();

        expect($tree.find('.matched')).to.have.length(0);
        expect($(tree.node(2).itree.ref).hasClass('hidden')).to.be.false;
    });

    after(helpers.clearDOM);
});
