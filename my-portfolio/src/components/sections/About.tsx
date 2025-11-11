const About = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 dark:bg-[#000000] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-serif mb-8 sm:mb-12 text-[#000000] dark:text-[#FFFFFF] text-center sm:text-left">
          About me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-gray-900 dark:text-gray-100 text-center sm:text-left">
              I'm a curious builder who loves exploring how design and code
              shape human experiences.
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-400 leading-relaxed">
                I'm a third-year computer science undergrad driven by curiosity
                and the blend of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  design, logic, and innovation.{" "}
                </span>
                I love exploring how code and creativity can shape meaningful
                digital experiences.
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-400 leading-relaxed">
                My focus lies in{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  full-stack development
                </span>
                , where I enjoy turning ideas into interactive, functional
                products. Along with growing expertise in{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  DevOps
                </span>{" "}
                and{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Data Analytics.
                </span>
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-400 leading-relaxed">
                My goal? To keep building tools, products, and systems that
                connect creativity with impact while constantly learning and
                experimenting along the way.
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-400 leading-relaxed">
                Beyond the screen, I'm passionate about automobiles and tech
                products the perfect mix of engineering precision and design
                imagination. They remind me that every innovation starts with
                curiosity.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-6 sm:mb-0">
            <div className="relative group w-full max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Decorative background element */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-[#ED3500] via-[#FA812F] to-[#FAB12F] rounded-xl sm:rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-lg sm:blur-xl"></div>

              {/* Image container */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl">
                <img
                  src="/My-img1.jpeg"
                  alt="Kisna Kanti"
                  className="w-full h-auto object-cover rounded-xl sm:rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Optional: Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;