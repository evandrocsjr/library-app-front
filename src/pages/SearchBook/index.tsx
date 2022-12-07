import { Book } from "phosphor-react";
import { Accordion, Form, InputGroup } from "react-bootstrap";

export function SearchBook() {
  return (
    <div>
      <h3 className={"fw-bold"}>
        <Book /> Pesquisa de Livros
      </h3>
      <hr />

      <div className={"card"}>
        <div className={"card-body"}>
          <span>Nome do Livro</span>
          <Form.Control></Form.Control>

          <hr className={"d-flex m-3"} />

          <Accordion>
            <Accordion.Item eventKey={"0"}>
              <Accordion.Header>Mais Filtros</Accordion.Header>
              <Accordion.Body className={"row"}>
                <div className={"col-6"}>
                  <span>Nome do Autor</span>
                  <Form.Control />
                </div>
                <div className={"col-6"}>
                  <span>Data de Lançamento</span>
                  <Form.Control type={"date"} />
                </div>

                <div className={"col-12"}></div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
