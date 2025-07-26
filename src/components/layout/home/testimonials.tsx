"use client";

import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export default function Testimonials() {
  const autoScrollOpt = AutoScroll({
    playOnInit: true,
    speed: 1,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
    startDelay: 500,
  });
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from satisfied customers
          </p>
        </div>

        <Carousel
          className="relative"
          plugins={[autoScrollOpt]}
          opts={{ loop: true }}
        >
          <CarouselContent className="p-10 space-x-8">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg md:max-w-4/10"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  &quot;{testimonial.review}&quot;
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </Carousel>
      </div>
    </section>
  );
}
