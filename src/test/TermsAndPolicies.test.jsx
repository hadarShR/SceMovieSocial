import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import TermsAndPolicies from "../pages/TermsAndPolicies";
import "jest-extended";

configure({ adapter: new Adapter() });

describe("TermsAndPolicies", () => {

    it("should render the component without crashing", () => {
        const wrapper = shallow(<TermsAndPolicies />);
        expect(wrapper).toHaveLength(1);
    });

    it('should render without errors', () => {
        const wrapper = shallow(<TermsAndPolicies />);
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it("should have a div with class 'termsandpolicies'", () => {
        const wrapper = shallow(<TermsAndPolicies />);
        expect(wrapper.find("section.termsandpolicies")).toHaveLength(1);
    });

    it("should have seven 'content' divs", () => {
        const wrapper = shallow(<TermsAndPolicies />);
        expect(wrapper.find("div.content")).toHaveLength(7);
    });
    
});