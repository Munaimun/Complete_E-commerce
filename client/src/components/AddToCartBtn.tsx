import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  title?: string;
}

const AddToCartBtn = ({ className, title }: Props) => {
  //because of this tailwind merge, every time we give any property to className that will get first priority, and then this classes will work
  const newClassName = twMerge(
    "bg-slate-400 uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
    className
  );

  return <button className={newClassName}>{title}</button>;
};

export default AddToCartBtn;
