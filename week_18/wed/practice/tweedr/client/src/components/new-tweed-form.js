import React from 'react';

class NewTweedForm extends Component {
    constructor(props) {
    super(props) {
    this.state = {
        content: '',
        author: ''
    }
}

        render() {
            return (
                <div id="new-tweed-form">
                    <input type="text" name="content" placeholder="What's on your mind?" value={content} /><br/>
                   <input type="text" name="author" placeholder="Who are you?" value={author} /><br/>
                   <button id="submit" >Tweed It</button>
                </div>
            )
        }
    }
}

    )
}