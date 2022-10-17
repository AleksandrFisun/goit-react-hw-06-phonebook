import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
export const FieldSearch = styled.input`
  width: 300px;
  height: 30px;
  margin:5px;
  border-radius: 4px;
  border: none;
  }

  &:focus {
  outline: none;
  border-radius: 5px;
  }
`;
