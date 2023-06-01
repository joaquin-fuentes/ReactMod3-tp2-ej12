import { Form, Row, Col, Spinner } from "react-bootstrap"
import ListaNoticias from "./ListaNoticias";
import { useState, useEffect } from "react"


const Formulario = () => {

    const [categoria, setCategoria] = useState("")
    

    return (
        <Form className="p-0">
            <Form.Group as={Row} className=" p-5" controlId="formHorizontalEmail">
                <Form.Label column sm={4} className="text-center">
                    Buscar por categoria:
                </Form.Label>
                <Col sm={8}>
                    <Form.Select aria-label="Default select example"
                        onChange={(e) => setCategoria(e.target.value)}
                        value={categoria}
                    >   
                        <option value="">Seleccione una categoria</option>
                        <option value="business">business</option>
                        <option value="entertainment">entertainment</option>
                        <option value="environment">environment</option>
                        <option value="food">food</option>
                        <option value="health">health</option>
                        <option value="politics">politics</option>
                        <option value="science">science</option>
                        <option value="sports">sports</option>
                        <option value="technology">technology</option>
                        <option value="top">top</option>
                        <option value="tourism">tourism</option>
                        <option value="world">world</option>

                    </Form.Select>
                </Col>
            </Form.Group>
            <hr></hr>
            <ListaNoticias categoria={categoria}></ListaNoticias>
        </Form>
    );
};

export default Formulario;