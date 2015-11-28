/* Copyright 2015 Christine S. MacNeill

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by appli cable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

// Types of format - v1.0

// A URN describing the data format of a video, audio or event flow.

var formats = Object.freeze({
  video: "urn:x-ipstudio:format:video",
  audio: "urn:x-ipstudio:format:audio",
  event: "urn:x-ipstudio:format:event",
  validFormat: function (f) {
    return f === formats.video || f === formats.audio || f === formats.event;
  }
});

module.exports = formats;
