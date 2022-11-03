import ReactMarkdown from 'react-markdown';

interface outputBoxProps {
  inputText: string;
}

export const OutputBox = ({ inputText }: outputBoxProps) => {
  return (
    <div id="outputArea">
      <ReactMarkdown>{inputText}</ReactMarkdown>
    </div>
  );
};
