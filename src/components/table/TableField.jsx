import { Link } from "react-router-dom";

const TableField = ({ columns, rows }) => {
  return (
    <table className="w-full text-sm text-left table-fixed ">
      <thead className="text-xs font-normal">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className={column.className}
              scope={column._props.scope}
            >
              {column.displayName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} className="hover:bg-gray-200 cursor-pointer">
            {columns.map((column) => (
              <td className={column.className}>{row[column.key]}</td>
            ))
            }
             <td className="text-sm font-medium text-blue-500 hover:underline"> <Link to={`/dashboard/user/${row.id}`} className="px-3 py-3">Edit</Link>    </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableField;
