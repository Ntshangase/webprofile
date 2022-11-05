import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


export default function contactPage() {
  return (
    <Form>

      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <Col id="test">
        <Form.Label class="label">First name</Form.Label>
        <Form.Control placeholder="Enter your First name" id="first_name" />
        <Form.Label class="label2">Last name</Form.Label>
        <Form.Control placeholder="Enter your Last name" id="last_name" />
      </Col>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="yourname@email.com" id="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label >Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Send me a message and I will reply as soon as possible" id="message" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="You agree to giving your data to drake who may contact you" />
      </Form.Group>
      <Button variant="primary" type="submit" id="btn__submit">
        Submit
      </Button>
    </Form>
  );
}
