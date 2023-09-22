import React from "react";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import Spinner from "./Components/Spinner";
import {apiUrl,filterData} from "/data";
import {useState,useEffect} from 'react';
import {toast} from "react-toastify";


const App = () => {

  const [courses ,setCourses]= useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network issue");
    }
    setLoading(false);
  }
  useEffect( () => {
    fetchData();
  },[])

  return (
  <div className="min-h-screen flex flex-col bg-bgDark2">
    <div>
       <NavBar/>
    </div>
   <div>
     <div className="bg-bgDark2">
      <Filter
      filterData = {filterData}
      category = {category}
      setCategory = {setCategory}
      />
     </div>
     <div  className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading?(<Spinner/>):(<Cards courses={courses} category= {category}/>)
      }
     </div>
   </div>
  </div>
  )
};

export default App;
