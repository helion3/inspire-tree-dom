'use strict';

describe('DOM Configurations', function() {
    beforeEach(function() {
        helpers.clearDOM();
        helpers.createTreeContainer();
    });

    it('accepts custom icon classes', function() {
        var tree = new InspireTree({
            data: [{
                text: 'Test',
                itree: {
                    icon: 'fake'
                }
            }]
        });

        var $tree = $('.tree');

        new InspireTreeDOM(tree, {
            target: $tree
        });

        expect($tree.find('.title').hasClass('fake')).to.be.true;
    });

    it('accepts custom attributes for the LI', function() {
        var tree = new InspireTree({
            data: [{
                text: 'Test',
                itree: {
                    li: {
                        attributes: {
                            'data-test': 'works'
                        }
                    }
                }
            }]
        });

        var $tree = $('.tree');

        new InspireTreeDOM(tree, {
            target: $tree
        });

        expect($tree.find('li').attr('data-test')).to.equal('works');
    });

    after(helpers.clearDOM);
});
