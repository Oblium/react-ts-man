import React from "react";

interface IProps {
    color: string
}

interface IState {
    color: string
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            color: props.color
        }
    }

    public render() {
        return <div>Test test</div>;
    }
}

export default App;