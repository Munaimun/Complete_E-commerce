import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
}
const Title = ({ text, className }: Props) => {
  const newClassName = twMerge("text-4xl font-bold", className);
  return <span className={newClassName}>{text}</span>;
};

export default Title;
