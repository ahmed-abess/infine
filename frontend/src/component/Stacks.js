import {Button, Input, Modal, Radio} from 'antd';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {deleteStack, getListStacks, updateStack} from "../redux/project/actionCreator";
import {useDispatch, useSelector} from "react-redux";

export const Stacks = ({setStackval}) => {
    const stack = useSelector(state => state.projectReducer.stacks)
    const [stacks, setStacks] = useState()
    const [data, setData] = useState()
    const [value3, setValue3] = useState(null);
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [val, setVal] = useState(null)
    const showModal = () => {
        if (value3) {
            setIsModalVisible(true);
        }
    };

    const handleOk = () => {
        const data={
            id:value3,
            value:{
                value:val
            }
        }
        dispatch(updateStack(data))
        setIsModalVisible(false);
        setValue3(null)
        setVal(null)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setValue3(null)
    };
    useEffect(() => {
        dispatch(getListStacks())
    },[dispatch])

    useLayoutEffect(() => {
            setStacks(stack);
    },[stack])
    useLayoutEffect(() => {
            if (stacks){
                let obj=[]
                stacks?.map(el=>{
                    obj=[...obj,{ label:el.value,  value:el._id}]
                })
                setData(obj)
            }
    },[setData,stacks])


    const onChange3 = ({target: {value}}) => {
        setValue3(value);
        setStackval(value)
        console.log(value)


    };
    const handleDelete = () => {
      if(value3){
          dispatch(deleteStack(value3))
          setValue3(null)
      }
    };
    const handleChange=(e)=>{
        setVal(e.target.value)
    }

    return (
        <>
     <div className="stacks" style={{marginBottom:'15px'}}>
         <Radio.Group options={data} onChange={onChange3} value={value3} optionType="button" />
     </div>
            <Button type="primary" onClick={showModal} >
                Update
            </Button>
            <Button type="danger" onClick={handleDelete} >
                Delete
            </Button>


            <Modal title="Upadate stack" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="New stack" value={val} onChange={e=>{handleChange(e)}}/>
            </Modal>
        </>

    )
}