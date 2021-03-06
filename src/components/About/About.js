import React from 'react';
import { Octokit }  from '@octokit/rest';
import styles from './About.module.css';
import Preloader from '../Preloader/Preloader';
import vkIcon from './../Img/vk.svg';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Repos from '../Repos/Repos';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    fetchUserFailure: false,
    userInfo: {}
  }

  componentDidMount() {
    const user = 'anastasiamiheeva';
    octokit.users.getByUsername({
      username: user
    }).then(({ data }) => {
      this.setState({
        isLoading: false,
        fetchUserFailure: false,
        userInfo: data
      })
    }).catch(err => {
      this.setState({
        isLoading: false,
        fetchUserFailure: true
      })
    })

  }

  render() {
    const { isLoading, fetchUserFailure, userInfo} = this.state;
    return (
      <div className={styles.wrap}> 
      { isLoading 
        ? <Preloader />
        : <div>
        {!fetchUserFailure 
          ? <div className={styles.info_wrap}>
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userInfo.name}
                  </a></h1>
                  
                  <span className={styles.bio}>{userInfo.bio}</span>
                  <a className={styles.email} href="mailto:miheevaanastasiia@yandex.ru">
                    <ion-icon name="at-outline" />
                    <span>miheevaanastasiia@yandex.ru</span>
                  </a>
                  <div className={styles.portfolio}>
                    <h2>Портфолио:</h2>  
                    <a 
                      className={styles.portfolio_item} 
                      href="https://anastasiamiheeva.github.io/LOCO_project/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Сайт интернет магазина
                    </a>
                    <a 
                      className={styles.portfolio_item} 
                      href="https://webheroschool.github.io/JSgame/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Игра "Find Bug"
                    </a>
                  </div>
                </div>
                
                <div className={styles.socials_wrap}>
                  <div className={styles.socials}>
                    <a 
                        className={styles.telegram} 
                        href="https://t.me/Anastasiia_Miheeva"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TelegramIcon style={{fontSize: 30}}/>
                    </a>
                    <a 
                      className={styles.github} 
                      href={userInfo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon style={{fontSize: 24}} />
                    </a>
                  
                    <a 
                      className={styles.vk} 
                      href="https://vk.com/id_93623"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img alt="vk" src={vkIcon} style={{fontSize: 20}} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          : <div className={styles.error_wrap}><p className={styles.error}>Данные о пользователе не найдены</p></div>
        }
        <Repos />
      </div>
      }</div>
    )
  }
}
  

export default About;