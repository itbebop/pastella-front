// import React, { useEffect } from 'react';
// import './ScriptContent.css';

// export const initialScript = {
//   id: 0,
//   inputs: {
//     languagecode: '',
//     background: '',
//     humancount: 0,
//     humanA: '',
//     humanB: '',
//     humanC: '',
//     humanD: '',
//     script: '',
//     note: '',
//     studyPoints: [{ point1: '', point2: '' }],
//     quizzes: [{ select: '', input1: '', input2: '' }, { select: '', input1: '', input2: '' }, { select: '', input1: '', input2: '' }],
//     names: ['', '']
//   }
// };

// function ScriptContent({ id, title, inputs, onDelete, onInputChange, onAddName, onRemoveName, onAddStudyPoint, onRemoveStudyPoint }) {
//   useEffect(() => {
//     onInputChange('humancount', inputs.names.length);
//   }, [inputs.names, onInputChange]);

//   return (
//     <div className="script-content">
//       <div className="script-content-inner">
//         <div className="script-content-left-box">
//           <p className="script-content-title">{title}</p>
//           <select 
//             id={`select-${id}`} 
//             className="script-content-form-select" 
//             value={inputs.languagecode} 
//             onChange={(e) => onInputChange('languagecode', e.target.value)}
//           >
//             <option value="" disabled>언어 선택</option>
//             <option value="korean">한국어</option>
//             <option value="english">영어</option>
//             <option value="japanese">일본어</option>
//           </select>
//         </div>
//         <div className="script-content-right-box">
//           <div className="script-content-content-block">
//             <div className="script-content-block-left">
//               <label htmlFor={`languagecode-${id}`} className="script-content-form-label">언어코드</label>
//             </div>
//             <div className="script-content-block-right">
//               <div className="script-content-form-group">
//                 <input 
//                   type="text" 
//                   id={`languagecode-${id}`} 
//                   className="script-content-form-input" 
//                   value={inputs.languagecode} 
//                   onChange={(e) => onInputChange('languagecode', e.target.value)} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="script-content-content-block">
//             <div className="script-content-block-left">
//               <label htmlFor={`background-${id}`} className="script-content-form-label">1. Background</label>
//             </div>
//             <div className="script-content-block-right">
//               <div className="script-content-form-group">
//                 <textarea 
//                   id={`background-${id}`} 
//                   className="script-content-form-textarea" 
//                   rows="4" 
//                   value={inputs.background} 
//                   onChange={(e) => onInputChange('background', e.target.value)} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="script-content-content-block">
//             <div className="script-content-block-left">
//               <label htmlFor={`conversation-${id}`} className="script-content-form-label">2. Conversation</label>
//             </div>
//             <div className="script-content-block-right">
//               <div className="script-content-name-group">
//                 {inputs.names.map((name, index) => (
//                   <div key={index} className="script-content-form-group">
//                     <label htmlFor={`name-${id}-${index}`} className="script-content-form-label">인물 {index + 1}:</label>
//                     <input 
//                       type="text" 
//                       id={`name-${id}-${index}`} 
//                       className="script-content-form-input" 
//                       value={name} 
//                       onChange={(e) => onInputChange(`names.${index}`, e.target.value)} 
//                     />
//                   </div>
//                 ))}
//               </div>
//               <button 
//                 type="button" 
//                 onClick={() => onAddName(id)} 
//                 disabled={inputs.names.length >= 4}
//               >
//                 인물 추가
//               </button>
//               <button 
//                 type="button" 
//                 onClick={() => onRemoveName(id)} 
//                 disabled={inputs.names.length <= 2}
//               >
//                 인물 삭제
//               </button>
//               <div className="script-content-form-group">
//                 <label htmlFor={`conversation-text-${id}`} className="script-content-form-label">Conversation:</label>
//                 <textarea 
//                   id={`conversation-text-${id}`} 
//                   className="script-content-form-textarea" 
//                   rows="4" 
//                   value={inputs.script} 
//                   onChange={(e) => onInputChange('script', e.target.value)} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="script-content-content-block">
//             <div className="script-content-block-left">
//               <label htmlFor={`note-${id}`} className="script-content-form-label">NOTE</label>
//             </div>
//             <div className="script-content-block-right">
//               <div className="script-content-form-group">
//                 <textarea 
//                   id={`note-${id}`} 
//                   className="script-content-form-textarea" 
//                   rows="4" 
//                   value={inputs.note} 
//                   onChange={(e) => onInputChange('note', e.target.value)} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="script-content-content-block">
//             <div className="script-content-block-left">
//               <label htmlFor={`study-point-${id}`} className="script-content-form-label">3. Study Point</label>
//             </div>
//             <div className="script-content-block-right">
//               {inputs.studyPoints.map((studyPoint, index) => (
//                 <div key={index} className="script-content-study-point-group">
//                   <div className="script-content-form-group">
//                     <label htmlFor={`study-point1-${id}-${index}`} className="script-content-form-label">Point 1:</label>
//                     <input 
//                       type="text" 
//                       id={`study-point1-${id}-${index}`} 
//                       className="script-content-form-input" 
//                       value={studyPoint.point1} 
//                       onChange={(e) => onInputChange(`studyPoints.${index}.point1`, e.target.value)} 
//                     />
//                   </div>
//                   <div className="script-content-form-group">
//                     <label htmlFor={`study-point2-${id}-${index}`} className="script-content-form-label">Point 2:</label>
//                     <input 
//                       type="text" 
//                       id={`study-point2-${id}-${index}`} 
//                       className="script-content-form-input" 
//                       value={studyPoint.point2} 
//                       onChange={(e) => onInputChange(`studyPoints.${index}.point2`, e.target.value)} 
//                     />
//                   </div>
//                 </div>
//               ))}
//               <button 
//                 type="button" 
//                 onClick={() => onAddStudyPoint(id)}
//               >
//                 추가
//               </button>
//               <button 
//                 type="button" 
//                 onClick={() => onRemoveStudyPoint(id)} 
//                 disabled={inputs.studyPoints.length <= 1}
//               >
//                 삭제
//               </button>
//             </div>
//           </div>
//           <div className="script-content-content-block">
//             <div className="script-content-block-left">
//               <label htmlFor={`quiz-${id}`} className="script-content-form-label">4. Quiz</label>
//             </div>
//             <div className="script-content-block-right">
//               {inputs.quizzes.map((quiz, index) => (
//                 <div key={index} className="script-content-quiz-group">
//                   <div className="script-content-form-group">
//                     <label htmlFor={`quiz-select-${id}-${index}`} className="script-content-form-label">Quiz {index + 1}:</label>
//                     <select 
//                       id={`quiz-select-${id}-${index}`} 
//                       className="script-content-form-select" 
//                       value={quiz.select} 
//                       onChange={(e) => onInputChange(`quizzes.${index}.select`, e.target.value)}
//                     >
//                       <option value="" disabled>질문형식</option>
//                       <option value="option1">OX</option>
//                       <option value="option2">주관식</option>
//                     </select>
//                   </div>
//                   <div className="script-content-form-group">
//                     <label htmlFor={`quiz-input1-${id}-${index}`} className="script-content-form-label">질문:</label>
//                     <input 
//                       type="text" 
//                       id={`quiz-input1-${id}-${index}`} 
//                       className="script-content-form-input" 
//                       value={quiz.input1} 
//                       onChange={(e) => onInputChange(`quizzes.${index}.input1`, e.target.value)} 
//                     />
//                   </div>
//                   <div className="script-content-form-group">
//                     <label htmlFor={`quiz-input2-${id}-${index}`} className="script-content-form-label">정답:</label>
//                     <input 
//                       type="text" 
//                       id={`quiz-input2-${id}-${index}`} 
//                       className="script-content-form-input" 
//                       value={quiz.input2} 
//                       onChange={(e) => onInputChange(`quizzes.${index}.input2`, e.target.value)} 
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button className="script-content-delete-script-button" onClick={() => onDelete(id)}>Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScriptContent;


