import React from 'react';
import { Octokit }  from '@octokit/rest';
import styles from './About.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const octokit = new Octokit();

class About extends React.Component {

  state = {
    isLoading: true,
    fetchReposFailure: false,
    repoList: [],
    fetchUserFailure: false,
    userInfo: {}
  }

  componentDidMount() {
    octokit.users.getByUsername({
      username: 'anastasiamiheeva'
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
    });

    octokit.repos.listForUser({
      username: 'anastasiamiheeva'
    }).then(({ data }) => {
      this.setState({
        isLoading: false,
        fetchReposFailure: false,
        repoList: data
      })
    }).catch(err => {
      this.setState({
        isLoading: false,
        fetchReposFailure: true
      })
    });
  }

  render() {
    const { isLoading, repoList, fetchReposFailure, userInfo, fetchUserFailure } = this.state;
    const Preloader = () => <div className={styles.preloader}></div>;
    return (
      <div className={styles.wrap}>
        <div>{ isLoading && <Preloader />}</div>
        <div className={styles.content}>

        {fetchUserFailure && <div><p>Данные о пользователе не найдены</p></div>}

        { !isLoading && !fetchUserFailure && 
          <div className={styles.info_wrap}>
            <img 
              className={styles.avatar} 
              src={userInfo.avatar_url} 
              alt={userInfo.name}  
            />
            <div className={styles.info_content}>
              <p><a 
                className={styles.name} 
                href={userInfo.html_url}
                target='_blank'
                rel="noopener noreferrer"
              >
                {userInfo.name}
              </a></p>
              <p className={styles.bio}>{userInfo.bio}</p>
              <p className={styles.location}>{userInfo.location}</p>
              <p className={styles.repos}>Repositories: {userInfo.public_repos}</p>
            </div>
          </div>
        }

        {fetchReposFailure && <div><p>Репозитории не найдены</p></div>}
        
        { !isLoading && !fetchReposFailure && 
          <div>
            <List className={styles.list}>
              {repoList.map(repo => (
                <ListItem 
                  className={styles.list_item}
                  key={repo.id}
                >
                  <a 
                    className={styles.repo_link}
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer' 
                  >{repo.name}</a>
                </ListItem>
              ))}
            </List>
          </div>
        }
        </div> 
      </div>
    )
  }
}
  

export default About;