import React from 'react';
import authorImage from '../assets/Regina.jpg';

const AboutPage = () => {
  return (
    <div className="py-12 bg-cream" data-sb-object-id="aboutpage">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-burgundy mb-8 text-center" data-sb-field-path="pageTitle">About Regina Cloman-Moore</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto mb-16">
          <div>
            <img 
              src={authorImage} 
              alt="Regina Cloman-Moore" 
              className="rounded-lg shadow-xl w-full"
              data-sb-field-path="authorImage"
            />
          </div>
          
          <div>
            <p className="text-lg mb-6" data-sb-field-path="bioParagraph1">
              Regina Cloman Moore resides in Little Rock, Arkansas with her family. She worked for the Little Rock School District for over 20 years.
            </p>
            <p className="text-lg mb-6" data-sb-field-path="bioParagraph2">
              She is a mother and grandmother who enjoys encouraging people from every walk of life and writing. Regina has written "Grandma's Lap", "Florida Peppermint Goes to School", "I Know My Father's Voice", and several poems and inspirational readings.
            </p>
            <p className="text-lg" data-sb-field-path="bioParagraph3">
              Regina's books focus on family relationships, adventure, and life lessons for children of all ages.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-burgundy mb-6" data-sb-field-path="missionTitle">My Mission</h2>
          <p className="text-lg mb-8" data-sb-field-path="missionDescription">
            My mission is to inspire and encourage readers of all ages through stories that uplift, entertain, and provide valuable life lessons. I believe in the power of storytelling to connect people, foster empathy, and create positive change in our communities.
          </p>
          
          <h2 className="text-3xl font-serif text-burgundy mb-6" data-sb-field-path="journeyTitle">Writing Journey</h2>
          <p className="text-lg mb-8" data-sb-field-path="journeyDescription">
            My writing journey began with a desire to share stories that would resonate with children and adults alike. Drawing from my experiences as an educator and parent, I craft narratives that celebrate family and personal growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-serif text-burgundy mb-6" data-sb-field-path="schoolVisitsTitle">School Visits & Readings</h2>
          <p className="text-lg mb-8" data-sb-field-path="schoolVisitsDescription">
            Regina Cloman-Moore is passionate about inspiring young minds through engaging school visits and interactive book readings. She offers dynamic presentations tailored to various age groups, focusing on themes of literacy, imagination, and personal growth. To inquire about scheduling a visit to your school or educational event, please contact us through the form on the <a href="/contact" class="text-burgundy hover:underline">Contact Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
