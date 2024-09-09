import React, { useState } from "react";

const BrandLogoUploader = ({ image, setImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="image-upload-container">
      <input
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <label htmlFor="file-input" className="image-upload-label shadow-md">
        {image ? (
          <div className="image-preview">
            <img src={image} alt="Uploaded" className="uploaded-image" />
            <button className="remove-button" onClick={handleRemoveImage}>
              Remove
            </button>
          </div>
        ) : (
          <div className="upload-placeholder">Brand Logo</div>
        )}
      </label>
    </div>
  );
};

export default BrandLogoUploader;
