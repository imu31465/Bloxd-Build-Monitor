/*! For license information please see igzsf.98.a02af7b0.chunk.js.LICENSE.txt */
export const id = 98;
export const ids = [98];
export const modules = {
  5036: (tt, et, Vt) => {
    var Ot;
    ! function() {
      var qt = function() {
        this.init()
      };
      qt.prototype = {
        init: function() {
          var tt = this || Dt;
          return tt._counter = 1e3, tt._html5AudioPool = [], tt.html5PoolSize = 10, tt._codecs = {}, tt._howls = [], tt._muted = !1, tt._volume = 1, tt._canPlayEvent = "canplaythrough", tt._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, tt.masterGain = null, tt.noAudio = !1, tt.usingWebAudio = !0, tt.autoSuspend = !0, tt.ctx = null, tt.autoUnlock = !0, tt._setup(), tt
        },
        volume: function(tt) {
          var et = this || Dt;
          if (tt = parseFloat(tt), et.ctx || Et(), "undefined" !== typeof tt && tt >= 0 && tt <= 1) {
            if (et._volume = tt, et._muted) return et;
            et.usingWebAudio && et.masterGain.gain.setValueAtTime(tt, Dt.ctx.currentTime);
            for (var Vt = 0; Vt < et._howls.length; Vt++)
              if (!et._howls[Vt]._webAudio)
                for (var Ot = et._howls[Vt]._getSoundIds(), qt = 0; qt < Ot.length; qt++) {
                  var mt = et._howls[Vt]._soundById(Ot[qt]);
                  mt && mt._node && (mt._node.volume = mt._volume * tt)
                }
            return et
          }
          return et._volume
        },
        mute: function(tt) {
          var et = this || Dt;
          et.ctx || Et(), et._muted = tt, et.usingWebAudio && et.masterGain.gain.setValueAtTime(tt ? 0 : et._volume, Dt.ctx.currentTime);
          for (var Vt = 0; Vt < et._howls.length; Vt++)
            if (!et._howls[Vt]._webAudio)
              for (var Ot = et._howls[Vt]._getSoundIds(), qt = 0; qt < Ot.length; qt++) {
                var mt = et._howls[Vt]._soundById(Ot[qt]);
                mt && mt._node && (mt._node.muted = !!tt || mt._muted)
              }
          return et
        },
        stop: function() {
          for (var tt = this || Dt, et = 0; et < tt._howls.length; et++) tt._howls[et].stop();
          return tt
        },
        unload: function() {
          for (var tt = this || Dt, et = tt._howls.length - 1; et >= 0; et--) tt._howls[et].unload();
          return tt.usingWebAudio && tt.ctx && "undefined" !== typeof tt.ctx.close && (tt.ctx.close(), tt.ctx = null, Et()), tt
        },
        codecs: function(tt) {
          return (this || Dt)._codecs[tt.replace(/^x-/, "")]
        },
        _setup: function() {
          var tt = this || Dt;
          if (tt.state = tt.ctx && tt.ctx.state || "suspended", tt._autoSuspend(), !tt.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (tt._canPlayEvent = "canplay")
            } catch (et) {
              tt.noAudio = !0
            } else tt.noAudio = !0;
          try {
            (new Audio).muted && (tt.noAudio = !0)
          } catch (et) {}
          return tt.noAudio || tt._setupCodecs(), tt
        },
        _setupCodecs: function() {
          var tt = this || Dt,
            et = null;
          try {
            et = "undefined" !== typeof Audio ? new Audio : null
          } catch (Xt) {
            return tt
          }
          if (!et || "function" !== typeof et.canPlayType) return tt;
          var Vt = et.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Ot = tt._navigator ? tt._navigator.userAgent : "",
            qt = Ot.match(/OPR\/([0-6].)/g),
            mt = qt && parseInt(qt[0].split("/")[1], 10) < 33,
            dt = -1 !== Ot.indexOf("Safari") && -1 === Ot.indexOf("Chrome"),
            jt = Ot.match(/Version\/(.*?) /),
            Ht = dt && jt && parseInt(jt[1], 10) < 15;
          return tt._codecs = {
            mp3: !(mt || !Vt && !et.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!Vt,
            opus: !!et.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!et.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!et.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(et.canPlayType('audio/wav; codecs="1"') || et.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!et.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!et.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(et.canPlayType("audio/x-m4a;") || et.canPlayType("audio/m4a;") || et.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(et.canPlayType("audio/x-m4b;") || et.canPlayType("audio/m4b;") || et.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(et.canPlayType("audio/x-mp4;") || et.canPlayType("audio/mp4;") || et.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Ht || !et.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Ht || !et.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!et.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(et.canPlayType("audio/x-flac;") || et.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, tt
        },
        _unlockAudio: function() {
          var tt = this || Dt;
          if (!tt._audioUnlocked && tt.ctx) {
            tt._audioUnlocked = !1, tt.autoUnlock = !1, tt._mobileUnloaded || 44100 === tt.ctx.sampleRate || (tt._mobileUnloaded = !0, tt.unload()), tt._scratchBuffer = tt.ctx.createBuffer(1, 1, 22050);
            var et = function(Vt) {
              for (; tt._html5AudioPool.length < tt.html5PoolSize;) try {
                var Ot = new Audio;
                Ot._unlocked = !0, tt._releaseHtml5Audio(Ot)
              } catch (Vt) {
                tt.noAudio = !0;
                break
              }
              for (var qt = 0; qt < tt._howls.length; qt++)
                if (!tt._howls[qt]._webAudio)
                  for (var Dt = tt._howls[qt]._getSoundIds(), mt = 0; mt < Dt.length; mt++) {
                    var dt = tt._howls[qt]._soundById(Dt[mt]);
                    dt && dt._node && !dt._node._unlocked && (dt._node._unlocked = !0, dt._node.load())
                  }
              tt._autoResume();
              var jt = tt.ctx.createBufferSource();
              jt.buffer = tt._scratchBuffer, jt.connect(tt.ctx.destination), "undefined" === typeof jt.start ? jt.noteOn(0) : jt.start(0), "function" === typeof tt.ctx.resume && tt.ctx.resume(), jt.onended = function() {
                jt.disconnect(0), tt._audioUnlocked = !0, document.removeEventListener("touchstart", et, !0), document.removeEventListener("touchend", et, !0), document.removeEventListener("click", et, !0), document.removeEventListener("keydown", et, !0);
                for (var Vt = 0; Vt < tt._howls.length; Vt++) tt._howls[Vt]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", et, !0), document.addEventListener("touchend", et, !0), document.addEventListener("click", et, !0), document.addEventListener("keydown", et, !0), tt
          }
        },
        _obtainHtml5Audio: function() {
          var tt = this || Dt;
          if (tt._html5AudioPool.length) return tt._html5AudioPool.pop();
          var et = (new Audio).play();
          return et && "undefined" !== typeof Promise && (et instanceof Promise || "function" === typeof et.then) && et.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(tt) {
          var et = this || Dt;
          return tt._unlocked && et._html5AudioPool.push(tt), et
        },
        _autoSuspend: function() {
          var tt = this;
          if (tt.autoSuspend && tt.ctx && "undefined" !== typeof tt.ctx.suspend && Dt.usingWebAudio) {
            for (var et = 0; et < tt._howls.length; et++)
              if (tt._howls[et]._webAudio)
                for (var Vt = 0; Vt < tt._howls[et]._sounds.length; Vt++)
                  if (!tt._howls[et]._sounds[Vt].NJ) return tt;
            return tt._suspendTimer && clearTimeout(tt._suspendTimer), tt._suspendTimer = setTimeout((function() {
              if (tt.autoSuspend) {
                tt._suspendTimer = null, tt.state = "suspending";
                var et = function() {
                  tt.state = "suspended", tt._resumeAfterSuspend && (delete tt._resumeAfterSuspend, tt._autoResume())
                };
                tt.ctx.suspend().then(et, et)
              }
            }), 3e4), tt
          }
        },
        _autoResume: function() {
          var tt = this;
          if (tt.ctx && "undefined" !== typeof tt.ctx.resume && Dt.usingWebAudio) return "running" === tt.state && "interrupted" !== tt.ctx.state && tt._suspendTimer ? (clearTimeout(tt._suspendTimer), tt._suspendTimer = null) : "suspended" === tt.state || "running" === tt.state && "interrupted" === tt.ctx.state ? (tt.ctx.resume().then((function() {
            tt.state = "running";
            for (var et = 0; et < tt._howls.length; et++) tt._howls[et]._emit("resume")
          })), tt._suspendTimer && (clearTimeout(tt._suspendTimer), tt._suspendTimer = null)) : "suspending" === tt.state && (tt._resumeAfterSuspend = !0), tt
        }
      };
      var Dt = new qt,
        mt = function(tt) {
          tt.src && 0 !== tt.src.length ? this.init(tt) : console.error("An array of source files must be passed with any new Howl.")
        };
      mt.prototype = {
        init: function(tt) {
          var et = this;
          return Dt.ctx || Et(), et._autoplay = tt.autoplay || !1, et._format = "string" !== typeof tt.format ? tt.format : [tt.format], et._html5 = tt.html5 || !1, et._muted = tt.mute || !1, et._loop = tt.loop || !1, et._pool = tt.pool || 5, et._preload = "boolean" !== typeof tt.preload && "metadata" !== tt.preload || tt.preload, et._rate = tt.rate || 1, et._sprite = tt.sprite || {}, et._src = "string" !== typeof tt.src ? tt.src : [tt.src], et._volume = void 0 !== tt.volume ? tt.volume : 1, et._xhr = {
            method: tt.xhr && tt.xhr.method ? tt.xhr.method : "GET",
            headers: tt.xhr && tt.xhr.headers ? tt.xhr.headers : null,
            withCredentials: !(!tt.xhr || !tt.xhr.withCredentials) && tt.xhr.withCredentials
          }, et._duration = 0, et._state = "unloaded", et._sounds = [], et._endTimers = {}, et._queue = [], et._playLock = !1, et._onend = tt.onend ? [{
            pE: tt.onend
          }] : [], et._onfade = tt.onfade ? [{
            pE: tt.onfade
          }] : [], et._onload = tt.onload ? [{
            pE: tt.onload
          }] : [], et._onloaderror = tt.onloaderror ? [{
            pE: tt.onloaderror
          }] : [], et._onplayerror = tt.onplayerror ? [{
            pE: tt.onplayerror
          }] : [], et._onpause = tt.onpause ? [{
            pE: tt.onpause
          }] : [], et._onplay = tt.onplay ? [{
            pE: tt.onplay
          }] : [], et._onstop = tt.onstop ? [{
            pE: tt.onstop
          }] : [], et._onmute = tt.onmute ? [{
            pE: tt.onmute
          }] : [], et._onvolume = tt.onvolume ? [{
            pE: tt.onvolume
          }] : [], et._onrate = tt.onrate ? [{
            pE: tt.onrate
          }] : [], et._onseek = tt.onseek ? [{
            pE: tt.onseek
          }] : [], et._onunlock = tt.onunlock ? [{
            pE: tt.onunlock
          }] : [], et._onresume = [], et._webAudio = Dt.usingWebAudio && !et._html5, "undefined" !== typeof Dt.ctx && Dt.ctx && Dt.autoUnlock && Dt._unlockAudio(), Dt._howls.push(et), et._autoplay && et._queue.push({
            event: "play",
            action: function() {
              et.play()
            }
          }), et._preload && "none" !== et._preload && et.load(), et
        },
        load: function() {
          var tt = this,
            et = null;
          if (Dt.noAudio) tt._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof tt._src && (tt._src = [tt._src]);
            for (var Vt = 0; Vt < tt._src.length; Vt++) {
              var Ot, qt;
              if (tt._format && tt._format[Vt]) Ot = tt._format[Vt];
              else {
                if ("string" !== typeof(qt = tt._src[Vt])) {
                  tt._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Ot = /^data:audio\/([^;,]+);/i.exec(qt)) || (Ot = /\.([^.]+)$/.exec(qt.split("?", 1)[0])), Ot && (Ot = Ot[1].toLowerCase())
              }
              if (Ot || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Ot && Dt.codecs(Ot)) {
                et = tt._src[Vt];
                break
              }
            }
            if (et) return tt._src = et, tt._state = "loading", "https:" === window.location.protocol && "http:" === et.slice(0, 5) && (tt._html5 = !0, tt._webAudio = !1), new dt(tt), tt._webAudio && Ht(tt), tt;
            tt._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(tt, et) {
          var Vt = this,
            Ot = null;
          if ("number" === typeof tt) Ot = tt, tt = null;
          else {
            if ("string" === typeof tt && "loaded" === Vt._state && !Vt._sprite[tt]) return null;
            if ("undefined" === typeof tt && (tt = "__default", !Vt._playLock)) {
              for (var qt = 0, mt = 0; mt < Vt._sounds.length; mt++) Vt._sounds[mt].NJ && !Vt._sounds[mt]._ended && (qt++, Ot = Vt._sounds[mt]._id);
              1 === qt ? tt = null : Ot = null
            }
          }
          var dt = Ot ? Vt._soundById(Ot) : Vt._inactiveSound();
          if (!dt) return null;
          if (Ot && !tt && (tt = dt._sprite || "__default"), "loaded" !== Vt._state) {
            dt._sprite = tt, dt._ended = !1;
            var jt = dt._id;
            return Vt._queue.push({
              event: "play",
              action: function() {
                Vt.play(jt)
              }
            }), jt
          }
          if (Ot && !dt.NJ) return et || Vt._loadQueue("play"), dt._id;
          Vt._webAudio && Dt._autoResume();
          var Ht = Math.max(0, dt._seek > 0 ? dt._seek : Vt._sprite[tt][0] / 1e3),
            Xt = Math.max(0, (Vt._sprite[tt][0] + Vt._sprite[tt][1]) / 1e3 - Ht),
            Qt = 1e3 * Xt / Math.abs(dt._rate),
            lt = Vt._sprite[tt][0] / 1e3,
            Et = (Vt._sprite[tt][0] + Vt._sprite[tt][1]) / 1e3;
          dt._sprite = tt, dt._ended = !1;
          var ft = function() {
            dt.NJ = !1, dt._seek = Ht, dt._start = lt, dt._stop = Et, dt._loop = !(!dt._loop && !Vt._sprite[tt][2])
          };
          if (!(Ht >= Et)) {
            var wt = dt._node;
            if (Vt._webAudio) {
              var yt = function() {
                Vt._playLock = !1, ft(), Vt._refreshBuffer(dt);
                var tt = dt._muted || Vt._muted ? 0 : dt._volume;
                wt.gain.setValueAtTime(tt, Dt.ctx.currentTime), dt._playStart = Dt.ctx.currentTime, "undefined" === typeof wt.bufferSource.start ? dt._loop ? wt.bufferSource.noteGrainOn(0, Ht, 86400) : wt.bufferSource.noteGrainOn(0, Ht, Xt) : dt._loop ? wt.bufferSource.start(0, Ht, 86400) : wt.bufferSource.start(0, Ht, Xt), Qt !== 1 / 0 && (Vt._endTimers[dt._id] = setTimeout(Vt._ended.bind(Vt, dt), Qt)), et || setTimeout((function() {
                  Vt._emit("play", dt._id), Vt._loadQueue()
                }), 0)
              };
              "running" === Dt.state && "interrupted" !== Dt.ctx.state ? yt() : (Vt._playLock = !0, Vt.once("resume", yt), Vt._clearTimer(dt._id))
            } else {
              var Nt = function() {
                wt.currentTime = Ht, wt.muted = dt._muted || Vt._muted || Dt._muted || wt.muted, wt.volume = dt._volume * Dt.volume(), wt.playbackRate = dt._rate;
                try {
                  var Ot = wt.play();
                  if (Ot && "undefined" !== typeof Promise && (Ot instanceof Promise || "function" === typeof Ot.then) ? (Vt._playLock = !0, ft(), Ot.then((function() {
                      Vt._playLock = !1, wt._unlocked = !0, et ? Vt._loadQueue() : Vt._emit("play", dt._id)
                    })).catch((function() {
                      Vt._playLock = !1, Vt._emit("playerror", dt._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), dt._ended = !0, dt.NJ = !0
                    }))) : et || (Vt._playLock = !1, ft(), Vt._emit("play", dt._id)), wt.playbackRate = dt._rate, wt.paused) return void Vt._emit("playerror", dt._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== tt || dt._loop ? Vt._endTimers[dt._id] = setTimeout(Vt._ended.bind(Vt, dt), Qt) : (Vt._endTimers[dt._id] = function() {
                    Vt._ended(dt), wt.removeEventListener("ended", Vt._endTimers[dt._id], !1)
                  }, wt.addEventListener("ended", Vt._endTimers[dt._id], !1))
                } catch (qt) {
                  Vt._emit("playerror", dt._id, qt)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === wt.src && (wt.src = Vt._src, wt.load());
              var Mt = window && window.ejecta || !wt.readyState && Dt._navigator.isCocoonJS;
              if (wt.readyState >= 3 || Mt) Nt();
              else {
                Vt._playLock = !0, Vt._state = "loading";
                var bt = function() {
                  Vt._state = "loaded", Nt(), wt.removeEventListener(Dt._canPlayEvent, bt, !1)
                };
                wt.addEventListener(Dt._canPlayEvent, bt, !1), Vt._clearTimer(dt._id)
              }
            }
            return dt._id
          }
          Vt._ended(dt)
        },
        pause: function(tt) {
          var et = this;
          if ("loaded" !== et._state || et._playLock) return et._queue.push({
            event: "pause",
            action: function() {
              et.pause(tt)
            }
          }), et;
          for (var Vt = et._getSoundIds(tt), Ot = 0; Ot < Vt.length; Ot++) {
            et._clearTimer(Vt[Ot]);
            var qt = et._soundById(Vt[Ot]);
            if (qt && !qt.NJ && (qt._seek = et.seek(Vt[Ot]), qt._rateSeek = 0, qt.NJ = !0, et._stopFade(Vt[Ot]), qt._node))
              if (et._webAudio) {
                if (!qt._node.bufferSource) continue;
                "undefined" === typeof qt._node.bufferSource.stop ? qt._node.bufferSource.noteOff(0) : qt._node.bufferSource.stop(0), et._cleanBuffer(qt._node)
              } else isNaN(qt._node.duration) && qt._node.duration !== 1 / 0 || qt._node.pause();
            arguments[1] || et._emit("pause", qt ? qt._id : null)
          }
          return et
        },
        stop: function(tt, et) {
          var Vt = this;
          if ("loaded" !== Vt._state || Vt._playLock) return Vt._queue.push({
            event: "stop",
            action: function() {
              Vt.stop(tt)
            }
          }), Vt;
          for (var Ot = Vt._getSoundIds(tt), qt = 0; qt < Ot.length; qt++) {
            Vt._clearTimer(Ot[qt]);
            var Dt = Vt._soundById(Ot[qt]);
            Dt && (Dt._seek = Dt._start || 0, Dt._rateSeek = 0, Dt.NJ = !0, Dt._ended = !0, Vt._stopFade(Ot[qt]), Dt._node && (Vt._webAudio ? Dt._node.bufferSource && ("undefined" === typeof Dt._node.bufferSource.stop ? Dt._node.bufferSource.noteOff(0) : Dt._node.bufferSource.stop(0), Vt._cleanBuffer(Dt._node)) : isNaN(Dt._node.duration) && Dt._node.duration !== 1 / 0 || (Dt._node.currentTime = Dt._start || 0, Dt._node.pause(), Dt._node.duration === 1 / 0 && Vt._clearSound(Dt._node))), et || Vt._emit("stop", Dt._id))
          }
          return Vt
        },
        mute: function(tt, et) {
          var Vt = this;
          if ("loaded" !== Vt._state || Vt._playLock) return Vt._queue.push({
            event: "mute",
            action: function() {
              Vt.mute(tt, et)
            }
          }), Vt;
          if ("undefined" === typeof et) {
            if ("boolean" !== typeof tt) return Vt._muted;
            Vt._muted = tt
          }
          for (var Ot = Vt._getSoundIds(et), qt = 0; qt < Ot.length; qt++) {
            var mt = Vt._soundById(Ot[qt]);
            mt && (mt._muted = tt, mt._interval && Vt._stopFade(mt._id), Vt._webAudio && mt._node ? mt._node.gain.setValueAtTime(tt ? 0 : mt._volume, Dt.ctx.currentTime) : mt._node && (mt._node.muted = !!Dt._muted || tt), Vt._emit("mute", mt._id))
          }
          return Vt
        },
        volume: function() {
          var tt, et, Vt, Ot = this,
            qt = arguments;
          if (0 === qt.length) return Ot._volume;
          if (1 === qt.length || 2 === qt.length && "undefined" === typeof qt[1] ? Ot._getSoundIds().indexOf(qt[0]) >= 0 ? et = parseInt(qt[0], 10) : tt = parseFloat(qt[0]) : qt.length >= 2 && (tt = parseFloat(qt[0]), et = parseInt(qt[1], 10)), !("undefined" !== typeof tt && tt >= 0 && tt <= 1)) return (Vt = et ? Ot._soundById(et) : Ot._sounds[0]) ? Vt._volume : 0;
          if ("loaded" !== Ot._state || Ot._playLock) return Ot._queue.push({
            event: "volume",
            action: function() {
              Ot.volume.apply(Ot, qt)
            }
          }), Ot;
          "undefined" === typeof et && (Ot._volume = tt), et = Ot._getSoundIds(et);
          for (var mt = 0; mt < et.length; mt++)(Vt = Ot._soundById(et[mt])) && (Vt._volume = tt, qt[2] || Ot._stopFade(et[mt]), Ot._webAudio && Vt._node && !Vt._muted ? Vt._node.gain.setValueAtTime(tt, Dt.ctx.currentTime) : Vt._node && !Vt._muted && (Vt._node.volume = tt * Dt.volume()), Ot._emit("volume", Vt._id));
          return Ot
        },
        fade: function(tt, et, Vt, Ot) {
          var qt = this;
          if ("loaded" !== qt._state || qt._playLock) return qt._queue.push({
            event: "fade",
            action: function() {
              qt.fade(tt, et, Vt, Ot)
            }
          }), qt;
          tt = Math.min(Math.max(0, parseFloat(tt)), 1), et = Math.min(Math.max(0, parseFloat(et)), 1), Vt = parseFloat(Vt), qt.volume(tt, Ot);
          for (var mt = qt._getSoundIds(Ot), dt = 0; dt < mt.length; dt++) {
            var jt = qt._soundById(mt[dt]);
            if (jt) {
              if (Ot || qt._stopFade(mt[dt]), qt._webAudio && !jt._muted) {
                var Ht = Dt.ctx.currentTime,
                  Xt = Ht + Vt / 1e3;
                jt._volume = tt, jt._node.gain.setValueAtTime(tt, Ht), jt._node.gain.linearRampToValueAtTime(et, Xt)
              }
              qt._startFadeInterval(jt, tt, et, Vt, mt[dt], "undefined" === typeof Ot)
            }
          }
          return qt
        },
        _startFadeInterval: function(tt, et, Vt, Ot, qt, Dt) {
          var mt = this,
            dt = et,
            jt = Vt - et,
            Ht = Math.abs(jt / .01),
            Xt = Math.max(4, Ht > 0 ? Ot / Ht : Ot),
            Qt = Date.now();
          tt._fadeTo = Vt, tt._interval = setInterval((function() {
            var qt = (Date.now() - Qt) / Ot;
            Qt = Date.now(), dt += jt * qt, dt = Math.round(100 * dt) / 100, dt = jt < 0 ? Math.max(Vt, dt) : Math.min(Vt, dt), mt._webAudio ? tt._volume = dt : mt.volume(dt, tt._id, !0), Dt && (mt._volume = dt), (Vt < et && dt <= Vt || Vt > et && dt >= Vt) && (clearInterval(tt._interval), tt._interval = null, tt._fadeTo = null, mt.volume(Vt, tt._id), mt._emit("fade", tt._id))
          }), Xt)
        },
        _stopFade: function(tt) {
          var et = this,
            Vt = et._soundById(tt);
          return Vt && Vt._interval && (et._webAudio && Vt._node.gain.cancelScheduledValues(Dt.ctx.currentTime), clearInterval(Vt._interval), Vt._interval = null, et.volume(Vt._fadeTo, tt), Vt._fadeTo = null, et._emit("fade", tt)), et
        },
        loop: function() {
          var tt, et, Vt, Ot = this,
            qt = arguments;
          if (0 === qt.length) return Ot._loop;
          if (1 === qt.length) {
            if ("boolean" !== typeof qt[0]) return !!(Vt = Ot._soundById(parseInt(qt[0], 10))) && Vt._loop;
            tt = qt[0], Ot._loop = tt
          } else 2 === qt.length && (tt = qt[0], et = parseInt(qt[1], 10));
          for (var Dt = Ot._getSoundIds(et), mt = 0; mt < Dt.length; mt++)(Vt = Ot._soundById(Dt[mt])) && (Vt._loop = tt, Ot._webAudio && Vt._node && Vt._node.bufferSource && (Vt._node.bufferSource.loop = tt, tt && (Vt._node.bufferSource.loopStart = Vt._start || 0, Vt._node.bufferSource.loopEnd = Vt._stop, Ot.playing(Dt[mt]) && (Ot.pause(Dt[mt], !0), Ot.play(Dt[mt], !0)))));
          return Ot
        },
        rate: function() {
          var tt, et, Vt, Ot = this,
            qt = arguments;
          if (0 === qt.length) et = Ot._sounds[0]._id;
          else if (1 === qt.length) {
            Ot._getSoundIds().indexOf(qt[0]) >= 0 ? et = parseInt(qt[0], 10) : tt = parseFloat(qt[0])
          } else 2 === qt.length && (tt = parseFloat(qt[0]), et = parseInt(qt[1], 10));
          if ("number" !== typeof tt) return (Vt = Ot._soundById(et)) ? Vt._rate : Ot._rate;
          if ("loaded" !== Ot._state || Ot._playLock) return Ot._queue.push({
            event: "rate",
            action: function() {
              Ot.rate.apply(Ot, qt)
            }
          }), Ot;
          "undefined" === typeof et && (Ot._rate = tt), et = Ot._getSoundIds(et);
          for (var mt = 0; mt < et.length; mt++)
            if (Vt = Ot._soundById(et[mt])) {
              Ot.playing(et[mt]) && (Vt._rateSeek = Ot.seek(et[mt]), Vt._playStart = Ot._webAudio ? Dt.ctx.currentTime : Vt._playStart), Vt._rate = tt, Ot._webAudio && Vt._node && Vt._node.bufferSource ? Vt._node.bufferSource.playbackRate.setValueAtTime(tt, Dt.ctx.currentTime) : Vt._node && (Vt._node.playbackRate = tt);
              var dt = Ot.seek(et[mt]),
                jt = 1e3 * ((Ot._sprite[Vt._sprite][0] + Ot._sprite[Vt._sprite][1]) / 1e3 - dt) / Math.abs(Vt._rate);
              !Ot._endTimers[et[mt]] && Vt.NJ || (Ot._clearTimer(et[mt]), Ot._endTimers[et[mt]] = setTimeout(Ot._ended.bind(Ot, Vt), jt)), Ot._emit("rate", Vt._id)
            } return Ot
        },
        seek: function() {
          var tt, et, Vt = this,
            Ot = arguments;
          if (0 === Ot.length) Vt._sounds.length && (et = Vt._sounds[0]._id);
          else if (1 === Ot.length) {
            Vt._getSoundIds().indexOf(Ot[0]) >= 0 ? et = parseInt(Ot[0], 10) : Vt._sounds.length && (et = Vt._sounds[0]._id, tt = parseFloat(Ot[0]))
          } else 2 === Ot.length && (tt = parseFloat(Ot[0]), et = parseInt(Ot[1], 10));
          if ("undefined" === typeof et) return 0;
          if ("number" === typeof tt && ("loaded" !== Vt._state || Vt._playLock)) return Vt._queue.push({
            event: "seek",
            action: function() {
              Vt.seek.apply(Vt, Ot)
            }
          }), Vt;
          var qt = Vt._soundById(et);
          if (qt) {
            if (!("number" === typeof tt && tt >= 0)) {
              if (Vt._webAudio) {
                var mt = Vt.playing(et) ? Dt.ctx.currentTime - qt._playStart : 0,
                  dt = qt._rateSeek ? qt._rateSeek - qt._seek : 0;
                return qt._seek + (dt + mt * Math.abs(qt._rate))
              }
              return qt._node.currentTime
            }
            var jt = Vt.playing(et);
            jt && Vt.pause(et, !0), qt._seek = tt, qt._ended = !1, Vt._clearTimer(et), Vt._webAudio || !qt._node || isNaN(qt._node.duration) || (qt._node.currentTime = tt);
            var Ht = function() {
              jt && Vt.play(et, !0), Vt._emit("seek", et)
            };
            if (jt && !Vt._webAudio) {
              var Xt = function() {
                Vt._playLock ? setTimeout(Xt, 0) : Ht()
              };
              setTimeout(Xt, 0)
            } else Ht()
          }
          return Vt
        },
        playing: function(tt) {
          var et = this;
          if ("number" === typeof tt) {
            var Vt = et._soundById(tt);
            return !!Vt && !Vt.NJ
          }
          for (var Ot = 0; Ot < et._sounds.length; Ot++)
            if (!et._sounds[Ot].NJ) return !0;
          return !1
        },
        duration: function(tt) {
          var et = this,
            Vt = et._duration,
            Ot = et._soundById(tt);
          return Ot && (Vt = et._sprite[Ot._sprite][1] / 1e3), Vt
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var tt = this, et = tt._sounds, Vt = 0; Vt < et.length; Vt++) et[Vt].NJ || tt.stop(et[Vt]._id), tt._webAudio || (tt._clearSound(et[Vt]._node), et[Vt]._node.removeEventListener("error", et[Vt]._errorFn, !1), et[Vt]._node.removeEventListener(Dt._canPlayEvent, et[Vt]._loadFn, !1), et[Vt]._node.removeEventListener("ended", et[Vt]._endFn, !1), Dt._releaseHtml5Audio(et[Vt]._node)), delete et[Vt]._node, tt._clearTimer(et[Vt]._id);
          var Ot = Dt._howls.indexOf(tt);
          Ot >= 0 && Dt._howls.splice(Ot, 1);
          var qt = !0;
          for (Vt = 0; Vt < Dt._howls.length; Vt++)
            if (Dt._howls[Vt]._src === tt._src || tt._src.indexOf(Dt._howls[Vt]._src) >= 0) {
              qt = !1;
              break
            } return jt && qt && delete jt[tt._src], Dt.noAudio = !1, tt._state = "unloaded", tt._sounds = [], tt = null, null
        },
        on: function(tt, et, Vt, Ot) {
          var qt = this["_on" + tt];
          return "function" === typeof et && qt.push(Ot ? {
            id: Vt,
            pE: et,
            once: Ot
          } : {
            id: Vt,
            pE: et
          }), this
        },
        off: function(tt, et, Vt) {
          var Ot = this,
            qt = Ot["_on" + tt],
            Dt = 0;
          if ("number" === typeof et && (Vt = et, et = null), et || Vt)
            for (Dt = 0; Dt < qt.length; Dt++) {
              var mt = Vt === qt[Dt].id;
              if (et === qt[Dt].pE && mt || !et && mt) {
                qt.splice(Dt, 1);
                break
              }
            } else if (tt) Ot["_on" + tt] = [];
            else {
              var dt = Object.keys(Ot);
              for (Dt = 0; Dt < dt.length; Dt++) 0 === dt[Dt].indexOf("_on") && Array.isArray(Ot[dt[Dt]]) && (Ot[dt[Dt]] = [])
            } return Ot
        },
        once: function(tt, et, Vt) {
          return this.on(tt, et, Vt, 1), this
        },
        _emit: function(tt, et, Vt) {
          for (var Ot = this, qt = Ot["_on" + tt], Dt = qt.length - 1; Dt >= 0; Dt--) qt[Dt].id && qt[Dt].id !== et && "load" !== tt || (setTimeout(function(tt) {
            tt.call(this, et, Vt)
          }.bind(Ot, qt[Dt].pE), 0), qt[Dt].once && Ot.off(tt, qt[Dt].pE, qt[Dt].id));
          return Ot._loadQueue(tt), Ot
        },
        _loadQueue: function(tt) {
          var et = this;
          if (et._queue.length > 0) {
            var Vt = et._queue[0];
            Vt.event === tt && (et._queue.shift(), et._loadQueue()), tt || Vt.action()
          }
          return et
        },
        _ended: function(tt) {
          var et = this,
            Vt = tt._sprite;
          if (!et._webAudio && tt._node && !tt._node.paused && !tt._node.ended && tt._node.currentTime < tt._stop) return setTimeout(et._ended.bind(et, tt), 100), et;
          var Ot = !(!tt._loop && !et._sprite[Vt][2]);
          if (et._emit("end", tt._id), !et._webAudio && Ot && et.stop(tt._id, !0).play(tt._id), et._webAudio && Ot) {
            et._emit("play", tt._id), tt._seek = tt._start || 0, tt._rateSeek = 0, tt._playStart = Dt.ctx.currentTime;
            var qt = 1e3 * (tt._stop - tt._start) / Math.abs(tt._rate);
            et._endTimers[tt._id] = setTimeout(et._ended.bind(et, tt), qt)
          }
          return et._webAudio && !Ot && (tt.NJ = !0, tt._ended = !0, tt._seek = tt._start || 0, tt._rateSeek = 0, et._clearTimer(tt._id), et._cleanBuffer(tt._node), Dt._autoSuspend()), et._webAudio || Ot || et.stop(tt._id, !0), et
        },
        _clearTimer: function(tt) {
          var et = this;
          if (et._endTimers[tt]) {
            if ("function" !== typeof et._endTimers[tt]) clearTimeout(et._endTimers[tt]);
            else {
              var Vt = et._soundById(tt);
              Vt && Vt._node && Vt._node.removeEventListener("ended", et._endTimers[tt], !1)
            }
            delete et._endTimers[tt]
          }
          return et
        },
        _soundById: function(tt) {
          for (var et = this, Vt = 0; Vt < et._sounds.length; Vt++)
            if (tt === et._sounds[Vt]._id) return et._sounds[Vt];
          return null
        },
        _inactiveSound: function() {
          var tt = this;
          tt._drain();
          for (var et = 0; et < tt._sounds.length; et++)
            if (tt._sounds[et]._ended) return tt._sounds[et].reset();
          return new dt(tt)
        },
        _drain: function() {
          var tt = this,
            et = tt._pool,
            Vt = 0,
            Ot = 0;
          if (!(tt._sounds.length < et)) {
            for (Ot = 0; Ot < tt._sounds.length; Ot++) tt._sounds[Ot]._ended && Vt++;
            for (Ot = tt._sounds.length - 1; Ot >= 0; Ot--) {
              if (Vt <= et) return;
              tt._sounds[Ot]._ended && (tt._webAudio && tt._sounds[Ot]._node && tt._sounds[Ot]._node.disconnect(0), tt._sounds.splice(Ot, 1), Vt--)
            }
          }
        },
        _getSoundIds: function(tt) {
          if ("undefined" === typeof tt) {
            for (var et = [], Vt = 0; Vt < this._sounds.length; Vt++) et.push(this._sounds[Vt]._id);
            return et
          }
          return [tt]
        },
        _refreshBuffer: function(tt) {
          return tt._node.bufferSource = Dt.ctx.createBufferSource(), tt._node.bufferSource.buffer = jt[this._src], tt._panner ? tt._node.bufferSource.connect(tt._panner) : tt._node.bufferSource.connect(tt._node), tt._node.bufferSource.loop = tt._loop, tt._loop && (tt._node.bufferSource.loopStart = tt._start || 0, tt._node.bufferSource.loopEnd = tt._stop || 0), tt._node.bufferSource.playbackRate.setValueAtTime(tt._rate, Dt.ctx.currentTime), this
        },
        _cleanBuffer: function(tt) {
          var et = Dt._navigator && Dt._navigator.vendor.indexOf("Apple") >= 0;
          if (Dt._scratchBuffer && tt.bufferSource && (tt.bufferSource.onended = null, tt.bufferSource.disconnect(0), et)) try {
            tt.bufferSource.buffer = Dt._scratchBuffer
          } catch (Vt) {}
          return tt.bufferSource = null, this
        },
        _clearSound: function(tt) {
          /MSIE |Trident\//.test(Dt._navigator && Dt._navigator.userAgent) || (tt.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var dt = function(tt) {
        this._parent = tt, this.init()
      };
      dt.prototype = {
        init: function() {
          var tt = this,
            et = tt._parent;
          return tt._muted = et._muted, tt._loop = et._loop, tt._volume = et._volume, tt._rate = et._rate, tt._seek = 0, tt.NJ = !0, tt._ended = !0, tt._sprite = "__default", tt._id = ++Dt._counter, et._sounds.push(tt), tt.create(), tt
        },
        create: function() {
          var tt = this,
            et = tt._parent,
            Vt = Dt._muted || tt._muted || tt._parent._muted ? 0 : tt._volume;
          return et._webAudio ? (tt._node = "undefined" === typeof Dt.ctx.createGain ? Dt.ctx.createGainNode() : Dt.ctx.createGain(), tt._node.gain.setValueAtTime(Vt, Dt.ctx.currentTime), tt._node.paused = !0, tt._node.connect(Dt.masterGain)) : Dt.noAudio || (tt._node = Dt._obtainHtml5Audio(), tt._errorFn = tt._errorListener.bind(tt), tt._node.addEventListener("error", tt._errorFn, !1), tt._loadFn = tt._loadListener.bind(tt), tt._node.addEventListener(Dt._canPlayEvent, tt._loadFn, !1), tt._endFn = tt._endListener.bind(tt), tt._node.addEventListener("ended", tt._endFn, !1), tt._node.src = et._src, tt._node.preload = !0 === et._preload ? "auto" : et._preload, tt._node.volume = Vt * Dt.volume(), tt._node.load()), tt
        },
        reset: function() {
          var tt = this,
            et = tt._parent;
          return tt._muted = et._muted, tt._loop = et._loop, tt._volume = et._volume, tt._rate = et._rate, tt._seek = 0, tt._rateSeek = 0, tt.NJ = !0, tt._ended = !0, tt._sprite = "__default", tt._id = ++Dt._counter, tt
        },
        _errorListener: function() {
          var tt = this;
          tt._parent._emit("loaderror", tt._id, tt._node.error ? tt._node.error.code : 0), tt._node.removeEventListener("error", tt._errorFn, !1)
        },
        _loadListener: function() {
          var tt = this,
            et = tt._parent;
          et._duration = Math.ceil(10 * tt._node.duration) / 10, 0 === Object.keys(et._sprite).length && (et._sprite = {
            __default: [0, 1e3 * et._duration]
          }), "loaded" !== et._state && (et._state = "loaded", et._emit("load"), et._loadQueue()), tt._node.removeEventListener(Dt._canPlayEvent, tt._loadFn, !1)
        },
        _endListener: function() {
          var tt = this,
            et = tt._parent;
          et._duration === 1 / 0 && (et._duration = Math.ceil(10 * tt._node.duration) / 10, et._sprite.__default[1] === 1 / 0 && (et._sprite.__default[1] = 1e3 * et._duration), et._ended(tt)), tt._node.removeEventListener("ended", tt._endFn, !1)
        }
      };
      var jt = {},
        Ht = function(tt) {
          var et = tt._src;
          if (jt[et]) return tt._duration = jt[et].duration, void lt(tt);
          if (/^data:[^;]+;base64,/.test(et)) {
            for (var Vt = atob(et.split(",")[1]), Ot = new Uint8Array(Vt.length), qt = 0; qt < Vt.length; ++qt) Ot[qt] = Vt.charCodeAt(qt);
            Qt(Ot.buffer, tt)
          } else {
            var Dt = new XMLHttpRequest;
            Dt.open(tt._xhr.method, et, !0), Dt.withCredentials = tt._xhr.withCredentials, Dt.responseType = "arraybuffer", tt._xhr.headers && Object.keys(tt._xhr.headers).forEach((function(et) {
              Dt.setRequestHeader(et, tt._xhr.headers[et])
            })), Dt.onload = function() {
              var et = (Dt.status + "")[0];
              "0" === et || "2" === et || "3" === et ? Qt(Dt.response, tt) : tt._emit("loaderror", null, "Failed loading audio file with status: " + Dt.status + ".")
            }, Dt.onerror = function() {
              tt._webAudio && (tt._html5 = !0, tt._webAudio = !1, tt._sounds = [], delete jt[et], tt.load())
            }, Xt(Dt)
          }
        },
        Xt = function(tt) {
          try {
            tt.send()
          } catch (et) {
            tt.onerror()
          }
        },
        Qt = function(tt, et) {
          var Vt = function() {
              et._emit("loaderror", null, "Decoding audio data failed.")
            },
            Ot = function(tt) {
              tt && et._sounds.length > 0 ? (jt[et._src] = tt, lt(et, tt)) : Vt()
            };
          "undefined" !== typeof Promise && 1 === Dt.ctx.decodeAudioData.length ? Dt.ctx.decodeAudioData(tt).then(Ot).catch(Vt) : Dt.ctx.decodeAudioData(tt, Ot, Vt)
        },
        lt = function(tt, et) {
          et && !tt._duration && (tt._duration = et.duration), 0 === Object.keys(tt._sprite).length && (tt._sprite = {
            __default: [0, 1e3 * tt._duration]
          }), "loaded" !== tt._state && (tt._state = "loaded", tt._emit("load"), tt._loadQueue())
        },
        Et = function() {
          if (Dt.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Dt.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Dt.ctx = new webkitAudioContext : Dt.usingWebAudio = !1
            } catch (qt) {
              Dt.usingWebAudio = !1
            }
            Dt.ctx || (Dt.usingWebAudio = !1);
            var tt = /iP(hone|od|ad)/.test(Dt._navigator && Dt._navigator.platform),
              et = Dt._navigator && Dt._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              Vt = et ? parseInt(et[1], 10) : null;
            if (tt && Vt && Vt < 9) {
              var Ot = /safari/.test(Dt._navigator && Dt._navigator.userAgent.toLowerCase());
              Dt._navigator && !Ot && (Dt.usingWebAudio = !1)
            }
            Dt.usingWebAudio && (Dt.masterGain = "undefined" === typeof Dt.ctx.createGain ? Dt.ctx.createGainNode() : Dt.ctx.createGain(), Dt.masterGain.gain.setValueAtTime(Dt._muted ? 0 : Dt._volume, Dt.ctx.currentTime), Dt.masterGain.connect(Dt.ctx.destination)), Dt._setup()
          }
        };
      void 0 === (Ot = function() {
        return {
          Howler: Dt,
          Howl: mt
        }
      }.apply(et, [])) || (tt.exports = Ot), et.Howler = Dt, et.Howl = mt, "undefined" !== typeof Vt.g ? (Vt.g.HowlerGlobal = qt, Vt.g.Howler = Dt, Vt.g.Howl = mt, Vt.g.Sound = dt) : "undefined" !== typeof window && (window.HowlerGlobal = qt, window.Howler = Dt, window.Howl = mt, window.Sound = dt)
    }(),
    function() {
      var tt;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(tt) {
        var et = this;
        if (!et.ctx || !et.ctx.listener) return et;
        for (var Vt = et._howls.length - 1; Vt >= 0; Vt--) et._howls[Vt].stereo(tt);
        return et
      }, HowlerGlobal.prototype.pos = function(tt, et, Vt) {
        var Ot = this;
        return Ot.ctx && Ot.ctx.listener ? (et = "number" !== typeof et ? Ot._pos[1] : et, Vt = "number" !== typeof Vt ? Ot._pos[2] : Vt, "number" !== typeof tt ? Ot._pos : (Ot._pos = [tt, et, Vt], "undefined" !== typeof Ot.ctx.listener.positionX ? (Ot.ctx.listener.positionX.setTargetAtTime(Ot._pos[0], Howler.ctx.currentTime, .1), Ot.ctx.listener.positionY.setTargetAtTime(Ot._pos[1], Howler.ctx.currentTime, .1), Ot.ctx.listener.positionZ.setTargetAtTime(Ot._pos[2], Howler.ctx.currentTime, .1)) : Ot.ctx.listener.setPosition(Ot._pos[0], Ot._pos[1], Ot._pos[2]), Ot)) : Ot
      }, HowlerGlobal.prototype.orientation = function(tt, et, Vt, Ot, qt, Dt) {
        var mt = this;
        if (!mt.ctx || !mt.ctx.listener) return mt;
        var dt = mt._orientation;
        return et = "number" !== typeof et ? dt[1] : et, Vt = "number" !== typeof Vt ? dt[2] : Vt, Ot = "number" !== typeof Ot ? dt[3] : Ot, qt = "number" !== typeof qt ? dt[4] : qt, Dt = "number" !== typeof Dt ? dt[5] : Dt, "number" !== typeof tt ? dt : (mt._orientation = [tt, et, Vt, Ot, qt, Dt], "undefined" !== typeof mt.ctx.listener.forwardX ? (mt.ctx.listener.forwardX.setTargetAtTime(tt, Howler.ctx.currentTime, .1), mt.ctx.listener.forwardY.setTargetAtTime(et, Howler.ctx.currentTime, .1), mt.ctx.listener.forwardZ.setTargetAtTime(Vt, Howler.ctx.currentTime, .1), mt.ctx.listener.upX.setTargetAtTime(Ot, Howler.ctx.currentTime, .1), mt.ctx.listener.upY.setTargetAtTime(qt, Howler.ctx.currentTime, .1), mt.ctx.listener.upZ.setTargetAtTime(Dt, Howler.ctx.currentTime, .1)) : mt.ctx.listener.setOrientation(tt, et, Vt, Ot, qt, Dt), mt)
      }, Howl.prototype.init = (tt = Howl.prototype.init, function(et) {
        var Vt = this;
        return Vt._orientation = et.orientation || [1, 0, 0], Vt._stereo = et.stereo || null, Vt._pos = et.pos || null, Vt._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof et.coneInnerAngle ? et.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof et.coneOuterAngle ? et.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof et.coneOuterGain ? et.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof et.distanceModel ? et.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof et.maxDistance ? et.maxDistance : 1e4,
          panningModel: "undefined" !== typeof et.panningModel ? et.panningModel : "HRTF",
          refDistance: "undefined" !== typeof et.refDistance ? et.refDistance : 1,
          rolloffFactor: "undefined" !== typeof et.rolloffFactor ? et.rolloffFactor : 1
        }, Vt._onstereo = et.onstereo ? [{
          pE: et.onstereo
        }] : [], Vt._onpos = et.onpos ? [{
          pE: et.onpos
        }] : [], Vt._onorientation = et.onorientation ? [{
          pE: et.onorientation
        }] : [], tt.call(this, et)
      }), Howl.prototype.stereo = function(tt, Vt) {
        var Ot = this;
        if (!Ot._webAudio) return Ot;
        if ("loaded" !== Ot._state) return Ot._queue.push({
          event: "stereo",
          action: function() {
            Ot.stereo(tt, Vt)
          }
        }), Ot;
        var qt = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof Vt) {
          if ("number" !== typeof tt) return Ot._stereo;
          Ot._stereo = tt, Ot._pos = [tt, 0, 0]
        }
        for (var Dt = Ot._getSoundIds(Vt), mt = 0; mt < Dt.length; mt++) {
          var dt = Ot._soundById(Dt[mt]);
          if (dt) {
            if ("number" !== typeof tt) return dt._stereo;
            dt._stereo = tt, dt._pos = [tt, 0, 0], dt._node && (dt._pannerAttr.panningModel = "equalpower", dt._panner && dt._panner.pan || et(dt, qt), "spatial" === qt ? "undefined" !== typeof dt._panner.positionX ? (dt._panner.positionX.setValueAtTime(tt, Howler.ctx.currentTime), dt._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), dt._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : dt._panner.setPosition(tt, 0, 0) : dt._panner.pan.setValueAtTime(tt, Howler.ctx.currentTime)), Ot._emit("stereo", dt._id)
          }
        }
        return Ot
      }, Howl.prototype.pos = function(tt, Vt, Ot, qt) {
        var Dt = this;
        if (!Dt._webAudio) return Dt;
        if ("loaded" !== Dt._state) return Dt._queue.push({
          event: "pos",
          action: function() {
            Dt.pos(tt, Vt, Ot, qt)
          }
        }), Dt;
        if (Vt = "number" !== typeof Vt ? 0 : Vt, Ot = "number" !== typeof Ot ? -.5 : Ot, "undefined" === typeof qt) {
          if ("number" !== typeof tt) return Dt._pos;
          Dt._pos = [tt, Vt, Ot]
        }
        for (var mt = Dt._getSoundIds(qt), dt = 0; dt < mt.length; dt++) {
          var jt = Dt._soundById(mt[dt]);
          if (jt) {
            if ("number" !== typeof tt) return jt._pos;
            jt._pos = [tt, Vt, Ot], jt._node && (jt._panner && !jt._panner.pan || et(jt, "spatial"), "undefined" !== typeof jt._panner.positionX ? (jt._panner.positionX.setValueAtTime(tt, Howler.ctx.currentTime), jt._panner.positionY.setValueAtTime(Vt, Howler.ctx.currentTime), jt._panner.positionZ.setValueAtTime(Ot, Howler.ctx.currentTime)) : jt._panner.setPosition(tt, Vt, Ot)), Dt._emit("pos", jt._id)
          }
        }
        return Dt
      }, Howl.prototype.orientation = function(tt, Vt, Ot, qt) {
        var Dt = this;
        if (!Dt._webAudio) return Dt;
        if ("loaded" !== Dt._state) return Dt._queue.push({
          event: "orientation",
          action: function() {
            Dt.orientation(tt, Vt, Ot, qt)
          }
        }), Dt;
        if (Vt = "number" !== typeof Vt ? Dt._orientation[1] : Vt, Ot = "number" !== typeof Ot ? Dt._orientation[2] : Ot, "undefined" === typeof qt) {
          if ("number" !== typeof tt) return Dt._orientation;
          Dt._orientation = [tt, Vt, Ot]
        }
        for (var mt = Dt._getSoundIds(qt), dt = 0; dt < mt.length; dt++) {
          var jt = Dt._soundById(mt[dt]);
          if (jt) {
            if ("number" !== typeof tt) return jt._orientation;
            jt._orientation = [tt, Vt, Ot], jt._node && (jt._panner || (jt._pos || (jt._pos = Dt._pos || [0, 0, -.5]), et(jt, "spatial")), "undefined" !== typeof jt._panner.orientationX ? (jt._panner.orientationX.setValueAtTime(tt, Howler.ctx.currentTime), jt._panner.orientationY.setValueAtTime(Vt, Howler.ctx.currentTime), jt._panner.orientationZ.setValueAtTime(Ot, Howler.ctx.currentTime)) : jt._panner.setOrientation(tt, Vt, Ot)), Dt._emit("orientation", jt._id)
          }
        }
        return Dt
      }, Howl.prototype.pannerAttr = function() {
        var tt, Vt, Ot, qt = this,
          Dt = arguments;
        if (!qt._webAudio) return qt;
        if (0 === Dt.length) return qt._pannerAttr;
        if (1 === Dt.length) {
          if ("object" !== typeof Dt[0]) return (Ot = qt._soundById(parseInt(Dt[0], 10))) ? Ot._pannerAttr : qt._pannerAttr;
          tt = Dt[0], "undefined" === typeof Vt && (tt.pannerAttr || (tt.pannerAttr = {
            coneInnerAngle: tt.coneInnerAngle,
            coneOuterAngle: tt.coneOuterAngle,
            coneOuterGain: tt.coneOuterGain,
            distanceModel: tt.distanceModel,
            maxDistance: tt.maxDistance,
            refDistance: tt.refDistance,
            rolloffFactor: tt.rolloffFactor,
            panningModel: tt.panningModel
          }), qt._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof tt.pannerAttr.coneInnerAngle ? tt.pannerAttr.coneInnerAngle : qt._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof tt.pannerAttr.coneOuterAngle ? tt.pannerAttr.coneOuterAngle : qt._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof tt.pannerAttr.coneOuterGain ? tt.pannerAttr.coneOuterGain : qt._coneOuterGain,
            distanceModel: "undefined" !== typeof tt.pannerAttr.distanceModel ? tt.pannerAttr.distanceModel : qt._distanceModel,
            maxDistance: "undefined" !== typeof tt.pannerAttr.maxDistance ? tt.pannerAttr.maxDistance : qt._maxDistance,
            refDistance: "undefined" !== typeof tt.pannerAttr.refDistance ? tt.pannerAttr.refDistance : qt._refDistance,
            rolloffFactor: "undefined" !== typeof tt.pannerAttr.rolloffFactor ? tt.pannerAttr.rolloffFactor : qt._rolloffFactor,
            panningModel: "undefined" !== typeof tt.pannerAttr.panningModel ? tt.pannerAttr.panningModel : qt._panningModel
          })
        } else 2 === Dt.length && (tt = Dt[0], Vt = parseInt(Dt[1], 10));
        for (var mt = qt._getSoundIds(Vt), dt = 0; dt < mt.length; dt++)
          if (Ot = qt._soundById(mt[dt])) {
            var jt = Ot._pannerAttr;
            jt = {
              coneInnerAngle: "undefined" !== typeof tt.coneInnerAngle ? tt.coneInnerAngle : jt.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof tt.coneOuterAngle ? tt.coneOuterAngle : jt.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof tt.coneOuterGain ? tt.coneOuterGain : jt.coneOuterGain,
              distanceModel: "undefined" !== typeof tt.distanceModel ? tt.distanceModel : jt.distanceModel,
              maxDistance: "undefined" !== typeof tt.maxDistance ? tt.maxDistance : jt.maxDistance,
              refDistance: "undefined" !== typeof tt.refDistance ? tt.refDistance : jt.refDistance,
              rolloffFactor: "undefined" !== typeof tt.rolloffFactor ? tt.rolloffFactor : jt.rolloffFactor,
              panningModel: "undefined" !== typeof tt.panningModel ? tt.panningModel : jt.panningModel
            };
            var Ht = Ot._panner;
            Ht ? (Ht.coneInnerAngle = jt.coneInnerAngle, Ht.coneOuterAngle = jt.coneOuterAngle, Ht.coneOuterGain = jt.coneOuterGain, Ht.distanceModel = jt.distanceModel, Ht.maxDistance = jt.maxDistance, Ht.refDistance = jt.refDistance, Ht.rolloffFactor = jt.rolloffFactor, Ht.panningModel = jt.panningModel) : (Ot._pos || (Ot._pos = qt._pos || [0, 0, -.5]), et(Ot, "spatial"))
          } return qt
      }, Sound.prototype.init = function(tt) {
        return function() {
          var et = this,
            Vt = et._parent;
          et._orientation = Vt._orientation, et._stereo = Vt._stereo, et._pos = Vt._pos, et._pannerAttr = Vt._pannerAttr, tt.call(this), et._stereo ? Vt.stereo(et._stereo) : et._pos && Vt.pos(et._pos[0], et._pos[1], et._pos[2], et._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(tt) {
        return function() {
          var et = this,
            Vt = et._parent;
          return et._orientation = Vt._orientation, et._stereo = Vt._stereo, et._pos = Vt._pos, et._pannerAttr = Vt._pannerAttr, et._stereo ? Vt.stereo(et._stereo) : et._pos ? Vt.pos(et._pos[0], et._pos[1], et._pos[2], et._id) : et._panner && (et._panner.disconnect(0), et._panner = void 0, Vt._refreshBuffer(et)), tt.call(this)
        }
      }(Sound.prototype.reset);
      var et = function(tt, et) {
        "spatial" === (et = et || "spatial") ? (tt._panner = Howler.ctx.createPanner(), tt._panner.coneInnerAngle = tt._pannerAttr.coneInnerAngle, tt._panner.coneOuterAngle = tt._pannerAttr.coneOuterAngle, tt._panner.coneOuterGain = tt._pannerAttr.coneOuterGain, tt._panner.distanceModel = tt._pannerAttr.distanceModel, tt._panner.maxDistance = tt._pannerAttr.maxDistance, tt._panner.refDistance = tt._pannerAttr.refDistance, tt._panner.rolloffFactor = tt._pannerAttr.rolloffFactor, tt._panner.panningModel = tt._pannerAttr.panningModel, "undefined" !== typeof tt._panner.positionX ? (tt._panner.positionX.setValueAtTime(tt._pos[0], Howler.ctx.currentTime), tt._panner.positionY.setValueAtTime(tt._pos[1], Howler.ctx.currentTime), tt._panner.positionZ.setValueAtTime(tt._pos[2], Howler.ctx.currentTime)) : tt._panner.setPosition(tt._pos[0], tt._pos[1], tt._pos[2]), "undefined" !== typeof tt._panner.orientationX ? (tt._panner.orientationX.setValueAtTime(tt._orientation[0], Howler.ctx.currentTime), tt._panner.orientationY.setValueAtTime(tt._orientation[1], Howler.ctx.currentTime), tt._panner.orientationZ.setValueAtTime(tt._orientation[2], Howler.ctx.currentTime)) : tt._panner.setOrientation(tt._orientation[0], tt._orientation[1], tt._orientation[2])) : (tt._panner = Howler.ctx.createStereoPanner(), tt._panner.pan.setValueAtTime(tt._stereo, Howler.ctx.currentTime)), tt._panner.connect(tt._node), tt.NJ || tt._parent.pause(tt._id, !0).play(tt._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);