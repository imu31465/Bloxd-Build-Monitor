/*! For license information please see 3lwmg.96.d55aeda7.chunk.js.LICENSE.txt */
export const id = 96;
export const ids = [96];
export const modules = {
  4804: (kk, ek, ik) => {
    var Dk;
    ! function() {
      var fk = function() {
        this.init()
      };
      fk.prototype = {
        init: function() {
          var kk = this || Sk;
          return kk._counter = 1e3, kk._html5AudioPool = [], kk.html5PoolSize = 10, kk._codecs = {}, kk._howls = [], kk._muted = !1, kk._volume = 1, kk._canPlayEvent = "canplaythrough", kk._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, kk.masterGain = null, kk.noAudio = !1, kk.usingWebAudio = !0, kk.autoSuspend = !0, kk.ctx = null, kk.autoUnlock = !0, kk._setup(), kk
        },
        volume: function(kk) {
          var ek = this || Sk;
          if (kk = parseFloat(kk), ek.ctx || nk(), "undefined" !== typeof kk && kk >= 0 && kk <= 1) {
            if (ek._volume = kk, ek._muted) return ek;
            ek.usingWebAudio && ek.masterGain.gain.setValueAtTime(kk, Sk.ctx.currentTime);
            for (var ik = 0; ik < ek._howls.length; ik++)
              if (!ek._howls[ik]._webAudio)
                for (var Dk = ek._howls[ik]._getSoundIds(), fk = 0; fk < Dk.length; fk++) {
                  var bk = ek._howls[ik]._soundById(Dk[fk]);
                  bk && bk._node && (bk._node.volume = bk._volume * kk)
                }
            return ek
          }
          return ek._volume
        },
        mute: function(kk) {
          var ek = this || Sk;
          ek.ctx || nk(), ek._muted = kk, ek.usingWebAudio && ek.masterGain.gain.setValueAtTime(kk ? 0 : ek._volume, Sk.ctx.currentTime);
          for (var ik = 0; ik < ek._howls.length; ik++)
            if (!ek._howls[ik]._webAudio)
              for (var Dk = ek._howls[ik]._getSoundIds(), fk = 0; fk < Dk.length; fk++) {
                var bk = ek._howls[ik]._soundById(Dk[fk]);
                bk && bk._node && (bk._node.muted = !!kk || bk._muted)
              }
          return ek
        },
        stop: function() {
          for (var kk = this || Sk, ek = 0; ek < kk._howls.length; ek++) kk._howls[ek].stop();
          return kk
        },
        unload: function() {
          for (var kk = this || Sk, ek = kk._howls.length - 1; ek >= 0; ek--) kk._howls[ek].unload();
          return kk.usingWebAudio && kk.ctx && "undefined" !== typeof kk.ctx.close && (kk.ctx.close(), kk.ctx = null, nk()), kk
        },
        codecs: function(kk) {
          return (this || Sk)._codecs[kk.replace(/^x-/, "")]
        },
        _setup: function() {
          var kk = this || Sk;
          if (kk.state = kk.ctx && kk.ctx.state || "suspended", kk._autoSuspend(), !kk.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (kk._canPlayEvent = "canplay")
            } catch (ek) {
              kk.noAudio = !0
            } else kk.noAudio = !0;
          try {
            (new Audio).muted && (kk.noAudio = !0)
          } catch (ek) {}
          return kk.noAudio || kk._setupCodecs(), kk
        },
        _setupCodecs: function() {
          var kk = this || Sk,
            ek = null;
          try {
            ek = "undefined" !== typeof Audio ? new Audio : null
          } catch (Mk) {
            return kk
          }
          if (!ek || "function" !== typeof ek.canPlayType) return kk;
          var ik = ek.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Dk = kk._navigator ? kk._navigator.userAgent : "",
            fk = Dk.match(/OPR\/([0-6].)/g),
            bk = fk && parseInt(fk[0].split("/")[1], 10) < 33,
            rk = -1 !== Dk.indexOf("Safari") && -1 === Dk.indexOf("Chrome"),
            Pk = Dk.match(/Version\/(.*?) /),
            mk = rk && Pk && parseInt(Pk[1], 10) < 15;
          return kk._codecs = {
            mp3: !(bk || !ik && !ek.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!ik,
            opus: !!ek.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!ek.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!ek.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(ek.canPlayType('audio/wav; codecs="1"') || ek.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!ek.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!ek.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(ek.canPlayType("audio/x-m4a;") || ek.canPlayType("audio/m4a;") || ek.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(ek.canPlayType("audio/x-m4b;") || ek.canPlayType("audio/m4b;") || ek.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(ek.canPlayType("audio/x-mp4;") || ek.canPlayType("audio/mp4;") || ek.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(mk || !ek.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(mk || !ek.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!ek.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(ek.canPlayType("audio/x-flac;") || ek.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, kk
        },
        _unlockAudio: function() {
          var kk = this || Sk;
          if (!kk._audioUnlocked && kk.ctx) {
            kk._audioUnlocked = !1, kk.autoUnlock = !1, kk._mobileUnloaded || 44100 === kk.ctx.sampleRate || (kk._mobileUnloaded = !0, kk.unload()), kk._scratchBuffer = kk.ctx.createBuffer(1, 1, 22050);
            var ek = function(ik) {
              for (; kk._html5AudioPool.length < kk.html5PoolSize;) try {
                var Dk = new Audio;
                Dk._unlocked = !0, kk._releaseHtml5Audio(Dk)
              } catch (ik) {
                kk.noAudio = !0;
                break
              }
              for (var fk = 0; fk < kk._howls.length; fk++)
                if (!kk._howls[fk]._webAudio)
                  for (var Sk = kk._howls[fk]._getSoundIds(), bk = 0; bk < Sk.length; bk++) {
                    var rk = kk._howls[fk]._soundById(Sk[bk]);
                    rk && rk._node && !rk._node._unlocked && (rk._node._unlocked = !0, rk._node.load())
                  }
              kk._autoResume();
              var Pk = kk.ctx.createBufferSource();
              Pk.buffer = kk._scratchBuffer, Pk.connect(kk.ctx.destination), "undefined" === typeof Pk.start ? Pk.noteOn(0) : Pk.start(0), "function" === typeof kk.ctx.resume && kk.ctx.resume(), Pk.onended = function() {
                Pk.disconnect(0), kk._audioUnlocked = !0, document.removeEventListener("touchstart", ek, !0), document.removeEventListener("touchend", ek, !0), document.removeEventListener("click", ek, !0), document.removeEventListener("keydown", ek, !0);
                for (var ik = 0; ik < kk._howls.length; ik++) kk._howls[ik]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", ek, !0), document.addEventListener("touchend", ek, !0), document.addEventListener("click", ek, !0), document.addEventListener("keydown", ek, !0), kk
          }
        },
        _obtainHtml5Audio: function() {
          var kk = this || Sk;
          if (kk._html5AudioPool.length) return kk._html5AudioPool.pop();
          var ek = (new Audio).play();
          return ek && "undefined" !== typeof Promise && (ek instanceof Promise || "function" === typeof ek.then) && ek.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(kk) {
          var ek = this || Sk;
          return kk._unlocked && ek._html5AudioPool.push(kk), ek
        },
        _autoSuspend: function() {
          var kk = this;
          if (kk.autoSuspend && kk.ctx && "undefined" !== typeof kk.ctx.suspend && Sk.usingWebAudio) {
            for (var ek = 0; ek < kk._howls.length; ek++)
              if (kk._howls[ek]._webAudio)
                for (var ik = 0; ik < kk._howls[ek]._sounds.length; ik++)
                  if (!kk._howls[ek]._sounds[ik].FY) return kk;
            return kk._suspendTimer && clearTimeout(kk._suspendTimer), kk._suspendTimer = setTimeout((function() {
              if (kk.autoSuspend) {
                kk._suspendTimer = null, kk.state = "suspending";
                var ek = function() {
                  kk.state = "suspended", kk._resumeAfterSuspend && (delete kk._resumeAfterSuspend, kk._autoResume())
                };
                kk.ctx.suspend().then(ek, ek)
              }
            }), 3e4), kk
          }
        },
        _autoResume: function() {
          var kk = this;
          if (kk.ctx && "undefined" !== typeof kk.ctx.resume && Sk.usingWebAudio) return "running" === kk.state && "interrupted" !== kk.ctx.state && kk._suspendTimer ? (clearTimeout(kk._suspendTimer), kk._suspendTimer = null) : "suspended" === kk.state || "running" === kk.state && "interrupted" === kk.ctx.state ? (kk.ctx.resume().then((function() {
            kk.state = "running";
            for (var ek = 0; ek < kk._howls.length; ek++) kk._howls[ek]._emit("resume")
          })), kk._suspendTimer && (clearTimeout(kk._suspendTimer), kk._suspendTimer = null)) : "suspending" === kk.state && (kk._resumeAfterSuspend = !0), kk
        }
      };
      var Sk = new fk,
        bk = function(kk) {
          kk.src && 0 !== kk.src.length ? this.init(kk) : console.error("An array of source files must be passed with any new Howl.")
        };
      bk.prototype = {
        init: function(kk) {
          var ek = this;
          return Sk.ctx || nk(), ek._autoplay = kk.autoplay || !1, ek._format = "string" !== typeof kk.format ? kk.format : [kk.format], ek._html5 = kk.html5 || !1, ek._muted = kk.mute || !1, ek._loop = kk.loop || !1, ek._pool = kk.pool || 5, ek._preload = "boolean" !== typeof kk.preload && "metadata" !== kk.preload || kk.preload, ek._rate = kk.rate || 1, ek._sprite = kk.sprite || {}, ek._src = "string" !== typeof kk.src ? kk.src : [kk.src], ek._volume = void 0 !== kk.volume ? kk.volume : 1, ek._xhr = {
            method: kk.xhr && kk.xhr.method ? kk.xhr.method : "GET",
            headers: kk.xhr && kk.xhr.headers ? kk.xhr.headers : null,
            withCredentials: !(!kk.xhr || !kk.xhr.withCredentials) && kk.xhr.withCredentials
          }, ek._duration = 0, ek._state = "unloaded", ek._sounds = [], ek._endTimers = {}, ek._queue = [], ek._playLock = !1, ek._onend = kk.onend ? [{
            sU: kk.onend
          }] : [], ek._onfade = kk.onfade ? [{
            sU: kk.onfade
          }] : [], ek._onload = kk.onload ? [{
            sU: kk.onload
          }] : [], ek._onloaderror = kk.onloaderror ? [{
            sU: kk.onloaderror
          }] : [], ek._onplayerror = kk.onplayerror ? [{
            sU: kk.onplayerror
          }] : [], ek._onpause = kk.onpause ? [{
            sU: kk.onpause
          }] : [], ek._onplay = kk.onplay ? [{
            sU: kk.onplay
          }] : [], ek._onstop = kk.onstop ? [{
            sU: kk.onstop
          }] : [], ek._onmute = kk.onmute ? [{
            sU: kk.onmute
          }] : [], ek._onvolume = kk.onvolume ? [{
            sU: kk.onvolume
          }] : [], ek._onrate = kk.onrate ? [{
            sU: kk.onrate
          }] : [], ek._onseek = kk.onseek ? [{
            sU: kk.onseek
          }] : [], ek._onunlock = kk.onunlock ? [{
            sU: kk.onunlock
          }] : [], ek._onresume = [], ek._webAudio = Sk.usingWebAudio && !ek._html5, "undefined" !== typeof Sk.ctx && Sk.ctx && Sk.autoUnlock && Sk._unlockAudio(), Sk._howls.push(ek), ek._autoplay && ek._queue.push({
            event: "play",
            action: function() {
              ek.play()
            }
          }), ek._preload && "none" !== ek._preload && ek.load(), ek
        },
        load: function() {
          var kk = this,
            ek = null;
          if (Sk.noAudio) kk._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof kk._src && (kk._src = [kk._src]);
            for (var ik = 0; ik < kk._src.length; ik++) {
              var Dk, fk;
              if (kk._format && kk._format[ik]) Dk = kk._format[ik];
              else {
                if ("string" !== typeof(fk = kk._src[ik])) {
                  kk._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Dk = /^data:audio\/([^;,]+);/i.exec(fk)) || (Dk = /\.([^.]+)$/.exec(fk.split("?", 1)[0])), Dk && (Dk = Dk[1].toLowerCase())
              }
              if (Dk || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Dk && Sk.codecs(Dk)) {
                ek = kk._src[ik];
                break
              }
            }
            if (ek) return kk._src = ek, kk._state = "loading", "https:" === window.location.protocol && "http:" === ek.slice(0, 5) && (kk._html5 = !0, kk._webAudio = !1), new rk(kk), kk._webAudio && mk(kk), kk;
            kk._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(kk, ek) {
          var ik = this,
            Dk = null;
          if ("number" === typeof kk) Dk = kk, kk = null;
          else {
            if ("string" === typeof kk && "loaded" === ik._state && !ik._sprite[kk]) return null;
            if ("undefined" === typeof kk && (kk = "__default", !ik._playLock)) {
              for (var fk = 0, bk = 0; bk < ik._sounds.length; bk++) ik._sounds[bk].FY && !ik._sounds[bk]._ended && (fk++, Dk = ik._sounds[bk]._id);
              1 === fk ? kk = null : Dk = null
            }
          }
          var rk = Dk ? ik._soundById(Dk) : ik._inactiveSound();
          if (!rk) return null;
          if (Dk && !kk && (kk = rk._sprite || "__default"), "loaded" !== ik._state) {
            rk._sprite = kk, rk._ended = !1;
            var Pk = rk._id;
            return ik._queue.push({
              event: "play",
              action: function() {
                ik.play(Pk)
              }
            }), Pk
          }
          if (Dk && !rk.FY) return ek || ik._loadQueue("play"), rk._id;
          ik._webAudio && Sk._autoResume();
          var mk = Math.max(0, rk._seek > 0 ? rk._seek : ik._sprite[kk][0] / 1e3),
            Mk = Math.max(0, (ik._sprite[kk][0] + ik._sprite[kk][1]) / 1e3 - mk),
            Kk = 1e3 * Mk / Math.abs(rk._rate),
            xk = ik._sprite[kk][0] / 1e3,
            nk = (ik._sprite[kk][0] + ik._sprite[kk][1]) / 1e3;
          rk._sprite = kk, rk._ended = !1;
          var Uk = function() {
            rk.FY = !1, rk._seek = mk, rk._start = xk, rk._stop = nk, rk._loop = !(!rk._loop && !ik._sprite[kk][2])
          };
          if (!(mk >= nk)) {
            var Hk = rk._node;
            if (ik._webAudio) {
              var wk = function() {
                ik._playLock = !1, Uk(), ik._refreshBuffer(rk);
                var kk = rk._muted || ik._muted ? 0 : rk._volume;
                Hk.gain.setValueAtTime(kk, Sk.ctx.currentTime), rk._playStart = Sk.ctx.currentTime, "undefined" === typeof Hk.bufferSource.start ? rk._loop ? Hk.bufferSource.noteGrainOn(0, mk, 86400) : Hk.bufferSource.noteGrainOn(0, mk, Mk) : rk._loop ? Hk.bufferSource.start(0, mk, 86400) : Hk.bufferSource.start(0, mk, Mk), Kk !== 1 / 0 && (ik._endTimers[rk._id] = setTimeout(ik._ended.bind(ik, rk), Kk)), ek || setTimeout((function() {
                  ik._emit("play", rk._id), ik._loadQueue()
                }), 0)
              };
              "running" === Sk.state && "interrupted" !== Sk.ctx.state ? wk() : (ik._playLock = !0, ik.once("resume", wk), ik._clearTimer(rk._id))
            } else {
              var lk = function() {
                Hk.currentTime = mk, Hk.muted = rk._muted || ik._muted || Sk._muted || Hk.muted, Hk.volume = rk._volume * Sk.volume(), Hk.playbackRate = rk._rate;
                try {
                  var Dk = Hk.play();
                  if (Dk && "undefined" !== typeof Promise && (Dk instanceof Promise || "function" === typeof Dk.then) ? (ik._playLock = !0, Uk(), Dk.then((function() {
                      ik._playLock = !1, Hk._unlocked = !0, ek ? ik._loadQueue() : ik._emit("play", rk._id)
                    })).catch((function() {
                      ik._playLock = !1, ik._emit("playerror", rk._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), rk._ended = !0, rk.FY = !0
                    }))) : ek || (ik._playLock = !1, Uk(), ik._emit("play", rk._id)), Hk.playbackRate = rk._rate, Hk.paused) return void ik._emit("playerror", rk._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== kk || rk._loop ? ik._endTimers[rk._id] = setTimeout(ik._ended.bind(ik, rk), Kk) : (ik._endTimers[rk._id] = function() {
                    ik._ended(rk), Hk.removeEventListener("ended", ik._endTimers[rk._id], !1)
                  }, Hk.addEventListener("ended", ik._endTimers[rk._id], !1))
                } catch (fk) {
                  ik._emit("playerror", rk._id, fk)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Hk.src && (Hk.src = ik._src, Hk.load());
              var pk = window && window.ejecta || !Hk.readyState && Sk._navigator.isCocoonJS;
              if (Hk.readyState >= 3 || pk) lk();
              else {
                ik._playLock = !0, ik._state = "loading";
                var yk = function() {
                  ik._state = "loaded", lk(), Hk.removeEventListener(Sk._canPlayEvent, yk, !1)
                };
                Hk.addEventListener(Sk._canPlayEvent, yk, !1), ik._clearTimer(rk._id)
              }
            }
            return rk._id
          }
          ik._ended(rk)
        },
        pause: function(kk) {
          var ek = this;
          if ("loaded" !== ek._state || ek._playLock) return ek._queue.push({
            event: "pause",
            action: function() {
              ek.pause(kk)
            }
          }), ek;
          for (var ik = ek._getSoundIds(kk), Dk = 0; Dk < ik.length; Dk++) {
            ek._clearTimer(ik[Dk]);
            var fk = ek._soundById(ik[Dk]);
            if (fk && !fk.FY && (fk._seek = ek.seek(ik[Dk]), fk._rateSeek = 0, fk.FY = !0, ek._stopFade(ik[Dk]), fk._node))
              if (ek._webAudio) {
                if (!fk._node.bufferSource) continue;
                "undefined" === typeof fk._node.bufferSource.stop ? fk._node.bufferSource.noteOff(0) : fk._node.bufferSource.stop(0), ek._cleanBuffer(fk._node)
              } else isNaN(fk._node.duration) && fk._node.duration !== 1 / 0 || fk._node.pause();
            arguments[1] || ek._emit("pause", fk ? fk._id : null)
          }
          return ek
        },
        stop: function(kk, ek) {
          var ik = this;
          if ("loaded" !== ik._state || ik._playLock) return ik._queue.push({
            event: "stop",
            action: function() {
              ik.stop(kk)
            }
          }), ik;
          for (var Dk = ik._getSoundIds(kk), fk = 0; fk < Dk.length; fk++) {
            ik._clearTimer(Dk[fk]);
            var Sk = ik._soundById(Dk[fk]);
            Sk && (Sk._seek = Sk._start || 0, Sk._rateSeek = 0, Sk.FY = !0, Sk._ended = !0, ik._stopFade(Dk[fk]), Sk._node && (ik._webAudio ? Sk._node.bufferSource && ("undefined" === typeof Sk._node.bufferSource.stop ? Sk._node.bufferSource.noteOff(0) : Sk._node.bufferSource.stop(0), ik._cleanBuffer(Sk._node)) : isNaN(Sk._node.duration) && Sk._node.duration !== 1 / 0 || (Sk._node.currentTime = Sk._start || 0, Sk._node.pause(), Sk._node.duration === 1 / 0 && ik._clearSound(Sk._node))), ek || ik._emit("stop", Sk._id))
          }
          return ik
        },
        mute: function(kk, ek) {
          var ik = this;
          if ("loaded" !== ik._state || ik._playLock) return ik._queue.push({
            event: "mute",
            action: function() {
              ik.mute(kk, ek)
            }
          }), ik;
          if ("undefined" === typeof ek) {
            if ("boolean" !== typeof kk) return ik._muted;
            ik._muted = kk
          }
          for (var Dk = ik._getSoundIds(ek), fk = 0; fk < Dk.length; fk++) {
            var bk = ik._soundById(Dk[fk]);
            bk && (bk._muted = kk, bk._interval && ik._stopFade(bk._id), ik._webAudio && bk._node ? bk._node.gain.setValueAtTime(kk ? 0 : bk._volume, Sk.ctx.currentTime) : bk._node && (bk._node.muted = !!Sk._muted || kk), ik._emit("mute", bk._id))
          }
          return ik
        },
        volume: function() {
          var kk, ek, ik, Dk = this,
            fk = arguments;
          if (0 === fk.length) return Dk._volume;
          if (1 === fk.length || 2 === fk.length && "undefined" === typeof fk[1] ? Dk._getSoundIds().indexOf(fk[0]) >= 0 ? ek = parseInt(fk[0], 10) : kk = parseFloat(fk[0]) : fk.length >= 2 && (kk = parseFloat(fk[0]), ek = parseInt(fk[1], 10)), !("undefined" !== typeof kk && kk >= 0 && kk <= 1)) return (ik = ek ? Dk._soundById(ek) : Dk._sounds[0]) ? ik._volume : 0;
          if ("loaded" !== Dk._state || Dk._playLock) return Dk._queue.push({
            event: "volume",
            action: function() {
              Dk.volume.apply(Dk, fk)
            }
          }), Dk;
          "undefined" === typeof ek && (Dk._volume = kk), ek = Dk._getSoundIds(ek);
          for (var bk = 0; bk < ek.length; bk++)(ik = Dk._soundById(ek[bk])) && (ik._volume = kk, fk[2] || Dk._stopFade(ek[bk]), Dk._webAudio && ik._node && !ik._muted ? ik._node.gain.setValueAtTime(kk, Sk.ctx.currentTime) : ik._node && !ik._muted && (ik._node.volume = kk * Sk.volume()), Dk._emit("volume", ik._id));
          return Dk
        },
        fade: function(kk, ek, ik, Dk) {
          var fk = this;
          if ("loaded" !== fk._state || fk._playLock) return fk._queue.push({
            event: "fade",
            action: function() {
              fk.fade(kk, ek, ik, Dk)
            }
          }), fk;
          kk = Math.min(Math.max(0, parseFloat(kk)), 1), ek = Math.min(Math.max(0, parseFloat(ek)), 1), ik = parseFloat(ik), fk.volume(kk, Dk);
          for (var bk = fk._getSoundIds(Dk), rk = 0; rk < bk.length; rk++) {
            var Pk = fk._soundById(bk[rk]);
            if (Pk) {
              if (Dk || fk._stopFade(bk[rk]), fk._webAudio && !Pk._muted) {
                var mk = Sk.ctx.currentTime,
                  Mk = mk + ik / 1e3;
                Pk._volume = kk, Pk._node.gain.setValueAtTime(kk, mk), Pk._node.gain.linearRampToValueAtTime(ek, Mk)
              }
              fk._startFadeInterval(Pk, kk, ek, ik, bk[rk], "undefined" === typeof Dk)
            }
          }
          return fk
        },
        _startFadeInterval: function(kk, ek, ik, Dk, fk, Sk) {
          var bk = this,
            rk = ek,
            Pk = ik - ek,
            mk = Math.abs(Pk / .01),
            Mk = Math.max(4, mk > 0 ? Dk / mk : Dk),
            Kk = Date.now();
          kk._fadeTo = ik, kk._interval = setInterval((function() {
            var fk = (Date.now() - Kk) / Dk;
            Kk = Date.now(), rk += Pk * fk, rk = Math.round(100 * rk) / 100, rk = Pk < 0 ? Math.max(ik, rk) : Math.min(ik, rk), bk._webAudio ? kk._volume = rk : bk.volume(rk, kk._id, !0), Sk && (bk._volume = rk), (ik < ek && rk <= ik || ik > ek && rk >= ik) && (clearInterval(kk._interval), kk._interval = null, kk._fadeTo = null, bk.volume(ik, kk._id), bk._emit("fade", kk._id))
          }), Mk)
        },
        _stopFade: function(kk) {
          var ek = this,
            ik = ek._soundById(kk);
          return ik && ik._interval && (ek._webAudio && ik._node.gain.cancelScheduledValues(Sk.ctx.currentTime), clearInterval(ik._interval), ik._interval = null, ek.volume(ik._fadeTo, kk), ik._fadeTo = null, ek._emit("fade", kk)), ek
        },
        loop: function() {
          var kk, ek, ik, Dk = this,
            fk = arguments;
          if (0 === fk.length) return Dk._loop;
          if (1 === fk.length) {
            if ("boolean" !== typeof fk[0]) return !!(ik = Dk._soundById(parseInt(fk[0], 10))) && ik._loop;
            kk = fk[0], Dk._loop = kk
          } else 2 === fk.length && (kk = fk[0], ek = parseInt(fk[1], 10));
          for (var Sk = Dk._getSoundIds(ek), bk = 0; bk < Sk.length; bk++)(ik = Dk._soundById(Sk[bk])) && (ik._loop = kk, Dk._webAudio && ik._node && ik._node.bufferSource && (ik._node.bufferSource.loop = kk, kk && (ik._node.bufferSource.loopStart = ik._start || 0, ik._node.bufferSource.loopEnd = ik._stop, Dk.playing(Sk[bk]) && (Dk.pause(Sk[bk], !0), Dk.play(Sk[bk], !0)))));
          return Dk
        },
        rate: function() {
          var kk, ek, ik, Dk = this,
            fk = arguments;
          if (0 === fk.length) ek = Dk._sounds[0]._id;
          else if (1 === fk.length) {
            Dk._getSoundIds().indexOf(fk[0]) >= 0 ? ek = parseInt(fk[0], 10) : kk = parseFloat(fk[0])
          } else 2 === fk.length && (kk = parseFloat(fk[0]), ek = parseInt(fk[1], 10));
          if ("number" !== typeof kk) return (ik = Dk._soundById(ek)) ? ik._rate : Dk._rate;
          if ("loaded" !== Dk._state || Dk._playLock) return Dk._queue.push({
            event: "rate",
            action: function() {
              Dk.rate.apply(Dk, fk)
            }
          }), Dk;
          "undefined" === typeof ek && (Dk._rate = kk), ek = Dk._getSoundIds(ek);
          for (var bk = 0; bk < ek.length; bk++)
            if (ik = Dk._soundById(ek[bk])) {
              Dk.playing(ek[bk]) && (ik._rateSeek = Dk.seek(ek[bk]), ik._playStart = Dk._webAudio ? Sk.ctx.currentTime : ik._playStart), ik._rate = kk, Dk._webAudio && ik._node && ik._node.bufferSource ? ik._node.bufferSource.playbackRate.setValueAtTime(kk, Sk.ctx.currentTime) : ik._node && (ik._node.playbackRate = kk);
              var rk = Dk.seek(ek[bk]),
                Pk = 1e3 * ((Dk._sprite[ik._sprite][0] + Dk._sprite[ik._sprite][1]) / 1e3 - rk) / Math.abs(ik._rate);
              !Dk._endTimers[ek[bk]] && ik.FY || (Dk._clearTimer(ek[bk]), Dk._endTimers[ek[bk]] = setTimeout(Dk._ended.bind(Dk, ik), Pk)), Dk._emit("rate", ik._id)
            } return Dk
        },
        seek: function() {
          var kk, ek, ik = this,
            Dk = arguments;
          if (0 === Dk.length) ik._sounds.length && (ek = ik._sounds[0]._id);
          else if (1 === Dk.length) {
            ik._getSoundIds().indexOf(Dk[0]) >= 0 ? ek = parseInt(Dk[0], 10) : ik._sounds.length && (ek = ik._sounds[0]._id, kk = parseFloat(Dk[0]))
          } else 2 === Dk.length && (kk = parseFloat(Dk[0]), ek = parseInt(Dk[1], 10));
          if ("undefined" === typeof ek) return 0;
          if ("number" === typeof kk && ("loaded" !== ik._state || ik._playLock)) return ik._queue.push({
            event: "seek",
            action: function() {
              ik.seek.apply(ik, Dk)
            }
          }), ik;
          var fk = ik._soundById(ek);
          if (fk) {
            if (!("number" === typeof kk && kk >= 0)) {
              if (ik._webAudio) {
                var bk = ik.playing(ek) ? Sk.ctx.currentTime - fk._playStart : 0,
                  rk = fk._rateSeek ? fk._rateSeek - fk._seek : 0;
                return fk._seek + (rk + bk * Math.abs(fk._rate))
              }
              return fk._node.currentTime
            }
            var Pk = ik.playing(ek);
            Pk && ik.pause(ek, !0), fk._seek = kk, fk._ended = !1, ik._clearTimer(ek), ik._webAudio || !fk._node || isNaN(fk._node.duration) || (fk._node.currentTime = kk);
            var mk = function() {
              Pk && ik.play(ek, !0), ik._emit("seek", ek)
            };
            if (Pk && !ik._webAudio) {
              var Mk = function() {
                ik._playLock ? setTimeout(Mk, 0) : mk()
              };
              setTimeout(Mk, 0)
            } else mk()
          }
          return ik
        },
        playing: function(kk) {
          var ek = this;
          if ("number" === typeof kk) {
            var ik = ek._soundById(kk);
            return !!ik && !ik.FY
          }
          for (var Dk = 0; Dk < ek._sounds.length; Dk++)
            if (!ek._sounds[Dk].FY) return !0;
          return !1
        },
        duration: function(kk) {
          var ek = this,
            ik = ek._duration,
            Dk = ek._soundById(kk);
          return Dk && (ik = ek._sprite[Dk._sprite][1] / 1e3), ik
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var kk = this, ek = kk._sounds, ik = 0; ik < ek.length; ik++) ek[ik].FY || kk.stop(ek[ik]._id), kk._webAudio || (kk._clearSound(ek[ik]._node), ek[ik]._node.removeEventListener("error", ek[ik]._errorFn, !1), ek[ik]._node.removeEventListener(Sk._canPlayEvent, ek[ik]._loadFn, !1), ek[ik]._node.removeEventListener("ended", ek[ik]._endFn, !1), Sk._releaseHtml5Audio(ek[ik]._node)), delete ek[ik]._node, kk._clearTimer(ek[ik]._id);
          var Dk = Sk._howls.indexOf(kk);
          Dk >= 0 && Sk._howls.splice(Dk, 1);
          var fk = !0;
          for (ik = 0; ik < Sk._howls.length; ik++)
            if (Sk._howls[ik]._src === kk._src || kk._src.indexOf(Sk._howls[ik]._src) >= 0) {
              fk = !1;
              break
            } return Pk && fk && delete Pk[kk._src], Sk.noAudio = !1, kk._state = "unloaded", kk._sounds = [], kk = null, null
        },
        on: function(kk, ek, ik, Dk) {
          var fk = this["_on" + kk];
          return "function" === typeof ek && fk.push(Dk ? {
            id: ik,
            sU: ek,
            once: Dk
          } : {
            id: ik,
            sU: ek
          }), this
        },
        off: function(kk, ek, ik) {
          var Dk = this,
            fk = Dk["_on" + kk],
            Sk = 0;
          if ("number" === typeof ek && (ik = ek, ek = null), ek || ik)
            for (Sk = 0; Sk < fk.length; Sk++) {
              var bk = ik === fk[Sk].id;
              if (ek === fk[Sk].sU && bk || !ek && bk) {
                fk.splice(Sk, 1);
                break
              }
            } else if (kk) Dk["_on" + kk] = [];
            else {
              var rk = Object.keys(Dk);
              for (Sk = 0; Sk < rk.length; Sk++) 0 === rk[Sk].indexOf("_on") && Array.isArray(Dk[rk[Sk]]) && (Dk[rk[Sk]] = [])
            } return Dk
        },
        once: function(kk, ek, ik) {
          return this.on(kk, ek, ik, 1), this
        },
        _emit: function(kk, ek, ik) {
          for (var Dk = this, fk = Dk["_on" + kk], Sk = fk.length - 1; Sk >= 0; Sk--) fk[Sk].id && fk[Sk].id !== ek && "load" !== kk || (setTimeout(function(kk) {
            kk.call(this, ek, ik)
          }.bind(Dk, fk[Sk].sU), 0), fk[Sk].once && Dk.off(kk, fk[Sk].sU, fk[Sk].id));
          return Dk._loadQueue(kk), Dk
        },
        _loadQueue: function(kk) {
          var ek = this;
          if (ek._queue.length > 0) {
            var ik = ek._queue[0];
            ik.event === kk && (ek._queue.shift(), ek._loadQueue()), kk || ik.action()
          }
          return ek
        },
        _ended: function(kk) {
          var ek = this,
            ik = kk._sprite;
          if (!ek._webAudio && kk._node && !kk._node.paused && !kk._node.ended && kk._node.currentTime < kk._stop) return setTimeout(ek._ended.bind(ek, kk), 100), ek;
          var Dk = !(!kk._loop && !ek._sprite[ik][2]);
          if (ek._emit("end", kk._id), !ek._webAudio && Dk && ek.stop(kk._id, !0).play(kk._id), ek._webAudio && Dk) {
            ek._emit("play", kk._id), kk._seek = kk._start || 0, kk._rateSeek = 0, kk._playStart = Sk.ctx.currentTime;
            var fk = 1e3 * (kk._stop - kk._start) / Math.abs(kk._rate);
            ek._endTimers[kk._id] = setTimeout(ek._ended.bind(ek, kk), fk)
          }
          return ek._webAudio && !Dk && (kk.FY = !0, kk._ended = !0, kk._seek = kk._start || 0, kk._rateSeek = 0, ek._clearTimer(kk._id), ek._cleanBuffer(kk._node), Sk._autoSuspend()), ek._webAudio || Dk || ek.stop(kk._id, !0), ek
        },
        _clearTimer: function(kk) {
          var ek = this;
          if (ek._endTimers[kk]) {
            if ("function" !== typeof ek._endTimers[kk]) clearTimeout(ek._endTimers[kk]);
            else {
              var ik = ek._soundById(kk);
              ik && ik._node && ik._node.removeEventListener("ended", ek._endTimers[kk], !1)
            }
            delete ek._endTimers[kk]
          }
          return ek
        },
        _soundById: function(kk) {
          for (var ek = this, ik = 0; ik < ek._sounds.length; ik++)
            if (kk === ek._sounds[ik]._id) return ek._sounds[ik];
          return null
        },
        _inactiveSound: function() {
          var kk = this;
          kk._drain();
          for (var ek = 0; ek < kk._sounds.length; ek++)
            if (kk._sounds[ek]._ended) return kk._sounds[ek].reset();
          return new rk(kk)
        },
        _drain: function() {
          var kk = this,
            ek = kk._pool,
            ik = 0,
            Dk = 0;
          if (!(kk._sounds.length < ek)) {
            for (Dk = 0; Dk < kk._sounds.length; Dk++) kk._sounds[Dk]._ended && ik++;
            for (Dk = kk._sounds.length - 1; Dk >= 0; Dk--) {
              if (ik <= ek) return;
              kk._sounds[Dk]._ended && (kk._webAudio && kk._sounds[Dk]._node && kk._sounds[Dk]._node.disconnect(0), kk._sounds.splice(Dk, 1), ik--)
            }
          }
        },
        _getSoundIds: function(kk) {
          if ("undefined" === typeof kk) {
            for (var ek = [], ik = 0; ik < this._sounds.length; ik++) ek.push(this._sounds[ik]._id);
            return ek
          }
          return [kk]
        },
        _refreshBuffer: function(kk) {
          return kk._node.bufferSource = Sk.ctx.createBufferSource(), kk._node.bufferSource.buffer = Pk[this._src], kk._panner ? kk._node.bufferSource.connect(kk._panner) : kk._node.bufferSource.connect(kk._node), kk._node.bufferSource.loop = kk._loop, kk._loop && (kk._node.bufferSource.loopStart = kk._start || 0, kk._node.bufferSource.loopEnd = kk._stop || 0), kk._node.bufferSource.playbackRate.setValueAtTime(kk._rate, Sk.ctx.currentTime), this
        },
        _cleanBuffer: function(kk) {
          var ek = Sk._navigator && Sk._navigator.vendor.indexOf("Apple") >= 0;
          if (Sk._scratchBuffer && kk.bufferSource && (kk.bufferSource.onended = null, kk.bufferSource.disconnect(0), ek)) try {
            kk.bufferSource.buffer = Sk._scratchBuffer
          } catch (ik) {}
          return kk.bufferSource = null, this
        },
        _clearSound: function(kk) {
          /MSIE |Trident\//.test(Sk._navigator && Sk._navigator.userAgent) || (kk.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var rk = function(kk) {
        this._parent = kk, this.init()
      };
      rk.prototype = {
        init: function() {
          var kk = this,
            ek = kk._parent;
          return kk._muted = ek._muted, kk._loop = ek._loop, kk._volume = ek._volume, kk._rate = ek._rate, kk._seek = 0, kk.FY = !0, kk._ended = !0, kk._sprite = "__default", kk._id = ++Sk._counter, ek._sounds.push(kk), kk.create(), kk
        },
        create: function() {
          var kk = this,
            ek = kk._parent,
            ik = Sk._muted || kk._muted || kk._parent._muted ? 0 : kk._volume;
          return ek._webAudio ? (kk._node = "undefined" === typeof Sk.ctx.createGain ? Sk.ctx.createGainNode() : Sk.ctx.createGain(), kk._node.gain.setValueAtTime(ik, Sk.ctx.currentTime), kk._node.paused = !0, kk._node.connect(Sk.masterGain)) : Sk.noAudio || (kk._node = Sk._obtainHtml5Audio(), kk._errorFn = kk._errorListener.bind(kk), kk._node.addEventListener("error", kk._errorFn, !1), kk._loadFn = kk._loadListener.bind(kk), kk._node.addEventListener(Sk._canPlayEvent, kk._loadFn, !1), kk._endFn = kk._endListener.bind(kk), kk._node.addEventListener("ended", kk._endFn, !1), kk._node.src = ek._src, kk._node.preload = !0 === ek._preload ? "auto" : ek._preload, kk._node.volume = ik * Sk.volume(), kk._node.load()), kk
        },
        reset: function() {
          var kk = this,
            ek = kk._parent;
          return kk._muted = ek._muted, kk._loop = ek._loop, kk._volume = ek._volume, kk._rate = ek._rate, kk._seek = 0, kk._rateSeek = 0, kk.FY = !0, kk._ended = !0, kk._sprite = "__default", kk._id = ++Sk._counter, kk
        },
        _errorListener: function() {
          var kk = this;
          kk._parent._emit("loaderror", kk._id, kk._node.error ? kk._node.error.code : 0), kk._node.removeEventListener("error", kk._errorFn, !1)
        },
        _loadListener: function() {
          var kk = this,
            ek = kk._parent;
          ek._duration = Math.ceil(10 * kk._node.duration) / 10, 0 === Object.keys(ek._sprite).length && (ek._sprite = {
            __default: [0, 1e3 * ek._duration]
          }), "loaded" !== ek._state && (ek._state = "loaded", ek._emit("load"), ek._loadQueue()), kk._node.removeEventListener(Sk._canPlayEvent, kk._loadFn, !1)
        },
        _endListener: function() {
          var kk = this,
            ek = kk._parent;
          ek._duration === 1 / 0 && (ek._duration = Math.ceil(10 * kk._node.duration) / 10, ek._sprite.__default[1] === 1 / 0 && (ek._sprite.__default[1] = 1e3 * ek._duration), ek._ended(kk)), kk._node.removeEventListener("ended", kk._endFn, !1)
        }
      };
      var Pk = {},
        mk = function(kk) {
          var ek = kk._src;
          if (Pk[ek]) return kk._duration = Pk[ek].duration, void xk(kk);
          if (/^data:[^;]+;base64,/.test(ek)) {
            for (var ik = atob(ek.split(",")[1]), Dk = new Uint8Array(ik.length), fk = 0; fk < ik.length; ++fk) Dk[fk] = ik.charCodeAt(fk);
            Kk(Dk.buffer, kk)
          } else {
            var Sk = new XMLHttpRequest;
            Sk.open(kk._xhr.method, ek, !0), Sk.withCredentials = kk._xhr.withCredentials, Sk.responseType = "arraybuffer", kk._xhr.headers && Object.keys(kk._xhr.headers).forEach((function(ek) {
              Sk.setRequestHeader(ek, kk._xhr.headers[ek])
            })), Sk.onload = function() {
              var ek = (Sk.status + "")[0];
              "0" === ek || "2" === ek || "3" === ek ? Kk(Sk.response, kk) : kk._emit("loaderror", null, "Failed loading audio file with status: " + Sk.status + ".")
            }, Sk.onerror = function() {
              kk._webAudio && (kk._html5 = !0, kk._webAudio = !1, kk._sounds = [], delete Pk[ek], kk.load())
            }, Mk(Sk)
          }
        },
        Mk = function(kk) {
          try {
            kk.send()
          } catch (ek) {
            kk.onerror()
          }
        },
        Kk = function(kk, ek) {
          var ik = function() {
              ek._emit("loaderror", null, "Decoding audio data failed.")
            },
            Dk = function(kk) {
              kk && ek._sounds.length > 0 ? (Pk[ek._src] = kk, xk(ek, kk)) : ik()
            };
          "undefined" !== typeof Promise && 1 === Sk.ctx.decodeAudioData.length ? Sk.ctx.decodeAudioData(kk).then(Dk).catch(ik) : Sk.ctx.decodeAudioData(kk, Dk, ik)
        },
        xk = function(kk, ek) {
          ek && !kk._duration && (kk._duration = ek.duration), 0 === Object.keys(kk._sprite).length && (kk._sprite = {
            __default: [0, 1e3 * kk._duration]
          }), "loaded" !== kk._state && (kk._state = "loaded", kk._emit("load"), kk._loadQueue())
        },
        nk = function() {
          if (Sk.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Sk.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Sk.ctx = new webkitAudioContext : Sk.usingWebAudio = !1
            } catch (fk) {
              Sk.usingWebAudio = !1
            }
            Sk.ctx || (Sk.usingWebAudio = !1);
            var kk = /iP(hone|od|ad)/.test(Sk._navigator && Sk._navigator.platform),
              ek = Sk._navigator && Sk._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              ik = ek ? parseInt(ek[1], 10) : null;
            if (kk && ik && ik < 9) {
              var Dk = /safari/.test(Sk._navigator && Sk._navigator.userAgent.toLowerCase());
              Sk._navigator && !Dk && (Sk.usingWebAudio = !1)
            }
            Sk.usingWebAudio && (Sk.masterGain = "undefined" === typeof Sk.ctx.createGain ? Sk.ctx.createGainNode() : Sk.ctx.createGain(), Sk.masterGain.gain.setValueAtTime(Sk._muted ? 0 : Sk._volume, Sk.ctx.currentTime), Sk.masterGain.connect(Sk.ctx.destination)), Sk._setup()
          }
        };
      void 0 === (Dk = function() {
        return {
          Howler: Sk,
          Howl: bk
        }
      }.apply(ek, [])) || (kk.exports = Dk), ek.Howler = Sk, ek.Howl = bk, "undefined" !== typeof ik.g ? (ik.g.HowlerGlobal = fk, ik.g.Howler = Sk, ik.g.Howl = bk, ik.g.Sound = rk) : "undefined" !== typeof window && (window.HowlerGlobal = fk, window.Howler = Sk, window.Howl = bk, window.Sound = rk)
    }(),
    function() {
      var kk;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(kk) {
        var ek = this;
        if (!ek.ctx || !ek.ctx.listener) return ek;
        for (var ik = ek._howls.length - 1; ik >= 0; ik--) ek._howls[ik].stereo(kk);
        return ek
      }, HowlerGlobal.prototype.pos = function(kk, ek, ik) {
        var Dk = this;
        return Dk.ctx && Dk.ctx.listener ? (ek = "number" !== typeof ek ? Dk._pos[1] : ek, ik = "number" !== typeof ik ? Dk._pos[2] : ik, "number" !== typeof kk ? Dk._pos : (Dk._pos = [kk, ek, ik], "undefined" !== typeof Dk.ctx.listener.positionX ? (Dk.ctx.listener.positionX.setTargetAtTime(Dk._pos[0], Howler.ctx.currentTime, .1), Dk.ctx.listener.positionY.setTargetAtTime(Dk._pos[1], Howler.ctx.currentTime, .1), Dk.ctx.listener.positionZ.setTargetAtTime(Dk._pos[2], Howler.ctx.currentTime, .1)) : Dk.ctx.listener.setPosition(Dk._pos[0], Dk._pos[1], Dk._pos[2]), Dk)) : Dk
      }, HowlerGlobal.prototype.orientation = function(kk, ek, ik, Dk, fk, Sk) {
        var bk = this;
        if (!bk.ctx || !bk.ctx.listener) return bk;
        var rk = bk._orientation;
        return ek = "number" !== typeof ek ? rk[1] : ek, ik = "number" !== typeof ik ? rk[2] : ik, Dk = "number" !== typeof Dk ? rk[3] : Dk, fk = "number" !== typeof fk ? rk[4] : fk, Sk = "number" !== typeof Sk ? rk[5] : Sk, "number" !== typeof kk ? rk : (bk._orientation = [kk, ek, ik, Dk, fk, Sk], "undefined" !== typeof bk.ctx.listener.forwardX ? (bk.ctx.listener.forwardX.setTargetAtTime(kk, Howler.ctx.currentTime, .1), bk.ctx.listener.forwardY.setTargetAtTime(ek, Howler.ctx.currentTime, .1), bk.ctx.listener.forwardZ.setTargetAtTime(ik, Howler.ctx.currentTime, .1), bk.ctx.listener.upX.setTargetAtTime(Dk, Howler.ctx.currentTime, .1), bk.ctx.listener.upY.setTargetAtTime(fk, Howler.ctx.currentTime, .1), bk.ctx.listener.upZ.setTargetAtTime(Sk, Howler.ctx.currentTime, .1)) : bk.ctx.listener.setOrientation(kk, ek, ik, Dk, fk, Sk), bk)
      }, Howl.prototype.init = (kk = Howl.prototype.init, function(ek) {
        var ik = this;
        return ik._orientation = ek.orientation || [1, 0, 0], ik._stereo = ek.stereo || null, ik._pos = ek.pos || null, ik._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof ek.coneInnerAngle ? ek.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof ek.coneOuterAngle ? ek.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof ek.coneOuterGain ? ek.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof ek.distanceModel ? ek.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof ek.maxDistance ? ek.maxDistance : 1e4,
          panningModel: "undefined" !== typeof ek.panningModel ? ek.panningModel : "HRTF",
          refDistance: "undefined" !== typeof ek.refDistance ? ek.refDistance : 1,
          rolloffFactor: "undefined" !== typeof ek.rolloffFactor ? ek.rolloffFactor : 1
        }, ik._onstereo = ek.onstereo ? [{
          sU: ek.onstereo
        }] : [], ik._onpos = ek.onpos ? [{
          sU: ek.onpos
        }] : [], ik._onorientation = ek.onorientation ? [{
          sU: ek.onorientation
        }] : [], kk.call(this, ek)
      }), Howl.prototype.stereo = function(kk, ik) {
        var Dk = this;
        if (!Dk._webAudio) return Dk;
        if ("loaded" !== Dk._state) return Dk._queue.push({
          event: "stereo",
          action: function() {
            Dk.stereo(kk, ik)
          }
        }), Dk;
        var fk = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof ik) {
          if ("number" !== typeof kk) return Dk._stereo;
          Dk._stereo = kk, Dk._pos = [kk, 0, 0]
        }
        for (var Sk = Dk._getSoundIds(ik), bk = 0; bk < Sk.length; bk++) {
          var rk = Dk._soundById(Sk[bk]);
          if (rk) {
            if ("number" !== typeof kk) return rk._stereo;
            rk._stereo = kk, rk._pos = [kk, 0, 0], rk._node && (rk._pannerAttr.panningModel = "equalpower", rk._panner && rk._panner.pan || ek(rk, fk), "spatial" === fk ? "undefined" !== typeof rk._panner.positionX ? (rk._panner.positionX.setValueAtTime(kk, Howler.ctx.currentTime), rk._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), rk._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : rk._panner.setPosition(kk, 0, 0) : rk._panner.pan.setValueAtTime(kk, Howler.ctx.currentTime)), Dk._emit("stereo", rk._id)
          }
        }
        return Dk
      }, Howl.prototype.pos = function(kk, ik, Dk, fk) {
        var Sk = this;
        if (!Sk._webAudio) return Sk;
        if ("loaded" !== Sk._state) return Sk._queue.push({
          event: "pos",
          action: function() {
            Sk.pos(kk, ik, Dk, fk)
          }
        }), Sk;
        if (ik = "number" !== typeof ik ? 0 : ik, Dk = "number" !== typeof Dk ? -.5 : Dk, "undefined" === typeof fk) {
          if ("number" !== typeof kk) return Sk._pos;
          Sk._pos = [kk, ik, Dk]
        }
        for (var bk = Sk._getSoundIds(fk), rk = 0; rk < bk.length; rk++) {
          var Pk = Sk._soundById(bk[rk]);
          if (Pk) {
            if ("number" !== typeof kk) return Pk._pos;
            Pk._pos = [kk, ik, Dk], Pk._node && (Pk._panner && !Pk._panner.pan || ek(Pk, "spatial"), "undefined" !== typeof Pk._panner.positionX ? (Pk._panner.positionX.setValueAtTime(kk, Howler.ctx.currentTime), Pk._panner.positionY.setValueAtTime(ik, Howler.ctx.currentTime), Pk._panner.positionZ.setValueAtTime(Dk, Howler.ctx.currentTime)) : Pk._panner.setPosition(kk, ik, Dk)), Sk._emit("pos", Pk._id)
          }
        }
        return Sk
      }, Howl.prototype.orientation = function(kk, ik, Dk, fk) {
        var Sk = this;
        if (!Sk._webAudio) return Sk;
        if ("loaded" !== Sk._state) return Sk._queue.push({
          event: "orientation",
          action: function() {
            Sk.orientation(kk, ik, Dk, fk)
          }
        }), Sk;
        if (ik = "number" !== typeof ik ? Sk._orientation[1] : ik, Dk = "number" !== typeof Dk ? Sk._orientation[2] : Dk, "undefined" === typeof fk) {
          if ("number" !== typeof kk) return Sk._orientation;
          Sk._orientation = [kk, ik, Dk]
        }
        for (var bk = Sk._getSoundIds(fk), rk = 0; rk < bk.length; rk++) {
          var Pk = Sk._soundById(bk[rk]);
          if (Pk) {
            if ("number" !== typeof kk) return Pk._orientation;
            Pk._orientation = [kk, ik, Dk], Pk._node && (Pk._panner || (Pk._pos || (Pk._pos = Sk._pos || [0, 0, -.5]), ek(Pk, "spatial")), "undefined" !== typeof Pk._panner.orientationX ? (Pk._panner.orientationX.setValueAtTime(kk, Howler.ctx.currentTime), Pk._panner.orientationY.setValueAtTime(ik, Howler.ctx.currentTime), Pk._panner.orientationZ.setValueAtTime(Dk, Howler.ctx.currentTime)) : Pk._panner.setOrientation(kk, ik, Dk)), Sk._emit("orientation", Pk._id)
          }
        }
        return Sk
      }, Howl.prototype.pannerAttr = function() {
        var kk, ik, Dk, fk = this,
          Sk = arguments;
        if (!fk._webAudio) return fk;
        if (0 === Sk.length) return fk._pannerAttr;
        if (1 === Sk.length) {
          if ("object" !== typeof Sk[0]) return (Dk = fk._soundById(parseInt(Sk[0], 10))) ? Dk._pannerAttr : fk._pannerAttr;
          kk = Sk[0], "undefined" === typeof ik && (kk.pannerAttr || (kk.pannerAttr = {
            coneInnerAngle: kk.coneInnerAngle,
            coneOuterAngle: kk.coneOuterAngle,
            coneOuterGain: kk.coneOuterGain,
            distanceModel: kk.distanceModel,
            maxDistance: kk.maxDistance,
            refDistance: kk.refDistance,
            rolloffFactor: kk.rolloffFactor,
            panningModel: kk.panningModel
          }), fk._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof kk.pannerAttr.coneInnerAngle ? kk.pannerAttr.coneInnerAngle : fk._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof kk.pannerAttr.coneOuterAngle ? kk.pannerAttr.coneOuterAngle : fk._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof kk.pannerAttr.coneOuterGain ? kk.pannerAttr.coneOuterGain : fk._coneOuterGain,
            distanceModel: "undefined" !== typeof kk.pannerAttr.distanceModel ? kk.pannerAttr.distanceModel : fk._distanceModel,
            maxDistance: "undefined" !== typeof kk.pannerAttr.maxDistance ? kk.pannerAttr.maxDistance : fk._maxDistance,
            refDistance: "undefined" !== typeof kk.pannerAttr.refDistance ? kk.pannerAttr.refDistance : fk._refDistance,
            rolloffFactor: "undefined" !== typeof kk.pannerAttr.rolloffFactor ? kk.pannerAttr.rolloffFactor : fk._rolloffFactor,
            panningModel: "undefined" !== typeof kk.pannerAttr.panningModel ? kk.pannerAttr.panningModel : fk._panningModel
          })
        } else 2 === Sk.length && (kk = Sk[0], ik = parseInt(Sk[1], 10));
        for (var bk = fk._getSoundIds(ik), rk = 0; rk < bk.length; rk++)
          if (Dk = fk._soundById(bk[rk])) {
            var Pk = Dk._pannerAttr;
            Pk = {
              coneInnerAngle: "undefined" !== typeof kk.coneInnerAngle ? kk.coneInnerAngle : Pk.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof kk.coneOuterAngle ? kk.coneOuterAngle : Pk.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof kk.coneOuterGain ? kk.coneOuterGain : Pk.coneOuterGain,
              distanceModel: "undefined" !== typeof kk.distanceModel ? kk.distanceModel : Pk.distanceModel,
              maxDistance: "undefined" !== typeof kk.maxDistance ? kk.maxDistance : Pk.maxDistance,
              refDistance: "undefined" !== typeof kk.refDistance ? kk.refDistance : Pk.refDistance,
              rolloffFactor: "undefined" !== typeof kk.rolloffFactor ? kk.rolloffFactor : Pk.rolloffFactor,
              panningModel: "undefined" !== typeof kk.panningModel ? kk.panningModel : Pk.panningModel
            };
            var mk = Dk._panner;
            mk ? (mk.coneInnerAngle = Pk.coneInnerAngle, mk.coneOuterAngle = Pk.coneOuterAngle, mk.coneOuterGain = Pk.coneOuterGain, mk.distanceModel = Pk.distanceModel, mk.maxDistance = Pk.maxDistance, mk.refDistance = Pk.refDistance, mk.rolloffFactor = Pk.rolloffFactor, mk.panningModel = Pk.panningModel) : (Dk._pos || (Dk._pos = fk._pos || [0, 0, -.5]), ek(Dk, "spatial"))
          } return fk
      }, Sound.prototype.init = function(kk) {
        return function() {
          var ek = this,
            ik = ek._parent;
          ek._orientation = ik._orientation, ek._stereo = ik._stereo, ek._pos = ik._pos, ek._pannerAttr = ik._pannerAttr, kk.call(this), ek._stereo ? ik.stereo(ek._stereo) : ek._pos && ik.pos(ek._pos[0], ek._pos[1], ek._pos[2], ek._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(kk) {
        return function() {
          var ek = this,
            ik = ek._parent;
          return ek._orientation = ik._orientation, ek._stereo = ik._stereo, ek._pos = ik._pos, ek._pannerAttr = ik._pannerAttr, ek._stereo ? ik.stereo(ek._stereo) : ek._pos ? ik.pos(ek._pos[0], ek._pos[1], ek._pos[2], ek._id) : ek._panner && (ek._panner.disconnect(0), ek._panner = void 0, ik._refreshBuffer(ek)), kk.call(this)
        }
      }(Sound.prototype.reset);
      var ek = function(kk, ek) {
        "spatial" === (ek = ek || "spatial") ? (kk._panner = Howler.ctx.createPanner(), kk._panner.coneInnerAngle = kk._pannerAttr.coneInnerAngle, kk._panner.coneOuterAngle = kk._pannerAttr.coneOuterAngle, kk._panner.coneOuterGain = kk._pannerAttr.coneOuterGain, kk._panner.distanceModel = kk._pannerAttr.distanceModel, kk._panner.maxDistance = kk._pannerAttr.maxDistance, kk._panner.refDistance = kk._pannerAttr.refDistance, kk._panner.rolloffFactor = kk._pannerAttr.rolloffFactor, kk._panner.panningModel = kk._pannerAttr.panningModel, "undefined" !== typeof kk._panner.positionX ? (kk._panner.positionX.setValueAtTime(kk._pos[0], Howler.ctx.currentTime), kk._panner.positionY.setValueAtTime(kk._pos[1], Howler.ctx.currentTime), kk._panner.positionZ.setValueAtTime(kk._pos[2], Howler.ctx.currentTime)) : kk._panner.setPosition(kk._pos[0], kk._pos[1], kk._pos[2]), "undefined" !== typeof kk._panner.orientationX ? (kk._panner.orientationX.setValueAtTime(kk._orientation[0], Howler.ctx.currentTime), kk._panner.orientationY.setValueAtTime(kk._orientation[1], Howler.ctx.currentTime), kk._panner.orientationZ.setValueAtTime(kk._orientation[2], Howler.ctx.currentTime)) : kk._panner.setOrientation(kk._orientation[0], kk._orientation[1], kk._orientation[2])) : (kk._panner = Howler.ctx.createStereoPanner(), kk._panner.pan.setValueAtTime(kk._stereo, Howler.ctx.currentTime)), kk._panner.connect(kk._node), kk.FY || kk._parent.pause(kk._id, !0).play(kk._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);