/*! For license information please see dz8ef.98.9b8315f4.chunk.js.LICENSE.txt */
export const id = 98;
export const ids = [98];
export const modules = {
  5032: (uu, Eu, ju) => {
    var su;
    ! function() {
      var Uu = function() {
        this.init()
      };
      Uu.prototype = {
        init: function() {
          var uu = this || Zu;
          return uu._counter = 1e3, uu._html5AudioPool = [], uu.html5PoolSize = 10, uu._codecs = {}, uu._howls = [], uu._muted = !1, uu._volume = 1, uu._canPlayEvent = "canplaythrough", uu._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, uu.masterGain = null, uu.noAudio = !1, uu.usingWebAudio = !0, uu.autoSuspend = !0, uu.ctx = null, uu.autoUnlock = !0, uu._setup(), uu
        },
        volume: function(uu) {
          var Eu = this || Zu;
          if (uu = parseFloat(uu), Eu.ctx || Nu(), "undefined" !== typeof uu && uu >= 0 && uu <= 1) {
            if (Eu._volume = uu, Eu._muted) return Eu;
            Eu.usingWebAudio && Eu.masterGain.gain.setValueAtTime(uu, Zu.ctx.currentTime);
            for (var ju = 0; ju < Eu._howls.length; ju++)
              if (!Eu._howls[ju]._webAudio)
                for (var su = Eu._howls[ju]._getSoundIds(), Uu = 0; Uu < su.length; Uu++) {
                  var Xu = Eu._howls[ju]._soundById(su[Uu]);
                  Xu && Xu._node && (Xu._node.volume = Xu._volume * uu)
                }
            return Eu
          }
          return Eu._volume
        },
        mute: function(uu) {
          var Eu = this || Zu;
          Eu.ctx || Nu(), Eu._muted = uu, Eu.usingWebAudio && Eu.masterGain.gain.setValueAtTime(uu ? 0 : Eu._volume, Zu.ctx.currentTime);
          for (var ju = 0; ju < Eu._howls.length; ju++)
            if (!Eu._howls[ju]._webAudio)
              for (var su = Eu._howls[ju]._getSoundIds(), Uu = 0; Uu < su.length; Uu++) {
                var Xu = Eu._howls[ju]._soundById(su[Uu]);
                Xu && Xu._node && (Xu._node.muted = !!uu || Xu._muted)
              }
          return Eu
        },
        stop: function() {
          for (var uu = this || Zu, Eu = 0; Eu < uu._howls.length; Eu++) uu._howls[Eu].stop();
          return uu
        },
        unload: function() {
          for (var uu = this || Zu, Eu = uu._howls.length - 1; Eu >= 0; Eu--) uu._howls[Eu].unload();
          return uu.usingWebAudio && uu.ctx && "undefined" !== typeof uu.ctx.close && (uu.ctx.close(), uu.ctx = null, Nu()), uu
        },
        codecs: function(uu) {
          return (this || Zu)._codecs[uu.replace(/^x-/, "")]
        },
        _setup: function() {
          var uu = this || Zu;
          if (uu.state = uu.ctx && uu.ctx.state || "suspended", uu._autoSuspend(), !uu.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (uu._canPlayEvent = "canplay")
            } catch (Eu) {
              uu.noAudio = !0
            } else uu.noAudio = !0;
          try {
            (new Audio).muted && (uu.noAudio = !0)
          } catch (Eu) {}
          return uu.noAudio || uu._setupCodecs(), uu
        },
        _setupCodecs: function() {
          var uu = this || Zu,
            Eu = null;
          try {
            Eu = "undefined" !== typeof Audio ? new Audio : null
          } catch (Cu) {
            return uu
          }
          if (!Eu || "function" !== typeof Eu.canPlayType) return uu;
          var ju = Eu.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            su = uu._navigator ? uu._navigator.userAgent : "",
            Uu = su.match(/OPR\/([0-6].)/g),
            Xu = Uu && parseInt(Uu[0].split("/")[1], 10) < 33,
            lu = -1 !== su.indexOf("Safari") && -1 === su.indexOf("Chrome"),
            qu = su.match(/Version\/(.*?) /),
            fu = lu && qu && parseInt(qu[1], 10) < 15;
          return uu._codecs = {
            mp3: !(Xu || !ju && !Eu.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!ju,
            opus: !!Eu.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Eu.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Eu.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Eu.canPlayType('audio/wav; codecs="1"') || Eu.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Eu.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Eu.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Eu.canPlayType("audio/x-m4a;") || Eu.canPlayType("audio/m4a;") || Eu.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Eu.canPlayType("audio/x-m4b;") || Eu.canPlayType("audio/m4b;") || Eu.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Eu.canPlayType("audio/x-mp4;") || Eu.canPlayType("audio/mp4;") || Eu.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(fu || !Eu.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(fu || !Eu.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Eu.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Eu.canPlayType("audio/x-flac;") || Eu.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, uu
        },
        _unlockAudio: function() {
          var uu = this || Zu;
          if (!uu._audioUnlocked && uu.ctx) {
            uu._audioUnlocked = !1, uu.autoUnlock = !1, uu._mobileUnloaded || 44100 === uu.ctx.sampleRate || (uu._mobileUnloaded = !0, uu.unload()), uu._scratchBuffer = uu.ctx.createBuffer(1, 1, 22050);
            var Eu = function(ju) {
              for (; uu._html5AudioPool.length < uu.html5PoolSize;) try {
                var su = new Audio;
                su._unlocked = !0, uu._releaseHtml5Audio(su)
              } catch (ju) {
                uu.noAudio = !0;
                break
              }
              for (var Uu = 0; Uu < uu._howls.length; Uu++)
                if (!uu._howls[Uu]._webAudio)
                  for (var Zu = uu._howls[Uu]._getSoundIds(), Xu = 0; Xu < Zu.length; Xu++) {
                    var lu = uu._howls[Uu]._soundById(Zu[Xu]);
                    lu && lu._node && !lu._node._unlocked && (lu._node._unlocked = !0, lu._node.load())
                  }
              uu._autoResume();
              var qu = uu.ctx.createBufferSource();
              qu.buffer = uu._scratchBuffer, qu.connect(uu.ctx.destination), "undefined" === typeof qu.start ? qu.noteOn(0) : qu.start(0), "function" === typeof uu.ctx.resume && uu.ctx.resume(), qu.onended = function() {
                qu.disconnect(0), uu._audioUnlocked = !0, document.removeEventListener("touchstart", Eu, !0), document.removeEventListener("touchend", Eu, !0), document.removeEventListener("click", Eu, !0), document.removeEventListener("keydown", Eu, !0);
                for (var ju = 0; ju < uu._howls.length; ju++) uu._howls[ju]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Eu, !0), document.addEventListener("touchend", Eu, !0), document.addEventListener("click", Eu, !0), document.addEventListener("keydown", Eu, !0), uu
          }
        },
        _obtainHtml5Audio: function() {
          var uu = this || Zu;
          if (uu._html5AudioPool.length) return uu._html5AudioPool.pop();
          var Eu = (new Audio).play();
          return Eu && "undefined" !== typeof Promise && (Eu instanceof Promise || "function" === typeof Eu.then) && Eu.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(uu) {
          var Eu = this || Zu;
          return uu._unlocked && Eu._html5AudioPool.push(uu), Eu
        },
        _autoSuspend: function() {
          var uu = this;
          if (uu.autoSuspend && uu.ctx && "undefined" !== typeof uu.ctx.suspend && Zu.usingWebAudio) {
            for (var Eu = 0; Eu < uu._howls.length; Eu++)
              if (uu._howls[Eu]._webAudio)
                for (var ju = 0; ju < uu._howls[Eu]._sounds.length; ju++)
                  if (!uu._howls[Eu]._sounds[ju].aG) return uu;
            return uu._suspendTimer && clearTimeout(uu._suspendTimer), uu._suspendTimer = setTimeout((function() {
              if (uu.autoSuspend) {
                uu._suspendTimer = null, uu.state = "suspending";
                var Eu = function() {
                  uu.state = "suspended", uu._resumeAfterSuspend && (delete uu._resumeAfterSuspend, uu._autoResume())
                };
                uu.ctx.suspend().then(Eu, Eu)
              }
            }), 3e4), uu
          }
        },
        _autoResume: function() {
          var uu = this;
          if (uu.ctx && "undefined" !== typeof uu.ctx.resume && Zu.usingWebAudio) return "running" === uu.state && "interrupted" !== uu.ctx.state && uu._suspendTimer ? (clearTimeout(uu._suspendTimer), uu._suspendTimer = null) : "suspended" === uu.state || "running" === uu.state && "interrupted" === uu.ctx.state ? (uu.ctx.resume().then((function() {
            uu.state = "running";
            for (var Eu = 0; Eu < uu._howls.length; Eu++) uu._howls[Eu]._emit("resume")
          })), uu._suspendTimer && (clearTimeout(uu._suspendTimer), uu._suspendTimer = null)) : "suspending" === uu.state && (uu._resumeAfterSuspend = !0), uu
        }
      };
      var Zu = new Uu,
        Xu = function(uu) {
          uu.src && 0 !== uu.src.length ? this.init(uu) : console.error("An array of source files must be passed with any new Howl.")
        };
      Xu.prototype = {
        init: function(uu) {
          var Eu = this;
          return Zu.ctx || Nu(), Eu._autoplay = uu.autoplay || !1, Eu._format = "string" !== typeof uu.format ? uu.format : [uu.format], Eu._html5 = uu.html5 || !1, Eu._muted = uu.mute || !1, Eu._loop = uu.loop || !1, Eu._pool = uu.pool || 5, Eu._preload = "boolean" !== typeof uu.preload && "metadata" !== uu.preload || uu.preload, Eu._rate = uu.rate || 1, Eu._sprite = uu.sprite || {}, Eu._src = "string" !== typeof uu.src ? uu.src : [uu.src], Eu._volume = void 0 !== uu.volume ? uu.volume : 1, Eu._xhr = {
            method: uu.xhr && uu.xhr.method ? uu.xhr.method : "GET",
            headers: uu.xhr && uu.xhr.headers ? uu.xhr.headers : null,
            withCredentials: !(!uu.xhr || !uu.xhr.withCredentials) && uu.xhr.withCredentials
          }, Eu._duration = 0, Eu._state = "unloaded", Eu._sounds = [], Eu._endTimers = {}, Eu._queue = [], Eu._playLock = !1, Eu._onend = uu.onend ? [{
            yN: uu.onend
          }] : [], Eu._onfade = uu.onfade ? [{
            yN: uu.onfade
          }] : [], Eu._onload = uu.onload ? [{
            yN: uu.onload
          }] : [], Eu._onloaderror = uu.onloaderror ? [{
            yN: uu.onloaderror
          }] : [], Eu._onplayerror = uu.onplayerror ? [{
            yN: uu.onplayerror
          }] : [], Eu._onpause = uu.onpause ? [{
            yN: uu.onpause
          }] : [], Eu._onplay = uu.onplay ? [{
            yN: uu.onplay
          }] : [], Eu._onstop = uu.onstop ? [{
            yN: uu.onstop
          }] : [], Eu._onmute = uu.onmute ? [{
            yN: uu.onmute
          }] : [], Eu._onvolume = uu.onvolume ? [{
            yN: uu.onvolume
          }] : [], Eu._onrate = uu.onrate ? [{
            yN: uu.onrate
          }] : [], Eu._onseek = uu.onseek ? [{
            yN: uu.onseek
          }] : [], Eu._onunlock = uu.onunlock ? [{
            yN: uu.onunlock
          }] : [], Eu._onresume = [], Eu._webAudio = Zu.usingWebAudio && !Eu._html5, "undefined" !== typeof Zu.ctx && Zu.ctx && Zu.autoUnlock && Zu._unlockAudio(), Zu._howls.push(Eu), Eu._autoplay && Eu._queue.push({
            event: "play",
            action: function() {
              Eu.play()
            }
          }), Eu._preload && "none" !== Eu._preload && Eu.load(), Eu
        },
        load: function() {
          var uu = this,
            Eu = null;
          if (Zu.noAudio) uu._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof uu._src && (uu._src = [uu._src]);
            for (var ju = 0; ju < uu._src.length; ju++) {
              var su, Uu;
              if (uu._format && uu._format[ju]) su = uu._format[ju];
              else {
                if ("string" !== typeof(Uu = uu._src[ju])) {
                  uu._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(su = /^data:audio\/([^;,]+);/i.exec(Uu)) || (su = /\.([^.]+)$/.exec(Uu.split("?", 1)[0])), su && (su = su[1].toLowerCase())
              }
              if (su || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), su && Zu.codecs(su)) {
                Eu = uu._src[ju];
                break
              }
            }
            if (Eu) return uu._src = Eu, uu._state = "loading", "https:" === window.location.protocol && "http:" === Eu.slice(0, 5) && (uu._html5 = !0, uu._webAudio = !1), new lu(uu), uu._webAudio && fu(uu), uu;
            uu._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(uu, Eu) {
          var ju = this,
            su = null;
          if ("number" === typeof uu) su = uu, uu = null;
          else {
            if ("string" === typeof uu && "loaded" === ju._state && !ju._sprite[uu]) return null;
            if ("undefined" === typeof uu && (uu = "__default", !ju._playLock)) {
              for (var Uu = 0, Xu = 0; Xu < ju._sounds.length; Xu++) ju._sounds[Xu].aG && !ju._sounds[Xu]._ended && (Uu++, su = ju._sounds[Xu]._id);
              1 === Uu ? uu = null : su = null
            }
          }
          var lu = su ? ju._soundById(su) : ju._inactiveSound();
          if (!lu) return null;
          if (su && !uu && (uu = lu._sprite || "__default"), "loaded" !== ju._state) {
            lu._sprite = uu, lu._ended = !1;
            var qu = lu._id;
            return ju._queue.push({
              event: "play",
              action: function() {
                ju.play(qu)
              }
            }), qu
          }
          if (su && !lu.aG) return Eu || ju._loadQueue("play"), lu._id;
          ju._webAudio && Zu._autoResume();
          var fu = Math.max(0, lu._seek > 0 ? lu._seek : ju._sprite[uu][0] / 1e3),
            Cu = Math.max(0, (ju._sprite[uu][0] + ju._sprite[uu][1]) / 1e3 - fu),
            bu = 1e3 * Cu / Math.abs(lu._rate),
            cu = ju._sprite[uu][0] / 1e3,
            Nu = (ju._sprite[uu][0] + ju._sprite[uu][1]) / 1e3;
          lu._sprite = uu, lu._ended = !1;
          var Ou = function() {
            lu.aG = !1, lu._seek = fu, lu._start = cu, lu._stop = Nu, lu._loop = !(!lu._loop && !ju._sprite[uu][2])
          };
          if (!(fu >= Nu)) {
            var Yu = lu._node;
            if (ju._webAudio) {
              var hu = function() {
                ju._playLock = !1, Ou(), ju._refreshBuffer(lu);
                var uu = lu._muted || ju._muted ? 0 : lu._volume;
                Yu.gain.setValueAtTime(uu, Zu.ctx.currentTime), lu._playStart = Zu.ctx.currentTime, "undefined" === typeof Yu.bufferSource.start ? lu._loop ? Yu.bufferSource.noteGrainOn(0, fu, 86400) : Yu.bufferSource.noteGrainOn(0, fu, Cu) : lu._loop ? Yu.bufferSource.start(0, fu, 86400) : Yu.bufferSource.start(0, fu, Cu), bu !== 1 / 0 && (ju._endTimers[lu._id] = setTimeout(ju._ended.bind(ju, lu), bu)), Eu || setTimeout((function() {
                  ju._emit("play", lu._id), ju._loadQueue()
                }), 0)
              };
              "running" === Zu.state && "interrupted" !== Zu.ctx.state ? hu() : (ju._playLock = !0, ju.once("resume", hu), ju._clearTimer(lu._id))
            } else {
              var Du = function() {
                Yu.currentTime = fu, Yu.muted = lu._muted || ju._muted || Zu._muted || Yu.muted, Yu.volume = lu._volume * Zu.volume(), Yu.playbackRate = lu._rate;
                try {
                  var su = Yu.play();
                  if (su && "undefined" !== typeof Promise && (su instanceof Promise || "function" === typeof su.then) ? (ju._playLock = !0, Ou(), su.then((function() {
                      ju._playLock = !1, Yu._unlocked = !0, Eu ? ju._loadQueue() : ju._emit("play", lu._id)
                    })).catch((function() {
                      ju._playLock = !1, ju._emit("playerror", lu._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), lu._ended = !0, lu.aG = !0
                    }))) : Eu || (ju._playLock = !1, Ou(), ju._emit("play", lu._id)), Yu.playbackRate = lu._rate, Yu.paused) return void ju._emit("playerror", lu._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== uu || lu._loop ? ju._endTimers[lu._id] = setTimeout(ju._ended.bind(ju, lu), bu) : (ju._endTimers[lu._id] = function() {
                    ju._ended(lu), Yu.removeEventListener("ended", ju._endTimers[lu._id], !1)
                  }, Yu.addEventListener("ended", ju._endTimers[lu._id], !1))
                } catch (Uu) {
                  ju._emit("playerror", lu._id, Uu)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Yu.src && (Yu.src = ju._src, Yu.load());
              var gu = window && window.ejecta || !Yu.readyState && Zu._navigator.isCocoonJS;
              if (Yu.readyState >= 3 || gu) Du();
              else {
                ju._playLock = !0, ju._state = "loading";
                var Mu = function() {
                  ju._state = "loaded", Du(), Yu.removeEventListener(Zu._canPlayEvent, Mu, !1)
                };
                Yu.addEventListener(Zu._canPlayEvent, Mu, !1), ju._clearTimer(lu._id)
              }
            }
            return lu._id
          }
          ju._ended(lu)
        },
        pause: function(uu) {
          var Eu = this;
          if ("loaded" !== Eu._state || Eu._playLock) return Eu._queue.push({
            event: "pause",
            action: function() {
              Eu.pause(uu)
            }
          }), Eu;
          for (var ju = Eu._getSoundIds(uu), su = 0; su < ju.length; su++) {
            Eu._clearTimer(ju[su]);
            var Uu = Eu._soundById(ju[su]);
            if (Uu && !Uu.aG && (Uu._seek = Eu.seek(ju[su]), Uu._rateSeek = 0, Uu.aG = !0, Eu._stopFade(ju[su]), Uu._node))
              if (Eu._webAudio) {
                if (!Uu._node.bufferSource) continue;
                "undefined" === typeof Uu._node.bufferSource.stop ? Uu._node.bufferSource.noteOff(0) : Uu._node.bufferSource.stop(0), Eu._cleanBuffer(Uu._node)
              } else isNaN(Uu._node.duration) && Uu._node.duration !== 1 / 0 || Uu._node.pause();
            arguments[1] || Eu._emit("pause", Uu ? Uu._id : null)
          }
          return Eu
        },
        stop: function(uu, Eu) {
          var ju = this;
          if ("loaded" !== ju._state || ju._playLock) return ju._queue.push({
            event: "stop",
            action: function() {
              ju.stop(uu)
            }
          }), ju;
          for (var su = ju._getSoundIds(uu), Uu = 0; Uu < su.length; Uu++) {
            ju._clearTimer(su[Uu]);
            var Zu = ju._soundById(su[Uu]);
            Zu && (Zu._seek = Zu._start || 0, Zu._rateSeek = 0, Zu.aG = !0, Zu._ended = !0, ju._stopFade(su[Uu]), Zu._node && (ju._webAudio ? Zu._node.bufferSource && ("undefined" === typeof Zu._node.bufferSource.stop ? Zu._node.bufferSource.noteOff(0) : Zu._node.bufferSource.stop(0), ju._cleanBuffer(Zu._node)) : isNaN(Zu._node.duration) && Zu._node.duration !== 1 / 0 || (Zu._node.currentTime = Zu._start || 0, Zu._node.pause(), Zu._node.duration === 1 / 0 && ju._clearSound(Zu._node))), Eu || ju._emit("stop", Zu._id))
          }
          return ju
        },
        mute: function(uu, Eu) {
          var ju = this;
          if ("loaded" !== ju._state || ju._playLock) return ju._queue.push({
            event: "mute",
            action: function() {
              ju.mute(uu, Eu)
            }
          }), ju;
          if ("undefined" === typeof Eu) {
            if ("boolean" !== typeof uu) return ju._muted;
            ju._muted = uu
          }
          for (var su = ju._getSoundIds(Eu), Uu = 0; Uu < su.length; Uu++) {
            var Xu = ju._soundById(su[Uu]);
            Xu && (Xu._muted = uu, Xu._interval && ju._stopFade(Xu._id), ju._webAudio && Xu._node ? Xu._node.gain.setValueAtTime(uu ? 0 : Xu._volume, Zu.ctx.currentTime) : Xu._node && (Xu._node.muted = !!Zu._muted || uu), ju._emit("mute", Xu._id))
          }
          return ju
        },
        volume: function() {
          var uu, Eu, ju, su = this,
            Uu = arguments;
          if (0 === Uu.length) return su._volume;
          if (1 === Uu.length || 2 === Uu.length && "undefined" === typeof Uu[1] ? su._getSoundIds().indexOf(Uu[0]) >= 0 ? Eu = parseInt(Uu[0], 10) : uu = parseFloat(Uu[0]) : Uu.length >= 2 && (uu = parseFloat(Uu[0]), Eu = parseInt(Uu[1], 10)), !("undefined" !== typeof uu && uu >= 0 && uu <= 1)) return (ju = Eu ? su._soundById(Eu) : su._sounds[0]) ? ju._volume : 0;
          if ("loaded" !== su._state || su._playLock) return su._queue.push({
            event: "volume",
            action: function() {
              su.volume.apply(su, Uu)
            }
          }), su;
          "undefined" === typeof Eu && (su._volume = uu), Eu = su._getSoundIds(Eu);
          for (var Xu = 0; Xu < Eu.length; Xu++)(ju = su._soundById(Eu[Xu])) && (ju._volume = uu, Uu[2] || su._stopFade(Eu[Xu]), su._webAudio && ju._node && !ju._muted ? ju._node.gain.setValueAtTime(uu, Zu.ctx.currentTime) : ju._node && !ju._muted && (ju._node.volume = uu * Zu.volume()), su._emit("volume", ju._id));
          return su
        },
        fade: function(uu, Eu, ju, su) {
          var Uu = this;
          if ("loaded" !== Uu._state || Uu._playLock) return Uu._queue.push({
            event: "fade",
            action: function() {
              Uu.fade(uu, Eu, ju, su)
            }
          }), Uu;
          uu = Math.min(Math.max(0, parseFloat(uu)), 1), Eu = Math.min(Math.max(0, parseFloat(Eu)), 1), ju = parseFloat(ju), Uu.volume(uu, su);
          for (var Xu = Uu._getSoundIds(su), lu = 0; lu < Xu.length; lu++) {
            var qu = Uu._soundById(Xu[lu]);
            if (qu) {
              if (su || Uu._stopFade(Xu[lu]), Uu._webAudio && !qu._muted) {
                var fu = Zu.ctx.currentTime,
                  Cu = fu + ju / 1e3;
                qu._volume = uu, qu._node.gain.setValueAtTime(uu, fu), qu._node.gain.linearRampToValueAtTime(Eu, Cu)
              }
              Uu._startFadeInterval(qu, uu, Eu, ju, Xu[lu], "undefined" === typeof su)
            }
          }
          return Uu
        },
        _startFadeInterval: function(uu, Eu, ju, su, Uu, Zu) {
          var Xu = this,
            lu = Eu,
            qu = ju - Eu,
            fu = Math.abs(qu / .01),
            Cu = Math.max(4, fu > 0 ? su / fu : su),
            bu = Date.now();
          uu._fadeTo = ju, uu._interval = setInterval((function() {
            var Uu = (Date.now() - bu) / su;
            bu = Date.now(), lu += qu * Uu, lu = Math.round(100 * lu) / 100, lu = qu < 0 ? Math.max(ju, lu) : Math.min(ju, lu), Xu._webAudio ? uu._volume = lu : Xu.volume(lu, uu._id, !0), Zu && (Xu._volume = lu), (ju < Eu && lu <= ju || ju > Eu && lu >= ju) && (clearInterval(uu._interval), uu._interval = null, uu._fadeTo = null, Xu.volume(ju, uu._id), Xu._emit("fade", uu._id))
          }), Cu)
        },
        _stopFade: function(uu) {
          var Eu = this,
            ju = Eu._soundById(uu);
          return ju && ju._interval && (Eu._webAudio && ju._node.gain.cancelScheduledValues(Zu.ctx.currentTime), clearInterval(ju._interval), ju._interval = null, Eu.volume(ju._fadeTo, uu), ju._fadeTo = null, Eu._emit("fade", uu)), Eu
        },
        loop: function() {
          var uu, Eu, ju, su = this,
            Uu = arguments;
          if (0 === Uu.length) return su._loop;
          if (1 === Uu.length) {
            if ("boolean" !== typeof Uu[0]) return !!(ju = su._soundById(parseInt(Uu[0], 10))) && ju._loop;
            uu = Uu[0], su._loop = uu
          } else 2 === Uu.length && (uu = Uu[0], Eu = parseInt(Uu[1], 10));
          for (var Zu = su._getSoundIds(Eu), Xu = 0; Xu < Zu.length; Xu++)(ju = su._soundById(Zu[Xu])) && (ju._loop = uu, su._webAudio && ju._node && ju._node.bufferSource && (ju._node.bufferSource.loop = uu, uu && (ju._node.bufferSource.loopStart = ju._start || 0, ju._node.bufferSource.loopEnd = ju._stop, su.playing(Zu[Xu]) && (su.pause(Zu[Xu], !0), su.play(Zu[Xu], !0)))));
          return su
        },
        rate: function() {
          var uu, Eu, ju, su = this,
            Uu = arguments;
          if (0 === Uu.length) Eu = su._sounds[0]._id;
          else if (1 === Uu.length) {
            su._getSoundIds().indexOf(Uu[0]) >= 0 ? Eu = parseInt(Uu[0], 10) : uu = parseFloat(Uu[0])
          } else 2 === Uu.length && (uu = parseFloat(Uu[0]), Eu = parseInt(Uu[1], 10));
          if ("number" !== typeof uu) return (ju = su._soundById(Eu)) ? ju._rate : su._rate;
          if ("loaded" !== su._state || su._playLock) return su._queue.push({
            event: "rate",
            action: function() {
              su.rate.apply(su, Uu)
            }
          }), su;
          "undefined" === typeof Eu && (su._rate = uu), Eu = su._getSoundIds(Eu);
          for (var Xu = 0; Xu < Eu.length; Xu++)
            if (ju = su._soundById(Eu[Xu])) {
              su.playing(Eu[Xu]) && (ju._rateSeek = su.seek(Eu[Xu]), ju._playStart = su._webAudio ? Zu.ctx.currentTime : ju._playStart), ju._rate = uu, su._webAudio && ju._node && ju._node.bufferSource ? ju._node.bufferSource.playbackRate.setValueAtTime(uu, Zu.ctx.currentTime) : ju._node && (ju._node.playbackRate = uu);
              var lu = su.seek(Eu[Xu]),
                qu = 1e3 * ((su._sprite[ju._sprite][0] + su._sprite[ju._sprite][1]) / 1e3 - lu) / Math.abs(ju._rate);
              !su._endTimers[Eu[Xu]] && ju.aG || (su._clearTimer(Eu[Xu]), su._endTimers[Eu[Xu]] = setTimeout(su._ended.bind(su, ju), qu)), su._emit("rate", ju._id)
            } return su
        },
        seek: function() {
          var uu, Eu, ju = this,
            su = arguments;
          if (0 === su.length) ju._sounds.length && (Eu = ju._sounds[0]._id);
          else if (1 === su.length) {
            ju._getSoundIds().indexOf(su[0]) >= 0 ? Eu = parseInt(su[0], 10) : ju._sounds.length && (Eu = ju._sounds[0]._id, uu = parseFloat(su[0]))
          } else 2 === su.length && (uu = parseFloat(su[0]), Eu = parseInt(su[1], 10));
          if ("undefined" === typeof Eu) return 0;
          if ("number" === typeof uu && ("loaded" !== ju._state || ju._playLock)) return ju._queue.push({
            event: "seek",
            action: function() {
              ju.seek.apply(ju, su)
            }
          }), ju;
          var Uu = ju._soundById(Eu);
          if (Uu) {
            if (!("number" === typeof uu && uu >= 0)) {
              if (ju._webAudio) {
                var Xu = ju.playing(Eu) ? Zu.ctx.currentTime - Uu._playStart : 0,
                  lu = Uu._rateSeek ? Uu._rateSeek - Uu._seek : 0;
                return Uu._seek + (lu + Xu * Math.abs(Uu._rate))
              }
              return Uu._node.currentTime
            }
            var qu = ju.playing(Eu);
            qu && ju.pause(Eu, !0), Uu._seek = uu, Uu._ended = !1, ju._clearTimer(Eu), ju._webAudio || !Uu._node || isNaN(Uu._node.duration) || (Uu._node.currentTime = uu);
            var fu = function() {
              qu && ju.play(Eu, !0), ju._emit("seek", Eu)
            };
            if (qu && !ju._webAudio) {
              var Cu = function() {
                ju._playLock ? setTimeout(Cu, 0) : fu()
              };
              setTimeout(Cu, 0)
            } else fu()
          }
          return ju
        },
        playing: function(uu) {
          var Eu = this;
          if ("number" === typeof uu) {
            var ju = Eu._soundById(uu);
            return !!ju && !ju.aG
          }
          for (var su = 0; su < Eu._sounds.length; su++)
            if (!Eu._sounds[su].aG) return !0;
          return !1
        },
        duration: function(uu) {
          var Eu = this,
            ju = Eu._duration,
            su = Eu._soundById(uu);
          return su && (ju = Eu._sprite[su._sprite][1] / 1e3), ju
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var uu = this, Eu = uu._sounds, ju = 0; ju < Eu.length; ju++) Eu[ju].aG || uu.stop(Eu[ju]._id), uu._webAudio || (uu._clearSound(Eu[ju]._node), Eu[ju]._node.removeEventListener("error", Eu[ju]._errorFn, !1), Eu[ju]._node.removeEventListener(Zu._canPlayEvent, Eu[ju]._loadFn, !1), Eu[ju]._node.removeEventListener("ended", Eu[ju]._endFn, !1), Zu._releaseHtml5Audio(Eu[ju]._node)), delete Eu[ju]._node, uu._clearTimer(Eu[ju]._id);
          var su = Zu._howls.indexOf(uu);
          su >= 0 && Zu._howls.splice(su, 1);
          var Uu = !0;
          for (ju = 0; ju < Zu._howls.length; ju++)
            if (Zu._howls[ju]._src === uu._src || uu._src.indexOf(Zu._howls[ju]._src) >= 0) {
              Uu = !1;
              break
            } return qu && Uu && delete qu[uu._src], Zu.noAudio = !1, uu._state = "unloaded", uu._sounds = [], uu = null, null
        },
        on: function(uu, Eu, ju, su) {
          var Uu = this["_on" + uu];
          return "function" === typeof Eu && Uu.push(su ? {
            id: ju,
            yN: Eu,
            once: su
          } : {
            id: ju,
            yN: Eu
          }), this
        },
        off: function(uu, Eu, ju) {
          var su = this,
            Uu = su["_on" + uu],
            Zu = 0;
          if ("number" === typeof Eu && (ju = Eu, Eu = null), Eu || ju)
            for (Zu = 0; Zu < Uu.length; Zu++) {
              var Xu = ju === Uu[Zu].id;
              if (Eu === Uu[Zu].yN && Xu || !Eu && Xu) {
                Uu.splice(Zu, 1);
                break
              }
            } else if (uu) su["_on" + uu] = [];
            else {
              var lu = Object.keys(su);
              for (Zu = 0; Zu < lu.length; Zu++) 0 === lu[Zu].indexOf("_on") && Array.isArray(su[lu[Zu]]) && (su[lu[Zu]] = [])
            } return su
        },
        once: function(uu, Eu, ju) {
          return this.on(uu, Eu, ju, 1), this
        },
        _emit: function(uu, Eu, ju) {
          for (var su = this, Uu = su["_on" + uu], Zu = Uu.length - 1; Zu >= 0; Zu--) Uu[Zu].id && Uu[Zu].id !== Eu && "load" !== uu || (setTimeout(function(uu) {
            uu.call(this, Eu, ju)
          }.bind(su, Uu[Zu].yN), 0), Uu[Zu].once && su.off(uu, Uu[Zu].yN, Uu[Zu].id));
          return su._loadQueue(uu), su
        },
        _loadQueue: function(uu) {
          var Eu = this;
          if (Eu._queue.length > 0) {
            var ju = Eu._queue[0];
            ju.event === uu && (Eu._queue.shift(), Eu._loadQueue()), uu || ju.action()
          }
          return Eu
        },
        _ended: function(uu) {
          var Eu = this,
            ju = uu._sprite;
          if (!Eu._webAudio && uu._node && !uu._node.paused && !uu._node.ended && uu._node.currentTime < uu._stop) return setTimeout(Eu._ended.bind(Eu, uu), 100), Eu;
          var su = !(!uu._loop && !Eu._sprite[ju][2]);
          if (Eu._emit("end", uu._id), !Eu._webAudio && su && Eu.stop(uu._id, !0).play(uu._id), Eu._webAudio && su) {
            Eu._emit("play", uu._id), uu._seek = uu._start || 0, uu._rateSeek = 0, uu._playStart = Zu.ctx.currentTime;
            var Uu = 1e3 * (uu._stop - uu._start) / Math.abs(uu._rate);
            Eu._endTimers[uu._id] = setTimeout(Eu._ended.bind(Eu, uu), Uu)
          }
          return Eu._webAudio && !su && (uu.aG = !0, uu._ended = !0, uu._seek = uu._start || 0, uu._rateSeek = 0, Eu._clearTimer(uu._id), Eu._cleanBuffer(uu._node), Zu._autoSuspend()), Eu._webAudio || su || Eu.stop(uu._id, !0), Eu
        },
        _clearTimer: function(uu) {
          var Eu = this;
          if (Eu._endTimers[uu]) {
            if ("function" !== typeof Eu._endTimers[uu]) clearTimeout(Eu._endTimers[uu]);
            else {
              var ju = Eu._soundById(uu);
              ju && ju._node && ju._node.removeEventListener("ended", Eu._endTimers[uu], !1)
            }
            delete Eu._endTimers[uu]
          }
          return Eu
        },
        _soundById: function(uu) {
          for (var Eu = this, ju = 0; ju < Eu._sounds.length; ju++)
            if (uu === Eu._sounds[ju]._id) return Eu._sounds[ju];
          return null
        },
        _inactiveSound: function() {
          var uu = this;
          uu._drain();
          for (var Eu = 0; Eu < uu._sounds.length; Eu++)
            if (uu._sounds[Eu]._ended) return uu._sounds[Eu].reset();
          return new lu(uu)
        },
        _drain: function() {
          var uu = this,
            Eu = uu._pool,
            ju = 0,
            su = 0;
          if (!(uu._sounds.length < Eu)) {
            for (su = 0; su < uu._sounds.length; su++) uu._sounds[su]._ended && ju++;
            for (su = uu._sounds.length - 1; su >= 0; su--) {
              if (ju <= Eu) return;
              uu._sounds[su]._ended && (uu._webAudio && uu._sounds[su]._node && uu._sounds[su]._node.disconnect(0), uu._sounds.splice(su, 1), ju--)
            }
          }
        },
        _getSoundIds: function(uu) {
          if ("undefined" === typeof uu) {
            for (var Eu = [], ju = 0; ju < this._sounds.length; ju++) Eu.push(this._sounds[ju]._id);
            return Eu
          }
          return [uu]
        },
        _refreshBuffer: function(uu) {
          return uu._node.bufferSource = Zu.ctx.createBufferSource(), uu._node.bufferSource.buffer = qu[this._src], uu._panner ? uu._node.bufferSource.connect(uu._panner) : uu._node.bufferSource.connect(uu._node), uu._node.bufferSource.loop = uu._loop, uu._loop && (uu._node.bufferSource.loopStart = uu._start || 0, uu._node.bufferSource.loopEnd = uu._stop || 0), uu._node.bufferSource.playbackRate.setValueAtTime(uu._rate, Zu.ctx.currentTime), this
        },
        _cleanBuffer: function(uu) {
          var Eu = Zu._navigator && Zu._navigator.vendor.indexOf("Apple") >= 0;
          if (Zu._scratchBuffer && uu.bufferSource && (uu.bufferSource.onended = null, uu.bufferSource.disconnect(0), Eu)) try {
            uu.bufferSource.buffer = Zu._scratchBuffer
          } catch (ju) {}
          return uu.bufferSource = null, this
        },
        _clearSound: function(uu) {
          /MSIE |Trident\//.test(Zu._navigator && Zu._navigator.userAgent) || (uu.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var lu = function(uu) {
        this._parent = uu, this.init()
      };
      lu.prototype = {
        init: function() {
          var uu = this,
            Eu = uu._parent;
          return uu._muted = Eu._muted, uu._loop = Eu._loop, uu._volume = Eu._volume, uu._rate = Eu._rate, uu._seek = 0, uu.aG = !0, uu._ended = !0, uu._sprite = "__default", uu._id = ++Zu._counter, Eu._sounds.push(uu), uu.create(), uu
        },
        create: function() {
          var uu = this,
            Eu = uu._parent,
            ju = Zu._muted || uu._muted || uu._parent._muted ? 0 : uu._volume;
          return Eu._webAudio ? (uu._node = "undefined" === typeof Zu.ctx.createGain ? Zu.ctx.createGainNode() : Zu.ctx.createGain(), uu._node.gain.setValueAtTime(ju, Zu.ctx.currentTime), uu._node.paused = !0, uu._node.connect(Zu.masterGain)) : Zu.noAudio || (uu._node = Zu._obtainHtml5Audio(), uu._errorFn = uu._errorListener.bind(uu), uu._node.addEventListener("error", uu._errorFn, !1), uu._loadFn = uu._loadListener.bind(uu), uu._node.addEventListener(Zu._canPlayEvent, uu._loadFn, !1), uu._endFn = uu._endListener.bind(uu), uu._node.addEventListener("ended", uu._endFn, !1), uu._node.src = Eu._src, uu._node.preload = !0 === Eu._preload ? "auto" : Eu._preload, uu._node.volume = ju * Zu.volume(), uu._node.load()), uu
        },
        reset: function() {
          var uu = this,
            Eu = uu._parent;
          return uu._muted = Eu._muted, uu._loop = Eu._loop, uu._volume = Eu._volume, uu._rate = Eu._rate, uu._seek = 0, uu._rateSeek = 0, uu.aG = !0, uu._ended = !0, uu._sprite = "__default", uu._id = ++Zu._counter, uu
        },
        _errorListener: function() {
          var uu = this;
          uu._parent._emit("loaderror", uu._id, uu._node.error ? uu._node.error.code : 0), uu._node.removeEventListener("error", uu._errorFn, !1)
        },
        _loadListener: function() {
          var uu = this,
            Eu = uu._parent;
          Eu._duration = Math.ceil(10 * uu._node.duration) / 10, 0 === Object.keys(Eu._sprite).length && (Eu._sprite = {
            __default: [0, 1e3 * Eu._duration]
          }), "loaded" !== Eu._state && (Eu._state = "loaded", Eu._emit("load"), Eu._loadQueue()), uu._node.removeEventListener(Zu._canPlayEvent, uu._loadFn, !1)
        },
        _endListener: function() {
          var uu = this,
            Eu = uu._parent;
          Eu._duration === 1 / 0 && (Eu._duration = Math.ceil(10 * uu._node.duration) / 10, Eu._sprite.__default[1] === 1 / 0 && (Eu._sprite.__default[1] = 1e3 * Eu._duration), Eu._ended(uu)), uu._node.removeEventListener("ended", uu._endFn, !1)
        }
      };
      var qu = {},
        fu = function(uu) {
          var Eu = uu._src;
          if (qu[Eu]) return uu._duration = qu[Eu].duration, void cu(uu);
          if (/^data:[^;]+;base64,/.test(Eu)) {
            for (var ju = atob(Eu.split(",")[1]), su = new Uint8Array(ju.length), Uu = 0; Uu < ju.length; ++Uu) su[Uu] = ju.charCodeAt(Uu);
            bu(su.buffer, uu)
          } else {
            var Zu = new XMLHttpRequest;
            Zu.open(uu._xhr.method, Eu, !0), Zu.withCredentials = uu._xhr.withCredentials, Zu.responseType = "arraybuffer", uu._xhr.headers && Object.keys(uu._xhr.headers).forEach((function(Eu) {
              Zu.setRequestHeader(Eu, uu._xhr.headers[Eu])
            })), Zu.onload = function() {
              var Eu = (Zu.status + "")[0];
              "0" === Eu || "2" === Eu || "3" === Eu ? bu(Zu.response, uu) : uu._emit("loaderror", null, "Failed loading audio file with status: " + Zu.status + ".")
            }, Zu.onerror = function() {
              uu._webAudio && (uu._html5 = !0, uu._webAudio = !1, uu._sounds = [], delete qu[Eu], uu.load())
            }, Cu(Zu)
          }
        },
        Cu = function(uu) {
          try {
            uu.send()
          } catch (Eu) {
            uu.onerror()
          }
        },
        bu = function(uu, Eu) {
          var ju = function() {
              Eu._emit("loaderror", null, "Decoding audio data failed.")
            },
            su = function(uu) {
              uu && Eu._sounds.length > 0 ? (qu[Eu._src] = uu, cu(Eu, uu)) : ju()
            };
          "undefined" !== typeof Promise && 1 === Zu.ctx.decodeAudioData.length ? Zu.ctx.decodeAudioData(uu).then(su).catch(ju) : Zu.ctx.decodeAudioData(uu, su, ju)
        },
        cu = function(uu, Eu) {
          Eu && !uu._duration && (uu._duration = Eu.duration), 0 === Object.keys(uu._sprite).length && (uu._sprite = {
            __default: [0, 1e3 * uu._duration]
          }), "loaded" !== uu._state && (uu._state = "loaded", uu._emit("load"), uu._loadQueue())
        },
        Nu = function() {
          if (Zu.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Zu.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Zu.ctx = new webkitAudioContext : Zu.usingWebAudio = !1
            } catch (Uu) {
              Zu.usingWebAudio = !1
            }
            Zu.ctx || (Zu.usingWebAudio = !1);
            var uu = /iP(hone|od|ad)/.test(Zu._navigator && Zu._navigator.platform),
              Eu = Zu._navigator && Zu._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              ju = Eu ? parseInt(Eu[1], 10) : null;
            if (uu && ju && ju < 9) {
              var su = /safari/.test(Zu._navigator && Zu._navigator.userAgent.toLowerCase());
              Zu._navigator && !su && (Zu.usingWebAudio = !1)
            }
            Zu.usingWebAudio && (Zu.masterGain = "undefined" === typeof Zu.ctx.createGain ? Zu.ctx.createGainNode() : Zu.ctx.createGain(), Zu.masterGain.gain.setValueAtTime(Zu._muted ? 0 : Zu._volume, Zu.ctx.currentTime), Zu.masterGain.connect(Zu.ctx.destination)), Zu._setup()
          }
        };
      void 0 === (su = function() {
        return {
          Howler: Zu,
          Howl: Xu
        }
      }.apply(Eu, [])) || (uu.exports = su), Eu.Howler = Zu, Eu.Howl = Xu, "undefined" !== typeof ju.g ? (ju.g.HowlerGlobal = Uu, ju.g.Howler = Zu, ju.g.Howl = Xu, ju.g.Sound = lu) : "undefined" !== typeof window && (window.HowlerGlobal = Uu, window.Howler = Zu, window.Howl = Xu, window.Sound = lu)
    }(),
    function() {
      var uu;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(uu) {
        var Eu = this;
        if (!Eu.ctx || !Eu.ctx.listener) return Eu;
        for (var ju = Eu._howls.length - 1; ju >= 0; ju--) Eu._howls[ju].stereo(uu);
        return Eu
      }, HowlerGlobal.prototype.pos = function(uu, Eu, ju) {
        var su = this;
        return su.ctx && su.ctx.listener ? (Eu = "number" !== typeof Eu ? su._pos[1] : Eu, ju = "number" !== typeof ju ? su._pos[2] : ju, "number" !== typeof uu ? su._pos : (su._pos = [uu, Eu, ju], "undefined" !== typeof su.ctx.listener.positionX ? (su.ctx.listener.positionX.setTargetAtTime(su._pos[0], Howler.ctx.currentTime, .1), su.ctx.listener.positionY.setTargetAtTime(su._pos[1], Howler.ctx.currentTime, .1), su.ctx.listener.positionZ.setTargetAtTime(su._pos[2], Howler.ctx.currentTime, .1)) : su.ctx.listener.setPosition(su._pos[0], su._pos[1], su._pos[2]), su)) : su
      }, HowlerGlobal.prototype.orientation = function(uu, Eu, ju, su, Uu, Zu) {
        var Xu = this;
        if (!Xu.ctx || !Xu.ctx.listener) return Xu;
        var lu = Xu._orientation;
        return Eu = "number" !== typeof Eu ? lu[1] : Eu, ju = "number" !== typeof ju ? lu[2] : ju, su = "number" !== typeof su ? lu[3] : su, Uu = "number" !== typeof Uu ? lu[4] : Uu, Zu = "number" !== typeof Zu ? lu[5] : Zu, "number" !== typeof uu ? lu : (Xu._orientation = [uu, Eu, ju, su, Uu, Zu], "undefined" !== typeof Xu.ctx.listener.forwardX ? (Xu.ctx.listener.forwardX.setTargetAtTime(uu, Howler.ctx.currentTime, .1), Xu.ctx.listener.forwardY.setTargetAtTime(Eu, Howler.ctx.currentTime, .1), Xu.ctx.listener.forwardZ.setTargetAtTime(ju, Howler.ctx.currentTime, .1), Xu.ctx.listener.upX.setTargetAtTime(su, Howler.ctx.currentTime, .1), Xu.ctx.listener.upY.setTargetAtTime(Uu, Howler.ctx.currentTime, .1), Xu.ctx.listener.upZ.setTargetAtTime(Zu, Howler.ctx.currentTime, .1)) : Xu.ctx.listener.setOrientation(uu, Eu, ju, su, Uu, Zu), Xu)
      }, Howl.prototype.init = (uu = Howl.prototype.init, function(Eu) {
        var ju = this;
        return ju._orientation = Eu.orientation || [1, 0, 0], ju._stereo = Eu.stereo || null, ju._pos = Eu.pos || null, ju._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Eu.coneInnerAngle ? Eu.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Eu.coneOuterAngle ? Eu.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Eu.coneOuterGain ? Eu.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Eu.distanceModel ? Eu.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Eu.maxDistance ? Eu.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Eu.panningModel ? Eu.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Eu.refDistance ? Eu.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Eu.rolloffFactor ? Eu.rolloffFactor : 1
        }, ju._onstereo = Eu.onstereo ? [{
          yN: Eu.onstereo
        }] : [], ju._onpos = Eu.onpos ? [{
          yN: Eu.onpos
        }] : [], ju._onorientation = Eu.onorientation ? [{
          yN: Eu.onorientation
        }] : [], uu.call(this, Eu)
      }), Howl.prototype.stereo = function(uu, ju) {
        var su = this;
        if (!su._webAudio) return su;
        if ("loaded" !== su._state) return su._queue.push({
          event: "stereo",
          action: function() {
            su.stereo(uu, ju)
          }
        }), su;
        var Uu = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof ju) {
          if ("number" !== typeof uu) return su._stereo;
          su._stereo = uu, su._pos = [uu, 0, 0]
        }
        for (var Zu = su._getSoundIds(ju), Xu = 0; Xu < Zu.length; Xu++) {
          var lu = su._soundById(Zu[Xu]);
          if (lu) {
            if ("number" !== typeof uu) return lu._stereo;
            lu._stereo = uu, lu._pos = [uu, 0, 0], lu._node && (lu._pannerAttr.panningModel = "equalpower", lu._panner && lu._panner.pan || Eu(lu, Uu), "spatial" === Uu ? "undefined" !== typeof lu._panner.positionX ? (lu._panner.positionX.setValueAtTime(uu, Howler.ctx.currentTime), lu._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), lu._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : lu._panner.setPosition(uu, 0, 0) : lu._panner.pan.setValueAtTime(uu, Howler.ctx.currentTime)), su._emit("stereo", lu._id)
          }
        }
        return su
      }, Howl.prototype.pos = function(uu, ju, su, Uu) {
        var Zu = this;
        if (!Zu._webAudio) return Zu;
        if ("loaded" !== Zu._state) return Zu._queue.push({
          event: "pos",
          action: function() {
            Zu.pos(uu, ju, su, Uu)
          }
        }), Zu;
        if (ju = "number" !== typeof ju ? 0 : ju, su = "number" !== typeof su ? -.5 : su, "undefined" === typeof Uu) {
          if ("number" !== typeof uu) return Zu._pos;
          Zu._pos = [uu, ju, su]
        }
        for (var Xu = Zu._getSoundIds(Uu), lu = 0; lu < Xu.length; lu++) {
          var qu = Zu._soundById(Xu[lu]);
          if (qu) {
            if ("number" !== typeof uu) return qu._pos;
            qu._pos = [uu, ju, su], qu._node && (qu._panner && !qu._panner.pan || Eu(qu, "spatial"), "undefined" !== typeof qu._panner.positionX ? (qu._panner.positionX.setValueAtTime(uu, Howler.ctx.currentTime), qu._panner.positionY.setValueAtTime(ju, Howler.ctx.currentTime), qu._panner.positionZ.setValueAtTime(su, Howler.ctx.currentTime)) : qu._panner.setPosition(uu, ju, su)), Zu._emit("pos", qu._id)
          }
        }
        return Zu
      }, Howl.prototype.orientation = function(uu, ju, su, Uu) {
        var Zu = this;
        if (!Zu._webAudio) return Zu;
        if ("loaded" !== Zu._state) return Zu._queue.push({
          event: "orientation",
          action: function() {
            Zu.orientation(uu, ju, su, Uu)
          }
        }), Zu;
        if (ju = "number" !== typeof ju ? Zu._orientation[1] : ju, su = "number" !== typeof su ? Zu._orientation[2] : su, "undefined" === typeof Uu) {
          if ("number" !== typeof uu) return Zu._orientation;
          Zu._orientation = [uu, ju, su]
        }
        for (var Xu = Zu._getSoundIds(Uu), lu = 0; lu < Xu.length; lu++) {
          var qu = Zu._soundById(Xu[lu]);
          if (qu) {
            if ("number" !== typeof uu) return qu._orientation;
            qu._orientation = [uu, ju, su], qu._node && (qu._panner || (qu._pos || (qu._pos = Zu._pos || [0, 0, -.5]), Eu(qu, "spatial")), "undefined" !== typeof qu._panner.orientationX ? (qu._panner.orientationX.setValueAtTime(uu, Howler.ctx.currentTime), qu._panner.orientationY.setValueAtTime(ju, Howler.ctx.currentTime), qu._panner.orientationZ.setValueAtTime(su, Howler.ctx.currentTime)) : qu._panner.setOrientation(uu, ju, su)), Zu._emit("orientation", qu._id)
          }
        }
        return Zu
      }, Howl.prototype.pannerAttr = function() {
        var uu, ju, su, Uu = this,
          Zu = arguments;
        if (!Uu._webAudio) return Uu;
        if (0 === Zu.length) return Uu._pannerAttr;
        if (1 === Zu.length) {
          if ("object" !== typeof Zu[0]) return (su = Uu._soundById(parseInt(Zu[0], 10))) ? su._pannerAttr : Uu._pannerAttr;
          uu = Zu[0], "undefined" === typeof ju && (uu.pannerAttr || (uu.pannerAttr = {
            coneInnerAngle: uu.coneInnerAngle,
            coneOuterAngle: uu.coneOuterAngle,
            coneOuterGain: uu.coneOuterGain,
            distanceModel: uu.distanceModel,
            maxDistance: uu.maxDistance,
            refDistance: uu.refDistance,
            rolloffFactor: uu.rolloffFactor,
            panningModel: uu.panningModel
          }), Uu._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof uu.pannerAttr.coneInnerAngle ? uu.pannerAttr.coneInnerAngle : Uu._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof uu.pannerAttr.coneOuterAngle ? uu.pannerAttr.coneOuterAngle : Uu._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof uu.pannerAttr.coneOuterGain ? uu.pannerAttr.coneOuterGain : Uu._coneOuterGain,
            distanceModel: "undefined" !== typeof uu.pannerAttr.distanceModel ? uu.pannerAttr.distanceModel : Uu._distanceModel,
            maxDistance: "undefined" !== typeof uu.pannerAttr.maxDistance ? uu.pannerAttr.maxDistance : Uu._maxDistance,
            refDistance: "undefined" !== typeof uu.pannerAttr.refDistance ? uu.pannerAttr.refDistance : Uu._refDistance,
            rolloffFactor: "undefined" !== typeof uu.pannerAttr.rolloffFactor ? uu.pannerAttr.rolloffFactor : Uu._rolloffFactor,
            panningModel: "undefined" !== typeof uu.pannerAttr.panningModel ? uu.pannerAttr.panningModel : Uu._panningModel
          })
        } else 2 === Zu.length && (uu = Zu[0], ju = parseInt(Zu[1], 10));
        for (var Xu = Uu._getSoundIds(ju), lu = 0; lu < Xu.length; lu++)
          if (su = Uu._soundById(Xu[lu])) {
            var qu = su._pannerAttr;
            qu = {
              coneInnerAngle: "undefined" !== typeof uu.coneInnerAngle ? uu.coneInnerAngle : qu.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof uu.coneOuterAngle ? uu.coneOuterAngle : qu.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof uu.coneOuterGain ? uu.coneOuterGain : qu.coneOuterGain,
              distanceModel: "undefined" !== typeof uu.distanceModel ? uu.distanceModel : qu.distanceModel,
              maxDistance: "undefined" !== typeof uu.maxDistance ? uu.maxDistance : qu.maxDistance,
              refDistance: "undefined" !== typeof uu.refDistance ? uu.refDistance : qu.refDistance,
              rolloffFactor: "undefined" !== typeof uu.rolloffFactor ? uu.rolloffFactor : qu.rolloffFactor,
              panningModel: "undefined" !== typeof uu.panningModel ? uu.panningModel : qu.panningModel
            };
            var fu = su._panner;
            fu ? (fu.coneInnerAngle = qu.coneInnerAngle, fu.coneOuterAngle = qu.coneOuterAngle, fu.coneOuterGain = qu.coneOuterGain, fu.distanceModel = qu.distanceModel, fu.maxDistance = qu.maxDistance, fu.refDistance = qu.refDistance, fu.rolloffFactor = qu.rolloffFactor, fu.panningModel = qu.panningModel) : (su._pos || (su._pos = Uu._pos || [0, 0, -.5]), Eu(su, "spatial"))
          } return Uu
      }, Sound.prototype.init = function(uu) {
        return function() {
          var Eu = this,
            ju = Eu._parent;
          Eu._orientation = ju._orientation, Eu._stereo = ju._stereo, Eu._pos = ju._pos, Eu._pannerAttr = ju._pannerAttr, uu.call(this), Eu._stereo ? ju.stereo(Eu._stereo) : Eu._pos && ju.pos(Eu._pos[0], Eu._pos[1], Eu._pos[2], Eu._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(uu) {
        return function() {
          var Eu = this,
            ju = Eu._parent;
          return Eu._orientation = ju._orientation, Eu._stereo = ju._stereo, Eu._pos = ju._pos, Eu._pannerAttr = ju._pannerAttr, Eu._stereo ? ju.stereo(Eu._stereo) : Eu._pos ? ju.pos(Eu._pos[0], Eu._pos[1], Eu._pos[2], Eu._id) : Eu._panner && (Eu._panner.disconnect(0), Eu._panner = void 0, ju._refreshBuffer(Eu)), uu.call(this)
        }
      }(Sound.prototype.reset);
      var Eu = function(uu, Eu) {
        "spatial" === (Eu = Eu || "spatial") ? (uu._panner = Howler.ctx.createPanner(), uu._panner.coneInnerAngle = uu._pannerAttr.coneInnerAngle, uu._panner.coneOuterAngle = uu._pannerAttr.coneOuterAngle, uu._panner.coneOuterGain = uu._pannerAttr.coneOuterGain, uu._panner.distanceModel = uu._pannerAttr.distanceModel, uu._panner.maxDistance = uu._pannerAttr.maxDistance, uu._panner.refDistance = uu._pannerAttr.refDistance, uu._panner.rolloffFactor = uu._pannerAttr.rolloffFactor, uu._panner.panningModel = uu._pannerAttr.panningModel, "undefined" !== typeof uu._panner.positionX ? (uu._panner.positionX.setValueAtTime(uu._pos[0], Howler.ctx.currentTime), uu._panner.positionY.setValueAtTime(uu._pos[1], Howler.ctx.currentTime), uu._panner.positionZ.setValueAtTime(uu._pos[2], Howler.ctx.currentTime)) : uu._panner.setPosition(uu._pos[0], uu._pos[1], uu._pos[2]), "undefined" !== typeof uu._panner.orientationX ? (uu._panner.orientationX.setValueAtTime(uu._orientation[0], Howler.ctx.currentTime), uu._panner.orientationY.setValueAtTime(uu._orientation[1], Howler.ctx.currentTime), uu._panner.orientationZ.setValueAtTime(uu._orientation[2], Howler.ctx.currentTime)) : uu._panner.setOrientation(uu._orientation[0], uu._orientation[1], uu._orientation[2])) : (uu._panner = Howler.ctx.createStereoPanner(), uu._panner.pan.setValueAtTime(uu._stereo, Howler.ctx.currentTime)), uu._panner.connect(uu._node), uu.aG || uu._parent.pause(uu._id, !0).play(uu._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);