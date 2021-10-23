import { FC } from 'react';
import ToDoPage from './pages/ToDoApp';
import './App.scss'
import { ToDoProvider } from './contexts/ToDoContext';

const App: FC = () => {
  return (
    <ToDoProvider>
      <div className="app-container">
        <ToDoPage />
      </div>
    </ToDoProvider>
  );
}

export default App;
