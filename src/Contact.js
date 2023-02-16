import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (<Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.860368179397!2d88.38387081985238!3d22.514870285683536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027152c036eeb7%3A0x30c2ff27a753969d!2sAcropolis%20Mall%2C%20Sector%20A%2C%20East%20Kolkata%20Twp%2C%20Kolkata%2C%20West%20Bengal%20700039!5e0!3m2!1sen!2sin!4v1676559803228!5m2!1sen!2sin" 
    width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
 
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xpzepvvv" method="POST" className="contact-inputs">
          <input required type="text" placeholder="Enter Username" name="Username" autoComplete="off" />
          <input required type="Email" placeholder="Enter Email" name="Email" autoComplete="off" />
          <textarea name="Message" cols="30" rows="10" required placeholder="Enter your message" autoComplete="off"
          ></textarea>
          <input type="submit" value="send"/>
        </form>
      </div>
    </div>
  </Wrapper>);
};

export default Contact;
