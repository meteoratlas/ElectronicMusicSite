import React, { Component } from "react";
import { Link } from "react-scroll";

class PageBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <div className="page-bottom">
                    <h3>Return to top</h3>
                </div>
            </Link>
        );
    }
}

export default PageBottom;
