import React, { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function Modal() {
  const [shouldDisplay, setShouldDisplay] = useLocalStorage(
    "handleModal",
    false
  );
  //  function handleMouseLeave() {
  //       if (!shouldDisplay) {
  //         setShouldDisplay(true);
  //       }
  //     }
  useEffect(() => {
    document.addEventListener("mouseleave", setShouldDisplay(true));

    // return () => {
    //   document.removeEventListener("mouseleave", handleMouseLeave);
    // };
  }, []);

  function cancelModal() {
    setShouldDisplay(false);
  }
  return shouldDisplay ? (
    <div className="relative flex justify-center ">
      <div
        className="fixed inset-0 z-10 overflow-y-auto bg-[#0000007e]"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
            <div>
              <img
                className="object-cover w-full h-48 rounded-md"
                src="https://cdn.pixabay.com/photo/2019/05/29/00/25/online-shopping-4236450__340.jpg"
                alt=""
              />

              <div className="mt-4 text-center">
                <h3
                  className="font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Become a Member
                </h3>

                <p className="mt-2 text-[.8rem] text-gray-700 dark:text-gray-400">
                  Join our community and never miss out on exciting updates!
                  Sign up now and be a part of our growing community of
                  like-minded individuals.
                </p>
              </div>
            </div>
            <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
              <button
                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                onClick={cancelModal}
              >
                Cancel
              </button>

              <button className="w-full px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
