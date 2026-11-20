/*! For license information please see 7rj44.94.49ec5130.chunk.js.LICENSE.txt */
export const id = 94;
export const ids = [94];
export const modules = {
  4491: (zz, tz, sz) => {
    var Fz;
    ! function() {
      var Wz = function() {
        this.init()
      };
      Wz.prototype = {
        init: function() {
          var zz = this || Xz;
          return zz._counter = 1e3, zz._html5AudioPool = [], zz.html5PoolSize = 10, zz._codecs = {}, zz._howls = [], zz._muted = !1, zz._volume = 1, zz._canPlayEvent = "canplaythrough", zz._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, zz.masterGain = null, zz.noAudio = !1, zz.usingWebAudio = !0, zz.autoSuspend = !0, zz.ctx = null, zz.autoUnlock = !0, zz._setup(), zz
        },
        volume: function(zz) {
          var tz = this || Xz;
          if (zz = parseFloat(zz), tz.ctx || bz(), "undefined" !== typeof zz && zz >= 0 && zz <= 1) {
            if (tz._volume = zz, tz._muted) return tz;
            tz.usingWebAudio && tz.masterGain.gain.setValueAtTime(zz, Xz.ctx.currentTime);
            for (var sz = 0; sz < tz._howls.length; sz++)
              if (!tz._howls[sz]._webAudio)
                for (var Fz = tz._howls[sz]._getSoundIds(), Wz = 0; Wz < Fz.length; Wz++) {
                  var Oz = tz._howls[sz]._soundById(Fz[Wz]);
                  Oz && Oz._node && (Oz._node.volume = Oz._volume * zz)
                }
            return tz
          }
          return tz._volume
        },
        mute: function(zz) {
          var tz = this || Xz;
          tz.ctx || bz(), tz._muted = zz, tz.usingWebAudio && tz.masterGain.gain.setValueAtTime(zz ? 0 : tz._volume, Xz.ctx.currentTime);
          for (var sz = 0; sz < tz._howls.length; sz++)
            if (!tz._howls[sz]._webAudio)
              for (var Fz = tz._howls[sz]._getSoundIds(), Wz = 0; Wz < Fz.length; Wz++) {
                var Oz = tz._howls[sz]._soundById(Fz[Wz]);
                Oz && Oz._node && (Oz._node.muted = !!zz || Oz._muted)
              }
          return tz
        },
        stop: function() {
          for (var zz = this || Xz, tz = 0; tz < zz._howls.length; tz++) zz._howls[tz].stop();
          return zz
        },
        unload: function() {
          for (var zz = this || Xz, tz = zz._howls.length - 1; tz >= 0; tz--) zz._howls[tz].unload();
          return zz.usingWebAudio && zz.ctx && "undefined" !== typeof zz.ctx.close && (zz.ctx.close(), zz.ctx = null, bz()), zz
        },
        codecs: function(zz) {
          return (this || Xz)._codecs[zz.replace(/^x-/, "")]
        },
        _setup: function() {
          var zz = this || Xz;
          if (zz.state = zz.ctx && zz.ctx.state || "suspended", zz._autoSuspend(), !zz.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (zz._canPlayEvent = "canplay")
            } catch (tz) {
              zz.noAudio = !0
            } else zz.noAudio = !0;
          try {
            (new Audio).muted && (zz.noAudio = !0)
          } catch (tz) {}
          return zz.noAudio || zz._setupCodecs(), zz
        },
        _setupCodecs: function() {
          var zz = this || Xz,
            tz = null;
          try {
            tz = "undefined" !== typeof Audio ? new Audio : null
          } catch (Kz) {
            return zz
          }
          if (!tz || "function" !== typeof tz.canPlayType) return zz;
          var sz = tz.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Fz = zz._navigator ? zz._navigator.userAgent : "",
            Wz = Fz.match(/OPR\/([0-6].)/g),
            Oz = Wz && parseInt(Wz[0].split("/")[1], 10) < 33,
            oz = -1 !== Fz.indexOf("Safari") && -1 === Fz.indexOf("Chrome"),
            vz = Fz.match(/Version\/(.*?) /),
            Uz = oz && vz && parseInt(vz[1], 10) < 15;
          return zz._codecs = {
            mp3: !(Oz || !sz && !tz.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!sz,
            opus: !!tz.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!tz.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!tz.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(tz.canPlayType('audio/wav; codecs="1"') || tz.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!tz.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!tz.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(tz.canPlayType("audio/x-m4a;") || tz.canPlayType("audio/m4a;") || tz.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(tz.canPlayType("audio/x-m4b;") || tz.canPlayType("audio/m4b;") || tz.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(tz.canPlayType("audio/x-mp4;") || tz.canPlayType("audio/mp4;") || tz.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Uz || !tz.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Uz || !tz.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!tz.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(tz.canPlayType("audio/x-flac;") || tz.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, zz
        },
        _unlockAudio: function() {
          var zz = this || Xz;
          if (!zz._audioUnlocked && zz.ctx) {
            zz._audioUnlocked = !1, zz.autoUnlock = !1, zz._mobileUnloaded || 44100 === zz.ctx.sampleRate || (zz._mobileUnloaded = !0, zz.unload()), zz._scratchBuffer = zz.ctx.createBuffer(1, 1, 22050);
            var tz = function(sz) {
              for (; zz._html5AudioPool.length < zz.html5PoolSize;) try {
                var Fz = new Audio;
                Fz._unlocked = !0, zz._releaseHtml5Audio(Fz)
              } catch (sz) {
                zz.noAudio = !0;
                break
              }
              for (var Wz = 0; Wz < zz._howls.length; Wz++)
                if (!zz._howls[Wz]._webAudio)
                  for (var Xz = zz._howls[Wz]._getSoundIds(), Oz = 0; Oz < Xz.length; Oz++) {
                    var oz = zz._howls[Wz]._soundById(Xz[Oz]);
                    oz && oz._node && !oz._node._unlocked && (oz._node._unlocked = !0, oz._node.load())
                  }
              zz._autoResume();
              var vz = zz.ctx.createBufferSource();
              vz.buffer = zz._scratchBuffer, vz.connect(zz.ctx.destination), "undefined" === typeof vz.start ? vz.noteOn(0) : vz.start(0), "function" === typeof zz.ctx.resume && zz.ctx.resume(), vz.onended = function() {
                vz.disconnect(0), zz._audioUnlocked = !0, document.removeEventListener("touchstart", tz, !0), document.removeEventListener("touchend", tz, !0), document.removeEventListener("click", tz, !0), document.removeEventListener("keydown", tz, !0);
                for (var sz = 0; sz < zz._howls.length; sz++) zz._howls[sz]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", tz, !0), document.addEventListener("touchend", tz, !0), document.addEventListener("click", tz, !0), document.addEventListener("keydown", tz, !0), zz
          }
        },
        _obtainHtml5Audio: function() {
          var zz = this || Xz;
          if (zz._html5AudioPool.length) return zz._html5AudioPool.pop();
          var tz = (new Audio).play();
          return tz && "undefined" !== typeof Promise && (tz instanceof Promise || "function" === typeof tz.then) && tz.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(zz) {
          var tz = this || Xz;
          return zz._unlocked && tz._html5AudioPool.push(zz), tz
        },
        _autoSuspend: function() {
          var zz = this;
          if (zz.autoSuspend && zz.ctx && "undefined" !== typeof zz.ctx.suspend && Xz.usingWebAudio) {
            for (var tz = 0; tz < zz._howls.length; tz++)
              if (zz._howls[tz]._webAudio)
                for (var sz = 0; sz < zz._howls[tz]._sounds.length; sz++)
                  if (!zz._howls[tz]._sounds[sz].JY) return zz;
            return zz._suspendTimer && clearTimeout(zz._suspendTimer), zz._suspendTimer = setTimeout((function() {
              if (zz.autoSuspend) {
                zz._suspendTimer = null, zz.state = "suspending";
                var tz = function() {
                  zz.state = "suspended", zz._resumeAfterSuspend && (delete zz._resumeAfterSuspend, zz._autoResume())
                };
                zz.ctx.suspend().then(tz, tz)
              }
            }), 3e4), zz
          }
        },
        _autoResume: function() {
          var zz = this;
          if (zz.ctx && "undefined" !== typeof zz.ctx.resume && Xz.usingWebAudio) return "running" === zz.state && "interrupted" !== zz.ctx.state && zz._suspendTimer ? (clearTimeout(zz._suspendTimer), zz._suspendTimer = null) : "suspended" === zz.state || "running" === zz.state && "interrupted" === zz.ctx.state ? (zz.ctx.resume().then((function() {
            zz.state = "running";
            for (var tz = 0; tz < zz._howls.length; tz++) zz._howls[tz]._emit("resume")
          })), zz._suspendTimer && (clearTimeout(zz._suspendTimer), zz._suspendTimer = null)) : "suspending" === zz.state && (zz._resumeAfterSuspend = !0), zz
        }
      };
      var Xz = new Wz,
        Oz = function(zz) {
          zz.src && 0 !== zz.src.length ? this.init(zz) : console.error("An array of source files must be passed with any new Howl.")
        };
      Oz.prototype = {
        init: function(zz) {
          var tz = this;
          return Xz.ctx || bz(), tz._autoplay = zz.autoplay || !1, tz._format = "string" !== typeof zz.format ? zz.format : [zz.format], tz._html5 = zz.html5 || !1, tz._muted = zz.mute || !1, tz._loop = zz.loop || !1, tz._pool = zz.pool || 5, tz._preload = "boolean" !== typeof zz.preload && "metadata" !== zz.preload || zz.preload, tz._rate = zz.rate || 1, tz._sprite = zz.sprite || {}, tz._src = "string" !== typeof zz.src ? zz.src : [zz.src], tz._volume = void 0 !== zz.volume ? zz.volume : 1, tz._xhr = {
            method: zz.xhr && zz.xhr.method ? zz.xhr.method : "GET",
            headers: zz.xhr && zz.xhr.headers ? zz.xhr.headers : null,
            withCredentials: !(!zz.xhr || !zz.xhr.withCredentials) && zz.xhr.withCredentials
          }, tz._duration = 0, tz._state = "unloaded", tz._sounds = [], tz._endTimers = {}, tz._queue = [], tz._playLock = !1, tz._onend = zz.onend ? [{
            Zw: zz.onend
          }] : [], tz._onfade = zz.onfade ? [{
            Zw: zz.onfade
          }] : [], tz._onload = zz.onload ? [{
            Zw: zz.onload
          }] : [], tz._onloaderror = zz.onloaderror ? [{
            Zw: zz.onloaderror
          }] : [], tz._onplayerror = zz.onplayerror ? [{
            Zw: zz.onplayerror
          }] : [], tz._onpause = zz.onpause ? [{
            Zw: zz.onpause
          }] : [], tz._onplay = zz.onplay ? [{
            Zw: zz.onplay
          }] : [], tz._onstop = zz.onstop ? [{
            Zw: zz.onstop
          }] : [], tz._onmute = zz.onmute ? [{
            Zw: zz.onmute
          }] : [], tz._onvolume = zz.onvolume ? [{
            Zw: zz.onvolume
          }] : [], tz._onrate = zz.onrate ? [{
            Zw: zz.onrate
          }] : [], tz._onseek = zz.onseek ? [{
            Zw: zz.onseek
          }] : [], tz._onunlock = zz.onunlock ? [{
            Zw: zz.onunlock
          }] : [], tz._onresume = [], tz._webAudio = Xz.usingWebAudio && !tz._html5, "undefined" !== typeof Xz.ctx && Xz.ctx && Xz.autoUnlock && Xz._unlockAudio(), Xz._howls.push(tz), tz._autoplay && tz._queue.push({
            event: "play",
            action: function() {
              tz.play()
            }
          }), tz._preload && "none" !== tz._preload && tz.load(), tz
        },
        load: function() {
          var zz = this,
            tz = null;
          if (Xz.noAudio) zz._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof zz._src && (zz._src = [zz._src]);
            for (var sz = 0; sz < zz._src.length; sz++) {
              var Fz, Wz;
              if (zz._format && zz._format[sz]) Fz = zz._format[sz];
              else {
                if ("string" !== typeof(Wz = zz._src[sz])) {
                  zz._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Fz = /^data:audio\/([^;,]+);/i.exec(Wz)) || (Fz = /\.([^.]+)$/.exec(Wz.split("?", 1)[0])), Fz && (Fz = Fz[1].toLowerCase())
              }
              if (Fz || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Fz && Xz.codecs(Fz)) {
                tz = zz._src[sz];
                break
              }
            }
            if (tz) return zz._src = tz, zz._state = "loading", "https:" === window.location.protocol && "http:" === tz.slice(0, 5) && (zz._html5 = !0, zz._webAudio = !1), new oz(zz), zz._webAudio && Uz(zz), zz;
            zz._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(zz, tz) {
          var sz = this,
            Fz = null;
          if ("number" === typeof zz) Fz = zz, zz = null;
          else {
            if ("string" === typeof zz && "loaded" === sz._state && !sz._sprite[zz]) return null;
            if ("undefined" === typeof zz && (zz = "__default", !sz._playLock)) {
              for (var Wz = 0, Oz = 0; Oz < sz._sounds.length; Oz++) sz._sounds[Oz].JY && !sz._sounds[Oz]._ended && (Wz++, Fz = sz._sounds[Oz]._id);
              1 === Wz ? zz = null : Fz = null
            }
          }
          var oz = Fz ? sz._soundById(Fz) : sz._inactiveSound();
          if (!oz) return null;
          if (Fz && !zz && (zz = oz._sprite || "__default"), "loaded" !== sz._state) {
            oz._sprite = zz, oz._ended = !1;
            var vz = oz._id;
            return sz._queue.push({
              event: "play",
              action: function() {
                sz.play(vz)
              }
            }), vz
          }
          if (Fz && !oz.JY) return tz || sz._loadQueue("play"), oz._id;
          sz._webAudio && Xz._autoResume();
          var Uz = Math.max(0, oz._seek > 0 ? oz._seek : sz._sprite[zz][0] / 1e3),
            Kz = Math.max(0, (sz._sprite[zz][0] + sz._sprite[zz][1]) / 1e3 - Uz),
            uz = 1e3 * Kz / Math.abs(oz._rate),
            Nz = sz._sprite[zz][0] / 1e3,
            bz = (sz._sprite[zz][0] + sz._sprite[zz][1]) / 1e3;
          oz._sprite = zz, oz._ended = !1;
          var wz = function() {
            oz.JY = !1, oz._seek = Uz, oz._start = Nz, oz._stop = bz, oz._loop = !(!oz._loop && !sz._sprite[zz][2])
          };
          if (!(Uz >= bz)) {
            var Dz = oz._node;
            if (sz._webAudio) {
              var gz = function() {
                sz._playLock = !1, wz(), sz._refreshBuffer(oz);
                var zz = oz._muted || sz._muted ? 0 : oz._volume;
                Dz.gain.setValueAtTime(zz, Xz.ctx.currentTime), oz._playStart = Xz.ctx.currentTime, "undefined" === typeof Dz.bufferSource.start ? oz._loop ? Dz.bufferSource.noteGrainOn(0, Uz, 86400) : Dz.bufferSource.noteGrainOn(0, Uz, Kz) : oz._loop ? Dz.bufferSource.start(0, Uz, 86400) : Dz.bufferSource.start(0, Uz, Kz), uz !== 1 / 0 && (sz._endTimers[oz._id] = setTimeout(sz._ended.bind(sz, oz), uz)), tz || setTimeout((function() {
                  sz._emit("play", oz._id), sz._loadQueue()
                }), 0)
              };
              "running" === Xz.state && "interrupted" !== Xz.ctx.state ? gz() : (sz._playLock = !0, sz.once("resume", gz), sz._clearTimer(oz._id))
            } else {
              var Hz = function() {
                Dz.currentTime = Uz, Dz.muted = oz._muted || sz._muted || Xz._muted || Dz.muted, Dz.volume = oz._volume * Xz.volume(), Dz.playbackRate = oz._rate;
                try {
                  var Fz = Dz.play();
                  if (Fz && "undefined" !== typeof Promise && (Fz instanceof Promise || "function" === typeof Fz.then) ? (sz._playLock = !0, wz(), Fz.then((function() {
                      sz._playLock = !1, Dz._unlocked = !0, tz ? sz._loadQueue() : sz._emit("play", oz._id)
                    })).catch((function() {
                      sz._playLock = !1, sz._emit("playerror", oz._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), oz._ended = !0, oz.JY = !0
                    }))) : tz || (sz._playLock = !1, wz(), sz._emit("play", oz._id)), Dz.playbackRate = oz._rate, Dz.paused) return void sz._emit("playerror", oz._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== zz || oz._loop ? sz._endTimers[oz._id] = setTimeout(sz._ended.bind(sz, oz), uz) : (sz._endTimers[oz._id] = function() {
                    sz._ended(oz), Dz.removeEventListener("ended", sz._endTimers[oz._id], !1)
                  }, Dz.addEventListener("ended", sz._endTimers[oz._id], !1))
                } catch (Wz) {
                  sz._emit("playerror", oz._id, Wz)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Dz.src && (Dz.src = sz._src, Dz.load());
              var Bz = window && window.ejecta || !Dz.readyState && Xz._navigator.isCocoonJS;
              if (Dz.readyState >= 3 || Bz) Hz();
              else {
                sz._playLock = !0, sz._state = "loading";
                var Pz = function() {
                  sz._state = "loaded", Hz(), Dz.removeEventListener(Xz._canPlayEvent, Pz, !1)
                };
                Dz.addEventListener(Xz._canPlayEvent, Pz, !1), sz._clearTimer(oz._id)
              }
            }
            return oz._id
          }
          sz._ended(oz)
        },
        pause: function(zz) {
          var tz = this;
          if ("loaded" !== tz._state || tz._playLock) return tz._queue.push({
            event: "pause",
            action: function() {
              tz.pause(zz)
            }
          }), tz;
          for (var sz = tz._getSoundIds(zz), Fz = 0; Fz < sz.length; Fz++) {
            tz._clearTimer(sz[Fz]);
            var Wz = tz._soundById(sz[Fz]);
            if (Wz && !Wz.JY && (Wz._seek = tz.seek(sz[Fz]), Wz._rateSeek = 0, Wz.JY = !0, tz._stopFade(sz[Fz]), Wz._node))
              if (tz._webAudio) {
                if (!Wz._node.bufferSource) continue;
                "undefined" === typeof Wz._node.bufferSource.stop ? Wz._node.bufferSource.noteOff(0) : Wz._node.bufferSource.stop(0), tz._cleanBuffer(Wz._node)
              } else isNaN(Wz._node.duration) && Wz._node.duration !== 1 / 0 || Wz._node.pause();
            arguments[1] || tz._emit("pause", Wz ? Wz._id : null)
          }
          return tz
        },
        stop: function(zz, tz) {
          var sz = this;
          if ("loaded" !== sz._state || sz._playLock) return sz._queue.push({
            event: "stop",
            action: function() {
              sz.stop(zz)
            }
          }), sz;
          for (var Fz = sz._getSoundIds(zz), Wz = 0; Wz < Fz.length; Wz++) {
            sz._clearTimer(Fz[Wz]);
            var Xz = sz._soundById(Fz[Wz]);
            Xz && (Xz._seek = Xz._start || 0, Xz._rateSeek = 0, Xz.JY = !0, Xz._ended = !0, sz._stopFade(Fz[Wz]), Xz._node && (sz._webAudio ? Xz._node.bufferSource && ("undefined" === typeof Xz._node.bufferSource.stop ? Xz._node.bufferSource.noteOff(0) : Xz._node.bufferSource.stop(0), sz._cleanBuffer(Xz._node)) : isNaN(Xz._node.duration) && Xz._node.duration !== 1 / 0 || (Xz._node.currentTime = Xz._start || 0, Xz._node.pause(), Xz._node.duration === 1 / 0 && sz._clearSound(Xz._node))), tz || sz._emit("stop", Xz._id))
          }
          return sz
        },
        mute: function(zz, tz) {
          var sz = this;
          if ("loaded" !== sz._state || sz._playLock) return sz._queue.push({
            event: "mute",
            action: function() {
              sz.mute(zz, tz)
            }
          }), sz;
          if ("undefined" === typeof tz) {
            if ("boolean" !== typeof zz) return sz._muted;
            sz._muted = zz
          }
          for (var Fz = sz._getSoundIds(tz), Wz = 0; Wz < Fz.length; Wz++) {
            var Oz = sz._soundById(Fz[Wz]);
            Oz && (Oz._muted = zz, Oz._interval && sz._stopFade(Oz._id), sz._webAudio && Oz._node ? Oz._node.gain.setValueAtTime(zz ? 0 : Oz._volume, Xz.ctx.currentTime) : Oz._node && (Oz._node.muted = !!Xz._muted || zz), sz._emit("mute", Oz._id))
          }
          return sz
        },
        volume: function() {
          var zz, tz, sz, Fz = this,
            Wz = arguments;
          if (0 === Wz.length) return Fz._volume;
          if (1 === Wz.length || 2 === Wz.length && "undefined" === typeof Wz[1] ? Fz._getSoundIds().indexOf(Wz[0]) >= 0 ? tz = parseInt(Wz[0], 10) : zz = parseFloat(Wz[0]) : Wz.length >= 2 && (zz = parseFloat(Wz[0]), tz = parseInt(Wz[1], 10)), !("undefined" !== typeof zz && zz >= 0 && zz <= 1)) return (sz = tz ? Fz._soundById(tz) : Fz._sounds[0]) ? sz._volume : 0;
          if ("loaded" !== Fz._state || Fz._playLock) return Fz._queue.push({
            event: "volume",
            action: function() {
              Fz.volume.apply(Fz, Wz)
            }
          }), Fz;
          "undefined" === typeof tz && (Fz._volume = zz), tz = Fz._getSoundIds(tz);
          for (var Oz = 0; Oz < tz.length; Oz++)(sz = Fz._soundById(tz[Oz])) && (sz._volume = zz, Wz[2] || Fz._stopFade(tz[Oz]), Fz._webAudio && sz._node && !sz._muted ? sz._node.gain.setValueAtTime(zz, Xz.ctx.currentTime) : sz._node && !sz._muted && (sz._node.volume = zz * Xz.volume()), Fz._emit("volume", sz._id));
          return Fz
        },
        fade: function(zz, tz, sz, Fz) {
          var Wz = this;
          if ("loaded" !== Wz._state || Wz._playLock) return Wz._queue.push({
            event: "fade",
            action: function() {
              Wz.fade(zz, tz, sz, Fz)
            }
          }), Wz;
          zz = Math.min(Math.max(0, parseFloat(zz)), 1), tz = Math.min(Math.max(0, parseFloat(tz)), 1), sz = parseFloat(sz), Wz.volume(zz, Fz);
          for (var Oz = Wz._getSoundIds(Fz), oz = 0; oz < Oz.length; oz++) {
            var vz = Wz._soundById(Oz[oz]);
            if (vz) {
              if (Fz || Wz._stopFade(Oz[oz]), Wz._webAudio && !vz._muted) {
                var Uz = Xz.ctx.currentTime,
                  Kz = Uz + sz / 1e3;
                vz._volume = zz, vz._node.gain.setValueAtTime(zz, Uz), vz._node.gain.linearRampToValueAtTime(tz, Kz)
              }
              Wz._startFadeInterval(vz, zz, tz, sz, Oz[oz], "undefined" === typeof Fz)
            }
          }
          return Wz
        },
        _startFadeInterval: function(zz, tz, sz, Fz, Wz, Xz) {
          var Oz = this,
            oz = tz,
            vz = sz - tz,
            Uz = Math.abs(vz / .01),
            Kz = Math.max(4, Uz > 0 ? Fz / Uz : Fz),
            uz = Date.now();
          zz._fadeTo = sz, zz._interval = setInterval((function() {
            var Wz = (Date.now() - uz) / Fz;
            uz = Date.now(), oz += vz * Wz, oz = Math.round(100 * oz) / 100, oz = vz < 0 ? Math.max(sz, oz) : Math.min(sz, oz), Oz._webAudio ? zz._volume = oz : Oz.volume(oz, zz._id, !0), Xz && (Oz._volume = oz), (sz < tz && oz <= sz || sz > tz && oz >= sz) && (clearInterval(zz._interval), zz._interval = null, zz._fadeTo = null, Oz.volume(sz, zz._id), Oz._emit("fade", zz._id))
          }), Kz)
        },
        _stopFade: function(zz) {
          var tz = this,
            sz = tz._soundById(zz);
          return sz && sz._interval && (tz._webAudio && sz._node.gain.cancelScheduledValues(Xz.ctx.currentTime), clearInterval(sz._interval), sz._interval = null, tz.volume(sz._fadeTo, zz), sz._fadeTo = null, tz._emit("fade", zz)), tz
        },
        loop: function() {
          var zz, tz, sz, Fz = this,
            Wz = arguments;
          if (0 === Wz.length) return Fz._loop;
          if (1 === Wz.length) {
            if ("boolean" !== typeof Wz[0]) return !!(sz = Fz._soundById(parseInt(Wz[0], 10))) && sz._loop;
            zz = Wz[0], Fz._loop = zz
          } else 2 === Wz.length && (zz = Wz[0], tz = parseInt(Wz[1], 10));
          for (var Xz = Fz._getSoundIds(tz), Oz = 0; Oz < Xz.length; Oz++)(sz = Fz._soundById(Xz[Oz])) && (sz._loop = zz, Fz._webAudio && sz._node && sz._node.bufferSource && (sz._node.bufferSource.loop = zz, zz && (sz._node.bufferSource.loopStart = sz._start || 0, sz._node.bufferSource.loopEnd = sz._stop, Fz.playing(Xz[Oz]) && (Fz.pause(Xz[Oz], !0), Fz.play(Xz[Oz], !0)))));
          return Fz
        },
        rate: function() {
          var zz, tz, sz, Fz = this,
            Wz = arguments;
          if (0 === Wz.length) tz = Fz._sounds[0]._id;
          else if (1 === Wz.length) {
            Fz._getSoundIds().indexOf(Wz[0]) >= 0 ? tz = parseInt(Wz[0], 10) : zz = parseFloat(Wz[0])
          } else 2 === Wz.length && (zz = parseFloat(Wz[0]), tz = parseInt(Wz[1], 10));
          if ("number" !== typeof zz) return (sz = Fz._soundById(tz)) ? sz._rate : Fz._rate;
          if ("loaded" !== Fz._state || Fz._playLock) return Fz._queue.push({
            event: "rate",
            action: function() {
              Fz.rate.apply(Fz, Wz)
            }
          }), Fz;
          "undefined" === typeof tz && (Fz._rate = zz), tz = Fz._getSoundIds(tz);
          for (var Oz = 0; Oz < tz.length; Oz++)
            if (sz = Fz._soundById(tz[Oz])) {
              Fz.playing(tz[Oz]) && (sz._rateSeek = Fz.seek(tz[Oz]), sz._playStart = Fz._webAudio ? Xz.ctx.currentTime : sz._playStart), sz._rate = zz, Fz._webAudio && sz._node && sz._node.bufferSource ? sz._node.bufferSource.playbackRate.setValueAtTime(zz, Xz.ctx.currentTime) : sz._node && (sz._node.playbackRate = zz);
              var oz = Fz.seek(tz[Oz]),
                vz = 1e3 * ((Fz._sprite[sz._sprite][0] + Fz._sprite[sz._sprite][1]) / 1e3 - oz) / Math.abs(sz._rate);
              !Fz._endTimers[tz[Oz]] && sz.JY || (Fz._clearTimer(tz[Oz]), Fz._endTimers[tz[Oz]] = setTimeout(Fz._ended.bind(Fz, sz), vz)), Fz._emit("rate", sz._id)
            } return Fz
        },
        seek: function() {
          var zz, tz, sz = this,
            Fz = arguments;
          if (0 === Fz.length) sz._sounds.length && (tz = sz._sounds[0]._id);
          else if (1 === Fz.length) {
            sz._getSoundIds().indexOf(Fz[0]) >= 0 ? tz = parseInt(Fz[0], 10) : sz._sounds.length && (tz = sz._sounds[0]._id, zz = parseFloat(Fz[0]))
          } else 2 === Fz.length && (zz = parseFloat(Fz[0]), tz = parseInt(Fz[1], 10));
          if ("undefined" === typeof tz) return 0;
          if ("number" === typeof zz && ("loaded" !== sz._state || sz._playLock)) return sz._queue.push({
            event: "seek",
            action: function() {
              sz.seek.apply(sz, Fz)
            }
          }), sz;
          var Wz = sz._soundById(tz);
          if (Wz) {
            if (!("number" === typeof zz && zz >= 0)) {
              if (sz._webAudio) {
                var Oz = sz.playing(tz) ? Xz.ctx.currentTime - Wz._playStart : 0,
                  oz = Wz._rateSeek ? Wz._rateSeek - Wz._seek : 0;
                return Wz._seek + (oz + Oz * Math.abs(Wz._rate))
              }
              return Wz._node.currentTime
            }
            var vz = sz.playing(tz);
            vz && sz.pause(tz, !0), Wz._seek = zz, Wz._ended = !1, sz._clearTimer(tz), sz._webAudio || !Wz._node || isNaN(Wz._node.duration) || (Wz._node.currentTime = zz);
            var Uz = function() {
              vz && sz.play(tz, !0), sz._emit("seek", tz)
            };
            if (vz && !sz._webAudio) {
              var Kz = function() {
                sz._playLock ? setTimeout(Kz, 0) : Uz()
              };
              setTimeout(Kz, 0)
            } else Uz()
          }
          return sz
        },
        playing: function(zz) {
          var tz = this;
          if ("number" === typeof zz) {
            var sz = tz._soundById(zz);
            return !!sz && !sz.JY
          }
          for (var Fz = 0; Fz < tz._sounds.length; Fz++)
            if (!tz._sounds[Fz].JY) return !0;
          return !1
        },
        duration: function(zz) {
          var tz = this,
            sz = tz._duration,
            Fz = tz._soundById(zz);
          return Fz && (sz = tz._sprite[Fz._sprite][1] / 1e3), sz
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var zz = this, tz = zz._sounds, sz = 0; sz < tz.length; sz++) tz[sz].JY || zz.stop(tz[sz]._id), zz._webAudio || (zz._clearSound(tz[sz]._node), tz[sz]._node.removeEventListener("error", tz[sz]._errorFn, !1), tz[sz]._node.removeEventListener(Xz._canPlayEvent, tz[sz]._loadFn, !1), tz[sz]._node.removeEventListener("ended", tz[sz]._endFn, !1), Xz._releaseHtml5Audio(tz[sz]._node)), delete tz[sz]._node, zz._clearTimer(tz[sz]._id);
          var Fz = Xz._howls.indexOf(zz);
          Fz >= 0 && Xz._howls.splice(Fz, 1);
          var Wz = !0;
          for (sz = 0; sz < Xz._howls.length; sz++)
            if (Xz._howls[sz]._src === zz._src || zz._src.indexOf(Xz._howls[sz]._src) >= 0) {
              Wz = !1;
              break
            } return vz && Wz && delete vz[zz._src], Xz.noAudio = !1, zz._state = "unloaded", zz._sounds = [], zz = null, null
        },
        on: function(zz, tz, sz, Fz) {
          var Wz = this["_on" + zz];
          return "function" === typeof tz && Wz.push(Fz ? {
            id: sz,
            Zw: tz,
            once: Fz
          } : {
            id: sz,
            Zw: tz
          }), this
        },
        off: function(zz, tz, sz) {
          var Fz = this,
            Wz = Fz["_on" + zz],
            Xz = 0;
          if ("number" === typeof tz && (sz = tz, tz = null), tz || sz)
            for (Xz = 0; Xz < Wz.length; Xz++) {
              var Oz = sz === Wz[Xz].id;
              if (tz === Wz[Xz].Zw && Oz || !tz && Oz) {
                Wz.splice(Xz, 1);
                break
              }
            } else if (zz) Fz["_on" + zz] = [];
            else {
              var oz = Object.keys(Fz);
              for (Xz = 0; Xz < oz.length; Xz++) 0 === oz[Xz].indexOf("_on") && Array.isArray(Fz[oz[Xz]]) && (Fz[oz[Xz]] = [])
            } return Fz
        },
        once: function(zz, tz, sz) {
          return this.on(zz, tz, sz, 1), this
        },
        _emit: function(zz, tz, sz) {
          for (var Fz = this, Wz = Fz["_on" + zz], Xz = Wz.length - 1; Xz >= 0; Xz--) Wz[Xz].id && Wz[Xz].id !== tz && "load" !== zz || (setTimeout(function(zz) {
            zz.call(this, tz, sz)
          }.bind(Fz, Wz[Xz].Zw), 0), Wz[Xz].once && Fz.off(zz, Wz[Xz].Zw, Wz[Xz].id));
          return Fz._loadQueue(zz), Fz
        },
        _loadQueue: function(zz) {
          var tz = this;
          if (tz._queue.length > 0) {
            var sz = tz._queue[0];
            sz.event === zz && (tz._queue.shift(), tz._loadQueue()), zz || sz.action()
          }
          return tz
        },
        _ended: function(zz) {
          var tz = this,
            sz = zz._sprite;
          if (!tz._webAudio && zz._node && !zz._node.paused && !zz._node.ended && zz._node.currentTime < zz._stop) return setTimeout(tz._ended.bind(tz, zz), 100), tz;
          var Fz = !(!zz._loop && !tz._sprite[sz][2]);
          if (tz._emit("end", zz._id), !tz._webAudio && Fz && tz.stop(zz._id, !0).play(zz._id), tz._webAudio && Fz) {
            tz._emit("play", zz._id), zz._seek = zz._start || 0, zz._rateSeek = 0, zz._playStart = Xz.ctx.currentTime;
            var Wz = 1e3 * (zz._stop - zz._start) / Math.abs(zz._rate);
            tz._endTimers[zz._id] = setTimeout(tz._ended.bind(tz, zz), Wz)
          }
          return tz._webAudio && !Fz && (zz.JY = !0, zz._ended = !0, zz._seek = zz._start || 0, zz._rateSeek = 0, tz._clearTimer(zz._id), tz._cleanBuffer(zz._node), Xz._autoSuspend()), tz._webAudio || Fz || tz.stop(zz._id, !0), tz
        },
        _clearTimer: function(zz) {
          var tz = this;
          if (tz._endTimers[zz]) {
            if ("function" !== typeof tz._endTimers[zz]) clearTimeout(tz._endTimers[zz]);
            else {
              var sz = tz._soundById(zz);
              sz && sz._node && sz._node.removeEventListener("ended", tz._endTimers[zz], !1)
            }
            delete tz._endTimers[zz]
          }
          return tz
        },
        _soundById: function(zz) {
          for (var tz = this, sz = 0; sz < tz._sounds.length; sz++)
            if (zz === tz._sounds[sz]._id) return tz._sounds[sz];
          return null
        },
        _inactiveSound: function() {
          var zz = this;
          zz._drain();
          for (var tz = 0; tz < zz._sounds.length; tz++)
            if (zz._sounds[tz]._ended) return zz._sounds[tz].reset();
          return new oz(zz)
        },
        _drain: function() {
          var zz = this,
            tz = zz._pool,
            sz = 0,
            Fz = 0;
          if (!(zz._sounds.length < tz)) {
            for (Fz = 0; Fz < zz._sounds.length; Fz++) zz._sounds[Fz]._ended && sz++;
            for (Fz = zz._sounds.length - 1; Fz >= 0; Fz--) {
              if (sz <= tz) return;
              zz._sounds[Fz]._ended && (zz._webAudio && zz._sounds[Fz]._node && zz._sounds[Fz]._node.disconnect(0), zz._sounds.splice(Fz, 1), sz--)
            }
          }
        },
        _getSoundIds: function(zz) {
          if ("undefined" === typeof zz) {
            for (var tz = [], sz = 0; sz < this._sounds.length; sz++) tz.push(this._sounds[sz]._id);
            return tz
          }
          return [zz]
        },
        _refreshBuffer: function(zz) {
          return zz._node.bufferSource = Xz.ctx.createBufferSource(), zz._node.bufferSource.buffer = vz[this._src], zz._panner ? zz._node.bufferSource.connect(zz._panner) : zz._node.bufferSource.connect(zz._node), zz._node.bufferSource.loop = zz._loop, zz._loop && (zz._node.bufferSource.loopStart = zz._start || 0, zz._node.bufferSource.loopEnd = zz._stop || 0), zz._node.bufferSource.playbackRate.setValueAtTime(zz._rate, Xz.ctx.currentTime), this
        },
        _cleanBuffer: function(zz) {
          var tz = Xz._navigator && Xz._navigator.vendor.indexOf("Apple") >= 0;
          if (Xz._scratchBuffer && zz.bufferSource && (zz.bufferSource.onended = null, zz.bufferSource.disconnect(0), tz)) try {
            zz.bufferSource.buffer = Xz._scratchBuffer
          } catch (sz) {}
          return zz.bufferSource = null, this
        },
        _clearSound: function(zz) {
          /MSIE |Trident\//.test(Xz._navigator && Xz._navigator.userAgent) || (zz.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var oz = function(zz) {
        this._parent = zz, this.init()
      };
      oz.prototype = {
        init: function() {
          var zz = this,
            tz = zz._parent;
          return zz._muted = tz._muted, zz._loop = tz._loop, zz._volume = tz._volume, zz._rate = tz._rate, zz._seek = 0, zz.JY = !0, zz._ended = !0, zz._sprite = "__default", zz._id = ++Xz._counter, tz._sounds.push(zz), zz.create(), zz
        },
        create: function() {
          var zz = this,
            tz = zz._parent,
            sz = Xz._muted || zz._muted || zz._parent._muted ? 0 : zz._volume;
          return tz._webAudio ? (zz._node = "undefined" === typeof Xz.ctx.createGain ? Xz.ctx.createGainNode() : Xz.ctx.createGain(), zz._node.gain.setValueAtTime(sz, Xz.ctx.currentTime), zz._node.paused = !0, zz._node.connect(Xz.masterGain)) : Xz.noAudio || (zz._node = Xz._obtainHtml5Audio(), zz._errorFn = zz._errorListener.bind(zz), zz._node.addEventListener("error", zz._errorFn, !1), zz._loadFn = zz._loadListener.bind(zz), zz._node.addEventListener(Xz._canPlayEvent, zz._loadFn, !1), zz._endFn = zz._endListener.bind(zz), zz._node.addEventListener("ended", zz._endFn, !1), zz._node.src = tz._src, zz._node.preload = !0 === tz._preload ? "auto" : tz._preload, zz._node.volume = sz * Xz.volume(), zz._node.load()), zz
        },
        reset: function() {
          var zz = this,
            tz = zz._parent;
          return zz._muted = tz._muted, zz._loop = tz._loop, zz._volume = tz._volume, zz._rate = tz._rate, zz._seek = 0, zz._rateSeek = 0, zz.JY = !0, zz._ended = !0, zz._sprite = "__default", zz._id = ++Xz._counter, zz
        },
        _errorListener: function() {
          var zz = this;
          zz._parent._emit("loaderror", zz._id, zz._node.error ? zz._node.error.code : 0), zz._node.removeEventListener("error", zz._errorFn, !1)
        },
        _loadListener: function() {
          var zz = this,
            tz = zz._parent;
          tz._duration = Math.ceil(10 * zz._node.duration) / 10, 0 === Object.keys(tz._sprite).length && (tz._sprite = {
            __default: [0, 1e3 * tz._duration]
          }), "loaded" !== tz._state && (tz._state = "loaded", tz._emit("load"), tz._loadQueue()), zz._node.removeEventListener(Xz._canPlayEvent, zz._loadFn, !1)
        },
        _endListener: function() {
          var zz = this,
            tz = zz._parent;
          tz._duration === 1 / 0 && (tz._duration = Math.ceil(10 * zz._node.duration) / 10, tz._sprite.__default[1] === 1 / 0 && (tz._sprite.__default[1] = 1e3 * tz._duration), tz._ended(zz)), zz._node.removeEventListener("ended", zz._endFn, !1)
        }
      };
      var vz = {},
        Uz = function(zz) {
          var tz = zz._src;
          if (vz[tz]) return zz._duration = vz[tz].duration, void Nz(zz);
          if (/^data:[^;]+;base64,/.test(tz)) {
            for (var sz = atob(tz.split(",")[1]), Fz = new Uint8Array(sz.length), Wz = 0; Wz < sz.length; ++Wz) Fz[Wz] = sz.charCodeAt(Wz);
            uz(Fz.buffer, zz)
          } else {
            var Xz = new XMLHttpRequest;
            Xz.open(zz._xhr.method, tz, !0), Xz.withCredentials = zz._xhr.withCredentials, Xz.responseType = "arraybuffer", zz._xhr.headers && Object.keys(zz._xhr.headers).forEach((function(tz) {
              Xz.setRequestHeader(tz, zz._xhr.headers[tz])
            })), Xz.onload = function() {
              var tz = (Xz.status + "")[0];
              "0" === tz || "2" === tz || "3" === tz ? uz(Xz.response, zz) : zz._emit("loaderror", null, "Failed loading audio file with status: " + Xz.status + ".")
            }, Xz.onerror = function() {
              zz._webAudio && (zz._html5 = !0, zz._webAudio = !1, zz._sounds = [], delete vz[tz], zz.load())
            }, Kz(Xz)
          }
        },
        Kz = function(zz) {
          try {
            zz.send()
          } catch (tz) {
            zz.onerror()
          }
        },
        uz = function(zz, tz) {
          var sz = function() {
              tz._emit("loaderror", null, "Decoding audio data failed.")
            },
            Fz = function(zz) {
              zz && tz._sounds.length > 0 ? (vz[tz._src] = zz, Nz(tz, zz)) : sz()
            };
          "undefined" !== typeof Promise && 1 === Xz.ctx.decodeAudioData.length ? Xz.ctx.decodeAudioData(zz).then(Fz).catch(sz) : Xz.ctx.decodeAudioData(zz, Fz, sz)
        },
        Nz = function(zz, tz) {
          tz && !zz._duration && (zz._duration = tz.duration), 0 === Object.keys(zz._sprite).length && (zz._sprite = {
            __default: [0, 1e3 * zz._duration]
          }), "loaded" !== zz._state && (zz._state = "loaded", zz._emit("load"), zz._loadQueue())
        },
        bz = function() {
          if (Xz.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Xz.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Xz.ctx = new webkitAudioContext : Xz.usingWebAudio = !1
            } catch (Wz) {
              Xz.usingWebAudio = !1
            }
            Xz.ctx || (Xz.usingWebAudio = !1);
            var zz = /iP(hone|od|ad)/.test(Xz._navigator && Xz._navigator.platform),
              tz = Xz._navigator && Xz._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              sz = tz ? parseInt(tz[1], 10) : null;
            if (zz && sz && sz < 9) {
              var Fz = /safari/.test(Xz._navigator && Xz._navigator.userAgent.toLowerCase());
              Xz._navigator && !Fz && (Xz.usingWebAudio = !1)
            }
            Xz.usingWebAudio && (Xz.masterGain = "undefined" === typeof Xz.ctx.createGain ? Xz.ctx.createGainNode() : Xz.ctx.createGain(), Xz.masterGain.gain.setValueAtTime(Xz._muted ? 0 : Xz._volume, Xz.ctx.currentTime), Xz.masterGain.connect(Xz.ctx.destination)), Xz._setup()
          }
        };
      void 0 === (Fz = function() {
        return {
          Howler: Xz,
          Howl: Oz
        }
      }.apply(tz, [])) || (zz.exports = Fz), tz.Howler = Xz, tz.Howl = Oz, "undefined" !== typeof sz.g ? (sz.g.HowlerGlobal = Wz, sz.g.Howler = Xz, sz.g.Howl = Oz, sz.g.Sound = oz) : "undefined" !== typeof window && (window.HowlerGlobal = Wz, window.Howler = Xz, window.Howl = Oz, window.Sound = oz)
    }(),
    function() {
      var zz;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(zz) {
        var tz = this;
        if (!tz.ctx || !tz.ctx.listener) return tz;
        for (var sz = tz._howls.length - 1; sz >= 0; sz--) tz._howls[sz].stereo(zz);
        return tz
      }, HowlerGlobal.prototype.pos = function(zz, tz, sz) {
        var Fz = this;
        return Fz.ctx && Fz.ctx.listener ? (tz = "number" !== typeof tz ? Fz._pos[1] : tz, sz = "number" !== typeof sz ? Fz._pos[2] : sz, "number" !== typeof zz ? Fz._pos : (Fz._pos = [zz, tz, sz], "undefined" !== typeof Fz.ctx.listener.positionX ? (Fz.ctx.listener.positionX.setTargetAtTime(Fz._pos[0], Howler.ctx.currentTime, .1), Fz.ctx.listener.positionY.setTargetAtTime(Fz._pos[1], Howler.ctx.currentTime, .1), Fz.ctx.listener.positionZ.setTargetAtTime(Fz._pos[2], Howler.ctx.currentTime, .1)) : Fz.ctx.listener.setPosition(Fz._pos[0], Fz._pos[1], Fz._pos[2]), Fz)) : Fz
      }, HowlerGlobal.prototype.orientation = function(zz, tz, sz, Fz, Wz, Xz) {
        var Oz = this;
        if (!Oz.ctx || !Oz.ctx.listener) return Oz;
        var oz = Oz._orientation;
        return tz = "number" !== typeof tz ? oz[1] : tz, sz = "number" !== typeof sz ? oz[2] : sz, Fz = "number" !== typeof Fz ? oz[3] : Fz, Wz = "number" !== typeof Wz ? oz[4] : Wz, Xz = "number" !== typeof Xz ? oz[5] : Xz, "number" !== typeof zz ? oz : (Oz._orientation = [zz, tz, sz, Fz, Wz, Xz], "undefined" !== typeof Oz.ctx.listener.forwardX ? (Oz.ctx.listener.forwardX.setTargetAtTime(zz, Howler.ctx.currentTime, .1), Oz.ctx.listener.forwardY.setTargetAtTime(tz, Howler.ctx.currentTime, .1), Oz.ctx.listener.forwardZ.setTargetAtTime(sz, Howler.ctx.currentTime, .1), Oz.ctx.listener.upX.setTargetAtTime(Fz, Howler.ctx.currentTime, .1), Oz.ctx.listener.upY.setTargetAtTime(Wz, Howler.ctx.currentTime, .1), Oz.ctx.listener.upZ.setTargetAtTime(Xz, Howler.ctx.currentTime, .1)) : Oz.ctx.listener.setOrientation(zz, tz, sz, Fz, Wz, Xz), Oz)
      }, Howl.prototype.init = (zz = Howl.prototype.init, function(tz) {
        var sz = this;
        return sz._orientation = tz.orientation || [1, 0, 0], sz._stereo = tz.stereo || null, sz._pos = tz.pos || null, sz._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof tz.coneInnerAngle ? tz.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof tz.coneOuterAngle ? tz.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof tz.coneOuterGain ? tz.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof tz.distanceModel ? tz.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof tz.maxDistance ? tz.maxDistance : 1e4,
          panningModel: "undefined" !== typeof tz.panningModel ? tz.panningModel : "HRTF",
          refDistance: "undefined" !== typeof tz.refDistance ? tz.refDistance : 1,
          rolloffFactor: "undefined" !== typeof tz.rolloffFactor ? tz.rolloffFactor : 1
        }, sz._onstereo = tz.onstereo ? [{
          Zw: tz.onstereo
        }] : [], sz._onpos = tz.onpos ? [{
          Zw: tz.onpos
        }] : [], sz._onorientation = tz.onorientation ? [{
          Zw: tz.onorientation
        }] : [], zz.call(this, tz)
      }), Howl.prototype.stereo = function(zz, sz) {
        var Fz = this;
        if (!Fz._webAudio) return Fz;
        if ("loaded" !== Fz._state) return Fz._queue.push({
          event: "stereo",
          action: function() {
            Fz.stereo(zz, sz)
          }
        }), Fz;
        var Wz = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof sz) {
          if ("number" !== typeof zz) return Fz._stereo;
          Fz._stereo = zz, Fz._pos = [zz, 0, 0]
        }
        for (var Xz = Fz._getSoundIds(sz), Oz = 0; Oz < Xz.length; Oz++) {
          var oz = Fz._soundById(Xz[Oz]);
          if (oz) {
            if ("number" !== typeof zz) return oz._stereo;
            oz._stereo = zz, oz._pos = [zz, 0, 0], oz._node && (oz._pannerAttr.panningModel = "equalpower", oz._panner && oz._panner.pan || tz(oz, Wz), "spatial" === Wz ? "undefined" !== typeof oz._panner.positionX ? (oz._panner.positionX.setValueAtTime(zz, Howler.ctx.currentTime), oz._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), oz._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : oz._panner.setPosition(zz, 0, 0) : oz._panner.pan.setValueAtTime(zz, Howler.ctx.currentTime)), Fz._emit("stereo", oz._id)
          }
        }
        return Fz
      }, Howl.prototype.pos = function(zz, sz, Fz, Wz) {
        var Xz = this;
        if (!Xz._webAudio) return Xz;
        if ("loaded" !== Xz._state) return Xz._queue.push({
          event: "pos",
          action: function() {
            Xz.pos(zz, sz, Fz, Wz)
          }
        }), Xz;
        if (sz = "number" !== typeof sz ? 0 : sz, Fz = "number" !== typeof Fz ? -.5 : Fz, "undefined" === typeof Wz) {
          if ("number" !== typeof zz) return Xz._pos;
          Xz._pos = [zz, sz, Fz]
        }
        for (var Oz = Xz._getSoundIds(Wz), oz = 0; oz < Oz.length; oz++) {
          var vz = Xz._soundById(Oz[oz]);
          if (vz) {
            if ("number" !== typeof zz) return vz._pos;
            vz._pos = [zz, sz, Fz], vz._node && (vz._panner && !vz._panner.pan || tz(vz, "spatial"), "undefined" !== typeof vz._panner.positionX ? (vz._panner.positionX.setValueAtTime(zz, Howler.ctx.currentTime), vz._panner.positionY.setValueAtTime(sz, Howler.ctx.currentTime), vz._panner.positionZ.setValueAtTime(Fz, Howler.ctx.currentTime)) : vz._panner.setPosition(zz, sz, Fz)), Xz._emit("pos", vz._id)
          }
        }
        return Xz
      }, Howl.prototype.orientation = function(zz, sz, Fz, Wz) {
        var Xz = this;
        if (!Xz._webAudio) return Xz;
        if ("loaded" !== Xz._state) return Xz._queue.push({
          event: "orientation",
          action: function() {
            Xz.orientation(zz, sz, Fz, Wz)
          }
        }), Xz;
        if (sz = "number" !== typeof sz ? Xz._orientation[1] : sz, Fz = "number" !== typeof Fz ? Xz._orientation[2] : Fz, "undefined" === typeof Wz) {
          if ("number" !== typeof zz) return Xz._orientation;
          Xz._orientation = [zz, sz, Fz]
        }
        for (var Oz = Xz._getSoundIds(Wz), oz = 0; oz < Oz.length; oz++) {
          var vz = Xz._soundById(Oz[oz]);
          if (vz) {
            if ("number" !== typeof zz) return vz._orientation;
            vz._orientation = [zz, sz, Fz], vz._node && (vz._panner || (vz._pos || (vz._pos = Xz._pos || [0, 0, -.5]), tz(vz, "spatial")), "undefined" !== typeof vz._panner.orientationX ? (vz._panner.orientationX.setValueAtTime(zz, Howler.ctx.currentTime), vz._panner.orientationY.setValueAtTime(sz, Howler.ctx.currentTime), vz._panner.orientationZ.setValueAtTime(Fz, Howler.ctx.currentTime)) : vz._panner.setOrientation(zz, sz, Fz)), Xz._emit("orientation", vz._id)
          }
        }
        return Xz
      }, Howl.prototype.pannerAttr = function() {
        var zz, sz, Fz, Wz = this,
          Xz = arguments;
        if (!Wz._webAudio) return Wz;
        if (0 === Xz.length) return Wz._pannerAttr;
        if (1 === Xz.length) {
          if ("object" !== typeof Xz[0]) return (Fz = Wz._soundById(parseInt(Xz[0], 10))) ? Fz._pannerAttr : Wz._pannerAttr;
          zz = Xz[0], "undefined" === typeof sz && (zz.pannerAttr || (zz.pannerAttr = {
            coneInnerAngle: zz.coneInnerAngle,
            coneOuterAngle: zz.coneOuterAngle,
            coneOuterGain: zz.coneOuterGain,
            distanceModel: zz.distanceModel,
            maxDistance: zz.maxDistance,
            refDistance: zz.refDistance,
            rolloffFactor: zz.rolloffFactor,
            panningModel: zz.panningModel
          }), Wz._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof zz.pannerAttr.coneInnerAngle ? zz.pannerAttr.coneInnerAngle : Wz._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof zz.pannerAttr.coneOuterAngle ? zz.pannerAttr.coneOuterAngle : Wz._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof zz.pannerAttr.coneOuterGain ? zz.pannerAttr.coneOuterGain : Wz._coneOuterGain,
            distanceModel: "undefined" !== typeof zz.pannerAttr.distanceModel ? zz.pannerAttr.distanceModel : Wz._distanceModel,
            maxDistance: "undefined" !== typeof zz.pannerAttr.maxDistance ? zz.pannerAttr.maxDistance : Wz._maxDistance,
            refDistance: "undefined" !== typeof zz.pannerAttr.refDistance ? zz.pannerAttr.refDistance : Wz._refDistance,
            rolloffFactor: "undefined" !== typeof zz.pannerAttr.rolloffFactor ? zz.pannerAttr.rolloffFactor : Wz._rolloffFactor,
            panningModel: "undefined" !== typeof zz.pannerAttr.panningModel ? zz.pannerAttr.panningModel : Wz._panningModel
          })
        } else 2 === Xz.length && (zz = Xz[0], sz = parseInt(Xz[1], 10));
        for (var Oz = Wz._getSoundIds(sz), oz = 0; oz < Oz.length; oz++)
          if (Fz = Wz._soundById(Oz[oz])) {
            var vz = Fz._pannerAttr;
            vz = {
              coneInnerAngle: "undefined" !== typeof zz.coneInnerAngle ? zz.coneInnerAngle : vz.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof zz.coneOuterAngle ? zz.coneOuterAngle : vz.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof zz.coneOuterGain ? zz.coneOuterGain : vz.coneOuterGain,
              distanceModel: "undefined" !== typeof zz.distanceModel ? zz.distanceModel : vz.distanceModel,
              maxDistance: "undefined" !== typeof zz.maxDistance ? zz.maxDistance : vz.maxDistance,
              refDistance: "undefined" !== typeof zz.refDistance ? zz.refDistance : vz.refDistance,
              rolloffFactor: "undefined" !== typeof zz.rolloffFactor ? zz.rolloffFactor : vz.rolloffFactor,
              panningModel: "undefined" !== typeof zz.panningModel ? zz.panningModel : vz.panningModel
            };
            var Uz = Fz._panner;
            Uz ? (Uz.coneInnerAngle = vz.coneInnerAngle, Uz.coneOuterAngle = vz.coneOuterAngle, Uz.coneOuterGain = vz.coneOuterGain, Uz.distanceModel = vz.distanceModel, Uz.maxDistance = vz.maxDistance, Uz.refDistance = vz.refDistance, Uz.rolloffFactor = vz.rolloffFactor, Uz.panningModel = vz.panningModel) : (Fz._pos || (Fz._pos = Wz._pos || [0, 0, -.5]), tz(Fz, "spatial"))
          } return Wz
      }, Sound.prototype.init = function(zz) {
        return function() {
          var tz = this,
            sz = tz._parent;
          tz._orientation = sz._orientation, tz._stereo = sz._stereo, tz._pos = sz._pos, tz._pannerAttr = sz._pannerAttr, zz.call(this), tz._stereo ? sz.stereo(tz._stereo) : tz._pos && sz.pos(tz._pos[0], tz._pos[1], tz._pos[2], tz._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(zz) {
        return function() {
          var tz = this,
            sz = tz._parent;
          return tz._orientation = sz._orientation, tz._stereo = sz._stereo, tz._pos = sz._pos, tz._pannerAttr = sz._pannerAttr, tz._stereo ? sz.stereo(tz._stereo) : tz._pos ? sz.pos(tz._pos[0], tz._pos[1], tz._pos[2], tz._id) : tz._panner && (tz._panner.disconnect(0), tz._panner = void 0, sz._refreshBuffer(tz)), zz.call(this)
        }
      }(Sound.prototype.reset);
      var tz = function(zz, tz) {
        "spatial" === (tz = tz || "spatial") ? (zz._panner = Howler.ctx.createPanner(), zz._panner.coneInnerAngle = zz._pannerAttr.coneInnerAngle, zz._panner.coneOuterAngle = zz._pannerAttr.coneOuterAngle, zz._panner.coneOuterGain = zz._pannerAttr.coneOuterGain, zz._panner.distanceModel = zz._pannerAttr.distanceModel, zz._panner.maxDistance = zz._pannerAttr.maxDistance, zz._panner.refDistance = zz._pannerAttr.refDistance, zz._panner.rolloffFactor = zz._pannerAttr.rolloffFactor, zz._panner.panningModel = zz._pannerAttr.panningModel, "undefined" !== typeof zz._panner.positionX ? (zz._panner.positionX.setValueAtTime(zz._pos[0], Howler.ctx.currentTime), zz._panner.positionY.setValueAtTime(zz._pos[1], Howler.ctx.currentTime), zz._panner.positionZ.setValueAtTime(zz._pos[2], Howler.ctx.currentTime)) : zz._panner.setPosition(zz._pos[0], zz._pos[1], zz._pos[2]), "undefined" !== typeof zz._panner.orientationX ? (zz._panner.orientationX.setValueAtTime(zz._orientation[0], Howler.ctx.currentTime), zz._panner.orientationY.setValueAtTime(zz._orientation[1], Howler.ctx.currentTime), zz._panner.orientationZ.setValueAtTime(zz._orientation[2], Howler.ctx.currentTime)) : zz._panner.setOrientation(zz._orientation[0], zz._orientation[1], zz._orientation[2])) : (zz._panner = Howler.ctx.createStereoPanner(), zz._panner.pan.setValueAtTime(zz._stereo, Howler.ctx.currentTime)), zz._panner.connect(zz._node), zz.JY || zz._parent.pause(zz._id, !0).play(zz._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);