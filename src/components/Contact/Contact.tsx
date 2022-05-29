import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>CONTACT ME☎️</h2>
        <p>if you have any specific query you can write a mail to me </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:Bablubhaidablu@gmail.com">Bablubhaidablu@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+918969789294">(+91) 8969789294</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}