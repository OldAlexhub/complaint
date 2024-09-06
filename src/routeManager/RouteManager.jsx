import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ComplaintForm from "../routes/ComplaintForm";
import Analysis from "../routes/Analysis";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ComplaintForm />} />
          <Route path="analysis" element={<Analysis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;
