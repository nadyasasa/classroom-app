import React from "react"
import Navbar from "../../component/navbaradmin.jsx";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const dashboard = () => {
    return (
        <div className="bg-blue h-screen flex py-5 px-16">
            <div className="bg-white h-full w-full gap-5 w-full pr-5 rounded-lg">
                <Navbar/>
                <div className="h-full w-full">
                    <div className="py-3 mt-8 mr-4 ml-8">
                        <h5 className="font-medium mb-4 text-2xl text-center">
                            DAFTAR PENGAJUAN PEMINJAMAN RUANGAN
                        </h5>
                        <table className="table-fixed border-collapse border border-gray w-full h-full">
                            <thead>
                                <tr className="w-72 bg-yellow">
                                    <th className="border border-gray w-1/6">Nama</th>
                                    <th className="border border-gray w-1/6">Email</th>
                                    <th className="border border-gray w-1/6">Ruangan</th>
                                    <th className="border border-gray w-1/6">Waktu</th>
                                    <th className="border border-gray w-1/6">Keperluan</th>
                                    <th className="border border-gray w-1/6">Aksi</th>
                                </tr>
                            </thead>
                            <tbody> 
                                <tr>
                                    <td className="border border-gray">P</td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray flex items-center"><AiFillDelete/><AiFillEdit/></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray">P</td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray">P</td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray">P</td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray">P</td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray">P</td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray">P</td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                    <td className="border border-gray"></td>
                                </tr>
                            </tbody>
                        </table>        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard