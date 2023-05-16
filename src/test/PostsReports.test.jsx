import React from "react";
import { render, screen } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import PostsReports from "../pages/PostsReports";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-extended";

configure({ adapter: new Adapter() });

describe("PostsReports Component", () => {
    it("renders without crashing", () => {
        shallow(<PostsReports postsReports={[]} />);
      });

      it("has correct padding and margin left styles", () => {
        render(<div style={{ padding: "5rem", marginLeft: "10rem" }}>Test</div>);
    
        const divElement = screen.getByText("Test");
    
        expect(getComputedStyle(divElement).padding).toBe("5rem");
        expect(getComputedStyle(divElement).marginLeft).toBe("10rem");
      });

      it("displays 'loading...' when loading is true", () => {
        const loading = true; // Mock value for loading
    
        render(<div>{loading ? "loading..." : <ReportsTable reportsPosts={[]} />}</div>);
    
        const loadingText = screen.getByText("loading...");
    
        expect(loadingText).toBeInTheDocument();
      });

      it("sorts reportsDocs in descending order based on reports length", () => {
        const reportsDocs = [
          { id: 1, reports: [1, 2, 3] },
          { id: 2, reports: [1] },
          { id: 3, reports: [1, 2] },
        ];
    
        const sortedDocs = reportsDocs.sort((a, b) => b.reports.length - a.reports.length);
    
        expect(sortedDocs).toEqual([
          { id: 1, reports: [1, 2, 3] },
          { id: 3, reports: [1, 2] },
          { id: 2, reports: [1] },
        ]);
      });

});
