/*! For license information please see mpd96o.96.bb5952ae.chunk.js.LICENSE.txt */
export const id = 96;
export const ids = [96];
export const modules = {
  4806: (mm, Tm, fm) => {
    var hm;
    ! function() {
      var Am = function() {
        this.init()
      };
      Am.prototype = {
        init: function() {
          var mm = this || am;
          return mm._counter = 1e3, mm._html5AudioPool = [], mm.html5PoolSize = 10, mm._codecs = {}, mm._howls = [], mm._muted = !1, mm._volume = 1, mm._canPlayEvent = "canplaythrough", mm._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, mm.masterGain = null, mm.noAudio = !1, mm.usingWebAudio = !0, mm.autoSuspend = !0, mm.ctx = null, mm.autoUnlock = !0, mm._setup(), mm
        },
        volume: function(mm) {
          var Tm = this || am;
          if (mm = parseFloat(mm), Tm.ctx || om(), "undefined" !== typeof mm && mm >= 0 && mm <= 1) {
            if (Tm._volume = mm, Tm._muted) return Tm;
            Tm.usingWebAudio && Tm.masterGain.gain.setValueAtTime(mm, am.ctx.currentTime);
            for (var fm = 0; fm < Tm._howls.length; fm++)
              if (!Tm._howls[fm]._webAudio)
                for (var hm = Tm._howls[fm]._getSoundIds(), Am = 0; Am < hm.length; Am++) {
                  var xm = Tm._howls[fm]._soundById(hm[Am]);
                  xm && xm._node && (xm._node.volume = xm._volume * mm)
                }
            return Tm
          }
          return Tm._volume
        },
        mute: function(mm) {
          var Tm = this || am;
          Tm.ctx || om(), Tm._muted = mm, Tm.usingWebAudio && Tm.masterGain.gain.setValueAtTime(mm ? 0 : Tm._volume, am.ctx.currentTime);
          for (var fm = 0; fm < Tm._howls.length; fm++)
            if (!Tm._howls[fm]._webAudio)
              for (var hm = Tm._howls[fm]._getSoundIds(), Am = 0; Am < hm.length; Am++) {
                var xm = Tm._howls[fm]._soundById(hm[Am]);
                xm && xm._node && (xm._node.muted = !!mm || xm._muted)
              }
          return Tm
        },
        stop: function() {
          for (var mm = this || am, Tm = 0; Tm < mm._howls.length; Tm++) mm._howls[Tm].stop();
          return mm
        },
        unload: function() {
          for (var mm = this || am, Tm = mm._howls.length - 1; Tm >= 0; Tm--) mm._howls[Tm].unload();
          return mm.usingWebAudio && mm.ctx && "undefined" !== typeof mm.ctx.close && (mm.ctx.close(), mm.ctx = null, om()), mm
        },
        codecs: function(mm) {
          return (this || am)._codecs[mm.replace(/^x-/, "")]
        },
        _setup: function() {
          var mm = this || am;
          if (mm.state = mm.ctx && mm.ctx.state || "suspended", mm._autoSuspend(), !mm.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (mm._canPlayEvent = "canplay")
            } catch (Tm) {
              mm.noAudio = !0
            } else mm.noAudio = !0;
          try {
            (new Audio).muted && (mm.noAudio = !0)
          } catch (Tm) {}
          return mm.noAudio || mm._setupCodecs(), mm
        },
        _setupCodecs: function() {
          var mm = this || am,
            Tm = null;
          try {
            Tm = "undefined" !== typeof Audio ? new Audio : null
          } catch (Rm) {
            return mm
          }
          if (!Tm || "function" !== typeof Tm.canPlayType) return mm;
          var fm = Tm.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            hm = mm._navigator ? mm._navigator.userAgent : "",
            Am = hm.match(/OPR\/([0-6].)/g),
            xm = Am && parseInt(Am[0].split("/")[1], 10) < 33,
            wm = -1 !== hm.indexOf("Safari") && -1 === hm.indexOf("Chrome"),
            Dm = hm.match(/Version\/(.*?) /),
            im = wm && Dm && parseInt(Dm[1], 10) < 15;
          return mm._codecs = {
            mp3: !(xm || !fm && !Tm.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!fm,
            opus: !!Tm.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Tm.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Tm.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Tm.canPlayType('audio/wav; codecs="1"') || Tm.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Tm.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Tm.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Tm.canPlayType("audio/x-m4a;") || Tm.canPlayType("audio/m4a;") || Tm.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Tm.canPlayType("audio/x-m4b;") || Tm.canPlayType("audio/m4b;") || Tm.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Tm.canPlayType("audio/x-mp4;") || Tm.canPlayType("audio/mp4;") || Tm.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(im || !Tm.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(im || !Tm.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Tm.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Tm.canPlayType("audio/x-flac;") || Tm.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, mm
        },
        _unlockAudio: function() {
          var mm = this || am;
          if (!mm._audioUnlocked && mm.ctx) {
            mm._audioUnlocked = !1, mm.autoUnlock = !1, mm._mobileUnloaded || 44100 === mm.ctx.sampleRate || (mm._mobileUnloaded = !0, mm.unload()), mm._scratchBuffer = mm.ctx.createBuffer(1, 1, 22050);
            var Tm = function(fm) {
              for (; mm._html5AudioPool.length < mm.html5PoolSize;) try {
                var hm = new Audio;
                hm._unlocked = !0, mm._releaseHtml5Audio(hm)
              } catch (fm) {
                mm.noAudio = !0;
                break
              }
              for (var Am = 0; Am < mm._howls.length; Am++)
                if (!mm._howls[Am]._webAudio)
                  for (var am = mm._howls[Am]._getSoundIds(), xm = 0; xm < am.length; xm++) {
                    var wm = mm._howls[Am]._soundById(am[xm]);
                    wm && wm._node && !wm._node._unlocked && (wm._node._unlocked = !0, wm._node.load())
                  }
              mm._autoResume();
              var Dm = mm.ctx.createBufferSource();
              Dm.buffer = mm._scratchBuffer, Dm.connect(mm.ctx.destination), "undefined" === typeof Dm.start ? Dm.noteOn(0) : Dm.start(0), "function" === typeof mm.ctx.resume && mm.ctx.resume(), Dm.onended = function() {
                Dm.disconnect(0), mm._audioUnlocked = !0, document.removeEventListener("touchstart", Tm, !0), document.removeEventListener("touchend", Tm, !0), document.removeEventListener("click", Tm, !0), document.removeEventListener("keydown", Tm, !0);
                for (var fm = 0; fm < mm._howls.length; fm++) mm._howls[fm]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Tm, !0), document.addEventListener("touchend", Tm, !0), document.addEventListener("click", Tm, !0), document.addEventListener("keydown", Tm, !0), mm
          }
        },
        _obtainHtml5Audio: function() {
          var mm = this || am;
          if (mm._html5AudioPool.length) return mm._html5AudioPool.pop();
          var Tm = (new Audio).play();
          return Tm && "undefined" !== typeof Promise && (Tm instanceof Promise || "function" === typeof Tm.then) && Tm.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(mm) {
          var Tm = this || am;
          return mm._unlocked && Tm._html5AudioPool.push(mm), Tm
        },
        _autoSuspend: function() {
          var mm = this;
          if (mm.autoSuspend && mm.ctx && "undefined" !== typeof mm.ctx.suspend && am.usingWebAudio) {
            for (var Tm = 0; Tm < mm._howls.length; Tm++)
              if (mm._howls[Tm]._webAudio)
                for (var fm = 0; fm < mm._howls[Tm]._sounds.length; fm++)
                  if (!mm._howls[Tm]._sounds[fm].yI) return mm;
            return mm._suspendTimer && clearTimeout(mm._suspendTimer), mm._suspendTimer = setTimeout((function() {
              if (mm.autoSuspend) {
                mm._suspendTimer = null, mm.state = "suspending";
                var Tm = function() {
                  mm.state = "suspended", mm._resumeAfterSuspend && (delete mm._resumeAfterSuspend, mm._autoResume())
                };
                mm.ctx.suspend().then(Tm, Tm)
              }
            }), 3e4), mm
          }
        },
        _autoResume: function() {
          var mm = this;
          if (mm.ctx && "undefined" !== typeof mm.ctx.resume && am.usingWebAudio) return "running" === mm.state && "interrupted" !== mm.ctx.state && mm._suspendTimer ? (clearTimeout(mm._suspendTimer), mm._suspendTimer = null) : "suspended" === mm.state || "running" === mm.state && "interrupted" === mm.ctx.state ? (mm.ctx.resume().then((function() {
            mm.state = "running";
            for (var Tm = 0; Tm < mm._howls.length; Tm++) mm._howls[Tm]._emit("resume")
          })), mm._suspendTimer && (clearTimeout(mm._suspendTimer), mm._suspendTimer = null)) : "suspending" === mm.state && (mm._resumeAfterSuspend = !0), mm
        }
      };
      var am = new Am,
        xm = function(mm) {
          mm.src && 0 !== mm.src.length ? this.init(mm) : console.error("An array of source files must be passed with any new Howl.")
        };
      xm.prototype = {
        init: function(mm) {
          var Tm = this;
          return am.ctx || om(), Tm._autoplay = mm.autoplay || !1, Tm._format = "string" !== typeof mm.format ? mm.format : [mm.format], Tm._html5 = mm.html5 || !1, Tm._muted = mm.mute || !1, Tm._loop = mm.loop || !1, Tm._pool = mm.pool || 5, Tm._preload = "boolean" !== typeof mm.preload && "metadata" !== mm.preload || mm.preload, Tm._rate = mm.rate || 1, Tm._sprite = mm.sprite || {}, Tm._src = "string" !== typeof mm.src ? mm.src : [mm.src], Tm._volume = void 0 !== mm.volume ? mm.volume : 1, Tm._xhr = {
            method: mm.xhr && mm.xhr.method ? mm.xhr.method : "GET",
            headers: mm.xhr && mm.xhr.headers ? mm.xhr.headers : null,
            withCredentials: !(!mm.xhr || !mm.xhr.withCredentials) && mm.xhr.withCredentials
          }, Tm._duration = 0, Tm._state = "unloaded", Tm._sounds = [], Tm._endTimers = {}, Tm._queue = [], Tm._playLock = !1, Tm._onend = mm.onend ? [{
            nO: mm.onend
          }] : [], Tm._onfade = mm.onfade ? [{
            nO: mm.onfade
          }] : [], Tm._onload = mm.onload ? [{
            nO: mm.onload
          }] : [], Tm._onloaderror = mm.onloaderror ? [{
            nO: mm.onloaderror
          }] : [], Tm._onplayerror = mm.onplayerror ? [{
            nO: mm.onplayerror
          }] : [], Tm._onpause = mm.onpause ? [{
            nO: mm.onpause
          }] : [], Tm._onplay = mm.onplay ? [{
            nO: mm.onplay
          }] : [], Tm._onstop = mm.onstop ? [{
            nO: mm.onstop
          }] : [], Tm._onmute = mm.onmute ? [{
            nO: mm.onmute
          }] : [], Tm._onvolume = mm.onvolume ? [{
            nO: mm.onvolume
          }] : [], Tm._onrate = mm.onrate ? [{
            nO: mm.onrate
          }] : [], Tm._onseek = mm.onseek ? [{
            nO: mm.onseek
          }] : [], Tm._onunlock = mm.onunlock ? [{
            nO: mm.onunlock
          }] : [], Tm._onresume = [], Tm._webAudio = am.usingWebAudio && !Tm._html5, "undefined" !== typeof am.ctx && am.ctx && am.autoUnlock && am._unlockAudio(), am._howls.push(Tm), Tm._autoplay && Tm._queue.push({
            event: "play",
            action: function() {
              Tm.play()
            }
          }), Tm._preload && "none" !== Tm._preload && Tm.load(), Tm
        },
        load: function() {
          var mm = this,
            Tm = null;
          if (am.noAudio) mm._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof mm._src && (mm._src = [mm._src]);
            for (var fm = 0; fm < mm._src.length; fm++) {
              var hm, Am;
              if (mm._format && mm._format[fm]) hm = mm._format[fm];
              else {
                if ("string" !== typeof(Am = mm._src[fm])) {
                  mm._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(hm = /^data:audio\/([^;,]+);/i.exec(Am)) || (hm = /\.([^.]+)$/.exec(Am.split("?", 1)[0])), hm && (hm = hm[1].toLowerCase())
              }
              if (hm || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), hm && am.codecs(hm)) {
                Tm = mm._src[fm];
                break
              }
            }
            if (Tm) return mm._src = Tm, mm._state = "loading", "https:" === window.location.protocol && "http:" === Tm.slice(0, 5) && (mm._html5 = !0, mm._webAudio = !1), new wm(mm), mm._webAudio && im(mm), mm;
            mm._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(mm, Tm) {
          var fm = this,
            hm = null;
          if ("number" === typeof mm) hm = mm, mm = null;
          else {
            if ("string" === typeof mm && "loaded" === fm._state && !fm._sprite[mm]) return null;
            if ("undefined" === typeof mm && (mm = "__default", !fm._playLock)) {
              for (var Am = 0, xm = 0; xm < fm._sounds.length; xm++) fm._sounds[xm].yI && !fm._sounds[xm]._ended && (Am++, hm = fm._sounds[xm]._id);
              1 === Am ? mm = null : hm = null
            }
          }
          var wm = hm ? fm._soundById(hm) : fm._inactiveSound();
          if (!wm) return null;
          if (hm && !mm && (mm = wm._sprite || "__default"), "loaded" !== fm._state) {
            wm._sprite = mm, wm._ended = !1;
            var Dm = wm._id;
            return fm._queue.push({
              event: "play",
              action: function() {
                fm.play(Dm)
              }
            }), Dm
          }
          if (hm && !wm.yI) return Tm || fm._loadQueue("play"), wm._id;
          fm._webAudio && am._autoResume();
          var im = Math.max(0, wm._seek > 0 ? wm._seek : fm._sprite[mm][0] / 1e3),
            Rm = Math.max(0, (fm._sprite[mm][0] + fm._sprite[mm][1]) / 1e3 - im),
            pm = 1e3 * Rm / Math.abs(wm._rate),
            Em = fm._sprite[mm][0] / 1e3,
            om = (fm._sprite[mm][0] + fm._sprite[mm][1]) / 1e3;
          wm._sprite = mm, wm._ended = !1;
          var Om = function() {
            wm.yI = !1, wm._seek = im, wm._start = Em, wm._stop = om, wm._loop = !(!wm._loop && !fm._sprite[mm][2])
          };
          if (!(im >= om)) {
            var Ym = wm._node;
            if (fm._webAudio) {
              var qm = function() {
                fm._playLock = !1, Om(), fm._refreshBuffer(wm);
                var mm = wm._muted || fm._muted ? 0 : wm._volume;
                Ym.gain.setValueAtTime(mm, am.ctx.currentTime), wm._playStart = am.ctx.currentTime, "undefined" === typeof Ym.bufferSource.start ? wm._loop ? Ym.bufferSource.noteGrainOn(0, im, 86400) : Ym.bufferSource.noteGrainOn(0, im, Rm) : wm._loop ? Ym.bufferSource.start(0, im, 86400) : Ym.bufferSource.start(0, im, Rm), pm !== 1 / 0 && (fm._endTimers[wm._id] = setTimeout(fm._ended.bind(fm, wm), pm)), Tm || setTimeout((function() {
                  fm._emit("play", wm._id), fm._loadQueue()
                }), 0)
              };
              "running" === am.state && "interrupted" !== am.ctx.state ? qm() : (fm._playLock = !0, fm.once("resume", qm), fm._clearTimer(wm._id))
            } else {
              var jm = function() {
                Ym.currentTime = im, Ym.muted = wm._muted || fm._muted || am._muted || Ym.muted, Ym.volume = wm._volume * am.volume(), Ym.playbackRate = wm._rate;
                try {
                  var hm = Ym.play();
                  if (hm && "undefined" !== typeof Promise && (hm instanceof Promise || "function" === typeof hm.then) ? (fm._playLock = !0, Om(), hm.then((function() {
                      fm._playLock = !1, Ym._unlocked = !0, Tm ? fm._loadQueue() : fm._emit("play", wm._id)
                    })).catch((function() {
                      fm._playLock = !1, fm._emit("playerror", wm._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), wm._ended = !0, wm.yI = !0
                    }))) : Tm || (fm._playLock = !1, Om(), fm._emit("play", wm._id)), Ym.playbackRate = wm._rate, Ym.paused) return void fm._emit("playerror", wm._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== mm || wm._loop ? fm._endTimers[wm._id] = setTimeout(fm._ended.bind(fm, wm), pm) : (fm._endTimers[wm._id] = function() {
                    fm._ended(wm), Ym.removeEventListener("ended", fm._endTimers[wm._id], !1)
                  }, Ym.addEventListener("ended", fm._endTimers[wm._id], !1))
                } catch (Am) {
                  fm._emit("playerror", wm._id, Am)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Ym.src && (Ym.src = fm._src, Ym.load());
              var Vm = window && window.ejecta || !Ym.readyState && am._navigator.isCocoonJS;
              if (Ym.readyState >= 3 || Vm) jm();
              else {
                fm._playLock = !0, fm._state = "loading";
                var Im = function() {
                  fm._state = "loaded", jm(), Ym.removeEventListener(am._canPlayEvent, Im, !1)
                };
                Ym.addEventListener(am._canPlayEvent, Im, !1), fm._clearTimer(wm._id)
              }
            }
            return wm._id
          }
          fm._ended(wm)
        },
        pause: function(mm) {
          var Tm = this;
          if ("loaded" !== Tm._state || Tm._playLock) return Tm._queue.push({
            event: "pause",
            action: function() {
              Tm.pause(mm)
            }
          }), Tm;
          for (var fm = Tm._getSoundIds(mm), hm = 0; hm < fm.length; hm++) {
            Tm._clearTimer(fm[hm]);
            var Am = Tm._soundById(fm[hm]);
            if (Am && !Am.yI && (Am._seek = Tm.seek(fm[hm]), Am._rateSeek = 0, Am.yI = !0, Tm._stopFade(fm[hm]), Am._node))
              if (Tm._webAudio) {
                if (!Am._node.bufferSource) continue;
                "undefined" === typeof Am._node.bufferSource.stop ? Am._node.bufferSource.noteOff(0) : Am._node.bufferSource.stop(0), Tm._cleanBuffer(Am._node)
              } else isNaN(Am._node.duration) && Am._node.duration !== 1 / 0 || Am._node.pause();
            arguments[1] || Tm._emit("pause", Am ? Am._id : null)
          }
          return Tm
        },
        stop: function(mm, Tm) {
          var fm = this;
          if ("loaded" !== fm._state || fm._playLock) return fm._queue.push({
            event: "stop",
            action: function() {
              fm.stop(mm)
            }
          }), fm;
          for (var hm = fm._getSoundIds(mm), Am = 0; Am < hm.length; Am++) {
            fm._clearTimer(hm[Am]);
            var am = fm._soundById(hm[Am]);
            am && (am._seek = am._start || 0, am._rateSeek = 0, am.yI = !0, am._ended = !0, fm._stopFade(hm[Am]), am._node && (fm._webAudio ? am._node.bufferSource && ("undefined" === typeof am._node.bufferSource.stop ? am._node.bufferSource.noteOff(0) : am._node.bufferSource.stop(0), fm._cleanBuffer(am._node)) : isNaN(am._node.duration) && am._node.duration !== 1 / 0 || (am._node.currentTime = am._start || 0, am._node.pause(), am._node.duration === 1 / 0 && fm._clearSound(am._node))), Tm || fm._emit("stop", am._id))
          }
          return fm
        },
        mute: function(mm, Tm) {
          var fm = this;
          if ("loaded" !== fm._state || fm._playLock) return fm._queue.push({
            event: "mute",
            action: function() {
              fm.mute(mm, Tm)
            }
          }), fm;
          if ("undefined" === typeof Tm) {
            if ("boolean" !== typeof mm) return fm._muted;
            fm._muted = mm
          }
          for (var hm = fm._getSoundIds(Tm), Am = 0; Am < hm.length; Am++) {
            var xm = fm._soundById(hm[Am]);
            xm && (xm._muted = mm, xm._interval && fm._stopFade(xm._id), fm._webAudio && xm._node ? xm._node.gain.setValueAtTime(mm ? 0 : xm._volume, am.ctx.currentTime) : xm._node && (xm._node.muted = !!am._muted || mm), fm._emit("mute", xm._id))
          }
          return fm
        },
        volume: function() {
          var mm, Tm, fm, hm = this,
            Am = arguments;
          if (0 === Am.length) return hm._volume;
          if (1 === Am.length || 2 === Am.length && "undefined" === typeof Am[1] ? hm._getSoundIds().indexOf(Am[0]) >= 0 ? Tm = parseInt(Am[0], 10) : mm = parseFloat(Am[0]) : Am.length >= 2 && (mm = parseFloat(Am[0]), Tm = parseInt(Am[1], 10)), !("undefined" !== typeof mm && mm >= 0 && mm <= 1)) return (fm = Tm ? hm._soundById(Tm) : hm._sounds[0]) ? fm._volume : 0;
          if ("loaded" !== hm._state || hm._playLock) return hm._queue.push({
            event: "volume",
            action: function() {
              hm.volume.apply(hm, Am)
            }
          }), hm;
          "undefined" === typeof Tm && (hm._volume = mm), Tm = hm._getSoundIds(Tm);
          for (var xm = 0; xm < Tm.length; xm++)(fm = hm._soundById(Tm[xm])) && (fm._volume = mm, Am[2] || hm._stopFade(Tm[xm]), hm._webAudio && fm._node && !fm._muted ? fm._node.gain.setValueAtTime(mm, am.ctx.currentTime) : fm._node && !fm._muted && (fm._node.volume = mm * am.volume()), hm._emit("volume", fm._id));
          return hm
        },
        fade: function(mm, Tm, fm, hm) {
          var Am = this;
          if ("loaded" !== Am._state || Am._playLock) return Am._queue.push({
            event: "fade",
            action: function() {
              Am.fade(mm, Tm, fm, hm)
            }
          }), Am;
          mm = Math.min(Math.max(0, parseFloat(mm)), 1), Tm = Math.min(Math.max(0, parseFloat(Tm)), 1), fm = parseFloat(fm), Am.volume(mm, hm);
          for (var xm = Am._getSoundIds(hm), wm = 0; wm < xm.length; wm++) {
            var Dm = Am._soundById(xm[wm]);
            if (Dm) {
              if (hm || Am._stopFade(xm[wm]), Am._webAudio && !Dm._muted) {
                var im = am.ctx.currentTime,
                  Rm = im + fm / 1e3;
                Dm._volume = mm, Dm._node.gain.setValueAtTime(mm, im), Dm._node.gain.linearRampToValueAtTime(Tm, Rm)
              }
              Am._startFadeInterval(Dm, mm, Tm, fm, xm[wm], "undefined" === typeof hm)
            }
          }
          return Am
        },
        _startFadeInterval: function(mm, Tm, fm, hm, Am, am) {
          var xm = this,
            wm = Tm,
            Dm = fm - Tm,
            im = Math.abs(Dm / .01),
            Rm = Math.max(4, im > 0 ? hm / im : hm),
            pm = Date.now();
          mm._fadeTo = fm, mm._interval = setInterval((function() {
            var Am = (Date.now() - pm) / hm;
            pm = Date.now(), wm += Dm * Am, wm = Math.round(100 * wm) / 100, wm = Dm < 0 ? Math.max(fm, wm) : Math.min(fm, wm), xm._webAudio ? mm._volume = wm : xm.volume(wm, mm._id, !0), am && (xm._volume = wm), (fm < Tm && wm <= fm || fm > Tm && wm >= fm) && (clearInterval(mm._interval), mm._interval = null, mm._fadeTo = null, xm.volume(fm, mm._id), xm._emit("fade", mm._id))
          }), Rm)
        },
        _stopFade: function(mm) {
          var Tm = this,
            fm = Tm._soundById(mm);
          return fm && fm._interval && (Tm._webAudio && fm._node.gain.cancelScheduledValues(am.ctx.currentTime), clearInterval(fm._interval), fm._interval = null, Tm.volume(fm._fadeTo, mm), fm._fadeTo = null, Tm._emit("fade", mm)), Tm
        },
        loop: function() {
          var mm, Tm, fm, hm = this,
            Am = arguments;
          if (0 === Am.length) return hm._loop;
          if (1 === Am.length) {
            if ("boolean" !== typeof Am[0]) return !!(fm = hm._soundById(parseInt(Am[0], 10))) && fm._loop;
            mm = Am[0], hm._loop = mm
          } else 2 === Am.length && (mm = Am[0], Tm = parseInt(Am[1], 10));
          for (var am = hm._getSoundIds(Tm), xm = 0; xm < am.length; xm++)(fm = hm._soundById(am[xm])) && (fm._loop = mm, hm._webAudio && fm._node && fm._node.bufferSource && (fm._node.bufferSource.loop = mm, mm && (fm._node.bufferSource.loopStart = fm._start || 0, fm._node.bufferSource.loopEnd = fm._stop, hm.playing(am[xm]) && (hm.pause(am[xm], !0), hm.play(am[xm], !0)))));
          return hm
        },
        rate: function() {
          var mm, Tm, fm, hm = this,
            Am = arguments;
          if (0 === Am.length) Tm = hm._sounds[0]._id;
          else if (1 === Am.length) {
            hm._getSoundIds().indexOf(Am[0]) >= 0 ? Tm = parseInt(Am[0], 10) : mm = parseFloat(Am[0])
          } else 2 === Am.length && (mm = parseFloat(Am[0]), Tm = parseInt(Am[1], 10));
          if ("number" !== typeof mm) return (fm = hm._soundById(Tm)) ? fm._rate : hm._rate;
          if ("loaded" !== hm._state || hm._playLock) return hm._queue.push({
            event: "rate",
            action: function() {
              hm.rate.apply(hm, Am)
            }
          }), hm;
          "undefined" === typeof Tm && (hm._rate = mm), Tm = hm._getSoundIds(Tm);
          for (var xm = 0; xm < Tm.length; xm++)
            if (fm = hm._soundById(Tm[xm])) {
              hm.playing(Tm[xm]) && (fm._rateSeek = hm.seek(Tm[xm]), fm._playStart = hm._webAudio ? am.ctx.currentTime : fm._playStart), fm._rate = mm, hm._webAudio && fm._node && fm._node.bufferSource ? fm._node.bufferSource.playbackRate.setValueAtTime(mm, am.ctx.currentTime) : fm._node && (fm._node.playbackRate = mm);
              var wm = hm.seek(Tm[xm]),
                Dm = 1e3 * ((hm._sprite[fm._sprite][0] + hm._sprite[fm._sprite][1]) / 1e3 - wm) / Math.abs(fm._rate);
              !hm._endTimers[Tm[xm]] && fm.yI || (hm._clearTimer(Tm[xm]), hm._endTimers[Tm[xm]] = setTimeout(hm._ended.bind(hm, fm), Dm)), hm._emit("rate", fm._id)
            } return hm
        },
        seek: function() {
          var mm, Tm, fm = this,
            hm = arguments;
          if (0 === hm.length) fm._sounds.length && (Tm = fm._sounds[0]._id);
          else if (1 === hm.length) {
            fm._getSoundIds().indexOf(hm[0]) >= 0 ? Tm = parseInt(hm[0], 10) : fm._sounds.length && (Tm = fm._sounds[0]._id, mm = parseFloat(hm[0]))
          } else 2 === hm.length && (mm = parseFloat(hm[0]), Tm = parseInt(hm[1], 10));
          if ("undefined" === typeof Tm) return 0;
          if ("number" === typeof mm && ("loaded" !== fm._state || fm._playLock)) return fm._queue.push({
            event: "seek",
            action: function() {
              fm.seek.apply(fm, hm)
            }
          }), fm;
          var Am = fm._soundById(Tm);
          if (Am) {
            if (!("number" === typeof mm && mm >= 0)) {
              if (fm._webAudio) {
                var xm = fm.playing(Tm) ? am.ctx.currentTime - Am._playStart : 0,
                  wm = Am._rateSeek ? Am._rateSeek - Am._seek : 0;
                return Am._seek + (wm + xm * Math.abs(Am._rate))
              }
              return Am._node.currentTime
            }
            var Dm = fm.playing(Tm);
            Dm && fm.pause(Tm, !0), Am._seek = mm, Am._ended = !1, fm._clearTimer(Tm), fm._webAudio || !Am._node || isNaN(Am._node.duration) || (Am._node.currentTime = mm);
            var im = function() {
              Dm && fm.play(Tm, !0), fm._emit("seek", Tm)
            };
            if (Dm && !fm._webAudio) {
              var Rm = function() {
                fm._playLock ? setTimeout(Rm, 0) : im()
              };
              setTimeout(Rm, 0)
            } else im()
          }
          return fm
        },
        playing: function(mm) {
          var Tm = this;
          if ("number" === typeof mm) {
            var fm = Tm._soundById(mm);
            return !!fm && !fm.yI
          }
          for (var hm = 0; hm < Tm._sounds.length; hm++)
            if (!Tm._sounds[hm].yI) return !0;
          return !1
        },
        duration: function(mm) {
          var Tm = this,
            fm = Tm._duration,
            hm = Tm._soundById(mm);
          return hm && (fm = Tm._sprite[hm._sprite][1] / 1e3), fm
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var mm = this, Tm = mm._sounds, fm = 0; fm < Tm.length; fm++) Tm[fm].yI || mm.stop(Tm[fm]._id), mm._webAudio || (mm._clearSound(Tm[fm]._node), Tm[fm]._node.removeEventListener("error", Tm[fm]._errorFn, !1), Tm[fm]._node.removeEventListener(am._canPlayEvent, Tm[fm]._loadFn, !1), Tm[fm]._node.removeEventListener("ended", Tm[fm]._endFn, !1), am._releaseHtml5Audio(Tm[fm]._node)), delete Tm[fm]._node, mm._clearTimer(Tm[fm]._id);
          var hm = am._howls.indexOf(mm);
          hm >= 0 && am._howls.splice(hm, 1);
          var Am = !0;
          for (fm = 0; fm < am._howls.length; fm++)
            if (am._howls[fm]._src === mm._src || mm._src.indexOf(am._howls[fm]._src) >= 0) {
              Am = !1;
              break
            } return Dm && Am && delete Dm[mm._src], am.noAudio = !1, mm._state = "unloaded", mm._sounds = [], mm = null, null
        },
        on: function(mm, Tm, fm, hm) {
          var Am = this["_on" + mm];
          return "function" === typeof Tm && Am.push(hm ? {
            id: fm,
            nO: Tm,
            once: hm
          } : {
            id: fm,
            nO: Tm
          }), this
        },
        off: function(mm, Tm, fm) {
          var hm = this,
            Am = hm["_on" + mm],
            am = 0;
          if ("number" === typeof Tm && (fm = Tm, Tm = null), Tm || fm)
            for (am = 0; am < Am.length; am++) {
              var xm = fm === Am[am].id;
              if (Tm === Am[am].nO && xm || !Tm && xm) {
                Am.splice(am, 1);
                break
              }
            } else if (mm) hm["_on" + mm] = [];
            else {
              var wm = Object.keys(hm);
              for (am = 0; am < wm.length; am++) 0 === wm[am].indexOf("_on") && Array.isArray(hm[wm[am]]) && (hm[wm[am]] = [])
            } return hm
        },
        once: function(mm, Tm, fm) {
          return this.on(mm, Tm, fm, 1), this
        },
        _emit: function(mm, Tm, fm) {
          for (var hm = this, Am = hm["_on" + mm], am = Am.length - 1; am >= 0; am--) Am[am].id && Am[am].id !== Tm && "load" !== mm || (setTimeout(function(mm) {
            mm.call(this, Tm, fm)
          }.bind(hm, Am[am].nO), 0), Am[am].once && hm.off(mm, Am[am].nO, Am[am].id));
          return hm._loadQueue(mm), hm
        },
        _loadQueue: function(mm) {
          var Tm = this;
          if (Tm._queue.length > 0) {
            var fm = Tm._queue[0];
            fm.event === mm && (Tm._queue.shift(), Tm._loadQueue()), mm || fm.action()
          }
          return Tm
        },
        _ended: function(mm) {
          var Tm = this,
            fm = mm._sprite;
          if (!Tm._webAudio && mm._node && !mm._node.paused && !mm._node.ended && mm._node.currentTime < mm._stop) return setTimeout(Tm._ended.bind(Tm, mm), 100), Tm;
          var hm = !(!mm._loop && !Tm._sprite[fm][2]);
          if (Tm._emit("end", mm._id), !Tm._webAudio && hm && Tm.stop(mm._id, !0).play(mm._id), Tm._webAudio && hm) {
            Tm._emit("play", mm._id), mm._seek = mm._start || 0, mm._rateSeek = 0, mm._playStart = am.ctx.currentTime;
            var Am = 1e3 * (mm._stop - mm._start) / Math.abs(mm._rate);
            Tm._endTimers[mm._id] = setTimeout(Tm._ended.bind(Tm, mm), Am)
          }
          return Tm._webAudio && !hm && (mm.yI = !0, mm._ended = !0, mm._seek = mm._start || 0, mm._rateSeek = 0, Tm._clearTimer(mm._id), Tm._cleanBuffer(mm._node), am._autoSuspend()), Tm._webAudio || hm || Tm.stop(mm._id, !0), Tm
        },
        _clearTimer: function(mm) {
          var Tm = this;
          if (Tm._endTimers[mm]) {
            if ("function" !== typeof Tm._endTimers[mm]) clearTimeout(Tm._endTimers[mm]);
            else {
              var fm = Tm._soundById(mm);
              fm && fm._node && fm._node.removeEventListener("ended", Tm._endTimers[mm], !1)
            }
            delete Tm._endTimers[mm]
          }
          return Tm
        },
        _soundById: function(mm) {
          for (var Tm = this, fm = 0; fm < Tm._sounds.length; fm++)
            if (mm === Tm._sounds[fm]._id) return Tm._sounds[fm];
          return null
        },
        _inactiveSound: function() {
          var mm = this;
          mm._drain();
          for (var Tm = 0; Tm < mm._sounds.length; Tm++)
            if (mm._sounds[Tm]._ended) return mm._sounds[Tm].reset();
          return new wm(mm)
        },
        _drain: function() {
          var mm = this,
            Tm = mm._pool,
            fm = 0,
            hm = 0;
          if (!(mm._sounds.length < Tm)) {
            for (hm = 0; hm < mm._sounds.length; hm++) mm._sounds[hm]._ended && fm++;
            for (hm = mm._sounds.length - 1; hm >= 0; hm--) {
              if (fm <= Tm) return;
              mm._sounds[hm]._ended && (mm._webAudio && mm._sounds[hm]._node && mm._sounds[hm]._node.disconnect(0), mm._sounds.splice(hm, 1), fm--)
            }
          }
        },
        _getSoundIds: function(mm) {
          if ("undefined" === typeof mm) {
            for (var Tm = [], fm = 0; fm < this._sounds.length; fm++) Tm.push(this._sounds[fm]._id);
            return Tm
          }
          return [mm]
        },
        _refreshBuffer: function(mm) {
          return mm._node.bufferSource = am.ctx.createBufferSource(), mm._node.bufferSource.buffer = Dm[this._src], mm._panner ? mm._node.bufferSource.connect(mm._panner) : mm._node.bufferSource.connect(mm._node), mm._node.bufferSource.loop = mm._loop, mm._loop && (mm._node.bufferSource.loopStart = mm._start || 0, mm._node.bufferSource.loopEnd = mm._stop || 0), mm._node.bufferSource.playbackRate.setValueAtTime(mm._rate, am.ctx.currentTime), this
        },
        _cleanBuffer: function(mm) {
          var Tm = am._navigator && am._navigator.vendor.indexOf("Apple") >= 0;
          if (am._scratchBuffer && mm.bufferSource && (mm.bufferSource.onended = null, mm.bufferSource.disconnect(0), Tm)) try {
            mm.bufferSource.buffer = am._scratchBuffer
          } catch (fm) {}
          return mm.bufferSource = null, this
        },
        _clearSound: function(mm) {
          /MSIE |Trident\//.test(am._navigator && am._navigator.userAgent) || (mm.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var wm = function(mm) {
        this._parent = mm, this.init()
      };
      wm.prototype = {
        init: function() {
          var mm = this,
            Tm = mm._parent;
          return mm._muted = Tm._muted, mm._loop = Tm._loop, mm._volume = Tm._volume, mm._rate = Tm._rate, mm._seek = 0, mm.yI = !0, mm._ended = !0, mm._sprite = "__default", mm._id = ++am._counter, Tm._sounds.push(mm), mm.create(), mm
        },
        create: function() {
          var mm = this,
            Tm = mm._parent,
            fm = am._muted || mm._muted || mm._parent._muted ? 0 : mm._volume;
          return Tm._webAudio ? (mm._node = "undefined" === typeof am.ctx.createGain ? am.ctx.createGainNode() : am.ctx.createGain(), mm._node.gain.setValueAtTime(fm, am.ctx.currentTime), mm._node.paused = !0, mm._node.connect(am.masterGain)) : am.noAudio || (mm._node = am._obtainHtml5Audio(), mm._errorFn = mm._errorListener.bind(mm), mm._node.addEventListener("error", mm._errorFn, !1), mm._loadFn = mm._loadListener.bind(mm), mm._node.addEventListener(am._canPlayEvent, mm._loadFn, !1), mm._endFn = mm._endListener.bind(mm), mm._node.addEventListener("ended", mm._endFn, !1), mm._node.src = Tm._src, mm._node.preload = !0 === Tm._preload ? "auto" : Tm._preload, mm._node.volume = fm * am.volume(), mm._node.load()), mm
        },
        reset: function() {
          var mm = this,
            Tm = mm._parent;
          return mm._muted = Tm._muted, mm._loop = Tm._loop, mm._volume = Tm._volume, mm._rate = Tm._rate, mm._seek = 0, mm._rateSeek = 0, mm.yI = !0, mm._ended = !0, mm._sprite = "__default", mm._id = ++am._counter, mm
        },
        _errorListener: function() {
          var mm = this;
          mm._parent._emit("loaderror", mm._id, mm._node.error ? mm._node.error.code : 0), mm._node.removeEventListener("error", mm._errorFn, !1)
        },
        _loadListener: function() {
          var mm = this,
            Tm = mm._parent;
          Tm._duration = Math.ceil(10 * mm._node.duration) / 10, 0 === Object.keys(Tm._sprite).length && (Tm._sprite = {
            __default: [0, 1e3 * Tm._duration]
          }), "loaded" !== Tm._state && (Tm._state = "loaded", Tm._emit("load"), Tm._loadQueue()), mm._node.removeEventListener(am._canPlayEvent, mm._loadFn, !1)
        },
        _endListener: function() {
          var mm = this,
            Tm = mm._parent;
          Tm._duration === 1 / 0 && (Tm._duration = Math.ceil(10 * mm._node.duration) / 10, Tm._sprite.__default[1] === 1 / 0 && (Tm._sprite.__default[1] = 1e3 * Tm._duration), Tm._ended(mm)), mm._node.removeEventListener("ended", mm._endFn, !1)
        }
      };
      var Dm = {},
        im = function(mm) {
          var Tm = mm._src;
          if (Dm[Tm]) return mm._duration = Dm[Tm].duration, void Em(mm);
          if (/^data:[^;]+;base64,/.test(Tm)) {
            for (var fm = atob(Tm.split(",")[1]), hm = new Uint8Array(fm.length), Am = 0; Am < fm.length; ++Am) hm[Am] = fm.charCodeAt(Am);
            pm(hm.buffer, mm)
          } else {
            var am = new XMLHttpRequest;
            am.open(mm._xhr.method, Tm, !0), am.withCredentials = mm._xhr.withCredentials, am.responseType = "arraybuffer", mm._xhr.headers && Object.keys(mm._xhr.headers).forEach((function(Tm) {
              am.setRequestHeader(Tm, mm._xhr.headers[Tm])
            })), am.onload = function() {
              var Tm = (am.status + "")[0];
              "0" === Tm || "2" === Tm || "3" === Tm ? pm(am.response, mm) : mm._emit("loaderror", null, "Failed loading audio file with status: " + am.status + ".")
            }, am.onerror = function() {
              mm._webAudio && (mm._html5 = !0, mm._webAudio = !1, mm._sounds = [], delete Dm[Tm], mm.load())
            }, Rm(am)
          }
        },
        Rm = function(mm) {
          try {
            mm.send()
          } catch (Tm) {
            mm.onerror()
          }
        },
        pm = function(mm, Tm) {
          var fm = function() {
              Tm._emit("loaderror", null, "Decoding audio data failed.")
            },
            hm = function(mm) {
              mm && Tm._sounds.length > 0 ? (Dm[Tm._src] = mm, Em(Tm, mm)) : fm()
            };
          "undefined" !== typeof Promise && 1 === am.ctx.decodeAudioData.length ? am.ctx.decodeAudioData(mm).then(hm).catch(fm) : am.ctx.decodeAudioData(mm, hm, fm)
        },
        Em = function(mm, Tm) {
          Tm && !mm._duration && (mm._duration = Tm.duration), 0 === Object.keys(mm._sprite).length && (mm._sprite = {
            __default: [0, 1e3 * mm._duration]
          }), "loaded" !== mm._state && (mm._state = "loaded", mm._emit("load"), mm._loadQueue())
        },
        om = function() {
          if (am.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? am.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? am.ctx = new webkitAudioContext : am.usingWebAudio = !1
            } catch (Am) {
              am.usingWebAudio = !1
            }
            am.ctx || (am.usingWebAudio = !1);
            var mm = /iP(hone|od|ad)/.test(am._navigator && am._navigator.platform),
              Tm = am._navigator && am._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              fm = Tm ? parseInt(Tm[1], 10) : null;
            if (mm && fm && fm < 9) {
              var hm = /safari/.test(am._navigator && am._navigator.userAgent.toLowerCase());
              am._navigator && !hm && (am.usingWebAudio = !1)
            }
            am.usingWebAudio && (am.masterGain = "undefined" === typeof am.ctx.createGain ? am.ctx.createGainNode() : am.ctx.createGain(), am.masterGain.gain.setValueAtTime(am._muted ? 0 : am._volume, am.ctx.currentTime), am.masterGain.connect(am.ctx.destination)), am._setup()
          }
        };
      void 0 === (hm = function() {
        return {
          Howler: am,
          Howl: xm
        }
      }.apply(Tm, [])) || (mm.exports = hm), Tm.Howler = am, Tm.Howl = xm, "undefined" !== typeof fm.g ? (fm.g.HowlerGlobal = Am, fm.g.Howler = am, fm.g.Howl = xm, fm.g.Sound = wm) : "undefined" !== typeof window && (window.HowlerGlobal = Am, window.Howler = am, window.Howl = xm, window.Sound = wm)
    }(),
    function() {
      var mm;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(mm) {
        var Tm = this;
        if (!Tm.ctx || !Tm.ctx.listener) return Tm;
        for (var fm = Tm._howls.length - 1; fm >= 0; fm--) Tm._howls[fm].stereo(mm);
        return Tm
      }, HowlerGlobal.prototype.pos = function(mm, Tm, fm) {
        var hm = this;
        return hm.ctx && hm.ctx.listener ? (Tm = "number" !== typeof Tm ? hm._pos[1] : Tm, fm = "number" !== typeof fm ? hm._pos[2] : fm, "number" !== typeof mm ? hm._pos : (hm._pos = [mm, Tm, fm], "undefined" !== typeof hm.ctx.listener.positionX ? (hm.ctx.listener.positionX.setTargetAtTime(hm._pos[0], Howler.ctx.currentTime, .1), hm.ctx.listener.positionY.setTargetAtTime(hm._pos[1], Howler.ctx.currentTime, .1), hm.ctx.listener.positionZ.setTargetAtTime(hm._pos[2], Howler.ctx.currentTime, .1)) : hm.ctx.listener.setPosition(hm._pos[0], hm._pos[1], hm._pos[2]), hm)) : hm
      }, HowlerGlobal.prototype.orientation = function(mm, Tm, fm, hm, Am, am) {
        var xm = this;
        if (!xm.ctx || !xm.ctx.listener) return xm;
        var wm = xm._orientation;
        return Tm = "number" !== typeof Tm ? wm[1] : Tm, fm = "number" !== typeof fm ? wm[2] : fm, hm = "number" !== typeof hm ? wm[3] : hm, Am = "number" !== typeof Am ? wm[4] : Am, am = "number" !== typeof am ? wm[5] : am, "number" !== typeof mm ? wm : (xm._orientation = [mm, Tm, fm, hm, Am, am], "undefined" !== typeof xm.ctx.listener.forwardX ? (xm.ctx.listener.forwardX.setTargetAtTime(mm, Howler.ctx.currentTime, .1), xm.ctx.listener.forwardY.setTargetAtTime(Tm, Howler.ctx.currentTime, .1), xm.ctx.listener.forwardZ.setTargetAtTime(fm, Howler.ctx.currentTime, .1), xm.ctx.listener.upX.setTargetAtTime(hm, Howler.ctx.currentTime, .1), xm.ctx.listener.upY.setTargetAtTime(Am, Howler.ctx.currentTime, .1), xm.ctx.listener.upZ.setTargetAtTime(am, Howler.ctx.currentTime, .1)) : xm.ctx.listener.setOrientation(mm, Tm, fm, hm, Am, am), xm)
      }, Howl.prototype.init = (mm = Howl.prototype.init, function(Tm) {
        var fm = this;
        return fm._orientation = Tm.orientation || [1, 0, 0], fm._stereo = Tm.stereo || null, fm._pos = Tm.pos || null, fm._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Tm.coneInnerAngle ? Tm.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Tm.coneOuterAngle ? Tm.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Tm.coneOuterGain ? Tm.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Tm.distanceModel ? Tm.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Tm.maxDistance ? Tm.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Tm.panningModel ? Tm.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Tm.refDistance ? Tm.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Tm.rolloffFactor ? Tm.rolloffFactor : 1
        }, fm._onstereo = Tm.onstereo ? [{
          nO: Tm.onstereo
        }] : [], fm._onpos = Tm.onpos ? [{
          nO: Tm.onpos
        }] : [], fm._onorientation = Tm.onorientation ? [{
          nO: Tm.onorientation
        }] : [], mm.call(this, Tm)
      }), Howl.prototype.stereo = function(mm, fm) {
        var hm = this;
        if (!hm._webAudio) return hm;
        if ("loaded" !== hm._state) return hm._queue.push({
          event: "stereo",
          action: function() {
            hm.stereo(mm, fm)
          }
        }), hm;
        var Am = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof fm) {
          if ("number" !== typeof mm) return hm._stereo;
          hm._stereo = mm, hm._pos = [mm, 0, 0]
        }
        for (var am = hm._getSoundIds(fm), xm = 0; xm < am.length; xm++) {
          var wm = hm._soundById(am[xm]);
          if (wm) {
            if ("number" !== typeof mm) return wm._stereo;
            wm._stereo = mm, wm._pos = [mm, 0, 0], wm._node && (wm._pannerAttr.panningModel = "equalpower", wm._panner && wm._panner.pan || Tm(wm, Am), "spatial" === Am ? "undefined" !== typeof wm._panner.positionX ? (wm._panner.positionX.setValueAtTime(mm, Howler.ctx.currentTime), wm._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), wm._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : wm._panner.setPosition(mm, 0, 0) : wm._panner.pan.setValueAtTime(mm, Howler.ctx.currentTime)), hm._emit("stereo", wm._id)
          }
        }
        return hm
      }, Howl.prototype.pos = function(mm, fm, hm, Am) {
        var am = this;
        if (!am._webAudio) return am;
        if ("loaded" !== am._state) return am._queue.push({
          event: "pos",
          action: function() {
            am.pos(mm, fm, hm, Am)
          }
        }), am;
        if (fm = "number" !== typeof fm ? 0 : fm, hm = "number" !== typeof hm ? -.5 : hm, "undefined" === typeof Am) {
          if ("number" !== typeof mm) return am._pos;
          am._pos = [mm, fm, hm]
        }
        for (var xm = am._getSoundIds(Am), wm = 0; wm < xm.length; wm++) {
          var Dm = am._soundById(xm[wm]);
          if (Dm) {
            if ("number" !== typeof mm) return Dm._pos;
            Dm._pos = [mm, fm, hm], Dm._node && (Dm._panner && !Dm._panner.pan || Tm(Dm, "spatial"), "undefined" !== typeof Dm._panner.positionX ? (Dm._panner.positionX.setValueAtTime(mm, Howler.ctx.currentTime), Dm._panner.positionY.setValueAtTime(fm, Howler.ctx.currentTime), Dm._panner.positionZ.setValueAtTime(hm, Howler.ctx.currentTime)) : Dm._panner.setPosition(mm, fm, hm)), am._emit("pos", Dm._id)
          }
        }
        return am
      }, Howl.prototype.orientation = function(mm, fm, hm, Am) {
        var am = this;
        if (!am._webAudio) return am;
        if ("loaded" !== am._state) return am._queue.push({
          event: "orientation",
          action: function() {
            am.orientation(mm, fm, hm, Am)
          }
        }), am;
        if (fm = "number" !== typeof fm ? am._orientation[1] : fm, hm = "number" !== typeof hm ? am._orientation[2] : hm, "undefined" === typeof Am) {
          if ("number" !== typeof mm) return am._orientation;
          am._orientation = [mm, fm, hm]
        }
        for (var xm = am._getSoundIds(Am), wm = 0; wm < xm.length; wm++) {
          var Dm = am._soundById(xm[wm]);
          if (Dm) {
            if ("number" !== typeof mm) return Dm._orientation;
            Dm._orientation = [mm, fm, hm], Dm._node && (Dm._panner || (Dm._pos || (Dm._pos = am._pos || [0, 0, -.5]), Tm(Dm, "spatial")), "undefined" !== typeof Dm._panner.orientationX ? (Dm._panner.orientationX.setValueAtTime(mm, Howler.ctx.currentTime), Dm._panner.orientationY.setValueAtTime(fm, Howler.ctx.currentTime), Dm._panner.orientationZ.setValueAtTime(hm, Howler.ctx.currentTime)) : Dm._panner.setOrientation(mm, fm, hm)), am._emit("orientation", Dm._id)
          }
        }
        return am
      }, Howl.prototype.pannerAttr = function() {
        var mm, fm, hm, Am = this,
          am = arguments;
        if (!Am._webAudio) return Am;
        if (0 === am.length) return Am._pannerAttr;
        if (1 === am.length) {
          if ("object" !== typeof am[0]) return (hm = Am._soundById(parseInt(am[0], 10))) ? hm._pannerAttr : Am._pannerAttr;
          mm = am[0], "undefined" === typeof fm && (mm.pannerAttr || (mm.pannerAttr = {
            coneInnerAngle: mm.coneInnerAngle,
            coneOuterAngle: mm.coneOuterAngle,
            coneOuterGain: mm.coneOuterGain,
            distanceModel: mm.distanceModel,
            maxDistance: mm.maxDistance,
            refDistance: mm.refDistance,
            rolloffFactor: mm.rolloffFactor,
            panningModel: mm.panningModel
          }), Am._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof mm.pannerAttr.coneInnerAngle ? mm.pannerAttr.coneInnerAngle : Am._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof mm.pannerAttr.coneOuterAngle ? mm.pannerAttr.coneOuterAngle : Am._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof mm.pannerAttr.coneOuterGain ? mm.pannerAttr.coneOuterGain : Am._coneOuterGain,
            distanceModel: "undefined" !== typeof mm.pannerAttr.distanceModel ? mm.pannerAttr.distanceModel : Am._distanceModel,
            maxDistance: "undefined" !== typeof mm.pannerAttr.maxDistance ? mm.pannerAttr.maxDistance : Am._maxDistance,
            refDistance: "undefined" !== typeof mm.pannerAttr.refDistance ? mm.pannerAttr.refDistance : Am._refDistance,
            rolloffFactor: "undefined" !== typeof mm.pannerAttr.rolloffFactor ? mm.pannerAttr.rolloffFactor : Am._rolloffFactor,
            panningModel: "undefined" !== typeof mm.pannerAttr.panningModel ? mm.pannerAttr.panningModel : Am._panningModel
          })
        } else 2 === am.length && (mm = am[0], fm = parseInt(am[1], 10));
        for (var xm = Am._getSoundIds(fm), wm = 0; wm < xm.length; wm++)
          if (hm = Am._soundById(xm[wm])) {
            var Dm = hm._pannerAttr;
            Dm = {
              coneInnerAngle: "undefined" !== typeof mm.coneInnerAngle ? mm.coneInnerAngle : Dm.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof mm.coneOuterAngle ? mm.coneOuterAngle : Dm.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof mm.coneOuterGain ? mm.coneOuterGain : Dm.coneOuterGain,
              distanceModel: "undefined" !== typeof mm.distanceModel ? mm.distanceModel : Dm.distanceModel,
              maxDistance: "undefined" !== typeof mm.maxDistance ? mm.maxDistance : Dm.maxDistance,
              refDistance: "undefined" !== typeof mm.refDistance ? mm.refDistance : Dm.refDistance,
              rolloffFactor: "undefined" !== typeof mm.rolloffFactor ? mm.rolloffFactor : Dm.rolloffFactor,
              panningModel: "undefined" !== typeof mm.panningModel ? mm.panningModel : Dm.panningModel
            };
            var im = hm._panner;
            im ? (im.coneInnerAngle = Dm.coneInnerAngle, im.coneOuterAngle = Dm.coneOuterAngle, im.coneOuterGain = Dm.coneOuterGain, im.distanceModel = Dm.distanceModel, im.maxDistance = Dm.maxDistance, im.refDistance = Dm.refDistance, im.rolloffFactor = Dm.rolloffFactor, im.panningModel = Dm.panningModel) : (hm._pos || (hm._pos = Am._pos || [0, 0, -.5]), Tm(hm, "spatial"))
          } return Am
      }, Sound.prototype.init = function(mm) {
        return function() {
          var Tm = this,
            fm = Tm._parent;
          Tm._orientation = fm._orientation, Tm._stereo = fm._stereo, Tm._pos = fm._pos, Tm._pannerAttr = fm._pannerAttr, mm.call(this), Tm._stereo ? fm.stereo(Tm._stereo) : Tm._pos && fm.pos(Tm._pos[0], Tm._pos[1], Tm._pos[2], Tm._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(mm) {
        return function() {
          var Tm = this,
            fm = Tm._parent;
          return Tm._orientation = fm._orientation, Tm._stereo = fm._stereo, Tm._pos = fm._pos, Tm._pannerAttr = fm._pannerAttr, Tm._stereo ? fm.stereo(Tm._stereo) : Tm._pos ? fm.pos(Tm._pos[0], Tm._pos[1], Tm._pos[2], Tm._id) : Tm._panner && (Tm._panner.disconnect(0), Tm._panner = void 0, fm._refreshBuffer(Tm)), mm.call(this)
        }
      }(Sound.prototype.reset);
      var Tm = function(mm, Tm) {
        "spatial" === (Tm = Tm || "spatial") ? (mm._panner = Howler.ctx.createPanner(), mm._panner.coneInnerAngle = mm._pannerAttr.coneInnerAngle, mm._panner.coneOuterAngle = mm._pannerAttr.coneOuterAngle, mm._panner.coneOuterGain = mm._pannerAttr.coneOuterGain, mm._panner.distanceModel = mm._pannerAttr.distanceModel, mm._panner.maxDistance = mm._pannerAttr.maxDistance, mm._panner.refDistance = mm._pannerAttr.refDistance, mm._panner.rolloffFactor = mm._pannerAttr.rolloffFactor, mm._panner.panningModel = mm._pannerAttr.panningModel, "undefined" !== typeof mm._panner.positionX ? (mm._panner.positionX.setValueAtTime(mm._pos[0], Howler.ctx.currentTime), mm._panner.positionY.setValueAtTime(mm._pos[1], Howler.ctx.currentTime), mm._panner.positionZ.setValueAtTime(mm._pos[2], Howler.ctx.currentTime)) : mm._panner.setPosition(mm._pos[0], mm._pos[1], mm._pos[2]), "undefined" !== typeof mm._panner.orientationX ? (mm._panner.orientationX.setValueAtTime(mm._orientation[0], Howler.ctx.currentTime), mm._panner.orientationY.setValueAtTime(mm._orientation[1], Howler.ctx.currentTime), mm._panner.orientationZ.setValueAtTime(mm._orientation[2], Howler.ctx.currentTime)) : mm._panner.setOrientation(mm._orientation[0], mm._orientation[1], mm._orientation[2])) : (mm._panner = Howler.ctx.createStereoPanner(), mm._panner.pan.setValueAtTime(mm._stereo, Howler.ctx.currentTime)), mm._panner.connect(mm._node), mm.yI || mm._parent.pause(mm._id, !0).play(mm._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);