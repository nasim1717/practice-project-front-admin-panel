import { useEffect } from "react";
import { useGetCustomersQuery } from "../../features/customers/customersApi";
import RouteNavbar from "../shared/Navbar/RouteNavbar";
import CustomersHeader from "./CustomersHeader";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye, MdOutlineDelete } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const Customers = () => {
  const { data: customers, error, isLoading, isError } = useGetCustomersQuery();
  const navigate = useNavigate();
  useEffect(() => {
    if (error?.status === 401) {
      navigate("/auth-pages/login");
    }
  }, [error, navigate]);

  let content = null;
  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && isError) {
    content = (
      <tr>
        <td className="py-5">Server error</td>
      </tr>
    );
  }
  if (!isLoading && !isError && customers?.data.length === 0) {
    content = (
      <tr>
        <td className="py-5">No Record Data</td>
      </tr>
    );
  }
  if (!isLoading && !isError && customers.data?.length > 0) {
    content = customers.data.map((customer, index) => (
      <tr key={customer.id} className="text-[15px] font-bold text-[#6b7280]">
        <td>{index + 1}</td>
        <td>{customer?.user_id}</td>
        <td className="py-5">{customer?.customer_name}</td>
        <td>{customer?.company_name}</td>
        <td>{customer?.vehicles_count}</td>
        <td></td>
        <td></td>
        <td></td>
        <td>{customer?.phone}</td>
        <td>{customer?.city_name}</td>
        <td>
          <input type="checkbox" className="toggle bg-[#047857] h-5" />
        </td>
        <td>
          <button className="flex items-center text-[#059669] py-2 px-4 bg-[#f8fafc] font-bold rounded">
            <span>
              <MdOutlineRemoveRedEye className="mr-2 text-[20px]"></MdOutlineRemoveRedEye>
            </span>
            View
          </button>
        </td>
        <td>
          <button className="flex items-center text-[#059669] py-2 px-4 bg-[#f8fafc] font-bold rounded">
            <span>
              <BiPencil className="mr-2 text-[20px]"></BiPencil>
            </span>
            Edit
          </button>
        </td>
        <td>
          <button className="flex items-center text-[#dc2626] py-2 px-4 bg-[#f8fafc] font-bold rounded">
            <span>
              <FiSettings className="mr-2 text-[17px]"></FiSettings>
            </span>
            Password
          </button>
        </td>
        <td>
          <button className="flex items-center text-[#f97316] py-2 px-4 bg-[#f8fafc] font-bold rounded">
            <span>
              <MdOutlineDelete className="mr-2 text-[17px]"></MdOutlineDelete>
            </span>
            Delete
          </button>
        </td>
      </tr>
    ));
  }
  return (
    <div className="shadow-4xl">
      <RouteNavbar></RouteNavbar>
      <div className="mt-4 ">
        <CustomersHeader></CustomersHeader>
        <div className="overflow-hidden hover:overflow-scroll max-h-[19rem]  ">
          <div className="ml-3  max-w-[82.938rem] mt-4">
            <table className="table table-zebra ">
              {/* head */}
              <thead className="">
                <tr className="text-[16px] text-[#1e293b] font-semibold bg-[#f3f4f6]">
                  <th className="py-4">SL</th>
                  <th className=" underline">Customer Id</th>
                  <th className=" underline">Customer Name</th>
                  <th className=" underline">Company Name</th>
                  <th className="">All Vehicles</th>
                  <th className="">On Hand</th>
                  <th className="">Car On The Way</th>
                  <th className="">Arrived</th>
                  <th className="">Phone</th>
                  <th className="">City Name</th>
                  <th className="">Status</th>
                  <th className="">Action</th>
                  <th className="">Edit</th>
                  <th className="">Password</th>
                  <th className="">Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="text-[#6b7280] font-medium">
                  <td></td>
                  <td></td>
                  <td className="py-3">
                    <form>
                      <input
                        type="text"
                        className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[200px] font-semibold text-[15px]"
                        placeholder="Customer Name"
                      />
                    </form>
                  </td>
                  <td>
                    <form>
                      <input
                        type="text"
                        className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[150px] font-semibold text-[15px]"
                        placeholder="Company Name"
                      />
                    </form>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* row 2 */}
                {content}
                {/* row 3 */}
                {/* <tr className="text-[15px] font-normal">
                  <td>index </td>
                  <td>customer</td>
                  <td className="py-5">customer</td>
                  <td>customer?.company_name</td>
                  <td>customer?.vehicles_count</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>customer</td>
                  <td>customer</td>
                  <td>
                    <input type="checkbox" className="toggle bg-[#047857] h-5" />
                  </td>
                  <td>
                    <button className="flex items-center text-[#059669] py-2 px-4 bg-[#f8fafc] font-bold rounded">
                      <span>
                        <MdOutlineRemoveRedEye className="mr-2 text-[20px]"></MdOutlineRemoveRedEye>
                      </span>
                      View
                    </button>
                  </td>
                  <td>
                    <button className="flex items-center text-[#059669] py-2 px-4 bg-[#f8fafc] font-bold rounded">
                      <span>
                        <BiPencil className="mr-2 text-[20px]"></BiPencil>
                      </span>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="flex items-center text-[#dc2626] py-2 px-4 bg-[#f8fafc] font-bold rounded">
                      <span>
                        <FiSettings className="mr-2 text-[17px]"></FiSettings>
                      </span>
                      Password
                    </button>
                  </td>
                  <td>
                    <button className="flex items-center text-[#f97316] py-2 px-4 bg-[#f8fafc] font-bold rounded">
                      <span>
                        <MdOutlineDelete className="mr-2 text-[17px]"></MdOutlineDelete>
                      </span>
                      Delete
                    </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between mt-7 mx-4 pb-8   ">
          <p className="text-gray-400">Showing 1 to 20 of 889 items</p>
          <div>dgerg</div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
