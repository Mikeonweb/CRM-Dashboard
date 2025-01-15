"use client";

import React from "react";
import { MdKeyboardArrowDown, MdOutlineArrowDownward } from "react-icons/md";

/**
 * LeadsTable Component
 * - Renders a responsive table of leads with clickable user names
 * - Horizontally scrollable on mobile devices
 * - Adjusts padding and text size for different screen sizes
 *
 * Props:
 * - leads: Array of lead objects (name, topic, status, createdOn)
 * - onUserClick: Function to handle clicks on a user row
 */
export default function LeadsTable({ leads, onUserClick }) {
  return (
    <div className="w-full overflow-x-auto shadow-sm rounded-lg">
      <table className="min-w-full bg-white">
        {/* Table Header */}
        <thead>
          <tr className="w-full bg-gray-100 text-left">
            <th className="px-3 py-2 md:px-6 md:py-3 whitespace-nowrap">
              <div className="flex items-center text-sm md:text-base">
                Name <MdKeyboardArrowDown className="ml-1" />
              </div>
            </th>
            <th className="px-3 py-2 md:px-6 md:py-3 whitespace-nowrap">
              <div className="flex items-center text-sm md:text-base">
                Topic <MdKeyboardArrowDown className="ml-1" />
              </div>
            </th>
            <th className="px-3 py-2 md:px-6 md:py-3 whitespace-nowrap">
              <div className="flex items-center text-sm md:text-base">
                Status <MdKeyboardArrowDown className="ml-1" />
              </div>
            </th>
            <th className="px-3 py-2 md:px-6 md:py-3 whitespace-nowrap">
              <div className="flex items-center text-sm md:text-base">
                Created On
                <MdOutlineArrowDownward className="ml-1" />
                <MdKeyboardArrowDown />
              </div>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {leads.map((lead, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 cursor-pointer border-t border-gray-200"
            >
              {/* Checkbox and User Name */}
              <td className="px-3 py-2 md:px-6 md:py-4 flex items-center text-blue-600 text-sm md:text-base whitespace-nowrap">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                  onChange={(e) => onCheckboxChange(e, lead)}
                />
                <span
                  onClick={() => onUserClick(lead)}
                  className="hover:underline"
                >
                  {lead.name}
                </span>
              </td>
              {/* Topic */}
              <td className="px-3 py-2 md:px-6 md:py-4 text-sm md:text-base whitespace-nowrap">
                {lead.topic}
              </td>
              {/* Status */}
              <td className="px-3 py-2 md:px-6 md:py-4 text-sm md:text-base whitespace-nowrap">
                {lead.status}
              </td>
              {/* Created On */}
              <td className="px-3 py-2 md:px-6 md:py-4 text-sm md:text-base whitespace-nowrap">
                {lead.createdOn}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
