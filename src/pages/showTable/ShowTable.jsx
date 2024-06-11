import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ShowTable.css";

const ShowTable = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://eventmanagement-backend-production.up.railway.app/api/v1/event"
    )
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="table_wrapper">
      <div className="header">
        <h1 className="table_heading">Event Table</h1>
        <Link to="/createEvent" className="create_event_button">
          Create Event
        </Link>
      </div>
      <div className="table_container">
        {loading ? (
          <div className="skeleton">
            {[1, 2, 3].map((item) => (
              <div className="skeleton_row" key={item}>
                <div className="skeleton_cell"></div>
                <div className="skeleton_cell"></div>
                <div className="skeleton_cell"></div>
                <div className="skeleton_cell"></div>
                <div className="skeleton_cell"></div>
                <div className="skeleton_cell"></div>
              </div>
            ))}
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Timing</th>
                <th>Guests</th>
                <th>Notification Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(events) &&
                events?.map((event, index) => (
                  <tr key={index}>
                    <td>{event.name}</td>
                    <td>{event.start_date}</td>
                    <td>{event.start_time}</td>
                    <td className="guests_column">
                      {event.Users.map((user) => user.name).join(", ") ||
                        "No guests"}
                    </td>
                    <td>{event.notification_time} minutes</td>
                    <td>{event.location}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ShowTable;
