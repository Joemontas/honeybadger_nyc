import React from 'react';

const Articleview = ({ tittle, author, openModal }) => {
    return (
        <div onClick={openModal}>
            <h1>{title}</h1>
            <h3>{author}</h3>
        </div>
    )
}

export default ArticleView;