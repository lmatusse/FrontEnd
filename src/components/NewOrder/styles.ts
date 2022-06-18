import styled from 'styled-components';


interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
    background-color: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
    color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
    border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

    padding: 8px 10px !important;

    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.outlined ? 'var(--outline) !important' : 'var(--twitter-light) !important')};
    }
`;