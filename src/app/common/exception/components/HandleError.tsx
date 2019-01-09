import * as React from 'react';
import { HandleErrorProps } from '../../../app-redux/types';

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
            <div>
              <h3>Oh Shit! </h3>
              <p> Something went wrong while displaying {WrappedComponent.name} Component.</p>
              <span> {this.props.internalErrorData.infoInternalError.componentStack} </span>
            </div>
          )
          : <WrappedComponent {...this.props} />;
      }

      return null;
    }
  };
};

export default HandleError;