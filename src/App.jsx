import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import GuestLayout from './features/user/layouts/GuestLayout';
import HomePage from './features/user/pages/HomePage';
import FindJobs from './features/user/pages/FindJobs';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<GuestLayout />}>
			<Route index element={<HomePage/>} />
			<Route path="jobs/" element={<FindJobs/>} />
		</Route>
	)
);

const App = () => {
  return (
	<RouterProvider router ={router}/>
  )
}

export default App