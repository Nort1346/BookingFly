import React from "react";

const SearchBar: React.FC = () => {
  //const input = useRef();
  return (
    <>
      <div className="space-y-4 m-8">
        <div className="flex flex-col">
          <label
            htmlFor="fromDestination"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            From Destination
          </label>
          <input
            type="text"
            id="fromDestination"
            name="fromDestination"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="toDestination"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            To Destination
          </label>
          <input
            type="text"
            id="toDestination"
            name="toDestination"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="startDate"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="endDate"
            className="mb-2 font-medium text-gray-700 dark:text-gray-300"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
        </div>
        <button className="btn">Szukaj</button>
      </div>
    </>
  );
};

export default SearchBar;
