const API_BASE_URL = "http://222.239.250.156:8000";
// const API_BASE_URL = "http://127.0.0.1:8000";
// const API_BASE_URL = "localhost:3000";
// const API_BASE_URL = "http://127.0.0.1:3000";
// const API_BASE_URL = "localhost:8000";

export const handleAddScript = (setScripts, scripts, setAvailableIds, availableIds) => {
  if (availableIds.length > 0) {
    const newId = availableIds[0];
    setScripts([...scripts, { 
      id: newId, 
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
    }]);
    setAvailableIds(availableIds.slice(1));
  } else {
    alert('스크립트는 최대 3개까지 추가할 수 있습니다.');
  }
};

export const handleDeleteScript = (setScripts, scripts, setAvailableIds, id) => {
  setScripts(scripts.filter(script => script.id !== id));
  setAvailableIds(prevIds => [...prevIds, id].sort());
};

export const handleInputChange = (setScripts, scripts, id, inputName, value) => {
  const newScripts = scripts.map(script => {
    if (script.id === id) {
      const newInputs = { ...script.inputs };
      const inputNames = inputName.split('.');
      // if (inputNames.length === 2) {
      //   newInputs[inputNames[0]][parseInt(inputNames[1])] = value;
      // } else if (inputNames.length === 3) {
      //   newInputs[inputNames[0]][parseInt(inputNames[1])][inputNames[2]] = value;
      // } else {
      //   newInputs[inputName] = value;
      // }
      return { ...script, inputs: newInputs };
    }
    return script;
  });
  setScripts(newScripts);
};

export const handleAddName = (scripts, setScripts, id) => {
  const newScripts = scripts.map(script => {
    if (script.id === id && script.inputs.names.length < 4) {
      return { ...script, inputs: { ...script.inputs, names: [...script.inputs.names, ''] } };
    }
    return script;
  });
  setScripts(newScripts);
};

export const handleRemoveName = (scripts, setScripts, id) => {
  const newScripts = scripts.map(script => {
    if (script.id === id && script.inputs.names.length > 2) {
      const newNames = script.inputs.names.slice(0, -1);
      return { ...script, inputs: { ...script.inputs, names: newNames } };
    }
    return script;
  });
  setScripts(newScripts);
};

export const handleAddStudyPoint = (scripts, setScripts, id) => {
  const newScripts = scripts.map(script => {
    if (script.id === id) {
      return { ...script, inputs: { ...script.inputs, studyPoints: [...script.inputs.studyPoints, { point1: '', point2: '' }] } };
    }
    return script;
  });
  setScripts(newScripts);
};

export const handleRemoveStudyPoint = (scripts, setScripts, id) => {
  const newScripts = scripts.map(script => {
    if (script.id === id && script.inputs.studyPoints.length > 1) {
      const newStudyPoints = script.inputs.studyPoints.slice(0, -1);
      return { ...script, inputs: { ...script.inputs, studyPoints: newStudyPoints } };
    }
    return script;
  });
  setScripts(newScripts);
};

