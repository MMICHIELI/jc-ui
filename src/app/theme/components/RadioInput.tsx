import * as React from 'react';
import * as lod from 'lodash';

import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@material-ui/core';
import { StyledSpan } from '../../app-redux/GlobalStyled';

import { RadioOption } from '../../app-redux/types';
import HandleError from '../../common/exception/components/HandleError';

interface RadioInputProps {
    id: string;
    options?: Array<RadioOption>;
    legend?: string;
    onChange(value?: string): void;
}

interface RadioInputState {
    currentValue?: string;
}

/**
 * RadioInput component
 */
class RadioInputComponent extends React.Component<RadioInputProps, RadioInputState> {
    constructor(props: RadioInputProps) {
        super(props);
        this.state = {
            currentValue: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    public componentWillMount() {
        lod.forEach(this.props.options, ({ checked, value }) => {
            if (checked) {
                this.setState({
                    currentValue: value
                });
            }
        });
    }

    public render() {
        const { id, options, legend } = this.props;
        const { currentValue } = this.state;

        return (
            <StyledSpan>
                <FormControl>
                    {legend && <FormLabel>{legend}</FormLabel>}
                    <RadioGroup
                        aria-label={id}
                        name={id}
                        onChange={this.onChange}
                    >
                        {lod.map(options, ({ label, value }, key) => (
                            <FormControlLabel
                                key={key}
                                value={value}
                                control={<Radio checked={currentValue === value} />}
                                label={label}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </StyledSpan>
        );
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentValue: event.target.value
        }, () => {
            // tslint:disable-next-line:no-console
            console.log('RadioInput currentValue = ', this.state.currentValue);
            this.props.onChange(this.state.currentValue);
        });
    }
}

const RadioInput = HandleError(RadioInputComponent);
export default RadioInput;