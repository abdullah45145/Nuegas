import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Task from './pages/Task';
import Mentor from './pages/Mentor';
import Message from './pages/Message';
import Setting from './pages/Setting';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ">
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/task" element={<Task />} />
            <Route path="/mentors" element={<Mentor />} />
            <Route path="/message" element={<Message />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="*" element={<Overview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



