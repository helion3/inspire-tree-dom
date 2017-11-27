'use strict';

describe('Custom Class Names', function() {
    beforeEach(function() {
        helpers.createTreeContainer();
    });

    afterEach(helpers.clearDOM);

    it('appends custom string class names', function() {
        var tree = new InspireTree({
            data: [{
                text: 'A',
                itree: {
                    li: {
                        attributes: {
                            class: 'testA.testB'
                        }
                    }
                }
            }]
        });

        var $tree = $('.tree');

        new InspireTreeDOM(tree, {
            target: $tree
        });

        expect($tree.find('li').hasClass('testA')).to.be.true;
    });

    it('appends custom string class names', function() {
        var tree = new InspireTree({
            data: [{
                text: 'A',
                itree: {
                    li: {
                        attributes: {
                            class: 'testA testB'
                        }
                    }
                }
            }]
        });

        var $tree = $('.tree');

        new InspireTreeDOM(tree, {
            target: $tree
        });

        expect($tree.find('li').hasClass('testB')).to.be.true;
    });

    it('appends custom array of class names', function() {
        var tree = new InspireTree({
            data: [{
                text: 'A',
                itree: {
                    li: {
                        attributes: {
                            className: ['testA', 'testB']
                        }
                    }
                }
            }]
        });

        var $tree = $('.tree');

        new InspireTreeDOM(tree, {
            target: $tree
        });

        expect($tree.find('li').hasClass('testB')).to.be.true;
    });

    it('appends custom array of class names via function', function() {
        var tree = new InspireTree({
            data: [{
                text: 'A',
                itree: {
                    li: {
                        attributes: {
                            className: function() {
                                return ['testB'];
                            }
                        }
                    }
                }
            }]
        });

        var $tree = $('.tree');

        new InspireTreeDOM(tree, {
            target: $tree
        });

        expect($tree.find('li').hasClass('testB')).to.be.true;
    });

    it('appends custom string class names to anchor', function() {
        var tree = new InspireTree({
            data: [{
                text: 'A',
                itree: {
                    a: {
                        attributes: {
                            class: 'testA.testB'
                        }
                    }
                }
            }]
        });

        var $tree = $('.tree');

        new InspireTreeDOM(tree, {
            target: $tree
        });

        expect($tree.find('a').hasClass('testA')).to.be.true;
    });
});
