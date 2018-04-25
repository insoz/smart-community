import React, { Component } from "react";
import { Map, Marker } from "react-amap";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class MapContainer extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  constructor() {
    super();
    this.amapEvents = {
      created: mapInstance => {
        console.log(
          "高德地图 Map 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如："
        );
        console.log(mapInstance.getZoom());
      }
    };
    this.markerEvents = {
      created: markerInstance => {
        console.log(
          "高德地图 Marker 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如："
        );
        console.log(markerInstance.getPosition());
      }
    };
    this.markerPosition = { longitude: 120, latitude: 30 };
  }
  render() {
    const { className } = this.props;

    const cls = classNames("map-container", {
      [className]: className ? true : false
    });
    const mapProps = {
      amapkey: "0191d7ddd0192918a5453573930a9e68",
      mapStyle: "amap://styles/dfdfc5be37e559734a7a54e979dcaf85",
      features: ["road", "building"],
      events: this.amapEvents,
      resizeEnable: true,
      zoom: 19,
      center: [121.134539, 31.155071]
    };
    return (
      <div className={cls}>
        <Map {...mapProps}>
          <Marker position={this.markerPosition} events={this.markerEvents} />
        </Map>
      </div>
    );
  }
}
