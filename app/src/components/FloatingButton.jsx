import React, { useState } from "react";
import "./FloatingButton.css";
import { Mail, WhatsApp, Phone, Close, MailOutline } from "@mui/icons-material";

const FloatingButton = () => {
  // Use state to control whether the action buttons are visible
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // The primary button that reveals the rest (or acts as the main action when hidden)
  const mainButton = { name: "Contact", icon: <MailOutline />, url: "#" };

  // The secondary actions, including the Cancel/Close button
  const actions = [
    // 1. Cancel/Close Button
    {
      name: "Cancel",
      icon: <Close />,
      action: toggleVisibility,
      isCancel: true,
    },
    // 2. Functional Buttons
    { name: "Call Us", icon: <Phone />, url: "tel:+918121682010" },
    { name: "WhatsApp", icon: <WhatsApp />, url: "https://wa.me/8121682010" },
    {
      name: "Mail Us",
      icon: <Mail />,
      url: "mailto:solacewellnessspa71@gmail.com",
    },
  ];

  return (
    <div className="floating-container">
      {/* 1. Action Buttons (Only render if isVisible is true) */}
      {isVisible ? (
        <div className="fab-actions">
          {actions.map((action, index) => (
            <a
              key={action.name}
              // If it's a URL action, use href. If it's a toggle, use onClick.
              href={action.url || undefined}
              target={action.url && action.url !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`fab-action-button ${
                action.isCancel ? "cancel-button" : ""
              }`}
              onClick={action.action} // Handles the toggleVisibility function for Cancel
            >
              <span className="fab-action-label">{action.name}</span>
              {action.icon}
            </a>
          ))}
        </div>
      ) : (
        /* 2. Primary Button (Only render if isVisible is false) */
        <a
          href={mainButton.url}
          className="fab-main-toggle"
          onClick={toggleVisibility}
        >
          {mainButton.icon}
        </a>
      )}
    </div>
  );
};

export default FloatingButton;
