import React from "react";
import "./TeamSection.css";



const teamData = [
  {
    name: "Nitin Jaiswal ",
    roles: "",
    image:  'https://res.cloudinary.com/djh624fzu/image/upload/v1773930094/Screenshot_2026-03-19_194602_t7umh2.png'
},
{
    name: "Amit panday",
    role: "",
    image: 'https://res.cloudinary.com/djh624fzu/image/upload/v1773930429/Screenshot_2026-03-19_194634_i9odcp.png'
  },
 
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>

      <div className="team-container">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;