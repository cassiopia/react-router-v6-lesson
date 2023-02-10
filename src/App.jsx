import {Routes, Route, Link, Navigate} from "react-router-dom";
import './App.css';

import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/AboutPage";
import {BlogPage} from "./pages/BlogPage";
import {NotfoundPage} from "./pages/NotfoundPage";
import {SinglePage} from "./pages/SinglePage";
import {CreatePost} from "./pages/CreatePost";
import {EditPost} from "./pages/EditPost";
import {LoginPage} from "./pages/LoginPage";

import {Layout} from "./components/Layout";

import {RequireAuth} from './hoc/RequireAuth'
import {AuthProvider} from './hoc/AuthProvider'

function App() {

    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="about" element={<AboutPage/>}>
                            <Route path="contacts" element={<p>Our contact</p>} />
                            <Route path="team" element={<p>Our team</p>} />
                        </Route>
                        <Route path="about-us" element={<Navigate to="/about" replace/>}/>
                        <Route path="posts" element={<BlogPage/>}/>
                        <Route path="posts/:id" element={<SinglePage/>}/>
                        <Route path="posts/:id/edit" element={<EditPost/>}/>
                        <Route path="posts/new" element={
                            <RequireAuth>
                                <CreatePost/>
                            </RequireAuth>
                        }/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="*" element={<NotfoundPage/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App
