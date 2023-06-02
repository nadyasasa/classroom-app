import React from "react"
import { BsFillPlusCircleFill } from "react-icons/bs";

const UserBook = () => {
    return (
        <div className="bg-[005575] h-screen flex pt-10 px-16 text-xl">
            <div className="bg-white h-full flex flex-col gap-5 font-extrabold w-full pr-5 rounded-lg">
                <div className="flex justify-between ml-5 mt-5">
                    <div className="ml-1.5 mt-1">
                        Daftar Peminjaman Ruangan
                    </div>
                    <div className="flex justify-between">
                        <button className="bg-black text-white flex font-normal text-sm rounded-lg px-2 py-1 items-center content-center">
                            <BsFillPlusCircleFill />
                            <div className="ml-2">Tambah Peminjaman</div>
                        </button>
                    </div>
                </div>
                <div>
                    Tabel
                </div>
            </div>
        </div>
    )
}

export default UserBook