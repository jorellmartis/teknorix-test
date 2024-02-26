import { getLocations } from "@/api/modules";
import FiltersAll from "@/components/Filters/FiltersAll";
import Header from "@/components/Naviagtion/Header";
import Button from "@/components/UI/Button";
import SelectSingle from "@/components/UI/SelectSingle";
import Tags from "@/components/UI/Tags";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <FiltersAll /> */}
      <div className="flex justify-center items-center h-[50vh]">
        <Button btnText="Go to Jobs" href="/jobs" />
      </div>
    </main>
  );
}
