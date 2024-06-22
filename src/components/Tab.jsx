const Tab = ({id, company,order, title, dates, duties}) => {
  return (
    <>
      <div className="card w-50  p-4 shadow-lg " >

        <h4 className="mb-3">{title}</h4>
        <button className="btn btn-dark w-25 mb-3">{company}</button>
        <h5 className="mb-4">{dates}</h5>
        {duties.map((duty,index)=>{
            return (
              <div key={index} className="mb-3" style={{display:"grid",gridTemplateColumns:"50px 1fr", alignItems:"flex-start"}}>
             
                <div className="">
                  <i className="bi bi-caret-right-fill"></i>
                  <i className="bi bi-caret-right-fill "></i>
                </div>
                <div className="">{duty}</div>
              </div>
            )
        })}
        </div>
    </>
  )
}
export default Tab