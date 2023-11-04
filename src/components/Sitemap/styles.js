import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import theme, { breakpoints } from '../../../utils/theme';

export const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 150px;
`;

export const Title = styled.h2`
  font-size: 80px;
  font-family: Gothic;
  text-align: center;
  letter-spacing: 10px;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 80px;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 150px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 150px;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    font-size: 150px;
  }
`;

export const ComingSoon = styled.p`
  font-family: Gothic;
  font-size: 40px;
  font-weight: 700;
  margin-top: 40px
`;

export const Map = styled.div`
    padding: 0 24px;
    @media screen and (min-width: ${breakpoints.md}) {
        padding: 0 24px;
    }
    @media screen and (min-width: ${breakpoints.l}) {
        padding: 0 120px;
    }
`