import React, { useState } from "react";

const ResultCard = ({ destination, shortUrl }) => {
    const [copiedLink, setCopiedLink] = useState("");

    const copyLinkHandler = () => {
        setCopiedLink(shortUrl);
        navigator.clipboard.writeText(shortUrl);
    };
    return (
        <div className="result-card">
            <div className="result-card-header">{destination}</div>
            <div className="result-card-body">
                <p className="result-short-link">{shortUrl}</p>
                <button onClick={copyLinkHandler} className="btn  btn-result">
                    Copy
                </button>
            </div>
        </div>
    );
};

export default ResultCard;
