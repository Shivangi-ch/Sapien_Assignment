import React from 'react';
import Form from "@rjsf/core";
import { Row, Col } from 'react-bootstrap';

function ClientForm()
{
    const schema = {
        "definitions": {
            "largeEnum": {
              "type": "string",
              "enum": [
                "New",
                "Active",
                "Temporary"
              ]
            }
          },
        "title": "Add a Client",
        "type": "object",
        "required": [
          "Name",
          "Email"
        ],
        "properties": {
          "Name": {
            "type": "string",
            "title": "Name"
          },
          "Email": {
            "type": "string",
            "title": "Email"
          },
          "telephone": {
            "type": "string",
            "title": "Telephone",
            "minLength": 10
          },
          "Message": {
            "type": "string",
            "title": "Lead Message"
          },
          "Status":{
            "$ref": "#/definitions/largeEnum"
          }
        }
      }
    const uischema = 
    {
        "Status": {
          "ui:placeholder": "Choose one"
        },
        "Message": {
            "ui:widget": "textarea",
            "ui:options": {
              "rows": 5
            }
        }
    }
    return(
        <div>
            <Row>
                <Col xs={4}>      
                </Col>
                <Col style={{marginTop:"5vh"}} xs={4}>      
                    <Form schema={schema} uiSchema={uischema}/>
                </Col>
                <Col xs={4}>      
                </Col>
            </Row>
        </div>
    )
}
export default ClientForm;