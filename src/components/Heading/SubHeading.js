import './SubHeading.css'

const SubHeading = ({ isHome }) => {
    return (
        <div className={`box ${isHome ? 'home-box' : ''}`}>
            <p className='box-p'>The Generics</p>
        </div>
    )
}

export default SubHeading
