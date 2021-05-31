import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');

    const handleChange= (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value);
        }else if(name=="description"){
            setDescription(value)
        }
        else if(name=="startdate"){
            setStartdate(value);
        }
        else{
            setEnddate(value);
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setStartdate(taskObj.StartDate);
        setEnddate(taskObj.EndDate);
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj["Name"] = taskName
        tempObj["Description"] = description
        tempObj["StartDate"]=startdate
        tempObj["EndDate"]=enddate
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div className = "form-group">
                        <label>Start Date</label>
                        <input type="date" className = "form-control" value = {startdate} onChange = {handleChange} name = "startdate"/>
                    </div>
                    <div className = "form-group">
                        <label>End date</label>
                        <input type="date" className = "form-control" value = {enddate} onChange = {handleChange} name = "enddate"/>
                    </div>
                    
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTask;