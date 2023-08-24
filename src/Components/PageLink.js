import { pagelinks } from "./data"

const PageLink = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass} id={parentClass}>
        { pagelinks.map((link)=>{
            return (
            <li key={link.id}>
                <a href={link.href}  rel="noreferrer" className={itemClass}>
                  {link.text} </a>
              </li>)
        })}

        
      </ul>
  )
}
export default PageLink