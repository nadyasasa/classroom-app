import React from "react"
import Navbar from "../../component/navbar.jsx";

const rules = [
    {description: 'Maksimal Peminjaman dilakukan dalam 1 hari sebelum penggunaan ruangan.'},
    {description: 'Pengguna yang sudah memesan tapi tidak hadir, maka dikenakan sanksi pemblokiran sampai 3 hari. Kecuali melakukan pembatalan pemesanan maksimal 1 hari sebelum waktu jam buka pada periode dan hari yang ditentukan.'},
    {description: 'Apabila mahasiswa melakukan 2 kali pemesanan kursi dalam 1 hari yang sama dan tidak hadir pada periode 1 tanpa pembatalan, maka sistem akan membatalkan pesanan periode 2 secara otomatis.'},
    {description: 'Pemesanan tempat tidak dapat dilakukan pada waktu periode berjalan.'}
  ];
const UserBook = () => {
    const listRules = rules.map(rules => 
        <li>{rules.description}</li>
    );
    return (
        <div className="bg-blue h-screen flex py-5 px-16 text-xl">
            <div className="bg-white h-full flex flex-col gap-5 w-full pr-5 rounded-lg">
                <Navbar/>
                <div className="bg-lightblue h-fit w-fit px-10 py-3 ml-8 mr-4 text-black border-solid border-2 border-blue">
                    <h5 className="font-medium">
                        Aturan Peminjaman oleh Pengguna
                    </h5>
                    <ol 
                        style={{ listStyleType: 'decimal'}}
                        className="pt-2 text-justify">
                        {listRules}
                    </ol>           
                </div>
                <form className="grid grid-cols-2 gap-x-16 gap-y-4 pb-5 items-center bg-graylight border-solid border-2 border-gray px-10 py-3 ml-8 mr-4">
                    <div className="w-full">
                        <label>
                            Nama Peminjam
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full mt-2 bg-white border border-graydark rounded"
                            >
                        </input>
                    </div>
                    <div className="bw-full">
                        <label>
                            Email UGM
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full mt-2 bg-white border border-graydark rounded"
                            >
                        </input>
                    </div>
                    <div className="bw-full">
                        <label>
                            Keperluan
                        </label>
                        <input
                            type="text"
                            id="need"
                            className="w-full mt-2 bg-white border border-graydark rounded"
                            >
                        </input>
                    </div>
                    <div className="bw-full">
                        <label>
                            Ruangan
                        </label>
                        <input
                            type="text"
                            id="classroom"
                            className="w-full mt-2 bg-white border border-graydark rounded"
                            >
                        </input>
                    </div>
                    <div className="bw-full">
                        <label>
                            Tanggal Peminjaman
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="w-full mt-2 bg-white border border-graydark rounded"
                            >
                        </input>
                    </div>
                    <div className="bw-full">
                        <label>
                            Waktu Peminjaman
                        </label>
                        <div className="flex gap-2  items-center">
                            <input
                                type="time"
                                id="time_start"
                                className="w-full mt-2 bg-white border border-graydark rounded"
                                >
                            </input>
                        s.d
                            <input
                                type="time"
                                id="time_end"
                                className="w-full mt-2 bg-white border border-graydark rounded"
                                >
                            </input>
                        </div>
                    </div>
                </form>
                <div className="flex justify-center">
                    <button className="h-fit w-fit bg-[#F4C522] text-white font py-2 px-4 flex rounded">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserBook