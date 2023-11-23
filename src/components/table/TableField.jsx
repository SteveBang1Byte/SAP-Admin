import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";

const TableField = ({ columns, rows, isEditLink}) => {

  const displayRow = (rows) => {
    if (rows && rows.length > 0) {
      return rows.map((row) => (
        <tr key={row.id} className="hover:bg-gray-200 cursor-pointer border-b">
          {
            columns.map((column) => (
              <td className={column.className} key={column.key} >{row[column.key]!= null ? row[column.key].toString() :''}</td>
            ))
          }
           {
            isEditLink && (
              <td className="text-center">
                <Link to={`${PATH_DASHBOARD.role.edit(row.id)}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
              </td>
            )
           }
        </tr>
      ))
    } else {
      return (
        <tr>
          <td colSpan={columns.length} className="text-center text-gray-600 py-3">No data</td>
        </tr>
      )
    }

  }

  return (
    <table className="w-full text-sm text-left table-auto ">
      <thead className="text-xs font-normal border-b">
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
        {
            displayRow(rows)
        }
        
      </tbody>
    </table>
  );
};
export default TableField;
