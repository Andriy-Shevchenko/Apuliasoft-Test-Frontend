import React from "react";
import moment from "moment";

interface ITableProps {
  columns: string[];
  tableData: any[];
}

const Table = ({
  columns,
  tableData
}: ITableProps) => {
  return (
    <table className="w-full">
      <thead>
      <tr>
        {
          columns.map((column) => (
            <th
              key={column}
              className="border border-gray-600 bg-gray-400 py-2"
            >
              {column}
            </th>
          ))
        }
      </tr>
      </thead>
      <tbody>
      {
        tableData.map((activity, index) => (
          <tr key={`${index}_${index}`}>
            {
              columns.map((column) => (
                <td
                  key={column}
                  className="text-center border border-gray-600 py-2"
                >
                  {
                    column === 'employee' || column === 'project' ? (
                      activity[column] && activity[column].name
                    ) : (
                      column === 'date' ? (
                        moment(activity[column]).format('DD MMM YYYY')
                      ) : (
                        activity[column]
                      )
                    )
                  }
                </td>
              ))
            }
          </tr>
        ))
      }
      </tbody>
    </table>
  );
};

export default Table;
