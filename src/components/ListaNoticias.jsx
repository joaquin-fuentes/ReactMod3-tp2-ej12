import { Row, Spinner} from "react-bootstrap"
import Noticia from "./Noticia";
import { useState, useEffect } from "react"


const ListaNoticias = ({categoria}) => {

    const [noticia, setNoticia] = useState({});
    const [mostrarSpinner, setMostrarSpinner] = useState(true)


    // el siguiente useEffect es solamente para montaje
    useEffect(() => {
        consultarAPI();
    }, [categoria])


    const consultarAPI = async () => {
        //realizar una peticion GET
        // https://newsdata.io/api/1/news?apikey=pub_23856e424fbbf0b4a2c225387df6827274d4c&q=pizza
        try {
            setMostrarSpinner(true)
            const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_23856e424fbbf0b4a2c225387df6827274d4c&q=pizza");
            const dato = await respuesta.json()
            console.log(respuesta)
            console.log(dato)
            setNoticia(dato)
            console.log(noticia)
            
            //ocultar el spinner, si queremos le podemos dar tiempo, o sino no..
            setTimeout(() => {
                setMostrarSpinner(false)
            }, 1000)
            
        } catch (error) {
            console.log(error)
        }
    }

    const mostrarComponente = (mostrarSpinner) ? (
            <Spinner animation="border" variant="primary"></Spinner>
        ) : (
        noticia.results.map((resultado) =>{
            <Noticia resultado={resultado}></Noticia>
        })
    )
    return (

        <Row className='p-5'>
            {mostrarComponente}
        </Row>

    );
};

export default ListaNoticias;