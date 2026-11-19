/*! For license information please see qsji88.95.2c4c114e.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  4349: (TT, oT, IT) => {
    var iT;
    ! function() {
      var zT = function() {
        this.init()
      };
      zT.prototype = {
        init: function() {
          var TT = this || kT;
          return TT._counter = 1e3, TT._html5AudioPool = [], TT.html5PoolSize = 10, TT._codecs = {}, TT._howls = [], TT._muted = !1, TT._volume = 1, TT._canPlayEvent = "canplaythrough", TT._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, TT.masterGain = null, TT.noAudio = !1, TT.usingWebAudio = !0, TT.autoSuspend = !0, TT.ctx = null, TT.autoUnlock = !0, TT._setup(), TT
        },
        volume: function(TT) {
          var oT = this || kT;
          if (TT = parseFloat(TT), oT.ctx || xT(), "undefined" !== typeof TT && TT >= 0 && TT <= 1) {
            if (oT._volume = TT, oT._muted) return oT;
            oT.usingWebAudio && oT.masterGain.gain.setValueAtTime(TT, kT.ctx.currentTime);
            for (var IT = 0; IT < oT._howls.length; IT++)
              if (!oT._howls[IT]._webAudio)
                for (var iT = oT._howls[IT]._getSoundIds(), zT = 0; zT < iT.length; zT++) {
                  var WT = oT._howls[IT]._soundById(iT[zT]);
                  WT && WT._node && (WT._node.volume = WT._volume * TT)
                }
            return oT
          }
          return oT._volume
        },
        mute: function(TT) {
          var oT = this || kT;
          oT.ctx || xT(), oT._muted = TT, oT.usingWebAudio && oT.masterGain.gain.setValueAtTime(TT ? 0 : oT._volume, kT.ctx.currentTime);
          for (var IT = 0; IT < oT._howls.length; IT++)
            if (!oT._howls[IT]._webAudio)
              for (var iT = oT._howls[IT]._getSoundIds(), zT = 0; zT < iT.length; zT++) {
                var WT = oT._howls[IT]._soundById(iT[zT]);
                WT && WT._node && (WT._node.muted = !!TT || WT._muted)
              }
          return oT
        },
        stop: function() {
          for (var TT = this || kT, oT = 0; oT < TT._howls.length; oT++) TT._howls[oT].stop();
          return TT
        },
        unload: function() {
          for (var TT = this || kT, oT = TT._howls.length - 1; oT >= 0; oT--) TT._howls[oT].unload();
          return TT.usingWebAudio && TT.ctx && "undefined" !== typeof TT.ctx.close && (TT.ctx.close(), TT.ctx = null, xT()), TT
        },
        codecs: function(TT) {
          return (this || kT)._codecs[TT.replace(/^x-/, "")]
        },
        _setup: function() {
          var TT = this || kT;
          if (TT.state = TT.ctx && TT.ctx.state || "suspended", TT._autoSuspend(), !TT.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (TT._canPlayEvent = "canplay")
            } catch (oT) {
              TT.noAudio = !0
            } else TT.noAudio = !0;
          try {
            (new Audio).muted && (TT.noAudio = !0)
          } catch (oT) {}
          return TT.noAudio || TT._setupCodecs(), TT
        },
        _setupCodecs: function() {
          var TT = this || kT,
            oT = null;
          try {
            oT = "undefined" !== typeof Audio ? new Audio : null
          } catch (ST) {
            return TT
          }
          if (!oT || "function" !== typeof oT.canPlayType) return TT;
          var IT = oT.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            iT = TT._navigator ? TT._navigator.userAgent : "",
            zT = iT.match(/OPR\/([0-6].)/g),
            WT = zT && parseInt(zT[0].split("/")[1], 10) < 33,
            XT = -1 !== iT.indexOf("Safari") && -1 === iT.indexOf("Chrome"),
            BT = iT.match(/Version\/(.*?) /),
            FT = XT && BT && parseInt(BT[1], 10) < 15;
          return TT._codecs = {
            mp3: !(WT || !IT && !oT.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!IT,
            opus: !!oT.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!oT.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!oT.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(oT.canPlayType('audio/wav; codecs="1"') || oT.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!oT.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!oT.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(oT.canPlayType("audio/x-m4a;") || oT.canPlayType("audio/m4a;") || oT.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(oT.canPlayType("audio/x-m4b;") || oT.canPlayType("audio/m4b;") || oT.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(oT.canPlayType("audio/x-mp4;") || oT.canPlayType("audio/mp4;") || oT.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(FT || !oT.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(FT || !oT.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!oT.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(oT.canPlayType("audio/x-flac;") || oT.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, TT
        },
        _unlockAudio: function() {
          var TT = this || kT;
          if (!TT._audioUnlocked && TT.ctx) {
            TT._audioUnlocked = !1, TT.autoUnlock = !1, TT._mobileUnloaded || 44100 === TT.ctx.sampleRate || (TT._mobileUnloaded = !0, TT.unload()), TT._scratchBuffer = TT.ctx.createBuffer(1, 1, 22050);
            var oT = function(IT) {
              for (; TT._html5AudioPool.length < TT.html5PoolSize;) try {
                var iT = new Audio;
                iT._unlocked = !0, TT._releaseHtml5Audio(iT)
              } catch (IT) {
                TT.noAudio = !0;
                break
              }
              for (var zT = 0; zT < TT._howls.length; zT++)
                if (!TT._howls[zT]._webAudio)
                  for (var kT = TT._howls[zT]._getSoundIds(), WT = 0; WT < kT.length; WT++) {
                    var XT = TT._howls[zT]._soundById(kT[WT]);
                    XT && XT._node && !XT._node._unlocked && (XT._node._unlocked = !0, XT._node.load())
                  }
              TT._autoResume();
              var BT = TT.ctx.createBufferSource();
              BT.buffer = TT._scratchBuffer, BT.connect(TT.ctx.destination), "undefined" === typeof BT.start ? BT.noteOn(0) : BT.start(0), "function" === typeof TT.ctx.resume && TT.ctx.resume(), BT.onended = function() {
                BT.disconnect(0), TT._audioUnlocked = !0, document.removeEventListener("touchstart", oT, !0), document.removeEventListener("touchend", oT, !0), document.removeEventListener("click", oT, !0), document.removeEventListener("keydown", oT, !0);
                for (var IT = 0; IT < TT._howls.length; IT++) TT._howls[IT]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", oT, !0), document.addEventListener("touchend", oT, !0), document.addEventListener("click", oT, !0), document.addEventListener("keydown", oT, !0), TT
          }
        },
        _obtainHtml5Audio: function() {
          var TT = this || kT;
          if (TT._html5AudioPool.length) return TT._html5AudioPool.pop();
          var oT = (new Audio).play();
          return oT && "undefined" !== typeof Promise && (oT instanceof Promise || "function" === typeof oT.then) && oT.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(TT) {
          var oT = this || kT;
          return TT._unlocked && oT._html5AudioPool.push(TT), oT
        },
        _autoSuspend: function() {
          var TT = this;
          if (TT.autoSuspend && TT.ctx && "undefined" !== typeof TT.ctx.suspend && kT.usingWebAudio) {
            for (var oT = 0; oT < TT._howls.length; oT++)
              if (TT._howls[oT]._webAudio)
                for (var IT = 0; IT < TT._howls[oT]._sounds.length; IT++)
                  if (!TT._howls[oT]._sounds[IT].uR) return TT;
            return TT._suspendTimer && clearTimeout(TT._suspendTimer), TT._suspendTimer = setTimeout((function() {
              if (TT.autoSuspend) {
                TT._suspendTimer = null, TT.state = "suspending";
                var oT = function() {
                  TT.state = "suspended", TT._resumeAfterSuspend && (delete TT._resumeAfterSuspend, TT._autoResume())
                };
                TT.ctx.suspend().then(oT, oT)
              }
            }), 3e4), TT
          }
        },
        _autoResume: function() {
          var TT = this;
          if (TT.ctx && "undefined" !== typeof TT.ctx.resume && kT.usingWebAudio) return "running" === TT.state && "interrupted" !== TT.ctx.state && TT._suspendTimer ? (clearTimeout(TT._suspendTimer), TT._suspendTimer = null) : "suspended" === TT.state || "running" === TT.state && "interrupted" === TT.ctx.state ? (TT.ctx.resume().then((function() {
            TT.state = "running";
            for (var oT = 0; oT < TT._howls.length; oT++) TT._howls[oT]._emit("resume")
          })), TT._suspendTimer && (clearTimeout(TT._suspendTimer), TT._suspendTimer = null)) : "suspending" === TT.state && (TT._resumeAfterSuspend = !0), TT
        }
      };
      var kT = new zT,
        WT = function(TT) {
          TT.src && 0 !== TT.src.length ? this.init(TT) : console.error("An array of source files must be passed with any new Howl.")
        };
      WT.prototype = {
        init: function(TT) {
          var oT = this;
          return kT.ctx || xT(), oT._autoplay = TT.autoplay || !1, oT._format = "string" !== typeof TT.format ? TT.format : [TT.format], oT._html5 = TT.html5 || !1, oT._muted = TT.mute || !1, oT._loop = TT.loop || !1, oT._pool = TT.pool || 5, oT._preload = "boolean" !== typeof TT.preload && "metadata" !== TT.preload || TT.preload, oT._rate = TT.rate || 1, oT._sprite = TT.sprite || {}, oT._src = "string" !== typeof TT.src ? TT.src : [TT.src], oT._volume = void 0 !== TT.volume ? TT.volume : 1, oT._xhr = {
            method: TT.xhr && TT.xhr.method ? TT.xhr.method : "GET",
            headers: TT.xhr && TT.xhr.headers ? TT.xhr.headers : null,
            withCredentials: !(!TT.xhr || !TT.xhr.withCredentials) && TT.xhr.withCredentials
          }, oT._duration = 0, oT._state = "unloaded", oT._sounds = [], oT._endTimers = {}, oT._queue = [], oT._playLock = !1, oT._onend = TT.onend ? [{
            Dc: TT.onend
          }] : [], oT._onfade = TT.onfade ? [{
            Dc: TT.onfade
          }] : [], oT._onload = TT.onload ? [{
            Dc: TT.onload
          }] : [], oT._onloaderror = TT.onloaderror ? [{
            Dc: TT.onloaderror
          }] : [], oT._onplayerror = TT.onplayerror ? [{
            Dc: TT.onplayerror
          }] : [], oT._onpause = TT.onpause ? [{
            Dc: TT.onpause
          }] : [], oT._onplay = TT.onplay ? [{
            Dc: TT.onplay
          }] : [], oT._onstop = TT.onstop ? [{
            Dc: TT.onstop
          }] : [], oT._onmute = TT.onmute ? [{
            Dc: TT.onmute
          }] : [], oT._onvolume = TT.onvolume ? [{
            Dc: TT.onvolume
          }] : [], oT._onrate = TT.onrate ? [{
            Dc: TT.onrate
          }] : [], oT._onseek = TT.onseek ? [{
            Dc: TT.onseek
          }] : [], oT._onunlock = TT.onunlock ? [{
            Dc: TT.onunlock
          }] : [], oT._onresume = [], oT._webAudio = kT.usingWebAudio && !oT._html5, "undefined" !== typeof kT.ctx && kT.ctx && kT.autoUnlock && kT._unlockAudio(), kT._howls.push(oT), oT._autoplay && oT._queue.push({
            event: "play",
            action: function() {
              oT.play()
            }
          }), oT._preload && "none" !== oT._preload && oT.load(), oT
        },
        load: function() {
          var TT = this,
            oT = null;
          if (kT.noAudio) TT._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof TT._src && (TT._src = [TT._src]);
            for (var IT = 0; IT < TT._src.length; IT++) {
              var iT, zT;
              if (TT._format && TT._format[IT]) iT = TT._format[IT];
              else {
                if ("string" !== typeof(zT = TT._src[IT])) {
                  TT._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(iT = /^data:audio\/([^;,]+);/i.exec(zT)) || (iT = /\.([^.]+)$/.exec(zT.split("?", 1)[0])), iT && (iT = iT[1].toLowerCase())
              }
              if (iT || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), iT && kT.codecs(iT)) {
                oT = TT._src[IT];
                break
              }
            }
            if (oT) return TT._src = oT, TT._state = "loading", "https:" === window.location.protocol && "http:" === oT.slice(0, 5) && (TT._html5 = !0, TT._webAudio = !1), new XT(TT), TT._webAudio && FT(TT), TT;
            TT._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(TT, oT) {
          var IT = this,
            iT = null;
          if ("number" === typeof TT) iT = TT, TT = null;
          else {
            if ("string" === typeof TT && "loaded" === IT._state && !IT._sprite[TT]) return null;
            if ("undefined" === typeof TT && (TT = "__default", !IT._playLock)) {
              for (var zT = 0, WT = 0; WT < IT._sounds.length; WT++) IT._sounds[WT].uR && !IT._sounds[WT]._ended && (zT++, iT = IT._sounds[WT]._id);
              1 === zT ? TT = null : iT = null
            }
          }
          var XT = iT ? IT._soundById(iT) : IT._inactiveSound();
          if (!XT) return null;
          if (iT && !TT && (TT = XT._sprite || "__default"), "loaded" !== IT._state) {
            XT._sprite = TT, XT._ended = !1;
            var BT = XT._id;
            return IT._queue.push({
              event: "play",
              action: function() {
                IT.play(BT)
              }
            }), BT
          }
          if (iT && !XT.uR) return oT || IT._loadQueue("play"), XT._id;
          IT._webAudio && kT._autoResume();
          var FT = Math.max(0, XT._seek > 0 ? XT._seek : IT._sprite[TT][0] / 1e3),
            ST = Math.max(0, (IT._sprite[TT][0] + IT._sprite[TT][1]) / 1e3 - FT),
            DT = 1e3 * ST / Math.abs(XT._rate),
            LT = IT._sprite[TT][0] / 1e3,
            xT = (IT._sprite[TT][0] + IT._sprite[TT][1]) / 1e3;
          XT._sprite = TT, XT._ended = !1;
          var cT = function() {
            XT.uR = !1, XT._seek = FT, XT._start = LT, XT._stop = xT, XT._loop = !(!XT._loop && !IT._sprite[TT][2])
          };
          if (!(FT >= xT)) {
            var KT = XT._node;
            if (IT._webAudio) {
              var MT = function() {
                IT._playLock = !1, cT(), IT._refreshBuffer(XT);
                var TT = XT._muted || IT._muted ? 0 : XT._volume;
                KT.gain.setValueAtTime(TT, kT.ctx.currentTime), XT._playStart = kT.ctx.currentTime, "undefined" === typeof KT.bufferSource.start ? XT._loop ? KT.bufferSource.noteGrainOn(0, FT, 86400) : KT.bufferSource.noteGrainOn(0, FT, ST) : XT._loop ? KT.bufferSource.start(0, FT, 86400) : KT.bufferSource.start(0, FT, ST), DT !== 1 / 0 && (IT._endTimers[XT._id] = setTimeout(IT._ended.bind(IT, XT), DT)), oT || setTimeout((function() {
                  IT._emit("play", XT._id), IT._loadQueue()
                }), 0)
              };
              "running" === kT.state && "interrupted" !== kT.ctx.state ? MT() : (IT._playLock = !0, IT.once("resume", MT), IT._clearTimer(XT._id))
            } else {
              var rT = function() {
                KT.currentTime = FT, KT.muted = XT._muted || IT._muted || kT._muted || KT.muted, KT.volume = XT._volume * kT.volume(), KT.playbackRate = XT._rate;
                try {
                  var iT = KT.play();
                  if (iT && "undefined" !== typeof Promise && (iT instanceof Promise || "function" === typeof iT.then) ? (IT._playLock = !0, cT(), iT.then((function() {
                      IT._playLock = !1, KT._unlocked = !0, oT ? IT._loadQueue() : IT._emit("play", XT._id)
                    })).catch((function() {
                      IT._playLock = !1, IT._emit("playerror", XT._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), XT._ended = !0, XT.uR = !0
                    }))) : oT || (IT._playLock = !1, cT(), IT._emit("play", XT._id)), KT.playbackRate = XT._rate, KT.paused) return void IT._emit("playerror", XT._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== TT || XT._loop ? IT._endTimers[XT._id] = setTimeout(IT._ended.bind(IT, XT), DT) : (IT._endTimers[XT._id] = function() {
                    IT._ended(XT), KT.removeEventListener("ended", IT._endTimers[XT._id], !1)
                  }, KT.addEventListener("ended", IT._endTimers[XT._id], !1))
                } catch (zT) {
                  IT._emit("playerror", XT._id, zT)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === KT.src && (KT.src = IT._src, KT.load());
              var AT = window && window.ejecta || !KT.readyState && kT._navigator.isCocoonJS;
              if (KT.readyState >= 3 || AT) rT();
              else {
                IT._playLock = !0, IT._state = "loading";
                var gT = function() {
                  IT._state = "loaded", rT(), KT.removeEventListener(kT._canPlayEvent, gT, !1)
                };
                KT.addEventListener(kT._canPlayEvent, gT, !1), IT._clearTimer(XT._id)
              }
            }
            return XT._id
          }
          IT._ended(XT)
        },
        pause: function(TT) {
          var oT = this;
          if ("loaded" !== oT._state || oT._playLock) return oT._queue.push({
            event: "pause",
            action: function() {
              oT.pause(TT)
            }
          }), oT;
          for (var IT = oT._getSoundIds(TT), iT = 0; iT < IT.length; iT++) {
            oT._clearTimer(IT[iT]);
            var zT = oT._soundById(IT[iT]);
            if (zT && !zT.uR && (zT._seek = oT.seek(IT[iT]), zT._rateSeek = 0, zT.uR = !0, oT._stopFade(IT[iT]), zT._node))
              if (oT._webAudio) {
                if (!zT._node.bufferSource) continue;
                "undefined" === typeof zT._node.bufferSource.stop ? zT._node.bufferSource.noteOff(0) : zT._node.bufferSource.stop(0), oT._cleanBuffer(zT._node)
              } else isNaN(zT._node.duration) && zT._node.duration !== 1 / 0 || zT._node.pause();
            arguments[1] || oT._emit("pause", zT ? zT._id : null)
          }
          return oT
        },
        stop: function(TT, oT) {
          var IT = this;
          if ("loaded" !== IT._state || IT._playLock) return IT._queue.push({
            event: "stop",
            action: function() {
              IT.stop(TT)
            }
          }), IT;
          for (var iT = IT._getSoundIds(TT), zT = 0; zT < iT.length; zT++) {
            IT._clearTimer(iT[zT]);
            var kT = IT._soundById(iT[zT]);
            kT && (kT._seek = kT._start || 0, kT._rateSeek = 0, kT.uR = !0, kT._ended = !0, IT._stopFade(iT[zT]), kT._node && (IT._webAudio ? kT._node.bufferSource && ("undefined" === typeof kT._node.bufferSource.stop ? kT._node.bufferSource.noteOff(0) : kT._node.bufferSource.stop(0), IT._cleanBuffer(kT._node)) : isNaN(kT._node.duration) && kT._node.duration !== 1 / 0 || (kT._node.currentTime = kT._start || 0, kT._node.pause(), kT._node.duration === 1 / 0 && IT._clearSound(kT._node))), oT || IT._emit("stop", kT._id))
          }
          return IT
        },
        mute: function(TT, oT) {
          var IT = this;
          if ("loaded" !== IT._state || IT._playLock) return IT._queue.push({
            event: "mute",
            action: function() {
              IT.mute(TT, oT)
            }
          }), IT;
          if ("undefined" === typeof oT) {
            if ("boolean" !== typeof TT) return IT._muted;
            IT._muted = TT
          }
          for (var iT = IT._getSoundIds(oT), zT = 0; zT < iT.length; zT++) {
            var WT = IT._soundById(iT[zT]);
            WT && (WT._muted = TT, WT._interval && IT._stopFade(WT._id), IT._webAudio && WT._node ? WT._node.gain.setValueAtTime(TT ? 0 : WT._volume, kT.ctx.currentTime) : WT._node && (WT._node.muted = !!kT._muted || TT), IT._emit("mute", WT._id))
          }
          return IT
        },
        volume: function() {
          var TT, oT, IT, iT = this,
            zT = arguments;
          if (0 === zT.length) return iT._volume;
          if (1 === zT.length || 2 === zT.length && "undefined" === typeof zT[1] ? iT._getSoundIds().indexOf(zT[0]) >= 0 ? oT = parseInt(zT[0], 10) : TT = parseFloat(zT[0]) : zT.length >= 2 && (TT = parseFloat(zT[0]), oT = parseInt(zT[1], 10)), !("undefined" !== typeof TT && TT >= 0 && TT <= 1)) return (IT = oT ? iT._soundById(oT) : iT._sounds[0]) ? IT._volume : 0;
          if ("loaded" !== iT._state || iT._playLock) return iT._queue.push({
            event: "volume",
            action: function() {
              iT.volume.apply(iT, zT)
            }
          }), iT;
          "undefined" === typeof oT && (iT._volume = TT), oT = iT._getSoundIds(oT);
          for (var WT = 0; WT < oT.length; WT++)(IT = iT._soundById(oT[WT])) && (IT._volume = TT, zT[2] || iT._stopFade(oT[WT]), iT._webAudio && IT._node && !IT._muted ? IT._node.gain.setValueAtTime(TT, kT.ctx.currentTime) : IT._node && !IT._muted && (IT._node.volume = TT * kT.volume()), iT._emit("volume", IT._id));
          return iT
        },
        fade: function(TT, oT, IT, iT) {
          var zT = this;
          if ("loaded" !== zT._state || zT._playLock) return zT._queue.push({
            event: "fade",
            action: function() {
              zT.fade(TT, oT, IT, iT)
            }
          }), zT;
          TT = Math.min(Math.max(0, parseFloat(TT)), 1), oT = Math.min(Math.max(0, parseFloat(oT)), 1), IT = parseFloat(IT), zT.volume(TT, iT);
          for (var WT = zT._getSoundIds(iT), XT = 0; XT < WT.length; XT++) {
            var BT = zT._soundById(WT[XT]);
            if (BT) {
              if (iT || zT._stopFade(WT[XT]), zT._webAudio && !BT._muted) {
                var FT = kT.ctx.currentTime,
                  ST = FT + IT / 1e3;
                BT._volume = TT, BT._node.gain.setValueAtTime(TT, FT), BT._node.gain.linearRampToValueAtTime(oT, ST)
              }
              zT._startFadeInterval(BT, TT, oT, IT, WT[XT], "undefined" === typeof iT)
            }
          }
          return zT
        },
        _startFadeInterval: function(TT, oT, IT, iT, zT, kT) {
          var WT = this,
            XT = oT,
            BT = IT - oT,
            FT = Math.abs(BT / .01),
            ST = Math.max(4, FT > 0 ? iT / FT : iT),
            DT = Date.now();
          TT._fadeTo = IT, TT._interval = setInterval((function() {
            var zT = (Date.now() - DT) / iT;
            DT = Date.now(), XT += BT * zT, XT = Math.round(100 * XT) / 100, XT = BT < 0 ? Math.max(IT, XT) : Math.min(IT, XT), WT._webAudio ? TT._volume = XT : WT.volume(XT, TT._id, !0), kT && (WT._volume = XT), (IT < oT && XT <= IT || IT > oT && XT >= IT) && (clearInterval(TT._interval), TT._interval = null, TT._fadeTo = null, WT.volume(IT, TT._id), WT._emit("fade", TT._id))
          }), ST)
        },
        _stopFade: function(TT) {
          var oT = this,
            IT = oT._soundById(TT);
          return IT && IT._interval && (oT._webAudio && IT._node.gain.cancelScheduledValues(kT.ctx.currentTime), clearInterval(IT._interval), IT._interval = null, oT.volume(IT._fadeTo, TT), IT._fadeTo = null, oT._emit("fade", TT)), oT
        },
        loop: function() {
          var TT, oT, IT, iT = this,
            zT = arguments;
          if (0 === zT.length) return iT._loop;
          if (1 === zT.length) {
            if ("boolean" !== typeof zT[0]) return !!(IT = iT._soundById(parseInt(zT[0], 10))) && IT._loop;
            TT = zT[0], iT._loop = TT
          } else 2 === zT.length && (TT = zT[0], oT = parseInt(zT[1], 10));
          for (var kT = iT._getSoundIds(oT), WT = 0; WT < kT.length; WT++)(IT = iT._soundById(kT[WT])) && (IT._loop = TT, iT._webAudio && IT._node && IT._node.bufferSource && (IT._node.bufferSource.loop = TT, TT && (IT._node.bufferSource.loopStart = IT._start || 0, IT._node.bufferSource.loopEnd = IT._stop, iT.playing(kT[WT]) && (iT.pause(kT[WT], !0), iT.play(kT[WT], !0)))));
          return iT
        },
        rate: function() {
          var TT, oT, IT, iT = this,
            zT = arguments;
          if (0 === zT.length) oT = iT._sounds[0]._id;
          else if (1 === zT.length) {
            iT._getSoundIds().indexOf(zT[0]) >= 0 ? oT = parseInt(zT[0], 10) : TT = parseFloat(zT[0])
          } else 2 === zT.length && (TT = parseFloat(zT[0]), oT = parseInt(zT[1], 10));
          if ("number" !== typeof TT) return (IT = iT._soundById(oT)) ? IT._rate : iT._rate;
          if ("loaded" !== iT._state || iT._playLock) return iT._queue.push({
            event: "rate",
            action: function() {
              iT.rate.apply(iT, zT)
            }
          }), iT;
          "undefined" === typeof oT && (iT._rate = TT), oT = iT._getSoundIds(oT);
          for (var WT = 0; WT < oT.length; WT++)
            if (IT = iT._soundById(oT[WT])) {
              iT.playing(oT[WT]) && (IT._rateSeek = iT.seek(oT[WT]), IT._playStart = iT._webAudio ? kT.ctx.currentTime : IT._playStart), IT._rate = TT, iT._webAudio && IT._node && IT._node.bufferSource ? IT._node.bufferSource.playbackRate.setValueAtTime(TT, kT.ctx.currentTime) : IT._node && (IT._node.playbackRate = TT);
              var XT = iT.seek(oT[WT]),
                BT = 1e3 * ((iT._sprite[IT._sprite][0] + iT._sprite[IT._sprite][1]) / 1e3 - XT) / Math.abs(IT._rate);
              !iT._endTimers[oT[WT]] && IT.uR || (iT._clearTimer(oT[WT]), iT._endTimers[oT[WT]] = setTimeout(iT._ended.bind(iT, IT), BT)), iT._emit("rate", IT._id)
            } return iT
        },
        seek: function() {
          var TT, oT, IT = this,
            iT = arguments;
          if (0 === iT.length) IT._sounds.length && (oT = IT._sounds[0]._id);
          else if (1 === iT.length) {
            IT._getSoundIds().indexOf(iT[0]) >= 0 ? oT = parseInt(iT[0], 10) : IT._sounds.length && (oT = IT._sounds[0]._id, TT = parseFloat(iT[0]))
          } else 2 === iT.length && (TT = parseFloat(iT[0]), oT = parseInt(iT[1], 10));
          if ("undefined" === typeof oT) return 0;
          if ("number" === typeof TT && ("loaded" !== IT._state || IT._playLock)) return IT._queue.push({
            event: "seek",
            action: function() {
              IT.seek.apply(IT, iT)
            }
          }), IT;
          var zT = IT._soundById(oT);
          if (zT) {
            if (!("number" === typeof TT && TT >= 0)) {
              if (IT._webAudio) {
                var WT = IT.playing(oT) ? kT.ctx.currentTime - zT._playStart : 0,
                  XT = zT._rateSeek ? zT._rateSeek - zT._seek : 0;
                return zT._seek + (XT + WT * Math.abs(zT._rate))
              }
              return zT._node.currentTime
            }
            var BT = IT.playing(oT);
            BT && IT.pause(oT, !0), zT._seek = TT, zT._ended = !1, IT._clearTimer(oT), IT._webAudio || !zT._node || isNaN(zT._node.duration) || (zT._node.currentTime = TT);
            var FT = function() {
              BT && IT.play(oT, !0), IT._emit("seek", oT)
            };
            if (BT && !IT._webAudio) {
              var ST = function() {
                IT._playLock ? setTimeout(ST, 0) : FT()
              };
              setTimeout(ST, 0)
            } else FT()
          }
          return IT
        },
        playing: function(TT) {
          var oT = this;
          if ("number" === typeof TT) {
            var IT = oT._soundById(TT);
            return !!IT && !IT.uR
          }
          for (var iT = 0; iT < oT._sounds.length; iT++)
            if (!oT._sounds[iT].uR) return !0;
          return !1
        },
        duration: function(TT) {
          var oT = this,
            IT = oT._duration,
            iT = oT._soundById(TT);
          return iT && (IT = oT._sprite[iT._sprite][1] / 1e3), IT
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var TT = this, oT = TT._sounds, IT = 0; IT < oT.length; IT++) oT[IT].uR || TT.stop(oT[IT]._id), TT._webAudio || (TT._clearSound(oT[IT]._node), oT[IT]._node.removeEventListener("error", oT[IT]._errorFn, !1), oT[IT]._node.removeEventListener(kT._canPlayEvent, oT[IT]._loadFn, !1), oT[IT]._node.removeEventListener("ended", oT[IT]._endFn, !1), kT._releaseHtml5Audio(oT[IT]._node)), delete oT[IT]._node, TT._clearTimer(oT[IT]._id);
          var iT = kT._howls.indexOf(TT);
          iT >= 0 && kT._howls.splice(iT, 1);
          var zT = !0;
          for (IT = 0; IT < kT._howls.length; IT++)
            if (kT._howls[IT]._src === TT._src || TT._src.indexOf(kT._howls[IT]._src) >= 0) {
              zT = !1;
              break
            } return BT && zT && delete BT[TT._src], kT.noAudio = !1, TT._state = "unloaded", TT._sounds = [], TT = null, null
        },
        on: function(TT, oT, IT, iT) {
          var zT = this["_on" + TT];
          return "function" === typeof oT && zT.push(iT ? {
            id: IT,
            Dc: oT,
            once: iT
          } : {
            id: IT,
            Dc: oT
          }), this
        },
        off: function(TT, oT, IT) {
          var iT = this,
            zT = iT["_on" + TT],
            kT = 0;
          if ("number" === typeof oT && (IT = oT, oT = null), oT || IT)
            for (kT = 0; kT < zT.length; kT++) {
              var WT = IT === zT[kT].id;
              if (oT === zT[kT].Dc && WT || !oT && WT) {
                zT.splice(kT, 1);
                break
              }
            } else if (TT) iT["_on" + TT] = [];
            else {
              var XT = Object.keys(iT);
              for (kT = 0; kT < XT.length; kT++) 0 === XT[kT].indexOf("_on") && Array.isArray(iT[XT[kT]]) && (iT[XT[kT]] = [])
            } return iT
        },
        once: function(TT, oT, IT) {
          return this.on(TT, oT, IT, 1), this
        },
        _emit: function(TT, oT, IT) {
          for (var iT = this, zT = iT["_on" + TT], kT = zT.length - 1; kT >= 0; kT--) zT[kT].id && zT[kT].id !== oT && "load" !== TT || (setTimeout(function(TT) {
            TT.call(this, oT, IT)
          }.bind(iT, zT[kT].Dc), 0), zT[kT].once && iT.off(TT, zT[kT].Dc, zT[kT].id));
          return iT._loadQueue(TT), iT
        },
        _loadQueue: function(TT) {
          var oT = this;
          if (oT._queue.length > 0) {
            var IT = oT._queue[0];
            IT.event === TT && (oT._queue.shift(), oT._loadQueue()), TT || IT.action()
          }
          return oT
        },
        _ended: function(TT) {
          var oT = this,
            IT = TT._sprite;
          if (!oT._webAudio && TT._node && !TT._node.paused && !TT._node.ended && TT._node.currentTime < TT._stop) return setTimeout(oT._ended.bind(oT, TT), 100), oT;
          var iT = !(!TT._loop && !oT._sprite[IT][2]);
          if (oT._emit("end", TT._id), !oT._webAudio && iT && oT.stop(TT._id, !0).play(TT._id), oT._webAudio && iT) {
            oT._emit("play", TT._id), TT._seek = TT._start || 0, TT._rateSeek = 0, TT._playStart = kT.ctx.currentTime;
            var zT = 1e3 * (TT._stop - TT._start) / Math.abs(TT._rate);
            oT._endTimers[TT._id] = setTimeout(oT._ended.bind(oT, TT), zT)
          }
          return oT._webAudio && !iT && (TT.uR = !0, TT._ended = !0, TT._seek = TT._start || 0, TT._rateSeek = 0, oT._clearTimer(TT._id), oT._cleanBuffer(TT._node), kT._autoSuspend()), oT._webAudio || iT || oT.stop(TT._id, !0), oT
        },
        _clearTimer: function(TT) {
          var oT = this;
          if (oT._endTimers[TT]) {
            if ("function" !== typeof oT._endTimers[TT]) clearTimeout(oT._endTimers[TT]);
            else {
              var IT = oT._soundById(TT);
              IT && IT._node && IT._node.removeEventListener("ended", oT._endTimers[TT], !1)
            }
            delete oT._endTimers[TT]
          }
          return oT
        },
        _soundById: function(TT) {
          for (var oT = this, IT = 0; IT < oT._sounds.length; IT++)
            if (TT === oT._sounds[IT]._id) return oT._sounds[IT];
          return null
        },
        _inactiveSound: function() {
          var TT = this;
          TT._drain();
          for (var oT = 0; oT < TT._sounds.length; oT++)
            if (TT._sounds[oT]._ended) return TT._sounds[oT].reset();
          return new XT(TT)
        },
        _drain: function() {
          var TT = this,
            oT = TT._pool,
            IT = 0,
            iT = 0;
          if (!(TT._sounds.length < oT)) {
            for (iT = 0; iT < TT._sounds.length; iT++) TT._sounds[iT]._ended && IT++;
            for (iT = TT._sounds.length - 1; iT >= 0; iT--) {
              if (IT <= oT) return;
              TT._sounds[iT]._ended && (TT._webAudio && TT._sounds[iT]._node && TT._sounds[iT]._node.disconnect(0), TT._sounds.splice(iT, 1), IT--)
            }
          }
        },
        _getSoundIds: function(TT) {
          if ("undefined" === typeof TT) {
            for (var oT = [], IT = 0; IT < this._sounds.length; IT++) oT.push(this._sounds[IT]._id);
            return oT
          }
          return [TT]
        },
        _refreshBuffer: function(TT) {
          return TT._node.bufferSource = kT.ctx.createBufferSource(), TT._node.bufferSource.buffer = BT[this._src], TT._panner ? TT._node.bufferSource.connect(TT._panner) : TT._node.bufferSource.connect(TT._node), TT._node.bufferSource.loop = TT._loop, TT._loop && (TT._node.bufferSource.loopStart = TT._start || 0, TT._node.bufferSource.loopEnd = TT._stop || 0), TT._node.bufferSource.playbackRate.setValueAtTime(TT._rate, kT.ctx.currentTime), this
        },
        _cleanBuffer: function(TT) {
          var oT = kT._navigator && kT._navigator.vendor.indexOf("Apple") >= 0;
          if (kT._scratchBuffer && TT.bufferSource && (TT.bufferSource.onended = null, TT.bufferSource.disconnect(0), oT)) try {
            TT.bufferSource.buffer = kT._scratchBuffer
          } catch (IT) {}
          return TT.bufferSource = null, this
        },
        _clearSound: function(TT) {
          /MSIE |Trident\//.test(kT._navigator && kT._navigator.userAgent) || (TT.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var XT = function(TT) {
        this._parent = TT, this.init()
      };
      XT.prototype = {
        init: function() {
          var TT = this,
            oT = TT._parent;
          return TT._muted = oT._muted, TT._loop = oT._loop, TT._volume = oT._volume, TT._rate = oT._rate, TT._seek = 0, TT.uR = !0, TT._ended = !0, TT._sprite = "__default", TT._id = ++kT._counter, oT._sounds.push(TT), TT.create(), TT
        },
        create: function() {
          var TT = this,
            oT = TT._parent,
            IT = kT._muted || TT._muted || TT._parent._muted ? 0 : TT._volume;
          return oT._webAudio ? (TT._node = "undefined" === typeof kT.ctx.createGain ? kT.ctx.createGainNode() : kT.ctx.createGain(), TT._node.gain.setValueAtTime(IT, kT.ctx.currentTime), TT._node.paused = !0, TT._node.connect(kT.masterGain)) : kT.noAudio || (TT._node = kT._obtainHtml5Audio(), TT._errorFn = TT._errorListener.bind(TT), TT._node.addEventListener("error", TT._errorFn, !1), TT._loadFn = TT._loadListener.bind(TT), TT._node.addEventListener(kT._canPlayEvent, TT._loadFn, !1), TT._endFn = TT._endListener.bind(TT), TT._node.addEventListener("ended", TT._endFn, !1), TT._node.src = oT._src, TT._node.preload = !0 === oT._preload ? "auto" : oT._preload, TT._node.volume = IT * kT.volume(), TT._node.load()), TT
        },
        reset: function() {
          var TT = this,
            oT = TT._parent;
          return TT._muted = oT._muted, TT._loop = oT._loop, TT._volume = oT._volume, TT._rate = oT._rate, TT._seek = 0, TT._rateSeek = 0, TT.uR = !0, TT._ended = !0, TT._sprite = "__default", TT._id = ++kT._counter, TT
        },
        _errorListener: function() {
          var TT = this;
          TT._parent._emit("loaderror", TT._id, TT._node.error ? TT._node.error.code : 0), TT._node.removeEventListener("error", TT._errorFn, !1)
        },
        _loadListener: function() {
          var TT = this,
            oT = TT._parent;
          oT._duration = Math.ceil(10 * TT._node.duration) / 10, 0 === Object.keys(oT._sprite).length && (oT._sprite = {
            __default: [0, 1e3 * oT._duration]
          }), "loaded" !== oT._state && (oT._state = "loaded", oT._emit("load"), oT._loadQueue()), TT._node.removeEventListener(kT._canPlayEvent, TT._loadFn, !1)
        },
        _endListener: function() {
          var TT = this,
            oT = TT._parent;
          oT._duration === 1 / 0 && (oT._duration = Math.ceil(10 * TT._node.duration) / 10, oT._sprite.__default[1] === 1 / 0 && (oT._sprite.__default[1] = 1e3 * oT._duration), oT._ended(TT)), TT._node.removeEventListener("ended", TT._endFn, !1)
        }
      };
      var BT = {},
        FT = function(TT) {
          var oT = TT._src;
          if (BT[oT]) return TT._duration = BT[oT].duration, void LT(TT);
          if (/^data:[^;]+;base64,/.test(oT)) {
            for (var IT = atob(oT.split(",")[1]), iT = new Uint8Array(IT.length), zT = 0; zT < IT.length; ++zT) iT[zT] = IT.charCodeAt(zT);
            DT(iT.buffer, TT)
          } else {
            var kT = new XMLHttpRequest;
            kT.open(TT._xhr.method, oT, !0), kT.withCredentials = TT._xhr.withCredentials, kT.responseType = "arraybuffer", TT._xhr.headers && Object.keys(TT._xhr.headers).forEach((function(oT) {
              kT.setRequestHeader(oT, TT._xhr.headers[oT])
            })), kT.onload = function() {
              var oT = (kT.status + "")[0];
              "0" === oT || "2" === oT || "3" === oT ? DT(kT.response, TT) : TT._emit("loaderror", null, "Failed loading audio file with status: " + kT.status + ".")
            }, kT.onerror = function() {
              TT._webAudio && (TT._html5 = !0, TT._webAudio = !1, TT._sounds = [], delete BT[oT], TT.load())
            }, ST(kT)
          }
        },
        ST = function(TT) {
          try {
            TT.send()
          } catch (oT) {
            TT.onerror()
          }
        },
        DT = function(TT, oT) {
          var IT = function() {
              oT._emit("loaderror", null, "Decoding audio data failed.")
            },
            iT = function(TT) {
              TT && oT._sounds.length > 0 ? (BT[oT._src] = TT, LT(oT, TT)) : IT()
            };
          "undefined" !== typeof Promise && 1 === kT.ctx.decodeAudioData.length ? kT.ctx.decodeAudioData(TT).then(iT).catch(IT) : kT.ctx.decodeAudioData(TT, iT, IT)
        },
        LT = function(TT, oT) {
          oT && !TT._duration && (TT._duration = oT.duration), 0 === Object.keys(TT._sprite).length && (TT._sprite = {
            __default: [0, 1e3 * TT._duration]
          }), "loaded" !== TT._state && (TT._state = "loaded", TT._emit("load"), TT._loadQueue())
        },
        xT = function() {
          if (kT.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? kT.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? kT.ctx = new webkitAudioContext : kT.usingWebAudio = !1
            } catch (zT) {
              kT.usingWebAudio = !1
            }
            kT.ctx || (kT.usingWebAudio = !1);
            var TT = /iP(hone|od|ad)/.test(kT._navigator && kT._navigator.platform),
              oT = kT._navigator && kT._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              IT = oT ? parseInt(oT[1], 10) : null;
            if (TT && IT && IT < 9) {
              var iT = /safari/.test(kT._navigator && kT._navigator.userAgent.toLowerCase());
              kT._navigator && !iT && (kT.usingWebAudio = !1)
            }
            kT.usingWebAudio && (kT.masterGain = "undefined" === typeof kT.ctx.createGain ? kT.ctx.createGainNode() : kT.ctx.createGain(), kT.masterGain.gain.setValueAtTime(kT._muted ? 0 : kT._volume, kT.ctx.currentTime), kT.masterGain.connect(kT.ctx.destination)), kT._setup()
          }
        };
      void 0 === (iT = function() {
        return {
          Howler: kT,
          Howl: WT
        }
      }.apply(oT, [])) || (TT.exports = iT), oT.Howler = kT, oT.Howl = WT, "undefined" !== typeof IT.g ? (IT.g.HowlerGlobal = zT, IT.g.Howler = kT, IT.g.Howl = WT, IT.g.Sound = XT) : "undefined" !== typeof window && (window.HowlerGlobal = zT, window.Howler = kT, window.Howl = WT, window.Sound = XT)
    }(),
    function() {
      var TT;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(TT) {
        var oT = this;
        if (!oT.ctx || !oT.ctx.listener) return oT;
        for (var IT = oT._howls.length - 1; IT >= 0; IT--) oT._howls[IT].stereo(TT);
        return oT
      }, HowlerGlobal.prototype.pos = function(TT, oT, IT) {
        var iT = this;
        return iT.ctx && iT.ctx.listener ? (oT = "number" !== typeof oT ? iT._pos[1] : oT, IT = "number" !== typeof IT ? iT._pos[2] : IT, "number" !== typeof TT ? iT._pos : (iT._pos = [TT, oT, IT], "undefined" !== typeof iT.ctx.listener.positionX ? (iT.ctx.listener.positionX.setTargetAtTime(iT._pos[0], Howler.ctx.currentTime, .1), iT.ctx.listener.positionY.setTargetAtTime(iT._pos[1], Howler.ctx.currentTime, .1), iT.ctx.listener.positionZ.setTargetAtTime(iT._pos[2], Howler.ctx.currentTime, .1)) : iT.ctx.listener.setPosition(iT._pos[0], iT._pos[1], iT._pos[2]), iT)) : iT
      }, HowlerGlobal.prototype.orientation = function(TT, oT, IT, iT, zT, kT) {
        var WT = this;
        if (!WT.ctx || !WT.ctx.listener) return WT;
        var XT = WT._orientation;
        return oT = "number" !== typeof oT ? XT[1] : oT, IT = "number" !== typeof IT ? XT[2] : IT, iT = "number" !== typeof iT ? XT[3] : iT, zT = "number" !== typeof zT ? XT[4] : zT, kT = "number" !== typeof kT ? XT[5] : kT, "number" !== typeof TT ? XT : (WT._orientation = [TT, oT, IT, iT, zT, kT], "undefined" !== typeof WT.ctx.listener.forwardX ? (WT.ctx.listener.forwardX.setTargetAtTime(TT, Howler.ctx.currentTime, .1), WT.ctx.listener.forwardY.setTargetAtTime(oT, Howler.ctx.currentTime, .1), WT.ctx.listener.forwardZ.setTargetAtTime(IT, Howler.ctx.currentTime, .1), WT.ctx.listener.upX.setTargetAtTime(iT, Howler.ctx.currentTime, .1), WT.ctx.listener.upY.setTargetAtTime(zT, Howler.ctx.currentTime, .1), WT.ctx.listener.upZ.setTargetAtTime(kT, Howler.ctx.currentTime, .1)) : WT.ctx.listener.setOrientation(TT, oT, IT, iT, zT, kT), WT)
      }, Howl.prototype.init = (TT = Howl.prototype.init, function(oT) {
        var IT = this;
        return IT._orientation = oT.orientation || [1, 0, 0], IT._stereo = oT.stereo || null, IT._pos = oT.pos || null, IT._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof oT.coneInnerAngle ? oT.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof oT.coneOuterAngle ? oT.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof oT.coneOuterGain ? oT.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof oT.distanceModel ? oT.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof oT.maxDistance ? oT.maxDistance : 1e4,
          panningModel: "undefined" !== typeof oT.panningModel ? oT.panningModel : "HRTF",
          refDistance: "undefined" !== typeof oT.refDistance ? oT.refDistance : 1,
          rolloffFactor: "undefined" !== typeof oT.rolloffFactor ? oT.rolloffFactor : 1
        }, IT._onstereo = oT.onstereo ? [{
          Dc: oT.onstereo
        }] : [], IT._onpos = oT.onpos ? [{
          Dc: oT.onpos
        }] : [], IT._onorientation = oT.onorientation ? [{
          Dc: oT.onorientation
        }] : [], TT.call(this, oT)
      }), Howl.prototype.stereo = function(TT, IT) {
        var iT = this;
        if (!iT._webAudio) return iT;
        if ("loaded" !== iT._state) return iT._queue.push({
          event: "stereo",
          action: function() {
            iT.stereo(TT, IT)
          }
        }), iT;
        var zT = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof IT) {
          if ("number" !== typeof TT) return iT._stereo;
          iT._stereo = TT, iT._pos = [TT, 0, 0]
        }
        for (var kT = iT._getSoundIds(IT), WT = 0; WT < kT.length; WT++) {
          var XT = iT._soundById(kT[WT]);
          if (XT) {
            if ("number" !== typeof TT) return XT._stereo;
            XT._stereo = TT, XT._pos = [TT, 0, 0], XT._node && (XT._pannerAttr.panningModel = "equalpower", XT._panner && XT._panner.pan || oT(XT, zT), "spatial" === zT ? "undefined" !== typeof XT._panner.positionX ? (XT._panner.positionX.setValueAtTime(TT, Howler.ctx.currentTime), XT._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), XT._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : XT._panner.setPosition(TT, 0, 0) : XT._panner.pan.setValueAtTime(TT, Howler.ctx.currentTime)), iT._emit("stereo", XT._id)
          }
        }
        return iT
      }, Howl.prototype.pos = function(TT, IT, iT, zT) {
        var kT = this;
        if (!kT._webAudio) return kT;
        if ("loaded" !== kT._state) return kT._queue.push({
          event: "pos",
          action: function() {
            kT.pos(TT, IT, iT, zT)
          }
        }), kT;
        if (IT = "number" !== typeof IT ? 0 : IT, iT = "number" !== typeof iT ? -.5 : iT, "undefined" === typeof zT) {
          if ("number" !== typeof TT) return kT._pos;
          kT._pos = [TT, IT, iT]
        }
        for (var WT = kT._getSoundIds(zT), XT = 0; XT < WT.length; XT++) {
          var BT = kT._soundById(WT[XT]);
          if (BT) {
            if ("number" !== typeof TT) return BT._pos;
            BT._pos = [TT, IT, iT], BT._node && (BT._panner && !BT._panner.pan || oT(BT, "spatial"), "undefined" !== typeof BT._panner.positionX ? (BT._panner.positionX.setValueAtTime(TT, Howler.ctx.currentTime), BT._panner.positionY.setValueAtTime(IT, Howler.ctx.currentTime), BT._panner.positionZ.setValueAtTime(iT, Howler.ctx.currentTime)) : BT._panner.setPosition(TT, IT, iT)), kT._emit("pos", BT._id)
          }
        }
        return kT
      }, Howl.prototype.orientation = function(TT, IT, iT, zT) {
        var kT = this;
        if (!kT._webAudio) return kT;
        if ("loaded" !== kT._state) return kT._queue.push({
          event: "orientation",
          action: function() {
            kT.orientation(TT, IT, iT, zT)
          }
        }), kT;
        if (IT = "number" !== typeof IT ? kT._orientation[1] : IT, iT = "number" !== typeof iT ? kT._orientation[2] : iT, "undefined" === typeof zT) {
          if ("number" !== typeof TT) return kT._orientation;
          kT._orientation = [TT, IT, iT]
        }
        for (var WT = kT._getSoundIds(zT), XT = 0; XT < WT.length; XT++) {
          var BT = kT._soundById(WT[XT]);
          if (BT) {
            if ("number" !== typeof TT) return BT._orientation;
            BT._orientation = [TT, IT, iT], BT._node && (BT._panner || (BT._pos || (BT._pos = kT._pos || [0, 0, -.5]), oT(BT, "spatial")), "undefined" !== typeof BT._panner.orientationX ? (BT._panner.orientationX.setValueAtTime(TT, Howler.ctx.currentTime), BT._panner.orientationY.setValueAtTime(IT, Howler.ctx.currentTime), BT._panner.orientationZ.setValueAtTime(iT, Howler.ctx.currentTime)) : BT._panner.setOrientation(TT, IT, iT)), kT._emit("orientation", BT._id)
          }
        }
        return kT
      }, Howl.prototype.pannerAttr = function() {
        var TT, IT, iT, zT = this,
          kT = arguments;
        if (!zT._webAudio) return zT;
        if (0 === kT.length) return zT._pannerAttr;
        if (1 === kT.length) {
          if ("object" !== typeof kT[0]) return (iT = zT._soundById(parseInt(kT[0], 10))) ? iT._pannerAttr : zT._pannerAttr;
          TT = kT[0], "undefined" === typeof IT && (TT.pannerAttr || (TT.pannerAttr = {
            coneInnerAngle: TT.coneInnerAngle,
            coneOuterAngle: TT.coneOuterAngle,
            coneOuterGain: TT.coneOuterGain,
            distanceModel: TT.distanceModel,
            maxDistance: TT.maxDistance,
            refDistance: TT.refDistance,
            rolloffFactor: TT.rolloffFactor,
            panningModel: TT.panningModel
          }), zT._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof TT.pannerAttr.coneInnerAngle ? TT.pannerAttr.coneInnerAngle : zT._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof TT.pannerAttr.coneOuterAngle ? TT.pannerAttr.coneOuterAngle : zT._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof TT.pannerAttr.coneOuterGain ? TT.pannerAttr.coneOuterGain : zT._coneOuterGain,
            distanceModel: "undefined" !== typeof TT.pannerAttr.distanceModel ? TT.pannerAttr.distanceModel : zT._distanceModel,
            maxDistance: "undefined" !== typeof TT.pannerAttr.maxDistance ? TT.pannerAttr.maxDistance : zT._maxDistance,
            refDistance: "undefined" !== typeof TT.pannerAttr.refDistance ? TT.pannerAttr.refDistance : zT._refDistance,
            rolloffFactor: "undefined" !== typeof TT.pannerAttr.rolloffFactor ? TT.pannerAttr.rolloffFactor : zT._rolloffFactor,
            panningModel: "undefined" !== typeof TT.pannerAttr.panningModel ? TT.pannerAttr.panningModel : zT._panningModel
          })
        } else 2 === kT.length && (TT = kT[0], IT = parseInt(kT[1], 10));
        for (var WT = zT._getSoundIds(IT), XT = 0; XT < WT.length; XT++)
          if (iT = zT._soundById(WT[XT])) {
            var BT = iT._pannerAttr;
            BT = {
              coneInnerAngle: "undefined" !== typeof TT.coneInnerAngle ? TT.coneInnerAngle : BT.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof TT.coneOuterAngle ? TT.coneOuterAngle : BT.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof TT.coneOuterGain ? TT.coneOuterGain : BT.coneOuterGain,
              distanceModel: "undefined" !== typeof TT.distanceModel ? TT.distanceModel : BT.distanceModel,
              maxDistance: "undefined" !== typeof TT.maxDistance ? TT.maxDistance : BT.maxDistance,
              refDistance: "undefined" !== typeof TT.refDistance ? TT.refDistance : BT.refDistance,
              rolloffFactor: "undefined" !== typeof TT.rolloffFactor ? TT.rolloffFactor : BT.rolloffFactor,
              panningModel: "undefined" !== typeof TT.panningModel ? TT.panningModel : BT.panningModel
            };
            var FT = iT._panner;
            FT ? (FT.coneInnerAngle = BT.coneInnerAngle, FT.coneOuterAngle = BT.coneOuterAngle, FT.coneOuterGain = BT.coneOuterGain, FT.distanceModel = BT.distanceModel, FT.maxDistance = BT.maxDistance, FT.refDistance = BT.refDistance, FT.rolloffFactor = BT.rolloffFactor, FT.panningModel = BT.panningModel) : (iT._pos || (iT._pos = zT._pos || [0, 0, -.5]), oT(iT, "spatial"))
          } return zT
      }, Sound.prototype.init = function(TT) {
        return function() {
          var oT = this,
            IT = oT._parent;
          oT._orientation = IT._orientation, oT._stereo = IT._stereo, oT._pos = IT._pos, oT._pannerAttr = IT._pannerAttr, TT.call(this), oT._stereo ? IT.stereo(oT._stereo) : oT._pos && IT.pos(oT._pos[0], oT._pos[1], oT._pos[2], oT._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(TT) {
        return function() {
          var oT = this,
            IT = oT._parent;
          return oT._orientation = IT._orientation, oT._stereo = IT._stereo, oT._pos = IT._pos, oT._pannerAttr = IT._pannerAttr, oT._stereo ? IT.stereo(oT._stereo) : oT._pos ? IT.pos(oT._pos[0], oT._pos[1], oT._pos[2], oT._id) : oT._panner && (oT._panner.disconnect(0), oT._panner = void 0, IT._refreshBuffer(oT)), TT.call(this)
        }
      }(Sound.prototype.reset);
      var oT = function(TT, oT) {
        "spatial" === (oT = oT || "spatial") ? (TT._panner = Howler.ctx.createPanner(), TT._panner.coneInnerAngle = TT._pannerAttr.coneInnerAngle, TT._panner.coneOuterAngle = TT._pannerAttr.coneOuterAngle, TT._panner.coneOuterGain = TT._pannerAttr.coneOuterGain, TT._panner.distanceModel = TT._pannerAttr.distanceModel, TT._panner.maxDistance = TT._pannerAttr.maxDistance, TT._panner.refDistance = TT._pannerAttr.refDistance, TT._panner.rolloffFactor = TT._pannerAttr.rolloffFactor, TT._panner.panningModel = TT._pannerAttr.panningModel, "undefined" !== typeof TT._panner.positionX ? (TT._panner.positionX.setValueAtTime(TT._pos[0], Howler.ctx.currentTime), TT._panner.positionY.setValueAtTime(TT._pos[1], Howler.ctx.currentTime), TT._panner.positionZ.setValueAtTime(TT._pos[2], Howler.ctx.currentTime)) : TT._panner.setPosition(TT._pos[0], TT._pos[1], TT._pos[2]), "undefined" !== typeof TT._panner.orientationX ? (TT._panner.orientationX.setValueAtTime(TT._orientation[0], Howler.ctx.currentTime), TT._panner.orientationY.setValueAtTime(TT._orientation[1], Howler.ctx.currentTime), TT._panner.orientationZ.setValueAtTime(TT._orientation[2], Howler.ctx.currentTime)) : TT._panner.setOrientation(TT._orientation[0], TT._orientation[1], TT._orientation[2])) : (TT._panner = Howler.ctx.createStereoPanner(), TT._panner.pan.setValueAtTime(TT._stereo, Howler.ctx.currentTime)), TT._panner.connect(TT._node), TT.uR || TT._parent.pause(TT._id, !0).play(TT._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);