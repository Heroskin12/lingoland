import { useEffect, useState } from "react";
import SubmissionFormPresentational from "./SubmissionFormPresentational";
import OpenAI from "openai";

const SubmissionFormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    level: "A1",
    language: "english",
    type: "fiction",
  });

  useEffect(() => {
    console.log("Form data changed:", formData);
  }, [formData]);

  const getNewText = async () => {
    console.log("Awaiting response...");
    const client = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    const response = await client.responses.create({
      model: "gpt-4.1",
      input: `
        I am a teacher who requires comprehension texts to teach my language students. Given the following parameters, please generate the text. Name of Text: ${formData.name},
        Age of Students: ${formData.age},
        Level of Students: ${formData.level},
        Desired language of text: ${formData.language},
        Type of text: ${formData.type}. 
    `,
    });
    return response.output_text;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("In submit handler");
    const validated = validateForm();
    if (validated) {
      const result = await getNewText();
      console.log("Generated text:", result);
    } else {
      alert("Form validation failied. Please don't leave any field empty.");
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, age } = formData;
    if (!name || !age) {
      alert("Please fill in all fields.");
      return false;
    }
    if (isNaN(age) || age <= 0) {
      alert("Please enter a valid age.");
      return false;
    }
    return true;
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
