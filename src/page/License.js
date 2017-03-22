import React from 'react';
import Text from '../component/Text';
import BodyText from '../component/BodyText';
import { license } from '../assets/content';
import logo from '../assets/logo.png';
import external from '../assets/external_link.png';
import github from '../assets/github.png';
import color from '../assets/color';

const { image, interview, publication, author } = license;

const styles = {
  viewport: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: `linear-gradient(${color.primaryAssist}, ${color.label})`,
    marginTop: 120,
  },
  title: {
    fontSize: 20,
    color: color.primary,
    marginTop: 80,
  },
  subtitle: {
    color: color.textAssist,
  },
  license: {
    fontSize: 16,
    lineHeight: 1.375,
    color: color.textAssist,
  },
  group: {
    color: color.textAssist,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    fontSize: 10,
    textAlign: 'left',
    border: 0,
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 375,
    color: color.textAssist,
  },
  imageName: {
    width: 120,
    padding: 0,
  },
  imageLicense: {
    padding: 0,
  },
  imageLink: {
    width: 50,
    padding: 0,
    textAlign: 'right',
  },
  team: {
    fontSize: 18,
    textAlign: 'left',
    border: 0,
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 375,
    color: color.primary,
    borderCollapse: 'collapse',
  },
  teamWork: {
    textAlign: 'left',
    padding: '4px 8px',
  },
  teamNickname: {
    padding: '4px 8px',
  },
  teamName: {
    padding: '4px 8px',
  },
  externalLink: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: 160,
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  link: {
    fontSize: 16,
    color: color.primary,
    borderBottom: `1px ${color.primary} solid`,
    paddingBottom: 2,
    textDecoration: 'none',
  },
  logo: {
    width: 140,
    height: 120,
    marginTop: 80,
    marginBottom: 40,
  },
  github: {
    width: 32,
    height: 32,
    margin: '0 auto',
    marginTop: 28,
  },
};

export default function () {
  return (
    <div style={styles.viewport}>
      <a name="license" />
      <BodyText style={styles.subtitle}>{license.subtitle}</BodyText>
      <div style={styles.subtitle}>{license.subtitle}</div>
      <div style={styles.title}>{license.title}</div>
      <Text style={styles.group}>授權條款</Text>
      <BodyText style={styles.license}>{license.license}</BodyText>
      <Text style={styles.group}>圖像授權</Text>
      <table style={styles.image}>
        <tbody>
          {image.map(item => (
            <tr key={item.name}>
              <td style={styles.imageName}>{item.name}</td>
              <td style={styles.imageLicense}>{item.license}</td>
              <td style={styles.imageLink}>
                <a href={item.link} target="license">
                  <img width="14" height="14" alt="link" src={external} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Text style={styles.group}>採訪協力</Text>
      <div style={styles.externalLink}>
        {interview.map(item => (
          <a key={item.name} style={styles.link} href={item.link} target="external">{item.name}</a>
        ))}
      </div>
      <Text style={styles.group}>合作刊登</Text>
      <div style={styles.externalLink}>
        {publication.map(item => (
          <a key={item.name} style={styles.link} href={item.link} target="external">{item.name}</a>
        ))}
      </div>
      <Text style={styles.group}>團隊</Text>
      <table style={styles.team}>
        <tbody>
          {author.map(item => (
            <tr key={item.name}>
              <td style={styles.teamWork}>{item.work}</td>
              <td style={styles.teamNickname}>{`“${item.nickname}”`}</td>
              <td style={styles.teamName}>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="https://github.com/g0v-news/gov-hackers" target="github">
        <img style={styles.github} src={github} alt="github" />
      </a>
      <img style={styles.logo} src={logo} alt="g0v.news" />
    </div>
  );
}
