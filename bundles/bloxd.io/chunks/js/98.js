/*! For license information please see c6gaap.98.2d506d43.chunk.js.LICENSE.txt */
export const id = 98;
export const ids = [98];
export const modules = {
  5031: (BB, IB, ZB) => {
    var TB;
    ! function() {
      var JB = function() {
        this.init()
      };
      JB.prototype = {
        init: function() {
          var BB = this || oB;
          return BB._counter = 1e3, BB._html5AudioPool = [], BB.html5PoolSize = 10, BB._codecs = {}, BB._howls = [], BB._muted = !1, BB._volume = 1, BB._canPlayEvent = "canplaythrough", BB._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, BB.masterGain = null, BB.noAudio = !1, BB.usingWebAudio = !0, BB.autoSuspend = !0, BB.ctx = null, BB.autoUnlock = !0, BB._setup(), BB
        },
        volume: function(BB) {
          var IB = this || oB;
          if (BB = parseFloat(BB), IB.ctx || FB(), "undefined" !== typeof BB && BB >= 0 && BB <= 1) {
            if (IB._volume = BB, IB._muted) return IB;
            IB.usingWebAudio && IB.masterGain.gain.setValueAtTime(BB, oB.ctx.currentTime);
            for (var ZB = 0; ZB < IB._howls.length; ZB++)
              if (!IB._howls[ZB]._webAudio)
                for (var TB = IB._howls[ZB]._getSoundIds(), JB = 0; JB < TB.length; JB++) {
                  var GB = IB._howls[ZB]._soundById(TB[JB]);
                  GB && GB._node && (GB._node.volume = GB._volume * BB)
                }
            return IB
          }
          return IB._volume
        },
        mute: function(BB) {
          var IB = this || oB;
          IB.ctx || FB(), IB._muted = BB, IB.usingWebAudio && IB.masterGain.gain.setValueAtTime(BB ? 0 : IB._volume, oB.ctx.currentTime);
          for (var ZB = 0; ZB < IB._howls.length; ZB++)
            if (!IB._howls[ZB]._webAudio)
              for (var TB = IB._howls[ZB]._getSoundIds(), JB = 0; JB < TB.length; JB++) {
                var GB = IB._howls[ZB]._soundById(TB[JB]);
                GB && GB._node && (GB._node.muted = !!BB || GB._muted)
              }
          return IB
        },
        stop: function() {
          for (var BB = this || oB, IB = 0; IB < BB._howls.length; IB++) BB._howls[IB].stop();
          return BB
        },
        unload: function() {
          for (var BB = this || oB, IB = BB._howls.length - 1; IB >= 0; IB--) BB._howls[IB].unload();
          return BB.usingWebAudio && BB.ctx && "undefined" !== typeof BB.ctx.close && (BB.ctx.close(), BB.ctx = null, FB()), BB
        },
        codecs: function(BB) {
          return (this || oB)._codecs[BB.replace(/^x-/, "")]
        },
        _setup: function() {
          var BB = this || oB;
          if (BB.state = BB.ctx && BB.ctx.state || "suspended", BB._autoSuspend(), !BB.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (BB._canPlayEvent = "canplay")
            } catch (IB) {
              BB.noAudio = !0
            } else BB.noAudio = !0;
          try {
            (new Audio).muted && (BB.noAudio = !0)
          } catch (IB) {}
          return BB.noAudio || BB._setupCodecs(), BB
        },
        _setupCodecs: function() {
          var BB = this || oB,
            IB = null;
          try {
            IB = "undefined" !== typeof Audio ? new Audio : null
          } catch (nB) {
            return BB
          }
          if (!IB || "function" !== typeof IB.canPlayType) return BB;
          var ZB = IB.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            TB = BB._navigator ? BB._navigator.userAgent : "",
            JB = TB.match(/OPR\/([0-6].)/g),
            GB = JB && parseInt(JB[0].split("/")[1], 10) < 33,
            vB = -1 !== TB.indexOf("Safari") && -1 === TB.indexOf("Chrome"),
            kB = TB.match(/Version\/(.*?) /),
            cB = vB && kB && parseInt(kB[1], 10) < 15;
          return BB._codecs = {
            mp3: !(GB || !ZB && !IB.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!ZB,
            opus: !!IB.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!IB.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!IB.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(IB.canPlayType('audio/wav; codecs="1"') || IB.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!IB.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!IB.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(IB.canPlayType("audio/x-m4a;") || IB.canPlayType("audio/m4a;") || IB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(IB.canPlayType("audio/x-m4b;") || IB.canPlayType("audio/m4b;") || IB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(IB.canPlayType("audio/x-mp4;") || IB.canPlayType("audio/mp4;") || IB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(cB || !IB.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(cB || !IB.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!IB.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(IB.canPlayType("audio/x-flac;") || IB.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, BB
        },
        _unlockAudio: function() {
          var BB = this || oB;
          if (!BB._audioUnlocked && BB.ctx) {
            BB._audioUnlocked = !1, BB.autoUnlock = !1, BB._mobileUnloaded || 44100 === BB.ctx.sampleRate || (BB._mobileUnloaded = !0, BB.unload()), BB._scratchBuffer = BB.ctx.createBuffer(1, 1, 22050);
            var IB = function(ZB) {
              for (; BB._html5AudioPool.length < BB.html5PoolSize;) try {
                var TB = new Audio;
                TB._unlocked = !0, BB._releaseHtml5Audio(TB)
              } catch (ZB) {
                BB.noAudio = !0;
                break
              }
              for (var JB = 0; JB < BB._howls.length; JB++)
                if (!BB._howls[JB]._webAudio)
                  for (var oB = BB._howls[JB]._getSoundIds(), GB = 0; GB < oB.length; GB++) {
                    var vB = BB._howls[JB]._soundById(oB[GB]);
                    vB && vB._node && !vB._node._unlocked && (vB._node._unlocked = !0, vB._node.load())
                  }
              BB._autoResume();
              var kB = BB.ctx.createBufferSource();
              kB.buffer = BB._scratchBuffer, kB.connect(BB.ctx.destination), "undefined" === typeof kB.start ? kB.noteOn(0) : kB.start(0), "function" === typeof BB.ctx.resume && BB.ctx.resume(), kB.onended = function() {
                kB.disconnect(0), BB._audioUnlocked = !0, document.removeEventListener("touchstart", IB, !0), document.removeEventListener("touchend", IB, !0), document.removeEventListener("click", IB, !0), document.removeEventListener("keydown", IB, !0);
                for (var ZB = 0; ZB < BB._howls.length; ZB++) BB._howls[ZB]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", IB, !0), document.addEventListener("touchend", IB, !0), document.addEventListener("click", IB, !0), document.addEventListener("keydown", IB, !0), BB
          }
        },
        _obtainHtml5Audio: function() {
          var BB = this || oB;
          if (BB._html5AudioPool.length) return BB._html5AudioPool.pop();
          var IB = (new Audio).play();
          return IB && "undefined" !== typeof Promise && (IB instanceof Promise || "function" === typeof IB.then) && IB.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(BB) {
          var IB = this || oB;
          return BB._unlocked && IB._html5AudioPool.push(BB), IB
        },
        _autoSuspend: function() {
          var BB = this;
          if (BB.autoSuspend && BB.ctx && "undefined" !== typeof BB.ctx.suspend && oB.usingWebAudio) {
            for (var IB = 0; IB < BB._howls.length; IB++)
              if (BB._howls[IB]._webAudio)
                for (var ZB = 0; ZB < BB._howls[IB]._sounds.length; ZB++)
                  if (!BB._howls[IB]._sounds[ZB].iW) return BB;
            return BB._suspendTimer && clearTimeout(BB._suspendTimer), BB._suspendTimer = setTimeout((function() {
              if (BB.autoSuspend) {
                BB._suspendTimer = null, BB.state = "suspending";
                var IB = function() {
                  BB.state = "suspended", BB._resumeAfterSuspend && (delete BB._resumeAfterSuspend, BB._autoResume())
                };
                BB.ctx.suspend().then(IB, IB)
              }
            }), 3e4), BB
          }
        },
        _autoResume: function() {
          var BB = this;
          if (BB.ctx && "undefined" !== typeof BB.ctx.resume && oB.usingWebAudio) return "running" === BB.state && "interrupted" !== BB.ctx.state && BB._suspendTimer ? (clearTimeout(BB._suspendTimer), BB._suspendTimer = null) : "suspended" === BB.state || "running" === BB.state && "interrupted" === BB.ctx.state ? (BB.ctx.resume().then((function() {
            BB.state = "running";
            for (var IB = 0; IB < BB._howls.length; IB++) BB._howls[IB]._emit("resume")
          })), BB._suspendTimer && (clearTimeout(BB._suspendTimer), BB._suspendTimer = null)) : "suspending" === BB.state && (BB._resumeAfterSuspend = !0), BB
        }
      };
      var oB = new JB,
        GB = function(BB) {
          BB.src && 0 !== BB.src.length ? this.init(BB) : console.error("An array of source files must be passed with any new Howl.")
        };
      GB.prototype = {
        init: function(BB) {
          var IB = this;
          return oB.ctx || FB(), IB._autoplay = BB.autoplay || !1, IB._format = "string" !== typeof BB.format ? BB.format : [BB.format], IB._html5 = BB.html5 || !1, IB._muted = BB.mute || !1, IB._loop = BB.loop || !1, IB._pool = BB.pool || 5, IB._preload = "boolean" !== typeof BB.preload && "metadata" !== BB.preload || BB.preload, IB._rate = BB.rate || 1, IB._sprite = BB.sprite || {}, IB._src = "string" !== typeof BB.src ? BB.src : [BB.src], IB._volume = void 0 !== BB.volume ? BB.volume : 1, IB._xhr = {
            method: BB.xhr && BB.xhr.method ? BB.xhr.method : "GET",
            headers: BB.xhr && BB.xhr.headers ? BB.xhr.headers : null,
            withCredentials: !(!BB.xhr || !BB.xhr.withCredentials) && BB.xhr.withCredentials
          }, IB._duration = 0, IB._state = "unloaded", IB._sounds = [], IB._endTimers = {}, IB._queue = [], IB._playLock = !1, IB._onend = BB.onend ? [{
            vN: BB.onend
          }] : [], IB._onfade = BB.onfade ? [{
            vN: BB.onfade
          }] : [], IB._onload = BB.onload ? [{
            vN: BB.onload
          }] : [], IB._onloaderror = BB.onloaderror ? [{
            vN: BB.onloaderror
          }] : [], IB._onplayerror = BB.onplayerror ? [{
            vN: BB.onplayerror
          }] : [], IB._onpause = BB.onpause ? [{
            vN: BB.onpause
          }] : [], IB._onplay = BB.onplay ? [{
            vN: BB.onplay
          }] : [], IB._onstop = BB.onstop ? [{
            vN: BB.onstop
          }] : [], IB._onmute = BB.onmute ? [{
            vN: BB.onmute
          }] : [], IB._onvolume = BB.onvolume ? [{
            vN: BB.onvolume
          }] : [], IB._onrate = BB.onrate ? [{
            vN: BB.onrate
          }] : [], IB._onseek = BB.onseek ? [{
            vN: BB.onseek
          }] : [], IB._onunlock = BB.onunlock ? [{
            vN: BB.onunlock
          }] : [], IB._onresume = [], IB._webAudio = oB.usingWebAudio && !IB._html5, "undefined" !== typeof oB.ctx && oB.ctx && oB.autoUnlock && oB._unlockAudio(), oB._howls.push(IB), IB._autoplay && IB._queue.push({
            event: "play",
            action: function() {
              IB.play()
            }
          }), IB._preload && "none" !== IB._preload && IB.load(), IB
        },
        load: function() {
          var BB = this,
            IB = null;
          if (oB.noAudio) BB._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof BB._src && (BB._src = [BB._src]);
            for (var ZB = 0; ZB < BB._src.length; ZB++) {
              var TB, JB;
              if (BB._format && BB._format[ZB]) TB = BB._format[ZB];
              else {
                if ("string" !== typeof(JB = BB._src[ZB])) {
                  BB._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(TB = /^data:audio\/([^;,]+);/i.exec(JB)) || (TB = /\.([^.]+)$/.exec(JB.split("?", 1)[0])), TB && (TB = TB[1].toLowerCase())
              }
              if (TB || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), TB && oB.codecs(TB)) {
                IB = BB._src[ZB];
                break
              }
            }
            if (IB) return BB._src = IB, BB._state = "loading", "https:" === window.location.protocol && "http:" === IB.slice(0, 5) && (BB._html5 = !0, BB._webAudio = !1), new vB(BB), BB._webAudio && cB(BB), BB;
            BB._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(BB, IB) {
          var ZB = this,
            TB = null;
          if ("number" === typeof BB) TB = BB, BB = null;
          else {
            if ("string" === typeof BB && "loaded" === ZB._state && !ZB._sprite[BB]) return null;
            if ("undefined" === typeof BB && (BB = "__default", !ZB._playLock)) {
              for (var JB = 0, GB = 0; GB < ZB._sounds.length; GB++) ZB._sounds[GB].iW && !ZB._sounds[GB]._ended && (JB++, TB = ZB._sounds[GB]._id);
              1 === JB ? BB = null : TB = null
            }
          }
          var vB = TB ? ZB._soundById(TB) : ZB._inactiveSound();
          if (!vB) return null;
          if (TB && !BB && (BB = vB._sprite || "__default"), "loaded" !== ZB._state) {
            vB._sprite = BB, vB._ended = !1;
            var kB = vB._id;
            return ZB._queue.push({
              event: "play",
              action: function() {
                ZB.play(kB)
              }
            }), kB
          }
          if (TB && !vB.iW) return IB || ZB._loadQueue("play"), vB._id;
          ZB._webAudio && oB._autoResume();
          var cB = Math.max(0, vB._seek > 0 ? vB._seek : ZB._sprite[BB][0] / 1e3),
            nB = Math.max(0, (ZB._sprite[BB][0] + ZB._sprite[BB][1]) / 1e3 - cB),
            hB = 1e3 * nB / Math.abs(vB._rate),
            zB = ZB._sprite[BB][0] / 1e3,
            FB = (ZB._sprite[BB][0] + ZB._sprite[BB][1]) / 1e3;
          vB._sprite = BB, vB._ended = !1;
          var NB = function() {
            vB.iW = !1, vB._seek = cB, vB._start = zB, vB._stop = FB, vB._loop = !(!vB._loop && !ZB._sprite[BB][2])
          };
          if (!(cB >= FB)) {
            var gB = vB._node;
            if (ZB._webAudio) {
              var qB = function() {
                ZB._playLock = !1, NB(), ZB._refreshBuffer(vB);
                var BB = vB._muted || ZB._muted ? 0 : vB._volume;
                gB.gain.setValueAtTime(BB, oB.ctx.currentTime), vB._playStart = oB.ctx.currentTime, "undefined" === typeof gB.bufferSource.start ? vB._loop ? gB.bufferSource.noteGrainOn(0, cB, 86400) : gB.bufferSource.noteGrainOn(0, cB, nB) : vB._loop ? gB.bufferSource.start(0, cB, 86400) : gB.bufferSource.start(0, cB, nB), hB !== 1 / 0 && (ZB._endTimers[vB._id] = setTimeout(ZB._ended.bind(ZB, vB), hB)), IB || setTimeout((function() {
                  ZB._emit("play", vB._id), ZB._loadQueue()
                }), 0)
              };
              "running" === oB.state && "interrupted" !== oB.ctx.state ? qB() : (ZB._playLock = !0, ZB.once("resume", qB), ZB._clearTimer(vB._id))
            } else {
              var yB = function() {
                gB.currentTime = cB, gB.muted = vB._muted || ZB._muted || oB._muted || gB.muted, gB.volume = vB._volume * oB.volume(), gB.playbackRate = vB._rate;
                try {
                  var TB = gB.play();
                  if (TB && "undefined" !== typeof Promise && (TB instanceof Promise || "function" === typeof TB.then) ? (ZB._playLock = !0, NB(), TB.then((function() {
                      ZB._playLock = !1, gB._unlocked = !0, IB ? ZB._loadQueue() : ZB._emit("play", vB._id)
                    })).catch((function() {
                      ZB._playLock = !1, ZB._emit("playerror", vB._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), vB._ended = !0, vB.iW = !0
                    }))) : IB || (ZB._playLock = !1, NB(), ZB._emit("play", vB._id)), gB.playbackRate = vB._rate, gB.paused) return void ZB._emit("playerror", vB._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== BB || vB._loop ? ZB._endTimers[vB._id] = setTimeout(ZB._ended.bind(ZB, vB), hB) : (ZB._endTimers[vB._id] = function() {
                    ZB._ended(vB), gB.removeEventListener("ended", ZB._endTimers[vB._id], !1)
                  }, gB.addEventListener("ended", ZB._endTimers[vB._id], !1))
                } catch (JB) {
                  ZB._emit("playerror", vB._id, JB)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === gB.src && (gB.src = ZB._src, gB.load());
              var UB = window && window.ejecta || !gB.readyState && oB._navigator.isCocoonJS;
              if (gB.readyState >= 3 || UB) yB();
              else {
                ZB._playLock = !0, ZB._state = "loading";
                var WB = function() {
                  ZB._state = "loaded", yB(), gB.removeEventListener(oB._canPlayEvent, WB, !1)
                };
                gB.addEventListener(oB._canPlayEvent, WB, !1), ZB._clearTimer(vB._id)
              }
            }
            return vB._id
          }
          ZB._ended(vB)
        },
        pause: function(BB) {
          var IB = this;
          if ("loaded" !== IB._state || IB._playLock) return IB._queue.push({
            event: "pause",
            action: function() {
              IB.pause(BB)
            }
          }), IB;
          for (var ZB = IB._getSoundIds(BB), TB = 0; TB < ZB.length; TB++) {
            IB._clearTimer(ZB[TB]);
            var JB = IB._soundById(ZB[TB]);
            if (JB && !JB.iW && (JB._seek = IB.seek(ZB[TB]), JB._rateSeek = 0, JB.iW = !0, IB._stopFade(ZB[TB]), JB._node))
              if (IB._webAudio) {
                if (!JB._node.bufferSource) continue;
                "undefined" === typeof JB._node.bufferSource.stop ? JB._node.bufferSource.noteOff(0) : JB._node.bufferSource.stop(0), IB._cleanBuffer(JB._node)
              } else isNaN(JB._node.duration) && JB._node.duration !== 1 / 0 || JB._node.pause();
            arguments[1] || IB._emit("pause", JB ? JB._id : null)
          }
          return IB
        },
        stop: function(BB, IB) {
          var ZB = this;
          if ("loaded" !== ZB._state || ZB._playLock) return ZB._queue.push({
            event: "stop",
            action: function() {
              ZB.stop(BB)
            }
          }), ZB;
          for (var TB = ZB._getSoundIds(BB), JB = 0; JB < TB.length; JB++) {
            ZB._clearTimer(TB[JB]);
            var oB = ZB._soundById(TB[JB]);
            oB && (oB._seek = oB._start || 0, oB._rateSeek = 0, oB.iW = !0, oB._ended = !0, ZB._stopFade(TB[JB]), oB._node && (ZB._webAudio ? oB._node.bufferSource && ("undefined" === typeof oB._node.bufferSource.stop ? oB._node.bufferSource.noteOff(0) : oB._node.bufferSource.stop(0), ZB._cleanBuffer(oB._node)) : isNaN(oB._node.duration) && oB._node.duration !== 1 / 0 || (oB._node.currentTime = oB._start || 0, oB._node.pause(), oB._node.duration === 1 / 0 && ZB._clearSound(oB._node))), IB || ZB._emit("stop", oB._id))
          }
          return ZB
        },
        mute: function(BB, IB) {
          var ZB = this;
          if ("loaded" !== ZB._state || ZB._playLock) return ZB._queue.push({
            event: "mute",
            action: function() {
              ZB.mute(BB, IB)
            }
          }), ZB;
          if ("undefined" === typeof IB) {
            if ("boolean" !== typeof BB) return ZB._muted;
            ZB._muted = BB
          }
          for (var TB = ZB._getSoundIds(IB), JB = 0; JB < TB.length; JB++) {
            var GB = ZB._soundById(TB[JB]);
            GB && (GB._muted = BB, GB._interval && ZB._stopFade(GB._id), ZB._webAudio && GB._node ? GB._node.gain.setValueAtTime(BB ? 0 : GB._volume, oB.ctx.currentTime) : GB._node && (GB._node.muted = !!oB._muted || BB), ZB._emit("mute", GB._id))
          }
          return ZB
        },
        volume: function() {
          var BB, IB, ZB, TB = this,
            JB = arguments;
          if (0 === JB.length) return TB._volume;
          if (1 === JB.length || 2 === JB.length && "undefined" === typeof JB[1] ? TB._getSoundIds().indexOf(JB[0]) >= 0 ? IB = parseInt(JB[0], 10) : BB = parseFloat(JB[0]) : JB.length >= 2 && (BB = parseFloat(JB[0]), IB = parseInt(JB[1], 10)), !("undefined" !== typeof BB && BB >= 0 && BB <= 1)) return (ZB = IB ? TB._soundById(IB) : TB._sounds[0]) ? ZB._volume : 0;
          if ("loaded" !== TB._state || TB._playLock) return TB._queue.push({
            event: "volume",
            action: function() {
              TB.volume.apply(TB, JB)
            }
          }), TB;
          "undefined" === typeof IB && (TB._volume = BB), IB = TB._getSoundIds(IB);
          for (var GB = 0; GB < IB.length; GB++)(ZB = TB._soundById(IB[GB])) && (ZB._volume = BB, JB[2] || TB._stopFade(IB[GB]), TB._webAudio && ZB._node && !ZB._muted ? ZB._node.gain.setValueAtTime(BB, oB.ctx.currentTime) : ZB._node && !ZB._muted && (ZB._node.volume = BB * oB.volume()), TB._emit("volume", ZB._id));
          return TB
        },
        fade: function(BB, IB, ZB, TB) {
          var JB = this;
          if ("loaded" !== JB._state || JB._playLock) return JB._queue.push({
            event: "fade",
            action: function() {
              JB.fade(BB, IB, ZB, TB)
            }
          }), JB;
          BB = Math.min(Math.max(0, parseFloat(BB)), 1), IB = Math.min(Math.max(0, parseFloat(IB)), 1), ZB = parseFloat(ZB), JB.volume(BB, TB);
          for (var GB = JB._getSoundIds(TB), vB = 0; vB < GB.length; vB++) {
            var kB = JB._soundById(GB[vB]);
            if (kB) {
              if (TB || JB._stopFade(GB[vB]), JB._webAudio && !kB._muted) {
                var cB = oB.ctx.currentTime,
                  nB = cB + ZB / 1e3;
                kB._volume = BB, kB._node.gain.setValueAtTime(BB, cB), kB._node.gain.linearRampToValueAtTime(IB, nB)
              }
              JB._startFadeInterval(kB, BB, IB, ZB, GB[vB], "undefined" === typeof TB)
            }
          }
          return JB
        },
        _startFadeInterval: function(BB, IB, ZB, TB, JB, oB) {
          var GB = this,
            vB = IB,
            kB = ZB - IB,
            cB = Math.abs(kB / .01),
            nB = Math.max(4, cB > 0 ? TB / cB : TB),
            hB = Date.now();
          BB._fadeTo = ZB, BB._interval = setInterval((function() {
            var JB = (Date.now() - hB) / TB;
            hB = Date.now(), vB += kB * JB, vB = Math.round(100 * vB) / 100, vB = kB < 0 ? Math.max(ZB, vB) : Math.min(ZB, vB), GB._webAudio ? BB._volume = vB : GB.volume(vB, BB._id, !0), oB && (GB._volume = vB), (ZB < IB && vB <= ZB || ZB > IB && vB >= ZB) && (clearInterval(BB._interval), BB._interval = null, BB._fadeTo = null, GB.volume(ZB, BB._id), GB._emit("fade", BB._id))
          }), nB)
        },
        _stopFade: function(BB) {
          var IB = this,
            ZB = IB._soundById(BB);
          return ZB && ZB._interval && (IB._webAudio && ZB._node.gain.cancelScheduledValues(oB.ctx.currentTime), clearInterval(ZB._interval), ZB._interval = null, IB.volume(ZB._fadeTo, BB), ZB._fadeTo = null, IB._emit("fade", BB)), IB
        },
        loop: function() {
          var BB, IB, ZB, TB = this,
            JB = arguments;
          if (0 === JB.length) return TB._loop;
          if (1 === JB.length) {
            if ("boolean" !== typeof JB[0]) return !!(ZB = TB._soundById(parseInt(JB[0], 10))) && ZB._loop;
            BB = JB[0], TB._loop = BB
          } else 2 === JB.length && (BB = JB[0], IB = parseInt(JB[1], 10));
          for (var oB = TB._getSoundIds(IB), GB = 0; GB < oB.length; GB++)(ZB = TB._soundById(oB[GB])) && (ZB._loop = BB, TB._webAudio && ZB._node && ZB._node.bufferSource && (ZB._node.bufferSource.loop = BB, BB && (ZB._node.bufferSource.loopStart = ZB._start || 0, ZB._node.bufferSource.loopEnd = ZB._stop, TB.playing(oB[GB]) && (TB.pause(oB[GB], !0), TB.play(oB[GB], !0)))));
          return TB
        },
        rate: function() {
          var BB, IB, ZB, TB = this,
            JB = arguments;
          if (0 === JB.length) IB = TB._sounds[0]._id;
          else if (1 === JB.length) {
            TB._getSoundIds().indexOf(JB[0]) >= 0 ? IB = parseInt(JB[0], 10) : BB = parseFloat(JB[0])
          } else 2 === JB.length && (BB = parseFloat(JB[0]), IB = parseInt(JB[1], 10));
          if ("number" !== typeof BB) return (ZB = TB._soundById(IB)) ? ZB._rate : TB._rate;
          if ("loaded" !== TB._state || TB._playLock) return TB._queue.push({
            event: "rate",
            action: function() {
              TB.rate.apply(TB, JB)
            }
          }), TB;
          "undefined" === typeof IB && (TB._rate = BB), IB = TB._getSoundIds(IB);
          for (var GB = 0; GB < IB.length; GB++)
            if (ZB = TB._soundById(IB[GB])) {
              TB.playing(IB[GB]) && (ZB._rateSeek = TB.seek(IB[GB]), ZB._playStart = TB._webAudio ? oB.ctx.currentTime : ZB._playStart), ZB._rate = BB, TB._webAudio && ZB._node && ZB._node.bufferSource ? ZB._node.bufferSource.playbackRate.setValueAtTime(BB, oB.ctx.currentTime) : ZB._node && (ZB._node.playbackRate = BB);
              var vB = TB.seek(IB[GB]),
                kB = 1e3 * ((TB._sprite[ZB._sprite][0] + TB._sprite[ZB._sprite][1]) / 1e3 - vB) / Math.abs(ZB._rate);
              !TB._endTimers[IB[GB]] && ZB.iW || (TB._clearTimer(IB[GB]), TB._endTimers[IB[GB]] = setTimeout(TB._ended.bind(TB, ZB), kB)), TB._emit("rate", ZB._id)
            } return TB
        },
        seek: function() {
          var BB, IB, ZB = this,
            TB = arguments;
          if (0 === TB.length) ZB._sounds.length && (IB = ZB._sounds[0]._id);
          else if (1 === TB.length) {
            ZB._getSoundIds().indexOf(TB[0]) >= 0 ? IB = parseInt(TB[0], 10) : ZB._sounds.length && (IB = ZB._sounds[0]._id, BB = parseFloat(TB[0]))
          } else 2 === TB.length && (BB = parseFloat(TB[0]), IB = parseInt(TB[1], 10));
          if ("undefined" === typeof IB) return 0;
          if ("number" === typeof BB && ("loaded" !== ZB._state || ZB._playLock)) return ZB._queue.push({
            event: "seek",
            action: function() {
              ZB.seek.apply(ZB, TB)
            }
          }), ZB;
          var JB = ZB._soundById(IB);
          if (JB) {
            if (!("number" === typeof BB && BB >= 0)) {
              if (ZB._webAudio) {
                var GB = ZB.playing(IB) ? oB.ctx.currentTime - JB._playStart : 0,
                  vB = JB._rateSeek ? JB._rateSeek - JB._seek : 0;
                return JB._seek + (vB + GB * Math.abs(JB._rate))
              }
              return JB._node.currentTime
            }
            var kB = ZB.playing(IB);
            kB && ZB.pause(IB, !0), JB._seek = BB, JB._ended = !1, ZB._clearTimer(IB), ZB._webAudio || !JB._node || isNaN(JB._node.duration) || (JB._node.currentTime = BB);
            var cB = function() {
              kB && ZB.play(IB, !0), ZB._emit("seek", IB)
            };
            if (kB && !ZB._webAudio) {
              var nB = function() {
                ZB._playLock ? setTimeout(nB, 0) : cB()
              };
              setTimeout(nB, 0)
            } else cB()
          }
          return ZB
        },
        playing: function(BB) {
          var IB = this;
          if ("number" === typeof BB) {
            var ZB = IB._soundById(BB);
            return !!ZB && !ZB.iW
          }
          for (var TB = 0; TB < IB._sounds.length; TB++)
            if (!IB._sounds[TB].iW) return !0;
          return !1
        },
        duration: function(BB) {
          var IB = this,
            ZB = IB._duration,
            TB = IB._soundById(BB);
          return TB && (ZB = IB._sprite[TB._sprite][1] / 1e3), ZB
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var BB = this, IB = BB._sounds, ZB = 0; ZB < IB.length; ZB++) IB[ZB].iW || BB.stop(IB[ZB]._id), BB._webAudio || (BB._clearSound(IB[ZB]._node), IB[ZB]._node.removeEventListener("error", IB[ZB]._errorFn, !1), IB[ZB]._node.removeEventListener(oB._canPlayEvent, IB[ZB]._loadFn, !1), IB[ZB]._node.removeEventListener("ended", IB[ZB]._endFn, !1), oB._releaseHtml5Audio(IB[ZB]._node)), delete IB[ZB]._node, BB._clearTimer(IB[ZB]._id);
          var TB = oB._howls.indexOf(BB);
          TB >= 0 && oB._howls.splice(TB, 1);
          var JB = !0;
          for (ZB = 0; ZB < oB._howls.length; ZB++)
            if (oB._howls[ZB]._src === BB._src || BB._src.indexOf(oB._howls[ZB]._src) >= 0) {
              JB = !1;
              break
            } return kB && JB && delete kB[BB._src], oB.noAudio = !1, BB._state = "unloaded", BB._sounds = [], BB = null, null
        },
        on: function(BB, IB, ZB, TB) {
          var JB = this["_on" + BB];
          return "function" === typeof IB && JB.push(TB ? {
            id: ZB,
            vN: IB,
            once: TB
          } : {
            id: ZB,
            vN: IB
          }), this
        },
        off: function(BB, IB, ZB) {
          var TB = this,
            JB = TB["_on" + BB],
            oB = 0;
          if ("number" === typeof IB && (ZB = IB, IB = null), IB || ZB)
            for (oB = 0; oB < JB.length; oB++) {
              var GB = ZB === JB[oB].id;
              if (IB === JB[oB].vN && GB || !IB && GB) {
                JB.splice(oB, 1);
                break
              }
            } else if (BB) TB["_on" + BB] = [];
            else {
              var vB = Object.keys(TB);
              for (oB = 0; oB < vB.length; oB++) 0 === vB[oB].indexOf("_on") && Array.isArray(TB[vB[oB]]) && (TB[vB[oB]] = [])
            } return TB
        },
        once: function(BB, IB, ZB) {
          return this.on(BB, IB, ZB, 1), this
        },
        _emit: function(BB, IB, ZB) {
          for (var TB = this, JB = TB["_on" + BB], oB = JB.length - 1; oB >= 0; oB--) JB[oB].id && JB[oB].id !== IB && "load" !== BB || (setTimeout(function(BB) {
            BB.call(this, IB, ZB)
          }.bind(TB, JB[oB].vN), 0), JB[oB].once && TB.off(BB, JB[oB].vN, JB[oB].id));
          return TB._loadQueue(BB), TB
        },
        _loadQueue: function(BB) {
          var IB = this;
          if (IB._queue.length > 0) {
            var ZB = IB._queue[0];
            ZB.event === BB && (IB._queue.shift(), IB._loadQueue()), BB || ZB.action()
          }
          return IB
        },
        _ended: function(BB) {
          var IB = this,
            ZB = BB._sprite;
          if (!IB._webAudio && BB._node && !BB._node.paused && !BB._node.ended && BB._node.currentTime < BB._stop) return setTimeout(IB._ended.bind(IB, BB), 100), IB;
          var TB = !(!BB._loop && !IB._sprite[ZB][2]);
          if (IB._emit("end", BB._id), !IB._webAudio && TB && IB.stop(BB._id, !0).play(BB._id), IB._webAudio && TB) {
            IB._emit("play", BB._id), BB._seek = BB._start || 0, BB._rateSeek = 0, BB._playStart = oB.ctx.currentTime;
            var JB = 1e3 * (BB._stop - BB._start) / Math.abs(BB._rate);
            IB._endTimers[BB._id] = setTimeout(IB._ended.bind(IB, BB), JB)
          }
          return IB._webAudio && !TB && (BB.iW = !0, BB._ended = !0, BB._seek = BB._start || 0, BB._rateSeek = 0, IB._clearTimer(BB._id), IB._cleanBuffer(BB._node), oB._autoSuspend()), IB._webAudio || TB || IB.stop(BB._id, !0), IB
        },
        _clearTimer: function(BB) {
          var IB = this;
          if (IB._endTimers[BB]) {
            if ("function" !== typeof IB._endTimers[BB]) clearTimeout(IB._endTimers[BB]);
            else {
              var ZB = IB._soundById(BB);
              ZB && ZB._node && ZB._node.removeEventListener("ended", IB._endTimers[BB], !1)
            }
            delete IB._endTimers[BB]
          }
          return IB
        },
        _soundById: function(BB) {
          for (var IB = this, ZB = 0; ZB < IB._sounds.length; ZB++)
            if (BB === IB._sounds[ZB]._id) return IB._sounds[ZB];
          return null
        },
        _inactiveSound: function() {
          var BB = this;
          BB._drain();
          for (var IB = 0; IB < BB._sounds.length; IB++)
            if (BB._sounds[IB]._ended) return BB._sounds[IB].reset();
          return new vB(BB)
        },
        _drain: function() {
          var BB = this,
            IB = BB._pool,
            ZB = 0,
            TB = 0;
          if (!(BB._sounds.length < IB)) {
            for (TB = 0; TB < BB._sounds.length; TB++) BB._sounds[TB]._ended && ZB++;
            for (TB = BB._sounds.length - 1; TB >= 0; TB--) {
              if (ZB <= IB) return;
              BB._sounds[TB]._ended && (BB._webAudio && BB._sounds[TB]._node && BB._sounds[TB]._node.disconnect(0), BB._sounds.splice(TB, 1), ZB--)
            }
          }
        },
        _getSoundIds: function(BB) {
          if ("undefined" === typeof BB) {
            for (var IB = [], ZB = 0; ZB < this._sounds.length; ZB++) IB.push(this._sounds[ZB]._id);
            return IB
          }
          return [BB]
        },
        _refreshBuffer: function(BB) {
          return BB._node.bufferSource = oB.ctx.createBufferSource(), BB._node.bufferSource.buffer = kB[this._src], BB._panner ? BB._node.bufferSource.connect(BB._panner) : BB._node.bufferSource.connect(BB._node), BB._node.bufferSource.loop = BB._loop, BB._loop && (BB._node.bufferSource.loopStart = BB._start || 0, BB._node.bufferSource.loopEnd = BB._stop || 0), BB._node.bufferSource.playbackRate.setValueAtTime(BB._rate, oB.ctx.currentTime), this
        },
        _cleanBuffer: function(BB) {
          var IB = oB._navigator && oB._navigator.vendor.indexOf("Apple") >= 0;
          if (oB._scratchBuffer && BB.bufferSource && (BB.bufferSource.onended = null, BB.bufferSource.disconnect(0), IB)) try {
            BB.bufferSource.buffer = oB._scratchBuffer
          } catch (ZB) {}
          return BB.bufferSource = null, this
        },
        _clearSound: function(BB) {
          /MSIE |Trident\//.test(oB._navigator && oB._navigator.userAgent) || (BB.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var vB = function(BB) {
        this._parent = BB, this.init()
      };
      vB.prototype = {
        init: function() {
          var BB = this,
            IB = BB._parent;
          return BB._muted = IB._muted, BB._loop = IB._loop, BB._volume = IB._volume, BB._rate = IB._rate, BB._seek = 0, BB.iW = !0, BB._ended = !0, BB._sprite = "__default", BB._id = ++oB._counter, IB._sounds.push(BB), BB.create(), BB
        },
        create: function() {
          var BB = this,
            IB = BB._parent,
            ZB = oB._muted || BB._muted || BB._parent._muted ? 0 : BB._volume;
          return IB._webAudio ? (BB._node = "undefined" === typeof oB.ctx.createGain ? oB.ctx.createGainNode() : oB.ctx.createGain(), BB._node.gain.setValueAtTime(ZB, oB.ctx.currentTime), BB._node.paused = !0, BB._node.connect(oB.masterGain)) : oB.noAudio || (BB._node = oB._obtainHtml5Audio(), BB._errorFn = BB._errorListener.bind(BB), BB._node.addEventListener("error", BB._errorFn, !1), BB._loadFn = BB._loadListener.bind(BB), BB._node.addEventListener(oB._canPlayEvent, BB._loadFn, !1), BB._endFn = BB._endListener.bind(BB), BB._node.addEventListener("ended", BB._endFn, !1), BB._node.src = IB._src, BB._node.preload = !0 === IB._preload ? "auto" : IB._preload, BB._node.volume = ZB * oB.volume(), BB._node.load()), BB
        },
        reset: function() {
          var BB = this,
            IB = BB._parent;
          return BB._muted = IB._muted, BB._loop = IB._loop, BB._volume = IB._volume, BB._rate = IB._rate, BB._seek = 0, BB._rateSeek = 0, BB.iW = !0, BB._ended = !0, BB._sprite = "__default", BB._id = ++oB._counter, BB
        },
        _errorListener: function() {
          var BB = this;
          BB._parent._emit("loaderror", BB._id, BB._node.error ? BB._node.error.code : 0), BB._node.removeEventListener("error", BB._errorFn, !1)
        },
        _loadListener: function() {
          var BB = this,
            IB = BB._parent;
          IB._duration = Math.ceil(10 * BB._node.duration) / 10, 0 === Object.keys(IB._sprite).length && (IB._sprite = {
            __default: [0, 1e3 * IB._duration]
          }), "loaded" !== IB._state && (IB._state = "loaded", IB._emit("load"), IB._loadQueue()), BB._node.removeEventListener(oB._canPlayEvent, BB._loadFn, !1)
        },
        _endListener: function() {
          var BB = this,
            IB = BB._parent;
          IB._duration === 1 / 0 && (IB._duration = Math.ceil(10 * BB._node.duration) / 10, IB._sprite.__default[1] === 1 / 0 && (IB._sprite.__default[1] = 1e3 * IB._duration), IB._ended(BB)), BB._node.removeEventListener("ended", BB._endFn, !1)
        }
      };
      var kB = {},
        cB = function(BB) {
          var IB = BB._src;
          if (kB[IB]) return BB._duration = kB[IB].duration, void zB(BB);
          if (/^data:[^;]+;base64,/.test(IB)) {
            for (var ZB = atob(IB.split(",")[1]), TB = new Uint8Array(ZB.length), JB = 0; JB < ZB.length; ++JB) TB[JB] = ZB.charCodeAt(JB);
            hB(TB.buffer, BB)
          } else {
            var oB = new XMLHttpRequest;
            oB.open(BB._xhr.method, IB, !0), oB.withCredentials = BB._xhr.withCredentials, oB.responseType = "arraybuffer", BB._xhr.headers && Object.keys(BB._xhr.headers).forEach((function(IB) {
              oB.setRequestHeader(IB, BB._xhr.headers[IB])
            })), oB.onload = function() {
              var IB = (oB.status + "")[0];
              "0" === IB || "2" === IB || "3" === IB ? hB(oB.response, BB) : BB._emit("loaderror", null, "Failed loading audio file with status: " + oB.status + ".")
            }, oB.onerror = function() {
              BB._webAudio && (BB._html5 = !0, BB._webAudio = !1, BB._sounds = [], delete kB[IB], BB.load())
            }, nB(oB)
          }
        },
        nB = function(BB) {
          try {
            BB.send()
          } catch (IB) {
            BB.onerror()
          }
        },
        hB = function(BB, IB) {
          var ZB = function() {
              IB._emit("loaderror", null, "Decoding audio data failed.")
            },
            TB = function(BB) {
              BB && IB._sounds.length > 0 ? (kB[IB._src] = BB, zB(IB, BB)) : ZB()
            };
          "undefined" !== typeof Promise && 1 === oB.ctx.decodeAudioData.length ? oB.ctx.decodeAudioData(BB).then(TB).catch(ZB) : oB.ctx.decodeAudioData(BB, TB, ZB)
        },
        zB = function(BB, IB) {
          IB && !BB._duration && (BB._duration = IB.duration), 0 === Object.keys(BB._sprite).length && (BB._sprite = {
            __default: [0, 1e3 * BB._duration]
          }), "loaded" !== BB._state && (BB._state = "loaded", BB._emit("load"), BB._loadQueue())
        },
        FB = function() {
          if (oB.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? oB.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? oB.ctx = new webkitAudioContext : oB.usingWebAudio = !1
            } catch (JB) {
              oB.usingWebAudio = !1
            }
            oB.ctx || (oB.usingWebAudio = !1);
            var BB = /iP(hone|od|ad)/.test(oB._navigator && oB._navigator.platform),
              IB = oB._navigator && oB._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              ZB = IB ? parseInt(IB[1], 10) : null;
            if (BB && ZB && ZB < 9) {
              var TB = /safari/.test(oB._navigator && oB._navigator.userAgent.toLowerCase());
              oB._navigator && !TB && (oB.usingWebAudio = !1)
            }
            oB.usingWebAudio && (oB.masterGain = "undefined" === typeof oB.ctx.createGain ? oB.ctx.createGainNode() : oB.ctx.createGain(), oB.masterGain.gain.setValueAtTime(oB._muted ? 0 : oB._volume, oB.ctx.currentTime), oB.masterGain.connect(oB.ctx.destination)), oB._setup()
          }
        };
      void 0 === (TB = function() {
        return {
          Howler: oB,
          Howl: GB
        }
      }.apply(IB, [])) || (BB.exports = TB), IB.Howler = oB, IB.Howl = GB, "undefined" !== typeof ZB.g ? (ZB.g.HowlerGlobal = JB, ZB.g.Howler = oB, ZB.g.Howl = GB, ZB.g.Sound = vB) : "undefined" !== typeof window && (window.HowlerGlobal = JB, window.Howler = oB, window.Howl = GB, window.Sound = vB)
    }(),
    function() {
      var BB;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(BB) {
        var IB = this;
        if (!IB.ctx || !IB.ctx.listener) return IB;
        for (var ZB = IB._howls.length - 1; ZB >= 0; ZB--) IB._howls[ZB].stereo(BB);
        return IB
      }, HowlerGlobal.prototype.pos = function(BB, IB, ZB) {
        var TB = this;
        return TB.ctx && TB.ctx.listener ? (IB = "number" !== typeof IB ? TB._pos[1] : IB, ZB = "number" !== typeof ZB ? TB._pos[2] : ZB, "number" !== typeof BB ? TB._pos : (TB._pos = [BB, IB, ZB], "undefined" !== typeof TB.ctx.listener.positionX ? (TB.ctx.listener.positionX.setTargetAtTime(TB._pos[0], Howler.ctx.currentTime, .1), TB.ctx.listener.positionY.setTargetAtTime(TB._pos[1], Howler.ctx.currentTime, .1), TB.ctx.listener.positionZ.setTargetAtTime(TB._pos[2], Howler.ctx.currentTime, .1)) : TB.ctx.listener.setPosition(TB._pos[0], TB._pos[1], TB._pos[2]), TB)) : TB
      }, HowlerGlobal.prototype.orientation = function(BB, IB, ZB, TB, JB, oB) {
        var GB = this;
        if (!GB.ctx || !GB.ctx.listener) return GB;
        var vB = GB._orientation;
        return IB = "number" !== typeof IB ? vB[1] : IB, ZB = "number" !== typeof ZB ? vB[2] : ZB, TB = "number" !== typeof TB ? vB[3] : TB, JB = "number" !== typeof JB ? vB[4] : JB, oB = "number" !== typeof oB ? vB[5] : oB, "number" !== typeof BB ? vB : (GB._orientation = [BB, IB, ZB, TB, JB, oB], "undefined" !== typeof GB.ctx.listener.forwardX ? (GB.ctx.listener.forwardX.setTargetAtTime(BB, Howler.ctx.currentTime, .1), GB.ctx.listener.forwardY.setTargetAtTime(IB, Howler.ctx.currentTime, .1), GB.ctx.listener.forwardZ.setTargetAtTime(ZB, Howler.ctx.currentTime, .1), GB.ctx.listener.upX.setTargetAtTime(TB, Howler.ctx.currentTime, .1), GB.ctx.listener.upY.setTargetAtTime(JB, Howler.ctx.currentTime, .1), GB.ctx.listener.upZ.setTargetAtTime(oB, Howler.ctx.currentTime, .1)) : GB.ctx.listener.setOrientation(BB, IB, ZB, TB, JB, oB), GB)
      }, Howl.prototype.init = (BB = Howl.prototype.init, function(IB) {
        var ZB = this;
        return ZB._orientation = IB.orientation || [1, 0, 0], ZB._stereo = IB.stereo || null, ZB._pos = IB.pos || null, ZB._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof IB.coneInnerAngle ? IB.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof IB.coneOuterAngle ? IB.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof IB.coneOuterGain ? IB.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof IB.distanceModel ? IB.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof IB.maxDistance ? IB.maxDistance : 1e4,
          panningModel: "undefined" !== typeof IB.panningModel ? IB.panningModel : "HRTF",
          refDistance: "undefined" !== typeof IB.refDistance ? IB.refDistance : 1,
          rolloffFactor: "undefined" !== typeof IB.rolloffFactor ? IB.rolloffFactor : 1
        }, ZB._onstereo = IB.onstereo ? [{
          vN: IB.onstereo
        }] : [], ZB._onpos = IB.onpos ? [{
          vN: IB.onpos
        }] : [], ZB._onorientation = IB.onorientation ? [{
          vN: IB.onorientation
        }] : [], BB.call(this, IB)
      }), Howl.prototype.stereo = function(BB, ZB) {
        var TB = this;
        if (!TB._webAudio) return TB;
        if ("loaded" !== TB._state) return TB._queue.push({
          event: "stereo",
          action: function() {
            TB.stereo(BB, ZB)
          }
        }), TB;
        var JB = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof ZB) {
          if ("number" !== typeof BB) return TB._stereo;
          TB._stereo = BB, TB._pos = [BB, 0, 0]
        }
        for (var oB = TB._getSoundIds(ZB), GB = 0; GB < oB.length; GB++) {
          var vB = TB._soundById(oB[GB]);
          if (vB) {
            if ("number" !== typeof BB) return vB._stereo;
            vB._stereo = BB, vB._pos = [BB, 0, 0], vB._node && (vB._pannerAttr.panningModel = "equalpower", vB._panner && vB._panner.pan || IB(vB, JB), "spatial" === JB ? "undefined" !== typeof vB._panner.positionX ? (vB._panner.positionX.setValueAtTime(BB, Howler.ctx.currentTime), vB._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), vB._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : vB._panner.setPosition(BB, 0, 0) : vB._panner.pan.setValueAtTime(BB, Howler.ctx.currentTime)), TB._emit("stereo", vB._id)
          }
        }
        return TB
      }, Howl.prototype.pos = function(BB, ZB, TB, JB) {
        var oB = this;
        if (!oB._webAudio) return oB;
        if ("loaded" !== oB._state) return oB._queue.push({
          event: "pos",
          action: function() {
            oB.pos(BB, ZB, TB, JB)
          }
        }), oB;
        if (ZB = "number" !== typeof ZB ? 0 : ZB, TB = "number" !== typeof TB ? -.5 : TB, "undefined" === typeof JB) {
          if ("number" !== typeof BB) return oB._pos;
          oB._pos = [BB, ZB, TB]
        }
        for (var GB = oB._getSoundIds(JB), vB = 0; vB < GB.length; vB++) {
          var kB = oB._soundById(GB[vB]);
          if (kB) {
            if ("number" !== typeof BB) return kB._pos;
            kB._pos = [BB, ZB, TB], kB._node && (kB._panner && !kB._panner.pan || IB(kB, "spatial"), "undefined" !== typeof kB._panner.positionX ? (kB._panner.positionX.setValueAtTime(BB, Howler.ctx.currentTime), kB._panner.positionY.setValueAtTime(ZB, Howler.ctx.currentTime), kB._panner.positionZ.setValueAtTime(TB, Howler.ctx.currentTime)) : kB._panner.setPosition(BB, ZB, TB)), oB._emit("pos", kB._id)
          }
        }
        return oB
      }, Howl.prototype.orientation = function(BB, ZB, TB, JB) {
        var oB = this;
        if (!oB._webAudio) return oB;
        if ("loaded" !== oB._state) return oB._queue.push({
          event: "orientation",
          action: function() {
            oB.orientation(BB, ZB, TB, JB)
          }
        }), oB;
        if (ZB = "number" !== typeof ZB ? oB._orientation[1] : ZB, TB = "number" !== typeof TB ? oB._orientation[2] : TB, "undefined" === typeof JB) {
          if ("number" !== typeof BB) return oB._orientation;
          oB._orientation = [BB, ZB, TB]
        }
        for (var GB = oB._getSoundIds(JB), vB = 0; vB < GB.length; vB++) {
          var kB = oB._soundById(GB[vB]);
          if (kB) {
            if ("number" !== typeof BB) return kB._orientation;
            kB._orientation = [BB, ZB, TB], kB._node && (kB._panner || (kB._pos || (kB._pos = oB._pos || [0, 0, -.5]), IB(kB, "spatial")), "undefined" !== typeof kB._panner.orientationX ? (kB._panner.orientationX.setValueAtTime(BB, Howler.ctx.currentTime), kB._panner.orientationY.setValueAtTime(ZB, Howler.ctx.currentTime), kB._panner.orientationZ.setValueAtTime(TB, Howler.ctx.currentTime)) : kB._panner.setOrientation(BB, ZB, TB)), oB._emit("orientation", kB._id)
          }
        }
        return oB
      }, Howl.prototype.pannerAttr = function() {
        var BB, ZB, TB, JB = this,
          oB = arguments;
        if (!JB._webAudio) return JB;
        if (0 === oB.length) return JB._pannerAttr;
        if (1 === oB.length) {
          if ("object" !== typeof oB[0]) return (TB = JB._soundById(parseInt(oB[0], 10))) ? TB._pannerAttr : JB._pannerAttr;
          BB = oB[0], "undefined" === typeof ZB && (BB.pannerAttr || (BB.pannerAttr = {
            coneInnerAngle: BB.coneInnerAngle,
            coneOuterAngle: BB.coneOuterAngle,
            coneOuterGain: BB.coneOuterGain,
            distanceModel: BB.distanceModel,
            maxDistance: BB.maxDistance,
            refDistance: BB.refDistance,
            rolloffFactor: BB.rolloffFactor,
            panningModel: BB.panningModel
          }), JB._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof BB.pannerAttr.coneInnerAngle ? BB.pannerAttr.coneInnerAngle : JB._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof BB.pannerAttr.coneOuterAngle ? BB.pannerAttr.coneOuterAngle : JB._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof BB.pannerAttr.coneOuterGain ? BB.pannerAttr.coneOuterGain : JB._coneOuterGain,
            distanceModel: "undefined" !== typeof BB.pannerAttr.distanceModel ? BB.pannerAttr.distanceModel : JB._distanceModel,
            maxDistance: "undefined" !== typeof BB.pannerAttr.maxDistance ? BB.pannerAttr.maxDistance : JB._maxDistance,
            refDistance: "undefined" !== typeof BB.pannerAttr.refDistance ? BB.pannerAttr.refDistance : JB._refDistance,
            rolloffFactor: "undefined" !== typeof BB.pannerAttr.rolloffFactor ? BB.pannerAttr.rolloffFactor : JB._rolloffFactor,
            panningModel: "undefined" !== typeof BB.pannerAttr.panningModel ? BB.pannerAttr.panningModel : JB._panningModel
          })
        } else 2 === oB.length && (BB = oB[0], ZB = parseInt(oB[1], 10));
        for (var GB = JB._getSoundIds(ZB), vB = 0; vB < GB.length; vB++)
          if (TB = JB._soundById(GB[vB])) {
            var kB = TB._pannerAttr;
            kB = {
              coneInnerAngle: "undefined" !== typeof BB.coneInnerAngle ? BB.coneInnerAngle : kB.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof BB.coneOuterAngle ? BB.coneOuterAngle : kB.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof BB.coneOuterGain ? BB.coneOuterGain : kB.coneOuterGain,
              distanceModel: "undefined" !== typeof BB.distanceModel ? BB.distanceModel : kB.distanceModel,
              maxDistance: "undefined" !== typeof BB.maxDistance ? BB.maxDistance : kB.maxDistance,
              refDistance: "undefined" !== typeof BB.refDistance ? BB.refDistance : kB.refDistance,
              rolloffFactor: "undefined" !== typeof BB.rolloffFactor ? BB.rolloffFactor : kB.rolloffFactor,
              panningModel: "undefined" !== typeof BB.panningModel ? BB.panningModel : kB.panningModel
            };
            var cB = TB._panner;
            cB ? (cB.coneInnerAngle = kB.coneInnerAngle, cB.coneOuterAngle = kB.coneOuterAngle, cB.coneOuterGain = kB.coneOuterGain, cB.distanceModel = kB.distanceModel, cB.maxDistance = kB.maxDistance, cB.refDistance = kB.refDistance, cB.rolloffFactor = kB.rolloffFactor, cB.panningModel = kB.panningModel) : (TB._pos || (TB._pos = JB._pos || [0, 0, -.5]), IB(TB, "spatial"))
          } return JB
      }, Sound.prototype.init = function(BB) {
        return function() {
          var IB = this,
            ZB = IB._parent;
          IB._orientation = ZB._orientation, IB._stereo = ZB._stereo, IB._pos = ZB._pos, IB._pannerAttr = ZB._pannerAttr, BB.call(this), IB._stereo ? ZB.stereo(IB._stereo) : IB._pos && ZB.pos(IB._pos[0], IB._pos[1], IB._pos[2], IB._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(BB) {
        return function() {
          var IB = this,
            ZB = IB._parent;
          return IB._orientation = ZB._orientation, IB._stereo = ZB._stereo, IB._pos = ZB._pos, IB._pannerAttr = ZB._pannerAttr, IB._stereo ? ZB.stereo(IB._stereo) : IB._pos ? ZB.pos(IB._pos[0], IB._pos[1], IB._pos[2], IB._id) : IB._panner && (IB._panner.disconnect(0), IB._panner = void 0, ZB._refreshBuffer(IB)), BB.call(this)
        }
      }(Sound.prototype.reset);
      var IB = function(BB, IB) {
        "spatial" === (IB = IB || "spatial") ? (BB._panner = Howler.ctx.createPanner(), BB._panner.coneInnerAngle = BB._pannerAttr.coneInnerAngle, BB._panner.coneOuterAngle = BB._pannerAttr.coneOuterAngle, BB._panner.coneOuterGain = BB._pannerAttr.coneOuterGain, BB._panner.distanceModel = BB._pannerAttr.distanceModel, BB._panner.maxDistance = BB._pannerAttr.maxDistance, BB._panner.refDistance = BB._pannerAttr.refDistance, BB._panner.rolloffFactor = BB._pannerAttr.rolloffFactor, BB._panner.panningModel = BB._pannerAttr.panningModel, "undefined" !== typeof BB._panner.positionX ? (BB._panner.positionX.setValueAtTime(BB._pos[0], Howler.ctx.currentTime), BB._panner.positionY.setValueAtTime(BB._pos[1], Howler.ctx.currentTime), BB._panner.positionZ.setValueAtTime(BB._pos[2], Howler.ctx.currentTime)) : BB._panner.setPosition(BB._pos[0], BB._pos[1], BB._pos[2]), "undefined" !== typeof BB._panner.orientationX ? (BB._panner.orientationX.setValueAtTime(BB._orientation[0], Howler.ctx.currentTime), BB._panner.orientationY.setValueAtTime(BB._orientation[1], Howler.ctx.currentTime), BB._panner.orientationZ.setValueAtTime(BB._orientation[2], Howler.ctx.currentTime)) : BB._panner.setOrientation(BB._orientation[0], BB._orientation[1], BB._orientation[2])) : (BB._panner = Howler.ctx.createStereoPanner(), BB._panner.pan.setValueAtTime(BB._stereo, Howler.ctx.currentTime)), BB._panner.connect(BB._node), BB.iW || BB._parent.pause(BB._id, !0).play(BB._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);