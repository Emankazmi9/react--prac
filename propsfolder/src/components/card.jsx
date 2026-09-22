import {Bookmark} from "lucide-react"

const Card = (props) => {
  return (
    <>

<div className="card">
  <div className="card-top">
  <div className="top">
    <img src={props.companyLogo} alt={props.companyName} />
    <button>Save <Bookmark size={12} /></button>
  </div>
  <div className="center">
    <div className="tag1">
    <h4>{props.companyName}</h4>
    <p>{props.time}</p>
    </div>
    <h3>{props.position}</h3>
    <div className="tag2">
      <h5>{props.tag1}</h5>
      <h5>{props.tag2}</h5>
    </div>
  </div>
  </div>
  <div className="bottom">
    <div className="tag3">
    <h3>{props.salary}</h3>
    <p>{props.location}</p>
    </div>
    <button>Apply now</button>
  </div>
</div>

    </>
  )
}
 
export default Card

