import React from "react";
import { shallow } from "enzyme";
import Letters from "./Letters";
import renderer from "react-test-renderer";

it("shows correct letters", () => {
  const letters = ["A", "B"];
  const wrapper = shallow(<Letters letters={letters} />);
  expect(wrapper.contains("A")).toBe(true);
  expect(wrapper.contains("B")).toBe(true);
});
/*
it("shows data with units", () => {
  const data = {
    temp1: 40.8,
    temp2: 45.1
  };
  const unit = "X";
  const timestamp = "2017-12-31T22:45:07.099Z";
  const wrapper = shallow(
    <Letters title="asdf" unit={unit} data={data} />
  );
  const temp = wrapper.find("#data");
  expect(temp.text()).toContain("temp1: 40.8X temp2: 45.1X");
});

it("shows data without units", () => {
  const data = {
    temp1: 40.8,
    temp2: 45.1
  };
  const timestamp = "2017-12-31T22:45:07.099Z";
  const wrapper = shallow(<Letters title="asdf" data={data} />);
  const temp = wrapper.find("#data");
  expect(temp.text()).toContain("temp1: 40.8 temp2: 45.1");
});
*/
