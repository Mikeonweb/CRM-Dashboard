"use client";

import React, { useState } from "react";
import LeadsTable from "../components/LeadsTable";
import UserModal from "../components/UserModal";

import { CgMenuGridO } from "react-icons/cg";
import { FiSettings, FiMenu, FiPhoneCall } from "react-icons/fi";
import {
  IoAddOutline,
  IoTimeOutline,
  IoFilterOutline,
  IoRefresh,
  IoCallOutline,
} from "react-icons/io5";
import { TfiLightBulb } from "react-icons/tfi";
import { GrHomeRounded, GrPin, GrNotes } from "react-icons/gr";
import {
  HiOutlineRocketLaunch,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { GiJerusalemCross } from "react-icons/gi";
import { SiDynatrace } from "react-icons/si";
import {
  LuClipboardPenLine,
  LuUserRound,
  LuChartNoAxesCombined,
} from "react-icons/lu";
import { PiCardholder } from "react-icons/pi";
import {
  TbBrandPagekit,
  TbUserQuestion,
  TbLogout,
  TbDotsVertical,
} from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import {
  MdOutlineRequestQuote,
  MdOutlineCampaign,
  MdKeyboardArrowDown,
  MdEditRoad,
  MdOutlineAvTimer,
  MdOutlineDelete,
  MdChatBubbleOutline,
} from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { PiPackage } from "react-icons/pi";
import { BsClipboardData, BsListTask, BsPlusLg } from "react-icons/bs";
import { FaRegCircleUser, FaChalkboardUser, FaQuestion } from "react-icons/fa6";

/**
 * Home Page
 * - Displays a table of leads with dynamic user popup modal.
 * - Data is mocked for simplicity.
 */
export default function Home() {
  // State for storing the selected user
  const [selectedUser, setSelectedUser] = useState(null);
  // State to control modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  /**
   * Mock Leads Data
   * - Replace this with data fetched from an API or database.
   */
  const leads = [
    {
      name: "Winford Asher",
      topic: "Cafe A100 for commercial use",
      status: "New",
      createdOn: "4/02/2024 12:00 PM",
    },
    {
      name: "Josia Love",
      topic: "Upgrading service plan",
      status: "New",
      createdOn: "3/30/2024 7:45 AM",
    },
    {
      name: "Harrison Curtis",
      topic: "Issue with EspressoMaster",
      status: "New",
      createdOn: "3/28/2024 3:30 PM",
    },
    {
      name: "Jane Reyes",
      topic: "Improving cost per cup",
      status: "New",
      createdOn: "3/10/2024 9:30 AM",
    },
  ];

  /**
   * Handle User Row Click
   * - Opens the modal and sets the selected user.
   */
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  return (
    <div className="h-[100%] bg-gray-200">
      {/* HEADER */}
      <div className="bg-blue-950 h-10 flex px-2 justify-between items-center">
        <div className="flex text-white">
          <CgMenuGridO className="text-white text-xl " />
          <p className="ml-4">Dynamics 365</p>
          <p className="ml-4">|</p>
          <p className="ml-4">Sales hub</p>
        </div>

        <div className="flex text-white">
          <TfiLightBulb className="ml-4" />
          <IoAddOutline className="ml-4" />
          <FiSettings className="ml-4" />
          <FaQuestion className="ml-4" />
          <FaChalkboardUser className="ml-4" />
          <FaRegCircleUser className="ml-4" />
        </div>
      </div>

      {/* Container */}
      <div className="h-[100%] flex justify-between gap-2 cursor-pointer">
        {/* right side */}
        <div className="bg-gray-200 h-[100%] w-60 border-r-2 border-gray-300">
          <div className="py-1 pl-4">
            <FiMenu className="mb-2" />
            <p className="flex items-center gap-2">
              <GrHomeRounded />
              Home
            </p>
            <div className="justify-between flex items-center">
              <p className="flex items-center gap-2">
                <IoTimeOutline />
                Recent
              </p>
              <span>
                <MdKeyboardArrowDown />
              </span>
            </div>
            <div className="justify-between flex items-center">
              <p className="flex items-center gap-2">
                <GrPin />
                Pinned
              </p>
              <span>
                <MdKeyboardArrowDown />
              </span>
            </div>
          </div>

          <div className="py-2 pl-4">
            <p className="font-bold">My Work</p>
            <p className="flex items-center gap-2">
              <HiOutlineRocketLaunch />
              Sales Accelerator
            </p>
            <p className="flex items-center gap-2">
              <GiJerusalemCross />
              Dashboards
            </p>
            <p className="flex items-center gap-2">
              <LuClipboardPenLine />
              Activities
            </p>
          </div>

          <div className="py-2 pl-4">
            <p className="font-bold">Customers</p>
            <p className="flex items-center gap-2">
              <PiCardholder />
              Accounts
            </p>
            <p className="flex items-center gap-2">
              <LuUserRound />
              Contacts
            </p>
          </div>

          <div className="py-2 ">
            <p className="font-bold pl-4 ">Sales</p>
            <div className="flex items-center bg-white">
              <div className="h-5 w-1 ml-1 bg-blue-800"></div>
              <div className="flex items-center gap-2 pl-1">
                <span className="">
                  <FiPhoneCall />
                </span>
                <span className="">Leads</span>
              </div>
            </div>
            <p className="flex pl-4 items-center gap-2">
              <TbBrandPagekit />
              Opportunities
            </p>
            <p className="flex pl-4 items-center gap-2">
              <TbUserQuestion />
              Competitors
            </p>
          </div>

          <div className="py-2 pl-4">
            <p className="font-bold">Collateral</p>
            <p className="flex items-center gap-2">
              <MdOutlineRequestQuote />
              Quotes
            </p>
            <p className="flex items-center gap-2">
              <GrNotes />
              Orders
            </p>
            <p className="flex items-center gap-2">
              <LiaFileInvoiceDollarSolid />
              Invoices
            </p>
            <p className="flex items-center gap-2">
              <PiPackage />
              Products
            </p>
            <p className="flex items-center gap-2">
              <BsClipboardData />
              Sales Literature
            </p>
          </div>

          <div className="py-2 pl-4">
            <p className="font-bold">Marketing</p>
            <p className="flex items-center gap-2">
              <BsListTask />
              Marketing List
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineCampaign />
              Quick Campaigns
            </p>
          </div>

          <div className="py-2">
            <div className="border-b-2 border-b-gray-300 mb-2">
              <p className="font-bold pl-4">Perfomance</p>
            </div>
            <div className="justify-between flex items-center pl-4 ">
              <p className="flex items-center gap-2">
                <span className="bg-purple-900 text-white px-2 rounded">S</span>
                Sales
              </p>
              <span>
                <MdKeyboardArrowDown />
              </span>
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="flex-1">
          {/* Page Title */}
          <div className="my-4 p-2 flex justify-between items-center bg-white rounded">
            <div className="flex items-center">
              <h3 className="font-semibold text-[12px]">My Open Leads</h3>
              <MdKeyboardArrowDown />
            </div>

            <div className="flex gap-2">
              <div className="flex gap-3">
                <p className="flex items-center gap-1">
                  <LuChartNoAxesCombined />
                  Show chart
                </p>
                <p className="flex items-center gap-1">
                  <BsListTask />
                  Focused view
                </p>
                <p className="flex items-center gap-1">
                  <BsPlusLg />
                  New
                </p>
                <p className="flex items-center gap-1">
                  <IoRefresh />
                  Refresh
                </p>
                <p className="flex items-center gap-1">
                  <FcCollaboration />
                  Collaborate
                </p>
                <p className="flex items-center gap-1">
                  <MdOutlineDelete />
                  Delete
                </p>
              </div>
              <div className="flex items-center">
                <div className="">
                  <MdKeyboardArrowDown />
                </div>
                <div className="">
                  <TbDotsVertical className="ml-2" />
                </div>
              </div>
              <div className="flex items-center gap-2 p-1 border-2 rounded">
                <MdOutlineAvTimer />
                <p>Smart data</p>
              </div>
              <div className="flex items-center gap-2 p-1 border-2 rounded">
                <IoFilterOutline />
                <p>Edit filters</p>
              </div>
              <div className="flex items-center gap-2 p-1 border-2 rounded">
                <MdEditRoad />
                <p>Edit columns</p>
              </div>
              <div className="flex items-center text-white bg-blue-700 p-2 rounded">
                <div className="border-r-2 border-white">
                  <TbLogout className="mr-1" />
                </div>
                <div className="">
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          </div>

          {/* search */}
          {/* <div>
            <input
            className="py-2"
            placeholder="Sort, filter and search with Copilot"
            ></input>
          </div> */}

          <div>
            {/* <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
              Price
            </label> */}
            <div className="my-2">
              <div className="flex items-center w-[28%] rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  type="text"
                  placeholder="Sort, filter and search with Copilot"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  {/* <select
                    id="currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select> */}
                  <SiDynatrace
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Leads Table */}
          <LeadsTable leads={leads} onUserClick={handleUserClick} />

          {/* User Modal */}
          <UserModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            user={selectedUser}
          />
        </div>

        {/* left side */}
        <div className=" bg-slate-100  w-10 py-2 px-3">
          <SiDynatrace className="mb-6" />
          <HiOutlineChatBubbleLeftRight className="mb-6" />
          <IoCallOutline className="mb-6" />
          <MdChatBubbleOutline />
        </div>
      </div>
    </div>
  );
}
