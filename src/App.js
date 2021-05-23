
import { React, useState, useEffect } from 'react'
import { Form, Container, Row, Col, Table, thead, tr, td } from "react-bootstrap";
import { CustomTextbox } from './components/CustomTextbox'
import { CustomTextarea } from './components/CustomTextarea'
import { CustomButton } from './components/CustomButton'

function App() {
  const [jsonData, setJsonData] = useState({
    "title": "Create Account",
    "form": {
      "fields":
        [{ "label": "Name", "id": "name", "type": "textbox", "sequence": 1 },
        { "label": "DOB", "id": "dob", "type": "date", "sequence": 2 },
        { "label": "Address", "id": "address", "type": "textarea", "sequence": 3 }]
    }
  });

  const [userDetails, setUserDetails] = useState({
    'name': '',
    'dob': '',
    'address': ''
  })

  const [currentUser, setCurrentUser] = useState({
    'name': '',
    'dob': '',
    'address': ''
  })
  const [matchingWords, setMatchingWords] = useState([])

  useEffect(() => {
    if(localStorage.getItem('currentUser'))
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
  }, [])

  useEffect(() => {
    setMatchingWords(matchingWords)
  }, [matchingWords])

  const onValueChange = (value, sequence) => {
    if (sequence === 1) {
      setUserDetails({
        ...userDetails,
        'name': value
      });
      if (value.length >= 3) {
        fetch(`https://api.datamuse.com//words?ml=${value}&max=10`)
          .then(response => response.json())
          .then(data => setMatchingWords(data));
      }
    } else if (sequence === 2) {
      setUserDetails({
        ...userDetails,
        'dob': value
      });
    } else if (sequence === 3) {
      setUserDetails({
        ...userDetails,
        'address': value
      });
    }
  }

  const submitFormData = (e) => {
    e.preventDefault();
    localStorage.setItem('currentUser', JSON.stringify(userDetails));
    setCurrentUser(userDetails);
  }



  return (
    <Container style={{ marginTop: "4%" }}>
      <Row>
        <Col md={{ span: 4, offset: 1 }} style={{ border: "1px solid black", padding: "30px", borderRadius: "5px" }}>
          <h3>{jsonData.title}</h3>
          <hr />
          <Form onSubmit={submitFormData}>
            {jsonData.form.fields ? jsonData.form.fields.map((field, i) =>
              <div key={i}>
                {field.type !== "textarea" ?
                  <CustomTextbox
                    type={field.type}
                    placeholder={field.label}
                    value={field.sequence === 1 ? userDetails.name : userDetails.dob}
                    onValueChangeHandler={onValueChange}
                    sequence={field.sequence}
                    text=""
                    label={"Enter " + field.label} />
                  :
                  <CustomTextarea
                    placeholder={field.label}
                    value={userDetails.address} rows="3"
                    onValueChangeHandler={onValueChange}
                    sequence={field.sequence}
                    label={"Enter " + field.label} />
                }
              </div>
            )
              : null}

            <div style={{ textAlign: "right" }}>
              <CustomButton variant="primary" type="submit"></CustomButton>
            </div>

          </Form>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }} colSpan={2}>Matched Keywords</th>
              </tr>
              <tr>
                <th>Word</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              
              {matchingWords.map((field, i) =>
                <tr>
                  <td>{field.word}</td>
                  <td>{field.score}</td>
                </tr>
                )
              }
              
            </tbody>
          </Table>
           
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }} colSpan={3}>Current User</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{currentUser.name}</td>
                <td>{currentUser.dob}</td>
                <td>{currentUser.address}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default App;
