import { useContext } from "react";
import EventContext from "../context/EventContext";

const useEvents = () => {
  return useContext(EventContext);
};

export default useEvents;
