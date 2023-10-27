import React, { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import("dashboardApp/dashboard"));
// const Dashboard = lazy(() => import('next2/sampleComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <Dashboard />
</Suspense>

export default Dashboard;