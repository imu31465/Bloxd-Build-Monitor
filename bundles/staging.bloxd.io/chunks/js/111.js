/*! For license information please see pxmq3aq.111.f4e2818c.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5357: (VV, eV, xV) => {
    var JV;
    ! function() {
      var YV = function() {
        this.init()
      };
      YV.prototype = {
        init: function() {
          var VV = this || UV;
          return VV._counter = 1e3, VV._html5AudioPool = [], VV.html5PoolSize = 10, VV._codecs = {}, VV._howls = [], VV._muted = !1, VV._volume = 1, VV._canPlayEvent = "canplaythrough", VV._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, VV.masterGain = null, VV.noAudio = !1, VV.usingWebAudio = !0, VV.autoSuspend = !0, VV.ctx = null, VV.autoUnlock = !0, VV._setup(), VV
        },
        volume: function(VV) {
          var eV = this || UV;
          if (VV = parseFloat(VV), eV.ctx || rV(), "undefined" !== typeof VV && VV >= 0 && VV <= 1) {
            if (eV._volume = VV, eV._muted) return eV;
            eV.usingWebAudio && eV.masterGain.gain.setValueAtTime(VV, UV.ctx.currentTime);
            for (var xV = 0; xV < eV._howls.length; xV++)
              if (!eV._howls[xV]._webAudio)
                for (var JV = eV._howls[xV]._getSoundIds(), YV = 0; YV < JV.length; YV++) {
                  var yV = eV._howls[xV]._soundById(JV[YV]);
                  yV && yV._node && (yV._node.volume = yV._volume * VV)
                }
            return eV
          }
          return eV._volume
        },
        mute: function(VV) {
          var eV = this || UV;
          eV.ctx || rV(), eV._muted = VV, eV.usingWebAudio && eV.masterGain.gain.setValueAtTime(VV ? 0 : eV._volume, UV.ctx.currentTime);
          for (var xV = 0; xV < eV._howls.length; xV++)
            if (!eV._howls[xV]._webAudio)
              for (var JV = eV._howls[xV]._getSoundIds(), YV = 0; YV < JV.length; YV++) {
                var yV = eV._howls[xV]._soundById(JV[YV]);
                yV && yV._node && (yV._node.muted = !!VV || yV._muted)
              }
          return eV
        },
        stop: function() {
          for (var VV = this || UV, eV = 0; eV < VV._howls.length; eV++) VV._howls[eV].stop();
          return VV
        },
        unload: function() {
          for (var VV = this || UV, eV = VV._howls.length - 1; eV >= 0; eV--) VV._howls[eV].unload();
          return VV.usingWebAudio && VV.ctx && "undefined" !== typeof VV.ctx.close && (VV.ctx.close(), VV.ctx = null, rV()), VV
        },
        codecs: function(VV) {
          return (this || UV)._codecs[VV.replace(/^x-/, "")]
        },
        _setup: function() {
          var VV = this || UV;
          if (VV.state = VV.ctx && VV.ctx.state || "suspended", VV._autoSuspend(), !VV.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (VV._canPlayEvent = "canplay")
            } catch (eV) {
              VV.noAudio = !0
            } else VV.noAudio = !0;
          try {
            (new Audio).muted && (VV.noAudio = !0)
          } catch (eV) {}
          return VV.noAudio || VV._setupCodecs(), VV
        },
        _setupCodecs: function() {
          var VV = this || UV,
            eV = null;
          try {
            eV = "undefined" !== typeof Audio ? new Audio : null
          } catch (wV) {
            return VV
          }
          if (!eV || "function" !== typeof eV.canPlayType) return VV;
          var xV = eV.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            JV = VV._navigator ? VV._navigator.userAgent : "",
            YV = JV.match(/OPR\/([0-6].)/g),
            yV = YV && parseInt(YV[0].split("/")[1], 10) < 33,
            pV = -1 !== JV.indexOf("Safari") && -1 === JV.indexOf("Chrome"),
            QV = JV.match(/Version\/(.*?) /),
            nV = pV && QV && parseInt(QV[1], 10) < 15;
          return VV._codecs = {
            mp3: !(yV || !xV && !eV.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!xV,
            opus: !!eV.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!eV.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!eV.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(eV.canPlayType('audio/wav; codecs="1"') || eV.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!eV.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!eV.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(eV.canPlayType("audio/x-m4a;") || eV.canPlayType("audio/m4a;") || eV.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(eV.canPlayType("audio/x-m4b;") || eV.canPlayType("audio/m4b;") || eV.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(eV.canPlayType("audio/x-mp4;") || eV.canPlayType("audio/mp4;") || eV.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(nV || !eV.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(nV || !eV.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!eV.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(eV.canPlayType("audio/x-flac;") || eV.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, VV
        },
        _unlockAudio: function() {
          var VV = this || UV;
          if (!VV._audioUnlocked && VV.ctx) {
            VV._audioUnlocked = !1, VV.autoUnlock = !1, VV._mobileUnloaded || 44100 === VV.ctx.sampleRate || (VV._mobileUnloaded = !0, VV.unload()), VV._scratchBuffer = VV.ctx.createBuffer(1, 1, 22050);
            var eV = function(xV) {
              for (; VV._html5AudioPool.length < VV.html5PoolSize;) try {
                var JV = new Audio;
                JV._unlocked = !0, VV._releaseHtml5Audio(JV)
              } catch (xV) {
                VV.noAudio = !0;
                break
              }
              for (var YV = 0; YV < VV._howls.length; YV++)
                if (!VV._howls[YV]._webAudio)
                  for (var UV = VV._howls[YV]._getSoundIds(), yV = 0; yV < UV.length; yV++) {
                    var pV = VV._howls[YV]._soundById(UV[yV]);
                    pV && pV._node && !pV._node._unlocked && (pV._node._unlocked = !0, pV._node.load())
                  }
              VV._autoResume();
              var QV = VV.ctx.createBufferSource();
              QV.buffer = VV._scratchBuffer, QV.connect(VV.ctx.destination), "undefined" === typeof QV.start ? QV.noteOn(0) : QV.start(0), "function" === typeof VV.ctx.resume && VV.ctx.resume(), QV.onended = function() {
                QV.disconnect(0), VV._audioUnlocked = !0, document.removeEventListener("touchstart", eV, !0), document.removeEventListener("touchend", eV, !0), document.removeEventListener("click", eV, !0), document.removeEventListener("keydown", eV, !0);
                for (var xV = 0; xV < VV._howls.length; xV++) VV._howls[xV]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", eV, !0), document.addEventListener("touchend", eV, !0), document.addEventListener("click", eV, !0), document.addEventListener("keydown", eV, !0), VV
          }
        },
        _obtainHtml5Audio: function() {
          var VV = this || UV;
          if (VV._html5AudioPool.length) return VV._html5AudioPool.pop();
          var eV = (new Audio).play();
          return eV && "undefined" !== typeof Promise && (eV instanceof Promise || "function" === typeof eV.then) && eV.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(VV) {
          var eV = this || UV;
          return VV._unlocked && eV._html5AudioPool.push(VV), eV
        },
        _autoSuspend: function() {
          var VV = this;
          if (VV.autoSuspend && VV.ctx && "undefined" !== typeof VV.ctx.suspend && UV.usingWebAudio) {
            for (var eV = 0; eV < VV._howls.length; eV++)
              if (VV._howls[eV]._webAudio)
                for (var xV = 0; xV < VV._howls[eV]._sounds.length; xV++)
                  if (!VV._howls[eV]._sounds[xV].DZ) return VV;
            return VV._suspendTimer && clearTimeout(VV._suspendTimer), VV._suspendTimer = setTimeout((function() {
              if (VV.autoSuspend) {
                VV._suspendTimer = null, VV.state = "suspending";
                var eV = function() {
                  VV.state = "suspended", VV._resumeAfterSuspend && (delete VV._resumeAfterSuspend, VV._autoResume())
                };
                VV.ctx.suspend().then(eV, eV)
              }
            }), 3e4), VV
          }
        },
        _autoResume: function() {
          var VV = this;
          if (VV.ctx && "undefined" !== typeof VV.ctx.resume && UV.usingWebAudio) return "running" === VV.state && "interrupted" !== VV.ctx.state && VV._suspendTimer ? (clearTimeout(VV._suspendTimer), VV._suspendTimer = null) : "suspended" === VV.state || "running" === VV.state && "interrupted" === VV.ctx.state ? (VV.ctx.resume().then((function() {
            VV.state = "running";
            for (var eV = 0; eV < VV._howls.length; eV++) VV._howls[eV]._emit("resume")
          })), VV._suspendTimer && (clearTimeout(VV._suspendTimer), VV._suspendTimer = null)) : "suspending" === VV.state && (VV._resumeAfterSuspend = !0), VV
        }
      };
      var UV = new YV,
        yV = function(VV) {
          VV.src && 0 !== VV.src.length ? this.init(VV) : console.error("An array of source files must be passed with any new Howl.")
        };
      yV.prototype = {
        init: function(VV) {
          var eV = this;
          return UV.ctx || rV(), eV._autoplay = VV.autoplay || !1, eV._format = "string" !== typeof VV.format ? VV.format : [VV.format], eV._html5 = VV.html5 || !1, eV._muted = VV.mute || !1, eV._loop = VV.loop || !1, eV._pool = VV.pool || 5, eV._preload = "boolean" !== typeof VV.preload && "metadata" !== VV.preload || VV.preload, eV._rate = VV.rate || 1, eV._sprite = VV.sprite || {}, eV._src = "string" !== typeof VV.src ? VV.src : [VV.src], eV._volume = void 0 !== VV.volume ? VV.volume : 1, eV._xhr = {
            method: VV.xhr && VV.xhr.method ? VV.xhr.method : "GET",
            headers: VV.xhr && VV.xhr.headers ? VV.xhr.headers : null,
            withCredentials: !(!VV.xhr || !VV.xhr.withCredentials) && VV.xhr.withCredentials
          }, eV._duration = 0, eV._state = "unloaded", eV._sounds = [], eV._endTimers = {}, eV._queue = [], eV._playLock = !1, eV._onend = VV.onend ? [{
            bZ: VV.onend
          }] : [], eV._onfade = VV.onfade ? [{
            bZ: VV.onfade
          }] : [], eV._onload = VV.onload ? [{
            bZ: VV.onload
          }] : [], eV._onloaderror = VV.onloaderror ? [{
            bZ: VV.onloaderror
          }] : [], eV._onplayerror = VV.onplayerror ? [{
            bZ: VV.onplayerror
          }] : [], eV._onpause = VV.onpause ? [{
            bZ: VV.onpause
          }] : [], eV._onplay = VV.onplay ? [{
            bZ: VV.onplay
          }] : [], eV._onstop = VV.onstop ? [{
            bZ: VV.onstop
          }] : [], eV._onmute = VV.onmute ? [{
            bZ: VV.onmute
          }] : [], eV._onvolume = VV.onvolume ? [{
            bZ: VV.onvolume
          }] : [], eV._onrate = VV.onrate ? [{
            bZ: VV.onrate
          }] : [], eV._onseek = VV.onseek ? [{
            bZ: VV.onseek
          }] : [], eV._onunlock = VV.onunlock ? [{
            bZ: VV.onunlock
          }] : [], eV._onresume = [], eV._webAudio = UV.usingWebAudio && !eV._html5, "undefined" !== typeof UV.ctx && UV.ctx && UV.autoUnlock && UV._unlockAudio(), UV._howls.push(eV), eV._autoplay && eV._queue.push({
            event: "play",
            action: function() {
              eV.play()
            }
          }), eV._preload && "none" !== eV._preload && eV.load(), eV
        },
        load: function() {
          var VV = this,
            eV = null;
          if (UV.noAudio) VV._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof VV._src && (VV._src = [VV._src]);
            for (var xV = 0; xV < VV._src.length; xV++) {
              var JV, YV;
              if (VV._format && VV._format[xV]) JV = VV._format[xV];
              else {
                if ("string" !== typeof(YV = VV._src[xV])) {
                  VV._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(JV = /^data:audio\/([^;,]+);/i.exec(YV)) || (JV = /\.([^.]+)$/.exec(YV.split("?", 1)[0])), JV && (JV = JV[1].toLowerCase())
              }
              if (JV || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), JV && UV.codecs(JV)) {
                eV = VV._src[xV];
                break
              }
            }
            if (eV) return VV._src = eV, VV._state = "loading", "https:" === window.location.protocol && "http:" === eV.slice(0, 5) && (VV._html5 = !0, VV._webAudio = !1), new pV(VV), VV._webAudio && nV(VV), VV;
            VV._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(VV, eV) {
          var xV = this,
            JV = null;
          if ("number" === typeof VV) JV = VV, VV = null;
          else {
            if ("string" === typeof VV && "loaded" === xV._state && !xV._sprite[VV]) return null;
            if ("undefined" === typeof VV && (VV = "__default", !xV._playLock)) {
              for (var YV = 0, yV = 0; yV < xV._sounds.length; yV++) xV._sounds[yV].DZ && !xV._sounds[yV]._ended && (YV++, JV = xV._sounds[yV]._id);
              1 === YV ? VV = null : JV = null
            }
          }
          var pV = JV ? xV._soundById(JV) : xV._inactiveSound();
          if (!pV) return null;
          if (JV && !VV && (VV = pV._sprite || "__default"), "loaded" !== xV._state) {
            pV._sprite = VV, pV._ended = !1;
            var QV = pV._id;
            return xV._queue.push({
              event: "play",
              action: function() {
                xV.play(QV)
              }
            }), QV
          }
          if (JV && !pV.DZ) return eV || xV._loadQueue("play"), pV._id;
          xV._webAudio && UV._autoResume();
          var nV = Math.max(0, pV._seek > 0 ? pV._seek : xV._sprite[VV][0] / 1e3),
            wV = Math.max(0, (xV._sprite[VV][0] + xV._sprite[VV][1]) / 1e3 - nV),
            ZV = 1e3 * wV / Math.abs(pV._rate),
            vV = xV._sprite[VV][0] / 1e3,
            rV = (xV._sprite[VV][0] + xV._sprite[VV][1]) / 1e3;
          pV._sprite = VV, pV._ended = !1;
          var kV = function() {
            pV.DZ = !1, pV._seek = nV, pV._start = vV, pV._stop = rV, pV._loop = !(!pV._loop && !xV._sprite[VV][2])
          };
          if (!(nV >= rV)) {
            var bV = pV._node;
            if (xV._webAudio) {
              var EV = function() {
                xV._playLock = !1, kV(), xV._refreshBuffer(pV);
                var VV = pV._muted || xV._muted ? 0 : pV._volume;
                bV.gain.setValueAtTime(VV, UV.ctx.currentTime), pV._playStart = UV.ctx.currentTime, "undefined" === typeof bV.bufferSource.start ? pV._loop ? bV.bufferSource.noteGrainOn(0, nV, 86400) : bV.bufferSource.noteGrainOn(0, nV, wV) : pV._loop ? bV.bufferSource.start(0, nV, 86400) : bV.bufferSource.start(0, nV, wV), ZV !== 1 / 0 && (xV._endTimers[pV._id] = setTimeout(xV._ended.bind(xV, pV), ZV)), eV || setTimeout((function() {
                  xV._emit("play", pV._id), xV._loadQueue()
                }), 0)
              };
              "running" === UV.state && "interrupted" !== UV.ctx.state ? EV() : (xV._playLock = !0, xV.once("resume", EV), xV._clearTimer(pV._id))
            } else {
              var BV = function() {
                bV.currentTime = nV, bV.muted = pV._muted || xV._muted || UV._muted || bV.muted, bV.volume = pV._volume * UV.volume(), bV.playbackRate = pV._rate;
                try {
                  var JV = bV.play();
                  if (JV && "undefined" !== typeof Promise && (JV instanceof Promise || "function" === typeof JV.then) ? (xV._playLock = !0, kV(), JV.then((function() {
                      xV._playLock = !1, bV._unlocked = !0, eV ? xV._loadQueue() : xV._emit("play", pV._id)
                    })).catch((function() {
                      xV._playLock = !1, xV._emit("playerror", pV._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), pV._ended = !0, pV.DZ = !0
                    }))) : eV || (xV._playLock = !1, kV(), xV._emit("play", pV._id)), bV.playbackRate = pV._rate, bV.paused) return void xV._emit("playerror", pV._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== VV || pV._loop ? xV._endTimers[pV._id] = setTimeout(xV._ended.bind(xV, pV), ZV) : (xV._endTimers[pV._id] = function() {
                    xV._ended(pV), bV.removeEventListener("ended", xV._endTimers[pV._id], !1)
                  }, bV.addEventListener("ended", xV._endTimers[pV._id], !1))
                } catch (YV) {
                  xV._emit("playerror", pV._id, YV)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === bV.src && (bV.src = xV._src, bV.load());
              var jV = window && window.ejecta || !bV.readyState && UV._navigator.isCocoonJS;
              if (bV.readyState >= 3 || jV) BV();
              else {
                xV._playLock = !0, xV._state = "loading";
                var qV = function() {
                  xV._state = "loaded", BV(), bV.removeEventListener(UV._canPlayEvent, qV, !1)
                };
                bV.addEventListener(UV._canPlayEvent, qV, !1), xV._clearTimer(pV._id)
              }
            }
            return pV._id
          }
          xV._ended(pV)
        },
        pause: function(VV) {
          var eV = this;
          if ("loaded" !== eV._state || eV._playLock) return eV._queue.push({
            event: "pause",
            action: function() {
              eV.pause(VV)
            }
          }), eV;
          for (var xV = eV._getSoundIds(VV), JV = 0; JV < xV.length; JV++) {
            eV._clearTimer(xV[JV]);
            var YV = eV._soundById(xV[JV]);
            if (YV && !YV.DZ && (YV._seek = eV.seek(xV[JV]), YV._rateSeek = 0, YV.DZ = !0, eV._stopFade(xV[JV]), YV._node))
              if (eV._webAudio) {
                if (!YV._node.bufferSource) continue;
                "undefined" === typeof YV._node.bufferSource.stop ? YV._node.bufferSource.noteOff(0) : YV._node.bufferSource.stop(0), eV._cleanBuffer(YV._node)
              } else isNaN(YV._node.duration) && YV._node.duration !== 1 / 0 || YV._node.pause();
            arguments[1] || eV._emit("pause", YV ? YV._id : null)
          }
          return eV
        },
        stop: function(VV, eV) {
          var xV = this;
          if ("loaded" !== xV._state || xV._playLock) return xV._queue.push({
            event: "stop",
            action: function() {
              xV.stop(VV)
            }
          }), xV;
          for (var JV = xV._getSoundIds(VV), YV = 0; YV < JV.length; YV++) {
            xV._clearTimer(JV[YV]);
            var UV = xV._soundById(JV[YV]);
            UV && (UV._seek = UV._start || 0, UV._rateSeek = 0, UV.DZ = !0, UV._ended = !0, xV._stopFade(JV[YV]), UV._node && (xV._webAudio ? UV._node.bufferSource && ("undefined" === typeof UV._node.bufferSource.stop ? UV._node.bufferSource.noteOff(0) : UV._node.bufferSource.stop(0), xV._cleanBuffer(UV._node)) : isNaN(UV._node.duration) && UV._node.duration !== 1 / 0 || (UV._node.currentTime = UV._start || 0, UV._node.pause(), UV._node.duration === 1 / 0 && xV._clearSound(UV._node))), eV || xV._emit("stop", UV._id))
          }
          return xV
        },
        mute: function(VV, eV) {
          var xV = this;
          if ("loaded" !== xV._state || xV._playLock) return xV._queue.push({
            event: "mute",
            action: function() {
              xV.mute(VV, eV)
            }
          }), xV;
          if ("undefined" === typeof eV) {
            if ("boolean" !== typeof VV) return xV._muted;
            xV._muted = VV
          }
          for (var JV = xV._getSoundIds(eV), YV = 0; YV < JV.length; YV++) {
            var yV = xV._soundById(JV[YV]);
            yV && (yV._muted = VV, yV._interval && xV._stopFade(yV._id), xV._webAudio && yV._node ? yV._node.gain.setValueAtTime(VV ? 0 : yV._volume, UV.ctx.currentTime) : yV._node && (yV._node.muted = !!UV._muted || VV), xV._emit("mute", yV._id))
          }
          return xV
        },
        volume: function() {
          var VV, eV, xV, JV = this,
            YV = arguments;
          if (0 === YV.length) return JV._volume;
          if (1 === YV.length || 2 === YV.length && "undefined" === typeof YV[1] ? JV._getSoundIds().indexOf(YV[0]) >= 0 ? eV = parseInt(YV[0], 10) : VV = parseFloat(YV[0]) : YV.length >= 2 && (VV = parseFloat(YV[0]), eV = parseInt(YV[1], 10)), !("undefined" !== typeof VV && VV >= 0 && VV <= 1)) return (xV = eV ? JV._soundById(eV) : JV._sounds[0]) ? xV._volume : 0;
          if ("loaded" !== JV._state || JV._playLock) return JV._queue.push({
            event: "volume",
            action: function() {
              JV.volume.apply(JV, YV)
            }
          }), JV;
          "undefined" === typeof eV && (JV._volume = VV), eV = JV._getSoundIds(eV);
          for (var yV = 0; yV < eV.length; yV++)(xV = JV._soundById(eV[yV])) && (xV._volume = VV, YV[2] || JV._stopFade(eV[yV]), JV._webAudio && xV._node && !xV._muted ? xV._node.gain.setValueAtTime(VV, UV.ctx.currentTime) : xV._node && !xV._muted && (xV._node.volume = VV * UV.volume()), JV._emit("volume", xV._id));
          return JV
        },
        fade: function(VV, eV, xV, JV) {
          var YV = this;
          if ("loaded" !== YV._state || YV._playLock) return YV._queue.push({
            event: "fade",
            action: function() {
              YV.fade(VV, eV, xV, JV)
            }
          }), YV;
          VV = Math.min(Math.max(0, parseFloat(VV)), 1), eV = Math.min(Math.max(0, parseFloat(eV)), 1), xV = parseFloat(xV), YV.volume(VV, JV);
          for (var yV = YV._getSoundIds(JV), pV = 0; pV < yV.length; pV++) {
            var QV = YV._soundById(yV[pV]);
            if (QV) {
              if (JV || YV._stopFade(yV[pV]), YV._webAudio && !QV._muted) {
                var nV = UV.ctx.currentTime,
                  wV = nV + xV / 1e3;
                QV._volume = VV, QV._node.gain.setValueAtTime(VV, nV), QV._node.gain.linearRampToValueAtTime(eV, wV)
              }
              YV._startFadeInterval(QV, VV, eV, xV, yV[pV], "undefined" === typeof JV)
            }
          }
          return YV
        },
        _startFadeInterval: function(VV, eV, xV, JV, YV, UV) {
          var yV = this,
            pV = eV,
            QV = xV - eV,
            nV = Math.abs(QV / .01),
            wV = Math.max(4, nV > 0 ? JV / nV : JV),
            ZV = Date.now();
          VV._fadeTo = xV, VV._interval = setInterval((function() {
            var YV = (Date.now() - ZV) / JV;
            ZV = Date.now(), pV += QV * YV, pV = Math.round(100 * pV) / 100, pV = QV < 0 ? Math.max(xV, pV) : Math.min(xV, pV), yV._webAudio ? VV._volume = pV : yV.volume(pV, VV._id, !0), UV && (yV._volume = pV), (xV < eV && pV <= xV || xV > eV && pV >= xV) && (clearInterval(VV._interval), VV._interval = null, VV._fadeTo = null, yV.volume(xV, VV._id), yV._emit("fade", VV._id))
          }), wV)
        },
        _stopFade: function(VV) {
          var eV = this,
            xV = eV._soundById(VV);
          return xV && xV._interval && (eV._webAudio && xV._node.gain.cancelScheduledValues(UV.ctx.currentTime), clearInterval(xV._interval), xV._interval = null, eV.volume(xV._fadeTo, VV), xV._fadeTo = null, eV._emit("fade", VV)), eV
        },
        loop: function() {
          var VV, eV, xV, JV = this,
            YV = arguments;
          if (0 === YV.length) return JV._loop;
          if (1 === YV.length) {
            if ("boolean" !== typeof YV[0]) return !!(xV = JV._soundById(parseInt(YV[0], 10))) && xV._loop;
            VV = YV[0], JV._loop = VV
          } else 2 === YV.length && (VV = YV[0], eV = parseInt(YV[1], 10));
          for (var UV = JV._getSoundIds(eV), yV = 0; yV < UV.length; yV++)(xV = JV._soundById(UV[yV])) && (xV._loop = VV, JV._webAudio && xV._node && xV._node.bufferSource && (xV._node.bufferSource.loop = VV, VV && (xV._node.bufferSource.loopStart = xV._start || 0, xV._node.bufferSource.loopEnd = xV._stop, JV.playing(UV[yV]) && (JV.pause(UV[yV], !0), JV.play(UV[yV], !0)))));
          return JV
        },
        rate: function() {
          var VV, eV, xV, JV = this,
            YV = arguments;
          if (0 === YV.length) eV = JV._sounds[0]._id;
          else if (1 === YV.length) {
            JV._getSoundIds().indexOf(YV[0]) >= 0 ? eV = parseInt(YV[0], 10) : VV = parseFloat(YV[0])
          } else 2 === YV.length && (VV = parseFloat(YV[0]), eV = parseInt(YV[1], 10));
          if ("number" !== typeof VV) return (xV = JV._soundById(eV)) ? xV._rate : JV._rate;
          if ("loaded" !== JV._state || JV._playLock) return JV._queue.push({
            event: "rate",
            action: function() {
              JV.rate.apply(JV, YV)
            }
          }), JV;
          "undefined" === typeof eV && (JV._rate = VV), eV = JV._getSoundIds(eV);
          for (var yV = 0; yV < eV.length; yV++)
            if (xV = JV._soundById(eV[yV])) {
              JV.playing(eV[yV]) && (xV._rateSeek = JV.seek(eV[yV]), xV._playStart = JV._webAudio ? UV.ctx.currentTime : xV._playStart), xV._rate = VV, JV._webAudio && xV._node && xV._node.bufferSource ? xV._node.bufferSource.playbackRate.setValueAtTime(VV, UV.ctx.currentTime) : xV._node && (xV._node.playbackRate = VV);
              var pV = JV.seek(eV[yV]),
                QV = 1e3 * ((JV._sprite[xV._sprite][0] + JV._sprite[xV._sprite][1]) / 1e3 - pV) / Math.abs(xV._rate);
              !JV._endTimers[eV[yV]] && xV.DZ || (JV._clearTimer(eV[yV]), JV._endTimers[eV[yV]] = setTimeout(JV._ended.bind(JV, xV), QV)), JV._emit("rate", xV._id)
            } return JV
        },
        seek: function() {
          var VV, eV, xV = this,
            JV = arguments;
          if (0 === JV.length) xV._sounds.length && (eV = xV._sounds[0]._id);
          else if (1 === JV.length) {
            xV._getSoundIds().indexOf(JV[0]) >= 0 ? eV = parseInt(JV[0], 10) : xV._sounds.length && (eV = xV._sounds[0]._id, VV = parseFloat(JV[0]))
          } else 2 === JV.length && (VV = parseFloat(JV[0]), eV = parseInt(JV[1], 10));
          if ("undefined" === typeof eV) return 0;
          if ("number" === typeof VV && ("loaded" !== xV._state || xV._playLock)) return xV._queue.push({
            event: "seek",
            action: function() {
              xV.seek.apply(xV, JV)
            }
          }), xV;
          var YV = xV._soundById(eV);
          if (YV) {
            if (!("number" === typeof VV && VV >= 0)) {
              if (xV._webAudio) {
                var yV = xV.playing(eV) ? UV.ctx.currentTime - YV._playStart : 0,
                  pV = YV._rateSeek ? YV._rateSeek - YV._seek : 0;
                return YV._seek + (pV + yV * Math.abs(YV._rate))
              }
              return YV._node.currentTime
            }
            var QV = xV.playing(eV);
            QV && xV.pause(eV, !0), YV._seek = VV, YV._ended = !1, xV._clearTimer(eV), xV._webAudio || !YV._node || isNaN(YV._node.duration) || (YV._node.currentTime = VV);
            var nV = function() {
              QV && xV.play(eV, !0), xV._emit("seek", eV)
            };
            if (QV && !xV._webAudio) {
              var wV = function() {
                xV._playLock ? setTimeout(wV, 0) : nV()
              };
              setTimeout(wV, 0)
            } else nV()
          }
          return xV
        },
        playing: function(VV) {
          var eV = this;
          if ("number" === typeof VV) {
            var xV = eV._soundById(VV);
            return !!xV && !xV.DZ
          }
          for (var JV = 0; JV < eV._sounds.length; JV++)
            if (!eV._sounds[JV].DZ) return !0;
          return !1
        },
        duration: function(VV) {
          var eV = this,
            xV = eV._duration,
            JV = eV._soundById(VV);
          return JV && (xV = eV._sprite[JV._sprite][1] / 1e3), xV
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var VV = this, eV = VV._sounds, xV = 0; xV < eV.length; xV++) eV[xV].DZ || VV.stop(eV[xV]._id), VV._webAudio || (VV._clearSound(eV[xV]._node), eV[xV]._node.removeEventListener("error", eV[xV]._errorFn, !1), eV[xV]._node.removeEventListener(UV._canPlayEvent, eV[xV]._loadFn, !1), eV[xV]._node.removeEventListener("ended", eV[xV]._endFn, !1), UV._releaseHtml5Audio(eV[xV]._node)), delete eV[xV]._node, VV._clearTimer(eV[xV]._id);
          var JV = UV._howls.indexOf(VV);
          JV >= 0 && UV._howls.splice(JV, 1);
          var YV = !0;
          for (xV = 0; xV < UV._howls.length; xV++)
            if (UV._howls[xV]._src === VV._src || VV._src.indexOf(UV._howls[xV]._src) >= 0) {
              YV = !1;
              break
            } return QV && YV && delete QV[VV._src], UV.noAudio = !1, VV._state = "unloaded", VV._sounds = [], VV = null, null
        },
        on: function(VV, eV, xV, JV) {
          var YV = this["_on" + VV];
          return "function" === typeof eV && YV.push(JV ? {
            id: xV,
            bZ: eV,
            once: JV
          } : {
            id: xV,
            bZ: eV
          }), this
        },
        off: function(VV, eV, xV) {
          var JV = this,
            YV = JV["_on" + VV],
            UV = 0;
          if ("number" === typeof eV && (xV = eV, eV = null), eV || xV)
            for (UV = 0; UV < YV.length; UV++) {
              var yV = xV === YV[UV].id;
              if (eV === YV[UV].bZ && yV || !eV && yV) {
                YV.splice(UV, 1);
                break
              }
            } else if (VV) JV["_on" + VV] = [];
            else {
              var pV = Object.keys(JV);
              for (UV = 0; UV < pV.length; UV++) 0 === pV[UV].indexOf("_on") && Array.isArray(JV[pV[UV]]) && (JV[pV[UV]] = [])
            } return JV
        },
        once: function(VV, eV, xV) {
          return this.on(VV, eV, xV, 1), this
        },
        _emit: function(VV, eV, xV) {
          for (var JV = this, YV = JV["_on" + VV], UV = YV.length - 1; UV >= 0; UV--) YV[UV].id && YV[UV].id !== eV && "load" !== VV || (setTimeout(function(VV) {
            VV.call(this, eV, xV)
          }.bind(JV, YV[UV].bZ), 0), YV[UV].once && JV.off(VV, YV[UV].bZ, YV[UV].id));
          return JV._loadQueue(VV), JV
        },
        _loadQueue: function(VV) {
          var eV = this;
          if (eV._queue.length > 0) {
            var xV = eV._queue[0];
            xV.event === VV && (eV._queue.shift(), eV._loadQueue()), VV || xV.action()
          }
          return eV
        },
        _ended: function(VV) {
          var eV = this,
            xV = VV._sprite;
          if (!eV._webAudio && VV._node && !VV._node.paused && !VV._node.ended && VV._node.currentTime < VV._stop) return setTimeout(eV._ended.bind(eV, VV), 100), eV;
          var JV = !(!VV._loop && !eV._sprite[xV][2]);
          if (eV._emit("end", VV._id), !eV._webAudio && JV && eV.stop(VV._id, !0).play(VV._id), eV._webAudio && JV) {
            eV._emit("play", VV._id), VV._seek = VV._start || 0, VV._rateSeek = 0, VV._playStart = UV.ctx.currentTime;
            var YV = 1e3 * (VV._stop - VV._start) / Math.abs(VV._rate);
            eV._endTimers[VV._id] = setTimeout(eV._ended.bind(eV, VV), YV)
          }
          return eV._webAudio && !JV && (VV.DZ = !0, VV._ended = !0, VV._seek = VV._start || 0, VV._rateSeek = 0, eV._clearTimer(VV._id), eV._cleanBuffer(VV._node), UV._autoSuspend()), eV._webAudio || JV || eV.stop(VV._id, !0), eV
        },
        _clearTimer: function(VV) {
          var eV = this;
          if (eV._endTimers[VV]) {
            if ("function" !== typeof eV._endTimers[VV]) clearTimeout(eV._endTimers[VV]);
            else {
              var xV = eV._soundById(VV);
              xV && xV._node && xV._node.removeEventListener("ended", eV._endTimers[VV], !1)
            }
            delete eV._endTimers[VV]
          }
          return eV
        },
        _soundById: function(VV) {
          for (var eV = this, xV = 0; xV < eV._sounds.length; xV++)
            if (VV === eV._sounds[xV]._id) return eV._sounds[xV];
          return null
        },
        _inactiveSound: function() {
          var VV = this;
          VV._drain();
          for (var eV = 0; eV < VV._sounds.length; eV++)
            if (VV._sounds[eV]._ended) return VV._sounds[eV].reset();
          return new pV(VV)
        },
        _drain: function() {
          var VV = this,
            eV = VV._pool,
            xV = 0,
            JV = 0;
          if (!(VV._sounds.length < eV)) {
            for (JV = 0; JV < VV._sounds.length; JV++) VV._sounds[JV]._ended && xV++;
            for (JV = VV._sounds.length - 1; JV >= 0; JV--) {
              if (xV <= eV) return;
              VV._sounds[JV]._ended && (VV._webAudio && VV._sounds[JV]._node && VV._sounds[JV]._node.disconnect(0), VV._sounds.splice(JV, 1), xV--)
            }
          }
        },
        _getSoundIds: function(VV) {
          if ("undefined" === typeof VV) {
            for (var eV = [], xV = 0; xV < this._sounds.length; xV++) eV.push(this._sounds[xV]._id);
            return eV
          }
          return [VV]
        },
        _refreshBuffer: function(VV) {
          return VV._node.bufferSource = UV.ctx.createBufferSource(), VV._node.bufferSource.buffer = QV[this._src], VV._panner ? VV._node.bufferSource.connect(VV._panner) : VV._node.bufferSource.connect(VV._node), VV._node.bufferSource.loop = VV._loop, VV._loop && (VV._node.bufferSource.loopStart = VV._start || 0, VV._node.bufferSource.loopEnd = VV._stop || 0), VV._node.bufferSource.playbackRate.setValueAtTime(VV._rate, UV.ctx.currentTime), this
        },
        _cleanBuffer: function(VV) {
          var eV = UV._navigator && UV._navigator.vendor.indexOf("Apple") >= 0;
          if (UV._scratchBuffer && VV.bufferSource && (VV.bufferSource.onended = null, VV.bufferSource.disconnect(0), eV)) try {
            VV.bufferSource.buffer = UV._scratchBuffer
          } catch (xV) {}
          return VV.bufferSource = null, this
        },
        _clearSound: function(VV) {
          /MSIE |Trident\//.test(UV._navigator && UV._navigator.userAgent) || (VV.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var pV = function(VV) {
        this._parent = VV, this.init()
      };
      pV.prototype = {
        init: function() {
          var VV = this,
            eV = VV._parent;
          return VV._muted = eV._muted, VV._loop = eV._loop, VV._volume = eV._volume, VV._rate = eV._rate, VV._seek = 0, VV.DZ = !0, VV._ended = !0, VV._sprite = "__default", VV._id = ++UV._counter, eV._sounds.push(VV), VV.create(), VV
        },
        create: function() {
          var VV = this,
            eV = VV._parent,
            xV = UV._muted || VV._muted || VV._parent._muted ? 0 : VV._volume;
          return eV._webAudio ? (VV._node = "undefined" === typeof UV.ctx.createGain ? UV.ctx.createGainNode() : UV.ctx.createGain(), VV._node.gain.setValueAtTime(xV, UV.ctx.currentTime), VV._node.paused = !0, VV._node.connect(UV.masterGain)) : UV.noAudio || (VV._node = UV._obtainHtml5Audio(), VV._errorFn = VV._errorListener.bind(VV), VV._node.addEventListener("error", VV._errorFn, !1), VV._loadFn = VV._loadListener.bind(VV), VV._node.addEventListener(UV._canPlayEvent, VV._loadFn, !1), VV._endFn = VV._endListener.bind(VV), VV._node.addEventListener("ended", VV._endFn, !1), VV._node.src = eV._src, VV._node.preload = !0 === eV._preload ? "auto" : eV._preload, VV._node.volume = xV * UV.volume(), VV._node.load()), VV
        },
        reset: function() {
          var VV = this,
            eV = VV._parent;
          return VV._muted = eV._muted, VV._loop = eV._loop, VV._volume = eV._volume, VV._rate = eV._rate, VV._seek = 0, VV._rateSeek = 0, VV.DZ = !0, VV._ended = !0, VV._sprite = "__default", VV._id = ++UV._counter, VV
        },
        _errorListener: function() {
          var VV = this;
          VV._parent._emit("loaderror", VV._id, VV._node.error ? VV._node.error.code : 0), VV._node.removeEventListener("error", VV._errorFn, !1)
        },
        _loadListener: function() {
          var VV = this,
            eV = VV._parent;
          eV._duration = Math.ceil(10 * VV._node.duration) / 10, 0 === Object.keys(eV._sprite).length && (eV._sprite = {
            __default: [0, 1e3 * eV._duration]
          }), "loaded" !== eV._state && (eV._state = "loaded", eV._emit("load"), eV._loadQueue()), VV._node.removeEventListener(UV._canPlayEvent, VV._loadFn, !1)
        },
        _endListener: function() {
          var VV = this,
            eV = VV._parent;
          eV._duration === 1 / 0 && (eV._duration = Math.ceil(10 * VV._node.duration) / 10, eV._sprite.__default[1] === 1 / 0 && (eV._sprite.__default[1] = 1e3 * eV._duration), eV._ended(VV)), VV._node.removeEventListener("ended", VV._endFn, !1)
        }
      };
      var QV = {},
        nV = function(VV) {
          var eV = VV._src;
          if (QV[eV]) return VV._duration = QV[eV].duration, void vV(VV);
          if (/^data:[^;]+;base64,/.test(eV)) {
            for (var xV = atob(eV.split(",")[1]), JV = new Uint8Array(xV.length), YV = 0; YV < xV.length; ++YV) JV[YV] = xV.charCodeAt(YV);
            ZV(JV.buffer, VV)
          } else {
            var UV = new XMLHttpRequest;
            UV.open(VV._xhr.method, eV, !0), UV.withCredentials = VV._xhr.withCredentials, UV.responseType = "arraybuffer", VV._xhr.headers && Object.keys(VV._xhr.headers).forEach((function(eV) {
              UV.setRequestHeader(eV, VV._xhr.headers[eV])
            })), UV.onload = function() {
              var eV = (UV.status + "")[0];
              "0" === eV || "2" === eV || "3" === eV ? ZV(UV.response, VV) : VV._emit("loaderror", null, "Failed loading audio file with status: " + UV.status + ".")
            }, UV.onerror = function() {
              VV._webAudio && (VV._html5 = !0, VV._webAudio = !1, VV._sounds = [], delete QV[eV], VV.load())
            }, wV(UV)
          }
        },
        wV = function(VV) {
          try {
            VV.send()
          } catch (eV) {
            VV.onerror()
          }
        },
        ZV = function(VV, eV) {
          var xV = function() {
              eV._emit("loaderror", null, "Decoding audio data failed.")
            },
            JV = function(VV) {
              VV && eV._sounds.length > 0 ? (QV[eV._src] = VV, vV(eV, VV)) : xV()
            };
          "undefined" !== typeof Promise && 1 === UV.ctx.decodeAudioData.length ? UV.ctx.decodeAudioData(VV).then(JV).catch(xV) : UV.ctx.decodeAudioData(VV, JV, xV)
        },
        vV = function(VV, eV) {
          eV && !VV._duration && (VV._duration = eV.duration), 0 === Object.keys(VV._sprite).length && (VV._sprite = {
            __default: [0, 1e3 * VV._duration]
          }), "loaded" !== VV._state && (VV._state = "loaded", VV._emit("load"), VV._loadQueue())
        },
        rV = function() {
          if (UV.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? UV.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? UV.ctx = new webkitAudioContext : UV.usingWebAudio = !1
            } catch (YV) {
              UV.usingWebAudio = !1
            }
            UV.ctx || (UV.usingWebAudio = !1);
            var VV = /iP(hone|od|ad)/.test(UV._navigator && UV._navigator.platform),
              eV = UV._navigator && UV._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              xV = eV ? parseInt(eV[1], 10) : null;
            if (VV && xV && xV < 9) {
              var JV = /safari/.test(UV._navigator && UV._navigator.userAgent.toLowerCase());
              UV._navigator && !JV && (UV.usingWebAudio = !1)
            }
            UV.usingWebAudio && (UV.masterGain = "undefined" === typeof UV.ctx.createGain ? UV.ctx.createGainNode() : UV.ctx.createGain(), UV.masterGain.gain.setValueAtTime(UV._muted ? 0 : UV._volume, UV.ctx.currentTime), UV.masterGain.connect(UV.ctx.destination)), UV._setup()
          }
        };
      void 0 === (JV = function() {
        return {
          Howler: UV,
          Howl: yV
        }
      }.apply(eV, [])) || (VV.exports = JV), eV.Howler = UV, eV.Howl = yV, "undefined" !== typeof xV.g ? (xV.g.HowlerGlobal = YV, xV.g.Howler = UV, xV.g.Howl = yV, xV.g.Sound = pV) : "undefined" !== typeof window && (window.HowlerGlobal = YV, window.Howler = UV, window.Howl = yV, window.Sound = pV)
    }(),
    function() {
      var VV;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(VV) {
        var eV = this;
        if (!eV.ctx || !eV.ctx.listener) return eV;
        for (var xV = eV._howls.length - 1; xV >= 0; xV--) eV._howls[xV].stereo(VV);
        return eV
      }, HowlerGlobal.prototype.pos = function(VV, eV, xV) {
        var JV = this;
        return JV.ctx && JV.ctx.listener ? (eV = "number" !== typeof eV ? JV._pos[1] : eV, xV = "number" !== typeof xV ? JV._pos[2] : xV, "number" !== typeof VV ? JV._pos : (JV._pos = [VV, eV, xV], "undefined" !== typeof JV.ctx.listener.positionX ? (JV.ctx.listener.positionX.setTargetAtTime(JV._pos[0], Howler.ctx.currentTime, .1), JV.ctx.listener.positionY.setTargetAtTime(JV._pos[1], Howler.ctx.currentTime, .1), JV.ctx.listener.positionZ.setTargetAtTime(JV._pos[2], Howler.ctx.currentTime, .1)) : JV.ctx.listener.setPosition(JV._pos[0], JV._pos[1], JV._pos[2]), JV)) : JV
      }, HowlerGlobal.prototype.orientation = function(VV, eV, xV, JV, YV, UV) {
        var yV = this;
        if (!yV.ctx || !yV.ctx.listener) return yV;
        var pV = yV._orientation;
        return eV = "number" !== typeof eV ? pV[1] : eV, xV = "number" !== typeof xV ? pV[2] : xV, JV = "number" !== typeof JV ? pV[3] : JV, YV = "number" !== typeof YV ? pV[4] : YV, UV = "number" !== typeof UV ? pV[5] : UV, "number" !== typeof VV ? pV : (yV._orientation = [VV, eV, xV, JV, YV, UV], "undefined" !== typeof yV.ctx.listener.forwardX ? (yV.ctx.listener.forwardX.setTargetAtTime(VV, Howler.ctx.currentTime, .1), yV.ctx.listener.forwardY.setTargetAtTime(eV, Howler.ctx.currentTime, .1), yV.ctx.listener.forwardZ.setTargetAtTime(xV, Howler.ctx.currentTime, .1), yV.ctx.listener.upX.setTargetAtTime(JV, Howler.ctx.currentTime, .1), yV.ctx.listener.upY.setTargetAtTime(YV, Howler.ctx.currentTime, .1), yV.ctx.listener.upZ.setTargetAtTime(UV, Howler.ctx.currentTime, .1)) : yV.ctx.listener.setOrientation(VV, eV, xV, JV, YV, UV), yV)
      }, Howl.prototype.init = (VV = Howl.prototype.init, function(eV) {
        var xV = this;
        return xV._orientation = eV.orientation || [1, 0, 0], xV._stereo = eV.stereo || null, xV._pos = eV.pos || null, xV._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof eV.coneInnerAngle ? eV.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof eV.coneOuterAngle ? eV.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof eV.coneOuterGain ? eV.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof eV.distanceModel ? eV.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof eV.maxDistance ? eV.maxDistance : 1e4,
          panningModel: "undefined" !== typeof eV.panningModel ? eV.panningModel : "HRTF",
          refDistance: "undefined" !== typeof eV.refDistance ? eV.refDistance : 1,
          rolloffFactor: "undefined" !== typeof eV.rolloffFactor ? eV.rolloffFactor : 1
        }, xV._onstereo = eV.onstereo ? [{
          bZ: eV.onstereo
        }] : [], xV._onpos = eV.onpos ? [{
          bZ: eV.onpos
        }] : [], xV._onorientation = eV.onorientation ? [{
          bZ: eV.onorientation
        }] : [], VV.call(this, eV)
      }), Howl.prototype.stereo = function(VV, xV) {
        var JV = this;
        if (!JV._webAudio) return JV;
        if ("loaded" !== JV._state) return JV._queue.push({
          event: "stereo",
          action: function() {
            JV.stereo(VV, xV)
          }
        }), JV;
        var YV = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof xV) {
          if ("number" !== typeof VV) return JV._stereo;
          JV._stereo = VV, JV._pos = [VV, 0, 0]
        }
        for (var UV = JV._getSoundIds(xV), yV = 0; yV < UV.length; yV++) {
          var pV = JV._soundById(UV[yV]);
          if (pV) {
            if ("number" !== typeof VV) return pV._stereo;
            pV._stereo = VV, pV._pos = [VV, 0, 0], pV._node && (pV._pannerAttr.panningModel = "equalpower", pV._panner && pV._panner.pan || eV(pV, YV), "spatial" === YV ? "undefined" !== typeof pV._panner.positionX ? (pV._panner.positionX.setValueAtTime(VV, Howler.ctx.currentTime), pV._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), pV._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : pV._panner.setPosition(VV, 0, 0) : pV._panner.pan.setValueAtTime(VV, Howler.ctx.currentTime)), JV._emit("stereo", pV._id)
          }
        }
        return JV
      }, Howl.prototype.pos = function(VV, xV, JV, YV) {
        var UV = this;
        if (!UV._webAudio) return UV;
        if ("loaded" !== UV._state) return UV._queue.push({
          event: "pos",
          action: function() {
            UV.pos(VV, xV, JV, YV)
          }
        }), UV;
        if (xV = "number" !== typeof xV ? 0 : xV, JV = "number" !== typeof JV ? -.5 : JV, "undefined" === typeof YV) {
          if ("number" !== typeof VV) return UV._pos;
          UV._pos = [VV, xV, JV]
        }
        for (var yV = UV._getSoundIds(YV), pV = 0; pV < yV.length; pV++) {
          var QV = UV._soundById(yV[pV]);
          if (QV) {
            if ("number" !== typeof VV) return QV._pos;
            QV._pos = [VV, xV, JV], QV._node && (QV._panner && !QV._panner.pan || eV(QV, "spatial"), "undefined" !== typeof QV._panner.positionX ? (QV._panner.positionX.setValueAtTime(VV, Howler.ctx.currentTime), QV._panner.positionY.setValueAtTime(xV, Howler.ctx.currentTime), QV._panner.positionZ.setValueAtTime(JV, Howler.ctx.currentTime)) : QV._panner.setPosition(VV, xV, JV)), UV._emit("pos", QV._id)
          }
        }
        return UV
      }, Howl.prototype.orientation = function(VV, xV, JV, YV) {
        var UV = this;
        if (!UV._webAudio) return UV;
        if ("loaded" !== UV._state) return UV._queue.push({
          event: "orientation",
          action: function() {
            UV.orientation(VV, xV, JV, YV)
          }
        }), UV;
        if (xV = "number" !== typeof xV ? UV._orientation[1] : xV, JV = "number" !== typeof JV ? UV._orientation[2] : JV, "undefined" === typeof YV) {
          if ("number" !== typeof VV) return UV._orientation;
          UV._orientation = [VV, xV, JV]
        }
        for (var yV = UV._getSoundIds(YV), pV = 0; pV < yV.length; pV++) {
          var QV = UV._soundById(yV[pV]);
          if (QV) {
            if ("number" !== typeof VV) return QV._orientation;
            QV._orientation = [VV, xV, JV], QV._node && (QV._panner || (QV._pos || (QV._pos = UV._pos || [0, 0, -.5]), eV(QV, "spatial")), "undefined" !== typeof QV._panner.orientationX ? (QV._panner.orientationX.setValueAtTime(VV, Howler.ctx.currentTime), QV._panner.orientationY.setValueAtTime(xV, Howler.ctx.currentTime), QV._panner.orientationZ.setValueAtTime(JV, Howler.ctx.currentTime)) : QV._panner.setOrientation(VV, xV, JV)), UV._emit("orientation", QV._id)
          }
        }
        return UV
      }, Howl.prototype.pannerAttr = function() {
        var VV, xV, JV, YV = this,
          UV = arguments;
        if (!YV._webAudio) return YV;
        if (0 === UV.length) return YV._pannerAttr;
        if (1 === UV.length) {
          if ("object" !== typeof UV[0]) return (JV = YV._soundById(parseInt(UV[0], 10))) ? JV._pannerAttr : YV._pannerAttr;
          VV = UV[0], "undefined" === typeof xV && (VV.pannerAttr || (VV.pannerAttr = {
            coneInnerAngle: VV.coneInnerAngle,
            coneOuterAngle: VV.coneOuterAngle,
            coneOuterGain: VV.coneOuterGain,
            distanceModel: VV.distanceModel,
            maxDistance: VV.maxDistance,
            refDistance: VV.refDistance,
            rolloffFactor: VV.rolloffFactor,
            panningModel: VV.panningModel
          }), YV._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof VV.pannerAttr.coneInnerAngle ? VV.pannerAttr.coneInnerAngle : YV._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof VV.pannerAttr.coneOuterAngle ? VV.pannerAttr.coneOuterAngle : YV._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof VV.pannerAttr.coneOuterGain ? VV.pannerAttr.coneOuterGain : YV._coneOuterGain,
            distanceModel: "undefined" !== typeof VV.pannerAttr.distanceModel ? VV.pannerAttr.distanceModel : YV._distanceModel,
            maxDistance: "undefined" !== typeof VV.pannerAttr.maxDistance ? VV.pannerAttr.maxDistance : YV._maxDistance,
            refDistance: "undefined" !== typeof VV.pannerAttr.refDistance ? VV.pannerAttr.refDistance : YV._refDistance,
            rolloffFactor: "undefined" !== typeof VV.pannerAttr.rolloffFactor ? VV.pannerAttr.rolloffFactor : YV._rolloffFactor,
            panningModel: "undefined" !== typeof VV.pannerAttr.panningModel ? VV.pannerAttr.panningModel : YV._panningModel
          })
        } else 2 === UV.length && (VV = UV[0], xV = parseInt(UV[1], 10));
        for (var yV = YV._getSoundIds(xV), pV = 0; pV < yV.length; pV++)
          if (JV = YV._soundById(yV[pV])) {
            var QV = JV._pannerAttr;
            QV = {
              coneInnerAngle: "undefined" !== typeof VV.coneInnerAngle ? VV.coneInnerAngle : QV.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof VV.coneOuterAngle ? VV.coneOuterAngle : QV.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof VV.coneOuterGain ? VV.coneOuterGain : QV.coneOuterGain,
              distanceModel: "undefined" !== typeof VV.distanceModel ? VV.distanceModel : QV.distanceModel,
              maxDistance: "undefined" !== typeof VV.maxDistance ? VV.maxDistance : QV.maxDistance,
              refDistance: "undefined" !== typeof VV.refDistance ? VV.refDistance : QV.refDistance,
              rolloffFactor: "undefined" !== typeof VV.rolloffFactor ? VV.rolloffFactor : QV.rolloffFactor,
              panningModel: "undefined" !== typeof VV.panningModel ? VV.panningModel : QV.panningModel
            };
            var nV = JV._panner;
            nV ? (nV.coneInnerAngle = QV.coneInnerAngle, nV.coneOuterAngle = QV.coneOuterAngle, nV.coneOuterGain = QV.coneOuterGain, nV.distanceModel = QV.distanceModel, nV.maxDistance = QV.maxDistance, nV.refDistance = QV.refDistance, nV.rolloffFactor = QV.rolloffFactor, nV.panningModel = QV.panningModel) : (JV._pos || (JV._pos = YV._pos || [0, 0, -.5]), eV(JV, "spatial"))
          } return YV
      }, Sound.prototype.init = function(VV) {
        return function() {
          var eV = this,
            xV = eV._parent;
          eV._orientation = xV._orientation, eV._stereo = xV._stereo, eV._pos = xV._pos, eV._pannerAttr = xV._pannerAttr, VV.call(this), eV._stereo ? xV.stereo(eV._stereo) : eV._pos && xV.pos(eV._pos[0], eV._pos[1], eV._pos[2], eV._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(VV) {
        return function() {
          var eV = this,
            xV = eV._parent;
          return eV._orientation = xV._orientation, eV._stereo = xV._stereo, eV._pos = xV._pos, eV._pannerAttr = xV._pannerAttr, eV._stereo ? xV.stereo(eV._stereo) : eV._pos ? xV.pos(eV._pos[0], eV._pos[1], eV._pos[2], eV._id) : eV._panner && (eV._panner.disconnect(0), eV._panner = void 0, xV._refreshBuffer(eV)), VV.call(this)
        }
      }(Sound.prototype.reset);
      var eV = function(VV, eV) {
        "spatial" === (eV = eV || "spatial") ? (VV._panner = Howler.ctx.createPanner(), VV._panner.coneInnerAngle = VV._pannerAttr.coneInnerAngle, VV._panner.coneOuterAngle = VV._pannerAttr.coneOuterAngle, VV._panner.coneOuterGain = VV._pannerAttr.coneOuterGain, VV._panner.distanceModel = VV._pannerAttr.distanceModel, VV._panner.maxDistance = VV._pannerAttr.maxDistance, VV._panner.refDistance = VV._pannerAttr.refDistance, VV._panner.rolloffFactor = VV._pannerAttr.rolloffFactor, VV._panner.panningModel = VV._pannerAttr.panningModel, "undefined" !== typeof VV._panner.positionX ? (VV._panner.positionX.setValueAtTime(VV._pos[0], Howler.ctx.currentTime), VV._panner.positionY.setValueAtTime(VV._pos[1], Howler.ctx.currentTime), VV._panner.positionZ.setValueAtTime(VV._pos[2], Howler.ctx.currentTime)) : VV._panner.setPosition(VV._pos[0], VV._pos[1], VV._pos[2]), "undefined" !== typeof VV._panner.orientationX ? (VV._panner.orientationX.setValueAtTime(VV._orientation[0], Howler.ctx.currentTime), VV._panner.orientationY.setValueAtTime(VV._orientation[1], Howler.ctx.currentTime), VV._panner.orientationZ.setValueAtTime(VV._orientation[2], Howler.ctx.currentTime)) : VV._panner.setOrientation(VV._orientation[0], VV._orientation[1], VV._orientation[2])) : (VV._panner = Howler.ctx.createStereoPanner(), VV._panner.pan.setValueAtTime(VV._stereo, Howler.ctx.currentTime)), VV._panner.connect(VV._node), VV.DZ || VV._parent.pause(VV._id, !0).play(VV._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);