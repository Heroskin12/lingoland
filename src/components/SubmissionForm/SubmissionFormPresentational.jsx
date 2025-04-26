import React from "react";

const SubmissionFormPresentational = ({
  formData,
  onChangeHandler,
  onSubmitHandler,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="formGroup">
        <label htmlFor="name">Text Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="age">Student Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={onChangeHandler}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="level">Student Level</label>
        <select name="level" value={formData.level} onChange={onChangeHandler}>
          <option value="A1">Beginner</option>
          <option value="A2">Intermediate</option>
          <option value="B1">Advanced</option>
          <option value="B2">Proficient</option>
          <option value="C1">Expert</option>
          <option value="C2">Master</option>
        </select>
      </div>
      <div className="formGroup">
        <label htmlFor="language">Your Language</label>
        <select
          name="language"
          value={formData.language}
          onChange={onChangeHandler}
        >
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="spanish">Spanish</option>
          <option value="italian">Italian</option>
        </select>
      </div>
      <div className="formGroup">
        <label htmlFor="type">Your Type</label>
        <select name="type" value={formData.type} onChange={onChangeHandler}>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="poetry">Poetry</option>
          <option value="grammar">Grammar Exercise</option>
        </select>
      </div>
      <button type="submit">Confirm Text Parameters</button>
    </form>
  );
};

export default SubmissionFormPresentational;
