import React from 'react';
import './ScriptHeader.css';

function ScriptHeader({ inputs, onInputChange }) { // props를 받도록 수정
  return (
    <div className="header-content">
      <h1>CUSTOMIZE 입력</h1>
      <div className="form-group">
        <div className='title-group'>
          <div className="row-group">
            <label htmlFor="titleInput" className="form-label">COVER</label>
            <div className="column-group">
              <label htmlFor="titleInput" className="form-label sub-label">COVER TITLE</label>
              <input type="text" id="titleInput" className="form-input"           
              value={inputs.title}
              onChange={(e) => onInputChange('title', e.target.value)} 
              placeholder="표제를 입력해주세요" 
              />
            </div>  
          </div>
        </div>
        
        <div className='used-group'>
          <span className="form-label">Used:</span>
          <label htmlFor="used-yes" className="form-radio">Yes</label>
          <input type="radio" name="used" id="used-yes" value="yes" />
          <label htmlFor="used-no" className="form-radio">No</label>
          <input type="radio" name="used" id="used-no" value="no" defaultChecked /> 
        </div>        
        <div className="column-group">
          <label className="form-label sub-label">Serial Number</label>
          <input type="text" id="titleInput" className="form-input"           
          value={inputs.title}
          onChange={(e) => onInputChange('title', e.target.value)}           
          />
        </div>        
      </div>
      <div className="form-group tag-section">
        <div className="dropdown-container">          
        <div className="row-group">
          <label className="form-label">TAG</label>   
          <div className="dropdown-container">
            <div className="column-group">
              <label htmlFor="mbti-me" className="form-label sub-label">MBTI</label>
              <select className="form-dropdown" id="mbti-me" defaultValue="">
                <option value="" disabled>선택</option>
                <option value="ENFJ">ENFJ</option>
                <option value="ENFP">ENFP</option>
                <option value="ENTJ">ENTJ</option>
                <option value="ENTP">ENTP</option>
                <option value="ESFJ">ESFJ</option>
                <option value="ESFP">ESFP</option>
                <option value="ESTJ">ESTJ</option>
                <option value="ESTP">ESTP</option>
                <option value="INFJ">INFJ</option>
                <option value="INFP">INFP</option>
                <option value="INTJ">INTJ</option>
                <option value="ISTP">ISTP</option>
                <option value="ISFJ">ISFJ</option>
                <option value="ISFP">ISFP</option>
                <option value="ISTJ">ISTJ</option>
                <option value="ISTP">ISTP</option>
              </select>
            </div>
            <div className="column-group">
              <label htmlFor="gender" className="form-label sub-label">SEX</label>
              <select className="form-dropdown" id="gender" defaultValue="">
                <option value="" disabled>성별</option>
                <option value="남성">남성</option>
                <option value="여성">여성</option>
                <option value="무관">무관</option>
              </select>
            </div>
            <div className="column-group">
              <label htmlFor="age" className="form-label sub-label">AGE</label>
              <select className="form-dropdown" id="age" defaultValue="">
                <option value="" disabled>선택</option>
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대">40대</option>
                <option value="50대 이상">50대 이상</option>
                <option value="무관">무관</option>
              </select>
            </div>
            <div className="column-group">
              <label htmlFor="job" className="form-label sub-label">JOB</label>
              <select className="form-dropdown" id="job" defaultValue="">
                <option value="" disabled>선택</option>
                <option value="학생">학생</option>
                <option value="직장인">직장인</option>
                <option value="프리랜서">프리랜서</option>
                <option value="기타">기타</option>
                <option value="무관">무관</option>
              </select>
            </div>
            <div className="column-group">
              <label htmlFor="love" className="form-label sub-label">LOVE</label>
              <select className="form-dropdown" id="love" defaultValue="">
                <option value="" disabled>선택</option>
                <option value="싱글">싱글</option>
                <option value="썸">썸</option>
                <option value="연애">연애</option>
                <option value="결혼">결혼</option>
                <option value="무관">무관</option>
              </select>
            </div>
            <div className="column-group">
              <label htmlFor="mbti-you" className="form-label sub-label">counter MBTI</label>
              <select className="form-dropdown" id="mbti-you" defaultValue="">
                <option value="" disabled>선택</option>
                <option value="ENFJ">ENFJ</option>
                <option value="ENFP">ENFP</option>
                <option value="ENTJ">ENTJ</option>
                <option value="ENTP">ENTP</option>
                <option value="ESFJ">ESFJ</option>
                <option value="ESFP">ESFP</option>
                <option value="ESTJ">ESTJ</option>
                <option value="ESTP">ESTP</option>
                <option value="INFJ">INFJ</option>
                <option value="INFP">INFP</option>
                <option value="INTJ">INTJ</option>
                <option value="ISTP">ISTP</option>
                <option value="ISFJ">ISFJ</option>
                <option value="ISFP">ISFP</option>
                <option value="ISTJ">ISTJ</option>
                <option value="ISTP">ISTP</option>
              </select>
            </div>
            <div className="column-group">
              <label htmlFor="country" className="form-label sub-label">Culture</label>
              <select className="form-dropdown" id="country" defaultValue="" autoComplete="country">
                <option value="" disabled>선택</option>
                <option value="KOR">KOR</option>
                <option value="USA">USA</option>
                <option value="ESP">ESP</option>
                <option value="JPN">JPN</option>
                <option value="CHN">CHN</option>
                <option value="VIE">VIE</option>
                <option value="DEU">DEU</option>
                <option value="FRN">FRN</option>
              </select>
            </div>
            <div className="column-group">
              <label htmlFor="hobby" className="form-label sub-label">HABIT</label>
              <input type="text" id="hobby" className="form-input" placeholder="취미를 입력하세요" />
            </div>
          </div>
         </div>
        </div>      
       </div>
      <div className='depth-group'>
        <div className="row-group">
          <div className="column-group">
            <label htmlFor="mbti-me" className="form-label sub-label">1Depth</label>
            <select className="form-dropdown" id="mbti-me" defaultValue="">
              <option value="" disabled>선택</option>

            </select>
          </div>
          <div className="column-group">
            <label htmlFor="mbti-me" className="form-label sub-label">2Depth</label>
            <select className="form-dropdown" id="mbti-me" defaultValue="">
              <option value="" disabled>선택</option>

            </select>
          </div>
          <div className="column-group">
            <label htmlFor="mbti-me" className="form-label sub-label">3Depth</label>
            <select className="form-dropdown" id="mbti-me" defaultValue="">
              <option value="" disabled>선택</option>

            </select>
          </div>
          <button className='button-add'
                  type="button" 
                  onClick={() => alert('11')} 
                  //disabled={inputs.names.length >= 4}
                >추가하기</button>
        </div>        
      </div>
      
      <label className="form-label" id="file-label">FILE</label>
      <div className="file-group">
        <div className="row-group">
        <div className="column-group">
          <label htmlFor="mbti-me" className="form-label sub-label">IMAGE</label>
          <input type="text" className="form-input file-input" id="image-input"           
              value={inputs.title}
              onChange={(e) => onInputChange('title', e.target.value)} 
              placeholder="이미지를 첨부해주세요" 
              />
        </div>
        <button className='button-add'
                type="button" 
                onClick={() => alert('11')} 
                //disabled={inputs.names.length >= 4}
              >추가하기</button>    
        </div>
        <div className="column-group">
          <label htmlFor="mbti-me" className="form-label sub-label file-input">LINK</label>
          <input type="text" className="form-input file-input"           
              value={inputs.title}
              onChange={(e) => onInputChange('title', e.target.value)} 
              placeholder="이미지를 첨부해주세요" 
              />
        </div>
        <div className="column-group">
          <label htmlFor="mbti-me" className="form-label sub-label file-input">MEMO</label>
          <input type="text" className="form-input file-input"           
              value={inputs.title}
              onChange={(e) => onInputChange('title', e.target.value)} 
              placeholder="이미지를 첨부해주세요" 
              />
        </div>
        <div className='language-group'>
          <div className="row-group">
            <div className="column-group">
              <label htmlFor="mbti-me" className="form-label sub-label">LANGUAGE</label>
              <select className="form-dropdown" defaultValue="">
                <option value="" disabled>선택</option>
              </select>
            </div>
            <div className="column-group">
              <label htmlFor="mbti-me" className="form-label sub-label">TITLE</label>
              <input type="text" className="form-input file-input"           
              value={inputs.title}
              onChange={(e) => onInputChange('title', e.target.value)} 
              placeholder="제목을 입력하세요" 
              />
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
}

export default ScriptHeader;