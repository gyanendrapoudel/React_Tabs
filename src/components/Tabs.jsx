import Tab from "./Tab"

const Tabs = ({tabs}) => {
  return (
    <div>
        {tabs.map((tab)=>{
            return <Tab {...tab} key={tab.id}/>
        })}
    </div>
  )
}
export default Tabs