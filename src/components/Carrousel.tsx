// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

interface CarrouselProps {
    photosCollection?: string[];
}
export function Carrousel({ photosCollection }: CarrouselProps) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            autoplay={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {photosCollection?.map(photo => (
                <SwiperSlide>
                    <div className='flex justify-center items-center'>
                        <img src={photo} alt="foto" className='object-cover min-w-65 max-w-120 h-auto' />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}