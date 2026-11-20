/*! For license information please see q3ynmh.94.ce661fb7.chunk.js.LICENSE.txt */
export const id = 94;
export const ids = [94];
export const modules = {
  4638: (uu, Ru, yu) => {
    var Eu;
    ! function() {
      var Ku = function() {
        this.init()
      };
      Ku.prototype = {
        init: function() {
          var uu = this || Qu;
          return uu._counter = 1e3, uu._html5AudioPool = [], uu.html5PoolSize = 10, uu._codecs = {}, uu._howls = [], uu._muted = !1, uu._volume = 1, uu._canPlayEvent = "canplaythrough", uu._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, uu.masterGain = null, uu.noAudio = !1, uu.usingWebAudio = !0, uu.autoSuspend = !0, uu.ctx = null, uu.autoUnlock = !0, uu._setup(), uu
        },
        volume: function(uu) {
          var Ru = this || Qu;
          if (uu = parseFloat(uu), Ru.ctx || xu(), "undefined" !== typeof uu && uu >= 0 && uu <= 1) {
            if (Ru._volume = uu, Ru._muted) return Ru;
            Ru.usingWebAudio && Ru.masterGain.gain.setValueAtTime(uu, Qu.ctx.currentTime);
            for (var yu = 0; yu < Ru._howls.length; yu++)
              if (!Ru._howls[yu]._webAudio)
                for (var Eu = Ru._howls[yu]._getSoundIds(), Ku = 0; Ku < Eu.length; Ku++) {
                  var mu = Ru._howls[yu]._soundById(Eu[Ku]);
                  mu && mu._node && (mu._node.volume = mu._volume * uu)
                }
            return Ru
          }
          return Ru._volume
        },
        mute: function(uu) {
          var Ru = this || Qu;
          Ru.ctx || xu(), Ru._muted = uu, Ru.usingWebAudio && Ru.masterGain.gain.setValueAtTime(uu ? 0 : Ru._volume, Qu.ctx.currentTime);
          for (var yu = 0; yu < Ru._howls.length; yu++)
            if (!Ru._howls[yu]._webAudio)
              for (var Eu = Ru._howls[yu]._getSoundIds(), Ku = 0; Ku < Eu.length; Ku++) {
                var mu = Ru._howls[yu]._soundById(Eu[Ku]);
                mu && mu._node && (mu._node.muted = !!uu || mu._muted)
              }
          return Ru
        },
        stop: function() {
          for (var uu = this || Qu, Ru = 0; Ru < uu._howls.length; Ru++) uu._howls[Ru].stop();
          return uu
        },
        unload: function() {
          for (var uu = this || Qu, Ru = uu._howls.length - 1; Ru >= 0; Ru--) uu._howls[Ru].unload();
          return uu.usingWebAudio && uu.ctx && "undefined" !== typeof uu.ctx.close && (uu.ctx.close(), uu.ctx = null, xu()), uu
        },
        codecs: function(uu) {
          return (this || Qu)._codecs[uu.replace(/^x-/, "")]
        },
        _setup: function() {
          var uu = this || Qu;
          if (uu.state = uu.ctx && uu.ctx.state || "suspended", uu._autoSuspend(), !uu.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (uu._canPlayEvent = "canplay")
            } catch (Ru) {
              uu.noAudio = !0
            } else uu.noAudio = !0;
          try {
            (new Audio).muted && (uu.noAudio = !0)
          } catch (Ru) {}
          return uu.noAudio || uu._setupCodecs(), uu
        },
        _setupCodecs: function() {
          var uu = this || Qu,
            Ru = null;
          try {
            Ru = "undefined" !== typeof Audio ? new Audio : null
          } catch (Vu) {
            return uu
          }
          if (!Ru || "function" !== typeof Ru.canPlayType) return uu;
          var yu = Ru.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Eu = uu._navigator ? uu._navigator.userAgent : "",
            Ku = Eu.match(/OPR\/([0-6].)/g),
            mu = Ku && parseInt(Ku[0].split("/")[1], 10) < 33,
            Ju = -1 !== Eu.indexOf("Safari") && -1 === Eu.indexOf("Chrome"),
            Nu = Eu.match(/Version\/(.*?) /),
            Xu = Ju && Nu && parseInt(Nu[1], 10) < 15;
          return uu._codecs = {
            mp3: !(mu || !yu && !Ru.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!yu,
            opus: !!Ru.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Ru.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Ru.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Ru.canPlayType('audio/wav; codecs="1"') || Ru.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Ru.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Ru.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Ru.canPlayType("audio/x-m4a;") || Ru.canPlayType("audio/m4a;") || Ru.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Ru.canPlayType("audio/x-m4b;") || Ru.canPlayType("audio/m4b;") || Ru.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Ru.canPlayType("audio/x-mp4;") || Ru.canPlayType("audio/mp4;") || Ru.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Xu || !Ru.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Xu || !Ru.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Ru.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Ru.canPlayType("audio/x-flac;") || Ru.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, uu
        },
        _unlockAudio: function() {
          var uu = this || Qu;
          if (!uu._audioUnlocked && uu.ctx) {
            uu._audioUnlocked = !1, uu.autoUnlock = !1, uu._mobileUnloaded || 44100 === uu.ctx.sampleRate || (uu._mobileUnloaded = !0, uu.unload()), uu._scratchBuffer = uu.ctx.createBuffer(1, 1, 22050);
            var Ru = function(yu) {
              for (; uu._html5AudioPool.length < uu.html5PoolSize;) try {
                var Eu = new Audio;
                Eu._unlocked = !0, uu._releaseHtml5Audio(Eu)
              } catch (yu) {
                uu.noAudio = !0;
                break
              }
              for (var Ku = 0; Ku < uu._howls.length; Ku++)
                if (!uu._howls[Ku]._webAudio)
                  for (var Qu = uu._howls[Ku]._getSoundIds(), mu = 0; mu < Qu.length; mu++) {
                    var Ju = uu._howls[Ku]._soundById(Qu[mu]);
                    Ju && Ju._node && !Ju._node._unlocked && (Ju._node._unlocked = !0, Ju._node.load())
                  }
              uu._autoResume();
              var Nu = uu.ctx.createBufferSource();
              Nu.buffer = uu._scratchBuffer, Nu.connect(uu.ctx.destination), "undefined" === typeof Nu.start ? Nu.noteOn(0) : Nu.start(0), "function" === typeof uu.ctx.resume && uu.ctx.resume(), Nu.onended = function() {
                Nu.disconnect(0), uu._audioUnlocked = !0, document.removeEventListener("touchstart", Ru, !0), document.removeEventListener("touchend", Ru, !0), document.removeEventListener("click", Ru, !0), document.removeEventListener("keydown", Ru, !0);
                for (var yu = 0; yu < uu._howls.length; yu++) uu._howls[yu]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Ru, !0), document.addEventListener("touchend", Ru, !0), document.addEventListener("click", Ru, !0), document.addEventListener("keydown", Ru, !0), uu
          }
        },
        _obtainHtml5Audio: function() {
          var uu = this || Qu;
          if (uu._html5AudioPool.length) return uu._html5AudioPool.pop();
          var Ru = (new Audio).play();
          return Ru && "undefined" !== typeof Promise && (Ru instanceof Promise || "function" === typeof Ru.then) && Ru.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(uu) {
          var Ru = this || Qu;
          return uu._unlocked && Ru._html5AudioPool.push(uu), Ru
        },
        _autoSuspend: function() {
          var uu = this;
          if (uu.autoSuspend && uu.ctx && "undefined" !== typeof uu.ctx.suspend && Qu.usingWebAudio) {
            for (var Ru = 0; Ru < uu._howls.length; Ru++)
              if (uu._howls[Ru]._webAudio)
                for (var yu = 0; yu < uu._howls[Ru]._sounds.length; yu++)
                  if (!uu._howls[Ru]._sounds[yu].iH) return uu;
            return uu._suspendTimer && clearTimeout(uu._suspendTimer), uu._suspendTimer = setTimeout((function() {
              if (uu.autoSuspend) {
                uu._suspendTimer = null, uu.state = "suspending";
                var Ru = function() {
                  uu.state = "suspended", uu._resumeAfterSuspend && (delete uu._resumeAfterSuspend, uu._autoResume())
                };
                uu.ctx.suspend().then(Ru, Ru)
              }
            }), 3e4), uu
          }
        },
        _autoResume: function() {
          var uu = this;
          if (uu.ctx && "undefined" !== typeof uu.ctx.resume && Qu.usingWebAudio) return "running" === uu.state && "interrupted" !== uu.ctx.state && uu._suspendTimer ? (clearTimeout(uu._suspendTimer), uu._suspendTimer = null) : "suspended" === uu.state || "running" === uu.state && "interrupted" === uu.ctx.state ? (uu.ctx.resume().then((function() {
            uu.state = "running";
            for (var Ru = 0; Ru < uu._howls.length; Ru++) uu._howls[Ru]._emit("resume")
          })), uu._suspendTimer && (clearTimeout(uu._suspendTimer), uu._suspendTimer = null)) : "suspending" === uu.state && (uu._resumeAfterSuspend = !0), uu
        }
      };
      var Qu = new Ku,
        mu = function(uu) {
          uu.src && 0 !== uu.src.length ? this.init(uu) : console.error("An array of source files must be passed with any new Howl.")
        };
      mu.prototype = {
        init: function(uu) {
          var Ru = this;
          return Qu.ctx || xu(), Ru._autoplay = uu.autoplay || !1, Ru._format = "string" !== typeof uu.format ? uu.format : [uu.format], Ru._html5 = uu.html5 || !1, Ru._muted = uu.mute || !1, Ru._loop = uu.loop || !1, Ru._pool = uu.pool || 5, Ru._preload = "boolean" !== typeof uu.preload && "metadata" !== uu.preload || uu.preload, Ru._rate = uu.rate || 1, Ru._sprite = uu.sprite || {}, Ru._src = "string" !== typeof uu.src ? uu.src : [uu.src], Ru._volume = void 0 !== uu.volume ? uu.volume : 1, Ru._xhr = {
            method: uu.xhr && uu.xhr.method ? uu.xhr.method : "GET",
            headers: uu.xhr && uu.xhr.headers ? uu.xhr.headers : null,
            withCredentials: !(!uu.xhr || !uu.xhr.withCredentials) && uu.xhr.withCredentials
          }, Ru._duration = 0, Ru._state = "unloaded", Ru._sounds = [], Ru._endTimers = {}, Ru._queue = [], Ru._playLock = !1, Ru._onend = uu.onend ? [{
            qx: uu.onend
          }] : [], Ru._onfade = uu.onfade ? [{
            qx: uu.onfade
          }] : [], Ru._onload = uu.onload ? [{
            qx: uu.onload
          }] : [], Ru._onloaderror = uu.onloaderror ? [{
            qx: uu.onloaderror
          }] : [], Ru._onplayerror = uu.onplayerror ? [{
            qx: uu.onplayerror
          }] : [], Ru._onpause = uu.onpause ? [{
            qx: uu.onpause
          }] : [], Ru._onplay = uu.onplay ? [{
            qx: uu.onplay
          }] : [], Ru._onstop = uu.onstop ? [{
            qx: uu.onstop
          }] : [], Ru._onmute = uu.onmute ? [{
            qx: uu.onmute
          }] : [], Ru._onvolume = uu.onvolume ? [{
            qx: uu.onvolume
          }] : [], Ru._onrate = uu.onrate ? [{
            qx: uu.onrate
          }] : [], Ru._onseek = uu.onseek ? [{
            qx: uu.onseek
          }] : [], Ru._onunlock = uu.onunlock ? [{
            qx: uu.onunlock
          }] : [], Ru._onresume = [], Ru._webAudio = Qu.usingWebAudio && !Ru._html5, "undefined" !== typeof Qu.ctx && Qu.ctx && Qu.autoUnlock && Qu._unlockAudio(), Qu._howls.push(Ru), Ru._autoplay && Ru._queue.push({
            event: "play",
            action: function() {
              Ru.play()
            }
          }), Ru._preload && "none" !== Ru._preload && Ru.load(), Ru
        },
        load: function() {
          var uu = this,
            Ru = null;
          if (Qu.noAudio) uu._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof uu._src && (uu._src = [uu._src]);
            for (var yu = 0; yu < uu._src.length; yu++) {
              var Eu, Ku;
              if (uu._format && uu._format[yu]) Eu = uu._format[yu];
              else {
                if ("string" !== typeof(Ku = uu._src[yu])) {
                  uu._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Eu = /^data:audio\/([^;,]+);/i.exec(Ku)) || (Eu = /\.([^.]+)$/.exec(Ku.split("?", 1)[0])), Eu && (Eu = Eu[1].toLowerCase())
              }
              if (Eu || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Eu && Qu.codecs(Eu)) {
                Ru = uu._src[yu];
                break
              }
            }
            if (Ru) return uu._src = Ru, uu._state = "loading", "https:" === window.location.protocol && "http:" === Ru.slice(0, 5) && (uu._html5 = !0, uu._webAudio = !1), new Ju(uu), uu._webAudio && Xu(uu), uu;
            uu._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(uu, Ru) {
          var yu = this,
            Eu = null;
          if ("number" === typeof uu) Eu = uu, uu = null;
          else {
            if ("string" === typeof uu && "loaded" === yu._state && !yu._sprite[uu]) return null;
            if ("undefined" === typeof uu && (uu = "__default", !yu._playLock)) {
              for (var Ku = 0, mu = 0; mu < yu._sounds.length; mu++) yu._sounds[mu].iH && !yu._sounds[mu]._ended && (Ku++, Eu = yu._sounds[mu]._id);
              1 === Ku ? uu = null : Eu = null
            }
          }
          var Ju = Eu ? yu._soundById(Eu) : yu._inactiveSound();
          if (!Ju) return null;
          if (Eu && !uu && (uu = Ju._sprite || "__default"), "loaded" !== yu._state) {
            Ju._sprite = uu, Ju._ended = !1;
            var Nu = Ju._id;
            return yu._queue.push({
              event: "play",
              action: function() {
                yu.play(Nu)
              }
            }), Nu
          }
          if (Eu && !Ju.iH) return Ru || yu._loadQueue("play"), Ju._id;
          yu._webAudio && Qu._autoResume();
          var Xu = Math.max(0, Ju._seek > 0 ? Ju._seek : yu._sprite[uu][0] / 1e3),
            Vu = Math.max(0, (yu._sprite[uu][0] + yu._sprite[uu][1]) / 1e3 - Xu),
            ru = 1e3 * Vu / Math.abs(Ju._rate),
            Bu = yu._sprite[uu][0] / 1e3,
            xu = (yu._sprite[uu][0] + yu._sprite[uu][1]) / 1e3;
          Ju._sprite = uu, Ju._ended = !1;
          var Su = function() {
            Ju.iH = !1, Ju._seek = Xu, Ju._start = Bu, Ju._stop = xu, Ju._loop = !(!Ju._loop && !yu._sprite[uu][2])
          };
          if (!(Xu >= xu)) {
            var pu = Ju._node;
            if (yu._webAudio) {
              var Tu = function() {
                yu._playLock = !1, Su(), yu._refreshBuffer(Ju);
                var uu = Ju._muted || yu._muted ? 0 : Ju._volume;
                pu.gain.setValueAtTime(uu, Qu.ctx.currentTime), Ju._playStart = Qu.ctx.currentTime, "undefined" === typeof pu.bufferSource.start ? Ju._loop ? pu.bufferSource.noteGrainOn(0, Xu, 86400) : pu.bufferSource.noteGrainOn(0, Xu, Vu) : Ju._loop ? pu.bufferSource.start(0, Xu, 86400) : pu.bufferSource.start(0, Xu, Vu), ru !== 1 / 0 && (yu._endTimers[Ju._id] = setTimeout(yu._ended.bind(yu, Ju), ru)), Ru || setTimeout((function() {
                  yu._emit("play", Ju._id), yu._loadQueue()
                }), 0)
              };
              "running" === Qu.state && "interrupted" !== Qu.ctx.state ? Tu() : (yu._playLock = !0, yu.once("resume", Tu), yu._clearTimer(Ju._id))
            } else {
              var Wu = function() {
                pu.currentTime = Xu, pu.muted = Ju._muted || yu._muted || Qu._muted || pu.muted, pu.volume = Ju._volume * Qu.volume(), pu.playbackRate = Ju._rate;
                try {
                  var Eu = pu.play();
                  if (Eu && "undefined" !== typeof Promise && (Eu instanceof Promise || "function" === typeof Eu.then) ? (yu._playLock = !0, Su(), Eu.then((function() {
                      yu._playLock = !1, pu._unlocked = !0, Ru ? yu._loadQueue() : yu._emit("play", Ju._id)
                    })).catch((function() {
                      yu._playLock = !1, yu._emit("playerror", Ju._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), Ju._ended = !0, Ju.iH = !0
                    }))) : Ru || (yu._playLock = !1, Su(), yu._emit("play", Ju._id)), pu.playbackRate = Ju._rate, pu.paused) return void yu._emit("playerror", Ju._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== uu || Ju._loop ? yu._endTimers[Ju._id] = setTimeout(yu._ended.bind(yu, Ju), ru) : (yu._endTimers[Ju._id] = function() {
                    yu._ended(Ju), pu.removeEventListener("ended", yu._endTimers[Ju._id], !1)
                  }, pu.addEventListener("ended", yu._endTimers[Ju._id], !1))
                } catch (Ku) {
                  yu._emit("playerror", Ju._id, Ku)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === pu.src && (pu.src = yu._src, pu.load());
              var ju = window && window.ejecta || !pu.readyState && Qu._navigator.isCocoonJS;
              if (pu.readyState >= 3 || ju) Wu();
              else {
                yu._playLock = !0, yu._state = "loading";
                var Hu = function() {
                  yu._state = "loaded", Wu(), pu.removeEventListener(Qu._canPlayEvent, Hu, !1)
                };
                pu.addEventListener(Qu._canPlayEvent, Hu, !1), yu._clearTimer(Ju._id)
              }
            }
            return Ju._id
          }
          yu._ended(Ju)
        },
        pause: function(uu) {
          var Ru = this;
          if ("loaded" !== Ru._state || Ru._playLock) return Ru._queue.push({
            event: "pause",
            action: function() {
              Ru.pause(uu)
            }
          }), Ru;
          for (var yu = Ru._getSoundIds(uu), Eu = 0; Eu < yu.length; Eu++) {
            Ru._clearTimer(yu[Eu]);
            var Ku = Ru._soundById(yu[Eu]);
            if (Ku && !Ku.iH && (Ku._seek = Ru.seek(yu[Eu]), Ku._rateSeek = 0, Ku.iH = !0, Ru._stopFade(yu[Eu]), Ku._node))
              if (Ru._webAudio) {
                if (!Ku._node.bufferSource) continue;
                "undefined" === typeof Ku._node.bufferSource.stop ? Ku._node.bufferSource.noteOff(0) : Ku._node.bufferSource.stop(0), Ru._cleanBuffer(Ku._node)
              } else isNaN(Ku._node.duration) && Ku._node.duration !== 1 / 0 || Ku._node.pause();
            arguments[1] || Ru._emit("pause", Ku ? Ku._id : null)
          }
          return Ru
        },
        stop: function(uu, Ru) {
          var yu = this;
          if ("loaded" !== yu._state || yu._playLock) return yu._queue.push({
            event: "stop",
            action: function() {
              yu.stop(uu)
            }
          }), yu;
          for (var Eu = yu._getSoundIds(uu), Ku = 0; Ku < Eu.length; Ku++) {
            yu._clearTimer(Eu[Ku]);
            var Qu = yu._soundById(Eu[Ku]);
            Qu && (Qu._seek = Qu._start || 0, Qu._rateSeek = 0, Qu.iH = !0, Qu._ended = !0, yu._stopFade(Eu[Ku]), Qu._node && (yu._webAudio ? Qu._node.bufferSource && ("undefined" === typeof Qu._node.bufferSource.stop ? Qu._node.bufferSource.noteOff(0) : Qu._node.bufferSource.stop(0), yu._cleanBuffer(Qu._node)) : isNaN(Qu._node.duration) && Qu._node.duration !== 1 / 0 || (Qu._node.currentTime = Qu._start || 0, Qu._node.pause(), Qu._node.duration === 1 / 0 && yu._clearSound(Qu._node))), Ru || yu._emit("stop", Qu._id))
          }
          return yu
        },
        mute: function(uu, Ru) {
          var yu = this;
          if ("loaded" !== yu._state || yu._playLock) return yu._queue.push({
            event: "mute",
            action: function() {
              yu.mute(uu, Ru)
            }
          }), yu;
          if ("undefined" === typeof Ru) {
            if ("boolean" !== typeof uu) return yu._muted;
            yu._muted = uu
          }
          for (var Eu = yu._getSoundIds(Ru), Ku = 0; Ku < Eu.length; Ku++) {
            var mu = yu._soundById(Eu[Ku]);
            mu && (mu._muted = uu, mu._interval && yu._stopFade(mu._id), yu._webAudio && mu._node ? mu._node.gain.setValueAtTime(uu ? 0 : mu._volume, Qu.ctx.currentTime) : mu._node && (mu._node.muted = !!Qu._muted || uu), yu._emit("mute", mu._id))
          }
          return yu
        },
        volume: function() {
          var uu, Ru, yu, Eu = this,
            Ku = arguments;
          if (0 === Ku.length) return Eu._volume;
          if (1 === Ku.length || 2 === Ku.length && "undefined" === typeof Ku[1] ? Eu._getSoundIds().indexOf(Ku[0]) >= 0 ? Ru = parseInt(Ku[0], 10) : uu = parseFloat(Ku[0]) : Ku.length >= 2 && (uu = parseFloat(Ku[0]), Ru = parseInt(Ku[1], 10)), !("undefined" !== typeof uu && uu >= 0 && uu <= 1)) return (yu = Ru ? Eu._soundById(Ru) : Eu._sounds[0]) ? yu._volume : 0;
          if ("loaded" !== Eu._state || Eu._playLock) return Eu._queue.push({
            event: "volume",
            action: function() {
              Eu.volume.apply(Eu, Ku)
            }
          }), Eu;
          "undefined" === typeof Ru && (Eu._volume = uu), Ru = Eu._getSoundIds(Ru);
          for (var mu = 0; mu < Ru.length; mu++)(yu = Eu._soundById(Ru[mu])) && (yu._volume = uu, Ku[2] || Eu._stopFade(Ru[mu]), Eu._webAudio && yu._node && !yu._muted ? yu._node.gain.setValueAtTime(uu, Qu.ctx.currentTime) : yu._node && !yu._muted && (yu._node.volume = uu * Qu.volume()), Eu._emit("volume", yu._id));
          return Eu
        },
        fade: function(uu, Ru, yu, Eu) {
          var Ku = this;
          if ("loaded" !== Ku._state || Ku._playLock) return Ku._queue.push({
            event: "fade",
            action: function() {
              Ku.fade(uu, Ru, yu, Eu)
            }
          }), Ku;
          uu = Math.min(Math.max(0, parseFloat(uu)), 1), Ru = Math.min(Math.max(0, parseFloat(Ru)), 1), yu = parseFloat(yu), Ku.volume(uu, Eu);
          for (var mu = Ku._getSoundIds(Eu), Ju = 0; Ju < mu.length; Ju++) {
            var Nu = Ku._soundById(mu[Ju]);
            if (Nu) {
              if (Eu || Ku._stopFade(mu[Ju]), Ku._webAudio && !Nu._muted) {
                var Xu = Qu.ctx.currentTime,
                  Vu = Xu + yu / 1e3;
                Nu._volume = uu, Nu._node.gain.setValueAtTime(uu, Xu), Nu._node.gain.linearRampToValueAtTime(Ru, Vu)
              }
              Ku._startFadeInterval(Nu, uu, Ru, yu, mu[Ju], "undefined" === typeof Eu)
            }
          }
          return Ku
        },
        _startFadeInterval: function(uu, Ru, yu, Eu, Ku, Qu) {
          var mu = this,
            Ju = Ru,
            Nu = yu - Ru,
            Xu = Math.abs(Nu / .01),
            Vu = Math.max(4, Xu > 0 ? Eu / Xu : Eu),
            ru = Date.now();
          uu._fadeTo = yu, uu._interval = setInterval((function() {
            var Ku = (Date.now() - ru) / Eu;
            ru = Date.now(), Ju += Nu * Ku, Ju = Math.round(100 * Ju) / 100, Ju = Nu < 0 ? Math.max(yu, Ju) : Math.min(yu, Ju), mu._webAudio ? uu._volume = Ju : mu.volume(Ju, uu._id, !0), Qu && (mu._volume = Ju), (yu < Ru && Ju <= yu || yu > Ru && Ju >= yu) && (clearInterval(uu._interval), uu._interval = null, uu._fadeTo = null, mu.volume(yu, uu._id), mu._emit("fade", uu._id))
          }), Vu)
        },
        _stopFade: function(uu) {
          var Ru = this,
            yu = Ru._soundById(uu);
          return yu && yu._interval && (Ru._webAudio && yu._node.gain.cancelScheduledValues(Qu.ctx.currentTime), clearInterval(yu._interval), yu._interval = null, Ru.volume(yu._fadeTo, uu), yu._fadeTo = null, Ru._emit("fade", uu)), Ru
        },
        loop: function() {
          var uu, Ru, yu, Eu = this,
            Ku = arguments;
          if (0 === Ku.length) return Eu._loop;
          if (1 === Ku.length) {
            if ("boolean" !== typeof Ku[0]) return !!(yu = Eu._soundById(parseInt(Ku[0], 10))) && yu._loop;
            uu = Ku[0], Eu._loop = uu
          } else 2 === Ku.length && (uu = Ku[0], Ru = parseInt(Ku[1], 10));
          for (var Qu = Eu._getSoundIds(Ru), mu = 0; mu < Qu.length; mu++)(yu = Eu._soundById(Qu[mu])) && (yu._loop = uu, Eu._webAudio && yu._node && yu._node.bufferSource && (yu._node.bufferSource.loop = uu, uu && (yu._node.bufferSource.loopStart = yu._start || 0, yu._node.bufferSource.loopEnd = yu._stop, Eu.playing(Qu[mu]) && (Eu.pause(Qu[mu], !0), Eu.play(Qu[mu], !0)))));
          return Eu
        },
        rate: function() {
          var uu, Ru, yu, Eu = this,
            Ku = arguments;
          if (0 === Ku.length) Ru = Eu._sounds[0]._id;
          else if (1 === Ku.length) {
            Eu._getSoundIds().indexOf(Ku[0]) >= 0 ? Ru = parseInt(Ku[0], 10) : uu = parseFloat(Ku[0])
          } else 2 === Ku.length && (uu = parseFloat(Ku[0]), Ru = parseInt(Ku[1], 10));
          if ("number" !== typeof uu) return (yu = Eu._soundById(Ru)) ? yu._rate : Eu._rate;
          if ("loaded" !== Eu._state || Eu._playLock) return Eu._queue.push({
            event: "rate",
            action: function() {
              Eu.rate.apply(Eu, Ku)
            }
          }), Eu;
          "undefined" === typeof Ru && (Eu._rate = uu), Ru = Eu._getSoundIds(Ru);
          for (var mu = 0; mu < Ru.length; mu++)
            if (yu = Eu._soundById(Ru[mu])) {
              Eu.playing(Ru[mu]) && (yu._rateSeek = Eu.seek(Ru[mu]), yu._playStart = Eu._webAudio ? Qu.ctx.currentTime : yu._playStart), yu._rate = uu, Eu._webAudio && yu._node && yu._node.bufferSource ? yu._node.bufferSource.playbackRate.setValueAtTime(uu, Qu.ctx.currentTime) : yu._node && (yu._node.playbackRate = uu);
              var Ju = Eu.seek(Ru[mu]),
                Nu = 1e3 * ((Eu._sprite[yu._sprite][0] + Eu._sprite[yu._sprite][1]) / 1e3 - Ju) / Math.abs(yu._rate);
              !Eu._endTimers[Ru[mu]] && yu.iH || (Eu._clearTimer(Ru[mu]), Eu._endTimers[Ru[mu]] = setTimeout(Eu._ended.bind(Eu, yu), Nu)), Eu._emit("rate", yu._id)
            } return Eu
        },
        seek: function() {
          var uu, Ru, yu = this,
            Eu = arguments;
          if (0 === Eu.length) yu._sounds.length && (Ru = yu._sounds[0]._id);
          else if (1 === Eu.length) {
            yu._getSoundIds().indexOf(Eu[0]) >= 0 ? Ru = parseInt(Eu[0], 10) : yu._sounds.length && (Ru = yu._sounds[0]._id, uu = parseFloat(Eu[0]))
          } else 2 === Eu.length && (uu = parseFloat(Eu[0]), Ru = parseInt(Eu[1], 10));
          if ("undefined" === typeof Ru) return 0;
          if ("number" === typeof uu && ("loaded" !== yu._state || yu._playLock)) return yu._queue.push({
            event: "seek",
            action: function() {
              yu.seek.apply(yu, Eu)
            }
          }), yu;
          var Ku = yu._soundById(Ru);
          if (Ku) {
            if (!("number" === typeof uu && uu >= 0)) {
              if (yu._webAudio) {
                var mu = yu.playing(Ru) ? Qu.ctx.currentTime - Ku._playStart : 0,
                  Ju = Ku._rateSeek ? Ku._rateSeek - Ku._seek : 0;
                return Ku._seek + (Ju + mu * Math.abs(Ku._rate))
              }
              return Ku._node.currentTime
            }
            var Nu = yu.playing(Ru);
            Nu && yu.pause(Ru, !0), Ku._seek = uu, Ku._ended = !1, yu._clearTimer(Ru), yu._webAudio || !Ku._node || isNaN(Ku._node.duration) || (Ku._node.currentTime = uu);
            var Xu = function() {
              Nu && yu.play(Ru, !0), yu._emit("seek", Ru)
            };
            if (Nu && !yu._webAudio) {
              var Vu = function() {
                yu._playLock ? setTimeout(Vu, 0) : Xu()
              };
              setTimeout(Vu, 0)
            } else Xu()
          }
          return yu
        },
        playing: function(uu) {
          var Ru = this;
          if ("number" === typeof uu) {
            var yu = Ru._soundById(uu);
            return !!yu && !yu.iH
          }
          for (var Eu = 0; Eu < Ru._sounds.length; Eu++)
            if (!Ru._sounds[Eu].iH) return !0;
          return !1
        },
        duration: function(uu) {
          var Ru = this,
            yu = Ru._duration,
            Eu = Ru._soundById(uu);
          return Eu && (yu = Ru._sprite[Eu._sprite][1] / 1e3), yu
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var uu = this, Ru = uu._sounds, yu = 0; yu < Ru.length; yu++) Ru[yu].iH || uu.stop(Ru[yu]._id), uu._webAudio || (uu._clearSound(Ru[yu]._node), Ru[yu]._node.removeEventListener("error", Ru[yu]._errorFn, !1), Ru[yu]._node.removeEventListener(Qu._canPlayEvent, Ru[yu]._loadFn, !1), Ru[yu]._node.removeEventListener("ended", Ru[yu]._endFn, !1), Qu._releaseHtml5Audio(Ru[yu]._node)), delete Ru[yu]._node, uu._clearTimer(Ru[yu]._id);
          var Eu = Qu._howls.indexOf(uu);
          Eu >= 0 && Qu._howls.splice(Eu, 1);
          var Ku = !0;
          for (yu = 0; yu < Qu._howls.length; yu++)
            if (Qu._howls[yu]._src === uu._src || uu._src.indexOf(Qu._howls[yu]._src) >= 0) {
              Ku = !1;
              break
            } return Nu && Ku && delete Nu[uu._src], Qu.noAudio = !1, uu._state = "unloaded", uu._sounds = [], uu = null, null
        },
        on: function(uu, Ru, yu, Eu) {
          var Ku = this["_on" + uu];
          return "function" === typeof Ru && Ku.push(Eu ? {
            id: yu,
            qx: Ru,
            once: Eu
          } : {
            id: yu,
            qx: Ru
          }), this
        },
        off: function(uu, Ru, yu) {
          var Eu = this,
            Ku = Eu["_on" + uu],
            Qu = 0;
          if ("number" === typeof Ru && (yu = Ru, Ru = null), Ru || yu)
            for (Qu = 0; Qu < Ku.length; Qu++) {
              var mu = yu === Ku[Qu].id;
              if (Ru === Ku[Qu].qx && mu || !Ru && mu) {
                Ku.splice(Qu, 1);
                break
              }
            } else if (uu) Eu["_on" + uu] = [];
            else {
              var Ju = Object.keys(Eu);
              for (Qu = 0; Qu < Ju.length; Qu++) 0 === Ju[Qu].indexOf("_on") && Array.isArray(Eu[Ju[Qu]]) && (Eu[Ju[Qu]] = [])
            } return Eu
        },
        once: function(uu, Ru, yu) {
          return this.on(uu, Ru, yu, 1), this
        },
        _emit: function(uu, Ru, yu) {
          for (var Eu = this, Ku = Eu["_on" + uu], Qu = Ku.length - 1; Qu >= 0; Qu--) Ku[Qu].id && Ku[Qu].id !== Ru && "load" !== uu || (setTimeout(function(uu) {
            uu.call(this, Ru, yu)
          }.bind(Eu, Ku[Qu].qx), 0), Ku[Qu].once && Eu.off(uu, Ku[Qu].qx, Ku[Qu].id));
          return Eu._loadQueue(uu), Eu
        },
        _loadQueue: function(uu) {
          var Ru = this;
          if (Ru._queue.length > 0) {
            var yu = Ru._queue[0];
            yu.event === uu && (Ru._queue.shift(), Ru._loadQueue()), uu || yu.action()
          }
          return Ru
        },
        _ended: function(uu) {
          var Ru = this,
            yu = uu._sprite;
          if (!Ru._webAudio && uu._node && !uu._node.paused && !uu._node.ended && uu._node.currentTime < uu._stop) return setTimeout(Ru._ended.bind(Ru, uu), 100), Ru;
          var Eu = !(!uu._loop && !Ru._sprite[yu][2]);
          if (Ru._emit("end", uu._id), !Ru._webAudio && Eu && Ru.stop(uu._id, !0).play(uu._id), Ru._webAudio && Eu) {
            Ru._emit("play", uu._id), uu._seek = uu._start || 0, uu._rateSeek = 0, uu._playStart = Qu.ctx.currentTime;
            var Ku = 1e3 * (uu._stop - uu._start) / Math.abs(uu._rate);
            Ru._endTimers[uu._id] = setTimeout(Ru._ended.bind(Ru, uu), Ku)
          }
          return Ru._webAudio && !Eu && (uu.iH = !0, uu._ended = !0, uu._seek = uu._start || 0, uu._rateSeek = 0, Ru._clearTimer(uu._id), Ru._cleanBuffer(uu._node), Qu._autoSuspend()), Ru._webAudio || Eu || Ru.stop(uu._id, !0), Ru
        },
        _clearTimer: function(uu) {
          var Ru = this;
          if (Ru._endTimers[uu]) {
            if ("function" !== typeof Ru._endTimers[uu]) clearTimeout(Ru._endTimers[uu]);
            else {
              var yu = Ru._soundById(uu);
              yu && yu._node && yu._node.removeEventListener("ended", Ru._endTimers[uu], !1)
            }
            delete Ru._endTimers[uu]
          }
          return Ru
        },
        _soundById: function(uu) {
          for (var Ru = this, yu = 0; yu < Ru._sounds.length; yu++)
            if (uu === Ru._sounds[yu]._id) return Ru._sounds[yu];
          return null
        },
        _inactiveSound: function() {
          var uu = this;
          uu._drain();
          for (var Ru = 0; Ru < uu._sounds.length; Ru++)
            if (uu._sounds[Ru]._ended) return uu._sounds[Ru].reset();
          return new Ju(uu)
        },
        _drain: function() {
          var uu = this,
            Ru = uu._pool,
            yu = 0,
            Eu = 0;
          if (!(uu._sounds.length < Ru)) {
            for (Eu = 0; Eu < uu._sounds.length; Eu++) uu._sounds[Eu]._ended && yu++;
            for (Eu = uu._sounds.length - 1; Eu >= 0; Eu--) {
              if (yu <= Ru) return;
              uu._sounds[Eu]._ended && (uu._webAudio && uu._sounds[Eu]._node && uu._sounds[Eu]._node.disconnect(0), uu._sounds.splice(Eu, 1), yu--)
            }
          }
        },
        _getSoundIds: function(uu) {
          if ("undefined" === typeof uu) {
            for (var Ru = [], yu = 0; yu < this._sounds.length; yu++) Ru.push(this._sounds[yu]._id);
            return Ru
          }
          return [uu]
        },
        _refreshBuffer: function(uu) {
          return uu._node.bufferSource = Qu.ctx.createBufferSource(), uu._node.bufferSource.buffer = Nu[this._src], uu._panner ? uu._node.bufferSource.connect(uu._panner) : uu._node.bufferSource.connect(uu._node), uu._node.bufferSource.loop = uu._loop, uu._loop && (uu._node.bufferSource.loopStart = uu._start || 0, uu._node.bufferSource.loopEnd = uu._stop || 0), uu._node.bufferSource.playbackRate.setValueAtTime(uu._rate, Qu.ctx.currentTime), this
        },
        _cleanBuffer: function(uu) {
          var Ru = Qu._navigator && Qu._navigator.vendor.indexOf("Apple") >= 0;
          if (Qu._scratchBuffer && uu.bufferSource && (uu.bufferSource.onended = null, uu.bufferSource.disconnect(0), Ru)) try {
            uu.bufferSource.buffer = Qu._scratchBuffer
          } catch (yu) {}
          return uu.bufferSource = null, this
        },
        _clearSound: function(uu) {
          /MSIE |Trident\//.test(Qu._navigator && Qu._navigator.userAgent) || (uu.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var Ju = function(uu) {
        this._parent = uu, this.init()
      };
      Ju.prototype = {
        init: function() {
          var uu = this,
            Ru = uu._parent;
          return uu._muted = Ru._muted, uu._loop = Ru._loop, uu._volume = Ru._volume, uu._rate = Ru._rate, uu._seek = 0, uu.iH = !0, uu._ended = !0, uu._sprite = "__default", uu._id = ++Qu._counter, Ru._sounds.push(uu), uu.create(), uu
        },
        create: function() {
          var uu = this,
            Ru = uu._parent,
            yu = Qu._muted || uu._muted || uu._parent._muted ? 0 : uu._volume;
          return Ru._webAudio ? (uu._node = "undefined" === typeof Qu.ctx.createGain ? Qu.ctx.createGainNode() : Qu.ctx.createGain(), uu._node.gain.setValueAtTime(yu, Qu.ctx.currentTime), uu._node.paused = !0, uu._node.connect(Qu.masterGain)) : Qu.noAudio || (uu._node = Qu._obtainHtml5Audio(), uu._errorFn = uu._errorListener.bind(uu), uu._node.addEventListener("error", uu._errorFn, !1), uu._loadFn = uu._loadListener.bind(uu), uu._node.addEventListener(Qu._canPlayEvent, uu._loadFn, !1), uu._endFn = uu._endListener.bind(uu), uu._node.addEventListener("ended", uu._endFn, !1), uu._node.src = Ru._src, uu._node.preload = !0 === Ru._preload ? "auto" : Ru._preload, uu._node.volume = yu * Qu.volume(), uu._node.load()), uu
        },
        reset: function() {
          var uu = this,
            Ru = uu._parent;
          return uu._muted = Ru._muted, uu._loop = Ru._loop, uu._volume = Ru._volume, uu._rate = Ru._rate, uu._seek = 0, uu._rateSeek = 0, uu.iH = !0, uu._ended = !0, uu._sprite = "__default", uu._id = ++Qu._counter, uu
        },
        _errorListener: function() {
          var uu = this;
          uu._parent._emit("loaderror", uu._id, uu._node.error ? uu._node.error.code : 0), uu._node.removeEventListener("error", uu._errorFn, !1)
        },
        _loadListener: function() {
          var uu = this,
            Ru = uu._parent;
          Ru._duration = Math.ceil(10 * uu._node.duration) / 10, 0 === Object.keys(Ru._sprite).length && (Ru._sprite = {
            __default: [0, 1e3 * Ru._duration]
          }), "loaded" !== Ru._state && (Ru._state = "loaded", Ru._emit("load"), Ru._loadQueue()), uu._node.removeEventListener(Qu._canPlayEvent, uu._loadFn, !1)
        },
        _endListener: function() {
          var uu = this,
            Ru = uu._parent;
          Ru._duration === 1 / 0 && (Ru._duration = Math.ceil(10 * uu._node.duration) / 10, Ru._sprite.__default[1] === 1 / 0 && (Ru._sprite.__default[1] = 1e3 * Ru._duration), Ru._ended(uu)), uu._node.removeEventListener("ended", uu._endFn, !1)
        }
      };
      var Nu = {},
        Xu = function(uu) {
          var Ru = uu._src;
          if (Nu[Ru]) return uu._duration = Nu[Ru].duration, void Bu(uu);
          if (/^data:[^;]+;base64,/.test(Ru)) {
            for (var yu = atob(Ru.split(",")[1]), Eu = new Uint8Array(yu.length), Ku = 0; Ku < yu.length; ++Ku) Eu[Ku] = yu.charCodeAt(Ku);
            ru(Eu.buffer, uu)
          } else {
            var Qu = new XMLHttpRequest;
            Qu.open(uu._xhr.method, Ru, !0), Qu.withCredentials = uu._xhr.withCredentials, Qu.responseType = "arraybuffer", uu._xhr.headers && Object.keys(uu._xhr.headers).forEach((function(Ru) {
              Qu.setRequestHeader(Ru, uu._xhr.headers[Ru])
            })), Qu.onload = function() {
              var Ru = (Qu.status + "")[0];
              "0" === Ru || "2" === Ru || "3" === Ru ? ru(Qu.response, uu) : uu._emit("loaderror", null, "Failed loading audio file with status: " + Qu.status + ".")
            }, Qu.onerror = function() {
              uu._webAudio && (uu._html5 = !0, uu._webAudio = !1, uu._sounds = [], delete Nu[Ru], uu.load())
            }, Vu(Qu)
          }
        },
        Vu = function(uu) {
          try {
            uu.send()
          } catch (Ru) {
            uu.onerror()
          }
        },
        ru = function(uu, Ru) {
          var yu = function() {
              Ru._emit("loaderror", null, "Decoding audio data failed.")
            },
            Eu = function(uu) {
              uu && Ru._sounds.length > 0 ? (Nu[Ru._src] = uu, Bu(Ru, uu)) : yu()
            };
          "undefined" !== typeof Promise && 1 === Qu.ctx.decodeAudioData.length ? Qu.ctx.decodeAudioData(uu).then(Eu).catch(yu) : Qu.ctx.decodeAudioData(uu, Eu, yu)
        },
        Bu = function(uu, Ru) {
          Ru && !uu._duration && (uu._duration = Ru.duration), 0 === Object.keys(uu._sprite).length && (uu._sprite = {
            __default: [0, 1e3 * uu._duration]
          }), "loaded" !== uu._state && (uu._state = "loaded", uu._emit("load"), uu._loadQueue())
        },
        xu = function() {
          if (Qu.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Qu.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Qu.ctx = new webkitAudioContext : Qu.usingWebAudio = !1
            } catch (Ku) {
              Qu.usingWebAudio = !1
            }
            Qu.ctx || (Qu.usingWebAudio = !1);
            var uu = /iP(hone|od|ad)/.test(Qu._navigator && Qu._navigator.platform),
              Ru = Qu._navigator && Qu._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              yu = Ru ? parseInt(Ru[1], 10) : null;
            if (uu && yu && yu < 9) {
              var Eu = /safari/.test(Qu._navigator && Qu._navigator.userAgent.toLowerCase());
              Qu._navigator && !Eu && (Qu.usingWebAudio = !1)
            }
            Qu.usingWebAudio && (Qu.masterGain = "undefined" === typeof Qu.ctx.createGain ? Qu.ctx.createGainNode() : Qu.ctx.createGain(), Qu.masterGain.gain.setValueAtTime(Qu._muted ? 0 : Qu._volume, Qu.ctx.currentTime), Qu.masterGain.connect(Qu.ctx.destination)), Qu._setup()
          }
        };
      void 0 === (Eu = function() {
        return {
          Howler: Qu,
          Howl: mu
        }
      }.apply(Ru, [])) || (uu.exports = Eu), Ru.Howler = Qu, Ru.Howl = mu, "undefined" !== typeof yu.g ? (yu.g.HowlerGlobal = Ku, yu.g.Howler = Qu, yu.g.Howl = mu, yu.g.Sound = Ju) : "undefined" !== typeof window && (window.HowlerGlobal = Ku, window.Howler = Qu, window.Howl = mu, window.Sound = Ju)
    }(),
    function() {
      var uu;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(uu) {
        var Ru = this;
        if (!Ru.ctx || !Ru.ctx.listener) return Ru;
        for (var yu = Ru._howls.length - 1; yu >= 0; yu--) Ru._howls[yu].stereo(uu);
        return Ru
      }, HowlerGlobal.prototype.pos = function(uu, Ru, yu) {
        var Eu = this;
        return Eu.ctx && Eu.ctx.listener ? (Ru = "number" !== typeof Ru ? Eu._pos[1] : Ru, yu = "number" !== typeof yu ? Eu._pos[2] : yu, "number" !== typeof uu ? Eu._pos : (Eu._pos = [uu, Ru, yu], "undefined" !== typeof Eu.ctx.listener.positionX ? (Eu.ctx.listener.positionX.setTargetAtTime(Eu._pos[0], Howler.ctx.currentTime, .1), Eu.ctx.listener.positionY.setTargetAtTime(Eu._pos[1], Howler.ctx.currentTime, .1), Eu.ctx.listener.positionZ.setTargetAtTime(Eu._pos[2], Howler.ctx.currentTime, .1)) : Eu.ctx.listener.setPosition(Eu._pos[0], Eu._pos[1], Eu._pos[2]), Eu)) : Eu
      }, HowlerGlobal.prototype.orientation = function(uu, Ru, yu, Eu, Ku, Qu) {
        var mu = this;
        if (!mu.ctx || !mu.ctx.listener) return mu;
        var Ju = mu._orientation;
        return Ru = "number" !== typeof Ru ? Ju[1] : Ru, yu = "number" !== typeof yu ? Ju[2] : yu, Eu = "number" !== typeof Eu ? Ju[3] : Eu, Ku = "number" !== typeof Ku ? Ju[4] : Ku, Qu = "number" !== typeof Qu ? Ju[5] : Qu, "number" !== typeof uu ? Ju : (mu._orientation = [uu, Ru, yu, Eu, Ku, Qu], "undefined" !== typeof mu.ctx.listener.forwardX ? (mu.ctx.listener.forwardX.setTargetAtTime(uu, Howler.ctx.currentTime, .1), mu.ctx.listener.forwardY.setTargetAtTime(Ru, Howler.ctx.currentTime, .1), mu.ctx.listener.forwardZ.setTargetAtTime(yu, Howler.ctx.currentTime, .1), mu.ctx.listener.upX.setTargetAtTime(Eu, Howler.ctx.currentTime, .1), mu.ctx.listener.upY.setTargetAtTime(Ku, Howler.ctx.currentTime, .1), mu.ctx.listener.upZ.setTargetAtTime(Qu, Howler.ctx.currentTime, .1)) : mu.ctx.listener.setOrientation(uu, Ru, yu, Eu, Ku, Qu), mu)
      }, Howl.prototype.init = (uu = Howl.prototype.init, function(Ru) {
        var yu = this;
        return yu._orientation = Ru.orientation || [1, 0, 0], yu._stereo = Ru.stereo || null, yu._pos = Ru.pos || null, yu._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Ru.coneInnerAngle ? Ru.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Ru.coneOuterAngle ? Ru.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Ru.coneOuterGain ? Ru.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Ru.distanceModel ? Ru.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Ru.maxDistance ? Ru.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Ru.panningModel ? Ru.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Ru.refDistance ? Ru.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Ru.rolloffFactor ? Ru.rolloffFactor : 1
        }, yu._onstereo = Ru.onstereo ? [{
          qx: Ru.onstereo
        }] : [], yu._onpos = Ru.onpos ? [{
          qx: Ru.onpos
        }] : [], yu._onorientation = Ru.onorientation ? [{
          qx: Ru.onorientation
        }] : [], uu.call(this, Ru)
      }), Howl.prototype.stereo = function(uu, yu) {
        var Eu = this;
        if (!Eu._webAudio) return Eu;
        if ("loaded" !== Eu._state) return Eu._queue.push({
          event: "stereo",
          action: function() {
            Eu.stereo(uu, yu)
          }
        }), Eu;
        var Ku = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof yu) {
          if ("number" !== typeof uu) return Eu._stereo;
          Eu._stereo = uu, Eu._pos = [uu, 0, 0]
        }
        for (var Qu = Eu._getSoundIds(yu), mu = 0; mu < Qu.length; mu++) {
          var Ju = Eu._soundById(Qu[mu]);
          if (Ju) {
            if ("number" !== typeof uu) return Ju._stereo;
            Ju._stereo = uu, Ju._pos = [uu, 0, 0], Ju._node && (Ju._pannerAttr.panningModel = "equalpower", Ju._panner && Ju._panner.pan || Ru(Ju, Ku), "spatial" === Ku ? "undefined" !== typeof Ju._panner.positionX ? (Ju._panner.positionX.setValueAtTime(uu, Howler.ctx.currentTime), Ju._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), Ju._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : Ju._panner.setPosition(uu, 0, 0) : Ju._panner.pan.setValueAtTime(uu, Howler.ctx.currentTime)), Eu._emit("stereo", Ju._id)
          }
        }
        return Eu
      }, Howl.prototype.pos = function(uu, yu, Eu, Ku) {
        var Qu = this;
        if (!Qu._webAudio) return Qu;
        if ("loaded" !== Qu._state) return Qu._queue.push({
          event: "pos",
          action: function() {
            Qu.pos(uu, yu, Eu, Ku)
          }
        }), Qu;
        if (yu = "number" !== typeof yu ? 0 : yu, Eu = "number" !== typeof Eu ? -.5 : Eu, "undefined" === typeof Ku) {
          if ("number" !== typeof uu) return Qu._pos;
          Qu._pos = [uu, yu, Eu]
        }
        for (var mu = Qu._getSoundIds(Ku), Ju = 0; Ju < mu.length; Ju++) {
          var Nu = Qu._soundById(mu[Ju]);
          if (Nu) {
            if ("number" !== typeof uu) return Nu._pos;
            Nu._pos = [uu, yu, Eu], Nu._node && (Nu._panner && !Nu._panner.pan || Ru(Nu, "spatial"), "undefined" !== typeof Nu._panner.positionX ? (Nu._panner.positionX.setValueAtTime(uu, Howler.ctx.currentTime), Nu._panner.positionY.setValueAtTime(yu, Howler.ctx.currentTime), Nu._panner.positionZ.setValueAtTime(Eu, Howler.ctx.currentTime)) : Nu._panner.setPosition(uu, yu, Eu)), Qu._emit("pos", Nu._id)
          }
        }
        return Qu
      }, Howl.prototype.orientation = function(uu, yu, Eu, Ku) {
        var Qu = this;
        if (!Qu._webAudio) return Qu;
        if ("loaded" !== Qu._state) return Qu._queue.push({
          event: "orientation",
          action: function() {
            Qu.orientation(uu, yu, Eu, Ku)
          }
        }), Qu;
        if (yu = "number" !== typeof yu ? Qu._orientation[1] : yu, Eu = "number" !== typeof Eu ? Qu._orientation[2] : Eu, "undefined" === typeof Ku) {
          if ("number" !== typeof uu) return Qu._orientation;
          Qu._orientation = [uu, yu, Eu]
        }
        for (var mu = Qu._getSoundIds(Ku), Ju = 0; Ju < mu.length; Ju++) {
          var Nu = Qu._soundById(mu[Ju]);
          if (Nu) {
            if ("number" !== typeof uu) return Nu._orientation;
            Nu._orientation = [uu, yu, Eu], Nu._node && (Nu._panner || (Nu._pos || (Nu._pos = Qu._pos || [0, 0, -.5]), Ru(Nu, "spatial")), "undefined" !== typeof Nu._panner.orientationX ? (Nu._panner.orientationX.setValueAtTime(uu, Howler.ctx.currentTime), Nu._panner.orientationY.setValueAtTime(yu, Howler.ctx.currentTime), Nu._panner.orientationZ.setValueAtTime(Eu, Howler.ctx.currentTime)) : Nu._panner.setOrientation(uu, yu, Eu)), Qu._emit("orientation", Nu._id)
          }
        }
        return Qu
      }, Howl.prototype.pannerAttr = function() {
        var uu, yu, Eu, Ku = this,
          Qu = arguments;
        if (!Ku._webAudio) return Ku;
        if (0 === Qu.length) return Ku._pannerAttr;
        if (1 === Qu.length) {
          if ("object" !== typeof Qu[0]) return (Eu = Ku._soundById(parseInt(Qu[0], 10))) ? Eu._pannerAttr : Ku._pannerAttr;
          uu = Qu[0], "undefined" === typeof yu && (uu.pannerAttr || (uu.pannerAttr = {
            coneInnerAngle: uu.coneInnerAngle,
            coneOuterAngle: uu.coneOuterAngle,
            coneOuterGain: uu.coneOuterGain,
            distanceModel: uu.distanceModel,
            maxDistance: uu.maxDistance,
            refDistance: uu.refDistance,
            rolloffFactor: uu.rolloffFactor,
            panningModel: uu.panningModel
          }), Ku._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof uu.pannerAttr.coneInnerAngle ? uu.pannerAttr.coneInnerAngle : Ku._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof uu.pannerAttr.coneOuterAngle ? uu.pannerAttr.coneOuterAngle : Ku._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof uu.pannerAttr.coneOuterGain ? uu.pannerAttr.coneOuterGain : Ku._coneOuterGain,
            distanceModel: "undefined" !== typeof uu.pannerAttr.distanceModel ? uu.pannerAttr.distanceModel : Ku._distanceModel,
            maxDistance: "undefined" !== typeof uu.pannerAttr.maxDistance ? uu.pannerAttr.maxDistance : Ku._maxDistance,
            refDistance: "undefined" !== typeof uu.pannerAttr.refDistance ? uu.pannerAttr.refDistance : Ku._refDistance,
            rolloffFactor: "undefined" !== typeof uu.pannerAttr.rolloffFactor ? uu.pannerAttr.rolloffFactor : Ku._rolloffFactor,
            panningModel: "undefined" !== typeof uu.pannerAttr.panningModel ? uu.pannerAttr.panningModel : Ku._panningModel
          })
        } else 2 === Qu.length && (uu = Qu[0], yu = parseInt(Qu[1], 10));
        for (var mu = Ku._getSoundIds(yu), Ju = 0; Ju < mu.length; Ju++)
          if (Eu = Ku._soundById(mu[Ju])) {
            var Nu = Eu._pannerAttr;
            Nu = {
              coneInnerAngle: "undefined" !== typeof uu.coneInnerAngle ? uu.coneInnerAngle : Nu.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof uu.coneOuterAngle ? uu.coneOuterAngle : Nu.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof uu.coneOuterGain ? uu.coneOuterGain : Nu.coneOuterGain,
              distanceModel: "undefined" !== typeof uu.distanceModel ? uu.distanceModel : Nu.distanceModel,
              maxDistance: "undefined" !== typeof uu.maxDistance ? uu.maxDistance : Nu.maxDistance,
              refDistance: "undefined" !== typeof uu.refDistance ? uu.refDistance : Nu.refDistance,
              rolloffFactor: "undefined" !== typeof uu.rolloffFactor ? uu.rolloffFactor : Nu.rolloffFactor,
              panningModel: "undefined" !== typeof uu.panningModel ? uu.panningModel : Nu.panningModel
            };
            var Xu = Eu._panner;
            Xu ? (Xu.coneInnerAngle = Nu.coneInnerAngle, Xu.coneOuterAngle = Nu.coneOuterAngle, Xu.coneOuterGain = Nu.coneOuterGain, Xu.distanceModel = Nu.distanceModel, Xu.maxDistance = Nu.maxDistance, Xu.refDistance = Nu.refDistance, Xu.rolloffFactor = Nu.rolloffFactor, Xu.panningModel = Nu.panningModel) : (Eu._pos || (Eu._pos = Ku._pos || [0, 0, -.5]), Ru(Eu, "spatial"))
          } return Ku
      }, Sound.prototype.init = function(uu) {
        return function() {
          var Ru = this,
            yu = Ru._parent;
          Ru._orientation = yu._orientation, Ru._stereo = yu._stereo, Ru._pos = yu._pos, Ru._pannerAttr = yu._pannerAttr, uu.call(this), Ru._stereo ? yu.stereo(Ru._stereo) : Ru._pos && yu.pos(Ru._pos[0], Ru._pos[1], Ru._pos[2], Ru._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(uu) {
        return function() {
          var Ru = this,
            yu = Ru._parent;
          return Ru._orientation = yu._orientation, Ru._stereo = yu._stereo, Ru._pos = yu._pos, Ru._pannerAttr = yu._pannerAttr, Ru._stereo ? yu.stereo(Ru._stereo) : Ru._pos ? yu.pos(Ru._pos[0], Ru._pos[1], Ru._pos[2], Ru._id) : Ru._panner && (Ru._panner.disconnect(0), Ru._panner = void 0, yu._refreshBuffer(Ru)), uu.call(this)
        }
      }(Sound.prototype.reset);
      var Ru = function(uu, Ru) {
        "spatial" === (Ru = Ru || "spatial") ? (uu._panner = Howler.ctx.createPanner(), uu._panner.coneInnerAngle = uu._pannerAttr.coneInnerAngle, uu._panner.coneOuterAngle = uu._pannerAttr.coneOuterAngle, uu._panner.coneOuterGain = uu._pannerAttr.coneOuterGain, uu._panner.distanceModel = uu._pannerAttr.distanceModel, uu._panner.maxDistance = uu._pannerAttr.maxDistance, uu._panner.refDistance = uu._pannerAttr.refDistance, uu._panner.rolloffFactor = uu._pannerAttr.rolloffFactor, uu._panner.panningModel = uu._pannerAttr.panningModel, "undefined" !== typeof uu._panner.positionX ? (uu._panner.positionX.setValueAtTime(uu._pos[0], Howler.ctx.currentTime), uu._panner.positionY.setValueAtTime(uu._pos[1], Howler.ctx.currentTime), uu._panner.positionZ.setValueAtTime(uu._pos[2], Howler.ctx.currentTime)) : uu._panner.setPosition(uu._pos[0], uu._pos[1], uu._pos[2]), "undefined" !== typeof uu._panner.orientationX ? (uu._panner.orientationX.setValueAtTime(uu._orientation[0], Howler.ctx.currentTime), uu._panner.orientationY.setValueAtTime(uu._orientation[1], Howler.ctx.currentTime), uu._panner.orientationZ.setValueAtTime(uu._orientation[2], Howler.ctx.currentTime)) : uu._panner.setOrientation(uu._orientation[0], uu._orientation[1], uu._orientation[2])) : (uu._panner = Howler.ctx.createStereoPanner(), uu._panner.pan.setValueAtTime(uu._stereo, Howler.ctx.currentTime)), uu._panner.connect(uu._node), uu.iH || uu._parent.pause(uu._id, !0).play(uu._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);