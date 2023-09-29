import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { countryApi, useGetCountryQuery } from "../../features/countrys/countryApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import BounceLoader from "react-spinners/BounceLoader";
import { customersApi, useCreateCustomersMutation } from "../../features/customers/customersApi";
import { useRef } from "react";
import Swal from "sweetalert2";
import { customersRefetch } from "../../features/customers/customersSlice";

const customStyles = {
  control: (base) => ({
    ...base,
    width: "300px", // Set your desired width here
  }),
};

const CustomerModal = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [isLoadingCity, setIsLoadingCity] = useState(false);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [optionCountrys, setoptionCountrys] = useState([]);
  const [optionStates, setOptionState] = useState([]);
  const [optionsCitys, setOptionCitys] = useState([]);
  const { data: countrys } = useGetCountryQuery();
  const dispatch = useDispatch();
  const { control, handleSubmit, formState, setError, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  // const [createCustomers, { data: createCustomerData, error, isLoading }] =
  //   useCreateCustomersMutation();
  const modalRef = useRef(null);
  useEffect(() => {
    if (countrys?.data) {
      const optionsCountryArr = [];
      countrys.data.forEach((countrydata) => {
        optionsCountryArr.push({
          value: { id: countrydata?.id, name: countrydata?.name },
          label: countrydata?.name,
        });
      });
      setoptionCountrys([...optionsCountryArr]);
    }
  }, [countrys]);

  useEffect(() => {
    dispatch(countryApi.endpoints.getState.initiate(country.id))
      .unwrap()
      .then((data) => {
        const stateArr = [];
        data.data.forEach((statesData) => {
          stateArr.push({
            value: { id: statesData?.id, name: statesData?.name },
            label: statesData?.name,
          });
        });
        setOptionState([...stateArr]);
        setIsLoadingState(false);
      })
      .catch((er) => {
        // console.log("er", er);
      });
  }, [country, isLoadingState, dispatch]);

  useEffect(() => {
    dispatch(countryApi.endpoints.getCity.initiate(state?.id))
      .unwrap()
      .then((data) => {
        const cityArr = [];
        data.data.forEach((cityData) => {
          cityArr.push({
            value: { id: cityData?.id, name: cityData?.name },
            label: cityData?.name,
          });
        });
        setOptionCitys([...cityArr]);
        setIsLoadingCity(false);
      })
      .catch(() => {});
  }, [state, isLoadingCity, dispatch]);

  // useEffect(() => {
  //   if (error?.data?.errors) {
  //     Object.keys(error?.data?.errors).forEach((field) => {
  //       if (error?.data?.errors[field]) {
  //         setError(field, { message: error?.data?.errors[field][0] });
  //       } else {
  //         clearErrors(field);
  //       }
  //     });
  //   }
  // }, [error]);

  // useEffect(() => {
  //   if (createCustomerData?.status === "SUCCESS") {
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: `${createCustomerData?.message}`,
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     setCountry("");
  //     setCity("");
  //     setState("");
  //     closeModal();
  //     dispatch(customersRefetch(true));
  //   }
  // }, [createCustomerData]);

  const clearErrors = (fieldName) => {
    setError(fieldName, { message: "" });
  };

  const closeModal = () => {
    if (modalRef.current) {
      setCity("");
      setCountry("");
      setState("");
      reset();
      setIsLoading(false);
      modalRef.current.close();
    }
  };

  const handleCountry = (e) => {
    if (!e?.value) {
      setCountry("");
      setState("");
      setCity("");
      setOptionState([]);
      setError("state", { message: "The state field is required" });
    } else {
      setCountry(e?.value);
      setState("");
      setIsLoadingState(true);
    }
  };

  const handleState = (e) => {
    if (!e?.value) {
      setState("");
      setCity("");
      setOptionCitys([]);
      setError("city", { message: "The city field is required" });
    } else {
      setState(e?.value);
      setIsLoadingCity(true);
    }
  };

  const handleCity = (e) => {
    if (!e.value) {
      setCity("");
    } else {
      setCity(e?.value);
    }
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    const customersData = {
      customer_name: data.customer_name,
      company_name: data.company_name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      city: data.city.value.name,
      city_id: data.city.value.id,
      state: data.state.value.name,
      state_id: data.state.value.id,
      password: data.password,
      country_id: data.country.value.id,
    };
    // createCustomers(customersData);
    dispatch(customersApi.endpoints.createCustomers.initiate(customersData))
      .unwrap()
      .then((data) => {
        console.log("create customers-->", data);
        if (data?.status === "SUCCESS") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data?.message}`,
            showConfirmButton: false,
            timer: 1500,
          });

          closeModal();
          dispatch(customersRefetch(true));
        }
      })
      .catch((error) => {
        if (error?.data?.errors) {
          Object.keys(error?.data?.errors).forEach((field) => {
            if (error?.data?.errors[field]) {
              setError(field, { message: error?.data?.errors[field][0] });
            } else {
              clearErrors(field);
            }
          });
        }
        setIsLoading(false);
      });

    reset();
  };

  return (
    <dialog id="my_modal_4" className="modal" ref={modalRef}>
      <div className="modal-box  max-w-[65%]">
        <div className="flex justify-between pb-5 ">
          <h3 className="font-medium text-lg">Add Customer</h3>

          <button onClick={closeModal} className="">
            <RxCross1 className="text-[20px]"></RxCross1>
          </button>
        </div>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-2 gap-y-6 overflow-y-scroll max-h-[490px] px-7 ">
              {/* customer id */}
              <div className="flex items-center gap-x-14 mt-2">
                <label htmlFor="customerId" className="text-[16px] text-gray-500">
                  Customer ID
                </label>
                <input
                  // onChange={(e) => setCustomerId(e.target.value)}
                  type="text"
                  name="customerId"
                  id="customerId"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Customers Global Search"
                />
              </div>
              {/* customer id end */}
              {/*  password */}

              <div className="flex items-center gap-x-[72px] mt-2 ">
                <label htmlFor="password" className="text-[16px] text-gray-500">
                  Password
                </label>
                <div className="flex flex-col ">
                  <Controller
                    name="password"
                    control={control}
                    defaultValue={""}
                    rules={{
                      required: "The password field is required",
                      minLength: {
                        value: 6,
                        message: "password must be at least 6 characters long",
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <div className="w-[300px] relative">
                          <input
                            {...field}
                            type="password"
                            id="password"
                            className={` ${
                              formState?.errors?.password
                                ? "border-red-500 input-text-error"
                                : "input-text"
                            } border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-full font-semibold text-[15px] `}
                            placeholder="Password"
                          />
                          {formState?.errors?.password && (
                            <MdErrorOutline className="text-red-500 absolute right-2 top-2 "></MdErrorOutline>
                          )}
                        </div>

                        {formState?.errors?.password && (
                          <p className="text-red-500 ">{formState?.errors?.password?.message}</p>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>
              {/* password end */}
              {/* user name */}
              <div className="flex items-center gap-x-[73px]">
                <label htmlFor="userName" className="text-[16px] text-gray-500">
                  Username
                </label>
                <div className="flex flex-col  relative">
                  <Controller
                    name="username"
                    control={control}
                    defaultValue={""}
                    rules={{
                      required: "The username field is required",
                    }}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          type="text"
                          id="userName"
                          className={`${
                            formState?.errors?.username
                              ? "border-red-500 input-text-error"
                              : "input-text"
                          } border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]`}
                          placeholder="username"
                        />
                        {formState?.errors?.username && (
                          <p className="text-red-500 ">{formState?.errors?.username?.message}</p>
                        )}
                      </>
                    )}
                  ></Controller>
                  {formState?.errors?.username && (
                    <MdErrorOutline className="text-red-500 absolute right-3 top-3 "></MdErrorOutline>
                  )}
                </div>
              </div>
              {/* user name end */}
              {/* Email */}
              <div className="flex items-center gap-x-[100px]">
                <label htmlFor="email" className="text-[16px] text-gray-500">
                  Email
                </label>
                <div className="flex flex-col  relative">
                  <Controller
                    name="email"
                    control={control}
                    defaultValue={""}
                    rules={{
                      required: "The email field is required",
                    }}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          type="email"
                          id="email"
                          className={`${
                            formState?.errors?.email
                              ? "border-red-500 input-text-error"
                              : "input-text"
                          } border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]`}
                          placeholder="Email"
                        />
                        {formState?.errors?.email && (
                          <p className="text-red-500 ">{formState?.errors?.email?.message}</p>
                        )}
                      </>
                    )}
                  ></Controller>
                  {formState?.errors?.email && (
                    <MdErrorOutline className="text-red-500 absolute right-2 top-3 "></MdErrorOutline>
                  )}
                </div>
              </div>
              {/* Email end */}
              {/* Customer name */}
              <div className="flex items-center gap-x-[28px] ">
                <label htmlFor="customerName" className="text-[16px] text-gray-500">
                  Customer Name
                </label>
                <div className="flex flex-col relative">
                  <Controller
                    name="customer_name"
                    control={control}
                    defaultValue={""}
                    rules={{
                      required: "The customer Name field is required",
                    }}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          type="text"
                          id="customerName"
                          className={`${
                            formState?.errors?.customer_name
                              ? "border-red-500 input-text-error"
                              : "input-text"
                          } border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]`}
                          placeholder="Customer Name"
                        />
                        {formState?.errors?.customer_name && (
                          <p className="text-red-500 ">
                            {formState?.errors?.customer_name?.message}
                          </p>
                        )}
                      </>
                    )}
                  ></Controller>
                  {formState?.errors?.customer_name && (
                    <MdErrorOutline className="text-red-500 absolute right-2 top-3 "></MdErrorOutline>
                  )}
                </div>
              </div>
              {/* customer name end */}
              {/* company name  */}
              <div className="flex items-center gap-x-6 ">
                <label htmlFor="comapnyName" className="text-[16px] text-gray-500">
                  Company Name
                </label>
                <div className="flex flex-col relative">
                  <Controller
                    name="company_name"
                    control={control}
                    defaultValue={""}
                    rules={{
                      required: "The compnay name is required",
                    }}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          type="text"
                          id="comapnyName"
                          className={`${
                            formState?.errors?.company_name
                              ? "border-red-500 input-text-error"
                              : "input-text"
                          } border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]`}
                          placeholder="Compnay Name"
                        />
                        {formState?.errors?.companyName && (
                          <p className="text-red-500 ">
                            {formState?.errors?.company_name?.message}
                          </p>
                        )}
                      </>
                    )}
                  ></Controller>
                  {formState?.errors?.company_name && (
                    <MdErrorOutline className="text-red-500 absolute right-2 top-3 "></MdErrorOutline>
                  )}
                </div>
              </div>
              {/*company name end */}
              {/* phone */}
              <div className="flex items-center gap-x-[98px] ">
                <label htmlFor="phone" className="text-[16px] text-gray-500">
                  Phone
                </label>
                <div className="flex flex-col relative">
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue={""}
                    rules={{
                      required: "The phone field is required",
                    }}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          type="text"
                          id="phone"
                          className={`${
                            formState?.errors?.phone
                              ? "border-red-500 input-text-error"
                              : "input-text"
                          } border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]`}
                          placeholder="Phone"
                        />
                        {formState?.errors?.phone && (
                          <p className="text-red-500 ">{formState?.errors?.phone?.message}</p>
                        )}
                      </>
                    )}
                  ></Controller>
                  {formState?.errors?.phone && (
                    <MdErrorOutline className="text-red-500 absolute right-2 top-3 "></MdErrorOutline>
                  )}
                </div>
              </div>
              {/* phone end  */}
              {/* phne uae */}
              <div className="flex items-center gap-x-[61px]">
                <label htmlFor="phoneUae" className="text-[16px] text-gray-500">
                  Phone UAE
                </label>
                <input
                  type="text"
                  name="phoneUae"
                  id="phoneUae"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Phone UAE"
                />
              </div>
              {/* phone uae end*/}
              {/* Trn  usa */}
              <div className="flex items-center gap-x-[79px]">
                <label htmlFor="trnUsa" className="text-[16px] text-gray-500">
                  TRN USA
                </label>
                <input
                  type="text"
                  name="trnUsa"
                  id="trnUsa"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="TRN USA"
                />
              </div>
              {/* trn usa end */}
              {/*Trn uae  */}
              <div className="flex items-center gap-x-[77px]">
                <label htmlFor="trnUae" className="text-[16px] text-gray-500">
                  TRN UAE
                </label>
                <input
                  type="text"
                  name="trnUae"
                  id="trnUae"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="TRN UAE"
                />
              </div>
              {/* trun uae end */}
              {/* Address 1 */}
              <div className="flex items-center gap-x-[72px]">
                <label htmlFor="address1" className="text-[16px] text-gray-500">
                  Address 1
                </label>
                <input
                  type="text"
                  name="address1"
                  id="address1"
                  className="input-text border-solid border-[1px]  py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Address 1"
                />
              </div>
              {/* Address 1 end */}
              {/* Address 2 */}
              <div className="flex items-center gap-x-[72px]">
                <label htmlFor="address2" className="text-[16px] text-gray-500">
                  Address 2
                </label>
                <input
                  type="text"
                  name="address2"
                  id="address2"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Address 2"
                />
              </div>
              {/* Address 2 end*/}
              {/* country */}
              <div className="flex items-center gap-x-[85px]">
                <label htmlFor="country" className="text-[16px] text-gray-500">
                  Country
                </label>
                <div className="flex flex-col">
                  <Controller
                    name="country"
                    control={control}
                    rules={{
                      required: "The country field is required",
                    }}
                    render={({ field }) => (
                      <>
                        <Select
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleCountry(e);
                          }}
                          value={country ? country.label : null}
                          options={optionCountrys}
                          styles={customStyles}
                          isClearable={isClearable}
                          placeholder="Select Country"
                        ></Select>
                        {formState?.errors?.country && (
                          <p className="text-red-500 ">{formState?.errors?.country?.message}</p>
                        )}
                      </>
                    )}
                  ></Controller>
                </div>
              </div>
              {/* country end */}
              {/* state */}
              <div className="flex items-center gap-x-[108px]">
                <label htmlFor="state" className="text-[16px] text-gray-500">
                  State
                </label>
                <div className="flex flex-col">
                  <Controller
                    name="state"
                    control={control}
                    rules={{
                      required: "The state field is required",
                    }}
                    render={({ field }) => (
                      <>
                        <Select
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleState(e);
                          }}
                          value={state ? state.label : null}
                          options={optionStates}
                          styles={customStyles}
                          isLoading={isLoadingState}
                          isClearable={isClearable}
                          placeholder="Select State"
                        ></Select>
                        {formState?.errors?.state && (
                          <p className="text-red-500 ">{formState?.errors?.state?.message}</p>
                        )}
                      </>
                    )}
                  ></Controller>
                </div>
              </div>
              {/* state end*/}
              {/* City*/}
              <div className="flex items-center gap-x-[112px]">
                <label htmlFor="city" className="text-[16px] text-gray-500">
                  City
                </label>
                <div className="flex flex-col">
                  <Controller
                    name="city"
                    control={control}
                    rules={{ required: "The city field is required" }}
                    render={({ field }) => (
                      <>
                        <Select
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleCity(e);
                          }}
                          value={city ? city.label : ""}
                          options={optionsCitys}
                          styles={customStyles}
                          isLoading={isLoadingCity}
                          isClearable={isClearable}
                          placeholder="Select City"
                        ></Select>
                        {formState?.errors?.city && (
                          <p className="text-red-500 ">{formState?.errors?.city?.message}</p>
                        )}
                      </>
                    )}
                  ></Controller>
                </div>
              </div>
              {/* City end */}
              {/* zip code */}
              <div className="flex items-center gap-x-[79px]">
                <label htmlFor="zipCode" className="text-[16px] text-gray-500">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Zip Code"
                />
              </div>
              {/* zip code end */}
              {/* other email */}
              <div className="flex items-center gap-x-[55px]">
                <label htmlFor="otherEmail" className="text-[16px] text-gray-500">
                  Other Email
                </label>
                <input
                  type="text"
                  name="otherEmail"
                  id="otherEmail"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Other Email"
                />
              </div>
              {/* other email end */}
              {/* note */}
              <div className="flex  gap-x-[107px]">
                <label htmlFor="note" className="text-[16px] text-gray-500">
                  Note
                </label>
                <textarea
                  type="text"
                  name="note"
                  id="note"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="notes "
                ></textarea>
              </div>
              {/* note end */}
              {/* fax */}
              <div className="flex items-center gap-x-[110px]">
                <label htmlFor="fax" className="text-[16px] text-gray-500">
                  FAX
                </label>
                <input
                  type="text"
                  name="fax"
                  id="fax"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="FAX"
                />
              </div>
              {/* fax end*/}
              {/* category */}
              <div className="flex items-center gap-x-[78px]">
                <label htmlFor="category" className="text-[16px] text-gray-500">
                  Categroy
                </label>
                <select
                  name="category"
                  id="category"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                >
                  <option value="">Select category</option>
                  <option value="A">A</option>
                  <option value="A">B</option>
                  <option value="A">C</option>
                  <option value="A">D</option>
                </select>
              </div>
              {/* category  end*/}
              {/* buyer id */}
              <div className="flex items-center gap-x-[4.6rem] mb-2">
                <label htmlFor="buyerId" className="text-[16px] text-gray-500">
                  Buyer Id
                </label>
                <textarea
                  type="text"
                  name="Buyer Id"
                  id="buyerId"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Buyer Id"
                ></textarea>
              </div>
              {/* buyer id end */}
              {/* status */}
              <div className="flex items-center gap-x-[6rem]">
                <label htmlFor="status" className="text-[16px] text-gray-500">
                  status
                </label>
                <input id="" type="checkbox" className="toggle bg-[#059669]" />
              </div>
              {/* status end */}
            </div>
            <div className="mt-3 flex justify-end">
              <div className="flex items-center relative">
                <button
                  disabled={isLoading}
                  className={`${
                    isLoading && "opacity-90"
                  } bg-[#15803d] text-[#f9fafb] py-2 px-5 rounded-md text-base font-bold`}
                >
                  + Save
                </button>
                {isLoading && (
                  <BounceLoader color="#f4f4f5" size={20} className={`absolute right-7 `} />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CustomerModal;
