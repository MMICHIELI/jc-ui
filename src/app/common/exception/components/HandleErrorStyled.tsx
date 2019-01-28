import * as styledComponents from 'styled-components';

const { default: styled } = styledComponents;

export const ErrorWrapper = styled.div`
    padding: 13px;
    font-family: consolas;
`;

export const ErrorTitle = styled.h3`
    font-size: 1.750em;
    color: #FF0000;
`;

export const ErrorLabel = styled.div`
    font-weight: 800;
    font-size: 1.500em;
    & > span {
        color: #FF0000;
    }
`;

export const Error = styled.div`
    margin-top: 16px;
`;