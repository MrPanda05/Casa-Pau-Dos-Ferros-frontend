//import Image from "next/image";
import Header from "@/components/common/Header";
import DjangoTest from "@/components/test/DjangoTest";
import ShowPropsTest from "@/components/test/ShowPropsTest";

export default function Page() {
  return (
    <div className="grid grid-rows-3">
      <Header />
      <ShowPropsTest />
      <DjangoTest />
    </div>
  );
}
