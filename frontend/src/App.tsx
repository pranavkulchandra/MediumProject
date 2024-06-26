import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { SingIn } from './pages/SignIn'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { AppBar } from './components/AppBar'
import { Publish } from './pages/publish'
import { RecoilRoot } from 'recoil'
import Init from './components/Init'




function App() {

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <AppBar />
        <Init />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Signup />} />
            <Route path='/signin' element={<SingIn />} />
            <Route path='/blog/:id' element={<Blog />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/publish' element={<Publish />} />
          </Routes>
        </BrowserRouter>
       </RecoilRoot>

    </>
  )
}

export default App