import Link from 'next/link';
import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

export default function useSocialMediaLinks() {
  const socialLinks = {
    telegram: {
      link: 'https://t.me/atharvf14t',
      icon: <FaTelegram />,
    },
    linkedin: {
      link: 'https://www.linkedin.com/in/atharvsrivastava-/',
      icon: <FaLinkedin />,
    },
    github: {
      link: 'https://github.com/atharv-asr-group',
      icon: <FaGithub />,
    },
    twitter: {
      link: 'https://x.com/atharvf14t',
      icon: <FaTwitter />,
    },
    youtube: {
      link: 'https://www.youtube.com/@atharvdxb',
      icon: <FaYoutube />,
    },

    whatsapp: {
      link: 'https://wa.me/+918448160911',
      icon: <FaWhatsapp />,
    },
    email: {
      link: 'mailto:atharvdxb14@gmail.com', // Replace with your email address
      icon: <FaEnvelope className="text-blue-500" />,
    },
    instagram: {
      link: 'https://www.instagram.com/atharvf14t/',
      icon: <FaInstagram className="text-blue-500" />,
    },
  };

  const renderSocialMediaLinks = () => {
    return Object.keys(socialLinks).map((key) => {
      const item = socialLinks[key as keyof typeof socialLinks];
      return (
        <Link
          key={key}
          href={item.link}
          target={key === 'email' ? '_self' : '_blank'}
        >
          {item.icon}
        </Link>
      );
    });
  };

  return {
    renderSocialMediaLinks,
  };
}
