// import React, { useState } from 'react';
// import './ScriptFooter.css';

// function ScriptFooter() {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handleImageRemove = () => {
//     setImage(null);
//     document.getElementById('imageInput').value = null;
//   };

//   return (
//     <div className="script-footer">
//       <div className="form-group">
//         <label htmlFor="imageInput" className="form-label">Image:</label>
//         <div className="image-input-container">
//           <input 
//             type="file" 
//             id="imageInput" 
//             className="form-input" 
//             accept="image/*" 
//             onChange={handleImageChange} 
//           />
//           {image && (
//             <button 
//               type="button" 
//               className="remove-image-button" 
//               onClick={handleImageRemove}
//             >
//               Remove Image
//             </button>
//           )}
//         </div>
//         {image && <img src={image} alt="Selected" className="preview-image" />}
//       </div>
//       <div className="form-group">
//         <label htmlFor="linkInput" className="form-label">Link:</label>
//         <input type="url" id="linkInput" className="form-input" placeholder="Enter URL" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="textInput" className="form-label">Text:</label>
//         <textarea id="textInput" className="form-input" rows="4" placeholder="Enter text"></textarea>
//       </div>
//     </div>
//   );
// }

// export default ScriptFooter;


// 이미지 입력부 변경; file > text
// import React, { useState } from 'react';
// import './ScriptFooter.css';

// function ScriptFooter() {
//   const [imageURL, setImageURL] = useState('');

//   const handleImageURLChange = (e) => {
//     setImageURL(e.target.value);
//   };

//   return (
//     <div className="script-footer">
//       <div className="form-group">
//         <label htmlFor="imageURLInput" className="form-label">Image URL:</label>
//         <input 
//           type="text" 
//           id="imageURLInput" 
//           className="form-input" 
//           placeholder="Enter Image URL" 
//           value={imageURL}
//           onChange={handleImageURLChange} 
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="linkInput" className="form-label">Link:</label>
//         <input type="text" id="linkInput" className="form-input" placeholder="Enter URL" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="textInput" className="form-label">Text:</label>
//         <textarea id="textInput" className="form-input" rows="4" placeholder="Enter text"></textarea>
//       </div>
//     </div>
//   );
// }

// export default ScriptFooter;



import React, { useState } from 'react';
import './ScriptFooter.css';

function ScriptFooter() {
  const [imageURL, setImageURL] = useState('');

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

  return (
    <div className="script-footer">
      <div className="form-group">
        <label htmlFor="imageURLInput" className="form-label">Image URL:</label>
        <input 
          type="text" 
          id="imageURLInput" 
          className="form-input" 
          placeholder="Enter Image URL" 
          value={imageURL}
          onChange={handleImageURLChange} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="linkInput" className="form-label">Link:</label>
        <input 
          type="text" 
          id="linkInput" 
          className="form-input" 
          placeholder="Enter URL" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="textInput" className="form-label">Text:</label>
        <textarea 
          id="textInput" 
          className="form-textarea" 
          rows="4" 
          placeholder="Enter text"
        ></textarea>
      </div>
    </div>
  );
}

export default ScriptFooter;
