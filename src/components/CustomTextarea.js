import {Form} from 'react-bootstrap'

export const CustomTextarea = (props) => {
    return (
        <Form.Group style={{ marginTop: "10px" }}>
              <Form.Label>{props.label}</Form.Label>
              <Form.Control as="textarea" placeholder={props.placeholder} rows={props.rows} onChange={e => props.onValueChangeHandler(e.target.value,props.sequence)} />
        </Form.Group>
    )
}