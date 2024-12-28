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
    <div className="w-full max-w-7xl p-4 bg-white rounded-3xl border border-gray-200">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg"></div>
            <div>
              <span className="text-gray-700">Hi Mona, </span>
              <span>
                {progress}% of goal achieved and rest can be achieved by
                focusing on 20 top leads.
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">1 month until Q4 ends</div>
            <div className="flex items-center">
              <span className="font-medium">Target: ${target} million</span>
              <span className="ml-4 text-gray-500">
                {progress}% of target achieved
              </span>
            </div>
            <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex space-x-1">
          <div
            style={{ width: "18%" }}
            className="h-2 bg-green-500 rounded-l-full"
          ></div>
          <div style={{ width: "15%" }} className="h-2 bg-blue-500"></div>
          <div style={{ width: "17%" }} className="h-2 bg-purple-400"></div>
          <div style={{ width: "18%" }} className="h-2 bg-orange-300"></div>
          <div
            style={{ width: "32%" }}
            className="h-2 bg-gray-200 rounded-r-full"
          ></div>
        </div>

        {/* Legend */}
        <div className="flex text-sm space-x-4 text-gray-600">
          <span className="cursor-pointer hover:text-gray-900">Won $18m</span>
          <span className="cursor-pointer hover:text-gray-900">
            Committed $8m
          </span>
          <span className="cursor-pointer hover:text-gray-900">
            Best case $7m
          </span>
          <span className="cursor-pointer hover:text-gray-900">
            Qualified $3m
          </span>
          <span className="cursor-pointer hover:text-gray-900">Leads $75m</span>
        </div>

        {/* Main Content */}
        <div>
          <p className="text-gray-700 mb-4">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads need your focus.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
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

                <div className="mt-4 p-4 bg-white rounded-lg">
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
        <div className="mt-6">
          <h3 className="font-medium mb-4">Other key activities</h3>
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
