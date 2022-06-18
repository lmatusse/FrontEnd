import styled, { css } from 'styled-components';

import Button from '../Button';
 
export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: min(950px, 100%);
    background-color: #fff;

    @media (min-width: 500px) {
        // border-left: 1px solid var(--outline);
        // border-right: 1px solid var(--outline);
    }
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

    padding: 12px 20px;
    // border-bottom: 1px solid var(--outline);

    > button {
        padding: 5px 8px;
        border-radius: 50%;

        outline: 0;
        cursor: pointer;

        &:hover {
            background-color: var(--twitter-dark-hover);
        }
    }
`;

export const NewOrderButton = styled(Button)`
    padding: 10px 16px;
    font-size: 13px;
    border-radius: 3px !important;
`;