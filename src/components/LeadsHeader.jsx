"use client";

import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineDelete,
  MdOutlineAvTimer,
  MdEditRoad,
} from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BsListTask, BsPlusLg } from "react-icons/bs";
import { IoRefresh, IoFilterOutline } from "react-icons/io5";
import { FcCollaboration } from "react-icons/fc";
import { TbDotsVertical, TbLogout } from "react-icons/tb";

const LeadsHeader = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const actionButtons = [
    { icon: <LuChartNoAxesCombined />, label: "Show chart" },
    { icon: <BsListTask />, label: "Focused view" },
    { icon: <BsPlusLg />, label: "New" },
    { icon: <IoRefresh />, label: "Refresh" },
    { icon: <FcCollaboration />, label: "Collaborate" },
    { icon: <MdOutlineDelete />, label: "Delete" },
  ];

  const controlButtons = [
    { icon: <MdOutlineAvTimer />, label: "Smart data" },
    { icon: <IoFilterOutline />, label: "Edit filters" },
    { icon: <MdEditRoad />, label: "Edit columns" },
  ];

  return (
    <div className="p-2 bg-white rounded w-full">
      {/* Mobile and Tablet View */}
      <div className="xl:hidden">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <h3 className="font-semibold text-sm">My Open Leads</h3>
            <MdKeyboardArrowDown className="ml-1" />
          </div>
          
          <button 
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className="p-2"
          >
            <TbDotsVertical />
          </button>
        </div>

        {isMoreMenuOpen && (
          <div className="absolute right-2 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-1">
            {actionButtons.map((button, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
              >
                {button.icon}
                <span>{button.label}</span>
              </button>
            ))}
            <div className="border-t border-gray-200 my-1"></div>
            {controlButtons.map((button, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
              >
                {button.icon}
                <span>{button.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile/Tablet Quick Actions */}
        <div className="flex justify-between gap-2 overflow-x-auto pb-2">
          <button className="flex items-center gap-1 text-sm bg-blue-700 text-white p-2 rounded whitespace-nowrap">
            <BsPlusLg />
            <span>New</span>
          </button>
          <button className="flex items-center gap-1 text-sm p-2 border rounded whitespace-nowrap">
            <IoRefresh />
            <span>Refresh</span>
          </button>
          <button className="flex items-center gap-1 text-sm p-2 border rounded whitespace-nowrap">
            <IoFilterOutline />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden xl:flex flex-row justify-between items-center">
        <div className="flex items-center">
          <h3 className="font-semibold text-[12px]">My Open Leads</h3>
          <MdKeyboardArrowDown />
        </div>

        <div className="flex items-center gap-4">
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {actionButtons.map((button, index) => (
              <button key={index} className="flex items-center gap-1 text-sm whitespace-nowrap">
                {button.icon}
                <span>{button.label}</span>
              </button>
            ))}
          </div>

          {/* Controls group */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <MdKeyboardArrowDown />
              <TbDotsVertical className="ml-2" />
            </div>

            {controlButtons.map((button, index) => (
              <button
                key={index}
                className="flex items-center gap-2 p-1 border-2 rounded text-sm whitespace-nowrap"
              >
                {button.icon}
                <span>{button.label}</span>
              </button>
            ))}

            <button className="flex items-center text-white bg-blue-700 p-2 rounded whitespace-nowrap">
              <div className="border-r-2 border-white pr-1">
                <TbLogout />
              </div>
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsHeader;
