import * as React from 'react';
import { Link as RouterLink, useLocation, useNavigate, useParams } from 'react-router-dom';
//import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
//component
import Flags from '../../components/Flags';
import RickAndMorty from '../../components/RickAndMorty';

//redux
import { useDispatch, useSelector } from "react-redux";
import { setHomepageSuccess, setHomepageError } from "../../reduxs/reducers/homepage";
import { getHomepageData, getHomepageDataError } from "../../reduxs/selectors/homepage";
import { getLanguage } from "../../reduxs/selectors/defaultSettings";
//asyncs
import { homepageAsync } from "../../asyncs/homepage";
//utilities
import { TIMER_OUT } from "../../utilities/constants";

Homepage.propTypes = {};

let onlyOneHomepage = 0;

export default function Homepage(props = {}) {
  const location = useLocation();
  const navigate = useNavigate();
  //let { userId } = useParams();

  //init redux
  const dispatch = useDispatch();
  const homepageDataSuccess = useSelector(getHomepageData);
  const homepageDataError = useSelector(getHomepageDataError);
  const language = useSelector(getLanguage);
  //init states
  const [loading, setLoading] = React.useState(true);
  const [showContent, setShowContent] = React.useState(false);
  const [showContentError, setShowContentError] = React.useState(false);
  const [hasData, setHasData] = React.useState(false);
  const [value, setValue] = React.useState(0);
  //init ref
  const prevLanguage = React.useRef(language);

  React.useEffect(() => {
    if (!homepageDataSuccess && onlyOneHomepage == 0) {
      onlyOneHomepage = onlyOneHomepage + 1;

      homepageAsync(
        { successCallback, errorCallback },
        { language }
      );
    } else if (homepageDataSuccess) {
      setHasData(true);
    }
  }, []);

  React.useEffect(() => {
    if (prevLanguage.current !== language) {
      setLoading(true);
      homepageAsync(
        { successCallback, errorCallback },
        { language }
      );
      prevLanguage.current = language;
    }
  }, [language]);

  React.useEffect(() => {
    if (homepageDataSuccess) {
      showContentWhenSuccess();
    }
  }, [homepageDataSuccess]);

  React.useEffect(() => {
    if (homepageDataError) {
      showContentWhenError();
    }
  }, [homepageDataError]);

  React.useEffect(() => {
    if (hasData) {
      showContentWhenSuccess();
      setHasData(false);
    }
  }, [hasData]);

  function showContentWhenSuccess() {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
      setShowContentError(false);
    }, TIMER_OUT);
    return () => clearTimeout(timer);
  }

  function showContentWhenError() {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(false);
      setShowContentError(true);
    }, TIMER_OUT);
    return () => clearTimeout(timer);
  }

  function successCallback(data) {
    dispatch(setHomepageSuccess(data));
  }

  function errorCallback(error) {
    dispatch(setHomepageError(error));
  }

  function renderContainer() {

    return (
      <React.Fragment>
        {/*<Flags dataSuccess={homepageDataSuccess?.data} />*/}
        <RickAndMorty dataSuccess={homepageDataSuccess?.data} />
      </React.Fragment>
    );
  }

  function render() {
    if (loading) {
      return (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      );/*<LoadViews language={language} />*/;
    } else {
      if (showContent) {
        return renderContainer();
      } else {
        if (showContentError) {
          //const errorMessage = homepageDataError?.error?.message ? homepageDataError?.error?.message : homepageDataError?.error;
          return "Dió error..."/*<MessageViews message={errorMessage} />*/;
        }
      }
    }
  }

  return render();
}