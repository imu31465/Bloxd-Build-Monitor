/*! For license information please see 7zvlu.98.11ee4c03.chunk.js.LICENSE.txt */
export const id = 98;
export const ids = [98];
export const modules = {
  4958: (BB, jB, zB) => {
    var QB;
    ! function() {
      var nB = function() {
        this.init()
      };
      nB.prototype = {
        init: function() {
          var BB = this || dB;
          return BB._counter = 1e3, BB._html5AudioPool = [], BB.html5PoolSize = 10, BB._codecs = {}, BB._howls = [], BB._muted = !1, BB._volume = 1, BB._canPlayEvent = "canplaythrough", BB._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, BB.masterGain = null, BB.noAudio = !1, BB.usingWebAudio = !0, BB.autoSuspend = !0, BB.ctx = null, BB.autoUnlock = !0, BB._setup(), BB
        },
        volume: function(BB) {
          var jB = this || dB;
          if (BB = parseFloat(BB), jB.ctx || sB(), "undefined" !== typeof BB && BB >= 0 && BB <= 1) {
            if (jB._volume = BB, jB._muted) return jB;
            jB.usingWebAudio && jB.masterGain.gain.setValueAtTime(BB, dB.ctx.currentTime);
            for (var zB = 0; zB < jB._howls.length; zB++)
              if (!jB._howls[zB]._webAudio)
                for (var QB = jB._howls[zB]._getSoundIds(), nB = 0; nB < QB.length; nB++) {
                  var IB = jB._howls[zB]._soundById(QB[nB]);
                  IB && IB._node && (IB._node.volume = IB._volume * BB)
                }
            return jB
          }
          return jB._volume
        },
        mute: function(BB) {
          var jB = this || dB;
          jB.ctx || sB(), jB._muted = BB, jB.usingWebAudio && jB.masterGain.gain.setValueAtTime(BB ? 0 : jB._volume, dB.ctx.currentTime);
          for (var zB = 0; zB < jB._howls.length; zB++)
            if (!jB._howls[zB]._webAudio)
              for (var QB = jB._howls[zB]._getSoundIds(), nB = 0; nB < QB.length; nB++) {
                var IB = jB._howls[zB]._soundById(QB[nB]);
                IB && IB._node && (IB._node.muted = !!BB || IB._muted)
              }
          return jB
        },
        stop: function() {
          for (var BB = this || dB, jB = 0; jB < BB._howls.length; jB++) BB._howls[jB].stop();
          return BB
        },
        unload: function() {
          for (var BB = this || dB, jB = BB._howls.length - 1; jB >= 0; jB--) BB._howls[jB].unload();
          return BB.usingWebAudio && BB.ctx && "undefined" !== typeof BB.ctx.close && (BB.ctx.close(), BB.ctx = null, sB()), BB
        },
        codecs: function(BB) {
          return (this || dB)._codecs[BB.replace(/^x-/, "")]
        },
        _setup: function() {
          var BB = this || dB;
          if (BB.state = BB.ctx && BB.ctx.state || "suspended", BB._autoSuspend(), !BB.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (BB._canPlayEvent = "canplay")
            } catch (jB) {
              BB.noAudio = !0
            } else BB.noAudio = !0;
          try {
            (new Audio).muted && (BB.noAudio = !0)
          } catch (jB) {}
          return BB.noAudio || BB._setupCodecs(), BB
        },
        _setupCodecs: function() {
          var BB = this || dB,
            jB = null;
          try {
            jB = "undefined" !== typeof Audio ? new Audio : null
          } catch (aB) {
            return BB
          }
          if (!jB || "function" !== typeof jB.canPlayType) return BB;
          var zB = jB.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            QB = BB._navigator ? BB._navigator.userAgent : "",
            nB = QB.match(/OPR\/([0-6].)/g),
            IB = nB && parseInt(nB[0].split("/")[1], 10) < 33,
            NB = -1 !== QB.indexOf("Safari") && -1 === QB.indexOf("Chrome"),
            uB = QB.match(/Version\/(.*?) /),
            UB = NB && uB && parseInt(uB[1], 10) < 15;
          return BB._codecs = {
            mp3: !(IB || !zB && !jB.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!zB,
            opus: !!jB.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!jB.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!jB.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(jB.canPlayType('audio/wav; codecs="1"') || jB.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!jB.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!jB.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(jB.canPlayType("audio/x-m4a;") || jB.canPlayType("audio/m4a;") || jB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(jB.canPlayType("audio/x-m4b;") || jB.canPlayType("audio/m4b;") || jB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(jB.canPlayType("audio/x-mp4;") || jB.canPlayType("audio/mp4;") || jB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(UB || !jB.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(UB || !jB.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!jB.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(jB.canPlayType("audio/x-flac;") || jB.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, BB
        },
        _unlockAudio: function() {
          var BB = this || dB;
          if (!BB._audioUnlocked && BB.ctx) {
            BB._audioUnlocked = !1, BB.autoUnlock = !1, BB._mobileUnloaded || 44100 === BB.ctx.sampleRate || (BB._mobileUnloaded = !0, BB.unload()), BB._scratchBuffer = BB.ctx.createBuffer(1, 1, 22050);
            var jB = function(zB) {
              for (; BB._html5AudioPool.length < BB.html5PoolSize;) try {
                var QB = new Audio;
                QB._unlocked = !0, BB._releaseHtml5Audio(QB)
              } catch (zB) {
                BB.noAudio = !0;
                break
              }
              for (var nB = 0; nB < BB._howls.length; nB++)
                if (!BB._howls[nB]._webAudio)
                  for (var dB = BB._howls[nB]._getSoundIds(), IB = 0; IB < dB.length; IB++) {
                    var NB = BB._howls[nB]._soundById(dB[IB]);
                    NB && NB._node && !NB._node._unlocked && (NB._node._unlocked = !0, NB._node.load())
                  }
              BB._autoResume();
              var uB = BB.ctx.createBufferSource();
              uB.buffer = BB._scratchBuffer, uB.connect(BB.ctx.destination), "undefined" === typeof uB.start ? uB.noteOn(0) : uB.start(0), "function" === typeof BB.ctx.resume && BB.ctx.resume(), uB.onended = function() {
                uB.disconnect(0), BB._audioUnlocked = !0, document.removeEventListener("touchstart", jB, !0), document.removeEventListener("touchend", jB, !0), document.removeEventListener("click", jB, !0), document.removeEventListener("keydown", jB, !0);
                for (var zB = 0; zB < BB._howls.length; zB++) BB._howls[zB]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", jB, !0), document.addEventListener("touchend", jB, !0), document.addEventListener("click", jB, !0), document.addEventListener("keydown", jB, !0), BB
          }
        },
        _obtainHtml5Audio: function() {
          var BB = this || dB;
          if (BB._html5AudioPool.length) return BB._html5AudioPool.pop();
          var jB = (new Audio).play();
          return jB && "undefined" !== typeof Promise && (jB instanceof Promise || "function" === typeof jB.then) && jB.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(BB) {
          var jB = this || dB;
          return BB._unlocked && jB._html5AudioPool.push(BB), jB
        },
        _autoSuspend: function() {
          var BB = this;
          if (BB.autoSuspend && BB.ctx && "undefined" !== typeof BB.ctx.suspend && dB.usingWebAudio) {
            for (var jB = 0; jB < BB._howls.length; jB++)
              if (BB._howls[jB]._webAudio)
                for (var zB = 0; zB < BB._howls[jB]._sounds.length; zB++)
                  if (!BB._howls[jB]._sounds[zB].qL) return BB;
            return BB._suspendTimer && clearTimeout(BB._suspendTimer), BB._suspendTimer = setTimeout((function() {
              if (BB.autoSuspend) {
                BB._suspendTimer = null, BB.state = "suspending";
                var jB = function() {
                  BB.state = "suspended", BB._resumeAfterSuspend && (delete BB._resumeAfterSuspend, BB._autoResume())
                };
                BB.ctx.suspend().then(jB, jB)
              }
            }), 3e4), BB
          }
        },
        _autoResume: function() {
          var BB = this;
          if (BB.ctx && "undefined" !== typeof BB.ctx.resume && dB.usingWebAudio) return "running" === BB.state && "interrupted" !== BB.ctx.state && BB._suspendTimer ? (clearTimeout(BB._suspendTimer), BB._suspendTimer = null) : "suspended" === BB.state || "running" === BB.state && "interrupted" === BB.ctx.state ? (BB.ctx.resume().then((function() {
            BB.state = "running";
            for (var jB = 0; jB < BB._howls.length; jB++) BB._howls[jB]._emit("resume")
          })), BB._suspendTimer && (clearTimeout(BB._suspendTimer), BB._suspendTimer = null)) : "suspending" === BB.state && (BB._resumeAfterSuspend = !0), BB
        }
      };
      var dB = new nB,
        IB = function(BB) {
          BB.src && 0 !== BB.src.length ? this.init(BB) : console.error("An array of source files must be passed with any new Howl.")
        };
      IB.prototype = {
        init: function(BB) {
          var jB = this;
          return dB.ctx || sB(), jB._autoplay = BB.autoplay || !1, jB._format = "string" !== typeof BB.format ? BB.format : [BB.format], jB._html5 = BB.html5 || !1, jB._muted = BB.mute || !1, jB._loop = BB.loop || !1, jB._pool = BB.pool || 5, jB._preload = "boolean" !== typeof BB.preload && "metadata" !== BB.preload || BB.preload, jB._rate = BB.rate || 1, jB._sprite = BB.sprite || {}, jB._src = "string" !== typeof BB.src ? BB.src : [BB.src], jB._volume = void 0 !== BB.volume ? BB.volume : 1, jB._xhr = {
            method: BB.xhr && BB.xhr.method ? BB.xhr.method : "GET",
            headers: BB.xhr && BB.xhr.headers ? BB.xhr.headers : null,
            withCredentials: !(!BB.xhr || !BB.xhr.withCredentials) && BB.xhr.withCredentials
          }, jB._duration = 0, jB._state = "unloaded", jB._sounds = [], jB._endTimers = {}, jB._queue = [], jB._playLock = !1, jB._onend = BB.onend ? [{
            kJ: BB.onend
          }] : [], jB._onfade = BB.onfade ? [{
            kJ: BB.onfade
          }] : [], jB._onload = BB.onload ? [{
            kJ: BB.onload
          }] : [], jB._onloaderror = BB.onloaderror ? [{
            kJ: BB.onloaderror
          }] : [], jB._onplayerror = BB.onplayerror ? [{
            kJ: BB.onplayerror
          }] : [], jB._onpause = BB.onpause ? [{
            kJ: BB.onpause
          }] : [], jB._onplay = BB.onplay ? [{
            kJ: BB.onplay
          }] : [], jB._onstop = BB.onstop ? [{
            kJ: BB.onstop
          }] : [], jB._onmute = BB.onmute ? [{
            kJ: BB.onmute
          }] : [], jB._onvolume = BB.onvolume ? [{
            kJ: BB.onvolume
          }] : [], jB._onrate = BB.onrate ? [{
            kJ: BB.onrate
          }] : [], jB._onseek = BB.onseek ? [{
            kJ: BB.onseek
          }] : [], jB._onunlock = BB.onunlock ? [{
            kJ: BB.onunlock
          }] : [], jB._onresume = [], jB._webAudio = dB.usingWebAudio && !jB._html5, "undefined" !== typeof dB.ctx && dB.ctx && dB.autoUnlock && dB._unlockAudio(), dB._howls.push(jB), jB._autoplay && jB._queue.push({
            event: "play",
            action: function() {
              jB.play()
            }
          }), jB._preload && "none" !== jB._preload && jB.load(), jB
        },
        load: function() {
          var BB = this,
            jB = null;
          if (dB.noAudio) BB._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof BB._src && (BB._src = [BB._src]);
            for (var zB = 0; zB < BB._src.length; zB++) {
              var QB, nB;
              if (BB._format && BB._format[zB]) QB = BB._format[zB];
              else {
                if ("string" !== typeof(nB = BB._src[zB])) {
                  BB._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(QB = /^data:audio\/([^;,]+);/i.exec(nB)) || (QB = /\.([^.]+)$/.exec(nB.split("?", 1)[0])), QB && (QB = QB[1].toLowerCase())
              }
              if (QB || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), QB && dB.codecs(QB)) {
                jB = BB._src[zB];
                break
              }
            }
            if (jB) return BB._src = jB, BB._state = "loading", "https:" === window.location.protocol && "http:" === jB.slice(0, 5) && (BB._html5 = !0, BB._webAudio = !1), new NB(BB), BB._webAudio && UB(BB), BB;
            BB._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(BB, jB) {
          var zB = this,
            QB = null;
          if ("number" === typeof BB) QB = BB, BB = null;
          else {
            if ("string" === typeof BB && "loaded" === zB._state && !zB._sprite[BB]) return null;
            if ("undefined" === typeof BB && (BB = "__default", !zB._playLock)) {
              for (var nB = 0, IB = 0; IB < zB._sounds.length; IB++) zB._sounds[IB].qL && !zB._sounds[IB]._ended && (nB++, QB = zB._sounds[IB]._id);
              1 === nB ? BB = null : QB = null
            }
          }
          var NB = QB ? zB._soundById(QB) : zB._inactiveSound();
          if (!NB) return null;
          if (QB && !BB && (BB = NB._sprite || "__default"), "loaded" !== zB._state) {
            NB._sprite = BB, NB._ended = !1;
            var uB = NB._id;
            return zB._queue.push({
              event: "play",
              action: function() {
                zB.play(uB)
              }
            }), uB
          }
          if (QB && !NB.qL) return jB || zB._loadQueue("play"), NB._id;
          zB._webAudio && dB._autoResume();
          var UB = Math.max(0, NB._seek > 0 ? NB._seek : zB._sprite[BB][0] / 1e3),
            aB = Math.max(0, (zB._sprite[BB][0] + zB._sprite[BB][1]) / 1e3 - UB),
            pB = 1e3 * aB / Math.abs(NB._rate),
            rB = zB._sprite[BB][0] / 1e3,
            sB = (zB._sprite[BB][0] + zB._sprite[BB][1]) / 1e3;
          NB._sprite = BB, NB._ended = !1;
          var JB = function() {
            NB.qL = !1, NB._seek = UB, NB._start = rB, NB._stop = sB, NB._loop = !(!NB._loop && !zB._sprite[BB][2])
          };
          if (!(UB >= sB)) {
            var mB = NB._node;
            if (zB._webAudio) {
              var yB = function() {
                zB._playLock = !1, JB(), zB._refreshBuffer(NB);
                var BB = NB._muted || zB._muted ? 0 : NB._volume;
                mB.gain.setValueAtTime(BB, dB.ctx.currentTime), NB._playStart = dB.ctx.currentTime, "undefined" === typeof mB.bufferSource.start ? NB._loop ? mB.bufferSource.noteGrainOn(0, UB, 86400) : mB.bufferSource.noteGrainOn(0, UB, aB) : NB._loop ? mB.bufferSource.start(0, UB, 86400) : mB.bufferSource.start(0, UB, aB), pB !== 1 / 0 && (zB._endTimers[NB._id] = setTimeout(zB._ended.bind(zB, NB), pB)), jB || setTimeout((function() {
                  zB._emit("play", NB._id), zB._loadQueue()
                }), 0)
              };
              "running" === dB.state && "interrupted" !== dB.ctx.state ? yB() : (zB._playLock = !0, zB.once("resume", yB), zB._clearTimer(NB._id))
            } else {
              var kB = function() {
                mB.currentTime = UB, mB.muted = NB._muted || zB._muted || dB._muted || mB.muted, mB.volume = NB._volume * dB.volume(), mB.playbackRate = NB._rate;
                try {
                  var QB = mB.play();
                  if (QB && "undefined" !== typeof Promise && (QB instanceof Promise || "function" === typeof QB.then) ? (zB._playLock = !0, JB(), QB.then((function() {
                      zB._playLock = !1, mB._unlocked = !0, jB ? zB._loadQueue() : zB._emit("play", NB._id)
                    })).catch((function() {
                      zB._playLock = !1, zB._emit("playerror", NB._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), NB._ended = !0, NB.qL = !0
                    }))) : jB || (zB._playLock = !1, JB(), zB._emit("play", NB._id)), mB.playbackRate = NB._rate, mB.paused) return void zB._emit("playerror", NB._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== BB || NB._loop ? zB._endTimers[NB._id] = setTimeout(zB._ended.bind(zB, NB), pB) : (zB._endTimers[NB._id] = function() {
                    zB._ended(NB), mB.removeEventListener("ended", zB._endTimers[NB._id], !1)
                  }, mB.addEventListener("ended", zB._endTimers[NB._id], !1))
                } catch (nB) {
                  zB._emit("playerror", NB._id, nB)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === mB.src && (mB.src = zB._src, mB.load());
              var GB = window && window.ejecta || !mB.readyState && dB._navigator.isCocoonJS;
              if (mB.readyState >= 3 || GB) kB();
              else {
                zB._playLock = !0, zB._state = "loading";
                var LB = function() {
                  zB._state = "loaded", kB(), mB.removeEventListener(dB._canPlayEvent, LB, !1)
                };
                mB.addEventListener(dB._canPlayEvent, LB, !1), zB._clearTimer(NB._id)
              }
            }
            return NB._id
          }
          zB._ended(NB)
        },
        pause: function(BB) {
          var jB = this;
          if ("loaded" !== jB._state || jB._playLock) return jB._queue.push({
            event: "pause",
            action: function() {
              jB.pause(BB)
            }
          }), jB;
          for (var zB = jB._getSoundIds(BB), QB = 0; QB < zB.length; QB++) {
            jB._clearTimer(zB[QB]);
            var nB = jB._soundById(zB[QB]);
            if (nB && !nB.qL && (nB._seek = jB.seek(zB[QB]), nB._rateSeek = 0, nB.qL = !0, jB._stopFade(zB[QB]), nB._node))
              if (jB._webAudio) {
                if (!nB._node.bufferSource) continue;
                "undefined" === typeof nB._node.bufferSource.stop ? nB._node.bufferSource.noteOff(0) : nB._node.bufferSource.stop(0), jB._cleanBuffer(nB._node)
              } else isNaN(nB._node.duration) && nB._node.duration !== 1 / 0 || nB._node.pause();
            arguments[1] || jB._emit("pause", nB ? nB._id : null)
          }
          return jB
        },
        stop: function(BB, jB) {
          var zB = this;
          if ("loaded" !== zB._state || zB._playLock) return zB._queue.push({
            event: "stop",
            action: function() {
              zB.stop(BB)
            }
          }), zB;
          for (var QB = zB._getSoundIds(BB), nB = 0; nB < QB.length; nB++) {
            zB._clearTimer(QB[nB]);
            var dB = zB._soundById(QB[nB]);
            dB && (dB._seek = dB._start || 0, dB._rateSeek = 0, dB.qL = !0, dB._ended = !0, zB._stopFade(QB[nB]), dB._node && (zB._webAudio ? dB._node.bufferSource && ("undefined" === typeof dB._node.bufferSource.stop ? dB._node.bufferSource.noteOff(0) : dB._node.bufferSource.stop(0), zB._cleanBuffer(dB._node)) : isNaN(dB._node.duration) && dB._node.duration !== 1 / 0 || (dB._node.currentTime = dB._start || 0, dB._node.pause(), dB._node.duration === 1 / 0 && zB._clearSound(dB._node))), jB || zB._emit("stop", dB._id))
          }
          return zB
        },
        mute: function(BB, jB) {
          var zB = this;
          if ("loaded" !== zB._state || zB._playLock) return zB._queue.push({
            event: "mute",
            action: function() {
              zB.mute(BB, jB)
            }
          }), zB;
          if ("undefined" === typeof jB) {
            if ("boolean" !== typeof BB) return zB._muted;
            zB._muted = BB
          }
          for (var QB = zB._getSoundIds(jB), nB = 0; nB < QB.length; nB++) {
            var IB = zB._soundById(QB[nB]);
            IB && (IB._muted = BB, IB._interval && zB._stopFade(IB._id), zB._webAudio && IB._node ? IB._node.gain.setValueAtTime(BB ? 0 : IB._volume, dB.ctx.currentTime) : IB._node && (IB._node.muted = !!dB._muted || BB), zB._emit("mute", IB._id))
          }
          return zB
        },
        volume: function() {
          var BB, jB, zB, QB = this,
            nB = arguments;
          if (0 === nB.length) return QB._volume;
          if (1 === nB.length || 2 === nB.length && "undefined" === typeof nB[1] ? QB._getSoundIds().indexOf(nB[0]) >= 0 ? jB = parseInt(nB[0], 10) : BB = parseFloat(nB[0]) : nB.length >= 2 && (BB = parseFloat(nB[0]), jB = parseInt(nB[1], 10)), !("undefined" !== typeof BB && BB >= 0 && BB <= 1)) return (zB = jB ? QB._soundById(jB) : QB._sounds[0]) ? zB._volume : 0;
          if ("loaded" !== QB._state || QB._playLock) return QB._queue.push({
            event: "volume",
            action: function() {
              QB.volume.apply(QB, nB)
            }
          }), QB;
          "undefined" === typeof jB && (QB._volume = BB), jB = QB._getSoundIds(jB);
          for (var IB = 0; IB < jB.length; IB++)(zB = QB._soundById(jB[IB])) && (zB._volume = BB, nB[2] || QB._stopFade(jB[IB]), QB._webAudio && zB._node && !zB._muted ? zB._node.gain.setValueAtTime(BB, dB.ctx.currentTime) : zB._node && !zB._muted && (zB._node.volume = BB * dB.volume()), QB._emit("volume", zB._id));
          return QB
        },
        fade: function(BB, jB, zB, QB) {
          var nB = this;
          if ("loaded" !== nB._state || nB._playLock) return nB._queue.push({
            event: "fade",
            action: function() {
              nB.fade(BB, jB, zB, QB)
            }
          }), nB;
          BB = Math.min(Math.max(0, parseFloat(BB)), 1), jB = Math.min(Math.max(0, parseFloat(jB)), 1), zB = parseFloat(zB), nB.volume(BB, QB);
          for (var IB = nB._getSoundIds(QB), NB = 0; NB < IB.length; NB++) {
            var uB = nB._soundById(IB[NB]);
            if (uB) {
              if (QB || nB._stopFade(IB[NB]), nB._webAudio && !uB._muted) {
                var UB = dB.ctx.currentTime,
                  aB = UB + zB / 1e3;
                uB._volume = BB, uB._node.gain.setValueAtTime(BB, UB), uB._node.gain.linearRampToValueAtTime(jB, aB)
              }
              nB._startFadeInterval(uB, BB, jB, zB, IB[NB], "undefined" === typeof QB)
            }
          }
          return nB
        },
        _startFadeInterval: function(BB, jB, zB, QB, nB, dB) {
          var IB = this,
            NB = jB,
            uB = zB - jB,
            UB = Math.abs(uB / .01),
            aB = Math.max(4, UB > 0 ? QB / UB : QB),
            pB = Date.now();
          BB._fadeTo = zB, BB._interval = setInterval((function() {
            var nB = (Date.now() - pB) / QB;
            pB = Date.now(), NB += uB * nB, NB = Math.round(100 * NB) / 100, NB = uB < 0 ? Math.max(zB, NB) : Math.min(zB, NB), IB._webAudio ? BB._volume = NB : IB.volume(NB, BB._id, !0), dB && (IB._volume = NB), (zB < jB && NB <= zB || zB > jB && NB >= zB) && (clearInterval(BB._interval), BB._interval = null, BB._fadeTo = null, IB.volume(zB, BB._id), IB._emit("fade", BB._id))
          }), aB)
        },
        _stopFade: function(BB) {
          var jB = this,
            zB = jB._soundById(BB);
          return zB && zB._interval && (jB._webAudio && zB._node.gain.cancelScheduledValues(dB.ctx.currentTime), clearInterval(zB._interval), zB._interval = null, jB.volume(zB._fadeTo, BB), zB._fadeTo = null, jB._emit("fade", BB)), jB
        },
        loop: function() {
          var BB, jB, zB, QB = this,
            nB = arguments;
          if (0 === nB.length) return QB._loop;
          if (1 === nB.length) {
            if ("boolean" !== typeof nB[0]) return !!(zB = QB._soundById(parseInt(nB[0], 10))) && zB._loop;
            BB = nB[0], QB._loop = BB
          } else 2 === nB.length && (BB = nB[0], jB = parseInt(nB[1], 10));
          for (var dB = QB._getSoundIds(jB), IB = 0; IB < dB.length; IB++)(zB = QB._soundById(dB[IB])) && (zB._loop = BB, QB._webAudio && zB._node && zB._node.bufferSource && (zB._node.bufferSource.loop = BB, BB && (zB._node.bufferSource.loopStart = zB._start || 0, zB._node.bufferSource.loopEnd = zB._stop, QB.playing(dB[IB]) && (QB.pause(dB[IB], !0), QB.play(dB[IB], !0)))));
          return QB
        },
        rate: function() {
          var BB, jB, zB, QB = this,
            nB = arguments;
          if (0 === nB.length) jB = QB._sounds[0]._id;
          else if (1 === nB.length) {
            QB._getSoundIds().indexOf(nB[0]) >= 0 ? jB = parseInt(nB[0], 10) : BB = parseFloat(nB[0])
          } else 2 === nB.length && (BB = parseFloat(nB[0]), jB = parseInt(nB[1], 10));
          if ("number" !== typeof BB) return (zB = QB._soundById(jB)) ? zB._rate : QB._rate;
          if ("loaded" !== QB._state || QB._playLock) return QB._queue.push({
            event: "rate",
            action: function() {
              QB.rate.apply(QB, nB)
            }
          }), QB;
          "undefined" === typeof jB && (QB._rate = BB), jB = QB._getSoundIds(jB);
          for (var IB = 0; IB < jB.length; IB++)
            if (zB = QB._soundById(jB[IB])) {
              QB.playing(jB[IB]) && (zB._rateSeek = QB.seek(jB[IB]), zB._playStart = QB._webAudio ? dB.ctx.currentTime : zB._playStart), zB._rate = BB, QB._webAudio && zB._node && zB._node.bufferSource ? zB._node.bufferSource.playbackRate.setValueAtTime(BB, dB.ctx.currentTime) : zB._node && (zB._node.playbackRate = BB);
              var NB = QB.seek(jB[IB]),
                uB = 1e3 * ((QB._sprite[zB._sprite][0] + QB._sprite[zB._sprite][1]) / 1e3 - NB) / Math.abs(zB._rate);
              !QB._endTimers[jB[IB]] && zB.qL || (QB._clearTimer(jB[IB]), QB._endTimers[jB[IB]] = setTimeout(QB._ended.bind(QB, zB), uB)), QB._emit("rate", zB._id)
            } return QB
        },
        seek: function() {
          var BB, jB, zB = this,
            QB = arguments;
          if (0 === QB.length) zB._sounds.length && (jB = zB._sounds[0]._id);
          else if (1 === QB.length) {
            zB._getSoundIds().indexOf(QB[0]) >= 0 ? jB = parseInt(QB[0], 10) : zB._sounds.length && (jB = zB._sounds[0]._id, BB = parseFloat(QB[0]))
          } else 2 === QB.length && (BB = parseFloat(QB[0]), jB = parseInt(QB[1], 10));
          if ("undefined" === typeof jB) return 0;
          if ("number" === typeof BB && ("loaded" !== zB._state || zB._playLock)) return zB._queue.push({
            event: "seek",
            action: function() {
              zB.seek.apply(zB, QB)
            }
          }), zB;
          var nB = zB._soundById(jB);
          if (nB) {
            if (!("number" === typeof BB && BB >= 0)) {
              if (zB._webAudio) {
                var IB = zB.playing(jB) ? dB.ctx.currentTime - nB._playStart : 0,
                  NB = nB._rateSeek ? nB._rateSeek - nB._seek : 0;
                return nB._seek + (NB + IB * Math.abs(nB._rate))
              }
              return nB._node.currentTime
            }
            var uB = zB.playing(jB);
            uB && zB.pause(jB, !0), nB._seek = BB, nB._ended = !1, zB._clearTimer(jB), zB._webAudio || !nB._node || isNaN(nB._node.duration) || (nB._node.currentTime = BB);
            var UB = function() {
              uB && zB.play(jB, !0), zB._emit("seek", jB)
            };
            if (uB && !zB._webAudio) {
              var aB = function() {
                zB._playLock ? setTimeout(aB, 0) : UB()
              };
              setTimeout(aB, 0)
            } else UB()
          }
          return zB
        },
        playing: function(BB) {
          var jB = this;
          if ("number" === typeof BB) {
            var zB = jB._soundById(BB);
            return !!zB && !zB.qL
          }
          for (var QB = 0; QB < jB._sounds.length; QB++)
            if (!jB._sounds[QB].qL) return !0;
          return !1
        },
        duration: function(BB) {
          var jB = this,
            zB = jB._duration,
            QB = jB._soundById(BB);
          return QB && (zB = jB._sprite[QB._sprite][1] / 1e3), zB
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var BB = this, jB = BB._sounds, zB = 0; zB < jB.length; zB++) jB[zB].qL || BB.stop(jB[zB]._id), BB._webAudio || (BB._clearSound(jB[zB]._node), jB[zB]._node.removeEventListener("error", jB[zB]._errorFn, !1), jB[zB]._node.removeEventListener(dB._canPlayEvent, jB[zB]._loadFn, !1), jB[zB]._node.removeEventListener("ended", jB[zB]._endFn, !1), dB._releaseHtml5Audio(jB[zB]._node)), delete jB[zB]._node, BB._clearTimer(jB[zB]._id);
          var QB = dB._howls.indexOf(BB);
          QB >= 0 && dB._howls.splice(QB, 1);
          var nB = !0;
          for (zB = 0; zB < dB._howls.length; zB++)
            if (dB._howls[zB]._src === BB._src || BB._src.indexOf(dB._howls[zB]._src) >= 0) {
              nB = !1;
              break
            } return uB && nB && delete uB[BB._src], dB.noAudio = !1, BB._state = "unloaded", BB._sounds = [], BB = null, null
        },
        on: function(BB, jB, zB, QB) {
          var nB = this["_on" + BB];
          return "function" === typeof jB && nB.push(QB ? {
            id: zB,
            kJ: jB,
            once: QB
          } : {
            id: zB,
            kJ: jB
          }), this
        },
        off: function(BB, jB, zB) {
          var QB = this,
            nB = QB["_on" + BB],
            dB = 0;
          if ("number" === typeof jB && (zB = jB, jB = null), jB || zB)
            for (dB = 0; dB < nB.length; dB++) {
              var IB = zB === nB[dB].id;
              if (jB === nB[dB].kJ && IB || !jB && IB) {
                nB.splice(dB, 1);
                break
              }
            } else if (BB) QB["_on" + BB] = [];
            else {
              var NB = Object.keys(QB);
              for (dB = 0; dB < NB.length; dB++) 0 === NB[dB].indexOf("_on") && Array.isArray(QB[NB[dB]]) && (QB[NB[dB]] = [])
            } return QB
        },
        once: function(BB, jB, zB) {
          return this.on(BB, jB, zB, 1), this
        },
        _emit: function(BB, jB, zB) {
          for (var QB = this, nB = QB["_on" + BB], dB = nB.length - 1; dB >= 0; dB--) nB[dB].id && nB[dB].id !== jB && "load" !== BB || (setTimeout(function(BB) {
            BB.call(this, jB, zB)
          }.bind(QB, nB[dB].kJ), 0), nB[dB].once && QB.off(BB, nB[dB].kJ, nB[dB].id));
          return QB._loadQueue(BB), QB
        },
        _loadQueue: function(BB) {
          var jB = this;
          if (jB._queue.length > 0) {
            var zB = jB._queue[0];
            zB.event === BB && (jB._queue.shift(), jB._loadQueue()), BB || zB.action()
          }
          return jB
        },
        _ended: function(BB) {
          var jB = this,
            zB = BB._sprite;
          if (!jB._webAudio && BB._node && !BB._node.paused && !BB._node.ended && BB._node.currentTime < BB._stop) return setTimeout(jB._ended.bind(jB, BB), 100), jB;
          var QB = !(!BB._loop && !jB._sprite[zB][2]);
          if (jB._emit("end", BB._id), !jB._webAudio && QB && jB.stop(BB._id, !0).play(BB._id), jB._webAudio && QB) {
            jB._emit("play", BB._id), BB._seek = BB._start || 0, BB._rateSeek = 0, BB._playStart = dB.ctx.currentTime;
            var nB = 1e3 * (BB._stop - BB._start) / Math.abs(BB._rate);
            jB._endTimers[BB._id] = setTimeout(jB._ended.bind(jB, BB), nB)
          }
          return jB._webAudio && !QB && (BB.qL = !0, BB._ended = !0, BB._seek = BB._start || 0, BB._rateSeek = 0, jB._clearTimer(BB._id), jB._cleanBuffer(BB._node), dB._autoSuspend()), jB._webAudio || QB || jB.stop(BB._id, !0), jB
        },
        _clearTimer: function(BB) {
          var jB = this;
          if (jB._endTimers[BB]) {
            if ("function" !== typeof jB._endTimers[BB]) clearTimeout(jB._endTimers[BB]);
            else {
              var zB = jB._soundById(BB);
              zB && zB._node && zB._node.removeEventListener("ended", jB._endTimers[BB], !1)
            }
            delete jB._endTimers[BB]
          }
          return jB
        },
        _soundById: function(BB) {
          for (var jB = this, zB = 0; zB < jB._sounds.length; zB++)
            if (BB === jB._sounds[zB]._id) return jB._sounds[zB];
          return null
        },
        _inactiveSound: function() {
          var BB = this;
          BB._drain();
          for (var jB = 0; jB < BB._sounds.length; jB++)
            if (BB._sounds[jB]._ended) return BB._sounds[jB].reset();
          return new NB(BB)
        },
        _drain: function() {
          var BB = this,
            jB = BB._pool,
            zB = 0,
            QB = 0;
          if (!(BB._sounds.length < jB)) {
            for (QB = 0; QB < BB._sounds.length; QB++) BB._sounds[QB]._ended && zB++;
            for (QB = BB._sounds.length - 1; QB >= 0; QB--) {
              if (zB <= jB) return;
              BB._sounds[QB]._ended && (BB._webAudio && BB._sounds[QB]._node && BB._sounds[QB]._node.disconnect(0), BB._sounds.splice(QB, 1), zB--)
            }
          }
        },
        _getSoundIds: function(BB) {
          if ("undefined" === typeof BB) {
            for (var jB = [], zB = 0; zB < this._sounds.length; zB++) jB.push(this._sounds[zB]._id);
            return jB
          }
          return [BB]
        },
        _refreshBuffer: function(BB) {
          return BB._node.bufferSource = dB.ctx.createBufferSource(), BB._node.bufferSource.buffer = uB[this._src], BB._panner ? BB._node.bufferSource.connect(BB._panner) : BB._node.bufferSource.connect(BB._node), BB._node.bufferSource.loop = BB._loop, BB._loop && (BB._node.bufferSource.loopStart = BB._start || 0, BB._node.bufferSource.loopEnd = BB._stop || 0), BB._node.bufferSource.playbackRate.setValueAtTime(BB._rate, dB.ctx.currentTime), this
        },
        _cleanBuffer: function(BB) {
          var jB = dB._navigator && dB._navigator.vendor.indexOf("Apple") >= 0;
          if (dB._scratchBuffer && BB.bufferSource && (BB.bufferSource.onended = null, BB.bufferSource.disconnect(0), jB)) try {
            BB.bufferSource.buffer = dB._scratchBuffer
          } catch (zB) {}
          return BB.bufferSource = null, this
        },
        _clearSound: function(BB) {
          /MSIE |Trident\//.test(dB._navigator && dB._navigator.userAgent) || (BB.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var NB = function(BB) {
        this._parent = BB, this.init()
      };
      NB.prototype = {
        init: function() {
          var BB = this,
            jB = BB._parent;
          return BB._muted = jB._muted, BB._loop = jB._loop, BB._volume = jB._volume, BB._rate = jB._rate, BB._seek = 0, BB.qL = !0, BB._ended = !0, BB._sprite = "__default", BB._id = ++dB._counter, jB._sounds.push(BB), BB.create(), BB
        },
        create: function() {
          var BB = this,
            jB = BB._parent,
            zB = dB._muted || BB._muted || BB._parent._muted ? 0 : BB._volume;
          return jB._webAudio ? (BB._node = "undefined" === typeof dB.ctx.createGain ? dB.ctx.createGainNode() : dB.ctx.createGain(), BB._node.gain.setValueAtTime(zB, dB.ctx.currentTime), BB._node.paused = !0, BB._node.connect(dB.masterGain)) : dB.noAudio || (BB._node = dB._obtainHtml5Audio(), BB._errorFn = BB._errorListener.bind(BB), BB._node.addEventListener("error", BB._errorFn, !1), BB._loadFn = BB._loadListener.bind(BB), BB._node.addEventListener(dB._canPlayEvent, BB._loadFn, !1), BB._endFn = BB._endListener.bind(BB), BB._node.addEventListener("ended", BB._endFn, !1), BB._node.src = jB._src, BB._node.preload = !0 === jB._preload ? "auto" : jB._preload, BB._node.volume = zB * dB.volume(), BB._node.load()), BB
        },
        reset: function() {
          var BB = this,
            jB = BB._parent;
          return BB._muted = jB._muted, BB._loop = jB._loop, BB._volume = jB._volume, BB._rate = jB._rate, BB._seek = 0, BB._rateSeek = 0, BB.qL = !0, BB._ended = !0, BB._sprite = "__default", BB._id = ++dB._counter, BB
        },
        _errorListener: function() {
          var BB = this;
          BB._parent._emit("loaderror", BB._id, BB._node.error ? BB._node.error.code : 0), BB._node.removeEventListener("error", BB._errorFn, !1)
        },
        _loadListener: function() {
          var BB = this,
            jB = BB._parent;
          jB._duration = Math.ceil(10 * BB._node.duration) / 10, 0 === Object.keys(jB._sprite).length && (jB._sprite = {
            __default: [0, 1e3 * jB._duration]
          }), "loaded" !== jB._state && (jB._state = "loaded", jB._emit("load"), jB._loadQueue()), BB._node.removeEventListener(dB._canPlayEvent, BB._loadFn, !1)
        },
        _endListener: function() {
          var BB = this,
            jB = BB._parent;
          jB._duration === 1 / 0 && (jB._duration = Math.ceil(10 * BB._node.duration) / 10, jB._sprite.__default[1] === 1 / 0 && (jB._sprite.__default[1] = 1e3 * jB._duration), jB._ended(BB)), BB._node.removeEventListener("ended", BB._endFn, !1)
        }
      };
      var uB = {},
        UB = function(BB) {
          var jB = BB._src;
          if (uB[jB]) return BB._duration = uB[jB].duration, void rB(BB);
          if (/^data:[^;]+;base64,/.test(jB)) {
            for (var zB = atob(jB.split(",")[1]), QB = new Uint8Array(zB.length), nB = 0; nB < zB.length; ++nB) QB[nB] = zB.charCodeAt(nB);
            pB(QB.buffer, BB)
          } else {
            var dB = new XMLHttpRequest;
            dB.open(BB._xhr.method, jB, !0), dB.withCredentials = BB._xhr.withCredentials, dB.responseType = "arraybuffer", BB._xhr.headers && Object.keys(BB._xhr.headers).forEach((function(jB) {
              dB.setRequestHeader(jB, BB._xhr.headers[jB])
            })), dB.onload = function() {
              var jB = (dB.status + "")[0];
              "0" === jB || "2" === jB || "3" === jB ? pB(dB.response, BB) : BB._emit("loaderror", null, "Failed loading audio file with status: " + dB.status + ".")
            }, dB.onerror = function() {
              BB._webAudio && (BB._html5 = !0, BB._webAudio = !1, BB._sounds = [], delete uB[jB], BB.load())
            }, aB(dB)
          }
        },
        aB = function(BB) {
          try {
            BB.send()
          } catch (jB) {
            BB.onerror()
          }
        },
        pB = function(BB, jB) {
          var zB = function() {
              jB._emit("loaderror", null, "Decoding audio data failed.")
            },
            QB = function(BB) {
              BB && jB._sounds.length > 0 ? (uB[jB._src] = BB, rB(jB, BB)) : zB()
            };
          "undefined" !== typeof Promise && 1 === dB.ctx.decodeAudioData.length ? dB.ctx.decodeAudioData(BB).then(QB).catch(zB) : dB.ctx.decodeAudioData(BB, QB, zB)
        },
        rB = function(BB, jB) {
          jB && !BB._duration && (BB._duration = jB.duration), 0 === Object.keys(BB._sprite).length && (BB._sprite = {
            __default: [0, 1e3 * BB._duration]
          }), "loaded" !== BB._state && (BB._state = "loaded", BB._emit("load"), BB._loadQueue())
        },
        sB = function() {
          if (dB.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? dB.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? dB.ctx = new webkitAudioContext : dB.usingWebAudio = !1
            } catch (nB) {
              dB.usingWebAudio = !1
            }
            dB.ctx || (dB.usingWebAudio = !1);
            var BB = /iP(hone|od|ad)/.test(dB._navigator && dB._navigator.platform),
              jB = dB._navigator && dB._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              zB = jB ? parseInt(jB[1], 10) : null;
            if (BB && zB && zB < 9) {
              var QB = /safari/.test(dB._navigator && dB._navigator.userAgent.toLowerCase());
              dB._navigator && !QB && (dB.usingWebAudio = !1)
            }
            dB.usingWebAudio && (dB.masterGain = "undefined" === typeof dB.ctx.createGain ? dB.ctx.createGainNode() : dB.ctx.createGain(), dB.masterGain.gain.setValueAtTime(dB._muted ? 0 : dB._volume, dB.ctx.currentTime), dB.masterGain.connect(dB.ctx.destination)), dB._setup()
          }
        };
      void 0 === (QB = function() {
        return {
          Howler: dB,
          Howl: IB
        }
      }.apply(jB, [])) || (BB.exports = QB), jB.Howler = dB, jB.Howl = IB, "undefined" !== typeof zB.g ? (zB.g.HowlerGlobal = nB, zB.g.Howler = dB, zB.g.Howl = IB, zB.g.Sound = NB) : "undefined" !== typeof window && (window.HowlerGlobal = nB, window.Howler = dB, window.Howl = IB, window.Sound = NB)
    }(),
    function() {
      var BB;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(BB) {
        var jB = this;
        if (!jB.ctx || !jB.ctx.listener) return jB;
        for (var zB = jB._howls.length - 1; zB >= 0; zB--) jB._howls[zB].stereo(BB);
        return jB
      }, HowlerGlobal.prototype.pos = function(BB, jB, zB) {
        var QB = this;
        return QB.ctx && QB.ctx.listener ? (jB = "number" !== typeof jB ? QB._pos[1] : jB, zB = "number" !== typeof zB ? QB._pos[2] : zB, "number" !== typeof BB ? QB._pos : (QB._pos = [BB, jB, zB], "undefined" !== typeof QB.ctx.listener.positionX ? (QB.ctx.listener.positionX.setTargetAtTime(QB._pos[0], Howler.ctx.currentTime, .1), QB.ctx.listener.positionY.setTargetAtTime(QB._pos[1], Howler.ctx.currentTime, .1), QB.ctx.listener.positionZ.setTargetAtTime(QB._pos[2], Howler.ctx.currentTime, .1)) : QB.ctx.listener.setPosition(QB._pos[0], QB._pos[1], QB._pos[2]), QB)) : QB
      }, HowlerGlobal.prototype.orientation = function(BB, jB, zB, QB, nB, dB) {
        var IB = this;
        if (!IB.ctx || !IB.ctx.listener) return IB;
        var NB = IB._orientation;
        return jB = "number" !== typeof jB ? NB[1] : jB, zB = "number" !== typeof zB ? NB[2] : zB, QB = "number" !== typeof QB ? NB[3] : QB, nB = "number" !== typeof nB ? NB[4] : nB, dB = "number" !== typeof dB ? NB[5] : dB, "number" !== typeof BB ? NB : (IB._orientation = [BB, jB, zB, QB, nB, dB], "undefined" !== typeof IB.ctx.listener.forwardX ? (IB.ctx.listener.forwardX.setTargetAtTime(BB, Howler.ctx.currentTime, .1), IB.ctx.listener.forwardY.setTargetAtTime(jB, Howler.ctx.currentTime, .1), IB.ctx.listener.forwardZ.setTargetAtTime(zB, Howler.ctx.currentTime, .1), IB.ctx.listener.upX.setTargetAtTime(QB, Howler.ctx.currentTime, .1), IB.ctx.listener.upY.setTargetAtTime(nB, Howler.ctx.currentTime, .1), IB.ctx.listener.upZ.setTargetAtTime(dB, Howler.ctx.currentTime, .1)) : IB.ctx.listener.setOrientation(BB, jB, zB, QB, nB, dB), IB)
      }, Howl.prototype.init = (BB = Howl.prototype.init, function(jB) {
        var zB = this;
        return zB._orientation = jB.orientation || [1, 0, 0], zB._stereo = jB.stereo || null, zB._pos = jB.pos || null, zB._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof jB.coneInnerAngle ? jB.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof jB.coneOuterAngle ? jB.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof jB.coneOuterGain ? jB.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof jB.distanceModel ? jB.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof jB.maxDistance ? jB.maxDistance : 1e4,
          panningModel: "undefined" !== typeof jB.panningModel ? jB.panningModel : "HRTF",
          refDistance: "undefined" !== typeof jB.refDistance ? jB.refDistance : 1,
          rolloffFactor: "undefined" !== typeof jB.rolloffFactor ? jB.rolloffFactor : 1
        }, zB._onstereo = jB.onstereo ? [{
          kJ: jB.onstereo
        }] : [], zB._onpos = jB.onpos ? [{
          kJ: jB.onpos
        }] : [], zB._onorientation = jB.onorientation ? [{
          kJ: jB.onorientation
        }] : [], BB.call(this, jB)
      }), Howl.prototype.stereo = function(BB, zB) {
        var QB = this;
        if (!QB._webAudio) return QB;
        if ("loaded" !== QB._state) return QB._queue.push({
          event: "stereo",
          action: function() {
            QB.stereo(BB, zB)
          }
        }), QB;
        var nB = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof zB) {
          if ("number" !== typeof BB) return QB._stereo;
          QB._stereo = BB, QB._pos = [BB, 0, 0]
        }
        for (var dB = QB._getSoundIds(zB), IB = 0; IB < dB.length; IB++) {
          var NB = QB._soundById(dB[IB]);
          if (NB) {
            if ("number" !== typeof BB) return NB._stereo;
            NB._stereo = BB, NB._pos = [BB, 0, 0], NB._node && (NB._pannerAttr.panningModel = "equalpower", NB._panner && NB._panner.pan || jB(NB, nB), "spatial" === nB ? "undefined" !== typeof NB._panner.positionX ? (NB._panner.positionX.setValueAtTime(BB, Howler.ctx.currentTime), NB._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), NB._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : NB._panner.setPosition(BB, 0, 0) : NB._panner.pan.setValueAtTime(BB, Howler.ctx.currentTime)), QB._emit("stereo", NB._id)
          }
        }
        return QB
      }, Howl.prototype.pos = function(BB, zB, QB, nB) {
        var dB = this;
        if (!dB._webAudio) return dB;
        if ("loaded" !== dB._state) return dB._queue.push({
          event: "pos",
          action: function() {
            dB.pos(BB, zB, QB, nB)
          }
        }), dB;
        if (zB = "number" !== typeof zB ? 0 : zB, QB = "number" !== typeof QB ? -.5 : QB, "undefined" === typeof nB) {
          if ("number" !== typeof BB) return dB._pos;
          dB._pos = [BB, zB, QB]
        }
        for (var IB = dB._getSoundIds(nB), NB = 0; NB < IB.length; NB++) {
          var uB = dB._soundById(IB[NB]);
          if (uB) {
            if ("number" !== typeof BB) return uB._pos;
            uB._pos = [BB, zB, QB], uB._node && (uB._panner && !uB._panner.pan || jB(uB, "spatial"), "undefined" !== typeof uB._panner.positionX ? (uB._panner.positionX.setValueAtTime(BB, Howler.ctx.currentTime), uB._panner.positionY.setValueAtTime(zB, Howler.ctx.currentTime), uB._panner.positionZ.setValueAtTime(QB, Howler.ctx.currentTime)) : uB._panner.setPosition(BB, zB, QB)), dB._emit("pos", uB._id)
          }
        }
        return dB
      }, Howl.prototype.orientation = function(BB, zB, QB, nB) {
        var dB = this;
        if (!dB._webAudio) return dB;
        if ("loaded" !== dB._state) return dB._queue.push({
          event: "orientation",
          action: function() {
            dB.orientation(BB, zB, QB, nB)
          }
        }), dB;
        if (zB = "number" !== typeof zB ? dB._orientation[1] : zB, QB = "number" !== typeof QB ? dB._orientation[2] : QB, "undefined" === typeof nB) {
          if ("number" !== typeof BB) return dB._orientation;
          dB._orientation = [BB, zB, QB]
        }
        for (var IB = dB._getSoundIds(nB), NB = 0; NB < IB.length; NB++) {
          var uB = dB._soundById(IB[NB]);
          if (uB) {
            if ("number" !== typeof BB) return uB._orientation;
            uB._orientation = [BB, zB, QB], uB._node && (uB._panner || (uB._pos || (uB._pos = dB._pos || [0, 0, -.5]), jB(uB, "spatial")), "undefined" !== typeof uB._panner.orientationX ? (uB._panner.orientationX.setValueAtTime(BB, Howler.ctx.currentTime), uB._panner.orientationY.setValueAtTime(zB, Howler.ctx.currentTime), uB._panner.orientationZ.setValueAtTime(QB, Howler.ctx.currentTime)) : uB._panner.setOrientation(BB, zB, QB)), dB._emit("orientation", uB._id)
          }
        }
        return dB
      }, Howl.prototype.pannerAttr = function() {
        var BB, zB, QB, nB = this,
          dB = arguments;
        if (!nB._webAudio) return nB;
        if (0 === dB.length) return nB._pannerAttr;
        if (1 === dB.length) {
          if ("object" !== typeof dB[0]) return (QB = nB._soundById(parseInt(dB[0], 10))) ? QB._pannerAttr : nB._pannerAttr;
          BB = dB[0], "undefined" === typeof zB && (BB.pannerAttr || (BB.pannerAttr = {
            coneInnerAngle: BB.coneInnerAngle,
            coneOuterAngle: BB.coneOuterAngle,
            coneOuterGain: BB.coneOuterGain,
            distanceModel: BB.distanceModel,
            maxDistance: BB.maxDistance,
            refDistance: BB.refDistance,
            rolloffFactor: BB.rolloffFactor,
            panningModel: BB.panningModel
          }), nB._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof BB.pannerAttr.coneInnerAngle ? BB.pannerAttr.coneInnerAngle : nB._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof BB.pannerAttr.coneOuterAngle ? BB.pannerAttr.coneOuterAngle : nB._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof BB.pannerAttr.coneOuterGain ? BB.pannerAttr.coneOuterGain : nB._coneOuterGain,
            distanceModel: "undefined" !== typeof BB.pannerAttr.distanceModel ? BB.pannerAttr.distanceModel : nB._distanceModel,
            maxDistance: "undefined" !== typeof BB.pannerAttr.maxDistance ? BB.pannerAttr.maxDistance : nB._maxDistance,
            refDistance: "undefined" !== typeof BB.pannerAttr.refDistance ? BB.pannerAttr.refDistance : nB._refDistance,
            rolloffFactor: "undefined" !== typeof BB.pannerAttr.rolloffFactor ? BB.pannerAttr.rolloffFactor : nB._rolloffFactor,
            panningModel: "undefined" !== typeof BB.pannerAttr.panningModel ? BB.pannerAttr.panningModel : nB._panningModel
          })
        } else 2 === dB.length && (BB = dB[0], zB = parseInt(dB[1], 10));
        for (var IB = nB._getSoundIds(zB), NB = 0; NB < IB.length; NB++)
          if (QB = nB._soundById(IB[NB])) {
            var uB = QB._pannerAttr;
            uB = {
              coneInnerAngle: "undefined" !== typeof BB.coneInnerAngle ? BB.coneInnerAngle : uB.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof BB.coneOuterAngle ? BB.coneOuterAngle : uB.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof BB.coneOuterGain ? BB.coneOuterGain : uB.coneOuterGain,
              distanceModel: "undefined" !== typeof BB.distanceModel ? BB.distanceModel : uB.distanceModel,
              maxDistance: "undefined" !== typeof BB.maxDistance ? BB.maxDistance : uB.maxDistance,
              refDistance: "undefined" !== typeof BB.refDistance ? BB.refDistance : uB.refDistance,
              rolloffFactor: "undefined" !== typeof BB.rolloffFactor ? BB.rolloffFactor : uB.rolloffFactor,
              panningModel: "undefined" !== typeof BB.panningModel ? BB.panningModel : uB.panningModel
            };
            var UB = QB._panner;
            UB ? (UB.coneInnerAngle = uB.coneInnerAngle, UB.coneOuterAngle = uB.coneOuterAngle, UB.coneOuterGain = uB.coneOuterGain, UB.distanceModel = uB.distanceModel, UB.maxDistance = uB.maxDistance, UB.refDistance = uB.refDistance, UB.rolloffFactor = uB.rolloffFactor, UB.panningModel = uB.panningModel) : (QB._pos || (QB._pos = nB._pos || [0, 0, -.5]), jB(QB, "spatial"))
          } return nB
      }, Sound.prototype.init = function(BB) {
        return function() {
          var jB = this,
            zB = jB._parent;
          jB._orientation = zB._orientation, jB._stereo = zB._stereo, jB._pos = zB._pos, jB._pannerAttr = zB._pannerAttr, BB.call(this), jB._stereo ? zB.stereo(jB._stereo) : jB._pos && zB.pos(jB._pos[0], jB._pos[1], jB._pos[2], jB._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(BB) {
        return function() {
          var jB = this,
            zB = jB._parent;
          return jB._orientation = zB._orientation, jB._stereo = zB._stereo, jB._pos = zB._pos, jB._pannerAttr = zB._pannerAttr, jB._stereo ? zB.stereo(jB._stereo) : jB._pos ? zB.pos(jB._pos[0], jB._pos[1], jB._pos[2], jB._id) : jB._panner && (jB._panner.disconnect(0), jB._panner = void 0, zB._refreshBuffer(jB)), BB.call(this)
        }
      }(Sound.prototype.reset);
      var jB = function(BB, jB) {
        "spatial" === (jB = jB || "spatial") ? (BB._panner = Howler.ctx.createPanner(), BB._panner.coneInnerAngle = BB._pannerAttr.coneInnerAngle, BB._panner.coneOuterAngle = BB._pannerAttr.coneOuterAngle, BB._panner.coneOuterGain = BB._pannerAttr.coneOuterGain, BB._panner.distanceModel = BB._pannerAttr.distanceModel, BB._panner.maxDistance = BB._pannerAttr.maxDistance, BB._panner.refDistance = BB._pannerAttr.refDistance, BB._panner.rolloffFactor = BB._pannerAttr.rolloffFactor, BB._panner.panningModel = BB._pannerAttr.panningModel, "undefined" !== typeof BB._panner.positionX ? (BB._panner.positionX.setValueAtTime(BB._pos[0], Howler.ctx.currentTime), BB._panner.positionY.setValueAtTime(BB._pos[1], Howler.ctx.currentTime), BB._panner.positionZ.setValueAtTime(BB._pos[2], Howler.ctx.currentTime)) : BB._panner.setPosition(BB._pos[0], BB._pos[1], BB._pos[2]), "undefined" !== typeof BB._panner.orientationX ? (BB._panner.orientationX.setValueAtTime(BB._orientation[0], Howler.ctx.currentTime), BB._panner.orientationY.setValueAtTime(BB._orientation[1], Howler.ctx.currentTime), BB._panner.orientationZ.setValueAtTime(BB._orientation[2], Howler.ctx.currentTime)) : BB._panner.setOrientation(BB._orientation[0], BB._orientation[1], BB._orientation[2])) : (BB._panner = Howler.ctx.createStereoPanner(), BB._panner.pan.setValueAtTime(BB._stereo, Howler.ctx.currentTime)), BB._panner.connect(BB._node), BB.qL || BB._parent.pause(BB._id, !0).play(BB._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);