export const handleSaveScripts = async () => {
  const payload = {
    languagecode: "EN",
    background: "School",
    humancount: 2,
    humanA: "John",
    humanB: "Doe",
    humanC: "",
    humanD: "",
    script: "Hello, how are you?",
    note: "Introduction",
    type: "easy"
  };
  
  try {
    const response = await fetch(`${API_BASE_URL}/kor-script/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      alert(`스크립트가 저장되었습니다. ID: ${data.id}, Type: ${data.type}`);
    } else {
      alert('저장 중 오류가 발생했습니다.');
    }
  } catch (error) {
    alert('저장 중 오류가 발생했습니다.');
  }
};

// 추가된 함수들
// POST /kor-script/connect?type=customize
export const postCustomizeData = async (data) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/connect?type=customize`, {
  // const response = await fetch(`/kor-script/connect?type=customize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  console.log('postCustomizeData(POST /kor-script/connect?type=customize), method: POST, headers: { "Content-Type": "application/json" }, body: ', data, ', response: ', responseData);
  return responseData;
};

// GET /kor-script/customize/pagination?page=1&limit=10
export const getCustomizedScripts = async (page, limit) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/customize/pagination?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log('getCustomizedScripts(GET /kor-script/customize/pagination), method: GET, headers: { "Content-Type": "application/json" }, ', data);
  return data;
};






// GET /endpoints/
export const getEndpoints = async () => {
  const response = await fetch(`${API_BASE_URL}/endpoints/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  console.log('getEndpoints(GET /endpoints/), method: GET, headers: { "Content-Type": "application/json" }, ', data);
  return data;
};

// GET /kor-script/init
export const getScripts = async (page = 1, limit = 10) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/init?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  console.log('getScripts(GET /kor-script/init), method: GET, headers: { "Content-Type": "application/json" }, ', data);
  return data;
};

// PUT /kor-script/{script_id}
export const updateScript = async (script_id, script) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/${script_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(script)
  });
  const data = await response.json();
  console.log(`updateScript(PUT /kor-script/${script_id}), method: PUT, headers: { "Content-Type": "application/json" }, body: `, script, ', response: ', data);
  return data;
};

// POST /kor-script/create
export const createScript = async (script) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(script)
  });
  const data = await response.json();
  console.log('createScript(POST /kor-script/create), method: POST, headers: { "Content-Type": "application/json" }, body: ', script, ', response: ', data);
  return data;
};

// DELETE /kor-script/connect/1?type=customize
export const deleteScript = async (script_id) => {
  alert(script_id);
  const response = await fetch(`${API_BASE_URL}/kor-script/connect/${script_id}?type=customize`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  console.log(`deleteScript(DELETE /kor-script/${script_id}), method: DELETE, headers: { "Content-Type": "application/json" }, response: `, data);
  return data;
};

// GET /kor-script/{script_id}
export const getScript = async (script_id) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/${script_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  // console.log(`getScript(GET /kor-script/${script_id}), method: GET, headers: { "Content-Type": "application/json" }, response: `, data);
  console.log('====data: ');
  console.dir(data);

  return data;
};

// POST /kor-script/connect
export const connectScript = async (scriptId, type, data) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/connect?scriptId=${scriptId}&type=${type}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
  console.log(`connectScript(POST /kor-script/connect?scriptId=${scriptId}&type=${type}), method: POST, headers: { "Content-Type": "application/json" }, body: `, data, ', response: ', responseData);
  return responseData;
};

// PUT /kor-script/connect/{connect_id}
export const updateConnect = async (connect_id, scriptId, type, data) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/connect/${connect_id}?scriptId=${scriptId}&type=${type}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
  console.log(`updateConnect(PUT /kor-script/connect/${connect_id}?scriptId=${scriptId}&type=${type}), method: PUT, headers: { "Content-Type": "application/json" }, body: `, data, ', response: ', responseData);
  return responseData;
};

// DELETE /kor-script/connect/{connect_id}
export const deleteConnect = async (connect_id) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/connect/${connect_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  console.log(`deleteConnect(DELETE /kor-script/connect/${connect_id}), method: DELETE, headers: { "Content-Type": "application/json" }, response: `, data);
  return data;
};

// GET /kor-script/connect/{connect_id}
export const getConnect = async (connect_id, connectType) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/connect/${connect_id}?connectType=${connectType}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  console.log(`getConnect(GET /kor-script/connect/${connect_id}?connectType=${connectType}), method: GET, headers: { "Content-Type": "application/json" }, response: `, data);
  return data;
};

// GET /kor-script/connect/init
export const getConnects = async (connectType, page = 1, limit = 10) => {
  const response = await fetch(`${API_BASE_URL}/kor-script/connect/init?connectType=${connectType}&page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  console.log(`getConnects(GET /kor-script/connect/init?connectType=${connectType}&page=${page}&limit=${limit}), method: GET, headers: { "Content-Type": "application/json" }, response: `, data);
  return data;
};
