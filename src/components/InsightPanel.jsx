"use client";


// components/InsightPanel.js
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const InsightPanel = ({ data, userProfiles }) => {
  const {
    goalPercentage,
    targetAmount,
    amountWon,
    amountCommitted,
    bestCaseAmount,
    qualifiedAmount,
    leadsAmount,
    topLeads,
  } = data;

  const colors = {
    won: "bg-green-500",
    committed: "bg-blue-500",
    bestCase: "bg-yellow-400",
    qualified: "bg-purple-500",
    leads: "bg-pink-500",
  };

  const [selectedCard, setSelectedCard] = useState(null);
  const [profiles, setProfiles] = useState(userProfiles);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleNext = () => {
    setProfiles((prevProfiles) => {
      const [first, ...rest] = prevProfiles;
      return [...rest, first];
    });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mx-auto">
      {/* Message and Target Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-semibold">
            Hi, <span className="text-green-600">{goalPercentage}%</span> of
            your goal achieved, and the rest can be achieved by focusing on{" "}
            <span className="font-bold">{topLeads} top leads</span>.
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative h-6 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full ${colors.won}`}
              style={{ width: `${(amountWon / targetAmount) * 100}%` }}
              title="Won Amount"
            ></div>
            <div
              className={`absolute top-0 left-0 h-full ${colors.committed}`}
              style={{
                width: `${(amountCommitted / targetAmount) * 100}%`,
                marginLeft: `${(amountWon / targetAmount) * 100}%`,
              }}
              title="Committed Amount"
            ></div>
            <div
              className={`absolute top-0 left-0 h-full ${colors.bestCase}`}
              style={{
                width: `${(bestCaseAmount / targetAmount) * 100}%`,
                marginLeft: `${
                  ((amountWon + amountCommitted) / targetAmount) * 100
                }%`,
              }}
              title="Best Case Amount"
            ></div>
            <div
              className={`absolute top-0 left-0 h-full ${colors.qualified}`}
              style={{
                width: `${(qualifiedAmount / targetAmount) * 100}%`,
                marginLeft: `${
                  ((amountWon + amountCommitted + bestCaseAmount) /
                    targetAmount) *
                  100
                }%`,
              }}
              title="Qualified Amount"
            ></div>
          </div>
          <div className="text-xs text-gray-500 flex justify-between mt-2">
            <span>0</span>
            <span>{targetAmount}</span>
          </div>
        </div>
      </div>

      {/* Engagement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {["Engagement", "Top Leads", "Qualified Opportunities"].map((card) => (
          <div
            key={card}
            onClick={() => handleCardClick(card)}
            className="p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer shadow rounded-lg transition"
          >
            <h3 className="font-semibold text-lg">{card}</h3>
            <p className="text-sm text-gray-600">
              Click to view more details about {card.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>

      {/* User Profiles */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto overflow-hidden no-scrollbar">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 just bg-gray-100 p-4 rounded-lg shadow-md text-center"
            >
                <FaRegUserCircle />
              {/* <img
                src={profile.image}
                alt={profile.name}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              /> */}
              <h4 className="font-semibold text-lg">{profile.name}</h4>
              <p className="text-sm text-gray-600">{profile.achievement}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute top-1/2 border-2 border-gray-600 transform -translate-y-1/2 right-0 bg-white text-black p-2 rounded-full shadow hover:bg-gray-300 transition"
        >
          <MdArrowForwardIos />
        </button>
      </div>

      {/* Modal or Detailed View */}
      {selectedCard && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">{selectedCard}</h3>
            <p className="text-gray-700">Detailed information about {selectedCard}.</p>
            <button
              onClick={() => setSelectedCard(null)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightPanel;

