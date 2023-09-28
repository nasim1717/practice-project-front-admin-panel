import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { LiaPlusCircleSolid } from "react-icons/lia";
import CustomerModal from "./CustomerModal";
import { useDispatch } from "react-redux";
import { globalSearch } from "../../features/customers/customersSlice";

const CustomersHeader = () => {
  const dispatch = useDispatch();

  const handleGlobalSearch = (e) => {
    e.preventDefault();
    const value = e.target.global.value;
    dispatch(globalSearch(value));
  };

  return (
    <div className="navbar bg-base-100 flex justify-between items-center pt-5 pb-6 border-b-[1px]">
      <div className="ml-4">
        <CgProfile className="text-[27px] text-[#2563eb] font-bold"></CgProfile>
        <h2 className="text-[20px] font-bold pl-2">Customers</h2>
      </div>
      <div className="mr-4">
        <div>
          <form onSubmit={handleGlobalSearch} className="flex items-center gap-x-2">
            {/* <input type="text" className="input" />
             */}
            <input
              type="text"
              name="global"
              className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[300px] font-semibold text-[15px]"
              placeholder="Customers Global Search"
            />

            <button className="bg-[#059669] hover:bg-[#10b981] text-[#f1f5f9] text-[15px] font-bold py-[7px] px-4 rounded-md">
              <span>
                {" "}
                <BiSearch className="inline-block text-[18px] mr-1"></BiSearch>
              </span>{" "}
              Search
            </button>
          </form>
        </div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="bg-[#e2e8f0] hover:bg-[#2563eb] text-[15px] text-[#2563eb] hover:text-[#f1f5f9] font-bold ml-2 py-[7px] px-4 rounded-md flex items-center"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          <span className=" text-[18px] mr-2">
            <LiaPlusCircleSolid></LiaPlusCircleSolid>
          </span>
          Add Customer
        </button>
        <CustomerModal></CustomerModal>
      </div>
    </div>
  );
};

export default CustomersHeader;
