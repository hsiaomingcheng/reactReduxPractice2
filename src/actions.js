/*
 * action type
 */

export const ADD_TEST = 'ADD_TEST';

/*
 * action creator
 */

export function addTest(text) {
    return { type: ADD_TEST, text };
}
