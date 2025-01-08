import React from "react";

const Loading = () => {
  return (
    <>
      <style>{`
        .loader {
        width: fit-content;
        font-size: 40px;
        line-height: 1.5;
        font-family: system-ui,sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        color: #0000;
        -webkit-text-stroke: 1px #000;
        background:
            radial-gradient(1.13em at 50% 1.6em,#000 99%,#0000 101%) calc(50% - 1.6em) 0/3.2em 100% text,
            radial-gradient(1.13em at 50% -0.8em,#0000 99%,#000 101%) 50% .8em/3.2em 100% repeat-x  text;
        animation: l9 2s linear infinite;
        }
        .loader:before {
        content: "Loading";
        }
        @keyframes l9 {
        to {background-position: calc(50% + 1.6em) 0,calc(50% + 3.2em) .8em}
        }
    `}
    </style>
      <div className=" h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    </>
  );
};

export default Loading;
