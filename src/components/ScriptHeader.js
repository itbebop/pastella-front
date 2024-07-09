// import React from 'react';
// import './ScriptHeader.css';

// function ScriptHeader() {
//   return (
//     <div className="body-content">
//       <div className="form-group">
//         <label htmlFor="titleInput" className="form-label">Title:</label>
//         <input type="text" id="titleInput" className="form-input" />
//       </div>
//       <div className="form-group">
//         <span className="form-label">Used:</span>
//         <label className="form-radio">
//           <input type="radio" name="used" value="yes" /> Yes
//         </label>
//         <label className="form-radio">
//           <input type="radio" name="used" value="no" defaultChecked /> No
//         </label>
//       </div>
//       <div className="form-group">
//         <span className="form-text">SN: 000000000000</span>
//       </div>
//       <div className="form-group tag-section">
//         <label htmlFor="tags" className="form-label">Tags:</label>
//         <div className="dropdown-container">
//           <select className="form-dropdown">
//             <option value="" disabled selected>성별</option>
//             <option value="tag1">남성</option>
//             <option value="tag2">여성</option>
//             <option value="tag3">무관</option>
//           </select>
//           <select className="form-dropdown">
//             <option value="" disabled selected>연령</option>
//             <option value="tag1">10대</option>
//             <option value="tag2">20대</option>
//             <option value="tag3">30대</option>
//             <option value="tag4">40대</option>
//             <option value="tag5">50대 이상</option>
//             <option value="tag6">무관</option>
//           </select>
//           <select className="form-dropdown">
//             <option value="" disabled selected>직업</option>
//             <option value="tag1">학생</option>
//             <option value="tag2">직장인</option>
//             <option value="tag3">프리랜서</option>
//             <option value="tag4">기타</option>
//             <option value="tag5">무관</option>
//           </select>
//           <select className="form-dropdown">
//             <option value="" disabled selected>연애상태</option>
//             <option value="tag1">싱글</option>
//             <option value="tag2">썸</option>
//             <option value="tag3">연애</option>
//             <option value="tag4">결혼</option>
//             <option value="tag5">무관</option>
//           </select>
//           <select className="form-dropdown">
//             <option value="" disabled selected>MBTI</option>
//             <option value="tag1">ENFJ</option>
//             <option value="tag2">ENFP</option>
//             <option value="tag3">ENTJ</option>
//             <option value="tag4">ENTP</option>
//             <option value="tag5">ESFJ</option>
//             <option value="tag6">ESFP</option>
//             <option value="tag7">ESTJ</option>
//             <option value="tag8">ESTP</option>
//             <option value="tag9">INFJ</option>
//             <option value="tag10">INFP</option>
//             <option value="tag11">INTJ</option>
//             <option value="tag12">ISTP</option>
//             <option value="tag13">ISFJ</option>
//             <option value="tag14">ISFP</option>
//             <option value="tag15">ISTJ</option>
//             <option value="tag16">ISTP</option>
//           </select>
//           <select className="form-dropdown">
//             <option value="" disabled selected>상대방 MBTI</option>
//             <option value="tag1">ENFJ</option>
//             <option value="tag2">ENFP</option>
//             <option value="tag3">ENTJ</option>
//             <option value="tag4">ENTP</option>
//             <option value="tag5">ESFJ</option>
//             <option value="tag6">ESFP</option>
//             <option value="tag7">ESTJ</option>
//             <option value="tag8">ESTP</option>
//             <option value="tag9">INFJ</option>
//             <option value="tag10">INFP</option>
//             <option value="tag11">INTJ</option>
//             <option value="tag12">ISTP</option>
//             <option value="tag13">ISFJ</option>
//             <option value="tag14">ISFP</option>
//             <option value="tag15">ISTJ</option>
//             <option value="tag16">ISTP</option>
//           </select>
//           <select className="form-dropdown">
//             <option value="" disabled selected>컨츄리코드</option>
//             <option value="tag1">KOR</option>
//             <option value="tag2">USA</option>
//             <option value="tag3">ESP</option>
//             <option value="tag4">JPN</option>
//             <option value="tag5">CHN</option>
//             <option value="tag6">VIE</option>
//             <option value="tag7">DEU</option>
//             <option value="tag8">FRN</option>
//           </select>
//           <label htmlFor="hobby" className="form-label">취미</label>
//           <input type="text" id="hobby" className="form-input" />
//         </div>
//       </div>
//       <div className="form-group tag-section">
//         <div className="dropdown-container">
//           <label htmlFor="1-depth" className="dropdown-label">1-depth</label>
//           <select className="form-dropdown">
//             <option value="" disabled selected>연애상태</option>
//             <option value="tag1">싱글</option>
//             <option value="tag2">썸</option>
//             <option value="tag3">연애</option>
//             <option value="tag4">결혼</option>
//             <option value="tag5">무관</option>
//           </select>
//           <label htmlFor="2-depth" className="dropdown-label">2-depth</label>
//           <select className="form-dropdown">
//             <option value="" disabled selected>연애상태</option>
//             <option value="tag1">싱글</option>
//             <option value="tag2">썸</option>
//             <option value="tag3">연애</option>
//             <option value="tag4">결혼</option>
//             <option value="tag5">무관</option>
//           </select>
//           <label htmlFor="3-depth" className="dropdown-label">3-depth</label>
//           <select className="form-dropdown">
//             <option value="" disabled selected>연애상태</option>
//             <option value="tag1">싱글</option>
//             <option value="tag2">썸</option>
//             <option value="tag3">연애</option>
//             <option value="tag4">결혼</option>
//             <option value="tag5">무관</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScriptHeader;
import React from 'react';
import './ScriptHeader.css';

