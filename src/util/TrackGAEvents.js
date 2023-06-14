import ReactGA from 'react-ga4';
const TRACKING_ID = 'G-E7TZLZVKN7'

const InitializeGA = () => {
    if (process.env.NODE_ENV === "production") {
        ReactGA.initialize(TRACKING_ID);
        console.log('Google Analytics initialized');
    }
}

const TrackGAEvents = (category, action, label) => {
    if (process.env.NODE_ENV === "production") {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });

        console.log('Google Analytics event tracked');
    }
}

const TrackGAPageView = (page, title = null) => {
    if (process.env.NODE_ENV === "production") {
        ReactGA.send({ hitType: 'pageview', page: page, title: title });
        console.log('Google Analytics page view tracked');
    }
}


export default InitializeGA;
export { InitializeGA, TrackGAEvents, TrackGAPageView }