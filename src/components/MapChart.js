import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
} from "react-simple-maps";
import ModalDial from "./ModalDial";



const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const mapStyles = {
    width: "100%",
    height: "auto",
  };

  
// const projection = geoInterruptedMollweideHemispheres;

const MapChart = ({ setTooltipContent }) => {
  const [result, setResult] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [valor, setValor] = React.useState([]);
  const [valor1, setValor1] = React.useState([]);

  const handleClickOpen = (abr, long ) => { 
      setValor(abr);
      setValor1(long);
      setOpen(true); 
    };
    const handleClose = () => {
      setOpen(false);
    }; 
  return (
    <div>
      <ComposableMap 
        data-tip="" 
         projectionConfig={{ scale: 100}} style={mapStyles}>
        
        <ZoomableGroup>
        <Sphere stroke="#FF5533" strokeWidth={1} />
          <Geographies  geography={geoUrl}>
            {({ geographies, proj }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  projection={proj}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, ISO_A2, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} - ${ISO_A2} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    const { NAME, ISO_A2 } = geo.properties;
                    console.log(ISO_A2);
                    handleClickOpen(ISO_A2, NAME );
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                      stroke: "black",
                      strokeWidth: "0.5px"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ModalDial
        open={open}
        handleClose={handleClose}
        valor1={valor1}
        valor={valor}
        />
    </div>
  );
};

export default memo(MapChart);
