import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TaskListPage from './pages/TaskListPage'
import TaskPage from './pages/TaskPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path='/' exact component={HomePage} />
          <Route path='/task-lists/:taskListId' exact component={TaskListPage} />
          <Route path='/task-lists/:taskListId/tasks/:taskId' exact component={TaskPage} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
