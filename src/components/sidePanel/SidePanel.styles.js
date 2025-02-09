import styled from 'styled-components';

export const SidePanelMain = styled.div`
    
    position: fixed;
    width: 35%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 2;
    max-height: 100%;
    overflow-y: auto;
    right: 0;
    background-color: #cccccc;
`;

export const SidePanelSection = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
`;


export const SidePanelHeader = styled.div`
`;