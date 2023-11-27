import { useEffect, useState } from "react";
import { admin_data } from "../../data/adminData";
import Garbageicon from "../../icons/Garbageicon";

interface TableColumns {
  id: number;
  col: string;
}

interface TableProps {
  searchTerm: string;
}

const Table: React.FC<TableProps> = ({ searchTerm }) => {
  const [col] = useState<TableColumns[]>([
    {
      id: 1,
      col: "Full Name",
    },
    {
      id: 2,
      col: "Email",
    },
    {
      id: 3,
      col: "Contact No.",
    },
    {
      id: 4,
      col: "Role",
    },
    {
      id: 5,
      col: "Status",
    },
    {
      id: 6,
      col: "Action",
    },
  ]);

  const [filteredData, setFilteredData] = useState(admin_data);

  useEffect(() => {
    setFilteredData(
      admin_data.filter((person) =>
        Object.values(person)
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
              {filteredData.map((person) => (
                <tr key={person.email}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="">
                        <div className="text-sm font-medium text-gray-900">
                          {person.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 sm:whitespace-nowrap">
                      {person.email}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 text-sm text-gray-500">
                      {person.contact}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.role}
                  </td>
                  <td className="whitespace-nowrap text-sm font-medium">
                    {person.status === "Active" ? (
                      <button className="active-but relative left-[12px] p-2 text-green-500">
                        {person.status}
                      </button>
                    ) : (
                      <button className="active-but relative left-[12px] p-2 text-red-500">
                        {person.status}
                      </button>
                    )}
                  </td>
                  <td className="flex gap-5 items-center mt-2">
                    <button className="custom_but p-2 rounded-md shadow-md">
                      View
                    </button>
                    <button className="custom-but-2 p-2 rounded-md shadow-md">
                      View
                    </button>
                    <div>
                      <Garbageicon />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
