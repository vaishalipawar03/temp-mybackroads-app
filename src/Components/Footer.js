import PageLink from "./PageLink"
import SocialLink from "./SocialLink"



const Footer = () => {
  return (
    <footer className="section footer">

      <PageLink parentClass="footer-links" itemClass="footer-link"/>
    
    <SocialLink parentClass="footer-icons" itemClass="footer-icon"/>
    {/* <ul className="footer-icons">
      {
        socialLinks.map((socialLink) =>{
          return(
            <li key = {socialLink.id}>
        <a href={socialLink.href} target="_blank" className="footer-icon"
          ><i className={socialLink.icon}></i>
          </a>
      </li>
          )
        })
      }
      
      
    </ul> */}
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}
export default Footer