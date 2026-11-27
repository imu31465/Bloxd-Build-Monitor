/*! For license information please see 4udp6d.113.c56ade1b.chunk.js.LICENSE.txt */
export const id = 113;
export const ids = [113];
export const modules = {
  5744: (RR, JR, GR) => {
    var yR;
    ! function() {
      var tR = function() {
        this.init()
      };
      tR.prototype = {
        init: function() {
          var RR = this || uR;
          return RR._counter = 1e3, RR._html5AudioPool = [], RR.html5PoolSize = 10, RR._codecs = {}, RR._howls = [], RR._muted = !1, RR._volume = 1, RR._canPlayEvent = "canplaythrough", RR._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, RR.masterGain = null, RR.noAudio = !1, RR.usingWebAudio = !0, RR.autoSuspend = !0, RR.ctx = null, RR.autoUnlock = !0, RR._setup(), RR
        },
        volume: function(RR) {
          var JR = this || uR;
          if (RR = parseFloat(RR), JR.ctx || rR(), "undefined" !== typeof RR && RR >= 0 && RR <= 1) {
            if (JR._volume = RR, JR._muted) return JR;
            JR.usingWebAudio && JR.masterGain.gain.setValueAtTime(RR, uR.ctx.currentTime);
            for (var GR = 0; GR < JR._howls.length; GR++)
              if (!JR._howls[GR]._webAudio)
                for (var yR = JR._howls[GR]._getSoundIds(), tR = 0; tR < yR.length; tR++) {
                  var ZR = JR._howls[GR]._soundById(yR[tR]);
                  ZR && ZR._node && (ZR._node.volume = ZR._volume * RR)
                }
            return JR
          }
          return JR._volume
        },
        mute: function(RR) {
          var JR = this || uR;
          JR.ctx || rR(), JR._muted = RR, JR.usingWebAudio && JR.masterGain.gain.setValueAtTime(RR ? 0 : JR._volume, uR.ctx.currentTime);
          for (var GR = 0; GR < JR._howls.length; GR++)
            if (!JR._howls[GR]._webAudio)
              for (var yR = JR._howls[GR]._getSoundIds(), tR = 0; tR < yR.length; tR++) {
                var ZR = JR._howls[GR]._soundById(yR[tR]);
                ZR && ZR._node && (ZR._node.muted = !!RR || ZR._muted)
              }
          return JR
        },
        stop: function() {
          for (var RR = this || uR, JR = 0; JR < RR._howls.length; JR++) RR._howls[JR].stop();
          return RR
        },
        unload: function() {
          for (var RR = this || uR, JR = RR._howls.length - 1; JR >= 0; JR--) RR._howls[JR].unload();
          return RR.usingWebAudio && RR.ctx && "undefined" !== typeof RR.ctx.close && (RR.ctx.close(), RR.ctx = null, rR()), RR
        },
        codecs: function(RR) {
          return (this || uR)._codecs[RR.replace(/^x-/, "")]
        },
        _setup: function() {
          var RR = this || uR;
          if (RR.state = RR.ctx && RR.ctx.state || "suspended", RR._autoSuspend(), !RR.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (RR._canPlayEvent = "canplay")
            } catch (JR) {
              RR.noAudio = !0
            } else RR.noAudio = !0;
          try {
            (new Audio).muted && (RR.noAudio = !0)
          } catch (JR) {}
          return RR.noAudio || RR._setupCodecs(), RR
        },
        _setupCodecs: function() {
          var RR = this || uR,
            JR = null;
          try {
            JR = "undefined" !== typeof Audio ? new Audio : null
          } catch (VR) {
            return RR
          }
          if (!JR || "function" !== typeof JR.canPlayType) return RR;
          var GR = JR.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            yR = RR._navigator ? RR._navigator.userAgent : "",
            tR = yR.match(/OPR\/([0-6].)/g),
            ZR = tR && parseInt(tR[0].split("/")[1], 10) < 33,
            qR = -1 !== yR.indexOf("Safari") && -1 === yR.indexOf("Chrome"),
            iR = yR.match(/Version\/(.*?) /),
            fR = qR && iR && parseInt(iR[1], 10) < 15;
          return RR._codecs = {
            mp3: !(ZR || !GR && !JR.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!GR,
            opus: !!JR.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!JR.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!JR.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(JR.canPlayType('audio/wav; codecs="1"') || JR.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!JR.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!JR.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(JR.canPlayType("audio/x-m4a;") || JR.canPlayType("audio/m4a;") || JR.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(JR.canPlayType("audio/x-m4b;") || JR.canPlayType("audio/m4b;") || JR.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(JR.canPlayType("audio/x-mp4;") || JR.canPlayType("audio/mp4;") || JR.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(fR || !JR.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(fR || !JR.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!JR.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(JR.canPlayType("audio/x-flac;") || JR.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, RR
        },
        _unlockAudio: function() {
          var RR = this || uR;
          if (!RR._audioUnlocked && RR.ctx) {
            RR._audioUnlocked = !1, RR.autoUnlock = !1, RR._mobileUnloaded || 44100 === RR.ctx.sampleRate || (RR._mobileUnloaded = !0, RR.unload()), RR._scratchBuffer = RR.ctx.createBuffer(1, 1, 22050);
            var JR = function(GR) {
              for (; RR._html5AudioPool.length < RR.html5PoolSize;) try {
                var yR = new Audio;
                yR._unlocked = !0, RR._releaseHtml5Audio(yR)
              } catch (GR) {
                RR.noAudio = !0;
                break
              }
              for (var tR = 0; tR < RR._howls.length; tR++)
                if (!RR._howls[tR]._webAudio)
                  for (var uR = RR._howls[tR]._getSoundIds(), ZR = 0; ZR < uR.length; ZR++) {
                    var qR = RR._howls[tR]._soundById(uR[ZR]);
                    qR && qR._node && !qR._node._unlocked && (qR._node._unlocked = !0, qR._node.load())
                  }
              RR._autoResume();
              var iR = RR.ctx.createBufferSource();
              iR.buffer = RR._scratchBuffer, iR.connect(RR.ctx.destination), "undefined" === typeof iR.start ? iR.noteOn(0) : iR.start(0), "function" === typeof RR.ctx.resume && RR.ctx.resume(), iR.onended = function() {
                iR.disconnect(0), RR._audioUnlocked = !0, document.removeEventListener("touchstart", JR, !0), document.removeEventListener("touchend", JR, !0), document.removeEventListener("click", JR, !0), document.removeEventListener("keydown", JR, !0);
                for (var GR = 0; GR < RR._howls.length; GR++) RR._howls[GR]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", JR, !0), document.addEventListener("touchend", JR, !0), document.addEventListener("click", JR, !0), document.addEventListener("keydown", JR, !0), RR
          }
        },
        _obtainHtml5Audio: function() {
          var RR = this || uR;
          if (RR._html5AudioPool.length) return RR._html5AudioPool.pop();
          var JR = (new Audio).play();
          return JR && "undefined" !== typeof Promise && (JR instanceof Promise || "function" === typeof JR.then) && JR.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(RR) {
          var JR = this || uR;
          return RR._unlocked && JR._html5AudioPool.push(RR), JR
        },
        _autoSuspend: function() {
          var RR = this;
          if (RR.autoSuspend && RR.ctx && "undefined" !== typeof RR.ctx.suspend && uR.usingWebAudio) {
            for (var JR = 0; JR < RR._howls.length; JR++)
              if (RR._howls[JR]._webAudio)
                for (var GR = 0; GR < RR._howls[JR]._sounds.length; GR++)
                  if (!RR._howls[JR]._sounds[GR].pK) return RR;
            return RR._suspendTimer && clearTimeout(RR._suspendTimer), RR._suspendTimer = setTimeout((function() {
              if (RR.autoSuspend) {
                RR._suspendTimer = null, RR.state = "suspending";
                var JR = function() {
                  RR.state = "suspended", RR._resumeAfterSuspend && (delete RR._resumeAfterSuspend, RR._autoResume())
                };
                RR.ctx.suspend().then(JR, JR)
              }
            }), 3e4), RR
          }
        },
        _autoResume: function() {
          var RR = this;
          if (RR.ctx && "undefined" !== typeof RR.ctx.resume && uR.usingWebAudio) return "running" === RR.state && "interrupted" !== RR.ctx.state && RR._suspendTimer ? (clearTimeout(RR._suspendTimer), RR._suspendTimer = null) : "suspended" === RR.state || "running" === RR.state && "interrupted" === RR.ctx.state ? (RR.ctx.resume().then((function() {
            RR.state = "running";
            for (var JR = 0; JR < RR._howls.length; JR++) RR._howls[JR]._emit("resume")
          })), RR._suspendTimer && (clearTimeout(RR._suspendTimer), RR._suspendTimer = null)) : "suspending" === RR.state && (RR._resumeAfterSuspend = !0), RR
        }
      };
      var uR = new tR,
        ZR = function(RR) {
          RR.src && 0 !== RR.src.length ? this.init(RR) : console.error("An array of source files must be passed with any new Howl.")
        };
      ZR.prototype = {
        init: function(RR) {
          var JR = this;
          return uR.ctx || rR(), JR._autoplay = RR.autoplay || !1, JR._format = "string" !== typeof RR.format ? RR.format : [RR.format], JR._html5 = RR.html5 || !1, JR._muted = RR.mute || !1, JR._loop = RR.loop || !1, JR._pool = RR.pool || 5, JR._preload = "boolean" !== typeof RR.preload && "metadata" !== RR.preload || RR.preload, JR._rate = RR.rate || 1, JR._sprite = RR.sprite || {}, JR._src = "string" !== typeof RR.src ? RR.src : [RR.src], JR._volume = void 0 !== RR.volume ? RR.volume : 1, JR._xhr = {
            method: RR.xhr && RR.xhr.method ? RR.xhr.method : "GET",
            headers: RR.xhr && RR.xhr.headers ? RR.xhr.headers : null,
            withCredentials: !(!RR.xhr || !RR.xhr.withCredentials) && RR.xhr.withCredentials
          }, JR._duration = 0, JR._state = "unloaded", JR._sounds = [], JR._endTimers = {}, JR._queue = [], JR._playLock = !1, JR._onend = RR.onend ? [{
            iK: RR.onend
          }] : [], JR._onfade = RR.onfade ? [{
            iK: RR.onfade
          }] : [], JR._onload = RR.onload ? [{
            iK: RR.onload
          }] : [], JR._onloaderror = RR.onloaderror ? [{
            iK: RR.onloaderror
          }] : [], JR._onplayerror = RR.onplayerror ? [{
            iK: RR.onplayerror
          }] : [], JR._onpause = RR.onpause ? [{
            iK: RR.onpause
          }] : [], JR._onplay = RR.onplay ? [{
            iK: RR.onplay
          }] : [], JR._onstop = RR.onstop ? [{
            iK: RR.onstop
          }] : [], JR._onmute = RR.onmute ? [{
            iK: RR.onmute
          }] : [], JR._onvolume = RR.onvolume ? [{
            iK: RR.onvolume
          }] : [], JR._onrate = RR.onrate ? [{
            iK: RR.onrate
          }] : [], JR._onseek = RR.onseek ? [{
            iK: RR.onseek
          }] : [], JR._onunlock = RR.onunlock ? [{
            iK: RR.onunlock
          }] : [], JR._onresume = [], JR._webAudio = uR.usingWebAudio && !JR._html5, "undefined" !== typeof uR.ctx && uR.ctx && uR.autoUnlock && uR._unlockAudio(), uR._howls.push(JR), JR._autoplay && JR._queue.push({
            event: "play",
            action: function() {
              JR.play()
            }
          }), JR._preload && "none" !== JR._preload && JR.load(), JR
        },
        load: function() {
          var RR = this,
            JR = null;
          if (uR.noAudio) RR._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof RR._src && (RR._src = [RR._src]);
            for (var GR = 0; GR < RR._src.length; GR++) {
              var yR, tR;
              if (RR._format && RR._format[GR]) yR = RR._format[GR];
              else {
                if ("string" !== typeof(tR = RR._src[GR])) {
                  RR._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(yR = /^data:audio\/([^;,]+);/i.exec(tR)) || (yR = /\.([^.]+)$/.exec(tR.split("?", 1)[0])), yR && (yR = yR[1].toLowerCase())
              }
              if (yR || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), yR && uR.codecs(yR)) {
                JR = RR._src[GR];
                break
              }
            }
            if (JR) return RR._src = JR, RR._state = "loading", "https:" === window.location.protocol && "http:" === JR.slice(0, 5) && (RR._html5 = !0, RR._webAudio = !1), new qR(RR), RR._webAudio && fR(RR), RR;
            RR._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(RR, JR) {
          var GR = this,
            yR = null;
          if ("number" === typeof RR) yR = RR, RR = null;
          else {
            if ("string" === typeof RR && "loaded" === GR._state && !GR._sprite[RR]) return null;
            if ("undefined" === typeof RR && (RR = "__default", !GR._playLock)) {
              for (var tR = 0, ZR = 0; ZR < GR._sounds.length; ZR++) GR._sounds[ZR].pK && !GR._sounds[ZR]._ended && (tR++, yR = GR._sounds[ZR]._id);
              1 === tR ? RR = null : yR = null
            }
          }
          var qR = yR ? GR._soundById(yR) : GR._inactiveSound();
          if (!qR) return null;
          if (yR && !RR && (RR = qR._sprite || "__default"), "loaded" !== GR._state) {
            qR._sprite = RR, qR._ended = !1;
            var iR = qR._id;
            return GR._queue.push({
              event: "play",
              action: function() {
                GR.play(iR)
              }
            }), iR
          }
          if (yR && !qR.pK) return JR || GR._loadQueue("play"), qR._id;
          GR._webAudio && uR._autoResume();
          var fR = Math.max(0, qR._seek > 0 ? qR._seek : GR._sprite[RR][0] / 1e3),
            VR = Math.max(0, (GR._sprite[RR][0] + GR._sprite[RR][1]) / 1e3 - fR),
            KR = 1e3 * VR / Math.abs(qR._rate),
            wR = GR._sprite[RR][0] / 1e3,
            rR = (GR._sprite[RR][0] + GR._sprite[RR][1]) / 1e3;
          qR._sprite = RR, qR._ended = !1;
          var eR = function() {
            qR.pK = !1, qR._seek = fR, qR._start = wR, qR._stop = rR, qR._loop = !(!qR._loop && !GR._sprite[RR][2])
          };
          if (!(fR >= rR)) {
            var aR = qR._node;
            if (GR._webAudio) {
              var LR = function() {
                GR._playLock = !1, eR(), GR._refreshBuffer(qR);
                var RR = qR._muted || GR._muted ? 0 : qR._volume;
                aR.gain.setValueAtTime(RR, uR.ctx.currentTime), qR._playStart = uR.ctx.currentTime, "undefined" === typeof aR.bufferSource.start ? qR._loop ? aR.bufferSource.noteGrainOn(0, fR, 86400) : aR.bufferSource.noteGrainOn(0, fR, VR) : qR._loop ? aR.bufferSource.start(0, fR, 86400) : aR.bufferSource.start(0, fR, VR), KR !== 1 / 0 && (GR._endTimers[qR._id] = setTimeout(GR._ended.bind(GR, qR), KR)), JR || setTimeout((function() {
                  GR._emit("play", qR._id), GR._loadQueue()
                }), 0)
              };
              "running" === uR.state && "interrupted" !== uR.ctx.state ? LR() : (GR._playLock = !0, GR.once("resume", LR), GR._clearTimer(qR._id))
            } else {
              var nR = function() {
                aR.currentTime = fR, aR.muted = qR._muted || GR._muted || uR._muted || aR.muted, aR.volume = qR._volume * uR.volume(), aR.playbackRate = qR._rate;
                try {
                  var yR = aR.play();
                  if (yR && "undefined" !== typeof Promise && (yR instanceof Promise || "function" === typeof yR.then) ? (GR._playLock = !0, eR(), yR.then((function() {
                      GR._playLock = !1, aR._unlocked = !0, JR ? GR._loadQueue() : GR._emit("play", qR._id)
                    })).catch((function() {
                      GR._playLock = !1, GR._emit("playerror", qR._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), qR._ended = !0, qR.pK = !0
                    }))) : JR || (GR._playLock = !1, eR(), GR._emit("play", qR._id)), aR.playbackRate = qR._rate, aR.paused) return void GR._emit("playerror", qR._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== RR || qR._loop ? GR._endTimers[qR._id] = setTimeout(GR._ended.bind(GR, qR), KR) : (GR._endTimers[qR._id] = function() {
                    GR._ended(qR), aR.removeEventListener("ended", GR._endTimers[qR._id], !1)
                  }, aR.addEventListener("ended", GR._endTimers[qR._id], !1))
                } catch (tR) {
                  GR._emit("playerror", qR._id, tR)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === aR.src && (aR.src = GR._src, aR.load());
              var UR = window && window.ejecta || !aR.readyState && uR._navigator.isCocoonJS;
              if (aR.readyState >= 3 || UR) nR();
              else {
                GR._playLock = !0, GR._state = "loading";
                var WR = function() {
                  GR._state = "loaded", nR(), aR.removeEventListener(uR._canPlayEvent, WR, !1)
                };
                aR.addEventListener(uR._canPlayEvent, WR, !1), GR._clearTimer(qR._id)
              }
            }
            return qR._id
          }
          GR._ended(qR)
        },
        pause: function(RR) {
          var JR = this;
          if ("loaded" !== JR._state || JR._playLock) return JR._queue.push({
            event: "pause",
            action: function() {
              JR.pause(RR)
            }
          }), JR;
          for (var GR = JR._getSoundIds(RR), yR = 0; yR < GR.length; yR++) {
            JR._clearTimer(GR[yR]);
            var tR = JR._soundById(GR[yR]);
            if (tR && !tR.pK && (tR._seek = JR.seek(GR[yR]), tR._rateSeek = 0, tR.pK = !0, JR._stopFade(GR[yR]), tR._node))
              if (JR._webAudio) {
                if (!tR._node.bufferSource) continue;
                "undefined" === typeof tR._node.bufferSource.stop ? tR._node.bufferSource.noteOff(0) : tR._node.bufferSource.stop(0), JR._cleanBuffer(tR._node)
              } else isNaN(tR._node.duration) && tR._node.duration !== 1 / 0 || tR._node.pause();
            arguments[1] || JR._emit("pause", tR ? tR._id : null)
          }
          return JR
        },
        stop: function(RR, JR) {
          var GR = this;
          if ("loaded" !== GR._state || GR._playLock) return GR._queue.push({
            event: "stop",
            action: function() {
              GR.stop(RR)
            }
          }), GR;
          for (var yR = GR._getSoundIds(RR), tR = 0; tR < yR.length; tR++) {
            GR._clearTimer(yR[tR]);
            var uR = GR._soundById(yR[tR]);
            uR && (uR._seek = uR._start || 0, uR._rateSeek = 0, uR.pK = !0, uR._ended = !0, GR._stopFade(yR[tR]), uR._node && (GR._webAudio ? uR._node.bufferSource && ("undefined" === typeof uR._node.bufferSource.stop ? uR._node.bufferSource.noteOff(0) : uR._node.bufferSource.stop(0), GR._cleanBuffer(uR._node)) : isNaN(uR._node.duration) && uR._node.duration !== 1 / 0 || (uR._node.currentTime = uR._start || 0, uR._node.pause(), uR._node.duration === 1 / 0 && GR._clearSound(uR._node))), JR || GR._emit("stop", uR._id))
          }
          return GR
        },
        mute: function(RR, JR) {
          var GR = this;
          if ("loaded" !== GR._state || GR._playLock) return GR._queue.push({
            event: "mute",
            action: function() {
              GR.mute(RR, JR)
            }
          }), GR;
          if ("undefined" === typeof JR) {
            if ("boolean" !== typeof RR) return GR._muted;
            GR._muted = RR
          }
          for (var yR = GR._getSoundIds(JR), tR = 0; tR < yR.length; tR++) {
            var ZR = GR._soundById(yR[tR]);
            ZR && (ZR._muted = RR, ZR._interval && GR._stopFade(ZR._id), GR._webAudio && ZR._node ? ZR._node.gain.setValueAtTime(RR ? 0 : ZR._volume, uR.ctx.currentTime) : ZR._node && (ZR._node.muted = !!uR._muted || RR), GR._emit("mute", ZR._id))
          }
          return GR
        },
        volume: function() {
          var RR, JR, GR, yR = this,
            tR = arguments;
          if (0 === tR.length) return yR._volume;
          if (1 === tR.length || 2 === tR.length && "undefined" === typeof tR[1] ? yR._getSoundIds().indexOf(tR[0]) >= 0 ? JR = parseInt(tR[0], 10) : RR = parseFloat(tR[0]) : tR.length >= 2 && (RR = parseFloat(tR[0]), JR = parseInt(tR[1], 10)), !("undefined" !== typeof RR && RR >= 0 && RR <= 1)) return (GR = JR ? yR._soundById(JR) : yR._sounds[0]) ? GR._volume : 0;
          if ("loaded" !== yR._state || yR._playLock) return yR._queue.push({
            event: "volume",
            action: function() {
              yR.volume.apply(yR, tR)
            }
          }), yR;
          "undefined" === typeof JR && (yR._volume = RR), JR = yR._getSoundIds(JR);
          for (var ZR = 0; ZR < JR.length; ZR++)(GR = yR._soundById(JR[ZR])) && (GR._volume = RR, tR[2] || yR._stopFade(JR[ZR]), yR._webAudio && GR._node && !GR._muted ? GR._node.gain.setValueAtTime(RR, uR.ctx.currentTime) : GR._node && !GR._muted && (GR._node.volume = RR * uR.volume()), yR._emit("volume", GR._id));
          return yR
        },
        fade: function(RR, JR, GR, yR) {
          var tR = this;
          if ("loaded" !== tR._state || tR._playLock) return tR._queue.push({
            event: "fade",
            action: function() {
              tR.fade(RR, JR, GR, yR)
            }
          }), tR;
          RR = Math.min(Math.max(0, parseFloat(RR)), 1), JR = Math.min(Math.max(0, parseFloat(JR)), 1), GR = parseFloat(GR), tR.volume(RR, yR);
          for (var ZR = tR._getSoundIds(yR), qR = 0; qR < ZR.length; qR++) {
            var iR = tR._soundById(ZR[qR]);
            if (iR) {
              if (yR || tR._stopFade(ZR[qR]), tR._webAudio && !iR._muted) {
                var fR = uR.ctx.currentTime,
                  VR = fR + GR / 1e3;
                iR._volume = RR, iR._node.gain.setValueAtTime(RR, fR), iR._node.gain.linearRampToValueAtTime(JR, VR)
              }
              tR._startFadeInterval(iR, RR, JR, GR, ZR[qR], "undefined" === typeof yR)
            }
          }
          return tR
        },
        _startFadeInterval: function(RR, JR, GR, yR, tR, uR) {
          var ZR = this,
            qR = JR,
            iR = GR - JR,
            fR = Math.abs(iR / .01),
            VR = Math.max(4, fR > 0 ? yR / fR : yR),
            KR = Date.now();
          RR._fadeTo = GR, RR._interval = setInterval((function() {
            var tR = (Date.now() - KR) / yR;
            KR = Date.now(), qR += iR * tR, qR = Math.round(100 * qR) / 100, qR = iR < 0 ? Math.max(GR, qR) : Math.min(GR, qR), ZR._webAudio ? RR._volume = qR : ZR.volume(qR, RR._id, !0), uR && (ZR._volume = qR), (GR < JR && qR <= GR || GR > JR && qR >= GR) && (clearInterval(RR._interval), RR._interval = null, RR._fadeTo = null, ZR.volume(GR, RR._id), ZR._emit("fade", RR._id))
          }), VR)
        },
        _stopFade: function(RR) {
          var JR = this,
            GR = JR._soundById(RR);
          return GR && GR._interval && (JR._webAudio && GR._node.gain.cancelScheduledValues(uR.ctx.currentTime), clearInterval(GR._interval), GR._interval = null, JR.volume(GR._fadeTo, RR), GR._fadeTo = null, JR._emit("fade", RR)), JR
        },
        loop: function() {
          var RR, JR, GR, yR = this,
            tR = arguments;
          if (0 === tR.length) return yR._loop;
          if (1 === tR.length) {
            if ("boolean" !== typeof tR[0]) return !!(GR = yR._soundById(parseInt(tR[0], 10))) && GR._loop;
            RR = tR[0], yR._loop = RR
          } else 2 === tR.length && (RR = tR[0], JR = parseInt(tR[1], 10));
          for (var uR = yR._getSoundIds(JR), ZR = 0; ZR < uR.length; ZR++)(GR = yR._soundById(uR[ZR])) && (GR._loop = RR, yR._webAudio && GR._node && GR._node.bufferSource && (GR._node.bufferSource.loop = RR, RR && (GR._node.bufferSource.loopStart = GR._start || 0, GR._node.bufferSource.loopEnd = GR._stop, yR.playing(uR[ZR]) && (yR.pause(uR[ZR], !0), yR.play(uR[ZR], !0)))));
          return yR
        },
        rate: function() {
          var RR, JR, GR, yR = this,
            tR = arguments;
          if (0 === tR.length) JR = yR._sounds[0]._id;
          else if (1 === tR.length) {
            yR._getSoundIds().indexOf(tR[0]) >= 0 ? JR = parseInt(tR[0], 10) : RR = parseFloat(tR[0])
          } else 2 === tR.length && (RR = parseFloat(tR[0]), JR = parseInt(tR[1], 10));
          if ("number" !== typeof RR) return (GR = yR._soundById(JR)) ? GR._rate : yR._rate;
          if ("loaded" !== yR._state || yR._playLock) return yR._queue.push({
            event: "rate",
            action: function() {
              yR.rate.apply(yR, tR)
            }
          }), yR;
          "undefined" === typeof JR && (yR._rate = RR), JR = yR._getSoundIds(JR);
          for (var ZR = 0; ZR < JR.length; ZR++)
            if (GR = yR._soundById(JR[ZR])) {
              yR.playing(JR[ZR]) && (GR._rateSeek = yR.seek(JR[ZR]), GR._playStart = yR._webAudio ? uR.ctx.currentTime : GR._playStart), GR._rate = RR, yR._webAudio && GR._node && GR._node.bufferSource ? GR._node.bufferSource.playbackRate.setValueAtTime(RR, uR.ctx.currentTime) : GR._node && (GR._node.playbackRate = RR);
              var qR = yR.seek(JR[ZR]),
                iR = 1e3 * ((yR._sprite[GR._sprite][0] + yR._sprite[GR._sprite][1]) / 1e3 - qR) / Math.abs(GR._rate);
              !yR._endTimers[JR[ZR]] && GR.pK || (yR._clearTimer(JR[ZR]), yR._endTimers[JR[ZR]] = setTimeout(yR._ended.bind(yR, GR), iR)), yR._emit("rate", GR._id)
            } return yR
        },
        seek: function() {
          var RR, JR, GR = this,
            yR = arguments;
          if (0 === yR.length) GR._sounds.length && (JR = GR._sounds[0]._id);
          else if (1 === yR.length) {
            GR._getSoundIds().indexOf(yR[0]) >= 0 ? JR = parseInt(yR[0], 10) : GR._sounds.length && (JR = GR._sounds[0]._id, RR = parseFloat(yR[0]))
          } else 2 === yR.length && (RR = parseFloat(yR[0]), JR = parseInt(yR[1], 10));
          if ("undefined" === typeof JR) return 0;
          if ("number" === typeof RR && ("loaded" !== GR._state || GR._playLock)) return GR._queue.push({
            event: "seek",
            action: function() {
              GR.seek.apply(GR, yR)
            }
          }), GR;
          var tR = GR._soundById(JR);
          if (tR) {
            if (!("number" === typeof RR && RR >= 0)) {
              if (GR._webAudio) {
                var ZR = GR.playing(JR) ? uR.ctx.currentTime - tR._playStart : 0,
                  qR = tR._rateSeek ? tR._rateSeek - tR._seek : 0;
                return tR._seek + (qR + ZR * Math.abs(tR._rate))
              }
              return tR._node.currentTime
            }
            var iR = GR.playing(JR);
            iR && GR.pause(JR, !0), tR._seek = RR, tR._ended = !1, GR._clearTimer(JR), GR._webAudio || !tR._node || isNaN(tR._node.duration) || (tR._node.currentTime = RR);
            var fR = function() {
              iR && GR.play(JR, !0), GR._emit("seek", JR)
            };
            if (iR && !GR._webAudio) {
              var VR = function() {
                GR._playLock ? setTimeout(VR, 0) : fR()
              };
              setTimeout(VR, 0)
            } else fR()
          }
          return GR
        },
        playing: function(RR) {
          var JR = this;
          if ("number" === typeof RR) {
            var GR = JR._soundById(RR);
            return !!GR && !GR.pK
          }
          for (var yR = 0; yR < JR._sounds.length; yR++)
            if (!JR._sounds[yR].pK) return !0;
          return !1
        },
        duration: function(RR) {
          var JR = this,
            GR = JR._duration,
            yR = JR._soundById(RR);
          return yR && (GR = JR._sprite[yR._sprite][1] / 1e3), GR
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var RR = this, JR = RR._sounds, GR = 0; GR < JR.length; GR++) JR[GR].pK || RR.stop(JR[GR]._id), RR._webAudio || (RR._clearSound(JR[GR]._node), JR[GR]._node.removeEventListener("error", JR[GR]._errorFn, !1), JR[GR]._node.removeEventListener(uR._canPlayEvent, JR[GR]._loadFn, !1), JR[GR]._node.removeEventListener("ended", JR[GR]._endFn, !1), uR._releaseHtml5Audio(JR[GR]._node)), delete JR[GR]._node, RR._clearTimer(JR[GR]._id);
          var yR = uR._howls.indexOf(RR);
          yR >= 0 && uR._howls.splice(yR, 1);
          var tR = !0;
          for (GR = 0; GR < uR._howls.length; GR++)
            if (uR._howls[GR]._src === RR._src || RR._src.indexOf(uR._howls[GR]._src) >= 0) {
              tR = !1;
              break
            } return iR && tR && delete iR[RR._src], uR.noAudio = !1, RR._state = "unloaded", RR._sounds = [], RR = null, null
        },
        on: function(RR, JR, GR, yR) {
          var tR = this["_on" + RR];
          return "function" === typeof JR && tR.push(yR ? {
            id: GR,
            iK: JR,
            once: yR
          } : {
            id: GR,
            iK: JR
          }), this
        },
        off: function(RR, JR, GR) {
          var yR = this,
            tR = yR["_on" + RR],
            uR = 0;
          if ("number" === typeof JR && (GR = JR, JR = null), JR || GR)
            for (uR = 0; uR < tR.length; uR++) {
              var ZR = GR === tR[uR].id;
              if (JR === tR[uR].iK && ZR || !JR && ZR) {
                tR.splice(uR, 1);
                break
              }
            } else if (RR) yR["_on" + RR] = [];
            else {
              var qR = Object.keys(yR);
              for (uR = 0; uR < qR.length; uR++) 0 === qR[uR].indexOf("_on") && Array.isArray(yR[qR[uR]]) && (yR[qR[uR]] = [])
            } return yR
        },
        once: function(RR, JR, GR) {
          return this.on(RR, JR, GR, 1), this
        },
        _emit: function(RR, JR, GR) {
          for (var yR = this, tR = yR["_on" + RR], uR = tR.length - 1; uR >= 0; uR--) tR[uR].id && tR[uR].id !== JR && "load" !== RR || (setTimeout(function(RR) {
            RR.call(this, JR, GR)
          }.bind(yR, tR[uR].iK), 0), tR[uR].once && yR.off(RR, tR[uR].iK, tR[uR].id));
          return yR._loadQueue(RR), yR
        },
        _loadQueue: function(RR) {
          var JR = this;
          if (JR._queue.length > 0) {
            var GR = JR._queue[0];
            GR.event === RR && (JR._queue.shift(), JR._loadQueue()), RR || GR.action()
          }
          return JR
        },
        _ended: function(RR) {
          var JR = this,
            GR = RR._sprite;
          if (!JR._webAudio && RR._node && !RR._node.paused && !RR._node.ended && RR._node.currentTime < RR._stop) return setTimeout(JR._ended.bind(JR, RR), 100), JR;
          var yR = !(!RR._loop && !JR._sprite[GR][2]);
          if (JR._emit("end", RR._id), !JR._webAudio && yR && JR.stop(RR._id, !0).play(RR._id), JR._webAudio && yR) {
            JR._emit("play", RR._id), RR._seek = RR._start || 0, RR._rateSeek = 0, RR._playStart = uR.ctx.currentTime;
            var tR = 1e3 * (RR._stop - RR._start) / Math.abs(RR._rate);
            JR._endTimers[RR._id] = setTimeout(JR._ended.bind(JR, RR), tR)
          }
          return JR._webAudio && !yR && (RR.pK = !0, RR._ended = !0, RR._seek = RR._start || 0, RR._rateSeek = 0, JR._clearTimer(RR._id), JR._cleanBuffer(RR._node), uR._autoSuspend()), JR._webAudio || yR || JR.stop(RR._id, !0), JR
        },
        _clearTimer: function(RR) {
          var JR = this;
          if (JR._endTimers[RR]) {
            if ("function" !== typeof JR._endTimers[RR]) clearTimeout(JR._endTimers[RR]);
            else {
              var GR = JR._soundById(RR);
              GR && GR._node && GR._node.removeEventListener("ended", JR._endTimers[RR], !1)
            }
            delete JR._endTimers[RR]
          }
          return JR
        },
        _soundById: function(RR) {
          for (var JR = this, GR = 0; GR < JR._sounds.length; GR++)
            if (RR === JR._sounds[GR]._id) return JR._sounds[GR];
          return null
        },
        _inactiveSound: function() {
          var RR = this;
          RR._drain();
          for (var JR = 0; JR < RR._sounds.length; JR++)
            if (RR._sounds[JR]._ended) return RR._sounds[JR].reset();
          return new qR(RR)
        },
        _drain: function() {
          var RR = this,
            JR = RR._pool,
            GR = 0,
            yR = 0;
          if (!(RR._sounds.length < JR)) {
            for (yR = 0; yR < RR._sounds.length; yR++) RR._sounds[yR]._ended && GR++;
            for (yR = RR._sounds.length - 1; yR >= 0; yR--) {
              if (GR <= JR) return;
              RR._sounds[yR]._ended && (RR._webAudio && RR._sounds[yR]._node && RR._sounds[yR]._node.disconnect(0), RR._sounds.splice(yR, 1), GR--)
            }
          }
        },
        _getSoundIds: function(RR) {
          if ("undefined" === typeof RR) {
            for (var JR = [], GR = 0; GR < this._sounds.length; GR++) JR.push(this._sounds[GR]._id);
            return JR
          }
          return [RR]
        },
        _refreshBuffer: function(RR) {
          return RR._node.bufferSource = uR.ctx.createBufferSource(), RR._node.bufferSource.buffer = iR[this._src], RR._panner ? RR._node.bufferSource.connect(RR._panner) : RR._node.bufferSource.connect(RR._node), RR._node.bufferSource.loop = RR._loop, RR._loop && (RR._node.bufferSource.loopStart = RR._start || 0, RR._node.bufferSource.loopEnd = RR._stop || 0), RR._node.bufferSource.playbackRate.setValueAtTime(RR._rate, uR.ctx.currentTime), this
        },
        _cleanBuffer: function(RR) {
          var JR = uR._navigator && uR._navigator.vendor.indexOf("Apple") >= 0;
          if (uR._scratchBuffer && RR.bufferSource && (RR.bufferSource.onended = null, RR.bufferSource.disconnect(0), JR)) try {
            RR.bufferSource.buffer = uR._scratchBuffer
          } catch (GR) {}
          return RR.bufferSource = null, this
        },
        _clearSound: function(RR) {
          /MSIE |Trident\//.test(uR._navigator && uR._navigator.userAgent) || (RR.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var qR = function(RR) {
        this._parent = RR, this.init()
      };
      qR.prototype = {
        init: function() {
          var RR = this,
            JR = RR._parent;
          return RR._muted = JR._muted, RR._loop = JR._loop, RR._volume = JR._volume, RR._rate = JR._rate, RR._seek = 0, RR.pK = !0, RR._ended = !0, RR._sprite = "__default", RR._id = ++uR._counter, JR._sounds.push(RR), RR.create(), RR
        },
        create: function() {
          var RR = this,
            JR = RR._parent,
            GR = uR._muted || RR._muted || RR._parent._muted ? 0 : RR._volume;
          return JR._webAudio ? (RR._node = "undefined" === typeof uR.ctx.createGain ? uR.ctx.createGainNode() : uR.ctx.createGain(), RR._node.gain.setValueAtTime(GR, uR.ctx.currentTime), RR._node.paused = !0, RR._node.connect(uR.masterGain)) : uR.noAudio || (RR._node = uR._obtainHtml5Audio(), RR._errorFn = RR._errorListener.bind(RR), RR._node.addEventListener("error", RR._errorFn, !1), RR._loadFn = RR._loadListener.bind(RR), RR._node.addEventListener(uR._canPlayEvent, RR._loadFn, !1), RR._endFn = RR._endListener.bind(RR), RR._node.addEventListener("ended", RR._endFn, !1), RR._node.src = JR._src, RR._node.preload = !0 === JR._preload ? "auto" : JR._preload, RR._node.volume = GR * uR.volume(), RR._node.load()), RR
        },
        reset: function() {
          var RR = this,
            JR = RR._parent;
          return RR._muted = JR._muted, RR._loop = JR._loop, RR._volume = JR._volume, RR._rate = JR._rate, RR._seek = 0, RR._rateSeek = 0, RR.pK = !0, RR._ended = !0, RR._sprite = "__default", RR._id = ++uR._counter, RR
        },
        _errorListener: function() {
          var RR = this;
          RR._parent._emit("loaderror", RR._id, RR._node.error ? RR._node.error.code : 0), RR._node.removeEventListener("error", RR._errorFn, !1)
        },
        _loadListener: function() {
          var RR = this,
            JR = RR._parent;
          JR._duration = Math.ceil(10 * RR._node.duration) / 10, 0 === Object.keys(JR._sprite).length && (JR._sprite = {
            __default: [0, 1e3 * JR._duration]
          }), "loaded" !== JR._state && (JR._state = "loaded", JR._emit("load"), JR._loadQueue()), RR._node.removeEventListener(uR._canPlayEvent, RR._loadFn, !1)
        },
        _endListener: function() {
          var RR = this,
            JR = RR._parent;
          JR._duration === 1 / 0 && (JR._duration = Math.ceil(10 * RR._node.duration) / 10, JR._sprite.__default[1] === 1 / 0 && (JR._sprite.__default[1] = 1e3 * JR._duration), JR._ended(RR)), RR._node.removeEventListener("ended", RR._endFn, !1)
        }
      };
      var iR = {},
        fR = function(RR) {
          var JR = RR._src;
          if (iR[JR]) return RR._duration = iR[JR].duration, void wR(RR);
          if (/^data:[^;]+;base64,/.test(JR)) {
            for (var GR = atob(JR.split(",")[1]), yR = new Uint8Array(GR.length), tR = 0; tR < GR.length; ++tR) yR[tR] = GR.charCodeAt(tR);
            KR(yR.buffer, RR)
          } else {
            var uR = new XMLHttpRequest;
            uR.open(RR._xhr.method, JR, !0), uR.withCredentials = RR._xhr.withCredentials, uR.responseType = "arraybuffer", RR._xhr.headers && Object.keys(RR._xhr.headers).forEach((function(JR) {
              uR.setRequestHeader(JR, RR._xhr.headers[JR])
            })), uR.onload = function() {
              var JR = (uR.status + "")[0];
              "0" === JR || "2" === JR || "3" === JR ? KR(uR.response, RR) : RR._emit("loaderror", null, "Failed loading audio file with status: " + uR.status + ".")
            }, uR.onerror = function() {
              RR._webAudio && (RR._html5 = !0, RR._webAudio = !1, RR._sounds = [], delete iR[JR], RR.load())
            }, VR(uR)
          }
        },
        VR = function(RR) {
          try {
            RR.send()
          } catch (JR) {
            RR.onerror()
          }
        },
        KR = function(RR, JR) {
          var GR = function() {
              JR._emit("loaderror", null, "Decoding audio data failed.")
            },
            yR = function(RR) {
              RR && JR._sounds.length > 0 ? (iR[JR._src] = RR, wR(JR, RR)) : GR()
            };
          "undefined" !== typeof Promise && 1 === uR.ctx.decodeAudioData.length ? uR.ctx.decodeAudioData(RR).then(yR).catch(GR) : uR.ctx.decodeAudioData(RR, yR, GR)
        },
        wR = function(RR, JR) {
          JR && !RR._duration && (RR._duration = JR.duration), 0 === Object.keys(RR._sprite).length && (RR._sprite = {
            __default: [0, 1e3 * RR._duration]
          }), "loaded" !== RR._state && (RR._state = "loaded", RR._emit("load"), RR._loadQueue())
        },
        rR = function() {
          if (uR.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? uR.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? uR.ctx = new webkitAudioContext : uR.usingWebAudio = !1
            } catch (tR) {
              uR.usingWebAudio = !1
            }
            uR.ctx || (uR.usingWebAudio = !1);
            var RR = /iP(hone|od|ad)/.test(uR._navigator && uR._navigator.platform),
              JR = uR._navigator && uR._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              GR = JR ? parseInt(JR[1], 10) : null;
            if (RR && GR && GR < 9) {
              var yR = /safari/.test(uR._navigator && uR._navigator.userAgent.toLowerCase());
              uR._navigator && !yR && (uR.usingWebAudio = !1)
            }
            uR.usingWebAudio && (uR.masterGain = "undefined" === typeof uR.ctx.createGain ? uR.ctx.createGainNode() : uR.ctx.createGain(), uR.masterGain.gain.setValueAtTime(uR._muted ? 0 : uR._volume, uR.ctx.currentTime), uR.masterGain.connect(uR.ctx.destination)), uR._setup()
          }
        };
      void 0 === (yR = function() {
        return {
          Howler: uR,
          Howl: ZR
        }
      }.apply(JR, [])) || (RR.exports = yR), JR.Howler = uR, JR.Howl = ZR, "undefined" !== typeof GR.g ? (GR.g.HowlerGlobal = tR, GR.g.Howler = uR, GR.g.Howl = ZR, GR.g.Sound = qR) : "undefined" !== typeof window && (window.HowlerGlobal = tR, window.Howler = uR, window.Howl = ZR, window.Sound = qR)
    }(),
    function() {
      var RR;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(RR) {
        var JR = this;
        if (!JR.ctx || !JR.ctx.listener) return JR;
        for (var GR = JR._howls.length - 1; GR >= 0; GR--) JR._howls[GR].stereo(RR);
        return JR
      }, HowlerGlobal.prototype.pos = function(RR, JR, GR) {
        var yR = this;
        return yR.ctx && yR.ctx.listener ? (JR = "number" !== typeof JR ? yR._pos[1] : JR, GR = "number" !== typeof GR ? yR._pos[2] : GR, "number" !== typeof RR ? yR._pos : (yR._pos = [RR, JR, GR], "undefined" !== typeof yR.ctx.listener.positionX ? (yR.ctx.listener.positionX.setTargetAtTime(yR._pos[0], Howler.ctx.currentTime, .1), yR.ctx.listener.positionY.setTargetAtTime(yR._pos[1], Howler.ctx.currentTime, .1), yR.ctx.listener.positionZ.setTargetAtTime(yR._pos[2], Howler.ctx.currentTime, .1)) : yR.ctx.listener.setPosition(yR._pos[0], yR._pos[1], yR._pos[2]), yR)) : yR
      }, HowlerGlobal.prototype.orientation = function(RR, JR, GR, yR, tR, uR) {
        var ZR = this;
        if (!ZR.ctx || !ZR.ctx.listener) return ZR;
        var qR = ZR._orientation;
        return JR = "number" !== typeof JR ? qR[1] : JR, GR = "number" !== typeof GR ? qR[2] : GR, yR = "number" !== typeof yR ? qR[3] : yR, tR = "number" !== typeof tR ? qR[4] : tR, uR = "number" !== typeof uR ? qR[5] : uR, "number" !== typeof RR ? qR : (ZR._orientation = [RR, JR, GR, yR, tR, uR], "undefined" !== typeof ZR.ctx.listener.forwardX ? (ZR.ctx.listener.forwardX.setTargetAtTime(RR, Howler.ctx.currentTime, .1), ZR.ctx.listener.forwardY.setTargetAtTime(JR, Howler.ctx.currentTime, .1), ZR.ctx.listener.forwardZ.setTargetAtTime(GR, Howler.ctx.currentTime, .1), ZR.ctx.listener.upX.setTargetAtTime(yR, Howler.ctx.currentTime, .1), ZR.ctx.listener.upY.setTargetAtTime(tR, Howler.ctx.currentTime, .1), ZR.ctx.listener.upZ.setTargetAtTime(uR, Howler.ctx.currentTime, .1)) : ZR.ctx.listener.setOrientation(RR, JR, GR, yR, tR, uR), ZR)
      }, Howl.prototype.init = (RR = Howl.prototype.init, function(JR) {
        var GR = this;
        return GR._orientation = JR.orientation || [1, 0, 0], GR._stereo = JR.stereo || null, GR._pos = JR.pos || null, GR._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof JR.coneInnerAngle ? JR.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof JR.coneOuterAngle ? JR.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof JR.coneOuterGain ? JR.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof JR.distanceModel ? JR.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof JR.maxDistance ? JR.maxDistance : 1e4,
          panningModel: "undefined" !== typeof JR.panningModel ? JR.panningModel : "HRTF",
          refDistance: "undefined" !== typeof JR.refDistance ? JR.refDistance : 1,
          rolloffFactor: "undefined" !== typeof JR.rolloffFactor ? JR.rolloffFactor : 1
        }, GR._onstereo = JR.onstereo ? [{
          iK: JR.onstereo
        }] : [], GR._onpos = JR.onpos ? [{
          iK: JR.onpos
        }] : [], GR._onorientation = JR.onorientation ? [{
          iK: JR.onorientation
        }] : [], RR.call(this, JR)
      }), Howl.prototype.stereo = function(RR, GR) {
        var yR = this;
        if (!yR._webAudio) return yR;
        if ("loaded" !== yR._state) return yR._queue.push({
          event: "stereo",
          action: function() {
            yR.stereo(RR, GR)
          }
        }), yR;
        var tR = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof GR) {
          if ("number" !== typeof RR) return yR._stereo;
          yR._stereo = RR, yR._pos = [RR, 0, 0]
        }
        for (var uR = yR._getSoundIds(GR), ZR = 0; ZR < uR.length; ZR++) {
          var qR = yR._soundById(uR[ZR]);
          if (qR) {
            if ("number" !== typeof RR) return qR._stereo;
            qR._stereo = RR, qR._pos = [RR, 0, 0], qR._node && (qR._pannerAttr.panningModel = "equalpower", qR._panner && qR._panner.pan || JR(qR, tR), "spatial" === tR ? "undefined" !== typeof qR._panner.positionX ? (qR._panner.positionX.setValueAtTime(RR, Howler.ctx.currentTime), qR._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), qR._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : qR._panner.setPosition(RR, 0, 0) : qR._panner.pan.setValueAtTime(RR, Howler.ctx.currentTime)), yR._emit("stereo", qR._id)
          }
        }
        return yR
      }, Howl.prototype.pos = function(RR, GR, yR, tR) {
        var uR = this;
        if (!uR._webAudio) return uR;
        if ("loaded" !== uR._state) return uR._queue.push({
          event: "pos",
          action: function() {
            uR.pos(RR, GR, yR, tR)
          }
        }), uR;
        if (GR = "number" !== typeof GR ? 0 : GR, yR = "number" !== typeof yR ? -.5 : yR, "undefined" === typeof tR) {
          if ("number" !== typeof RR) return uR._pos;
          uR._pos = [RR, GR, yR]
        }
        for (var ZR = uR._getSoundIds(tR), qR = 0; qR < ZR.length; qR++) {
          var iR = uR._soundById(ZR[qR]);
          if (iR) {
            if ("number" !== typeof RR) return iR._pos;
            iR._pos = [RR, GR, yR], iR._node && (iR._panner && !iR._panner.pan || JR(iR, "spatial"), "undefined" !== typeof iR._panner.positionX ? (iR._panner.positionX.setValueAtTime(RR, Howler.ctx.currentTime), iR._panner.positionY.setValueAtTime(GR, Howler.ctx.currentTime), iR._panner.positionZ.setValueAtTime(yR, Howler.ctx.currentTime)) : iR._panner.setPosition(RR, GR, yR)), uR._emit("pos", iR._id)
          }
        }
        return uR
      }, Howl.prototype.orientation = function(RR, GR, yR, tR) {
        var uR = this;
        if (!uR._webAudio) return uR;
        if ("loaded" !== uR._state) return uR._queue.push({
          event: "orientation",
          action: function() {
            uR.orientation(RR, GR, yR, tR)
          }
        }), uR;
        if (GR = "number" !== typeof GR ? uR._orientation[1] : GR, yR = "number" !== typeof yR ? uR._orientation[2] : yR, "undefined" === typeof tR) {
          if ("number" !== typeof RR) return uR._orientation;
          uR._orientation = [RR, GR, yR]
        }
        for (var ZR = uR._getSoundIds(tR), qR = 0; qR < ZR.length; qR++) {
          var iR = uR._soundById(ZR[qR]);
          if (iR) {
            if ("number" !== typeof RR) return iR._orientation;
            iR._orientation = [RR, GR, yR], iR._node && (iR._panner || (iR._pos || (iR._pos = uR._pos || [0, 0, -.5]), JR(iR, "spatial")), "undefined" !== typeof iR._panner.orientationX ? (iR._panner.orientationX.setValueAtTime(RR, Howler.ctx.currentTime), iR._panner.orientationY.setValueAtTime(GR, Howler.ctx.currentTime), iR._panner.orientationZ.setValueAtTime(yR, Howler.ctx.currentTime)) : iR._panner.setOrientation(RR, GR, yR)), uR._emit("orientation", iR._id)
          }
        }
        return uR
      }, Howl.prototype.pannerAttr = function() {
        var RR, GR, yR, tR = this,
          uR = arguments;
        if (!tR._webAudio) return tR;
        if (0 === uR.length) return tR._pannerAttr;
        if (1 === uR.length) {
          if ("object" !== typeof uR[0]) return (yR = tR._soundById(parseInt(uR[0], 10))) ? yR._pannerAttr : tR._pannerAttr;
          RR = uR[0], "undefined" === typeof GR && (RR.pannerAttr || (RR.pannerAttr = {
            coneInnerAngle: RR.coneInnerAngle,
            coneOuterAngle: RR.coneOuterAngle,
            coneOuterGain: RR.coneOuterGain,
            distanceModel: RR.distanceModel,
            maxDistance: RR.maxDistance,
            refDistance: RR.refDistance,
            rolloffFactor: RR.rolloffFactor,
            panningModel: RR.panningModel
          }), tR._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof RR.pannerAttr.coneInnerAngle ? RR.pannerAttr.coneInnerAngle : tR._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof RR.pannerAttr.coneOuterAngle ? RR.pannerAttr.coneOuterAngle : tR._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof RR.pannerAttr.coneOuterGain ? RR.pannerAttr.coneOuterGain : tR._coneOuterGain,
            distanceModel: "undefined" !== typeof RR.pannerAttr.distanceModel ? RR.pannerAttr.distanceModel : tR._distanceModel,
            maxDistance: "undefined" !== typeof RR.pannerAttr.maxDistance ? RR.pannerAttr.maxDistance : tR._maxDistance,
            refDistance: "undefined" !== typeof RR.pannerAttr.refDistance ? RR.pannerAttr.refDistance : tR._refDistance,
            rolloffFactor: "undefined" !== typeof RR.pannerAttr.rolloffFactor ? RR.pannerAttr.rolloffFactor : tR._rolloffFactor,
            panningModel: "undefined" !== typeof RR.pannerAttr.panningModel ? RR.pannerAttr.panningModel : tR._panningModel
          })
        } else 2 === uR.length && (RR = uR[0], GR = parseInt(uR[1], 10));
        for (var ZR = tR._getSoundIds(GR), qR = 0; qR < ZR.length; qR++)
          if (yR = tR._soundById(ZR[qR])) {
            var iR = yR._pannerAttr;
            iR = {
              coneInnerAngle: "undefined" !== typeof RR.coneInnerAngle ? RR.coneInnerAngle : iR.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof RR.coneOuterAngle ? RR.coneOuterAngle : iR.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof RR.coneOuterGain ? RR.coneOuterGain : iR.coneOuterGain,
              distanceModel: "undefined" !== typeof RR.distanceModel ? RR.distanceModel : iR.distanceModel,
              maxDistance: "undefined" !== typeof RR.maxDistance ? RR.maxDistance : iR.maxDistance,
              refDistance: "undefined" !== typeof RR.refDistance ? RR.refDistance : iR.refDistance,
              rolloffFactor: "undefined" !== typeof RR.rolloffFactor ? RR.rolloffFactor : iR.rolloffFactor,
              panningModel: "undefined" !== typeof RR.panningModel ? RR.panningModel : iR.panningModel
            };
            var fR = yR._panner;
            fR ? (fR.coneInnerAngle = iR.coneInnerAngle, fR.coneOuterAngle = iR.coneOuterAngle, fR.coneOuterGain = iR.coneOuterGain, fR.distanceModel = iR.distanceModel, fR.maxDistance = iR.maxDistance, fR.refDistance = iR.refDistance, fR.rolloffFactor = iR.rolloffFactor, fR.panningModel = iR.panningModel) : (yR._pos || (yR._pos = tR._pos || [0, 0, -.5]), JR(yR, "spatial"))
          } return tR
      }, Sound.prototype.init = function(RR) {
        return function() {
          var JR = this,
            GR = JR._parent;
          JR._orientation = GR._orientation, JR._stereo = GR._stereo, JR._pos = GR._pos, JR._pannerAttr = GR._pannerAttr, RR.call(this), JR._stereo ? GR.stereo(JR._stereo) : JR._pos && GR.pos(JR._pos[0], JR._pos[1], JR._pos[2], JR._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(RR) {
        return function() {
          var JR = this,
            GR = JR._parent;
          return JR._orientation = GR._orientation, JR._stereo = GR._stereo, JR._pos = GR._pos, JR._pannerAttr = GR._pannerAttr, JR._stereo ? GR.stereo(JR._stereo) : JR._pos ? GR.pos(JR._pos[0], JR._pos[1], JR._pos[2], JR._id) : JR._panner && (JR._panner.disconnect(0), JR._panner = void 0, GR._refreshBuffer(JR)), RR.call(this)
        }
      }(Sound.prototype.reset);
      var JR = function(RR, JR) {
        "spatial" === (JR = JR || "spatial") ? (RR._panner = Howler.ctx.createPanner(), RR._panner.coneInnerAngle = RR._pannerAttr.coneInnerAngle, RR._panner.coneOuterAngle = RR._pannerAttr.coneOuterAngle, RR._panner.coneOuterGain = RR._pannerAttr.coneOuterGain, RR._panner.distanceModel = RR._pannerAttr.distanceModel, RR._panner.maxDistance = RR._pannerAttr.maxDistance, RR._panner.refDistance = RR._pannerAttr.refDistance, RR._panner.rolloffFactor = RR._pannerAttr.rolloffFactor, RR._panner.panningModel = RR._pannerAttr.panningModel, "undefined" !== typeof RR._panner.positionX ? (RR._panner.positionX.setValueAtTime(RR._pos[0], Howler.ctx.currentTime), RR._panner.positionY.setValueAtTime(RR._pos[1], Howler.ctx.currentTime), RR._panner.positionZ.setValueAtTime(RR._pos[2], Howler.ctx.currentTime)) : RR._panner.setPosition(RR._pos[0], RR._pos[1], RR._pos[2]), "undefined" !== typeof RR._panner.orientationX ? (RR._panner.orientationX.setValueAtTime(RR._orientation[0], Howler.ctx.currentTime), RR._panner.orientationY.setValueAtTime(RR._orientation[1], Howler.ctx.currentTime), RR._panner.orientationZ.setValueAtTime(RR._orientation[2], Howler.ctx.currentTime)) : RR._panner.setOrientation(RR._orientation[0], RR._orientation[1], RR._orientation[2])) : (RR._panner = Howler.ctx.createStereoPanner(), RR._panner.pan.setValueAtTime(RR._stereo, Howler.ctx.currentTime)), RR._panner.connect(RR._node), RR.pK || RR._parent.pause(RR._id, !0).play(RR._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);