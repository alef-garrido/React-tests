import mail from '../Mail.png'
import linkedin from '..//linkedin.png'

export default function Buttons() {
  return (
    <div className="buttons">
      <button className="email">
        <img src={mail} alt="" />
        <p>Email</p>
      </button>
      <button className="linkedin">
        <img src={linkedin} alt="" />
        <p>Linkedin</p>
      </button>
    </div>
  )
}