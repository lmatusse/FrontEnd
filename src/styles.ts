import styled from 'styled-components';

import Button from './components/Button';
 
export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: min(1000px, 100%);
    background-color: #fff;
`;

export const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    text-align: left;

    padding: 30px 0;
`;

export const NewOrderButton = styled(Button)`
    font-size: 14px;
    border-radius: 3px;
`;

export const SaveOrderButton = styled(Button)`
    font-size: 14px;
    padding: 10px 30px !important;
    border-radius: 3px;
`;