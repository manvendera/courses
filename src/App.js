import Navbar  from './components/Navbar';
import './App.css';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl,filterData } from './Data';
import { useEffect, useState } from 'react';
// import { Toast } from 'react-toastify/dist/components';

function App() {
  const [courses, setCourses] = useState(0)
  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data)
        // console.log(data);
      } catch (error) {
        console.log('something went wrong');
      }
    }
    fetchData()
  },[])
  return (
    <div className="App">
      <div><Navbar></Navbar></div>
      <div><Filter apiUrl={apiUrl} filterData={filterData}></Filter></div>
      <div><Cards courses={courses}></Cards></div>
  
  
  
    </div>
  );
}

export default App;
