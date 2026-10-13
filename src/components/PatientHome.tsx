import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import type { Patient } from "../types/Patient";

function PatientHome() {
  let patients: Patient[] = [];
  const navigate = useNavigate();
  useEffect(() => {
    if (patients.length < 1) {
        navigate('/upload', { replace: true });
    }
  }, [patients, navigate]);
  return (
    <p>PatientHome</p>
  );
}

export default PatientHome;
