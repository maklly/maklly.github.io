import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const OnePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-bebasneue items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <div className="bg-black-900 flex flex-col items-center justify-start p-[23px] sm:px-5 shadow-bs w-full">
            <div className="flex flex-col items-center justify-start mb-4 md:px-5 w-[15%] md:w-full">
              <Img
                className="h-[103px] md:h-auto object-cover w-full"
                src="images/img_logowhite1.png"
                alt="logowhiteOne"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1707px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-[30%] md:w-full">
              <Text
                className="sm:text-[44px] md:text-[50px] text-[58px] text-black-900 uppercase"
                size="txtBebasNeueRegular58"
              >
                Welcome to Strum
              </Text>
              <div className="flex flex-col font-cabin md:gap-10 gap-[83px] items-start justify-start w-full">
                <div className="border border-blue_gray-100 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[5px] p-[17px] rounded-md w-[91%] md:w-full">
                  <div
                    className="common-pointer flex flex-row gap-3 h-[21px] md:h-auto items-center justify-start w-[196px]"
                    onClick={() => googleSignIn()}
                  >
                    <Img
                      className="h-5 md:h-auto object-cover w-5"
                      src="images/img_google1.png"
                      alt="googleOne"
                    />
                    <Text
                      className="text-base text-blue_gray-900 w-auto"
                      size="txtCabinRegular16"
                    >
                      Continue With Google
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 h-5 md:h-auto items-center justify-start md:ml-[0] ml-[153px] w-[193px]">
                  <Line className="bg-gray-500 h-px w-[32%]" />
                  <Text
                    className="text-base text-gray-500_01 w-auto"
                    size="txtCabinRegular16Gray50001"
                  >
                    Or
                  </Text>
                  <Line className="bg-gray-500 h-px w-[32%]" />
                </div>
                <div className="md:h-[196px] h-[331px] relative w-full">
                  <div className="absolute flex flex-col gap-5 h-[265px] md:h-auto items-start justify-start right-[0] top-[0] w-[477px] sm:w-full">
                    <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                      <Input
                        name="name"
                        placeholder="Name"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                        wrapClassName="w-full"
                        type="text"
                      ></Input>
                    </div>
                    <Input
                      name="email"
                      placeholder="Email"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                      wrapClassName="w-[89%]"
                      type="email"
                    ></Input>
                    <Input
                      name="password"
                      placeholder="Password"
                      className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                      wrapClassName="w-[89%]"
                      type="password"
                    ></Input>
                  </div>
                  <Button
                    className="absolute bottom-[0] cursor-pointer font-medium leading-[normal] left-[0] min-w-[477px] sm:min-w-full text-base text-center"
                    shape="round"
                  >
                    Sign up
                  </Button>
                </div>
                <Text
                  className="md:ml-[0] ml-[133px] text-base text-black-900 text-right"
                  size="txtCabinRegular16Black900"
                >
                  <span className="text-black-900 font-urbanist font-normal">
                    Already have an account?{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-black-900 font-urbanist font-semibold underline"
                  >
                    Log in
                  </a>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[52%] md:w-full">
              <Img
                className="h-[915px] md:h-auto object-cover w-full"
                src="images/img_image17.png"
                alt="imageSeventeen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnePage;
