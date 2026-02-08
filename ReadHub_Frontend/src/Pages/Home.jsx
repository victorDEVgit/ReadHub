import React from "react";
import ContCard from "../Components/ContCard";

const Home = () => {
  return (
    <div className="pb-30">
      <div className="flex pt-13 pb-[26px] justify-between items-center px-[16px]">
        <div className="flex flex-row items-center">
          <span className="flex h-[46px] w-[46px] bg-[#d9d9d9] rounded-full justify-center">
            <img src="/profile.svg" alt="profile" className="w-[30px]" />
          </span>
          <span className="flex flex-col pl-1">
            <p className="text-tittle_Small font-medium xsm:text-[13px]">
              Welcome back
            </p>
            <p className="text-tittle_Large font-medium xsm:text-[18px]">
              ReadHub
            </p>
          </span>
        </div>
        <div>
          <div className="w-fit h-[36px] bg-[#ff5800]/40 border-1 border-[#ff5b04] text-[#ff5b04] font-medium rounded-full flex justify-center items-center px-3 sm:px-[24px] xsm:text-[13px]">
            7 day Reading streak{" "}
            <img src="/fire.svg" alt="fire" className="w-[24px] xsm:w-[16px]" />
          </div>
        </div>
      </div>

      <div className="px-[16px] pb-[26px] xsm:text-[15px]">
        <div className="bg-primary min-h-[177px] rounded-[20px] relative overflow-hidden text-white px-[16px] py-[23px] flex flex-col justify-between">
          <span className="flex h-[100px] w-[100px] bg-white/20 rounded-full absolute left-72 top-[-30px]"></span>
          <span className="flex h-[100px] w-[100px] bg-white/20 rounded-full absolute top-30 left-[-40px]"></span>
          <div className="flex items-center">
            <img src="/Group2.svg" alt="asset" className="w-[20px] h-[20px]" />
            <p className="pl-2 font-medium">Daily Reading Goal</p>
          </div>
          <div className="flex flex-col">
            <span className="flex items-baseline-last">
              <p className="text-display_Medium leading-10">0</p>
              <p className="">/ 30 min</p>
            </span>
            <span className="w-full bg-[#cde1fe] h-[14px] flex rounded-full"></span>
          </div>
          <div>
            <p className="font-medium">30 minutes to reach your goal</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-[16px] pb-5">
        <div>
          <div className="bg-white w-[79px] h-[80px] rounded-[15.89px] flex flex-col justify-center items-center">
            <div className="bg-primary rounded-[8.45px] w-[42px] h-[42.53px] flex justify-center">
              <img src="/library_books.svg" />
            </div>
            <p className="text-[#4d4d4d] text-body_Small">Library</p>
          </div>
        </div>

        <div>
          <div className="bg-white w-[79px] h-[80px] rounded-[15.89px] flex flex-col justify-center items-center">
            <div className="bg-[#F59E0B] rounded-[8.45px] w-[42px] h-[42.53px] flex justify-center">
              <img src="/note_stack.svg" />
            </div>
            <p className="text-[#4d4d4d] text-body_Small">Notes</p>
          </div>
        </div>

        <div>
          <div className="bg-white w-[79px] h-[80px] rounded-[15.89px] flex flex-col justify-center items-center">
            <div className="bg-[#10B981] rounded-[8.45px] w-[42px] h-[42.53px] flex justify-center">
              <img src="/lock_clock.svg" />
            </div>
            <p className="text-[#4d4d4d] text-body_Small">Focus</p>
          </div>
        </div>

        <div>
          <div className="bg-white w-[79px] h-[80px] rounded-[15.89px] flex flex-col justify-center items-center">
            <div className="bg-[#A855F7] rounded-[8.45px] w-[42px] h-[42.53px] flex justify-center">
              <img src="/explore.svg" />
            </div>
            <p className="text-[#4d4d4d] text-body_Small">Explore</p>
          </div>
        </div>
      </div>

      <div className="px-[16px] pb-10">
        <div className="bg-[#fff] px-[16px] min-h-[133px] rounded-[20px] py-[20px] flex flex-col justify-between">
          <p className="text-tittle_Small text-[#5f5f61]">Daily Inspiration</p>
          <p className="text-black font-medium text-[14px] leading-4">
            “Reading is essential for those who seek to rise above the ordinary”
          </p>
          <p className="text-primary text-tittle_Small">- Jim John</p>
        </div>
      </div>

      <div className="px-[16px]">
        <div>
          <p className="text-black font-semibold mb-5 ">Continue Reading</p>
        </div>

        <ContCard
          fileName={"A broken people playlist"}
          page={10}
          totalPage={100}
        ></ContCard>
        <ContCard
          fileName={"The power of habit"}
          page={10}
          totalPage={100}
        ></ContCard>
        <ContCard
          fileName={"Atomic habits"}
          page={20}
          totalPage={100}
        ></ContCard>
        <ContCard fileName={"Deep work"} page={30} totalPage={100}></ContCard>
      </div>
    </div>
  );
};

export default Home;
