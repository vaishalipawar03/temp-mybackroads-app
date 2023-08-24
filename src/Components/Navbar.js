import logo from '../images/logo.svg';
// import { socialLinks } from './data';
import PageLink from './PageLink';
import SocialLink from './SocialLink';



const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <PageLink parentClass="nav-links" itemClass="nav-link"/>
      <SocialLink parentClass="nav-icon" itemClass="nav-icon"/>
      

      {/* <ul className="nav-icons">
        {
            socialLinks.map((socialLink) =>{
                return (
                    <li key={socialLink.id}>
          <a href={socialLink.href} target="_blank"  rel="noreferrer" className="nav-icon"
            ><i className={socialLink.icon}></i>
          </a>
        </li> )}
            )}
        
        
      </ul> */}
    </div>
  </nav>

  );
}
export default Navbar