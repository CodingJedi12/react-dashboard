import React from 'react';
import AvgRating from './AvgRating';
import Reviews from './Reviews';
import Sentiment from './Sentiment';
import Sidebar from './Sidebar';
import Visitors from './Visitors';

function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />
            <Reviews totReviews="1,281" />
            <AvgRating rating="4.6" />
            <Sentiment analysisOne="960" analysisTwo="122" analysisThree="321"/>
            <Visitors numVisitors="821" />
        </div>
    );
}

export default Dashboard;