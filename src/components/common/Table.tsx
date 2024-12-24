// Table.tsx
import React, { useState, useRef, useEffect } from "react";
import i18n from "../../../i18n";
import menu from "../../assets/images/icons/menu.svg";
import { t } from "i18next";
import MainButton from "../Buttons/MainButton";

type Header = {
  label: string;
  key: string;
};

type Row = Record<string, any>;

type TableProps = {
  headers: Header[];
  rows: Row[];
  operations?: Array<(row: Row) => JSX.Element>;
  isPagination?: boolean;
  title?: string;
  rout?: string;
  shouldShowOperations?: (row: Row) => boolean;
};

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  operations,
  title,
  rout,
  isPagination = false,
  shouldShowOperations = () => true, // Default to always show operations
}) => {
  const [openRowIndex, setOpenRowIndex] = useState<number | null>(null);
  const mouseRef = useRef<HTMLTableDataCellElement | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(rows.length / itemsPerPage);

  const paginatedRows = rows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemsPerPageChange = (count: number) => {
    setItemsPerPage(count);
    setCurrentPage(1); // Reset to first page on items-per-page change
  };

  const toggleMenu = (rowIndex: number) => {
    setOpenRowIndex((prevIndex) => (prevIndex === rowIndex ? null : rowIndex));
  };

  // Handle closing the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mouseRef.current &&
        !mouseRef.current.contains(event.target as Node)
      ) {
        setOpenRowIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="box">
      {title && (
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">{t(title)}</h2>
          <MainButton rout={rout} title={t("new") + " " + t(title)} />
        </div>
      )}
      <div className="bg-white rounded-xl w-full shadow-sm">
        <table className="table-auto border-collapse w-full text-[#657397]">
          <thead className="bg-[#eaecf1]">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 text-start py-4 font-semibold text-sm"
                >
                  {t(header.label)}
                </th>
              ))}
              {operations && <th className="py-2 font-semibold text-sm"></th>}
            </tr>
          </thead>
          <tbody>
            {(isPagination ? paginatedRows : rows).map((row, rowIndex) => {
              const showOperations = operations && shouldShowOperations(row);

              return (
                <tr key={rowIndex}>
                  {headers.map(({ key }, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-4 text-sm">
                      {row[key]}
                    </td>
                  ))}
                  {showOperations && (
                    <td className="py-2" ref={mouseRef}>
                      <div className="relative">
                        <img
                          src={menu}
                          alt="menu"
                          className="h-[24px] w-[24px] cursor-pointer transition-all hover:rounded-full hover:bg-blue-50"
                          onClick={() => toggleMenu(rowIndex)}
                        />
                        {openRowIndex === rowIndex && (
                          <div
                            className={`absolute ${
                              i18n.language?.slice(0, 2) === "ar"
                                ? "dropdown-rtl"
                                : "dropdown-ltr"
                            } end-10 top-7 transform min-w-40 rounded-md border-2 text-dark space-y-2 z-10 bg-white p-3 shadow-lg transition-all duration-300 ease-in-out`}
                          >
                            {operations.map((operation, opIndex) => (
                              <div
                                key={opIndex}
                                className="hover:bg-gray-50 p-1 transition-all rounded-lg duration-300 cursor-pointer"
                              >
                                {operation(row)}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>

        {isPagination && (
          <div className="flex items-center justify-end px-4 py-1 gap-5 bg-[#f2f4f7]">
            <div>
              <span className="text-sm">Rows per page: </span>
              <select
                title={t("chose")}
                value={itemsPerPage}
                onChange={(e) =>
                  handleItemsPerPageChange(Number(e.target.value))
                }
                className="text-sm bg-[#f2f4f7]"
              >
                {[5, 10, 15].map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
            <span className="text-sm">
              {currentPage} of {totalPages}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`${
                  currentPage === 1 ? "text-gray-400" : "text-blue-500"
                }`}
              >
                &lt;
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`${
                  currentPage === totalPages ? "text-gray-400" : "text-blue-500"
                }`}
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
