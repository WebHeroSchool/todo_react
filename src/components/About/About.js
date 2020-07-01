import React from 'react';
import { Octokit }  from '@octokit/rest';
import styles from './About.module.css';
import Preloader from '../Preloader/Preloader';
import Card from '@material-ui/core/Card';
import vkIcon from './../Img/vk.svg';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Repos from '../Repos/Repos';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoadingUser: true,
    isLoadingRepos: true,
    fetchUserFailure: false,
    fetchReposFailure: false,
    userInfo: {},
    repoList: [],
    firstRepo: 0,
    lastRepo: 4
  }

  componentDidMount() {
    const user = 'anastasiamiheeva';
    octokit.users.getByUsername({
      username: user
    }).then(({ data }) => {
      this.setState({
        isLoadingUser: false,
        fetchUserFailure: false,
        userInfo: data
      })
    }).catch(err => {
      this.setState({
        isLoadingUser: false,
        fetchUserFailure: true
      })
    })

  }

  render() {
    const {isLoadingRepos, isLoadingUser, fetchUserFailure, userInfo} = this.state;
    return (
      <div className={styles.wrap}> 
      {isLoadingUser && isLoadingRepos 
        ? <Preloader />
        : <div>
        {!fetchUserFailure 
          ? <Card className={styles.info_wrap}>
              <img 
                className={styles.avatar} 
                src={userInfo.avatar_url} 
                alt={userInfo.name}  
              />
              <div className={styles.about_wrap}>
                <div className={styles.about}>
                  <h1 className={styles.title}>
                  <a 
                    className={styles.name} 
                    href={userInfo.html_url}
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    {userInfo.name}
                  </a></h1>
                  
                  <span className={styles.bio}>{userInfo.bio}</span>
                  <span className={styles.location}> <ion-icon name="location-outline" />{userInfo.location}</span>
                  <a className={styles.email} href="mailto:miheevaanastasiia@yandex.ru">
                    <ion-icon name="at-outline" />
                    <span>miheevaanastasiia@yandex.ru</span>
                  </a>
                  
                </div>
                
                <div className={styles.socials_wrap}>
                  <div className={styles.socials}>
                    <a 
                        className={styles.telegram} 
                        href='https://t.me/Anastasiia_Miheeva'
                        target='_blank'
                        rel="noopener noreferrer"
                      >
                        <TelegramIcon style={{fontSize: 30}}/>
                    </a>
                    <a 
                      className={styles.github} 
                      href={userInfo.html_url}
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon style={{fontSize: 24}} />
                    </a>
                  
                    <a 
                      className={styles.vk} 
                      href='https://vk.com/id_93623'
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      <img src={vkIcon} style={{fontSize: 20}} />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          : <div className={styles.error_wrap}><p className={styles.error}>Данные о пользователе не найдены</p></div>
        }
        <Repos />
      </div>
      }</div>
    )
  }
}
  

export default About;