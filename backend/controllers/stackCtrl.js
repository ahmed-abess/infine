const stack = require('../models/stack')


getStacks = async (req, res) => {
    try {
        const stacks = await stack.find()
        res.send(stacks)
    } catch (e) {
        res.status(409).send(e.message)
    }
}
setStack = async (req, res) => {
    try {
        const value = req.body.value
        await stack.create({value: value})

        res.send("stack added with success")
    } catch (e) {
        res.status(409).send(e.message)
    }
}
deleteStack = async (req, res) => {
    try {
        const id = req.params.stack
        await stack.findOneAndDelete({'_id': id})
        res.send("stack deleted with success")
    } catch (e) {
        res.status(409).send(e.message)
    }
}
updateStack = async (req, res) => {
    try {
        const id = req.params.stack
        const data=req.body
       await stack.findOneAndUpdate({'_id': id},{value:data.value})
        res.send("stack updated with success")
    } catch (e) {
        res.status(409).send(e.message)
    }
}

applayOperand = async (req, res) => {
    try {
        const id = req.params.stack
        const op=req.params.op

        const stacks=await stack.find()
        const index=stacks.findIndex(el=>
          id===el._id.toString()

        )
        if (index && index!=0){
            console.log(stacks[index-1]._id)
            if (op.toString()=='+') {
                const value=stacks[index-1].value+stacks[index].value
                    await stack.findOneAndUpdate({'_id': stacks[index-1]._id},{value:value})
                await stack.findOneAndDelete({'_id': stacks[index]._id})
            }
            if (op.toString()=='-') {
                const value=stacks[index-1].value-stacks[index].value
                await stack.findOneAndUpdate({'_id': stacks[index-1]._id},{value:value})
                await stack.findOneAndDelete({'_id': stacks[index]._id})
            }
            if (op.toString()=='*') {
                const value=stacks[index-1].value*stacks[index].value
                await stack.findOneAndUpdate({'_id': stacks[index-1]._id},{value:value})
                await stack.findOneAndDelete({'_id': stacks[index]._id})
            }
            if (op.toString()=='dev' && stacks[index].value !=0 ) {
                const value=stacks[index-1].value/stacks[index].value
                await stack.findOneAndUpdate({'_id': stacks[index-1]._id},{value:value})
                await stack.findOneAndDelete({'_id': stacks[index]._id})
            }else{
                res.send('Stack should not be equal to 0')
            }

        }
        res.send("operand applayed with success")
    } catch (e) {
        res.status(409).send(e.message)
    }
}
module.exports = {getStacks, setStack,deleteStack,updateStack,applayOperand}