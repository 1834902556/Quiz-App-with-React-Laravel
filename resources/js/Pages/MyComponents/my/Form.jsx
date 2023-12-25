export default function Form(){
    return(
     <form action="" method="post" encType="multipart/form-data">
       <div className="shadow my-10 w-full p-10 md:w-2/3 mx-auto grid grid-cols-2 gap-2">
        <div className="">
            <label htmlFor="" className="">Name:</label>
        </div>
        <div>
            <input type="text" name="name" className="h-8 w-500 form focus:ring-1 border-blue-400 rounded-md " />
        </div>
        <div className="">
            <label htmlFor="" className="">Email:</label>
        </div>
        <div>
             <input type="email" name="email" className="h-8 w-500  focus:ring-1 border-blue-400 rounded-md " />
        </div>
        <div className="">
            <label htmlFor="" className="" >Phone:</label>
        </div>
        <div>
             <input type="text" name="phone" className="h-8 w-500  focus:ring-1 border-blue-400 rounded-md " />
        </div>
        <div className="">
            <label htmlFor="" className="">Password:</label>
        </div>
        <div>
            <input type="password" name="password" className="h-8 w-500  focus:ring-1 border-blue-400 rounded-md" />
        </div>
        <div>
            <input type="file" name="image" id="" />
        </div>
        <div className="px-5 pt-3">
            <button className="w-20 p-2 h-10 rounded-lg bg-sky-500 hover:bg-green-600 hover:ring-2">Submit</button>
        </div>
      </div>
     </form>
    )
}
