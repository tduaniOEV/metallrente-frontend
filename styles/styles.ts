import styled from 'styled-components';

export const MDBreakPoint = 640;
export const LGBreakPoint = 1280;

export const colors = {
  VKBDunkelBlau: '#024589',
  VKBHellBlau: '#E5EEFA',
  VKBWeiss: '#FFF',
  VKBHellgrau: '#E3E3E3',
  VKBMittelgrau: '#BBBBBB',
  VKBGrau: '#909090',
  VKBDunkelgrau: '#666666',
  VKBSchwarz: '#191919',
  VKBBlattgruen: '#BAC800',
  VKBHimmlblau: '#048DBB',
  VKBEisblau: '#8CB9BE',
  VKBWaldgruen: '#0B885E',
  VKBPflaume: '#851573',
  Alert: '#D90000',
  SPKRot: '#FF0000',
  VRBlau: '#2464AD',
  VROrange: '#ED702D',
};

const H1 = styled.h1`
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};
  // S view - Mobile
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    font-size: 32px;
    line-height: 1.1;
    // LG view - desktop
  }
`;
const H2 = styled.h2`
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};
  // S view - Mobile
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    font-size: 22px;
    line-height: 1.1;
    // LG view - desktop
  }
`;
const H3 = styled.h3`
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};
  // S view - Mobile
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
  }
`;
const H4 = styled.h4`
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};
  // S view - Mobile
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
  }
`;
const H5 = styled.h5`
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};
  // S view - Mobile
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
  }
`;
const H6 = styled.h6`
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};
  // S view - Mobile
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
  }
`;

const Hs = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

// Schutz Checker styles
const VKB2 = styled.span`
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};
  // S view - Mobile
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    font-size: 22px;
    line-height: 1.1;
    // LG view - desktop
  }
`;
const VKB3 = styled.span`
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};
  // S view - Mobile
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    font-size: 20px;
    line-height: 1.3;
    // LG view - desktop
  }
`;
const VKB4 = styled.span`
  font-family: ubuntu regular;
  color: ${colors.VKBDunkelgrau};
  // S view - Mobile
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    font-size: 18px;
    line-height: 1.1;
    // LG view - desktop
  }
`;
const VKB5 = styled.span`
  // S view - Mobile
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};

  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
    font-size: 15px;
    line-height: 1.5;
  }
`;
const VKB5Bold = styled.span`
  // S view - Mobile
  font-family: ubuntu bold;
  color: ${colors.VKBDunkelBlau};

  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
    font-size: 15px;
    line-height: 1.5;
  }
`;
const VKB5BoldNeg = styled.span`
  // S view - Mobile
  font-family: ubuntu bold;
  color: ${colors.VKBWeiss};
  background: ${colors.VKBDunkelBlau};
  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
    font-size: 15px;
    line-height: 1.5;
  }
`;
const VKB6 = styled.span`
  // S view - Mobile
  font-family: ubuntu regular;
  color: ${colors.VKBDunkelBlau};

  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
    font-size: 16px;
    line-height: 1.5;
  }
`;
const VKB6Medium = styled.span`
  // S view - Mobile
  font-family: ubuntu regular;
  color: ${colors.VKBDunkelBlau};

  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
    font-size: 16px;
    line-height: 1.5;
  }
`;
const VKB6Bold = styled.span`
  // S view - Mobile
  font-family: ubuntu regular;
  color: ${colors.VKBDunkelBlau};

  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
    font-size: 16px;
    line-height: 1.5;
  }
`;
const VKB7 = styled.span`
  // S view - Mobile
  font-family: ubuntu regular;
  color: ${colors.VKBDunkelBlau};

  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
    font-size: 14px;
    line-height: 1.4;
  }
`;
const VKB7Neg = styled.span`
  // S view - Mobile
  font-family: ubuntu regular;
  color: ${colors.VKBWeiss};
  background: ${colors.VKBDunkelBlau};

  @media (min-width: ${MDBreakPoint}) {
    // MD view - Tablet
  }
  @media (min-width: ${LGBreakPoint}) {
    // LG view - desktop
    font-size: 16px;
    line-height: 1.5;
  }
`;

const schutzStyles = {
  ...Hs,
  VKB2,
  VKB3,
  VKB4,
  VKB5,
  VKB5Bold,
  VKB5BoldNeg,
  VKB6,
  VKB6Medium,
  VKB6Bold,
  VKB7,
  VKB7Neg,
};

export { schutzStyles };
