import React from "react";
import Idea from "./Idea";
import image1 from "./images/01.jpeg";
import image2 from "./images/02.png";
import image3 from "./images/03.jpg";
import image4 from "./images/04.jpeg";
import image5 from "./images/05.jpeg";
import image6 from "./images/06.jpeg";
import image7 from "./images/07.jpeg";
import image8 from "./images/08.jpg";
import image9 from "./images/09.jpg";
import image10 from "./images/10.avif";
import image11 from "./images/11.webp";
import image12 from "./images/12.jpeg";

const ideas = [
    {
        title: "Sustainability Workshops",
        description: "Host interactive workshops to educate the community on eco-friendly practices, from composting to energy conservation.",
        image: image1,
        link: "https://www.innovationtraining.org/sustainability-workshops-and-programs/"
    },
    {
        title: "Wildlife Conservation Initiatives",
        description: "Support and promote local wildlife conservation efforts by participating in restoration projects and community awareness campaigns.",
        image: image2,
        link: "https://wildlifeconservationinitiative.org/"
    },
    {
        title: "Sustainable Fashion Events",
        description: "Organize events that promote eco-friendly fashion practices, encouraging thrift shopping, upcycling, and sustainable brands.",
        image: image3,
        link: "https://sustainableamor.com/blog/10-free-online-sustainable-fashion-events"
    },
    {
        title: "Sustainable Transportation Initiatives",
        description: "Encourage the use of eco-friendly transportation options, such as biking, walking, and public transit, to reduce carbon footprints.",
        image: image4,
        link: "https://blog.techstork.sg/sustainable-transportation-options-to-reduce-your-carbon-footprint.html"
    },
    {
        title: "Green Living Tips and Resources",
        description: "Provide tips and resources on how to live sustainably in everyday life, covering various aspects such as energy efficiency and waste reduction.",
        image: image5,
        link: "https://www.greenlivinganswers.com/ultimate-guide-to-green-living"
    },
    {
        title: "Eco-Friendly Product Showcase",
        description: "Showcase a wide range of products and services that help individuals and businesses reduce their environmental impact and promote sustainability.",
        image: image6,
        link: "https://sustainablefuturespcs.org/sustainable-product-showcase/"
    },
    {
        title: "Waste Reduction Challenges",
        description: "Engage the community in monthly challenges to reduce waste at home, fostering a culture of sustainability.",
        image: image7,
        link: "https://www.usda.gov/topics/urban/coop-agreements"
    },
    {
        title: "Sustainable Cooking",
        description: "A blog that shares tips and insights on sustainable cooking, focusing on plant-based recipes and reducing food waste..",
        image: image8,
        link: "http://socisdg.com/en/blog/sustainable-cooking/"
    },
    {
        title: "Local Tree Planting Events",
        description: "Organize community events where residents can come together to plant trees in local parks and neighborhoods, enhancing green spaces.",
        image: image9,
        link: "https://www.arborday.org/"
    },
    {
        title: "Plastic-Free Challenge",
        description: "Encourage community members to participate in a month-long challenge to eliminate single-use plastics from their lives, providing tips and resources.",
        image: image10,
        link: "https://www.travelersagainstplastic.org/30-day-plastic-free-challenge"
    },
    {
        title: "Eco-Friendly Pet Care",
        description: "Promote sustainable pet care practices, including eco-friendly grooming products and DIY pet toys, to help pet owners reduce their environmental impact.",
        image: image11,
        link: "https://www.rover.com/blog/eco-friendly-pet-parenthood/"
    },
    {
        title: "Community Solar Projects",
        description: "Provide information and resources on how to start or join community solar projects, allowing residents to invest in renewable energy collectively.",
        image: image12,
        link: "https://www.energy.gov/communitysolar/community-solar"
    }
];

const Card = () => {
    return (
        <div className="Card">
            {ideas.map((idea, index) => (
                <div className="grid-item" key={index}>
                    <Idea
                        title={idea.title}
                        description={idea.description}
                        image={idea.image}
                        link={idea.link}
                    />
                </div>
            ))}
        </div>
    );
};

export default Card;