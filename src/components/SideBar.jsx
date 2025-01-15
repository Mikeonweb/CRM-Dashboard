"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FiMenu, FiPhoneCall } from "react-icons/fi";
import { GrHomeRounded, GrPin, GrNotes } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineRequestQuote,
  MdOutlineCampaign,
} from "react-icons/md";
import { SiDynatrace, SiMailboxdotorg } from "react-icons/si";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GiJerusalemCross } from "react-icons/gi";
import { LuClipboardPenLine, LuUserRound } from "react-icons/lu";
import { PiCardholder, PiPackage } from "react-icons/pi";
import { TbBrandPagekit, TbUserQuestion } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsClipboardData, BsListTask } from "react-icons/bs";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAgentSkillOpen, setAgentSkillOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    recent: false,
    pinned: false,
    sales: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsOpen]);

  const getInitial = (email) => {
    return email ? email[0].toUpperCase() : "?";
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleClear = () => {
    setEmail("");
  };

  const NavItem = ({
    icon: Icon,
    text,
    active,
    onClick,
    hasDropdown,
    isExpanded,
  }) => (
    <div
      className={`
        flex items-center justify-between px-4 py-2 cursor-pointer
        transition-colors duration-200 
        ${active ? "bg-white" : "hover:bg-gray-100"}
        ${isOpen ? "mx-2 rounded-lg" : "mx-1"}
      `}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <Icon className={`${active ? "text-blue-600" : "text-gray-600"}`} />
        {isOpen && (
          <span className={`${active ? "font-medium" : ""}`}>{text}</span>
        )}
      </div>
      {hasDropdown && isOpen && (
        <MdKeyboardArrowDown
          className={`transform transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      )}
    </div>
  );

  const SectionTitle = ({ title }) => (
    <div className={`py-4 ${isOpen ? "px-6" : "px-4"}`}>
      {isOpen ? (
        <h2 className="text-sm font-semibold text-gray-600">{title}</h2>
      ) : (
        <div className="h-px bg-gray-300" />
      )}
    </div>
  );

  return (
    <>
      <div
        className={`
        flex flex-col h-full bg-gray-50 border-r border-gray-200
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-60" : "w-16"}
        ${isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"}
      `}
      >
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            <FiMenu />
          </button>
          {isOpen && (
            <button
              onClick={() => setAgentSkillOpen(true)}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              Agent skill
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto">
          <NavItem icon={GrHomeRounded} text="Home" />
          <NavItem
            icon={IoTimeOutline}
            text="Recent"
            hasDropdown
            isExpanded={expandedSections.recent}
            onClick={() => toggleSection("recent")}
          />
          <NavItem
            icon={GrPin}
            text="Pinned"
            hasDropdown
            isExpanded={expandedSections.pinned}
            onClick={() => toggleSection("pinned")}
          />

          <SectionTitle title="My Work" />
          <NavItem icon={HiOutlineRocketLaunch} text="Sales Accelerator" />
          <NavItem icon={GiJerusalemCross} text="Dashboards" />
          <NavItem icon={LuClipboardPenLine} text="Activities" />

          <SectionTitle title="Customers" />
          <NavItem icon={PiCardholder} text="Accounts" />
          <NavItem icon={LuUserRound} text="Contacts" />

          <SectionTitle title="Sales" />
          <NavItem icon={FiPhoneCall} text="Leads" active />
          <NavItem icon={TbBrandPagekit} text="Opportunities" />
          <NavItem icon={TbUserQuestion} text="Competitors" />

          <SectionTitle title="Collateral" />
          <NavItem icon={MdOutlineRequestQuote} text="Quotes" />
          <NavItem icon={GrNotes} text="Orders" />
          <NavItem icon={LiaFileInvoiceDollarSolid} text="Invoices" />
          <NavItem icon={PiPackage} text="Products" />
          <NavItem icon={BsClipboardData} text="Sales Literature" />

          <SectionTitle title="Marketing" />
          <NavItem icon={BsListTask} text="Marketing List" />
          <NavItem icon={MdOutlineCampaign} text="Quick Campaigns" />

          <SectionTitle title="Performance" />
          <NavItem
            icon={BsListTask}
            text="Sales"
            hasDropdown
            isExpanded={expandedSections.sales}
            onClick={() => toggleSection("Sales")}
          />
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Agent Skill Modal */}
      {isAgentSkillOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 max-w-4xl rounded-lg p-6 overflow-y-auto">
            <div className="mb-8">
              <h3 className="flex items-center gap-2 font-bold text-xl">
                <SiDynatrace className="text-red-500" /> Agent Skills
              </h3>
            </div>

            <div className="space-y-6">
              {/* Skill Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-lg">
                    Check if on-hand inventory will allow all orders to ship
                    without delay
                  </h4>
                  <MdKeyboardArrowUp className="text-gray-500" />
                </div>

                <div className="flex flex-wrap gap-2">
                  <span>When</span>
                  {[
                    "any vendor",
                    "Confirmed purchase orders",
                    "on-hand inventory",
                    "all sales orders",
                    "ship without delay",
                    "update the purchase order",
                  ].map((term, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              {/* Email Access Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="mb-4">
                  <h4 className="flex items-center gap-2 font-bold text-lg">
                    <SiMailboxdotorg className="text-blue-500" /> Enable email
                    access
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Allow the agent to access email inboxes to read mail from
                    known vendors
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      {getInitial(email)}
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {email && (
                      <button
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <X size={16} className="text-gray-500" />
                      </button>
                    )}
                  </div>
                  <button className="bg-blue-600 px-6 py-2 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Allow Access
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={() => setAgentSkillOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setAgentSkillOpen(false)}
              >
                Activate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;