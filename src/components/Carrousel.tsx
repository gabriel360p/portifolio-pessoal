// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { SpinnerIcon } from '@phosphor-icons/react';

interface CarrouselProps {
    photosCollection?: string[];
}
export function Carrousel({ photosCollection }: CarrouselProps) {
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            autoplay={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {photosCollection?.map(photoIndex => (
                <SwiperSlide>
                    <div className={`flex justify-center items-center
                        ${(loading) || (photosCollection === undefined) ? `
                            h-40
                            md:h-80
                        `: ``}
                        `}>
                        <img onLoad={() => setLoading(false)} src={photoIndex} alt="foto-não-encontrada" className='object-cover min-w-65 max-w-110 h-auto' />
                        {(loading) || (photosCollection === undefined) ? (
                            <div className="flex w-full h-full items-center justify-center">
                                <SpinnerIcon size={30} className="text-text-primary animate-spin" />
                            </div>
                        ) : ""}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}