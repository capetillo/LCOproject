import React, { useState } from 'react'; 
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { DesktopDateTimePicker } from '@mui/x-date-pickers';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'

// dayjs plugins to convert time to utc
dayjs.extend(utc);
dayjs.extend(timezone);


const DownTime = () => {
    // initializes state of inputDowntime to an object with key of the downtime features and the value of an empty string
    const [inputDowntime, setInputDowntime] = useState({
        site: '', 
        telescope: '', 
        startDate: '', 
        endDate: '', 
        reason: ''
    });
    
    // finds each element to be able to assign the value to the keys of inputDowntime object
    const site = document.getElementById('site');
    const telescope = document.getElementById('telescope');
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const reason = document.getElementById('reason'); 
    


    // functionionality for button to assign value to keys of inputDowntime object
    const onSubmit = downtimeObject => {
        localStorage.setItem('site', site.val());
        localStorage.setItem('telescope', telescope.val());
        localStorage.setItem('startDate', startDate.val());
        localStorage.setItem('endDate', endDate.val());
        localStorage.setItem('reason', reason.val());
    }


    //setting limit to 255 characters for reason input below
    const [inputText, setInputText] = useState("");
    const [characterLimit] = useState(255);

    // event handler for character limit
    const handleChange = event => {
    setInputText(event.target.value);
    }


    return (
    <div className="downtime-form" value={inputDowntime} onSubmit={onSubmit}>
        <h1>Downtimes</h1>
        <div className="site">
            <input className="input-site" id="site" type="text" 
            onChange={setInputDowntime} placeholder="Enter a site" />
        </div>
        <div className="telescope">
            <input className="input-telescope" id="telescope" type="text" 
            onChange={setInputDowntime} placeholder="Enter a telescope" />
        </div>
        <DesktopDateTimePicker 
            id="startDate"
            timezone='UTC'
        />
        <DesktopDateTimePicker 
            id="endDate"
            timezone='UTC'
        />

  <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" id="reason" rows={6} placeholder="Reason" onChange={handleChange} isInvalid={(inputText.length > characterLimit)} />
        <Badge className='mt-3' bg={`${inputText.length > characterLimit ? 'danger' : 'primary'}`}>{inputText.length}/{characterLimit}</Badge>
        </Form.Group>
    </Form>
    <button className="btn" onClick={() => setInputDowntime(inputDowntime)}>ADD</button>
    </div>
    );
};

export default DownTime; 