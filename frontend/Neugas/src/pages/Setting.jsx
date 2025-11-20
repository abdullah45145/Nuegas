import React, { useEffect, useRef, useState } from "react";
import { Bell, ChevronDown } from "lucide-react";

/**
 * Full Settings page with Option C2 - Icon based dropdowns and all buttons working.
 * Requires Tailwind CSS in the project.
 */

const LANGUAGES = [
  { id: "en", label: "English (Default)", icon: "🌐" },
  { id: "es", label: "Spanish", icon: "🇪🇸" },
  { id: "ur", label: "Urdu", icon: "🇵🇰" },
  { id: "fr", label: "French", icon: "🇫🇷" },
];

const TIMEZONES = [
  { id: "gmt", label: "GMT (UTC+0)", icon: "🕰️" },
  { id: "pak", label: "PKT (UTC+5)", icon: "🇵🇰" },
  { id: "est", label: "EST (UTC-5)", icon: "🇺🇸" },
  { id: "ist", label: "IST (UTC+5:30)", icon: "🇮🇳" },
];

const initialNotificationState = {
  message: true,
  taskUpdate: false,
  deadline: true,
  mentor: false,
};

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  // General tab state
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [timezone, setTimezone] = useState(TIMEZONES[0]);
  const [timeFormat, setTimeFormat] = useState("24"); // "24" or "12"

  // Notification tab state
  const [notifications, setNotifications] = useState(initialNotificationState);

  // UI behavior
  const [savedMessage, setSavedMessage] = useState("");
  const saveTimeoutRef = useRef(null);

  // Handlers
  const handleSave = () => {
    // pretend to save — real app should call API here
    const payload = {
      language: language.id,
      timezone: timezone.id,
      timeFormat,
      notifications,
    };

    // For demo we print to console and show a small saved toast
    console.log("Saved settings:", payload);
    setSavedMessage("Settings saved");
    clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => setSavedMessage(""), 2500);
  };

  useEffect(() => {
    return () => clearTimeout(saveTimeoutRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8fb] p-6">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium text-gray-900">Settings</h1>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              aria-label="Notifications"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
            >
              <Bell className="text-[#4F6BFF]" size={18} />
            </button>
            {/* Red badge */}
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
          </div>

          <img
            src="https://i.pravatar.cc/48"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover border"
          />
        </div>
      </div>

      {/* Card */}
      <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
        {/* Tabs */}
        <div className="flex items-center border-b pb-2">
          <TabButton
            name="general"
            active={activeTab === "general"}
            onClick={() => setActiveTab("general")}
            label="General"
          />
          <TabButton 
            className='cursor-pointer bg-red-500'
            name="notification"
            active={activeTab === "notification"}
            onClick={() => setActiveTab("notification")}
            label="Notification"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          {activeTab === "general" ? (
            <GeneralTab
              language={language}
              setLanguage={setLanguage}
              timezone={timezone}
              setTimezone={setTimezone}
              timeFormat={timeFormat}
              setTimeFormat={setTimeFormat}
              onSave={handleSave}
              savedMessage={savedMessage}
            />
          ) : (
            <NotificationTab
              notifications={notifications}
              setNotifications={setNotifications}
              onSave={handleSave}
              savedMessage={savedMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Tab Button ---------- */
function TabButton({ name, label, active, onClick }) {
  return (
    <button
      className={`mr-6 pb-2 text-sm ${
        active ? "text-[#4F6BFF] border-b-2 border-[#4F6BFF]" : "text-gray-500"
      }`}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </button>
  );
}

/* ---------- General Tab ---------- */
function GeneralTab({
  language,
  setLanguage,
  timezone,
  setTimezone,
  timeFormat,
  setTimeFormat,
  onSave,
  savedMessage,
}) {
  return (
    <div className="space-y-6 max-w-3xl">
      {/* Language */}
      <div>
        <label className="block text-sm text-gray-700 mb-2">Language</label>
        <IconDropdown
          value={language}
          onChange={setLanguage}
          options={LANGUAGES}
          placeholder="Select language"
        />
      </div>

      {/* Timezone */}
      <div>
        <label className="block text-sm text-gray-700 mb-2">Timezone</label>
        <IconDropdown
          value={timezone}
          onChange={setTimezone}
          options={TIMEZONES}
          placeholder="Select timezone"
        />
      </div>

      {/* Time Format */}
      <div>
        <label className="block text-sm text-gray-700 mb-2">Timezone</label>
        <div className="flex items-center gap-3">
          <RadioButton
            label="24 Hours"
            active={timeFormat === "24"}
            onClick={() => setTimeFormat("24")}
          />
          <RadioButton
            label="12 Hours"
            active={timeFormat === "12"}
            onClick={() => setTimeFormat("12")}
          />
        </div>
      </div>

      {/* Save */}
      <div className="pt-4">
        <button
          onClick={onSave}
          className="px-4 py-2 rounded-lg bg-[#4F6BFF] text-white font-medium hover:bg-[#3b56d6] transition"
        >
          Save Changes
        </button>

        {savedMessage && (
          <span className="ml-4 text-sm text-green-600 font-medium">
            {savedMessage}
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------- Notification Tab ---------- */
function NotificationTab({ notifications, setNotifications, onSave, savedMessage }) {
  const toggle = (key) =>
    setNotifications((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div className="space-y-6 max-w-3xl">
      <ToggleRow
        label="Message"
        enabled={notifications.message}
        onToggle={() => toggle("message")}
      />
      <ToggleRow
        label="Task Update"
        enabled={notifications.taskUpdate}
        onToggle={() => toggle("taskUpdate")}
      />
      <ToggleRow
        label="Task Deadline"
        enabled={notifications.deadline}
        onToggle={() => toggle("deadline")}
      />
      <ToggleRow
        label="Mentor Help"
        enabled={notifications.mentor}
        onToggle={() => toggle("mentor")}
      />

      <div className="pt-4">
        <button
          onClick={onSave}
          className="px-4 py-2 rounded-lg bg-[#4F6BFF] text-white font-medium hover:bg-[#3b56d6] transition"
        >
          Save Changes
        </button>

        {savedMessage && (
          <span className="ml-4 text-sm text-green-600 font-medium">
            {savedMessage}
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------- Radio Button (24/12) ---------- */
function RadioButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-3 h-10 rounded-lg border ${
        active ? "border-[#4F6BFF] bg-[#eef2ff] text-[#2b3dbb]" : "border-gray-200 text-gray-600"
      }`}
      aria-pressed={active}
    >
      <span
        className={`w-3 h-3 rounded-full border ${
          active ? "bg-[#4F6BFF] border-[#4F6BFF]" : "border-gray-300"
        }`}
      />
      <span className="text-sm">{label}</span>
    </button>
  );
}

/* ---------- Toggle Row ---------- */
function ToggleRow({ label, enabled, onToggle }) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onToggle}
        aria-pressed={enabled}
        className={`w-10 h-5 rounded-full p-1 flex items-center transition ${
          enabled ? "bg-[#4F6BFF]" : "bg-gray-200"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>

      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}

/* ---------- Icon Dropdown (C2) ---------- */
function IconDropdown({ value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-[260px] h-10 bg-white border border-gray-200 rounded-md px-3 flex items-center justify-between text-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{value?.icon ?? "🌐"}</span>
          <span className="text-sm text-gray-700">{value?.label ?? placeholder}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <ChevronDown size={16} />
        </div>
      </button>

      {/* Dropdown list */}
      {open && (
        <ul
          role="listbox"
          className="absolute z-30 mt-2 w-[260px] bg-white border border-gray-200 rounded-md shadow-lg divide-y"
        >
          {options.map((opt) => {
            const selected = opt.id === value.id;
            return (
              <li
                key={opt.id}
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 ${
                  selected ? "bg-gray-50" : ""
                }`}
              >
                <span className="text-lg">{opt.icon}</span>
                <span className="flex-1 text-sm text-gray-700">{opt.label}</span>
                {selected && <span className="text-sm text-[#4F6BFF] font-medium">✓</span>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
