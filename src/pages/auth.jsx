import React from "react"
import { Link } from "react-router-dom";

const dashboard = () => {
    return (
        <div className="h-screen w-screen text-center mt-10 space-y-4">
            <h1 className="text-4xl">
                Login as
            </h1>
            <div className="grid place-items-center gap-y-2">
                <Link to ="admin/dashboard/room">
                    <button className="w-fit bg-yellow p-2 rounded-lg">
                        Admin
                    </button>
                </Link>
                <Link to = "user/addbooking">
                    <button className="w-fit bg-yellow p-2 rounded-lg">
                        User
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default dashboard