import React, { useEffect, useCallback } from 'react';
import './ScriptContent.css';

export const initialScript = {
  id: 0,
  inputs: {
    languagecode: '',
    background: '',
    humancount: 0,
    humanA: '',
    humanB: '',
    humanC: '',
    humanD: '',
    script: '',
    note: '',
    studyPoints: [{ point1: '', point2: '' }],
    quizzes: [{ select: '', input1: '', input2: '' }, { select: '', input1: '', input2: '' }, { select: '', input1: '', input2: '' }],
    names: ['', '']
  }
};

function ScriptContent({ id, title, inputs, onDelete, onInputChange, onAddName, onRemoveName, onAddStudyPoint, onRemoveStudyPoint }) {
  const updateHumanCount = useCallback(() => {
    onInputChange('humancount', inputs.names.length);
  }, [inputs.names, onInputChange]);

  // useEffect(() => {
  //   updateHumanCount();
  // }, [updateHumanCount]);

  return (
    <div className="script-content">
      <div className="script-content-inner">
        <div className="script-content-left-box">
          <p className="script-content-title">{title}</p>
          <label htmlFor={`select-${id}`}></label>
          <select 
            id={`select-${id}`} 
            className="script-content-form-select" 
            value={inputs.languagecode} 
            onChange={(e) => onInputChange('languagecode', e.target.value)}
          >
            <option value="" disabled>언어 선택</option>
            <option value="korean">한국어</option>
            <option value="english">영어</option>
            <option value="japanese">일본어</option>
          </select>
        </div>
        <div className="script-content-right-box">
          <div className="script-content-content-block">
            <div className="script-content-block-left">
              <label htmlFor={`languagecode-${id}`} className="script-content-form-label">언어코드</label>
            </div>
            <div className="script-content-block-right">
              <div className="script-content-form-group">
                <input 
                  type="text" 
                  id={`languagecode-${id}`} 
                  className="script-content-form-input" 
                  value={inputs.languagecode} 
                  onChange={(e) => onInputChange('languagecode', e.target.value)} 
                />
              </div>
            </div>
          </div>
          <div className="script-content-content-block">
            <div className="script-content-block-left">
              <label htmlFor={`background-${id}`} className="script-content-form-label">1. Background</label>
            </div>
            <div className="script-content-block-right">
              <div className="script-content-form-group">
                <textarea 
                  id={`background-${id}`} 
                  className="script-content-form-textarea" 
                  rows="4" 
                  value={inputs.background} 
                  onChange={(e) => onInputChange('background', e.target.value)} 
                />
              </div>
            </div>
          </div>
          <div className="script-content-content-block">
            <div className="script-content-block-left">
              <label htmlFor={`conversation-text-${id}`} className="script-content-form-label">2. Conversation:</label>
            </div>
            <div className="script-content-block-right">
              <div className="script-content-name-group">
                {inputs.names.map((name, index) => (
                  <div key={index} className="script-content-form-group">
                    <label htmlFor={`name-${id}-${index}`} className="script-content-form-label">인물 {index + 1}:</label>
                    <input 
                      type="text" 
                      id={`name-${id}-${index}`} 
                      className="script-content-form-input" 
                      value={name} 
                      onChange={(e) => onInputChange(`names.${index}`, e.target.value)} 
                    />
                  </div>
                ))}
              </div>
              <button 
                type="button" 
                onClick={() => onAddName(id)} 
                disabled={inputs.names.length >= 4}
              >
                인물 추가
              </button>
              <button 
                type="button" 
                onClick={() => onRemoveName(id)} 
                disabled={inputs.names.length <= 2}
              >
                인물 삭제
              </button>
              <div className="script-content-form-group">
                <textarea 
                  id={`conversation-text-${id}`} 
                  className="script-content-form-textarea" 
                  rows="4" 
                  value={inputs.script} 
                  onChange={(e) => onInputChange('script', e.target.value)} 
                />
              </div>
            </div>
          </div>
          <div className="script-content-content-block">
            <div className="script-content-block-left">
              <label htmlFor={`note-${id}`} className="script-content-form-label">NOTE</label>
            </div>
            <div className="script-content-block-right">
              <div className="script-content-form-group">
                <textarea 
                  id={`note-${id}`} 
                  className="script-content-form-textarea" 
                  rows="4" 
                  value={inputs.note} 
                  onChange={(e) => onInputChange('note', e.target.value)} 
                />
              </div>
            </div>
          </div>
          <div className="script-content-content-block">
            <div className="script-content-block-left">
              <span className="form-label">3. Study Point</span>
            </div>
            <div className="script-content-block-right">
              {inputs.studyPoints.map((studyPoint, index) => (
                <div key={index} className="script-content-study-point-group">
                  <div className="script-content-form-group">
                    <label htmlFor={`study-point1-${id}-${index}`} className="script-content-form-label">학습 포인트</label>
                    <input 
                      type="text" 
                      id={`study-point1-${id}-${index}`} 
                      className="script-content-form-input" 
                      value={studyPoint.point1} 
                      onChange={(e) => onInputChange(`studyPoints.${index}.point1`, e.target.value)} 
                    />
                  </div>
                  <div className="script-content-form-group">
                    <label htmlFor={`study-point2-${id}-${index}`} className="script-content-form-label">학습 포인트 해설</label>
                    <input 
                      type="text" 
                      id={`study-point2-${id}-${index}`} 
                      className="script-content-form-input" 
                      value={studyPoint.point2} 
                      onChange={(e) => onInputChange(`studyPoints.${index}.point2`, e.target.value)} 
                    />
                  </div>
                </div>
              ))}
              <button 
                type="button" 
                onClick={() => onAddStudyPoint(id)}
              >
                추가
              </button>
              <button 
                type="button" 
                onClick={() => onRemoveStudyPoint(id)} 
                disabled={inputs.studyPoints.length <= 1}
              >
                삭제
              </button>
            </div>
          </div>
          <div className="script-content-content-block">
            <div className="script-content-block-left">
              <span className="form-label">4. Quiz</span>
            </div>
            <div className="script-content-block-right">
              {inputs.quizzes.map((quiz, index) => (
                <div key={index} className="script-content-quiz-group">
                  <div className="script-content-form-group">
                    <label htmlFor={`quiz-select-${id}-${index}`} className="script-content-form-label">Quiz {index + 1}:</label>
                    <select 
                      id={`quiz-select-${id}-${index}`} 
                      className="script-content-form-select" 
                      value={quiz.select} 
                      onChange={(e) => onInputChange(`quizzes.${index}.select`, e.target.value)}
                    >
                      <option value="" disabled>질문형식</option>
                      <option value="option1">OX</option>
                      <option value="option2">주관식</option>
                    </select>
                  </div>
                  <div className="script-content-form-group">
                    <label htmlFor={`quiz-input1-${id}-${index}`} className="script-content-form-label">질문:</label>
                    <input 
                      type="text" 
                      id={`quiz-input1-${id}-${index}`} 
                      className="script-content-form-input" 
                      value={quiz.input1} 
                      onChange={(e) => onInputChange(`quizzes.${index}.input1`, e.target.value)} 
                    />
                  </div>
                  <div className="script-content-form-group">
                    <label htmlFor={`quiz-input2-${id}-${index}`} className="script-content-form-label">정답:</label>
                    <input 
                      type="text" 
                      id={`quiz-input2-${id}-${index}`} 
                      className="script-content-form-input" 
                      value={quiz.input2} 
                      onChange={(e) => onInputChange(`quizzes.${index}.input2`, e.target.value)} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="script-content-delete-script-button" onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ScriptContent;
