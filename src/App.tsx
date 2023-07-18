import React, { useState, useEffect } from "react";

import { ChildNodeProps } from "./const/types";

import Diagram from "./components/Diagram";

import { getData } from "./service/data.service";
import { getChartData } from "./service/chartData.controller";

function App() {
  const [data, setData] = useState<ChildNodeProps | null>(null);
  const [chartData, setChartData] = useState<String>(``);

  const [lang, setLang] = useState("BN");

  const fetchData = () => {
    setData(getData());
  };

  useEffect(() => {
    if (data) setChartData(getChartData(data));
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {chartData ? <Diagram chart={chartData} /> : <></>}
    </div>
  );
}

export default App;
