import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LimitDropdown from '../../components/LimitDropdown/LimitDropdown';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import UserListItem from '../../components/UserListItem/UserListItem';
import { RequestState } from '../../store/common.types';
import { usersGet } from '../../store/user/user.actions';
import { usersErrorSelector, usersSelector, usersStateSelector } from '../../store/user/user.selectors';
import './UsersPage.sass';

const MAX_USER_ID = 10000;

const UsersPage: React.FC = () => {
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const usersState = useSelector(usersStateSelector);
  const usersError = useSelector(usersErrorSelector);

  const isLoading = usersState === RequestState.Loading || usersState === null;
  const isError = usersState === RequestState.Error;

  useEffect(() => {
    dispatch(usersGet(limit, offset));
  }, [dispatch, limit, offset]);

  const onNextPageClick = () => {
    if (offset < MAX_USER_ID) {
      setOffset(offset + limit);
    }
  }

  const onPrevPageClick = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  }

  const LimitDropdownProps = {
    onChange: (value: number) => {
      setOffset(0);
      setShowDropdown(false);
      setLimit(value);
    },
    selectedValue: limit,
    values: [10, 25, 50, 100],
    visibility: showDropdown,
  }
  
  return (
    <div className="user-page box">
      <div className="title">
        Users List
      </div>
      <div className="list scroll">
        {!isLoading ? 
          (!isError ? users.map((user) => <UserListItem user={user} key={user.login} />) : <Error message={usersError} />) : 
          <Loader />
        }
      </div>
      <div className="footer">
        <div className="item">
          <div className="button" onClick={onPrevPageClick}>{'<'}</div>
          <div>Page: {offset / limit + 1}</div>
          <div className="button" onClick={onNextPageClick}>{'>'}</div>
        </div>
        <div className="item" onClick={() => setShowDropdown(!showDropdown)}>
          Users per page: {limit}
        </div>
        <LimitDropdown {...LimitDropdownProps} />
      </div>
    </div>
  );
};

export default UsersPage;