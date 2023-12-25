export default function Navbar(){
    return(
        <div className="shadow-md w-full">
            <div className="md:flex items-center justify-between bg-red-500 py-4">
                <div className="font-bold text-xl cursor-pointer flex items-center font-[Poppinds]  text-sky-100 ">
                    Najmul
                </div>
                <ul className="md:flex md:items-center mx-auto">
                    <li className="md:ml-7 text-sky-100 hover:text-sky-900 duration-500"><a href="">Home</a></li>
                    <li className="md:ml-7 text-sky-100 hover:text-sky-900 duration-500"><a href="">About</a></li>
                    <li className="md:ml-7 text-sky-100 hover:text-sky-900 duration-500"><a href="">Service</a></li>
                    <li className="md:ml-7 text-sky-100 hover:text-sky-900 duration-500"><a href={route('addInfo')}>Add Info</a></li>
                    <li className="md:ml-7 text-sky-100 hover:text-sky-900 duration-500"><a href={route('manageInfo')}>Manage Info</a></li>
                    <li className="md:ml-7 text-sky-100 hover:text-sky-900 duration-500"><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
