/*! For license information please see eulrrq.94.913cfde5.chunk.js.LICENSE.txt */
export const id = 94;
export const ids = [94];
export const modules = {
  4518: (UU, RU, gU) => {
    var tU;
    ! function() {
      var pU = function() {
        this.init()
      };
      pU.prototype = {
        init: function() {
          var UU = this || EU;
          return UU._counter = 1e3, UU._html5AudioPool = [], UU.html5PoolSize = 10, UU._codecs = {}, UU._howls = [], UU._muted = !1, UU._volume = 1, UU._canPlayEvent = "canplaythrough", UU._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, UU.masterGain = null, UU.noAudio = !1, UU.usingWebAudio = !0, UU.autoSuspend = !0, UU.ctx = null, UU.autoUnlock = !0, UU._setup(), UU
        },
        volume: function(UU) {
          var RU = this || EU;
          if (UU = parseFloat(UU), RU.ctx || uU(), "undefined" !== typeof UU && UU >= 0 && UU <= 1) {
            if (RU._volume = UU, RU._muted) return RU;
            RU.usingWebAudio && RU.masterGain.gain.setValueAtTime(UU, EU.ctx.currentTime);
            for (var gU = 0; gU < RU._howls.length; gU++)
              if (!RU._howls[gU]._webAudio)
                for (var tU = RU._howls[gU]._getSoundIds(), pU = 0; pU < tU.length; pU++) {
                  var PU = RU._howls[gU]._soundById(tU[pU]);
                  PU && PU._node && (PU._node.volume = PU._volume * UU)
                }
            return RU
          }
          return RU._volume
        },
        mute: function(UU) {
          var RU = this || EU;
          RU.ctx || uU(), RU._muted = UU, RU.usingWebAudio && RU.masterGain.gain.setValueAtTime(UU ? 0 : RU._volume, EU.ctx.currentTime);
          for (var gU = 0; gU < RU._howls.length; gU++)
            if (!RU._howls[gU]._webAudio)
              for (var tU = RU._howls[gU]._getSoundIds(), pU = 0; pU < tU.length; pU++) {
                var PU = RU._howls[gU]._soundById(tU[pU]);
                PU && PU._node && (PU._node.muted = !!UU || PU._muted)
              }
          return RU
        },
        stop: function() {
          for (var UU = this || EU, RU = 0; RU < UU._howls.length; RU++) UU._howls[RU].stop();
          return UU
        },
        unload: function() {
          for (var UU = this || EU, RU = UU._howls.length - 1; RU >= 0; RU--) UU._howls[RU].unload();
          return UU.usingWebAudio && UU.ctx && "undefined" !== typeof UU.ctx.close && (UU.ctx.close(), UU.ctx = null, uU()), UU
        },
        codecs: function(UU) {
          return (this || EU)._codecs[UU.replace(/^x-/, "")]
        },
        _setup: function() {
          var UU = this || EU;
          if (UU.state = UU.ctx && UU.ctx.state || "suspended", UU._autoSuspend(), !UU.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (UU._canPlayEvent = "canplay")
            } catch (RU) {
              UU.noAudio = !0
            } else UU.noAudio = !0;
          try {
            (new Audio).muted && (UU.noAudio = !0)
          } catch (RU) {}
          return UU.noAudio || UU._setupCodecs(), UU
        },
        _setupCodecs: function() {
          var UU = this || EU,
            RU = null;
          try {
            RU = "undefined" !== typeof Audio ? new Audio : null
          } catch (cU) {
            return UU
          }
          if (!RU || "function" !== typeof RU.canPlayType) return UU;
          var gU = RU.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            tU = UU._navigator ? UU._navigator.userAgent : "",
            pU = tU.match(/OPR\/([0-6].)/g),
            PU = pU && parseInt(pU[0].split("/")[1], 10) < 33,
            TU = -1 !== tU.indexOf("Safari") && -1 === tU.indexOf("Chrome"),
            qU = tU.match(/Version\/(.*?) /),
            KU = TU && qU && parseInt(qU[1], 10) < 15;
          return UU._codecs = {
            mp3: !(PU || !gU && !RU.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!gU,
            opus: !!RU.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!RU.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!RU.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(RU.canPlayType('audio/wav; codecs="1"') || RU.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!RU.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!RU.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(RU.canPlayType("audio/x-m4a;") || RU.canPlayType("audio/m4a;") || RU.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(RU.canPlayType("audio/x-m4b;") || RU.canPlayType("audio/m4b;") || RU.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(RU.canPlayType("audio/x-mp4;") || RU.canPlayType("audio/mp4;") || RU.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(KU || !RU.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(KU || !RU.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!RU.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(RU.canPlayType("audio/x-flac;") || RU.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, UU
        },
        _unlockAudio: function() {
          var UU = this || EU;
          if (!UU._audioUnlocked && UU.ctx) {
            UU._audioUnlocked = !1, UU.autoUnlock = !1, UU._mobileUnloaded || 44100 === UU.ctx.sampleRate || (UU._mobileUnloaded = !0, UU.unload()), UU._scratchBuffer = UU.ctx.createBuffer(1, 1, 22050);
            var RU = function(gU) {
              for (; UU._html5AudioPool.length < UU.html5PoolSize;) try {
                var tU = new Audio;
                tU._unlocked = !0, UU._releaseHtml5Audio(tU)
              } catch (gU) {
                UU.noAudio = !0;
                break
              }
              for (var pU = 0; pU < UU._howls.length; pU++)
                if (!UU._howls[pU]._webAudio)
                  for (var EU = UU._howls[pU]._getSoundIds(), PU = 0; PU < EU.length; PU++) {
                    var TU = UU._howls[pU]._soundById(EU[PU]);
                    TU && TU._node && !TU._node._unlocked && (TU._node._unlocked = !0, TU._node.load())
                  }
              UU._autoResume();
              var qU = UU.ctx.createBufferSource();
              qU.buffer = UU._scratchBuffer, qU.connect(UU.ctx.destination), "undefined" === typeof qU.start ? qU.noteOn(0) : qU.start(0), "function" === typeof UU.ctx.resume && UU.ctx.resume(), qU.onended = function() {
                qU.disconnect(0), UU._audioUnlocked = !0, document.removeEventListener("touchstart", RU, !0), document.removeEventListener("touchend", RU, !0), document.removeEventListener("click", RU, !0), document.removeEventListener("keydown", RU, !0);
                for (var gU = 0; gU < UU._howls.length; gU++) UU._howls[gU]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", RU, !0), document.addEventListener("touchend", RU, !0), document.addEventListener("click", RU, !0), document.addEventListener("keydown", RU, !0), UU
          }
        },
        _obtainHtml5Audio: function() {
          var UU = this || EU;
          if (UU._html5AudioPool.length) return UU._html5AudioPool.pop();
          var RU = (new Audio).play();
          return RU && "undefined" !== typeof Promise && (RU instanceof Promise || "function" === typeof RU.then) && RU.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(UU) {
          var RU = this || EU;
          return UU._unlocked && RU._html5AudioPool.push(UU), RU
        },
        _autoSuspend: function() {
          var UU = this;
          if (UU.autoSuspend && UU.ctx && "undefined" !== typeof UU.ctx.suspend && EU.usingWebAudio) {
            for (var RU = 0; RU < UU._howls.length; RU++)
              if (UU._howls[RU]._webAudio)
                for (var gU = 0; gU < UU._howls[RU]._sounds.length; gU++)
                  if (!UU._howls[RU]._sounds[gU].pI) return UU;
            return UU._suspendTimer && clearTimeout(UU._suspendTimer), UU._suspendTimer = setTimeout((function() {
              if (UU.autoSuspend) {
                UU._suspendTimer = null, UU.state = "suspending";
                var RU = function() {
                  UU.state = "suspended", UU._resumeAfterSuspend && (delete UU._resumeAfterSuspend, UU._autoResume())
                };
                UU.ctx.suspend().then(RU, RU)
              }
            }), 3e4), UU
          }
        },
        _autoResume: function() {
          var UU = this;
          if (UU.ctx && "undefined" !== typeof UU.ctx.resume && EU.usingWebAudio) return "running" === UU.state && "interrupted" !== UU.ctx.state && UU._suspendTimer ? (clearTimeout(UU._suspendTimer), UU._suspendTimer = null) : "suspended" === UU.state || "running" === UU.state && "interrupted" === UU.ctx.state ? (UU.ctx.resume().then((function() {
            UU.state = "running";
            for (var RU = 0; RU < UU._howls.length; RU++) UU._howls[RU]._emit("resume")
          })), UU._suspendTimer && (clearTimeout(UU._suspendTimer), UU._suspendTimer = null)) : "suspending" === UU.state && (UU._resumeAfterSuspend = !0), UU
        }
      };
      var EU = new pU,
        PU = function(UU) {
          UU.src && 0 !== UU.src.length ? this.init(UU) : console.error("An array of source files must be passed with any new Howl.")
        };
      PU.prototype = {
        init: function(UU) {
          var RU = this;
          return EU.ctx || uU(), RU._autoplay = UU.autoplay || !1, RU._format = "string" !== typeof UU.format ? UU.format : [UU.format], RU._html5 = UU.html5 || !1, RU._muted = UU.mute || !1, RU._loop = UU.loop || !1, RU._pool = UU.pool || 5, RU._preload = "boolean" !== typeof UU.preload && "metadata" !== UU.preload || UU.preload, RU._rate = UU.rate || 1, RU._sprite = UU.sprite || {}, RU._src = "string" !== typeof UU.src ? UU.src : [UU.src], RU._volume = void 0 !== UU.volume ? UU.volume : 1, RU._xhr = {
            method: UU.xhr && UU.xhr.method ? UU.xhr.method : "GET",
            headers: UU.xhr && UU.xhr.headers ? UU.xhr.headers : null,
            withCredentials: !(!UU.xhr || !UU.xhr.withCredentials) && UU.xhr.withCredentials
          }, RU._duration = 0, RU._state = "unloaded", RU._sounds = [], RU._endTimers = {}, RU._queue = [], RU._playLock = !1, RU._onend = UU.onend ? [{
            Au: UU.onend
          }] : [], RU._onfade = UU.onfade ? [{
            Au: UU.onfade
          }] : [], RU._onload = UU.onload ? [{
            Au: UU.onload
          }] : [], RU._onloaderror = UU.onloaderror ? [{
            Au: UU.onloaderror
          }] : [], RU._onplayerror = UU.onplayerror ? [{
            Au: UU.onplayerror
          }] : [], RU._onpause = UU.onpause ? [{
            Au: UU.onpause
          }] : [], RU._onplay = UU.onplay ? [{
            Au: UU.onplay
          }] : [], RU._onstop = UU.onstop ? [{
            Au: UU.onstop
          }] : [], RU._onmute = UU.onmute ? [{
            Au: UU.onmute
          }] : [], RU._onvolume = UU.onvolume ? [{
            Au: UU.onvolume
          }] : [], RU._onrate = UU.onrate ? [{
            Au: UU.onrate
          }] : [], RU._onseek = UU.onseek ? [{
            Au: UU.onseek
          }] : [], RU._onunlock = UU.onunlock ? [{
            Au: UU.onunlock
          }] : [], RU._onresume = [], RU._webAudio = EU.usingWebAudio && !RU._html5, "undefined" !== typeof EU.ctx && EU.ctx && EU.autoUnlock && EU._unlockAudio(), EU._howls.push(RU), RU._autoplay && RU._queue.push({
            event: "play",
            action: function() {
              RU.play()
            }
          }), RU._preload && "none" !== RU._preload && RU.load(), RU
        },
        load: function() {
          var UU = this,
            RU = null;
          if (EU.noAudio) UU._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof UU._src && (UU._src = [UU._src]);
            for (var gU = 0; gU < UU._src.length; gU++) {
              var tU, pU;
              if (UU._format && UU._format[gU]) tU = UU._format[gU];
              else {
                if ("string" !== typeof(pU = UU._src[gU])) {
                  UU._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(tU = /^data:audio\/([^;,]+);/i.exec(pU)) || (tU = /\.([^.]+)$/.exec(pU.split("?", 1)[0])), tU && (tU = tU[1].toLowerCase())
              }
              if (tU || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), tU && EU.codecs(tU)) {
                RU = UU._src[gU];
                break
              }
            }
            if (RU) return UU._src = RU, UU._state = "loading", "https:" === window.location.protocol && "http:" === RU.slice(0, 5) && (UU._html5 = !0, UU._webAudio = !1), new TU(UU), UU._webAudio && KU(UU), UU;
            UU._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(UU, RU) {
          var gU = this,
            tU = null;
          if ("number" === typeof UU) tU = UU, UU = null;
          else {
            if ("string" === typeof UU && "loaded" === gU._state && !gU._sprite[UU]) return null;
            if ("undefined" === typeof UU && (UU = "__default", !gU._playLock)) {
              for (var pU = 0, PU = 0; PU < gU._sounds.length; PU++) gU._sounds[PU].pI && !gU._sounds[PU]._ended && (pU++, tU = gU._sounds[PU]._id);
              1 === pU ? UU = null : tU = null
            }
          }
          var TU = tU ? gU._soundById(tU) : gU._inactiveSound();
          if (!TU) return null;
          if (tU && !UU && (UU = TU._sprite || "__default"), "loaded" !== gU._state) {
            TU._sprite = UU, TU._ended = !1;
            var qU = TU._id;
            return gU._queue.push({
              event: "play",
              action: function() {
                gU.play(qU)
              }
            }), qU
          }
          if (tU && !TU.pI) return RU || gU._loadQueue("play"), TU._id;
          gU._webAudio && EU._autoResume();
          var KU = Math.max(0, TU._seek > 0 ? TU._seek : gU._sprite[UU][0] / 1e3),
            cU = Math.max(0, (gU._sprite[UU][0] + gU._sprite[UU][1]) / 1e3 - KU),
            GU = 1e3 * cU / Math.abs(TU._rate),
            jU = gU._sprite[UU][0] / 1e3,
            uU = (gU._sprite[UU][0] + gU._sprite[UU][1]) / 1e3;
          TU._sprite = UU, TU._ended = !1;
          var CU = function() {
            TU.pI = !1, TU._seek = KU, TU._start = jU, TU._stop = uU, TU._loop = !(!TU._loop && !gU._sprite[UU][2])
          };
          if (!(KU >= uU)) {
            var hU = TU._node;
            if (gU._webAudio) {
              var QU = function() {
                gU._playLock = !1, CU(), gU._refreshBuffer(TU);
                var UU = TU._muted || gU._muted ? 0 : TU._volume;
                hU.gain.setValueAtTime(UU, EU.ctx.currentTime), TU._playStart = EU.ctx.currentTime, "undefined" === typeof hU.bufferSource.start ? TU._loop ? hU.bufferSource.noteGrainOn(0, KU, 86400) : hU.bufferSource.noteGrainOn(0, KU, cU) : TU._loop ? hU.bufferSource.start(0, KU, 86400) : hU.bufferSource.start(0, KU, cU), GU !== 1 / 0 && (gU._endTimers[TU._id] = setTimeout(gU._ended.bind(gU, TU), GU)), RU || setTimeout((function() {
                  gU._emit("play", TU._id), gU._loadQueue()
                }), 0)
              };
              "running" === EU.state && "interrupted" !== EU.ctx.state ? QU() : (gU._playLock = !0, gU.once("resume", QU), gU._clearTimer(TU._id))
            } else {
              var eU = function() {
                hU.currentTime = KU, hU.muted = TU._muted || gU._muted || EU._muted || hU.muted, hU.volume = TU._volume * EU.volume(), hU.playbackRate = TU._rate;
                try {
                  var tU = hU.play();
                  if (tU && "undefined" !== typeof Promise && (tU instanceof Promise || "function" === typeof tU.then) ? (gU._playLock = !0, CU(), tU.then((function() {
                      gU._playLock = !1, hU._unlocked = !0, RU ? gU._loadQueue() : gU._emit("play", TU._id)
                    })).catch((function() {
                      gU._playLock = !1, gU._emit("playerror", TU._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), TU._ended = !0, TU.pI = !0
                    }))) : RU || (gU._playLock = !1, CU(), gU._emit("play", TU._id)), hU.playbackRate = TU._rate, hU.paused) return void gU._emit("playerror", TU._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== UU || TU._loop ? gU._endTimers[TU._id] = setTimeout(gU._ended.bind(gU, TU), GU) : (gU._endTimers[TU._id] = function() {
                    gU._ended(TU), hU.removeEventListener("ended", gU._endTimers[TU._id], !1)
                  }, hU.addEventListener("ended", gU._endTimers[TU._id], !1))
                } catch (pU) {
                  gU._emit("playerror", TU._id, pU)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === hU.src && (hU.src = gU._src, hU.load());
              var WU = window && window.ejecta || !hU.readyState && EU._navigator.isCocoonJS;
              if (hU.readyState >= 3 || WU) eU();
              else {
                gU._playLock = !0, gU._state = "loading";
                var fU = function() {
                  gU._state = "loaded", eU(), hU.removeEventListener(EU._canPlayEvent, fU, !1)
                };
                hU.addEventListener(EU._canPlayEvent, fU, !1), gU._clearTimer(TU._id)
              }
            }
            return TU._id
          }
          gU._ended(TU)
        },
        pause: function(UU) {
          var RU = this;
          if ("loaded" !== RU._state || RU._playLock) return RU._queue.push({
            event: "pause",
            action: function() {
              RU.pause(UU)
            }
          }), RU;
          for (var gU = RU._getSoundIds(UU), tU = 0; tU < gU.length; tU++) {
            RU._clearTimer(gU[tU]);
            var pU = RU._soundById(gU[tU]);
            if (pU && !pU.pI && (pU._seek = RU.seek(gU[tU]), pU._rateSeek = 0, pU.pI = !0, RU._stopFade(gU[tU]), pU._node))
              if (RU._webAudio) {
                if (!pU._node.bufferSource) continue;
                "undefined" === typeof pU._node.bufferSource.stop ? pU._node.bufferSource.noteOff(0) : pU._node.bufferSource.stop(0), RU._cleanBuffer(pU._node)
              } else isNaN(pU._node.duration) && pU._node.duration !== 1 / 0 || pU._node.pause();
            arguments[1] || RU._emit("pause", pU ? pU._id : null)
          }
          return RU
        },
        stop: function(UU, RU) {
          var gU = this;
          if ("loaded" !== gU._state || gU._playLock) return gU._queue.push({
            event: "stop",
            action: function() {
              gU.stop(UU)
            }
          }), gU;
          for (var tU = gU._getSoundIds(UU), pU = 0; pU < tU.length; pU++) {
            gU._clearTimer(tU[pU]);
            var EU = gU._soundById(tU[pU]);
            EU && (EU._seek = EU._start || 0, EU._rateSeek = 0, EU.pI = !0, EU._ended = !0, gU._stopFade(tU[pU]), EU._node && (gU._webAudio ? EU._node.bufferSource && ("undefined" === typeof EU._node.bufferSource.stop ? EU._node.bufferSource.noteOff(0) : EU._node.bufferSource.stop(0), gU._cleanBuffer(EU._node)) : isNaN(EU._node.duration) && EU._node.duration !== 1 / 0 || (EU._node.currentTime = EU._start || 0, EU._node.pause(), EU._node.duration === 1 / 0 && gU._clearSound(EU._node))), RU || gU._emit("stop", EU._id))
          }
          return gU
        },
        mute: function(UU, RU) {
          var gU = this;
          if ("loaded" !== gU._state || gU._playLock) return gU._queue.push({
            event: "mute",
            action: function() {
              gU.mute(UU, RU)
            }
          }), gU;
          if ("undefined" === typeof RU) {
            if ("boolean" !== typeof UU) return gU._muted;
            gU._muted = UU
          }
          for (var tU = gU._getSoundIds(RU), pU = 0; pU < tU.length; pU++) {
            var PU = gU._soundById(tU[pU]);
            PU && (PU._muted = UU, PU._interval && gU._stopFade(PU._id), gU._webAudio && PU._node ? PU._node.gain.setValueAtTime(UU ? 0 : PU._volume, EU.ctx.currentTime) : PU._node && (PU._node.muted = !!EU._muted || UU), gU._emit("mute", PU._id))
          }
          return gU
        },
        volume: function() {
          var UU, RU, gU, tU = this,
            pU = arguments;
          if (0 === pU.length) return tU._volume;
          if (1 === pU.length || 2 === pU.length && "undefined" === typeof pU[1] ? tU._getSoundIds().indexOf(pU[0]) >= 0 ? RU = parseInt(pU[0], 10) : UU = parseFloat(pU[0]) : pU.length >= 2 && (UU = parseFloat(pU[0]), RU = parseInt(pU[1], 10)), !("undefined" !== typeof UU && UU >= 0 && UU <= 1)) return (gU = RU ? tU._soundById(RU) : tU._sounds[0]) ? gU._volume : 0;
          if ("loaded" !== tU._state || tU._playLock) return tU._queue.push({
            event: "volume",
            action: function() {
              tU.volume.apply(tU, pU)
            }
          }), tU;
          "undefined" === typeof RU && (tU._volume = UU), RU = tU._getSoundIds(RU);
          for (var PU = 0; PU < RU.length; PU++)(gU = tU._soundById(RU[PU])) && (gU._volume = UU, pU[2] || tU._stopFade(RU[PU]), tU._webAudio && gU._node && !gU._muted ? gU._node.gain.setValueAtTime(UU, EU.ctx.currentTime) : gU._node && !gU._muted && (gU._node.volume = UU * EU.volume()), tU._emit("volume", gU._id));
          return tU
        },
        fade: function(UU, RU, gU, tU) {
          var pU = this;
          if ("loaded" !== pU._state || pU._playLock) return pU._queue.push({
            event: "fade",
            action: function() {
              pU.fade(UU, RU, gU, tU)
            }
          }), pU;
          UU = Math.min(Math.max(0, parseFloat(UU)), 1), RU = Math.min(Math.max(0, parseFloat(RU)), 1), gU = parseFloat(gU), pU.volume(UU, tU);
          for (var PU = pU._getSoundIds(tU), TU = 0; TU < PU.length; TU++) {
            var qU = pU._soundById(PU[TU]);
            if (qU) {
              if (tU || pU._stopFade(PU[TU]), pU._webAudio && !qU._muted) {
                var KU = EU.ctx.currentTime,
                  cU = KU + gU / 1e3;
                qU._volume = UU, qU._node.gain.setValueAtTime(UU, KU), qU._node.gain.linearRampToValueAtTime(RU, cU)
              }
              pU._startFadeInterval(qU, UU, RU, gU, PU[TU], "undefined" === typeof tU)
            }
          }
          return pU
        },
        _startFadeInterval: function(UU, RU, gU, tU, pU, EU) {
          var PU = this,
            TU = RU,
            qU = gU - RU,
            KU = Math.abs(qU / .01),
            cU = Math.max(4, KU > 0 ? tU / KU : tU),
            GU = Date.now();
          UU._fadeTo = gU, UU._interval = setInterval((function() {
            var pU = (Date.now() - GU) / tU;
            GU = Date.now(), TU += qU * pU, TU = Math.round(100 * TU) / 100, TU = qU < 0 ? Math.max(gU, TU) : Math.min(gU, TU), PU._webAudio ? UU._volume = TU : PU.volume(TU, UU._id, !0), EU && (PU._volume = TU), (gU < RU && TU <= gU || gU > RU && TU >= gU) && (clearInterval(UU._interval), UU._interval = null, UU._fadeTo = null, PU.volume(gU, UU._id), PU._emit("fade", UU._id))
          }), cU)
        },
        _stopFade: function(UU) {
          var RU = this,
            gU = RU._soundById(UU);
          return gU && gU._interval && (RU._webAudio && gU._node.gain.cancelScheduledValues(EU.ctx.currentTime), clearInterval(gU._interval), gU._interval = null, RU.volume(gU._fadeTo, UU), gU._fadeTo = null, RU._emit("fade", UU)), RU
        },
        loop: function() {
          var UU, RU, gU, tU = this,
            pU = arguments;
          if (0 === pU.length) return tU._loop;
          if (1 === pU.length) {
            if ("boolean" !== typeof pU[0]) return !!(gU = tU._soundById(parseInt(pU[0], 10))) && gU._loop;
            UU = pU[0], tU._loop = UU
          } else 2 === pU.length && (UU = pU[0], RU = parseInt(pU[1], 10));
          for (var EU = tU._getSoundIds(RU), PU = 0; PU < EU.length; PU++)(gU = tU._soundById(EU[PU])) && (gU._loop = UU, tU._webAudio && gU._node && gU._node.bufferSource && (gU._node.bufferSource.loop = UU, UU && (gU._node.bufferSource.loopStart = gU._start || 0, gU._node.bufferSource.loopEnd = gU._stop, tU.playing(EU[PU]) && (tU.pause(EU[PU], !0), tU.play(EU[PU], !0)))));
          return tU
        },
        rate: function() {
          var UU, RU, gU, tU = this,
            pU = arguments;
          if (0 === pU.length) RU = tU._sounds[0]._id;
          else if (1 === pU.length) {
            tU._getSoundIds().indexOf(pU[0]) >= 0 ? RU = parseInt(pU[0], 10) : UU = parseFloat(pU[0])
          } else 2 === pU.length && (UU = parseFloat(pU[0]), RU = parseInt(pU[1], 10));
          if ("number" !== typeof UU) return (gU = tU._soundById(RU)) ? gU._rate : tU._rate;
          if ("loaded" !== tU._state || tU._playLock) return tU._queue.push({
            event: "rate",
            action: function() {
              tU.rate.apply(tU, pU)
            }
          }), tU;
          "undefined" === typeof RU && (tU._rate = UU), RU = tU._getSoundIds(RU);
          for (var PU = 0; PU < RU.length; PU++)
            if (gU = tU._soundById(RU[PU])) {
              tU.playing(RU[PU]) && (gU._rateSeek = tU.seek(RU[PU]), gU._playStart = tU._webAudio ? EU.ctx.currentTime : gU._playStart), gU._rate = UU, tU._webAudio && gU._node && gU._node.bufferSource ? gU._node.bufferSource.playbackRate.setValueAtTime(UU, EU.ctx.currentTime) : gU._node && (gU._node.playbackRate = UU);
              var TU = tU.seek(RU[PU]),
                qU = 1e3 * ((tU._sprite[gU._sprite][0] + tU._sprite[gU._sprite][1]) / 1e3 - TU) / Math.abs(gU._rate);
              !tU._endTimers[RU[PU]] && gU.pI || (tU._clearTimer(RU[PU]), tU._endTimers[RU[PU]] = setTimeout(tU._ended.bind(tU, gU), qU)), tU._emit("rate", gU._id)
            } return tU
        },
        seek: function() {
          var UU, RU, gU = this,
            tU = arguments;
          if (0 === tU.length) gU._sounds.length && (RU = gU._sounds[0]._id);
          else if (1 === tU.length) {
            gU._getSoundIds().indexOf(tU[0]) >= 0 ? RU = parseInt(tU[0], 10) : gU._sounds.length && (RU = gU._sounds[0]._id, UU = parseFloat(tU[0]))
          } else 2 === tU.length && (UU = parseFloat(tU[0]), RU = parseInt(tU[1], 10));
          if ("undefined" === typeof RU) return 0;
          if ("number" === typeof UU && ("loaded" !== gU._state || gU._playLock)) return gU._queue.push({
            event: "seek",
            action: function() {
              gU.seek.apply(gU, tU)
            }
          }), gU;
          var pU = gU._soundById(RU);
          if (pU) {
            if (!("number" === typeof UU && UU >= 0)) {
              if (gU._webAudio) {
                var PU = gU.playing(RU) ? EU.ctx.currentTime - pU._playStart : 0,
                  TU = pU._rateSeek ? pU._rateSeek - pU._seek : 0;
                return pU._seek + (TU + PU * Math.abs(pU._rate))
              }
              return pU._node.currentTime
            }
            var qU = gU.playing(RU);
            qU && gU.pause(RU, !0), pU._seek = UU, pU._ended = !1, gU._clearTimer(RU), gU._webAudio || !pU._node || isNaN(pU._node.duration) || (pU._node.currentTime = UU);
            var KU = function() {
              qU && gU.play(RU, !0), gU._emit("seek", RU)
            };
            if (qU && !gU._webAudio) {
              var cU = function() {
                gU._playLock ? setTimeout(cU, 0) : KU()
              };
              setTimeout(cU, 0)
            } else KU()
          }
          return gU
        },
        playing: function(UU) {
          var RU = this;
          if ("number" === typeof UU) {
            var gU = RU._soundById(UU);
            return !!gU && !gU.pI
          }
          for (var tU = 0; tU < RU._sounds.length; tU++)
            if (!RU._sounds[tU].pI) return !0;
          return !1
        },
        duration: function(UU) {
          var RU = this,
            gU = RU._duration,
            tU = RU._soundById(UU);
          return tU && (gU = RU._sprite[tU._sprite][1] / 1e3), gU
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var UU = this, RU = UU._sounds, gU = 0; gU < RU.length; gU++) RU[gU].pI || UU.stop(RU[gU]._id), UU._webAudio || (UU._clearSound(RU[gU]._node), RU[gU]._node.removeEventListener("error", RU[gU]._errorFn, !1), RU[gU]._node.removeEventListener(EU._canPlayEvent, RU[gU]._loadFn, !1), RU[gU]._node.removeEventListener("ended", RU[gU]._endFn, !1), EU._releaseHtml5Audio(RU[gU]._node)), delete RU[gU]._node, UU._clearTimer(RU[gU]._id);
          var tU = EU._howls.indexOf(UU);
          tU >= 0 && EU._howls.splice(tU, 1);
          var pU = !0;
          for (gU = 0; gU < EU._howls.length; gU++)
            if (EU._howls[gU]._src === UU._src || UU._src.indexOf(EU._howls[gU]._src) >= 0) {
              pU = !1;
              break
            } return qU && pU && delete qU[UU._src], EU.noAudio = !1, UU._state = "unloaded", UU._sounds = [], UU = null, null
        },
        on: function(UU, RU, gU, tU) {
          var pU = this["_on" + UU];
          return "function" === typeof RU && pU.push(tU ? {
            id: gU,
            Au: RU,
            once: tU
          } : {
            id: gU,
            Au: RU
          }), this
        },
        off: function(UU, RU, gU) {
          var tU = this,
            pU = tU["_on" + UU],
            EU = 0;
          if ("number" === typeof RU && (gU = RU, RU = null), RU || gU)
            for (EU = 0; EU < pU.length; EU++) {
              var PU = gU === pU[EU].id;
              if (RU === pU[EU].Au && PU || !RU && PU) {
                pU.splice(EU, 1);
                break
              }
            } else if (UU) tU["_on" + UU] = [];
            else {
              var TU = Object.keys(tU);
              for (EU = 0; EU < TU.length; EU++) 0 === TU[EU].indexOf("_on") && Array.isArray(tU[TU[EU]]) && (tU[TU[EU]] = [])
            } return tU
        },
        once: function(UU, RU, gU) {
          return this.on(UU, RU, gU, 1), this
        },
        _emit: function(UU, RU, gU) {
          for (var tU = this, pU = tU["_on" + UU], EU = pU.length - 1; EU >= 0; EU--) pU[EU].id && pU[EU].id !== RU && "load" !== UU || (setTimeout(function(UU) {
            UU.call(this, RU, gU)
          }.bind(tU, pU[EU].Au), 0), pU[EU].once && tU.off(UU, pU[EU].Au, pU[EU].id));
          return tU._loadQueue(UU), tU
        },
        _loadQueue: function(UU) {
          var RU = this;
          if (RU._queue.length > 0) {
            var gU = RU._queue[0];
            gU.event === UU && (RU._queue.shift(), RU._loadQueue()), UU || gU.action()
          }
          return RU
        },
        _ended: function(UU) {
          var RU = this,
            gU = UU._sprite;
          if (!RU._webAudio && UU._node && !UU._node.paused && !UU._node.ended && UU._node.currentTime < UU._stop) return setTimeout(RU._ended.bind(RU, UU), 100), RU;
          var tU = !(!UU._loop && !RU._sprite[gU][2]);
          if (RU._emit("end", UU._id), !RU._webAudio && tU && RU.stop(UU._id, !0).play(UU._id), RU._webAudio && tU) {
            RU._emit("play", UU._id), UU._seek = UU._start || 0, UU._rateSeek = 0, UU._playStart = EU.ctx.currentTime;
            var pU = 1e3 * (UU._stop - UU._start) / Math.abs(UU._rate);
            RU._endTimers[UU._id] = setTimeout(RU._ended.bind(RU, UU), pU)
          }
          return RU._webAudio && !tU && (UU.pI = !0, UU._ended = !0, UU._seek = UU._start || 0, UU._rateSeek = 0, RU._clearTimer(UU._id), RU._cleanBuffer(UU._node), EU._autoSuspend()), RU._webAudio || tU || RU.stop(UU._id, !0), RU
        },
        _clearTimer: function(UU) {
          var RU = this;
          if (RU._endTimers[UU]) {
            if ("function" !== typeof RU._endTimers[UU]) clearTimeout(RU._endTimers[UU]);
            else {
              var gU = RU._soundById(UU);
              gU && gU._node && gU._node.removeEventListener("ended", RU._endTimers[UU], !1)
            }
            delete RU._endTimers[UU]
          }
          return RU
        },
        _soundById: function(UU) {
          for (var RU = this, gU = 0; gU < RU._sounds.length; gU++)
            if (UU === RU._sounds[gU]._id) return RU._sounds[gU];
          return null
        },
        _inactiveSound: function() {
          var UU = this;
          UU._drain();
          for (var RU = 0; RU < UU._sounds.length; RU++)
            if (UU._sounds[RU]._ended) return UU._sounds[RU].reset();
          return new TU(UU)
        },
        _drain: function() {
          var UU = this,
            RU = UU._pool,
            gU = 0,
            tU = 0;
          if (!(UU._sounds.length < RU)) {
            for (tU = 0; tU < UU._sounds.length; tU++) UU._sounds[tU]._ended && gU++;
            for (tU = UU._sounds.length - 1; tU >= 0; tU--) {
              if (gU <= RU) return;
              UU._sounds[tU]._ended && (UU._webAudio && UU._sounds[tU]._node && UU._sounds[tU]._node.disconnect(0), UU._sounds.splice(tU, 1), gU--)
            }
          }
        },
        _getSoundIds: function(UU) {
          if ("undefined" === typeof UU) {
            for (var RU = [], gU = 0; gU < this._sounds.length; gU++) RU.push(this._sounds[gU]._id);
            return RU
          }
          return [UU]
        },
        _refreshBuffer: function(UU) {
          return UU._node.bufferSource = EU.ctx.createBufferSource(), UU._node.bufferSource.buffer = qU[this._src], UU._panner ? UU._node.bufferSource.connect(UU._panner) : UU._node.bufferSource.connect(UU._node), UU._node.bufferSource.loop = UU._loop, UU._loop && (UU._node.bufferSource.loopStart = UU._start || 0, UU._node.bufferSource.loopEnd = UU._stop || 0), UU._node.bufferSource.playbackRate.setValueAtTime(UU._rate, EU.ctx.currentTime), this
        },
        _cleanBuffer: function(UU) {
          var RU = EU._navigator && EU._navigator.vendor.indexOf("Apple") >= 0;
          if (EU._scratchBuffer && UU.bufferSource && (UU.bufferSource.onended = null, UU.bufferSource.disconnect(0), RU)) try {
            UU.bufferSource.buffer = EU._scratchBuffer
          } catch (gU) {}
          return UU.bufferSource = null, this
        },
        _clearSound: function(UU) {
          /MSIE |Trident\//.test(EU._navigator && EU._navigator.userAgent) || (UU.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var TU = function(UU) {
        this._parent = UU, this.init()
      };
      TU.prototype = {
        init: function() {
          var UU = this,
            RU = UU._parent;
          return UU._muted = RU._muted, UU._loop = RU._loop, UU._volume = RU._volume, UU._rate = RU._rate, UU._seek = 0, UU.pI = !0, UU._ended = !0, UU._sprite = "__default", UU._id = ++EU._counter, RU._sounds.push(UU), UU.create(), UU
        },
        create: function() {
          var UU = this,
            RU = UU._parent,
            gU = EU._muted || UU._muted || UU._parent._muted ? 0 : UU._volume;
          return RU._webAudio ? (UU._node = "undefined" === typeof EU.ctx.createGain ? EU.ctx.createGainNode() : EU.ctx.createGain(), UU._node.gain.setValueAtTime(gU, EU.ctx.currentTime), UU._node.paused = !0, UU._node.connect(EU.masterGain)) : EU.noAudio || (UU._node = EU._obtainHtml5Audio(), UU._errorFn = UU._errorListener.bind(UU), UU._node.addEventListener("error", UU._errorFn, !1), UU._loadFn = UU._loadListener.bind(UU), UU._node.addEventListener(EU._canPlayEvent, UU._loadFn, !1), UU._endFn = UU._endListener.bind(UU), UU._node.addEventListener("ended", UU._endFn, !1), UU._node.src = RU._src, UU._node.preload = !0 === RU._preload ? "auto" : RU._preload, UU._node.volume = gU * EU.volume(), UU._node.load()), UU
        },
        reset: function() {
          var UU = this,
            RU = UU._parent;
          return UU._muted = RU._muted, UU._loop = RU._loop, UU._volume = RU._volume, UU._rate = RU._rate, UU._seek = 0, UU._rateSeek = 0, UU.pI = !0, UU._ended = !0, UU._sprite = "__default", UU._id = ++EU._counter, UU
        },
        _errorListener: function() {
          var UU = this;
          UU._parent._emit("loaderror", UU._id, UU._node.error ? UU._node.error.code : 0), UU._node.removeEventListener("error", UU._errorFn, !1)
        },
        _loadListener: function() {
          var UU = this,
            RU = UU._parent;
          RU._duration = Math.ceil(10 * UU._node.duration) / 10, 0 === Object.keys(RU._sprite).length && (RU._sprite = {
            __default: [0, 1e3 * RU._duration]
          }), "loaded" !== RU._state && (RU._state = "loaded", RU._emit("load"), RU._loadQueue()), UU._node.removeEventListener(EU._canPlayEvent, UU._loadFn, !1)
        },
        _endListener: function() {
          var UU = this,
            RU = UU._parent;
          RU._duration === 1 / 0 && (RU._duration = Math.ceil(10 * UU._node.duration) / 10, RU._sprite.__default[1] === 1 / 0 && (RU._sprite.__default[1] = 1e3 * RU._duration), RU._ended(UU)), UU._node.removeEventListener("ended", UU._endFn, !1)
        }
      };
      var qU = {},
        KU = function(UU) {
          var RU = UU._src;
          if (qU[RU]) return UU._duration = qU[RU].duration, void jU(UU);
          if (/^data:[^;]+;base64,/.test(RU)) {
            for (var gU = atob(RU.split(",")[1]), tU = new Uint8Array(gU.length), pU = 0; pU < gU.length; ++pU) tU[pU] = gU.charCodeAt(pU);
            GU(tU.buffer, UU)
          } else {
            var EU = new XMLHttpRequest;
            EU.open(UU._xhr.method, RU, !0), EU.withCredentials = UU._xhr.withCredentials, EU.responseType = "arraybuffer", UU._xhr.headers && Object.keys(UU._xhr.headers).forEach((function(RU) {
              EU.setRequestHeader(RU, UU._xhr.headers[RU])
            })), EU.onload = function() {
              var RU = (EU.status + "")[0];
              "0" === RU || "2" === RU || "3" === RU ? GU(EU.response, UU) : UU._emit("loaderror", null, "Failed loading audio file with status: " + EU.status + ".")
            }, EU.onerror = function() {
              UU._webAudio && (UU._html5 = !0, UU._webAudio = !1, UU._sounds = [], delete qU[RU], UU.load())
            }, cU(EU)
          }
        },
        cU = function(UU) {
          try {
            UU.send()
          } catch (RU) {
            UU.onerror()
          }
        },
        GU = function(UU, RU) {
          var gU = function() {
              RU._emit("loaderror", null, "Decoding audio data failed.")
            },
            tU = function(UU) {
              UU && RU._sounds.length > 0 ? (qU[RU._src] = UU, jU(RU, UU)) : gU()
            };
          "undefined" !== typeof Promise && 1 === EU.ctx.decodeAudioData.length ? EU.ctx.decodeAudioData(UU).then(tU).catch(gU) : EU.ctx.decodeAudioData(UU, tU, gU)
        },
        jU = function(UU, RU) {
          RU && !UU._duration && (UU._duration = RU.duration), 0 === Object.keys(UU._sprite).length && (UU._sprite = {
            __default: [0, 1e3 * UU._duration]
          }), "loaded" !== UU._state && (UU._state = "loaded", UU._emit("load"), UU._loadQueue())
        },
        uU = function() {
          if (EU.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? EU.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? EU.ctx = new webkitAudioContext : EU.usingWebAudio = !1
            } catch (pU) {
              EU.usingWebAudio = !1
            }
            EU.ctx || (EU.usingWebAudio = !1);
            var UU = /iP(hone|od|ad)/.test(EU._navigator && EU._navigator.platform),
              RU = EU._navigator && EU._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              gU = RU ? parseInt(RU[1], 10) : null;
            if (UU && gU && gU < 9) {
              var tU = /safari/.test(EU._navigator && EU._navigator.userAgent.toLowerCase());
              EU._navigator && !tU && (EU.usingWebAudio = !1)
            }
            EU.usingWebAudio && (EU.masterGain = "undefined" === typeof EU.ctx.createGain ? EU.ctx.createGainNode() : EU.ctx.createGain(), EU.masterGain.gain.setValueAtTime(EU._muted ? 0 : EU._volume, EU.ctx.currentTime), EU.masterGain.connect(EU.ctx.destination)), EU._setup()
          }
        };
      void 0 === (tU = function() {
        return {
          Howler: EU,
          Howl: PU
        }
      }.apply(RU, [])) || (UU.exports = tU), RU.Howler = EU, RU.Howl = PU, "undefined" !== typeof gU.g ? (gU.g.HowlerGlobal = pU, gU.g.Howler = EU, gU.g.Howl = PU, gU.g.Sound = TU) : "undefined" !== typeof window && (window.HowlerGlobal = pU, window.Howler = EU, window.Howl = PU, window.Sound = TU)
    }(),
    function() {
      var UU;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(UU) {
        var RU = this;
        if (!RU.ctx || !RU.ctx.listener) return RU;
        for (var gU = RU._howls.length - 1; gU >= 0; gU--) RU._howls[gU].stereo(UU);
        return RU
      }, HowlerGlobal.prototype.pos = function(UU, RU, gU) {
        var tU = this;
        return tU.ctx && tU.ctx.listener ? (RU = "number" !== typeof RU ? tU._pos[1] : RU, gU = "number" !== typeof gU ? tU._pos[2] : gU, "number" !== typeof UU ? tU._pos : (tU._pos = [UU, RU, gU], "undefined" !== typeof tU.ctx.listener.positionX ? (tU.ctx.listener.positionX.setTargetAtTime(tU._pos[0], Howler.ctx.currentTime, .1), tU.ctx.listener.positionY.setTargetAtTime(tU._pos[1], Howler.ctx.currentTime, .1), tU.ctx.listener.positionZ.setTargetAtTime(tU._pos[2], Howler.ctx.currentTime, .1)) : tU.ctx.listener.setPosition(tU._pos[0], tU._pos[1], tU._pos[2]), tU)) : tU
      }, HowlerGlobal.prototype.orientation = function(UU, RU, gU, tU, pU, EU) {
        var PU = this;
        if (!PU.ctx || !PU.ctx.listener) return PU;
        var TU = PU._orientation;
        return RU = "number" !== typeof RU ? TU[1] : RU, gU = "number" !== typeof gU ? TU[2] : gU, tU = "number" !== typeof tU ? TU[3] : tU, pU = "number" !== typeof pU ? TU[4] : pU, EU = "number" !== typeof EU ? TU[5] : EU, "number" !== typeof UU ? TU : (PU._orientation = [UU, RU, gU, tU, pU, EU], "undefined" !== typeof PU.ctx.listener.forwardX ? (PU.ctx.listener.forwardX.setTargetAtTime(UU, Howler.ctx.currentTime, .1), PU.ctx.listener.forwardY.setTargetAtTime(RU, Howler.ctx.currentTime, .1), PU.ctx.listener.forwardZ.setTargetAtTime(gU, Howler.ctx.currentTime, .1), PU.ctx.listener.upX.setTargetAtTime(tU, Howler.ctx.currentTime, .1), PU.ctx.listener.upY.setTargetAtTime(pU, Howler.ctx.currentTime, .1), PU.ctx.listener.upZ.setTargetAtTime(EU, Howler.ctx.currentTime, .1)) : PU.ctx.listener.setOrientation(UU, RU, gU, tU, pU, EU), PU)
      }, Howl.prototype.init = (UU = Howl.prototype.init, function(RU) {
        var gU = this;
        return gU._orientation = RU.orientation || [1, 0, 0], gU._stereo = RU.stereo || null, gU._pos = RU.pos || null, gU._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof RU.coneInnerAngle ? RU.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof RU.coneOuterAngle ? RU.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof RU.coneOuterGain ? RU.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof RU.distanceModel ? RU.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof RU.maxDistance ? RU.maxDistance : 1e4,
          panningModel: "undefined" !== typeof RU.panningModel ? RU.panningModel : "HRTF",
          refDistance: "undefined" !== typeof RU.refDistance ? RU.refDistance : 1,
          rolloffFactor: "undefined" !== typeof RU.rolloffFactor ? RU.rolloffFactor : 1
        }, gU._onstereo = RU.onstereo ? [{
          Au: RU.onstereo
        }] : [], gU._onpos = RU.onpos ? [{
          Au: RU.onpos
        }] : [], gU._onorientation = RU.onorientation ? [{
          Au: RU.onorientation
        }] : [], UU.call(this, RU)
      }), Howl.prototype.stereo = function(UU, gU) {
        var tU = this;
        if (!tU._webAudio) return tU;
        if ("loaded" !== tU._state) return tU._queue.push({
          event: "stereo",
          action: function() {
            tU.stereo(UU, gU)
          }
        }), tU;
        var pU = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof gU) {
          if ("number" !== typeof UU) return tU._stereo;
          tU._stereo = UU, tU._pos = [UU, 0, 0]
        }
        for (var EU = tU._getSoundIds(gU), PU = 0; PU < EU.length; PU++) {
          var TU = tU._soundById(EU[PU]);
          if (TU) {
            if ("number" !== typeof UU) return TU._stereo;
            TU._stereo = UU, TU._pos = [UU, 0, 0], TU._node && (TU._pannerAttr.panningModel = "equalpower", TU._panner && TU._panner.pan || RU(TU, pU), "spatial" === pU ? "undefined" !== typeof TU._panner.positionX ? (TU._panner.positionX.setValueAtTime(UU, Howler.ctx.currentTime), TU._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), TU._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : TU._panner.setPosition(UU, 0, 0) : TU._panner.pan.setValueAtTime(UU, Howler.ctx.currentTime)), tU._emit("stereo", TU._id)
          }
        }
        return tU
      }, Howl.prototype.pos = function(UU, gU, tU, pU) {
        var EU = this;
        if (!EU._webAudio) return EU;
        if ("loaded" !== EU._state) return EU._queue.push({
          event: "pos",
          action: function() {
            EU.pos(UU, gU, tU, pU)
          }
        }), EU;
        if (gU = "number" !== typeof gU ? 0 : gU, tU = "number" !== typeof tU ? -.5 : tU, "undefined" === typeof pU) {
          if ("number" !== typeof UU) return EU._pos;
          EU._pos = [UU, gU, tU]
        }
        for (var PU = EU._getSoundIds(pU), TU = 0; TU < PU.length; TU++) {
          var qU = EU._soundById(PU[TU]);
          if (qU) {
            if ("number" !== typeof UU) return qU._pos;
            qU._pos = [UU, gU, tU], qU._node && (qU._panner && !qU._panner.pan || RU(qU, "spatial"), "undefined" !== typeof qU._panner.positionX ? (qU._panner.positionX.setValueAtTime(UU, Howler.ctx.currentTime), qU._panner.positionY.setValueAtTime(gU, Howler.ctx.currentTime), qU._panner.positionZ.setValueAtTime(tU, Howler.ctx.currentTime)) : qU._panner.setPosition(UU, gU, tU)), EU._emit("pos", qU._id)
          }
        }
        return EU
      }, Howl.prototype.orientation = function(UU, gU, tU, pU) {
        var EU = this;
        if (!EU._webAudio) return EU;
        if ("loaded" !== EU._state) return EU._queue.push({
          event: "orientation",
          action: function() {
            EU.orientation(UU, gU, tU, pU)
          }
        }), EU;
        if (gU = "number" !== typeof gU ? EU._orientation[1] : gU, tU = "number" !== typeof tU ? EU._orientation[2] : tU, "undefined" === typeof pU) {
          if ("number" !== typeof UU) return EU._orientation;
          EU._orientation = [UU, gU, tU]
        }
        for (var PU = EU._getSoundIds(pU), TU = 0; TU < PU.length; TU++) {
          var qU = EU._soundById(PU[TU]);
          if (qU) {
            if ("number" !== typeof UU) return qU._orientation;
            qU._orientation = [UU, gU, tU], qU._node && (qU._panner || (qU._pos || (qU._pos = EU._pos || [0, 0, -.5]), RU(qU, "spatial")), "undefined" !== typeof qU._panner.orientationX ? (qU._panner.orientationX.setValueAtTime(UU, Howler.ctx.currentTime), qU._panner.orientationY.setValueAtTime(gU, Howler.ctx.currentTime), qU._panner.orientationZ.setValueAtTime(tU, Howler.ctx.currentTime)) : qU._panner.setOrientation(UU, gU, tU)), EU._emit("orientation", qU._id)
          }
        }
        return EU
      }, Howl.prototype.pannerAttr = function() {
        var UU, gU, tU, pU = this,
          EU = arguments;
        if (!pU._webAudio) return pU;
        if (0 === EU.length) return pU._pannerAttr;
        if (1 === EU.length) {
          if ("object" !== typeof EU[0]) return (tU = pU._soundById(parseInt(EU[0], 10))) ? tU._pannerAttr : pU._pannerAttr;
          UU = EU[0], "undefined" === typeof gU && (UU.pannerAttr || (UU.pannerAttr = {
            coneInnerAngle: UU.coneInnerAngle,
            coneOuterAngle: UU.coneOuterAngle,
            coneOuterGain: UU.coneOuterGain,
            distanceModel: UU.distanceModel,
            maxDistance: UU.maxDistance,
            refDistance: UU.refDistance,
            rolloffFactor: UU.rolloffFactor,
            panningModel: UU.panningModel
          }), pU._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof UU.pannerAttr.coneInnerAngle ? UU.pannerAttr.coneInnerAngle : pU._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof UU.pannerAttr.coneOuterAngle ? UU.pannerAttr.coneOuterAngle : pU._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof UU.pannerAttr.coneOuterGain ? UU.pannerAttr.coneOuterGain : pU._coneOuterGain,
            distanceModel: "undefined" !== typeof UU.pannerAttr.distanceModel ? UU.pannerAttr.distanceModel : pU._distanceModel,
            maxDistance: "undefined" !== typeof UU.pannerAttr.maxDistance ? UU.pannerAttr.maxDistance : pU._maxDistance,
            refDistance: "undefined" !== typeof UU.pannerAttr.refDistance ? UU.pannerAttr.refDistance : pU._refDistance,
            rolloffFactor: "undefined" !== typeof UU.pannerAttr.rolloffFactor ? UU.pannerAttr.rolloffFactor : pU._rolloffFactor,
            panningModel: "undefined" !== typeof UU.pannerAttr.panningModel ? UU.pannerAttr.panningModel : pU._panningModel
          })
        } else 2 === EU.length && (UU = EU[0], gU = parseInt(EU[1], 10));
        for (var PU = pU._getSoundIds(gU), TU = 0; TU < PU.length; TU++)
          if (tU = pU._soundById(PU[TU])) {
            var qU = tU._pannerAttr;
            qU = {
              coneInnerAngle: "undefined" !== typeof UU.coneInnerAngle ? UU.coneInnerAngle : qU.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof UU.coneOuterAngle ? UU.coneOuterAngle : qU.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof UU.coneOuterGain ? UU.coneOuterGain : qU.coneOuterGain,
              distanceModel: "undefined" !== typeof UU.distanceModel ? UU.distanceModel : qU.distanceModel,
              maxDistance: "undefined" !== typeof UU.maxDistance ? UU.maxDistance : qU.maxDistance,
              refDistance: "undefined" !== typeof UU.refDistance ? UU.refDistance : qU.refDistance,
              rolloffFactor: "undefined" !== typeof UU.rolloffFactor ? UU.rolloffFactor : qU.rolloffFactor,
              panningModel: "undefined" !== typeof UU.panningModel ? UU.panningModel : qU.panningModel
            };
            var KU = tU._panner;
            KU ? (KU.coneInnerAngle = qU.coneInnerAngle, KU.coneOuterAngle = qU.coneOuterAngle, KU.coneOuterGain = qU.coneOuterGain, KU.distanceModel = qU.distanceModel, KU.maxDistance = qU.maxDistance, KU.refDistance = qU.refDistance, KU.rolloffFactor = qU.rolloffFactor, KU.panningModel = qU.panningModel) : (tU._pos || (tU._pos = pU._pos || [0, 0, -.5]), RU(tU, "spatial"))
          } return pU
      }, Sound.prototype.init = function(UU) {
        return function() {
          var RU = this,
            gU = RU._parent;
          RU._orientation = gU._orientation, RU._stereo = gU._stereo, RU._pos = gU._pos, RU._pannerAttr = gU._pannerAttr, UU.call(this), RU._stereo ? gU.stereo(RU._stereo) : RU._pos && gU.pos(RU._pos[0], RU._pos[1], RU._pos[2], RU._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(UU) {
        return function() {
          var RU = this,
            gU = RU._parent;
          return RU._orientation = gU._orientation, RU._stereo = gU._stereo, RU._pos = gU._pos, RU._pannerAttr = gU._pannerAttr, RU._stereo ? gU.stereo(RU._stereo) : RU._pos ? gU.pos(RU._pos[0], RU._pos[1], RU._pos[2], RU._id) : RU._panner && (RU._panner.disconnect(0), RU._panner = void 0, gU._refreshBuffer(RU)), UU.call(this)
        }
      }(Sound.prototype.reset);
      var RU = function(UU, RU) {
        "spatial" === (RU = RU || "spatial") ? (UU._panner = Howler.ctx.createPanner(), UU._panner.coneInnerAngle = UU._pannerAttr.coneInnerAngle, UU._panner.coneOuterAngle = UU._pannerAttr.coneOuterAngle, UU._panner.coneOuterGain = UU._pannerAttr.coneOuterGain, UU._panner.distanceModel = UU._pannerAttr.distanceModel, UU._panner.maxDistance = UU._pannerAttr.maxDistance, UU._panner.refDistance = UU._pannerAttr.refDistance, UU._panner.rolloffFactor = UU._pannerAttr.rolloffFactor, UU._panner.panningModel = UU._pannerAttr.panningModel, "undefined" !== typeof UU._panner.positionX ? (UU._panner.positionX.setValueAtTime(UU._pos[0], Howler.ctx.currentTime), UU._panner.positionY.setValueAtTime(UU._pos[1], Howler.ctx.currentTime), UU._panner.positionZ.setValueAtTime(UU._pos[2], Howler.ctx.currentTime)) : UU._panner.setPosition(UU._pos[0], UU._pos[1], UU._pos[2]), "undefined" !== typeof UU._panner.orientationX ? (UU._panner.orientationX.setValueAtTime(UU._orientation[0], Howler.ctx.currentTime), UU._panner.orientationY.setValueAtTime(UU._orientation[1], Howler.ctx.currentTime), UU._panner.orientationZ.setValueAtTime(UU._orientation[2], Howler.ctx.currentTime)) : UU._panner.setOrientation(UU._orientation[0], UU._orientation[1], UU._orientation[2])) : (UU._panner = Howler.ctx.createStereoPanner(), UU._panner.pan.setValueAtTime(UU._stereo, Howler.ctx.currentTime)), UU._panner.connect(UU._node), UU.pI || UU._parent.pause(UU._id, !0).play(UU._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);