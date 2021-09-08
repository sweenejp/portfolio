import React from "react";

function Form() {
  return (
    <form className="simple-form" name="contact" data-netlify="true">
      <label>
        Email
        <input name="userEmail" type="email" required="true"></input>
      </label>
      <label>
        Message:
        <textarea
          name="userInput"
          type="textarea"
          rows="4"
          cols="50"
          required="true"
        ></textarea>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;
