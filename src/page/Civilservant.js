import React from 'react';
import Slider from 'react-slick';
import Title from '../component/Title';
import Text from '../component/Text';
import Image from '../component/Image';
import Label from '../component/Label';
import More from '../component/More';
import Issue from '../component/Issue';
import Anonymity from '../component/Anonymity';
import guides from '../assets/guides';
import { civilservant } from '../assets/content';
import color from '../assets/color';

import office from '../assets/office.jpg';
import officeDigital from '../assets/office_digital.jpg';

const { title, subtitle, issue, link, anonymity } = civilservant;

const styles = {
  ...guides,
  viewport: {
    width: '100%',
    maxWidth: 1024,
    margin: '0 auto',
    marginTop: 28,
    overflow: 'hidden',
  },
  content: {
    marginTop: 18,
  },
  subtitle: {
    fontSize: 24,
  },
  more: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 6,
    width: 40,
  },
  cover: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    border: `1px ${color.border} solid`,
    marginTop: 0,
  },
  linkTitle: {
    fontSize: 28,
    textAlign: 'left',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 40,
    paddingBottom: 30,
  },
  issue: {
    width: '100%',
    maxWidth: 375,
    margin: '0 auto',
    overflow: 'hidden',
  },
  au: {
    maxWidth: 320,
    display: 'block',
    margin: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
};

const slider = {
  dots: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slider',
  dotsClass: 'slick-dots civildot',
};

export default function () {
  return (
    <div style={styles.viewport}>
      <div style={styles.cover}>
        <div>
          <Image src={office} alt={title.join('')} />
        </div>
        <div className="disabled-mobile">
          <Image src={officeDigital} alt={title.join('')} />
        </div>
      </div>
      <div style={{ ...styles.row, ...styles.content }}>
        <div style={styles.left}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {title.map(text => (<Title key={text}>{text}</Title>))}
        </div>
        <div style={styles.right}>
          <div style={styles.issue}>
            <Slider {...slider}>
              {issue.map(data => (
                <div key={data.quote}>
                  <Issue {...data} />
                </div>
              ))}
            </Slider>
          </div>
          <img style={styles.au} src={civilservant.avatar} alt="au" />
          <div style={styles.link}>
            <Label top left>專訪</Label>
            <div style={styles.linkTitle}>{link.quote}</div>
            <More style={styles.more} />
          </div>
        </div>
      </div>
      <Anonymity {...anonymity} />
    </div>
  );
}
