import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-sm blur-effect shadow-sm transition-all hover:shadow-2xl flex flex-col h-[450px] max-w-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="relative w-full h-60 md:h-72 lg:h-80 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-lg font-semibold text-primary">
            {title}
          </h3>
        </div>
        <p className="mt-1 text-sm font-normal text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
