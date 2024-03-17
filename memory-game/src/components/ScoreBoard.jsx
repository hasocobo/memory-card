import '../styles/ScoreBoard.css'

export default function ScoreBoard( {score = 0, highestScore = 0} ) {
  return (
    <div className='score-board'>
      <div className="score">
        Score: {score}
      </div>
      <div className='highest-score'>
        Highest Score: {highestScore}
      </div>
    </div>
  )
}