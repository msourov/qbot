import axios from "axios";
import { Button, Table } from "antd";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Checkbox, Divider } from "antd";
// import "../styles/options.css";

function SelectOptions() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const option = searchParams.get("option");
  const [res, setRes] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  let plainOptions = [];

  const urls = {
    gopd: "http://qbot.backend.hidayahsmart.solutions/count/get/option?base=select",
    popd: "http://qbot.backend.hidayahsmart.solutions/count/get/option?base=single",
  };
  const getFields = async () => {
    try {
      const response = await axios.get(urls[option]);
      const data = response?.data?.detail;
      setRes(data);
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  };
  if (res.length > 0) {
    plainOptions = res.map((item) => item.name);
  }
  useEffect(() => {
    getFields();
  }, []);

  const onChange = (list) => {
    setCheckedList(list);
  };
  const CheckBoxGroup = Checkbox.Group;

  // console.log("plainOptions", plainOptions); // ['Doctor 1', 'Doctor 3', 'Doctor 2', 'FT']
  return (
    <>
      <Divider />
      {/* <CheckBoxGroup
        style={{
          flexDirection: "column",
          // height: "100px",
          // overflowY: "scroll",
        }}
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      /> */}
      <CheckBoxGroup
        style={{
          flexDirection: "column",
        }}
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      >
        {(options) => (
          <ul>
            {options.map((option) => (
              <li key={option} style={{ marginBottom: "8px" }}>
                <label style={{ fontSize: "1rem" }}>
                  <Checkbox
                    className="custom-checkbox"
                    // style={{ width: "24px", height: "24px", fontSize: "1rem" }}
                    value={option}
                  >
                    {option}
                  </Checkbox>
                </label>
              </li>
            ))}
          </ul>
        )}
      </CheckBoxGroup>
    </>
  );
}

export default SelectOptions;
