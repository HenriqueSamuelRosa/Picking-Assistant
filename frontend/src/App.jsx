import React from 'react';
import ExcelReader from './utils/ExcelReader';
import DataContext from './context/DataContext';

function App() {
  return (
    <DataContext.Provider>
      <div>
        <h1>Leitor de Excel</h1>
        <ExcelReader />
      </div>
    </DataContext.Provider>
  );
}

export default App;
