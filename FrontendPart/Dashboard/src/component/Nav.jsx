import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="bg-gray-800  text-white p-4 block h-full w-2/12">
            <Link to='/' className="p-5 rounded-2xl  border-2 block text-center text-2xl font-extrabold mt-4 active:bg-blue-500">Home</Link>
            <Link to='/dashboard'className="p-5 rounded-2xl  border-2 block text-center text-2xl font-extrabold mt-4 active:bg-blue-500">Dashboard</Link>
         



        </div>
    )
}

export default Nav