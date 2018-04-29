import React, { Component } from "react";
import { Map, Markers } from "react-amap";
import PropTypes from "prop-types";
import classNames from "classnames";
import router from "umi/router";

import { amap_key, amap_style } from "../../utils/config";

const randomPosition = () => ({
  longitude: 121.13 + Math.random() * 0.01,
  latitude: 31.15 + Math.random() * 0.01
});
const randomMarker = len =>
  Array(len)
    .fill(true)
    .map((e, idx) => ({
      position: randomPosition()
    }));

export default class MapContainer extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      markers: randomMarker(100),
      center: randomPosition()
    };
    this.amapCenter = [121.134539, 31.155071];
    this.amapEvents = {
      created: mapInstance => {
        console.log(
          "高德地图 Map 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如："
        );
        console.log(mapInstance.getZoom());
      }
    };
    this.markersEvents = {
      created: allMarkers => {
        console.log("All Markers Instance Are Below");
        // console.log(allMarkers);
      },
      click: (MapsOption, marker) => {
        // console.log("MapsOptions:");
        // console.log(MapsOption);
        // console.log("marker:");
        // console.log(marker);

        router.push("/assg/detail");
      },
      dragend: (MapsOption, marker) => {
        /* ... */
      }
    };
  }

  randomMarkers = () => {
    this.setState({
      markers: randomMarker(100)
    });
  };

  render() {
    const { className } = this.props;

    const cls = classNames("map-container", {
      [className]: className ? true : false
    });
    const mapProps = {
      amapkey: amap_key,
      mapStyle: amap_style,
      features: ["road", "building"],
      events: this.amapEvents,
      resizeEnable: true,
      zoom: 19,
      center: this.amapCenter
    };
    return (
      <div className={cls}>
        <Map {...mapProps}>
          <Markers markers={this.state.markers} events={this.markersEvents} />
        </Map>
      </div>
    );
  }
}
