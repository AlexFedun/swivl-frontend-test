import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IUser } from '../../store/user/user.types';
import './UserListItem.sass';

export interface IUserListItemProps {
  user: IUser;
}

const UserListItem: React.FC<IUserListItemProps> = ({ user }) => {
  const history = useHistory();

  const onUserItemCLick = (e: any) => {
    e.target.tagName !== 'A' && history.push(`/details/${user.login}`);
  }

  return (
    <div className="user-list-item" onClick={onUserItemCLick}>
      <div className="avatar">
        <img src={`${user.avatar_url}&s=100`} alt={user.login} />
      </div>
      <div className="info">
        <div className="login">{user.login}</div>
        <div className="link">
          <Link to={{ pathname: user.html_url }} target="_blank">
            Open profile on Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;