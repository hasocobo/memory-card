import '../styles/Card.css'
export default function Card({image, text}) {
  return (
    <div className='card'>
      <div className="card-image-container">
        <img src={image} alt={text} width={"100%"} height={"100%"}  />
      </div>
      <div className="card-text">
        <h2>{text}</h2>
      </div>
    </div>
  )
}