import image from '../assets/jcole.png'


const Card = () => {
  return (
    <div className="card">
        <h4>J.COLE</h4>
        <img className='j-cole' src={image} alt="" />
        <p>US Rapper</p>
        <button>More</button>
    </div>
  )
}

export default Card