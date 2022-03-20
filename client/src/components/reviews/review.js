import * as React from 'react';
import { useParams } from "react-router-dom";
import Error from '../error';
import Hero from './hero';
import Article from './article';

export default function Review() {

    //Gets id from URL
    const {id} = useParams();

    //Cases for id
    switch (id) {
        case 'elden-ring':
            return (
                <>
                    {/*Returns components with assigned props */}
                    <Hero image={"../images/elden-ring-thumbnail.jpg"} tagline={"From Software"} heading={"Elden Ring"} />
                    <Article 
                        paragraphOne={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pulvinar dolor, id auctor turpis vehicula sed. In tincidunt varius sagittis. In vulputate, magna et vehicula lacinia, arcu purus dignissim justo, eget eleifend orci dolor sed tellus. Integer cursus pellentesque lacus, et tincidunt ipsum faucibus eu. Integer ac turpis ultrices velit pretium pulvinar malesuada et tellus. Vestibulum tincidunt vestibulum metus eu posuere. Nunc orci ligula, malesuada mollis turpis et, pharetra euismod turpis. Quisque nec ultricies diam. In pellentesque quam ac ornare mollis."}
                        imageOne={"../images/elden-ring-thumbnail.jpg"} 
                        paragraphTwo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pulvinar dolor, id auctor turpis vehicula sed. In tincidunt varius sagittis. In vulputate, magna et vehicula lacinia, arcu purus dignissim justo, eget eleifend orci dolor sed tellus. Integer cursus pellentesque lacus, et tincidunt ipsum faucibus eu. Integer ac turpis ultrices velit pretium pulvinar malesuada et tellus. Vestibulum tincidunt vestibulum metus eu posuere. Nunc orci ligula, malesuada mollis turpis et, pharetra euismod turpis. Quisque nec ultricies diam. In pellentesque quam ac ornare mollis."} 
                        imageTwo={"../images/elden-ring-thumbnail.jpg"} 
                        paragraphThree={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pulvinar dolor, id auctor turpis vehicula sed. In tincidunt varius sagittis. In vulputate, magna et vehicula lacinia, arcu purus dignissim justo, eget eleifend orci dolor sed tellus. Integer cursus pellentesque lacus, et tincidunt ipsum faucibus eu. Integer ac turpis ultrices velit pretium pulvinar malesuada et tellus. Vestibulum tincidunt vestibulum metus eu posuere. Nunc orci ligula, malesuada mollis turpis et, pharetra euismod turpis. Quisque nec ultricies diam. In pellentesque quam ac ornare mollis."}
                        
                        //Scores
                        metacritic={"https://www.metacritic.com/game/pc/elden-ring"}
                        metacriticScore={"96"}

                        steam={"https://store.steampowered.com/app/1245620/ELDEN_RING/"}
                        steamScore={"Very Positive"}
                        score={"00"}
                    /> 
                </>
            );

        default:
            //Defaults error handler
            return <Error />
    }
};