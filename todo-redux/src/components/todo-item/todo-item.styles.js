import styled from 'styled-components';

export const TodoItemContainer = styled.div`
    border: 1px solid ${props => !props.isDone ? "blue" : "#29295f"};
    color: ${props => !props.isDone ? "limegreen": "#546e54"};
    border-radius: 10px;
    padding: 10px;
    min-width: 200px;
    text-align: center;
`
export const Name = styled.div`
    font-style: italic;
    font-weight: 400;
    text-decoration: ${props => props.isDone ? "line-through": "none"};
`