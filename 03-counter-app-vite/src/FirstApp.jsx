
import PropTypes from 'prop-types'

const getResult = () =>{
  return 4 + 4
}


export const FirstApp = ({title, subTitle}) => {

  /* if(!title){
    throw new Error ("El titulo no existe")
  } */

  return (
    <>
        {/* <h1>{ getResult() }</h1> */}
        <h1>{title}</h1>
        {/* <h1> { newMessage.title } </h1> */}
        <p>{subTitle}</p>
    </>
  )
}


FirstApp.PropTypes = {
  title: PropTypes.string.isRequired,
  SubmitEvent: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
  name: "Fernando Herrera", 
}