/*! For license information please see cwj32u.111.6d2e18e9.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5343: (HH, BH, LH) => {
    var AH;
    ! function() {
      var rH = function() {
        this.init()
      };
      rH.prototype = {
        init: function() {
          var HH = this || SH;
          return HH._counter = 1e3, HH._html5AudioPool = [], HH.html5PoolSize = 10, HH._codecs = {}, HH._howls = [], HH._muted = !1, HH._volume = 1, HH._canPlayEvent = "canplaythrough", HH._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, HH.masterGain = null, HH.noAudio = !1, HH.usingWebAudio = !0, HH.autoSuspend = !0, HH.ctx = null, HH.autoUnlock = !0, HH._setup(), HH
        },
        volume: function(HH) {
          var BH = this || SH;
          if (HH = parseFloat(HH), BH.ctx || YH(), "undefined" !== typeof HH && HH >= 0 && HH <= 1) {
            if (BH._volume = HH, BH._muted) return BH;
            BH.usingWebAudio && BH.masterGain.gain.setValueAtTime(HH, SH.ctx.currentTime);
            for (var LH = 0; LH < BH._howls.length; LH++)
              if (!BH._howls[LH]._webAudio)
                for (var AH = BH._howls[LH]._getSoundIds(), rH = 0; rH < AH.length; rH++) {
                  var hH = BH._howls[LH]._soundById(AH[rH]);
                  hH && hH._node && (hH._node.volume = hH._volume * HH)
                }
            return BH
          }
          return BH._volume
        },
        mute: function(HH) {
          var BH = this || SH;
          BH.ctx || YH(), BH._muted = HH, BH.usingWebAudio && BH.masterGain.gain.setValueAtTime(HH ? 0 : BH._volume, SH.ctx.currentTime);
          for (var LH = 0; LH < BH._howls.length; LH++)
            if (!BH._howls[LH]._webAudio)
              for (var AH = BH._howls[LH]._getSoundIds(), rH = 0; rH < AH.length; rH++) {
                var hH = BH._howls[LH]._soundById(AH[rH]);
                hH && hH._node && (hH._node.muted = !!HH || hH._muted)
              }
          return BH
        },
        stop: function() {
          for (var HH = this || SH, BH = 0; BH < HH._howls.length; BH++) HH._howls[BH].stop();
          return HH
        },
        unload: function() {
          for (var HH = this || SH, BH = HH._howls.length - 1; BH >= 0; BH--) HH._howls[BH].unload();
          return HH.usingWebAudio && HH.ctx && "undefined" !== typeof HH.ctx.close && (HH.ctx.close(), HH.ctx = null, YH()), HH
        },
        codecs: function(HH) {
          return (this || SH)._codecs[HH.replace(/^x-/, "")]
        },
        _setup: function() {
          var HH = this || SH;
          if (HH.state = HH.ctx && HH.ctx.state || "suspended", HH._autoSuspend(), !HH.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (HH._canPlayEvent = "canplay")
            } catch (BH) {
              HH.noAudio = !0
            } else HH.noAudio = !0;
          try {
            (new Audio).muted && (HH.noAudio = !0)
          } catch (BH) {}
          return HH.noAudio || HH._setupCodecs(), HH
        },
        _setupCodecs: function() {
          var HH = this || SH,
            BH = null;
          try {
            BH = "undefined" !== typeof Audio ? new Audio : null
          } catch (EH) {
            return HH
          }
          if (!BH || "function" !== typeof BH.canPlayType) return HH;
          var LH = BH.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            AH = HH._navigator ? HH._navigator.userAgent : "",
            rH = AH.match(/OPR\/([0-6].)/g),
            hH = rH && parseInt(rH[0].split("/")[1], 10) < 33,
            tH = -1 !== AH.indexOf("Safari") && -1 === AH.indexOf("Chrome"),
            zH = AH.match(/Version\/(.*?) /),
            CH = tH && zH && parseInt(zH[1], 10) < 15;
          return HH._codecs = {
            mp3: !(hH || !LH && !BH.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!LH,
            opus: !!BH.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!BH.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!BH.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(BH.canPlayType('audio/wav; codecs="1"') || BH.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!BH.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!BH.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(BH.canPlayType("audio/x-m4a;") || BH.canPlayType("audio/m4a;") || BH.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(BH.canPlayType("audio/x-m4b;") || BH.canPlayType("audio/m4b;") || BH.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(BH.canPlayType("audio/x-mp4;") || BH.canPlayType("audio/mp4;") || BH.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(CH || !BH.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(CH || !BH.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!BH.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(BH.canPlayType("audio/x-flac;") || BH.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, HH
        },
        _unlockAudio: function() {
          var HH = this || SH;
          if (!HH._audioUnlocked && HH.ctx) {
            HH._audioUnlocked = !1, HH.autoUnlock = !1, HH._mobileUnloaded || 44100 === HH.ctx.sampleRate || (HH._mobileUnloaded = !0, HH.unload()), HH._scratchBuffer = HH.ctx.createBuffer(1, 1, 22050);
            var BH = function(LH) {
              for (; HH._html5AudioPool.length < HH.html5PoolSize;) try {
                var AH = new Audio;
                AH._unlocked = !0, HH._releaseHtml5Audio(AH)
              } catch (LH) {
                HH.noAudio = !0;
                break
              }
              for (var rH = 0; rH < HH._howls.length; rH++)
                if (!HH._howls[rH]._webAudio)
                  for (var SH = HH._howls[rH]._getSoundIds(), hH = 0; hH < SH.length; hH++) {
                    var tH = HH._howls[rH]._soundById(SH[hH]);
                    tH && tH._node && !tH._node._unlocked && (tH._node._unlocked = !0, tH._node.load())
                  }
              HH._autoResume();
              var zH = HH.ctx.createBufferSource();
              zH.buffer = HH._scratchBuffer, zH.connect(HH.ctx.destination), "undefined" === typeof zH.start ? zH.noteOn(0) : zH.start(0), "function" === typeof HH.ctx.resume && HH.ctx.resume(), zH.onended = function() {
                zH.disconnect(0), HH._audioUnlocked = !0, document.removeEventListener("touchstart", BH, !0), document.removeEventListener("touchend", BH, !0), document.removeEventListener("click", BH, !0), document.removeEventListener("keydown", BH, !0);
                for (var LH = 0; LH < HH._howls.length; LH++) HH._howls[LH]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", BH, !0), document.addEventListener("touchend", BH, !0), document.addEventListener("click", BH, !0), document.addEventListener("keydown", BH, !0), HH
          }
        },
        _obtainHtml5Audio: function() {
          var HH = this || SH;
          if (HH._html5AudioPool.length) return HH._html5AudioPool.pop();
          var BH = (new Audio).play();
          return BH && "undefined" !== typeof Promise && (BH instanceof Promise || "function" === typeof BH.then) && BH.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(HH) {
          var BH = this || SH;
          return HH._unlocked && BH._html5AudioPool.push(HH), BH
        },
        _autoSuspend: function() {
          var HH = this;
          if (HH.autoSuspend && HH.ctx && "undefined" !== typeof HH.ctx.suspend && SH.usingWebAudio) {
            for (var BH = 0; BH < HH._howls.length; BH++)
              if (HH._howls[BH]._webAudio)
                for (var LH = 0; LH < HH._howls[BH]._sounds.length; LH++)
                  if (!HH._howls[BH]._sounds[LH].oX) return HH;
            return HH._suspendTimer && clearTimeout(HH._suspendTimer), HH._suspendTimer = setTimeout((function() {
              if (HH.autoSuspend) {
                HH._suspendTimer = null, HH.state = "suspending";
                var BH = function() {
                  HH.state = "suspended", HH._resumeAfterSuspend && (delete HH._resumeAfterSuspend, HH._autoResume())
                };
                HH.ctx.suspend().then(BH, BH)
              }
            }), 3e4), HH
          }
        },
        _autoResume: function() {
          var HH = this;
          if (HH.ctx && "undefined" !== typeof HH.ctx.resume && SH.usingWebAudio) return "running" === HH.state && "interrupted" !== HH.ctx.state && HH._suspendTimer ? (clearTimeout(HH._suspendTimer), HH._suspendTimer = null) : "suspended" === HH.state || "running" === HH.state && "interrupted" === HH.ctx.state ? (HH.ctx.resume().then((function() {
            HH.state = "running";
            for (var BH = 0; BH < HH._howls.length; BH++) HH._howls[BH]._emit("resume")
          })), HH._suspendTimer && (clearTimeout(HH._suspendTimer), HH._suspendTimer = null)) : "suspending" === HH.state && (HH._resumeAfterSuspend = !0), HH
        }
      };
      var SH = new rH,
        hH = function(HH) {
          HH.src && 0 !== HH.src.length ? this.init(HH) : console.error("An array of source files must be passed with any new Howl.")
        };
      hH.prototype = {
        init: function(HH) {
          var BH = this;
          return SH.ctx || YH(), BH._autoplay = HH.autoplay || !1, BH._format = "string" !== typeof HH.format ? HH.format : [HH.format], BH._html5 = HH.html5 || !1, BH._muted = HH.mute || !1, BH._loop = HH.loop || !1, BH._pool = HH.pool || 5, BH._preload = "boolean" !== typeof HH.preload && "metadata" !== HH.preload || HH.preload, BH._rate = HH.rate || 1, BH._sprite = HH.sprite || {}, BH._src = "string" !== typeof HH.src ? HH.src : [HH.src], BH._volume = void 0 !== HH.volume ? HH.volume : 1, BH._xhr = {
            method: HH.xhr && HH.xhr.method ? HH.xhr.method : "GET",
            headers: HH.xhr && HH.xhr.headers ? HH.xhr.headers : null,
            withCredentials: !(!HH.xhr || !HH.xhr.withCredentials) && HH.xhr.withCredentials
          }, BH._duration = 0, BH._state = "unloaded", BH._sounds = [], BH._endTimers = {}, BH._queue = [], BH._playLock = !1, BH._onend = HH.onend ? [{
            EX: HH.onend
          }] : [], BH._onfade = HH.onfade ? [{
            EX: HH.onfade
          }] : [], BH._onload = HH.onload ? [{
            EX: HH.onload
          }] : [], BH._onloaderror = HH.onloaderror ? [{
            EX: HH.onloaderror
          }] : [], BH._onplayerror = HH.onplayerror ? [{
            EX: HH.onplayerror
          }] : [], BH._onpause = HH.onpause ? [{
            EX: HH.onpause
          }] : [], BH._onplay = HH.onplay ? [{
            EX: HH.onplay
          }] : [], BH._onstop = HH.onstop ? [{
            EX: HH.onstop
          }] : [], BH._onmute = HH.onmute ? [{
            EX: HH.onmute
          }] : [], BH._onvolume = HH.onvolume ? [{
            EX: HH.onvolume
          }] : [], BH._onrate = HH.onrate ? [{
            EX: HH.onrate
          }] : [], BH._onseek = HH.onseek ? [{
            EX: HH.onseek
          }] : [], BH._onunlock = HH.onunlock ? [{
            EX: HH.onunlock
          }] : [], BH._onresume = [], BH._webAudio = SH.usingWebAudio && !BH._html5, "undefined" !== typeof SH.ctx && SH.ctx && SH.autoUnlock && SH._unlockAudio(), SH._howls.push(BH), BH._autoplay && BH._queue.push({
            event: "play",
            action: function() {
              BH.play()
            }
          }), BH._preload && "none" !== BH._preload && BH.load(), BH
        },
        load: function() {
          var HH = this,
            BH = null;
          if (SH.noAudio) HH._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof HH._src && (HH._src = [HH._src]);
            for (var LH = 0; LH < HH._src.length; LH++) {
              var AH, rH;
              if (HH._format && HH._format[LH]) AH = HH._format[LH];
              else {
                if ("string" !== typeof(rH = HH._src[LH])) {
                  HH._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(AH = /^data:audio\/([^;,]+);/i.exec(rH)) || (AH = /\.([^.]+)$/.exec(rH.split("?", 1)[0])), AH && (AH = AH[1].toLowerCase())
              }
              if (AH || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), AH && SH.codecs(AH)) {
                BH = HH._src[LH];
                break
              }
            }
            if (BH) return HH._src = BH, HH._state = "loading", "https:" === window.location.protocol && "http:" === BH.slice(0, 5) && (HH._html5 = !0, HH._webAudio = !1), new tH(HH), HH._webAudio && CH(HH), HH;
            HH._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(HH, BH) {
          var LH = this,
            AH = null;
          if ("number" === typeof HH) AH = HH, HH = null;
          else {
            if ("string" === typeof HH && "loaded" === LH._state && !LH._sprite[HH]) return null;
            if ("undefined" === typeof HH && (HH = "__default", !LH._playLock)) {
              for (var rH = 0, hH = 0; hH < LH._sounds.length; hH++) LH._sounds[hH].oX && !LH._sounds[hH]._ended && (rH++, AH = LH._sounds[hH]._id);
              1 === rH ? HH = null : AH = null
            }
          }
          var tH = AH ? LH._soundById(AH) : LH._inactiveSound();
          if (!tH) return null;
          if (AH && !HH && (HH = tH._sprite || "__default"), "loaded" !== LH._state) {
            tH._sprite = HH, tH._ended = !1;
            var zH = tH._id;
            return LH._queue.push({
              event: "play",
              action: function() {
                LH.play(zH)
              }
            }), zH
          }
          if (AH && !tH.oX) return BH || LH._loadQueue("play"), tH._id;
          LH._webAudio && SH._autoResume();
          var CH = Math.max(0, tH._seek > 0 ? tH._seek : LH._sprite[HH][0] / 1e3),
            EH = Math.max(0, (LH._sprite[HH][0] + LH._sprite[HH][1]) / 1e3 - CH),
            XH = 1e3 * EH / Math.abs(tH._rate),
            GH = LH._sprite[HH][0] / 1e3,
            YH = (LH._sprite[HH][0] + LH._sprite[HH][1]) / 1e3;
          tH._sprite = HH, tH._ended = !1;
          var uH = function() {
            tH.oX = !1, tH._seek = CH, tH._start = GH, tH._stop = YH, tH._loop = !(!tH._loop && !LH._sprite[HH][2])
          };
          if (!(CH >= YH)) {
            var QH = tH._node;
            if (LH._webAudio) {
              var WH = function() {
                LH._playLock = !1, uH(), LH._refreshBuffer(tH);
                var HH = tH._muted || LH._muted ? 0 : tH._volume;
                QH.gain.setValueAtTime(HH, SH.ctx.currentTime), tH._playStart = SH.ctx.currentTime, "undefined" === typeof QH.bufferSource.start ? tH._loop ? QH.bufferSource.noteGrainOn(0, CH, 86400) : QH.bufferSource.noteGrainOn(0, CH, EH) : tH._loop ? QH.bufferSource.start(0, CH, 86400) : QH.bufferSource.start(0, CH, EH), XH !== 1 / 0 && (LH._endTimers[tH._id] = setTimeout(LH._ended.bind(LH, tH), XH)), BH || setTimeout((function() {
                  LH._emit("play", tH._id), LH._loadQueue()
                }), 0)
              };
              "running" === SH.state && "interrupted" !== SH.ctx.state ? WH() : (LH._playLock = !0, LH.once("resume", WH), LH._clearTimer(tH._id))
            } else {
              var MH = function() {
                QH.currentTime = CH, QH.muted = tH._muted || LH._muted || SH._muted || QH.muted, QH.volume = tH._volume * SH.volume(), QH.playbackRate = tH._rate;
                try {
                  var AH = QH.play();
                  if (AH && "undefined" !== typeof Promise && (AH instanceof Promise || "function" === typeof AH.then) ? (LH._playLock = !0, uH(), AH.then((function() {
                      LH._playLock = !1, QH._unlocked = !0, BH ? LH._loadQueue() : LH._emit("play", tH._id)
                    })).catch((function() {
                      LH._playLock = !1, LH._emit("playerror", tH._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), tH._ended = !0, tH.oX = !0
                    }))) : BH || (LH._playLock = !1, uH(), LH._emit("play", tH._id)), QH.playbackRate = tH._rate, QH.paused) return void LH._emit("playerror", tH._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== HH || tH._loop ? LH._endTimers[tH._id] = setTimeout(LH._ended.bind(LH, tH), XH) : (LH._endTimers[tH._id] = function() {
                    LH._ended(tH), QH.removeEventListener("ended", LH._endTimers[tH._id], !1)
                  }, QH.addEventListener("ended", LH._endTimers[tH._id], !1))
                } catch (rH) {
                  LH._emit("playerror", tH._id, rH)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === QH.src && (QH.src = LH._src, QH.load());
              var xH = window && window.ejecta || !QH.readyState && SH._navigator.isCocoonJS;
              if (QH.readyState >= 3 || xH) MH();
              else {
                LH._playLock = !0, LH._state = "loading";
                var vH = function() {
                  LH._state = "loaded", MH(), QH.removeEventListener(SH._canPlayEvent, vH, !1)
                };
                QH.addEventListener(SH._canPlayEvent, vH, !1), LH._clearTimer(tH._id)
              }
            }
            return tH._id
          }
          LH._ended(tH)
        },
        pause: function(HH) {
          var BH = this;
          if ("loaded" !== BH._state || BH._playLock) return BH._queue.push({
            event: "pause",
            action: function() {
              BH.pause(HH)
            }
          }), BH;
          for (var LH = BH._getSoundIds(HH), AH = 0; AH < LH.length; AH++) {
            BH._clearTimer(LH[AH]);
            var rH = BH._soundById(LH[AH]);
            if (rH && !rH.oX && (rH._seek = BH.seek(LH[AH]), rH._rateSeek = 0, rH.oX = !0, BH._stopFade(LH[AH]), rH._node))
              if (BH._webAudio) {
                if (!rH._node.bufferSource) continue;
                "undefined" === typeof rH._node.bufferSource.stop ? rH._node.bufferSource.noteOff(0) : rH._node.bufferSource.stop(0), BH._cleanBuffer(rH._node)
              } else isNaN(rH._node.duration) && rH._node.duration !== 1 / 0 || rH._node.pause();
            arguments[1] || BH._emit("pause", rH ? rH._id : null)
          }
          return BH
        },
        stop: function(HH, BH) {
          var LH = this;
          if ("loaded" !== LH._state || LH._playLock) return LH._queue.push({
            event: "stop",
            action: function() {
              LH.stop(HH)
            }
          }), LH;
          for (var AH = LH._getSoundIds(HH), rH = 0; rH < AH.length; rH++) {
            LH._clearTimer(AH[rH]);
            var SH = LH._soundById(AH[rH]);
            SH && (SH._seek = SH._start || 0, SH._rateSeek = 0, SH.oX = !0, SH._ended = !0, LH._stopFade(AH[rH]), SH._node && (LH._webAudio ? SH._node.bufferSource && ("undefined" === typeof SH._node.bufferSource.stop ? SH._node.bufferSource.noteOff(0) : SH._node.bufferSource.stop(0), LH._cleanBuffer(SH._node)) : isNaN(SH._node.duration) && SH._node.duration !== 1 / 0 || (SH._node.currentTime = SH._start || 0, SH._node.pause(), SH._node.duration === 1 / 0 && LH._clearSound(SH._node))), BH || LH._emit("stop", SH._id))
          }
          return LH
        },
        mute: function(HH, BH) {
          var LH = this;
          if ("loaded" !== LH._state || LH._playLock) return LH._queue.push({
            event: "mute",
            action: function() {
              LH.mute(HH, BH)
            }
          }), LH;
          if ("undefined" === typeof BH) {
            if ("boolean" !== typeof HH) return LH._muted;
            LH._muted = HH
          }
          for (var AH = LH._getSoundIds(BH), rH = 0; rH < AH.length; rH++) {
            var hH = LH._soundById(AH[rH]);
            hH && (hH._muted = HH, hH._interval && LH._stopFade(hH._id), LH._webAudio && hH._node ? hH._node.gain.setValueAtTime(HH ? 0 : hH._volume, SH.ctx.currentTime) : hH._node && (hH._node.muted = !!SH._muted || HH), LH._emit("mute", hH._id))
          }
          return LH
        },
        volume: function() {
          var HH, BH, LH, AH = this,
            rH = arguments;
          if (0 === rH.length) return AH._volume;
          if (1 === rH.length || 2 === rH.length && "undefined" === typeof rH[1] ? AH._getSoundIds().indexOf(rH[0]) >= 0 ? BH = parseInt(rH[0], 10) : HH = parseFloat(rH[0]) : rH.length >= 2 && (HH = parseFloat(rH[0]), BH = parseInt(rH[1], 10)), !("undefined" !== typeof HH && HH >= 0 && HH <= 1)) return (LH = BH ? AH._soundById(BH) : AH._sounds[0]) ? LH._volume : 0;
          if ("loaded" !== AH._state || AH._playLock) return AH._queue.push({
            event: "volume",
            action: function() {
              AH.volume.apply(AH, rH)
            }
          }), AH;
          "undefined" === typeof BH && (AH._volume = HH), BH = AH._getSoundIds(BH);
          for (var hH = 0; hH < BH.length; hH++)(LH = AH._soundById(BH[hH])) && (LH._volume = HH, rH[2] || AH._stopFade(BH[hH]), AH._webAudio && LH._node && !LH._muted ? LH._node.gain.setValueAtTime(HH, SH.ctx.currentTime) : LH._node && !LH._muted && (LH._node.volume = HH * SH.volume()), AH._emit("volume", LH._id));
          return AH
        },
        fade: function(HH, BH, LH, AH) {
          var rH = this;
          if ("loaded" !== rH._state || rH._playLock) return rH._queue.push({
            event: "fade",
            action: function() {
              rH.fade(HH, BH, LH, AH)
            }
          }), rH;
          HH = Math.min(Math.max(0, parseFloat(HH)), 1), BH = Math.min(Math.max(0, parseFloat(BH)), 1), LH = parseFloat(LH), rH.volume(HH, AH);
          for (var hH = rH._getSoundIds(AH), tH = 0; tH < hH.length; tH++) {
            var zH = rH._soundById(hH[tH]);
            if (zH) {
              if (AH || rH._stopFade(hH[tH]), rH._webAudio && !zH._muted) {
                var CH = SH.ctx.currentTime,
                  EH = CH + LH / 1e3;
                zH._volume = HH, zH._node.gain.setValueAtTime(HH, CH), zH._node.gain.linearRampToValueAtTime(BH, EH)
              }
              rH._startFadeInterval(zH, HH, BH, LH, hH[tH], "undefined" === typeof AH)
            }
          }
          return rH
        },
        _startFadeInterval: function(HH, BH, LH, AH, rH, SH) {
          var hH = this,
            tH = BH,
            zH = LH - BH,
            CH = Math.abs(zH / .01),
            EH = Math.max(4, CH > 0 ? AH / CH : AH),
            XH = Date.now();
          HH._fadeTo = LH, HH._interval = setInterval((function() {
            var rH = (Date.now() - XH) / AH;
            XH = Date.now(), tH += zH * rH, tH = Math.round(100 * tH) / 100, tH = zH < 0 ? Math.max(LH, tH) : Math.min(LH, tH), hH._webAudio ? HH._volume = tH : hH.volume(tH, HH._id, !0), SH && (hH._volume = tH), (LH < BH && tH <= LH || LH > BH && tH >= LH) && (clearInterval(HH._interval), HH._interval = null, HH._fadeTo = null, hH.volume(LH, HH._id), hH._emit("fade", HH._id))
          }), EH)
        },
        _stopFade: function(HH) {
          var BH = this,
            LH = BH._soundById(HH);
          return LH && LH._interval && (BH._webAudio && LH._node.gain.cancelScheduledValues(SH.ctx.currentTime), clearInterval(LH._interval), LH._interval = null, BH.volume(LH._fadeTo, HH), LH._fadeTo = null, BH._emit("fade", HH)), BH
        },
        loop: function() {
          var HH, BH, LH, AH = this,
            rH = arguments;
          if (0 === rH.length) return AH._loop;
          if (1 === rH.length) {
            if ("boolean" !== typeof rH[0]) return !!(LH = AH._soundById(parseInt(rH[0], 10))) && LH._loop;
            HH = rH[0], AH._loop = HH
          } else 2 === rH.length && (HH = rH[0], BH = parseInt(rH[1], 10));
          for (var SH = AH._getSoundIds(BH), hH = 0; hH < SH.length; hH++)(LH = AH._soundById(SH[hH])) && (LH._loop = HH, AH._webAudio && LH._node && LH._node.bufferSource && (LH._node.bufferSource.loop = HH, HH && (LH._node.bufferSource.loopStart = LH._start || 0, LH._node.bufferSource.loopEnd = LH._stop, AH.playing(SH[hH]) && (AH.pause(SH[hH], !0), AH.play(SH[hH], !0)))));
          return AH
        },
        rate: function() {
          var HH, BH, LH, AH = this,
            rH = arguments;
          if (0 === rH.length) BH = AH._sounds[0]._id;
          else if (1 === rH.length) {
            AH._getSoundIds().indexOf(rH[0]) >= 0 ? BH = parseInt(rH[0], 10) : HH = parseFloat(rH[0])
          } else 2 === rH.length && (HH = parseFloat(rH[0]), BH = parseInt(rH[1], 10));
          if ("number" !== typeof HH) return (LH = AH._soundById(BH)) ? LH._rate : AH._rate;
          if ("loaded" !== AH._state || AH._playLock) return AH._queue.push({
            event: "rate",
            action: function() {
              AH.rate.apply(AH, rH)
            }
          }), AH;
          "undefined" === typeof BH && (AH._rate = HH), BH = AH._getSoundIds(BH);
          for (var hH = 0; hH < BH.length; hH++)
            if (LH = AH._soundById(BH[hH])) {
              AH.playing(BH[hH]) && (LH._rateSeek = AH.seek(BH[hH]), LH._playStart = AH._webAudio ? SH.ctx.currentTime : LH._playStart), LH._rate = HH, AH._webAudio && LH._node && LH._node.bufferSource ? LH._node.bufferSource.playbackRate.setValueAtTime(HH, SH.ctx.currentTime) : LH._node && (LH._node.playbackRate = HH);
              var tH = AH.seek(BH[hH]),
                zH = 1e3 * ((AH._sprite[LH._sprite][0] + AH._sprite[LH._sprite][1]) / 1e3 - tH) / Math.abs(LH._rate);
              !AH._endTimers[BH[hH]] && LH.oX || (AH._clearTimer(BH[hH]), AH._endTimers[BH[hH]] = setTimeout(AH._ended.bind(AH, LH), zH)), AH._emit("rate", LH._id)
            } return AH
        },
        seek: function() {
          var HH, BH, LH = this,
            AH = arguments;
          if (0 === AH.length) LH._sounds.length && (BH = LH._sounds[0]._id);
          else if (1 === AH.length) {
            LH._getSoundIds().indexOf(AH[0]) >= 0 ? BH = parseInt(AH[0], 10) : LH._sounds.length && (BH = LH._sounds[0]._id, HH = parseFloat(AH[0]))
          } else 2 === AH.length && (HH = parseFloat(AH[0]), BH = parseInt(AH[1], 10));
          if ("undefined" === typeof BH) return 0;
          if ("number" === typeof HH && ("loaded" !== LH._state || LH._playLock)) return LH._queue.push({
            event: "seek",
            action: function() {
              LH.seek.apply(LH, AH)
            }
          }), LH;
          var rH = LH._soundById(BH);
          if (rH) {
            if (!("number" === typeof HH && HH >= 0)) {
              if (LH._webAudio) {
                var hH = LH.playing(BH) ? SH.ctx.currentTime - rH._playStart : 0,
                  tH = rH._rateSeek ? rH._rateSeek - rH._seek : 0;
                return rH._seek + (tH + hH * Math.abs(rH._rate))
              }
              return rH._node.currentTime
            }
            var zH = LH.playing(BH);
            zH && LH.pause(BH, !0), rH._seek = HH, rH._ended = !1, LH._clearTimer(BH), LH._webAudio || !rH._node || isNaN(rH._node.duration) || (rH._node.currentTime = HH);
            var CH = function() {
              zH && LH.play(BH, !0), LH._emit("seek", BH)
            };
            if (zH && !LH._webAudio) {
              var EH = function() {
                LH._playLock ? setTimeout(EH, 0) : CH()
              };
              setTimeout(EH, 0)
            } else CH()
          }
          return LH
        },
        playing: function(HH) {
          var BH = this;
          if ("number" === typeof HH) {
            var LH = BH._soundById(HH);
            return !!LH && !LH.oX
          }
          for (var AH = 0; AH < BH._sounds.length; AH++)
            if (!BH._sounds[AH].oX) return !0;
          return !1
        },
        duration: function(HH) {
          var BH = this,
            LH = BH._duration,
            AH = BH._soundById(HH);
          return AH && (LH = BH._sprite[AH._sprite][1] / 1e3), LH
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var HH = this, BH = HH._sounds, LH = 0; LH < BH.length; LH++) BH[LH].oX || HH.stop(BH[LH]._id), HH._webAudio || (HH._clearSound(BH[LH]._node), BH[LH]._node.removeEventListener("error", BH[LH]._errorFn, !1), BH[LH]._node.removeEventListener(SH._canPlayEvent, BH[LH]._loadFn, !1), BH[LH]._node.removeEventListener("ended", BH[LH]._endFn, !1), SH._releaseHtml5Audio(BH[LH]._node)), delete BH[LH]._node, HH._clearTimer(BH[LH]._id);
          var AH = SH._howls.indexOf(HH);
          AH >= 0 && SH._howls.splice(AH, 1);
          var rH = !0;
          for (LH = 0; LH < SH._howls.length; LH++)
            if (SH._howls[LH]._src === HH._src || HH._src.indexOf(SH._howls[LH]._src) >= 0) {
              rH = !1;
              break
            } return zH && rH && delete zH[HH._src], SH.noAudio = !1, HH._state = "unloaded", HH._sounds = [], HH = null, null
        },
        on: function(HH, BH, LH, AH) {
          var rH = this["_on" + HH];
          return "function" === typeof BH && rH.push(AH ? {
            id: LH,
            EX: BH,
            once: AH
          } : {
            id: LH,
            EX: BH
          }), this
        },
        off: function(HH, BH, LH) {
          var AH = this,
            rH = AH["_on" + HH],
            SH = 0;
          if ("number" === typeof BH && (LH = BH, BH = null), BH || LH)
            for (SH = 0; SH < rH.length; SH++) {
              var hH = LH === rH[SH].id;
              if (BH === rH[SH].EX && hH || !BH && hH) {
                rH.splice(SH, 1);
                break
              }
            } else if (HH) AH["_on" + HH] = [];
            else {
              var tH = Object.keys(AH);
              for (SH = 0; SH < tH.length; SH++) 0 === tH[SH].indexOf("_on") && Array.isArray(AH[tH[SH]]) && (AH[tH[SH]] = [])
            } return AH
        },
        once: function(HH, BH, LH) {
          return this.on(HH, BH, LH, 1), this
        },
        _emit: function(HH, BH, LH) {
          for (var AH = this, rH = AH["_on" + HH], SH = rH.length - 1; SH >= 0; SH--) rH[SH].id && rH[SH].id !== BH && "load" !== HH || (setTimeout(function(HH) {
            HH.call(this, BH, LH)
          }.bind(AH, rH[SH].EX), 0), rH[SH].once && AH.off(HH, rH[SH].EX, rH[SH].id));
          return AH._loadQueue(HH), AH
        },
        _loadQueue: function(HH) {
          var BH = this;
          if (BH._queue.length > 0) {
            var LH = BH._queue[0];
            LH.event === HH && (BH._queue.shift(), BH._loadQueue()), HH || LH.action()
          }
          return BH
        },
        _ended: function(HH) {
          var BH = this,
            LH = HH._sprite;
          if (!BH._webAudio && HH._node && !HH._node.paused && !HH._node.ended && HH._node.currentTime < HH._stop) return setTimeout(BH._ended.bind(BH, HH), 100), BH;
          var AH = !(!HH._loop && !BH._sprite[LH][2]);
          if (BH._emit("end", HH._id), !BH._webAudio && AH && BH.stop(HH._id, !0).play(HH._id), BH._webAudio && AH) {
            BH._emit("play", HH._id), HH._seek = HH._start || 0, HH._rateSeek = 0, HH._playStart = SH.ctx.currentTime;
            var rH = 1e3 * (HH._stop - HH._start) / Math.abs(HH._rate);
            BH._endTimers[HH._id] = setTimeout(BH._ended.bind(BH, HH), rH)
          }
          return BH._webAudio && !AH && (HH.oX = !0, HH._ended = !0, HH._seek = HH._start || 0, HH._rateSeek = 0, BH._clearTimer(HH._id), BH._cleanBuffer(HH._node), SH._autoSuspend()), BH._webAudio || AH || BH.stop(HH._id, !0), BH
        },
        _clearTimer: function(HH) {
          var BH = this;
          if (BH._endTimers[HH]) {
            if ("function" !== typeof BH._endTimers[HH]) clearTimeout(BH._endTimers[HH]);
            else {
              var LH = BH._soundById(HH);
              LH && LH._node && LH._node.removeEventListener("ended", BH._endTimers[HH], !1)
            }
            delete BH._endTimers[HH]
          }
          return BH
        },
        _soundById: function(HH) {
          for (var BH = this, LH = 0; LH < BH._sounds.length; LH++)
            if (HH === BH._sounds[LH]._id) return BH._sounds[LH];
          return null
        },
        _inactiveSound: function() {
          var HH = this;
          HH._drain();
          for (var BH = 0; BH < HH._sounds.length; BH++)
            if (HH._sounds[BH]._ended) return HH._sounds[BH].reset();
          return new tH(HH)
        },
        _drain: function() {
          var HH = this,
            BH = HH._pool,
            LH = 0,
            AH = 0;
          if (!(HH._sounds.length < BH)) {
            for (AH = 0; AH < HH._sounds.length; AH++) HH._sounds[AH]._ended && LH++;
            for (AH = HH._sounds.length - 1; AH >= 0; AH--) {
              if (LH <= BH) return;
              HH._sounds[AH]._ended && (HH._webAudio && HH._sounds[AH]._node && HH._sounds[AH]._node.disconnect(0), HH._sounds.splice(AH, 1), LH--)
            }
          }
        },
        _getSoundIds: function(HH) {
          if ("undefined" === typeof HH) {
            for (var BH = [], LH = 0; LH < this._sounds.length; LH++) BH.push(this._sounds[LH]._id);
            return BH
          }
          return [HH]
        },
        _refreshBuffer: function(HH) {
          return HH._node.bufferSource = SH.ctx.createBufferSource(), HH._node.bufferSource.buffer = zH[this._src], HH._panner ? HH._node.bufferSource.connect(HH._panner) : HH._node.bufferSource.connect(HH._node), HH._node.bufferSource.loop = HH._loop, HH._loop && (HH._node.bufferSource.loopStart = HH._start || 0, HH._node.bufferSource.loopEnd = HH._stop || 0), HH._node.bufferSource.playbackRate.setValueAtTime(HH._rate, SH.ctx.currentTime), this
        },
        _cleanBuffer: function(HH) {
          var BH = SH._navigator && SH._navigator.vendor.indexOf("Apple") >= 0;
          if (SH._scratchBuffer && HH.bufferSource && (HH.bufferSource.onended = null, HH.bufferSource.disconnect(0), BH)) try {
            HH.bufferSource.buffer = SH._scratchBuffer
          } catch (LH) {}
          return HH.bufferSource = null, this
        },
        _clearSound: function(HH) {
          /MSIE |Trident\//.test(SH._navigator && SH._navigator.userAgent) || (HH.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var tH = function(HH) {
        this._parent = HH, this.init()
      };
      tH.prototype = {
        init: function() {
          var HH = this,
            BH = HH._parent;
          return HH._muted = BH._muted, HH._loop = BH._loop, HH._volume = BH._volume, HH._rate = BH._rate, HH._seek = 0, HH.oX = !0, HH._ended = !0, HH._sprite = "__default", HH._id = ++SH._counter, BH._sounds.push(HH), HH.create(), HH
        },
        create: function() {
          var HH = this,
            BH = HH._parent,
            LH = SH._muted || HH._muted || HH._parent._muted ? 0 : HH._volume;
          return BH._webAudio ? (HH._node = "undefined" === typeof SH.ctx.createGain ? SH.ctx.createGainNode() : SH.ctx.createGain(), HH._node.gain.setValueAtTime(LH, SH.ctx.currentTime), HH._node.paused = !0, HH._node.connect(SH.masterGain)) : SH.noAudio || (HH._node = SH._obtainHtml5Audio(), HH._errorFn = HH._errorListener.bind(HH), HH._node.addEventListener("error", HH._errorFn, !1), HH._loadFn = HH._loadListener.bind(HH), HH._node.addEventListener(SH._canPlayEvent, HH._loadFn, !1), HH._endFn = HH._endListener.bind(HH), HH._node.addEventListener("ended", HH._endFn, !1), HH._node.src = BH._src, HH._node.preload = !0 === BH._preload ? "auto" : BH._preload, HH._node.volume = LH * SH.volume(), HH._node.load()), HH
        },
        reset: function() {
          var HH = this,
            BH = HH._parent;
          return HH._muted = BH._muted, HH._loop = BH._loop, HH._volume = BH._volume, HH._rate = BH._rate, HH._seek = 0, HH._rateSeek = 0, HH.oX = !0, HH._ended = !0, HH._sprite = "__default", HH._id = ++SH._counter, HH
        },
        _errorListener: function() {
          var HH = this;
          HH._parent._emit("loaderror", HH._id, HH._node.error ? HH._node.error.code : 0), HH._node.removeEventListener("error", HH._errorFn, !1)
        },
        _loadListener: function() {
          var HH = this,
            BH = HH._parent;
          BH._duration = Math.ceil(10 * HH._node.duration) / 10, 0 === Object.keys(BH._sprite).length && (BH._sprite = {
            __default: [0, 1e3 * BH._duration]
          }), "loaded" !== BH._state && (BH._state = "loaded", BH._emit("load"), BH._loadQueue()), HH._node.removeEventListener(SH._canPlayEvent, HH._loadFn, !1)
        },
        _endListener: function() {
          var HH = this,
            BH = HH._parent;
          BH._duration === 1 / 0 && (BH._duration = Math.ceil(10 * HH._node.duration) / 10, BH._sprite.__default[1] === 1 / 0 && (BH._sprite.__default[1] = 1e3 * BH._duration), BH._ended(HH)), HH._node.removeEventListener("ended", HH._endFn, !1)
        }
      };
      var zH = {},
        CH = function(HH) {
          var BH = HH._src;
          if (zH[BH]) return HH._duration = zH[BH].duration, void GH(HH);
          if (/^data:[^;]+;base64,/.test(BH)) {
            for (var LH = atob(BH.split(",")[1]), AH = new Uint8Array(LH.length), rH = 0; rH < LH.length; ++rH) AH[rH] = LH.charCodeAt(rH);
            XH(AH.buffer, HH)
          } else {
            var SH = new XMLHttpRequest;
            SH.open(HH._xhr.method, BH, !0), SH.withCredentials = HH._xhr.withCredentials, SH.responseType = "arraybuffer", HH._xhr.headers && Object.keys(HH._xhr.headers).forEach((function(BH) {
              SH.setRequestHeader(BH, HH._xhr.headers[BH])
            })), SH.onload = function() {
              var BH = (SH.status + "")[0];
              "0" === BH || "2" === BH || "3" === BH ? XH(SH.response, HH) : HH._emit("loaderror", null, "Failed loading audio file with status: " + SH.status + ".")
            }, SH.onerror = function() {
              HH._webAudio && (HH._html5 = !0, HH._webAudio = !1, HH._sounds = [], delete zH[BH], HH.load())
            }, EH(SH)
          }
        },
        EH = function(HH) {
          try {
            HH.send()
          } catch (BH) {
            HH.onerror()
          }
        },
        XH = function(HH, BH) {
          var LH = function() {
              BH._emit("loaderror", null, "Decoding audio data failed.")
            },
            AH = function(HH) {
              HH && BH._sounds.length > 0 ? (zH[BH._src] = HH, GH(BH, HH)) : LH()
            };
          "undefined" !== typeof Promise && 1 === SH.ctx.decodeAudioData.length ? SH.ctx.decodeAudioData(HH).then(AH).catch(LH) : SH.ctx.decodeAudioData(HH, AH, LH)
        },
        GH = function(HH, BH) {
          BH && !HH._duration && (HH._duration = BH.duration), 0 === Object.keys(HH._sprite).length && (HH._sprite = {
            __default: [0, 1e3 * HH._duration]
          }), "loaded" !== HH._state && (HH._state = "loaded", HH._emit("load"), HH._loadQueue())
        },
        YH = function() {
          if (SH.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? SH.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? SH.ctx = new webkitAudioContext : SH.usingWebAudio = !1
            } catch (rH) {
              SH.usingWebAudio = !1
            }
            SH.ctx || (SH.usingWebAudio = !1);
            var HH = /iP(hone|od|ad)/.test(SH._navigator && SH._navigator.platform),
              BH = SH._navigator && SH._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              LH = BH ? parseInt(BH[1], 10) : null;
            if (HH && LH && LH < 9) {
              var AH = /safari/.test(SH._navigator && SH._navigator.userAgent.toLowerCase());
              SH._navigator && !AH && (SH.usingWebAudio = !1)
            }
            SH.usingWebAudio && (SH.masterGain = "undefined" === typeof SH.ctx.createGain ? SH.ctx.createGainNode() : SH.ctx.createGain(), SH.masterGain.gain.setValueAtTime(SH._muted ? 0 : SH._volume, SH.ctx.currentTime), SH.masterGain.connect(SH.ctx.destination)), SH._setup()
          }
        };
      void 0 === (AH = function() {
        return {
          Howler: SH,
          Howl: hH
        }
      }.apply(BH, [])) || (HH.exports = AH), BH.Howler = SH, BH.Howl = hH, "undefined" !== typeof LH.g ? (LH.g.HowlerGlobal = rH, LH.g.Howler = SH, LH.g.Howl = hH, LH.g.Sound = tH) : "undefined" !== typeof window && (window.HowlerGlobal = rH, window.Howler = SH, window.Howl = hH, window.Sound = tH)
    }(),
    function() {
      var HH;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(HH) {
        var BH = this;
        if (!BH.ctx || !BH.ctx.listener) return BH;
        for (var LH = BH._howls.length - 1; LH >= 0; LH--) BH._howls[LH].stereo(HH);
        return BH
      }, HowlerGlobal.prototype.pos = function(HH, BH, LH) {
        var AH = this;
        return AH.ctx && AH.ctx.listener ? (BH = "number" !== typeof BH ? AH._pos[1] : BH, LH = "number" !== typeof LH ? AH._pos[2] : LH, "number" !== typeof HH ? AH._pos : (AH._pos = [HH, BH, LH], "undefined" !== typeof AH.ctx.listener.positionX ? (AH.ctx.listener.positionX.setTargetAtTime(AH._pos[0], Howler.ctx.currentTime, .1), AH.ctx.listener.positionY.setTargetAtTime(AH._pos[1], Howler.ctx.currentTime, .1), AH.ctx.listener.positionZ.setTargetAtTime(AH._pos[2], Howler.ctx.currentTime, .1)) : AH.ctx.listener.setPosition(AH._pos[0], AH._pos[1], AH._pos[2]), AH)) : AH
      }, HowlerGlobal.prototype.orientation = function(HH, BH, LH, AH, rH, SH) {
        var hH = this;
        if (!hH.ctx || !hH.ctx.listener) return hH;
        var tH = hH._orientation;
        return BH = "number" !== typeof BH ? tH[1] : BH, LH = "number" !== typeof LH ? tH[2] : LH, AH = "number" !== typeof AH ? tH[3] : AH, rH = "number" !== typeof rH ? tH[4] : rH, SH = "number" !== typeof SH ? tH[5] : SH, "number" !== typeof HH ? tH : (hH._orientation = [HH, BH, LH, AH, rH, SH], "undefined" !== typeof hH.ctx.listener.forwardX ? (hH.ctx.listener.forwardX.setTargetAtTime(HH, Howler.ctx.currentTime, .1), hH.ctx.listener.forwardY.setTargetAtTime(BH, Howler.ctx.currentTime, .1), hH.ctx.listener.forwardZ.setTargetAtTime(LH, Howler.ctx.currentTime, .1), hH.ctx.listener.upX.setTargetAtTime(AH, Howler.ctx.currentTime, .1), hH.ctx.listener.upY.setTargetAtTime(rH, Howler.ctx.currentTime, .1), hH.ctx.listener.upZ.setTargetAtTime(SH, Howler.ctx.currentTime, .1)) : hH.ctx.listener.setOrientation(HH, BH, LH, AH, rH, SH), hH)
      }, Howl.prototype.init = (HH = Howl.prototype.init, function(BH) {
        var LH = this;
        return LH._orientation = BH.orientation || [1, 0, 0], LH._stereo = BH.stereo || null, LH._pos = BH.pos || null, LH._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof BH.coneInnerAngle ? BH.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof BH.coneOuterAngle ? BH.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof BH.coneOuterGain ? BH.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof BH.distanceModel ? BH.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof BH.maxDistance ? BH.maxDistance : 1e4,
          panningModel: "undefined" !== typeof BH.panningModel ? BH.panningModel : "HRTF",
          refDistance: "undefined" !== typeof BH.refDistance ? BH.refDistance : 1,
          rolloffFactor: "undefined" !== typeof BH.rolloffFactor ? BH.rolloffFactor : 1
        }, LH._onstereo = BH.onstereo ? [{
          EX: BH.onstereo
        }] : [], LH._onpos = BH.onpos ? [{
          EX: BH.onpos
        }] : [], LH._onorientation = BH.onorientation ? [{
          EX: BH.onorientation
        }] : [], HH.call(this, BH)
      }), Howl.prototype.stereo = function(HH, LH) {
        var AH = this;
        if (!AH._webAudio) return AH;
        if ("loaded" !== AH._state) return AH._queue.push({
          event: "stereo",
          action: function() {
            AH.stereo(HH, LH)
          }
        }), AH;
        var rH = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof LH) {
          if ("number" !== typeof HH) return AH._stereo;
          AH._stereo = HH, AH._pos = [HH, 0, 0]
        }
        for (var SH = AH._getSoundIds(LH), hH = 0; hH < SH.length; hH++) {
          var tH = AH._soundById(SH[hH]);
          if (tH) {
            if ("number" !== typeof HH) return tH._stereo;
            tH._stereo = HH, tH._pos = [HH, 0, 0], tH._node && (tH._pannerAttr.panningModel = "equalpower", tH._panner && tH._panner.pan || BH(tH, rH), "spatial" === rH ? "undefined" !== typeof tH._panner.positionX ? (tH._panner.positionX.setValueAtTime(HH, Howler.ctx.currentTime), tH._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), tH._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : tH._panner.setPosition(HH, 0, 0) : tH._panner.pan.setValueAtTime(HH, Howler.ctx.currentTime)), AH._emit("stereo", tH._id)
          }
        }
        return AH
      }, Howl.prototype.pos = function(HH, LH, AH, rH) {
        var SH = this;
        if (!SH._webAudio) return SH;
        if ("loaded" !== SH._state) return SH._queue.push({
          event: "pos",
          action: function() {
            SH.pos(HH, LH, AH, rH)
          }
        }), SH;
        if (LH = "number" !== typeof LH ? 0 : LH, AH = "number" !== typeof AH ? -.5 : AH, "undefined" === typeof rH) {
          if ("number" !== typeof HH) return SH._pos;
          SH._pos = [HH, LH, AH]
        }
        for (var hH = SH._getSoundIds(rH), tH = 0; tH < hH.length; tH++) {
          var zH = SH._soundById(hH[tH]);
          if (zH) {
            if ("number" !== typeof HH) return zH._pos;
            zH._pos = [HH, LH, AH], zH._node && (zH._panner && !zH._panner.pan || BH(zH, "spatial"), "undefined" !== typeof zH._panner.positionX ? (zH._panner.positionX.setValueAtTime(HH, Howler.ctx.currentTime), zH._panner.positionY.setValueAtTime(LH, Howler.ctx.currentTime), zH._panner.positionZ.setValueAtTime(AH, Howler.ctx.currentTime)) : zH._panner.setPosition(HH, LH, AH)), SH._emit("pos", zH._id)
          }
        }
        return SH
      }, Howl.prototype.orientation = function(HH, LH, AH, rH) {
        var SH = this;
        if (!SH._webAudio) return SH;
        if ("loaded" !== SH._state) return SH._queue.push({
          event: "orientation",
          action: function() {
            SH.orientation(HH, LH, AH, rH)
          }
        }), SH;
        if (LH = "number" !== typeof LH ? SH._orientation[1] : LH, AH = "number" !== typeof AH ? SH._orientation[2] : AH, "undefined" === typeof rH) {
          if ("number" !== typeof HH) return SH._orientation;
          SH._orientation = [HH, LH, AH]
        }
        for (var hH = SH._getSoundIds(rH), tH = 0; tH < hH.length; tH++) {
          var zH = SH._soundById(hH[tH]);
          if (zH) {
            if ("number" !== typeof HH) return zH._orientation;
            zH._orientation = [HH, LH, AH], zH._node && (zH._panner || (zH._pos || (zH._pos = SH._pos || [0, 0, -.5]), BH(zH, "spatial")), "undefined" !== typeof zH._panner.orientationX ? (zH._panner.orientationX.setValueAtTime(HH, Howler.ctx.currentTime), zH._panner.orientationY.setValueAtTime(LH, Howler.ctx.currentTime), zH._panner.orientationZ.setValueAtTime(AH, Howler.ctx.currentTime)) : zH._panner.setOrientation(HH, LH, AH)), SH._emit("orientation", zH._id)
          }
        }
        return SH
      }, Howl.prototype.pannerAttr = function() {
        var HH, LH, AH, rH = this,
          SH = arguments;
        if (!rH._webAudio) return rH;
        if (0 === SH.length) return rH._pannerAttr;
        if (1 === SH.length) {
          if ("object" !== typeof SH[0]) return (AH = rH._soundById(parseInt(SH[0], 10))) ? AH._pannerAttr : rH._pannerAttr;
          HH = SH[0], "undefined" === typeof LH && (HH.pannerAttr || (HH.pannerAttr = {
            coneInnerAngle: HH.coneInnerAngle,
            coneOuterAngle: HH.coneOuterAngle,
            coneOuterGain: HH.coneOuterGain,
            distanceModel: HH.distanceModel,
            maxDistance: HH.maxDistance,
            refDistance: HH.refDistance,
            rolloffFactor: HH.rolloffFactor,
            panningModel: HH.panningModel
          }), rH._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof HH.pannerAttr.coneInnerAngle ? HH.pannerAttr.coneInnerAngle : rH._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof HH.pannerAttr.coneOuterAngle ? HH.pannerAttr.coneOuterAngle : rH._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof HH.pannerAttr.coneOuterGain ? HH.pannerAttr.coneOuterGain : rH._coneOuterGain,
            distanceModel: "undefined" !== typeof HH.pannerAttr.distanceModel ? HH.pannerAttr.distanceModel : rH._distanceModel,
            maxDistance: "undefined" !== typeof HH.pannerAttr.maxDistance ? HH.pannerAttr.maxDistance : rH._maxDistance,
            refDistance: "undefined" !== typeof HH.pannerAttr.refDistance ? HH.pannerAttr.refDistance : rH._refDistance,
            rolloffFactor: "undefined" !== typeof HH.pannerAttr.rolloffFactor ? HH.pannerAttr.rolloffFactor : rH._rolloffFactor,
            panningModel: "undefined" !== typeof HH.pannerAttr.panningModel ? HH.pannerAttr.panningModel : rH._panningModel
          })
        } else 2 === SH.length && (HH = SH[0], LH = parseInt(SH[1], 10));
        for (var hH = rH._getSoundIds(LH), tH = 0; tH < hH.length; tH++)
          if (AH = rH._soundById(hH[tH])) {
            var zH = AH._pannerAttr;
            zH = {
              coneInnerAngle: "undefined" !== typeof HH.coneInnerAngle ? HH.coneInnerAngle : zH.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof HH.coneOuterAngle ? HH.coneOuterAngle : zH.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof HH.coneOuterGain ? HH.coneOuterGain : zH.coneOuterGain,
              distanceModel: "undefined" !== typeof HH.distanceModel ? HH.distanceModel : zH.distanceModel,
              maxDistance: "undefined" !== typeof HH.maxDistance ? HH.maxDistance : zH.maxDistance,
              refDistance: "undefined" !== typeof HH.refDistance ? HH.refDistance : zH.refDistance,
              rolloffFactor: "undefined" !== typeof HH.rolloffFactor ? HH.rolloffFactor : zH.rolloffFactor,
              panningModel: "undefined" !== typeof HH.panningModel ? HH.panningModel : zH.panningModel
            };
            var CH = AH._panner;
            CH ? (CH.coneInnerAngle = zH.coneInnerAngle, CH.coneOuterAngle = zH.coneOuterAngle, CH.coneOuterGain = zH.coneOuterGain, CH.distanceModel = zH.distanceModel, CH.maxDistance = zH.maxDistance, CH.refDistance = zH.refDistance, CH.rolloffFactor = zH.rolloffFactor, CH.panningModel = zH.panningModel) : (AH._pos || (AH._pos = rH._pos || [0, 0, -.5]), BH(AH, "spatial"))
          } return rH
      }, Sound.prototype.init = function(HH) {
        return function() {
          var BH = this,
            LH = BH._parent;
          BH._orientation = LH._orientation, BH._stereo = LH._stereo, BH._pos = LH._pos, BH._pannerAttr = LH._pannerAttr, HH.call(this), BH._stereo ? LH.stereo(BH._stereo) : BH._pos && LH.pos(BH._pos[0], BH._pos[1], BH._pos[2], BH._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(HH) {
        return function() {
          var BH = this,
            LH = BH._parent;
          return BH._orientation = LH._orientation, BH._stereo = LH._stereo, BH._pos = LH._pos, BH._pannerAttr = LH._pannerAttr, BH._stereo ? LH.stereo(BH._stereo) : BH._pos ? LH.pos(BH._pos[0], BH._pos[1], BH._pos[2], BH._id) : BH._panner && (BH._panner.disconnect(0), BH._panner = void 0, LH._refreshBuffer(BH)), HH.call(this)
        }
      }(Sound.prototype.reset);
      var BH = function(HH, BH) {
        "spatial" === (BH = BH || "spatial") ? (HH._panner = Howler.ctx.createPanner(), HH._panner.coneInnerAngle = HH._pannerAttr.coneInnerAngle, HH._panner.coneOuterAngle = HH._pannerAttr.coneOuterAngle, HH._panner.coneOuterGain = HH._pannerAttr.coneOuterGain, HH._panner.distanceModel = HH._pannerAttr.distanceModel, HH._panner.maxDistance = HH._pannerAttr.maxDistance, HH._panner.refDistance = HH._pannerAttr.refDistance, HH._panner.rolloffFactor = HH._pannerAttr.rolloffFactor, HH._panner.panningModel = HH._pannerAttr.panningModel, "undefined" !== typeof HH._panner.positionX ? (HH._panner.positionX.setValueAtTime(HH._pos[0], Howler.ctx.currentTime), HH._panner.positionY.setValueAtTime(HH._pos[1], Howler.ctx.currentTime), HH._panner.positionZ.setValueAtTime(HH._pos[2], Howler.ctx.currentTime)) : HH._panner.setPosition(HH._pos[0], HH._pos[1], HH._pos[2]), "undefined" !== typeof HH._panner.orientationX ? (HH._panner.orientationX.setValueAtTime(HH._orientation[0], Howler.ctx.currentTime), HH._panner.orientationY.setValueAtTime(HH._orientation[1], Howler.ctx.currentTime), HH._panner.orientationZ.setValueAtTime(HH._orientation[2], Howler.ctx.currentTime)) : HH._panner.setOrientation(HH._orientation[0], HH._orientation[1], HH._orientation[2])) : (HH._panner = Howler.ctx.createStereoPanner(), HH._panner.pan.setValueAtTime(HH._stereo, Howler.ctx.currentTime)), HH._panner.connect(HH._node), HH.oX || HH._parent.pause(HH._id, !0).play(HH._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);