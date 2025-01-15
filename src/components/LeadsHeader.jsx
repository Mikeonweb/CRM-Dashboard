"use client";

import React from "react";
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
  return (
    <div className=" flex flex-col lg:flex-row sm:flex-row justify-between items-start lg:items-center bg-white rounded w-full gap-4">
      <div className="flex items-center">
        <h3 className="font-semibold text-[12px]">My Open Leads</h3>
        <MdKeyboardArrowDown />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-1 text-sm">
            <LuChartNoAxesCombined />
            <span className="hidden sm:inline">Show chart</span>
          </button>
          <button className="flex items-center gap-1 text-sm">
            <BsListTask />
            <span className="hidden sm:inline">Focused view</span>
          </button>
          <button className="flex items-center gap-1 text-sm">
            <BsPlusLg />
            <span className="hidden sm:inline">New</span>
          </button>
          <button className="flex items-center gap-1 text-sm">
            <IoRefresh />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button className="flex items-center gap-1 text-sm">
            <FcCollaboration />
            <span className="hidden sm:inline">Collaborate</span>
          </button>
          <button className="flex items-center gap-1 text-sm">
            <MdOutlineDelete />
            <span className="hidden sm:inline">Delete</span>
          </button>
        </div>

        {/* Controls group */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center">
            <MdKeyboardArrowDown />
            <TbDotsVertical className="ml-2" />
          </div>

          <button className="flex items-center gap-2 p-1 border-2 rounded text-sm">
            <MdOutlineAvTimer />
            <span className="hidden sm:inline">Smart data</span>
          </button>

          <button className="flex items-center gap-2 p-1 border-2 rounded text-sm">
            <IoFilterOutline />
            <span className="hidden sm:inline">Edit filters</span>
          </button>

          <button className="flex items-center gap-2 p-1 border-2 rounded text-sm">
            <MdEditRoad />
            <span className="hidden sm:inline">Edit columns</span>
          </button>

          <button className="flex items-center text-white bg-blue-700 p-2 rounded">
            <div className="border-r-2 border-white pr-1">
              <TbLogout />
            </div>
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadsHeader;
