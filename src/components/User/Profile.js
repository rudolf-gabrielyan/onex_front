import React from 'react';
import './user.scss';

import LeftAdds from './LeftAdds/LeftAdd';
import Home from './Home/Home';
import RightSection from './RightSection/RightSection';

function Profile(props) {
    return (
        <div className="profileContainer">
            <LeftAdds />
            <Home />
            <RightSection /> 
        </div>
    );
}

export default Profile;
