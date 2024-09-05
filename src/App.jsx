import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import GuestLayout from './features/user/layouts/GuestLayout';
import HomePage from './features/user/pages/HomePage';
import FindJobs from './features/user/pages/FindJobs';
import BrowseCompanies from './features/user/pages/BrowseCompanies';
import JobDetails from './features/user/pages/JobDetails';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<GuestLayout />}>
			<Route path="jobs/1" element={<JobDetails />} />
			<Route index element={<HomePage/>} />
			<Route path="jobs/" element={<FindJobs/>} />
			<Route path="companies/" element={<BrowseCompanies />} />
		</Route>
	)
);

const App = () => {
  return (
	<RouterProvider router ={router}/>
  )
}

export default App