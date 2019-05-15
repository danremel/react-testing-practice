import React from 'react';
import { create } from 'react-test-renderer';
import axios from 'axios';
import Users from '../Users';

jest.mock('axios');

describe("Users component", () =>{
  it("shows a list of users", async () => {
    const response = {
      data: [{ name: "Dan Remel" }, { name: "Annmarie Stockinger" }]
    };
    axios.get.mockResolvedValue(response);
    const component = create(<Users />);
    const instance = component.getInstance();
    await instance.componentDidMount();
    const root = component.root;
    const listOfLi = root.findAll(element => element.type === "li");
    expect(listOfLi[0].props.children).toBe("Dan Remel")
    expect(listOfLi[1].props.children).toBe("Annmarie Stockinger")
  });
});
