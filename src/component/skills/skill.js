import React from 'react';
import './skill.css';
import UIDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span> 
        <span className="skillDescription">I am a skilled and passionate web designer & developer with experience in creating visually appealing and user friendly websites. I have a strong understanding of design, developing and a keen eye for details. I am proficient in HTML5,CSS,JavaScript,Jquery,React js and git (VCS), as well as design sofware such as Adobe Photoshop and Illustrator.</span> 
        <div className="skillsBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UI-design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={webDesign} alt="web-design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This demo text can be changed while making the producation ready website.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="App-design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>you can write text related to mobile app development.</p>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Skill;
