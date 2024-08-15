import styled from "styled-components";

const StyledComment = styled.div`
  width: 200px;
  padding: 5px 50px;

  div {
    width: 400px;
    height: 50px;
    border: 2px solid black;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 10px;
  }
`;

export function Comment({ comment }) {
  return (
    <StyledComment>
      <div>
        {comment.comment} <span>{comment.time}</span>
      </div>
    </StyledComment>
  );
}
