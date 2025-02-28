"use client";
import Container from "@/components/Containter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useMessageModal } from "@/context/MessageModalContext";
import { MessageModalType } from "@/enums/MessageModalType";
import React from "react";

const Form: React.FC = () => {
  const { showModal } = useMessageModal();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showModal(
      MessageModalType.MESSAGE,
      "Formularz wysłany",
      "Otrzymaliśmy od ciebie informację"
    );
  };

  return (
    <>
      <Navbar sticky />
      <Container>
        <h1 className="text-center font-extrabold text-3xl my-6">
          Formularz kontaktowy
        </h1>
        <form className="max-w-xl mx-auto p-6" onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-sm text-white font-medium ">
              Name <span className="px-1 text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="block w-full h-11 px-5 py-2.5 text-base text-white bg-transparent border border-white rounded placeholder-gray focus:outline-none"
              placeholder="Jan Kowalski"
              required
            />
          </div>
          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-white text-sm font-medium">
              Email <span className="px-1 text-red-500">*</span>
            </label>
            <input
              type="email"
              id="name"
              className="block w-full h-11 px-5 py-2.5 text-base text-white bg-transparent border border-white rounded placeholder-gray focus:outline-none"
              placeholder="Example@gmail.com"
              required
            />
          </div>
          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-white text-sm font-medium">
              Message <span className="px-1 text-red-500">*</span>
            </label>
            <div className="flex">
              <div className="relative w-full">
                <textarea
                  className="block w-full h-40 px-4 py-2.5 text-white-900 bg-transparent border border-white-900 rounded placeholder-gray focus:outline-none resize-none"
                  placeholder="Przykładowa wiadomość"
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full h-12 btn">
            Send Message
          </button>
        </form>
        <Footer />
      </Container>
    </>
  );
};

export default Form;
