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
  updateConnect,
  deleteScript
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

  const [inputs, setInputs] = useState({ title: '' });

  useEffect(() => {
    if (mode === 'edit' && id) {
      const fetchScript = async () => {
        const script = await getScript(id);
        console.dir(script);        
        if (script) {
          // 스크립트 데이터를 상태에 설정하는 로직 추가    
          //console.log(script.background);
          const sanitizedScript = {            
            id: 0,
            inputs: {
              ...script,               
            }          
          }
          console.dir([JSON.parse(JSON.stringify(sanitizedScript)), JSON.parse(JSON.stringify({...sanitizedScript, id: 1}))]); 
          console.log('위가 sanitizedScript, 아래가 init'); 
          console.dir([JSON.parse(JSON.stringify(initialScript)), JSON.parse(JSON.stringify({...initialScript, id: 1}))]);
          // console.log('sanitizedScript'); 
          // console.dir(sanitizedScript);   
          setEasyScripts([sanitizedScript, sanitizedScript]);
          console.log('easyScripts ======'); 
          console.dir(easyScripts);
          // setNormalScripts([sanitizedScript, sanitizedScript]);
          // setDifficultScripts([sanitizedScript, sanitizedScript]); 
        }
      };
      fetchScript();
    }
  }, [mode, id]);

  const handleCopyScripts = () => {
    alert('스크립트가 복사되었습니다.');
  };

  const handleInputChange = (name, value) => {
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  };

  const renderContent = (scripts, setScripts, availableIds, setAvailableIds) => (
    <div>
      {scripts.map(script => (
        <ScriptContent
          key={script.id}
          id={script.id}          
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
      await createScript({
        languagecode: script.inputs.languagecode,
        background: script.inputs.background,
        humancount: script.inputs.humancount,
        humanA: script.inputs.humanA,
        humanB: script.inputs.humanB,
        humanC: script.inputs.humanC,
        humanD: script.inputs.humanD,
        script: script.inputs.script,
        note: script.inputs.note,
        names: ['', ''], 
        type: level
      });

      const headerData = {
        title: script.inputs.title,
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
        languagecode: script.inputs.languagecode,
        background: script.inputs.background,
        humancount: script.inputs.humancount,
        humanA: script.inputs.humanA,
        humanB: script.inputs.humanB,
        humanC: script.inputs.humanC,
        humanD: script.inputs.humanD,
        script: script.inputs.script,
        note: script.inputs.note,
        names: ['', ''], 
        type: level
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
      
      try {
        const response = '';
        //const response = await postCustomizeData(headerData);
        console.log('Response Data:', response);
        console.log('======headerData: ', headerData);
      } catch (error) {
        console.error('Error:', error);
      }
      alert('11');
      const scriptId = await createScript(scriptData);
      console.log('scriptId: '+scriptId); 
      updateConnect(id, scriptId, "Customize", connectData);
    }
  };

  const handleSaveAndTestAPIs = async () => {
    if (mode === 'create') {      
      await saveScripts(easyScripts, 'easy');
      // await saveScripts(normalScripts, 'normal');
      // await saveScripts(difficultScripts, 'difficult');
    } else if (mode === 'edit' && id) {
      await updateScript(id, easyScripts);
      await updateScript(id, normalScripts);
      await updateScript(id, difficultScripts);
    }

    navigate('/customize_list');
  };

  return (
    <div className="Customize">
      <AdminHeader title="Customize Page" description="나의 개성을 살리는 Personalized 영어학습" />
      <div className="body-content">
        <ScriptHeader 
          inputs={inputs} // inputs 전달
          onInputChange={handleInputChange} // onInputChange 전달
        />
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
