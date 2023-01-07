

// Returns format for pages that involve iterating over a list of content.
import React from "react";

export const ListPage = ({MobileComponent, NonmobileComponent, header}) => {
    return (
        <div className={"page-container"}>
            <h1 className={"page-header"}>{header}</h1>
            <div className="page-mobile">
                {MobileComponent}
            </div>
            <div className="page-nonmobile">
                {NonmobileComponent}
            </div>
        </div>
    )
};