/*! For license information please see fecih8.111.3553f665.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5383: (UU, XU, zU) => {
    var cU;
    ! function() {
      var yU = function() {
        this.init()
      };
      yU.prototype = {
        init: function() {
          var UU = this || QU;
          return UU._counter = 1e3, UU._html5AudioPool = [], UU.html5PoolSize = 10, UU._codecs = {}, UU._howls = [], UU._muted = !1, UU._volume = 1, UU._canPlayEvent = "canplaythrough", UU._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, UU.masterGain = null, UU.noAudio = !1, UU.usingWebAudio = !0, UU.autoSuspend = !0, UU.ctx = null, UU.autoUnlock = !0, UU._setup(), UU
        },
        volume: function(UU) {
          var XU = this || QU;
          if (UU = parseFloat(UU), XU.ctx || IU(), "undefined" !== typeof UU && UU >= 0 && UU <= 1) {
            if (XU._volume = UU, XU._muted) return XU;
            XU.usingWebAudio && XU.masterGain.gain.setValueAtTime(UU, QU.ctx.currentTime);
            for (var zU = 0; zU < XU._howls.length; zU++)
              if (!XU._howls[zU]._webAudio)
                for (var cU = XU._howls[zU]._getSoundIds(), yU = 0; yU < cU.length; yU++) {
                  var AU = XU._howls[zU]._soundById(cU[yU]);
                  AU && AU._node && (AU._node.volume = AU._volume * UU)
                }
            return XU
          }
          return XU._volume
        },
        mute: function(UU) {
          var XU = this || QU;
          XU.ctx || IU(), XU._muted = UU, XU.usingWebAudio && XU.masterGain.gain.setValueAtTime(UU ? 0 : XU._volume, QU.ctx.currentTime);
          for (var zU = 0; zU < XU._howls.length; zU++)
            if (!XU._howls[zU]._webAudio)
              for (var cU = XU._howls[zU]._getSoundIds(), yU = 0; yU < cU.length; yU++) {
                var AU = XU._howls[zU]._soundById(cU[yU]);
                AU && AU._node && (AU._node.muted = !!UU || AU._muted)
              }
          return XU
        },
        stop: function() {
          for (var UU = this || QU, XU = 0; XU < UU._howls.length; XU++) UU._howls[XU].stop();
          return UU
        },
        unload: function() {
          for (var UU = this || QU, XU = UU._howls.length - 1; XU >= 0; XU--) UU._howls[XU].unload();
          return UU.usingWebAudio && UU.ctx && "undefined" !== typeof UU.ctx.close && (UU.ctx.close(), UU.ctx = null, IU()), UU
        },
        codecs: function(UU) {
          return (this || QU)._codecs[UU.replace(/^x-/, "")]
        },
        _setup: function() {
          var UU = this || QU;
          if (UU.state = UU.ctx && UU.ctx.state || "suspended", UU._autoSuspend(), !UU.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (UU._canPlayEvent = "canplay")
            } catch (XU) {
              UU.noAudio = !0
            } else UU.noAudio = !0;
          try {
            (new Audio).muted && (UU.noAudio = !0)
          } catch (XU) {}
          return UU.noAudio || UU._setupCodecs(), UU
        },
        _setupCodecs: function() {
          var UU = this || QU,
            XU = null;
          try {
            XU = "undefined" !== typeof Audio ? new Audio : null
          } catch (EU) {
            return UU
          }
          if (!XU || "function" !== typeof XU.canPlayType) return UU;
          var zU = XU.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            cU = UU._navigator ? UU._navigator.userAgent : "",
            yU = cU.match(/OPR\/([0-6].)/g),
            AU = yU && parseInt(yU[0].split("/")[1], 10) < 33,
            FU = -1 !== cU.indexOf("Safari") && -1 === cU.indexOf("Chrome"),
            oU = cU.match(/Version\/(.*?) /),
            DU = FU && oU && parseInt(oU[1], 10) < 15;
          return UU._codecs = {
            mp3: !(AU || !zU && !XU.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!zU,
            opus: !!XU.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!XU.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!XU.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(XU.canPlayType('audio/wav; codecs="1"') || XU.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!XU.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!XU.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(XU.canPlayType("audio/x-m4a;") || XU.canPlayType("audio/m4a;") || XU.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(XU.canPlayType("audio/x-m4b;") || XU.canPlayType("audio/m4b;") || XU.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(XU.canPlayType("audio/x-mp4;") || XU.canPlayType("audio/mp4;") || XU.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(DU || !XU.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(DU || !XU.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!XU.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(XU.canPlayType("audio/x-flac;") || XU.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, UU
        },
        _unlockAudio: function() {
          var UU = this || QU;
          if (!UU._audioUnlocked && UU.ctx) {
            UU._audioUnlocked = !1, UU.autoUnlock = !1, UU._mobileUnloaded || 44100 === UU.ctx.sampleRate || (UU._mobileUnloaded = !0, UU.unload()), UU._scratchBuffer = UU.ctx.createBuffer(1, 1, 22050);
            var XU = function(zU) {
              for (; UU._html5AudioPool.length < UU.html5PoolSize;) try {
                var cU = new Audio;
                cU._unlocked = !0, UU._releaseHtml5Audio(cU)
              } catch (zU) {
                UU.noAudio = !0;
                break
              }
              for (var yU = 0; yU < UU._howls.length; yU++)
                if (!UU._howls[yU]._webAudio)
                  for (var QU = UU._howls[yU]._getSoundIds(), AU = 0; AU < QU.length; AU++) {
                    var FU = UU._howls[yU]._soundById(QU[AU]);
                    FU && FU._node && !FU._node._unlocked && (FU._node._unlocked = !0, FU._node.load())
                  }
              UU._autoResume();
              var oU = UU.ctx.createBufferSource();
              oU.buffer = UU._scratchBuffer, oU.connect(UU.ctx.destination), "undefined" === typeof oU.start ? oU.noteOn(0) : oU.start(0), "function" === typeof UU.ctx.resume && UU.ctx.resume(), oU.onended = function() {
                oU.disconnect(0), UU._audioUnlocked = !0, document.removeEventListener("touchstart", XU, !0), document.removeEventListener("touchend", XU, !0), document.removeEventListener("click", XU, !0), document.removeEventListener("keydown", XU, !0);
                for (var zU = 0; zU < UU._howls.length; zU++) UU._howls[zU]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", XU, !0), document.addEventListener("touchend", XU, !0), document.addEventListener("click", XU, !0), document.addEventListener("keydown", XU, !0), UU
          }
        },
        _obtainHtml5Audio: function() {
          var UU = this || QU;
          if (UU._html5AudioPool.length) return UU._html5AudioPool.pop();
          var XU = (new Audio).play();
          return XU && "undefined" !== typeof Promise && (XU instanceof Promise || "function" === typeof XU.then) && XU.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(UU) {
          var XU = this || QU;
          return UU._unlocked && XU._html5AudioPool.push(UU), XU
        },
        _autoSuspend: function() {
          var UU = this;
          if (UU.autoSuspend && UU.ctx && "undefined" !== typeof UU.ctx.suspend && QU.usingWebAudio) {
            for (var XU = 0; XU < UU._howls.length; XU++)
              if (UU._howls[XU]._webAudio)
                for (var zU = 0; zU < UU._howls[XU]._sounds.length; zU++)
                  if (!UU._howls[XU]._sounds[zU].dY) return UU;
            return UU._suspendTimer && clearTimeout(UU._suspendTimer), UU._suspendTimer = setTimeout((function() {
              if (UU.autoSuspend) {
                UU._suspendTimer = null, UU.state = "suspending";
                var XU = function() {
                  UU.state = "suspended", UU._resumeAfterSuspend && (delete UU._resumeAfterSuspend, UU._autoResume())
                };
                UU.ctx.suspend().then(XU, XU)
              }
            }), 3e4), UU
          }
        },
        _autoResume: function() {
          var UU = this;
          if (UU.ctx && "undefined" !== typeof UU.ctx.resume && QU.usingWebAudio) return "running" === UU.state && "interrupted" !== UU.ctx.state && UU._suspendTimer ? (clearTimeout(UU._suspendTimer), UU._suspendTimer = null) : "suspended" === UU.state || "running" === UU.state && "interrupted" === UU.ctx.state ? (UU.ctx.resume().then((function() {
            UU.state = "running";
            for (var XU = 0; XU < UU._howls.length; XU++) UU._howls[XU]._emit("resume")
          })), UU._suspendTimer && (clearTimeout(UU._suspendTimer), UU._suspendTimer = null)) : "suspending" === UU.state && (UU._resumeAfterSuspend = !0), UU
        }
      };
      var QU = new yU,
        AU = function(UU) {
          UU.src && 0 !== UU.src.length ? this.init(UU) : console.error("An array of source files must be passed with any new Howl.")
        };
      AU.prototype = {
        init: function(UU) {
          var XU = this;
          return QU.ctx || IU(), XU._autoplay = UU.autoplay || !1, XU._format = "string" !== typeof UU.format ? UU.format : [UU.format], XU._html5 = UU.html5 || !1, XU._muted = UU.mute || !1, XU._loop = UU.loop || !1, XU._pool = UU.pool || 5, XU._preload = "boolean" !== typeof UU.preload && "metadata" !== UU.preload || UU.preload, XU._rate = UU.rate || 1, XU._sprite = UU.sprite || {}, XU._src = "string" !== typeof UU.src ? UU.src : [UU.src], XU._volume = void 0 !== UU.volume ? UU.volume : 1, XU._xhr = {
            method: UU.xhr && UU.xhr.method ? UU.xhr.method : "GET",
            headers: UU.xhr && UU.xhr.headers ? UU.xhr.headers : null,
            withCredentials: !(!UU.xhr || !UU.xhr.withCredentials) && UU.xhr.withCredentials
          }, XU._duration = 0, XU._state = "unloaded", XU._sounds = [], XU._endTimers = {}, XU._queue = [], XU._playLock = !1, XU._onend = UU.onend ? [{
            FY: UU.onend
          }] : [], XU._onfade = UU.onfade ? [{
            FY: UU.onfade
          }] : [], XU._onload = UU.onload ? [{
            FY: UU.onload
          }] : [], XU._onloaderror = UU.onloaderror ? [{
            FY: UU.onloaderror
          }] : [], XU._onplayerror = UU.onplayerror ? [{
            FY: UU.onplayerror
          }] : [], XU._onpause = UU.onpause ? [{
            FY: UU.onpause
          }] : [], XU._onplay = UU.onplay ? [{
            FY: UU.onplay
          }] : [], XU._onstop = UU.onstop ? [{
            FY: UU.onstop
          }] : [], XU._onmute = UU.onmute ? [{
            FY: UU.onmute
          }] : [], XU._onvolume = UU.onvolume ? [{
            FY: UU.onvolume
          }] : [], XU._onrate = UU.onrate ? [{
            FY: UU.onrate
          }] : [], XU._onseek = UU.onseek ? [{
            FY: UU.onseek
          }] : [], XU._onunlock = UU.onunlock ? [{
            FY: UU.onunlock
          }] : [], XU._onresume = [], XU._webAudio = QU.usingWebAudio && !XU._html5, "undefined" !== typeof QU.ctx && QU.ctx && QU.autoUnlock && QU._unlockAudio(), QU._howls.push(XU), XU._autoplay && XU._queue.push({
            event: "play",
            action: function() {
              XU.play()
            }
          }), XU._preload && "none" !== XU._preload && XU.load(), XU
        },
        load: function() {
          var UU = this,
            XU = null;
          if (QU.noAudio) UU._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof UU._src && (UU._src = [UU._src]);
            for (var zU = 0; zU < UU._src.length; zU++) {
              var cU, yU;
              if (UU._format && UU._format[zU]) cU = UU._format[zU];
              else {
                if ("string" !== typeof(yU = UU._src[zU])) {
                  UU._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(cU = /^data:audio\/([^;,]+);/i.exec(yU)) || (cU = /\.([^.]+)$/.exec(yU.split("?", 1)[0])), cU && (cU = cU[1].toLowerCase())
              }
              if (cU || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), cU && QU.codecs(cU)) {
                XU = UU._src[zU];
                break
              }
            }
            if (XU) return UU._src = XU, UU._state = "loading", "https:" === window.location.protocol && "http:" === XU.slice(0, 5) && (UU._html5 = !0, UU._webAudio = !1), new FU(UU), UU._webAudio && DU(UU), UU;
            UU._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(UU, XU) {
          var zU = this,
            cU = null;
          if ("number" === typeof UU) cU = UU, UU = null;
          else {
            if ("string" === typeof UU && "loaded" === zU._state && !zU._sprite[UU]) return null;
            if ("undefined" === typeof UU && (UU = "__default", !zU._playLock)) {
              for (var yU = 0, AU = 0; AU < zU._sounds.length; AU++) zU._sounds[AU].dY && !zU._sounds[AU]._ended && (yU++, cU = zU._sounds[AU]._id);
              1 === yU ? UU = null : cU = null
            }
          }
          var FU = cU ? zU._soundById(cU) : zU._inactiveSound();
          if (!FU) return null;
          if (cU && !UU && (UU = FU._sprite || "__default"), "loaded" !== zU._state) {
            FU._sprite = UU, FU._ended = !1;
            var oU = FU._id;
            return zU._queue.push({
              event: "play",
              action: function() {
                zU.play(oU)
              }
            }), oU
          }
          if (cU && !FU.dY) return XU || zU._loadQueue("play"), FU._id;
          zU._webAudio && QU._autoResume();
          var DU = Math.max(0, FU._seek > 0 ? FU._seek : zU._sprite[UU][0] / 1e3),
            EU = Math.max(0, (zU._sprite[UU][0] + zU._sprite[UU][1]) / 1e3 - DU),
            YU = 1e3 * EU / Math.abs(FU._rate),
            NU = zU._sprite[UU][0] / 1e3,
            IU = (zU._sprite[UU][0] + zU._sprite[UU][1]) / 1e3;
          FU._sprite = UU, FU._ended = !1;
          var pU = function() {
            FU.dY = !1, FU._seek = DU, FU._start = NU, FU._stop = IU, FU._loop = !(!FU._loop && !zU._sprite[UU][2])
          };
          if (!(DU >= IU)) {
            var aU = FU._node;
            if (zU._webAudio) {
              var tU = function() {
                zU._playLock = !1, pU(), zU._refreshBuffer(FU);
                var UU = FU._muted || zU._muted ? 0 : FU._volume;
                aU.gain.setValueAtTime(UU, QU.ctx.currentTime), FU._playStart = QU.ctx.currentTime, "undefined" === typeof aU.bufferSource.start ? FU._loop ? aU.bufferSource.noteGrainOn(0, DU, 86400) : aU.bufferSource.noteGrainOn(0, DU, EU) : FU._loop ? aU.bufferSource.start(0, DU, 86400) : aU.bufferSource.start(0, DU, EU), YU !== 1 / 0 && (zU._endTimers[FU._id] = setTimeout(zU._ended.bind(zU, FU), YU)), XU || setTimeout((function() {
                  zU._emit("play", FU._id), zU._loadQueue()
                }), 0)
              };
              "running" === QU.state && "interrupted" !== QU.ctx.state ? tU() : (zU._playLock = !0, zU.once("resume", tU), zU._clearTimer(FU._id))
            } else {
              var gU = function() {
                aU.currentTime = DU, aU.muted = FU._muted || zU._muted || QU._muted || aU.muted, aU.volume = FU._volume * QU.volume(), aU.playbackRate = FU._rate;
                try {
                  var cU = aU.play();
                  if (cU && "undefined" !== typeof Promise && (cU instanceof Promise || "function" === typeof cU.then) ? (zU._playLock = !0, pU(), cU.then((function() {
                      zU._playLock = !1, aU._unlocked = !0, XU ? zU._loadQueue() : zU._emit("play", FU._id)
                    })).catch((function() {
                      zU._playLock = !1, zU._emit("playerror", FU._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), FU._ended = !0, FU.dY = !0
                    }))) : XU || (zU._playLock = !1, pU(), zU._emit("play", FU._id)), aU.playbackRate = FU._rate, aU.paused) return void zU._emit("playerror", FU._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== UU || FU._loop ? zU._endTimers[FU._id] = setTimeout(zU._ended.bind(zU, FU), YU) : (zU._endTimers[FU._id] = function() {
                    zU._ended(FU), aU.removeEventListener("ended", zU._endTimers[FU._id], !1)
                  }, aU.addEventListener("ended", zU._endTimers[FU._id], !1))
                } catch (yU) {
                  zU._emit("playerror", FU._id, yU)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === aU.src && (aU.src = zU._src, aU.load());
              var kU = window && window.ejecta || !aU.readyState && QU._navigator.isCocoonJS;
              if (aU.readyState >= 3 || kU) gU();
              else {
                zU._playLock = !0, zU._state = "loading";
                var GU = function() {
                  zU._state = "loaded", gU(), aU.removeEventListener(QU._canPlayEvent, GU, !1)
                };
                aU.addEventListener(QU._canPlayEvent, GU, !1), zU._clearTimer(FU._id)
              }
            }
            return FU._id
          }
          zU._ended(FU)
        },
        pause: function(UU) {
          var XU = this;
          if ("loaded" !== XU._state || XU._playLock) return XU._queue.push({
            event: "pause",
            action: function() {
              XU.pause(UU)
            }
          }), XU;
          for (var zU = XU._getSoundIds(UU), cU = 0; cU < zU.length; cU++) {
            XU._clearTimer(zU[cU]);
            var yU = XU._soundById(zU[cU]);
            if (yU && !yU.dY && (yU._seek = XU.seek(zU[cU]), yU._rateSeek = 0, yU.dY = !0, XU._stopFade(zU[cU]), yU._node))
              if (XU._webAudio) {
                if (!yU._node.bufferSource) continue;
                "undefined" === typeof yU._node.bufferSource.stop ? yU._node.bufferSource.noteOff(0) : yU._node.bufferSource.stop(0), XU._cleanBuffer(yU._node)
              } else isNaN(yU._node.duration) && yU._node.duration !== 1 / 0 || yU._node.pause();
            arguments[1] || XU._emit("pause", yU ? yU._id : null)
          }
          return XU
        },
        stop: function(UU, XU) {
          var zU = this;
          if ("loaded" !== zU._state || zU._playLock) return zU._queue.push({
            event: "stop",
            action: function() {
              zU.stop(UU)
            }
          }), zU;
          for (var cU = zU._getSoundIds(UU), yU = 0; yU < cU.length; yU++) {
            zU._clearTimer(cU[yU]);
            var QU = zU._soundById(cU[yU]);
            QU && (QU._seek = QU._start || 0, QU._rateSeek = 0, QU.dY = !0, QU._ended = !0, zU._stopFade(cU[yU]), QU._node && (zU._webAudio ? QU._node.bufferSource && ("undefined" === typeof QU._node.bufferSource.stop ? QU._node.bufferSource.noteOff(0) : QU._node.bufferSource.stop(0), zU._cleanBuffer(QU._node)) : isNaN(QU._node.duration) && QU._node.duration !== 1 / 0 || (QU._node.currentTime = QU._start || 0, QU._node.pause(), QU._node.duration === 1 / 0 && zU._clearSound(QU._node))), XU || zU._emit("stop", QU._id))
          }
          return zU
        },
        mute: function(UU, XU) {
          var zU = this;
          if ("loaded" !== zU._state || zU._playLock) return zU._queue.push({
            event: "mute",
            action: function() {
              zU.mute(UU, XU)
            }
          }), zU;
          if ("undefined" === typeof XU) {
            if ("boolean" !== typeof UU) return zU._muted;
            zU._muted = UU
          }
          for (var cU = zU._getSoundIds(XU), yU = 0; yU < cU.length; yU++) {
            var AU = zU._soundById(cU[yU]);
            AU && (AU._muted = UU, AU._interval && zU._stopFade(AU._id), zU._webAudio && AU._node ? AU._node.gain.setValueAtTime(UU ? 0 : AU._volume, QU.ctx.currentTime) : AU._node && (AU._node.muted = !!QU._muted || UU), zU._emit("mute", AU._id))
          }
          return zU
        },
        volume: function() {
          var UU, XU, zU, cU = this,
            yU = arguments;
          if (0 === yU.length) return cU._volume;
          if (1 === yU.length || 2 === yU.length && "undefined" === typeof yU[1] ? cU._getSoundIds().indexOf(yU[0]) >= 0 ? XU = parseInt(yU[0], 10) : UU = parseFloat(yU[0]) : yU.length >= 2 && (UU = parseFloat(yU[0]), XU = parseInt(yU[1], 10)), !("undefined" !== typeof UU && UU >= 0 && UU <= 1)) return (zU = XU ? cU._soundById(XU) : cU._sounds[0]) ? zU._volume : 0;
          if ("loaded" !== cU._state || cU._playLock) return cU._queue.push({
            event: "volume",
            action: function() {
              cU.volume.apply(cU, yU)
            }
          }), cU;
          "undefined" === typeof XU && (cU._volume = UU), XU = cU._getSoundIds(XU);
          for (var AU = 0; AU < XU.length; AU++)(zU = cU._soundById(XU[AU])) && (zU._volume = UU, yU[2] || cU._stopFade(XU[AU]), cU._webAudio && zU._node && !zU._muted ? zU._node.gain.setValueAtTime(UU, QU.ctx.currentTime) : zU._node && !zU._muted && (zU._node.volume = UU * QU.volume()), cU._emit("volume", zU._id));
          return cU
        },
        fade: function(UU, XU, zU, cU) {
          var yU = this;
          if ("loaded" !== yU._state || yU._playLock) return yU._queue.push({
            event: "fade",
            action: function() {
              yU.fade(UU, XU, zU, cU)
            }
          }), yU;
          UU = Math.min(Math.max(0, parseFloat(UU)), 1), XU = Math.min(Math.max(0, parseFloat(XU)), 1), zU = parseFloat(zU), yU.volume(UU, cU);
          for (var AU = yU._getSoundIds(cU), FU = 0; FU < AU.length; FU++) {
            var oU = yU._soundById(AU[FU]);
            if (oU) {
              if (cU || yU._stopFade(AU[FU]), yU._webAudio && !oU._muted) {
                var DU = QU.ctx.currentTime,
                  EU = DU + zU / 1e3;
                oU._volume = UU, oU._node.gain.setValueAtTime(UU, DU), oU._node.gain.linearRampToValueAtTime(XU, EU)
              }
              yU._startFadeInterval(oU, UU, XU, zU, AU[FU], "undefined" === typeof cU)
            }
          }
          return yU
        },
        _startFadeInterval: function(UU, XU, zU, cU, yU, QU) {
          var AU = this,
            FU = XU,
            oU = zU - XU,
            DU = Math.abs(oU / .01),
            EU = Math.max(4, DU > 0 ? cU / DU : cU),
            YU = Date.now();
          UU._fadeTo = zU, UU._interval = setInterval((function() {
            var yU = (Date.now() - YU) / cU;
            YU = Date.now(), FU += oU * yU, FU = Math.round(100 * FU) / 100, FU = oU < 0 ? Math.max(zU, FU) : Math.min(zU, FU), AU._webAudio ? UU._volume = FU : AU.volume(FU, UU._id, !0), QU && (AU._volume = FU), (zU < XU && FU <= zU || zU > XU && FU >= zU) && (clearInterval(UU._interval), UU._interval = null, UU._fadeTo = null, AU.volume(zU, UU._id), AU._emit("fade", UU._id))
          }), EU)
        },
        _stopFade: function(UU) {
          var XU = this,
            zU = XU._soundById(UU);
          return zU && zU._interval && (XU._webAudio && zU._node.gain.cancelScheduledValues(QU.ctx.currentTime), clearInterval(zU._interval), zU._interval = null, XU.volume(zU._fadeTo, UU), zU._fadeTo = null, XU._emit("fade", UU)), XU
        },
        loop: function() {
          var UU, XU, zU, cU = this,
            yU = arguments;
          if (0 === yU.length) return cU._loop;
          if (1 === yU.length) {
            if ("boolean" !== typeof yU[0]) return !!(zU = cU._soundById(parseInt(yU[0], 10))) && zU._loop;
            UU = yU[0], cU._loop = UU
          } else 2 === yU.length && (UU = yU[0], XU = parseInt(yU[1], 10));
          for (var QU = cU._getSoundIds(XU), AU = 0; AU < QU.length; AU++)(zU = cU._soundById(QU[AU])) && (zU._loop = UU, cU._webAudio && zU._node && zU._node.bufferSource && (zU._node.bufferSource.loop = UU, UU && (zU._node.bufferSource.loopStart = zU._start || 0, zU._node.bufferSource.loopEnd = zU._stop, cU.playing(QU[AU]) && (cU.pause(QU[AU], !0), cU.play(QU[AU], !0)))));
          return cU
        },
        rate: function() {
          var UU, XU, zU, cU = this,
            yU = arguments;
          if (0 === yU.length) XU = cU._sounds[0]._id;
          else if (1 === yU.length) {
            cU._getSoundIds().indexOf(yU[0]) >= 0 ? XU = parseInt(yU[0], 10) : UU = parseFloat(yU[0])
          } else 2 === yU.length && (UU = parseFloat(yU[0]), XU = parseInt(yU[1], 10));
          if ("number" !== typeof UU) return (zU = cU._soundById(XU)) ? zU._rate : cU._rate;
          if ("loaded" !== cU._state || cU._playLock) return cU._queue.push({
            event: "rate",
            action: function() {
              cU.rate.apply(cU, yU)
            }
          }), cU;
          "undefined" === typeof XU && (cU._rate = UU), XU = cU._getSoundIds(XU);
          for (var AU = 0; AU < XU.length; AU++)
            if (zU = cU._soundById(XU[AU])) {
              cU.playing(XU[AU]) && (zU._rateSeek = cU.seek(XU[AU]), zU._playStart = cU._webAudio ? QU.ctx.currentTime : zU._playStart), zU._rate = UU, cU._webAudio && zU._node && zU._node.bufferSource ? zU._node.bufferSource.playbackRate.setValueAtTime(UU, QU.ctx.currentTime) : zU._node && (zU._node.playbackRate = UU);
              var FU = cU.seek(XU[AU]),
                oU = 1e3 * ((cU._sprite[zU._sprite][0] + cU._sprite[zU._sprite][1]) / 1e3 - FU) / Math.abs(zU._rate);
              !cU._endTimers[XU[AU]] && zU.dY || (cU._clearTimer(XU[AU]), cU._endTimers[XU[AU]] = setTimeout(cU._ended.bind(cU, zU), oU)), cU._emit("rate", zU._id)
            } return cU
        },
        seek: function() {
          var UU, XU, zU = this,
            cU = arguments;
          if (0 === cU.length) zU._sounds.length && (XU = zU._sounds[0]._id);
          else if (1 === cU.length) {
            zU._getSoundIds().indexOf(cU[0]) >= 0 ? XU = parseInt(cU[0], 10) : zU._sounds.length && (XU = zU._sounds[0]._id, UU = parseFloat(cU[0]))
          } else 2 === cU.length && (UU = parseFloat(cU[0]), XU = parseInt(cU[1], 10));
          if ("undefined" === typeof XU) return 0;
          if ("number" === typeof UU && ("loaded" !== zU._state || zU._playLock)) return zU._queue.push({
            event: "seek",
            action: function() {
              zU.seek.apply(zU, cU)
            }
          }), zU;
          var yU = zU._soundById(XU);
          if (yU) {
            if (!("number" === typeof UU && UU >= 0)) {
              if (zU._webAudio) {
                var AU = zU.playing(XU) ? QU.ctx.currentTime - yU._playStart : 0,
                  FU = yU._rateSeek ? yU._rateSeek - yU._seek : 0;
                return yU._seek + (FU + AU * Math.abs(yU._rate))
              }
              return yU._node.currentTime
            }
            var oU = zU.playing(XU);
            oU && zU.pause(XU, !0), yU._seek = UU, yU._ended = !1, zU._clearTimer(XU), zU._webAudio || !yU._node || isNaN(yU._node.duration) || (yU._node.currentTime = UU);
            var DU = function() {
              oU && zU.play(XU, !0), zU._emit("seek", XU)
            };
            if (oU && !zU._webAudio) {
              var EU = function() {
                zU._playLock ? setTimeout(EU, 0) : DU()
              };
              setTimeout(EU, 0)
            } else DU()
          }
          return zU
        },
        playing: function(UU) {
          var XU = this;
          if ("number" === typeof UU) {
            var zU = XU._soundById(UU);
            return !!zU && !zU.dY
          }
          for (var cU = 0; cU < XU._sounds.length; cU++)
            if (!XU._sounds[cU].dY) return !0;
          return !1
        },
        duration: function(UU) {
          var XU = this,
            zU = XU._duration,
            cU = XU._soundById(UU);
          return cU && (zU = XU._sprite[cU._sprite][1] / 1e3), zU
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var UU = this, XU = UU._sounds, zU = 0; zU < XU.length; zU++) XU[zU].dY || UU.stop(XU[zU]._id), UU._webAudio || (UU._clearSound(XU[zU]._node), XU[zU]._node.removeEventListener("error", XU[zU]._errorFn, !1), XU[zU]._node.removeEventListener(QU._canPlayEvent, XU[zU]._loadFn, !1), XU[zU]._node.removeEventListener("ended", XU[zU]._endFn, !1), QU._releaseHtml5Audio(XU[zU]._node)), delete XU[zU]._node, UU._clearTimer(XU[zU]._id);
          var cU = QU._howls.indexOf(UU);
          cU >= 0 && QU._howls.splice(cU, 1);
          var yU = !0;
          for (zU = 0; zU < QU._howls.length; zU++)
            if (QU._howls[zU]._src === UU._src || UU._src.indexOf(QU._howls[zU]._src) >= 0) {
              yU = !1;
              break
            } return oU && yU && delete oU[UU._src], QU.noAudio = !1, UU._state = "unloaded", UU._sounds = [], UU = null, null
        },
        on: function(UU, XU, zU, cU) {
          var yU = this["_on" + UU];
          return "function" === typeof XU && yU.push(cU ? {
            id: zU,
            FY: XU,
            once: cU
          } : {
            id: zU,
            FY: XU
          }), this
        },
        off: function(UU, XU, zU) {
          var cU = this,
            yU = cU["_on" + UU],
            QU = 0;
          if ("number" === typeof XU && (zU = XU, XU = null), XU || zU)
            for (QU = 0; QU < yU.length; QU++) {
              var AU = zU === yU[QU].id;
              if (XU === yU[QU].FY && AU || !XU && AU) {
                yU.splice(QU, 1);
                break
              }
            } else if (UU) cU["_on" + UU] = [];
            else {
              var FU = Object.keys(cU);
              for (QU = 0; QU < FU.length; QU++) 0 === FU[QU].indexOf("_on") && Array.isArray(cU[FU[QU]]) && (cU[FU[QU]] = [])
            } return cU
        },
        once: function(UU, XU, zU) {
          return this.on(UU, XU, zU, 1), this
        },
        _emit: function(UU, XU, zU) {
          for (var cU = this, yU = cU["_on" + UU], QU = yU.length - 1; QU >= 0; QU--) yU[QU].id && yU[QU].id !== XU && "load" !== UU || (setTimeout(function(UU) {
            UU.call(this, XU, zU)
          }.bind(cU, yU[QU].FY), 0), yU[QU].once && cU.off(UU, yU[QU].FY, yU[QU].id));
          return cU._loadQueue(UU), cU
        },
        _loadQueue: function(UU) {
          var XU = this;
          if (XU._queue.length > 0) {
            var zU = XU._queue[0];
            zU.event === UU && (XU._queue.shift(), XU._loadQueue()), UU || zU.action()
          }
          return XU
        },
        _ended: function(UU) {
          var XU = this,
            zU = UU._sprite;
          if (!XU._webAudio && UU._node && !UU._node.paused && !UU._node.ended && UU._node.currentTime < UU._stop) return setTimeout(XU._ended.bind(XU, UU), 100), XU;
          var cU = !(!UU._loop && !XU._sprite[zU][2]);
          if (XU._emit("end", UU._id), !XU._webAudio && cU && XU.stop(UU._id, !0).play(UU._id), XU._webAudio && cU) {
            XU._emit("play", UU._id), UU._seek = UU._start || 0, UU._rateSeek = 0, UU._playStart = QU.ctx.currentTime;
            var yU = 1e3 * (UU._stop - UU._start) / Math.abs(UU._rate);
            XU._endTimers[UU._id] = setTimeout(XU._ended.bind(XU, UU), yU)
          }
          return XU._webAudio && !cU && (UU.dY = !0, UU._ended = !0, UU._seek = UU._start || 0, UU._rateSeek = 0, XU._clearTimer(UU._id), XU._cleanBuffer(UU._node), QU._autoSuspend()), XU._webAudio || cU || XU.stop(UU._id, !0), XU
        },
        _clearTimer: function(UU) {
          var XU = this;
          if (XU._endTimers[UU]) {
            if ("function" !== typeof XU._endTimers[UU]) clearTimeout(XU._endTimers[UU]);
            else {
              var zU = XU._soundById(UU);
              zU && zU._node && zU._node.removeEventListener("ended", XU._endTimers[UU], !1)
            }
            delete XU._endTimers[UU]
          }
          return XU
        },
        _soundById: function(UU) {
          for (var XU = this, zU = 0; zU < XU._sounds.length; zU++)
            if (UU === XU._sounds[zU]._id) return XU._sounds[zU];
          return null
        },
        _inactiveSound: function() {
          var UU = this;
          UU._drain();
          for (var XU = 0; XU < UU._sounds.length; XU++)
            if (UU._sounds[XU]._ended) return UU._sounds[XU].reset();
          return new FU(UU)
        },
        _drain: function() {
          var UU = this,
            XU = UU._pool,
            zU = 0,
            cU = 0;
          if (!(UU._sounds.length < XU)) {
            for (cU = 0; cU < UU._sounds.length; cU++) UU._sounds[cU]._ended && zU++;
            for (cU = UU._sounds.length - 1; cU >= 0; cU--) {
              if (zU <= XU) return;
              UU._sounds[cU]._ended && (UU._webAudio && UU._sounds[cU]._node && UU._sounds[cU]._node.disconnect(0), UU._sounds.splice(cU, 1), zU--)
            }
          }
        },
        _getSoundIds: function(UU) {
          if ("undefined" === typeof UU) {
            for (var XU = [], zU = 0; zU < this._sounds.length; zU++) XU.push(this._sounds[zU]._id);
            return XU
          }
          return [UU]
        },
        _refreshBuffer: function(UU) {
          return UU._node.bufferSource = QU.ctx.createBufferSource(), UU._node.bufferSource.buffer = oU[this._src], UU._panner ? UU._node.bufferSource.connect(UU._panner) : UU._node.bufferSource.connect(UU._node), UU._node.bufferSource.loop = UU._loop, UU._loop && (UU._node.bufferSource.loopStart = UU._start || 0, UU._node.bufferSource.loopEnd = UU._stop || 0), UU._node.bufferSource.playbackRate.setValueAtTime(UU._rate, QU.ctx.currentTime), this
        },
        _cleanBuffer: function(UU) {
          var XU = QU._navigator && QU._navigator.vendor.indexOf("Apple") >= 0;
          if (QU._scratchBuffer && UU.bufferSource && (UU.bufferSource.onended = null, UU.bufferSource.disconnect(0), XU)) try {
            UU.bufferSource.buffer = QU._scratchBuffer
          } catch (zU) {}
          return UU.bufferSource = null, this
        },
        _clearSound: function(UU) {
          /MSIE |Trident\//.test(QU._navigator && QU._navigator.userAgent) || (UU.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var FU = function(UU) {
        this._parent = UU, this.init()
      };
      FU.prototype = {
        init: function() {
          var UU = this,
            XU = UU._parent;
          return UU._muted = XU._muted, UU._loop = XU._loop, UU._volume = XU._volume, UU._rate = XU._rate, UU._seek = 0, UU.dY = !0, UU._ended = !0, UU._sprite = "__default", UU._id = ++QU._counter, XU._sounds.push(UU), UU.create(), UU
        },
        create: function() {
          var UU = this,
            XU = UU._parent,
            zU = QU._muted || UU._muted || UU._parent._muted ? 0 : UU._volume;
          return XU._webAudio ? (UU._node = "undefined" === typeof QU.ctx.createGain ? QU.ctx.createGainNode() : QU.ctx.createGain(), UU._node.gain.setValueAtTime(zU, QU.ctx.currentTime), UU._node.paused = !0, UU._node.connect(QU.masterGain)) : QU.noAudio || (UU._node = QU._obtainHtml5Audio(), UU._errorFn = UU._errorListener.bind(UU), UU._node.addEventListener("error", UU._errorFn, !1), UU._loadFn = UU._loadListener.bind(UU), UU._node.addEventListener(QU._canPlayEvent, UU._loadFn, !1), UU._endFn = UU._endListener.bind(UU), UU._node.addEventListener("ended", UU._endFn, !1), UU._node.src = XU._src, UU._node.preload = !0 === XU._preload ? "auto" : XU._preload, UU._node.volume = zU * QU.volume(), UU._node.load()), UU
        },
        reset: function() {
          var UU = this,
            XU = UU._parent;
          return UU._muted = XU._muted, UU._loop = XU._loop, UU._volume = XU._volume, UU._rate = XU._rate, UU._seek = 0, UU._rateSeek = 0, UU.dY = !0, UU._ended = !0, UU._sprite = "__default", UU._id = ++QU._counter, UU
        },
        _errorListener: function() {
          var UU = this;
          UU._parent._emit("loaderror", UU._id, UU._node.error ? UU._node.error.code : 0), UU._node.removeEventListener("error", UU._errorFn, !1)
        },
        _loadListener: function() {
          var UU = this,
            XU = UU._parent;
          XU._duration = Math.ceil(10 * UU._node.duration) / 10, 0 === Object.keys(XU._sprite).length && (XU._sprite = {
            __default: [0, 1e3 * XU._duration]
          }), "loaded" !== XU._state && (XU._state = "loaded", XU._emit("load"), XU._loadQueue()), UU._node.removeEventListener(QU._canPlayEvent, UU._loadFn, !1)
        },
        _endListener: function() {
          var UU = this,
            XU = UU._parent;
          XU._duration === 1 / 0 && (XU._duration = Math.ceil(10 * UU._node.duration) / 10, XU._sprite.__default[1] === 1 / 0 && (XU._sprite.__default[1] = 1e3 * XU._duration), XU._ended(UU)), UU._node.removeEventListener("ended", UU._endFn, !1)
        }
      };
      var oU = {},
        DU = function(UU) {
          var XU = UU._src;
          if (oU[XU]) return UU._duration = oU[XU].duration, void NU(UU);
          if (/^data:[^;]+;base64,/.test(XU)) {
            for (var zU = atob(XU.split(",")[1]), cU = new Uint8Array(zU.length), yU = 0; yU < zU.length; ++yU) cU[yU] = zU.charCodeAt(yU);
            YU(cU.buffer, UU)
          } else {
            var QU = new XMLHttpRequest;
            QU.open(UU._xhr.method, XU, !0), QU.withCredentials = UU._xhr.withCredentials, QU.responseType = "arraybuffer", UU._xhr.headers && Object.keys(UU._xhr.headers).forEach((function(XU) {
              QU.setRequestHeader(XU, UU._xhr.headers[XU])
            })), QU.onload = function() {
              var XU = (QU.status + "")[0];
              "0" === XU || "2" === XU || "3" === XU ? YU(QU.response, UU) : UU._emit("loaderror", null, "Failed loading audio file with status: " + QU.status + ".")
            }, QU.onerror = function() {
              UU._webAudio && (UU._html5 = !0, UU._webAudio = !1, UU._sounds = [], delete oU[XU], UU.load())
            }, EU(QU)
          }
        },
        EU = function(UU) {
          try {
            UU.send()
          } catch (XU) {
            UU.onerror()
          }
        },
        YU = function(UU, XU) {
          var zU = function() {
              XU._emit("loaderror", null, "Decoding audio data failed.")
            },
            cU = function(UU) {
              UU && XU._sounds.length > 0 ? (oU[XU._src] = UU, NU(XU, UU)) : zU()
            };
          "undefined" !== typeof Promise && 1 === QU.ctx.decodeAudioData.length ? QU.ctx.decodeAudioData(UU).then(cU).catch(zU) : QU.ctx.decodeAudioData(UU, cU, zU)
        },
        NU = function(UU, XU) {
          XU && !UU._duration && (UU._duration = XU.duration), 0 === Object.keys(UU._sprite).length && (UU._sprite = {
            __default: [0, 1e3 * UU._duration]
          }), "loaded" !== UU._state && (UU._state = "loaded", UU._emit("load"), UU._loadQueue())
        },
        IU = function() {
          if (QU.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? QU.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? QU.ctx = new webkitAudioContext : QU.usingWebAudio = !1
            } catch (yU) {
              QU.usingWebAudio = !1
            }
            QU.ctx || (QU.usingWebAudio = !1);
            var UU = /iP(hone|od|ad)/.test(QU._navigator && QU._navigator.platform),
              XU = QU._navigator && QU._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              zU = XU ? parseInt(XU[1], 10) : null;
            if (UU && zU && zU < 9) {
              var cU = /safari/.test(QU._navigator && QU._navigator.userAgent.toLowerCase());
              QU._navigator && !cU && (QU.usingWebAudio = !1)
            }
            QU.usingWebAudio && (QU.masterGain = "undefined" === typeof QU.ctx.createGain ? QU.ctx.createGainNode() : QU.ctx.createGain(), QU.masterGain.gain.setValueAtTime(QU._muted ? 0 : QU._volume, QU.ctx.currentTime), QU.masterGain.connect(QU.ctx.destination)), QU._setup()
          }
        };
      void 0 === (cU = function() {
        return {
          Howler: QU,
          Howl: AU
        }
      }.apply(XU, [])) || (UU.exports = cU), XU.Howler = QU, XU.Howl = AU, "undefined" !== typeof zU.g ? (zU.g.HowlerGlobal = yU, zU.g.Howler = QU, zU.g.Howl = AU, zU.g.Sound = FU) : "undefined" !== typeof window && (window.HowlerGlobal = yU, window.Howler = QU, window.Howl = AU, window.Sound = FU)
    }(),
    function() {
      var UU;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(UU) {
        var XU = this;
        if (!XU.ctx || !XU.ctx.listener) return XU;
        for (var zU = XU._howls.length - 1; zU >= 0; zU--) XU._howls[zU].stereo(UU);
        return XU
      }, HowlerGlobal.prototype.pos = function(UU, XU, zU) {
        var cU = this;
        return cU.ctx && cU.ctx.listener ? (XU = "number" !== typeof XU ? cU._pos[1] : XU, zU = "number" !== typeof zU ? cU._pos[2] : zU, "number" !== typeof UU ? cU._pos : (cU._pos = [UU, XU, zU], "undefined" !== typeof cU.ctx.listener.positionX ? (cU.ctx.listener.positionX.setTargetAtTime(cU._pos[0], Howler.ctx.currentTime, .1), cU.ctx.listener.positionY.setTargetAtTime(cU._pos[1], Howler.ctx.currentTime, .1), cU.ctx.listener.positionZ.setTargetAtTime(cU._pos[2], Howler.ctx.currentTime, .1)) : cU.ctx.listener.setPosition(cU._pos[0], cU._pos[1], cU._pos[2]), cU)) : cU
      }, HowlerGlobal.prototype.orientation = function(UU, XU, zU, cU, yU, QU) {
        var AU = this;
        if (!AU.ctx || !AU.ctx.listener) return AU;
        var FU = AU._orientation;
        return XU = "number" !== typeof XU ? FU[1] : XU, zU = "number" !== typeof zU ? FU[2] : zU, cU = "number" !== typeof cU ? FU[3] : cU, yU = "number" !== typeof yU ? FU[4] : yU, QU = "number" !== typeof QU ? FU[5] : QU, "number" !== typeof UU ? FU : (AU._orientation = [UU, XU, zU, cU, yU, QU], "undefined" !== typeof AU.ctx.listener.forwardX ? (AU.ctx.listener.forwardX.setTargetAtTime(UU, Howler.ctx.currentTime, .1), AU.ctx.listener.forwardY.setTargetAtTime(XU, Howler.ctx.currentTime, .1), AU.ctx.listener.forwardZ.setTargetAtTime(zU, Howler.ctx.currentTime, .1), AU.ctx.listener.upX.setTargetAtTime(cU, Howler.ctx.currentTime, .1), AU.ctx.listener.upY.setTargetAtTime(yU, Howler.ctx.currentTime, .1), AU.ctx.listener.upZ.setTargetAtTime(QU, Howler.ctx.currentTime, .1)) : AU.ctx.listener.setOrientation(UU, XU, zU, cU, yU, QU), AU)
      }, Howl.prototype.init = (UU = Howl.prototype.init, function(XU) {
        var zU = this;
        return zU._orientation = XU.orientation || [1, 0, 0], zU._stereo = XU.stereo || null, zU._pos = XU.pos || null, zU._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof XU.coneInnerAngle ? XU.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof XU.coneOuterAngle ? XU.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof XU.coneOuterGain ? XU.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof XU.distanceModel ? XU.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof XU.maxDistance ? XU.maxDistance : 1e4,
          panningModel: "undefined" !== typeof XU.panningModel ? XU.panningModel : "HRTF",
          refDistance: "undefined" !== typeof XU.refDistance ? XU.refDistance : 1,
          rolloffFactor: "undefined" !== typeof XU.rolloffFactor ? XU.rolloffFactor : 1
        }, zU._onstereo = XU.onstereo ? [{
          FY: XU.onstereo
        }] : [], zU._onpos = XU.onpos ? [{
          FY: XU.onpos
        }] : [], zU._onorientation = XU.onorientation ? [{
          FY: XU.onorientation
        }] : [], UU.call(this, XU)
      }), Howl.prototype.stereo = function(UU, zU) {
        var cU = this;
        if (!cU._webAudio) return cU;
        if ("loaded" !== cU._state) return cU._queue.push({
          event: "stereo",
          action: function() {
            cU.stereo(UU, zU)
          }
        }), cU;
        var yU = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof zU) {
          if ("number" !== typeof UU) return cU._stereo;
          cU._stereo = UU, cU._pos = [UU, 0, 0]
        }
        for (var QU = cU._getSoundIds(zU), AU = 0; AU < QU.length; AU++) {
          var FU = cU._soundById(QU[AU]);
          if (FU) {
            if ("number" !== typeof UU) return FU._stereo;
            FU._stereo = UU, FU._pos = [UU, 0, 0], FU._node && (FU._pannerAttr.panningModel = "equalpower", FU._panner && FU._panner.pan || XU(FU, yU), "spatial" === yU ? "undefined" !== typeof FU._panner.positionX ? (FU._panner.positionX.setValueAtTime(UU, Howler.ctx.currentTime), FU._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), FU._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : FU._panner.setPosition(UU, 0, 0) : FU._panner.pan.setValueAtTime(UU, Howler.ctx.currentTime)), cU._emit("stereo", FU._id)
          }
        }
        return cU
      }, Howl.prototype.pos = function(UU, zU, cU, yU) {
        var QU = this;
        if (!QU._webAudio) return QU;
        if ("loaded" !== QU._state) return QU._queue.push({
          event: "pos",
          action: function() {
            QU.pos(UU, zU, cU, yU)
          }
        }), QU;
        if (zU = "number" !== typeof zU ? 0 : zU, cU = "number" !== typeof cU ? -.5 : cU, "undefined" === typeof yU) {
          if ("number" !== typeof UU) return QU._pos;
          QU._pos = [UU, zU, cU]
        }
        for (var AU = QU._getSoundIds(yU), FU = 0; FU < AU.length; FU++) {
          var oU = QU._soundById(AU[FU]);
          if (oU) {
            if ("number" !== typeof UU) return oU._pos;
            oU._pos = [UU, zU, cU], oU._node && (oU._panner && !oU._panner.pan || XU(oU, "spatial"), "undefined" !== typeof oU._panner.positionX ? (oU._panner.positionX.setValueAtTime(UU, Howler.ctx.currentTime), oU._panner.positionY.setValueAtTime(zU, Howler.ctx.currentTime), oU._panner.positionZ.setValueAtTime(cU, Howler.ctx.currentTime)) : oU._panner.setPosition(UU, zU, cU)), QU._emit("pos", oU._id)
          }
        }
        return QU
      }, Howl.prototype.orientation = function(UU, zU, cU, yU) {
        var QU = this;
        if (!QU._webAudio) return QU;
        if ("loaded" !== QU._state) return QU._queue.push({
          event: "orientation",
          action: function() {
            QU.orientation(UU, zU, cU, yU)
          }
        }), QU;
        if (zU = "number" !== typeof zU ? QU._orientation[1] : zU, cU = "number" !== typeof cU ? QU._orientation[2] : cU, "undefined" === typeof yU) {
          if ("number" !== typeof UU) return QU._orientation;
          QU._orientation = [UU, zU, cU]
        }
        for (var AU = QU._getSoundIds(yU), FU = 0; FU < AU.length; FU++) {
          var oU = QU._soundById(AU[FU]);
          if (oU) {
            if ("number" !== typeof UU) return oU._orientation;
            oU._orientation = [UU, zU, cU], oU._node && (oU._panner || (oU._pos || (oU._pos = QU._pos || [0, 0, -.5]), XU(oU, "spatial")), "undefined" !== typeof oU._panner.orientationX ? (oU._panner.orientationX.setValueAtTime(UU, Howler.ctx.currentTime), oU._panner.orientationY.setValueAtTime(zU, Howler.ctx.currentTime), oU._panner.orientationZ.setValueAtTime(cU, Howler.ctx.currentTime)) : oU._panner.setOrientation(UU, zU, cU)), QU._emit("orientation", oU._id)
          }
        }
        return QU
      }, Howl.prototype.pannerAttr = function() {
        var UU, zU, cU, yU = this,
          QU = arguments;
        if (!yU._webAudio) return yU;
        if (0 === QU.length) return yU._pannerAttr;
        if (1 === QU.length) {
          if ("object" !== typeof QU[0]) return (cU = yU._soundById(parseInt(QU[0], 10))) ? cU._pannerAttr : yU._pannerAttr;
          UU = QU[0], "undefined" === typeof zU && (UU.pannerAttr || (UU.pannerAttr = {
            coneInnerAngle: UU.coneInnerAngle,
            coneOuterAngle: UU.coneOuterAngle,
            coneOuterGain: UU.coneOuterGain,
            distanceModel: UU.distanceModel,
            maxDistance: UU.maxDistance,
            refDistance: UU.refDistance,
            rolloffFactor: UU.rolloffFactor,
            panningModel: UU.panningModel
          }), yU._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof UU.pannerAttr.coneInnerAngle ? UU.pannerAttr.coneInnerAngle : yU._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof UU.pannerAttr.coneOuterAngle ? UU.pannerAttr.coneOuterAngle : yU._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof UU.pannerAttr.coneOuterGain ? UU.pannerAttr.coneOuterGain : yU._coneOuterGain,
            distanceModel: "undefined" !== typeof UU.pannerAttr.distanceModel ? UU.pannerAttr.distanceModel : yU._distanceModel,
            maxDistance: "undefined" !== typeof UU.pannerAttr.maxDistance ? UU.pannerAttr.maxDistance : yU._maxDistance,
            refDistance: "undefined" !== typeof UU.pannerAttr.refDistance ? UU.pannerAttr.refDistance : yU._refDistance,
            rolloffFactor: "undefined" !== typeof UU.pannerAttr.rolloffFactor ? UU.pannerAttr.rolloffFactor : yU._rolloffFactor,
            panningModel: "undefined" !== typeof UU.pannerAttr.panningModel ? UU.pannerAttr.panningModel : yU._panningModel
          })
        } else 2 === QU.length && (UU = QU[0], zU = parseInt(QU[1], 10));
        for (var AU = yU._getSoundIds(zU), FU = 0; FU < AU.length; FU++)
          if (cU = yU._soundById(AU[FU])) {
            var oU = cU._pannerAttr;
            oU = {
              coneInnerAngle: "undefined" !== typeof UU.coneInnerAngle ? UU.coneInnerAngle : oU.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof UU.coneOuterAngle ? UU.coneOuterAngle : oU.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof UU.coneOuterGain ? UU.coneOuterGain : oU.coneOuterGain,
              distanceModel: "undefined" !== typeof UU.distanceModel ? UU.distanceModel : oU.distanceModel,
              maxDistance: "undefined" !== typeof UU.maxDistance ? UU.maxDistance : oU.maxDistance,
              refDistance: "undefined" !== typeof UU.refDistance ? UU.refDistance : oU.refDistance,
              rolloffFactor: "undefined" !== typeof UU.rolloffFactor ? UU.rolloffFactor : oU.rolloffFactor,
              panningModel: "undefined" !== typeof UU.panningModel ? UU.panningModel : oU.panningModel
            };
            var DU = cU._panner;
            DU ? (DU.coneInnerAngle = oU.coneInnerAngle, DU.coneOuterAngle = oU.coneOuterAngle, DU.coneOuterGain = oU.coneOuterGain, DU.distanceModel = oU.distanceModel, DU.maxDistance = oU.maxDistance, DU.refDistance = oU.refDistance, DU.rolloffFactor = oU.rolloffFactor, DU.panningModel = oU.panningModel) : (cU._pos || (cU._pos = yU._pos || [0, 0, -.5]), XU(cU, "spatial"))
          } return yU
      }, Sound.prototype.init = function(UU) {
        return function() {
          var XU = this,
            zU = XU._parent;
          XU._orientation = zU._orientation, XU._stereo = zU._stereo, XU._pos = zU._pos, XU._pannerAttr = zU._pannerAttr, UU.call(this), XU._stereo ? zU.stereo(XU._stereo) : XU._pos && zU.pos(XU._pos[0], XU._pos[1], XU._pos[2], XU._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(UU) {
        return function() {
          var XU = this,
            zU = XU._parent;
          return XU._orientation = zU._orientation, XU._stereo = zU._stereo, XU._pos = zU._pos, XU._pannerAttr = zU._pannerAttr, XU._stereo ? zU.stereo(XU._stereo) : XU._pos ? zU.pos(XU._pos[0], XU._pos[1], XU._pos[2], XU._id) : XU._panner && (XU._panner.disconnect(0), XU._panner = void 0, zU._refreshBuffer(XU)), UU.call(this)
        }
      }(Sound.prototype.reset);
      var XU = function(UU, XU) {
        "spatial" === (XU = XU || "spatial") ? (UU._panner = Howler.ctx.createPanner(), UU._panner.coneInnerAngle = UU._pannerAttr.coneInnerAngle, UU._panner.coneOuterAngle = UU._pannerAttr.coneOuterAngle, UU._panner.coneOuterGain = UU._pannerAttr.coneOuterGain, UU._panner.distanceModel = UU._pannerAttr.distanceModel, UU._panner.maxDistance = UU._pannerAttr.maxDistance, UU._panner.refDistance = UU._pannerAttr.refDistance, UU._panner.rolloffFactor = UU._pannerAttr.rolloffFactor, UU._panner.panningModel = UU._pannerAttr.panningModel, "undefined" !== typeof UU._panner.positionX ? (UU._panner.positionX.setValueAtTime(UU._pos[0], Howler.ctx.currentTime), UU._panner.positionY.setValueAtTime(UU._pos[1], Howler.ctx.currentTime), UU._panner.positionZ.setValueAtTime(UU._pos[2], Howler.ctx.currentTime)) : UU._panner.setPosition(UU._pos[0], UU._pos[1], UU._pos[2]), "undefined" !== typeof UU._panner.orientationX ? (UU._panner.orientationX.setValueAtTime(UU._orientation[0], Howler.ctx.currentTime), UU._panner.orientationY.setValueAtTime(UU._orientation[1], Howler.ctx.currentTime), UU._panner.orientationZ.setValueAtTime(UU._orientation[2], Howler.ctx.currentTime)) : UU._panner.setOrientation(UU._orientation[0], UU._orientation[1], UU._orientation[2])) : (UU._panner = Howler.ctx.createStereoPanner(), UU._panner.pan.setValueAtTime(UU._stereo, Howler.ctx.currentTime)), UU._panner.connect(UU._node), UU.dY || UU._parent.pause(UU._id, !0).play(UU._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);