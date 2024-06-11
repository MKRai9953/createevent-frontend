import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const ShowTable = lazy(() => import("./pages/showTable/ShowTable"));
const CreateEvent = lazy(() => import("./pages/createEvent/CreateEvent"));

function App() {
  return (
    <>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ShowTable />} />
            <Route path="/createEvent" element={<CreateEvent />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
