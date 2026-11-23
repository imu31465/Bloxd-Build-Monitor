/*! For license information please see w4ddu.96.719f4f52.chunk.js.LICENSE.txt */
export const id = 96;
export const ids = [96];
export const modules = {
  4801: (CC, zC, ZC) => {
    var QC;
    ! function() {
      var wC = function() {
        this.init()
      };
      wC.prototype = {
        init: function() {
          var CC = this || bC;
          return CC._counter = 1e3, CC._html5AudioPool = [], CC.html5PoolSize = 10, CC._codecs = {}, CC._howls = [], CC._muted = !1, CC._volume = 1, CC._canPlayEvent = "canplaythrough", CC._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, CC.masterGain = null, CC.noAudio = !1, CC.usingWebAudio = !0, CC.autoSuspend = !0, CC.ctx = null, CC.autoUnlock = !0, CC._setup(), CC
        },
        volume: function(CC) {
          var zC = this || bC;
          if (CC = parseFloat(CC), zC.ctx || MC(), "undefined" !== typeof CC && CC >= 0 && CC <= 1) {
            if (zC._volume = CC, zC._muted) return zC;
            zC.usingWebAudio && zC.masterGain.gain.setValueAtTime(CC, bC.ctx.currentTime);
            for (var ZC = 0; ZC < zC._howls.length; ZC++)
              if (!zC._howls[ZC]._webAudio)
                for (var QC = zC._howls[ZC]._getSoundIds(), wC = 0; wC < QC.length; wC++) {
                  var nC = zC._howls[ZC]._soundById(QC[wC]);
                  nC && nC._node && (nC._node.volume = nC._volume * CC)
                }
            return zC
          }
          return zC._volume
        },
        mute: function(CC) {
          var zC = this || bC;
          zC.ctx || MC(), zC._muted = CC, zC.usingWebAudio && zC.masterGain.gain.setValueAtTime(CC ? 0 : zC._volume, bC.ctx.currentTime);
          for (var ZC = 0; ZC < zC._howls.length; ZC++)
            if (!zC._howls[ZC]._webAudio)
              for (var QC = zC._howls[ZC]._getSoundIds(), wC = 0; wC < QC.length; wC++) {
                var nC = zC._howls[ZC]._soundById(QC[wC]);
                nC && nC._node && (nC._node.muted = !!CC || nC._muted)
              }
          return zC
        },
        stop: function() {
          for (var CC = this || bC, zC = 0; zC < CC._howls.length; zC++) CC._howls[zC].stop();
          return CC
        },
        unload: function() {
          for (var CC = this || bC, zC = CC._howls.length - 1; zC >= 0; zC--) CC._howls[zC].unload();
          return CC.usingWebAudio && CC.ctx && "undefined" !== typeof CC.ctx.close && (CC.ctx.close(), CC.ctx = null, MC()), CC
        },
        codecs: function(CC) {
          return (this || bC)._codecs[CC.replace(/^x-/, "")]
        },
        _setup: function() {
          var CC = this || bC;
          if (CC.state = CC.ctx && CC.ctx.state || "suspended", CC._autoSuspend(), !CC.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (CC._canPlayEvent = "canplay")
            } catch (zC) {
              CC.noAudio = !0
            } else CC.noAudio = !0;
          try {
            (new Audio).muted && (CC.noAudio = !0)
          } catch (zC) {}
          return CC.noAudio || CC._setupCodecs(), CC
        },
        _setupCodecs: function() {
          var CC = this || bC,
            zC = null;
          try {
            zC = "undefined" !== typeof Audio ? new Audio : null
          } catch (FC) {
            return CC
          }
          if (!zC || "function" !== typeof zC.canPlayType) return CC;
          var ZC = zC.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            QC = CC._navigator ? CC._navigator.userAgent : "",
            wC = QC.match(/OPR\/([0-6].)/g),
            nC = wC && parseInt(wC[0].split("/")[1], 10) < 33,
            fC = -1 !== QC.indexOf("Safari") && -1 === QC.indexOf("Chrome"),
            oC = QC.match(/Version\/(.*?) /),
            qC = fC && oC && parseInt(oC[1], 10) < 15;
          return CC._codecs = {
            mp3: !(nC || !ZC && !zC.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!ZC,
            opus: !!zC.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!zC.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!zC.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(zC.canPlayType('audio/wav; codecs="1"') || zC.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!zC.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!zC.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(zC.canPlayType("audio/x-m4a;") || zC.canPlayType("audio/m4a;") || zC.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(zC.canPlayType("audio/x-m4b;") || zC.canPlayType("audio/m4b;") || zC.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(zC.canPlayType("audio/x-mp4;") || zC.canPlayType("audio/mp4;") || zC.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(qC || !zC.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(qC || !zC.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!zC.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(zC.canPlayType("audio/x-flac;") || zC.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, CC
        },
        _unlockAudio: function() {
          var CC = this || bC;
          if (!CC._audioUnlocked && CC.ctx) {
            CC._audioUnlocked = !1, CC.autoUnlock = !1, CC._mobileUnloaded || 44100 === CC.ctx.sampleRate || (CC._mobileUnloaded = !0, CC.unload()), CC._scratchBuffer = CC.ctx.createBuffer(1, 1, 22050);
            var zC = function(ZC) {
              for (; CC._html5AudioPool.length < CC.html5PoolSize;) try {
                var QC = new Audio;
                QC._unlocked = !0, CC._releaseHtml5Audio(QC)
              } catch (ZC) {
                CC.noAudio = !0;
                break
              }
              for (var wC = 0; wC < CC._howls.length; wC++)
                if (!CC._howls[wC]._webAudio)
                  for (var bC = CC._howls[wC]._getSoundIds(), nC = 0; nC < bC.length; nC++) {
                    var fC = CC._howls[wC]._soundById(bC[nC]);
                    fC && fC._node && !fC._node._unlocked && (fC._node._unlocked = !0, fC._node.load())
                  }
              CC._autoResume();
              var oC = CC.ctx.createBufferSource();
              oC.buffer = CC._scratchBuffer, oC.connect(CC.ctx.destination), "undefined" === typeof oC.start ? oC.noteOn(0) : oC.start(0), "function" === typeof CC.ctx.resume && CC.ctx.resume(), oC.onended = function() {
                oC.disconnect(0), CC._audioUnlocked = !0, document.removeEventListener("touchstart", zC, !0), document.removeEventListener("touchend", zC, !0), document.removeEventListener("click", zC, !0), document.removeEventListener("keydown", zC, !0);
                for (var ZC = 0; ZC < CC._howls.length; ZC++) CC._howls[ZC]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", zC, !0), document.addEventListener("touchend", zC, !0), document.addEventListener("click", zC, !0), document.addEventListener("keydown", zC, !0), CC
          }
        },
        _obtainHtml5Audio: function() {
          var CC = this || bC;
          if (CC._html5AudioPool.length) return CC._html5AudioPool.pop();
          var zC = (new Audio).play();
          return zC && "undefined" !== typeof Promise && (zC instanceof Promise || "function" === typeof zC.then) && zC.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(CC) {
          var zC = this || bC;
          return CC._unlocked && zC._html5AudioPool.push(CC), zC
        },
        _autoSuspend: function() {
          var CC = this;
          if (CC.autoSuspend && CC.ctx && "undefined" !== typeof CC.ctx.suspend && bC.usingWebAudio) {
            for (var zC = 0; zC < CC._howls.length; zC++)
              if (CC._howls[zC]._webAudio)
                for (var ZC = 0; ZC < CC._howls[zC]._sounds.length; ZC++)
                  if (!CC._howls[zC]._sounds[ZC].kR) return CC;
            return CC._suspendTimer && clearTimeout(CC._suspendTimer), CC._suspendTimer = setTimeout((function() {
              if (CC.autoSuspend) {
                CC._suspendTimer = null, CC.state = "suspending";
                var zC = function() {
                  CC.state = "suspended", CC._resumeAfterSuspend && (delete CC._resumeAfterSuspend, CC._autoResume())
                };
                CC.ctx.suspend().then(zC, zC)
              }
            }), 3e4), CC
          }
        },
        _autoResume: function() {
          var CC = this;
          if (CC.ctx && "undefined" !== typeof CC.ctx.resume && bC.usingWebAudio) return "running" === CC.state && "interrupted" !== CC.ctx.state && CC._suspendTimer ? (clearTimeout(CC._suspendTimer), CC._suspendTimer = null) : "suspended" === CC.state || "running" === CC.state && "interrupted" === CC.ctx.state ? (CC.ctx.resume().then((function() {
            CC.state = "running";
            for (var zC = 0; zC < CC._howls.length; zC++) CC._howls[zC]._emit("resume")
          })), CC._suspendTimer && (clearTimeout(CC._suspendTimer), CC._suspendTimer = null)) : "suspending" === CC.state && (CC._resumeAfterSuspend = !0), CC
        }
      };
      var bC = new wC,
        nC = function(CC) {
          CC.src && 0 !== CC.src.length ? this.init(CC) : console.error("An array of source files must be passed with any new Howl.")
        };
      nC.prototype = {
        init: function(CC) {
          var zC = this;
          return bC.ctx || MC(), zC._autoplay = CC.autoplay || !1, zC._format = "string" !== typeof CC.format ? CC.format : [CC.format], zC._html5 = CC.html5 || !1, zC._muted = CC.mute || !1, zC._loop = CC.loop || !1, zC._pool = CC.pool || 5, zC._preload = "boolean" !== typeof CC.preload && "metadata" !== CC.preload || CC.preload, zC._rate = CC.rate || 1, zC._sprite = CC.sprite || {}, zC._src = "string" !== typeof CC.src ? CC.src : [CC.src], zC._volume = void 0 !== CC.volume ? CC.volume : 1, zC._xhr = {
            method: CC.xhr && CC.xhr.method ? CC.xhr.method : "GET",
            headers: CC.xhr && CC.xhr.headers ? CC.xhr.headers : null,
            withCredentials: !(!CC.xhr || !CC.xhr.withCredentials) && CC.xhr.withCredentials
          }, zC._duration = 0, zC._state = "unloaded", zC._sounds = [], zC._endTimers = {}, zC._queue = [], zC._playLock = !1, zC._onend = CC.onend ? [{
            Qg: CC.onend
          }] : [], zC._onfade = CC.onfade ? [{
            Qg: CC.onfade
          }] : [], zC._onload = CC.onload ? [{
            Qg: CC.onload
          }] : [], zC._onloaderror = CC.onloaderror ? [{
            Qg: CC.onloaderror
          }] : [], zC._onplayerror = CC.onplayerror ? [{
            Qg: CC.onplayerror
          }] : [], zC._onpause = CC.onpause ? [{
            Qg: CC.onpause
          }] : [], zC._onplay = CC.onplay ? [{
            Qg: CC.onplay
          }] : [], zC._onstop = CC.onstop ? [{
            Qg: CC.onstop
          }] : [], zC._onmute = CC.onmute ? [{
            Qg: CC.onmute
          }] : [], zC._onvolume = CC.onvolume ? [{
            Qg: CC.onvolume
          }] : [], zC._onrate = CC.onrate ? [{
            Qg: CC.onrate
          }] : [], zC._onseek = CC.onseek ? [{
            Qg: CC.onseek
          }] : [], zC._onunlock = CC.onunlock ? [{
            Qg: CC.onunlock
          }] : [], zC._onresume = [], zC._webAudio = bC.usingWebAudio && !zC._html5, "undefined" !== typeof bC.ctx && bC.ctx && bC.autoUnlock && bC._unlockAudio(), bC._howls.push(zC), zC._autoplay && zC._queue.push({
            event: "play",
            action: function() {
              zC.play()
            }
          }), zC._preload && "none" !== zC._preload && zC.load(), zC
        },
        load: function() {
          var CC = this,
            zC = null;
          if (bC.noAudio) CC._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof CC._src && (CC._src = [CC._src]);
            for (var ZC = 0; ZC < CC._src.length; ZC++) {
              var QC, wC;
              if (CC._format && CC._format[ZC]) QC = CC._format[ZC];
              else {
                if ("string" !== typeof(wC = CC._src[ZC])) {
                  CC._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(QC = /^data:audio\/([^;,]+);/i.exec(wC)) || (QC = /\.([^.]+)$/.exec(wC.split("?", 1)[0])), QC && (QC = QC[1].toLowerCase())
              }
              if (QC || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), QC && bC.codecs(QC)) {
                zC = CC._src[ZC];
                break
              }
            }
            if (zC) return CC._src = zC, CC._state = "loading", "https:" === window.location.protocol && "http:" === zC.slice(0, 5) && (CC._html5 = !0, CC._webAudio = !1), new fC(CC), CC._webAudio && qC(CC), CC;
            CC._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(CC, zC) {
          var ZC = this,
            QC = null;
          if ("number" === typeof CC) QC = CC, CC = null;
          else {
            if ("string" === typeof CC && "loaded" === ZC._state && !ZC._sprite[CC]) return null;
            if ("undefined" === typeof CC && (CC = "__default", !ZC._playLock)) {
              for (var wC = 0, nC = 0; nC < ZC._sounds.length; nC++) ZC._sounds[nC].kR && !ZC._sounds[nC]._ended && (wC++, QC = ZC._sounds[nC]._id);
              1 === wC ? CC = null : QC = null
            }
          }
          var fC = QC ? ZC._soundById(QC) : ZC._inactiveSound();
          if (!fC) return null;
          if (QC && !CC && (CC = fC._sprite || "__default"), "loaded" !== ZC._state) {
            fC._sprite = CC, fC._ended = !1;
            var oC = fC._id;
            return ZC._queue.push({
              event: "play",
              action: function() {
                ZC.play(oC)
              }
            }), oC
          }
          if (QC && !fC.kR) return zC || ZC._loadQueue("play"), fC._id;
          ZC._webAudio && bC._autoResume();
          var qC = Math.max(0, fC._seek > 0 ? fC._seek : ZC._sprite[CC][0] / 1e3),
            FC = Math.max(0, (ZC._sprite[CC][0] + ZC._sprite[CC][1]) / 1e3 - qC),
            WC = 1e3 * FC / Math.abs(fC._rate),
            NC = ZC._sprite[CC][0] / 1e3,
            MC = (ZC._sprite[CC][0] + ZC._sprite[CC][1]) / 1e3;
          fC._sprite = CC, fC._ended = !1;
          var gC = function() {
            fC.kR = !1, fC._seek = qC, fC._start = NC, fC._stop = MC, fC._loop = !(!fC._loop && !ZC._sprite[CC][2])
          };
          if (!(qC >= MC)) {
            var SC = fC._node;
            if (ZC._webAudio) {
              var pC = function() {
                ZC._playLock = !1, gC(), ZC._refreshBuffer(fC);
                var CC = fC._muted || ZC._muted ? 0 : fC._volume;
                SC.gain.setValueAtTime(CC, bC.ctx.currentTime), fC._playStart = bC.ctx.currentTime, "undefined" === typeof SC.bufferSource.start ? fC._loop ? SC.bufferSource.noteGrainOn(0, qC, 86400) : SC.bufferSource.noteGrainOn(0, qC, FC) : fC._loop ? SC.bufferSource.start(0, qC, 86400) : SC.bufferSource.start(0, qC, FC), WC !== 1 / 0 && (ZC._endTimers[fC._id] = setTimeout(ZC._ended.bind(ZC, fC), WC)), zC || setTimeout((function() {
                  ZC._emit("play", fC._id), ZC._loadQueue()
                }), 0)
              };
              "running" === bC.state && "interrupted" !== bC.ctx.state ? pC() : (ZC._playLock = !0, ZC.once("resume", pC), ZC._clearTimer(fC._id))
            } else {
              var PC = function() {
                SC.currentTime = qC, SC.muted = fC._muted || ZC._muted || bC._muted || SC.muted, SC.volume = fC._volume * bC.volume(), SC.playbackRate = fC._rate;
                try {
                  var QC = SC.play();
                  if (QC && "undefined" !== typeof Promise && (QC instanceof Promise || "function" === typeof QC.then) ? (ZC._playLock = !0, gC(), QC.then((function() {
                      ZC._playLock = !1, SC._unlocked = !0, zC ? ZC._loadQueue() : ZC._emit("play", fC._id)
                    })).catch((function() {
                      ZC._playLock = !1, ZC._emit("playerror", fC._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), fC._ended = !0, fC.kR = !0
                    }))) : zC || (ZC._playLock = !1, gC(), ZC._emit("play", fC._id)), SC.playbackRate = fC._rate, SC.paused) return void ZC._emit("playerror", fC._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== CC || fC._loop ? ZC._endTimers[fC._id] = setTimeout(ZC._ended.bind(ZC, fC), WC) : (ZC._endTimers[fC._id] = function() {
                    ZC._ended(fC), SC.removeEventListener("ended", ZC._endTimers[fC._id], !1)
                  }, SC.addEventListener("ended", ZC._endTimers[fC._id], !1))
                } catch (wC) {
                  ZC._emit("playerror", fC._id, wC)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === SC.src && (SC.src = ZC._src, SC.load());
              var GC = window && window.ejecta || !SC.readyState && bC._navigator.isCocoonJS;
              if (SC.readyState >= 3 || GC) PC();
              else {
                ZC._playLock = !0, ZC._state = "loading";
                var RC = function() {
                  ZC._state = "loaded", PC(), SC.removeEventListener(bC._canPlayEvent, RC, !1)
                };
                SC.addEventListener(bC._canPlayEvent, RC, !1), ZC._clearTimer(fC._id)
              }
            }
            return fC._id
          }
          ZC._ended(fC)
        },
        pause: function(CC) {
          var zC = this;
          if ("loaded" !== zC._state || zC._playLock) return zC._queue.push({
            event: "pause",
            action: function() {
              zC.pause(CC)
            }
          }), zC;
          for (var ZC = zC._getSoundIds(CC), QC = 0; QC < ZC.length; QC++) {
            zC._clearTimer(ZC[QC]);
            var wC = zC._soundById(ZC[QC]);
            if (wC && !wC.kR && (wC._seek = zC.seek(ZC[QC]), wC._rateSeek = 0, wC.kR = !0, zC._stopFade(ZC[QC]), wC._node))
              if (zC._webAudio) {
                if (!wC._node.bufferSource) continue;
                "undefined" === typeof wC._node.bufferSource.stop ? wC._node.bufferSource.noteOff(0) : wC._node.bufferSource.stop(0), zC._cleanBuffer(wC._node)
              } else isNaN(wC._node.duration) && wC._node.duration !== 1 / 0 || wC._node.pause();
            arguments[1] || zC._emit("pause", wC ? wC._id : null)
          }
          return zC
        },
        stop: function(CC, zC) {
          var ZC = this;
          if ("loaded" !== ZC._state || ZC._playLock) return ZC._queue.push({
            event: "stop",
            action: function() {
              ZC.stop(CC)
            }
          }), ZC;
          for (var QC = ZC._getSoundIds(CC), wC = 0; wC < QC.length; wC++) {
            ZC._clearTimer(QC[wC]);
            var bC = ZC._soundById(QC[wC]);
            bC && (bC._seek = bC._start || 0, bC._rateSeek = 0, bC.kR = !0, bC._ended = !0, ZC._stopFade(QC[wC]), bC._node && (ZC._webAudio ? bC._node.bufferSource && ("undefined" === typeof bC._node.bufferSource.stop ? bC._node.bufferSource.noteOff(0) : bC._node.bufferSource.stop(0), ZC._cleanBuffer(bC._node)) : isNaN(bC._node.duration) && bC._node.duration !== 1 / 0 || (bC._node.currentTime = bC._start || 0, bC._node.pause(), bC._node.duration === 1 / 0 && ZC._clearSound(bC._node))), zC || ZC._emit("stop", bC._id))
          }
          return ZC
        },
        mute: function(CC, zC) {
          var ZC = this;
          if ("loaded" !== ZC._state || ZC._playLock) return ZC._queue.push({
            event: "mute",
            action: function() {
              ZC.mute(CC, zC)
            }
          }), ZC;
          if ("undefined" === typeof zC) {
            if ("boolean" !== typeof CC) return ZC._muted;
            ZC._muted = CC
          }
          for (var QC = ZC._getSoundIds(zC), wC = 0; wC < QC.length; wC++) {
            var nC = ZC._soundById(QC[wC]);
            nC && (nC._muted = CC, nC._interval && ZC._stopFade(nC._id), ZC._webAudio && nC._node ? nC._node.gain.setValueAtTime(CC ? 0 : nC._volume, bC.ctx.currentTime) : nC._node && (nC._node.muted = !!bC._muted || CC), ZC._emit("mute", nC._id))
          }
          return ZC
        },
        volume: function() {
          var CC, zC, ZC, QC = this,
            wC = arguments;
          if (0 === wC.length) return QC._volume;
          if (1 === wC.length || 2 === wC.length && "undefined" === typeof wC[1] ? QC._getSoundIds().indexOf(wC[0]) >= 0 ? zC = parseInt(wC[0], 10) : CC = parseFloat(wC[0]) : wC.length >= 2 && (CC = parseFloat(wC[0]), zC = parseInt(wC[1], 10)), !("undefined" !== typeof CC && CC >= 0 && CC <= 1)) return (ZC = zC ? QC._soundById(zC) : QC._sounds[0]) ? ZC._volume : 0;
          if ("loaded" !== QC._state || QC._playLock) return QC._queue.push({
            event: "volume",
            action: function() {
              QC.volume.apply(QC, wC)
            }
          }), QC;
          "undefined" === typeof zC && (QC._volume = CC), zC = QC._getSoundIds(zC);
          for (var nC = 0; nC < zC.length; nC++)(ZC = QC._soundById(zC[nC])) && (ZC._volume = CC, wC[2] || QC._stopFade(zC[nC]), QC._webAudio && ZC._node && !ZC._muted ? ZC._node.gain.setValueAtTime(CC, bC.ctx.currentTime) : ZC._node && !ZC._muted && (ZC._node.volume = CC * bC.volume()), QC._emit("volume", ZC._id));
          return QC
        },
        fade: function(CC, zC, ZC, QC) {
          var wC = this;
          if ("loaded" !== wC._state || wC._playLock) return wC._queue.push({
            event: "fade",
            action: function() {
              wC.fade(CC, zC, ZC, QC)
            }
          }), wC;
          CC = Math.min(Math.max(0, parseFloat(CC)), 1), zC = Math.min(Math.max(0, parseFloat(zC)), 1), ZC = parseFloat(ZC), wC.volume(CC, QC);
          for (var nC = wC._getSoundIds(QC), fC = 0; fC < nC.length; fC++) {
            var oC = wC._soundById(nC[fC]);
            if (oC) {
              if (QC || wC._stopFade(nC[fC]), wC._webAudio && !oC._muted) {
                var qC = bC.ctx.currentTime,
                  FC = qC + ZC / 1e3;
                oC._volume = CC, oC._node.gain.setValueAtTime(CC, qC), oC._node.gain.linearRampToValueAtTime(zC, FC)
              }
              wC._startFadeInterval(oC, CC, zC, ZC, nC[fC], "undefined" === typeof QC)
            }
          }
          return wC
        },
        _startFadeInterval: function(CC, zC, ZC, QC, wC, bC) {
          var nC = this,
            fC = zC,
            oC = ZC - zC,
            qC = Math.abs(oC / .01),
            FC = Math.max(4, qC > 0 ? QC / qC : QC),
            WC = Date.now();
          CC._fadeTo = ZC, CC._interval = setInterval((function() {
            var wC = (Date.now() - WC) / QC;
            WC = Date.now(), fC += oC * wC, fC = Math.round(100 * fC) / 100, fC = oC < 0 ? Math.max(ZC, fC) : Math.min(ZC, fC), nC._webAudio ? CC._volume = fC : nC.volume(fC, CC._id, !0), bC && (nC._volume = fC), (ZC < zC && fC <= ZC || ZC > zC && fC >= ZC) && (clearInterval(CC._interval), CC._interval = null, CC._fadeTo = null, nC.volume(ZC, CC._id), nC._emit("fade", CC._id))
          }), FC)
        },
        _stopFade: function(CC) {
          var zC = this,
            ZC = zC._soundById(CC);
          return ZC && ZC._interval && (zC._webAudio && ZC._node.gain.cancelScheduledValues(bC.ctx.currentTime), clearInterval(ZC._interval), ZC._interval = null, zC.volume(ZC._fadeTo, CC), ZC._fadeTo = null, zC._emit("fade", CC)), zC
        },
        loop: function() {
          var CC, zC, ZC, QC = this,
            wC = arguments;
          if (0 === wC.length) return QC._loop;
          if (1 === wC.length) {
            if ("boolean" !== typeof wC[0]) return !!(ZC = QC._soundById(parseInt(wC[0], 10))) && ZC._loop;
            CC = wC[0], QC._loop = CC
          } else 2 === wC.length && (CC = wC[0], zC = parseInt(wC[1], 10));
          for (var bC = QC._getSoundIds(zC), nC = 0; nC < bC.length; nC++)(ZC = QC._soundById(bC[nC])) && (ZC._loop = CC, QC._webAudio && ZC._node && ZC._node.bufferSource && (ZC._node.bufferSource.loop = CC, CC && (ZC._node.bufferSource.loopStart = ZC._start || 0, ZC._node.bufferSource.loopEnd = ZC._stop, QC.playing(bC[nC]) && (QC.pause(bC[nC], !0), QC.play(bC[nC], !0)))));
          return QC
        },
        rate: function() {
          var CC, zC, ZC, QC = this,
            wC = arguments;
          if (0 === wC.length) zC = QC._sounds[0]._id;
          else if (1 === wC.length) {
            QC._getSoundIds().indexOf(wC[0]) >= 0 ? zC = parseInt(wC[0], 10) : CC = parseFloat(wC[0])
          } else 2 === wC.length && (CC = parseFloat(wC[0]), zC = parseInt(wC[1], 10));
          if ("number" !== typeof CC) return (ZC = QC._soundById(zC)) ? ZC._rate : QC._rate;
          if ("loaded" !== QC._state || QC._playLock) return QC._queue.push({
            event: "rate",
            action: function() {
              QC.rate.apply(QC, wC)
            }
          }), QC;
          "undefined" === typeof zC && (QC._rate = CC), zC = QC._getSoundIds(zC);
          for (var nC = 0; nC < zC.length; nC++)
            if (ZC = QC._soundById(zC[nC])) {
              QC.playing(zC[nC]) && (ZC._rateSeek = QC.seek(zC[nC]), ZC._playStart = QC._webAudio ? bC.ctx.currentTime : ZC._playStart), ZC._rate = CC, QC._webAudio && ZC._node && ZC._node.bufferSource ? ZC._node.bufferSource.playbackRate.setValueAtTime(CC, bC.ctx.currentTime) : ZC._node && (ZC._node.playbackRate = CC);
              var fC = QC.seek(zC[nC]),
                oC = 1e3 * ((QC._sprite[ZC._sprite][0] + QC._sprite[ZC._sprite][1]) / 1e3 - fC) / Math.abs(ZC._rate);
              !QC._endTimers[zC[nC]] && ZC.kR || (QC._clearTimer(zC[nC]), QC._endTimers[zC[nC]] = setTimeout(QC._ended.bind(QC, ZC), oC)), QC._emit("rate", ZC._id)
            } return QC
        },
        seek: function() {
          var CC, zC, ZC = this,
            QC = arguments;
          if (0 === QC.length) ZC._sounds.length && (zC = ZC._sounds[0]._id);
          else if (1 === QC.length) {
            ZC._getSoundIds().indexOf(QC[0]) >= 0 ? zC = parseInt(QC[0], 10) : ZC._sounds.length && (zC = ZC._sounds[0]._id, CC = parseFloat(QC[0]))
          } else 2 === QC.length && (CC = parseFloat(QC[0]), zC = parseInt(QC[1], 10));
          if ("undefined" === typeof zC) return 0;
          if ("number" === typeof CC && ("loaded" !== ZC._state || ZC._playLock)) return ZC._queue.push({
            event: "seek",
            action: function() {
              ZC.seek.apply(ZC, QC)
            }
          }), ZC;
          var wC = ZC._soundById(zC);
          if (wC) {
            if (!("number" === typeof CC && CC >= 0)) {
              if (ZC._webAudio) {
                var nC = ZC.playing(zC) ? bC.ctx.currentTime - wC._playStart : 0,
                  fC = wC._rateSeek ? wC._rateSeek - wC._seek : 0;
                return wC._seek + (fC + nC * Math.abs(wC._rate))
              }
              return wC._node.currentTime
            }
            var oC = ZC.playing(zC);
            oC && ZC.pause(zC, !0), wC._seek = CC, wC._ended = !1, ZC._clearTimer(zC), ZC._webAudio || !wC._node || isNaN(wC._node.duration) || (wC._node.currentTime = CC);
            var qC = function() {
              oC && ZC.play(zC, !0), ZC._emit("seek", zC)
            };
            if (oC && !ZC._webAudio) {
              var FC = function() {
                ZC._playLock ? setTimeout(FC, 0) : qC()
              };
              setTimeout(FC, 0)
            } else qC()
          }
          return ZC
        },
        playing: function(CC) {
          var zC = this;
          if ("number" === typeof CC) {
            var ZC = zC._soundById(CC);
            return !!ZC && !ZC.kR
          }
          for (var QC = 0; QC < zC._sounds.length; QC++)
            if (!zC._sounds[QC].kR) return !0;
          return !1
        },
        duration: function(CC) {
          var zC = this,
            ZC = zC._duration,
            QC = zC._soundById(CC);
          return QC && (ZC = zC._sprite[QC._sprite][1] / 1e3), ZC
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var CC = this, zC = CC._sounds, ZC = 0; ZC < zC.length; ZC++) zC[ZC].kR || CC.stop(zC[ZC]._id), CC._webAudio || (CC._clearSound(zC[ZC]._node), zC[ZC]._node.removeEventListener("error", zC[ZC]._errorFn, !1), zC[ZC]._node.removeEventListener(bC._canPlayEvent, zC[ZC]._loadFn, !1), zC[ZC]._node.removeEventListener("ended", zC[ZC]._endFn, !1), bC._releaseHtml5Audio(zC[ZC]._node)), delete zC[ZC]._node, CC._clearTimer(zC[ZC]._id);
          var QC = bC._howls.indexOf(CC);
          QC >= 0 && bC._howls.splice(QC, 1);
          var wC = !0;
          for (ZC = 0; ZC < bC._howls.length; ZC++)
            if (bC._howls[ZC]._src === CC._src || CC._src.indexOf(bC._howls[ZC]._src) >= 0) {
              wC = !1;
              break
            } return oC && wC && delete oC[CC._src], bC.noAudio = !1, CC._state = "unloaded", CC._sounds = [], CC = null, null
        },
        on: function(CC, zC, ZC, QC) {
          var wC = this["_on" + CC];
          return "function" === typeof zC && wC.push(QC ? {
            id: ZC,
            Qg: zC,
            once: QC
          } : {
            id: ZC,
            Qg: zC
          }), this
        },
        off: function(CC, zC, ZC) {
          var QC = this,
            wC = QC["_on" + CC],
            bC = 0;
          if ("number" === typeof zC && (ZC = zC, zC = null), zC || ZC)
            for (bC = 0; bC < wC.length; bC++) {
              var nC = ZC === wC[bC].id;
              if (zC === wC[bC].Qg && nC || !zC && nC) {
                wC.splice(bC, 1);
                break
              }
            } else if (CC) QC["_on" + CC] = [];
            else {
              var fC = Object.keys(QC);
              for (bC = 0; bC < fC.length; bC++) 0 === fC[bC].indexOf("_on") && Array.isArray(QC[fC[bC]]) && (QC[fC[bC]] = [])
            } return QC
        },
        once: function(CC, zC, ZC) {
          return this.on(CC, zC, ZC, 1), this
        },
        _emit: function(CC, zC, ZC) {
          for (var QC = this, wC = QC["_on" + CC], bC = wC.length - 1; bC >= 0; bC--) wC[bC].id && wC[bC].id !== zC && "load" !== CC || (setTimeout(function(CC) {
            CC.call(this, zC, ZC)
          }.bind(QC, wC[bC].Qg), 0), wC[bC].once && QC.off(CC, wC[bC].Qg, wC[bC].id));
          return QC._loadQueue(CC), QC
        },
        _loadQueue: function(CC) {
          var zC = this;
          if (zC._queue.length > 0) {
            var ZC = zC._queue[0];
            ZC.event === CC && (zC._queue.shift(), zC._loadQueue()), CC || ZC.action()
          }
          return zC
        },
        _ended: function(CC) {
          var zC = this,
            ZC = CC._sprite;
          if (!zC._webAudio && CC._node && !CC._node.paused && !CC._node.ended && CC._node.currentTime < CC._stop) return setTimeout(zC._ended.bind(zC, CC), 100), zC;
          var QC = !(!CC._loop && !zC._sprite[ZC][2]);
          if (zC._emit("end", CC._id), !zC._webAudio && QC && zC.stop(CC._id, !0).play(CC._id), zC._webAudio && QC) {
            zC._emit("play", CC._id), CC._seek = CC._start || 0, CC._rateSeek = 0, CC._playStart = bC.ctx.currentTime;
            var wC = 1e3 * (CC._stop - CC._start) / Math.abs(CC._rate);
            zC._endTimers[CC._id] = setTimeout(zC._ended.bind(zC, CC), wC)
          }
          return zC._webAudio && !QC && (CC.kR = !0, CC._ended = !0, CC._seek = CC._start || 0, CC._rateSeek = 0, zC._clearTimer(CC._id), zC._cleanBuffer(CC._node), bC._autoSuspend()), zC._webAudio || QC || zC.stop(CC._id, !0), zC
        },
        _clearTimer: function(CC) {
          var zC = this;
          if (zC._endTimers[CC]) {
            if ("function" !== typeof zC._endTimers[CC]) clearTimeout(zC._endTimers[CC]);
            else {
              var ZC = zC._soundById(CC);
              ZC && ZC._node && ZC._node.removeEventListener("ended", zC._endTimers[CC], !1)
            }
            delete zC._endTimers[CC]
          }
          return zC
        },
        _soundById: function(CC) {
          for (var zC = this, ZC = 0; ZC < zC._sounds.length; ZC++)
            if (CC === zC._sounds[ZC]._id) return zC._sounds[ZC];
          return null
        },
        _inactiveSound: function() {
          var CC = this;
          CC._drain();
          for (var zC = 0; zC < CC._sounds.length; zC++)
            if (CC._sounds[zC]._ended) return CC._sounds[zC].reset();
          return new fC(CC)
        },
        _drain: function() {
          var CC = this,
            zC = CC._pool,
            ZC = 0,
            QC = 0;
          if (!(CC._sounds.length < zC)) {
            for (QC = 0; QC < CC._sounds.length; QC++) CC._sounds[QC]._ended && ZC++;
            for (QC = CC._sounds.length - 1; QC >= 0; QC--) {
              if (ZC <= zC) return;
              CC._sounds[QC]._ended && (CC._webAudio && CC._sounds[QC]._node && CC._sounds[QC]._node.disconnect(0), CC._sounds.splice(QC, 1), ZC--)
            }
          }
        },
        _getSoundIds: function(CC) {
          if ("undefined" === typeof CC) {
            for (var zC = [], ZC = 0; ZC < this._sounds.length; ZC++) zC.push(this._sounds[ZC]._id);
            return zC
          }
          return [CC]
        },
        _refreshBuffer: function(CC) {
          return CC._node.bufferSource = bC.ctx.createBufferSource(), CC._node.bufferSource.buffer = oC[this._src], CC._panner ? CC._node.bufferSource.connect(CC._panner) : CC._node.bufferSource.connect(CC._node), CC._node.bufferSource.loop = CC._loop, CC._loop && (CC._node.bufferSource.loopStart = CC._start || 0, CC._node.bufferSource.loopEnd = CC._stop || 0), CC._node.bufferSource.playbackRate.setValueAtTime(CC._rate, bC.ctx.currentTime), this
        },
        _cleanBuffer: function(CC) {
          var zC = bC._navigator && bC._navigator.vendor.indexOf("Apple") >= 0;
          if (bC._scratchBuffer && CC.bufferSource && (CC.bufferSource.onended = null, CC.bufferSource.disconnect(0), zC)) try {
            CC.bufferSource.buffer = bC._scratchBuffer
          } catch (ZC) {}
          return CC.bufferSource = null, this
        },
        _clearSound: function(CC) {
          /MSIE |Trident\//.test(bC._navigator && bC._navigator.userAgent) || (CC.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var fC = function(CC) {
        this._parent = CC, this.init()
      };
      fC.prototype = {
        init: function() {
          var CC = this,
            zC = CC._parent;
          return CC._muted = zC._muted, CC._loop = zC._loop, CC._volume = zC._volume, CC._rate = zC._rate, CC._seek = 0, CC.kR = !0, CC._ended = !0, CC._sprite = "__default", CC._id = ++bC._counter, zC._sounds.push(CC), CC.create(), CC
        },
        create: function() {
          var CC = this,
            zC = CC._parent,
            ZC = bC._muted || CC._muted || CC._parent._muted ? 0 : CC._volume;
          return zC._webAudio ? (CC._node = "undefined" === typeof bC.ctx.createGain ? bC.ctx.createGainNode() : bC.ctx.createGain(), CC._node.gain.setValueAtTime(ZC, bC.ctx.currentTime), CC._node.paused = !0, CC._node.connect(bC.masterGain)) : bC.noAudio || (CC._node = bC._obtainHtml5Audio(), CC._errorFn = CC._errorListener.bind(CC), CC._node.addEventListener("error", CC._errorFn, !1), CC._loadFn = CC._loadListener.bind(CC), CC._node.addEventListener(bC._canPlayEvent, CC._loadFn, !1), CC._endFn = CC._endListener.bind(CC), CC._node.addEventListener("ended", CC._endFn, !1), CC._node.src = zC._src, CC._node.preload = !0 === zC._preload ? "auto" : zC._preload, CC._node.volume = ZC * bC.volume(), CC._node.load()), CC
        },
        reset: function() {
          var CC = this,
            zC = CC._parent;
          return CC._muted = zC._muted, CC._loop = zC._loop, CC._volume = zC._volume, CC._rate = zC._rate, CC._seek = 0, CC._rateSeek = 0, CC.kR = !0, CC._ended = !0, CC._sprite = "__default", CC._id = ++bC._counter, CC
        },
        _errorListener: function() {
          var CC = this;
          CC._parent._emit("loaderror", CC._id, CC._node.error ? CC._node.error.code : 0), CC._node.removeEventListener("error", CC._errorFn, !1)
        },
        _loadListener: function() {
          var CC = this,
            zC = CC._parent;
          zC._duration = Math.ceil(10 * CC._node.duration) / 10, 0 === Object.keys(zC._sprite).length && (zC._sprite = {
            __default: [0, 1e3 * zC._duration]
          }), "loaded" !== zC._state && (zC._state = "loaded", zC._emit("load"), zC._loadQueue()), CC._node.removeEventListener(bC._canPlayEvent, CC._loadFn, !1)
        },
        _endListener: function() {
          var CC = this,
            zC = CC._parent;
          zC._duration === 1 / 0 && (zC._duration = Math.ceil(10 * CC._node.duration) / 10, zC._sprite.__default[1] === 1 / 0 && (zC._sprite.__default[1] = 1e3 * zC._duration), zC._ended(CC)), CC._node.removeEventListener("ended", CC._endFn, !1)
        }
      };
      var oC = {},
        qC = function(CC) {
          var zC = CC._src;
          if (oC[zC]) return CC._duration = oC[zC].duration, void NC(CC);
          if (/^data:[^;]+;base64,/.test(zC)) {
            for (var ZC = atob(zC.split(",")[1]), QC = new Uint8Array(ZC.length), wC = 0; wC < ZC.length; ++wC) QC[wC] = ZC.charCodeAt(wC);
            WC(QC.buffer, CC)
          } else {
            var bC = new XMLHttpRequest;
            bC.open(CC._xhr.method, zC, !0), bC.withCredentials = CC._xhr.withCredentials, bC.responseType = "arraybuffer", CC._xhr.headers && Object.keys(CC._xhr.headers).forEach((function(zC) {
              bC.setRequestHeader(zC, CC._xhr.headers[zC])
            })), bC.onload = function() {
              var zC = (bC.status + "")[0];
              "0" === zC || "2" === zC || "3" === zC ? WC(bC.response, CC) : CC._emit("loaderror", null, "Failed loading audio file with status: " + bC.status + ".")
            }, bC.onerror = function() {
              CC._webAudio && (CC._html5 = !0, CC._webAudio = !1, CC._sounds = [], delete oC[zC], CC.load())
            }, FC(bC)
          }
        },
        FC = function(CC) {
          try {
            CC.send()
          } catch (zC) {
            CC.onerror()
          }
        },
        WC = function(CC, zC) {
          var ZC = function() {
              zC._emit("loaderror", null, "Decoding audio data failed.")
            },
            QC = function(CC) {
              CC && zC._sounds.length > 0 ? (oC[zC._src] = CC, NC(zC, CC)) : ZC()
            };
          "undefined" !== typeof Promise && 1 === bC.ctx.decodeAudioData.length ? bC.ctx.decodeAudioData(CC).then(QC).catch(ZC) : bC.ctx.decodeAudioData(CC, QC, ZC)
        },
        NC = function(CC, zC) {
          zC && !CC._duration && (CC._duration = zC.duration), 0 === Object.keys(CC._sprite).length && (CC._sprite = {
            __default: [0, 1e3 * CC._duration]
          }), "loaded" !== CC._state && (CC._state = "loaded", CC._emit("load"), CC._loadQueue())
        },
        MC = function() {
          if (bC.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? bC.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? bC.ctx = new webkitAudioContext : bC.usingWebAudio = !1
            } catch (wC) {
              bC.usingWebAudio = !1
            }
            bC.ctx || (bC.usingWebAudio = !1);
            var CC = /iP(hone|od|ad)/.test(bC._navigator && bC._navigator.platform),
              zC = bC._navigator && bC._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              ZC = zC ? parseInt(zC[1], 10) : null;
            if (CC && ZC && ZC < 9) {
              var QC = /safari/.test(bC._navigator && bC._navigator.userAgent.toLowerCase());
              bC._navigator && !QC && (bC.usingWebAudio = !1)
            }
            bC.usingWebAudio && (bC.masterGain = "undefined" === typeof bC.ctx.createGain ? bC.ctx.createGainNode() : bC.ctx.createGain(), bC.masterGain.gain.setValueAtTime(bC._muted ? 0 : bC._volume, bC.ctx.currentTime), bC.masterGain.connect(bC.ctx.destination)), bC._setup()
          }
        };
      void 0 === (QC = function() {
        return {
          Howler: bC,
          Howl: nC
        }
      }.apply(zC, [])) || (CC.exports = QC), zC.Howler = bC, zC.Howl = nC, "undefined" !== typeof ZC.g ? (ZC.g.HowlerGlobal = wC, ZC.g.Howler = bC, ZC.g.Howl = nC, ZC.g.Sound = fC) : "undefined" !== typeof window && (window.HowlerGlobal = wC, window.Howler = bC, window.Howl = nC, window.Sound = fC)
    }(),
    function() {
      var CC;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(CC) {
        var zC = this;
        if (!zC.ctx || !zC.ctx.listener) return zC;
        for (var ZC = zC._howls.length - 1; ZC >= 0; ZC--) zC._howls[ZC].stereo(CC);
        return zC
      }, HowlerGlobal.prototype.pos = function(CC, zC, ZC) {
        var QC = this;
        return QC.ctx && QC.ctx.listener ? (zC = "number" !== typeof zC ? QC._pos[1] : zC, ZC = "number" !== typeof ZC ? QC._pos[2] : ZC, "number" !== typeof CC ? QC._pos : (QC._pos = [CC, zC, ZC], "undefined" !== typeof QC.ctx.listener.positionX ? (QC.ctx.listener.positionX.setTargetAtTime(QC._pos[0], Howler.ctx.currentTime, .1), QC.ctx.listener.positionY.setTargetAtTime(QC._pos[1], Howler.ctx.currentTime, .1), QC.ctx.listener.positionZ.setTargetAtTime(QC._pos[2], Howler.ctx.currentTime, .1)) : QC.ctx.listener.setPosition(QC._pos[0], QC._pos[1], QC._pos[2]), QC)) : QC
      }, HowlerGlobal.prototype.orientation = function(CC, zC, ZC, QC, wC, bC) {
        var nC = this;
        if (!nC.ctx || !nC.ctx.listener) return nC;
        var fC = nC._orientation;
        return zC = "number" !== typeof zC ? fC[1] : zC, ZC = "number" !== typeof ZC ? fC[2] : ZC, QC = "number" !== typeof QC ? fC[3] : QC, wC = "number" !== typeof wC ? fC[4] : wC, bC = "number" !== typeof bC ? fC[5] : bC, "number" !== typeof CC ? fC : (nC._orientation = [CC, zC, ZC, QC, wC, bC], "undefined" !== typeof nC.ctx.listener.forwardX ? (nC.ctx.listener.forwardX.setTargetAtTime(CC, Howler.ctx.currentTime, .1), nC.ctx.listener.forwardY.setTargetAtTime(zC, Howler.ctx.currentTime, .1), nC.ctx.listener.forwardZ.setTargetAtTime(ZC, Howler.ctx.currentTime, .1), nC.ctx.listener.upX.setTargetAtTime(QC, Howler.ctx.currentTime, .1), nC.ctx.listener.upY.setTargetAtTime(wC, Howler.ctx.currentTime, .1), nC.ctx.listener.upZ.setTargetAtTime(bC, Howler.ctx.currentTime, .1)) : nC.ctx.listener.setOrientation(CC, zC, ZC, QC, wC, bC), nC)
      }, Howl.prototype.init = (CC = Howl.prototype.init, function(zC) {
        var ZC = this;
        return ZC._orientation = zC.orientation || [1, 0, 0], ZC._stereo = zC.stereo || null, ZC._pos = zC.pos || null, ZC._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof zC.coneInnerAngle ? zC.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof zC.coneOuterAngle ? zC.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof zC.coneOuterGain ? zC.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof zC.distanceModel ? zC.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof zC.maxDistance ? zC.maxDistance : 1e4,
          panningModel: "undefined" !== typeof zC.panningModel ? zC.panningModel : "HRTF",
          refDistance: "undefined" !== typeof zC.refDistance ? zC.refDistance : 1,
          rolloffFactor: "undefined" !== typeof zC.rolloffFactor ? zC.rolloffFactor : 1
        }, ZC._onstereo = zC.onstereo ? [{
          Qg: zC.onstereo
        }] : [], ZC._onpos = zC.onpos ? [{
          Qg: zC.onpos
        }] : [], ZC._onorientation = zC.onorientation ? [{
          Qg: zC.onorientation
        }] : [], CC.call(this, zC)
      }), Howl.prototype.stereo = function(CC, ZC) {
        var QC = this;
        if (!QC._webAudio) return QC;
        if ("loaded" !== QC._state) return QC._queue.push({
          event: "stereo",
          action: function() {
            QC.stereo(CC, ZC)
          }
        }), QC;
        var wC = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof ZC) {
          if ("number" !== typeof CC) return QC._stereo;
          QC._stereo = CC, QC._pos = [CC, 0, 0]
        }
        for (var bC = QC._getSoundIds(ZC), nC = 0; nC < bC.length; nC++) {
          var fC = QC._soundById(bC[nC]);
          if (fC) {
            if ("number" !== typeof CC) return fC._stereo;
            fC._stereo = CC, fC._pos = [CC, 0, 0], fC._node && (fC._pannerAttr.panningModel = "equalpower", fC._panner && fC._panner.pan || zC(fC, wC), "spatial" === wC ? "undefined" !== typeof fC._panner.positionX ? (fC._panner.positionX.setValueAtTime(CC, Howler.ctx.currentTime), fC._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), fC._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : fC._panner.setPosition(CC, 0, 0) : fC._panner.pan.setValueAtTime(CC, Howler.ctx.currentTime)), QC._emit("stereo", fC._id)
          }
        }
        return QC
      }, Howl.prototype.pos = function(CC, ZC, QC, wC) {
        var bC = this;
        if (!bC._webAudio) return bC;
        if ("loaded" !== bC._state) return bC._queue.push({
          event: "pos",
          action: function() {
            bC.pos(CC, ZC, QC, wC)
          }
        }), bC;
        if (ZC = "number" !== typeof ZC ? 0 : ZC, QC = "number" !== typeof QC ? -.5 : QC, "undefined" === typeof wC) {
          if ("number" !== typeof CC) return bC._pos;
          bC._pos = [CC, ZC, QC]
        }
        for (var nC = bC._getSoundIds(wC), fC = 0; fC < nC.length; fC++) {
          var oC = bC._soundById(nC[fC]);
          if (oC) {
            if ("number" !== typeof CC) return oC._pos;
            oC._pos = [CC, ZC, QC], oC._node && (oC._panner && !oC._panner.pan || zC(oC, "spatial"), "undefined" !== typeof oC._panner.positionX ? (oC._panner.positionX.setValueAtTime(CC, Howler.ctx.currentTime), oC._panner.positionY.setValueAtTime(ZC, Howler.ctx.currentTime), oC._panner.positionZ.setValueAtTime(QC, Howler.ctx.currentTime)) : oC._panner.setPosition(CC, ZC, QC)), bC._emit("pos", oC._id)
          }
        }
        return bC
      }, Howl.prototype.orientation = function(CC, ZC, QC, wC) {
        var bC = this;
        if (!bC._webAudio) return bC;
        if ("loaded" !== bC._state) return bC._queue.push({
          event: "orientation",
          action: function() {
            bC.orientation(CC, ZC, QC, wC)
          }
        }), bC;
        if (ZC = "number" !== typeof ZC ? bC._orientation[1] : ZC, QC = "number" !== typeof QC ? bC._orientation[2] : QC, "undefined" === typeof wC) {
          if ("number" !== typeof CC) return bC._orientation;
          bC._orientation = [CC, ZC, QC]
        }
        for (var nC = bC._getSoundIds(wC), fC = 0; fC < nC.length; fC++) {
          var oC = bC._soundById(nC[fC]);
          if (oC) {
            if ("number" !== typeof CC) return oC._orientation;
            oC._orientation = [CC, ZC, QC], oC._node && (oC._panner || (oC._pos || (oC._pos = bC._pos || [0, 0, -.5]), zC(oC, "spatial")), "undefined" !== typeof oC._panner.orientationX ? (oC._panner.orientationX.setValueAtTime(CC, Howler.ctx.currentTime), oC._panner.orientationY.setValueAtTime(ZC, Howler.ctx.currentTime), oC._panner.orientationZ.setValueAtTime(QC, Howler.ctx.currentTime)) : oC._panner.setOrientation(CC, ZC, QC)), bC._emit("orientation", oC._id)
          }
        }
        return bC
      }, Howl.prototype.pannerAttr = function() {
        var CC, ZC, QC, wC = this,
          bC = arguments;
        if (!wC._webAudio) return wC;
        if (0 === bC.length) return wC._pannerAttr;
        if (1 === bC.length) {
          if ("object" !== typeof bC[0]) return (QC = wC._soundById(parseInt(bC[0], 10))) ? QC._pannerAttr : wC._pannerAttr;
          CC = bC[0], "undefined" === typeof ZC && (CC.pannerAttr || (CC.pannerAttr = {
            coneInnerAngle: CC.coneInnerAngle,
            coneOuterAngle: CC.coneOuterAngle,
            coneOuterGain: CC.coneOuterGain,
            distanceModel: CC.distanceModel,
            maxDistance: CC.maxDistance,
            refDistance: CC.refDistance,
            rolloffFactor: CC.rolloffFactor,
            panningModel: CC.panningModel
          }), wC._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof CC.pannerAttr.coneInnerAngle ? CC.pannerAttr.coneInnerAngle : wC._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof CC.pannerAttr.coneOuterAngle ? CC.pannerAttr.coneOuterAngle : wC._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof CC.pannerAttr.coneOuterGain ? CC.pannerAttr.coneOuterGain : wC._coneOuterGain,
            distanceModel: "undefined" !== typeof CC.pannerAttr.distanceModel ? CC.pannerAttr.distanceModel : wC._distanceModel,
            maxDistance: "undefined" !== typeof CC.pannerAttr.maxDistance ? CC.pannerAttr.maxDistance : wC._maxDistance,
            refDistance: "undefined" !== typeof CC.pannerAttr.refDistance ? CC.pannerAttr.refDistance : wC._refDistance,
            rolloffFactor: "undefined" !== typeof CC.pannerAttr.rolloffFactor ? CC.pannerAttr.rolloffFactor : wC._rolloffFactor,
            panningModel: "undefined" !== typeof CC.pannerAttr.panningModel ? CC.pannerAttr.panningModel : wC._panningModel
          })
        } else 2 === bC.length && (CC = bC[0], ZC = parseInt(bC[1], 10));
        for (var nC = wC._getSoundIds(ZC), fC = 0; fC < nC.length; fC++)
          if (QC = wC._soundById(nC[fC])) {
            var oC = QC._pannerAttr;
            oC = {
              coneInnerAngle: "undefined" !== typeof CC.coneInnerAngle ? CC.coneInnerAngle : oC.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof CC.coneOuterAngle ? CC.coneOuterAngle : oC.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof CC.coneOuterGain ? CC.coneOuterGain : oC.coneOuterGain,
              distanceModel: "undefined" !== typeof CC.distanceModel ? CC.distanceModel : oC.distanceModel,
              maxDistance: "undefined" !== typeof CC.maxDistance ? CC.maxDistance : oC.maxDistance,
              refDistance: "undefined" !== typeof CC.refDistance ? CC.refDistance : oC.refDistance,
              rolloffFactor: "undefined" !== typeof CC.rolloffFactor ? CC.rolloffFactor : oC.rolloffFactor,
              panningModel: "undefined" !== typeof CC.panningModel ? CC.panningModel : oC.panningModel
            };
            var qC = QC._panner;
            qC ? (qC.coneInnerAngle = oC.coneInnerAngle, qC.coneOuterAngle = oC.coneOuterAngle, qC.coneOuterGain = oC.coneOuterGain, qC.distanceModel = oC.distanceModel, qC.maxDistance = oC.maxDistance, qC.refDistance = oC.refDistance, qC.rolloffFactor = oC.rolloffFactor, qC.panningModel = oC.panningModel) : (QC._pos || (QC._pos = wC._pos || [0, 0, -.5]), zC(QC, "spatial"))
          } return wC
      }, Sound.prototype.init = function(CC) {
        return function() {
          var zC = this,
            ZC = zC._parent;
          zC._orientation = ZC._orientation, zC._stereo = ZC._stereo, zC._pos = ZC._pos, zC._pannerAttr = ZC._pannerAttr, CC.call(this), zC._stereo ? ZC.stereo(zC._stereo) : zC._pos && ZC.pos(zC._pos[0], zC._pos[1], zC._pos[2], zC._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(CC) {
        return function() {
          var zC = this,
            ZC = zC._parent;
          return zC._orientation = ZC._orientation, zC._stereo = ZC._stereo, zC._pos = ZC._pos, zC._pannerAttr = ZC._pannerAttr, zC._stereo ? ZC.stereo(zC._stereo) : zC._pos ? ZC.pos(zC._pos[0], zC._pos[1], zC._pos[2], zC._id) : zC._panner && (zC._panner.disconnect(0), zC._panner = void 0, ZC._refreshBuffer(zC)), CC.call(this)
        }
      }(Sound.prototype.reset);
      var zC = function(CC, zC) {
        "spatial" === (zC = zC || "spatial") ? (CC._panner = Howler.ctx.createPanner(), CC._panner.coneInnerAngle = CC._pannerAttr.coneInnerAngle, CC._panner.coneOuterAngle = CC._pannerAttr.coneOuterAngle, CC._panner.coneOuterGain = CC._pannerAttr.coneOuterGain, CC._panner.distanceModel = CC._pannerAttr.distanceModel, CC._panner.maxDistance = CC._pannerAttr.maxDistance, CC._panner.refDistance = CC._pannerAttr.refDistance, CC._panner.rolloffFactor = CC._pannerAttr.rolloffFactor, CC._panner.panningModel = CC._pannerAttr.panningModel, "undefined" !== typeof CC._panner.positionX ? (CC._panner.positionX.setValueAtTime(CC._pos[0], Howler.ctx.currentTime), CC._panner.positionY.setValueAtTime(CC._pos[1], Howler.ctx.currentTime), CC._panner.positionZ.setValueAtTime(CC._pos[2], Howler.ctx.currentTime)) : CC._panner.setPosition(CC._pos[0], CC._pos[1], CC._pos[2]), "undefined" !== typeof CC._panner.orientationX ? (CC._panner.orientationX.setValueAtTime(CC._orientation[0], Howler.ctx.currentTime), CC._panner.orientationY.setValueAtTime(CC._orientation[1], Howler.ctx.currentTime), CC._panner.orientationZ.setValueAtTime(CC._orientation[2], Howler.ctx.currentTime)) : CC._panner.setOrientation(CC._orientation[0], CC._orientation[1], CC._orientation[2])) : (CC._panner = Howler.ctx.createStereoPanner(), CC._panner.pan.setValueAtTime(CC._stereo, Howler.ctx.currentTime)), CC._panner.connect(CC._node), CC.kR || CC._parent.pause(CC._id, !0).play(CC._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);