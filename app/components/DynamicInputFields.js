import React, { useState } from "react";
import Input from "./Input";

const DynamicInputFields = ({ inputFields, setInputFields }) => {
  // Function to handle adding new input fields
  const handleAddField = () => {
    setInputFields([...inputFields, { id: inputFields.length + 1, value: "" }]);
  };

  // Function to handle removing an input field
  const handleRemoveField = (id) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  // Function to handle input field changes
  const handleInputChange = (id, value) => {
    setInputFields(
      inputFields.map((field) =>
        field.id === id ? { ...field, value } : field
      )
    );
  };

  return (
    <div>
      {inputFields.map((field) => (
        <div key={field.id} style={{ marginBottom: "10px" }}>
          <Input
            type="text"
            value={field.value}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder="Paste Social Media Link"
          />
          {field.id !== 1 && (
            <button
              onClick={() => handleRemoveField(field.id)}
              className=" right-3 top-11"
            >
              <img src="close.svg" className="h-5" />
            </button>
          )}
        </div>
      ))}
      <div className="flex items-center" onClick={handleAddField}>
        <div>
          <img src="addmore.png" className="h-7" />
        </div>
        <div className="ml-2">Add more</div>
      </div>
    </div>
  );
};

export default DynamicInputFields;
