import React from "react";

function Form() {
  return (
    <form className="simple-form" method="post" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="userName">Name</label>
      <input
        className="simple-form__field input"
        name="userName"
        type="text"
        placeholder="Name"
        required="true"
      ></input>
      <label htmlFor="userEmail">Email</label>
      <input
        className="simple-form__field input"
        name="userEmail"
        type="email"
        required="true"
        placeholder="Email"
      ></input>
      <label htmlFor="userPhoneNumber">Phone Number</label>
      <input
        className="simple-form__field input"
        name="userPhoneNumber"
        type="tel"
        placeholder="Phone Number (Optional)"
      ></input>
      <label htmlFor="userMessage">Message:</label>
      <textarea
        className="simple-form__field textarea"
        name="userMessage"
        type="textarea"
        rows="4"
        cols="50"
        required="true"
        placeholder="Send me a message!"
      ></textarea>
      <button className="simple-form__button">Submit</button>
    </form>
  );
}

export default Form;
