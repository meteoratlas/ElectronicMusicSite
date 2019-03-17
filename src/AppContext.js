import React, { Component } from 'react';

class AppContext extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const context = React.createContext();

        return ( 
            <context.Provider value={{
                modalActive: false
            }}>
                {this.props.children}
            </context.Provider>
         );
    }
}
 
export default AppContext;