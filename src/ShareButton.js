import React from 'react';

//props: activity link
function ShareButton(props)
{
    function shareResource()
    {

        const shareData ={
            title:props.activity.title,
            text:props.activity.description[0],
            url:props.link
        }
        console.log("shareData",shareData);
        function handleRejected(reason)
        {
            console.log(reason);
            window.alert("Your device is unable to share.  Please check your settings or use a supported web browser");
        }

        function handleSuccess(value)
        {}

        var sharePromise = navigator.share(shareData);
        sharePromise.then(handleSuccess,handleRejected);
    }


    if(navigator.share)
    {
    return (

<span className="sharing">
    <button className = "smallButtonSVG" onClick={
        () => shareResource()
    }>
    {/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
    </svg>

    </button>
</span>
    )}
    else
    {
        <></>
    }
}

export default ShareButton