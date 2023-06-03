import React, { useState } from 'react';
//import { Icon } from "@iconify/react"


function InputForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e, index) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggleModal(); 
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="font-bold justify-center flex flex-row h-10 w-52 bg-[#F4C522] text-white shadow-md rounded-2xl flex justify-center items-center"
        //<Icon icon="ic:baseline-plus" className="text-white text-h-lg text-neutral-100"></Icon>
        onClick={toggleModal}
      >
        + Tambahkan Ruangan
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10"
            onClick={toggleModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white rounded-lg p-8 max-w-md h-100 overflow-y-auto">
              <h2 className="text-4xl mb-5 font-bold text-center text-beige-700">Tambahkan Ruangan</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Nama Ruangan:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block mb-1">
                    Lantai:
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  >
                    <option value="">Pilih Lantai</option>
                    <option value="Location A">Lantai 1</option>
                    <option value="Location B">Lantai 2</option>
                    <option value="Location C">Lantai 3</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block mb-1">
                    Deskripsi:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                  ></textarea>
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-[#F4C522] hover:bg-[#FECC1C] text-white font py-2 px-4 flex-1 rounded"
                  >
                    Tambah
                  </button>
                  <button
                    className=" ring-cyan-500 hover:bg-[#FAFAFA] text-neutral-500 font py-2 px-4 flex-1 rounded-md outline-none border rounded"
                    onClick={toggleModal}
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default InputForm;
