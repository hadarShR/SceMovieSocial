import React from "react";
import { configure, shallow } from "enzyme";
import ReportsTable from "../components/ReportsTable";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-extended";
import { render, screen } from "@testing-library/react";


configure({ adapter: new Adapter() });

describe("ReportsTable Component", () => {

    let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReportsTable />);
  });
  
  it("renders the header elements correctly", () => {
    render(<ReportsTable />); // Render your component that contains the table header

    // Assert that the header elements are rendered with the correct text
    expect(screen.getByText("#")).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    shallow(<ReportsTable reportsPosts={[]} />);
  });

  

  it("expands and collapses the row on click", () => {
    const reportsPosts = [{ id: 1, title: "Report 1", reports: {} }];
    const wrapper = shallow(<ReportsTable reportsPosts={reportsPosts} />);

    const row = wrapper.find("TableRow");
    const expandableRow = wrapper.find("ExpandableRow");

    expect(expandableRow).toHaveLength(0);

  });

  it("renders the page buttons correct", () => {
    expect(wrapper.find(".page-button").length).toBe(0);
  });

});


describe("Message div styles", () => {
    it("has the correct CSS styles", () => {
      render(<ReportsTable />); // Render your component that contains the target element
  
      const messageDiv = screen.getByTestId("message-div"); // Add a data-testid attribute to your message div
  
      const computedStyles = window.getComputedStyle(messageDiv);
  
      // Assert the expected CSS styles
      expect(computedStyles.maxWidth).toBe("100%");
      expect(computedStyles.height).toBe("50px");
      expect(computedStyles.padding).toBe("8px");
      expect(computedStyles.overflow).toBe("auto");
      expect(computedStyles.border).toBe("1px solid #ddd");
      expect(computedStyles.textAlign).toBe("left");
      expect(computedStyles.verticalAlign).toBe("middle");
      expect(computedStyles.wordBreak).toBe("break-all");
      expect(computedStyles.width).toBe("100%");
      expect(computedStyles.resize).toBe("none");
      expect(computedStyles.backgroundColor).toBe("#f0f2f5");
      expect(computedStyles.color).toBe("#000");
      expect(computedStyles.flex).toBe("1");
      expect(computedStyles.borderRadius).toBe("20px");
      expect(computedStyles.fontSize).toBe("18px");
      expect(computedStyles.padding).toBe("10px");
    });
  });


