import React, { Component } from "react";
import "./Home.css";
import Draggable from "react-draggable";

import blueBarrel from "../../assets/blue-barrel.png";
import yellowBarrel from "../../assets/yellow-barrel.png";
import whiteBarrel from "../../assets/white-barrel.png";
import grayBarrel from "../../assets/gray-barrel.png";

export default class Home extends Component {
  state = {
    seats: {
      zoneOne: ["white", "white", "white", null, null, null, null, null, null],
      zoneTwo: [
        "blue",
        "blue",
        "blue",
        "blue",
        "blue",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
      ],
      zoneThree: [
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
      ],
    },
    seatElements: [],
  };

  componentDidMount() {
    const { seatElements } = this.state;

    seatElements.forEach((element, index, theArray) => {
      if (element.seat === null) return;

      const pos = document.getElementById(element.id).getBoundingClientRect();
      theArray[index].position = pos;
    });

    console.log(seatElements);
    this.setSeat({ seatElements });
  }

  setSeat = (seat, index, zone) => {
    const elementId = zone + index;
    const isExist = this.state.seatElements.filter(
      (element) => element.id === elementId
    );

    if (isExist.length === 0)
      this.state.seatElements.push({
        index,
        id: elementId,
        position: null,
        seat,
      });

    switch (seat) {
      case "white":
        return (
          <div className="seatPlace">
            <Draggable positionOffset={{ x: "-2px", y: "-2px" }}>
              <img
                draggable="false"
                id={elementId}
                src={whiteBarrel}
                className="image"
              />
            </Draggable>
          </div>
        );
      case "yellow":
        return (
          <div className="seatPlace">
            <Draggable positionOffset={{ x: "-2px", y: "-2px" }}>
              <img
                draggable="false"
                id={elementId}
                src={yellowBarrel}
                className="image"
              />
            </Draggable>
          </div>
        );
      case "blue":
        return (
          <div className="seatPlace">
            <Draggable positionOffset={{ x: "-2px", y: "-2px" }}>
              <img
                draggable="false"
                id={elementId}
                src={blueBarrel}
                className="image"
              />
            </Draggable>
          </div>
        );
      default:
        return <div className="seatPlace"></div>;
    }
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="homeContainer">
          {/* <table>
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
          </table> */}
          <div className="zoneContainer">
            <div className="oovt">
              <h1 className="zoneTitle">ООВТ</h1>
              <h2 className="zoneSubtitle">Зона 1</h2>
              <div className="place">
                {this.state.seats.zoneOne.map((seat, index) =>
                  this.setSeat(seat, index, "zone_one_")
                )}
              </div>
            </div>
            <div className="oovt">
              <h1 className="zoneTitle">ООГП</h1>
              <h2 className="zoneSubtitle">Зона 2</h2>
              <div className="place">
                {this.state.seats.zoneTwo.map((seat, index) =>
                  this.setSeat(seat, index, "zone_two_")
                )}
              </div>
              <h2 className="zoneSubtitle">Зона 3</h2>
              <div className="place">
                {this.state.seats.zoneThree.map((seat, index) =>
                  this.setSeat(seat, index, "zone_three_")
                )}
              </div>
            </div>
          </div>
          <h1 className="title">Производство</h1>
          <div className="production">
            <div className="productionZone">
              <div className="productionSeatZoneCont">
                <h4 className="productionSubtitle">A-10(1)</h4>
                <div className="productionSeatZone">
                  <div className="seatPlace">
                    <Draggable positionOffset={{ x: "-2px", y: "-2px" }}>
                      <img
                        draggable="false"
                        src={grayBarrel}
                        className="image"
                      />
                    </Draggable>
                  </div>
                  <div className="seatPlace">
                    <Draggable positionOffset={{ x: "-2px", y: "-2px" }}>
                      <img
                        draggable="false"
                        src={blueBarrel}
                        className="image"
                      />
                    </Draggable>
                  </div>
                </div>
              </div>
            </div>
            <div className="productionZone">
              <div className="productionSeatZoneCont">
                <h4 className="productionSubtitle">A-10(2)</h4>
                <div className="productionSeatZone">
                  <div className="seatPlace">
                    <Draggable positionOffset={{ x: "-2px", y: "-2px" }}>
                      <img
                        draggable="false"
                        src={whiteBarrel}
                        className="image"
                      />
                    </Draggable>
                  </div>
                  <div className="seatPlace">
                    <Draggable positionOffset={{ x: "-2px", y: "-2px" }}>
                      <img
                        draggable="false"
                        src={whiteBarrel}
                        className="image"
                      />
                    </Draggable>
                  </div>
                </div>
              </div>
            </div>
            <div className="productionZone">
              <div className="productionSeatZoneCont">
                <h4 className="productionSubtitle">A-11(1)</h4>
                <div className="productionSeatZone">
                  <div className="seatPlace">
                    <Draggable positionOffset={{ x: "-2px", y: "-2px" }}>
                      <img
                        draggable="false"
                        src={grayBarrel}
                        className="image"
                      />
                    </Draggable>
                  </div>
                  <div className="seatPlace">
                    <Draggable positionOffset={{ x: "-2px", y: "-2px" }}>
                      <img
                        draggable="false"
                        src={whiteBarrel}
                        className="image"
                      />
                    </Draggable>
                  </div>
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
        </div>
      </div>
    );
  }
}
