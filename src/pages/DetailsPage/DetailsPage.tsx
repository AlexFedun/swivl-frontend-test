import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { RequestState } from '../../store/common.types';
import { usersDetailsGet } from '../../store/user/user.actions';
import { userDetailsErrorSelector, userDetailsSelector, userDetailsStateSelector } from '../../store/user/user.selectors';
import './DetailsPage.sass';

const DetailsPage: React.FC = () => {
  const { username } = useParams() as { username: string };
  const dispatch = useDispatch();
  const userDetails = useSelector(userDetailsSelector);
  const userDetailsState = useSelector(userDetailsStateSelector);
  const userDetailsError = useSelector(userDetailsErrorSelector);

  const isLoading = userDetailsState === RequestState.Loading || userDetailsState === null;
  const isError = userDetailsState === RequestState.Error;

  useEffect(() => {
    dispatch(usersDetailsGet(username));
  }, [dispatch, username]);

  const userDetailsRows = [
    { label: 'Name', value: userDetails?.name },
    { label: 'Bio', value: userDetails?.bio },
    { label: 'Company', value: userDetails?.company },
    { label: 'Email', value: userDetails?.email },
    { label: 'Followers', value: userDetails?.followers },
    { label: 'Following', value: userDetails?.following },
    { label: 'Public gists', value: userDetails?.public_gists },
    { label: 'Public repos', value: userDetails?.public_repos },
    { label: 'Twitter username', value: userDetails?.twitter_username },
    { label: 'Type', value: userDetails?.type },
    { label: 'Created at', value: userDetails?.created_at && new Date(userDetails?.created_at).toDateString() }
  ];

  return (
    <div className="details-page box">
      <div className="title">
        <Link className="button left" to="/users">
          Back
        </Link>
        Details { username } #{userDetails?.id}
        <Link className="button right" to={{ pathname: userDetails?.html_url }} target="_blank">
          GitHub
        </Link>
      </div>
      {!isLoading ? 
          (!isError ? (
            <div className="main scroll">
              <div className="avatar">
                <img src={`${userDetails?.avatar_url}&s=460`} alt={username}/>
              </div>
              <div className="info scroll">
                {userDetailsRows.map((item) => (
                  <div className="row" key={item.label}>
                    <div>{item.label}:</div>
                    <div>{item.value || '-'}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : <Error message={userDetailsError} />) : 
          <Loader />
        }

    </div>
  );
};

export default DetailsPage;