import * as React from "react";
import type { PageProps } from "gatsby";
import Header from "./header";
import "../styles/page.scss";
import { Modal } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const list = [
  { id: 1, name: "Cartagenda_1", value: 100, checked: true },
  { id: 2, name: "Cartagenda_11", value: 20, checked: true },
  { id: 3, name: "Cartagenda_3", value: 0, checked: false },
  { id: 4, name: "Cartagenda_2", value: 0, checked: false },
  { id: 5, name: "Cartagenda_3", value: 0, checked: false },
  { id: 6, name: "Cartagenda_8", value: 0, checked: false },
  { id: 7, name: "Cartagenda_9", value: 0, checked: false },
  { id: 8, name: "Cartagenda_12", value: 0, checked: false },
  { id: 9, name: "Cartagenda_10", value: 0, checked: false },
  { id: 10, name: "Cartagenda_7", value: 0, checked: false },
  { id: 11, name: "Cartagenda_17", value: 0, checked: false },
];

const detailList = [
  {
    id: 1,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "60d",
    percent: "-",
    value: "100€",
  },
  {
    id: 2,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "60d",
    percent: "100€",
    value: "100€",
  },
  {
    id: 3,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "60d",
    percent: "-",
    value: "100€",
  },
  {
    id: 4,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "60d",
    percent: "-",
    value: "100€",
  },
  {
    id: 5,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "60d",
    percent: "-",
    value: "100€",
  },
];

const detailList2 = [
  {
    id: 1,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "Cartagena_2",
    percent: "-",
  },
  {
    id: 2,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "Cartagena_2",
    percent: "100€",
  },
  {
    id: 3,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "Cartagena_2",
    percent: "100€",
  },
  {
    id: 4,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "Cartagena_2",
    percent: "100€",
  },
  {
    id: 5,
    seller: "fran@gmail.com",
    property: "17/04/23",
    price: "Cartagena_2",
    percent: "100€",
  },
];

