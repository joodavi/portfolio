import React from 'react';
import './styles.css';
import ProfilePhoto from '../../assets/images/photo.jpg';
import EnvelopeSVG from '../../assets/svg/envelope-regular.svg';
import LinkedinSVG from '../../assets/svg/linkedin-brands.svg';
import GitHubSVG from '../../assets/svg/github-brands.svg';

function ProfileCard() {
  return (
    <div class="card">
      <img src= { ProfilePhoto } alt="João Davi's" />
      <div class="information">
        <div class="personal-information">
          <p class="name">João Davi Santos</p>
          <p class="occupation">Front-end developer</p>
          <div class="phrases">
            <p>EN: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada nunc sed massa interdum lacinia.</p>
            <p class="portuguese">BR: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada nunc sed massa interdum lacinia.</p>
          </div>
        </div>
        <div class="contact">
          <div class="email">
            <img class="envelope-email" src= { EnvelopeSVG } alt="Email Adress" /> 
          </div>
          <div class="linkedin">
            <img class="linkedin-icon" src= { LinkedinSVG } alt="Linkedin Link" /> 
          </div>
          <div class="github">
            <img class="github-icon" src= { GitHubSVG } alt="GitHub Link" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;
