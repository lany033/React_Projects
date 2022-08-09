import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
import TaskListComponent from './components/container/task_list';
import RegisterFormik from './components/pure/forms/registerFormik';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';


function AppRoutingFinal() {

  let loggedIn = false

  return (
    <Router>
      <Routes>
        <Route path='/' element = { loggedIn ? <Navigate from = '/' to='/dashboard'/> : <Navigate from = '/' to='/login'/>}></Route>
        <Route element={<NotFoundPage/>}></Route>
        <Route path = '/login' element={<LoginPage/>}></Route>
        <Route path = '/register' element={<RegisterFormik/>}></Route>
        <Route path='/dashboard' element = { loggedIn ? <Dashboard/> : <Navigate from = '/' to='/login'/>}></Route>
        <Route path='/tasks' element = { loggedIn ? <TaskListComponent/> : <Navigate from = '/' to='/login'/>}></Route>
      </Routes>
    </Router>
   
  );
}

export default AppRoutingFinal;
