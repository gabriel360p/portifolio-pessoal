interface CardWorkProps {
    number:number;
    title:string;
    description:string;
}

export function CardWork({
    number,
    title,
    description,
}: CardWorkProps) {
    return (
        <div className="
        flex flex-col mx-1 px-1 py-0.5 
        w-50
        text-black
        text-center
        items-center
        gap-2
        ">            
            <p className="flex justify-center items-center font-bold text-black w-8 h-8 rounded-full bg-text-primary">
                {number}
            </p>

           <h2 className="font-bold text-white">
                {title}
           </h2>
           <p className="text-white">
                {description}
           </p>
            
        </div>
    );
}
