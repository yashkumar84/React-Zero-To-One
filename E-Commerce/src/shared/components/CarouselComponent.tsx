import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComponent = () => {
  return (
    <div className="max-w-screen">
      <Carousel className="max-w-screen">
        <CarouselContent>
          <CarouselItem>Hello</CarouselItem>
          <CarouselItem>2 Component</CarouselItem>
          <CarouselItem>3 Component</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
