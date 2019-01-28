import * as React from 'react';
import { HandleErrorProps } from '../../../app-redux/types';

import { ErrorWrapper, ErrorTitle, ErrorLabel, Error } from './HandleErrorStyled';

/**
 * HandleError Top level components to handle errors
 * @param WrappedComponent 
 */
const HandleError = <ComponentProps extends object>(WrappedComponent: React.ComponentType<ComponentProps>) => {
    return class HOCDegrade extends React.Component<ComponentProps & HandleErrorProps> {
        public render() {
            if (this.props.internalErrorData !== null && this.props.internalErrorData !== undefined) {
                return this.props.internalErrorData.hasInternalError ?
                    (
                        <ErrorWrapper>
                            <ErrorTitle>Oh Shit! </ErrorTitle>
                            <ErrorLabel> Something went wrong while displaying <span>{WrappedComponent.name}</span>.</ErrorLabel>
                            <Error> {this.props.internalErrorData.infoInternalError.componentStack} </Error>
                        </ErrorWrapper>
                    )
                    : <WrappedComponent {...this.props} />;
            }

            return null;
        }
    };
};

export default HandleError;