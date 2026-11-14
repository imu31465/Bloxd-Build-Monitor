/*! For license information please see 8f728.81.7acd983e.chunk.js.LICENSE.txt */
export const id = 81;
export const ids = [81];
export const modules = {
  3909: (cB, Bc, nc) => {
    var Vc;
    ! function() {
      var Ic = function() {
        this.init()
      };
      Ic.prototype = {
        init: function() {
          var cB = this || rB;
          return cB._counter = 1e3, cB._html5AudioPool = [], cB.html5PoolSize = 10, cB._codecs = {}, cB._howls = [], cB._muted = !1, cB._volume = 1, cB._canPlayEvent = "canplaythrough", cB._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, cB.masterGain = null, cB.noAudio = !1, cB.usingWebAudio = !0, cB.autoSuspend = !0, cB.ctx = null, cB.autoUnlock = !0, cB._setup(), cB
        },
        volume: function(cB) {
          var Bc = this || rB;
          if (cB = parseFloat(cB), Bc.ctx || fc(), "undefined" !== typeof cB && cB >= 0 && cB <= 1) {
            if (Bc._volume = cB, Bc._muted) return Bc;
            Bc.usingWebAudio && Bc.masterGain.gain.setValueAtTime(cB, rB.ctx.currentTime);
            for (var nc = 0; nc < Bc._howls.length; nc++)
              if (!Bc._howls[nc]._webAudio)
                for (var Vc = Bc._howls[nc]._getSoundIds(), Ic = 0; Ic < Vc.length; Ic++) {
                  var uc = Bc._howls[nc]._soundById(Vc[Ic]);
                  uc && uc._node && (uc._node.volume = uc._volume * cB)
                }
            return Bc
          }
          return Bc._volume
        },
        mute: function(cB) {
          var Bc = this || rB;
          Bc.ctx || fc(), Bc._muted = cB, Bc.usingWebAudio && Bc.masterGain.gain.setValueAtTime(cB ? 0 : Bc._volume, rB.ctx.currentTime);
          for (var nc = 0; nc < Bc._howls.length; nc++)
            if (!Bc._howls[nc]._webAudio)
              for (var Vc = Bc._howls[nc]._getSoundIds(), Ic = 0; Ic < Vc.length; Ic++) {
                var uc = Bc._howls[nc]._soundById(Vc[Ic]);
                uc && uc._node && (uc._node.muted = !!cB || uc._muted)
              }
          return Bc
        },
        stop: function() {
          for (var cB = this || rB, Bc = 0; Bc < cB._howls.length; Bc++) cB._howls[Bc].stop();
          return cB
        },
        unload: function() {
          for (var cB = this || rB, Bc = cB._howls.length - 1; Bc >= 0; Bc--) cB._howls[Bc].unload();
          return cB.usingWebAudio && cB.ctx && "undefined" !== typeof cB.ctx.close && (cB.ctx.close(), cB.ctx = null, fc()), cB
        },
        codecs: function(cB) {
          return (this || rB)._codecs[cB.replace(/^x-/, "")]
        },
        _setup: function() {
          var cB = this || rB;
          if (cB.state = cB.ctx && cB.ctx.state || "suspended", cB._autoSuspend(), !cB.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (cB._canPlayEvent = "canplay")
            } catch (Bc) {
              cB.noAudio = !0
            } else cB.noAudio = !0;
          try {
            (new Audio).muted && (cB.noAudio = !0)
          } catch (Bc) {}
          return cB.noAudio || cB._setupCodecs(), cB
        },
        _setupCodecs: function() {
          var cB = this || rB,
            Bc = null;
          try {
            Bc = "undefined" !== typeof Audio ? new Audio : null
          } catch (qB) {
            return cB
          }
          if (!Bc || "function" !== typeof Bc.canPlayType) return cB;
          var nc = Bc.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Vc = cB._navigator ? cB._navigator.userAgent : "",
            Ic = Vc.match(/OPR\/([0-6].)/g),
            uc = Ic && parseInt(Ic[0].split("/")[1], 10) < 33,
            sc = -1 !== Vc.indexOf("Safari") && -1 === Vc.indexOf("Chrome"),
            Mc = Vc.match(/Version\/(.*?) /),
            Pc = sc && Mc && parseInt(Mc[1], 10) < 15;
          return cB._codecs = {
            mp3: !(uc || !nc && !Bc.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!nc,
            opus: !!Bc.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Bc.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Bc.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Bc.canPlayType('audio/wav; codecs="1"') || Bc.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Bc.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Bc.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Bc.canPlayType("audio/x-m4a;") || Bc.canPlayType("audio/m4a;") || Bc.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Bc.canPlayType("audio/x-m4b;") || Bc.canPlayType("audio/m4b;") || Bc.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Bc.canPlayType("audio/x-mp4;") || Bc.canPlayType("audio/mp4;") || Bc.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Pc || !Bc.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Pc || !Bc.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Bc.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Bc.canPlayType("audio/x-flac;") || Bc.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, cB
        },
        _unlockAudio: function() {
          var cB = this || rB;
          if (!cB._audioUnlocked && cB.ctx) {
            cB._audioUnlocked = !1, cB.autoUnlock = !1, cB._mobileUnloaded || 44100 === cB.ctx.sampleRate || (cB._mobileUnloaded = !0, cB.unload()), cB._scratchBuffer = cB.ctx.createBuffer(1, 1, 22050);
            var Bc = function(nc) {
              for (; cB._html5AudioPool.length < cB.html5PoolSize;) try {
                var Vc = new Audio;
                Vc._unlocked = !0, cB._releaseHtml5Audio(Vc)
              } catch (nc) {
                cB.noAudio = !0;
                break
              }
              for (var Ic = 0; Ic < cB._howls.length; Ic++)
                if (!cB._howls[Ic]._webAudio)
                  for (var rB = cB._howls[Ic]._getSoundIds(), uc = 0; uc < rB.length; uc++) {
                    var sc = cB._howls[Ic]._soundById(rB[uc]);
                    sc && sc._node && !sc._node._unlocked && (sc._node._unlocked = !0, sc._node.load())
                  }
              cB._autoResume();
              var Mc = cB.ctx.createBufferSource();
              Mc.buffer = cB._scratchBuffer, Mc.connect(cB.ctx.destination), "undefined" === typeof Mc.start ? Mc.noteOn(0) : Mc.start(0), "function" === typeof cB.ctx.resume && cB.ctx.resume(), Mc.onended = function() {
                Mc.disconnect(0), cB._audioUnlocked = !0, document.removeEventListener("touchstart", Bc, !0), document.removeEventListener("touchend", Bc, !0), document.removeEventListener("click", Bc, !0), document.removeEventListener("keydown", Bc, !0);
                for (var nc = 0; nc < cB._howls.length; nc++) cB._howls[nc]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Bc, !0), document.addEventListener("touchend", Bc, !0), document.addEventListener("click", Bc, !0), document.addEventListener("keydown", Bc, !0), cB
          }
        },
        _obtainHtml5Audio: function() {
          var cB = this || rB;
          if (cB._html5AudioPool.length) return cB._html5AudioPool.pop();
          var Bc = (new Audio).play();
          return Bc && "undefined" !== typeof Promise && (Bc instanceof Promise || "function" === typeof Bc.then) && Bc.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(cB) {
          var Bc = this || rB;
          return cB._unlocked && Bc._html5AudioPool.push(cB), Bc
        },
        _autoSuspend: function() {
          var cB = this;
          if (cB.autoSuspend && cB.ctx && "undefined" !== typeof cB.ctx.suspend && rB.usingWebAudio) {
            for (var Bc = 0; Bc < cB._howls.length; Bc++)
              if (cB._howls[Bc]._webAudio)
                for (var nc = 0; nc < cB._howls[Bc]._sounds.length; nc++)
                  if (!cB._howls[Bc]._sounds[nc].eC) return cB;
            return cB._suspendTimer && clearTimeout(cB._suspendTimer), cB._suspendTimer = setTimeout((function() {
              if (cB.autoSuspend) {
                cB._suspendTimer = null, cB.state = "suspending";
                var Bc = function() {
                  cB.state = "suspended", cB._resumeAfterSuspend && (delete cB._resumeAfterSuspend, cB._autoResume())
                };
                cB.ctx.suspend().then(Bc, Bc)
              }
            }), 3e4), cB
          }
        },
        _autoResume: function() {
          var cB = this;
          if (cB.ctx && "undefined" !== typeof cB.ctx.resume && rB.usingWebAudio) return "running" === cB.state && "interrupted" !== cB.ctx.state && cB._suspendTimer ? (clearTimeout(cB._suspendTimer), cB._suspendTimer = null) : "suspended" === cB.state || "running" === cB.state && "interrupted" === cB.ctx.state ? (cB.ctx.resume().then((function() {
            cB.state = "running";
            for (var Bc = 0; Bc < cB._howls.length; Bc++) cB._howls[Bc]._emit("resume")
          })), cB._suspendTimer && (clearTimeout(cB._suspendTimer), cB._suspendTimer = null)) : "suspending" === cB.state && (cB._resumeAfterSuspend = !0), cB
        }
      };
      var rB = new Ic,
        uc = function(cB) {
          cB.src && 0 !== cB.src.length ? this.init(cB) : console.error("An array of source files must be passed with any new Howl.")
        };
      uc.prototype = {
        init: function(cB) {
          var Bc = this;
          return rB.ctx || fc(), Bc._autoplay = cB.autoplay || !1, Bc._format = "string" !== typeof cB.format ? cB.format : [cB.format], Bc._html5 = cB.html5 || !1, Bc._muted = cB.mute || !1, Bc._loop = cB.loop || !1, Bc._pool = cB.pool || 5, Bc._preload = "boolean" !== typeof cB.preload && "metadata" !== cB.preload || cB.preload, Bc._rate = cB.rate || 1, Bc._sprite = cB.sprite || {}, Bc._src = "string" !== typeof cB.src ? cB.src : [cB.src], Bc._volume = void 0 !== cB.volume ? cB.volume : 1, Bc._xhr = {
            method: cB.xhr && cB.xhr.method ? cB.xhr.method : "GET",
            headers: cB.xhr && cB.xhr.headers ? cB.xhr.headers : null,
            withCredentials: !(!cB.xhr || !cB.xhr.withCredentials) && cB.xhr.withCredentials
          }, Bc._duration = 0, Bc._state = "unloaded", Bc._sounds = [], Bc._endTimers = {}, Bc._queue = [], Bc._playLock = !1, Bc._onend = cB.onend ? [{
            mI: cB.onend
          }] : [], Bc._onfade = cB.onfade ? [{
            mI: cB.onfade
          }] : [], Bc._onload = cB.onload ? [{
            mI: cB.onload
          }] : [], Bc._onloaderror = cB.onloaderror ? [{
            mI: cB.onloaderror
          }] : [], Bc._onplayerror = cB.onplayerror ? [{
            mI: cB.onplayerror
          }] : [], Bc._onpause = cB.onpause ? [{
            mI: cB.onpause
          }] : [], Bc._onplay = cB.onplay ? [{
            mI: cB.onplay
          }] : [], Bc._onstop = cB.onstop ? [{
            mI: cB.onstop
          }] : [], Bc._onmute = cB.onmute ? [{
            mI: cB.onmute
          }] : [], Bc._onvolume = cB.onvolume ? [{
            mI: cB.onvolume
          }] : [], Bc._onrate = cB.onrate ? [{
            mI: cB.onrate
          }] : [], Bc._onseek = cB.onseek ? [{
            mI: cB.onseek
          }] : [], Bc._onunlock = cB.onunlock ? [{
            mI: cB.onunlock
          }] : [], Bc._onresume = [], Bc._webAudio = rB.usingWebAudio && !Bc._html5, "undefined" !== typeof rB.ctx && rB.ctx && rB.autoUnlock && rB._unlockAudio(), rB._howls.push(Bc), Bc._autoplay && Bc._queue.push({
            event: "play",
            action: function() {
              Bc.play()
            }
          }), Bc._preload && "none" !== Bc._preload && Bc.load(), Bc
        },
        load: function() {
          var cB = this,
            Bc = null;
          if (rB.noAudio) cB._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof cB._src && (cB._src = [cB._src]);
            for (var nc = 0; nc < cB._src.length; nc++) {
              var Vc, Ic;
              if (cB._format && cB._format[nc]) Vc = cB._format[nc];
              else {
                if ("string" !== typeof(Ic = cB._src[nc])) {
                  cB._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Vc = /^data:audio\/([^;,]+);/i.exec(Ic)) || (Vc = /\.([^.]+)$/.exec(Ic.split("?", 1)[0])), Vc && (Vc = Vc[1].toLowerCase())
              }
              if (Vc || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Vc && rB.codecs(Vc)) {
                Bc = cB._src[nc];
                break
              }
            }
            if (Bc) return cB._src = Bc, cB._state = "loading", "https:" === window.location.protocol && "http:" === Bc.slice(0, 5) && (cB._html5 = !0, cB._webAudio = !1), new sc(cB), cB._webAudio && Pc(cB), cB;
            cB._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(cB, Bc) {
          var nc = this,
            Vc = null;
          if ("number" === typeof cB) Vc = cB, cB = null;
          else {
            if ("string" === typeof cB && "loaded" === nc._state && !nc._sprite[cB]) return null;
            if ("undefined" === typeof cB && (cB = "__default", !nc._playLock)) {
              for (var Ic = 0, uc = 0; uc < nc._sounds.length; uc++) nc._sounds[uc].eC && !nc._sounds[uc]._ended && (Ic++, Vc = nc._sounds[uc]._id);
              1 === Ic ? cB = null : Vc = null
            }
          }
          var sc = Vc ? nc._soundById(Vc) : nc._inactiveSound();
          if (!sc) return null;
          if (Vc && !cB && (cB = sc._sprite || "__default"), "loaded" !== nc._state) {
            sc._sprite = cB, sc._ended = !1;
            var Mc = sc._id;
            return nc._queue.push({
              event: "play",
              action: function() {
                nc.play(Mc)
              }
            }), Mc
          }
          if (Vc && !sc.eC) return Bc || nc._loadQueue("play"), sc._id;
          nc._webAudio && rB._autoResume();
          var Pc = Math.max(0, sc._seek > 0 ? sc._seek : nc._sprite[cB][0] / 1e3),
            qB = Math.max(0, (nc._sprite[cB][0] + nc._sprite[cB][1]) / 1e3 - Pc),
            Oc = 1e3 * qB / Math.abs(sc._rate),
            Tc = nc._sprite[cB][0] / 1e3,
            fc = (nc._sprite[cB][0] + nc._sprite[cB][1]) / 1e3;
          sc._sprite = cB, sc._ended = !1;
          var mB = function() {
            sc.eC = !1, sc._seek = Pc, sc._start = Tc, sc._stop = fc, sc._loop = !(!sc._loop && !nc._sprite[cB][2])
          };
          if (!(Pc >= fc)) {
            var ec = sc._node;
            if (nc._webAudio) {
              var tB = function() {
                nc._playLock = !1, mB(), nc._refreshBuffer(sc);
                var cB = sc._muted || nc._muted ? 0 : sc._volume;
                ec.gain.setValueAtTime(cB, rB.ctx.currentTime), sc._playStart = rB.ctx.currentTime, "undefined" === typeof ec.bufferSource.start ? sc._loop ? ec.bufferSource.noteGrainOn(0, Pc, 86400) : ec.bufferSource.noteGrainOn(0, Pc, qB) : sc._loop ? ec.bufferSource.start(0, Pc, 86400) : ec.bufferSource.start(0, Pc, qB), Oc !== 1 / 0 && (nc._endTimers[sc._id] = setTimeout(nc._ended.bind(nc, sc), Oc)), Bc || setTimeout((function() {
                  nc._emit("play", sc._id), nc._loadQueue()
                }), 0)
              };
              "running" === rB.state && "interrupted" !== rB.ctx.state ? tB() : (nc._playLock = !0, nc.once("resume", tB), nc._clearTimer(sc._id))
            } else {
              var Sc = function() {
                ec.currentTime = Pc, ec.muted = sc._muted || nc._muted || rB._muted || ec.muted, ec.volume = sc._volume * rB.volume(), ec.playbackRate = sc._rate;
                try {
                  var Vc = ec.play();
                  if (Vc && "undefined" !== typeof Promise && (Vc instanceof Promise || "function" === typeof Vc.then) ? (nc._playLock = !0, mB(), Vc.then((function() {
                      nc._playLock = !1, ec._unlocked = !0, Bc ? nc._loadQueue() : nc._emit("play", sc._id)
                    })).catch((function() {
                      nc._playLock = !1, nc._emit("playerror", sc._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), sc._ended = !0, sc.eC = !0
                    }))) : Bc || (nc._playLock = !1, mB(), nc._emit("play", sc._id)), ec.playbackRate = sc._rate, ec.paused) return void nc._emit("playerror", sc._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== cB || sc._loop ? nc._endTimers[sc._id] = setTimeout(nc._ended.bind(nc, sc), Oc) : (nc._endTimers[sc._id] = function() {
                    nc._ended(sc), ec.removeEventListener("ended", nc._endTimers[sc._id], !1)
                  }, ec.addEventListener("ended", nc._endTimers[sc._id], !1))
                } catch (Ic) {
                  nc._emit("playerror", sc._id, Ic)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === ec.src && (ec.src = nc._src, ec.load());
              var yB = window && window.ejecta || !ec.readyState && rB._navigator.isCocoonJS;
              if (ec.readyState >= 3 || yB) Sc();
              else {
                nc._playLock = !0, nc._state = "loading";
                var zB = function() {
                  nc._state = "loaded", Sc(), ec.removeEventListener(rB._canPlayEvent, zB, !1)
                };
                ec.addEventListener(rB._canPlayEvent, zB, !1), nc._clearTimer(sc._id)
              }
            }
            return sc._id
          }
          nc._ended(sc)
        },
        pause: function(cB) {
          var Bc = this;
          if ("loaded" !== Bc._state || Bc._playLock) return Bc._queue.push({
            event: "pause",
            action: function() {
              Bc.pause(cB)
            }
          }), Bc;
          for (var nc = Bc._getSoundIds(cB), Vc = 0; Vc < nc.length; Vc++) {
            Bc._clearTimer(nc[Vc]);
            var Ic = Bc._soundById(nc[Vc]);
            if (Ic && !Ic.eC && (Ic._seek = Bc.seek(nc[Vc]), Ic._rateSeek = 0, Ic.eC = !0, Bc._stopFade(nc[Vc]), Ic._node))
              if (Bc._webAudio) {
                if (!Ic._node.bufferSource) continue;
                "undefined" === typeof Ic._node.bufferSource.stop ? Ic._node.bufferSource.noteOff(0) : Ic._node.bufferSource.stop(0), Bc._cleanBuffer(Ic._node)
              } else isNaN(Ic._node.duration) && Ic._node.duration !== 1 / 0 || Ic._node.pause();
            arguments[1] || Bc._emit("pause", Ic ? Ic._id : null)
          }
          return Bc
        },
        stop: function(cB, Bc) {
          var nc = this;
          if ("loaded" !== nc._state || nc._playLock) return nc._queue.push({
            event: "stop",
            action: function() {
              nc.stop(cB)
            }
          }), nc;
          for (var Vc = nc._getSoundIds(cB), Ic = 0; Ic < Vc.length; Ic++) {
            nc._clearTimer(Vc[Ic]);
            var rB = nc._soundById(Vc[Ic]);
            rB && (rB._seek = rB._start || 0, rB._rateSeek = 0, rB.eC = !0, rB._ended = !0, nc._stopFade(Vc[Ic]), rB._node && (nc._webAudio ? rB._node.bufferSource && ("undefined" === typeof rB._node.bufferSource.stop ? rB._node.bufferSource.noteOff(0) : rB._node.bufferSource.stop(0), nc._cleanBuffer(rB._node)) : isNaN(rB._node.duration) && rB._node.duration !== 1 / 0 || (rB._node.currentTime = rB._start || 0, rB._node.pause(), rB._node.duration === 1 / 0 && nc._clearSound(rB._node))), Bc || nc._emit("stop", rB._id))
          }
          return nc
        },
        mute: function(cB, Bc) {
          var nc = this;
          if ("loaded" !== nc._state || nc._playLock) return nc._queue.push({
            event: "mute",
            action: function() {
              nc.mute(cB, Bc)
            }
          }), nc;
          if ("undefined" === typeof Bc) {
            if ("boolean" !== typeof cB) return nc._muted;
            nc._muted = cB
          }
          for (var Vc = nc._getSoundIds(Bc), Ic = 0; Ic < Vc.length; Ic++) {
            var uc = nc._soundById(Vc[Ic]);
            uc && (uc._muted = cB, uc._interval && nc._stopFade(uc._id), nc._webAudio && uc._node ? uc._node.gain.setValueAtTime(cB ? 0 : uc._volume, rB.ctx.currentTime) : uc._node && (uc._node.muted = !!rB._muted || cB), nc._emit("mute", uc._id))
          }
          return nc
        },
        volume: function() {
          var cB, Bc, nc, Vc = this,
            Ic = arguments;
          if (0 === Ic.length) return Vc._volume;
          if (1 === Ic.length || 2 === Ic.length && "undefined" === typeof Ic[1] ? Vc._getSoundIds().indexOf(Ic[0]) >= 0 ? Bc = parseInt(Ic[0], 10) : cB = parseFloat(Ic[0]) : Ic.length >= 2 && (cB = parseFloat(Ic[0]), Bc = parseInt(Ic[1], 10)), !("undefined" !== typeof cB && cB >= 0 && cB <= 1)) return (nc = Bc ? Vc._soundById(Bc) : Vc._sounds[0]) ? nc._volume : 0;
          if ("loaded" !== Vc._state || Vc._playLock) return Vc._queue.push({
            event: "volume",
            action: function() {
              Vc.volume.apply(Vc, Ic)
            }
          }), Vc;
          "undefined" === typeof Bc && (Vc._volume = cB), Bc = Vc._getSoundIds(Bc);
          for (var uc = 0; uc < Bc.length; uc++)(nc = Vc._soundById(Bc[uc])) && (nc._volume = cB, Ic[2] || Vc._stopFade(Bc[uc]), Vc._webAudio && nc._node && !nc._muted ? nc._node.gain.setValueAtTime(cB, rB.ctx.currentTime) : nc._node && !nc._muted && (nc._node.volume = cB * rB.volume()), Vc._emit("volume", nc._id));
          return Vc
        },
        fade: function(cB, Bc, nc, Vc) {
          var Ic = this;
          if ("loaded" !== Ic._state || Ic._playLock) return Ic._queue.push({
            event: "fade",
            action: function() {
              Ic.fade(cB, Bc, nc, Vc)
            }
          }), Ic;
          cB = Math.min(Math.max(0, parseFloat(cB)), 1), Bc = Math.min(Math.max(0, parseFloat(Bc)), 1), nc = parseFloat(nc), Ic.volume(cB, Vc);
          for (var uc = Ic._getSoundIds(Vc), sc = 0; sc < uc.length; sc++) {
            var Mc = Ic._soundById(uc[sc]);
            if (Mc) {
              if (Vc || Ic._stopFade(uc[sc]), Ic._webAudio && !Mc._muted) {
                var Pc = rB.ctx.currentTime,
                  qB = Pc + nc / 1e3;
                Mc._volume = cB, Mc._node.gain.setValueAtTime(cB, Pc), Mc._node.gain.linearRampToValueAtTime(Bc, qB)
              }
              Ic._startFadeInterval(Mc, cB, Bc, nc, uc[sc], "undefined" === typeof Vc)
            }
          }
          return Ic
        },
        _startFadeInterval: function(cB, Bc, nc, Vc, Ic, rB) {
          var uc = this,
            sc = Bc,
            Mc = nc - Bc,
            Pc = Math.abs(Mc / .01),
            qB = Math.max(4, Pc > 0 ? Vc / Pc : Vc),
            Oc = Date.now();
          cB._fadeTo = nc, cB._interval = setInterval((function() {
            var Ic = (Date.now() - Oc) / Vc;
            Oc = Date.now(), sc += Mc * Ic, sc = Math.round(100 * sc) / 100, sc = Mc < 0 ? Math.max(nc, sc) : Math.min(nc, sc), uc._webAudio ? cB._volume = sc : uc.volume(sc, cB._id, !0), rB && (uc._volume = sc), (nc < Bc && sc <= nc || nc > Bc && sc >= nc) && (clearInterval(cB._interval), cB._interval = null, cB._fadeTo = null, uc.volume(nc, cB._id), uc._emit("fade", cB._id))
          }), qB)
        },
        _stopFade: function(cB) {
          var Bc = this,
            nc = Bc._soundById(cB);
          return nc && nc._interval && (Bc._webAudio && nc._node.gain.cancelScheduledValues(rB.ctx.currentTime), clearInterval(nc._interval), nc._interval = null, Bc.volume(nc._fadeTo, cB), nc._fadeTo = null, Bc._emit("fade", cB)), Bc
        },
        loop: function() {
          var cB, Bc, nc, Vc = this,
            Ic = arguments;
          if (0 === Ic.length) return Vc._loop;
          if (1 === Ic.length) {
            if ("boolean" !== typeof Ic[0]) return !!(nc = Vc._soundById(parseInt(Ic[0], 10))) && nc._loop;
            cB = Ic[0], Vc._loop = cB
          } else 2 === Ic.length && (cB = Ic[0], Bc = parseInt(Ic[1], 10));
          for (var rB = Vc._getSoundIds(Bc), uc = 0; uc < rB.length; uc++)(nc = Vc._soundById(rB[uc])) && (nc._loop = cB, Vc._webAudio && nc._node && nc._node.bufferSource && (nc._node.bufferSource.loop = cB, cB && (nc._node.bufferSource.loopStart = nc._start || 0, nc._node.bufferSource.loopEnd = nc._stop, Vc.playing(rB[uc]) && (Vc.pause(rB[uc], !0), Vc.play(rB[uc], !0)))));
          return Vc
        },
        rate: function() {
          var cB, Bc, nc, Vc = this,
            Ic = arguments;
          if (0 === Ic.length) Bc = Vc._sounds[0]._id;
          else if (1 === Ic.length) {
            Vc._getSoundIds().indexOf(Ic[0]) >= 0 ? Bc = parseInt(Ic[0], 10) : cB = parseFloat(Ic[0])
          } else 2 === Ic.length && (cB = parseFloat(Ic[0]), Bc = parseInt(Ic[1], 10));
          if ("number" !== typeof cB) return (nc = Vc._soundById(Bc)) ? nc._rate : Vc._rate;
          if ("loaded" !== Vc._state || Vc._playLock) return Vc._queue.push({
            event: "rate",
            action: function() {
              Vc.rate.apply(Vc, Ic)
            }
          }), Vc;
          "undefined" === typeof Bc && (Vc._rate = cB), Bc = Vc._getSoundIds(Bc);
          for (var uc = 0; uc < Bc.length; uc++)
            if (nc = Vc._soundById(Bc[uc])) {
              Vc.playing(Bc[uc]) && (nc._rateSeek = Vc.seek(Bc[uc]), nc._playStart = Vc._webAudio ? rB.ctx.currentTime : nc._playStart), nc._rate = cB, Vc._webAudio && nc._node && nc._node.bufferSource ? nc._node.bufferSource.playbackRate.setValueAtTime(cB, rB.ctx.currentTime) : nc._node && (nc._node.playbackRate = cB);
              var sc = Vc.seek(Bc[uc]),
                Mc = 1e3 * ((Vc._sprite[nc._sprite][0] + Vc._sprite[nc._sprite][1]) / 1e3 - sc) / Math.abs(nc._rate);
              !Vc._endTimers[Bc[uc]] && nc.eC || (Vc._clearTimer(Bc[uc]), Vc._endTimers[Bc[uc]] = setTimeout(Vc._ended.bind(Vc, nc), Mc)), Vc._emit("rate", nc._id)
            } return Vc
        },
        seek: function() {
          var cB, Bc, nc = this,
            Vc = arguments;
          if (0 === Vc.length) nc._sounds.length && (Bc = nc._sounds[0]._id);
          else if (1 === Vc.length) {
            nc._getSoundIds().indexOf(Vc[0]) >= 0 ? Bc = parseInt(Vc[0], 10) : nc._sounds.length && (Bc = nc._sounds[0]._id, cB = parseFloat(Vc[0]))
          } else 2 === Vc.length && (cB = parseFloat(Vc[0]), Bc = parseInt(Vc[1], 10));
          if ("undefined" === typeof Bc) return 0;
          if ("number" === typeof cB && ("loaded" !== nc._state || nc._playLock)) return nc._queue.push({
            event: "seek",
            action: function() {
              nc.seek.apply(nc, Vc)
            }
          }), nc;
          var Ic = nc._soundById(Bc);
          if (Ic) {
            if (!("number" === typeof cB && cB >= 0)) {
              if (nc._webAudio) {
                var uc = nc.playing(Bc) ? rB.ctx.currentTime - Ic._playStart : 0,
                  sc = Ic._rateSeek ? Ic._rateSeek - Ic._seek : 0;
                return Ic._seek + (sc + uc * Math.abs(Ic._rate))
              }
              return Ic._node.currentTime
            }
            var Mc = nc.playing(Bc);
            Mc && nc.pause(Bc, !0), Ic._seek = cB, Ic._ended = !1, nc._clearTimer(Bc), nc._webAudio || !Ic._node || isNaN(Ic._node.duration) || (Ic._node.currentTime = cB);
            var Pc = function() {
              Mc && nc.play(Bc, !0), nc._emit("seek", Bc)
            };
            if (Mc && !nc._webAudio) {
              var qB = function() {
                nc._playLock ? setTimeout(qB, 0) : Pc()
              };
              setTimeout(qB, 0)
            } else Pc()
          }
          return nc
        },
        playing: function(cB) {
          var Bc = this;
          if ("number" === typeof cB) {
            var nc = Bc._soundById(cB);
            return !!nc && !nc.eC
          }
          for (var Vc = 0; Vc < Bc._sounds.length; Vc++)
            if (!Bc._sounds[Vc].eC) return !0;
          return !1
        },
        duration: function(cB) {
          var Bc = this,
            nc = Bc._duration,
            Vc = Bc._soundById(cB);
          return Vc && (nc = Bc._sprite[Vc._sprite][1] / 1e3), nc
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var cB = this, Bc = cB._sounds, nc = 0; nc < Bc.length; nc++) Bc[nc].eC || cB.stop(Bc[nc]._id), cB._webAudio || (cB._clearSound(Bc[nc]._node), Bc[nc]._node.removeEventListener("error", Bc[nc]._errorFn, !1), Bc[nc]._node.removeEventListener(rB._canPlayEvent, Bc[nc]._loadFn, !1), Bc[nc]._node.removeEventListener("ended", Bc[nc]._endFn, !1), rB._releaseHtml5Audio(Bc[nc]._node)), delete Bc[nc]._node, cB._clearTimer(Bc[nc]._id);
          var Vc = rB._howls.indexOf(cB);
          Vc >= 0 && rB._howls.splice(Vc, 1);
          var Ic = !0;
          for (nc = 0; nc < rB._howls.length; nc++)
            if (rB._howls[nc]._src === cB._src || cB._src.indexOf(rB._howls[nc]._src) >= 0) {
              Ic = !1;
              break
            } return Mc && Ic && delete Mc[cB._src], rB.noAudio = !1, cB._state = "unloaded", cB._sounds = [], cB = null, null
        },
        on: function(cB, Bc, nc, Vc) {
          var Ic = this["_on" + cB];
          return "function" === typeof Bc && Ic.push(Vc ? {
            id: nc,
            mI: Bc,
            once: Vc
          } : {
            id: nc,
            mI: Bc
          }), this
        },
        off: function(cB, Bc, nc) {
          var Vc = this,
            Ic = Vc["_on" + cB],
            rB = 0;
          if ("number" === typeof Bc && (nc = Bc, Bc = null), Bc || nc)
            for (rB = 0; rB < Ic.length; rB++) {
              var uc = nc === Ic[rB].id;
              if (Bc === Ic[rB].mI && uc || !Bc && uc) {
                Ic.splice(rB, 1);
                break
              }
            } else if (cB) Vc["_on" + cB] = [];
            else {
              var sc = Object.keys(Vc);
              for (rB = 0; rB < sc.length; rB++) 0 === sc[rB].indexOf("_on") && Array.isArray(Vc[sc[rB]]) && (Vc[sc[rB]] = [])
            } return Vc
        },
        once: function(cB, Bc, nc) {
          return this.on(cB, Bc, nc, 1), this
        },
        _emit: function(cB, Bc, nc) {
          for (var Vc = this, Ic = Vc["_on" + cB], rB = Ic.length - 1; rB >= 0; rB--) Ic[rB].id && Ic[rB].id !== Bc && "load" !== cB || (setTimeout(function(cB) {
            cB.call(this, Bc, nc)
          }.bind(Vc, Ic[rB].mI), 0), Ic[rB].once && Vc.off(cB, Ic[rB].mI, Ic[rB].id));
          return Vc._loadQueue(cB), Vc
        },
        _loadQueue: function(cB) {
          var Bc = this;
          if (Bc._queue.length > 0) {
            var nc = Bc._queue[0];
            nc.event === cB && (Bc._queue.shift(), Bc._loadQueue()), cB || nc.action()
          }
          return Bc
        },
        _ended: function(cB) {
          var Bc = this,
            nc = cB._sprite;
          if (!Bc._webAudio && cB._node && !cB._node.paused && !cB._node.ended && cB._node.currentTime < cB._stop) return setTimeout(Bc._ended.bind(Bc, cB), 100), Bc;
          var Vc = !(!cB._loop && !Bc._sprite[nc][2]);
          if (Bc._emit("end", cB._id), !Bc._webAudio && Vc && Bc.stop(cB._id, !0).play(cB._id), Bc._webAudio && Vc) {
            Bc._emit("play", cB._id), cB._seek = cB._start || 0, cB._rateSeek = 0, cB._playStart = rB.ctx.currentTime;
            var Ic = 1e3 * (cB._stop - cB._start) / Math.abs(cB._rate);
            Bc._endTimers[cB._id] = setTimeout(Bc._ended.bind(Bc, cB), Ic)
          }
          return Bc._webAudio && !Vc && (cB.eC = !0, cB._ended = !0, cB._seek = cB._start || 0, cB._rateSeek = 0, Bc._clearTimer(cB._id), Bc._cleanBuffer(cB._node), rB._autoSuspend()), Bc._webAudio || Vc || Bc.stop(cB._id, !0), Bc
        },
        _clearTimer: function(cB) {
          var Bc = this;
          if (Bc._endTimers[cB]) {
            if ("function" !== typeof Bc._endTimers[cB]) clearTimeout(Bc._endTimers[cB]);
            else {
              var nc = Bc._soundById(cB);
              nc && nc._node && nc._node.removeEventListener("ended", Bc._endTimers[cB], !1)
            }
            delete Bc._endTimers[cB]
          }
          return Bc
        },
        _soundById: function(cB) {
          for (var Bc = this, nc = 0; nc < Bc._sounds.length; nc++)
            if (cB === Bc._sounds[nc]._id) return Bc._sounds[nc];
          return null
        },
        _inactiveSound: function() {
          var cB = this;
          cB._drain();
          for (var Bc = 0; Bc < cB._sounds.length; Bc++)
            if (cB._sounds[Bc]._ended) return cB._sounds[Bc].reset();
          return new sc(cB)
        },
        _drain: function() {
          var cB = this,
            Bc = cB._pool,
            nc = 0,
            Vc = 0;
          if (!(cB._sounds.length < Bc)) {
            for (Vc = 0; Vc < cB._sounds.length; Vc++) cB._sounds[Vc]._ended && nc++;
            for (Vc = cB._sounds.length - 1; Vc >= 0; Vc--) {
              if (nc <= Bc) return;
              cB._sounds[Vc]._ended && (cB._webAudio && cB._sounds[Vc]._node && cB._sounds[Vc]._node.disconnect(0), cB._sounds.splice(Vc, 1), nc--)
            }
          }
        },
        _getSoundIds: function(cB) {
          if ("undefined" === typeof cB) {
            for (var Bc = [], nc = 0; nc < this._sounds.length; nc++) Bc.push(this._sounds[nc]._id);
            return Bc
          }
          return [cB]
        },
        _refreshBuffer: function(cB) {
          return cB._node.bufferSource = rB.ctx.createBufferSource(), cB._node.bufferSource.buffer = Mc[this._src], cB._panner ? cB._node.bufferSource.connect(cB._panner) : cB._node.bufferSource.connect(cB._node), cB._node.bufferSource.loop = cB._loop, cB._loop && (cB._node.bufferSource.loopStart = cB._start || 0, cB._node.bufferSource.loopEnd = cB._stop || 0), cB._node.bufferSource.playbackRate.setValueAtTime(cB._rate, rB.ctx.currentTime), this
        },
        _cleanBuffer: function(cB) {
          var Bc = rB._navigator && rB._navigator.vendor.indexOf("Apple") >= 0;
          if (rB._scratchBuffer && cB.bufferSource && (cB.bufferSource.onended = null, cB.bufferSource.disconnect(0), Bc)) try {
            cB.bufferSource.buffer = rB._scratchBuffer
          } catch (nc) {}
          return cB.bufferSource = null, this
        },
        _clearSound: function(cB) {
          /MSIE |Trident\//.test(rB._navigator && rB._navigator.userAgent) || (cB.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var sc = function(cB) {
        this._parent = cB, this.init()
      };
      sc.prototype = {
        init: function() {
          var cB = this,
            Bc = cB._parent;
          return cB._muted = Bc._muted, cB._loop = Bc._loop, cB._volume = Bc._volume, cB._rate = Bc._rate, cB._seek = 0, cB.eC = !0, cB._ended = !0, cB._sprite = "__default", cB._id = ++rB._counter, Bc._sounds.push(cB), cB.create(), cB
        },
        create: function() {
          var cB = this,
            Bc = cB._parent,
            nc = rB._muted || cB._muted || cB._parent._muted ? 0 : cB._volume;
          return Bc._webAudio ? (cB._node = "undefined" === typeof rB.ctx.createGain ? rB.ctx.createGainNode() : rB.ctx.createGain(), cB._node.gain.setValueAtTime(nc, rB.ctx.currentTime), cB._node.paused = !0, cB._node.connect(rB.masterGain)) : rB.noAudio || (cB._node = rB._obtainHtml5Audio(), cB._errorFn = cB._errorListener.bind(cB), cB._node.addEventListener("error", cB._errorFn, !1), cB._loadFn = cB._loadListener.bind(cB), cB._node.addEventListener(rB._canPlayEvent, cB._loadFn, !1), cB._endFn = cB._endListener.bind(cB), cB._node.addEventListener("ended", cB._endFn, !1), cB._node.src = Bc._src, cB._node.preload = !0 === Bc._preload ? "auto" : Bc._preload, cB._node.volume = nc * rB.volume(), cB._node.load()), cB
        },
        reset: function() {
          var cB = this,
            Bc = cB._parent;
          return cB._muted = Bc._muted, cB._loop = Bc._loop, cB._volume = Bc._volume, cB._rate = Bc._rate, cB._seek = 0, cB._rateSeek = 0, cB.eC = !0, cB._ended = !0, cB._sprite = "__default", cB._id = ++rB._counter, cB
        },
        _errorListener: function() {
          var cB = this;
          cB._parent._emit("loaderror", cB._id, cB._node.error ? cB._node.error.code : 0), cB._node.removeEventListener("error", cB._errorFn, !1)
        },
        _loadListener: function() {
          var cB = this,
            Bc = cB._parent;
          Bc._duration = Math.ceil(10 * cB._node.duration) / 10, 0 === Object.keys(Bc._sprite).length && (Bc._sprite = {
            __default: [0, 1e3 * Bc._duration]
          }), "loaded" !== Bc._state && (Bc._state = "loaded", Bc._emit("load"), Bc._loadQueue()), cB._node.removeEventListener(rB._canPlayEvent, cB._loadFn, !1)
        },
        _endListener: function() {
          var cB = this,
            Bc = cB._parent;
          Bc._duration === 1 / 0 && (Bc._duration = Math.ceil(10 * cB._node.duration) / 10, Bc._sprite.__default[1] === 1 / 0 && (Bc._sprite.__default[1] = 1e3 * Bc._duration), Bc._ended(cB)), cB._node.removeEventListener("ended", cB._endFn, !1)
        }
      };
      var Mc = {},
        Pc = function(cB) {
          var Bc = cB._src;
          if (Mc[Bc]) return cB._duration = Mc[Bc].duration, void Tc(cB);
          if (/^data:[^;]+;base64,/.test(Bc)) {
            for (var nc = atob(Bc.split(",")[1]), Vc = new Uint8Array(nc.length), Ic = 0; Ic < nc.length; ++Ic) Vc[Ic] = nc.charCodeAt(Ic);
            Oc(Vc.buffer, cB)
          } else {
            var rB = new XMLHttpRequest;
            rB.open(cB._xhr.method, Bc, !0), rB.withCredentials = cB._xhr.withCredentials, rB.responseType = "arraybuffer", cB._xhr.headers && Object.keys(cB._xhr.headers).forEach((function(Bc) {
              rB.setRequestHeader(Bc, cB._xhr.headers[Bc])
            })), rB.onload = function() {
              var Bc = (rB.status + "")[0];
              "0" === Bc || "2" === Bc || "3" === Bc ? Oc(rB.response, cB) : cB._emit("loaderror", null, "Failed loading audio file with status: " + rB.status + ".")
            }, rB.onerror = function() {
              cB._webAudio && (cB._html5 = !0, cB._webAudio = !1, cB._sounds = [], delete Mc[Bc], cB.load())
            }, qB(rB)
          }
        },
        qB = function(cB) {
          try {
            cB.send()
          } catch (Bc) {
            cB.onerror()
          }
        },
        Oc = function(cB, Bc) {
          var nc = function() {
              Bc._emit("loaderror", null, "Decoding audio data failed.")
            },
            Vc = function(cB) {
              cB && Bc._sounds.length > 0 ? (Mc[Bc._src] = cB, Tc(Bc, cB)) : nc()
            };
          "undefined" !== typeof Promise && 1 === rB.ctx.decodeAudioData.length ? rB.ctx.decodeAudioData(cB).then(Vc).catch(nc) : rB.ctx.decodeAudioData(cB, Vc, nc)
        },
        Tc = function(cB, Bc) {
          Bc && !cB._duration && (cB._duration = Bc.duration), 0 === Object.keys(cB._sprite).length && (cB._sprite = {
            __default: [0, 1e3 * cB._duration]
          }), "loaded" !== cB._state && (cB._state = "loaded", cB._emit("load"), cB._loadQueue())
        },
        fc = function() {
          if (rB.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? rB.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? rB.ctx = new webkitAudioContext : rB.usingWebAudio = !1
            } catch (Ic) {
              rB.usingWebAudio = !1
            }
            rB.ctx || (rB.usingWebAudio = !1);
            var cB = /iP(hone|od|ad)/.test(rB._navigator && rB._navigator.platform),
              Bc = rB._navigator && rB._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              nc = Bc ? parseInt(Bc[1], 10) : null;
            if (cB && nc && nc < 9) {
              var Vc = /safari/.test(rB._navigator && rB._navigator.userAgent.toLowerCase());
              rB._navigator && !Vc && (rB.usingWebAudio = !1)
            }
            rB.usingWebAudio && (rB.masterGain = "undefined" === typeof rB.ctx.createGain ? rB.ctx.createGainNode() : rB.ctx.createGain(), rB.masterGain.gain.setValueAtTime(rB._muted ? 0 : rB._volume, rB.ctx.currentTime), rB.masterGain.connect(rB.ctx.destination)), rB._setup()
          }
        };
      void 0 === (Vc = function() {
        return {
          Howler: rB,
          Howl: uc
        }
      }.apply(Bc, [])) || (cB.exports = Vc), Bc.Howler = rB, Bc.Howl = uc, "undefined" !== typeof nc.g ? (nc.g.HowlerGlobal = Ic, nc.g.Howler = rB, nc.g.Howl = uc, nc.g.Sound = sc) : "undefined" !== typeof window && (window.HowlerGlobal = Ic, window.Howler = rB, window.Howl = uc, window.Sound = sc)
    }(),
    function() {
      var cB;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(cB) {
        var Bc = this;
        if (!Bc.ctx || !Bc.ctx.listener) return Bc;
        for (var nc = Bc._howls.length - 1; nc >= 0; nc--) Bc._howls[nc].stereo(cB);
        return Bc
      }, HowlerGlobal.prototype.pos = function(cB, Bc, nc) {
        var Vc = this;
        return Vc.ctx && Vc.ctx.listener ? (Bc = "number" !== typeof Bc ? Vc._pos[1] : Bc, nc = "number" !== typeof nc ? Vc._pos[2] : nc, "number" !== typeof cB ? Vc._pos : (Vc._pos = [cB, Bc, nc], "undefined" !== typeof Vc.ctx.listener.positionX ? (Vc.ctx.listener.positionX.setTargetAtTime(Vc._pos[0], Howler.ctx.currentTime, .1), Vc.ctx.listener.positionY.setTargetAtTime(Vc._pos[1], Howler.ctx.currentTime, .1), Vc.ctx.listener.positionZ.setTargetAtTime(Vc._pos[2], Howler.ctx.currentTime, .1)) : Vc.ctx.listener.setPosition(Vc._pos[0], Vc._pos[1], Vc._pos[2]), Vc)) : Vc
      }, HowlerGlobal.prototype.orientation = function(cB, Bc, nc, Vc, Ic, rB) {
        var uc = this;
        if (!uc.ctx || !uc.ctx.listener) return uc;
        var sc = uc._orientation;
        return Bc = "number" !== typeof Bc ? sc[1] : Bc, nc = "number" !== typeof nc ? sc[2] : nc, Vc = "number" !== typeof Vc ? sc[3] : Vc, Ic = "number" !== typeof Ic ? sc[4] : Ic, rB = "number" !== typeof rB ? sc[5] : rB, "number" !== typeof cB ? sc : (uc._orientation = [cB, Bc, nc, Vc, Ic, rB], "undefined" !== typeof uc.ctx.listener.forwardX ? (uc.ctx.listener.forwardX.setTargetAtTime(cB, Howler.ctx.currentTime, .1), uc.ctx.listener.forwardY.setTargetAtTime(Bc, Howler.ctx.currentTime, .1), uc.ctx.listener.forwardZ.setTargetAtTime(nc, Howler.ctx.currentTime, .1), uc.ctx.listener.upX.setTargetAtTime(Vc, Howler.ctx.currentTime, .1), uc.ctx.listener.upY.setTargetAtTime(Ic, Howler.ctx.currentTime, .1), uc.ctx.listener.upZ.setTargetAtTime(rB, Howler.ctx.currentTime, .1)) : uc.ctx.listener.setOrientation(cB, Bc, nc, Vc, Ic, rB), uc)
      }, Howl.prototype.init = (cB = Howl.prototype.init, function(Bc) {
        var nc = this;
        return nc._orientation = Bc.orientation || [1, 0, 0], nc._stereo = Bc.stereo || null, nc._pos = Bc.pos || null, nc._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Bc.coneInnerAngle ? Bc.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Bc.coneOuterAngle ? Bc.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Bc.coneOuterGain ? Bc.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Bc.distanceModel ? Bc.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Bc.maxDistance ? Bc.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Bc.panningModel ? Bc.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Bc.refDistance ? Bc.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Bc.rolloffFactor ? Bc.rolloffFactor : 1
        }, nc._onstereo = Bc.onstereo ? [{
          mI: Bc.onstereo
        }] : [], nc._onpos = Bc.onpos ? [{
          mI: Bc.onpos
        }] : [], nc._onorientation = Bc.onorientation ? [{
          mI: Bc.onorientation
        }] : [], cB.call(this, Bc)
      }), Howl.prototype.stereo = function(cB, nc) {
        var Vc = this;
        if (!Vc._webAudio) return Vc;
        if ("loaded" !== Vc._state) return Vc._queue.push({
          event: "stereo",
          action: function() {
            Vc.stereo(cB, nc)
          }
        }), Vc;
        var Ic = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof nc) {
          if ("number" !== typeof cB) return Vc._stereo;
          Vc._stereo = cB, Vc._pos = [cB, 0, 0]
        }
        for (var rB = Vc._getSoundIds(nc), uc = 0; uc < rB.length; uc++) {
          var sc = Vc._soundById(rB[uc]);
          if (sc) {
            if ("number" !== typeof cB) return sc._stereo;
            sc._stereo = cB, sc._pos = [cB, 0, 0], sc._node && (sc._pannerAttr.panningModel = "equalpower", sc._panner && sc._panner.pan || Bc(sc, Ic), "spatial" === Ic ? "undefined" !== typeof sc._panner.positionX ? (sc._panner.positionX.setValueAtTime(cB, Howler.ctx.currentTime), sc._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), sc._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : sc._panner.setPosition(cB, 0, 0) : sc._panner.pan.setValueAtTime(cB, Howler.ctx.currentTime)), Vc._emit("stereo", sc._id)
          }
        }
        return Vc
      }, Howl.prototype.pos = function(cB, nc, Vc, Ic) {
        var rB = this;
        if (!rB._webAudio) return rB;
        if ("loaded" !== rB._state) return rB._queue.push({
          event: "pos",
          action: function() {
            rB.pos(cB, nc, Vc, Ic)
          }
        }), rB;
        if (nc = "number" !== typeof nc ? 0 : nc, Vc = "number" !== typeof Vc ? -.5 : Vc, "undefined" === typeof Ic) {
          if ("number" !== typeof cB) return rB._pos;
          rB._pos = [cB, nc, Vc]
        }
        for (var uc = rB._getSoundIds(Ic), sc = 0; sc < uc.length; sc++) {
          var Mc = rB._soundById(uc[sc]);
          if (Mc) {
            if ("number" !== typeof cB) return Mc._pos;
            Mc._pos = [cB, nc, Vc], Mc._node && (Mc._panner && !Mc._panner.pan || Bc(Mc, "spatial"), "undefined" !== typeof Mc._panner.positionX ? (Mc._panner.positionX.setValueAtTime(cB, Howler.ctx.currentTime), Mc._panner.positionY.setValueAtTime(nc, Howler.ctx.currentTime), Mc._panner.positionZ.setValueAtTime(Vc, Howler.ctx.currentTime)) : Mc._panner.setPosition(cB, nc, Vc)), rB._emit("pos", Mc._id)
          }
        }
        return rB
      }, Howl.prototype.orientation = function(cB, nc, Vc, Ic) {
        var rB = this;
        if (!rB._webAudio) return rB;
        if ("loaded" !== rB._state) return rB._queue.push({
          event: "orientation",
          action: function() {
            rB.orientation(cB, nc, Vc, Ic)
          }
        }), rB;
        if (nc = "number" !== typeof nc ? rB._orientation[1] : nc, Vc = "number" !== typeof Vc ? rB._orientation[2] : Vc, "undefined" === typeof Ic) {
          if ("number" !== typeof cB) return rB._orientation;
          rB._orientation = [cB, nc, Vc]
        }
        for (var uc = rB._getSoundIds(Ic), sc = 0; sc < uc.length; sc++) {
          var Mc = rB._soundById(uc[sc]);
          if (Mc) {
            if ("number" !== typeof cB) return Mc._orientation;
            Mc._orientation = [cB, nc, Vc], Mc._node && (Mc._panner || (Mc._pos || (Mc._pos = rB._pos || [0, 0, -.5]), Bc(Mc, "spatial")), "undefined" !== typeof Mc._panner.orientationX ? (Mc._panner.orientationX.setValueAtTime(cB, Howler.ctx.currentTime), Mc._panner.orientationY.setValueAtTime(nc, Howler.ctx.currentTime), Mc._panner.orientationZ.setValueAtTime(Vc, Howler.ctx.currentTime)) : Mc._panner.setOrientation(cB, nc, Vc)), rB._emit("orientation", Mc._id)
          }
        }
        return rB
      }, Howl.prototype.pannerAttr = function() {
        var cB, nc, Vc, Ic = this,
          rB = arguments;
        if (!Ic._webAudio) return Ic;
        if (0 === rB.length) return Ic._pannerAttr;
        if (1 === rB.length) {
          if ("object" !== typeof rB[0]) return (Vc = Ic._soundById(parseInt(rB[0], 10))) ? Vc._pannerAttr : Ic._pannerAttr;
          cB = rB[0], "undefined" === typeof nc && (cB.pannerAttr || (cB.pannerAttr = {
            coneInnerAngle: cB.coneInnerAngle,
            coneOuterAngle: cB.coneOuterAngle,
            coneOuterGain: cB.coneOuterGain,
            distanceModel: cB.distanceModel,
            maxDistance: cB.maxDistance,
            refDistance: cB.refDistance,
            rolloffFactor: cB.rolloffFactor,
            panningModel: cB.panningModel
          }), Ic._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof cB.pannerAttr.coneInnerAngle ? cB.pannerAttr.coneInnerAngle : Ic._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof cB.pannerAttr.coneOuterAngle ? cB.pannerAttr.coneOuterAngle : Ic._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof cB.pannerAttr.coneOuterGain ? cB.pannerAttr.coneOuterGain : Ic._coneOuterGain,
            distanceModel: "undefined" !== typeof cB.pannerAttr.distanceModel ? cB.pannerAttr.distanceModel : Ic._distanceModel,
            maxDistance: "undefined" !== typeof cB.pannerAttr.maxDistance ? cB.pannerAttr.maxDistance : Ic._maxDistance,
            refDistance: "undefined" !== typeof cB.pannerAttr.refDistance ? cB.pannerAttr.refDistance : Ic._refDistance,
            rolloffFactor: "undefined" !== typeof cB.pannerAttr.rolloffFactor ? cB.pannerAttr.rolloffFactor : Ic._rolloffFactor,
            panningModel: "undefined" !== typeof cB.pannerAttr.panningModel ? cB.pannerAttr.panningModel : Ic._panningModel
          })
        } else 2 === rB.length && (cB = rB[0], nc = parseInt(rB[1], 10));
        for (var uc = Ic._getSoundIds(nc), sc = 0; sc < uc.length; sc++)
          if (Vc = Ic._soundById(uc[sc])) {
            var Mc = Vc._pannerAttr;
            Mc = {
              coneInnerAngle: "undefined" !== typeof cB.coneInnerAngle ? cB.coneInnerAngle : Mc.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof cB.coneOuterAngle ? cB.coneOuterAngle : Mc.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof cB.coneOuterGain ? cB.coneOuterGain : Mc.coneOuterGain,
              distanceModel: "undefined" !== typeof cB.distanceModel ? cB.distanceModel : Mc.distanceModel,
              maxDistance: "undefined" !== typeof cB.maxDistance ? cB.maxDistance : Mc.maxDistance,
              refDistance: "undefined" !== typeof cB.refDistance ? cB.refDistance : Mc.refDistance,
              rolloffFactor: "undefined" !== typeof cB.rolloffFactor ? cB.rolloffFactor : Mc.rolloffFactor,
              panningModel: "undefined" !== typeof cB.panningModel ? cB.panningModel : Mc.panningModel
            };
            var Pc = Vc._panner;
            Pc ? (Pc.coneInnerAngle = Mc.coneInnerAngle, Pc.coneOuterAngle = Mc.coneOuterAngle, Pc.coneOuterGain = Mc.coneOuterGain, Pc.distanceModel = Mc.distanceModel, Pc.maxDistance = Mc.maxDistance, Pc.refDistance = Mc.refDistance, Pc.rolloffFactor = Mc.rolloffFactor, Pc.panningModel = Mc.panningModel) : (Vc._pos || (Vc._pos = Ic._pos || [0, 0, -.5]), Bc(Vc, "spatial"))
          } return Ic
      }, Sound.prototype.init = function(cB) {
        return function() {
          var Bc = this,
            nc = Bc._parent;
          Bc._orientation = nc._orientation, Bc._stereo = nc._stereo, Bc._pos = nc._pos, Bc._pannerAttr = nc._pannerAttr, cB.call(this), Bc._stereo ? nc.stereo(Bc._stereo) : Bc._pos && nc.pos(Bc._pos[0], Bc._pos[1], Bc._pos[2], Bc._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(cB) {
        return function() {
          var Bc = this,
            nc = Bc._parent;
          return Bc._orientation = nc._orientation, Bc._stereo = nc._stereo, Bc._pos = nc._pos, Bc._pannerAttr = nc._pannerAttr, Bc._stereo ? nc.stereo(Bc._stereo) : Bc._pos ? nc.pos(Bc._pos[0], Bc._pos[1], Bc._pos[2], Bc._id) : Bc._panner && (Bc._panner.disconnect(0), Bc._panner = void 0, nc._refreshBuffer(Bc)), cB.call(this)
        }
      }(Sound.prototype.reset);
      var Bc = function(cB, Bc) {
        "spatial" === (Bc = Bc || "spatial") ? (cB._panner = Howler.ctx.createPanner(), cB._panner.coneInnerAngle = cB._pannerAttr.coneInnerAngle, cB._panner.coneOuterAngle = cB._pannerAttr.coneOuterAngle, cB._panner.coneOuterGain = cB._pannerAttr.coneOuterGain, cB._panner.distanceModel = cB._pannerAttr.distanceModel, cB._panner.maxDistance = cB._pannerAttr.maxDistance, cB._panner.refDistance = cB._pannerAttr.refDistance, cB._panner.rolloffFactor = cB._pannerAttr.rolloffFactor, cB._panner.panningModel = cB._pannerAttr.panningModel, "undefined" !== typeof cB._panner.positionX ? (cB._panner.positionX.setValueAtTime(cB._pos[0], Howler.ctx.currentTime), cB._panner.positionY.setValueAtTime(cB._pos[1], Howler.ctx.currentTime), cB._panner.positionZ.setValueAtTime(cB._pos[2], Howler.ctx.currentTime)) : cB._panner.setPosition(cB._pos[0], cB._pos[1], cB._pos[2]), "undefined" !== typeof cB._panner.orientationX ? (cB._panner.orientationX.setValueAtTime(cB._orientation[0], Howler.ctx.currentTime), cB._panner.orientationY.setValueAtTime(cB._orientation[1], Howler.ctx.currentTime), cB._panner.orientationZ.setValueAtTime(cB._orientation[2], Howler.ctx.currentTime)) : cB._panner.setOrientation(cB._orientation[0], cB._orientation[1], cB._orientation[2])) : (cB._panner = Howler.ctx.createStereoPanner(), cB._panner.pan.setValueAtTime(cB._stereo, Howler.ctx.currentTime)), cB._panner.connect(cB._node), cB.eC || cB._parent.pause(cB._id, !0).play(cB._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);