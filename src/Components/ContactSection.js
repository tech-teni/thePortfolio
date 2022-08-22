import React from "react";

const ContactSection = () => {
  return (
    <>
      <section className="contact">
        <div className="do" id="contact"></div>

        <div className="heading">
          <h1>Lets make something great! </h1>
        </div>
        <div className="paragraphs">
          <div className="mini">
            <p>
              I am seeking out opportunity to work and collaborate with
              companies or agencies/ individuals, not just work for them. i want
              to bring my collective experience to the table where we can work
              together to solve real business-problems in a way that optimizes
              all of our respective experince and knowledge.
            </p>
          </div>
          <div className="email">
            <span className="extra">
              <i className="fas fa-envelope"></i> yakubganiyat247@gmail.com{" "}
            </span>
            <span>
              <i className="fas fa-phone"></i> 08114618720, 09099758749
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
