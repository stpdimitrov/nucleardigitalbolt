import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = '/page.html';
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p>Redirecting to Flixen template...</p>
    </div>
  );
}

export default App;
