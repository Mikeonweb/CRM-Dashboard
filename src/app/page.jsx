"use client";

import React, { useState, useEffect } from "react";
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

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Handle window resize and set initial state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-blue-950 h-10 flex px-2 justify-between items-center flex-shrink-0 relative z-50">
        {/* Left header section */}
        <div className="flex text-white items-center overflow-hidden">
          <button
            onClick={() => {
              if (window.innerWidth < 1024) {
                setMobileDrawerOpen(!isMobileDrawerOpen);
              } else {
                setIsOpen(!isOpen);
              }
            }}
            className="flex-shrink-0 p-1 hover:bg-blue-900 rounded-lg transition-colors"
          >
            <CgMenuGridO className="text-xl" />
          </button>
          <p className="ml-2 md:ml-4 truncate text-sm md:text-base">
            Dynamics 365
          </p>
          <p className="mx-2 hidden lg:block">|</p>
          <p className="hidden lg:block truncate">Sales hub</p>
        </div>

        {/* Right header section */}
        <div className="flex text-white items-center gap-2 md:gap-4">
          <TfiLightBulb className="hidden sm:block" />
          <IoAddOutline className="text-lg" />
          <FiSettings className="hidden sm:block" />
          <FaQuestion className="hidden sm:block" />
          <FaChalkboardUser className="hidden sm:block" />
          <FaRegCircleUser className="text-lg" />
        </div>
      </div>

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Side Drawer */}
        <div
          className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="w-60 h-full bg-white shadow-lg pt-5 pb-5 lg:pt-0 md:pt-0">
            <SideBar isOpen={true} setIsOpen={setMobileDrawerOpen} />
          </div>
        </div>

        {/* Overlay for Mobile Drawer */}
        {isMobileDrawerOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
            onClick={() => setMobileDrawerOpen(false)}
          ></div>
        )}

        {/* Desktop Sidebar */}
        <div
          className={`hidden md:block transition-all duration-300 ease-in-out flex-shrink-0 ${
            isOpen ? "w-60" : "w-16"
          }`}
        >
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-2 md:p-4 overflow-y-auto">
          {/* Page Title */}
          <div className="mb-4 p-2 bg-white rounded">
            <LeadsHeader />
          </div>

          {/* Insight Panel */}
          <div className="mb-4 w-full">
            <div className="p-[0.10rem] rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400">
              <Dashboard />
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-4 w-full">
            <div className="flex items-center w-full sm:w-[28%] rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300">
              <input
                type="text"
                placeholder="Search"
                className="block w-full py-1.5 pl-1 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
              <SiDynatrace className="flex-shrink-0 mr-2 w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Leads Table */}
          <div className="w-full mb-5 lg:mb-0 md:mb-0">
            <LeadsTable leads={leads} onUserClick={handleUserClick} />
          </div>

          {/* User Modal */}
          <UserModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            user={selectedUser}
          />
        </div>

        {/* Right Sidebar */}
        <div className="hidden sm:flex flex-col bg-slate-100 w-10 py-2 px-3 flex-shrink-0">
          <SiDynatrace className="mb-6" />
          <HiOutlineChatBubbleLeftRight className="mb-6" />
          <IoCallOutline className="mb-6" />
          <MdChatBubbleOutline />
        </div>

        {/* Mobile Bottom Navigation */}
        {/* <div className="fixed bottom-0 left-0 right-0 bg-slate-100 flex justify-around items-center h-14 sm:hidden z-40">
          <SiDynatrace className="text-lg" />
          <HiOutlineChatBubbleLeftRight className="text-lg" />
          <IoCallOutline className="text-lg" />
          <MdChatBubbleOutline className="text-lg" />
        </div> */}
      </div>
    </div>
  );
}