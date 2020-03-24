import styled from 'styled-components';

const StyledCodeBlockPre = styled.pre`
  background-color: darkslategrey;
  border-radius: 0.5rem;
  color: #e6ecf1;
`;

const StyledCodeLine = styled.div`
  counter-increment: line;
  font: inherit;
  padding: 0;
  position: relative;
  padding-left: 44px;
  padding-right: 14px;
  word-wrap: normal;
  white-space: pre;
  &:before {
    bottom: 0;
    color: #5c6975;
    content: counter(line);
    display: inline-block;
    font-size: 12px;
    left: 4px;
    overflow: hidden;
    position: absolute;
    text-align: right;
    text-overflow: ellipsis;
    top: 2px;
    user-select: none;
    white-space: nowrap;
    width: 24px;
    -ms-user-select: none;
    -moz-user-select: none;
    background-color: transparent;
    -webkit-user-select: none;
  }
`;

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'code-line':
      return <StyledCodeLine {...attributes}>{children}</StyledCodeLine>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    case 'code-block':
      return (
        <StyledCodeBlockPre {...attributes}>
          <code className="language-jsx">{children}</code>
        </StyledCodeBlockPre>
      );
    default:
      return <div {...attributes}>{children}</div>;
  }
};

export default Element;
