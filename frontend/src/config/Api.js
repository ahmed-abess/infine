const API_HOST = "http://localhost:4000";

const API = {
    stack: {
        list: '/rpn/stacks',
        add:'/rpn/stack',
        delete:'/rpn/stack',
        update:'/rpn/stack'
    },
    operator: {
        list: '/rpn/op'
    }
}

export {API_HOST, API}