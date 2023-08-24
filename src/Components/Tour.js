import { tours } from "./data"

const Tour = () => {
  return (
    <div className="section-center featured-center">
      { tours.map((tour)=>{
        return(
          <article className="tour-card">
        <div className="tour-img-container">
          <img src={tour.img} className="tour-img" alt="" />
          <p className="tour-date">{tour.tourDate}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{tour.tourDate}</h4>
          </div>
          <p>
            {tour.tourDescription}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {tour.tourPlace}
            </p>
            <p>{tour.tourDuration}</p>
            <p>{tour.tourPrice}</p>
          </div>
        </div>
      </article>
        )
      })}
      
    </div>
  )
}
export default Tour