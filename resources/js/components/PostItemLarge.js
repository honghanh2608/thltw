import React, {Component} from 'react'
import Images from "../Themes/Images";
import PropTypes from 'prop-types';

import '../CSS/mediumish.css'
import '../CSS/bootstrap.min.css'

export default class PostItemLarge extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {data} = this.props;
        return (
            <div className="authorpostbox" style={styles.authorPostBox}>
                <div className="card">
                    <a href={'/post?id=' + data.id}>
                        <img className="img-fluid img-thumb" src={Images.demopic.img8} alt=""/>
                    </a>
                    <div className="card-block">
                        <h4 className="card-title">
                            <a href={'/post?id=' + data.id} style={styles.cardTitle}>
                                <span>{data.title}</span>
                            </a>
                        </h4>
                        <h6 className="card-text">{data.content}</h6>
                        <div className="metafooter">
                            <div className="wrapfooter">
                                <span className="meta-footer-thumb">
                                    <span>
                                        <img className="author-thumb"
                                             src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                                             alt="Sal"/>
                                    </span>
                                </span>
                                <span className="author-meta">
                                    <span className="post-name">
                                        <a href={'/author?id=' + data.user_id}>
                                            <span>Sal</span>
                                        </a>
                                    </span>
                                    <br/>
                                    <span className="post-date">22 July 2017</span>
                                    <span className="dot"/>
                                    <span className="post-read">6 min read</span>
                                </span>
                                <span className="post-read-more">
                                    <a href={'/post?id=' + data.id}>
                                        <span title="Read Story">
                                            <svg className="svgIcon-use" width="25" height="25"
                                                 viewBox="0 0 25 25">
                                                <path
                                                    d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                                    fillRule="evenodd"/>
                                            </svg>
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const styles = {
    authorPostBox: {
        width: '100%',
        margin: 0,
        marginBottom: '1.5rem',
        maxWidth: '100%'
    },
    cardTitle: {
        color: 'rgba(0,0,0,0.8)',
        textDecorationColor: 'transparent'
    }
};

PostItemLarge.propTypes = {
    data: PropTypes.object
};
