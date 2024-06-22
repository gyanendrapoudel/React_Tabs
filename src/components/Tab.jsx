const Tab = ({id, company,order, title, dates, duties}) => {
  return (
    <>
      <div className="card w-50  p-4 shadow-lg ">
        <p className="mb-3 fs-3 " style={{ fontWeight: '500px' }}>
          {title}
        </p>
        <span>
          <button className="btn btn-secondary btn-sm mb-3 px-3">{company}</button>
        </span>
        <p className="mb-4 fs-5">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div
              key={index}
              className="mb-3"
              style={{
                display: 'grid',
                gridTemplateColumns: '50px 1fr',
                alignItems: 'flex-start',
              }}
            >
              <div className="">
                <i className="bi bi-caret-right-fill text-success"></i>
                <i className="bi bi-caret-right-fill text-success "></i>
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