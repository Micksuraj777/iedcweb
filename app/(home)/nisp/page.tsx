import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import React from "react";

const Nisp = () => {
  return (
    <section className="px-3">
      <PageHero pageHeroTitle="NISP" />
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[10%]">
        <div className="text-justify">
          <h2 className="text-center font-semibold text-2xl my-5">WHAT IS NISP ?</h2>
          <p className="w-full max-w-[500px] mx-auto">
            The National Innovation and Startup Policy intends to guide HEIs for promoting students’ driven innovations & start-ups and to engage the students and faculty in innovation and start up activities in campus. The policy aims at enabling HEIs to build, streamline and strengthen the innovation and entrepreneurial ecosystem in campus and will be instrumental in leveraging the potential of student’s creative problem solving and entrepreneurial mind-set, and promoting a strong intra and interinstitutional partnerships with ecosystem enablers and different stakeholders at regional, national and international level. The policy is being implemented by MoE’s Innovation Cell and in coordination AICTE, UGC, state/ UT governments and universities. Implementation of policy has been undertaken for quick adoption by HEIs. The present policy is a way forward to the earlier version of AICTE’s Start-up Policy which was launched in the year 2016 to complement the Startup Action Plan under the Startup India and Stand-up India Program launched by Hon’ble Prime Minster of India.
          </p>
        </div>
        <Link href="https://drive.google.com/file/d/1FMa-jso9VOypbGynh67D6-1z4CLwHzmI/view" target="_blank" className="px-10 py-3 bg-green-500 text-white h-fit w-fit rounded-lg font-semibold hover:text-green-500 hover:bg-white hover:border-green-500 hover:border-[2px] mt-5 md:mt-0">
          VIEW
        </Link>
      </div>
    </section>
  );
};

export default Nisp;
