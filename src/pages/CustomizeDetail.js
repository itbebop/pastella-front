import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import ScriptHeader from '../components/ScriptHeader';
import ScriptContent, { initialScript } from '../components/ScriptContent';
import ScriptFooter from '../components/ScriptFooter';
import '../components/CustomizeDetail.css';
import {
  handleAddScript,
  handleDeleteScript,
  handleInputChange,
  handleAddName,
  handleRemoveName,
  handleAddStudyPoint,
  handleRemoveStudyPoint,
  getScripts,
  updateScript,
  getScript,
  createScript,
  postCustomizeData,
  updateConnect
} from '../components/ScriptHandlers';

function CustomizeDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, id } = location.state || {};

  const [activeTab, setActiveTab] = useState('easy');
  const [easyScripts, setEasyScripts] = useState([JSON.parse(JSON.stringify(initialScript)), JSON.parse(JSON.stringify({...initialScript, id: 1}))]);
  const [normalScripts, setNormalScripts] = useState([JSON.parse(JSON.stringify(initialScript)), JSON.parse(JSON.stringify({...initialScript, id: 1}))]);
  const [difficultScripts, setDifficultScripts] = useState([JSON.parse(JSON.stringify(initialScript)), JSON.parse(JSON.stringify({...initialScript, id: 1}))]);
  const [availableEasyIds, setAvailableEasyIds] = useState([2, 3, 4]);
  const [availableNormalIds, setAvailableNormalIds] = useState([2, 3, 4]);
  const [availableDifficultIds, setAvailableDifficultIds] = useState([2, 3, 4]);

  useEffect(() => {
    if (mode === 'edit' && id) {
      // id로 스크립트를 가져와서 state를 설정합니다.
      const fetchScript = async () => {        
        const script = await getScript(id);
        console.log(script);
        // 스크립트를 state에 설정하는 로직을 추가하세요.
        // 예를 들어, easyScripts, normalScripts, difficultScripts 중 하나에 설정할 수 있습니다.
      };
      fetchScript();
    }
  }, [mode, id]);

  const handleCopyScripts = () => {
    alert('스크립트가 복사되었습니다.');
  };  

  const renderContent = (scripts, setScripts, availableIds, setAvailableIds) => (
    <div>
      {scripts.map(script => (
        <ScriptContent
          key={script.id}
          id={script.id}
          // title={`언어코드 ${script.id}`}
          inputs={script.inputs}
          onDelete={() => handleDeleteScript(setScripts, scripts, setAvailableIds, script.id)}
          onInputChange={(inputName, value) => handleInputChange(setScripts, scripts, script.id, inputName, value)}
          onAddName={() => handleAddName(scripts, setScripts, script.id)}
          onRemoveName={() => handleRemoveName(scripts, setScripts, script.id)}
          onAddStudyPoint={() => handleAddStudyPoint(scripts, setScripts, script.id)}
          onRemoveStudyPoint={() => handleRemoveStudyPoint(scripts, setScripts, script.id)}
        />
      ))}
      <button onClick={() => handleAddScript(setScripts, scripts, setAvailableIds, availableIds)} className="add-script-button">Add Script</button>
    </div>
  );



  const saveScripts = async (scripts, level) => {
    for (const script of scripts) {
      // console.log('Saving script with the following inputs:');
      // console.log('languagecode:', script.inputs.languagecode);
      // console.log('background:', script.inputs.background);
      // console.log('humancount:', script.inputs.humancount);
      // console.log('humanA:', script.inputs.humanA);
      // console.log('humanB:', script.inputs.humanB);
      // console.log('humanC:', script.inputs.humanC);
      // console.log('humanD:', script.inputs.humanD);
      // console.log('script:', script.inputs.script);
      // console.log('note:', script.inputs.note);
      // console.log('type:', level);

      // await createScript({
      //   languagecode: script.inputs.languagecode,
      //   background: script.inputs.background,
      //   humancount: script.inputs.humancount,
      //   humanA: script.inputs.humanA,
      //   humanB: script.inputs.humanB,
      //   humanC: script.inputs.humanC,
      //   humanD: script.inputs.humanD,
      //   script: script.inputs.script,
      //   note: script.inputs.note,
      //   type: level
      // });

      // 데이터 객체 생성
      const customizeData = {
        title: "Sample Title",
        sex: "male",
        age: "30",
        job: "Engineer",
        love: "Single",
        mbti: "INTJ",
        partnermbti: "ENFP",
        countrycode: "US",
        hubby: "Reading",
        imageurl: "http://example.com/image.jpg",
        memo: "Sample memo",
        link: "http://example.com",
        used: false
      };

      const scriptData = {
        // languagecode: script.inputs.languagecode,
        // background: script.inputs.background,
        // humancount: script.inputs.humancount,
        // humanA: script.inputs.humanA,
        // humanB: script.inputs.humanB,
        // humanC: script.inputs.humanC,
        // humanD: script.inputs.humanD,
        // script: script.inputs.script,
        // note: script.inputs.note,
        // type: level
        languagecode: "en",  // 예: 영어
        background: "background.jpg",  // 예: 배경 이미지 파일명
        humancount: 4,  // 예: 4명
        humanA: "John",  // 예: 사람 A의 이름
        humanB: "Doe",  // 예: 사람 B의 이름
        humanC: "Alice",  // 예: 사람 C의 이름
        humanD: "Bob",  // 예: 사람 D의 이름
        script: "This is a sample script.",  // 예: 스크립트 내용
        note: "This is a sample note.",  // 예: 노트 내용
        type: "custom"  // 예: 레벨 타입
      };

      const connectData = {
        "title": "Updated Sample Title",
        "sex": "male",
        "age": "35",
        "job": "Senior Engineer",
        "love": "Single",
        "mbti": "INTJ",
        "partnermbti": "ENFP",
        "countrycode": "US",
        "hubby": "Reading",
        "imageurl": "http://example.com/image.jpg",
        "memo": "Updated sample memo",
        "link": "http://example.com",
        "type": "easy",
        "used": false
      }
      
      console.log('customizeData', customizeData);
      try {
        const response = await postCustomizeData(customizeData);
        console.log('Response Data:', response);
      } catch (error) {
        console.error('Error:', error);
      }
      const scriptId = await createScript(scriptData);
      updateConnect(id, scriptId, "Customize", connectData);
      // updateConnect = async (connect_id, scriptId, type, data) => {
    }
  };

  const handleSaveAndTestAPIs = async () => {
    // await saveScripts(easyScripts, 'easy');
    // await saveScripts(normalScripts, 'normal');
    // await saveScripts(difficultScripts, 'difficult');

    console.log('mode', mode);
    if (mode === 'create') {
      await saveScripts(easyScripts, 'easy');
      await saveScripts(normalScripts, 'normal');
      await saveScripts(difficultScripts, 'difficult');
    } else if (mode === 'edit' && id) {
      // 수정 로직을 추가하세요.
      // 예를 들어, updateScript를 사용하여 수정된 스크립트를 서버에 저장할 수 있습니다.
      await updateScript(id, easyScripts);
      await updateScript(id, normalScripts);
      await updateScript(id, difficultScripts);
    }

    // 저장이 완료된 후 목록 페이지로 이동
    // navigate('/customize_list');
  };

  return (
    <div className="Customize">
      <AdminHeader title="Customize Page" description="나의 개성을 살리는 Personalized 영어학습" />
      <div className="body-content">
        <ScriptHeader />
        <div className="tabs">
          <button onClick={() => setActiveTab('easy')} className={activeTab === 'easy' ? 'active' : ''}>Easy</button>
          <button onClick={() => setActiveTab('normal')} className={activeTab === 'normal' ? 'active' : ''}>Normal</button>
          <button onClick={() => setActiveTab('difficult')} className={activeTab === 'difficult' ? 'active' : ''}>Difficult</button>
        </div>
        <div className="tab-content">
          {activeTab === 'easy' && renderContent(easyScripts, setEasyScripts, availableEasyIds, setAvailableEasyIds)}
          {activeTab === 'normal' && renderContent(normalScripts, setNormalScripts, availableNormalIds, setAvailableNormalIds)}
          {activeTab === 'difficult' && renderContent(difficultScripts, setDifficultScripts, availableDifficultIds, setAvailableDifficultIds)}
        </div>
        <ScriptFooter />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/customize_list">목록으로</Link>
        <button onClick={handleCopyScripts}>스크립트 복사</button>
        <button onClick={handleSaveAndTestAPIs}>스크립트 저장</button>
      </nav>
    </div>
  );
}

export default CustomizeDetail;
