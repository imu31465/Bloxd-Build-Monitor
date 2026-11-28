/*! For license information please see yteou.113.1b1a582e.chunk.js.LICENSE.txt */
export const id = 113;
export const ids = [113];
export const modules = {
  5650: (dd, Od, md) => {
    var Wd;
    ! function() {
      var Fd = function() {
        this.init()
      };
      Fd.prototype = {
        init: function() {
          var dd = this || Rd;
          return dd._counter = 1e3, dd._html5AudioPool = [], dd.html5PoolSize = 10, dd._codecs = {}, dd._howls = [], dd._muted = !1, dd._volume = 1, dd._canPlayEvent = "canplaythrough", dd._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, dd.masterGain = null, dd.noAudio = !1, dd.usingWebAudio = !0, dd.autoSuspend = !0, dd.ctx = null, dd.autoUnlock = !0, dd._setup(), dd
        },
        volume: function(dd) {
          var Od = this || Rd;
          if (dd = parseFloat(dd), Od.ctx || Nd(), "undefined" !== typeof dd && dd >= 0 && dd <= 1) {
            if (Od._volume = dd, Od._muted) return Od;
            Od.usingWebAudio && Od.masterGain.gain.setValueAtTime(dd, Rd.ctx.currentTime);
            for (var md = 0; md < Od._howls.length; md++)
              if (!Od._howls[md]._webAudio)
                for (var Wd = Od._howls[md]._getSoundIds(), Fd = 0; Fd < Wd.length; Fd++) {
                  var Xd = Od._howls[md]._soundById(Wd[Fd]);
                  Xd && Xd._node && (Xd._node.volume = Xd._volume * dd)
                }
            return Od
          }
          return Od._volume
        },
        mute: function(dd) {
          var Od = this || Rd;
          Od.ctx || Nd(), Od._muted = dd, Od.usingWebAudio && Od.masterGain.gain.setValueAtTime(dd ? 0 : Od._volume, Rd.ctx.currentTime);
          for (var md = 0; md < Od._howls.length; md++)
            if (!Od._howls[md]._webAudio)
              for (var Wd = Od._howls[md]._getSoundIds(), Fd = 0; Fd < Wd.length; Fd++) {
                var Xd = Od._howls[md]._soundById(Wd[Fd]);
                Xd && Xd._node && (Xd._node.muted = !!dd || Xd._muted)
              }
          return Od
        },
        stop: function() {
          for (var dd = this || Rd, Od = 0; Od < dd._howls.length; Od++) dd._howls[Od].stop();
          return dd
        },
        unload: function() {
          for (var dd = this || Rd, Od = dd._howls.length - 1; Od >= 0; Od--) dd._howls[Od].unload();
          return dd.usingWebAudio && dd.ctx && "undefined" !== typeof dd.ctx.close && (dd.ctx.close(), dd.ctx = null, Nd()), dd
        },
        codecs: function(dd) {
          return (this || Rd)._codecs[dd.replace(/^x-/, "")]
        },
        _setup: function() {
          var dd = this || Rd;
          if (dd.state = dd.ctx && dd.ctx.state || "suspended", dd._autoSuspend(), !dd.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (dd._canPlayEvent = "canplay")
            } catch (Od) {
              dd.noAudio = !0
            } else dd.noAudio = !0;
          try {
            (new Audio).muted && (dd.noAudio = !0)
          } catch (Od) {}
          return dd.noAudio || dd._setupCodecs(), dd
        },
        _setupCodecs: function() {
          var dd = this || Rd,
            Od = null;
          try {
            Od = "undefined" !== typeof Audio ? new Audio : null
          } catch (Qd) {
            return dd
          }
          if (!Od || "function" !== typeof Od.canPlayType) return dd;
          var md = Od.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Wd = dd._navigator ? dd._navigator.userAgent : "",
            Fd = Wd.match(/OPR\/([0-6].)/g),
            Xd = Fd && parseInt(Fd[0].split("/")[1], 10) < 33,
            Kd = -1 !== Wd.indexOf("Safari") && -1 === Wd.indexOf("Chrome"),
            hd = Wd.match(/Version\/(.*?) /),
            vd = Kd && hd && parseInt(hd[1], 10) < 15;
          return dd._codecs = {
            mp3: !(Xd || !md && !Od.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!md,
            opus: !!Od.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Od.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Od.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Od.canPlayType('audio/wav; codecs="1"') || Od.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Od.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Od.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Od.canPlayType("audio/x-m4a;") || Od.canPlayType("audio/m4a;") || Od.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Od.canPlayType("audio/x-m4b;") || Od.canPlayType("audio/m4b;") || Od.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Od.canPlayType("audio/x-mp4;") || Od.canPlayType("audio/mp4;") || Od.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(vd || !Od.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(vd || !Od.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Od.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Od.canPlayType("audio/x-flac;") || Od.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, dd
        },
        _unlockAudio: function() {
          var dd = this || Rd;
          if (!dd._audioUnlocked && dd.ctx) {
            dd._audioUnlocked = !1, dd.autoUnlock = !1, dd._mobileUnloaded || 44100 === dd.ctx.sampleRate || (dd._mobileUnloaded = !0, dd.unload()), dd._scratchBuffer = dd.ctx.createBuffer(1, 1, 22050);
            var Od = function(md) {
              for (; dd._html5AudioPool.length < dd.html5PoolSize;) try {
                var Wd = new Audio;
                Wd._unlocked = !0, dd._releaseHtml5Audio(Wd)
              } catch (md) {
                dd.noAudio = !0;
                break
              }
              for (var Fd = 0; Fd < dd._howls.length; Fd++)
                if (!dd._howls[Fd]._webAudio)
                  for (var Rd = dd._howls[Fd]._getSoundIds(), Xd = 0; Xd < Rd.length; Xd++) {
                    var Kd = dd._howls[Fd]._soundById(Rd[Xd]);
                    Kd && Kd._node && !Kd._node._unlocked && (Kd._node._unlocked = !0, Kd._node.load())
                  }
              dd._autoResume();
              var hd = dd.ctx.createBufferSource();
              hd.buffer = dd._scratchBuffer, hd.connect(dd.ctx.destination), "undefined" === typeof hd.start ? hd.noteOn(0) : hd.start(0), "function" === typeof dd.ctx.resume && dd.ctx.resume(), hd.onended = function() {
                hd.disconnect(0), dd._audioUnlocked = !0, document.removeEventListener("touchstart", Od, !0), document.removeEventListener("touchend", Od, !0), document.removeEventListener("click", Od, !0), document.removeEventListener("keydown", Od, !0);
                for (var md = 0; md < dd._howls.length; md++) dd._howls[md]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Od, !0), document.addEventListener("touchend", Od, !0), document.addEventListener("click", Od, !0), document.addEventListener("keydown", Od, !0), dd
          }
        },
        _obtainHtml5Audio: function() {
          var dd = this || Rd;
          if (dd._html5AudioPool.length) return dd._html5AudioPool.pop();
          var Od = (new Audio).play();
          return Od && "undefined" !== typeof Promise && (Od instanceof Promise || "function" === typeof Od.then) && Od.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(dd) {
          var Od = this || Rd;
          return dd._unlocked && Od._html5AudioPool.push(dd), Od
        },
        _autoSuspend: function() {
          var dd = this;
          if (dd.autoSuspend && dd.ctx && "undefined" !== typeof dd.ctx.suspend && Rd.usingWebAudio) {
            for (var Od = 0; Od < dd._howls.length; Od++)
              if (dd._howls[Od]._webAudio)
                for (var md = 0; md < dd._howls[Od]._sounds.length; md++)
                  if (!dd._howls[Od]._sounds[md].wt) return dd;
            return dd._suspendTimer && clearTimeout(dd._suspendTimer), dd._suspendTimer = setTimeout((function() {
              if (dd.autoSuspend) {
                dd._suspendTimer = null, dd.state = "suspending";
                var Od = function() {
                  dd.state = "suspended", dd._resumeAfterSuspend && (delete dd._resumeAfterSuspend, dd._autoResume())
                };
                dd.ctx.suspend().then(Od, Od)
              }
            }), 3e4), dd
          }
        },
        _autoResume: function() {
          var dd = this;
          if (dd.ctx && "undefined" !== typeof dd.ctx.resume && Rd.usingWebAudio) return "running" === dd.state && "interrupted" !== dd.ctx.state && dd._suspendTimer ? (clearTimeout(dd._suspendTimer), dd._suspendTimer = null) : "suspended" === dd.state || "running" === dd.state && "interrupted" === dd.ctx.state ? (dd.ctx.resume().then((function() {
            dd.state = "running";
            for (var Od = 0; Od < dd._howls.length; Od++) dd._howls[Od]._emit("resume")
          })), dd._suspendTimer && (clearTimeout(dd._suspendTimer), dd._suspendTimer = null)) : "suspending" === dd.state && (dd._resumeAfterSuspend = !0), dd
        }
      };
      var Rd = new Fd,
        Xd = function(dd) {
          dd.src && 0 !== dd.src.length ? this.init(dd) : console.error("An array of source files must be passed with any new Howl.")
        };
      Xd.prototype = {
        init: function(dd) {
          var Od = this;
          return Rd.ctx || Nd(), Od._autoplay = dd.autoplay || !1, Od._format = "string" !== typeof dd.format ? dd.format : [dd.format], Od._html5 = dd.html5 || !1, Od._muted = dd.mute || !1, Od._loop = dd.loop || !1, Od._pool = dd.pool || 5, Od._preload = "boolean" !== typeof dd.preload && "metadata" !== dd.preload || dd.preload, Od._rate = dd.rate || 1, Od._sprite = dd.sprite || {}, Od._src = "string" !== typeof dd.src ? dd.src : [dd.src], Od._volume = void 0 !== dd.volume ? dd.volume : 1, Od._xhr = {
            method: dd.xhr && dd.xhr.method ? dd.xhr.method : "GET",
            headers: dd.xhr && dd.xhr.headers ? dd.xhr.headers : null,
            withCredentials: !(!dd.xhr || !dd.xhr.withCredentials) && dd.xhr.withCredentials
          }, Od._duration = 0, Od._state = "unloaded", Od._sounds = [], Od._endTimers = {}, Od._queue = [], Od._playLock = !1, Od._onend = dd.onend ? [{
            Ot: dd.onend
          }] : [], Od._onfade = dd.onfade ? [{
            Ot: dd.onfade
          }] : [], Od._onload = dd.onload ? [{
            Ot: dd.onload
          }] : [], Od._onloaderror = dd.onloaderror ? [{
            Ot: dd.onloaderror
          }] : [], Od._onplayerror = dd.onplayerror ? [{
            Ot: dd.onplayerror
          }] : [], Od._onpause = dd.onpause ? [{
            Ot: dd.onpause
          }] : [], Od._onplay = dd.onplay ? [{
            Ot: dd.onplay
          }] : [], Od._onstop = dd.onstop ? [{
            Ot: dd.onstop
          }] : [], Od._onmute = dd.onmute ? [{
            Ot: dd.onmute
          }] : [], Od._onvolume = dd.onvolume ? [{
            Ot: dd.onvolume
          }] : [], Od._onrate = dd.onrate ? [{
            Ot: dd.onrate
          }] : [], Od._onseek = dd.onseek ? [{
            Ot: dd.onseek
          }] : [], Od._onunlock = dd.onunlock ? [{
            Ot: dd.onunlock
          }] : [], Od._onresume = [], Od._webAudio = Rd.usingWebAudio && !Od._html5, "undefined" !== typeof Rd.ctx && Rd.ctx && Rd.autoUnlock && Rd._unlockAudio(), Rd._howls.push(Od), Od._autoplay && Od._queue.push({
            event: "play",
            action: function() {
              Od.play()
            }
          }), Od._preload && "none" !== Od._preload && Od.load(), Od
        },
        load: function() {
          var dd = this,
            Od = null;
          if (Rd.noAudio) dd._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof dd._src && (dd._src = [dd._src]);
            for (var md = 0; md < dd._src.length; md++) {
              var Wd, Fd;
              if (dd._format && dd._format[md]) Wd = dd._format[md];
              else {
                if ("string" !== typeof(Fd = dd._src[md])) {
                  dd._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Wd = /^data:audio\/([^;,]+);/i.exec(Fd)) || (Wd = /\.([^.]+)$/.exec(Fd.split("?", 1)[0])), Wd && (Wd = Wd[1].toLowerCase())
              }
              if (Wd || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Wd && Rd.codecs(Wd)) {
                Od = dd._src[md];
                break
              }
            }
            if (Od) return dd._src = Od, dd._state = "loading", "https:" === window.location.protocol && "http:" === Od.slice(0, 5) && (dd._html5 = !0, dd._webAudio = !1), new Kd(dd), dd._webAudio && vd(dd), dd;
            dd._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(dd, Od) {
          var md = this,
            Wd = null;
          if ("number" === typeof dd) Wd = dd, dd = null;
          else {
            if ("string" === typeof dd && "loaded" === md._state && !md._sprite[dd]) return null;
            if ("undefined" === typeof dd && (dd = "__default", !md._playLock)) {
              for (var Fd = 0, Xd = 0; Xd < md._sounds.length; Xd++) md._sounds[Xd].wt && !md._sounds[Xd]._ended && (Fd++, Wd = md._sounds[Xd]._id);
              1 === Fd ? dd = null : Wd = null
            }
          }
          var Kd = Wd ? md._soundById(Wd) : md._inactiveSound();
          if (!Kd) return null;
          if (Wd && !dd && (dd = Kd._sprite || "__default"), "loaded" !== md._state) {
            Kd._sprite = dd, Kd._ended = !1;
            var hd = Kd._id;
            return md._queue.push({
              event: "play",
              action: function() {
                md.play(hd)
              }
            }), hd
          }
          if (Wd && !Kd.wt) return Od || md._loadQueue("play"), Kd._id;
          md._webAudio && Rd._autoResume();
          var vd = Math.max(0, Kd._seek > 0 ? Kd._seek : md._sprite[dd][0] / 1e3),
            Qd = Math.max(0, (md._sprite[dd][0] + md._sprite[dd][1]) / 1e3 - vd),
            td = 1e3 * Qd / Math.abs(Kd._rate),
            od = md._sprite[dd][0] / 1e3,
            Nd = (md._sprite[dd][0] + md._sprite[dd][1]) / 1e3;
          Kd._sprite = dd, Kd._ended = !1;
          var qd = function() {
            Kd.wt = !1, Kd._seek = vd, Kd._start = od, Kd._stop = Nd, Kd._loop = !(!Kd._loop && !md._sprite[dd][2])
          };
          if (!(vd >= Nd)) {
            var Hd = Kd._node;
            if (md._webAudio) {
              var yd = function() {
                md._playLock = !1, qd(), md._refreshBuffer(Kd);
                var dd = Kd._muted || md._muted ? 0 : Kd._volume;
                Hd.gain.setValueAtTime(dd, Rd.ctx.currentTime), Kd._playStart = Rd.ctx.currentTime, "undefined" === typeof Hd.bufferSource.start ? Kd._loop ? Hd.bufferSource.noteGrainOn(0, vd, 86400) : Hd.bufferSource.noteGrainOn(0, vd, Qd) : Kd._loop ? Hd.bufferSource.start(0, vd, 86400) : Hd.bufferSource.start(0, vd, Qd), td !== 1 / 0 && (md._endTimers[Kd._id] = setTimeout(md._ended.bind(md, Kd), td)), Od || setTimeout((function() {
                  md._emit("play", Kd._id), md._loadQueue()
                }), 0)
              };
              "running" === Rd.state && "interrupted" !== Rd.ctx.state ? yd() : (md._playLock = !0, md.once("resume", yd), md._clearTimer(Kd._id))
            } else {
              var bd = function() {
                Hd.currentTime = vd, Hd.muted = Kd._muted || md._muted || Rd._muted || Hd.muted, Hd.volume = Kd._volume * Rd.volume(), Hd.playbackRate = Kd._rate;
                try {
                  var Wd = Hd.play();
                  if (Wd && "undefined" !== typeof Promise && (Wd instanceof Promise || "function" === typeof Wd.then) ? (md._playLock = !0, qd(), Wd.then((function() {
                      md._playLock = !1, Hd._unlocked = !0, Od ? md._loadQueue() : md._emit("play", Kd._id)
                    })).catch((function() {
                      md._playLock = !1, md._emit("playerror", Kd._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), Kd._ended = !0, Kd.wt = !0
                    }))) : Od || (md._playLock = !1, qd(), md._emit("play", Kd._id)), Hd.playbackRate = Kd._rate, Hd.paused) return void md._emit("playerror", Kd._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== dd || Kd._loop ? md._endTimers[Kd._id] = setTimeout(md._ended.bind(md, Kd), td) : (md._endTimers[Kd._id] = function() {
                    md._ended(Kd), Hd.removeEventListener("ended", md._endTimers[Kd._id], !1)
                  }, Hd.addEventListener("ended", md._endTimers[Kd._id], !1))
                } catch (Fd) {
                  md._emit("playerror", Kd._id, Fd)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Hd.src && (Hd.src = md._src, Hd.load());
              var Td = window && window.ejecta || !Hd.readyState && Rd._navigator.isCocoonJS;
              if (Hd.readyState >= 3 || Td) bd();
              else {
                md._playLock = !0, md._state = "loading";
                var pd = function() {
                  md._state = "loaded", bd(), Hd.removeEventListener(Rd._canPlayEvent, pd, !1)
                };
                Hd.addEventListener(Rd._canPlayEvent, pd, !1), md._clearTimer(Kd._id)
              }
            }
            return Kd._id
          }
          md._ended(Kd)
        },
        pause: function(dd) {
          var Od = this;
          if ("loaded" !== Od._state || Od._playLock) return Od._queue.push({
            event: "pause",
            action: function() {
              Od.pause(dd)
            }
          }), Od;
          for (var md = Od._getSoundIds(dd), Wd = 0; Wd < md.length; Wd++) {
            Od._clearTimer(md[Wd]);
            var Fd = Od._soundById(md[Wd]);
            if (Fd && !Fd.wt && (Fd._seek = Od.seek(md[Wd]), Fd._rateSeek = 0, Fd.wt = !0, Od._stopFade(md[Wd]), Fd._node))
              if (Od._webAudio) {
                if (!Fd._node.bufferSource) continue;
                "undefined" === typeof Fd._node.bufferSource.stop ? Fd._node.bufferSource.noteOff(0) : Fd._node.bufferSource.stop(0), Od._cleanBuffer(Fd._node)
              } else isNaN(Fd._node.duration) && Fd._node.duration !== 1 / 0 || Fd._node.pause();
            arguments[1] || Od._emit("pause", Fd ? Fd._id : null)
          }
          return Od
        },
        stop: function(dd, Od) {
          var md = this;
          if ("loaded" !== md._state || md._playLock) return md._queue.push({
            event: "stop",
            action: function() {
              md.stop(dd)
            }
          }), md;
          for (var Wd = md._getSoundIds(dd), Fd = 0; Fd < Wd.length; Fd++) {
            md._clearTimer(Wd[Fd]);
            var Rd = md._soundById(Wd[Fd]);
            Rd && (Rd._seek = Rd._start || 0, Rd._rateSeek = 0, Rd.wt = !0, Rd._ended = !0, md._stopFade(Wd[Fd]), Rd._node && (md._webAudio ? Rd._node.bufferSource && ("undefined" === typeof Rd._node.bufferSource.stop ? Rd._node.bufferSource.noteOff(0) : Rd._node.bufferSource.stop(0), md._cleanBuffer(Rd._node)) : isNaN(Rd._node.duration) && Rd._node.duration !== 1 / 0 || (Rd._node.currentTime = Rd._start || 0, Rd._node.pause(), Rd._node.duration === 1 / 0 && md._clearSound(Rd._node))), Od || md._emit("stop", Rd._id))
          }
          return md
        },
        mute: function(dd, Od) {
          var md = this;
          if ("loaded" !== md._state || md._playLock) return md._queue.push({
            event: "mute",
            action: function() {
              md.mute(dd, Od)
            }
          }), md;
          if ("undefined" === typeof Od) {
            if ("boolean" !== typeof dd) return md._muted;
            md._muted = dd
          }
          for (var Wd = md._getSoundIds(Od), Fd = 0; Fd < Wd.length; Fd++) {
            var Xd = md._soundById(Wd[Fd]);
            Xd && (Xd._muted = dd, Xd._interval && md._stopFade(Xd._id), md._webAudio && Xd._node ? Xd._node.gain.setValueAtTime(dd ? 0 : Xd._volume, Rd.ctx.currentTime) : Xd._node && (Xd._node.muted = !!Rd._muted || dd), md._emit("mute", Xd._id))
          }
          return md
        },
        volume: function() {
          var dd, Od, md, Wd = this,
            Fd = arguments;
          if (0 === Fd.length) return Wd._volume;
          if (1 === Fd.length || 2 === Fd.length && "undefined" === typeof Fd[1] ? Wd._getSoundIds().indexOf(Fd[0]) >= 0 ? Od = parseInt(Fd[0], 10) : dd = parseFloat(Fd[0]) : Fd.length >= 2 && (dd = parseFloat(Fd[0]), Od = parseInt(Fd[1], 10)), !("undefined" !== typeof dd && dd >= 0 && dd <= 1)) return (md = Od ? Wd._soundById(Od) : Wd._sounds[0]) ? md._volume : 0;
          if ("loaded" !== Wd._state || Wd._playLock) return Wd._queue.push({
            event: "volume",
            action: function() {
              Wd.volume.apply(Wd, Fd)
            }
          }), Wd;
          "undefined" === typeof Od && (Wd._volume = dd), Od = Wd._getSoundIds(Od);
          for (var Xd = 0; Xd < Od.length; Xd++)(md = Wd._soundById(Od[Xd])) && (md._volume = dd, Fd[2] || Wd._stopFade(Od[Xd]), Wd._webAudio && md._node && !md._muted ? md._node.gain.setValueAtTime(dd, Rd.ctx.currentTime) : md._node && !md._muted && (md._node.volume = dd * Rd.volume()), Wd._emit("volume", md._id));
          return Wd
        },
        fade: function(dd, Od, md, Wd) {
          var Fd = this;
          if ("loaded" !== Fd._state || Fd._playLock) return Fd._queue.push({
            event: "fade",
            action: function() {
              Fd.fade(dd, Od, md, Wd)
            }
          }), Fd;
          dd = Math.min(Math.max(0, parseFloat(dd)), 1), Od = Math.min(Math.max(0, parseFloat(Od)), 1), md = parseFloat(md), Fd.volume(dd, Wd);
          for (var Xd = Fd._getSoundIds(Wd), Kd = 0; Kd < Xd.length; Kd++) {
            var hd = Fd._soundById(Xd[Kd]);
            if (hd) {
              if (Wd || Fd._stopFade(Xd[Kd]), Fd._webAudio && !hd._muted) {
                var vd = Rd.ctx.currentTime,
                  Qd = vd + md / 1e3;
                hd._volume = dd, hd._node.gain.setValueAtTime(dd, vd), hd._node.gain.linearRampToValueAtTime(Od, Qd)
              }
              Fd._startFadeInterval(hd, dd, Od, md, Xd[Kd], "undefined" === typeof Wd)
            }
          }
          return Fd
        },
        _startFadeInterval: function(dd, Od, md, Wd, Fd, Rd) {
          var Xd = this,
            Kd = Od,
            hd = md - Od,
            vd = Math.abs(hd / .01),
            Qd = Math.max(4, vd > 0 ? Wd / vd : Wd),
            td = Date.now();
          dd._fadeTo = md, dd._interval = setInterval((function() {
            var Fd = (Date.now() - td) / Wd;
            td = Date.now(), Kd += hd * Fd, Kd = Math.round(100 * Kd) / 100, Kd = hd < 0 ? Math.max(md, Kd) : Math.min(md, Kd), Xd._webAudio ? dd._volume = Kd : Xd.volume(Kd, dd._id, !0), Rd && (Xd._volume = Kd), (md < Od && Kd <= md || md > Od && Kd >= md) && (clearInterval(dd._interval), dd._interval = null, dd._fadeTo = null, Xd.volume(md, dd._id), Xd._emit("fade", dd._id))
          }), Qd)
        },
        _stopFade: function(dd) {
          var Od = this,
            md = Od._soundById(dd);
          return md && md._interval && (Od._webAudio && md._node.gain.cancelScheduledValues(Rd.ctx.currentTime), clearInterval(md._interval), md._interval = null, Od.volume(md._fadeTo, dd), md._fadeTo = null, Od._emit("fade", dd)), Od
        },
        loop: function() {
          var dd, Od, md, Wd = this,
            Fd = arguments;
          if (0 === Fd.length) return Wd._loop;
          if (1 === Fd.length) {
            if ("boolean" !== typeof Fd[0]) return !!(md = Wd._soundById(parseInt(Fd[0], 10))) && md._loop;
            dd = Fd[0], Wd._loop = dd
          } else 2 === Fd.length && (dd = Fd[0], Od = parseInt(Fd[1], 10));
          for (var Rd = Wd._getSoundIds(Od), Xd = 0; Xd < Rd.length; Xd++)(md = Wd._soundById(Rd[Xd])) && (md._loop = dd, Wd._webAudio && md._node && md._node.bufferSource && (md._node.bufferSource.loop = dd, dd && (md._node.bufferSource.loopStart = md._start || 0, md._node.bufferSource.loopEnd = md._stop, Wd.playing(Rd[Xd]) && (Wd.pause(Rd[Xd], !0), Wd.play(Rd[Xd], !0)))));
          return Wd
        },
        rate: function() {
          var dd, Od, md, Wd = this,
            Fd = arguments;
          if (0 === Fd.length) Od = Wd._sounds[0]._id;
          else if (1 === Fd.length) {
            Wd._getSoundIds().indexOf(Fd[0]) >= 0 ? Od = parseInt(Fd[0], 10) : dd = parseFloat(Fd[0])
          } else 2 === Fd.length && (dd = parseFloat(Fd[0]), Od = parseInt(Fd[1], 10));
          if ("number" !== typeof dd) return (md = Wd._soundById(Od)) ? md._rate : Wd._rate;
          if ("loaded" !== Wd._state || Wd._playLock) return Wd._queue.push({
            event: "rate",
            action: function() {
              Wd.rate.apply(Wd, Fd)
            }
          }), Wd;
          "undefined" === typeof Od && (Wd._rate = dd), Od = Wd._getSoundIds(Od);
          for (var Xd = 0; Xd < Od.length; Xd++)
            if (md = Wd._soundById(Od[Xd])) {
              Wd.playing(Od[Xd]) && (md._rateSeek = Wd.seek(Od[Xd]), md._playStart = Wd._webAudio ? Rd.ctx.currentTime : md._playStart), md._rate = dd, Wd._webAudio && md._node && md._node.bufferSource ? md._node.bufferSource.playbackRate.setValueAtTime(dd, Rd.ctx.currentTime) : md._node && (md._node.playbackRate = dd);
              var Kd = Wd.seek(Od[Xd]),
                hd = 1e3 * ((Wd._sprite[md._sprite][0] + Wd._sprite[md._sprite][1]) / 1e3 - Kd) / Math.abs(md._rate);
              !Wd._endTimers[Od[Xd]] && md.wt || (Wd._clearTimer(Od[Xd]), Wd._endTimers[Od[Xd]] = setTimeout(Wd._ended.bind(Wd, md), hd)), Wd._emit("rate", md._id)
            } return Wd
        },
        seek: function() {
          var dd, Od, md = this,
            Wd = arguments;
          if (0 === Wd.length) md._sounds.length && (Od = md._sounds[0]._id);
          else if (1 === Wd.length) {
            md._getSoundIds().indexOf(Wd[0]) >= 0 ? Od = parseInt(Wd[0], 10) : md._sounds.length && (Od = md._sounds[0]._id, dd = parseFloat(Wd[0]))
          } else 2 === Wd.length && (dd = parseFloat(Wd[0]), Od = parseInt(Wd[1], 10));
          if ("undefined" === typeof Od) return 0;
          if ("number" === typeof dd && ("loaded" !== md._state || md._playLock)) return md._queue.push({
            event: "seek",
            action: function() {
              md.seek.apply(md, Wd)
            }
          }), md;
          var Fd = md._soundById(Od);
          if (Fd) {
            if (!("number" === typeof dd && dd >= 0)) {
              if (md._webAudio) {
                var Xd = md.playing(Od) ? Rd.ctx.currentTime - Fd._playStart : 0,
                  Kd = Fd._rateSeek ? Fd._rateSeek - Fd._seek : 0;
                return Fd._seek + (Kd + Xd * Math.abs(Fd._rate))
              }
              return Fd._node.currentTime
            }
            var hd = md.playing(Od);
            hd && md.pause(Od, !0), Fd._seek = dd, Fd._ended = !1, md._clearTimer(Od), md._webAudio || !Fd._node || isNaN(Fd._node.duration) || (Fd._node.currentTime = dd);
            var vd = function() {
              hd && md.play(Od, !0), md._emit("seek", Od)
            };
            if (hd && !md._webAudio) {
              var Qd = function() {
                md._playLock ? setTimeout(Qd, 0) : vd()
              };
              setTimeout(Qd, 0)
            } else vd()
          }
          return md
        },
        playing: function(dd) {
          var Od = this;
          if ("number" === typeof dd) {
            var md = Od._soundById(dd);
            return !!md && !md.wt
          }
          for (var Wd = 0; Wd < Od._sounds.length; Wd++)
            if (!Od._sounds[Wd].wt) return !0;
          return !1
        },
        duration: function(dd) {
          var Od = this,
            md = Od._duration,
            Wd = Od._soundById(dd);
          return Wd && (md = Od._sprite[Wd._sprite][1] / 1e3), md
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var dd = this, Od = dd._sounds, md = 0; md < Od.length; md++) Od[md].wt || dd.stop(Od[md]._id), dd._webAudio || (dd._clearSound(Od[md]._node), Od[md]._node.removeEventListener("error", Od[md]._errorFn, !1), Od[md]._node.removeEventListener(Rd._canPlayEvent, Od[md]._loadFn, !1), Od[md]._node.removeEventListener("ended", Od[md]._endFn, !1), Rd._releaseHtml5Audio(Od[md]._node)), delete Od[md]._node, dd._clearTimer(Od[md]._id);
          var Wd = Rd._howls.indexOf(dd);
          Wd >= 0 && Rd._howls.splice(Wd, 1);
          var Fd = !0;
          for (md = 0; md < Rd._howls.length; md++)
            if (Rd._howls[md]._src === dd._src || dd._src.indexOf(Rd._howls[md]._src) >= 0) {
              Fd = !1;
              break
            } return hd && Fd && delete hd[dd._src], Rd.noAudio = !1, dd._state = "unloaded", dd._sounds = [], dd = null, null
        },
        on: function(dd, Od, md, Wd) {
          var Fd = this["_on" + dd];
          return "function" === typeof Od && Fd.push(Wd ? {
            id: md,
            Ot: Od,
            once: Wd
          } : {
            id: md,
            Ot: Od
          }), this
        },
        off: function(dd, Od, md) {
          var Wd = this,
            Fd = Wd["_on" + dd],
            Rd = 0;
          if ("number" === typeof Od && (md = Od, Od = null), Od || md)
            for (Rd = 0; Rd < Fd.length; Rd++) {
              var Xd = md === Fd[Rd].id;
              if (Od === Fd[Rd].Ot && Xd || !Od && Xd) {
                Fd.splice(Rd, 1);
                break
              }
            } else if (dd) Wd["_on" + dd] = [];
            else {
              var Kd = Object.keys(Wd);
              for (Rd = 0; Rd < Kd.length; Rd++) 0 === Kd[Rd].indexOf("_on") && Array.isArray(Wd[Kd[Rd]]) && (Wd[Kd[Rd]] = [])
            } return Wd
        },
        once: function(dd, Od, md) {
          return this.on(dd, Od, md, 1), this
        },
        _emit: function(dd, Od, md) {
          for (var Wd = this, Fd = Wd["_on" + dd], Rd = Fd.length - 1; Rd >= 0; Rd--) Fd[Rd].id && Fd[Rd].id !== Od && "load" !== dd || (setTimeout(function(dd) {
            dd.call(this, Od, md)
          }.bind(Wd, Fd[Rd].Ot), 0), Fd[Rd].once && Wd.off(dd, Fd[Rd].Ot, Fd[Rd].id));
          return Wd._loadQueue(dd), Wd
        },
        _loadQueue: function(dd) {
          var Od = this;
          if (Od._queue.length > 0) {
            var md = Od._queue[0];
            md.event === dd && (Od._queue.shift(), Od._loadQueue()), dd || md.action()
          }
          return Od
        },
        _ended: function(dd) {
          var Od = this,
            md = dd._sprite;
          if (!Od._webAudio && dd._node && !dd._node.paused && !dd._node.ended && dd._node.currentTime < dd._stop) return setTimeout(Od._ended.bind(Od, dd), 100), Od;
          var Wd = !(!dd._loop && !Od._sprite[md][2]);
          if (Od._emit("end", dd._id), !Od._webAudio && Wd && Od.stop(dd._id, !0).play(dd._id), Od._webAudio && Wd) {
            Od._emit("play", dd._id), dd._seek = dd._start || 0, dd._rateSeek = 0, dd._playStart = Rd.ctx.currentTime;
            var Fd = 1e3 * (dd._stop - dd._start) / Math.abs(dd._rate);
            Od._endTimers[dd._id] = setTimeout(Od._ended.bind(Od, dd), Fd)
          }
          return Od._webAudio && !Wd && (dd.wt = !0, dd._ended = !0, dd._seek = dd._start || 0, dd._rateSeek = 0, Od._clearTimer(dd._id), Od._cleanBuffer(dd._node), Rd._autoSuspend()), Od._webAudio || Wd || Od.stop(dd._id, !0), Od
        },
        _clearTimer: function(dd) {
          var Od = this;
          if (Od._endTimers[dd]) {
            if ("function" !== typeof Od._endTimers[dd]) clearTimeout(Od._endTimers[dd]);
            else {
              var md = Od._soundById(dd);
              md && md._node && md._node.removeEventListener("ended", Od._endTimers[dd], !1)
            }
            delete Od._endTimers[dd]
          }
          return Od
        },
        _soundById: function(dd) {
          for (var Od = this, md = 0; md < Od._sounds.length; md++)
            if (dd === Od._sounds[md]._id) return Od._sounds[md];
          return null
        },
        _inactiveSound: function() {
          var dd = this;
          dd._drain();
          for (var Od = 0; Od < dd._sounds.length; Od++)
            if (dd._sounds[Od]._ended) return dd._sounds[Od].reset();
          return new Kd(dd)
        },
        _drain: function() {
          var dd = this,
            Od = dd._pool,
            md = 0,
            Wd = 0;
          if (!(dd._sounds.length < Od)) {
            for (Wd = 0; Wd < dd._sounds.length; Wd++) dd._sounds[Wd]._ended && md++;
            for (Wd = dd._sounds.length - 1; Wd >= 0; Wd--) {
              if (md <= Od) return;
              dd._sounds[Wd]._ended && (dd._webAudio && dd._sounds[Wd]._node && dd._sounds[Wd]._node.disconnect(0), dd._sounds.splice(Wd, 1), md--)
            }
          }
        },
        _getSoundIds: function(dd) {
          if ("undefined" === typeof dd) {
            for (var Od = [], md = 0; md < this._sounds.length; md++) Od.push(this._sounds[md]._id);
            return Od
          }
          return [dd]
        },
        _refreshBuffer: function(dd) {
          return dd._node.bufferSource = Rd.ctx.createBufferSource(), dd._node.bufferSource.buffer = hd[this._src], dd._panner ? dd._node.bufferSource.connect(dd._panner) : dd._node.bufferSource.connect(dd._node), dd._node.bufferSource.loop = dd._loop, dd._loop && (dd._node.bufferSource.loopStart = dd._start || 0, dd._node.bufferSource.loopEnd = dd._stop || 0), dd._node.bufferSource.playbackRate.setValueAtTime(dd._rate, Rd.ctx.currentTime), this
        },
        _cleanBuffer: function(dd) {
          var Od = Rd._navigator && Rd._navigator.vendor.indexOf("Apple") >= 0;
          if (Rd._scratchBuffer && dd.bufferSource && (dd.bufferSource.onended = null, dd.bufferSource.disconnect(0), Od)) try {
            dd.bufferSource.buffer = Rd._scratchBuffer
          } catch (md) {}
          return dd.bufferSource = null, this
        },
        _clearSound: function(dd) {
          /MSIE |Trident\//.test(Rd._navigator && Rd._navigator.userAgent) || (dd.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var Kd = function(dd) {
        this._parent = dd, this.init()
      };
      Kd.prototype = {
        init: function() {
          var dd = this,
            Od = dd._parent;
          return dd._muted = Od._muted, dd._loop = Od._loop, dd._volume = Od._volume, dd._rate = Od._rate, dd._seek = 0, dd.wt = !0, dd._ended = !0, dd._sprite = "__default", dd._id = ++Rd._counter, Od._sounds.push(dd), dd.create(), dd
        },
        create: function() {
          var dd = this,
            Od = dd._parent,
            md = Rd._muted || dd._muted || dd._parent._muted ? 0 : dd._volume;
          return Od._webAudio ? (dd._node = "undefined" === typeof Rd.ctx.createGain ? Rd.ctx.createGainNode() : Rd.ctx.createGain(), dd._node.gain.setValueAtTime(md, Rd.ctx.currentTime), dd._node.paused = !0, dd._node.connect(Rd.masterGain)) : Rd.noAudio || (dd._node = Rd._obtainHtml5Audio(), dd._errorFn = dd._errorListener.bind(dd), dd._node.addEventListener("error", dd._errorFn, !1), dd._loadFn = dd._loadListener.bind(dd), dd._node.addEventListener(Rd._canPlayEvent, dd._loadFn, !1), dd._endFn = dd._endListener.bind(dd), dd._node.addEventListener("ended", dd._endFn, !1), dd._node.src = Od._src, dd._node.preload = !0 === Od._preload ? "auto" : Od._preload, dd._node.volume = md * Rd.volume(), dd._node.load()), dd
        },
        reset: function() {
          var dd = this,
            Od = dd._parent;
          return dd._muted = Od._muted, dd._loop = Od._loop, dd._volume = Od._volume, dd._rate = Od._rate, dd._seek = 0, dd._rateSeek = 0, dd.wt = !0, dd._ended = !0, dd._sprite = "__default", dd._id = ++Rd._counter, dd
        },
        _errorListener: function() {
          var dd = this;
          dd._parent._emit("loaderror", dd._id, dd._node.error ? dd._node.error.code : 0), dd._node.removeEventListener("error", dd._errorFn, !1)
        },
        _loadListener: function() {
          var dd = this,
            Od = dd._parent;
          Od._duration = Math.ceil(10 * dd._node.duration) / 10, 0 === Object.keys(Od._sprite).length && (Od._sprite = {
            __default: [0, 1e3 * Od._duration]
          }), "loaded" !== Od._state && (Od._state = "loaded", Od._emit("load"), Od._loadQueue()), dd._node.removeEventListener(Rd._canPlayEvent, dd._loadFn, !1)
        },
        _endListener: function() {
          var dd = this,
            Od = dd._parent;
          Od._duration === 1 / 0 && (Od._duration = Math.ceil(10 * dd._node.duration) / 10, Od._sprite.__default[1] === 1 / 0 && (Od._sprite.__default[1] = 1e3 * Od._duration), Od._ended(dd)), dd._node.removeEventListener("ended", dd._endFn, !1)
        }
      };
      var hd = {},
        vd = function(dd) {
          var Od = dd._src;
          if (hd[Od]) return dd._duration = hd[Od].duration, void od(dd);
          if (/^data:[^;]+;base64,/.test(Od)) {
            for (var md = atob(Od.split(",")[1]), Wd = new Uint8Array(md.length), Fd = 0; Fd < md.length; ++Fd) Wd[Fd] = md.charCodeAt(Fd);
            td(Wd.buffer, dd)
          } else {
            var Rd = new XMLHttpRequest;
            Rd.open(dd._xhr.method, Od, !0), Rd.withCredentials = dd._xhr.withCredentials, Rd.responseType = "arraybuffer", dd._xhr.headers && Object.keys(dd._xhr.headers).forEach((function(Od) {
              Rd.setRequestHeader(Od, dd._xhr.headers[Od])
            })), Rd.onload = function() {
              var Od = (Rd.status + "")[0];
              "0" === Od || "2" === Od || "3" === Od ? td(Rd.response, dd) : dd._emit("loaderror", null, "Failed loading audio file with status: " + Rd.status + ".")
            }, Rd.onerror = function() {
              dd._webAudio && (dd._html5 = !0, dd._webAudio = !1, dd._sounds = [], delete hd[Od], dd.load())
            }, Qd(Rd)
          }
        },
        Qd = function(dd) {
          try {
            dd.send()
          } catch (Od) {
            dd.onerror()
          }
        },
        td = function(dd, Od) {
          var md = function() {
              Od._emit("loaderror", null, "Decoding audio data failed.")
            },
            Wd = function(dd) {
              dd && Od._sounds.length > 0 ? (hd[Od._src] = dd, od(Od, dd)) : md()
            };
          "undefined" !== typeof Promise && 1 === Rd.ctx.decodeAudioData.length ? Rd.ctx.decodeAudioData(dd).then(Wd).catch(md) : Rd.ctx.decodeAudioData(dd, Wd, md)
        },
        od = function(dd, Od) {
          Od && !dd._duration && (dd._duration = Od.duration), 0 === Object.keys(dd._sprite).length && (dd._sprite = {
            __default: [0, 1e3 * dd._duration]
          }), "loaded" !== dd._state && (dd._state = "loaded", dd._emit("load"), dd._loadQueue())
        },
        Nd = function() {
          if (Rd.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Rd.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Rd.ctx = new webkitAudioContext : Rd.usingWebAudio = !1
            } catch (Fd) {
              Rd.usingWebAudio = !1
            }
            Rd.ctx || (Rd.usingWebAudio = !1);
            var dd = /iP(hone|od|ad)/.test(Rd._navigator && Rd._navigator.platform),
              Od = Rd._navigator && Rd._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              md = Od ? parseInt(Od[1], 10) : null;
            if (dd && md && md < 9) {
              var Wd = /safari/.test(Rd._navigator && Rd._navigator.userAgent.toLowerCase());
              Rd._navigator && !Wd && (Rd.usingWebAudio = !1)
            }
            Rd.usingWebAudio && (Rd.masterGain = "undefined" === typeof Rd.ctx.createGain ? Rd.ctx.createGainNode() : Rd.ctx.createGain(), Rd.masterGain.gain.setValueAtTime(Rd._muted ? 0 : Rd._volume, Rd.ctx.currentTime), Rd.masterGain.connect(Rd.ctx.destination)), Rd._setup()
          }
        };
      void 0 === (Wd = function() {
        return {
          Howler: Rd,
          Howl: Xd
        }
      }.apply(Od, [])) || (dd.exports = Wd), Od.Howler = Rd, Od.Howl = Xd, "undefined" !== typeof md.g ? (md.g.HowlerGlobal = Fd, md.g.Howler = Rd, md.g.Howl = Xd, md.g.Sound = Kd) : "undefined" !== typeof window && (window.HowlerGlobal = Fd, window.Howler = Rd, window.Howl = Xd, window.Sound = Kd)
    }(),
    function() {
      var dd;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(dd) {
        var Od = this;
        if (!Od.ctx || !Od.ctx.listener) return Od;
        for (var md = Od._howls.length - 1; md >= 0; md--) Od._howls[md].stereo(dd);
        return Od
      }, HowlerGlobal.prototype.pos = function(dd, Od, md) {
        var Wd = this;
        return Wd.ctx && Wd.ctx.listener ? (Od = "number" !== typeof Od ? Wd._pos[1] : Od, md = "number" !== typeof md ? Wd._pos[2] : md, "number" !== typeof dd ? Wd._pos : (Wd._pos = [dd, Od, md], "undefined" !== typeof Wd.ctx.listener.positionX ? (Wd.ctx.listener.positionX.setTargetAtTime(Wd._pos[0], Howler.ctx.currentTime, .1), Wd.ctx.listener.positionY.setTargetAtTime(Wd._pos[1], Howler.ctx.currentTime, .1), Wd.ctx.listener.positionZ.setTargetAtTime(Wd._pos[2], Howler.ctx.currentTime, .1)) : Wd.ctx.listener.setPosition(Wd._pos[0], Wd._pos[1], Wd._pos[2]), Wd)) : Wd
      }, HowlerGlobal.prototype.orientation = function(dd, Od, md, Wd, Fd, Rd) {
        var Xd = this;
        if (!Xd.ctx || !Xd.ctx.listener) return Xd;
        var Kd = Xd._orientation;
        return Od = "number" !== typeof Od ? Kd[1] : Od, md = "number" !== typeof md ? Kd[2] : md, Wd = "number" !== typeof Wd ? Kd[3] : Wd, Fd = "number" !== typeof Fd ? Kd[4] : Fd, Rd = "number" !== typeof Rd ? Kd[5] : Rd, "number" !== typeof dd ? Kd : (Xd._orientation = [dd, Od, md, Wd, Fd, Rd], "undefined" !== typeof Xd.ctx.listener.forwardX ? (Xd.ctx.listener.forwardX.setTargetAtTime(dd, Howler.ctx.currentTime, .1), Xd.ctx.listener.forwardY.setTargetAtTime(Od, Howler.ctx.currentTime, .1), Xd.ctx.listener.forwardZ.setTargetAtTime(md, Howler.ctx.currentTime, .1), Xd.ctx.listener.upX.setTargetAtTime(Wd, Howler.ctx.currentTime, .1), Xd.ctx.listener.upY.setTargetAtTime(Fd, Howler.ctx.currentTime, .1), Xd.ctx.listener.upZ.setTargetAtTime(Rd, Howler.ctx.currentTime, .1)) : Xd.ctx.listener.setOrientation(dd, Od, md, Wd, Fd, Rd), Xd)
      }, Howl.prototype.init = (dd = Howl.prototype.init, function(Od) {
        var md = this;
        return md._orientation = Od.orientation || [1, 0, 0], md._stereo = Od.stereo || null, md._pos = Od.pos || null, md._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Od.coneInnerAngle ? Od.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Od.coneOuterAngle ? Od.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Od.coneOuterGain ? Od.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Od.distanceModel ? Od.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Od.maxDistance ? Od.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Od.panningModel ? Od.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Od.refDistance ? Od.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Od.rolloffFactor ? Od.rolloffFactor : 1
        }, md._onstereo = Od.onstereo ? [{
          Ot: Od.onstereo
        }] : [], md._onpos = Od.onpos ? [{
          Ot: Od.onpos
        }] : [], md._onorientation = Od.onorientation ? [{
          Ot: Od.onorientation
        }] : [], dd.call(this, Od)
      }), Howl.prototype.stereo = function(dd, md) {
        var Wd = this;
        if (!Wd._webAudio) return Wd;
        if ("loaded" !== Wd._state) return Wd._queue.push({
          event: "stereo",
          action: function() {
            Wd.stereo(dd, md)
          }
        }), Wd;
        var Fd = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof md) {
          if ("number" !== typeof dd) return Wd._stereo;
          Wd._stereo = dd, Wd._pos = [dd, 0, 0]
        }
        for (var Rd = Wd._getSoundIds(md), Xd = 0; Xd < Rd.length; Xd++) {
          var Kd = Wd._soundById(Rd[Xd]);
          if (Kd) {
            if ("number" !== typeof dd) return Kd._stereo;
            Kd._stereo = dd, Kd._pos = [dd, 0, 0], Kd._node && (Kd._pannerAttr.panningModel = "equalpower", Kd._panner && Kd._panner.pan || Od(Kd, Fd), "spatial" === Fd ? "undefined" !== typeof Kd._panner.positionX ? (Kd._panner.positionX.setValueAtTime(dd, Howler.ctx.currentTime), Kd._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), Kd._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : Kd._panner.setPosition(dd, 0, 0) : Kd._panner.pan.setValueAtTime(dd, Howler.ctx.currentTime)), Wd._emit("stereo", Kd._id)
          }
        }
        return Wd
      }, Howl.prototype.pos = function(dd, md, Wd, Fd) {
        var Rd = this;
        if (!Rd._webAudio) return Rd;
        if ("loaded" !== Rd._state) return Rd._queue.push({
          event: "pos",
          action: function() {
            Rd.pos(dd, md, Wd, Fd)
          }
        }), Rd;
        if (md = "number" !== typeof md ? 0 : md, Wd = "number" !== typeof Wd ? -.5 : Wd, "undefined" === typeof Fd) {
          if ("number" !== typeof dd) return Rd._pos;
          Rd._pos = [dd, md, Wd]
        }
        for (var Xd = Rd._getSoundIds(Fd), Kd = 0; Kd < Xd.length; Kd++) {
          var hd = Rd._soundById(Xd[Kd]);
          if (hd) {
            if ("number" !== typeof dd) return hd._pos;
            hd._pos = [dd, md, Wd], hd._node && (hd._panner && !hd._panner.pan || Od(hd, "spatial"), "undefined" !== typeof hd._panner.positionX ? (hd._panner.positionX.setValueAtTime(dd, Howler.ctx.currentTime), hd._panner.positionY.setValueAtTime(md, Howler.ctx.currentTime), hd._panner.positionZ.setValueAtTime(Wd, Howler.ctx.currentTime)) : hd._panner.setPosition(dd, md, Wd)), Rd._emit("pos", hd._id)
          }
        }
        return Rd
      }, Howl.prototype.orientation = function(dd, md, Wd, Fd) {
        var Rd = this;
        if (!Rd._webAudio) return Rd;
        if ("loaded" !== Rd._state) return Rd._queue.push({
          event: "orientation",
          action: function() {
            Rd.orientation(dd, md, Wd, Fd)
          }
        }), Rd;
        if (md = "number" !== typeof md ? Rd._orientation[1] : md, Wd = "number" !== typeof Wd ? Rd._orientation[2] : Wd, "undefined" === typeof Fd) {
          if ("number" !== typeof dd) return Rd._orientation;
          Rd._orientation = [dd, md, Wd]
        }
        for (var Xd = Rd._getSoundIds(Fd), Kd = 0; Kd < Xd.length; Kd++) {
          var hd = Rd._soundById(Xd[Kd]);
          if (hd) {
            if ("number" !== typeof dd) return hd._orientation;
            hd._orientation = [dd, md, Wd], hd._node && (hd._panner || (hd._pos || (hd._pos = Rd._pos || [0, 0, -.5]), Od(hd, "spatial")), "undefined" !== typeof hd._panner.orientationX ? (hd._panner.orientationX.setValueAtTime(dd, Howler.ctx.currentTime), hd._panner.orientationY.setValueAtTime(md, Howler.ctx.currentTime), hd._panner.orientationZ.setValueAtTime(Wd, Howler.ctx.currentTime)) : hd._panner.setOrientation(dd, md, Wd)), Rd._emit("orientation", hd._id)
          }
        }
        return Rd
      }, Howl.prototype.pannerAttr = function() {
        var dd, md, Wd, Fd = this,
          Rd = arguments;
        if (!Fd._webAudio) return Fd;
        if (0 === Rd.length) return Fd._pannerAttr;
        if (1 === Rd.length) {
          if ("object" !== typeof Rd[0]) return (Wd = Fd._soundById(parseInt(Rd[0], 10))) ? Wd._pannerAttr : Fd._pannerAttr;
          dd = Rd[0], "undefined" === typeof md && (dd.pannerAttr || (dd.pannerAttr = {
            coneInnerAngle: dd.coneInnerAngle,
            coneOuterAngle: dd.coneOuterAngle,
            coneOuterGain: dd.coneOuterGain,
            distanceModel: dd.distanceModel,
            maxDistance: dd.maxDistance,
            refDistance: dd.refDistance,
            rolloffFactor: dd.rolloffFactor,
            panningModel: dd.panningModel
          }), Fd._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof dd.pannerAttr.coneInnerAngle ? dd.pannerAttr.coneInnerAngle : Fd._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof dd.pannerAttr.coneOuterAngle ? dd.pannerAttr.coneOuterAngle : Fd._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof dd.pannerAttr.coneOuterGain ? dd.pannerAttr.coneOuterGain : Fd._coneOuterGain,
            distanceModel: "undefined" !== typeof dd.pannerAttr.distanceModel ? dd.pannerAttr.distanceModel : Fd._distanceModel,
            maxDistance: "undefined" !== typeof dd.pannerAttr.maxDistance ? dd.pannerAttr.maxDistance : Fd._maxDistance,
            refDistance: "undefined" !== typeof dd.pannerAttr.refDistance ? dd.pannerAttr.refDistance : Fd._refDistance,
            rolloffFactor: "undefined" !== typeof dd.pannerAttr.rolloffFactor ? dd.pannerAttr.rolloffFactor : Fd._rolloffFactor,
            panningModel: "undefined" !== typeof dd.pannerAttr.panningModel ? dd.pannerAttr.panningModel : Fd._panningModel
          })
        } else 2 === Rd.length && (dd = Rd[0], md = parseInt(Rd[1], 10));
        for (var Xd = Fd._getSoundIds(md), Kd = 0; Kd < Xd.length; Kd++)
          if (Wd = Fd._soundById(Xd[Kd])) {
            var hd = Wd._pannerAttr;
            hd = {
              coneInnerAngle: "undefined" !== typeof dd.coneInnerAngle ? dd.coneInnerAngle : hd.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof dd.coneOuterAngle ? dd.coneOuterAngle : hd.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof dd.coneOuterGain ? dd.coneOuterGain : hd.coneOuterGain,
              distanceModel: "undefined" !== typeof dd.distanceModel ? dd.distanceModel : hd.distanceModel,
              maxDistance: "undefined" !== typeof dd.maxDistance ? dd.maxDistance : hd.maxDistance,
              refDistance: "undefined" !== typeof dd.refDistance ? dd.refDistance : hd.refDistance,
              rolloffFactor: "undefined" !== typeof dd.rolloffFactor ? dd.rolloffFactor : hd.rolloffFactor,
              panningModel: "undefined" !== typeof dd.panningModel ? dd.panningModel : hd.panningModel
            };
            var vd = Wd._panner;
            vd ? (vd.coneInnerAngle = hd.coneInnerAngle, vd.coneOuterAngle = hd.coneOuterAngle, vd.coneOuterGain = hd.coneOuterGain, vd.distanceModel = hd.distanceModel, vd.maxDistance = hd.maxDistance, vd.refDistance = hd.refDistance, vd.rolloffFactor = hd.rolloffFactor, vd.panningModel = hd.panningModel) : (Wd._pos || (Wd._pos = Fd._pos || [0, 0, -.5]), Od(Wd, "spatial"))
          } return Fd
      }, Sound.prototype.init = function(dd) {
        return function() {
          var Od = this,
            md = Od._parent;
          Od._orientation = md._orientation, Od._stereo = md._stereo, Od._pos = md._pos, Od._pannerAttr = md._pannerAttr, dd.call(this), Od._stereo ? md.stereo(Od._stereo) : Od._pos && md.pos(Od._pos[0], Od._pos[1], Od._pos[2], Od._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(dd) {
        return function() {
          var Od = this,
            md = Od._parent;
          return Od._orientation = md._orientation, Od._stereo = md._stereo, Od._pos = md._pos, Od._pannerAttr = md._pannerAttr, Od._stereo ? md.stereo(Od._stereo) : Od._pos ? md.pos(Od._pos[0], Od._pos[1], Od._pos[2], Od._id) : Od._panner && (Od._panner.disconnect(0), Od._panner = void 0, md._refreshBuffer(Od)), dd.call(this)
        }
      }(Sound.prototype.reset);
      var Od = function(dd, Od) {
        "spatial" === (Od = Od || "spatial") ? (dd._panner = Howler.ctx.createPanner(), dd._panner.coneInnerAngle = dd._pannerAttr.coneInnerAngle, dd._panner.coneOuterAngle = dd._pannerAttr.coneOuterAngle, dd._panner.coneOuterGain = dd._pannerAttr.coneOuterGain, dd._panner.distanceModel = dd._pannerAttr.distanceModel, dd._panner.maxDistance = dd._pannerAttr.maxDistance, dd._panner.refDistance = dd._pannerAttr.refDistance, dd._panner.rolloffFactor = dd._pannerAttr.rolloffFactor, dd._panner.panningModel = dd._pannerAttr.panningModel, "undefined" !== typeof dd._panner.positionX ? (dd._panner.positionX.setValueAtTime(dd._pos[0], Howler.ctx.currentTime), dd._panner.positionY.setValueAtTime(dd._pos[1], Howler.ctx.currentTime), dd._panner.positionZ.setValueAtTime(dd._pos[2], Howler.ctx.currentTime)) : dd._panner.setPosition(dd._pos[0], dd._pos[1], dd._pos[2]), "undefined" !== typeof dd._panner.orientationX ? (dd._panner.orientationX.setValueAtTime(dd._orientation[0], Howler.ctx.currentTime), dd._panner.orientationY.setValueAtTime(dd._orientation[1], Howler.ctx.currentTime), dd._panner.orientationZ.setValueAtTime(dd._orientation[2], Howler.ctx.currentTime)) : dd._panner.setOrientation(dd._orientation[0], dd._orientation[1], dd._orientation[2])) : (dd._panner = Howler.ctx.createStereoPanner(), dd._panner.pan.setValueAtTime(dd._stereo, Howler.ctx.currentTime)), dd._panner.connect(dd._node), dd.wt || dd._parent.pause(dd._id, !0).play(dd._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);