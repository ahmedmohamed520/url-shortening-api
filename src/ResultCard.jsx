import React, { useState } from "react";

const ResultCard = ({ destination, shortUrl, copiedLink, setCopiedLink }) => {
    const copyLinkHandler = () => {
        setCopiedLink(shortUrl);
        navigator.clipboard.writeText(shortUrl);
    };
    return (
        <div className="result-card">
            <div className="result-card-header">{destination}</div>
            <div className="result-card-body">
                <p className="result-short-link">{shortUrl}</p>
                <button
                    onClick={copyLinkHandler}
                    className={`btn  btn-result ${copiedLink === shortUrl && "choosen-btn"}`}
                >
                    {copiedLink === shortUrl ? "Copied!" : "Copy"}
                </button>
            </div>
        </div>
    );
};

export default ResultCard;
