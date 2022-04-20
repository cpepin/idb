"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={id:"video",title:"Video"},p=void 0,s={unversionedId:"video",id:"video",title:"Video",description:"idb provides recordings and streams of an attached iOS Simulator or Device. This can be very useful for exposing an iOS Target's screen, or recording an automation for later review.",source:"@site/docs/video.mdx",sourceDirName:".",slug:"/video",permalink:"/docs/video",tags:[],version:"current",frontMatter:{id:"video",title:"Video"},sidebar:"docs",previous:{title:"FBDeviceControl",permalink:"/docs/fbdevicecontrol"},next:{title:"Test Execution",permalink:"/docs/test-execution"}},d={},m=[{value:"Recording",id:"recording",level:2},{value:"Streaming",id:"streaming",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"idb")," provides recordings and streams of an attached iOS Simulator or Device. This can be very useful for exposing an iOS Target's screen, or recording an automation for later review."),(0,r.kt)("h2",{id:"recording"},"Recording"),(0,r.kt)("p",null,"If you wish to make a recording for a target you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"idb record-video FILE_PATH"),"."),(0,r.kt)("p",null,"This can be used to record an mp4 file to disk. The specified ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE_PATH")," can be any location on disk, regardless of the extension it will be an ",(0,r.kt)("inlineCode",{parentName:"p"},"mp4")," video. The video recording will start upon invoking the command, the recording can be stopped by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGTERM")," to the process (i.e. Ctrl-C in a terminal). The video file will only be written to disk upon exit of the ",(0,r.kt)("inlineCode",{parentName:"p"},"idb")," process."),(0,r.kt)("h2",{id:"streaming"},"Streaming"),(0,r.kt)("p",null,"Video streaming allows for live frames to be captured from the iOS Target. Typically, this stream should be piped through another application for consumption, depending on the use-case. ",(0,r.kt)("inlineCode",{parentName:"p"},"idb")," provides raw access to the video, in a variety of encodings, it's left to the user to decide how to combine this with a downstream video streaming pipeline. Streaming video pairs well with ",(0,r.kt)("a",{parentName:"p",href:"accessibility"},"Accessibility commands.")),(0,r.kt)("p",null,"Projects such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.ffmpeg.org"},(0,r.kt)("inlineCode",{parentName:"a"},"ffmpeg"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://gstreamer.freedesktop.org"},(0,r.kt)("inlineCode",{parentName:"a"},"gstreamer"))," are examples of these applications. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"ffmpeg")," can accept streamed ",(0,r.kt)("inlineCode",{parentName:"p"},"h264")," video and expose this over a UDP socket with intermediate transcoding of data."),(0,r.kt)("p",null,"For example, the following invocation can be used to start a video stream and expose it on UDP port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ idb video-stream --fps 30 --format h264 --compression-quality 1.0 --udid EE074DCE-7D75-4F96-A949-82252F5FEC30 | ffmpeg -f h264 -i pipe:0 -vcodec copy -tune zerolatency -b 900k -framerate 30 -f mpegts udp://0.0.0.0:12345\n")),(0,r.kt)("p",null,"Breaking this command down:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idb video-stream")," is the command used in idb to stream video out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--fps 30")," is the number of frames that are produced by ",(0,r.kt)("inlineCode",{parentName:"li"},"idb")," per second. This can be arbitrarily large or small. A higher frame rate will increase system utilization. Increasing the fps may not result in smoother presentation, as an iOS Simulator may be refreshing it's screen less frequently than the target frame rate. Typically an iOS Simulator may not render transparencies at 60fps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--format h264")," represents the format of the video stream itself. A variety of outputs are available:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"h264")," This is an ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Network_Abstraction_Layer#NAL_Units_in_Byte-Stream_Format_Use"},"Annexe-B H.264 Stream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rbga")," is a stream of raw RBGA bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mjpeg")," is an stream of encoed JPEG images, ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Motion_JPEG"},"typically called MJPEG"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minicap")," is ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openstf/minicap"},"format used by the minicap project"),". It's fundementally a MJPEG stream with a header at the start of the stream and length ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openstf/minicap#global-header-binary-format"},"headers per frame"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--compression-quality 1.0")," represents the quality level used for encoded frames, this is a value between 0.0 and 1.0. It applies to all formats except for the raw ",(0,r.kt)("inlineCode",{parentName:"li"},"rbga")," format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idb video-stream")," takes a positional argument for a file path to stream to. When this is not provided, video will be streamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"stdout"),", this can also be achieved by passing ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," as the file path argument.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The output of the idb command is piped to ",(0,r.kt)("inlineCode",{parentName:"li"},"ffmpeg")," in the shell. Pipelining via ",(0,r.kt)("inlineCode",{parentName:"li"},"stdout")," is the easiest way of sending video data from ",(0,r.kt)("inlineCode",{parentName:"li"},"idb")," to an external program (as opposed to using a file)."))),(0,r.kt)("li",{parentName:"ul"},"The arguments for ",(0,r.kt)("inlineCode",{parentName:"li"},"ffmpeg")," relate to:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The parsing of input video from ",(0,r.kt)("inlineCode",{parentName:"li"},"stdin"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"-f h264 -i pipe:0"),"."),(0,r.kt)("li",{parentName:"ul"},"Transcoding it to a lower bitrate and for real-time delivery ",(0,r.kt)("inlineCode",{parentName:"li"},"-tune zerolatency -b 900k"),"."),(0,r.kt)("li",{parentName:"ul"},"Exposing the transcoded video over UDP so that it can be consumed by another application over the network ",(0,r.kt)("inlineCode",{parentName:"li"},"udp://0.0.0.0:12345"),".")))))}u.isMDXComponent=!0}}]);