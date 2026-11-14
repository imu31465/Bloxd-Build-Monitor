/*! For license information please see 98edle.79.a44d32ee.chunk.js.LICENSE.txt */
export const id = 79;
export const ids = [79];
export const modules = {
  3843: (WW, RW, MW) => {
    var wW;
    ! function() {
      var CW = function() {
        this.init()
      };
      CW.prototype = {
        init: function() {
          var WW = this || zR;
          return WW._counter = 1e3, WW._html5AudioPool = [], WW.html5PoolSize = 10, WW._codecs = {}, WW._howls = [], WW._muted = !1, WW._volume = 1, WW._canPlayEvent = "canplaythrough", WW._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, WW.masterGain = null, WW.noAudio = !1, WW.usingWebAudio = !0, WW.autoSuspend = !0, WW.ctx = null, WW.autoUnlock = !0, WW._setup(), WW
        },
        volume: function(WW) {
          var RW = this || zR;
          if (WW = parseFloat(WW), RW.ctx || TW(), "undefined" !== typeof WW && WW >= 0 && WW <= 1) {
            if (RW._volume = WW, RW._muted) return RW;
            RW.usingWebAudio && RW.masterGain.gain.setValueAtTime(WW, zR.ctx.currentTime);
            for (var MW = 0; MW < RW._howls.length; MW++)
              if (!RW._howls[MW]._webAudio)
                for (var wW = RW._howls[MW]._getSoundIds(), CW = 0; CW < wW.length; CW++) {
                  var AW = RW._howls[MW]._soundById(wW[CW]);
                  AW && AW._node && (AW._node.volume = AW._volume * WW)
                }
            return RW
          }
          return RW._volume
        },
        mute: function(WW) {
          var RW = this || zR;
          RW.ctx || TW(), RW._muted = WW, RW.usingWebAudio && RW.masterGain.gain.setValueAtTime(WW ? 0 : RW._volume, zR.ctx.currentTime);
          for (var MW = 0; MW < RW._howls.length; MW++)
            if (!RW._howls[MW]._webAudio)
              for (var wW = RW._howls[MW]._getSoundIds(), CW = 0; CW < wW.length; CW++) {
                var AW = RW._howls[MW]._soundById(wW[CW]);
                AW && AW._node && (AW._node.muted = !!WW || AW._muted)
              }
          return RW
        },
        stop: function() {
          for (var WW = this || zR, RW = 0; RW < WW._howls.length; RW++) WW._howls[RW].stop();
          return WW
        },
        unload: function() {
          for (var WW = this || zR, RW = WW._howls.length - 1; RW >= 0; RW--) WW._howls[RW].unload();
          return WW.usingWebAudio && WW.ctx && "undefined" !== typeof WW.ctx.close && (WW.ctx.close(), WW.ctx = null, TW()), WW
        },
        codecs: function(WW) {
          return (this || zR)._codecs[WW.replace(/^x-/, "")]
        },
        _setup: function() {
          var WW = this || zR;
          if (WW.state = WW.ctx && WW.ctx.state || "suspended", WW._autoSuspend(), !WW.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (WW._canPlayEvent = "canplay")
            } catch (RW) {
              WW.noAudio = !0
            } else WW.noAudio = !0;
          try {
            (new Audio).muted && (WW.noAudio = !0)
          } catch (RW) {}
          return WW.noAudio || WW._setupCodecs(), WW
        },
        _setupCodecs: function() {
          var WW = this || zR,
            RW = null;
          try {
            RW = "undefined" !== typeof Audio ? new Audio : null
          } catch (eW) {
            return WW
          }
          if (!RW || "function" !== typeof RW.canPlayType) return WW;
          var MW = RW.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            wW = WW._navigator ? WW._navigator.userAgent : "",
            CW = wW.match(/OPR\/([0-6].)/g),
            AW = CW && parseInt(CW[0].split("/")[1], 10) < 33,
            bR = -1 !== wW.indexOf("Safari") && -1 === wW.indexOf("Chrome"),
            yR = wW.match(/Version\/(.*?) /),
            NW = bR && yR && parseInt(yR[1], 10) < 15;
          return WW._codecs = {
            mp3: !(AW || !MW && !RW.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!MW,
            opus: !!RW.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!RW.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!RW.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(RW.canPlayType('audio/wav; codecs="1"') || RW.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!RW.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!RW.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(RW.canPlayType("audio/x-m4a;") || RW.canPlayType("audio/m4a;") || RW.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(RW.canPlayType("audio/x-m4b;") || RW.canPlayType("audio/m4b;") || RW.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(RW.canPlayType("audio/x-mp4;") || RW.canPlayType("audio/mp4;") || RW.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(NW || !RW.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(NW || !RW.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!RW.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(RW.canPlayType("audio/x-flac;") || RW.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, WW
        },
        _unlockAudio: function() {
          var WW = this || zR;
          if (!WW._audioUnlocked && WW.ctx) {
            WW._audioUnlocked = !1, WW.autoUnlock = !1, WW._mobileUnloaded || 44100 === WW.ctx.sampleRate || (WW._mobileUnloaded = !0, WW.unload()), WW._scratchBuffer = WW.ctx.createBuffer(1, 1, 22050);
            var RW = function(MW) {
              for (; WW._html5AudioPool.length < WW.html5PoolSize;) try {
                var wW = new Audio;
                wW._unlocked = !0, WW._releaseHtml5Audio(wW)
              } catch (MW) {
                WW.noAudio = !0;
                break
              }
              for (var CW = 0; CW < WW._howls.length; CW++)
                if (!WW._howls[CW]._webAudio)
                  for (var zR = WW._howls[CW]._getSoundIds(), AW = 0; AW < zR.length; AW++) {
                    var bR = WW._howls[CW]._soundById(zR[AW]);
                    bR && bR._node && !bR._node._unlocked && (bR._node._unlocked = !0, bR._node.load())
                  }
              WW._autoResume();
              var yR = WW.ctx.createBufferSource();
              yR.buffer = WW._scratchBuffer, yR.connect(WW.ctx.destination), "undefined" === typeof yR.start ? yR.noteOn(0) : yR.start(0), "function" === typeof WW.ctx.resume && WW.ctx.resume(), yR.onended = function() {
                yR.disconnect(0), WW._audioUnlocked = !0, document.removeEventListener("touchstart", RW, !0), document.removeEventListener("touchend", RW, !0), document.removeEventListener("click", RW, !0), document.removeEventListener("keydown", RW, !0);
                for (var MW = 0; MW < WW._howls.length; MW++) WW._howls[MW]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", RW, !0), document.addEventListener("touchend", RW, !0), document.addEventListener("click", RW, !0), document.addEventListener("keydown", RW, !0), WW
          }
        },
        _obtainHtml5Audio: function() {
          var WW = this || zR;
          if (WW._html5AudioPool.length) return WW._html5AudioPool.pop();
          var RW = (new Audio).play();
          return RW && "undefined" !== typeof Promise && (RW instanceof Promise || "function" === typeof RW.then) && RW.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(WW) {
          var RW = this || zR;
          return WW._unlocked && RW._html5AudioPool.push(WW), RW
        },
        _autoSuspend: function() {
          var WW = this;
          if (WW.autoSuspend && WW.ctx && "undefined" !== typeof WW.ctx.suspend && zR.usingWebAudio) {
            for (var RW = 0; RW < WW._howls.length; RW++)
              if (WW._howls[RW]._webAudio)
                for (var MW = 0; MW < WW._howls[RW]._sounds.length; MW++)
                  if (!WW._howls[RW]._sounds[MW].Hk) return WW;
            return WW._suspendTimer && clearTimeout(WW._suspendTimer), WW._suspendTimer = setTimeout((function() {
              if (WW.autoSuspend) {
                WW._suspendTimer = null, WW.state = "suspending";
                var RW = function() {
                  WW.state = "suspended", WW._resumeAfterSuspend && (delete WW._resumeAfterSuspend, WW._autoResume())
                };
                WW.ctx.suspend().then(RW, RW)
              }
            }), 3e4), WW
          }
        },
        _autoResume: function() {
          var WW = this;
          if (WW.ctx && "undefined" !== typeof WW.ctx.resume && zR.usingWebAudio) return "running" === WW.state && "interrupted" !== WW.ctx.state && WW._suspendTimer ? (clearTimeout(WW._suspendTimer), WW._suspendTimer = null) : "suspended" === WW.state || "running" === WW.state && "interrupted" === WW.ctx.state ? (WW.ctx.resume().then((function() {
            WW.state = "running";
            for (var RW = 0; RW < WW._howls.length; RW++) WW._howls[RW]._emit("resume")
          })), WW._suspendTimer && (clearTimeout(WW._suspendTimer), WW._suspendTimer = null)) : "suspending" === WW.state && (WW._resumeAfterSuspend = !0), WW
        }
      };
      var zR = new CW,
        AW = function(WW) {
          WW.src && 0 !== WW.src.length ? this.init(WW) : console.error("An array of source files must be passed with any new Howl.")
        };
      AW.prototype = {
        init: function(WW) {
          var RW = this;
          return zR.ctx || TW(), RW._autoplay = WW.autoplay || !1, RW._format = "string" !== typeof WW.format ? WW.format : [WW.format], RW._html5 = WW.html5 || !1, RW._muted = WW.mute || !1, RW._loop = WW.loop || !1, RW._pool = WW.pool || 5, RW._preload = "boolean" !== typeof WW.preload && "metadata" !== WW.preload || WW.preload, RW._rate = WW.rate || 1, RW._sprite = WW.sprite || {}, RW._src = "string" !== typeof WW.src ? WW.src : [WW.src], RW._volume = void 0 !== WW.volume ? WW.volume : 1, RW._xhr = {
            method: WW.xhr && WW.xhr.method ? WW.xhr.method : "GET",
            headers: WW.xhr && WW.xhr.headers ? WW.xhr.headers : null,
            withCredentials: !(!WW.xhr || !WW.xhr.withCredentials) && WW.xhr.withCredentials
          }, RW._duration = 0, RW._state = "unloaded", RW._sounds = [], RW._endTimers = {}, RW._queue = [], RW._playLock = !1, RW._onend = WW.onend ? [{
            bC: WW.onend
          }] : [], RW._onfade = WW.onfade ? [{
            bC: WW.onfade
          }] : [], RW._onload = WW.onload ? [{
            bC: WW.onload
          }] : [], RW._onloaderror = WW.onloaderror ? [{
            bC: WW.onloaderror
          }] : [], RW._onplayerror = WW.onplayerror ? [{
            bC: WW.onplayerror
          }] : [], RW._onpause = WW.onpause ? [{
            bC: WW.onpause
          }] : [], RW._onplay = WW.onplay ? [{
            bC: WW.onplay
          }] : [], RW._onstop = WW.onstop ? [{
            bC: WW.onstop
          }] : [], RW._onmute = WW.onmute ? [{
            bC: WW.onmute
          }] : [], RW._onvolume = WW.onvolume ? [{
            bC: WW.onvolume
          }] : [], RW._onrate = WW.onrate ? [{
            bC: WW.onrate
          }] : [], RW._onseek = WW.onseek ? [{
            bC: WW.onseek
          }] : [], RW._onunlock = WW.onunlock ? [{
            bC: WW.onunlock
          }] : [], RW._onresume = [], RW._webAudio = zR.usingWebAudio && !RW._html5, "undefined" !== typeof zR.ctx && zR.ctx && zR.autoUnlock && zR._unlockAudio(), zR._howls.push(RW), RW._autoplay && RW._queue.push({
            event: "play",
            action: function() {
              RW.play()
            }
          }), RW._preload && "none" !== RW._preload && RW.load(), RW
        },
        load: function() {
          var WW = this,
            RW = null;
          if (zR.noAudio) WW._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof WW._src && (WW._src = [WW._src]);
            for (var MW = 0; MW < WW._src.length; MW++) {
              var wW, CW;
              if (WW._format && WW._format[MW]) wW = WW._format[MW];
              else {
                if ("string" !== typeof(CW = WW._src[MW])) {
                  WW._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(wW = /^data:audio\/([^;,]+);/i.exec(CW)) || (wW = /\.([^.]+)$/.exec(CW.split("?", 1)[0])), wW && (wW = wW[1].toLowerCase())
              }
              if (wW || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), wW && zR.codecs(wW)) {
                RW = WW._src[MW];
                break
              }
            }
            if (RW) return WW._src = RW, WW._state = "loading", "https:" === window.location.protocol && "http:" === RW.slice(0, 5) && (WW._html5 = !0, WW._webAudio = !1), new bR(WW), WW._webAudio && NW(WW), WW;
            WW._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(WW, RW) {
          var MW = this,
            wW = null;
          if ("number" === typeof WW) wW = WW, WW = null;
          else {
            if ("string" === typeof WW && "loaded" === MW._state && !MW._sprite[WW]) return null;
            if ("undefined" === typeof WW && (WW = "__default", !MW._playLock)) {
              for (var CW = 0, AW = 0; AW < MW._sounds.length; AW++) MW._sounds[AW].Hk && !MW._sounds[AW]._ended && (CW++, wW = MW._sounds[AW]._id);
              1 === CW ? WW = null : wW = null
            }
          }
          var bR = wW ? MW._soundById(wW) : MW._inactiveSound();
          if (!bR) return null;
          if (wW && !WW && (WW = bR._sprite || "__default"), "loaded" !== MW._state) {
            bR._sprite = WW, bR._ended = !1;
            var yR = bR._id;
            return MW._queue.push({
              event: "play",
              action: function() {
                MW.play(yR)
              }
            }), yR
          }
          if (wW && !bR.Hk) return RW || MW._loadQueue("play"), bR._id;
          MW._webAudio && zR._autoResume();
          var NW = Math.max(0, bR._seek > 0 ? bR._seek : MW._sprite[WW][0] / 1e3),
            eW = Math.max(0, (MW._sprite[WW][0] + MW._sprite[WW][1]) / 1e3 - NW),
            BW = 1e3 * eW / Math.abs(bR._rate),
            tR = MW._sprite[WW][0] / 1e3,
            TW = (MW._sprite[WW][0] + MW._sprite[WW][1]) / 1e3;
          bR._sprite = WW, bR._ended = !1;
          var gR = function() {
            bR.Hk = !1, bR._seek = NW, bR._start = tR, bR._stop = TW, bR._loop = !(!bR._loop && !MW._sprite[WW][2])
          };
          if (!(NW >= TW)) {
            var iR = bR._node;
            if (MW._webAudio) {
              var YW = function() {
                MW._playLock = !1, gR(), MW._refreshBuffer(bR);
                var WW = bR._muted || MW._muted ? 0 : bR._volume;
                iR.gain.setValueAtTime(WW, zR.ctx.currentTime), bR._playStart = zR.ctx.currentTime, "undefined" === typeof iR.bufferSource.start ? bR._loop ? iR.bufferSource.noteGrainOn(0, NW, 86400) : iR.bufferSource.noteGrainOn(0, NW, eW) : bR._loop ? iR.bufferSource.start(0, NW, 86400) : iR.bufferSource.start(0, NW, eW), BW !== 1 / 0 && (MW._endTimers[bR._id] = setTimeout(MW._ended.bind(MW, bR), BW)), RW || setTimeout((function() {
                  MW._emit("play", bR._id), MW._loadQueue()
                }), 0)
              };
              "running" === zR.state && "interrupted" !== zR.ctx.state ? YW() : (MW._playLock = !0, MW.once("resume", YW), MW._clearTimer(bR._id))
            } else {
              var JW = function() {
                iR.currentTime = NW, iR.muted = bR._muted || MW._muted || zR._muted || iR.muted, iR.volume = bR._volume * zR.volume(), iR.playbackRate = bR._rate;
                try {
                  var wW = iR.play();
                  if (wW && "undefined" !== typeof Promise && (wW instanceof Promise || "function" === typeof wW.then) ? (MW._playLock = !0, gR(), wW.then((function() {
                      MW._playLock = !1, iR._unlocked = !0, RW ? MW._loadQueue() : MW._emit("play", bR._id)
                    })).catch((function() {
                      MW._playLock = !1, MW._emit("playerror", bR._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), bR._ended = !0, bR.Hk = !0
                    }))) : RW || (MW._playLock = !1, gR(), MW._emit("play", bR._id)), iR.playbackRate = bR._rate, iR.paused) return void MW._emit("playerror", bR._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== WW || bR._loop ? MW._endTimers[bR._id] = setTimeout(MW._ended.bind(MW, bR), BW) : (MW._endTimers[bR._id] = function() {
                    MW._ended(bR), iR.removeEventListener("ended", MW._endTimers[bR._id], !1)
                  }, iR.addEventListener("ended", MW._endTimers[bR._id], !1))
                } catch (CW) {
                  MW._emit("playerror", bR._id, CW)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === iR.src && (iR.src = MW._src, iR.load());
              var PW = window && window.ejecta || !iR.readyState && zR._navigator.isCocoonJS;
              if (iR.readyState >= 3 || PW) JW();
              else {
                MW._playLock = !0, MW._state = "loading";
                var IW = function() {
                  MW._state = "loaded", JW(), iR.removeEventListener(zR._canPlayEvent, IW, !1)
                };
                iR.addEventListener(zR._canPlayEvent, IW, !1), MW._clearTimer(bR._id)
              }
            }
            return bR._id
          }
          MW._ended(bR)
        },
        pause: function(WW) {
          var RW = this;
          if ("loaded" !== RW._state || RW._playLock) return RW._queue.push({
            event: "pause",
            action: function() {
              RW.pause(WW)
            }
          }), RW;
          for (var MW = RW._getSoundIds(WW), wW = 0; wW < MW.length; wW++) {
            RW._clearTimer(MW[wW]);
            var CW = RW._soundById(MW[wW]);
            if (CW && !CW.Hk && (CW._seek = RW.seek(MW[wW]), CW._rateSeek = 0, CW.Hk = !0, RW._stopFade(MW[wW]), CW._node))
              if (RW._webAudio) {
                if (!CW._node.bufferSource) continue;
                "undefined" === typeof CW._node.bufferSource.stop ? CW._node.bufferSource.noteOff(0) : CW._node.bufferSource.stop(0), RW._cleanBuffer(CW._node)
              } else isNaN(CW._node.duration) && CW._node.duration !== 1 / 0 || CW._node.pause();
            arguments[1] || RW._emit("pause", CW ? CW._id : null)
          }
          return RW
        },
        stop: function(WW, RW) {
          var MW = this;
          if ("loaded" !== MW._state || MW._playLock) return MW._queue.push({
            event: "stop",
            action: function() {
              MW.stop(WW)
            }
          }), MW;
          for (var wW = MW._getSoundIds(WW), CW = 0; CW < wW.length; CW++) {
            MW._clearTimer(wW[CW]);
            var zR = MW._soundById(wW[CW]);
            zR && (zR._seek = zR._start || 0, zR._rateSeek = 0, zR.Hk = !0, zR._ended = !0, MW._stopFade(wW[CW]), zR._node && (MW._webAudio ? zR._node.bufferSource && ("undefined" === typeof zR._node.bufferSource.stop ? zR._node.bufferSource.noteOff(0) : zR._node.bufferSource.stop(0), MW._cleanBuffer(zR._node)) : isNaN(zR._node.duration) && zR._node.duration !== 1 / 0 || (zR._node.currentTime = zR._start || 0, zR._node.pause(), zR._node.duration === 1 / 0 && MW._clearSound(zR._node))), RW || MW._emit("stop", zR._id))
          }
          return MW
        },
        mute: function(WW, RW) {
          var MW = this;
          if ("loaded" !== MW._state || MW._playLock) return MW._queue.push({
            event: "mute",
            action: function() {
              MW.mute(WW, RW)
            }
          }), MW;
          if ("undefined" === typeof RW) {
            if ("boolean" !== typeof WW) return MW._muted;
            MW._muted = WW
          }
          for (var wW = MW._getSoundIds(RW), CW = 0; CW < wW.length; CW++) {
            var AW = MW._soundById(wW[CW]);
            AW && (AW._muted = WW, AW._interval && MW._stopFade(AW._id), MW._webAudio && AW._node ? AW._node.gain.setValueAtTime(WW ? 0 : AW._volume, zR.ctx.currentTime) : AW._node && (AW._node.muted = !!zR._muted || WW), MW._emit("mute", AW._id))
          }
          return MW
        },
        volume: function() {
          var WW, RW, MW, wW = this,
            CW = arguments;
          if (0 === CW.length) return wW._volume;
          if (1 === CW.length || 2 === CW.length && "undefined" === typeof CW[1] ? wW._getSoundIds().indexOf(CW[0]) >= 0 ? RW = parseInt(CW[0], 10) : WW = parseFloat(CW[0]) : CW.length >= 2 && (WW = parseFloat(CW[0]), RW = parseInt(CW[1], 10)), !("undefined" !== typeof WW && WW >= 0 && WW <= 1)) return (MW = RW ? wW._soundById(RW) : wW._sounds[0]) ? MW._volume : 0;
          if ("loaded" !== wW._state || wW._playLock) return wW._queue.push({
            event: "volume",
            action: function() {
              wW.volume.apply(wW, CW)
            }
          }), wW;
          "undefined" === typeof RW && (wW._volume = WW), RW = wW._getSoundIds(RW);
          for (var AW = 0; AW < RW.length; AW++)(MW = wW._soundById(RW[AW])) && (MW._volume = WW, CW[2] || wW._stopFade(RW[AW]), wW._webAudio && MW._node && !MW._muted ? MW._node.gain.setValueAtTime(WW, zR.ctx.currentTime) : MW._node && !MW._muted && (MW._node.volume = WW * zR.volume()), wW._emit("volume", MW._id));
          return wW
        },
        fade: function(WW, RW, MW, wW) {
          var CW = this;
          if ("loaded" !== CW._state || CW._playLock) return CW._queue.push({
            event: "fade",
            action: function() {
              CW.fade(WW, RW, MW, wW)
            }
          }), CW;
          WW = Math.min(Math.max(0, parseFloat(WW)), 1), RW = Math.min(Math.max(0, parseFloat(RW)), 1), MW = parseFloat(MW), CW.volume(WW, wW);
          for (var AW = CW._getSoundIds(wW), bR = 0; bR < AW.length; bR++) {
            var yR = CW._soundById(AW[bR]);
            if (yR) {
              if (wW || CW._stopFade(AW[bR]), CW._webAudio && !yR._muted) {
                var NW = zR.ctx.currentTime,
                  eW = NW + MW / 1e3;
                yR._volume = WW, yR._node.gain.setValueAtTime(WW, NW), yR._node.gain.linearRampToValueAtTime(RW, eW)
              }
              CW._startFadeInterval(yR, WW, RW, MW, AW[bR], "undefined" === typeof wW)
            }
          }
          return CW
        },
        _startFadeInterval: function(WW, RW, MW, wW, CW, zR) {
          var AW = this,
            bR = RW,
            yR = MW - RW,
            NW = Math.abs(yR / .01),
            eW = Math.max(4, NW > 0 ? wW / NW : wW),
            BW = Date.now();
          WW._fadeTo = MW, WW._interval = setInterval((function() {
            var CW = (Date.now() - BW) / wW;
            BW = Date.now(), bR += yR * CW, bR = Math.round(100 * bR) / 100, bR = yR < 0 ? Math.max(MW, bR) : Math.min(MW, bR), AW._webAudio ? WW._volume = bR : AW.volume(bR, WW._id, !0), zR && (AW._volume = bR), (MW < RW && bR <= MW || MW > RW && bR >= MW) && (clearInterval(WW._interval), WW._interval = null, WW._fadeTo = null, AW.volume(MW, WW._id), AW._emit("fade", WW._id))
          }), eW)
        },
        _stopFade: function(WW) {
          var RW = this,
            MW = RW._soundById(WW);
          return MW && MW._interval && (RW._webAudio && MW._node.gain.cancelScheduledValues(zR.ctx.currentTime), clearInterval(MW._interval), MW._interval = null, RW.volume(MW._fadeTo, WW), MW._fadeTo = null, RW._emit("fade", WW)), RW
        },
        loop: function() {
          var WW, RW, MW, wW = this,
            CW = arguments;
          if (0 === CW.length) return wW._loop;
          if (1 === CW.length) {
            if ("boolean" !== typeof CW[0]) return !!(MW = wW._soundById(parseInt(CW[0], 10))) && MW._loop;
            WW = CW[0], wW._loop = WW
          } else 2 === CW.length && (WW = CW[0], RW = parseInt(CW[1], 10));
          for (var zR = wW._getSoundIds(RW), AW = 0; AW < zR.length; AW++)(MW = wW._soundById(zR[AW])) && (MW._loop = WW, wW._webAudio && MW._node && MW._node.bufferSource && (MW._node.bufferSource.loop = WW, WW && (MW._node.bufferSource.loopStart = MW._start || 0, MW._node.bufferSource.loopEnd = MW._stop, wW.playing(zR[AW]) && (wW.pause(zR[AW], !0), wW.play(zR[AW], !0)))));
          return wW
        },
        rate: function() {
          var WW, RW, MW, wW = this,
            CW = arguments;
          if (0 === CW.length) RW = wW._sounds[0]._id;
          else if (1 === CW.length) {
            wW._getSoundIds().indexOf(CW[0]) >= 0 ? RW = parseInt(CW[0], 10) : WW = parseFloat(CW[0])
          } else 2 === CW.length && (WW = parseFloat(CW[0]), RW = parseInt(CW[1], 10));
          if ("number" !== typeof WW) return (MW = wW._soundById(RW)) ? MW._rate : wW._rate;
          if ("loaded" !== wW._state || wW._playLock) return wW._queue.push({
            event: "rate",
            action: function() {
              wW.rate.apply(wW, CW)
            }
          }), wW;
          "undefined" === typeof RW && (wW._rate = WW), RW = wW._getSoundIds(RW);
          for (var AW = 0; AW < RW.length; AW++)
            if (MW = wW._soundById(RW[AW])) {
              wW.playing(RW[AW]) && (MW._rateSeek = wW.seek(RW[AW]), MW._playStart = wW._webAudio ? zR.ctx.currentTime : MW._playStart), MW._rate = WW, wW._webAudio && MW._node && MW._node.bufferSource ? MW._node.bufferSource.playbackRate.setValueAtTime(WW, zR.ctx.currentTime) : MW._node && (MW._node.playbackRate = WW);
              var bR = wW.seek(RW[AW]),
                yR = 1e3 * ((wW._sprite[MW._sprite][0] + wW._sprite[MW._sprite][1]) / 1e3 - bR) / Math.abs(MW._rate);
              !wW._endTimers[RW[AW]] && MW.Hk || (wW._clearTimer(RW[AW]), wW._endTimers[RW[AW]] = setTimeout(wW._ended.bind(wW, MW), yR)), wW._emit("rate", MW._id)
            } return wW
        },
        seek: function() {
          var WW, RW, MW = this,
            wW = arguments;
          if (0 === wW.length) MW._sounds.length && (RW = MW._sounds[0]._id);
          else if (1 === wW.length) {
            MW._getSoundIds().indexOf(wW[0]) >= 0 ? RW = parseInt(wW[0], 10) : MW._sounds.length && (RW = MW._sounds[0]._id, WW = parseFloat(wW[0]))
          } else 2 === wW.length && (WW = parseFloat(wW[0]), RW = parseInt(wW[1], 10));
          if ("undefined" === typeof RW) return 0;
          if ("number" === typeof WW && ("loaded" !== MW._state || MW._playLock)) return MW._queue.push({
            event: "seek",
            action: function() {
              MW.seek.apply(MW, wW)
            }
          }), MW;
          var CW = MW._soundById(RW);
          if (CW) {
            if (!("number" === typeof WW && WW >= 0)) {
              if (MW._webAudio) {
                var AW = MW.playing(RW) ? zR.ctx.currentTime - CW._playStart : 0,
                  bR = CW._rateSeek ? CW._rateSeek - CW._seek : 0;
                return CW._seek + (bR + AW * Math.abs(CW._rate))
              }
              return CW._node.currentTime
            }
            var yR = MW.playing(RW);
            yR && MW.pause(RW, !0), CW._seek = WW, CW._ended = !1, MW._clearTimer(RW), MW._webAudio || !CW._node || isNaN(CW._node.duration) || (CW._node.currentTime = WW);
            var NW = function() {
              yR && MW.play(RW, !0), MW._emit("seek", RW)
            };
            if (yR && !MW._webAudio) {
              var eW = function() {
                MW._playLock ? setTimeout(eW, 0) : NW()
              };
              setTimeout(eW, 0)
            } else NW()
          }
          return MW
        },
        playing: function(WW) {
          var RW = this;
          if ("number" === typeof WW) {
            var MW = RW._soundById(WW);
            return !!MW && !MW.Hk
          }
          for (var wW = 0; wW < RW._sounds.length; wW++)
            if (!RW._sounds[wW].Hk) return !0;
          return !1
        },
        duration: function(WW) {
          var RW = this,
            MW = RW._duration,
            wW = RW._soundById(WW);
          return wW && (MW = RW._sprite[wW._sprite][1] / 1e3), MW
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var WW = this, RW = WW._sounds, MW = 0; MW < RW.length; MW++) RW[MW].Hk || WW.stop(RW[MW]._id), WW._webAudio || (WW._clearSound(RW[MW]._node), RW[MW]._node.removeEventListener("error", RW[MW]._errorFn, !1), RW[MW]._node.removeEventListener(zR._canPlayEvent, RW[MW]._loadFn, !1), RW[MW]._node.removeEventListener("ended", RW[MW]._endFn, !1), zR._releaseHtml5Audio(RW[MW]._node)), delete RW[MW]._node, WW._clearTimer(RW[MW]._id);
          var wW = zR._howls.indexOf(WW);
          wW >= 0 && zR._howls.splice(wW, 1);
          var CW = !0;
          for (MW = 0; MW < zR._howls.length; MW++)
            if (zR._howls[MW]._src === WW._src || WW._src.indexOf(zR._howls[MW]._src) >= 0) {
              CW = !1;
              break
            } return yR && CW && delete yR[WW._src], zR.noAudio = !1, WW._state = "unloaded", WW._sounds = [], WW = null, null
        },
        on: function(WW, RW, MW, wW) {
          var CW = this["_on" + WW];
          return "function" === typeof RW && CW.push(wW ? {
            id: MW,
            bC: RW,
            once: wW
          } : {
            id: MW,
            bC: RW
          }), this
        },
        off: function(WW, RW, MW) {
          var wW = this,
            CW = wW["_on" + WW],
            zR = 0;
          if ("number" === typeof RW && (MW = RW, RW = null), RW || MW)
            for (zR = 0; zR < CW.length; zR++) {
              var AW = MW === CW[zR].id;
              if (RW === CW[zR].bC && AW || !RW && AW) {
                CW.splice(zR, 1);
                break
              }
            } else if (WW) wW["_on" + WW] = [];
            else {
              var bR = Object.keys(wW);
              for (zR = 0; zR < bR.length; zR++) 0 === bR[zR].indexOf("_on") && Array.isArray(wW[bR[zR]]) && (wW[bR[zR]] = [])
            } return wW
        },
        once: function(WW, RW, MW) {
          return this.on(WW, RW, MW, 1), this
        },
        _emit: function(WW, RW, MW) {
          for (var wW = this, CW = wW["_on" + WW], zR = CW.length - 1; zR >= 0; zR--) CW[zR].id && CW[zR].id !== RW && "load" !== WW || (setTimeout(function(WW) {
            WW.call(this, RW, MW)
          }.bind(wW, CW[zR].bC), 0), CW[zR].once && wW.off(WW, CW[zR].bC, CW[zR].id));
          return wW._loadQueue(WW), wW
        },
        _loadQueue: function(WW) {
          var RW = this;
          if (RW._queue.length > 0) {
            var MW = RW._queue[0];
            MW.event === WW && (RW._queue.shift(), RW._loadQueue()), WW || MW.action()
          }
          return RW
        },
        _ended: function(WW) {
          var RW = this,
            MW = WW._sprite;
          if (!RW._webAudio && WW._node && !WW._node.paused && !WW._node.ended && WW._node.currentTime < WW._stop) return setTimeout(RW._ended.bind(RW, WW), 100), RW;
          var wW = !(!WW._loop && !RW._sprite[MW][2]);
          if (RW._emit("end", WW._id), !RW._webAudio && wW && RW.stop(WW._id, !0).play(WW._id), RW._webAudio && wW) {
            RW._emit("play", WW._id), WW._seek = WW._start || 0, WW._rateSeek = 0, WW._playStart = zR.ctx.currentTime;
            var CW = 1e3 * (WW._stop - WW._start) / Math.abs(WW._rate);
            RW._endTimers[WW._id] = setTimeout(RW._ended.bind(RW, WW), CW)
          }
          return RW._webAudio && !wW && (WW.Hk = !0, WW._ended = !0, WW._seek = WW._start || 0, WW._rateSeek = 0, RW._clearTimer(WW._id), RW._cleanBuffer(WW._node), zR._autoSuspend()), RW._webAudio || wW || RW.stop(WW._id, !0), RW
        },
        _clearTimer: function(WW) {
          var RW = this;
          if (RW._endTimers[WW]) {
            if ("function" !== typeof RW._endTimers[WW]) clearTimeout(RW._endTimers[WW]);
            else {
              var MW = RW._soundById(WW);
              MW && MW._node && MW._node.removeEventListener("ended", RW._endTimers[WW], !1)
            }
            delete RW._endTimers[WW]
          }
          return RW
        },
        _soundById: function(WW) {
          for (var RW = this, MW = 0; MW < RW._sounds.length; MW++)
            if (WW === RW._sounds[MW]._id) return RW._sounds[MW];
          return null
        },
        _inactiveSound: function() {
          var WW = this;
          WW._drain();
          for (var RW = 0; RW < WW._sounds.length; RW++)
            if (WW._sounds[RW]._ended) return WW._sounds[RW].reset();
          return new bR(WW)
        },
        _drain: function() {
          var WW = this,
            RW = WW._pool,
            MW = 0,
            wW = 0;
          if (!(WW._sounds.length < RW)) {
            for (wW = 0; wW < WW._sounds.length; wW++) WW._sounds[wW]._ended && MW++;
            for (wW = WW._sounds.length - 1; wW >= 0; wW--) {
              if (MW <= RW) return;
              WW._sounds[wW]._ended && (WW._webAudio && WW._sounds[wW]._node && WW._sounds[wW]._node.disconnect(0), WW._sounds.splice(wW, 1), MW--)
            }
          }
        },
        _getSoundIds: function(WW) {
          if ("undefined" === typeof WW) {
            for (var RW = [], MW = 0; MW < this._sounds.length; MW++) RW.push(this._sounds[MW]._id);
            return RW
          }
          return [WW]
        },
        _refreshBuffer: function(WW) {
          return WW._node.bufferSource = zR.ctx.createBufferSource(), WW._node.bufferSource.buffer = yR[this._src], WW._panner ? WW._node.bufferSource.connect(WW._panner) : WW._node.bufferSource.connect(WW._node), WW._node.bufferSource.loop = WW._loop, WW._loop && (WW._node.bufferSource.loopStart = WW._start || 0, WW._node.bufferSource.loopEnd = WW._stop || 0), WW._node.bufferSource.playbackRate.setValueAtTime(WW._rate, zR.ctx.currentTime), this
        },
        _cleanBuffer: function(WW) {
          var RW = zR._navigator && zR._navigator.vendor.indexOf("Apple") >= 0;
          if (zR._scratchBuffer && WW.bufferSource && (WW.bufferSource.onended = null, WW.bufferSource.disconnect(0), RW)) try {
            WW.bufferSource.buffer = zR._scratchBuffer
          } catch (MW) {}
          return WW.bufferSource = null, this
        },
        _clearSound: function(WW) {
          /MSIE |Trident\//.test(zR._navigator && zR._navigator.userAgent) || (WW.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var bR = function(WW) {
        this._parent = WW, this.init()
      };
      bR.prototype = {
        init: function() {
          var WW = this,
            RW = WW._parent;
          return WW._muted = RW._muted, WW._loop = RW._loop, WW._volume = RW._volume, WW._rate = RW._rate, WW._seek = 0, WW.Hk = !0, WW._ended = !0, WW._sprite = "__default", WW._id = ++zR._counter, RW._sounds.push(WW), WW.create(), WW
        },
        create: function() {
          var WW = this,
            RW = WW._parent,
            MW = zR._muted || WW._muted || WW._parent._muted ? 0 : WW._volume;
          return RW._webAudio ? (WW._node = "undefined" === typeof zR.ctx.createGain ? zR.ctx.createGainNode() : zR.ctx.createGain(), WW._node.gain.setValueAtTime(MW, zR.ctx.currentTime), WW._node.paused = !0, WW._node.connect(zR.masterGain)) : zR.noAudio || (WW._node = zR._obtainHtml5Audio(), WW._errorFn = WW._errorListener.bind(WW), WW._node.addEventListener("error", WW._errorFn, !1), WW._loadFn = WW._loadListener.bind(WW), WW._node.addEventListener(zR._canPlayEvent, WW._loadFn, !1), WW._endFn = WW._endListener.bind(WW), WW._node.addEventListener("ended", WW._endFn, !1), WW._node.src = RW._src, WW._node.preload = !0 === RW._preload ? "auto" : RW._preload, WW._node.volume = MW * zR.volume(), WW._node.load()), WW
        },
        reset: function() {
          var WW = this,
            RW = WW._parent;
          return WW._muted = RW._muted, WW._loop = RW._loop, WW._volume = RW._volume, WW._rate = RW._rate, WW._seek = 0, WW._rateSeek = 0, WW.Hk = !0, WW._ended = !0, WW._sprite = "__default", WW._id = ++zR._counter, WW
        },
        _errorListener: function() {
          var WW = this;
          WW._parent._emit("loaderror", WW._id, WW._node.error ? WW._node.error.code : 0), WW._node.removeEventListener("error", WW._errorFn, !1)
        },
        _loadListener: function() {
          var WW = this,
            RW = WW._parent;
          RW._duration = Math.ceil(10 * WW._node.duration) / 10, 0 === Object.keys(RW._sprite).length && (RW._sprite = {
            __default: [0, 1e3 * RW._duration]
          }), "loaded" !== RW._state && (RW._state = "loaded", RW._emit("load"), RW._loadQueue()), WW._node.removeEventListener(zR._canPlayEvent, WW._loadFn, !1)
        },
        _endListener: function() {
          var WW = this,
            RW = WW._parent;
          RW._duration === 1 / 0 && (RW._duration = Math.ceil(10 * WW._node.duration) / 10, RW._sprite.__default[1] === 1 / 0 && (RW._sprite.__default[1] = 1e3 * RW._duration), RW._ended(WW)), WW._node.removeEventListener("ended", WW._endFn, !1)
        }
      };
      var yR = {},
        NW = function(WW) {
          var RW = WW._src;
          if (yR[RW]) return WW._duration = yR[RW].duration, void tR(WW);
          if (/^data:[^;]+;base64,/.test(RW)) {
            for (var MW = atob(RW.split(",")[1]), wW = new Uint8Array(MW.length), CW = 0; CW < MW.length; ++CW) wW[CW] = MW.charCodeAt(CW);
            BW(wW.buffer, WW)
          } else {
            var zR = new XMLHttpRequest;
            zR.open(WW._xhr.method, RW, !0), zR.withCredentials = WW._xhr.withCredentials, zR.responseType = "arraybuffer", WW._xhr.headers && Object.keys(WW._xhr.headers).forEach((function(RW) {
              zR.setRequestHeader(RW, WW._xhr.headers[RW])
            })), zR.onload = function() {
              var RW = (zR.status + "")[0];
              "0" === RW || "2" === RW || "3" === RW ? BW(zR.response, WW) : WW._emit("loaderror", null, "Failed loading audio file with status: " + zR.status + ".")
            }, zR.onerror = function() {
              WW._webAudio && (WW._html5 = !0, WW._webAudio = !1, WW._sounds = [], delete yR[RW], WW.load())
            }, eW(zR)
          }
        },
        eW = function(WW) {
          try {
            WW.send()
          } catch (RW) {
            WW.onerror()
          }
        },
        BW = function(WW, RW) {
          var MW = function() {
              RW._emit("loaderror", null, "Decoding audio data failed.")
            },
            wW = function(WW) {
              WW && RW._sounds.length > 0 ? (yR[RW._src] = WW, tR(RW, WW)) : MW()
            };
          "undefined" !== typeof Promise && 1 === zR.ctx.decodeAudioData.length ? zR.ctx.decodeAudioData(WW).then(wW).catch(MW) : zR.ctx.decodeAudioData(WW, wW, MW)
        },
        tR = function(WW, RW) {
          RW && !WW._duration && (WW._duration = RW.duration), 0 === Object.keys(WW._sprite).length && (WW._sprite = {
            __default: [0, 1e3 * WW._duration]
          }), "loaded" !== WW._state && (WW._state = "loaded", WW._emit("load"), WW._loadQueue())
        },
        TW = function() {
          if (zR.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? zR.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? zR.ctx = new webkitAudioContext : zR.usingWebAudio = !1
            } catch (CW) {
              zR.usingWebAudio = !1
            }
            zR.ctx || (zR.usingWebAudio = !1);
            var WW = /iP(hone|od|ad)/.test(zR._navigator && zR._navigator.platform),
              RW = zR._navigator && zR._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              MW = RW ? parseInt(RW[1], 10) : null;
            if (WW && MW && MW < 9) {
              var wW = /safari/.test(zR._navigator && zR._navigator.userAgent.toLowerCase());
              zR._navigator && !wW && (zR.usingWebAudio = !1)
            }
            zR.usingWebAudio && (zR.masterGain = "undefined" === typeof zR.ctx.createGain ? zR.ctx.createGainNode() : zR.ctx.createGain(), zR.masterGain.gain.setValueAtTime(zR._muted ? 0 : zR._volume, zR.ctx.currentTime), zR.masterGain.connect(zR.ctx.destination)), zR._setup()
          }
        };
      void 0 === (wW = function() {
        return {
          Howler: zR,
          Howl: AW
        }
      }.apply(RW, [])) || (WW.exports = wW), RW.Howler = zR, RW.Howl = AW, "undefined" !== typeof MW.g ? (MW.g.HowlerGlobal = CW, MW.g.Howler = zR, MW.g.Howl = AW, MW.g.Sound = bR) : "undefined" !== typeof window && (window.HowlerGlobal = CW, window.Howler = zR, window.Howl = AW, window.Sound = bR)
    }(),
    function() {
      var WW;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(WW) {
        var RW = this;
        if (!RW.ctx || !RW.ctx.listener) return RW;
        for (var MW = RW._howls.length - 1; MW >= 0; MW--) RW._howls[MW].stereo(WW);
        return RW
      }, HowlerGlobal.prototype.pos = function(WW, RW, MW) {
        var wW = this;
        return wW.ctx && wW.ctx.listener ? (RW = "number" !== typeof RW ? wW._pos[1] : RW, MW = "number" !== typeof MW ? wW._pos[2] : MW, "number" !== typeof WW ? wW._pos : (wW._pos = [WW, RW, MW], "undefined" !== typeof wW.ctx.listener.positionX ? (wW.ctx.listener.positionX.setTargetAtTime(wW._pos[0], Howler.ctx.currentTime, .1), wW.ctx.listener.positionY.setTargetAtTime(wW._pos[1], Howler.ctx.currentTime, .1), wW.ctx.listener.positionZ.setTargetAtTime(wW._pos[2], Howler.ctx.currentTime, .1)) : wW.ctx.listener.setPosition(wW._pos[0], wW._pos[1], wW._pos[2]), wW)) : wW
      }, HowlerGlobal.prototype.orientation = function(WW, RW, MW, wW, CW, zR) {
        var AW = this;
        if (!AW.ctx || !AW.ctx.listener) return AW;
        var bR = AW._orientation;
        return RW = "number" !== typeof RW ? bR[1] : RW, MW = "number" !== typeof MW ? bR[2] : MW, wW = "number" !== typeof wW ? bR[3] : wW, CW = "number" !== typeof CW ? bR[4] : CW, zR = "number" !== typeof zR ? bR[5] : zR, "number" !== typeof WW ? bR : (AW._orientation = [WW, RW, MW, wW, CW, zR], "undefined" !== typeof AW.ctx.listener.forwardX ? (AW.ctx.listener.forwardX.setTargetAtTime(WW, Howler.ctx.currentTime, .1), AW.ctx.listener.forwardY.setTargetAtTime(RW, Howler.ctx.currentTime, .1), AW.ctx.listener.forwardZ.setTargetAtTime(MW, Howler.ctx.currentTime, .1), AW.ctx.listener.upX.setTargetAtTime(wW, Howler.ctx.currentTime, .1), AW.ctx.listener.upY.setTargetAtTime(CW, Howler.ctx.currentTime, .1), AW.ctx.listener.upZ.setTargetAtTime(zR, Howler.ctx.currentTime, .1)) : AW.ctx.listener.setOrientation(WW, RW, MW, wW, CW, zR), AW)
      }, Howl.prototype.init = (WW = Howl.prototype.init, function(RW) {
        var MW = this;
        return MW._orientation = RW.orientation || [1, 0, 0], MW._stereo = RW.stereo || null, MW._pos = RW.pos || null, MW._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof RW.coneInnerAngle ? RW.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof RW.coneOuterAngle ? RW.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof RW.coneOuterGain ? RW.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof RW.distanceModel ? RW.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof RW.maxDistance ? RW.maxDistance : 1e4,
          panningModel: "undefined" !== typeof RW.panningModel ? RW.panningModel : "HRTF",
          refDistance: "undefined" !== typeof RW.refDistance ? RW.refDistance : 1,
          rolloffFactor: "undefined" !== typeof RW.rolloffFactor ? RW.rolloffFactor : 1
        }, MW._onstereo = RW.onstereo ? [{
          bC: RW.onstereo
        }] : [], MW._onpos = RW.onpos ? [{
          bC: RW.onpos
        }] : [], MW._onorientation = RW.onorientation ? [{
          bC: RW.onorientation
        }] : [], WW.call(this, RW)
      }), Howl.prototype.stereo = function(WW, MW) {
        var wW = this;
        if (!wW._webAudio) return wW;
        if ("loaded" !== wW._state) return wW._queue.push({
          event: "stereo",
          action: function() {
            wW.stereo(WW, MW)
          }
        }), wW;
        var CW = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof MW) {
          if ("number" !== typeof WW) return wW._stereo;
          wW._stereo = WW, wW._pos = [WW, 0, 0]
        }
        for (var zR = wW._getSoundIds(MW), AW = 0; AW < zR.length; AW++) {
          var bR = wW._soundById(zR[AW]);
          if (bR) {
            if ("number" !== typeof WW) return bR._stereo;
            bR._stereo = WW, bR._pos = [WW, 0, 0], bR._node && (bR._pannerAttr.panningModel = "equalpower", bR._panner && bR._panner.pan || RW(bR, CW), "spatial" === CW ? "undefined" !== typeof bR._panner.positionX ? (bR._panner.positionX.setValueAtTime(WW, Howler.ctx.currentTime), bR._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), bR._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : bR._panner.setPosition(WW, 0, 0) : bR._panner.pan.setValueAtTime(WW, Howler.ctx.currentTime)), wW._emit("stereo", bR._id)
          }
        }
        return wW
      }, Howl.prototype.pos = function(WW, MW, wW, CW) {
        var zR = this;
        if (!zR._webAudio) return zR;
        if ("loaded" !== zR._state) return zR._queue.push({
          event: "pos",
          action: function() {
            zR.pos(WW, MW, wW, CW)
          }
        }), zR;
        if (MW = "number" !== typeof MW ? 0 : MW, wW = "number" !== typeof wW ? -.5 : wW, "undefined" === typeof CW) {
          if ("number" !== typeof WW) return zR._pos;
          zR._pos = [WW, MW, wW]
        }
        for (var AW = zR._getSoundIds(CW), bR = 0; bR < AW.length; bR++) {
          var yR = zR._soundById(AW[bR]);
          if (yR) {
            if ("number" !== typeof WW) return yR._pos;
            yR._pos = [WW, MW, wW], yR._node && (yR._panner && !yR._panner.pan || RW(yR, "spatial"), "undefined" !== typeof yR._panner.positionX ? (yR._panner.positionX.setValueAtTime(WW, Howler.ctx.currentTime), yR._panner.positionY.setValueAtTime(MW, Howler.ctx.currentTime), yR._panner.positionZ.setValueAtTime(wW, Howler.ctx.currentTime)) : yR._panner.setPosition(WW, MW, wW)), zR._emit("pos", yR._id)
          }
        }
        return zR
      }, Howl.prototype.orientation = function(WW, MW, wW, CW) {
        var zR = this;
        if (!zR._webAudio) return zR;
        if ("loaded" !== zR._state) return zR._queue.push({
          event: "orientation",
          action: function() {
            zR.orientation(WW, MW, wW, CW)
          }
        }), zR;
        if (MW = "number" !== typeof MW ? zR._orientation[1] : MW, wW = "number" !== typeof wW ? zR._orientation[2] : wW, "undefined" === typeof CW) {
          if ("number" !== typeof WW) return zR._orientation;
          zR._orientation = [WW, MW, wW]
        }
        for (var AW = zR._getSoundIds(CW), bR = 0; bR < AW.length; bR++) {
          var yR = zR._soundById(AW[bR]);
          if (yR) {
            if ("number" !== typeof WW) return yR._orientation;
            yR._orientation = [WW, MW, wW], yR._node && (yR._panner || (yR._pos || (yR._pos = zR._pos || [0, 0, -.5]), RW(yR, "spatial")), "undefined" !== typeof yR._panner.orientationX ? (yR._panner.orientationX.setValueAtTime(WW, Howler.ctx.currentTime), yR._panner.orientationY.setValueAtTime(MW, Howler.ctx.currentTime), yR._panner.orientationZ.setValueAtTime(wW, Howler.ctx.currentTime)) : yR._panner.setOrientation(WW, MW, wW)), zR._emit("orientation", yR._id)
          }
        }
        return zR
      }, Howl.prototype.pannerAttr = function() {
        var WW, MW, wW, CW = this,
          zR = arguments;
        if (!CW._webAudio) return CW;
        if (0 === zR.length) return CW._pannerAttr;
        if (1 === zR.length) {
          if ("object" !== typeof zR[0]) return (wW = CW._soundById(parseInt(zR[0], 10))) ? wW._pannerAttr : CW._pannerAttr;
          WW = zR[0], "undefined" === typeof MW && (WW.pannerAttr || (WW.pannerAttr = {
            coneInnerAngle: WW.coneInnerAngle,
            coneOuterAngle: WW.coneOuterAngle,
            coneOuterGain: WW.coneOuterGain,
            distanceModel: WW.distanceModel,
            maxDistance: WW.maxDistance,
            refDistance: WW.refDistance,
            rolloffFactor: WW.rolloffFactor,
            panningModel: WW.panningModel
          }), CW._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof WW.pannerAttr.coneInnerAngle ? WW.pannerAttr.coneInnerAngle : CW._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof WW.pannerAttr.coneOuterAngle ? WW.pannerAttr.coneOuterAngle : CW._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof WW.pannerAttr.coneOuterGain ? WW.pannerAttr.coneOuterGain : CW._coneOuterGain,
            distanceModel: "undefined" !== typeof WW.pannerAttr.distanceModel ? WW.pannerAttr.distanceModel : CW._distanceModel,
            maxDistance: "undefined" !== typeof WW.pannerAttr.maxDistance ? WW.pannerAttr.maxDistance : CW._maxDistance,
            refDistance: "undefined" !== typeof WW.pannerAttr.refDistance ? WW.pannerAttr.refDistance : CW._refDistance,
            rolloffFactor: "undefined" !== typeof WW.pannerAttr.rolloffFactor ? WW.pannerAttr.rolloffFactor : CW._rolloffFactor,
            panningModel: "undefined" !== typeof WW.pannerAttr.panningModel ? WW.pannerAttr.panningModel : CW._panningModel
          })
        } else 2 === zR.length && (WW = zR[0], MW = parseInt(zR[1], 10));
        for (var AW = CW._getSoundIds(MW), bR = 0; bR < AW.length; bR++)
          if (wW = CW._soundById(AW[bR])) {
            var yR = wW._pannerAttr;
            yR = {
              coneInnerAngle: "undefined" !== typeof WW.coneInnerAngle ? WW.coneInnerAngle : yR.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof WW.coneOuterAngle ? WW.coneOuterAngle : yR.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof WW.coneOuterGain ? WW.coneOuterGain : yR.coneOuterGain,
              distanceModel: "undefined" !== typeof WW.distanceModel ? WW.distanceModel : yR.distanceModel,
              maxDistance: "undefined" !== typeof WW.maxDistance ? WW.maxDistance : yR.maxDistance,
              refDistance: "undefined" !== typeof WW.refDistance ? WW.refDistance : yR.refDistance,
              rolloffFactor: "undefined" !== typeof WW.rolloffFactor ? WW.rolloffFactor : yR.rolloffFactor,
              panningModel: "undefined" !== typeof WW.panningModel ? WW.panningModel : yR.panningModel
            };
            var NW = wW._panner;
            NW ? (NW.coneInnerAngle = yR.coneInnerAngle, NW.coneOuterAngle = yR.coneOuterAngle, NW.coneOuterGain = yR.coneOuterGain, NW.distanceModel = yR.distanceModel, NW.maxDistance = yR.maxDistance, NW.refDistance = yR.refDistance, NW.rolloffFactor = yR.rolloffFactor, NW.panningModel = yR.panningModel) : (wW._pos || (wW._pos = CW._pos || [0, 0, -.5]), RW(wW, "spatial"))
          } return CW
      }, Sound.prototype.init = function(WW) {
        return function() {
          var RW = this,
            MW = RW._parent;
          RW._orientation = MW._orientation, RW._stereo = MW._stereo, RW._pos = MW._pos, RW._pannerAttr = MW._pannerAttr, WW.call(this), RW._stereo ? MW.stereo(RW._stereo) : RW._pos && MW.pos(RW._pos[0], RW._pos[1], RW._pos[2], RW._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(WW) {
        return function() {
          var RW = this,
            MW = RW._parent;
          return RW._orientation = MW._orientation, RW._stereo = MW._stereo, RW._pos = MW._pos, RW._pannerAttr = MW._pannerAttr, RW._stereo ? MW.stereo(RW._stereo) : RW._pos ? MW.pos(RW._pos[0], RW._pos[1], RW._pos[2], RW._id) : RW._panner && (RW._panner.disconnect(0), RW._panner = void 0, MW._refreshBuffer(RW)), WW.call(this)
        }
      }(Sound.prototype.reset);
      var RW = function(WW, RW) {
        "spatial" === (RW = RW || "spatial") ? (WW._panner = Howler.ctx.createPanner(), WW._panner.coneInnerAngle = WW._pannerAttr.coneInnerAngle, WW._panner.coneOuterAngle = WW._pannerAttr.coneOuterAngle, WW._panner.coneOuterGain = WW._pannerAttr.coneOuterGain, WW._panner.distanceModel = WW._pannerAttr.distanceModel, WW._panner.maxDistance = WW._pannerAttr.maxDistance, WW._panner.refDistance = WW._pannerAttr.refDistance, WW._panner.rolloffFactor = WW._pannerAttr.rolloffFactor, WW._panner.panningModel = WW._pannerAttr.panningModel, "undefined" !== typeof WW._panner.positionX ? (WW._panner.positionX.setValueAtTime(WW._pos[0], Howler.ctx.currentTime), WW._panner.positionY.setValueAtTime(WW._pos[1], Howler.ctx.currentTime), WW._panner.positionZ.setValueAtTime(WW._pos[2], Howler.ctx.currentTime)) : WW._panner.setPosition(WW._pos[0], WW._pos[1], WW._pos[2]), "undefined" !== typeof WW._panner.orientationX ? (WW._panner.orientationX.setValueAtTime(WW._orientation[0], Howler.ctx.currentTime), WW._panner.orientationY.setValueAtTime(WW._orientation[1], Howler.ctx.currentTime), WW._panner.orientationZ.setValueAtTime(WW._orientation[2], Howler.ctx.currentTime)) : WW._panner.setOrientation(WW._orientation[0], WW._orientation[1], WW._orientation[2])) : (WW._panner = Howler.ctx.createStereoPanner(), WW._panner.pan.setValueAtTime(WW._stereo, Howler.ctx.currentTime)), WW._panner.connect(WW._node), WW.Hk || WW._parent.pause(WW._id, !0).play(WW._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);