/*! For license information please see fo1voe.111.586fb7fc.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5269: (MM, rM, iM) => {
    var OM;
    ! function() {
      var SM = function() {
        this.init()
      };
      SM.prototype = {
        init: function() {
          var MM = this || jM;
          return MM._counter = 1e3, MM._html5AudioPool = [], MM.html5PoolSize = 10, MM._codecs = {}, MM._howls = [], MM._muted = !1, MM._volume = 1, MM._canPlayEvent = "canplaythrough", MM._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, MM.masterGain = null, MM.noAudio = !1, MM.usingWebAudio = !0, MM.autoSuspend = !0, MM.ctx = null, MM.autoUnlock = !0, MM._setup(), MM
        },
        volume: function(MM) {
          var rM = this || jM;
          if (MM = parseFloat(MM), rM.ctx || HM(), "undefined" !== typeof MM && MM >= 0 && MM <= 1) {
            if (rM._volume = MM, rM._muted) return rM;
            rM.usingWebAudio && rM.masterGain.gain.setValueAtTime(MM, jM.ctx.currentTime);
            for (var iM = 0; iM < rM._howls.length; iM++)
              if (!rM._howls[iM]._webAudio)
                for (var OM = rM._howls[iM]._getSoundIds(), SM = 0; SM < OM.length; SM++) {
                  var aM = rM._howls[iM]._soundById(OM[SM]);
                  aM && aM._node && (aM._node.volume = aM._volume * MM)
                }
            return rM
          }
          return rM._volume
        },
        mute: function(MM) {
          var rM = this || jM;
          rM.ctx || HM(), rM._muted = MM, rM.usingWebAudio && rM.masterGain.gain.setValueAtTime(MM ? 0 : rM._volume, jM.ctx.currentTime);
          for (var iM = 0; iM < rM._howls.length; iM++)
            if (!rM._howls[iM]._webAudio)
              for (var OM = rM._howls[iM]._getSoundIds(), SM = 0; SM < OM.length; SM++) {
                var aM = rM._howls[iM]._soundById(OM[SM]);
                aM && aM._node && (aM._node.muted = !!MM || aM._muted)
              }
          return rM
        },
        stop: function() {
          for (var MM = this || jM, rM = 0; rM < MM._howls.length; rM++) MM._howls[rM].stop();
          return MM
        },
        unload: function() {
          for (var MM = this || jM, rM = MM._howls.length - 1; rM >= 0; rM--) MM._howls[rM].unload();
          return MM.usingWebAudio && MM.ctx && "undefined" !== typeof MM.ctx.close && (MM.ctx.close(), MM.ctx = null, HM()), MM
        },
        codecs: function(MM) {
          return (this || jM)._codecs[MM.replace(/^x-/, "")]
        },
        _setup: function() {
          var MM = this || jM;
          if (MM.state = MM.ctx && MM.ctx.state || "suspended", MM._autoSuspend(), !MM.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (MM._canPlayEvent = "canplay")
            } catch (rM) {
              MM.noAudio = !0
            } else MM.noAudio = !0;
          try {
            (new Audio).muted && (MM.noAudio = !0)
          } catch (rM) {}
          return MM.noAudio || MM._setupCodecs(), MM
        },
        _setupCodecs: function() {
          var MM = this || jM,
            rM = null;
          try {
            rM = "undefined" !== typeof Audio ? new Audio : null
          } catch (zM) {
            return MM
          }
          if (!rM || "function" !== typeof rM.canPlayType) return MM;
          var iM = rM.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            OM = MM._navigator ? MM._navigator.userAgent : "",
            SM = OM.match(/OPR\/([0-6].)/g),
            aM = SM && parseInt(SM[0].split("/")[1], 10) < 33,
            PM = -1 !== OM.indexOf("Safari") && -1 === OM.indexOf("Chrome"),
            nM = OM.match(/Version\/(.*?) /),
            QM = PM && nM && parseInt(nM[1], 10) < 15;
          return MM._codecs = {
            mp3: !(aM || !iM && !rM.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!iM,
            opus: !!rM.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!rM.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!rM.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(rM.canPlayType('audio/wav; codecs="1"') || rM.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!rM.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!rM.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(rM.canPlayType("audio/x-m4a;") || rM.canPlayType("audio/m4a;") || rM.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(rM.canPlayType("audio/x-m4b;") || rM.canPlayType("audio/m4b;") || rM.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(rM.canPlayType("audio/x-mp4;") || rM.canPlayType("audio/mp4;") || rM.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(QM || !rM.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(QM || !rM.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!rM.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(rM.canPlayType("audio/x-flac;") || rM.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, MM
        },
        _unlockAudio: function() {
          var MM = this || jM;
          if (!MM._audioUnlocked && MM.ctx) {
            MM._audioUnlocked = !1, MM.autoUnlock = !1, MM._mobileUnloaded || 44100 === MM.ctx.sampleRate || (MM._mobileUnloaded = !0, MM.unload()), MM._scratchBuffer = MM.ctx.createBuffer(1, 1, 22050);
            var rM = function(iM) {
              for (; MM._html5AudioPool.length < MM.html5PoolSize;) try {
                var OM = new Audio;
                OM._unlocked = !0, MM._releaseHtml5Audio(OM)
              } catch (iM) {
                MM.noAudio = !0;
                break
              }
              for (var SM = 0; SM < MM._howls.length; SM++)
                if (!MM._howls[SM]._webAudio)
                  for (var jM = MM._howls[SM]._getSoundIds(), aM = 0; aM < jM.length; aM++) {
                    var PM = MM._howls[SM]._soundById(jM[aM]);
                    PM && PM._node && !PM._node._unlocked && (PM._node._unlocked = !0, PM._node.load())
                  }
              MM._autoResume();
              var nM = MM.ctx.createBufferSource();
              nM.buffer = MM._scratchBuffer, nM.connect(MM.ctx.destination), "undefined" === typeof nM.start ? nM.noteOn(0) : nM.start(0), "function" === typeof MM.ctx.resume && MM.ctx.resume(), nM.onended = function() {
                nM.disconnect(0), MM._audioUnlocked = !0, document.removeEventListener("touchstart", rM, !0), document.removeEventListener("touchend", rM, !0), document.removeEventListener("click", rM, !0), document.removeEventListener("keydown", rM, !0);
                for (var iM = 0; iM < MM._howls.length; iM++) MM._howls[iM]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", rM, !0), document.addEventListener("touchend", rM, !0), document.addEventListener("click", rM, !0), document.addEventListener("keydown", rM, !0), MM
          }
        },
        _obtainHtml5Audio: function() {
          var MM = this || jM;
          if (MM._html5AudioPool.length) return MM._html5AudioPool.pop();
          var rM = (new Audio).play();
          return rM && "undefined" !== typeof Promise && (rM instanceof Promise || "function" === typeof rM.then) && rM.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(MM) {
          var rM = this || jM;
          return MM._unlocked && rM._html5AudioPool.push(MM), rM
        },
        _autoSuspend: function() {
          var MM = this;
          if (MM.autoSuspend && MM.ctx && "undefined" !== typeof MM.ctx.suspend && jM.usingWebAudio) {
            for (var rM = 0; rM < MM._howls.length; rM++)
              if (MM._howls[rM]._webAudio)
                for (var iM = 0; iM < MM._howls[rM]._sounds.length; iM++)
                  if (!MM._howls[rM]._sounds[iM].eL) return MM;
            return MM._suspendTimer && clearTimeout(MM._suspendTimer), MM._suspendTimer = setTimeout((function() {
              if (MM.autoSuspend) {
                MM._suspendTimer = null, MM.state = "suspending";
                var rM = function() {
                  MM.state = "suspended", MM._resumeAfterSuspend && (delete MM._resumeAfterSuspend, MM._autoResume())
                };
                MM.ctx.suspend().then(rM, rM)
              }
            }), 3e4), MM
          }
        },
        _autoResume: function() {
          var MM = this;
          if (MM.ctx && "undefined" !== typeof MM.ctx.resume && jM.usingWebAudio) return "running" === MM.state && "interrupted" !== MM.ctx.state && MM._suspendTimer ? (clearTimeout(MM._suspendTimer), MM._suspendTimer = null) : "suspended" === MM.state || "running" === MM.state && "interrupted" === MM.ctx.state ? (MM.ctx.resume().then((function() {
            MM.state = "running";
            for (var rM = 0; rM < MM._howls.length; rM++) MM._howls[rM]._emit("resume")
          })), MM._suspendTimer && (clearTimeout(MM._suspendTimer), MM._suspendTimer = null)) : "suspending" === MM.state && (MM._resumeAfterSuspend = !0), MM
        }
      };
      var jM = new SM,
        aM = function(MM) {
          MM.src && 0 !== MM.src.length ? this.init(MM) : console.error("An array of source files must be passed with any new Howl.")
        };
      aM.prototype = {
        init: function(MM) {
          var rM = this;
          return jM.ctx || HM(), rM._autoplay = MM.autoplay || !1, rM._format = "string" !== typeof MM.format ? MM.format : [MM.format], rM._html5 = MM.html5 || !1, rM._muted = MM.mute || !1, rM._loop = MM.loop || !1, rM._pool = MM.pool || 5, rM._preload = "boolean" !== typeof MM.preload && "metadata" !== MM.preload || MM.preload, rM._rate = MM.rate || 1, rM._sprite = MM.sprite || {}, rM._src = "string" !== typeof MM.src ? MM.src : [MM.src], rM._volume = void 0 !== MM.volume ? MM.volume : 1, rM._xhr = {
            method: MM.xhr && MM.xhr.method ? MM.xhr.method : "GET",
            headers: MM.xhr && MM.xhr.headers ? MM.xhr.headers : null,
            withCredentials: !(!MM.xhr || !MM.xhr.withCredentials) && MM.xhr.withCredentials
          }, rM._duration = 0, rM._state = "unloaded", rM._sounds = [], rM._endTimers = {}, rM._queue = [], rM._playLock = !1, rM._onend = MM.onend ? [{
            jL: MM.onend
          }] : [], rM._onfade = MM.onfade ? [{
            jL: MM.onfade
          }] : [], rM._onload = MM.onload ? [{
            jL: MM.onload
          }] : [], rM._onloaderror = MM.onloaderror ? [{
            jL: MM.onloaderror
          }] : [], rM._onplayerror = MM.onplayerror ? [{
            jL: MM.onplayerror
          }] : [], rM._onpause = MM.onpause ? [{
            jL: MM.onpause
          }] : [], rM._onplay = MM.onplay ? [{
            jL: MM.onplay
          }] : [], rM._onstop = MM.onstop ? [{
            jL: MM.onstop
          }] : [], rM._onmute = MM.onmute ? [{
            jL: MM.onmute
          }] : [], rM._onvolume = MM.onvolume ? [{
            jL: MM.onvolume
          }] : [], rM._onrate = MM.onrate ? [{
            jL: MM.onrate
          }] : [], rM._onseek = MM.onseek ? [{
            jL: MM.onseek
          }] : [], rM._onunlock = MM.onunlock ? [{
            jL: MM.onunlock
          }] : [], rM._onresume = [], rM._webAudio = jM.usingWebAudio && !rM._html5, "undefined" !== typeof jM.ctx && jM.ctx && jM.autoUnlock && jM._unlockAudio(), jM._howls.push(rM), rM._autoplay && rM._queue.push({
            event: "play",
            action: function() {
              rM.play()
            }
          }), rM._preload && "none" !== rM._preload && rM.load(), rM
        },
        load: function() {
          var MM = this,
            rM = null;
          if (jM.noAudio) MM._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof MM._src && (MM._src = [MM._src]);
            for (var iM = 0; iM < MM._src.length; iM++) {
              var OM, SM;
              if (MM._format && MM._format[iM]) OM = MM._format[iM];
              else {
                if ("string" !== typeof(SM = MM._src[iM])) {
                  MM._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(OM = /^data:audio\/([^;,]+);/i.exec(SM)) || (OM = /\.([^.]+)$/.exec(SM.split("?", 1)[0])), OM && (OM = OM[1].toLowerCase())
              }
              if (OM || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), OM && jM.codecs(OM)) {
                rM = MM._src[iM];
                break
              }
            }
            if (rM) return MM._src = rM, MM._state = "loading", "https:" === window.location.protocol && "http:" === rM.slice(0, 5) && (MM._html5 = !0, MM._webAudio = !1), new PM(MM), MM._webAudio && QM(MM), MM;
            MM._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(MM, rM) {
          var iM = this,
            OM = null;
          if ("number" === typeof MM) OM = MM, MM = null;
          else {
            if ("string" === typeof MM && "loaded" === iM._state && !iM._sprite[MM]) return null;
            if ("undefined" === typeof MM && (MM = "__default", !iM._playLock)) {
              for (var SM = 0, aM = 0; aM < iM._sounds.length; aM++) iM._sounds[aM].eL && !iM._sounds[aM]._ended && (SM++, OM = iM._sounds[aM]._id);
              1 === SM ? MM = null : OM = null
            }
          }
          var PM = OM ? iM._soundById(OM) : iM._inactiveSound();
          if (!PM) return null;
          if (OM && !MM && (MM = PM._sprite || "__default"), "loaded" !== iM._state) {
            PM._sprite = MM, PM._ended = !1;
            var nM = PM._id;
            return iM._queue.push({
              event: "play",
              action: function() {
                iM.play(nM)
              }
            }), nM
          }
          if (OM && !PM.eL) return rM || iM._loadQueue("play"), PM._id;
          iM._webAudio && jM._autoResume();
          var QM = Math.max(0, PM._seek > 0 ? PM._seek : iM._sprite[MM][0] / 1e3),
            zM = Math.max(0, (iM._sprite[MM][0] + iM._sprite[MM][1]) / 1e3 - QM),
            LM = 1e3 * zM / Math.abs(PM._rate),
            mM = iM._sprite[MM][0] / 1e3,
            HM = (iM._sprite[MM][0] + iM._sprite[MM][1]) / 1e3;
          PM._sprite = MM, PM._ended = !1;
          var hM = function() {
            PM.eL = !1, PM._seek = QM, PM._start = mM, PM._stop = HM, PM._loop = !(!PM._loop && !iM._sprite[MM][2])
          };
          if (!(QM >= HM)) {
            var JM = PM._node;
            if (iM._webAudio) {
              var dM = function() {
                iM._playLock = !1, hM(), iM._refreshBuffer(PM);
                var MM = PM._muted || iM._muted ? 0 : PM._volume;
                JM.gain.setValueAtTime(MM, jM.ctx.currentTime), PM._playStart = jM.ctx.currentTime, "undefined" === typeof JM.bufferSource.start ? PM._loop ? JM.bufferSource.noteGrainOn(0, QM, 86400) : JM.bufferSource.noteGrainOn(0, QM, zM) : PM._loop ? JM.bufferSource.start(0, QM, 86400) : JM.bufferSource.start(0, QM, zM), LM !== 1 / 0 && (iM._endTimers[PM._id] = setTimeout(iM._ended.bind(iM, PM), LM)), rM || setTimeout((function() {
                  iM._emit("play", PM._id), iM._loadQueue()
                }), 0)
              };
              "running" === jM.state && "interrupted" !== jM.ctx.state ? dM() : (iM._playLock = !0, iM.once("resume", dM), iM._clearTimer(PM._id))
            } else {
              var yM = function() {
                JM.currentTime = QM, JM.muted = PM._muted || iM._muted || jM._muted || JM.muted, JM.volume = PM._volume * jM.volume(), JM.playbackRate = PM._rate;
                try {
                  var OM = JM.play();
                  if (OM && "undefined" !== typeof Promise && (OM instanceof Promise || "function" === typeof OM.then) ? (iM._playLock = !0, hM(), OM.then((function() {
                      iM._playLock = !1, JM._unlocked = !0, rM ? iM._loadQueue() : iM._emit("play", PM._id)
                    })).catch((function() {
                      iM._playLock = !1, iM._emit("playerror", PM._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), PM._ended = !0, PM.eL = !0
                    }))) : rM || (iM._playLock = !1, hM(), iM._emit("play", PM._id)), JM.playbackRate = PM._rate, JM.paused) return void iM._emit("playerror", PM._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== MM || PM._loop ? iM._endTimers[PM._id] = setTimeout(iM._ended.bind(iM, PM), LM) : (iM._endTimers[PM._id] = function() {
                    iM._ended(PM), JM.removeEventListener("ended", iM._endTimers[PM._id], !1)
                  }, JM.addEventListener("ended", iM._endTimers[PM._id], !1))
                } catch (SM) {
                  iM._emit("playerror", PM._id, SM)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === JM.src && (JM.src = iM._src, JM.load());
              var lM = window && window.ejecta || !JM.readyState && jM._navigator.isCocoonJS;
              if (JM.readyState >= 3 || lM) yM();
              else {
                iM._playLock = !0, iM._state = "loading";
                var EM = function() {
                  iM._state = "loaded", yM(), JM.removeEventListener(jM._canPlayEvent, EM, !1)
                };
                JM.addEventListener(jM._canPlayEvent, EM, !1), iM._clearTimer(PM._id)
              }
            }
            return PM._id
          }
          iM._ended(PM)
        },
        pause: function(MM) {
          var rM = this;
          if ("loaded" !== rM._state || rM._playLock) return rM._queue.push({
            event: "pause",
            action: function() {
              rM.pause(MM)
            }
          }), rM;
          for (var iM = rM._getSoundIds(MM), OM = 0; OM < iM.length; OM++) {
            rM._clearTimer(iM[OM]);
            var SM = rM._soundById(iM[OM]);
            if (SM && !SM.eL && (SM._seek = rM.seek(iM[OM]), SM._rateSeek = 0, SM.eL = !0, rM._stopFade(iM[OM]), SM._node))
              if (rM._webAudio) {
                if (!SM._node.bufferSource) continue;
                "undefined" === typeof SM._node.bufferSource.stop ? SM._node.bufferSource.noteOff(0) : SM._node.bufferSource.stop(0), rM._cleanBuffer(SM._node)
              } else isNaN(SM._node.duration) && SM._node.duration !== 1 / 0 || SM._node.pause();
            arguments[1] || rM._emit("pause", SM ? SM._id : null)
          }
          return rM
        },
        stop: function(MM, rM) {
          var iM = this;
          if ("loaded" !== iM._state || iM._playLock) return iM._queue.push({
            event: "stop",
            action: function() {
              iM.stop(MM)
            }
          }), iM;
          for (var OM = iM._getSoundIds(MM), SM = 0; SM < OM.length; SM++) {
            iM._clearTimer(OM[SM]);
            var jM = iM._soundById(OM[SM]);
            jM && (jM._seek = jM._start || 0, jM._rateSeek = 0, jM.eL = !0, jM._ended = !0, iM._stopFade(OM[SM]), jM._node && (iM._webAudio ? jM._node.bufferSource && ("undefined" === typeof jM._node.bufferSource.stop ? jM._node.bufferSource.noteOff(0) : jM._node.bufferSource.stop(0), iM._cleanBuffer(jM._node)) : isNaN(jM._node.duration) && jM._node.duration !== 1 / 0 || (jM._node.currentTime = jM._start || 0, jM._node.pause(), jM._node.duration === 1 / 0 && iM._clearSound(jM._node))), rM || iM._emit("stop", jM._id))
          }
          return iM
        },
        mute: function(MM, rM) {
          var iM = this;
          if ("loaded" !== iM._state || iM._playLock) return iM._queue.push({
            event: "mute",
            action: function() {
              iM.mute(MM, rM)
            }
          }), iM;
          if ("undefined" === typeof rM) {
            if ("boolean" !== typeof MM) return iM._muted;
            iM._muted = MM
          }
          for (var OM = iM._getSoundIds(rM), SM = 0; SM < OM.length; SM++) {
            var aM = iM._soundById(OM[SM]);
            aM && (aM._muted = MM, aM._interval && iM._stopFade(aM._id), iM._webAudio && aM._node ? aM._node.gain.setValueAtTime(MM ? 0 : aM._volume, jM.ctx.currentTime) : aM._node && (aM._node.muted = !!jM._muted || MM), iM._emit("mute", aM._id))
          }
          return iM
        },
        volume: function() {
          var MM, rM, iM, OM = this,
            SM = arguments;
          if (0 === SM.length) return OM._volume;
          if (1 === SM.length || 2 === SM.length && "undefined" === typeof SM[1] ? OM._getSoundIds().indexOf(SM[0]) >= 0 ? rM = parseInt(SM[0], 10) : MM = parseFloat(SM[0]) : SM.length >= 2 && (MM = parseFloat(SM[0]), rM = parseInt(SM[1], 10)), !("undefined" !== typeof MM && MM >= 0 && MM <= 1)) return (iM = rM ? OM._soundById(rM) : OM._sounds[0]) ? iM._volume : 0;
          if ("loaded" !== OM._state || OM._playLock) return OM._queue.push({
            event: "volume",
            action: function() {
              OM.volume.apply(OM, SM)
            }
          }), OM;
          "undefined" === typeof rM && (OM._volume = MM), rM = OM._getSoundIds(rM);
          for (var aM = 0; aM < rM.length; aM++)(iM = OM._soundById(rM[aM])) && (iM._volume = MM, SM[2] || OM._stopFade(rM[aM]), OM._webAudio && iM._node && !iM._muted ? iM._node.gain.setValueAtTime(MM, jM.ctx.currentTime) : iM._node && !iM._muted && (iM._node.volume = MM * jM.volume()), OM._emit("volume", iM._id));
          return OM
        },
        fade: function(MM, rM, iM, OM) {
          var SM = this;
          if ("loaded" !== SM._state || SM._playLock) return SM._queue.push({
            event: "fade",
            action: function() {
              SM.fade(MM, rM, iM, OM)
            }
          }), SM;
          MM = Math.min(Math.max(0, parseFloat(MM)), 1), rM = Math.min(Math.max(0, parseFloat(rM)), 1), iM = parseFloat(iM), SM.volume(MM, OM);
          for (var aM = SM._getSoundIds(OM), PM = 0; PM < aM.length; PM++) {
            var nM = SM._soundById(aM[PM]);
            if (nM) {
              if (OM || SM._stopFade(aM[PM]), SM._webAudio && !nM._muted) {
                var QM = jM.ctx.currentTime,
                  zM = QM + iM / 1e3;
                nM._volume = MM, nM._node.gain.setValueAtTime(MM, QM), nM._node.gain.linearRampToValueAtTime(rM, zM)
              }
              SM._startFadeInterval(nM, MM, rM, iM, aM[PM], "undefined" === typeof OM)
            }
          }
          return SM
        },
        _startFadeInterval: function(MM, rM, iM, OM, SM, jM) {
          var aM = this,
            PM = rM,
            nM = iM - rM,
            QM = Math.abs(nM / .01),
            zM = Math.max(4, QM > 0 ? OM / QM : OM),
            LM = Date.now();
          MM._fadeTo = iM, MM._interval = setInterval((function() {
            var SM = (Date.now() - LM) / OM;
            LM = Date.now(), PM += nM * SM, PM = Math.round(100 * PM) / 100, PM = nM < 0 ? Math.max(iM, PM) : Math.min(iM, PM), aM._webAudio ? MM._volume = PM : aM.volume(PM, MM._id, !0), jM && (aM._volume = PM), (iM < rM && PM <= iM || iM > rM && PM >= iM) && (clearInterval(MM._interval), MM._interval = null, MM._fadeTo = null, aM.volume(iM, MM._id), aM._emit("fade", MM._id))
          }), zM)
        },
        _stopFade: function(MM) {
          var rM = this,
            iM = rM._soundById(MM);
          return iM && iM._interval && (rM._webAudio && iM._node.gain.cancelScheduledValues(jM.ctx.currentTime), clearInterval(iM._interval), iM._interval = null, rM.volume(iM._fadeTo, MM), iM._fadeTo = null, rM._emit("fade", MM)), rM
        },
        loop: function() {
          var MM, rM, iM, OM = this,
            SM = arguments;
          if (0 === SM.length) return OM._loop;
          if (1 === SM.length) {
            if ("boolean" !== typeof SM[0]) return !!(iM = OM._soundById(parseInt(SM[0], 10))) && iM._loop;
            MM = SM[0], OM._loop = MM
          } else 2 === SM.length && (MM = SM[0], rM = parseInt(SM[1], 10));
          for (var jM = OM._getSoundIds(rM), aM = 0; aM < jM.length; aM++)(iM = OM._soundById(jM[aM])) && (iM._loop = MM, OM._webAudio && iM._node && iM._node.bufferSource && (iM._node.bufferSource.loop = MM, MM && (iM._node.bufferSource.loopStart = iM._start || 0, iM._node.bufferSource.loopEnd = iM._stop, OM.playing(jM[aM]) && (OM.pause(jM[aM], !0), OM.play(jM[aM], !0)))));
          return OM
        },
        rate: function() {
          var MM, rM, iM, OM = this,
            SM = arguments;
          if (0 === SM.length) rM = OM._sounds[0]._id;
          else if (1 === SM.length) {
            OM._getSoundIds().indexOf(SM[0]) >= 0 ? rM = parseInt(SM[0], 10) : MM = parseFloat(SM[0])
          } else 2 === SM.length && (MM = parseFloat(SM[0]), rM = parseInt(SM[1], 10));
          if ("number" !== typeof MM) return (iM = OM._soundById(rM)) ? iM._rate : OM._rate;
          if ("loaded" !== OM._state || OM._playLock) return OM._queue.push({
            event: "rate",
            action: function() {
              OM.rate.apply(OM, SM)
            }
          }), OM;
          "undefined" === typeof rM && (OM._rate = MM), rM = OM._getSoundIds(rM);
          for (var aM = 0; aM < rM.length; aM++)
            if (iM = OM._soundById(rM[aM])) {
              OM.playing(rM[aM]) && (iM._rateSeek = OM.seek(rM[aM]), iM._playStart = OM._webAudio ? jM.ctx.currentTime : iM._playStart), iM._rate = MM, OM._webAudio && iM._node && iM._node.bufferSource ? iM._node.bufferSource.playbackRate.setValueAtTime(MM, jM.ctx.currentTime) : iM._node && (iM._node.playbackRate = MM);
              var PM = OM.seek(rM[aM]),
                nM = 1e3 * ((OM._sprite[iM._sprite][0] + OM._sprite[iM._sprite][1]) / 1e3 - PM) / Math.abs(iM._rate);
              !OM._endTimers[rM[aM]] && iM.eL || (OM._clearTimer(rM[aM]), OM._endTimers[rM[aM]] = setTimeout(OM._ended.bind(OM, iM), nM)), OM._emit("rate", iM._id)
            } return OM
        },
        seek: function() {
          var MM, rM, iM = this,
            OM = arguments;
          if (0 === OM.length) iM._sounds.length && (rM = iM._sounds[0]._id);
          else if (1 === OM.length) {
            iM._getSoundIds().indexOf(OM[0]) >= 0 ? rM = parseInt(OM[0], 10) : iM._sounds.length && (rM = iM._sounds[0]._id, MM = parseFloat(OM[0]))
          } else 2 === OM.length && (MM = parseFloat(OM[0]), rM = parseInt(OM[1], 10));
          if ("undefined" === typeof rM) return 0;
          if ("number" === typeof MM && ("loaded" !== iM._state || iM._playLock)) return iM._queue.push({
            event: "seek",
            action: function() {
              iM.seek.apply(iM, OM)
            }
          }), iM;
          var SM = iM._soundById(rM);
          if (SM) {
            if (!("number" === typeof MM && MM >= 0)) {
              if (iM._webAudio) {
                var aM = iM.playing(rM) ? jM.ctx.currentTime - SM._playStart : 0,
                  PM = SM._rateSeek ? SM._rateSeek - SM._seek : 0;
                return SM._seek + (PM + aM * Math.abs(SM._rate))
              }
              return SM._node.currentTime
            }
            var nM = iM.playing(rM);
            nM && iM.pause(rM, !0), SM._seek = MM, SM._ended = !1, iM._clearTimer(rM), iM._webAudio || !SM._node || isNaN(SM._node.duration) || (SM._node.currentTime = MM);
            var QM = function() {
              nM && iM.play(rM, !0), iM._emit("seek", rM)
            };
            if (nM && !iM._webAudio) {
              var zM = function() {
                iM._playLock ? setTimeout(zM, 0) : QM()
              };
              setTimeout(zM, 0)
            } else QM()
          }
          return iM
        },
        playing: function(MM) {
          var rM = this;
          if ("number" === typeof MM) {
            var iM = rM._soundById(MM);
            return !!iM && !iM.eL
          }
          for (var OM = 0; OM < rM._sounds.length; OM++)
            if (!rM._sounds[OM].eL) return !0;
          return !1
        },
        duration: function(MM) {
          var rM = this,
            iM = rM._duration,
            OM = rM._soundById(MM);
          return OM && (iM = rM._sprite[OM._sprite][1] / 1e3), iM
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var MM = this, rM = MM._sounds, iM = 0; iM < rM.length; iM++) rM[iM].eL || MM.stop(rM[iM]._id), MM._webAudio || (MM._clearSound(rM[iM]._node), rM[iM]._node.removeEventListener("error", rM[iM]._errorFn, !1), rM[iM]._node.removeEventListener(jM._canPlayEvent, rM[iM]._loadFn, !1), rM[iM]._node.removeEventListener("ended", rM[iM]._endFn, !1), jM._releaseHtml5Audio(rM[iM]._node)), delete rM[iM]._node, MM._clearTimer(rM[iM]._id);
          var OM = jM._howls.indexOf(MM);
          OM >= 0 && jM._howls.splice(OM, 1);
          var SM = !0;
          for (iM = 0; iM < jM._howls.length; iM++)
            if (jM._howls[iM]._src === MM._src || MM._src.indexOf(jM._howls[iM]._src) >= 0) {
              SM = !1;
              break
            } return nM && SM && delete nM[MM._src], jM.noAudio = !1, MM._state = "unloaded", MM._sounds = [], MM = null, null
        },
        on: function(MM, rM, iM, OM) {
          var SM = this["_on" + MM];
          return "function" === typeof rM && SM.push(OM ? {
            id: iM,
            jL: rM,
            once: OM
          } : {
            id: iM,
            jL: rM
          }), this
        },
        off: function(MM, rM, iM) {
          var OM = this,
            SM = OM["_on" + MM],
            jM = 0;
          if ("number" === typeof rM && (iM = rM, rM = null), rM || iM)
            for (jM = 0; jM < SM.length; jM++) {
              var aM = iM === SM[jM].id;
              if (rM === SM[jM].jL && aM || !rM && aM) {
                SM.splice(jM, 1);
                break
              }
            } else if (MM) OM["_on" + MM] = [];
            else {
              var PM = Object.keys(OM);
              for (jM = 0; jM < PM.length; jM++) 0 === PM[jM].indexOf("_on") && Array.isArray(OM[PM[jM]]) && (OM[PM[jM]] = [])
            } return OM
        },
        once: function(MM, rM, iM) {
          return this.on(MM, rM, iM, 1), this
        },
        _emit: function(MM, rM, iM) {
          for (var OM = this, SM = OM["_on" + MM], jM = SM.length - 1; jM >= 0; jM--) SM[jM].id && SM[jM].id !== rM && "load" !== MM || (setTimeout(function(MM) {
            MM.call(this, rM, iM)
          }.bind(OM, SM[jM].jL), 0), SM[jM].once && OM.off(MM, SM[jM].jL, SM[jM].id));
          return OM._loadQueue(MM), OM
        },
        _loadQueue: function(MM) {
          var rM = this;
          if (rM._queue.length > 0) {
            var iM = rM._queue[0];
            iM.event === MM && (rM._queue.shift(), rM._loadQueue()), MM || iM.action()
          }
          return rM
        },
        _ended: function(MM) {
          var rM = this,
            iM = MM._sprite;
          if (!rM._webAudio && MM._node && !MM._node.paused && !MM._node.ended && MM._node.currentTime < MM._stop) return setTimeout(rM._ended.bind(rM, MM), 100), rM;
          var OM = !(!MM._loop && !rM._sprite[iM][2]);
          if (rM._emit("end", MM._id), !rM._webAudio && OM && rM.stop(MM._id, !0).play(MM._id), rM._webAudio && OM) {
            rM._emit("play", MM._id), MM._seek = MM._start || 0, MM._rateSeek = 0, MM._playStart = jM.ctx.currentTime;
            var SM = 1e3 * (MM._stop - MM._start) / Math.abs(MM._rate);
            rM._endTimers[MM._id] = setTimeout(rM._ended.bind(rM, MM), SM)
          }
          return rM._webAudio && !OM && (MM.eL = !0, MM._ended = !0, MM._seek = MM._start || 0, MM._rateSeek = 0, rM._clearTimer(MM._id), rM._cleanBuffer(MM._node), jM._autoSuspend()), rM._webAudio || OM || rM.stop(MM._id, !0), rM
        },
        _clearTimer: function(MM) {
          var rM = this;
          if (rM._endTimers[MM]) {
            if ("function" !== typeof rM._endTimers[MM]) clearTimeout(rM._endTimers[MM]);
            else {
              var iM = rM._soundById(MM);
              iM && iM._node && iM._node.removeEventListener("ended", rM._endTimers[MM], !1)
            }
            delete rM._endTimers[MM]
          }
          return rM
        },
        _soundById: function(MM) {
          for (var rM = this, iM = 0; iM < rM._sounds.length; iM++)
            if (MM === rM._sounds[iM]._id) return rM._sounds[iM];
          return null
        },
        _inactiveSound: function() {
          var MM = this;
          MM._drain();
          for (var rM = 0; rM < MM._sounds.length; rM++)
            if (MM._sounds[rM]._ended) return MM._sounds[rM].reset();
          return new PM(MM)
        },
        _drain: function() {
          var MM = this,
            rM = MM._pool,
            iM = 0,
            OM = 0;
          if (!(MM._sounds.length < rM)) {
            for (OM = 0; OM < MM._sounds.length; OM++) MM._sounds[OM]._ended && iM++;
            for (OM = MM._sounds.length - 1; OM >= 0; OM--) {
              if (iM <= rM) return;
              MM._sounds[OM]._ended && (MM._webAudio && MM._sounds[OM]._node && MM._sounds[OM]._node.disconnect(0), MM._sounds.splice(OM, 1), iM--)
            }
          }
        },
        _getSoundIds: function(MM) {
          if ("undefined" === typeof MM) {
            for (var rM = [], iM = 0; iM < this._sounds.length; iM++) rM.push(this._sounds[iM]._id);
            return rM
          }
          return [MM]
        },
        _refreshBuffer: function(MM) {
          return MM._node.bufferSource = jM.ctx.createBufferSource(), MM._node.bufferSource.buffer = nM[this._src], MM._panner ? MM._node.bufferSource.connect(MM._panner) : MM._node.bufferSource.connect(MM._node), MM._node.bufferSource.loop = MM._loop, MM._loop && (MM._node.bufferSource.loopStart = MM._start || 0, MM._node.bufferSource.loopEnd = MM._stop || 0), MM._node.bufferSource.playbackRate.setValueAtTime(MM._rate, jM.ctx.currentTime), this
        },
        _cleanBuffer: function(MM) {
          var rM = jM._navigator && jM._navigator.vendor.indexOf("Apple") >= 0;
          if (jM._scratchBuffer && MM.bufferSource && (MM.bufferSource.onended = null, MM.bufferSource.disconnect(0), rM)) try {
            MM.bufferSource.buffer = jM._scratchBuffer
          } catch (iM) {}
          return MM.bufferSource = null, this
        },
        _clearSound: function(MM) {
          /MSIE |Trident\//.test(jM._navigator && jM._navigator.userAgent) || (MM.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var PM = function(MM) {
        this._parent = MM, this.init()
      };
      PM.prototype = {
        init: function() {
          var MM = this,
            rM = MM._parent;
          return MM._muted = rM._muted, MM._loop = rM._loop, MM._volume = rM._volume, MM._rate = rM._rate, MM._seek = 0, MM.eL = !0, MM._ended = !0, MM._sprite = "__default", MM._id = ++jM._counter, rM._sounds.push(MM), MM.create(), MM
        },
        create: function() {
          var MM = this,
            rM = MM._parent,
            iM = jM._muted || MM._muted || MM._parent._muted ? 0 : MM._volume;
          return rM._webAudio ? (MM._node = "undefined" === typeof jM.ctx.createGain ? jM.ctx.createGainNode() : jM.ctx.createGain(), MM._node.gain.setValueAtTime(iM, jM.ctx.currentTime), MM._node.paused = !0, MM._node.connect(jM.masterGain)) : jM.noAudio || (MM._node = jM._obtainHtml5Audio(), MM._errorFn = MM._errorListener.bind(MM), MM._node.addEventListener("error", MM._errorFn, !1), MM._loadFn = MM._loadListener.bind(MM), MM._node.addEventListener(jM._canPlayEvent, MM._loadFn, !1), MM._endFn = MM._endListener.bind(MM), MM._node.addEventListener("ended", MM._endFn, !1), MM._node.src = rM._src, MM._node.preload = !0 === rM._preload ? "auto" : rM._preload, MM._node.volume = iM * jM.volume(), MM._node.load()), MM
        },
        reset: function() {
          var MM = this,
            rM = MM._parent;
          return MM._muted = rM._muted, MM._loop = rM._loop, MM._volume = rM._volume, MM._rate = rM._rate, MM._seek = 0, MM._rateSeek = 0, MM.eL = !0, MM._ended = !0, MM._sprite = "__default", MM._id = ++jM._counter, MM
        },
        _errorListener: function() {
          var MM = this;
          MM._parent._emit("loaderror", MM._id, MM._node.error ? MM._node.error.code : 0), MM._node.removeEventListener("error", MM._errorFn, !1)
        },
        _loadListener: function() {
          var MM = this,
            rM = MM._parent;
          rM._duration = Math.ceil(10 * MM._node.duration) / 10, 0 === Object.keys(rM._sprite).length && (rM._sprite = {
            __default: [0, 1e3 * rM._duration]
          }), "loaded" !== rM._state && (rM._state = "loaded", rM._emit("load"), rM._loadQueue()), MM._node.removeEventListener(jM._canPlayEvent, MM._loadFn, !1)
        },
        _endListener: function() {
          var MM = this,
            rM = MM._parent;
          rM._duration === 1 / 0 && (rM._duration = Math.ceil(10 * MM._node.duration) / 10, rM._sprite.__default[1] === 1 / 0 && (rM._sprite.__default[1] = 1e3 * rM._duration), rM._ended(MM)), MM._node.removeEventListener("ended", MM._endFn, !1)
        }
      };
      var nM = {},
        QM = function(MM) {
          var rM = MM._src;
          if (nM[rM]) return MM._duration = nM[rM].duration, void mM(MM);
          if (/^data:[^;]+;base64,/.test(rM)) {
            for (var iM = atob(rM.split(",")[1]), OM = new Uint8Array(iM.length), SM = 0; SM < iM.length; ++SM) OM[SM] = iM.charCodeAt(SM);
            LM(OM.buffer, MM)
          } else {
            var jM = new XMLHttpRequest;
            jM.open(MM._xhr.method, rM, !0), jM.withCredentials = MM._xhr.withCredentials, jM.responseType = "arraybuffer", MM._xhr.headers && Object.keys(MM._xhr.headers).forEach((function(rM) {
              jM.setRequestHeader(rM, MM._xhr.headers[rM])
            })), jM.onload = function() {
              var rM = (jM.status + "")[0];
              "0" === rM || "2" === rM || "3" === rM ? LM(jM.response, MM) : MM._emit("loaderror", null, "Failed loading audio file with status: " + jM.status + ".")
            }, jM.onerror = function() {
              MM._webAudio && (MM._html5 = !0, MM._webAudio = !1, MM._sounds = [], delete nM[rM], MM.load())
            }, zM(jM)
          }
        },
        zM = function(MM) {
          try {
            MM.send()
          } catch (rM) {
            MM.onerror()
          }
        },
        LM = function(MM, rM) {
          var iM = function() {
              rM._emit("loaderror", null, "Decoding audio data failed.")
            },
            OM = function(MM) {
              MM && rM._sounds.length > 0 ? (nM[rM._src] = MM, mM(rM, MM)) : iM()
            };
          "undefined" !== typeof Promise && 1 === jM.ctx.decodeAudioData.length ? jM.ctx.decodeAudioData(MM).then(OM).catch(iM) : jM.ctx.decodeAudioData(MM, OM, iM)
        },
        mM = function(MM, rM) {
          rM && !MM._duration && (MM._duration = rM.duration), 0 === Object.keys(MM._sprite).length && (MM._sprite = {
            __default: [0, 1e3 * MM._duration]
          }), "loaded" !== MM._state && (MM._state = "loaded", MM._emit("load"), MM._loadQueue())
        },
        HM = function() {
          if (jM.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? jM.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? jM.ctx = new webkitAudioContext : jM.usingWebAudio = !1
            } catch (SM) {
              jM.usingWebAudio = !1
            }
            jM.ctx || (jM.usingWebAudio = !1);
            var MM = /iP(hone|od|ad)/.test(jM._navigator && jM._navigator.platform),
              rM = jM._navigator && jM._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              iM = rM ? parseInt(rM[1], 10) : null;
            if (MM && iM && iM < 9) {
              var OM = /safari/.test(jM._navigator && jM._navigator.userAgent.toLowerCase());
              jM._navigator && !OM && (jM.usingWebAudio = !1)
            }
            jM.usingWebAudio && (jM.masterGain = "undefined" === typeof jM.ctx.createGain ? jM.ctx.createGainNode() : jM.ctx.createGain(), jM.masterGain.gain.setValueAtTime(jM._muted ? 0 : jM._volume, jM.ctx.currentTime), jM.masterGain.connect(jM.ctx.destination)), jM._setup()
          }
        };
      void 0 === (OM = function() {
        return {
          Howler: jM,
          Howl: aM
        }
      }.apply(rM, [])) || (MM.exports = OM), rM.Howler = jM, rM.Howl = aM, "undefined" !== typeof iM.g ? (iM.g.HowlerGlobal = SM, iM.g.Howler = jM, iM.g.Howl = aM, iM.g.Sound = PM) : "undefined" !== typeof window && (window.HowlerGlobal = SM, window.Howler = jM, window.Howl = aM, window.Sound = PM)
    }(),
    function() {
      var MM;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(MM) {
        var rM = this;
        if (!rM.ctx || !rM.ctx.listener) return rM;
        for (var iM = rM._howls.length - 1; iM >= 0; iM--) rM._howls[iM].stereo(MM);
        return rM
      }, HowlerGlobal.prototype.pos = function(MM, rM, iM) {
        var OM = this;
        return OM.ctx && OM.ctx.listener ? (rM = "number" !== typeof rM ? OM._pos[1] : rM, iM = "number" !== typeof iM ? OM._pos[2] : iM, "number" !== typeof MM ? OM._pos : (OM._pos = [MM, rM, iM], "undefined" !== typeof OM.ctx.listener.positionX ? (OM.ctx.listener.positionX.setTargetAtTime(OM._pos[0], Howler.ctx.currentTime, .1), OM.ctx.listener.positionY.setTargetAtTime(OM._pos[1], Howler.ctx.currentTime, .1), OM.ctx.listener.positionZ.setTargetAtTime(OM._pos[2], Howler.ctx.currentTime, .1)) : OM.ctx.listener.setPosition(OM._pos[0], OM._pos[1], OM._pos[2]), OM)) : OM
      }, HowlerGlobal.prototype.orientation = function(MM, rM, iM, OM, SM, jM) {
        var aM = this;
        if (!aM.ctx || !aM.ctx.listener) return aM;
        var PM = aM._orientation;
        return rM = "number" !== typeof rM ? PM[1] : rM, iM = "number" !== typeof iM ? PM[2] : iM, OM = "number" !== typeof OM ? PM[3] : OM, SM = "number" !== typeof SM ? PM[4] : SM, jM = "number" !== typeof jM ? PM[5] : jM, "number" !== typeof MM ? PM : (aM._orientation = [MM, rM, iM, OM, SM, jM], "undefined" !== typeof aM.ctx.listener.forwardX ? (aM.ctx.listener.forwardX.setTargetAtTime(MM, Howler.ctx.currentTime, .1), aM.ctx.listener.forwardY.setTargetAtTime(rM, Howler.ctx.currentTime, .1), aM.ctx.listener.forwardZ.setTargetAtTime(iM, Howler.ctx.currentTime, .1), aM.ctx.listener.upX.setTargetAtTime(OM, Howler.ctx.currentTime, .1), aM.ctx.listener.upY.setTargetAtTime(SM, Howler.ctx.currentTime, .1), aM.ctx.listener.upZ.setTargetAtTime(jM, Howler.ctx.currentTime, .1)) : aM.ctx.listener.setOrientation(MM, rM, iM, OM, SM, jM), aM)
      }, Howl.prototype.init = (MM = Howl.prototype.init, function(rM) {
        var iM = this;
        return iM._orientation = rM.orientation || [1, 0, 0], iM._stereo = rM.stereo || null, iM._pos = rM.pos || null, iM._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof rM.coneInnerAngle ? rM.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof rM.coneOuterAngle ? rM.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof rM.coneOuterGain ? rM.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof rM.distanceModel ? rM.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof rM.maxDistance ? rM.maxDistance : 1e4,
          panningModel: "undefined" !== typeof rM.panningModel ? rM.panningModel : "HRTF",
          refDistance: "undefined" !== typeof rM.refDistance ? rM.refDistance : 1,
          rolloffFactor: "undefined" !== typeof rM.rolloffFactor ? rM.rolloffFactor : 1
        }, iM._onstereo = rM.onstereo ? [{
          jL: rM.onstereo
        }] : [], iM._onpos = rM.onpos ? [{
          jL: rM.onpos
        }] : [], iM._onorientation = rM.onorientation ? [{
          jL: rM.onorientation
        }] : [], MM.call(this, rM)
      }), Howl.prototype.stereo = function(MM, iM) {
        var OM = this;
        if (!OM._webAudio) return OM;
        if ("loaded" !== OM._state) return OM._queue.push({
          event: "stereo",
          action: function() {
            OM.stereo(MM, iM)
          }
        }), OM;
        var SM = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof iM) {
          if ("number" !== typeof MM) return OM._stereo;
          OM._stereo = MM, OM._pos = [MM, 0, 0]
        }
        for (var jM = OM._getSoundIds(iM), aM = 0; aM < jM.length; aM++) {
          var PM = OM._soundById(jM[aM]);
          if (PM) {
            if ("number" !== typeof MM) return PM._stereo;
            PM._stereo = MM, PM._pos = [MM, 0, 0], PM._node && (PM._pannerAttr.panningModel = "equalpower", PM._panner && PM._panner.pan || rM(PM, SM), "spatial" === SM ? "undefined" !== typeof PM._panner.positionX ? (PM._panner.positionX.setValueAtTime(MM, Howler.ctx.currentTime), PM._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), PM._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : PM._panner.setPosition(MM, 0, 0) : PM._panner.pan.setValueAtTime(MM, Howler.ctx.currentTime)), OM._emit("stereo", PM._id)
          }
        }
        return OM
      }, Howl.prototype.pos = function(MM, iM, OM, SM) {
        var jM = this;
        if (!jM._webAudio) return jM;
        if ("loaded" !== jM._state) return jM._queue.push({
          event: "pos",
          action: function() {
            jM.pos(MM, iM, OM, SM)
          }
        }), jM;
        if (iM = "number" !== typeof iM ? 0 : iM, OM = "number" !== typeof OM ? -.5 : OM, "undefined" === typeof SM) {
          if ("number" !== typeof MM) return jM._pos;
          jM._pos = [MM, iM, OM]
        }
        for (var aM = jM._getSoundIds(SM), PM = 0; PM < aM.length; PM++) {
          var nM = jM._soundById(aM[PM]);
          if (nM) {
            if ("number" !== typeof MM) return nM._pos;
            nM._pos = [MM, iM, OM], nM._node && (nM._panner && !nM._panner.pan || rM(nM, "spatial"), "undefined" !== typeof nM._panner.positionX ? (nM._panner.positionX.setValueAtTime(MM, Howler.ctx.currentTime), nM._panner.positionY.setValueAtTime(iM, Howler.ctx.currentTime), nM._panner.positionZ.setValueAtTime(OM, Howler.ctx.currentTime)) : nM._panner.setPosition(MM, iM, OM)), jM._emit("pos", nM._id)
          }
        }
        return jM
      }, Howl.prototype.orientation = function(MM, iM, OM, SM) {
        var jM = this;
        if (!jM._webAudio) return jM;
        if ("loaded" !== jM._state) return jM._queue.push({
          event: "orientation",
          action: function() {
            jM.orientation(MM, iM, OM, SM)
          }
        }), jM;
        if (iM = "number" !== typeof iM ? jM._orientation[1] : iM, OM = "number" !== typeof OM ? jM._orientation[2] : OM, "undefined" === typeof SM) {
          if ("number" !== typeof MM) return jM._orientation;
          jM._orientation = [MM, iM, OM]
        }
        for (var aM = jM._getSoundIds(SM), PM = 0; PM < aM.length; PM++) {
          var nM = jM._soundById(aM[PM]);
          if (nM) {
            if ("number" !== typeof MM) return nM._orientation;
            nM._orientation = [MM, iM, OM], nM._node && (nM._panner || (nM._pos || (nM._pos = jM._pos || [0, 0, -.5]), rM(nM, "spatial")), "undefined" !== typeof nM._panner.orientationX ? (nM._panner.orientationX.setValueAtTime(MM, Howler.ctx.currentTime), nM._panner.orientationY.setValueAtTime(iM, Howler.ctx.currentTime), nM._panner.orientationZ.setValueAtTime(OM, Howler.ctx.currentTime)) : nM._panner.setOrientation(MM, iM, OM)), jM._emit("orientation", nM._id)
          }
        }
        return jM
      }, Howl.prototype.pannerAttr = function() {
        var MM, iM, OM, SM = this,
          jM = arguments;
        if (!SM._webAudio) return SM;
        if (0 === jM.length) return SM._pannerAttr;
        if (1 === jM.length) {
          if ("object" !== typeof jM[0]) return (OM = SM._soundById(parseInt(jM[0], 10))) ? OM._pannerAttr : SM._pannerAttr;
          MM = jM[0], "undefined" === typeof iM && (MM.pannerAttr || (MM.pannerAttr = {
            coneInnerAngle: MM.coneInnerAngle,
            coneOuterAngle: MM.coneOuterAngle,
            coneOuterGain: MM.coneOuterGain,
            distanceModel: MM.distanceModel,
            maxDistance: MM.maxDistance,
            refDistance: MM.refDistance,
            rolloffFactor: MM.rolloffFactor,
            panningModel: MM.panningModel
          }), SM._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof MM.pannerAttr.coneInnerAngle ? MM.pannerAttr.coneInnerAngle : SM._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof MM.pannerAttr.coneOuterAngle ? MM.pannerAttr.coneOuterAngle : SM._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof MM.pannerAttr.coneOuterGain ? MM.pannerAttr.coneOuterGain : SM._coneOuterGain,
            distanceModel: "undefined" !== typeof MM.pannerAttr.distanceModel ? MM.pannerAttr.distanceModel : SM._distanceModel,
            maxDistance: "undefined" !== typeof MM.pannerAttr.maxDistance ? MM.pannerAttr.maxDistance : SM._maxDistance,
            refDistance: "undefined" !== typeof MM.pannerAttr.refDistance ? MM.pannerAttr.refDistance : SM._refDistance,
            rolloffFactor: "undefined" !== typeof MM.pannerAttr.rolloffFactor ? MM.pannerAttr.rolloffFactor : SM._rolloffFactor,
            panningModel: "undefined" !== typeof MM.pannerAttr.panningModel ? MM.pannerAttr.panningModel : SM._panningModel
          })
        } else 2 === jM.length && (MM = jM[0], iM = parseInt(jM[1], 10));
        for (var aM = SM._getSoundIds(iM), PM = 0; PM < aM.length; PM++)
          if (OM = SM._soundById(aM[PM])) {
            var nM = OM._pannerAttr;
            nM = {
              coneInnerAngle: "undefined" !== typeof MM.coneInnerAngle ? MM.coneInnerAngle : nM.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof MM.coneOuterAngle ? MM.coneOuterAngle : nM.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof MM.coneOuterGain ? MM.coneOuterGain : nM.coneOuterGain,
              distanceModel: "undefined" !== typeof MM.distanceModel ? MM.distanceModel : nM.distanceModel,
              maxDistance: "undefined" !== typeof MM.maxDistance ? MM.maxDistance : nM.maxDistance,
              refDistance: "undefined" !== typeof MM.refDistance ? MM.refDistance : nM.refDistance,
              rolloffFactor: "undefined" !== typeof MM.rolloffFactor ? MM.rolloffFactor : nM.rolloffFactor,
              panningModel: "undefined" !== typeof MM.panningModel ? MM.panningModel : nM.panningModel
            };
            var QM = OM._panner;
            QM ? (QM.coneInnerAngle = nM.coneInnerAngle, QM.coneOuterAngle = nM.coneOuterAngle, QM.coneOuterGain = nM.coneOuterGain, QM.distanceModel = nM.distanceModel, QM.maxDistance = nM.maxDistance, QM.refDistance = nM.refDistance, QM.rolloffFactor = nM.rolloffFactor, QM.panningModel = nM.panningModel) : (OM._pos || (OM._pos = SM._pos || [0, 0, -.5]), rM(OM, "spatial"))
          } return SM
      }, Sound.prototype.init = function(MM) {
        return function() {
          var rM = this,
            iM = rM._parent;
          rM._orientation = iM._orientation, rM._stereo = iM._stereo, rM._pos = iM._pos, rM._pannerAttr = iM._pannerAttr, MM.call(this), rM._stereo ? iM.stereo(rM._stereo) : rM._pos && iM.pos(rM._pos[0], rM._pos[1], rM._pos[2], rM._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(MM) {
        return function() {
          var rM = this,
            iM = rM._parent;
          return rM._orientation = iM._orientation, rM._stereo = iM._stereo, rM._pos = iM._pos, rM._pannerAttr = iM._pannerAttr, rM._stereo ? iM.stereo(rM._stereo) : rM._pos ? iM.pos(rM._pos[0], rM._pos[1], rM._pos[2], rM._id) : rM._panner && (rM._panner.disconnect(0), rM._panner = void 0, iM._refreshBuffer(rM)), MM.call(this)
        }
      }(Sound.prototype.reset);
      var rM = function(MM, rM) {
        "spatial" === (rM = rM || "spatial") ? (MM._panner = Howler.ctx.createPanner(), MM._panner.coneInnerAngle = MM._pannerAttr.coneInnerAngle, MM._panner.coneOuterAngle = MM._pannerAttr.coneOuterAngle, MM._panner.coneOuterGain = MM._pannerAttr.coneOuterGain, MM._panner.distanceModel = MM._pannerAttr.distanceModel, MM._panner.maxDistance = MM._pannerAttr.maxDistance, MM._panner.refDistance = MM._pannerAttr.refDistance, MM._panner.rolloffFactor = MM._pannerAttr.rolloffFactor, MM._panner.panningModel = MM._pannerAttr.panningModel, "undefined" !== typeof MM._panner.positionX ? (MM._panner.positionX.setValueAtTime(MM._pos[0], Howler.ctx.currentTime), MM._panner.positionY.setValueAtTime(MM._pos[1], Howler.ctx.currentTime), MM._panner.positionZ.setValueAtTime(MM._pos[2], Howler.ctx.currentTime)) : MM._panner.setPosition(MM._pos[0], MM._pos[1], MM._pos[2]), "undefined" !== typeof MM._panner.orientationX ? (MM._panner.orientationX.setValueAtTime(MM._orientation[0], Howler.ctx.currentTime), MM._panner.orientationY.setValueAtTime(MM._orientation[1], Howler.ctx.currentTime), MM._panner.orientationZ.setValueAtTime(MM._orientation[2], Howler.ctx.currentTime)) : MM._panner.setOrientation(MM._orientation[0], MM._orientation[1], MM._orientation[2])) : (MM._panner = Howler.ctx.createStereoPanner(), MM._panner.pan.setValueAtTime(MM._stereo, Howler.ctx.currentTime)), MM._panner.connect(MM._node), MM.eL || MM._parent.pause(MM._id, !0).play(MM._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);