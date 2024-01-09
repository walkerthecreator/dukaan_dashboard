import { ArrowUpDown, Download, MessageSquareText, Search, Triangle } from "lucide-react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex w-screen min-h-screen max-h-fit items-start bg-white/40">
        <Sidebar />
        <div className="w-full bg-zinc-50 min-h-fit max-h-screen border overflow-auto" id="aside">

          <div className="flex border sticky top-0 z-10 items-center bg-white text-black px-8 py-3 w-full justify-between">

            <div className="flex items-center">
              <p className="text-sm pe-3">Payments </p>
              <p className="text-xs ms-8 flex gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5730_2522)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z" fill="#4D4D4D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D"></path></g><defs><clipPath id="clip0_5730_2522"><rect width="14" height="14" fill="white"></rect></clipPath></defs></svg>
                  <span>How it works</span>
                </p>
            </div>

            <span className="flex gap-2 w-[400px] items-center border bg-[#F2F2F2]  p-2 px-3 rounded-md">
              <Search size={18} color="#9ca3af"/>
              <input 
              type="text" 
              placeholder="Search features, tutorials, etc."
              className="focus:outline-none bg-[#F2F2F2] rounded-md"/>
            </span>

            <div className="w-24 flex justify-around items-center">
              <span className="bg-[#F2F2F2] p-2 rounded-full ">
                <MessageSquareText size={20} />
              </span>
              <span className="bg-[#f2f2f2] p-2 rounded-full rotate-180">
                <Triangle size={20} />
              </span>
            </div>
          </div>

          <div className="m-8 ">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium">Overview</h1>
              <select className="border bg-white p-1 px-2 rounded text-sm">
                 <option value="Last Month"> Last Month</option>
              </select>
            </div>

            <div className="flex items-center gap-2 ">
              <div className=" rounded-md mt-6 p-5 grow bg-white drop-shadow" >
                <span>Online orders</span>
                <h2 className="text-3xl mt-4 font-semibold ">231</h2>
              </div>

              <div className=" rounded-md grow mt-6 p-5 drop-shadow bg-white ms-2">
                <span>Amount Recieved </span>
                <h2 className="text-3xl mt-4 font-semibold ">₹23,92,312.19</h2>
              </div>
            </div>

          </div>


          <div className="m-8">
          <h1 className="text-xl font-medium">Transactions | This Month </h1>

        <div className="w-full bg-white drop-shadow-md p-3 mt-6">

        <div className="flex items-center justify-between">

            <span className="flex gap-2 items-center border p-2 px-3 rounded-md">
              <Search size={18} color="#9ca3af"/>
              <input type="text" placeholder="Search by order ID..." className="focus:outline-none"/>
            </span>

            <div className="flex gap-2">
              <button className="flex gap-1 items-center border p-2 px-3 rounded-md">Sort<ArrowUpDown size={15} /></button>
              <button className="border p-2 px-3 rounded-md"><Download /></button>
            </div>
        </div>

          <table className="bg-white mt-3 w-full text-left border-collapse">
              <thead className="bg-zinc-100 text-zinc-500 text-sm rounded">
                <th className="p-2 font-medium">Order ID</th>
                <th className="p-2 font-medium">Order Date</th>
                <th className="p-2 text-right font-medium">Order amount</th>
                <th className="p-2 text-right font-medium">Transaction fees</th>
              </thead>
              <tbody>
                {
                  [...new Array(20)].map((item , index)=>{
                    return   <tr className="border-b-2">
                    <td className="p-2 py-3 text-blue-800">#281209</td>
                    <td className="p-2">July, 2023</td>
                    <td className="p-2 text-right">₹1278.23</td>
                    <td className="p-2 text-right">₹22</td>
              </tr>
                  })
                }


              
              </tbody>
          </table >
        </div>

        </div>

        </div>
      </div>
    </>
  );
}

export default App;
