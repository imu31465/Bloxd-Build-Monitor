/*! For license information please see fqwnlq.96.653a8674.chunk.js.LICENSE.txt */
export const id = 96;
export const ids = [96];
export const modules = {
  5011: (SS, HS, gS) => {
    var tS;
    ! function() {
      var bS = function() {
        this.init()
      };
      bS.prototype = {
        init: function() {
          var SS = this || XS;
          return SS._counter = 1e3, SS._html5AudioPool = [], SS.html5PoolSize = 10, SS._codecs = {}, SS._howls = [], SS._muted = !1, SS._volume = 1, SS._canPlayEvent = "canplaythrough", SS._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, SS.masterGain = null, SS.noAudio = !1, SS.usingWebAudio = !0, SS.autoSuspend = !0, SS.ctx = null, SS.autoUnlock = !0, SS._setup(), SS
        },
        volume: function(SS) {
          var HS = this || XS;
          if (SS = parseFloat(SS), HS.ctx || aS(), "undefined" !== typeof SS && SS >= 0 && SS <= 1) {
            if (HS._volume = SS, HS._muted) return HS;
            HS.usingWebAudio && HS.masterGain.gain.setValueAtTime(SS, XS.ctx.currentTime);
            for (var gS = 0; gS < HS._howls.length; gS++)
              if (!HS._howls[gS]._webAudio)
                for (var tS = HS._howls[gS]._getSoundIds(), bS = 0; bS < tS.length; bS++) {
                  var xS = HS._howls[gS]._soundById(tS[bS]);
                  xS && xS._node && (xS._node.volume = xS._volume * SS)
                }
            return HS
          }
          return HS._volume
        },
        mute: function(SS) {
          var HS = this || XS;
          HS.ctx || aS(), HS._muted = SS, HS.usingWebAudio && HS.masterGain.gain.setValueAtTime(SS ? 0 : HS._volume, XS.ctx.currentTime);
          for (var gS = 0; gS < HS._howls.length; gS++)
            if (!HS._howls[gS]._webAudio)
              for (var tS = HS._howls[gS]._getSoundIds(), bS = 0; bS < tS.length; bS++) {
                var xS = HS._howls[gS]._soundById(tS[bS]);
                xS && xS._node && (xS._node.muted = !!SS || xS._muted)
              }
          return HS
        },
        stop: function() {
          for (var SS = this || XS, HS = 0; HS < SS._howls.length; HS++) SS._howls[HS].stop();
          return SS
        },
        unload: function() {
          for (var SS = this || XS, HS = SS._howls.length - 1; HS >= 0; HS--) SS._howls[HS].unload();
          return SS.usingWebAudio && SS.ctx && "undefined" !== typeof SS.ctx.close && (SS.ctx.close(), SS.ctx = null, aS()), SS
        },
        codecs: function(SS) {
          return (this || XS)._codecs[SS.replace(/^x-/, "")]
        },
        _setup: function() {
          var SS = this || XS;
          if (SS.state = SS.ctx && SS.ctx.state || "suspended", SS._autoSuspend(), !SS.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (SS._canPlayEvent = "canplay")
            } catch (HS) {
              SS.noAudio = !0
            } else SS.noAudio = !0;
          try {
            (new Audio).muted && (SS.noAudio = !0)
          } catch (HS) {}
          return SS.noAudio || SS._setupCodecs(), SS
        },
        _setupCodecs: function() {
          var SS = this || XS,
            HS = null;
          try {
            HS = "undefined" !== typeof Audio ? new Audio : null
          } catch (IS) {
            return SS
          }
          if (!HS || "function" !== typeof HS.canPlayType) return SS;
          var gS = HS.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            tS = SS._navigator ? SS._navigator.userAgent : "",
            bS = tS.match(/OPR\/([0-6].)/g),
            xS = bS && parseInt(bS[0].split("/")[1], 10) < 33,
            NS = -1 !== tS.indexOf("Safari") && -1 === tS.indexOf("Chrome"),
            qS = tS.match(/Version\/(.*?) /),
            uS = NS && qS && parseInt(qS[1], 10) < 15;
          return SS._codecs = {
            mp3: !(xS || !gS && !HS.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!gS,
            opus: !!HS.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!HS.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!HS.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(HS.canPlayType('audio/wav; codecs="1"') || HS.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!HS.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!HS.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(HS.canPlayType("audio/x-m4a;") || HS.canPlayType("audio/m4a;") || HS.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(HS.canPlayType("audio/x-m4b;") || HS.canPlayType("audio/m4b;") || HS.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(HS.canPlayType("audio/x-mp4;") || HS.canPlayType("audio/mp4;") || HS.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(uS || !HS.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(uS || !HS.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!HS.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(HS.canPlayType("audio/x-flac;") || HS.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, SS
        },
        _unlockAudio: function() {
          var SS = this || XS;
          if (!SS._audioUnlocked && SS.ctx) {
            SS._audioUnlocked = !1, SS.autoUnlock = !1, SS._mobileUnloaded || 44100 === SS.ctx.sampleRate || (SS._mobileUnloaded = !0, SS.unload()), SS._scratchBuffer = SS.ctx.createBuffer(1, 1, 22050);
            var HS = function(gS) {
              for (; SS._html5AudioPool.length < SS.html5PoolSize;) try {
                var tS = new Audio;
                tS._unlocked = !0, SS._releaseHtml5Audio(tS)
              } catch (gS) {
                SS.noAudio = !0;
                break
              }
              for (var bS = 0; bS < SS._howls.length; bS++)
                if (!SS._howls[bS]._webAudio)
                  for (var XS = SS._howls[bS]._getSoundIds(), xS = 0; xS < XS.length; xS++) {
                    var NS = SS._howls[bS]._soundById(XS[xS]);
                    NS && NS._node && !NS._node._unlocked && (NS._node._unlocked = !0, NS._node.load())
                  }
              SS._autoResume();
              var qS = SS.ctx.createBufferSource();
              qS.buffer = SS._scratchBuffer, qS.connect(SS.ctx.destination), "undefined" === typeof qS.start ? qS.noteOn(0) : qS.start(0), "function" === typeof SS.ctx.resume && SS.ctx.resume(), qS.onended = function() {
                qS.disconnect(0), SS._audioUnlocked = !0, document.removeEventListener("touchstart", HS, !0), document.removeEventListener("touchend", HS, !0), document.removeEventListener("click", HS, !0), document.removeEventListener("keydown", HS, !0);
                for (var gS = 0; gS < SS._howls.length; gS++) SS._howls[gS]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", HS, !0), document.addEventListener("touchend", HS, !0), document.addEventListener("click", HS, !0), document.addEventListener("keydown", HS, !0), SS
          }
        },
        _obtainHtml5Audio: function() {
          var SS = this || XS;
          if (SS._html5AudioPool.length) return SS._html5AudioPool.pop();
          var HS = (new Audio).play();
          return HS && "undefined" !== typeof Promise && (HS instanceof Promise || "function" === typeof HS.then) && HS.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(SS) {
          var HS = this || XS;
          return SS._unlocked && HS._html5AudioPool.push(SS), HS
        },
        _autoSuspend: function() {
          var SS = this;
          if (SS.autoSuspend && SS.ctx && "undefined" !== typeof SS.ctx.suspend && XS.usingWebAudio) {
            for (var HS = 0; HS < SS._howls.length; HS++)
              if (SS._howls[HS]._webAudio)
                for (var gS = 0; gS < SS._howls[HS]._sounds.length; gS++)
                  if (!SS._howls[HS]._sounds[gS].KD) return SS;
            return SS._suspendTimer && clearTimeout(SS._suspendTimer), SS._suspendTimer = setTimeout((function() {
              if (SS.autoSuspend) {
                SS._suspendTimer = null, SS.state = "suspending";
                var HS = function() {
                  SS.state = "suspended", SS._resumeAfterSuspend && (delete SS._resumeAfterSuspend, SS._autoResume())
                };
                SS.ctx.suspend().then(HS, HS)
              }
            }), 3e4), SS
          }
        },
        _autoResume: function() {
          var SS = this;
          if (SS.ctx && "undefined" !== typeof SS.ctx.resume && XS.usingWebAudio) return "running" === SS.state && "interrupted" !== SS.ctx.state && SS._suspendTimer ? (clearTimeout(SS._suspendTimer), SS._suspendTimer = null) : "suspended" === SS.state || "running" === SS.state && "interrupted" === SS.ctx.state ? (SS.ctx.resume().then((function() {
            SS.state = "running";
            for (var HS = 0; HS < SS._howls.length; HS++) SS._howls[HS]._emit("resume")
          })), SS._suspendTimer && (clearTimeout(SS._suspendTimer), SS._suspendTimer = null)) : "suspending" === SS.state && (SS._resumeAfterSuspend = !0), SS
        }
      };
      var XS = new bS,
        xS = function(SS) {
          SS.src && 0 !== SS.src.length ? this.init(SS) : console.error("An array of source files must be passed with any new Howl.")
        };
      xS.prototype = {
        init: function(SS) {
          var HS = this;
          return XS.ctx || aS(), HS._autoplay = SS.autoplay || !1, HS._format = "string" !== typeof SS.format ? SS.format : [SS.format], HS._html5 = SS.html5 || !1, HS._muted = SS.mute || !1, HS._loop = SS.loop || !1, HS._pool = SS.pool || 5, HS._preload = "boolean" !== typeof SS.preload && "metadata" !== SS.preload || SS.preload, HS._rate = SS.rate || 1, HS._sprite = SS.sprite || {}, HS._src = "string" !== typeof SS.src ? SS.src : [SS.src], HS._volume = void 0 !== SS.volume ? SS.volume : 1, HS._xhr = {
            method: SS.xhr && SS.xhr.method ? SS.xhr.method : "GET",
            headers: SS.xhr && SS.xhr.headers ? SS.xhr.headers : null,
            withCredentials: !(!SS.xhr || !SS.xhr.withCredentials) && SS.xhr.withCredentials
          }, HS._duration = 0, HS._state = "unloaded", HS._sounds = [], HS._endTimers = {}, HS._queue = [], HS._playLock = !1, HS._onend = SS.onend ? [{
            xK: SS.onend
          }] : [], HS._onfade = SS.onfade ? [{
            xK: SS.onfade
          }] : [], HS._onload = SS.onload ? [{
            xK: SS.onload
          }] : [], HS._onloaderror = SS.onloaderror ? [{
            xK: SS.onloaderror
          }] : [], HS._onplayerror = SS.onplayerror ? [{
            xK: SS.onplayerror
          }] : [], HS._onpause = SS.onpause ? [{
            xK: SS.onpause
          }] : [], HS._onplay = SS.onplay ? [{
            xK: SS.onplay
          }] : [], HS._onstop = SS.onstop ? [{
            xK: SS.onstop
          }] : [], HS._onmute = SS.onmute ? [{
            xK: SS.onmute
          }] : [], HS._onvolume = SS.onvolume ? [{
            xK: SS.onvolume
          }] : [], HS._onrate = SS.onrate ? [{
            xK: SS.onrate
          }] : [], HS._onseek = SS.onseek ? [{
            xK: SS.onseek
          }] : [], HS._onunlock = SS.onunlock ? [{
            xK: SS.onunlock
          }] : [], HS._onresume = [], HS._webAudio = XS.usingWebAudio && !HS._html5, "undefined" !== typeof XS.ctx && XS.ctx && XS.autoUnlock && XS._unlockAudio(), XS._howls.push(HS), HS._autoplay && HS._queue.push({
            event: "play",
            action: function() {
              HS.play()
            }
          }), HS._preload && "none" !== HS._preload && HS.load(), HS
        },
        load: function() {
          var SS = this,
            HS = null;
          if (XS.noAudio) SS._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof SS._src && (SS._src = [SS._src]);
            for (var gS = 0; gS < SS._src.length; gS++) {
              var tS, bS;
              if (SS._format && SS._format[gS]) tS = SS._format[gS];
              else {
                if ("string" !== typeof(bS = SS._src[gS])) {
                  SS._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(tS = /^data:audio\/([^;,]+);/i.exec(bS)) || (tS = /\.([^.]+)$/.exec(bS.split("?", 1)[0])), tS && (tS = tS[1].toLowerCase())
              }
              if (tS || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), tS && XS.codecs(tS)) {
                HS = SS._src[gS];
                break
              }
            }
            if (HS) return SS._src = HS, SS._state = "loading", "https:" === window.location.protocol && "http:" === HS.slice(0, 5) && (SS._html5 = !0, SS._webAudio = !1), new NS(SS), SS._webAudio && uS(SS), SS;
            SS._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(SS, HS) {
          var gS = this,
            tS = null;
          if ("number" === typeof SS) tS = SS, SS = null;
          else {
            if ("string" === typeof SS && "loaded" === gS._state && !gS._sprite[SS]) return null;
            if ("undefined" === typeof SS && (SS = "__default", !gS._playLock)) {
              for (var bS = 0, xS = 0; xS < gS._sounds.length; xS++) gS._sounds[xS].KD && !gS._sounds[xS]._ended && (bS++, tS = gS._sounds[xS]._id);
              1 === bS ? SS = null : tS = null
            }
          }
          var NS = tS ? gS._soundById(tS) : gS._inactiveSound();
          if (!NS) return null;
          if (tS && !SS && (SS = NS._sprite || "__default"), "loaded" !== gS._state) {
            NS._sprite = SS, NS._ended = !1;
            var qS = NS._id;
            return gS._queue.push({
              event: "play",
              action: function() {
                gS.play(qS)
              }
            }), qS
          }
          if (tS && !NS.KD) return HS || gS._loadQueue("play"), NS._id;
          gS._webAudio && XS._autoResume();
          var uS = Math.max(0, NS._seek > 0 ? NS._seek : gS._sprite[SS][0] / 1e3),
            IS = Math.max(0, (gS._sprite[SS][0] + gS._sprite[SS][1]) / 1e3 - uS),
            fS = 1e3 * IS / Math.abs(NS._rate),
            kS = gS._sprite[SS][0] / 1e3,
            aS = (gS._sprite[SS][0] + gS._sprite[SS][1]) / 1e3;
          NS._sprite = SS, NS._ended = !1;
          var KS = function() {
            NS.KD = !1, NS._seek = uS, NS._start = kS, NS._stop = aS, NS._loop = !(!NS._loop && !gS._sprite[SS][2])
          };
          if (!(uS >= aS)) {
            var jS = NS._node;
            if (gS._webAudio) {
              var GS = function() {
                gS._playLock = !1, KS(), gS._refreshBuffer(NS);
                var SS = NS._muted || gS._muted ? 0 : NS._volume;
                jS.gain.setValueAtTime(SS, XS.ctx.currentTime), NS._playStart = XS.ctx.currentTime, "undefined" === typeof jS.bufferSource.start ? NS._loop ? jS.bufferSource.noteGrainOn(0, uS, 86400) : jS.bufferSource.noteGrainOn(0, uS, IS) : NS._loop ? jS.bufferSource.start(0, uS, 86400) : jS.bufferSource.start(0, uS, IS), fS !== 1 / 0 && (gS._endTimers[NS._id] = setTimeout(gS._ended.bind(gS, NS), fS)), HS || setTimeout((function() {
                  gS._emit("play", NS._id), gS._loadQueue()
                }), 0)
              };
              "running" === XS.state && "interrupted" !== XS.ctx.state ? GS() : (gS._playLock = !0, gS.once("resume", GS), gS._clearTimer(NS._id))
            } else {
              var CS = function() {
                jS.currentTime = uS, jS.muted = NS._muted || gS._muted || XS._muted || jS.muted, jS.volume = NS._volume * XS.volume(), jS.playbackRate = NS._rate;
                try {
                  var tS = jS.play();
                  if (tS && "undefined" !== typeof Promise && (tS instanceof Promise || "function" === typeof tS.then) ? (gS._playLock = !0, KS(), tS.then((function() {
                      gS._playLock = !1, jS._unlocked = !0, HS ? gS._loadQueue() : gS._emit("play", NS._id)
                    })).catch((function() {
                      gS._playLock = !1, gS._emit("playerror", NS._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), NS._ended = !0, NS.KD = !0
                    }))) : HS || (gS._playLock = !1, KS(), gS._emit("play", NS._id)), jS.playbackRate = NS._rate, jS.paused) return void gS._emit("playerror", NS._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== SS || NS._loop ? gS._endTimers[NS._id] = setTimeout(gS._ended.bind(gS, NS), fS) : (gS._endTimers[NS._id] = function() {
                    gS._ended(NS), jS.removeEventListener("ended", gS._endTimers[NS._id], !1)
                  }, jS.addEventListener("ended", gS._endTimers[NS._id], !1))
                } catch (bS) {
                  gS._emit("playerror", NS._id, bS)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === jS.src && (jS.src = gS._src, jS.load());
              var nS = window && window.ejecta || !jS.readyState && XS._navigator.isCocoonJS;
              if (jS.readyState >= 3 || nS) CS();
              else {
                gS._playLock = !0, gS._state = "loading";
                var PS = function() {
                  gS._state = "loaded", CS(), jS.removeEventListener(XS._canPlayEvent, PS, !1)
                };
                jS.addEventListener(XS._canPlayEvent, PS, !1), gS._clearTimer(NS._id)
              }
            }
            return NS._id
          }
          gS._ended(NS)
        },
        pause: function(SS) {
          var HS = this;
          if ("loaded" !== HS._state || HS._playLock) return HS._queue.push({
            event: "pause",
            action: function() {
              HS.pause(SS)
            }
          }), HS;
          for (var gS = HS._getSoundIds(SS), tS = 0; tS < gS.length; tS++) {
            HS._clearTimer(gS[tS]);
            var bS = HS._soundById(gS[tS]);
            if (bS && !bS.KD && (bS._seek = HS.seek(gS[tS]), bS._rateSeek = 0, bS.KD = !0, HS._stopFade(gS[tS]), bS._node))
              if (HS._webAudio) {
                if (!bS._node.bufferSource) continue;
                "undefined" === typeof bS._node.bufferSource.stop ? bS._node.bufferSource.noteOff(0) : bS._node.bufferSource.stop(0), HS._cleanBuffer(bS._node)
              } else isNaN(bS._node.duration) && bS._node.duration !== 1 / 0 || bS._node.pause();
            arguments[1] || HS._emit("pause", bS ? bS._id : null)
          }
          return HS
        },
        stop: function(SS, HS) {
          var gS = this;
          if ("loaded" !== gS._state || gS._playLock) return gS._queue.push({
            event: "stop",
            action: function() {
              gS.stop(SS)
            }
          }), gS;
          for (var tS = gS._getSoundIds(SS), bS = 0; bS < tS.length; bS++) {
            gS._clearTimer(tS[bS]);
            var XS = gS._soundById(tS[bS]);
            XS && (XS._seek = XS._start || 0, XS._rateSeek = 0, XS.KD = !0, XS._ended = !0, gS._stopFade(tS[bS]), XS._node && (gS._webAudio ? XS._node.bufferSource && ("undefined" === typeof XS._node.bufferSource.stop ? XS._node.bufferSource.noteOff(0) : XS._node.bufferSource.stop(0), gS._cleanBuffer(XS._node)) : isNaN(XS._node.duration) && XS._node.duration !== 1 / 0 || (XS._node.currentTime = XS._start || 0, XS._node.pause(), XS._node.duration === 1 / 0 && gS._clearSound(XS._node))), HS || gS._emit("stop", XS._id))
          }
          return gS
        },
        mute: function(SS, HS) {
          var gS = this;
          if ("loaded" !== gS._state || gS._playLock) return gS._queue.push({
            event: "mute",
            action: function() {
              gS.mute(SS, HS)
            }
          }), gS;
          if ("undefined" === typeof HS) {
            if ("boolean" !== typeof SS) return gS._muted;
            gS._muted = SS
          }
          for (var tS = gS._getSoundIds(HS), bS = 0; bS < tS.length; bS++) {
            var xS = gS._soundById(tS[bS]);
            xS && (xS._muted = SS, xS._interval && gS._stopFade(xS._id), gS._webAudio && xS._node ? xS._node.gain.setValueAtTime(SS ? 0 : xS._volume, XS.ctx.currentTime) : xS._node && (xS._node.muted = !!XS._muted || SS), gS._emit("mute", xS._id))
          }
          return gS
        },
        volume: function() {
          var SS, HS, gS, tS = this,
            bS = arguments;
          if (0 === bS.length) return tS._volume;
          if (1 === bS.length || 2 === bS.length && "undefined" === typeof bS[1] ? tS._getSoundIds().indexOf(bS[0]) >= 0 ? HS = parseInt(bS[0], 10) : SS = parseFloat(bS[0]) : bS.length >= 2 && (SS = parseFloat(bS[0]), HS = parseInt(bS[1], 10)), !("undefined" !== typeof SS && SS >= 0 && SS <= 1)) return (gS = HS ? tS._soundById(HS) : tS._sounds[0]) ? gS._volume : 0;
          if ("loaded" !== tS._state || tS._playLock) return tS._queue.push({
            event: "volume",
            action: function() {
              tS.volume.apply(tS, bS)
            }
          }), tS;
          "undefined" === typeof HS && (tS._volume = SS), HS = tS._getSoundIds(HS);
          for (var xS = 0; xS < HS.length; xS++)(gS = tS._soundById(HS[xS])) && (gS._volume = SS, bS[2] || tS._stopFade(HS[xS]), tS._webAudio && gS._node && !gS._muted ? gS._node.gain.setValueAtTime(SS, XS.ctx.currentTime) : gS._node && !gS._muted && (gS._node.volume = SS * XS.volume()), tS._emit("volume", gS._id));
          return tS
        },
        fade: function(SS, HS, gS, tS) {
          var bS = this;
          if ("loaded" !== bS._state || bS._playLock) return bS._queue.push({
            event: "fade",
            action: function() {
              bS.fade(SS, HS, gS, tS)
            }
          }), bS;
          SS = Math.min(Math.max(0, parseFloat(SS)), 1), HS = Math.min(Math.max(0, parseFloat(HS)), 1), gS = parseFloat(gS), bS.volume(SS, tS);
          for (var xS = bS._getSoundIds(tS), NS = 0; NS < xS.length; NS++) {
            var qS = bS._soundById(xS[NS]);
            if (qS) {
              if (tS || bS._stopFade(xS[NS]), bS._webAudio && !qS._muted) {
                var uS = XS.ctx.currentTime,
                  IS = uS + gS / 1e3;
                qS._volume = SS, qS._node.gain.setValueAtTime(SS, uS), qS._node.gain.linearRampToValueAtTime(HS, IS)
              }
              bS._startFadeInterval(qS, SS, HS, gS, xS[NS], "undefined" === typeof tS)
            }
          }
          return bS
        },
        _startFadeInterval: function(SS, HS, gS, tS, bS, XS) {
          var xS = this,
            NS = HS,
            qS = gS - HS,
            uS = Math.abs(qS / .01),
            IS = Math.max(4, uS > 0 ? tS / uS : tS),
            fS = Date.now();
          SS._fadeTo = gS, SS._interval = setInterval((function() {
            var bS = (Date.now() - fS) / tS;
            fS = Date.now(), NS += qS * bS, NS = Math.round(100 * NS) / 100, NS = qS < 0 ? Math.max(gS, NS) : Math.min(gS, NS), xS._webAudio ? SS._volume = NS : xS.volume(NS, SS._id, !0), XS && (xS._volume = NS), (gS < HS && NS <= gS || gS > HS && NS >= gS) && (clearInterval(SS._interval), SS._interval = null, SS._fadeTo = null, xS.volume(gS, SS._id), xS._emit("fade", SS._id))
          }), IS)
        },
        _stopFade: function(SS) {
          var HS = this,
            gS = HS._soundById(SS);
          return gS && gS._interval && (HS._webAudio && gS._node.gain.cancelScheduledValues(XS.ctx.currentTime), clearInterval(gS._interval), gS._interval = null, HS.volume(gS._fadeTo, SS), gS._fadeTo = null, HS._emit("fade", SS)), HS
        },
        loop: function() {
          var SS, HS, gS, tS = this,
            bS = arguments;
          if (0 === bS.length) return tS._loop;
          if (1 === bS.length) {
            if ("boolean" !== typeof bS[0]) return !!(gS = tS._soundById(parseInt(bS[0], 10))) && gS._loop;
            SS = bS[0], tS._loop = SS
          } else 2 === bS.length && (SS = bS[0], HS = parseInt(bS[1], 10));
          for (var XS = tS._getSoundIds(HS), xS = 0; xS < XS.length; xS++)(gS = tS._soundById(XS[xS])) && (gS._loop = SS, tS._webAudio && gS._node && gS._node.bufferSource && (gS._node.bufferSource.loop = SS, SS && (gS._node.bufferSource.loopStart = gS._start || 0, gS._node.bufferSource.loopEnd = gS._stop, tS.playing(XS[xS]) && (tS.pause(XS[xS], !0), tS.play(XS[xS], !0)))));
          return tS
        },
        rate: function() {
          var SS, HS, gS, tS = this,
            bS = arguments;
          if (0 === bS.length) HS = tS._sounds[0]._id;
          else if (1 === bS.length) {
            tS._getSoundIds().indexOf(bS[0]) >= 0 ? HS = parseInt(bS[0], 10) : SS = parseFloat(bS[0])
          } else 2 === bS.length && (SS = parseFloat(bS[0]), HS = parseInt(bS[1], 10));
          if ("number" !== typeof SS) return (gS = tS._soundById(HS)) ? gS._rate : tS._rate;
          if ("loaded" !== tS._state || tS._playLock) return tS._queue.push({
            event: "rate",
            action: function() {
              tS.rate.apply(tS, bS)
            }
          }), tS;
          "undefined" === typeof HS && (tS._rate = SS), HS = tS._getSoundIds(HS);
          for (var xS = 0; xS < HS.length; xS++)
            if (gS = tS._soundById(HS[xS])) {
              tS.playing(HS[xS]) && (gS._rateSeek = tS.seek(HS[xS]), gS._playStart = tS._webAudio ? XS.ctx.currentTime : gS._playStart), gS._rate = SS, tS._webAudio && gS._node && gS._node.bufferSource ? gS._node.bufferSource.playbackRate.setValueAtTime(SS, XS.ctx.currentTime) : gS._node && (gS._node.playbackRate = SS);
              var NS = tS.seek(HS[xS]),
                qS = 1e3 * ((tS._sprite[gS._sprite][0] + tS._sprite[gS._sprite][1]) / 1e3 - NS) / Math.abs(gS._rate);
              !tS._endTimers[HS[xS]] && gS.KD || (tS._clearTimer(HS[xS]), tS._endTimers[HS[xS]] = setTimeout(tS._ended.bind(tS, gS), qS)), tS._emit("rate", gS._id)
            } return tS
        },
        seek: function() {
          var SS, HS, gS = this,
            tS = arguments;
          if (0 === tS.length) gS._sounds.length && (HS = gS._sounds[0]._id);
          else if (1 === tS.length) {
            gS._getSoundIds().indexOf(tS[0]) >= 0 ? HS = parseInt(tS[0], 10) : gS._sounds.length && (HS = gS._sounds[0]._id, SS = parseFloat(tS[0]))
          } else 2 === tS.length && (SS = parseFloat(tS[0]), HS = parseInt(tS[1], 10));
          if ("undefined" === typeof HS) return 0;
          if ("number" === typeof SS && ("loaded" !== gS._state || gS._playLock)) return gS._queue.push({
            event: "seek",
            action: function() {
              gS.seek.apply(gS, tS)
            }
          }), gS;
          var bS = gS._soundById(HS);
          if (bS) {
            if (!("number" === typeof SS && SS >= 0)) {
              if (gS._webAudio) {
                var xS = gS.playing(HS) ? XS.ctx.currentTime - bS._playStart : 0,
                  NS = bS._rateSeek ? bS._rateSeek - bS._seek : 0;
                return bS._seek + (NS + xS * Math.abs(bS._rate))
              }
              return bS._node.currentTime
            }
            var qS = gS.playing(HS);
            qS && gS.pause(HS, !0), bS._seek = SS, bS._ended = !1, gS._clearTimer(HS), gS._webAudio || !bS._node || isNaN(bS._node.duration) || (bS._node.currentTime = SS);
            var uS = function() {
              qS && gS.play(HS, !0), gS._emit("seek", HS)
            };
            if (qS && !gS._webAudio) {
              var IS = function() {
                gS._playLock ? setTimeout(IS, 0) : uS()
              };
              setTimeout(IS, 0)
            } else uS()
          }
          return gS
        },
        playing: function(SS) {
          var HS = this;
          if ("number" === typeof SS) {
            var gS = HS._soundById(SS);
            return !!gS && !gS.KD
          }
          for (var tS = 0; tS < HS._sounds.length; tS++)
            if (!HS._sounds[tS].KD) return !0;
          return !1
        },
        duration: function(SS) {
          var HS = this,
            gS = HS._duration,
            tS = HS._soundById(SS);
          return tS && (gS = HS._sprite[tS._sprite][1] / 1e3), gS
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var SS = this, HS = SS._sounds, gS = 0; gS < HS.length; gS++) HS[gS].KD || SS.stop(HS[gS]._id), SS._webAudio || (SS._clearSound(HS[gS]._node), HS[gS]._node.removeEventListener("error", HS[gS]._errorFn, !1), HS[gS]._node.removeEventListener(XS._canPlayEvent, HS[gS]._loadFn, !1), HS[gS]._node.removeEventListener("ended", HS[gS]._endFn, !1), XS._releaseHtml5Audio(HS[gS]._node)), delete HS[gS]._node, SS._clearTimer(HS[gS]._id);
          var tS = XS._howls.indexOf(SS);
          tS >= 0 && XS._howls.splice(tS, 1);
          var bS = !0;
          for (gS = 0; gS < XS._howls.length; gS++)
            if (XS._howls[gS]._src === SS._src || SS._src.indexOf(XS._howls[gS]._src) >= 0) {
              bS = !1;
              break
            } return qS && bS && delete qS[SS._src], XS.noAudio = !1, SS._state = "unloaded", SS._sounds = [], SS = null, null
        },
        on: function(SS, HS, gS, tS) {
          var bS = this["_on" + SS];
          return "function" === typeof HS && bS.push(tS ? {
            id: gS,
            xK: HS,
            once: tS
          } : {
            id: gS,
            xK: HS
          }), this
        },
        off: function(SS, HS, gS) {
          var tS = this,
            bS = tS["_on" + SS],
            XS = 0;
          if ("number" === typeof HS && (gS = HS, HS = null), HS || gS)
            for (XS = 0; XS < bS.length; XS++) {
              var xS = gS === bS[XS].id;
              if (HS === bS[XS].xK && xS || !HS && xS) {
                bS.splice(XS, 1);
                break
              }
            } else if (SS) tS["_on" + SS] = [];
            else {
              var NS = Object.keys(tS);
              for (XS = 0; XS < NS.length; XS++) 0 === NS[XS].indexOf("_on") && Array.isArray(tS[NS[XS]]) && (tS[NS[XS]] = [])
            } return tS
        },
        once: function(SS, HS, gS) {
          return this.on(SS, HS, gS, 1), this
        },
        _emit: function(SS, HS, gS) {
          for (var tS = this, bS = tS["_on" + SS], XS = bS.length - 1; XS >= 0; XS--) bS[XS].id && bS[XS].id !== HS && "load" !== SS || (setTimeout(function(SS) {
            SS.call(this, HS, gS)
          }.bind(tS, bS[XS].xK), 0), bS[XS].once && tS.off(SS, bS[XS].xK, bS[XS].id));
          return tS._loadQueue(SS), tS
        },
        _loadQueue: function(SS) {
          var HS = this;
          if (HS._queue.length > 0) {
            var gS = HS._queue[0];
            gS.event === SS && (HS._queue.shift(), HS._loadQueue()), SS || gS.action()
          }
          return HS
        },
        _ended: function(SS) {
          var HS = this,
            gS = SS._sprite;
          if (!HS._webAudio && SS._node && !SS._node.paused && !SS._node.ended && SS._node.currentTime < SS._stop) return setTimeout(HS._ended.bind(HS, SS), 100), HS;
          var tS = !(!SS._loop && !HS._sprite[gS][2]);
          if (HS._emit("end", SS._id), !HS._webAudio && tS && HS.stop(SS._id, !0).play(SS._id), HS._webAudio && tS) {
            HS._emit("play", SS._id), SS._seek = SS._start || 0, SS._rateSeek = 0, SS._playStart = XS.ctx.currentTime;
            var bS = 1e3 * (SS._stop - SS._start) / Math.abs(SS._rate);
            HS._endTimers[SS._id] = setTimeout(HS._ended.bind(HS, SS), bS)
          }
          return HS._webAudio && !tS && (SS.KD = !0, SS._ended = !0, SS._seek = SS._start || 0, SS._rateSeek = 0, HS._clearTimer(SS._id), HS._cleanBuffer(SS._node), XS._autoSuspend()), HS._webAudio || tS || HS.stop(SS._id, !0), HS
        },
        _clearTimer: function(SS) {
          var HS = this;
          if (HS._endTimers[SS]) {
            if ("function" !== typeof HS._endTimers[SS]) clearTimeout(HS._endTimers[SS]);
            else {
              var gS = HS._soundById(SS);
              gS && gS._node && gS._node.removeEventListener("ended", HS._endTimers[SS], !1)
            }
            delete HS._endTimers[SS]
          }
          return HS
        },
        _soundById: function(SS) {
          for (var HS = this, gS = 0; gS < HS._sounds.length; gS++)
            if (SS === HS._sounds[gS]._id) return HS._sounds[gS];
          return null
        },
        _inactiveSound: function() {
          var SS = this;
          SS._drain();
          for (var HS = 0; HS < SS._sounds.length; HS++)
            if (SS._sounds[HS]._ended) return SS._sounds[HS].reset();
          return new NS(SS)
        },
        _drain: function() {
          var SS = this,
            HS = SS._pool,
            gS = 0,
            tS = 0;
          if (!(SS._sounds.length < HS)) {
            for (tS = 0; tS < SS._sounds.length; tS++) SS._sounds[tS]._ended && gS++;
            for (tS = SS._sounds.length - 1; tS >= 0; tS--) {
              if (gS <= HS) return;
              SS._sounds[tS]._ended && (SS._webAudio && SS._sounds[tS]._node && SS._sounds[tS]._node.disconnect(0), SS._sounds.splice(tS, 1), gS--)
            }
          }
        },
        _getSoundIds: function(SS) {
          if ("undefined" === typeof SS) {
            for (var HS = [], gS = 0; gS < this._sounds.length; gS++) HS.push(this._sounds[gS]._id);
            return HS
          }
          return [SS]
        },
        _refreshBuffer: function(SS) {
          return SS._node.bufferSource = XS.ctx.createBufferSource(), SS._node.bufferSource.buffer = qS[this._src], SS._panner ? SS._node.bufferSource.connect(SS._panner) : SS._node.bufferSource.connect(SS._node), SS._node.bufferSource.loop = SS._loop, SS._loop && (SS._node.bufferSource.loopStart = SS._start || 0, SS._node.bufferSource.loopEnd = SS._stop || 0), SS._node.bufferSource.playbackRate.setValueAtTime(SS._rate, XS.ctx.currentTime), this
        },
        _cleanBuffer: function(SS) {
          var HS = XS._navigator && XS._navigator.vendor.indexOf("Apple") >= 0;
          if (XS._scratchBuffer && SS.bufferSource && (SS.bufferSource.onended = null, SS.bufferSource.disconnect(0), HS)) try {
            SS.bufferSource.buffer = XS._scratchBuffer
          } catch (gS) {}
          return SS.bufferSource = null, this
        },
        _clearSound: function(SS) {
          /MSIE |Trident\//.test(XS._navigator && XS._navigator.userAgent) || (SS.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var NS = function(SS) {
        this._parent = SS, this.init()
      };
      NS.prototype = {
        init: function() {
          var SS = this,
            HS = SS._parent;
          return SS._muted = HS._muted, SS._loop = HS._loop, SS._volume = HS._volume, SS._rate = HS._rate, SS._seek = 0, SS.KD = !0, SS._ended = !0, SS._sprite = "__default", SS._id = ++XS._counter, HS._sounds.push(SS), SS.create(), SS
        },
        create: function() {
          var SS = this,
            HS = SS._parent,
            gS = XS._muted || SS._muted || SS._parent._muted ? 0 : SS._volume;
          return HS._webAudio ? (SS._node = "undefined" === typeof XS.ctx.createGain ? XS.ctx.createGainNode() : XS.ctx.createGain(), SS._node.gain.setValueAtTime(gS, XS.ctx.currentTime), SS._node.paused = !0, SS._node.connect(XS.masterGain)) : XS.noAudio || (SS._node = XS._obtainHtml5Audio(), SS._errorFn = SS._errorListener.bind(SS), SS._node.addEventListener("error", SS._errorFn, !1), SS._loadFn = SS._loadListener.bind(SS), SS._node.addEventListener(XS._canPlayEvent, SS._loadFn, !1), SS._endFn = SS._endListener.bind(SS), SS._node.addEventListener("ended", SS._endFn, !1), SS._node.src = HS._src, SS._node.preload = !0 === HS._preload ? "auto" : HS._preload, SS._node.volume = gS * XS.volume(), SS._node.load()), SS
        },
        reset: function() {
          var SS = this,
            HS = SS._parent;
          return SS._muted = HS._muted, SS._loop = HS._loop, SS._volume = HS._volume, SS._rate = HS._rate, SS._seek = 0, SS._rateSeek = 0, SS.KD = !0, SS._ended = !0, SS._sprite = "__default", SS._id = ++XS._counter, SS
        },
        _errorListener: function() {
          var SS = this;
          SS._parent._emit("loaderror", SS._id, SS._node.error ? SS._node.error.code : 0), SS._node.removeEventListener("error", SS._errorFn, !1)
        },
        _loadListener: function() {
          var SS = this,
            HS = SS._parent;
          HS._duration = Math.ceil(10 * SS._node.duration) / 10, 0 === Object.keys(HS._sprite).length && (HS._sprite = {
            __default: [0, 1e3 * HS._duration]
          }), "loaded" !== HS._state && (HS._state = "loaded", HS._emit("load"), HS._loadQueue()), SS._node.removeEventListener(XS._canPlayEvent, SS._loadFn, !1)
        },
        _endListener: function() {
          var SS = this,
            HS = SS._parent;
          HS._duration === 1 / 0 && (HS._duration = Math.ceil(10 * SS._node.duration) / 10, HS._sprite.__default[1] === 1 / 0 && (HS._sprite.__default[1] = 1e3 * HS._duration), HS._ended(SS)), SS._node.removeEventListener("ended", SS._endFn, !1)
        }
      };
      var qS = {},
        uS = function(SS) {
          var HS = SS._src;
          if (qS[HS]) return SS._duration = qS[HS].duration, void kS(SS);
          if (/^data:[^;]+;base64,/.test(HS)) {
            for (var gS = atob(HS.split(",")[1]), tS = new Uint8Array(gS.length), bS = 0; bS < gS.length; ++bS) tS[bS] = gS.charCodeAt(bS);
            fS(tS.buffer, SS)
          } else {
            var XS = new XMLHttpRequest;
            XS.open(SS._xhr.method, HS, !0), XS.withCredentials = SS._xhr.withCredentials, XS.responseType = "arraybuffer", SS._xhr.headers && Object.keys(SS._xhr.headers).forEach((function(HS) {
              XS.setRequestHeader(HS, SS._xhr.headers[HS])
            })), XS.onload = function() {
              var HS = (XS.status + "")[0];
              "0" === HS || "2" === HS || "3" === HS ? fS(XS.response, SS) : SS._emit("loaderror", null, "Failed loading audio file with status: " + XS.status + ".")
            }, XS.onerror = function() {
              SS._webAudio && (SS._html5 = !0, SS._webAudio = !1, SS._sounds = [], delete qS[HS], SS.load())
            }, IS(XS)
          }
        },
        IS = function(SS) {
          try {
            SS.send()
          } catch (HS) {
            SS.onerror()
          }
        },
        fS = function(SS, HS) {
          var gS = function() {
              HS._emit("loaderror", null, "Decoding audio data failed.")
            },
            tS = function(SS) {
              SS && HS._sounds.length > 0 ? (qS[HS._src] = SS, kS(HS, SS)) : gS()
            };
          "undefined" !== typeof Promise && 1 === XS.ctx.decodeAudioData.length ? XS.ctx.decodeAudioData(SS).then(tS).catch(gS) : XS.ctx.decodeAudioData(SS, tS, gS)
        },
        kS = function(SS, HS) {
          HS && !SS._duration && (SS._duration = HS.duration), 0 === Object.keys(SS._sprite).length && (SS._sprite = {
            __default: [0, 1e3 * SS._duration]
          }), "loaded" !== SS._state && (SS._state = "loaded", SS._emit("load"), SS._loadQueue())
        },
        aS = function() {
          if (XS.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? XS.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? XS.ctx = new webkitAudioContext : XS.usingWebAudio = !1
            } catch (bS) {
              XS.usingWebAudio = !1
            }
            XS.ctx || (XS.usingWebAudio = !1);
            var SS = /iP(hone|od|ad)/.test(XS._navigator && XS._navigator.platform),
              HS = XS._navigator && XS._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              gS = HS ? parseInt(HS[1], 10) : null;
            if (SS && gS && gS < 9) {
              var tS = /safari/.test(XS._navigator && XS._navigator.userAgent.toLowerCase());
              XS._navigator && !tS && (XS.usingWebAudio = !1)
            }
            XS.usingWebAudio && (XS.masterGain = "undefined" === typeof XS.ctx.createGain ? XS.ctx.createGainNode() : XS.ctx.createGain(), XS.masterGain.gain.setValueAtTime(XS._muted ? 0 : XS._volume, XS.ctx.currentTime), XS.masterGain.connect(XS.ctx.destination)), XS._setup()
          }
        };
      void 0 === (tS = function() {
        return {
          Howler: XS,
          Howl: xS
        }
      }.apply(HS, [])) || (SS.exports = tS), HS.Howler = XS, HS.Howl = xS, "undefined" !== typeof gS.g ? (gS.g.HowlerGlobal = bS, gS.g.Howler = XS, gS.g.Howl = xS, gS.g.Sound = NS) : "undefined" !== typeof window && (window.HowlerGlobal = bS, window.Howler = XS, window.Howl = xS, window.Sound = NS)
    }(),
    function() {
      var SS;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(SS) {
        var HS = this;
        if (!HS.ctx || !HS.ctx.listener) return HS;
        for (var gS = HS._howls.length - 1; gS >= 0; gS--) HS._howls[gS].stereo(SS);
        return HS
      }, HowlerGlobal.prototype.pos = function(SS, HS, gS) {
        var tS = this;
        return tS.ctx && tS.ctx.listener ? (HS = "number" !== typeof HS ? tS._pos[1] : HS, gS = "number" !== typeof gS ? tS._pos[2] : gS, "number" !== typeof SS ? tS._pos : (tS._pos = [SS, HS, gS], "undefined" !== typeof tS.ctx.listener.positionX ? (tS.ctx.listener.positionX.setTargetAtTime(tS._pos[0], Howler.ctx.currentTime, .1), tS.ctx.listener.positionY.setTargetAtTime(tS._pos[1], Howler.ctx.currentTime, .1), tS.ctx.listener.positionZ.setTargetAtTime(tS._pos[2], Howler.ctx.currentTime, .1)) : tS.ctx.listener.setPosition(tS._pos[0], tS._pos[1], tS._pos[2]), tS)) : tS
      }, HowlerGlobal.prototype.orientation = function(SS, HS, gS, tS, bS, XS) {
        var xS = this;
        if (!xS.ctx || !xS.ctx.listener) return xS;
        var NS = xS._orientation;
        return HS = "number" !== typeof HS ? NS[1] : HS, gS = "number" !== typeof gS ? NS[2] : gS, tS = "number" !== typeof tS ? NS[3] : tS, bS = "number" !== typeof bS ? NS[4] : bS, XS = "number" !== typeof XS ? NS[5] : XS, "number" !== typeof SS ? NS : (xS._orientation = [SS, HS, gS, tS, bS, XS], "undefined" !== typeof xS.ctx.listener.forwardX ? (xS.ctx.listener.forwardX.setTargetAtTime(SS, Howler.ctx.currentTime, .1), xS.ctx.listener.forwardY.setTargetAtTime(HS, Howler.ctx.currentTime, .1), xS.ctx.listener.forwardZ.setTargetAtTime(gS, Howler.ctx.currentTime, .1), xS.ctx.listener.upX.setTargetAtTime(tS, Howler.ctx.currentTime, .1), xS.ctx.listener.upY.setTargetAtTime(bS, Howler.ctx.currentTime, .1), xS.ctx.listener.upZ.setTargetAtTime(XS, Howler.ctx.currentTime, .1)) : xS.ctx.listener.setOrientation(SS, HS, gS, tS, bS, XS), xS)
      }, Howl.prototype.init = (SS = Howl.prototype.init, function(HS) {
        var gS = this;
        return gS._orientation = HS.orientation || [1, 0, 0], gS._stereo = HS.stereo || null, gS._pos = HS.pos || null, gS._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof HS.coneInnerAngle ? HS.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof HS.coneOuterAngle ? HS.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof HS.coneOuterGain ? HS.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof HS.distanceModel ? HS.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof HS.maxDistance ? HS.maxDistance : 1e4,
          panningModel: "undefined" !== typeof HS.panningModel ? HS.panningModel : "HRTF",
          refDistance: "undefined" !== typeof HS.refDistance ? HS.refDistance : 1,
          rolloffFactor: "undefined" !== typeof HS.rolloffFactor ? HS.rolloffFactor : 1
        }, gS._onstereo = HS.onstereo ? [{
          xK: HS.onstereo
        }] : [], gS._onpos = HS.onpos ? [{
          xK: HS.onpos
        }] : [], gS._onorientation = HS.onorientation ? [{
          xK: HS.onorientation
        }] : [], SS.call(this, HS)
      }), Howl.prototype.stereo = function(SS, gS) {
        var tS = this;
        if (!tS._webAudio) return tS;
        if ("loaded" !== tS._state) return tS._queue.push({
          event: "stereo",
          action: function() {
            tS.stereo(SS, gS)
          }
        }), tS;
        var bS = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof gS) {
          if ("number" !== typeof SS) return tS._stereo;
          tS._stereo = SS, tS._pos = [SS, 0, 0]
        }
        for (var XS = tS._getSoundIds(gS), xS = 0; xS < XS.length; xS++) {
          var NS = tS._soundById(XS[xS]);
          if (NS) {
            if ("number" !== typeof SS) return NS._stereo;
            NS._stereo = SS, NS._pos = [SS, 0, 0], NS._node && (NS._pannerAttr.panningModel = "equalpower", NS._panner && NS._panner.pan || HS(NS, bS), "spatial" === bS ? "undefined" !== typeof NS._panner.positionX ? (NS._panner.positionX.setValueAtTime(SS, Howler.ctx.currentTime), NS._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), NS._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : NS._panner.setPosition(SS, 0, 0) : NS._panner.pan.setValueAtTime(SS, Howler.ctx.currentTime)), tS._emit("stereo", NS._id)
          }
        }
        return tS
      }, Howl.prototype.pos = function(SS, gS, tS, bS) {
        var XS = this;
        if (!XS._webAudio) return XS;
        if ("loaded" !== XS._state) return XS._queue.push({
          event: "pos",
          action: function() {
            XS.pos(SS, gS, tS, bS)
          }
        }), XS;
        if (gS = "number" !== typeof gS ? 0 : gS, tS = "number" !== typeof tS ? -.5 : tS, "undefined" === typeof bS) {
          if ("number" !== typeof SS) return XS._pos;
          XS._pos = [SS, gS, tS]
        }
        for (var xS = XS._getSoundIds(bS), NS = 0; NS < xS.length; NS++) {
          var qS = XS._soundById(xS[NS]);
          if (qS) {
            if ("number" !== typeof SS) return qS._pos;
            qS._pos = [SS, gS, tS], qS._node && (qS._panner && !qS._panner.pan || HS(qS, "spatial"), "undefined" !== typeof qS._panner.positionX ? (qS._panner.positionX.setValueAtTime(SS, Howler.ctx.currentTime), qS._panner.positionY.setValueAtTime(gS, Howler.ctx.currentTime), qS._panner.positionZ.setValueAtTime(tS, Howler.ctx.currentTime)) : qS._panner.setPosition(SS, gS, tS)), XS._emit("pos", qS._id)
          }
        }
        return XS
      }, Howl.prototype.orientation = function(SS, gS, tS, bS) {
        var XS = this;
        if (!XS._webAudio) return XS;
        if ("loaded" !== XS._state) return XS._queue.push({
          event: "orientation",
          action: function() {
            XS.orientation(SS, gS, tS, bS)
          }
        }), XS;
        if (gS = "number" !== typeof gS ? XS._orientation[1] : gS, tS = "number" !== typeof tS ? XS._orientation[2] : tS, "undefined" === typeof bS) {
          if ("number" !== typeof SS) return XS._orientation;
          XS._orientation = [SS, gS, tS]
        }
        for (var xS = XS._getSoundIds(bS), NS = 0; NS < xS.length; NS++) {
          var qS = XS._soundById(xS[NS]);
          if (qS) {
            if ("number" !== typeof SS) return qS._orientation;
            qS._orientation = [SS, gS, tS], qS._node && (qS._panner || (qS._pos || (qS._pos = XS._pos || [0, 0, -.5]), HS(qS, "spatial")), "undefined" !== typeof qS._panner.orientationX ? (qS._panner.orientationX.setValueAtTime(SS, Howler.ctx.currentTime), qS._panner.orientationY.setValueAtTime(gS, Howler.ctx.currentTime), qS._panner.orientationZ.setValueAtTime(tS, Howler.ctx.currentTime)) : qS._panner.setOrientation(SS, gS, tS)), XS._emit("orientation", qS._id)
          }
        }
        return XS
      }, Howl.prototype.pannerAttr = function() {
        var SS, gS, tS, bS = this,
          XS = arguments;
        if (!bS._webAudio) return bS;
        if (0 === XS.length) return bS._pannerAttr;
        if (1 === XS.length) {
          if ("object" !== typeof XS[0]) return (tS = bS._soundById(parseInt(XS[0], 10))) ? tS._pannerAttr : bS._pannerAttr;
          SS = XS[0], "undefined" === typeof gS && (SS.pannerAttr || (SS.pannerAttr = {
            coneInnerAngle: SS.coneInnerAngle,
            coneOuterAngle: SS.coneOuterAngle,
            coneOuterGain: SS.coneOuterGain,
            distanceModel: SS.distanceModel,
            maxDistance: SS.maxDistance,
            refDistance: SS.refDistance,
            rolloffFactor: SS.rolloffFactor,
            panningModel: SS.panningModel
          }), bS._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof SS.pannerAttr.coneInnerAngle ? SS.pannerAttr.coneInnerAngle : bS._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof SS.pannerAttr.coneOuterAngle ? SS.pannerAttr.coneOuterAngle : bS._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof SS.pannerAttr.coneOuterGain ? SS.pannerAttr.coneOuterGain : bS._coneOuterGain,
            distanceModel: "undefined" !== typeof SS.pannerAttr.distanceModel ? SS.pannerAttr.distanceModel : bS._distanceModel,
            maxDistance: "undefined" !== typeof SS.pannerAttr.maxDistance ? SS.pannerAttr.maxDistance : bS._maxDistance,
            refDistance: "undefined" !== typeof SS.pannerAttr.refDistance ? SS.pannerAttr.refDistance : bS._refDistance,
            rolloffFactor: "undefined" !== typeof SS.pannerAttr.rolloffFactor ? SS.pannerAttr.rolloffFactor : bS._rolloffFactor,
            panningModel: "undefined" !== typeof SS.pannerAttr.panningModel ? SS.pannerAttr.panningModel : bS._panningModel
          })
        } else 2 === XS.length && (SS = XS[0], gS = parseInt(XS[1], 10));
        for (var xS = bS._getSoundIds(gS), NS = 0; NS < xS.length; NS++)
          if (tS = bS._soundById(xS[NS])) {
            var qS = tS._pannerAttr;
            qS = {
              coneInnerAngle: "undefined" !== typeof SS.coneInnerAngle ? SS.coneInnerAngle : qS.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof SS.coneOuterAngle ? SS.coneOuterAngle : qS.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof SS.coneOuterGain ? SS.coneOuterGain : qS.coneOuterGain,
              distanceModel: "undefined" !== typeof SS.distanceModel ? SS.distanceModel : qS.distanceModel,
              maxDistance: "undefined" !== typeof SS.maxDistance ? SS.maxDistance : qS.maxDistance,
              refDistance: "undefined" !== typeof SS.refDistance ? SS.refDistance : qS.refDistance,
              rolloffFactor: "undefined" !== typeof SS.rolloffFactor ? SS.rolloffFactor : qS.rolloffFactor,
              panningModel: "undefined" !== typeof SS.panningModel ? SS.panningModel : qS.panningModel
            };
            var uS = tS._panner;
            uS ? (uS.coneInnerAngle = qS.coneInnerAngle, uS.coneOuterAngle = qS.coneOuterAngle, uS.coneOuterGain = qS.coneOuterGain, uS.distanceModel = qS.distanceModel, uS.maxDistance = qS.maxDistance, uS.refDistance = qS.refDistance, uS.rolloffFactor = qS.rolloffFactor, uS.panningModel = qS.panningModel) : (tS._pos || (tS._pos = bS._pos || [0, 0, -.5]), HS(tS, "spatial"))
          } return bS
      }, Sound.prototype.init = function(SS) {
        return function() {
          var HS = this,
            gS = HS._parent;
          HS._orientation = gS._orientation, HS._stereo = gS._stereo, HS._pos = gS._pos, HS._pannerAttr = gS._pannerAttr, SS.call(this), HS._stereo ? gS.stereo(HS._stereo) : HS._pos && gS.pos(HS._pos[0], HS._pos[1], HS._pos[2], HS._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(SS) {
        return function() {
          var HS = this,
            gS = HS._parent;
          return HS._orientation = gS._orientation, HS._stereo = gS._stereo, HS._pos = gS._pos, HS._pannerAttr = gS._pannerAttr, HS._stereo ? gS.stereo(HS._stereo) : HS._pos ? gS.pos(HS._pos[0], HS._pos[1], HS._pos[2], HS._id) : HS._panner && (HS._panner.disconnect(0), HS._panner = void 0, gS._refreshBuffer(HS)), SS.call(this)
        }
      }(Sound.prototype.reset);
      var HS = function(SS, HS) {
        "spatial" === (HS = HS || "spatial") ? (SS._panner = Howler.ctx.createPanner(), SS._panner.coneInnerAngle = SS._pannerAttr.coneInnerAngle, SS._panner.coneOuterAngle = SS._pannerAttr.coneOuterAngle, SS._panner.coneOuterGain = SS._pannerAttr.coneOuterGain, SS._panner.distanceModel = SS._pannerAttr.distanceModel, SS._panner.maxDistance = SS._pannerAttr.maxDistance, SS._panner.refDistance = SS._pannerAttr.refDistance, SS._panner.rolloffFactor = SS._pannerAttr.rolloffFactor, SS._panner.panningModel = SS._pannerAttr.panningModel, "undefined" !== typeof SS._panner.positionX ? (SS._panner.positionX.setValueAtTime(SS._pos[0], Howler.ctx.currentTime), SS._panner.positionY.setValueAtTime(SS._pos[1], Howler.ctx.currentTime), SS._panner.positionZ.setValueAtTime(SS._pos[2], Howler.ctx.currentTime)) : SS._panner.setPosition(SS._pos[0], SS._pos[1], SS._pos[2]), "undefined" !== typeof SS._panner.orientationX ? (SS._panner.orientationX.setValueAtTime(SS._orientation[0], Howler.ctx.currentTime), SS._panner.orientationY.setValueAtTime(SS._orientation[1], Howler.ctx.currentTime), SS._panner.orientationZ.setValueAtTime(SS._orientation[2], Howler.ctx.currentTime)) : SS._panner.setOrientation(SS._orientation[0], SS._orientation[1], SS._orientation[2])) : (SS._panner = Howler.ctx.createStereoPanner(), SS._panner.pan.setValueAtTime(SS._stereo, Howler.ctx.currentTime)), SS._panner.connect(SS._node), SS.KD || SS._parent.pause(SS._id, !0).play(SS._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);