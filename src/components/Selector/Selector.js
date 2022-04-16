//import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "大盤融資維持率", label: "大盤融資維持率" },
  { value: "Fear & Greed Index", label: "Fear & Greed Index" },
  //{ value: "vanilla", label: "Vanilla" },
];

const SelectChartType = (props) => {
  const handleChtChange = (e) => {
    props.onSelectChart(e.value);
  };

  return (
    <div className="SelectChartType">
    
      <Select options={options} onChange={handleChtChange} />
    </div>
  );
};

export default SelectChartType;
