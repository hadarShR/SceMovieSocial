import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import AdminMessages from "../pages/AdminMessages";
import "jest-extended";
import { render } from "@testing-library/react";

configure({ adapter: new Adapter() });

describe("AdminMessages component", () => {

  it("should render the component without crashing", () => {
        const wrapper = shallow(<AdminMessages />);
        expect(wrapper).toHaveLength(1);
  });

  it("applies padding style correctly", () => {
    const { container } = render(<div style={{ padding: "5rem" }}>Hello World</div>);
  
    expect(container.firstChild).toHaveStyle("padding: 5rem");
  });

  it("applies margin-left style correctly", () => {
    const { container } = render(<div style={{ marginLeft: "10rem" }}>Hello World</div>);
  
    expect(container.firstChild).toHaveStyle("margin-left: 10rem");
  });

  it("applies padding-top style correctly", () => {
    const { container } = render(<div style={{ paddingTop: "6rem" }}>Hello World</div>);
  
    expect(container.firstChild).toHaveStyle("padding-top: 6rem");
  });
    

});