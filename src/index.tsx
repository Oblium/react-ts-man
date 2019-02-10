import React from 'react';

export interface IProps {
    color: string
}

interface IState {
    color: string
}

class Box extends React.Component<IProps, IState> {
    private gigi: string;

    constructor(props: IProps) {
        super(props);

        this.gigi = "baaa";
        this.state = {
            color: this.props.color
        }
    }

    public render() {
        return <div />;
    }
}

export default Box;