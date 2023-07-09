import React, { useContext } from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Profilehome = () => {
  const { user, setUser, userRefresh } = useContext(UserContext);
  const userId = user._id;
  console.log(userId);

  const [userName, setuserName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.put(`http://localhost:5501/updateUser/`, {
        userId,
        userName,
        phoneNumber,
      });
      console.log(data);
      userRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
       <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9   text-gray-900">
      أهلاً بك
        </h1>
        <div class="w-20 h-2 bg-green-700 my-4"></div>
      </div>
      <div className="w-[120vw] mt-10 h-auto lg:h-screen ms-5">
        {/*Main Col*/}
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-green-50 opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <h1 className="text-3xl font-bold pt-8 text-green-800 lg:pt-0 text-start">
              الملف الشخصي
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-fill me-5 text-green-800"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
              الاسم الكامل: {user.username}
            </p>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-envelope-at-fill me-5 text-green-800"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
              </svg>
              البريد الالكتروني: {user.email}
            </p>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-fill me-5 text-green-800"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
              رقم الهاتف: {user.phoneNumber}
            </p>

            <div className="pt-12 pb-8">
              <button
                onClick={handleOpen}
                className="inline-flex w-fit mt-4 items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md"
              >
                <FaEdit className="h-5 w-5 ml-2" />
                تعديل الملف الشخصي
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader style={{ marginBottom: "-120px" }}>
          تعديل الملف الشخصي{" "}
        </DialogHeader>
        <DialogBody divider style={{ marginTop: "30px", border: "none" }}>
          <div style={{ maxHeight: "550px", overflow: "auto", width: "550px" }}>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
              <form className="text-black" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="text-black dark:text-gray-200"
                      htmlFor="username"
                    >
                      اسم المستخدم
                    </label>
                    <input
                      id="username"
                      placeholder={user.username}
                      onChange={(e) => {
                        setuserName(e.target.value);
                      }}
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      className="text-black dark:text-gray-200"
                      htmlFor="username"
                    >
                      رقم الهاتف
                    </label>
                    <input
                      id="username"
                      placeholder={user.phoneNumber}
                      onChange={(e) => {
                        setphoneNumber(e.target.value);
                      }}
                      className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              

                <div className="flex justify-start mt-6">
                  <DialogFooter>
                    <div className="flex justify-around gap-5 mt-6">
                      <Button
                        type="submit"
                        className="text-sm"
                        variant="gradient"
                        color="green"
                        onClick={() => {
                          handleOpen();
                        }}
                      >
                        <span>تحديث</span>
                      </Button>
                      <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1 text-sm"
                      >
                        <span>الغاء</span>
                      </Button>
                    </div>
                  </DialogFooter>
                </div>
              </form>
            </section>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

