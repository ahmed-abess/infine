import React, {useEffect} from "react";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {applyOpStack, getListOperators} from "../redux/project/actionCreator";
import {useLayoutEffect} from "react";
import {useState} from "react";



export const Operator = ({setStackval,stackval}) => {
    const dispatch =useDispatch()
    const operators = useSelector(state => state.projectReducer.operators)
    const [operator, setOperator] = useState()
    useEffect(()=>{
        dispatch(getListOperators())
    },[dispatch])
    useLayoutEffect(()=>{

            setOperator(operators)

    },[operators])
    console.log(operators)
    const handleStack=(e)=>{
        console.log(e.target.value)
        dispatch(applyOpStack({stack:stackval,op:e.target.value}))
    }
    return(
        <>
            {operators?.map(el=>{
                return(
                    <Button type="primary" ghost key={el._id} value={el.value} onClick={e=>handleStack(e)}>
                        {el.value}
                    </Button>
                )
            })}
    </>
    )
}