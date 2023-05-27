import * as React from "react";
import type { PageProps } from "gatsby";
import Header from "./header";
import "../styles.scss";
import "../styles/custom.scss";
import { Modal } from "react-bootstrap";

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

const watchList = [
  { id: 1, name: "Cartagenda_2", percent: "4%", value: "60d" },
  { id: 2, name: "Cartagenda_1", percent: "4%", value: "60d" },
  { id: 3, name: "Cartagenda_3", percent: "4%", value: "60d" },
  { id: 4, name: "Cartagenda_17", percent: "4%", value: "60d" },
];

const trendingList = [
  { id: 1, name: "Cartagenda_2", percent: "4%", value: "60d" },
  { id: 2, name: "Cartagenda_2", percent: "4%", value: "60d" },
  { id: 3, name: "Cartagenda_2", percent: "4%", value: "60d" },
  { id: 4, name: "Cartagenda_2", percent: "4%", value: "60d" },
  { id: 5, name: "Cartagenda_2", percent: "4%", value: "60d" },

];

const detailList = [
  {
    id: 1,
    seller: "Allena",
    property: "Cartagenda_2",
    price: "2500€",
    percent: "4%",
    value: "60d",
  },
  {
    id: 2,
    seller: "Allena",
    property: "Cartagenda_4",
    price: "2500€",
    percent: "4%",
    value: "60d",
  },
  {
    id: 3,
    seller: "Allena",
    property: "Cartagenda_1",
    price: "2500€",
    percent: "4%",
    value: "60d",
  },
  {
    id: 4,
    seller: "Allena",
    property: "Cartagenda_3",
    price: "2500€",
    percent: "4%",
    value: "60d",
  },
  {
    id: 5,
    seller: "Allena",
    property: "Cartagenda_5",
    price: "2500€",
    percent: "4%",
    value: "60d",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  const [flag, setFlag] = React.useState("comprar");
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
              <div className="row mx-0">
                <div className="col-md-6 col-sm-12 p-0 mx-0 ">
                  <div className="blackhouse d-flex">
                    <p className="Marketplace">Marketplace</p>
                    <div className="marginimg">
                      <img
                        className="houseimg"
                        src={require("../images/house.png").default}
                        width={"150px"}
                        height={"112px"}
                        alt="house"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mx-0 pr-0 pl-0">
                  <div className="d-flex padding1">
                    <div className="whitebox1">
                      <p className="Capital">Capital recaudado</p>
                      <p className="K215">215K</p>
                    </div>
                    <div className="whitebox">
                      <p className="Capital">Inmebles</p>
                      <p className="K215">4</p>
                    </div>
                    <div className="whitebox">
                      <p className="Capital">Inversores</p>
                      <p className="K215">350</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leftsecond">
                <div className="trendingline d-flex justify-content-between">
                  <p className="trending">Trending</p>
                  <div className="d-flex">
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn_daily_active">
                        7d
                      </button>
                      <button type="button" className="btn btn_daily">
                        30d
                      </button>
                      <button type="button" className="btn btn_daily">
                        60d
                      </button>
                      <button type="button" className="btn btn_daily">
                        90d
                      </button>
                    </div>
                    <button className="btn btn_detail">Detaile</button>
                  </div>
                </div>
                <div className="card mt_29 minwidth trending-card scrollbar-hidden">
                  <div className="row inmueble_list tableheight">
                    <div className="col-md-6 mx-0 table-responsive card1">
                      <table className="w-100">
                        <thead>
                          <tr>
                            <th className="w-50">Inmueble</th>
                            <th className="w-15">APR</th>
                            <th className="w-35">Expiracion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {trendingList.map((item) => {
                            return (
                              <tr className="table_item_divider table-row-hover" key={item.id}>
                                <td className="table_item_text mb-0 detail_table_tbody_item d-flex">
                                  <div className="tablerect">
                                    <p className="txtsmall">
                                      {item.id}
                                    </p>
                                  </div>
                                  {item.name}
                                </td>
                                <td className="table_item_text mb-0 detail_table_tbody_item">
                                  {item.percent}
                                </td>
                                <td className="table_item_text mb-0 detail_table_tbody_item">
                                  {item.value}

                                  <img
                                    src={require("../images/star_logo.png").default}
                                    className="star"
                                    alt="star"
                                  />
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6 mx-0 table-responsive card2">
                    <table className="w-100">
                        <thead>
                          <tr>
                            <th className="w-50">Inmueble</th>
                            <th className="w-15">APR</th>
                            <th className="w-35">Expiracion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {trendingList.map((item) => {
                            return (
                              <tr className="table_item_divider table-row-hover" key={item.id}>
                                <td className="table_item_text mb-0 detail_table_tbody_item d-flex">
                                  <div className="tablerect">
                                    <p className="txtsmall">
                                      {item.id+5}
                                    </p>
                                  </div>
                                  {item.name}
                                </td>
                                <td className="table_item_text mb-0 detail_table_tbody_item">
                                  {item.percent}
                                </td>
                                <td className="table_item_text mb-0 detail_table_tbody_item">
                                  {item.value}

                                  <img
                                    src={require("../images/star_logo.png").default}
                                    className="star"
                                    alt="star"
                                  />
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="card mt_26 watch_card">
                  <p className="card_title d-fixed mb-0 detail_txt">Detalle</p>
                  <div className="detail_table_item d-flex">
                    <p
                      className="table_header_item_text mb-0"
                      style={{ width: "20%" }}
                    >
                      Vendedor
                    </p>
                    <p
                      className="table_header_item_text mb-0"
                      style={{ width: "20%" }}
                    >
                      Inmueble
                    </p>
                    <p
                      className="table_header_item_text mb-0"
                      style={{ width: "15%" }}
                    >
                      Precio
                    </p>
                    <p
                      className="table_header_item_text mb-0"
                      style={{ width: "10%" }}
                    >
                      APR
                    </p>
                    <p
                      className="table_header_item_text mb-0"
                      style={{ width: "15%" }}
                    >
                      Expiracion
                    </p>
                    <p style={{ width: "10%" }}></p>
                  </div>
                  <div className="watch_list">
                    {detailList.map((item) => {
                      return (
                        <div className="table_item_divider" key={item.id}>
                          <div className="detail_table_item d-flex">
                            <p
                              className="table_item_text mb-0 detail_table_tbody_item"
                              style={{ width: "20%" }}
                            >
                              {item.seller}
                            </p>
                            <p
                              className="table_item_text mb-0 detail_table_tbody_item"
                              style={{ width: "20%" }}
                            >
                              {item.property}
                            </p>
                            <p
                              className="table_item_text mb-0 detail_table_tbody_item"
                              style={{ width: "15%" }}
                            >
                              {item.price}
                            </p>
                            <p
                              className="table_item_text mb-0 detail_table_tbody_item"
                              style={{ width: "10%" }}
                            >
                              {item.percent}
                            </p>
                            <p
                              className="table_item_text mb-0 detail_table_tbody_item"
                              style={{ width: "20%" }}
                            >
                              {item.value}
                            </p>
                            <div style={{ width: "10%" }} className="star_svg">
                              <img
                                src={require("../images/star.svg").default}
                                alt="star"
                                width={"15px"}
                                height={"15px"}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-custom col-sm-12  pl_24 pt_28 pb_55 pr-24">
              <div className="card">
                <div className="d-flex gap-30" id="pills-tab" role="tablist">
                  <button
                    className={
                      flag === "comprar" ? "btn btn_compare" : "btn btn_vender"
                    }
                    onClick={() => setFlag("comprar")}
                  >
                    Comprar
                  </button>
                  <button
                    className={
                      flag === "vender" ? "btn btn_compare" : "btn btn_vender"
                    }
                    onClick={() => setFlag("vender")}
                  >
                    Vender
                  </button>
                </div>

                <div className="divider first_divider"></div>
                {flag === "comprar" && (
                  <div className="comprar_content">
                    <div className="grey_box d-flex justify-content-between">
                      <div>
                        <p className="from_txt">From</p>
                        <p className="price_txt">2500</p>
                      </div>
                      <div></div>
                      <div className="">
                        <button className="btn btn-white">
                          <img
                            src={require("../images/eur.svg").default}
                            alt="eur"
                            className="mx-2"
                          />
                          EUR
                        </button>
                      </div>
                    </div>

                    <div className="grey_box d-flex justify-content-between mt-5">
                      <div>
                        <p className="from_txt">Tokens</p>
                        <p className="price_txt">25</p>
                      </div>
                      <div></div>
                      <div className="">
                        <button className="btn btn-white">Cartagena_2</button>
                      </div>
                    </div>

                    <button className="btn btn_swap">Swap</button>
                    <div>
                      <p className="tip_txt text-center pt-3">
                        25 tokens x 100€ = 2500€
                      </p>
                    </div>
                    <div className="divider seconde_divider"></div>
                  </div>
                )}
                {flag === "vender" && (
                  <div className="vender_content">
                    <div className="grey_box d-flex justify-content-between">
                      <div>
                        {selectInmueble && (
                          <p className="item_price_txt mb-0">
                            {selectInmueble?.value}
                          </p>
                        )}
                      </div>
                      <div></div>
                      <div className="">
                        <button
                          className="btn btn-inmueble"
                          onClick={handleShow}
                        >
                          {selectInmueble ? selectInmueble.name : "Inmueble"}
                        </button>
                        {selectInmueble && (
                          <p className="balance_txt mb-0">Balance: 100</p>
                        )}
                      </div>
                    </div>
                    <div className="grey_box mt_23">
                      {selectInmueble && (
                        <div className="d-flex justify-content-between">
                          <div className="px-3">
                            <p className="item_price_txt mb-0">10.200</p>
                          </div>
                          <div></div>
                          <div className="px-3">
                            <p className="item_price_txt mb-0">EUR</p>
                          </div>
                        </div>
                      )}
                      <div className="percent_box d-flex justify-content-between">
                        <div>1%</div>
                        <div className="percent_active_txt">2%</div>
                        <div>3%</div>
                        <div>4%</div>
                        <div>5%</div>
                        <div>6%</div>
                      </div>
                    </div>
                    <button className="btn btn_swap">Swap</button>
                    <div>
                      <p className="tip_txt text-center pt-3">
                        {selectInmueble && "100 tokens x 100€ = 10.200€"}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="card mt_29_2 watch_card">
                <p className="card_title d-fixed mb-0">Watchlist</p>
                <div className="watch_list">
                  {watchList.map((item) => {
                    return (
                      <div className="table_item_divider" key={item.id}>
                        <div className="table_item d-flex">
                          <p
                            className="table_item_text mb-0"
                            style={{ width: "60%" }}
                          >
                            {item.name}
                          </p>
                          <p
                            className="table_item_text mb-0"
                            style={{ width: "20%" }}
                          >
                            {item.percent}
                          </p>
                          <p
                            className="table_item_text mb-0"
                            style={{ width: "20%" }}
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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

export default IndexPage;