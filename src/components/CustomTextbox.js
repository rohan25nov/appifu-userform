import {Form} from 'react-bootstrap'

export const CustomTextbox = (props) => {
    // const fieldChanged = (newValue) =>{
    //     onValueChange(currentValues => {currentValues[sequence] = newValue;
    //                                     return currentValues
    //                                 })
    //     console.log(value)
    // }
    console.log(props.matchingWords)
    return (
        <Form.Group style={{ marginTop: "10px" }}>
              <Form.Label>{props.label} <span style={{color:'red'}}>*</span></Form.Label>
              <Form.Control type={props.type} 
              list={"data"+props.sequence}  
              placeholder={props.placeholder} 
              value={props.value} 
              onChange={e => props.onValueChangeHandler(e.target.value,props.sequence)} 
              required />
              <Form.Text className="text-muted">
                {props.text}
            </Form.Text>
        </Form.Group>
    )
}