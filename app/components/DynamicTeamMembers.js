import React, { useState } from "react";
import Input from "./Input";

const DynamicTeamMembers = () => {
  const [members, setMembers] = useState([{ name: "", role: "" }]);

  // Function to handle adding a new member input row
  const handleAddMember = () => {
    setMembers([...members, { name: "", role: "" }]);
  };

  // Function to handle removing a member input row
  const handleRemoveMember = (index) => {
    const newMembers = [...members];
    newMembers.splice(index, 1);
    setMembers(newMembers);
  };

  // Function to handle input change
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newMembers = [...members];
    newMembers[index][name] = value;
    setMembers(newMembers);
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
