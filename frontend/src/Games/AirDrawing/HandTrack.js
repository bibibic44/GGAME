// import React, { useEffect } from "react";
// import * as handTrack from "handtrackjs";

// // const video = document.getElementById("myvideo");
// // const canvas = document.getElementById("canvas");
// // const context = canvas.getContext("2d");
// // let trackButton = document.getElementById("trackbutton");
// // let updateNote = document.getElementById("updatenote");

// // let isVideo = false;
// // let model = null;

// // const modelParams = {
// //   flipHorizontal: true, // flip e.g for video
// //   maxNumBoxes: 20, // maximum number of boxes to detect
// //   iouThreshold: 0.5, // ioU threshold for non-max suppression
// //   scoreThreshold: 0.6, // confidence threshold for predictions.
// // };

// // function startVideo() {
// //   handTrack.startVideo(video).then(function (status) {
// //     console.log("video started", status);
// //     if (status) {
// //       updateNote.innerText = "Video started. Now tracking";
// //       isVideo = true;
// //       runDetection();
// //     } else {
// //       updateNote.innerText = "Please enable video";
// //     }
// //   });
// // }

// // function toggleVideo() {
// //   if (!isVideo) {
// //     updateNote.innerText = "Starting video";
// //     startVideo();
// //   } else {
// //     updateNote.innerText = "Stopping video";
// //     handTrack.stopVideo(video);
// //     isVideo = false;
// //     updateNote.innerText = "Video stopped";
// //   }
// // }

// // function runDetection() {
// //   model.detect(video).then((predictions) => {
// //     console.log("Predictions: ", predictions);
// //     model.renderPredictions(predictions, canvas, context, video);
// //     if (isVideo) {
// //       requestAnimationFrame(runDetection);
// //     }
// //   });
// // }

// // // Load the model.
// // handTrack.load(modelParams).then((lmodel) => {
// //   // detect objects in the image.
// //   model = lmodel;
// //   updateNote.innerText = "Loaded Model!";
// //   trackButton.disabled = false;
// // });

// function HandTrack() {
//   useEffect(() => {
//     return () => {};
//   }, []);

//   return (
//     <div>
//       <div class="p20">
//         Handtrack.js allows you prototype handtracking interactions in the browser in 10 lines of
//         code.
//       </div>
//       <div class="mb10">
//         <button
//           onclick="toggleVideo()"
//           id="trackbutton"
//           class="bx--btn bx--btn--secondary"
//           type="button"
//         >
//           Toggle Video
//         </button>
//         <div id="updatenote" class="updatenote mt10">
//           {" "}
//           loading model ..
//         </div>
//       </div>
//       <video class="videobox canvasbox" autoplay="autoplay" id="myvideo"></video>

//       <canvas id="canvas" class="border canvasbox"></canvas>
//     </div>
//   );
// }

// export default HandTrack;
