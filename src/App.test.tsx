import React from "react";
import App from "./App";
import reactTestRenderer from "react-test-renderer";

describe('The App component', () => {
    it('should exist', () => {
        expect(App).toBeDefined();
    });

    it('should mount correctly', () => {
        const appEl = reactTestRenderer.create(<App color="red" />);

        expect(appEl.toJSON()).toBeDefined();
    });
})