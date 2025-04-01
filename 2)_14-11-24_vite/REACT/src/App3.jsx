import React,{ createContext } from 'react';
const StudentContext = createContext();
import Child6 from './components/Child6';

const App3 = () => {
    const studentData = {
        name: "John Doe",
        roll: "2200320230053"
    };

  return (
    <div>
      <h1>App Component</h1>
        <StudentContext.Provider value={studentData}>
            <Child6 />
        </StudentContext.Provider>
    </div>
  )
}

export { StudentContext };
export default App3
