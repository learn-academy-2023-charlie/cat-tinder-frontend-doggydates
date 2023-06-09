import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const Home = () => {
  const items = [
    {
      src: 'https://www.knoxvilleveterinaryclinic.com/images/content/services/puppies-dogs.jpg',
      altText: 'Slide 1',
      caption: 'Basket full of Happiness',
      key: 1,
    },
    {
      src: 'https://gray-wibw-prod.cdn.arcpublishing.com/resizer/ksh7_tlGsP083uV2KHd2W-iKaig=/1200x400/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/BUIJ7TNPWFNU5EDGEYF4J7PEXE.jpg',
      altText: 'Slide 2',
      caption: 'Find a partner for your companion',
      key: 2,
    },
    {
      src: 'https://www.fetchinretrieversrescue.org/wp-content/uploads/2022/09/Golden-Header-1-1200-x-400-1200x328.jpg',
      altText: '',
      caption: 'Feel the love',
      key: 3,
    },
  ];

  const Example = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };

    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    );
  };

  return (
    <div id="home-page">
      <Example />
    </div>
  );
};

export default Home;
