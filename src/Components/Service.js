import { services } from "./data"

const Service = () => {
  return (
    <div className="section-center services-center">
      {services.map((service) =>{
        return( 
          <article className="service">
        <span className="service-icon"><i className={service.icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{service.serviceTitle}</h4>
          <p className="service-text">
            {service.serviceDescription}
          </p>
        </div>
      </article>
        )
      })}
      

      
    </div>
  )
}
export default Service