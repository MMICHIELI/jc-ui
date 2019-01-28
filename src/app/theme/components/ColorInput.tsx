import * as React from 'react';

import HandleError from '../../common/exception/components/HandleError';

import InputMask from 'react-input-mask';

import { TextField } from '@material-ui/core';
import { StyledInput } from './ColorInputStyled';

interface ColorInputProps {
    id: string;
    label: string;
    value?: string;
    onChange(value?: string): void;
}

interface ColorInputState {
    value?: string;
}

/**
 * ColorInput component
 */
class ColorInputComponent extends React.Component<ColorInputProps, ColorInputState> {
    constructor(props: ColorInputProps) {
        super(props);
        this.state = {
            value: this.props.value || ''
        };
        this.onValueChange = this.onValueChange.bind(this);
    }

    public render() {
        const { value } = this.state;
        const { id, label } = this.props;

        return (
            <StyledInput>
                <InputMask
                    mask="#******"
                    value={value}
                    onChange={this.onValueChange}
                >
                    {() =>
                        <TextField
                            id={id}
                            label={label}
                            margin="normal"
                            variant="outlined"
                        />
                    }
                </InputMask>
            </StyledInput>
        );
    }

    private onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.target.value
        }, () => {
            this.props.onChange(this.state.value);
        });
    }
}

const ColorInput = HandleError(ColorInputComponent);
export default ColorInput;
