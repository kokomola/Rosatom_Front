import React, { useState } from "react";
import "./Home.css";

import blueBarrel from "../../assets/blue-barrel.png";
import yellowBarrel from "../../assets/yellow-barrel.png";
import whiteBarrel from "../../assets/white-barrel.png";

export default function Home() {
  const [platformSeat, setPlatformSeat] = useState(32);
  return (
    <div className="mainContainer">
      <div className="homeContainer">
        <table>
          <tr>
            <td>Дата: {new Date().toLocaleDateString("ru-RU")}</td>
            <td>
              <tr>План выпуска: 10 шт.</tr>
              <tr style={{ borderTop: "1px solid black" }}>
                Факт выпуска: 0 шт.
              </tr>
            </td>
          </tr>
          <tr>
            <td>Канбаны:</td>
            <td>тут канбаны</td>
          </tr>
        </table>
        <div className="zoneContainer">
          <div className="oovt">
            <h1 className="zoneTitle">ООВТ</h1>
            <h2 className="zoneSubtitle">Зона 1</h2>
            <div className="place">
              <img src={whiteBarrel} className="image" />
              <img src={whiteBarrel} className="image" />
              <img src={whiteBarrel} className="image" />
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>

              <div className="seatPlace"></div>
              <div className="seatPlace"></div>

              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>

              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
            </div>
          </div>
          <div className="oovt">
            <h1 className="zoneTitle">ООГП</h1>
            <h2 className="zoneSubtitle">Зона 2</h2>
            <div className="place">
              <img src={blueBarrel} className="image" />
              <img src={blueBarrel} className="image" />
              <img src={blueBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
            </div>
            <h2 className="zoneSubtitle">Зона 3</h2>
            <div className="place">
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
              <img src={yellowBarrel} className="image" />
            </div>
          </div>
        </div>
        <h1 className="title">Производство</h1>
        <div className="production">
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-10(1)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-10(2)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-11(1)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-11(2)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-12(1)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-12(2)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-13(1)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-13(2)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-14(1)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
          <div className="productionZone">
            <div className="productionSeatZoneCont">
              <h4 className="productionSubtitle">A-14(2)</h4>
              <div className="productionSeatZone">
                <div className="seatPlace"></div>
                <div className="seatPlace"></div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="title">Отделение №1</h1>
        <div className="mainContainerView">
          <div className="containerView">
            <h4 className="productionSubtitle">Тара</h4>
            <div className="containerZone">
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
            </div>
          </div>
          <div className="containerView">
            <h4 className="productionSubtitle">Тара</h4>
            <div className="containerZone">
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
            </div>
          </div>
          <div className="containerView">
            <h4 className="productionSubtitle">Тара</h4>
            <div className="containerZone">
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
              <div className="seatPlace"></div>
            </div>
          </div>
        </div>
        <h1 className="title">Площадка №1</h1>
        <div className="place">
          <div className="scrollPlaceView">
            <div style={{ display: "flex" }}>
              <img src={whiteBarrel} className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
