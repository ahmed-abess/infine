import actions from './actions';

const {LIST_STACK, ADD_STACK, DELETE_STACK, UPADATE_STACK, LIST_OPERATOR} = actions;

const initState = {
    stacks: null,
    operators: null
};

const projectReducer = (state = initState, action) => {
    const {type, data} = action;

    switch (type) {
        case LIST_STACK:
            return {
                ...state,
                stacks: data
            }
        case LIST_OPERATOR:
            return {
                ...state,
                operators: data
            }
        default:
            return state
    }
}

export default projectReducer;