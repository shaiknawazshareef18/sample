import React from 'react';
import { withRouter } from 'react-router';

const Dashboard = () => {
    return(<h1>This is a protected Route Chuchuness hahaha. If you access this, you hacker hahaha</h1>);
}

export default withRouter(Dashboard);