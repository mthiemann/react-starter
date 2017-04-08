import React from 'react';


const propTypes = {
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
    public_repos: React.PropTypes.number.isRequired,
  }),
};

const defaultProps = {
  score: 0,
  info: {
    blog: '',
    company: '',
    location: '',
    name: '',
  },
};

const UserDetails = props => (
  <div>
    {!!props.score &&
    <li className="list-group-item"><h3>Score: {props.score}</h3></li>}
    <li className="list-group-item">
      <img src={props.info.avatar_url} alt="Avatar" className="img-rounded img-responsive" />
    </li>
    {props.info.name && <li className="list-group-item">Name: {props.info.name}</li>}
    <li className="list-group-item">Username: {props.info.login}</li>
    {props.info.location &&
    <li className="list-group-item">Location: {props.info.location}</li>}
    {props.info.company &&
    <li className="list-group-item">Company: {props.info.company}</li>}
    <li className="list-group-item">Followers: {props.info.followers}</li>
    <li className="list-group-item">Following: {props.info.following}</li>
    <li className="list-group-item">Public Repos: {props.info.public_repos}</li>
    {props.info.blog &&
    <li className="list-group-item">Blog:
      <a href={props.info.blog}>
        {props.info.blog}
      </a>
    </li>}
  </div>
);

UserDetails.propTypes = propTypes;
UserDetails.defaultProps = defaultProps;

export default UserDetails;
