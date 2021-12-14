import ProfileInfo from './profile-info';
import Buttons from './buttons';

export default function CardBody() {
  return (
    <div className="card-body">
      <ProfileInfo />
      <Buttons />
      <h3>About</h3>
      <p>I'm a frontend developer with a strong facination for blockchain projects. I'm driven and creative and always striving to deliver my best. I try to keep up with security and best practices to help new apps reach the public eye.</p>
      <h3>Interests</h3>
      <p>Sci-Fi in all it forms, speacially writen word and graphic expressions. Fast reader and pasionate nomad.Love cats, birds and contradictions.</p>
    </div>
  )
}