/**
 * Types for BreakPoints
 */
export interface ScreenProps {
    children: React.ReactNode;
}

export interface BreakPointProps extends ScreenProps {
    name: string;
}