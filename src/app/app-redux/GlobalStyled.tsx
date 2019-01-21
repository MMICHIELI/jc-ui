import Styled from 'styled-components';
import { breakPoints, THEME_SPACING_UNIT } from './constants';

export const AppWrapper = Styled.div`
display: flex;
flex-direction: column;
background: #b0bec5;
align-items: center; 
`;

export const MainContainer = Styled.div`
flex-wrap: wrap;
width: 100%;
max-width: calc(100% - 32px);
min-height: 100vh;
&{Button.selector} {
  margin: 8px;
}
${breakPoints.tablet}{
  max-width: calc(100% - 16px);
}

${breakPoints.mobile}{
  max-width: calc(100% - 8px);
}
`;

export const FormWrapper = Styled.div`
  & > Button {
    margin: ${THEME_SPACING_UNIT};
  }
`;
