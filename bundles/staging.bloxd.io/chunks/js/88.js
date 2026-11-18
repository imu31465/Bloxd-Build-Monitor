/*! For license information please see l9xvfg.88.baaa949a.chunk.js.LICENSE.txt */
export const id = 88;
export const ids = [88];
export const modules = {
  4262: (BB, TB, dB) => {
    var VB;
    ! function() {
      var yB = function() {
        this.init()
      };
      yB.prototype = {
        init: function() {
          var BB = this || pB;
          return BB._counter = 1e3, BB._html5AudioPool = [], BB.html5PoolSize = 10, BB._codecs = {}, BB._howls = [], BB._muted = !1, BB._volume = 1, BB._canPlayEvent = "canplaythrough", BB._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, BB.masterGain = null, BB.noAudio = !1, BB.usingWebAudio = !0, BB.autoSuspend = !0, BB.ctx = null, BB.autoUnlock = !0, BB._setup(), BB
        },
        volume: function(BB) {
          var TB = this || pB;
          if (BB = parseFloat(BB), TB.ctx || OB(), "undefined" !== typeof BB && BB >= 0 && BB <= 1) {
            if (TB._volume = BB, TB._muted) return TB;
            TB.usingWebAudio && TB.masterGain.gain.setValueAtTime(BB, pB.ctx.currentTime);
            for (var dB = 0; dB < TB._howls.length; dB++)
              if (!TB._howls[dB]._webAudio)
                for (var VB = TB._howls[dB]._getSoundIds(), yB = 0; yB < VB.length; yB++) {
                  var lB = TB._howls[dB]._soundById(VB[yB]);
                  lB && lB._node && (lB._node.volume = lB._volume * BB)
                }
            return TB
          }
          return TB._volume
        },
        mute: function(BB) {
          var TB = this || pB;
          TB.ctx || OB(), TB._muted = BB, TB.usingWebAudio && TB.masterGain.gain.setValueAtTime(BB ? 0 : TB._volume, pB.ctx.currentTime);
          for (var dB = 0; dB < TB._howls.length; dB++)
            if (!TB._howls[dB]._webAudio)
              for (var VB = TB._howls[dB]._getSoundIds(), yB = 0; yB < VB.length; yB++) {
                var lB = TB._howls[dB]._soundById(VB[yB]);
                lB && lB._node && (lB._node.muted = !!BB || lB._muted)
              }
          return TB
        },
        stop: function() {
          for (var BB = this || pB, TB = 0; TB < BB._howls.length; TB++) BB._howls[TB].stop();
          return BB
        },
        unload: function() {
          for (var BB = this || pB, TB = BB._howls.length - 1; TB >= 0; TB--) BB._howls[TB].unload();
          return BB.usingWebAudio && BB.ctx && "undefined" !== typeof BB.ctx.close && (BB.ctx.close(), BB.ctx = null, OB()), BB
        },
        codecs: function(BB) {
          return (this || pB)._codecs[BB.replace(/^x-/, "")]
        },
        _setup: function() {
          var BB = this || pB;
          if (BB.state = BB.ctx && BB.ctx.state || "suspended", BB._autoSuspend(), !BB.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (BB._canPlayEvent = "canplay")
            } catch (TB) {
              BB.noAudio = !0
            } else BB.noAudio = !0;
          try {
            (new Audio).muted && (BB.noAudio = !0)
          } catch (TB) {}
          return BB.noAudio || BB._setupCodecs(), BB
        },
        _setupCodecs: function() {
          var BB = this || pB,
            TB = null;
          try {
            TB = "undefined" !== typeof Audio ? new Audio : null
          } catch (oB) {
            return BB
          }
          if (!TB || "function" !== typeof TB.canPlayType) return BB;
          var dB = TB.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            VB = BB._navigator ? BB._navigator.userAgent : "",
            yB = VB.match(/OPR\/([0-6].)/g),
            lB = yB && parseInt(yB[0].split("/")[1], 10) < 33,
            JB = -1 !== VB.indexOf("Safari") && -1 === VB.indexOf("Chrome"),
            YB = VB.match(/Version\/(.*?) /),
            gB = JB && YB && parseInt(YB[1], 10) < 15;
          return BB._codecs = {
            mp3: !(lB || !dB && !TB.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!dB,
            opus: !!TB.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!TB.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!TB.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(TB.canPlayType('audio/wav; codecs="1"') || TB.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!TB.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!TB.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(TB.canPlayType("audio/x-m4a;") || TB.canPlayType("audio/m4a;") || TB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(TB.canPlayType("audio/x-m4b;") || TB.canPlayType("audio/m4b;") || TB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(TB.canPlayType("audio/x-mp4;") || TB.canPlayType("audio/mp4;") || TB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(gB || !TB.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(gB || !TB.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!TB.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(TB.canPlayType("audio/x-flac;") || TB.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, BB
        },
        _unlockAudio: function() {
          var BB = this || pB;
          if (!BB._audioUnlocked && BB.ctx) {
            BB._audioUnlocked = !1, BB.autoUnlock = !1, BB._mobileUnloaded || 44100 === BB.ctx.sampleRate || (BB._mobileUnloaded = !0, BB.unload()), BB._scratchBuffer = BB.ctx.createBuffer(1, 1, 22050);
            var TB = function(dB) {
              for (; BB._html5AudioPool.length < BB.html5PoolSize;) try {
                var VB = new Audio;
                VB._unlocked = !0, BB._releaseHtml5Audio(VB)
              } catch (dB) {
                BB.noAudio = !0;
                break
              }
              for (var yB = 0; yB < BB._howls.length; yB++)
                if (!BB._howls[yB]._webAudio)
                  for (var pB = BB._howls[yB]._getSoundIds(), lB = 0; lB < pB.length; lB++) {
                    var JB = BB._howls[yB]._soundById(pB[lB]);
                    JB && JB._node && !JB._node._unlocked && (JB._node._unlocked = !0, JB._node.load())
                  }
              BB._autoResume();
              var YB = BB.ctx.createBufferSource();
              YB.buffer = BB._scratchBuffer, YB.connect(BB.ctx.destination), "undefined" === typeof YB.start ? YB.noteOn(0) : YB.start(0), "function" === typeof BB.ctx.resume && BB.ctx.resume(), YB.onended = function() {
                YB.disconnect(0), BB._audioUnlocked = !0, document.removeEventListener("touchstart", TB, !0), document.removeEventListener("touchend", TB, !0), document.removeEventListener("click", TB, !0), document.removeEventListener("keydown", TB, !0);
                for (var dB = 0; dB < BB._howls.length; dB++) BB._howls[dB]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", TB, !0), document.addEventListener("touchend", TB, !0), document.addEventListener("click", TB, !0), document.addEventListener("keydown", TB, !0), BB
          }
        },
        _obtainHtml5Audio: function() {
          var BB = this || pB;
          if (BB._html5AudioPool.length) return BB._html5AudioPool.pop();
          var TB = (new Audio).play();
          return TB && "undefined" !== typeof Promise && (TB instanceof Promise || "function" === typeof TB.then) && TB.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(BB) {
          var TB = this || pB;
          return BB._unlocked && TB._html5AudioPool.push(BB), TB
        },
        _autoSuspend: function() {
          var BB = this;
          if (BB.autoSuspend && BB.ctx && "undefined" !== typeof BB.ctx.suspend && pB.usingWebAudio) {
            for (var TB = 0; TB < BB._howls.length; TB++)
              if (BB._howls[TB]._webAudio)
                for (var dB = 0; dB < BB._howls[TB]._sounds.length; dB++)
                  if (!BB._howls[TB]._sounds[dB].Wm) return BB;
            return BB._suspendTimer && clearTimeout(BB._suspendTimer), BB._suspendTimer = setTimeout((function() {
              if (BB.autoSuspend) {
                BB._suspendTimer = null, BB.state = "suspending";
                var TB = function() {
                  BB.state = "suspended", BB._resumeAfterSuspend && (delete BB._resumeAfterSuspend, BB._autoResume())
                };
                BB.ctx.suspend().then(TB, TB)
              }
            }), 3e4), BB
          }
        },
        _autoResume: function() {
          var BB = this;
          if (BB.ctx && "undefined" !== typeof BB.ctx.resume && pB.usingWebAudio) return "running" === BB.state && "interrupted" !== BB.ctx.state && BB._suspendTimer ? (clearTimeout(BB._suspendTimer), BB._suspendTimer = null) : "suspended" === BB.state || "running" === BB.state && "interrupted" === BB.ctx.state ? (BB.ctx.resume().then((function() {
            BB.state = "running";
            for (var TB = 0; TB < BB._howls.length; TB++) BB._howls[TB]._emit("resume")
          })), BB._suspendTimer && (clearTimeout(BB._suspendTimer), BB._suspendTimer = null)) : "suspending" === BB.state && (BB._resumeAfterSuspend = !0), BB
        }
      };
      var pB = new yB,
        lB = function(BB) {
          BB.src && 0 !== BB.src.length ? this.init(BB) : console.error("An array of source files must be passed with any new Howl.")
        };
      lB.prototype = {
        init: function(BB) {
          var TB = this;
          return pB.ctx || OB(), TB._autoplay = BB.autoplay || !1, TB._format = "string" !== typeof BB.format ? BB.format : [BB.format], TB._html5 = BB.html5 || !1, TB._muted = BB.mute || !1, TB._loop = BB.loop || !1, TB._pool = BB.pool || 5, TB._preload = "boolean" !== typeof BB.preload && "metadata" !== BB.preload || BB.preload, TB._rate = BB.rate || 1, TB._sprite = BB.sprite || {}, TB._src = "string" !== typeof BB.src ? BB.src : [BB.src], TB._volume = void 0 !== BB.volume ? BB.volume : 1, TB._xhr = {
            method: BB.xhr && BB.xhr.method ? BB.xhr.method : "GET",
            headers: BB.xhr && BB.xhr.headers ? BB.xhr.headers : null,
            withCredentials: !(!BB.xhr || !BB.xhr.withCredentials) && BB.xhr.withCredentials
          }, TB._duration = 0, TB._state = "unloaded", TB._sounds = [], TB._endTimers = {}, TB._queue = [], TB._playLock = !1, TB._onend = BB.onend ? [{
            gD: BB.onend
          }] : [], TB._onfade = BB.onfade ? [{
            gD: BB.onfade
          }] : [], TB._onload = BB.onload ? [{
            gD: BB.onload
          }] : [], TB._onloaderror = BB.onloaderror ? [{
            gD: BB.onloaderror
          }] : [], TB._onplayerror = BB.onplayerror ? [{
            gD: BB.onplayerror
          }] : [], TB._onpause = BB.onpause ? [{
            gD: BB.onpause
          }] : [], TB._onplay = BB.onplay ? [{
            gD: BB.onplay
          }] : [], TB._onstop = BB.onstop ? [{
            gD: BB.onstop
          }] : [], TB._onmute = BB.onmute ? [{
            gD: BB.onmute
          }] : [], TB._onvolume = BB.onvolume ? [{
            gD: BB.onvolume
          }] : [], TB._onrate = BB.onrate ? [{
            gD: BB.onrate
          }] : [], TB._onseek = BB.onseek ? [{
            gD: BB.onseek
          }] : [], TB._onunlock = BB.onunlock ? [{
            gD: BB.onunlock
          }] : [], TB._onresume = [], TB._webAudio = pB.usingWebAudio && !TB._html5, "undefined" !== typeof pB.ctx && pB.ctx && pB.autoUnlock && pB._unlockAudio(), pB._howls.push(TB), TB._autoplay && TB._queue.push({
            event: "play",
            action: function() {
              TB.play()
            }
          }), TB._preload && "none" !== TB._preload && TB.load(), TB
        },
        load: function() {
          var BB = this,
            TB = null;
          if (pB.noAudio) BB._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof BB._src && (BB._src = [BB._src]);
            for (var dB = 0; dB < BB._src.length; dB++) {
              var VB, yB;
              if (BB._format && BB._format[dB]) VB = BB._format[dB];
              else {
                if ("string" !== typeof(yB = BB._src[dB])) {
                  BB._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(VB = /^data:audio\/([^;,]+);/i.exec(yB)) || (VB = /\.([^.]+)$/.exec(yB.split("?", 1)[0])), VB && (VB = VB[1].toLowerCase())
              }
              if (VB || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), VB && pB.codecs(VB)) {
                TB = BB._src[dB];
                break
              }
            }
            if (TB) return BB._src = TB, BB._state = "loading", "https:" === window.location.protocol && "http:" === TB.slice(0, 5) && (BB._html5 = !0, BB._webAudio = !1), new JB(BB), BB._webAudio && gB(BB), BB;
            BB._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(BB, TB) {
          var dB = this,
            VB = null;
          if ("number" === typeof BB) VB = BB, BB = null;
          else {
            if ("string" === typeof BB && "loaded" === dB._state && !dB._sprite[BB]) return null;
            if ("undefined" === typeof BB && (BB = "__default", !dB._playLock)) {
              for (var yB = 0, lB = 0; lB < dB._sounds.length; lB++) dB._sounds[lB].Wm && !dB._sounds[lB]._ended && (yB++, VB = dB._sounds[lB]._id);
              1 === yB ? BB = null : VB = null
            }
          }
          var JB = VB ? dB._soundById(VB) : dB._inactiveSound();
          if (!JB) return null;
          if (VB && !BB && (BB = JB._sprite || "__default"), "loaded" !== dB._state) {
            JB._sprite = BB, JB._ended = !1;
            var YB = JB._id;
            return dB._queue.push({
              event: "play",
              action: function() {
                dB.play(YB)
              }
            }), YB
          }
          if (VB && !JB.Wm) return TB || dB._loadQueue("play"), JB._id;
          dB._webAudio && pB._autoResume();
          var gB = Math.max(0, JB._seek > 0 ? JB._seek : dB._sprite[BB][0] / 1e3),
            oB = Math.max(0, (dB._sprite[BB][0] + dB._sprite[BB][1]) / 1e3 - gB),
            kB = 1e3 * oB / Math.abs(JB._rate),
            LB = dB._sprite[BB][0] / 1e3,
            OB = (dB._sprite[BB][0] + dB._sprite[BB][1]) / 1e3;
          JB._sprite = BB, JB._ended = !1;
          var DB = function() {
            JB.Wm = !1, JB._seek = gB, JB._start = LB, JB._stop = OB, JB._loop = !(!JB._loop && !dB._sprite[BB][2])
          };
          if (!(gB >= OB)) {
            var uB = JB._node;
            if (dB._webAudio) {
              var HB = function() {
                dB._playLock = !1, DB(), dB._refreshBuffer(JB);
                var BB = JB._muted || dB._muted ? 0 : JB._volume;
                uB.gain.setValueAtTime(BB, pB.ctx.currentTime), JB._playStart = pB.ctx.currentTime, "undefined" === typeof uB.bufferSource.start ? JB._loop ? uB.bufferSource.noteGrainOn(0, gB, 86400) : uB.bufferSource.noteGrainOn(0, gB, oB) : JB._loop ? uB.bufferSource.start(0, gB, 86400) : uB.bufferSource.start(0, gB, oB), kB !== 1 / 0 && (dB._endTimers[JB._id] = setTimeout(dB._ended.bind(dB, JB), kB)), TB || setTimeout((function() {
                  dB._emit("play", JB._id), dB._loadQueue()
                }), 0)
              };
              "running" === pB.state && "interrupted" !== pB.ctx.state ? HB() : (dB._playLock = !0, dB.once("resume", HB), dB._clearTimer(JB._id))
            } else {
              var EB = function() {
                uB.currentTime = gB, uB.muted = JB._muted || dB._muted || pB._muted || uB.muted, uB.volume = JB._volume * pB.volume(), uB.playbackRate = JB._rate;
                try {
                  var VB = uB.play();
                  if (VB && "undefined" !== typeof Promise && (VB instanceof Promise || "function" === typeof VB.then) ? (dB._playLock = !0, DB(), VB.then((function() {
                      dB._playLock = !1, uB._unlocked = !0, TB ? dB._loadQueue() : dB._emit("play", JB._id)
                    })).catch((function() {
                      dB._playLock = !1, dB._emit("playerror", JB._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), JB._ended = !0, JB.Wm = !0
                    }))) : TB || (dB._playLock = !1, DB(), dB._emit("play", JB._id)), uB.playbackRate = JB._rate, uB.paused) return void dB._emit("playerror", JB._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== BB || JB._loop ? dB._endTimers[JB._id] = setTimeout(dB._ended.bind(dB, JB), kB) : (dB._endTimers[JB._id] = function() {
                    dB._ended(JB), uB.removeEventListener("ended", dB._endTimers[JB._id], !1)
                  }, uB.addEventListener("ended", dB._endTimers[JB._id], !1))
                } catch (yB) {
                  dB._emit("playerror", JB._id, yB)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === uB.src && (uB.src = dB._src, uB.load());
              var vB = window && window.ejecta || !uB.readyState && pB._navigator.isCocoonJS;
              if (uB.readyState >= 3 || vB) EB();
              else {
                dB._playLock = !0, dB._state = "loading";
                var mB = function() {
                  dB._state = "loaded", EB(), uB.removeEventListener(pB._canPlayEvent, mB, !1)
                };
                uB.addEventListener(pB._canPlayEvent, mB, !1), dB._clearTimer(JB._id)
              }
            }
            return JB._id
          }
          dB._ended(JB)
        },
        pause: function(BB) {
          var TB = this;
          if ("loaded" !== TB._state || TB._playLock) return TB._queue.push({
            event: "pause",
            action: function() {
              TB.pause(BB)
            }
          }), TB;
          for (var dB = TB._getSoundIds(BB), VB = 0; VB < dB.length; VB++) {
            TB._clearTimer(dB[VB]);
            var yB = TB._soundById(dB[VB]);
            if (yB && !yB.Wm && (yB._seek = TB.seek(dB[VB]), yB._rateSeek = 0, yB.Wm = !0, TB._stopFade(dB[VB]), yB._node))
              if (TB._webAudio) {
                if (!yB._node.bufferSource) continue;
                "undefined" === typeof yB._node.bufferSource.stop ? yB._node.bufferSource.noteOff(0) : yB._node.bufferSource.stop(0), TB._cleanBuffer(yB._node)
              } else isNaN(yB._node.duration) && yB._node.duration !== 1 / 0 || yB._node.pause();
            arguments[1] || TB._emit("pause", yB ? yB._id : null)
          }
          return TB
        },
        stop: function(BB, TB) {
          var dB = this;
          if ("loaded" !== dB._state || dB._playLock) return dB._queue.push({
            event: "stop",
            action: function() {
              dB.stop(BB)
            }
          }), dB;
          for (var VB = dB._getSoundIds(BB), yB = 0; yB < VB.length; yB++) {
            dB._clearTimer(VB[yB]);
            var pB = dB._soundById(VB[yB]);
            pB && (pB._seek = pB._start || 0, pB._rateSeek = 0, pB.Wm = !0, pB._ended = !0, dB._stopFade(VB[yB]), pB._node && (dB._webAudio ? pB._node.bufferSource && ("undefined" === typeof pB._node.bufferSource.stop ? pB._node.bufferSource.noteOff(0) : pB._node.bufferSource.stop(0), dB._cleanBuffer(pB._node)) : isNaN(pB._node.duration) && pB._node.duration !== 1 / 0 || (pB._node.currentTime = pB._start || 0, pB._node.pause(), pB._node.duration === 1 / 0 && dB._clearSound(pB._node))), TB || dB._emit("stop", pB._id))
          }
          return dB
        },
        mute: function(BB, TB) {
          var dB = this;
          if ("loaded" !== dB._state || dB._playLock) return dB._queue.push({
            event: "mute",
            action: function() {
              dB.mute(BB, TB)
            }
          }), dB;
          if ("undefined" === typeof TB) {
            if ("boolean" !== typeof BB) return dB._muted;
            dB._muted = BB
          }
          for (var VB = dB._getSoundIds(TB), yB = 0; yB < VB.length; yB++) {
            var lB = dB._soundById(VB[yB]);
            lB && (lB._muted = BB, lB._interval && dB._stopFade(lB._id), dB._webAudio && lB._node ? lB._node.gain.setValueAtTime(BB ? 0 : lB._volume, pB.ctx.currentTime) : lB._node && (lB._node.muted = !!pB._muted || BB), dB._emit("mute", lB._id))
          }
          return dB
        },
        volume: function() {
          var BB, TB, dB, VB = this,
            yB = arguments;
          if (0 === yB.length) return VB._volume;
          if (1 === yB.length || 2 === yB.length && "undefined" === typeof yB[1] ? VB._getSoundIds().indexOf(yB[0]) >= 0 ? TB = parseInt(yB[0], 10) : BB = parseFloat(yB[0]) : yB.length >= 2 && (BB = parseFloat(yB[0]), TB = parseInt(yB[1], 10)), !("undefined" !== typeof BB && BB >= 0 && BB <= 1)) return (dB = TB ? VB._soundById(TB) : VB._sounds[0]) ? dB._volume : 0;
          if ("loaded" !== VB._state || VB._playLock) return VB._queue.push({
            event: "volume",
            action: function() {
              VB.volume.apply(VB, yB)
            }
          }), VB;
          "undefined" === typeof TB && (VB._volume = BB), TB = VB._getSoundIds(TB);
          for (var lB = 0; lB < TB.length; lB++)(dB = VB._soundById(TB[lB])) && (dB._volume = BB, yB[2] || VB._stopFade(TB[lB]), VB._webAudio && dB._node && !dB._muted ? dB._node.gain.setValueAtTime(BB, pB.ctx.currentTime) : dB._node && !dB._muted && (dB._node.volume = BB * pB.volume()), VB._emit("volume", dB._id));
          return VB
        },
        fade: function(BB, TB, dB, VB) {
          var yB = this;
          if ("loaded" !== yB._state || yB._playLock) return yB._queue.push({
            event: "fade",
            action: function() {
              yB.fade(BB, TB, dB, VB)
            }
          }), yB;
          BB = Math.min(Math.max(0, parseFloat(BB)), 1), TB = Math.min(Math.max(0, parseFloat(TB)), 1), dB = parseFloat(dB), yB.volume(BB, VB);
          for (var lB = yB._getSoundIds(VB), JB = 0; JB < lB.length; JB++) {
            var YB = yB._soundById(lB[JB]);
            if (YB) {
              if (VB || yB._stopFade(lB[JB]), yB._webAudio && !YB._muted) {
                var gB = pB.ctx.currentTime,
                  oB = gB + dB / 1e3;
                YB._volume = BB, YB._node.gain.setValueAtTime(BB, gB), YB._node.gain.linearRampToValueAtTime(TB, oB)
              }
              yB._startFadeInterval(YB, BB, TB, dB, lB[JB], "undefined" === typeof VB)
            }
          }
          return yB
        },
        _startFadeInterval: function(BB, TB, dB, VB, yB, pB) {
          var lB = this,
            JB = TB,
            YB = dB - TB,
            gB = Math.abs(YB / .01),
            oB = Math.max(4, gB > 0 ? VB / gB : VB),
            kB = Date.now();
          BB._fadeTo = dB, BB._interval = setInterval((function() {
            var yB = (Date.now() - kB) / VB;
            kB = Date.now(), JB += YB * yB, JB = Math.round(100 * JB) / 100, JB = YB < 0 ? Math.max(dB, JB) : Math.min(dB, JB), lB._webAudio ? BB._volume = JB : lB.volume(JB, BB._id, !0), pB && (lB._volume = JB), (dB < TB && JB <= dB || dB > TB && JB >= dB) && (clearInterval(BB._interval), BB._interval = null, BB._fadeTo = null, lB.volume(dB, BB._id), lB._emit("fade", BB._id))
          }), oB)
        },
        _stopFade: function(BB) {
          var TB = this,
            dB = TB._soundById(BB);
          return dB && dB._interval && (TB._webAudio && dB._node.gain.cancelScheduledValues(pB.ctx.currentTime), clearInterval(dB._interval), dB._interval = null, TB.volume(dB._fadeTo, BB), dB._fadeTo = null, TB._emit("fade", BB)), TB
        },
        loop: function() {
          var BB, TB, dB, VB = this,
            yB = arguments;
          if (0 === yB.length) return VB._loop;
          if (1 === yB.length) {
            if ("boolean" !== typeof yB[0]) return !!(dB = VB._soundById(parseInt(yB[0], 10))) && dB._loop;
            BB = yB[0], VB._loop = BB
          } else 2 === yB.length && (BB = yB[0], TB = parseInt(yB[1], 10));
          for (var pB = VB._getSoundIds(TB), lB = 0; lB < pB.length; lB++)(dB = VB._soundById(pB[lB])) && (dB._loop = BB, VB._webAudio && dB._node && dB._node.bufferSource && (dB._node.bufferSource.loop = BB, BB && (dB._node.bufferSource.loopStart = dB._start || 0, dB._node.bufferSource.loopEnd = dB._stop, VB.playing(pB[lB]) && (VB.pause(pB[lB], !0), VB.play(pB[lB], !0)))));
          return VB
        },
        rate: function() {
          var BB, TB, dB, VB = this,
            yB = arguments;
          if (0 === yB.length) TB = VB._sounds[0]._id;
          else if (1 === yB.length) {
            VB._getSoundIds().indexOf(yB[0]) >= 0 ? TB = parseInt(yB[0], 10) : BB = parseFloat(yB[0])
          } else 2 === yB.length && (BB = parseFloat(yB[0]), TB = parseInt(yB[1], 10));
          if ("number" !== typeof BB) return (dB = VB._soundById(TB)) ? dB._rate : VB._rate;
          if ("loaded" !== VB._state || VB._playLock) return VB._queue.push({
            event: "rate",
            action: function() {
              VB.rate.apply(VB, yB)
            }
          }), VB;
          "undefined" === typeof TB && (VB._rate = BB), TB = VB._getSoundIds(TB);
          for (var lB = 0; lB < TB.length; lB++)
            if (dB = VB._soundById(TB[lB])) {
              VB.playing(TB[lB]) && (dB._rateSeek = VB.seek(TB[lB]), dB._playStart = VB._webAudio ? pB.ctx.currentTime : dB._playStart), dB._rate = BB, VB._webAudio && dB._node && dB._node.bufferSource ? dB._node.bufferSource.playbackRate.setValueAtTime(BB, pB.ctx.currentTime) : dB._node && (dB._node.playbackRate = BB);
              var JB = VB.seek(TB[lB]),
                YB = 1e3 * ((VB._sprite[dB._sprite][0] + VB._sprite[dB._sprite][1]) / 1e3 - JB) / Math.abs(dB._rate);
              !VB._endTimers[TB[lB]] && dB.Wm || (VB._clearTimer(TB[lB]), VB._endTimers[TB[lB]] = setTimeout(VB._ended.bind(VB, dB), YB)), VB._emit("rate", dB._id)
            } return VB
        },
        seek: function() {
          var BB, TB, dB = this,
            VB = arguments;
          if (0 === VB.length) dB._sounds.length && (TB = dB._sounds[0]._id);
          else if (1 === VB.length) {
            dB._getSoundIds().indexOf(VB[0]) >= 0 ? TB = parseInt(VB[0], 10) : dB._sounds.length && (TB = dB._sounds[0]._id, BB = parseFloat(VB[0]))
          } else 2 === VB.length && (BB = parseFloat(VB[0]), TB = parseInt(VB[1], 10));
          if ("undefined" === typeof TB) return 0;
          if ("number" === typeof BB && ("loaded" !== dB._state || dB._playLock)) return dB._queue.push({
            event: "seek",
            action: function() {
              dB.seek.apply(dB, VB)
            }
          }), dB;
          var yB = dB._soundById(TB);
          if (yB) {
            if (!("number" === typeof BB && BB >= 0)) {
              if (dB._webAudio) {
                var lB = dB.playing(TB) ? pB.ctx.currentTime - yB._playStart : 0,
                  JB = yB._rateSeek ? yB._rateSeek - yB._seek : 0;
                return yB._seek + (JB + lB * Math.abs(yB._rate))
              }
              return yB._node.currentTime
            }
            var YB = dB.playing(TB);
            YB && dB.pause(TB, !0), yB._seek = BB, yB._ended = !1, dB._clearTimer(TB), dB._webAudio || !yB._node || isNaN(yB._node.duration) || (yB._node.currentTime = BB);
            var gB = function() {
              YB && dB.play(TB, !0), dB._emit("seek", TB)
            };
            if (YB && !dB._webAudio) {
              var oB = function() {
                dB._playLock ? setTimeout(oB, 0) : gB()
              };
              setTimeout(oB, 0)
            } else gB()
          }
          return dB
        },
        playing: function(BB) {
          var TB = this;
          if ("number" === typeof BB) {
            var dB = TB._soundById(BB);
            return !!dB && !dB.Wm
          }
          for (var VB = 0; VB < TB._sounds.length; VB++)
            if (!TB._sounds[VB].Wm) return !0;
          return !1
        },
        duration: function(BB) {
          var TB = this,
            dB = TB._duration,
            VB = TB._soundById(BB);
          return VB && (dB = TB._sprite[VB._sprite][1] / 1e3), dB
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var BB = this, TB = BB._sounds, dB = 0; dB < TB.length; dB++) TB[dB].Wm || BB.stop(TB[dB]._id), BB._webAudio || (BB._clearSound(TB[dB]._node), TB[dB]._node.removeEventListener("error", TB[dB]._errorFn, !1), TB[dB]._node.removeEventListener(pB._canPlayEvent, TB[dB]._loadFn, !1), TB[dB]._node.removeEventListener("ended", TB[dB]._endFn, !1), pB._releaseHtml5Audio(TB[dB]._node)), delete TB[dB]._node, BB._clearTimer(TB[dB]._id);
          var VB = pB._howls.indexOf(BB);
          VB >= 0 && pB._howls.splice(VB, 1);
          var yB = !0;
          for (dB = 0; dB < pB._howls.length; dB++)
            if (pB._howls[dB]._src === BB._src || BB._src.indexOf(pB._howls[dB]._src) >= 0) {
              yB = !1;
              break
            } return YB && yB && delete YB[BB._src], pB.noAudio = !1, BB._state = "unloaded", BB._sounds = [], BB = null, null
        },
        on: function(BB, TB, dB, VB) {
          var yB = this["_on" + BB];
          return "function" === typeof TB && yB.push(VB ? {
            id: dB,
            gD: TB,
            once: VB
          } : {
            id: dB,
            gD: TB
          }), this
        },
        off: function(BB, TB, dB) {
          var VB = this,
            yB = VB["_on" + BB],
            pB = 0;
          if ("number" === typeof TB && (dB = TB, TB = null), TB || dB)
            for (pB = 0; pB < yB.length; pB++) {
              var lB = dB === yB[pB].id;
              if (TB === yB[pB].gD && lB || !TB && lB) {
                yB.splice(pB, 1);
                break
              }
            } else if (BB) VB["_on" + BB] = [];
            else {
              var JB = Object.keys(VB);
              for (pB = 0; pB < JB.length; pB++) 0 === JB[pB].indexOf("_on") && Array.isArray(VB[JB[pB]]) && (VB[JB[pB]] = [])
            } return VB
        },
        once: function(BB, TB, dB) {
          return this.on(BB, TB, dB, 1), this
        },
        _emit: function(BB, TB, dB) {
          for (var VB = this, yB = VB["_on" + BB], pB = yB.length - 1; pB >= 0; pB--) yB[pB].id && yB[pB].id !== TB && "load" !== BB || (setTimeout(function(BB) {
            BB.call(this, TB, dB)
          }.bind(VB, yB[pB].gD), 0), yB[pB].once && VB.off(BB, yB[pB].gD, yB[pB].id));
          return VB._loadQueue(BB), VB
        },
        _loadQueue: function(BB) {
          var TB = this;
          if (TB._queue.length > 0) {
            var dB = TB._queue[0];
            dB.event === BB && (TB._queue.shift(), TB._loadQueue()), BB || dB.action()
          }
          return TB
        },
        _ended: function(BB) {
          var TB = this,
            dB = BB._sprite;
          if (!TB._webAudio && BB._node && !BB._node.paused && !BB._node.ended && BB._node.currentTime < BB._stop) return setTimeout(TB._ended.bind(TB, BB), 100), TB;
          var VB = !(!BB._loop && !TB._sprite[dB][2]);
          if (TB._emit("end", BB._id), !TB._webAudio && VB && TB.stop(BB._id, !0).play(BB._id), TB._webAudio && VB) {
            TB._emit("play", BB._id), BB._seek = BB._start || 0, BB._rateSeek = 0, BB._playStart = pB.ctx.currentTime;
            var yB = 1e3 * (BB._stop - BB._start) / Math.abs(BB._rate);
            TB._endTimers[BB._id] = setTimeout(TB._ended.bind(TB, BB), yB)
          }
          return TB._webAudio && !VB && (BB.Wm = !0, BB._ended = !0, BB._seek = BB._start || 0, BB._rateSeek = 0, TB._clearTimer(BB._id), TB._cleanBuffer(BB._node), pB._autoSuspend()), TB._webAudio || VB || TB.stop(BB._id, !0), TB
        },
        _clearTimer: function(BB) {
          var TB = this;
          if (TB._endTimers[BB]) {
            if ("function" !== typeof TB._endTimers[BB]) clearTimeout(TB._endTimers[BB]);
            else {
              var dB = TB._soundById(BB);
              dB && dB._node && dB._node.removeEventListener("ended", TB._endTimers[BB], !1)
            }
            delete TB._endTimers[BB]
          }
          return TB
        },
        _soundById: function(BB) {
          for (var TB = this, dB = 0; dB < TB._sounds.length; dB++)
            if (BB === TB._sounds[dB]._id) return TB._sounds[dB];
          return null
        },
        _inactiveSound: function() {
          var BB = this;
          BB._drain();
          for (var TB = 0; TB < BB._sounds.length; TB++)
            if (BB._sounds[TB]._ended) return BB._sounds[TB].reset();
          return new JB(BB)
        },
        _drain: function() {
          var BB = this,
            TB = BB._pool,
            dB = 0,
            VB = 0;
          if (!(BB._sounds.length < TB)) {
            for (VB = 0; VB < BB._sounds.length; VB++) BB._sounds[VB]._ended && dB++;
            for (VB = BB._sounds.length - 1; VB >= 0; VB--) {
              if (dB <= TB) return;
              BB._sounds[VB]._ended && (BB._webAudio && BB._sounds[VB]._node && BB._sounds[VB]._node.disconnect(0), BB._sounds.splice(VB, 1), dB--)
            }
          }
        },
        _getSoundIds: function(BB) {
          if ("undefined" === typeof BB) {
            for (var TB = [], dB = 0; dB < this._sounds.length; dB++) TB.push(this._sounds[dB]._id);
            return TB
          }
          return [BB]
        },
        _refreshBuffer: function(BB) {
          return BB._node.bufferSource = pB.ctx.createBufferSource(), BB._node.bufferSource.buffer = YB[this._src], BB._panner ? BB._node.bufferSource.connect(BB._panner) : BB._node.bufferSource.connect(BB._node), BB._node.bufferSource.loop = BB._loop, BB._loop && (BB._node.bufferSource.loopStart = BB._start || 0, BB._node.bufferSource.loopEnd = BB._stop || 0), BB._node.bufferSource.playbackRate.setValueAtTime(BB._rate, pB.ctx.currentTime), this
        },
        _cleanBuffer: function(BB) {
          var TB = pB._navigator && pB._navigator.vendor.indexOf("Apple") >= 0;
          if (pB._scratchBuffer && BB.bufferSource && (BB.bufferSource.onended = null, BB.bufferSource.disconnect(0), TB)) try {
            BB.bufferSource.buffer = pB._scratchBuffer
          } catch (dB) {}
          return BB.bufferSource = null, this
        },
        _clearSound: function(BB) {
          /MSIE |Trident\//.test(pB._navigator && pB._navigator.userAgent) || (BB.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var JB = function(BB) {
        this._parent = BB, this.init()
      };
      JB.prototype = {
        init: function() {
          var BB = this,
            TB = BB._parent;
          return BB._muted = TB._muted, BB._loop = TB._loop, BB._volume = TB._volume, BB._rate = TB._rate, BB._seek = 0, BB.Wm = !0, BB._ended = !0, BB._sprite = "__default", BB._id = ++pB._counter, TB._sounds.push(BB), BB.create(), BB
        },
        create: function() {
          var BB = this,
            TB = BB._parent,
            dB = pB._muted || BB._muted || BB._parent._muted ? 0 : BB._volume;
          return TB._webAudio ? (BB._node = "undefined" === typeof pB.ctx.createGain ? pB.ctx.createGainNode() : pB.ctx.createGain(), BB._node.gain.setValueAtTime(dB, pB.ctx.currentTime), BB._node.paused = !0, BB._node.connect(pB.masterGain)) : pB.noAudio || (BB._node = pB._obtainHtml5Audio(), BB._errorFn = BB._errorListener.bind(BB), BB._node.addEventListener("error", BB._errorFn, !1), BB._loadFn = BB._loadListener.bind(BB), BB._node.addEventListener(pB._canPlayEvent, BB._loadFn, !1), BB._endFn = BB._endListener.bind(BB), BB._node.addEventListener("ended", BB._endFn, !1), BB._node.src = TB._src, BB._node.preload = !0 === TB._preload ? "auto" : TB._preload, BB._node.volume = dB * pB.volume(), BB._node.load()), BB
        },
        reset: function() {
          var BB = this,
            TB = BB._parent;
          return BB._muted = TB._muted, BB._loop = TB._loop, BB._volume = TB._volume, BB._rate = TB._rate, BB._seek = 0, BB._rateSeek = 0, BB.Wm = !0, BB._ended = !0, BB._sprite = "__default", BB._id = ++pB._counter, BB
        },
        _errorListener: function() {
          var BB = this;
          BB._parent._emit("loaderror", BB._id, BB._node.error ? BB._node.error.code : 0), BB._node.removeEventListener("error", BB._errorFn, !1)
        },
        _loadListener: function() {
          var BB = this,
            TB = BB._parent;
          TB._duration = Math.ceil(10 * BB._node.duration) / 10, 0 === Object.keys(TB._sprite).length && (TB._sprite = {
            __default: [0, 1e3 * TB._duration]
          }), "loaded" !== TB._state && (TB._state = "loaded", TB._emit("load"), TB._loadQueue()), BB._node.removeEventListener(pB._canPlayEvent, BB._loadFn, !1)
        },
        _endListener: function() {
          var BB = this,
            TB = BB._parent;
          TB._duration === 1 / 0 && (TB._duration = Math.ceil(10 * BB._node.duration) / 10, TB._sprite.__default[1] === 1 / 0 && (TB._sprite.__default[1] = 1e3 * TB._duration), TB._ended(BB)), BB._node.removeEventListener("ended", BB._endFn, !1)
        }
      };
      var YB = {},
        gB = function(BB) {
          var TB = BB._src;
          if (YB[TB]) return BB._duration = YB[TB].duration, void LB(BB);
          if (/^data:[^;]+;base64,/.test(TB)) {
            for (var dB = atob(TB.split(",")[1]), VB = new Uint8Array(dB.length), yB = 0; yB < dB.length; ++yB) VB[yB] = dB.charCodeAt(yB);
            kB(VB.buffer, BB)
          } else {
            var pB = new XMLHttpRequest;
            pB.open(BB._xhr.method, TB, !0), pB.withCredentials = BB._xhr.withCredentials, pB.responseType = "arraybuffer", BB._xhr.headers && Object.keys(BB._xhr.headers).forEach((function(TB) {
              pB.setRequestHeader(TB, BB._xhr.headers[TB])
            })), pB.onload = function() {
              var TB = (pB.status + "")[0];
              "0" === TB || "2" === TB || "3" === TB ? kB(pB.response, BB) : BB._emit("loaderror", null, "Failed loading audio file with status: " + pB.status + ".")
            }, pB.onerror = function() {
              BB._webAudio && (BB._html5 = !0, BB._webAudio = !1, BB._sounds = [], delete YB[TB], BB.load())
            }, oB(pB)
          }
        },
        oB = function(BB) {
          try {
            BB.send()
          } catch (TB) {
            BB.onerror()
          }
        },
        kB = function(BB, TB) {
          var dB = function() {
              TB._emit("loaderror", null, "Decoding audio data failed.")
            },
            VB = function(BB) {
              BB && TB._sounds.length > 0 ? (YB[TB._src] = BB, LB(TB, BB)) : dB()
            };
          "undefined" !== typeof Promise && 1 === pB.ctx.decodeAudioData.length ? pB.ctx.decodeAudioData(BB).then(VB).catch(dB) : pB.ctx.decodeAudioData(BB, VB, dB)
        },
        LB = function(BB, TB) {
          TB && !BB._duration && (BB._duration = TB.duration), 0 === Object.keys(BB._sprite).length && (BB._sprite = {
            __default: [0, 1e3 * BB._duration]
          }), "loaded" !== BB._state && (BB._state = "loaded", BB._emit("load"), BB._loadQueue())
        },
        OB = function() {
          if (pB.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? pB.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? pB.ctx = new webkitAudioContext : pB.usingWebAudio = !1
            } catch (yB) {
              pB.usingWebAudio = !1
            }
            pB.ctx || (pB.usingWebAudio = !1);
            var BB = /iP(hone|od|ad)/.test(pB._navigator && pB._navigator.platform),
              TB = pB._navigator && pB._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              dB = TB ? parseInt(TB[1], 10) : null;
            if (BB && dB && dB < 9) {
              var VB = /safari/.test(pB._navigator && pB._navigator.userAgent.toLowerCase());
              pB._navigator && !VB && (pB.usingWebAudio = !1)
            }
            pB.usingWebAudio && (pB.masterGain = "undefined" === typeof pB.ctx.createGain ? pB.ctx.createGainNode() : pB.ctx.createGain(), pB.masterGain.gain.setValueAtTime(pB._muted ? 0 : pB._volume, pB.ctx.currentTime), pB.masterGain.connect(pB.ctx.destination)), pB._setup()
          }
        };
      void 0 === (VB = function() {
        return {
          Howler: pB,
          Howl: lB
        }
      }.apply(TB, [])) || (BB.exports = VB), TB.Howler = pB, TB.Howl = lB, "undefined" !== typeof dB.g ? (dB.g.HowlerGlobal = yB, dB.g.Howler = pB, dB.g.Howl = lB, dB.g.Sound = JB) : "undefined" !== typeof window && (window.HowlerGlobal = yB, window.Howler = pB, window.Howl = lB, window.Sound = JB)
    }(),
    function() {
      var BB;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(BB) {
        var TB = this;
        if (!TB.ctx || !TB.ctx.listener) return TB;
        for (var dB = TB._howls.length - 1; dB >= 0; dB--) TB._howls[dB].stereo(BB);
        return TB
      }, HowlerGlobal.prototype.pos = function(BB, TB, dB) {
        var VB = this;
        return VB.ctx && VB.ctx.listener ? (TB = "number" !== typeof TB ? VB._pos[1] : TB, dB = "number" !== typeof dB ? VB._pos[2] : dB, "number" !== typeof BB ? VB._pos : (VB._pos = [BB, TB, dB], "undefined" !== typeof VB.ctx.listener.positionX ? (VB.ctx.listener.positionX.setTargetAtTime(VB._pos[0], Howler.ctx.currentTime, .1), VB.ctx.listener.positionY.setTargetAtTime(VB._pos[1], Howler.ctx.currentTime, .1), VB.ctx.listener.positionZ.setTargetAtTime(VB._pos[2], Howler.ctx.currentTime, .1)) : VB.ctx.listener.setPosition(VB._pos[0], VB._pos[1], VB._pos[2]), VB)) : VB
      }, HowlerGlobal.prototype.orientation = function(BB, TB, dB, VB, yB, pB) {
        var lB = this;
        if (!lB.ctx || !lB.ctx.listener) return lB;
        var JB = lB._orientation;
        return TB = "number" !== typeof TB ? JB[1] : TB, dB = "number" !== typeof dB ? JB[2] : dB, VB = "number" !== typeof VB ? JB[3] : VB, yB = "number" !== typeof yB ? JB[4] : yB, pB = "number" !== typeof pB ? JB[5] : pB, "number" !== typeof BB ? JB : (lB._orientation = [BB, TB, dB, VB, yB, pB], "undefined" !== typeof lB.ctx.listener.forwardX ? (lB.ctx.listener.forwardX.setTargetAtTime(BB, Howler.ctx.currentTime, .1), lB.ctx.listener.forwardY.setTargetAtTime(TB, Howler.ctx.currentTime, .1), lB.ctx.listener.forwardZ.setTargetAtTime(dB, Howler.ctx.currentTime, .1), lB.ctx.listener.upX.setTargetAtTime(VB, Howler.ctx.currentTime, .1), lB.ctx.listener.upY.setTargetAtTime(yB, Howler.ctx.currentTime, .1), lB.ctx.listener.upZ.setTargetAtTime(pB, Howler.ctx.currentTime, .1)) : lB.ctx.listener.setOrientation(BB, TB, dB, VB, yB, pB), lB)
      }, Howl.prototype.init = (BB = Howl.prototype.init, function(TB) {
        var dB = this;
        return dB._orientation = TB.orientation || [1, 0, 0], dB._stereo = TB.stereo || null, dB._pos = TB.pos || null, dB._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof TB.coneInnerAngle ? TB.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof TB.coneOuterAngle ? TB.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof TB.coneOuterGain ? TB.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof TB.distanceModel ? TB.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof TB.maxDistance ? TB.maxDistance : 1e4,
          panningModel: "undefined" !== typeof TB.panningModel ? TB.panningModel : "HRTF",
          refDistance: "undefined" !== typeof TB.refDistance ? TB.refDistance : 1,
          rolloffFactor: "undefined" !== typeof TB.rolloffFactor ? TB.rolloffFactor : 1
        }, dB._onstereo = TB.onstereo ? [{
          gD: TB.onstereo
        }] : [], dB._onpos = TB.onpos ? [{
          gD: TB.onpos
        }] : [], dB._onorientation = TB.onorientation ? [{
          gD: TB.onorientation
        }] : [], BB.call(this, TB)
      }), Howl.prototype.stereo = function(BB, dB) {
        var VB = this;
        if (!VB._webAudio) return VB;
        if ("loaded" !== VB._state) return VB._queue.push({
          event: "stereo",
          action: function() {
            VB.stereo(BB, dB)
          }
        }), VB;
        var yB = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof dB) {
          if ("number" !== typeof BB) return VB._stereo;
          VB._stereo = BB, VB._pos = [BB, 0, 0]
        }
        for (var pB = VB._getSoundIds(dB), lB = 0; lB < pB.length; lB++) {
          var JB = VB._soundById(pB[lB]);
          if (JB) {
            if ("number" !== typeof BB) return JB._stereo;
            JB._stereo = BB, JB._pos = [BB, 0, 0], JB._node && (JB._pannerAttr.panningModel = "equalpower", JB._panner && JB._panner.pan || TB(JB, yB), "spatial" === yB ? "undefined" !== typeof JB._panner.positionX ? (JB._panner.positionX.setValueAtTime(BB, Howler.ctx.currentTime), JB._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), JB._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : JB._panner.setPosition(BB, 0, 0) : JB._panner.pan.setValueAtTime(BB, Howler.ctx.currentTime)), VB._emit("stereo", JB._id)
          }
        }
        return VB
      }, Howl.prototype.pos = function(BB, dB, VB, yB) {
        var pB = this;
        if (!pB._webAudio) return pB;
        if ("loaded" !== pB._state) return pB._queue.push({
          event: "pos",
          action: function() {
            pB.pos(BB, dB, VB, yB)
          }
        }), pB;
        if (dB = "number" !== typeof dB ? 0 : dB, VB = "number" !== typeof VB ? -.5 : VB, "undefined" === typeof yB) {
          if ("number" !== typeof BB) return pB._pos;
          pB._pos = [BB, dB, VB]
        }
        for (var lB = pB._getSoundIds(yB), JB = 0; JB < lB.length; JB++) {
          var YB = pB._soundById(lB[JB]);
          if (YB) {
            if ("number" !== typeof BB) return YB._pos;
            YB._pos = [BB, dB, VB], YB._node && (YB._panner && !YB._panner.pan || TB(YB, "spatial"), "undefined" !== typeof YB._panner.positionX ? (YB._panner.positionX.setValueAtTime(BB, Howler.ctx.currentTime), YB._panner.positionY.setValueAtTime(dB, Howler.ctx.currentTime), YB._panner.positionZ.setValueAtTime(VB, Howler.ctx.currentTime)) : YB._panner.setPosition(BB, dB, VB)), pB._emit("pos", YB._id)
          }
        }
        return pB
      }, Howl.prototype.orientation = function(BB, dB, VB, yB) {
        var pB = this;
        if (!pB._webAudio) return pB;
        if ("loaded" !== pB._state) return pB._queue.push({
          event: "orientation",
          action: function() {
            pB.orientation(BB, dB, VB, yB)
          }
        }), pB;
        if (dB = "number" !== typeof dB ? pB._orientation[1] : dB, VB = "number" !== typeof VB ? pB._orientation[2] : VB, "undefined" === typeof yB) {
          if ("number" !== typeof BB) return pB._orientation;
          pB._orientation = [BB, dB, VB]
        }
        for (var lB = pB._getSoundIds(yB), JB = 0; JB < lB.length; JB++) {
          var YB = pB._soundById(lB[JB]);
          if (YB) {
            if ("number" !== typeof BB) return YB._orientation;
            YB._orientation = [BB, dB, VB], YB._node && (YB._panner || (YB._pos || (YB._pos = pB._pos || [0, 0, -.5]), TB(YB, "spatial")), "undefined" !== typeof YB._panner.orientationX ? (YB._panner.orientationX.setValueAtTime(BB, Howler.ctx.currentTime), YB._panner.orientationY.setValueAtTime(dB, Howler.ctx.currentTime), YB._panner.orientationZ.setValueAtTime(VB, Howler.ctx.currentTime)) : YB._panner.setOrientation(BB, dB, VB)), pB._emit("orientation", YB._id)
          }
        }
        return pB
      }, Howl.prototype.pannerAttr = function() {
        var BB, dB, VB, yB = this,
          pB = arguments;
        if (!yB._webAudio) return yB;
        if (0 === pB.length) return yB._pannerAttr;
        if (1 === pB.length) {
          if ("object" !== typeof pB[0]) return (VB = yB._soundById(parseInt(pB[0], 10))) ? VB._pannerAttr : yB._pannerAttr;
          BB = pB[0], "undefined" === typeof dB && (BB.pannerAttr || (BB.pannerAttr = {
            coneInnerAngle: BB.coneInnerAngle,
            coneOuterAngle: BB.coneOuterAngle,
            coneOuterGain: BB.coneOuterGain,
            distanceModel: BB.distanceModel,
            maxDistance: BB.maxDistance,
            refDistance: BB.refDistance,
            rolloffFactor: BB.rolloffFactor,
            panningModel: BB.panningModel
          }), yB._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof BB.pannerAttr.coneInnerAngle ? BB.pannerAttr.coneInnerAngle : yB._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof BB.pannerAttr.coneOuterAngle ? BB.pannerAttr.coneOuterAngle : yB._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof BB.pannerAttr.coneOuterGain ? BB.pannerAttr.coneOuterGain : yB._coneOuterGain,
            distanceModel: "undefined" !== typeof BB.pannerAttr.distanceModel ? BB.pannerAttr.distanceModel : yB._distanceModel,
            maxDistance: "undefined" !== typeof BB.pannerAttr.maxDistance ? BB.pannerAttr.maxDistance : yB._maxDistance,
            refDistance: "undefined" !== typeof BB.pannerAttr.refDistance ? BB.pannerAttr.refDistance : yB._refDistance,
            rolloffFactor: "undefined" !== typeof BB.pannerAttr.rolloffFactor ? BB.pannerAttr.rolloffFactor : yB._rolloffFactor,
            panningModel: "undefined" !== typeof BB.pannerAttr.panningModel ? BB.pannerAttr.panningModel : yB._panningModel
          })
        } else 2 === pB.length && (BB = pB[0], dB = parseInt(pB[1], 10));
        for (var lB = yB._getSoundIds(dB), JB = 0; JB < lB.length; JB++)
          if (VB = yB._soundById(lB[JB])) {
            var YB = VB._pannerAttr;
            YB = {
              coneInnerAngle: "undefined" !== typeof BB.coneInnerAngle ? BB.coneInnerAngle : YB.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof BB.coneOuterAngle ? BB.coneOuterAngle : YB.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof BB.coneOuterGain ? BB.coneOuterGain : YB.coneOuterGain,
              distanceModel: "undefined" !== typeof BB.distanceModel ? BB.distanceModel : YB.distanceModel,
              maxDistance: "undefined" !== typeof BB.maxDistance ? BB.maxDistance : YB.maxDistance,
              refDistance: "undefined" !== typeof BB.refDistance ? BB.refDistance : YB.refDistance,
              rolloffFactor: "undefined" !== typeof BB.rolloffFactor ? BB.rolloffFactor : YB.rolloffFactor,
              panningModel: "undefined" !== typeof BB.panningModel ? BB.panningModel : YB.panningModel
            };
            var gB = VB._panner;
            gB ? (gB.coneInnerAngle = YB.coneInnerAngle, gB.coneOuterAngle = YB.coneOuterAngle, gB.coneOuterGain = YB.coneOuterGain, gB.distanceModel = YB.distanceModel, gB.maxDistance = YB.maxDistance, gB.refDistance = YB.refDistance, gB.rolloffFactor = YB.rolloffFactor, gB.panningModel = YB.panningModel) : (VB._pos || (VB._pos = yB._pos || [0, 0, -.5]), TB(VB, "spatial"))
          } return yB
      }, Sound.prototype.init = function(BB) {
        return function() {
          var TB = this,
            dB = TB._parent;
          TB._orientation = dB._orientation, TB._stereo = dB._stereo, TB._pos = dB._pos, TB._pannerAttr = dB._pannerAttr, BB.call(this), TB._stereo ? dB.stereo(TB._stereo) : TB._pos && dB.pos(TB._pos[0], TB._pos[1], TB._pos[2], TB._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(BB) {
        return function() {
          var TB = this,
            dB = TB._parent;
          return TB._orientation = dB._orientation, TB._stereo = dB._stereo, TB._pos = dB._pos, TB._pannerAttr = dB._pannerAttr, TB._stereo ? dB.stereo(TB._stereo) : TB._pos ? dB.pos(TB._pos[0], TB._pos[1], TB._pos[2], TB._id) : TB._panner && (TB._panner.disconnect(0), TB._panner = void 0, dB._refreshBuffer(TB)), BB.call(this)
        }
      }(Sound.prototype.reset);
      var TB = function(BB, TB) {
        "spatial" === (TB = TB || "spatial") ? (BB._panner = Howler.ctx.createPanner(), BB._panner.coneInnerAngle = BB._pannerAttr.coneInnerAngle, BB._panner.coneOuterAngle = BB._pannerAttr.coneOuterAngle, BB._panner.coneOuterGain = BB._pannerAttr.coneOuterGain, BB._panner.distanceModel = BB._pannerAttr.distanceModel, BB._panner.maxDistance = BB._pannerAttr.maxDistance, BB._panner.refDistance = BB._pannerAttr.refDistance, BB._panner.rolloffFactor = BB._pannerAttr.rolloffFactor, BB._panner.panningModel = BB._pannerAttr.panningModel, "undefined" !== typeof BB._panner.positionX ? (BB._panner.positionX.setValueAtTime(BB._pos[0], Howler.ctx.currentTime), BB._panner.positionY.setValueAtTime(BB._pos[1], Howler.ctx.currentTime), BB._panner.positionZ.setValueAtTime(BB._pos[2], Howler.ctx.currentTime)) : BB._panner.setPosition(BB._pos[0], BB._pos[1], BB._pos[2]), "undefined" !== typeof BB._panner.orientationX ? (BB._panner.orientationX.setValueAtTime(BB._orientation[0], Howler.ctx.currentTime), BB._panner.orientationY.setValueAtTime(BB._orientation[1], Howler.ctx.currentTime), BB._panner.orientationZ.setValueAtTime(BB._orientation[2], Howler.ctx.currentTime)) : BB._panner.setOrientation(BB._orientation[0], BB._orientation[1], BB._orientation[2])) : (BB._panner = Howler.ctx.createStereoPanner(), BB._panner.pan.setValueAtTime(BB._stereo, Howler.ctx.currentTime)), BB._panner.connect(BB._node), BB.Wm || BB._parent.pause(BB._id, !0).play(BB._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);