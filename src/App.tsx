import React from "react";
import styled from "styled-components";

interface IProps {
    color?: string
}

interface IState {
    color?: string
}

const Button = styled.button`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background-color: red;

    &:hover {
        background-color: blue;
    }
`;

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            color: props.color
        }
    }

    public render() {
        return <div>
            Test test <Button>Button</Button>
        </div>;
    }
}

export default App;