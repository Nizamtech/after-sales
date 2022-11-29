import React from "react";

const AfterSalesTable = () => {
  return (
    <div className=" w-full">
      <div class="overflow-x-auto relative w-full">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=" text-center">
              <th scope="col" class="py-3 px-6">
                Customer name
              </th>
              <th scope="col" class="py-3 px-6">
                Company Name
              </th>
              <th scope="col" class="py-3 px-6">
                Dessignation
              </th>
              <th scope="col" class="py-3 px-6">
                Salary
              </th>
              <th scope="col" class="py-3 px-6">
                Loan /Card
              </th>
              <th scope="col" class="py-3 px-6">
                Decline
              </th>
              <th scope="col" class="py-3 px-6">
                Remarks
              </th>
              <th scope="col" class="py-3 px-6">
                Observation
              </th>
              <th scope="col" class="py-3 px-6">
                1st Service Remarks
              </th>
              <th scope="col" class="py-3 px-6">
                Next Service
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Aman Ullah Aman
              </th>
              <td class="py-4 px-6">Grameen Phone</td>
              <td class="py-4 px-6">CTO</td>
              <td class="py-4 px-6">2000000</td>
              <td class="py-4 px-6">Credit Card</td>
              <td class="py-4 px-6">Credit Card will provide Later</td>
              <td class="py-4 px-6">Remarks Here</td>
              <td class="py-4 px-6">
                {" "}
                <textarea
                  className=" border focus:outline-gray-300"
                  name="1stObservation"
                  id=""
                  cols="25"
                  rows="2"
                ></textarea>
              </td>
              <td class="py-4 px-6">
                <textarea
                  className=" border focus:outline-gray-300"
                  name="1stObservation"
                  id=""
                  cols="25"
                  rows="2"
                ></textarea>
              </td>
              <td class="py-4 px-6">
                {" "}
                <textarea
                  className=" border focus:outline-gray-300"
                  name="nextService"
                  id=""
                  cols="25"
                  rows="2"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AfterSalesTable;
