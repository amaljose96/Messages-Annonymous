import WriteMessage from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("WriteMessage", () => {
  it("should render correctly", () => {
    let WriteMessageSnapshot = shallow(<WriteMessage/>);
    expect(WriteMessageSnapshot).toMatchSnapshot();
  });
});