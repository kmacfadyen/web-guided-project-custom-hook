import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";
import { useForm } from "../hooks/useForm";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const initialValue = {username: '', email: ''};

export default function SignupForm() {
  const classes = useStyles();
  // const [formValues, setFormValues] = useState(initialValue);
  // const [firstName, setFirstName] = useForm('');

  const callback = () => {
    alert(`${values.username}, ${values.email}`);
  }

  const [values, clearForm, handleChanges, handleSubmit] = useForm('sign-in', initialValue, callback);

  // const handleChanges = e => {
    // setFirstName(e.target.value);
    // e.preventDefault();

    // console.log(e.target.name); // Tells you which input field is being updated
    // console.log(e.target.value); // Updates as you type into boxes

    // setFormValues({ ...formValues, [e.target.name]: e.target.value }) // Doing this allows either email or username to be updated!
  // };

 

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   alert(`${formValues.username}, ${formValues.email}`);
  // };

  // const clearForm = e => {
  //   e.preventDefault();
    // setFirstName("");
  //   setFormValues(initialValue);
  // };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="User Name"
            className={classes.textField}
            name="username"
            value={values.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
           <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            name="email"
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}