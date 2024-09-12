import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import GuestLayout from './features/user/layouts/GuestLayout';
import HomePage from './features/user/pages/HomePage';
import FindJobs from './features/user/pages/FindJobs';
import BrowseCompanies from './features/user/pages/BrowseCompanies';
import JobDetails from './features/user/pages/JobDetails';
import CompanyDetails from './features/user/pages/CompanyDetails';
import LoginPage from './features/user/pages/LoginPage';
import RegisterPage from './features/user/pages/RegisterPage';
import LoginRegisterLayout from './features/user/layouts/LoginRegisterLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<GuestLayout />}>
				<Route path="jobs/:id" element={<JobDetails />} />
				<Route path="companies/:id" element={<CompanyDetails />} />
				<Route index element={<HomePage/>} />
				<Route path="jobs/" element={<FindJobs/>} />
				<Route path="companies/" element={<BrowseCompanies />} />
			</Route>
			<Route path="/login" element={<LoginRegisterLayout />} >
				<Route index element={<LoginPage/>} />
			</Route>
			<Route path="/register" element={<LoginRegisterLayout />} >
				<Route index element={<RegisterPage/>} />
			</Route>
		</>
	)
);

const App = () => {
  return (
	<RouterProvider router ={router}/>
  )
}

export default App