/*! For license information please see ad2avs.94.1dd6821f.chunk.js.LICENSE.txt */
export const id = 94;
export const ids = [94];
export const modules = {
  4625: (zz, uz, bz) => {
    var Ez;
    ! function() {
      var nz = function() {
        this.init()
      };
      nz.prototype = {
        init: function() {
          var zz = this || iz;
          return zz._counter = 1e3, zz._html5AudioPool = [], zz.html5PoolSize = 10, zz._codecs = {}, zz._howls = [], zz._muted = !1, zz._volume = 1, zz._canPlayEvent = "canplaythrough", zz._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, zz.masterGain = null, zz.noAudio = !1, zz.usingWebAudio = !0, zz.autoSuspend = !0, zz.ctx = null, zz.autoUnlock = !0, zz._setup(), zz
        },
        volume: function(zz) {
          var uz = this || iz;
          if (zz = parseFloat(zz), uz.ctx || Fz(), "undefined" !== typeof zz && zz >= 0 && zz <= 1) {
            if (uz._volume = zz, uz._muted) return uz;
            uz.usingWebAudio && uz.masterGain.gain.setValueAtTime(zz, iz.ctx.currentTime);
            for (var bz = 0; bz < uz._howls.length; bz++)
              if (!uz._howls[bz]._webAudio)
                for (var Ez = uz._howls[bz]._getSoundIds(), nz = 0; nz < Ez.length; nz++) {
                  var lz = uz._howls[bz]._soundById(Ez[nz]);
                  lz && lz._node && (lz._node.volume = lz._volume * zz)
                }
            return uz
          }
          return uz._volume
        },
        mute: function(zz) {
          var uz = this || iz;
          uz.ctx || Fz(), uz._muted = zz, uz.usingWebAudio && uz.masterGain.gain.setValueAtTime(zz ? 0 : uz._volume, iz.ctx.currentTime);
          for (var bz = 0; bz < uz._howls.length; bz++)
            if (!uz._howls[bz]._webAudio)
              for (var Ez = uz._howls[bz]._getSoundIds(), nz = 0; nz < Ez.length; nz++) {
                var lz = uz._howls[bz]._soundById(Ez[nz]);
                lz && lz._node && (lz._node.muted = !!zz || lz._muted)
              }
          return uz
        },
        stop: function() {
          for (var zz = this || iz, uz = 0; uz < zz._howls.length; uz++) zz._howls[uz].stop();
          return zz
        },
        unload: function() {
          for (var zz = this || iz, uz = zz._howls.length - 1; uz >= 0; uz--) zz._howls[uz].unload();
          return zz.usingWebAudio && zz.ctx && "undefined" !== typeof zz.ctx.close && (zz.ctx.close(), zz.ctx = null, Fz()), zz
        },
        codecs: function(zz) {
          return (this || iz)._codecs[zz.replace(/^x-/, "")]
        },
        _setup: function() {
          var zz = this || iz;
          if (zz.state = zz.ctx && zz.ctx.state || "suspended", zz._autoSuspend(), !zz.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (zz._canPlayEvent = "canplay")
            } catch (uz) {
              zz.noAudio = !0
            } else zz.noAudio = !0;
          try {
            (new Audio).muted && (zz.noAudio = !0)
          } catch (uz) {}
          return zz.noAudio || zz._setupCodecs(), zz
        },
        _setupCodecs: function() {
          var zz = this || iz,
            uz = null;
          try {
            uz = "undefined" !== typeof Audio ? new Audio : null
          } catch (Oz) {
            return zz
          }
          if (!uz || "function" !== typeof uz.canPlayType) return zz;
          var bz = uz.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Ez = zz._navigator ? zz._navigator.userAgent : "",
            nz = Ez.match(/OPR\/([0-6].)/g),
            lz = nz && parseInt(nz[0].split("/")[1], 10) < 33,
            Mz = -1 !== Ez.indexOf("Safari") && -1 === Ez.indexOf("Chrome"),
            tz = Ez.match(/Version\/(.*?) /),
            Hz = Mz && tz && parseInt(tz[1], 10) < 15;
          return zz._codecs = {
            mp3: !(lz || !bz && !uz.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!bz,
            opus: !!uz.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!uz.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!uz.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(uz.canPlayType('audio/wav; codecs="1"') || uz.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!uz.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!uz.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(uz.canPlayType("audio/x-m4a;") || uz.canPlayType("audio/m4a;") || uz.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(uz.canPlayType("audio/x-m4b;") || uz.canPlayType("audio/m4b;") || uz.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(uz.canPlayType("audio/x-mp4;") || uz.canPlayType("audio/mp4;") || uz.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Hz || !uz.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Hz || !uz.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!uz.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(uz.canPlayType("audio/x-flac;") || uz.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, zz
        },
        _unlockAudio: function() {
          var zz = this || iz;
          if (!zz._audioUnlocked && zz.ctx) {
            zz._audioUnlocked = !1, zz.autoUnlock = !1, zz._mobileUnloaded || 44100 === zz.ctx.sampleRate || (zz._mobileUnloaded = !0, zz.unload()), zz._scratchBuffer = zz.ctx.createBuffer(1, 1, 22050);
            var uz = function(bz) {
              for (; zz._html5AudioPool.length < zz.html5PoolSize;) try {
                var Ez = new Audio;
                Ez._unlocked = !0, zz._releaseHtml5Audio(Ez)
              } catch (bz) {
                zz.noAudio = !0;
                break
              }
              for (var nz = 0; nz < zz._howls.length; nz++)
                if (!zz._howls[nz]._webAudio)
                  for (var iz = zz._howls[nz]._getSoundIds(), lz = 0; lz < iz.length; lz++) {
                    var Mz = zz._howls[nz]._soundById(iz[lz]);
                    Mz && Mz._node && !Mz._node._unlocked && (Mz._node._unlocked = !0, Mz._node.load())
                  }
              zz._autoResume();
              var tz = zz.ctx.createBufferSource();
              tz.buffer = zz._scratchBuffer, tz.connect(zz.ctx.destination), "undefined" === typeof tz.start ? tz.noteOn(0) : tz.start(0), "function" === typeof zz.ctx.resume && zz.ctx.resume(), tz.onended = function() {
                tz.disconnect(0), zz._audioUnlocked = !0, document.removeEventListener("touchstart", uz, !0), document.removeEventListener("touchend", uz, !0), document.removeEventListener("click", uz, !0), document.removeEventListener("keydown", uz, !0);
                for (var bz = 0; bz < zz._howls.length; bz++) zz._howls[bz]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", uz, !0), document.addEventListener("touchend", uz, !0), document.addEventListener("click", uz, !0), document.addEventListener("keydown", uz, !0), zz
          }
        },
        _obtainHtml5Audio: function() {
          var zz = this || iz;
          if (zz._html5AudioPool.length) return zz._html5AudioPool.pop();
          var uz = (new Audio).play();
          return uz && "undefined" !== typeof Promise && (uz instanceof Promise || "function" === typeof uz.then) && uz.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(zz) {
          var uz = this || iz;
          return zz._unlocked && uz._html5AudioPool.push(zz), uz
        },
        _autoSuspend: function() {
          var zz = this;
          if (zz.autoSuspend && zz.ctx && "undefined" !== typeof zz.ctx.suspend && iz.usingWebAudio) {
            for (var uz = 0; uz < zz._howls.length; uz++)
              if (zz._howls[uz]._webAudio)
                for (var bz = 0; bz < zz._howls[uz]._sounds.length; bz++)
                  if (!zz._howls[uz]._sounds[bz].oN) return zz;
            return zz._suspendTimer && clearTimeout(zz._suspendTimer), zz._suspendTimer = setTimeout((function() {
              if (zz.autoSuspend) {
                zz._suspendTimer = null, zz.state = "suspending";
                var uz = function() {
                  zz.state = "suspended", zz._resumeAfterSuspend && (delete zz._resumeAfterSuspend, zz._autoResume())
                };
                zz.ctx.suspend().then(uz, uz)
              }
            }), 3e4), zz
          }
        },
        _autoResume: function() {
          var zz = this;
          if (zz.ctx && "undefined" !== typeof zz.ctx.resume && iz.usingWebAudio) return "running" === zz.state && "interrupted" !== zz.ctx.state && zz._suspendTimer ? (clearTimeout(zz._suspendTimer), zz._suspendTimer = null) : "suspended" === zz.state || "running" === zz.state && "interrupted" === zz.ctx.state ? (zz.ctx.resume().then((function() {
            zz.state = "running";
            for (var uz = 0; uz < zz._howls.length; uz++) zz._howls[uz]._emit("resume")
          })), zz._suspendTimer && (clearTimeout(zz._suspendTimer), zz._suspendTimer = null)) : "suspending" === zz.state && (zz._resumeAfterSuspend = !0), zz
        }
      };
      var iz = new nz,
        lz = function(zz) {
          zz.src && 0 !== zz.src.length ? this.init(zz) : console.error("An array of source files must be passed with any new Howl.")
        };
      lz.prototype = {
        init: function(zz) {
          var uz = this;
          return iz.ctx || Fz(), uz._autoplay = zz.autoplay || !1, uz._format = "string" !== typeof zz.format ? zz.format : [zz.format], uz._html5 = zz.html5 || !1, uz._muted = zz.mute || !1, uz._loop = zz.loop || !1, uz._pool = zz.pool || 5, uz._preload = "boolean" !== typeof zz.preload && "metadata" !== zz.preload || zz.preload, uz._rate = zz.rate || 1, uz._sprite = zz.sprite || {}, uz._src = "string" !== typeof zz.src ? zz.src : [zz.src], uz._volume = void 0 !== zz.volume ? zz.volume : 1, uz._xhr = {
            method: zz.xhr && zz.xhr.method ? zz.xhr.method : "GET",
            headers: zz.xhr && zz.xhr.headers ? zz.xhr.headers : null,
            withCredentials: !(!zz.xhr || !zz.xhr.withCredentials) && zz.xhr.withCredentials
          }, uz._duration = 0, uz._state = "unloaded", uz._sounds = [], uz._endTimers = {}, uz._queue = [], uz._playLock = !1, uz._onend = zz.onend ? [{
            TZ: zz.onend
          }] : [], uz._onfade = zz.onfade ? [{
            TZ: zz.onfade
          }] : [], uz._onload = zz.onload ? [{
            TZ: zz.onload
          }] : [], uz._onloaderror = zz.onloaderror ? [{
            TZ: zz.onloaderror
          }] : [], uz._onplayerror = zz.onplayerror ? [{
            TZ: zz.onplayerror
          }] : [], uz._onpause = zz.onpause ? [{
            TZ: zz.onpause
          }] : [], uz._onplay = zz.onplay ? [{
            TZ: zz.onplay
          }] : [], uz._onstop = zz.onstop ? [{
            TZ: zz.onstop
          }] : [], uz._onmute = zz.onmute ? [{
            TZ: zz.onmute
          }] : [], uz._onvolume = zz.onvolume ? [{
            TZ: zz.onvolume
          }] : [], uz._onrate = zz.onrate ? [{
            TZ: zz.onrate
          }] : [], uz._onseek = zz.onseek ? [{
            TZ: zz.onseek
          }] : [], uz._onunlock = zz.onunlock ? [{
            TZ: zz.onunlock
          }] : [], uz._onresume = [], uz._webAudio = iz.usingWebAudio && !uz._html5, "undefined" !== typeof iz.ctx && iz.ctx && iz.autoUnlock && iz._unlockAudio(), iz._howls.push(uz), uz._autoplay && uz._queue.push({
            event: "play",
            action: function() {
              uz.play()
            }
          }), uz._preload && "none" !== uz._preload && uz.load(), uz
        },
        load: function() {
          var zz = this,
            uz = null;
          if (iz.noAudio) zz._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof zz._src && (zz._src = [zz._src]);
            for (var bz = 0; bz < zz._src.length; bz++) {
              var Ez, nz;
              if (zz._format && zz._format[bz]) Ez = zz._format[bz];
              else {
                if ("string" !== typeof(nz = zz._src[bz])) {
                  zz._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Ez = /^data:audio\/([^;,]+);/i.exec(nz)) || (Ez = /\.([^.]+)$/.exec(nz.split("?", 1)[0])), Ez && (Ez = Ez[1].toLowerCase())
              }
              if (Ez || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Ez && iz.codecs(Ez)) {
                uz = zz._src[bz];
                break
              }
            }
            if (uz) return zz._src = uz, zz._state = "loading", "https:" === window.location.protocol && "http:" === uz.slice(0, 5) && (zz._html5 = !0, zz._webAudio = !1), new Mz(zz), zz._webAudio && Hz(zz), zz;
            zz._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(zz, uz) {
          var bz = this,
            Ez = null;
          if ("number" === typeof zz) Ez = zz, zz = null;
          else {
            if ("string" === typeof zz && "loaded" === bz._state && !bz._sprite[zz]) return null;
            if ("undefined" === typeof zz && (zz = "__default", !bz._playLock)) {
              for (var nz = 0, lz = 0; lz < bz._sounds.length; lz++) bz._sounds[lz].oN && !bz._sounds[lz]._ended && (nz++, Ez = bz._sounds[lz]._id);
              1 === nz ? zz = null : Ez = null
            }
          }
          var Mz = Ez ? bz._soundById(Ez) : bz._inactiveSound();
          if (!Mz) return null;
          if (Ez && !zz && (zz = Mz._sprite || "__default"), "loaded" !== bz._state) {
            Mz._sprite = zz, Mz._ended = !1;
            var tz = Mz._id;
            return bz._queue.push({
              event: "play",
              action: function() {
                bz.play(tz)
              }
            }), tz
          }
          if (Ez && !Mz.oN) return uz || bz._loadQueue("play"), Mz._id;
          bz._webAudio && iz._autoResume();
          var Hz = Math.max(0, Mz._seek > 0 ? Mz._seek : bz._sprite[zz][0] / 1e3),
            Oz = Math.max(0, (bz._sprite[zz][0] + bz._sprite[zz][1]) / 1e3 - Hz),
            pz = 1e3 * Oz / Math.abs(Mz._rate),
            dz = bz._sprite[zz][0] / 1e3,
            Fz = (bz._sprite[zz][0] + bz._sprite[zz][1]) / 1e3;
          Mz._sprite = zz, Mz._ended = !1;
          var Zz = function() {
            Mz.oN = !1, Mz._seek = Hz, Mz._start = dz, Mz._stop = Fz, Mz._loop = !(!Mz._loop && !bz._sprite[zz][2])
          };
          if (!(Hz >= Fz)) {
            var Rz = Mz._node;
            if (bz._webAudio) {
              var Kz = function() {
                bz._playLock = !1, Zz(), bz._refreshBuffer(Mz);
                var zz = Mz._muted || bz._muted ? 0 : Mz._volume;
                Rz.gain.setValueAtTime(zz, iz.ctx.currentTime), Mz._playStart = iz.ctx.currentTime, "undefined" === typeof Rz.bufferSource.start ? Mz._loop ? Rz.bufferSource.noteGrainOn(0, Hz, 86400) : Rz.bufferSource.noteGrainOn(0, Hz, Oz) : Mz._loop ? Rz.bufferSource.start(0, Hz, 86400) : Rz.bufferSource.start(0, Hz, Oz), pz !== 1 / 0 && (bz._endTimers[Mz._id] = setTimeout(bz._ended.bind(bz, Mz), pz)), uz || setTimeout((function() {
                  bz._emit("play", Mz._id), bz._loadQueue()
                }), 0)
              };
              "running" === iz.state && "interrupted" !== iz.ctx.state ? Kz() : (bz._playLock = !0, bz.once("resume", Kz), bz._clearTimer(Mz._id))
            } else {
              var wz = function() {
                Rz.currentTime = Hz, Rz.muted = Mz._muted || bz._muted || iz._muted || Rz.muted, Rz.volume = Mz._volume * iz.volume(), Rz.playbackRate = Mz._rate;
                try {
                  var Ez = Rz.play();
                  if (Ez && "undefined" !== typeof Promise && (Ez instanceof Promise || "function" === typeof Ez.then) ? (bz._playLock = !0, Zz(), Ez.then((function() {
                      bz._playLock = !1, Rz._unlocked = !0, uz ? bz._loadQueue() : bz._emit("play", Mz._id)
                    })).catch((function() {
                      bz._playLock = !1, bz._emit("playerror", Mz._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), Mz._ended = !0, Mz.oN = !0
                    }))) : uz || (bz._playLock = !1, Zz(), bz._emit("play", Mz._id)), Rz.playbackRate = Mz._rate, Rz.paused) return void bz._emit("playerror", Mz._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== zz || Mz._loop ? bz._endTimers[Mz._id] = setTimeout(bz._ended.bind(bz, Mz), pz) : (bz._endTimers[Mz._id] = function() {
                    bz._ended(Mz), Rz.removeEventListener("ended", bz._endTimers[Mz._id], !1)
                  }, Rz.addEventListener("ended", bz._endTimers[Mz._id], !1))
                } catch (nz) {
                  bz._emit("playerror", Mz._id, nz)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Rz.src && (Rz.src = bz._src, Rz.load());
              var Xz = window && window.ejecta || !Rz.readyState && iz._navigator.isCocoonJS;
              if (Rz.readyState >= 3 || Xz) wz();
              else {
                bz._playLock = !0, bz._state = "loading";
                var fz = function() {
                  bz._state = "loaded", wz(), Rz.removeEventListener(iz._canPlayEvent, fz, !1)
                };
                Rz.addEventListener(iz._canPlayEvent, fz, !1), bz._clearTimer(Mz._id)
              }
            }
            return Mz._id
          }
          bz._ended(Mz)
        },
        pause: function(zz) {
          var uz = this;
          if ("loaded" !== uz._state || uz._playLock) return uz._queue.push({
            event: "pause",
            action: function() {
              uz.pause(zz)
            }
          }), uz;
          for (var bz = uz._getSoundIds(zz), Ez = 0; Ez < bz.length; Ez++) {
            uz._clearTimer(bz[Ez]);
            var nz = uz._soundById(bz[Ez]);
            if (nz && !nz.oN && (nz._seek = uz.seek(bz[Ez]), nz._rateSeek = 0, nz.oN = !0, uz._stopFade(bz[Ez]), nz._node))
              if (uz._webAudio) {
                if (!nz._node.bufferSource) continue;
                "undefined" === typeof nz._node.bufferSource.stop ? nz._node.bufferSource.noteOff(0) : nz._node.bufferSource.stop(0), uz._cleanBuffer(nz._node)
              } else isNaN(nz._node.duration) && nz._node.duration !== 1 / 0 || nz._node.pause();
            arguments[1] || uz._emit("pause", nz ? nz._id : null)
          }
          return uz
        },
        stop: function(zz, uz) {
          var bz = this;
          if ("loaded" !== bz._state || bz._playLock) return bz._queue.push({
            event: "stop",
            action: function() {
              bz.stop(zz)
            }
          }), bz;
          for (var Ez = bz._getSoundIds(zz), nz = 0; nz < Ez.length; nz++) {
            bz._clearTimer(Ez[nz]);
            var iz = bz._soundById(Ez[nz]);
            iz && (iz._seek = iz._start || 0, iz._rateSeek = 0, iz.oN = !0, iz._ended = !0, bz._stopFade(Ez[nz]), iz._node && (bz._webAudio ? iz._node.bufferSource && ("undefined" === typeof iz._node.bufferSource.stop ? iz._node.bufferSource.noteOff(0) : iz._node.bufferSource.stop(0), bz._cleanBuffer(iz._node)) : isNaN(iz._node.duration) && iz._node.duration !== 1 / 0 || (iz._node.currentTime = iz._start || 0, iz._node.pause(), iz._node.duration === 1 / 0 && bz._clearSound(iz._node))), uz || bz._emit("stop", iz._id))
          }
          return bz
        },
        mute: function(zz, uz) {
          var bz = this;
          if ("loaded" !== bz._state || bz._playLock) return bz._queue.push({
            event: "mute",
            action: function() {
              bz.mute(zz, uz)
            }
          }), bz;
          if ("undefined" === typeof uz) {
            if ("boolean" !== typeof zz) return bz._muted;
            bz._muted = zz
          }
          for (var Ez = bz._getSoundIds(uz), nz = 0; nz < Ez.length; nz++) {
            var lz = bz._soundById(Ez[nz]);
            lz && (lz._muted = zz, lz._interval && bz._stopFade(lz._id), bz._webAudio && lz._node ? lz._node.gain.setValueAtTime(zz ? 0 : lz._volume, iz.ctx.currentTime) : lz._node && (lz._node.muted = !!iz._muted || zz), bz._emit("mute", lz._id))
          }
          return bz
        },
        volume: function() {
          var zz, uz, bz, Ez = this,
            nz = arguments;
          if (0 === nz.length) return Ez._volume;
          if (1 === nz.length || 2 === nz.length && "undefined" === typeof nz[1] ? Ez._getSoundIds().indexOf(nz[0]) >= 0 ? uz = parseInt(nz[0], 10) : zz = parseFloat(nz[0]) : nz.length >= 2 && (zz = parseFloat(nz[0]), uz = parseInt(nz[1], 10)), !("undefined" !== typeof zz && zz >= 0 && zz <= 1)) return (bz = uz ? Ez._soundById(uz) : Ez._sounds[0]) ? bz._volume : 0;
          if ("loaded" !== Ez._state || Ez._playLock) return Ez._queue.push({
            event: "volume",
            action: function() {
              Ez.volume.apply(Ez, nz)
            }
          }), Ez;
          "undefined" === typeof uz && (Ez._volume = zz), uz = Ez._getSoundIds(uz);
          for (var lz = 0; lz < uz.length; lz++)(bz = Ez._soundById(uz[lz])) && (bz._volume = zz, nz[2] || Ez._stopFade(uz[lz]), Ez._webAudio && bz._node && !bz._muted ? bz._node.gain.setValueAtTime(zz, iz.ctx.currentTime) : bz._node && !bz._muted && (bz._node.volume = zz * iz.volume()), Ez._emit("volume", bz._id));
          return Ez
        },
        fade: function(zz, uz, bz, Ez) {
          var nz = this;
          if ("loaded" !== nz._state || nz._playLock) return nz._queue.push({
            event: "fade",
            action: function() {
              nz.fade(zz, uz, bz, Ez)
            }
          }), nz;
          zz = Math.min(Math.max(0, parseFloat(zz)), 1), uz = Math.min(Math.max(0, parseFloat(uz)), 1), bz = parseFloat(bz), nz.volume(zz, Ez);
          for (var lz = nz._getSoundIds(Ez), Mz = 0; Mz < lz.length; Mz++) {
            var tz = nz._soundById(lz[Mz]);
            if (tz) {
              if (Ez || nz._stopFade(lz[Mz]), nz._webAudio && !tz._muted) {
                var Hz = iz.ctx.currentTime,
                  Oz = Hz + bz / 1e3;
                tz._volume = zz, tz._node.gain.setValueAtTime(zz, Hz), tz._node.gain.linearRampToValueAtTime(uz, Oz)
              }
              nz._startFadeInterval(tz, zz, uz, bz, lz[Mz], "undefined" === typeof Ez)
            }
          }
          return nz
        },
        _startFadeInterval: function(zz, uz, bz, Ez, nz, iz) {
          var lz = this,
            Mz = uz,
            tz = bz - uz,
            Hz = Math.abs(tz / .01),
            Oz = Math.max(4, Hz > 0 ? Ez / Hz : Ez),
            pz = Date.now();
          zz._fadeTo = bz, zz._interval = setInterval((function() {
            var nz = (Date.now() - pz) / Ez;
            pz = Date.now(), Mz += tz * nz, Mz = Math.round(100 * Mz) / 100, Mz = tz < 0 ? Math.max(bz, Mz) : Math.min(bz, Mz), lz._webAudio ? zz._volume = Mz : lz.volume(Mz, zz._id, !0), iz && (lz._volume = Mz), (bz < uz && Mz <= bz || bz > uz && Mz >= bz) && (clearInterval(zz._interval), zz._interval = null, zz._fadeTo = null, lz.volume(bz, zz._id), lz._emit("fade", zz._id))
          }), Oz)
        },
        _stopFade: function(zz) {
          var uz = this,
            bz = uz._soundById(zz);
          return bz && bz._interval && (uz._webAudio && bz._node.gain.cancelScheduledValues(iz.ctx.currentTime), clearInterval(bz._interval), bz._interval = null, uz.volume(bz._fadeTo, zz), bz._fadeTo = null, uz._emit("fade", zz)), uz
        },
        loop: function() {
          var zz, uz, bz, Ez = this,
            nz = arguments;
          if (0 === nz.length) return Ez._loop;
          if (1 === nz.length) {
            if ("boolean" !== typeof nz[0]) return !!(bz = Ez._soundById(parseInt(nz[0], 10))) && bz._loop;
            zz = nz[0], Ez._loop = zz
          } else 2 === nz.length && (zz = nz[0], uz = parseInt(nz[1], 10));
          for (var iz = Ez._getSoundIds(uz), lz = 0; lz < iz.length; lz++)(bz = Ez._soundById(iz[lz])) && (bz._loop = zz, Ez._webAudio && bz._node && bz._node.bufferSource && (bz._node.bufferSource.loop = zz, zz && (bz._node.bufferSource.loopStart = bz._start || 0, bz._node.bufferSource.loopEnd = bz._stop, Ez.playing(iz[lz]) && (Ez.pause(iz[lz], !0), Ez.play(iz[lz], !0)))));
          return Ez
        },
        rate: function() {
          var zz, uz, bz, Ez = this,
            nz = arguments;
          if (0 === nz.length) uz = Ez._sounds[0]._id;
          else if (1 === nz.length) {
            Ez._getSoundIds().indexOf(nz[0]) >= 0 ? uz = parseInt(nz[0], 10) : zz = parseFloat(nz[0])
          } else 2 === nz.length && (zz = parseFloat(nz[0]), uz = parseInt(nz[1], 10));
          if ("number" !== typeof zz) return (bz = Ez._soundById(uz)) ? bz._rate : Ez._rate;
          if ("loaded" !== Ez._state || Ez._playLock) return Ez._queue.push({
            event: "rate",
            action: function() {
              Ez.rate.apply(Ez, nz)
            }
          }), Ez;
          "undefined" === typeof uz && (Ez._rate = zz), uz = Ez._getSoundIds(uz);
          for (var lz = 0; lz < uz.length; lz++)
            if (bz = Ez._soundById(uz[lz])) {
              Ez.playing(uz[lz]) && (bz._rateSeek = Ez.seek(uz[lz]), bz._playStart = Ez._webAudio ? iz.ctx.currentTime : bz._playStart), bz._rate = zz, Ez._webAudio && bz._node && bz._node.bufferSource ? bz._node.bufferSource.playbackRate.setValueAtTime(zz, iz.ctx.currentTime) : bz._node && (bz._node.playbackRate = zz);
              var Mz = Ez.seek(uz[lz]),
                tz = 1e3 * ((Ez._sprite[bz._sprite][0] + Ez._sprite[bz._sprite][1]) / 1e3 - Mz) / Math.abs(bz._rate);
              !Ez._endTimers[uz[lz]] && bz.oN || (Ez._clearTimer(uz[lz]), Ez._endTimers[uz[lz]] = setTimeout(Ez._ended.bind(Ez, bz), tz)), Ez._emit("rate", bz._id)
            } return Ez
        },
        seek: function() {
          var zz, uz, bz = this,
            Ez = arguments;
          if (0 === Ez.length) bz._sounds.length && (uz = bz._sounds[0]._id);
          else if (1 === Ez.length) {
            bz._getSoundIds().indexOf(Ez[0]) >= 0 ? uz = parseInt(Ez[0], 10) : bz._sounds.length && (uz = bz._sounds[0]._id, zz = parseFloat(Ez[0]))
          } else 2 === Ez.length && (zz = parseFloat(Ez[0]), uz = parseInt(Ez[1], 10));
          if ("undefined" === typeof uz) return 0;
          if ("number" === typeof zz && ("loaded" !== bz._state || bz._playLock)) return bz._queue.push({
            event: "seek",
            action: function() {
              bz.seek.apply(bz, Ez)
            }
          }), bz;
          var nz = bz._soundById(uz);
          if (nz) {
            if (!("number" === typeof zz && zz >= 0)) {
              if (bz._webAudio) {
                var lz = bz.playing(uz) ? iz.ctx.currentTime - nz._playStart : 0,
                  Mz = nz._rateSeek ? nz._rateSeek - nz._seek : 0;
                return nz._seek + (Mz + lz * Math.abs(nz._rate))
              }
              return nz._node.currentTime
            }
            var tz = bz.playing(uz);
            tz && bz.pause(uz, !0), nz._seek = zz, nz._ended = !1, bz._clearTimer(uz), bz._webAudio || !nz._node || isNaN(nz._node.duration) || (nz._node.currentTime = zz);
            var Hz = function() {
              tz && bz.play(uz, !0), bz._emit("seek", uz)
            };
            if (tz && !bz._webAudio) {
              var Oz = function() {
                bz._playLock ? setTimeout(Oz, 0) : Hz()
              };
              setTimeout(Oz, 0)
            } else Hz()
          }
          return bz
        },
        playing: function(zz) {
          var uz = this;
          if ("number" === typeof zz) {
            var bz = uz._soundById(zz);
            return !!bz && !bz.oN
          }
          for (var Ez = 0; Ez < uz._sounds.length; Ez++)
            if (!uz._sounds[Ez].oN) return !0;
          return !1
        },
        duration: function(zz) {
          var uz = this,
            bz = uz._duration,
            Ez = uz._soundById(zz);
          return Ez && (bz = uz._sprite[Ez._sprite][1] / 1e3), bz
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var zz = this, uz = zz._sounds, bz = 0; bz < uz.length; bz++) uz[bz].oN || zz.stop(uz[bz]._id), zz._webAudio || (zz._clearSound(uz[bz]._node), uz[bz]._node.removeEventListener("error", uz[bz]._errorFn, !1), uz[bz]._node.removeEventListener(iz._canPlayEvent, uz[bz]._loadFn, !1), uz[bz]._node.removeEventListener("ended", uz[bz]._endFn, !1), iz._releaseHtml5Audio(uz[bz]._node)), delete uz[bz]._node, zz._clearTimer(uz[bz]._id);
          var Ez = iz._howls.indexOf(zz);
          Ez >= 0 && iz._howls.splice(Ez, 1);
          var nz = !0;
          for (bz = 0; bz < iz._howls.length; bz++)
            if (iz._howls[bz]._src === zz._src || zz._src.indexOf(iz._howls[bz]._src) >= 0) {
              nz = !1;
              break
            } return tz && nz && delete tz[zz._src], iz.noAudio = !1, zz._state = "unloaded", zz._sounds = [], zz = null, null
        },
        on: function(zz, uz, bz, Ez) {
          var nz = this["_on" + zz];
          return "function" === typeof uz && nz.push(Ez ? {
            id: bz,
            TZ: uz,
            once: Ez
          } : {
            id: bz,
            TZ: uz
          }), this
        },
        off: function(zz, uz, bz) {
          var Ez = this,
            nz = Ez["_on" + zz],
            iz = 0;
          if ("number" === typeof uz && (bz = uz, uz = null), uz || bz)
            for (iz = 0; iz < nz.length; iz++) {
              var lz = bz === nz[iz].id;
              if (uz === nz[iz].TZ && lz || !uz && lz) {
                nz.splice(iz, 1);
                break
              }
            } else if (zz) Ez["_on" + zz] = [];
            else {
              var Mz = Object.keys(Ez);
              for (iz = 0; iz < Mz.length; iz++) 0 === Mz[iz].indexOf("_on") && Array.isArray(Ez[Mz[iz]]) && (Ez[Mz[iz]] = [])
            } return Ez
        },
        once: function(zz, uz, bz) {
          return this.on(zz, uz, bz, 1), this
        },
        _emit: function(zz, uz, bz) {
          for (var Ez = this, nz = Ez["_on" + zz], iz = nz.length - 1; iz >= 0; iz--) nz[iz].id && nz[iz].id !== uz && "load" !== zz || (setTimeout(function(zz) {
            zz.call(this, uz, bz)
          }.bind(Ez, nz[iz].TZ), 0), nz[iz].once && Ez.off(zz, nz[iz].TZ, nz[iz].id));
          return Ez._loadQueue(zz), Ez
        },
        _loadQueue: function(zz) {
          var uz = this;
          if (uz._queue.length > 0) {
            var bz = uz._queue[0];
            bz.event === zz && (uz._queue.shift(), uz._loadQueue()), zz || bz.action()
          }
          return uz
        },
        _ended: function(zz) {
          var uz = this,
            bz = zz._sprite;
          if (!uz._webAudio && zz._node && !zz._node.paused && !zz._node.ended && zz._node.currentTime < zz._stop) return setTimeout(uz._ended.bind(uz, zz), 100), uz;
          var Ez = !(!zz._loop && !uz._sprite[bz][2]);
          if (uz._emit("end", zz._id), !uz._webAudio && Ez && uz.stop(zz._id, !0).play(zz._id), uz._webAudio && Ez) {
            uz._emit("play", zz._id), zz._seek = zz._start || 0, zz._rateSeek = 0, zz._playStart = iz.ctx.currentTime;
            var nz = 1e3 * (zz._stop - zz._start) / Math.abs(zz._rate);
            uz._endTimers[zz._id] = setTimeout(uz._ended.bind(uz, zz), nz)
          }
          return uz._webAudio && !Ez && (zz.oN = !0, zz._ended = !0, zz._seek = zz._start || 0, zz._rateSeek = 0, uz._clearTimer(zz._id), uz._cleanBuffer(zz._node), iz._autoSuspend()), uz._webAudio || Ez || uz.stop(zz._id, !0), uz
        },
        _clearTimer: function(zz) {
          var uz = this;
          if (uz._endTimers[zz]) {
            if ("function" !== typeof uz._endTimers[zz]) clearTimeout(uz._endTimers[zz]);
            else {
              var bz = uz._soundById(zz);
              bz && bz._node && bz._node.removeEventListener("ended", uz._endTimers[zz], !1)
            }
            delete uz._endTimers[zz]
          }
          return uz
        },
        _soundById: function(zz) {
          for (var uz = this, bz = 0; bz < uz._sounds.length; bz++)
            if (zz === uz._sounds[bz]._id) return uz._sounds[bz];
          return null
        },
        _inactiveSound: function() {
          var zz = this;
          zz._drain();
          for (var uz = 0; uz < zz._sounds.length; uz++)
            if (zz._sounds[uz]._ended) return zz._sounds[uz].reset();
          return new Mz(zz)
        },
        _drain: function() {
          var zz = this,
            uz = zz._pool,
            bz = 0,
            Ez = 0;
          if (!(zz._sounds.length < uz)) {
            for (Ez = 0; Ez < zz._sounds.length; Ez++) zz._sounds[Ez]._ended && bz++;
            for (Ez = zz._sounds.length - 1; Ez >= 0; Ez--) {
              if (bz <= uz) return;
              zz._sounds[Ez]._ended && (zz._webAudio && zz._sounds[Ez]._node && zz._sounds[Ez]._node.disconnect(0), zz._sounds.splice(Ez, 1), bz--)
            }
          }
        },
        _getSoundIds: function(zz) {
          if ("undefined" === typeof zz) {
            for (var uz = [], bz = 0; bz < this._sounds.length; bz++) uz.push(this._sounds[bz]._id);
            return uz
          }
          return [zz]
        },
        _refreshBuffer: function(zz) {
          return zz._node.bufferSource = iz.ctx.createBufferSource(), zz._node.bufferSource.buffer = tz[this._src], zz._panner ? zz._node.bufferSource.connect(zz._panner) : zz._node.bufferSource.connect(zz._node), zz._node.bufferSource.loop = zz._loop, zz._loop && (zz._node.bufferSource.loopStart = zz._start || 0, zz._node.bufferSource.loopEnd = zz._stop || 0), zz._node.bufferSource.playbackRate.setValueAtTime(zz._rate, iz.ctx.currentTime), this
        },
        _cleanBuffer: function(zz) {
          var uz = iz._navigator && iz._navigator.vendor.indexOf("Apple") >= 0;
          if (iz._scratchBuffer && zz.bufferSource && (zz.bufferSource.onended = null, zz.bufferSource.disconnect(0), uz)) try {
            zz.bufferSource.buffer = iz._scratchBuffer
          } catch (bz) {}
          return zz.bufferSource = null, this
        },
        _clearSound: function(zz) {
          /MSIE |Trident\//.test(iz._navigator && iz._navigator.userAgent) || (zz.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var Mz = function(zz) {
        this._parent = zz, this.init()
      };
      Mz.prototype = {
        init: function() {
          var zz = this,
            uz = zz._parent;
          return zz._muted = uz._muted, zz._loop = uz._loop, zz._volume = uz._volume, zz._rate = uz._rate, zz._seek = 0, zz.oN = !0, zz._ended = !0, zz._sprite = "__default", zz._id = ++iz._counter, uz._sounds.push(zz), zz.create(), zz
        },
        create: function() {
          var zz = this,
            uz = zz._parent,
            bz = iz._muted || zz._muted || zz._parent._muted ? 0 : zz._volume;
          return uz._webAudio ? (zz._node = "undefined" === typeof iz.ctx.createGain ? iz.ctx.createGainNode() : iz.ctx.createGain(), zz._node.gain.setValueAtTime(bz, iz.ctx.currentTime), zz._node.paused = !0, zz._node.connect(iz.masterGain)) : iz.noAudio || (zz._node = iz._obtainHtml5Audio(), zz._errorFn = zz._errorListener.bind(zz), zz._node.addEventListener("error", zz._errorFn, !1), zz._loadFn = zz._loadListener.bind(zz), zz._node.addEventListener(iz._canPlayEvent, zz._loadFn, !1), zz._endFn = zz._endListener.bind(zz), zz._node.addEventListener("ended", zz._endFn, !1), zz._node.src = uz._src, zz._node.preload = !0 === uz._preload ? "auto" : uz._preload, zz._node.volume = bz * iz.volume(), zz._node.load()), zz
        },
        reset: function() {
          var zz = this,
            uz = zz._parent;
          return zz._muted = uz._muted, zz._loop = uz._loop, zz._volume = uz._volume, zz._rate = uz._rate, zz._seek = 0, zz._rateSeek = 0, zz.oN = !0, zz._ended = !0, zz._sprite = "__default", zz._id = ++iz._counter, zz
        },
        _errorListener: function() {
          var zz = this;
          zz._parent._emit("loaderror", zz._id, zz._node.error ? zz._node.error.code : 0), zz._node.removeEventListener("error", zz._errorFn, !1)
        },
        _loadListener: function() {
          var zz = this,
            uz = zz._parent;
          uz._duration = Math.ceil(10 * zz._node.duration) / 10, 0 === Object.keys(uz._sprite).length && (uz._sprite = {
            __default: [0, 1e3 * uz._duration]
          }), "loaded" !== uz._state && (uz._state = "loaded", uz._emit("load"), uz._loadQueue()), zz._node.removeEventListener(iz._canPlayEvent, zz._loadFn, !1)
        },
        _endListener: function() {
          var zz = this,
            uz = zz._parent;
          uz._duration === 1 / 0 && (uz._duration = Math.ceil(10 * zz._node.duration) / 10, uz._sprite.__default[1] === 1 / 0 && (uz._sprite.__default[1] = 1e3 * uz._duration), uz._ended(zz)), zz._node.removeEventListener("ended", zz._endFn, !1)
        }
      };
      var tz = {},
        Hz = function(zz) {
          var uz = zz._src;
          if (tz[uz]) return zz._duration = tz[uz].duration, void dz(zz);
          if (/^data:[^;]+;base64,/.test(uz)) {
            for (var bz = atob(uz.split(",")[1]), Ez = new Uint8Array(bz.length), nz = 0; nz < bz.length; ++nz) Ez[nz] = bz.charCodeAt(nz);
            pz(Ez.buffer, zz)
          } else {
            var iz = new XMLHttpRequest;
            iz.open(zz._xhr.method, uz, !0), iz.withCredentials = zz._xhr.withCredentials, iz.responseType = "arraybuffer", zz._xhr.headers && Object.keys(zz._xhr.headers).forEach((function(uz) {
              iz.setRequestHeader(uz, zz._xhr.headers[uz])
            })), iz.onload = function() {
              var uz = (iz.status + "")[0];
              "0" === uz || "2" === uz || "3" === uz ? pz(iz.response, zz) : zz._emit("loaderror", null, "Failed loading audio file with status: " + iz.status + ".")
            }, iz.onerror = function() {
              zz._webAudio && (zz._html5 = !0, zz._webAudio = !1, zz._sounds = [], delete tz[uz], zz.load())
            }, Oz(iz)
          }
        },
        Oz = function(zz) {
          try {
            zz.send()
          } catch (uz) {
            zz.onerror()
          }
        },
        pz = function(zz, uz) {
          var bz = function() {
              uz._emit("loaderror", null, "Decoding audio data failed.")
            },
            Ez = function(zz) {
              zz && uz._sounds.length > 0 ? (tz[uz._src] = zz, dz(uz, zz)) : bz()
            };
          "undefined" !== typeof Promise && 1 === iz.ctx.decodeAudioData.length ? iz.ctx.decodeAudioData(zz).then(Ez).catch(bz) : iz.ctx.decodeAudioData(zz, Ez, bz)
        },
        dz = function(zz, uz) {
          uz && !zz._duration && (zz._duration = uz.duration), 0 === Object.keys(zz._sprite).length && (zz._sprite = {
            __default: [0, 1e3 * zz._duration]
          }), "loaded" !== zz._state && (zz._state = "loaded", zz._emit("load"), zz._loadQueue())
        },
        Fz = function() {
          if (iz.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? iz.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? iz.ctx = new webkitAudioContext : iz.usingWebAudio = !1
            } catch (nz) {
              iz.usingWebAudio = !1
            }
            iz.ctx || (iz.usingWebAudio = !1);
            var zz = /iP(hone|od|ad)/.test(iz._navigator && iz._navigator.platform),
              uz = iz._navigator && iz._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              bz = uz ? parseInt(uz[1], 10) : null;
            if (zz && bz && bz < 9) {
              var Ez = /safari/.test(iz._navigator && iz._navigator.userAgent.toLowerCase());
              iz._navigator && !Ez && (iz.usingWebAudio = !1)
            }
            iz.usingWebAudio && (iz.masterGain = "undefined" === typeof iz.ctx.createGain ? iz.ctx.createGainNode() : iz.ctx.createGain(), iz.masterGain.gain.setValueAtTime(iz._muted ? 0 : iz._volume, iz.ctx.currentTime), iz.masterGain.connect(iz.ctx.destination)), iz._setup()
          }
        };
      void 0 === (Ez = function() {
        return {
          Howler: iz,
          Howl: lz
        }
      }.apply(uz, [])) || (zz.exports = Ez), uz.Howler = iz, uz.Howl = lz, "undefined" !== typeof bz.g ? (bz.g.HowlerGlobal = nz, bz.g.Howler = iz, bz.g.Howl = lz, bz.g.Sound = Mz) : "undefined" !== typeof window && (window.HowlerGlobal = nz, window.Howler = iz, window.Howl = lz, window.Sound = Mz)
    }(),
    function() {
      var zz;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(zz) {
        var uz = this;
        if (!uz.ctx || !uz.ctx.listener) return uz;
        for (var bz = uz._howls.length - 1; bz >= 0; bz--) uz._howls[bz].stereo(zz);
        return uz
      }, HowlerGlobal.prototype.pos = function(zz, uz, bz) {
        var Ez = this;
        return Ez.ctx && Ez.ctx.listener ? (uz = "number" !== typeof uz ? Ez._pos[1] : uz, bz = "number" !== typeof bz ? Ez._pos[2] : bz, "number" !== typeof zz ? Ez._pos : (Ez._pos = [zz, uz, bz], "undefined" !== typeof Ez.ctx.listener.positionX ? (Ez.ctx.listener.positionX.setTargetAtTime(Ez._pos[0], Howler.ctx.currentTime, .1), Ez.ctx.listener.positionY.setTargetAtTime(Ez._pos[1], Howler.ctx.currentTime, .1), Ez.ctx.listener.positionZ.setTargetAtTime(Ez._pos[2], Howler.ctx.currentTime, .1)) : Ez.ctx.listener.setPosition(Ez._pos[0], Ez._pos[1], Ez._pos[2]), Ez)) : Ez
      }, HowlerGlobal.prototype.orientation = function(zz, uz, bz, Ez, nz, iz) {
        var lz = this;
        if (!lz.ctx || !lz.ctx.listener) return lz;
        var Mz = lz._orientation;
        return uz = "number" !== typeof uz ? Mz[1] : uz, bz = "number" !== typeof bz ? Mz[2] : bz, Ez = "number" !== typeof Ez ? Mz[3] : Ez, nz = "number" !== typeof nz ? Mz[4] : nz, iz = "number" !== typeof iz ? Mz[5] : iz, "number" !== typeof zz ? Mz : (lz._orientation = [zz, uz, bz, Ez, nz, iz], "undefined" !== typeof lz.ctx.listener.forwardX ? (lz.ctx.listener.forwardX.setTargetAtTime(zz, Howler.ctx.currentTime, .1), lz.ctx.listener.forwardY.setTargetAtTime(uz, Howler.ctx.currentTime, .1), lz.ctx.listener.forwardZ.setTargetAtTime(bz, Howler.ctx.currentTime, .1), lz.ctx.listener.upX.setTargetAtTime(Ez, Howler.ctx.currentTime, .1), lz.ctx.listener.upY.setTargetAtTime(nz, Howler.ctx.currentTime, .1), lz.ctx.listener.upZ.setTargetAtTime(iz, Howler.ctx.currentTime, .1)) : lz.ctx.listener.setOrientation(zz, uz, bz, Ez, nz, iz), lz)
      }, Howl.prototype.init = (zz = Howl.prototype.init, function(uz) {
        var bz = this;
        return bz._orientation = uz.orientation || [1, 0, 0], bz._stereo = uz.stereo || null, bz._pos = uz.pos || null, bz._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof uz.coneInnerAngle ? uz.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof uz.coneOuterAngle ? uz.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof uz.coneOuterGain ? uz.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof uz.distanceModel ? uz.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof uz.maxDistance ? uz.maxDistance : 1e4,
          panningModel: "undefined" !== typeof uz.panningModel ? uz.panningModel : "HRTF",
          refDistance: "undefined" !== typeof uz.refDistance ? uz.refDistance : 1,
          rolloffFactor: "undefined" !== typeof uz.rolloffFactor ? uz.rolloffFactor : 1
        }, bz._onstereo = uz.onstereo ? [{
          TZ: uz.onstereo
        }] : [], bz._onpos = uz.onpos ? [{
          TZ: uz.onpos
        }] : [], bz._onorientation = uz.onorientation ? [{
          TZ: uz.onorientation
        }] : [], zz.call(this, uz)
      }), Howl.prototype.stereo = function(zz, bz) {
        var Ez = this;
        if (!Ez._webAudio) return Ez;
        if ("loaded" !== Ez._state) return Ez._queue.push({
          event: "stereo",
          action: function() {
            Ez.stereo(zz, bz)
          }
        }), Ez;
        var nz = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof bz) {
          if ("number" !== typeof zz) return Ez._stereo;
          Ez._stereo = zz, Ez._pos = [zz, 0, 0]
        }
        for (var iz = Ez._getSoundIds(bz), lz = 0; lz < iz.length; lz++) {
          var Mz = Ez._soundById(iz[lz]);
          if (Mz) {
            if ("number" !== typeof zz) return Mz._stereo;
            Mz._stereo = zz, Mz._pos = [zz, 0, 0], Mz._node && (Mz._pannerAttr.panningModel = "equalpower", Mz._panner && Mz._panner.pan || uz(Mz, nz), "spatial" === nz ? "undefined" !== typeof Mz._panner.positionX ? (Mz._panner.positionX.setValueAtTime(zz, Howler.ctx.currentTime), Mz._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), Mz._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : Mz._panner.setPosition(zz, 0, 0) : Mz._panner.pan.setValueAtTime(zz, Howler.ctx.currentTime)), Ez._emit("stereo", Mz._id)
          }
        }
        return Ez
      }, Howl.prototype.pos = function(zz, bz, Ez, nz) {
        var iz = this;
        if (!iz._webAudio) return iz;
        if ("loaded" !== iz._state) return iz._queue.push({
          event: "pos",
          action: function() {
            iz.pos(zz, bz, Ez, nz)
          }
        }), iz;
        if (bz = "number" !== typeof bz ? 0 : bz, Ez = "number" !== typeof Ez ? -.5 : Ez, "undefined" === typeof nz) {
          if ("number" !== typeof zz) return iz._pos;
          iz._pos = [zz, bz, Ez]
        }
        for (var lz = iz._getSoundIds(nz), Mz = 0; Mz < lz.length; Mz++) {
          var tz = iz._soundById(lz[Mz]);
          if (tz) {
            if ("number" !== typeof zz) return tz._pos;
            tz._pos = [zz, bz, Ez], tz._node && (tz._panner && !tz._panner.pan || uz(tz, "spatial"), "undefined" !== typeof tz._panner.positionX ? (tz._panner.positionX.setValueAtTime(zz, Howler.ctx.currentTime), tz._panner.positionY.setValueAtTime(bz, Howler.ctx.currentTime), tz._panner.positionZ.setValueAtTime(Ez, Howler.ctx.currentTime)) : tz._panner.setPosition(zz, bz, Ez)), iz._emit("pos", tz._id)
          }
        }
        return iz
      }, Howl.prototype.orientation = function(zz, bz, Ez, nz) {
        var iz = this;
        if (!iz._webAudio) return iz;
        if ("loaded" !== iz._state) return iz._queue.push({
          event: "orientation",
          action: function() {
            iz.orientation(zz, bz, Ez, nz)
          }
        }), iz;
        if (bz = "number" !== typeof bz ? iz._orientation[1] : bz, Ez = "number" !== typeof Ez ? iz._orientation[2] : Ez, "undefined" === typeof nz) {
          if ("number" !== typeof zz) return iz._orientation;
          iz._orientation = [zz, bz, Ez]
        }
        for (var lz = iz._getSoundIds(nz), Mz = 0; Mz < lz.length; Mz++) {
          var tz = iz._soundById(lz[Mz]);
          if (tz) {
            if ("number" !== typeof zz) return tz._orientation;
            tz._orientation = [zz, bz, Ez], tz._node && (tz._panner || (tz._pos || (tz._pos = iz._pos || [0, 0, -.5]), uz(tz, "spatial")), "undefined" !== typeof tz._panner.orientationX ? (tz._panner.orientationX.setValueAtTime(zz, Howler.ctx.currentTime), tz._panner.orientationY.setValueAtTime(bz, Howler.ctx.currentTime), tz._panner.orientationZ.setValueAtTime(Ez, Howler.ctx.currentTime)) : tz._panner.setOrientation(zz, bz, Ez)), iz._emit("orientation", tz._id)
          }
        }
        return iz
      }, Howl.prototype.pannerAttr = function() {
        var zz, bz, Ez, nz = this,
          iz = arguments;
        if (!nz._webAudio) return nz;
        if (0 === iz.length) return nz._pannerAttr;
        if (1 === iz.length) {
          if ("object" !== typeof iz[0]) return (Ez = nz._soundById(parseInt(iz[0], 10))) ? Ez._pannerAttr : nz._pannerAttr;
          zz = iz[0], "undefined" === typeof bz && (zz.pannerAttr || (zz.pannerAttr = {
            coneInnerAngle: zz.coneInnerAngle,
            coneOuterAngle: zz.coneOuterAngle,
            coneOuterGain: zz.coneOuterGain,
            distanceModel: zz.distanceModel,
            maxDistance: zz.maxDistance,
            refDistance: zz.refDistance,
            rolloffFactor: zz.rolloffFactor,
            panningModel: zz.panningModel
          }), nz._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof zz.pannerAttr.coneInnerAngle ? zz.pannerAttr.coneInnerAngle : nz._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof zz.pannerAttr.coneOuterAngle ? zz.pannerAttr.coneOuterAngle : nz._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof zz.pannerAttr.coneOuterGain ? zz.pannerAttr.coneOuterGain : nz._coneOuterGain,
            distanceModel: "undefined" !== typeof zz.pannerAttr.distanceModel ? zz.pannerAttr.distanceModel : nz._distanceModel,
            maxDistance: "undefined" !== typeof zz.pannerAttr.maxDistance ? zz.pannerAttr.maxDistance : nz._maxDistance,
            refDistance: "undefined" !== typeof zz.pannerAttr.refDistance ? zz.pannerAttr.refDistance : nz._refDistance,
            rolloffFactor: "undefined" !== typeof zz.pannerAttr.rolloffFactor ? zz.pannerAttr.rolloffFactor : nz._rolloffFactor,
            panningModel: "undefined" !== typeof zz.pannerAttr.panningModel ? zz.pannerAttr.panningModel : nz._panningModel
          })
        } else 2 === iz.length && (zz = iz[0], bz = parseInt(iz[1], 10));
        for (var lz = nz._getSoundIds(bz), Mz = 0; Mz < lz.length; Mz++)
          if (Ez = nz._soundById(lz[Mz])) {
            var tz = Ez._pannerAttr;
            tz = {
              coneInnerAngle: "undefined" !== typeof zz.coneInnerAngle ? zz.coneInnerAngle : tz.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof zz.coneOuterAngle ? zz.coneOuterAngle : tz.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof zz.coneOuterGain ? zz.coneOuterGain : tz.coneOuterGain,
              distanceModel: "undefined" !== typeof zz.distanceModel ? zz.distanceModel : tz.distanceModel,
              maxDistance: "undefined" !== typeof zz.maxDistance ? zz.maxDistance : tz.maxDistance,
              refDistance: "undefined" !== typeof zz.refDistance ? zz.refDistance : tz.refDistance,
              rolloffFactor: "undefined" !== typeof zz.rolloffFactor ? zz.rolloffFactor : tz.rolloffFactor,
              panningModel: "undefined" !== typeof zz.panningModel ? zz.panningModel : tz.panningModel
            };
            var Hz = Ez._panner;
            Hz ? (Hz.coneInnerAngle = tz.coneInnerAngle, Hz.coneOuterAngle = tz.coneOuterAngle, Hz.coneOuterGain = tz.coneOuterGain, Hz.distanceModel = tz.distanceModel, Hz.maxDistance = tz.maxDistance, Hz.refDistance = tz.refDistance, Hz.rolloffFactor = tz.rolloffFactor, Hz.panningModel = tz.panningModel) : (Ez._pos || (Ez._pos = nz._pos || [0, 0, -.5]), uz(Ez, "spatial"))
          } return nz
      }, Sound.prototype.init = function(zz) {
        return function() {
          var uz = this,
            bz = uz._parent;
          uz._orientation = bz._orientation, uz._stereo = bz._stereo, uz._pos = bz._pos, uz._pannerAttr = bz._pannerAttr, zz.call(this), uz._stereo ? bz.stereo(uz._stereo) : uz._pos && bz.pos(uz._pos[0], uz._pos[1], uz._pos[2], uz._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(zz) {
        return function() {
          var uz = this,
            bz = uz._parent;
          return uz._orientation = bz._orientation, uz._stereo = bz._stereo, uz._pos = bz._pos, uz._pannerAttr = bz._pannerAttr, uz._stereo ? bz.stereo(uz._stereo) : uz._pos ? bz.pos(uz._pos[0], uz._pos[1], uz._pos[2], uz._id) : uz._panner && (uz._panner.disconnect(0), uz._panner = void 0, bz._refreshBuffer(uz)), zz.call(this)
        }
      }(Sound.prototype.reset);
      var uz = function(zz, uz) {
        "spatial" === (uz = uz || "spatial") ? (zz._panner = Howler.ctx.createPanner(), zz._panner.coneInnerAngle = zz._pannerAttr.coneInnerAngle, zz._panner.coneOuterAngle = zz._pannerAttr.coneOuterAngle, zz._panner.coneOuterGain = zz._pannerAttr.coneOuterGain, zz._panner.distanceModel = zz._pannerAttr.distanceModel, zz._panner.maxDistance = zz._pannerAttr.maxDistance, zz._panner.refDistance = zz._pannerAttr.refDistance, zz._panner.rolloffFactor = zz._pannerAttr.rolloffFactor, zz._panner.panningModel = zz._pannerAttr.panningModel, "undefined" !== typeof zz._panner.positionX ? (zz._panner.positionX.setValueAtTime(zz._pos[0], Howler.ctx.currentTime), zz._panner.positionY.setValueAtTime(zz._pos[1], Howler.ctx.currentTime), zz._panner.positionZ.setValueAtTime(zz._pos[2], Howler.ctx.currentTime)) : zz._panner.setPosition(zz._pos[0], zz._pos[1], zz._pos[2]), "undefined" !== typeof zz._panner.orientationX ? (zz._panner.orientationX.setValueAtTime(zz._orientation[0], Howler.ctx.currentTime), zz._panner.orientationY.setValueAtTime(zz._orientation[1], Howler.ctx.currentTime), zz._panner.orientationZ.setValueAtTime(zz._orientation[2], Howler.ctx.currentTime)) : zz._panner.setOrientation(zz._orientation[0], zz._orientation[1], zz._orientation[2])) : (zz._panner = Howler.ctx.createStereoPanner(), zz._panner.pan.setValueAtTime(zz._stereo, Howler.ctx.currentTime)), zz._panner.connect(zz._node), zz.oN || zz._parent.pause(zz._id, !0).play(zz._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);