"use client";

import React from "react";
import { MdKeyboardArrowDown, MdOutlineArrowDownward } from "react-icons/md";

/**
 * LeadsTable Component
 * - Renders a table of leads with clickable user names.
 * - User details are displayed when a name is clicked.
 *
 * Props:
 * - leads: Array of lead objects (name, topic, status, createdOn).
 * - onUserClick: Function to handle clicks on a user row.
 */
export default function LeadsTable({ leads, onUserClick }) {
  return (
    <table className="min-w-full bg-white">
  {/* Table Header */}
  <thead>
    <tr className="w-full bg-gray-100 text-left">
      <th className="px-6 py-3">
        <div className="flex items-center">
          Name <MdKeyboardArrowDown />
        </div>
      </th>
      <th className="px-6 py-3">
        <div className="flex items-center">
          Topic <MdKeyboardArrowDown />
        </div>
      </th>
      <th className="px-6 py-3">
        <div className="flex items-center">
          Status <MdKeyboardArrowDown />
        </div>
      </th>
      <th className="px-6 py-3">
        <div className="flex items-center">
          Created On <MdOutlineArrowDownward /> <MdKeyboardArrowDown />
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
        <td className="px-6 py-4 flex items-center text-blue-600">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) => onCheckboxChange(e, lead)}
          />
          <span onClick={() => onUserClick(lead)}>{lead.name}</span>
        </td>
        {/* Topic */}
        <td className="px-6 py-4">{lead.topic}</td>
        {/* Status */}
        <td className="px-6 py-4">{lead.status}</td>
        {/* Created On */}
        <td className="px-6 py-4">{lead.createdOn}</td>
      </tr>
    ))}
  </tbody>
</table>



  );
}
