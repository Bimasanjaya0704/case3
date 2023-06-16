import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-scroll";

const Beranda = () => {
  return (
    <section id="home">
      <div className="pt-8 pb-5 bg-light">
        <div className="container 2xl:px-32">
          <div className="flex flex-wrap">
            <div className="w-full self-center md:w-1/2">
              <h2 className="text-sm uppercase font-semibold text-primary lg:text-lg">
                Welcome to
              </h2>
              <h1 className="font-bold uppercase text-dark text-3xl mt-3 lg:text-5xl xl:text-6xl">
                UMKM<span className="text-primary">JAYA</span>
              </h1>
              <p className="font-medium text-dark text-sm mb-5 md:text-base xl:text-lg">
                Mari support UMKM Lokal
              </p>
              <p className=" text-dark text-justify mb-5 leading-relaxed text-sm md:text-base lg:font-normal">
                Selamat datang di UMKM Jaya! Kami dengan bangga menyajikan
                produk-produk berkualitas dan layanan terbaik untuk memenuhi
                kebutuhan Anda. Dengan komitmen kami terhadap kepuasan
                pelanggan, kami menawarkan rangkaian produk unggulan yang
                inovatif dan sesuai dengan gaya hidup modern. Dukungan Anda pada
                UMKM lokal sangat berarti bagi kami, dan kami berharap dapat
                menjadi mitra terpercaya dalam memberikan pengalaman belanja
                yang menyenangkan dan memuaskan. Terima kasih atas kepercayaan
                Anda, dan selamat menikmati perjalanan belanja di UMKM Jaya!
              </p>

              <div className="flex gap-2">
                <Link to="product" smooth={true} duration={800} className="">
                  <p className="hidden md:block w-auto text-center text-light mb-5 px-4 py-2 text-base font-semibold bg-primary rounded-full cursor-pointer">
                    Let's explore with us! 🚀
                  </p>
                </Link>

                <div className="flex items-center">
                  <div className="w-full flex text-center text-light mb-5 px-4 py-2 text-base font-semibold bg-primary rounded-full cursor-pointer">
                    <div className="flex items-center mr-2">
                      <IoLogoWhatsapp />
                    </div>
                    <a href="#">
                      <h3>Contact Me</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full self-end md:w-1/2">
              <div>
                <img
                  src="https://img.freepik.com/free-vector/shop-with-sign-open-design_23-2148544029.jpg?w=740&t=st=1686907445~exp=1686908045~hmac=ba77d404641d3bb75a2ef8140e4af777d1b0c3e56dd750f1226c683bb56f57c4"
                  alt="imgberanda"
                  className="max-w-full mx-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
