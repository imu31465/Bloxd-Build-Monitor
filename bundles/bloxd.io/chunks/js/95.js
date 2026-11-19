/*! For license information please see zyyatq.95.a9f18b69.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  4438: (YY, rY, DY) => {
    var FY;
    ! function() {
      var AY = function() {
        this.init()
      };
      AY.prototype = {
        init: function() {
          var YY = this || IY;
          return YY._counter = 1e3, YY._html5AudioPool = [], YY.html5PoolSize = 10, YY._codecs = {}, YY._howls = [], YY._muted = !1, YY._volume = 1, YY._canPlayEvent = "canplaythrough", YY._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, YY.masterGain = null, YY.noAudio = !1, YY.usingWebAudio = !0, YY.autoSuspend = !0, YY.ctx = null, YY.autoUnlock = !0, YY._setup(), YY
        },
        volume: function(YY) {
          var rY = this || IY;
          if (YY = parseFloat(YY), rY.ctx || iY(), "undefined" !== typeof YY && YY >= 0 && YY <= 1) {
            if (rY._volume = YY, rY._muted) return rY;
            rY.usingWebAudio && rY.masterGain.gain.setValueAtTime(YY, IY.ctx.currentTime);
            for (var DY = 0; DY < rY._howls.length; DY++)
              if (!rY._howls[DY]._webAudio)
                for (var FY = rY._howls[DY]._getSoundIds(), AY = 0; AY < FY.length; AY++) {
                  var RY = rY._howls[DY]._soundById(FY[AY]);
                  RY && RY._node && (RY._node.volume = RY._volume * YY)
                }
            return rY
          }
          return rY._volume
        },
        mute: function(YY) {
          var rY = this || IY;
          rY.ctx || iY(), rY._muted = YY, rY.usingWebAudio && rY.masterGain.gain.setValueAtTime(YY ? 0 : rY._volume, IY.ctx.currentTime);
          for (var DY = 0; DY < rY._howls.length; DY++)
            if (!rY._howls[DY]._webAudio)
              for (var FY = rY._howls[DY]._getSoundIds(), AY = 0; AY < FY.length; AY++) {
                var RY = rY._howls[DY]._soundById(FY[AY]);
                RY && RY._node && (RY._node.muted = !!YY || RY._muted)
              }
          return rY
        },
        stop: function() {
          for (var YY = this || IY, rY = 0; rY < YY._howls.length; rY++) YY._howls[rY].stop();
          return YY
        },
        unload: function() {
          for (var YY = this || IY, rY = YY._howls.length - 1; rY >= 0; rY--) YY._howls[rY].unload();
          return YY.usingWebAudio && YY.ctx && "undefined" !== typeof YY.ctx.close && (YY.ctx.close(), YY.ctx = null, iY()), YY
        },
        codecs: function(YY) {
          return (this || IY)._codecs[YY.replace(/^x-/, "")]
        },
        _setup: function() {
          var YY = this || IY;
          if (YY.state = YY.ctx && YY.ctx.state || "suspended", YY._autoSuspend(), !YY.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (YY._canPlayEvent = "canplay")
            } catch (rY) {
              YY.noAudio = !0
            } else YY.noAudio = !0;
          try {
            (new Audio).muted && (YY.noAudio = !0)
          } catch (rY) {}
          return YY.noAudio || YY._setupCodecs(), YY
        },
        _setupCodecs: function() {
          var YY = this || IY,
            rY = null;
          try {
            rY = "undefined" !== typeof Audio ? new Audio : null
          } catch (vY) {
            return YY
          }
          if (!rY || "function" !== typeof rY.canPlayType) return YY;
          var DY = rY.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            FY = YY._navigator ? YY._navigator.userAgent : "",
            AY = FY.match(/OPR\/([0-6].)/g),
            RY = AY && parseInt(AY[0].split("/")[1], 10) < 33,
            OY = -1 !== FY.indexOf("Safari") && -1 === FY.indexOf("Chrome"),
            gY = FY.match(/Version\/(.*?) /),
            aY = OY && gY && parseInt(gY[1], 10) < 15;
          return YY._codecs = {
            mp3: !(RY || !DY && !rY.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!DY,
            opus: !!rY.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!rY.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!rY.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(rY.canPlayType('audio/wav; codecs="1"') || rY.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!rY.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!rY.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(rY.canPlayType("audio/x-m4a;") || rY.canPlayType("audio/m4a;") || rY.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(rY.canPlayType("audio/x-m4b;") || rY.canPlayType("audio/m4b;") || rY.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(rY.canPlayType("audio/x-mp4;") || rY.canPlayType("audio/mp4;") || rY.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(aY || !rY.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(aY || !rY.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!rY.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(rY.canPlayType("audio/x-flac;") || rY.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, YY
        },
        _unlockAudio: function() {
          var YY = this || IY;
          if (!YY._audioUnlocked && YY.ctx) {
            YY._audioUnlocked = !1, YY.autoUnlock = !1, YY._mobileUnloaded || 44100 === YY.ctx.sampleRate || (YY._mobileUnloaded = !0, YY.unload()), YY._scratchBuffer = YY.ctx.createBuffer(1, 1, 22050);
            var rY = function(DY) {
              for (; YY._html5AudioPool.length < YY.html5PoolSize;) try {
                var FY = new Audio;
                FY._unlocked = !0, YY._releaseHtml5Audio(FY)
              } catch (DY) {
                YY.noAudio = !0;
                break
              }
              for (var AY = 0; AY < YY._howls.length; AY++)
                if (!YY._howls[AY]._webAudio)
                  for (var IY = YY._howls[AY]._getSoundIds(), RY = 0; RY < IY.length; RY++) {
                    var OY = YY._howls[AY]._soundById(IY[RY]);
                    OY && OY._node && !OY._node._unlocked && (OY._node._unlocked = !0, OY._node.load())
                  }
              YY._autoResume();
              var gY = YY.ctx.createBufferSource();
              gY.buffer = YY._scratchBuffer, gY.connect(YY.ctx.destination), "undefined" === typeof gY.start ? gY.noteOn(0) : gY.start(0), "function" === typeof YY.ctx.resume && YY.ctx.resume(), gY.onended = function() {
                gY.disconnect(0), YY._audioUnlocked = !0, document.removeEventListener("touchstart", rY, !0), document.removeEventListener("touchend", rY, !0), document.removeEventListener("click", rY, !0), document.removeEventListener("keydown", rY, !0);
                for (var DY = 0; DY < YY._howls.length; DY++) YY._howls[DY]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", rY, !0), document.addEventListener("touchend", rY, !0), document.addEventListener("click", rY, !0), document.addEventListener("keydown", rY, !0), YY
          }
        },
        _obtainHtml5Audio: function() {
          var YY = this || IY;
          if (YY._html5AudioPool.length) return YY._html5AudioPool.pop();
          var rY = (new Audio).play();
          return rY && "undefined" !== typeof Promise && (rY instanceof Promise || "function" === typeof rY.then) && rY.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(YY) {
          var rY = this || IY;
          return YY._unlocked && rY._html5AudioPool.push(YY), rY
        },
        _autoSuspend: function() {
          var YY = this;
          if (YY.autoSuspend && YY.ctx && "undefined" !== typeof YY.ctx.suspend && IY.usingWebAudio) {
            for (var rY = 0; rY < YY._howls.length; rY++)
              if (YY._howls[rY]._webAudio)
                for (var DY = 0; DY < YY._howls[rY]._sounds.length; DY++)
                  if (!YY._howls[rY]._sounds[DY].Wm) return YY;
            return YY._suspendTimer && clearTimeout(YY._suspendTimer), YY._suspendTimer = setTimeout((function() {
              if (YY.autoSuspend) {
                YY._suspendTimer = null, YY.state = "suspending";
                var rY = function() {
                  YY.state = "suspended", YY._resumeAfterSuspend && (delete YY._resumeAfterSuspend, YY._autoResume())
                };
                YY.ctx.suspend().then(rY, rY)
              }
            }), 3e4), YY
          }
        },
        _autoResume: function() {
          var YY = this;
          if (YY.ctx && "undefined" !== typeof YY.ctx.resume && IY.usingWebAudio) return "running" === YY.state && "interrupted" !== YY.ctx.state && YY._suspendTimer ? (clearTimeout(YY._suspendTimer), YY._suspendTimer = null) : "suspended" === YY.state || "running" === YY.state && "interrupted" === YY.ctx.state ? (YY.ctx.resume().then((function() {
            YY.state = "running";
            for (var rY = 0; rY < YY._howls.length; rY++) YY._howls[rY]._emit("resume")
          })), YY._suspendTimer && (clearTimeout(YY._suspendTimer), YY._suspendTimer = null)) : "suspending" === YY.state && (YY._resumeAfterSuspend = !0), YY
        }
      };
      var IY = new AY,
        RY = function(YY) {
          YY.src && 0 !== YY.src.length ? this.init(YY) : console.error("An array of source files must be passed with any new Howl.")
        };
      RY.prototype = {
        init: function(YY) {
          var rY = this;
          return IY.ctx || iY(), rY._autoplay = YY.autoplay || !1, rY._format = "string" !== typeof YY.format ? YY.format : [YY.format], rY._html5 = YY.html5 || !1, rY._muted = YY.mute || !1, rY._loop = YY.loop || !1, rY._pool = YY.pool || 5, rY._preload = "boolean" !== typeof YY.preload && "metadata" !== YY.preload || YY.preload, rY._rate = YY.rate || 1, rY._sprite = YY.sprite || {}, rY._src = "string" !== typeof YY.src ? YY.src : [YY.src], rY._volume = void 0 !== YY.volume ? YY.volume : 1, rY._xhr = {
            method: YY.xhr && YY.xhr.method ? YY.xhr.method : "GET",
            headers: YY.xhr && YY.xhr.headers ? YY.xhr.headers : null,
            withCredentials: !(!YY.xhr || !YY.xhr.withCredentials) && YY.xhr.withCredentials
          }, rY._duration = 0, rY._state = "unloaded", rY._sounds = [], rY._endTimers = {}, rY._queue = [], rY._playLock = !1, rY._onend = YY.onend ? [{
            iy: YY.onend
          }] : [], rY._onfade = YY.onfade ? [{
            iy: YY.onfade
          }] : [], rY._onload = YY.onload ? [{
            iy: YY.onload
          }] : [], rY._onloaderror = YY.onloaderror ? [{
            iy: YY.onloaderror
          }] : [], rY._onplayerror = YY.onplayerror ? [{
            iy: YY.onplayerror
          }] : [], rY._onpause = YY.onpause ? [{
            iy: YY.onpause
          }] : [], rY._onplay = YY.onplay ? [{
            iy: YY.onplay
          }] : [], rY._onstop = YY.onstop ? [{
            iy: YY.onstop
          }] : [], rY._onmute = YY.onmute ? [{
            iy: YY.onmute
          }] : [], rY._onvolume = YY.onvolume ? [{
            iy: YY.onvolume
          }] : [], rY._onrate = YY.onrate ? [{
            iy: YY.onrate
          }] : [], rY._onseek = YY.onseek ? [{
            iy: YY.onseek
          }] : [], rY._onunlock = YY.onunlock ? [{
            iy: YY.onunlock
          }] : [], rY._onresume = [], rY._webAudio = IY.usingWebAudio && !rY._html5, "undefined" !== typeof IY.ctx && IY.ctx && IY.autoUnlock && IY._unlockAudio(), IY._howls.push(rY), rY._autoplay && rY._queue.push({
            event: "play",
            action: function() {
              rY.play()
            }
          }), rY._preload && "none" !== rY._preload && rY.load(), rY
        },
        load: function() {
          var YY = this,
            rY = null;
          if (IY.noAudio) YY._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof YY._src && (YY._src = [YY._src]);
            for (var DY = 0; DY < YY._src.length; DY++) {
              var FY, AY;
              if (YY._format && YY._format[DY]) FY = YY._format[DY];
              else {
                if ("string" !== typeof(AY = YY._src[DY])) {
                  YY._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(FY = /^data:audio\/([^;,]+);/i.exec(AY)) || (FY = /\.([^.]+)$/.exec(AY.split("?", 1)[0])), FY && (FY = FY[1].toLowerCase())
              }
              if (FY || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), FY && IY.codecs(FY)) {
                rY = YY._src[DY];
                break
              }
            }
            if (rY) return YY._src = rY, YY._state = "loading", "https:" === window.location.protocol && "http:" === rY.slice(0, 5) && (YY._html5 = !0, YY._webAudio = !1), new OY(YY), YY._webAudio && aY(YY), YY;
            YY._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(YY, rY) {
          var DY = this,
            FY = null;
          if ("number" === typeof YY) FY = YY, YY = null;
          else {
            if ("string" === typeof YY && "loaded" === DY._state && !DY._sprite[YY]) return null;
            if ("undefined" === typeof YY && (YY = "__default", !DY._playLock)) {
              for (var AY = 0, RY = 0; RY < DY._sounds.length; RY++) DY._sounds[RY].Wm && !DY._sounds[RY]._ended && (AY++, FY = DY._sounds[RY]._id);
              1 === AY ? YY = null : FY = null
            }
          }
          var OY = FY ? DY._soundById(FY) : DY._inactiveSound();
          if (!OY) return null;
          if (FY && !YY && (YY = OY._sprite || "__default"), "loaded" !== DY._state) {
            OY._sprite = YY, OY._ended = !1;
            var gY = OY._id;
            return DY._queue.push({
              event: "play",
              action: function() {
                DY.play(gY)
              }
            }), gY
          }
          if (FY && !OY.Wm) return rY || DY._loadQueue("play"), OY._id;
          DY._webAudio && IY._autoResume();
          var aY = Math.max(0, OY._seek > 0 ? OY._seek : DY._sprite[YY][0] / 1e3),
            vY = Math.max(0, (DY._sprite[YY][0] + DY._sprite[YY][1]) / 1e3 - aY),
            uY = 1e3 * vY / Math.abs(OY._rate),
            sY = DY._sprite[YY][0] / 1e3,
            iY = (DY._sprite[YY][0] + DY._sprite[YY][1]) / 1e3;
          OY._sprite = YY, OY._ended = !1;
          var yY = function() {
            OY.Wm = !1, OY._seek = aY, OY._start = sY, OY._stop = iY, OY._loop = !(!OY._loop && !DY._sprite[YY][2])
          };
          if (!(aY >= iY)) {
            var QY = OY._node;
            if (DY._webAudio) {
              var oY = function() {
                DY._playLock = !1, yY(), DY._refreshBuffer(OY);
                var YY = OY._muted || DY._muted ? 0 : OY._volume;
                QY.gain.setValueAtTime(YY, IY.ctx.currentTime), OY._playStart = IY.ctx.currentTime, "undefined" === typeof QY.bufferSource.start ? OY._loop ? QY.bufferSource.noteGrainOn(0, aY, 86400) : QY.bufferSource.noteGrainOn(0, aY, vY) : OY._loop ? QY.bufferSource.start(0, aY, 86400) : QY.bufferSource.start(0, aY, vY), uY !== 1 / 0 && (DY._endTimers[OY._id] = setTimeout(DY._ended.bind(DY, OY), uY)), rY || setTimeout((function() {
                  DY._emit("play", OY._id), DY._loadQueue()
                }), 0)
              };
              "running" === IY.state && "interrupted" !== IY.ctx.state ? oY() : (DY._playLock = !0, DY.once("resume", oY), DY._clearTimer(OY._id))
            } else {
              var WY = function() {
                QY.currentTime = aY, QY.muted = OY._muted || DY._muted || IY._muted || QY.muted, QY.volume = OY._volume * IY.volume(), QY.playbackRate = OY._rate;
                try {
                  var FY = QY.play();
                  if (FY && "undefined" !== typeof Promise && (FY instanceof Promise || "function" === typeof FY.then) ? (DY._playLock = !0, yY(), FY.then((function() {
                      DY._playLock = !1, QY._unlocked = !0, rY ? DY._loadQueue() : DY._emit("play", OY._id)
                    })).catch((function() {
                      DY._playLock = !1, DY._emit("playerror", OY._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), OY._ended = !0, OY.Wm = !0
                    }))) : rY || (DY._playLock = !1, yY(), DY._emit("play", OY._id)), QY.playbackRate = OY._rate, QY.paused) return void DY._emit("playerror", OY._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== YY || OY._loop ? DY._endTimers[OY._id] = setTimeout(DY._ended.bind(DY, OY), uY) : (DY._endTimers[OY._id] = function() {
                    DY._ended(OY), QY.removeEventListener("ended", DY._endTimers[OY._id], !1)
                  }, QY.addEventListener("ended", DY._endTimers[OY._id], !1))
                } catch (AY) {
                  DY._emit("playerror", OY._id, AY)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === QY.src && (QY.src = DY._src, QY.load());
              var EY = window && window.ejecta || !QY.readyState && IY._navigator.isCocoonJS;
              if (QY.readyState >= 3 || EY) WY();
              else {
                DY._playLock = !0, DY._state = "loading";
                var mY = function() {
                  DY._state = "loaded", WY(), QY.removeEventListener(IY._canPlayEvent, mY, !1)
                };
                QY.addEventListener(IY._canPlayEvent, mY, !1), DY._clearTimer(OY._id)
              }
            }
            return OY._id
          }
          DY._ended(OY)
        },
        pause: function(YY) {
          var rY = this;
          if ("loaded" !== rY._state || rY._playLock) return rY._queue.push({
            event: "pause",
            action: function() {
              rY.pause(YY)
            }
          }), rY;
          for (var DY = rY._getSoundIds(YY), FY = 0; FY < DY.length; FY++) {
            rY._clearTimer(DY[FY]);
            var AY = rY._soundById(DY[FY]);
            if (AY && !AY.Wm && (AY._seek = rY.seek(DY[FY]), AY._rateSeek = 0, AY.Wm = !0, rY._stopFade(DY[FY]), AY._node))
              if (rY._webAudio) {
                if (!AY._node.bufferSource) continue;
                "undefined" === typeof AY._node.bufferSource.stop ? AY._node.bufferSource.noteOff(0) : AY._node.bufferSource.stop(0), rY._cleanBuffer(AY._node)
              } else isNaN(AY._node.duration) && AY._node.duration !== 1 / 0 || AY._node.pause();
            arguments[1] || rY._emit("pause", AY ? AY._id : null)
          }
          return rY
        },
        stop: function(YY, rY) {
          var DY = this;
          if ("loaded" !== DY._state || DY._playLock) return DY._queue.push({
            event: "stop",
            action: function() {
              DY.stop(YY)
            }
          }), DY;
          for (var FY = DY._getSoundIds(YY), AY = 0; AY < FY.length; AY++) {
            DY._clearTimer(FY[AY]);
            var IY = DY._soundById(FY[AY]);
            IY && (IY._seek = IY._start || 0, IY._rateSeek = 0, IY.Wm = !0, IY._ended = !0, DY._stopFade(FY[AY]), IY._node && (DY._webAudio ? IY._node.bufferSource && ("undefined" === typeof IY._node.bufferSource.stop ? IY._node.bufferSource.noteOff(0) : IY._node.bufferSource.stop(0), DY._cleanBuffer(IY._node)) : isNaN(IY._node.duration) && IY._node.duration !== 1 / 0 || (IY._node.currentTime = IY._start || 0, IY._node.pause(), IY._node.duration === 1 / 0 && DY._clearSound(IY._node))), rY || DY._emit("stop", IY._id))
          }
          return DY
        },
        mute: function(YY, rY) {
          var DY = this;
          if ("loaded" !== DY._state || DY._playLock) return DY._queue.push({
            event: "mute",
            action: function() {
              DY.mute(YY, rY)
            }
          }), DY;
          if ("undefined" === typeof rY) {
            if ("boolean" !== typeof YY) return DY._muted;
            DY._muted = YY
          }
          for (var FY = DY._getSoundIds(rY), AY = 0; AY < FY.length; AY++) {
            var RY = DY._soundById(FY[AY]);
            RY && (RY._muted = YY, RY._interval && DY._stopFade(RY._id), DY._webAudio && RY._node ? RY._node.gain.setValueAtTime(YY ? 0 : RY._volume, IY.ctx.currentTime) : RY._node && (RY._node.muted = !!IY._muted || YY), DY._emit("mute", RY._id))
          }
          return DY
        },
        volume: function() {
          var YY, rY, DY, FY = this,
            AY = arguments;
          if (0 === AY.length) return FY._volume;
          if (1 === AY.length || 2 === AY.length && "undefined" === typeof AY[1] ? FY._getSoundIds().indexOf(AY[0]) >= 0 ? rY = parseInt(AY[0], 10) : YY = parseFloat(AY[0]) : AY.length >= 2 && (YY = parseFloat(AY[0]), rY = parseInt(AY[1], 10)), !("undefined" !== typeof YY && YY >= 0 && YY <= 1)) return (DY = rY ? FY._soundById(rY) : FY._sounds[0]) ? DY._volume : 0;
          if ("loaded" !== FY._state || FY._playLock) return FY._queue.push({
            event: "volume",
            action: function() {
              FY.volume.apply(FY, AY)
            }
          }), FY;
          "undefined" === typeof rY && (FY._volume = YY), rY = FY._getSoundIds(rY);
          for (var RY = 0; RY < rY.length; RY++)(DY = FY._soundById(rY[RY])) && (DY._volume = YY, AY[2] || FY._stopFade(rY[RY]), FY._webAudio && DY._node && !DY._muted ? DY._node.gain.setValueAtTime(YY, IY.ctx.currentTime) : DY._node && !DY._muted && (DY._node.volume = YY * IY.volume()), FY._emit("volume", DY._id));
          return FY
        },
        fade: function(YY, rY, DY, FY) {
          var AY = this;
          if ("loaded" !== AY._state || AY._playLock) return AY._queue.push({
            event: "fade",
            action: function() {
              AY.fade(YY, rY, DY, FY)
            }
          }), AY;
          YY = Math.min(Math.max(0, parseFloat(YY)), 1), rY = Math.min(Math.max(0, parseFloat(rY)), 1), DY = parseFloat(DY), AY.volume(YY, FY);
          for (var RY = AY._getSoundIds(FY), OY = 0; OY < RY.length; OY++) {
            var gY = AY._soundById(RY[OY]);
            if (gY) {
              if (FY || AY._stopFade(RY[OY]), AY._webAudio && !gY._muted) {
                var aY = IY.ctx.currentTime,
                  vY = aY + DY / 1e3;
                gY._volume = YY, gY._node.gain.setValueAtTime(YY, aY), gY._node.gain.linearRampToValueAtTime(rY, vY)
              }
              AY._startFadeInterval(gY, YY, rY, DY, RY[OY], "undefined" === typeof FY)
            }
          }
          return AY
        },
        _startFadeInterval: function(YY, rY, DY, FY, AY, IY) {
          var RY = this,
            OY = rY,
            gY = DY - rY,
            aY = Math.abs(gY / .01),
            vY = Math.max(4, aY > 0 ? FY / aY : FY),
            uY = Date.now();
          YY._fadeTo = DY, YY._interval = setInterval((function() {
            var AY = (Date.now() - uY) / FY;
            uY = Date.now(), OY += gY * AY, OY = Math.round(100 * OY) / 100, OY = gY < 0 ? Math.max(DY, OY) : Math.min(DY, OY), RY._webAudio ? YY._volume = OY : RY.volume(OY, YY._id, !0), IY && (RY._volume = OY), (DY < rY && OY <= DY || DY > rY && OY >= DY) && (clearInterval(YY._interval), YY._interval = null, YY._fadeTo = null, RY.volume(DY, YY._id), RY._emit("fade", YY._id))
          }), vY)
        },
        _stopFade: function(YY) {
          var rY = this,
            DY = rY._soundById(YY);
          return DY && DY._interval && (rY._webAudio && DY._node.gain.cancelScheduledValues(IY.ctx.currentTime), clearInterval(DY._interval), DY._interval = null, rY.volume(DY._fadeTo, YY), DY._fadeTo = null, rY._emit("fade", YY)), rY
        },
        loop: function() {
          var YY, rY, DY, FY = this,
            AY = arguments;
          if (0 === AY.length) return FY._loop;
          if (1 === AY.length) {
            if ("boolean" !== typeof AY[0]) return !!(DY = FY._soundById(parseInt(AY[0], 10))) && DY._loop;
            YY = AY[0], FY._loop = YY
          } else 2 === AY.length && (YY = AY[0], rY = parseInt(AY[1], 10));
          for (var IY = FY._getSoundIds(rY), RY = 0; RY < IY.length; RY++)(DY = FY._soundById(IY[RY])) && (DY._loop = YY, FY._webAudio && DY._node && DY._node.bufferSource && (DY._node.bufferSource.loop = YY, YY && (DY._node.bufferSource.loopStart = DY._start || 0, DY._node.bufferSource.loopEnd = DY._stop, FY.playing(IY[RY]) && (FY.pause(IY[RY], !0), FY.play(IY[RY], !0)))));
          return FY
        },
        rate: function() {
          var YY, rY, DY, FY = this,
            AY = arguments;
          if (0 === AY.length) rY = FY._sounds[0]._id;
          else if (1 === AY.length) {
            FY._getSoundIds().indexOf(AY[0]) >= 0 ? rY = parseInt(AY[0], 10) : YY = parseFloat(AY[0])
          } else 2 === AY.length && (YY = parseFloat(AY[0]), rY = parseInt(AY[1], 10));
          if ("number" !== typeof YY) return (DY = FY._soundById(rY)) ? DY._rate : FY._rate;
          if ("loaded" !== FY._state || FY._playLock) return FY._queue.push({
            event: "rate",
            action: function() {
              FY.rate.apply(FY, AY)
            }
          }), FY;
          "undefined" === typeof rY && (FY._rate = YY), rY = FY._getSoundIds(rY);
          for (var RY = 0; RY < rY.length; RY++)
            if (DY = FY._soundById(rY[RY])) {
              FY.playing(rY[RY]) && (DY._rateSeek = FY.seek(rY[RY]), DY._playStart = FY._webAudio ? IY.ctx.currentTime : DY._playStart), DY._rate = YY, FY._webAudio && DY._node && DY._node.bufferSource ? DY._node.bufferSource.playbackRate.setValueAtTime(YY, IY.ctx.currentTime) : DY._node && (DY._node.playbackRate = YY);
              var OY = FY.seek(rY[RY]),
                gY = 1e3 * ((FY._sprite[DY._sprite][0] + FY._sprite[DY._sprite][1]) / 1e3 - OY) / Math.abs(DY._rate);
              !FY._endTimers[rY[RY]] && DY.Wm || (FY._clearTimer(rY[RY]), FY._endTimers[rY[RY]] = setTimeout(FY._ended.bind(FY, DY), gY)), FY._emit("rate", DY._id)
            } return FY
        },
        seek: function() {
          var YY, rY, DY = this,
            FY = arguments;
          if (0 === FY.length) DY._sounds.length && (rY = DY._sounds[0]._id);
          else if (1 === FY.length) {
            DY._getSoundIds().indexOf(FY[0]) >= 0 ? rY = parseInt(FY[0], 10) : DY._sounds.length && (rY = DY._sounds[0]._id, YY = parseFloat(FY[0]))
          } else 2 === FY.length && (YY = parseFloat(FY[0]), rY = parseInt(FY[1], 10));
          if ("undefined" === typeof rY) return 0;
          if ("number" === typeof YY && ("loaded" !== DY._state || DY._playLock)) return DY._queue.push({
            event: "seek",
            action: function() {
              DY.seek.apply(DY, FY)
            }
          }), DY;
          var AY = DY._soundById(rY);
          if (AY) {
            if (!("number" === typeof YY && YY >= 0)) {
              if (DY._webAudio) {
                var RY = DY.playing(rY) ? IY.ctx.currentTime - AY._playStart : 0,
                  OY = AY._rateSeek ? AY._rateSeek - AY._seek : 0;
                return AY._seek + (OY + RY * Math.abs(AY._rate))
              }
              return AY._node.currentTime
            }
            var gY = DY.playing(rY);
            gY && DY.pause(rY, !0), AY._seek = YY, AY._ended = !1, DY._clearTimer(rY), DY._webAudio || !AY._node || isNaN(AY._node.duration) || (AY._node.currentTime = YY);
            var aY = function() {
              gY && DY.play(rY, !0), DY._emit("seek", rY)
            };
            if (gY && !DY._webAudio) {
              var vY = function() {
                DY._playLock ? setTimeout(vY, 0) : aY()
              };
              setTimeout(vY, 0)
            } else aY()
          }
          return DY
        },
        playing: function(YY) {
          var rY = this;
          if ("number" === typeof YY) {
            var DY = rY._soundById(YY);
            return !!DY && !DY.Wm
          }
          for (var FY = 0; FY < rY._sounds.length; FY++)
            if (!rY._sounds[FY].Wm) return !0;
          return !1
        },
        duration: function(YY) {
          var rY = this,
            DY = rY._duration,
            FY = rY._soundById(YY);
          return FY && (DY = rY._sprite[FY._sprite][1] / 1e3), DY
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var YY = this, rY = YY._sounds, DY = 0; DY < rY.length; DY++) rY[DY].Wm || YY.stop(rY[DY]._id), YY._webAudio || (YY._clearSound(rY[DY]._node), rY[DY]._node.removeEventListener("error", rY[DY]._errorFn, !1), rY[DY]._node.removeEventListener(IY._canPlayEvent, rY[DY]._loadFn, !1), rY[DY]._node.removeEventListener("ended", rY[DY]._endFn, !1), IY._releaseHtml5Audio(rY[DY]._node)), delete rY[DY]._node, YY._clearTimer(rY[DY]._id);
          var FY = IY._howls.indexOf(YY);
          FY >= 0 && IY._howls.splice(FY, 1);
          var AY = !0;
          for (DY = 0; DY < IY._howls.length; DY++)
            if (IY._howls[DY]._src === YY._src || YY._src.indexOf(IY._howls[DY]._src) >= 0) {
              AY = !1;
              break
            } return gY && AY && delete gY[YY._src], IY.noAudio = !1, YY._state = "unloaded", YY._sounds = [], YY = null, null
        },
        on: function(YY, rY, DY, FY) {
          var AY = this["_on" + YY];
          return "function" === typeof rY && AY.push(FY ? {
            id: DY,
            iy: rY,
            once: FY
          } : {
            id: DY,
            iy: rY
          }), this
        },
        off: function(YY, rY, DY) {
          var FY = this,
            AY = FY["_on" + YY],
            IY = 0;
          if ("number" === typeof rY && (DY = rY, rY = null), rY || DY)
            for (IY = 0; IY < AY.length; IY++) {
              var RY = DY === AY[IY].id;
              if (rY === AY[IY].iy && RY || !rY && RY) {
                AY.splice(IY, 1);
                break
              }
            } else if (YY) FY["_on" + YY] = [];
            else {
              var OY = Object.keys(FY);
              for (IY = 0; IY < OY.length; IY++) 0 === OY[IY].indexOf("_on") && Array.isArray(FY[OY[IY]]) && (FY[OY[IY]] = [])
            } return FY
        },
        once: function(YY, rY, DY) {
          return this.on(YY, rY, DY, 1), this
        },
        _emit: function(YY, rY, DY) {
          for (var FY = this, AY = FY["_on" + YY], IY = AY.length - 1; IY >= 0; IY--) AY[IY].id && AY[IY].id !== rY && "load" !== YY || (setTimeout(function(YY) {
            YY.call(this, rY, DY)
          }.bind(FY, AY[IY].iy), 0), AY[IY].once && FY.off(YY, AY[IY].iy, AY[IY].id));
          return FY._loadQueue(YY), FY
        },
        _loadQueue: function(YY) {
          var rY = this;
          if (rY._queue.length > 0) {
            var DY = rY._queue[0];
            DY.event === YY && (rY._queue.shift(), rY._loadQueue()), YY || DY.action()
          }
          return rY
        },
        _ended: function(YY) {
          var rY = this,
            DY = YY._sprite;
          if (!rY._webAudio && YY._node && !YY._node.paused && !YY._node.ended && YY._node.currentTime < YY._stop) return setTimeout(rY._ended.bind(rY, YY), 100), rY;
          var FY = !(!YY._loop && !rY._sprite[DY][2]);
          if (rY._emit("end", YY._id), !rY._webAudio && FY && rY.stop(YY._id, !0).play(YY._id), rY._webAudio && FY) {
            rY._emit("play", YY._id), YY._seek = YY._start || 0, YY._rateSeek = 0, YY._playStart = IY.ctx.currentTime;
            var AY = 1e3 * (YY._stop - YY._start) / Math.abs(YY._rate);
            rY._endTimers[YY._id] = setTimeout(rY._ended.bind(rY, YY), AY)
          }
          return rY._webAudio && !FY && (YY.Wm = !0, YY._ended = !0, YY._seek = YY._start || 0, YY._rateSeek = 0, rY._clearTimer(YY._id), rY._cleanBuffer(YY._node), IY._autoSuspend()), rY._webAudio || FY || rY.stop(YY._id, !0), rY
        },
        _clearTimer: function(YY) {
          var rY = this;
          if (rY._endTimers[YY]) {
            if ("function" !== typeof rY._endTimers[YY]) clearTimeout(rY._endTimers[YY]);
            else {
              var DY = rY._soundById(YY);
              DY && DY._node && DY._node.removeEventListener("ended", rY._endTimers[YY], !1)
            }
            delete rY._endTimers[YY]
          }
          return rY
        },
        _soundById: function(YY) {
          for (var rY = this, DY = 0; DY < rY._sounds.length; DY++)
            if (YY === rY._sounds[DY]._id) return rY._sounds[DY];
          return null
        },
        _inactiveSound: function() {
          var YY = this;
          YY._drain();
          for (var rY = 0; rY < YY._sounds.length; rY++)
            if (YY._sounds[rY]._ended) return YY._sounds[rY].reset();
          return new OY(YY)
        },
        _drain: function() {
          var YY = this,
            rY = YY._pool,
            DY = 0,
            FY = 0;
          if (!(YY._sounds.length < rY)) {
            for (FY = 0; FY < YY._sounds.length; FY++) YY._sounds[FY]._ended && DY++;
            for (FY = YY._sounds.length - 1; FY >= 0; FY--) {
              if (DY <= rY) return;
              YY._sounds[FY]._ended && (YY._webAudio && YY._sounds[FY]._node && YY._sounds[FY]._node.disconnect(0), YY._sounds.splice(FY, 1), DY--)
            }
          }
        },
        _getSoundIds: function(YY) {
          if ("undefined" === typeof YY) {
            for (var rY = [], DY = 0; DY < this._sounds.length; DY++) rY.push(this._sounds[DY]._id);
            return rY
          }
          return [YY]
        },
        _refreshBuffer: function(YY) {
          return YY._node.bufferSource = IY.ctx.createBufferSource(), YY._node.bufferSource.buffer = gY[this._src], YY._panner ? YY._node.bufferSource.connect(YY._panner) : YY._node.bufferSource.connect(YY._node), YY._node.bufferSource.loop = YY._loop, YY._loop && (YY._node.bufferSource.loopStart = YY._start || 0, YY._node.bufferSource.loopEnd = YY._stop || 0), YY._node.bufferSource.playbackRate.setValueAtTime(YY._rate, IY.ctx.currentTime), this
        },
        _cleanBuffer: function(YY) {
          var rY = IY._navigator && IY._navigator.vendor.indexOf("Apple") >= 0;
          if (IY._scratchBuffer && YY.bufferSource && (YY.bufferSource.onended = null, YY.bufferSource.disconnect(0), rY)) try {
            YY.bufferSource.buffer = IY._scratchBuffer
          } catch (DY) {}
          return YY.bufferSource = null, this
        },
        _clearSound: function(YY) {
          /MSIE |Trident\//.test(IY._navigator && IY._navigator.userAgent) || (YY.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var OY = function(YY) {
        this._parent = YY, this.init()
      };
      OY.prototype = {
        init: function() {
          var YY = this,
            rY = YY._parent;
          return YY._muted = rY._muted, YY._loop = rY._loop, YY._volume = rY._volume, YY._rate = rY._rate, YY._seek = 0, YY.Wm = !0, YY._ended = !0, YY._sprite = "__default", YY._id = ++IY._counter, rY._sounds.push(YY), YY.create(), YY
        },
        create: function() {
          var YY = this,
            rY = YY._parent,
            DY = IY._muted || YY._muted || YY._parent._muted ? 0 : YY._volume;
          return rY._webAudio ? (YY._node = "undefined" === typeof IY.ctx.createGain ? IY.ctx.createGainNode() : IY.ctx.createGain(), YY._node.gain.setValueAtTime(DY, IY.ctx.currentTime), YY._node.paused = !0, YY._node.connect(IY.masterGain)) : IY.noAudio || (YY._node = IY._obtainHtml5Audio(), YY._errorFn = YY._errorListener.bind(YY), YY._node.addEventListener("error", YY._errorFn, !1), YY._loadFn = YY._loadListener.bind(YY), YY._node.addEventListener(IY._canPlayEvent, YY._loadFn, !1), YY._endFn = YY._endListener.bind(YY), YY._node.addEventListener("ended", YY._endFn, !1), YY._node.src = rY._src, YY._node.preload = !0 === rY._preload ? "auto" : rY._preload, YY._node.volume = DY * IY.volume(), YY._node.load()), YY
        },
        reset: function() {
          var YY = this,
            rY = YY._parent;
          return YY._muted = rY._muted, YY._loop = rY._loop, YY._volume = rY._volume, YY._rate = rY._rate, YY._seek = 0, YY._rateSeek = 0, YY.Wm = !0, YY._ended = !0, YY._sprite = "__default", YY._id = ++IY._counter, YY
        },
        _errorListener: function() {
          var YY = this;
          YY._parent._emit("loaderror", YY._id, YY._node.error ? YY._node.error.code : 0), YY._node.removeEventListener("error", YY._errorFn, !1)
        },
        _loadListener: function() {
          var YY = this,
            rY = YY._parent;
          rY._duration = Math.ceil(10 * YY._node.duration) / 10, 0 === Object.keys(rY._sprite).length && (rY._sprite = {
            __default: [0, 1e3 * rY._duration]
          }), "loaded" !== rY._state && (rY._state = "loaded", rY._emit("load"), rY._loadQueue()), YY._node.removeEventListener(IY._canPlayEvent, YY._loadFn, !1)
        },
        _endListener: function() {
          var YY = this,
            rY = YY._parent;
          rY._duration === 1 / 0 && (rY._duration = Math.ceil(10 * YY._node.duration) / 10, rY._sprite.__default[1] === 1 / 0 && (rY._sprite.__default[1] = 1e3 * rY._duration), rY._ended(YY)), YY._node.removeEventListener("ended", YY._endFn, !1)
        }
      };
      var gY = {},
        aY = function(YY) {
          var rY = YY._src;
          if (gY[rY]) return YY._duration = gY[rY].duration, void sY(YY);
          if (/^data:[^;]+;base64,/.test(rY)) {
            for (var DY = atob(rY.split(",")[1]), FY = new Uint8Array(DY.length), AY = 0; AY < DY.length; ++AY) FY[AY] = DY.charCodeAt(AY);
            uY(FY.buffer, YY)
          } else {
            var IY = new XMLHttpRequest;
            IY.open(YY._xhr.method, rY, !0), IY.withCredentials = YY._xhr.withCredentials, IY.responseType = "arraybuffer", YY._xhr.headers && Object.keys(YY._xhr.headers).forEach((function(rY) {
              IY.setRequestHeader(rY, YY._xhr.headers[rY])
            })), IY.onload = function() {
              var rY = (IY.status + "")[0];
              "0" === rY || "2" === rY || "3" === rY ? uY(IY.response, YY) : YY._emit("loaderror", null, "Failed loading audio file with status: " + IY.status + ".")
            }, IY.onerror = function() {
              YY._webAudio && (YY._html5 = !0, YY._webAudio = !1, YY._sounds = [], delete gY[rY], YY.load())
            }, vY(IY)
          }
        },
        vY = function(YY) {
          try {
            YY.send()
          } catch (rY) {
            YY.onerror()
          }
        },
        uY = function(YY, rY) {
          var DY = function() {
              rY._emit("loaderror", null, "Decoding audio data failed.")
            },
            FY = function(YY) {
              YY && rY._sounds.length > 0 ? (gY[rY._src] = YY, sY(rY, YY)) : DY()
            };
          "undefined" !== typeof Promise && 1 === IY.ctx.decodeAudioData.length ? IY.ctx.decodeAudioData(YY).then(FY).catch(DY) : IY.ctx.decodeAudioData(YY, FY, DY)
        },
        sY = function(YY, rY) {
          rY && !YY._duration && (YY._duration = rY.duration), 0 === Object.keys(YY._sprite).length && (YY._sprite = {
            __default: [0, 1e3 * YY._duration]
          }), "loaded" !== YY._state && (YY._state = "loaded", YY._emit("load"), YY._loadQueue())
        },
        iY = function() {
          if (IY.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? IY.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? IY.ctx = new webkitAudioContext : IY.usingWebAudio = !1
            } catch (AY) {
              IY.usingWebAudio = !1
            }
            IY.ctx || (IY.usingWebAudio = !1);
            var YY = /iP(hone|od|ad)/.test(IY._navigator && IY._navigator.platform),
              rY = IY._navigator && IY._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              DY = rY ? parseInt(rY[1], 10) : null;
            if (YY && DY && DY < 9) {
              var FY = /safari/.test(IY._navigator && IY._navigator.userAgent.toLowerCase());
              IY._navigator && !FY && (IY.usingWebAudio = !1)
            }
            IY.usingWebAudio && (IY.masterGain = "undefined" === typeof IY.ctx.createGain ? IY.ctx.createGainNode() : IY.ctx.createGain(), IY.masterGain.gain.setValueAtTime(IY._muted ? 0 : IY._volume, IY.ctx.currentTime), IY.masterGain.connect(IY.ctx.destination)), IY._setup()
          }
        };
      void 0 === (FY = function() {
        return {
          Howler: IY,
          Howl: RY
        }
      }.apply(rY, [])) || (YY.exports = FY), rY.Howler = IY, rY.Howl = RY, "undefined" !== typeof DY.g ? (DY.g.HowlerGlobal = AY, DY.g.Howler = IY, DY.g.Howl = RY, DY.g.Sound = OY) : "undefined" !== typeof window && (window.HowlerGlobal = AY, window.Howler = IY, window.Howl = RY, window.Sound = OY)
    }(),
    function() {
      var YY;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(YY) {
        var rY = this;
        if (!rY.ctx || !rY.ctx.listener) return rY;
        for (var DY = rY._howls.length - 1; DY >= 0; DY--) rY._howls[DY].stereo(YY);
        return rY
      }, HowlerGlobal.prototype.pos = function(YY, rY, DY) {
        var FY = this;
        return FY.ctx && FY.ctx.listener ? (rY = "number" !== typeof rY ? FY._pos[1] : rY, DY = "number" !== typeof DY ? FY._pos[2] : DY, "number" !== typeof YY ? FY._pos : (FY._pos = [YY, rY, DY], "undefined" !== typeof FY.ctx.listener.positionX ? (FY.ctx.listener.positionX.setTargetAtTime(FY._pos[0], Howler.ctx.currentTime, .1), FY.ctx.listener.positionY.setTargetAtTime(FY._pos[1], Howler.ctx.currentTime, .1), FY.ctx.listener.positionZ.setTargetAtTime(FY._pos[2], Howler.ctx.currentTime, .1)) : FY.ctx.listener.setPosition(FY._pos[0], FY._pos[1], FY._pos[2]), FY)) : FY
      }, HowlerGlobal.prototype.orientation = function(YY, rY, DY, FY, AY, IY) {
        var RY = this;
        if (!RY.ctx || !RY.ctx.listener) return RY;
        var OY = RY._orientation;
        return rY = "number" !== typeof rY ? OY[1] : rY, DY = "number" !== typeof DY ? OY[2] : DY, FY = "number" !== typeof FY ? OY[3] : FY, AY = "number" !== typeof AY ? OY[4] : AY, IY = "number" !== typeof IY ? OY[5] : IY, "number" !== typeof YY ? OY : (RY._orientation = [YY, rY, DY, FY, AY, IY], "undefined" !== typeof RY.ctx.listener.forwardX ? (RY.ctx.listener.forwardX.setTargetAtTime(YY, Howler.ctx.currentTime, .1), RY.ctx.listener.forwardY.setTargetAtTime(rY, Howler.ctx.currentTime, .1), RY.ctx.listener.forwardZ.setTargetAtTime(DY, Howler.ctx.currentTime, .1), RY.ctx.listener.upX.setTargetAtTime(FY, Howler.ctx.currentTime, .1), RY.ctx.listener.upY.setTargetAtTime(AY, Howler.ctx.currentTime, .1), RY.ctx.listener.upZ.setTargetAtTime(IY, Howler.ctx.currentTime, .1)) : RY.ctx.listener.setOrientation(YY, rY, DY, FY, AY, IY), RY)
      }, Howl.prototype.init = (YY = Howl.prototype.init, function(rY) {
        var DY = this;
        return DY._orientation = rY.orientation || [1, 0, 0], DY._stereo = rY.stereo || null, DY._pos = rY.pos || null, DY._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof rY.coneInnerAngle ? rY.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof rY.coneOuterAngle ? rY.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof rY.coneOuterGain ? rY.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof rY.distanceModel ? rY.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof rY.maxDistance ? rY.maxDistance : 1e4,
          panningModel: "undefined" !== typeof rY.panningModel ? rY.panningModel : "HRTF",
          refDistance: "undefined" !== typeof rY.refDistance ? rY.refDistance : 1,
          rolloffFactor: "undefined" !== typeof rY.rolloffFactor ? rY.rolloffFactor : 1
        }, DY._onstereo = rY.onstereo ? [{
          iy: rY.onstereo
        }] : [], DY._onpos = rY.onpos ? [{
          iy: rY.onpos
        }] : [], DY._onorientation = rY.onorientation ? [{
          iy: rY.onorientation
        }] : [], YY.call(this, rY)
      }), Howl.prototype.stereo = function(YY, DY) {
        var FY = this;
        if (!FY._webAudio) return FY;
        if ("loaded" !== FY._state) return FY._queue.push({
          event: "stereo",
          action: function() {
            FY.stereo(YY, DY)
          }
        }), FY;
        var AY = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof DY) {
          if ("number" !== typeof YY) return FY._stereo;
          FY._stereo = YY, FY._pos = [YY, 0, 0]
        }
        for (var IY = FY._getSoundIds(DY), RY = 0; RY < IY.length; RY++) {
          var OY = FY._soundById(IY[RY]);
          if (OY) {
            if ("number" !== typeof YY) return OY._stereo;
            OY._stereo = YY, OY._pos = [YY, 0, 0], OY._node && (OY._pannerAttr.panningModel = "equalpower", OY._panner && OY._panner.pan || rY(OY, AY), "spatial" === AY ? "undefined" !== typeof OY._panner.positionX ? (OY._panner.positionX.setValueAtTime(YY, Howler.ctx.currentTime), OY._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), OY._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : OY._panner.setPosition(YY, 0, 0) : OY._panner.pan.setValueAtTime(YY, Howler.ctx.currentTime)), FY._emit("stereo", OY._id)
          }
        }
        return FY
      }, Howl.prototype.pos = function(YY, DY, FY, AY) {
        var IY = this;
        if (!IY._webAudio) return IY;
        if ("loaded" !== IY._state) return IY._queue.push({
          event: "pos",
          action: function() {
            IY.pos(YY, DY, FY, AY)
          }
        }), IY;
        if (DY = "number" !== typeof DY ? 0 : DY, FY = "number" !== typeof FY ? -.5 : FY, "undefined" === typeof AY) {
          if ("number" !== typeof YY) return IY._pos;
          IY._pos = [YY, DY, FY]
        }
        for (var RY = IY._getSoundIds(AY), OY = 0; OY < RY.length; OY++) {
          var gY = IY._soundById(RY[OY]);
          if (gY) {
            if ("number" !== typeof YY) return gY._pos;
            gY._pos = [YY, DY, FY], gY._node && (gY._panner && !gY._panner.pan || rY(gY, "spatial"), "undefined" !== typeof gY._panner.positionX ? (gY._panner.positionX.setValueAtTime(YY, Howler.ctx.currentTime), gY._panner.positionY.setValueAtTime(DY, Howler.ctx.currentTime), gY._panner.positionZ.setValueAtTime(FY, Howler.ctx.currentTime)) : gY._panner.setPosition(YY, DY, FY)), IY._emit("pos", gY._id)
          }
        }
        return IY
      }, Howl.prototype.orientation = function(YY, DY, FY, AY) {
        var IY = this;
        if (!IY._webAudio) return IY;
        if ("loaded" !== IY._state) return IY._queue.push({
          event: "orientation",
          action: function() {
            IY.orientation(YY, DY, FY, AY)
          }
        }), IY;
        if (DY = "number" !== typeof DY ? IY._orientation[1] : DY, FY = "number" !== typeof FY ? IY._orientation[2] : FY, "undefined" === typeof AY) {
          if ("number" !== typeof YY) return IY._orientation;
          IY._orientation = [YY, DY, FY]
        }
        for (var RY = IY._getSoundIds(AY), OY = 0; OY < RY.length; OY++) {
          var gY = IY._soundById(RY[OY]);
          if (gY) {
            if ("number" !== typeof YY) return gY._orientation;
            gY._orientation = [YY, DY, FY], gY._node && (gY._panner || (gY._pos || (gY._pos = IY._pos || [0, 0, -.5]), rY(gY, "spatial")), "undefined" !== typeof gY._panner.orientationX ? (gY._panner.orientationX.setValueAtTime(YY, Howler.ctx.currentTime), gY._panner.orientationY.setValueAtTime(DY, Howler.ctx.currentTime), gY._panner.orientationZ.setValueAtTime(FY, Howler.ctx.currentTime)) : gY._panner.setOrientation(YY, DY, FY)), IY._emit("orientation", gY._id)
          }
        }
        return IY
      }, Howl.prototype.pannerAttr = function() {
        var YY, DY, FY, AY = this,
          IY = arguments;
        if (!AY._webAudio) return AY;
        if (0 === IY.length) return AY._pannerAttr;
        if (1 === IY.length) {
          if ("object" !== typeof IY[0]) return (FY = AY._soundById(parseInt(IY[0], 10))) ? FY._pannerAttr : AY._pannerAttr;
          YY = IY[0], "undefined" === typeof DY && (YY.pannerAttr || (YY.pannerAttr = {
            coneInnerAngle: YY.coneInnerAngle,
            coneOuterAngle: YY.coneOuterAngle,
            coneOuterGain: YY.coneOuterGain,
            distanceModel: YY.distanceModel,
            maxDistance: YY.maxDistance,
            refDistance: YY.refDistance,
            rolloffFactor: YY.rolloffFactor,
            panningModel: YY.panningModel
          }), AY._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof YY.pannerAttr.coneInnerAngle ? YY.pannerAttr.coneInnerAngle : AY._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof YY.pannerAttr.coneOuterAngle ? YY.pannerAttr.coneOuterAngle : AY._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof YY.pannerAttr.coneOuterGain ? YY.pannerAttr.coneOuterGain : AY._coneOuterGain,
            distanceModel: "undefined" !== typeof YY.pannerAttr.distanceModel ? YY.pannerAttr.distanceModel : AY._distanceModel,
            maxDistance: "undefined" !== typeof YY.pannerAttr.maxDistance ? YY.pannerAttr.maxDistance : AY._maxDistance,
            refDistance: "undefined" !== typeof YY.pannerAttr.refDistance ? YY.pannerAttr.refDistance : AY._refDistance,
            rolloffFactor: "undefined" !== typeof YY.pannerAttr.rolloffFactor ? YY.pannerAttr.rolloffFactor : AY._rolloffFactor,
            panningModel: "undefined" !== typeof YY.pannerAttr.panningModel ? YY.pannerAttr.panningModel : AY._panningModel
          })
        } else 2 === IY.length && (YY = IY[0], DY = parseInt(IY[1], 10));
        for (var RY = AY._getSoundIds(DY), OY = 0; OY < RY.length; OY++)
          if (FY = AY._soundById(RY[OY])) {
            var gY = FY._pannerAttr;
            gY = {
              coneInnerAngle: "undefined" !== typeof YY.coneInnerAngle ? YY.coneInnerAngle : gY.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof YY.coneOuterAngle ? YY.coneOuterAngle : gY.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof YY.coneOuterGain ? YY.coneOuterGain : gY.coneOuterGain,
              distanceModel: "undefined" !== typeof YY.distanceModel ? YY.distanceModel : gY.distanceModel,
              maxDistance: "undefined" !== typeof YY.maxDistance ? YY.maxDistance : gY.maxDistance,
              refDistance: "undefined" !== typeof YY.refDistance ? YY.refDistance : gY.refDistance,
              rolloffFactor: "undefined" !== typeof YY.rolloffFactor ? YY.rolloffFactor : gY.rolloffFactor,
              panningModel: "undefined" !== typeof YY.panningModel ? YY.panningModel : gY.panningModel
            };
            var aY = FY._panner;
            aY ? (aY.coneInnerAngle = gY.coneInnerAngle, aY.coneOuterAngle = gY.coneOuterAngle, aY.coneOuterGain = gY.coneOuterGain, aY.distanceModel = gY.distanceModel, aY.maxDistance = gY.maxDistance, aY.refDistance = gY.refDistance, aY.rolloffFactor = gY.rolloffFactor, aY.panningModel = gY.panningModel) : (FY._pos || (FY._pos = AY._pos || [0, 0, -.5]), rY(FY, "spatial"))
          } return AY
      }, Sound.prototype.init = function(YY) {
        return function() {
          var rY = this,
            DY = rY._parent;
          rY._orientation = DY._orientation, rY._stereo = DY._stereo, rY._pos = DY._pos, rY._pannerAttr = DY._pannerAttr, YY.call(this), rY._stereo ? DY.stereo(rY._stereo) : rY._pos && DY.pos(rY._pos[0], rY._pos[1], rY._pos[2], rY._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(YY) {
        return function() {
          var rY = this,
            DY = rY._parent;
          return rY._orientation = DY._orientation, rY._stereo = DY._stereo, rY._pos = DY._pos, rY._pannerAttr = DY._pannerAttr, rY._stereo ? DY.stereo(rY._stereo) : rY._pos ? DY.pos(rY._pos[0], rY._pos[1], rY._pos[2], rY._id) : rY._panner && (rY._panner.disconnect(0), rY._panner = void 0, DY._refreshBuffer(rY)), YY.call(this)
        }
      }(Sound.prototype.reset);
      var rY = function(YY, rY) {
        "spatial" === (rY = rY || "spatial") ? (YY._panner = Howler.ctx.createPanner(), YY._panner.coneInnerAngle = YY._pannerAttr.coneInnerAngle, YY._panner.coneOuterAngle = YY._pannerAttr.coneOuterAngle, YY._panner.coneOuterGain = YY._pannerAttr.coneOuterGain, YY._panner.distanceModel = YY._pannerAttr.distanceModel, YY._panner.maxDistance = YY._pannerAttr.maxDistance, YY._panner.refDistance = YY._pannerAttr.refDistance, YY._panner.rolloffFactor = YY._pannerAttr.rolloffFactor, YY._panner.panningModel = YY._pannerAttr.panningModel, "undefined" !== typeof YY._panner.positionX ? (YY._panner.positionX.setValueAtTime(YY._pos[0], Howler.ctx.currentTime), YY._panner.positionY.setValueAtTime(YY._pos[1], Howler.ctx.currentTime), YY._panner.positionZ.setValueAtTime(YY._pos[2], Howler.ctx.currentTime)) : YY._panner.setPosition(YY._pos[0], YY._pos[1], YY._pos[2]), "undefined" !== typeof YY._panner.orientationX ? (YY._panner.orientationX.setValueAtTime(YY._orientation[0], Howler.ctx.currentTime), YY._panner.orientationY.setValueAtTime(YY._orientation[1], Howler.ctx.currentTime), YY._panner.orientationZ.setValueAtTime(YY._orientation[2], Howler.ctx.currentTime)) : YY._panner.setOrientation(YY._orientation[0], YY._orientation[1], YY._orientation[2])) : (YY._panner = Howler.ctx.createStereoPanner(), YY._panner.pan.setValueAtTime(YY._stereo, Howler.ctx.currentTime)), YY._panner.connect(YY._node), YY.Wm || YY._parent.pause(YY._id, !0).play(YY._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);