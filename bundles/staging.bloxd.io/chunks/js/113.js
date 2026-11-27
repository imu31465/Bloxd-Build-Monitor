/*! For license information please see 1yqdn.113.656d66ea.chunk.js.LICENSE.txt */
export const id = 113;
export const ids = [113];
export const modules = {
  5618: (WW, iW, OW) => {
    var mW;
    ! function() {
      var EW = function() {
        this.init()
      };
      EW.prototype = {
        init: function() {
          var WW = this || NW;
          return WW._counter = 1e3, WW._html5AudioPool = [], WW.html5PoolSize = 10, WW._codecs = {}, WW._howls = [], WW._muted = !1, WW._volume = 1, WW._canPlayEvent = "canplaythrough", WW._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, WW.masterGain = null, WW.noAudio = !1, WW.usingWebAudio = !0, WW.autoSuspend = !0, WW.ctx = null, WW.autoUnlock = !0, WW._setup(), WW
        },
        volume: function(WW) {
          var iW = this || NW;
          if (WW = parseFloat(WW), iW.ctx || lW(), "undefined" !== typeof WW && WW >= 0 && WW <= 1) {
            if (iW._volume = WW, iW._muted) return iW;
            iW.usingWebAudio && iW.masterGain.gain.setValueAtTime(WW, NW.ctx.currentTime);
            for (var OW = 0; OW < iW._howls.length; OW++)
              if (!iW._howls[OW]._webAudio)
                for (var mW = iW._howls[OW]._getSoundIds(), EW = 0; EW < mW.length; EW++) {
                  var PW = iW._howls[OW]._soundById(mW[EW]);
                  PW && PW._node && (PW._node.volume = PW._volume * WW)
                }
            return iW
          }
          return iW._volume
        },
        mute: function(WW) {
          var iW = this || NW;
          iW.ctx || lW(), iW._muted = WW, iW.usingWebAudio && iW.masterGain.gain.setValueAtTime(WW ? 0 : iW._volume, NW.ctx.currentTime);
          for (var OW = 0; OW < iW._howls.length; OW++)
            if (!iW._howls[OW]._webAudio)
              for (var mW = iW._howls[OW]._getSoundIds(), EW = 0; EW < mW.length; EW++) {
                var PW = iW._howls[OW]._soundById(mW[EW]);
                PW && PW._node && (PW._node.muted = !!WW || PW._muted)
              }
          return iW
        },
        stop: function() {
          for (var WW = this || NW, iW = 0; iW < WW._howls.length; iW++) WW._howls[iW].stop();
          return WW
        },
        unload: function() {
          for (var WW = this || NW, iW = WW._howls.length - 1; iW >= 0; iW--) WW._howls[iW].unload();
          return WW.usingWebAudio && WW.ctx && "undefined" !== typeof WW.ctx.close && (WW.ctx.close(), WW.ctx = null, lW()), WW
        },
        codecs: function(WW) {
          return (this || NW)._codecs[WW.replace(/^x-/, "")]
        },
        _setup: function() {
          var WW = this || NW;
          if (WW.state = WW.ctx && WW.ctx.state || "suspended", WW._autoSuspend(), !WW.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (WW._canPlayEvent = "canplay")
            } catch (iW) {
              WW.noAudio = !0
            } else WW.noAudio = !0;
          try {
            (new Audio).muted && (WW.noAudio = !0)
          } catch (iW) {}
          return WW.noAudio || WW._setupCodecs(), WW
        },
        _setupCodecs: function() {
          var WW = this || NW,
            iW = null;
          try {
            iW = "undefined" !== typeof Audio ? new Audio : null
          } catch (tW) {
            return WW
          }
          if (!iW || "function" !== typeof iW.canPlayType) return WW;
          var OW = iW.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            mW = WW._navigator ? WW._navigator.userAgent : "",
            EW = mW.match(/OPR\/([0-6].)/g),
            PW = EW && parseInt(EW[0].split("/")[1], 10) < 33,
            LW = -1 !== mW.indexOf("Safari") && -1 === mW.indexOf("Chrome"),
            cW = mW.match(/Version\/(.*?) /),
            wW = LW && cW && parseInt(cW[1], 10) < 15;
          return WW._codecs = {
            mp3: !(PW || !OW && !iW.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!OW,
            opus: !!iW.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!iW.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!iW.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(iW.canPlayType('audio/wav; codecs="1"') || iW.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!iW.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!iW.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(iW.canPlayType("audio/x-m4a;") || iW.canPlayType("audio/m4a;") || iW.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(iW.canPlayType("audio/x-m4b;") || iW.canPlayType("audio/m4b;") || iW.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(iW.canPlayType("audio/x-mp4;") || iW.canPlayType("audio/mp4;") || iW.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(wW || !iW.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(wW || !iW.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!iW.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(iW.canPlayType("audio/x-flac;") || iW.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, WW
        },
        _unlockAudio: function() {
          var WW = this || NW;
          if (!WW._audioUnlocked && WW.ctx) {
            WW._audioUnlocked = !1, WW.autoUnlock = !1, WW._mobileUnloaded || 44100 === WW.ctx.sampleRate || (WW._mobileUnloaded = !0, WW.unload()), WW._scratchBuffer = WW.ctx.createBuffer(1, 1, 22050);
            var iW = function(OW) {
              for (; WW._html5AudioPool.length < WW.html5PoolSize;) try {
                var mW = new Audio;
                mW._unlocked = !0, WW._releaseHtml5Audio(mW)
              } catch (OW) {
                WW.noAudio = !0;
                break
              }
              for (var EW = 0; EW < WW._howls.length; EW++)
                if (!WW._howls[EW]._webAudio)
                  for (var NW = WW._howls[EW]._getSoundIds(), PW = 0; PW < NW.length; PW++) {
                    var LW = WW._howls[EW]._soundById(NW[PW]);
                    LW && LW._node && !LW._node._unlocked && (LW._node._unlocked = !0, LW._node.load())
                  }
              WW._autoResume();
              var cW = WW.ctx.createBufferSource();
              cW.buffer = WW._scratchBuffer, cW.connect(WW.ctx.destination), "undefined" === typeof cW.start ? cW.noteOn(0) : cW.start(0), "function" === typeof WW.ctx.resume && WW.ctx.resume(), cW.onended = function() {
                cW.disconnect(0), WW._audioUnlocked = !0, document.removeEventListener("touchstart", iW, !0), document.removeEventListener("touchend", iW, !0), document.removeEventListener("click", iW, !0), document.removeEventListener("keydown", iW, !0);
                for (var OW = 0; OW < WW._howls.length; OW++) WW._howls[OW]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", iW, !0), document.addEventListener("touchend", iW, !0), document.addEventListener("click", iW, !0), document.addEventListener("keydown", iW, !0), WW
          }
        },
        _obtainHtml5Audio: function() {
          var WW = this || NW;
          if (WW._html5AudioPool.length) return WW._html5AudioPool.pop();
          var iW = (new Audio).play();
          return iW && "undefined" !== typeof Promise && (iW instanceof Promise || "function" === typeof iW.then) && iW.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(WW) {
          var iW = this || NW;
          return WW._unlocked && iW._html5AudioPool.push(WW), iW
        },
        _autoSuspend: function() {
          var WW = this;
          if (WW.autoSuspend && WW.ctx && "undefined" !== typeof WW.ctx.suspend && NW.usingWebAudio) {
            for (var iW = 0; iW < WW._howls.length; iW++)
              if (WW._howls[iW]._webAudio)
                for (var OW = 0; OW < WW._howls[iW]._sounds.length; OW++)
                  if (!WW._howls[iW]._sounds[OW].JZ) return WW;
            return WW._suspendTimer && clearTimeout(WW._suspendTimer), WW._suspendTimer = setTimeout((function() {
              if (WW.autoSuspend) {
                WW._suspendTimer = null, WW.state = "suspending";
                var iW = function() {
                  WW.state = "suspended", WW._resumeAfterSuspend && (delete WW._resumeAfterSuspend, WW._autoResume())
                };
                WW.ctx.suspend().then(iW, iW)
              }
            }), 3e4), WW
          }
        },
        _autoResume: function() {
          var WW = this;
          if (WW.ctx && "undefined" !== typeof WW.ctx.resume && NW.usingWebAudio) return "running" === WW.state && "interrupted" !== WW.ctx.state && WW._suspendTimer ? (clearTimeout(WW._suspendTimer), WW._suspendTimer = null) : "suspended" === WW.state || "running" === WW.state && "interrupted" === WW.ctx.state ? (WW.ctx.resume().then((function() {
            WW.state = "running";
            for (var iW = 0; iW < WW._howls.length; iW++) WW._howls[iW]._emit("resume")
          })), WW._suspendTimer && (clearTimeout(WW._suspendTimer), WW._suspendTimer = null)) : "suspending" === WW.state && (WW._resumeAfterSuspend = !0), WW
        }
      };
      var NW = new EW,
        PW = function(WW) {
          WW.src && 0 !== WW.src.length ? this.init(WW) : console.error("An array of source files must be passed with any new Howl.")
        };
      PW.prototype = {
        init: function(WW) {
          var iW = this;
          return NW.ctx || lW(), iW._autoplay = WW.autoplay || !1, iW._format = "string" !== typeof WW.format ? WW.format : [WW.format], iW._html5 = WW.html5 || !1, iW._muted = WW.mute || !1, iW._loop = WW.loop || !1, iW._pool = WW.pool || 5, iW._preload = "boolean" !== typeof WW.preload && "metadata" !== WW.preload || WW.preload, iW._rate = WW.rate || 1, iW._sprite = WW.sprite || {}, iW._src = "string" !== typeof WW.src ? WW.src : [WW.src], iW._volume = void 0 !== WW.volume ? WW.volume : 1, iW._xhr = {
            method: WW.xhr && WW.xhr.method ? WW.xhr.method : "GET",
            headers: WW.xhr && WW.xhr.headers ? WW.xhr.headers : null,
            withCredentials: !(!WW.xhr || !WW.xhr.withCredentials) && WW.xhr.withCredentials
          }, iW._duration = 0, iW._state = "unloaded", iW._sounds = [], iW._endTimers = {}, iW._queue = [], iW._playLock = !1, iW._onend = WW.onend ? [{
            cZ: WW.onend
          }] : [], iW._onfade = WW.onfade ? [{
            cZ: WW.onfade
          }] : [], iW._onload = WW.onload ? [{
            cZ: WW.onload
          }] : [], iW._onloaderror = WW.onloaderror ? [{
            cZ: WW.onloaderror
          }] : [], iW._onplayerror = WW.onplayerror ? [{
            cZ: WW.onplayerror
          }] : [], iW._onpause = WW.onpause ? [{
            cZ: WW.onpause
          }] : [], iW._onplay = WW.onplay ? [{
            cZ: WW.onplay
          }] : [], iW._onstop = WW.onstop ? [{
            cZ: WW.onstop
          }] : [], iW._onmute = WW.onmute ? [{
            cZ: WW.onmute
          }] : [], iW._onvolume = WW.onvolume ? [{
            cZ: WW.onvolume
          }] : [], iW._onrate = WW.onrate ? [{
            cZ: WW.onrate
          }] : [], iW._onseek = WW.onseek ? [{
            cZ: WW.onseek
          }] : [], iW._onunlock = WW.onunlock ? [{
            cZ: WW.onunlock
          }] : [], iW._onresume = [], iW._webAudio = NW.usingWebAudio && !iW._html5, "undefined" !== typeof NW.ctx && NW.ctx && NW.autoUnlock && NW._unlockAudio(), NW._howls.push(iW), iW._autoplay && iW._queue.push({
            event: "play",
            action: function() {
              iW.play()
            }
          }), iW._preload && "none" !== iW._preload && iW.load(), iW
        },
        load: function() {
          var WW = this,
            iW = null;
          if (NW.noAudio) WW._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof WW._src && (WW._src = [WW._src]);
            for (var OW = 0; OW < WW._src.length; OW++) {
              var mW, EW;
              if (WW._format && WW._format[OW]) mW = WW._format[OW];
              else {
                if ("string" !== typeof(EW = WW._src[OW])) {
                  WW._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(mW = /^data:audio\/([^;,]+);/i.exec(EW)) || (mW = /\.([^.]+)$/.exec(EW.split("?", 1)[0])), mW && (mW = mW[1].toLowerCase())
              }
              if (mW || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), mW && NW.codecs(mW)) {
                iW = WW._src[OW];
                break
              }
            }
            if (iW) return WW._src = iW, WW._state = "loading", "https:" === window.location.protocol && "http:" === iW.slice(0, 5) && (WW._html5 = !0, WW._webAudio = !1), new LW(WW), WW._webAudio && wW(WW), WW;
            WW._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(WW, iW) {
          var OW = this,
            mW = null;
          if ("number" === typeof WW) mW = WW, WW = null;
          else {
            if ("string" === typeof WW && "loaded" === OW._state && !OW._sprite[WW]) return null;
            if ("undefined" === typeof WW && (WW = "__default", !OW._playLock)) {
              for (var EW = 0, PW = 0; PW < OW._sounds.length; PW++) OW._sounds[PW].JZ && !OW._sounds[PW]._ended && (EW++, mW = OW._sounds[PW]._id);
              1 === EW ? WW = null : mW = null
            }
          }
          var LW = mW ? OW._soundById(mW) : OW._inactiveSound();
          if (!LW) return null;
          if (mW && !WW && (WW = LW._sprite || "__default"), "loaded" !== OW._state) {
            LW._sprite = WW, LW._ended = !1;
            var cW = LW._id;
            return OW._queue.push({
              event: "play",
              action: function() {
                OW.play(cW)
              }
            }), cW
          }
          if (mW && !LW.JZ) return iW || OW._loadQueue("play"), LW._id;
          OW._webAudio && NW._autoResume();
          var wW = Math.max(0, LW._seek > 0 ? LW._seek : OW._sprite[WW][0] / 1e3),
            tW = Math.max(0, (OW._sprite[WW][0] + OW._sprite[WW][1]) / 1e3 - wW),
            ZW = 1e3 * tW / Math.abs(LW._rate),
            xW = OW._sprite[WW][0] / 1e3,
            lW = (OW._sprite[WW][0] + OW._sprite[WW][1]) / 1e3;
          LW._sprite = WW, LW._ended = !1;
          var AW = function() {
            LW.JZ = !1, LW._seek = wW, LW._start = xW, LW._stop = lW, LW._loop = !(!LW._loop && !OW._sprite[WW][2])
          };
          if (!(wW >= lW)) {
            var bW = LW._node;
            if (OW._webAudio) {
              var jW = function() {
                OW._playLock = !1, AW(), OW._refreshBuffer(LW);
                var WW = LW._muted || OW._muted ? 0 : LW._volume;
                bW.gain.setValueAtTime(WW, NW.ctx.currentTime), LW._playStart = NW.ctx.currentTime, "undefined" === typeof bW.bufferSource.start ? LW._loop ? bW.bufferSource.noteGrainOn(0, wW, 86400) : bW.bufferSource.noteGrainOn(0, wW, tW) : LW._loop ? bW.bufferSource.start(0, wW, 86400) : bW.bufferSource.start(0, wW, tW), ZW !== 1 / 0 && (OW._endTimers[LW._id] = setTimeout(OW._ended.bind(OW, LW), ZW)), iW || setTimeout((function() {
                  OW._emit("play", LW._id), OW._loadQueue()
                }), 0)
              };
              "running" === NW.state && "interrupted" !== NW.ctx.state ? jW() : (OW._playLock = !0, OW.once("resume", jW), OW._clearTimer(LW._id))
            } else {
              var UW = function() {
                bW.currentTime = wW, bW.muted = LW._muted || OW._muted || NW._muted || bW.muted, bW.volume = LW._volume * NW.volume(), bW.playbackRate = LW._rate;
                try {
                  var mW = bW.play();
                  if (mW && "undefined" !== typeof Promise && (mW instanceof Promise || "function" === typeof mW.then) ? (OW._playLock = !0, AW(), mW.then((function() {
                      OW._playLock = !1, bW._unlocked = !0, iW ? OW._loadQueue() : OW._emit("play", LW._id)
                    })).catch((function() {
                      OW._playLock = !1, OW._emit("playerror", LW._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), LW._ended = !0, LW.JZ = !0
                    }))) : iW || (OW._playLock = !1, AW(), OW._emit("play", LW._id)), bW.playbackRate = LW._rate, bW.paused) return void OW._emit("playerror", LW._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== WW || LW._loop ? OW._endTimers[LW._id] = setTimeout(OW._ended.bind(OW, LW), ZW) : (OW._endTimers[LW._id] = function() {
                    OW._ended(LW), bW.removeEventListener("ended", OW._endTimers[LW._id], !1)
                  }, bW.addEventListener("ended", OW._endTimers[LW._id], !1))
                } catch (EW) {
                  OW._emit("playerror", LW._id, EW)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === bW.src && (bW.src = OW._src, bW.load());
              var kW = window && window.ejecta || !bW.readyState && NW._navigator.isCocoonJS;
              if (bW.readyState >= 3 || kW) UW();
              else {
                OW._playLock = !0, OW._state = "loading";
                var sW = function() {
                  OW._state = "loaded", UW(), bW.removeEventListener(NW._canPlayEvent, sW, !1)
                };
                bW.addEventListener(NW._canPlayEvent, sW, !1), OW._clearTimer(LW._id)
              }
            }
            return LW._id
          }
          OW._ended(LW)
        },
        pause: function(WW) {
          var iW = this;
          if ("loaded" !== iW._state || iW._playLock) return iW._queue.push({
            event: "pause",
            action: function() {
              iW.pause(WW)
            }
          }), iW;
          for (var OW = iW._getSoundIds(WW), mW = 0; mW < OW.length; mW++) {
            iW._clearTimer(OW[mW]);
            var EW = iW._soundById(OW[mW]);
            if (EW && !EW.JZ && (EW._seek = iW.seek(OW[mW]), EW._rateSeek = 0, EW.JZ = !0, iW._stopFade(OW[mW]), EW._node))
              if (iW._webAudio) {
                if (!EW._node.bufferSource) continue;
                "undefined" === typeof EW._node.bufferSource.stop ? EW._node.bufferSource.noteOff(0) : EW._node.bufferSource.stop(0), iW._cleanBuffer(EW._node)
              } else isNaN(EW._node.duration) && EW._node.duration !== 1 / 0 || EW._node.pause();
            arguments[1] || iW._emit("pause", EW ? EW._id : null)
          }
          return iW
        },
        stop: function(WW, iW) {
          var OW = this;
          if ("loaded" !== OW._state || OW._playLock) return OW._queue.push({
            event: "stop",
            action: function() {
              OW.stop(WW)
            }
          }), OW;
          for (var mW = OW._getSoundIds(WW), EW = 0; EW < mW.length; EW++) {
            OW._clearTimer(mW[EW]);
            var NW = OW._soundById(mW[EW]);
            NW && (NW._seek = NW._start || 0, NW._rateSeek = 0, NW.JZ = !0, NW._ended = !0, OW._stopFade(mW[EW]), NW._node && (OW._webAudio ? NW._node.bufferSource && ("undefined" === typeof NW._node.bufferSource.stop ? NW._node.bufferSource.noteOff(0) : NW._node.bufferSource.stop(0), OW._cleanBuffer(NW._node)) : isNaN(NW._node.duration) && NW._node.duration !== 1 / 0 || (NW._node.currentTime = NW._start || 0, NW._node.pause(), NW._node.duration === 1 / 0 && OW._clearSound(NW._node))), iW || OW._emit("stop", NW._id))
          }
          return OW
        },
        mute: function(WW, iW) {
          var OW = this;
          if ("loaded" !== OW._state || OW._playLock) return OW._queue.push({
            event: "mute",
            action: function() {
              OW.mute(WW, iW)
            }
          }), OW;
          if ("undefined" === typeof iW) {
            if ("boolean" !== typeof WW) return OW._muted;
            OW._muted = WW
          }
          for (var mW = OW._getSoundIds(iW), EW = 0; EW < mW.length; EW++) {
            var PW = OW._soundById(mW[EW]);
            PW && (PW._muted = WW, PW._interval && OW._stopFade(PW._id), OW._webAudio && PW._node ? PW._node.gain.setValueAtTime(WW ? 0 : PW._volume, NW.ctx.currentTime) : PW._node && (PW._node.muted = !!NW._muted || WW), OW._emit("mute", PW._id))
          }
          return OW
        },
        volume: function() {
          var WW, iW, OW, mW = this,
            EW = arguments;
          if (0 === EW.length) return mW._volume;
          if (1 === EW.length || 2 === EW.length && "undefined" === typeof EW[1] ? mW._getSoundIds().indexOf(EW[0]) >= 0 ? iW = parseInt(EW[0], 10) : WW = parseFloat(EW[0]) : EW.length >= 2 && (WW = parseFloat(EW[0]), iW = parseInt(EW[1], 10)), !("undefined" !== typeof WW && WW >= 0 && WW <= 1)) return (OW = iW ? mW._soundById(iW) : mW._sounds[0]) ? OW._volume : 0;
          if ("loaded" !== mW._state || mW._playLock) return mW._queue.push({
            event: "volume",
            action: function() {
              mW.volume.apply(mW, EW)
            }
          }), mW;
          "undefined" === typeof iW && (mW._volume = WW), iW = mW._getSoundIds(iW);
          for (var PW = 0; PW < iW.length; PW++)(OW = mW._soundById(iW[PW])) && (OW._volume = WW, EW[2] || mW._stopFade(iW[PW]), mW._webAudio && OW._node && !OW._muted ? OW._node.gain.setValueAtTime(WW, NW.ctx.currentTime) : OW._node && !OW._muted && (OW._node.volume = WW * NW.volume()), mW._emit("volume", OW._id));
          return mW
        },
        fade: function(WW, iW, OW, mW) {
          var EW = this;
          if ("loaded" !== EW._state || EW._playLock) return EW._queue.push({
            event: "fade",
            action: function() {
              EW.fade(WW, iW, OW, mW)
            }
          }), EW;
          WW = Math.min(Math.max(0, parseFloat(WW)), 1), iW = Math.min(Math.max(0, parseFloat(iW)), 1), OW = parseFloat(OW), EW.volume(WW, mW);
          for (var PW = EW._getSoundIds(mW), LW = 0; LW < PW.length; LW++) {
            var cW = EW._soundById(PW[LW]);
            if (cW) {
              if (mW || EW._stopFade(PW[LW]), EW._webAudio && !cW._muted) {
                var wW = NW.ctx.currentTime,
                  tW = wW + OW / 1e3;
                cW._volume = WW, cW._node.gain.setValueAtTime(WW, wW), cW._node.gain.linearRampToValueAtTime(iW, tW)
              }
              EW._startFadeInterval(cW, WW, iW, OW, PW[LW], "undefined" === typeof mW)
            }
          }
          return EW
        },
        _startFadeInterval: function(WW, iW, OW, mW, EW, NW) {
          var PW = this,
            LW = iW,
            cW = OW - iW,
            wW = Math.abs(cW / .01),
            tW = Math.max(4, wW > 0 ? mW / wW : mW),
            ZW = Date.now();
          WW._fadeTo = OW, WW._interval = setInterval((function() {
            var EW = (Date.now() - ZW) / mW;
            ZW = Date.now(), LW += cW * EW, LW = Math.round(100 * LW) / 100, LW = cW < 0 ? Math.max(OW, LW) : Math.min(OW, LW), PW._webAudio ? WW._volume = LW : PW.volume(LW, WW._id, !0), NW && (PW._volume = LW), (OW < iW && LW <= OW || OW > iW && LW >= OW) && (clearInterval(WW._interval), WW._interval = null, WW._fadeTo = null, PW.volume(OW, WW._id), PW._emit("fade", WW._id))
          }), tW)
        },
        _stopFade: function(WW) {
          var iW = this,
            OW = iW._soundById(WW);
          return OW && OW._interval && (iW._webAudio && OW._node.gain.cancelScheduledValues(NW.ctx.currentTime), clearInterval(OW._interval), OW._interval = null, iW.volume(OW._fadeTo, WW), OW._fadeTo = null, iW._emit("fade", WW)), iW
        },
        loop: function() {
          var WW, iW, OW, mW = this,
            EW = arguments;
          if (0 === EW.length) return mW._loop;
          if (1 === EW.length) {
            if ("boolean" !== typeof EW[0]) return !!(OW = mW._soundById(parseInt(EW[0], 10))) && OW._loop;
            WW = EW[0], mW._loop = WW
          } else 2 === EW.length && (WW = EW[0], iW = parseInt(EW[1], 10));
          for (var NW = mW._getSoundIds(iW), PW = 0; PW < NW.length; PW++)(OW = mW._soundById(NW[PW])) && (OW._loop = WW, mW._webAudio && OW._node && OW._node.bufferSource && (OW._node.bufferSource.loop = WW, WW && (OW._node.bufferSource.loopStart = OW._start || 0, OW._node.bufferSource.loopEnd = OW._stop, mW.playing(NW[PW]) && (mW.pause(NW[PW], !0), mW.play(NW[PW], !0)))));
          return mW
        },
        rate: function() {
          var WW, iW, OW, mW = this,
            EW = arguments;
          if (0 === EW.length) iW = mW._sounds[0]._id;
          else if (1 === EW.length) {
            mW._getSoundIds().indexOf(EW[0]) >= 0 ? iW = parseInt(EW[0], 10) : WW = parseFloat(EW[0])
          } else 2 === EW.length && (WW = parseFloat(EW[0]), iW = parseInt(EW[1], 10));
          if ("number" !== typeof WW) return (OW = mW._soundById(iW)) ? OW._rate : mW._rate;
          if ("loaded" !== mW._state || mW._playLock) return mW._queue.push({
            event: "rate",
            action: function() {
              mW.rate.apply(mW, EW)
            }
          }), mW;
          "undefined" === typeof iW && (mW._rate = WW), iW = mW._getSoundIds(iW);
          for (var PW = 0; PW < iW.length; PW++)
            if (OW = mW._soundById(iW[PW])) {
              mW.playing(iW[PW]) && (OW._rateSeek = mW.seek(iW[PW]), OW._playStart = mW._webAudio ? NW.ctx.currentTime : OW._playStart), OW._rate = WW, mW._webAudio && OW._node && OW._node.bufferSource ? OW._node.bufferSource.playbackRate.setValueAtTime(WW, NW.ctx.currentTime) : OW._node && (OW._node.playbackRate = WW);
              var LW = mW.seek(iW[PW]),
                cW = 1e3 * ((mW._sprite[OW._sprite][0] + mW._sprite[OW._sprite][1]) / 1e3 - LW) / Math.abs(OW._rate);
              !mW._endTimers[iW[PW]] && OW.JZ || (mW._clearTimer(iW[PW]), mW._endTimers[iW[PW]] = setTimeout(mW._ended.bind(mW, OW), cW)), mW._emit("rate", OW._id)
            } return mW
        },
        seek: function() {
          var WW, iW, OW = this,
            mW = arguments;
          if (0 === mW.length) OW._sounds.length && (iW = OW._sounds[0]._id);
          else if (1 === mW.length) {
            OW._getSoundIds().indexOf(mW[0]) >= 0 ? iW = parseInt(mW[0], 10) : OW._sounds.length && (iW = OW._sounds[0]._id, WW = parseFloat(mW[0]))
          } else 2 === mW.length && (WW = parseFloat(mW[0]), iW = parseInt(mW[1], 10));
          if ("undefined" === typeof iW) return 0;
          if ("number" === typeof WW && ("loaded" !== OW._state || OW._playLock)) return OW._queue.push({
            event: "seek",
            action: function() {
              OW.seek.apply(OW, mW)
            }
          }), OW;
          var EW = OW._soundById(iW);
          if (EW) {
            if (!("number" === typeof WW && WW >= 0)) {
              if (OW._webAudio) {
                var PW = OW.playing(iW) ? NW.ctx.currentTime - EW._playStart : 0,
                  LW = EW._rateSeek ? EW._rateSeek - EW._seek : 0;
                return EW._seek + (LW + PW * Math.abs(EW._rate))
              }
              return EW._node.currentTime
            }
            var cW = OW.playing(iW);
            cW && OW.pause(iW, !0), EW._seek = WW, EW._ended = !1, OW._clearTimer(iW), OW._webAudio || !EW._node || isNaN(EW._node.duration) || (EW._node.currentTime = WW);
            var wW = function() {
              cW && OW.play(iW, !0), OW._emit("seek", iW)
            };
            if (cW && !OW._webAudio) {
              var tW = function() {
                OW._playLock ? setTimeout(tW, 0) : wW()
              };
              setTimeout(tW, 0)
            } else wW()
          }
          return OW
        },
        playing: function(WW) {
          var iW = this;
          if ("number" === typeof WW) {
            var OW = iW._soundById(WW);
            return !!OW && !OW.JZ
          }
          for (var mW = 0; mW < iW._sounds.length; mW++)
            if (!iW._sounds[mW].JZ) return !0;
          return !1
        },
        duration: function(WW) {
          var iW = this,
            OW = iW._duration,
            mW = iW._soundById(WW);
          return mW && (OW = iW._sprite[mW._sprite][1] / 1e3), OW
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var WW = this, iW = WW._sounds, OW = 0; OW < iW.length; OW++) iW[OW].JZ || WW.stop(iW[OW]._id), WW._webAudio || (WW._clearSound(iW[OW]._node), iW[OW]._node.removeEventListener("error", iW[OW]._errorFn, !1), iW[OW]._node.removeEventListener(NW._canPlayEvent, iW[OW]._loadFn, !1), iW[OW]._node.removeEventListener("ended", iW[OW]._endFn, !1), NW._releaseHtml5Audio(iW[OW]._node)), delete iW[OW]._node, WW._clearTimer(iW[OW]._id);
          var mW = NW._howls.indexOf(WW);
          mW >= 0 && NW._howls.splice(mW, 1);
          var EW = !0;
          for (OW = 0; OW < NW._howls.length; OW++)
            if (NW._howls[OW]._src === WW._src || WW._src.indexOf(NW._howls[OW]._src) >= 0) {
              EW = !1;
              break
            } return cW && EW && delete cW[WW._src], NW.noAudio = !1, WW._state = "unloaded", WW._sounds = [], WW = null, null
        },
        on: function(WW, iW, OW, mW) {
          var EW = this["_on" + WW];
          return "function" === typeof iW && EW.push(mW ? {
            id: OW,
            cZ: iW,
            once: mW
          } : {
            id: OW,
            cZ: iW
          }), this
        },
        off: function(WW, iW, OW) {
          var mW = this,
            EW = mW["_on" + WW],
            NW = 0;
          if ("number" === typeof iW && (OW = iW, iW = null), iW || OW)
            for (NW = 0; NW < EW.length; NW++) {
              var PW = OW === EW[NW].id;
              if (iW === EW[NW].cZ && PW || !iW && PW) {
                EW.splice(NW, 1);
                break
              }
            } else if (WW) mW["_on" + WW] = [];
            else {
              var LW = Object.keys(mW);
              for (NW = 0; NW < LW.length; NW++) 0 === LW[NW].indexOf("_on") && Array.isArray(mW[LW[NW]]) && (mW[LW[NW]] = [])
            } return mW
        },
        once: function(WW, iW, OW) {
          return this.on(WW, iW, OW, 1), this
        },
        _emit: function(WW, iW, OW) {
          for (var mW = this, EW = mW["_on" + WW], NW = EW.length - 1; NW >= 0; NW--) EW[NW].id && EW[NW].id !== iW && "load" !== WW || (setTimeout(function(WW) {
            WW.call(this, iW, OW)
          }.bind(mW, EW[NW].cZ), 0), EW[NW].once && mW.off(WW, EW[NW].cZ, EW[NW].id));
          return mW._loadQueue(WW), mW
        },
        _loadQueue: function(WW) {
          var iW = this;
          if (iW._queue.length > 0) {
            var OW = iW._queue[0];
            OW.event === WW && (iW._queue.shift(), iW._loadQueue()), WW || OW.action()
          }
          return iW
        },
        _ended: function(WW) {
          var iW = this,
            OW = WW._sprite;
          if (!iW._webAudio && WW._node && !WW._node.paused && !WW._node.ended && WW._node.currentTime < WW._stop) return setTimeout(iW._ended.bind(iW, WW), 100), iW;
          var mW = !(!WW._loop && !iW._sprite[OW][2]);
          if (iW._emit("end", WW._id), !iW._webAudio && mW && iW.stop(WW._id, !0).play(WW._id), iW._webAudio && mW) {
            iW._emit("play", WW._id), WW._seek = WW._start || 0, WW._rateSeek = 0, WW._playStart = NW.ctx.currentTime;
            var EW = 1e3 * (WW._stop - WW._start) / Math.abs(WW._rate);
            iW._endTimers[WW._id] = setTimeout(iW._ended.bind(iW, WW), EW)
          }
          return iW._webAudio && !mW && (WW.JZ = !0, WW._ended = !0, WW._seek = WW._start || 0, WW._rateSeek = 0, iW._clearTimer(WW._id), iW._cleanBuffer(WW._node), NW._autoSuspend()), iW._webAudio || mW || iW.stop(WW._id, !0), iW
        },
        _clearTimer: function(WW) {
          var iW = this;
          if (iW._endTimers[WW]) {
            if ("function" !== typeof iW._endTimers[WW]) clearTimeout(iW._endTimers[WW]);
            else {
              var OW = iW._soundById(WW);
              OW && OW._node && OW._node.removeEventListener("ended", iW._endTimers[WW], !1)
            }
            delete iW._endTimers[WW]
          }
          return iW
        },
        _soundById: function(WW) {
          for (var iW = this, OW = 0; OW < iW._sounds.length; OW++)
            if (WW === iW._sounds[OW]._id) return iW._sounds[OW];
          return null
        },
        _inactiveSound: function() {
          var WW = this;
          WW._drain();
          for (var iW = 0; iW < WW._sounds.length; iW++)
            if (WW._sounds[iW]._ended) return WW._sounds[iW].reset();
          return new LW(WW)
        },
        _drain: function() {
          var WW = this,
            iW = WW._pool,
            OW = 0,
            mW = 0;
          if (!(WW._sounds.length < iW)) {
            for (mW = 0; mW < WW._sounds.length; mW++) WW._sounds[mW]._ended && OW++;
            for (mW = WW._sounds.length - 1; mW >= 0; mW--) {
              if (OW <= iW) return;
              WW._sounds[mW]._ended && (WW._webAudio && WW._sounds[mW]._node && WW._sounds[mW]._node.disconnect(0), WW._sounds.splice(mW, 1), OW--)
            }
          }
        },
        _getSoundIds: function(WW) {
          if ("undefined" === typeof WW) {
            for (var iW = [], OW = 0; OW < this._sounds.length; OW++) iW.push(this._sounds[OW]._id);
            return iW
          }
          return [WW]
        },
        _refreshBuffer: function(WW) {
          return WW._node.bufferSource = NW.ctx.createBufferSource(), WW._node.bufferSource.buffer = cW[this._src], WW._panner ? WW._node.bufferSource.connect(WW._panner) : WW._node.bufferSource.connect(WW._node), WW._node.bufferSource.loop = WW._loop, WW._loop && (WW._node.bufferSource.loopStart = WW._start || 0, WW._node.bufferSource.loopEnd = WW._stop || 0), WW._node.bufferSource.playbackRate.setValueAtTime(WW._rate, NW.ctx.currentTime), this
        },
        _cleanBuffer: function(WW) {
          var iW = NW._navigator && NW._navigator.vendor.indexOf("Apple") >= 0;
          if (NW._scratchBuffer && WW.bufferSource && (WW.bufferSource.onended = null, WW.bufferSource.disconnect(0), iW)) try {
            WW.bufferSource.buffer = NW._scratchBuffer
          } catch (OW) {}
          return WW.bufferSource = null, this
        },
        _clearSound: function(WW) {
          /MSIE |Trident\//.test(NW._navigator && NW._navigator.userAgent) || (WW.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var LW = function(WW) {
        this._parent = WW, this.init()
      };
      LW.prototype = {
        init: function() {
          var WW = this,
            iW = WW._parent;
          return WW._muted = iW._muted, WW._loop = iW._loop, WW._volume = iW._volume, WW._rate = iW._rate, WW._seek = 0, WW.JZ = !0, WW._ended = !0, WW._sprite = "__default", WW._id = ++NW._counter, iW._sounds.push(WW), WW.create(), WW
        },
        create: function() {
          var WW = this,
            iW = WW._parent,
            OW = NW._muted || WW._muted || WW._parent._muted ? 0 : WW._volume;
          return iW._webAudio ? (WW._node = "undefined" === typeof NW.ctx.createGain ? NW.ctx.createGainNode() : NW.ctx.createGain(), WW._node.gain.setValueAtTime(OW, NW.ctx.currentTime), WW._node.paused = !0, WW._node.connect(NW.masterGain)) : NW.noAudio || (WW._node = NW._obtainHtml5Audio(), WW._errorFn = WW._errorListener.bind(WW), WW._node.addEventListener("error", WW._errorFn, !1), WW._loadFn = WW._loadListener.bind(WW), WW._node.addEventListener(NW._canPlayEvent, WW._loadFn, !1), WW._endFn = WW._endListener.bind(WW), WW._node.addEventListener("ended", WW._endFn, !1), WW._node.src = iW._src, WW._node.preload = !0 === iW._preload ? "auto" : iW._preload, WW._node.volume = OW * NW.volume(), WW._node.load()), WW
        },
        reset: function() {
          var WW = this,
            iW = WW._parent;
          return WW._muted = iW._muted, WW._loop = iW._loop, WW._volume = iW._volume, WW._rate = iW._rate, WW._seek = 0, WW._rateSeek = 0, WW.JZ = !0, WW._ended = !0, WW._sprite = "__default", WW._id = ++NW._counter, WW
        },
        _errorListener: function() {
          var WW = this;
          WW._parent._emit("loaderror", WW._id, WW._node.error ? WW._node.error.code : 0), WW._node.removeEventListener("error", WW._errorFn, !1)
        },
        _loadListener: function() {
          var WW = this,
            iW = WW._parent;
          iW._duration = Math.ceil(10 * WW._node.duration) / 10, 0 === Object.keys(iW._sprite).length && (iW._sprite = {
            __default: [0, 1e3 * iW._duration]
          }), "loaded" !== iW._state && (iW._state = "loaded", iW._emit("load"), iW._loadQueue()), WW._node.removeEventListener(NW._canPlayEvent, WW._loadFn, !1)
        },
        _endListener: function() {
          var WW = this,
            iW = WW._parent;
          iW._duration === 1 / 0 && (iW._duration = Math.ceil(10 * WW._node.duration) / 10, iW._sprite.__default[1] === 1 / 0 && (iW._sprite.__default[1] = 1e3 * iW._duration), iW._ended(WW)), WW._node.removeEventListener("ended", WW._endFn, !1)
        }
      };
      var cW = {},
        wW = function(WW) {
          var iW = WW._src;
          if (cW[iW]) return WW._duration = cW[iW].duration, void xW(WW);
          if (/^data:[^;]+;base64,/.test(iW)) {
            for (var OW = atob(iW.split(",")[1]), mW = new Uint8Array(OW.length), EW = 0; EW < OW.length; ++EW) mW[EW] = OW.charCodeAt(EW);
            ZW(mW.buffer, WW)
          } else {
            var NW = new XMLHttpRequest;
            NW.open(WW._xhr.method, iW, !0), NW.withCredentials = WW._xhr.withCredentials, NW.responseType = "arraybuffer", WW._xhr.headers && Object.keys(WW._xhr.headers).forEach((function(iW) {
              NW.setRequestHeader(iW, WW._xhr.headers[iW])
            })), NW.onload = function() {
              var iW = (NW.status + "")[0];
              "0" === iW || "2" === iW || "3" === iW ? ZW(NW.response, WW) : WW._emit("loaderror", null, "Failed loading audio file with status: " + NW.status + ".")
            }, NW.onerror = function() {
              WW._webAudio && (WW._html5 = !0, WW._webAudio = !1, WW._sounds = [], delete cW[iW], WW.load())
            }, tW(NW)
          }
        },
        tW = function(WW) {
          try {
            WW.send()
          } catch (iW) {
            WW.onerror()
          }
        },
        ZW = function(WW, iW) {
          var OW = function() {
              iW._emit("loaderror", null, "Decoding audio data failed.")
            },
            mW = function(WW) {
              WW && iW._sounds.length > 0 ? (cW[iW._src] = WW, xW(iW, WW)) : OW()
            };
          "undefined" !== typeof Promise && 1 === NW.ctx.decodeAudioData.length ? NW.ctx.decodeAudioData(WW).then(mW).catch(OW) : NW.ctx.decodeAudioData(WW, mW, OW)
        },
        xW = function(WW, iW) {
          iW && !WW._duration && (WW._duration = iW.duration), 0 === Object.keys(WW._sprite).length && (WW._sprite = {
            __default: [0, 1e3 * WW._duration]
          }), "loaded" !== WW._state && (WW._state = "loaded", WW._emit("load"), WW._loadQueue())
        },
        lW = function() {
          if (NW.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? NW.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? NW.ctx = new webkitAudioContext : NW.usingWebAudio = !1
            } catch (EW) {
              NW.usingWebAudio = !1
            }
            NW.ctx || (NW.usingWebAudio = !1);
            var WW = /iP(hone|od|ad)/.test(NW._navigator && NW._navigator.platform),
              iW = NW._navigator && NW._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              OW = iW ? parseInt(iW[1], 10) : null;
            if (WW && OW && OW < 9) {
              var mW = /safari/.test(NW._navigator && NW._navigator.userAgent.toLowerCase());
              NW._navigator && !mW && (NW.usingWebAudio = !1)
            }
            NW.usingWebAudio && (NW.masterGain = "undefined" === typeof NW.ctx.createGain ? NW.ctx.createGainNode() : NW.ctx.createGain(), NW.masterGain.gain.setValueAtTime(NW._muted ? 0 : NW._volume, NW.ctx.currentTime), NW.masterGain.connect(NW.ctx.destination)), NW._setup()
          }
        };
      void 0 === (mW = function() {
        return {
          Howler: NW,
          Howl: PW
        }
      }.apply(iW, [])) || (WW.exports = mW), iW.Howler = NW, iW.Howl = PW, "undefined" !== typeof OW.g ? (OW.g.HowlerGlobal = EW, OW.g.Howler = NW, OW.g.Howl = PW, OW.g.Sound = LW) : "undefined" !== typeof window && (window.HowlerGlobal = EW, window.Howler = NW, window.Howl = PW, window.Sound = LW)
    }(),
    function() {
      var WW;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(WW) {
        var iW = this;
        if (!iW.ctx || !iW.ctx.listener) return iW;
        for (var OW = iW._howls.length - 1; OW >= 0; OW--) iW._howls[OW].stereo(WW);
        return iW
      }, HowlerGlobal.prototype.pos = function(WW, iW, OW) {
        var mW = this;
        return mW.ctx && mW.ctx.listener ? (iW = "number" !== typeof iW ? mW._pos[1] : iW, OW = "number" !== typeof OW ? mW._pos[2] : OW, "number" !== typeof WW ? mW._pos : (mW._pos = [WW, iW, OW], "undefined" !== typeof mW.ctx.listener.positionX ? (mW.ctx.listener.positionX.setTargetAtTime(mW._pos[0], Howler.ctx.currentTime, .1), mW.ctx.listener.positionY.setTargetAtTime(mW._pos[1], Howler.ctx.currentTime, .1), mW.ctx.listener.positionZ.setTargetAtTime(mW._pos[2], Howler.ctx.currentTime, .1)) : mW.ctx.listener.setPosition(mW._pos[0], mW._pos[1], mW._pos[2]), mW)) : mW
      }, HowlerGlobal.prototype.orientation = function(WW, iW, OW, mW, EW, NW) {
        var PW = this;
        if (!PW.ctx || !PW.ctx.listener) return PW;
        var LW = PW._orientation;
        return iW = "number" !== typeof iW ? LW[1] : iW, OW = "number" !== typeof OW ? LW[2] : OW, mW = "number" !== typeof mW ? LW[3] : mW, EW = "number" !== typeof EW ? LW[4] : EW, NW = "number" !== typeof NW ? LW[5] : NW, "number" !== typeof WW ? LW : (PW._orientation = [WW, iW, OW, mW, EW, NW], "undefined" !== typeof PW.ctx.listener.forwardX ? (PW.ctx.listener.forwardX.setTargetAtTime(WW, Howler.ctx.currentTime, .1), PW.ctx.listener.forwardY.setTargetAtTime(iW, Howler.ctx.currentTime, .1), PW.ctx.listener.forwardZ.setTargetAtTime(OW, Howler.ctx.currentTime, .1), PW.ctx.listener.upX.setTargetAtTime(mW, Howler.ctx.currentTime, .1), PW.ctx.listener.upY.setTargetAtTime(EW, Howler.ctx.currentTime, .1), PW.ctx.listener.upZ.setTargetAtTime(NW, Howler.ctx.currentTime, .1)) : PW.ctx.listener.setOrientation(WW, iW, OW, mW, EW, NW), PW)
      }, Howl.prototype.init = (WW = Howl.prototype.init, function(iW) {
        var OW = this;
        return OW._orientation = iW.orientation || [1, 0, 0], OW._stereo = iW.stereo || null, OW._pos = iW.pos || null, OW._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof iW.coneInnerAngle ? iW.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof iW.coneOuterAngle ? iW.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof iW.coneOuterGain ? iW.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof iW.distanceModel ? iW.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof iW.maxDistance ? iW.maxDistance : 1e4,
          panningModel: "undefined" !== typeof iW.panningModel ? iW.panningModel : "HRTF",
          refDistance: "undefined" !== typeof iW.refDistance ? iW.refDistance : 1,
          rolloffFactor: "undefined" !== typeof iW.rolloffFactor ? iW.rolloffFactor : 1
        }, OW._onstereo = iW.onstereo ? [{
          cZ: iW.onstereo
        }] : [], OW._onpos = iW.onpos ? [{
          cZ: iW.onpos
        }] : [], OW._onorientation = iW.onorientation ? [{
          cZ: iW.onorientation
        }] : [], WW.call(this, iW)
      }), Howl.prototype.stereo = function(WW, OW) {
        var mW = this;
        if (!mW._webAudio) return mW;
        if ("loaded" !== mW._state) return mW._queue.push({
          event: "stereo",
          action: function() {
            mW.stereo(WW, OW)
          }
        }), mW;
        var EW = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof OW) {
          if ("number" !== typeof WW) return mW._stereo;
          mW._stereo = WW, mW._pos = [WW, 0, 0]
        }
        for (var NW = mW._getSoundIds(OW), PW = 0; PW < NW.length; PW++) {
          var LW = mW._soundById(NW[PW]);
          if (LW) {
            if ("number" !== typeof WW) return LW._stereo;
            LW._stereo = WW, LW._pos = [WW, 0, 0], LW._node && (LW._pannerAttr.panningModel = "equalpower", LW._panner && LW._panner.pan || iW(LW, EW), "spatial" === EW ? "undefined" !== typeof LW._panner.positionX ? (LW._panner.positionX.setValueAtTime(WW, Howler.ctx.currentTime), LW._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), LW._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : LW._panner.setPosition(WW, 0, 0) : LW._panner.pan.setValueAtTime(WW, Howler.ctx.currentTime)), mW._emit("stereo", LW._id)
          }
        }
        return mW
      }, Howl.prototype.pos = function(WW, OW, mW, EW) {
        var NW = this;
        if (!NW._webAudio) return NW;
        if ("loaded" !== NW._state) return NW._queue.push({
          event: "pos",
          action: function() {
            NW.pos(WW, OW, mW, EW)
          }
        }), NW;
        if (OW = "number" !== typeof OW ? 0 : OW, mW = "number" !== typeof mW ? -.5 : mW, "undefined" === typeof EW) {
          if ("number" !== typeof WW) return NW._pos;
          NW._pos = [WW, OW, mW]
        }
        for (var PW = NW._getSoundIds(EW), LW = 0; LW < PW.length; LW++) {
          var cW = NW._soundById(PW[LW]);
          if (cW) {
            if ("number" !== typeof WW) return cW._pos;
            cW._pos = [WW, OW, mW], cW._node && (cW._panner && !cW._panner.pan || iW(cW, "spatial"), "undefined" !== typeof cW._panner.positionX ? (cW._panner.positionX.setValueAtTime(WW, Howler.ctx.currentTime), cW._panner.positionY.setValueAtTime(OW, Howler.ctx.currentTime), cW._panner.positionZ.setValueAtTime(mW, Howler.ctx.currentTime)) : cW._panner.setPosition(WW, OW, mW)), NW._emit("pos", cW._id)
          }
        }
        return NW
      }, Howl.prototype.orientation = function(WW, OW, mW, EW) {
        var NW = this;
        if (!NW._webAudio) return NW;
        if ("loaded" !== NW._state) return NW._queue.push({
          event: "orientation",
          action: function() {
            NW.orientation(WW, OW, mW, EW)
          }
        }), NW;
        if (OW = "number" !== typeof OW ? NW._orientation[1] : OW, mW = "number" !== typeof mW ? NW._orientation[2] : mW, "undefined" === typeof EW) {
          if ("number" !== typeof WW) return NW._orientation;
          NW._orientation = [WW, OW, mW]
        }
        for (var PW = NW._getSoundIds(EW), LW = 0; LW < PW.length; LW++) {
          var cW = NW._soundById(PW[LW]);
          if (cW) {
            if ("number" !== typeof WW) return cW._orientation;
            cW._orientation = [WW, OW, mW], cW._node && (cW._panner || (cW._pos || (cW._pos = NW._pos || [0, 0, -.5]), iW(cW, "spatial")), "undefined" !== typeof cW._panner.orientationX ? (cW._panner.orientationX.setValueAtTime(WW, Howler.ctx.currentTime), cW._panner.orientationY.setValueAtTime(OW, Howler.ctx.currentTime), cW._panner.orientationZ.setValueAtTime(mW, Howler.ctx.currentTime)) : cW._panner.setOrientation(WW, OW, mW)), NW._emit("orientation", cW._id)
          }
        }
        return NW
      }, Howl.prototype.pannerAttr = function() {
        var WW, OW, mW, EW = this,
          NW = arguments;
        if (!EW._webAudio) return EW;
        if (0 === NW.length) return EW._pannerAttr;
        if (1 === NW.length) {
          if ("object" !== typeof NW[0]) return (mW = EW._soundById(parseInt(NW[0], 10))) ? mW._pannerAttr : EW._pannerAttr;
          WW = NW[0], "undefined" === typeof OW && (WW.pannerAttr || (WW.pannerAttr = {
            coneInnerAngle: WW.coneInnerAngle,
            coneOuterAngle: WW.coneOuterAngle,
            coneOuterGain: WW.coneOuterGain,
            distanceModel: WW.distanceModel,
            maxDistance: WW.maxDistance,
            refDistance: WW.refDistance,
            rolloffFactor: WW.rolloffFactor,
            panningModel: WW.panningModel
          }), EW._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof WW.pannerAttr.coneInnerAngle ? WW.pannerAttr.coneInnerAngle : EW._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof WW.pannerAttr.coneOuterAngle ? WW.pannerAttr.coneOuterAngle : EW._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof WW.pannerAttr.coneOuterGain ? WW.pannerAttr.coneOuterGain : EW._coneOuterGain,
            distanceModel: "undefined" !== typeof WW.pannerAttr.distanceModel ? WW.pannerAttr.distanceModel : EW._distanceModel,
            maxDistance: "undefined" !== typeof WW.pannerAttr.maxDistance ? WW.pannerAttr.maxDistance : EW._maxDistance,
            refDistance: "undefined" !== typeof WW.pannerAttr.refDistance ? WW.pannerAttr.refDistance : EW._refDistance,
            rolloffFactor: "undefined" !== typeof WW.pannerAttr.rolloffFactor ? WW.pannerAttr.rolloffFactor : EW._rolloffFactor,
            panningModel: "undefined" !== typeof WW.pannerAttr.panningModel ? WW.pannerAttr.panningModel : EW._panningModel
          })
        } else 2 === NW.length && (WW = NW[0], OW = parseInt(NW[1], 10));
        for (var PW = EW._getSoundIds(OW), LW = 0; LW < PW.length; LW++)
          if (mW = EW._soundById(PW[LW])) {
            var cW = mW._pannerAttr;
            cW = {
              coneInnerAngle: "undefined" !== typeof WW.coneInnerAngle ? WW.coneInnerAngle : cW.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof WW.coneOuterAngle ? WW.coneOuterAngle : cW.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof WW.coneOuterGain ? WW.coneOuterGain : cW.coneOuterGain,
              distanceModel: "undefined" !== typeof WW.distanceModel ? WW.distanceModel : cW.distanceModel,
              maxDistance: "undefined" !== typeof WW.maxDistance ? WW.maxDistance : cW.maxDistance,
              refDistance: "undefined" !== typeof WW.refDistance ? WW.refDistance : cW.refDistance,
              rolloffFactor: "undefined" !== typeof WW.rolloffFactor ? WW.rolloffFactor : cW.rolloffFactor,
              panningModel: "undefined" !== typeof WW.panningModel ? WW.panningModel : cW.panningModel
            };
            var wW = mW._panner;
            wW ? (wW.coneInnerAngle = cW.coneInnerAngle, wW.coneOuterAngle = cW.coneOuterAngle, wW.coneOuterGain = cW.coneOuterGain, wW.distanceModel = cW.distanceModel, wW.maxDistance = cW.maxDistance, wW.refDistance = cW.refDistance, wW.rolloffFactor = cW.rolloffFactor, wW.panningModel = cW.panningModel) : (mW._pos || (mW._pos = EW._pos || [0, 0, -.5]), iW(mW, "spatial"))
          } return EW
      }, Sound.prototype.init = function(WW) {
        return function() {
          var iW = this,
            OW = iW._parent;
          iW._orientation = OW._orientation, iW._stereo = OW._stereo, iW._pos = OW._pos, iW._pannerAttr = OW._pannerAttr, WW.call(this), iW._stereo ? OW.stereo(iW._stereo) : iW._pos && OW.pos(iW._pos[0], iW._pos[1], iW._pos[2], iW._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(WW) {
        return function() {
          var iW = this,
            OW = iW._parent;
          return iW._orientation = OW._orientation, iW._stereo = OW._stereo, iW._pos = OW._pos, iW._pannerAttr = OW._pannerAttr, iW._stereo ? OW.stereo(iW._stereo) : iW._pos ? OW.pos(iW._pos[0], iW._pos[1], iW._pos[2], iW._id) : iW._panner && (iW._panner.disconnect(0), iW._panner = void 0, OW._refreshBuffer(iW)), WW.call(this)
        }
      }(Sound.prototype.reset);
      var iW = function(WW, iW) {
        "spatial" === (iW = iW || "spatial") ? (WW._panner = Howler.ctx.createPanner(), WW._panner.coneInnerAngle = WW._pannerAttr.coneInnerAngle, WW._panner.coneOuterAngle = WW._pannerAttr.coneOuterAngle, WW._panner.coneOuterGain = WW._pannerAttr.coneOuterGain, WW._panner.distanceModel = WW._pannerAttr.distanceModel, WW._panner.maxDistance = WW._pannerAttr.maxDistance, WW._panner.refDistance = WW._pannerAttr.refDistance, WW._panner.rolloffFactor = WW._pannerAttr.rolloffFactor, WW._panner.panningModel = WW._pannerAttr.panningModel, "undefined" !== typeof WW._panner.positionX ? (WW._panner.positionX.setValueAtTime(WW._pos[0], Howler.ctx.currentTime), WW._panner.positionY.setValueAtTime(WW._pos[1], Howler.ctx.currentTime), WW._panner.positionZ.setValueAtTime(WW._pos[2], Howler.ctx.currentTime)) : WW._panner.setPosition(WW._pos[0], WW._pos[1], WW._pos[2]), "undefined" !== typeof WW._panner.orientationX ? (WW._panner.orientationX.setValueAtTime(WW._orientation[0], Howler.ctx.currentTime), WW._panner.orientationY.setValueAtTime(WW._orientation[1], Howler.ctx.currentTime), WW._panner.orientationZ.setValueAtTime(WW._orientation[2], Howler.ctx.currentTime)) : WW._panner.setOrientation(WW._orientation[0], WW._orientation[1], WW._orientation[2])) : (WW._panner = Howler.ctx.createStereoPanner(), WW._panner.pan.setValueAtTime(WW._stereo, Howler.ctx.currentTime)), WW._panner.connect(WW._node), WW.JZ || WW._parent.pause(WW._id, !0).play(WW._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);