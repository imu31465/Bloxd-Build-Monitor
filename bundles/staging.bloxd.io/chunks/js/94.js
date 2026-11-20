/*! For license information please see 6ndy1f.94.9236b032.chunk.js.LICENSE.txt */
export const id = 94;
export const ids = [94];
export const modules = {
  4579: (kk, Fk, Bk) => {
    var Rk;
    ! function() {
      var tk = function() {
        this.init()
      };
      tk.prototype = {
        init: function() {
          var kk = this || ak;
          return kk._counter = 1e3, kk._html5AudioPool = [], kk.html5PoolSize = 10, kk._codecs = {}, kk._howls = [], kk._muted = !1, kk._volume = 1, kk._canPlayEvent = "canplaythrough", kk._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, kk.masterGain = null, kk.noAudio = !1, kk.usingWebAudio = !0, kk.autoSuspend = !0, kk.ctx = null, kk.autoUnlock = !0, kk._setup(), kk
        },
        volume: function(kk) {
          var Fk = this || ak;
          if (kk = parseFloat(kk), Fk.ctx || Ak(), "undefined" !== typeof kk && kk >= 0 && kk <= 1) {
            if (Fk._volume = kk, Fk._muted) return Fk;
            Fk.usingWebAudio && Fk.masterGain.gain.setValueAtTime(kk, ak.ctx.currentTime);
            for (var Bk = 0; Bk < Fk._howls.length; Bk++)
              if (!Fk._howls[Bk]._webAudio)
                for (var Rk = Fk._howls[Bk]._getSoundIds(), tk = 0; tk < Rk.length; tk++) {
                  var Xk = Fk._howls[Bk]._soundById(Rk[tk]);
                  Xk && Xk._node && (Xk._node.volume = Xk._volume * kk)
                }
            return Fk
          }
          return Fk._volume
        },
        mute: function(kk) {
          var Fk = this || ak;
          Fk.ctx || Ak(), Fk._muted = kk, Fk.usingWebAudio && Fk.masterGain.gain.setValueAtTime(kk ? 0 : Fk._volume, ak.ctx.currentTime);
          for (var Bk = 0; Bk < Fk._howls.length; Bk++)
            if (!Fk._howls[Bk]._webAudio)
              for (var Rk = Fk._howls[Bk]._getSoundIds(), tk = 0; tk < Rk.length; tk++) {
                var Xk = Fk._howls[Bk]._soundById(Rk[tk]);
                Xk && Xk._node && (Xk._node.muted = !!kk || Xk._muted)
              }
          return Fk
        },
        stop: function() {
          for (var kk = this || ak, Fk = 0; Fk < kk._howls.length; Fk++) kk._howls[Fk].stop();
          return kk
        },
        unload: function() {
          for (var kk = this || ak, Fk = kk._howls.length - 1; Fk >= 0; Fk--) kk._howls[Fk].unload();
          return kk.usingWebAudio && kk.ctx && "undefined" !== typeof kk.ctx.close && (kk.ctx.close(), kk.ctx = null, Ak()), kk
        },
        codecs: function(kk) {
          return (this || ak)._codecs[kk.replace(/^x-/, "")]
        },
        _setup: function() {
          var kk = this || ak;
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
          var kk = this || ak,
            Fk = null;
          try {
            Fk = "undefined" !== typeof Audio ? new Audio : null
          } catch (sk) {
            return kk
          }
          if (!Fk || "function" !== typeof Fk.canPlayType) return kk;
          var Bk = Fk.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Rk = kk._navigator ? kk._navigator.userAgent : "",
            tk = Rk.match(/OPR\/([0-6].)/g),
            Xk = tk && parseInt(tk[0].split("/")[1], 10) < 33,
            bk = -1 !== Rk.indexOf("Safari") && -1 === Rk.indexOf("Chrome"),
            wk = Rk.match(/Version\/(.*?) /),
            dk = bk && wk && parseInt(wk[1], 10) < 15;
          return kk._codecs = {
            mp3: !(Xk || !Bk && !Fk.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!Bk,
            opus: !!Fk.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Fk.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Fk.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Fk.canPlayType('audio/wav; codecs="1"') || Fk.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Fk.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Fk.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Fk.canPlayType("audio/x-m4a;") || Fk.canPlayType("audio/m4a;") || Fk.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Fk.canPlayType("audio/x-m4b;") || Fk.canPlayType("audio/m4b;") || Fk.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Fk.canPlayType("audio/x-mp4;") || Fk.canPlayType("audio/mp4;") || Fk.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(dk || !Fk.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(dk || !Fk.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Fk.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Fk.canPlayType("audio/x-flac;") || Fk.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, kk
        },
        _unlockAudio: function() {
          var kk = this || ak;
          if (!kk._audioUnlocked && kk.ctx) {
            kk._audioUnlocked = !1, kk.autoUnlock = !1, kk._mobileUnloaded || 44100 === kk.ctx.sampleRate || (kk._mobileUnloaded = !0, kk.unload()), kk._scratchBuffer = kk.ctx.createBuffer(1, 1, 22050);
            var Fk = function(Bk) {
              for (; kk._html5AudioPool.length < kk.html5PoolSize;) try {
                var Rk = new Audio;
                Rk._unlocked = !0, kk._releaseHtml5Audio(Rk)
              } catch (Bk) {
                kk.noAudio = !0;
                break
              }
              for (var tk = 0; tk < kk._howls.length; tk++)
                if (!kk._howls[tk]._webAudio)
                  for (var ak = kk._howls[tk]._getSoundIds(), Xk = 0; Xk < ak.length; Xk++) {
                    var bk = kk._howls[tk]._soundById(ak[Xk]);
                    bk && bk._node && !bk._node._unlocked && (bk._node._unlocked = !0, bk._node.load())
                  }
              kk._autoResume();
              var wk = kk.ctx.createBufferSource();
              wk.buffer = kk._scratchBuffer, wk.connect(kk.ctx.destination), "undefined" === typeof wk.start ? wk.noteOn(0) : wk.start(0), "function" === typeof kk.ctx.resume && kk.ctx.resume(), wk.onended = function() {
                wk.disconnect(0), kk._audioUnlocked = !0, document.removeEventListener("touchstart", Fk, !0), document.removeEventListener("touchend", Fk, !0), document.removeEventListener("click", Fk, !0), document.removeEventListener("keydown", Fk, !0);
                for (var Bk = 0; Bk < kk._howls.length; Bk++) kk._howls[Bk]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Fk, !0), document.addEventListener("touchend", Fk, !0), document.addEventListener("click", Fk, !0), document.addEventListener("keydown", Fk, !0), kk
          }
        },
        _obtainHtml5Audio: function() {
          var kk = this || ak;
          if (kk._html5AudioPool.length) return kk._html5AudioPool.pop();
          var Fk = (new Audio).play();
          return Fk && "undefined" !== typeof Promise && (Fk instanceof Promise || "function" === typeof Fk.then) && Fk.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(kk) {
          var Fk = this || ak;
          return kk._unlocked && Fk._html5AudioPool.push(kk), Fk
        },
        _autoSuspend: function() {
          var kk = this;
          if (kk.autoSuspend && kk.ctx && "undefined" !== typeof kk.ctx.suspend && ak.usingWebAudio) {
            for (var Fk = 0; Fk < kk._howls.length; Fk++)
              if (kk._howls[Fk]._webAudio)
                for (var Bk = 0; Bk < kk._howls[Fk]._sounds.length; Bk++)
                  if (!kk._howls[Fk]._sounds[Bk].RY) return kk;
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
          if (kk.ctx && "undefined" !== typeof kk.ctx.resume && ak.usingWebAudio) return "running" === kk.state && "interrupted" !== kk.ctx.state && kk._suspendTimer ? (clearTimeout(kk._suspendTimer), kk._suspendTimer = null) : "suspended" === kk.state || "running" === kk.state && "interrupted" === kk.ctx.state ? (kk.ctx.resume().then((function() {
            kk.state = "running";
            for (var Fk = 0; Fk < kk._howls.length; Fk++) kk._howls[Fk]._emit("resume")
          })), kk._suspendTimer && (clearTimeout(kk._suspendTimer), kk._suspendTimer = null)) : "suspending" === kk.state && (kk._resumeAfterSuspend = !0), kk
        }
      };
      var ak = new tk,
        Xk = function(kk) {
          kk.src && 0 !== kk.src.length ? this.init(kk) : console.error("An array of source files must be passed with any new Howl.")
        };
      Xk.prototype = {
        init: function(kk) {
          var Fk = this;
          return ak.ctx || Ak(), Fk._autoplay = kk.autoplay || !1, Fk._format = "string" !== typeof kk.format ? kk.format : [kk.format], Fk._html5 = kk.html5 || !1, Fk._muted = kk.mute || !1, Fk._loop = kk.loop || !1, Fk._pool = kk.pool || 5, Fk._preload = "boolean" !== typeof kk.preload && "metadata" !== kk.preload || kk.preload, Fk._rate = kk.rate || 1, Fk._sprite = kk.sprite || {}, Fk._src = "string" !== typeof kk.src ? kk.src : [kk.src], Fk._volume = void 0 !== kk.volume ? kk.volume : 1, Fk._xhr = {
            method: kk.xhr && kk.xhr.method ? kk.xhr.method : "GET",
            headers: kk.xhr && kk.xhr.headers ? kk.xhr.headers : null,
            withCredentials: !(!kk.xhr || !kk.xhr.withCredentials) && kk.xhr.withCredentials
          }, Fk._duration = 0, Fk._state = "unloaded", Fk._sounds = [], Fk._endTimers = {}, Fk._queue = [], Fk._playLock = !1, Fk._onend = kk.onend ? [{
            oe: kk.onend
          }] : [], Fk._onfade = kk.onfade ? [{
            oe: kk.onfade
          }] : [], Fk._onload = kk.onload ? [{
            oe: kk.onload
          }] : [], Fk._onloaderror = kk.onloaderror ? [{
            oe: kk.onloaderror
          }] : [], Fk._onplayerror = kk.onplayerror ? [{
            oe: kk.onplayerror
          }] : [], Fk._onpause = kk.onpause ? [{
            oe: kk.onpause
          }] : [], Fk._onplay = kk.onplay ? [{
            oe: kk.onplay
          }] : [], Fk._onstop = kk.onstop ? [{
            oe: kk.onstop
          }] : [], Fk._onmute = kk.onmute ? [{
            oe: kk.onmute
          }] : [], Fk._onvolume = kk.onvolume ? [{
            oe: kk.onvolume
          }] : [], Fk._onrate = kk.onrate ? [{
            oe: kk.onrate
          }] : [], Fk._onseek = kk.onseek ? [{
            oe: kk.onseek
          }] : [], Fk._onunlock = kk.onunlock ? [{
            oe: kk.onunlock
          }] : [], Fk._onresume = [], Fk._webAudio = ak.usingWebAudio && !Fk._html5, "undefined" !== typeof ak.ctx && ak.ctx && ak.autoUnlock && ak._unlockAudio(), ak._howls.push(Fk), Fk._autoplay && Fk._queue.push({
            event: "play",
            action: function() {
              Fk.play()
            }
          }), Fk._preload && "none" !== Fk._preload && Fk.load(), Fk
        },
        load: function() {
          var kk = this,
            Fk = null;
          if (ak.noAudio) kk._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof kk._src && (kk._src = [kk._src]);
            for (var Bk = 0; Bk < kk._src.length; Bk++) {
              var Rk, tk;
              if (kk._format && kk._format[Bk]) Rk = kk._format[Bk];
              else {
                if ("string" !== typeof(tk = kk._src[Bk])) {
                  kk._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Rk = /^data:audio\/([^;,]+);/i.exec(tk)) || (Rk = /\.([^.]+)$/.exec(tk.split("?", 1)[0])), Rk && (Rk = Rk[1].toLowerCase())
              }
              if (Rk || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Rk && ak.codecs(Rk)) {
                Fk = kk._src[Bk];
                break
              }
            }
            if (Fk) return kk._src = Fk, kk._state = "loading", "https:" === window.location.protocol && "http:" === Fk.slice(0, 5) && (kk._html5 = !0, kk._webAudio = !1), new bk(kk), kk._webAudio && dk(kk), kk;
            kk._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(kk, Fk) {
          var Bk = this,
            Rk = null;
          if ("number" === typeof kk) Rk = kk, kk = null;
          else {
            if ("string" === typeof kk && "loaded" === Bk._state && !Bk._sprite[kk]) return null;
            if ("undefined" === typeof kk && (kk = "__default", !Bk._playLock)) {
              for (var tk = 0, Xk = 0; Xk < Bk._sounds.length; Xk++) Bk._sounds[Xk].RY && !Bk._sounds[Xk]._ended && (tk++, Rk = Bk._sounds[Xk]._id);
              1 === tk ? kk = null : Rk = null
            }
          }
          var bk = Rk ? Bk._soundById(Rk) : Bk._inactiveSound();
          if (!bk) return null;
          if (Rk && !kk && (kk = bk._sprite || "__default"), "loaded" !== Bk._state) {
            bk._sprite = kk, bk._ended = !1;
            var wk = bk._id;
            return Bk._queue.push({
              event: "play",
              action: function() {
                Bk.play(wk)
              }
            }), wk
          }
          if (Rk && !bk.RY) return Fk || Bk._loadQueue("play"), bk._id;
          Bk._webAudio && ak._autoResume();
          var dk = Math.max(0, bk._seek > 0 ? bk._seek : Bk._sprite[kk][0] / 1e3),
            sk = Math.max(0, (Bk._sprite[kk][0] + Bk._sprite[kk][1]) / 1e3 - dk),
            Vk = 1e3 * sk / Math.abs(bk._rate),
            Jk = Bk._sprite[kk][0] / 1e3,
            Ak = (Bk._sprite[kk][0] + Bk._sprite[kk][1]) / 1e3;
          bk._sprite = kk, bk._ended = !1;
          var ek = function() {
            bk.RY = !1, bk._seek = dk, bk._start = Jk, bk._stop = Ak, bk._loop = !(!bk._loop && !Bk._sprite[kk][2])
          };
          if (!(dk >= Ak)) {
            var yk = bk._node;
            if (Bk._webAudio) {
              var fk = function() {
                Bk._playLock = !1, ek(), Bk._refreshBuffer(bk);
                var kk = bk._muted || Bk._muted ? 0 : bk._volume;
                yk.gain.setValueAtTime(kk, ak.ctx.currentTime), bk._playStart = ak.ctx.currentTime, "undefined" === typeof yk.bufferSource.start ? bk._loop ? yk.bufferSource.noteGrainOn(0, dk, 86400) : yk.bufferSource.noteGrainOn(0, dk, sk) : bk._loop ? yk.bufferSource.start(0, dk, 86400) : yk.bufferSource.start(0, dk, sk), Vk !== 1 / 0 && (Bk._endTimers[bk._id] = setTimeout(Bk._ended.bind(Bk, bk), Vk)), Fk || setTimeout((function() {
                  Bk._emit("play", bk._id), Bk._loadQueue()
                }), 0)
              };
              "running" === ak.state && "interrupted" !== ak.ctx.state ? fk() : (Bk._playLock = !0, Bk.once("resume", fk), Bk._clearTimer(bk._id))
            } else {
              var mk = function() {
                yk.currentTime = dk, yk.muted = bk._muted || Bk._muted || ak._muted || yk.muted, yk.volume = bk._volume * ak.volume(), yk.playbackRate = bk._rate;
                try {
                  var Rk = yk.play();
                  if (Rk && "undefined" !== typeof Promise && (Rk instanceof Promise || "function" === typeof Rk.then) ? (Bk._playLock = !0, ek(), Rk.then((function() {
                      Bk._playLock = !1, yk._unlocked = !0, Fk ? Bk._loadQueue() : Bk._emit("play", bk._id)
                    })).catch((function() {
                      Bk._playLock = !1, Bk._emit("playerror", bk._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), bk._ended = !0, bk.RY = !0
                    }))) : Fk || (Bk._playLock = !1, ek(), Bk._emit("play", bk._id)), yk.playbackRate = bk._rate, yk.paused) return void Bk._emit("playerror", bk._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== kk || bk._loop ? Bk._endTimers[bk._id] = setTimeout(Bk._ended.bind(Bk, bk), Vk) : (Bk._endTimers[bk._id] = function() {
                    Bk._ended(bk), yk.removeEventListener("ended", Bk._endTimers[bk._id], !1)
                  }, yk.addEventListener("ended", Bk._endTimers[bk._id], !1))
                } catch (tk) {
                  Bk._emit("playerror", bk._id, tk)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === yk.src && (yk.src = Bk._src, yk.load());
              var Wk = window && window.ejecta || !yk.readyState && ak._navigator.isCocoonJS;
              if (yk.readyState >= 3 || Wk) mk();
              else {
                Bk._playLock = !0, Bk._state = "loading";
                var vk = function() {
                  Bk._state = "loaded", mk(), yk.removeEventListener(ak._canPlayEvent, vk, !1)
                };
                yk.addEventListener(ak._canPlayEvent, vk, !1), Bk._clearTimer(bk._id)
              }
            }
            return bk._id
          }
          Bk._ended(bk)
        },
        pause: function(kk) {
          var Fk = this;
          if ("loaded" !== Fk._state || Fk._playLock) return Fk._queue.push({
            event: "pause",
            action: function() {
              Fk.pause(kk)
            }
          }), Fk;
          for (var Bk = Fk._getSoundIds(kk), Rk = 0; Rk < Bk.length; Rk++) {
            Fk._clearTimer(Bk[Rk]);
            var tk = Fk._soundById(Bk[Rk]);
            if (tk && !tk.RY && (tk._seek = Fk.seek(Bk[Rk]), tk._rateSeek = 0, tk.RY = !0, Fk._stopFade(Bk[Rk]), tk._node))
              if (Fk._webAudio) {
                if (!tk._node.bufferSource) continue;
                "undefined" === typeof tk._node.bufferSource.stop ? tk._node.bufferSource.noteOff(0) : tk._node.bufferSource.stop(0), Fk._cleanBuffer(tk._node)
              } else isNaN(tk._node.duration) && tk._node.duration !== 1 / 0 || tk._node.pause();
            arguments[1] || Fk._emit("pause", tk ? tk._id : null)
          }
          return Fk
        },
        stop: function(kk, Fk) {
          var Bk = this;
          if ("loaded" !== Bk._state || Bk._playLock) return Bk._queue.push({
            event: "stop",
            action: function() {
              Bk.stop(kk)
            }
          }), Bk;
          for (var Rk = Bk._getSoundIds(kk), tk = 0; tk < Rk.length; tk++) {
            Bk._clearTimer(Rk[tk]);
            var ak = Bk._soundById(Rk[tk]);
            ak && (ak._seek = ak._start || 0, ak._rateSeek = 0, ak.RY = !0, ak._ended = !0, Bk._stopFade(Rk[tk]), ak._node && (Bk._webAudio ? ak._node.bufferSource && ("undefined" === typeof ak._node.bufferSource.stop ? ak._node.bufferSource.noteOff(0) : ak._node.bufferSource.stop(0), Bk._cleanBuffer(ak._node)) : isNaN(ak._node.duration) && ak._node.duration !== 1 / 0 || (ak._node.currentTime = ak._start || 0, ak._node.pause(), ak._node.duration === 1 / 0 && Bk._clearSound(ak._node))), Fk || Bk._emit("stop", ak._id))
          }
          return Bk
        },
        mute: function(kk, Fk) {
          var Bk = this;
          if ("loaded" !== Bk._state || Bk._playLock) return Bk._queue.push({
            event: "mute",
            action: function() {
              Bk.mute(kk, Fk)
            }
          }), Bk;
          if ("undefined" === typeof Fk) {
            if ("boolean" !== typeof kk) return Bk._muted;
            Bk._muted = kk
          }
          for (var Rk = Bk._getSoundIds(Fk), tk = 0; tk < Rk.length; tk++) {
            var Xk = Bk._soundById(Rk[tk]);
            Xk && (Xk._muted = kk, Xk._interval && Bk._stopFade(Xk._id), Bk._webAudio && Xk._node ? Xk._node.gain.setValueAtTime(kk ? 0 : Xk._volume, ak.ctx.currentTime) : Xk._node && (Xk._node.muted = !!ak._muted || kk), Bk._emit("mute", Xk._id))
          }
          return Bk
        },
        volume: function() {
          var kk, Fk, Bk, Rk = this,
            tk = arguments;
          if (0 === tk.length) return Rk._volume;
          if (1 === tk.length || 2 === tk.length && "undefined" === typeof tk[1] ? Rk._getSoundIds().indexOf(tk[0]) >= 0 ? Fk = parseInt(tk[0], 10) : kk = parseFloat(tk[0]) : tk.length >= 2 && (kk = parseFloat(tk[0]), Fk = parseInt(tk[1], 10)), !("undefined" !== typeof kk && kk >= 0 && kk <= 1)) return (Bk = Fk ? Rk._soundById(Fk) : Rk._sounds[0]) ? Bk._volume : 0;
          if ("loaded" !== Rk._state || Rk._playLock) return Rk._queue.push({
            event: "volume",
            action: function() {
              Rk.volume.apply(Rk, tk)
            }
          }), Rk;
          "undefined" === typeof Fk && (Rk._volume = kk), Fk = Rk._getSoundIds(Fk);
          for (var Xk = 0; Xk < Fk.length; Xk++)(Bk = Rk._soundById(Fk[Xk])) && (Bk._volume = kk, tk[2] || Rk._stopFade(Fk[Xk]), Rk._webAudio && Bk._node && !Bk._muted ? Bk._node.gain.setValueAtTime(kk, ak.ctx.currentTime) : Bk._node && !Bk._muted && (Bk._node.volume = kk * ak.volume()), Rk._emit("volume", Bk._id));
          return Rk
        },
        fade: function(kk, Fk, Bk, Rk) {
          var tk = this;
          if ("loaded" !== tk._state || tk._playLock) return tk._queue.push({
            event: "fade",
            action: function() {
              tk.fade(kk, Fk, Bk, Rk)
            }
          }), tk;
          kk = Math.min(Math.max(0, parseFloat(kk)), 1), Fk = Math.min(Math.max(0, parseFloat(Fk)), 1), Bk = parseFloat(Bk), tk.volume(kk, Rk);
          for (var Xk = tk._getSoundIds(Rk), bk = 0; bk < Xk.length; bk++) {
            var wk = tk._soundById(Xk[bk]);
            if (wk) {
              if (Rk || tk._stopFade(Xk[bk]), tk._webAudio && !wk._muted) {
                var dk = ak.ctx.currentTime,
                  sk = dk + Bk / 1e3;
                wk._volume = kk, wk._node.gain.setValueAtTime(kk, dk), wk._node.gain.linearRampToValueAtTime(Fk, sk)
              }
              tk._startFadeInterval(wk, kk, Fk, Bk, Xk[bk], "undefined" === typeof Rk)
            }
          }
          return tk
        },
        _startFadeInterval: function(kk, Fk, Bk, Rk, tk, ak) {
          var Xk = this,
            bk = Fk,
            wk = Bk - Fk,
            dk = Math.abs(wk / .01),
            sk = Math.max(4, dk > 0 ? Rk / dk : Rk),
            Vk = Date.now();
          kk._fadeTo = Bk, kk._interval = setInterval((function() {
            var tk = (Date.now() - Vk) / Rk;
            Vk = Date.now(), bk += wk * tk, bk = Math.round(100 * bk) / 100, bk = wk < 0 ? Math.max(Bk, bk) : Math.min(Bk, bk), Xk._webAudio ? kk._volume = bk : Xk.volume(bk, kk._id, !0), ak && (Xk._volume = bk), (Bk < Fk && bk <= Bk || Bk > Fk && bk >= Bk) && (clearInterval(kk._interval), kk._interval = null, kk._fadeTo = null, Xk.volume(Bk, kk._id), Xk._emit("fade", kk._id))
          }), sk)
        },
        _stopFade: function(kk) {
          var Fk = this,
            Bk = Fk._soundById(kk);
          return Bk && Bk._interval && (Fk._webAudio && Bk._node.gain.cancelScheduledValues(ak.ctx.currentTime), clearInterval(Bk._interval), Bk._interval = null, Fk.volume(Bk._fadeTo, kk), Bk._fadeTo = null, Fk._emit("fade", kk)), Fk
        },
        loop: function() {
          var kk, Fk, Bk, Rk = this,
            tk = arguments;
          if (0 === tk.length) return Rk._loop;
          if (1 === tk.length) {
            if ("boolean" !== typeof tk[0]) return !!(Bk = Rk._soundById(parseInt(tk[0], 10))) && Bk._loop;
            kk = tk[0], Rk._loop = kk
          } else 2 === tk.length && (kk = tk[0], Fk = parseInt(tk[1], 10));
          for (var ak = Rk._getSoundIds(Fk), Xk = 0; Xk < ak.length; Xk++)(Bk = Rk._soundById(ak[Xk])) && (Bk._loop = kk, Rk._webAudio && Bk._node && Bk._node.bufferSource && (Bk._node.bufferSource.loop = kk, kk && (Bk._node.bufferSource.loopStart = Bk._start || 0, Bk._node.bufferSource.loopEnd = Bk._stop, Rk.playing(ak[Xk]) && (Rk.pause(ak[Xk], !0), Rk.play(ak[Xk], !0)))));
          return Rk
        },
        rate: function() {
          var kk, Fk, Bk, Rk = this,
            tk = arguments;
          if (0 === tk.length) Fk = Rk._sounds[0]._id;
          else if (1 === tk.length) {
            Rk._getSoundIds().indexOf(tk[0]) >= 0 ? Fk = parseInt(tk[0], 10) : kk = parseFloat(tk[0])
          } else 2 === tk.length && (kk = parseFloat(tk[0]), Fk = parseInt(tk[1], 10));
          if ("number" !== typeof kk) return (Bk = Rk._soundById(Fk)) ? Bk._rate : Rk._rate;
          if ("loaded" !== Rk._state || Rk._playLock) return Rk._queue.push({
            event: "rate",
            action: function() {
              Rk.rate.apply(Rk, tk)
            }
          }), Rk;
          "undefined" === typeof Fk && (Rk._rate = kk), Fk = Rk._getSoundIds(Fk);
          for (var Xk = 0; Xk < Fk.length; Xk++)
            if (Bk = Rk._soundById(Fk[Xk])) {
              Rk.playing(Fk[Xk]) && (Bk._rateSeek = Rk.seek(Fk[Xk]), Bk._playStart = Rk._webAudio ? ak.ctx.currentTime : Bk._playStart), Bk._rate = kk, Rk._webAudio && Bk._node && Bk._node.bufferSource ? Bk._node.bufferSource.playbackRate.setValueAtTime(kk, ak.ctx.currentTime) : Bk._node && (Bk._node.playbackRate = kk);
              var bk = Rk.seek(Fk[Xk]),
                wk = 1e3 * ((Rk._sprite[Bk._sprite][0] + Rk._sprite[Bk._sprite][1]) / 1e3 - bk) / Math.abs(Bk._rate);
              !Rk._endTimers[Fk[Xk]] && Bk.RY || (Rk._clearTimer(Fk[Xk]), Rk._endTimers[Fk[Xk]] = setTimeout(Rk._ended.bind(Rk, Bk), wk)), Rk._emit("rate", Bk._id)
            } return Rk
        },
        seek: function() {
          var kk, Fk, Bk = this,
            Rk = arguments;
          if (0 === Rk.length) Bk._sounds.length && (Fk = Bk._sounds[0]._id);
          else if (1 === Rk.length) {
            Bk._getSoundIds().indexOf(Rk[0]) >= 0 ? Fk = parseInt(Rk[0], 10) : Bk._sounds.length && (Fk = Bk._sounds[0]._id, kk = parseFloat(Rk[0]))
          } else 2 === Rk.length && (kk = parseFloat(Rk[0]), Fk = parseInt(Rk[1], 10));
          if ("undefined" === typeof Fk) return 0;
          if ("number" === typeof kk && ("loaded" !== Bk._state || Bk._playLock)) return Bk._queue.push({
            event: "seek",
            action: function() {
              Bk.seek.apply(Bk, Rk)
            }
          }), Bk;
          var tk = Bk._soundById(Fk);
          if (tk) {
            if (!("number" === typeof kk && kk >= 0)) {
              if (Bk._webAudio) {
                var Xk = Bk.playing(Fk) ? ak.ctx.currentTime - tk._playStart : 0,
                  bk = tk._rateSeek ? tk._rateSeek - tk._seek : 0;
                return tk._seek + (bk + Xk * Math.abs(tk._rate))
              }
              return tk._node.currentTime
            }
            var wk = Bk.playing(Fk);
            wk && Bk.pause(Fk, !0), tk._seek = kk, tk._ended = !1, Bk._clearTimer(Fk), Bk._webAudio || !tk._node || isNaN(tk._node.duration) || (tk._node.currentTime = kk);
            var dk = function() {
              wk && Bk.play(Fk, !0), Bk._emit("seek", Fk)
            };
            if (wk && !Bk._webAudio) {
              var sk = function() {
                Bk._playLock ? setTimeout(sk, 0) : dk()
              };
              setTimeout(sk, 0)
            } else dk()
          }
          return Bk
        },
        playing: function(kk) {
          var Fk = this;
          if ("number" === typeof kk) {
            var Bk = Fk._soundById(kk);
            return !!Bk && !Bk.RY
          }
          for (var Rk = 0; Rk < Fk._sounds.length; Rk++)
            if (!Fk._sounds[Rk].RY) return !0;
          return !1
        },
        duration: function(kk) {
          var Fk = this,
            Bk = Fk._duration,
            Rk = Fk._soundById(kk);
          return Rk && (Bk = Fk._sprite[Rk._sprite][1] / 1e3), Bk
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var kk = this, Fk = kk._sounds, Bk = 0; Bk < Fk.length; Bk++) Fk[Bk].RY || kk.stop(Fk[Bk]._id), kk._webAudio || (kk._clearSound(Fk[Bk]._node), Fk[Bk]._node.removeEventListener("error", Fk[Bk]._errorFn, !1), Fk[Bk]._node.removeEventListener(ak._canPlayEvent, Fk[Bk]._loadFn, !1), Fk[Bk]._node.removeEventListener("ended", Fk[Bk]._endFn, !1), ak._releaseHtml5Audio(Fk[Bk]._node)), delete Fk[Bk]._node, kk._clearTimer(Fk[Bk]._id);
          var Rk = ak._howls.indexOf(kk);
          Rk >= 0 && ak._howls.splice(Rk, 1);
          var tk = !0;
          for (Bk = 0; Bk < ak._howls.length; Bk++)
            if (ak._howls[Bk]._src === kk._src || kk._src.indexOf(ak._howls[Bk]._src) >= 0) {
              tk = !1;
              break
            } return wk && tk && delete wk[kk._src], ak.noAudio = !1, kk._state = "unloaded", kk._sounds = [], kk = null, null
        },
        on: function(kk, Fk, Bk, Rk) {
          var tk = this["_on" + kk];
          return "function" === typeof Fk && tk.push(Rk ? {
            id: Bk,
            oe: Fk,
            once: Rk
          } : {
            id: Bk,
            oe: Fk
          }), this
        },
        off: function(kk, Fk, Bk) {
          var Rk = this,
            tk = Rk["_on" + kk],
            ak = 0;
          if ("number" === typeof Fk && (Bk = Fk, Fk = null), Fk || Bk)
            for (ak = 0; ak < tk.length; ak++) {
              var Xk = Bk === tk[ak].id;
              if (Fk === tk[ak].oe && Xk || !Fk && Xk) {
                tk.splice(ak, 1);
                break
              }
            } else if (kk) Rk["_on" + kk] = [];
            else {
              var bk = Object.keys(Rk);
              for (ak = 0; ak < bk.length; ak++) 0 === bk[ak].indexOf("_on") && Array.isArray(Rk[bk[ak]]) && (Rk[bk[ak]] = [])
            } return Rk
        },
        once: function(kk, Fk, Bk) {
          return this.on(kk, Fk, Bk, 1), this
        },
        _emit: function(kk, Fk, Bk) {
          for (var Rk = this, tk = Rk["_on" + kk], ak = tk.length - 1; ak >= 0; ak--) tk[ak].id && tk[ak].id !== Fk && "load" !== kk || (setTimeout(function(kk) {
            kk.call(this, Fk, Bk)
          }.bind(Rk, tk[ak].oe), 0), tk[ak].once && Rk.off(kk, tk[ak].oe, tk[ak].id));
          return Rk._loadQueue(kk), Rk
        },
        _loadQueue: function(kk) {
          var Fk = this;
          if (Fk._queue.length > 0) {
            var Bk = Fk._queue[0];
            Bk.event === kk && (Fk._queue.shift(), Fk._loadQueue()), kk || Bk.action()
          }
          return Fk
        },
        _ended: function(kk) {
          var Fk = this,
            Bk = kk._sprite;
          if (!Fk._webAudio && kk._node && !kk._node.paused && !kk._node.ended && kk._node.currentTime < kk._stop) return setTimeout(Fk._ended.bind(Fk, kk), 100), Fk;
          var Rk = !(!kk._loop && !Fk._sprite[Bk][2]);
          if (Fk._emit("end", kk._id), !Fk._webAudio && Rk && Fk.stop(kk._id, !0).play(kk._id), Fk._webAudio && Rk) {
            Fk._emit("play", kk._id), kk._seek = kk._start || 0, kk._rateSeek = 0, kk._playStart = ak.ctx.currentTime;
            var tk = 1e3 * (kk._stop - kk._start) / Math.abs(kk._rate);
            Fk._endTimers[kk._id] = setTimeout(Fk._ended.bind(Fk, kk), tk)
          }
          return Fk._webAudio && !Rk && (kk.RY = !0, kk._ended = !0, kk._seek = kk._start || 0, kk._rateSeek = 0, Fk._clearTimer(kk._id), Fk._cleanBuffer(kk._node), ak._autoSuspend()), Fk._webAudio || Rk || Fk.stop(kk._id, !0), Fk
        },
        _clearTimer: function(kk) {
          var Fk = this;
          if (Fk._endTimers[kk]) {
            if ("function" !== typeof Fk._endTimers[kk]) clearTimeout(Fk._endTimers[kk]);
            else {
              var Bk = Fk._soundById(kk);
              Bk && Bk._node && Bk._node.removeEventListener("ended", Fk._endTimers[kk], !1)
            }
            delete Fk._endTimers[kk]
          }
          return Fk
        },
        _soundById: function(kk) {
          for (var Fk = this, Bk = 0; Bk < Fk._sounds.length; Bk++)
            if (kk === Fk._sounds[Bk]._id) return Fk._sounds[Bk];
          return null
        },
        _inactiveSound: function() {
          var kk = this;
          kk._drain();
          for (var Fk = 0; Fk < kk._sounds.length; Fk++)
            if (kk._sounds[Fk]._ended) return kk._sounds[Fk].reset();
          return new bk(kk)
        },
        _drain: function() {
          var kk = this,
            Fk = kk._pool,
            Bk = 0,
            Rk = 0;
          if (!(kk._sounds.length < Fk)) {
            for (Rk = 0; Rk < kk._sounds.length; Rk++) kk._sounds[Rk]._ended && Bk++;
            for (Rk = kk._sounds.length - 1; Rk >= 0; Rk--) {
              if (Bk <= Fk) return;
              kk._sounds[Rk]._ended && (kk._webAudio && kk._sounds[Rk]._node && kk._sounds[Rk]._node.disconnect(0), kk._sounds.splice(Rk, 1), Bk--)
            }
          }
        },
        _getSoundIds: function(kk) {
          if ("undefined" === typeof kk) {
            for (var Fk = [], Bk = 0; Bk < this._sounds.length; Bk++) Fk.push(this._sounds[Bk]._id);
            return Fk
          }
          return [kk]
        },
        _refreshBuffer: function(kk) {
          return kk._node.bufferSource = ak.ctx.createBufferSource(), kk._node.bufferSource.buffer = wk[this._src], kk._panner ? kk._node.bufferSource.connect(kk._panner) : kk._node.bufferSource.connect(kk._node), kk._node.bufferSource.loop = kk._loop, kk._loop && (kk._node.bufferSource.loopStart = kk._start || 0, kk._node.bufferSource.loopEnd = kk._stop || 0), kk._node.bufferSource.playbackRate.setValueAtTime(kk._rate, ak.ctx.currentTime), this
        },
        _cleanBuffer: function(kk) {
          var Fk = ak._navigator && ak._navigator.vendor.indexOf("Apple") >= 0;
          if (ak._scratchBuffer && kk.bufferSource && (kk.bufferSource.onended = null, kk.bufferSource.disconnect(0), Fk)) try {
            kk.bufferSource.buffer = ak._scratchBuffer
          } catch (Bk) {}
          return kk.bufferSource = null, this
        },
        _clearSound: function(kk) {
          /MSIE |Trident\//.test(ak._navigator && ak._navigator.userAgent) || (kk.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var bk = function(kk) {
        this._parent = kk, this.init()
      };
      bk.prototype = {
        init: function() {
          var kk = this,
            Fk = kk._parent;
          return kk._muted = Fk._muted, kk._loop = Fk._loop, kk._volume = Fk._volume, kk._rate = Fk._rate, kk._seek = 0, kk.RY = !0, kk._ended = !0, kk._sprite = "__default", kk._id = ++ak._counter, Fk._sounds.push(kk), kk.create(), kk
        },
        create: function() {
          var kk = this,
            Fk = kk._parent,
            Bk = ak._muted || kk._muted || kk._parent._muted ? 0 : kk._volume;
          return Fk._webAudio ? (kk._node = "undefined" === typeof ak.ctx.createGain ? ak.ctx.createGainNode() : ak.ctx.createGain(), kk._node.gain.setValueAtTime(Bk, ak.ctx.currentTime), kk._node.paused = !0, kk._node.connect(ak.masterGain)) : ak.noAudio || (kk._node = ak._obtainHtml5Audio(), kk._errorFn = kk._errorListener.bind(kk), kk._node.addEventListener("error", kk._errorFn, !1), kk._loadFn = kk._loadListener.bind(kk), kk._node.addEventListener(ak._canPlayEvent, kk._loadFn, !1), kk._endFn = kk._endListener.bind(kk), kk._node.addEventListener("ended", kk._endFn, !1), kk._node.src = Fk._src, kk._node.preload = !0 === Fk._preload ? "auto" : Fk._preload, kk._node.volume = Bk * ak.volume(), kk._node.load()), kk
        },
        reset: function() {
          var kk = this,
            Fk = kk._parent;
          return kk._muted = Fk._muted, kk._loop = Fk._loop, kk._volume = Fk._volume, kk._rate = Fk._rate, kk._seek = 0, kk._rateSeek = 0, kk.RY = !0, kk._ended = !0, kk._sprite = "__default", kk._id = ++ak._counter, kk
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
          }), "loaded" !== Fk._state && (Fk._state = "loaded", Fk._emit("load"), Fk._loadQueue()), kk._node.removeEventListener(ak._canPlayEvent, kk._loadFn, !1)
        },
        _endListener: function() {
          var kk = this,
            Fk = kk._parent;
          Fk._duration === 1 / 0 && (Fk._duration = Math.ceil(10 * kk._node.duration) / 10, Fk._sprite.__default[1] === 1 / 0 && (Fk._sprite.__default[1] = 1e3 * Fk._duration), Fk._ended(kk)), kk._node.removeEventListener("ended", kk._endFn, !1)
        }
      };
      var wk = {},
        dk = function(kk) {
          var Fk = kk._src;
          if (wk[Fk]) return kk._duration = wk[Fk].duration, void Jk(kk);
          if (/^data:[^;]+;base64,/.test(Fk)) {
            for (var Bk = atob(Fk.split(",")[1]), Rk = new Uint8Array(Bk.length), tk = 0; tk < Bk.length; ++tk) Rk[tk] = Bk.charCodeAt(tk);
            Vk(Rk.buffer, kk)
          } else {
            var ak = new XMLHttpRequest;
            ak.open(kk._xhr.method, Fk, !0), ak.withCredentials = kk._xhr.withCredentials, ak.responseType = "arraybuffer", kk._xhr.headers && Object.keys(kk._xhr.headers).forEach((function(Fk) {
              ak.setRequestHeader(Fk, kk._xhr.headers[Fk])
            })), ak.onload = function() {
              var Fk = (ak.status + "")[0];
              "0" === Fk || "2" === Fk || "3" === Fk ? Vk(ak.response, kk) : kk._emit("loaderror", null, "Failed loading audio file with status: " + ak.status + ".")
            }, ak.onerror = function() {
              kk._webAudio && (kk._html5 = !0, kk._webAudio = !1, kk._sounds = [], delete wk[Fk], kk.load())
            }, sk(ak)
          }
        },
        sk = function(kk) {
          try {
            kk.send()
          } catch (Fk) {
            kk.onerror()
          }
        },
        Vk = function(kk, Fk) {
          var Bk = function() {
              Fk._emit("loaderror", null, "Decoding audio data failed.")
            },
            Rk = function(kk) {
              kk && Fk._sounds.length > 0 ? (wk[Fk._src] = kk, Jk(Fk, kk)) : Bk()
            };
          "undefined" !== typeof Promise && 1 === ak.ctx.decodeAudioData.length ? ak.ctx.decodeAudioData(kk).then(Rk).catch(Bk) : ak.ctx.decodeAudioData(kk, Rk, Bk)
        },
        Jk = function(kk, Fk) {
          Fk && !kk._duration && (kk._duration = Fk.duration), 0 === Object.keys(kk._sprite).length && (kk._sprite = {
            __default: [0, 1e3 * kk._duration]
          }), "loaded" !== kk._state && (kk._state = "loaded", kk._emit("load"), kk._loadQueue())
        },
        Ak = function() {
          if (ak.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? ak.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? ak.ctx = new webkitAudioContext : ak.usingWebAudio = !1
            } catch (tk) {
              ak.usingWebAudio = !1
            }
            ak.ctx || (ak.usingWebAudio = !1);
            var kk = /iP(hone|od|ad)/.test(ak._navigator && ak._navigator.platform),
              Fk = ak._navigator && ak._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              Bk = Fk ? parseInt(Fk[1], 10) : null;
            if (kk && Bk && Bk < 9) {
              var Rk = /safari/.test(ak._navigator && ak._navigator.userAgent.toLowerCase());
              ak._navigator && !Rk && (ak.usingWebAudio = !1)
            }
            ak.usingWebAudio && (ak.masterGain = "undefined" === typeof ak.ctx.createGain ? ak.ctx.createGainNode() : ak.ctx.createGain(), ak.masterGain.gain.setValueAtTime(ak._muted ? 0 : ak._volume, ak.ctx.currentTime), ak.masterGain.connect(ak.ctx.destination)), ak._setup()
          }
        };
      void 0 === (Rk = function() {
        return {
          Howler: ak,
          Howl: Xk
        }
      }.apply(Fk, [])) || (kk.exports = Rk), Fk.Howler = ak, Fk.Howl = Xk, "undefined" !== typeof Bk.g ? (Bk.g.HowlerGlobal = tk, Bk.g.Howler = ak, Bk.g.Howl = Xk, Bk.g.Sound = bk) : "undefined" !== typeof window && (window.HowlerGlobal = tk, window.Howler = ak, window.Howl = Xk, window.Sound = bk)
    }(),
    function() {
      var kk;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(kk) {
        var Fk = this;
        if (!Fk.ctx || !Fk.ctx.listener) return Fk;
        for (var Bk = Fk._howls.length - 1; Bk >= 0; Bk--) Fk._howls[Bk].stereo(kk);
        return Fk
      }, HowlerGlobal.prototype.pos = function(kk, Fk, Bk) {
        var Rk = this;
        return Rk.ctx && Rk.ctx.listener ? (Fk = "number" !== typeof Fk ? Rk._pos[1] : Fk, Bk = "number" !== typeof Bk ? Rk._pos[2] : Bk, "number" !== typeof kk ? Rk._pos : (Rk._pos = [kk, Fk, Bk], "undefined" !== typeof Rk.ctx.listener.positionX ? (Rk.ctx.listener.positionX.setTargetAtTime(Rk._pos[0], Howler.ctx.currentTime, .1), Rk.ctx.listener.positionY.setTargetAtTime(Rk._pos[1], Howler.ctx.currentTime, .1), Rk.ctx.listener.positionZ.setTargetAtTime(Rk._pos[2], Howler.ctx.currentTime, .1)) : Rk.ctx.listener.setPosition(Rk._pos[0], Rk._pos[1], Rk._pos[2]), Rk)) : Rk
      }, HowlerGlobal.prototype.orientation = function(kk, Fk, Bk, Rk, tk, ak) {
        var Xk = this;
        if (!Xk.ctx || !Xk.ctx.listener) return Xk;
        var bk = Xk._orientation;
        return Fk = "number" !== typeof Fk ? bk[1] : Fk, Bk = "number" !== typeof Bk ? bk[2] : Bk, Rk = "number" !== typeof Rk ? bk[3] : Rk, tk = "number" !== typeof tk ? bk[4] : tk, ak = "number" !== typeof ak ? bk[5] : ak, "number" !== typeof kk ? bk : (Xk._orientation = [kk, Fk, Bk, Rk, tk, ak], "undefined" !== typeof Xk.ctx.listener.forwardX ? (Xk.ctx.listener.forwardX.setTargetAtTime(kk, Howler.ctx.currentTime, .1), Xk.ctx.listener.forwardY.setTargetAtTime(Fk, Howler.ctx.currentTime, .1), Xk.ctx.listener.forwardZ.setTargetAtTime(Bk, Howler.ctx.currentTime, .1), Xk.ctx.listener.upX.setTargetAtTime(Rk, Howler.ctx.currentTime, .1), Xk.ctx.listener.upY.setTargetAtTime(tk, Howler.ctx.currentTime, .1), Xk.ctx.listener.upZ.setTargetAtTime(ak, Howler.ctx.currentTime, .1)) : Xk.ctx.listener.setOrientation(kk, Fk, Bk, Rk, tk, ak), Xk)
      }, Howl.prototype.init = (kk = Howl.prototype.init, function(Fk) {
        var Bk = this;
        return Bk._orientation = Fk.orientation || [1, 0, 0], Bk._stereo = Fk.stereo || null, Bk._pos = Fk.pos || null, Bk._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Fk.coneInnerAngle ? Fk.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Fk.coneOuterAngle ? Fk.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Fk.coneOuterGain ? Fk.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Fk.distanceModel ? Fk.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Fk.maxDistance ? Fk.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Fk.panningModel ? Fk.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Fk.refDistance ? Fk.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Fk.rolloffFactor ? Fk.rolloffFactor : 1
        }, Bk._onstereo = Fk.onstereo ? [{
          oe: Fk.onstereo
        }] : [], Bk._onpos = Fk.onpos ? [{
          oe: Fk.onpos
        }] : [], Bk._onorientation = Fk.onorientation ? [{
          oe: Fk.onorientation
        }] : [], kk.call(this, Fk)
      }), Howl.prototype.stereo = function(kk, Bk) {
        var Rk = this;
        if (!Rk._webAudio) return Rk;
        if ("loaded" !== Rk._state) return Rk._queue.push({
          event: "stereo",
          action: function() {
            Rk.stereo(kk, Bk)
          }
        }), Rk;
        var tk = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof Bk) {
          if ("number" !== typeof kk) return Rk._stereo;
          Rk._stereo = kk, Rk._pos = [kk, 0, 0]
        }
        for (var ak = Rk._getSoundIds(Bk), Xk = 0; Xk < ak.length; Xk++) {
          var bk = Rk._soundById(ak[Xk]);
          if (bk) {
            if ("number" !== typeof kk) return bk._stereo;
            bk._stereo = kk, bk._pos = [kk, 0, 0], bk._node && (bk._pannerAttr.panningModel = "equalpower", bk._panner && bk._panner.pan || Fk(bk, tk), "spatial" === tk ? "undefined" !== typeof bk._panner.positionX ? (bk._panner.positionX.setValueAtTime(kk, Howler.ctx.currentTime), bk._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), bk._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : bk._panner.setPosition(kk, 0, 0) : bk._panner.pan.setValueAtTime(kk, Howler.ctx.currentTime)), Rk._emit("stereo", bk._id)
          }
        }
        return Rk
      }, Howl.prototype.pos = function(kk, Bk, Rk, tk) {
        var ak = this;
        if (!ak._webAudio) return ak;
        if ("loaded" !== ak._state) return ak._queue.push({
          event: "pos",
          action: function() {
            ak.pos(kk, Bk, Rk, tk)
          }
        }), ak;
        if (Bk = "number" !== typeof Bk ? 0 : Bk, Rk = "number" !== typeof Rk ? -.5 : Rk, "undefined" === typeof tk) {
          if ("number" !== typeof kk) return ak._pos;
          ak._pos = [kk, Bk, Rk]
        }
        for (var Xk = ak._getSoundIds(tk), bk = 0; bk < Xk.length; bk++) {
          var wk = ak._soundById(Xk[bk]);
          if (wk) {
            if ("number" !== typeof kk) return wk._pos;
            wk._pos = [kk, Bk, Rk], wk._node && (wk._panner && !wk._panner.pan || Fk(wk, "spatial"), "undefined" !== typeof wk._panner.positionX ? (wk._panner.positionX.setValueAtTime(kk, Howler.ctx.currentTime), wk._panner.positionY.setValueAtTime(Bk, Howler.ctx.currentTime), wk._panner.positionZ.setValueAtTime(Rk, Howler.ctx.currentTime)) : wk._panner.setPosition(kk, Bk, Rk)), ak._emit("pos", wk._id)
          }
        }
        return ak
      }, Howl.prototype.orientation = function(kk, Bk, Rk, tk) {
        var ak = this;
        if (!ak._webAudio) return ak;
        if ("loaded" !== ak._state) return ak._queue.push({
          event: "orientation",
          action: function() {
            ak.orientation(kk, Bk, Rk, tk)
          }
        }), ak;
        if (Bk = "number" !== typeof Bk ? ak._orientation[1] : Bk, Rk = "number" !== typeof Rk ? ak._orientation[2] : Rk, "undefined" === typeof tk) {
          if ("number" !== typeof kk) return ak._orientation;
          ak._orientation = [kk, Bk, Rk]
        }
        for (var Xk = ak._getSoundIds(tk), bk = 0; bk < Xk.length; bk++) {
          var wk = ak._soundById(Xk[bk]);
          if (wk) {
            if ("number" !== typeof kk) return wk._orientation;
            wk._orientation = [kk, Bk, Rk], wk._node && (wk._panner || (wk._pos || (wk._pos = ak._pos || [0, 0, -.5]), Fk(wk, "spatial")), "undefined" !== typeof wk._panner.orientationX ? (wk._panner.orientationX.setValueAtTime(kk, Howler.ctx.currentTime), wk._panner.orientationY.setValueAtTime(Bk, Howler.ctx.currentTime), wk._panner.orientationZ.setValueAtTime(Rk, Howler.ctx.currentTime)) : wk._panner.setOrientation(kk, Bk, Rk)), ak._emit("orientation", wk._id)
          }
        }
        return ak
      }, Howl.prototype.pannerAttr = function() {
        var kk, Bk, Rk, tk = this,
          ak = arguments;
        if (!tk._webAudio) return tk;
        if (0 === ak.length) return tk._pannerAttr;
        if (1 === ak.length) {
          if ("object" !== typeof ak[0]) return (Rk = tk._soundById(parseInt(ak[0], 10))) ? Rk._pannerAttr : tk._pannerAttr;
          kk = ak[0], "undefined" === typeof Bk && (kk.pannerAttr || (kk.pannerAttr = {
            coneInnerAngle: kk.coneInnerAngle,
            coneOuterAngle: kk.coneOuterAngle,
            coneOuterGain: kk.coneOuterGain,
            distanceModel: kk.distanceModel,
            maxDistance: kk.maxDistance,
            refDistance: kk.refDistance,
            rolloffFactor: kk.rolloffFactor,
            panningModel: kk.panningModel
          }), tk._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof kk.pannerAttr.coneInnerAngle ? kk.pannerAttr.coneInnerAngle : tk._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof kk.pannerAttr.coneOuterAngle ? kk.pannerAttr.coneOuterAngle : tk._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof kk.pannerAttr.coneOuterGain ? kk.pannerAttr.coneOuterGain : tk._coneOuterGain,
            distanceModel: "undefined" !== typeof kk.pannerAttr.distanceModel ? kk.pannerAttr.distanceModel : tk._distanceModel,
            maxDistance: "undefined" !== typeof kk.pannerAttr.maxDistance ? kk.pannerAttr.maxDistance : tk._maxDistance,
            refDistance: "undefined" !== typeof kk.pannerAttr.refDistance ? kk.pannerAttr.refDistance : tk._refDistance,
            rolloffFactor: "undefined" !== typeof kk.pannerAttr.rolloffFactor ? kk.pannerAttr.rolloffFactor : tk._rolloffFactor,
            panningModel: "undefined" !== typeof kk.pannerAttr.panningModel ? kk.pannerAttr.panningModel : tk._panningModel
          })
        } else 2 === ak.length && (kk = ak[0], Bk = parseInt(ak[1], 10));
        for (var Xk = tk._getSoundIds(Bk), bk = 0; bk < Xk.length; bk++)
          if (Rk = tk._soundById(Xk[bk])) {
            var wk = Rk._pannerAttr;
            wk = {
              coneInnerAngle: "undefined" !== typeof kk.coneInnerAngle ? kk.coneInnerAngle : wk.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof kk.coneOuterAngle ? kk.coneOuterAngle : wk.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof kk.coneOuterGain ? kk.coneOuterGain : wk.coneOuterGain,
              distanceModel: "undefined" !== typeof kk.distanceModel ? kk.distanceModel : wk.distanceModel,
              maxDistance: "undefined" !== typeof kk.maxDistance ? kk.maxDistance : wk.maxDistance,
              refDistance: "undefined" !== typeof kk.refDistance ? kk.refDistance : wk.refDistance,
              rolloffFactor: "undefined" !== typeof kk.rolloffFactor ? kk.rolloffFactor : wk.rolloffFactor,
              panningModel: "undefined" !== typeof kk.panningModel ? kk.panningModel : wk.panningModel
            };
            var dk = Rk._panner;
            dk ? (dk.coneInnerAngle = wk.coneInnerAngle, dk.coneOuterAngle = wk.coneOuterAngle, dk.coneOuterGain = wk.coneOuterGain, dk.distanceModel = wk.distanceModel, dk.maxDistance = wk.maxDistance, dk.refDistance = wk.refDistance, dk.rolloffFactor = wk.rolloffFactor, dk.panningModel = wk.panningModel) : (Rk._pos || (Rk._pos = tk._pos || [0, 0, -.5]), Fk(Rk, "spatial"))
          } return tk
      }, Sound.prototype.init = function(kk) {
        return function() {
          var Fk = this,
            Bk = Fk._parent;
          Fk._orientation = Bk._orientation, Fk._stereo = Bk._stereo, Fk._pos = Bk._pos, Fk._pannerAttr = Bk._pannerAttr, kk.call(this), Fk._stereo ? Bk.stereo(Fk._stereo) : Fk._pos && Bk.pos(Fk._pos[0], Fk._pos[1], Fk._pos[2], Fk._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(kk) {
        return function() {
          var Fk = this,
            Bk = Fk._parent;
          return Fk._orientation = Bk._orientation, Fk._stereo = Bk._stereo, Fk._pos = Bk._pos, Fk._pannerAttr = Bk._pannerAttr, Fk._stereo ? Bk.stereo(Fk._stereo) : Fk._pos ? Bk.pos(Fk._pos[0], Fk._pos[1], Fk._pos[2], Fk._id) : Fk._panner && (Fk._panner.disconnect(0), Fk._panner = void 0, Bk._refreshBuffer(Fk)), kk.call(this)
        }
      }(Sound.prototype.reset);
      var Fk = function(kk, Fk) {
        "spatial" === (Fk = Fk || "spatial") ? (kk._panner = Howler.ctx.createPanner(), kk._panner.coneInnerAngle = kk._pannerAttr.coneInnerAngle, kk._panner.coneOuterAngle = kk._pannerAttr.coneOuterAngle, kk._panner.coneOuterGain = kk._pannerAttr.coneOuterGain, kk._panner.distanceModel = kk._pannerAttr.distanceModel, kk._panner.maxDistance = kk._pannerAttr.maxDistance, kk._panner.refDistance = kk._pannerAttr.refDistance, kk._panner.rolloffFactor = kk._pannerAttr.rolloffFactor, kk._panner.panningModel = kk._pannerAttr.panningModel, "undefined" !== typeof kk._panner.positionX ? (kk._panner.positionX.setValueAtTime(kk._pos[0], Howler.ctx.currentTime), kk._panner.positionY.setValueAtTime(kk._pos[1], Howler.ctx.currentTime), kk._panner.positionZ.setValueAtTime(kk._pos[2], Howler.ctx.currentTime)) : kk._panner.setPosition(kk._pos[0], kk._pos[1], kk._pos[2]), "undefined" !== typeof kk._panner.orientationX ? (kk._panner.orientationX.setValueAtTime(kk._orientation[0], Howler.ctx.currentTime), kk._panner.orientationY.setValueAtTime(kk._orientation[1], Howler.ctx.currentTime), kk._panner.orientationZ.setValueAtTime(kk._orientation[2], Howler.ctx.currentTime)) : kk._panner.setOrientation(kk._orientation[0], kk._orientation[1], kk._orientation[2])) : (kk._panner = Howler.ctx.createStereoPanner(), kk._panner.pan.setValueAtTime(kk._stereo, Howler.ctx.currentTime)), kk._panner.connect(kk._node), kk.RY || kk._parent.pause(kk._id, !0).play(kk._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);