import dynamic from 'next/dynamic';
import React, { Suspense, lazy } from "react";

//const RemoteDashboard = lazy(() =>  import("dashboard/static/chunks/primaryEntry.js/das"));
 const RemoteDashboard = lazy(() => import('dashboardApp/dashboard'));
const dashboard = () => {
  return (
    <body>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <RemoteDashboard /> */}
      </Suspense>
    </body>
  );
};

export default dashboard;