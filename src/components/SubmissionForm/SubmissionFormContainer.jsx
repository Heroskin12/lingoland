import { useEffect, useState } from "react";
import SubmissionFormPresentational from "./SubmissionFormPresentational";

const SubmissionFormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    level: "",
    language: "",
    type: "",
  });

  useEffect(() => {
    console.log("Form data changed:", formData);
  }, [formData])

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("In submit handler");
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <SubmissionFormPresentational
      formData={formData}
      setFormData={setFormData}
      onChangeHandler={changeHandler}
      onSubmitHandler={submitHandler}
    />
  );
};

export default SubmissionFormContainer;
