/*! For license information please see qepqb8.95.727387b9.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  4611: (vv, zv, Pv) => {
    var hv;
    ! function() {
      var Sv = function() {
        this.init()
      };
      Sv.prototype = {
        init: function() {
          var vv = this || ev;
          return vv._counter = 1e3, vv._html5AudioPool = [], vv.html5PoolSize = 10, vv._codecs = {}, vv._howls = [], vv._muted = !1, vv._volume = 1, vv._canPlayEvent = "canplaythrough", vv._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, vv.masterGain = null, vv.noAudio = !1, vv.usingWebAudio = !0, vv.autoSuspend = !0, vv.ctx = null, vv.autoUnlock = !0, vv._setup(), vv
        },
        volume: function(vv) {
          var zv = this || ev;
          if (vv = parseFloat(vv), zv.ctx || wv(), "undefined" !== typeof vv && vv >= 0 && vv <= 1) {
            if (zv._volume = vv, zv._muted) return zv;
            zv.usingWebAudio && zv.masterGain.gain.setValueAtTime(vv, ev.ctx.currentTime);
            for (var Pv = 0; Pv < zv._howls.length; Pv++)
              if (!zv._howls[Pv]._webAudio)
                for (var hv = zv._howls[Pv]._getSoundIds(), Sv = 0; Sv < hv.length; Sv++) {
                  var gv = zv._howls[Pv]._soundById(hv[Sv]);
                  gv && gv._node && (gv._node.volume = gv._volume * vv)
                }
            return zv
          }
          return zv._volume
        },
        mute: function(vv) {
          var zv = this || ev;
          zv.ctx || wv(), zv._muted = vv, zv.usingWebAudio && zv.masterGain.gain.setValueAtTime(vv ? 0 : zv._volume, ev.ctx.currentTime);
          for (var Pv = 0; Pv < zv._howls.length; Pv++)
            if (!zv._howls[Pv]._webAudio)
              for (var hv = zv._howls[Pv]._getSoundIds(), Sv = 0; Sv < hv.length; Sv++) {
                var gv = zv._howls[Pv]._soundById(hv[Sv]);
                gv && gv._node && (gv._node.muted = !!vv || gv._muted)
              }
          return zv
        },
        stop: function() {
          for (var vv = this || ev, zv = 0; zv < vv._howls.length; zv++) vv._howls[zv].stop();
          return vv
        },
        unload: function() {
          for (var vv = this || ev, zv = vv._howls.length - 1; zv >= 0; zv--) vv._howls[zv].unload();
          return vv.usingWebAudio && vv.ctx && "undefined" !== typeof vv.ctx.close && (vv.ctx.close(), vv.ctx = null, wv()), vv
        },
        codecs: function(vv) {
          return (this || ev)._codecs[vv.replace(/^x-/, "")]
        },
        _setup: function() {
          var vv = this || ev;
          if (vv.state = vv.ctx && vv.ctx.state || "suspended", vv._autoSuspend(), !vv.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (vv._canPlayEvent = "canplay")
            } catch (zv) {
              vv.noAudio = !0
            } else vv.noAudio = !0;
          try {
            (new Audio).muted && (vv.noAudio = !0)
          } catch (zv) {}
          return vv.noAudio || vv._setupCodecs(), vv
        },
        _setupCodecs: function() {
          var vv = this || ev,
            zv = null;
          try {
            zv = "undefined" !== typeof Audio ? new Audio : null
          } catch (lv) {
            return vv
          }
          if (!zv || "function" !== typeof zv.canPlayType) return vv;
          var Pv = zv.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            hv = vv._navigator ? vv._navigator.userAgent : "",
            Sv = hv.match(/OPR\/([0-6].)/g),
            gv = Sv && parseInt(Sv[0].split("/")[1], 10) < 33,
            pv = -1 !== hv.indexOf("Safari") && -1 === hv.indexOf("Chrome"),
            dv = hv.match(/Version\/(.*?) /),
            Nv = pv && dv && parseInt(dv[1], 10) < 15;
          return vv._codecs = {
            mp3: !(gv || !Pv && !zv.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!Pv,
            opus: !!zv.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!zv.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!zv.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(zv.canPlayType('audio/wav; codecs="1"') || zv.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!zv.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!zv.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(zv.canPlayType("audio/x-m4a;") || zv.canPlayType("audio/m4a;") || zv.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(zv.canPlayType("audio/x-m4b;") || zv.canPlayType("audio/m4b;") || zv.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(zv.canPlayType("audio/x-mp4;") || zv.canPlayType("audio/mp4;") || zv.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Nv || !zv.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Nv || !zv.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!zv.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(zv.canPlayType("audio/x-flac;") || zv.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, vv
        },
        _unlockAudio: function() {
          var vv = this || ev;
          if (!vv._audioUnlocked && vv.ctx) {
            vv._audioUnlocked = !1, vv.autoUnlock = !1, vv._mobileUnloaded || 44100 === vv.ctx.sampleRate || (vv._mobileUnloaded = !0, vv.unload()), vv._scratchBuffer = vv.ctx.createBuffer(1, 1, 22050);
            var zv = function(Pv) {
              for (; vv._html5AudioPool.length < vv.html5PoolSize;) try {
                var hv = new Audio;
                hv._unlocked = !0, vv._releaseHtml5Audio(hv)
              } catch (Pv) {
                vv.noAudio = !0;
                break
              }
              for (var Sv = 0; Sv < vv._howls.length; Sv++)
                if (!vv._howls[Sv]._webAudio)
                  for (var ev = vv._howls[Sv]._getSoundIds(), gv = 0; gv < ev.length; gv++) {
                    var pv = vv._howls[Sv]._soundById(ev[gv]);
                    pv && pv._node && !pv._node._unlocked && (pv._node._unlocked = !0, pv._node.load())
                  }
              vv._autoResume();
              var dv = vv.ctx.createBufferSource();
              dv.buffer = vv._scratchBuffer, dv.connect(vv.ctx.destination), "undefined" === typeof dv.start ? dv.noteOn(0) : dv.start(0), "function" === typeof vv.ctx.resume && vv.ctx.resume(), dv.onended = function() {
                dv.disconnect(0), vv._audioUnlocked = !0, document.removeEventListener("touchstart", zv, !0), document.removeEventListener("touchend", zv, !0), document.removeEventListener("click", zv, !0), document.removeEventListener("keydown", zv, !0);
                for (var Pv = 0; Pv < vv._howls.length; Pv++) vv._howls[Pv]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", zv, !0), document.addEventListener("touchend", zv, !0), document.addEventListener("click", zv, !0), document.addEventListener("keydown", zv, !0), vv
          }
        },
        _obtainHtml5Audio: function() {
          var vv = this || ev;
          if (vv._html5AudioPool.length) return vv._html5AudioPool.pop();
          var zv = (new Audio).play();
          return zv && "undefined" !== typeof Promise && (zv instanceof Promise || "function" === typeof zv.then) && zv.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(vv) {
          var zv = this || ev;
          return vv._unlocked && zv._html5AudioPool.push(vv), zv
        },
        _autoSuspend: function() {
          var vv = this;
          if (vv.autoSuspend && vv.ctx && "undefined" !== typeof vv.ctx.suspend && ev.usingWebAudio) {
            for (var zv = 0; zv < vv._howls.length; zv++)
              if (vv._howls[zv]._webAudio)
                for (var Pv = 0; Pv < vv._howls[zv]._sounds.length; Pv++)
                  if (!vv._howls[zv]._sounds[Pv].Am) return vv;
            return vv._suspendTimer && clearTimeout(vv._suspendTimer), vv._suspendTimer = setTimeout((function() {
              if (vv.autoSuspend) {
                vv._suspendTimer = null, vv.state = "suspending";
                var zv = function() {
                  vv.state = "suspended", vv._resumeAfterSuspend && (delete vv._resumeAfterSuspend, vv._autoResume())
                };
                vv.ctx.suspend().then(zv, zv)
              }
            }), 3e4), vv
          }
        },
        _autoResume: function() {
          var vv = this;
          if (vv.ctx && "undefined" !== typeof vv.ctx.resume && ev.usingWebAudio) return "running" === vv.state && "interrupted" !== vv.ctx.state && vv._suspendTimer ? (clearTimeout(vv._suspendTimer), vv._suspendTimer = null) : "suspended" === vv.state || "running" === vv.state && "interrupted" === vv.ctx.state ? (vv.ctx.resume().then((function() {
            vv.state = "running";
            for (var zv = 0; zv < vv._howls.length; zv++) vv._howls[zv]._emit("resume")
          })), vv._suspendTimer && (clearTimeout(vv._suspendTimer), vv._suspendTimer = null)) : "suspending" === vv.state && (vv._resumeAfterSuspend = !0), vv
        }
      };
      var ev = new Sv,
        gv = function(vv) {
          vv.src && 0 !== vv.src.length ? this.init(vv) : console.error("An array of source files must be passed with any new Howl.")
        };
      gv.prototype = {
        init: function(vv) {
          var zv = this;
          return ev.ctx || wv(), zv._autoplay = vv.autoplay || !1, zv._format = "string" !== typeof vv.format ? vv.format : [vv.format], zv._html5 = vv.html5 || !1, zv._muted = vv.mute || !1, zv._loop = vv.loop || !1, zv._pool = vv.pool || 5, zv._preload = "boolean" !== typeof vv.preload && "metadata" !== vv.preload || vv.preload, zv._rate = vv.rate || 1, zv._sprite = vv.sprite || {}, zv._src = "string" !== typeof vv.src ? vv.src : [vv.src], zv._volume = void 0 !== vv.volume ? vv.volume : 1, zv._xhr = {
            method: vv.xhr && vv.xhr.method ? vv.xhr.method : "GET",
            headers: vv.xhr && vv.xhr.headers ? vv.xhr.headers : null,
            withCredentials: !(!vv.xhr || !vv.xhr.withCredentials) && vv.xhr.withCredentials
          }, zv._duration = 0, zv._state = "unloaded", zv._sounds = [], zv._endTimers = {}, zv._queue = [], zv._playLock = !1, zv._onend = vv.onend ? [{
            Ew: vv.onend
          }] : [], zv._onfade = vv.onfade ? [{
            Ew: vv.onfade
          }] : [], zv._onload = vv.onload ? [{
            Ew: vv.onload
          }] : [], zv._onloaderror = vv.onloaderror ? [{
            Ew: vv.onloaderror
          }] : [], zv._onplayerror = vv.onplayerror ? [{
            Ew: vv.onplayerror
          }] : [], zv._onpause = vv.onpause ? [{
            Ew: vv.onpause
          }] : [], zv._onplay = vv.onplay ? [{
            Ew: vv.onplay
          }] : [], zv._onstop = vv.onstop ? [{
            Ew: vv.onstop
          }] : [], zv._onmute = vv.onmute ? [{
            Ew: vv.onmute
          }] : [], zv._onvolume = vv.onvolume ? [{
            Ew: vv.onvolume
          }] : [], zv._onrate = vv.onrate ? [{
            Ew: vv.onrate
          }] : [], zv._onseek = vv.onseek ? [{
            Ew: vv.onseek
          }] : [], zv._onunlock = vv.onunlock ? [{
            Ew: vv.onunlock
          }] : [], zv._onresume = [], zv._webAudio = ev.usingWebAudio && !zv._html5, "undefined" !== typeof ev.ctx && ev.ctx && ev.autoUnlock && ev._unlockAudio(), ev._howls.push(zv), zv._autoplay && zv._queue.push({
            event: "play",
            action: function() {
              zv.play()
            }
          }), zv._preload && "none" !== zv._preload && zv.load(), zv
        },
        load: function() {
          var vv = this,
            zv = null;
          if (ev.noAudio) vv._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof vv._src && (vv._src = [vv._src]);
            for (var Pv = 0; Pv < vv._src.length; Pv++) {
              var hv, Sv;
              if (vv._format && vv._format[Pv]) hv = vv._format[Pv];
              else {
                if ("string" !== typeof(Sv = vv._src[Pv])) {
                  vv._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(hv = /^data:audio\/([^;,]+);/i.exec(Sv)) || (hv = /\.([^.]+)$/.exec(Sv.split("?", 1)[0])), hv && (hv = hv[1].toLowerCase())
              }
              if (hv || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), hv && ev.codecs(hv)) {
                zv = vv._src[Pv];
                break
              }
            }
            if (zv) return vv._src = zv, vv._state = "loading", "https:" === window.location.protocol && "http:" === zv.slice(0, 5) && (vv._html5 = !0, vv._webAudio = !1), new pv(vv), vv._webAudio && Nv(vv), vv;
            vv._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(vv, zv) {
          var Pv = this,
            hv = null;
          if ("number" === typeof vv) hv = vv, vv = null;
          else {
            if ("string" === typeof vv && "loaded" === Pv._state && !Pv._sprite[vv]) return null;
            if ("undefined" === typeof vv && (vv = "__default", !Pv._playLock)) {
              for (var Sv = 0, gv = 0; gv < Pv._sounds.length; gv++) Pv._sounds[gv].Am && !Pv._sounds[gv]._ended && (Sv++, hv = Pv._sounds[gv]._id);
              1 === Sv ? vv = null : hv = null
            }
          }
          var pv = hv ? Pv._soundById(hv) : Pv._inactiveSound();
          if (!pv) return null;
          if (hv && !vv && (vv = pv._sprite || "__default"), "loaded" !== Pv._state) {
            pv._sprite = vv, pv._ended = !1;
            var dv = pv._id;
            return Pv._queue.push({
              event: "play",
              action: function() {
                Pv.play(dv)
              }
            }), dv
          }
          if (hv && !pv.Am) return zv || Pv._loadQueue("play"), pv._id;
          Pv._webAudio && ev._autoResume();
          var Nv = Math.max(0, pv._seek > 0 ? pv._seek : Pv._sprite[vv][0] / 1e3),
            lv = Math.max(0, (Pv._sprite[vv][0] + Pv._sprite[vv][1]) / 1e3 - Nv),
            Tv = 1e3 * lv / Math.abs(pv._rate),
            Wv = Pv._sprite[vv][0] / 1e3,
            wv = (Pv._sprite[vv][0] + Pv._sprite[vv][1]) / 1e3;
          pv._sprite = vv, pv._ended = !1;
          var av = function() {
            pv.Am = !1, pv._seek = Nv, pv._start = Wv, pv._stop = wv, pv._loop = !(!pv._loop && !Pv._sprite[vv][2])
          };
          if (!(Nv >= wv)) {
            var sv = pv._node;
            if (Pv._webAudio) {
              var Cv = function() {
                Pv._playLock = !1, av(), Pv._refreshBuffer(pv);
                var vv = pv._muted || Pv._muted ? 0 : pv._volume;
                sv.gain.setValueAtTime(vv, ev.ctx.currentTime), pv._playStart = ev.ctx.currentTime, "undefined" === typeof sv.bufferSource.start ? pv._loop ? sv.bufferSource.noteGrainOn(0, Nv, 86400) : sv.bufferSource.noteGrainOn(0, Nv, lv) : pv._loop ? sv.bufferSource.start(0, Nv, 86400) : sv.bufferSource.start(0, Nv, lv), Tv !== 1 / 0 && (Pv._endTimers[pv._id] = setTimeout(Pv._ended.bind(Pv, pv), Tv)), zv || setTimeout((function() {
                  Pv._emit("play", pv._id), Pv._loadQueue()
                }), 0)
              };
              "running" === ev.state && "interrupted" !== ev.ctx.state ? Cv() : (Pv._playLock = !0, Pv.once("resume", Cv), Pv._clearTimer(pv._id))
            } else {
              var iv = function() {
                sv.currentTime = Nv, sv.muted = pv._muted || Pv._muted || ev._muted || sv.muted, sv.volume = pv._volume * ev.volume(), sv.playbackRate = pv._rate;
                try {
                  var hv = sv.play();
                  if (hv && "undefined" !== typeof Promise && (hv instanceof Promise || "function" === typeof hv.then) ? (Pv._playLock = !0, av(), hv.then((function() {
                      Pv._playLock = !1, sv._unlocked = !0, zv ? Pv._loadQueue() : Pv._emit("play", pv._id)
                    })).catch((function() {
                      Pv._playLock = !1, Pv._emit("playerror", pv._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), pv._ended = !0, pv.Am = !0
                    }))) : zv || (Pv._playLock = !1, av(), Pv._emit("play", pv._id)), sv.playbackRate = pv._rate, sv.paused) return void Pv._emit("playerror", pv._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== vv || pv._loop ? Pv._endTimers[pv._id] = setTimeout(Pv._ended.bind(Pv, pv), Tv) : (Pv._endTimers[pv._id] = function() {
                    Pv._ended(pv), sv.removeEventListener("ended", Pv._endTimers[pv._id], !1)
                  }, sv.addEventListener("ended", Pv._endTimers[pv._id], !1))
                } catch (Sv) {
                  Pv._emit("playerror", pv._id, Sv)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === sv.src && (sv.src = Pv._src, sv.load());
              var cv = window && window.ejecta || !sv.readyState && ev._navigator.isCocoonJS;
              if (sv.readyState >= 3 || cv) iv();
              else {
                Pv._playLock = !0, Pv._state = "loading";
                var Gv = function() {
                  Pv._state = "loaded", iv(), sv.removeEventListener(ev._canPlayEvent, Gv, !1)
                };
                sv.addEventListener(ev._canPlayEvent, Gv, !1), Pv._clearTimer(pv._id)
              }
            }
            return pv._id
          }
          Pv._ended(pv)
        },
        pause: function(vv) {
          var zv = this;
          if ("loaded" !== zv._state || zv._playLock) return zv._queue.push({
            event: "pause",
            action: function() {
              zv.pause(vv)
            }
          }), zv;
          for (var Pv = zv._getSoundIds(vv), hv = 0; hv < Pv.length; hv++) {
            zv._clearTimer(Pv[hv]);
            var Sv = zv._soundById(Pv[hv]);
            if (Sv && !Sv.Am && (Sv._seek = zv.seek(Pv[hv]), Sv._rateSeek = 0, Sv.Am = !0, zv._stopFade(Pv[hv]), Sv._node))
              if (zv._webAudio) {
                if (!Sv._node.bufferSource) continue;
                "undefined" === typeof Sv._node.bufferSource.stop ? Sv._node.bufferSource.noteOff(0) : Sv._node.bufferSource.stop(0), zv._cleanBuffer(Sv._node)
              } else isNaN(Sv._node.duration) && Sv._node.duration !== 1 / 0 || Sv._node.pause();
            arguments[1] || zv._emit("pause", Sv ? Sv._id : null)
          }
          return zv
        },
        stop: function(vv, zv) {
          var Pv = this;
          if ("loaded" !== Pv._state || Pv._playLock) return Pv._queue.push({
            event: "stop",
            action: function() {
              Pv.stop(vv)
            }
          }), Pv;
          for (var hv = Pv._getSoundIds(vv), Sv = 0; Sv < hv.length; Sv++) {
            Pv._clearTimer(hv[Sv]);
            var ev = Pv._soundById(hv[Sv]);
            ev && (ev._seek = ev._start || 0, ev._rateSeek = 0, ev.Am = !0, ev._ended = !0, Pv._stopFade(hv[Sv]), ev._node && (Pv._webAudio ? ev._node.bufferSource && ("undefined" === typeof ev._node.bufferSource.stop ? ev._node.bufferSource.noteOff(0) : ev._node.bufferSource.stop(0), Pv._cleanBuffer(ev._node)) : isNaN(ev._node.duration) && ev._node.duration !== 1 / 0 || (ev._node.currentTime = ev._start || 0, ev._node.pause(), ev._node.duration === 1 / 0 && Pv._clearSound(ev._node))), zv || Pv._emit("stop", ev._id))
          }
          return Pv
        },
        mute: function(vv, zv) {
          var Pv = this;
          if ("loaded" !== Pv._state || Pv._playLock) return Pv._queue.push({
            event: "mute",
            action: function() {
              Pv.mute(vv, zv)
            }
          }), Pv;
          if ("undefined" === typeof zv) {
            if ("boolean" !== typeof vv) return Pv._muted;
            Pv._muted = vv
          }
          for (var hv = Pv._getSoundIds(zv), Sv = 0; Sv < hv.length; Sv++) {
            var gv = Pv._soundById(hv[Sv]);
            gv && (gv._muted = vv, gv._interval && Pv._stopFade(gv._id), Pv._webAudio && gv._node ? gv._node.gain.setValueAtTime(vv ? 0 : gv._volume, ev.ctx.currentTime) : gv._node && (gv._node.muted = !!ev._muted || vv), Pv._emit("mute", gv._id))
          }
          return Pv
        },
        volume: function() {
          var vv, zv, Pv, hv = this,
            Sv = arguments;
          if (0 === Sv.length) return hv._volume;
          if (1 === Sv.length || 2 === Sv.length && "undefined" === typeof Sv[1] ? hv._getSoundIds().indexOf(Sv[0]) >= 0 ? zv = parseInt(Sv[0], 10) : vv = parseFloat(Sv[0]) : Sv.length >= 2 && (vv = parseFloat(Sv[0]), zv = parseInt(Sv[1], 10)), !("undefined" !== typeof vv && vv >= 0 && vv <= 1)) return (Pv = zv ? hv._soundById(zv) : hv._sounds[0]) ? Pv._volume : 0;
          if ("loaded" !== hv._state || hv._playLock) return hv._queue.push({
            event: "volume",
            action: function() {
              hv.volume.apply(hv, Sv)
            }
          }), hv;
          "undefined" === typeof zv && (hv._volume = vv), zv = hv._getSoundIds(zv);
          for (var gv = 0; gv < zv.length; gv++)(Pv = hv._soundById(zv[gv])) && (Pv._volume = vv, Sv[2] || hv._stopFade(zv[gv]), hv._webAudio && Pv._node && !Pv._muted ? Pv._node.gain.setValueAtTime(vv, ev.ctx.currentTime) : Pv._node && !Pv._muted && (Pv._node.volume = vv * ev.volume()), hv._emit("volume", Pv._id));
          return hv
        },
        fade: function(vv, zv, Pv, hv) {
          var Sv = this;
          if ("loaded" !== Sv._state || Sv._playLock) return Sv._queue.push({
            event: "fade",
            action: function() {
              Sv.fade(vv, zv, Pv, hv)
            }
          }), Sv;
          vv = Math.min(Math.max(0, parseFloat(vv)), 1), zv = Math.min(Math.max(0, parseFloat(zv)), 1), Pv = parseFloat(Pv), Sv.volume(vv, hv);
          for (var gv = Sv._getSoundIds(hv), pv = 0; pv < gv.length; pv++) {
            var dv = Sv._soundById(gv[pv]);
            if (dv) {
              if (hv || Sv._stopFade(gv[pv]), Sv._webAudio && !dv._muted) {
                var Nv = ev.ctx.currentTime,
                  lv = Nv + Pv / 1e3;
                dv._volume = vv, dv._node.gain.setValueAtTime(vv, Nv), dv._node.gain.linearRampToValueAtTime(zv, lv)
              }
              Sv._startFadeInterval(dv, vv, zv, Pv, gv[pv], "undefined" === typeof hv)
            }
          }
          return Sv
        },
        _startFadeInterval: function(vv, zv, Pv, hv, Sv, ev) {
          var gv = this,
            pv = zv,
            dv = Pv - zv,
            Nv = Math.abs(dv / .01),
            lv = Math.max(4, Nv > 0 ? hv / Nv : hv),
            Tv = Date.now();
          vv._fadeTo = Pv, vv._interval = setInterval((function() {
            var Sv = (Date.now() - Tv) / hv;
            Tv = Date.now(), pv += dv * Sv, pv = Math.round(100 * pv) / 100, pv = dv < 0 ? Math.max(Pv, pv) : Math.min(Pv, pv), gv._webAudio ? vv._volume = pv : gv.volume(pv, vv._id, !0), ev && (gv._volume = pv), (Pv < zv && pv <= Pv || Pv > zv && pv >= Pv) && (clearInterval(vv._interval), vv._interval = null, vv._fadeTo = null, gv.volume(Pv, vv._id), gv._emit("fade", vv._id))
          }), lv)
        },
        _stopFade: function(vv) {
          var zv = this,
            Pv = zv._soundById(vv);
          return Pv && Pv._interval && (zv._webAudio && Pv._node.gain.cancelScheduledValues(ev.ctx.currentTime), clearInterval(Pv._interval), Pv._interval = null, zv.volume(Pv._fadeTo, vv), Pv._fadeTo = null, zv._emit("fade", vv)), zv
        },
        loop: function() {
          var vv, zv, Pv, hv = this,
            Sv = arguments;
          if (0 === Sv.length) return hv._loop;
          if (1 === Sv.length) {
            if ("boolean" !== typeof Sv[0]) return !!(Pv = hv._soundById(parseInt(Sv[0], 10))) && Pv._loop;
            vv = Sv[0], hv._loop = vv
          } else 2 === Sv.length && (vv = Sv[0], zv = parseInt(Sv[1], 10));
          for (var ev = hv._getSoundIds(zv), gv = 0; gv < ev.length; gv++)(Pv = hv._soundById(ev[gv])) && (Pv._loop = vv, hv._webAudio && Pv._node && Pv._node.bufferSource && (Pv._node.bufferSource.loop = vv, vv && (Pv._node.bufferSource.loopStart = Pv._start || 0, Pv._node.bufferSource.loopEnd = Pv._stop, hv.playing(ev[gv]) && (hv.pause(ev[gv], !0), hv.play(ev[gv], !0)))));
          return hv
        },
        rate: function() {
          var vv, zv, Pv, hv = this,
            Sv = arguments;
          if (0 === Sv.length) zv = hv._sounds[0]._id;
          else if (1 === Sv.length) {
            hv._getSoundIds().indexOf(Sv[0]) >= 0 ? zv = parseInt(Sv[0], 10) : vv = parseFloat(Sv[0])
          } else 2 === Sv.length && (vv = parseFloat(Sv[0]), zv = parseInt(Sv[1], 10));
          if ("number" !== typeof vv) return (Pv = hv._soundById(zv)) ? Pv._rate : hv._rate;
          if ("loaded" !== hv._state || hv._playLock) return hv._queue.push({
            event: "rate",
            action: function() {
              hv.rate.apply(hv, Sv)
            }
          }), hv;
          "undefined" === typeof zv && (hv._rate = vv), zv = hv._getSoundIds(zv);
          for (var gv = 0; gv < zv.length; gv++)
            if (Pv = hv._soundById(zv[gv])) {
              hv.playing(zv[gv]) && (Pv._rateSeek = hv.seek(zv[gv]), Pv._playStart = hv._webAudio ? ev.ctx.currentTime : Pv._playStart), Pv._rate = vv, hv._webAudio && Pv._node && Pv._node.bufferSource ? Pv._node.bufferSource.playbackRate.setValueAtTime(vv, ev.ctx.currentTime) : Pv._node && (Pv._node.playbackRate = vv);
              var pv = hv.seek(zv[gv]),
                dv = 1e3 * ((hv._sprite[Pv._sprite][0] + hv._sprite[Pv._sprite][1]) / 1e3 - pv) / Math.abs(Pv._rate);
              !hv._endTimers[zv[gv]] && Pv.Am || (hv._clearTimer(zv[gv]), hv._endTimers[zv[gv]] = setTimeout(hv._ended.bind(hv, Pv), dv)), hv._emit("rate", Pv._id)
            } return hv
        },
        seek: function() {
          var vv, zv, Pv = this,
            hv = arguments;
          if (0 === hv.length) Pv._sounds.length && (zv = Pv._sounds[0]._id);
          else if (1 === hv.length) {
            Pv._getSoundIds().indexOf(hv[0]) >= 0 ? zv = parseInt(hv[0], 10) : Pv._sounds.length && (zv = Pv._sounds[0]._id, vv = parseFloat(hv[0]))
          } else 2 === hv.length && (vv = parseFloat(hv[0]), zv = parseInt(hv[1], 10));
          if ("undefined" === typeof zv) return 0;
          if ("number" === typeof vv && ("loaded" !== Pv._state || Pv._playLock)) return Pv._queue.push({
            event: "seek",
            action: function() {
              Pv.seek.apply(Pv, hv)
            }
          }), Pv;
          var Sv = Pv._soundById(zv);
          if (Sv) {
            if (!("number" === typeof vv && vv >= 0)) {
              if (Pv._webAudio) {
                var gv = Pv.playing(zv) ? ev.ctx.currentTime - Sv._playStart : 0,
                  pv = Sv._rateSeek ? Sv._rateSeek - Sv._seek : 0;
                return Sv._seek + (pv + gv * Math.abs(Sv._rate))
              }
              return Sv._node.currentTime
            }
            var dv = Pv.playing(zv);
            dv && Pv.pause(zv, !0), Sv._seek = vv, Sv._ended = !1, Pv._clearTimer(zv), Pv._webAudio || !Sv._node || isNaN(Sv._node.duration) || (Sv._node.currentTime = vv);
            var Nv = function() {
              dv && Pv.play(zv, !0), Pv._emit("seek", zv)
            };
            if (dv && !Pv._webAudio) {
              var lv = function() {
                Pv._playLock ? setTimeout(lv, 0) : Nv()
              };
              setTimeout(lv, 0)
            } else Nv()
          }
          return Pv
        },
        playing: function(vv) {
          var zv = this;
          if ("number" === typeof vv) {
            var Pv = zv._soundById(vv);
            return !!Pv && !Pv.Am
          }
          for (var hv = 0; hv < zv._sounds.length; hv++)
            if (!zv._sounds[hv].Am) return !0;
          return !1
        },
        duration: function(vv) {
          var zv = this,
            Pv = zv._duration,
            hv = zv._soundById(vv);
          return hv && (Pv = zv._sprite[hv._sprite][1] / 1e3), Pv
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var vv = this, zv = vv._sounds, Pv = 0; Pv < zv.length; Pv++) zv[Pv].Am || vv.stop(zv[Pv]._id), vv._webAudio || (vv._clearSound(zv[Pv]._node), zv[Pv]._node.removeEventListener("error", zv[Pv]._errorFn, !1), zv[Pv]._node.removeEventListener(ev._canPlayEvent, zv[Pv]._loadFn, !1), zv[Pv]._node.removeEventListener("ended", zv[Pv]._endFn, !1), ev._releaseHtml5Audio(zv[Pv]._node)), delete zv[Pv]._node, vv._clearTimer(zv[Pv]._id);
          var hv = ev._howls.indexOf(vv);
          hv >= 0 && ev._howls.splice(hv, 1);
          var Sv = !0;
          for (Pv = 0; Pv < ev._howls.length; Pv++)
            if (ev._howls[Pv]._src === vv._src || vv._src.indexOf(ev._howls[Pv]._src) >= 0) {
              Sv = !1;
              break
            } return dv && Sv && delete dv[vv._src], ev.noAudio = !1, vv._state = "unloaded", vv._sounds = [], vv = null, null
        },
        on: function(vv, zv, Pv, hv) {
          var Sv = this["_on" + vv];
          return "function" === typeof zv && Sv.push(hv ? {
            id: Pv,
            Ew: zv,
            once: hv
          } : {
            id: Pv,
            Ew: zv
          }), this
        },
        off: function(vv, zv, Pv) {
          var hv = this,
            Sv = hv["_on" + vv],
            ev = 0;
          if ("number" === typeof zv && (Pv = zv, zv = null), zv || Pv)
            for (ev = 0; ev < Sv.length; ev++) {
              var gv = Pv === Sv[ev].id;
              if (zv === Sv[ev].Ew && gv || !zv && gv) {
                Sv.splice(ev, 1);
                break
              }
            } else if (vv) hv["_on" + vv] = [];
            else {
              var pv = Object.keys(hv);
              for (ev = 0; ev < pv.length; ev++) 0 === pv[ev].indexOf("_on") && Array.isArray(hv[pv[ev]]) && (hv[pv[ev]] = [])
            } return hv
        },
        once: function(vv, zv, Pv) {
          return this.on(vv, zv, Pv, 1), this
        },
        _emit: function(vv, zv, Pv) {
          for (var hv = this, Sv = hv["_on" + vv], ev = Sv.length - 1; ev >= 0; ev--) Sv[ev].id && Sv[ev].id !== zv && "load" !== vv || (setTimeout(function(vv) {
            vv.call(this, zv, Pv)
          }.bind(hv, Sv[ev].Ew), 0), Sv[ev].once && hv.off(vv, Sv[ev].Ew, Sv[ev].id));
          return hv._loadQueue(vv), hv
        },
        _loadQueue: function(vv) {
          var zv = this;
          if (zv._queue.length > 0) {
            var Pv = zv._queue[0];
            Pv.event === vv && (zv._queue.shift(), zv._loadQueue()), vv || Pv.action()
          }
          return zv
        },
        _ended: function(vv) {
          var zv = this,
            Pv = vv._sprite;
          if (!zv._webAudio && vv._node && !vv._node.paused && !vv._node.ended && vv._node.currentTime < vv._stop) return setTimeout(zv._ended.bind(zv, vv), 100), zv;
          var hv = !(!vv._loop && !zv._sprite[Pv][2]);
          if (zv._emit("end", vv._id), !zv._webAudio && hv && zv.stop(vv._id, !0).play(vv._id), zv._webAudio && hv) {
            zv._emit("play", vv._id), vv._seek = vv._start || 0, vv._rateSeek = 0, vv._playStart = ev.ctx.currentTime;
            var Sv = 1e3 * (vv._stop - vv._start) / Math.abs(vv._rate);
            zv._endTimers[vv._id] = setTimeout(zv._ended.bind(zv, vv), Sv)
          }
          return zv._webAudio && !hv && (vv.Am = !0, vv._ended = !0, vv._seek = vv._start || 0, vv._rateSeek = 0, zv._clearTimer(vv._id), zv._cleanBuffer(vv._node), ev._autoSuspend()), zv._webAudio || hv || zv.stop(vv._id, !0), zv
        },
        _clearTimer: function(vv) {
          var zv = this;
          if (zv._endTimers[vv]) {
            if ("function" !== typeof zv._endTimers[vv]) clearTimeout(zv._endTimers[vv]);
            else {
              var Pv = zv._soundById(vv);
              Pv && Pv._node && Pv._node.removeEventListener("ended", zv._endTimers[vv], !1)
            }
            delete zv._endTimers[vv]
          }
          return zv
        },
        _soundById: function(vv) {
          for (var zv = this, Pv = 0; Pv < zv._sounds.length; Pv++)
            if (vv === zv._sounds[Pv]._id) return zv._sounds[Pv];
          return null
        },
        _inactiveSound: function() {
          var vv = this;
          vv._drain();
          for (var zv = 0; zv < vv._sounds.length; zv++)
            if (vv._sounds[zv]._ended) return vv._sounds[zv].reset();
          return new pv(vv)
        },
        _drain: function() {
          var vv = this,
            zv = vv._pool,
            Pv = 0,
            hv = 0;
          if (!(vv._sounds.length < zv)) {
            for (hv = 0; hv < vv._sounds.length; hv++) vv._sounds[hv]._ended && Pv++;
            for (hv = vv._sounds.length - 1; hv >= 0; hv--) {
              if (Pv <= zv) return;
              vv._sounds[hv]._ended && (vv._webAudio && vv._sounds[hv]._node && vv._sounds[hv]._node.disconnect(0), vv._sounds.splice(hv, 1), Pv--)
            }
          }
        },
        _getSoundIds: function(vv) {
          if ("undefined" === typeof vv) {
            for (var zv = [], Pv = 0; Pv < this._sounds.length; Pv++) zv.push(this._sounds[Pv]._id);
            return zv
          }
          return [vv]
        },
        _refreshBuffer: function(vv) {
          return vv._node.bufferSource = ev.ctx.createBufferSource(), vv._node.bufferSource.buffer = dv[this._src], vv._panner ? vv._node.bufferSource.connect(vv._panner) : vv._node.bufferSource.connect(vv._node), vv._node.bufferSource.loop = vv._loop, vv._loop && (vv._node.bufferSource.loopStart = vv._start || 0, vv._node.bufferSource.loopEnd = vv._stop || 0), vv._node.bufferSource.playbackRate.setValueAtTime(vv._rate, ev.ctx.currentTime), this
        },
        _cleanBuffer: function(vv) {
          var zv = ev._navigator && ev._navigator.vendor.indexOf("Apple") >= 0;
          if (ev._scratchBuffer && vv.bufferSource && (vv.bufferSource.onended = null, vv.bufferSource.disconnect(0), zv)) try {
            vv.bufferSource.buffer = ev._scratchBuffer
          } catch (Pv) {}
          return vv.bufferSource = null, this
        },
        _clearSound: function(vv) {
          /MSIE |Trident\//.test(ev._navigator && ev._navigator.userAgent) || (vv.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var pv = function(vv) {
        this._parent = vv, this.init()
      };
      pv.prototype = {
        init: function() {
          var vv = this,
            zv = vv._parent;
          return vv._muted = zv._muted, vv._loop = zv._loop, vv._volume = zv._volume, vv._rate = zv._rate, vv._seek = 0, vv.Am = !0, vv._ended = !0, vv._sprite = "__default", vv._id = ++ev._counter, zv._sounds.push(vv), vv.create(), vv
        },
        create: function() {
          var vv = this,
            zv = vv._parent,
            Pv = ev._muted || vv._muted || vv._parent._muted ? 0 : vv._volume;
          return zv._webAudio ? (vv._node = "undefined" === typeof ev.ctx.createGain ? ev.ctx.createGainNode() : ev.ctx.createGain(), vv._node.gain.setValueAtTime(Pv, ev.ctx.currentTime), vv._node.paused = !0, vv._node.connect(ev.masterGain)) : ev.noAudio || (vv._node = ev._obtainHtml5Audio(), vv._errorFn = vv._errorListener.bind(vv), vv._node.addEventListener("error", vv._errorFn, !1), vv._loadFn = vv._loadListener.bind(vv), vv._node.addEventListener(ev._canPlayEvent, vv._loadFn, !1), vv._endFn = vv._endListener.bind(vv), vv._node.addEventListener("ended", vv._endFn, !1), vv._node.src = zv._src, vv._node.preload = !0 === zv._preload ? "auto" : zv._preload, vv._node.volume = Pv * ev.volume(), vv._node.load()), vv
        },
        reset: function() {
          var vv = this,
            zv = vv._parent;
          return vv._muted = zv._muted, vv._loop = zv._loop, vv._volume = zv._volume, vv._rate = zv._rate, vv._seek = 0, vv._rateSeek = 0, vv.Am = !0, vv._ended = !0, vv._sprite = "__default", vv._id = ++ev._counter, vv
        },
        _errorListener: function() {
          var vv = this;
          vv._parent._emit("loaderror", vv._id, vv._node.error ? vv._node.error.code : 0), vv._node.removeEventListener("error", vv._errorFn, !1)
        },
        _loadListener: function() {
          var vv = this,
            zv = vv._parent;
          zv._duration = Math.ceil(10 * vv._node.duration) / 10, 0 === Object.keys(zv._sprite).length && (zv._sprite = {
            __default: [0, 1e3 * zv._duration]
          }), "loaded" !== zv._state && (zv._state = "loaded", zv._emit("load"), zv._loadQueue()), vv._node.removeEventListener(ev._canPlayEvent, vv._loadFn, !1)
        },
        _endListener: function() {
          var vv = this,
            zv = vv._parent;
          zv._duration === 1 / 0 && (zv._duration = Math.ceil(10 * vv._node.duration) / 10, zv._sprite.__default[1] === 1 / 0 && (zv._sprite.__default[1] = 1e3 * zv._duration), zv._ended(vv)), vv._node.removeEventListener("ended", vv._endFn, !1)
        }
      };
      var dv = {},
        Nv = function(vv) {
          var zv = vv._src;
          if (dv[zv]) return vv._duration = dv[zv].duration, void Wv(vv);
          if (/^data:[^;]+;base64,/.test(zv)) {
            for (var Pv = atob(zv.split(",")[1]), hv = new Uint8Array(Pv.length), Sv = 0; Sv < Pv.length; ++Sv) hv[Sv] = Pv.charCodeAt(Sv);
            Tv(hv.buffer, vv)
          } else {
            var ev = new XMLHttpRequest;
            ev.open(vv._xhr.method, zv, !0), ev.withCredentials = vv._xhr.withCredentials, ev.responseType = "arraybuffer", vv._xhr.headers && Object.keys(vv._xhr.headers).forEach((function(zv) {
              ev.setRequestHeader(zv, vv._xhr.headers[zv])
            })), ev.onload = function() {
              var zv = (ev.status + "")[0];
              "0" === zv || "2" === zv || "3" === zv ? Tv(ev.response, vv) : vv._emit("loaderror", null, "Failed loading audio file with status: " + ev.status + ".")
            }, ev.onerror = function() {
              vv._webAudio && (vv._html5 = !0, vv._webAudio = !1, vv._sounds = [], delete dv[zv], vv.load())
            }, lv(ev)
          }
        },
        lv = function(vv) {
          try {
            vv.send()
          } catch (zv) {
            vv.onerror()
          }
        },
        Tv = function(vv, zv) {
          var Pv = function() {
              zv._emit("loaderror", null, "Decoding audio data failed.")
            },
            hv = function(vv) {
              vv && zv._sounds.length > 0 ? (dv[zv._src] = vv, Wv(zv, vv)) : Pv()
            };
          "undefined" !== typeof Promise && 1 === ev.ctx.decodeAudioData.length ? ev.ctx.decodeAudioData(vv).then(hv).catch(Pv) : ev.ctx.decodeAudioData(vv, hv, Pv)
        },
        Wv = function(vv, zv) {
          zv && !vv._duration && (vv._duration = zv.duration), 0 === Object.keys(vv._sprite).length && (vv._sprite = {
            __default: [0, 1e3 * vv._duration]
          }), "loaded" !== vv._state && (vv._state = "loaded", vv._emit("load"), vv._loadQueue())
        },
        wv = function() {
          if (ev.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? ev.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? ev.ctx = new webkitAudioContext : ev.usingWebAudio = !1
            } catch (Sv) {
              ev.usingWebAudio = !1
            }
            ev.ctx || (ev.usingWebAudio = !1);
            var vv = /iP(hone|od|ad)/.test(ev._navigator && ev._navigator.platform),
              zv = ev._navigator && ev._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              Pv = zv ? parseInt(zv[1], 10) : null;
            if (vv && Pv && Pv < 9) {
              var hv = /safari/.test(ev._navigator && ev._navigator.userAgent.toLowerCase());
              ev._navigator && !hv && (ev.usingWebAudio = !1)
            }
            ev.usingWebAudio && (ev.masterGain = "undefined" === typeof ev.ctx.createGain ? ev.ctx.createGainNode() : ev.ctx.createGain(), ev.masterGain.gain.setValueAtTime(ev._muted ? 0 : ev._volume, ev.ctx.currentTime), ev.masterGain.connect(ev.ctx.destination)), ev._setup()
          }
        };
      void 0 === (hv = function() {
        return {
          Howler: ev,
          Howl: gv
        }
      }.apply(zv, [])) || (vv.exports = hv), zv.Howler = ev, zv.Howl = gv, "undefined" !== typeof Pv.g ? (Pv.g.HowlerGlobal = Sv, Pv.g.Howler = ev, Pv.g.Howl = gv, Pv.g.Sound = pv) : "undefined" !== typeof window && (window.HowlerGlobal = Sv, window.Howler = ev, window.Howl = gv, window.Sound = pv)
    }(),
    function() {
      var vv;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(vv) {
        var zv = this;
        if (!zv.ctx || !zv.ctx.listener) return zv;
        for (var Pv = zv._howls.length - 1; Pv >= 0; Pv--) zv._howls[Pv].stereo(vv);
        return zv
      }, HowlerGlobal.prototype.pos = function(vv, zv, Pv) {
        var hv = this;
        return hv.ctx && hv.ctx.listener ? (zv = "number" !== typeof zv ? hv._pos[1] : zv, Pv = "number" !== typeof Pv ? hv._pos[2] : Pv, "number" !== typeof vv ? hv._pos : (hv._pos = [vv, zv, Pv], "undefined" !== typeof hv.ctx.listener.positionX ? (hv.ctx.listener.positionX.setTargetAtTime(hv._pos[0], Howler.ctx.currentTime, .1), hv.ctx.listener.positionY.setTargetAtTime(hv._pos[1], Howler.ctx.currentTime, .1), hv.ctx.listener.positionZ.setTargetAtTime(hv._pos[2], Howler.ctx.currentTime, .1)) : hv.ctx.listener.setPosition(hv._pos[0], hv._pos[1], hv._pos[2]), hv)) : hv
      }, HowlerGlobal.prototype.orientation = function(vv, zv, Pv, hv, Sv, ev) {
        var gv = this;
        if (!gv.ctx || !gv.ctx.listener) return gv;
        var pv = gv._orientation;
        return zv = "number" !== typeof zv ? pv[1] : zv, Pv = "number" !== typeof Pv ? pv[2] : Pv, hv = "number" !== typeof hv ? pv[3] : hv, Sv = "number" !== typeof Sv ? pv[4] : Sv, ev = "number" !== typeof ev ? pv[5] : ev, "number" !== typeof vv ? pv : (gv._orientation = [vv, zv, Pv, hv, Sv, ev], "undefined" !== typeof gv.ctx.listener.forwardX ? (gv.ctx.listener.forwardX.setTargetAtTime(vv, Howler.ctx.currentTime, .1), gv.ctx.listener.forwardY.setTargetAtTime(zv, Howler.ctx.currentTime, .1), gv.ctx.listener.forwardZ.setTargetAtTime(Pv, Howler.ctx.currentTime, .1), gv.ctx.listener.upX.setTargetAtTime(hv, Howler.ctx.currentTime, .1), gv.ctx.listener.upY.setTargetAtTime(Sv, Howler.ctx.currentTime, .1), gv.ctx.listener.upZ.setTargetAtTime(ev, Howler.ctx.currentTime, .1)) : gv.ctx.listener.setOrientation(vv, zv, Pv, hv, Sv, ev), gv)
      }, Howl.prototype.init = (vv = Howl.prototype.init, function(zv) {
        var Pv = this;
        return Pv._orientation = zv.orientation || [1, 0, 0], Pv._stereo = zv.stereo || null, Pv._pos = zv.pos || null, Pv._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof zv.coneInnerAngle ? zv.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof zv.coneOuterAngle ? zv.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof zv.coneOuterGain ? zv.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof zv.distanceModel ? zv.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof zv.maxDistance ? zv.maxDistance : 1e4,
          panningModel: "undefined" !== typeof zv.panningModel ? zv.panningModel : "HRTF",
          refDistance: "undefined" !== typeof zv.refDistance ? zv.refDistance : 1,
          rolloffFactor: "undefined" !== typeof zv.rolloffFactor ? zv.rolloffFactor : 1
        }, Pv._onstereo = zv.onstereo ? [{
          Ew: zv.onstereo
        }] : [], Pv._onpos = zv.onpos ? [{
          Ew: zv.onpos
        }] : [], Pv._onorientation = zv.onorientation ? [{
          Ew: zv.onorientation
        }] : [], vv.call(this, zv)
      }), Howl.prototype.stereo = function(vv, Pv) {
        var hv = this;
        if (!hv._webAudio) return hv;
        if ("loaded" !== hv._state) return hv._queue.push({
          event: "stereo",
          action: function() {
            hv.stereo(vv, Pv)
          }
        }), hv;
        var Sv = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof Pv) {
          if ("number" !== typeof vv) return hv._stereo;
          hv._stereo = vv, hv._pos = [vv, 0, 0]
        }
        for (var ev = hv._getSoundIds(Pv), gv = 0; gv < ev.length; gv++) {
          var pv = hv._soundById(ev[gv]);
          if (pv) {
            if ("number" !== typeof vv) return pv._stereo;
            pv._stereo = vv, pv._pos = [vv, 0, 0], pv._node && (pv._pannerAttr.panningModel = "equalpower", pv._panner && pv._panner.pan || zv(pv, Sv), "spatial" === Sv ? "undefined" !== typeof pv._panner.positionX ? (pv._panner.positionX.setValueAtTime(vv, Howler.ctx.currentTime), pv._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), pv._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : pv._panner.setPosition(vv, 0, 0) : pv._panner.pan.setValueAtTime(vv, Howler.ctx.currentTime)), hv._emit("stereo", pv._id)
          }
        }
        return hv
      }, Howl.prototype.pos = function(vv, Pv, hv, Sv) {
        var ev = this;
        if (!ev._webAudio) return ev;
        if ("loaded" !== ev._state) return ev._queue.push({
          event: "pos",
          action: function() {
            ev.pos(vv, Pv, hv, Sv)
          }
        }), ev;
        if (Pv = "number" !== typeof Pv ? 0 : Pv, hv = "number" !== typeof hv ? -.5 : hv, "undefined" === typeof Sv) {
          if ("number" !== typeof vv) return ev._pos;
          ev._pos = [vv, Pv, hv]
        }
        for (var gv = ev._getSoundIds(Sv), pv = 0; pv < gv.length; pv++) {
          var dv = ev._soundById(gv[pv]);
          if (dv) {
            if ("number" !== typeof vv) return dv._pos;
            dv._pos = [vv, Pv, hv], dv._node && (dv._panner && !dv._panner.pan || zv(dv, "spatial"), "undefined" !== typeof dv._panner.positionX ? (dv._panner.positionX.setValueAtTime(vv, Howler.ctx.currentTime), dv._panner.positionY.setValueAtTime(Pv, Howler.ctx.currentTime), dv._panner.positionZ.setValueAtTime(hv, Howler.ctx.currentTime)) : dv._panner.setPosition(vv, Pv, hv)), ev._emit("pos", dv._id)
          }
        }
        return ev
      }, Howl.prototype.orientation = function(vv, Pv, hv, Sv) {
        var ev = this;
        if (!ev._webAudio) return ev;
        if ("loaded" !== ev._state) return ev._queue.push({
          event: "orientation",
          action: function() {
            ev.orientation(vv, Pv, hv, Sv)
          }
        }), ev;
        if (Pv = "number" !== typeof Pv ? ev._orientation[1] : Pv, hv = "number" !== typeof hv ? ev._orientation[2] : hv, "undefined" === typeof Sv) {
          if ("number" !== typeof vv) return ev._orientation;
          ev._orientation = [vv, Pv, hv]
        }
        for (var gv = ev._getSoundIds(Sv), pv = 0; pv < gv.length; pv++) {
          var dv = ev._soundById(gv[pv]);
          if (dv) {
            if ("number" !== typeof vv) return dv._orientation;
            dv._orientation = [vv, Pv, hv], dv._node && (dv._panner || (dv._pos || (dv._pos = ev._pos || [0, 0, -.5]), zv(dv, "spatial")), "undefined" !== typeof dv._panner.orientationX ? (dv._panner.orientationX.setValueAtTime(vv, Howler.ctx.currentTime), dv._panner.orientationY.setValueAtTime(Pv, Howler.ctx.currentTime), dv._panner.orientationZ.setValueAtTime(hv, Howler.ctx.currentTime)) : dv._panner.setOrientation(vv, Pv, hv)), ev._emit("orientation", dv._id)
          }
        }
        return ev
      }, Howl.prototype.pannerAttr = function() {
        var vv, Pv, hv, Sv = this,
          ev = arguments;
        if (!Sv._webAudio) return Sv;
        if (0 === ev.length) return Sv._pannerAttr;
        if (1 === ev.length) {
          if ("object" !== typeof ev[0]) return (hv = Sv._soundById(parseInt(ev[0], 10))) ? hv._pannerAttr : Sv._pannerAttr;
          vv = ev[0], "undefined" === typeof Pv && (vv.pannerAttr || (vv.pannerAttr = {
            coneInnerAngle: vv.coneInnerAngle,
            coneOuterAngle: vv.coneOuterAngle,
            coneOuterGain: vv.coneOuterGain,
            distanceModel: vv.distanceModel,
            maxDistance: vv.maxDistance,
            refDistance: vv.refDistance,
            rolloffFactor: vv.rolloffFactor,
            panningModel: vv.panningModel
          }), Sv._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof vv.pannerAttr.coneInnerAngle ? vv.pannerAttr.coneInnerAngle : Sv._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof vv.pannerAttr.coneOuterAngle ? vv.pannerAttr.coneOuterAngle : Sv._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof vv.pannerAttr.coneOuterGain ? vv.pannerAttr.coneOuterGain : Sv._coneOuterGain,
            distanceModel: "undefined" !== typeof vv.pannerAttr.distanceModel ? vv.pannerAttr.distanceModel : Sv._distanceModel,
            maxDistance: "undefined" !== typeof vv.pannerAttr.maxDistance ? vv.pannerAttr.maxDistance : Sv._maxDistance,
            refDistance: "undefined" !== typeof vv.pannerAttr.refDistance ? vv.pannerAttr.refDistance : Sv._refDistance,
            rolloffFactor: "undefined" !== typeof vv.pannerAttr.rolloffFactor ? vv.pannerAttr.rolloffFactor : Sv._rolloffFactor,
            panningModel: "undefined" !== typeof vv.pannerAttr.panningModel ? vv.pannerAttr.panningModel : Sv._panningModel
          })
        } else 2 === ev.length && (vv = ev[0], Pv = parseInt(ev[1], 10));
        for (var gv = Sv._getSoundIds(Pv), pv = 0; pv < gv.length; pv++)
          if (hv = Sv._soundById(gv[pv])) {
            var dv = hv._pannerAttr;
            dv = {
              coneInnerAngle: "undefined" !== typeof vv.coneInnerAngle ? vv.coneInnerAngle : dv.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof vv.coneOuterAngle ? vv.coneOuterAngle : dv.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof vv.coneOuterGain ? vv.coneOuterGain : dv.coneOuterGain,
              distanceModel: "undefined" !== typeof vv.distanceModel ? vv.distanceModel : dv.distanceModel,
              maxDistance: "undefined" !== typeof vv.maxDistance ? vv.maxDistance : dv.maxDistance,
              refDistance: "undefined" !== typeof vv.refDistance ? vv.refDistance : dv.refDistance,
              rolloffFactor: "undefined" !== typeof vv.rolloffFactor ? vv.rolloffFactor : dv.rolloffFactor,
              panningModel: "undefined" !== typeof vv.panningModel ? vv.panningModel : dv.panningModel
            };
            var Nv = hv._panner;
            Nv ? (Nv.coneInnerAngle = dv.coneInnerAngle, Nv.coneOuterAngle = dv.coneOuterAngle, Nv.coneOuterGain = dv.coneOuterGain, Nv.distanceModel = dv.distanceModel, Nv.maxDistance = dv.maxDistance, Nv.refDistance = dv.refDistance, Nv.rolloffFactor = dv.rolloffFactor, Nv.panningModel = dv.panningModel) : (hv._pos || (hv._pos = Sv._pos || [0, 0, -.5]), zv(hv, "spatial"))
          } return Sv
      }, Sound.prototype.init = function(vv) {
        return function() {
          var zv = this,
            Pv = zv._parent;
          zv._orientation = Pv._orientation, zv._stereo = Pv._stereo, zv._pos = Pv._pos, zv._pannerAttr = Pv._pannerAttr, vv.call(this), zv._stereo ? Pv.stereo(zv._stereo) : zv._pos && Pv.pos(zv._pos[0], zv._pos[1], zv._pos[2], zv._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(vv) {
        return function() {
          var zv = this,
            Pv = zv._parent;
          return zv._orientation = Pv._orientation, zv._stereo = Pv._stereo, zv._pos = Pv._pos, zv._pannerAttr = Pv._pannerAttr, zv._stereo ? Pv.stereo(zv._stereo) : zv._pos ? Pv.pos(zv._pos[0], zv._pos[1], zv._pos[2], zv._id) : zv._panner && (zv._panner.disconnect(0), zv._panner = void 0, Pv._refreshBuffer(zv)), vv.call(this)
        }
      }(Sound.prototype.reset);
      var zv = function(vv, zv) {
        "spatial" === (zv = zv || "spatial") ? (vv._panner = Howler.ctx.createPanner(), vv._panner.coneInnerAngle = vv._pannerAttr.coneInnerAngle, vv._panner.coneOuterAngle = vv._pannerAttr.coneOuterAngle, vv._panner.coneOuterGain = vv._pannerAttr.coneOuterGain, vv._panner.distanceModel = vv._pannerAttr.distanceModel, vv._panner.maxDistance = vv._pannerAttr.maxDistance, vv._panner.refDistance = vv._pannerAttr.refDistance, vv._panner.rolloffFactor = vv._pannerAttr.rolloffFactor, vv._panner.panningModel = vv._pannerAttr.panningModel, "undefined" !== typeof vv._panner.positionX ? (vv._panner.positionX.setValueAtTime(vv._pos[0], Howler.ctx.currentTime), vv._panner.positionY.setValueAtTime(vv._pos[1], Howler.ctx.currentTime), vv._panner.positionZ.setValueAtTime(vv._pos[2], Howler.ctx.currentTime)) : vv._panner.setPosition(vv._pos[0], vv._pos[1], vv._pos[2]), "undefined" !== typeof vv._panner.orientationX ? (vv._panner.orientationX.setValueAtTime(vv._orientation[0], Howler.ctx.currentTime), vv._panner.orientationY.setValueAtTime(vv._orientation[1], Howler.ctx.currentTime), vv._panner.orientationZ.setValueAtTime(vv._orientation[2], Howler.ctx.currentTime)) : vv._panner.setOrientation(vv._orientation[0], vv._orientation[1], vv._orientation[2])) : (vv._panner = Howler.ctx.createStereoPanner(), vv._panner.pan.setValueAtTime(vv._stereo, Howler.ctx.currentTime)), vv._panner.connect(vv._node), vv.Am || vv._parent.pause(vv._id, !0).play(vv._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);