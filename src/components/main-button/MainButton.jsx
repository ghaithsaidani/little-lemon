import './MainButton.scss'

const MainButton = (props) => {
  return (
    <button className='main-button'>
      {props.text}
    </button>
  )
}

export default MainButton
