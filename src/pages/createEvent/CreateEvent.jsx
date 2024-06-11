import React, { useState, useEffect } from "react";
import useEvents from "../../hooks/useEvents";
import "./CreateEvent.css";
import {
  ButtonSelect,
  Buttons,
  InputText,
  Inputs,
  MultiSelect,
  MultipleFileUpload,
} from "../../components/index";
import Avatars from "../../components/avatars/Avatars";
import { Button } from "antd";
import { Link } from "react-router-dom";
const CreateEvent = () => {
  const { events, setEvents } = useEvents();

  const [guestEmail, setGuestEmail] = useState("");

  // For reminders and notification time
  const duration_event = [
    {
      id: 4,
      value: "45",
    },
    ,
    {
      id: 1,
      value: "60",
    },
    {
      id: 2,
      value: "120",
    },
    {
      id: 3,
      value: "180",
    },
  ];

  const notification_time = [
    {
      id: 1,
      value: "60",
    },
    {
      id: 2,
      value: "30",
    },
    {
      id: 3,
      value: "15",
    },
    {
      id: 4,
      value: "5",
    },
  ];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // For event name
  const handleEventName = (str) => {
    setEvents((prev) => ({ ...prev, eventName: str }));
  };

  const handleDate = (e) => {
    setEvents((prev) => ({ ...prev, date: e.target.value }));
  };

  const handleTime = (e) => {
    setEvents((prev) => ({ ...prev, time: e.target.value }));
  };

  const handleDuration = (ele) => {
    setEvents((prev) => ({ ...prev, duration: ele?.value }));
  };

  const handleReminder = (ele) => {
    setEvents((prev) => ({ ...prev, reminder: ele?.value }));
  };

  const handleLocation = (str) => {
    setEvents((prev) => ({ ...prev, location: str }));
  };

  const handleGuestEmail = (str) => {
    setGuestEmail(str);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // List of required fields
    const requiredFields = [
      "eventName",
      "date",
      "time",
      "duration",
      "location",
      "userIds",
      "reminder",
    ];

    // Validate required fields
    for (const field of requiredFields) {
      if (
        !events[field] ||
        (Array.isArray(events[field]) && events[field].length === 0)
      ) {
        alert(`The field ${field} is missing or invalid`);
        return;
      }
    }

    // Construct the event object with all necessary fields
    const eventData = {
      eventName: events.eventName,
      date: events.date,
      time: events.time,
      duration: events.duration,
      location: events.location,
      userIds: events.userIds,
      reminder: events.reminder,
    };

    try {
      const response = await fetch(
        "https://eventmanagement-backend-production.up.railway.app/api/v1/event",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        }
      );

      if (response.ok) {
        alert("Event has been created");
        return;
      } else {
        alert("Failed to create event");
      }
    } catch (err) {
      alert("An error occurred while creating the event");
    }
  };

  return (
    <>
      <div className="eventContianer">
        <h1 className="heading">Create Event</h1>
        {/* Create Event Name */}

        <div className="eventNameContainer">
          <InputText
            text={"Event name"}
            placeholder={"Enter event name"}
            type={"text"}
            btntext={"Add description"}
            handleName={handleEventName}
          />
        </div>

        {/* Date Time and duration */}
        <div className="dateTimeContainer">
          <div className="date_container">
            <h5>Date</h5>
            <Inputs type={"date"} handleEvent={handleDate} />
          </div>
          <div className="time_container">
            <h5>Time</h5>
            <Inputs type={"time"} handleEvent={handleTime} />
          </div>
          <div className="duration">
            <h5>Duration</h5>

            <MultiSelect
              placeholder={"event duration"}
              time={duration_event}
              handleSelect={handleDuration}
            />
          </div>
        </div>

        {/* Location */}
        <div className="location_container">
          <InputText
            text={"location"}
            placeholder={"Enter location"}
            type={"text"}
            btntext={"Add description"}
            handleName={handleLocation}
          />
        </div>

        {/* Add guest and avatars */}
        <div className="guest_avatars">
          <InputText
            text={"Add guests"}
            placeholder={"contact@example.com"}
            type={"text"}
            btntext={"Add"}
            handleName={handleGuestEmail}
          />
          <Avatars guest={guestEmail} />
        </div>

        {/* Notification and reminder */}
        <div className="notification_reminder">
          <div className="reminder">
            <h5>Notification</h5>
            <ButtonSelect />
          </div>
          <div className="multiselect">
            <h5>Reminder</h5>
            <MultiSelect
              placeholder={"time for notification"}
              handleSelect={handleReminder}
              time={notification_time}
            />
          </div>
        </div>

        {/* File Uploads */}
        <MultipleFileUpload />

        {/* Buttons */}
        <div className="btns">
          <Buttons handleSubmit={handleSubmit} />
        </div>
        <Link to={"/"}>
          <Button>View events</Button>
        </Link>
      </div>
    </>
  );
};

export default CreateEvent;
