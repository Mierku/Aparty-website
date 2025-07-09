"use client";

import { useEffect } from "react";

// Make sure to expose this env var to the client by prefixing it with NEXT_PUBLIC_
const laserExtensionId = process.env.NEXT_PUBLIC_EXTENSION_ID;

/**
 * You need to implement this function based on your logic.
 * @param targetData The data received from the chrome extension.
 * @returns boolean indicating if the target is in range.
 */
const targetInRange = (targetData: unknown): boolean => {
  console.log("Received target data from extension:", targetData);
  // Placeholder logic, please implement your own.
  return true;
};

const ChromeExtensionHandler = () => {
  useEffect(() => {
    // Check if the code is running in a browser with the chrome extension APIs
    if (
      typeof window === "undefined" ||
      !window.chrome ||
      !chrome.runtime ||
      !chrome.runtime.sendMessage
    ) {
      return;
    }

    if (!laserExtensionId) {
      console.warn(
        "Chrome Extension ID is not configured. Please set NEXT_PUBLIC_EXTENSION_ID in your environment variables.",
      );
      return;
    }

    // For a minimal request:
    chrome.runtime.sendMessage(
      laserExtensionId,
      { getTargetData: true },
      function (response) {
        if (chrome.runtime.lastError) {
          console.error(
            "Error communicating with extension:",
            chrome.runtime.lastError.message,
          );
          return;
        }

        if (
          response &&
          response.targetData &&
          targetInRange(response.targetData)
        ) {
          chrome.runtime.sendMessage(
            laserExtensionId,
            { activateLasers: true },
            () => {
              if (chrome.runtime.lastError) {
                console.error(
                  "Error activating lasers:",
                  chrome.runtime.lastError.message,
                );
              }
            },
          );
        }
      },
    );
  }, []);

  return null; // This component does not render anything
};

export default ChromeExtensionHandler;
