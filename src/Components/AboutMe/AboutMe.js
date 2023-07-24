import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks = [
        {
            name: "Github",
            link: "https://github.com/Annyespi99?tab=repositories",
            logo: logoGithub,
        },
        {
            name: "Linkedind",
            link: "",
            logo: logoLinkeind,
        },
        {
            name: "Youtube",
            link: "",
            logo: logoYoutube,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, I'm Anny Espi</p>
                        <p>Junior</p>
                        <p>Front End Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        Front End Web Dev and UX/UI Designer
                    </S.DescriptionText>
                    <S.ContainerIcons>
                        {socialNetworks.map((network, index) => (
                            <a
                                key={index}
                                href={network.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={network.logo} alt={network.name} />
                            </a>
                        ))}
                    </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/Img/Logo.png" alt=" Anny Espi - Front End Developer" />
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;