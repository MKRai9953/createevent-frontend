import React, { useState } from "react";
import EventContext from "./EventContext";

const EventContextProvider = ({ children }) => {
  const [events, setEvents] = useState({
    eventName: "",
    date: "",
    time: "",
    duration: "",
    location: "",
    userIds: [],
    reminder: "",
    files: [], // Initialize files as an empty array
  });
  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};
export default EventContextProvider;
