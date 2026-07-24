// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
// import { SpinnerIcon } from '@phosphor-icons/react';
import type { Project } from '../../types/ProjectsType';
import { CardProject } from '../CardProject';

interface ProjectCarrouselProps {
    projects: Project[];
    onclick?: React.MouseEventHandler<HTMLImageElement>;
}
export function ProjectCarrousel({ onclick, projects }: ProjectCarrouselProps) {
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            modules={[Autoplay, Pagination]}
            autoplay={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {projects?.map(project => (
                <SwiperSlide>
                    <CardProject key={project.id} project={project} onClick={onclick} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}