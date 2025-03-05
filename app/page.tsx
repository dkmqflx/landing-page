import Image from "next/image";

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="container mx-auto grid items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div className="relative z-10">
            <Image
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Road to Road Action Bicycle"
              width={600}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <div className="animate-fadeIn relative z-10 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Meet Road to Road Action Bicycle
            </h1>
            <p className="max-w-md text-gray-300">
              An elegant high-tech bicycle made for life and exciting rides.
              Experience the adventure today.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="default"
                className="flex items-center gap-2 rounded-full bg-emerald-600 text-white transition-transform hover:scale-105 hover:bg-emerald-700"
              >
                Go Live
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full border-emerald-600 text-emerald-500 transition-transform hover:scale-105 hover:bg-transparent hover:text-emerald-400"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* First Feature Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
          <div className="animate-slideInLeft space-y-6">
            <h2 className="text-3xl font-bold">Meet Road to Road</h2>
            <p className="max-w-md text-gray-600">
              Going out with this design means it won&apos;t slow you down.
              Ready to be tackled on all position. Ready for adventure with
              this.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg transition-transform duration-500 hover:scale-105">
            <Image
              src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
              alt="Bicycle reflection"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform hover:rotate-1"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px w-full bg-gray-200"></div>
      </div>

      {/* Second Feature Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-lg transition-transform duration-500 hover:scale-105 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Cyclist on a mountain road"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform hover:rotate-1"
            />
          </div>
          <div className="animate-slideInRight order-1 space-y-6 md:order-2">
            <h2 className="text-3xl font-bold">How Road to Road made</h2>
            <p className="max-w-md text-gray-600">
              Our design&apos;s magnetic connection creates charging and
              ultra-reliable electrical conduction. With our batteries, you can
              keep CO2 powered all day.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Product detail</span>
              <Badge
                variant="outline"
                className="rounded-full border-emerald-200 bg-emerald-100 text-emerald-700"
              >
                New
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Start your adventure now.</h2>
            <p className="mt-2 text-gray-600">
              Road to Road is ready to respond to any location. You can get to
              the destination.
            </p>
            <div className="mt-4">
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full border-emerald-600 text-emerald-500 transition-transform hover:scale-105 hover:bg-transparent hover:text-emerald-400"
              >
                Learn more
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                alt: "Cyclist on mountain trail",
              },
              {
                src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                alt: "Road cycling adventure",
              },
              {
                src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                alt: "Cyclist at sunset",
              },
            ].map((image, i) => (
              <div
                key={i}
                className="transform overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Keep the best road trip</h2>
            <p className="mt-2 text-gray-600">
              Enjoy the journey without barriers
            </p>
          </div>

          <div className="group relative mx-auto w-full max-w-4xl cursor-pointer overflow-hidden rounded-lg transition-all duration-500 hover:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
              alt="Cyclist video thumbnail"
              width={1000}
              height={600}
              className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-all duration-300 group-hover:bg-opacity-20">
              <div className="flex h-20 w-20 transform items-center justify-center rounded-full border-2 border-white bg-emerald-500 bg-opacity-80 transition-transform group-hover:scale-110">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">
              Road to Road Customer reviews
            </h2>
            <div className="mt-2 flex items-center justify-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                4.7 out of 5 stars / Based on 101 reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <TestimonialCard
              title="So far its a Great Road Bike!"
              content="I've been cycling for years, and this bike is just perfect for my needs! I'm really happy with it, and would recommend others who need a reliable bike for everyday use."
              rating={5}
            />
            <TestimonialCard
              title="Awesome Road Machine"
              content="This is the most comfortable bike I've ever ridden! I would recommend to all fellow cyclists. I'm using it everywhere I go and couldn't be happier with my purchase."
              rating={5}
            />
            <TestimonialCard
              title="Make me wait for the weekend!"
              content="I love the freedom I feel with this bike when I go out cycling with my family on weekends. Thanks to Road to Road for making such an amazing product!"
              rating={5}
            />
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="ghost"
              className="text-emerald-600 hover:text-emerald-700"
            >
              View more
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black px-4 py-20 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Get your own Road Bicycle Now
          </h2>
          <p className="mx-auto mb-8 max-w-md text-gray-300">
            Experience the thrill of the open road with our premium bicycles
          </p>
          <Button
            size="lg"
            className="rounded-full bg-emerald-600 text-white transition-transform hover:scale-105 hover:bg-emerald-700"
          >
            Shop Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
