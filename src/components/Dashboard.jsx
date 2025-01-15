"use client";

// components/InsightPanel.js
import React, { useState } from "react";
import {
  ArrowUpRight,
  Pencil,
  SendHorizontal,
  ChevronDown,
  CircleCheckBig,
  Medal,
  ArrowsUpFromLine,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { TfiEmail } from "react-icons/tfi";
import { BsStars, BsFillShieldLockFill } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Dashboard = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const progress = 68;
  const target = 45;

  const leads = [
    {
      id: 1,
      name: "Jane Reyes",
      title: "COO",
      company: "Northwind Traders",
      action: "Engage with Jane Reyes",
      description:
        "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      tags: ["Expand business", "High buying intent"],
      details: {
        pipeline: "$2.5M",
        lastContact: "2024-12-25",
        nextSteps: "Schedule product demo",
        notes: "Interested in bulk purchase for 50+ locations",
      },
    },
    {
      id: 2,
      name: "Allan Munger",
      title: "Head of Real Estate Development",
      company: "Contoso Coffee",
      action: "Prepare for meeting with Allan",
      description:
        "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
      tags: ["Upcoming meeting", "Due today"],
      details: {
        pipeline: "$1.8M",
        lastContact: "2024-12-27",
        nextSteps: "2 PM Meeting",
        notes: "Reviewing service contract upgrade options",
      },
    },
  ];

  const activities = [
    {
      id: 1,
      name: "Cafe A100 for Woodland Bank",
      company: "Woodland Bank",
      value: "$20,000",
      timeframe: "4 days to close",
      details: {
        status: "Final negotiation",
        probability: "90%",
        decisionMaker: "Sarah Chen",
        notes: "Price point confirmed, awaiting final approval",
      },
    },
    {
      id: 2,
      name: "Partnership opportunity for Fabrikam",
      company: "Fabrikam",
      value: "$5,000,000",
      timeframe: "12 days to close",
      details: {
        status: "Contract review",
        probability: "75%",
        decisionMaker: "Michael Brown",
        notes: "Legal team reviewing terms",
      },
    },
  ];

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="w-full  p-4 bg-white rounded-3xl sm:px-6 lg:px-8 ">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          {/* User Profile Section */}
          <div className="flex items-start space-x-3 flex-shrink-0">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg mt-1"></div>
            <div className="text-sm sm:text-base">
              <span className="text-gray-700 block sm:inline">Hi Mona, </span>
              <span>
                {progress}% of goal achieved and rest can be achieved by
                focusing on 20 top leads.
              </span>
            </div>
          </div>

          {/* Progress Section */}
          <div className="w-full lg:w-auto flex-1 space-y-3">
            {/* Progress Details */}
            <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-600 gap-2 sm:gap-4">
              <div>1 month until Q4 ends</div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="font-medium relative">
                  <span className="absolute text-xl left-[-.30em] bottom-[-0.50em] z-10">
                    |
                  </span>
                  <span>Target: ${target} million</span>
                </span>
                <span>{progress}% of target achieved</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                style={{ width: "10%" }}
                className="absolute h-full bg-green-500"
              ></div>
              <div
                style={{ width: "8%" }}
                className="absolute h-full bg-blue-500 left-[10%]"
              ></div>
              <div
                style={{ width: "7%" }}
                className="absolute h-full bg-purple-400 left-[18%]"
              ></div>
              <div
                style={{ width: "10%" }}
                className="absolute h-full bg-orange-300 left-[25%]"
              ></div>
              <div
                style={{ width: "65%" }}
                className="absolute h-full bg-gray-200 left-[35%]"
              ></div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
              {[
                { color: "bg-green-500", text: "Won $18m" },
                { color: "bg-blue-500", text: "Committed $8m" },
                { color: "bg-purple-400", text: "Best case $7m" },
                { color: "bg-orange-300", text: "Qualified $3m" },
                { color: "bg-gray-200", text: "Leads $75m" },
              ].map((item, index) => (
                <span
                  key={index}
                  className="flex items-center space-x-1 cursor-pointer hover:text-gray-900"
                >
                  <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                  <span className="text-[10px] sm:text-xs">{item.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 pb-6">
          {/* Leads Section */}
          <div className="w-full lg:w-[70%]">
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Copilot has pinpointed 20 key leads that show strong purchase
              intent and are actively engaging. These leads need your focus.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-4 border rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => handleLeadClick(lead)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 flex-shrink-0 bg-gray-300 rounded-full"></div>
                      <div className="min-w-0">
                        <h3 className="font-medium truncate">{lead.name}</h3>
                        <p className="text-sm text-gray-500 truncate">
                          {lead.title} • {lead.company}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  </div>

                  <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                    <h4 className="font-medium truncate">{lead.action}</h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {lead.description}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {lead.tags.map((tag, index) => (
                      <span key={index} className="text-sm text-gray-600">
                        {index > 0 && <span className="mx-1">•</span>}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Activities */}
          <div className="w-full lg:w-[30%] lg:border-l lg:pl-4">
            <h3 className="font-medium text-sm sm:text-base mb-4">
              Other key activities
            </h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="w-8 h-8 flex-shrink-0 bg-gray-200 rounded-lg"></div>
                    <div className="min-w-0">
                      <h4 className="font-medium truncate">{activity.name}</h4>
                      <p className="text-sm text-gray-500 truncate">
                        {activity.company} • {activity.value} •{" "}
                        {activity.timeframe}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-blue-600 flex-shrink-0 ml-2" />
                </div>
              ))}
            </div>

            <p className="text-blue-600 pt-12 cursor-pointer hover:underline">
              show all key activities
            </p>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <Dialog open={isDetailsModalOpen} onOpenChange={setIsDetailsModalOpen}>
        <DialogContent className="sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] max-h-[90vh] p-[0.18rem] rounded-lg border-none bg-gradient-to-r from-blue-400 to-purple-400">
          <div className="w-full h-full rounded-md p-4 bg-slate-50">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <TfiEmail className="text-2xl" />
                <p>Engage with</p>
                {selectedLead?.name || selectedLead?.company}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 overflow-y-auto max-h-[calc(90vh-8rem)]">
              <div className="child1 space-y-4">
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-4 border rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => handleLeadClick(lead)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div>
                          <h3 className="font-medium">{lead.name}</h3>
                          <p className="text-sm text-gray-500">
                            {lead.title} • {lead.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="child2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl border-none mt-4">
                <div className="block md:flex justify-between items-center p-4 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-2 md:pb-0 pb-4">
                    <BsStars className="text-[2rem] flex-shrink-0" />
                    <p className="md:text-[0.70rem] bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                      Jane maybe interested in upgrading espresso machines for
                      her in-store coffee shops.
                    </p>
                  </div>
                  <div className="flex justify-between gap-2 text-sm">
                    <button className="flex items-center bg-white gap-2 border border-gray-400 rounded-xl p-2">
                      <Pencil />
                      Edit
                    </button>
                    <button className="flex items-center text-white gap-2 rounded-xl p-2 bg-gradient-to-r from-blue-700 to-purple-600">
                      <SendHorizontal />
                      Approve and send
                    </button>
                  </div>
                </div>
              </div>

              <div className="child3">
                <div className="flex gap-4 p-4 text-gray-500 mt-4 border rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <p>Engage</p>
                  <p>Research</p>
                </div>
              </div>

              <div className="child4">
                <div className="p-4 text-gray-500 mt-4 border rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="p-4 w-full rounded-xl bg-gradient-to-r from-blue-100 to-purple-100">
                    <h3 className="bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
                      Why I picked this lead
                    </h3>
                    <ul className="ml-8 list-disc">
                      <li>
                        Jane is a
                        <span className="text-black mx-1">
                          key decision maker
                        </span>
                        and was browsing
                        <span className="text-black mx-1">
                          'espresso machines'
                        </span>{" "}
                        on first Coffe's website
                      </li>
                      <li>
                        Multiple people at her company have reported 'slowness'
                        during
                        <span className="text-black mx-1">
                          service requests
                        </span>
                      </li>
                      <li>
                        Northwind Traders currently see
                        <span className="text-black mx-1">
                          $200M in revenue
                        </span>{" "}
                        from their in-store coffee shops.
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex-1 min-w-[250px] h-20 bg-white rounded-xl shadow-md flex items-center justify-center gap-2">
                        <CircleCheckBig className="text-[2rem]" />
                        <span>
                          <p className="text-[.60rem]">Decision maker</p>
                          <h3 className="text-[.90rem] bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
                            Yes
                          </h3>
                        </span>
                      </div>
                      <div className="flex-1 min-w-[250px] h-20 bg-white rounded-xl shadow-md flex items-center justify-center gap-2">
                        <Medal className="text-[2rem]" />
                        <span>
                          <p className="text-[.60rem]">Potential deal value</p>
                          <h3 className="text-[.90rem] bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
                            $1M
                          </h3>
                        </span>
                      </div>
                      <div className="flex-1 min-w-[250px] h-20 bg-white rounded-xl shadow-md flex items-center justify-center gap-2">
                        <ArrowsUpFromLine className="text-[2rem]" />
                        <span>
                          <p className="text-[.60rem]">Intent</p>
                          <h3 className="text-[.90rem] bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
                            High
                          </h3>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 py-1 px-2 rounded flex items-center text-sm">
                        <BsFillShieldLockFill className="text-yellow-500" />
                      </span>
                      <span className="bg-gray-200 py-1 px-2 rounded text-sm gap-2 flex">
                        <p>1</p>
                        <p>D365 Sales</p>
                      </span>
                      <span className="bg-gray-200 py-1 px-2 rounded text-sm">
                        +2
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <p className="bg-gray-200 py-1 px-2 rounded text-sm">
                        Ai generated content maybe incorrect
                      </p>
                      <ThumbsUp />
                      <ThumbsDown />
                    </div>
                  </div>
                </div>
              </div>

              <div className="child5">
                <div className="gap-4 p-4 mt-4 border rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h3>About Jane</h3>
                    <ChevronDown className="text-gray-500" />
                  </div>
                  <p className="text-gray-500 mt-2">
                    Jane Reyes, the Chief Operating Officer of Northwind
                    Traders, is a dynamic leader with a proven track record in
                    optimizing operations and enhancing customer experiences.
                    Under her guidance, Northwind Traders' in-store coffee shops
                    have flourished, becoming a hallmark of quality and
                    innovation. Jane's commitment to excellence makes her an
                    ideal partner for First Coffee. She is always seekig
                    top-tier equipment to elevate her coffee shops offerings
                  </p>
                </div>
              </div>

              <div className="child6 flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
                <div className="flex gap-4">
                  <p className="text-gray-500">Show 1 0f 9</p>
                  <p className="text-gray-500">|</p>
                  <p className="text-blue-600 cursor-pointer">show all</p>
                </div>
                <div className="flex gap-1">
                  <p className="h-1 w-10 bg-blue-800 rounded-3xl"></p>
                  <p className="h-1 w-1 bg-gray-500 rounded-3xl"></p>
                  <p className="h-1 w-1 bg-gray-500 rounded-3xl"></p>
                  <p className="h-1 w-1 bg-gray-500 rounded-3xl"></p>
                  <p className="h-1 w-1 bg-gray-500 rounded-3xl"></p>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp />
                  <ThumbsDown />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
