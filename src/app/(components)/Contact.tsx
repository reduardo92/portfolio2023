import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact--content mx-width cont">
        <div className="title">
          <h3 className="top">Get In Touch</h3>
          <h2 className="bottom">Contact Me</h2>
        </div>
        <div className="contact--content__boxes">
          {/* <!-- EMAIL --> */}
          <div className="contact--content__boxes--box">
            <h3 className="name">email</h3>
            <div className="tag email--box">
              <a
                className="far fa-envelope icon"
                href="mailto:eduardoeerivas299@gmail.com"
                target="_top"
              ></a>
              eduardoeerivas299@gmail.com
            </div>
          </div>
          {/* <!-- PHONE --> */}
          <div className="contact--content__boxes--box">
            <h3 className="name">mobile</h3>
            <div className="tag email--box">
              <a className="fas fa-mobile-alt icon" href="tel:773-226-3407"></a>
              +1 - 773 - 226 - 3407
            </div>
          </div>
          {/* <!-- LOCATION --> */}
          <div className="contact--content__boxes--box">
            <h3 className="name">location</h3>
            <div className="tag email--box">
              <i className="fas fa-map-marked-alt icon"></i>Chicago,IL
            </div>
          </div>
        </div>
        <form
          className="contact--form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          {/* <!-- name --> */}
          <div className="contact--form__group">
            <label className="contact--form__group--label" for="nameInp">
              Name
            </label>
            <input
              id="nameInp"
              type="text"
              className="contact--form__group--input"
              name="name"
              required
            />
          </div>
          {/* <!-- EMAIL --> */}
          <div className="contact--form__group">
            <label className="contact--form__group--label" for="emailInp">
              Email
            </label>
            <input
              id="emailInp"
              type="email"
              className="contact--form__group--input"
              name="email"
              required
            />
          </div>
          {/* <!-- SUBJECT --> */}
          <div className="contact--form__group">
            <label className="contact--form__group--label" for="subjectInpt">
              Subject
            </label>
            <input
              id="subjectInpt"
              type="text"
              className="contact--form__group--input"
              name="subject"
              required
            />
          </div>
          {/* <!-- MESSAGE --> */}
          <div className="contact--form__group">
            <label className="contact--form__group--label" for="messageInp">
              Message
            </label>
            <textarea
              name="message"
              className="contact--form__group--textarea"
              id="messageInp"
            ></textarea>
          </div>
          <div className="contact--links">
            <a
              href="https://github.com/reduardo92"
              target="_blank"
              className="fab fa-github icon"
            ></a>
            <a
              href="https://www.linkedin.com/in/eduardo-enrique-rivas-3287a3b5/"
              rel="noopener"
              target="_blank"
              className="fab fa-linkedin-in icon"
            ></a>
          </div>
          <button type="submit" className="btn">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
