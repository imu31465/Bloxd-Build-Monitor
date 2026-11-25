/*! For license information please see wp3j0a.98.8490a80e.chunk.js.LICENSE.txt */
export const id = 98;
export const ids = [98];
export const modules = {
  4889: (GG, bG, ZG) => {
    var wG;
    ! function() {
      var SG = function() {
        this.init()
      };
      SG.prototype = {
        init: function() {
          var GG = this || LG;
          return GG._counter = 1e3, GG._html5AudioPool = [], GG.html5PoolSize = 10, GG._codecs = {}, GG._howls = [], GG._muted = !1, GG._volume = 1, GG._canPlayEvent = "canplaythrough", GG._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, GG.masterGain = null, GG.noAudio = !1, GG.usingWebAudio = !0, GG.autoSuspend = !0, GG.ctx = null, GG.autoUnlock = !0, GG._setup(), GG
        },
        volume: function(GG) {
          var bG = this || LG;
          if (GG = parseFloat(GG), bG.ctx || QG(), "undefined" !== typeof GG && GG >= 0 && GG <= 1) {
            if (bG._volume = GG, bG._muted) return bG;
            bG.usingWebAudio && bG.masterGain.gain.setValueAtTime(GG, LG.ctx.currentTime);
            for (var ZG = 0; ZG < bG._howls.length; ZG++)
              if (!bG._howls[ZG]._webAudio)
                for (var wG = bG._howls[ZG]._getSoundIds(), SG = 0; SG < wG.length; SG++) {
                  var yG = bG._howls[ZG]._soundById(wG[SG]);
                  yG && yG._node && (yG._node.volume = yG._volume * GG)
                }
            return bG
          }
          return bG._volume
        },
        mute: function(GG) {
          var bG = this || LG;
          bG.ctx || QG(), bG._muted = GG, bG.usingWebAudio && bG.masterGain.gain.setValueAtTime(GG ? 0 : bG._volume, LG.ctx.currentTime);
          for (var ZG = 0; ZG < bG._howls.length; ZG++)
            if (!bG._howls[ZG]._webAudio)
              for (var wG = bG._howls[ZG]._getSoundIds(), SG = 0; SG < wG.length; SG++) {
                var yG = bG._howls[ZG]._soundById(wG[SG]);
                yG && yG._node && (yG._node.muted = !!GG || yG._muted)
              }
          return bG
        },
        stop: function() {
          for (var GG = this || LG, bG = 0; bG < GG._howls.length; bG++) GG._howls[bG].stop();
          return GG
        },
        unload: function() {
          for (var GG = this || LG, bG = GG._howls.length - 1; bG >= 0; bG--) GG._howls[bG].unload();
          return GG.usingWebAudio && GG.ctx && "undefined" !== typeof GG.ctx.close && (GG.ctx.close(), GG.ctx = null, QG()), GG
        },
        codecs: function(GG) {
          return (this || LG)._codecs[GG.replace(/^x-/, "")]
        },
        _setup: function() {
          var GG = this || LG;
          if (GG.state = GG.ctx && GG.ctx.state || "suspended", GG._autoSuspend(), !GG.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (GG._canPlayEvent = "canplay")
            } catch (bG) {
              GG.noAudio = !0
            } else GG.noAudio = !0;
          try {
            (new Audio).muted && (GG.noAudio = !0)
          } catch (bG) {}
          return GG.noAudio || GG._setupCodecs(), GG
        },
        _setupCodecs: function() {
          var GG = this || LG,
            bG = null;
          try {
            bG = "undefined" !== typeof Audio ? new Audio : null
          } catch (VG) {
            return GG
          }
          if (!bG || "function" !== typeof bG.canPlayType) return GG;
          var ZG = bG.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            wG = GG._navigator ? GG._navigator.userAgent : "",
            SG = wG.match(/OPR\/([0-6].)/g),
            yG = SG && parseInt(SG[0].split("/")[1], 10) < 33,
            kG = -1 !== wG.indexOf("Safari") && -1 === wG.indexOf("Chrome"),
            UG = wG.match(/Version\/(.*?) /),
            YG = kG && UG && parseInt(UG[1], 10) < 15;
          return GG._codecs = {
            mp3: !(yG || !ZG && !bG.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!ZG,
            opus: !!bG.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!bG.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!bG.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(bG.canPlayType('audio/wav; codecs="1"') || bG.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!bG.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!bG.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(bG.canPlayType("audio/x-m4a;") || bG.canPlayType("audio/m4a;") || bG.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(bG.canPlayType("audio/x-m4b;") || bG.canPlayType("audio/m4b;") || bG.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(bG.canPlayType("audio/x-mp4;") || bG.canPlayType("audio/mp4;") || bG.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(YG || !bG.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(YG || !bG.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!bG.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(bG.canPlayType("audio/x-flac;") || bG.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, GG
        },
        _unlockAudio: function() {
          var GG = this || LG;
          if (!GG._audioUnlocked && GG.ctx) {
            GG._audioUnlocked = !1, GG.autoUnlock = !1, GG._mobileUnloaded || 44100 === GG.ctx.sampleRate || (GG._mobileUnloaded = !0, GG.unload()), GG._scratchBuffer = GG.ctx.createBuffer(1, 1, 22050);
            var bG = function(ZG) {
              for (; GG._html5AudioPool.length < GG.html5PoolSize;) try {
                var wG = new Audio;
                wG._unlocked = !0, GG._releaseHtml5Audio(wG)
              } catch (ZG) {
                GG.noAudio = !0;
                break
              }
              for (var SG = 0; SG < GG._howls.length; SG++)
                if (!GG._howls[SG]._webAudio)
                  for (var LG = GG._howls[SG]._getSoundIds(), yG = 0; yG < LG.length; yG++) {
                    var kG = GG._howls[SG]._soundById(LG[yG]);
                    kG && kG._node && !kG._node._unlocked && (kG._node._unlocked = !0, kG._node.load())
                  }
              GG._autoResume();
              var UG = GG.ctx.createBufferSource();
              UG.buffer = GG._scratchBuffer, UG.connect(GG.ctx.destination), "undefined" === typeof UG.start ? UG.noteOn(0) : UG.start(0), "function" === typeof GG.ctx.resume && GG.ctx.resume(), UG.onended = function() {
                UG.disconnect(0), GG._audioUnlocked = !0, document.removeEventListener("touchstart", bG, !0), document.removeEventListener("touchend", bG, !0), document.removeEventListener("click", bG, !0), document.removeEventListener("keydown", bG, !0);
                for (var ZG = 0; ZG < GG._howls.length; ZG++) GG._howls[ZG]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", bG, !0), document.addEventListener("touchend", bG, !0), document.addEventListener("click", bG, !0), document.addEventListener("keydown", bG, !0), GG
          }
        },
        _obtainHtml5Audio: function() {
          var GG = this || LG;
          if (GG._html5AudioPool.length) return GG._html5AudioPool.pop();
          var bG = (new Audio).play();
          return bG && "undefined" !== typeof Promise && (bG instanceof Promise || "function" === typeof bG.then) && bG.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(GG) {
          var bG = this || LG;
          return GG._unlocked && bG._html5AudioPool.push(GG), bG
        },
        _autoSuspend: function() {
          var GG = this;
          if (GG.autoSuspend && GG.ctx && "undefined" !== typeof GG.ctx.suspend && LG.usingWebAudio) {
            for (var bG = 0; bG < GG._howls.length; bG++)
              if (GG._howls[bG]._webAudio)
                for (var ZG = 0; ZG < GG._howls[bG]._sounds.length; ZG++)
                  if (!GG._howls[bG]._sounds[ZG].pE) return GG;
            return GG._suspendTimer && clearTimeout(GG._suspendTimer), GG._suspendTimer = setTimeout((function() {
              if (GG.autoSuspend) {
                GG._suspendTimer = null, GG.state = "suspending";
                var bG = function() {
                  GG.state = "suspended", GG._resumeAfterSuspend && (delete GG._resumeAfterSuspend, GG._autoResume())
                };
                GG.ctx.suspend().then(bG, bG)
              }
            }), 3e4), GG
          }
        },
        _autoResume: function() {
          var GG = this;
          if (GG.ctx && "undefined" !== typeof GG.ctx.resume && LG.usingWebAudio) return "running" === GG.state && "interrupted" !== GG.ctx.state && GG._suspendTimer ? (clearTimeout(GG._suspendTimer), GG._suspendTimer = null) : "suspended" === GG.state || "running" === GG.state && "interrupted" === GG.ctx.state ? (GG.ctx.resume().then((function() {
            GG.state = "running";
            for (var bG = 0; bG < GG._howls.length; bG++) GG._howls[bG]._emit("resume")
          })), GG._suspendTimer && (clearTimeout(GG._suspendTimer), GG._suspendTimer = null)) : "suspending" === GG.state && (GG._resumeAfterSuspend = !0), GG
        }
      };
      var LG = new SG,
        yG = function(GG) {
          GG.src && 0 !== GG.src.length ? this.init(GG) : console.error("An array of source files must be passed with any new Howl.")
        };
      yG.prototype = {
        init: function(GG) {
          var bG = this;
          return LG.ctx || QG(), bG._autoplay = GG.autoplay || !1, bG._format = "string" !== typeof GG.format ? GG.format : [GG.format], bG._html5 = GG.html5 || !1, bG._muted = GG.mute || !1, bG._loop = GG.loop || !1, bG._pool = GG.pool || 5, bG._preload = "boolean" !== typeof GG.preload && "metadata" !== GG.preload || GG.preload, bG._rate = GG.rate || 1, bG._sprite = GG.sprite || {}, bG._src = "string" !== typeof GG.src ? GG.src : [GG.src], bG._volume = void 0 !== GG.volume ? GG.volume : 1, bG._xhr = {
            method: GG.xhr && GG.xhr.method ? GG.xhr.method : "GET",
            headers: GG.xhr && GG.xhr.headers ? GG.xhr.headers : null,
            withCredentials: !(!GG.xhr || !GG.xhr.withCredentials) && GG.xhr.withCredentials
          }, bG._duration = 0, bG._state = "unloaded", bG._sounds = [], bG._endTimers = {}, bG._queue = [], bG._playLock = !1, bG._onend = GG.onend ? [{
            BQ: GG.onend
          }] : [], bG._onfade = GG.onfade ? [{
            BQ: GG.onfade
          }] : [], bG._onload = GG.onload ? [{
            BQ: GG.onload
          }] : [], bG._onloaderror = GG.onloaderror ? [{
            BQ: GG.onloaderror
          }] : [], bG._onplayerror = GG.onplayerror ? [{
            BQ: GG.onplayerror
          }] : [], bG._onpause = GG.onpause ? [{
            BQ: GG.onpause
          }] : [], bG._onplay = GG.onplay ? [{
            BQ: GG.onplay
          }] : [], bG._onstop = GG.onstop ? [{
            BQ: GG.onstop
          }] : [], bG._onmute = GG.onmute ? [{
            BQ: GG.onmute
          }] : [], bG._onvolume = GG.onvolume ? [{
            BQ: GG.onvolume
          }] : [], bG._onrate = GG.onrate ? [{
            BQ: GG.onrate
          }] : [], bG._onseek = GG.onseek ? [{
            BQ: GG.onseek
          }] : [], bG._onunlock = GG.onunlock ? [{
            BQ: GG.onunlock
          }] : [], bG._onresume = [], bG._webAudio = LG.usingWebAudio && !bG._html5, "undefined" !== typeof LG.ctx && LG.ctx && LG.autoUnlock && LG._unlockAudio(), LG._howls.push(bG), bG._autoplay && bG._queue.push({
            event: "play",
            action: function() {
              bG.play()
            }
          }), bG._preload && "none" !== bG._preload && bG.load(), bG
        },
        load: function() {
          var GG = this,
            bG = null;
          if (LG.noAudio) GG._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof GG._src && (GG._src = [GG._src]);
            for (var ZG = 0; ZG < GG._src.length; ZG++) {
              var wG, SG;
              if (GG._format && GG._format[ZG]) wG = GG._format[ZG];
              else {
                if ("string" !== typeof(SG = GG._src[ZG])) {
                  GG._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(wG = /^data:audio\/([^;,]+);/i.exec(SG)) || (wG = /\.([^.]+)$/.exec(SG.split("?", 1)[0])), wG && (wG = wG[1].toLowerCase())
              }
              if (wG || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), wG && LG.codecs(wG)) {
                bG = GG._src[ZG];
                break
              }
            }
            if (bG) return GG._src = bG, GG._state = "loading", "https:" === window.location.protocol && "http:" === bG.slice(0, 5) && (GG._html5 = !0, GG._webAudio = !1), new kG(GG), GG._webAudio && YG(GG), GG;
            GG._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(GG, bG) {
          var ZG = this,
            wG = null;
          if ("number" === typeof GG) wG = GG, GG = null;
          else {
            if ("string" === typeof GG && "loaded" === ZG._state && !ZG._sprite[GG]) return null;
            if ("undefined" === typeof GG && (GG = "__default", !ZG._playLock)) {
              for (var SG = 0, yG = 0; yG < ZG._sounds.length; yG++) ZG._sounds[yG].pE && !ZG._sounds[yG]._ended && (SG++, wG = ZG._sounds[yG]._id);
              1 === SG ? GG = null : wG = null
            }
          }
          var kG = wG ? ZG._soundById(wG) : ZG._inactiveSound();
          if (!kG) return null;
          if (wG && !GG && (GG = kG._sprite || "__default"), "loaded" !== ZG._state) {
            kG._sprite = GG, kG._ended = !1;
            var UG = kG._id;
            return ZG._queue.push({
              event: "play",
              action: function() {
                ZG.play(UG)
              }
            }), UG
          }
          if (wG && !kG.pE) return bG || ZG._loadQueue("play"), kG._id;
          ZG._webAudio && LG._autoResume();
          var YG = Math.max(0, kG._seek > 0 ? kG._seek : ZG._sprite[GG][0] / 1e3),
            VG = Math.max(0, (ZG._sprite[GG][0] + ZG._sprite[GG][1]) / 1e3 - YG),
            pG = 1e3 * VG / Math.abs(kG._rate),
            fG = ZG._sprite[GG][0] / 1e3,
            QG = (ZG._sprite[GG][0] + ZG._sprite[GG][1]) / 1e3;
          kG._sprite = GG, kG._ended = !1;
          var KG = function() {
            kG.pE = !1, kG._seek = YG, kG._start = fG, kG._stop = QG, kG._loop = !(!kG._loop && !ZG._sprite[GG][2])
          };
          if (!(YG >= QG)) {
            var hG = kG._node;
            if (ZG._webAudio) {
              var dG = function() {
                ZG._playLock = !1, KG(), ZG._refreshBuffer(kG);
                var GG = kG._muted || ZG._muted ? 0 : kG._volume;
                hG.gain.setValueAtTime(GG, LG.ctx.currentTime), kG._playStart = LG.ctx.currentTime, "undefined" === typeof hG.bufferSource.start ? kG._loop ? hG.bufferSource.noteGrainOn(0, YG, 86400) : hG.bufferSource.noteGrainOn(0, YG, VG) : kG._loop ? hG.bufferSource.start(0, YG, 86400) : hG.bufferSource.start(0, YG, VG), pG !== 1 / 0 && (ZG._endTimers[kG._id] = setTimeout(ZG._ended.bind(ZG, kG), pG)), bG || setTimeout((function() {
                  ZG._emit("play", kG._id), ZG._loadQueue()
                }), 0)
              };
              "running" === LG.state && "interrupted" !== LG.ctx.state ? dG() : (ZG._playLock = !0, ZG.once("resume", dG), ZG._clearTimer(kG._id))
            } else {
              var JG = function() {
                hG.currentTime = YG, hG.muted = kG._muted || ZG._muted || LG._muted || hG.muted, hG.volume = kG._volume * LG.volume(), hG.playbackRate = kG._rate;
                try {
                  var wG = hG.play();
                  if (wG && "undefined" !== typeof Promise && (wG instanceof Promise || "function" === typeof wG.then) ? (ZG._playLock = !0, KG(), wG.then((function() {
                      ZG._playLock = !1, hG._unlocked = !0, bG ? ZG._loadQueue() : ZG._emit("play", kG._id)
                    })).catch((function() {
                      ZG._playLock = !1, ZG._emit("playerror", kG._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), kG._ended = !0, kG.pE = !0
                    }))) : bG || (ZG._playLock = !1, KG(), ZG._emit("play", kG._id)), hG.playbackRate = kG._rate, hG.paused) return void ZG._emit("playerror", kG._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== GG || kG._loop ? ZG._endTimers[kG._id] = setTimeout(ZG._ended.bind(ZG, kG), pG) : (ZG._endTimers[kG._id] = function() {
                    ZG._ended(kG), hG.removeEventListener("ended", ZG._endTimers[kG._id], !1)
                  }, hG.addEventListener("ended", ZG._endTimers[kG._id], !1))
                } catch (SG) {
                  ZG._emit("playerror", kG._id, SG)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === hG.src && (hG.src = ZG._src, hG.load());
              var rG = window && window.ejecta || !hG.readyState && LG._navigator.isCocoonJS;
              if (hG.readyState >= 3 || rG) JG();
              else {
                ZG._playLock = !0, ZG._state = "loading";
                var zG = function() {
                  ZG._state = "loaded", JG(), hG.removeEventListener(LG._canPlayEvent, zG, !1)
                };
                hG.addEventListener(LG._canPlayEvent, zG, !1), ZG._clearTimer(kG._id)
              }
            }
            return kG._id
          }
          ZG._ended(kG)
        },
        pause: function(GG) {
          var bG = this;
          if ("loaded" !== bG._state || bG._playLock) return bG._queue.push({
            event: "pause",
            action: function() {
              bG.pause(GG)
            }
          }), bG;
          for (var ZG = bG._getSoundIds(GG), wG = 0; wG < ZG.length; wG++) {
            bG._clearTimer(ZG[wG]);
            var SG = bG._soundById(ZG[wG]);
            if (SG && !SG.pE && (SG._seek = bG.seek(ZG[wG]), SG._rateSeek = 0, SG.pE = !0, bG._stopFade(ZG[wG]), SG._node))
              if (bG._webAudio) {
                if (!SG._node.bufferSource) continue;
                "undefined" === typeof SG._node.bufferSource.stop ? SG._node.bufferSource.noteOff(0) : SG._node.bufferSource.stop(0), bG._cleanBuffer(SG._node)
              } else isNaN(SG._node.duration) && SG._node.duration !== 1 / 0 || SG._node.pause();
            arguments[1] || bG._emit("pause", SG ? SG._id : null)
          }
          return bG
        },
        stop: function(GG, bG) {
          var ZG = this;
          if ("loaded" !== ZG._state || ZG._playLock) return ZG._queue.push({
            event: "stop",
            action: function() {
              ZG.stop(GG)
            }
          }), ZG;
          for (var wG = ZG._getSoundIds(GG), SG = 0; SG < wG.length; SG++) {
            ZG._clearTimer(wG[SG]);
            var LG = ZG._soundById(wG[SG]);
            LG && (LG._seek = LG._start || 0, LG._rateSeek = 0, LG.pE = !0, LG._ended = !0, ZG._stopFade(wG[SG]), LG._node && (ZG._webAudio ? LG._node.bufferSource && ("undefined" === typeof LG._node.bufferSource.stop ? LG._node.bufferSource.noteOff(0) : LG._node.bufferSource.stop(0), ZG._cleanBuffer(LG._node)) : isNaN(LG._node.duration) && LG._node.duration !== 1 / 0 || (LG._node.currentTime = LG._start || 0, LG._node.pause(), LG._node.duration === 1 / 0 && ZG._clearSound(LG._node))), bG || ZG._emit("stop", LG._id))
          }
          return ZG
        },
        mute: function(GG, bG) {
          var ZG = this;
          if ("loaded" !== ZG._state || ZG._playLock) return ZG._queue.push({
            event: "mute",
            action: function() {
              ZG.mute(GG, bG)
            }
          }), ZG;
          if ("undefined" === typeof bG) {
            if ("boolean" !== typeof GG) return ZG._muted;
            ZG._muted = GG
          }
          for (var wG = ZG._getSoundIds(bG), SG = 0; SG < wG.length; SG++) {
            var yG = ZG._soundById(wG[SG]);
            yG && (yG._muted = GG, yG._interval && ZG._stopFade(yG._id), ZG._webAudio && yG._node ? yG._node.gain.setValueAtTime(GG ? 0 : yG._volume, LG.ctx.currentTime) : yG._node && (yG._node.muted = !!LG._muted || GG), ZG._emit("mute", yG._id))
          }
          return ZG
        },
        volume: function() {
          var GG, bG, ZG, wG = this,
            SG = arguments;
          if (0 === SG.length) return wG._volume;
          if (1 === SG.length || 2 === SG.length && "undefined" === typeof SG[1] ? wG._getSoundIds().indexOf(SG[0]) >= 0 ? bG = parseInt(SG[0], 10) : GG = parseFloat(SG[0]) : SG.length >= 2 && (GG = parseFloat(SG[0]), bG = parseInt(SG[1], 10)), !("undefined" !== typeof GG && GG >= 0 && GG <= 1)) return (ZG = bG ? wG._soundById(bG) : wG._sounds[0]) ? ZG._volume : 0;
          if ("loaded" !== wG._state || wG._playLock) return wG._queue.push({
            event: "volume",
            action: function() {
              wG.volume.apply(wG, SG)
            }
          }), wG;
          "undefined" === typeof bG && (wG._volume = GG), bG = wG._getSoundIds(bG);
          for (var yG = 0; yG < bG.length; yG++)(ZG = wG._soundById(bG[yG])) && (ZG._volume = GG, SG[2] || wG._stopFade(bG[yG]), wG._webAudio && ZG._node && !ZG._muted ? ZG._node.gain.setValueAtTime(GG, LG.ctx.currentTime) : ZG._node && !ZG._muted && (ZG._node.volume = GG * LG.volume()), wG._emit("volume", ZG._id));
          return wG
        },
        fade: function(GG, bG, ZG, wG) {
          var SG = this;
          if ("loaded" !== SG._state || SG._playLock) return SG._queue.push({
            event: "fade",
            action: function() {
              SG.fade(GG, bG, ZG, wG)
            }
          }), SG;
          GG = Math.min(Math.max(0, parseFloat(GG)), 1), bG = Math.min(Math.max(0, parseFloat(bG)), 1), ZG = parseFloat(ZG), SG.volume(GG, wG);
          for (var yG = SG._getSoundIds(wG), kG = 0; kG < yG.length; kG++) {
            var UG = SG._soundById(yG[kG]);
            if (UG) {
              if (wG || SG._stopFade(yG[kG]), SG._webAudio && !UG._muted) {
                var YG = LG.ctx.currentTime,
                  VG = YG + ZG / 1e3;
                UG._volume = GG, UG._node.gain.setValueAtTime(GG, YG), UG._node.gain.linearRampToValueAtTime(bG, VG)
              }
              SG._startFadeInterval(UG, GG, bG, ZG, yG[kG], "undefined" === typeof wG)
            }
          }
          return SG
        },
        _startFadeInterval: function(GG, bG, ZG, wG, SG, LG) {
          var yG = this,
            kG = bG,
            UG = ZG - bG,
            YG = Math.abs(UG / .01),
            VG = Math.max(4, YG > 0 ? wG / YG : wG),
            pG = Date.now();
          GG._fadeTo = ZG, GG._interval = setInterval((function() {
            var SG = (Date.now() - pG) / wG;
            pG = Date.now(), kG += UG * SG, kG = Math.round(100 * kG) / 100, kG = UG < 0 ? Math.max(ZG, kG) : Math.min(ZG, kG), yG._webAudio ? GG._volume = kG : yG.volume(kG, GG._id, !0), LG && (yG._volume = kG), (ZG < bG && kG <= ZG || ZG > bG && kG >= ZG) && (clearInterval(GG._interval), GG._interval = null, GG._fadeTo = null, yG.volume(ZG, GG._id), yG._emit("fade", GG._id))
          }), VG)
        },
        _stopFade: function(GG) {
          var bG = this,
            ZG = bG._soundById(GG);
          return ZG && ZG._interval && (bG._webAudio && ZG._node.gain.cancelScheduledValues(LG.ctx.currentTime), clearInterval(ZG._interval), ZG._interval = null, bG.volume(ZG._fadeTo, GG), ZG._fadeTo = null, bG._emit("fade", GG)), bG
        },
        loop: function() {
          var GG, bG, ZG, wG = this,
            SG = arguments;
          if (0 === SG.length) return wG._loop;
          if (1 === SG.length) {
            if ("boolean" !== typeof SG[0]) return !!(ZG = wG._soundById(parseInt(SG[0], 10))) && ZG._loop;
            GG = SG[0], wG._loop = GG
          } else 2 === SG.length && (GG = SG[0], bG = parseInt(SG[1], 10));
          for (var LG = wG._getSoundIds(bG), yG = 0; yG < LG.length; yG++)(ZG = wG._soundById(LG[yG])) && (ZG._loop = GG, wG._webAudio && ZG._node && ZG._node.bufferSource && (ZG._node.bufferSource.loop = GG, GG && (ZG._node.bufferSource.loopStart = ZG._start || 0, ZG._node.bufferSource.loopEnd = ZG._stop, wG.playing(LG[yG]) && (wG.pause(LG[yG], !0), wG.play(LG[yG], !0)))));
          return wG
        },
        rate: function() {
          var GG, bG, ZG, wG = this,
            SG = arguments;
          if (0 === SG.length) bG = wG._sounds[0]._id;
          else if (1 === SG.length) {
            wG._getSoundIds().indexOf(SG[0]) >= 0 ? bG = parseInt(SG[0], 10) : GG = parseFloat(SG[0])
          } else 2 === SG.length && (GG = parseFloat(SG[0]), bG = parseInt(SG[1], 10));
          if ("number" !== typeof GG) return (ZG = wG._soundById(bG)) ? ZG._rate : wG._rate;
          if ("loaded" !== wG._state || wG._playLock) return wG._queue.push({
            event: "rate",
            action: function() {
              wG.rate.apply(wG, SG)
            }
          }), wG;
          "undefined" === typeof bG && (wG._rate = GG), bG = wG._getSoundIds(bG);
          for (var yG = 0; yG < bG.length; yG++)
            if (ZG = wG._soundById(bG[yG])) {
              wG.playing(bG[yG]) && (ZG._rateSeek = wG.seek(bG[yG]), ZG._playStart = wG._webAudio ? LG.ctx.currentTime : ZG._playStart), ZG._rate = GG, wG._webAudio && ZG._node && ZG._node.bufferSource ? ZG._node.bufferSource.playbackRate.setValueAtTime(GG, LG.ctx.currentTime) : ZG._node && (ZG._node.playbackRate = GG);
              var kG = wG.seek(bG[yG]),
                UG = 1e3 * ((wG._sprite[ZG._sprite][0] + wG._sprite[ZG._sprite][1]) / 1e3 - kG) / Math.abs(ZG._rate);
              !wG._endTimers[bG[yG]] && ZG.pE || (wG._clearTimer(bG[yG]), wG._endTimers[bG[yG]] = setTimeout(wG._ended.bind(wG, ZG), UG)), wG._emit("rate", ZG._id)
            } return wG
        },
        seek: function() {
          var GG, bG, ZG = this,
            wG = arguments;
          if (0 === wG.length) ZG._sounds.length && (bG = ZG._sounds[0]._id);
          else if (1 === wG.length) {
            ZG._getSoundIds().indexOf(wG[0]) >= 0 ? bG = parseInt(wG[0], 10) : ZG._sounds.length && (bG = ZG._sounds[0]._id, GG = parseFloat(wG[0]))
          } else 2 === wG.length && (GG = parseFloat(wG[0]), bG = parseInt(wG[1], 10));
          if ("undefined" === typeof bG) return 0;
          if ("number" === typeof GG && ("loaded" !== ZG._state || ZG._playLock)) return ZG._queue.push({
            event: "seek",
            action: function() {
              ZG.seek.apply(ZG, wG)
            }
          }), ZG;
          var SG = ZG._soundById(bG);
          if (SG) {
            if (!("number" === typeof GG && GG >= 0)) {
              if (ZG._webAudio) {
                var yG = ZG.playing(bG) ? LG.ctx.currentTime - SG._playStart : 0,
                  kG = SG._rateSeek ? SG._rateSeek - SG._seek : 0;
                return SG._seek + (kG + yG * Math.abs(SG._rate))
              }
              return SG._node.currentTime
            }
            var UG = ZG.playing(bG);
            UG && ZG.pause(bG, !0), SG._seek = GG, SG._ended = !1, ZG._clearTimer(bG), ZG._webAudio || !SG._node || isNaN(SG._node.duration) || (SG._node.currentTime = GG);
            var YG = function() {
              UG && ZG.play(bG, !0), ZG._emit("seek", bG)
            };
            if (UG && !ZG._webAudio) {
              var VG = function() {
                ZG._playLock ? setTimeout(VG, 0) : YG()
              };
              setTimeout(VG, 0)
            } else YG()
          }
          return ZG
        },
        playing: function(GG) {
          var bG = this;
          if ("number" === typeof GG) {
            var ZG = bG._soundById(GG);
            return !!ZG && !ZG.pE
          }
          for (var wG = 0; wG < bG._sounds.length; wG++)
            if (!bG._sounds[wG].pE) return !0;
          return !1
        },
        duration: function(GG) {
          var bG = this,
            ZG = bG._duration,
            wG = bG._soundById(GG);
          return wG && (ZG = bG._sprite[wG._sprite][1] / 1e3), ZG
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var GG = this, bG = GG._sounds, ZG = 0; ZG < bG.length; ZG++) bG[ZG].pE || GG.stop(bG[ZG]._id), GG._webAudio || (GG._clearSound(bG[ZG]._node), bG[ZG]._node.removeEventListener("error", bG[ZG]._errorFn, !1), bG[ZG]._node.removeEventListener(LG._canPlayEvent, bG[ZG]._loadFn, !1), bG[ZG]._node.removeEventListener("ended", bG[ZG]._endFn, !1), LG._releaseHtml5Audio(bG[ZG]._node)), delete bG[ZG]._node, GG._clearTimer(bG[ZG]._id);
          var wG = LG._howls.indexOf(GG);
          wG >= 0 && LG._howls.splice(wG, 1);
          var SG = !0;
          for (ZG = 0; ZG < LG._howls.length; ZG++)
            if (LG._howls[ZG]._src === GG._src || GG._src.indexOf(LG._howls[ZG]._src) >= 0) {
              SG = !1;
              break
            } return UG && SG && delete UG[GG._src], LG.noAudio = !1, GG._state = "unloaded", GG._sounds = [], GG = null, null
        },
        on: function(GG, bG, ZG, wG) {
          var SG = this["_on" + GG];
          return "function" === typeof bG && SG.push(wG ? {
            id: ZG,
            BQ: bG,
            once: wG
          } : {
            id: ZG,
            BQ: bG
          }), this
        },
        off: function(GG, bG, ZG) {
          var wG = this,
            SG = wG["_on" + GG],
            LG = 0;
          if ("number" === typeof bG && (ZG = bG, bG = null), bG || ZG)
            for (LG = 0; LG < SG.length; LG++) {
              var yG = ZG === SG[LG].id;
              if (bG === SG[LG].BQ && yG || !bG && yG) {
                SG.splice(LG, 1);
                break
              }
            } else if (GG) wG["_on" + GG] = [];
            else {
              var kG = Object.keys(wG);
              for (LG = 0; LG < kG.length; LG++) 0 === kG[LG].indexOf("_on") && Array.isArray(wG[kG[LG]]) && (wG[kG[LG]] = [])
            } return wG
        },
        once: function(GG, bG, ZG) {
          return this.on(GG, bG, ZG, 1), this
        },
        _emit: function(GG, bG, ZG) {
          for (var wG = this, SG = wG["_on" + GG], LG = SG.length - 1; LG >= 0; LG--) SG[LG].id && SG[LG].id !== bG && "load" !== GG || (setTimeout(function(GG) {
            GG.call(this, bG, ZG)
          }.bind(wG, SG[LG].BQ), 0), SG[LG].once && wG.off(GG, SG[LG].BQ, SG[LG].id));
          return wG._loadQueue(GG), wG
        },
        _loadQueue: function(GG) {
          var bG = this;
          if (bG._queue.length > 0) {
            var ZG = bG._queue[0];
            ZG.event === GG && (bG._queue.shift(), bG._loadQueue()), GG || ZG.action()
          }
          return bG
        },
        _ended: function(GG) {
          var bG = this,
            ZG = GG._sprite;
          if (!bG._webAudio && GG._node && !GG._node.paused && !GG._node.ended && GG._node.currentTime < GG._stop) return setTimeout(bG._ended.bind(bG, GG), 100), bG;
          var wG = !(!GG._loop && !bG._sprite[ZG][2]);
          if (bG._emit("end", GG._id), !bG._webAudio && wG && bG.stop(GG._id, !0).play(GG._id), bG._webAudio && wG) {
            bG._emit("play", GG._id), GG._seek = GG._start || 0, GG._rateSeek = 0, GG._playStart = LG.ctx.currentTime;
            var SG = 1e3 * (GG._stop - GG._start) / Math.abs(GG._rate);
            bG._endTimers[GG._id] = setTimeout(bG._ended.bind(bG, GG), SG)
          }
          return bG._webAudio && !wG && (GG.pE = !0, GG._ended = !0, GG._seek = GG._start || 0, GG._rateSeek = 0, bG._clearTimer(GG._id), bG._cleanBuffer(GG._node), LG._autoSuspend()), bG._webAudio || wG || bG.stop(GG._id, !0), bG
        },
        _clearTimer: function(GG) {
          var bG = this;
          if (bG._endTimers[GG]) {
            if ("function" !== typeof bG._endTimers[GG]) clearTimeout(bG._endTimers[GG]);
            else {
              var ZG = bG._soundById(GG);
              ZG && ZG._node && ZG._node.removeEventListener("ended", bG._endTimers[GG], !1)
            }
            delete bG._endTimers[GG]
          }
          return bG
        },
        _soundById: function(GG) {
          for (var bG = this, ZG = 0; ZG < bG._sounds.length; ZG++)
            if (GG === bG._sounds[ZG]._id) return bG._sounds[ZG];
          return null
        },
        _inactiveSound: function() {
          var GG = this;
          GG._drain();
          for (var bG = 0; bG < GG._sounds.length; bG++)
            if (GG._sounds[bG]._ended) return GG._sounds[bG].reset();
          return new kG(GG)
        },
        _drain: function() {
          var GG = this,
            bG = GG._pool,
            ZG = 0,
            wG = 0;
          if (!(GG._sounds.length < bG)) {
            for (wG = 0; wG < GG._sounds.length; wG++) GG._sounds[wG]._ended && ZG++;
            for (wG = GG._sounds.length - 1; wG >= 0; wG--) {
              if (ZG <= bG) return;
              GG._sounds[wG]._ended && (GG._webAudio && GG._sounds[wG]._node && GG._sounds[wG]._node.disconnect(0), GG._sounds.splice(wG, 1), ZG--)
            }
          }
        },
        _getSoundIds: function(GG) {
          if ("undefined" === typeof GG) {
            for (var bG = [], ZG = 0; ZG < this._sounds.length; ZG++) bG.push(this._sounds[ZG]._id);
            return bG
          }
          return [GG]
        },
        _refreshBuffer: function(GG) {
          return GG._node.bufferSource = LG.ctx.createBufferSource(), GG._node.bufferSource.buffer = UG[this._src], GG._panner ? GG._node.bufferSource.connect(GG._panner) : GG._node.bufferSource.connect(GG._node), GG._node.bufferSource.loop = GG._loop, GG._loop && (GG._node.bufferSource.loopStart = GG._start || 0, GG._node.bufferSource.loopEnd = GG._stop || 0), GG._node.bufferSource.playbackRate.setValueAtTime(GG._rate, LG.ctx.currentTime), this
        },
        _cleanBuffer: function(GG) {
          var bG = LG._navigator && LG._navigator.vendor.indexOf("Apple") >= 0;
          if (LG._scratchBuffer && GG.bufferSource && (GG.bufferSource.onended = null, GG.bufferSource.disconnect(0), bG)) try {
            GG.bufferSource.buffer = LG._scratchBuffer
          } catch (ZG) {}
          return GG.bufferSource = null, this
        },
        _clearSound: function(GG) {
          /MSIE |Trident\//.test(LG._navigator && LG._navigator.userAgent) || (GG.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var kG = function(GG) {
        this._parent = GG, this.init()
      };
      kG.prototype = {
        init: function() {
          var GG = this,
            bG = GG._parent;
          return GG._muted = bG._muted, GG._loop = bG._loop, GG._volume = bG._volume, GG._rate = bG._rate, GG._seek = 0, GG.pE = !0, GG._ended = !0, GG._sprite = "__default", GG._id = ++LG._counter, bG._sounds.push(GG), GG.create(), GG
        },
        create: function() {
          var GG = this,
            bG = GG._parent,
            ZG = LG._muted || GG._muted || GG._parent._muted ? 0 : GG._volume;
          return bG._webAudio ? (GG._node = "undefined" === typeof LG.ctx.createGain ? LG.ctx.createGainNode() : LG.ctx.createGain(), GG._node.gain.setValueAtTime(ZG, LG.ctx.currentTime), GG._node.paused = !0, GG._node.connect(LG.masterGain)) : LG.noAudio || (GG._node = LG._obtainHtml5Audio(), GG._errorFn = GG._errorListener.bind(GG), GG._node.addEventListener("error", GG._errorFn, !1), GG._loadFn = GG._loadListener.bind(GG), GG._node.addEventListener(LG._canPlayEvent, GG._loadFn, !1), GG._endFn = GG._endListener.bind(GG), GG._node.addEventListener("ended", GG._endFn, !1), GG._node.src = bG._src, GG._node.preload = !0 === bG._preload ? "auto" : bG._preload, GG._node.volume = ZG * LG.volume(), GG._node.load()), GG
        },
        reset: function() {
          var GG = this,
            bG = GG._parent;
          return GG._muted = bG._muted, GG._loop = bG._loop, GG._volume = bG._volume, GG._rate = bG._rate, GG._seek = 0, GG._rateSeek = 0, GG.pE = !0, GG._ended = !0, GG._sprite = "__default", GG._id = ++LG._counter, GG
        },
        _errorListener: function() {
          var GG = this;
          GG._parent._emit("loaderror", GG._id, GG._node.error ? GG._node.error.code : 0), GG._node.removeEventListener("error", GG._errorFn, !1)
        },
        _loadListener: function() {
          var GG = this,
            bG = GG._parent;
          bG._duration = Math.ceil(10 * GG._node.duration) / 10, 0 === Object.keys(bG._sprite).length && (bG._sprite = {
            __default: [0, 1e3 * bG._duration]
          }), "loaded" !== bG._state && (bG._state = "loaded", bG._emit("load"), bG._loadQueue()), GG._node.removeEventListener(LG._canPlayEvent, GG._loadFn, !1)
        },
        _endListener: function() {
          var GG = this,
            bG = GG._parent;
          bG._duration === 1 / 0 && (bG._duration = Math.ceil(10 * GG._node.duration) / 10, bG._sprite.__default[1] === 1 / 0 && (bG._sprite.__default[1] = 1e3 * bG._duration), bG._ended(GG)), GG._node.removeEventListener("ended", GG._endFn, !1)
        }
      };
      var UG = {},
        YG = function(GG) {
          var bG = GG._src;
          if (UG[bG]) return GG._duration = UG[bG].duration, void fG(GG);
          if (/^data:[^;]+;base64,/.test(bG)) {
            for (var ZG = atob(bG.split(",")[1]), wG = new Uint8Array(ZG.length), SG = 0; SG < ZG.length; ++SG) wG[SG] = ZG.charCodeAt(SG);
            pG(wG.buffer, GG)
          } else {
            var LG = new XMLHttpRequest;
            LG.open(GG._xhr.method, bG, !0), LG.withCredentials = GG._xhr.withCredentials, LG.responseType = "arraybuffer", GG._xhr.headers && Object.keys(GG._xhr.headers).forEach((function(bG) {
              LG.setRequestHeader(bG, GG._xhr.headers[bG])
            })), LG.onload = function() {
              var bG = (LG.status + "")[0];
              "0" === bG || "2" === bG || "3" === bG ? pG(LG.response, GG) : GG._emit("loaderror", null, "Failed loading audio file with status: " + LG.status + ".")
            }, LG.onerror = function() {
              GG._webAudio && (GG._html5 = !0, GG._webAudio = !1, GG._sounds = [], delete UG[bG], GG.load())
            }, VG(LG)
          }
        },
        VG = function(GG) {
          try {
            GG.send()
          } catch (bG) {
            GG.onerror()
          }
        },
        pG = function(GG, bG) {
          var ZG = function() {
              bG._emit("loaderror", null, "Decoding audio data failed.")
            },
            wG = function(GG) {
              GG && bG._sounds.length > 0 ? (UG[bG._src] = GG, fG(bG, GG)) : ZG()
            };
          "undefined" !== typeof Promise && 1 === LG.ctx.decodeAudioData.length ? LG.ctx.decodeAudioData(GG).then(wG).catch(ZG) : LG.ctx.decodeAudioData(GG, wG, ZG)
        },
        fG = function(GG, bG) {
          bG && !GG._duration && (GG._duration = bG.duration), 0 === Object.keys(GG._sprite).length && (GG._sprite = {
            __default: [0, 1e3 * GG._duration]
          }), "loaded" !== GG._state && (GG._state = "loaded", GG._emit("load"), GG._loadQueue())
        },
        QG = function() {
          if (LG.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? LG.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? LG.ctx = new webkitAudioContext : LG.usingWebAudio = !1
            } catch (SG) {
              LG.usingWebAudio = !1
            }
            LG.ctx || (LG.usingWebAudio = !1);
            var GG = /iP(hone|od|ad)/.test(LG._navigator && LG._navigator.platform),
              bG = LG._navigator && LG._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              ZG = bG ? parseInt(bG[1], 10) : null;
            if (GG && ZG && ZG < 9) {
              var wG = /safari/.test(LG._navigator && LG._navigator.userAgent.toLowerCase());
              LG._navigator && !wG && (LG.usingWebAudio = !1)
            }
            LG.usingWebAudio && (LG.masterGain = "undefined" === typeof LG.ctx.createGain ? LG.ctx.createGainNode() : LG.ctx.createGain(), LG.masterGain.gain.setValueAtTime(LG._muted ? 0 : LG._volume, LG.ctx.currentTime), LG.masterGain.connect(LG.ctx.destination)), LG._setup()
          }
        };
      void 0 === (wG = function() {
        return {
          Howler: LG,
          Howl: yG
        }
      }.apply(bG, [])) || (GG.exports = wG), bG.Howler = LG, bG.Howl = yG, "undefined" !== typeof ZG.g ? (ZG.g.HowlerGlobal = SG, ZG.g.Howler = LG, ZG.g.Howl = yG, ZG.g.Sound = kG) : "undefined" !== typeof window && (window.HowlerGlobal = SG, window.Howler = LG, window.Howl = yG, window.Sound = kG)
    }(),
    function() {
      var GG;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(GG) {
        var bG = this;
        if (!bG.ctx || !bG.ctx.listener) return bG;
        for (var ZG = bG._howls.length - 1; ZG >= 0; ZG--) bG._howls[ZG].stereo(GG);
        return bG
      }, HowlerGlobal.prototype.pos = function(GG, bG, ZG) {
        var wG = this;
        return wG.ctx && wG.ctx.listener ? (bG = "number" !== typeof bG ? wG._pos[1] : bG, ZG = "number" !== typeof ZG ? wG._pos[2] : ZG, "number" !== typeof GG ? wG._pos : (wG._pos = [GG, bG, ZG], "undefined" !== typeof wG.ctx.listener.positionX ? (wG.ctx.listener.positionX.setTargetAtTime(wG._pos[0], Howler.ctx.currentTime, .1), wG.ctx.listener.positionY.setTargetAtTime(wG._pos[1], Howler.ctx.currentTime, .1), wG.ctx.listener.positionZ.setTargetAtTime(wG._pos[2], Howler.ctx.currentTime, .1)) : wG.ctx.listener.setPosition(wG._pos[0], wG._pos[1], wG._pos[2]), wG)) : wG
      }, HowlerGlobal.prototype.orientation = function(GG, bG, ZG, wG, SG, LG) {
        var yG = this;
        if (!yG.ctx || !yG.ctx.listener) return yG;
        var kG = yG._orientation;
        return bG = "number" !== typeof bG ? kG[1] : bG, ZG = "number" !== typeof ZG ? kG[2] : ZG, wG = "number" !== typeof wG ? kG[3] : wG, SG = "number" !== typeof SG ? kG[4] : SG, LG = "number" !== typeof LG ? kG[5] : LG, "number" !== typeof GG ? kG : (yG._orientation = [GG, bG, ZG, wG, SG, LG], "undefined" !== typeof yG.ctx.listener.forwardX ? (yG.ctx.listener.forwardX.setTargetAtTime(GG, Howler.ctx.currentTime, .1), yG.ctx.listener.forwardY.setTargetAtTime(bG, Howler.ctx.currentTime, .1), yG.ctx.listener.forwardZ.setTargetAtTime(ZG, Howler.ctx.currentTime, .1), yG.ctx.listener.upX.setTargetAtTime(wG, Howler.ctx.currentTime, .1), yG.ctx.listener.upY.setTargetAtTime(SG, Howler.ctx.currentTime, .1), yG.ctx.listener.upZ.setTargetAtTime(LG, Howler.ctx.currentTime, .1)) : yG.ctx.listener.setOrientation(GG, bG, ZG, wG, SG, LG), yG)
      }, Howl.prototype.init = (GG = Howl.prototype.init, function(bG) {
        var ZG = this;
        return ZG._orientation = bG.orientation || [1, 0, 0], ZG._stereo = bG.stereo || null, ZG._pos = bG.pos || null, ZG._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof bG.coneInnerAngle ? bG.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof bG.coneOuterAngle ? bG.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof bG.coneOuterGain ? bG.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof bG.distanceModel ? bG.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof bG.maxDistance ? bG.maxDistance : 1e4,
          panningModel: "undefined" !== typeof bG.panningModel ? bG.panningModel : "HRTF",
          refDistance: "undefined" !== typeof bG.refDistance ? bG.refDistance : 1,
          rolloffFactor: "undefined" !== typeof bG.rolloffFactor ? bG.rolloffFactor : 1
        }, ZG._onstereo = bG.onstereo ? [{
          BQ: bG.onstereo
        }] : [], ZG._onpos = bG.onpos ? [{
          BQ: bG.onpos
        }] : [], ZG._onorientation = bG.onorientation ? [{
          BQ: bG.onorientation
        }] : [], GG.call(this, bG)
      }), Howl.prototype.stereo = function(GG, ZG) {
        var wG = this;
        if (!wG._webAudio) return wG;
        if ("loaded" !== wG._state) return wG._queue.push({
          event: "stereo",
          action: function() {
            wG.stereo(GG, ZG)
          }
        }), wG;
        var SG = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof ZG) {
          if ("number" !== typeof GG) return wG._stereo;
          wG._stereo = GG, wG._pos = [GG, 0, 0]
        }
        for (var LG = wG._getSoundIds(ZG), yG = 0; yG < LG.length; yG++) {
          var kG = wG._soundById(LG[yG]);
          if (kG) {
            if ("number" !== typeof GG) return kG._stereo;
            kG._stereo = GG, kG._pos = [GG, 0, 0], kG._node && (kG._pannerAttr.panningModel = "equalpower", kG._panner && kG._panner.pan || bG(kG, SG), "spatial" === SG ? "undefined" !== typeof kG._panner.positionX ? (kG._panner.positionX.setValueAtTime(GG, Howler.ctx.currentTime), kG._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), kG._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : kG._panner.setPosition(GG, 0, 0) : kG._panner.pan.setValueAtTime(GG, Howler.ctx.currentTime)), wG._emit("stereo", kG._id)
          }
        }
        return wG
      }, Howl.prototype.pos = function(GG, ZG, wG, SG) {
        var LG = this;
        if (!LG._webAudio) return LG;
        if ("loaded" !== LG._state) return LG._queue.push({
          event: "pos",
          action: function() {
            LG.pos(GG, ZG, wG, SG)
          }
        }), LG;
        if (ZG = "number" !== typeof ZG ? 0 : ZG, wG = "number" !== typeof wG ? -.5 : wG, "undefined" === typeof SG) {
          if ("number" !== typeof GG) return LG._pos;
          LG._pos = [GG, ZG, wG]
        }
        for (var yG = LG._getSoundIds(SG), kG = 0; kG < yG.length; kG++) {
          var UG = LG._soundById(yG[kG]);
          if (UG) {
            if ("number" !== typeof GG) return UG._pos;
            UG._pos = [GG, ZG, wG], UG._node && (UG._panner && !UG._panner.pan || bG(UG, "spatial"), "undefined" !== typeof UG._panner.positionX ? (UG._panner.positionX.setValueAtTime(GG, Howler.ctx.currentTime), UG._panner.positionY.setValueAtTime(ZG, Howler.ctx.currentTime), UG._panner.positionZ.setValueAtTime(wG, Howler.ctx.currentTime)) : UG._panner.setPosition(GG, ZG, wG)), LG._emit("pos", UG._id)
          }
        }
        return LG
      }, Howl.prototype.orientation = function(GG, ZG, wG, SG) {
        var LG = this;
        if (!LG._webAudio) return LG;
        if ("loaded" !== LG._state) return LG._queue.push({
          event: "orientation",
          action: function() {
            LG.orientation(GG, ZG, wG, SG)
          }
        }), LG;
        if (ZG = "number" !== typeof ZG ? LG._orientation[1] : ZG, wG = "number" !== typeof wG ? LG._orientation[2] : wG, "undefined" === typeof SG) {
          if ("number" !== typeof GG) return LG._orientation;
          LG._orientation = [GG, ZG, wG]
        }
        for (var yG = LG._getSoundIds(SG), kG = 0; kG < yG.length; kG++) {
          var UG = LG._soundById(yG[kG]);
          if (UG) {
            if ("number" !== typeof GG) return UG._orientation;
            UG._orientation = [GG, ZG, wG], UG._node && (UG._panner || (UG._pos || (UG._pos = LG._pos || [0, 0, -.5]), bG(UG, "spatial")), "undefined" !== typeof UG._panner.orientationX ? (UG._panner.orientationX.setValueAtTime(GG, Howler.ctx.currentTime), UG._panner.orientationY.setValueAtTime(ZG, Howler.ctx.currentTime), UG._panner.orientationZ.setValueAtTime(wG, Howler.ctx.currentTime)) : UG._panner.setOrientation(GG, ZG, wG)), LG._emit("orientation", UG._id)
          }
        }
        return LG
      }, Howl.prototype.pannerAttr = function() {
        var GG, ZG, wG, SG = this,
          LG = arguments;
        if (!SG._webAudio) return SG;
        if (0 === LG.length) return SG._pannerAttr;
        if (1 === LG.length) {
          if ("object" !== typeof LG[0]) return (wG = SG._soundById(parseInt(LG[0], 10))) ? wG._pannerAttr : SG._pannerAttr;
          GG = LG[0], "undefined" === typeof ZG && (GG.pannerAttr || (GG.pannerAttr = {
            coneInnerAngle: GG.coneInnerAngle,
            coneOuterAngle: GG.coneOuterAngle,
            coneOuterGain: GG.coneOuterGain,
            distanceModel: GG.distanceModel,
            maxDistance: GG.maxDistance,
            refDistance: GG.refDistance,
            rolloffFactor: GG.rolloffFactor,
            panningModel: GG.panningModel
          }), SG._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof GG.pannerAttr.coneInnerAngle ? GG.pannerAttr.coneInnerAngle : SG._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof GG.pannerAttr.coneOuterAngle ? GG.pannerAttr.coneOuterAngle : SG._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof GG.pannerAttr.coneOuterGain ? GG.pannerAttr.coneOuterGain : SG._coneOuterGain,
            distanceModel: "undefined" !== typeof GG.pannerAttr.distanceModel ? GG.pannerAttr.distanceModel : SG._distanceModel,
            maxDistance: "undefined" !== typeof GG.pannerAttr.maxDistance ? GG.pannerAttr.maxDistance : SG._maxDistance,
            refDistance: "undefined" !== typeof GG.pannerAttr.refDistance ? GG.pannerAttr.refDistance : SG._refDistance,
            rolloffFactor: "undefined" !== typeof GG.pannerAttr.rolloffFactor ? GG.pannerAttr.rolloffFactor : SG._rolloffFactor,
            panningModel: "undefined" !== typeof GG.pannerAttr.panningModel ? GG.pannerAttr.panningModel : SG._panningModel
          })
        } else 2 === LG.length && (GG = LG[0], ZG = parseInt(LG[1], 10));
        for (var yG = SG._getSoundIds(ZG), kG = 0; kG < yG.length; kG++)
          if (wG = SG._soundById(yG[kG])) {
            var UG = wG._pannerAttr;
            UG = {
              coneInnerAngle: "undefined" !== typeof GG.coneInnerAngle ? GG.coneInnerAngle : UG.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof GG.coneOuterAngle ? GG.coneOuterAngle : UG.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof GG.coneOuterGain ? GG.coneOuterGain : UG.coneOuterGain,
              distanceModel: "undefined" !== typeof GG.distanceModel ? GG.distanceModel : UG.distanceModel,
              maxDistance: "undefined" !== typeof GG.maxDistance ? GG.maxDistance : UG.maxDistance,
              refDistance: "undefined" !== typeof GG.refDistance ? GG.refDistance : UG.refDistance,
              rolloffFactor: "undefined" !== typeof GG.rolloffFactor ? GG.rolloffFactor : UG.rolloffFactor,
              panningModel: "undefined" !== typeof GG.panningModel ? GG.panningModel : UG.panningModel
            };
            var YG = wG._panner;
            YG ? (YG.coneInnerAngle = UG.coneInnerAngle, YG.coneOuterAngle = UG.coneOuterAngle, YG.coneOuterGain = UG.coneOuterGain, YG.distanceModel = UG.distanceModel, YG.maxDistance = UG.maxDistance, YG.refDistance = UG.refDistance, YG.rolloffFactor = UG.rolloffFactor, YG.panningModel = UG.panningModel) : (wG._pos || (wG._pos = SG._pos || [0, 0, -.5]), bG(wG, "spatial"))
          } return SG
      }, Sound.prototype.init = function(GG) {
        return function() {
          var bG = this,
            ZG = bG._parent;
          bG._orientation = ZG._orientation, bG._stereo = ZG._stereo, bG._pos = ZG._pos, bG._pannerAttr = ZG._pannerAttr, GG.call(this), bG._stereo ? ZG.stereo(bG._stereo) : bG._pos && ZG.pos(bG._pos[0], bG._pos[1], bG._pos[2], bG._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(GG) {
        return function() {
          var bG = this,
            ZG = bG._parent;
          return bG._orientation = ZG._orientation, bG._stereo = ZG._stereo, bG._pos = ZG._pos, bG._pannerAttr = ZG._pannerAttr, bG._stereo ? ZG.stereo(bG._stereo) : bG._pos ? ZG.pos(bG._pos[0], bG._pos[1], bG._pos[2], bG._id) : bG._panner && (bG._panner.disconnect(0), bG._panner = void 0, ZG._refreshBuffer(bG)), GG.call(this)
        }
      }(Sound.prototype.reset);
      var bG = function(GG, bG) {
        "spatial" === (bG = bG || "spatial") ? (GG._panner = Howler.ctx.createPanner(), GG._panner.coneInnerAngle = GG._pannerAttr.coneInnerAngle, GG._panner.coneOuterAngle = GG._pannerAttr.coneOuterAngle, GG._panner.coneOuterGain = GG._pannerAttr.coneOuterGain, GG._panner.distanceModel = GG._pannerAttr.distanceModel, GG._panner.maxDistance = GG._pannerAttr.maxDistance, GG._panner.refDistance = GG._pannerAttr.refDistance, GG._panner.rolloffFactor = GG._pannerAttr.rolloffFactor, GG._panner.panningModel = GG._pannerAttr.panningModel, "undefined" !== typeof GG._panner.positionX ? (GG._panner.positionX.setValueAtTime(GG._pos[0], Howler.ctx.currentTime), GG._panner.positionY.setValueAtTime(GG._pos[1], Howler.ctx.currentTime), GG._panner.positionZ.setValueAtTime(GG._pos[2], Howler.ctx.currentTime)) : GG._panner.setPosition(GG._pos[0], GG._pos[1], GG._pos[2]), "undefined" !== typeof GG._panner.orientationX ? (GG._panner.orientationX.setValueAtTime(GG._orientation[0], Howler.ctx.currentTime), GG._panner.orientationY.setValueAtTime(GG._orientation[1], Howler.ctx.currentTime), GG._panner.orientationZ.setValueAtTime(GG._orientation[2], Howler.ctx.currentTime)) : GG._panner.setOrientation(GG._orientation[0], GG._orientation[1], GG._orientation[2])) : (GG._panner = Howler.ctx.createStereoPanner(), GG._panner.pan.setValueAtTime(GG._stereo, Howler.ctx.currentTime)), GG._panner.connect(GG._node), GG.pE || GG._parent.pause(GG._id, !0).play(GG._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);