/*! For license information please see fl4vv.113.e5e80dba.chunk.js.LICENSE.txt */
export const id = 113;
export const ids = [113];
export const modules = {
  5689: (rr, Sr, Qr) => {
    var Zr;
    ! function() {
      var Wr = function() {
        this.init()
      };
      Wr.prototype = {
        init: function() {
          var rr = this || ar;
          return rr._counter = 1e3, rr._html5AudioPool = [], rr.html5PoolSize = 10, rr._codecs = {}, rr._howls = [], rr._muted = !1, rr._volume = 1, rr._canPlayEvent = "canplaythrough", rr._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, rr.masterGain = null, rr.noAudio = !1, rr.usingWebAudio = !0, rr.autoSuspend = !0, rr.ctx = null, rr.autoUnlock = !0, rr._setup(), rr
        },
        volume: function(rr) {
          var Sr = this || ar;
          if (rr = parseFloat(rr), Sr.ctx || Nr(), "undefined" !== typeof rr && rr >= 0 && rr <= 1) {
            if (Sr._volume = rr, Sr._muted) return Sr;
            Sr.usingWebAudio && Sr.masterGain.gain.setValueAtTime(rr, ar.ctx.currentTime);
            for (var Qr = 0; Qr < Sr._howls.length; Qr++)
              if (!Sr._howls[Qr]._webAudio)
                for (var Zr = Sr._howls[Qr]._getSoundIds(), Wr = 0; Wr < Zr.length; Wr++) {
                  var jr = Sr._howls[Qr]._soundById(Zr[Wr]);
                  jr && jr._node && (jr._node.volume = jr._volume * rr)
                }
            return Sr
          }
          return Sr._volume
        },
        mute: function(rr) {
          var Sr = this || ar;
          Sr.ctx || Nr(), Sr._muted = rr, Sr.usingWebAudio && Sr.masterGain.gain.setValueAtTime(rr ? 0 : Sr._volume, ar.ctx.currentTime);
          for (var Qr = 0; Qr < Sr._howls.length; Qr++)
            if (!Sr._howls[Qr]._webAudio)
              for (var Zr = Sr._howls[Qr]._getSoundIds(), Wr = 0; Wr < Zr.length; Wr++) {
                var jr = Sr._howls[Qr]._soundById(Zr[Wr]);
                jr && jr._node && (jr._node.muted = !!rr || jr._muted)
              }
          return Sr
        },
        stop: function() {
          for (var rr = this || ar, Sr = 0; Sr < rr._howls.length; Sr++) rr._howls[Sr].stop();
          return rr
        },
        unload: function() {
          for (var rr = this || ar, Sr = rr._howls.length - 1; Sr >= 0; Sr--) rr._howls[Sr].unload();
          return rr.usingWebAudio && rr.ctx && "undefined" !== typeof rr.ctx.close && (rr.ctx.close(), rr.ctx = null, Nr()), rr
        },
        codecs: function(rr) {
          return (this || ar)._codecs[rr.replace(/^x-/, "")]
        },
        _setup: function() {
          var rr = this || ar;
          if (rr.state = rr.ctx && rr.ctx.state || "suspended", rr._autoSuspend(), !rr.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (rr._canPlayEvent = "canplay")
            } catch (Sr) {
              rr.noAudio = !0
            } else rr.noAudio = !0;
          try {
            (new Audio).muted && (rr.noAudio = !0)
          } catch (Sr) {}
          return rr.noAudio || rr._setupCodecs(), rr
        },
        _setupCodecs: function() {
          var rr = this || ar,
            Sr = null;
          try {
            Sr = "undefined" !== typeof Audio ? new Audio : null
          } catch (pr) {
            return rr
          }
          if (!Sr || "function" !== typeof Sr.canPlayType) return rr;
          var Qr = Sr.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Zr = rr._navigator ? rr._navigator.userAgent : "",
            Wr = Zr.match(/OPR\/([0-6].)/g),
            jr = Wr && parseInt(Wr[0].split("/")[1], 10) < 33,
            Ir = -1 !== Zr.indexOf("Safari") && -1 === Zr.indexOf("Chrome"),
            fr = Zr.match(/Version\/(.*?) /),
            Er = Ir && fr && parseInt(fr[1], 10) < 15;
          return rr._codecs = {
            mp3: !(jr || !Qr && !Sr.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!Qr,
            opus: !!Sr.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Sr.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Sr.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Sr.canPlayType('audio/wav; codecs="1"') || Sr.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Sr.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Sr.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Sr.canPlayType("audio/x-m4a;") || Sr.canPlayType("audio/m4a;") || Sr.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Sr.canPlayType("audio/x-m4b;") || Sr.canPlayType("audio/m4b;") || Sr.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Sr.canPlayType("audio/x-mp4;") || Sr.canPlayType("audio/mp4;") || Sr.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Er || !Sr.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Er || !Sr.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Sr.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Sr.canPlayType("audio/x-flac;") || Sr.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, rr
        },
        _unlockAudio: function() {
          var rr = this || ar;
          if (!rr._audioUnlocked && rr.ctx) {
            rr._audioUnlocked = !1, rr.autoUnlock = !1, rr._mobileUnloaded || 44100 === rr.ctx.sampleRate || (rr._mobileUnloaded = !0, rr.unload()), rr._scratchBuffer = rr.ctx.createBuffer(1, 1, 22050);
            var Sr = function(Qr) {
              for (; rr._html5AudioPool.length < rr.html5PoolSize;) try {
                var Zr = new Audio;
                Zr._unlocked = !0, rr._releaseHtml5Audio(Zr)
              } catch (Qr) {
                rr.noAudio = !0;
                break
              }
              for (var Wr = 0; Wr < rr._howls.length; Wr++)
                if (!rr._howls[Wr]._webAudio)
                  for (var ar = rr._howls[Wr]._getSoundIds(), jr = 0; jr < ar.length; jr++) {
                    var Ir = rr._howls[Wr]._soundById(ar[jr]);
                    Ir && Ir._node && !Ir._node._unlocked && (Ir._node._unlocked = !0, Ir._node.load())
                  }
              rr._autoResume();
              var fr = rr.ctx.createBufferSource();
              fr.buffer = rr._scratchBuffer, fr.connect(rr.ctx.destination), "undefined" === typeof fr.start ? fr.noteOn(0) : fr.start(0), "function" === typeof rr.ctx.resume && rr.ctx.resume(), fr.onended = function() {
                fr.disconnect(0), rr._audioUnlocked = !0, document.removeEventListener("touchstart", Sr, !0), document.removeEventListener("touchend", Sr, !0), document.removeEventListener("click", Sr, !0), document.removeEventListener("keydown", Sr, !0);
                for (var Qr = 0; Qr < rr._howls.length; Qr++) rr._howls[Qr]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Sr, !0), document.addEventListener("touchend", Sr, !0), document.addEventListener("click", Sr, !0), document.addEventListener("keydown", Sr, !0), rr
          }
        },
        _obtainHtml5Audio: function() {
          var rr = this || ar;
          if (rr._html5AudioPool.length) return rr._html5AudioPool.pop();
          var Sr = (new Audio).play();
          return Sr && "undefined" !== typeof Promise && (Sr instanceof Promise || "function" === typeof Sr.then) && Sr.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(rr) {
          var Sr = this || ar;
          return rr._unlocked && Sr._html5AudioPool.push(rr), Sr
        },
        _autoSuspend: function() {
          var rr = this;
          if (rr.autoSuspend && rr.ctx && "undefined" !== typeof rr.ctx.suspend && ar.usingWebAudio) {
            for (var Sr = 0; Sr < rr._howls.length; Sr++)
              if (rr._howls[Sr]._webAudio)
                for (var Qr = 0; Qr < rr._howls[Sr]._sounds.length; Qr++)
                  if (!rr._howls[Sr]._sounds[Qr].Lx) return rr;
            return rr._suspendTimer && clearTimeout(rr._suspendTimer), rr._suspendTimer = setTimeout((function() {
              if (rr.autoSuspend) {
                rr._suspendTimer = null, rr.state = "suspending";
                var Sr = function() {
                  rr.state = "suspended", rr._resumeAfterSuspend && (delete rr._resumeAfterSuspend, rr._autoResume())
                };
                rr.ctx.suspend().then(Sr, Sr)
              }
            }), 3e4), rr
          }
        },
        _autoResume: function() {
          var rr = this;
          if (rr.ctx && "undefined" !== typeof rr.ctx.resume && ar.usingWebAudio) return "running" === rr.state && "interrupted" !== rr.ctx.state && rr._suspendTimer ? (clearTimeout(rr._suspendTimer), rr._suspendTimer = null) : "suspended" === rr.state || "running" === rr.state && "interrupted" === rr.ctx.state ? (rr.ctx.resume().then((function() {
            rr.state = "running";
            for (var Sr = 0; Sr < rr._howls.length; Sr++) rr._howls[Sr]._emit("resume")
          })), rr._suspendTimer && (clearTimeout(rr._suspendTimer), rr._suspendTimer = null)) : "suspending" === rr.state && (rr._resumeAfterSuspend = !0), rr
        }
      };
      var ar = new Wr,
        jr = function(rr) {
          rr.src && 0 !== rr.src.length ? this.init(rr) : console.error("An array of source files must be passed with any new Howl.")
        };
      jr.prototype = {
        init: function(rr) {
          var Sr = this;
          return ar.ctx || Nr(), Sr._autoplay = rr.autoplay || !1, Sr._format = "string" !== typeof rr.format ? rr.format : [rr.format], Sr._html5 = rr.html5 || !1, Sr._muted = rr.mute || !1, Sr._loop = rr.loop || !1, Sr._pool = rr.pool || 5, Sr._preload = "boolean" !== typeof rr.preload && "metadata" !== rr.preload || rr.preload, Sr._rate = rr.rate || 1, Sr._sprite = rr.sprite || {}, Sr._src = "string" !== typeof rr.src ? rr.src : [rr.src], Sr._volume = void 0 !== rr.volume ? rr.volume : 1, Sr._xhr = {
            method: rr.xhr && rr.xhr.method ? rr.xhr.method : "GET",
            headers: rr.xhr && rr.xhr.headers ? rr.xhr.headers : null,
            withCredentials: !(!rr.xhr || !rr.xhr.withCredentials) && rr.xhr.withCredentials
          }, Sr._duration = 0, Sr._state = "unloaded", Sr._sounds = [], Sr._endTimers = {}, Sr._queue = [], Sr._playLock = !1, Sr._onend = rr.onend ? [{
            Wx: rr.onend
          }] : [], Sr._onfade = rr.onfade ? [{
            Wx: rr.onfade
          }] : [], Sr._onload = rr.onload ? [{
            Wx: rr.onload
          }] : [], Sr._onloaderror = rr.onloaderror ? [{
            Wx: rr.onloaderror
          }] : [], Sr._onplayerror = rr.onplayerror ? [{
            Wx: rr.onplayerror
          }] : [], Sr._onpause = rr.onpause ? [{
            Wx: rr.onpause
          }] : [], Sr._onplay = rr.onplay ? [{
            Wx: rr.onplay
          }] : [], Sr._onstop = rr.onstop ? [{
            Wx: rr.onstop
          }] : [], Sr._onmute = rr.onmute ? [{
            Wx: rr.onmute
          }] : [], Sr._onvolume = rr.onvolume ? [{
            Wx: rr.onvolume
          }] : [], Sr._onrate = rr.onrate ? [{
            Wx: rr.onrate
          }] : [], Sr._onseek = rr.onseek ? [{
            Wx: rr.onseek
          }] : [], Sr._onunlock = rr.onunlock ? [{
            Wx: rr.onunlock
          }] : [], Sr._onresume = [], Sr._webAudio = ar.usingWebAudio && !Sr._html5, "undefined" !== typeof ar.ctx && ar.ctx && ar.autoUnlock && ar._unlockAudio(), ar._howls.push(Sr), Sr._autoplay && Sr._queue.push({
            event: "play",
            action: function() {
              Sr.play()
            }
          }), Sr._preload && "none" !== Sr._preload && Sr.load(), Sr
        },
        load: function() {
          var rr = this,
            Sr = null;
          if (ar.noAudio) rr._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof rr._src && (rr._src = [rr._src]);
            for (var Qr = 0; Qr < rr._src.length; Qr++) {
              var Zr, Wr;
              if (rr._format && rr._format[Qr]) Zr = rr._format[Qr];
              else {
                if ("string" !== typeof(Wr = rr._src[Qr])) {
                  rr._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Zr = /^data:audio\/([^;,]+);/i.exec(Wr)) || (Zr = /\.([^.]+)$/.exec(Wr.split("?", 1)[0])), Zr && (Zr = Zr[1].toLowerCase())
              }
              if (Zr || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Zr && ar.codecs(Zr)) {
                Sr = rr._src[Qr];
                break
              }
            }
            if (Sr) return rr._src = Sr, rr._state = "loading", "https:" === window.location.protocol && "http:" === Sr.slice(0, 5) && (rr._html5 = !0, rr._webAudio = !1), new Ir(rr), rr._webAudio && Er(rr), rr;
            rr._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(rr, Sr) {
          var Qr = this,
            Zr = null;
          if ("number" === typeof rr) Zr = rr, rr = null;
          else {
            if ("string" === typeof rr && "loaded" === Qr._state && !Qr._sprite[rr]) return null;
            if ("undefined" === typeof rr && (rr = "__default", !Qr._playLock)) {
              for (var Wr = 0, jr = 0; jr < Qr._sounds.length; jr++) Qr._sounds[jr].Lx && !Qr._sounds[jr]._ended && (Wr++, Zr = Qr._sounds[jr]._id);
              1 === Wr ? rr = null : Zr = null
            }
          }
          var Ir = Zr ? Qr._soundById(Zr) : Qr._inactiveSound();
          if (!Ir) return null;
          if (Zr && !rr && (rr = Ir._sprite || "__default"), "loaded" !== Qr._state) {
            Ir._sprite = rr, Ir._ended = !1;
            var fr = Ir._id;
            return Qr._queue.push({
              event: "play",
              action: function() {
                Qr.play(fr)
              }
            }), fr
          }
          if (Zr && !Ir.Lx) return Sr || Qr._loadQueue("play"), Ir._id;
          Qr._webAudio && ar._autoResume();
          var Er = Math.max(0, Ir._seek > 0 ? Ir._seek : Qr._sprite[rr][0] / 1e3),
            pr = Math.max(0, (Qr._sprite[rr][0] + Qr._sprite[rr][1]) / 1e3 - Er),
            xr = 1e3 * pr / Math.abs(Ir._rate),
            mr = Qr._sprite[rr][0] / 1e3,
            Nr = (Qr._sprite[rr][0] + Qr._sprite[rr][1]) / 1e3;
          Ir._sprite = rr, Ir._ended = !1;
          var Ur = function() {
            Ir.Lx = !1, Ir._seek = Er, Ir._start = mr, Ir._stop = Nr, Ir._loop = !(!Ir._loop && !Qr._sprite[rr][2])
          };
          if (!(Er >= Nr)) {
            var tr = Ir._node;
            if (Qr._webAudio) {
              var hr = function() {
                Qr._playLock = !1, Ur(), Qr._refreshBuffer(Ir);
                var rr = Ir._muted || Qr._muted ? 0 : Ir._volume;
                tr.gain.setValueAtTime(rr, ar.ctx.currentTime), Ir._playStart = ar.ctx.currentTime, "undefined" === typeof tr.bufferSource.start ? Ir._loop ? tr.bufferSource.noteGrainOn(0, Er, 86400) : tr.bufferSource.noteGrainOn(0, Er, pr) : Ir._loop ? tr.bufferSource.start(0, Er, 86400) : tr.bufferSource.start(0, Er, pr), xr !== 1 / 0 && (Qr._endTimers[Ir._id] = setTimeout(Qr._ended.bind(Qr, Ir), xr)), Sr || setTimeout((function() {
                  Qr._emit("play", Ir._id), Qr._loadQueue()
                }), 0)
              };
              "running" === ar.state && "interrupted" !== ar.ctx.state ? hr() : (Qr._playLock = !0, Qr.once("resume", hr), Qr._clearTimer(Ir._id))
            } else {
              var zr = function() {
                tr.currentTime = Er, tr.muted = Ir._muted || Qr._muted || ar._muted || tr.muted, tr.volume = Ir._volume * ar.volume(), tr.playbackRate = Ir._rate;
                try {
                  var Zr = tr.play();
                  if (Zr && "undefined" !== typeof Promise && (Zr instanceof Promise || "function" === typeof Zr.then) ? (Qr._playLock = !0, Ur(), Zr.then((function() {
                      Qr._playLock = !1, tr._unlocked = !0, Sr ? Qr._loadQueue() : Qr._emit("play", Ir._id)
                    })).catch((function() {
                      Qr._playLock = !1, Qr._emit("playerror", Ir._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), Ir._ended = !0, Ir.Lx = !0
                    }))) : Sr || (Qr._playLock = !1, Ur(), Qr._emit("play", Ir._id)), tr.playbackRate = Ir._rate, tr.paused) return void Qr._emit("playerror", Ir._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== rr || Ir._loop ? Qr._endTimers[Ir._id] = setTimeout(Qr._ended.bind(Qr, Ir), xr) : (Qr._endTimers[Ir._id] = function() {
                    Qr._ended(Ir), tr.removeEventListener("ended", Qr._endTimers[Ir._id], !1)
                  }, tr.addEventListener("ended", Qr._endTimers[Ir._id], !1))
                } catch (Wr) {
                  Qr._emit("playerror", Ir._id, Wr)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === tr.src && (tr.src = Qr._src, tr.load());
              var Yr = window && window.ejecta || !tr.readyState && ar._navigator.isCocoonJS;
              if (tr.readyState >= 3 || Yr) zr();
              else {
                Qr._playLock = !0, Qr._state = "loading";
                var nr = function() {
                  Qr._state = "loaded", zr(), tr.removeEventListener(ar._canPlayEvent, nr, !1)
                };
                tr.addEventListener(ar._canPlayEvent, nr, !1), Qr._clearTimer(Ir._id)
              }
            }
            return Ir._id
          }
          Qr._ended(Ir)
        },
        pause: function(rr) {
          var Sr = this;
          if ("loaded" !== Sr._state || Sr._playLock) return Sr._queue.push({
            event: "pause",
            action: function() {
              Sr.pause(rr)
            }
          }), Sr;
          for (var Qr = Sr._getSoundIds(rr), Zr = 0; Zr < Qr.length; Zr++) {
            Sr._clearTimer(Qr[Zr]);
            var Wr = Sr._soundById(Qr[Zr]);
            if (Wr && !Wr.Lx && (Wr._seek = Sr.seek(Qr[Zr]), Wr._rateSeek = 0, Wr.Lx = !0, Sr._stopFade(Qr[Zr]), Wr._node))
              if (Sr._webAudio) {
                if (!Wr._node.bufferSource) continue;
                "undefined" === typeof Wr._node.bufferSource.stop ? Wr._node.bufferSource.noteOff(0) : Wr._node.bufferSource.stop(0), Sr._cleanBuffer(Wr._node)
              } else isNaN(Wr._node.duration) && Wr._node.duration !== 1 / 0 || Wr._node.pause();
            arguments[1] || Sr._emit("pause", Wr ? Wr._id : null)
          }
          return Sr
        },
        stop: function(rr, Sr) {
          var Qr = this;
          if ("loaded" !== Qr._state || Qr._playLock) return Qr._queue.push({
            event: "stop",
            action: function() {
              Qr.stop(rr)
            }
          }), Qr;
          for (var Zr = Qr._getSoundIds(rr), Wr = 0; Wr < Zr.length; Wr++) {
            Qr._clearTimer(Zr[Wr]);
            var ar = Qr._soundById(Zr[Wr]);
            ar && (ar._seek = ar._start || 0, ar._rateSeek = 0, ar.Lx = !0, ar._ended = !0, Qr._stopFade(Zr[Wr]), ar._node && (Qr._webAudio ? ar._node.bufferSource && ("undefined" === typeof ar._node.bufferSource.stop ? ar._node.bufferSource.noteOff(0) : ar._node.bufferSource.stop(0), Qr._cleanBuffer(ar._node)) : isNaN(ar._node.duration) && ar._node.duration !== 1 / 0 || (ar._node.currentTime = ar._start || 0, ar._node.pause(), ar._node.duration === 1 / 0 && Qr._clearSound(ar._node))), Sr || Qr._emit("stop", ar._id))
          }
          return Qr
        },
        mute: function(rr, Sr) {
          var Qr = this;
          if ("loaded" !== Qr._state || Qr._playLock) return Qr._queue.push({
            event: "mute",
            action: function() {
              Qr.mute(rr, Sr)
            }
          }), Qr;
          if ("undefined" === typeof Sr) {
            if ("boolean" !== typeof rr) return Qr._muted;
            Qr._muted = rr
          }
          for (var Zr = Qr._getSoundIds(Sr), Wr = 0; Wr < Zr.length; Wr++) {
            var jr = Qr._soundById(Zr[Wr]);
            jr && (jr._muted = rr, jr._interval && Qr._stopFade(jr._id), Qr._webAudio && jr._node ? jr._node.gain.setValueAtTime(rr ? 0 : jr._volume, ar.ctx.currentTime) : jr._node && (jr._node.muted = !!ar._muted || rr), Qr._emit("mute", jr._id))
          }
          return Qr
        },
        volume: function() {
          var rr, Sr, Qr, Zr = this,
            Wr = arguments;
          if (0 === Wr.length) return Zr._volume;
          if (1 === Wr.length || 2 === Wr.length && "undefined" === typeof Wr[1] ? Zr._getSoundIds().indexOf(Wr[0]) >= 0 ? Sr = parseInt(Wr[0], 10) : rr = parseFloat(Wr[0]) : Wr.length >= 2 && (rr = parseFloat(Wr[0]), Sr = parseInt(Wr[1], 10)), !("undefined" !== typeof rr && rr >= 0 && rr <= 1)) return (Qr = Sr ? Zr._soundById(Sr) : Zr._sounds[0]) ? Qr._volume : 0;
          if ("loaded" !== Zr._state || Zr._playLock) return Zr._queue.push({
            event: "volume",
            action: function() {
              Zr.volume.apply(Zr, Wr)
            }
          }), Zr;
          "undefined" === typeof Sr && (Zr._volume = rr), Sr = Zr._getSoundIds(Sr);
          for (var jr = 0; jr < Sr.length; jr++)(Qr = Zr._soundById(Sr[jr])) && (Qr._volume = rr, Wr[2] || Zr._stopFade(Sr[jr]), Zr._webAudio && Qr._node && !Qr._muted ? Qr._node.gain.setValueAtTime(rr, ar.ctx.currentTime) : Qr._node && !Qr._muted && (Qr._node.volume = rr * ar.volume()), Zr._emit("volume", Qr._id));
          return Zr
        },
        fade: function(rr, Sr, Qr, Zr) {
          var Wr = this;
          if ("loaded" !== Wr._state || Wr._playLock) return Wr._queue.push({
            event: "fade",
            action: function() {
              Wr.fade(rr, Sr, Qr, Zr)
            }
          }), Wr;
          rr = Math.min(Math.max(0, parseFloat(rr)), 1), Sr = Math.min(Math.max(0, parseFloat(Sr)), 1), Qr = parseFloat(Qr), Wr.volume(rr, Zr);
          for (var jr = Wr._getSoundIds(Zr), Ir = 0; Ir < jr.length; Ir++) {
            var fr = Wr._soundById(jr[Ir]);
            if (fr) {
              if (Zr || Wr._stopFade(jr[Ir]), Wr._webAudio && !fr._muted) {
                var Er = ar.ctx.currentTime,
                  pr = Er + Qr / 1e3;
                fr._volume = rr, fr._node.gain.setValueAtTime(rr, Er), fr._node.gain.linearRampToValueAtTime(Sr, pr)
              }
              Wr._startFadeInterval(fr, rr, Sr, Qr, jr[Ir], "undefined" === typeof Zr)
            }
          }
          return Wr
        },
        _startFadeInterval: function(rr, Sr, Qr, Zr, Wr, ar) {
          var jr = this,
            Ir = Sr,
            fr = Qr - Sr,
            Er = Math.abs(fr / .01),
            pr = Math.max(4, Er > 0 ? Zr / Er : Zr),
            xr = Date.now();
          rr._fadeTo = Qr, rr._interval = setInterval((function() {
            var Wr = (Date.now() - xr) / Zr;
            xr = Date.now(), Ir += fr * Wr, Ir = Math.round(100 * Ir) / 100, Ir = fr < 0 ? Math.max(Qr, Ir) : Math.min(Qr, Ir), jr._webAudio ? rr._volume = Ir : jr.volume(Ir, rr._id, !0), ar && (jr._volume = Ir), (Qr < Sr && Ir <= Qr || Qr > Sr && Ir >= Qr) && (clearInterval(rr._interval), rr._interval = null, rr._fadeTo = null, jr.volume(Qr, rr._id), jr._emit("fade", rr._id))
          }), pr)
        },
        _stopFade: function(rr) {
          var Sr = this,
            Qr = Sr._soundById(rr);
          return Qr && Qr._interval && (Sr._webAudio && Qr._node.gain.cancelScheduledValues(ar.ctx.currentTime), clearInterval(Qr._interval), Qr._interval = null, Sr.volume(Qr._fadeTo, rr), Qr._fadeTo = null, Sr._emit("fade", rr)), Sr
        },
        loop: function() {
          var rr, Sr, Qr, Zr = this,
            Wr = arguments;
          if (0 === Wr.length) return Zr._loop;
          if (1 === Wr.length) {
            if ("boolean" !== typeof Wr[0]) return !!(Qr = Zr._soundById(parseInt(Wr[0], 10))) && Qr._loop;
            rr = Wr[0], Zr._loop = rr
          } else 2 === Wr.length && (rr = Wr[0], Sr = parseInt(Wr[1], 10));
          for (var ar = Zr._getSoundIds(Sr), jr = 0; jr < ar.length; jr++)(Qr = Zr._soundById(ar[jr])) && (Qr._loop = rr, Zr._webAudio && Qr._node && Qr._node.bufferSource && (Qr._node.bufferSource.loop = rr, rr && (Qr._node.bufferSource.loopStart = Qr._start || 0, Qr._node.bufferSource.loopEnd = Qr._stop, Zr.playing(ar[jr]) && (Zr.pause(ar[jr], !0), Zr.play(ar[jr], !0)))));
          return Zr
        },
        rate: function() {
          var rr, Sr, Qr, Zr = this,
            Wr = arguments;
          if (0 === Wr.length) Sr = Zr._sounds[0]._id;
          else if (1 === Wr.length) {
            Zr._getSoundIds().indexOf(Wr[0]) >= 0 ? Sr = parseInt(Wr[0], 10) : rr = parseFloat(Wr[0])
          } else 2 === Wr.length && (rr = parseFloat(Wr[0]), Sr = parseInt(Wr[1], 10));
          if ("number" !== typeof rr) return (Qr = Zr._soundById(Sr)) ? Qr._rate : Zr._rate;
          if ("loaded" !== Zr._state || Zr._playLock) return Zr._queue.push({
            event: "rate",
            action: function() {
              Zr.rate.apply(Zr, Wr)
            }
          }), Zr;
          "undefined" === typeof Sr && (Zr._rate = rr), Sr = Zr._getSoundIds(Sr);
          for (var jr = 0; jr < Sr.length; jr++)
            if (Qr = Zr._soundById(Sr[jr])) {
              Zr.playing(Sr[jr]) && (Qr._rateSeek = Zr.seek(Sr[jr]), Qr._playStart = Zr._webAudio ? ar.ctx.currentTime : Qr._playStart), Qr._rate = rr, Zr._webAudio && Qr._node && Qr._node.bufferSource ? Qr._node.bufferSource.playbackRate.setValueAtTime(rr, ar.ctx.currentTime) : Qr._node && (Qr._node.playbackRate = rr);
              var Ir = Zr.seek(Sr[jr]),
                fr = 1e3 * ((Zr._sprite[Qr._sprite][0] + Zr._sprite[Qr._sprite][1]) / 1e3 - Ir) / Math.abs(Qr._rate);
              !Zr._endTimers[Sr[jr]] && Qr.Lx || (Zr._clearTimer(Sr[jr]), Zr._endTimers[Sr[jr]] = setTimeout(Zr._ended.bind(Zr, Qr), fr)), Zr._emit("rate", Qr._id)
            } return Zr
        },
        seek: function() {
          var rr, Sr, Qr = this,
            Zr = arguments;
          if (0 === Zr.length) Qr._sounds.length && (Sr = Qr._sounds[0]._id);
          else if (1 === Zr.length) {
            Qr._getSoundIds().indexOf(Zr[0]) >= 0 ? Sr = parseInt(Zr[0], 10) : Qr._sounds.length && (Sr = Qr._sounds[0]._id, rr = parseFloat(Zr[0]))
          } else 2 === Zr.length && (rr = parseFloat(Zr[0]), Sr = parseInt(Zr[1], 10));
          if ("undefined" === typeof Sr) return 0;
          if ("number" === typeof rr && ("loaded" !== Qr._state || Qr._playLock)) return Qr._queue.push({
            event: "seek",
            action: function() {
              Qr.seek.apply(Qr, Zr)
            }
          }), Qr;
          var Wr = Qr._soundById(Sr);
          if (Wr) {
            if (!("number" === typeof rr && rr >= 0)) {
              if (Qr._webAudio) {
                var jr = Qr.playing(Sr) ? ar.ctx.currentTime - Wr._playStart : 0,
                  Ir = Wr._rateSeek ? Wr._rateSeek - Wr._seek : 0;
                return Wr._seek + (Ir + jr * Math.abs(Wr._rate))
              }
              return Wr._node.currentTime
            }
            var fr = Qr.playing(Sr);
            fr && Qr.pause(Sr, !0), Wr._seek = rr, Wr._ended = !1, Qr._clearTimer(Sr), Qr._webAudio || !Wr._node || isNaN(Wr._node.duration) || (Wr._node.currentTime = rr);
            var Er = function() {
              fr && Qr.play(Sr, !0), Qr._emit("seek", Sr)
            };
            if (fr && !Qr._webAudio) {
              var pr = function() {
                Qr._playLock ? setTimeout(pr, 0) : Er()
              };
              setTimeout(pr, 0)
            } else Er()
          }
          return Qr
        },
        playing: function(rr) {
          var Sr = this;
          if ("number" === typeof rr) {
            var Qr = Sr._soundById(rr);
            return !!Qr && !Qr.Lx
          }
          for (var Zr = 0; Zr < Sr._sounds.length; Zr++)
            if (!Sr._sounds[Zr].Lx) return !0;
          return !1
        },
        duration: function(rr) {
          var Sr = this,
            Qr = Sr._duration,
            Zr = Sr._soundById(rr);
          return Zr && (Qr = Sr._sprite[Zr._sprite][1] / 1e3), Qr
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var rr = this, Sr = rr._sounds, Qr = 0; Qr < Sr.length; Qr++) Sr[Qr].Lx || rr.stop(Sr[Qr]._id), rr._webAudio || (rr._clearSound(Sr[Qr]._node), Sr[Qr]._node.removeEventListener("error", Sr[Qr]._errorFn, !1), Sr[Qr]._node.removeEventListener(ar._canPlayEvent, Sr[Qr]._loadFn, !1), Sr[Qr]._node.removeEventListener("ended", Sr[Qr]._endFn, !1), ar._releaseHtml5Audio(Sr[Qr]._node)), delete Sr[Qr]._node, rr._clearTimer(Sr[Qr]._id);
          var Zr = ar._howls.indexOf(rr);
          Zr >= 0 && ar._howls.splice(Zr, 1);
          var Wr = !0;
          for (Qr = 0; Qr < ar._howls.length; Qr++)
            if (ar._howls[Qr]._src === rr._src || rr._src.indexOf(ar._howls[Qr]._src) >= 0) {
              Wr = !1;
              break
            } return fr && Wr && delete fr[rr._src], ar.noAudio = !1, rr._state = "unloaded", rr._sounds = [], rr = null, null
        },
        on: function(rr, Sr, Qr, Zr) {
          var Wr = this["_on" + rr];
          return "function" === typeof Sr && Wr.push(Zr ? {
            id: Qr,
            Wx: Sr,
            once: Zr
          } : {
            id: Qr,
            Wx: Sr
          }), this
        },
        off: function(rr, Sr, Qr) {
          var Zr = this,
            Wr = Zr["_on" + rr],
            ar = 0;
          if ("number" === typeof Sr && (Qr = Sr, Sr = null), Sr || Qr)
            for (ar = 0; ar < Wr.length; ar++) {
              var jr = Qr === Wr[ar].id;
              if (Sr === Wr[ar].Wx && jr || !Sr && jr) {
                Wr.splice(ar, 1);
                break
              }
            } else if (rr) Zr["_on" + rr] = [];
            else {
              var Ir = Object.keys(Zr);
              for (ar = 0; ar < Ir.length; ar++) 0 === Ir[ar].indexOf("_on") && Array.isArray(Zr[Ir[ar]]) && (Zr[Ir[ar]] = [])
            } return Zr
        },
        once: function(rr, Sr, Qr) {
          return this.on(rr, Sr, Qr, 1), this
        },
        _emit: function(rr, Sr, Qr) {
          for (var Zr = this, Wr = Zr["_on" + rr], ar = Wr.length - 1; ar >= 0; ar--) Wr[ar].id && Wr[ar].id !== Sr && "load" !== rr || (setTimeout(function(rr) {
            rr.call(this, Sr, Qr)
          }.bind(Zr, Wr[ar].Wx), 0), Wr[ar].once && Zr.off(rr, Wr[ar].Wx, Wr[ar].id));
          return Zr._loadQueue(rr), Zr
        },
        _loadQueue: function(rr) {
          var Sr = this;
          if (Sr._queue.length > 0) {
            var Qr = Sr._queue[0];
            Qr.event === rr && (Sr._queue.shift(), Sr._loadQueue()), rr || Qr.action()
          }
          return Sr
        },
        _ended: function(rr) {
          var Sr = this,
            Qr = rr._sprite;
          if (!Sr._webAudio && rr._node && !rr._node.paused && !rr._node.ended && rr._node.currentTime < rr._stop) return setTimeout(Sr._ended.bind(Sr, rr), 100), Sr;
          var Zr = !(!rr._loop && !Sr._sprite[Qr][2]);
          if (Sr._emit("end", rr._id), !Sr._webAudio && Zr && Sr.stop(rr._id, !0).play(rr._id), Sr._webAudio && Zr) {
            Sr._emit("play", rr._id), rr._seek = rr._start || 0, rr._rateSeek = 0, rr._playStart = ar.ctx.currentTime;
            var Wr = 1e3 * (rr._stop - rr._start) / Math.abs(rr._rate);
            Sr._endTimers[rr._id] = setTimeout(Sr._ended.bind(Sr, rr), Wr)
          }
          return Sr._webAudio && !Zr && (rr.Lx = !0, rr._ended = !0, rr._seek = rr._start || 0, rr._rateSeek = 0, Sr._clearTimer(rr._id), Sr._cleanBuffer(rr._node), ar._autoSuspend()), Sr._webAudio || Zr || Sr.stop(rr._id, !0), Sr
        },
        _clearTimer: function(rr) {
          var Sr = this;
          if (Sr._endTimers[rr]) {
            if ("function" !== typeof Sr._endTimers[rr]) clearTimeout(Sr._endTimers[rr]);
            else {
              var Qr = Sr._soundById(rr);
              Qr && Qr._node && Qr._node.removeEventListener("ended", Sr._endTimers[rr], !1)
            }
            delete Sr._endTimers[rr]
          }
          return Sr
        },
        _soundById: function(rr) {
          for (var Sr = this, Qr = 0; Qr < Sr._sounds.length; Qr++)
            if (rr === Sr._sounds[Qr]._id) return Sr._sounds[Qr];
          return null
        },
        _inactiveSound: function() {
          var rr = this;
          rr._drain();
          for (var Sr = 0; Sr < rr._sounds.length; Sr++)
            if (rr._sounds[Sr]._ended) return rr._sounds[Sr].reset();
          return new Ir(rr)
        },
        _drain: function() {
          var rr = this,
            Sr = rr._pool,
            Qr = 0,
            Zr = 0;
          if (!(rr._sounds.length < Sr)) {
            for (Zr = 0; Zr < rr._sounds.length; Zr++) rr._sounds[Zr]._ended && Qr++;
            for (Zr = rr._sounds.length - 1; Zr >= 0; Zr--) {
              if (Qr <= Sr) return;
              rr._sounds[Zr]._ended && (rr._webAudio && rr._sounds[Zr]._node && rr._sounds[Zr]._node.disconnect(0), rr._sounds.splice(Zr, 1), Qr--)
            }
          }
        },
        _getSoundIds: function(rr) {
          if ("undefined" === typeof rr) {
            for (var Sr = [], Qr = 0; Qr < this._sounds.length; Qr++) Sr.push(this._sounds[Qr]._id);
            return Sr
          }
          return [rr]
        },
        _refreshBuffer: function(rr) {
          return rr._node.bufferSource = ar.ctx.createBufferSource(), rr._node.bufferSource.buffer = fr[this._src], rr._panner ? rr._node.bufferSource.connect(rr._panner) : rr._node.bufferSource.connect(rr._node), rr._node.bufferSource.loop = rr._loop, rr._loop && (rr._node.bufferSource.loopStart = rr._start || 0, rr._node.bufferSource.loopEnd = rr._stop || 0), rr._node.bufferSource.playbackRate.setValueAtTime(rr._rate, ar.ctx.currentTime), this
        },
        _cleanBuffer: function(rr) {
          var Sr = ar._navigator && ar._navigator.vendor.indexOf("Apple") >= 0;
          if (ar._scratchBuffer && rr.bufferSource && (rr.bufferSource.onended = null, rr.bufferSource.disconnect(0), Sr)) try {
            rr.bufferSource.buffer = ar._scratchBuffer
          } catch (Qr) {}
          return rr.bufferSource = null, this
        },
        _clearSound: function(rr) {
          /MSIE |Trident\//.test(ar._navigator && ar._navigator.userAgent) || (rr.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var Ir = function(rr) {
        this._parent = rr, this.init()
      };
      Ir.prototype = {
        init: function() {
          var rr = this,
            Sr = rr._parent;
          return rr._muted = Sr._muted, rr._loop = Sr._loop, rr._volume = Sr._volume, rr._rate = Sr._rate, rr._seek = 0, rr.Lx = !0, rr._ended = !0, rr._sprite = "__default", rr._id = ++ar._counter, Sr._sounds.push(rr), rr.create(), rr
        },
        create: function() {
          var rr = this,
            Sr = rr._parent,
            Qr = ar._muted || rr._muted || rr._parent._muted ? 0 : rr._volume;
          return Sr._webAudio ? (rr._node = "undefined" === typeof ar.ctx.createGain ? ar.ctx.createGainNode() : ar.ctx.createGain(), rr._node.gain.setValueAtTime(Qr, ar.ctx.currentTime), rr._node.paused = !0, rr._node.connect(ar.masterGain)) : ar.noAudio || (rr._node = ar._obtainHtml5Audio(), rr._errorFn = rr._errorListener.bind(rr), rr._node.addEventListener("error", rr._errorFn, !1), rr._loadFn = rr._loadListener.bind(rr), rr._node.addEventListener(ar._canPlayEvent, rr._loadFn, !1), rr._endFn = rr._endListener.bind(rr), rr._node.addEventListener("ended", rr._endFn, !1), rr._node.src = Sr._src, rr._node.preload = !0 === Sr._preload ? "auto" : Sr._preload, rr._node.volume = Qr * ar.volume(), rr._node.load()), rr
        },
        reset: function() {
          var rr = this,
            Sr = rr._parent;
          return rr._muted = Sr._muted, rr._loop = Sr._loop, rr._volume = Sr._volume, rr._rate = Sr._rate, rr._seek = 0, rr._rateSeek = 0, rr.Lx = !0, rr._ended = !0, rr._sprite = "__default", rr._id = ++ar._counter, rr
        },
        _errorListener: function() {
          var rr = this;
          rr._parent._emit("loaderror", rr._id, rr._node.error ? rr._node.error.code : 0), rr._node.removeEventListener("error", rr._errorFn, !1)
        },
        _loadListener: function() {
          var rr = this,
            Sr = rr._parent;
          Sr._duration = Math.ceil(10 * rr._node.duration) / 10, 0 === Object.keys(Sr._sprite).length && (Sr._sprite = {
            __default: [0, 1e3 * Sr._duration]
          }), "loaded" !== Sr._state && (Sr._state = "loaded", Sr._emit("load"), Sr._loadQueue()), rr._node.removeEventListener(ar._canPlayEvent, rr._loadFn, !1)
        },
        _endListener: function() {
          var rr = this,
            Sr = rr._parent;
          Sr._duration === 1 / 0 && (Sr._duration = Math.ceil(10 * rr._node.duration) / 10, Sr._sprite.__default[1] === 1 / 0 && (Sr._sprite.__default[1] = 1e3 * Sr._duration), Sr._ended(rr)), rr._node.removeEventListener("ended", rr._endFn, !1)
        }
      };
      var fr = {},
        Er = function(rr) {
          var Sr = rr._src;
          if (fr[Sr]) return rr._duration = fr[Sr].duration, void mr(rr);
          if (/^data:[^;]+;base64,/.test(Sr)) {
            for (var Qr = atob(Sr.split(",")[1]), Zr = new Uint8Array(Qr.length), Wr = 0; Wr < Qr.length; ++Wr) Zr[Wr] = Qr.charCodeAt(Wr);
            xr(Zr.buffer, rr)
          } else {
            var ar = new XMLHttpRequest;
            ar.open(rr._xhr.method, Sr, !0), ar.withCredentials = rr._xhr.withCredentials, ar.responseType = "arraybuffer", rr._xhr.headers && Object.keys(rr._xhr.headers).forEach((function(Sr) {
              ar.setRequestHeader(Sr, rr._xhr.headers[Sr])
            })), ar.onload = function() {
              var Sr = (ar.status + "")[0];
              "0" === Sr || "2" === Sr || "3" === Sr ? xr(ar.response, rr) : rr._emit("loaderror", null, "Failed loading audio file with status: " + ar.status + ".")
            }, ar.onerror = function() {
              rr._webAudio && (rr._html5 = !0, rr._webAudio = !1, rr._sounds = [], delete fr[Sr], rr.load())
            }, pr(ar)
          }
        },
        pr = function(rr) {
          try {
            rr.send()
          } catch (Sr) {
            rr.onerror()
          }
        },
        xr = function(rr, Sr) {
          var Qr = function() {
              Sr._emit("loaderror", null, "Decoding audio data failed.")
            },
            Zr = function(rr) {
              rr && Sr._sounds.length > 0 ? (fr[Sr._src] = rr, mr(Sr, rr)) : Qr()
            };
          "undefined" !== typeof Promise && 1 === ar.ctx.decodeAudioData.length ? ar.ctx.decodeAudioData(rr).then(Zr).catch(Qr) : ar.ctx.decodeAudioData(rr, Zr, Qr)
        },
        mr = function(rr, Sr) {
          Sr && !rr._duration && (rr._duration = Sr.duration), 0 === Object.keys(rr._sprite).length && (rr._sprite = {
            __default: [0, 1e3 * rr._duration]
          }), "loaded" !== rr._state && (rr._state = "loaded", rr._emit("load"), rr._loadQueue())
        },
        Nr = function() {
          if (ar.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? ar.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? ar.ctx = new webkitAudioContext : ar.usingWebAudio = !1
            } catch (Wr) {
              ar.usingWebAudio = !1
            }
            ar.ctx || (ar.usingWebAudio = !1);
            var rr = /iP(hone|od|ad)/.test(ar._navigator && ar._navigator.platform),
              Sr = ar._navigator && ar._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              Qr = Sr ? parseInt(Sr[1], 10) : null;
            if (rr && Qr && Qr < 9) {
              var Zr = /safari/.test(ar._navigator && ar._navigator.userAgent.toLowerCase());
              ar._navigator && !Zr && (ar.usingWebAudio = !1)
            }
            ar.usingWebAudio && (ar.masterGain = "undefined" === typeof ar.ctx.createGain ? ar.ctx.createGainNode() : ar.ctx.createGain(), ar.masterGain.gain.setValueAtTime(ar._muted ? 0 : ar._volume, ar.ctx.currentTime), ar.masterGain.connect(ar.ctx.destination)), ar._setup()
          }
        };
      void 0 === (Zr = function() {
        return {
          Howler: ar,
          Howl: jr
        }
      }.apply(Sr, [])) || (rr.exports = Zr), Sr.Howler = ar, Sr.Howl = jr, "undefined" !== typeof Qr.g ? (Qr.g.HowlerGlobal = Wr, Qr.g.Howler = ar, Qr.g.Howl = jr, Qr.g.Sound = Ir) : "undefined" !== typeof window && (window.HowlerGlobal = Wr, window.Howler = ar, window.Howl = jr, window.Sound = Ir)
    }(),
    function() {
      var rr;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(rr) {
        var Sr = this;
        if (!Sr.ctx || !Sr.ctx.listener) return Sr;
        for (var Qr = Sr._howls.length - 1; Qr >= 0; Qr--) Sr._howls[Qr].stereo(rr);
        return Sr
      }, HowlerGlobal.prototype.pos = function(rr, Sr, Qr) {
        var Zr = this;
        return Zr.ctx && Zr.ctx.listener ? (Sr = "number" !== typeof Sr ? Zr._pos[1] : Sr, Qr = "number" !== typeof Qr ? Zr._pos[2] : Qr, "number" !== typeof rr ? Zr._pos : (Zr._pos = [rr, Sr, Qr], "undefined" !== typeof Zr.ctx.listener.positionX ? (Zr.ctx.listener.positionX.setTargetAtTime(Zr._pos[0], Howler.ctx.currentTime, .1), Zr.ctx.listener.positionY.setTargetAtTime(Zr._pos[1], Howler.ctx.currentTime, .1), Zr.ctx.listener.positionZ.setTargetAtTime(Zr._pos[2], Howler.ctx.currentTime, .1)) : Zr.ctx.listener.setPosition(Zr._pos[0], Zr._pos[1], Zr._pos[2]), Zr)) : Zr
      }, HowlerGlobal.prototype.orientation = function(rr, Sr, Qr, Zr, Wr, ar) {
        var jr = this;
        if (!jr.ctx || !jr.ctx.listener) return jr;
        var Ir = jr._orientation;
        return Sr = "number" !== typeof Sr ? Ir[1] : Sr, Qr = "number" !== typeof Qr ? Ir[2] : Qr, Zr = "number" !== typeof Zr ? Ir[3] : Zr, Wr = "number" !== typeof Wr ? Ir[4] : Wr, ar = "number" !== typeof ar ? Ir[5] : ar, "number" !== typeof rr ? Ir : (jr._orientation = [rr, Sr, Qr, Zr, Wr, ar], "undefined" !== typeof jr.ctx.listener.forwardX ? (jr.ctx.listener.forwardX.setTargetAtTime(rr, Howler.ctx.currentTime, .1), jr.ctx.listener.forwardY.setTargetAtTime(Sr, Howler.ctx.currentTime, .1), jr.ctx.listener.forwardZ.setTargetAtTime(Qr, Howler.ctx.currentTime, .1), jr.ctx.listener.upX.setTargetAtTime(Zr, Howler.ctx.currentTime, .1), jr.ctx.listener.upY.setTargetAtTime(Wr, Howler.ctx.currentTime, .1), jr.ctx.listener.upZ.setTargetAtTime(ar, Howler.ctx.currentTime, .1)) : jr.ctx.listener.setOrientation(rr, Sr, Qr, Zr, Wr, ar), jr)
      }, Howl.prototype.init = (rr = Howl.prototype.init, function(Sr) {
        var Qr = this;
        return Qr._orientation = Sr.orientation || [1, 0, 0], Qr._stereo = Sr.stereo || null, Qr._pos = Sr.pos || null, Qr._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Sr.coneInnerAngle ? Sr.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Sr.coneOuterAngle ? Sr.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Sr.coneOuterGain ? Sr.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Sr.distanceModel ? Sr.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Sr.maxDistance ? Sr.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Sr.panningModel ? Sr.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Sr.refDistance ? Sr.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Sr.rolloffFactor ? Sr.rolloffFactor : 1
        }, Qr._onstereo = Sr.onstereo ? [{
          Wx: Sr.onstereo
        }] : [], Qr._onpos = Sr.onpos ? [{
          Wx: Sr.onpos
        }] : [], Qr._onorientation = Sr.onorientation ? [{
          Wx: Sr.onorientation
        }] : [], rr.call(this, Sr)
      }), Howl.prototype.stereo = function(rr, Qr) {
        var Zr = this;
        if (!Zr._webAudio) return Zr;
        if ("loaded" !== Zr._state) return Zr._queue.push({
          event: "stereo",
          action: function() {
            Zr.stereo(rr, Qr)
          }
        }), Zr;
        var Wr = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof Qr) {
          if ("number" !== typeof rr) return Zr._stereo;
          Zr._stereo = rr, Zr._pos = [rr, 0, 0]
        }
        for (var ar = Zr._getSoundIds(Qr), jr = 0; jr < ar.length; jr++) {
          var Ir = Zr._soundById(ar[jr]);
          if (Ir) {
            if ("number" !== typeof rr) return Ir._stereo;
            Ir._stereo = rr, Ir._pos = [rr, 0, 0], Ir._node && (Ir._pannerAttr.panningModel = "equalpower", Ir._panner && Ir._panner.pan || Sr(Ir, Wr), "spatial" === Wr ? "undefined" !== typeof Ir._panner.positionX ? (Ir._panner.positionX.setValueAtTime(rr, Howler.ctx.currentTime), Ir._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), Ir._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : Ir._panner.setPosition(rr, 0, 0) : Ir._panner.pan.setValueAtTime(rr, Howler.ctx.currentTime)), Zr._emit("stereo", Ir._id)
          }
        }
        return Zr
      }, Howl.prototype.pos = function(rr, Qr, Zr, Wr) {
        var ar = this;
        if (!ar._webAudio) return ar;
        if ("loaded" !== ar._state) return ar._queue.push({
          event: "pos",
          action: function() {
            ar.pos(rr, Qr, Zr, Wr)
          }
        }), ar;
        if (Qr = "number" !== typeof Qr ? 0 : Qr, Zr = "number" !== typeof Zr ? -.5 : Zr, "undefined" === typeof Wr) {
          if ("number" !== typeof rr) return ar._pos;
          ar._pos = [rr, Qr, Zr]
        }
        for (var jr = ar._getSoundIds(Wr), Ir = 0; Ir < jr.length; Ir++) {
          var fr = ar._soundById(jr[Ir]);
          if (fr) {
            if ("number" !== typeof rr) return fr._pos;
            fr._pos = [rr, Qr, Zr], fr._node && (fr._panner && !fr._panner.pan || Sr(fr, "spatial"), "undefined" !== typeof fr._panner.positionX ? (fr._panner.positionX.setValueAtTime(rr, Howler.ctx.currentTime), fr._panner.positionY.setValueAtTime(Qr, Howler.ctx.currentTime), fr._panner.positionZ.setValueAtTime(Zr, Howler.ctx.currentTime)) : fr._panner.setPosition(rr, Qr, Zr)), ar._emit("pos", fr._id)
          }
        }
        return ar
      }, Howl.prototype.orientation = function(rr, Qr, Zr, Wr) {
        var ar = this;
        if (!ar._webAudio) return ar;
        if ("loaded" !== ar._state) return ar._queue.push({
          event: "orientation",
          action: function() {
            ar.orientation(rr, Qr, Zr, Wr)
          }
        }), ar;
        if (Qr = "number" !== typeof Qr ? ar._orientation[1] : Qr, Zr = "number" !== typeof Zr ? ar._orientation[2] : Zr, "undefined" === typeof Wr) {
          if ("number" !== typeof rr) return ar._orientation;
          ar._orientation = [rr, Qr, Zr]
        }
        for (var jr = ar._getSoundIds(Wr), Ir = 0; Ir < jr.length; Ir++) {
          var fr = ar._soundById(jr[Ir]);
          if (fr) {
            if ("number" !== typeof rr) return fr._orientation;
            fr._orientation = [rr, Qr, Zr], fr._node && (fr._panner || (fr._pos || (fr._pos = ar._pos || [0, 0, -.5]), Sr(fr, "spatial")), "undefined" !== typeof fr._panner.orientationX ? (fr._panner.orientationX.setValueAtTime(rr, Howler.ctx.currentTime), fr._panner.orientationY.setValueAtTime(Qr, Howler.ctx.currentTime), fr._panner.orientationZ.setValueAtTime(Zr, Howler.ctx.currentTime)) : fr._panner.setOrientation(rr, Qr, Zr)), ar._emit("orientation", fr._id)
          }
        }
        return ar
      }, Howl.prototype.pannerAttr = function() {
        var rr, Qr, Zr, Wr = this,
          ar = arguments;
        if (!Wr._webAudio) return Wr;
        if (0 === ar.length) return Wr._pannerAttr;
        if (1 === ar.length) {
          if ("object" !== typeof ar[0]) return (Zr = Wr._soundById(parseInt(ar[0], 10))) ? Zr._pannerAttr : Wr._pannerAttr;
          rr = ar[0], "undefined" === typeof Qr && (rr.pannerAttr || (rr.pannerAttr = {
            coneInnerAngle: rr.coneInnerAngle,
            coneOuterAngle: rr.coneOuterAngle,
            coneOuterGain: rr.coneOuterGain,
            distanceModel: rr.distanceModel,
            maxDistance: rr.maxDistance,
            refDistance: rr.refDistance,
            rolloffFactor: rr.rolloffFactor,
            panningModel: rr.panningModel
          }), Wr._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof rr.pannerAttr.coneInnerAngle ? rr.pannerAttr.coneInnerAngle : Wr._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof rr.pannerAttr.coneOuterAngle ? rr.pannerAttr.coneOuterAngle : Wr._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof rr.pannerAttr.coneOuterGain ? rr.pannerAttr.coneOuterGain : Wr._coneOuterGain,
            distanceModel: "undefined" !== typeof rr.pannerAttr.distanceModel ? rr.pannerAttr.distanceModel : Wr._distanceModel,
            maxDistance: "undefined" !== typeof rr.pannerAttr.maxDistance ? rr.pannerAttr.maxDistance : Wr._maxDistance,
            refDistance: "undefined" !== typeof rr.pannerAttr.refDistance ? rr.pannerAttr.refDistance : Wr._refDistance,
            rolloffFactor: "undefined" !== typeof rr.pannerAttr.rolloffFactor ? rr.pannerAttr.rolloffFactor : Wr._rolloffFactor,
            panningModel: "undefined" !== typeof rr.pannerAttr.panningModel ? rr.pannerAttr.panningModel : Wr._panningModel
          })
        } else 2 === ar.length && (rr = ar[0], Qr = parseInt(ar[1], 10));
        for (var jr = Wr._getSoundIds(Qr), Ir = 0; Ir < jr.length; Ir++)
          if (Zr = Wr._soundById(jr[Ir])) {
            var fr = Zr._pannerAttr;
            fr = {
              coneInnerAngle: "undefined" !== typeof rr.coneInnerAngle ? rr.coneInnerAngle : fr.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof rr.coneOuterAngle ? rr.coneOuterAngle : fr.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof rr.coneOuterGain ? rr.coneOuterGain : fr.coneOuterGain,
              distanceModel: "undefined" !== typeof rr.distanceModel ? rr.distanceModel : fr.distanceModel,
              maxDistance: "undefined" !== typeof rr.maxDistance ? rr.maxDistance : fr.maxDistance,
              refDistance: "undefined" !== typeof rr.refDistance ? rr.refDistance : fr.refDistance,
              rolloffFactor: "undefined" !== typeof rr.rolloffFactor ? rr.rolloffFactor : fr.rolloffFactor,
              panningModel: "undefined" !== typeof rr.panningModel ? rr.panningModel : fr.panningModel
            };
            var Er = Zr._panner;
            Er ? (Er.coneInnerAngle = fr.coneInnerAngle, Er.coneOuterAngle = fr.coneOuterAngle, Er.coneOuterGain = fr.coneOuterGain, Er.distanceModel = fr.distanceModel, Er.maxDistance = fr.maxDistance, Er.refDistance = fr.refDistance, Er.rolloffFactor = fr.rolloffFactor, Er.panningModel = fr.panningModel) : (Zr._pos || (Zr._pos = Wr._pos || [0, 0, -.5]), Sr(Zr, "spatial"))
          } return Wr
      }, Sound.prototype.init = function(rr) {
        return function() {
          var Sr = this,
            Qr = Sr._parent;
          Sr._orientation = Qr._orientation, Sr._stereo = Qr._stereo, Sr._pos = Qr._pos, Sr._pannerAttr = Qr._pannerAttr, rr.call(this), Sr._stereo ? Qr.stereo(Sr._stereo) : Sr._pos && Qr.pos(Sr._pos[0], Sr._pos[1], Sr._pos[2], Sr._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(rr) {
        return function() {
          var Sr = this,
            Qr = Sr._parent;
          return Sr._orientation = Qr._orientation, Sr._stereo = Qr._stereo, Sr._pos = Qr._pos, Sr._pannerAttr = Qr._pannerAttr, Sr._stereo ? Qr.stereo(Sr._stereo) : Sr._pos ? Qr.pos(Sr._pos[0], Sr._pos[1], Sr._pos[2], Sr._id) : Sr._panner && (Sr._panner.disconnect(0), Sr._panner = void 0, Qr._refreshBuffer(Sr)), rr.call(this)
        }
      }(Sound.prototype.reset);
      var Sr = function(rr, Sr) {
        "spatial" === (Sr = Sr || "spatial") ? (rr._panner = Howler.ctx.createPanner(), rr._panner.coneInnerAngle = rr._pannerAttr.coneInnerAngle, rr._panner.coneOuterAngle = rr._pannerAttr.coneOuterAngle, rr._panner.coneOuterGain = rr._pannerAttr.coneOuterGain, rr._panner.distanceModel = rr._pannerAttr.distanceModel, rr._panner.maxDistance = rr._pannerAttr.maxDistance, rr._panner.refDistance = rr._pannerAttr.refDistance, rr._panner.rolloffFactor = rr._pannerAttr.rolloffFactor, rr._panner.panningModel = rr._pannerAttr.panningModel, "undefined" !== typeof rr._panner.positionX ? (rr._panner.positionX.setValueAtTime(rr._pos[0], Howler.ctx.currentTime), rr._panner.positionY.setValueAtTime(rr._pos[1], Howler.ctx.currentTime), rr._panner.positionZ.setValueAtTime(rr._pos[2], Howler.ctx.currentTime)) : rr._panner.setPosition(rr._pos[0], rr._pos[1], rr._pos[2]), "undefined" !== typeof rr._panner.orientationX ? (rr._panner.orientationX.setValueAtTime(rr._orientation[0], Howler.ctx.currentTime), rr._panner.orientationY.setValueAtTime(rr._orientation[1], Howler.ctx.currentTime), rr._panner.orientationZ.setValueAtTime(rr._orientation[2], Howler.ctx.currentTime)) : rr._panner.setOrientation(rr._orientation[0], rr._orientation[1], rr._orientation[2])) : (rr._panner = Howler.ctx.createStereoPanner(), rr._panner.pan.setValueAtTime(rr._stereo, Howler.ctx.currentTime)), rr._panner.connect(rr._node), rr.Lx || rr._parent.pause(rr._id, !0).play(rr._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);