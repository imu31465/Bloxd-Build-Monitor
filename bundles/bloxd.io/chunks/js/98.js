/*! For license information please see yma3ej.98.7ae88acd.chunk.js.LICENSE.txt */
export const id = 98;
export const ids = [98];
export const modules = {
  4966: (TT, UT, mT) => {
    var WT;
    ! function() {
      var zT = function() {
        this.init()
      };
      zT.prototype = {
        init: function() {
          var TT = this || MT;
          return TT._counter = 1e3, TT._html5AudioPool = [], TT.html5PoolSize = 10, TT._codecs = {}, TT._howls = [], TT._muted = !1, TT._volume = 1, TT._canPlayEvent = "canplaythrough", TT._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, TT.masterGain = null, TT.noAudio = !1, TT.usingWebAudio = !0, TT.autoSuspend = !0, TT.ctx = null, TT.autoUnlock = !0, TT._setup(), TT
        },
        volume: function(TT) {
          var UT = this || MT;
          if (TT = parseFloat(TT), UT.ctx || pT(), "undefined" !== typeof TT && TT >= 0 && TT <= 1) {
            if (UT._volume = TT, UT._muted) return UT;
            UT.usingWebAudio && UT.masterGain.gain.setValueAtTime(TT, MT.ctx.currentTime);
            for (var mT = 0; mT < UT._howls.length; mT++)
              if (!UT._howls[mT]._webAudio)
                for (var WT = UT._howls[mT]._getSoundIds(), zT = 0; zT < WT.length; zT++) {
                  var gT = UT._howls[mT]._soundById(WT[zT]);
                  gT && gT._node && (gT._node.volume = gT._volume * TT)
                }
            return UT
          }
          return UT._volume
        },
        mute: function(TT) {
          var UT = this || MT;
          UT.ctx || pT(), UT._muted = TT, UT.usingWebAudio && UT.masterGain.gain.setValueAtTime(TT ? 0 : UT._volume, MT.ctx.currentTime);
          for (var mT = 0; mT < UT._howls.length; mT++)
            if (!UT._howls[mT]._webAudio)
              for (var WT = UT._howls[mT]._getSoundIds(), zT = 0; zT < WT.length; zT++) {
                var gT = UT._howls[mT]._soundById(WT[zT]);
                gT && gT._node && (gT._node.muted = !!TT || gT._muted)
              }
          return UT
        },
        stop: function() {
          for (var TT = this || MT, UT = 0; UT < TT._howls.length; UT++) TT._howls[UT].stop();
          return TT
        },
        unload: function() {
          for (var TT = this || MT, UT = TT._howls.length - 1; UT >= 0; UT--) TT._howls[UT].unload();
          return TT.usingWebAudio && TT.ctx && "undefined" !== typeof TT.ctx.close && (TT.ctx.close(), TT.ctx = null, pT()), TT
        },
        codecs: function(TT) {
          return (this || MT)._codecs[TT.replace(/^x-/, "")]
        },
        _setup: function() {
          var TT = this || MT;
          if (TT.state = TT.ctx && TT.ctx.state || "suspended", TT._autoSuspend(), !TT.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (TT._canPlayEvent = "canplay")
            } catch (UT) {
              TT.noAudio = !0
            } else TT.noAudio = !0;
          try {
            (new Audio).muted && (TT.noAudio = !0)
          } catch (UT) {}
          return TT.noAudio || TT._setupCodecs(), TT
        },
        _setupCodecs: function() {
          var TT = this || MT,
            UT = null;
          try {
            UT = "undefined" !== typeof Audio ? new Audio : null
          } catch (jT) {
            return TT
          }
          if (!UT || "function" !== typeof UT.canPlayType) return TT;
          var mT = UT.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            WT = TT._navigator ? TT._navigator.userAgent : "",
            zT = WT.match(/OPR\/([0-6].)/g),
            gT = zT && parseInt(zT[0].split("/")[1], 10) < 33,
            nT = -1 !== WT.indexOf("Safari") && -1 === WT.indexOf("Chrome"),
            HT = WT.match(/Version\/(.*?) /),
            kT = nT && HT && parseInt(HT[1], 10) < 15;
          return TT._codecs = {
            mp3: !(gT || !mT && !UT.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!mT,
            opus: !!UT.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!UT.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!UT.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(UT.canPlayType('audio/wav; codecs="1"') || UT.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!UT.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!UT.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(UT.canPlayType("audio/x-m4a;") || UT.canPlayType("audio/m4a;") || UT.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(UT.canPlayType("audio/x-m4b;") || UT.canPlayType("audio/m4b;") || UT.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(UT.canPlayType("audio/x-mp4;") || UT.canPlayType("audio/mp4;") || UT.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(kT || !UT.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(kT || !UT.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!UT.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(UT.canPlayType("audio/x-flac;") || UT.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, TT
        },
        _unlockAudio: function() {
          var TT = this || MT;
          if (!TT._audioUnlocked && TT.ctx) {
            TT._audioUnlocked = !1, TT.autoUnlock = !1, TT._mobileUnloaded || 44100 === TT.ctx.sampleRate || (TT._mobileUnloaded = !0, TT.unload()), TT._scratchBuffer = TT.ctx.createBuffer(1, 1, 22050);
            var UT = function(mT) {
              for (; TT._html5AudioPool.length < TT.html5PoolSize;) try {
                var WT = new Audio;
                WT._unlocked = !0, TT._releaseHtml5Audio(WT)
              } catch (mT) {
                TT.noAudio = !0;
                break
              }
              for (var zT = 0; zT < TT._howls.length; zT++)
                if (!TT._howls[zT]._webAudio)
                  for (var MT = TT._howls[zT]._getSoundIds(), gT = 0; gT < MT.length; gT++) {
                    var nT = TT._howls[zT]._soundById(MT[gT]);
                    nT && nT._node && !nT._node._unlocked && (nT._node._unlocked = !0, nT._node.load())
                  }
              TT._autoResume();
              var HT = TT.ctx.createBufferSource();
              HT.buffer = TT._scratchBuffer, HT.connect(TT.ctx.destination), "undefined" === typeof HT.start ? HT.noteOn(0) : HT.start(0), "function" === typeof TT.ctx.resume && TT.ctx.resume(), HT.onended = function() {
                HT.disconnect(0), TT._audioUnlocked = !0, document.removeEventListener("touchstart", UT, !0), document.removeEventListener("touchend", UT, !0), document.removeEventListener("click", UT, !0), document.removeEventListener("keydown", UT, !0);
                for (var mT = 0; mT < TT._howls.length; mT++) TT._howls[mT]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", UT, !0), document.addEventListener("touchend", UT, !0), document.addEventListener("click", UT, !0), document.addEventListener("keydown", UT, !0), TT
          }
        },
        _obtainHtml5Audio: function() {
          var TT = this || MT;
          if (TT._html5AudioPool.length) return TT._html5AudioPool.pop();
          var UT = (new Audio).play();
          return UT && "undefined" !== typeof Promise && (UT instanceof Promise || "function" === typeof UT.then) && UT.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(TT) {
          var UT = this || MT;
          return TT._unlocked && UT._html5AudioPool.push(TT), UT
        },
        _autoSuspend: function() {
          var TT = this;
          if (TT.autoSuspend && TT.ctx && "undefined" !== typeof TT.ctx.suspend && MT.usingWebAudio) {
            for (var UT = 0; UT < TT._howls.length; UT++)
              if (TT._howls[UT]._webAudio)
                for (var mT = 0; mT < TT._howls[UT]._sounds.length; mT++)
                  if (!TT._howls[UT]._sounds[mT].bY) return TT;
            return TT._suspendTimer && clearTimeout(TT._suspendTimer), TT._suspendTimer = setTimeout((function() {
              if (TT.autoSuspend) {
                TT._suspendTimer = null, TT.state = "suspending";
                var UT = function() {
                  TT.state = "suspended", TT._resumeAfterSuspend && (delete TT._resumeAfterSuspend, TT._autoResume())
                };
                TT.ctx.suspend().then(UT, UT)
              }
            }), 3e4), TT
          }
        },
        _autoResume: function() {
          var TT = this;
          if (TT.ctx && "undefined" !== typeof TT.ctx.resume && MT.usingWebAudio) return "running" === TT.state && "interrupted" !== TT.ctx.state && TT._suspendTimer ? (clearTimeout(TT._suspendTimer), TT._suspendTimer = null) : "suspended" === TT.state || "running" === TT.state && "interrupted" === TT.ctx.state ? (TT.ctx.resume().then((function() {
            TT.state = "running";
            for (var UT = 0; UT < TT._howls.length; UT++) TT._howls[UT]._emit("resume")
          })), TT._suspendTimer && (clearTimeout(TT._suspendTimer), TT._suspendTimer = null)) : "suspending" === TT.state && (TT._resumeAfterSuspend = !0), TT
        }
      };
      var MT = new zT,
        gT = function(TT) {
          TT.src && 0 !== TT.src.length ? this.init(TT) : console.error("An array of source files must be passed with any new Howl.")
        };
      gT.prototype = {
        init: function(TT) {
          var UT = this;
          return MT.ctx || pT(), UT._autoplay = TT.autoplay || !1, UT._format = "string" !== typeof TT.format ? TT.format : [TT.format], UT._html5 = TT.html5 || !1, UT._muted = TT.mute || !1, UT._loop = TT.loop || !1, UT._pool = TT.pool || 5, UT._preload = "boolean" !== typeof TT.preload && "metadata" !== TT.preload || TT.preload, UT._rate = TT.rate || 1, UT._sprite = TT.sprite || {}, UT._src = "string" !== typeof TT.src ? TT.src : [TT.src], UT._volume = void 0 !== TT.volume ? TT.volume : 1, UT._xhr = {
            method: TT.xhr && TT.xhr.method ? TT.xhr.method : "GET",
            headers: TT.xhr && TT.xhr.headers ? TT.xhr.headers : null,
            withCredentials: !(!TT.xhr || !TT.xhr.withCredentials) && TT.xhr.withCredentials
          }, UT._duration = 0, UT._state = "unloaded", UT._sounds = [], UT._endTimers = {}, UT._queue = [], UT._playLock = !1, UT._onend = TT.onend ? [{
            hp: TT.onend
          }] : [], UT._onfade = TT.onfade ? [{
            hp: TT.onfade
          }] : [], UT._onload = TT.onload ? [{
            hp: TT.onload
          }] : [], UT._onloaderror = TT.onloaderror ? [{
            hp: TT.onloaderror
          }] : [], UT._onplayerror = TT.onplayerror ? [{
            hp: TT.onplayerror
          }] : [], UT._onpause = TT.onpause ? [{
            hp: TT.onpause
          }] : [], UT._onplay = TT.onplay ? [{
            hp: TT.onplay
          }] : [], UT._onstop = TT.onstop ? [{
            hp: TT.onstop
          }] : [], UT._onmute = TT.onmute ? [{
            hp: TT.onmute
          }] : [], UT._onvolume = TT.onvolume ? [{
            hp: TT.onvolume
          }] : [], UT._onrate = TT.onrate ? [{
            hp: TT.onrate
          }] : [], UT._onseek = TT.onseek ? [{
            hp: TT.onseek
          }] : [], UT._onunlock = TT.onunlock ? [{
            hp: TT.onunlock
          }] : [], UT._onresume = [], UT._webAudio = MT.usingWebAudio && !UT._html5, "undefined" !== typeof MT.ctx && MT.ctx && MT.autoUnlock && MT._unlockAudio(), MT._howls.push(UT), UT._autoplay && UT._queue.push({
            event: "play",
            action: function() {
              UT.play()
            }
          }), UT._preload && "none" !== UT._preload && UT.load(), UT
        },
        load: function() {
          var TT = this,
            UT = null;
          if (MT.noAudio) TT._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof TT._src && (TT._src = [TT._src]);
            for (var mT = 0; mT < TT._src.length; mT++) {
              var WT, zT;
              if (TT._format && TT._format[mT]) WT = TT._format[mT];
              else {
                if ("string" !== typeof(zT = TT._src[mT])) {
                  TT._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(WT = /^data:audio\/([^;,]+);/i.exec(zT)) || (WT = /\.([^.]+)$/.exec(zT.split("?", 1)[0])), WT && (WT = WT[1].toLowerCase())
              }
              if (WT || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), WT && MT.codecs(WT)) {
                UT = TT._src[mT];
                break
              }
            }
            if (UT) return TT._src = UT, TT._state = "loading", "https:" === window.location.protocol && "http:" === UT.slice(0, 5) && (TT._html5 = !0, TT._webAudio = !1), new nT(TT), TT._webAudio && kT(TT), TT;
            TT._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(TT, UT) {
          var mT = this,
            WT = null;
          if ("number" === typeof TT) WT = TT, TT = null;
          else {
            if ("string" === typeof TT && "loaded" === mT._state && !mT._sprite[TT]) return null;
            if ("undefined" === typeof TT && (TT = "__default", !mT._playLock)) {
              for (var zT = 0, gT = 0; gT < mT._sounds.length; gT++) mT._sounds[gT].bY && !mT._sounds[gT]._ended && (zT++, WT = mT._sounds[gT]._id);
              1 === zT ? TT = null : WT = null
            }
          }
          var nT = WT ? mT._soundById(WT) : mT._inactiveSound();
          if (!nT) return null;
          if (WT && !TT && (TT = nT._sprite || "__default"), "loaded" !== mT._state) {
            nT._sprite = TT, nT._ended = !1;
            var HT = nT._id;
            return mT._queue.push({
              event: "play",
              action: function() {
                mT.play(HT)
              }
            }), HT
          }
          if (WT && !nT.bY) return UT || mT._loadQueue("play"), nT._id;
          mT._webAudio && MT._autoResume();
          var kT = Math.max(0, nT._seek > 0 ? nT._seek : mT._sprite[TT][0] / 1e3),
            jT = Math.max(0, (mT._sprite[TT][0] + mT._sprite[TT][1]) / 1e3 - kT),
            lT = 1e3 * jT / Math.abs(nT._rate),
            LT = mT._sprite[TT][0] / 1e3,
            pT = (mT._sprite[TT][0] + mT._sprite[TT][1]) / 1e3;
          nT._sprite = TT, nT._ended = !1;
          var BT = function() {
            nT.bY = !1, nT._seek = kT, nT._start = LT, nT._stop = pT, nT._loop = !(!nT._loop && !mT._sprite[TT][2])
          };
          if (!(kT >= pT)) {
            var ZT = nT._node;
            if (mT._webAudio) {
              var cT = function() {
                mT._playLock = !1, BT(), mT._refreshBuffer(nT);
                var TT = nT._muted || mT._muted ? 0 : nT._volume;
                ZT.gain.setValueAtTime(TT, MT.ctx.currentTime), nT._playStart = MT.ctx.currentTime, "undefined" === typeof ZT.bufferSource.start ? nT._loop ? ZT.bufferSource.noteGrainOn(0, kT, 86400) : ZT.bufferSource.noteGrainOn(0, kT, jT) : nT._loop ? ZT.bufferSource.start(0, kT, 86400) : ZT.bufferSource.start(0, kT, jT), lT !== 1 / 0 && (mT._endTimers[nT._id] = setTimeout(mT._ended.bind(mT, nT), lT)), UT || setTimeout((function() {
                  mT._emit("play", nT._id), mT._loadQueue()
                }), 0)
              };
              "running" === MT.state && "interrupted" !== MT.ctx.state ? cT() : (mT._playLock = !0, mT.once("resume", cT), mT._clearTimer(nT._id))
            } else {
              var vT = function() {
                ZT.currentTime = kT, ZT.muted = nT._muted || mT._muted || MT._muted || ZT.muted, ZT.volume = nT._volume * MT.volume(), ZT.playbackRate = nT._rate;
                try {
                  var WT = ZT.play();
                  if (WT && "undefined" !== typeof Promise && (WT instanceof Promise || "function" === typeof WT.then) ? (mT._playLock = !0, BT(), WT.then((function() {
                      mT._playLock = !1, ZT._unlocked = !0, UT ? mT._loadQueue() : mT._emit("play", nT._id)
                    })).catch((function() {
                      mT._playLock = !1, mT._emit("playerror", nT._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), nT._ended = !0, nT.bY = !0
                    }))) : UT || (mT._playLock = !1, BT(), mT._emit("play", nT._id)), ZT.playbackRate = nT._rate, ZT.paused) return void mT._emit("playerror", nT._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== TT || nT._loop ? mT._endTimers[nT._id] = setTimeout(mT._ended.bind(mT, nT), lT) : (mT._endTimers[nT._id] = function() {
                    mT._ended(nT), ZT.removeEventListener("ended", mT._endTimers[nT._id], !1)
                  }, ZT.addEventListener("ended", mT._endTimers[nT._id], !1))
                } catch (zT) {
                  mT._emit("playerror", nT._id, zT)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === ZT.src && (ZT.src = mT._src, ZT.load());
              var fT = window && window.ejecta || !ZT.readyState && MT._navigator.isCocoonJS;
              if (ZT.readyState >= 3 || fT) vT();
              else {
                mT._playLock = !0, mT._state = "loading";
                var qT = function() {
                  mT._state = "loaded", vT(), ZT.removeEventListener(MT._canPlayEvent, qT, !1)
                };
                ZT.addEventListener(MT._canPlayEvent, qT, !1), mT._clearTimer(nT._id)
              }
            }
            return nT._id
          }
          mT._ended(nT)
        },
        pause: function(TT) {
          var UT = this;
          if ("loaded" !== UT._state || UT._playLock) return UT._queue.push({
            event: "pause",
            action: function() {
              UT.pause(TT)
            }
          }), UT;
          for (var mT = UT._getSoundIds(TT), WT = 0; WT < mT.length; WT++) {
            UT._clearTimer(mT[WT]);
            var zT = UT._soundById(mT[WT]);
            if (zT && !zT.bY && (zT._seek = UT.seek(mT[WT]), zT._rateSeek = 0, zT.bY = !0, UT._stopFade(mT[WT]), zT._node))
              if (UT._webAudio) {
                if (!zT._node.bufferSource) continue;
                "undefined" === typeof zT._node.bufferSource.stop ? zT._node.bufferSource.noteOff(0) : zT._node.bufferSource.stop(0), UT._cleanBuffer(zT._node)
              } else isNaN(zT._node.duration) && zT._node.duration !== 1 / 0 || zT._node.pause();
            arguments[1] || UT._emit("pause", zT ? zT._id : null)
          }
          return UT
        },
        stop: function(TT, UT) {
          var mT = this;
          if ("loaded" !== mT._state || mT._playLock) return mT._queue.push({
            event: "stop",
            action: function() {
              mT.stop(TT)
            }
          }), mT;
          for (var WT = mT._getSoundIds(TT), zT = 0; zT < WT.length; zT++) {
            mT._clearTimer(WT[zT]);
            var MT = mT._soundById(WT[zT]);
            MT && (MT._seek = MT._start || 0, MT._rateSeek = 0, MT.bY = !0, MT._ended = !0, mT._stopFade(WT[zT]), MT._node && (mT._webAudio ? MT._node.bufferSource && ("undefined" === typeof MT._node.bufferSource.stop ? MT._node.bufferSource.noteOff(0) : MT._node.bufferSource.stop(0), mT._cleanBuffer(MT._node)) : isNaN(MT._node.duration) && MT._node.duration !== 1 / 0 || (MT._node.currentTime = MT._start || 0, MT._node.pause(), MT._node.duration === 1 / 0 && mT._clearSound(MT._node))), UT || mT._emit("stop", MT._id))
          }
          return mT
        },
        mute: function(TT, UT) {
          var mT = this;
          if ("loaded" !== mT._state || mT._playLock) return mT._queue.push({
            event: "mute",
            action: function() {
              mT.mute(TT, UT)
            }
          }), mT;
          if ("undefined" === typeof UT) {
            if ("boolean" !== typeof TT) return mT._muted;
            mT._muted = TT
          }
          for (var WT = mT._getSoundIds(UT), zT = 0; zT < WT.length; zT++) {
            var gT = mT._soundById(WT[zT]);
            gT && (gT._muted = TT, gT._interval && mT._stopFade(gT._id), mT._webAudio && gT._node ? gT._node.gain.setValueAtTime(TT ? 0 : gT._volume, MT.ctx.currentTime) : gT._node && (gT._node.muted = !!MT._muted || TT), mT._emit("mute", gT._id))
          }
          return mT
        },
        volume: function() {
          var TT, UT, mT, WT = this,
            zT = arguments;
          if (0 === zT.length) return WT._volume;
          if (1 === zT.length || 2 === zT.length && "undefined" === typeof zT[1] ? WT._getSoundIds().indexOf(zT[0]) >= 0 ? UT = parseInt(zT[0], 10) : TT = parseFloat(zT[0]) : zT.length >= 2 && (TT = parseFloat(zT[0]), UT = parseInt(zT[1], 10)), !("undefined" !== typeof TT && TT >= 0 && TT <= 1)) return (mT = UT ? WT._soundById(UT) : WT._sounds[0]) ? mT._volume : 0;
          if ("loaded" !== WT._state || WT._playLock) return WT._queue.push({
            event: "volume",
            action: function() {
              WT.volume.apply(WT, zT)
            }
          }), WT;
          "undefined" === typeof UT && (WT._volume = TT), UT = WT._getSoundIds(UT);
          for (var gT = 0; gT < UT.length; gT++)(mT = WT._soundById(UT[gT])) && (mT._volume = TT, zT[2] || WT._stopFade(UT[gT]), WT._webAudio && mT._node && !mT._muted ? mT._node.gain.setValueAtTime(TT, MT.ctx.currentTime) : mT._node && !mT._muted && (mT._node.volume = TT * MT.volume()), WT._emit("volume", mT._id));
          return WT
        },
        fade: function(TT, UT, mT, WT) {
          var zT = this;
          if ("loaded" !== zT._state || zT._playLock) return zT._queue.push({
            event: "fade",
            action: function() {
              zT.fade(TT, UT, mT, WT)
            }
          }), zT;
          TT = Math.min(Math.max(0, parseFloat(TT)), 1), UT = Math.min(Math.max(0, parseFloat(UT)), 1), mT = parseFloat(mT), zT.volume(TT, WT);
          for (var gT = zT._getSoundIds(WT), nT = 0; nT < gT.length; nT++) {
            var HT = zT._soundById(gT[nT]);
            if (HT) {
              if (WT || zT._stopFade(gT[nT]), zT._webAudio && !HT._muted) {
                var kT = MT.ctx.currentTime,
                  jT = kT + mT / 1e3;
                HT._volume = TT, HT._node.gain.setValueAtTime(TT, kT), HT._node.gain.linearRampToValueAtTime(UT, jT)
              }
              zT._startFadeInterval(HT, TT, UT, mT, gT[nT], "undefined" === typeof WT)
            }
          }
          return zT
        },
        _startFadeInterval: function(TT, UT, mT, WT, zT, MT) {
          var gT = this,
            nT = UT,
            HT = mT - UT,
            kT = Math.abs(HT / .01),
            jT = Math.max(4, kT > 0 ? WT / kT : WT),
            lT = Date.now();
          TT._fadeTo = mT, TT._interval = setInterval((function() {
            var zT = (Date.now() - lT) / WT;
            lT = Date.now(), nT += HT * zT, nT = Math.round(100 * nT) / 100, nT = HT < 0 ? Math.max(mT, nT) : Math.min(mT, nT), gT._webAudio ? TT._volume = nT : gT.volume(nT, TT._id, !0), MT && (gT._volume = nT), (mT < UT && nT <= mT || mT > UT && nT >= mT) && (clearInterval(TT._interval), TT._interval = null, TT._fadeTo = null, gT.volume(mT, TT._id), gT._emit("fade", TT._id))
          }), jT)
        },
        _stopFade: function(TT) {
          var UT = this,
            mT = UT._soundById(TT);
          return mT && mT._interval && (UT._webAudio && mT._node.gain.cancelScheduledValues(MT.ctx.currentTime), clearInterval(mT._interval), mT._interval = null, UT.volume(mT._fadeTo, TT), mT._fadeTo = null, UT._emit("fade", TT)), UT
        },
        loop: function() {
          var TT, UT, mT, WT = this,
            zT = arguments;
          if (0 === zT.length) return WT._loop;
          if (1 === zT.length) {
            if ("boolean" !== typeof zT[0]) return !!(mT = WT._soundById(parseInt(zT[0], 10))) && mT._loop;
            TT = zT[0], WT._loop = TT
          } else 2 === zT.length && (TT = zT[0], UT = parseInt(zT[1], 10));
          for (var MT = WT._getSoundIds(UT), gT = 0; gT < MT.length; gT++)(mT = WT._soundById(MT[gT])) && (mT._loop = TT, WT._webAudio && mT._node && mT._node.bufferSource && (mT._node.bufferSource.loop = TT, TT && (mT._node.bufferSource.loopStart = mT._start || 0, mT._node.bufferSource.loopEnd = mT._stop, WT.playing(MT[gT]) && (WT.pause(MT[gT], !0), WT.play(MT[gT], !0)))));
          return WT
        },
        rate: function() {
          var TT, UT, mT, WT = this,
            zT = arguments;
          if (0 === zT.length) UT = WT._sounds[0]._id;
          else if (1 === zT.length) {
            WT._getSoundIds().indexOf(zT[0]) >= 0 ? UT = parseInt(zT[0], 10) : TT = parseFloat(zT[0])
          } else 2 === zT.length && (TT = parseFloat(zT[0]), UT = parseInt(zT[1], 10));
          if ("number" !== typeof TT) return (mT = WT._soundById(UT)) ? mT._rate : WT._rate;
          if ("loaded" !== WT._state || WT._playLock) return WT._queue.push({
            event: "rate",
            action: function() {
              WT.rate.apply(WT, zT)
            }
          }), WT;
          "undefined" === typeof UT && (WT._rate = TT), UT = WT._getSoundIds(UT);
          for (var gT = 0; gT < UT.length; gT++)
            if (mT = WT._soundById(UT[gT])) {
              WT.playing(UT[gT]) && (mT._rateSeek = WT.seek(UT[gT]), mT._playStart = WT._webAudio ? MT.ctx.currentTime : mT._playStart), mT._rate = TT, WT._webAudio && mT._node && mT._node.bufferSource ? mT._node.bufferSource.playbackRate.setValueAtTime(TT, MT.ctx.currentTime) : mT._node && (mT._node.playbackRate = TT);
              var nT = WT.seek(UT[gT]),
                HT = 1e3 * ((WT._sprite[mT._sprite][0] + WT._sprite[mT._sprite][1]) / 1e3 - nT) / Math.abs(mT._rate);
              !WT._endTimers[UT[gT]] && mT.bY || (WT._clearTimer(UT[gT]), WT._endTimers[UT[gT]] = setTimeout(WT._ended.bind(WT, mT), HT)), WT._emit("rate", mT._id)
            } return WT
        },
        seek: function() {
          var TT, UT, mT = this,
            WT = arguments;
          if (0 === WT.length) mT._sounds.length && (UT = mT._sounds[0]._id);
          else if (1 === WT.length) {
            mT._getSoundIds().indexOf(WT[0]) >= 0 ? UT = parseInt(WT[0], 10) : mT._sounds.length && (UT = mT._sounds[0]._id, TT = parseFloat(WT[0]))
          } else 2 === WT.length && (TT = parseFloat(WT[0]), UT = parseInt(WT[1], 10));
          if ("undefined" === typeof UT) return 0;
          if ("number" === typeof TT && ("loaded" !== mT._state || mT._playLock)) return mT._queue.push({
            event: "seek",
            action: function() {
              mT.seek.apply(mT, WT)
            }
          }), mT;
          var zT = mT._soundById(UT);
          if (zT) {
            if (!("number" === typeof TT && TT >= 0)) {
              if (mT._webAudio) {
                var gT = mT.playing(UT) ? MT.ctx.currentTime - zT._playStart : 0,
                  nT = zT._rateSeek ? zT._rateSeek - zT._seek : 0;
                return zT._seek + (nT + gT * Math.abs(zT._rate))
              }
              return zT._node.currentTime
            }
            var HT = mT.playing(UT);
            HT && mT.pause(UT, !0), zT._seek = TT, zT._ended = !1, mT._clearTimer(UT), mT._webAudio || !zT._node || isNaN(zT._node.duration) || (zT._node.currentTime = TT);
            var kT = function() {
              HT && mT.play(UT, !0), mT._emit("seek", UT)
            };
            if (HT && !mT._webAudio) {
              var jT = function() {
                mT._playLock ? setTimeout(jT, 0) : kT()
              };
              setTimeout(jT, 0)
            } else kT()
          }
          return mT
        },
        playing: function(TT) {
          var UT = this;
          if ("number" === typeof TT) {
            var mT = UT._soundById(TT);
            return !!mT && !mT.bY
          }
          for (var WT = 0; WT < UT._sounds.length; WT++)
            if (!UT._sounds[WT].bY) return !0;
          return !1
        },
        duration: function(TT) {
          var UT = this,
            mT = UT._duration,
            WT = UT._soundById(TT);
          return WT && (mT = UT._sprite[WT._sprite][1] / 1e3), mT
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var TT = this, UT = TT._sounds, mT = 0; mT < UT.length; mT++) UT[mT].bY || TT.stop(UT[mT]._id), TT._webAudio || (TT._clearSound(UT[mT]._node), UT[mT]._node.removeEventListener("error", UT[mT]._errorFn, !1), UT[mT]._node.removeEventListener(MT._canPlayEvent, UT[mT]._loadFn, !1), UT[mT]._node.removeEventListener("ended", UT[mT]._endFn, !1), MT._releaseHtml5Audio(UT[mT]._node)), delete UT[mT]._node, TT._clearTimer(UT[mT]._id);
          var WT = MT._howls.indexOf(TT);
          WT >= 0 && MT._howls.splice(WT, 1);
          var zT = !0;
          for (mT = 0; mT < MT._howls.length; mT++)
            if (MT._howls[mT]._src === TT._src || TT._src.indexOf(MT._howls[mT]._src) >= 0) {
              zT = !1;
              break
            } return HT && zT && delete HT[TT._src], MT.noAudio = !1, TT._state = "unloaded", TT._sounds = [], TT = null, null
        },
        on: function(TT, UT, mT, WT) {
          var zT = this["_on" + TT];
          return "function" === typeof UT && zT.push(WT ? {
            id: mT,
            hp: UT,
            once: WT
          } : {
            id: mT,
            hp: UT
          }), this
        },
        off: function(TT, UT, mT) {
          var WT = this,
            zT = WT["_on" + TT],
            MT = 0;
          if ("number" === typeof UT && (mT = UT, UT = null), UT || mT)
            for (MT = 0; MT < zT.length; MT++) {
              var gT = mT === zT[MT].id;
              if (UT === zT[MT].hp && gT || !UT && gT) {
                zT.splice(MT, 1);
                break
              }
            } else if (TT) WT["_on" + TT] = [];
            else {
              var nT = Object.keys(WT);
              for (MT = 0; MT < nT.length; MT++) 0 === nT[MT].indexOf("_on") && Array.isArray(WT[nT[MT]]) && (WT[nT[MT]] = [])
            } return WT
        },
        once: function(TT, UT, mT) {
          return this.on(TT, UT, mT, 1), this
        },
        _emit: function(TT, UT, mT) {
          for (var WT = this, zT = WT["_on" + TT], MT = zT.length - 1; MT >= 0; MT--) zT[MT].id && zT[MT].id !== UT && "load" !== TT || (setTimeout(function(TT) {
            TT.call(this, UT, mT)
          }.bind(WT, zT[MT].hp), 0), zT[MT].once && WT.off(TT, zT[MT].hp, zT[MT].id));
          return WT._loadQueue(TT), WT
        },
        _loadQueue: function(TT) {
          var UT = this;
          if (UT._queue.length > 0) {
            var mT = UT._queue[0];
            mT.event === TT && (UT._queue.shift(), UT._loadQueue()), TT || mT.action()
          }
          return UT
        },
        _ended: function(TT) {
          var UT = this,
            mT = TT._sprite;
          if (!UT._webAudio && TT._node && !TT._node.paused && !TT._node.ended && TT._node.currentTime < TT._stop) return setTimeout(UT._ended.bind(UT, TT), 100), UT;
          var WT = !(!TT._loop && !UT._sprite[mT][2]);
          if (UT._emit("end", TT._id), !UT._webAudio && WT && UT.stop(TT._id, !0).play(TT._id), UT._webAudio && WT) {
            UT._emit("play", TT._id), TT._seek = TT._start || 0, TT._rateSeek = 0, TT._playStart = MT.ctx.currentTime;
            var zT = 1e3 * (TT._stop - TT._start) / Math.abs(TT._rate);
            UT._endTimers[TT._id] = setTimeout(UT._ended.bind(UT, TT), zT)
          }
          return UT._webAudio && !WT && (TT.bY = !0, TT._ended = !0, TT._seek = TT._start || 0, TT._rateSeek = 0, UT._clearTimer(TT._id), UT._cleanBuffer(TT._node), MT._autoSuspend()), UT._webAudio || WT || UT.stop(TT._id, !0), UT
        },
        _clearTimer: function(TT) {
          var UT = this;
          if (UT._endTimers[TT]) {
            if ("function" !== typeof UT._endTimers[TT]) clearTimeout(UT._endTimers[TT]);
            else {
              var mT = UT._soundById(TT);
              mT && mT._node && mT._node.removeEventListener("ended", UT._endTimers[TT], !1)
            }
            delete UT._endTimers[TT]
          }
          return UT
        },
        _soundById: function(TT) {
          for (var UT = this, mT = 0; mT < UT._sounds.length; mT++)
            if (TT === UT._sounds[mT]._id) return UT._sounds[mT];
          return null
        },
        _inactiveSound: function() {
          var TT = this;
          TT._drain();
          for (var UT = 0; UT < TT._sounds.length; UT++)
            if (TT._sounds[UT]._ended) return TT._sounds[UT].reset();
          return new nT(TT)
        },
        _drain: function() {
          var TT = this,
            UT = TT._pool,
            mT = 0,
            WT = 0;
          if (!(TT._sounds.length < UT)) {
            for (WT = 0; WT < TT._sounds.length; WT++) TT._sounds[WT]._ended && mT++;
            for (WT = TT._sounds.length - 1; WT >= 0; WT--) {
              if (mT <= UT) return;
              TT._sounds[WT]._ended && (TT._webAudio && TT._sounds[WT]._node && TT._sounds[WT]._node.disconnect(0), TT._sounds.splice(WT, 1), mT--)
            }
          }
        },
        _getSoundIds: function(TT) {
          if ("undefined" === typeof TT) {
            for (var UT = [], mT = 0; mT < this._sounds.length; mT++) UT.push(this._sounds[mT]._id);
            return UT
          }
          return [TT]
        },
        _refreshBuffer: function(TT) {
          return TT._node.bufferSource = MT.ctx.createBufferSource(), TT._node.bufferSource.buffer = HT[this._src], TT._panner ? TT._node.bufferSource.connect(TT._panner) : TT._node.bufferSource.connect(TT._node), TT._node.bufferSource.loop = TT._loop, TT._loop && (TT._node.bufferSource.loopStart = TT._start || 0, TT._node.bufferSource.loopEnd = TT._stop || 0), TT._node.bufferSource.playbackRate.setValueAtTime(TT._rate, MT.ctx.currentTime), this
        },
        _cleanBuffer: function(TT) {
          var UT = MT._navigator && MT._navigator.vendor.indexOf("Apple") >= 0;
          if (MT._scratchBuffer && TT.bufferSource && (TT.bufferSource.onended = null, TT.bufferSource.disconnect(0), UT)) try {
            TT.bufferSource.buffer = MT._scratchBuffer
          } catch (mT) {}
          return TT.bufferSource = null, this
        },
        _clearSound: function(TT) {
          /MSIE |Trident\//.test(MT._navigator && MT._navigator.userAgent) || (TT.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var nT = function(TT) {
        this._parent = TT, this.init()
      };
      nT.prototype = {
        init: function() {
          var TT = this,
            UT = TT._parent;
          return TT._muted = UT._muted, TT._loop = UT._loop, TT._volume = UT._volume, TT._rate = UT._rate, TT._seek = 0, TT.bY = !0, TT._ended = !0, TT._sprite = "__default", TT._id = ++MT._counter, UT._sounds.push(TT), TT.create(), TT
        },
        create: function() {
          var TT = this,
            UT = TT._parent,
            mT = MT._muted || TT._muted || TT._parent._muted ? 0 : TT._volume;
          return UT._webAudio ? (TT._node = "undefined" === typeof MT.ctx.createGain ? MT.ctx.createGainNode() : MT.ctx.createGain(), TT._node.gain.setValueAtTime(mT, MT.ctx.currentTime), TT._node.paused = !0, TT._node.connect(MT.masterGain)) : MT.noAudio || (TT._node = MT._obtainHtml5Audio(), TT._errorFn = TT._errorListener.bind(TT), TT._node.addEventListener("error", TT._errorFn, !1), TT._loadFn = TT._loadListener.bind(TT), TT._node.addEventListener(MT._canPlayEvent, TT._loadFn, !1), TT._endFn = TT._endListener.bind(TT), TT._node.addEventListener("ended", TT._endFn, !1), TT._node.src = UT._src, TT._node.preload = !0 === UT._preload ? "auto" : UT._preload, TT._node.volume = mT * MT.volume(), TT._node.load()), TT
        },
        reset: function() {
          var TT = this,
            UT = TT._parent;
          return TT._muted = UT._muted, TT._loop = UT._loop, TT._volume = UT._volume, TT._rate = UT._rate, TT._seek = 0, TT._rateSeek = 0, TT.bY = !0, TT._ended = !0, TT._sprite = "__default", TT._id = ++MT._counter, TT
        },
        _errorListener: function() {
          var TT = this;
          TT._parent._emit("loaderror", TT._id, TT._node.error ? TT._node.error.code : 0), TT._node.removeEventListener("error", TT._errorFn, !1)
        },
        _loadListener: function() {
          var TT = this,
            UT = TT._parent;
          UT._duration = Math.ceil(10 * TT._node.duration) / 10, 0 === Object.keys(UT._sprite).length && (UT._sprite = {
            __default: [0, 1e3 * UT._duration]
          }), "loaded" !== UT._state && (UT._state = "loaded", UT._emit("load"), UT._loadQueue()), TT._node.removeEventListener(MT._canPlayEvent, TT._loadFn, !1)
        },
        _endListener: function() {
          var TT = this,
            UT = TT._parent;
          UT._duration === 1 / 0 && (UT._duration = Math.ceil(10 * TT._node.duration) / 10, UT._sprite.__default[1] === 1 / 0 && (UT._sprite.__default[1] = 1e3 * UT._duration), UT._ended(TT)), TT._node.removeEventListener("ended", TT._endFn, !1)
        }
      };
      var HT = {},
        kT = function(TT) {
          var UT = TT._src;
          if (HT[UT]) return TT._duration = HT[UT].duration, void LT(TT);
          if (/^data:[^;]+;base64,/.test(UT)) {
            for (var mT = atob(UT.split(",")[1]), WT = new Uint8Array(mT.length), zT = 0; zT < mT.length; ++zT) WT[zT] = mT.charCodeAt(zT);
            lT(WT.buffer, TT)
          } else {
            var MT = new XMLHttpRequest;
            MT.open(TT._xhr.method, UT, !0), MT.withCredentials = TT._xhr.withCredentials, MT.responseType = "arraybuffer", TT._xhr.headers && Object.keys(TT._xhr.headers).forEach((function(UT) {
              MT.setRequestHeader(UT, TT._xhr.headers[UT])
            })), MT.onload = function() {
              var UT = (MT.status + "")[0];
              "0" === UT || "2" === UT || "3" === UT ? lT(MT.response, TT) : TT._emit("loaderror", null, "Failed loading audio file with status: " + MT.status + ".")
            }, MT.onerror = function() {
              TT._webAudio && (TT._html5 = !0, TT._webAudio = !1, TT._sounds = [], delete HT[UT], TT.load())
            }, jT(MT)
          }
        },
        jT = function(TT) {
          try {
            TT.send()
          } catch (UT) {
            TT.onerror()
          }
        },
        lT = function(TT, UT) {
          var mT = function() {
              UT._emit("loaderror", null, "Decoding audio data failed.")
            },
            WT = function(TT) {
              TT && UT._sounds.length > 0 ? (HT[UT._src] = TT, LT(UT, TT)) : mT()
            };
          "undefined" !== typeof Promise && 1 === MT.ctx.decodeAudioData.length ? MT.ctx.decodeAudioData(TT).then(WT).catch(mT) : MT.ctx.decodeAudioData(TT, WT, mT)
        },
        LT = function(TT, UT) {
          UT && !TT._duration && (TT._duration = UT.duration), 0 === Object.keys(TT._sprite).length && (TT._sprite = {
            __default: [0, 1e3 * TT._duration]
          }), "loaded" !== TT._state && (TT._state = "loaded", TT._emit("load"), TT._loadQueue())
        },
        pT = function() {
          if (MT.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? MT.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? MT.ctx = new webkitAudioContext : MT.usingWebAudio = !1
            } catch (zT) {
              MT.usingWebAudio = !1
            }
            MT.ctx || (MT.usingWebAudio = !1);
            var TT = /iP(hone|od|ad)/.test(MT._navigator && MT._navigator.platform),
              UT = MT._navigator && MT._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              mT = UT ? parseInt(UT[1], 10) : null;
            if (TT && mT && mT < 9) {
              var WT = /safari/.test(MT._navigator && MT._navigator.userAgent.toLowerCase());
              MT._navigator && !WT && (MT.usingWebAudio = !1)
            }
            MT.usingWebAudio && (MT.masterGain = "undefined" === typeof MT.ctx.createGain ? MT.ctx.createGainNode() : MT.ctx.createGain(), MT.masterGain.gain.setValueAtTime(MT._muted ? 0 : MT._volume, MT.ctx.currentTime), MT.masterGain.connect(MT.ctx.destination)), MT._setup()
          }
        };
      void 0 === (WT = function() {
        return {
          Howler: MT,
          Howl: gT
        }
      }.apply(UT, [])) || (TT.exports = WT), UT.Howler = MT, UT.Howl = gT, "undefined" !== typeof mT.g ? (mT.g.HowlerGlobal = zT, mT.g.Howler = MT, mT.g.Howl = gT, mT.g.Sound = nT) : "undefined" !== typeof window && (window.HowlerGlobal = zT, window.Howler = MT, window.Howl = gT, window.Sound = nT)
    }(),
    function() {
      var TT;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(TT) {
        var UT = this;
        if (!UT.ctx || !UT.ctx.listener) return UT;
        for (var mT = UT._howls.length - 1; mT >= 0; mT--) UT._howls[mT].stereo(TT);
        return UT
      }, HowlerGlobal.prototype.pos = function(TT, UT, mT) {
        var WT = this;
        return WT.ctx && WT.ctx.listener ? (UT = "number" !== typeof UT ? WT._pos[1] : UT, mT = "number" !== typeof mT ? WT._pos[2] : mT, "number" !== typeof TT ? WT._pos : (WT._pos = [TT, UT, mT], "undefined" !== typeof WT.ctx.listener.positionX ? (WT.ctx.listener.positionX.setTargetAtTime(WT._pos[0], Howler.ctx.currentTime, .1), WT.ctx.listener.positionY.setTargetAtTime(WT._pos[1], Howler.ctx.currentTime, .1), WT.ctx.listener.positionZ.setTargetAtTime(WT._pos[2], Howler.ctx.currentTime, .1)) : WT.ctx.listener.setPosition(WT._pos[0], WT._pos[1], WT._pos[2]), WT)) : WT
      }, HowlerGlobal.prototype.orientation = function(TT, UT, mT, WT, zT, MT) {
        var gT = this;
        if (!gT.ctx || !gT.ctx.listener) return gT;
        var nT = gT._orientation;
        return UT = "number" !== typeof UT ? nT[1] : UT, mT = "number" !== typeof mT ? nT[2] : mT, WT = "number" !== typeof WT ? nT[3] : WT, zT = "number" !== typeof zT ? nT[4] : zT, MT = "number" !== typeof MT ? nT[5] : MT, "number" !== typeof TT ? nT : (gT._orientation = [TT, UT, mT, WT, zT, MT], "undefined" !== typeof gT.ctx.listener.forwardX ? (gT.ctx.listener.forwardX.setTargetAtTime(TT, Howler.ctx.currentTime, .1), gT.ctx.listener.forwardY.setTargetAtTime(UT, Howler.ctx.currentTime, .1), gT.ctx.listener.forwardZ.setTargetAtTime(mT, Howler.ctx.currentTime, .1), gT.ctx.listener.upX.setTargetAtTime(WT, Howler.ctx.currentTime, .1), gT.ctx.listener.upY.setTargetAtTime(zT, Howler.ctx.currentTime, .1), gT.ctx.listener.upZ.setTargetAtTime(MT, Howler.ctx.currentTime, .1)) : gT.ctx.listener.setOrientation(TT, UT, mT, WT, zT, MT), gT)
      }, Howl.prototype.init = (TT = Howl.prototype.init, function(UT) {
        var mT = this;
        return mT._orientation = UT.orientation || [1, 0, 0], mT._stereo = UT.stereo || null, mT._pos = UT.pos || null, mT._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof UT.coneInnerAngle ? UT.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof UT.coneOuterAngle ? UT.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof UT.coneOuterGain ? UT.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof UT.distanceModel ? UT.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof UT.maxDistance ? UT.maxDistance : 1e4,
          panningModel: "undefined" !== typeof UT.panningModel ? UT.panningModel : "HRTF",
          refDistance: "undefined" !== typeof UT.refDistance ? UT.refDistance : 1,
          rolloffFactor: "undefined" !== typeof UT.rolloffFactor ? UT.rolloffFactor : 1
        }, mT._onstereo = UT.onstereo ? [{
          hp: UT.onstereo
        }] : [], mT._onpos = UT.onpos ? [{
          hp: UT.onpos
        }] : [], mT._onorientation = UT.onorientation ? [{
          hp: UT.onorientation
        }] : [], TT.call(this, UT)
      }), Howl.prototype.stereo = function(TT, mT) {
        var WT = this;
        if (!WT._webAudio) return WT;
        if ("loaded" !== WT._state) return WT._queue.push({
          event: "stereo",
          action: function() {
            WT.stereo(TT, mT)
          }
        }), WT;
        var zT = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof mT) {
          if ("number" !== typeof TT) return WT._stereo;
          WT._stereo = TT, WT._pos = [TT, 0, 0]
        }
        for (var MT = WT._getSoundIds(mT), gT = 0; gT < MT.length; gT++) {
          var nT = WT._soundById(MT[gT]);
          if (nT) {
            if ("number" !== typeof TT) return nT._stereo;
            nT._stereo = TT, nT._pos = [TT, 0, 0], nT._node && (nT._pannerAttr.panningModel = "equalpower", nT._panner && nT._panner.pan || UT(nT, zT), "spatial" === zT ? "undefined" !== typeof nT._panner.positionX ? (nT._panner.positionX.setValueAtTime(TT, Howler.ctx.currentTime), nT._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), nT._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : nT._panner.setPosition(TT, 0, 0) : nT._panner.pan.setValueAtTime(TT, Howler.ctx.currentTime)), WT._emit("stereo", nT._id)
          }
        }
        return WT
      }, Howl.prototype.pos = function(TT, mT, WT, zT) {
        var MT = this;
        if (!MT._webAudio) return MT;
        if ("loaded" !== MT._state) return MT._queue.push({
          event: "pos",
          action: function() {
            MT.pos(TT, mT, WT, zT)
          }
        }), MT;
        if (mT = "number" !== typeof mT ? 0 : mT, WT = "number" !== typeof WT ? -.5 : WT, "undefined" === typeof zT) {
          if ("number" !== typeof TT) return MT._pos;
          MT._pos = [TT, mT, WT]
        }
        for (var gT = MT._getSoundIds(zT), nT = 0; nT < gT.length; nT++) {
          var HT = MT._soundById(gT[nT]);
          if (HT) {
            if ("number" !== typeof TT) return HT._pos;
            HT._pos = [TT, mT, WT], HT._node && (HT._panner && !HT._panner.pan || UT(HT, "spatial"), "undefined" !== typeof HT._panner.positionX ? (HT._panner.positionX.setValueAtTime(TT, Howler.ctx.currentTime), HT._panner.positionY.setValueAtTime(mT, Howler.ctx.currentTime), HT._panner.positionZ.setValueAtTime(WT, Howler.ctx.currentTime)) : HT._panner.setPosition(TT, mT, WT)), MT._emit("pos", HT._id)
          }
        }
        return MT
      }, Howl.prototype.orientation = function(TT, mT, WT, zT) {
        var MT = this;
        if (!MT._webAudio) return MT;
        if ("loaded" !== MT._state) return MT._queue.push({
          event: "orientation",
          action: function() {
            MT.orientation(TT, mT, WT, zT)
          }
        }), MT;
        if (mT = "number" !== typeof mT ? MT._orientation[1] : mT, WT = "number" !== typeof WT ? MT._orientation[2] : WT, "undefined" === typeof zT) {
          if ("number" !== typeof TT) return MT._orientation;
          MT._orientation = [TT, mT, WT]
        }
        for (var gT = MT._getSoundIds(zT), nT = 0; nT < gT.length; nT++) {
          var HT = MT._soundById(gT[nT]);
          if (HT) {
            if ("number" !== typeof TT) return HT._orientation;
            HT._orientation = [TT, mT, WT], HT._node && (HT._panner || (HT._pos || (HT._pos = MT._pos || [0, 0, -.5]), UT(HT, "spatial")), "undefined" !== typeof HT._panner.orientationX ? (HT._panner.orientationX.setValueAtTime(TT, Howler.ctx.currentTime), HT._panner.orientationY.setValueAtTime(mT, Howler.ctx.currentTime), HT._panner.orientationZ.setValueAtTime(WT, Howler.ctx.currentTime)) : HT._panner.setOrientation(TT, mT, WT)), MT._emit("orientation", HT._id)
          }
        }
        return MT
      }, Howl.prototype.pannerAttr = function() {
        var TT, mT, WT, zT = this,
          MT = arguments;
        if (!zT._webAudio) return zT;
        if (0 === MT.length) return zT._pannerAttr;
        if (1 === MT.length) {
          if ("object" !== typeof MT[0]) return (WT = zT._soundById(parseInt(MT[0], 10))) ? WT._pannerAttr : zT._pannerAttr;
          TT = MT[0], "undefined" === typeof mT && (TT.pannerAttr || (TT.pannerAttr = {
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
        } else 2 === MT.length && (TT = MT[0], mT = parseInt(MT[1], 10));
        for (var gT = zT._getSoundIds(mT), nT = 0; nT < gT.length; nT++)
          if (WT = zT._soundById(gT[nT])) {
            var HT = WT._pannerAttr;
            HT = {
              coneInnerAngle: "undefined" !== typeof TT.coneInnerAngle ? TT.coneInnerAngle : HT.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof TT.coneOuterAngle ? TT.coneOuterAngle : HT.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof TT.coneOuterGain ? TT.coneOuterGain : HT.coneOuterGain,
              distanceModel: "undefined" !== typeof TT.distanceModel ? TT.distanceModel : HT.distanceModel,
              maxDistance: "undefined" !== typeof TT.maxDistance ? TT.maxDistance : HT.maxDistance,
              refDistance: "undefined" !== typeof TT.refDistance ? TT.refDistance : HT.refDistance,
              rolloffFactor: "undefined" !== typeof TT.rolloffFactor ? TT.rolloffFactor : HT.rolloffFactor,
              panningModel: "undefined" !== typeof TT.panningModel ? TT.panningModel : HT.panningModel
            };
            var kT = WT._panner;
            kT ? (kT.coneInnerAngle = HT.coneInnerAngle, kT.coneOuterAngle = HT.coneOuterAngle, kT.coneOuterGain = HT.coneOuterGain, kT.distanceModel = HT.distanceModel, kT.maxDistance = HT.maxDistance, kT.refDistance = HT.refDistance, kT.rolloffFactor = HT.rolloffFactor, kT.panningModel = HT.panningModel) : (WT._pos || (WT._pos = zT._pos || [0, 0, -.5]), UT(WT, "spatial"))
          } return zT
      }, Sound.prototype.init = function(TT) {
        return function() {
          var UT = this,
            mT = UT._parent;
          UT._orientation = mT._orientation, UT._stereo = mT._stereo, UT._pos = mT._pos, UT._pannerAttr = mT._pannerAttr, TT.call(this), UT._stereo ? mT.stereo(UT._stereo) : UT._pos && mT.pos(UT._pos[0], UT._pos[1], UT._pos[2], UT._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(TT) {
        return function() {
          var UT = this,
            mT = UT._parent;
          return UT._orientation = mT._orientation, UT._stereo = mT._stereo, UT._pos = mT._pos, UT._pannerAttr = mT._pannerAttr, UT._stereo ? mT.stereo(UT._stereo) : UT._pos ? mT.pos(UT._pos[0], UT._pos[1], UT._pos[2], UT._id) : UT._panner && (UT._panner.disconnect(0), UT._panner = void 0, mT._refreshBuffer(UT)), TT.call(this)
        }
      }(Sound.prototype.reset);
      var UT = function(TT, UT) {
        "spatial" === (UT = UT || "spatial") ? (TT._panner = Howler.ctx.createPanner(), TT._panner.coneInnerAngle = TT._pannerAttr.coneInnerAngle, TT._panner.coneOuterAngle = TT._pannerAttr.coneOuterAngle, TT._panner.coneOuterGain = TT._pannerAttr.coneOuterGain, TT._panner.distanceModel = TT._pannerAttr.distanceModel, TT._panner.maxDistance = TT._pannerAttr.maxDistance, TT._panner.refDistance = TT._pannerAttr.refDistance, TT._panner.rolloffFactor = TT._pannerAttr.rolloffFactor, TT._panner.panningModel = TT._pannerAttr.panningModel, "undefined" !== typeof TT._panner.positionX ? (TT._panner.positionX.setValueAtTime(TT._pos[0], Howler.ctx.currentTime), TT._panner.positionY.setValueAtTime(TT._pos[1], Howler.ctx.currentTime), TT._panner.positionZ.setValueAtTime(TT._pos[2], Howler.ctx.currentTime)) : TT._panner.setPosition(TT._pos[0], TT._pos[1], TT._pos[2]), "undefined" !== typeof TT._panner.orientationX ? (TT._panner.orientationX.setValueAtTime(TT._orientation[0], Howler.ctx.currentTime), TT._panner.orientationY.setValueAtTime(TT._orientation[1], Howler.ctx.currentTime), TT._panner.orientationZ.setValueAtTime(TT._orientation[2], Howler.ctx.currentTime)) : TT._panner.setOrientation(TT._orientation[0], TT._orientation[1], TT._orientation[2])) : (TT._panner = Howler.ctx.createStereoPanner(), TT._panner.pan.setValueAtTime(TT._stereo, Howler.ctx.currentTime)), TT._panner.connect(TT._node), TT.bY || TT._parent.pause(TT._id, !0).play(TT._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);