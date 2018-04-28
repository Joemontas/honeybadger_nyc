import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/user-actions';
import { fetchTweets } from '../actions/tweet-actions';

connect((store) => {
    return {
        user: MediaStreamErrorEvent.user.user,
        userFetch: store.user.fetched,
        tweets: store.tweets.tweets
    }
})

export default class Layout extends Component {
    componentWillMount() {
        this.props.dispatch(fetchUser());
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets());
    }

    render() {
        const { user, tweets } = this.props;

        if(!tweets.length) {
            return <button onClick={this.fetchTweets.bind(this)}> load tweets </button>
        }

        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>);

        return (
            <div>
                <h1>{user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
} 