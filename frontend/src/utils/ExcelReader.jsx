import {useState} from 'react';{ useState }
import * as XLSX from 'xlsx'

const ExcelReader = () => {
  const [jsonData, setJasonData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'});
      const sheetName = 'RawData';
      if(workbook.SheetNames.includes(sheetName)){
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setJasonData(json);
      } else {
        alert('Dados não encontrados, Tente Novamente');
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  )
}

export default ExcelReader;
