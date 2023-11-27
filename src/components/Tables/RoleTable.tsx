import { useEffect, useState } from "react";
import { role_data } from "../../data/roleData";
import Garbageicon from "../../icons/Garbageicon";

interface TableColumns {
  id: number;
  col: string;
}

interface TableProps {
  searchTerm: string;
}

const RoleTable: React.FC<TableProps> = ({ searchTerm }) => {
  const [col] = useState<TableColumns[]>([
    {
      id: 1,
      col: "Role Name",
    },
    {
      id: 2,
      col: "No. of Users",
    },
    {
      id: 3,
      col: "Action",
    },
  ]);

  const [filteredData, setFilteredData] = useState(role_data);

  useEffect(() => {
    setFilteredData(
      role_data.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="flex flex-col overflow-auto max-w-full">
      <div className="shadow-lg my-2 sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {col.map((eachCol) => (
                  <th
                    key={eachCol.id}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider sm:whitespace-nowrap"
                  >
                    {eachCol.col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.RoleName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 sm:whitespace-nowrap">
                      {item.User}
                    </div>
                  </td>
                  <div className="flex gap-5 items-center mt-2">
                    <button className="custom_but p-2  rounded-md shadow-md">
                      View
                    </button>
                    <button className="custom-but-2 p-2 rounded-md shadow-md">
                      View
                    </button>
                    <div>
                      <Garbageicon />
                    </div>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoleTable;
