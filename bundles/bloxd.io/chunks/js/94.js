/*! For license information please see wd13r.94.581f01b3.chunk.js.LICENSE.txt */
export const id = 94;
export const ids = [94];
export const modules = {
  4626: (DD, CD, cD) => {
    var ID;
    ! function() {
      var pD = function() {
        this.init()
      };
      pD.prototype = {
        init: function() {
          var DD = this || iD;
          return DD._counter = 1e3, DD._html5AudioPool = [], DD.html5PoolSize = 10, DD._codecs = {}, DD._howls = [], DD._muted = !1, DD._volume = 1, DD._canPlayEvent = "canplaythrough", DD._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, DD.masterGain = null, DD.noAudio = !1, DD.usingWebAudio = !0, DD.autoSuspend = !0, DD.ctx = null, DD.autoUnlock = !0, DD._setup(), DD
        },
        volume: function(DD) {
          var CD = this || iD;
          if (DD = parseFloat(DD), CD.ctx || MD(), "undefined" !== typeof DD && DD >= 0 && DD <= 1) {
            if (CD._volume = DD, CD._muted) return CD;
            CD.usingWebAudio && CD.masterGain.gain.setValueAtTime(DD, iD.ctx.currentTime);
            for (var cD = 0; cD < CD._howls.length; cD++)
              if (!CD._howls[cD]._webAudio)
                for (var ID = CD._howls[cD]._getSoundIds(), pD = 0; pD < ID.length; pD++) {
                  var fD = CD._howls[cD]._soundById(ID[pD]);
                  fD && fD._node && (fD._node.volume = fD._volume * DD)
                }
            return CD
          }
          return CD._volume
        },
        mute: function(DD) {
          var CD = this || iD;
          CD.ctx || MD(), CD._muted = DD, CD.usingWebAudio && CD.masterGain.gain.setValueAtTime(DD ? 0 : CD._volume, iD.ctx.currentTime);
          for (var cD = 0; cD < CD._howls.length; cD++)
            if (!CD._howls[cD]._webAudio)
              for (var ID = CD._howls[cD]._getSoundIds(), pD = 0; pD < ID.length; pD++) {
                var fD = CD._howls[cD]._soundById(ID[pD]);
                fD && fD._node && (fD._node.muted = !!DD || fD._muted)
              }
          return CD
        },
        stop: function() {
          for (var DD = this || iD, CD = 0; CD < DD._howls.length; CD++) DD._howls[CD].stop();
          return DD
        },
        unload: function() {
          for (var DD = this || iD, CD = DD._howls.length - 1; CD >= 0; CD--) DD._howls[CD].unload();
          return DD.usingWebAudio && DD.ctx && "undefined" !== typeof DD.ctx.close && (DD.ctx.close(), DD.ctx = null, MD()), DD
        },
        codecs: function(DD) {
          return (this || iD)._codecs[DD.replace(/^x-/, "")]
        },
        _setup: function() {
          var DD = this || iD;
          if (DD.state = DD.ctx && DD.ctx.state || "suspended", DD._autoSuspend(), !DD.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (DD._canPlayEvent = "canplay")
            } catch (CD) {
              DD.noAudio = !0
            } else DD.noAudio = !0;
          try {
            (new Audio).muted && (DD.noAudio = !0)
          } catch (CD) {}
          return DD.noAudio || DD._setupCodecs(), DD
        },
        _setupCodecs: function() {
          var DD = this || iD,
            CD = null;
          try {
            CD = "undefined" !== typeof Audio ? new Audio : null
          } catch (SD) {
            return DD
          }
          if (!CD || "function" !== typeof CD.canPlayType) return DD;
          var cD = CD.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            ID = DD._navigator ? DD._navigator.userAgent : "",
            pD = ID.match(/OPR\/([0-6].)/g),
            fD = pD && parseInt(pD[0].split("/")[1], 10) < 33,
            bD = -1 !== ID.indexOf("Safari") && -1 === ID.indexOf("Chrome"),
            QD = ID.match(/Version\/(.*?) /),
            wD = bD && QD && parseInt(QD[1], 10) < 15;
          return DD._codecs = {
            mp3: !(fD || !cD && !CD.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!cD,
            opus: !!CD.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!CD.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!CD.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(CD.canPlayType('audio/wav; codecs="1"') || CD.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!CD.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!CD.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(CD.canPlayType("audio/x-m4a;") || CD.canPlayType("audio/m4a;") || CD.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(CD.canPlayType("audio/x-m4b;") || CD.canPlayType("audio/m4b;") || CD.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(CD.canPlayType("audio/x-mp4;") || CD.canPlayType("audio/mp4;") || CD.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(wD || !CD.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(wD || !CD.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!CD.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(CD.canPlayType("audio/x-flac;") || CD.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, DD
        },
        _unlockAudio: function() {
          var DD = this || iD;
          if (!DD._audioUnlocked && DD.ctx) {
            DD._audioUnlocked = !1, DD.autoUnlock = !1, DD._mobileUnloaded || 44100 === DD.ctx.sampleRate || (DD._mobileUnloaded = !0, DD.unload()), DD._scratchBuffer = DD.ctx.createBuffer(1, 1, 22050);
            var CD = function(cD) {
              for (; DD._html5AudioPool.length < DD.html5PoolSize;) try {
                var ID = new Audio;
                ID._unlocked = !0, DD._releaseHtml5Audio(ID)
              } catch (cD) {
                DD.noAudio = !0;
                break
              }
              for (var pD = 0; pD < DD._howls.length; pD++)
                if (!DD._howls[pD]._webAudio)
                  for (var iD = DD._howls[pD]._getSoundIds(), fD = 0; fD < iD.length; fD++) {
                    var bD = DD._howls[pD]._soundById(iD[fD]);
                    bD && bD._node && !bD._node._unlocked && (bD._node._unlocked = !0, bD._node.load())
                  }
              DD._autoResume();
              var QD = DD.ctx.createBufferSource();
              QD.buffer = DD._scratchBuffer, QD.connect(DD.ctx.destination), "undefined" === typeof QD.start ? QD.noteOn(0) : QD.start(0), "function" === typeof DD.ctx.resume && DD.ctx.resume(), QD.onended = function() {
                QD.disconnect(0), DD._audioUnlocked = !0, document.removeEventListener("touchstart", CD, !0), document.removeEventListener("touchend", CD, !0), document.removeEventListener("click", CD, !0), document.removeEventListener("keydown", CD, !0);
                for (var cD = 0; cD < DD._howls.length; cD++) DD._howls[cD]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", CD, !0), document.addEventListener("touchend", CD, !0), document.addEventListener("click", CD, !0), document.addEventListener("keydown", CD, !0), DD
          }
        },
        _obtainHtml5Audio: function() {
          var DD = this || iD;
          if (DD._html5AudioPool.length) return DD._html5AudioPool.pop();
          var CD = (new Audio).play();
          return CD && "undefined" !== typeof Promise && (CD instanceof Promise || "function" === typeof CD.then) && CD.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(DD) {
          var CD = this || iD;
          return DD._unlocked && CD._html5AudioPool.push(DD), CD
        },
        _autoSuspend: function() {
          var DD = this;
          if (DD.autoSuspend && DD.ctx && "undefined" !== typeof DD.ctx.suspend && iD.usingWebAudio) {
            for (var CD = 0; CD < DD._howls.length; CD++)
              if (DD._howls[CD]._webAudio)
                for (var cD = 0; cD < DD._howls[CD]._sounds.length; cD++)
                  if (!DD._howls[CD]._sounds[cD].fn) return DD;
            return DD._suspendTimer && clearTimeout(DD._suspendTimer), DD._suspendTimer = setTimeout((function() {
              if (DD.autoSuspend) {
                DD._suspendTimer = null, DD.state = "suspending";
                var CD = function() {
                  DD.state = "suspended", DD._resumeAfterSuspend && (delete DD._resumeAfterSuspend, DD._autoResume())
                };
                DD.ctx.suspend().then(CD, CD)
              }
            }), 3e4), DD
          }
        },
        _autoResume: function() {
          var DD = this;
          if (DD.ctx && "undefined" !== typeof DD.ctx.resume && iD.usingWebAudio) return "running" === DD.state && "interrupted" !== DD.ctx.state && DD._suspendTimer ? (clearTimeout(DD._suspendTimer), DD._suspendTimer = null) : "suspended" === DD.state || "running" === DD.state && "interrupted" === DD.ctx.state ? (DD.ctx.resume().then((function() {
            DD.state = "running";
            for (var CD = 0; CD < DD._howls.length; CD++) DD._howls[CD]._emit("resume")
          })), DD._suspendTimer && (clearTimeout(DD._suspendTimer), DD._suspendTimer = null)) : "suspending" === DD.state && (DD._resumeAfterSuspend = !0), DD
        }
      };
      var iD = new pD,
        fD = function(DD) {
          DD.src && 0 !== DD.src.length ? this.init(DD) : console.error("An array of source files must be passed with any new Howl.")
        };
      fD.prototype = {
        init: function(DD) {
          var CD = this;
          return iD.ctx || MD(), CD._autoplay = DD.autoplay || !1, CD._format = "string" !== typeof DD.format ? DD.format : [DD.format], CD._html5 = DD.html5 || !1, CD._muted = DD.mute || !1, CD._loop = DD.loop || !1, CD._pool = DD.pool || 5, CD._preload = "boolean" !== typeof DD.preload && "metadata" !== DD.preload || DD.preload, CD._rate = DD.rate || 1, CD._sprite = DD.sprite || {}, CD._src = "string" !== typeof DD.src ? DD.src : [DD.src], CD._volume = void 0 !== DD.volume ? DD.volume : 1, CD._xhr = {
            method: DD.xhr && DD.xhr.method ? DD.xhr.method : "GET",
            headers: DD.xhr && DD.xhr.headers ? DD.xhr.headers : null,
            withCredentials: !(!DD.xhr || !DD.xhr.withCredentials) && DD.xhr.withCredentials
          }, CD._duration = 0, CD._state = "unloaded", CD._sounds = [], CD._endTimers = {}, CD._queue = [], CD._playLock = !1, CD._onend = DD.onend ? [{
            Ot: DD.onend
          }] : [], CD._onfade = DD.onfade ? [{
            Ot: DD.onfade
          }] : [], CD._onload = DD.onload ? [{
            Ot: DD.onload
          }] : [], CD._onloaderror = DD.onloaderror ? [{
            Ot: DD.onloaderror
          }] : [], CD._onplayerror = DD.onplayerror ? [{
            Ot: DD.onplayerror
          }] : [], CD._onpause = DD.onpause ? [{
            Ot: DD.onpause
          }] : [], CD._onplay = DD.onplay ? [{
            Ot: DD.onplay
          }] : [], CD._onstop = DD.onstop ? [{
            Ot: DD.onstop
          }] : [], CD._onmute = DD.onmute ? [{
            Ot: DD.onmute
          }] : [], CD._onvolume = DD.onvolume ? [{
            Ot: DD.onvolume
          }] : [], CD._onrate = DD.onrate ? [{
            Ot: DD.onrate
          }] : [], CD._onseek = DD.onseek ? [{
            Ot: DD.onseek
          }] : [], CD._onunlock = DD.onunlock ? [{
            Ot: DD.onunlock
          }] : [], CD._onresume = [], CD._webAudio = iD.usingWebAudio && !CD._html5, "undefined" !== typeof iD.ctx && iD.ctx && iD.autoUnlock && iD._unlockAudio(), iD._howls.push(CD), CD._autoplay && CD._queue.push({
            event: "play",
            action: function() {
              CD.play()
            }
          }), CD._preload && "none" !== CD._preload && CD.load(), CD
        },
        load: function() {
          var DD = this,
            CD = null;
          if (iD.noAudio) DD._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof DD._src && (DD._src = [DD._src]);
            for (var cD = 0; cD < DD._src.length; cD++) {
              var ID, pD;
              if (DD._format && DD._format[cD]) ID = DD._format[cD];
              else {
                if ("string" !== typeof(pD = DD._src[cD])) {
                  DD._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(ID = /^data:audio\/([^;,]+);/i.exec(pD)) || (ID = /\.([^.]+)$/.exec(pD.split("?", 1)[0])), ID && (ID = ID[1].toLowerCase())
              }
              if (ID || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), ID && iD.codecs(ID)) {
                CD = DD._src[cD];
                break
              }
            }
            if (CD) return DD._src = CD, DD._state = "loading", "https:" === window.location.protocol && "http:" === CD.slice(0, 5) && (DD._html5 = !0, DD._webAudio = !1), new bD(DD), DD._webAudio && wD(DD), DD;
            DD._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(DD, CD) {
          var cD = this,
            ID = null;
          if ("number" === typeof DD) ID = DD, DD = null;
          else {
            if ("string" === typeof DD && "loaded" === cD._state && !cD._sprite[DD]) return null;
            if ("undefined" === typeof DD && (DD = "__default", !cD._playLock)) {
              for (var pD = 0, fD = 0; fD < cD._sounds.length; fD++) cD._sounds[fD].fn && !cD._sounds[fD]._ended && (pD++, ID = cD._sounds[fD]._id);
              1 === pD ? DD = null : ID = null
            }
          }
          var bD = ID ? cD._soundById(ID) : cD._inactiveSound();
          if (!bD) return null;
          if (ID && !DD && (DD = bD._sprite || "__default"), "loaded" !== cD._state) {
            bD._sprite = DD, bD._ended = !1;
            var QD = bD._id;
            return cD._queue.push({
              event: "play",
              action: function() {
                cD.play(QD)
              }
            }), QD
          }
          if (ID && !bD.fn) return CD || cD._loadQueue("play"), bD._id;
          cD._webAudio && iD._autoResume();
          var wD = Math.max(0, bD._seek > 0 ? bD._seek : cD._sprite[DD][0] / 1e3),
            SD = Math.max(0, (cD._sprite[DD][0] + cD._sprite[DD][1]) / 1e3 - wD),
            BD = 1e3 * SD / Math.abs(bD._rate),
            yD = cD._sprite[DD][0] / 1e3,
            MD = (cD._sprite[DD][0] + cD._sprite[DD][1]) / 1e3;
          bD._sprite = DD, bD._ended = !1;
          var tD = function() {
            bD.fn = !1, bD._seek = wD, bD._start = yD, bD._stop = MD, bD._loop = !(!bD._loop && !cD._sprite[DD][2])
          };
          if (!(wD >= MD)) {
            var ZD = bD._node;
            if (cD._webAudio) {
              var oD = function() {
                cD._playLock = !1, tD(), cD._refreshBuffer(bD);
                var DD = bD._muted || cD._muted ? 0 : bD._volume;
                ZD.gain.setValueAtTime(DD, iD.ctx.currentTime), bD._playStart = iD.ctx.currentTime, "undefined" === typeof ZD.bufferSource.start ? bD._loop ? ZD.bufferSource.noteGrainOn(0, wD, 86400) : ZD.bufferSource.noteGrainOn(0, wD, SD) : bD._loop ? ZD.bufferSource.start(0, wD, 86400) : ZD.bufferSource.start(0, wD, SD), BD !== 1 / 0 && (cD._endTimers[bD._id] = setTimeout(cD._ended.bind(cD, bD), BD)), CD || setTimeout((function() {
                  cD._emit("play", bD._id), cD._loadQueue()
                }), 0)
              };
              "running" === iD.state && "interrupted" !== iD.ctx.state ? oD() : (cD._playLock = !0, cD.once("resume", oD), cD._clearTimer(bD._id))
            } else {
              var vD = function() {
                ZD.currentTime = wD, ZD.muted = bD._muted || cD._muted || iD._muted || ZD.muted, ZD.volume = bD._volume * iD.volume(), ZD.playbackRate = bD._rate;
                try {
                  var ID = ZD.play();
                  if (ID && "undefined" !== typeof Promise && (ID instanceof Promise || "function" === typeof ID.then) ? (cD._playLock = !0, tD(), ID.then((function() {
                      cD._playLock = !1, ZD._unlocked = !0, CD ? cD._loadQueue() : cD._emit("play", bD._id)
                    })).catch((function() {
                      cD._playLock = !1, cD._emit("playerror", bD._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), bD._ended = !0, bD.fn = !0
                    }))) : CD || (cD._playLock = !1, tD(), cD._emit("play", bD._id)), ZD.playbackRate = bD._rate, ZD.paused) return void cD._emit("playerror", bD._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== DD || bD._loop ? cD._endTimers[bD._id] = setTimeout(cD._ended.bind(cD, bD), BD) : (cD._endTimers[bD._id] = function() {
                    cD._ended(bD), ZD.removeEventListener("ended", cD._endTimers[bD._id], !1)
                  }, ZD.addEventListener("ended", cD._endTimers[bD._id], !1))
                } catch (pD) {
                  cD._emit("playerror", bD._id, pD)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === ZD.src && (ZD.src = cD._src, ZD.load());
              var ND = window && window.ejecta || !ZD.readyState && iD._navigator.isCocoonJS;
              if (ZD.readyState >= 3 || ND) vD();
              else {
                cD._playLock = !0, cD._state = "loading";
                var gD = function() {
                  cD._state = "loaded", vD(), ZD.removeEventListener(iD._canPlayEvent, gD, !1)
                };
                ZD.addEventListener(iD._canPlayEvent, gD, !1), cD._clearTimer(bD._id)
              }
            }
            return bD._id
          }
          cD._ended(bD)
        },
        pause: function(DD) {
          var CD = this;
          if ("loaded" !== CD._state || CD._playLock) return CD._queue.push({
            event: "pause",
            action: function() {
              CD.pause(DD)
            }
          }), CD;
          for (var cD = CD._getSoundIds(DD), ID = 0; ID < cD.length; ID++) {
            CD._clearTimer(cD[ID]);
            var pD = CD._soundById(cD[ID]);
            if (pD && !pD.fn && (pD._seek = CD.seek(cD[ID]), pD._rateSeek = 0, pD.fn = !0, CD._stopFade(cD[ID]), pD._node))
              if (CD._webAudio) {
                if (!pD._node.bufferSource) continue;
                "undefined" === typeof pD._node.bufferSource.stop ? pD._node.bufferSource.noteOff(0) : pD._node.bufferSource.stop(0), CD._cleanBuffer(pD._node)
              } else isNaN(pD._node.duration) && pD._node.duration !== 1 / 0 || pD._node.pause();
            arguments[1] || CD._emit("pause", pD ? pD._id : null)
          }
          return CD
        },
        stop: function(DD, CD) {
          var cD = this;
          if ("loaded" !== cD._state || cD._playLock) return cD._queue.push({
            event: "stop",
            action: function() {
              cD.stop(DD)
            }
          }), cD;
          for (var ID = cD._getSoundIds(DD), pD = 0; pD < ID.length; pD++) {
            cD._clearTimer(ID[pD]);
            var iD = cD._soundById(ID[pD]);
            iD && (iD._seek = iD._start || 0, iD._rateSeek = 0, iD.fn = !0, iD._ended = !0, cD._stopFade(ID[pD]), iD._node && (cD._webAudio ? iD._node.bufferSource && ("undefined" === typeof iD._node.bufferSource.stop ? iD._node.bufferSource.noteOff(0) : iD._node.bufferSource.stop(0), cD._cleanBuffer(iD._node)) : isNaN(iD._node.duration) && iD._node.duration !== 1 / 0 || (iD._node.currentTime = iD._start || 0, iD._node.pause(), iD._node.duration === 1 / 0 && cD._clearSound(iD._node))), CD || cD._emit("stop", iD._id))
          }
          return cD
        },
        mute: function(DD, CD) {
          var cD = this;
          if ("loaded" !== cD._state || cD._playLock) return cD._queue.push({
            event: "mute",
            action: function() {
              cD.mute(DD, CD)
            }
          }), cD;
          if ("undefined" === typeof CD) {
            if ("boolean" !== typeof DD) return cD._muted;
            cD._muted = DD
          }
          for (var ID = cD._getSoundIds(CD), pD = 0; pD < ID.length; pD++) {
            var fD = cD._soundById(ID[pD]);
            fD && (fD._muted = DD, fD._interval && cD._stopFade(fD._id), cD._webAudio && fD._node ? fD._node.gain.setValueAtTime(DD ? 0 : fD._volume, iD.ctx.currentTime) : fD._node && (fD._node.muted = !!iD._muted || DD), cD._emit("mute", fD._id))
          }
          return cD
        },
        volume: function() {
          var DD, CD, cD, ID = this,
            pD = arguments;
          if (0 === pD.length) return ID._volume;
          if (1 === pD.length || 2 === pD.length && "undefined" === typeof pD[1] ? ID._getSoundIds().indexOf(pD[0]) >= 0 ? CD = parseInt(pD[0], 10) : DD = parseFloat(pD[0]) : pD.length >= 2 && (DD = parseFloat(pD[0]), CD = parseInt(pD[1], 10)), !("undefined" !== typeof DD && DD >= 0 && DD <= 1)) return (cD = CD ? ID._soundById(CD) : ID._sounds[0]) ? cD._volume : 0;
          if ("loaded" !== ID._state || ID._playLock) return ID._queue.push({
            event: "volume",
            action: function() {
              ID.volume.apply(ID, pD)
            }
          }), ID;
          "undefined" === typeof CD && (ID._volume = DD), CD = ID._getSoundIds(CD);
          for (var fD = 0; fD < CD.length; fD++)(cD = ID._soundById(CD[fD])) && (cD._volume = DD, pD[2] || ID._stopFade(CD[fD]), ID._webAudio && cD._node && !cD._muted ? cD._node.gain.setValueAtTime(DD, iD.ctx.currentTime) : cD._node && !cD._muted && (cD._node.volume = DD * iD.volume()), ID._emit("volume", cD._id));
          return ID
        },
        fade: function(DD, CD, cD, ID) {
          var pD = this;
          if ("loaded" !== pD._state || pD._playLock) return pD._queue.push({
            event: "fade",
            action: function() {
              pD.fade(DD, CD, cD, ID)
            }
          }), pD;
          DD = Math.min(Math.max(0, parseFloat(DD)), 1), CD = Math.min(Math.max(0, parseFloat(CD)), 1), cD = parseFloat(cD), pD.volume(DD, ID);
          for (var fD = pD._getSoundIds(ID), bD = 0; bD < fD.length; bD++) {
            var QD = pD._soundById(fD[bD]);
            if (QD) {
              if (ID || pD._stopFade(fD[bD]), pD._webAudio && !QD._muted) {
                var wD = iD.ctx.currentTime,
                  SD = wD + cD / 1e3;
                QD._volume = DD, QD._node.gain.setValueAtTime(DD, wD), QD._node.gain.linearRampToValueAtTime(CD, SD)
              }
              pD._startFadeInterval(QD, DD, CD, cD, fD[bD], "undefined" === typeof ID)
            }
          }
          return pD
        },
        _startFadeInterval: function(DD, CD, cD, ID, pD, iD) {
          var fD = this,
            bD = CD,
            QD = cD - CD,
            wD = Math.abs(QD / .01),
            SD = Math.max(4, wD > 0 ? ID / wD : ID),
            BD = Date.now();
          DD._fadeTo = cD, DD._interval = setInterval((function() {
            var pD = (Date.now() - BD) / ID;
            BD = Date.now(), bD += QD * pD, bD = Math.round(100 * bD) / 100, bD = QD < 0 ? Math.max(cD, bD) : Math.min(cD, bD), fD._webAudio ? DD._volume = bD : fD.volume(bD, DD._id, !0), iD && (fD._volume = bD), (cD < CD && bD <= cD || cD > CD && bD >= cD) && (clearInterval(DD._interval), DD._interval = null, DD._fadeTo = null, fD.volume(cD, DD._id), fD._emit("fade", DD._id))
          }), SD)
        },
        _stopFade: function(DD) {
          var CD = this,
            cD = CD._soundById(DD);
          return cD && cD._interval && (CD._webAudio && cD._node.gain.cancelScheduledValues(iD.ctx.currentTime), clearInterval(cD._interval), cD._interval = null, CD.volume(cD._fadeTo, DD), cD._fadeTo = null, CD._emit("fade", DD)), CD
        },
        loop: function() {
          var DD, CD, cD, ID = this,
            pD = arguments;
          if (0 === pD.length) return ID._loop;
          if (1 === pD.length) {
            if ("boolean" !== typeof pD[0]) return !!(cD = ID._soundById(parseInt(pD[0], 10))) && cD._loop;
            DD = pD[0], ID._loop = DD
          } else 2 === pD.length && (DD = pD[0], CD = parseInt(pD[1], 10));
          for (var iD = ID._getSoundIds(CD), fD = 0; fD < iD.length; fD++)(cD = ID._soundById(iD[fD])) && (cD._loop = DD, ID._webAudio && cD._node && cD._node.bufferSource && (cD._node.bufferSource.loop = DD, DD && (cD._node.bufferSource.loopStart = cD._start || 0, cD._node.bufferSource.loopEnd = cD._stop, ID.playing(iD[fD]) && (ID.pause(iD[fD], !0), ID.play(iD[fD], !0)))));
          return ID
        },
        rate: function() {
          var DD, CD, cD, ID = this,
            pD = arguments;
          if (0 === pD.length) CD = ID._sounds[0]._id;
          else if (1 === pD.length) {
            ID._getSoundIds().indexOf(pD[0]) >= 0 ? CD = parseInt(pD[0], 10) : DD = parseFloat(pD[0])
          } else 2 === pD.length && (DD = parseFloat(pD[0]), CD = parseInt(pD[1], 10));
          if ("number" !== typeof DD) return (cD = ID._soundById(CD)) ? cD._rate : ID._rate;
          if ("loaded" !== ID._state || ID._playLock) return ID._queue.push({
            event: "rate",
            action: function() {
              ID.rate.apply(ID, pD)
            }
          }), ID;
          "undefined" === typeof CD && (ID._rate = DD), CD = ID._getSoundIds(CD);
          for (var fD = 0; fD < CD.length; fD++)
            if (cD = ID._soundById(CD[fD])) {
              ID.playing(CD[fD]) && (cD._rateSeek = ID.seek(CD[fD]), cD._playStart = ID._webAudio ? iD.ctx.currentTime : cD._playStart), cD._rate = DD, ID._webAudio && cD._node && cD._node.bufferSource ? cD._node.bufferSource.playbackRate.setValueAtTime(DD, iD.ctx.currentTime) : cD._node && (cD._node.playbackRate = DD);
              var bD = ID.seek(CD[fD]),
                QD = 1e3 * ((ID._sprite[cD._sprite][0] + ID._sprite[cD._sprite][1]) / 1e3 - bD) / Math.abs(cD._rate);
              !ID._endTimers[CD[fD]] && cD.fn || (ID._clearTimer(CD[fD]), ID._endTimers[CD[fD]] = setTimeout(ID._ended.bind(ID, cD), QD)), ID._emit("rate", cD._id)
            } return ID
        },
        seek: function() {
          var DD, CD, cD = this,
            ID = arguments;
          if (0 === ID.length) cD._sounds.length && (CD = cD._sounds[0]._id);
          else if (1 === ID.length) {
            cD._getSoundIds().indexOf(ID[0]) >= 0 ? CD = parseInt(ID[0], 10) : cD._sounds.length && (CD = cD._sounds[0]._id, DD = parseFloat(ID[0]))
          } else 2 === ID.length && (DD = parseFloat(ID[0]), CD = parseInt(ID[1], 10));
          if ("undefined" === typeof CD) return 0;
          if ("number" === typeof DD && ("loaded" !== cD._state || cD._playLock)) return cD._queue.push({
            event: "seek",
            action: function() {
              cD.seek.apply(cD, ID)
            }
          }), cD;
          var pD = cD._soundById(CD);
          if (pD) {
            if (!("number" === typeof DD && DD >= 0)) {
              if (cD._webAudio) {
                var fD = cD.playing(CD) ? iD.ctx.currentTime - pD._playStart : 0,
                  bD = pD._rateSeek ? pD._rateSeek - pD._seek : 0;
                return pD._seek + (bD + fD * Math.abs(pD._rate))
              }
              return pD._node.currentTime
            }
            var QD = cD.playing(CD);
            QD && cD.pause(CD, !0), pD._seek = DD, pD._ended = !1, cD._clearTimer(CD), cD._webAudio || !pD._node || isNaN(pD._node.duration) || (pD._node.currentTime = DD);
            var wD = function() {
              QD && cD.play(CD, !0), cD._emit("seek", CD)
            };
            if (QD && !cD._webAudio) {
              var SD = function() {
                cD._playLock ? setTimeout(SD, 0) : wD()
              };
              setTimeout(SD, 0)
            } else wD()
          }
          return cD
        },
        playing: function(DD) {
          var CD = this;
          if ("number" === typeof DD) {
            var cD = CD._soundById(DD);
            return !!cD && !cD.fn
          }
          for (var ID = 0; ID < CD._sounds.length; ID++)
            if (!CD._sounds[ID].fn) return !0;
          return !1
        },
        duration: function(DD) {
          var CD = this,
            cD = CD._duration,
            ID = CD._soundById(DD);
          return ID && (cD = CD._sprite[ID._sprite][1] / 1e3), cD
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var DD = this, CD = DD._sounds, cD = 0; cD < CD.length; cD++) CD[cD].fn || DD.stop(CD[cD]._id), DD._webAudio || (DD._clearSound(CD[cD]._node), CD[cD]._node.removeEventListener("error", CD[cD]._errorFn, !1), CD[cD]._node.removeEventListener(iD._canPlayEvent, CD[cD]._loadFn, !1), CD[cD]._node.removeEventListener("ended", CD[cD]._endFn, !1), iD._releaseHtml5Audio(CD[cD]._node)), delete CD[cD]._node, DD._clearTimer(CD[cD]._id);
          var ID = iD._howls.indexOf(DD);
          ID >= 0 && iD._howls.splice(ID, 1);
          var pD = !0;
          for (cD = 0; cD < iD._howls.length; cD++)
            if (iD._howls[cD]._src === DD._src || DD._src.indexOf(iD._howls[cD]._src) >= 0) {
              pD = !1;
              break
            } return QD && pD && delete QD[DD._src], iD.noAudio = !1, DD._state = "unloaded", DD._sounds = [], DD = null, null
        },
        on: function(DD, CD, cD, ID) {
          var pD = this["_on" + DD];
          return "function" === typeof CD && pD.push(ID ? {
            id: cD,
            Ot: CD,
            once: ID
          } : {
            id: cD,
            Ot: CD
          }), this
        },
        off: function(DD, CD, cD) {
          var ID = this,
            pD = ID["_on" + DD],
            iD = 0;
          if ("number" === typeof CD && (cD = CD, CD = null), CD || cD)
            for (iD = 0; iD < pD.length; iD++) {
              var fD = cD === pD[iD].id;
              if (CD === pD[iD].Ot && fD || !CD && fD) {
                pD.splice(iD, 1);
                break
              }
            } else if (DD) ID["_on" + DD] = [];
            else {
              var bD = Object.keys(ID);
              for (iD = 0; iD < bD.length; iD++) 0 === bD[iD].indexOf("_on") && Array.isArray(ID[bD[iD]]) && (ID[bD[iD]] = [])
            } return ID
        },
        once: function(DD, CD, cD) {
          return this.on(DD, CD, cD, 1), this
        },
        _emit: function(DD, CD, cD) {
          for (var ID = this, pD = ID["_on" + DD], iD = pD.length - 1; iD >= 0; iD--) pD[iD].id && pD[iD].id !== CD && "load" !== DD || (setTimeout(function(DD) {
            DD.call(this, CD, cD)
          }.bind(ID, pD[iD].Ot), 0), pD[iD].once && ID.off(DD, pD[iD].Ot, pD[iD].id));
          return ID._loadQueue(DD), ID
        },
        _loadQueue: function(DD) {
          var CD = this;
          if (CD._queue.length > 0) {
            var cD = CD._queue[0];
            cD.event === DD && (CD._queue.shift(), CD._loadQueue()), DD || cD.action()
          }
          return CD
        },
        _ended: function(DD) {
          var CD = this,
            cD = DD._sprite;
          if (!CD._webAudio && DD._node && !DD._node.paused && !DD._node.ended && DD._node.currentTime < DD._stop) return setTimeout(CD._ended.bind(CD, DD), 100), CD;
          var ID = !(!DD._loop && !CD._sprite[cD][2]);
          if (CD._emit("end", DD._id), !CD._webAudio && ID && CD.stop(DD._id, !0).play(DD._id), CD._webAudio && ID) {
            CD._emit("play", DD._id), DD._seek = DD._start || 0, DD._rateSeek = 0, DD._playStart = iD.ctx.currentTime;
            var pD = 1e3 * (DD._stop - DD._start) / Math.abs(DD._rate);
            CD._endTimers[DD._id] = setTimeout(CD._ended.bind(CD, DD), pD)
          }
          return CD._webAudio && !ID && (DD.fn = !0, DD._ended = !0, DD._seek = DD._start || 0, DD._rateSeek = 0, CD._clearTimer(DD._id), CD._cleanBuffer(DD._node), iD._autoSuspend()), CD._webAudio || ID || CD.stop(DD._id, !0), CD
        },
        _clearTimer: function(DD) {
          var CD = this;
          if (CD._endTimers[DD]) {
            if ("function" !== typeof CD._endTimers[DD]) clearTimeout(CD._endTimers[DD]);
            else {
              var cD = CD._soundById(DD);
              cD && cD._node && cD._node.removeEventListener("ended", CD._endTimers[DD], !1)
            }
            delete CD._endTimers[DD]
          }
          return CD
        },
        _soundById: function(DD) {
          for (var CD = this, cD = 0; cD < CD._sounds.length; cD++)
            if (DD === CD._sounds[cD]._id) return CD._sounds[cD];
          return null
        },
        _inactiveSound: function() {
          var DD = this;
          DD._drain();
          for (var CD = 0; CD < DD._sounds.length; CD++)
            if (DD._sounds[CD]._ended) return DD._sounds[CD].reset();
          return new bD(DD)
        },
        _drain: function() {
          var DD = this,
            CD = DD._pool,
            cD = 0,
            ID = 0;
          if (!(DD._sounds.length < CD)) {
            for (ID = 0; ID < DD._sounds.length; ID++) DD._sounds[ID]._ended && cD++;
            for (ID = DD._sounds.length - 1; ID >= 0; ID--) {
              if (cD <= CD) return;
              DD._sounds[ID]._ended && (DD._webAudio && DD._sounds[ID]._node && DD._sounds[ID]._node.disconnect(0), DD._sounds.splice(ID, 1), cD--)
            }
          }
        },
        _getSoundIds: function(DD) {
          if ("undefined" === typeof DD) {
            for (var CD = [], cD = 0; cD < this._sounds.length; cD++) CD.push(this._sounds[cD]._id);
            return CD
          }
          return [DD]
        },
        _refreshBuffer: function(DD) {
          return DD._node.bufferSource = iD.ctx.createBufferSource(), DD._node.bufferSource.buffer = QD[this._src], DD._panner ? DD._node.bufferSource.connect(DD._panner) : DD._node.bufferSource.connect(DD._node), DD._node.bufferSource.loop = DD._loop, DD._loop && (DD._node.bufferSource.loopStart = DD._start || 0, DD._node.bufferSource.loopEnd = DD._stop || 0), DD._node.bufferSource.playbackRate.setValueAtTime(DD._rate, iD.ctx.currentTime), this
        },
        _cleanBuffer: function(DD) {
          var CD = iD._navigator && iD._navigator.vendor.indexOf("Apple") >= 0;
          if (iD._scratchBuffer && DD.bufferSource && (DD.bufferSource.onended = null, DD.bufferSource.disconnect(0), CD)) try {
            DD.bufferSource.buffer = iD._scratchBuffer
          } catch (cD) {}
          return DD.bufferSource = null, this
        },
        _clearSound: function(DD) {
          /MSIE |Trident\//.test(iD._navigator && iD._navigator.userAgent) || (DD.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var bD = function(DD) {
        this._parent = DD, this.init()
      };
      bD.prototype = {
        init: function() {
          var DD = this,
            CD = DD._parent;
          return DD._muted = CD._muted, DD._loop = CD._loop, DD._volume = CD._volume, DD._rate = CD._rate, DD._seek = 0, DD.fn = !0, DD._ended = !0, DD._sprite = "__default", DD._id = ++iD._counter, CD._sounds.push(DD), DD.create(), DD
        },
        create: function() {
          var DD = this,
            CD = DD._parent,
            cD = iD._muted || DD._muted || DD._parent._muted ? 0 : DD._volume;
          return CD._webAudio ? (DD._node = "undefined" === typeof iD.ctx.createGain ? iD.ctx.createGainNode() : iD.ctx.createGain(), DD._node.gain.setValueAtTime(cD, iD.ctx.currentTime), DD._node.paused = !0, DD._node.connect(iD.masterGain)) : iD.noAudio || (DD._node = iD._obtainHtml5Audio(), DD._errorFn = DD._errorListener.bind(DD), DD._node.addEventListener("error", DD._errorFn, !1), DD._loadFn = DD._loadListener.bind(DD), DD._node.addEventListener(iD._canPlayEvent, DD._loadFn, !1), DD._endFn = DD._endListener.bind(DD), DD._node.addEventListener("ended", DD._endFn, !1), DD._node.src = CD._src, DD._node.preload = !0 === CD._preload ? "auto" : CD._preload, DD._node.volume = cD * iD.volume(), DD._node.load()), DD
        },
        reset: function() {
          var DD = this,
            CD = DD._parent;
          return DD._muted = CD._muted, DD._loop = CD._loop, DD._volume = CD._volume, DD._rate = CD._rate, DD._seek = 0, DD._rateSeek = 0, DD.fn = !0, DD._ended = !0, DD._sprite = "__default", DD._id = ++iD._counter, DD
        },
        _errorListener: function() {
          var DD = this;
          DD._parent._emit("loaderror", DD._id, DD._node.error ? DD._node.error.code : 0), DD._node.removeEventListener("error", DD._errorFn, !1)
        },
        _loadListener: function() {
          var DD = this,
            CD = DD._parent;
          CD._duration = Math.ceil(10 * DD._node.duration) / 10, 0 === Object.keys(CD._sprite).length && (CD._sprite = {
            __default: [0, 1e3 * CD._duration]
          }), "loaded" !== CD._state && (CD._state = "loaded", CD._emit("load"), CD._loadQueue()), DD._node.removeEventListener(iD._canPlayEvent, DD._loadFn, !1)
        },
        _endListener: function() {
          var DD = this,
            CD = DD._parent;
          CD._duration === 1 / 0 && (CD._duration = Math.ceil(10 * DD._node.duration) / 10, CD._sprite.__default[1] === 1 / 0 && (CD._sprite.__default[1] = 1e3 * CD._duration), CD._ended(DD)), DD._node.removeEventListener("ended", DD._endFn, !1)
        }
      };
      var QD = {},
        wD = function(DD) {
          var CD = DD._src;
          if (QD[CD]) return DD._duration = QD[CD].duration, void yD(DD);
          if (/^data:[^;]+;base64,/.test(CD)) {
            for (var cD = atob(CD.split(",")[1]), ID = new Uint8Array(cD.length), pD = 0; pD < cD.length; ++pD) ID[pD] = cD.charCodeAt(pD);
            BD(ID.buffer, DD)
          } else {
            var iD = new XMLHttpRequest;
            iD.open(DD._xhr.method, CD, !0), iD.withCredentials = DD._xhr.withCredentials, iD.responseType = "arraybuffer", DD._xhr.headers && Object.keys(DD._xhr.headers).forEach((function(CD) {
              iD.setRequestHeader(CD, DD._xhr.headers[CD])
            })), iD.onload = function() {
              var CD = (iD.status + "")[0];
              "0" === CD || "2" === CD || "3" === CD ? BD(iD.response, DD) : DD._emit("loaderror", null, "Failed loading audio file with status: " + iD.status + ".")
            }, iD.onerror = function() {
              DD._webAudio && (DD._html5 = !0, DD._webAudio = !1, DD._sounds = [], delete QD[CD], DD.load())
            }, SD(iD)
          }
        },
        SD = function(DD) {
          try {
            DD.send()
          } catch (CD) {
            DD.onerror()
          }
        },
        BD = function(DD, CD) {
          var cD = function() {
              CD._emit("loaderror", null, "Decoding audio data failed.")
            },
            ID = function(DD) {
              DD && CD._sounds.length > 0 ? (QD[CD._src] = DD, yD(CD, DD)) : cD()
            };
          "undefined" !== typeof Promise && 1 === iD.ctx.decodeAudioData.length ? iD.ctx.decodeAudioData(DD).then(ID).catch(cD) : iD.ctx.decodeAudioData(DD, ID, cD)
        },
        yD = function(DD, CD) {
          CD && !DD._duration && (DD._duration = CD.duration), 0 === Object.keys(DD._sprite).length && (DD._sprite = {
            __default: [0, 1e3 * DD._duration]
          }), "loaded" !== DD._state && (DD._state = "loaded", DD._emit("load"), DD._loadQueue())
        },
        MD = function() {
          if (iD.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? iD.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? iD.ctx = new webkitAudioContext : iD.usingWebAudio = !1
            } catch (pD) {
              iD.usingWebAudio = !1
            }
            iD.ctx || (iD.usingWebAudio = !1);
            var DD = /iP(hone|od|ad)/.test(iD._navigator && iD._navigator.platform),
              CD = iD._navigator && iD._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              cD = CD ? parseInt(CD[1], 10) : null;
            if (DD && cD && cD < 9) {
              var ID = /safari/.test(iD._navigator && iD._navigator.userAgent.toLowerCase());
              iD._navigator && !ID && (iD.usingWebAudio = !1)
            }
            iD.usingWebAudio && (iD.masterGain = "undefined" === typeof iD.ctx.createGain ? iD.ctx.createGainNode() : iD.ctx.createGain(), iD.masterGain.gain.setValueAtTime(iD._muted ? 0 : iD._volume, iD.ctx.currentTime), iD.masterGain.connect(iD.ctx.destination)), iD._setup()
          }
        };
      void 0 === (ID = function() {
        return {
          Howler: iD,
          Howl: fD
        }
      }.apply(CD, [])) || (DD.exports = ID), CD.Howler = iD, CD.Howl = fD, "undefined" !== typeof cD.g ? (cD.g.HowlerGlobal = pD, cD.g.Howler = iD, cD.g.Howl = fD, cD.g.Sound = bD) : "undefined" !== typeof window && (window.HowlerGlobal = pD, window.Howler = iD, window.Howl = fD, window.Sound = bD)
    }(),
    function() {
      var DD;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(DD) {
        var CD = this;
        if (!CD.ctx || !CD.ctx.listener) return CD;
        for (var cD = CD._howls.length - 1; cD >= 0; cD--) CD._howls[cD].stereo(DD);
        return CD
      }, HowlerGlobal.prototype.pos = function(DD, CD, cD) {
        var ID = this;
        return ID.ctx && ID.ctx.listener ? (CD = "number" !== typeof CD ? ID._pos[1] : CD, cD = "number" !== typeof cD ? ID._pos[2] : cD, "number" !== typeof DD ? ID._pos : (ID._pos = [DD, CD, cD], "undefined" !== typeof ID.ctx.listener.positionX ? (ID.ctx.listener.positionX.setTargetAtTime(ID._pos[0], Howler.ctx.currentTime, .1), ID.ctx.listener.positionY.setTargetAtTime(ID._pos[1], Howler.ctx.currentTime, .1), ID.ctx.listener.positionZ.setTargetAtTime(ID._pos[2], Howler.ctx.currentTime, .1)) : ID.ctx.listener.setPosition(ID._pos[0], ID._pos[1], ID._pos[2]), ID)) : ID
      }, HowlerGlobal.prototype.orientation = function(DD, CD, cD, ID, pD, iD) {
        var fD = this;
        if (!fD.ctx || !fD.ctx.listener) return fD;
        var bD = fD._orientation;
        return CD = "number" !== typeof CD ? bD[1] : CD, cD = "number" !== typeof cD ? bD[2] : cD, ID = "number" !== typeof ID ? bD[3] : ID, pD = "number" !== typeof pD ? bD[4] : pD, iD = "number" !== typeof iD ? bD[5] : iD, "number" !== typeof DD ? bD : (fD._orientation = [DD, CD, cD, ID, pD, iD], "undefined" !== typeof fD.ctx.listener.forwardX ? (fD.ctx.listener.forwardX.setTargetAtTime(DD, Howler.ctx.currentTime, .1), fD.ctx.listener.forwardY.setTargetAtTime(CD, Howler.ctx.currentTime, .1), fD.ctx.listener.forwardZ.setTargetAtTime(cD, Howler.ctx.currentTime, .1), fD.ctx.listener.upX.setTargetAtTime(ID, Howler.ctx.currentTime, .1), fD.ctx.listener.upY.setTargetAtTime(pD, Howler.ctx.currentTime, .1), fD.ctx.listener.upZ.setTargetAtTime(iD, Howler.ctx.currentTime, .1)) : fD.ctx.listener.setOrientation(DD, CD, cD, ID, pD, iD), fD)
      }, Howl.prototype.init = (DD = Howl.prototype.init, function(CD) {
        var cD = this;
        return cD._orientation = CD.orientation || [1, 0, 0], cD._stereo = CD.stereo || null, cD._pos = CD.pos || null, cD._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof CD.coneInnerAngle ? CD.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof CD.coneOuterAngle ? CD.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof CD.coneOuterGain ? CD.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof CD.distanceModel ? CD.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof CD.maxDistance ? CD.maxDistance : 1e4,
          panningModel: "undefined" !== typeof CD.panningModel ? CD.panningModel : "HRTF",
          refDistance: "undefined" !== typeof CD.refDistance ? CD.refDistance : 1,
          rolloffFactor: "undefined" !== typeof CD.rolloffFactor ? CD.rolloffFactor : 1
        }, cD._onstereo = CD.onstereo ? [{
          Ot: CD.onstereo
        }] : [], cD._onpos = CD.onpos ? [{
          Ot: CD.onpos
        }] : [], cD._onorientation = CD.onorientation ? [{
          Ot: CD.onorientation
        }] : [], DD.call(this, CD)
      }), Howl.prototype.stereo = function(DD, cD) {
        var ID = this;
        if (!ID._webAudio) return ID;
        if ("loaded" !== ID._state) return ID._queue.push({
          event: "stereo",
          action: function() {
            ID.stereo(DD, cD)
          }
        }), ID;
        var pD = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof cD) {
          if ("number" !== typeof DD) return ID._stereo;
          ID._stereo = DD, ID._pos = [DD, 0, 0]
        }
        for (var iD = ID._getSoundIds(cD), fD = 0; fD < iD.length; fD++) {
          var bD = ID._soundById(iD[fD]);
          if (bD) {
            if ("number" !== typeof DD) return bD._stereo;
            bD._stereo = DD, bD._pos = [DD, 0, 0], bD._node && (bD._pannerAttr.panningModel = "equalpower", bD._panner && bD._panner.pan || CD(bD, pD), "spatial" === pD ? "undefined" !== typeof bD._panner.positionX ? (bD._panner.positionX.setValueAtTime(DD, Howler.ctx.currentTime), bD._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), bD._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : bD._panner.setPosition(DD, 0, 0) : bD._panner.pan.setValueAtTime(DD, Howler.ctx.currentTime)), ID._emit("stereo", bD._id)
          }
        }
        return ID
      }, Howl.prototype.pos = function(DD, cD, ID, pD) {
        var iD = this;
        if (!iD._webAudio) return iD;
        if ("loaded" !== iD._state) return iD._queue.push({
          event: "pos",
          action: function() {
            iD.pos(DD, cD, ID, pD)
          }
        }), iD;
        if (cD = "number" !== typeof cD ? 0 : cD, ID = "number" !== typeof ID ? -.5 : ID, "undefined" === typeof pD) {
          if ("number" !== typeof DD) return iD._pos;
          iD._pos = [DD, cD, ID]
        }
        for (var fD = iD._getSoundIds(pD), bD = 0; bD < fD.length; bD++) {
          var QD = iD._soundById(fD[bD]);
          if (QD) {
            if ("number" !== typeof DD) return QD._pos;
            QD._pos = [DD, cD, ID], QD._node && (QD._panner && !QD._panner.pan || CD(QD, "spatial"), "undefined" !== typeof QD._panner.positionX ? (QD._panner.positionX.setValueAtTime(DD, Howler.ctx.currentTime), QD._panner.positionY.setValueAtTime(cD, Howler.ctx.currentTime), QD._panner.positionZ.setValueAtTime(ID, Howler.ctx.currentTime)) : QD._panner.setPosition(DD, cD, ID)), iD._emit("pos", QD._id)
          }
        }
        return iD
      }, Howl.prototype.orientation = function(DD, cD, ID, pD) {
        var iD = this;
        if (!iD._webAudio) return iD;
        if ("loaded" !== iD._state) return iD._queue.push({
          event: "orientation",
          action: function() {
            iD.orientation(DD, cD, ID, pD)
          }
        }), iD;
        if (cD = "number" !== typeof cD ? iD._orientation[1] : cD, ID = "number" !== typeof ID ? iD._orientation[2] : ID, "undefined" === typeof pD) {
          if ("number" !== typeof DD) return iD._orientation;
          iD._orientation = [DD, cD, ID]
        }
        for (var fD = iD._getSoundIds(pD), bD = 0; bD < fD.length; bD++) {
          var QD = iD._soundById(fD[bD]);
          if (QD) {
            if ("number" !== typeof DD) return QD._orientation;
            QD._orientation = [DD, cD, ID], QD._node && (QD._panner || (QD._pos || (QD._pos = iD._pos || [0, 0, -.5]), CD(QD, "spatial")), "undefined" !== typeof QD._panner.orientationX ? (QD._panner.orientationX.setValueAtTime(DD, Howler.ctx.currentTime), QD._panner.orientationY.setValueAtTime(cD, Howler.ctx.currentTime), QD._panner.orientationZ.setValueAtTime(ID, Howler.ctx.currentTime)) : QD._panner.setOrientation(DD, cD, ID)), iD._emit("orientation", QD._id)
          }
        }
        return iD
      }, Howl.prototype.pannerAttr = function() {
        var DD, cD, ID, pD = this,
          iD = arguments;
        if (!pD._webAudio) return pD;
        if (0 === iD.length) return pD._pannerAttr;
        if (1 === iD.length) {
          if ("object" !== typeof iD[0]) return (ID = pD._soundById(parseInt(iD[0], 10))) ? ID._pannerAttr : pD._pannerAttr;
          DD = iD[0], "undefined" === typeof cD && (DD.pannerAttr || (DD.pannerAttr = {
            coneInnerAngle: DD.coneInnerAngle,
            coneOuterAngle: DD.coneOuterAngle,
            coneOuterGain: DD.coneOuterGain,
            distanceModel: DD.distanceModel,
            maxDistance: DD.maxDistance,
            refDistance: DD.refDistance,
            rolloffFactor: DD.rolloffFactor,
            panningModel: DD.panningModel
          }), pD._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof DD.pannerAttr.coneInnerAngle ? DD.pannerAttr.coneInnerAngle : pD._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof DD.pannerAttr.coneOuterAngle ? DD.pannerAttr.coneOuterAngle : pD._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof DD.pannerAttr.coneOuterGain ? DD.pannerAttr.coneOuterGain : pD._coneOuterGain,
            distanceModel: "undefined" !== typeof DD.pannerAttr.distanceModel ? DD.pannerAttr.distanceModel : pD._distanceModel,
            maxDistance: "undefined" !== typeof DD.pannerAttr.maxDistance ? DD.pannerAttr.maxDistance : pD._maxDistance,
            refDistance: "undefined" !== typeof DD.pannerAttr.refDistance ? DD.pannerAttr.refDistance : pD._refDistance,
            rolloffFactor: "undefined" !== typeof DD.pannerAttr.rolloffFactor ? DD.pannerAttr.rolloffFactor : pD._rolloffFactor,
            panningModel: "undefined" !== typeof DD.pannerAttr.panningModel ? DD.pannerAttr.panningModel : pD._panningModel
          })
        } else 2 === iD.length && (DD = iD[0], cD = parseInt(iD[1], 10));
        for (var fD = pD._getSoundIds(cD), bD = 0; bD < fD.length; bD++)
          if (ID = pD._soundById(fD[bD])) {
            var QD = ID._pannerAttr;
            QD = {
              coneInnerAngle: "undefined" !== typeof DD.coneInnerAngle ? DD.coneInnerAngle : QD.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof DD.coneOuterAngle ? DD.coneOuterAngle : QD.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof DD.coneOuterGain ? DD.coneOuterGain : QD.coneOuterGain,
              distanceModel: "undefined" !== typeof DD.distanceModel ? DD.distanceModel : QD.distanceModel,
              maxDistance: "undefined" !== typeof DD.maxDistance ? DD.maxDistance : QD.maxDistance,
              refDistance: "undefined" !== typeof DD.refDistance ? DD.refDistance : QD.refDistance,
              rolloffFactor: "undefined" !== typeof DD.rolloffFactor ? DD.rolloffFactor : QD.rolloffFactor,
              panningModel: "undefined" !== typeof DD.panningModel ? DD.panningModel : QD.panningModel
            };
            var wD = ID._panner;
            wD ? (wD.coneInnerAngle = QD.coneInnerAngle, wD.coneOuterAngle = QD.coneOuterAngle, wD.coneOuterGain = QD.coneOuterGain, wD.distanceModel = QD.distanceModel, wD.maxDistance = QD.maxDistance, wD.refDistance = QD.refDistance, wD.rolloffFactor = QD.rolloffFactor, wD.panningModel = QD.panningModel) : (ID._pos || (ID._pos = pD._pos || [0, 0, -.5]), CD(ID, "spatial"))
          } return pD
      }, Sound.prototype.init = function(DD) {
        return function() {
          var CD = this,
            cD = CD._parent;
          CD._orientation = cD._orientation, CD._stereo = cD._stereo, CD._pos = cD._pos, CD._pannerAttr = cD._pannerAttr, DD.call(this), CD._stereo ? cD.stereo(CD._stereo) : CD._pos && cD.pos(CD._pos[0], CD._pos[1], CD._pos[2], CD._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(DD) {
        return function() {
          var CD = this,
            cD = CD._parent;
          return CD._orientation = cD._orientation, CD._stereo = cD._stereo, CD._pos = cD._pos, CD._pannerAttr = cD._pannerAttr, CD._stereo ? cD.stereo(CD._stereo) : CD._pos ? cD.pos(CD._pos[0], CD._pos[1], CD._pos[2], CD._id) : CD._panner && (CD._panner.disconnect(0), CD._panner = void 0, cD._refreshBuffer(CD)), DD.call(this)
        }
      }(Sound.prototype.reset);
      var CD = function(DD, CD) {
        "spatial" === (CD = CD || "spatial") ? (DD._panner = Howler.ctx.createPanner(), DD._panner.coneInnerAngle = DD._pannerAttr.coneInnerAngle, DD._panner.coneOuterAngle = DD._pannerAttr.coneOuterAngle, DD._panner.coneOuterGain = DD._pannerAttr.coneOuterGain, DD._panner.distanceModel = DD._pannerAttr.distanceModel, DD._panner.maxDistance = DD._pannerAttr.maxDistance, DD._panner.refDistance = DD._pannerAttr.refDistance, DD._panner.rolloffFactor = DD._pannerAttr.rolloffFactor, DD._panner.panningModel = DD._pannerAttr.panningModel, "undefined" !== typeof DD._panner.positionX ? (DD._panner.positionX.setValueAtTime(DD._pos[0], Howler.ctx.currentTime), DD._panner.positionY.setValueAtTime(DD._pos[1], Howler.ctx.currentTime), DD._panner.positionZ.setValueAtTime(DD._pos[2], Howler.ctx.currentTime)) : DD._panner.setPosition(DD._pos[0], DD._pos[1], DD._pos[2]), "undefined" !== typeof DD._panner.orientationX ? (DD._panner.orientationX.setValueAtTime(DD._orientation[0], Howler.ctx.currentTime), DD._panner.orientationY.setValueAtTime(DD._orientation[1], Howler.ctx.currentTime), DD._panner.orientationZ.setValueAtTime(DD._orientation[2], Howler.ctx.currentTime)) : DD._panner.setOrientation(DD._orientation[0], DD._orientation[1], DD._orientation[2])) : (DD._panner = Howler.ctx.createStereoPanner(), DD._panner.pan.setValueAtTime(DD._stereo, Howler.ctx.currentTime)), DD._panner.connect(DD._node), DD.fn || DD._parent.pause(DD._id, !0).play(DD._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);