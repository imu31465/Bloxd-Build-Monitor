/*! For license information please see 7jvyee.84.1fddf628.chunk.js.LICENSE.txt */
export const id = 84;
export const ids = [84];
export const modules = {
  4072: (yb, bb, Wy) => {
    var Uy;
    ! function() {
      var hy = function() {
        this.init()
      };
      hy.prototype = {
        init: function() {
          var yb = this || fy;
          return yb._counter = 1e3, yb._html5AudioPool = [], yb.html5PoolSize = 10, yb._codecs = {}, yb._howls = [], yb._muted = !1, yb._volume = 1, yb._canPlayEvent = "canplaythrough", yb._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, yb.masterGain = null, yb.noAudio = !1, yb.usingWebAudio = !0, yb.autoSuspend = !0, yb.ctx = null, yb.autoUnlock = !0, yb._setup(), yb
        },
        volume: function(yb) {
          var bb = this || fy;
          if (yb = parseFloat(yb), bb.ctx || qb(), "undefined" !== typeof yb && yb >= 0 && yb <= 1) {
            if (bb._volume = yb, bb._muted) return bb;
            bb.usingWebAudio && bb.masterGain.gain.setValueAtTime(yb, fy.ctx.currentTime);
            for (var Wy = 0; Wy < bb._howls.length; Wy++)
              if (!bb._howls[Wy]._webAudio)
                for (var Uy = bb._howls[Wy]._getSoundIds(), hy = 0; hy < Uy.length; hy++) {
                  var Zy = bb._howls[Wy]._soundById(Uy[hy]);
                  Zy && Zy._node && (Zy._node.volume = Zy._volume * yb)
                }
            return bb
          }
          return bb._volume
        },
        mute: function(yb) {
          var bb = this || fy;
          bb.ctx || qb(), bb._muted = yb, bb.usingWebAudio && bb.masterGain.gain.setValueAtTime(yb ? 0 : bb._volume, fy.ctx.currentTime);
          for (var Wy = 0; Wy < bb._howls.length; Wy++)
            if (!bb._howls[Wy]._webAudio)
              for (var Uy = bb._howls[Wy]._getSoundIds(), hy = 0; hy < Uy.length; hy++) {
                var Zy = bb._howls[Wy]._soundById(Uy[hy]);
                Zy && Zy._node && (Zy._node.muted = !!yb || Zy._muted)
              }
          return bb
        },
        stop: function() {
          for (var yb = this || fy, bb = 0; bb < yb._howls.length; bb++) yb._howls[bb].stop();
          return yb
        },
        unload: function() {
          for (var yb = this || fy, bb = yb._howls.length - 1; bb >= 0; bb--) yb._howls[bb].unload();
          return yb.usingWebAudio && yb.ctx && "undefined" !== typeof yb.ctx.close && (yb.ctx.close(), yb.ctx = null, qb()), yb
        },
        codecs: function(yb) {
          return (this || fy)._codecs[yb.replace(/^x-/, "")]
        },
        _setup: function() {
          var yb = this || fy;
          if (yb.state = yb.ctx && yb.ctx.state || "suspended", yb._autoSuspend(), !yb.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (yb._canPlayEvent = "canplay")
            } catch (bb) {
              yb.noAudio = !0
            } else yb.noAudio = !0;
          try {
            (new Audio).muted && (yb.noAudio = !0)
          } catch (bb) {}
          return yb.noAudio || yb._setupCodecs(), yb
        },
        _setupCodecs: function() {
          var yb = this || fy,
            bb = null;
          try {
            bb = "undefined" !== typeof Audio ? new Audio : null
          } catch (By) {
            return yb
          }
          if (!bb || "function" !== typeof bb.canPlayType) return yb;
          var Wy = bb.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Uy = yb._navigator ? yb._navigator.userAgent : "",
            hy = Uy.match(/OPR\/([0-6].)/g),
            Zy = hy && parseInt(hy[0].split("/")[1], 10) < 33,
            cb = -1 !== Uy.indexOf("Safari") && -1 === Uy.indexOf("Chrome"),
            Py = Uy.match(/Version\/(.*?) /),
            oy = cb && Py && parseInt(Py[1], 10) < 15;
          return yb._codecs = {
            mp3: !(Zy || !Wy && !bb.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!Wy,
            opus: !!bb.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!bb.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!bb.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(bb.canPlayType('audio/wav; codecs="1"') || bb.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!bb.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!bb.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(bb.canPlayType("audio/x-m4a;") || bb.canPlayType("audio/m4a;") || bb.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(bb.canPlayType("audio/x-m4b;") || bb.canPlayType("audio/m4b;") || bb.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(bb.canPlayType("audio/x-mp4;") || bb.canPlayType("audio/mp4;") || bb.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(oy || !bb.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(oy || !bb.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!bb.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(bb.canPlayType("audio/x-flac;") || bb.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, yb
        },
        _unlockAudio: function() {
          var yb = this || fy;
          if (!yb._audioUnlocked && yb.ctx) {
            yb._audioUnlocked = !1, yb.autoUnlock = !1, yb._mobileUnloaded || 44100 === yb.ctx.sampleRate || (yb._mobileUnloaded = !0, yb.unload()), yb._scratchBuffer = yb.ctx.createBuffer(1, 1, 22050);
            var bb = function(Wy) {
              for (; yb._html5AudioPool.length < yb.html5PoolSize;) try {
                var Uy = new Audio;
                Uy._unlocked = !0, yb._releaseHtml5Audio(Uy)
              } catch (Wy) {
                yb.noAudio = !0;
                break
              }
              for (var hy = 0; hy < yb._howls.length; hy++)
                if (!yb._howls[hy]._webAudio)
                  for (var fy = yb._howls[hy]._getSoundIds(), Zy = 0; Zy < fy.length; Zy++) {
                    var cb = yb._howls[hy]._soundById(fy[Zy]);
                    cb && cb._node && !cb._node._unlocked && (cb._node._unlocked = !0, cb._node.load())
                  }
              yb._autoResume();
              var Py = yb.ctx.createBufferSource();
              Py.buffer = yb._scratchBuffer, Py.connect(yb.ctx.destination), "undefined" === typeof Py.start ? Py.noteOn(0) : Py.start(0), "function" === typeof yb.ctx.resume && yb.ctx.resume(), Py.onended = function() {
                Py.disconnect(0), yb._audioUnlocked = !0, document.removeEventListener("touchstart", bb, !0), document.removeEventListener("touchend", bb, !0), document.removeEventListener("click", bb, !0), document.removeEventListener("keydown", bb, !0);
                for (var Wy = 0; Wy < yb._howls.length; Wy++) yb._howls[Wy]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", bb, !0), document.addEventListener("touchend", bb, !0), document.addEventListener("click", bb, !0), document.addEventListener("keydown", bb, !0), yb
          }
        },
        _obtainHtml5Audio: function() {
          var yb = this || fy;
          if (yb._html5AudioPool.length) return yb._html5AudioPool.pop();
          var bb = (new Audio).play();
          return bb && "undefined" !== typeof Promise && (bb instanceof Promise || "function" === typeof bb.then) && bb.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(yb) {
          var bb = this || fy;
          return yb._unlocked && bb._html5AudioPool.push(yb), bb
        },
        _autoSuspend: function() {
          var yb = this;
          if (yb.autoSuspend && yb.ctx && "undefined" !== typeof yb.ctx.suspend && fy.usingWebAudio) {
            for (var bb = 0; bb < yb._howls.length; bb++)
              if (yb._howls[bb]._webAudio)
                for (var Wy = 0; Wy < yb._howls[bb]._sounds.length; Wy++)
                  if (!yb._howls[bb]._sounds[Wy].Om) return yb;
            return yb._suspendTimer && clearTimeout(yb._suspendTimer), yb._suspendTimer = setTimeout((function() {
              if (yb.autoSuspend) {
                yb._suspendTimer = null, yb.state = "suspending";
                var bb = function() {
                  yb.state = "suspended", yb._resumeAfterSuspend && (delete yb._resumeAfterSuspend, yb._autoResume())
                };
                yb.ctx.suspend().then(bb, bb)
              }
            }), 3e4), yb
          }
        },
        _autoResume: function() {
          var yb = this;
          if (yb.ctx && "undefined" !== typeof yb.ctx.resume && fy.usingWebAudio) return "running" === yb.state && "interrupted" !== yb.ctx.state && yb._suspendTimer ? (clearTimeout(yb._suspendTimer), yb._suspendTimer = null) : "suspended" === yb.state || "running" === yb.state && "interrupted" === yb.ctx.state ? (yb.ctx.resume().then((function() {
            yb.state = "running";
            for (var bb = 0; bb < yb._howls.length; bb++) yb._howls[bb]._emit("resume")
          })), yb._suspendTimer && (clearTimeout(yb._suspendTimer), yb._suspendTimer = null)) : "suspending" === yb.state && (yb._resumeAfterSuspend = !0), yb
        }
      };
      var fy = new hy,
        Zy = function(yb) {
          yb.src && 0 !== yb.src.length ? this.init(yb) : console.error("An array of source files must be passed with any new Howl.")
        };
      Zy.prototype = {
        init: function(yb) {
          var bb = this;
          return fy.ctx || qb(), bb._autoplay = yb.autoplay || !1, bb._format = "string" !== typeof yb.format ? yb.format : [yb.format], bb._html5 = yb.html5 || !1, bb._muted = yb.mute || !1, bb._loop = yb.loop || !1, bb._pool = yb.pool || 5, bb._preload = "boolean" !== typeof yb.preload && "metadata" !== yb.preload || yb.preload, bb._rate = yb.rate || 1, bb._sprite = yb.sprite || {}, bb._src = "string" !== typeof yb.src ? yb.src : [yb.src], bb._volume = void 0 !== yb.volume ? yb.volume : 1, bb._xhr = {
            method: yb.xhr && yb.xhr.method ? yb.xhr.method : "GET",
            headers: yb.xhr && yb.xhr.headers ? yb.xhr.headers : null,
            withCredentials: !(!yb.xhr || !yb.xhr.withCredentials) && yb.xhr.withCredentials
          }, bb._duration = 0, bb._state = "unloaded", bb._sounds = [], bb._endTimers = {}, bb._queue = [], bb._playLock = !1, bb._onend = yb.onend ? [{
            EU: yb.onend
          }] : [], bb._onfade = yb.onfade ? [{
            EU: yb.onfade
          }] : [], bb._onload = yb.onload ? [{
            EU: yb.onload
          }] : [], bb._onloaderror = yb.onloaderror ? [{
            EU: yb.onloaderror
          }] : [], bb._onplayerror = yb.onplayerror ? [{
            EU: yb.onplayerror
          }] : [], bb._onpause = yb.onpause ? [{
            EU: yb.onpause
          }] : [], bb._onplay = yb.onplay ? [{
            EU: yb.onplay
          }] : [], bb._onstop = yb.onstop ? [{
            EU: yb.onstop
          }] : [], bb._onmute = yb.onmute ? [{
            EU: yb.onmute
          }] : [], bb._onvolume = yb.onvolume ? [{
            EU: yb.onvolume
          }] : [], bb._onrate = yb.onrate ? [{
            EU: yb.onrate
          }] : [], bb._onseek = yb.onseek ? [{
            EU: yb.onseek
          }] : [], bb._onunlock = yb.onunlock ? [{
            EU: yb.onunlock
          }] : [], bb._onresume = [], bb._webAudio = fy.usingWebAudio && !bb._html5, "undefined" !== typeof fy.ctx && fy.ctx && fy.autoUnlock && fy._unlockAudio(), fy._howls.push(bb), bb._autoplay && bb._queue.push({
            event: "play",
            action: function() {
              bb.play()
            }
          }), bb._preload && "none" !== bb._preload && bb.load(), bb
        },
        load: function() {
          var yb = this,
            bb = null;
          if (fy.noAudio) yb._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof yb._src && (yb._src = [yb._src]);
            for (var Wy = 0; Wy < yb._src.length; Wy++) {
              var Uy, hy;
              if (yb._format && yb._format[Wy]) Uy = yb._format[Wy];
              else {
                if ("string" !== typeof(hy = yb._src[Wy])) {
                  yb._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Uy = /^data:audio\/([^;,]+);/i.exec(hy)) || (Uy = /\.([^.]+)$/.exec(hy.split("?", 1)[0])), Uy && (Uy = Uy[1].toLowerCase())
              }
              if (Uy || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Uy && fy.codecs(Uy)) {
                bb = yb._src[Wy];
                break
              }
            }
            if (bb) return yb._src = bb, yb._state = "loading", "https:" === window.location.protocol && "http:" === bb.slice(0, 5) && (yb._html5 = !0, yb._webAudio = !1), new cb(yb), yb._webAudio && oy(yb), yb;
            yb._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(yb, bb) {
          var Wy = this,
            Uy = null;
          if ("number" === typeof yb) Uy = yb, yb = null;
          else {
            if ("string" === typeof yb && "loaded" === Wy._state && !Wy._sprite[yb]) return null;
            if ("undefined" === typeof yb && (yb = "__default", !Wy._playLock)) {
              for (var hy = 0, Zy = 0; Zy < Wy._sounds.length; Zy++) Wy._sounds[Zy].Om && !Wy._sounds[Zy]._ended && (hy++, Uy = Wy._sounds[Zy]._id);
              1 === hy ? yb = null : Uy = null
            }
          }
          var cb = Uy ? Wy._soundById(Uy) : Wy._inactiveSound();
          if (!cb) return null;
          if (Uy && !yb && (yb = cb._sprite || "__default"), "loaded" !== Wy._state) {
            cb._sprite = yb, cb._ended = !1;
            var Py = cb._id;
            return Wy._queue.push({
              event: "play",
              action: function() {
                Wy.play(Py)
              }
            }), Py
          }
          if (Uy && !cb.Om) return bb || Wy._loadQueue("play"), cb._id;
          Wy._webAudio && fy._autoResume();
          var oy = Math.max(0, cb._seek > 0 ? cb._seek : Wy._sprite[yb][0] / 1e3),
            By = Math.max(0, (Wy._sprite[yb][0] + Wy._sprite[yb][1]) / 1e3 - oy),
            Ky = 1e3 * By / Math.abs(cb._rate),
            ey = Wy._sprite[yb][0] / 1e3,
            qb = (Wy._sprite[yb][0] + Wy._sprite[yb][1]) / 1e3;
          cb._sprite = yb, cb._ended = !1;
          var sy = function() {
            cb.Om = !1, cb._seek = oy, cb._start = ey, cb._stop = qb, cb._loop = !(!cb._loop && !Wy._sprite[yb][2])
          };
          if (!(oy >= qb)) {
            var Sy = cb._node;
            if (Wy._webAudio) {
              var Ey = function() {
                Wy._playLock = !1, sy(), Wy._refreshBuffer(cb);
                var yb = cb._muted || Wy._muted ? 0 : cb._volume;
                Sy.gain.setValueAtTime(yb, fy.ctx.currentTime), cb._playStart = fy.ctx.currentTime, "undefined" === typeof Sy.bufferSource.start ? cb._loop ? Sy.bufferSource.noteGrainOn(0, oy, 86400) : Sy.bufferSource.noteGrainOn(0, oy, By) : cb._loop ? Sy.bufferSource.start(0, oy, 86400) : Sy.bufferSource.start(0, oy, By), Ky !== 1 / 0 && (Wy._endTimers[cb._id] = setTimeout(Wy._ended.bind(Wy, cb), Ky)), bb || setTimeout((function() {
                  Wy._emit("play", cb._id), Wy._loadQueue()
                }), 0)
              };
              "running" === fy.state && "interrupted" !== fy.ctx.state ? Ey() : (Wy._playLock = !0, Wy.once("resume", Ey), Wy._clearTimer(cb._id))
            } else {
              var ly = function() {
                Sy.currentTime = oy, Sy.muted = cb._muted || Wy._muted || fy._muted || Sy.muted, Sy.volume = cb._volume * fy.volume(), Sy.playbackRate = cb._rate;
                try {
                  var Uy = Sy.play();
                  if (Uy && "undefined" !== typeof Promise && (Uy instanceof Promise || "function" === typeof Uy.then) ? (Wy._playLock = !0, sy(), Uy.then((function() {
                      Wy._playLock = !1, Sy._unlocked = !0, bb ? Wy._loadQueue() : Wy._emit("play", cb._id)
                    })).catch((function() {
                      Wy._playLock = !1, Wy._emit("playerror", cb._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), cb._ended = !0, cb.Om = !0
                    }))) : bb || (Wy._playLock = !1, sy(), Wy._emit("play", cb._id)), Sy.playbackRate = cb._rate, Sy.paused) return void Wy._emit("playerror", cb._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== yb || cb._loop ? Wy._endTimers[cb._id] = setTimeout(Wy._ended.bind(Wy, cb), Ky) : (Wy._endTimers[cb._id] = function() {
                    Wy._ended(cb), Sy.removeEventListener("ended", Wy._endTimers[cb._id], !1)
                  }, Sy.addEventListener("ended", Wy._endTimers[cb._id], !1))
                } catch (hy) {
                  Wy._emit("playerror", cb._id, hy)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Sy.src && (Sy.src = Wy._src, Sy.load());
              var mb = window && window.ejecta || !Sy.readyState && fy._navigator.isCocoonJS;
              if (Sy.readyState >= 3 || mb) ly();
              else {
                Wy._playLock = !0, Wy._state = "loading";
                var Cy = function() {
                  Wy._state = "loaded", ly(), Sy.removeEventListener(fy._canPlayEvent, Cy, !1)
                };
                Sy.addEventListener(fy._canPlayEvent, Cy, !1), Wy._clearTimer(cb._id)
              }
            }
            return cb._id
          }
          Wy._ended(cb)
        },
        pause: function(yb) {
          var bb = this;
          if ("loaded" !== bb._state || bb._playLock) return bb._queue.push({
            event: "pause",
            action: function() {
              bb.pause(yb)
            }
          }), bb;
          for (var Wy = bb._getSoundIds(yb), Uy = 0; Uy < Wy.length; Uy++) {
            bb._clearTimer(Wy[Uy]);
            var hy = bb._soundById(Wy[Uy]);
            if (hy && !hy.Om && (hy._seek = bb.seek(Wy[Uy]), hy._rateSeek = 0, hy.Om = !0, bb._stopFade(Wy[Uy]), hy._node))
              if (bb._webAudio) {
                if (!hy._node.bufferSource) continue;
                "undefined" === typeof hy._node.bufferSource.stop ? hy._node.bufferSource.noteOff(0) : hy._node.bufferSource.stop(0), bb._cleanBuffer(hy._node)
              } else isNaN(hy._node.duration) && hy._node.duration !== 1 / 0 || hy._node.pause();
            arguments[1] || bb._emit("pause", hy ? hy._id : null)
          }
          return bb
        },
        stop: function(yb, bb) {
          var Wy = this;
          if ("loaded" !== Wy._state || Wy._playLock) return Wy._queue.push({
            event: "stop",
            action: function() {
              Wy.stop(yb)
            }
          }), Wy;
          for (var Uy = Wy._getSoundIds(yb), hy = 0; hy < Uy.length; hy++) {
            Wy._clearTimer(Uy[hy]);
            var fy = Wy._soundById(Uy[hy]);
            fy && (fy._seek = fy._start || 0, fy._rateSeek = 0, fy.Om = !0, fy._ended = !0, Wy._stopFade(Uy[hy]), fy._node && (Wy._webAudio ? fy._node.bufferSource && ("undefined" === typeof fy._node.bufferSource.stop ? fy._node.bufferSource.noteOff(0) : fy._node.bufferSource.stop(0), Wy._cleanBuffer(fy._node)) : isNaN(fy._node.duration) && fy._node.duration !== 1 / 0 || (fy._node.currentTime = fy._start || 0, fy._node.pause(), fy._node.duration === 1 / 0 && Wy._clearSound(fy._node))), bb || Wy._emit("stop", fy._id))
          }
          return Wy
        },
        mute: function(yb, bb) {
          var Wy = this;
          if ("loaded" !== Wy._state || Wy._playLock) return Wy._queue.push({
            event: "mute",
            action: function() {
              Wy.mute(yb, bb)
            }
          }), Wy;
          if ("undefined" === typeof bb) {
            if ("boolean" !== typeof yb) return Wy._muted;
            Wy._muted = yb
          }
          for (var Uy = Wy._getSoundIds(bb), hy = 0; hy < Uy.length; hy++) {
            var Zy = Wy._soundById(Uy[hy]);
            Zy && (Zy._muted = yb, Zy._interval && Wy._stopFade(Zy._id), Wy._webAudio && Zy._node ? Zy._node.gain.setValueAtTime(yb ? 0 : Zy._volume, fy.ctx.currentTime) : Zy._node && (Zy._node.muted = !!fy._muted || yb), Wy._emit("mute", Zy._id))
          }
          return Wy
        },
        volume: function() {
          var yb, bb, Wy, Uy = this,
            hy = arguments;
          if (0 === hy.length) return Uy._volume;
          if (1 === hy.length || 2 === hy.length && "undefined" === typeof hy[1] ? Uy._getSoundIds().indexOf(hy[0]) >= 0 ? bb = parseInt(hy[0], 10) : yb = parseFloat(hy[0]) : hy.length >= 2 && (yb = parseFloat(hy[0]), bb = parseInt(hy[1], 10)), !("undefined" !== typeof yb && yb >= 0 && yb <= 1)) return (Wy = bb ? Uy._soundById(bb) : Uy._sounds[0]) ? Wy._volume : 0;
          if ("loaded" !== Uy._state || Uy._playLock) return Uy._queue.push({
            event: "volume",
            action: function() {
              Uy.volume.apply(Uy, hy)
            }
          }), Uy;
          "undefined" === typeof bb && (Uy._volume = yb), bb = Uy._getSoundIds(bb);
          for (var Zy = 0; Zy < bb.length; Zy++)(Wy = Uy._soundById(bb[Zy])) && (Wy._volume = yb, hy[2] || Uy._stopFade(bb[Zy]), Uy._webAudio && Wy._node && !Wy._muted ? Wy._node.gain.setValueAtTime(yb, fy.ctx.currentTime) : Wy._node && !Wy._muted && (Wy._node.volume = yb * fy.volume()), Uy._emit("volume", Wy._id));
          return Uy
        },
        fade: function(yb, bb, Wy, Uy) {
          var hy = this;
          if ("loaded" !== hy._state || hy._playLock) return hy._queue.push({
            event: "fade",
            action: function() {
              hy.fade(yb, bb, Wy, Uy)
            }
          }), hy;
          yb = Math.min(Math.max(0, parseFloat(yb)), 1), bb = Math.min(Math.max(0, parseFloat(bb)), 1), Wy = parseFloat(Wy), hy.volume(yb, Uy);
          for (var Zy = hy._getSoundIds(Uy), cb = 0; cb < Zy.length; cb++) {
            var Py = hy._soundById(Zy[cb]);
            if (Py) {
              if (Uy || hy._stopFade(Zy[cb]), hy._webAudio && !Py._muted) {
                var oy = fy.ctx.currentTime,
                  By = oy + Wy / 1e3;
                Py._volume = yb, Py._node.gain.setValueAtTime(yb, oy), Py._node.gain.linearRampToValueAtTime(bb, By)
              }
              hy._startFadeInterval(Py, yb, bb, Wy, Zy[cb], "undefined" === typeof Uy)
            }
          }
          return hy
        },
        _startFadeInterval: function(yb, bb, Wy, Uy, hy, fy) {
          var Zy = this,
            cb = bb,
            Py = Wy - bb,
            oy = Math.abs(Py / .01),
            By = Math.max(4, oy > 0 ? Uy / oy : Uy),
            Ky = Date.now();
          yb._fadeTo = Wy, yb._interval = setInterval((function() {
            var hy = (Date.now() - Ky) / Uy;
            Ky = Date.now(), cb += Py * hy, cb = Math.round(100 * cb) / 100, cb = Py < 0 ? Math.max(Wy, cb) : Math.min(Wy, cb), Zy._webAudio ? yb._volume = cb : Zy.volume(cb, yb._id, !0), fy && (Zy._volume = cb), (Wy < bb && cb <= Wy || Wy > bb && cb >= Wy) && (clearInterval(yb._interval), yb._interval = null, yb._fadeTo = null, Zy.volume(Wy, yb._id), Zy._emit("fade", yb._id))
          }), By)
        },
        _stopFade: function(yb) {
          var bb = this,
            Wy = bb._soundById(yb);
          return Wy && Wy._interval && (bb._webAudio && Wy._node.gain.cancelScheduledValues(fy.ctx.currentTime), clearInterval(Wy._interval), Wy._interval = null, bb.volume(Wy._fadeTo, yb), Wy._fadeTo = null, bb._emit("fade", yb)), bb
        },
        loop: function() {
          var yb, bb, Wy, Uy = this,
            hy = arguments;
          if (0 === hy.length) return Uy._loop;
          if (1 === hy.length) {
            if ("boolean" !== typeof hy[0]) return !!(Wy = Uy._soundById(parseInt(hy[0], 10))) && Wy._loop;
            yb = hy[0], Uy._loop = yb
          } else 2 === hy.length && (yb = hy[0], bb = parseInt(hy[1], 10));
          for (var fy = Uy._getSoundIds(bb), Zy = 0; Zy < fy.length; Zy++)(Wy = Uy._soundById(fy[Zy])) && (Wy._loop = yb, Uy._webAudio && Wy._node && Wy._node.bufferSource && (Wy._node.bufferSource.loop = yb, yb && (Wy._node.bufferSource.loopStart = Wy._start || 0, Wy._node.bufferSource.loopEnd = Wy._stop, Uy.playing(fy[Zy]) && (Uy.pause(fy[Zy], !0), Uy.play(fy[Zy], !0)))));
          return Uy
        },
        rate: function() {
          var yb, bb, Wy, Uy = this,
            hy = arguments;
          if (0 === hy.length) bb = Uy._sounds[0]._id;
          else if (1 === hy.length) {
            Uy._getSoundIds().indexOf(hy[0]) >= 0 ? bb = parseInt(hy[0], 10) : yb = parseFloat(hy[0])
          } else 2 === hy.length && (yb = parseFloat(hy[0]), bb = parseInt(hy[1], 10));
          if ("number" !== typeof yb) return (Wy = Uy._soundById(bb)) ? Wy._rate : Uy._rate;
          if ("loaded" !== Uy._state || Uy._playLock) return Uy._queue.push({
            event: "rate",
            action: function() {
              Uy.rate.apply(Uy, hy)
            }
          }), Uy;
          "undefined" === typeof bb && (Uy._rate = yb), bb = Uy._getSoundIds(bb);
          for (var Zy = 0; Zy < bb.length; Zy++)
            if (Wy = Uy._soundById(bb[Zy])) {
              Uy.playing(bb[Zy]) && (Wy._rateSeek = Uy.seek(bb[Zy]), Wy._playStart = Uy._webAudio ? fy.ctx.currentTime : Wy._playStart), Wy._rate = yb, Uy._webAudio && Wy._node && Wy._node.bufferSource ? Wy._node.bufferSource.playbackRate.setValueAtTime(yb, fy.ctx.currentTime) : Wy._node && (Wy._node.playbackRate = yb);
              var cb = Uy.seek(bb[Zy]),
                Py = 1e3 * ((Uy._sprite[Wy._sprite][0] + Uy._sprite[Wy._sprite][1]) / 1e3 - cb) / Math.abs(Wy._rate);
              !Uy._endTimers[bb[Zy]] && Wy.Om || (Uy._clearTimer(bb[Zy]), Uy._endTimers[bb[Zy]] = setTimeout(Uy._ended.bind(Uy, Wy), Py)), Uy._emit("rate", Wy._id)
            } return Uy
        },
        seek: function() {
          var yb, bb, Wy = this,
            Uy = arguments;
          if (0 === Uy.length) Wy._sounds.length && (bb = Wy._sounds[0]._id);
          else if (1 === Uy.length) {
            Wy._getSoundIds().indexOf(Uy[0]) >= 0 ? bb = parseInt(Uy[0], 10) : Wy._sounds.length && (bb = Wy._sounds[0]._id, yb = parseFloat(Uy[0]))
          } else 2 === Uy.length && (yb = parseFloat(Uy[0]), bb = parseInt(Uy[1], 10));
          if ("undefined" === typeof bb) return 0;
          if ("number" === typeof yb && ("loaded" !== Wy._state || Wy._playLock)) return Wy._queue.push({
            event: "seek",
            action: function() {
              Wy.seek.apply(Wy, Uy)
            }
          }), Wy;
          var hy = Wy._soundById(bb);
          if (hy) {
            if (!("number" === typeof yb && yb >= 0)) {
              if (Wy._webAudio) {
                var Zy = Wy.playing(bb) ? fy.ctx.currentTime - hy._playStart : 0,
                  cb = hy._rateSeek ? hy._rateSeek - hy._seek : 0;
                return hy._seek + (cb + Zy * Math.abs(hy._rate))
              }
              return hy._node.currentTime
            }
            var Py = Wy.playing(bb);
            Py && Wy.pause(bb, !0), hy._seek = yb, hy._ended = !1, Wy._clearTimer(bb), Wy._webAudio || !hy._node || isNaN(hy._node.duration) || (hy._node.currentTime = yb);
            var oy = function() {
              Py && Wy.play(bb, !0), Wy._emit("seek", bb)
            };
            if (Py && !Wy._webAudio) {
              var By = function() {
                Wy._playLock ? setTimeout(By, 0) : oy()
              };
              setTimeout(By, 0)
            } else oy()
          }
          return Wy
        },
        playing: function(yb) {
          var bb = this;
          if ("number" === typeof yb) {
            var Wy = bb._soundById(yb);
            return !!Wy && !Wy.Om
          }
          for (var Uy = 0; Uy < bb._sounds.length; Uy++)
            if (!bb._sounds[Uy].Om) return !0;
          return !1
        },
        duration: function(yb) {
          var bb = this,
            Wy = bb._duration,
            Uy = bb._soundById(yb);
          return Uy && (Wy = bb._sprite[Uy._sprite][1] / 1e3), Wy
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var yb = this, bb = yb._sounds, Wy = 0; Wy < bb.length; Wy++) bb[Wy].Om || yb.stop(bb[Wy]._id), yb._webAudio || (yb._clearSound(bb[Wy]._node), bb[Wy]._node.removeEventListener("error", bb[Wy]._errorFn, !1), bb[Wy]._node.removeEventListener(fy._canPlayEvent, bb[Wy]._loadFn, !1), bb[Wy]._node.removeEventListener("ended", bb[Wy]._endFn, !1), fy._releaseHtml5Audio(bb[Wy]._node)), delete bb[Wy]._node, yb._clearTimer(bb[Wy]._id);
          var Uy = fy._howls.indexOf(yb);
          Uy >= 0 && fy._howls.splice(Uy, 1);
          var hy = !0;
          for (Wy = 0; Wy < fy._howls.length; Wy++)
            if (fy._howls[Wy]._src === yb._src || yb._src.indexOf(fy._howls[Wy]._src) >= 0) {
              hy = !1;
              break
            } return Py && hy && delete Py[yb._src], fy.noAudio = !1, yb._state = "unloaded", yb._sounds = [], yb = null, null
        },
        on: function(yb, bb, Wy, Uy) {
          var hy = this["_on" + yb];
          return "function" === typeof bb && hy.push(Uy ? {
            id: Wy,
            EU: bb,
            once: Uy
          } : {
            id: Wy,
            EU: bb
          }), this
        },
        off: function(yb, bb, Wy) {
          var Uy = this,
            hy = Uy["_on" + yb],
            fy = 0;
          if ("number" === typeof bb && (Wy = bb, bb = null), bb || Wy)
            for (fy = 0; fy < hy.length; fy++) {
              var Zy = Wy === hy[fy].id;
              if (bb === hy[fy].EU && Zy || !bb && Zy) {
                hy.splice(fy, 1);
                break
              }
            } else if (yb) Uy["_on" + yb] = [];
            else {
              var cb = Object.keys(Uy);
              for (fy = 0; fy < cb.length; fy++) 0 === cb[fy].indexOf("_on") && Array.isArray(Uy[cb[fy]]) && (Uy[cb[fy]] = [])
            } return Uy
        },
        once: function(yb, bb, Wy) {
          return this.on(yb, bb, Wy, 1), this
        },
        _emit: function(yb, bb, Wy) {
          for (var Uy = this, hy = Uy["_on" + yb], fy = hy.length - 1; fy >= 0; fy--) hy[fy].id && hy[fy].id !== bb && "load" !== yb || (setTimeout(function(yb) {
            yb.call(this, bb, Wy)
          }.bind(Uy, hy[fy].EU), 0), hy[fy].once && Uy.off(yb, hy[fy].EU, hy[fy].id));
          return Uy._loadQueue(yb), Uy
        },
        _loadQueue: function(yb) {
          var bb = this;
          if (bb._queue.length > 0) {
            var Wy = bb._queue[0];
            Wy.event === yb && (bb._queue.shift(), bb._loadQueue()), yb || Wy.action()
          }
          return bb
        },
        _ended: function(yb) {
          var bb = this,
            Wy = yb._sprite;
          if (!bb._webAudio && yb._node && !yb._node.paused && !yb._node.ended && yb._node.currentTime < yb._stop) return setTimeout(bb._ended.bind(bb, yb), 100), bb;
          var Uy = !(!yb._loop && !bb._sprite[Wy][2]);
          if (bb._emit("end", yb._id), !bb._webAudio && Uy && bb.stop(yb._id, !0).play(yb._id), bb._webAudio && Uy) {
            bb._emit("play", yb._id), yb._seek = yb._start || 0, yb._rateSeek = 0, yb._playStart = fy.ctx.currentTime;
            var hy = 1e3 * (yb._stop - yb._start) / Math.abs(yb._rate);
            bb._endTimers[yb._id] = setTimeout(bb._ended.bind(bb, yb), hy)
          }
          return bb._webAudio && !Uy && (yb.Om = !0, yb._ended = !0, yb._seek = yb._start || 0, yb._rateSeek = 0, bb._clearTimer(yb._id), bb._cleanBuffer(yb._node), fy._autoSuspend()), bb._webAudio || Uy || bb.stop(yb._id, !0), bb
        },
        _clearTimer: function(yb) {
          var bb = this;
          if (bb._endTimers[yb]) {
            if ("function" !== typeof bb._endTimers[yb]) clearTimeout(bb._endTimers[yb]);
            else {
              var Wy = bb._soundById(yb);
              Wy && Wy._node && Wy._node.removeEventListener("ended", bb._endTimers[yb], !1)
            }
            delete bb._endTimers[yb]
          }
          return bb
        },
        _soundById: function(yb) {
          for (var bb = this, Wy = 0; Wy < bb._sounds.length; Wy++)
            if (yb === bb._sounds[Wy]._id) return bb._sounds[Wy];
          return null
        },
        _inactiveSound: function() {
          var yb = this;
          yb._drain();
          for (var bb = 0; bb < yb._sounds.length; bb++)
            if (yb._sounds[bb]._ended) return yb._sounds[bb].reset();
          return new cb(yb)
        },
        _drain: function() {
          var yb = this,
            bb = yb._pool,
            Wy = 0,
            Uy = 0;
          if (!(yb._sounds.length < bb)) {
            for (Uy = 0; Uy < yb._sounds.length; Uy++) yb._sounds[Uy]._ended && Wy++;
            for (Uy = yb._sounds.length - 1; Uy >= 0; Uy--) {
              if (Wy <= bb) return;
              yb._sounds[Uy]._ended && (yb._webAudio && yb._sounds[Uy]._node && yb._sounds[Uy]._node.disconnect(0), yb._sounds.splice(Uy, 1), Wy--)
            }
          }
        },
        _getSoundIds: function(yb) {
          if ("undefined" === typeof yb) {
            for (var bb = [], Wy = 0; Wy < this._sounds.length; Wy++) bb.push(this._sounds[Wy]._id);
            return bb
          }
          return [yb]
        },
        _refreshBuffer: function(yb) {
          return yb._node.bufferSource = fy.ctx.createBufferSource(), yb._node.bufferSource.buffer = Py[this._src], yb._panner ? yb._node.bufferSource.connect(yb._panner) : yb._node.bufferSource.connect(yb._node), yb._node.bufferSource.loop = yb._loop, yb._loop && (yb._node.bufferSource.loopStart = yb._start || 0, yb._node.bufferSource.loopEnd = yb._stop || 0), yb._node.bufferSource.playbackRate.setValueAtTime(yb._rate, fy.ctx.currentTime), this
        },
        _cleanBuffer: function(yb) {
          var bb = fy._navigator && fy._navigator.vendor.indexOf("Apple") >= 0;
          if (fy._scratchBuffer && yb.bufferSource && (yb.bufferSource.onended = null, yb.bufferSource.disconnect(0), bb)) try {
            yb.bufferSource.buffer = fy._scratchBuffer
          } catch (Wy) {}
          return yb.bufferSource = null, this
        },
        _clearSound: function(yb) {
          /MSIE |Trident\//.test(fy._navigator && fy._navigator.userAgent) || (yb.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var cb = function(yb) {
        this._parent = yb, this.init()
      };
      cb.prototype = {
        init: function() {
          var yb = this,
            bb = yb._parent;
          return yb._muted = bb._muted, yb._loop = bb._loop, yb._volume = bb._volume, yb._rate = bb._rate, yb._seek = 0, yb.Om = !0, yb._ended = !0, yb._sprite = "__default", yb._id = ++fy._counter, bb._sounds.push(yb), yb.create(), yb
        },
        create: function() {
          var yb = this,
            bb = yb._parent,
            Wy = fy._muted || yb._muted || yb._parent._muted ? 0 : yb._volume;
          return bb._webAudio ? (yb._node = "undefined" === typeof fy.ctx.createGain ? fy.ctx.createGainNode() : fy.ctx.createGain(), yb._node.gain.setValueAtTime(Wy, fy.ctx.currentTime), yb._node.paused = !0, yb._node.connect(fy.masterGain)) : fy.noAudio || (yb._node = fy._obtainHtml5Audio(), yb._errorFn = yb._errorListener.bind(yb), yb._node.addEventListener("error", yb._errorFn, !1), yb._loadFn = yb._loadListener.bind(yb), yb._node.addEventListener(fy._canPlayEvent, yb._loadFn, !1), yb._endFn = yb._endListener.bind(yb), yb._node.addEventListener("ended", yb._endFn, !1), yb._node.src = bb._src, yb._node.preload = !0 === bb._preload ? "auto" : bb._preload, yb._node.volume = Wy * fy.volume(), yb._node.load()), yb
        },
        reset: function() {
          var yb = this,
            bb = yb._parent;
          return yb._muted = bb._muted, yb._loop = bb._loop, yb._volume = bb._volume, yb._rate = bb._rate, yb._seek = 0, yb._rateSeek = 0, yb.Om = !0, yb._ended = !0, yb._sprite = "__default", yb._id = ++fy._counter, yb
        },
        _errorListener: function() {
          var yb = this;
          yb._parent._emit("loaderror", yb._id, yb._node.error ? yb._node.error.code : 0), yb._node.removeEventListener("error", yb._errorFn, !1)
        },
        _loadListener: function() {
          var yb = this,
            bb = yb._parent;
          bb._duration = Math.ceil(10 * yb._node.duration) / 10, 0 === Object.keys(bb._sprite).length && (bb._sprite = {
            __default: [0, 1e3 * bb._duration]
          }), "loaded" !== bb._state && (bb._state = "loaded", bb._emit("load"), bb._loadQueue()), yb._node.removeEventListener(fy._canPlayEvent, yb._loadFn, !1)
        },
        _endListener: function() {
          var yb = this,
            bb = yb._parent;
          bb._duration === 1 / 0 && (bb._duration = Math.ceil(10 * yb._node.duration) / 10, bb._sprite.__default[1] === 1 / 0 && (bb._sprite.__default[1] = 1e3 * bb._duration), bb._ended(yb)), yb._node.removeEventListener("ended", yb._endFn, !1)
        }
      };
      var Py = {},
        oy = function(yb) {
          var bb = yb._src;
          if (Py[bb]) return yb._duration = Py[bb].duration, void ey(yb);
          if (/^data:[^;]+;base64,/.test(bb)) {
            for (var Wy = atob(bb.split(",")[1]), Uy = new Uint8Array(Wy.length), hy = 0; hy < Wy.length; ++hy) Uy[hy] = Wy.charCodeAt(hy);
            Ky(Uy.buffer, yb)
          } else {
            var fy = new XMLHttpRequest;
            fy.open(yb._xhr.method, bb, !0), fy.withCredentials = yb._xhr.withCredentials, fy.responseType = "arraybuffer", yb._xhr.headers && Object.keys(yb._xhr.headers).forEach((function(bb) {
              fy.setRequestHeader(bb, yb._xhr.headers[bb])
            })), fy.onload = function() {
              var bb = (fy.status + "")[0];
              "0" === bb || "2" === bb || "3" === bb ? Ky(fy.response, yb) : yb._emit("loaderror", null, "Failed loading audio file with status: " + fy.status + ".")
            }, fy.onerror = function() {
              yb._webAudio && (yb._html5 = !0, yb._webAudio = !1, yb._sounds = [], delete Py[bb], yb.load())
            }, By(fy)
          }
        },
        By = function(yb) {
          try {
            yb.send()
          } catch (bb) {
            yb.onerror()
          }
        },
        Ky = function(yb, bb) {
          var Wy = function() {
              bb._emit("loaderror", null, "Decoding audio data failed.")
            },
            Uy = function(yb) {
              yb && bb._sounds.length > 0 ? (Py[bb._src] = yb, ey(bb, yb)) : Wy()
            };
          "undefined" !== typeof Promise && 1 === fy.ctx.decodeAudioData.length ? fy.ctx.decodeAudioData(yb).then(Uy).catch(Wy) : fy.ctx.decodeAudioData(yb, Uy, Wy)
        },
        ey = function(yb, bb) {
          bb && !yb._duration && (yb._duration = bb.duration), 0 === Object.keys(yb._sprite).length && (yb._sprite = {
            __default: [0, 1e3 * yb._duration]
          }), "loaded" !== yb._state && (yb._state = "loaded", yb._emit("load"), yb._loadQueue())
        },
        qb = function() {
          if (fy.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? fy.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? fy.ctx = new webkitAudioContext : fy.usingWebAudio = !1
            } catch (hy) {
              fy.usingWebAudio = !1
            }
            fy.ctx || (fy.usingWebAudio = !1);
            var yb = /iP(hone|od|ad)/.test(fy._navigator && fy._navigator.platform),
              bb = fy._navigator && fy._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              Wy = bb ? parseInt(bb[1], 10) : null;
            if (yb && Wy && Wy < 9) {
              var Uy = /safari/.test(fy._navigator && fy._navigator.userAgent.toLowerCase());
              fy._navigator && !Uy && (fy.usingWebAudio = !1)
            }
            fy.usingWebAudio && (fy.masterGain = "undefined" === typeof fy.ctx.createGain ? fy.ctx.createGainNode() : fy.ctx.createGain(), fy.masterGain.gain.setValueAtTime(fy._muted ? 0 : fy._volume, fy.ctx.currentTime), fy.masterGain.connect(fy.ctx.destination)), fy._setup()
          }
        };
      void 0 === (Uy = function() {
        return {
          Howler: fy,
          Howl: Zy
        }
      }.apply(bb, [])) || (yb.exports = Uy), bb.Howler = fy, bb.Howl = Zy, "undefined" !== typeof Wy.g ? (Wy.g.HowlerGlobal = hy, Wy.g.Howler = fy, Wy.g.Howl = Zy, Wy.g.Sound = cb) : "undefined" !== typeof window && (window.HowlerGlobal = hy, window.Howler = fy, window.Howl = Zy, window.Sound = cb)
    }(),
    function() {
      var yb;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(yb) {
        var bb = this;
        if (!bb.ctx || !bb.ctx.listener) return bb;
        for (var Wy = bb._howls.length - 1; Wy >= 0; Wy--) bb._howls[Wy].stereo(yb);
        return bb
      }, HowlerGlobal.prototype.pos = function(yb, bb, Wy) {
        var Uy = this;
        return Uy.ctx && Uy.ctx.listener ? (bb = "number" !== typeof bb ? Uy._pos[1] : bb, Wy = "number" !== typeof Wy ? Uy._pos[2] : Wy, "number" !== typeof yb ? Uy._pos : (Uy._pos = [yb, bb, Wy], "undefined" !== typeof Uy.ctx.listener.positionX ? (Uy.ctx.listener.positionX.setTargetAtTime(Uy._pos[0], Howler.ctx.currentTime, .1), Uy.ctx.listener.positionY.setTargetAtTime(Uy._pos[1], Howler.ctx.currentTime, .1), Uy.ctx.listener.positionZ.setTargetAtTime(Uy._pos[2], Howler.ctx.currentTime, .1)) : Uy.ctx.listener.setPosition(Uy._pos[0], Uy._pos[1], Uy._pos[2]), Uy)) : Uy
      }, HowlerGlobal.prototype.orientation = function(yb, bb, Wy, Uy, hy, fy) {
        var Zy = this;
        if (!Zy.ctx || !Zy.ctx.listener) return Zy;
        var cb = Zy._orientation;
        return bb = "number" !== typeof bb ? cb[1] : bb, Wy = "number" !== typeof Wy ? cb[2] : Wy, Uy = "number" !== typeof Uy ? cb[3] : Uy, hy = "number" !== typeof hy ? cb[4] : hy, fy = "number" !== typeof fy ? cb[5] : fy, "number" !== typeof yb ? cb : (Zy._orientation = [yb, bb, Wy, Uy, hy, fy], "undefined" !== typeof Zy.ctx.listener.forwardX ? (Zy.ctx.listener.forwardX.setTargetAtTime(yb, Howler.ctx.currentTime, .1), Zy.ctx.listener.forwardY.setTargetAtTime(bb, Howler.ctx.currentTime, .1), Zy.ctx.listener.forwardZ.setTargetAtTime(Wy, Howler.ctx.currentTime, .1), Zy.ctx.listener.upX.setTargetAtTime(Uy, Howler.ctx.currentTime, .1), Zy.ctx.listener.upY.setTargetAtTime(hy, Howler.ctx.currentTime, .1), Zy.ctx.listener.upZ.setTargetAtTime(fy, Howler.ctx.currentTime, .1)) : Zy.ctx.listener.setOrientation(yb, bb, Wy, Uy, hy, fy), Zy)
      }, Howl.prototype.init = (yb = Howl.prototype.init, function(bb) {
        var Wy = this;
        return Wy._orientation = bb.orientation || [1, 0, 0], Wy._stereo = bb.stereo || null, Wy._pos = bb.pos || null, Wy._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof bb.coneInnerAngle ? bb.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof bb.coneOuterAngle ? bb.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof bb.coneOuterGain ? bb.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof bb.distanceModel ? bb.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof bb.maxDistance ? bb.maxDistance : 1e4,
          panningModel: "undefined" !== typeof bb.panningModel ? bb.panningModel : "HRTF",
          refDistance: "undefined" !== typeof bb.refDistance ? bb.refDistance : 1,
          rolloffFactor: "undefined" !== typeof bb.rolloffFactor ? bb.rolloffFactor : 1
        }, Wy._onstereo = bb.onstereo ? [{
          EU: bb.onstereo
        }] : [], Wy._onpos = bb.onpos ? [{
          EU: bb.onpos
        }] : [], Wy._onorientation = bb.onorientation ? [{
          EU: bb.onorientation
        }] : [], yb.call(this, bb)
      }), Howl.prototype.stereo = function(yb, Wy) {
        var Uy = this;
        if (!Uy._webAudio) return Uy;
        if ("loaded" !== Uy._state) return Uy._queue.push({
          event: "stereo",
          action: function() {
            Uy.stereo(yb, Wy)
          }
        }), Uy;
        var hy = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof Wy) {
          if ("number" !== typeof yb) return Uy._stereo;
          Uy._stereo = yb, Uy._pos = [yb, 0, 0]
        }
        for (var fy = Uy._getSoundIds(Wy), Zy = 0; Zy < fy.length; Zy++) {
          var cb = Uy._soundById(fy[Zy]);
          if (cb) {
            if ("number" !== typeof yb) return cb._stereo;
            cb._stereo = yb, cb._pos = [yb, 0, 0], cb._node && (cb._pannerAttr.panningModel = "equalpower", cb._panner && cb._panner.pan || bb(cb, hy), "spatial" === hy ? "undefined" !== typeof cb._panner.positionX ? (cb._panner.positionX.setValueAtTime(yb, Howler.ctx.currentTime), cb._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), cb._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : cb._panner.setPosition(yb, 0, 0) : cb._panner.pan.setValueAtTime(yb, Howler.ctx.currentTime)), Uy._emit("stereo", cb._id)
          }
        }
        return Uy
      }, Howl.prototype.pos = function(yb, Wy, Uy, hy) {
        var fy = this;
        if (!fy._webAudio) return fy;
        if ("loaded" !== fy._state) return fy._queue.push({
          event: "pos",
          action: function() {
            fy.pos(yb, Wy, Uy, hy)
          }
        }), fy;
        if (Wy = "number" !== typeof Wy ? 0 : Wy, Uy = "number" !== typeof Uy ? -.5 : Uy, "undefined" === typeof hy) {
          if ("number" !== typeof yb) return fy._pos;
          fy._pos = [yb, Wy, Uy]
        }
        for (var Zy = fy._getSoundIds(hy), cb = 0; cb < Zy.length; cb++) {
          var Py = fy._soundById(Zy[cb]);
          if (Py) {
            if ("number" !== typeof yb) return Py._pos;
            Py._pos = [yb, Wy, Uy], Py._node && (Py._panner && !Py._panner.pan || bb(Py, "spatial"), "undefined" !== typeof Py._panner.positionX ? (Py._panner.positionX.setValueAtTime(yb, Howler.ctx.currentTime), Py._panner.positionY.setValueAtTime(Wy, Howler.ctx.currentTime), Py._panner.positionZ.setValueAtTime(Uy, Howler.ctx.currentTime)) : Py._panner.setPosition(yb, Wy, Uy)), fy._emit("pos", Py._id)
          }
        }
        return fy
      }, Howl.prototype.orientation = function(yb, Wy, Uy, hy) {
        var fy = this;
        if (!fy._webAudio) return fy;
        if ("loaded" !== fy._state) return fy._queue.push({
          event: "orientation",
          action: function() {
            fy.orientation(yb, Wy, Uy, hy)
          }
        }), fy;
        if (Wy = "number" !== typeof Wy ? fy._orientation[1] : Wy, Uy = "number" !== typeof Uy ? fy._orientation[2] : Uy, "undefined" === typeof hy) {
          if ("number" !== typeof yb) return fy._orientation;
          fy._orientation = [yb, Wy, Uy]
        }
        for (var Zy = fy._getSoundIds(hy), cb = 0; cb < Zy.length; cb++) {
          var Py = fy._soundById(Zy[cb]);
          if (Py) {
            if ("number" !== typeof yb) return Py._orientation;
            Py._orientation = [yb, Wy, Uy], Py._node && (Py._panner || (Py._pos || (Py._pos = fy._pos || [0, 0, -.5]), bb(Py, "spatial")), "undefined" !== typeof Py._panner.orientationX ? (Py._panner.orientationX.setValueAtTime(yb, Howler.ctx.currentTime), Py._panner.orientationY.setValueAtTime(Wy, Howler.ctx.currentTime), Py._panner.orientationZ.setValueAtTime(Uy, Howler.ctx.currentTime)) : Py._panner.setOrientation(yb, Wy, Uy)), fy._emit("orientation", Py._id)
          }
        }
        return fy
      }, Howl.prototype.pannerAttr = function() {
        var yb, Wy, Uy, hy = this,
          fy = arguments;
        if (!hy._webAudio) return hy;
        if (0 === fy.length) return hy._pannerAttr;
        if (1 === fy.length) {
          if ("object" !== typeof fy[0]) return (Uy = hy._soundById(parseInt(fy[0], 10))) ? Uy._pannerAttr : hy._pannerAttr;
          yb = fy[0], "undefined" === typeof Wy && (yb.pannerAttr || (yb.pannerAttr = {
            coneInnerAngle: yb.coneInnerAngle,
            coneOuterAngle: yb.coneOuterAngle,
            coneOuterGain: yb.coneOuterGain,
            distanceModel: yb.distanceModel,
            maxDistance: yb.maxDistance,
            refDistance: yb.refDistance,
            rolloffFactor: yb.rolloffFactor,
            panningModel: yb.panningModel
          }), hy._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof yb.pannerAttr.coneInnerAngle ? yb.pannerAttr.coneInnerAngle : hy._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof yb.pannerAttr.coneOuterAngle ? yb.pannerAttr.coneOuterAngle : hy._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof yb.pannerAttr.coneOuterGain ? yb.pannerAttr.coneOuterGain : hy._coneOuterGain,
            distanceModel: "undefined" !== typeof yb.pannerAttr.distanceModel ? yb.pannerAttr.distanceModel : hy._distanceModel,
            maxDistance: "undefined" !== typeof yb.pannerAttr.maxDistance ? yb.pannerAttr.maxDistance : hy._maxDistance,
            refDistance: "undefined" !== typeof yb.pannerAttr.refDistance ? yb.pannerAttr.refDistance : hy._refDistance,
            rolloffFactor: "undefined" !== typeof yb.pannerAttr.rolloffFactor ? yb.pannerAttr.rolloffFactor : hy._rolloffFactor,
            panningModel: "undefined" !== typeof yb.pannerAttr.panningModel ? yb.pannerAttr.panningModel : hy._panningModel
          })
        } else 2 === fy.length && (yb = fy[0], Wy = parseInt(fy[1], 10));
        for (var Zy = hy._getSoundIds(Wy), cb = 0; cb < Zy.length; cb++)
          if (Uy = hy._soundById(Zy[cb])) {
            var Py = Uy._pannerAttr;
            Py = {
              coneInnerAngle: "undefined" !== typeof yb.coneInnerAngle ? yb.coneInnerAngle : Py.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof yb.coneOuterAngle ? yb.coneOuterAngle : Py.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof yb.coneOuterGain ? yb.coneOuterGain : Py.coneOuterGain,
              distanceModel: "undefined" !== typeof yb.distanceModel ? yb.distanceModel : Py.distanceModel,
              maxDistance: "undefined" !== typeof yb.maxDistance ? yb.maxDistance : Py.maxDistance,
              refDistance: "undefined" !== typeof yb.refDistance ? yb.refDistance : Py.refDistance,
              rolloffFactor: "undefined" !== typeof yb.rolloffFactor ? yb.rolloffFactor : Py.rolloffFactor,
              panningModel: "undefined" !== typeof yb.panningModel ? yb.panningModel : Py.panningModel
            };
            var oy = Uy._panner;
            oy ? (oy.coneInnerAngle = Py.coneInnerAngle, oy.coneOuterAngle = Py.coneOuterAngle, oy.coneOuterGain = Py.coneOuterGain, oy.distanceModel = Py.distanceModel, oy.maxDistance = Py.maxDistance, oy.refDistance = Py.refDistance, oy.rolloffFactor = Py.rolloffFactor, oy.panningModel = Py.panningModel) : (Uy._pos || (Uy._pos = hy._pos || [0, 0, -.5]), bb(Uy, "spatial"))
          } return hy
      }, Sound.prototype.init = function(yb) {
        return function() {
          var bb = this,
            Wy = bb._parent;
          bb._orientation = Wy._orientation, bb._stereo = Wy._stereo, bb._pos = Wy._pos, bb._pannerAttr = Wy._pannerAttr, yb.call(this), bb._stereo ? Wy.stereo(bb._stereo) : bb._pos && Wy.pos(bb._pos[0], bb._pos[1], bb._pos[2], bb._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(yb) {
        return function() {
          var bb = this,
            Wy = bb._parent;
          return bb._orientation = Wy._orientation, bb._stereo = Wy._stereo, bb._pos = Wy._pos, bb._pannerAttr = Wy._pannerAttr, bb._stereo ? Wy.stereo(bb._stereo) : bb._pos ? Wy.pos(bb._pos[0], bb._pos[1], bb._pos[2], bb._id) : bb._panner && (bb._panner.disconnect(0), bb._panner = void 0, Wy._refreshBuffer(bb)), yb.call(this)
        }
      }(Sound.prototype.reset);
      var bb = function(yb, bb) {
        "spatial" === (bb = bb || "spatial") ? (yb._panner = Howler.ctx.createPanner(), yb._panner.coneInnerAngle = yb._pannerAttr.coneInnerAngle, yb._panner.coneOuterAngle = yb._pannerAttr.coneOuterAngle, yb._panner.coneOuterGain = yb._pannerAttr.coneOuterGain, yb._panner.distanceModel = yb._pannerAttr.distanceModel, yb._panner.maxDistance = yb._pannerAttr.maxDistance, yb._panner.refDistance = yb._pannerAttr.refDistance, yb._panner.rolloffFactor = yb._pannerAttr.rolloffFactor, yb._panner.panningModel = yb._pannerAttr.panningModel, "undefined" !== typeof yb._panner.positionX ? (yb._panner.positionX.setValueAtTime(yb._pos[0], Howler.ctx.currentTime), yb._panner.positionY.setValueAtTime(yb._pos[1], Howler.ctx.currentTime), yb._panner.positionZ.setValueAtTime(yb._pos[2], Howler.ctx.currentTime)) : yb._panner.setPosition(yb._pos[0], yb._pos[1], yb._pos[2]), "undefined" !== typeof yb._panner.orientationX ? (yb._panner.orientationX.setValueAtTime(yb._orientation[0], Howler.ctx.currentTime), yb._panner.orientationY.setValueAtTime(yb._orientation[1], Howler.ctx.currentTime), yb._panner.orientationZ.setValueAtTime(yb._orientation[2], Howler.ctx.currentTime)) : yb._panner.setOrientation(yb._orientation[0], yb._orientation[1], yb._orientation[2])) : (yb._panner = Howler.ctx.createStereoPanner(), yb._panner.pan.setValueAtTime(yb._stereo, Howler.ctx.currentTime)), yb._panner.connect(yb._node), yb.Om || yb._parent.pause(yb._id, !0).play(yb._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);