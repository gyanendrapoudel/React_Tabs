import { useEffect, useState } from "react";
import Tabs from "./components/Tabs"; 
const tabsUrl = 'https://www.course-api.com/react-tabs-project'


const App = () => {
  const [ tabs, setTabs ] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchTabs = async()=>{
    setIsLoading(true)
    try{
    const response = await fetch(tabsUrl);
    const result = await response.json()
    setTabs(result)
    setIsLoading(false)
  
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchTabs()
  },[])
  console.log(tabs)
 if(isLoading){
  return <div>Loading...</div>
 }
  return (
    <div>
      <Tabs tabs ={tabs}/>
    </div>
  )
}
export default App