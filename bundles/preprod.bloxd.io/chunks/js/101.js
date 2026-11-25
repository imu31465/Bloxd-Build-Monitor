/*! For license information please see 8104he.101.1073ae18.chunk.js.LICENSE.txt */
export const id = 101;
export const ids = [101];
export const modules = {
  5216: (QQ, WQ, XQ) => {
    var wQ;
    ! function() {
      var qQ = function() {
        this.init()
      };
      qQ.prototype = {
        init: function() {
          var QQ = this || TQ;
          return QQ._counter = 1e3, QQ._html5AudioPool = [], QQ.html5PoolSize = 10, QQ._codecs = {}, QQ._howls = [], QQ._muted = !1, QQ._volume = 1, QQ._canPlayEvent = "canplaythrough", QQ._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, QQ.masterGain = null, QQ.noAudio = !1, QQ.usingWebAudio = !0, QQ.autoSuspend = !0, QQ.ctx = null, QQ.autoUnlock = !0, QQ._setup(), QQ
        },
        volume: function(QQ) {
          var WQ = this || TQ;
          if (QQ = parseFloat(QQ), WQ.ctx || IQ(), "undefined" !== typeof QQ && QQ >= 0 && QQ <= 1) {
            if (WQ._volume = QQ, WQ._muted) return WQ;
            WQ.usingWebAudio && WQ.masterGain.gain.setValueAtTime(QQ, TQ.ctx.currentTime);
            for (var XQ = 0; XQ < WQ._howls.length; XQ++)
              if (!WQ._howls[XQ]._webAudio)
                for (var wQ = WQ._howls[XQ]._getSoundIds(), qQ = 0; qQ < wQ.length; qQ++) {
                  var zQ = WQ._howls[XQ]._soundById(wQ[qQ]);
                  zQ && zQ._node && (zQ._node.volume = zQ._volume * QQ)
                }
            return WQ
          }
          return WQ._volume
        },
        mute: function(QQ) {
          var WQ = this || TQ;
          WQ.ctx || IQ(), WQ._muted = QQ, WQ.usingWebAudio && WQ.masterGain.gain.setValueAtTime(QQ ? 0 : WQ._volume, TQ.ctx.currentTime);
          for (var XQ = 0; XQ < WQ._howls.length; XQ++)
            if (!WQ._howls[XQ]._webAudio)
              for (var wQ = WQ._howls[XQ]._getSoundIds(), qQ = 0; qQ < wQ.length; qQ++) {
                var zQ = WQ._howls[XQ]._soundById(wQ[qQ]);
                zQ && zQ._node && (zQ._node.muted = !!QQ || zQ._muted)
              }
          return WQ
        },
        stop: function() {
          for (var QQ = this || TQ, WQ = 0; WQ < QQ._howls.length; WQ++) QQ._howls[WQ].stop();
          return QQ
        },
        unload: function() {
          for (var QQ = this || TQ, WQ = QQ._howls.length - 1; WQ >= 0; WQ--) QQ._howls[WQ].unload();
          return QQ.usingWebAudio && QQ.ctx && "undefined" !== typeof QQ.ctx.close && (QQ.ctx.close(), QQ.ctx = null, IQ()), QQ
        },
        codecs: function(QQ) {
          return (this || TQ)._codecs[QQ.replace(/^x-/, "")]
        },
        _setup: function() {
          var QQ = this || TQ;
          if (QQ.state = QQ.ctx && QQ.ctx.state || "suspended", QQ._autoSuspend(), !QQ.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (QQ._canPlayEvent = "canplay")
            } catch (WQ) {
              QQ.noAudio = !0
            } else QQ.noAudio = !0;
          try {
            (new Audio).muted && (QQ.noAudio = !0)
          } catch (WQ) {}
          return QQ.noAudio || QQ._setupCodecs(), QQ
        },
        _setupCodecs: function() {
          var QQ = this || TQ,
            WQ = null;
          try {
            WQ = "undefined" !== typeof Audio ? new Audio : null
          } catch (gQ) {
            return QQ
          }
          if (!WQ || "function" !== typeof WQ.canPlayType) return QQ;
          var XQ = WQ.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            wQ = QQ._navigator ? QQ._navigator.userAgent : "",
            qQ = wQ.match(/OPR\/([0-6].)/g),
            zQ = qQ && parseInt(qQ[0].split("/")[1], 10) < 33,
            sQ = -1 !== wQ.indexOf("Safari") && -1 === wQ.indexOf("Chrome"),
            FQ = wQ.match(/Version\/(.*?) /),
            PQ = sQ && FQ && parseInt(FQ[1], 10) < 15;
          return QQ._codecs = {
            mp3: !(zQ || !XQ && !WQ.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!XQ,
            opus: !!WQ.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!WQ.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!WQ.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(WQ.canPlayType('audio/wav; codecs="1"') || WQ.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!WQ.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!WQ.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(WQ.canPlayType("audio/x-m4a;") || WQ.canPlayType("audio/m4a;") || WQ.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(WQ.canPlayType("audio/x-m4b;") || WQ.canPlayType("audio/m4b;") || WQ.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(WQ.canPlayType("audio/x-mp4;") || WQ.canPlayType("audio/mp4;") || WQ.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(PQ || !WQ.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(PQ || !WQ.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!WQ.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(WQ.canPlayType("audio/x-flac;") || WQ.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, QQ
        },
        _unlockAudio: function() {
          var QQ = this || TQ;
          if (!QQ._audioUnlocked && QQ.ctx) {
            QQ._audioUnlocked = !1, QQ.autoUnlock = !1, QQ._mobileUnloaded || 44100 === QQ.ctx.sampleRate || (QQ._mobileUnloaded = !0, QQ.unload()), QQ._scratchBuffer = QQ.ctx.createBuffer(1, 1, 22050);
            var WQ = function(XQ) {
              for (; QQ._html5AudioPool.length < QQ.html5PoolSize;) try {
                var wQ = new Audio;
                wQ._unlocked = !0, QQ._releaseHtml5Audio(wQ)
              } catch (XQ) {
                QQ.noAudio = !0;
                break
              }
              for (var qQ = 0; qQ < QQ._howls.length; qQ++)
                if (!QQ._howls[qQ]._webAudio)
                  for (var TQ = QQ._howls[qQ]._getSoundIds(), zQ = 0; zQ < TQ.length; zQ++) {
                    var sQ = QQ._howls[qQ]._soundById(TQ[zQ]);
                    sQ && sQ._node && !sQ._node._unlocked && (sQ._node._unlocked = !0, sQ._node.load())
                  }
              QQ._autoResume();
              var FQ = QQ.ctx.createBufferSource();
              FQ.buffer = QQ._scratchBuffer, FQ.connect(QQ.ctx.destination), "undefined" === typeof FQ.start ? FQ.noteOn(0) : FQ.start(0), "function" === typeof QQ.ctx.resume && QQ.ctx.resume(), FQ.onended = function() {
                FQ.disconnect(0), QQ._audioUnlocked = !0, document.removeEventListener("touchstart", WQ, !0), document.removeEventListener("touchend", WQ, !0), document.removeEventListener("click", WQ, !0), document.removeEventListener("keydown", WQ, !0);
                for (var XQ = 0; XQ < QQ._howls.length; XQ++) QQ._howls[XQ]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", WQ, !0), document.addEventListener("touchend", WQ, !0), document.addEventListener("click", WQ, !0), document.addEventListener("keydown", WQ, !0), QQ
          }
        },
        _obtainHtml5Audio: function() {
          var QQ = this || TQ;
          if (QQ._html5AudioPool.length) return QQ._html5AudioPool.pop();
          var WQ = (new Audio).play();
          return WQ && "undefined" !== typeof Promise && (WQ instanceof Promise || "function" === typeof WQ.then) && WQ.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(QQ) {
          var WQ = this || TQ;
          return QQ._unlocked && WQ._html5AudioPool.push(QQ), WQ
        },
        _autoSuspend: function() {
          var QQ = this;
          if (QQ.autoSuspend && QQ.ctx && "undefined" !== typeof QQ.ctx.suspend && TQ.usingWebAudio) {
            for (var WQ = 0; WQ < QQ._howls.length; WQ++)
              if (QQ._howls[WQ]._webAudio)
                for (var XQ = 0; XQ < QQ._howls[WQ]._sounds.length; XQ++)
                  if (!QQ._howls[WQ]._sounds[XQ].lD) return QQ;
            return QQ._suspendTimer && clearTimeout(QQ._suspendTimer), QQ._suspendTimer = setTimeout((function() {
              if (QQ.autoSuspend) {
                QQ._suspendTimer = null, QQ.state = "suspending";
                var WQ = function() {
                  QQ.state = "suspended", QQ._resumeAfterSuspend && (delete QQ._resumeAfterSuspend, QQ._autoResume())
                };
                QQ.ctx.suspend().then(WQ, WQ)
              }
            }), 3e4), QQ
          }
        },
        _autoResume: function() {
          var QQ = this;
          if (QQ.ctx && "undefined" !== typeof QQ.ctx.resume && TQ.usingWebAudio) return "running" === QQ.state && "interrupted" !== QQ.ctx.state && QQ._suspendTimer ? (clearTimeout(QQ._suspendTimer), QQ._suspendTimer = null) : "suspended" === QQ.state || "running" === QQ.state && "interrupted" === QQ.ctx.state ? (QQ.ctx.resume().then((function() {
            QQ.state = "running";
            for (var WQ = 0; WQ < QQ._howls.length; WQ++) QQ._howls[WQ]._emit("resume")
          })), QQ._suspendTimer && (clearTimeout(QQ._suspendTimer), QQ._suspendTimer = null)) : "suspending" === QQ.state && (QQ._resumeAfterSuspend = !0), QQ
        }
      };
      var TQ = new qQ,
        zQ = function(QQ) {
          QQ.src && 0 !== QQ.src.length ? this.init(QQ) : console.error("An array of source files must be passed with any new Howl.")
        };
      zQ.prototype = {
        init: function(QQ) {
          var WQ = this;
          return TQ.ctx || IQ(), WQ._autoplay = QQ.autoplay || !1, WQ._format = "string" !== typeof QQ.format ? QQ.format : [QQ.format], WQ._html5 = QQ.html5 || !1, WQ._muted = QQ.mute || !1, WQ._loop = QQ.loop || !1, WQ._pool = QQ.pool || 5, WQ._preload = "boolean" !== typeof QQ.preload && "metadata" !== QQ.preload || QQ.preload, WQ._rate = QQ.rate || 1, WQ._sprite = QQ.sprite || {}, WQ._src = "string" !== typeof QQ.src ? QQ.src : [QQ.src], WQ._volume = void 0 !== QQ.volume ? QQ.volume : 1, WQ._xhr = {
            method: QQ.xhr && QQ.xhr.method ? QQ.xhr.method : "GET",
            headers: QQ.xhr && QQ.xhr.headers ? QQ.xhr.headers : null,
            withCredentials: !(!QQ.xhr || !QQ.xhr.withCredentials) && QQ.xhr.withCredentials
          }, WQ._duration = 0, WQ._state = "unloaded", WQ._sounds = [], WQ._endTimers = {}, WQ._queue = [], WQ._playLock = !1, WQ._onend = QQ.onend ? [{
            NI: QQ.onend
          }] : [], WQ._onfade = QQ.onfade ? [{
            NI: QQ.onfade
          }] : [], WQ._onload = QQ.onload ? [{
            NI: QQ.onload
          }] : [], WQ._onloaderror = QQ.onloaderror ? [{
            NI: QQ.onloaderror
          }] : [], WQ._onplayerror = QQ.onplayerror ? [{
            NI: QQ.onplayerror
          }] : [], WQ._onpause = QQ.onpause ? [{
            NI: QQ.onpause
          }] : [], WQ._onplay = QQ.onplay ? [{
            NI: QQ.onplay
          }] : [], WQ._onstop = QQ.onstop ? [{
            NI: QQ.onstop
          }] : [], WQ._onmute = QQ.onmute ? [{
            NI: QQ.onmute
          }] : [], WQ._onvolume = QQ.onvolume ? [{
            NI: QQ.onvolume
          }] : [], WQ._onrate = QQ.onrate ? [{
            NI: QQ.onrate
          }] : [], WQ._onseek = QQ.onseek ? [{
            NI: QQ.onseek
          }] : [], WQ._onunlock = QQ.onunlock ? [{
            NI: QQ.onunlock
          }] : [], WQ._onresume = [], WQ._webAudio = TQ.usingWebAudio && !WQ._html5, "undefined" !== typeof TQ.ctx && TQ.ctx && TQ.autoUnlock && TQ._unlockAudio(), TQ._howls.push(WQ), WQ._autoplay && WQ._queue.push({
            event: "play",
            action: function() {
              WQ.play()
            }
          }), WQ._preload && "none" !== WQ._preload && WQ.load(), WQ
        },
        load: function() {
          var QQ = this,
            WQ = null;
          if (TQ.noAudio) QQ._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof QQ._src && (QQ._src = [QQ._src]);
            for (var XQ = 0; XQ < QQ._src.length; XQ++) {
              var wQ, qQ;
              if (QQ._format && QQ._format[XQ]) wQ = QQ._format[XQ];
              else {
                if ("string" !== typeof(qQ = QQ._src[XQ])) {
                  QQ._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(wQ = /^data:audio\/([^;,]+);/i.exec(qQ)) || (wQ = /\.([^.]+)$/.exec(qQ.split("?", 1)[0])), wQ && (wQ = wQ[1].toLowerCase())
              }
              if (wQ || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), wQ && TQ.codecs(wQ)) {
                WQ = QQ._src[XQ];
                break
              }
            }
            if (WQ) return QQ._src = WQ, QQ._state = "loading", "https:" === window.location.protocol && "http:" === WQ.slice(0, 5) && (QQ._html5 = !0, QQ._webAudio = !1), new sQ(QQ), QQ._webAudio && PQ(QQ), QQ;
            QQ._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(QQ, WQ) {
          var XQ = this,
            wQ = null;
          if ("number" === typeof QQ) wQ = QQ, QQ = null;
          else {
            if ("string" === typeof QQ && "loaded" === XQ._state && !XQ._sprite[QQ]) return null;
            if ("undefined" === typeof QQ && (QQ = "__default", !XQ._playLock)) {
              for (var qQ = 0, zQ = 0; zQ < XQ._sounds.length; zQ++) XQ._sounds[zQ].lD && !XQ._sounds[zQ]._ended && (qQ++, wQ = XQ._sounds[zQ]._id);
              1 === qQ ? QQ = null : wQ = null
            }
          }
          var sQ = wQ ? XQ._soundById(wQ) : XQ._inactiveSound();
          if (!sQ) return null;
          if (wQ && !QQ && (QQ = sQ._sprite || "__default"), "loaded" !== XQ._state) {
            sQ._sprite = QQ, sQ._ended = !1;
            var FQ = sQ._id;
            return XQ._queue.push({
              event: "play",
              action: function() {
                XQ.play(FQ)
              }
            }), FQ
          }
          if (wQ && !sQ.lD) return WQ || XQ._loadQueue("play"), sQ._id;
          XQ._webAudio && TQ._autoResume();
          var PQ = Math.max(0, sQ._seek > 0 ? sQ._seek : XQ._sprite[QQ][0] / 1e3),
            gQ = Math.max(0, (XQ._sprite[QQ][0] + XQ._sprite[QQ][1]) / 1e3 - PQ),
            JQ = 1e3 * gQ / Math.abs(sQ._rate),
            rQ = XQ._sprite[QQ][0] / 1e3,
            IQ = (XQ._sprite[QQ][0] + XQ._sprite[QQ][1]) / 1e3;
          sQ._sprite = QQ, sQ._ended = !1;
          var jQ = function() {
            sQ.lD = !1, sQ._seek = PQ, sQ._start = rQ, sQ._stop = IQ, sQ._loop = !(!sQ._loop && !XQ._sprite[QQ][2])
          };
          if (!(PQ >= IQ)) {
            var BQ = sQ._node;
            if (XQ._webAudio) {
              var yQ = function() {
                XQ._playLock = !1, jQ(), XQ._refreshBuffer(sQ);
                var QQ = sQ._muted || XQ._muted ? 0 : sQ._volume;
                BQ.gain.setValueAtTime(QQ, TQ.ctx.currentTime), sQ._playStart = TQ.ctx.currentTime, "undefined" === typeof BQ.bufferSource.start ? sQ._loop ? BQ.bufferSource.noteGrainOn(0, PQ, 86400) : BQ.bufferSource.noteGrainOn(0, PQ, gQ) : sQ._loop ? BQ.bufferSource.start(0, PQ, 86400) : BQ.bufferSource.start(0, PQ, gQ), JQ !== 1 / 0 && (XQ._endTimers[sQ._id] = setTimeout(XQ._ended.bind(XQ, sQ), JQ)), WQ || setTimeout((function() {
                  XQ._emit("play", sQ._id), XQ._loadQueue()
                }), 0)
              };
              "running" === TQ.state && "interrupted" !== TQ.ctx.state ? yQ() : (XQ._playLock = !0, XQ.once("resume", yQ), XQ._clearTimer(sQ._id))
            } else {
              var VQ = function() {
                BQ.currentTime = PQ, BQ.muted = sQ._muted || XQ._muted || TQ._muted || BQ.muted, BQ.volume = sQ._volume * TQ.volume(), BQ.playbackRate = sQ._rate;
                try {
                  var wQ = BQ.play();
                  if (wQ && "undefined" !== typeof Promise && (wQ instanceof Promise || "function" === typeof wQ.then) ? (XQ._playLock = !0, jQ(), wQ.then((function() {
                      XQ._playLock = !1, BQ._unlocked = !0, WQ ? XQ._loadQueue() : XQ._emit("play", sQ._id)
                    })).catch((function() {
                      XQ._playLock = !1, XQ._emit("playerror", sQ._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), sQ._ended = !0, sQ.lD = !0
                    }))) : WQ || (XQ._playLock = !1, jQ(), XQ._emit("play", sQ._id)), BQ.playbackRate = sQ._rate, BQ.paused) return void XQ._emit("playerror", sQ._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== QQ || sQ._loop ? XQ._endTimers[sQ._id] = setTimeout(XQ._ended.bind(XQ, sQ), JQ) : (XQ._endTimers[sQ._id] = function() {
                    XQ._ended(sQ), BQ.removeEventListener("ended", XQ._endTimers[sQ._id], !1)
                  }, BQ.addEventListener("ended", XQ._endTimers[sQ._id], !1))
                } catch (qQ) {
                  XQ._emit("playerror", sQ._id, qQ)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === BQ.src && (BQ.src = XQ._src, BQ.load());
              var DQ = window && window.ejecta || !BQ.readyState && TQ._navigator.isCocoonJS;
              if (BQ.readyState >= 3 || DQ) VQ();
              else {
                XQ._playLock = !0, XQ._state = "loading";
                var pQ = function() {
                  XQ._state = "loaded", VQ(), BQ.removeEventListener(TQ._canPlayEvent, pQ, !1)
                };
                BQ.addEventListener(TQ._canPlayEvent, pQ, !1), XQ._clearTimer(sQ._id)
              }
            }
            return sQ._id
          }
          XQ._ended(sQ)
        },
        pause: function(QQ) {
          var WQ = this;
          if ("loaded" !== WQ._state || WQ._playLock) return WQ._queue.push({
            event: "pause",
            action: function() {
              WQ.pause(QQ)
            }
          }), WQ;
          for (var XQ = WQ._getSoundIds(QQ), wQ = 0; wQ < XQ.length; wQ++) {
            WQ._clearTimer(XQ[wQ]);
            var qQ = WQ._soundById(XQ[wQ]);
            if (qQ && !qQ.lD && (qQ._seek = WQ.seek(XQ[wQ]), qQ._rateSeek = 0, qQ.lD = !0, WQ._stopFade(XQ[wQ]), qQ._node))
              if (WQ._webAudio) {
                if (!qQ._node.bufferSource) continue;
                "undefined" === typeof qQ._node.bufferSource.stop ? qQ._node.bufferSource.noteOff(0) : qQ._node.bufferSource.stop(0), WQ._cleanBuffer(qQ._node)
              } else isNaN(qQ._node.duration) && qQ._node.duration !== 1 / 0 || qQ._node.pause();
            arguments[1] || WQ._emit("pause", qQ ? qQ._id : null)
          }
          return WQ
        },
        stop: function(QQ, WQ) {
          var XQ = this;
          if ("loaded" !== XQ._state || XQ._playLock) return XQ._queue.push({
            event: "stop",
            action: function() {
              XQ.stop(QQ)
            }
          }), XQ;
          for (var wQ = XQ._getSoundIds(QQ), qQ = 0; qQ < wQ.length; qQ++) {
            XQ._clearTimer(wQ[qQ]);
            var TQ = XQ._soundById(wQ[qQ]);
            TQ && (TQ._seek = TQ._start || 0, TQ._rateSeek = 0, TQ.lD = !0, TQ._ended = !0, XQ._stopFade(wQ[qQ]), TQ._node && (XQ._webAudio ? TQ._node.bufferSource && ("undefined" === typeof TQ._node.bufferSource.stop ? TQ._node.bufferSource.noteOff(0) : TQ._node.bufferSource.stop(0), XQ._cleanBuffer(TQ._node)) : isNaN(TQ._node.duration) && TQ._node.duration !== 1 / 0 || (TQ._node.currentTime = TQ._start || 0, TQ._node.pause(), TQ._node.duration === 1 / 0 && XQ._clearSound(TQ._node))), WQ || XQ._emit("stop", TQ._id))
          }
          return XQ
        },
        mute: function(QQ, WQ) {
          var XQ = this;
          if ("loaded" !== XQ._state || XQ._playLock) return XQ._queue.push({
            event: "mute",
            action: function() {
              XQ.mute(QQ, WQ)
            }
          }), XQ;
          if ("undefined" === typeof WQ) {
            if ("boolean" !== typeof QQ) return XQ._muted;
            XQ._muted = QQ
          }
          for (var wQ = XQ._getSoundIds(WQ), qQ = 0; qQ < wQ.length; qQ++) {
            var zQ = XQ._soundById(wQ[qQ]);
            zQ && (zQ._muted = QQ, zQ._interval && XQ._stopFade(zQ._id), XQ._webAudio && zQ._node ? zQ._node.gain.setValueAtTime(QQ ? 0 : zQ._volume, TQ.ctx.currentTime) : zQ._node && (zQ._node.muted = !!TQ._muted || QQ), XQ._emit("mute", zQ._id))
          }
          return XQ
        },
        volume: function() {
          var QQ, WQ, XQ, wQ = this,
            qQ = arguments;
          if (0 === qQ.length) return wQ._volume;
          if (1 === qQ.length || 2 === qQ.length && "undefined" === typeof qQ[1] ? wQ._getSoundIds().indexOf(qQ[0]) >= 0 ? WQ = parseInt(qQ[0], 10) : QQ = parseFloat(qQ[0]) : qQ.length >= 2 && (QQ = parseFloat(qQ[0]), WQ = parseInt(qQ[1], 10)), !("undefined" !== typeof QQ && QQ >= 0 && QQ <= 1)) return (XQ = WQ ? wQ._soundById(WQ) : wQ._sounds[0]) ? XQ._volume : 0;
          if ("loaded" !== wQ._state || wQ._playLock) return wQ._queue.push({
            event: "volume",
            action: function() {
              wQ.volume.apply(wQ, qQ)
            }
          }), wQ;
          "undefined" === typeof WQ && (wQ._volume = QQ), WQ = wQ._getSoundIds(WQ);
          for (var zQ = 0; zQ < WQ.length; zQ++)(XQ = wQ._soundById(WQ[zQ])) && (XQ._volume = QQ, qQ[2] || wQ._stopFade(WQ[zQ]), wQ._webAudio && XQ._node && !XQ._muted ? XQ._node.gain.setValueAtTime(QQ, TQ.ctx.currentTime) : XQ._node && !XQ._muted && (XQ._node.volume = QQ * TQ.volume()), wQ._emit("volume", XQ._id));
          return wQ
        },
        fade: function(QQ, WQ, XQ, wQ) {
          var qQ = this;
          if ("loaded" !== qQ._state || qQ._playLock) return qQ._queue.push({
            event: "fade",
            action: function() {
              qQ.fade(QQ, WQ, XQ, wQ)
            }
          }), qQ;
          QQ = Math.min(Math.max(0, parseFloat(QQ)), 1), WQ = Math.min(Math.max(0, parseFloat(WQ)), 1), XQ = parseFloat(XQ), qQ.volume(QQ, wQ);
          for (var zQ = qQ._getSoundIds(wQ), sQ = 0; sQ < zQ.length; sQ++) {
            var FQ = qQ._soundById(zQ[sQ]);
            if (FQ) {
              if (wQ || qQ._stopFade(zQ[sQ]), qQ._webAudio && !FQ._muted) {
                var PQ = TQ.ctx.currentTime,
                  gQ = PQ + XQ / 1e3;
                FQ._volume = QQ, FQ._node.gain.setValueAtTime(QQ, PQ), FQ._node.gain.linearRampToValueAtTime(WQ, gQ)
              }
              qQ._startFadeInterval(FQ, QQ, WQ, XQ, zQ[sQ], "undefined" === typeof wQ)
            }
          }
          return qQ
        },
        _startFadeInterval: function(QQ, WQ, XQ, wQ, qQ, TQ) {
          var zQ = this,
            sQ = WQ,
            FQ = XQ - WQ,
            PQ = Math.abs(FQ / .01),
            gQ = Math.max(4, PQ > 0 ? wQ / PQ : wQ),
            JQ = Date.now();
          QQ._fadeTo = XQ, QQ._interval = setInterval((function() {
            var qQ = (Date.now() - JQ) / wQ;
            JQ = Date.now(), sQ += FQ * qQ, sQ = Math.round(100 * sQ) / 100, sQ = FQ < 0 ? Math.max(XQ, sQ) : Math.min(XQ, sQ), zQ._webAudio ? QQ._volume = sQ : zQ.volume(sQ, QQ._id, !0), TQ && (zQ._volume = sQ), (XQ < WQ && sQ <= XQ || XQ > WQ && sQ >= XQ) && (clearInterval(QQ._interval), QQ._interval = null, QQ._fadeTo = null, zQ.volume(XQ, QQ._id), zQ._emit("fade", QQ._id))
          }), gQ)
        },
        _stopFade: function(QQ) {
          var WQ = this,
            XQ = WQ._soundById(QQ);
          return XQ && XQ._interval && (WQ._webAudio && XQ._node.gain.cancelScheduledValues(TQ.ctx.currentTime), clearInterval(XQ._interval), XQ._interval = null, WQ.volume(XQ._fadeTo, QQ), XQ._fadeTo = null, WQ._emit("fade", QQ)), WQ
        },
        loop: function() {
          var QQ, WQ, XQ, wQ = this,
            qQ = arguments;
          if (0 === qQ.length) return wQ._loop;
          if (1 === qQ.length) {
            if ("boolean" !== typeof qQ[0]) return !!(XQ = wQ._soundById(parseInt(qQ[0], 10))) && XQ._loop;
            QQ = qQ[0], wQ._loop = QQ
          } else 2 === qQ.length && (QQ = qQ[0], WQ = parseInt(qQ[1], 10));
          for (var TQ = wQ._getSoundIds(WQ), zQ = 0; zQ < TQ.length; zQ++)(XQ = wQ._soundById(TQ[zQ])) && (XQ._loop = QQ, wQ._webAudio && XQ._node && XQ._node.bufferSource && (XQ._node.bufferSource.loop = QQ, QQ && (XQ._node.bufferSource.loopStart = XQ._start || 0, XQ._node.bufferSource.loopEnd = XQ._stop, wQ.playing(TQ[zQ]) && (wQ.pause(TQ[zQ], !0), wQ.play(TQ[zQ], !0)))));
          return wQ
        },
        rate: function() {
          var QQ, WQ, XQ, wQ = this,
            qQ = arguments;
          if (0 === qQ.length) WQ = wQ._sounds[0]._id;
          else if (1 === qQ.length) {
            wQ._getSoundIds().indexOf(qQ[0]) >= 0 ? WQ = parseInt(qQ[0], 10) : QQ = parseFloat(qQ[0])
          } else 2 === qQ.length && (QQ = parseFloat(qQ[0]), WQ = parseInt(qQ[1], 10));
          if ("number" !== typeof QQ) return (XQ = wQ._soundById(WQ)) ? XQ._rate : wQ._rate;
          if ("loaded" !== wQ._state || wQ._playLock) return wQ._queue.push({
            event: "rate",
            action: function() {
              wQ.rate.apply(wQ, qQ)
            }
          }), wQ;
          "undefined" === typeof WQ && (wQ._rate = QQ), WQ = wQ._getSoundIds(WQ);
          for (var zQ = 0; zQ < WQ.length; zQ++)
            if (XQ = wQ._soundById(WQ[zQ])) {
              wQ.playing(WQ[zQ]) && (XQ._rateSeek = wQ.seek(WQ[zQ]), XQ._playStart = wQ._webAudio ? TQ.ctx.currentTime : XQ._playStart), XQ._rate = QQ, wQ._webAudio && XQ._node && XQ._node.bufferSource ? XQ._node.bufferSource.playbackRate.setValueAtTime(QQ, TQ.ctx.currentTime) : XQ._node && (XQ._node.playbackRate = QQ);
              var sQ = wQ.seek(WQ[zQ]),
                FQ = 1e3 * ((wQ._sprite[XQ._sprite][0] + wQ._sprite[XQ._sprite][1]) / 1e3 - sQ) / Math.abs(XQ._rate);
              !wQ._endTimers[WQ[zQ]] && XQ.lD || (wQ._clearTimer(WQ[zQ]), wQ._endTimers[WQ[zQ]] = setTimeout(wQ._ended.bind(wQ, XQ), FQ)), wQ._emit("rate", XQ._id)
            } return wQ
        },
        seek: function() {
          var QQ, WQ, XQ = this,
            wQ = arguments;
          if (0 === wQ.length) XQ._sounds.length && (WQ = XQ._sounds[0]._id);
          else if (1 === wQ.length) {
            XQ._getSoundIds().indexOf(wQ[0]) >= 0 ? WQ = parseInt(wQ[0], 10) : XQ._sounds.length && (WQ = XQ._sounds[0]._id, QQ = parseFloat(wQ[0]))
          } else 2 === wQ.length && (QQ = parseFloat(wQ[0]), WQ = parseInt(wQ[1], 10));
          if ("undefined" === typeof WQ) return 0;
          if ("number" === typeof QQ && ("loaded" !== XQ._state || XQ._playLock)) return XQ._queue.push({
            event: "seek",
            action: function() {
              XQ.seek.apply(XQ, wQ)
            }
          }), XQ;
          var qQ = XQ._soundById(WQ);
          if (qQ) {
            if (!("number" === typeof QQ && QQ >= 0)) {
              if (XQ._webAudio) {
                var zQ = XQ.playing(WQ) ? TQ.ctx.currentTime - qQ._playStart : 0,
                  sQ = qQ._rateSeek ? qQ._rateSeek - qQ._seek : 0;
                return qQ._seek + (sQ + zQ * Math.abs(qQ._rate))
              }
              return qQ._node.currentTime
            }
            var FQ = XQ.playing(WQ);
            FQ && XQ.pause(WQ, !0), qQ._seek = QQ, qQ._ended = !1, XQ._clearTimer(WQ), XQ._webAudio || !qQ._node || isNaN(qQ._node.duration) || (qQ._node.currentTime = QQ);
            var PQ = function() {
              FQ && XQ.play(WQ, !0), XQ._emit("seek", WQ)
            };
            if (FQ && !XQ._webAudio) {
              var gQ = function() {
                XQ._playLock ? setTimeout(gQ, 0) : PQ()
              };
              setTimeout(gQ, 0)
            } else PQ()
          }
          return XQ
        },
        playing: function(QQ) {
          var WQ = this;
          if ("number" === typeof QQ) {
            var XQ = WQ._soundById(QQ);
            return !!XQ && !XQ.lD
          }
          for (var wQ = 0; wQ < WQ._sounds.length; wQ++)
            if (!WQ._sounds[wQ].lD) return !0;
          return !1
        },
        duration: function(QQ) {
          var WQ = this,
            XQ = WQ._duration,
            wQ = WQ._soundById(QQ);
          return wQ && (XQ = WQ._sprite[wQ._sprite][1] / 1e3), XQ
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var QQ = this, WQ = QQ._sounds, XQ = 0; XQ < WQ.length; XQ++) WQ[XQ].lD || QQ.stop(WQ[XQ]._id), QQ._webAudio || (QQ._clearSound(WQ[XQ]._node), WQ[XQ]._node.removeEventListener("error", WQ[XQ]._errorFn, !1), WQ[XQ]._node.removeEventListener(TQ._canPlayEvent, WQ[XQ]._loadFn, !1), WQ[XQ]._node.removeEventListener("ended", WQ[XQ]._endFn, !1), TQ._releaseHtml5Audio(WQ[XQ]._node)), delete WQ[XQ]._node, QQ._clearTimer(WQ[XQ]._id);
          var wQ = TQ._howls.indexOf(QQ);
          wQ >= 0 && TQ._howls.splice(wQ, 1);
          var qQ = !0;
          for (XQ = 0; XQ < TQ._howls.length; XQ++)
            if (TQ._howls[XQ]._src === QQ._src || QQ._src.indexOf(TQ._howls[XQ]._src) >= 0) {
              qQ = !1;
              break
            } return FQ && qQ && delete FQ[QQ._src], TQ.noAudio = !1, QQ._state = "unloaded", QQ._sounds = [], QQ = null, null
        },
        on: function(QQ, WQ, XQ, wQ) {
          var qQ = this["_on" + QQ];
          return "function" === typeof WQ && qQ.push(wQ ? {
            id: XQ,
            NI: WQ,
            once: wQ
          } : {
            id: XQ,
            NI: WQ
          }), this
        },
        off: function(QQ, WQ, XQ) {
          var wQ = this,
            qQ = wQ["_on" + QQ],
            TQ = 0;
          if ("number" === typeof WQ && (XQ = WQ, WQ = null), WQ || XQ)
            for (TQ = 0; TQ < qQ.length; TQ++) {
              var zQ = XQ === qQ[TQ].id;
              if (WQ === qQ[TQ].NI && zQ || !WQ && zQ) {
                qQ.splice(TQ, 1);
                break
              }
            } else if (QQ) wQ["_on" + QQ] = [];
            else {
              var sQ = Object.keys(wQ);
              for (TQ = 0; TQ < sQ.length; TQ++) 0 === sQ[TQ].indexOf("_on") && Array.isArray(wQ[sQ[TQ]]) && (wQ[sQ[TQ]] = [])
            } return wQ
        },
        once: function(QQ, WQ, XQ) {
          return this.on(QQ, WQ, XQ, 1), this
        },
        _emit: function(QQ, WQ, XQ) {
          for (var wQ = this, qQ = wQ["_on" + QQ], TQ = qQ.length - 1; TQ >= 0; TQ--) qQ[TQ].id && qQ[TQ].id !== WQ && "load" !== QQ || (setTimeout(function(QQ) {
            QQ.call(this, WQ, XQ)
          }.bind(wQ, qQ[TQ].NI), 0), qQ[TQ].once && wQ.off(QQ, qQ[TQ].NI, qQ[TQ].id));
          return wQ._loadQueue(QQ), wQ
        },
        _loadQueue: function(QQ) {
          var WQ = this;
          if (WQ._queue.length > 0) {
            var XQ = WQ._queue[0];
            XQ.event === QQ && (WQ._queue.shift(), WQ._loadQueue()), QQ || XQ.action()
          }
          return WQ
        },
        _ended: function(QQ) {
          var WQ = this,
            XQ = QQ._sprite;
          if (!WQ._webAudio && QQ._node && !QQ._node.paused && !QQ._node.ended && QQ._node.currentTime < QQ._stop) return setTimeout(WQ._ended.bind(WQ, QQ), 100), WQ;
          var wQ = !(!QQ._loop && !WQ._sprite[XQ][2]);
          if (WQ._emit("end", QQ._id), !WQ._webAudio && wQ && WQ.stop(QQ._id, !0).play(QQ._id), WQ._webAudio && wQ) {
            WQ._emit("play", QQ._id), QQ._seek = QQ._start || 0, QQ._rateSeek = 0, QQ._playStart = TQ.ctx.currentTime;
            var qQ = 1e3 * (QQ._stop - QQ._start) / Math.abs(QQ._rate);
            WQ._endTimers[QQ._id] = setTimeout(WQ._ended.bind(WQ, QQ), qQ)
          }
          return WQ._webAudio && !wQ && (QQ.lD = !0, QQ._ended = !0, QQ._seek = QQ._start || 0, QQ._rateSeek = 0, WQ._clearTimer(QQ._id), WQ._cleanBuffer(QQ._node), TQ._autoSuspend()), WQ._webAudio || wQ || WQ.stop(QQ._id, !0), WQ
        },
        _clearTimer: function(QQ) {
          var WQ = this;
          if (WQ._endTimers[QQ]) {
            if ("function" !== typeof WQ._endTimers[QQ]) clearTimeout(WQ._endTimers[QQ]);
            else {
              var XQ = WQ._soundById(QQ);
              XQ && XQ._node && XQ._node.removeEventListener("ended", WQ._endTimers[QQ], !1)
            }
            delete WQ._endTimers[QQ]
          }
          return WQ
        },
        _soundById: function(QQ) {
          for (var WQ = this, XQ = 0; XQ < WQ._sounds.length; XQ++)
            if (QQ === WQ._sounds[XQ]._id) return WQ._sounds[XQ];
          return null
        },
        _inactiveSound: function() {
          var QQ = this;
          QQ._drain();
          for (var WQ = 0; WQ < QQ._sounds.length; WQ++)
            if (QQ._sounds[WQ]._ended) return QQ._sounds[WQ].reset();
          return new sQ(QQ)
        },
        _drain: function() {
          var QQ = this,
            WQ = QQ._pool,
            XQ = 0,
            wQ = 0;
          if (!(QQ._sounds.length < WQ)) {
            for (wQ = 0; wQ < QQ._sounds.length; wQ++) QQ._sounds[wQ]._ended && XQ++;
            for (wQ = QQ._sounds.length - 1; wQ >= 0; wQ--) {
              if (XQ <= WQ) return;
              QQ._sounds[wQ]._ended && (QQ._webAudio && QQ._sounds[wQ]._node && QQ._sounds[wQ]._node.disconnect(0), QQ._sounds.splice(wQ, 1), XQ--)
            }
          }
        },
        _getSoundIds: function(QQ) {
          if ("undefined" === typeof QQ) {
            for (var WQ = [], XQ = 0; XQ < this._sounds.length; XQ++) WQ.push(this._sounds[XQ]._id);
            return WQ
          }
          return [QQ]
        },
        _refreshBuffer: function(QQ) {
          return QQ._node.bufferSource = TQ.ctx.createBufferSource(), QQ._node.bufferSource.buffer = FQ[this._src], QQ._panner ? QQ._node.bufferSource.connect(QQ._panner) : QQ._node.bufferSource.connect(QQ._node), QQ._node.bufferSource.loop = QQ._loop, QQ._loop && (QQ._node.bufferSource.loopStart = QQ._start || 0, QQ._node.bufferSource.loopEnd = QQ._stop || 0), QQ._node.bufferSource.playbackRate.setValueAtTime(QQ._rate, TQ.ctx.currentTime), this
        },
        _cleanBuffer: function(QQ) {
          var WQ = TQ._navigator && TQ._navigator.vendor.indexOf("Apple") >= 0;
          if (TQ._scratchBuffer && QQ.bufferSource && (QQ.bufferSource.onended = null, QQ.bufferSource.disconnect(0), WQ)) try {
            QQ.bufferSource.buffer = TQ._scratchBuffer
          } catch (XQ) {}
          return QQ.bufferSource = null, this
        },
        _clearSound: function(QQ) {
          /MSIE |Trident\//.test(TQ._navigator && TQ._navigator.userAgent) || (QQ.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var sQ = function(QQ) {
        this._parent = QQ, this.init()
      };
      sQ.prototype = {
        init: function() {
          var QQ = this,
            WQ = QQ._parent;
          return QQ._muted = WQ._muted, QQ._loop = WQ._loop, QQ._volume = WQ._volume, QQ._rate = WQ._rate, QQ._seek = 0, QQ.lD = !0, QQ._ended = !0, QQ._sprite = "__default", QQ._id = ++TQ._counter, WQ._sounds.push(QQ), QQ.create(), QQ
        },
        create: function() {
          var QQ = this,
            WQ = QQ._parent,
            XQ = TQ._muted || QQ._muted || QQ._parent._muted ? 0 : QQ._volume;
          return WQ._webAudio ? (QQ._node = "undefined" === typeof TQ.ctx.createGain ? TQ.ctx.createGainNode() : TQ.ctx.createGain(), QQ._node.gain.setValueAtTime(XQ, TQ.ctx.currentTime), QQ._node.paused = !0, QQ._node.connect(TQ.masterGain)) : TQ.noAudio || (QQ._node = TQ._obtainHtml5Audio(), QQ._errorFn = QQ._errorListener.bind(QQ), QQ._node.addEventListener("error", QQ._errorFn, !1), QQ._loadFn = QQ._loadListener.bind(QQ), QQ._node.addEventListener(TQ._canPlayEvent, QQ._loadFn, !1), QQ._endFn = QQ._endListener.bind(QQ), QQ._node.addEventListener("ended", QQ._endFn, !1), QQ._node.src = WQ._src, QQ._node.preload = !0 === WQ._preload ? "auto" : WQ._preload, QQ._node.volume = XQ * TQ.volume(), QQ._node.load()), QQ
        },
        reset: function() {
          var QQ = this,
            WQ = QQ._parent;
          return QQ._muted = WQ._muted, QQ._loop = WQ._loop, QQ._volume = WQ._volume, QQ._rate = WQ._rate, QQ._seek = 0, QQ._rateSeek = 0, QQ.lD = !0, QQ._ended = !0, QQ._sprite = "__default", QQ._id = ++TQ._counter, QQ
        },
        _errorListener: function() {
          var QQ = this;
          QQ._parent._emit("loaderror", QQ._id, QQ._node.error ? QQ._node.error.code : 0), QQ._node.removeEventListener("error", QQ._errorFn, !1)
        },
        _loadListener: function() {
          var QQ = this,
            WQ = QQ._parent;
          WQ._duration = Math.ceil(10 * QQ._node.duration) / 10, 0 === Object.keys(WQ._sprite).length && (WQ._sprite = {
            __default: [0, 1e3 * WQ._duration]
          }), "loaded" !== WQ._state && (WQ._state = "loaded", WQ._emit("load"), WQ._loadQueue()), QQ._node.removeEventListener(TQ._canPlayEvent, QQ._loadFn, !1)
        },
        _endListener: function() {
          var QQ = this,
            WQ = QQ._parent;
          WQ._duration === 1 / 0 && (WQ._duration = Math.ceil(10 * QQ._node.duration) / 10, WQ._sprite.__default[1] === 1 / 0 && (WQ._sprite.__default[1] = 1e3 * WQ._duration), WQ._ended(QQ)), QQ._node.removeEventListener("ended", QQ._endFn, !1)
        }
      };
      var FQ = {},
        PQ = function(QQ) {
          var WQ = QQ._src;
          if (FQ[WQ]) return QQ._duration = FQ[WQ].duration, void rQ(QQ);
          if (/^data:[^;]+;base64,/.test(WQ)) {
            for (var XQ = atob(WQ.split(",")[1]), wQ = new Uint8Array(XQ.length), qQ = 0; qQ < XQ.length; ++qQ) wQ[qQ] = XQ.charCodeAt(qQ);
            JQ(wQ.buffer, QQ)
          } else {
            var TQ = new XMLHttpRequest;
            TQ.open(QQ._xhr.method, WQ, !0), TQ.withCredentials = QQ._xhr.withCredentials, TQ.responseType = "arraybuffer", QQ._xhr.headers && Object.keys(QQ._xhr.headers).forEach((function(WQ) {
              TQ.setRequestHeader(WQ, QQ._xhr.headers[WQ])
            })), TQ.onload = function() {
              var WQ = (TQ.status + "")[0];
              "0" === WQ || "2" === WQ || "3" === WQ ? JQ(TQ.response, QQ) : QQ._emit("loaderror", null, "Failed loading audio file with status: " + TQ.status + ".")
            }, TQ.onerror = function() {
              QQ._webAudio && (QQ._html5 = !0, QQ._webAudio = !1, QQ._sounds = [], delete FQ[WQ], QQ.load())
            }, gQ(TQ)
          }
        },
        gQ = function(QQ) {
          try {
            QQ.send()
          } catch (WQ) {
            QQ.onerror()
          }
        },
        JQ = function(QQ, WQ) {
          var XQ = function() {
              WQ._emit("loaderror", null, "Decoding audio data failed.")
            },
            wQ = function(QQ) {
              QQ && WQ._sounds.length > 0 ? (FQ[WQ._src] = QQ, rQ(WQ, QQ)) : XQ()
            };
          "undefined" !== typeof Promise && 1 === TQ.ctx.decodeAudioData.length ? TQ.ctx.decodeAudioData(QQ).then(wQ).catch(XQ) : TQ.ctx.decodeAudioData(QQ, wQ, XQ)
        },
        rQ = function(QQ, WQ) {
          WQ && !QQ._duration && (QQ._duration = WQ.duration), 0 === Object.keys(QQ._sprite).length && (QQ._sprite = {
            __default: [0, 1e3 * QQ._duration]
          }), "loaded" !== QQ._state && (QQ._state = "loaded", QQ._emit("load"), QQ._loadQueue())
        },
        IQ = function() {
          if (TQ.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? TQ.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? TQ.ctx = new webkitAudioContext : TQ.usingWebAudio = !1
            } catch (qQ) {
              TQ.usingWebAudio = !1
            }
            TQ.ctx || (TQ.usingWebAudio = !1);
            var QQ = /iP(hone|od|ad)/.test(TQ._navigator && TQ._navigator.platform),
              WQ = TQ._navigator && TQ._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              XQ = WQ ? parseInt(WQ[1], 10) : null;
            if (QQ && XQ && XQ < 9) {
              var wQ = /safari/.test(TQ._navigator && TQ._navigator.userAgent.toLowerCase());
              TQ._navigator && !wQ && (TQ.usingWebAudio = !1)
            }
            TQ.usingWebAudio && (TQ.masterGain = "undefined" === typeof TQ.ctx.createGain ? TQ.ctx.createGainNode() : TQ.ctx.createGain(), TQ.masterGain.gain.setValueAtTime(TQ._muted ? 0 : TQ._volume, TQ.ctx.currentTime), TQ.masterGain.connect(TQ.ctx.destination)), TQ._setup()
          }
        };
      void 0 === (wQ = function() {
        return {
          Howler: TQ,
          Howl: zQ
        }
      }.apply(WQ, [])) || (QQ.exports = wQ), WQ.Howler = TQ, WQ.Howl = zQ, "undefined" !== typeof XQ.g ? (XQ.g.HowlerGlobal = qQ, XQ.g.Howler = TQ, XQ.g.Howl = zQ, XQ.g.Sound = sQ) : "undefined" !== typeof window && (window.HowlerGlobal = qQ, window.Howler = TQ, window.Howl = zQ, window.Sound = sQ)
    }(),
    function() {
      var QQ;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(QQ) {
        var WQ = this;
        if (!WQ.ctx || !WQ.ctx.listener) return WQ;
        for (var XQ = WQ._howls.length - 1; XQ >= 0; XQ--) WQ._howls[XQ].stereo(QQ);
        return WQ
      }, HowlerGlobal.prototype.pos = function(QQ, WQ, XQ) {
        var wQ = this;
        return wQ.ctx && wQ.ctx.listener ? (WQ = "number" !== typeof WQ ? wQ._pos[1] : WQ, XQ = "number" !== typeof XQ ? wQ._pos[2] : XQ, "number" !== typeof QQ ? wQ._pos : (wQ._pos = [QQ, WQ, XQ], "undefined" !== typeof wQ.ctx.listener.positionX ? (wQ.ctx.listener.positionX.setTargetAtTime(wQ._pos[0], Howler.ctx.currentTime, .1), wQ.ctx.listener.positionY.setTargetAtTime(wQ._pos[1], Howler.ctx.currentTime, .1), wQ.ctx.listener.positionZ.setTargetAtTime(wQ._pos[2], Howler.ctx.currentTime, .1)) : wQ.ctx.listener.setPosition(wQ._pos[0], wQ._pos[1], wQ._pos[2]), wQ)) : wQ
      }, HowlerGlobal.prototype.orientation = function(QQ, WQ, XQ, wQ, qQ, TQ) {
        var zQ = this;
        if (!zQ.ctx || !zQ.ctx.listener) return zQ;
        var sQ = zQ._orientation;
        return WQ = "number" !== typeof WQ ? sQ[1] : WQ, XQ = "number" !== typeof XQ ? sQ[2] : XQ, wQ = "number" !== typeof wQ ? sQ[3] : wQ, qQ = "number" !== typeof qQ ? sQ[4] : qQ, TQ = "number" !== typeof TQ ? sQ[5] : TQ, "number" !== typeof QQ ? sQ : (zQ._orientation = [QQ, WQ, XQ, wQ, qQ, TQ], "undefined" !== typeof zQ.ctx.listener.forwardX ? (zQ.ctx.listener.forwardX.setTargetAtTime(QQ, Howler.ctx.currentTime, .1), zQ.ctx.listener.forwardY.setTargetAtTime(WQ, Howler.ctx.currentTime, .1), zQ.ctx.listener.forwardZ.setTargetAtTime(XQ, Howler.ctx.currentTime, .1), zQ.ctx.listener.upX.setTargetAtTime(wQ, Howler.ctx.currentTime, .1), zQ.ctx.listener.upY.setTargetAtTime(qQ, Howler.ctx.currentTime, .1), zQ.ctx.listener.upZ.setTargetAtTime(TQ, Howler.ctx.currentTime, .1)) : zQ.ctx.listener.setOrientation(QQ, WQ, XQ, wQ, qQ, TQ), zQ)
      }, Howl.prototype.init = (QQ = Howl.prototype.init, function(WQ) {
        var XQ = this;
        return XQ._orientation = WQ.orientation || [1, 0, 0], XQ._stereo = WQ.stereo || null, XQ._pos = WQ.pos || null, XQ._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof WQ.coneInnerAngle ? WQ.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof WQ.coneOuterAngle ? WQ.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof WQ.coneOuterGain ? WQ.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof WQ.distanceModel ? WQ.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof WQ.maxDistance ? WQ.maxDistance : 1e4,
          panningModel: "undefined" !== typeof WQ.panningModel ? WQ.panningModel : "HRTF",
          refDistance: "undefined" !== typeof WQ.refDistance ? WQ.refDistance : 1,
          rolloffFactor: "undefined" !== typeof WQ.rolloffFactor ? WQ.rolloffFactor : 1
        }, XQ._onstereo = WQ.onstereo ? [{
          NI: WQ.onstereo
        }] : [], XQ._onpos = WQ.onpos ? [{
          NI: WQ.onpos
        }] : [], XQ._onorientation = WQ.onorientation ? [{
          NI: WQ.onorientation
        }] : [], QQ.call(this, WQ)
      }), Howl.prototype.stereo = function(QQ, XQ) {
        var wQ = this;
        if (!wQ._webAudio) return wQ;
        if ("loaded" !== wQ._state) return wQ._queue.push({
          event: "stereo",
          action: function() {
            wQ.stereo(QQ, XQ)
          }
        }), wQ;
        var qQ = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof XQ) {
          if ("number" !== typeof QQ) return wQ._stereo;
          wQ._stereo = QQ, wQ._pos = [QQ, 0, 0]
        }
        for (var TQ = wQ._getSoundIds(XQ), zQ = 0; zQ < TQ.length; zQ++) {
          var sQ = wQ._soundById(TQ[zQ]);
          if (sQ) {
            if ("number" !== typeof QQ) return sQ._stereo;
            sQ._stereo = QQ, sQ._pos = [QQ, 0, 0], sQ._node && (sQ._pannerAttr.panningModel = "equalpower", sQ._panner && sQ._panner.pan || WQ(sQ, qQ), "spatial" === qQ ? "undefined" !== typeof sQ._panner.positionX ? (sQ._panner.positionX.setValueAtTime(QQ, Howler.ctx.currentTime), sQ._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), sQ._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : sQ._panner.setPosition(QQ, 0, 0) : sQ._panner.pan.setValueAtTime(QQ, Howler.ctx.currentTime)), wQ._emit("stereo", sQ._id)
          }
        }
        return wQ
      }, Howl.prototype.pos = function(QQ, XQ, wQ, qQ) {
        var TQ = this;
        if (!TQ._webAudio) return TQ;
        if ("loaded" !== TQ._state) return TQ._queue.push({
          event: "pos",
          action: function() {
            TQ.pos(QQ, XQ, wQ, qQ)
          }
        }), TQ;
        if (XQ = "number" !== typeof XQ ? 0 : XQ, wQ = "number" !== typeof wQ ? -.5 : wQ, "undefined" === typeof qQ) {
          if ("number" !== typeof QQ) return TQ._pos;
          TQ._pos = [QQ, XQ, wQ]
        }
        for (var zQ = TQ._getSoundIds(qQ), sQ = 0; sQ < zQ.length; sQ++) {
          var FQ = TQ._soundById(zQ[sQ]);
          if (FQ) {
            if ("number" !== typeof QQ) return FQ._pos;
            FQ._pos = [QQ, XQ, wQ], FQ._node && (FQ._panner && !FQ._panner.pan || WQ(FQ, "spatial"), "undefined" !== typeof FQ._panner.positionX ? (FQ._panner.positionX.setValueAtTime(QQ, Howler.ctx.currentTime), FQ._panner.positionY.setValueAtTime(XQ, Howler.ctx.currentTime), FQ._panner.positionZ.setValueAtTime(wQ, Howler.ctx.currentTime)) : FQ._panner.setPosition(QQ, XQ, wQ)), TQ._emit("pos", FQ._id)
          }
        }
        return TQ
      }, Howl.prototype.orientation = function(QQ, XQ, wQ, qQ) {
        var TQ = this;
        if (!TQ._webAudio) return TQ;
        if ("loaded" !== TQ._state) return TQ._queue.push({
          event: "orientation",
          action: function() {
            TQ.orientation(QQ, XQ, wQ, qQ)
          }
        }), TQ;
        if (XQ = "number" !== typeof XQ ? TQ._orientation[1] : XQ, wQ = "number" !== typeof wQ ? TQ._orientation[2] : wQ, "undefined" === typeof qQ) {
          if ("number" !== typeof QQ) return TQ._orientation;
          TQ._orientation = [QQ, XQ, wQ]
        }
        for (var zQ = TQ._getSoundIds(qQ), sQ = 0; sQ < zQ.length; sQ++) {
          var FQ = TQ._soundById(zQ[sQ]);
          if (FQ) {
            if ("number" !== typeof QQ) return FQ._orientation;
            FQ._orientation = [QQ, XQ, wQ], FQ._node && (FQ._panner || (FQ._pos || (FQ._pos = TQ._pos || [0, 0, -.5]), WQ(FQ, "spatial")), "undefined" !== typeof FQ._panner.orientationX ? (FQ._panner.orientationX.setValueAtTime(QQ, Howler.ctx.currentTime), FQ._panner.orientationY.setValueAtTime(XQ, Howler.ctx.currentTime), FQ._panner.orientationZ.setValueAtTime(wQ, Howler.ctx.currentTime)) : FQ._panner.setOrientation(QQ, XQ, wQ)), TQ._emit("orientation", FQ._id)
          }
        }
        return TQ
      }, Howl.prototype.pannerAttr = function() {
        var QQ, XQ, wQ, qQ = this,
          TQ = arguments;
        if (!qQ._webAudio) return qQ;
        if (0 === TQ.length) return qQ._pannerAttr;
        if (1 === TQ.length) {
          if ("object" !== typeof TQ[0]) return (wQ = qQ._soundById(parseInt(TQ[0], 10))) ? wQ._pannerAttr : qQ._pannerAttr;
          QQ = TQ[0], "undefined" === typeof XQ && (QQ.pannerAttr || (QQ.pannerAttr = {
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
        } else 2 === TQ.length && (QQ = TQ[0], XQ = parseInt(TQ[1], 10));
        for (var zQ = qQ._getSoundIds(XQ), sQ = 0; sQ < zQ.length; sQ++)
          if (wQ = qQ._soundById(zQ[sQ])) {
            var FQ = wQ._pannerAttr;
            FQ = {
              coneInnerAngle: "undefined" !== typeof QQ.coneInnerAngle ? QQ.coneInnerAngle : FQ.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof QQ.coneOuterAngle ? QQ.coneOuterAngle : FQ.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof QQ.coneOuterGain ? QQ.coneOuterGain : FQ.coneOuterGain,
              distanceModel: "undefined" !== typeof QQ.distanceModel ? QQ.distanceModel : FQ.distanceModel,
              maxDistance: "undefined" !== typeof QQ.maxDistance ? QQ.maxDistance : FQ.maxDistance,
              refDistance: "undefined" !== typeof QQ.refDistance ? QQ.refDistance : FQ.refDistance,
              rolloffFactor: "undefined" !== typeof QQ.rolloffFactor ? QQ.rolloffFactor : FQ.rolloffFactor,
              panningModel: "undefined" !== typeof QQ.panningModel ? QQ.panningModel : FQ.panningModel
            };
            var PQ = wQ._panner;
            PQ ? (PQ.coneInnerAngle = FQ.coneInnerAngle, PQ.coneOuterAngle = FQ.coneOuterAngle, PQ.coneOuterGain = FQ.coneOuterGain, PQ.distanceModel = FQ.distanceModel, PQ.maxDistance = FQ.maxDistance, PQ.refDistance = FQ.refDistance, PQ.rolloffFactor = FQ.rolloffFactor, PQ.panningModel = FQ.panningModel) : (wQ._pos || (wQ._pos = qQ._pos || [0, 0, -.5]), WQ(wQ, "spatial"))
          } return qQ
      }, Sound.prototype.init = function(QQ) {
        return function() {
          var WQ = this,
            XQ = WQ._parent;
          WQ._orientation = XQ._orientation, WQ._stereo = XQ._stereo, WQ._pos = XQ._pos, WQ._pannerAttr = XQ._pannerAttr, QQ.call(this), WQ._stereo ? XQ.stereo(WQ._stereo) : WQ._pos && XQ.pos(WQ._pos[0], WQ._pos[1], WQ._pos[2], WQ._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(QQ) {
        return function() {
          var WQ = this,
            XQ = WQ._parent;
          return WQ._orientation = XQ._orientation, WQ._stereo = XQ._stereo, WQ._pos = XQ._pos, WQ._pannerAttr = XQ._pannerAttr, WQ._stereo ? XQ.stereo(WQ._stereo) : WQ._pos ? XQ.pos(WQ._pos[0], WQ._pos[1], WQ._pos[2], WQ._id) : WQ._panner && (WQ._panner.disconnect(0), WQ._panner = void 0, XQ._refreshBuffer(WQ)), QQ.call(this)
        }
      }(Sound.prototype.reset);
      var WQ = function(QQ, WQ) {
        "spatial" === (WQ = WQ || "spatial") ? (QQ._panner = Howler.ctx.createPanner(), QQ._panner.coneInnerAngle = QQ._pannerAttr.coneInnerAngle, QQ._panner.coneOuterAngle = QQ._pannerAttr.coneOuterAngle, QQ._panner.coneOuterGain = QQ._pannerAttr.coneOuterGain, QQ._panner.distanceModel = QQ._pannerAttr.distanceModel, QQ._panner.maxDistance = QQ._pannerAttr.maxDistance, QQ._panner.refDistance = QQ._pannerAttr.refDistance, QQ._panner.rolloffFactor = QQ._pannerAttr.rolloffFactor, QQ._panner.panningModel = QQ._pannerAttr.panningModel, "undefined" !== typeof QQ._panner.positionX ? (QQ._panner.positionX.setValueAtTime(QQ._pos[0], Howler.ctx.currentTime), QQ._panner.positionY.setValueAtTime(QQ._pos[1], Howler.ctx.currentTime), QQ._panner.positionZ.setValueAtTime(QQ._pos[2], Howler.ctx.currentTime)) : QQ._panner.setPosition(QQ._pos[0], QQ._pos[1], QQ._pos[2]), "undefined" !== typeof QQ._panner.orientationX ? (QQ._panner.orientationX.setValueAtTime(QQ._orientation[0], Howler.ctx.currentTime), QQ._panner.orientationY.setValueAtTime(QQ._orientation[1], Howler.ctx.currentTime), QQ._panner.orientationZ.setValueAtTime(QQ._orientation[2], Howler.ctx.currentTime)) : QQ._panner.setOrientation(QQ._orientation[0], QQ._orientation[1], QQ._orientation[2])) : (QQ._panner = Howler.ctx.createStereoPanner(), QQ._panner.pan.setValueAtTime(QQ._stereo, Howler.ctx.currentTime)), QQ._panner.connect(QQ._node), QQ.lD || QQ._parent.pause(QQ._id, !0).play(QQ._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);