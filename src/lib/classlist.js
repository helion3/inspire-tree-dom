import * as _ from 'lodash';

/**
 * Utility method for parsing and merging custom class names.
 *
 * @private
 * @param {TreeNode} node Node object.
 * @param {string} type 'li' or 'a' attribute object type.
 * @return {Array} Processed class names
 */
export default (node, type = 'li') => {
    const nodeAttrs = node.itree[type].attributes;
    let classNames = [];

    // Append any custom class names
    let customClasses = nodeAttrs.class || nodeAttrs.className;

    // Support callbacks
    if (_.isFunction(customClasses)) {
        customClasses = customClasses(node);
    }

    // Convert custom classes into an array and concat
    if (!_.isEmpty(customClasses)) {
        if (_.isString(customClasses)) {
            // Support periods for backwards compat with hyperscript-formatted classes
            classNames = classNames.concat(customClasses.split(/[\s\.]+/));
        }
        else if (_.isArray(customClasses)) {
            classNames = classNames.concat(customClasses);
        }
    }

    return classNames;
};
