import { t } from "i18next";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbProps {
  separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = "/" }) => {
  const location = useLocation();

  // Split the pathname into individual parts
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Helper function to check if a string is numeric
  const isNumeric = (str: string): boolean => {
    return !isNaN(Number(str));
  };
  const slicePathnames = pathnames?.slice(0, 2);

  return (
    <nav aria-label="breadcrumb" className="text-dark">
      <ol className="flex items-center space-x-0">
        {pathnames.length > 0 ? (
          <li className="text-nowrap">
            <Link
              to="/home"
              className="text-lg font-normal capitalize text-silver hover:underline"
            >
              {t("home")}
            </Link>
          </li>
        ) : (
          <li className="text-lg capitalize text-silver">{t("home")}</li>
        )}
        {slicePathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          // Determine the display name based on whether the value is numeric
          const displayName = isNumeric(value) ? t("details") : t(value);
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2">{separator}</span>
              {isLast ? (
                <span className="text-lg font-bold capitalize text-black">
                  {decodeURIComponent(displayName)}
                </span>
              ) : (
                <Link
                  to={to}
                  className="max-w-44 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-normal capitalize text-silver hover:underline"
                >
                  {decodeURIComponent(displayName)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
