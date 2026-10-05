import { useState } from 'react';
import { lecturers } from '../data/lecturers';
import LecturerCard from '../components/LecturerCard';
import LecturerModal from '../components/LecturerModal';

function LecturersPage() {
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [filter, setFilter] = useState('all');

  const allDisciplines = ['all', ...new Set(lecturers.flatMap(l => l.disciplines.map(d => d.title)))];

  const filteredLecturers = filter === 'all'
    ? lecturers
    : lecturers.filter(l => l.disciplines.some(d => d.title === filter));

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f0f4f8', minHeight: '80vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', color: '#2c3e50' }}>Наши лекторы</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px', maxWidth: '1000px', margin: '0 auto 40px auto' }}>
        {allDisciplines.map((disc, index) => (
          <button
            key={index}
            onClick={() => setFilter(disc)}
            style={{
              padding: '10px 20px',
              borderRadius: '25px',
              border: 'none',
              background: filter === disc
                ? 'linear-gradient(90deg, #9ac1eb, #b3d0f2)'
                : 'white',
              color: filter === disc ? 'white' : '#1a73e8',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
            {disc === 'all' ? 'Все' : disc}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
        {filteredLecturers.map((lecturer) => (
          <LecturerCard
            key={lecturer.id}
            lecturer={lecturer}
            onShowDetails={setSelectedLecturer}
          />
        ))}
      </div>

      {selectedLecturer && (
        <LecturerModal
          lecturer={selectedLecturer}
          onClose={() => setSelectedLecturer(null)}
        />
      )}
    </div>
  );
}

export default LecturersPage;