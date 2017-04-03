import React from 'react';

class UserDetails extends React.Component {
  
  static propTypes = {
    score: React.PropTypes.number,
    info: React.PropTypes.shape({
      avatar_url: React.PropTypes.string.isRequired,
      blog: React.PropTypes.string,
      company: React.PropTypes.string,
      followers: React.PropTypes.number.isRequired,
      following: React.PropTypes.number.isRequired,
      location: React.PropTypes.string,
      login: React.PropTypes.string.isRequired,
      name: React.PropTypes.string,
      public_repos: React.PropTypes.number.isRequired
    })
  };
  
  render() {
    return (
      <div>
        {!!this.props.score && <li className="list-group-item"><h3>Score: {this.props.score}</h3></li>}
        <li className="list-group-item"> <img src={this.props.info.avatar_url} className="img-rounded img-responsive"/></li>
        {this.props.info.name && <li className="list-group-item">Name: {this.props.info.name}</li>}
        <li className="list-group-item">Username: {this.props.info.login}</li>
        {this.props.info.location && <li className="list-group-item">Location: {this.props.info.location}</li>}
        {this.props.info.company && <li className="list-group-item">Company: {this.props.info.company}</li>}
        <li className="list-group-item">Followers: {this.props.info.followers}</li>
        <li className="list-group-item">Following: {this.props.info.following}</li>
        <li className="list-group-item">Public Repos: {this.props.info.public_repos}</li>
        {this.props.info.blog && <li className="list-group-item">Blog: <a href={this.props.info.blog}> {this.props.info.blog}</a></li>}
      </div>
    )
  }
}

export default UserDetails;