/*! For license information please see x17cru.95.d308c685.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  4745: (dd, Jd, kd) => {
    var pd;
    ! function() {
      var Nd = function() {
        this.init()
      };
      Nd.prototype = {
        init: function() {
          var dd = this || Wd;
          return dd._counter = 1e3, dd._html5AudioPool = [], dd.html5PoolSize = 10, dd._codecs = {}, dd._howls = [], dd._muted = !1, dd._volume = 1, dd._canPlayEvent = "canplaythrough", dd._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, dd.masterGain = null, dd.noAudio = !1, dd.usingWebAudio = !0, dd.autoSuspend = !0, dd.ctx = null, dd.autoUnlock = !0, dd._setup(), dd
        },
        volume: function(dd) {
          var Jd = this || Wd;
          if (dd = parseFloat(dd), Jd.ctx || Qd(), "undefined" !== typeof dd && dd >= 0 && dd <= 1) {
            if (Jd._volume = dd, Jd._muted) return Jd;
            Jd.usingWebAudio && Jd.masterGain.gain.setValueAtTime(dd, Wd.ctx.currentTime);
            for (var kd = 0; kd < Jd._howls.length; kd++)
              if (!Jd._howls[kd]._webAudio)
                for (var pd = Jd._howls[kd]._getSoundIds(), Nd = 0; Nd < pd.length; Nd++) {
                  var Pd = Jd._howls[kd]._soundById(pd[Nd]);
                  Pd && Pd._node && (Pd._node.volume = Pd._volume * dd)
                }
            return Jd
          }
          return Jd._volume
        },
        mute: function(dd) {
          var Jd = this || Wd;
          Jd.ctx || Qd(), Jd._muted = dd, Jd.usingWebAudio && Jd.masterGain.gain.setValueAtTime(dd ? 0 : Jd._volume, Wd.ctx.currentTime);
          for (var kd = 0; kd < Jd._howls.length; kd++)
            if (!Jd._howls[kd]._webAudio)
              for (var pd = Jd._howls[kd]._getSoundIds(), Nd = 0; Nd < pd.length; Nd++) {
                var Pd = Jd._howls[kd]._soundById(pd[Nd]);
                Pd && Pd._node && (Pd._node.muted = !!dd || Pd._muted)
              }
          return Jd
        },
        stop: function() {
          for (var dd = this || Wd, Jd = 0; Jd < dd._howls.length; Jd++) dd._howls[Jd].stop();
          return dd
        },
        unload: function() {
          for (var dd = this || Wd, Jd = dd._howls.length - 1; Jd >= 0; Jd--) dd._howls[Jd].unload();
          return dd.usingWebAudio && dd.ctx && "undefined" !== typeof dd.ctx.close && (dd.ctx.close(), dd.ctx = null, Qd()), dd
        },
        codecs: function(dd) {
          return (this || Wd)._codecs[dd.replace(/^x-/, "")]
        },
        _setup: function() {
          var dd = this || Wd;
          if (dd.state = dd.ctx && dd.ctx.state || "suspended", dd._autoSuspend(), !dd.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (dd._canPlayEvent = "canplay")
            } catch (Jd) {
              dd.noAudio = !0
            } else dd.noAudio = !0;
          try {
            (new Audio).muted && (dd.noAudio = !0)
          } catch (Jd) {}
          return dd.noAudio || dd._setupCodecs(), dd
        },
        _setupCodecs: function() {
          var dd = this || Wd,
            Jd = null;
          try {
            Jd = "undefined" !== typeof Audio ? new Audio : null
          } catch (Kd) {
            return dd
          }
          if (!Jd || "function" !== typeof Jd.canPlayType) return dd;
          var kd = Jd.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            pd = dd._navigator ? dd._navigator.userAgent : "",
            Nd = pd.match(/OPR\/([0-6].)/g),
            Pd = Nd && parseInt(Nd[0].split("/")[1], 10) < 33,
            Zd = -1 !== pd.indexOf("Safari") && -1 === pd.indexOf("Chrome"),
            gd = pd.match(/Version\/(.*?) /),
            Cd = Zd && gd && parseInt(gd[1], 10) < 15;
          return dd._codecs = {
            mp3: !(Pd || !kd && !Jd.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!kd,
            opus: !!Jd.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Jd.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Jd.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Jd.canPlayType('audio/wav; codecs="1"') || Jd.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Jd.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Jd.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Jd.canPlayType("audio/x-m4a;") || Jd.canPlayType("audio/m4a;") || Jd.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Jd.canPlayType("audio/x-m4b;") || Jd.canPlayType("audio/m4b;") || Jd.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Jd.canPlayType("audio/x-mp4;") || Jd.canPlayType("audio/mp4;") || Jd.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Cd || !Jd.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Cd || !Jd.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Jd.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Jd.canPlayType("audio/x-flac;") || Jd.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, dd
        },
        _unlockAudio: function() {
          var dd = this || Wd;
          if (!dd._audioUnlocked && dd.ctx) {
            dd._audioUnlocked = !1, dd.autoUnlock = !1, dd._mobileUnloaded || 44100 === dd.ctx.sampleRate || (dd._mobileUnloaded = !0, dd.unload()), dd._scratchBuffer = dd.ctx.createBuffer(1, 1, 22050);
            var Jd = function(kd) {
              for (; dd._html5AudioPool.length < dd.html5PoolSize;) try {
                var pd = new Audio;
                pd._unlocked = !0, dd._releaseHtml5Audio(pd)
              } catch (kd) {
                dd.noAudio = !0;
                break
              }
              for (var Nd = 0; Nd < dd._howls.length; Nd++)
                if (!dd._howls[Nd]._webAudio)
                  for (var Wd = dd._howls[Nd]._getSoundIds(), Pd = 0; Pd < Wd.length; Pd++) {
                    var Zd = dd._howls[Nd]._soundById(Wd[Pd]);
                    Zd && Zd._node && !Zd._node._unlocked && (Zd._node._unlocked = !0, Zd._node.load())
                  }
              dd._autoResume();
              var gd = dd.ctx.createBufferSource();
              gd.buffer = dd._scratchBuffer, gd.connect(dd.ctx.destination), "undefined" === typeof gd.start ? gd.noteOn(0) : gd.start(0), "function" === typeof dd.ctx.resume && dd.ctx.resume(), gd.onended = function() {
                gd.disconnect(0), dd._audioUnlocked = !0, document.removeEventListener("touchstart", Jd, !0), document.removeEventListener("touchend", Jd, !0), document.removeEventListener("click", Jd, !0), document.removeEventListener("keydown", Jd, !0);
                for (var kd = 0; kd < dd._howls.length; kd++) dd._howls[kd]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Jd, !0), document.addEventListener("touchend", Jd, !0), document.addEventListener("click", Jd, !0), document.addEventListener("keydown", Jd, !0), dd
          }
        },
        _obtainHtml5Audio: function() {
          var dd = this || Wd;
          if (dd._html5AudioPool.length) return dd._html5AudioPool.pop();
          var Jd = (new Audio).play();
          return Jd && "undefined" !== typeof Promise && (Jd instanceof Promise || "function" === typeof Jd.then) && Jd.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(dd) {
          var Jd = this || Wd;
          return dd._unlocked && Jd._html5AudioPool.push(dd), Jd
        },
        _autoSuspend: function() {
          var dd = this;
          if (dd.autoSuspend && dd.ctx && "undefined" !== typeof dd.ctx.suspend && Wd.usingWebAudio) {
            for (var Jd = 0; Jd < dd._howls.length; Jd++)
              if (dd._howls[Jd]._webAudio)
                for (var kd = 0; kd < dd._howls[Jd]._sounds.length; kd++)
                  if (!dd._howls[Jd]._sounds[kd].YG) return dd;
            return dd._suspendTimer && clearTimeout(dd._suspendTimer), dd._suspendTimer = setTimeout((function() {
              if (dd.autoSuspend) {
                dd._suspendTimer = null, dd.state = "suspending";
                var Jd = function() {
                  dd.state = "suspended", dd._resumeAfterSuspend && (delete dd._resumeAfterSuspend, dd._autoResume())
                };
                dd.ctx.suspend().then(Jd, Jd)
              }
            }), 3e4), dd
          }
        },
        _autoResume: function() {
          var dd = this;
          if (dd.ctx && "undefined" !== typeof dd.ctx.resume && Wd.usingWebAudio) return "running" === dd.state && "interrupted" !== dd.ctx.state && dd._suspendTimer ? (clearTimeout(dd._suspendTimer), dd._suspendTimer = null) : "suspended" === dd.state || "running" === dd.state && "interrupted" === dd.ctx.state ? (dd.ctx.resume().then((function() {
            dd.state = "running";
            for (var Jd = 0; Jd < dd._howls.length; Jd++) dd._howls[Jd]._emit("resume")
          })), dd._suspendTimer && (clearTimeout(dd._suspendTimer), dd._suspendTimer = null)) : "suspending" === dd.state && (dd._resumeAfterSuspend = !0), dd
        }
      };
      var Wd = new Nd,
        Pd = function(dd) {
          dd.src && 0 !== dd.src.length ? this.init(dd) : console.error("An array of source files must be passed with any new Howl.")
        };
      Pd.prototype = {
        init: function(dd) {
          var Jd = this;
          return Wd.ctx || Qd(), Jd._autoplay = dd.autoplay || !1, Jd._format = "string" !== typeof dd.format ? dd.format : [dd.format], Jd._html5 = dd.html5 || !1, Jd._muted = dd.mute || !1, Jd._loop = dd.loop || !1, Jd._pool = dd.pool || 5, Jd._preload = "boolean" !== typeof dd.preload && "metadata" !== dd.preload || dd.preload, Jd._rate = dd.rate || 1, Jd._sprite = dd.sprite || {}, Jd._src = "string" !== typeof dd.src ? dd.src : [dd.src], Jd._volume = void 0 !== dd.volume ? dd.volume : 1, Jd._xhr = {
            method: dd.xhr && dd.xhr.method ? dd.xhr.method : "GET",
            headers: dd.xhr && dd.xhr.headers ? dd.xhr.headers : null,
            withCredentials: !(!dd.xhr || !dd.xhr.withCredentials) && dd.xhr.withCredentials
          }, Jd._duration = 0, Jd._state = "unloaded", Jd._sounds = [], Jd._endTimers = {}, Jd._queue = [], Jd._playLock = !1, Jd._onend = dd.onend ? [{
            hQ: dd.onend
          }] : [], Jd._onfade = dd.onfade ? [{
            hQ: dd.onfade
          }] : [], Jd._onload = dd.onload ? [{
            hQ: dd.onload
          }] : [], Jd._onloaderror = dd.onloaderror ? [{
            hQ: dd.onloaderror
          }] : [], Jd._onplayerror = dd.onplayerror ? [{
            hQ: dd.onplayerror
          }] : [], Jd._onpause = dd.onpause ? [{
            hQ: dd.onpause
          }] : [], Jd._onplay = dd.onplay ? [{
            hQ: dd.onplay
          }] : [], Jd._onstop = dd.onstop ? [{
            hQ: dd.onstop
          }] : [], Jd._onmute = dd.onmute ? [{
            hQ: dd.onmute
          }] : [], Jd._onvolume = dd.onvolume ? [{
            hQ: dd.onvolume
          }] : [], Jd._onrate = dd.onrate ? [{
            hQ: dd.onrate
          }] : [], Jd._onseek = dd.onseek ? [{
            hQ: dd.onseek
          }] : [], Jd._onunlock = dd.onunlock ? [{
            hQ: dd.onunlock
          }] : [], Jd._onresume = [], Jd._webAudio = Wd.usingWebAudio && !Jd._html5, "undefined" !== typeof Wd.ctx && Wd.ctx && Wd.autoUnlock && Wd._unlockAudio(), Wd._howls.push(Jd), Jd._autoplay && Jd._queue.push({
            event: "play",
            action: function() {
              Jd.play()
            }
          }), Jd._preload && "none" !== Jd._preload && Jd.load(), Jd
        },
        load: function() {
          var dd = this,
            Jd = null;
          if (Wd.noAudio) dd._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof dd._src && (dd._src = [dd._src]);
            for (var kd = 0; kd < dd._src.length; kd++) {
              var pd, Nd;
              if (dd._format && dd._format[kd]) pd = dd._format[kd];
              else {
                if ("string" !== typeof(Nd = dd._src[kd])) {
                  dd._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(pd = /^data:audio\/([^;,]+);/i.exec(Nd)) || (pd = /\.([^.]+)$/.exec(Nd.split("?", 1)[0])), pd && (pd = pd[1].toLowerCase())
              }
              if (pd || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), pd && Wd.codecs(pd)) {
                Jd = dd._src[kd];
                break
              }
            }
            if (Jd) return dd._src = Jd, dd._state = "loading", "https:" === window.location.protocol && "http:" === Jd.slice(0, 5) && (dd._html5 = !0, dd._webAudio = !1), new Zd(dd), dd._webAudio && Cd(dd), dd;
            dd._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(dd, Jd) {
          var kd = this,
            pd = null;
          if ("number" === typeof dd) pd = dd, dd = null;
          else {
            if ("string" === typeof dd && "loaded" === kd._state && !kd._sprite[dd]) return null;
            if ("undefined" === typeof dd && (dd = "__default", !kd._playLock)) {
              for (var Nd = 0, Pd = 0; Pd < kd._sounds.length; Pd++) kd._sounds[Pd].YG && !kd._sounds[Pd]._ended && (Nd++, pd = kd._sounds[Pd]._id);
              1 === Nd ? dd = null : pd = null
            }
          }
          var Zd = pd ? kd._soundById(pd) : kd._inactiveSound();
          if (!Zd) return null;
          if (pd && !dd && (dd = Zd._sprite || "__default"), "loaded" !== kd._state) {
            Zd._sprite = dd, Zd._ended = !1;
            var gd = Zd._id;
            return kd._queue.push({
              event: "play",
              action: function() {
                kd.play(gd)
              }
            }), gd
          }
          if (pd && !Zd.YG) return Jd || kd._loadQueue("play"), Zd._id;
          kd._webAudio && Wd._autoResume();
          var Cd = Math.max(0, Zd._seek > 0 ? Zd._seek : kd._sprite[dd][0] / 1e3),
            Kd = Math.max(0, (kd._sprite[dd][0] + kd._sprite[dd][1]) / 1e3 - Cd),
            od = 1e3 * Kd / Math.abs(Zd._rate),
            ld = kd._sprite[dd][0] / 1e3,
            Qd = (kd._sprite[dd][0] + kd._sprite[dd][1]) / 1e3;
          Zd._sprite = dd, Zd._ended = !1;
          var Ld = function() {
            Zd.YG = !1, Zd._seek = Cd, Zd._start = ld, Zd._stop = Qd, Zd._loop = !(!Zd._loop && !kd._sprite[dd][2])
          };
          if (!(Cd >= Qd)) {
            var Od = Zd._node;
            if (kd._webAudio) {
              var ed = function() {
                kd._playLock = !1, Ld(), kd._refreshBuffer(Zd);
                var dd = Zd._muted || kd._muted ? 0 : Zd._volume;
                Od.gain.setValueAtTime(dd, Wd.ctx.currentTime), Zd._playStart = Wd.ctx.currentTime, "undefined" === typeof Od.bufferSource.start ? Zd._loop ? Od.bufferSource.noteGrainOn(0, Cd, 86400) : Od.bufferSource.noteGrainOn(0, Cd, Kd) : Zd._loop ? Od.bufferSource.start(0, Cd, 86400) : Od.bufferSource.start(0, Cd, Kd), od !== 1 / 0 && (kd._endTimers[Zd._id] = setTimeout(kd._ended.bind(kd, Zd), od)), Jd || setTimeout((function() {
                  kd._emit("play", Zd._id), kd._loadQueue()
                }), 0)
              };
              "running" === Wd.state && "interrupted" !== Wd.ctx.state ? ed() : (kd._playLock = !0, kd.once("resume", ed), kd._clearTimer(Zd._id))
            } else {
              var Rd = function() {
                Od.currentTime = Cd, Od.muted = Zd._muted || kd._muted || Wd._muted || Od.muted, Od.volume = Zd._volume * Wd.volume(), Od.playbackRate = Zd._rate;
                try {
                  var pd = Od.play();
                  if (pd && "undefined" !== typeof Promise && (pd instanceof Promise || "function" === typeof pd.then) ? (kd._playLock = !0, Ld(), pd.then((function() {
                      kd._playLock = !1, Od._unlocked = !0, Jd ? kd._loadQueue() : kd._emit("play", Zd._id)
                    })).catch((function() {
                      kd._playLock = !1, kd._emit("playerror", Zd._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), Zd._ended = !0, Zd.YG = !0
                    }))) : Jd || (kd._playLock = !1, Ld(), kd._emit("play", Zd._id)), Od.playbackRate = Zd._rate, Od.paused) return void kd._emit("playerror", Zd._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== dd || Zd._loop ? kd._endTimers[Zd._id] = setTimeout(kd._ended.bind(kd, Zd), od) : (kd._endTimers[Zd._id] = function() {
                    kd._ended(Zd), Od.removeEventListener("ended", kd._endTimers[Zd._id], !1)
                  }, Od.addEventListener("ended", kd._endTimers[Zd._id], !1))
                } catch (Nd) {
                  kd._emit("playerror", Zd._id, Nd)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Od.src && (Od.src = kd._src, Od.load());
              var Id = window && window.ejecta || !Od.readyState && Wd._navigator.isCocoonJS;
              if (Od.readyState >= 3 || Id) Rd();
              else {
                kd._playLock = !0, kd._state = "loading";
                var Gd = function() {
                  kd._state = "loaded", Rd(), Od.removeEventListener(Wd._canPlayEvent, Gd, !1)
                };
                Od.addEventListener(Wd._canPlayEvent, Gd, !1), kd._clearTimer(Zd._id)
              }
            }
            return Zd._id
          }
          kd._ended(Zd)
        },
        pause: function(dd) {
          var Jd = this;
          if ("loaded" !== Jd._state || Jd._playLock) return Jd._queue.push({
            event: "pause",
            action: function() {
              Jd.pause(dd)
            }
          }), Jd;
          for (var kd = Jd._getSoundIds(dd), pd = 0; pd < kd.length; pd++) {
            Jd._clearTimer(kd[pd]);
            var Nd = Jd._soundById(kd[pd]);
            if (Nd && !Nd.YG && (Nd._seek = Jd.seek(kd[pd]), Nd._rateSeek = 0, Nd.YG = !0, Jd._stopFade(kd[pd]), Nd._node))
              if (Jd._webAudio) {
                if (!Nd._node.bufferSource) continue;
                "undefined" === typeof Nd._node.bufferSource.stop ? Nd._node.bufferSource.noteOff(0) : Nd._node.bufferSource.stop(0), Jd._cleanBuffer(Nd._node)
              } else isNaN(Nd._node.duration) && Nd._node.duration !== 1 / 0 || Nd._node.pause();
            arguments[1] || Jd._emit("pause", Nd ? Nd._id : null)
          }
          return Jd
        },
        stop: function(dd, Jd) {
          var kd = this;
          if ("loaded" !== kd._state || kd._playLock) return kd._queue.push({
            event: "stop",
            action: function() {
              kd.stop(dd)
            }
          }), kd;
          for (var pd = kd._getSoundIds(dd), Nd = 0; Nd < pd.length; Nd++) {
            kd._clearTimer(pd[Nd]);
            var Wd = kd._soundById(pd[Nd]);
            Wd && (Wd._seek = Wd._start || 0, Wd._rateSeek = 0, Wd.YG = !0, Wd._ended = !0, kd._stopFade(pd[Nd]), Wd._node && (kd._webAudio ? Wd._node.bufferSource && ("undefined" === typeof Wd._node.bufferSource.stop ? Wd._node.bufferSource.noteOff(0) : Wd._node.bufferSource.stop(0), kd._cleanBuffer(Wd._node)) : isNaN(Wd._node.duration) && Wd._node.duration !== 1 / 0 || (Wd._node.currentTime = Wd._start || 0, Wd._node.pause(), Wd._node.duration === 1 / 0 && kd._clearSound(Wd._node))), Jd || kd._emit("stop", Wd._id))
          }
          return kd
        },
        mute: function(dd, Jd) {
          var kd = this;
          if ("loaded" !== kd._state || kd._playLock) return kd._queue.push({
            event: "mute",
            action: function() {
              kd.mute(dd, Jd)
            }
          }), kd;
          if ("undefined" === typeof Jd) {
            if ("boolean" !== typeof dd) return kd._muted;
            kd._muted = dd
          }
          for (var pd = kd._getSoundIds(Jd), Nd = 0; Nd < pd.length; Nd++) {
            var Pd = kd._soundById(pd[Nd]);
            Pd && (Pd._muted = dd, Pd._interval && kd._stopFade(Pd._id), kd._webAudio && Pd._node ? Pd._node.gain.setValueAtTime(dd ? 0 : Pd._volume, Wd.ctx.currentTime) : Pd._node && (Pd._node.muted = !!Wd._muted || dd), kd._emit("mute", Pd._id))
          }
          return kd
        },
        volume: function() {
          var dd, Jd, kd, pd = this,
            Nd = arguments;
          if (0 === Nd.length) return pd._volume;
          if (1 === Nd.length || 2 === Nd.length && "undefined" === typeof Nd[1] ? pd._getSoundIds().indexOf(Nd[0]) >= 0 ? Jd = parseInt(Nd[0], 10) : dd = parseFloat(Nd[0]) : Nd.length >= 2 && (dd = parseFloat(Nd[0]), Jd = parseInt(Nd[1], 10)), !("undefined" !== typeof dd && dd >= 0 && dd <= 1)) return (kd = Jd ? pd._soundById(Jd) : pd._sounds[0]) ? kd._volume : 0;
          if ("loaded" !== pd._state || pd._playLock) return pd._queue.push({
            event: "volume",
            action: function() {
              pd.volume.apply(pd, Nd)
            }
          }), pd;
          "undefined" === typeof Jd && (pd._volume = dd), Jd = pd._getSoundIds(Jd);
          for (var Pd = 0; Pd < Jd.length; Pd++)(kd = pd._soundById(Jd[Pd])) && (kd._volume = dd, Nd[2] || pd._stopFade(Jd[Pd]), pd._webAudio && kd._node && !kd._muted ? kd._node.gain.setValueAtTime(dd, Wd.ctx.currentTime) : kd._node && !kd._muted && (kd._node.volume = dd * Wd.volume()), pd._emit("volume", kd._id));
          return pd
        },
        fade: function(dd, Jd, kd, pd) {
          var Nd = this;
          if ("loaded" !== Nd._state || Nd._playLock) return Nd._queue.push({
            event: "fade",
            action: function() {
              Nd.fade(dd, Jd, kd, pd)
            }
          }), Nd;
          dd = Math.min(Math.max(0, parseFloat(dd)), 1), Jd = Math.min(Math.max(0, parseFloat(Jd)), 1), kd = parseFloat(kd), Nd.volume(dd, pd);
          for (var Pd = Nd._getSoundIds(pd), Zd = 0; Zd < Pd.length; Zd++) {
            var gd = Nd._soundById(Pd[Zd]);
            if (gd) {
              if (pd || Nd._stopFade(Pd[Zd]), Nd._webAudio && !gd._muted) {
                var Cd = Wd.ctx.currentTime,
                  Kd = Cd + kd / 1e3;
                gd._volume = dd, gd._node.gain.setValueAtTime(dd, Cd), gd._node.gain.linearRampToValueAtTime(Jd, Kd)
              }
              Nd._startFadeInterval(gd, dd, Jd, kd, Pd[Zd], "undefined" === typeof pd)
            }
          }
          return Nd
        },
        _startFadeInterval: function(dd, Jd, kd, pd, Nd, Wd) {
          var Pd = this,
            Zd = Jd,
            gd = kd - Jd,
            Cd = Math.abs(gd / .01),
            Kd = Math.max(4, Cd > 0 ? pd / Cd : pd),
            od = Date.now();
          dd._fadeTo = kd, dd._interval = setInterval((function() {
            var Nd = (Date.now() - od) / pd;
            od = Date.now(), Zd += gd * Nd, Zd = Math.round(100 * Zd) / 100, Zd = gd < 0 ? Math.max(kd, Zd) : Math.min(kd, Zd), Pd._webAudio ? dd._volume = Zd : Pd.volume(Zd, dd._id, !0), Wd && (Pd._volume = Zd), (kd < Jd && Zd <= kd || kd > Jd && Zd >= kd) && (clearInterval(dd._interval), dd._interval = null, dd._fadeTo = null, Pd.volume(kd, dd._id), Pd._emit("fade", dd._id))
          }), Kd)
        },
        _stopFade: function(dd) {
          var Jd = this,
            kd = Jd._soundById(dd);
          return kd && kd._interval && (Jd._webAudio && kd._node.gain.cancelScheduledValues(Wd.ctx.currentTime), clearInterval(kd._interval), kd._interval = null, Jd.volume(kd._fadeTo, dd), kd._fadeTo = null, Jd._emit("fade", dd)), Jd
        },
        loop: function() {
          var dd, Jd, kd, pd = this,
            Nd = arguments;
          if (0 === Nd.length) return pd._loop;
          if (1 === Nd.length) {
            if ("boolean" !== typeof Nd[0]) return !!(kd = pd._soundById(parseInt(Nd[0], 10))) && kd._loop;
            dd = Nd[0], pd._loop = dd
          } else 2 === Nd.length && (dd = Nd[0], Jd = parseInt(Nd[1], 10));
          for (var Wd = pd._getSoundIds(Jd), Pd = 0; Pd < Wd.length; Pd++)(kd = pd._soundById(Wd[Pd])) && (kd._loop = dd, pd._webAudio && kd._node && kd._node.bufferSource && (kd._node.bufferSource.loop = dd, dd && (kd._node.bufferSource.loopStart = kd._start || 0, kd._node.bufferSource.loopEnd = kd._stop, pd.playing(Wd[Pd]) && (pd.pause(Wd[Pd], !0), pd.play(Wd[Pd], !0)))));
          return pd
        },
        rate: function() {
          var dd, Jd, kd, pd = this,
            Nd = arguments;
          if (0 === Nd.length) Jd = pd._sounds[0]._id;
          else if (1 === Nd.length) {
            pd._getSoundIds().indexOf(Nd[0]) >= 0 ? Jd = parseInt(Nd[0], 10) : dd = parseFloat(Nd[0])
          } else 2 === Nd.length && (dd = parseFloat(Nd[0]), Jd = parseInt(Nd[1], 10));
          if ("number" !== typeof dd) return (kd = pd._soundById(Jd)) ? kd._rate : pd._rate;
          if ("loaded" !== pd._state || pd._playLock) return pd._queue.push({
            event: "rate",
            action: function() {
              pd.rate.apply(pd, Nd)
            }
          }), pd;
          "undefined" === typeof Jd && (pd._rate = dd), Jd = pd._getSoundIds(Jd);
          for (var Pd = 0; Pd < Jd.length; Pd++)
            if (kd = pd._soundById(Jd[Pd])) {
              pd.playing(Jd[Pd]) && (kd._rateSeek = pd.seek(Jd[Pd]), kd._playStart = pd._webAudio ? Wd.ctx.currentTime : kd._playStart), kd._rate = dd, pd._webAudio && kd._node && kd._node.bufferSource ? kd._node.bufferSource.playbackRate.setValueAtTime(dd, Wd.ctx.currentTime) : kd._node && (kd._node.playbackRate = dd);
              var Zd = pd.seek(Jd[Pd]),
                gd = 1e3 * ((pd._sprite[kd._sprite][0] + pd._sprite[kd._sprite][1]) / 1e3 - Zd) / Math.abs(kd._rate);
              !pd._endTimers[Jd[Pd]] && kd.YG || (pd._clearTimer(Jd[Pd]), pd._endTimers[Jd[Pd]] = setTimeout(pd._ended.bind(pd, kd), gd)), pd._emit("rate", kd._id)
            } return pd
        },
        seek: function() {
          var dd, Jd, kd = this,
            pd = arguments;
          if (0 === pd.length) kd._sounds.length && (Jd = kd._sounds[0]._id);
          else if (1 === pd.length) {
            kd._getSoundIds().indexOf(pd[0]) >= 0 ? Jd = parseInt(pd[0], 10) : kd._sounds.length && (Jd = kd._sounds[0]._id, dd = parseFloat(pd[0]))
          } else 2 === pd.length && (dd = parseFloat(pd[0]), Jd = parseInt(pd[1], 10));
          if ("undefined" === typeof Jd) return 0;
          if ("number" === typeof dd && ("loaded" !== kd._state || kd._playLock)) return kd._queue.push({
            event: "seek",
            action: function() {
              kd.seek.apply(kd, pd)
            }
          }), kd;
          var Nd = kd._soundById(Jd);
          if (Nd) {
            if (!("number" === typeof dd && dd >= 0)) {
              if (kd._webAudio) {
                var Pd = kd.playing(Jd) ? Wd.ctx.currentTime - Nd._playStart : 0,
                  Zd = Nd._rateSeek ? Nd._rateSeek - Nd._seek : 0;
                return Nd._seek + (Zd + Pd * Math.abs(Nd._rate))
              }
              return Nd._node.currentTime
            }
            var gd = kd.playing(Jd);
            gd && kd.pause(Jd, !0), Nd._seek = dd, Nd._ended = !1, kd._clearTimer(Jd), kd._webAudio || !Nd._node || isNaN(Nd._node.duration) || (Nd._node.currentTime = dd);
            var Cd = function() {
              gd && kd.play(Jd, !0), kd._emit("seek", Jd)
            };
            if (gd && !kd._webAudio) {
              var Kd = function() {
                kd._playLock ? setTimeout(Kd, 0) : Cd()
              };
              setTimeout(Kd, 0)
            } else Cd()
          }
          return kd
        },
        playing: function(dd) {
          var Jd = this;
          if ("number" === typeof dd) {
            var kd = Jd._soundById(dd);
            return !!kd && !kd.YG
          }
          for (var pd = 0; pd < Jd._sounds.length; pd++)
            if (!Jd._sounds[pd].YG) return !0;
          return !1
        },
        duration: function(dd) {
          var Jd = this,
            kd = Jd._duration,
            pd = Jd._soundById(dd);
          return pd && (kd = Jd._sprite[pd._sprite][1] / 1e3), kd
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var dd = this, Jd = dd._sounds, kd = 0; kd < Jd.length; kd++) Jd[kd].YG || dd.stop(Jd[kd]._id), dd._webAudio || (dd._clearSound(Jd[kd]._node), Jd[kd]._node.removeEventListener("error", Jd[kd]._errorFn, !1), Jd[kd]._node.removeEventListener(Wd._canPlayEvent, Jd[kd]._loadFn, !1), Jd[kd]._node.removeEventListener("ended", Jd[kd]._endFn, !1), Wd._releaseHtml5Audio(Jd[kd]._node)), delete Jd[kd]._node, dd._clearTimer(Jd[kd]._id);
          var pd = Wd._howls.indexOf(dd);
          pd >= 0 && Wd._howls.splice(pd, 1);
          var Nd = !0;
          for (kd = 0; kd < Wd._howls.length; kd++)
            if (Wd._howls[kd]._src === dd._src || dd._src.indexOf(Wd._howls[kd]._src) >= 0) {
              Nd = !1;
              break
            } return gd && Nd && delete gd[dd._src], Wd.noAudio = !1, dd._state = "unloaded", dd._sounds = [], dd = null, null
        },
        on: function(dd, Jd, kd, pd) {
          var Nd = this["_on" + dd];
          return "function" === typeof Jd && Nd.push(pd ? {
            id: kd,
            hQ: Jd,
            once: pd
          } : {
            id: kd,
            hQ: Jd
          }), this
        },
        off: function(dd, Jd, kd) {
          var pd = this,
            Nd = pd["_on" + dd],
            Wd = 0;
          if ("number" === typeof Jd && (kd = Jd, Jd = null), Jd || kd)
            for (Wd = 0; Wd < Nd.length; Wd++) {
              var Pd = kd === Nd[Wd].id;
              if (Jd === Nd[Wd].hQ && Pd || !Jd && Pd) {
                Nd.splice(Wd, 1);
                break
              }
            } else if (dd) pd["_on" + dd] = [];
            else {
              var Zd = Object.keys(pd);
              for (Wd = 0; Wd < Zd.length; Wd++) 0 === Zd[Wd].indexOf("_on") && Array.isArray(pd[Zd[Wd]]) && (pd[Zd[Wd]] = [])
            } return pd
        },
        once: function(dd, Jd, kd) {
          return this.on(dd, Jd, kd, 1), this
        },
        _emit: function(dd, Jd, kd) {
          for (var pd = this, Nd = pd["_on" + dd], Wd = Nd.length - 1; Wd >= 0; Wd--) Nd[Wd].id && Nd[Wd].id !== Jd && "load" !== dd || (setTimeout(function(dd) {
            dd.call(this, Jd, kd)
          }.bind(pd, Nd[Wd].hQ), 0), Nd[Wd].once && pd.off(dd, Nd[Wd].hQ, Nd[Wd].id));
          return pd._loadQueue(dd), pd
        },
        _loadQueue: function(dd) {
          var Jd = this;
          if (Jd._queue.length > 0) {
            var kd = Jd._queue[0];
            kd.event === dd && (Jd._queue.shift(), Jd._loadQueue()), dd || kd.action()
          }
          return Jd
        },
        _ended: function(dd) {
          var Jd = this,
            kd = dd._sprite;
          if (!Jd._webAudio && dd._node && !dd._node.paused && !dd._node.ended && dd._node.currentTime < dd._stop) return setTimeout(Jd._ended.bind(Jd, dd), 100), Jd;
          var pd = !(!dd._loop && !Jd._sprite[kd][2]);
          if (Jd._emit("end", dd._id), !Jd._webAudio && pd && Jd.stop(dd._id, !0).play(dd._id), Jd._webAudio && pd) {
            Jd._emit("play", dd._id), dd._seek = dd._start || 0, dd._rateSeek = 0, dd._playStart = Wd.ctx.currentTime;
            var Nd = 1e3 * (dd._stop - dd._start) / Math.abs(dd._rate);
            Jd._endTimers[dd._id] = setTimeout(Jd._ended.bind(Jd, dd), Nd)
          }
          return Jd._webAudio && !pd && (dd.YG = !0, dd._ended = !0, dd._seek = dd._start || 0, dd._rateSeek = 0, Jd._clearTimer(dd._id), Jd._cleanBuffer(dd._node), Wd._autoSuspend()), Jd._webAudio || pd || Jd.stop(dd._id, !0), Jd
        },
        _clearTimer: function(dd) {
          var Jd = this;
          if (Jd._endTimers[dd]) {
            if ("function" !== typeof Jd._endTimers[dd]) clearTimeout(Jd._endTimers[dd]);
            else {
              var kd = Jd._soundById(dd);
              kd && kd._node && kd._node.removeEventListener("ended", Jd._endTimers[dd], !1)
            }
            delete Jd._endTimers[dd]
          }
          return Jd
        },
        _soundById: function(dd) {
          for (var Jd = this, kd = 0; kd < Jd._sounds.length; kd++)
            if (dd === Jd._sounds[kd]._id) return Jd._sounds[kd];
          return null
        },
        _inactiveSound: function() {
          var dd = this;
          dd._drain();
          for (var Jd = 0; Jd < dd._sounds.length; Jd++)
            if (dd._sounds[Jd]._ended) return dd._sounds[Jd].reset();
          return new Zd(dd)
        },
        _drain: function() {
          var dd = this,
            Jd = dd._pool,
            kd = 0,
            pd = 0;
          if (!(dd._sounds.length < Jd)) {
            for (pd = 0; pd < dd._sounds.length; pd++) dd._sounds[pd]._ended && kd++;
            for (pd = dd._sounds.length - 1; pd >= 0; pd--) {
              if (kd <= Jd) return;
              dd._sounds[pd]._ended && (dd._webAudio && dd._sounds[pd]._node && dd._sounds[pd]._node.disconnect(0), dd._sounds.splice(pd, 1), kd--)
            }
          }
        },
        _getSoundIds: function(dd) {
          if ("undefined" === typeof dd) {
            for (var Jd = [], kd = 0; kd < this._sounds.length; kd++) Jd.push(this._sounds[kd]._id);
            return Jd
          }
          return [dd]
        },
        _refreshBuffer: function(dd) {
          return dd._node.bufferSource = Wd.ctx.createBufferSource(), dd._node.bufferSource.buffer = gd[this._src], dd._panner ? dd._node.bufferSource.connect(dd._panner) : dd._node.bufferSource.connect(dd._node), dd._node.bufferSource.loop = dd._loop, dd._loop && (dd._node.bufferSource.loopStart = dd._start || 0, dd._node.bufferSource.loopEnd = dd._stop || 0), dd._node.bufferSource.playbackRate.setValueAtTime(dd._rate, Wd.ctx.currentTime), this
        },
        _cleanBuffer: function(dd) {
          var Jd = Wd._navigator && Wd._navigator.vendor.indexOf("Apple") >= 0;
          if (Wd._scratchBuffer && dd.bufferSource && (dd.bufferSource.onended = null, dd.bufferSource.disconnect(0), Jd)) try {
            dd.bufferSource.buffer = Wd._scratchBuffer
          } catch (kd) {}
          return dd.bufferSource = null, this
        },
        _clearSound: function(dd) {
          /MSIE |Trident\//.test(Wd._navigator && Wd._navigator.userAgent) || (dd.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var Zd = function(dd) {
        this._parent = dd, this.init()
      };
      Zd.prototype = {
        init: function() {
          var dd = this,
            Jd = dd._parent;
          return dd._muted = Jd._muted, dd._loop = Jd._loop, dd._volume = Jd._volume, dd._rate = Jd._rate, dd._seek = 0, dd.YG = !0, dd._ended = !0, dd._sprite = "__default", dd._id = ++Wd._counter, Jd._sounds.push(dd), dd.create(), dd
        },
        create: function() {
          var dd = this,
            Jd = dd._parent,
            kd = Wd._muted || dd._muted || dd._parent._muted ? 0 : dd._volume;
          return Jd._webAudio ? (dd._node = "undefined" === typeof Wd.ctx.createGain ? Wd.ctx.createGainNode() : Wd.ctx.createGain(), dd._node.gain.setValueAtTime(kd, Wd.ctx.currentTime), dd._node.paused = !0, dd._node.connect(Wd.masterGain)) : Wd.noAudio || (dd._node = Wd._obtainHtml5Audio(), dd._errorFn = dd._errorListener.bind(dd), dd._node.addEventListener("error", dd._errorFn, !1), dd._loadFn = dd._loadListener.bind(dd), dd._node.addEventListener(Wd._canPlayEvent, dd._loadFn, !1), dd._endFn = dd._endListener.bind(dd), dd._node.addEventListener("ended", dd._endFn, !1), dd._node.src = Jd._src, dd._node.preload = !0 === Jd._preload ? "auto" : Jd._preload, dd._node.volume = kd * Wd.volume(), dd._node.load()), dd
        },
        reset: function() {
          var dd = this,
            Jd = dd._parent;
          return dd._muted = Jd._muted, dd._loop = Jd._loop, dd._volume = Jd._volume, dd._rate = Jd._rate, dd._seek = 0, dd._rateSeek = 0, dd.YG = !0, dd._ended = !0, dd._sprite = "__default", dd._id = ++Wd._counter, dd
        },
        _errorListener: function() {
          var dd = this;
          dd._parent._emit("loaderror", dd._id, dd._node.error ? dd._node.error.code : 0), dd._node.removeEventListener("error", dd._errorFn, !1)
        },
        _loadListener: function() {
          var dd = this,
            Jd = dd._parent;
          Jd._duration = Math.ceil(10 * dd._node.duration) / 10, 0 === Object.keys(Jd._sprite).length && (Jd._sprite = {
            __default: [0, 1e3 * Jd._duration]
          }), "loaded" !== Jd._state && (Jd._state = "loaded", Jd._emit("load"), Jd._loadQueue()), dd._node.removeEventListener(Wd._canPlayEvent, dd._loadFn, !1)
        },
        _endListener: function() {
          var dd = this,
            Jd = dd._parent;
          Jd._duration === 1 / 0 && (Jd._duration = Math.ceil(10 * dd._node.duration) / 10, Jd._sprite.__default[1] === 1 / 0 && (Jd._sprite.__default[1] = 1e3 * Jd._duration), Jd._ended(dd)), dd._node.removeEventListener("ended", dd._endFn, !1)
        }
      };
      var gd = {},
        Cd = function(dd) {
          var Jd = dd._src;
          if (gd[Jd]) return dd._duration = gd[Jd].duration, void ld(dd);
          if (/^data:[^;]+;base64,/.test(Jd)) {
            for (var kd = atob(Jd.split(",")[1]), pd = new Uint8Array(kd.length), Nd = 0; Nd < kd.length; ++Nd) pd[Nd] = kd.charCodeAt(Nd);
            od(pd.buffer, dd)
          } else {
            var Wd = new XMLHttpRequest;
            Wd.open(dd._xhr.method, Jd, !0), Wd.withCredentials = dd._xhr.withCredentials, Wd.responseType = "arraybuffer", dd._xhr.headers && Object.keys(dd._xhr.headers).forEach((function(Jd) {
              Wd.setRequestHeader(Jd, dd._xhr.headers[Jd])
            })), Wd.onload = function() {
              var Jd = (Wd.status + "")[0];
              "0" === Jd || "2" === Jd || "3" === Jd ? od(Wd.response, dd) : dd._emit("loaderror", null, "Failed loading audio file with status: " + Wd.status + ".")
            }, Wd.onerror = function() {
              dd._webAudio && (dd._html5 = !0, dd._webAudio = !1, dd._sounds = [], delete gd[Jd], dd.load())
            }, Kd(Wd)
          }
        },
        Kd = function(dd) {
          try {
            dd.send()
          } catch (Jd) {
            dd.onerror()
          }
        },
        od = function(dd, Jd) {
          var kd = function() {
              Jd._emit("loaderror", null, "Decoding audio data failed.")
            },
            pd = function(dd) {
              dd && Jd._sounds.length > 0 ? (gd[Jd._src] = dd, ld(Jd, dd)) : kd()
            };
          "undefined" !== typeof Promise && 1 === Wd.ctx.decodeAudioData.length ? Wd.ctx.decodeAudioData(dd).then(pd).catch(kd) : Wd.ctx.decodeAudioData(dd, pd, kd)
        },
        ld = function(dd, Jd) {
          Jd && !dd._duration && (dd._duration = Jd.duration), 0 === Object.keys(dd._sprite).length && (dd._sprite = {
            __default: [0, 1e3 * dd._duration]
          }), "loaded" !== dd._state && (dd._state = "loaded", dd._emit("load"), dd._loadQueue())
        },
        Qd = function() {
          if (Wd.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Wd.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Wd.ctx = new webkitAudioContext : Wd.usingWebAudio = !1
            } catch (Nd) {
              Wd.usingWebAudio = !1
            }
            Wd.ctx || (Wd.usingWebAudio = !1);
            var dd = /iP(hone|od|ad)/.test(Wd._navigator && Wd._navigator.platform),
              Jd = Wd._navigator && Wd._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              kd = Jd ? parseInt(Jd[1], 10) : null;
            if (dd && kd && kd < 9) {
              var pd = /safari/.test(Wd._navigator && Wd._navigator.userAgent.toLowerCase());
              Wd._navigator && !pd && (Wd.usingWebAudio = !1)
            }
            Wd.usingWebAudio && (Wd.masterGain = "undefined" === typeof Wd.ctx.createGain ? Wd.ctx.createGainNode() : Wd.ctx.createGain(), Wd.masterGain.gain.setValueAtTime(Wd._muted ? 0 : Wd._volume, Wd.ctx.currentTime), Wd.masterGain.connect(Wd.ctx.destination)), Wd._setup()
          }
        };
      void 0 === (pd = function() {
        return {
          Howler: Wd,
          Howl: Pd
        }
      }.apply(Jd, [])) || (dd.exports = pd), Jd.Howler = Wd, Jd.Howl = Pd, "undefined" !== typeof kd.g ? (kd.g.HowlerGlobal = Nd, kd.g.Howler = Wd, kd.g.Howl = Pd, kd.g.Sound = Zd) : "undefined" !== typeof window && (window.HowlerGlobal = Nd, window.Howler = Wd, window.Howl = Pd, window.Sound = Zd)
    }(),
    function() {
      var dd;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(dd) {
        var Jd = this;
        if (!Jd.ctx || !Jd.ctx.listener) return Jd;
        for (var kd = Jd._howls.length - 1; kd >= 0; kd--) Jd._howls[kd].stereo(dd);
        return Jd
      }, HowlerGlobal.prototype.pos = function(dd, Jd, kd) {
        var pd = this;
        return pd.ctx && pd.ctx.listener ? (Jd = "number" !== typeof Jd ? pd._pos[1] : Jd, kd = "number" !== typeof kd ? pd._pos[2] : kd, "number" !== typeof dd ? pd._pos : (pd._pos = [dd, Jd, kd], "undefined" !== typeof pd.ctx.listener.positionX ? (pd.ctx.listener.positionX.setTargetAtTime(pd._pos[0], Howler.ctx.currentTime, .1), pd.ctx.listener.positionY.setTargetAtTime(pd._pos[1], Howler.ctx.currentTime, .1), pd.ctx.listener.positionZ.setTargetAtTime(pd._pos[2], Howler.ctx.currentTime, .1)) : pd.ctx.listener.setPosition(pd._pos[0], pd._pos[1], pd._pos[2]), pd)) : pd
      }, HowlerGlobal.prototype.orientation = function(dd, Jd, kd, pd, Nd, Wd) {
        var Pd = this;
        if (!Pd.ctx || !Pd.ctx.listener) return Pd;
        var Zd = Pd._orientation;
        return Jd = "number" !== typeof Jd ? Zd[1] : Jd, kd = "number" !== typeof kd ? Zd[2] : kd, pd = "number" !== typeof pd ? Zd[3] : pd, Nd = "number" !== typeof Nd ? Zd[4] : Nd, Wd = "number" !== typeof Wd ? Zd[5] : Wd, "number" !== typeof dd ? Zd : (Pd._orientation = [dd, Jd, kd, pd, Nd, Wd], "undefined" !== typeof Pd.ctx.listener.forwardX ? (Pd.ctx.listener.forwardX.setTargetAtTime(dd, Howler.ctx.currentTime, .1), Pd.ctx.listener.forwardY.setTargetAtTime(Jd, Howler.ctx.currentTime, .1), Pd.ctx.listener.forwardZ.setTargetAtTime(kd, Howler.ctx.currentTime, .1), Pd.ctx.listener.upX.setTargetAtTime(pd, Howler.ctx.currentTime, .1), Pd.ctx.listener.upY.setTargetAtTime(Nd, Howler.ctx.currentTime, .1), Pd.ctx.listener.upZ.setTargetAtTime(Wd, Howler.ctx.currentTime, .1)) : Pd.ctx.listener.setOrientation(dd, Jd, kd, pd, Nd, Wd), Pd)
      }, Howl.prototype.init = (dd = Howl.prototype.init, function(Jd) {
        var kd = this;
        return kd._orientation = Jd.orientation || [1, 0, 0], kd._stereo = Jd.stereo || null, kd._pos = Jd.pos || null, kd._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Jd.coneInnerAngle ? Jd.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Jd.coneOuterAngle ? Jd.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Jd.coneOuterGain ? Jd.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Jd.distanceModel ? Jd.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Jd.maxDistance ? Jd.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Jd.panningModel ? Jd.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Jd.refDistance ? Jd.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Jd.rolloffFactor ? Jd.rolloffFactor : 1
        }, kd._onstereo = Jd.onstereo ? [{
          hQ: Jd.onstereo
        }] : [], kd._onpos = Jd.onpos ? [{
          hQ: Jd.onpos
        }] : [], kd._onorientation = Jd.onorientation ? [{
          hQ: Jd.onorientation
        }] : [], dd.call(this, Jd)
      }), Howl.prototype.stereo = function(dd, kd) {
        var pd = this;
        if (!pd._webAudio) return pd;
        if ("loaded" !== pd._state) return pd._queue.push({
          event: "stereo",
          action: function() {
            pd.stereo(dd, kd)
          }
        }), pd;
        var Nd = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof kd) {
          if ("number" !== typeof dd) return pd._stereo;
          pd._stereo = dd, pd._pos = [dd, 0, 0]
        }
        for (var Wd = pd._getSoundIds(kd), Pd = 0; Pd < Wd.length; Pd++) {
          var Zd = pd._soundById(Wd[Pd]);
          if (Zd) {
            if ("number" !== typeof dd) return Zd._stereo;
            Zd._stereo = dd, Zd._pos = [dd, 0, 0], Zd._node && (Zd._pannerAttr.panningModel = "equalpower", Zd._panner && Zd._panner.pan || Jd(Zd, Nd), "spatial" === Nd ? "undefined" !== typeof Zd._panner.positionX ? (Zd._panner.positionX.setValueAtTime(dd, Howler.ctx.currentTime), Zd._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), Zd._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : Zd._panner.setPosition(dd, 0, 0) : Zd._panner.pan.setValueAtTime(dd, Howler.ctx.currentTime)), pd._emit("stereo", Zd._id)
          }
        }
        return pd
      }, Howl.prototype.pos = function(dd, kd, pd, Nd) {
        var Wd = this;
        if (!Wd._webAudio) return Wd;
        if ("loaded" !== Wd._state) return Wd._queue.push({
          event: "pos",
          action: function() {
            Wd.pos(dd, kd, pd, Nd)
          }
        }), Wd;
        if (kd = "number" !== typeof kd ? 0 : kd, pd = "number" !== typeof pd ? -.5 : pd, "undefined" === typeof Nd) {
          if ("number" !== typeof dd) return Wd._pos;
          Wd._pos = [dd, kd, pd]
        }
        for (var Pd = Wd._getSoundIds(Nd), Zd = 0; Zd < Pd.length; Zd++) {
          var gd = Wd._soundById(Pd[Zd]);
          if (gd) {
            if ("number" !== typeof dd) return gd._pos;
            gd._pos = [dd, kd, pd], gd._node && (gd._panner && !gd._panner.pan || Jd(gd, "spatial"), "undefined" !== typeof gd._panner.positionX ? (gd._panner.positionX.setValueAtTime(dd, Howler.ctx.currentTime), gd._panner.positionY.setValueAtTime(kd, Howler.ctx.currentTime), gd._panner.positionZ.setValueAtTime(pd, Howler.ctx.currentTime)) : gd._panner.setPosition(dd, kd, pd)), Wd._emit("pos", gd._id)
          }
        }
        return Wd
      }, Howl.prototype.orientation = function(dd, kd, pd, Nd) {
        var Wd = this;
        if (!Wd._webAudio) return Wd;
        if ("loaded" !== Wd._state) return Wd._queue.push({
          event: "orientation",
          action: function() {
            Wd.orientation(dd, kd, pd, Nd)
          }
        }), Wd;
        if (kd = "number" !== typeof kd ? Wd._orientation[1] : kd, pd = "number" !== typeof pd ? Wd._orientation[2] : pd, "undefined" === typeof Nd) {
          if ("number" !== typeof dd) return Wd._orientation;
          Wd._orientation = [dd, kd, pd]
        }
        for (var Pd = Wd._getSoundIds(Nd), Zd = 0; Zd < Pd.length; Zd++) {
          var gd = Wd._soundById(Pd[Zd]);
          if (gd) {
            if ("number" !== typeof dd) return gd._orientation;
            gd._orientation = [dd, kd, pd], gd._node && (gd._panner || (gd._pos || (gd._pos = Wd._pos || [0, 0, -.5]), Jd(gd, "spatial")), "undefined" !== typeof gd._panner.orientationX ? (gd._panner.orientationX.setValueAtTime(dd, Howler.ctx.currentTime), gd._panner.orientationY.setValueAtTime(kd, Howler.ctx.currentTime), gd._panner.orientationZ.setValueAtTime(pd, Howler.ctx.currentTime)) : gd._panner.setOrientation(dd, kd, pd)), Wd._emit("orientation", gd._id)
          }
        }
        return Wd
      }, Howl.prototype.pannerAttr = function() {
        var dd, kd, pd, Nd = this,
          Wd = arguments;
        if (!Nd._webAudio) return Nd;
        if (0 === Wd.length) return Nd._pannerAttr;
        if (1 === Wd.length) {
          if ("object" !== typeof Wd[0]) return (pd = Nd._soundById(parseInt(Wd[0], 10))) ? pd._pannerAttr : Nd._pannerAttr;
          dd = Wd[0], "undefined" === typeof kd && (dd.pannerAttr || (dd.pannerAttr = {
            coneInnerAngle: dd.coneInnerAngle,
            coneOuterAngle: dd.coneOuterAngle,
            coneOuterGain: dd.coneOuterGain,
            distanceModel: dd.distanceModel,
            maxDistance: dd.maxDistance,
            refDistance: dd.refDistance,
            rolloffFactor: dd.rolloffFactor,
            panningModel: dd.panningModel
          }), Nd._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof dd.pannerAttr.coneInnerAngle ? dd.pannerAttr.coneInnerAngle : Nd._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof dd.pannerAttr.coneOuterAngle ? dd.pannerAttr.coneOuterAngle : Nd._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof dd.pannerAttr.coneOuterGain ? dd.pannerAttr.coneOuterGain : Nd._coneOuterGain,
            distanceModel: "undefined" !== typeof dd.pannerAttr.distanceModel ? dd.pannerAttr.distanceModel : Nd._distanceModel,
            maxDistance: "undefined" !== typeof dd.pannerAttr.maxDistance ? dd.pannerAttr.maxDistance : Nd._maxDistance,
            refDistance: "undefined" !== typeof dd.pannerAttr.refDistance ? dd.pannerAttr.refDistance : Nd._refDistance,
            rolloffFactor: "undefined" !== typeof dd.pannerAttr.rolloffFactor ? dd.pannerAttr.rolloffFactor : Nd._rolloffFactor,
            panningModel: "undefined" !== typeof dd.pannerAttr.panningModel ? dd.pannerAttr.panningModel : Nd._panningModel
          })
        } else 2 === Wd.length && (dd = Wd[0], kd = parseInt(Wd[1], 10));
        for (var Pd = Nd._getSoundIds(kd), Zd = 0; Zd < Pd.length; Zd++)
          if (pd = Nd._soundById(Pd[Zd])) {
            var gd = pd._pannerAttr;
            gd = {
              coneInnerAngle: "undefined" !== typeof dd.coneInnerAngle ? dd.coneInnerAngle : gd.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof dd.coneOuterAngle ? dd.coneOuterAngle : gd.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof dd.coneOuterGain ? dd.coneOuterGain : gd.coneOuterGain,
              distanceModel: "undefined" !== typeof dd.distanceModel ? dd.distanceModel : gd.distanceModel,
              maxDistance: "undefined" !== typeof dd.maxDistance ? dd.maxDistance : gd.maxDistance,
              refDistance: "undefined" !== typeof dd.refDistance ? dd.refDistance : gd.refDistance,
              rolloffFactor: "undefined" !== typeof dd.rolloffFactor ? dd.rolloffFactor : gd.rolloffFactor,
              panningModel: "undefined" !== typeof dd.panningModel ? dd.panningModel : gd.panningModel
            };
            var Cd = pd._panner;
            Cd ? (Cd.coneInnerAngle = gd.coneInnerAngle, Cd.coneOuterAngle = gd.coneOuterAngle, Cd.coneOuterGain = gd.coneOuterGain, Cd.distanceModel = gd.distanceModel, Cd.maxDistance = gd.maxDistance, Cd.refDistance = gd.refDistance, Cd.rolloffFactor = gd.rolloffFactor, Cd.panningModel = gd.panningModel) : (pd._pos || (pd._pos = Nd._pos || [0, 0, -.5]), Jd(pd, "spatial"))
          } return Nd
      }, Sound.prototype.init = function(dd) {
        return function() {
          var Jd = this,
            kd = Jd._parent;
          Jd._orientation = kd._orientation, Jd._stereo = kd._stereo, Jd._pos = kd._pos, Jd._pannerAttr = kd._pannerAttr, dd.call(this), Jd._stereo ? kd.stereo(Jd._stereo) : Jd._pos && kd.pos(Jd._pos[0], Jd._pos[1], Jd._pos[2], Jd._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(dd) {
        return function() {
          var Jd = this,
            kd = Jd._parent;
          return Jd._orientation = kd._orientation, Jd._stereo = kd._stereo, Jd._pos = kd._pos, Jd._pannerAttr = kd._pannerAttr, Jd._stereo ? kd.stereo(Jd._stereo) : Jd._pos ? kd.pos(Jd._pos[0], Jd._pos[1], Jd._pos[2], Jd._id) : Jd._panner && (Jd._panner.disconnect(0), Jd._panner = void 0, kd._refreshBuffer(Jd)), dd.call(this)
        }
      }(Sound.prototype.reset);
      var Jd = function(dd, Jd) {
        "spatial" === (Jd = Jd || "spatial") ? (dd._panner = Howler.ctx.createPanner(), dd._panner.coneInnerAngle = dd._pannerAttr.coneInnerAngle, dd._panner.coneOuterAngle = dd._pannerAttr.coneOuterAngle, dd._panner.coneOuterGain = dd._pannerAttr.coneOuterGain, dd._panner.distanceModel = dd._pannerAttr.distanceModel, dd._panner.maxDistance = dd._pannerAttr.maxDistance, dd._panner.refDistance = dd._pannerAttr.refDistance, dd._panner.rolloffFactor = dd._pannerAttr.rolloffFactor, dd._panner.panningModel = dd._pannerAttr.panningModel, "undefined" !== typeof dd._panner.positionX ? (dd._panner.positionX.setValueAtTime(dd._pos[0], Howler.ctx.currentTime), dd._panner.positionY.setValueAtTime(dd._pos[1], Howler.ctx.currentTime), dd._panner.positionZ.setValueAtTime(dd._pos[2], Howler.ctx.currentTime)) : dd._panner.setPosition(dd._pos[0], dd._pos[1], dd._pos[2]), "undefined" !== typeof dd._panner.orientationX ? (dd._panner.orientationX.setValueAtTime(dd._orientation[0], Howler.ctx.currentTime), dd._panner.orientationY.setValueAtTime(dd._orientation[1], Howler.ctx.currentTime), dd._panner.orientationZ.setValueAtTime(dd._orientation[2], Howler.ctx.currentTime)) : dd._panner.setOrientation(dd._orientation[0], dd._orientation[1], dd._orientation[2])) : (dd._panner = Howler.ctx.createStereoPanner(), dd._panner.pan.setValueAtTime(dd._stereo, Howler.ctx.currentTime)), dd._panner.connect(dd._node), dd.YG || dd._parent.pause(dd._id, !0).play(dd._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);