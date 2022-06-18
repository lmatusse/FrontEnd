import styled from 'styled-components';
interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
    background-color: ${(props) => (props.outlined ? 'transparent' : 'var(--primary)')};
    color: ${(props) => (props.outlined ? 'var(--primary)' : 'var(--white)')};
    border: ${(props) => (props.outlined ? '1px solid var(--primary)' : 'none')};

    padding: 10px 15px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.outlined ? 'var(--light-300)' : 'var(--primary-light-hover)')};
    }
`;