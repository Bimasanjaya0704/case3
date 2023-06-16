import React from "react";

const Product = () => {
  return (
    <section id="product">
      <div className="pt-36 pb-32 bg-lightsecond">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="font-semibold text-xl text-primary uppercase lg:text-3xl">
                Product UMKM
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="bg-light rounded-xl shadow-lg overflow-hidden mb-10 lg:border-4 lg:border-primary">
                <img
                  src="https://source.unsplash.com/360x200?cake"
                  alt="cake"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="font-semibold text-base text-primary mb-3 block hover:text-dark truncate"
                    >
                      Kue Rumahan
                    </a>
                  </h3>
                  <p className="font-normal text-sm text-dark mt-1 lg:text-base mb-4">
                    Produk ini merupakan produk umkm rumahan yang mempunyai cita
                    rasa dan nutrisi yang baik bagi tubuh
                  </p>
                  <a
                    href="#"
                    className="font-normal text-sm text-light rounded-lg bg-primary py-2 px-4 hover:opacity-80"
                  >
                    Info Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="bg-light rounded-xl shadow-lg overflow-hidden mb-10 lg:border-4 lg:border-primary">
                <img
                  src="https://source.unsplash.com/360x200?chips"
                  alt="chips"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="font-semibold text-base text-primary mb-3 block hover:text-dark truncate"
                    >
                      Keripik Renyah
                    </a>
                  </h3>
                  <p className="font-normal text-sm text-dark mt-1 lg:text-base mb-4">
                    Produk ini merupakan produk umkm rumahan yang mempunyai cita
                    rasa dan nutrisi yang baik bagi tubuh
                  </p>
                  <a
                    href="#"
                    className="font-normal text-sm text-light rounded-lg bg-primary py-2 px-4 hover:opacity-80"
                  >
                    Info Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="bg-light rounded-xl shadow-lg overflow-hidden mb-10 lg:border-4 lg:border-primary">
                <img
                  src="https://source.unsplash.com/360x200?meatball"
                  alt="meatball"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="font-semibold text-base text-primary mb-3 block hover:text-dark truncate"
                    >
                      Bakso Wuenakk
                    </a>
                  </h3>
                  <p className="font-normal text-sm text-dark mt-1 lg:text-base mb-4">
                    Produk ini merupakan produk umkm rumahan yang mempunyai cita
                    rasa dan nutrisi yang baik bagi tubuh
                  </p>
                  <a
                    href="#"
                    className="font-normal text-sm text-light rounded-lg bg-primary py-2 px-4 hover:opacity-80"
                  >
                    Info Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="bg-light rounded-xl shadow-lg overflow-hidden mb-10 lg:border-4 lg:border-primary">
                <img
                  src="https://source.unsplash.com/360x200?burger"
                  alt="burger"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="font-semibold text-base text-primary mb-3 block hover:text-dark truncate"
                    >
                      Burger Lokal
                    </a>
                  </h3>
                  <p className="font-normal text-sm text-dark mt-1 lg:text-base mb-4">
                    Produk ini merupakan produk umkm rumahan yang mempunyai cita
                    rasa dan nutrisi yang baik bagi tubuh
                  </p>
                  <a
                    href="#"
                    className="font-normal text-sm text-light rounded-lg bg-primary py-2 px-4 hover:opacity-80"
                  >
                    Info Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
