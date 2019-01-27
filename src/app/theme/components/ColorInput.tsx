import * as React from 'react';
import HandleError from '../../common/exception/components/HandleError';

interface ColorInputProps {
    id: string;
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
    }
}

const ColorInput = HandleError(ColorInputComponent);
export default ColorInput;
