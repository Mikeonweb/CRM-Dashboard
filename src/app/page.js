"use client";

import React, { useState } from "react";
import LeadsTable from "../components/LeadsTable";
import UserModal from "../components/UserModal";
import Dashboard from "@/components/Dashboard";
import SideBar from "@/components/SideBar";
import LeadsHeader from "@/components/LeadsHeader";
import { CgMenuGridO } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { IoAddOutline, IoCallOutline } from "react-icons/io5";
import { TfiLightBulb } from "react-icons/tfi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { SiDynatrace } from "react-icons/si";
import { MdChatBubbleOutline } from "react-icons/md";
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
  // State to control agent skill toggle
  const [isAgentSkillOpen, setAgentSkillOpen] = useState(false);

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

  const userProfiles = [
    { name: "Alice Johnson", achievement: "Top Seller", image: "/user1.jpg" },
    { name: "Bob Smith", achievement: "Exceeded Quota", image: "/user2.jpg" },
    {
      name: "Charlie Brown",
      achievement: "Client Favorite",
      image: "/user3.jpg",
    },
    {
      name: "Diana Prince",
      achievement: "Highest Revenue",
      image: "/user4.jpg",
    },
    { name: "Ethan Hunt", achievement: "Fast Closer", image: "/user5.jpg" },
  ];

  /**
   * Handle User Row Click
   * - Opens the modal and sets the selected user.
   */
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-[100vh] bg-gray-200">
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
      <div className="flex h-[100vh] justify-between gap-2 cursor-pointer">
        {/* right side */}
        <div
          className={`transition-all duration-300 ease-in-out relative ${
            isOpen ? "w-60" : "w-16"
          }`}
        >
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* middle */}
        <div className="flex-1">
          {/* Page Title */}
          <div className="my-2 p-2 flex justify-between items-center bg-white rounded">
            <LeadsHeader />
            {/* Rest of your page content */}
          </div>

          {/* insight panel */}
          <div className="flex items-center justify-center p-[0.10rem] rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 w-full bg-white">
            <Dashboard />
          </div>

          <div>
            <div className="my-2">
              <div className="flex items-center w-[28%] rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  type="text"
                  placeholder="Sort, filter and search with Copilot"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
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
