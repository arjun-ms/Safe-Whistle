import React from "react";
import Navbar from "./Navbar";

const Admin = () => {
  return (
    <div>
      <div className="bg-cover bg-gradient-to-br from-stone-300 from-10% via-zinc-400 via-30% to-zinc-900 to-90% min-h-screen">
        <Navbar />
        <nav className="p-4">
          <div className="container mx-auto flex justify-center items-center">
            {/* Centered h1 tag */}
            <h1 className="text-red-500 text-5xl font-bold">
              Drug Trafficking Dashboard
            </h1>
          </div>
        </nav>
        <div className="container mx-auto mt-8 p-4">
          <h2 className="text-2xl font-bold mb-4">Recent Reports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
