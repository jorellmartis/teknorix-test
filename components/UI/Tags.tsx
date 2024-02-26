"use client";
import { Cross1Icon } from "@radix-ui/react-icons";

type TagProps = {
  type: "filter" | "text";
  text: string;
};
const Tags = ({ type = "filter", text = "Tags" }: TagProps) => {
  switch (type) {
    case "filter":
      return (
        <div className="flex bg-white w-min px-3 py-1 gap-1 items-center">
          <span className="text-slate-600">{text}</span>
          <Cross1Icon
            className="cursor-pointer"
            color="green"
            onClick={() => {
              console.log("test");
            }}
          />
        </div>
      );
      break;
    case "text":
      return (
        <div className="bg-slate-300 w-min py-1 px-4 text-slate-700 font-semibold">
          {text}
        </div>
      );
      break;
  }
};

export default Tags;
