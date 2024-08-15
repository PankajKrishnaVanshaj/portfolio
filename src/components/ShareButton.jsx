"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  PinterestShareButton,
  RedditShareButton,
  PocketShareButton,
  EmailShareButton,
  VKShareButton,
  TumblrShareButton,
  FacebookMessengerShareButton,
} from "react-share";
import { BiShareAlt } from "react-icons/bi";
import {
  FaFacebook,
  FaTelegram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
  FaCopy,
  FaPinterest,
  FaReddit,
  FaGetPocket,
  FaVk,
  FaFacebookMessenger,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaOdnoklassnikiSquare, FaTumblrSquare } from "react-icons/fa";

const ShareDialog = ({ url, onClose }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy URL. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-auto">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative flex flex-col items-center gap-4 p-4 bg-white border rounded shadow-lg z-60">
        <div className="flex items-center gap-4">
          <FacebookShareButton
            url={url}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            <FaFacebook size={24} />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaXTwitter size={24} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaWhatsapp size={24} />
          </WhatsappShareButton>
          <TelegramShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaTelegram size={24} />
          </TelegramShareButton>
          <PinterestShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaPinterest size={24} />
          </PinterestShareButton>
          <RedditShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaReddit size={24} />
          </RedditShareButton>
          <PocketShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaGetPocket size={24} />
          </PocketShareButton>
          <EmailShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <MdEmail size={24} />
          </EmailShareButton>
          <VKShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaVk size={24} />
          </VKShareButton>
          <TumblrShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaTumblrSquare size={24} />
          </TumblrShareButton>
          <FacebookMessengerShareButton
            url={url}
            className="hover:text-blue-700 transition-colors duration-200"
          >
            <FaFacebookMessenger size={24} />
          </FacebookMessengerShareButton>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
        >
          <span className="bg-white px-3 py-1 rounded-full">{url}</span>
          <FaCopy size={24} />
          <span>Copy URL</span>
        </button>
      </div>
    </div>
  );
};

const ShareButton = ({ url, size }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shareButtonRef = useRef(null);

  const toggleShareButton = () => {
    setIsOpen(!isOpen);
  };

  const closeShareButton = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        shareButtonRef.current &&
        !shareButtonRef.current.contains(event.target)
      ) {
        closeShareButton();
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        closeShareButton();
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={shareButtonRef}>
      <button
        onClick={toggleShareButton}
        className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 shadow-md shadow-primary"
      >
        <BiShareAlt size={size} />
      </button>
      {isOpen && <ShareDialog url={url} onClose={closeShareButton} />}
    </div>
  );
};

export default ShareButton;