const Page2Page: React.FC<PageProps> = () => {
  const [flag, setFlag] = React.useState("Actividad amigos");
  const [show, setShow] = React.useState(false);
  const [selectInmueble, setSelectInmueble] = React.useState<any>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (id: any) => {
    const inmueble = list.filter((item) => item.id === id)[0];
    setSelectInmueble(inmueble);
    setShow(false);
  };

  return (
    <main>
      <Header />
      <section className=" mx-auto container">
        <div className="section">
          <div className="row">
            <div className="col-md-8 col-custom col-sm-12  vertical_divider pt_28">
              <div className="blackbox mx-0 p-8">
                <div className="invitebox">
                  <p className="Invitetxt">
                    Invita a tus amigos,
                  </p>
                  <p className="Invitetxt">
                    gana <span className="recom">recompensas</span>
                  </p>
                </div>
                <p className="unete">
                  ¡Únete a nuestro Programa de Referidos! Comparte con amigos y familiares tu amor por Hausera,    y gana increíbles recompensas cada vez que hacen una inversión usando tu enlace de referidos.
                </p>
              </div>
              <div className="leftsecond d-flex gap-30">
                <button className="Amigosbtn d-flex p-8 justify-content-between">
                  <div className="amigo1">
                    Amigos registrados
                  </div>
                  <div className="number pr-20">
                    12
                  </div>
                </button>
                <button className="Amigosbtn d-flex p-8 justify-content-between">
                  <div className="amigo1">
                    Amigos con inversión
                  </div>
                  <div className="number pr-20">
                    5
                  </div>
                </button>
              </div>

              <div className="leftthird">
                <div className="d-flex" style={{ display: 'flex' }} id="pills-tab" role="tablist ">
                  <button
                    className={flag === "Actividad amigos" ? "btn btn_compare" : "btn btn_vender"}
                    onClick={() => setFlag("Actividad amigos")}
                  >
                    Actividad amigos
                  </button>
                  <button
                    className={flag === "Recompensas" ? "btn btn_compare" : "btn btn_vender"}
                    onClick={() => setFlag("Recompensas")}
                  >
                    Recompensas
                  </button>
                  <button
                    className={flag === "Sobre" ? "btn btn_compare" : "btn btn_vender"}
                    onClick={() => setFlag("Sobre")}
                  >
                    Sobre
                  </button>
                </div>
                {flag === "Actividad amigos" && (
                  <div className="bgc1" style={{ padding: '10px 20px 20px 20px' }}>
                    <Table>
                      <Thead className="detail_table_item">
                        <Tr>
                          <Th className="table_header_item_text">User</Th>
                          <Th className="table_header_item_text">Fecha</Th>
                          <Th className="table_header_item_text">Expiración</Th>
                          <Th className="table_header_item_text">Inversión</Th>
                          <Th className="table_header_item_text">Recompensa</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {detailList.map((item) => {
                          return (
                            <Tr className="table_item_divider" key={item.id}>
                              <Td className="table_item_text detail_table_tbody_item">
                                {item.seller}
                              </Td>
                              <Td className="table_item_text detail_table_tbody_item">
                                {item.property}
                              </Td>
                              <Td className="table_item_text detail_table_tbody_item">
                                {item.price}
                              </Td>
                              <Td className="table_item_text detail_table_tbody_item">
                                {item.percent}
                              </Td>
                              <Td className="table_item_text detail_table_tbody_item">
                                {item.value}
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </div>
                )}
                {flag === "Recompensas" && (
                  <div className="bgc1">
                    <Table>
                      <Thead className="detail_table_item">
                        <Tr>
                          <Th className="table_header_item_text">User</Th>
                          <Th className="table_header_item_text">Fecha</Th>
                          <Th className="table_header_item_text">Inversión</Th>
                          <Th className="table_header_item_text">Recompensa</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {detailList2.map((item) => {
                          return (
                            <Tr className="table_item_divider" key={item.id}>
                              <Td className="table_item_text detail_table_tbody_item">
                                {item.seller}
                              </Td>
                              <Td className="table_item_text detail_table_tbody_item">
                                {item.property}
                              </Td>
                              <Td className="table_item_text detail_table_tbody_item">
                                {item.price}
                              </Td>
                              <Td className="table_item_text detail_table_tbody_item">
                                {item.percent}
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </div>
                )}
                {flag === "Sobre" && (
                  <div className="thirdtab overflow-x-scroll">
                    <div className="Acer">
                      Acerca del sistema de afiliación
                    </div>
                    <div className="Tresbox">
                      <div className="Tres">
                        Tres pasos para ganar
                      </div>
                      <div className="Tres2 row overflow-y-scroll">
                        <div className="col-md-4 d-flex flex-column vertical_divider1 overflow-y-scroll">
                          <div className="Group">
                            <img
                              src={require("../images/Group1.png").default}
                              width={"15px"}
                              height={"15px"}
                              alt="Group1"
                              className="mt-25"
                            />
                          </div>
                          <p className="Group2">
                            Obtener enlace de afiliado
                          </p>
                          <p className="Group3">
                            Conecta un monedero y genera tu enlace de referencia.
                          </p>
                        </div>
                        <div className="col-md-4 d-flex flex-column vertical_divider1 overflow-y-scroll">
                          <div className="Group">
                            <img
                              src={require("../images/Group2.png").default}
                              width={"15px"}
                              height={"15px"}
                              alt="Group2"
                              className="mt-25"
                            />
                          </div>
                          <p className="Group2">
                            Invita a tus amigos
                          </p>
                          <p className="Group3">
                            Invita a tus amigos a conectarse a través de tu enlace de recomendación.
                          </p>
                        </div>
                        <div className="col-md-4 d-flex flex-column overflow-y-scroll">
                          <div className="Group">
                            <img
                              src={require("../images/Group3.png").default}
                              width={"15px"}
                              height={"15px"}
                              alt="Group3"
                              className="mt-25"
                            />
                          </div>
                          <p className="Group2">
                            Gane criptomonedas
                          </p>
                          <p className="Group3">
                            Obtén y da 5% de la inversión de nuevos referidos, hasta 60€ cada uno.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pagos">
                      Pagos y plazos
                    </div>
                    <div className="ulol">
                      <ul>
                        <li>Los bonos del Plan Amigo, deberán canjearse en los 6 meses siguientes a la activación del mismo.</li>
                        <li>El plan amigo no es acumulable con el resto de promociones. </li>
                        <li>Si la oportunidad no se financia en su totalidad, no se entregarán las recompensas del Plan Amigo.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-4 col-custom col-sm-12  pl_24 pt_28 pb_55 pr-24">
              <div className="rightfirst">
                <p className="invitar">
                  Invitar a mis amigos
                </p>
                <div className="copiarlongbox d-flex justify-content-end">
                  <button className="copiarbtn">
                    Copiar
                  </button>
                </div>
                <div className="copiatxt">
                  Copia o comparte la URL de tu invitación par a obtener más recompensas
                </div>
                <div className="d-flex h-42 pt-10 mb-18">
                  <div className="copiatxt2">
                    o compartir con:
                  </div>
                  <div className="ml-17">
                    <img
                      className="facebook"
                      src={require("../images/facebook.png").default}
                      width={"42px"}
                      height={"42px"}
                      alt="facebook"
                    />
                  </div>
                  <div className="ml-17">
                    <img
                      className="linkedin"
                      src={require("../images/linkedin.png").default}
                      width={"42px"}
                      height={"42px"}
                      alt="linkedin"
                    />
                  </div>
                  <div className="ml-17">
                    <img
                      className="twitter"
                      src={require("../images/twitter.png").default}
                      width={"42px"}
                      height={"42px"}
                      alt="twitter"
                    />
                  </div>
                </div>
              </div>
              <div className="rightsecond">
                <div className="recompen">
                  Recompensas
                </div>
                <div className="d-flex eurbox">
                  <div>
                    <img
                      className="ringimg"
                      src={require("../images/ring.png").default}
                      width={"56px"}
                      height={"56px"}
                      alt="ring"
                    />
                  </div>
                  <div className="d-flex pl-13 flex-column">
                    <div className="eur50">
                      Pagado : 180 €
                    </div>
                    <div className="eur50">
                      Pendiente: 60 €
                    </div>
                    <div style={{ display: 'flex' }}>
                      <div className="eur50">
                        Bloqueado: 0 €
                      </div>&nbsp;&nbsp;&nbsp;
                      <div className="lastbox">
                        Saber más
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-26 d-flex h-24">
                  <ul className="d-flex cantxt">
                    <li>Pagado</li>
                    <li className="ml-55">Pendiente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal_title">
              Seoeccionar un inmueble
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal_body ">
            <input
              type="text"
              className="search_input"
              placeholder="Busca inmueble"
            />
            <div className="inmueble_list">
              {list.map((item) => {
                return (
                  <div
                    className="d-flex inmueble_item"
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                  >
                    <p style={{ width: "70%" }} className="mb-0">
                      {item.name}
                    </p>
                    <p
                      style={{ width: "10%", textAlign: "right" }}
                      className="mb-0"
                    >
                      {item.value}
                    </p>
                    <p style={{ width: "15%" }} className="mb-0">
                      <i className="bi bi-check-lg"></i>
                    </p>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </main>
  );
};

export default Page2Page;
