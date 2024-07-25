"use client";
import PageHero from "@/components/shared/PageHero";
import React, { useState } from "react";

enum ExecomYear {
  "2016-2017" = "2016-2017",
  "2017-2018" = "2017-2018",
  "2018-2019" = "2018-2019",
  "2019-2020" = "2019-2020",
  "2020-2021" = "2020-2021",
  "2021-2022" = "2021-2022",
  "2022-2023" = "2022-2023",
  "2023-2024" = "2023-2024",
  "2024-2025" = "2024-2025",
}
const Team = () => {
  const [] = useState("");
  return (
    <section>
      <PageHero pageHeroTitle="EX-COM Members" />
      <div className="flex flex-col items-end justify-end mx-auto max-w-[1500px] p-2 gap-1">
        <label
          htmlFor="team-execom-year-select"
          className="text-xs text-green-500"
        >
          Select Ex-Com
        </label>
        <select
          id="team-execom-year-select"
          className="border focus:outline-none focus:border-green-300 min-w-[250px] p-2 font-medium rounded-xl bg-transparent"
        >
          {Object.values(ExecomYear).map((year) => (
            <option key={year} value={year} className="text-xs">
              {year}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Team;
