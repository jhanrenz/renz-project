import { useState } from "react";
import StatisticsHeat from "./StatisticsHeat";
import Articles from "./Articles";
import { Footer } from "../Footer/Footer";
import StatisticsForest from "./StatisticsForest";
import StatisticsWater from "./StatisticsWater";
import StatisticsAir from "./StatisticsAir";


const LearnMore = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore(!showMore);

  return (
    <>
      <section className="w-full py-20 lg:py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
            {/* Text Section */}
            <div className="flex flex-col flex-1 space-y-4">
              <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full w-max">
                Eco Living
              </span>
              <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold tracking-tight lg:max-w-xl">
                Understanding <span className="text-primary">Sustainability & Eco-Friendly Living</span>
              </h2>
              <p className="text-lg max-w-xl lg:max-w-2xl leading-relaxed text-gray-600">
                Sustainability is about meeting our present needs without compromising the ability
                of future generations to meet theirs. Eco-friendly living is a lifestyle that supports
                this goal by reducing harm to the environment through mindful choices.
                {showMore && (
                  <>
                    {" "}
                    This includes using renewable resources, minimizing waste, conserving energy,
                    and supporting products and companies that prioritize environmental responsibility.
                    By living sustainably, we help preserve natural ecosystems, reduce carbon footprints,
                    and promote a healthier planet. Simple daily habits — like reducing single-use plastics,
                    choosing public transportation, and eating locally sourced foods — play a big role
                    in creating lasting positive change.
                  </>
                )}
              </p>
              <button
                onClick={handleToggle}
                className="text-primary underline text-sm w-max focus:outline-none hover:text-primary/80 transition"
              >
                {showMore ? "See less" : "See more"}
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 aspect-video rounded-md overflow-hidden shadow-lg">
              <img
                src="/learn_background.jpg"
                alt="Sustainability and eco-friendly lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <Articles />
      </section>
      <section className="bg-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Living Unsustainably: The Consequences
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Unsustainable practices and a lack of eco-friendly living have significant consequences
          on our environment, public health, and future generations. In the Philippines and around
          the world, we are seeing the real impact of this through deforestation, water
          insecurity, air pollution, and deteriorating living conditions.
        </p>
        <p className="text-gray-700 text-base mb-4">
          For example, from 2002 to 2023, the Philippines lost 190 thousand hectares of humid
          primary forest — a 4.1% decrease. At the same time, over 60 million Filipinos lack access
          to safe water and 43 million lack access to safe toilets. Meanwhile, Metro Manila is
          experiencing dangerously high PM2.5 air pollution levels, primarily due to traffic
          emissions and outdated public transport systems like PUJs.
        </p>
        <p className="text-gray-700 text-base mb-4">
          These outcomes are not isolated events — they are the result of unchecked urbanization,
          weak environmental regulations, and failure to prioritize sustainability in our daily
          lives and governance.
        </p>
        <p className="text-gray-700 text-base mb-6">
          It is crucial to recognize these issues and take steps toward more sustainable living and
          policies that protect our environment, improve public health, and ensure a livable future
          for all.
        </p>
        <p className="text-gray-700 text-base">
          This graph shows the change in global surface temperature compared to the long-term
          average from 1951 to 1980. Earth’s average surface temperature in 2024 was the warmest on
          record since recordkeeping began in 1880 (source: NASA/GISS). Overall, Earth was about
          1.47°C warmer in 2024 than in the late 19th-century (1850–1900) preindustrial average.
          The 10 most recent years are the warmest on record.
        </p>
      </div>
    </section>
      {/* Statistics Section with padding */}
      <section className="py-16 px-4 bg-green-50">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="bg-white shadow-lg rounded-lg p-6">
      <StatisticsHeat />
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      <StatisticsForest />
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      <StatisticsWater />
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      <StatisticsAir />
    </div>
  </div>
</section>



      

      {/* Articles Section with padding */}
     
      <Footer />
    </>
  );
};

export default LearnMore;