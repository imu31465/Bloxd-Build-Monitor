/*! For license information please see tz47m9.96.70803ed2.chunk.js.LICENSE.txt */
export const id = 96;
export const ids = [96];
export const modules = {
  4877: (DD, zD, wD) => {
    var pD;
    ! function() {
      var sD = function() {
        this.init()
      };
      sD.prototype = {
        init: function() {
          var DD = this || KD;
          return DD._counter = 1e3, DD._html5AudioPool = [], DD.html5PoolSize = 10, DD._codecs = {}, DD._howls = [], DD._muted = !1, DD._volume = 1, DD._canPlayEvent = "canplaythrough", DD._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, DD.masterGain = null, DD.noAudio = !1, DD.usingWebAudio = !0, DD.autoSuspend = !0, DD.ctx = null, DD.autoUnlock = !0, DD._setup(), DD
        },
        volume: function(DD) {
          var zD = this || KD;
          if (DD = parseFloat(DD), zD.ctx || fD(), "undefined" !== typeof DD && DD >= 0 && DD <= 1) {
            if (zD._volume = DD, zD._muted) return zD;
            zD.usingWebAudio && zD.masterGain.gain.setValueAtTime(DD, KD.ctx.currentTime);
            for (var wD = 0; wD < zD._howls.length; wD++)
              if (!zD._howls[wD]._webAudio)
                for (var pD = zD._howls[wD]._getSoundIds(), sD = 0; sD < pD.length; sD++) {
                  var rD = zD._howls[wD]._soundById(pD[sD]);
                  rD && rD._node && (rD._node.volume = rD._volume * DD)
                }
            return zD
          }
          return zD._volume
        },
        mute: function(DD) {
          var zD = this || KD;
          zD.ctx || fD(), zD._muted = DD, zD.usingWebAudio && zD.masterGain.gain.setValueAtTime(DD ? 0 : zD._volume, KD.ctx.currentTime);
          for (var wD = 0; wD < zD._howls.length; wD++)
            if (!zD._howls[wD]._webAudio)
              for (var pD = zD._howls[wD]._getSoundIds(), sD = 0; sD < pD.length; sD++) {
                var rD = zD._howls[wD]._soundById(pD[sD]);
                rD && rD._node && (rD._node.muted = !!DD || rD._muted)
              }
          return zD
        },
        stop: function() {
          for (var DD = this || KD, zD = 0; zD < DD._howls.length; zD++) DD._howls[zD].stop();
          return DD
        },
        unload: function() {
          for (var DD = this || KD, zD = DD._howls.length - 1; zD >= 0; zD--) DD._howls[zD].unload();
          return DD.usingWebAudio && DD.ctx && "undefined" !== typeof DD.ctx.close && (DD.ctx.close(), DD.ctx = null, fD()), DD
        },
        codecs: function(DD) {
          return (this || KD)._codecs[DD.replace(/^x-/, "")]
        },
        _setup: function() {
          var DD = this || KD;
          if (DD.state = DD.ctx && DD.ctx.state || "suspended", DD._autoSuspend(), !DD.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (DD._canPlayEvent = "canplay")
            } catch (zD) {
              DD.noAudio = !0
            } else DD.noAudio = !0;
          try {
            (new Audio).muted && (DD.noAudio = !0)
          } catch (zD) {}
          return DD.noAudio || DD._setupCodecs(), DD
        },
        _setupCodecs: function() {
          var DD = this || KD,
            zD = null;
          try {
            zD = "undefined" !== typeof Audio ? new Audio : null
          } catch (RD) {
            return DD
          }
          if (!zD || "function" !== typeof zD.canPlayType) return DD;
          var wD = zD.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            pD = DD._navigator ? DD._navigator.userAgent : "",
            sD = pD.match(/OPR\/([0-6].)/g),
            rD = sD && parseInt(sD[0].split("/")[1], 10) < 33,
            LD = -1 !== pD.indexOf("Safari") && -1 === pD.indexOf("Chrome"),
            cD = pD.match(/Version\/(.*?) /),
            gD = LD && cD && parseInt(cD[1], 10) < 15;
          return DD._codecs = {
            mp3: !(rD || !wD && !zD.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!wD,
            opus: !!zD.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!zD.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!zD.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(zD.canPlayType('audio/wav; codecs="1"') || zD.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!zD.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!zD.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(zD.canPlayType("audio/x-m4a;") || zD.canPlayType("audio/m4a;") || zD.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(zD.canPlayType("audio/x-m4b;") || zD.canPlayType("audio/m4b;") || zD.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(zD.canPlayType("audio/x-mp4;") || zD.canPlayType("audio/mp4;") || zD.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(gD || !zD.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(gD || !zD.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!zD.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(zD.canPlayType("audio/x-flac;") || zD.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, DD
        },
        _unlockAudio: function() {
          var DD = this || KD;
          if (!DD._audioUnlocked && DD.ctx) {
            DD._audioUnlocked = !1, DD.autoUnlock = !1, DD._mobileUnloaded || 44100 === DD.ctx.sampleRate || (DD._mobileUnloaded = !0, DD.unload()), DD._scratchBuffer = DD.ctx.createBuffer(1, 1, 22050);
            var zD = function(wD) {
              for (; DD._html5AudioPool.length < DD.html5PoolSize;) try {
                var pD = new Audio;
                pD._unlocked = !0, DD._releaseHtml5Audio(pD)
              } catch (wD) {
                DD.noAudio = !0;
                break
              }
              for (var sD = 0; sD < DD._howls.length; sD++)
                if (!DD._howls[sD]._webAudio)
                  for (var KD = DD._howls[sD]._getSoundIds(), rD = 0; rD < KD.length; rD++) {
                    var LD = DD._howls[sD]._soundById(KD[rD]);
                    LD && LD._node && !LD._node._unlocked && (LD._node._unlocked = !0, LD._node.load())
                  }
              DD._autoResume();
              var cD = DD.ctx.createBufferSource();
              cD.buffer = DD._scratchBuffer, cD.connect(DD.ctx.destination), "undefined" === typeof cD.start ? cD.noteOn(0) : cD.start(0), "function" === typeof DD.ctx.resume && DD.ctx.resume(), cD.onended = function() {
                cD.disconnect(0), DD._audioUnlocked = !0, document.removeEventListener("touchstart", zD, !0), document.removeEventListener("touchend", zD, !0), document.removeEventListener("click", zD, !0), document.removeEventListener("keydown", zD, !0);
                for (var wD = 0; wD < DD._howls.length; wD++) DD._howls[wD]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", zD, !0), document.addEventListener("touchend", zD, !0), document.addEventListener("click", zD, !0), document.addEventListener("keydown", zD, !0), DD
          }
        },
        _obtainHtml5Audio: function() {
          var DD = this || KD;
          if (DD._html5AudioPool.length) return DD._html5AudioPool.pop();
          var zD = (new Audio).play();
          return zD && "undefined" !== typeof Promise && (zD instanceof Promise || "function" === typeof zD.then) && zD.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(DD) {
          var zD = this || KD;
          return DD._unlocked && zD._html5AudioPool.push(DD), zD
        },
        _autoSuspend: function() {
          var DD = this;
          if (DD.autoSuspend && DD.ctx && "undefined" !== typeof DD.ctx.suspend && KD.usingWebAudio) {
            for (var zD = 0; zD < DD._howls.length; zD++)
              if (DD._howls[zD]._webAudio)
                for (var wD = 0; wD < DD._howls[zD]._sounds.length; wD++)
                  if (!DD._howls[zD]._sounds[wD].HJ) return DD;
            return DD._suspendTimer && clearTimeout(DD._suspendTimer), DD._suspendTimer = setTimeout((function() {
              if (DD.autoSuspend) {
                DD._suspendTimer = null, DD.state = "suspending";
                var zD = function() {
                  DD.state = "suspended", DD._resumeAfterSuspend && (delete DD._resumeAfterSuspend, DD._autoResume())
                };
                DD.ctx.suspend().then(zD, zD)
              }
            }), 3e4), DD
          }
        },
        _autoResume: function() {
          var DD = this;
          if (DD.ctx && "undefined" !== typeof DD.ctx.resume && KD.usingWebAudio) return "running" === DD.state && "interrupted" !== DD.ctx.state && DD._suspendTimer ? (clearTimeout(DD._suspendTimer), DD._suspendTimer = null) : "suspended" === DD.state || "running" === DD.state && "interrupted" === DD.ctx.state ? (DD.ctx.resume().then((function() {
            DD.state = "running";
            for (var zD = 0; zD < DD._howls.length; zD++) DD._howls[zD]._emit("resume")
          })), DD._suspendTimer && (clearTimeout(DD._suspendTimer), DD._suspendTimer = null)) : "suspending" === DD.state && (DD._resumeAfterSuspend = !0), DD
        }
      };
      var KD = new sD,
        rD = function(DD) {
          DD.src && 0 !== DD.src.length ? this.init(DD) : console.error("An array of source files must be passed with any new Howl.")
        };
      rD.prototype = {
        init: function(DD) {
          var zD = this;
          return KD.ctx || fD(), zD._autoplay = DD.autoplay || !1, zD._format = "string" !== typeof DD.format ? DD.format : [DD.format], zD._html5 = DD.html5 || !1, zD._muted = DD.mute || !1, zD._loop = DD.loop || !1, zD._pool = DD.pool || 5, zD._preload = "boolean" !== typeof DD.preload && "metadata" !== DD.preload || DD.preload, zD._rate = DD.rate || 1, zD._sprite = DD.sprite || {}, zD._src = "string" !== typeof DD.src ? DD.src : [DD.src], zD._volume = void 0 !== DD.volume ? DD.volume : 1, zD._xhr = {
            method: DD.xhr && DD.xhr.method ? DD.xhr.method : "GET",
            headers: DD.xhr && DD.xhr.headers ? DD.xhr.headers : null,
            withCredentials: !(!DD.xhr || !DD.xhr.withCredentials) && DD.xhr.withCredentials
          }, zD._duration = 0, zD._state = "unloaded", zD._sounds = [], zD._endTimers = {}, zD._queue = [], zD._playLock = !1, zD._onend = DD.onend ? [{
            LI: DD.onend
          }] : [], zD._onfade = DD.onfade ? [{
            LI: DD.onfade
          }] : [], zD._onload = DD.onload ? [{
            LI: DD.onload
          }] : [], zD._onloaderror = DD.onloaderror ? [{
            LI: DD.onloaderror
          }] : [], zD._onplayerror = DD.onplayerror ? [{
            LI: DD.onplayerror
          }] : [], zD._onpause = DD.onpause ? [{
            LI: DD.onpause
          }] : [], zD._onplay = DD.onplay ? [{
            LI: DD.onplay
          }] : [], zD._onstop = DD.onstop ? [{
            LI: DD.onstop
          }] : [], zD._onmute = DD.onmute ? [{
            LI: DD.onmute
          }] : [], zD._onvolume = DD.onvolume ? [{
            LI: DD.onvolume
          }] : [], zD._onrate = DD.onrate ? [{
            LI: DD.onrate
          }] : [], zD._onseek = DD.onseek ? [{
            LI: DD.onseek
          }] : [], zD._onunlock = DD.onunlock ? [{
            LI: DD.onunlock
          }] : [], zD._onresume = [], zD._webAudio = KD.usingWebAudio && !zD._html5, "undefined" !== typeof KD.ctx && KD.ctx && KD.autoUnlock && KD._unlockAudio(), KD._howls.push(zD), zD._autoplay && zD._queue.push({
            event: "play",
            action: function() {
              zD.play()
            }
          }), zD._preload && "none" !== zD._preload && zD.load(), zD
        },
        load: function() {
          var DD = this,
            zD = null;
          if (KD.noAudio) DD._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof DD._src && (DD._src = [DD._src]);
            for (var wD = 0; wD < DD._src.length; wD++) {
              var pD, sD;
              if (DD._format && DD._format[wD]) pD = DD._format[wD];
              else {
                if ("string" !== typeof(sD = DD._src[wD])) {
                  DD._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(pD = /^data:audio\/([^;,]+);/i.exec(sD)) || (pD = /\.([^.]+)$/.exec(sD.split("?", 1)[0])), pD && (pD = pD[1].toLowerCase())
              }
              if (pD || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), pD && KD.codecs(pD)) {
                zD = DD._src[wD];
                break
              }
            }
            if (zD) return DD._src = zD, DD._state = "loading", "https:" === window.location.protocol && "http:" === zD.slice(0, 5) && (DD._html5 = !0, DD._webAudio = !1), new LD(DD), DD._webAudio && gD(DD), DD;
            DD._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(DD, zD) {
          var wD = this,
            pD = null;
          if ("number" === typeof DD) pD = DD, DD = null;
          else {
            if ("string" === typeof DD && "loaded" === wD._state && !wD._sprite[DD]) return null;
            if ("undefined" === typeof DD && (DD = "__default", !wD._playLock)) {
              for (var sD = 0, rD = 0; rD < wD._sounds.length; rD++) wD._sounds[rD].HJ && !wD._sounds[rD]._ended && (sD++, pD = wD._sounds[rD]._id);
              1 === sD ? DD = null : pD = null
            }
          }
          var LD = pD ? wD._soundById(pD) : wD._inactiveSound();
          if (!LD) return null;
          if (pD && !DD && (DD = LD._sprite || "__default"), "loaded" !== wD._state) {
            LD._sprite = DD, LD._ended = !1;
            var cD = LD._id;
            return wD._queue.push({
              event: "play",
              action: function() {
                wD.play(cD)
              }
            }), cD
          }
          if (pD && !LD.HJ) return zD || wD._loadQueue("play"), LD._id;
          wD._webAudio && KD._autoResume();
          var gD = Math.max(0, LD._seek > 0 ? LD._seek : wD._sprite[DD][0] / 1e3),
            RD = Math.max(0, (wD._sprite[DD][0] + wD._sprite[DD][1]) / 1e3 - gD),
            AD = 1e3 * RD / Math.abs(LD._rate),
            UD = wD._sprite[DD][0] / 1e3,
            fD = (wD._sprite[DD][0] + wD._sprite[DD][1]) / 1e3;
          LD._sprite = DD, LD._ended = !1;
          var ID = function() {
            LD.HJ = !1, LD._seek = gD, LD._start = UD, LD._stop = fD, LD._loop = !(!LD._loop && !wD._sprite[DD][2])
          };
          if (!(gD >= fD)) {
            var BD = LD._node;
            if (wD._webAudio) {
              var GD = function() {
                wD._playLock = !1, ID(), wD._refreshBuffer(LD);
                var DD = LD._muted || wD._muted ? 0 : LD._volume;
                BD.gain.setValueAtTime(DD, KD.ctx.currentTime), LD._playStart = KD.ctx.currentTime, "undefined" === typeof BD.bufferSource.start ? LD._loop ? BD.bufferSource.noteGrainOn(0, gD, 86400) : BD.bufferSource.noteGrainOn(0, gD, RD) : LD._loop ? BD.bufferSource.start(0, gD, 86400) : BD.bufferSource.start(0, gD, RD), AD !== 1 / 0 && (wD._endTimers[LD._id] = setTimeout(wD._ended.bind(wD, LD), AD)), zD || setTimeout((function() {
                  wD._emit("play", LD._id), wD._loadQueue()
                }), 0)
              };
              "running" === KD.state && "interrupted" !== KD.ctx.state ? GD() : (wD._playLock = !0, wD.once("resume", GD), wD._clearTimer(LD._id))
            } else {
              var hD = function() {
                BD.currentTime = gD, BD.muted = LD._muted || wD._muted || KD._muted || BD.muted, BD.volume = LD._volume * KD.volume(), BD.playbackRate = LD._rate;
                try {
                  var pD = BD.play();
                  if (pD && "undefined" !== typeof Promise && (pD instanceof Promise || "function" === typeof pD.then) ? (wD._playLock = !0, ID(), pD.then((function() {
                      wD._playLock = !1, BD._unlocked = !0, zD ? wD._loadQueue() : wD._emit("play", LD._id)
                    })).catch((function() {
                      wD._playLock = !1, wD._emit("playerror", LD._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), LD._ended = !0, LD.HJ = !0
                    }))) : zD || (wD._playLock = !1, ID(), wD._emit("play", LD._id)), BD.playbackRate = LD._rate, BD.paused) return void wD._emit("playerror", LD._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== DD || LD._loop ? wD._endTimers[LD._id] = setTimeout(wD._ended.bind(wD, LD), AD) : (wD._endTimers[LD._id] = function() {
                    wD._ended(LD), BD.removeEventListener("ended", wD._endTimers[LD._id], !1)
                  }, BD.addEventListener("ended", wD._endTimers[LD._id], !1))
                } catch (sD) {
                  wD._emit("playerror", LD._id, sD)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === BD.src && (BD.src = wD._src, BD.load());
              var nD = window && window.ejecta || !BD.readyState && KD._navigator.isCocoonJS;
              if (BD.readyState >= 3 || nD) hD();
              else {
                wD._playLock = !0, wD._state = "loading";
                var MD = function() {
                  wD._state = "loaded", hD(), BD.removeEventListener(KD._canPlayEvent, MD, !1)
                };
                BD.addEventListener(KD._canPlayEvent, MD, !1), wD._clearTimer(LD._id)
              }
            }
            return LD._id
          }
          wD._ended(LD)
        },
        pause: function(DD) {
          var zD = this;
          if ("loaded" !== zD._state || zD._playLock) return zD._queue.push({
            event: "pause",
            action: function() {
              zD.pause(DD)
            }
          }), zD;
          for (var wD = zD._getSoundIds(DD), pD = 0; pD < wD.length; pD++) {
            zD._clearTimer(wD[pD]);
            var sD = zD._soundById(wD[pD]);
            if (sD && !sD.HJ && (sD._seek = zD.seek(wD[pD]), sD._rateSeek = 0, sD.HJ = !0, zD._stopFade(wD[pD]), sD._node))
              if (zD._webAudio) {
                if (!sD._node.bufferSource) continue;
                "undefined" === typeof sD._node.bufferSource.stop ? sD._node.bufferSource.noteOff(0) : sD._node.bufferSource.stop(0), zD._cleanBuffer(sD._node)
              } else isNaN(sD._node.duration) && sD._node.duration !== 1 / 0 || sD._node.pause();
            arguments[1] || zD._emit("pause", sD ? sD._id : null)
          }
          return zD
        },
        stop: function(DD, zD) {
          var wD = this;
          if ("loaded" !== wD._state || wD._playLock) return wD._queue.push({
            event: "stop",
            action: function() {
              wD.stop(DD)
            }
          }), wD;
          for (var pD = wD._getSoundIds(DD), sD = 0; sD < pD.length; sD++) {
            wD._clearTimer(pD[sD]);
            var KD = wD._soundById(pD[sD]);
            KD && (KD._seek = KD._start || 0, KD._rateSeek = 0, KD.HJ = !0, KD._ended = !0, wD._stopFade(pD[sD]), KD._node && (wD._webAudio ? KD._node.bufferSource && ("undefined" === typeof KD._node.bufferSource.stop ? KD._node.bufferSource.noteOff(0) : KD._node.bufferSource.stop(0), wD._cleanBuffer(KD._node)) : isNaN(KD._node.duration) && KD._node.duration !== 1 / 0 || (KD._node.currentTime = KD._start || 0, KD._node.pause(), KD._node.duration === 1 / 0 && wD._clearSound(KD._node))), zD || wD._emit("stop", KD._id))
          }
          return wD
        },
        mute: function(DD, zD) {
          var wD = this;
          if ("loaded" !== wD._state || wD._playLock) return wD._queue.push({
            event: "mute",
            action: function() {
              wD.mute(DD, zD)
            }
          }), wD;
          if ("undefined" === typeof zD) {
            if ("boolean" !== typeof DD) return wD._muted;
            wD._muted = DD
          }
          for (var pD = wD._getSoundIds(zD), sD = 0; sD < pD.length; sD++) {
            var rD = wD._soundById(pD[sD]);
            rD && (rD._muted = DD, rD._interval && wD._stopFade(rD._id), wD._webAudio && rD._node ? rD._node.gain.setValueAtTime(DD ? 0 : rD._volume, KD.ctx.currentTime) : rD._node && (rD._node.muted = !!KD._muted || DD), wD._emit("mute", rD._id))
          }
          return wD
        },
        volume: function() {
          var DD, zD, wD, pD = this,
            sD = arguments;
          if (0 === sD.length) return pD._volume;
          if (1 === sD.length || 2 === sD.length && "undefined" === typeof sD[1] ? pD._getSoundIds().indexOf(sD[0]) >= 0 ? zD = parseInt(sD[0], 10) : DD = parseFloat(sD[0]) : sD.length >= 2 && (DD = parseFloat(sD[0]), zD = parseInt(sD[1], 10)), !("undefined" !== typeof DD && DD >= 0 && DD <= 1)) return (wD = zD ? pD._soundById(zD) : pD._sounds[0]) ? wD._volume : 0;
          if ("loaded" !== pD._state || pD._playLock) return pD._queue.push({
            event: "volume",
            action: function() {
              pD.volume.apply(pD, sD)
            }
          }), pD;
          "undefined" === typeof zD && (pD._volume = DD), zD = pD._getSoundIds(zD);
          for (var rD = 0; rD < zD.length; rD++)(wD = pD._soundById(zD[rD])) && (wD._volume = DD, sD[2] || pD._stopFade(zD[rD]), pD._webAudio && wD._node && !wD._muted ? wD._node.gain.setValueAtTime(DD, KD.ctx.currentTime) : wD._node && !wD._muted && (wD._node.volume = DD * KD.volume()), pD._emit("volume", wD._id));
          return pD
        },
        fade: function(DD, zD, wD, pD) {
          var sD = this;
          if ("loaded" !== sD._state || sD._playLock) return sD._queue.push({
            event: "fade",
            action: function() {
              sD.fade(DD, zD, wD, pD)
            }
          }), sD;
          DD = Math.min(Math.max(0, parseFloat(DD)), 1), zD = Math.min(Math.max(0, parseFloat(zD)), 1), wD = parseFloat(wD), sD.volume(DD, pD);
          for (var rD = sD._getSoundIds(pD), LD = 0; LD < rD.length; LD++) {
            var cD = sD._soundById(rD[LD]);
            if (cD) {
              if (pD || sD._stopFade(rD[LD]), sD._webAudio && !cD._muted) {
                var gD = KD.ctx.currentTime,
                  RD = gD + wD / 1e3;
                cD._volume = DD, cD._node.gain.setValueAtTime(DD, gD), cD._node.gain.linearRampToValueAtTime(zD, RD)
              }
              sD._startFadeInterval(cD, DD, zD, wD, rD[LD], "undefined" === typeof pD)
            }
          }
          return sD
        },
        _startFadeInterval: function(DD, zD, wD, pD, sD, KD) {
          var rD = this,
            LD = zD,
            cD = wD - zD,
            gD = Math.abs(cD / .01),
            RD = Math.max(4, gD > 0 ? pD / gD : pD),
            AD = Date.now();
          DD._fadeTo = wD, DD._interval = setInterval((function() {
            var sD = (Date.now() - AD) / pD;
            AD = Date.now(), LD += cD * sD, LD = Math.round(100 * LD) / 100, LD = cD < 0 ? Math.max(wD, LD) : Math.min(wD, LD), rD._webAudio ? DD._volume = LD : rD.volume(LD, DD._id, !0), KD && (rD._volume = LD), (wD < zD && LD <= wD || wD > zD && LD >= wD) && (clearInterval(DD._interval), DD._interval = null, DD._fadeTo = null, rD.volume(wD, DD._id), rD._emit("fade", DD._id))
          }), RD)
        },
        _stopFade: function(DD) {
          var zD = this,
            wD = zD._soundById(DD);
          return wD && wD._interval && (zD._webAudio && wD._node.gain.cancelScheduledValues(KD.ctx.currentTime), clearInterval(wD._interval), wD._interval = null, zD.volume(wD._fadeTo, DD), wD._fadeTo = null, zD._emit("fade", DD)), zD
        },
        loop: function() {
          var DD, zD, wD, pD = this,
            sD = arguments;
          if (0 === sD.length) return pD._loop;
          if (1 === sD.length) {
            if ("boolean" !== typeof sD[0]) return !!(wD = pD._soundById(parseInt(sD[0], 10))) && wD._loop;
            DD = sD[0], pD._loop = DD
          } else 2 === sD.length && (DD = sD[0], zD = parseInt(sD[1], 10));
          for (var KD = pD._getSoundIds(zD), rD = 0; rD < KD.length; rD++)(wD = pD._soundById(KD[rD])) && (wD._loop = DD, pD._webAudio && wD._node && wD._node.bufferSource && (wD._node.bufferSource.loop = DD, DD && (wD._node.bufferSource.loopStart = wD._start || 0, wD._node.bufferSource.loopEnd = wD._stop, pD.playing(KD[rD]) && (pD.pause(KD[rD], !0), pD.play(KD[rD], !0)))));
          return pD
        },
        rate: function() {
          var DD, zD, wD, pD = this,
            sD = arguments;
          if (0 === sD.length) zD = pD._sounds[0]._id;
          else if (1 === sD.length) {
            pD._getSoundIds().indexOf(sD[0]) >= 0 ? zD = parseInt(sD[0], 10) : DD = parseFloat(sD[0])
          } else 2 === sD.length && (DD = parseFloat(sD[0]), zD = parseInt(sD[1], 10));
          if ("number" !== typeof DD) return (wD = pD._soundById(zD)) ? wD._rate : pD._rate;
          if ("loaded" !== pD._state || pD._playLock) return pD._queue.push({
            event: "rate",
            action: function() {
              pD.rate.apply(pD, sD)
            }
          }), pD;
          "undefined" === typeof zD && (pD._rate = DD), zD = pD._getSoundIds(zD);
          for (var rD = 0; rD < zD.length; rD++)
            if (wD = pD._soundById(zD[rD])) {
              pD.playing(zD[rD]) && (wD._rateSeek = pD.seek(zD[rD]), wD._playStart = pD._webAudio ? KD.ctx.currentTime : wD._playStart), wD._rate = DD, pD._webAudio && wD._node && wD._node.bufferSource ? wD._node.bufferSource.playbackRate.setValueAtTime(DD, KD.ctx.currentTime) : wD._node && (wD._node.playbackRate = DD);
              var LD = pD.seek(zD[rD]),
                cD = 1e3 * ((pD._sprite[wD._sprite][0] + pD._sprite[wD._sprite][1]) / 1e3 - LD) / Math.abs(wD._rate);
              !pD._endTimers[zD[rD]] && wD.HJ || (pD._clearTimer(zD[rD]), pD._endTimers[zD[rD]] = setTimeout(pD._ended.bind(pD, wD), cD)), pD._emit("rate", wD._id)
            } return pD
        },
        seek: function() {
          var DD, zD, wD = this,
            pD = arguments;
          if (0 === pD.length) wD._sounds.length && (zD = wD._sounds[0]._id);
          else if (1 === pD.length) {
            wD._getSoundIds().indexOf(pD[0]) >= 0 ? zD = parseInt(pD[0], 10) : wD._sounds.length && (zD = wD._sounds[0]._id, DD = parseFloat(pD[0]))
          } else 2 === pD.length && (DD = parseFloat(pD[0]), zD = parseInt(pD[1], 10));
          if ("undefined" === typeof zD) return 0;
          if ("number" === typeof DD && ("loaded" !== wD._state || wD._playLock)) return wD._queue.push({
            event: "seek",
            action: function() {
              wD.seek.apply(wD, pD)
            }
          }), wD;
          var sD = wD._soundById(zD);
          if (sD) {
            if (!("number" === typeof DD && DD >= 0)) {
              if (wD._webAudio) {
                var rD = wD.playing(zD) ? KD.ctx.currentTime - sD._playStart : 0,
                  LD = sD._rateSeek ? sD._rateSeek - sD._seek : 0;
                return sD._seek + (LD + rD * Math.abs(sD._rate))
              }
              return sD._node.currentTime
            }
            var cD = wD.playing(zD);
            cD && wD.pause(zD, !0), sD._seek = DD, sD._ended = !1, wD._clearTimer(zD), wD._webAudio || !sD._node || isNaN(sD._node.duration) || (sD._node.currentTime = DD);
            var gD = function() {
              cD && wD.play(zD, !0), wD._emit("seek", zD)
            };
            if (cD && !wD._webAudio) {
              var RD = function() {
                wD._playLock ? setTimeout(RD, 0) : gD()
              };
              setTimeout(RD, 0)
            } else gD()
          }
          return wD
        },
        playing: function(DD) {
          var zD = this;
          if ("number" === typeof DD) {
            var wD = zD._soundById(DD);
            return !!wD && !wD.HJ
          }
          for (var pD = 0; pD < zD._sounds.length; pD++)
            if (!zD._sounds[pD].HJ) return !0;
          return !1
        },
        duration: function(DD) {
          var zD = this,
            wD = zD._duration,
            pD = zD._soundById(DD);
          return pD && (wD = zD._sprite[pD._sprite][1] / 1e3), wD
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var DD = this, zD = DD._sounds, wD = 0; wD < zD.length; wD++) zD[wD].HJ || DD.stop(zD[wD]._id), DD._webAudio || (DD._clearSound(zD[wD]._node), zD[wD]._node.removeEventListener("error", zD[wD]._errorFn, !1), zD[wD]._node.removeEventListener(KD._canPlayEvent, zD[wD]._loadFn, !1), zD[wD]._node.removeEventListener("ended", zD[wD]._endFn, !1), KD._releaseHtml5Audio(zD[wD]._node)), delete zD[wD]._node, DD._clearTimer(zD[wD]._id);
          var pD = KD._howls.indexOf(DD);
          pD >= 0 && KD._howls.splice(pD, 1);
          var sD = !0;
          for (wD = 0; wD < KD._howls.length; wD++)
            if (KD._howls[wD]._src === DD._src || DD._src.indexOf(KD._howls[wD]._src) >= 0) {
              sD = !1;
              break
            } return cD && sD && delete cD[DD._src], KD.noAudio = !1, DD._state = "unloaded", DD._sounds = [], DD = null, null
        },
        on: function(DD, zD, wD, pD) {
          var sD = this["_on" + DD];
          return "function" === typeof zD && sD.push(pD ? {
            id: wD,
            LI: zD,
            once: pD
          } : {
            id: wD,
            LI: zD
          }), this
        },
        off: function(DD, zD, wD) {
          var pD = this,
            sD = pD["_on" + DD],
            KD = 0;
          if ("number" === typeof zD && (wD = zD, zD = null), zD || wD)
            for (KD = 0; KD < sD.length; KD++) {
              var rD = wD === sD[KD].id;
              if (zD === sD[KD].LI && rD || !zD && rD) {
                sD.splice(KD, 1);
                break
              }
            } else if (DD) pD["_on" + DD] = [];
            else {
              var LD = Object.keys(pD);
              for (KD = 0; KD < LD.length; KD++) 0 === LD[KD].indexOf("_on") && Array.isArray(pD[LD[KD]]) && (pD[LD[KD]] = [])
            } return pD
        },
        once: function(DD, zD, wD) {
          return this.on(DD, zD, wD, 1), this
        },
        _emit: function(DD, zD, wD) {
          for (var pD = this, sD = pD["_on" + DD], KD = sD.length - 1; KD >= 0; KD--) sD[KD].id && sD[KD].id !== zD && "load" !== DD || (setTimeout(function(DD) {
            DD.call(this, zD, wD)
          }.bind(pD, sD[KD].LI), 0), sD[KD].once && pD.off(DD, sD[KD].LI, sD[KD].id));
          return pD._loadQueue(DD), pD
        },
        _loadQueue: function(DD) {
          var zD = this;
          if (zD._queue.length > 0) {
            var wD = zD._queue[0];
            wD.event === DD && (zD._queue.shift(), zD._loadQueue()), DD || wD.action()
          }
          return zD
        },
        _ended: function(DD) {
          var zD = this,
            wD = DD._sprite;
          if (!zD._webAudio && DD._node && !DD._node.paused && !DD._node.ended && DD._node.currentTime < DD._stop) return setTimeout(zD._ended.bind(zD, DD), 100), zD;
          var pD = !(!DD._loop && !zD._sprite[wD][2]);
          if (zD._emit("end", DD._id), !zD._webAudio && pD && zD.stop(DD._id, !0).play(DD._id), zD._webAudio && pD) {
            zD._emit("play", DD._id), DD._seek = DD._start || 0, DD._rateSeek = 0, DD._playStart = KD.ctx.currentTime;
            var sD = 1e3 * (DD._stop - DD._start) / Math.abs(DD._rate);
            zD._endTimers[DD._id] = setTimeout(zD._ended.bind(zD, DD), sD)
          }
          return zD._webAudio && !pD && (DD.HJ = !0, DD._ended = !0, DD._seek = DD._start || 0, DD._rateSeek = 0, zD._clearTimer(DD._id), zD._cleanBuffer(DD._node), KD._autoSuspend()), zD._webAudio || pD || zD.stop(DD._id, !0), zD
        },
        _clearTimer: function(DD) {
          var zD = this;
          if (zD._endTimers[DD]) {
            if ("function" !== typeof zD._endTimers[DD]) clearTimeout(zD._endTimers[DD]);
            else {
              var wD = zD._soundById(DD);
              wD && wD._node && wD._node.removeEventListener("ended", zD._endTimers[DD], !1)
            }
            delete zD._endTimers[DD]
          }
          return zD
        },
        _soundById: function(DD) {
          for (var zD = this, wD = 0; wD < zD._sounds.length; wD++)
            if (DD === zD._sounds[wD]._id) return zD._sounds[wD];
          return null
        },
        _inactiveSound: function() {
          var DD = this;
          DD._drain();
          for (var zD = 0; zD < DD._sounds.length; zD++)
            if (DD._sounds[zD]._ended) return DD._sounds[zD].reset();
          return new LD(DD)
        },
        _drain: function() {
          var DD = this,
            zD = DD._pool,
            wD = 0,
            pD = 0;
          if (!(DD._sounds.length < zD)) {
            for (pD = 0; pD < DD._sounds.length; pD++) DD._sounds[pD]._ended && wD++;
            for (pD = DD._sounds.length - 1; pD >= 0; pD--) {
              if (wD <= zD) return;
              DD._sounds[pD]._ended && (DD._webAudio && DD._sounds[pD]._node && DD._sounds[pD]._node.disconnect(0), DD._sounds.splice(pD, 1), wD--)
            }
          }
        },
        _getSoundIds: function(DD) {
          if ("undefined" === typeof DD) {
            for (var zD = [], wD = 0; wD < this._sounds.length; wD++) zD.push(this._sounds[wD]._id);
            return zD
          }
          return [DD]
        },
        _refreshBuffer: function(DD) {
          return DD._node.bufferSource = KD.ctx.createBufferSource(), DD._node.bufferSource.buffer = cD[this._src], DD._panner ? DD._node.bufferSource.connect(DD._panner) : DD._node.bufferSource.connect(DD._node), DD._node.bufferSource.loop = DD._loop, DD._loop && (DD._node.bufferSource.loopStart = DD._start || 0, DD._node.bufferSource.loopEnd = DD._stop || 0), DD._node.bufferSource.playbackRate.setValueAtTime(DD._rate, KD.ctx.currentTime), this
        },
        _cleanBuffer: function(DD) {
          var zD = KD._navigator && KD._navigator.vendor.indexOf("Apple") >= 0;
          if (KD._scratchBuffer && DD.bufferSource && (DD.bufferSource.onended = null, DD.bufferSource.disconnect(0), zD)) try {
            DD.bufferSource.buffer = KD._scratchBuffer
          } catch (wD) {}
          return DD.bufferSource = null, this
        },
        _clearSound: function(DD) {
          /MSIE |Trident\//.test(KD._navigator && KD._navigator.userAgent) || (DD.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var LD = function(DD) {
        this._parent = DD, this.init()
      };
      LD.prototype = {
        init: function() {
          var DD = this,
            zD = DD._parent;
          return DD._muted = zD._muted, DD._loop = zD._loop, DD._volume = zD._volume, DD._rate = zD._rate, DD._seek = 0, DD.HJ = !0, DD._ended = !0, DD._sprite = "__default", DD._id = ++KD._counter, zD._sounds.push(DD), DD.create(), DD
        },
        create: function() {
          var DD = this,
            zD = DD._parent,
            wD = KD._muted || DD._muted || DD._parent._muted ? 0 : DD._volume;
          return zD._webAudio ? (DD._node = "undefined" === typeof KD.ctx.createGain ? KD.ctx.createGainNode() : KD.ctx.createGain(), DD._node.gain.setValueAtTime(wD, KD.ctx.currentTime), DD._node.paused = !0, DD._node.connect(KD.masterGain)) : KD.noAudio || (DD._node = KD._obtainHtml5Audio(), DD._errorFn = DD._errorListener.bind(DD), DD._node.addEventListener("error", DD._errorFn, !1), DD._loadFn = DD._loadListener.bind(DD), DD._node.addEventListener(KD._canPlayEvent, DD._loadFn, !1), DD._endFn = DD._endListener.bind(DD), DD._node.addEventListener("ended", DD._endFn, !1), DD._node.src = zD._src, DD._node.preload = !0 === zD._preload ? "auto" : zD._preload, DD._node.volume = wD * KD.volume(), DD._node.load()), DD
        },
        reset: function() {
          var DD = this,
            zD = DD._parent;
          return DD._muted = zD._muted, DD._loop = zD._loop, DD._volume = zD._volume, DD._rate = zD._rate, DD._seek = 0, DD._rateSeek = 0, DD.HJ = !0, DD._ended = !0, DD._sprite = "__default", DD._id = ++KD._counter, DD
        },
        _errorListener: function() {
          var DD = this;
          DD._parent._emit("loaderror", DD._id, DD._node.error ? DD._node.error.code : 0), DD._node.removeEventListener("error", DD._errorFn, !1)
        },
        _loadListener: function() {
          var DD = this,
            zD = DD._parent;
          zD._duration = Math.ceil(10 * DD._node.duration) / 10, 0 === Object.keys(zD._sprite).length && (zD._sprite = {
            __default: [0, 1e3 * zD._duration]
          }), "loaded" !== zD._state && (zD._state = "loaded", zD._emit("load"), zD._loadQueue()), DD._node.removeEventListener(KD._canPlayEvent, DD._loadFn, !1)
        },
        _endListener: function() {
          var DD = this,
            zD = DD._parent;
          zD._duration === 1 / 0 && (zD._duration = Math.ceil(10 * DD._node.duration) / 10, zD._sprite.__default[1] === 1 / 0 && (zD._sprite.__default[1] = 1e3 * zD._duration), zD._ended(DD)), DD._node.removeEventListener("ended", DD._endFn, !1)
        }
      };
      var cD = {},
        gD = function(DD) {
          var zD = DD._src;
          if (cD[zD]) return DD._duration = cD[zD].duration, void UD(DD);
          if (/^data:[^;]+;base64,/.test(zD)) {
            for (var wD = atob(zD.split(",")[1]), pD = new Uint8Array(wD.length), sD = 0; sD < wD.length; ++sD) pD[sD] = wD.charCodeAt(sD);
            AD(pD.buffer, DD)
          } else {
            var KD = new XMLHttpRequest;
            KD.open(DD._xhr.method, zD, !0), KD.withCredentials = DD._xhr.withCredentials, KD.responseType = "arraybuffer", DD._xhr.headers && Object.keys(DD._xhr.headers).forEach((function(zD) {
              KD.setRequestHeader(zD, DD._xhr.headers[zD])
            })), KD.onload = function() {
              var zD = (KD.status + "")[0];
              "0" === zD || "2" === zD || "3" === zD ? AD(KD.response, DD) : DD._emit("loaderror", null, "Failed loading audio file with status: " + KD.status + ".")
            }, KD.onerror = function() {
              DD._webAudio && (DD._html5 = !0, DD._webAudio = !1, DD._sounds = [], delete cD[zD], DD.load())
            }, RD(KD)
          }
        },
        RD = function(DD) {
          try {
            DD.send()
          } catch (zD) {
            DD.onerror()
          }
        },
        AD = function(DD, zD) {
          var wD = function() {
              zD._emit("loaderror", null, "Decoding audio data failed.")
            },
            pD = function(DD) {
              DD && zD._sounds.length > 0 ? (cD[zD._src] = DD, UD(zD, DD)) : wD()
            };
          "undefined" !== typeof Promise && 1 === KD.ctx.decodeAudioData.length ? KD.ctx.decodeAudioData(DD).then(pD).catch(wD) : KD.ctx.decodeAudioData(DD, pD, wD)
        },
        UD = function(DD, zD) {
          zD && !DD._duration && (DD._duration = zD.duration), 0 === Object.keys(DD._sprite).length && (DD._sprite = {
            __default: [0, 1e3 * DD._duration]
          }), "loaded" !== DD._state && (DD._state = "loaded", DD._emit("load"), DD._loadQueue())
        },
        fD = function() {
          if (KD.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? KD.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? KD.ctx = new webkitAudioContext : KD.usingWebAudio = !1
            } catch (sD) {
              KD.usingWebAudio = !1
            }
            KD.ctx || (KD.usingWebAudio = !1);
            var DD = /iP(hone|od|ad)/.test(KD._navigator && KD._navigator.platform),
              zD = KD._navigator && KD._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              wD = zD ? parseInt(zD[1], 10) : null;
            if (DD && wD && wD < 9) {
              var pD = /safari/.test(KD._navigator && KD._navigator.userAgent.toLowerCase());
              KD._navigator && !pD && (KD.usingWebAudio = !1)
            }
            KD.usingWebAudio && (KD.masterGain = "undefined" === typeof KD.ctx.createGain ? KD.ctx.createGainNode() : KD.ctx.createGain(), KD.masterGain.gain.setValueAtTime(KD._muted ? 0 : KD._volume, KD.ctx.currentTime), KD.masterGain.connect(KD.ctx.destination)), KD._setup()
          }
        };
      void 0 === (pD = function() {
        return {
          Howler: KD,
          Howl: rD
        }
      }.apply(zD, [])) || (DD.exports = pD), zD.Howler = KD, zD.Howl = rD, "undefined" !== typeof wD.g ? (wD.g.HowlerGlobal = sD, wD.g.Howler = KD, wD.g.Howl = rD, wD.g.Sound = LD) : "undefined" !== typeof window && (window.HowlerGlobal = sD, window.Howler = KD, window.Howl = rD, window.Sound = LD)
    }(),
    function() {
      var DD;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(DD) {
        var zD = this;
        if (!zD.ctx || !zD.ctx.listener) return zD;
        for (var wD = zD._howls.length - 1; wD >= 0; wD--) zD._howls[wD].stereo(DD);
        return zD
      }, HowlerGlobal.prototype.pos = function(DD, zD, wD) {
        var pD = this;
        return pD.ctx && pD.ctx.listener ? (zD = "number" !== typeof zD ? pD._pos[1] : zD, wD = "number" !== typeof wD ? pD._pos[2] : wD, "number" !== typeof DD ? pD._pos : (pD._pos = [DD, zD, wD], "undefined" !== typeof pD.ctx.listener.positionX ? (pD.ctx.listener.positionX.setTargetAtTime(pD._pos[0], Howler.ctx.currentTime, .1), pD.ctx.listener.positionY.setTargetAtTime(pD._pos[1], Howler.ctx.currentTime, .1), pD.ctx.listener.positionZ.setTargetAtTime(pD._pos[2], Howler.ctx.currentTime, .1)) : pD.ctx.listener.setPosition(pD._pos[0], pD._pos[1], pD._pos[2]), pD)) : pD
      }, HowlerGlobal.prototype.orientation = function(DD, zD, wD, pD, sD, KD) {
        var rD = this;
        if (!rD.ctx || !rD.ctx.listener) return rD;
        var LD = rD._orientation;
        return zD = "number" !== typeof zD ? LD[1] : zD, wD = "number" !== typeof wD ? LD[2] : wD, pD = "number" !== typeof pD ? LD[3] : pD, sD = "number" !== typeof sD ? LD[4] : sD, KD = "number" !== typeof KD ? LD[5] : KD, "number" !== typeof DD ? LD : (rD._orientation = [DD, zD, wD, pD, sD, KD], "undefined" !== typeof rD.ctx.listener.forwardX ? (rD.ctx.listener.forwardX.setTargetAtTime(DD, Howler.ctx.currentTime, .1), rD.ctx.listener.forwardY.setTargetAtTime(zD, Howler.ctx.currentTime, .1), rD.ctx.listener.forwardZ.setTargetAtTime(wD, Howler.ctx.currentTime, .1), rD.ctx.listener.upX.setTargetAtTime(pD, Howler.ctx.currentTime, .1), rD.ctx.listener.upY.setTargetAtTime(sD, Howler.ctx.currentTime, .1), rD.ctx.listener.upZ.setTargetAtTime(KD, Howler.ctx.currentTime, .1)) : rD.ctx.listener.setOrientation(DD, zD, wD, pD, sD, KD), rD)
      }, Howl.prototype.init = (DD = Howl.prototype.init, function(zD) {
        var wD = this;
        return wD._orientation = zD.orientation || [1, 0, 0], wD._stereo = zD.stereo || null, wD._pos = zD.pos || null, wD._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof zD.coneInnerAngle ? zD.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof zD.coneOuterAngle ? zD.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof zD.coneOuterGain ? zD.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof zD.distanceModel ? zD.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof zD.maxDistance ? zD.maxDistance : 1e4,
          panningModel: "undefined" !== typeof zD.panningModel ? zD.panningModel : "HRTF",
          refDistance: "undefined" !== typeof zD.refDistance ? zD.refDistance : 1,
          rolloffFactor: "undefined" !== typeof zD.rolloffFactor ? zD.rolloffFactor : 1
        }, wD._onstereo = zD.onstereo ? [{
          LI: zD.onstereo
        }] : [], wD._onpos = zD.onpos ? [{
          LI: zD.onpos
        }] : [], wD._onorientation = zD.onorientation ? [{
          LI: zD.onorientation
        }] : [], DD.call(this, zD)
      }), Howl.prototype.stereo = function(DD, wD) {
        var pD = this;
        if (!pD._webAudio) return pD;
        if ("loaded" !== pD._state) return pD._queue.push({
          event: "stereo",
          action: function() {
            pD.stereo(DD, wD)
          }
        }), pD;
        var sD = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof wD) {
          if ("number" !== typeof DD) return pD._stereo;
          pD._stereo = DD, pD._pos = [DD, 0, 0]
        }
        for (var KD = pD._getSoundIds(wD), rD = 0; rD < KD.length; rD++) {
          var LD = pD._soundById(KD[rD]);
          if (LD) {
            if ("number" !== typeof DD) return LD._stereo;
            LD._stereo = DD, LD._pos = [DD, 0, 0], LD._node && (LD._pannerAttr.panningModel = "equalpower", LD._panner && LD._panner.pan || zD(LD, sD), "spatial" === sD ? "undefined" !== typeof LD._panner.positionX ? (LD._panner.positionX.setValueAtTime(DD, Howler.ctx.currentTime), LD._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), LD._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : LD._panner.setPosition(DD, 0, 0) : LD._panner.pan.setValueAtTime(DD, Howler.ctx.currentTime)), pD._emit("stereo", LD._id)
          }
        }
        return pD
      }, Howl.prototype.pos = function(DD, wD, pD, sD) {
        var KD = this;
        if (!KD._webAudio) return KD;
        if ("loaded" !== KD._state) return KD._queue.push({
          event: "pos",
          action: function() {
            KD.pos(DD, wD, pD, sD)
          }
        }), KD;
        if (wD = "number" !== typeof wD ? 0 : wD, pD = "number" !== typeof pD ? -.5 : pD, "undefined" === typeof sD) {
          if ("number" !== typeof DD) return KD._pos;
          KD._pos = [DD, wD, pD]
        }
        for (var rD = KD._getSoundIds(sD), LD = 0; LD < rD.length; LD++) {
          var cD = KD._soundById(rD[LD]);
          if (cD) {
            if ("number" !== typeof DD) return cD._pos;
            cD._pos = [DD, wD, pD], cD._node && (cD._panner && !cD._panner.pan || zD(cD, "spatial"), "undefined" !== typeof cD._panner.positionX ? (cD._panner.positionX.setValueAtTime(DD, Howler.ctx.currentTime), cD._panner.positionY.setValueAtTime(wD, Howler.ctx.currentTime), cD._panner.positionZ.setValueAtTime(pD, Howler.ctx.currentTime)) : cD._panner.setPosition(DD, wD, pD)), KD._emit("pos", cD._id)
          }
        }
        return KD
      }, Howl.prototype.orientation = function(DD, wD, pD, sD) {
        var KD = this;
        if (!KD._webAudio) return KD;
        if ("loaded" !== KD._state) return KD._queue.push({
          event: "orientation",
          action: function() {
            KD.orientation(DD, wD, pD, sD)
          }
        }), KD;
        if (wD = "number" !== typeof wD ? KD._orientation[1] : wD, pD = "number" !== typeof pD ? KD._orientation[2] : pD, "undefined" === typeof sD) {
          if ("number" !== typeof DD) return KD._orientation;
          KD._orientation = [DD, wD, pD]
        }
        for (var rD = KD._getSoundIds(sD), LD = 0; LD < rD.length; LD++) {
          var cD = KD._soundById(rD[LD]);
          if (cD) {
            if ("number" !== typeof DD) return cD._orientation;
            cD._orientation = [DD, wD, pD], cD._node && (cD._panner || (cD._pos || (cD._pos = KD._pos || [0, 0, -.5]), zD(cD, "spatial")), "undefined" !== typeof cD._panner.orientationX ? (cD._panner.orientationX.setValueAtTime(DD, Howler.ctx.currentTime), cD._panner.orientationY.setValueAtTime(wD, Howler.ctx.currentTime), cD._panner.orientationZ.setValueAtTime(pD, Howler.ctx.currentTime)) : cD._panner.setOrientation(DD, wD, pD)), KD._emit("orientation", cD._id)
          }
        }
        return KD
      }, Howl.prototype.pannerAttr = function() {
        var DD, wD, pD, sD = this,
          KD = arguments;
        if (!sD._webAudio) return sD;
        if (0 === KD.length) return sD._pannerAttr;
        if (1 === KD.length) {
          if ("object" !== typeof KD[0]) return (pD = sD._soundById(parseInt(KD[0], 10))) ? pD._pannerAttr : sD._pannerAttr;
          DD = KD[0], "undefined" === typeof wD && (DD.pannerAttr || (DD.pannerAttr = {
            coneInnerAngle: DD.coneInnerAngle,
            coneOuterAngle: DD.coneOuterAngle,
            coneOuterGain: DD.coneOuterGain,
            distanceModel: DD.distanceModel,
            maxDistance: DD.maxDistance,
            refDistance: DD.refDistance,
            rolloffFactor: DD.rolloffFactor,
            panningModel: DD.panningModel
          }), sD._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof DD.pannerAttr.coneInnerAngle ? DD.pannerAttr.coneInnerAngle : sD._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof DD.pannerAttr.coneOuterAngle ? DD.pannerAttr.coneOuterAngle : sD._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof DD.pannerAttr.coneOuterGain ? DD.pannerAttr.coneOuterGain : sD._coneOuterGain,
            distanceModel: "undefined" !== typeof DD.pannerAttr.distanceModel ? DD.pannerAttr.distanceModel : sD._distanceModel,
            maxDistance: "undefined" !== typeof DD.pannerAttr.maxDistance ? DD.pannerAttr.maxDistance : sD._maxDistance,
            refDistance: "undefined" !== typeof DD.pannerAttr.refDistance ? DD.pannerAttr.refDistance : sD._refDistance,
            rolloffFactor: "undefined" !== typeof DD.pannerAttr.rolloffFactor ? DD.pannerAttr.rolloffFactor : sD._rolloffFactor,
            panningModel: "undefined" !== typeof DD.pannerAttr.panningModel ? DD.pannerAttr.panningModel : sD._panningModel
          })
        } else 2 === KD.length && (DD = KD[0], wD = parseInt(KD[1], 10));
        for (var rD = sD._getSoundIds(wD), LD = 0; LD < rD.length; LD++)
          if (pD = sD._soundById(rD[LD])) {
            var cD = pD._pannerAttr;
            cD = {
              coneInnerAngle: "undefined" !== typeof DD.coneInnerAngle ? DD.coneInnerAngle : cD.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof DD.coneOuterAngle ? DD.coneOuterAngle : cD.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof DD.coneOuterGain ? DD.coneOuterGain : cD.coneOuterGain,
              distanceModel: "undefined" !== typeof DD.distanceModel ? DD.distanceModel : cD.distanceModel,
              maxDistance: "undefined" !== typeof DD.maxDistance ? DD.maxDistance : cD.maxDistance,
              refDistance: "undefined" !== typeof DD.refDistance ? DD.refDistance : cD.refDistance,
              rolloffFactor: "undefined" !== typeof DD.rolloffFactor ? DD.rolloffFactor : cD.rolloffFactor,
              panningModel: "undefined" !== typeof DD.panningModel ? DD.panningModel : cD.panningModel
            };
            var gD = pD._panner;
            gD ? (gD.coneInnerAngle = cD.coneInnerAngle, gD.coneOuterAngle = cD.coneOuterAngle, gD.coneOuterGain = cD.coneOuterGain, gD.distanceModel = cD.distanceModel, gD.maxDistance = cD.maxDistance, gD.refDistance = cD.refDistance, gD.rolloffFactor = cD.rolloffFactor, gD.panningModel = cD.panningModel) : (pD._pos || (pD._pos = sD._pos || [0, 0, -.5]), zD(pD, "spatial"))
          } return sD
      }, Sound.prototype.init = function(DD) {
        return function() {
          var zD = this,
            wD = zD._parent;
          zD._orientation = wD._orientation, zD._stereo = wD._stereo, zD._pos = wD._pos, zD._pannerAttr = wD._pannerAttr, DD.call(this), zD._stereo ? wD.stereo(zD._stereo) : zD._pos && wD.pos(zD._pos[0], zD._pos[1], zD._pos[2], zD._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(DD) {
        return function() {
          var zD = this,
            wD = zD._parent;
          return zD._orientation = wD._orientation, zD._stereo = wD._stereo, zD._pos = wD._pos, zD._pannerAttr = wD._pannerAttr, zD._stereo ? wD.stereo(zD._stereo) : zD._pos ? wD.pos(zD._pos[0], zD._pos[1], zD._pos[2], zD._id) : zD._panner && (zD._panner.disconnect(0), zD._panner = void 0, wD._refreshBuffer(zD)), DD.call(this)
        }
      }(Sound.prototype.reset);
      var zD = function(DD, zD) {
        "spatial" === (zD = zD || "spatial") ? (DD._panner = Howler.ctx.createPanner(), DD._panner.coneInnerAngle = DD._pannerAttr.coneInnerAngle, DD._panner.coneOuterAngle = DD._pannerAttr.coneOuterAngle, DD._panner.coneOuterGain = DD._pannerAttr.coneOuterGain, DD._panner.distanceModel = DD._pannerAttr.distanceModel, DD._panner.maxDistance = DD._pannerAttr.maxDistance, DD._panner.refDistance = DD._pannerAttr.refDistance, DD._panner.rolloffFactor = DD._pannerAttr.rolloffFactor, DD._panner.panningModel = DD._pannerAttr.panningModel, "undefined" !== typeof DD._panner.positionX ? (DD._panner.positionX.setValueAtTime(DD._pos[0], Howler.ctx.currentTime), DD._panner.positionY.setValueAtTime(DD._pos[1], Howler.ctx.currentTime), DD._panner.positionZ.setValueAtTime(DD._pos[2], Howler.ctx.currentTime)) : DD._panner.setPosition(DD._pos[0], DD._pos[1], DD._pos[2]), "undefined" !== typeof DD._panner.orientationX ? (DD._panner.orientationX.setValueAtTime(DD._orientation[0], Howler.ctx.currentTime), DD._panner.orientationY.setValueAtTime(DD._orientation[1], Howler.ctx.currentTime), DD._panner.orientationZ.setValueAtTime(DD._orientation[2], Howler.ctx.currentTime)) : DD._panner.setOrientation(DD._orientation[0], DD._orientation[1], DD._orientation[2])) : (DD._panner = Howler.ctx.createStereoPanner(), DD._panner.pan.setValueAtTime(DD._stereo, Howler.ctx.currentTime)), DD._panner.connect(DD._node), DD.HJ || DD._parent.pause(DD._id, !0).play(DD._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);