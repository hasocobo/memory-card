import '../styles/Header.css'

export default function Header({left, right}) {
  return (
    <div className="container">
      <div className="content">
        <div className="left">
          {left}
        </div>
        <div className="right">
          {right}
        </div>
      </div>
    </div>
  )
}