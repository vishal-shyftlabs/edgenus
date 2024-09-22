import React, { useState } from "react";
import Input from "./Input";

const DynamicTeamMembers = ({ members, setMembers }) => {
  // Function to handle adding a new member input row
  const handleAddMember = () => {
    setMembers((prevMembers) => [...prevMembers, { name: "", role: "" }]);
  };

  const handleRemoveMember = (index) => {
    setMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    console.log(name, value, index);
    setMembers((prevMembers) => {
      const updatedMembers = [...prevMembers];
      updatedMembers[index][name] = value;
      console.log(updatedMembers);
      return updatedMembers;
    });
  };

  return (
    <div>
      {members.map((member, index) => (
        <div
          key={index}
          className="flex items-center mb-[10px] gap-x-6 relative"
        >
          <Input
            type="text"
            name="name"
            placeholder="Member Name"
            value={member.name}
            onChange={(event) => handleInputChange(index, event)}
            style={{ marginRight: "10px" }}
          />
          <Input
            type="text"
            name="role"
            placeholder="Member Role"
            value={member.role}
            onChange={(event) => handleInputChange(index, event)}
            style={{ marginRight: "10px" }}
          />
          {index !== 0 && (
            <button
              onClick={() => handleRemoveMember(index)}
              style={{ marginRight: "10px" }}
              className="absolute -right-7"
            >
              <img src="close.svg" className="h-5" />
            </button>
          )}
        </div>
      ))}

      <div className="flex items-center" onClick={handleAddMember}>
        <div>
          <img src="addmore.png" className="h-7" />
        </div>
        <div className="ml-2">Add more</div>
      </div>
    </div>
  );
};

export default DynamicTeamMembers;
