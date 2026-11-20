/*! For license information please see bcgkc.95.c6b5ecb8.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  4825: (TT, kT, cT) => {
    var lT;
    ! function() {
      var MT = function() {
        this.init()
      };
      MT.prototype = {
        init: function() {
          var TT = this || KT;
          return TT._counter = 1e3, TT._html5AudioPool = [], TT.html5PoolSize = 10, TT._codecs = {}, TT._howls = [], TT._muted = !1, TT._volume = 1, TT._canPlayEvent = "canplaythrough", TT._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, TT.masterGain = null, TT.noAudio = !1, TT.usingWebAudio = !0, TT.autoSuspend = !0, TT.ctx = null, TT.autoUnlock = !0, TT._setup(), TT
        },
        volume: function(TT) {
          var kT = this || KT;
          if (TT = parseFloat(TT), kT.ctx || jT(), "undefined" !== typeof TT && TT >= 0 && TT <= 1) {
            if (kT._volume = TT, kT._muted) return kT;
            kT.usingWebAudio && kT.masterGain.gain.setValueAtTime(TT, KT.ctx.currentTime);
            for (var cT = 0; cT < kT._howls.length; cT++)
              if (!kT._howls[cT]._webAudio)
                for (var lT = kT._howls[cT]._getSoundIds(), MT = 0; MT < lT.length; MT++) {
                  var OT = kT._howls[cT]._soundById(lT[MT]);
                  OT && OT._node && (OT._node.volume = OT._volume * TT)
                }
            return kT
          }
          return kT._volume
        },
        mute: function(TT) {
          var kT = this || KT;
          kT.ctx || jT(), kT._muted = TT, kT.usingWebAudio && kT.masterGain.gain.setValueAtTime(TT ? 0 : kT._volume, KT.ctx.currentTime);
          for (var cT = 0; cT < kT._howls.length; cT++)
            if (!kT._howls[cT]._webAudio)
              for (var lT = kT._howls[cT]._getSoundIds(), MT = 0; MT < lT.length; MT++) {
                var OT = kT._howls[cT]._soundById(lT[MT]);
                OT && OT._node && (OT._node.muted = !!TT || OT._muted)
              }
          return kT
        },
        stop: function() {
          for (var TT = this || KT, kT = 0; kT < TT._howls.length; kT++) TT._howls[kT].stop();
          return TT
        },
        unload: function() {
          for (var TT = this || KT, kT = TT._howls.length - 1; kT >= 0; kT--) TT._howls[kT].unload();
          return TT.usingWebAudio && TT.ctx && "undefined" !== typeof TT.ctx.close && (TT.ctx.close(), TT.ctx = null, jT()), TT
        },
        codecs: function(TT) {
          return (this || KT)._codecs[TT.replace(/^x-/, "")]
        },
        _setup: function() {
          var TT = this || KT;
          if (TT.state = TT.ctx && TT.ctx.state || "suspended", TT._autoSuspend(), !TT.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (TT._canPlayEvent = "canplay")
            } catch (kT) {
              TT.noAudio = !0
            } else TT.noAudio = !0;
          try {
            (new Audio).muted && (TT.noAudio = !0)
          } catch (kT) {}
          return TT.noAudio || TT._setupCodecs(), TT
        },
        _setupCodecs: function() {
          var TT = this || KT,
            kT = null;
          try {
            kT = "undefined" !== typeof Audio ? new Audio : null
          } catch (IT) {
            return TT
          }
          if (!kT || "function" !== typeof kT.canPlayType) return TT;
          var cT = kT.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            lT = TT._navigator ? TT._navigator.userAgent : "",
            MT = lT.match(/OPR\/([0-6].)/g),
            OT = MT && parseInt(MT[0].split("/")[1], 10) < 33,
            yT = -1 !== lT.indexOf("Safari") && -1 === lT.indexOf("Chrome"),
            fT = lT.match(/Version\/(.*?) /),
            xT = yT && fT && parseInt(fT[1], 10) < 15;
          return TT._codecs = {
            mp3: !(OT || !cT && !kT.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!cT,
            opus: !!kT.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!kT.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!kT.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(kT.canPlayType('audio/wav; codecs="1"') || kT.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!kT.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!kT.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(kT.canPlayType("audio/x-m4a;") || kT.canPlayType("audio/m4a;") || kT.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(kT.canPlayType("audio/x-m4b;") || kT.canPlayType("audio/m4b;") || kT.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(kT.canPlayType("audio/x-mp4;") || kT.canPlayType("audio/mp4;") || kT.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(xT || !kT.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(xT || !kT.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!kT.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(kT.canPlayType("audio/x-flac;") || kT.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, TT
        },
        _unlockAudio: function() {
          var TT = this || KT;
          if (!TT._audioUnlocked && TT.ctx) {
            TT._audioUnlocked = !1, TT.autoUnlock = !1, TT._mobileUnloaded || 44100 === TT.ctx.sampleRate || (TT._mobileUnloaded = !0, TT.unload()), TT._scratchBuffer = TT.ctx.createBuffer(1, 1, 22050);
            var kT = function(cT) {
              for (; TT._html5AudioPool.length < TT.html5PoolSize;) try {
                var lT = new Audio;
                lT._unlocked = !0, TT._releaseHtml5Audio(lT)
              } catch (cT) {
                TT.noAudio = !0;
                break
              }
              for (var MT = 0; MT < TT._howls.length; MT++)
                if (!TT._howls[MT]._webAudio)
                  for (var KT = TT._howls[MT]._getSoundIds(), OT = 0; OT < KT.length; OT++) {
                    var yT = TT._howls[MT]._soundById(KT[OT]);
                    yT && yT._node && !yT._node._unlocked && (yT._node._unlocked = !0, yT._node.load())
                  }
              TT._autoResume();
              var fT = TT.ctx.createBufferSource();
              fT.buffer = TT._scratchBuffer, fT.connect(TT.ctx.destination), "undefined" === typeof fT.start ? fT.noteOn(0) : fT.start(0), "function" === typeof TT.ctx.resume && TT.ctx.resume(), fT.onended = function() {
                fT.disconnect(0), TT._audioUnlocked = !0, document.removeEventListener("touchstart", kT, !0), document.removeEventListener("touchend", kT, !0), document.removeEventListener("click", kT, !0), document.removeEventListener("keydown", kT, !0);
                for (var cT = 0; cT < TT._howls.length; cT++) TT._howls[cT]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", kT, !0), document.addEventListener("touchend", kT, !0), document.addEventListener("click", kT, !0), document.addEventListener("keydown", kT, !0), TT
          }
        },
        _obtainHtml5Audio: function() {
          var TT = this || KT;
          if (TT._html5AudioPool.length) return TT._html5AudioPool.pop();
          var kT = (new Audio).play();
          return kT && "undefined" !== typeof Promise && (kT instanceof Promise || "function" === typeof kT.then) && kT.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(TT) {
          var kT = this || KT;
          return TT._unlocked && kT._html5AudioPool.push(TT), kT
        },
        _autoSuspend: function() {
          var TT = this;
          if (TT.autoSuspend && TT.ctx && "undefined" !== typeof TT.ctx.suspend && KT.usingWebAudio) {
            for (var kT = 0; kT < TT._howls.length; kT++)
              if (TT._howls[kT]._webAudio)
                for (var cT = 0; cT < TT._howls[kT]._sounds.length; cT++)
                  if (!TT._howls[kT]._sounds[cT].FQ) return TT;
            return TT._suspendTimer && clearTimeout(TT._suspendTimer), TT._suspendTimer = setTimeout((function() {
              if (TT.autoSuspend) {
                TT._suspendTimer = null, TT.state = "suspending";
                var kT = function() {
                  TT.state = "suspended", TT._resumeAfterSuspend && (delete TT._resumeAfterSuspend, TT._autoResume())
                };
                TT.ctx.suspend().then(kT, kT)
              }
            }), 3e4), TT
          }
        },
        _autoResume: function() {
          var TT = this;
          if (TT.ctx && "undefined" !== typeof TT.ctx.resume && KT.usingWebAudio) return "running" === TT.state && "interrupted" !== TT.ctx.state && TT._suspendTimer ? (clearTimeout(TT._suspendTimer), TT._suspendTimer = null) : "suspended" === TT.state || "running" === TT.state && "interrupted" === TT.ctx.state ? (TT.ctx.resume().then((function() {
            TT.state = "running";
            for (var kT = 0; kT < TT._howls.length; kT++) TT._howls[kT]._emit("resume")
          })), TT._suspendTimer && (clearTimeout(TT._suspendTimer), TT._suspendTimer = null)) : "suspending" === TT.state && (TT._resumeAfterSuspend = !0), TT
        }
      };
      var KT = new MT,
        OT = function(TT) {
          TT.src && 0 !== TT.src.length ? this.init(TT) : console.error("An array of source files must be passed with any new Howl.")
        };
      OT.prototype = {
        init: function(TT) {
          var kT = this;
          return KT.ctx || jT(), kT._autoplay = TT.autoplay || !1, kT._format = "string" !== typeof TT.format ? TT.format : [TT.format], kT._html5 = TT.html5 || !1, kT._muted = TT.mute || !1, kT._loop = TT.loop || !1, kT._pool = TT.pool || 5, kT._preload = "boolean" !== typeof TT.preload && "metadata" !== TT.preload || TT.preload, kT._rate = TT.rate || 1, kT._sprite = TT.sprite || {}, kT._src = "string" !== typeof TT.src ? TT.src : [TT.src], kT._volume = void 0 !== TT.volume ? TT.volume : 1, kT._xhr = {
            method: TT.xhr && TT.xhr.method ? TT.xhr.method : "GET",
            headers: TT.xhr && TT.xhr.headers ? TT.xhr.headers : null,
            withCredentials: !(!TT.xhr || !TT.xhr.withCredentials) && TT.xhr.withCredentials
          }, kT._duration = 0, kT._state = "unloaded", kT._sounds = [], kT._endTimers = {}, kT._queue = [], kT._playLock = !1, kT._onend = TT.onend ? [{
            nj: TT.onend
          }] : [], kT._onfade = TT.onfade ? [{
            nj: TT.onfade
          }] : [], kT._onload = TT.onload ? [{
            nj: TT.onload
          }] : [], kT._onloaderror = TT.onloaderror ? [{
            nj: TT.onloaderror
          }] : [], kT._onplayerror = TT.onplayerror ? [{
            nj: TT.onplayerror
          }] : [], kT._onpause = TT.onpause ? [{
            nj: TT.onpause
          }] : [], kT._onplay = TT.onplay ? [{
            nj: TT.onplay
          }] : [], kT._onstop = TT.onstop ? [{
            nj: TT.onstop
          }] : [], kT._onmute = TT.onmute ? [{
            nj: TT.onmute
          }] : [], kT._onvolume = TT.onvolume ? [{
            nj: TT.onvolume
          }] : [], kT._onrate = TT.onrate ? [{
            nj: TT.onrate
          }] : [], kT._onseek = TT.onseek ? [{
            nj: TT.onseek
          }] : [], kT._onunlock = TT.onunlock ? [{
            nj: TT.onunlock
          }] : [], kT._onresume = [], kT._webAudio = KT.usingWebAudio && !kT._html5, "undefined" !== typeof KT.ctx && KT.ctx && KT.autoUnlock && KT._unlockAudio(), KT._howls.push(kT), kT._autoplay && kT._queue.push({
            event: "play",
            action: function() {
              kT.play()
            }
          }), kT._preload && "none" !== kT._preload && kT.load(), kT
        },
        load: function() {
          var TT = this,
            kT = null;
          if (KT.noAudio) TT._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof TT._src && (TT._src = [TT._src]);
            for (var cT = 0; cT < TT._src.length; cT++) {
              var lT, MT;
              if (TT._format && TT._format[cT]) lT = TT._format[cT];
              else {
                if ("string" !== typeof(MT = TT._src[cT])) {
                  TT._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(lT = /^data:audio\/([^;,]+);/i.exec(MT)) || (lT = /\.([^.]+)$/.exec(MT.split("?", 1)[0])), lT && (lT = lT[1].toLowerCase())
              }
              if (lT || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), lT && KT.codecs(lT)) {
                kT = TT._src[cT];
                break
              }
            }
            if (kT) return TT._src = kT, TT._state = "loading", "https:" === window.location.protocol && "http:" === kT.slice(0, 5) && (TT._html5 = !0, TT._webAudio = !1), new yT(TT), TT._webAudio && xT(TT), TT;
            TT._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(TT, kT) {
          var cT = this,
            lT = null;
          if ("number" === typeof TT) lT = TT, TT = null;
          else {
            if ("string" === typeof TT && "loaded" === cT._state && !cT._sprite[TT]) return null;
            if ("undefined" === typeof TT && (TT = "__default", !cT._playLock)) {
              for (var MT = 0, OT = 0; OT < cT._sounds.length; OT++) cT._sounds[OT].FQ && !cT._sounds[OT]._ended && (MT++, lT = cT._sounds[OT]._id);
              1 === MT ? TT = null : lT = null
            }
          }
          var yT = lT ? cT._soundById(lT) : cT._inactiveSound();
          if (!yT) return null;
          if (lT && !TT && (TT = yT._sprite || "__default"), "loaded" !== cT._state) {
            yT._sprite = TT, yT._ended = !1;
            var fT = yT._id;
            return cT._queue.push({
              event: "play",
              action: function() {
                cT.play(fT)
              }
            }), fT
          }
          if (lT && !yT.FQ) return kT || cT._loadQueue("play"), yT._id;
          cT._webAudio && KT._autoResume();
          var xT = Math.max(0, yT._seek > 0 ? yT._seek : cT._sprite[TT][0] / 1e3),
            IT = Math.max(0, (cT._sprite[TT][0] + cT._sprite[TT][1]) / 1e3 - xT),
            AT = 1e3 * IT / Math.abs(yT._rate),
            CT = cT._sprite[TT][0] / 1e3,
            jT = (cT._sprite[TT][0] + cT._sprite[TT][1]) / 1e3;
          yT._sprite = TT, yT._ended = !1;
          var vT = function() {
            yT.FQ = !1, yT._seek = xT, yT._start = CT, yT._stop = jT, yT._loop = !(!yT._loop && !cT._sprite[TT][2])
          };
          if (!(xT >= jT)) {
            var tT = yT._node;
            if (cT._webAudio) {
              var hT = function() {
                cT._playLock = !1, vT(), cT._refreshBuffer(yT);
                var TT = yT._muted || cT._muted ? 0 : yT._volume;
                tT.gain.setValueAtTime(TT, KT.ctx.currentTime), yT._playStart = KT.ctx.currentTime, "undefined" === typeof tT.bufferSource.start ? yT._loop ? tT.bufferSource.noteGrainOn(0, xT, 86400) : tT.bufferSource.noteGrainOn(0, xT, IT) : yT._loop ? tT.bufferSource.start(0, xT, 86400) : tT.bufferSource.start(0, xT, IT), AT !== 1 / 0 && (cT._endTimers[yT._id] = setTimeout(cT._ended.bind(cT, yT), AT)), kT || setTimeout((function() {
                  cT._emit("play", yT._id), cT._loadQueue()
                }), 0)
              };
              "running" === KT.state && "interrupted" !== KT.ctx.state ? hT() : (cT._playLock = !0, cT.once("resume", hT), cT._clearTimer(yT._id))
            } else {
              var NT = function() {
                tT.currentTime = xT, tT.muted = yT._muted || cT._muted || KT._muted || tT.muted, tT.volume = yT._volume * KT.volume(), tT.playbackRate = yT._rate;
                try {
                  var lT = tT.play();
                  if (lT && "undefined" !== typeof Promise && (lT instanceof Promise || "function" === typeof lT.then) ? (cT._playLock = !0, vT(), lT.then((function() {
                      cT._playLock = !1, tT._unlocked = !0, kT ? cT._loadQueue() : cT._emit("play", yT._id)
                    })).catch((function() {
                      cT._playLock = !1, cT._emit("playerror", yT._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), yT._ended = !0, yT.FQ = !0
                    }))) : kT || (cT._playLock = !1, vT(), cT._emit("play", yT._id)), tT.playbackRate = yT._rate, tT.paused) return void cT._emit("playerror", yT._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== TT || yT._loop ? cT._endTimers[yT._id] = setTimeout(cT._ended.bind(cT, yT), AT) : (cT._endTimers[yT._id] = function() {
                    cT._ended(yT), tT.removeEventListener("ended", cT._endTimers[yT._id], !1)
                  }, tT.addEventListener("ended", cT._endTimers[yT._id], !1))
                } catch (MT) {
                  cT._emit("playerror", yT._id, MT)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === tT.src && (tT.src = cT._src, tT.load());
              var QT = window && window.ejecta || !tT.readyState && KT._navigator.isCocoonJS;
              if (tT.readyState >= 3 || QT) NT();
              else {
                cT._playLock = !0, cT._state = "loading";
                var ST = function() {
                  cT._state = "loaded", NT(), tT.removeEventListener(KT._canPlayEvent, ST, !1)
                };
                tT.addEventListener(KT._canPlayEvent, ST, !1), cT._clearTimer(yT._id)
              }
            }
            return yT._id
          }
          cT._ended(yT)
        },
        pause: function(TT) {
          var kT = this;
          if ("loaded" !== kT._state || kT._playLock) return kT._queue.push({
            event: "pause",
            action: function() {
              kT.pause(TT)
            }
          }), kT;
          for (var cT = kT._getSoundIds(TT), lT = 0; lT < cT.length; lT++) {
            kT._clearTimer(cT[lT]);
            var MT = kT._soundById(cT[lT]);
            if (MT && !MT.FQ && (MT._seek = kT.seek(cT[lT]), MT._rateSeek = 0, MT.FQ = !0, kT._stopFade(cT[lT]), MT._node))
              if (kT._webAudio) {
                if (!MT._node.bufferSource) continue;
                "undefined" === typeof MT._node.bufferSource.stop ? MT._node.bufferSource.noteOff(0) : MT._node.bufferSource.stop(0), kT._cleanBuffer(MT._node)
              } else isNaN(MT._node.duration) && MT._node.duration !== 1 / 0 || MT._node.pause();
            arguments[1] || kT._emit("pause", MT ? MT._id : null)
          }
          return kT
        },
        stop: function(TT, kT) {
          var cT = this;
          if ("loaded" !== cT._state || cT._playLock) return cT._queue.push({
            event: "stop",
            action: function() {
              cT.stop(TT)
            }
          }), cT;
          for (var lT = cT._getSoundIds(TT), MT = 0; MT < lT.length; MT++) {
            cT._clearTimer(lT[MT]);
            var KT = cT._soundById(lT[MT]);
            KT && (KT._seek = KT._start || 0, KT._rateSeek = 0, KT.FQ = !0, KT._ended = !0, cT._stopFade(lT[MT]), KT._node && (cT._webAudio ? KT._node.bufferSource && ("undefined" === typeof KT._node.bufferSource.stop ? KT._node.bufferSource.noteOff(0) : KT._node.bufferSource.stop(0), cT._cleanBuffer(KT._node)) : isNaN(KT._node.duration) && KT._node.duration !== 1 / 0 || (KT._node.currentTime = KT._start || 0, KT._node.pause(), KT._node.duration === 1 / 0 && cT._clearSound(KT._node))), kT || cT._emit("stop", KT._id))
          }
          return cT
        },
        mute: function(TT, kT) {
          var cT = this;
          if ("loaded" !== cT._state || cT._playLock) return cT._queue.push({
            event: "mute",
            action: function() {
              cT.mute(TT, kT)
            }
          }), cT;
          if ("undefined" === typeof kT) {
            if ("boolean" !== typeof TT) return cT._muted;
            cT._muted = TT
          }
          for (var lT = cT._getSoundIds(kT), MT = 0; MT < lT.length; MT++) {
            var OT = cT._soundById(lT[MT]);
            OT && (OT._muted = TT, OT._interval && cT._stopFade(OT._id), cT._webAudio && OT._node ? OT._node.gain.setValueAtTime(TT ? 0 : OT._volume, KT.ctx.currentTime) : OT._node && (OT._node.muted = !!KT._muted || TT), cT._emit("mute", OT._id))
          }
          return cT
        },
        volume: function() {
          var TT, kT, cT, lT = this,
            MT = arguments;
          if (0 === MT.length) return lT._volume;
          if (1 === MT.length || 2 === MT.length && "undefined" === typeof MT[1] ? lT._getSoundIds().indexOf(MT[0]) >= 0 ? kT = parseInt(MT[0], 10) : TT = parseFloat(MT[0]) : MT.length >= 2 && (TT = parseFloat(MT[0]), kT = parseInt(MT[1], 10)), !("undefined" !== typeof TT && TT >= 0 && TT <= 1)) return (cT = kT ? lT._soundById(kT) : lT._sounds[0]) ? cT._volume : 0;
          if ("loaded" !== lT._state || lT._playLock) return lT._queue.push({
            event: "volume",
            action: function() {
              lT.volume.apply(lT, MT)
            }
          }), lT;
          "undefined" === typeof kT && (lT._volume = TT), kT = lT._getSoundIds(kT);
          for (var OT = 0; OT < kT.length; OT++)(cT = lT._soundById(kT[OT])) && (cT._volume = TT, MT[2] || lT._stopFade(kT[OT]), lT._webAudio && cT._node && !cT._muted ? cT._node.gain.setValueAtTime(TT, KT.ctx.currentTime) : cT._node && !cT._muted && (cT._node.volume = TT * KT.volume()), lT._emit("volume", cT._id));
          return lT
        },
        fade: function(TT, kT, cT, lT) {
          var MT = this;
          if ("loaded" !== MT._state || MT._playLock) return MT._queue.push({
            event: "fade",
            action: function() {
              MT.fade(TT, kT, cT, lT)
            }
          }), MT;
          TT = Math.min(Math.max(0, parseFloat(TT)), 1), kT = Math.min(Math.max(0, parseFloat(kT)), 1), cT = parseFloat(cT), MT.volume(TT, lT);
          for (var OT = MT._getSoundIds(lT), yT = 0; yT < OT.length; yT++) {
            var fT = MT._soundById(OT[yT]);
            if (fT) {
              if (lT || MT._stopFade(OT[yT]), MT._webAudio && !fT._muted) {
                var xT = KT.ctx.currentTime,
                  IT = xT + cT / 1e3;
                fT._volume = TT, fT._node.gain.setValueAtTime(TT, xT), fT._node.gain.linearRampToValueAtTime(kT, IT)
              }
              MT._startFadeInterval(fT, TT, kT, cT, OT[yT], "undefined" === typeof lT)
            }
          }
          return MT
        },
        _startFadeInterval: function(TT, kT, cT, lT, MT, KT) {
          var OT = this,
            yT = kT,
            fT = cT - kT,
            xT = Math.abs(fT / .01),
            IT = Math.max(4, xT > 0 ? lT / xT : lT),
            AT = Date.now();
          TT._fadeTo = cT, TT._interval = setInterval((function() {
            var MT = (Date.now() - AT) / lT;
            AT = Date.now(), yT += fT * MT, yT = Math.round(100 * yT) / 100, yT = fT < 0 ? Math.max(cT, yT) : Math.min(cT, yT), OT._webAudio ? TT._volume = yT : OT.volume(yT, TT._id, !0), KT && (OT._volume = yT), (cT < kT && yT <= cT || cT > kT && yT >= cT) && (clearInterval(TT._interval), TT._interval = null, TT._fadeTo = null, OT.volume(cT, TT._id), OT._emit("fade", TT._id))
          }), IT)
        },
        _stopFade: function(TT) {
          var kT = this,
            cT = kT._soundById(TT);
          return cT && cT._interval && (kT._webAudio && cT._node.gain.cancelScheduledValues(KT.ctx.currentTime), clearInterval(cT._interval), cT._interval = null, kT.volume(cT._fadeTo, TT), cT._fadeTo = null, kT._emit("fade", TT)), kT
        },
        loop: function() {
          var TT, kT, cT, lT = this,
            MT = arguments;
          if (0 === MT.length) return lT._loop;
          if (1 === MT.length) {
            if ("boolean" !== typeof MT[0]) return !!(cT = lT._soundById(parseInt(MT[0], 10))) && cT._loop;
            TT = MT[0], lT._loop = TT
          } else 2 === MT.length && (TT = MT[0], kT = parseInt(MT[1], 10));
          for (var KT = lT._getSoundIds(kT), OT = 0; OT < KT.length; OT++)(cT = lT._soundById(KT[OT])) && (cT._loop = TT, lT._webAudio && cT._node && cT._node.bufferSource && (cT._node.bufferSource.loop = TT, TT && (cT._node.bufferSource.loopStart = cT._start || 0, cT._node.bufferSource.loopEnd = cT._stop, lT.playing(KT[OT]) && (lT.pause(KT[OT], !0), lT.play(KT[OT], !0)))));
          return lT
        },
        rate: function() {
          var TT, kT, cT, lT = this,
            MT = arguments;
          if (0 === MT.length) kT = lT._sounds[0]._id;
          else if (1 === MT.length) {
            lT._getSoundIds().indexOf(MT[0]) >= 0 ? kT = parseInt(MT[0], 10) : TT = parseFloat(MT[0])
          } else 2 === MT.length && (TT = parseFloat(MT[0]), kT = parseInt(MT[1], 10));
          if ("number" !== typeof TT) return (cT = lT._soundById(kT)) ? cT._rate : lT._rate;
          if ("loaded" !== lT._state || lT._playLock) return lT._queue.push({
            event: "rate",
            action: function() {
              lT.rate.apply(lT, MT)
            }
          }), lT;
          "undefined" === typeof kT && (lT._rate = TT), kT = lT._getSoundIds(kT);
          for (var OT = 0; OT < kT.length; OT++)
            if (cT = lT._soundById(kT[OT])) {
              lT.playing(kT[OT]) && (cT._rateSeek = lT.seek(kT[OT]), cT._playStart = lT._webAudio ? KT.ctx.currentTime : cT._playStart), cT._rate = TT, lT._webAudio && cT._node && cT._node.bufferSource ? cT._node.bufferSource.playbackRate.setValueAtTime(TT, KT.ctx.currentTime) : cT._node && (cT._node.playbackRate = TT);
              var yT = lT.seek(kT[OT]),
                fT = 1e3 * ((lT._sprite[cT._sprite][0] + lT._sprite[cT._sprite][1]) / 1e3 - yT) / Math.abs(cT._rate);
              !lT._endTimers[kT[OT]] && cT.FQ || (lT._clearTimer(kT[OT]), lT._endTimers[kT[OT]] = setTimeout(lT._ended.bind(lT, cT), fT)), lT._emit("rate", cT._id)
            } return lT
        },
        seek: function() {
          var TT, kT, cT = this,
            lT = arguments;
          if (0 === lT.length) cT._sounds.length && (kT = cT._sounds[0]._id);
          else if (1 === lT.length) {
            cT._getSoundIds().indexOf(lT[0]) >= 0 ? kT = parseInt(lT[0], 10) : cT._sounds.length && (kT = cT._sounds[0]._id, TT = parseFloat(lT[0]))
          } else 2 === lT.length && (TT = parseFloat(lT[0]), kT = parseInt(lT[1], 10));
          if ("undefined" === typeof kT) return 0;
          if ("number" === typeof TT && ("loaded" !== cT._state || cT._playLock)) return cT._queue.push({
            event: "seek",
            action: function() {
              cT.seek.apply(cT, lT)
            }
          }), cT;
          var MT = cT._soundById(kT);
          if (MT) {
            if (!("number" === typeof TT && TT >= 0)) {
              if (cT._webAudio) {
                var OT = cT.playing(kT) ? KT.ctx.currentTime - MT._playStart : 0,
                  yT = MT._rateSeek ? MT._rateSeek - MT._seek : 0;
                return MT._seek + (yT + OT * Math.abs(MT._rate))
              }
              return MT._node.currentTime
            }
            var fT = cT.playing(kT);
            fT && cT.pause(kT, !0), MT._seek = TT, MT._ended = !1, cT._clearTimer(kT), cT._webAudio || !MT._node || isNaN(MT._node.duration) || (MT._node.currentTime = TT);
            var xT = function() {
              fT && cT.play(kT, !0), cT._emit("seek", kT)
            };
            if (fT && !cT._webAudio) {
              var IT = function() {
                cT._playLock ? setTimeout(IT, 0) : xT()
              };
              setTimeout(IT, 0)
            } else xT()
          }
          return cT
        },
        playing: function(TT) {
          var kT = this;
          if ("number" === typeof TT) {
            var cT = kT._soundById(TT);
            return !!cT && !cT.FQ
          }
          for (var lT = 0; lT < kT._sounds.length; lT++)
            if (!kT._sounds[lT].FQ) return !0;
          return !1
        },
        duration: function(TT) {
          var kT = this,
            cT = kT._duration,
            lT = kT._soundById(TT);
          return lT && (cT = kT._sprite[lT._sprite][1] / 1e3), cT
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var TT = this, kT = TT._sounds, cT = 0; cT < kT.length; cT++) kT[cT].FQ || TT.stop(kT[cT]._id), TT._webAudio || (TT._clearSound(kT[cT]._node), kT[cT]._node.removeEventListener("error", kT[cT]._errorFn, !1), kT[cT]._node.removeEventListener(KT._canPlayEvent, kT[cT]._loadFn, !1), kT[cT]._node.removeEventListener("ended", kT[cT]._endFn, !1), KT._releaseHtml5Audio(kT[cT]._node)), delete kT[cT]._node, TT._clearTimer(kT[cT]._id);
          var lT = KT._howls.indexOf(TT);
          lT >= 0 && KT._howls.splice(lT, 1);
          var MT = !0;
          for (cT = 0; cT < KT._howls.length; cT++)
            if (KT._howls[cT]._src === TT._src || TT._src.indexOf(KT._howls[cT]._src) >= 0) {
              MT = !1;
              break
            } return fT && MT && delete fT[TT._src], KT.noAudio = !1, TT._state = "unloaded", TT._sounds = [], TT = null, null
        },
        on: function(TT, kT, cT, lT) {
          var MT = this["_on" + TT];
          return "function" === typeof kT && MT.push(lT ? {
            id: cT,
            nj: kT,
            once: lT
          } : {
            id: cT,
            nj: kT
          }), this
        },
        off: function(TT, kT, cT) {
          var lT = this,
            MT = lT["_on" + TT],
            KT = 0;
          if ("number" === typeof kT && (cT = kT, kT = null), kT || cT)
            for (KT = 0; KT < MT.length; KT++) {
              var OT = cT === MT[KT].id;
              if (kT === MT[KT].nj && OT || !kT && OT) {
                MT.splice(KT, 1);
                break
              }
            } else if (TT) lT["_on" + TT] = [];
            else {
              var yT = Object.keys(lT);
              for (KT = 0; KT < yT.length; KT++) 0 === yT[KT].indexOf("_on") && Array.isArray(lT[yT[KT]]) && (lT[yT[KT]] = [])
            } return lT
        },
        once: function(TT, kT, cT) {
          return this.on(TT, kT, cT, 1), this
        },
        _emit: function(TT, kT, cT) {
          for (var lT = this, MT = lT["_on" + TT], KT = MT.length - 1; KT >= 0; KT--) MT[KT].id && MT[KT].id !== kT && "load" !== TT || (setTimeout(function(TT) {
            TT.call(this, kT, cT)
          }.bind(lT, MT[KT].nj), 0), MT[KT].once && lT.off(TT, MT[KT].nj, MT[KT].id));
          return lT._loadQueue(TT), lT
        },
        _loadQueue: function(TT) {
          var kT = this;
          if (kT._queue.length > 0) {
            var cT = kT._queue[0];
            cT.event === TT && (kT._queue.shift(), kT._loadQueue()), TT || cT.action()
          }
          return kT
        },
        _ended: function(TT) {
          var kT = this,
            cT = TT._sprite;
          if (!kT._webAudio && TT._node && !TT._node.paused && !TT._node.ended && TT._node.currentTime < TT._stop) return setTimeout(kT._ended.bind(kT, TT), 100), kT;
          var lT = !(!TT._loop && !kT._sprite[cT][2]);
          if (kT._emit("end", TT._id), !kT._webAudio && lT && kT.stop(TT._id, !0).play(TT._id), kT._webAudio && lT) {
            kT._emit("play", TT._id), TT._seek = TT._start || 0, TT._rateSeek = 0, TT._playStart = KT.ctx.currentTime;
            var MT = 1e3 * (TT._stop - TT._start) / Math.abs(TT._rate);
            kT._endTimers[TT._id] = setTimeout(kT._ended.bind(kT, TT), MT)
          }
          return kT._webAudio && !lT && (TT.FQ = !0, TT._ended = !0, TT._seek = TT._start || 0, TT._rateSeek = 0, kT._clearTimer(TT._id), kT._cleanBuffer(TT._node), KT._autoSuspend()), kT._webAudio || lT || kT.stop(TT._id, !0), kT
        },
        _clearTimer: function(TT) {
          var kT = this;
          if (kT._endTimers[TT]) {
            if ("function" !== typeof kT._endTimers[TT]) clearTimeout(kT._endTimers[TT]);
            else {
              var cT = kT._soundById(TT);
              cT && cT._node && cT._node.removeEventListener("ended", kT._endTimers[TT], !1)
            }
            delete kT._endTimers[TT]
          }
          return kT
        },
        _soundById: function(TT) {
          for (var kT = this, cT = 0; cT < kT._sounds.length; cT++)
            if (TT === kT._sounds[cT]._id) return kT._sounds[cT];
          return null
        },
        _inactiveSound: function() {
          var TT = this;
          TT._drain();
          for (var kT = 0; kT < TT._sounds.length; kT++)
            if (TT._sounds[kT]._ended) return TT._sounds[kT].reset();
          return new yT(TT)
        },
        _drain: function() {
          var TT = this,
            kT = TT._pool,
            cT = 0,
            lT = 0;
          if (!(TT._sounds.length < kT)) {
            for (lT = 0; lT < TT._sounds.length; lT++) TT._sounds[lT]._ended && cT++;
            for (lT = TT._sounds.length - 1; lT >= 0; lT--) {
              if (cT <= kT) return;
              TT._sounds[lT]._ended && (TT._webAudio && TT._sounds[lT]._node && TT._sounds[lT]._node.disconnect(0), TT._sounds.splice(lT, 1), cT--)
            }
          }
        },
        _getSoundIds: function(TT) {
          if ("undefined" === typeof TT) {
            for (var kT = [], cT = 0; cT < this._sounds.length; cT++) kT.push(this._sounds[cT]._id);
            return kT
          }
          return [TT]
        },
        _refreshBuffer: function(TT) {
          return TT._node.bufferSource = KT.ctx.createBufferSource(), TT._node.bufferSource.buffer = fT[this._src], TT._panner ? TT._node.bufferSource.connect(TT._panner) : TT._node.bufferSource.connect(TT._node), TT._node.bufferSource.loop = TT._loop, TT._loop && (TT._node.bufferSource.loopStart = TT._start || 0, TT._node.bufferSource.loopEnd = TT._stop || 0), TT._node.bufferSource.playbackRate.setValueAtTime(TT._rate, KT.ctx.currentTime), this
        },
        _cleanBuffer: function(TT) {
          var kT = KT._navigator && KT._navigator.vendor.indexOf("Apple") >= 0;
          if (KT._scratchBuffer && TT.bufferSource && (TT.bufferSource.onended = null, TT.bufferSource.disconnect(0), kT)) try {
            TT.bufferSource.buffer = KT._scratchBuffer
          } catch (cT) {}
          return TT.bufferSource = null, this
        },
        _clearSound: function(TT) {
          /MSIE |Trident\//.test(KT._navigator && KT._navigator.userAgent) || (TT.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var yT = function(TT) {
        this._parent = TT, this.init()
      };
      yT.prototype = {
        init: function() {
          var TT = this,
            kT = TT._parent;
          return TT._muted = kT._muted, TT._loop = kT._loop, TT._volume = kT._volume, TT._rate = kT._rate, TT._seek = 0, TT.FQ = !0, TT._ended = !0, TT._sprite = "__default", TT._id = ++KT._counter, kT._sounds.push(TT), TT.create(), TT
        },
        create: function() {
          var TT = this,
            kT = TT._parent,
            cT = KT._muted || TT._muted || TT._parent._muted ? 0 : TT._volume;
          return kT._webAudio ? (TT._node = "undefined" === typeof KT.ctx.createGain ? KT.ctx.createGainNode() : KT.ctx.createGain(), TT._node.gain.setValueAtTime(cT, KT.ctx.currentTime), TT._node.paused = !0, TT._node.connect(KT.masterGain)) : KT.noAudio || (TT._node = KT._obtainHtml5Audio(), TT._errorFn = TT._errorListener.bind(TT), TT._node.addEventListener("error", TT._errorFn, !1), TT._loadFn = TT._loadListener.bind(TT), TT._node.addEventListener(KT._canPlayEvent, TT._loadFn, !1), TT._endFn = TT._endListener.bind(TT), TT._node.addEventListener("ended", TT._endFn, !1), TT._node.src = kT._src, TT._node.preload = !0 === kT._preload ? "auto" : kT._preload, TT._node.volume = cT * KT.volume(), TT._node.load()), TT
        },
        reset: function() {
          var TT = this,
            kT = TT._parent;
          return TT._muted = kT._muted, TT._loop = kT._loop, TT._volume = kT._volume, TT._rate = kT._rate, TT._seek = 0, TT._rateSeek = 0, TT.FQ = !0, TT._ended = !0, TT._sprite = "__default", TT._id = ++KT._counter, TT
        },
        _errorListener: function() {
          var TT = this;
          TT._parent._emit("loaderror", TT._id, TT._node.error ? TT._node.error.code : 0), TT._node.removeEventListener("error", TT._errorFn, !1)
        },
        _loadListener: function() {
          var TT = this,
            kT = TT._parent;
          kT._duration = Math.ceil(10 * TT._node.duration) / 10, 0 === Object.keys(kT._sprite).length && (kT._sprite = {
            __default: [0, 1e3 * kT._duration]
          }), "loaded" !== kT._state && (kT._state = "loaded", kT._emit("load"), kT._loadQueue()), TT._node.removeEventListener(KT._canPlayEvent, TT._loadFn, !1)
        },
        _endListener: function() {
          var TT = this,
            kT = TT._parent;
          kT._duration === 1 / 0 && (kT._duration = Math.ceil(10 * TT._node.duration) / 10, kT._sprite.__default[1] === 1 / 0 && (kT._sprite.__default[1] = 1e3 * kT._duration), kT._ended(TT)), TT._node.removeEventListener("ended", TT._endFn, !1)
        }
      };
      var fT = {},
        xT = function(TT) {
          var kT = TT._src;
          if (fT[kT]) return TT._duration = fT[kT].duration, void CT(TT);
          if (/^data:[^;]+;base64,/.test(kT)) {
            for (var cT = atob(kT.split(",")[1]), lT = new Uint8Array(cT.length), MT = 0; MT < cT.length; ++MT) lT[MT] = cT.charCodeAt(MT);
            AT(lT.buffer, TT)
          } else {
            var KT = new XMLHttpRequest;
            KT.open(TT._xhr.method, kT, !0), KT.withCredentials = TT._xhr.withCredentials, KT.responseType = "arraybuffer", TT._xhr.headers && Object.keys(TT._xhr.headers).forEach((function(kT) {
              KT.setRequestHeader(kT, TT._xhr.headers[kT])
            })), KT.onload = function() {
              var kT = (KT.status + "")[0];
              "0" === kT || "2" === kT || "3" === kT ? AT(KT.response, TT) : TT._emit("loaderror", null, "Failed loading audio file with status: " + KT.status + ".")
            }, KT.onerror = function() {
              TT._webAudio && (TT._html5 = !0, TT._webAudio = !1, TT._sounds = [], delete fT[kT], TT.load())
            }, IT(KT)
          }
        },
        IT = function(TT) {
          try {
            TT.send()
          } catch (kT) {
            TT.onerror()
          }
        },
        AT = function(TT, kT) {
          var cT = function() {
              kT._emit("loaderror", null, "Decoding audio data failed.")
            },
            lT = function(TT) {
              TT && kT._sounds.length > 0 ? (fT[kT._src] = TT, CT(kT, TT)) : cT()
            };
          "undefined" !== typeof Promise && 1 === KT.ctx.decodeAudioData.length ? KT.ctx.decodeAudioData(TT).then(lT).catch(cT) : KT.ctx.decodeAudioData(TT, lT, cT)
        },
        CT = function(TT, kT) {
          kT && !TT._duration && (TT._duration = kT.duration), 0 === Object.keys(TT._sprite).length && (TT._sprite = {
            __default: [0, 1e3 * TT._duration]
          }), "loaded" !== TT._state && (TT._state = "loaded", TT._emit("load"), TT._loadQueue())
        },
        jT = function() {
          if (KT.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? KT.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? KT.ctx = new webkitAudioContext : KT.usingWebAudio = !1
            } catch (MT) {
              KT.usingWebAudio = !1
            }
            KT.ctx || (KT.usingWebAudio = !1);
            var TT = /iP(hone|od|ad)/.test(KT._navigator && KT._navigator.platform),
              kT = KT._navigator && KT._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              cT = kT ? parseInt(kT[1], 10) : null;
            if (TT && cT && cT < 9) {
              var lT = /safari/.test(KT._navigator && KT._navigator.userAgent.toLowerCase());
              KT._navigator && !lT && (KT.usingWebAudio = !1)
            }
            KT.usingWebAudio && (KT.masterGain = "undefined" === typeof KT.ctx.createGain ? KT.ctx.createGainNode() : KT.ctx.createGain(), KT.masterGain.gain.setValueAtTime(KT._muted ? 0 : KT._volume, KT.ctx.currentTime), KT.masterGain.connect(KT.ctx.destination)), KT._setup()
          }
        };
      void 0 === (lT = function() {
        return {
          Howler: KT,
          Howl: OT
        }
      }.apply(kT, [])) || (TT.exports = lT), kT.Howler = KT, kT.Howl = OT, "undefined" !== typeof cT.g ? (cT.g.HowlerGlobal = MT, cT.g.Howler = KT, cT.g.Howl = OT, cT.g.Sound = yT) : "undefined" !== typeof window && (window.HowlerGlobal = MT, window.Howler = KT, window.Howl = OT, window.Sound = yT)
    }(),
    function() {
      var TT;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(TT) {
        var kT = this;
        if (!kT.ctx || !kT.ctx.listener) return kT;
        for (var cT = kT._howls.length - 1; cT >= 0; cT--) kT._howls[cT].stereo(TT);
        return kT
      }, HowlerGlobal.prototype.pos = function(TT, kT, cT) {
        var lT = this;
        return lT.ctx && lT.ctx.listener ? (kT = "number" !== typeof kT ? lT._pos[1] : kT, cT = "number" !== typeof cT ? lT._pos[2] : cT, "number" !== typeof TT ? lT._pos : (lT._pos = [TT, kT, cT], "undefined" !== typeof lT.ctx.listener.positionX ? (lT.ctx.listener.positionX.setTargetAtTime(lT._pos[0], Howler.ctx.currentTime, .1), lT.ctx.listener.positionY.setTargetAtTime(lT._pos[1], Howler.ctx.currentTime, .1), lT.ctx.listener.positionZ.setTargetAtTime(lT._pos[2], Howler.ctx.currentTime, .1)) : lT.ctx.listener.setPosition(lT._pos[0], lT._pos[1], lT._pos[2]), lT)) : lT
      }, HowlerGlobal.prototype.orientation = function(TT, kT, cT, lT, MT, KT) {
        var OT = this;
        if (!OT.ctx || !OT.ctx.listener) return OT;
        var yT = OT._orientation;
        return kT = "number" !== typeof kT ? yT[1] : kT, cT = "number" !== typeof cT ? yT[2] : cT, lT = "number" !== typeof lT ? yT[3] : lT, MT = "number" !== typeof MT ? yT[4] : MT, KT = "number" !== typeof KT ? yT[5] : KT, "number" !== typeof TT ? yT : (OT._orientation = [TT, kT, cT, lT, MT, KT], "undefined" !== typeof OT.ctx.listener.forwardX ? (OT.ctx.listener.forwardX.setTargetAtTime(TT, Howler.ctx.currentTime, .1), OT.ctx.listener.forwardY.setTargetAtTime(kT, Howler.ctx.currentTime, .1), OT.ctx.listener.forwardZ.setTargetAtTime(cT, Howler.ctx.currentTime, .1), OT.ctx.listener.upX.setTargetAtTime(lT, Howler.ctx.currentTime, .1), OT.ctx.listener.upY.setTargetAtTime(MT, Howler.ctx.currentTime, .1), OT.ctx.listener.upZ.setTargetAtTime(KT, Howler.ctx.currentTime, .1)) : OT.ctx.listener.setOrientation(TT, kT, cT, lT, MT, KT), OT)
      }, Howl.prototype.init = (TT = Howl.prototype.init, function(kT) {
        var cT = this;
        return cT._orientation = kT.orientation || [1, 0, 0], cT._stereo = kT.stereo || null, cT._pos = kT.pos || null, cT._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof kT.coneInnerAngle ? kT.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof kT.coneOuterAngle ? kT.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof kT.coneOuterGain ? kT.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof kT.distanceModel ? kT.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof kT.maxDistance ? kT.maxDistance : 1e4,
          panningModel: "undefined" !== typeof kT.panningModel ? kT.panningModel : "HRTF",
          refDistance: "undefined" !== typeof kT.refDistance ? kT.refDistance : 1,
          rolloffFactor: "undefined" !== typeof kT.rolloffFactor ? kT.rolloffFactor : 1
        }, cT._onstereo = kT.onstereo ? [{
          nj: kT.onstereo
        }] : [], cT._onpos = kT.onpos ? [{
          nj: kT.onpos
        }] : [], cT._onorientation = kT.onorientation ? [{
          nj: kT.onorientation
        }] : [], TT.call(this, kT)
      }), Howl.prototype.stereo = function(TT, cT) {
        var lT = this;
        if (!lT._webAudio) return lT;
        if ("loaded" !== lT._state) return lT._queue.push({
          event: "stereo",
          action: function() {
            lT.stereo(TT, cT)
          }
        }), lT;
        var MT = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof cT) {
          if ("number" !== typeof TT) return lT._stereo;
          lT._stereo = TT, lT._pos = [TT, 0, 0]
        }
        for (var KT = lT._getSoundIds(cT), OT = 0; OT < KT.length; OT++) {
          var yT = lT._soundById(KT[OT]);
          if (yT) {
            if ("number" !== typeof TT) return yT._stereo;
            yT._stereo = TT, yT._pos = [TT, 0, 0], yT._node && (yT._pannerAttr.panningModel = "equalpower", yT._panner && yT._panner.pan || kT(yT, MT), "spatial" === MT ? "undefined" !== typeof yT._panner.positionX ? (yT._panner.positionX.setValueAtTime(TT, Howler.ctx.currentTime), yT._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), yT._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : yT._panner.setPosition(TT, 0, 0) : yT._panner.pan.setValueAtTime(TT, Howler.ctx.currentTime)), lT._emit("stereo", yT._id)
          }
        }
        return lT
      }, Howl.prototype.pos = function(TT, cT, lT, MT) {
        var KT = this;
        if (!KT._webAudio) return KT;
        if ("loaded" !== KT._state) return KT._queue.push({
          event: "pos",
          action: function() {
            KT.pos(TT, cT, lT, MT)
          }
        }), KT;
        if (cT = "number" !== typeof cT ? 0 : cT, lT = "number" !== typeof lT ? -.5 : lT, "undefined" === typeof MT) {
          if ("number" !== typeof TT) return KT._pos;
          KT._pos = [TT, cT, lT]
        }
        for (var OT = KT._getSoundIds(MT), yT = 0; yT < OT.length; yT++) {
          var fT = KT._soundById(OT[yT]);
          if (fT) {
            if ("number" !== typeof TT) return fT._pos;
            fT._pos = [TT, cT, lT], fT._node && (fT._panner && !fT._panner.pan || kT(fT, "spatial"), "undefined" !== typeof fT._panner.positionX ? (fT._panner.positionX.setValueAtTime(TT, Howler.ctx.currentTime), fT._panner.positionY.setValueAtTime(cT, Howler.ctx.currentTime), fT._panner.positionZ.setValueAtTime(lT, Howler.ctx.currentTime)) : fT._panner.setPosition(TT, cT, lT)), KT._emit("pos", fT._id)
          }
        }
        return KT
      }, Howl.prototype.orientation = function(TT, cT, lT, MT) {
        var KT = this;
        if (!KT._webAudio) return KT;
        if ("loaded" !== KT._state) return KT._queue.push({
          event: "orientation",
          action: function() {
            KT.orientation(TT, cT, lT, MT)
          }
        }), KT;
        if (cT = "number" !== typeof cT ? KT._orientation[1] : cT, lT = "number" !== typeof lT ? KT._orientation[2] : lT, "undefined" === typeof MT) {
          if ("number" !== typeof TT) return KT._orientation;
          KT._orientation = [TT, cT, lT]
        }
        for (var OT = KT._getSoundIds(MT), yT = 0; yT < OT.length; yT++) {
          var fT = KT._soundById(OT[yT]);
          if (fT) {
            if ("number" !== typeof TT) return fT._orientation;
            fT._orientation = [TT, cT, lT], fT._node && (fT._panner || (fT._pos || (fT._pos = KT._pos || [0, 0, -.5]), kT(fT, "spatial")), "undefined" !== typeof fT._panner.orientationX ? (fT._panner.orientationX.setValueAtTime(TT, Howler.ctx.currentTime), fT._panner.orientationY.setValueAtTime(cT, Howler.ctx.currentTime), fT._panner.orientationZ.setValueAtTime(lT, Howler.ctx.currentTime)) : fT._panner.setOrientation(TT, cT, lT)), KT._emit("orientation", fT._id)
          }
        }
        return KT
      }, Howl.prototype.pannerAttr = function() {
        var TT, cT, lT, MT = this,
          KT = arguments;
        if (!MT._webAudio) return MT;
        if (0 === KT.length) return MT._pannerAttr;
        if (1 === KT.length) {
          if ("object" !== typeof KT[0]) return (lT = MT._soundById(parseInt(KT[0], 10))) ? lT._pannerAttr : MT._pannerAttr;
          TT = KT[0], "undefined" === typeof cT && (TT.pannerAttr || (TT.pannerAttr = {
            coneInnerAngle: TT.coneInnerAngle,
            coneOuterAngle: TT.coneOuterAngle,
            coneOuterGain: TT.coneOuterGain,
            distanceModel: TT.distanceModel,
            maxDistance: TT.maxDistance,
            refDistance: TT.refDistance,
            rolloffFactor: TT.rolloffFactor,
            panningModel: TT.panningModel
          }), MT._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof TT.pannerAttr.coneInnerAngle ? TT.pannerAttr.coneInnerAngle : MT._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof TT.pannerAttr.coneOuterAngle ? TT.pannerAttr.coneOuterAngle : MT._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof TT.pannerAttr.coneOuterGain ? TT.pannerAttr.coneOuterGain : MT._coneOuterGain,
            distanceModel: "undefined" !== typeof TT.pannerAttr.distanceModel ? TT.pannerAttr.distanceModel : MT._distanceModel,
            maxDistance: "undefined" !== typeof TT.pannerAttr.maxDistance ? TT.pannerAttr.maxDistance : MT._maxDistance,
            refDistance: "undefined" !== typeof TT.pannerAttr.refDistance ? TT.pannerAttr.refDistance : MT._refDistance,
            rolloffFactor: "undefined" !== typeof TT.pannerAttr.rolloffFactor ? TT.pannerAttr.rolloffFactor : MT._rolloffFactor,
            panningModel: "undefined" !== typeof TT.pannerAttr.panningModel ? TT.pannerAttr.panningModel : MT._panningModel
          })
        } else 2 === KT.length && (TT = KT[0], cT = parseInt(KT[1], 10));
        for (var OT = MT._getSoundIds(cT), yT = 0; yT < OT.length; yT++)
          if (lT = MT._soundById(OT[yT])) {
            var fT = lT._pannerAttr;
            fT = {
              coneInnerAngle: "undefined" !== typeof TT.coneInnerAngle ? TT.coneInnerAngle : fT.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof TT.coneOuterAngle ? TT.coneOuterAngle : fT.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof TT.coneOuterGain ? TT.coneOuterGain : fT.coneOuterGain,
              distanceModel: "undefined" !== typeof TT.distanceModel ? TT.distanceModel : fT.distanceModel,
              maxDistance: "undefined" !== typeof TT.maxDistance ? TT.maxDistance : fT.maxDistance,
              refDistance: "undefined" !== typeof TT.refDistance ? TT.refDistance : fT.refDistance,
              rolloffFactor: "undefined" !== typeof TT.rolloffFactor ? TT.rolloffFactor : fT.rolloffFactor,
              panningModel: "undefined" !== typeof TT.panningModel ? TT.panningModel : fT.panningModel
            };
            var xT = lT._panner;
            xT ? (xT.coneInnerAngle = fT.coneInnerAngle, xT.coneOuterAngle = fT.coneOuterAngle, xT.coneOuterGain = fT.coneOuterGain, xT.distanceModel = fT.distanceModel, xT.maxDistance = fT.maxDistance, xT.refDistance = fT.refDistance, xT.rolloffFactor = fT.rolloffFactor, xT.panningModel = fT.panningModel) : (lT._pos || (lT._pos = MT._pos || [0, 0, -.5]), kT(lT, "spatial"))
          } return MT
      }, Sound.prototype.init = function(TT) {
        return function() {
          var kT = this,
            cT = kT._parent;
          kT._orientation = cT._orientation, kT._stereo = cT._stereo, kT._pos = cT._pos, kT._pannerAttr = cT._pannerAttr, TT.call(this), kT._stereo ? cT.stereo(kT._stereo) : kT._pos && cT.pos(kT._pos[0], kT._pos[1], kT._pos[2], kT._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(TT) {
        return function() {
          var kT = this,
            cT = kT._parent;
          return kT._orientation = cT._orientation, kT._stereo = cT._stereo, kT._pos = cT._pos, kT._pannerAttr = cT._pannerAttr, kT._stereo ? cT.stereo(kT._stereo) : kT._pos ? cT.pos(kT._pos[0], kT._pos[1], kT._pos[2], kT._id) : kT._panner && (kT._panner.disconnect(0), kT._panner = void 0, cT._refreshBuffer(kT)), TT.call(this)
        }
      }(Sound.prototype.reset);
      var kT = function(TT, kT) {
        "spatial" === (kT = kT || "spatial") ? (TT._panner = Howler.ctx.createPanner(), TT._panner.coneInnerAngle = TT._pannerAttr.coneInnerAngle, TT._panner.coneOuterAngle = TT._pannerAttr.coneOuterAngle, TT._panner.coneOuterGain = TT._pannerAttr.coneOuterGain, TT._panner.distanceModel = TT._pannerAttr.distanceModel, TT._panner.maxDistance = TT._pannerAttr.maxDistance, TT._panner.refDistance = TT._pannerAttr.refDistance, TT._panner.rolloffFactor = TT._pannerAttr.rolloffFactor, TT._panner.panningModel = TT._pannerAttr.panningModel, "undefined" !== typeof TT._panner.positionX ? (TT._panner.positionX.setValueAtTime(TT._pos[0], Howler.ctx.currentTime), TT._panner.positionY.setValueAtTime(TT._pos[1], Howler.ctx.currentTime), TT._panner.positionZ.setValueAtTime(TT._pos[2], Howler.ctx.currentTime)) : TT._panner.setPosition(TT._pos[0], TT._pos[1], TT._pos[2]), "undefined" !== typeof TT._panner.orientationX ? (TT._panner.orientationX.setValueAtTime(TT._orientation[0], Howler.ctx.currentTime), TT._panner.orientationY.setValueAtTime(TT._orientation[1], Howler.ctx.currentTime), TT._panner.orientationZ.setValueAtTime(TT._orientation[2], Howler.ctx.currentTime)) : TT._panner.setOrientation(TT._orientation[0], TT._orientation[1], TT._orientation[2])) : (TT._panner = Howler.ctx.createStereoPanner(), TT._panner.pan.setValueAtTime(TT._stereo, Howler.ctx.currentTime)), TT._panner.connect(TT._node), TT.FQ || TT._parent.pause(TT._id, !0).play(TT._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);