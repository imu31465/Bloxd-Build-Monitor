/*! For license information please see sn3sfj.98.090b1c89.chunk.js.LICENSE.txt */
export const id = 98;
export const ids = [98];
export const modules = {
  4977: (pp, ip, cp) => {
    var Op;
    ! function() {
      var op = function() {
        this.init()
      };
      op.prototype = {
        init: function() {
          var pp = this || Ip;
          return pp._counter = 1e3, pp._html5AudioPool = [], pp.html5PoolSize = 10, pp._codecs = {}, pp._howls = [], pp._muted = !1, pp._volume = 1, pp._canPlayEvent = "canplaythrough", pp._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, pp.masterGain = null, pp.noAudio = !1, pp.usingWebAudio = !0, pp.autoSuspend = !0, pp.ctx = null, pp.autoUnlock = !0, pp._setup(), pp
        },
        volume: function(pp) {
          var ip = this || Ip;
          if (pp = parseFloat(pp), ip.ctx || Wp(), "undefined" !== typeof pp && pp >= 0 && pp <= 1) {
            if (ip._volume = pp, ip._muted) return ip;
            ip.usingWebAudio && ip.masterGain.gain.setValueAtTime(pp, Ip.ctx.currentTime);
            for (var cp = 0; cp < ip._howls.length; cp++)
              if (!ip._howls[cp]._webAudio)
                for (var Op = ip._howls[cp]._getSoundIds(), op = 0; op < Op.length; op++) {
                  var Sp = ip._howls[cp]._soundById(Op[op]);
                  Sp && Sp._node && (Sp._node.volume = Sp._volume * pp)
                }
            return ip
          }
          return ip._volume
        },
        mute: function(pp) {
          var ip = this || Ip;
          ip.ctx || Wp(), ip._muted = pp, ip.usingWebAudio && ip.masterGain.gain.setValueAtTime(pp ? 0 : ip._volume, Ip.ctx.currentTime);
          for (var cp = 0; cp < ip._howls.length; cp++)
            if (!ip._howls[cp]._webAudio)
              for (var Op = ip._howls[cp]._getSoundIds(), op = 0; op < Op.length; op++) {
                var Sp = ip._howls[cp]._soundById(Op[op]);
                Sp && Sp._node && (Sp._node.muted = !!pp || Sp._muted)
              }
          return ip
        },
        stop: function() {
          for (var pp = this || Ip, ip = 0; ip < pp._howls.length; ip++) pp._howls[ip].stop();
          return pp
        },
        unload: function() {
          for (var pp = this || Ip, ip = pp._howls.length - 1; ip >= 0; ip--) pp._howls[ip].unload();
          return pp.usingWebAudio && pp.ctx && "undefined" !== typeof pp.ctx.close && (pp.ctx.close(), pp.ctx = null, Wp()), pp
        },
        codecs: function(pp) {
          return (this || Ip)._codecs[pp.replace(/^x-/, "")]
        },
        _setup: function() {
          var pp = this || Ip;
          if (pp.state = pp.ctx && pp.ctx.state || "suspended", pp._autoSuspend(), !pp.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (pp._canPlayEvent = "canplay")
            } catch (ip) {
              pp.noAudio = !0
            } else pp.noAudio = !0;
          try {
            (new Audio).muted && (pp.noAudio = !0)
          } catch (ip) {}
          return pp.noAudio || pp._setupCodecs(), pp
        },
        _setupCodecs: function() {
          var pp = this || Ip,
            ip = null;
          try {
            ip = "undefined" !== typeof Audio ? new Audio : null
          } catch (Dp) {
            return pp
          }
          if (!ip || "function" !== typeof ip.canPlayType) return pp;
          var cp = ip.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Op = pp._navigator ? pp._navigator.userAgent : "",
            op = Op.match(/OPR\/([0-6].)/g),
            Sp = op && parseInt(op[0].split("/")[1], 10) < 33,
            xp = -1 !== Op.indexOf("Safari") && -1 === Op.indexOf("Chrome"),
            Lp = Op.match(/Version\/(.*?) /),
            Yp = xp && Lp && parseInt(Lp[1], 10) < 15;
          return pp._codecs = {
            mp3: !(Sp || !cp && !ip.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!cp,
            opus: !!ip.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!ip.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!ip.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(ip.canPlayType('audio/wav; codecs="1"') || ip.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!ip.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!ip.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(ip.canPlayType("audio/x-m4a;") || ip.canPlayType("audio/m4a;") || ip.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(ip.canPlayType("audio/x-m4b;") || ip.canPlayType("audio/m4b;") || ip.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(ip.canPlayType("audio/x-mp4;") || ip.canPlayType("audio/mp4;") || ip.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Yp || !ip.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Yp || !ip.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!ip.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(ip.canPlayType("audio/x-flac;") || ip.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, pp
        },
        _unlockAudio: function() {
          var pp = this || Ip;
          if (!pp._audioUnlocked && pp.ctx) {
            pp._audioUnlocked = !1, pp.autoUnlock = !1, pp._mobileUnloaded || 44100 === pp.ctx.sampleRate || (pp._mobileUnloaded = !0, pp.unload()), pp._scratchBuffer = pp.ctx.createBuffer(1, 1, 22050);
            var ip = function(cp) {
              for (; pp._html5AudioPool.length < pp.html5PoolSize;) try {
                var Op = new Audio;
                Op._unlocked = !0, pp._releaseHtml5Audio(Op)
              } catch (cp) {
                pp.noAudio = !0;
                break
              }
              for (var op = 0; op < pp._howls.length; op++)
                if (!pp._howls[op]._webAudio)
                  for (var Ip = pp._howls[op]._getSoundIds(), Sp = 0; Sp < Ip.length; Sp++) {
                    var xp = pp._howls[op]._soundById(Ip[Sp]);
                    xp && xp._node && !xp._node._unlocked && (xp._node._unlocked = !0, xp._node.load())
                  }
              pp._autoResume();
              var Lp = pp.ctx.createBufferSource();
              Lp.buffer = pp._scratchBuffer, Lp.connect(pp.ctx.destination), "undefined" === typeof Lp.start ? Lp.noteOn(0) : Lp.start(0), "function" === typeof pp.ctx.resume && pp.ctx.resume(), Lp.onended = function() {
                Lp.disconnect(0), pp._audioUnlocked = !0, document.removeEventListener("touchstart", ip, !0), document.removeEventListener("touchend", ip, !0), document.removeEventListener("click", ip, !0), document.removeEventListener("keydown", ip, !0);
                for (var cp = 0; cp < pp._howls.length; cp++) pp._howls[cp]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", ip, !0), document.addEventListener("touchend", ip, !0), document.addEventListener("click", ip, !0), document.addEventListener("keydown", ip, !0), pp
          }
        },
        _obtainHtml5Audio: function() {
          var pp = this || Ip;
          if (pp._html5AudioPool.length) return pp._html5AudioPool.pop();
          var ip = (new Audio).play();
          return ip && "undefined" !== typeof Promise && (ip instanceof Promise || "function" === typeof ip.then) && ip.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(pp) {
          var ip = this || Ip;
          return pp._unlocked && ip._html5AudioPool.push(pp), ip
        },
        _autoSuspend: function() {
          var pp = this;
          if (pp.autoSuspend && pp.ctx && "undefined" !== typeof pp.ctx.suspend && Ip.usingWebAudio) {
            for (var ip = 0; ip < pp._howls.length; ip++)
              if (pp._howls[ip]._webAudio)
                for (var cp = 0; cp < pp._howls[ip]._sounds.length; cp++)
                  if (!pp._howls[ip]._sounds[cp].Fk) return pp;
            return pp._suspendTimer && clearTimeout(pp._suspendTimer), pp._suspendTimer = setTimeout((function() {
              if (pp.autoSuspend) {
                pp._suspendTimer = null, pp.state = "suspending";
                var ip = function() {
                  pp.state = "suspended", pp._resumeAfterSuspend && (delete pp._resumeAfterSuspend, pp._autoResume())
                };
                pp.ctx.suspend().then(ip, ip)
              }
            }), 3e4), pp
          }
        },
        _autoResume: function() {
          var pp = this;
          if (pp.ctx && "undefined" !== typeof pp.ctx.resume && Ip.usingWebAudio) return "running" === pp.state && "interrupted" !== pp.ctx.state && pp._suspendTimer ? (clearTimeout(pp._suspendTimer), pp._suspendTimer = null) : "suspended" === pp.state || "running" === pp.state && "interrupted" === pp.ctx.state ? (pp.ctx.resume().then((function() {
            pp.state = "running";
            for (var ip = 0; ip < pp._howls.length; ip++) pp._howls[ip]._emit("resume")
          })), pp._suspendTimer && (clearTimeout(pp._suspendTimer), pp._suspendTimer = null)) : "suspending" === pp.state && (pp._resumeAfterSuspend = !0), pp
        }
      };
      var Ip = new op,
        Sp = function(pp) {
          pp.src && 0 !== pp.src.length ? this.init(pp) : console.error("An array of source files must be passed with any new Howl.")
        };
      Sp.prototype = {
        init: function(pp) {
          var ip = this;
          return Ip.ctx || Wp(), ip._autoplay = pp.autoplay || !1, ip._format = "string" !== typeof pp.format ? pp.format : [pp.format], ip._html5 = pp.html5 || !1, ip._muted = pp.mute || !1, ip._loop = pp.loop || !1, ip._pool = pp.pool || 5, ip._preload = "boolean" !== typeof pp.preload && "metadata" !== pp.preload || pp.preload, ip._rate = pp.rate || 1, ip._sprite = pp.sprite || {}, ip._src = "string" !== typeof pp.src ? pp.src : [pp.src], ip._volume = void 0 !== pp.volume ? pp.volume : 1, ip._xhr = {
            method: pp.xhr && pp.xhr.method ? pp.xhr.method : "GET",
            headers: pp.xhr && pp.xhr.headers ? pp.xhr.headers : null,
            withCredentials: !(!pp.xhr || !pp.xhr.withCredentials) && pp.xhr.withCredentials
          }, ip._duration = 0, ip._state = "unloaded", ip._sounds = [], ip._endTimers = {}, ip._queue = [], ip._playLock = !1, ip._onend = pp.onend ? [{
            Py: pp.onend
          }] : [], ip._onfade = pp.onfade ? [{
            Py: pp.onfade
          }] : [], ip._onload = pp.onload ? [{
            Py: pp.onload
          }] : [], ip._onloaderror = pp.onloaderror ? [{
            Py: pp.onloaderror
          }] : [], ip._onplayerror = pp.onplayerror ? [{
            Py: pp.onplayerror
          }] : [], ip._onpause = pp.onpause ? [{
            Py: pp.onpause
          }] : [], ip._onplay = pp.onplay ? [{
            Py: pp.onplay
          }] : [], ip._onstop = pp.onstop ? [{
            Py: pp.onstop
          }] : [], ip._onmute = pp.onmute ? [{
            Py: pp.onmute
          }] : [], ip._onvolume = pp.onvolume ? [{
            Py: pp.onvolume
          }] : [], ip._onrate = pp.onrate ? [{
            Py: pp.onrate
          }] : [], ip._onseek = pp.onseek ? [{
            Py: pp.onseek
          }] : [], ip._onunlock = pp.onunlock ? [{
            Py: pp.onunlock
          }] : [], ip._onresume = [], ip._webAudio = Ip.usingWebAudio && !ip._html5, "undefined" !== typeof Ip.ctx && Ip.ctx && Ip.autoUnlock && Ip._unlockAudio(), Ip._howls.push(ip), ip._autoplay && ip._queue.push({
            event: "play",
            action: function() {
              ip.play()
            }
          }), ip._preload && "none" !== ip._preload && ip.load(), ip
        },
        load: function() {
          var pp = this,
            ip = null;
          if (Ip.noAudio) pp._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof pp._src && (pp._src = [pp._src]);
            for (var cp = 0; cp < pp._src.length; cp++) {
              var Op, op;
              if (pp._format && pp._format[cp]) Op = pp._format[cp];
              else {
                if ("string" !== typeof(op = pp._src[cp])) {
                  pp._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Op = /^data:audio\/([^;,]+);/i.exec(op)) || (Op = /\.([^.]+)$/.exec(op.split("?", 1)[0])), Op && (Op = Op[1].toLowerCase())
              }
              if (Op || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Op && Ip.codecs(Op)) {
                ip = pp._src[cp];
                break
              }
            }
            if (ip) return pp._src = ip, pp._state = "loading", "https:" === window.location.protocol && "http:" === ip.slice(0, 5) && (pp._html5 = !0, pp._webAudio = !1), new xp(pp), pp._webAudio && Yp(pp), pp;
            pp._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(pp, ip) {
          var cp = this,
            Op = null;
          if ("number" === typeof pp) Op = pp, pp = null;
          else {
            if ("string" === typeof pp && "loaded" === cp._state && !cp._sprite[pp]) return null;
            if ("undefined" === typeof pp && (pp = "__default", !cp._playLock)) {
              for (var op = 0, Sp = 0; Sp < cp._sounds.length; Sp++) cp._sounds[Sp].Fk && !cp._sounds[Sp]._ended && (op++, Op = cp._sounds[Sp]._id);
              1 === op ? pp = null : Op = null
            }
          }
          var xp = Op ? cp._soundById(Op) : cp._inactiveSound();
          if (!xp) return null;
          if (Op && !pp && (pp = xp._sprite || "__default"), "loaded" !== cp._state) {
            xp._sprite = pp, xp._ended = !1;
            var Lp = xp._id;
            return cp._queue.push({
              event: "play",
              action: function() {
                cp.play(Lp)
              }
            }), Lp
          }
          if (Op && !xp.Fk) return ip || cp._loadQueue("play"), xp._id;
          cp._webAudio && Ip._autoResume();
          var Yp = Math.max(0, xp._seek > 0 ? xp._seek : cp._sprite[pp][0] / 1e3),
            Dp = Math.max(0, (cp._sprite[pp][0] + cp._sprite[pp][1]) / 1e3 - Yp),
            Ap = 1e3 * Dp / Math.abs(xp._rate),
            Pp = cp._sprite[pp][0] / 1e3,
            Wp = (cp._sprite[pp][0] + cp._sprite[pp][1]) / 1e3;
          xp._sprite = pp, xp._ended = !1;
          var yp = function() {
            xp.Fk = !1, xp._seek = Yp, xp._start = Pp, xp._stop = Wp, xp._loop = !(!xp._loop && !cp._sprite[pp][2])
          };
          if (!(Yp >= Wp)) {
            var Up = xp._node;
            if (cp._webAudio) {
              var wp = function() {
                cp._playLock = !1, yp(), cp._refreshBuffer(xp);
                var pp = xp._muted || cp._muted ? 0 : xp._volume;
                Up.gain.setValueAtTime(pp, Ip.ctx.currentTime), xp._playStart = Ip.ctx.currentTime, "undefined" === typeof Up.bufferSource.start ? xp._loop ? Up.bufferSource.noteGrainOn(0, Yp, 86400) : Up.bufferSource.noteGrainOn(0, Yp, Dp) : xp._loop ? Up.bufferSource.start(0, Yp, 86400) : Up.bufferSource.start(0, Yp, Dp), Ap !== 1 / 0 && (cp._endTimers[xp._id] = setTimeout(cp._ended.bind(cp, xp), Ap)), ip || setTimeout((function() {
                  cp._emit("play", xp._id), cp._loadQueue()
                }), 0)
              };
              "running" === Ip.state && "interrupted" !== Ip.ctx.state ? wp() : (cp._playLock = !0, cp.once("resume", wp), cp._clearTimer(xp._id))
            } else {
              var vp = function() {
                Up.currentTime = Yp, Up.muted = xp._muted || cp._muted || Ip._muted || Up.muted, Up.volume = xp._volume * Ip.volume(), Up.playbackRate = xp._rate;
                try {
                  var Op = Up.play();
                  if (Op && "undefined" !== typeof Promise && (Op instanceof Promise || "function" === typeof Op.then) ? (cp._playLock = !0, yp(), Op.then((function() {
                      cp._playLock = !1, Up._unlocked = !0, ip ? cp._loadQueue() : cp._emit("play", xp._id)
                    })).catch((function() {
                      cp._playLock = !1, cp._emit("playerror", xp._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), xp._ended = !0, xp.Fk = !0
                    }))) : ip || (cp._playLock = !1, yp(), cp._emit("play", xp._id)), Up.playbackRate = xp._rate, Up.paused) return void cp._emit("playerror", xp._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== pp || xp._loop ? cp._endTimers[xp._id] = setTimeout(cp._ended.bind(cp, xp), Ap) : (cp._endTimers[xp._id] = function() {
                    cp._ended(xp), Up.removeEventListener("ended", cp._endTimers[xp._id], !1)
                  }, Up.addEventListener("ended", cp._endTimers[xp._id], !1))
                } catch (op) {
                  cp._emit("playerror", xp._id, op)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Up.src && (Up.src = cp._src, Up.load());
              var tp = window && window.ejecta || !Up.readyState && Ip._navigator.isCocoonJS;
              if (Up.readyState >= 3 || tp) vp();
              else {
                cp._playLock = !0, cp._state = "loading";
                var Hp = function() {
                  cp._state = "loaded", vp(), Up.removeEventListener(Ip._canPlayEvent, Hp, !1)
                };
                Up.addEventListener(Ip._canPlayEvent, Hp, !1), cp._clearTimer(xp._id)
              }
            }
            return xp._id
          }
          cp._ended(xp)
        },
        pause: function(pp) {
          var ip = this;
          if ("loaded" !== ip._state || ip._playLock) return ip._queue.push({
            event: "pause",
            action: function() {
              ip.pause(pp)
            }
          }), ip;
          for (var cp = ip._getSoundIds(pp), Op = 0; Op < cp.length; Op++) {
            ip._clearTimer(cp[Op]);
            var op = ip._soundById(cp[Op]);
            if (op && !op.Fk && (op._seek = ip.seek(cp[Op]), op._rateSeek = 0, op.Fk = !0, ip._stopFade(cp[Op]), op._node))
              if (ip._webAudio) {
                if (!op._node.bufferSource) continue;
                "undefined" === typeof op._node.bufferSource.stop ? op._node.bufferSource.noteOff(0) : op._node.bufferSource.stop(0), ip._cleanBuffer(op._node)
              } else isNaN(op._node.duration) && op._node.duration !== 1 / 0 || op._node.pause();
            arguments[1] || ip._emit("pause", op ? op._id : null)
          }
          return ip
        },
        stop: function(pp, ip) {
          var cp = this;
          if ("loaded" !== cp._state || cp._playLock) return cp._queue.push({
            event: "stop",
            action: function() {
              cp.stop(pp)
            }
          }), cp;
          for (var Op = cp._getSoundIds(pp), op = 0; op < Op.length; op++) {
            cp._clearTimer(Op[op]);
            var Ip = cp._soundById(Op[op]);
            Ip && (Ip._seek = Ip._start || 0, Ip._rateSeek = 0, Ip.Fk = !0, Ip._ended = !0, cp._stopFade(Op[op]), Ip._node && (cp._webAudio ? Ip._node.bufferSource && ("undefined" === typeof Ip._node.bufferSource.stop ? Ip._node.bufferSource.noteOff(0) : Ip._node.bufferSource.stop(0), cp._cleanBuffer(Ip._node)) : isNaN(Ip._node.duration) && Ip._node.duration !== 1 / 0 || (Ip._node.currentTime = Ip._start || 0, Ip._node.pause(), Ip._node.duration === 1 / 0 && cp._clearSound(Ip._node))), ip || cp._emit("stop", Ip._id))
          }
          return cp
        },
        mute: function(pp, ip) {
          var cp = this;
          if ("loaded" !== cp._state || cp._playLock) return cp._queue.push({
            event: "mute",
            action: function() {
              cp.mute(pp, ip)
            }
          }), cp;
          if ("undefined" === typeof ip) {
            if ("boolean" !== typeof pp) return cp._muted;
            cp._muted = pp
          }
          for (var Op = cp._getSoundIds(ip), op = 0; op < Op.length; op++) {
            var Sp = cp._soundById(Op[op]);
            Sp && (Sp._muted = pp, Sp._interval && cp._stopFade(Sp._id), cp._webAudio && Sp._node ? Sp._node.gain.setValueAtTime(pp ? 0 : Sp._volume, Ip.ctx.currentTime) : Sp._node && (Sp._node.muted = !!Ip._muted || pp), cp._emit("mute", Sp._id))
          }
          return cp
        },
        volume: function() {
          var pp, ip, cp, Op = this,
            op = arguments;
          if (0 === op.length) return Op._volume;
          if (1 === op.length || 2 === op.length && "undefined" === typeof op[1] ? Op._getSoundIds().indexOf(op[0]) >= 0 ? ip = parseInt(op[0], 10) : pp = parseFloat(op[0]) : op.length >= 2 && (pp = parseFloat(op[0]), ip = parseInt(op[1], 10)), !("undefined" !== typeof pp && pp >= 0 && pp <= 1)) return (cp = ip ? Op._soundById(ip) : Op._sounds[0]) ? cp._volume : 0;
          if ("loaded" !== Op._state || Op._playLock) return Op._queue.push({
            event: "volume",
            action: function() {
              Op.volume.apply(Op, op)
            }
          }), Op;
          "undefined" === typeof ip && (Op._volume = pp), ip = Op._getSoundIds(ip);
          for (var Sp = 0; Sp < ip.length; Sp++)(cp = Op._soundById(ip[Sp])) && (cp._volume = pp, op[2] || Op._stopFade(ip[Sp]), Op._webAudio && cp._node && !cp._muted ? cp._node.gain.setValueAtTime(pp, Ip.ctx.currentTime) : cp._node && !cp._muted && (cp._node.volume = pp * Ip.volume()), Op._emit("volume", cp._id));
          return Op
        },
        fade: function(pp, ip, cp, Op) {
          var op = this;
          if ("loaded" !== op._state || op._playLock) return op._queue.push({
            event: "fade",
            action: function() {
              op.fade(pp, ip, cp, Op)
            }
          }), op;
          pp = Math.min(Math.max(0, parseFloat(pp)), 1), ip = Math.min(Math.max(0, parseFloat(ip)), 1), cp = parseFloat(cp), op.volume(pp, Op);
          for (var Sp = op._getSoundIds(Op), xp = 0; xp < Sp.length; xp++) {
            var Lp = op._soundById(Sp[xp]);
            if (Lp) {
              if (Op || op._stopFade(Sp[xp]), op._webAudio && !Lp._muted) {
                var Yp = Ip.ctx.currentTime,
                  Dp = Yp + cp / 1e3;
                Lp._volume = pp, Lp._node.gain.setValueAtTime(pp, Yp), Lp._node.gain.linearRampToValueAtTime(ip, Dp)
              }
              op._startFadeInterval(Lp, pp, ip, cp, Sp[xp], "undefined" === typeof Op)
            }
          }
          return op
        },
        _startFadeInterval: function(pp, ip, cp, Op, op, Ip) {
          var Sp = this,
            xp = ip,
            Lp = cp - ip,
            Yp = Math.abs(Lp / .01),
            Dp = Math.max(4, Yp > 0 ? Op / Yp : Op),
            Ap = Date.now();
          pp._fadeTo = cp, pp._interval = setInterval((function() {
            var op = (Date.now() - Ap) / Op;
            Ap = Date.now(), xp += Lp * op, xp = Math.round(100 * xp) / 100, xp = Lp < 0 ? Math.max(cp, xp) : Math.min(cp, xp), Sp._webAudio ? pp._volume = xp : Sp.volume(xp, pp._id, !0), Ip && (Sp._volume = xp), (cp < ip && xp <= cp || cp > ip && xp >= cp) && (clearInterval(pp._interval), pp._interval = null, pp._fadeTo = null, Sp.volume(cp, pp._id), Sp._emit("fade", pp._id))
          }), Dp)
        },
        _stopFade: function(pp) {
          var ip = this,
            cp = ip._soundById(pp);
          return cp && cp._interval && (ip._webAudio && cp._node.gain.cancelScheduledValues(Ip.ctx.currentTime), clearInterval(cp._interval), cp._interval = null, ip.volume(cp._fadeTo, pp), cp._fadeTo = null, ip._emit("fade", pp)), ip
        },
        loop: function() {
          var pp, ip, cp, Op = this,
            op = arguments;
          if (0 === op.length) return Op._loop;
          if (1 === op.length) {
            if ("boolean" !== typeof op[0]) return !!(cp = Op._soundById(parseInt(op[0], 10))) && cp._loop;
            pp = op[0], Op._loop = pp
          } else 2 === op.length && (pp = op[0], ip = parseInt(op[1], 10));
          for (var Ip = Op._getSoundIds(ip), Sp = 0; Sp < Ip.length; Sp++)(cp = Op._soundById(Ip[Sp])) && (cp._loop = pp, Op._webAudio && cp._node && cp._node.bufferSource && (cp._node.bufferSource.loop = pp, pp && (cp._node.bufferSource.loopStart = cp._start || 0, cp._node.bufferSource.loopEnd = cp._stop, Op.playing(Ip[Sp]) && (Op.pause(Ip[Sp], !0), Op.play(Ip[Sp], !0)))));
          return Op
        },
        rate: function() {
          var pp, ip, cp, Op = this,
            op = arguments;
          if (0 === op.length) ip = Op._sounds[0]._id;
          else if (1 === op.length) {
            Op._getSoundIds().indexOf(op[0]) >= 0 ? ip = parseInt(op[0], 10) : pp = parseFloat(op[0])
          } else 2 === op.length && (pp = parseFloat(op[0]), ip = parseInt(op[1], 10));
          if ("number" !== typeof pp) return (cp = Op._soundById(ip)) ? cp._rate : Op._rate;
          if ("loaded" !== Op._state || Op._playLock) return Op._queue.push({
            event: "rate",
            action: function() {
              Op.rate.apply(Op, op)
            }
          }), Op;
          "undefined" === typeof ip && (Op._rate = pp), ip = Op._getSoundIds(ip);
          for (var Sp = 0; Sp < ip.length; Sp++)
            if (cp = Op._soundById(ip[Sp])) {
              Op.playing(ip[Sp]) && (cp._rateSeek = Op.seek(ip[Sp]), cp._playStart = Op._webAudio ? Ip.ctx.currentTime : cp._playStart), cp._rate = pp, Op._webAudio && cp._node && cp._node.bufferSource ? cp._node.bufferSource.playbackRate.setValueAtTime(pp, Ip.ctx.currentTime) : cp._node && (cp._node.playbackRate = pp);
              var xp = Op.seek(ip[Sp]),
                Lp = 1e3 * ((Op._sprite[cp._sprite][0] + Op._sprite[cp._sprite][1]) / 1e3 - xp) / Math.abs(cp._rate);
              !Op._endTimers[ip[Sp]] && cp.Fk || (Op._clearTimer(ip[Sp]), Op._endTimers[ip[Sp]] = setTimeout(Op._ended.bind(Op, cp), Lp)), Op._emit("rate", cp._id)
            } return Op
        },
        seek: function() {
          var pp, ip, cp = this,
            Op = arguments;
          if (0 === Op.length) cp._sounds.length && (ip = cp._sounds[0]._id);
          else if (1 === Op.length) {
            cp._getSoundIds().indexOf(Op[0]) >= 0 ? ip = parseInt(Op[0], 10) : cp._sounds.length && (ip = cp._sounds[0]._id, pp = parseFloat(Op[0]))
          } else 2 === Op.length && (pp = parseFloat(Op[0]), ip = parseInt(Op[1], 10));
          if ("undefined" === typeof ip) return 0;
          if ("number" === typeof pp && ("loaded" !== cp._state || cp._playLock)) return cp._queue.push({
            event: "seek",
            action: function() {
              cp.seek.apply(cp, Op)
            }
          }), cp;
          var op = cp._soundById(ip);
          if (op) {
            if (!("number" === typeof pp && pp >= 0)) {
              if (cp._webAudio) {
                var Sp = cp.playing(ip) ? Ip.ctx.currentTime - op._playStart : 0,
                  xp = op._rateSeek ? op._rateSeek - op._seek : 0;
                return op._seek + (xp + Sp * Math.abs(op._rate))
              }
              return op._node.currentTime
            }
            var Lp = cp.playing(ip);
            Lp && cp.pause(ip, !0), op._seek = pp, op._ended = !1, cp._clearTimer(ip), cp._webAudio || !op._node || isNaN(op._node.duration) || (op._node.currentTime = pp);
            var Yp = function() {
              Lp && cp.play(ip, !0), cp._emit("seek", ip)
            };
            if (Lp && !cp._webAudio) {
              var Dp = function() {
                cp._playLock ? setTimeout(Dp, 0) : Yp()
              };
              setTimeout(Dp, 0)
            } else Yp()
          }
          return cp
        },
        playing: function(pp) {
          var ip = this;
          if ("number" === typeof pp) {
            var cp = ip._soundById(pp);
            return !!cp && !cp.Fk
          }
          for (var Op = 0; Op < ip._sounds.length; Op++)
            if (!ip._sounds[Op].Fk) return !0;
          return !1
        },
        duration: function(pp) {
          var ip = this,
            cp = ip._duration,
            Op = ip._soundById(pp);
          return Op && (cp = ip._sprite[Op._sprite][1] / 1e3), cp
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var pp = this, ip = pp._sounds, cp = 0; cp < ip.length; cp++) ip[cp].Fk || pp.stop(ip[cp]._id), pp._webAudio || (pp._clearSound(ip[cp]._node), ip[cp]._node.removeEventListener("error", ip[cp]._errorFn, !1), ip[cp]._node.removeEventListener(Ip._canPlayEvent, ip[cp]._loadFn, !1), ip[cp]._node.removeEventListener("ended", ip[cp]._endFn, !1), Ip._releaseHtml5Audio(ip[cp]._node)), delete ip[cp]._node, pp._clearTimer(ip[cp]._id);
          var Op = Ip._howls.indexOf(pp);
          Op >= 0 && Ip._howls.splice(Op, 1);
          var op = !0;
          for (cp = 0; cp < Ip._howls.length; cp++)
            if (Ip._howls[cp]._src === pp._src || pp._src.indexOf(Ip._howls[cp]._src) >= 0) {
              op = !1;
              break
            } return Lp && op && delete Lp[pp._src], Ip.noAudio = !1, pp._state = "unloaded", pp._sounds = [], pp = null, null
        },
        on: function(pp, ip, cp, Op) {
          var op = this["_on" + pp];
          return "function" === typeof ip && op.push(Op ? {
            id: cp,
            Py: ip,
            once: Op
          } : {
            id: cp,
            Py: ip
          }), this
        },
        off: function(pp, ip, cp) {
          var Op = this,
            op = Op["_on" + pp],
            Ip = 0;
          if ("number" === typeof ip && (cp = ip, ip = null), ip || cp)
            for (Ip = 0; Ip < op.length; Ip++) {
              var Sp = cp === op[Ip].id;
              if (ip === op[Ip].Py && Sp || !ip && Sp) {
                op.splice(Ip, 1);
                break
              }
            } else if (pp) Op["_on" + pp] = [];
            else {
              var xp = Object.keys(Op);
              for (Ip = 0; Ip < xp.length; Ip++) 0 === xp[Ip].indexOf("_on") && Array.isArray(Op[xp[Ip]]) && (Op[xp[Ip]] = [])
            } return Op
        },
        once: function(pp, ip, cp) {
          return this.on(pp, ip, cp, 1), this
        },
        _emit: function(pp, ip, cp) {
          for (var Op = this, op = Op["_on" + pp], Ip = op.length - 1; Ip >= 0; Ip--) op[Ip].id && op[Ip].id !== ip && "load" !== pp || (setTimeout(function(pp) {
            pp.call(this, ip, cp)
          }.bind(Op, op[Ip].Py), 0), op[Ip].once && Op.off(pp, op[Ip].Py, op[Ip].id));
          return Op._loadQueue(pp), Op
        },
        _loadQueue: function(pp) {
          var ip = this;
          if (ip._queue.length > 0) {
            var cp = ip._queue[0];
            cp.event === pp && (ip._queue.shift(), ip._loadQueue()), pp || cp.action()
          }
          return ip
        },
        _ended: function(pp) {
          var ip = this,
            cp = pp._sprite;
          if (!ip._webAudio && pp._node && !pp._node.paused && !pp._node.ended && pp._node.currentTime < pp._stop) return setTimeout(ip._ended.bind(ip, pp), 100), ip;
          var Op = !(!pp._loop && !ip._sprite[cp][2]);
          if (ip._emit("end", pp._id), !ip._webAudio && Op && ip.stop(pp._id, !0).play(pp._id), ip._webAudio && Op) {
            ip._emit("play", pp._id), pp._seek = pp._start || 0, pp._rateSeek = 0, pp._playStart = Ip.ctx.currentTime;
            var op = 1e3 * (pp._stop - pp._start) / Math.abs(pp._rate);
            ip._endTimers[pp._id] = setTimeout(ip._ended.bind(ip, pp), op)
          }
          return ip._webAudio && !Op && (pp.Fk = !0, pp._ended = !0, pp._seek = pp._start || 0, pp._rateSeek = 0, ip._clearTimer(pp._id), ip._cleanBuffer(pp._node), Ip._autoSuspend()), ip._webAudio || Op || ip.stop(pp._id, !0), ip
        },
        _clearTimer: function(pp) {
          var ip = this;
          if (ip._endTimers[pp]) {
            if ("function" !== typeof ip._endTimers[pp]) clearTimeout(ip._endTimers[pp]);
            else {
              var cp = ip._soundById(pp);
              cp && cp._node && cp._node.removeEventListener("ended", ip._endTimers[pp], !1)
            }
            delete ip._endTimers[pp]
          }
          return ip
        },
        _soundById: function(pp) {
          for (var ip = this, cp = 0; cp < ip._sounds.length; cp++)
            if (pp === ip._sounds[cp]._id) return ip._sounds[cp];
          return null
        },
        _inactiveSound: function() {
          var pp = this;
          pp._drain();
          for (var ip = 0; ip < pp._sounds.length; ip++)
            if (pp._sounds[ip]._ended) return pp._sounds[ip].reset();
          return new xp(pp)
        },
        _drain: function() {
          var pp = this,
            ip = pp._pool,
            cp = 0,
            Op = 0;
          if (!(pp._sounds.length < ip)) {
            for (Op = 0; Op < pp._sounds.length; Op++) pp._sounds[Op]._ended && cp++;
            for (Op = pp._sounds.length - 1; Op >= 0; Op--) {
              if (cp <= ip) return;
              pp._sounds[Op]._ended && (pp._webAudio && pp._sounds[Op]._node && pp._sounds[Op]._node.disconnect(0), pp._sounds.splice(Op, 1), cp--)
            }
          }
        },
        _getSoundIds: function(pp) {
          if ("undefined" === typeof pp) {
            for (var ip = [], cp = 0; cp < this._sounds.length; cp++) ip.push(this._sounds[cp]._id);
            return ip
          }
          return [pp]
        },
        _refreshBuffer: function(pp) {
          return pp._node.bufferSource = Ip.ctx.createBufferSource(), pp._node.bufferSource.buffer = Lp[this._src], pp._panner ? pp._node.bufferSource.connect(pp._panner) : pp._node.bufferSource.connect(pp._node), pp._node.bufferSource.loop = pp._loop, pp._loop && (pp._node.bufferSource.loopStart = pp._start || 0, pp._node.bufferSource.loopEnd = pp._stop || 0), pp._node.bufferSource.playbackRate.setValueAtTime(pp._rate, Ip.ctx.currentTime), this
        },
        _cleanBuffer: function(pp) {
          var ip = Ip._navigator && Ip._navigator.vendor.indexOf("Apple") >= 0;
          if (Ip._scratchBuffer && pp.bufferSource && (pp.bufferSource.onended = null, pp.bufferSource.disconnect(0), ip)) try {
            pp.bufferSource.buffer = Ip._scratchBuffer
          } catch (cp) {}
          return pp.bufferSource = null, this
        },
        _clearSound: function(pp) {
          /MSIE |Trident\//.test(Ip._navigator && Ip._navigator.userAgent) || (pp.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var xp = function(pp) {
        this._parent = pp, this.init()
      };
      xp.prototype = {
        init: function() {
          var pp = this,
            ip = pp._parent;
          return pp._muted = ip._muted, pp._loop = ip._loop, pp._volume = ip._volume, pp._rate = ip._rate, pp._seek = 0, pp.Fk = !0, pp._ended = !0, pp._sprite = "__default", pp._id = ++Ip._counter, ip._sounds.push(pp), pp.create(), pp
        },
        create: function() {
          var pp = this,
            ip = pp._parent,
            cp = Ip._muted || pp._muted || pp._parent._muted ? 0 : pp._volume;
          return ip._webAudio ? (pp._node = "undefined" === typeof Ip.ctx.createGain ? Ip.ctx.createGainNode() : Ip.ctx.createGain(), pp._node.gain.setValueAtTime(cp, Ip.ctx.currentTime), pp._node.paused = !0, pp._node.connect(Ip.masterGain)) : Ip.noAudio || (pp._node = Ip._obtainHtml5Audio(), pp._errorFn = pp._errorListener.bind(pp), pp._node.addEventListener("error", pp._errorFn, !1), pp._loadFn = pp._loadListener.bind(pp), pp._node.addEventListener(Ip._canPlayEvent, pp._loadFn, !1), pp._endFn = pp._endListener.bind(pp), pp._node.addEventListener("ended", pp._endFn, !1), pp._node.src = ip._src, pp._node.preload = !0 === ip._preload ? "auto" : ip._preload, pp._node.volume = cp * Ip.volume(), pp._node.load()), pp
        },
        reset: function() {
          var pp = this,
            ip = pp._parent;
          return pp._muted = ip._muted, pp._loop = ip._loop, pp._volume = ip._volume, pp._rate = ip._rate, pp._seek = 0, pp._rateSeek = 0, pp.Fk = !0, pp._ended = !0, pp._sprite = "__default", pp._id = ++Ip._counter, pp
        },
        _errorListener: function() {
          var pp = this;
          pp._parent._emit("loaderror", pp._id, pp._node.error ? pp._node.error.code : 0), pp._node.removeEventListener("error", pp._errorFn, !1)
        },
        _loadListener: function() {
          var pp = this,
            ip = pp._parent;
          ip._duration = Math.ceil(10 * pp._node.duration) / 10, 0 === Object.keys(ip._sprite).length && (ip._sprite = {
            __default: [0, 1e3 * ip._duration]
          }), "loaded" !== ip._state && (ip._state = "loaded", ip._emit("load"), ip._loadQueue()), pp._node.removeEventListener(Ip._canPlayEvent, pp._loadFn, !1)
        },
        _endListener: function() {
          var pp = this,
            ip = pp._parent;
          ip._duration === 1 / 0 && (ip._duration = Math.ceil(10 * pp._node.duration) / 10, ip._sprite.__default[1] === 1 / 0 && (ip._sprite.__default[1] = 1e3 * ip._duration), ip._ended(pp)), pp._node.removeEventListener("ended", pp._endFn, !1)
        }
      };
      var Lp = {},
        Yp = function(pp) {
          var ip = pp._src;
          if (Lp[ip]) return pp._duration = Lp[ip].duration, void Pp(pp);
          if (/^data:[^;]+;base64,/.test(ip)) {
            for (var cp = atob(ip.split(",")[1]), Op = new Uint8Array(cp.length), op = 0; op < cp.length; ++op) Op[op] = cp.charCodeAt(op);
            Ap(Op.buffer, pp)
          } else {
            var Ip = new XMLHttpRequest;
            Ip.open(pp._xhr.method, ip, !0), Ip.withCredentials = pp._xhr.withCredentials, Ip.responseType = "arraybuffer", pp._xhr.headers && Object.keys(pp._xhr.headers).forEach((function(ip) {
              Ip.setRequestHeader(ip, pp._xhr.headers[ip])
            })), Ip.onload = function() {
              var ip = (Ip.status + "")[0];
              "0" === ip || "2" === ip || "3" === ip ? Ap(Ip.response, pp) : pp._emit("loaderror", null, "Failed loading audio file with status: " + Ip.status + ".")
            }, Ip.onerror = function() {
              pp._webAudio && (pp._html5 = !0, pp._webAudio = !1, pp._sounds = [], delete Lp[ip], pp.load())
            }, Dp(Ip)
          }
        },
        Dp = function(pp) {
          try {
            pp.send()
          } catch (ip) {
            pp.onerror()
          }
        },
        Ap = function(pp, ip) {
          var cp = function() {
              ip._emit("loaderror", null, "Decoding audio data failed.")
            },
            Op = function(pp) {
              pp && ip._sounds.length > 0 ? (Lp[ip._src] = pp, Pp(ip, pp)) : cp()
            };
          "undefined" !== typeof Promise && 1 === Ip.ctx.decodeAudioData.length ? Ip.ctx.decodeAudioData(pp).then(Op).catch(cp) : Ip.ctx.decodeAudioData(pp, Op, cp)
        },
        Pp = function(pp, ip) {
          ip && !pp._duration && (pp._duration = ip.duration), 0 === Object.keys(pp._sprite).length && (pp._sprite = {
            __default: [0, 1e3 * pp._duration]
          }), "loaded" !== pp._state && (pp._state = "loaded", pp._emit("load"), pp._loadQueue())
        },
        Wp = function() {
          if (Ip.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Ip.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Ip.ctx = new webkitAudioContext : Ip.usingWebAudio = !1
            } catch (op) {
              Ip.usingWebAudio = !1
            }
            Ip.ctx || (Ip.usingWebAudio = !1);
            var pp = /iP(hone|od|ad)/.test(Ip._navigator && Ip._navigator.platform),
              ip = Ip._navigator && Ip._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              cp = ip ? parseInt(ip[1], 10) : null;
            if (pp && cp && cp < 9) {
              var Op = /safari/.test(Ip._navigator && Ip._navigator.userAgent.toLowerCase());
              Ip._navigator && !Op && (Ip.usingWebAudio = !1)
            }
            Ip.usingWebAudio && (Ip.masterGain = "undefined" === typeof Ip.ctx.createGain ? Ip.ctx.createGainNode() : Ip.ctx.createGain(), Ip.masterGain.gain.setValueAtTime(Ip._muted ? 0 : Ip._volume, Ip.ctx.currentTime), Ip.masterGain.connect(Ip.ctx.destination)), Ip._setup()
          }
        };
      void 0 === (Op = function() {
        return {
          Howler: Ip,
          Howl: Sp
        }
      }.apply(ip, [])) || (pp.exports = Op), ip.Howler = Ip, ip.Howl = Sp, "undefined" !== typeof cp.g ? (cp.g.HowlerGlobal = op, cp.g.Howler = Ip, cp.g.Howl = Sp, cp.g.Sound = xp) : "undefined" !== typeof window && (window.HowlerGlobal = op, window.Howler = Ip, window.Howl = Sp, window.Sound = xp)
    }(),
    function() {
      var pp;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(pp) {
        var ip = this;
        if (!ip.ctx || !ip.ctx.listener) return ip;
        for (var cp = ip._howls.length - 1; cp >= 0; cp--) ip._howls[cp].stereo(pp);
        return ip
      }, HowlerGlobal.prototype.pos = function(pp, ip, cp) {
        var Op = this;
        return Op.ctx && Op.ctx.listener ? (ip = "number" !== typeof ip ? Op._pos[1] : ip, cp = "number" !== typeof cp ? Op._pos[2] : cp, "number" !== typeof pp ? Op._pos : (Op._pos = [pp, ip, cp], "undefined" !== typeof Op.ctx.listener.positionX ? (Op.ctx.listener.positionX.setTargetAtTime(Op._pos[0], Howler.ctx.currentTime, .1), Op.ctx.listener.positionY.setTargetAtTime(Op._pos[1], Howler.ctx.currentTime, .1), Op.ctx.listener.positionZ.setTargetAtTime(Op._pos[2], Howler.ctx.currentTime, .1)) : Op.ctx.listener.setPosition(Op._pos[0], Op._pos[1], Op._pos[2]), Op)) : Op
      }, HowlerGlobal.prototype.orientation = function(pp, ip, cp, Op, op, Ip) {
        var Sp = this;
        if (!Sp.ctx || !Sp.ctx.listener) return Sp;
        var xp = Sp._orientation;
        return ip = "number" !== typeof ip ? xp[1] : ip, cp = "number" !== typeof cp ? xp[2] : cp, Op = "number" !== typeof Op ? xp[3] : Op, op = "number" !== typeof op ? xp[4] : op, Ip = "number" !== typeof Ip ? xp[5] : Ip, "number" !== typeof pp ? xp : (Sp._orientation = [pp, ip, cp, Op, op, Ip], "undefined" !== typeof Sp.ctx.listener.forwardX ? (Sp.ctx.listener.forwardX.setTargetAtTime(pp, Howler.ctx.currentTime, .1), Sp.ctx.listener.forwardY.setTargetAtTime(ip, Howler.ctx.currentTime, .1), Sp.ctx.listener.forwardZ.setTargetAtTime(cp, Howler.ctx.currentTime, .1), Sp.ctx.listener.upX.setTargetAtTime(Op, Howler.ctx.currentTime, .1), Sp.ctx.listener.upY.setTargetAtTime(op, Howler.ctx.currentTime, .1), Sp.ctx.listener.upZ.setTargetAtTime(Ip, Howler.ctx.currentTime, .1)) : Sp.ctx.listener.setOrientation(pp, ip, cp, Op, op, Ip), Sp)
      }, Howl.prototype.init = (pp = Howl.prototype.init, function(ip) {
        var cp = this;
        return cp._orientation = ip.orientation || [1, 0, 0], cp._stereo = ip.stereo || null, cp._pos = ip.pos || null, cp._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof ip.coneInnerAngle ? ip.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof ip.coneOuterAngle ? ip.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof ip.coneOuterGain ? ip.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof ip.distanceModel ? ip.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof ip.maxDistance ? ip.maxDistance : 1e4,
          panningModel: "undefined" !== typeof ip.panningModel ? ip.panningModel : "HRTF",
          refDistance: "undefined" !== typeof ip.refDistance ? ip.refDistance : 1,
          rolloffFactor: "undefined" !== typeof ip.rolloffFactor ? ip.rolloffFactor : 1
        }, cp._onstereo = ip.onstereo ? [{
          Py: ip.onstereo
        }] : [], cp._onpos = ip.onpos ? [{
          Py: ip.onpos
        }] : [], cp._onorientation = ip.onorientation ? [{
          Py: ip.onorientation
        }] : [], pp.call(this, ip)
      }), Howl.prototype.stereo = function(pp, cp) {
        var Op = this;
        if (!Op._webAudio) return Op;
        if ("loaded" !== Op._state) return Op._queue.push({
          event: "stereo",
          action: function() {
            Op.stereo(pp, cp)
          }
        }), Op;
        var op = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof cp) {
          if ("number" !== typeof pp) return Op._stereo;
          Op._stereo = pp, Op._pos = [pp, 0, 0]
        }
        for (var Ip = Op._getSoundIds(cp), Sp = 0; Sp < Ip.length; Sp++) {
          var xp = Op._soundById(Ip[Sp]);
          if (xp) {
            if ("number" !== typeof pp) return xp._stereo;
            xp._stereo = pp, xp._pos = [pp, 0, 0], xp._node && (xp._pannerAttr.panningModel = "equalpower", xp._panner && xp._panner.pan || ip(xp, op), "spatial" === op ? "undefined" !== typeof xp._panner.positionX ? (xp._panner.positionX.setValueAtTime(pp, Howler.ctx.currentTime), xp._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), xp._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : xp._panner.setPosition(pp, 0, 0) : xp._panner.pan.setValueAtTime(pp, Howler.ctx.currentTime)), Op._emit("stereo", xp._id)
          }
        }
        return Op
      }, Howl.prototype.pos = function(pp, cp, Op, op) {
        var Ip = this;
        if (!Ip._webAudio) return Ip;
        if ("loaded" !== Ip._state) return Ip._queue.push({
          event: "pos",
          action: function() {
            Ip.pos(pp, cp, Op, op)
          }
        }), Ip;
        if (cp = "number" !== typeof cp ? 0 : cp, Op = "number" !== typeof Op ? -.5 : Op, "undefined" === typeof op) {
          if ("number" !== typeof pp) return Ip._pos;
          Ip._pos = [pp, cp, Op]
        }
        for (var Sp = Ip._getSoundIds(op), xp = 0; xp < Sp.length; xp++) {
          var Lp = Ip._soundById(Sp[xp]);
          if (Lp) {
            if ("number" !== typeof pp) return Lp._pos;
            Lp._pos = [pp, cp, Op], Lp._node && (Lp._panner && !Lp._panner.pan || ip(Lp, "spatial"), "undefined" !== typeof Lp._panner.positionX ? (Lp._panner.positionX.setValueAtTime(pp, Howler.ctx.currentTime), Lp._panner.positionY.setValueAtTime(cp, Howler.ctx.currentTime), Lp._panner.positionZ.setValueAtTime(Op, Howler.ctx.currentTime)) : Lp._panner.setPosition(pp, cp, Op)), Ip._emit("pos", Lp._id)
          }
        }
        return Ip
      }, Howl.prototype.orientation = function(pp, cp, Op, op) {
        var Ip = this;
        if (!Ip._webAudio) return Ip;
        if ("loaded" !== Ip._state) return Ip._queue.push({
          event: "orientation",
          action: function() {
            Ip.orientation(pp, cp, Op, op)
          }
        }), Ip;
        if (cp = "number" !== typeof cp ? Ip._orientation[1] : cp, Op = "number" !== typeof Op ? Ip._orientation[2] : Op, "undefined" === typeof op) {
          if ("number" !== typeof pp) return Ip._orientation;
          Ip._orientation = [pp, cp, Op]
        }
        for (var Sp = Ip._getSoundIds(op), xp = 0; xp < Sp.length; xp++) {
          var Lp = Ip._soundById(Sp[xp]);
          if (Lp) {
            if ("number" !== typeof pp) return Lp._orientation;
            Lp._orientation = [pp, cp, Op], Lp._node && (Lp._panner || (Lp._pos || (Lp._pos = Ip._pos || [0, 0, -.5]), ip(Lp, "spatial")), "undefined" !== typeof Lp._panner.orientationX ? (Lp._panner.orientationX.setValueAtTime(pp, Howler.ctx.currentTime), Lp._panner.orientationY.setValueAtTime(cp, Howler.ctx.currentTime), Lp._panner.orientationZ.setValueAtTime(Op, Howler.ctx.currentTime)) : Lp._panner.setOrientation(pp, cp, Op)), Ip._emit("orientation", Lp._id)
          }
        }
        return Ip
      }, Howl.prototype.pannerAttr = function() {
        var pp, cp, Op, op = this,
          Ip = arguments;
        if (!op._webAudio) return op;
        if (0 === Ip.length) return op._pannerAttr;
        if (1 === Ip.length) {
          if ("object" !== typeof Ip[0]) return (Op = op._soundById(parseInt(Ip[0], 10))) ? Op._pannerAttr : op._pannerAttr;
          pp = Ip[0], "undefined" === typeof cp && (pp.pannerAttr || (pp.pannerAttr = {
            coneInnerAngle: pp.coneInnerAngle,
            coneOuterAngle: pp.coneOuterAngle,
            coneOuterGain: pp.coneOuterGain,
            distanceModel: pp.distanceModel,
            maxDistance: pp.maxDistance,
            refDistance: pp.refDistance,
            rolloffFactor: pp.rolloffFactor,
            panningModel: pp.panningModel
          }), op._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof pp.pannerAttr.coneInnerAngle ? pp.pannerAttr.coneInnerAngle : op._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof pp.pannerAttr.coneOuterAngle ? pp.pannerAttr.coneOuterAngle : op._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof pp.pannerAttr.coneOuterGain ? pp.pannerAttr.coneOuterGain : op._coneOuterGain,
            distanceModel: "undefined" !== typeof pp.pannerAttr.distanceModel ? pp.pannerAttr.distanceModel : op._distanceModel,
            maxDistance: "undefined" !== typeof pp.pannerAttr.maxDistance ? pp.pannerAttr.maxDistance : op._maxDistance,
            refDistance: "undefined" !== typeof pp.pannerAttr.refDistance ? pp.pannerAttr.refDistance : op._refDistance,
            rolloffFactor: "undefined" !== typeof pp.pannerAttr.rolloffFactor ? pp.pannerAttr.rolloffFactor : op._rolloffFactor,
            panningModel: "undefined" !== typeof pp.pannerAttr.panningModel ? pp.pannerAttr.panningModel : op._panningModel
          })
        } else 2 === Ip.length && (pp = Ip[0], cp = parseInt(Ip[1], 10));
        for (var Sp = op._getSoundIds(cp), xp = 0; xp < Sp.length; xp++)
          if (Op = op._soundById(Sp[xp])) {
            var Lp = Op._pannerAttr;
            Lp = {
              coneInnerAngle: "undefined" !== typeof pp.coneInnerAngle ? pp.coneInnerAngle : Lp.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof pp.coneOuterAngle ? pp.coneOuterAngle : Lp.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof pp.coneOuterGain ? pp.coneOuterGain : Lp.coneOuterGain,
              distanceModel: "undefined" !== typeof pp.distanceModel ? pp.distanceModel : Lp.distanceModel,
              maxDistance: "undefined" !== typeof pp.maxDistance ? pp.maxDistance : Lp.maxDistance,
              refDistance: "undefined" !== typeof pp.refDistance ? pp.refDistance : Lp.refDistance,
              rolloffFactor: "undefined" !== typeof pp.rolloffFactor ? pp.rolloffFactor : Lp.rolloffFactor,
              panningModel: "undefined" !== typeof pp.panningModel ? pp.panningModel : Lp.panningModel
            };
            var Yp = Op._panner;
            Yp ? (Yp.coneInnerAngle = Lp.coneInnerAngle, Yp.coneOuterAngle = Lp.coneOuterAngle, Yp.coneOuterGain = Lp.coneOuterGain, Yp.distanceModel = Lp.distanceModel, Yp.maxDistance = Lp.maxDistance, Yp.refDistance = Lp.refDistance, Yp.rolloffFactor = Lp.rolloffFactor, Yp.panningModel = Lp.panningModel) : (Op._pos || (Op._pos = op._pos || [0, 0, -.5]), ip(Op, "spatial"))
          } return op
      }, Sound.prototype.init = function(pp) {
        return function() {
          var ip = this,
            cp = ip._parent;
          ip._orientation = cp._orientation, ip._stereo = cp._stereo, ip._pos = cp._pos, ip._pannerAttr = cp._pannerAttr, pp.call(this), ip._stereo ? cp.stereo(ip._stereo) : ip._pos && cp.pos(ip._pos[0], ip._pos[1], ip._pos[2], ip._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(pp) {
        return function() {
          var ip = this,
            cp = ip._parent;
          return ip._orientation = cp._orientation, ip._stereo = cp._stereo, ip._pos = cp._pos, ip._pannerAttr = cp._pannerAttr, ip._stereo ? cp.stereo(ip._stereo) : ip._pos ? cp.pos(ip._pos[0], ip._pos[1], ip._pos[2], ip._id) : ip._panner && (ip._panner.disconnect(0), ip._panner = void 0, cp._refreshBuffer(ip)), pp.call(this)
        }
      }(Sound.prototype.reset);
      var ip = function(pp, ip) {
        "spatial" === (ip = ip || "spatial") ? (pp._panner = Howler.ctx.createPanner(), pp._panner.coneInnerAngle = pp._pannerAttr.coneInnerAngle, pp._panner.coneOuterAngle = pp._pannerAttr.coneOuterAngle, pp._panner.coneOuterGain = pp._pannerAttr.coneOuterGain, pp._panner.distanceModel = pp._pannerAttr.distanceModel, pp._panner.maxDistance = pp._pannerAttr.maxDistance, pp._panner.refDistance = pp._pannerAttr.refDistance, pp._panner.rolloffFactor = pp._pannerAttr.rolloffFactor, pp._panner.panningModel = pp._pannerAttr.panningModel, "undefined" !== typeof pp._panner.positionX ? (pp._panner.positionX.setValueAtTime(pp._pos[0], Howler.ctx.currentTime), pp._panner.positionY.setValueAtTime(pp._pos[1], Howler.ctx.currentTime), pp._panner.positionZ.setValueAtTime(pp._pos[2], Howler.ctx.currentTime)) : pp._panner.setPosition(pp._pos[0], pp._pos[1], pp._pos[2]), "undefined" !== typeof pp._panner.orientationX ? (pp._panner.orientationX.setValueAtTime(pp._orientation[0], Howler.ctx.currentTime), pp._panner.orientationY.setValueAtTime(pp._orientation[1], Howler.ctx.currentTime), pp._panner.orientationZ.setValueAtTime(pp._orientation[2], Howler.ctx.currentTime)) : pp._panner.setOrientation(pp._orientation[0], pp._orientation[1], pp._orientation[2])) : (pp._panner = Howler.ctx.createStereoPanner(), pp._panner.pan.setValueAtTime(pp._stereo, Howler.ctx.currentTime)), pp._panner.connect(pp._node), pp.Fk || pp._parent.pause(pp._id, !0).play(pp._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);