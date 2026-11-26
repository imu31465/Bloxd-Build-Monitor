/*! For license information please see gw4e3a.111.fad37b54.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5362: (BB, OB, GB) => {
    var YB;
    ! function() {
      var DB = function() {
        this.init()
      };
      DB.prototype = {
        init: function() {
          var BB = this || QB;
          return BB._counter = 1e3, BB._html5AudioPool = [], BB.html5PoolSize = 10, BB._codecs = {}, BB._howls = [], BB._muted = !1, BB._volume = 1, BB._canPlayEvent = "canplaythrough", BB._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, BB.masterGain = null, BB.noAudio = !1, BB.usingWebAudio = !0, BB.autoSuspend = !0, BB.ctx = null, BB.autoUnlock = !0, BB._setup(), BB
        },
        volume: function(BB) {
          var OB = this || QB;
          if (BB = parseFloat(BB), OB.ctx || lB(), "undefined" !== typeof BB && BB >= 0 && BB <= 1) {
            if (OB._volume = BB, OB._muted) return OB;
            OB.usingWebAudio && OB.masterGain.gain.setValueAtTime(BB, QB.ctx.currentTime);
            for (var GB = 0; GB < OB._howls.length; GB++)
              if (!OB._howls[GB]._webAudio)
                for (var YB = OB._howls[GB]._getSoundIds(), DB = 0; DB < YB.length; DB++) {
                  var oB = OB._howls[GB]._soundById(YB[DB]);
                  oB && oB._node && (oB._node.volume = oB._volume * BB)
                }
            return OB
          }
          return OB._volume
        },
        mute: function(BB) {
          var OB = this || QB;
          OB.ctx || lB(), OB._muted = BB, OB.usingWebAudio && OB.masterGain.gain.setValueAtTime(BB ? 0 : OB._volume, QB.ctx.currentTime);
          for (var GB = 0; GB < OB._howls.length; GB++)
            if (!OB._howls[GB]._webAudio)
              for (var YB = OB._howls[GB]._getSoundIds(), DB = 0; DB < YB.length; DB++) {
                var oB = OB._howls[GB]._soundById(YB[DB]);
                oB && oB._node && (oB._node.muted = !!BB || oB._muted)
              }
          return OB
        },
        stop: function() {
          for (var BB = this || QB, OB = 0; OB < BB._howls.length; OB++) BB._howls[OB].stop();
          return BB
        },
        unload: function() {
          for (var BB = this || QB, OB = BB._howls.length - 1; OB >= 0; OB--) BB._howls[OB].unload();
          return BB.usingWebAudio && BB.ctx && "undefined" !== typeof BB.ctx.close && (BB.ctx.close(), BB.ctx = null, lB()), BB
        },
        codecs: function(BB) {
          return (this || QB)._codecs[BB.replace(/^x-/, "")]
        },
        _setup: function() {
          var BB = this || QB;
          if (BB.state = BB.ctx && BB.ctx.state || "suspended", BB._autoSuspend(), !BB.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (BB._canPlayEvent = "canplay")
            } catch (OB) {
              BB.noAudio = !0
            } else BB.noAudio = !0;
          try {
            (new Audio).muted && (BB.noAudio = !0)
          } catch (OB) {}
          return BB.noAudio || BB._setupCodecs(), BB
        },
        _setupCodecs: function() {
          var BB = this || QB,
            OB = null;
          try {
            OB = "undefined" !== typeof Audio ? new Audio : null
          } catch (MB) {
            return BB
          }
          if (!OB || "function" !== typeof OB.canPlayType) return BB;
          var GB = OB.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            YB = BB._navigator ? BB._navigator.userAgent : "",
            DB = YB.match(/OPR\/([0-6].)/g),
            oB = DB && parseInt(DB[0].split("/")[1], 10) < 33,
            jB = -1 !== YB.indexOf("Safari") && -1 === YB.indexOf("Chrome"),
            yB = YB.match(/Version\/(.*?) /),
            JB = jB && yB && parseInt(yB[1], 10) < 15;
          return BB._codecs = {
            mp3: !(oB || !GB && !OB.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!GB,
            opus: !!OB.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!OB.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!OB.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(OB.canPlayType('audio/wav; codecs="1"') || OB.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!OB.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!OB.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(OB.canPlayType("audio/x-m4a;") || OB.canPlayType("audio/m4a;") || OB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(OB.canPlayType("audio/x-m4b;") || OB.canPlayType("audio/m4b;") || OB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(OB.canPlayType("audio/x-mp4;") || OB.canPlayType("audio/mp4;") || OB.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(JB || !OB.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(JB || !OB.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!OB.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(OB.canPlayType("audio/x-flac;") || OB.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, BB
        },
        _unlockAudio: function() {
          var BB = this || QB;
          if (!BB._audioUnlocked && BB.ctx) {
            BB._audioUnlocked = !1, BB.autoUnlock = !1, BB._mobileUnloaded || 44100 === BB.ctx.sampleRate || (BB._mobileUnloaded = !0, BB.unload()), BB._scratchBuffer = BB.ctx.createBuffer(1, 1, 22050);
            var OB = function(GB) {
              for (; BB._html5AudioPool.length < BB.html5PoolSize;) try {
                var YB = new Audio;
                YB._unlocked = !0, BB._releaseHtml5Audio(YB)
              } catch (GB) {
                BB.noAudio = !0;
                break
              }
              for (var DB = 0; DB < BB._howls.length; DB++)
                if (!BB._howls[DB]._webAudio)
                  for (var QB = BB._howls[DB]._getSoundIds(), oB = 0; oB < QB.length; oB++) {
                    var jB = BB._howls[DB]._soundById(QB[oB]);
                    jB && jB._node && !jB._node._unlocked && (jB._node._unlocked = !0, jB._node.load())
                  }
              BB._autoResume();
              var yB = BB.ctx.createBufferSource();
              yB.buffer = BB._scratchBuffer, yB.connect(BB.ctx.destination), "undefined" === typeof yB.start ? yB.noteOn(0) : yB.start(0), "function" === typeof BB.ctx.resume && BB.ctx.resume(), yB.onended = function() {
                yB.disconnect(0), BB._audioUnlocked = !0, document.removeEventListener("touchstart", OB, !0), document.removeEventListener("touchend", OB, !0), document.removeEventListener("click", OB, !0), document.removeEventListener("keydown", OB, !0);
                for (var GB = 0; GB < BB._howls.length; GB++) BB._howls[GB]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", OB, !0), document.addEventListener("touchend", OB, !0), document.addEventListener("click", OB, !0), document.addEventListener("keydown", OB, !0), BB
          }
        },
        _obtainHtml5Audio: function() {
          var BB = this || QB;
          if (BB._html5AudioPool.length) return BB._html5AudioPool.pop();
          var OB = (new Audio).play();
          return OB && "undefined" !== typeof Promise && (OB instanceof Promise || "function" === typeof OB.then) && OB.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(BB) {
          var OB = this || QB;
          return BB._unlocked && OB._html5AudioPool.push(BB), OB
        },
        _autoSuspend: function() {
          var BB = this;
          if (BB.autoSuspend && BB.ctx && "undefined" !== typeof BB.ctx.suspend && QB.usingWebAudio) {
            for (var OB = 0; OB < BB._howls.length; OB++)
              if (BB._howls[OB]._webAudio)
                for (var GB = 0; GB < BB._howls[OB]._sounds.length; GB++)
                  if (!BB._howls[OB]._sounds[GB].fP) return BB;
            return BB._suspendTimer && clearTimeout(BB._suspendTimer), BB._suspendTimer = setTimeout((function() {
              if (BB.autoSuspend) {
                BB._suspendTimer = null, BB.state = "suspending";
                var OB = function() {
                  BB.state = "suspended", BB._resumeAfterSuspend && (delete BB._resumeAfterSuspend, BB._autoResume())
                };
                BB.ctx.suspend().then(OB, OB)
              }
            }), 3e4), BB
          }
        },
        _autoResume: function() {
          var BB = this;
          if (BB.ctx && "undefined" !== typeof BB.ctx.resume && QB.usingWebAudio) return "running" === BB.state && "interrupted" !== BB.ctx.state && BB._suspendTimer ? (clearTimeout(BB._suspendTimer), BB._suspendTimer = null) : "suspended" === BB.state || "running" === BB.state && "interrupted" === BB.ctx.state ? (BB.ctx.resume().then((function() {
            BB.state = "running";
            for (var OB = 0; OB < BB._howls.length; OB++) BB._howls[OB]._emit("resume")
          })), BB._suspendTimer && (clearTimeout(BB._suspendTimer), BB._suspendTimer = null)) : "suspending" === BB.state && (BB._resumeAfterSuspend = !0), BB
        }
      };
      var QB = new DB,
        oB = function(BB) {
          BB.src && 0 !== BB.src.length ? this.init(BB) : console.error("An array of source files must be passed with any new Howl.")
        };
      oB.prototype = {
        init: function(BB) {
          var OB = this;
          return QB.ctx || lB(), OB._autoplay = BB.autoplay || !1, OB._format = "string" !== typeof BB.format ? BB.format : [BB.format], OB._html5 = BB.html5 || !1, OB._muted = BB.mute || !1, OB._loop = BB.loop || !1, OB._pool = BB.pool || 5, OB._preload = "boolean" !== typeof BB.preload && "metadata" !== BB.preload || BB.preload, OB._rate = BB.rate || 1, OB._sprite = BB.sprite || {}, OB._src = "string" !== typeof BB.src ? BB.src : [BB.src], OB._volume = void 0 !== BB.volume ? BB.volume : 1, OB._xhr = {
            method: BB.xhr && BB.xhr.method ? BB.xhr.method : "GET",
            headers: BB.xhr && BB.xhr.headers ? BB.xhr.headers : null,
            withCredentials: !(!BB.xhr || !BB.xhr.withCredentials) && BB.xhr.withCredentials
          }, OB._duration = 0, OB._state = "unloaded", OB._sounds = [], OB._endTimers = {}, OB._queue = [], OB._playLock = !1, OB._onend = BB.onend ? [{
            oP: BB.onend
          }] : [], OB._onfade = BB.onfade ? [{
            oP: BB.onfade
          }] : [], OB._onload = BB.onload ? [{
            oP: BB.onload
          }] : [], OB._onloaderror = BB.onloaderror ? [{
            oP: BB.onloaderror
          }] : [], OB._onplayerror = BB.onplayerror ? [{
            oP: BB.onplayerror
          }] : [], OB._onpause = BB.onpause ? [{
            oP: BB.onpause
          }] : [], OB._onplay = BB.onplay ? [{
            oP: BB.onplay
          }] : [], OB._onstop = BB.onstop ? [{
            oP: BB.onstop
          }] : [], OB._onmute = BB.onmute ? [{
            oP: BB.onmute
          }] : [], OB._onvolume = BB.onvolume ? [{
            oP: BB.onvolume
          }] : [], OB._onrate = BB.onrate ? [{
            oP: BB.onrate
          }] : [], OB._onseek = BB.onseek ? [{
            oP: BB.onseek
          }] : [], OB._onunlock = BB.onunlock ? [{
            oP: BB.onunlock
          }] : [], OB._onresume = [], OB._webAudio = QB.usingWebAudio && !OB._html5, "undefined" !== typeof QB.ctx && QB.ctx && QB.autoUnlock && QB._unlockAudio(), QB._howls.push(OB), OB._autoplay && OB._queue.push({
            event: "play",
            action: function() {
              OB.play()
            }
          }), OB._preload && "none" !== OB._preload && OB.load(), OB
        },
        load: function() {
          var BB = this,
            OB = null;
          if (QB.noAudio) BB._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof BB._src && (BB._src = [BB._src]);
            for (var GB = 0; GB < BB._src.length; GB++) {
              var YB, DB;
              if (BB._format && BB._format[GB]) YB = BB._format[GB];
              else {
                if ("string" !== typeof(DB = BB._src[GB])) {
                  BB._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(YB = /^data:audio\/([^;,]+);/i.exec(DB)) || (YB = /\.([^.]+)$/.exec(DB.split("?", 1)[0])), YB && (YB = YB[1].toLowerCase())
              }
              if (YB || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), YB && QB.codecs(YB)) {
                OB = BB._src[GB];
                break
              }
            }
            if (OB) return BB._src = OB, BB._state = "loading", "https:" === window.location.protocol && "http:" === OB.slice(0, 5) && (BB._html5 = !0, BB._webAudio = !1), new jB(BB), BB._webAudio && JB(BB), BB;
            BB._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(BB, OB) {
          var GB = this,
            YB = null;
          if ("number" === typeof BB) YB = BB, BB = null;
          else {
            if ("string" === typeof BB && "loaded" === GB._state && !GB._sprite[BB]) return null;
            if ("undefined" === typeof BB && (BB = "__default", !GB._playLock)) {
              for (var DB = 0, oB = 0; oB < GB._sounds.length; oB++) GB._sounds[oB].fP && !GB._sounds[oB]._ended && (DB++, YB = GB._sounds[oB]._id);
              1 === DB ? BB = null : YB = null
            }
          }
          var jB = YB ? GB._soundById(YB) : GB._inactiveSound();
          if (!jB) return null;
          if (YB && !BB && (BB = jB._sprite || "__default"), "loaded" !== GB._state) {
            jB._sprite = BB, jB._ended = !1;
            var yB = jB._id;
            return GB._queue.push({
              event: "play",
              action: function() {
                GB.play(yB)
              }
            }), yB
          }
          if (YB && !jB.fP) return OB || GB._loadQueue("play"), jB._id;
          GB._webAudio && QB._autoResume();
          var JB = Math.max(0, jB._seek > 0 ? jB._seek : GB._sprite[BB][0] / 1e3),
            MB = Math.max(0, (GB._sprite[BB][0] + GB._sprite[BB][1]) / 1e3 - JB),
            PB = 1e3 * MB / Math.abs(jB._rate),
            zB = GB._sprite[BB][0] / 1e3,
            lB = (GB._sprite[BB][0] + GB._sprite[BB][1]) / 1e3;
          jB._sprite = BB, jB._ended = !1;
          var pB = function() {
            jB.fP = !1, jB._seek = JB, jB._start = zB, jB._stop = lB, jB._loop = !(!jB._loop && !GB._sprite[BB][2])
          };
          if (!(JB >= lB)) {
            var qB = jB._node;
            if (GB._webAudio) {
              var ZB = function() {
                GB._playLock = !1, pB(), GB._refreshBuffer(jB);
                var BB = jB._muted || GB._muted ? 0 : jB._volume;
                qB.gain.setValueAtTime(BB, QB.ctx.currentTime), jB._playStart = QB.ctx.currentTime, "undefined" === typeof qB.bufferSource.start ? jB._loop ? qB.bufferSource.noteGrainOn(0, JB, 86400) : qB.bufferSource.noteGrainOn(0, JB, MB) : jB._loop ? qB.bufferSource.start(0, JB, 86400) : qB.bufferSource.start(0, JB, MB), PB !== 1 / 0 && (GB._endTimers[jB._id] = setTimeout(GB._ended.bind(GB, jB), PB)), OB || setTimeout((function() {
                  GB._emit("play", jB._id), GB._loadQueue()
                }), 0)
              };
              "running" === QB.state && "interrupted" !== QB.ctx.state ? ZB() : (GB._playLock = !0, GB.once("resume", ZB), GB._clearTimer(jB._id))
            } else {
              var NB = function() {
                qB.currentTime = JB, qB.muted = jB._muted || GB._muted || QB._muted || qB.muted, qB.volume = jB._volume * QB.volume(), qB.playbackRate = jB._rate;
                try {
                  var YB = qB.play();
                  if (YB && "undefined" !== typeof Promise && (YB instanceof Promise || "function" === typeof YB.then) ? (GB._playLock = !0, pB(), YB.then((function() {
                      GB._playLock = !1, qB._unlocked = !0, OB ? GB._loadQueue() : GB._emit("play", jB._id)
                    })).catch((function() {
                      GB._playLock = !1, GB._emit("playerror", jB._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), jB._ended = !0, jB.fP = !0
                    }))) : OB || (GB._playLock = !1, pB(), GB._emit("play", jB._id)), qB.playbackRate = jB._rate, qB.paused) return void GB._emit("playerror", jB._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== BB || jB._loop ? GB._endTimers[jB._id] = setTimeout(GB._ended.bind(GB, jB), PB) : (GB._endTimers[jB._id] = function() {
                    GB._ended(jB), qB.removeEventListener("ended", GB._endTimers[jB._id], !1)
                  }, qB.addEventListener("ended", GB._endTimers[jB._id], !1))
                } catch (DB) {
                  GB._emit("playerror", jB._id, DB)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === qB.src && (qB.src = GB._src, qB.load());
              var RB = window && window.ejecta || !qB.readyState && QB._navigator.isCocoonJS;
              if (qB.readyState >= 3 || RB) NB();
              else {
                GB._playLock = !0, GB._state = "loading";
                var WB = function() {
                  GB._state = "loaded", NB(), qB.removeEventListener(QB._canPlayEvent, WB, !1)
                };
                qB.addEventListener(QB._canPlayEvent, WB, !1), GB._clearTimer(jB._id)
              }
            }
            return jB._id
          }
          GB._ended(jB)
        },
        pause: function(BB) {
          var OB = this;
          if ("loaded" !== OB._state || OB._playLock) return OB._queue.push({
            event: "pause",
            action: function() {
              OB.pause(BB)
            }
          }), OB;
          for (var GB = OB._getSoundIds(BB), YB = 0; YB < GB.length; YB++) {
            OB._clearTimer(GB[YB]);
            var DB = OB._soundById(GB[YB]);
            if (DB && !DB.fP && (DB._seek = OB.seek(GB[YB]), DB._rateSeek = 0, DB.fP = !0, OB._stopFade(GB[YB]), DB._node))
              if (OB._webAudio) {
                if (!DB._node.bufferSource) continue;
                "undefined" === typeof DB._node.bufferSource.stop ? DB._node.bufferSource.noteOff(0) : DB._node.bufferSource.stop(0), OB._cleanBuffer(DB._node)
              } else isNaN(DB._node.duration) && DB._node.duration !== 1 / 0 || DB._node.pause();
            arguments[1] || OB._emit("pause", DB ? DB._id : null)
          }
          return OB
        },
        stop: function(BB, OB) {
          var GB = this;
          if ("loaded" !== GB._state || GB._playLock) return GB._queue.push({
            event: "stop",
            action: function() {
              GB.stop(BB)
            }
          }), GB;
          for (var YB = GB._getSoundIds(BB), DB = 0; DB < YB.length; DB++) {
            GB._clearTimer(YB[DB]);
            var QB = GB._soundById(YB[DB]);
            QB && (QB._seek = QB._start || 0, QB._rateSeek = 0, QB.fP = !0, QB._ended = !0, GB._stopFade(YB[DB]), QB._node && (GB._webAudio ? QB._node.bufferSource && ("undefined" === typeof QB._node.bufferSource.stop ? QB._node.bufferSource.noteOff(0) : QB._node.bufferSource.stop(0), GB._cleanBuffer(QB._node)) : isNaN(QB._node.duration) && QB._node.duration !== 1 / 0 || (QB._node.currentTime = QB._start || 0, QB._node.pause(), QB._node.duration === 1 / 0 && GB._clearSound(QB._node))), OB || GB._emit("stop", QB._id))
          }
          return GB
        },
        mute: function(BB, OB) {
          var GB = this;
          if ("loaded" !== GB._state || GB._playLock) return GB._queue.push({
            event: "mute",
            action: function() {
              GB.mute(BB, OB)
            }
          }), GB;
          if ("undefined" === typeof OB) {
            if ("boolean" !== typeof BB) return GB._muted;
            GB._muted = BB
          }
          for (var YB = GB._getSoundIds(OB), DB = 0; DB < YB.length; DB++) {
            var oB = GB._soundById(YB[DB]);
            oB && (oB._muted = BB, oB._interval && GB._stopFade(oB._id), GB._webAudio && oB._node ? oB._node.gain.setValueAtTime(BB ? 0 : oB._volume, QB.ctx.currentTime) : oB._node && (oB._node.muted = !!QB._muted || BB), GB._emit("mute", oB._id))
          }
          return GB
        },
        volume: function() {
          var BB, OB, GB, YB = this,
            DB = arguments;
          if (0 === DB.length) return YB._volume;
          if (1 === DB.length || 2 === DB.length && "undefined" === typeof DB[1] ? YB._getSoundIds().indexOf(DB[0]) >= 0 ? OB = parseInt(DB[0], 10) : BB = parseFloat(DB[0]) : DB.length >= 2 && (BB = parseFloat(DB[0]), OB = parseInt(DB[1], 10)), !("undefined" !== typeof BB && BB >= 0 && BB <= 1)) return (GB = OB ? YB._soundById(OB) : YB._sounds[0]) ? GB._volume : 0;
          if ("loaded" !== YB._state || YB._playLock) return YB._queue.push({
            event: "volume",
            action: function() {
              YB.volume.apply(YB, DB)
            }
          }), YB;
          "undefined" === typeof OB && (YB._volume = BB), OB = YB._getSoundIds(OB);
          for (var oB = 0; oB < OB.length; oB++)(GB = YB._soundById(OB[oB])) && (GB._volume = BB, DB[2] || YB._stopFade(OB[oB]), YB._webAudio && GB._node && !GB._muted ? GB._node.gain.setValueAtTime(BB, QB.ctx.currentTime) : GB._node && !GB._muted && (GB._node.volume = BB * QB.volume()), YB._emit("volume", GB._id));
          return YB
        },
        fade: function(BB, OB, GB, YB) {
          var DB = this;
          if ("loaded" !== DB._state || DB._playLock) return DB._queue.push({
            event: "fade",
            action: function() {
              DB.fade(BB, OB, GB, YB)
            }
          }), DB;
          BB = Math.min(Math.max(0, parseFloat(BB)), 1), OB = Math.min(Math.max(0, parseFloat(OB)), 1), GB = parseFloat(GB), DB.volume(BB, YB);
          for (var oB = DB._getSoundIds(YB), jB = 0; jB < oB.length; jB++) {
            var yB = DB._soundById(oB[jB]);
            if (yB) {
              if (YB || DB._stopFade(oB[jB]), DB._webAudio && !yB._muted) {
                var JB = QB.ctx.currentTime,
                  MB = JB + GB / 1e3;
                yB._volume = BB, yB._node.gain.setValueAtTime(BB, JB), yB._node.gain.linearRampToValueAtTime(OB, MB)
              }
              DB._startFadeInterval(yB, BB, OB, GB, oB[jB], "undefined" === typeof YB)
            }
          }
          return DB
        },
        _startFadeInterval: function(BB, OB, GB, YB, DB, QB) {
          var oB = this,
            jB = OB,
            yB = GB - OB,
            JB = Math.abs(yB / .01),
            MB = Math.max(4, JB > 0 ? YB / JB : YB),
            PB = Date.now();
          BB._fadeTo = GB, BB._interval = setInterval((function() {
            var DB = (Date.now() - PB) / YB;
            PB = Date.now(), jB += yB * DB, jB = Math.round(100 * jB) / 100, jB = yB < 0 ? Math.max(GB, jB) : Math.min(GB, jB), oB._webAudio ? BB._volume = jB : oB.volume(jB, BB._id, !0), QB && (oB._volume = jB), (GB < OB && jB <= GB || GB > OB && jB >= GB) && (clearInterval(BB._interval), BB._interval = null, BB._fadeTo = null, oB.volume(GB, BB._id), oB._emit("fade", BB._id))
          }), MB)
        },
        _stopFade: function(BB) {
          var OB = this,
            GB = OB._soundById(BB);
          return GB && GB._interval && (OB._webAudio && GB._node.gain.cancelScheduledValues(QB.ctx.currentTime), clearInterval(GB._interval), GB._interval = null, OB.volume(GB._fadeTo, BB), GB._fadeTo = null, OB._emit("fade", BB)), OB
        },
        loop: function() {
          var BB, OB, GB, YB = this,
            DB = arguments;
          if (0 === DB.length) return YB._loop;
          if (1 === DB.length) {
            if ("boolean" !== typeof DB[0]) return !!(GB = YB._soundById(parseInt(DB[0], 10))) && GB._loop;
            BB = DB[0], YB._loop = BB
          } else 2 === DB.length && (BB = DB[0], OB = parseInt(DB[1], 10));
          for (var QB = YB._getSoundIds(OB), oB = 0; oB < QB.length; oB++)(GB = YB._soundById(QB[oB])) && (GB._loop = BB, YB._webAudio && GB._node && GB._node.bufferSource && (GB._node.bufferSource.loop = BB, BB && (GB._node.bufferSource.loopStart = GB._start || 0, GB._node.bufferSource.loopEnd = GB._stop, YB.playing(QB[oB]) && (YB.pause(QB[oB], !0), YB.play(QB[oB], !0)))));
          return YB
        },
        rate: function() {
          var BB, OB, GB, YB = this,
            DB = arguments;
          if (0 === DB.length) OB = YB._sounds[0]._id;
          else if (1 === DB.length) {
            YB._getSoundIds().indexOf(DB[0]) >= 0 ? OB = parseInt(DB[0], 10) : BB = parseFloat(DB[0])
          } else 2 === DB.length && (BB = parseFloat(DB[0]), OB = parseInt(DB[1], 10));
          if ("number" !== typeof BB) return (GB = YB._soundById(OB)) ? GB._rate : YB._rate;
          if ("loaded" !== YB._state || YB._playLock) return YB._queue.push({
            event: "rate",
            action: function() {
              YB.rate.apply(YB, DB)
            }
          }), YB;
          "undefined" === typeof OB && (YB._rate = BB), OB = YB._getSoundIds(OB);
          for (var oB = 0; oB < OB.length; oB++)
            if (GB = YB._soundById(OB[oB])) {
              YB.playing(OB[oB]) && (GB._rateSeek = YB.seek(OB[oB]), GB._playStart = YB._webAudio ? QB.ctx.currentTime : GB._playStart), GB._rate = BB, YB._webAudio && GB._node && GB._node.bufferSource ? GB._node.bufferSource.playbackRate.setValueAtTime(BB, QB.ctx.currentTime) : GB._node && (GB._node.playbackRate = BB);
              var jB = YB.seek(OB[oB]),
                yB = 1e3 * ((YB._sprite[GB._sprite][0] + YB._sprite[GB._sprite][1]) / 1e3 - jB) / Math.abs(GB._rate);
              !YB._endTimers[OB[oB]] && GB.fP || (YB._clearTimer(OB[oB]), YB._endTimers[OB[oB]] = setTimeout(YB._ended.bind(YB, GB), yB)), YB._emit("rate", GB._id)
            } return YB
        },
        seek: function() {
          var BB, OB, GB = this,
            YB = arguments;
          if (0 === YB.length) GB._sounds.length && (OB = GB._sounds[0]._id);
          else if (1 === YB.length) {
            GB._getSoundIds().indexOf(YB[0]) >= 0 ? OB = parseInt(YB[0], 10) : GB._sounds.length && (OB = GB._sounds[0]._id, BB = parseFloat(YB[0]))
          } else 2 === YB.length && (BB = parseFloat(YB[0]), OB = parseInt(YB[1], 10));
          if ("undefined" === typeof OB) return 0;
          if ("number" === typeof BB && ("loaded" !== GB._state || GB._playLock)) return GB._queue.push({
            event: "seek",
            action: function() {
              GB.seek.apply(GB, YB)
            }
          }), GB;
          var DB = GB._soundById(OB);
          if (DB) {
            if (!("number" === typeof BB && BB >= 0)) {
              if (GB._webAudio) {
                var oB = GB.playing(OB) ? QB.ctx.currentTime - DB._playStart : 0,
                  jB = DB._rateSeek ? DB._rateSeek - DB._seek : 0;
                return DB._seek + (jB + oB * Math.abs(DB._rate))
              }
              return DB._node.currentTime
            }
            var yB = GB.playing(OB);
            yB && GB.pause(OB, !0), DB._seek = BB, DB._ended = !1, GB._clearTimer(OB), GB._webAudio || !DB._node || isNaN(DB._node.duration) || (DB._node.currentTime = BB);
            var JB = function() {
              yB && GB.play(OB, !0), GB._emit("seek", OB)
            };
            if (yB && !GB._webAudio) {
              var MB = function() {
                GB._playLock ? setTimeout(MB, 0) : JB()
              };
              setTimeout(MB, 0)
            } else JB()
          }
          return GB
        },
        playing: function(BB) {
          var OB = this;
          if ("number" === typeof BB) {
            var GB = OB._soundById(BB);
            return !!GB && !GB.fP
          }
          for (var YB = 0; YB < OB._sounds.length; YB++)
            if (!OB._sounds[YB].fP) return !0;
          return !1
        },
        duration: function(BB) {
          var OB = this,
            GB = OB._duration,
            YB = OB._soundById(BB);
          return YB && (GB = OB._sprite[YB._sprite][1] / 1e3), GB
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var BB = this, OB = BB._sounds, GB = 0; GB < OB.length; GB++) OB[GB].fP || BB.stop(OB[GB]._id), BB._webAudio || (BB._clearSound(OB[GB]._node), OB[GB]._node.removeEventListener("error", OB[GB]._errorFn, !1), OB[GB]._node.removeEventListener(QB._canPlayEvent, OB[GB]._loadFn, !1), OB[GB]._node.removeEventListener("ended", OB[GB]._endFn, !1), QB._releaseHtml5Audio(OB[GB]._node)), delete OB[GB]._node, BB._clearTimer(OB[GB]._id);
          var YB = QB._howls.indexOf(BB);
          YB >= 0 && QB._howls.splice(YB, 1);
          var DB = !0;
          for (GB = 0; GB < QB._howls.length; GB++)
            if (QB._howls[GB]._src === BB._src || BB._src.indexOf(QB._howls[GB]._src) >= 0) {
              DB = !1;
              break
            } return yB && DB && delete yB[BB._src], QB.noAudio = !1, BB._state = "unloaded", BB._sounds = [], BB = null, null
        },
        on: function(BB, OB, GB, YB) {
          var DB = this["_on" + BB];
          return "function" === typeof OB && DB.push(YB ? {
            id: GB,
            oP: OB,
            once: YB
          } : {
            id: GB,
            oP: OB
          }), this
        },
        off: function(BB, OB, GB) {
          var YB = this,
            DB = YB["_on" + BB],
            QB = 0;
          if ("number" === typeof OB && (GB = OB, OB = null), OB || GB)
            for (QB = 0; QB < DB.length; QB++) {
              var oB = GB === DB[QB].id;
              if (OB === DB[QB].oP && oB || !OB && oB) {
                DB.splice(QB, 1);
                break
              }
            } else if (BB) YB["_on" + BB] = [];
            else {
              var jB = Object.keys(YB);
              for (QB = 0; QB < jB.length; QB++) 0 === jB[QB].indexOf("_on") && Array.isArray(YB[jB[QB]]) && (YB[jB[QB]] = [])
            } return YB
        },
        once: function(BB, OB, GB) {
          return this.on(BB, OB, GB, 1), this
        },
        _emit: function(BB, OB, GB) {
          for (var YB = this, DB = YB["_on" + BB], QB = DB.length - 1; QB >= 0; QB--) DB[QB].id && DB[QB].id !== OB && "load" !== BB || (setTimeout(function(BB) {
            BB.call(this, OB, GB)
          }.bind(YB, DB[QB].oP), 0), DB[QB].once && YB.off(BB, DB[QB].oP, DB[QB].id));
          return YB._loadQueue(BB), YB
        },
        _loadQueue: function(BB) {
          var OB = this;
          if (OB._queue.length > 0) {
            var GB = OB._queue[0];
            GB.event === BB && (OB._queue.shift(), OB._loadQueue()), BB || GB.action()
          }
          return OB
        },
        _ended: function(BB) {
          var OB = this,
            GB = BB._sprite;
          if (!OB._webAudio && BB._node && !BB._node.paused && !BB._node.ended && BB._node.currentTime < BB._stop) return setTimeout(OB._ended.bind(OB, BB), 100), OB;
          var YB = !(!BB._loop && !OB._sprite[GB][2]);
          if (OB._emit("end", BB._id), !OB._webAudio && YB && OB.stop(BB._id, !0).play(BB._id), OB._webAudio && YB) {
            OB._emit("play", BB._id), BB._seek = BB._start || 0, BB._rateSeek = 0, BB._playStart = QB.ctx.currentTime;
            var DB = 1e3 * (BB._stop - BB._start) / Math.abs(BB._rate);
            OB._endTimers[BB._id] = setTimeout(OB._ended.bind(OB, BB), DB)
          }
          return OB._webAudio && !YB && (BB.fP = !0, BB._ended = !0, BB._seek = BB._start || 0, BB._rateSeek = 0, OB._clearTimer(BB._id), OB._cleanBuffer(BB._node), QB._autoSuspend()), OB._webAudio || YB || OB.stop(BB._id, !0), OB
        },
        _clearTimer: function(BB) {
          var OB = this;
          if (OB._endTimers[BB]) {
            if ("function" !== typeof OB._endTimers[BB]) clearTimeout(OB._endTimers[BB]);
            else {
              var GB = OB._soundById(BB);
              GB && GB._node && GB._node.removeEventListener("ended", OB._endTimers[BB], !1)
            }
            delete OB._endTimers[BB]
          }
          return OB
        },
        _soundById: function(BB) {
          for (var OB = this, GB = 0; GB < OB._sounds.length; GB++)
            if (BB === OB._sounds[GB]._id) return OB._sounds[GB];
          return null
        },
        _inactiveSound: function() {
          var BB = this;
          BB._drain();
          for (var OB = 0; OB < BB._sounds.length; OB++)
            if (BB._sounds[OB]._ended) return BB._sounds[OB].reset();
          return new jB(BB)
        },
        _drain: function() {
          var BB = this,
            OB = BB._pool,
            GB = 0,
            YB = 0;
          if (!(BB._sounds.length < OB)) {
            for (YB = 0; YB < BB._sounds.length; YB++) BB._sounds[YB]._ended && GB++;
            for (YB = BB._sounds.length - 1; YB >= 0; YB--) {
              if (GB <= OB) return;
              BB._sounds[YB]._ended && (BB._webAudio && BB._sounds[YB]._node && BB._sounds[YB]._node.disconnect(0), BB._sounds.splice(YB, 1), GB--)
            }
          }
        },
        _getSoundIds: function(BB) {
          if ("undefined" === typeof BB) {
            for (var OB = [], GB = 0; GB < this._sounds.length; GB++) OB.push(this._sounds[GB]._id);
            return OB
          }
          return [BB]
        },
        _refreshBuffer: function(BB) {
          return BB._node.bufferSource = QB.ctx.createBufferSource(), BB._node.bufferSource.buffer = yB[this._src], BB._panner ? BB._node.bufferSource.connect(BB._panner) : BB._node.bufferSource.connect(BB._node), BB._node.bufferSource.loop = BB._loop, BB._loop && (BB._node.bufferSource.loopStart = BB._start || 0, BB._node.bufferSource.loopEnd = BB._stop || 0), BB._node.bufferSource.playbackRate.setValueAtTime(BB._rate, QB.ctx.currentTime), this
        },
        _cleanBuffer: function(BB) {
          var OB = QB._navigator && QB._navigator.vendor.indexOf("Apple") >= 0;
          if (QB._scratchBuffer && BB.bufferSource && (BB.bufferSource.onended = null, BB.bufferSource.disconnect(0), OB)) try {
            BB.bufferSource.buffer = QB._scratchBuffer
          } catch (GB) {}
          return BB.bufferSource = null, this
        },
        _clearSound: function(BB) {
          /MSIE |Trident\//.test(QB._navigator && QB._navigator.userAgent) || (BB.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var jB = function(BB) {
        this._parent = BB, this.init()
      };
      jB.prototype = {
        init: function() {
          var BB = this,
            OB = BB._parent;
          return BB._muted = OB._muted, BB._loop = OB._loop, BB._volume = OB._volume, BB._rate = OB._rate, BB._seek = 0, BB.fP = !0, BB._ended = !0, BB._sprite = "__default", BB._id = ++QB._counter, OB._sounds.push(BB), BB.create(), BB
        },
        create: function() {
          var BB = this,
            OB = BB._parent,
            GB = QB._muted || BB._muted || BB._parent._muted ? 0 : BB._volume;
          return OB._webAudio ? (BB._node = "undefined" === typeof QB.ctx.createGain ? QB.ctx.createGainNode() : QB.ctx.createGain(), BB._node.gain.setValueAtTime(GB, QB.ctx.currentTime), BB._node.paused = !0, BB._node.connect(QB.masterGain)) : QB.noAudio || (BB._node = QB._obtainHtml5Audio(), BB._errorFn = BB._errorListener.bind(BB), BB._node.addEventListener("error", BB._errorFn, !1), BB._loadFn = BB._loadListener.bind(BB), BB._node.addEventListener(QB._canPlayEvent, BB._loadFn, !1), BB._endFn = BB._endListener.bind(BB), BB._node.addEventListener("ended", BB._endFn, !1), BB._node.src = OB._src, BB._node.preload = !0 === OB._preload ? "auto" : OB._preload, BB._node.volume = GB * QB.volume(), BB._node.load()), BB
        },
        reset: function() {
          var BB = this,
            OB = BB._parent;
          return BB._muted = OB._muted, BB._loop = OB._loop, BB._volume = OB._volume, BB._rate = OB._rate, BB._seek = 0, BB._rateSeek = 0, BB.fP = !0, BB._ended = !0, BB._sprite = "__default", BB._id = ++QB._counter, BB
        },
        _errorListener: function() {
          var BB = this;
          BB._parent._emit("loaderror", BB._id, BB._node.error ? BB._node.error.code : 0), BB._node.removeEventListener("error", BB._errorFn, !1)
        },
        _loadListener: function() {
          var BB = this,
            OB = BB._parent;
          OB._duration = Math.ceil(10 * BB._node.duration) / 10, 0 === Object.keys(OB._sprite).length && (OB._sprite = {
            __default: [0, 1e3 * OB._duration]
          }), "loaded" !== OB._state && (OB._state = "loaded", OB._emit("load"), OB._loadQueue()), BB._node.removeEventListener(QB._canPlayEvent, BB._loadFn, !1)
        },
        _endListener: function() {
          var BB = this,
            OB = BB._parent;
          OB._duration === 1 / 0 && (OB._duration = Math.ceil(10 * BB._node.duration) / 10, OB._sprite.__default[1] === 1 / 0 && (OB._sprite.__default[1] = 1e3 * OB._duration), OB._ended(BB)), BB._node.removeEventListener("ended", BB._endFn, !1)
        }
      };
      var yB = {},
        JB = function(BB) {
          var OB = BB._src;
          if (yB[OB]) return BB._duration = yB[OB].duration, void zB(BB);
          if (/^data:[^;]+;base64,/.test(OB)) {
            for (var GB = atob(OB.split(",")[1]), YB = new Uint8Array(GB.length), DB = 0; DB < GB.length; ++DB) YB[DB] = GB.charCodeAt(DB);
            PB(YB.buffer, BB)
          } else {
            var QB = new XMLHttpRequest;
            QB.open(BB._xhr.method, OB, !0), QB.withCredentials = BB._xhr.withCredentials, QB.responseType = "arraybuffer", BB._xhr.headers && Object.keys(BB._xhr.headers).forEach((function(OB) {
              QB.setRequestHeader(OB, BB._xhr.headers[OB])
            })), QB.onload = function() {
              var OB = (QB.status + "")[0];
              "0" === OB || "2" === OB || "3" === OB ? PB(QB.response, BB) : BB._emit("loaderror", null, "Failed loading audio file with status: " + QB.status + ".")
            }, QB.onerror = function() {
              BB._webAudio && (BB._html5 = !0, BB._webAudio = !1, BB._sounds = [], delete yB[OB], BB.load())
            }, MB(QB)
          }
        },
        MB = function(BB) {
          try {
            BB.send()
          } catch (OB) {
            BB.onerror()
          }
        },
        PB = function(BB, OB) {
          var GB = function() {
              OB._emit("loaderror", null, "Decoding audio data failed.")
            },
            YB = function(BB) {
              BB && OB._sounds.length > 0 ? (yB[OB._src] = BB, zB(OB, BB)) : GB()
            };
          "undefined" !== typeof Promise && 1 === QB.ctx.decodeAudioData.length ? QB.ctx.decodeAudioData(BB).then(YB).catch(GB) : QB.ctx.decodeAudioData(BB, YB, GB)
        },
        zB = function(BB, OB) {
          OB && !BB._duration && (BB._duration = OB.duration), 0 === Object.keys(BB._sprite).length && (BB._sprite = {
            __default: [0, 1e3 * BB._duration]
          }), "loaded" !== BB._state && (BB._state = "loaded", BB._emit("load"), BB._loadQueue())
        },
        lB = function() {
          if (QB.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? QB.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? QB.ctx = new webkitAudioContext : QB.usingWebAudio = !1
            } catch (DB) {
              QB.usingWebAudio = !1
            }
            QB.ctx || (QB.usingWebAudio = !1);
            var BB = /iP(hone|od|ad)/.test(QB._navigator && QB._navigator.platform),
              OB = QB._navigator && QB._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              GB = OB ? parseInt(OB[1], 10) : null;
            if (BB && GB && GB < 9) {
              var YB = /safari/.test(QB._navigator && QB._navigator.userAgent.toLowerCase());
              QB._navigator && !YB && (QB.usingWebAudio = !1)
            }
            QB.usingWebAudio && (QB.masterGain = "undefined" === typeof QB.ctx.createGain ? QB.ctx.createGainNode() : QB.ctx.createGain(), QB.masterGain.gain.setValueAtTime(QB._muted ? 0 : QB._volume, QB.ctx.currentTime), QB.masterGain.connect(QB.ctx.destination)), QB._setup()
          }
        };
      void 0 === (YB = function() {
        return {
          Howler: QB,
          Howl: oB
        }
      }.apply(OB, [])) || (BB.exports = YB), OB.Howler = QB, OB.Howl = oB, "undefined" !== typeof GB.g ? (GB.g.HowlerGlobal = DB, GB.g.Howler = QB, GB.g.Howl = oB, GB.g.Sound = jB) : "undefined" !== typeof window && (window.HowlerGlobal = DB, window.Howler = QB, window.Howl = oB, window.Sound = jB)
    }(),
    function() {
      var BB;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(BB) {
        var OB = this;
        if (!OB.ctx || !OB.ctx.listener) return OB;
        for (var GB = OB._howls.length - 1; GB >= 0; GB--) OB._howls[GB].stereo(BB);
        return OB
      }, HowlerGlobal.prototype.pos = function(BB, OB, GB) {
        var YB = this;
        return YB.ctx && YB.ctx.listener ? (OB = "number" !== typeof OB ? YB._pos[1] : OB, GB = "number" !== typeof GB ? YB._pos[2] : GB, "number" !== typeof BB ? YB._pos : (YB._pos = [BB, OB, GB], "undefined" !== typeof YB.ctx.listener.positionX ? (YB.ctx.listener.positionX.setTargetAtTime(YB._pos[0], Howler.ctx.currentTime, .1), YB.ctx.listener.positionY.setTargetAtTime(YB._pos[1], Howler.ctx.currentTime, .1), YB.ctx.listener.positionZ.setTargetAtTime(YB._pos[2], Howler.ctx.currentTime, .1)) : YB.ctx.listener.setPosition(YB._pos[0], YB._pos[1], YB._pos[2]), YB)) : YB
      }, HowlerGlobal.prototype.orientation = function(BB, OB, GB, YB, DB, QB) {
        var oB = this;
        if (!oB.ctx || !oB.ctx.listener) return oB;
        var jB = oB._orientation;
        return OB = "number" !== typeof OB ? jB[1] : OB, GB = "number" !== typeof GB ? jB[2] : GB, YB = "number" !== typeof YB ? jB[3] : YB, DB = "number" !== typeof DB ? jB[4] : DB, QB = "number" !== typeof QB ? jB[5] : QB, "number" !== typeof BB ? jB : (oB._orientation = [BB, OB, GB, YB, DB, QB], "undefined" !== typeof oB.ctx.listener.forwardX ? (oB.ctx.listener.forwardX.setTargetAtTime(BB, Howler.ctx.currentTime, .1), oB.ctx.listener.forwardY.setTargetAtTime(OB, Howler.ctx.currentTime, .1), oB.ctx.listener.forwardZ.setTargetAtTime(GB, Howler.ctx.currentTime, .1), oB.ctx.listener.upX.setTargetAtTime(YB, Howler.ctx.currentTime, .1), oB.ctx.listener.upY.setTargetAtTime(DB, Howler.ctx.currentTime, .1), oB.ctx.listener.upZ.setTargetAtTime(QB, Howler.ctx.currentTime, .1)) : oB.ctx.listener.setOrientation(BB, OB, GB, YB, DB, QB), oB)
      }, Howl.prototype.init = (BB = Howl.prototype.init, function(OB) {
        var GB = this;
        return GB._orientation = OB.orientation || [1, 0, 0], GB._stereo = OB.stereo || null, GB._pos = OB.pos || null, GB._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof OB.coneInnerAngle ? OB.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof OB.coneOuterAngle ? OB.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof OB.coneOuterGain ? OB.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof OB.distanceModel ? OB.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof OB.maxDistance ? OB.maxDistance : 1e4,
          panningModel: "undefined" !== typeof OB.panningModel ? OB.panningModel : "HRTF",
          refDistance: "undefined" !== typeof OB.refDistance ? OB.refDistance : 1,
          rolloffFactor: "undefined" !== typeof OB.rolloffFactor ? OB.rolloffFactor : 1
        }, GB._onstereo = OB.onstereo ? [{
          oP: OB.onstereo
        }] : [], GB._onpos = OB.onpos ? [{
          oP: OB.onpos
        }] : [], GB._onorientation = OB.onorientation ? [{
          oP: OB.onorientation
        }] : [], BB.call(this, OB)
      }), Howl.prototype.stereo = function(BB, GB) {
        var YB = this;
        if (!YB._webAudio) return YB;
        if ("loaded" !== YB._state) return YB._queue.push({
          event: "stereo",
          action: function() {
            YB.stereo(BB, GB)
          }
        }), YB;
        var DB = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof GB) {
          if ("number" !== typeof BB) return YB._stereo;
          YB._stereo = BB, YB._pos = [BB, 0, 0]
        }
        for (var QB = YB._getSoundIds(GB), oB = 0; oB < QB.length; oB++) {
          var jB = YB._soundById(QB[oB]);
          if (jB) {
            if ("number" !== typeof BB) return jB._stereo;
            jB._stereo = BB, jB._pos = [BB, 0, 0], jB._node && (jB._pannerAttr.panningModel = "equalpower", jB._panner && jB._panner.pan || OB(jB, DB), "spatial" === DB ? "undefined" !== typeof jB._panner.positionX ? (jB._panner.positionX.setValueAtTime(BB, Howler.ctx.currentTime), jB._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), jB._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : jB._panner.setPosition(BB, 0, 0) : jB._panner.pan.setValueAtTime(BB, Howler.ctx.currentTime)), YB._emit("stereo", jB._id)
          }
        }
        return YB
      }, Howl.prototype.pos = function(BB, GB, YB, DB) {
        var QB = this;
        if (!QB._webAudio) return QB;
        if ("loaded" !== QB._state) return QB._queue.push({
          event: "pos",
          action: function() {
            QB.pos(BB, GB, YB, DB)
          }
        }), QB;
        if (GB = "number" !== typeof GB ? 0 : GB, YB = "number" !== typeof YB ? -.5 : YB, "undefined" === typeof DB) {
          if ("number" !== typeof BB) return QB._pos;
          QB._pos = [BB, GB, YB]
        }
        for (var oB = QB._getSoundIds(DB), jB = 0; jB < oB.length; jB++) {
          var yB = QB._soundById(oB[jB]);
          if (yB) {
            if ("number" !== typeof BB) return yB._pos;
            yB._pos = [BB, GB, YB], yB._node && (yB._panner && !yB._panner.pan || OB(yB, "spatial"), "undefined" !== typeof yB._panner.positionX ? (yB._panner.positionX.setValueAtTime(BB, Howler.ctx.currentTime), yB._panner.positionY.setValueAtTime(GB, Howler.ctx.currentTime), yB._panner.positionZ.setValueAtTime(YB, Howler.ctx.currentTime)) : yB._panner.setPosition(BB, GB, YB)), QB._emit("pos", yB._id)
          }
        }
        return QB
      }, Howl.prototype.orientation = function(BB, GB, YB, DB) {
        var QB = this;
        if (!QB._webAudio) return QB;
        if ("loaded" !== QB._state) return QB._queue.push({
          event: "orientation",
          action: function() {
            QB.orientation(BB, GB, YB, DB)
          }
        }), QB;
        if (GB = "number" !== typeof GB ? QB._orientation[1] : GB, YB = "number" !== typeof YB ? QB._orientation[2] : YB, "undefined" === typeof DB) {
          if ("number" !== typeof BB) return QB._orientation;
          QB._orientation = [BB, GB, YB]
        }
        for (var oB = QB._getSoundIds(DB), jB = 0; jB < oB.length; jB++) {
          var yB = QB._soundById(oB[jB]);
          if (yB) {
            if ("number" !== typeof BB) return yB._orientation;
            yB._orientation = [BB, GB, YB], yB._node && (yB._panner || (yB._pos || (yB._pos = QB._pos || [0, 0, -.5]), OB(yB, "spatial")), "undefined" !== typeof yB._panner.orientationX ? (yB._panner.orientationX.setValueAtTime(BB, Howler.ctx.currentTime), yB._panner.orientationY.setValueAtTime(GB, Howler.ctx.currentTime), yB._panner.orientationZ.setValueAtTime(YB, Howler.ctx.currentTime)) : yB._panner.setOrientation(BB, GB, YB)), QB._emit("orientation", yB._id)
          }
        }
        return QB
      }, Howl.prototype.pannerAttr = function() {
        var BB, GB, YB, DB = this,
          QB = arguments;
        if (!DB._webAudio) return DB;
        if (0 === QB.length) return DB._pannerAttr;
        if (1 === QB.length) {
          if ("object" !== typeof QB[0]) return (YB = DB._soundById(parseInt(QB[0], 10))) ? YB._pannerAttr : DB._pannerAttr;
          BB = QB[0], "undefined" === typeof GB && (BB.pannerAttr || (BB.pannerAttr = {
            coneInnerAngle: BB.coneInnerAngle,
            coneOuterAngle: BB.coneOuterAngle,
            coneOuterGain: BB.coneOuterGain,
            distanceModel: BB.distanceModel,
            maxDistance: BB.maxDistance,
            refDistance: BB.refDistance,
            rolloffFactor: BB.rolloffFactor,
            panningModel: BB.panningModel
          }), DB._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof BB.pannerAttr.coneInnerAngle ? BB.pannerAttr.coneInnerAngle : DB._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof BB.pannerAttr.coneOuterAngle ? BB.pannerAttr.coneOuterAngle : DB._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof BB.pannerAttr.coneOuterGain ? BB.pannerAttr.coneOuterGain : DB._coneOuterGain,
            distanceModel: "undefined" !== typeof BB.pannerAttr.distanceModel ? BB.pannerAttr.distanceModel : DB._distanceModel,
            maxDistance: "undefined" !== typeof BB.pannerAttr.maxDistance ? BB.pannerAttr.maxDistance : DB._maxDistance,
            refDistance: "undefined" !== typeof BB.pannerAttr.refDistance ? BB.pannerAttr.refDistance : DB._refDistance,
            rolloffFactor: "undefined" !== typeof BB.pannerAttr.rolloffFactor ? BB.pannerAttr.rolloffFactor : DB._rolloffFactor,
            panningModel: "undefined" !== typeof BB.pannerAttr.panningModel ? BB.pannerAttr.panningModel : DB._panningModel
          })
        } else 2 === QB.length && (BB = QB[0], GB = parseInt(QB[1], 10));
        for (var oB = DB._getSoundIds(GB), jB = 0; jB < oB.length; jB++)
          if (YB = DB._soundById(oB[jB])) {
            var yB = YB._pannerAttr;
            yB = {
              coneInnerAngle: "undefined" !== typeof BB.coneInnerAngle ? BB.coneInnerAngle : yB.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof BB.coneOuterAngle ? BB.coneOuterAngle : yB.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof BB.coneOuterGain ? BB.coneOuterGain : yB.coneOuterGain,
              distanceModel: "undefined" !== typeof BB.distanceModel ? BB.distanceModel : yB.distanceModel,
              maxDistance: "undefined" !== typeof BB.maxDistance ? BB.maxDistance : yB.maxDistance,
              refDistance: "undefined" !== typeof BB.refDistance ? BB.refDistance : yB.refDistance,
              rolloffFactor: "undefined" !== typeof BB.rolloffFactor ? BB.rolloffFactor : yB.rolloffFactor,
              panningModel: "undefined" !== typeof BB.panningModel ? BB.panningModel : yB.panningModel
            };
            var JB = YB._panner;
            JB ? (JB.coneInnerAngle = yB.coneInnerAngle, JB.coneOuterAngle = yB.coneOuterAngle, JB.coneOuterGain = yB.coneOuterGain, JB.distanceModel = yB.distanceModel, JB.maxDistance = yB.maxDistance, JB.refDistance = yB.refDistance, JB.rolloffFactor = yB.rolloffFactor, JB.panningModel = yB.panningModel) : (YB._pos || (YB._pos = DB._pos || [0, 0, -.5]), OB(YB, "spatial"))
          } return DB
      }, Sound.prototype.init = function(BB) {
        return function() {
          var OB = this,
            GB = OB._parent;
          OB._orientation = GB._orientation, OB._stereo = GB._stereo, OB._pos = GB._pos, OB._pannerAttr = GB._pannerAttr, BB.call(this), OB._stereo ? GB.stereo(OB._stereo) : OB._pos && GB.pos(OB._pos[0], OB._pos[1], OB._pos[2], OB._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(BB) {
        return function() {
          var OB = this,
            GB = OB._parent;
          return OB._orientation = GB._orientation, OB._stereo = GB._stereo, OB._pos = GB._pos, OB._pannerAttr = GB._pannerAttr, OB._stereo ? GB.stereo(OB._stereo) : OB._pos ? GB.pos(OB._pos[0], OB._pos[1], OB._pos[2], OB._id) : OB._panner && (OB._panner.disconnect(0), OB._panner = void 0, GB._refreshBuffer(OB)), BB.call(this)
        }
      }(Sound.prototype.reset);
      var OB = function(BB, OB) {
        "spatial" === (OB = OB || "spatial") ? (BB._panner = Howler.ctx.createPanner(), BB._panner.coneInnerAngle = BB._pannerAttr.coneInnerAngle, BB._panner.coneOuterAngle = BB._pannerAttr.coneOuterAngle, BB._panner.coneOuterGain = BB._pannerAttr.coneOuterGain, BB._panner.distanceModel = BB._pannerAttr.distanceModel, BB._panner.maxDistance = BB._pannerAttr.maxDistance, BB._panner.refDistance = BB._pannerAttr.refDistance, BB._panner.rolloffFactor = BB._pannerAttr.rolloffFactor, BB._panner.panningModel = BB._pannerAttr.panningModel, "undefined" !== typeof BB._panner.positionX ? (BB._panner.positionX.setValueAtTime(BB._pos[0], Howler.ctx.currentTime), BB._panner.positionY.setValueAtTime(BB._pos[1], Howler.ctx.currentTime), BB._panner.positionZ.setValueAtTime(BB._pos[2], Howler.ctx.currentTime)) : BB._panner.setPosition(BB._pos[0], BB._pos[1], BB._pos[2]), "undefined" !== typeof BB._panner.orientationX ? (BB._panner.orientationX.setValueAtTime(BB._orientation[0], Howler.ctx.currentTime), BB._panner.orientationY.setValueAtTime(BB._orientation[1], Howler.ctx.currentTime), BB._panner.orientationZ.setValueAtTime(BB._orientation[2], Howler.ctx.currentTime)) : BB._panner.setOrientation(BB._orientation[0], BB._orientation[1], BB._orientation[2])) : (BB._panner = Howler.ctx.createStereoPanner(), BB._panner.pan.setValueAtTime(BB._stereo, Howler.ctx.currentTime)), BB._panner.connect(BB._node), BB.fP || BB._parent.pause(BB._id, !0).play(BB._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);