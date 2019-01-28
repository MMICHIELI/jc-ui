import * as React from 'react';
import * as lod from 'lodash';

import HandleError from '../../common/exception/components/HandleError';
import { InternalErrorData, RadioOption } from '../../app-redux/types';

import { TextField, Grid } from '@material-ui/core';
import { FormWrapper, StyledSpan } from '../../app-redux/GlobalStyled';

import ColorInput from './ColorInput';
import RadioInput from './RadioInput';
import { typesOptions } from '../redux/types';

interface ThemeMakerProps {
    primaryColor?: string;
    secondaryColor?: string;
    type?: string;
    themeName?: string;
    primaryColorChange(color?: string): void;
    secondaryColorChange(color?: string): void;
    typeChange(type?: string): void;
    themeNameChange(themeName?: string): void;
}

interface ThemeMakerState {
    primaryColor?: string;
    secondaryColor?: string;
    type?: string;
    themeName?: string;
    radioOptions?: Array<RadioOption>;
    internalErrorData: InternalErrorData;
    formTouched: boolean;
}

const initialState: ThemeMakerState = {
    internalErrorData: {
        hasInternalError: false,
        infoInternalError: {
            componentStack: ''
        }
    },
    formTouched: false
};

/**
 * Theme Maker component
 */
class ThemeMakerComponent extends React.Component<ThemeMakerProps, ThemeMakerState> {
    constructor(props: ThemeMakerProps) {
        super(props);
        this.state = {

            primaryColor: this.props.primaryColor || '',
            secondaryColor: this.props.secondaryColor || '',
            type: this.props.type || '',
            themeName: this.props.themeName || '',
            ...initialState,
        };

        this.handlePrimaryChange = this.handlePrimaryChange.bind(this);
        this.handleSecondaryChange = this.handleSecondaryChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleThemeNameChange = this.handleThemeNameChange.bind(this);
    }

    public componentWillMount() {
        const { type } = this.props;
        this.setState({
            radioOptions: lod.map(typesOptions, (option, index) => {
                // tslint:disable-next-line:no-console
                console.log('Type: ', type);

                return {
                    id: index,
                    label: option,
                    value: option,
                    checked: type === option
                };
            })
        });
    }

    public componentDidCatch(error: Error, info: React.ErrorInfo) {
        if (JSON.stringify(error)) {
            this.setState({
                internalErrorData: {
                    hasInternalError: true,
                    infoInternalError: info
                }
            });
        }
    }

    public render() {
        const { primaryColor, secondaryColor, radioOptions, themeName } = this.state;

        // tslint:disable-next-line:no-console
        console.log('ThemeMaker radioOptions: ', radioOptions);
        return (
            <FormWrapper>
                <Grid item lg={6} md={12} sm={12}>
                    <ColorInput
                        id="primary-main-field"
                        label="Primary Color"
                        value={primaryColor}
                        onChange={this.handlePrimaryChange}
                        internalErrorData={this.state.internalErrorData}
                    />
                    <ColorInput
                        id="secondary-main-field"
                        label="Secondary Color"
                        value={secondaryColor}
                        onChange={this.handleSecondaryChange}
                        internalErrorData={this.state.internalErrorData}
                    />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                    <RadioInput
                        id="type-selector"
                        legend="Type"
                        options={radioOptions}
                        onChange={this.handleTypeChange}
                        internalErrorData={this.state.internalErrorData}
                    />
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                    <StyledSpan>
                        <TextField
                            id="theme-name-field"
                            label="Theme Name"
                            value={themeName}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleThemeNameChange}
                        />
                    </StyledSpan>
                </Grid>
            </FormWrapper >
        );
    }

    private handlePrimaryChange = (color?: string) => {
        this.setState({
            primaryColor: color
        }, () => {
            this.props.primaryColorChange(this.state.primaryColor);
        });
    }
    private handleSecondaryChange = (color?: string) => {
        this.setState({
            secondaryColor: color
        }, () => {
            this.props.secondaryColorChange(this.state.secondaryColor);
        });
    }
    private handleTypeChange = (type?: string) => {
        this.setState({
            type: type
        }, () => {
            this.props.typeChange(this.state.type);
        });
    }
    private handleThemeNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            themeName: event.target.value
        }, () => {
            this.props.themeNameChange(this.state.themeName);
        });
    }
}
const ThemeMaker = HandleError(ThemeMakerComponent);
export default ThemeMaker;