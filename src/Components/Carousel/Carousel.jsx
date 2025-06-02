import { TypeAnimation } from 'react-type-animation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Carousel = () => {
    return (
        <div className='container mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-2xl"
            >

                <SwiperSlide>
                    <div className="w-full bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
                        <img
                            className="rounded-t-lg h-96 object-cover w-full"
                            src="https://i.ibb.co.com/SDfLFFZZ/2.jpg"
                            alt=""
                        />
                        <div className="absolute bottom-5 left-5 rounded-lg text-left p-4 border-blue-700 border-2 bg-white bg-opacity-80 dark:bg-opacity-50">
                            <TypeAnimation
                                sequence={[
                                    'We produce food for Mice',
                                    1000,
                                    'We produce food for Hamsters',
                                    1000,
                                    'We produce food for Guinea Pigs',
                                    1000,
                                    'We produce food for Chinchillas',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                            <br />
                            <button
                                type="button"
                                className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
                        <img
                            className="rounded-t-lg h-96 object-cover w-full"
                            src="https://i.ibb.co.com/JRMcVRkf/3.jpg"
                            alt=""
                        />
                        <div className="absolute bottom-5 left-5 rounded-lg text-left p-4 border-blue-700 border-2 bg-white bg-opacity-80 dark:bg-opacity-50">
                            <TypeAnimation
                                sequence={[
                                    'We produce food for Mice',
                                    1000,
                                    'We produce food for Hamsters',
                                    1000,
                                    'We produce food for Guinea Pigs',
                                    1000,
                                    'We produce food for Chinchillas',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                            <br />
                            <button
                                type="button"
                                className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
                        <img
                            className="rounded-t-lg h-96 object-cover w-full"
                            src="https://i.ibb.co.com/wh4QgxHy/4.png"
                            alt=""
                        />
                        <div className="absolute bottom-5 left-5 rounded-lg text-left p-4 border-blue-700 border-2 bg-white bg-opacity-80 dark:bg-opacity-50">
                            <TypeAnimation
                                sequence={[
                                    'We produce food for Mice',
                                    1000,
                                    'We produce food for Hamsters',
                                    1000,
                                    'We produce food for Guinea Pigs',
                                    1000,
                                    'We produce food for Chinchillas',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                            <br />
                            <button
                                type="button"
                                className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
                        <img
                            className="rounded-t-lg h-96 object-cover w-full"
                            src="https://i.ibb.co.com/JRMcVRkf/3.jpg"
                            alt=""
                        />
                        <div className="absolute bottom-5 left-5 rounded-lg text-left p-4 border-blue-700 border-2 bg-white bg-opacity-80 dark:bg-opacity-50">
                            <TypeAnimation
                                sequence={[
                                    'We produce food for Mice',
                                    1000,
                                    'We produce food for Hamsters',
                                    1000,
                                    'We produce food for Guinea Pigs',
                                    1000,
                                    'We produce food for Chinchillas',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                            <br />
                            <button
                                type="button"
                                className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Carousel;