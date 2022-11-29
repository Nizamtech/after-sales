import React from "react";
import AfterSalesTable from "../../AfterSales/AfterSalesTable";

const DashboardHome = () => {
  return (
    <div className="lg:py-3 md:py-3 py-2 lg:px-3 md:px-3 px-0 mx-2">
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-lg text-left font-semibold text-[#5D54A4] px-4 py-1.5 border border-l-[10px] border-l-[#5D54A4] rounded-r-lg inline-block">
          After Sales
        </h3>
        <div className=" w-full my-5">
          <AfterSalesTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
