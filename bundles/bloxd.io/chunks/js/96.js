/*! For license information please see 31kiid.96.6996c02a.chunk.js.LICENSE.txt */
export const id = 96;
export const ids = [96];
export const modules = {
  4863: (kk, Fk, Ik) => {
    var Xk;
    ! function() {
      var Tk = function() {
        this.init()
      };
      Tk.prototype = {
        init: function() {
          var kk = this || ik;
          return kk._counter = 1e3, kk._html5AudioPool = [], kk.html5PoolSize = 10, kk._codecs = {}, kk._howls = [], kk._muted = !1, kk._volume = 1, kk._canPlayEvent = "canplaythrough", kk._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, kk.masterGain = null, kk.noAudio = !1, kk.usingWebAudio = !0, kk.autoSuspend = !0, kk.ctx = null, kk.autoUnlock = !0, kk._setup(), kk
        },
        volume: function(kk) {
          var Fk = this || ik;
          if (kk = parseFloat(kk), Fk.ctx || jk(), "undefined" !== typeof kk && kk >= 0 && kk <= 1) {
            if (Fk._volume = kk, Fk._muted) return Fk;
            Fk.usingWebAudio && Fk.masterGain.gain.setValueAtTime(kk, ik.ctx.currentTime);
            for (var Ik = 0; Ik < Fk._howls.length; Ik++)
              if (!Fk._howls[Ik]._webAudio)
                for (var Xk = Fk._howls[Ik]._getSoundIds(), Tk = 0; Tk < Xk.length; Tk++) {
                  var yk = Fk._howls[Ik]._soundById(Xk[Tk]);
                  yk && yk._node && (yk._node.volume = yk._volume * kk)
                }
            return Fk
          }
          return Fk._volume
        },
        mute: function(kk) {
          var Fk = this || ik;
          Fk.ctx || jk(), Fk._muted = kk, Fk.usingWebAudio && Fk.masterGain.gain.setValueAtTime(kk ? 0 : Fk._volume, ik.ctx.currentTime);
          for (var Ik = 0; Ik < Fk._howls.length; Ik++)
            if (!Fk._howls[Ik]._webAudio)
              for (var Xk = Fk._howls[Ik]._getSoundIds(), Tk = 0; Tk < Xk.length; Tk++) {
                var yk = Fk._howls[Ik]._soundById(Xk[Tk]);
                yk && yk._node && (yk._node.muted = !!kk || yk._muted)
              }
          return Fk
        },
        stop: function() {
          for (var kk = this || ik, Fk = 0; Fk < kk._howls.length; Fk++) kk._howls[Fk].stop();
          return kk
        },
        unload: function() {
          for (var kk = this || ik, Fk = kk._howls.length - 1; Fk >= 0; Fk--) kk._howls[Fk].unload();
          return kk.usingWebAudio && kk.ctx && "undefined" !== typeof kk.ctx.close && (kk.ctx.close(), kk.ctx = null, jk()), kk
        },
        codecs: function(kk) {
          return (this || ik)._codecs[kk.replace(/^x-/, "")]
        },
        _setup: function() {
          var kk = this || ik;
          if (kk.state = kk.ctx && kk.ctx.state || "suspended", kk._autoSuspend(), !kk.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (kk._canPlayEvent = "canplay")
            } catch (Fk) {
              kk.noAudio = !0
            } else kk.noAudio = !0;
          try {
            (new Audio).muted && (kk.noAudio = !0)
          } catch (Fk) {}
          return kk.noAudio || kk._setupCodecs(), kk
        },
        _setupCodecs: function() {
          var kk = this || ik,
            Fk = null;
          try {
            Fk = "undefined" !== typeof Audio ? new Audio : null
          } catch (Lk) {
            return kk
          }
          if (!Fk || "function" !== typeof Fk.canPlayType) return kk;
          var Ik = Fk.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Xk = kk._navigator ? kk._navigator.userAgent : "",
            Tk = Xk.match(/OPR\/([0-6].)/g),
            yk = Tk && parseInt(Tk[0].split("/")[1], 10) < 33,
            lk = -1 !== Xk.indexOf("Safari") && -1 === Xk.indexOf("Chrome"),
            ak = Xk.match(/Version\/(.*?) /),
            qk = lk && ak && parseInt(ak[1], 10) < 15;
          return kk._codecs = {
            mp3: !(yk || !Ik && !Fk.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!Ik,
            opus: !!Fk.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Fk.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Fk.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Fk.canPlayType('audio/wav; codecs="1"') || Fk.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Fk.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Fk.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Fk.canPlayType("audio/x-m4a;") || Fk.canPlayType("audio/m4a;") || Fk.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Fk.canPlayType("audio/x-m4b;") || Fk.canPlayType("audio/m4b;") || Fk.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Fk.canPlayType("audio/x-mp4;") || Fk.canPlayType("audio/mp4;") || Fk.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(qk || !Fk.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(qk || !Fk.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Fk.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Fk.canPlayType("audio/x-flac;") || Fk.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, kk
        },
        _unlockAudio: function() {
          var kk = this || ik;
          if (!kk._audioUnlocked && kk.ctx) {
            kk._audioUnlocked = !1, kk.autoUnlock = !1, kk._mobileUnloaded || 44100 === kk.ctx.sampleRate || (kk._mobileUnloaded = !0, kk.unload()), kk._scratchBuffer = kk.ctx.createBuffer(1, 1, 22050);
            var Fk = function(Ik) {
              for (; kk._html5AudioPool.length < kk.html5PoolSize;) try {
                var Xk = new Audio;
                Xk._unlocked = !0, kk._releaseHtml5Audio(Xk)
              } catch (Ik) {
                kk.noAudio = !0;
                break
              }
              for (var Tk = 0; Tk < kk._howls.length; Tk++)
                if (!kk._howls[Tk]._webAudio)
                  for (var ik = kk._howls[Tk]._getSoundIds(), yk = 0; yk < ik.length; yk++) {
                    var lk = kk._howls[Tk]._soundById(ik[yk]);
                    lk && lk._node && !lk._node._unlocked && (lk._node._unlocked = !0, lk._node.load())
                  }
              kk._autoResume();
              var ak = kk.ctx.createBufferSource();
              ak.buffer = kk._scratchBuffer, ak.connect(kk.ctx.destination), "undefined" === typeof ak.start ? ak.noteOn(0) : ak.start(0), "function" === typeof kk.ctx.resume && kk.ctx.resume(), ak.onended = function() {
                ak.disconnect(0), kk._audioUnlocked = !0, document.removeEventListener("touchstart", Fk, !0), document.removeEventListener("touchend", Fk, !0), document.removeEventListener("click", Fk, !0), document.removeEventListener("keydown", Fk, !0);
                for (var Ik = 0; Ik < kk._howls.length; Ik++) kk._howls[Ik]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Fk, !0), document.addEventListener("touchend", Fk, !0), document.addEventListener("click", Fk, !0), document.addEventListener("keydown", Fk, !0), kk
          }
        },
        _obtainHtml5Audio: function() {
          var kk = this || ik;
          if (kk._html5AudioPool.length) return kk._html5AudioPool.pop();
          var Fk = (new Audio).play();
          return Fk && "undefined" !== typeof Promise && (Fk instanceof Promise || "function" === typeof Fk.then) && Fk.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(kk) {
          var Fk = this || ik;
          return kk._unlocked && Fk._html5AudioPool.push(kk), Fk
        },
        _autoSuspend: function() {
          var kk = this;
          if (kk.autoSuspend && kk.ctx && "undefined" !== typeof kk.ctx.suspend && ik.usingWebAudio) {
            for (var Fk = 0; Fk < kk._howls.length; Fk++)
              if (kk._howls[Fk]._webAudio)
                for (var Ik = 0; Ik < kk._howls[Fk]._sounds.length; Ik++)
                  if (!kk._howls[Fk]._sounds[Ik].vx) return kk;
            return kk._suspendTimer && clearTimeout(kk._suspendTimer), kk._suspendTimer = setTimeout((function() {
              if (kk.autoSuspend) {
                kk._suspendTimer = null, kk.state = "suspending";
                var Fk = function() {
                  kk.state = "suspended", kk._resumeAfterSuspend && (delete kk._resumeAfterSuspend, kk._autoResume())
                };
                kk.ctx.suspend().then(Fk, Fk)
              }
            }), 3e4), kk
          }
        },
        _autoResume: function() {
          var kk = this;
          if (kk.ctx && "undefined" !== typeof kk.ctx.resume && ik.usingWebAudio) return "running" === kk.state && "interrupted" !== kk.ctx.state && kk._suspendTimer ? (clearTimeout(kk._suspendTimer), kk._suspendTimer = null) : "suspended" === kk.state || "running" === kk.state && "interrupted" === kk.ctx.state ? (kk.ctx.resume().then((function() {
            kk.state = "running";
            for (var Fk = 0; Fk < kk._howls.length; Fk++) kk._howls[Fk]._emit("resume")
          })), kk._suspendTimer && (clearTimeout(kk._suspendTimer), kk._suspendTimer = null)) : "suspending" === kk.state && (kk._resumeAfterSuspend = !0), kk
        }
      };
      var ik = new Tk,
        yk = function(kk) {
          kk.src && 0 !== kk.src.length ? this.init(kk) : console.error("An array of source files must be passed with any new Howl.")
        };
      yk.prototype = {
        init: function(kk) {
          var Fk = this;
          return ik.ctx || jk(), Fk._autoplay = kk.autoplay || !1, Fk._format = "string" !== typeof kk.format ? kk.format : [kk.format], Fk._html5 = kk.html5 || !1, Fk._muted = kk.mute || !1, Fk._loop = kk.loop || !1, Fk._pool = kk.pool || 5, Fk._preload = "boolean" !== typeof kk.preload && "metadata" !== kk.preload || kk.preload, Fk._rate = kk.rate || 1, Fk._sprite = kk.sprite || {}, Fk._src = "string" !== typeof kk.src ? kk.src : [kk.src], Fk._volume = void 0 !== kk.volume ? kk.volume : 1, Fk._xhr = {
            method: kk.xhr && kk.xhr.method ? kk.xhr.method : "GET",
            headers: kk.xhr && kk.xhr.headers ? kk.xhr.headers : null,
            withCredentials: !(!kk.xhr || !kk.xhr.withCredentials) && kk.xhr.withCredentials
          }, Fk._duration = 0, Fk._state = "unloaded", Fk._sounds = [], Fk._endTimers = {}, Fk._queue = [], Fk._playLock = !1, Fk._onend = kk.onend ? [{
            Ie: kk.onend
          }] : [], Fk._onfade = kk.onfade ? [{
            Ie: kk.onfade
          }] : [], Fk._onload = kk.onload ? [{
            Ie: kk.onload
          }] : [], Fk._onloaderror = kk.onloaderror ? [{
            Ie: kk.onloaderror
          }] : [], Fk._onplayerror = kk.onplayerror ? [{
            Ie: kk.onplayerror
          }] : [], Fk._onpause = kk.onpause ? [{
            Ie: kk.onpause
          }] : [], Fk._onplay = kk.onplay ? [{
            Ie: kk.onplay
          }] : [], Fk._onstop = kk.onstop ? [{
            Ie: kk.onstop
          }] : [], Fk._onmute = kk.onmute ? [{
            Ie: kk.onmute
          }] : [], Fk._onvolume = kk.onvolume ? [{
            Ie: kk.onvolume
          }] : [], Fk._onrate = kk.onrate ? [{
            Ie: kk.onrate
          }] : [], Fk._onseek = kk.onseek ? [{
            Ie: kk.onseek
          }] : [], Fk._onunlock = kk.onunlock ? [{
            Ie: kk.onunlock
          }] : [], Fk._onresume = [], Fk._webAudio = ik.usingWebAudio && !Fk._html5, "undefined" !== typeof ik.ctx && ik.ctx && ik.autoUnlock && ik._unlockAudio(), ik._howls.push(Fk), Fk._autoplay && Fk._queue.push({
            event: "play",
            action: function() {
              Fk.play()
            }
          }), Fk._preload && "none" !== Fk._preload && Fk.load(), Fk
        },
        load: function() {
          var kk = this,
            Fk = null;
          if (ik.noAudio) kk._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof kk._src && (kk._src = [kk._src]);
            for (var Ik = 0; Ik < kk._src.length; Ik++) {
              var Xk, Tk;
              if (kk._format && kk._format[Ik]) Xk = kk._format[Ik];
              else {
                if ("string" !== typeof(Tk = kk._src[Ik])) {
                  kk._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Xk = /^data:audio\/([^;,]+);/i.exec(Tk)) || (Xk = /\.([^.]+)$/.exec(Tk.split("?", 1)[0])), Xk && (Xk = Xk[1].toLowerCase())
              }
              if (Xk || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Xk && ik.codecs(Xk)) {
                Fk = kk._src[Ik];
                break
              }
            }
            if (Fk) return kk._src = Fk, kk._state = "loading", "https:" === window.location.protocol && "http:" === Fk.slice(0, 5) && (kk._html5 = !0, kk._webAudio = !1), new lk(kk), kk._webAudio && qk(kk), kk;
            kk._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(kk, Fk) {
          var Ik = this,
            Xk = null;
          if ("number" === typeof kk) Xk = kk, kk = null;
          else {
            if ("string" === typeof kk && "loaded" === Ik._state && !Ik._sprite[kk]) return null;
            if ("undefined" === typeof kk && (kk = "__default", !Ik._playLock)) {
              for (var Tk = 0, yk = 0; yk < Ik._sounds.length; yk++) Ik._sounds[yk].vx && !Ik._sounds[yk]._ended && (Tk++, Xk = Ik._sounds[yk]._id);
              1 === Tk ? kk = null : Xk = null
            }
          }
          var lk = Xk ? Ik._soundById(Xk) : Ik._inactiveSound();
          if (!lk) return null;
          if (Xk && !kk && (kk = lk._sprite || "__default"), "loaded" !== Ik._state) {
            lk._sprite = kk, lk._ended = !1;
            var ak = lk._id;
            return Ik._queue.push({
              event: "play",
              action: function() {
                Ik.play(ak)
              }
            }), ak
          }
          if (Xk && !lk.vx) return Fk || Ik._loadQueue("play"), lk._id;
          Ik._webAudio && ik._autoResume();
          var qk = Math.max(0, lk._seek > 0 ? lk._seek : Ik._sprite[kk][0] / 1e3),
            Lk = Math.max(0, (Ik._sprite[kk][0] + Ik._sprite[kk][1]) / 1e3 - qk),
            tk = 1e3 * Lk / Math.abs(lk._rate),
            Zk = Ik._sprite[kk][0] / 1e3,
            jk = (Ik._sprite[kk][0] + Ik._sprite[kk][1]) / 1e3;
          lk._sprite = kk, lk._ended = !1;
          var ek = function() {
            lk.vx = !1, lk._seek = qk, lk._start = Zk, lk._stop = jk, lk._loop = !(!lk._loop && !Ik._sprite[kk][2])
          };
          if (!(qk >= jk)) {
            var wk = lk._node;
            if (Ik._webAudio) {
              var Hk = function() {
                Ik._playLock = !1, ek(), Ik._refreshBuffer(lk);
                var kk = lk._muted || Ik._muted ? 0 : lk._volume;
                wk.gain.setValueAtTime(kk, ik.ctx.currentTime), lk._playStart = ik.ctx.currentTime, "undefined" === typeof wk.bufferSource.start ? lk._loop ? wk.bufferSource.noteGrainOn(0, qk, 86400) : wk.bufferSource.noteGrainOn(0, qk, Lk) : lk._loop ? wk.bufferSource.start(0, qk, 86400) : wk.bufferSource.start(0, qk, Lk), tk !== 1 / 0 && (Ik._endTimers[lk._id] = setTimeout(Ik._ended.bind(Ik, lk), tk)), Fk || setTimeout((function() {
                  Ik._emit("play", lk._id), Ik._loadQueue()
                }), 0)
              };
              "running" === ik.state && "interrupted" !== ik.ctx.state ? Hk() : (Ik._playLock = !0, Ik.once("resume", Hk), Ik._clearTimer(lk._id))
            } else {
              var Jk = function() {
                wk.currentTime = qk, wk.muted = lk._muted || Ik._muted || ik._muted || wk.muted, wk.volume = lk._volume * ik.volume(), wk.playbackRate = lk._rate;
                try {
                  var Xk = wk.play();
                  if (Xk && "undefined" !== typeof Promise && (Xk instanceof Promise || "function" === typeof Xk.then) ? (Ik._playLock = !0, ek(), Xk.then((function() {
                      Ik._playLock = !1, wk._unlocked = !0, Fk ? Ik._loadQueue() : Ik._emit("play", lk._id)
                    })).catch((function() {
                      Ik._playLock = !1, Ik._emit("playerror", lk._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), lk._ended = !0, lk.vx = !0
                    }))) : Fk || (Ik._playLock = !1, ek(), Ik._emit("play", lk._id)), wk.playbackRate = lk._rate, wk.paused) return void Ik._emit("playerror", lk._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== kk || lk._loop ? Ik._endTimers[lk._id] = setTimeout(Ik._ended.bind(Ik, lk), tk) : (Ik._endTimers[lk._id] = function() {
                    Ik._ended(lk), wk.removeEventListener("ended", Ik._endTimers[lk._id], !1)
                  }, wk.addEventListener("ended", Ik._endTimers[lk._id], !1))
                } catch (Tk) {
                  Ik._emit("playerror", lk._id, Tk)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === wk.src && (wk.src = Ik._src, wk.load());
              var xk = window && window.ejecta || !wk.readyState && ik._navigator.isCocoonJS;
              if (wk.readyState >= 3 || xk) Jk();
              else {
                Ik._playLock = !0, Ik._state = "loading";
                var Pk = function() {
                  Ik._state = "loaded", Jk(), wk.removeEventListener(ik._canPlayEvent, Pk, !1)
                };
                wk.addEventListener(ik._canPlayEvent, Pk, !1), Ik._clearTimer(lk._id)
              }
            }
            return lk._id
          }
          Ik._ended(lk)
        },
        pause: function(kk) {
          var Fk = this;
          if ("loaded" !== Fk._state || Fk._playLock) return Fk._queue.push({
            event: "pause",
            action: function() {
              Fk.pause(kk)
            }
          }), Fk;
          for (var Ik = Fk._getSoundIds(kk), Xk = 0; Xk < Ik.length; Xk++) {
            Fk._clearTimer(Ik[Xk]);
            var Tk = Fk._soundById(Ik[Xk]);
            if (Tk && !Tk.vx && (Tk._seek = Fk.seek(Ik[Xk]), Tk._rateSeek = 0, Tk.vx = !0, Fk._stopFade(Ik[Xk]), Tk._node))
              if (Fk._webAudio) {
                if (!Tk._node.bufferSource) continue;
                "undefined" === typeof Tk._node.bufferSource.stop ? Tk._node.bufferSource.noteOff(0) : Tk._node.bufferSource.stop(0), Fk._cleanBuffer(Tk._node)
              } else isNaN(Tk._node.duration) && Tk._node.duration !== 1 / 0 || Tk._node.pause();
            arguments[1] || Fk._emit("pause", Tk ? Tk._id : null)
          }
          return Fk
        },
        stop: function(kk, Fk) {
          var Ik = this;
          if ("loaded" !== Ik._state || Ik._playLock) return Ik._queue.push({
            event: "stop",
            action: function() {
              Ik.stop(kk)
            }
          }), Ik;
          for (var Xk = Ik._getSoundIds(kk), Tk = 0; Tk < Xk.length; Tk++) {
            Ik._clearTimer(Xk[Tk]);
            var ik = Ik._soundById(Xk[Tk]);
            ik && (ik._seek = ik._start || 0, ik._rateSeek = 0, ik.vx = !0, ik._ended = !0, Ik._stopFade(Xk[Tk]), ik._node && (Ik._webAudio ? ik._node.bufferSource && ("undefined" === typeof ik._node.bufferSource.stop ? ik._node.bufferSource.noteOff(0) : ik._node.bufferSource.stop(0), Ik._cleanBuffer(ik._node)) : isNaN(ik._node.duration) && ik._node.duration !== 1 / 0 || (ik._node.currentTime = ik._start || 0, ik._node.pause(), ik._node.duration === 1 / 0 && Ik._clearSound(ik._node))), Fk || Ik._emit("stop", ik._id))
          }
          return Ik
        },
        mute: function(kk, Fk) {
          var Ik = this;
          if ("loaded" !== Ik._state || Ik._playLock) return Ik._queue.push({
            event: "mute",
            action: function() {
              Ik.mute(kk, Fk)
            }
          }), Ik;
          if ("undefined" === typeof Fk) {
            if ("boolean" !== typeof kk) return Ik._muted;
            Ik._muted = kk
          }
          for (var Xk = Ik._getSoundIds(Fk), Tk = 0; Tk < Xk.length; Tk++) {
            var yk = Ik._soundById(Xk[Tk]);
            yk && (yk._muted = kk, yk._interval && Ik._stopFade(yk._id), Ik._webAudio && yk._node ? yk._node.gain.setValueAtTime(kk ? 0 : yk._volume, ik.ctx.currentTime) : yk._node && (yk._node.muted = !!ik._muted || kk), Ik._emit("mute", yk._id))
          }
          return Ik
        },
        volume: function() {
          var kk, Fk, Ik, Xk = this,
            Tk = arguments;
          if (0 === Tk.length) return Xk._volume;
          if (1 === Tk.length || 2 === Tk.length && "undefined" === typeof Tk[1] ? Xk._getSoundIds().indexOf(Tk[0]) >= 0 ? Fk = parseInt(Tk[0], 10) : kk = parseFloat(Tk[0]) : Tk.length >= 2 && (kk = parseFloat(Tk[0]), Fk = parseInt(Tk[1], 10)), !("undefined" !== typeof kk && kk >= 0 && kk <= 1)) return (Ik = Fk ? Xk._soundById(Fk) : Xk._sounds[0]) ? Ik._volume : 0;
          if ("loaded" !== Xk._state || Xk._playLock) return Xk._queue.push({
            event: "volume",
            action: function() {
              Xk.volume.apply(Xk, Tk)
            }
          }), Xk;
          "undefined" === typeof Fk && (Xk._volume = kk), Fk = Xk._getSoundIds(Fk);
          for (var yk = 0; yk < Fk.length; yk++)(Ik = Xk._soundById(Fk[yk])) && (Ik._volume = kk, Tk[2] || Xk._stopFade(Fk[yk]), Xk._webAudio && Ik._node && !Ik._muted ? Ik._node.gain.setValueAtTime(kk, ik.ctx.currentTime) : Ik._node && !Ik._muted && (Ik._node.volume = kk * ik.volume()), Xk._emit("volume", Ik._id));
          return Xk
        },
        fade: function(kk, Fk, Ik, Xk) {
          var Tk = this;
          if ("loaded" !== Tk._state || Tk._playLock) return Tk._queue.push({
            event: "fade",
            action: function() {
              Tk.fade(kk, Fk, Ik, Xk)
            }
          }), Tk;
          kk = Math.min(Math.max(0, parseFloat(kk)), 1), Fk = Math.min(Math.max(0, parseFloat(Fk)), 1), Ik = parseFloat(Ik), Tk.volume(kk, Xk);
          for (var yk = Tk._getSoundIds(Xk), lk = 0; lk < yk.length; lk++) {
            var ak = Tk._soundById(yk[lk]);
            if (ak) {
              if (Xk || Tk._stopFade(yk[lk]), Tk._webAudio && !ak._muted) {
                var qk = ik.ctx.currentTime,
                  Lk = qk + Ik / 1e3;
                ak._volume = kk, ak._node.gain.setValueAtTime(kk, qk), ak._node.gain.linearRampToValueAtTime(Fk, Lk)
              }
              Tk._startFadeInterval(ak, kk, Fk, Ik, yk[lk], "undefined" === typeof Xk)
            }
          }
          return Tk
        },
        _startFadeInterval: function(kk, Fk, Ik, Xk, Tk, ik) {
          var yk = this,
            lk = Fk,
            ak = Ik - Fk,
            qk = Math.abs(ak / .01),
            Lk = Math.max(4, qk > 0 ? Xk / qk : Xk),
            tk = Date.now();
          kk._fadeTo = Ik, kk._interval = setInterval((function() {
            var Tk = (Date.now() - tk) / Xk;
            tk = Date.now(), lk += ak * Tk, lk = Math.round(100 * lk) / 100, lk = ak < 0 ? Math.max(Ik, lk) : Math.min(Ik, lk), yk._webAudio ? kk._volume = lk : yk.volume(lk, kk._id, !0), ik && (yk._volume = lk), (Ik < Fk && lk <= Ik || Ik > Fk && lk >= Ik) && (clearInterval(kk._interval), kk._interval = null, kk._fadeTo = null, yk.volume(Ik, kk._id), yk._emit("fade", kk._id))
          }), Lk)
        },
        _stopFade: function(kk) {
          var Fk = this,
            Ik = Fk._soundById(kk);
          return Ik && Ik._interval && (Fk._webAudio && Ik._node.gain.cancelScheduledValues(ik.ctx.currentTime), clearInterval(Ik._interval), Ik._interval = null, Fk.volume(Ik._fadeTo, kk), Ik._fadeTo = null, Fk._emit("fade", kk)), Fk
        },
        loop: function() {
          var kk, Fk, Ik, Xk = this,
            Tk = arguments;
          if (0 === Tk.length) return Xk._loop;
          if (1 === Tk.length) {
            if ("boolean" !== typeof Tk[0]) return !!(Ik = Xk._soundById(parseInt(Tk[0], 10))) && Ik._loop;
            kk = Tk[0], Xk._loop = kk
          } else 2 === Tk.length && (kk = Tk[0], Fk = parseInt(Tk[1], 10));
          for (var ik = Xk._getSoundIds(Fk), yk = 0; yk < ik.length; yk++)(Ik = Xk._soundById(ik[yk])) && (Ik._loop = kk, Xk._webAudio && Ik._node && Ik._node.bufferSource && (Ik._node.bufferSource.loop = kk, kk && (Ik._node.bufferSource.loopStart = Ik._start || 0, Ik._node.bufferSource.loopEnd = Ik._stop, Xk.playing(ik[yk]) && (Xk.pause(ik[yk], !0), Xk.play(ik[yk], !0)))));
          return Xk
        },
        rate: function() {
          var kk, Fk, Ik, Xk = this,
            Tk = arguments;
          if (0 === Tk.length) Fk = Xk._sounds[0]._id;
          else if (1 === Tk.length) {
            Xk._getSoundIds().indexOf(Tk[0]) >= 0 ? Fk = parseInt(Tk[0], 10) : kk = parseFloat(Tk[0])
          } else 2 === Tk.length && (kk = parseFloat(Tk[0]), Fk = parseInt(Tk[1], 10));
          if ("number" !== typeof kk) return (Ik = Xk._soundById(Fk)) ? Ik._rate : Xk._rate;
          if ("loaded" !== Xk._state || Xk._playLock) return Xk._queue.push({
            event: "rate",
            action: function() {
              Xk.rate.apply(Xk, Tk)
            }
          }), Xk;
          "undefined" === typeof Fk && (Xk._rate = kk), Fk = Xk._getSoundIds(Fk);
          for (var yk = 0; yk < Fk.length; yk++)
            if (Ik = Xk._soundById(Fk[yk])) {
              Xk.playing(Fk[yk]) && (Ik._rateSeek = Xk.seek(Fk[yk]), Ik._playStart = Xk._webAudio ? ik.ctx.currentTime : Ik._playStart), Ik._rate = kk, Xk._webAudio && Ik._node && Ik._node.bufferSource ? Ik._node.bufferSource.playbackRate.setValueAtTime(kk, ik.ctx.currentTime) : Ik._node && (Ik._node.playbackRate = kk);
              var lk = Xk.seek(Fk[yk]),
                ak = 1e3 * ((Xk._sprite[Ik._sprite][0] + Xk._sprite[Ik._sprite][1]) / 1e3 - lk) / Math.abs(Ik._rate);
              !Xk._endTimers[Fk[yk]] && Ik.vx || (Xk._clearTimer(Fk[yk]), Xk._endTimers[Fk[yk]] = setTimeout(Xk._ended.bind(Xk, Ik), ak)), Xk._emit("rate", Ik._id)
            } return Xk
        },
        seek: function() {
          var kk, Fk, Ik = this,
            Xk = arguments;
          if (0 === Xk.length) Ik._sounds.length && (Fk = Ik._sounds[0]._id);
          else if (1 === Xk.length) {
            Ik._getSoundIds().indexOf(Xk[0]) >= 0 ? Fk = parseInt(Xk[0], 10) : Ik._sounds.length && (Fk = Ik._sounds[0]._id, kk = parseFloat(Xk[0]))
          } else 2 === Xk.length && (kk = parseFloat(Xk[0]), Fk = parseInt(Xk[1], 10));
          if ("undefined" === typeof Fk) return 0;
          if ("number" === typeof kk && ("loaded" !== Ik._state || Ik._playLock)) return Ik._queue.push({
            event: "seek",
            action: function() {
              Ik.seek.apply(Ik, Xk)
            }
          }), Ik;
          var Tk = Ik._soundById(Fk);
          if (Tk) {
            if (!("number" === typeof kk && kk >= 0)) {
              if (Ik._webAudio) {
                var yk = Ik.playing(Fk) ? ik.ctx.currentTime - Tk._playStart : 0,
                  lk = Tk._rateSeek ? Tk._rateSeek - Tk._seek : 0;
                return Tk._seek + (lk + yk * Math.abs(Tk._rate))
              }
              return Tk._node.currentTime
            }
            var ak = Ik.playing(Fk);
            ak && Ik.pause(Fk, !0), Tk._seek = kk, Tk._ended = !1, Ik._clearTimer(Fk), Ik._webAudio || !Tk._node || isNaN(Tk._node.duration) || (Tk._node.currentTime = kk);
            var qk = function() {
              ak && Ik.play(Fk, !0), Ik._emit("seek", Fk)
            };
            if (ak && !Ik._webAudio) {
              var Lk = function() {
                Ik._playLock ? setTimeout(Lk, 0) : qk()
              };
              setTimeout(Lk, 0)
            } else qk()
          }
          return Ik
        },
        playing: function(kk) {
          var Fk = this;
          if ("number" === typeof kk) {
            var Ik = Fk._soundById(kk);
            return !!Ik && !Ik.vx
          }
          for (var Xk = 0; Xk < Fk._sounds.length; Xk++)
            if (!Fk._sounds[Xk].vx) return !0;
          return !1
        },
        duration: function(kk) {
          var Fk = this,
            Ik = Fk._duration,
            Xk = Fk._soundById(kk);
          return Xk && (Ik = Fk._sprite[Xk._sprite][1] / 1e3), Ik
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var kk = this, Fk = kk._sounds, Ik = 0; Ik < Fk.length; Ik++) Fk[Ik].vx || kk.stop(Fk[Ik]._id), kk._webAudio || (kk._clearSound(Fk[Ik]._node), Fk[Ik]._node.removeEventListener("error", Fk[Ik]._errorFn, !1), Fk[Ik]._node.removeEventListener(ik._canPlayEvent, Fk[Ik]._loadFn, !1), Fk[Ik]._node.removeEventListener("ended", Fk[Ik]._endFn, !1), ik._releaseHtml5Audio(Fk[Ik]._node)), delete Fk[Ik]._node, kk._clearTimer(Fk[Ik]._id);
          var Xk = ik._howls.indexOf(kk);
          Xk >= 0 && ik._howls.splice(Xk, 1);
          var Tk = !0;
          for (Ik = 0; Ik < ik._howls.length; Ik++)
            if (ik._howls[Ik]._src === kk._src || kk._src.indexOf(ik._howls[Ik]._src) >= 0) {
              Tk = !1;
              break
            } return ak && Tk && delete ak[kk._src], ik.noAudio = !1, kk._state = "unloaded", kk._sounds = [], kk = null, null
        },
        on: function(kk, Fk, Ik, Xk) {
          var Tk = this["_on" + kk];
          return "function" === typeof Fk && Tk.push(Xk ? {
            id: Ik,
            Ie: Fk,
            once: Xk
          } : {
            id: Ik,
            Ie: Fk
          }), this
        },
        off: function(kk, Fk, Ik) {
          var Xk = this,
            Tk = Xk["_on" + kk],
            ik = 0;
          if ("number" === typeof Fk && (Ik = Fk, Fk = null), Fk || Ik)
            for (ik = 0; ik < Tk.length; ik++) {
              var yk = Ik === Tk[ik].id;
              if (Fk === Tk[ik].Ie && yk || !Fk && yk) {
                Tk.splice(ik, 1);
                break
              }
            } else if (kk) Xk["_on" + kk] = [];
            else {
              var lk = Object.keys(Xk);
              for (ik = 0; ik < lk.length; ik++) 0 === lk[ik].indexOf("_on") && Array.isArray(Xk[lk[ik]]) && (Xk[lk[ik]] = [])
            } return Xk
        },
        once: function(kk, Fk, Ik) {
          return this.on(kk, Fk, Ik, 1), this
        },
        _emit: function(kk, Fk, Ik) {
          for (var Xk = this, Tk = Xk["_on" + kk], ik = Tk.length - 1; ik >= 0; ik--) Tk[ik].id && Tk[ik].id !== Fk && "load" !== kk || (setTimeout(function(kk) {
            kk.call(this, Fk, Ik)
          }.bind(Xk, Tk[ik].Ie), 0), Tk[ik].once && Xk.off(kk, Tk[ik].Ie, Tk[ik].id));
          return Xk._loadQueue(kk), Xk
        },
        _loadQueue: function(kk) {
          var Fk = this;
          if (Fk._queue.length > 0) {
            var Ik = Fk._queue[0];
            Ik.event === kk && (Fk._queue.shift(), Fk._loadQueue()), kk || Ik.action()
          }
          return Fk
        },
        _ended: function(kk) {
          var Fk = this,
            Ik = kk._sprite;
          if (!Fk._webAudio && kk._node && !kk._node.paused && !kk._node.ended && kk._node.currentTime < kk._stop) return setTimeout(Fk._ended.bind(Fk, kk), 100), Fk;
          var Xk = !(!kk._loop && !Fk._sprite[Ik][2]);
          if (Fk._emit("end", kk._id), !Fk._webAudio && Xk && Fk.stop(kk._id, !0).play(kk._id), Fk._webAudio && Xk) {
            Fk._emit("play", kk._id), kk._seek = kk._start || 0, kk._rateSeek = 0, kk._playStart = ik.ctx.currentTime;
            var Tk = 1e3 * (kk._stop - kk._start) / Math.abs(kk._rate);
            Fk._endTimers[kk._id] = setTimeout(Fk._ended.bind(Fk, kk), Tk)
          }
          return Fk._webAudio && !Xk && (kk.vx = !0, kk._ended = !0, kk._seek = kk._start || 0, kk._rateSeek = 0, Fk._clearTimer(kk._id), Fk._cleanBuffer(kk._node), ik._autoSuspend()), Fk._webAudio || Xk || Fk.stop(kk._id, !0), Fk
        },
        _clearTimer: function(kk) {
          var Fk = this;
          if (Fk._endTimers[kk]) {
            if ("function" !== typeof Fk._endTimers[kk]) clearTimeout(Fk._endTimers[kk]);
            else {
              var Ik = Fk._soundById(kk);
              Ik && Ik._node && Ik._node.removeEventListener("ended", Fk._endTimers[kk], !1)
            }
            delete Fk._endTimers[kk]
          }
          return Fk
        },
        _soundById: function(kk) {
          for (var Fk = this, Ik = 0; Ik < Fk._sounds.length; Ik++)
            if (kk === Fk._sounds[Ik]._id) return Fk._sounds[Ik];
          return null
        },
        _inactiveSound: function() {
          var kk = this;
          kk._drain();
          for (var Fk = 0; Fk < kk._sounds.length; Fk++)
            if (kk._sounds[Fk]._ended) return kk._sounds[Fk].reset();
          return new lk(kk)
        },
        _drain: function() {
          var kk = this,
            Fk = kk._pool,
            Ik = 0,
            Xk = 0;
          if (!(kk._sounds.length < Fk)) {
            for (Xk = 0; Xk < kk._sounds.length; Xk++) kk._sounds[Xk]._ended && Ik++;
            for (Xk = kk._sounds.length - 1; Xk >= 0; Xk--) {
              if (Ik <= Fk) return;
              kk._sounds[Xk]._ended && (kk._webAudio && kk._sounds[Xk]._node && kk._sounds[Xk]._node.disconnect(0), kk._sounds.splice(Xk, 1), Ik--)
            }
          }
        },
        _getSoundIds: function(kk) {
          if ("undefined" === typeof kk) {
            for (var Fk = [], Ik = 0; Ik < this._sounds.length; Ik++) Fk.push(this._sounds[Ik]._id);
            return Fk
          }
          return [kk]
        },
        _refreshBuffer: function(kk) {
          return kk._node.bufferSource = ik.ctx.createBufferSource(), kk._node.bufferSource.buffer = ak[this._src], kk._panner ? kk._node.bufferSource.connect(kk._panner) : kk._node.bufferSource.connect(kk._node), kk._node.bufferSource.loop = kk._loop, kk._loop && (kk._node.bufferSource.loopStart = kk._start || 0, kk._node.bufferSource.loopEnd = kk._stop || 0), kk._node.bufferSource.playbackRate.setValueAtTime(kk._rate, ik.ctx.currentTime), this
        },
        _cleanBuffer: function(kk) {
          var Fk = ik._navigator && ik._navigator.vendor.indexOf("Apple") >= 0;
          if (ik._scratchBuffer && kk.bufferSource && (kk.bufferSource.onended = null, kk.bufferSource.disconnect(0), Fk)) try {
            kk.bufferSource.buffer = ik._scratchBuffer
          } catch (Ik) {}
          return kk.bufferSource = null, this
        },
        _clearSound: function(kk) {
          /MSIE |Trident\//.test(ik._navigator && ik._navigator.userAgent) || (kk.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var lk = function(kk) {
        this._parent = kk, this.init()
      };
      lk.prototype = {
        init: function() {
          var kk = this,
            Fk = kk._parent;
          return kk._muted = Fk._muted, kk._loop = Fk._loop, kk._volume = Fk._volume, kk._rate = Fk._rate, kk._seek = 0, kk.vx = !0, kk._ended = !0, kk._sprite = "__default", kk._id = ++ik._counter, Fk._sounds.push(kk), kk.create(), kk
        },
        create: function() {
          var kk = this,
            Fk = kk._parent,
            Ik = ik._muted || kk._muted || kk._parent._muted ? 0 : kk._volume;
          return Fk._webAudio ? (kk._node = "undefined" === typeof ik.ctx.createGain ? ik.ctx.createGainNode() : ik.ctx.createGain(), kk._node.gain.setValueAtTime(Ik, ik.ctx.currentTime), kk._node.paused = !0, kk._node.connect(ik.masterGain)) : ik.noAudio || (kk._node = ik._obtainHtml5Audio(), kk._errorFn = kk._errorListener.bind(kk), kk._node.addEventListener("error", kk._errorFn, !1), kk._loadFn = kk._loadListener.bind(kk), kk._node.addEventListener(ik._canPlayEvent, kk._loadFn, !1), kk._endFn = kk._endListener.bind(kk), kk._node.addEventListener("ended", kk._endFn, !1), kk._node.src = Fk._src, kk._node.preload = !0 === Fk._preload ? "auto" : Fk._preload, kk._node.volume = Ik * ik.volume(), kk._node.load()), kk
        },
        reset: function() {
          var kk = this,
            Fk = kk._parent;
          return kk._muted = Fk._muted, kk._loop = Fk._loop, kk._volume = Fk._volume, kk._rate = Fk._rate, kk._seek = 0, kk._rateSeek = 0, kk.vx = !0, kk._ended = !0, kk._sprite = "__default", kk._id = ++ik._counter, kk
        },
        _errorListener: function() {
          var kk = this;
          kk._parent._emit("loaderror", kk._id, kk._node.error ? kk._node.error.code : 0), kk._node.removeEventListener("error", kk._errorFn, !1)
        },
        _loadListener: function() {
          var kk = this,
            Fk = kk._parent;
          Fk._duration = Math.ceil(10 * kk._node.duration) / 10, 0 === Object.keys(Fk._sprite).length && (Fk._sprite = {
            __default: [0, 1e3 * Fk._duration]
          }), "loaded" !== Fk._state && (Fk._state = "loaded", Fk._emit("load"), Fk._loadQueue()), kk._node.removeEventListener(ik._canPlayEvent, kk._loadFn, !1)
        },
        _endListener: function() {
          var kk = this,
            Fk = kk._parent;
          Fk._duration === 1 / 0 && (Fk._duration = Math.ceil(10 * kk._node.duration) / 10, Fk._sprite.__default[1] === 1 / 0 && (Fk._sprite.__default[1] = 1e3 * Fk._duration), Fk._ended(kk)), kk._node.removeEventListener("ended", kk._endFn, !1)
        }
      };
      var ak = {},
        qk = function(kk) {
          var Fk = kk._src;
          if (ak[Fk]) return kk._duration = ak[Fk].duration, void Zk(kk);
          if (/^data:[^;]+;base64,/.test(Fk)) {
            for (var Ik = atob(Fk.split(",")[1]), Xk = new Uint8Array(Ik.length), Tk = 0; Tk < Ik.length; ++Tk) Xk[Tk] = Ik.charCodeAt(Tk);
            tk(Xk.buffer, kk)
          } else {
            var ik = new XMLHttpRequest;
            ik.open(kk._xhr.method, Fk, !0), ik.withCredentials = kk._xhr.withCredentials, ik.responseType = "arraybuffer", kk._xhr.headers && Object.keys(kk._xhr.headers).forEach((function(Fk) {
              ik.setRequestHeader(Fk, kk._xhr.headers[Fk])
            })), ik.onload = function() {
              var Fk = (ik.status + "")[0];
              "0" === Fk || "2" === Fk || "3" === Fk ? tk(ik.response, kk) : kk._emit("loaderror", null, "Failed loading audio file with status: " + ik.status + ".")
            }, ik.onerror = function() {
              kk._webAudio && (kk._html5 = !0, kk._webAudio = !1, kk._sounds = [], delete ak[Fk], kk.load())
            }, Lk(ik)
          }
        },
        Lk = function(kk) {
          try {
            kk.send()
          } catch (Fk) {
            kk.onerror()
          }
        },
        tk = function(kk, Fk) {
          var Ik = function() {
              Fk._emit("loaderror", null, "Decoding audio data failed.")
            },
            Xk = function(kk) {
              kk && Fk._sounds.length > 0 ? (ak[Fk._src] = kk, Zk(Fk, kk)) : Ik()
            };
          "undefined" !== typeof Promise && 1 === ik.ctx.decodeAudioData.length ? ik.ctx.decodeAudioData(kk).then(Xk).catch(Ik) : ik.ctx.decodeAudioData(kk, Xk, Ik)
        },
        Zk = function(kk, Fk) {
          Fk && !kk._duration && (kk._duration = Fk.duration), 0 === Object.keys(kk._sprite).length && (kk._sprite = {
            __default: [0, 1e3 * kk._duration]
          }), "loaded" !== kk._state && (kk._state = "loaded", kk._emit("load"), kk._loadQueue())
        },
        jk = function() {
          if (ik.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? ik.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? ik.ctx = new webkitAudioContext : ik.usingWebAudio = !1
            } catch (Tk) {
              ik.usingWebAudio = !1
            }
            ik.ctx || (ik.usingWebAudio = !1);
            var kk = /iP(hone|od|ad)/.test(ik._navigator && ik._navigator.platform),
              Fk = ik._navigator && ik._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              Ik = Fk ? parseInt(Fk[1], 10) : null;
            if (kk && Ik && Ik < 9) {
              var Xk = /safari/.test(ik._navigator && ik._navigator.userAgent.toLowerCase());
              ik._navigator && !Xk && (ik.usingWebAudio = !1)
            }
            ik.usingWebAudio && (ik.masterGain = "undefined" === typeof ik.ctx.createGain ? ik.ctx.createGainNode() : ik.ctx.createGain(), ik.masterGain.gain.setValueAtTime(ik._muted ? 0 : ik._volume, ik.ctx.currentTime), ik.masterGain.connect(ik.ctx.destination)), ik._setup()
          }
        };
      void 0 === (Xk = function() {
        return {
          Howler: ik,
          Howl: yk
        }
      }.apply(Fk, [])) || (kk.exports = Xk), Fk.Howler = ik, Fk.Howl = yk, "undefined" !== typeof Ik.g ? (Ik.g.HowlerGlobal = Tk, Ik.g.Howler = ik, Ik.g.Howl = yk, Ik.g.Sound = lk) : "undefined" !== typeof window && (window.HowlerGlobal = Tk, window.Howler = ik, window.Howl = yk, window.Sound = lk)
    }(),
    function() {
      var kk;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(kk) {
        var Fk = this;
        if (!Fk.ctx || !Fk.ctx.listener) return Fk;
        for (var Ik = Fk._howls.length - 1; Ik >= 0; Ik--) Fk._howls[Ik].stereo(kk);
        return Fk
      }, HowlerGlobal.prototype.pos = function(kk, Fk, Ik) {
        var Xk = this;
        return Xk.ctx && Xk.ctx.listener ? (Fk = "number" !== typeof Fk ? Xk._pos[1] : Fk, Ik = "number" !== typeof Ik ? Xk._pos[2] : Ik, "number" !== typeof kk ? Xk._pos : (Xk._pos = [kk, Fk, Ik], "undefined" !== typeof Xk.ctx.listener.positionX ? (Xk.ctx.listener.positionX.setTargetAtTime(Xk._pos[0], Howler.ctx.currentTime, .1), Xk.ctx.listener.positionY.setTargetAtTime(Xk._pos[1], Howler.ctx.currentTime, .1), Xk.ctx.listener.positionZ.setTargetAtTime(Xk._pos[2], Howler.ctx.currentTime, .1)) : Xk.ctx.listener.setPosition(Xk._pos[0], Xk._pos[1], Xk._pos[2]), Xk)) : Xk
      }, HowlerGlobal.prototype.orientation = function(kk, Fk, Ik, Xk, Tk, ik) {
        var yk = this;
        if (!yk.ctx || !yk.ctx.listener) return yk;
        var lk = yk._orientation;
        return Fk = "number" !== typeof Fk ? lk[1] : Fk, Ik = "number" !== typeof Ik ? lk[2] : Ik, Xk = "number" !== typeof Xk ? lk[3] : Xk, Tk = "number" !== typeof Tk ? lk[4] : Tk, ik = "number" !== typeof ik ? lk[5] : ik, "number" !== typeof kk ? lk : (yk._orientation = [kk, Fk, Ik, Xk, Tk, ik], "undefined" !== typeof yk.ctx.listener.forwardX ? (yk.ctx.listener.forwardX.setTargetAtTime(kk, Howler.ctx.currentTime, .1), yk.ctx.listener.forwardY.setTargetAtTime(Fk, Howler.ctx.currentTime, .1), yk.ctx.listener.forwardZ.setTargetAtTime(Ik, Howler.ctx.currentTime, .1), yk.ctx.listener.upX.setTargetAtTime(Xk, Howler.ctx.currentTime, .1), yk.ctx.listener.upY.setTargetAtTime(Tk, Howler.ctx.currentTime, .1), yk.ctx.listener.upZ.setTargetAtTime(ik, Howler.ctx.currentTime, .1)) : yk.ctx.listener.setOrientation(kk, Fk, Ik, Xk, Tk, ik), yk)
      }, Howl.prototype.init = (kk = Howl.prototype.init, function(Fk) {
        var Ik = this;
        return Ik._orientation = Fk.orientation || [1, 0, 0], Ik._stereo = Fk.stereo || null, Ik._pos = Fk.pos || null, Ik._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Fk.coneInnerAngle ? Fk.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Fk.coneOuterAngle ? Fk.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Fk.coneOuterGain ? Fk.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Fk.distanceModel ? Fk.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Fk.maxDistance ? Fk.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Fk.panningModel ? Fk.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Fk.refDistance ? Fk.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Fk.rolloffFactor ? Fk.rolloffFactor : 1
        }, Ik._onstereo = Fk.onstereo ? [{
          Ie: Fk.onstereo
        }] : [], Ik._onpos = Fk.onpos ? [{
          Ie: Fk.onpos
        }] : [], Ik._onorientation = Fk.onorientation ? [{
          Ie: Fk.onorientation
        }] : [], kk.call(this, Fk)
      }), Howl.prototype.stereo = function(kk, Ik) {
        var Xk = this;
        if (!Xk._webAudio) return Xk;
        if ("loaded" !== Xk._state) return Xk._queue.push({
          event: "stereo",
          action: function() {
            Xk.stereo(kk, Ik)
          }
        }), Xk;
        var Tk = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof Ik) {
          if ("number" !== typeof kk) return Xk._stereo;
          Xk._stereo = kk, Xk._pos = [kk, 0, 0]
        }
        for (var ik = Xk._getSoundIds(Ik), yk = 0; yk < ik.length; yk++) {
          var lk = Xk._soundById(ik[yk]);
          if (lk) {
            if ("number" !== typeof kk) return lk._stereo;
            lk._stereo = kk, lk._pos = [kk, 0, 0], lk._node && (lk._pannerAttr.panningModel = "equalpower", lk._panner && lk._panner.pan || Fk(lk, Tk), "spatial" === Tk ? "undefined" !== typeof lk._panner.positionX ? (lk._panner.positionX.setValueAtTime(kk, Howler.ctx.currentTime), lk._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), lk._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : lk._panner.setPosition(kk, 0, 0) : lk._panner.pan.setValueAtTime(kk, Howler.ctx.currentTime)), Xk._emit("stereo", lk._id)
          }
        }
        return Xk
      }, Howl.prototype.pos = function(kk, Ik, Xk, Tk) {
        var ik = this;
        if (!ik._webAudio) return ik;
        if ("loaded" !== ik._state) return ik._queue.push({
          event: "pos",
          action: function() {
            ik.pos(kk, Ik, Xk, Tk)
          }
        }), ik;
        if (Ik = "number" !== typeof Ik ? 0 : Ik, Xk = "number" !== typeof Xk ? -.5 : Xk, "undefined" === typeof Tk) {
          if ("number" !== typeof kk) return ik._pos;
          ik._pos = [kk, Ik, Xk]
        }
        for (var yk = ik._getSoundIds(Tk), lk = 0; lk < yk.length; lk++) {
          var ak = ik._soundById(yk[lk]);
          if (ak) {
            if ("number" !== typeof kk) return ak._pos;
            ak._pos = [kk, Ik, Xk], ak._node && (ak._panner && !ak._panner.pan || Fk(ak, "spatial"), "undefined" !== typeof ak._panner.positionX ? (ak._panner.positionX.setValueAtTime(kk, Howler.ctx.currentTime), ak._panner.positionY.setValueAtTime(Ik, Howler.ctx.currentTime), ak._panner.positionZ.setValueAtTime(Xk, Howler.ctx.currentTime)) : ak._panner.setPosition(kk, Ik, Xk)), ik._emit("pos", ak._id)
          }
        }
        return ik
      }, Howl.prototype.orientation = function(kk, Ik, Xk, Tk) {
        var ik = this;
        if (!ik._webAudio) return ik;
        if ("loaded" !== ik._state) return ik._queue.push({
          event: "orientation",
          action: function() {
            ik.orientation(kk, Ik, Xk, Tk)
          }
        }), ik;
        if (Ik = "number" !== typeof Ik ? ik._orientation[1] : Ik, Xk = "number" !== typeof Xk ? ik._orientation[2] : Xk, "undefined" === typeof Tk) {
          if ("number" !== typeof kk) return ik._orientation;
          ik._orientation = [kk, Ik, Xk]
        }
        for (var yk = ik._getSoundIds(Tk), lk = 0; lk < yk.length; lk++) {
          var ak = ik._soundById(yk[lk]);
          if (ak) {
            if ("number" !== typeof kk) return ak._orientation;
            ak._orientation = [kk, Ik, Xk], ak._node && (ak._panner || (ak._pos || (ak._pos = ik._pos || [0, 0, -.5]), Fk(ak, "spatial")), "undefined" !== typeof ak._panner.orientationX ? (ak._panner.orientationX.setValueAtTime(kk, Howler.ctx.currentTime), ak._panner.orientationY.setValueAtTime(Ik, Howler.ctx.currentTime), ak._panner.orientationZ.setValueAtTime(Xk, Howler.ctx.currentTime)) : ak._panner.setOrientation(kk, Ik, Xk)), ik._emit("orientation", ak._id)
          }
        }
        return ik
      }, Howl.prototype.pannerAttr = function() {
        var kk, Ik, Xk, Tk = this,
          ik = arguments;
        if (!Tk._webAudio) return Tk;
        if (0 === ik.length) return Tk._pannerAttr;
        if (1 === ik.length) {
          if ("object" !== typeof ik[0]) return (Xk = Tk._soundById(parseInt(ik[0], 10))) ? Xk._pannerAttr : Tk._pannerAttr;
          kk = ik[0], "undefined" === typeof Ik && (kk.pannerAttr || (kk.pannerAttr = {
            coneInnerAngle: kk.coneInnerAngle,
            coneOuterAngle: kk.coneOuterAngle,
            coneOuterGain: kk.coneOuterGain,
            distanceModel: kk.distanceModel,
            maxDistance: kk.maxDistance,
            refDistance: kk.refDistance,
            rolloffFactor: kk.rolloffFactor,
            panningModel: kk.panningModel
          }), Tk._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof kk.pannerAttr.coneInnerAngle ? kk.pannerAttr.coneInnerAngle : Tk._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof kk.pannerAttr.coneOuterAngle ? kk.pannerAttr.coneOuterAngle : Tk._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof kk.pannerAttr.coneOuterGain ? kk.pannerAttr.coneOuterGain : Tk._coneOuterGain,
            distanceModel: "undefined" !== typeof kk.pannerAttr.distanceModel ? kk.pannerAttr.distanceModel : Tk._distanceModel,
            maxDistance: "undefined" !== typeof kk.pannerAttr.maxDistance ? kk.pannerAttr.maxDistance : Tk._maxDistance,
            refDistance: "undefined" !== typeof kk.pannerAttr.refDistance ? kk.pannerAttr.refDistance : Tk._refDistance,
            rolloffFactor: "undefined" !== typeof kk.pannerAttr.rolloffFactor ? kk.pannerAttr.rolloffFactor : Tk._rolloffFactor,
            panningModel: "undefined" !== typeof kk.pannerAttr.panningModel ? kk.pannerAttr.panningModel : Tk._panningModel
          })
        } else 2 === ik.length && (kk = ik[0], Ik = parseInt(ik[1], 10));
        for (var yk = Tk._getSoundIds(Ik), lk = 0; lk < yk.length; lk++)
          if (Xk = Tk._soundById(yk[lk])) {
            var ak = Xk._pannerAttr;
            ak = {
              coneInnerAngle: "undefined" !== typeof kk.coneInnerAngle ? kk.coneInnerAngle : ak.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof kk.coneOuterAngle ? kk.coneOuterAngle : ak.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof kk.coneOuterGain ? kk.coneOuterGain : ak.coneOuterGain,
              distanceModel: "undefined" !== typeof kk.distanceModel ? kk.distanceModel : ak.distanceModel,
              maxDistance: "undefined" !== typeof kk.maxDistance ? kk.maxDistance : ak.maxDistance,
              refDistance: "undefined" !== typeof kk.refDistance ? kk.refDistance : ak.refDistance,
              rolloffFactor: "undefined" !== typeof kk.rolloffFactor ? kk.rolloffFactor : ak.rolloffFactor,
              panningModel: "undefined" !== typeof kk.panningModel ? kk.panningModel : ak.panningModel
            };
            var qk = Xk._panner;
            qk ? (qk.coneInnerAngle = ak.coneInnerAngle, qk.coneOuterAngle = ak.coneOuterAngle, qk.coneOuterGain = ak.coneOuterGain, qk.distanceModel = ak.distanceModel, qk.maxDistance = ak.maxDistance, qk.refDistance = ak.refDistance, qk.rolloffFactor = ak.rolloffFactor, qk.panningModel = ak.panningModel) : (Xk._pos || (Xk._pos = Tk._pos || [0, 0, -.5]), Fk(Xk, "spatial"))
          } return Tk
      }, Sound.prototype.init = function(kk) {
        return function() {
          var Fk = this,
            Ik = Fk._parent;
          Fk._orientation = Ik._orientation, Fk._stereo = Ik._stereo, Fk._pos = Ik._pos, Fk._pannerAttr = Ik._pannerAttr, kk.call(this), Fk._stereo ? Ik.stereo(Fk._stereo) : Fk._pos && Ik.pos(Fk._pos[0], Fk._pos[1], Fk._pos[2], Fk._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(kk) {
        return function() {
          var Fk = this,
            Ik = Fk._parent;
          return Fk._orientation = Ik._orientation, Fk._stereo = Ik._stereo, Fk._pos = Ik._pos, Fk._pannerAttr = Ik._pannerAttr, Fk._stereo ? Ik.stereo(Fk._stereo) : Fk._pos ? Ik.pos(Fk._pos[0], Fk._pos[1], Fk._pos[2], Fk._id) : Fk._panner && (Fk._panner.disconnect(0), Fk._panner = void 0, Ik._refreshBuffer(Fk)), kk.call(this)
        }
      }(Sound.prototype.reset);
      var Fk = function(kk, Fk) {
        "spatial" === (Fk = Fk || "spatial") ? (kk._panner = Howler.ctx.createPanner(), kk._panner.coneInnerAngle = kk._pannerAttr.coneInnerAngle, kk._panner.coneOuterAngle = kk._pannerAttr.coneOuterAngle, kk._panner.coneOuterGain = kk._pannerAttr.coneOuterGain, kk._panner.distanceModel = kk._pannerAttr.distanceModel, kk._panner.maxDistance = kk._pannerAttr.maxDistance, kk._panner.refDistance = kk._pannerAttr.refDistance, kk._panner.rolloffFactor = kk._pannerAttr.rolloffFactor, kk._panner.panningModel = kk._pannerAttr.panningModel, "undefined" !== typeof kk._panner.positionX ? (kk._panner.positionX.setValueAtTime(kk._pos[0], Howler.ctx.currentTime), kk._panner.positionY.setValueAtTime(kk._pos[1], Howler.ctx.currentTime), kk._panner.positionZ.setValueAtTime(kk._pos[2], Howler.ctx.currentTime)) : kk._panner.setPosition(kk._pos[0], kk._pos[1], kk._pos[2]), "undefined" !== typeof kk._panner.orientationX ? (kk._panner.orientationX.setValueAtTime(kk._orientation[0], Howler.ctx.currentTime), kk._panner.orientationY.setValueAtTime(kk._orientation[1], Howler.ctx.currentTime), kk._panner.orientationZ.setValueAtTime(kk._orientation[2], Howler.ctx.currentTime)) : kk._panner.setOrientation(kk._orientation[0], kk._orientation[1], kk._orientation[2])) : (kk._panner = Howler.ctx.createStereoPanner(), kk._panner.pan.setValueAtTime(kk._stereo, Howler.ctx.currentTime)), kk._panner.connect(kk._node), kk.vx || kk._parent.pause(kk._id, !0).play(kk._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);