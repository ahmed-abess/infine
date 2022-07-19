const actions = {
    LIST_STACK: 'LIST_STACK',
    ADD_STACK: 'ADD_STACK',
    DELETE_STACK: 'DELETE_STACK',
    UPADATE_STACK: 'UPADATE_STACK',
    LIST_OPERATOR: 'LIST_OPERATOR',

    getlistStack: (data) => {
        return {
            type: actions.LIST_STACK,
            data,
        };
    },

    addStack: data => {
        return {
            type: actions.ADD_STACK,
            data,
        };
    },
    removeStack: data => {
        return {
            type: actions.DELETE_STACK,
            data,
        };
    },
    updateStack: data => {
        return {
            type: actions.UPADATE_STACK,
            data,
        };
    },
    getlistOperator: (data) => {
        return {
            type: actions.LIST_OPERATOR,
            data,
        };
    },

};

export default actions;
