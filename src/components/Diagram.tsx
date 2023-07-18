import React, { FC, useEffect } from "react";
import mermaid from "mermaid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

declare global {
  interface Window {
    callback: any; // 👈️ turn off type checking
  }
}

mermaid.initialize({
  startOnLoad: true,
  theme: "light",
  fontFamily: "monospace",
  logLevel: 1,
  flowchart: {
    htmlLabels: true,
    curve: "stepAfter",
    wrappingWidth: 20,
    // useMaxWidth: false,
  },
  sequence: {
    mirrorActors: true,
    wrap: true,
    width: 300,
  },
  securityLevel: "loose",
});

const withZoomController = (Component: FC<any>) => (props: any) => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div
            className="tools"
            style={{ position: "absolute", zIndex: 10000 }}
          >
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent>
            <Component {...props} />
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};

const Diagram = ({ chart }: { chart: any }) => {
  useEffect(() => {
    mermaid.contentLoaded();
    window.callback = async function (e: Event) {
      if (e) {
        console.log(e);
      }
    };
  }, []);

  return (
    <div
      // style={{ width: "100vw" }}
      className="mermaid"
    >
      {chart}
    </div>
  );
};

export default Diagram;
