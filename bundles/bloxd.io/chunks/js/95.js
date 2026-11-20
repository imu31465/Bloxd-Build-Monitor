/*! For license information please see bbb6l5.95.a3cc46ce.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  4692: (qq, Eq, gq) => {
    var Yq;
    ! function() {
      var lq = function() {
        this.init()
      };
      lq.prototype = {
        init: function() {
          var qq = this || Oq;
          return qq._counter = 1e3, qq._html5AudioPool = [], qq.html5PoolSize = 10, qq._codecs = {}, qq._howls = [], qq._muted = !1, qq._volume = 1, qq._canPlayEvent = "canplaythrough", qq._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, qq.masterGain = null, qq.noAudio = !1, qq.usingWebAudio = !0, qq.autoSuspend = !0, qq.ctx = null, qq.autoUnlock = !0, qq._setup(), qq
        },
        volume: function(qq) {
          var Eq = this || Oq;
          if (qq = parseFloat(qq), Eq.ctx || Nq(), "undefined" !== typeof qq && qq >= 0 && qq <= 1) {
            if (Eq._volume = qq, Eq._muted) return Eq;
            Eq.usingWebAudio && Eq.masterGain.gain.setValueAtTime(qq, Oq.ctx.currentTime);
            for (var gq = 0; gq < Eq._howls.length; gq++)
              if (!Eq._howls[gq]._webAudio)
                for (var Yq = Eq._howls[gq]._getSoundIds(), lq = 0; lq < Yq.length; lq++) {
                  var mq = Eq._howls[gq]._soundById(Yq[lq]);
                  mq && mq._node && (mq._node.volume = mq._volume * qq)
                }
            return Eq
          }
          return Eq._volume
        },
        mute: function(qq) {
          var Eq = this || Oq;
          Eq.ctx || Nq(), Eq._muted = qq, Eq.usingWebAudio && Eq.masterGain.gain.setValueAtTime(qq ? 0 : Eq._volume, Oq.ctx.currentTime);
          for (var gq = 0; gq < Eq._howls.length; gq++)
            if (!Eq._howls[gq]._webAudio)
              for (var Yq = Eq._howls[gq]._getSoundIds(), lq = 0; lq < Yq.length; lq++) {
                var mq = Eq._howls[gq]._soundById(Yq[lq]);
                mq && mq._node && (mq._node.muted = !!qq || mq._muted)
              }
          return Eq
        },
        stop: function() {
          for (var qq = this || Oq, Eq = 0; Eq < qq._howls.length; Eq++) qq._howls[Eq].stop();
          return qq
        },
        unload: function() {
          for (var qq = this || Oq, Eq = qq._howls.length - 1; Eq >= 0; Eq--) qq._howls[Eq].unload();
          return qq.usingWebAudio && qq.ctx && "undefined" !== typeof qq.ctx.close && (qq.ctx.close(), qq.ctx = null, Nq()), qq
        },
        codecs: function(qq) {
          return (this || Oq)._codecs[qq.replace(/^x-/, "")]
        },
        _setup: function() {
          var qq = this || Oq;
          if (qq.state = qq.ctx && qq.ctx.state || "suspended", qq._autoSuspend(), !qq.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (qq._canPlayEvent = "canplay")
            } catch (Eq) {
              qq.noAudio = !0
            } else qq.noAudio = !0;
          try {
            (new Audio).muted && (qq.noAudio = !0)
          } catch (Eq) {}
          return qq.noAudio || qq._setupCodecs(), qq
        },
        _setupCodecs: function() {
          var qq = this || Oq,
            Eq = null;
          try {
            Eq = "undefined" !== typeof Audio ? new Audio : null
          } catch (uq) {
            return qq
          }
          if (!Eq || "function" !== typeof Eq.canPlayType) return qq;
          var gq = Eq.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Yq = qq._navigator ? qq._navigator.userAgent : "",
            lq = Yq.match(/OPR\/([0-6].)/g),
            mq = lq && parseInt(lq[0].split("/")[1], 10) < 33,
            xq = -1 !== Yq.indexOf("Safari") && -1 === Yq.indexOf("Chrome"),
            Aq = Yq.match(/Version\/(.*?) /),
            cq = xq && Aq && parseInt(Aq[1], 10) < 15;
          return qq._codecs = {
            mp3: !(mq || !gq && !Eq.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!gq,
            opus: !!Eq.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!Eq.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!Eq.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(Eq.canPlayType('audio/wav; codecs="1"') || Eq.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!Eq.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!Eq.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(Eq.canPlayType("audio/x-m4a;") || Eq.canPlayType("audio/m4a;") || Eq.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(Eq.canPlayType("audio/x-m4b;") || Eq.canPlayType("audio/m4b;") || Eq.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(Eq.canPlayType("audio/x-mp4;") || Eq.canPlayType("audio/mp4;") || Eq.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(cq || !Eq.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(cq || !Eq.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!Eq.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(Eq.canPlayType("audio/x-flac;") || Eq.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, qq
        },
        _unlockAudio: function() {
          var qq = this || Oq;
          if (!qq._audioUnlocked && qq.ctx) {
            qq._audioUnlocked = !1, qq.autoUnlock = !1, qq._mobileUnloaded || 44100 === qq.ctx.sampleRate || (qq._mobileUnloaded = !0, qq.unload()), qq._scratchBuffer = qq.ctx.createBuffer(1, 1, 22050);
            var Eq = function(gq) {
              for (; qq._html5AudioPool.length < qq.html5PoolSize;) try {
                var Yq = new Audio;
                Yq._unlocked = !0, qq._releaseHtml5Audio(Yq)
              } catch (gq) {
                qq.noAudio = !0;
                break
              }
              for (var lq = 0; lq < qq._howls.length; lq++)
                if (!qq._howls[lq]._webAudio)
                  for (var Oq = qq._howls[lq]._getSoundIds(), mq = 0; mq < Oq.length; mq++) {
                    var xq = qq._howls[lq]._soundById(Oq[mq]);
                    xq && xq._node && !xq._node._unlocked && (xq._node._unlocked = !0, xq._node.load())
                  }
              qq._autoResume();
              var Aq = qq.ctx.createBufferSource();
              Aq.buffer = qq._scratchBuffer, Aq.connect(qq.ctx.destination), "undefined" === typeof Aq.start ? Aq.noteOn(0) : Aq.start(0), "function" === typeof qq.ctx.resume && qq.ctx.resume(), Aq.onended = function() {
                Aq.disconnect(0), qq._audioUnlocked = !0, document.removeEventListener("touchstart", Eq, !0), document.removeEventListener("touchend", Eq, !0), document.removeEventListener("click", Eq, !0), document.removeEventListener("keydown", Eq, !0);
                for (var gq = 0; gq < qq._howls.length; gq++) qq._howls[gq]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", Eq, !0), document.addEventListener("touchend", Eq, !0), document.addEventListener("click", Eq, !0), document.addEventListener("keydown", Eq, !0), qq
          }
        },
        _obtainHtml5Audio: function() {
          var qq = this || Oq;
          if (qq._html5AudioPool.length) return qq._html5AudioPool.pop();
          var Eq = (new Audio).play();
          return Eq && "undefined" !== typeof Promise && (Eq instanceof Promise || "function" === typeof Eq.then) && Eq.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(qq) {
          var Eq = this || Oq;
          return qq._unlocked && Eq._html5AudioPool.push(qq), Eq
        },
        _autoSuspend: function() {
          var qq = this;
          if (qq.autoSuspend && qq.ctx && "undefined" !== typeof qq.ctx.suspend && Oq.usingWebAudio) {
            for (var Eq = 0; Eq < qq._howls.length; Eq++)
              if (qq._howls[Eq]._webAudio)
                for (var gq = 0; gq < qq._howls[Eq]._sounds.length; gq++)
                  if (!qq._howls[Eq]._sounds[gq].Av) return qq;
            return qq._suspendTimer && clearTimeout(qq._suspendTimer), qq._suspendTimer = setTimeout((function() {
              if (qq.autoSuspend) {
                qq._suspendTimer = null, qq.state = "suspending";
                var Eq = function() {
                  qq.state = "suspended", qq._resumeAfterSuspend && (delete qq._resumeAfterSuspend, qq._autoResume())
                };
                qq.ctx.suspend().then(Eq, Eq)
              }
            }), 3e4), qq
          }
        },
        _autoResume: function() {
          var qq = this;
          if (qq.ctx && "undefined" !== typeof qq.ctx.resume && Oq.usingWebAudio) return "running" === qq.state && "interrupted" !== qq.ctx.state && qq._suspendTimer ? (clearTimeout(qq._suspendTimer), qq._suspendTimer = null) : "suspended" === qq.state || "running" === qq.state && "interrupted" === qq.ctx.state ? (qq.ctx.resume().then((function() {
            qq.state = "running";
            for (var Eq = 0; Eq < qq._howls.length; Eq++) qq._howls[Eq]._emit("resume")
          })), qq._suspendTimer && (clearTimeout(qq._suspendTimer), qq._suspendTimer = null)) : "suspending" === qq.state && (qq._resumeAfterSuspend = !0), qq
        }
      };
      var Oq = new lq,
        mq = function(qq) {
          qq.src && 0 !== qq.src.length ? this.init(qq) : console.error("An array of source files must be passed with any new Howl.")
        };
      mq.prototype = {
        init: function(qq) {
          var Eq = this;
          return Oq.ctx || Nq(), Eq._autoplay = qq.autoplay || !1, Eq._format = "string" !== typeof qq.format ? qq.format : [qq.format], Eq._html5 = qq.html5 || !1, Eq._muted = qq.mute || !1, Eq._loop = qq.loop || !1, Eq._pool = qq.pool || 5, Eq._preload = "boolean" !== typeof qq.preload && "metadata" !== qq.preload || qq.preload, Eq._rate = qq.rate || 1, Eq._sprite = qq.sprite || {}, Eq._src = "string" !== typeof qq.src ? qq.src : [qq.src], Eq._volume = void 0 !== qq.volume ? qq.volume : 1, Eq._xhr = {
            method: qq.xhr && qq.xhr.method ? qq.xhr.method : "GET",
            headers: qq.xhr && qq.xhr.headers ? qq.xhr.headers : null,
            withCredentials: !(!qq.xhr || !qq.xhr.withCredentials) && qq.xhr.withCredentials
          }, Eq._duration = 0, Eq._state = "unloaded", Eq._sounds = [], Eq._endTimers = {}, Eq._queue = [], Eq._playLock = !1, Eq._onend = qq.onend ? [{
            LN: qq.onend
          }] : [], Eq._onfade = qq.onfade ? [{
            LN: qq.onfade
          }] : [], Eq._onload = qq.onload ? [{
            LN: qq.onload
          }] : [], Eq._onloaderror = qq.onloaderror ? [{
            LN: qq.onloaderror
          }] : [], Eq._onplayerror = qq.onplayerror ? [{
            LN: qq.onplayerror
          }] : [], Eq._onpause = qq.onpause ? [{
            LN: qq.onpause
          }] : [], Eq._onplay = qq.onplay ? [{
            LN: qq.onplay
          }] : [], Eq._onstop = qq.onstop ? [{
            LN: qq.onstop
          }] : [], Eq._onmute = qq.onmute ? [{
            LN: qq.onmute
          }] : [], Eq._onvolume = qq.onvolume ? [{
            LN: qq.onvolume
          }] : [], Eq._onrate = qq.onrate ? [{
            LN: qq.onrate
          }] : [], Eq._onseek = qq.onseek ? [{
            LN: qq.onseek
          }] : [], Eq._onunlock = qq.onunlock ? [{
            LN: qq.onunlock
          }] : [], Eq._onresume = [], Eq._webAudio = Oq.usingWebAudio && !Eq._html5, "undefined" !== typeof Oq.ctx && Oq.ctx && Oq.autoUnlock && Oq._unlockAudio(), Oq._howls.push(Eq), Eq._autoplay && Eq._queue.push({
            event: "play",
            action: function() {
              Eq.play()
            }
          }), Eq._preload && "none" !== Eq._preload && Eq.load(), Eq
        },
        load: function() {
          var qq = this,
            Eq = null;
          if (Oq.noAudio) qq._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof qq._src && (qq._src = [qq._src]);
            for (var gq = 0; gq < qq._src.length; gq++) {
              var Yq, lq;
              if (qq._format && qq._format[gq]) Yq = qq._format[gq];
              else {
                if ("string" !== typeof(lq = qq._src[gq])) {
                  qq._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Yq = /^data:audio\/([^;,]+);/i.exec(lq)) || (Yq = /\.([^.]+)$/.exec(lq.split("?", 1)[0])), Yq && (Yq = Yq[1].toLowerCase())
              }
              if (Yq || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Yq && Oq.codecs(Yq)) {
                Eq = qq._src[gq];
                break
              }
            }
            if (Eq) return qq._src = Eq, qq._state = "loading", "https:" === window.location.protocol && "http:" === Eq.slice(0, 5) && (qq._html5 = !0, qq._webAudio = !1), new xq(qq), qq._webAudio && cq(qq), qq;
            qq._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(qq, Eq) {
          var gq = this,
            Yq = null;
          if ("number" === typeof qq) Yq = qq, qq = null;
          else {
            if ("string" === typeof qq && "loaded" === gq._state && !gq._sprite[qq]) return null;
            if ("undefined" === typeof qq && (qq = "__default", !gq._playLock)) {
              for (var lq = 0, mq = 0; mq < gq._sounds.length; mq++) gq._sounds[mq].Av && !gq._sounds[mq]._ended && (lq++, Yq = gq._sounds[mq]._id);
              1 === lq ? qq = null : Yq = null
            }
          }
          var xq = Yq ? gq._soundById(Yq) : gq._inactiveSound();
          if (!xq) return null;
          if (Yq && !qq && (qq = xq._sprite || "__default"), "loaded" !== gq._state) {
            xq._sprite = qq, xq._ended = !1;
            var Aq = xq._id;
            return gq._queue.push({
              event: "play",
              action: function() {
                gq.play(Aq)
              }
            }), Aq
          }
          if (Yq && !xq.Av) return Eq || gq._loadQueue("play"), xq._id;
          gq._webAudio && Oq._autoResume();
          var cq = Math.max(0, xq._seek > 0 ? xq._seek : gq._sprite[qq][0] / 1e3),
            uq = Math.max(0, (gq._sprite[qq][0] + gq._sprite[qq][1]) / 1e3 - cq),
            Bq = 1e3 * uq / Math.abs(xq._rate),
            Wq = gq._sprite[qq][0] / 1e3,
            Nq = (gq._sprite[qq][0] + gq._sprite[qq][1]) / 1e3;
          xq._sprite = qq, xq._ended = !1;
          var aq = function() {
            xq.Av = !1, xq._seek = cq, xq._start = Wq, xq._stop = Nq, xq._loop = !(!xq._loop && !gq._sprite[qq][2])
          };
          if (!(cq >= Nq)) {
            var Vq = xq._node;
            if (gq._webAudio) {
              var dq = function() {
                gq._playLock = !1, aq(), gq._refreshBuffer(xq);
                var qq = xq._muted || gq._muted ? 0 : xq._volume;
                Vq.gain.setValueAtTime(qq, Oq.ctx.currentTime), xq._playStart = Oq.ctx.currentTime, "undefined" === typeof Vq.bufferSource.start ? xq._loop ? Vq.bufferSource.noteGrainOn(0, cq, 86400) : Vq.bufferSource.noteGrainOn(0, cq, uq) : xq._loop ? Vq.bufferSource.start(0, cq, 86400) : Vq.bufferSource.start(0, cq, uq), Bq !== 1 / 0 && (gq._endTimers[xq._id] = setTimeout(gq._ended.bind(gq, xq), Bq)), Eq || setTimeout((function() {
                  gq._emit("play", xq._id), gq._loadQueue()
                }), 0)
              };
              "running" === Oq.state && "interrupted" !== Oq.ctx.state ? dq() : (gq._playLock = !0, gq.once("resume", dq), gq._clearTimer(xq._id))
            } else {
              var jq = function() {
                Vq.currentTime = cq, Vq.muted = xq._muted || gq._muted || Oq._muted || Vq.muted, Vq.volume = xq._volume * Oq.volume(), Vq.playbackRate = xq._rate;
                try {
                  var Yq = Vq.play();
                  if (Yq && "undefined" !== typeof Promise && (Yq instanceof Promise || "function" === typeof Yq.then) ? (gq._playLock = !0, aq(), Yq.then((function() {
                      gq._playLock = !1, Vq._unlocked = !0, Eq ? gq._loadQueue() : gq._emit("play", xq._id)
                    })).catch((function() {
                      gq._playLock = !1, gq._emit("playerror", xq._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), xq._ended = !0, xq.Av = !0
                    }))) : Eq || (gq._playLock = !1, aq(), gq._emit("play", xq._id)), Vq.playbackRate = xq._rate, Vq.paused) return void gq._emit("playerror", xq._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== qq || xq._loop ? gq._endTimers[xq._id] = setTimeout(gq._ended.bind(gq, xq), Bq) : (gq._endTimers[xq._id] = function() {
                    gq._ended(xq), Vq.removeEventListener("ended", gq._endTimers[xq._id], !1)
                  }, Vq.addEventListener("ended", gq._endTimers[xq._id], !1))
                } catch (lq) {
                  gq._emit("playerror", xq._id, lq)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Vq.src && (Vq.src = gq._src, Vq.load());
              var Hq = window && window.ejecta || !Vq.readyState && Oq._navigator.isCocoonJS;
              if (Vq.readyState >= 3 || Hq) jq();
              else {
                gq._playLock = !0, gq._state = "loading";
                var oq = function() {
                  gq._state = "loaded", jq(), Vq.removeEventListener(Oq._canPlayEvent, oq, !1)
                };
                Vq.addEventListener(Oq._canPlayEvent, oq, !1), gq._clearTimer(xq._id)
              }
            }
            return xq._id
          }
          gq._ended(xq)
        },
        pause: function(qq) {
          var Eq = this;
          if ("loaded" !== Eq._state || Eq._playLock) return Eq._queue.push({
            event: "pause",
            action: function() {
              Eq.pause(qq)
            }
          }), Eq;
          for (var gq = Eq._getSoundIds(qq), Yq = 0; Yq < gq.length; Yq++) {
            Eq._clearTimer(gq[Yq]);
            var lq = Eq._soundById(gq[Yq]);
            if (lq && !lq.Av && (lq._seek = Eq.seek(gq[Yq]), lq._rateSeek = 0, lq.Av = !0, Eq._stopFade(gq[Yq]), lq._node))
              if (Eq._webAudio) {
                if (!lq._node.bufferSource) continue;
                "undefined" === typeof lq._node.bufferSource.stop ? lq._node.bufferSource.noteOff(0) : lq._node.bufferSource.stop(0), Eq._cleanBuffer(lq._node)
              } else isNaN(lq._node.duration) && lq._node.duration !== 1 / 0 || lq._node.pause();
            arguments[1] || Eq._emit("pause", lq ? lq._id : null)
          }
          return Eq
        },
        stop: function(qq, Eq) {
          var gq = this;
          if ("loaded" !== gq._state || gq._playLock) return gq._queue.push({
            event: "stop",
            action: function() {
              gq.stop(qq)
            }
          }), gq;
          for (var Yq = gq._getSoundIds(qq), lq = 0; lq < Yq.length; lq++) {
            gq._clearTimer(Yq[lq]);
            var Oq = gq._soundById(Yq[lq]);
            Oq && (Oq._seek = Oq._start || 0, Oq._rateSeek = 0, Oq.Av = !0, Oq._ended = !0, gq._stopFade(Yq[lq]), Oq._node && (gq._webAudio ? Oq._node.bufferSource && ("undefined" === typeof Oq._node.bufferSource.stop ? Oq._node.bufferSource.noteOff(0) : Oq._node.bufferSource.stop(0), gq._cleanBuffer(Oq._node)) : isNaN(Oq._node.duration) && Oq._node.duration !== 1 / 0 || (Oq._node.currentTime = Oq._start || 0, Oq._node.pause(), Oq._node.duration === 1 / 0 && gq._clearSound(Oq._node))), Eq || gq._emit("stop", Oq._id))
          }
          return gq
        },
        mute: function(qq, Eq) {
          var gq = this;
          if ("loaded" !== gq._state || gq._playLock) return gq._queue.push({
            event: "mute",
            action: function() {
              gq.mute(qq, Eq)
            }
          }), gq;
          if ("undefined" === typeof Eq) {
            if ("boolean" !== typeof qq) return gq._muted;
            gq._muted = qq
          }
          for (var Yq = gq._getSoundIds(Eq), lq = 0; lq < Yq.length; lq++) {
            var mq = gq._soundById(Yq[lq]);
            mq && (mq._muted = qq, mq._interval && gq._stopFade(mq._id), gq._webAudio && mq._node ? mq._node.gain.setValueAtTime(qq ? 0 : mq._volume, Oq.ctx.currentTime) : mq._node && (mq._node.muted = !!Oq._muted || qq), gq._emit("mute", mq._id))
          }
          return gq
        },
        volume: function() {
          var qq, Eq, gq, Yq = this,
            lq = arguments;
          if (0 === lq.length) return Yq._volume;
          if (1 === lq.length || 2 === lq.length && "undefined" === typeof lq[1] ? Yq._getSoundIds().indexOf(lq[0]) >= 0 ? Eq = parseInt(lq[0], 10) : qq = parseFloat(lq[0]) : lq.length >= 2 && (qq = parseFloat(lq[0]), Eq = parseInt(lq[1], 10)), !("undefined" !== typeof qq && qq >= 0 && qq <= 1)) return (gq = Eq ? Yq._soundById(Eq) : Yq._sounds[0]) ? gq._volume : 0;
          if ("loaded" !== Yq._state || Yq._playLock) return Yq._queue.push({
            event: "volume",
            action: function() {
              Yq.volume.apply(Yq, lq)
            }
          }), Yq;
          "undefined" === typeof Eq && (Yq._volume = qq), Eq = Yq._getSoundIds(Eq);
          for (var mq = 0; mq < Eq.length; mq++)(gq = Yq._soundById(Eq[mq])) && (gq._volume = qq, lq[2] || Yq._stopFade(Eq[mq]), Yq._webAudio && gq._node && !gq._muted ? gq._node.gain.setValueAtTime(qq, Oq.ctx.currentTime) : gq._node && !gq._muted && (gq._node.volume = qq * Oq.volume()), Yq._emit("volume", gq._id));
          return Yq
        },
        fade: function(qq, Eq, gq, Yq) {
          var lq = this;
          if ("loaded" !== lq._state || lq._playLock) return lq._queue.push({
            event: "fade",
            action: function() {
              lq.fade(qq, Eq, gq, Yq)
            }
          }), lq;
          qq = Math.min(Math.max(0, parseFloat(qq)), 1), Eq = Math.min(Math.max(0, parseFloat(Eq)), 1), gq = parseFloat(gq), lq.volume(qq, Yq);
          for (var mq = lq._getSoundIds(Yq), xq = 0; xq < mq.length; xq++) {
            var Aq = lq._soundById(mq[xq]);
            if (Aq) {
              if (Yq || lq._stopFade(mq[xq]), lq._webAudio && !Aq._muted) {
                var cq = Oq.ctx.currentTime,
                  uq = cq + gq / 1e3;
                Aq._volume = qq, Aq._node.gain.setValueAtTime(qq, cq), Aq._node.gain.linearRampToValueAtTime(Eq, uq)
              }
              lq._startFadeInterval(Aq, qq, Eq, gq, mq[xq], "undefined" === typeof Yq)
            }
          }
          return lq
        },
        _startFadeInterval: function(qq, Eq, gq, Yq, lq, Oq) {
          var mq = this,
            xq = Eq,
            Aq = gq - Eq,
            cq = Math.abs(Aq / .01),
            uq = Math.max(4, cq > 0 ? Yq / cq : Yq),
            Bq = Date.now();
          qq._fadeTo = gq, qq._interval = setInterval((function() {
            var lq = (Date.now() - Bq) / Yq;
            Bq = Date.now(), xq += Aq * lq, xq = Math.round(100 * xq) / 100, xq = Aq < 0 ? Math.max(gq, xq) : Math.min(gq, xq), mq._webAudio ? qq._volume = xq : mq.volume(xq, qq._id, !0), Oq && (mq._volume = xq), (gq < Eq && xq <= gq || gq > Eq && xq >= gq) && (clearInterval(qq._interval), qq._interval = null, qq._fadeTo = null, mq.volume(gq, qq._id), mq._emit("fade", qq._id))
          }), uq)
        },
        _stopFade: function(qq) {
          var Eq = this,
            gq = Eq._soundById(qq);
          return gq && gq._interval && (Eq._webAudio && gq._node.gain.cancelScheduledValues(Oq.ctx.currentTime), clearInterval(gq._interval), gq._interval = null, Eq.volume(gq._fadeTo, qq), gq._fadeTo = null, Eq._emit("fade", qq)), Eq
        },
        loop: function() {
          var qq, Eq, gq, Yq = this,
            lq = arguments;
          if (0 === lq.length) return Yq._loop;
          if (1 === lq.length) {
            if ("boolean" !== typeof lq[0]) return !!(gq = Yq._soundById(parseInt(lq[0], 10))) && gq._loop;
            qq = lq[0], Yq._loop = qq
          } else 2 === lq.length && (qq = lq[0], Eq = parseInt(lq[1], 10));
          for (var Oq = Yq._getSoundIds(Eq), mq = 0; mq < Oq.length; mq++)(gq = Yq._soundById(Oq[mq])) && (gq._loop = qq, Yq._webAudio && gq._node && gq._node.bufferSource && (gq._node.bufferSource.loop = qq, qq && (gq._node.bufferSource.loopStart = gq._start || 0, gq._node.bufferSource.loopEnd = gq._stop, Yq.playing(Oq[mq]) && (Yq.pause(Oq[mq], !0), Yq.play(Oq[mq], !0)))));
          return Yq
        },
        rate: function() {
          var qq, Eq, gq, Yq = this,
            lq = arguments;
          if (0 === lq.length) Eq = Yq._sounds[0]._id;
          else if (1 === lq.length) {
            Yq._getSoundIds().indexOf(lq[0]) >= 0 ? Eq = parseInt(lq[0], 10) : qq = parseFloat(lq[0])
          } else 2 === lq.length && (qq = parseFloat(lq[0]), Eq = parseInt(lq[1], 10));
          if ("number" !== typeof qq) return (gq = Yq._soundById(Eq)) ? gq._rate : Yq._rate;
          if ("loaded" !== Yq._state || Yq._playLock) return Yq._queue.push({
            event: "rate",
            action: function() {
              Yq.rate.apply(Yq, lq)
            }
          }), Yq;
          "undefined" === typeof Eq && (Yq._rate = qq), Eq = Yq._getSoundIds(Eq);
          for (var mq = 0; mq < Eq.length; mq++)
            if (gq = Yq._soundById(Eq[mq])) {
              Yq.playing(Eq[mq]) && (gq._rateSeek = Yq.seek(Eq[mq]), gq._playStart = Yq._webAudio ? Oq.ctx.currentTime : gq._playStart), gq._rate = qq, Yq._webAudio && gq._node && gq._node.bufferSource ? gq._node.bufferSource.playbackRate.setValueAtTime(qq, Oq.ctx.currentTime) : gq._node && (gq._node.playbackRate = qq);
              var xq = Yq.seek(Eq[mq]),
                Aq = 1e3 * ((Yq._sprite[gq._sprite][0] + Yq._sprite[gq._sprite][1]) / 1e3 - xq) / Math.abs(gq._rate);
              !Yq._endTimers[Eq[mq]] && gq.Av || (Yq._clearTimer(Eq[mq]), Yq._endTimers[Eq[mq]] = setTimeout(Yq._ended.bind(Yq, gq), Aq)), Yq._emit("rate", gq._id)
            } return Yq
        },
        seek: function() {
          var qq, Eq, gq = this,
            Yq = arguments;
          if (0 === Yq.length) gq._sounds.length && (Eq = gq._sounds[0]._id);
          else if (1 === Yq.length) {
            gq._getSoundIds().indexOf(Yq[0]) >= 0 ? Eq = parseInt(Yq[0], 10) : gq._sounds.length && (Eq = gq._sounds[0]._id, qq = parseFloat(Yq[0]))
          } else 2 === Yq.length && (qq = parseFloat(Yq[0]), Eq = parseInt(Yq[1], 10));
          if ("undefined" === typeof Eq) return 0;
          if ("number" === typeof qq && ("loaded" !== gq._state || gq._playLock)) return gq._queue.push({
            event: "seek",
            action: function() {
              gq.seek.apply(gq, Yq)
            }
          }), gq;
          var lq = gq._soundById(Eq);
          if (lq) {
            if (!("number" === typeof qq && qq >= 0)) {
              if (gq._webAudio) {
                var mq = gq.playing(Eq) ? Oq.ctx.currentTime - lq._playStart : 0,
                  xq = lq._rateSeek ? lq._rateSeek - lq._seek : 0;
                return lq._seek + (xq + mq * Math.abs(lq._rate))
              }
              return lq._node.currentTime
            }
            var Aq = gq.playing(Eq);
            Aq && gq.pause(Eq, !0), lq._seek = qq, lq._ended = !1, gq._clearTimer(Eq), gq._webAudio || !lq._node || isNaN(lq._node.duration) || (lq._node.currentTime = qq);
            var cq = function() {
              Aq && gq.play(Eq, !0), gq._emit("seek", Eq)
            };
            if (Aq && !gq._webAudio) {
              var uq = function() {
                gq._playLock ? setTimeout(uq, 0) : cq()
              };
              setTimeout(uq, 0)
            } else cq()
          }
          return gq
        },
        playing: function(qq) {
          var Eq = this;
          if ("number" === typeof qq) {
            var gq = Eq._soundById(qq);
            return !!gq && !gq.Av
          }
          for (var Yq = 0; Yq < Eq._sounds.length; Yq++)
            if (!Eq._sounds[Yq].Av) return !0;
          return !1
        },
        duration: function(qq) {
          var Eq = this,
            gq = Eq._duration,
            Yq = Eq._soundById(qq);
          return Yq && (gq = Eq._sprite[Yq._sprite][1] / 1e3), gq
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var qq = this, Eq = qq._sounds, gq = 0; gq < Eq.length; gq++) Eq[gq].Av || qq.stop(Eq[gq]._id), qq._webAudio || (qq._clearSound(Eq[gq]._node), Eq[gq]._node.removeEventListener("error", Eq[gq]._errorFn, !1), Eq[gq]._node.removeEventListener(Oq._canPlayEvent, Eq[gq]._loadFn, !1), Eq[gq]._node.removeEventListener("ended", Eq[gq]._endFn, !1), Oq._releaseHtml5Audio(Eq[gq]._node)), delete Eq[gq]._node, qq._clearTimer(Eq[gq]._id);
          var Yq = Oq._howls.indexOf(qq);
          Yq >= 0 && Oq._howls.splice(Yq, 1);
          var lq = !0;
          for (gq = 0; gq < Oq._howls.length; gq++)
            if (Oq._howls[gq]._src === qq._src || qq._src.indexOf(Oq._howls[gq]._src) >= 0) {
              lq = !1;
              break
            } return Aq && lq && delete Aq[qq._src], Oq.noAudio = !1, qq._state = "unloaded", qq._sounds = [], qq = null, null
        },
        on: function(qq, Eq, gq, Yq) {
          var lq = this["_on" + qq];
          return "function" === typeof Eq && lq.push(Yq ? {
            id: gq,
            LN: Eq,
            once: Yq
          } : {
            id: gq,
            LN: Eq
          }), this
        },
        off: function(qq, Eq, gq) {
          var Yq = this,
            lq = Yq["_on" + qq],
            Oq = 0;
          if ("number" === typeof Eq && (gq = Eq, Eq = null), Eq || gq)
            for (Oq = 0; Oq < lq.length; Oq++) {
              var mq = gq === lq[Oq].id;
              if (Eq === lq[Oq].LN && mq || !Eq && mq) {
                lq.splice(Oq, 1);
                break
              }
            } else if (qq) Yq["_on" + qq] = [];
            else {
              var xq = Object.keys(Yq);
              for (Oq = 0; Oq < xq.length; Oq++) 0 === xq[Oq].indexOf("_on") && Array.isArray(Yq[xq[Oq]]) && (Yq[xq[Oq]] = [])
            } return Yq
        },
        once: function(qq, Eq, gq) {
          return this.on(qq, Eq, gq, 1), this
        },
        _emit: function(qq, Eq, gq) {
          for (var Yq = this, lq = Yq["_on" + qq], Oq = lq.length - 1; Oq >= 0; Oq--) lq[Oq].id && lq[Oq].id !== Eq && "load" !== qq || (setTimeout(function(qq) {
            qq.call(this, Eq, gq)
          }.bind(Yq, lq[Oq].LN), 0), lq[Oq].once && Yq.off(qq, lq[Oq].LN, lq[Oq].id));
          return Yq._loadQueue(qq), Yq
        },
        _loadQueue: function(qq) {
          var Eq = this;
          if (Eq._queue.length > 0) {
            var gq = Eq._queue[0];
            gq.event === qq && (Eq._queue.shift(), Eq._loadQueue()), qq || gq.action()
          }
          return Eq
        },
        _ended: function(qq) {
          var Eq = this,
            gq = qq._sprite;
          if (!Eq._webAudio && qq._node && !qq._node.paused && !qq._node.ended && qq._node.currentTime < qq._stop) return setTimeout(Eq._ended.bind(Eq, qq), 100), Eq;
          var Yq = !(!qq._loop && !Eq._sprite[gq][2]);
          if (Eq._emit("end", qq._id), !Eq._webAudio && Yq && Eq.stop(qq._id, !0).play(qq._id), Eq._webAudio && Yq) {
            Eq._emit("play", qq._id), qq._seek = qq._start || 0, qq._rateSeek = 0, qq._playStart = Oq.ctx.currentTime;
            var lq = 1e3 * (qq._stop - qq._start) / Math.abs(qq._rate);
            Eq._endTimers[qq._id] = setTimeout(Eq._ended.bind(Eq, qq), lq)
          }
          return Eq._webAudio && !Yq && (qq.Av = !0, qq._ended = !0, qq._seek = qq._start || 0, qq._rateSeek = 0, Eq._clearTimer(qq._id), Eq._cleanBuffer(qq._node), Oq._autoSuspend()), Eq._webAudio || Yq || Eq.stop(qq._id, !0), Eq
        },
        _clearTimer: function(qq) {
          var Eq = this;
          if (Eq._endTimers[qq]) {
            if ("function" !== typeof Eq._endTimers[qq]) clearTimeout(Eq._endTimers[qq]);
            else {
              var gq = Eq._soundById(qq);
              gq && gq._node && gq._node.removeEventListener("ended", Eq._endTimers[qq], !1)
            }
            delete Eq._endTimers[qq]
          }
          return Eq
        },
        _soundById: function(qq) {
          for (var Eq = this, gq = 0; gq < Eq._sounds.length; gq++)
            if (qq === Eq._sounds[gq]._id) return Eq._sounds[gq];
          return null
        },
        _inactiveSound: function() {
          var qq = this;
          qq._drain();
          for (var Eq = 0; Eq < qq._sounds.length; Eq++)
            if (qq._sounds[Eq]._ended) return qq._sounds[Eq].reset();
          return new xq(qq)
        },
        _drain: function() {
          var qq = this,
            Eq = qq._pool,
            gq = 0,
            Yq = 0;
          if (!(qq._sounds.length < Eq)) {
            for (Yq = 0; Yq < qq._sounds.length; Yq++) qq._sounds[Yq]._ended && gq++;
            for (Yq = qq._sounds.length - 1; Yq >= 0; Yq--) {
              if (gq <= Eq) return;
              qq._sounds[Yq]._ended && (qq._webAudio && qq._sounds[Yq]._node && qq._sounds[Yq]._node.disconnect(0), qq._sounds.splice(Yq, 1), gq--)
            }
          }
        },
        _getSoundIds: function(qq) {
          if ("undefined" === typeof qq) {
            for (var Eq = [], gq = 0; gq < this._sounds.length; gq++) Eq.push(this._sounds[gq]._id);
            return Eq
          }
          return [qq]
        },
        _refreshBuffer: function(qq) {
          return qq._node.bufferSource = Oq.ctx.createBufferSource(), qq._node.bufferSource.buffer = Aq[this._src], qq._panner ? qq._node.bufferSource.connect(qq._panner) : qq._node.bufferSource.connect(qq._node), qq._node.bufferSource.loop = qq._loop, qq._loop && (qq._node.bufferSource.loopStart = qq._start || 0, qq._node.bufferSource.loopEnd = qq._stop || 0), qq._node.bufferSource.playbackRate.setValueAtTime(qq._rate, Oq.ctx.currentTime), this
        },
        _cleanBuffer: function(qq) {
          var Eq = Oq._navigator && Oq._navigator.vendor.indexOf("Apple") >= 0;
          if (Oq._scratchBuffer && qq.bufferSource && (qq.bufferSource.onended = null, qq.bufferSource.disconnect(0), Eq)) try {
            qq.bufferSource.buffer = Oq._scratchBuffer
          } catch (gq) {}
          return qq.bufferSource = null, this
        },
        _clearSound: function(qq) {
          /MSIE |Trident\//.test(Oq._navigator && Oq._navigator.userAgent) || (qq.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var xq = function(qq) {
        this._parent = qq, this.init()
      };
      xq.prototype = {
        init: function() {
          var qq = this,
            Eq = qq._parent;
          return qq._muted = Eq._muted, qq._loop = Eq._loop, qq._volume = Eq._volume, qq._rate = Eq._rate, qq._seek = 0, qq.Av = !0, qq._ended = !0, qq._sprite = "__default", qq._id = ++Oq._counter, Eq._sounds.push(qq), qq.create(), qq
        },
        create: function() {
          var qq = this,
            Eq = qq._parent,
            gq = Oq._muted || qq._muted || qq._parent._muted ? 0 : qq._volume;
          return Eq._webAudio ? (qq._node = "undefined" === typeof Oq.ctx.createGain ? Oq.ctx.createGainNode() : Oq.ctx.createGain(), qq._node.gain.setValueAtTime(gq, Oq.ctx.currentTime), qq._node.paused = !0, qq._node.connect(Oq.masterGain)) : Oq.noAudio || (qq._node = Oq._obtainHtml5Audio(), qq._errorFn = qq._errorListener.bind(qq), qq._node.addEventListener("error", qq._errorFn, !1), qq._loadFn = qq._loadListener.bind(qq), qq._node.addEventListener(Oq._canPlayEvent, qq._loadFn, !1), qq._endFn = qq._endListener.bind(qq), qq._node.addEventListener("ended", qq._endFn, !1), qq._node.src = Eq._src, qq._node.preload = !0 === Eq._preload ? "auto" : Eq._preload, qq._node.volume = gq * Oq.volume(), qq._node.load()), qq
        },
        reset: function() {
          var qq = this,
            Eq = qq._parent;
          return qq._muted = Eq._muted, qq._loop = Eq._loop, qq._volume = Eq._volume, qq._rate = Eq._rate, qq._seek = 0, qq._rateSeek = 0, qq.Av = !0, qq._ended = !0, qq._sprite = "__default", qq._id = ++Oq._counter, qq
        },
        _errorListener: function() {
          var qq = this;
          qq._parent._emit("loaderror", qq._id, qq._node.error ? qq._node.error.code : 0), qq._node.removeEventListener("error", qq._errorFn, !1)
        },
        _loadListener: function() {
          var qq = this,
            Eq = qq._parent;
          Eq._duration = Math.ceil(10 * qq._node.duration) / 10, 0 === Object.keys(Eq._sprite).length && (Eq._sprite = {
            __default: [0, 1e3 * Eq._duration]
          }), "loaded" !== Eq._state && (Eq._state = "loaded", Eq._emit("load"), Eq._loadQueue()), qq._node.removeEventListener(Oq._canPlayEvent, qq._loadFn, !1)
        },
        _endListener: function() {
          var qq = this,
            Eq = qq._parent;
          Eq._duration === 1 / 0 && (Eq._duration = Math.ceil(10 * qq._node.duration) / 10, Eq._sprite.__default[1] === 1 / 0 && (Eq._sprite.__default[1] = 1e3 * Eq._duration), Eq._ended(qq)), qq._node.removeEventListener("ended", qq._endFn, !1)
        }
      };
      var Aq = {},
        cq = function(qq) {
          var Eq = qq._src;
          if (Aq[Eq]) return qq._duration = Aq[Eq].duration, void Wq(qq);
          if (/^data:[^;]+;base64,/.test(Eq)) {
            for (var gq = atob(Eq.split(",")[1]), Yq = new Uint8Array(gq.length), lq = 0; lq < gq.length; ++lq) Yq[lq] = gq.charCodeAt(lq);
            Bq(Yq.buffer, qq)
          } else {
            var Oq = new XMLHttpRequest;
            Oq.open(qq._xhr.method, Eq, !0), Oq.withCredentials = qq._xhr.withCredentials, Oq.responseType = "arraybuffer", qq._xhr.headers && Object.keys(qq._xhr.headers).forEach((function(Eq) {
              Oq.setRequestHeader(Eq, qq._xhr.headers[Eq])
            })), Oq.onload = function() {
              var Eq = (Oq.status + "")[0];
              "0" === Eq || "2" === Eq || "3" === Eq ? Bq(Oq.response, qq) : qq._emit("loaderror", null, "Failed loading audio file with status: " + Oq.status + ".")
            }, Oq.onerror = function() {
              qq._webAudio && (qq._html5 = !0, qq._webAudio = !1, qq._sounds = [], delete Aq[Eq], qq.load())
            }, uq(Oq)
          }
        },
        uq = function(qq) {
          try {
            qq.send()
          } catch (Eq) {
            qq.onerror()
          }
        },
        Bq = function(qq, Eq) {
          var gq = function() {
              Eq._emit("loaderror", null, "Decoding audio data failed.")
            },
            Yq = function(qq) {
              qq && Eq._sounds.length > 0 ? (Aq[Eq._src] = qq, Wq(Eq, qq)) : gq()
            };
          "undefined" !== typeof Promise && 1 === Oq.ctx.decodeAudioData.length ? Oq.ctx.decodeAudioData(qq).then(Yq).catch(gq) : Oq.ctx.decodeAudioData(qq, Yq, gq)
        },
        Wq = function(qq, Eq) {
          Eq && !qq._duration && (qq._duration = Eq.duration), 0 === Object.keys(qq._sprite).length && (qq._sprite = {
            __default: [0, 1e3 * qq._duration]
          }), "loaded" !== qq._state && (qq._state = "loaded", qq._emit("load"), qq._loadQueue())
        },
        Nq = function() {
          if (Oq.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Oq.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Oq.ctx = new webkitAudioContext : Oq.usingWebAudio = !1
            } catch (lq) {
              Oq.usingWebAudio = !1
            }
            Oq.ctx || (Oq.usingWebAudio = !1);
            var qq = /iP(hone|od|ad)/.test(Oq._navigator && Oq._navigator.platform),
              Eq = Oq._navigator && Oq._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              gq = Eq ? parseInt(Eq[1], 10) : null;
            if (qq && gq && gq < 9) {
              var Yq = /safari/.test(Oq._navigator && Oq._navigator.userAgent.toLowerCase());
              Oq._navigator && !Yq && (Oq.usingWebAudio = !1)
            }
            Oq.usingWebAudio && (Oq.masterGain = "undefined" === typeof Oq.ctx.createGain ? Oq.ctx.createGainNode() : Oq.ctx.createGain(), Oq.masterGain.gain.setValueAtTime(Oq._muted ? 0 : Oq._volume, Oq.ctx.currentTime), Oq.masterGain.connect(Oq.ctx.destination)), Oq._setup()
          }
        };
      void 0 === (Yq = function() {
        return {
          Howler: Oq,
          Howl: mq
        }
      }.apply(Eq, [])) || (qq.exports = Yq), Eq.Howler = Oq, Eq.Howl = mq, "undefined" !== typeof gq.g ? (gq.g.HowlerGlobal = lq, gq.g.Howler = Oq, gq.g.Howl = mq, gq.g.Sound = xq) : "undefined" !== typeof window && (window.HowlerGlobal = lq, window.Howler = Oq, window.Howl = mq, window.Sound = xq)
    }(),
    function() {
      var qq;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(qq) {
        var Eq = this;
        if (!Eq.ctx || !Eq.ctx.listener) return Eq;
        for (var gq = Eq._howls.length - 1; gq >= 0; gq--) Eq._howls[gq].stereo(qq);
        return Eq
      }, HowlerGlobal.prototype.pos = function(qq, Eq, gq) {
        var Yq = this;
        return Yq.ctx && Yq.ctx.listener ? (Eq = "number" !== typeof Eq ? Yq._pos[1] : Eq, gq = "number" !== typeof gq ? Yq._pos[2] : gq, "number" !== typeof qq ? Yq._pos : (Yq._pos = [qq, Eq, gq], "undefined" !== typeof Yq.ctx.listener.positionX ? (Yq.ctx.listener.positionX.setTargetAtTime(Yq._pos[0], Howler.ctx.currentTime, .1), Yq.ctx.listener.positionY.setTargetAtTime(Yq._pos[1], Howler.ctx.currentTime, .1), Yq.ctx.listener.positionZ.setTargetAtTime(Yq._pos[2], Howler.ctx.currentTime, .1)) : Yq.ctx.listener.setPosition(Yq._pos[0], Yq._pos[1], Yq._pos[2]), Yq)) : Yq
      }, HowlerGlobal.prototype.orientation = function(qq, Eq, gq, Yq, lq, Oq) {
        var mq = this;
        if (!mq.ctx || !mq.ctx.listener) return mq;
        var xq = mq._orientation;
        return Eq = "number" !== typeof Eq ? xq[1] : Eq, gq = "number" !== typeof gq ? xq[2] : gq, Yq = "number" !== typeof Yq ? xq[3] : Yq, lq = "number" !== typeof lq ? xq[4] : lq, Oq = "number" !== typeof Oq ? xq[5] : Oq, "number" !== typeof qq ? xq : (mq._orientation = [qq, Eq, gq, Yq, lq, Oq], "undefined" !== typeof mq.ctx.listener.forwardX ? (mq.ctx.listener.forwardX.setTargetAtTime(qq, Howler.ctx.currentTime, .1), mq.ctx.listener.forwardY.setTargetAtTime(Eq, Howler.ctx.currentTime, .1), mq.ctx.listener.forwardZ.setTargetAtTime(gq, Howler.ctx.currentTime, .1), mq.ctx.listener.upX.setTargetAtTime(Yq, Howler.ctx.currentTime, .1), mq.ctx.listener.upY.setTargetAtTime(lq, Howler.ctx.currentTime, .1), mq.ctx.listener.upZ.setTargetAtTime(Oq, Howler.ctx.currentTime, .1)) : mq.ctx.listener.setOrientation(qq, Eq, gq, Yq, lq, Oq), mq)
      }, Howl.prototype.init = (qq = Howl.prototype.init, function(Eq) {
        var gq = this;
        return gq._orientation = Eq.orientation || [1, 0, 0], gq._stereo = Eq.stereo || null, gq._pos = Eq.pos || null, gq._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof Eq.coneInnerAngle ? Eq.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof Eq.coneOuterAngle ? Eq.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof Eq.coneOuterGain ? Eq.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof Eq.distanceModel ? Eq.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof Eq.maxDistance ? Eq.maxDistance : 1e4,
          panningModel: "undefined" !== typeof Eq.panningModel ? Eq.panningModel : "HRTF",
          refDistance: "undefined" !== typeof Eq.refDistance ? Eq.refDistance : 1,
          rolloffFactor: "undefined" !== typeof Eq.rolloffFactor ? Eq.rolloffFactor : 1
        }, gq._onstereo = Eq.onstereo ? [{
          LN: Eq.onstereo
        }] : [], gq._onpos = Eq.onpos ? [{
          LN: Eq.onpos
        }] : [], gq._onorientation = Eq.onorientation ? [{
          LN: Eq.onorientation
        }] : [], qq.call(this, Eq)
      }), Howl.prototype.stereo = function(qq, gq) {
        var Yq = this;
        if (!Yq._webAudio) return Yq;
        if ("loaded" !== Yq._state) return Yq._queue.push({
          event: "stereo",
          action: function() {
            Yq.stereo(qq, gq)
          }
        }), Yq;
        var lq = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof gq) {
          if ("number" !== typeof qq) return Yq._stereo;
          Yq._stereo = qq, Yq._pos = [qq, 0, 0]
        }
        for (var Oq = Yq._getSoundIds(gq), mq = 0; mq < Oq.length; mq++) {
          var xq = Yq._soundById(Oq[mq]);
          if (xq) {
            if ("number" !== typeof qq) return xq._stereo;
            xq._stereo = qq, xq._pos = [qq, 0, 0], xq._node && (xq._pannerAttr.panningModel = "equalpower", xq._panner && xq._panner.pan || Eq(xq, lq), "spatial" === lq ? "undefined" !== typeof xq._panner.positionX ? (xq._panner.positionX.setValueAtTime(qq, Howler.ctx.currentTime), xq._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), xq._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : xq._panner.setPosition(qq, 0, 0) : xq._panner.pan.setValueAtTime(qq, Howler.ctx.currentTime)), Yq._emit("stereo", xq._id)
          }
        }
        return Yq
      }, Howl.prototype.pos = function(qq, gq, Yq, lq) {
        var Oq = this;
        if (!Oq._webAudio) return Oq;
        if ("loaded" !== Oq._state) return Oq._queue.push({
          event: "pos",
          action: function() {
            Oq.pos(qq, gq, Yq, lq)
          }
        }), Oq;
        if (gq = "number" !== typeof gq ? 0 : gq, Yq = "number" !== typeof Yq ? -.5 : Yq, "undefined" === typeof lq) {
          if ("number" !== typeof qq) return Oq._pos;
          Oq._pos = [qq, gq, Yq]
        }
        for (var mq = Oq._getSoundIds(lq), xq = 0; xq < mq.length; xq++) {
          var Aq = Oq._soundById(mq[xq]);
          if (Aq) {
            if ("number" !== typeof qq) return Aq._pos;
            Aq._pos = [qq, gq, Yq], Aq._node && (Aq._panner && !Aq._panner.pan || Eq(Aq, "spatial"), "undefined" !== typeof Aq._panner.positionX ? (Aq._panner.positionX.setValueAtTime(qq, Howler.ctx.currentTime), Aq._panner.positionY.setValueAtTime(gq, Howler.ctx.currentTime), Aq._panner.positionZ.setValueAtTime(Yq, Howler.ctx.currentTime)) : Aq._panner.setPosition(qq, gq, Yq)), Oq._emit("pos", Aq._id)
          }
        }
        return Oq
      }, Howl.prototype.orientation = function(qq, gq, Yq, lq) {
        var Oq = this;
        if (!Oq._webAudio) return Oq;
        if ("loaded" !== Oq._state) return Oq._queue.push({
          event: "orientation",
          action: function() {
            Oq.orientation(qq, gq, Yq, lq)
          }
        }), Oq;
        if (gq = "number" !== typeof gq ? Oq._orientation[1] : gq, Yq = "number" !== typeof Yq ? Oq._orientation[2] : Yq, "undefined" === typeof lq) {
          if ("number" !== typeof qq) return Oq._orientation;
          Oq._orientation = [qq, gq, Yq]
        }
        for (var mq = Oq._getSoundIds(lq), xq = 0; xq < mq.length; xq++) {
          var Aq = Oq._soundById(mq[xq]);
          if (Aq) {
            if ("number" !== typeof qq) return Aq._orientation;
            Aq._orientation = [qq, gq, Yq], Aq._node && (Aq._panner || (Aq._pos || (Aq._pos = Oq._pos || [0, 0, -.5]), Eq(Aq, "spatial")), "undefined" !== typeof Aq._panner.orientationX ? (Aq._panner.orientationX.setValueAtTime(qq, Howler.ctx.currentTime), Aq._panner.orientationY.setValueAtTime(gq, Howler.ctx.currentTime), Aq._panner.orientationZ.setValueAtTime(Yq, Howler.ctx.currentTime)) : Aq._panner.setOrientation(qq, gq, Yq)), Oq._emit("orientation", Aq._id)
          }
        }
        return Oq
      }, Howl.prototype.pannerAttr = function() {
        var qq, gq, Yq, lq = this,
          Oq = arguments;
        if (!lq._webAudio) return lq;
        if (0 === Oq.length) return lq._pannerAttr;
        if (1 === Oq.length) {
          if ("object" !== typeof Oq[0]) return (Yq = lq._soundById(parseInt(Oq[0], 10))) ? Yq._pannerAttr : lq._pannerAttr;
          qq = Oq[0], "undefined" === typeof gq && (qq.pannerAttr || (qq.pannerAttr = {
            coneInnerAngle: qq.coneInnerAngle,
            coneOuterAngle: qq.coneOuterAngle,
            coneOuterGain: qq.coneOuterGain,
            distanceModel: qq.distanceModel,
            maxDistance: qq.maxDistance,
            refDistance: qq.refDistance,
            rolloffFactor: qq.rolloffFactor,
            panningModel: qq.panningModel
          }), lq._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof qq.pannerAttr.coneInnerAngle ? qq.pannerAttr.coneInnerAngle : lq._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof qq.pannerAttr.coneOuterAngle ? qq.pannerAttr.coneOuterAngle : lq._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof qq.pannerAttr.coneOuterGain ? qq.pannerAttr.coneOuterGain : lq._coneOuterGain,
            distanceModel: "undefined" !== typeof qq.pannerAttr.distanceModel ? qq.pannerAttr.distanceModel : lq._distanceModel,
            maxDistance: "undefined" !== typeof qq.pannerAttr.maxDistance ? qq.pannerAttr.maxDistance : lq._maxDistance,
            refDistance: "undefined" !== typeof qq.pannerAttr.refDistance ? qq.pannerAttr.refDistance : lq._refDistance,
            rolloffFactor: "undefined" !== typeof qq.pannerAttr.rolloffFactor ? qq.pannerAttr.rolloffFactor : lq._rolloffFactor,
            panningModel: "undefined" !== typeof qq.pannerAttr.panningModel ? qq.pannerAttr.panningModel : lq._panningModel
          })
        } else 2 === Oq.length && (qq = Oq[0], gq = parseInt(Oq[1], 10));
        for (var mq = lq._getSoundIds(gq), xq = 0; xq < mq.length; xq++)
          if (Yq = lq._soundById(mq[xq])) {
            var Aq = Yq._pannerAttr;
            Aq = {
              coneInnerAngle: "undefined" !== typeof qq.coneInnerAngle ? qq.coneInnerAngle : Aq.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof qq.coneOuterAngle ? qq.coneOuterAngle : Aq.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof qq.coneOuterGain ? qq.coneOuterGain : Aq.coneOuterGain,
              distanceModel: "undefined" !== typeof qq.distanceModel ? qq.distanceModel : Aq.distanceModel,
              maxDistance: "undefined" !== typeof qq.maxDistance ? qq.maxDistance : Aq.maxDistance,
              refDistance: "undefined" !== typeof qq.refDistance ? qq.refDistance : Aq.refDistance,
              rolloffFactor: "undefined" !== typeof qq.rolloffFactor ? qq.rolloffFactor : Aq.rolloffFactor,
              panningModel: "undefined" !== typeof qq.panningModel ? qq.panningModel : Aq.panningModel
            };
            var cq = Yq._panner;
            cq ? (cq.coneInnerAngle = Aq.coneInnerAngle, cq.coneOuterAngle = Aq.coneOuterAngle, cq.coneOuterGain = Aq.coneOuterGain, cq.distanceModel = Aq.distanceModel, cq.maxDistance = Aq.maxDistance, cq.refDistance = Aq.refDistance, cq.rolloffFactor = Aq.rolloffFactor, cq.panningModel = Aq.panningModel) : (Yq._pos || (Yq._pos = lq._pos || [0, 0, -.5]), Eq(Yq, "spatial"))
          } return lq
      }, Sound.prototype.init = function(qq) {
        return function() {
          var Eq = this,
            gq = Eq._parent;
          Eq._orientation = gq._orientation, Eq._stereo = gq._stereo, Eq._pos = gq._pos, Eq._pannerAttr = gq._pannerAttr, qq.call(this), Eq._stereo ? gq.stereo(Eq._stereo) : Eq._pos && gq.pos(Eq._pos[0], Eq._pos[1], Eq._pos[2], Eq._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(qq) {
        return function() {
          var Eq = this,
            gq = Eq._parent;
          return Eq._orientation = gq._orientation, Eq._stereo = gq._stereo, Eq._pos = gq._pos, Eq._pannerAttr = gq._pannerAttr, Eq._stereo ? gq.stereo(Eq._stereo) : Eq._pos ? gq.pos(Eq._pos[0], Eq._pos[1], Eq._pos[2], Eq._id) : Eq._panner && (Eq._panner.disconnect(0), Eq._panner = void 0, gq._refreshBuffer(Eq)), qq.call(this)
        }
      }(Sound.prototype.reset);
      var Eq = function(qq, Eq) {
        "spatial" === (Eq = Eq || "spatial") ? (qq._panner = Howler.ctx.createPanner(), qq._panner.coneInnerAngle = qq._pannerAttr.coneInnerAngle, qq._panner.coneOuterAngle = qq._pannerAttr.coneOuterAngle, qq._panner.coneOuterGain = qq._pannerAttr.coneOuterGain, qq._panner.distanceModel = qq._pannerAttr.distanceModel, qq._panner.maxDistance = qq._pannerAttr.maxDistance, qq._panner.refDistance = qq._pannerAttr.refDistance, qq._panner.rolloffFactor = qq._pannerAttr.rolloffFactor, qq._panner.panningModel = qq._pannerAttr.panningModel, "undefined" !== typeof qq._panner.positionX ? (qq._panner.positionX.setValueAtTime(qq._pos[0], Howler.ctx.currentTime), qq._panner.positionY.setValueAtTime(qq._pos[1], Howler.ctx.currentTime), qq._panner.positionZ.setValueAtTime(qq._pos[2], Howler.ctx.currentTime)) : qq._panner.setPosition(qq._pos[0], qq._pos[1], qq._pos[2]), "undefined" !== typeof qq._panner.orientationX ? (qq._panner.orientationX.setValueAtTime(qq._orientation[0], Howler.ctx.currentTime), qq._panner.orientationY.setValueAtTime(qq._orientation[1], Howler.ctx.currentTime), qq._panner.orientationZ.setValueAtTime(qq._orientation[2], Howler.ctx.currentTime)) : qq._panner.setOrientation(qq._orientation[0], qq._orientation[1], qq._orientation[2])) : (qq._panner = Howler.ctx.createStereoPanner(), qq._panner.pan.setValueAtTime(qq._stereo, Howler.ctx.currentTime)), qq._panner.connect(qq._node), qq.Av || qq._parent.pause(qq._id, !0).play(qq._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);