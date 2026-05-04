import React from 'react'


import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Students from "./pages/Students";
import About from "./pages About";
import NotFound from "./pages/NotFound";


function App(){
  const students = [
      {
    id: 1,
    personal: {
      name: "Rahul Sharma",
      age: 21,
      gender: "Male"
    },
    course: {
      name: "BCA",
      duration: "3 Years",
      semester: 5
    },
    marks: {
      math: 85,
      computer: 90,
      english: 78
    },
    address: {
      city: "Delhi",
      state: "Delhi"
    },
    skills: ["HTML", "CSS", "JavaScript"],
    isPassed: true
  },
  {
    id: 2,
    personal: {
      name: "Neha Verma",
      age: 22,
      gender: "Female"
    },
    course: {
      name: "MCA",
      duration: "2 Years",
      semester: 3
    },
    marks: {
      math: 92,
      computer: 95,
      english: 88
    },
    address: {
      city: "Chandigarh",
      state: "Punjab"
    },
    skills: ["React", "Node.js", "MongoDB"],
    isPassed: true
  },
  {
    id: 3,
    personal: {
      name: "Amit Kumar",
      age: 20,
      gender: "Male"
    },
    course: {
      name: "BTech",
      duration: "4 Years",
      semester: 6
    },
    marks: {
      math: 70,
      computer: 75,
      english: 65
    },
    address: {
      city: "Panipat",
      state: "Haryana"
    },
    skills: ["C++", "Java", "DSA"],
    isPassed: true
  },
  {
    id: 4,
    personal: {
      name: "Priya Singh",
      age: 23,
      gender: "Female"
    },
    course: {
      name: "MBA",
      duration: "2 Years",
      semester: 2
    },
    marks: {
      math: 60,
      computer: 65,
      english: 70
    },
    address: {
      city: "Lucknow",
      state: "UP"
    },
    skills: ["Management", "Excel", "Communication"],
    isPassed: false
  },
  {
    id: 5,
    personal: {
      name: "Rohit Yadav",
      age: 21,
      gender: "Male"
    },
    course: {
      name: "BSc",
      duration: "3 Years",
      semester: 4
    },
    marks: {
      math: 88,
      computer: 82,
      english: 80
    },
    address: {
      city: "Jaipur",
      state: "Rajasthan"
    },
    skills: ["Python", "Data Analysis", "SQL"],
    isPassed: true
  }
];
retrun (
  <BrowserRouter>
  <Header/>
  <main style={{padding: "20px"}}>
    <Routes>
      
    <Route path="/" element={<Home />}/>
    <Route path="/students" element={<Students students={students} />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
  </main>
  <Footer/>
  </BrowserRouter>
);
  
}

export default App;
