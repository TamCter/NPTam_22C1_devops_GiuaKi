import { useState, useEffect } from 'react';

function About() {
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    // We will use import.meta.env.VITE_API_URL instead of process.env for Vite
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    fetch(`${apiUrl}/api/about`)
      .then(res => res.json())
      .then(data => setStudentInfo(data))
      .catch(err => console.error("Error fetching about info", err));
  }, []);

  if (!studentInfo) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Thông Tin Sinh Viên</h1>
      <ul>
        <li><strong>Họ và tên:</strong> {studentInfo.fullName}</li>
        <li><strong>Mã số sinh viên:</strong> {studentInfo.studentId}</li>
        <li><strong>Lớp:</strong> {studentInfo.class}</li>
      </ul>
    </div>
  );
}

export default About;
