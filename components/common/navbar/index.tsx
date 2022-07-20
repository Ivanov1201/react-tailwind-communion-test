//modules
import React, { FC, ReactNode } from "react";
import { useRouter } from 'next/router';


type NavbarProps = {
  children: ReactNode;
};

const Navbar: FC<NavbarProps> = ({ children }) => {

  const router = useRouter().pathname.split('/')[1]
  console.log(router)

  return (
    <div className="max-w-sm ml-auto mr-auto">
      <section
        id="bottom-navigation"
        className="block max-w-sm mx-auto fixed inset-x-0 bottom-0 z-10 bg-white navbar-shadow"
      >
        <div id="tabs" className="flex justify-between mx-[35px]">
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center navbar-border-transparent  py-[20px] border-t-4 border-active"
          >
            <svg
              className="mx-auto"
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0578 3.53423C10.1873 2.69887 8.81275 2.69887 7.94218 3.53423L3.31574 7.97357C3.20239 8.08234 3.12614 8.22402 3.0978 8.37854C2.54367 11.4004 2.50277 14.494 2.97681 17.5295L3.08933 18.25H6.06579V12.0387C6.06579 11.6244 6.40158 11.2887 6.81579 11.2887H12.1842C12.5984 11.2887 12.9342 11.6244 12.9342 12.0387V18.25H15.9107L16.0232 17.5295C16.4972 14.494 16.4563 11.4004 15.9022 8.37854C15.8739 8.22402 15.7976 8.08234 15.6843 7.97357L11.0578 3.53423ZM6.90363 2.45191C8.35458 1.05965 10.6454 1.05965 12.0964 2.45191L16.7228 6.89125C17.0634 7.21804 17.2925 7.64373 17.3776 8.10799C17.9621 11.2956 18.0053 14.559 17.5052 17.7609L17.3245 18.9184C17.2497 19.3971 16.8374 19.75 16.3529 19.75H12.1842C11.77 19.75 11.4342 19.4142 11.4342 19V12.7887H7.56579V19C7.56579 19.4142 7.23 19.75 6.81579 19.75H2.64706C2.16258 19.75 1.75029 19.3971 1.67554 18.9184L1.49478 17.7609C0.994728 14.559 1.03788 11.2956 1.62241 8.10799C1.70754 7.64373 1.93662 7.21804 2.27719 6.89125L6.90363 2.45191Z"
                fill="#FF8A00 "
                stroke="#FF8A00"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center navbar-border-transparent  py-[20px] "
          >
            <svg
              className="mx-auto"
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.754771 1.72392C0.655544 0.532487 1.99043 -0.12625 2.90674 0.485876L3.20315 0.683886C7.72275 3.70313 11.9526 7.11045 15.8414 10.8647C16.8101 11.7999 15.9559 13.2759 14.7471 13.1464L9.48069 12.5824C8.9445 12.525 8.45039 12.8132 8.24689 13.2623L6.11827 17.9593C5.60418 19.0937 3.91079 18.9882 3.57385 17.7643C2.15908 12.6252 1.22525 7.37299 0.783711 2.07142L0.754771 1.72392ZM2.27176 1.86561L2.27854 1.94692C2.70132 7.02331 3.58352 12.0539 4.91491 16.9807L6.88065 12.6431C7.36109 11.583 8.4845 10.9672 9.64042 11.091L14.4474 11.6058C10.7205 8.0473 6.67944 4.81008 2.36992 1.93117L2.27176 1.86561Z"
                fill="#606279"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center navbar-border-transparent  py-[20px] "
          >
            <svg
              className="mx-auto"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 11.25C7.91421 11.25 8.25 11.5858 8.25 12V14C8.25 14.4142 7.91421 14.75 7.5 14.75C7.08579 14.75 6.75 14.4142 6.75 14V12C6.75 11.5858 7.08579 11.25 7.5 11.25Z"
                fill="#606279"
              />
              <path
                d="M12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25C11.0858 11.25 10.75 11.5858 10.75 12V14C10.75 14.4142 11.0858 14.75 11.5 14.75C11.9142 14.75 12.25 14.4142 12.25 14V12Z"
                fill="#606279"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.14952 1.375C7.35662 1.01628 7.23372 0.557591 6.875 0.350484C6.51628 0.143377 6.05759 0.266284 5.85048 0.625003L3.85048 4.0891C3.82052 4.141 3.79746 4.19499 3.78103 4.25H3.5C1.98122 4.25 0.75 5.48122 0.75 7C0.75 7.85913 1.14397 8.62625 1.76109 9.13054L2.42803 13.7152L2.87478 15.8084C3.14244 17.0625 4.16623 18.0151 5.43636 18.1918C8.13247 18.567 10.8675 18.567 13.5636 18.1918C14.8338 18.0151 15.8576 17.0625 16.1252 15.8084L16.572 13.7152L17.2389 9.13054C17.856 8.62625 18.25 7.85913 18.25 7C18.25 5.48122 17.0188 4.25 15.5 4.25H15.219C15.2025 4.19499 15.1795 4.141 15.1495 4.0891L13.1495 0.625003C12.9424 0.266284 12.4837 0.143377 12.125 0.350484C11.7663 0.557591 11.6434 1.01628 11.8505 1.375L13.5104 4.25H5.48963L7.14952 1.375ZM15.6335 9.74682C15.5892 9.74894 15.5447 9.75 15.5 9.75H3.5C3.45525 9.75 3.41076 9.74894 3.36653 9.74682L3.9053 13.4504L4.34174 15.4953C4.47772 16.1324 4.99783 16.6163 5.64308 16.7061C8.20203 17.0622 10.798 17.0622 13.3569 16.7061C14.0022 16.6163 14.5223 16.1324 14.6583 15.4953L15.0947 13.4504L15.6335 9.74682ZM2.25 7C2.25 6.30965 2.80964 5.75 3.5 5.75H15.5C16.1904 5.75 16.75 6.30965 16.75 7C16.75 7.69036 16.1904 8.25 15.5 8.25H3.5C2.80964 8.25 2.25 7.69036 2.25 7Z"
                fill="#606279"
              />
            </svg>
          </a>
          <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center navbar-border-transparent  py-[20px] "
          >
            <svg
              className="mx-auto"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5 2.07922L9.28722 4.36872C9.05169 4.6124 8.72731 4.75002 8.3884 4.75002H5.25002V7.8884C5.25002 8.22731 5.1124 8.55169 4.86872 8.78722L2.57922 11L4.86872 13.2128C5.11241 13.4483 5.25002 13.7727 5.25002 14.1116V17.25H8.3884C8.72731 17.25 9.05169 17.3876 9.28721 17.6313L11.5 19.9208L13.7128 17.6313C13.9483 17.3876 14.2727 17.25 14.6116 17.25H17.75V14.1116C17.75 13.7727 17.8876 13.4483 18.1313 13.2128L20.4208 11L18.1313 8.78722C17.8876 8.5517 17.75 8.22732 17.75 7.88841V4.75002H14.6116C14.2727 4.75002 13.9483 4.61241 13.7128 4.36872L11.5 2.07922ZM10.6012 0.850783C11.0926 0.342382 11.9075 0.342383 12.3988 0.850783L14.7177 3.25002H18C18.6904 3.25002 19.25 3.80966 19.25 4.50002V7.78235L21.6493 10.1012C22.1576 10.5926 22.1577 11.4075 21.6493 11.8988L19.25 14.2177V17.5C19.25 18.1904 18.6904 18.75 18 18.75H14.7177L12.3988 21.1492C11.9075 21.6576 11.0926 21.6576 10.6012 21.1492L8.28235 18.75H5.00002C4.30966 18.75 3.75002 18.1904 3.75002 17.5V14.2177L1.35078 11.8988C0.842383 11.4075 0.842382 10.5926 1.35078 10.1012L3.75002 7.78235V4.50002C3.75002 3.80966 4.30966 3.25002 5.00002 3.25002H8.28235L10.6012 0.850783Z"
                fill="#606279"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.75002 11C6.75002 8.37666 8.87666 6.25002 11.5 6.25002C14.1234 6.25002 16.25 8.37666 16.25 11C16.25 13.6234 14.1234 15.75 11.5 15.75C8.87666 15.75 6.75002 13.6234 6.75002 11ZM11.5 7.75002C9.70509 7.75002 8.25002 9.20509 8.25002 11C8.25002 12.7949 9.70509 14.25 11.5 14.25C13.2949 14.25 14.75 12.7949 14.75 11C14.75 9.20509 13.2949 7.75002 11.5 7.75002Z"
                fill="#606279"
              />
            </svg>
          </a>
        </div>
      </section>
      {children}
    </div>
  );
};

export default Navbar;
