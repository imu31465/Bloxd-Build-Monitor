/*! For license information please see 90jf8k.79.9f5d9ed5.chunk.js.LICENSE.txt */
export const id = 79;
export const ids = [79];
export const modules = {
  3863: (FF, WF, SF) => {
    var CF;
    ! function() {
      var AF = function() {
        this.init()
      };
      AF.prototype = {
        init: function() {
          var FF = this || uF;
          return FF._counter = 1e3, FF._html5AudioPool = [], FF.html5PoolSize = 10, FF._codecs = {}, FF._howls = [], FF._muted = !1, FF._volume = 1, FF._canPlayEvent = "canplaythrough", FF._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, FF.masterGain = null, FF.noAudio = !1, FF.usingWebAudio = !0, FF.autoSuspend = !0, FF.ctx = null, FF.autoUnlock = !0, FF._setup(), FF
        },
        volume: function(FF) {
          var WF = this || uF;
          if (FF = parseFloat(FF), WF.ctx || EF(), "undefined" !== typeof FF && FF >= 0 && FF <= 1) {
            if (WF._volume = FF, WF._muted) return WF;
            WF.usingWebAudio && WF.masterGain.gain.setValueAtTime(FF, uF.ctx.currentTime);
            for (var SF = 0; SF < WF._howls.length; SF++)
              if (!WF._howls[SF]._webAudio)
                for (var CF = WF._howls[SF]._getSoundIds(), AF = 0; AF < CF.length; AF++) {
                  var hF = WF._howls[SF]._soundById(CF[AF]);
                  hF && hF._node && (hF._node.volume = hF._volume * FF)
                }
            return WF
          }
          return WF._volume
        },
        mute: function(FF) {
          var WF = this || uF;
          WF.ctx || EF(), WF._muted = FF, WF.usingWebAudio && WF.masterGain.gain.setValueAtTime(FF ? 0 : WF._volume, uF.ctx.currentTime);
          for (var SF = 0; SF < WF._howls.length; SF++)
            if (!WF._howls[SF]._webAudio)
              for (var CF = WF._howls[SF]._getSoundIds(), AF = 0; AF < CF.length; AF++) {
                var hF = WF._howls[SF]._soundById(CF[AF]);
                hF && hF._node && (hF._node.muted = !!FF || hF._muted)
              }
          return WF
        },
        stop: function() {
          for (var FF = this || uF, WF = 0; WF < FF._howls.length; WF++) FF._howls[WF].stop();
          return FF
        },
        unload: function() {
          for (var FF = this || uF, WF = FF._howls.length - 1; WF >= 0; WF--) FF._howls[WF].unload();
          return FF.usingWebAudio && FF.ctx && "undefined" !== typeof FF.ctx.close && (FF.ctx.close(), FF.ctx = null, EF()), FF
        },
        codecs: function(FF) {
          return (this || uF)._codecs[FF.replace(/^x-/, "")]
        },
        _setup: function() {
          var FF = this || uF;
          if (FF.state = FF.ctx && FF.ctx.state || "suspended", FF._autoSuspend(), !FF.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (FF._canPlayEvent = "canplay")
            } catch (WF) {
              FF.noAudio = !0
            } else FF.noAudio = !0;
          try {
            (new Audio).muted && (FF.noAudio = !0)
          } catch (WF) {}
          return FF.noAudio || FF._setupCodecs(), FF
        },
        _setupCodecs: function() {
          var FF = this || uF,
            WF = null;
          try {
            WF = "undefined" !== typeof Audio ? new Audio : null
          } catch (RF) {
            return FF
          }
          if (!WF || "function" !== typeof WF.canPlayType) return FF;
          var SF = WF.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            CF = FF._navigator ? FF._navigator.userAgent : "",
            AF = CF.match(/OPR\/([0-6].)/g),
            hF = AF && parseInt(AF[0].split("/")[1], 10) < 33,
            bW = -1 !== CF.indexOf("Safari") && -1 === CF.indexOf("Chrome"),
            dF = CF.match(/Version\/(.*?) /),
            PF = bW && dF && parseInt(dF[1], 10) < 15;
          return FF._codecs = {
            mp3: !(hF || !SF && !WF.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!SF,
            opus: !!WF.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!WF.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!WF.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(WF.canPlayType('audio/wav; codecs="1"') || WF.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!WF.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!WF.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(WF.canPlayType("audio/x-m4a;") || WF.canPlayType("audio/m4a;") || WF.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(WF.canPlayType("audio/x-m4b;") || WF.canPlayType("audio/m4b;") || WF.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(WF.canPlayType("audio/x-mp4;") || WF.canPlayType("audio/mp4;") || WF.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(PF || !WF.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(PF || !WF.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!WF.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(WF.canPlayType("audio/x-flac;") || WF.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, FF
        },
        _unlockAudio: function() {
          var FF = this || uF;
          if (!FF._audioUnlocked && FF.ctx) {
            FF._audioUnlocked = !1, FF.autoUnlock = !1, FF._mobileUnloaded || 44100 === FF.ctx.sampleRate || (FF._mobileUnloaded = !0, FF.unload()), FF._scratchBuffer = FF.ctx.createBuffer(1, 1, 22050);
            var WF = function(SF) {
              for (; FF._html5AudioPool.length < FF.html5PoolSize;) try {
                var CF = new Audio;
                CF._unlocked = !0, FF._releaseHtml5Audio(CF)
              } catch (SF) {
                FF.noAudio = !0;
                break
              }
              for (var AF = 0; AF < FF._howls.length; AF++)
                if (!FF._howls[AF]._webAudio)
                  for (var uF = FF._howls[AF]._getSoundIds(), hF = 0; hF < uF.length; hF++) {
                    var bW = FF._howls[AF]._soundById(uF[hF]);
                    bW && bW._node && !bW._node._unlocked && (bW._node._unlocked = !0, bW._node.load())
                  }
              FF._autoResume();
              var dF = FF.ctx.createBufferSource();
              dF.buffer = FF._scratchBuffer, dF.connect(FF.ctx.destination), "undefined" === typeof dF.start ? dF.noteOn(0) : dF.start(0), "function" === typeof FF.ctx.resume && FF.ctx.resume(), dF.onended = function() {
                dF.disconnect(0), FF._audioUnlocked = !0, document.removeEventListener("touchstart", WF, !0), document.removeEventListener("touchend", WF, !0), document.removeEventListener("click", WF, !0), document.removeEventListener("keydown", WF, !0);
                for (var SF = 0; SF < FF._howls.length; SF++) FF._howls[SF]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", WF, !0), document.addEventListener("touchend", WF, !0), document.addEventListener("click", WF, !0), document.addEventListener("keydown", WF, !0), FF
          }
        },
        _obtainHtml5Audio: function() {
          var FF = this || uF;
          if (FF._html5AudioPool.length) return FF._html5AudioPool.pop();
          var WF = (new Audio).play();
          return WF && "undefined" !== typeof Promise && (WF instanceof Promise || "function" === typeof WF.then) && WF.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(FF) {
          var WF = this || uF;
          return FF._unlocked && WF._html5AudioPool.push(FF), WF
        },
        _autoSuspend: function() {
          var FF = this;
          if (FF.autoSuspend && FF.ctx && "undefined" !== typeof FF.ctx.suspend && uF.usingWebAudio) {
            for (var WF = 0; WF < FF._howls.length; WF++)
              if (FF._howls[WF]._webAudio)
                for (var SF = 0; SF < FF._howls[WF]._sounds.length; SF++)
                  if (!FF._howls[WF]._sounds[SF].vmF) return FF;
            return FF._suspendTimer && clearTimeout(FF._suspendTimer), FF._suspendTimer = setTimeout((function() {
              if (FF.autoSuspend) {
                FF._suspendTimer = null, FF.state = "suspending";
                var WF = function() {
                  FF.state = "suspended", FF._resumeAfterSuspend && (delete FF._resumeAfterSuspend, FF._autoResume())
                };
                FF.ctx.suspend().then(WF, WF)
              }
            }), 3e4), FF
          }
        },
        _autoResume: function() {
          var FF = this;
          if (FF.ctx && "undefined" !== typeof FF.ctx.resume && uF.usingWebAudio) return "running" === FF.state && "interrupted" !== FF.ctx.state && FF._suspendTimer ? (clearTimeout(FF._suspendTimer), FF._suspendTimer = null) : "suspended" === FF.state || "running" === FF.state && "interrupted" === FF.ctx.state ? (FF.ctx.resume().then((function() {
            FF.state = "running";
            for (var WF = 0; WF < FF._howls.length; WF++) FF._howls[WF]._emit("resume")
          })), FF._suspendTimer && (clearTimeout(FF._suspendTimer), FF._suspendTimer = null)) : "suspending" === FF.state && (FF._resumeAfterSuspend = !0), FF
        }
      };
      var uF = new AF,
        hF = function(FF) {
          FF.src && 0 !== FF.src.length ? this.init(FF) : console.error("An array of source files must be passed with any new Howl.")
        };
      hF.prototype = {
        init: function(FF) {
          var WF = this;
          return uF.ctx || EF(), WF._autoplay = FF.autoplay || !1, WF._format = "string" !== typeof FF.format ? FF.format : [FF.format], WF._html5 = FF.html5 || !1, WF._muted = FF.mute || !1, WF._loop = FF.loop || !1, WF._pool = FF.pool || 5, WF._preload = "boolean" !== typeof FF.preload && "metadata" !== FF.preload || FF.preload, WF._rate = FF.rate || 1, WF._sprite = FF.sprite || {}, WF._src = "string" !== typeof FF.src ? FF.src : [FF.src], WF._volume = void 0 !== FF.volume ? FF.volume : 1, WF._xhr = {
            method: FF.xhr && FF.xhr.method ? FF.xhr.method : "GET",
            headers: FF.xhr && FF.xhr.headers ? FF.xhr.headers : null,
            withCredentials: !(!FF.xhr || !FF.xhr.withCredentials) && FF.xhr.withCredentials
          }, WF._duration = 0, WF._state = "unloaded", WF._sounds = [], WF._endTimers = {}, WF._queue = [], WF._playLock = !1, WF._onend = FF.onend ? [{
            bA: FF.onend
          }] : [], WF._onfade = FF.onfade ? [{
            bA: FF.onfade
          }] : [], WF._onload = FF.onload ? [{
            bA: FF.onload
          }] : [], WF._onloaderror = FF.onloaderror ? [{
            bA: FF.onloaderror
          }] : [], WF._onplayerror = FF.onplayerror ? [{
            bA: FF.onplayerror
          }] : [], WF._onpause = FF.onpause ? [{
            bA: FF.onpause
          }] : [], WF._onplay = FF.onplay ? [{
            bA: FF.onplay
          }] : [], WF._onstop = FF.onstop ? [{
            bA: FF.onstop
          }] : [], WF._onmute = FF.onmute ? [{
            bA: FF.onmute
          }] : [], WF._onvolume = FF.onvolume ? [{
            bA: FF.onvolume
          }] : [], WF._onrate = FF.onrate ? [{
            bA: FF.onrate
          }] : [], WF._onseek = FF.onseek ? [{
            bA: FF.onseek
          }] : [], WF._onunlock = FF.onunlock ? [{
            bA: FF.onunlock
          }] : [], WF._onresume = [], WF._webAudio = uF.usingWebAudio && !WF._html5, "undefined" !== typeof uF.ctx && uF.ctx && uF.autoUnlock && uF._unlockAudio(), uF._howls.push(WF), WF._autoplay && WF._queue.push({
            event: "play",
            action: function() {
              WF.play()
            }
          }), WF._preload && "none" !== WF._preload && WF.load(), WF
        },
        load: function() {
          var FF = this,
            WF = null;
          if (uF.noAudio) FF._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof FF._src && (FF._src = [FF._src]);
            for (var SF = 0; SF < FF._src.length; SF++) {
              var CF, AF;
              if (FF._format && FF._format[SF]) CF = FF._format[SF];
              else {
                if ("string" !== typeof(AF = FF._src[SF])) {
                  FF._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(CF = /^data:audio\/([^;,]+);/i.exec(AF)) || (CF = /\.([^.]+)$/.exec(AF.split("?", 1)[0])), CF && (CF = CF[1].toLowerCase())
              }
              if (CF || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), CF && uF.codecs(CF)) {
                WF = FF._src[SF];
                break
              }
            }
            if (WF) return FF._src = WF, FF._state = "loading", "https:" === window.location.protocol && "http:" === WF.slice(0, 5) && (FF._html5 = !0, FF._webAudio = !1), new bW(FF), FF._webAudio && PF(FF), FF;
            FF._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(FF, WF) {
          var SF = this,
            CF = null;
          if ("number" === typeof FF) CF = FF, FF = null;
          else {
            if ("string" === typeof FF && "loaded" === SF._state && !SF._sprite[FF]) return null;
            if ("undefined" === typeof FF && (FF = "__default", !SF._playLock)) {
              for (var AF = 0, hF = 0; hF < SF._sounds.length; hF++) SF._sounds[hF].vmF && !SF._sounds[hF]._ended && (AF++, CF = SF._sounds[hF]._id);
              1 === AF ? FF = null : CF = null
            }
          }
          var bW = CF ? SF._soundById(CF) : SF._inactiveSound();
          if (!bW) return null;
          if (CF && !FF && (FF = bW._sprite || "__default"), "loaded" !== SF._state) {
            bW._sprite = FF, bW._ended = !1;
            var dF = bW._id;
            return SF._queue.push({
              event: "play",
              action: function() {
                SF.play(dF)
              }
            }), dF
          }
          if (CF && !bW.vmF) return WF || SF._loadQueue("play"), bW._id;
          SF._webAudio && uF._autoResume();
          var PF = Math.max(0, bW._seek > 0 ? bW._seek : SF._sprite[FF][0] / 1e3),
            RF = Math.max(0, (SF._sprite[FF][0] + SF._sprite[FF][1]) / 1e3 - PF),
            iW = 1e3 * RF / Math.abs(bW._rate),
            eF = SF._sprite[FF][0] / 1e3,
            EF = (SF._sprite[FF][0] + SF._sprite[FF][1]) / 1e3;
          bW._sprite = FF, bW._ended = !1;
          var QF = function() {
            bW.vmF = !1, bW._seek = PF, bW._start = eF, bW._stop = EF, bW._loop = !(!bW._loop && !SF._sprite[FF][2])
          };
          if (!(PF >= EF)) {
            var rW = bW._node;
            if (SF._webAudio) {
              var gW = function() {
                SF._playLock = !1, QF(), SF._refreshBuffer(bW);
                var FF = bW._muted || SF._muted ? 0 : bW._volume;
                rW.gain.setValueAtTime(FF, uF.ctx.currentTime), bW._playStart = uF.ctx.currentTime, "undefined" === typeof rW.bufferSource.start ? bW._loop ? rW.bufferSource.noteGrainOn(0, PF, 86400) : rW.bufferSource.noteGrainOn(0, PF, RF) : bW._loop ? rW.bufferSource.start(0, PF, 86400) : rW.bufferSource.start(0, PF, RF), iW !== 1 / 0 && (SF._endTimers[bW._id] = setTimeout(SF._ended.bind(SF, bW), iW)), WF || setTimeout((function() {
                  SF._emit("play", bW._id), SF._loadQueue()
                }), 0)
              };
              "running" === uF.state && "interrupted" !== uF.ctx.state ? gW() : (SF._playLock = !0, SF.once("resume", gW), SF._clearTimer(bW._id))
            } else {
              var tW = function() {
                rW.currentTime = PF, rW.muted = bW._muted || SF._muted || uF._muted || rW.muted, rW.volume = bW._volume * uF.volume(), rW.playbackRate = bW._rate;
                try {
                  var CF = rW.play();
                  if (CF && "undefined" !== typeof Promise && (CF instanceof Promise || "function" === typeof CF.then) ? (SF._playLock = !0, QF(), CF.then((function() {
                      SF._playLock = !1, rW._unlocked = !0, WF ? SF._loadQueue() : SF._emit("play", bW._id)
                    })).catch((function() {
                      SF._playLock = !1, SF._emit("playerror", bW._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), bW._ended = !0, bW.vmF = !0
                    }))) : WF || (SF._playLock = !1, QF(), SF._emit("play", bW._id)), rW.playbackRate = bW._rate, rW.paused) return void SF._emit("playerror", bW._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== FF || bW._loop ? SF._endTimers[bW._id] = setTimeout(SF._ended.bind(SF, bW), iW) : (SF._endTimers[bW._id] = function() {
                    SF._ended(bW), rW.removeEventListener("ended", SF._endTimers[bW._id], !1)
                  }, rW.addEventListener("ended", SF._endTimers[bW._id], !1))
                } catch (AF) {
                  SF._emit("playerror", bW._id, AF)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === rW.src && (rW.src = SF._src, rW.load());
              var TF = window && window.ejecta || !rW.readyState && uF._navigator.isCocoonJS;
              if (rW.readyState >= 3 || TF) tW();
              else {
                SF._playLock = !0, SF._state = "loading";
                var aW = function() {
                  SF._state = "loaded", tW(), rW.removeEventListener(uF._canPlayEvent, aW, !1)
                };
                rW.addEventListener(uF._canPlayEvent, aW, !1), SF._clearTimer(bW._id)
              }
            }
            return bW._id
          }
          SF._ended(bW)
        },
        pause: function(FF) {
          var WF = this;
          if ("loaded" !== WF._state || WF._playLock) return WF._queue.push({
            event: "pause",
            action: function() {
              WF.pause(FF)
            }
          }), WF;
          for (var SF = WF._getSoundIds(FF), CF = 0; CF < SF.length; CF++) {
            WF._clearTimer(SF[CF]);
            var AF = WF._soundById(SF[CF]);
            if (AF && !AF.vmF && (AF._seek = WF.seek(SF[CF]), AF._rateSeek = 0, AF.vmF = !0, WF._stopFade(SF[CF]), AF._node))
              if (WF._webAudio) {
                if (!AF._node.bufferSource) continue;
                "undefined" === typeof AF._node.bufferSource.stop ? AF._node.bufferSource.noteOff(0) : AF._node.bufferSource.stop(0), WF._cleanBuffer(AF._node)
              } else isNaN(AF._node.duration) && AF._node.duration !== 1 / 0 || AF._node.pause();
            arguments[1] || WF._emit("pause", AF ? AF._id : null)
          }
          return WF
        },
        stop: function(FF, WF) {
          var SF = this;
          if ("loaded" !== SF._state || SF._playLock) return SF._queue.push({
            event: "stop",
            action: function() {
              SF.stop(FF)
            }
          }), SF;
          for (var CF = SF._getSoundIds(FF), AF = 0; AF < CF.length; AF++) {
            SF._clearTimer(CF[AF]);
            var uF = SF._soundById(CF[AF]);
            uF && (uF._seek = uF._start || 0, uF._rateSeek = 0, uF.vmF = !0, uF._ended = !0, SF._stopFade(CF[AF]), uF._node && (SF._webAudio ? uF._node.bufferSource && ("undefined" === typeof uF._node.bufferSource.stop ? uF._node.bufferSource.noteOff(0) : uF._node.bufferSource.stop(0), SF._cleanBuffer(uF._node)) : isNaN(uF._node.duration) && uF._node.duration !== 1 / 0 || (uF._node.currentTime = uF._start || 0, uF._node.pause(), uF._node.duration === 1 / 0 && SF._clearSound(uF._node))), WF || SF._emit("stop", uF._id))
          }
          return SF
        },
        mute: function(FF, WF) {
          var SF = this;
          if ("loaded" !== SF._state || SF._playLock) return SF._queue.push({
            event: "mute",
            action: function() {
              SF.mute(FF, WF)
            }
          }), SF;
          if ("undefined" === typeof WF) {
            if ("boolean" !== typeof FF) return SF._muted;
            SF._muted = FF
          }
          for (var CF = SF._getSoundIds(WF), AF = 0; AF < CF.length; AF++) {
            var hF = SF._soundById(CF[AF]);
            hF && (hF._muted = FF, hF._interval && SF._stopFade(hF._id), SF._webAudio && hF._node ? hF._node.gain.setValueAtTime(FF ? 0 : hF._volume, uF.ctx.currentTime) : hF._node && (hF._node.muted = !!uF._muted || FF), SF._emit("mute", hF._id))
          }
          return SF
        },
        volume: function() {
          var FF, WF, SF, CF = this,
            AF = arguments;
          if (0 === AF.length) return CF._volume;
          if (1 === AF.length || 2 === AF.length && "undefined" === typeof AF[1] ? CF._getSoundIds().indexOf(AF[0]) >= 0 ? WF = parseInt(AF[0], 10) : FF = parseFloat(AF[0]) : AF.length >= 2 && (FF = parseFloat(AF[0]), WF = parseInt(AF[1], 10)), !("undefined" !== typeof FF && FF >= 0 && FF <= 1)) return (SF = WF ? CF._soundById(WF) : CF._sounds[0]) ? SF._volume : 0;
          if ("loaded" !== CF._state || CF._playLock) return CF._queue.push({
            event: "volume",
            action: function() {
              CF.volume.apply(CF, AF)
            }
          }), CF;
          "undefined" === typeof WF && (CF._volume = FF), WF = CF._getSoundIds(WF);
          for (var hF = 0; hF < WF.length; hF++)(SF = CF._soundById(WF[hF])) && (SF._volume = FF, AF[2] || CF._stopFade(WF[hF]), CF._webAudio && SF._node && !SF._muted ? SF._node.gain.setValueAtTime(FF, uF.ctx.currentTime) : SF._node && !SF._muted && (SF._node.volume = FF * uF.volume()), CF._emit("volume", SF._id));
          return CF
        },
        fade: function(FF, WF, SF, CF) {
          var AF = this;
          if ("loaded" !== AF._state || AF._playLock) return AF._queue.push({
            event: "fade",
            action: function() {
              AF.fade(FF, WF, SF, CF)
            }
          }), AF;
          FF = Math.min(Math.max(0, parseFloat(FF)), 1), WF = Math.min(Math.max(0, parseFloat(WF)), 1), SF = parseFloat(SF), AF.volume(FF, CF);
          for (var hF = AF._getSoundIds(CF), bW = 0; bW < hF.length; bW++) {
            var dF = AF._soundById(hF[bW]);
            if (dF) {
              if (CF || AF._stopFade(hF[bW]), AF._webAudio && !dF._muted) {
                var PF = uF.ctx.currentTime,
                  RF = PF + SF / 1e3;
                dF._volume = FF, dF._node.gain.setValueAtTime(FF, PF), dF._node.gain.linearRampToValueAtTime(WF, RF)
              }
              AF._startFadeInterval(dF, FF, WF, SF, hF[bW], "undefined" === typeof CF)
            }
          }
          return AF
        },
        _startFadeInterval: function(FF, WF, SF, CF, AF, uF) {
          var hF = this,
            bW = WF,
            dF = SF - WF,
            PF = Math.abs(dF / .01),
            RF = Math.max(4, PF > 0 ? CF / PF : CF),
            iW = Date.now();
          FF._fadeTo = SF, FF._interval = setInterval((function() {
            var AF = (Date.now() - iW) / CF;
            iW = Date.now(), bW += dF * AF, bW = Math.round(100 * bW) / 100, bW = dF < 0 ? Math.max(SF, bW) : Math.min(SF, bW), hF._webAudio ? FF._volume = bW : hF.volume(bW, FF._id, !0), uF && (hF._volume = bW), (SF < WF && bW <= SF || SF > WF && bW >= SF) && (clearInterval(FF._interval), FF._interval = null, FF._fadeTo = null, hF.volume(SF, FF._id), hF._emit("fade", FF._id))
          }), RF)
        },
        _stopFade: function(FF) {
          var WF = this,
            SF = WF._soundById(FF);
          return SF && SF._interval && (WF._webAudio && SF._node.gain.cancelScheduledValues(uF.ctx.currentTime), clearInterval(SF._interval), SF._interval = null, WF.volume(SF._fadeTo, FF), SF._fadeTo = null, WF._emit("fade", FF)), WF
        },
        loop: function() {
          var FF, WF, SF, CF = this,
            AF = arguments;
          if (0 === AF.length) return CF._loop;
          if (1 === AF.length) {
            if ("boolean" !== typeof AF[0]) return !!(SF = CF._soundById(parseInt(AF[0], 10))) && SF._loop;
            FF = AF[0], CF._loop = FF
          } else 2 === AF.length && (FF = AF[0], WF = parseInt(AF[1], 10));
          for (var uF = CF._getSoundIds(WF), hF = 0; hF < uF.length; hF++)(SF = CF._soundById(uF[hF])) && (SF._loop = FF, CF._webAudio && SF._node && SF._node.bufferSource && (SF._node.bufferSource.loop = FF, FF && (SF._node.bufferSource.loopStart = SF._start || 0, SF._node.bufferSource.loopEnd = SF._stop, CF.playing(uF[hF]) && (CF.pause(uF[hF], !0), CF.play(uF[hF], !0)))));
          return CF
        },
        rate: function() {
          var FF, WF, SF, CF = this,
            AF = arguments;
          if (0 === AF.length) WF = CF._sounds[0]._id;
          else if (1 === AF.length) {
            CF._getSoundIds().indexOf(AF[0]) >= 0 ? WF = parseInt(AF[0], 10) : FF = parseFloat(AF[0])
          } else 2 === AF.length && (FF = parseFloat(AF[0]), WF = parseInt(AF[1], 10));
          if ("number" !== typeof FF) return (SF = CF._soundById(WF)) ? SF._rate : CF._rate;
          if ("loaded" !== CF._state || CF._playLock) return CF._queue.push({
            event: "rate",
            action: function() {
              CF.rate.apply(CF, AF)
            }
          }), CF;
          "undefined" === typeof WF && (CF._rate = FF), WF = CF._getSoundIds(WF);
          for (var hF = 0; hF < WF.length; hF++)
            if (SF = CF._soundById(WF[hF])) {
              CF.playing(WF[hF]) && (SF._rateSeek = CF.seek(WF[hF]), SF._playStart = CF._webAudio ? uF.ctx.currentTime : SF._playStart), SF._rate = FF, CF._webAudio && SF._node && SF._node.bufferSource ? SF._node.bufferSource.playbackRate.setValueAtTime(FF, uF.ctx.currentTime) : SF._node && (SF._node.playbackRate = FF);
              var bW = CF.seek(WF[hF]),
                dF = 1e3 * ((CF._sprite[SF._sprite][0] + CF._sprite[SF._sprite][1]) / 1e3 - bW) / Math.abs(SF._rate);
              !CF._endTimers[WF[hF]] && SF.vmF || (CF._clearTimer(WF[hF]), CF._endTimers[WF[hF]] = setTimeout(CF._ended.bind(CF, SF), dF)), CF._emit("rate", SF._id)
            } return CF
        },
        seek: function() {
          var FF, WF, SF = this,
            CF = arguments;
          if (0 === CF.length) SF._sounds.length && (WF = SF._sounds[0]._id);
          else if (1 === CF.length) {
            SF._getSoundIds().indexOf(CF[0]) >= 0 ? WF = parseInt(CF[0], 10) : SF._sounds.length && (WF = SF._sounds[0]._id, FF = parseFloat(CF[0]))
          } else 2 === CF.length && (FF = parseFloat(CF[0]), WF = parseInt(CF[1], 10));
          if ("undefined" === typeof WF) return 0;
          if ("number" === typeof FF && ("loaded" !== SF._state || SF._playLock)) return SF._queue.push({
            event: "seek",
            action: function() {
              SF.seek.apply(SF, CF)
            }
          }), SF;
          var AF = SF._soundById(WF);
          if (AF) {
            if (!("number" === typeof FF && FF >= 0)) {
              if (SF._webAudio) {
                var hF = SF.playing(WF) ? uF.ctx.currentTime - AF._playStart : 0,
                  bW = AF._rateSeek ? AF._rateSeek - AF._seek : 0;
                return AF._seek + (bW + hF * Math.abs(AF._rate))
              }
              return AF._node.currentTime
            }
            var dF = SF.playing(WF);
            dF && SF.pause(WF, !0), AF._seek = FF, AF._ended = !1, SF._clearTimer(WF), SF._webAudio || !AF._node || isNaN(AF._node.duration) || (AF._node.currentTime = FF);
            var PF = function() {
              dF && SF.play(WF, !0), SF._emit("seek", WF)
            };
            if (dF && !SF._webAudio) {
              var RF = function() {
                SF._playLock ? setTimeout(RF, 0) : PF()
              };
              setTimeout(RF, 0)
            } else PF()
          }
          return SF
        },
        playing: function(FF) {
          var WF = this;
          if ("number" === typeof FF) {
            var SF = WF._soundById(FF);
            return !!SF && !SF.vmF
          }
          for (var CF = 0; CF < WF._sounds.length; CF++)
            if (!WF._sounds[CF].vmF) return !0;
          return !1
        },
        duration: function(FF) {
          var WF = this,
            SF = WF._duration,
            CF = WF._soundById(FF);
          return CF && (SF = WF._sprite[CF._sprite][1] / 1e3), SF
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var FF = this, WF = FF._sounds, SF = 0; SF < WF.length; SF++) WF[SF].vmF || FF.stop(WF[SF]._id), FF._webAudio || (FF._clearSound(WF[SF]._node), WF[SF]._node.removeEventListener("error", WF[SF]._errorFn, !1), WF[SF]._node.removeEventListener(uF._canPlayEvent, WF[SF]._loadFn, !1), WF[SF]._node.removeEventListener("ended", WF[SF]._endFn, !1), uF._releaseHtml5Audio(WF[SF]._node)), delete WF[SF]._node, FF._clearTimer(WF[SF]._id);
          var CF = uF._howls.indexOf(FF);
          CF >= 0 && uF._howls.splice(CF, 1);
          var AF = !0;
          for (SF = 0; SF < uF._howls.length; SF++)
            if (uF._howls[SF]._src === FF._src || FF._src.indexOf(uF._howls[SF]._src) >= 0) {
              AF = !1;
              break
            } return dF && AF && delete dF[FF._src], uF.noAudio = !1, FF._state = "unloaded", FF._sounds = [], FF = null, null
        },
        on: function(FF, WF, SF, CF) {
          var AF = this["_on" + FF];
          return "function" === typeof WF && AF.push(CF ? {
            id: SF,
            bA: WF,
            once: CF
          } : {
            id: SF,
            bA: WF
          }), this
        },
        off: function(FF, WF, SF) {
          var CF = this,
            AF = CF["_on" + FF],
            uF = 0;
          if ("number" === typeof WF && (SF = WF, WF = null), WF || SF)
            for (uF = 0; uF < AF.length; uF++) {
              var hF = SF === AF[uF].id;
              if (WF === AF[uF].bA && hF || !WF && hF) {
                AF.splice(uF, 1);
                break
              }
            } else if (FF) CF["_on" + FF] = [];
            else {
              var bW = Object.keys(CF);
              for (uF = 0; uF < bW.length; uF++) 0 === bW[uF].indexOf("_on") && Array.isArray(CF[bW[uF]]) && (CF[bW[uF]] = [])
            } return CF
        },
        once: function(FF, WF, SF) {
          return this.on(FF, WF, SF, 1), this
        },
        _emit: function(FF, WF, SF) {
          for (var CF = this, AF = CF["_on" + FF], uF = AF.length - 1; uF >= 0; uF--) AF[uF].id && AF[uF].id !== WF && "load" !== FF || (setTimeout(function(FF) {
            FF.call(this, WF, SF)
          }.bind(CF, AF[uF].bA), 0), AF[uF].once && CF.off(FF, AF[uF].bA, AF[uF].id));
          return CF._loadQueue(FF), CF
        },
        _loadQueue: function(FF) {
          var WF = this;
          if (WF._queue.length > 0) {
            var SF = WF._queue[0];
            SF.event === FF && (WF._queue.shift(), WF._loadQueue()), FF || SF.action()
          }
          return WF
        },
        _ended: function(FF) {
          var WF = this,
            SF = FF._sprite;
          if (!WF._webAudio && FF._node && !FF._node.paused && !FF._node.ended && FF._node.currentTime < FF._stop) return setTimeout(WF._ended.bind(WF, FF), 100), WF;
          var CF = !(!FF._loop && !WF._sprite[SF][2]);
          if (WF._emit("end", FF._id), !WF._webAudio && CF && WF.stop(FF._id, !0).play(FF._id), WF._webAudio && CF) {
            WF._emit("play", FF._id), FF._seek = FF._start || 0, FF._rateSeek = 0, FF._playStart = uF.ctx.currentTime;
            var AF = 1e3 * (FF._stop - FF._start) / Math.abs(FF._rate);
            WF._endTimers[FF._id] = setTimeout(WF._ended.bind(WF, FF), AF)
          }
          return WF._webAudio && !CF && (FF.vmF = !0, FF._ended = !0, FF._seek = FF._start || 0, FF._rateSeek = 0, WF._clearTimer(FF._id), WF._cleanBuffer(FF._node), uF._autoSuspend()), WF._webAudio || CF || WF.stop(FF._id, !0), WF
        },
        _clearTimer: function(FF) {
          var WF = this;
          if (WF._endTimers[FF]) {
            if ("function" !== typeof WF._endTimers[FF]) clearTimeout(WF._endTimers[FF]);
            else {
              var SF = WF._soundById(FF);
              SF && SF._node && SF._node.removeEventListener("ended", WF._endTimers[FF], !1)
            }
            delete WF._endTimers[FF]
          }
          return WF
        },
        _soundById: function(FF) {
          for (var WF = this, SF = 0; SF < WF._sounds.length; SF++)
            if (FF === WF._sounds[SF]._id) return WF._sounds[SF];
          return null
        },
        _inactiveSound: function() {
          var FF = this;
          FF._drain();
          for (var WF = 0; WF < FF._sounds.length; WF++)
            if (FF._sounds[WF]._ended) return FF._sounds[WF].reset();
          return new bW(FF)
        },
        _drain: function() {
          var FF = this,
            WF = FF._pool,
            SF = 0,
            CF = 0;
          if (!(FF._sounds.length < WF)) {
            for (CF = 0; CF < FF._sounds.length; CF++) FF._sounds[CF]._ended && SF++;
            for (CF = FF._sounds.length - 1; CF >= 0; CF--) {
              if (SF <= WF) return;
              FF._sounds[CF]._ended && (FF._webAudio && FF._sounds[CF]._node && FF._sounds[CF]._node.disconnect(0), FF._sounds.splice(CF, 1), SF--)
            }
          }
        },
        _getSoundIds: function(FF) {
          if ("undefined" === typeof FF) {
            for (var WF = [], SF = 0; SF < this._sounds.length; SF++) WF.push(this._sounds[SF]._id);
            return WF
          }
          return [FF]
        },
        _refreshBuffer: function(FF) {
          return FF._node.bufferSource = uF.ctx.createBufferSource(), FF._node.bufferSource.buffer = dF[this._src], FF._panner ? FF._node.bufferSource.connect(FF._panner) : FF._node.bufferSource.connect(FF._node), FF._node.bufferSource.loop = FF._loop, FF._loop && (FF._node.bufferSource.loopStart = FF._start || 0, FF._node.bufferSource.loopEnd = FF._stop || 0), FF._node.bufferSource.playbackRate.setValueAtTime(FF._rate, uF.ctx.currentTime), this
        },
        _cleanBuffer: function(FF) {
          var WF = uF._navigator && uF._navigator.vendor.indexOf("Apple") >= 0;
          if (uF._scratchBuffer && FF.bufferSource && (FF.bufferSource.onended = null, FF.bufferSource.disconnect(0), WF)) try {
            FF.bufferSource.buffer = uF._scratchBuffer
          } catch (SF) {}
          return FF.bufferSource = null, this
        },
        _clearSound: function(FF) {
          /MSIE |Trident\//.test(uF._navigator && uF._navigator.userAgent) || (FF.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var bW = function(FF) {
        this._parent = FF, this.init()
      };
      bW.prototype = {
        init: function() {
          var FF = this,
            WF = FF._parent;
          return FF._muted = WF._muted, FF._loop = WF._loop, FF._volume = WF._volume, FF._rate = WF._rate, FF._seek = 0, FF.vmF = !0, FF._ended = !0, FF._sprite = "__default", FF._id = ++uF._counter, WF._sounds.push(FF), FF.create(), FF
        },
        create: function() {
          var FF = this,
            WF = FF._parent,
            SF = uF._muted || FF._muted || FF._parent._muted ? 0 : FF._volume;
          return WF._webAudio ? (FF._node = "undefined" === typeof uF.ctx.createGain ? uF.ctx.createGainNode() : uF.ctx.createGain(), FF._node.gain.setValueAtTime(SF, uF.ctx.currentTime), FF._node.paused = !0, FF._node.connect(uF.masterGain)) : uF.noAudio || (FF._node = uF._obtainHtml5Audio(), FF._errorFn = FF._errorListener.bind(FF), FF._node.addEventListener("error", FF._errorFn, !1), FF._loadFn = FF._loadListener.bind(FF), FF._node.addEventListener(uF._canPlayEvent, FF._loadFn, !1), FF._endFn = FF._endListener.bind(FF), FF._node.addEventListener("ended", FF._endFn, !1), FF._node.src = WF._src, FF._node.preload = !0 === WF._preload ? "auto" : WF._preload, FF._node.volume = SF * uF.volume(), FF._node.load()), FF
        },
        reset: function() {
          var FF = this,
            WF = FF._parent;
          return FF._muted = WF._muted, FF._loop = WF._loop, FF._volume = WF._volume, FF._rate = WF._rate, FF._seek = 0, FF._rateSeek = 0, FF.vmF = !0, FF._ended = !0, FF._sprite = "__default", FF._id = ++uF._counter, FF
        },
        _errorListener: function() {
          var FF = this;
          FF._parent._emit("loaderror", FF._id, FF._node.error ? FF._node.error.code : 0), FF._node.removeEventListener("error", FF._errorFn, !1)
        },
        _loadListener: function() {
          var FF = this,
            WF = FF._parent;
          WF._duration = Math.ceil(10 * FF._node.duration) / 10, 0 === Object.keys(WF._sprite).length && (WF._sprite = {
            __default: [0, 1e3 * WF._duration]
          }), "loaded" !== WF._state && (WF._state = "loaded", WF._emit("load"), WF._loadQueue()), FF._node.removeEventListener(uF._canPlayEvent, FF._loadFn, !1)
        },
        _endListener: function() {
          var FF = this,
            WF = FF._parent;
          WF._duration === 1 / 0 && (WF._duration = Math.ceil(10 * FF._node.duration) / 10, WF._sprite.__default[1] === 1 / 0 && (WF._sprite.__default[1] = 1e3 * WF._duration), WF._ended(FF)), FF._node.removeEventListener("ended", FF._endFn, !1)
        }
      };
      var dF = {},
        PF = function(FF) {
          var WF = FF._src;
          if (dF[WF]) return FF._duration = dF[WF].duration, void eF(FF);
          if (/^data:[^;]+;base64,/.test(WF)) {
            for (var SF = atob(WF.split(",")[1]), CF = new Uint8Array(SF.length), AF = 0; AF < SF.length; ++AF) CF[AF] = SF.charCodeAt(AF);
            iW(CF.buffer, FF)
          } else {
            var uF = new XMLHttpRequest;
            uF.open(FF._xhr.method, WF, !0), uF.withCredentials = FF._xhr.withCredentials, uF.responseType = "arraybuffer", FF._xhr.headers && Object.keys(FF._xhr.headers).forEach((function(WF) {
              uF.setRequestHeader(WF, FF._xhr.headers[WF])
            })), uF.onload = function() {
              var WF = (uF.status + "")[0];
              "0" === WF || "2" === WF || "3" === WF ? iW(uF.response, FF) : FF._emit("loaderror", null, "Failed loading audio file with status: " + uF.status + ".")
            }, uF.onerror = function() {
              FF._webAudio && (FF._html5 = !0, FF._webAudio = !1, FF._sounds = [], delete dF[WF], FF.load())
            }, RF(uF)
          }
        },
        RF = function(FF) {
          try {
            FF.send()
          } catch (WF) {
            FF.onerror()
          }
        },
        iW = function(FF, WF) {
          var SF = function() {
              WF._emit("loaderror", null, "Decoding audio data failed.")
            },
            CF = function(FF) {
              FF && WF._sounds.length > 0 ? (dF[WF._src] = FF, eF(WF, FF)) : SF()
            };
          "undefined" !== typeof Promise && 1 === uF.ctx.decodeAudioData.length ? uF.ctx.decodeAudioData(FF).then(CF).catch(SF) : uF.ctx.decodeAudioData(FF, CF, SF)
        },
        eF = function(FF, WF) {
          WF && !FF._duration && (FF._duration = WF.duration), 0 === Object.keys(FF._sprite).length && (FF._sprite = {
            __default: [0, 1e3 * FF._duration]
          }), "loaded" !== FF._state && (FF._state = "loaded", FF._emit("load"), FF._loadQueue())
        },
        EF = function() {
          if (uF.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? uF.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? uF.ctx = new webkitAudioContext : uF.usingWebAudio = !1
            } catch (AF) {
              uF.usingWebAudio = !1
            }
            uF.ctx || (uF.usingWebAudio = !1);
            var FF = /iP(hone|od|ad)/.test(uF._navigator && uF._navigator.platform),
              WF = uF._navigator && uF._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              SF = WF ? parseInt(WF[1], 10) : null;
            if (FF && SF && SF < 9) {
              var CF = /safari/.test(uF._navigator && uF._navigator.userAgent.toLowerCase());
              uF._navigator && !CF && (uF.usingWebAudio = !1)
            }
            uF.usingWebAudio && (uF.masterGain = "undefined" === typeof uF.ctx.createGain ? uF.ctx.createGainNode() : uF.ctx.createGain(), uF.masterGain.gain.setValueAtTime(uF._muted ? 0 : uF._volume, uF.ctx.currentTime), uF.masterGain.connect(uF.ctx.destination)), uF._setup()
          }
        };
      void 0 === (CF = function() {
        return {
          Howler: uF,
          Howl: hF
        }
      }.apply(WF, [])) || (FF.exports = CF), WF.Howler = uF, WF.Howl = hF, "undefined" !== typeof SF.g ? (SF.g.HowlerGlobal = AF, SF.g.Howler = uF, SF.g.Howl = hF, SF.g.Sound = bW) : "undefined" !== typeof window && (window.HowlerGlobal = AF, window.Howler = uF, window.Howl = hF, window.Sound = bW)
    }(),
    function() {
      var FF;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(FF) {
        var WF = this;
        if (!WF.ctx || !WF.ctx.listener) return WF;
        for (var SF = WF._howls.length - 1; SF >= 0; SF--) WF._howls[SF].stereo(FF);
        return WF
      }, HowlerGlobal.prototype.pos = function(FF, WF, SF) {
        var CF = this;
        return CF.ctx && CF.ctx.listener ? (WF = "number" !== typeof WF ? CF._pos[1] : WF, SF = "number" !== typeof SF ? CF._pos[2] : SF, "number" !== typeof FF ? CF._pos : (CF._pos = [FF, WF, SF], "undefined" !== typeof CF.ctx.listener.positionX ? (CF.ctx.listener.positionX.setTargetAtTime(CF._pos[0], Howler.ctx.currentTime, .1), CF.ctx.listener.positionY.setTargetAtTime(CF._pos[1], Howler.ctx.currentTime, .1), CF.ctx.listener.positionZ.setTargetAtTime(CF._pos[2], Howler.ctx.currentTime, .1)) : CF.ctx.listener.setPosition(CF._pos[0], CF._pos[1], CF._pos[2]), CF)) : CF
      }, HowlerGlobal.prototype.orientation = function(FF, WF, SF, CF, AF, uF) {
        var hF = this;
        if (!hF.ctx || !hF.ctx.listener) return hF;
        var bW = hF._orientation;
        return WF = "number" !== typeof WF ? bW[1] : WF, SF = "number" !== typeof SF ? bW[2] : SF, CF = "number" !== typeof CF ? bW[3] : CF, AF = "number" !== typeof AF ? bW[4] : AF, uF = "number" !== typeof uF ? bW[5] : uF, "number" !== typeof FF ? bW : (hF._orientation = [FF, WF, SF, CF, AF, uF], "undefined" !== typeof hF.ctx.listener.forwardX ? (hF.ctx.listener.forwardX.setTargetAtTime(FF, Howler.ctx.currentTime, .1), hF.ctx.listener.forwardY.setTargetAtTime(WF, Howler.ctx.currentTime, .1), hF.ctx.listener.forwardZ.setTargetAtTime(SF, Howler.ctx.currentTime, .1), hF.ctx.listener.upX.setTargetAtTime(CF, Howler.ctx.currentTime, .1), hF.ctx.listener.upY.setTargetAtTime(AF, Howler.ctx.currentTime, .1), hF.ctx.listener.upZ.setTargetAtTime(uF, Howler.ctx.currentTime, .1)) : hF.ctx.listener.setOrientation(FF, WF, SF, CF, AF, uF), hF)
      }, Howl.prototype.init = (FF = Howl.prototype.init, function(WF) {
        var SF = this;
        return SF._orientation = WF.orientation || [1, 0, 0], SF._stereo = WF.stereo || null, SF._pos = WF.pos || null, SF._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof WF.coneInnerAngle ? WF.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof WF.coneOuterAngle ? WF.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof WF.coneOuterGain ? WF.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof WF.distanceModel ? WF.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof WF.maxDistance ? WF.maxDistance : 1e4,
          panningModel: "undefined" !== typeof WF.panningModel ? WF.panningModel : "HRTF",
          refDistance: "undefined" !== typeof WF.refDistance ? WF.refDistance : 1,
          rolloffFactor: "undefined" !== typeof WF.rolloffFactor ? WF.rolloffFactor : 1
        }, SF._onstereo = WF.onstereo ? [{
          bA: WF.onstereo
        }] : [], SF._onpos = WF.onpos ? [{
          bA: WF.onpos
        }] : [], SF._onorientation = WF.onorientation ? [{
          bA: WF.onorientation
        }] : [], FF.call(this, WF)
      }), Howl.prototype.stereo = function(FF, SF) {
        var CF = this;
        if (!CF._webAudio) return CF;
        if ("loaded" !== CF._state) return CF._queue.push({
          event: "stereo",
          action: function() {
            CF.stereo(FF, SF)
          }
        }), CF;
        var AF = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof SF) {
          if ("number" !== typeof FF) return CF._stereo;
          CF._stereo = FF, CF._pos = [FF, 0, 0]
        }
        for (var uF = CF._getSoundIds(SF), hF = 0; hF < uF.length; hF++) {
          var bW = CF._soundById(uF[hF]);
          if (bW) {
            if ("number" !== typeof FF) return bW._stereo;
            bW._stereo = FF, bW._pos = [FF, 0, 0], bW._node && (bW._pannerAttr.panningModel = "equalpower", bW._panner && bW._panner.pan || WF(bW, AF), "spatial" === AF ? "undefined" !== typeof bW._panner.positionX ? (bW._panner.positionX.setValueAtTime(FF, Howler.ctx.currentTime), bW._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), bW._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : bW._panner.setPosition(FF, 0, 0) : bW._panner.pan.setValueAtTime(FF, Howler.ctx.currentTime)), CF._emit("stereo", bW._id)
          }
        }
        return CF
      }, Howl.prototype.pos = function(FF, SF, CF, AF) {
        var uF = this;
        if (!uF._webAudio) return uF;
        if ("loaded" !== uF._state) return uF._queue.push({
          event: "pos",
          action: function() {
            uF.pos(FF, SF, CF, AF)
          }
        }), uF;
        if (SF = "number" !== typeof SF ? 0 : SF, CF = "number" !== typeof CF ? -.5 : CF, "undefined" === typeof AF) {
          if ("number" !== typeof FF) return uF._pos;
          uF._pos = [FF, SF, CF]
        }
        for (var hF = uF._getSoundIds(AF), bW = 0; bW < hF.length; bW++) {
          var dF = uF._soundById(hF[bW]);
          if (dF) {
            if ("number" !== typeof FF) return dF._pos;
            dF._pos = [FF, SF, CF], dF._node && (dF._panner && !dF._panner.pan || WF(dF, "spatial"), "undefined" !== typeof dF._panner.positionX ? (dF._panner.positionX.setValueAtTime(FF, Howler.ctx.currentTime), dF._panner.positionY.setValueAtTime(SF, Howler.ctx.currentTime), dF._panner.positionZ.setValueAtTime(CF, Howler.ctx.currentTime)) : dF._panner.setPosition(FF, SF, CF)), uF._emit("pos", dF._id)
          }
        }
        return uF
      }, Howl.prototype.orientation = function(FF, SF, CF, AF) {
        var uF = this;
        if (!uF._webAudio) return uF;
        if ("loaded" !== uF._state) return uF._queue.push({
          event: "orientation",
          action: function() {
            uF.orientation(FF, SF, CF, AF)
          }
        }), uF;
        if (SF = "number" !== typeof SF ? uF._orientation[1] : SF, CF = "number" !== typeof CF ? uF._orientation[2] : CF, "undefined" === typeof AF) {
          if ("number" !== typeof FF) return uF._orientation;
          uF._orientation = [FF, SF, CF]
        }
        for (var hF = uF._getSoundIds(AF), bW = 0; bW < hF.length; bW++) {
          var dF = uF._soundById(hF[bW]);
          if (dF) {
            if ("number" !== typeof FF) return dF._orientation;
            dF._orientation = [FF, SF, CF], dF._node && (dF._panner || (dF._pos || (dF._pos = uF._pos || [0, 0, -.5]), WF(dF, "spatial")), "undefined" !== typeof dF._panner.orientationX ? (dF._panner.orientationX.setValueAtTime(FF, Howler.ctx.currentTime), dF._panner.orientationY.setValueAtTime(SF, Howler.ctx.currentTime), dF._panner.orientationZ.setValueAtTime(CF, Howler.ctx.currentTime)) : dF._panner.setOrientation(FF, SF, CF)), uF._emit("orientation", dF._id)
          }
        }
        return uF
      }, Howl.prototype.pannerAttr = function() {
        var FF, SF, CF, AF = this,
          uF = arguments;
        if (!AF._webAudio) return AF;
        if (0 === uF.length) return AF._pannerAttr;
        if (1 === uF.length) {
          if ("object" !== typeof uF[0]) return (CF = AF._soundById(parseInt(uF[0], 10))) ? CF._pannerAttr : AF._pannerAttr;
          FF = uF[0], "undefined" === typeof SF && (FF.pannerAttr || (FF.pannerAttr = {
            coneInnerAngle: FF.coneInnerAngle,
            coneOuterAngle: FF.coneOuterAngle,
            coneOuterGain: FF.coneOuterGain,
            distanceModel: FF.distanceModel,
            maxDistance: FF.maxDistance,
            refDistance: FF.refDistance,
            rolloffFactor: FF.rolloffFactor,
            panningModel: FF.panningModel
          }), AF._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof FF.pannerAttr.coneInnerAngle ? FF.pannerAttr.coneInnerAngle : AF._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof FF.pannerAttr.coneOuterAngle ? FF.pannerAttr.coneOuterAngle : AF._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof FF.pannerAttr.coneOuterGain ? FF.pannerAttr.coneOuterGain : AF._coneOuterGain,
            distanceModel: "undefined" !== typeof FF.pannerAttr.distanceModel ? FF.pannerAttr.distanceModel : AF._distanceModel,
            maxDistance: "undefined" !== typeof FF.pannerAttr.maxDistance ? FF.pannerAttr.maxDistance : AF._maxDistance,
            refDistance: "undefined" !== typeof FF.pannerAttr.refDistance ? FF.pannerAttr.refDistance : AF._refDistance,
            rolloffFactor: "undefined" !== typeof FF.pannerAttr.rolloffFactor ? FF.pannerAttr.rolloffFactor : AF._rolloffFactor,
            panningModel: "undefined" !== typeof FF.pannerAttr.panningModel ? FF.pannerAttr.panningModel : AF._panningModel
          })
        } else 2 === uF.length && (FF = uF[0], SF = parseInt(uF[1], 10));
        for (var hF = AF._getSoundIds(SF), bW = 0; bW < hF.length; bW++)
          if (CF = AF._soundById(hF[bW])) {
            var dF = CF._pannerAttr;
            dF = {
              coneInnerAngle: "undefined" !== typeof FF.coneInnerAngle ? FF.coneInnerAngle : dF.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof FF.coneOuterAngle ? FF.coneOuterAngle : dF.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof FF.coneOuterGain ? FF.coneOuterGain : dF.coneOuterGain,
              distanceModel: "undefined" !== typeof FF.distanceModel ? FF.distanceModel : dF.distanceModel,
              maxDistance: "undefined" !== typeof FF.maxDistance ? FF.maxDistance : dF.maxDistance,
              refDistance: "undefined" !== typeof FF.refDistance ? FF.refDistance : dF.refDistance,
              rolloffFactor: "undefined" !== typeof FF.rolloffFactor ? FF.rolloffFactor : dF.rolloffFactor,
              panningModel: "undefined" !== typeof FF.panningModel ? FF.panningModel : dF.panningModel
            };
            var PF = CF._panner;
            PF ? (PF.coneInnerAngle = dF.coneInnerAngle, PF.coneOuterAngle = dF.coneOuterAngle, PF.coneOuterGain = dF.coneOuterGain, PF.distanceModel = dF.distanceModel, PF.maxDistance = dF.maxDistance, PF.refDistance = dF.refDistance, PF.rolloffFactor = dF.rolloffFactor, PF.panningModel = dF.panningModel) : (CF._pos || (CF._pos = AF._pos || [0, 0, -.5]), WF(CF, "spatial"))
          } return AF
      }, Sound.prototype.init = function(FF) {
        return function() {
          var WF = this,
            SF = WF._parent;
          WF._orientation = SF._orientation, WF._stereo = SF._stereo, WF._pos = SF._pos, WF._pannerAttr = SF._pannerAttr, FF.call(this), WF._stereo ? SF.stereo(WF._stereo) : WF._pos && SF.pos(WF._pos[0], WF._pos[1], WF._pos[2], WF._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(FF) {
        return function() {
          var WF = this,
            SF = WF._parent;
          return WF._orientation = SF._orientation, WF._stereo = SF._stereo, WF._pos = SF._pos, WF._pannerAttr = SF._pannerAttr, WF._stereo ? SF.stereo(WF._stereo) : WF._pos ? SF.pos(WF._pos[0], WF._pos[1], WF._pos[2], WF._id) : WF._panner && (WF._panner.disconnect(0), WF._panner = void 0, SF._refreshBuffer(WF)), FF.call(this)
        }
      }(Sound.prototype.reset);
      var WF = function(FF, WF) {
        "spatial" === (WF = WF || "spatial") ? (FF._panner = Howler.ctx.createPanner(), FF._panner.coneInnerAngle = FF._pannerAttr.coneInnerAngle, FF._panner.coneOuterAngle = FF._pannerAttr.coneOuterAngle, FF._panner.coneOuterGain = FF._pannerAttr.coneOuterGain, FF._panner.distanceModel = FF._pannerAttr.distanceModel, FF._panner.maxDistance = FF._pannerAttr.maxDistance, FF._panner.refDistance = FF._pannerAttr.refDistance, FF._panner.rolloffFactor = FF._pannerAttr.rolloffFactor, FF._panner.panningModel = FF._pannerAttr.panningModel, "undefined" !== typeof FF._panner.positionX ? (FF._panner.positionX.setValueAtTime(FF._pos[0], Howler.ctx.currentTime), FF._panner.positionY.setValueAtTime(FF._pos[1], Howler.ctx.currentTime), FF._panner.positionZ.setValueAtTime(FF._pos[2], Howler.ctx.currentTime)) : FF._panner.setPosition(FF._pos[0], FF._pos[1], FF._pos[2]), "undefined" !== typeof FF._panner.orientationX ? (FF._panner.orientationX.setValueAtTime(FF._orientation[0], Howler.ctx.currentTime), FF._panner.orientationY.setValueAtTime(FF._orientation[1], Howler.ctx.currentTime), FF._panner.orientationZ.setValueAtTime(FF._orientation[2], Howler.ctx.currentTime)) : FF._panner.setOrientation(FF._orientation[0], FF._orientation[1], FF._orientation[2])) : (FF._panner = Howler.ctx.createStereoPanner(), FF._panner.pan.setValueAtTime(FF._stereo, Howler.ctx.currentTime)), FF._panner.connect(FF._node), FF.vmF || FF._parent.pause(FF._id, !0).play(FF._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);