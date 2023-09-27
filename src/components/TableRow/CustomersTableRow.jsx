import { MdOutlineRemoveRedEye, MdOutlineDelete } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const CustomersTableRow = ({ dispalyDataFrom, customer }) => {
  // eslint-disable-next-line react/prop-types
  const { customer_name, company_name, vehicles_count, phone, city_name, legacy_customer_id } =
    customer;
  return (
    <tr className="text-[15px] font-bold text-[#6b7280]">
      <td>{dispalyDataFrom}</td>
      <td>{legacy_customer_id}</td>
      <td className="py-5">{customer_name}</td>
      <td>{company_name}</td>
      <td>{vehicles_count}</td>
      <td></td>
      <td></td>
      <td></td>
      <td>{phone}</td>
      <td>{city_name}</td>
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
  );
};

export default CustomersTableRow;
