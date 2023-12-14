import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";

const TwoPage = () => {
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1713px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-10 items-center justify-start w-[28%] md:w-full">
              <Text
                className="sm:text-[44px] md:text-[50px] text-[58px] text-black-900 uppercase"
                size="txtBebasNeueRegular58"
              >
                Welcome to Strum
              </Text>
              <div className="flex flex-col font-cabin items-end justify-start w-full">
                <div className="border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-3 rounded-md w-[95%] md:w-full">
                  <div
                    className="common-pointer flex flex-row gap-3 h-[21px] md:h-auto items-center justify-start mb-2.5 w-[196px]"
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
                <Input
                  name="email"
                  placeholder="Email or username"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                  wrapClassName="mt-16 w-[89%]"
                  type="email"
                ></Input>
                <Input
                  name="password"
                  placeholder="Password"
                  className="leading-[normal] p-0 placeholder:text-blue_gray-900 text-base text-left w-full"
                  wrapClassName="mt-[45px] w-[89%]"
                  type="password"
                ></Input>
                <div className="flex flex-col items-center justify-start mt-36 w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[477px] sm:min-w-full text-base text-center"
                    shape="round"
                  >
                    Log in
                  </Button>
                </div>
                <Text
                  className="mt-[83px] text-base text-black-900 text-right"
                  size="txtCabinRegular16Black900"
                >
                  <span className="text-black-900 font-urbanist font-normal">
                    <>Don&#39;t have an account? </>
                  </span>
                  <a
                    href="javascript:"
                    className="text-black-900 font-urbanist font-semibold underline"
                  >
                    Sign up
                  </a>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
              <Img
                className="h-[916px] md:h-auto object-cover w-[886px]"
                src="images/img_image18.png"
                alt="imageEighteen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoPage;
