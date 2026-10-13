import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import UploadForm from './components/UploadForm';
import PatientHome from './components/PatientHome';
import PatientViewer from './components/PatientViewer';
import PatientSummary from './components/PatientSummary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/patients" replace />} />
      <Route path="/upload" element={<UploadForm />} />
      <Route path="/patients" element={<PatientHome />} />
      <Route path="/patients/:id" element={<PatientViewer />}>
        <Route path="summary" element={<PatientSummary />} />
      </Route>
    </Routes>
  )
}

export default App
