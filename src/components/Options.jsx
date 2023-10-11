import axios from "axios";
import { Button, Table } from "antd";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Checkbox, Divider } from "antd";
import "../styles/options.css";

function SelectOptions() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const option = searchParams.get("option");
  const [res, setRes] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [selected, setSelected] = useState(null);

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

  const handleCheckBox = (e) => {
    const { id, checked } = e.target;
    setCheckedItems({ ...checkedItems, [id]: checked });
  };
  const handleSubmit = () => {
    const checkedValues = Object.keys(checkedItems).filter(
      (item) => checkedItems[item]
    );
    console.log("Checked values", checkedValues);
  };
  return (
    <>
      <Divider />
      <div className="options-container">
        <div className="checkbox-wrapper">
          <form>
            {plainOptions.map((item) => (
              <div className="checkboxes" key={item}>
                <input
                  type="checkbox"
                  id={item}
                  checked={checkedItems[item]}
                  onChange={handleCheckBox}
                />
                <label htmlFor={item} style={{ color: "black" }}>
                  {item}
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
      <Link to="/">
        <Button type="primary" onClick={handleSubmit} className="ok-btn">
          Ok
        </Button>
      </Link>
    </>
  );
}

export default SelectOptions;
