'use strict';

import * as _ from 'lodash';

/**
 * Compares all keys on the given state. Returns true if any difference exists.
 *
 * @private
 * @category DOM
 * @param {object} previousState Previous state.
 * @param {object} currentState  Current state.
 * @return {boolean} Difference was found.
 */
export default function stateComparator(previousState, currentState) {
    // Always treat dirty flag as a state difference
    let isDirty = currentState.dirty || false;

    if (!isDirty) {
        _.each(Object.keys(currentState), (key) => {
            if (key !== 'dirty' && currentState[key] !== previousState[key]) {
                isDirty = true;
                return false;
            }
        });
    }

    return isDirty;
};
