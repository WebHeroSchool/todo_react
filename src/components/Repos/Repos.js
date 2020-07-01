import React from 'react';
import classnames from 'classnames';
import { Octokit }  from '@octokit/rest';
import styles from './Repos.module.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const octokit = new Octokit();

class Repos extends React.Component {
  state = {
    fetchReposFailure: false,
    repoList: [],
    firstRepo: 0,
    lastRepo: 3
  }
  componentDidMount() {
    const user = 'anastasiamiheeva';
    octokit.repos.listForUser({
      username: user
    }).then(({ data }) => {
      console.log(data);
      
      this.setState({
        fetchReposFailure: false,
        repoList: data
      })
    }).catch(err => {
      this.setState({
        fetchReposFailure: true
      })
    })
  }

  previousPage = () => {
    if (this.state.firstRepo !== 0 ) {
        this.setState( state => ({
          firstRepo: state.firstRepo - 3,
          lastRepo: state.lastRepo - 3
        })); 
    }
  };

  nextPage = () => {
    if(this.state.lastRepo < this.state.repoList.length) {
      this.setState( state => ({
        firstRepo: state.firstRepo + 3,
        lastRepo: state.lastRepo + 3
      }));
    }
  };

  render() {
    const {fetchReposFailure, repoList, firstRepo, lastRepo} = this.state;
    const repoPag = repoList.slice(firstRepo, lastRepo);
    return (
      <div>
        {!fetchReposFailure
          ? <Card className={styles.repo_wrap}>
            <h2 className={styles.list_text}>Список репозиториев:</h2>
            <ol className={styles.list}>
            {repoPag.map(repo => (
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
                    [styles.js]: repo.language === 'JavaScript',
                    [styles.no_lang]: repo.language === null
                  })}>
                    {repo.language}
                  </span>
                  <span className={styles.fork}>{repo.forks_count}</span>
                  <span className={styles.star}>{repo.stargazers_count}</span>
                  <span className={styles.date}>updated: {new Date(repo.updated_at).toLocaleString('en-US',
                  {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                  </span>
                </div>
              </li>
            ))}
          </ol>
            <div className={styles.pagination}>
              <button
                className={styles.pagination_btn}
                onClick={this.previousPage}
                disabled={firstRepo < 3}
              >назад
              </button>
              <button
                className={styles.pagination_btn}
                onClick={this.nextPage}
                disabled={repoList.length < lastRepo}
              >вперед
              </button>
            </div>
          </Card>
        : <div className={styles.error_wrap}><p className={styles.error}>Репозитории не найдены</p></div>
        }
      </div>
    )
  }
}


export default Repos;