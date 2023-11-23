
const Table = ({ columns, children }) => {

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
          {children}
        </tbody>
      </table>
    );
}


export default Table;