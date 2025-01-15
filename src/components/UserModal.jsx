"use client";

import React from "react";
import { Dialog, Transition } from "@headlessui/react";

/**
 * UserModal Component
 * - Displays detailed user information in a modal popup.
 * - Uses TailwindCSS for styling and HeadlessUI for accessibility features.
 *
 * Props:
 * - isOpen: Boolean to control the modal visibility.
 * - onClose: Function to close the modal.
 * - user: Object containing user details.
 */
export default function UserModal({ isOpen, onClose, user }) {
  return (
    // Modal Transition Wrapper
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-30" />

        {/* Modal Content */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* Modal Panel */}
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* Modal Title */}
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                  {user?.name}
                </Dialog.Title>

                {/* Modal Content */}
                <div className="mt-2">
                  <p>
                    <strong>Topic:</strong> {user?.topic}
                  </p>
                  <p>
                    <strong>Status:</strong> {user?.status}
                  </p>
                  <p>
                    <strong>Created on:</strong> {user?.createdOn}
                  </p>
                </div>

                {/* Close Button */}
                <div className="mt-4">
                  <button
                    onClick={onClose}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
