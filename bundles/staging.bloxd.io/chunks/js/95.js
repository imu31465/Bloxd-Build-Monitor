/*! For license information please see bqoxjr.95.d7767b7a.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  4702: (QQ, FQ, wQ) => {
    var LQ;
    ! function() {
      var qQ = function() {
        this.init()
      };
      qQ.prototype = {
        init: function() {
          var QQ = this || oQ;
          return QQ._counter = 1e3, QQ._html5AudioPool = [], QQ.html5PoolSize = 10, QQ._codecs = {}, QQ._howls = [], QQ._muted = !1, QQ._volume = 1, QQ._canPlayEvent = "canplaythrough", QQ._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, QQ.masterGain = null, QQ.noAudio = !1, QQ.usingWebAudio = !0, QQ.autoSuspend = !0, QQ.ctx = null, QQ.autoUnlock = !0, QQ._setup(), QQ
        },
        volume: function(QQ) {
          var FQ = this || oQ;
          if (QQ = parseFloat(QQ), FQ.ctx || YQ(), "undefined" !== typeof QQ && QQ >= 0 && QQ <= 1) {
            if (FQ._volume = QQ, FQ._muted) return FQ;
            FQ.usingWebAudio && FQ.masterGain.gain.setValueAtTime(QQ, oQ.ctx.currentTime);
            for (var wQ = 0; wQ < FQ._howls.length; wQ++)
              if (!FQ._howls[wQ]._webAudio)
                for (var LQ = FQ._howls[wQ]._getSoundIds(), qQ = 0; qQ < LQ.length; qQ++) {
                  var DQ = FQ._howls[wQ]._soundById(LQ[qQ]);
                  DQ && DQ._node && (DQ._node.volume = DQ._volume * QQ)
                }
            return FQ
          }
          return FQ._volume
        },
        mute: function(QQ) {
          var FQ = this || oQ;
          FQ.ctx || YQ(), FQ._muted = QQ, FQ.usingWebAudio && FQ.masterGain.gain.setValueAtTime(QQ ? 0 : FQ._volume, oQ.ctx.currentTime);
          for (var wQ = 0; wQ < FQ._howls.length; wQ++)
            if (!FQ._howls[wQ]._webAudio)
              for (var LQ = FQ._howls[wQ]._getSoundIds(), qQ = 0; qQ < LQ.length; qQ++) {
                var DQ = FQ._howls[wQ]._soundById(LQ[qQ]);
                DQ && DQ._node && (DQ._node.muted = !!QQ || DQ._muted)
              }
          return FQ
        },
        stop: function() {
          for (var QQ = this || oQ, FQ = 0; FQ < QQ._howls.length; FQ++) QQ._howls[FQ].stop();
          return QQ
        },
        unload: function() {
          for (var QQ = this || oQ, FQ = QQ._howls.length - 1; FQ >= 0; FQ--) QQ._howls[FQ].unload();
          return QQ.usingWebAudio && QQ.ctx && "undefined" !== typeof QQ.ctx.close && (QQ.ctx.close(), QQ.ctx = null, YQ()), QQ
        },
        codecs: function(QQ) {
          return (this || oQ)._codecs[QQ.replace(/^x-/, "")]
        },
        _setup: function() {
          var QQ = this || oQ;
          if (QQ.state = QQ.ctx && QQ.ctx.state || "suspended", QQ._autoSuspend(), !QQ.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (QQ._canPlayEvent = "canplay")
            } catch (FQ) {
              QQ.noAudio = !0
            } else QQ.noAudio = !0;
          try {
            (new Audio).muted && (QQ.noAudio = !0)
          } catch (FQ) {}
          return QQ.noAudio || QQ._setupCodecs(), QQ
        },
        _setupCodecs: function() {
          var QQ = this || oQ,
            FQ = null;
          try {
            FQ = "undefined" !== typeof Audio ? new Audio : null
          } catch (uQ) {
            return QQ
          }
          if (!FQ || "function" !== typeof FQ.canPlayType) return QQ;
          var wQ = FQ.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            LQ = QQ._navigator ? QQ._navigator.userAgent : "",
            qQ = LQ.match(/OPR\/([0-6].)/g),
            DQ = qQ && parseInt(qQ[0].split("/")[1], 10) < 33,
            kQ = -1 !== LQ.indexOf("Safari") && -1 === LQ.indexOf("Chrome"),
            vQ = LQ.match(/Version\/(.*?) /),
            mQ = kQ && vQ && parseInt(vQ[1], 10) < 15;
          return QQ._codecs = {
            mp3: !(DQ || !wQ && !FQ.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!wQ,
            opus: !!FQ.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!FQ.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!FQ.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(FQ.canPlayType('audio/wav; codecs="1"') || FQ.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!FQ.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!FQ.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(FQ.canPlayType("audio/x-m4a;") || FQ.canPlayType("audio/m4a;") || FQ.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(FQ.canPlayType("audio/x-m4b;") || FQ.canPlayType("audio/m4b;") || FQ.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(FQ.canPlayType("audio/x-mp4;") || FQ.canPlayType("audio/mp4;") || FQ.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(mQ || !FQ.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(mQ || !FQ.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!FQ.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(FQ.canPlayType("audio/x-flac;") || FQ.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, QQ
        },
        _unlockAudio: function() {
          var QQ = this || oQ;
          if (!QQ._audioUnlocked && QQ.ctx) {
            QQ._audioUnlocked = !1, QQ.autoUnlock = !1, QQ._mobileUnloaded || 44100 === QQ.ctx.sampleRate || (QQ._mobileUnloaded = !0, QQ.unload()), QQ._scratchBuffer = QQ.ctx.createBuffer(1, 1, 22050);
            var FQ = function(wQ) {
              for (; QQ._html5AudioPool.length < QQ.html5PoolSize;) try {
                var LQ = new Audio;
                LQ._unlocked = !0, QQ._releaseHtml5Audio(LQ)
              } catch (wQ) {
                QQ.noAudio = !0;
                break
              }
              for (var qQ = 0; qQ < QQ._howls.length; qQ++)
                if (!QQ._howls[qQ]._webAudio)
                  for (var oQ = QQ._howls[qQ]._getSoundIds(), DQ = 0; DQ < oQ.length; DQ++) {
                    var kQ = QQ._howls[qQ]._soundById(oQ[DQ]);
                    kQ && kQ._node && !kQ._node._unlocked && (kQ._node._unlocked = !0, kQ._node.load())
                  }
              QQ._autoResume();
              var vQ = QQ.ctx.createBufferSource();
              vQ.buffer = QQ._scratchBuffer, vQ.connect(QQ.ctx.destination), "undefined" === typeof vQ.start ? vQ.noteOn(0) : vQ.start(0), "function" === typeof QQ.ctx.resume && QQ.ctx.resume(), vQ.onended = function() {
                vQ.disconnect(0), QQ._audioUnlocked = !0, document.removeEventListener("touchstart", FQ, !0), document.removeEventListener("touchend", FQ, !0), document.removeEventListener("click", FQ, !0), document.removeEventListener("keydown", FQ, !0);
                for (var wQ = 0; wQ < QQ._howls.length; wQ++) QQ._howls[wQ]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", FQ, !0), document.addEventListener("touchend", FQ, !0), document.addEventListener("click", FQ, !0), document.addEventListener("keydown", FQ, !0), QQ
          }
        },
        _obtainHtml5Audio: function() {
          var QQ = this || oQ;
          if (QQ._html5AudioPool.length) return QQ._html5AudioPool.pop();
          var FQ = (new Audio).play();
          return FQ && "undefined" !== typeof Promise && (FQ instanceof Promise || "function" === typeof FQ.then) && FQ.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(QQ) {
          var FQ = this || oQ;
          return QQ._unlocked && FQ._html5AudioPool.push(QQ), FQ
        },
        _autoSuspend: function() {
          var QQ = this;
          if (QQ.autoSuspend && QQ.ctx && "undefined" !== typeof QQ.ctx.suspend && oQ.usingWebAudio) {
            for (var FQ = 0; FQ < QQ._howls.length; FQ++)
              if (QQ._howls[FQ]._webAudio)
                for (var wQ = 0; wQ < QQ._howls[FQ]._sounds.length; wQ++)
                  if (!QQ._howls[FQ]._sounds[wQ].WC) return QQ;
            return QQ._suspendTimer && clearTimeout(QQ._suspendTimer), QQ._suspendTimer = setTimeout((function() {
              if (QQ.autoSuspend) {
                QQ._suspendTimer = null, QQ.state = "suspending";
                var FQ = function() {
                  QQ.state = "suspended", QQ._resumeAfterSuspend && (delete QQ._resumeAfterSuspend, QQ._autoResume())
                };
                QQ.ctx.suspend().then(FQ, FQ)
              }
            }), 3e4), QQ
          }
        },
        _autoResume: function() {
          var QQ = this;
          if (QQ.ctx && "undefined" !== typeof QQ.ctx.resume && oQ.usingWebAudio) return "running" === QQ.state && "interrupted" !== QQ.ctx.state && QQ._suspendTimer ? (clearTimeout(QQ._suspendTimer), QQ._suspendTimer = null) : "suspended" === QQ.state || "running" === QQ.state && "interrupted" === QQ.ctx.state ? (QQ.ctx.resume().then((function() {
            QQ.state = "running";
            for (var FQ = 0; FQ < QQ._howls.length; FQ++) QQ._howls[FQ]._emit("resume")
          })), QQ._suspendTimer && (clearTimeout(QQ._suspendTimer), QQ._suspendTimer = null)) : "suspending" === QQ.state && (QQ._resumeAfterSuspend = !0), QQ
        }
      };
      var oQ = new qQ,
        DQ = function(QQ) {
          QQ.src && 0 !== QQ.src.length ? this.init(QQ) : console.error("An array of source files must be passed with any new Howl.")
        };
      DQ.prototype = {
        init: function(QQ) {
          var FQ = this;
          return oQ.ctx || YQ(), FQ._autoplay = QQ.autoplay || !1, FQ._format = "string" !== typeof QQ.format ? QQ.format : [QQ.format], FQ._html5 = QQ.html5 || !1, FQ._muted = QQ.mute || !1, FQ._loop = QQ.loop || !1, FQ._pool = QQ.pool || 5, FQ._preload = "boolean" !== typeof QQ.preload && "metadata" !== QQ.preload || QQ.preload, FQ._rate = QQ.rate || 1, FQ._sprite = QQ.sprite || {}, FQ._src = "string" !== typeof QQ.src ? QQ.src : [QQ.src], FQ._volume = void 0 !== QQ.volume ? QQ.volume : 1, FQ._xhr = {
            method: QQ.xhr && QQ.xhr.method ? QQ.xhr.method : "GET",
            headers: QQ.xhr && QQ.xhr.headers ? QQ.xhr.headers : null,
            withCredentials: !(!QQ.xhr || !QQ.xhr.withCredentials) && QQ.xhr.withCredentials
          }, FQ._duration = 0, FQ._state = "unloaded", FQ._sounds = [], FQ._endTimers = {}, FQ._queue = [], FQ._playLock = !1, FQ._onend = QQ.onend ? [{
            gY: QQ.onend
          }] : [], FQ._onfade = QQ.onfade ? [{
            gY: QQ.onfade
          }] : [], FQ._onload = QQ.onload ? [{
            gY: QQ.onload
          }] : [], FQ._onloaderror = QQ.onloaderror ? [{
            gY: QQ.onloaderror
          }] : [], FQ._onplayerror = QQ.onplayerror ? [{
            gY: QQ.onplayerror
          }] : [], FQ._onpause = QQ.onpause ? [{
            gY: QQ.onpause
          }] : [], FQ._onplay = QQ.onplay ? [{
            gY: QQ.onplay
          }] : [], FQ._onstop = QQ.onstop ? [{
            gY: QQ.onstop
          }] : [], FQ._onmute = QQ.onmute ? [{
            gY: QQ.onmute
          }] : [], FQ._onvolume = QQ.onvolume ? [{
            gY: QQ.onvolume
          }] : [], FQ._onrate = QQ.onrate ? [{
            gY: QQ.onrate
          }] : [], FQ._onseek = QQ.onseek ? [{
            gY: QQ.onseek
          }] : [], FQ._onunlock = QQ.onunlock ? [{
            gY: QQ.onunlock
          }] : [], FQ._onresume = [], FQ._webAudio = oQ.usingWebAudio && !FQ._html5, "undefined" !== typeof oQ.ctx && oQ.ctx && oQ.autoUnlock && oQ._unlockAudio(), oQ._howls.push(FQ), FQ._autoplay && FQ._queue.push({
            event: "play",
            action: function() {
              FQ.play()
            }
          }), FQ._preload && "none" !== FQ._preload && FQ.load(), FQ
        },
        load: function() {
          var QQ = this,
            FQ = null;
          if (oQ.noAudio) QQ._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof QQ._src && (QQ._src = [QQ._src]);
            for (var wQ = 0; wQ < QQ._src.length; wQ++) {
              var LQ, qQ;
              if (QQ._format && QQ._format[wQ]) LQ = QQ._format[wQ];
              else {
                if ("string" !== typeof(qQ = QQ._src[wQ])) {
                  QQ._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(LQ = /^data:audio\/([^;,]+);/i.exec(qQ)) || (LQ = /\.([^.]+)$/.exec(qQ.split("?", 1)[0])), LQ && (LQ = LQ[1].toLowerCase())
              }
              if (LQ || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), LQ && oQ.codecs(LQ)) {
                FQ = QQ._src[wQ];
                break
              }
            }
            if (FQ) return QQ._src = FQ, QQ._state = "loading", "https:" === window.location.protocol && "http:" === FQ.slice(0, 5) && (QQ._html5 = !0, QQ._webAudio = !1), new kQ(QQ), QQ._webAudio && mQ(QQ), QQ;
            QQ._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(QQ, FQ) {
          var wQ = this,
            LQ = null;
          if ("number" === typeof QQ) LQ = QQ, QQ = null;
          else {
            if ("string" === typeof QQ && "loaded" === wQ._state && !wQ._sprite[QQ]) return null;
            if ("undefined" === typeof QQ && (QQ = "__default", !wQ._playLock)) {
              for (var qQ = 0, DQ = 0; DQ < wQ._sounds.length; DQ++) wQ._sounds[DQ].WC && !wQ._sounds[DQ]._ended && (qQ++, LQ = wQ._sounds[DQ]._id);
              1 === qQ ? QQ = null : LQ = null
            }
          }
          var kQ = LQ ? wQ._soundById(LQ) : wQ._inactiveSound();
          if (!kQ) return null;
          if (LQ && !QQ && (QQ = kQ._sprite || "__default"), "loaded" !== wQ._state) {
            kQ._sprite = QQ, kQ._ended = !1;
            var vQ = kQ._id;
            return wQ._queue.push({
              event: "play",
              action: function() {
                wQ.play(vQ)
              }
            }), vQ
          }
          if (LQ && !kQ.WC) return FQ || wQ._loadQueue("play"), kQ._id;
          wQ._webAudio && oQ._autoResume();
          var mQ = Math.max(0, kQ._seek > 0 ? kQ._seek : wQ._sprite[QQ][0] / 1e3),
            uQ = Math.max(0, (wQ._sprite[QQ][0] + wQ._sprite[QQ][1]) / 1e3 - mQ),
            HQ = 1e3 * uQ / Math.abs(kQ._rate),
            bQ = wQ._sprite[QQ][0] / 1e3,
            YQ = (wQ._sprite[QQ][0] + wQ._sprite[QQ][1]) / 1e3;
          kQ._sprite = QQ, kQ._ended = !1;
          var xQ = function() {
            kQ.WC = !1, kQ._seek = mQ, kQ._start = bQ, kQ._stop = YQ, kQ._loop = !(!kQ._loop && !wQ._sprite[QQ][2])
          };
          if (!(mQ >= YQ)) {
            var AQ = kQ._node;
            if (wQ._webAudio) {
              var tQ = function() {
                wQ._playLock = !1, xQ(), wQ._refreshBuffer(kQ);
                var QQ = kQ._muted || wQ._muted ? 0 : kQ._volume;
                AQ.gain.setValueAtTime(QQ, oQ.ctx.currentTime), kQ._playStart = oQ.ctx.currentTime, "undefined" === typeof AQ.bufferSource.start ? kQ._loop ? AQ.bufferSource.noteGrainOn(0, mQ, 86400) : AQ.bufferSource.noteGrainOn(0, mQ, uQ) : kQ._loop ? AQ.bufferSource.start(0, mQ, 86400) : AQ.bufferSource.start(0, mQ, uQ), HQ !== 1 / 0 && (wQ._endTimers[kQ._id] = setTimeout(wQ._ended.bind(wQ, kQ), HQ)), FQ || setTimeout((function() {
                  wQ._emit("play", kQ._id), wQ._loadQueue()
                }), 0)
              };
              "running" === oQ.state && "interrupted" !== oQ.ctx.state ? tQ() : (wQ._playLock = !0, wQ.once("resume", tQ), wQ._clearTimer(kQ._id))
            } else {
              var eQ = function() {
                AQ.currentTime = mQ, AQ.muted = kQ._muted || wQ._muted || oQ._muted || AQ.muted, AQ.volume = kQ._volume * oQ.volume(), AQ.playbackRate = kQ._rate;
                try {
                  var LQ = AQ.play();
                  if (LQ && "undefined" !== typeof Promise && (LQ instanceof Promise || "function" === typeof LQ.then) ? (wQ._playLock = !0, xQ(), LQ.then((function() {
                      wQ._playLock = !1, AQ._unlocked = !0, FQ ? wQ._loadQueue() : wQ._emit("play", kQ._id)
                    })).catch((function() {
                      wQ._playLock = !1, wQ._emit("playerror", kQ._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), kQ._ended = !0, kQ.WC = !0
                    }))) : FQ || (wQ._playLock = !1, xQ(), wQ._emit("play", kQ._id)), AQ.playbackRate = kQ._rate, AQ.paused) return void wQ._emit("playerror", kQ._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== QQ || kQ._loop ? wQ._endTimers[kQ._id] = setTimeout(wQ._ended.bind(wQ, kQ), HQ) : (wQ._endTimers[kQ._id] = function() {
                    wQ._ended(kQ), AQ.removeEventListener("ended", wQ._endTimers[kQ._id], !1)
                  }, AQ.addEventListener("ended", wQ._endTimers[kQ._id], !1))
                } catch (qQ) {
                  wQ._emit("playerror", kQ._id, qQ)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === AQ.src && (AQ.src = wQ._src, AQ.load());
              var MQ = window && window.ejecta || !AQ.readyState && oQ._navigator.isCocoonJS;
              if (AQ.readyState >= 3 || MQ) eQ();
              else {
                wQ._playLock = !0, wQ._state = "loading";
                var GQ = function() {
                  wQ._state = "loaded", eQ(), AQ.removeEventListener(oQ._canPlayEvent, GQ, !1)
                };
                AQ.addEventListener(oQ._canPlayEvent, GQ, !1), wQ._clearTimer(kQ._id)
              }
            }
            return kQ._id
          }
          wQ._ended(kQ)
        },
        pause: function(QQ) {
          var FQ = this;
          if ("loaded" !== FQ._state || FQ._playLock) return FQ._queue.push({
            event: "pause",
            action: function() {
              FQ.pause(QQ)
            }
          }), FQ;
          for (var wQ = FQ._getSoundIds(QQ), LQ = 0; LQ < wQ.length; LQ++) {
            FQ._clearTimer(wQ[LQ]);
            var qQ = FQ._soundById(wQ[LQ]);
            if (qQ && !qQ.WC && (qQ._seek = FQ.seek(wQ[LQ]), qQ._rateSeek = 0, qQ.WC = !0, FQ._stopFade(wQ[LQ]), qQ._node))
              if (FQ._webAudio) {
                if (!qQ._node.bufferSource) continue;
                "undefined" === typeof qQ._node.bufferSource.stop ? qQ._node.bufferSource.noteOff(0) : qQ._node.bufferSource.stop(0), FQ._cleanBuffer(qQ._node)
              } else isNaN(qQ._node.duration) && qQ._node.duration !== 1 / 0 || qQ._node.pause();
            arguments[1] || FQ._emit("pause", qQ ? qQ._id : null)
          }
          return FQ
        },
        stop: function(QQ, FQ) {
          var wQ = this;
          if ("loaded" !== wQ._state || wQ._playLock) return wQ._queue.push({
            event: "stop",
            action: function() {
              wQ.stop(QQ)
            }
          }), wQ;
          for (var LQ = wQ._getSoundIds(QQ), qQ = 0; qQ < LQ.length; qQ++) {
            wQ._clearTimer(LQ[qQ]);
            var oQ = wQ._soundById(LQ[qQ]);
            oQ && (oQ._seek = oQ._start || 0, oQ._rateSeek = 0, oQ.WC = !0, oQ._ended = !0, wQ._stopFade(LQ[qQ]), oQ._node && (wQ._webAudio ? oQ._node.bufferSource && ("undefined" === typeof oQ._node.bufferSource.stop ? oQ._node.bufferSource.noteOff(0) : oQ._node.bufferSource.stop(0), wQ._cleanBuffer(oQ._node)) : isNaN(oQ._node.duration) && oQ._node.duration !== 1 / 0 || (oQ._node.currentTime = oQ._start || 0, oQ._node.pause(), oQ._node.duration === 1 / 0 && wQ._clearSound(oQ._node))), FQ || wQ._emit("stop", oQ._id))
          }
          return wQ
        },
        mute: function(QQ, FQ) {
          var wQ = this;
          if ("loaded" !== wQ._state || wQ._playLock) return wQ._queue.push({
            event: "mute",
            action: function() {
              wQ.mute(QQ, FQ)
            }
          }), wQ;
          if ("undefined" === typeof FQ) {
            if ("boolean" !== typeof QQ) return wQ._muted;
            wQ._muted = QQ
          }
          for (var LQ = wQ._getSoundIds(FQ), qQ = 0; qQ < LQ.length; qQ++) {
            var DQ = wQ._soundById(LQ[qQ]);
            DQ && (DQ._muted = QQ, DQ._interval && wQ._stopFade(DQ._id), wQ._webAudio && DQ._node ? DQ._node.gain.setValueAtTime(QQ ? 0 : DQ._volume, oQ.ctx.currentTime) : DQ._node && (DQ._node.muted = !!oQ._muted || QQ), wQ._emit("mute", DQ._id))
          }
          return wQ
        },
        volume: function() {
          var QQ, FQ, wQ, LQ = this,
            qQ = arguments;
          if (0 === qQ.length) return LQ._volume;
          if (1 === qQ.length || 2 === qQ.length && "undefined" === typeof qQ[1] ? LQ._getSoundIds().indexOf(qQ[0]) >= 0 ? FQ = parseInt(qQ[0], 10) : QQ = parseFloat(qQ[0]) : qQ.length >= 2 && (QQ = parseFloat(qQ[0]), FQ = parseInt(qQ[1], 10)), !("undefined" !== typeof QQ && QQ >= 0 && QQ <= 1)) return (wQ = FQ ? LQ._soundById(FQ) : LQ._sounds[0]) ? wQ._volume : 0;
          if ("loaded" !== LQ._state || LQ._playLock) return LQ._queue.push({
            event: "volume",
            action: function() {
              LQ.volume.apply(LQ, qQ)
            }
          }), LQ;
          "undefined" === typeof FQ && (LQ._volume = QQ), FQ = LQ._getSoundIds(FQ);
          for (var DQ = 0; DQ < FQ.length; DQ++)(wQ = LQ._soundById(FQ[DQ])) && (wQ._volume = QQ, qQ[2] || LQ._stopFade(FQ[DQ]), LQ._webAudio && wQ._node && !wQ._muted ? wQ._node.gain.setValueAtTime(QQ, oQ.ctx.currentTime) : wQ._node && !wQ._muted && (wQ._node.volume = QQ * oQ.volume()), LQ._emit("volume", wQ._id));
          return LQ
        },
        fade: function(QQ, FQ, wQ, LQ) {
          var qQ = this;
          if ("loaded" !== qQ._state || qQ._playLock) return qQ._queue.push({
            event: "fade",
            action: function() {
              qQ.fade(QQ, FQ, wQ, LQ)
            }
          }), qQ;
          QQ = Math.min(Math.max(0, parseFloat(QQ)), 1), FQ = Math.min(Math.max(0, parseFloat(FQ)), 1), wQ = parseFloat(wQ), qQ.volume(QQ, LQ);
          for (var DQ = qQ._getSoundIds(LQ), kQ = 0; kQ < DQ.length; kQ++) {
            var vQ = qQ._soundById(DQ[kQ]);
            if (vQ) {
              if (LQ || qQ._stopFade(DQ[kQ]), qQ._webAudio && !vQ._muted) {
                var mQ = oQ.ctx.currentTime,
                  uQ = mQ + wQ / 1e3;
                vQ._volume = QQ, vQ._node.gain.setValueAtTime(QQ, mQ), vQ._node.gain.linearRampToValueAtTime(FQ, uQ)
              }
              qQ._startFadeInterval(vQ, QQ, FQ, wQ, DQ[kQ], "undefined" === typeof LQ)
            }
          }
          return qQ
        },
        _startFadeInterval: function(QQ, FQ, wQ, LQ, qQ, oQ) {
          var DQ = this,
            kQ = FQ,
            vQ = wQ - FQ,
            mQ = Math.abs(vQ / .01),
            uQ = Math.max(4, mQ > 0 ? LQ / mQ : LQ),
            HQ = Date.now();
          QQ._fadeTo = wQ, QQ._interval = setInterval((function() {
            var qQ = (Date.now() - HQ) / LQ;
            HQ = Date.now(), kQ += vQ * qQ, kQ = Math.round(100 * kQ) / 100, kQ = vQ < 0 ? Math.max(wQ, kQ) : Math.min(wQ, kQ), DQ._webAudio ? QQ._volume = kQ : DQ.volume(kQ, QQ._id, !0), oQ && (DQ._volume = kQ), (wQ < FQ && kQ <= wQ || wQ > FQ && kQ >= wQ) && (clearInterval(QQ._interval), QQ._interval = null, QQ._fadeTo = null, DQ.volume(wQ, QQ._id), DQ._emit("fade", QQ._id))
          }), uQ)
        },
        _stopFade: function(QQ) {
          var FQ = this,
            wQ = FQ._soundById(QQ);
          return wQ && wQ._interval && (FQ._webAudio && wQ._node.gain.cancelScheduledValues(oQ.ctx.currentTime), clearInterval(wQ._interval), wQ._interval = null, FQ.volume(wQ._fadeTo, QQ), wQ._fadeTo = null, FQ._emit("fade", QQ)), FQ
        },
        loop: function() {
          var QQ, FQ, wQ, LQ = this,
            qQ = arguments;
          if (0 === qQ.length) return LQ._loop;
          if (1 === qQ.length) {
            if ("boolean" !== typeof qQ[0]) return !!(wQ = LQ._soundById(parseInt(qQ[0], 10))) && wQ._loop;
            QQ = qQ[0], LQ._loop = QQ
          } else 2 === qQ.length && (QQ = qQ[0], FQ = parseInt(qQ[1], 10));
          for (var oQ = LQ._getSoundIds(FQ), DQ = 0; DQ < oQ.length; DQ++)(wQ = LQ._soundById(oQ[DQ])) && (wQ._loop = QQ, LQ._webAudio && wQ._node && wQ._node.bufferSource && (wQ._node.bufferSource.loop = QQ, QQ && (wQ._node.bufferSource.loopStart = wQ._start || 0, wQ._node.bufferSource.loopEnd = wQ._stop, LQ.playing(oQ[DQ]) && (LQ.pause(oQ[DQ], !0), LQ.play(oQ[DQ], !0)))));
          return LQ
        },
        rate: function() {
          var QQ, FQ, wQ, LQ = this,
            qQ = arguments;
          if (0 === qQ.length) FQ = LQ._sounds[0]._id;
          else if (1 === qQ.length) {
            LQ._getSoundIds().indexOf(qQ[0]) >= 0 ? FQ = parseInt(qQ[0], 10) : QQ = parseFloat(qQ[0])
          } else 2 === qQ.length && (QQ = parseFloat(qQ[0]), FQ = parseInt(qQ[1], 10));
          if ("number" !== typeof QQ) return (wQ = LQ._soundById(FQ)) ? wQ._rate : LQ._rate;
          if ("loaded" !== LQ._state || LQ._playLock) return LQ._queue.push({
            event: "rate",
            action: function() {
              LQ.rate.apply(LQ, qQ)
            }
          }), LQ;
          "undefined" === typeof FQ && (LQ._rate = QQ), FQ = LQ._getSoundIds(FQ);
          for (var DQ = 0; DQ < FQ.length; DQ++)
            if (wQ = LQ._soundById(FQ[DQ])) {
              LQ.playing(FQ[DQ]) && (wQ._rateSeek = LQ.seek(FQ[DQ]), wQ._playStart = LQ._webAudio ? oQ.ctx.currentTime : wQ._playStart), wQ._rate = QQ, LQ._webAudio && wQ._node && wQ._node.bufferSource ? wQ._node.bufferSource.playbackRate.setValueAtTime(QQ, oQ.ctx.currentTime) : wQ._node && (wQ._node.playbackRate = QQ);
              var kQ = LQ.seek(FQ[DQ]),
                vQ = 1e3 * ((LQ._sprite[wQ._sprite][0] + LQ._sprite[wQ._sprite][1]) / 1e3 - kQ) / Math.abs(wQ._rate);
              !LQ._endTimers[FQ[DQ]] && wQ.WC || (LQ._clearTimer(FQ[DQ]), LQ._endTimers[FQ[DQ]] = setTimeout(LQ._ended.bind(LQ, wQ), vQ)), LQ._emit("rate", wQ._id)
            } return LQ
        },
        seek: function() {
          var QQ, FQ, wQ = this,
            LQ = arguments;
          if (0 === LQ.length) wQ._sounds.length && (FQ = wQ._sounds[0]._id);
          else if (1 === LQ.length) {
            wQ._getSoundIds().indexOf(LQ[0]) >= 0 ? FQ = parseInt(LQ[0], 10) : wQ._sounds.length && (FQ = wQ._sounds[0]._id, QQ = parseFloat(LQ[0]))
          } else 2 === LQ.length && (QQ = parseFloat(LQ[0]), FQ = parseInt(LQ[1], 10));
          if ("undefined" === typeof FQ) return 0;
          if ("number" === typeof QQ && ("loaded" !== wQ._state || wQ._playLock)) return wQ._queue.push({
            event: "seek",
            action: function() {
              wQ.seek.apply(wQ, LQ)
            }
          }), wQ;
          var qQ = wQ._soundById(FQ);
          if (qQ) {
            if (!("number" === typeof QQ && QQ >= 0)) {
              if (wQ._webAudio) {
                var DQ = wQ.playing(FQ) ? oQ.ctx.currentTime - qQ._playStart : 0,
                  kQ = qQ._rateSeek ? qQ._rateSeek - qQ._seek : 0;
                return qQ._seek + (kQ + DQ * Math.abs(qQ._rate))
              }
              return qQ._node.currentTime
            }
            var vQ = wQ.playing(FQ);
            vQ && wQ.pause(FQ, !0), qQ._seek = QQ, qQ._ended = !1, wQ._clearTimer(FQ), wQ._webAudio || !qQ._node || isNaN(qQ._node.duration) || (qQ._node.currentTime = QQ);
            var mQ = function() {
              vQ && wQ.play(FQ, !0), wQ._emit("seek", FQ)
            };
            if (vQ && !wQ._webAudio) {
              var uQ = function() {
                wQ._playLock ? setTimeout(uQ, 0) : mQ()
              };
              setTimeout(uQ, 0)
            } else mQ()
          }
          return wQ
        },
        playing: function(QQ) {
          var FQ = this;
          if ("number" === typeof QQ) {
            var wQ = FQ._soundById(QQ);
            return !!wQ && !wQ.WC
          }
          for (var LQ = 0; LQ < FQ._sounds.length; LQ++)
            if (!FQ._sounds[LQ].WC) return !0;
          return !1
        },
        duration: function(QQ) {
          var FQ = this,
            wQ = FQ._duration,
            LQ = FQ._soundById(QQ);
          return LQ && (wQ = FQ._sprite[LQ._sprite][1] / 1e3), wQ
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var QQ = this, FQ = QQ._sounds, wQ = 0; wQ < FQ.length; wQ++) FQ[wQ].WC || QQ.stop(FQ[wQ]._id), QQ._webAudio || (QQ._clearSound(FQ[wQ]._node), FQ[wQ]._node.removeEventListener("error", FQ[wQ]._errorFn, !1), FQ[wQ]._node.removeEventListener(oQ._canPlayEvent, FQ[wQ]._loadFn, !1), FQ[wQ]._node.removeEventListener("ended", FQ[wQ]._endFn, !1), oQ._releaseHtml5Audio(FQ[wQ]._node)), delete FQ[wQ]._node, QQ._clearTimer(FQ[wQ]._id);
          var LQ = oQ._howls.indexOf(QQ);
          LQ >= 0 && oQ._howls.splice(LQ, 1);
          var qQ = !0;
          for (wQ = 0; wQ < oQ._howls.length; wQ++)
            if (oQ._howls[wQ]._src === QQ._src || QQ._src.indexOf(oQ._howls[wQ]._src) >= 0) {
              qQ = !1;
              break
            } return vQ && qQ && delete vQ[QQ._src], oQ.noAudio = !1, QQ._state = "unloaded", QQ._sounds = [], QQ = null, null
        },
        on: function(QQ, FQ, wQ, LQ) {
          var qQ = this["_on" + QQ];
          return "function" === typeof FQ && qQ.push(LQ ? {
            id: wQ,
            gY: FQ,
            once: LQ
          } : {
            id: wQ,
            gY: FQ
          }), this
        },
        off: function(QQ, FQ, wQ) {
          var LQ = this,
            qQ = LQ["_on" + QQ],
            oQ = 0;
          if ("number" === typeof FQ && (wQ = FQ, FQ = null), FQ || wQ)
            for (oQ = 0; oQ < qQ.length; oQ++) {
              var DQ = wQ === qQ[oQ].id;
              if (FQ === qQ[oQ].gY && DQ || !FQ && DQ) {
                qQ.splice(oQ, 1);
                break
              }
            } else if (QQ) LQ["_on" + QQ] = [];
            else {
              var kQ = Object.keys(LQ);
              for (oQ = 0; oQ < kQ.length; oQ++) 0 === kQ[oQ].indexOf("_on") && Array.isArray(LQ[kQ[oQ]]) && (LQ[kQ[oQ]] = [])
            } return LQ
        },
        once: function(QQ, FQ, wQ) {
          return this.on(QQ, FQ, wQ, 1), this
        },
        _emit: function(QQ, FQ, wQ) {
          for (var LQ = this, qQ = LQ["_on" + QQ], oQ = qQ.length - 1; oQ >= 0; oQ--) qQ[oQ].id && qQ[oQ].id !== FQ && "load" !== QQ || (setTimeout(function(QQ) {
            QQ.call(this, FQ, wQ)
          }.bind(LQ, qQ[oQ].gY), 0), qQ[oQ].once && LQ.off(QQ, qQ[oQ].gY, qQ[oQ].id));
          return LQ._loadQueue(QQ), LQ
        },
        _loadQueue: function(QQ) {
          var FQ = this;
          if (FQ._queue.length > 0) {
            var wQ = FQ._queue[0];
            wQ.event === QQ && (FQ._queue.shift(), FQ._loadQueue()), QQ || wQ.action()
          }
          return FQ
        },
        _ended: function(QQ) {
          var FQ = this,
            wQ = QQ._sprite;
          if (!FQ._webAudio && QQ._node && !QQ._node.paused && !QQ._node.ended && QQ._node.currentTime < QQ._stop) return setTimeout(FQ._ended.bind(FQ, QQ), 100), FQ;
          var LQ = !(!QQ._loop && !FQ._sprite[wQ][2]);
          if (FQ._emit("end", QQ._id), !FQ._webAudio && LQ && FQ.stop(QQ._id, !0).play(QQ._id), FQ._webAudio && LQ) {
            FQ._emit("play", QQ._id), QQ._seek = QQ._start || 0, QQ._rateSeek = 0, QQ._playStart = oQ.ctx.currentTime;
            var qQ = 1e3 * (QQ._stop - QQ._start) / Math.abs(QQ._rate);
            FQ._endTimers[QQ._id] = setTimeout(FQ._ended.bind(FQ, QQ), qQ)
          }
          return FQ._webAudio && !LQ && (QQ.WC = !0, QQ._ended = !0, QQ._seek = QQ._start || 0, QQ._rateSeek = 0, FQ._clearTimer(QQ._id), FQ._cleanBuffer(QQ._node), oQ._autoSuspend()), FQ._webAudio || LQ || FQ.stop(QQ._id, !0), FQ
        },
        _clearTimer: function(QQ) {
          var FQ = this;
          if (FQ._endTimers[QQ]) {
            if ("function" !== typeof FQ._endTimers[QQ]) clearTimeout(FQ._endTimers[QQ]);
            else {
              var wQ = FQ._soundById(QQ);
              wQ && wQ._node && wQ._node.removeEventListener("ended", FQ._endTimers[QQ], !1)
            }
            delete FQ._endTimers[QQ]
          }
          return FQ
        },
        _soundById: function(QQ) {
          for (var FQ = this, wQ = 0; wQ < FQ._sounds.length; wQ++)
            if (QQ === FQ._sounds[wQ]._id) return FQ._sounds[wQ];
          return null
        },
        _inactiveSound: function() {
          var QQ = this;
          QQ._drain();
          for (var FQ = 0; FQ < QQ._sounds.length; FQ++)
            if (QQ._sounds[FQ]._ended) return QQ._sounds[FQ].reset();
          return new kQ(QQ)
        },
        _drain: function() {
          var QQ = this,
            FQ = QQ._pool,
            wQ = 0,
            LQ = 0;
          if (!(QQ._sounds.length < FQ)) {
            for (LQ = 0; LQ < QQ._sounds.length; LQ++) QQ._sounds[LQ]._ended && wQ++;
            for (LQ = QQ._sounds.length - 1; LQ >= 0; LQ--) {
              if (wQ <= FQ) return;
              QQ._sounds[LQ]._ended && (QQ._webAudio && QQ._sounds[LQ]._node && QQ._sounds[LQ]._node.disconnect(0), QQ._sounds.splice(LQ, 1), wQ--)
            }
          }
        },
        _getSoundIds: function(QQ) {
          if ("undefined" === typeof QQ) {
            for (var FQ = [], wQ = 0; wQ < this._sounds.length; wQ++) FQ.push(this._sounds[wQ]._id);
            return FQ
          }
          return [QQ]
        },
        _refreshBuffer: function(QQ) {
          return QQ._node.bufferSource = oQ.ctx.createBufferSource(), QQ._node.bufferSource.buffer = vQ[this._src], QQ._panner ? QQ._node.bufferSource.connect(QQ._panner) : QQ._node.bufferSource.connect(QQ._node), QQ._node.bufferSource.loop = QQ._loop, QQ._loop && (QQ._node.bufferSource.loopStart = QQ._start || 0, QQ._node.bufferSource.loopEnd = QQ._stop || 0), QQ._node.bufferSource.playbackRate.setValueAtTime(QQ._rate, oQ.ctx.currentTime), this
        },
        _cleanBuffer: function(QQ) {
          var FQ = oQ._navigator && oQ._navigator.vendor.indexOf("Apple") >= 0;
          if (oQ._scratchBuffer && QQ.bufferSource && (QQ.bufferSource.onended = null, QQ.bufferSource.disconnect(0), FQ)) try {
            QQ.bufferSource.buffer = oQ._scratchBuffer
          } catch (wQ) {}
          return QQ.bufferSource = null, this
        },
        _clearSound: function(QQ) {
          /MSIE |Trident\//.test(oQ._navigator && oQ._navigator.userAgent) || (QQ.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var kQ = function(QQ) {
        this._parent = QQ, this.init()
      };
      kQ.prototype = {
        init: function() {
          var QQ = this,
            FQ = QQ._parent;
          return QQ._muted = FQ._muted, QQ._loop = FQ._loop, QQ._volume = FQ._volume, QQ._rate = FQ._rate, QQ._seek = 0, QQ.WC = !0, QQ._ended = !0, QQ._sprite = "__default", QQ._id = ++oQ._counter, FQ._sounds.push(QQ), QQ.create(), QQ
        },
        create: function() {
          var QQ = this,
            FQ = QQ._parent,
            wQ = oQ._muted || QQ._muted || QQ._parent._muted ? 0 : QQ._volume;
          return FQ._webAudio ? (QQ._node = "undefined" === typeof oQ.ctx.createGain ? oQ.ctx.createGainNode() : oQ.ctx.createGain(), QQ._node.gain.setValueAtTime(wQ, oQ.ctx.currentTime), QQ._node.paused = !0, QQ._node.connect(oQ.masterGain)) : oQ.noAudio || (QQ._node = oQ._obtainHtml5Audio(), QQ._errorFn = QQ._errorListener.bind(QQ), QQ._node.addEventListener("error", QQ._errorFn, !1), QQ._loadFn = QQ._loadListener.bind(QQ), QQ._node.addEventListener(oQ._canPlayEvent, QQ._loadFn, !1), QQ._endFn = QQ._endListener.bind(QQ), QQ._node.addEventListener("ended", QQ._endFn, !1), QQ._node.src = FQ._src, QQ._node.preload = !0 === FQ._preload ? "auto" : FQ._preload, QQ._node.volume = wQ * oQ.volume(), QQ._node.load()), QQ
        },
        reset: function() {
          var QQ = this,
            FQ = QQ._parent;
          return QQ._muted = FQ._muted, QQ._loop = FQ._loop, QQ._volume = FQ._volume, QQ._rate = FQ._rate, QQ._seek = 0, QQ._rateSeek = 0, QQ.WC = !0, QQ._ended = !0, QQ._sprite = "__default", QQ._id = ++oQ._counter, QQ
        },
        _errorListener: function() {
          var QQ = this;
          QQ._parent._emit("loaderror", QQ._id, QQ._node.error ? QQ._node.error.code : 0), QQ._node.removeEventListener("error", QQ._errorFn, !1)
        },
        _loadListener: function() {
          var QQ = this,
            FQ = QQ._parent;
          FQ._duration = Math.ceil(10 * QQ._node.duration) / 10, 0 === Object.keys(FQ._sprite).length && (FQ._sprite = {
            __default: [0, 1e3 * FQ._duration]
          }), "loaded" !== FQ._state && (FQ._state = "loaded", FQ._emit("load"), FQ._loadQueue()), QQ._node.removeEventListener(oQ._canPlayEvent, QQ._loadFn, !1)
        },
        _endListener: function() {
          var QQ = this,
            FQ = QQ._parent;
          FQ._duration === 1 / 0 && (FQ._duration = Math.ceil(10 * QQ._node.duration) / 10, FQ._sprite.__default[1] === 1 / 0 && (FQ._sprite.__default[1] = 1e3 * FQ._duration), FQ._ended(QQ)), QQ._node.removeEventListener("ended", QQ._endFn, !1)
        }
      };
      var vQ = {},
        mQ = function(QQ) {
          var FQ = QQ._src;
          if (vQ[FQ]) return QQ._duration = vQ[FQ].duration, void bQ(QQ);
          if (/^data:[^;]+;base64,/.test(FQ)) {
            for (var wQ = atob(FQ.split(",")[1]), LQ = new Uint8Array(wQ.length), qQ = 0; qQ < wQ.length; ++qQ) LQ[qQ] = wQ.charCodeAt(qQ);
            HQ(LQ.buffer, QQ)
          } else {
            var oQ = new XMLHttpRequest;
            oQ.open(QQ._xhr.method, FQ, !0), oQ.withCredentials = QQ._xhr.withCredentials, oQ.responseType = "arraybuffer", QQ._xhr.headers && Object.keys(QQ._xhr.headers).forEach((function(FQ) {
              oQ.setRequestHeader(FQ, QQ._xhr.headers[FQ])
            })), oQ.onload = function() {
              var FQ = (oQ.status + "")[0];
              "0" === FQ || "2" === FQ || "3" === FQ ? HQ(oQ.response, QQ) : QQ._emit("loaderror", null, "Failed loading audio file with status: " + oQ.status + ".")
            }, oQ.onerror = function() {
              QQ._webAudio && (QQ._html5 = !0, QQ._webAudio = !1, QQ._sounds = [], delete vQ[FQ], QQ.load())
            }, uQ(oQ)
          }
        },
        uQ = function(QQ) {
          try {
            QQ.send()
          } catch (FQ) {
            QQ.onerror()
          }
        },
        HQ = function(QQ, FQ) {
          var wQ = function() {
              FQ._emit("loaderror", null, "Decoding audio data failed.")
            },
            LQ = function(QQ) {
              QQ && FQ._sounds.length > 0 ? (vQ[FQ._src] = QQ, bQ(FQ, QQ)) : wQ()
            };
          "undefined" !== typeof Promise && 1 === oQ.ctx.decodeAudioData.length ? oQ.ctx.decodeAudioData(QQ).then(LQ).catch(wQ) : oQ.ctx.decodeAudioData(QQ, LQ, wQ)
        },
        bQ = function(QQ, FQ) {
          FQ && !QQ._duration && (QQ._duration = FQ.duration), 0 === Object.keys(QQ._sprite).length && (QQ._sprite = {
            __default: [0, 1e3 * QQ._duration]
          }), "loaded" !== QQ._state && (QQ._state = "loaded", QQ._emit("load"), QQ._loadQueue())
        },
        YQ = function() {
          if (oQ.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? oQ.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? oQ.ctx = new webkitAudioContext : oQ.usingWebAudio = !1
            } catch (qQ) {
              oQ.usingWebAudio = !1
            }
            oQ.ctx || (oQ.usingWebAudio = !1);
            var QQ = /iP(hone|od|ad)/.test(oQ._navigator && oQ._navigator.platform),
              FQ = oQ._navigator && oQ._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              wQ = FQ ? parseInt(FQ[1], 10) : null;
            if (QQ && wQ && wQ < 9) {
              var LQ = /safari/.test(oQ._navigator && oQ._navigator.userAgent.toLowerCase());
              oQ._navigator && !LQ && (oQ.usingWebAudio = !1)
            }
            oQ.usingWebAudio && (oQ.masterGain = "undefined" === typeof oQ.ctx.createGain ? oQ.ctx.createGainNode() : oQ.ctx.createGain(), oQ.masterGain.gain.setValueAtTime(oQ._muted ? 0 : oQ._volume, oQ.ctx.currentTime), oQ.masterGain.connect(oQ.ctx.destination)), oQ._setup()
          }
        };
      void 0 === (LQ = function() {
        return {
          Howler: oQ,
          Howl: DQ
        }
      }.apply(FQ, [])) || (QQ.exports = LQ), FQ.Howler = oQ, FQ.Howl = DQ, "undefined" !== typeof wQ.g ? (wQ.g.HowlerGlobal = qQ, wQ.g.Howler = oQ, wQ.g.Howl = DQ, wQ.g.Sound = kQ) : "undefined" !== typeof window && (window.HowlerGlobal = qQ, window.Howler = oQ, window.Howl = DQ, window.Sound = kQ)
    }(),
    function() {
      var QQ;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(QQ) {
        var FQ = this;
        if (!FQ.ctx || !FQ.ctx.listener) return FQ;
        for (var wQ = FQ._howls.length - 1; wQ >= 0; wQ--) FQ._howls[wQ].stereo(QQ);
        return FQ
      }, HowlerGlobal.prototype.pos = function(QQ, FQ, wQ) {
        var LQ = this;
        return LQ.ctx && LQ.ctx.listener ? (FQ = "number" !== typeof FQ ? LQ._pos[1] : FQ, wQ = "number" !== typeof wQ ? LQ._pos[2] : wQ, "number" !== typeof QQ ? LQ._pos : (LQ._pos = [QQ, FQ, wQ], "undefined" !== typeof LQ.ctx.listener.positionX ? (LQ.ctx.listener.positionX.setTargetAtTime(LQ._pos[0], Howler.ctx.currentTime, .1), LQ.ctx.listener.positionY.setTargetAtTime(LQ._pos[1], Howler.ctx.currentTime, .1), LQ.ctx.listener.positionZ.setTargetAtTime(LQ._pos[2], Howler.ctx.currentTime, .1)) : LQ.ctx.listener.setPosition(LQ._pos[0], LQ._pos[1], LQ._pos[2]), LQ)) : LQ
      }, HowlerGlobal.prototype.orientation = function(QQ, FQ, wQ, LQ, qQ, oQ) {
        var DQ = this;
        if (!DQ.ctx || !DQ.ctx.listener) return DQ;
        var kQ = DQ._orientation;
        return FQ = "number" !== typeof FQ ? kQ[1] : FQ, wQ = "number" !== typeof wQ ? kQ[2] : wQ, LQ = "number" !== typeof LQ ? kQ[3] : LQ, qQ = "number" !== typeof qQ ? kQ[4] : qQ, oQ = "number" !== typeof oQ ? kQ[5] : oQ, "number" !== typeof QQ ? kQ : (DQ._orientation = [QQ, FQ, wQ, LQ, qQ, oQ], "undefined" !== typeof DQ.ctx.listener.forwardX ? (DQ.ctx.listener.forwardX.setTargetAtTime(QQ, Howler.ctx.currentTime, .1), DQ.ctx.listener.forwardY.setTargetAtTime(FQ, Howler.ctx.currentTime, .1), DQ.ctx.listener.forwardZ.setTargetAtTime(wQ, Howler.ctx.currentTime, .1), DQ.ctx.listener.upX.setTargetAtTime(LQ, Howler.ctx.currentTime, .1), DQ.ctx.listener.upY.setTargetAtTime(qQ, Howler.ctx.currentTime, .1), DQ.ctx.listener.upZ.setTargetAtTime(oQ, Howler.ctx.currentTime, .1)) : DQ.ctx.listener.setOrientation(QQ, FQ, wQ, LQ, qQ, oQ), DQ)
      }, Howl.prototype.init = (QQ = Howl.prototype.init, function(FQ) {
        var wQ = this;
        return wQ._orientation = FQ.orientation || [1, 0, 0], wQ._stereo = FQ.stereo || null, wQ._pos = FQ.pos || null, wQ._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof FQ.coneInnerAngle ? FQ.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof FQ.coneOuterAngle ? FQ.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof FQ.coneOuterGain ? FQ.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof FQ.distanceModel ? FQ.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof FQ.maxDistance ? FQ.maxDistance : 1e4,
          panningModel: "undefined" !== typeof FQ.panningModel ? FQ.panningModel : "HRTF",
          refDistance: "undefined" !== typeof FQ.refDistance ? FQ.refDistance : 1,
          rolloffFactor: "undefined" !== typeof FQ.rolloffFactor ? FQ.rolloffFactor : 1
        }, wQ._onstereo = FQ.onstereo ? [{
          gY: FQ.onstereo
        }] : [], wQ._onpos = FQ.onpos ? [{
          gY: FQ.onpos
        }] : [], wQ._onorientation = FQ.onorientation ? [{
          gY: FQ.onorientation
        }] : [], QQ.call(this, FQ)
      }), Howl.prototype.stereo = function(QQ, wQ) {
        var LQ = this;
        if (!LQ._webAudio) return LQ;
        if ("loaded" !== LQ._state) return LQ._queue.push({
          event: "stereo",
          action: function() {
            LQ.stereo(QQ, wQ)
          }
        }), LQ;
        var qQ = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof wQ) {
          if ("number" !== typeof QQ) return LQ._stereo;
          LQ._stereo = QQ, LQ._pos = [QQ, 0, 0]
        }
        for (var oQ = LQ._getSoundIds(wQ), DQ = 0; DQ < oQ.length; DQ++) {
          var kQ = LQ._soundById(oQ[DQ]);
          if (kQ) {
            if ("number" !== typeof QQ) return kQ._stereo;
            kQ._stereo = QQ, kQ._pos = [QQ, 0, 0], kQ._node && (kQ._pannerAttr.panningModel = "equalpower", kQ._panner && kQ._panner.pan || FQ(kQ, qQ), "spatial" === qQ ? "undefined" !== typeof kQ._panner.positionX ? (kQ._panner.positionX.setValueAtTime(QQ, Howler.ctx.currentTime), kQ._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), kQ._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : kQ._panner.setPosition(QQ, 0, 0) : kQ._panner.pan.setValueAtTime(QQ, Howler.ctx.currentTime)), LQ._emit("stereo", kQ._id)
          }
        }
        return LQ
      }, Howl.prototype.pos = function(QQ, wQ, LQ, qQ) {
        var oQ = this;
        if (!oQ._webAudio) return oQ;
        if ("loaded" !== oQ._state) return oQ._queue.push({
          event: "pos",
          action: function() {
            oQ.pos(QQ, wQ, LQ, qQ)
          }
        }), oQ;
        if (wQ = "number" !== typeof wQ ? 0 : wQ, LQ = "number" !== typeof LQ ? -.5 : LQ, "undefined" === typeof qQ) {
          if ("number" !== typeof QQ) return oQ._pos;
          oQ._pos = [QQ, wQ, LQ]
        }
        for (var DQ = oQ._getSoundIds(qQ), kQ = 0; kQ < DQ.length; kQ++) {
          var vQ = oQ._soundById(DQ[kQ]);
          if (vQ) {
            if ("number" !== typeof QQ) return vQ._pos;
            vQ._pos = [QQ, wQ, LQ], vQ._node && (vQ._panner && !vQ._panner.pan || FQ(vQ, "spatial"), "undefined" !== typeof vQ._panner.positionX ? (vQ._panner.positionX.setValueAtTime(QQ, Howler.ctx.currentTime), vQ._panner.positionY.setValueAtTime(wQ, Howler.ctx.currentTime), vQ._panner.positionZ.setValueAtTime(LQ, Howler.ctx.currentTime)) : vQ._panner.setPosition(QQ, wQ, LQ)), oQ._emit("pos", vQ._id)
          }
        }
        return oQ
      }, Howl.prototype.orientation = function(QQ, wQ, LQ, qQ) {
        var oQ = this;
        if (!oQ._webAudio) return oQ;
        if ("loaded" !== oQ._state) return oQ._queue.push({
          event: "orientation",
          action: function() {
            oQ.orientation(QQ, wQ, LQ, qQ)
          }
        }), oQ;
        if (wQ = "number" !== typeof wQ ? oQ._orientation[1] : wQ, LQ = "number" !== typeof LQ ? oQ._orientation[2] : LQ, "undefined" === typeof qQ) {
          if ("number" !== typeof QQ) return oQ._orientation;
          oQ._orientation = [QQ, wQ, LQ]
        }
        for (var DQ = oQ._getSoundIds(qQ), kQ = 0; kQ < DQ.length; kQ++) {
          var vQ = oQ._soundById(DQ[kQ]);
          if (vQ) {
            if ("number" !== typeof QQ) return vQ._orientation;
            vQ._orientation = [QQ, wQ, LQ], vQ._node && (vQ._panner || (vQ._pos || (vQ._pos = oQ._pos || [0, 0, -.5]), FQ(vQ, "spatial")), "undefined" !== typeof vQ._panner.orientationX ? (vQ._panner.orientationX.setValueAtTime(QQ, Howler.ctx.currentTime), vQ._panner.orientationY.setValueAtTime(wQ, Howler.ctx.currentTime), vQ._panner.orientationZ.setValueAtTime(LQ, Howler.ctx.currentTime)) : vQ._panner.setOrientation(QQ, wQ, LQ)), oQ._emit("orientation", vQ._id)
          }
        }
        return oQ
      }, Howl.prototype.pannerAttr = function() {
        var QQ, wQ, LQ, qQ = this,
          oQ = arguments;
        if (!qQ._webAudio) return qQ;
        if (0 === oQ.length) return qQ._pannerAttr;
        if (1 === oQ.length) {
          if ("object" !== typeof oQ[0]) return (LQ = qQ._soundById(parseInt(oQ[0], 10))) ? LQ._pannerAttr : qQ._pannerAttr;
          QQ = oQ[0], "undefined" === typeof wQ && (QQ.pannerAttr || (QQ.pannerAttr = {
            coneInnerAngle: QQ.coneInnerAngle,
            coneOuterAngle: QQ.coneOuterAngle,
            coneOuterGain: QQ.coneOuterGain,
            distanceModel: QQ.distanceModel,
            maxDistance: QQ.maxDistance,
            refDistance: QQ.refDistance,
            rolloffFactor: QQ.rolloffFactor,
            panningModel: QQ.panningModel
          }), qQ._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof QQ.pannerAttr.coneInnerAngle ? QQ.pannerAttr.coneInnerAngle : qQ._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof QQ.pannerAttr.coneOuterAngle ? QQ.pannerAttr.coneOuterAngle : qQ._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof QQ.pannerAttr.coneOuterGain ? QQ.pannerAttr.coneOuterGain : qQ._coneOuterGain,
            distanceModel: "undefined" !== typeof QQ.pannerAttr.distanceModel ? QQ.pannerAttr.distanceModel : qQ._distanceModel,
            maxDistance: "undefined" !== typeof QQ.pannerAttr.maxDistance ? QQ.pannerAttr.maxDistance : qQ._maxDistance,
            refDistance: "undefined" !== typeof QQ.pannerAttr.refDistance ? QQ.pannerAttr.refDistance : qQ._refDistance,
            rolloffFactor: "undefined" !== typeof QQ.pannerAttr.rolloffFactor ? QQ.pannerAttr.rolloffFactor : qQ._rolloffFactor,
            panningModel: "undefined" !== typeof QQ.pannerAttr.panningModel ? QQ.pannerAttr.panningModel : qQ._panningModel
          })
        } else 2 === oQ.length && (QQ = oQ[0], wQ = parseInt(oQ[1], 10));
        for (var DQ = qQ._getSoundIds(wQ), kQ = 0; kQ < DQ.length; kQ++)
          if (LQ = qQ._soundById(DQ[kQ])) {
            var vQ = LQ._pannerAttr;
            vQ = {
              coneInnerAngle: "undefined" !== typeof QQ.coneInnerAngle ? QQ.coneInnerAngle : vQ.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof QQ.coneOuterAngle ? QQ.coneOuterAngle : vQ.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof QQ.coneOuterGain ? QQ.coneOuterGain : vQ.coneOuterGain,
              distanceModel: "undefined" !== typeof QQ.distanceModel ? QQ.distanceModel : vQ.distanceModel,
              maxDistance: "undefined" !== typeof QQ.maxDistance ? QQ.maxDistance : vQ.maxDistance,
              refDistance: "undefined" !== typeof QQ.refDistance ? QQ.refDistance : vQ.refDistance,
              rolloffFactor: "undefined" !== typeof QQ.rolloffFactor ? QQ.rolloffFactor : vQ.rolloffFactor,
              panningModel: "undefined" !== typeof QQ.panningModel ? QQ.panningModel : vQ.panningModel
            };
            var mQ = LQ._panner;
            mQ ? (mQ.coneInnerAngle = vQ.coneInnerAngle, mQ.coneOuterAngle = vQ.coneOuterAngle, mQ.coneOuterGain = vQ.coneOuterGain, mQ.distanceModel = vQ.distanceModel, mQ.maxDistance = vQ.maxDistance, mQ.refDistance = vQ.refDistance, mQ.rolloffFactor = vQ.rolloffFactor, mQ.panningModel = vQ.panningModel) : (LQ._pos || (LQ._pos = qQ._pos || [0, 0, -.5]), FQ(LQ, "spatial"))
          } return qQ
      }, Sound.prototype.init = function(QQ) {
        return function() {
          var FQ = this,
            wQ = FQ._parent;
          FQ._orientation = wQ._orientation, FQ._stereo = wQ._stereo, FQ._pos = wQ._pos, FQ._pannerAttr = wQ._pannerAttr, QQ.call(this), FQ._stereo ? wQ.stereo(FQ._stereo) : FQ._pos && wQ.pos(FQ._pos[0], FQ._pos[1], FQ._pos[2], FQ._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(QQ) {
        return function() {
          var FQ = this,
            wQ = FQ._parent;
          return FQ._orientation = wQ._orientation, FQ._stereo = wQ._stereo, FQ._pos = wQ._pos, FQ._pannerAttr = wQ._pannerAttr, FQ._stereo ? wQ.stereo(FQ._stereo) : FQ._pos ? wQ.pos(FQ._pos[0], FQ._pos[1], FQ._pos[2], FQ._id) : FQ._panner && (FQ._panner.disconnect(0), FQ._panner = void 0, wQ._refreshBuffer(FQ)), QQ.call(this)
        }
      }(Sound.prototype.reset);
      var FQ = function(QQ, FQ) {
        "spatial" === (FQ = FQ || "spatial") ? (QQ._panner = Howler.ctx.createPanner(), QQ._panner.coneInnerAngle = QQ._pannerAttr.coneInnerAngle, QQ._panner.coneOuterAngle = QQ._pannerAttr.coneOuterAngle, QQ._panner.coneOuterGain = QQ._pannerAttr.coneOuterGain, QQ._panner.distanceModel = QQ._pannerAttr.distanceModel, QQ._panner.maxDistance = QQ._pannerAttr.maxDistance, QQ._panner.refDistance = QQ._pannerAttr.refDistance, QQ._panner.rolloffFactor = QQ._pannerAttr.rolloffFactor, QQ._panner.panningModel = QQ._pannerAttr.panningModel, "undefined" !== typeof QQ._panner.positionX ? (QQ._panner.positionX.setValueAtTime(QQ._pos[0], Howler.ctx.currentTime), QQ._panner.positionY.setValueAtTime(QQ._pos[1], Howler.ctx.currentTime), QQ._panner.positionZ.setValueAtTime(QQ._pos[2], Howler.ctx.currentTime)) : QQ._panner.setPosition(QQ._pos[0], QQ._pos[1], QQ._pos[2]), "undefined" !== typeof QQ._panner.orientationX ? (QQ._panner.orientationX.setValueAtTime(QQ._orientation[0], Howler.ctx.currentTime), QQ._panner.orientationY.setValueAtTime(QQ._orientation[1], Howler.ctx.currentTime), QQ._panner.orientationZ.setValueAtTime(QQ._orientation[2], Howler.ctx.currentTime)) : QQ._panner.setOrientation(QQ._orientation[0], QQ._orientation[1], QQ._orientation[2])) : (QQ._panner = Howler.ctx.createStereoPanner(), QQ._panner.pan.setValueAtTime(QQ._stereo, Howler.ctx.currentTime)), QQ._panner.connect(QQ._node), QQ.WC || QQ._parent.pause(QQ._id, !0).play(QQ._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);