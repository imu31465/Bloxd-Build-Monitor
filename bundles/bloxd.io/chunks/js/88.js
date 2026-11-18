/*! For license information please see symm5.88.fc237840.chunk.js.LICENSE.txt */
export const id = 88;
export const ids = [88];
export const modules = {
  4267: (JJ, cJ, ZJ) => {
    var FJ;
    ! function() {
      var UJ = function() {
        this.init()
      };
      UJ.prototype = {
        init: function() {
          var JJ = this || eJ;
          return JJ._counter = 1e3, JJ._html5AudioPool = [], JJ.html5PoolSize = 10, JJ._codecs = {}, JJ._howls = [], JJ._muted = !1, JJ._volume = 1, JJ._canPlayEvent = "canplaythrough", JJ._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, JJ.masterGain = null, JJ.noAudio = !1, JJ.usingWebAudio = !0, JJ.autoSuspend = !0, JJ.ctx = null, JJ.autoUnlock = !0, JJ._setup(), JJ
        },
        volume: function(JJ) {
          var cJ = this || eJ;
          if (JJ = parseFloat(JJ), cJ.ctx || sJ(), "undefined" !== typeof JJ && JJ >= 0 && JJ <= 1) {
            if (cJ._volume = JJ, cJ._muted) return cJ;
            cJ.usingWebAudio && cJ.masterGain.gain.setValueAtTime(JJ, eJ.ctx.currentTime);
            for (var ZJ = 0; ZJ < cJ._howls.length; ZJ++)
              if (!cJ._howls[ZJ]._webAudio)
                for (var FJ = cJ._howls[ZJ]._getSoundIds(), UJ = 0; UJ < FJ.length; UJ++) {
                  var XJ = cJ._howls[ZJ]._soundById(FJ[UJ]);
                  XJ && XJ._node && (XJ._node.volume = XJ._volume * JJ)
                }
            return cJ
          }
          return cJ._volume
        },
        mute: function(JJ) {
          var cJ = this || eJ;
          cJ.ctx || sJ(), cJ._muted = JJ, cJ.usingWebAudio && cJ.masterGain.gain.setValueAtTime(JJ ? 0 : cJ._volume, eJ.ctx.currentTime);
          for (var ZJ = 0; ZJ < cJ._howls.length; ZJ++)
            if (!cJ._howls[ZJ]._webAudio)
              for (var FJ = cJ._howls[ZJ]._getSoundIds(), UJ = 0; UJ < FJ.length; UJ++) {
                var XJ = cJ._howls[ZJ]._soundById(FJ[UJ]);
                XJ && XJ._node && (XJ._node.muted = !!JJ || XJ._muted)
              }
          return cJ
        },
        stop: function() {
          for (var JJ = this || eJ, cJ = 0; cJ < JJ._howls.length; cJ++) JJ._howls[cJ].stop();
          return JJ
        },
        unload: function() {
          for (var JJ = this || eJ, cJ = JJ._howls.length - 1; cJ >= 0; cJ--) JJ._howls[cJ].unload();
          return JJ.usingWebAudio && JJ.ctx && "undefined" !== typeof JJ.ctx.close && (JJ.ctx.close(), JJ.ctx = null, sJ()), JJ
        },
        codecs: function(JJ) {
          return (this || eJ)._codecs[JJ.replace(/^x-/, "")]
        },
        _setup: function() {
          var JJ = this || eJ;
          if (JJ.state = JJ.ctx && JJ.ctx.state || "suspended", JJ._autoSuspend(), !JJ.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (JJ._canPlayEvent = "canplay")
            } catch (cJ) {
              JJ.noAudio = !0
            } else JJ.noAudio = !0;
          try {
            (new Audio).muted && (JJ.noAudio = !0)
          } catch (cJ) {}
          return JJ.noAudio || JJ._setupCodecs(), JJ
        },
        _setupCodecs: function() {
          var JJ = this || eJ,
            cJ = null;
          try {
            cJ = "undefined" !== typeof Audio ? new Audio : null
          } catch (YJ) {
            return JJ
          }
          if (!cJ || "function" !== typeof cJ.canPlayType) return JJ;
          var ZJ = cJ.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            FJ = JJ._navigator ? JJ._navigator.userAgent : "",
            UJ = FJ.match(/OPR\/([0-6].)/g),
            XJ = UJ && parseInt(UJ[0].split("/")[1], 10) < 33,
            AJ = -1 !== FJ.indexOf("Safari") && -1 === FJ.indexOf("Chrome"),
            qJ = FJ.match(/Version\/(.*?) /),
            jJ = AJ && qJ && parseInt(qJ[1], 10) < 15;
          return JJ._codecs = {
            mp3: !(XJ || !ZJ && !cJ.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!ZJ,
            opus: !!cJ.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!cJ.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!cJ.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(cJ.canPlayType('audio/wav; codecs="1"') || cJ.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!cJ.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!cJ.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(cJ.canPlayType("audio/x-m4a;") || cJ.canPlayType("audio/m4a;") || cJ.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(cJ.canPlayType("audio/x-m4b;") || cJ.canPlayType("audio/m4b;") || cJ.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(cJ.canPlayType("audio/x-mp4;") || cJ.canPlayType("audio/mp4;") || cJ.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(jJ || !cJ.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(jJ || !cJ.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!cJ.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(cJ.canPlayType("audio/x-flac;") || cJ.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, JJ
        },
        _unlockAudio: function() {
          var JJ = this || eJ;
          if (!JJ._audioUnlocked && JJ.ctx) {
            JJ._audioUnlocked = !1, JJ.autoUnlock = !1, JJ._mobileUnloaded || 44100 === JJ.ctx.sampleRate || (JJ._mobileUnloaded = !0, JJ.unload()), JJ._scratchBuffer = JJ.ctx.createBuffer(1, 1, 22050);
            var cJ = function(ZJ) {
              for (; JJ._html5AudioPool.length < JJ.html5PoolSize;) try {
                var FJ = new Audio;
                FJ._unlocked = !0, JJ._releaseHtml5Audio(FJ)
              } catch (ZJ) {
                JJ.noAudio = !0;
                break
              }
              for (var UJ = 0; UJ < JJ._howls.length; UJ++)
                if (!JJ._howls[UJ]._webAudio)
                  for (var eJ = JJ._howls[UJ]._getSoundIds(), XJ = 0; XJ < eJ.length; XJ++) {
                    var AJ = JJ._howls[UJ]._soundById(eJ[XJ]);
                    AJ && AJ._node && !AJ._node._unlocked && (AJ._node._unlocked = !0, AJ._node.load())
                  }
              JJ._autoResume();
              var qJ = JJ.ctx.createBufferSource();
              qJ.buffer = JJ._scratchBuffer, qJ.connect(JJ.ctx.destination), "undefined" === typeof qJ.start ? qJ.noteOn(0) : qJ.start(0), "function" === typeof JJ.ctx.resume && JJ.ctx.resume(), qJ.onended = function() {
                qJ.disconnect(0), JJ._audioUnlocked = !0, document.removeEventListener("touchstart", cJ, !0), document.removeEventListener("touchend", cJ, !0), document.removeEventListener("click", cJ, !0), document.removeEventListener("keydown", cJ, !0);
                for (var ZJ = 0; ZJ < JJ._howls.length; ZJ++) JJ._howls[ZJ]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", cJ, !0), document.addEventListener("touchend", cJ, !0), document.addEventListener("click", cJ, !0), document.addEventListener("keydown", cJ, !0), JJ
          }
        },
        _obtainHtml5Audio: function() {
          var JJ = this || eJ;
          if (JJ._html5AudioPool.length) return JJ._html5AudioPool.pop();
          var cJ = (new Audio).play();
          return cJ && "undefined" !== typeof Promise && (cJ instanceof Promise || "function" === typeof cJ.then) && cJ.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(JJ) {
          var cJ = this || eJ;
          return JJ._unlocked && cJ._html5AudioPool.push(JJ), cJ
        },
        _autoSuspend: function() {
          var JJ = this;
          if (JJ.autoSuspend && JJ.ctx && "undefined" !== typeof JJ.ctx.suspend && eJ.usingWebAudio) {
            for (var cJ = 0; cJ < JJ._howls.length; cJ++)
              if (JJ._howls[cJ]._webAudio)
                for (var ZJ = 0; ZJ < JJ._howls[cJ]._sounds.length; ZJ++)
                  if (!JJ._howls[cJ]._sounds[ZJ].kE) return JJ;
            return JJ._suspendTimer && clearTimeout(JJ._suspendTimer), JJ._suspendTimer = setTimeout((function() {
              if (JJ.autoSuspend) {
                JJ._suspendTimer = null, JJ.state = "suspending";
                var cJ = function() {
                  JJ.state = "suspended", JJ._resumeAfterSuspend && (delete JJ._resumeAfterSuspend, JJ._autoResume())
                };
                JJ.ctx.suspend().then(cJ, cJ)
              }
            }), 3e4), JJ
          }
        },
        _autoResume: function() {
          var JJ = this;
          if (JJ.ctx && "undefined" !== typeof JJ.ctx.resume && eJ.usingWebAudio) return "running" === JJ.state && "interrupted" !== JJ.ctx.state && JJ._suspendTimer ? (clearTimeout(JJ._suspendTimer), JJ._suspendTimer = null) : "suspended" === JJ.state || "running" === JJ.state && "interrupted" === JJ.ctx.state ? (JJ.ctx.resume().then((function() {
            JJ.state = "running";
            for (var cJ = 0; cJ < JJ._howls.length; cJ++) JJ._howls[cJ]._emit("resume")
          })), JJ._suspendTimer && (clearTimeout(JJ._suspendTimer), JJ._suspendTimer = null)) : "suspending" === JJ.state && (JJ._resumeAfterSuspend = !0), JJ
        }
      };
      var eJ = new UJ,
        XJ = function(JJ) {
          JJ.src && 0 !== JJ.src.length ? this.init(JJ) : console.error("An array of source files must be passed with any new Howl.")
        };
      XJ.prototype = {
        init: function(JJ) {
          var cJ = this;
          return eJ.ctx || sJ(), cJ._autoplay = JJ.autoplay || !1, cJ._format = "string" !== typeof JJ.format ? JJ.format : [JJ.format], cJ._html5 = JJ.html5 || !1, cJ._muted = JJ.mute || !1, cJ._loop = JJ.loop || !1, cJ._pool = JJ.pool || 5, cJ._preload = "boolean" !== typeof JJ.preload && "metadata" !== JJ.preload || JJ.preload, cJ._rate = JJ.rate || 1, cJ._sprite = JJ.sprite || {}, cJ._src = "string" !== typeof JJ.src ? JJ.src : [JJ.src], cJ._volume = void 0 !== JJ.volume ? JJ.volume : 1, cJ._xhr = {
            method: JJ.xhr && JJ.xhr.method ? JJ.xhr.method : "GET",
            headers: JJ.xhr && JJ.xhr.headers ? JJ.xhr.headers : null,
            withCredentials: !(!JJ.xhr || !JJ.xhr.withCredentials) && JJ.xhr.withCredentials
          }, cJ._duration = 0, cJ._state = "unloaded", cJ._sounds = [], cJ._endTimers = {}, cJ._queue = [], cJ._playLock = !1, cJ._onend = JJ.onend ? [{
            Un: JJ.onend
          }] : [], cJ._onfade = JJ.onfade ? [{
            Un: JJ.onfade
          }] : [], cJ._onload = JJ.onload ? [{
            Un: JJ.onload
          }] : [], cJ._onloaderror = JJ.onloaderror ? [{
            Un: JJ.onloaderror
          }] : [], cJ._onplayerror = JJ.onplayerror ? [{
            Un: JJ.onplayerror
          }] : [], cJ._onpause = JJ.onpause ? [{
            Un: JJ.onpause
          }] : [], cJ._onplay = JJ.onplay ? [{
            Un: JJ.onplay
          }] : [], cJ._onstop = JJ.onstop ? [{
            Un: JJ.onstop
          }] : [], cJ._onmute = JJ.onmute ? [{
            Un: JJ.onmute
          }] : [], cJ._onvolume = JJ.onvolume ? [{
            Un: JJ.onvolume
          }] : [], cJ._onrate = JJ.onrate ? [{
            Un: JJ.onrate
          }] : [], cJ._onseek = JJ.onseek ? [{
            Un: JJ.onseek
          }] : [], cJ._onunlock = JJ.onunlock ? [{
            Un: JJ.onunlock
          }] : [], cJ._onresume = [], cJ._webAudio = eJ.usingWebAudio && !cJ._html5, "undefined" !== typeof eJ.ctx && eJ.ctx && eJ.autoUnlock && eJ._unlockAudio(), eJ._howls.push(cJ), cJ._autoplay && cJ._queue.push({
            event: "play",
            action: function() {
              cJ.play()
            }
          }), cJ._preload && "none" !== cJ._preload && cJ.load(), cJ
        },
        load: function() {
          var JJ = this,
            cJ = null;
          if (eJ.noAudio) JJ._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof JJ._src && (JJ._src = [JJ._src]);
            for (var ZJ = 0; ZJ < JJ._src.length; ZJ++) {
              var FJ, UJ;
              if (JJ._format && JJ._format[ZJ]) FJ = JJ._format[ZJ];
              else {
                if ("string" !== typeof(UJ = JJ._src[ZJ])) {
                  JJ._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(FJ = /^data:audio\/([^;,]+);/i.exec(UJ)) || (FJ = /\.([^.]+)$/.exec(UJ.split("?", 1)[0])), FJ && (FJ = FJ[1].toLowerCase())
              }
              if (FJ || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), FJ && eJ.codecs(FJ)) {
                cJ = JJ._src[ZJ];
                break
              }
            }
            if (cJ) return JJ._src = cJ, JJ._state = "loading", "https:" === window.location.protocol && "http:" === cJ.slice(0, 5) && (JJ._html5 = !0, JJ._webAudio = !1), new AJ(JJ), JJ._webAudio && jJ(JJ), JJ;
            JJ._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(JJ, cJ) {
          var ZJ = this,
            FJ = null;
          if ("number" === typeof JJ) FJ = JJ, JJ = null;
          else {
            if ("string" === typeof JJ && "loaded" === ZJ._state && !ZJ._sprite[JJ]) return null;
            if ("undefined" === typeof JJ && (JJ = "__default", !ZJ._playLock)) {
              for (var UJ = 0, XJ = 0; XJ < ZJ._sounds.length; XJ++) ZJ._sounds[XJ].kE && !ZJ._sounds[XJ]._ended && (UJ++, FJ = ZJ._sounds[XJ]._id);
              1 === UJ ? JJ = null : FJ = null
            }
          }
          var AJ = FJ ? ZJ._soundById(FJ) : ZJ._inactiveSound();
          if (!AJ) return null;
          if (FJ && !JJ && (JJ = AJ._sprite || "__default"), "loaded" !== ZJ._state) {
            AJ._sprite = JJ, AJ._ended = !1;
            var qJ = AJ._id;
            return ZJ._queue.push({
              event: "play",
              action: function() {
                ZJ.play(qJ)
              }
            }), qJ
          }
          if (FJ && !AJ.kE) return cJ || ZJ._loadQueue("play"), AJ._id;
          ZJ._webAudio && eJ._autoResume();
          var jJ = Math.max(0, AJ._seek > 0 ? AJ._seek : ZJ._sprite[JJ][0] / 1e3),
            YJ = Math.max(0, (ZJ._sprite[JJ][0] + ZJ._sprite[JJ][1]) / 1e3 - jJ),
            hJ = 1e3 * YJ / Math.abs(AJ._rate),
            DJ = ZJ._sprite[JJ][0] / 1e3,
            sJ = (ZJ._sprite[JJ][0] + ZJ._sprite[JJ][1]) / 1e3;
          AJ._sprite = JJ, AJ._ended = !1;
          var nJ = function() {
            AJ.kE = !1, AJ._seek = jJ, AJ._start = DJ, AJ._stop = sJ, AJ._loop = !(!AJ._loop && !ZJ._sprite[JJ][2])
          };
          if (!(jJ >= sJ)) {
            var GJ = AJ._node;
            if (ZJ._webAudio) {
              var fJ = function() {
                ZJ._playLock = !1, nJ(), ZJ._refreshBuffer(AJ);
                var JJ = AJ._muted || ZJ._muted ? 0 : AJ._volume;
                GJ.gain.setValueAtTime(JJ, eJ.ctx.currentTime), AJ._playStart = eJ.ctx.currentTime, "undefined" === typeof GJ.bufferSource.start ? AJ._loop ? GJ.bufferSource.noteGrainOn(0, jJ, 86400) : GJ.bufferSource.noteGrainOn(0, jJ, YJ) : AJ._loop ? GJ.bufferSource.start(0, jJ, 86400) : GJ.bufferSource.start(0, jJ, YJ), hJ !== 1 / 0 && (ZJ._endTimers[AJ._id] = setTimeout(ZJ._ended.bind(ZJ, AJ), hJ)), cJ || setTimeout((function() {
                  ZJ._emit("play", AJ._id), ZJ._loadQueue()
                }), 0)
              };
              "running" === eJ.state && "interrupted" !== eJ.ctx.state ? fJ() : (ZJ._playLock = !0, ZJ.once("resume", fJ), ZJ._clearTimer(AJ._id))
            } else {
              var xJ = function() {
                GJ.currentTime = jJ, GJ.muted = AJ._muted || ZJ._muted || eJ._muted || GJ.muted, GJ.volume = AJ._volume * eJ.volume(), GJ.playbackRate = AJ._rate;
                try {
                  var FJ = GJ.play();
                  if (FJ && "undefined" !== typeof Promise && (FJ instanceof Promise || "function" === typeof FJ.then) ? (ZJ._playLock = !0, nJ(), FJ.then((function() {
                      ZJ._playLock = !1, GJ._unlocked = !0, cJ ? ZJ._loadQueue() : ZJ._emit("play", AJ._id)
                    })).catch((function() {
                      ZJ._playLock = !1, ZJ._emit("playerror", AJ._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), AJ._ended = !0, AJ.kE = !0
                    }))) : cJ || (ZJ._playLock = !1, nJ(), ZJ._emit("play", AJ._id)), GJ.playbackRate = AJ._rate, GJ.paused) return void ZJ._emit("playerror", AJ._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== JJ || AJ._loop ? ZJ._endTimers[AJ._id] = setTimeout(ZJ._ended.bind(ZJ, AJ), hJ) : (ZJ._endTimers[AJ._id] = function() {
                    ZJ._ended(AJ), GJ.removeEventListener("ended", ZJ._endTimers[AJ._id], !1)
                  }, GJ.addEventListener("ended", ZJ._endTimers[AJ._id], !1))
                } catch (UJ) {
                  ZJ._emit("playerror", AJ._id, UJ)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === GJ.src && (GJ.src = ZJ._src, GJ.load());
              var rJ = window && window.ejecta || !GJ.readyState && eJ._navigator.isCocoonJS;
              if (GJ.readyState >= 3 || rJ) xJ();
              else {
                ZJ._playLock = !0, ZJ._state = "loading";
                var vJ = function() {
                  ZJ._state = "loaded", xJ(), GJ.removeEventListener(eJ._canPlayEvent, vJ, !1)
                };
                GJ.addEventListener(eJ._canPlayEvent, vJ, !1), ZJ._clearTimer(AJ._id)
              }
            }
            return AJ._id
          }
          ZJ._ended(AJ)
        },
        pause: function(JJ) {
          var cJ = this;
          if ("loaded" !== cJ._state || cJ._playLock) return cJ._queue.push({
            event: "pause",
            action: function() {
              cJ.pause(JJ)
            }
          }), cJ;
          for (var ZJ = cJ._getSoundIds(JJ), FJ = 0; FJ < ZJ.length; FJ++) {
            cJ._clearTimer(ZJ[FJ]);
            var UJ = cJ._soundById(ZJ[FJ]);
            if (UJ && !UJ.kE && (UJ._seek = cJ.seek(ZJ[FJ]), UJ._rateSeek = 0, UJ.kE = !0, cJ._stopFade(ZJ[FJ]), UJ._node))
              if (cJ._webAudio) {
                if (!UJ._node.bufferSource) continue;
                "undefined" === typeof UJ._node.bufferSource.stop ? UJ._node.bufferSource.noteOff(0) : UJ._node.bufferSource.stop(0), cJ._cleanBuffer(UJ._node)
              } else isNaN(UJ._node.duration) && UJ._node.duration !== 1 / 0 || UJ._node.pause();
            arguments[1] || cJ._emit("pause", UJ ? UJ._id : null)
          }
          return cJ
        },
        stop: function(JJ, cJ) {
          var ZJ = this;
          if ("loaded" !== ZJ._state || ZJ._playLock) return ZJ._queue.push({
            event: "stop",
            action: function() {
              ZJ.stop(JJ)
            }
          }), ZJ;
          for (var FJ = ZJ._getSoundIds(JJ), UJ = 0; UJ < FJ.length; UJ++) {
            ZJ._clearTimer(FJ[UJ]);
            var eJ = ZJ._soundById(FJ[UJ]);
            eJ && (eJ._seek = eJ._start || 0, eJ._rateSeek = 0, eJ.kE = !0, eJ._ended = !0, ZJ._stopFade(FJ[UJ]), eJ._node && (ZJ._webAudio ? eJ._node.bufferSource && ("undefined" === typeof eJ._node.bufferSource.stop ? eJ._node.bufferSource.noteOff(0) : eJ._node.bufferSource.stop(0), ZJ._cleanBuffer(eJ._node)) : isNaN(eJ._node.duration) && eJ._node.duration !== 1 / 0 || (eJ._node.currentTime = eJ._start || 0, eJ._node.pause(), eJ._node.duration === 1 / 0 && ZJ._clearSound(eJ._node))), cJ || ZJ._emit("stop", eJ._id))
          }
          return ZJ
        },
        mute: function(JJ, cJ) {
          var ZJ = this;
          if ("loaded" !== ZJ._state || ZJ._playLock) return ZJ._queue.push({
            event: "mute",
            action: function() {
              ZJ.mute(JJ, cJ)
            }
          }), ZJ;
          if ("undefined" === typeof cJ) {
            if ("boolean" !== typeof JJ) return ZJ._muted;
            ZJ._muted = JJ
          }
          for (var FJ = ZJ._getSoundIds(cJ), UJ = 0; UJ < FJ.length; UJ++) {
            var XJ = ZJ._soundById(FJ[UJ]);
            XJ && (XJ._muted = JJ, XJ._interval && ZJ._stopFade(XJ._id), ZJ._webAudio && XJ._node ? XJ._node.gain.setValueAtTime(JJ ? 0 : XJ._volume, eJ.ctx.currentTime) : XJ._node && (XJ._node.muted = !!eJ._muted || JJ), ZJ._emit("mute", XJ._id))
          }
          return ZJ
        },
        volume: function() {
          var JJ, cJ, ZJ, FJ = this,
            UJ = arguments;
          if (0 === UJ.length) return FJ._volume;
          if (1 === UJ.length || 2 === UJ.length && "undefined" === typeof UJ[1] ? FJ._getSoundIds().indexOf(UJ[0]) >= 0 ? cJ = parseInt(UJ[0], 10) : JJ = parseFloat(UJ[0]) : UJ.length >= 2 && (JJ = parseFloat(UJ[0]), cJ = parseInt(UJ[1], 10)), !("undefined" !== typeof JJ && JJ >= 0 && JJ <= 1)) return (ZJ = cJ ? FJ._soundById(cJ) : FJ._sounds[0]) ? ZJ._volume : 0;
          if ("loaded" !== FJ._state || FJ._playLock) return FJ._queue.push({
            event: "volume",
            action: function() {
              FJ.volume.apply(FJ, UJ)
            }
          }), FJ;
          "undefined" === typeof cJ && (FJ._volume = JJ), cJ = FJ._getSoundIds(cJ);
          for (var XJ = 0; XJ < cJ.length; XJ++)(ZJ = FJ._soundById(cJ[XJ])) && (ZJ._volume = JJ, UJ[2] || FJ._stopFade(cJ[XJ]), FJ._webAudio && ZJ._node && !ZJ._muted ? ZJ._node.gain.setValueAtTime(JJ, eJ.ctx.currentTime) : ZJ._node && !ZJ._muted && (ZJ._node.volume = JJ * eJ.volume()), FJ._emit("volume", ZJ._id));
          return FJ
        },
        fade: function(JJ, cJ, ZJ, FJ) {
          var UJ = this;
          if ("loaded" !== UJ._state || UJ._playLock) return UJ._queue.push({
            event: "fade",
            action: function() {
              UJ.fade(JJ, cJ, ZJ, FJ)
            }
          }), UJ;
          JJ = Math.min(Math.max(0, parseFloat(JJ)), 1), cJ = Math.min(Math.max(0, parseFloat(cJ)), 1), ZJ = parseFloat(ZJ), UJ.volume(JJ, FJ);
          for (var XJ = UJ._getSoundIds(FJ), AJ = 0; AJ < XJ.length; AJ++) {
            var qJ = UJ._soundById(XJ[AJ]);
            if (qJ) {
              if (FJ || UJ._stopFade(XJ[AJ]), UJ._webAudio && !qJ._muted) {
                var jJ = eJ.ctx.currentTime,
                  YJ = jJ + ZJ / 1e3;
                qJ._volume = JJ, qJ._node.gain.setValueAtTime(JJ, jJ), qJ._node.gain.linearRampToValueAtTime(cJ, YJ)
              }
              UJ._startFadeInterval(qJ, JJ, cJ, ZJ, XJ[AJ], "undefined" === typeof FJ)
            }
          }
          return UJ
        },
        _startFadeInterval: function(JJ, cJ, ZJ, FJ, UJ, eJ) {
          var XJ = this,
            AJ = cJ,
            qJ = ZJ - cJ,
            jJ = Math.abs(qJ / .01),
            YJ = Math.max(4, jJ > 0 ? FJ / jJ : FJ),
            hJ = Date.now();
          JJ._fadeTo = ZJ, JJ._interval = setInterval((function() {
            var UJ = (Date.now() - hJ) / FJ;
            hJ = Date.now(), AJ += qJ * UJ, AJ = Math.round(100 * AJ) / 100, AJ = qJ < 0 ? Math.max(ZJ, AJ) : Math.min(ZJ, AJ), XJ._webAudio ? JJ._volume = AJ : XJ.volume(AJ, JJ._id, !0), eJ && (XJ._volume = AJ), (ZJ < cJ && AJ <= ZJ || ZJ > cJ && AJ >= ZJ) && (clearInterval(JJ._interval), JJ._interval = null, JJ._fadeTo = null, XJ.volume(ZJ, JJ._id), XJ._emit("fade", JJ._id))
          }), YJ)
        },
        _stopFade: function(JJ) {
          var cJ = this,
            ZJ = cJ._soundById(JJ);
          return ZJ && ZJ._interval && (cJ._webAudio && ZJ._node.gain.cancelScheduledValues(eJ.ctx.currentTime), clearInterval(ZJ._interval), ZJ._interval = null, cJ.volume(ZJ._fadeTo, JJ), ZJ._fadeTo = null, cJ._emit("fade", JJ)), cJ
        },
        loop: function() {
          var JJ, cJ, ZJ, FJ = this,
            UJ = arguments;
          if (0 === UJ.length) return FJ._loop;
          if (1 === UJ.length) {
            if ("boolean" !== typeof UJ[0]) return !!(ZJ = FJ._soundById(parseInt(UJ[0], 10))) && ZJ._loop;
            JJ = UJ[0], FJ._loop = JJ
          } else 2 === UJ.length && (JJ = UJ[0], cJ = parseInt(UJ[1], 10));
          for (var eJ = FJ._getSoundIds(cJ), XJ = 0; XJ < eJ.length; XJ++)(ZJ = FJ._soundById(eJ[XJ])) && (ZJ._loop = JJ, FJ._webAudio && ZJ._node && ZJ._node.bufferSource && (ZJ._node.bufferSource.loop = JJ, JJ && (ZJ._node.bufferSource.loopStart = ZJ._start || 0, ZJ._node.bufferSource.loopEnd = ZJ._stop, FJ.playing(eJ[XJ]) && (FJ.pause(eJ[XJ], !0), FJ.play(eJ[XJ], !0)))));
          return FJ
        },
        rate: function() {
          var JJ, cJ, ZJ, FJ = this,
            UJ = arguments;
          if (0 === UJ.length) cJ = FJ._sounds[0]._id;
          else if (1 === UJ.length) {
            FJ._getSoundIds().indexOf(UJ[0]) >= 0 ? cJ = parseInt(UJ[0], 10) : JJ = parseFloat(UJ[0])
          } else 2 === UJ.length && (JJ = parseFloat(UJ[0]), cJ = parseInt(UJ[1], 10));
          if ("number" !== typeof JJ) return (ZJ = FJ._soundById(cJ)) ? ZJ._rate : FJ._rate;
          if ("loaded" !== FJ._state || FJ._playLock) return FJ._queue.push({
            event: "rate",
            action: function() {
              FJ.rate.apply(FJ, UJ)
            }
          }), FJ;
          "undefined" === typeof cJ && (FJ._rate = JJ), cJ = FJ._getSoundIds(cJ);
          for (var XJ = 0; XJ < cJ.length; XJ++)
            if (ZJ = FJ._soundById(cJ[XJ])) {
              FJ.playing(cJ[XJ]) && (ZJ._rateSeek = FJ.seek(cJ[XJ]), ZJ._playStart = FJ._webAudio ? eJ.ctx.currentTime : ZJ._playStart), ZJ._rate = JJ, FJ._webAudio && ZJ._node && ZJ._node.bufferSource ? ZJ._node.bufferSource.playbackRate.setValueAtTime(JJ, eJ.ctx.currentTime) : ZJ._node && (ZJ._node.playbackRate = JJ);
              var AJ = FJ.seek(cJ[XJ]),
                qJ = 1e3 * ((FJ._sprite[ZJ._sprite][0] + FJ._sprite[ZJ._sprite][1]) / 1e3 - AJ) / Math.abs(ZJ._rate);
              !FJ._endTimers[cJ[XJ]] && ZJ.kE || (FJ._clearTimer(cJ[XJ]), FJ._endTimers[cJ[XJ]] = setTimeout(FJ._ended.bind(FJ, ZJ), qJ)), FJ._emit("rate", ZJ._id)
            } return FJ
        },
        seek: function() {
          var JJ, cJ, ZJ = this,
            FJ = arguments;
          if (0 === FJ.length) ZJ._sounds.length && (cJ = ZJ._sounds[0]._id);
          else if (1 === FJ.length) {
            ZJ._getSoundIds().indexOf(FJ[0]) >= 0 ? cJ = parseInt(FJ[0], 10) : ZJ._sounds.length && (cJ = ZJ._sounds[0]._id, JJ = parseFloat(FJ[0]))
          } else 2 === FJ.length && (JJ = parseFloat(FJ[0]), cJ = parseInt(FJ[1], 10));
          if ("undefined" === typeof cJ) return 0;
          if ("number" === typeof JJ && ("loaded" !== ZJ._state || ZJ._playLock)) return ZJ._queue.push({
            event: "seek",
            action: function() {
              ZJ.seek.apply(ZJ, FJ)
            }
          }), ZJ;
          var UJ = ZJ._soundById(cJ);
          if (UJ) {
            if (!("number" === typeof JJ && JJ >= 0)) {
              if (ZJ._webAudio) {
                var XJ = ZJ.playing(cJ) ? eJ.ctx.currentTime - UJ._playStart : 0,
                  AJ = UJ._rateSeek ? UJ._rateSeek - UJ._seek : 0;
                return UJ._seek + (AJ + XJ * Math.abs(UJ._rate))
              }
              return UJ._node.currentTime
            }
            var qJ = ZJ.playing(cJ);
            qJ && ZJ.pause(cJ, !0), UJ._seek = JJ, UJ._ended = !1, ZJ._clearTimer(cJ), ZJ._webAudio || !UJ._node || isNaN(UJ._node.duration) || (UJ._node.currentTime = JJ);
            var jJ = function() {
              qJ && ZJ.play(cJ, !0), ZJ._emit("seek", cJ)
            };
            if (qJ && !ZJ._webAudio) {
              var YJ = function() {
                ZJ._playLock ? setTimeout(YJ, 0) : jJ()
              };
              setTimeout(YJ, 0)
            } else jJ()
          }
          return ZJ
        },
        playing: function(JJ) {
          var cJ = this;
          if ("number" === typeof JJ) {
            var ZJ = cJ._soundById(JJ);
            return !!ZJ && !ZJ.kE
          }
          for (var FJ = 0; FJ < cJ._sounds.length; FJ++)
            if (!cJ._sounds[FJ].kE) return !0;
          return !1
        },
        duration: function(JJ) {
          var cJ = this,
            ZJ = cJ._duration,
            FJ = cJ._soundById(JJ);
          return FJ && (ZJ = cJ._sprite[FJ._sprite][1] / 1e3), ZJ
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var JJ = this, cJ = JJ._sounds, ZJ = 0; ZJ < cJ.length; ZJ++) cJ[ZJ].kE || JJ.stop(cJ[ZJ]._id), JJ._webAudio || (JJ._clearSound(cJ[ZJ]._node), cJ[ZJ]._node.removeEventListener("error", cJ[ZJ]._errorFn, !1), cJ[ZJ]._node.removeEventListener(eJ._canPlayEvent, cJ[ZJ]._loadFn, !1), cJ[ZJ]._node.removeEventListener("ended", cJ[ZJ]._endFn, !1), eJ._releaseHtml5Audio(cJ[ZJ]._node)), delete cJ[ZJ]._node, JJ._clearTimer(cJ[ZJ]._id);
          var FJ = eJ._howls.indexOf(JJ);
          FJ >= 0 && eJ._howls.splice(FJ, 1);
          var UJ = !0;
          for (ZJ = 0; ZJ < eJ._howls.length; ZJ++)
            if (eJ._howls[ZJ]._src === JJ._src || JJ._src.indexOf(eJ._howls[ZJ]._src) >= 0) {
              UJ = !1;
              break
            } return qJ && UJ && delete qJ[JJ._src], eJ.noAudio = !1, JJ._state = "unloaded", JJ._sounds = [], JJ = null, null
        },
        on: function(JJ, cJ, ZJ, FJ) {
          var UJ = this["_on" + JJ];
          return "function" === typeof cJ && UJ.push(FJ ? {
            id: ZJ,
            Un: cJ,
            once: FJ
          } : {
            id: ZJ,
            Un: cJ
          }), this
        },
        off: function(JJ, cJ, ZJ) {
          var FJ = this,
            UJ = FJ["_on" + JJ],
            eJ = 0;
          if ("number" === typeof cJ && (ZJ = cJ, cJ = null), cJ || ZJ)
            for (eJ = 0; eJ < UJ.length; eJ++) {
              var XJ = ZJ === UJ[eJ].id;
              if (cJ === UJ[eJ].Un && XJ || !cJ && XJ) {
                UJ.splice(eJ, 1);
                break
              }
            } else if (JJ) FJ["_on" + JJ] = [];
            else {
              var AJ = Object.keys(FJ);
              for (eJ = 0; eJ < AJ.length; eJ++) 0 === AJ[eJ].indexOf("_on") && Array.isArray(FJ[AJ[eJ]]) && (FJ[AJ[eJ]] = [])
            } return FJ
        },
        once: function(JJ, cJ, ZJ) {
          return this.on(JJ, cJ, ZJ, 1), this
        },
        _emit: function(JJ, cJ, ZJ) {
          for (var FJ = this, UJ = FJ["_on" + JJ], eJ = UJ.length - 1; eJ >= 0; eJ--) UJ[eJ].id && UJ[eJ].id !== cJ && "load" !== JJ || (setTimeout(function(JJ) {
            JJ.call(this, cJ, ZJ)
          }.bind(FJ, UJ[eJ].Un), 0), UJ[eJ].once && FJ.off(JJ, UJ[eJ].Un, UJ[eJ].id));
          return FJ._loadQueue(JJ), FJ
        },
        _loadQueue: function(JJ) {
          var cJ = this;
          if (cJ._queue.length > 0) {
            var ZJ = cJ._queue[0];
            ZJ.event === JJ && (cJ._queue.shift(), cJ._loadQueue()), JJ || ZJ.action()
          }
          return cJ
        },
        _ended: function(JJ) {
          var cJ = this,
            ZJ = JJ._sprite;
          if (!cJ._webAudio && JJ._node && !JJ._node.paused && !JJ._node.ended && JJ._node.currentTime < JJ._stop) return setTimeout(cJ._ended.bind(cJ, JJ), 100), cJ;
          var FJ = !(!JJ._loop && !cJ._sprite[ZJ][2]);
          if (cJ._emit("end", JJ._id), !cJ._webAudio && FJ && cJ.stop(JJ._id, !0).play(JJ._id), cJ._webAudio && FJ) {
            cJ._emit("play", JJ._id), JJ._seek = JJ._start || 0, JJ._rateSeek = 0, JJ._playStart = eJ.ctx.currentTime;
            var UJ = 1e3 * (JJ._stop - JJ._start) / Math.abs(JJ._rate);
            cJ._endTimers[JJ._id] = setTimeout(cJ._ended.bind(cJ, JJ), UJ)
          }
          return cJ._webAudio && !FJ && (JJ.kE = !0, JJ._ended = !0, JJ._seek = JJ._start || 0, JJ._rateSeek = 0, cJ._clearTimer(JJ._id), cJ._cleanBuffer(JJ._node), eJ._autoSuspend()), cJ._webAudio || FJ || cJ.stop(JJ._id, !0), cJ
        },
        _clearTimer: function(JJ) {
          var cJ = this;
          if (cJ._endTimers[JJ]) {
            if ("function" !== typeof cJ._endTimers[JJ]) clearTimeout(cJ._endTimers[JJ]);
            else {
              var ZJ = cJ._soundById(JJ);
              ZJ && ZJ._node && ZJ._node.removeEventListener("ended", cJ._endTimers[JJ], !1)
            }
            delete cJ._endTimers[JJ]
          }
          return cJ
        },
        _soundById: function(JJ) {
          for (var cJ = this, ZJ = 0; ZJ < cJ._sounds.length; ZJ++)
            if (JJ === cJ._sounds[ZJ]._id) return cJ._sounds[ZJ];
          return null
        },
        _inactiveSound: function() {
          var JJ = this;
          JJ._drain();
          for (var cJ = 0; cJ < JJ._sounds.length; cJ++)
            if (JJ._sounds[cJ]._ended) return JJ._sounds[cJ].reset();
          return new AJ(JJ)
        },
        _drain: function() {
          var JJ = this,
            cJ = JJ._pool,
            ZJ = 0,
            FJ = 0;
          if (!(JJ._sounds.length < cJ)) {
            for (FJ = 0; FJ < JJ._sounds.length; FJ++) JJ._sounds[FJ]._ended && ZJ++;
            for (FJ = JJ._sounds.length - 1; FJ >= 0; FJ--) {
              if (ZJ <= cJ) return;
              JJ._sounds[FJ]._ended && (JJ._webAudio && JJ._sounds[FJ]._node && JJ._sounds[FJ]._node.disconnect(0), JJ._sounds.splice(FJ, 1), ZJ--)
            }
          }
        },
        _getSoundIds: function(JJ) {
          if ("undefined" === typeof JJ) {
            for (var cJ = [], ZJ = 0; ZJ < this._sounds.length; ZJ++) cJ.push(this._sounds[ZJ]._id);
            return cJ
          }
          return [JJ]
        },
        _refreshBuffer: function(JJ) {
          return JJ._node.bufferSource = eJ.ctx.createBufferSource(), JJ._node.bufferSource.buffer = qJ[this._src], JJ._panner ? JJ._node.bufferSource.connect(JJ._panner) : JJ._node.bufferSource.connect(JJ._node), JJ._node.bufferSource.loop = JJ._loop, JJ._loop && (JJ._node.bufferSource.loopStart = JJ._start || 0, JJ._node.bufferSource.loopEnd = JJ._stop || 0), JJ._node.bufferSource.playbackRate.setValueAtTime(JJ._rate, eJ.ctx.currentTime), this
        },
        _cleanBuffer: function(JJ) {
          var cJ = eJ._navigator && eJ._navigator.vendor.indexOf("Apple") >= 0;
          if (eJ._scratchBuffer && JJ.bufferSource && (JJ.bufferSource.onended = null, JJ.bufferSource.disconnect(0), cJ)) try {
            JJ.bufferSource.buffer = eJ._scratchBuffer
          } catch (ZJ) {}
          return JJ.bufferSource = null, this
        },
        _clearSound: function(JJ) {
          /MSIE |Trident\//.test(eJ._navigator && eJ._navigator.userAgent) || (JJ.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var AJ = function(JJ) {
        this._parent = JJ, this.init()
      };
      AJ.prototype = {
        init: function() {
          var JJ = this,
            cJ = JJ._parent;
          return JJ._muted = cJ._muted, JJ._loop = cJ._loop, JJ._volume = cJ._volume, JJ._rate = cJ._rate, JJ._seek = 0, JJ.kE = !0, JJ._ended = !0, JJ._sprite = "__default", JJ._id = ++eJ._counter, cJ._sounds.push(JJ), JJ.create(), JJ
        },
        create: function() {
          var JJ = this,
            cJ = JJ._parent,
            ZJ = eJ._muted || JJ._muted || JJ._parent._muted ? 0 : JJ._volume;
          return cJ._webAudio ? (JJ._node = "undefined" === typeof eJ.ctx.createGain ? eJ.ctx.createGainNode() : eJ.ctx.createGain(), JJ._node.gain.setValueAtTime(ZJ, eJ.ctx.currentTime), JJ._node.paused = !0, JJ._node.connect(eJ.masterGain)) : eJ.noAudio || (JJ._node = eJ._obtainHtml5Audio(), JJ._errorFn = JJ._errorListener.bind(JJ), JJ._node.addEventListener("error", JJ._errorFn, !1), JJ._loadFn = JJ._loadListener.bind(JJ), JJ._node.addEventListener(eJ._canPlayEvent, JJ._loadFn, !1), JJ._endFn = JJ._endListener.bind(JJ), JJ._node.addEventListener("ended", JJ._endFn, !1), JJ._node.src = cJ._src, JJ._node.preload = !0 === cJ._preload ? "auto" : cJ._preload, JJ._node.volume = ZJ * eJ.volume(), JJ._node.load()), JJ
        },
        reset: function() {
          var JJ = this,
            cJ = JJ._parent;
          return JJ._muted = cJ._muted, JJ._loop = cJ._loop, JJ._volume = cJ._volume, JJ._rate = cJ._rate, JJ._seek = 0, JJ._rateSeek = 0, JJ.kE = !0, JJ._ended = !0, JJ._sprite = "__default", JJ._id = ++eJ._counter, JJ
        },
        _errorListener: function() {
          var JJ = this;
          JJ._parent._emit("loaderror", JJ._id, JJ._node.error ? JJ._node.error.code : 0), JJ._node.removeEventListener("error", JJ._errorFn, !1)
        },
        _loadListener: function() {
          var JJ = this,
            cJ = JJ._parent;
          cJ._duration = Math.ceil(10 * JJ._node.duration) / 10, 0 === Object.keys(cJ._sprite).length && (cJ._sprite = {
            __default: [0, 1e3 * cJ._duration]
          }), "loaded" !== cJ._state && (cJ._state = "loaded", cJ._emit("load"), cJ._loadQueue()), JJ._node.removeEventListener(eJ._canPlayEvent, JJ._loadFn, !1)
        },
        _endListener: function() {
          var JJ = this,
            cJ = JJ._parent;
          cJ._duration === 1 / 0 && (cJ._duration = Math.ceil(10 * JJ._node.duration) / 10, cJ._sprite.__default[1] === 1 / 0 && (cJ._sprite.__default[1] = 1e3 * cJ._duration), cJ._ended(JJ)), JJ._node.removeEventListener("ended", JJ._endFn, !1)
        }
      };
      var qJ = {},
        jJ = function(JJ) {
          var cJ = JJ._src;
          if (qJ[cJ]) return JJ._duration = qJ[cJ].duration, void DJ(JJ);
          if (/^data:[^;]+;base64,/.test(cJ)) {
            for (var ZJ = atob(cJ.split(",")[1]), FJ = new Uint8Array(ZJ.length), UJ = 0; UJ < ZJ.length; ++UJ) FJ[UJ] = ZJ.charCodeAt(UJ);
            hJ(FJ.buffer, JJ)
          } else {
            var eJ = new XMLHttpRequest;
            eJ.open(JJ._xhr.method, cJ, !0), eJ.withCredentials = JJ._xhr.withCredentials, eJ.responseType = "arraybuffer", JJ._xhr.headers && Object.keys(JJ._xhr.headers).forEach((function(cJ) {
              eJ.setRequestHeader(cJ, JJ._xhr.headers[cJ])
            })), eJ.onload = function() {
              var cJ = (eJ.status + "")[0];
              "0" === cJ || "2" === cJ || "3" === cJ ? hJ(eJ.response, JJ) : JJ._emit("loaderror", null, "Failed loading audio file with status: " + eJ.status + ".")
            }, eJ.onerror = function() {
              JJ._webAudio && (JJ._html5 = !0, JJ._webAudio = !1, JJ._sounds = [], delete qJ[cJ], JJ.load())
            }, YJ(eJ)
          }
        },
        YJ = function(JJ) {
          try {
            JJ.send()
          } catch (cJ) {
            JJ.onerror()
          }
        },
        hJ = function(JJ, cJ) {
          var ZJ = function() {
              cJ._emit("loaderror", null, "Decoding audio data failed.")
            },
            FJ = function(JJ) {
              JJ && cJ._sounds.length > 0 ? (qJ[cJ._src] = JJ, DJ(cJ, JJ)) : ZJ()
            };
          "undefined" !== typeof Promise && 1 === eJ.ctx.decodeAudioData.length ? eJ.ctx.decodeAudioData(JJ).then(FJ).catch(ZJ) : eJ.ctx.decodeAudioData(JJ, FJ, ZJ)
        },
        DJ = function(JJ, cJ) {
          cJ && !JJ._duration && (JJ._duration = cJ.duration), 0 === Object.keys(JJ._sprite).length && (JJ._sprite = {
            __default: [0, 1e3 * JJ._duration]
          }), "loaded" !== JJ._state && (JJ._state = "loaded", JJ._emit("load"), JJ._loadQueue())
        },
        sJ = function() {
          if (eJ.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? eJ.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? eJ.ctx = new webkitAudioContext : eJ.usingWebAudio = !1
            } catch (UJ) {
              eJ.usingWebAudio = !1
            }
            eJ.ctx || (eJ.usingWebAudio = !1);
            var JJ = /iP(hone|od|ad)/.test(eJ._navigator && eJ._navigator.platform),
              cJ = eJ._navigator && eJ._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              ZJ = cJ ? parseInt(cJ[1], 10) : null;
            if (JJ && ZJ && ZJ < 9) {
              var FJ = /safari/.test(eJ._navigator && eJ._navigator.userAgent.toLowerCase());
              eJ._navigator && !FJ && (eJ.usingWebAudio = !1)
            }
            eJ.usingWebAudio && (eJ.masterGain = "undefined" === typeof eJ.ctx.createGain ? eJ.ctx.createGainNode() : eJ.ctx.createGain(), eJ.masterGain.gain.setValueAtTime(eJ._muted ? 0 : eJ._volume, eJ.ctx.currentTime), eJ.masterGain.connect(eJ.ctx.destination)), eJ._setup()
          }
        };
      void 0 === (FJ = function() {
        return {
          Howler: eJ,
          Howl: XJ
        }
      }.apply(cJ, [])) || (JJ.exports = FJ), cJ.Howler = eJ, cJ.Howl = XJ, "undefined" !== typeof ZJ.g ? (ZJ.g.HowlerGlobal = UJ, ZJ.g.Howler = eJ, ZJ.g.Howl = XJ, ZJ.g.Sound = AJ) : "undefined" !== typeof window && (window.HowlerGlobal = UJ, window.Howler = eJ, window.Howl = XJ, window.Sound = AJ)
    }(),
    function() {
      var JJ;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(JJ) {
        var cJ = this;
        if (!cJ.ctx || !cJ.ctx.listener) return cJ;
        for (var ZJ = cJ._howls.length - 1; ZJ >= 0; ZJ--) cJ._howls[ZJ].stereo(JJ);
        return cJ
      }, HowlerGlobal.prototype.pos = function(JJ, cJ, ZJ) {
        var FJ = this;
        return FJ.ctx && FJ.ctx.listener ? (cJ = "number" !== typeof cJ ? FJ._pos[1] : cJ, ZJ = "number" !== typeof ZJ ? FJ._pos[2] : ZJ, "number" !== typeof JJ ? FJ._pos : (FJ._pos = [JJ, cJ, ZJ], "undefined" !== typeof FJ.ctx.listener.positionX ? (FJ.ctx.listener.positionX.setTargetAtTime(FJ._pos[0], Howler.ctx.currentTime, .1), FJ.ctx.listener.positionY.setTargetAtTime(FJ._pos[1], Howler.ctx.currentTime, .1), FJ.ctx.listener.positionZ.setTargetAtTime(FJ._pos[2], Howler.ctx.currentTime, .1)) : FJ.ctx.listener.setPosition(FJ._pos[0], FJ._pos[1], FJ._pos[2]), FJ)) : FJ
      }, HowlerGlobal.prototype.orientation = function(JJ, cJ, ZJ, FJ, UJ, eJ) {
        var XJ = this;
        if (!XJ.ctx || !XJ.ctx.listener) return XJ;
        var AJ = XJ._orientation;
        return cJ = "number" !== typeof cJ ? AJ[1] : cJ, ZJ = "number" !== typeof ZJ ? AJ[2] : ZJ, FJ = "number" !== typeof FJ ? AJ[3] : FJ, UJ = "number" !== typeof UJ ? AJ[4] : UJ, eJ = "number" !== typeof eJ ? AJ[5] : eJ, "number" !== typeof JJ ? AJ : (XJ._orientation = [JJ, cJ, ZJ, FJ, UJ, eJ], "undefined" !== typeof XJ.ctx.listener.forwardX ? (XJ.ctx.listener.forwardX.setTargetAtTime(JJ, Howler.ctx.currentTime, .1), XJ.ctx.listener.forwardY.setTargetAtTime(cJ, Howler.ctx.currentTime, .1), XJ.ctx.listener.forwardZ.setTargetAtTime(ZJ, Howler.ctx.currentTime, .1), XJ.ctx.listener.upX.setTargetAtTime(FJ, Howler.ctx.currentTime, .1), XJ.ctx.listener.upY.setTargetAtTime(UJ, Howler.ctx.currentTime, .1), XJ.ctx.listener.upZ.setTargetAtTime(eJ, Howler.ctx.currentTime, .1)) : XJ.ctx.listener.setOrientation(JJ, cJ, ZJ, FJ, UJ, eJ), XJ)
      }, Howl.prototype.init = (JJ = Howl.prototype.init, function(cJ) {
        var ZJ = this;
        return ZJ._orientation = cJ.orientation || [1, 0, 0], ZJ._stereo = cJ.stereo || null, ZJ._pos = cJ.pos || null, ZJ._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof cJ.coneInnerAngle ? cJ.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof cJ.coneOuterAngle ? cJ.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof cJ.coneOuterGain ? cJ.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof cJ.distanceModel ? cJ.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof cJ.maxDistance ? cJ.maxDistance : 1e4,
          panningModel: "undefined" !== typeof cJ.panningModel ? cJ.panningModel : "HRTF",
          refDistance: "undefined" !== typeof cJ.refDistance ? cJ.refDistance : 1,
          rolloffFactor: "undefined" !== typeof cJ.rolloffFactor ? cJ.rolloffFactor : 1
        }, ZJ._onstereo = cJ.onstereo ? [{
          Un: cJ.onstereo
        }] : [], ZJ._onpos = cJ.onpos ? [{
          Un: cJ.onpos
        }] : [], ZJ._onorientation = cJ.onorientation ? [{
          Un: cJ.onorientation
        }] : [], JJ.call(this, cJ)
      }), Howl.prototype.stereo = function(JJ, ZJ) {
        var FJ = this;
        if (!FJ._webAudio) return FJ;
        if ("loaded" !== FJ._state) return FJ._queue.push({
          event: "stereo",
          action: function() {
            FJ.stereo(JJ, ZJ)
          }
        }), FJ;
        var UJ = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof ZJ) {
          if ("number" !== typeof JJ) return FJ._stereo;
          FJ._stereo = JJ, FJ._pos = [JJ, 0, 0]
        }
        for (var eJ = FJ._getSoundIds(ZJ), XJ = 0; XJ < eJ.length; XJ++) {
          var AJ = FJ._soundById(eJ[XJ]);
          if (AJ) {
            if ("number" !== typeof JJ) return AJ._stereo;
            AJ._stereo = JJ, AJ._pos = [JJ, 0, 0], AJ._node && (AJ._pannerAttr.panningModel = "equalpower", AJ._panner && AJ._panner.pan || cJ(AJ, UJ), "spatial" === UJ ? "undefined" !== typeof AJ._panner.positionX ? (AJ._panner.positionX.setValueAtTime(JJ, Howler.ctx.currentTime), AJ._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), AJ._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : AJ._panner.setPosition(JJ, 0, 0) : AJ._panner.pan.setValueAtTime(JJ, Howler.ctx.currentTime)), FJ._emit("stereo", AJ._id)
          }
        }
        return FJ
      }, Howl.prototype.pos = function(JJ, ZJ, FJ, UJ) {
        var eJ = this;
        if (!eJ._webAudio) return eJ;
        if ("loaded" !== eJ._state) return eJ._queue.push({
          event: "pos",
          action: function() {
            eJ.pos(JJ, ZJ, FJ, UJ)
          }
        }), eJ;
        if (ZJ = "number" !== typeof ZJ ? 0 : ZJ, FJ = "number" !== typeof FJ ? -.5 : FJ, "undefined" === typeof UJ) {
          if ("number" !== typeof JJ) return eJ._pos;
          eJ._pos = [JJ, ZJ, FJ]
        }
        for (var XJ = eJ._getSoundIds(UJ), AJ = 0; AJ < XJ.length; AJ++) {
          var qJ = eJ._soundById(XJ[AJ]);
          if (qJ) {
            if ("number" !== typeof JJ) return qJ._pos;
            qJ._pos = [JJ, ZJ, FJ], qJ._node && (qJ._panner && !qJ._panner.pan || cJ(qJ, "spatial"), "undefined" !== typeof qJ._panner.positionX ? (qJ._panner.positionX.setValueAtTime(JJ, Howler.ctx.currentTime), qJ._panner.positionY.setValueAtTime(ZJ, Howler.ctx.currentTime), qJ._panner.positionZ.setValueAtTime(FJ, Howler.ctx.currentTime)) : qJ._panner.setPosition(JJ, ZJ, FJ)), eJ._emit("pos", qJ._id)
          }
        }
        return eJ
      }, Howl.prototype.orientation = function(JJ, ZJ, FJ, UJ) {
        var eJ = this;
        if (!eJ._webAudio) return eJ;
        if ("loaded" !== eJ._state) return eJ._queue.push({
          event: "orientation",
          action: function() {
            eJ.orientation(JJ, ZJ, FJ, UJ)
          }
        }), eJ;
        if (ZJ = "number" !== typeof ZJ ? eJ._orientation[1] : ZJ, FJ = "number" !== typeof FJ ? eJ._orientation[2] : FJ, "undefined" === typeof UJ) {
          if ("number" !== typeof JJ) return eJ._orientation;
          eJ._orientation = [JJ, ZJ, FJ]
        }
        for (var XJ = eJ._getSoundIds(UJ), AJ = 0; AJ < XJ.length; AJ++) {
          var qJ = eJ._soundById(XJ[AJ]);
          if (qJ) {
            if ("number" !== typeof JJ) return qJ._orientation;
            qJ._orientation = [JJ, ZJ, FJ], qJ._node && (qJ._panner || (qJ._pos || (qJ._pos = eJ._pos || [0, 0, -.5]), cJ(qJ, "spatial")), "undefined" !== typeof qJ._panner.orientationX ? (qJ._panner.orientationX.setValueAtTime(JJ, Howler.ctx.currentTime), qJ._panner.orientationY.setValueAtTime(ZJ, Howler.ctx.currentTime), qJ._panner.orientationZ.setValueAtTime(FJ, Howler.ctx.currentTime)) : qJ._panner.setOrientation(JJ, ZJ, FJ)), eJ._emit("orientation", qJ._id)
          }
        }
        return eJ
      }, Howl.prototype.pannerAttr = function() {
        var JJ, ZJ, FJ, UJ = this,
          eJ = arguments;
        if (!UJ._webAudio) return UJ;
        if (0 === eJ.length) return UJ._pannerAttr;
        if (1 === eJ.length) {
          if ("object" !== typeof eJ[0]) return (FJ = UJ._soundById(parseInt(eJ[0], 10))) ? FJ._pannerAttr : UJ._pannerAttr;
          JJ = eJ[0], "undefined" === typeof ZJ && (JJ.pannerAttr || (JJ.pannerAttr = {
            coneInnerAngle: JJ.coneInnerAngle,
            coneOuterAngle: JJ.coneOuterAngle,
            coneOuterGain: JJ.coneOuterGain,
            distanceModel: JJ.distanceModel,
            maxDistance: JJ.maxDistance,
            refDistance: JJ.refDistance,
            rolloffFactor: JJ.rolloffFactor,
            panningModel: JJ.panningModel
          }), UJ._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof JJ.pannerAttr.coneInnerAngle ? JJ.pannerAttr.coneInnerAngle : UJ._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof JJ.pannerAttr.coneOuterAngle ? JJ.pannerAttr.coneOuterAngle : UJ._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof JJ.pannerAttr.coneOuterGain ? JJ.pannerAttr.coneOuterGain : UJ._coneOuterGain,
            distanceModel: "undefined" !== typeof JJ.pannerAttr.distanceModel ? JJ.pannerAttr.distanceModel : UJ._distanceModel,
            maxDistance: "undefined" !== typeof JJ.pannerAttr.maxDistance ? JJ.pannerAttr.maxDistance : UJ._maxDistance,
            refDistance: "undefined" !== typeof JJ.pannerAttr.refDistance ? JJ.pannerAttr.refDistance : UJ._refDistance,
            rolloffFactor: "undefined" !== typeof JJ.pannerAttr.rolloffFactor ? JJ.pannerAttr.rolloffFactor : UJ._rolloffFactor,
            panningModel: "undefined" !== typeof JJ.pannerAttr.panningModel ? JJ.pannerAttr.panningModel : UJ._panningModel
          })
        } else 2 === eJ.length && (JJ = eJ[0], ZJ = parseInt(eJ[1], 10));
        for (var XJ = UJ._getSoundIds(ZJ), AJ = 0; AJ < XJ.length; AJ++)
          if (FJ = UJ._soundById(XJ[AJ])) {
            var qJ = FJ._pannerAttr;
            qJ = {
              coneInnerAngle: "undefined" !== typeof JJ.coneInnerAngle ? JJ.coneInnerAngle : qJ.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof JJ.coneOuterAngle ? JJ.coneOuterAngle : qJ.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof JJ.coneOuterGain ? JJ.coneOuterGain : qJ.coneOuterGain,
              distanceModel: "undefined" !== typeof JJ.distanceModel ? JJ.distanceModel : qJ.distanceModel,
              maxDistance: "undefined" !== typeof JJ.maxDistance ? JJ.maxDistance : qJ.maxDistance,
              refDistance: "undefined" !== typeof JJ.refDistance ? JJ.refDistance : qJ.refDistance,
              rolloffFactor: "undefined" !== typeof JJ.rolloffFactor ? JJ.rolloffFactor : qJ.rolloffFactor,
              panningModel: "undefined" !== typeof JJ.panningModel ? JJ.panningModel : qJ.panningModel
            };
            var jJ = FJ._panner;
            jJ ? (jJ.coneInnerAngle = qJ.coneInnerAngle, jJ.coneOuterAngle = qJ.coneOuterAngle, jJ.coneOuterGain = qJ.coneOuterGain, jJ.distanceModel = qJ.distanceModel, jJ.maxDistance = qJ.maxDistance, jJ.refDistance = qJ.refDistance, jJ.rolloffFactor = qJ.rolloffFactor, jJ.panningModel = qJ.panningModel) : (FJ._pos || (FJ._pos = UJ._pos || [0, 0, -.5]), cJ(FJ, "spatial"))
          } return UJ
      }, Sound.prototype.init = function(JJ) {
        return function() {
          var cJ = this,
            ZJ = cJ._parent;
          cJ._orientation = ZJ._orientation, cJ._stereo = ZJ._stereo, cJ._pos = ZJ._pos, cJ._pannerAttr = ZJ._pannerAttr, JJ.call(this), cJ._stereo ? ZJ.stereo(cJ._stereo) : cJ._pos && ZJ.pos(cJ._pos[0], cJ._pos[1], cJ._pos[2], cJ._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(JJ) {
        return function() {
          var cJ = this,
            ZJ = cJ._parent;
          return cJ._orientation = ZJ._orientation, cJ._stereo = ZJ._stereo, cJ._pos = ZJ._pos, cJ._pannerAttr = ZJ._pannerAttr, cJ._stereo ? ZJ.stereo(cJ._stereo) : cJ._pos ? ZJ.pos(cJ._pos[0], cJ._pos[1], cJ._pos[2], cJ._id) : cJ._panner && (cJ._panner.disconnect(0), cJ._panner = void 0, ZJ._refreshBuffer(cJ)), JJ.call(this)
        }
      }(Sound.prototype.reset);
      var cJ = function(JJ, cJ) {
        "spatial" === (cJ = cJ || "spatial") ? (JJ._panner = Howler.ctx.createPanner(), JJ._panner.coneInnerAngle = JJ._pannerAttr.coneInnerAngle, JJ._panner.coneOuterAngle = JJ._pannerAttr.coneOuterAngle, JJ._panner.coneOuterGain = JJ._pannerAttr.coneOuterGain, JJ._panner.distanceModel = JJ._pannerAttr.distanceModel, JJ._panner.maxDistance = JJ._pannerAttr.maxDistance, JJ._panner.refDistance = JJ._pannerAttr.refDistance, JJ._panner.rolloffFactor = JJ._pannerAttr.rolloffFactor, JJ._panner.panningModel = JJ._pannerAttr.panningModel, "undefined" !== typeof JJ._panner.positionX ? (JJ._panner.positionX.setValueAtTime(JJ._pos[0], Howler.ctx.currentTime), JJ._panner.positionY.setValueAtTime(JJ._pos[1], Howler.ctx.currentTime), JJ._panner.positionZ.setValueAtTime(JJ._pos[2], Howler.ctx.currentTime)) : JJ._panner.setPosition(JJ._pos[0], JJ._pos[1], JJ._pos[2]), "undefined" !== typeof JJ._panner.orientationX ? (JJ._panner.orientationX.setValueAtTime(JJ._orientation[0], Howler.ctx.currentTime), JJ._panner.orientationY.setValueAtTime(JJ._orientation[1], Howler.ctx.currentTime), JJ._panner.orientationZ.setValueAtTime(JJ._orientation[2], Howler.ctx.currentTime)) : JJ._panner.setOrientation(JJ._orientation[0], JJ._orientation[1], JJ._orientation[2])) : (JJ._panner = Howler.ctx.createStereoPanner(), JJ._panner.pan.setValueAtTime(JJ._stereo, Howler.ctx.currentTime)), JJ._panner.connect(JJ._node), JJ.kE || JJ._parent.pause(JJ._id, !0).play(JJ._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);