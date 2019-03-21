import * as React from 'react';

import HandleError from '../../common/exception/components/HandleError';
import { Drawer } from '@material-ui/core';
import { SideList } from './ListUtils';

interface BasicDrawerState {
    isOpen: boolean;
}

interface BasicDrawerProps {
    id: number;
    onToggle(value: string): void;
}

/**
 * BasicDrawer Component
 */
class BasicDrawerContainer extends React.Component<BasicDrawerProps, BasicDrawerState> {
    constructor(props: BasicDrawerProps) {
        super(props);
        this.onToggleDrawer = this.onToggleDrawer.bind(this);
    }

    public render() {
        const { isOpen } = this.state;

        return (
            <Drawer
                open={isOpen}
                onClose={this.onToggleDrawer}
            >
                <div
                    tabIndex={0}
                    role="button"
                >
                    <SideList />
                </div>
            </Drawer>
        );
    }
    private onToggleDrawer = (event: React.SyntheticEvent) => {
        this.setState({
            isOpen: Boolean(event.target)
        });
    }
}

const BasicDrawer = HandleError(BasicDrawerContainer);

export default BasicDrawer;