function ScriptHeader() {
  return (
    <div className="body-content">
      <div className="form-group">
        <label htmlFor="titleInput" className="form-label">Title:</label>
        <input type="text" id="titleInput" className="form-input" />
        <span className="form-label">Used:</span>
        <label htmlFor="used-yes" className="form-radio">Yes</label>
        <input type="radio" name="used" id="used-yes" value="yes" />
        <label htmlFor="used-no" className="form-radio">No</label>
        <input type="radio" name="used" id="used-no" value="no" defaultChecked /> 
        <span className="form-text">SN: 000000000000</span>
      </div>
      <div className="form-group tag-section">
        <span className="form-label">Tags:</span>
        <div className="dropdown-container">
          <select className="form-dropdown" id="gender" defaultValue="">
            <option value="" disabled>성별</option>
            <option value="tag1">남성</option>
            <option value="tag2">여성</option>
            <option value="tag3">무관</option>
          </select>
          <select className="form-dropdown" id="age" defaultValue="">
            <option value="" disabled>연령</option>
            <option value="tag1">10대</option>
            <option value="tag2">20대</option>
            <option value="tag3">30대</option>
            <option value="tag4">40대</option>
            <option value="tag5">50대 이상</option>
            <option value="tag6">무관</option>
          </select>
          <select className="form-dropdown" id="job" defaultValue="">
            <option value="" disabled>직업</option>
            <option value="tag1">학생</option>
            <option value="tag2">직장인</option>
            <option value="tag3">프리랜서</option>
            <option value="tag4">기타</option>
            <option value="tag5">무관</option>
          </select>
          <select className="form-dropdown" id="love" defaultValue="">
            <option value="" disabled>연애상태</option>
            <option value="tag1">싱글</option>
            <option value="tag2">썸</option>
            <option value="tag3">연애</option>
            <option value="tag4">결혼</option>
            <option value="tag5">무관</option>
          </select>
          <select className="form-dropdown" id="mbti-me" defaultValue="">
            <option value="" disabled>MBTI</option>
            <option value="tag1">ENFJ</option>
            <option value="tag2">ENFP</option>
            <option value="tag3">ENTJ</option>
            <option value="tag4">ENTP</option>
            <option value="tag5">ESFJ</option>
            <option value="tag6">ESFP</option>
            <option value="tag7">ESTJ</option>
            <option value="tag8">ESTP</option>
            <option value="tag9">INFJ</option>
            <option value="tag10">INFP</option>
            <option value="tag11">INTJ</option>
            <option value="tag12">ISTP</option>
            <option value="tag13">ISFJ</option>
            <option value="tag14">ISFP</option>
            <option value="tag15">ISTJ</option>
            <option value="tag16">ISTP</option>
          </select>
          <select className="form-dropdown" id="mbti-you" defaultValue="">
            <option value="" disabled>상대방 MBTI</option>
            <option value="tag1">ENFJ</option>
            <option value="tag2">ENFP</option>
            <option value="tag3">ENTJ</option>
            <option value="tag4">ENTP</option>
            <option value="tag5">ESFJ</option>
            <option value="tag6">ESFP</option>
            <option value="tag7">ESTJ</option>
            <option value="tag8">ESTP</option>
            <option value="tag9">INFJ</option>
            <option value="tag10">INFP</option>
            <option value="tag11">INTJ</option>
            <option value="tag12">ISTP</option>
            <option value="tag13">ISFJ</option>
            <option value="tag14">ISFP</option>
            <option value="tag15">ISTJ</option>
            <option value="tag16">ISTP</option>
          </select>
          <select className="form-dropdown" id="country" defaultValue="" autoComplete="country">
            <option value="" disabled>컨츄리코드</option>
            <option value="tag1">KOR</option>
            <option value="tag2">USA</option>
            <option value="tag3">ESP</option>
            <option value="tag4">JPN</option>
            <option value="tag5">CHN</option>
            <option value="tag6">VIE</option>
            <option value="tag7">DEU</option>
            <option value="tag8">FRN</option>
          </select>
          <label htmlFor="hobby" className="form-label">취미</label>
          <input type="text" id="hobby" className="form-input" />
        </div>
      </div>
    </div>
  );
}

export default ScriptHeader;
