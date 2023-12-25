import { Head } from "@inertiajs/react";
import Navbar from "./Navbar";
import Form from "./Form";
export default function AddInfo(){
    return(
        <div className="bg-sky-100 h-screen">
            <Head title='Add-info'/>
            <Navbar/>
            <Form/>
        </div>
    )
}
