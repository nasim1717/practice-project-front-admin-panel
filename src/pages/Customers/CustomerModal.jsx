import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { countryApi, useGetCountryQuery } from "../../features/countrys/countryApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

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
  // const [customerId, setCustomerId] = useState("");
  // const [password, setPassword] = useState("");
  // const [userName, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [customerName, setCustomerName] = useState("");
  // const [companyName, setCompanyName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [phoneUAE, setPhoneUAE] = useState("");
  // const [trnUsa, setTrnUsa] = useState("");
  // const [trnUae, setTrnUae] = useState("");
  // const [address1, setAddress1] = useState("");
  // const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  // const [zipCode, setZipCode] = useState("");
  // const [otherEmail, setOtherEmail] = useState("");
  // const [notes, setNotes] = useState("");
  // const [fax, setFax] = useState("");
  // const [category, setCategory] = useState("");
  // const [buyerId, setBuyerId] = useState("");
  // const [status, setStatus] = useState(false);
  const [optionCountrys, setoptionCountrys] = useState([]);
  const [optionStates, setOptionState] = useState([]);
  const [optionsCitys, setOptionCitys] = useState([]);
  const { data: countrys } = useGetCountryQuery();
  const dispatch = useDispatch();

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

  const handleCountry = (e) => {
    if (!e?.value) {
      setCountry("");
      setState("");
      setCity("");
      setOptionState([]);
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

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box  max-w-[65%]">
        <div className="flex justify-between pb-5 ">
          <h3 className="font-medium text-lg">Add Customer</h3>
          <form method="dialog">
            <button className="">
              <RxCross1 className="text-[20px]"></RxCross1>
            </button>
          </form>
        </div>
        <div className="">
          <form className="">
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
              <div className="flex items-center gap-x-[72px]">
                <label htmlFor="password" className="text-[16px] text-gray-500">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Password"
                />
              </div>
              {/* password end */}
              {/* user name */}
              <div className="flex items-center gap-x-[73px]">
                <label htmlFor="userName" className="text-[16px] text-gray-500">
                  Username
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="username"
                />
              </div>
              {/* user name end */}
              {/* Email */}
              <div className="flex items-center gap-x-[100px]">
                <label htmlFor="email" className="text-[16px] text-gray-500">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Email"
                />
              </div>
              {/* Email end */}
              {/* Customer name */}
              <div className="flex items-center gap-x-[28px]">
                <label htmlFor="customerName" className="text-[16px] text-gray-500">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  id="customerName"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Customer Name"
                />
              </div>
              {/* customer name end */}
              {/* company name  */}
              <div className="flex items-center gap-x-6">
                <label htmlFor="comapnyName" className="text-[16px] text-gray-500">
                  Company Name
                </label>
                <input
                  type="text"
                  name="comapnyName"
                  id="comapnyName"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Compnay Name"
                />
              </div>
              {/* address 1 end */}
              {/* phone */}
              <div className="flex items-center gap-x-[98px]">
                <label htmlFor="phone" className="text-[16px] text-gray-500">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
                  placeholder="Phone"
                />
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
                <Select
                  onChange={handleCountry}
                  options={optionCountrys}
                  styles={customStyles}
                  isClearable={isClearable}
                  placeholder="Select Country"
                ></Select>
              </div>
              {/* country end */}
              {/* state */}
              <div className="flex items-center gap-x-[108px]">
                <label htmlFor="state" className="text-[16px] text-gray-500">
                  State
                </label>
                <Select
                  onChange={handleState}
                  value={state ? state.label : ""}
                  options={optionStates}
                  styles={customStyles}
                  isLoading={isLoadingState}
                  isClearable={isClearable}
                  placeholder="Select State"
                ></Select>
              </div>
              {/* state end*/}
              {/* City*/}
              <div className="flex items-center gap-x-[112px]">
                <label htmlFor="city" className="text-[16px] text-gray-500">
                  City
                </label>
                <Select
                  onChange={handleCity}
                  value={city ? city.label : ""}
                  options={optionsCitys}
                  styles={customStyles}
                  isLoading={isLoadingCity}
                  isClearable={isClearable}
                  placeholder="Select City"
                ></Select>
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
              <button className="bg-[#15803d] text-[#f9fafb] py-2 px-5 rounded-md text-base font-bold">
                + Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CustomerModal;
