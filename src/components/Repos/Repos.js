import React from 'react';
import classnames from 'classnames';
import { Octokit }  from '@octokit/rest';
import styles from './Repos.module.css';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const octokit = new Octokit();

class Repos extends React.Component {
  state = {
    isLoading: true,
    fetchReposFailure: false,
    repoList: [],
  }

  componentDidMount() {
      octokit.repos.listForUser({
        username: 'anastasiamiheeva'
      }).then(({ data }) => {
        console.log(data);
        
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
    const {isLoading, repoList, fetchReposFailure} = this.state;
    return (
      <div className={styles.wrap}>
        {fetchReposFailure && <div><p>Репозитории не найдены</p></div>}
        
        { !isLoading && !fetchReposFailure && 
          <Card className={styles.repo_wrap}>
            <p classnames={styles.text}>Список репозиториев:</p>
            <ol className={styles.list}>
              {repoList.map(repo => (
                <li
                  className={styles.list_item}
                  key={repo.id}
                >
                  <a 
                    className={styles.repo_link}
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer' 
                  >{repo.name}</a>
                  <div className={styles.repo_info}>
                    <span className={classnames({
                      [styles.language]: true,
                      [styles.html]: repo.language === 'HTML',
                      [styles.css]: repo.language === 'CSS',
                      [styles.js]: repo.language === 'JavaScript'
                    })}>
                      {repo.language}
                    </span>
                  <span>{repo.stargazers_count}</span>
                    
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        }
      </div>
      
    )
  }
}

export default Repos;