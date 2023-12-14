import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-alegreyasans items-center justify-start mx-auto w-full">
        <div className="h-[165px] md:h-[210px] md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-end ml-auto mr-[46px] mt-[51px] w-[34%]">
            <div className="flex flex-col justify-start w-[43%] md:w-full">
              <div className="flex flex-row gap-[57px] items-center justify-end ml-4 md:ml-[0] w-[95%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtAlegreyaSansRegular32"
                >
                  Home
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtAlegreyaSansRegular32"
                >
                  Vacancies
                </Text>
              </div>
              <Line className="bg-white-A700 h-0.5 mr-[162px] w-[41%]" />
            </div>
            <Text
              className="md:ml-[0] ml-[42px] md:mt-0 mt-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtAlegreyaSansRegular32"
            >
              Message
            </Text>
            <Text
              className="md:ml-[0] ml-[134px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtAlegreyaSansRegular32"
            >
              Profile
            </Text>
          </div>
          <div className="absolute bg-black-900 flex flex-row h-full inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mb-4 ml-3.5 w-[98%]">
              <Button
                className="common-pointer cursor-pointer leading-[normal] mb-[31px] min-w-[104px] md:mt-0 mt-[25px] rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-center underline"
                onClick={() => navigate("/two")}
                color="blue_A700_ea"
                size="xs"
              >
                Log in
              </Button>
              <div className="h-[51px] md:ml-[0] ml-[18px] md:mt-0 mt-[26px] relative w-[8%] md:w-full">
                <div className="absolute bg-blue-A700_ea h-[47px] left-[0] rounded-[10px] shadow-bs top-[0] w-[88%]"></div>
                <a
                  href="javascript:"
                  className="absolute h-full inset-y-[0] my-auto right-[0] md:text-3xl sm:text-[28px] text-[32px] text-shadow-ts text-white-A700 underline"
                >
                  <Text>Sign up</Text>
                </a>
              </div>
              <Img
                className="h-[103px] sm:h-auto md:ml-[0] ml-[518px] object-cover w-[15%] md:w-full"
                src="images/img_logowhite1.png"
                alt="logowhiteOne"
              />
              <Text
                className="md:ml-[0] ml-[157px] md:mt-0 mt-[29px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtAlegreyaSansRegular32"
              >
                Home
              </Text>
              <Text
                className="md:ml-[0] ml-[57px] md:mt-0 mt-[29px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtAlegreyaSansRegular32"
              >
                Vacancies
              </Text>
              <Text
                className="ml-11 md:ml-[0] md:mt-0 mt-[33px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtAlegreyaSansRegular32"
              >
                Message
              </Text>
              <Text
                className="md:ml-[0] ml-[137px] md:mt-0 mt-[29px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtAlegreyaSansRegular32"
              >
                Profile
              </Text>
            </div>
          </div>
        </div>
        <div className="h-[916px] md:px-5 relative w-full">
          <Img
            className="h-[916px] m-auto object-cover w-full"
            src="images/img_image15.png"
            alt="imageFifteen"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[78px] inset-x-[0] justify-start mx-auto top-[24%]">
            <Text
              className="md:ml-[0] ml-[139px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
              size="txtAlegreyaSansRegular40"
            >
              The goal of the STRUM{" "}
            </Text>
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
              size="txtAlegreyaSansRegular36"
            >
              <>
                Many well-known labels and bands are looking for promising,
                young and talented artists. <br />
                We will help you find your place among them
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
