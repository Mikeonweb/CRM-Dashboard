"use client";

// components/InsightPanel.js
import React, { useState } from "react";
import { ChevronDown, ArrowUpRight, MoreVertical, X } from "lucide-react";
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
    <div className="w-full max-w-7xl p-4 bg-white rounded-3xl">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="userprogress flex items-center justify-between space-x-4">
          {/* User Profile Section */}
          <div className="flex items-center space-x-2 flex-1">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg"></div>
            <div className="text-sm">
              <span className="text-gray-700">Hi Mona, </span>
              <span>
                {progress}% of goal achieved and rest can be achieved by
                focusing on 20 top leads.
              </span>
            </div>
          </div>

          {/* Progress Bar and Details Section */}
          <div className="flex flex-col items-start flex-1">
            {/* Progress Details */}
            <div className="flex items-center mt-2 pl-2 space-x-3 text-xs text-gray-600">
              <div>1 month until Q4 ends</div>
              <div className="flex items-center space-x-1">
                <span className="font-medium">Target: ${target} million</span>
                <span>{progress}% of target achieved</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="progressbar flex space-x-1 w-full">
              <div
                style={{ width: "18%" }}
                className="h-1.5 bg-green-500 rounded-l-full"
              ></div>
              <div style={{ width: "15%" }} className="h-1.5 bg-blue-500"></div>
              <div
                style={{ width: "17%" }}
                className="h-1.5 bg-purple-400"
              ></div>
              <div
                style={{ width: "18%" }}
                className="h-1.5 bg-orange-300"
              ></div>
              <div
                style={{ width: "32%" }}
                className="h-1.5 bg-gray-200 rounded-r-full"
              ></div>
            </div>

            {/* Legend */}
            <div className="legend pl-2 flex flex-wrap justify-end text-xs space-x-2 mt-1 text-gray-600">
              <span className="cursor-pointer hover:text-gray-900">
                Won $18m
              </span>
              <span className="cursor-pointer hover:text-gray-900">
                Committed $8m
              </span>
              <span className="cursor-pointer hover:text-gray-900">
                Best case $7m
              </span>
              <span className="cursor-pointer hover:text-gray-900">
                Qualified $3m
              </span>
              <span className="cursor-pointer hover:text-gray-900">
                Leads $75m
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-8 pb-6">
          {/* Main Content */}
          <div className="w-[70%] text-sm">
            <p className="text-gray-700 mb-4">
              Copilot has pinpointed 20 key leads that show strong purchase
              intent and are actively engaging. These leads need your focus.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-4 border rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => handleLeadClick(lead)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <h3 className="font-medium">{lead.name}</h3>
                        <p className="text-sm text-gray-500">
                          {lead.title} • {lead.company}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-blue-600" />
                  </div>

                  <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                    <h4 className="font-medium">{lead.action}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {lead.description}
                    </p>
                  </div>

                  <div className="mt-3 flex space-x-3">
                    {lead.tags.map((tag, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span>•</span>}
                        <span className="text-sm text-gray-600">{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Activities */}
          <div className="w-[30%] text-sm border border-l-gray-200 border-r-0 border-t-0 border-b-0 pl-4">
            <h3 className="font-medium text-sm mb-4">Other key activities</h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  onClick={() => handleLeadClick(activity)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    <div>
                      <h4 className="font-medium">{activity.name}</h4>
                      <p className="text-sm text-gray-500">
                        {activity.company} • {activity.value} •{" "}
                        {activity.timeframe}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-blue-600" />
                </div>
              ))}
            </div>

            <p className="text-blue-600 pt-12">show all key activities</p>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <Dialog open={isDetailsModalOpen} onOpenChange={setIsDetailsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {selectedLead?.name || selectedLead?.company}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4">
            {selectedLead && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Pipeline Value
                    </h4>
                    <p className="mt-1">{selectedLead.details?.pipeline}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Last Contact
                    </h4>
                    <p className="mt-1">{selectedLead.details?.lastContact}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Next Steps
                    </h4>
                    <p className="mt-1">{selectedLead.details?.nextSteps}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Status
                    </h4>
                    <p className="mt-1">{selectedLead.details?.status}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Notes</h4>
                  <p className="mt-1 text-sm">{selectedLead.details?.notes}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
