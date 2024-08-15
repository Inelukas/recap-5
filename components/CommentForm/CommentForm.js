import styled from "styled-components";

const StyledCommentForm = styled.form`
  width: 200px;
  height: 400px;
  padding: 50px;

  textarea {
    width: 400px;
    height: 200px;
  }
`;

export function CommentForm({ onSubmitComment, slug }) {
  return (
    <StyledCommentForm
      onSubmit={(event) => {
        event.preventDefault();
        const comment = event.target.comment.value;
        onSubmitComment(slug, comment);
        event.target.comment.value = "";
      }}
    >
      <label name="comment">Comment</label>
      <textarea id="comment" name="comment" />
      <button>Submit</button>
    </StyledCommentForm>
  );
}
