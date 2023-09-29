import { useEffect, useState } from "react";
import { useGetCustomersQuery } from "../../features/customers/customersApi";
import RouteNavbar from "../shared/Navbar/RouteNavbar";
import CustomersHeader from "./CustomersHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import CustomersTableRow from "../../components/TableRow/CustomersTableRow";
import {
  customersRefetch,
  globalSearch as globalSearchFunc,
} from "../../features/customers/customersSlice";

const Customers = () => {
  const [pageCount, setPageCount] = useState(0);
  const [parPage, setParPage] = useState(20);
  const [itemOffset, setItemOffset] = useState(1);
  const [fromData, setFromData] = useState(0);
  const [toData, setToData] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [query, setQuery] = useState(null);
  const [querySort, setQuerySort] = useState(false);
  const [searchCustomerName, setSearchCustomerName] = useState("");
  const [searchCompnayName, setSearchCompanyName] = useState("");
  const [searchOnOff, setSearchOnOff] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [content, setContent] = useState(<div className="text-lg font-semibold">Loading....</div>);

  const globalSearch = useSelector((state) => state.customers.globalSearch);

  const refetchCustomers = useSelector((state) => state.customers.customerRefetch);

  const { data, isLoading, error, isError } = useGetCustomersQuery({
    itemOffset,
    parPage,
    query,
    searchCompnayName,
    searchCustomerName,
    globalSearch,
  });

  useEffect(() => {
    if (refetchCustomers) {
      setQuery(null);
      setItemOffset(1);
      setContent(<div className="text-lg font-semibold">Loading....</div>);
    }
  }, [refetchCustomers, dispatch]);

  useEffect(() => {
    if (globalSearch) {
      setItemOffset(1);
      setParPage(20);
      setContent(<div className="text-lg font-semibold">Loading....</div>);
    }
  }, [globalSearch]);

  useEffect(() => {
    if (isLoading) {
      setContent(<div className="text-lg font-semibold">Loading....</div>);
    } else {
      if (data?.data?.length > 0) {
        let dispalyDataFrom = data?.from;
        const content = data.data.map((customer) => (
          <CustomersTableRow
            key={customer.id}
            customer={customer}
            dispalyDataFrom={dispalyDataFrom++}
          ></CustomersTableRow>
        ));
        setContent(content);
      } else if (data?.data?.length === 0) {
        setContent(
          <tr className="text-lg font-semibold">
            <td className="">Data </td>
            <td>not found!</td>
          </tr>
        );
      }
      setPageCount(data?.last_page);
      setToData(data?.to);
      setFromData(data?.from);
      setTotalData(data?.total);
      customersRefetch(false);
    }
  }, [isLoading, data, dispatch]);
  useEffect(() => {
    if (error?.status === 401) {
      navigate("/auth-pages/login");
    }
    if (error) {
      setContent(<div className="text-lg font-semibold">server error</div>);
    }
  }, [error, isError, navigate]);

  const handlePageClick = (event) => {
    setContent(<div className="text-lg font-semibold">Loading....</div>);
    setItemOffset(event.selected + 1);
  };

  const handleCustomerId = () => {
    // order_by_column=legacy_customer_id&order_by=ASC&page=1&limit=20
    if (querySort) {
      const qry = `order_by_column=legacy_customer_id&order_by=DESC`;
      setQuery(qry);
    } else {
      const qry = `order_by_column=legacy_customer_id&order_by=ASC`;
      setQuery(qry);
    }
    setContent(<div className="text-lg font-semibold">Loading....</div>);
    setQuerySort(!querySort);
    dispatch(globalSearchFunc(""));
  };

  const handleCustomerName = () => {
    // order_by_column=customer_name&order_by=DESC&page=1&limit=20
    if (querySort) {
      const qry = `order_by_column=customer_name&order_by=DESC`;
      setQuery(qry);
    } else {
      const qry = `order_by_column=customer_name&order_by=ASC`;
      setQuery(qry);
    }
    setContent(<div className="text-lg font-semibold">Loading....</div>);
    setQuerySort(!querySort);
    dispatch(globalSearchFunc(""));
  };

  const handleCompanyName = () => {
    // order_by_column=company_name&order_by=ASC&page=1&limit=20
    if (querySort) {
      const qry = `order_by_column=company_name&order_by=DESC`;
      setQuery(qry);
    } else {
      const qry = `order_by_column=company_name&order_by=ASC`;
      setQuery(qry);
    }
    setContent(<div className="text-lg font-semibold">Loading....</div>);
    setQuerySort(!querySort);
    dispatch(globalSearchFunc(""));
  };

  const handleCustomerNameSubmit = (e) => {
    e.preventDefault();
    const value = e.target.customerName.value;
    setContent(<div className="text-lg font-semibold">Loading....</div>);
    setItemOffset(1);
    setSearchOnOff(!searchOnOff);
    setSearchCustomerName(value);
    dispatch(globalSearchFunc(""));
  };
  const handleCompanyNameSubmit = (e) => {
    e.preventDefault();
    const value = e.target.companyName.value;
    setContent(<div className="text-lg font-semibold">Loading....</div>);
    setItemOffset(1);
    setSearchOnOff(!searchOnOff);
    setSearchCompanyName(value);
    dispatch(globalSearchFunc(""));
  };

  return (
    <div className="shadow-4xl">
      <RouteNavbar>Customer</RouteNavbar>
      <div className="mt-4 ">
        <CustomersHeader></CustomersHeader>
        <div className=" overflow-hidden hover:overflow-scroll h-[23rem]  ">
          <div className="ml-3  max-w-[81.938rem] mt-4">
            <table className="table table-zebra">
              {/* head */}
              <thead className="">
                <tr className="text-[16px] text-[#1e293b] font-semibold bg-[#f3f4f6]">
                  <th className="py-4">SL</th>
                  <th onClick={handleCustomerId} className=" underline cursor-pointer">
                    Customer Id
                  </th>
                  <th onClick={handleCustomerName} className=" underline cursor-pointer">
                    Customer Name
                  </th>
                  <th onClick={handleCompanyName} className=" underline cursor-pointer">
                    Company Name
                  </th>
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
              <tbody className="">
                {/* row 1 */}
                <tr className="text-[#6b7280] font-medium">
                  <td></td>
                  <td></td>
                  <td className="py-3">
                    <form onSubmit={handleCustomerNameSubmit}>
                      <input
                        type="text"
                        name="customerName"
                        className="input-text border-solid border-[1px] py-[6px] pl-2 bg-[#f1f5f9] rounded-md w-[200px] font-semibold text-[15px]"
                        placeholder="Customer Name"
                      />
                    </form>
                  </td>
                  <td>
                    <form onSubmit={handleCompanyNameSubmit}>
                      <input
                        type="text"
                        name="companyName"
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
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mx-4 pb-8   ">
          <p className="text-gray-400 text-lg">
            Showing {fromData} to {toData} of {totalData} items
          </p>
          <div className="flex items-center gap-x-8 pr-4">
            <div className="flex items-center  bg-[#e2e8f0] px-4  rounded-md">
              <ReactPaginate
                className="flex gap-x-1 py-2 text-base"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageLinkClassName="px-2 "
                activeClassName="bg-[#0f766e] rounded-md text-[#e2e8f0]"
              />
            </div>
            <div>
              <select
                onChange={(e) => {
                  setParPage(e.target.value);
                  setContent(<div className="text-lg font-semibold">Loading....</div>);
                }}
                value={parPage}
                name=""
                id=""
                className="px-5 py-1 input-text bg-[#f1f5f9] "
              >
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
