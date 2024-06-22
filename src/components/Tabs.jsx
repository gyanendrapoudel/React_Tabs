import { useState } from "react"
import Tab from "./Tab"

const Tabs = ({ tabs }) => {
    const [selectedTab , setSelectedTab] = useState(tabs[0])
     const handleClick = (id) => {
       const singleTab = tabs.find((tab) => tab.id === id)
       setSelectedTab(singleTab)
     }
    console.log(selectedTab)
  return (
    <div className=" tabs mt-5">
      <div className="list-group ">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={
                tab.id === selectedTab.id
                  ? 'list-group-item btn-container text-success '
                  : 'list-group-item btn-container'
              }
            >
              {tab.company}
            </button>
          )
        })}
      </div>

      <Tab {...selectedTab} />
    </div>
  )
}
export default Tabs