import { useState } from "react";

function App() {
  const search = () => {
    console.log("Search clicked");
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 flex flex-col">

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 rounded-xl shadow-md mb-6 text-center">
        <h2 className="text-2xl font-bold">TATA Employee Management</h2>
      </header>

      {/* Center Container */}
      <div className="flex-grow flex items-center justify-center">

        {/* Form Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Add Employee</h3>

          <div className="space-y-4">

            <div>
              <label className="block mb-1 font-medium">Employee Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Employee Name"
                className="w-full border p-2 rounded-lg focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Age</label>
              <input
                type="number"
                id="age"
                placeholder="Enter Age"
                className="w-full border p-2 rounded-lg focus:outline-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Department</label>
              <input
                type="text"
                id="department"
                placeholder="Enter Department"
                className="w-full border p-2 rounded-lg mb-2"
              />

              <select
                id="selectdepartment"
                className="w-full border p-2 rounded-lg"
              >
                <option value="">-- Select Department --</option>
                <option value="Software Development">Software Development</option>
                <option value="Business Analyst">Business Analyst</option>
                <option value="Project Management">Project Management</option>
                <option value="Manufacturing">Manufacturing</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Salary</label>
              <input
                type="text"
                id="salary"
                placeholder="Enter Salary"
                className="w-full border p-2 rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Join Date</label>
              <input
                type="date"
                id="Join"
                className="w-full border p-2 rounded-lg"
              />
            </div>

            <button
              id="saveBtn"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
            >
              Save Employee
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;