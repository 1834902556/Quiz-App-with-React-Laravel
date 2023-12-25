import { Head } from "@inertiajs/react";
import Navbar from "./Navbar";
export default function Manage(){
return(
<>
    <Head title='Manage-info' />
    <Navbar/>
    <div className="bg-sky-100 h-screen">
        <h1 className="py-5 text-center text-gray-500">This is Manage Table</h1>
     <table className="shadow-lg table-fixed border border-slate-400 bg-gray-100 w-2/3 mx-auto">
        <tr>
            <td className="border border-slate-300">SL No.</td>
            <td className="border border-slate-300">Name</td>
            <td className="border border-slate-300">Email</td>
            <td className="border border-slate-300">Phone</td>
            <td className="border border-slate-300">Image</td>
            <td className="border border-slate-300">Action</td>
        </tr>
        <tr>
            <td className="border border-slate-300">SL No.</td>
            <td className="border border-slate-300">Name</td>
            <td className="border border-slate-300">Email</td>
            <td className="border border-slate-300">Phone</td>
            <td className="border border-slate-300">Image</td>
            <td className="border border-slate-300">Action</td>
        </tr>
     </table>
    </div>
</>
)

}
