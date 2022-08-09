import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
import { useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/profilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false

  let taskList = [
    {
      id: 1,
      name: 'task 1',
      description: 'my first task'
    },
    {
      id: 2,
      name: 'task 2',
      description: 'my second task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials')
    console.log('user logged', logged);
  },[]);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| Home |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/tasks/1'>| Task 1 |</Link>
          <Link to='/tasks/2'>| Task 2 |</Link>
          <Link to='/login'>| LOGIN |</Link>
        </aside>
        <main>
          <Routes>
            <Route path='/' element = { <HomePage/> }/>
            <Route path='/online-state' element = { <StatePage/> }/>
            <Route path='/login' element = { logged ? <Navigate to='/'/> : <LoginPage/> }/>
            <Route path='/about' element = { <AboutPage/> }/>
            <Route path='/faqs' element = { <AboutPage/> }/>
            <Route path='/profile' element = { logged ? <ProfilePage/> : <Navigate to='/login'/>}>
              {/* {
                logged ?
                <ProfilePage/>
                :
                () => {
                  alert('You must be logged')
                  return (<Route element={<Navigate to='/login' replace={false}/>}/>)
                }
              } */}
            </Route>
            <Route path='/tasks' element= { <TasksPage/> }/>
            <Route path='/tasks/:id' render = {({match}) => (<TaskDetailPage task={taskList[match.params.id-1]}/>)}/>
            <Route element = { <NotFoundPage/> }/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
