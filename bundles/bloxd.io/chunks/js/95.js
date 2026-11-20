/*! For license information please see halsg.95.a815ed3d.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  4629: (bb, ub, hb) => {
    var Bb;
    ! function() {
      var Ob = function() {
        this.init()
      };
      Ob.prototype = {
        init: function() {
          var bb = this || Gb;
          return bb._counter = 1e3, bb._html5AudioPool = [], bb.html5PoolSize = 10, bb._codecs = {}, bb._howls = [], bb._muted = !1, bb._volume = 1, bb._canPlayEvent = "canplaythrough", bb._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, bb.masterGain = null, bb.noAudio = !1, bb.usingWebAudio = !0, bb.autoSuspend = !0, bb.ctx = null, bb.autoUnlock = !0, bb._setup(), bb
        },
        volume: function(bb) {
          var ub = this || Gb;
          if (bb = parseFloat(bb), ub.ctx || Zb(), "undefined" !== typeof bb && bb >= 0 && bb <= 1) {
            if (ub._volume = bb, ub._muted) return ub;
            ub.usingWebAudio && ub.masterGain.gain.setValueAtTime(bb, Gb.ctx.currentTime);
            for (var hb = 0; hb < ub._howls.length; hb++)
              if (!ub._howls[hb]._webAudio)
                for (var Bb = ub._howls[hb]._getSoundIds(), Ob = 0; Ob < Bb.length; Ob++) {
                  var Ub = ub._howls[hb]._soundById(Bb[Ob]);
                  Ub && Ub._node && (Ub._node.volume = Ub._volume * bb)
                }
            return ub
          }
          return ub._volume
        },
        mute: function(bb) {
          var ub = this || Gb;
          ub.ctx || Zb(), ub._muted = bb, ub.usingWebAudio && ub.masterGain.gain.setValueAtTime(bb ? 0 : ub._volume, Gb.ctx.currentTime);
          for (var hb = 0; hb < ub._howls.length; hb++)
            if (!ub._howls[hb]._webAudio)
              for (var Bb = ub._howls[hb]._getSoundIds(), Ob = 0; Ob < Bb.length; Ob++) {
                var Ub = ub._howls[hb]._soundById(Bb[Ob]);
                Ub && Ub._node && (Ub._node.muted = !!bb || Ub._muted)
              }
          return ub
        },
        stop: function() {
          for (var bb = this || Gb, ub = 0; ub < bb._howls.length; ub++) bb._howls[ub].stop();
          return bb
        },
        unload: function() {
          for (var bb = this || Gb, ub = bb._howls.length - 1; ub >= 0; ub--) bb._howls[ub].unload();
          return bb.usingWebAudio && bb.ctx && "undefined" !== typeof bb.ctx.close && (bb.ctx.close(), bb.ctx = null, Zb()), bb
        },
        codecs: function(bb) {
          return (this || Gb)._codecs[bb.replace(/^x-/, "")]
        },
        _setup: function() {
          var bb = this || Gb;
          if (bb.state = bb.ctx && bb.ctx.state || "suspended", bb._autoSuspend(), !bb.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (bb._canPlayEvent = "canplay")
            } catch (ub) {
              bb.noAudio = !0
            } else bb.noAudio = !0;
          try {
            (new Audio).muted && (bb.noAudio = !0)
          } catch (ub) {}
          return bb.noAudio || bb._setupCodecs(), bb
        },
        _setupCodecs: function() {
          var bb = this || Gb,
            ub = null;
          try {
            ub = "undefined" !== typeof Audio ? new Audio : null
          } catch (ab) {
            return bb
          }
          if (!ub || "function" !== typeof ub.canPlayType) return bb;
          var hb = ub.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Bb = bb._navigator ? bb._navigator.userAgent : "",
            Ob = Bb.match(/OPR\/([0-6].)/g),
            Ub = Ob && parseInt(Ob[0].split("/")[1], 10) < 33,
            Lb = -1 !== Bb.indexOf("Safari") && -1 === Bb.indexOf("Chrome"),
            Yb = Bb.match(/Version\/(.*?) /),
            Sb = Lb && Yb && parseInt(Yb[1], 10) < 15;
          return bb._codecs = {
            mp3: !(Ub || !hb && !ub.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!hb,
            opus: !!ub.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!ub.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!ub.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(ub.canPlayType('audio/wav; codecs="1"') || ub.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!ub.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!ub.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(ub.canPlayType("audio/x-m4a;") || ub.canPlayType("audio/m4a;") || ub.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(ub.canPlayType("audio/x-m4b;") || ub.canPlayType("audio/m4b;") || ub.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(ub.canPlayType("audio/x-mp4;") || ub.canPlayType("audio/mp4;") || ub.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Sb || !ub.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Sb || !ub.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!ub.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(ub.canPlayType("audio/x-flac;") || ub.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, bb
        },
        _unlockAudio: function() {
          var bb = this || Gb;
          if (!bb._audioUnlocked && bb.ctx) {
            bb._audioUnlocked = !1, bb.autoUnlock = !1, bb._mobileUnloaded || 44100 === bb.ctx.sampleRate || (bb._mobileUnloaded = !0, bb.unload()), bb._scratchBuffer = bb.ctx.createBuffer(1, 1, 22050);
            var ub = function(hb) {
              for (; bb._html5AudioPool.length < bb.html5PoolSize;) try {
                var Bb = new Audio;
                Bb._unlocked = !0, bb._releaseHtml5Audio(Bb)
              } catch (hb) {
                bb.noAudio = !0;
                break
              }
              for (var Ob = 0; Ob < bb._howls.length; Ob++)
                if (!bb._howls[Ob]._webAudio)
                  for (var Gb = bb._howls[Ob]._getSoundIds(), Ub = 0; Ub < Gb.length; Ub++) {
                    var Lb = bb._howls[Ob]._soundById(Gb[Ub]);
                    Lb && Lb._node && !Lb._node._unlocked && (Lb._node._unlocked = !0, Lb._node.load())
                  }
              bb._autoResume();
              var Yb = bb.ctx.createBufferSource();
              Yb.buffer = bb._scratchBuffer, Yb.connect(bb.ctx.destination), "undefined" === typeof Yb.start ? Yb.noteOn(0) : Yb.start(0), "function" === typeof bb.ctx.resume && bb.ctx.resume(), Yb.onended = function() {
                Yb.disconnect(0), bb._audioUnlocked = !0, document.removeEventListener("touchstart", ub, !0), document.removeEventListener("touchend", ub, !0), document.removeEventListener("click", ub, !0), document.removeEventListener("keydown", ub, !0);
                for (var hb = 0; hb < bb._howls.length; hb++) bb._howls[hb]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", ub, !0), document.addEventListener("touchend", ub, !0), document.addEventListener("click", ub, !0), document.addEventListener("keydown", ub, !0), bb
          }
        },
        _obtainHtml5Audio: function() {
          var bb = this || Gb;
          if (bb._html5AudioPool.length) return bb._html5AudioPool.pop();
          var ub = (new Audio).play();
          return ub && "undefined" !== typeof Promise && (ub instanceof Promise || "function" === typeof ub.then) && ub.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(bb) {
          var ub = this || Gb;
          return bb._unlocked && ub._html5AudioPool.push(bb), ub
        },
        _autoSuspend: function() {
          var bb = this;
          if (bb.autoSuspend && bb.ctx && "undefined" !== typeof bb.ctx.suspend && Gb.usingWebAudio) {
            for (var ub = 0; ub < bb._howls.length; ub++)
              if (bb._howls[ub]._webAudio)
                for (var hb = 0; hb < bb._howls[ub]._sounds.length; hb++)
                  if (!bb._howls[ub]._sounds[hb].DW) return bb;
            return bb._suspendTimer && clearTimeout(bb._suspendTimer), bb._suspendTimer = setTimeout((function() {
              if (bb.autoSuspend) {
                bb._suspendTimer = null, bb.state = "suspending";
                var ub = function() {
                  bb.state = "suspended", bb._resumeAfterSuspend && (delete bb._resumeAfterSuspend, bb._autoResume())
                };
                bb.ctx.suspend().then(ub, ub)
              }
            }), 3e4), bb
          }
        },
        _autoResume: function() {
          var bb = this;
          if (bb.ctx && "undefined" !== typeof bb.ctx.resume && Gb.usingWebAudio) return "running" === bb.state && "interrupted" !== bb.ctx.state && bb._suspendTimer ? (clearTimeout(bb._suspendTimer), bb._suspendTimer = null) : "suspended" === bb.state || "running" === bb.state && "interrupted" === bb.ctx.state ? (bb.ctx.resume().then((function() {
            bb.state = "running";
            for (var ub = 0; ub < bb._howls.length; ub++) bb._howls[ub]._emit("resume")
          })), bb._suspendTimer && (clearTimeout(bb._suspendTimer), bb._suspendTimer = null)) : "suspending" === bb.state && (bb._resumeAfterSuspend = !0), bb
        }
      };
      var Gb = new Ob,
        Ub = function(bb) {
          bb.src && 0 !== bb.src.length ? this.init(bb) : console.error("An array of source files must be passed with any new Howl.")
        };
      Ub.prototype = {
        init: function(bb) {
          var ub = this;
          return Gb.ctx || Zb(), ub._autoplay = bb.autoplay || !1, ub._format = "string" !== typeof bb.format ? bb.format : [bb.format], ub._html5 = bb.html5 || !1, ub._muted = bb.mute || !1, ub._loop = bb.loop || !1, ub._pool = bb.pool || 5, ub._preload = "boolean" !== typeof bb.preload && "metadata" !== bb.preload || bb.preload, ub._rate = bb.rate || 1, ub._sprite = bb.sprite || {}, ub._src = "string" !== typeof bb.src ? bb.src : [bb.src], ub._volume = void 0 !== bb.volume ? bb.volume : 1, ub._xhr = {
            method: bb.xhr && bb.xhr.method ? bb.xhr.method : "GET",
            headers: bb.xhr && bb.xhr.headers ? bb.xhr.headers : null,
            withCredentials: !(!bb.xhr || !bb.xhr.withCredentials) && bb.xhr.withCredentials
          }, ub._duration = 0, ub._state = "unloaded", ub._sounds = [], ub._endTimers = {}, ub._queue = [], ub._playLock = !1, ub._onend = bb.onend ? [{
            JZ: bb.onend
          }] : [], ub._onfade = bb.onfade ? [{
            JZ: bb.onfade
          }] : [], ub._onload = bb.onload ? [{
            JZ: bb.onload
          }] : [], ub._onloaderror = bb.onloaderror ? [{
            JZ: bb.onloaderror
          }] : [], ub._onplayerror = bb.onplayerror ? [{
            JZ: bb.onplayerror
          }] : [], ub._onpause = bb.onpause ? [{
            JZ: bb.onpause
          }] : [], ub._onplay = bb.onplay ? [{
            JZ: bb.onplay
          }] : [], ub._onstop = bb.onstop ? [{
            JZ: bb.onstop
          }] : [], ub._onmute = bb.onmute ? [{
            JZ: bb.onmute
          }] : [], ub._onvolume = bb.onvolume ? [{
            JZ: bb.onvolume
          }] : [], ub._onrate = bb.onrate ? [{
            JZ: bb.onrate
          }] : [], ub._onseek = bb.onseek ? [{
            JZ: bb.onseek
          }] : [], ub._onunlock = bb.onunlock ? [{
            JZ: bb.onunlock
          }] : [], ub._onresume = [], ub._webAudio = Gb.usingWebAudio && !ub._html5, "undefined" !== typeof Gb.ctx && Gb.ctx && Gb.autoUnlock && Gb._unlockAudio(), Gb._howls.push(ub), ub._autoplay && ub._queue.push({
            event: "play",
            action: function() {
              ub.play()
            }
          }), ub._preload && "none" !== ub._preload && ub.load(), ub
        },
        load: function() {
          var bb = this,
            ub = null;
          if (Gb.noAudio) bb._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof bb._src && (bb._src = [bb._src]);
            for (var hb = 0; hb < bb._src.length; hb++) {
              var Bb, Ob;
              if (bb._format && bb._format[hb]) Bb = bb._format[hb];
              else {
                if ("string" !== typeof(Ob = bb._src[hb])) {
                  bb._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Bb = /^data:audio\/([^;,]+);/i.exec(Ob)) || (Bb = /\.([^.]+)$/.exec(Ob.split("?", 1)[0])), Bb && (Bb = Bb[1].toLowerCase())
              }
              if (Bb || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Bb && Gb.codecs(Bb)) {
                ub = bb._src[hb];
                break
              }
            }
            if (ub) return bb._src = ub, bb._state = "loading", "https:" === window.location.protocol && "http:" === ub.slice(0, 5) && (bb._html5 = !0, bb._webAudio = !1), new Lb(bb), bb._webAudio && Sb(bb), bb;
            bb._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(bb, ub) {
          var hb = this,
            Bb = null;
          if ("number" === typeof bb) Bb = bb, bb = null;
          else {
            if ("string" === typeof bb && "loaded" === hb._state && !hb._sprite[bb]) return null;
            if ("undefined" === typeof bb && (bb = "__default", !hb._playLock)) {
              for (var Ob = 0, Ub = 0; Ub < hb._sounds.length; Ub++) hb._sounds[Ub].DW && !hb._sounds[Ub]._ended && (Ob++, Bb = hb._sounds[Ub]._id);
              1 === Ob ? bb = null : Bb = null
            }
          }
          var Lb = Bb ? hb._soundById(Bb) : hb._inactiveSound();
          if (!Lb) return null;
          if (Bb && !bb && (bb = Lb._sprite || "__default"), "loaded" !== hb._state) {
            Lb._sprite = bb, Lb._ended = !1;
            var Yb = Lb._id;
            return hb._queue.push({
              event: "play",
              action: function() {
                hb.play(Yb)
              }
            }), Yb
          }
          if (Bb && !Lb.DW) return ub || hb._loadQueue("play"), Lb._id;
          hb._webAudio && Gb._autoResume();
          var Sb = Math.max(0, Lb._seek > 0 ? Lb._seek : hb._sprite[bb][0] / 1e3),
            ab = Math.max(0, (hb._sprite[bb][0] + hb._sprite[bb][1]) / 1e3 - Sb),
            Hb = 1e3 * ab / Math.abs(Lb._rate),
            wb = hb._sprite[bb][0] / 1e3,
            Zb = (hb._sprite[bb][0] + hb._sprite[bb][1]) / 1e3;
          Lb._sprite = bb, Lb._ended = !1;
          var Xb = function() {
            Lb.DW = !1, Lb._seek = Sb, Lb._start = wb, Lb._stop = Zb, Lb._loop = !(!Lb._loop && !hb._sprite[bb][2])
          };
          if (!(Sb >= Zb)) {
            var pb = Lb._node;
            if (hb._webAudio) {
              var ob = function() {
                hb._playLock = !1, Xb(), hb._refreshBuffer(Lb);
                var bb = Lb._muted || hb._muted ? 0 : Lb._volume;
                pb.gain.setValueAtTime(bb, Gb.ctx.currentTime), Lb._playStart = Gb.ctx.currentTime, "undefined" === typeof pb.bufferSource.start ? Lb._loop ? pb.bufferSource.noteGrainOn(0, Sb, 86400) : pb.bufferSource.noteGrainOn(0, Sb, ab) : Lb._loop ? pb.bufferSource.start(0, Sb, 86400) : pb.bufferSource.start(0, Sb, ab), Hb !== 1 / 0 && (hb._endTimers[Lb._id] = setTimeout(hb._ended.bind(hb, Lb), Hb)), ub || setTimeout((function() {
                  hb._emit("play", Lb._id), hb._loadQueue()
                }), 0)
              };
              "running" === Gb.state && "interrupted" !== Gb.ctx.state ? ob() : (hb._playLock = !0, hb.once("resume", ob), hb._clearTimer(Lb._id))
            } else {
              var Ab = function() {
                pb.currentTime = Sb, pb.muted = Lb._muted || hb._muted || Gb._muted || pb.muted, pb.volume = Lb._volume * Gb.volume(), pb.playbackRate = Lb._rate;
                try {
                  var Bb = pb.play();
                  if (Bb && "undefined" !== typeof Promise && (Bb instanceof Promise || "function" === typeof Bb.then) ? (hb._playLock = !0, Xb(), Bb.then((function() {
                      hb._playLock = !1, pb._unlocked = !0, ub ? hb._loadQueue() : hb._emit("play", Lb._id)
                    })).catch((function() {
                      hb._playLock = !1, hb._emit("playerror", Lb._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), Lb._ended = !0, Lb.DW = !0
                    }))) : ub || (hb._playLock = !1, Xb(), hb._emit("play", Lb._id)), pb.playbackRate = Lb._rate, pb.paused) return void hb._emit("playerror", Lb._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== bb || Lb._loop ? hb._endTimers[Lb._id] = setTimeout(hb._ended.bind(hb, Lb), Hb) : (hb._endTimers[Lb._id] = function() {
                    hb._ended(Lb), pb.removeEventListener("ended", hb._endTimers[Lb._id], !1)
                  }, pb.addEventListener("ended", hb._endTimers[Lb._id], !1))
                } catch (Ob) {
                  hb._emit("playerror", Lb._id, Ob)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === pb.src && (pb.src = hb._src, pb.load());
              var lb = window && window.ejecta || !pb.readyState && Gb._navigator.isCocoonJS;
              if (pb.readyState >= 3 || lb) Ab();
              else {
                hb._playLock = !0, hb._state = "loading";
                var Kb = function() {
                  hb._state = "loaded", Ab(), pb.removeEventListener(Gb._canPlayEvent, Kb, !1)
                };
                pb.addEventListener(Gb._canPlayEvent, Kb, !1), hb._clearTimer(Lb._id)
              }
            }
            return Lb._id
          }
          hb._ended(Lb)
        },
        pause: function(bb) {
          var ub = this;
          if ("loaded" !== ub._state || ub._playLock) return ub._queue.push({
            event: "pause",
            action: function() {
              ub.pause(bb)
            }
          }), ub;
          for (var hb = ub._getSoundIds(bb), Bb = 0; Bb < hb.length; Bb++) {
            ub._clearTimer(hb[Bb]);
            var Ob = ub._soundById(hb[Bb]);
            if (Ob && !Ob.DW && (Ob._seek = ub.seek(hb[Bb]), Ob._rateSeek = 0, Ob.DW = !0, ub._stopFade(hb[Bb]), Ob._node))
              if (ub._webAudio) {
                if (!Ob._node.bufferSource) continue;
                "undefined" === typeof Ob._node.bufferSource.stop ? Ob._node.bufferSource.noteOff(0) : Ob._node.bufferSource.stop(0), ub._cleanBuffer(Ob._node)
              } else isNaN(Ob._node.duration) && Ob._node.duration !== 1 / 0 || Ob._node.pause();
            arguments[1] || ub._emit("pause", Ob ? Ob._id : null)
          }
          return ub
        },
        stop: function(bb, ub) {
          var hb = this;
          if ("loaded" !== hb._state || hb._playLock) return hb._queue.push({
            event: "stop",
            action: function() {
              hb.stop(bb)
            }
          }), hb;
          for (var Bb = hb._getSoundIds(bb), Ob = 0; Ob < Bb.length; Ob++) {
            hb._clearTimer(Bb[Ob]);
            var Gb = hb._soundById(Bb[Ob]);
            Gb && (Gb._seek = Gb._start || 0, Gb._rateSeek = 0, Gb.DW = !0, Gb._ended = !0, hb._stopFade(Bb[Ob]), Gb._node && (hb._webAudio ? Gb._node.bufferSource && ("undefined" === typeof Gb._node.bufferSource.stop ? Gb._node.bufferSource.noteOff(0) : Gb._node.bufferSource.stop(0), hb._cleanBuffer(Gb._node)) : isNaN(Gb._node.duration) && Gb._node.duration !== 1 / 0 || (Gb._node.currentTime = Gb._start || 0, Gb._node.pause(), Gb._node.duration === 1 / 0 && hb._clearSound(Gb._node))), ub || hb._emit("stop", Gb._id))
          }
          return hb
        },
        mute: function(bb, ub) {
          var hb = this;
          if ("loaded" !== hb._state || hb._playLock) return hb._queue.push({
            event: "mute",
            action: function() {
              hb.mute(bb, ub)
            }
          }), hb;
          if ("undefined" === typeof ub) {
            if ("boolean" !== typeof bb) return hb._muted;
            hb._muted = bb
          }
          for (var Bb = hb._getSoundIds(ub), Ob = 0; Ob < Bb.length; Ob++) {
            var Ub = hb._soundById(Bb[Ob]);
            Ub && (Ub._muted = bb, Ub._interval && hb._stopFade(Ub._id), hb._webAudio && Ub._node ? Ub._node.gain.setValueAtTime(bb ? 0 : Ub._volume, Gb.ctx.currentTime) : Ub._node && (Ub._node.muted = !!Gb._muted || bb), hb._emit("mute", Ub._id))
          }
          return hb
        },
        volume: function() {
          var bb, ub, hb, Bb = this,
            Ob = arguments;
          if (0 === Ob.length) return Bb._volume;
          if (1 === Ob.length || 2 === Ob.length && "undefined" === typeof Ob[1] ? Bb._getSoundIds().indexOf(Ob[0]) >= 0 ? ub = parseInt(Ob[0], 10) : bb = parseFloat(Ob[0]) : Ob.length >= 2 && (bb = parseFloat(Ob[0]), ub = parseInt(Ob[1], 10)), !("undefined" !== typeof bb && bb >= 0 && bb <= 1)) return (hb = ub ? Bb._soundById(ub) : Bb._sounds[0]) ? hb._volume : 0;
          if ("loaded" !== Bb._state || Bb._playLock) return Bb._queue.push({
            event: "volume",
            action: function() {
              Bb.volume.apply(Bb, Ob)
            }
          }), Bb;
          "undefined" === typeof ub && (Bb._volume = bb), ub = Bb._getSoundIds(ub);
          for (var Ub = 0; Ub < ub.length; Ub++)(hb = Bb._soundById(ub[Ub])) && (hb._volume = bb, Ob[2] || Bb._stopFade(ub[Ub]), Bb._webAudio && hb._node && !hb._muted ? hb._node.gain.setValueAtTime(bb, Gb.ctx.currentTime) : hb._node && !hb._muted && (hb._node.volume = bb * Gb.volume()), Bb._emit("volume", hb._id));
          return Bb
        },
        fade: function(bb, ub, hb, Bb) {
          var Ob = this;
          if ("loaded" !== Ob._state || Ob._playLock) return Ob._queue.push({
            event: "fade",
            action: function() {
              Ob.fade(bb, ub, hb, Bb)
            }
          }), Ob;
          bb = Math.min(Math.max(0, parseFloat(bb)), 1), ub = Math.min(Math.max(0, parseFloat(ub)), 1), hb = parseFloat(hb), Ob.volume(bb, Bb);
          for (var Ub = Ob._getSoundIds(Bb), Lb = 0; Lb < Ub.length; Lb++) {
            var Yb = Ob._soundById(Ub[Lb]);
            if (Yb) {
              if (Bb || Ob._stopFade(Ub[Lb]), Ob._webAudio && !Yb._muted) {
                var Sb = Gb.ctx.currentTime,
                  ab = Sb + hb / 1e3;
                Yb._volume = bb, Yb._node.gain.setValueAtTime(bb, Sb), Yb._node.gain.linearRampToValueAtTime(ub, ab)
              }
              Ob._startFadeInterval(Yb, bb, ub, hb, Ub[Lb], "undefined" === typeof Bb)
            }
          }
          return Ob
        },
        _startFadeInterval: function(bb, ub, hb, Bb, Ob, Gb) {
          var Ub = this,
            Lb = ub,
            Yb = hb - ub,
            Sb = Math.abs(Yb / .01),
            ab = Math.max(4, Sb > 0 ? Bb / Sb : Bb),
            Hb = Date.now();
          bb._fadeTo = hb, bb._interval = setInterval((function() {
            var Ob = (Date.now() - Hb) / Bb;
            Hb = Date.now(), Lb += Yb * Ob, Lb = Math.round(100 * Lb) / 100, Lb = Yb < 0 ? Math.max(hb, Lb) : Math.min(hb, Lb), Ub._webAudio ? bb._volume = Lb : Ub.volume(Lb, bb._id, !0), Gb && (Ub._volume = Lb), (hb < ub && Lb <= hb || hb > ub && Lb >= hb) && (clearInterval(bb._interval), bb._interval = null, bb._fadeTo = null, Ub.volume(hb, bb._id), Ub._emit("fade", bb._id))
          }), ab)
        },
        _stopFade: function(bb) {
          var ub = this,
            hb = ub._soundById(bb);
          return hb && hb._interval && (ub._webAudio && hb._node.gain.cancelScheduledValues(Gb.ctx.currentTime), clearInterval(hb._interval), hb._interval = null, ub.volume(hb._fadeTo, bb), hb._fadeTo = null, ub._emit("fade", bb)), ub
        },
        loop: function() {
          var bb, ub, hb, Bb = this,
            Ob = arguments;
          if (0 === Ob.length) return Bb._loop;
          if (1 === Ob.length) {
            if ("boolean" !== typeof Ob[0]) return !!(hb = Bb._soundById(parseInt(Ob[0], 10))) && hb._loop;
            bb = Ob[0], Bb._loop = bb
          } else 2 === Ob.length && (bb = Ob[0], ub = parseInt(Ob[1], 10));
          for (var Gb = Bb._getSoundIds(ub), Ub = 0; Ub < Gb.length; Ub++)(hb = Bb._soundById(Gb[Ub])) && (hb._loop = bb, Bb._webAudio && hb._node && hb._node.bufferSource && (hb._node.bufferSource.loop = bb, bb && (hb._node.bufferSource.loopStart = hb._start || 0, hb._node.bufferSource.loopEnd = hb._stop, Bb.playing(Gb[Ub]) && (Bb.pause(Gb[Ub], !0), Bb.play(Gb[Ub], !0)))));
          return Bb
        },
        rate: function() {
          var bb, ub, hb, Bb = this,
            Ob = arguments;
          if (0 === Ob.length) ub = Bb._sounds[0]._id;
          else if (1 === Ob.length) {
            Bb._getSoundIds().indexOf(Ob[0]) >= 0 ? ub = parseInt(Ob[0], 10) : bb = parseFloat(Ob[0])
          } else 2 === Ob.length && (bb = parseFloat(Ob[0]), ub = parseInt(Ob[1], 10));
          if ("number" !== typeof bb) return (hb = Bb._soundById(ub)) ? hb._rate : Bb._rate;
          if ("loaded" !== Bb._state || Bb._playLock) return Bb._queue.push({
            event: "rate",
            action: function() {
              Bb.rate.apply(Bb, Ob)
            }
          }), Bb;
          "undefined" === typeof ub && (Bb._rate = bb), ub = Bb._getSoundIds(ub);
          for (var Ub = 0; Ub < ub.length; Ub++)
            if (hb = Bb._soundById(ub[Ub])) {
              Bb.playing(ub[Ub]) && (hb._rateSeek = Bb.seek(ub[Ub]), hb._playStart = Bb._webAudio ? Gb.ctx.currentTime : hb._playStart), hb._rate = bb, Bb._webAudio && hb._node && hb._node.bufferSource ? hb._node.bufferSource.playbackRate.setValueAtTime(bb, Gb.ctx.currentTime) : hb._node && (hb._node.playbackRate = bb);
              var Lb = Bb.seek(ub[Ub]),
                Yb = 1e3 * ((Bb._sprite[hb._sprite][0] + Bb._sprite[hb._sprite][1]) / 1e3 - Lb) / Math.abs(hb._rate);
              !Bb._endTimers[ub[Ub]] && hb.DW || (Bb._clearTimer(ub[Ub]), Bb._endTimers[ub[Ub]] = setTimeout(Bb._ended.bind(Bb, hb), Yb)), Bb._emit("rate", hb._id)
            } return Bb
        },
        seek: function() {
          var bb, ub, hb = this,
            Bb = arguments;
          if (0 === Bb.length) hb._sounds.length && (ub = hb._sounds[0]._id);
          else if (1 === Bb.length) {
            hb._getSoundIds().indexOf(Bb[0]) >= 0 ? ub = parseInt(Bb[0], 10) : hb._sounds.length && (ub = hb._sounds[0]._id, bb = parseFloat(Bb[0]))
          } else 2 === Bb.length && (bb = parseFloat(Bb[0]), ub = parseInt(Bb[1], 10));
          if ("undefined" === typeof ub) return 0;
          if ("number" === typeof bb && ("loaded" !== hb._state || hb._playLock)) return hb._queue.push({
            event: "seek",
            action: function() {
              hb.seek.apply(hb, Bb)
            }
          }), hb;
          var Ob = hb._soundById(ub);
          if (Ob) {
            if (!("number" === typeof bb && bb >= 0)) {
              if (hb._webAudio) {
                var Ub = hb.playing(ub) ? Gb.ctx.currentTime - Ob._playStart : 0,
                  Lb = Ob._rateSeek ? Ob._rateSeek - Ob._seek : 0;
                return Ob._seek + (Lb + Ub * Math.abs(Ob._rate))
              }
              return Ob._node.currentTime
            }
            var Yb = hb.playing(ub);
            Yb && hb.pause(ub, !0), Ob._seek = bb, Ob._ended = !1, hb._clearTimer(ub), hb._webAudio || !Ob._node || isNaN(Ob._node.duration) || (Ob._node.currentTime = bb);
            var Sb = function() {
              Yb && hb.play(ub, !0), hb._emit("seek", ub)
            };
            if (Yb && !hb._webAudio) {
              var ab = function() {
                hb._playLock ? setTimeout(ab, 0) : Sb()
              };
              setTimeout(ab, 0)
            } else Sb()
          }
          return hb
        },
        playing: function(bb) {
          var ub = this;
          if ("number" === typeof bb) {
            var hb = ub._soundById(bb);
            return !!hb && !hb.DW
          }
          for (var Bb = 0; Bb < ub._sounds.length; Bb++)
            if (!ub._sounds[Bb].DW) return !0;
          return !1
        },
        duration: function(bb) {
          var ub = this,
            hb = ub._duration,
            Bb = ub._soundById(bb);
          return Bb && (hb = ub._sprite[Bb._sprite][1] / 1e3), hb
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var bb = this, ub = bb._sounds, hb = 0; hb < ub.length; hb++) ub[hb].DW || bb.stop(ub[hb]._id), bb._webAudio || (bb._clearSound(ub[hb]._node), ub[hb]._node.removeEventListener("error", ub[hb]._errorFn, !1), ub[hb]._node.removeEventListener(Gb._canPlayEvent, ub[hb]._loadFn, !1), ub[hb]._node.removeEventListener("ended", ub[hb]._endFn, !1), Gb._releaseHtml5Audio(ub[hb]._node)), delete ub[hb]._node, bb._clearTimer(ub[hb]._id);
          var Bb = Gb._howls.indexOf(bb);
          Bb >= 0 && Gb._howls.splice(Bb, 1);
          var Ob = !0;
          for (hb = 0; hb < Gb._howls.length; hb++)
            if (Gb._howls[hb]._src === bb._src || bb._src.indexOf(Gb._howls[hb]._src) >= 0) {
              Ob = !1;
              break
            } return Yb && Ob && delete Yb[bb._src], Gb.noAudio = !1, bb._state = "unloaded", bb._sounds = [], bb = null, null
        },
        on: function(bb, ub, hb, Bb) {
          var Ob = this["_on" + bb];
          return "function" === typeof ub && Ob.push(Bb ? {
            id: hb,
            JZ: ub,
            once: Bb
          } : {
            id: hb,
            JZ: ub
          }), this
        },
        off: function(bb, ub, hb) {
          var Bb = this,
            Ob = Bb["_on" + bb],
            Gb = 0;
          if ("number" === typeof ub && (hb = ub, ub = null), ub || hb)
            for (Gb = 0; Gb < Ob.length; Gb++) {
              var Ub = hb === Ob[Gb].id;
              if (ub === Ob[Gb].JZ && Ub || !ub && Ub) {
                Ob.splice(Gb, 1);
                break
              }
            } else if (bb) Bb["_on" + bb] = [];
            else {
              var Lb = Object.keys(Bb);
              for (Gb = 0; Gb < Lb.length; Gb++) 0 === Lb[Gb].indexOf("_on") && Array.isArray(Bb[Lb[Gb]]) && (Bb[Lb[Gb]] = [])
            } return Bb
        },
        once: function(bb, ub, hb) {
          return this.on(bb, ub, hb, 1), this
        },
        _emit: function(bb, ub, hb) {
          for (var Bb = this, Ob = Bb["_on" + bb], Gb = Ob.length - 1; Gb >= 0; Gb--) Ob[Gb].id && Ob[Gb].id !== ub && "load" !== bb || (setTimeout(function(bb) {
            bb.call(this, ub, hb)
          }.bind(Bb, Ob[Gb].JZ), 0), Ob[Gb].once && Bb.off(bb, Ob[Gb].JZ, Ob[Gb].id));
          return Bb._loadQueue(bb), Bb
        },
        _loadQueue: function(bb) {
          var ub = this;
          if (ub._queue.length > 0) {
            var hb = ub._queue[0];
            hb.event === bb && (ub._queue.shift(), ub._loadQueue()), bb || hb.action()
          }
          return ub
        },
        _ended: function(bb) {
          var ub = this,
            hb = bb._sprite;
          if (!ub._webAudio && bb._node && !bb._node.paused && !bb._node.ended && bb._node.currentTime < bb._stop) return setTimeout(ub._ended.bind(ub, bb), 100), ub;
          var Bb = !(!bb._loop && !ub._sprite[hb][2]);
          if (ub._emit("end", bb._id), !ub._webAudio && Bb && ub.stop(bb._id, !0).play(bb._id), ub._webAudio && Bb) {
            ub._emit("play", bb._id), bb._seek = bb._start || 0, bb._rateSeek = 0, bb._playStart = Gb.ctx.currentTime;
            var Ob = 1e3 * (bb._stop - bb._start) / Math.abs(bb._rate);
            ub._endTimers[bb._id] = setTimeout(ub._ended.bind(ub, bb), Ob)
          }
          return ub._webAudio && !Bb && (bb.DW = !0, bb._ended = !0, bb._seek = bb._start || 0, bb._rateSeek = 0, ub._clearTimer(bb._id), ub._cleanBuffer(bb._node), Gb._autoSuspend()), ub._webAudio || Bb || ub.stop(bb._id, !0), ub
        },
        _clearTimer: function(bb) {
          var ub = this;
          if (ub._endTimers[bb]) {
            if ("function" !== typeof ub._endTimers[bb]) clearTimeout(ub._endTimers[bb]);
            else {
              var hb = ub._soundById(bb);
              hb && hb._node && hb._node.removeEventListener("ended", ub._endTimers[bb], !1)
            }
            delete ub._endTimers[bb]
          }
          return ub
        },
        _soundById: function(bb) {
          for (var ub = this, hb = 0; hb < ub._sounds.length; hb++)
            if (bb === ub._sounds[hb]._id) return ub._sounds[hb];
          return null
        },
        _inactiveSound: function() {
          var bb = this;
          bb._drain();
          for (var ub = 0; ub < bb._sounds.length; ub++)
            if (bb._sounds[ub]._ended) return bb._sounds[ub].reset();
          return new Lb(bb)
        },
        _drain: function() {
          var bb = this,
            ub = bb._pool,
            hb = 0,
            Bb = 0;
          if (!(bb._sounds.length < ub)) {
            for (Bb = 0; Bb < bb._sounds.length; Bb++) bb._sounds[Bb]._ended && hb++;
            for (Bb = bb._sounds.length - 1; Bb >= 0; Bb--) {
              if (hb <= ub) return;
              bb._sounds[Bb]._ended && (bb._webAudio && bb._sounds[Bb]._node && bb._sounds[Bb]._node.disconnect(0), bb._sounds.splice(Bb, 1), hb--)
            }
          }
        },
        _getSoundIds: function(bb) {
          if ("undefined" === typeof bb) {
            for (var ub = [], hb = 0; hb < this._sounds.length; hb++) ub.push(this._sounds[hb]._id);
            return ub
          }
          return [bb]
        },
        _refreshBuffer: function(bb) {
          return bb._node.bufferSource = Gb.ctx.createBufferSource(), bb._node.bufferSource.buffer = Yb[this._src], bb._panner ? bb._node.bufferSource.connect(bb._panner) : bb._node.bufferSource.connect(bb._node), bb._node.bufferSource.loop = bb._loop, bb._loop && (bb._node.bufferSource.loopStart = bb._start || 0, bb._node.bufferSource.loopEnd = bb._stop || 0), bb._node.bufferSource.playbackRate.setValueAtTime(bb._rate, Gb.ctx.currentTime), this
        },
        _cleanBuffer: function(bb) {
          var ub = Gb._navigator && Gb._navigator.vendor.indexOf("Apple") >= 0;
          if (Gb._scratchBuffer && bb.bufferSource && (bb.bufferSource.onended = null, bb.bufferSource.disconnect(0), ub)) try {
            bb.bufferSource.buffer = Gb._scratchBuffer
          } catch (hb) {}
          return bb.bufferSource = null, this
        },
        _clearSound: function(bb) {
          /MSIE |Trident\//.test(Gb._navigator && Gb._navigator.userAgent) || (bb.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var Lb = function(bb) {
        this._parent = bb, this.init()
      };
      Lb.prototype = {
        init: function() {
          var bb = this,
            ub = bb._parent;
          return bb._muted = ub._muted, bb._loop = ub._loop, bb._volume = ub._volume, bb._rate = ub._rate, bb._seek = 0, bb.DW = !0, bb._ended = !0, bb._sprite = "__default", bb._id = ++Gb._counter, ub._sounds.push(bb), bb.create(), bb
        },
        create: function() {
          var bb = this,
            ub = bb._parent,
            hb = Gb._muted || bb._muted || bb._parent._muted ? 0 : bb._volume;
          return ub._webAudio ? (bb._node = "undefined" === typeof Gb.ctx.createGain ? Gb.ctx.createGainNode() : Gb.ctx.createGain(), bb._node.gain.setValueAtTime(hb, Gb.ctx.currentTime), bb._node.paused = !0, bb._node.connect(Gb.masterGain)) : Gb.noAudio || (bb._node = Gb._obtainHtml5Audio(), bb._errorFn = bb._errorListener.bind(bb), bb._node.addEventListener("error", bb._errorFn, !1), bb._loadFn = bb._loadListener.bind(bb), bb._node.addEventListener(Gb._canPlayEvent, bb._loadFn, !1), bb._endFn = bb._endListener.bind(bb), bb._node.addEventListener("ended", bb._endFn, !1), bb._node.src = ub._src, bb._node.preload = !0 === ub._preload ? "auto" : ub._preload, bb._node.volume = hb * Gb.volume(), bb._node.load()), bb
        },
        reset: function() {
          var bb = this,
            ub = bb._parent;
          return bb._muted = ub._muted, bb._loop = ub._loop, bb._volume = ub._volume, bb._rate = ub._rate, bb._seek = 0, bb._rateSeek = 0, bb.DW = !0, bb._ended = !0, bb._sprite = "__default", bb._id = ++Gb._counter, bb
        },
        _errorListener: function() {
          var bb = this;
          bb._parent._emit("loaderror", bb._id, bb._node.error ? bb._node.error.code : 0), bb._node.removeEventListener("error", bb._errorFn, !1)
        },
        _loadListener: function() {
          var bb = this,
            ub = bb._parent;
          ub._duration = Math.ceil(10 * bb._node.duration) / 10, 0 === Object.keys(ub._sprite).length && (ub._sprite = {
            __default: [0, 1e3 * ub._duration]
          }), "loaded" !== ub._state && (ub._state = "loaded", ub._emit("load"), ub._loadQueue()), bb._node.removeEventListener(Gb._canPlayEvent, bb._loadFn, !1)
        },
        _endListener: function() {
          var bb = this,
            ub = bb._parent;
          ub._duration === 1 / 0 && (ub._duration = Math.ceil(10 * bb._node.duration) / 10, ub._sprite.__default[1] === 1 / 0 && (ub._sprite.__default[1] = 1e3 * ub._duration), ub._ended(bb)), bb._node.removeEventListener("ended", bb._endFn, !1)
        }
      };
      var Yb = {},
        Sb = function(bb) {
          var ub = bb._src;
          if (Yb[ub]) return bb._duration = Yb[ub].duration, void wb(bb);
          if (/^data:[^;]+;base64,/.test(ub)) {
            for (var hb = atob(ub.split(",")[1]), Bb = new Uint8Array(hb.length), Ob = 0; Ob < hb.length; ++Ob) Bb[Ob] = hb.charCodeAt(Ob);
            Hb(Bb.buffer, bb)
          } else {
            var Gb = new XMLHttpRequest;
            Gb.open(bb._xhr.method, ub, !0), Gb.withCredentials = bb._xhr.withCredentials, Gb.responseType = "arraybuffer", bb._xhr.headers && Object.keys(bb._xhr.headers).forEach((function(ub) {
              Gb.setRequestHeader(ub, bb._xhr.headers[ub])
            })), Gb.onload = function() {
              var ub = (Gb.status + "")[0];
              "0" === ub || "2" === ub || "3" === ub ? Hb(Gb.response, bb) : bb._emit("loaderror", null, "Failed loading audio file with status: " + Gb.status + ".")
            }, Gb.onerror = function() {
              bb._webAudio && (bb._html5 = !0, bb._webAudio = !1, bb._sounds = [], delete Yb[ub], bb.load())
            }, ab(Gb)
          }
        },
        ab = function(bb) {
          try {
            bb.send()
          } catch (ub) {
            bb.onerror()
          }
        },
        Hb = function(bb, ub) {
          var hb = function() {
              ub._emit("loaderror", null, "Decoding audio data failed.")
            },
            Bb = function(bb) {
              bb && ub._sounds.length > 0 ? (Yb[ub._src] = bb, wb(ub, bb)) : hb()
            };
          "undefined" !== typeof Promise && 1 === Gb.ctx.decodeAudioData.length ? Gb.ctx.decodeAudioData(bb).then(Bb).catch(hb) : Gb.ctx.decodeAudioData(bb, Bb, hb)
        },
        wb = function(bb, ub) {
          ub && !bb._duration && (bb._duration = ub.duration), 0 === Object.keys(bb._sprite).length && (bb._sprite = {
            __default: [0, 1e3 * bb._duration]
          }), "loaded" !== bb._state && (bb._state = "loaded", bb._emit("load"), bb._loadQueue())
        },
        Zb = function() {
          if (Gb.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Gb.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Gb.ctx = new webkitAudioContext : Gb.usingWebAudio = !1
            } catch (Ob) {
              Gb.usingWebAudio = !1
            }
            Gb.ctx || (Gb.usingWebAudio = !1);
            var bb = /iP(hone|od|ad)/.test(Gb._navigator && Gb._navigator.platform),
              ub = Gb._navigator && Gb._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              hb = ub ? parseInt(ub[1], 10) : null;
            if (bb && hb && hb < 9) {
              var Bb = /safari/.test(Gb._navigator && Gb._navigator.userAgent.toLowerCase());
              Gb._navigator && !Bb && (Gb.usingWebAudio = !1)
            }
            Gb.usingWebAudio && (Gb.masterGain = "undefined" === typeof Gb.ctx.createGain ? Gb.ctx.createGainNode() : Gb.ctx.createGain(), Gb.masterGain.gain.setValueAtTime(Gb._muted ? 0 : Gb._volume, Gb.ctx.currentTime), Gb.masterGain.connect(Gb.ctx.destination)), Gb._setup()
          }
        };
      void 0 === (Bb = function() {
        return {
          Howler: Gb,
          Howl: Ub
        }
      }.apply(ub, [])) || (bb.exports = Bb), ub.Howler = Gb, ub.Howl = Ub, "undefined" !== typeof hb.g ? (hb.g.HowlerGlobal = Ob, hb.g.Howler = Gb, hb.g.Howl = Ub, hb.g.Sound = Lb) : "undefined" !== typeof window && (window.HowlerGlobal = Ob, window.Howler = Gb, window.Howl = Ub, window.Sound = Lb)
    }(),
    function() {
      var bb;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(bb) {
        var ub = this;
        if (!ub.ctx || !ub.ctx.listener) return ub;
        for (var hb = ub._howls.length - 1; hb >= 0; hb--) ub._howls[hb].stereo(bb);
        return ub
      }, HowlerGlobal.prototype.pos = function(bb, ub, hb) {
        var Bb = this;
        return Bb.ctx && Bb.ctx.listener ? (ub = "number" !== typeof ub ? Bb._pos[1] : ub, hb = "number" !== typeof hb ? Bb._pos[2] : hb, "number" !== typeof bb ? Bb._pos : (Bb._pos = [bb, ub, hb], "undefined" !== typeof Bb.ctx.listener.positionX ? (Bb.ctx.listener.positionX.setTargetAtTime(Bb._pos[0], Howler.ctx.currentTime, .1), Bb.ctx.listener.positionY.setTargetAtTime(Bb._pos[1], Howler.ctx.currentTime, .1), Bb.ctx.listener.positionZ.setTargetAtTime(Bb._pos[2], Howler.ctx.currentTime, .1)) : Bb.ctx.listener.setPosition(Bb._pos[0], Bb._pos[1], Bb._pos[2]), Bb)) : Bb
      }, HowlerGlobal.prototype.orientation = function(bb, ub, hb, Bb, Ob, Gb) {
        var Ub = this;
        if (!Ub.ctx || !Ub.ctx.listener) return Ub;
        var Lb = Ub._orientation;
        return ub = "number" !== typeof ub ? Lb[1] : ub, hb = "number" !== typeof hb ? Lb[2] : hb, Bb = "number" !== typeof Bb ? Lb[3] : Bb, Ob = "number" !== typeof Ob ? Lb[4] : Ob, Gb = "number" !== typeof Gb ? Lb[5] : Gb, "number" !== typeof bb ? Lb : (Ub._orientation = [bb, ub, hb, Bb, Ob, Gb], "undefined" !== typeof Ub.ctx.listener.forwardX ? (Ub.ctx.listener.forwardX.setTargetAtTime(bb, Howler.ctx.currentTime, .1), Ub.ctx.listener.forwardY.setTargetAtTime(ub, Howler.ctx.currentTime, .1), Ub.ctx.listener.forwardZ.setTargetAtTime(hb, Howler.ctx.currentTime, .1), Ub.ctx.listener.upX.setTargetAtTime(Bb, Howler.ctx.currentTime, .1), Ub.ctx.listener.upY.setTargetAtTime(Ob, Howler.ctx.currentTime, .1), Ub.ctx.listener.upZ.setTargetAtTime(Gb, Howler.ctx.currentTime, .1)) : Ub.ctx.listener.setOrientation(bb, ub, hb, Bb, Ob, Gb), Ub)
      }, Howl.prototype.init = (bb = Howl.prototype.init, function(ub) {
        var hb = this;
        return hb._orientation = ub.orientation || [1, 0, 0], hb._stereo = ub.stereo || null, hb._pos = ub.pos || null, hb._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof ub.coneInnerAngle ? ub.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof ub.coneOuterAngle ? ub.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof ub.coneOuterGain ? ub.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof ub.distanceModel ? ub.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof ub.maxDistance ? ub.maxDistance : 1e4,
          panningModel: "undefined" !== typeof ub.panningModel ? ub.panningModel : "HRTF",
          refDistance: "undefined" !== typeof ub.refDistance ? ub.refDistance : 1,
          rolloffFactor: "undefined" !== typeof ub.rolloffFactor ? ub.rolloffFactor : 1
        }, hb._onstereo = ub.onstereo ? [{
          JZ: ub.onstereo
        }] : [], hb._onpos = ub.onpos ? [{
          JZ: ub.onpos
        }] : [], hb._onorientation = ub.onorientation ? [{
          JZ: ub.onorientation
        }] : [], bb.call(this, ub)
      }), Howl.prototype.stereo = function(bb, hb) {
        var Bb = this;
        if (!Bb._webAudio) return Bb;
        if ("loaded" !== Bb._state) return Bb._queue.push({
          event: "stereo",
          action: function() {
            Bb.stereo(bb, hb)
          }
        }), Bb;
        var Ob = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof hb) {
          if ("number" !== typeof bb) return Bb._stereo;
          Bb._stereo = bb, Bb._pos = [bb, 0, 0]
        }
        for (var Gb = Bb._getSoundIds(hb), Ub = 0; Ub < Gb.length; Ub++) {
          var Lb = Bb._soundById(Gb[Ub]);
          if (Lb) {
            if ("number" !== typeof bb) return Lb._stereo;
            Lb._stereo = bb, Lb._pos = [bb, 0, 0], Lb._node && (Lb._pannerAttr.panningModel = "equalpower", Lb._panner && Lb._panner.pan || ub(Lb, Ob), "spatial" === Ob ? "undefined" !== typeof Lb._panner.positionX ? (Lb._panner.positionX.setValueAtTime(bb, Howler.ctx.currentTime), Lb._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), Lb._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : Lb._panner.setPosition(bb, 0, 0) : Lb._panner.pan.setValueAtTime(bb, Howler.ctx.currentTime)), Bb._emit("stereo", Lb._id)
          }
        }
        return Bb
      }, Howl.prototype.pos = function(bb, hb, Bb, Ob) {
        var Gb = this;
        if (!Gb._webAudio) return Gb;
        if ("loaded" !== Gb._state) return Gb._queue.push({
          event: "pos",
          action: function() {
            Gb.pos(bb, hb, Bb, Ob)
          }
        }), Gb;
        if (hb = "number" !== typeof hb ? 0 : hb, Bb = "number" !== typeof Bb ? -.5 : Bb, "undefined" === typeof Ob) {
          if ("number" !== typeof bb) return Gb._pos;
          Gb._pos = [bb, hb, Bb]
        }
        for (var Ub = Gb._getSoundIds(Ob), Lb = 0; Lb < Ub.length; Lb++) {
          var Yb = Gb._soundById(Ub[Lb]);
          if (Yb) {
            if ("number" !== typeof bb) return Yb._pos;
            Yb._pos = [bb, hb, Bb], Yb._node && (Yb._panner && !Yb._panner.pan || ub(Yb, "spatial"), "undefined" !== typeof Yb._panner.positionX ? (Yb._panner.positionX.setValueAtTime(bb, Howler.ctx.currentTime), Yb._panner.positionY.setValueAtTime(hb, Howler.ctx.currentTime), Yb._panner.positionZ.setValueAtTime(Bb, Howler.ctx.currentTime)) : Yb._panner.setPosition(bb, hb, Bb)), Gb._emit("pos", Yb._id)
          }
        }
        return Gb
      }, Howl.prototype.orientation = function(bb, hb, Bb, Ob) {
        var Gb = this;
        if (!Gb._webAudio) return Gb;
        if ("loaded" !== Gb._state) return Gb._queue.push({
          event: "orientation",
          action: function() {
            Gb.orientation(bb, hb, Bb, Ob)
          }
        }), Gb;
        if (hb = "number" !== typeof hb ? Gb._orientation[1] : hb, Bb = "number" !== typeof Bb ? Gb._orientation[2] : Bb, "undefined" === typeof Ob) {
          if ("number" !== typeof bb) return Gb._orientation;
          Gb._orientation = [bb, hb, Bb]
        }
        for (var Ub = Gb._getSoundIds(Ob), Lb = 0; Lb < Ub.length; Lb++) {
          var Yb = Gb._soundById(Ub[Lb]);
          if (Yb) {
            if ("number" !== typeof bb) return Yb._orientation;
            Yb._orientation = [bb, hb, Bb], Yb._node && (Yb._panner || (Yb._pos || (Yb._pos = Gb._pos || [0, 0, -.5]), ub(Yb, "spatial")), "undefined" !== typeof Yb._panner.orientationX ? (Yb._panner.orientationX.setValueAtTime(bb, Howler.ctx.currentTime), Yb._panner.orientationY.setValueAtTime(hb, Howler.ctx.currentTime), Yb._panner.orientationZ.setValueAtTime(Bb, Howler.ctx.currentTime)) : Yb._panner.setOrientation(bb, hb, Bb)), Gb._emit("orientation", Yb._id)
          }
        }
        return Gb
      }, Howl.prototype.pannerAttr = function() {
        var bb, hb, Bb, Ob = this,
          Gb = arguments;
        if (!Ob._webAudio) return Ob;
        if (0 === Gb.length) return Ob._pannerAttr;
        if (1 === Gb.length) {
          if ("object" !== typeof Gb[0]) return (Bb = Ob._soundById(parseInt(Gb[0], 10))) ? Bb._pannerAttr : Ob._pannerAttr;
          bb = Gb[0], "undefined" === typeof hb && (bb.pannerAttr || (bb.pannerAttr = {
            coneInnerAngle: bb.coneInnerAngle,
            coneOuterAngle: bb.coneOuterAngle,
            coneOuterGain: bb.coneOuterGain,
            distanceModel: bb.distanceModel,
            maxDistance: bb.maxDistance,
            refDistance: bb.refDistance,
            rolloffFactor: bb.rolloffFactor,
            panningModel: bb.panningModel
          }), Ob._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof bb.pannerAttr.coneInnerAngle ? bb.pannerAttr.coneInnerAngle : Ob._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof bb.pannerAttr.coneOuterAngle ? bb.pannerAttr.coneOuterAngle : Ob._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof bb.pannerAttr.coneOuterGain ? bb.pannerAttr.coneOuterGain : Ob._coneOuterGain,
            distanceModel: "undefined" !== typeof bb.pannerAttr.distanceModel ? bb.pannerAttr.distanceModel : Ob._distanceModel,
            maxDistance: "undefined" !== typeof bb.pannerAttr.maxDistance ? bb.pannerAttr.maxDistance : Ob._maxDistance,
            refDistance: "undefined" !== typeof bb.pannerAttr.refDistance ? bb.pannerAttr.refDistance : Ob._refDistance,
            rolloffFactor: "undefined" !== typeof bb.pannerAttr.rolloffFactor ? bb.pannerAttr.rolloffFactor : Ob._rolloffFactor,
            panningModel: "undefined" !== typeof bb.pannerAttr.panningModel ? bb.pannerAttr.panningModel : Ob._panningModel
          })
        } else 2 === Gb.length && (bb = Gb[0], hb = parseInt(Gb[1], 10));
        for (var Ub = Ob._getSoundIds(hb), Lb = 0; Lb < Ub.length; Lb++)
          if (Bb = Ob._soundById(Ub[Lb])) {
            var Yb = Bb._pannerAttr;
            Yb = {
              coneInnerAngle: "undefined" !== typeof bb.coneInnerAngle ? bb.coneInnerAngle : Yb.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof bb.coneOuterAngle ? bb.coneOuterAngle : Yb.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof bb.coneOuterGain ? bb.coneOuterGain : Yb.coneOuterGain,
              distanceModel: "undefined" !== typeof bb.distanceModel ? bb.distanceModel : Yb.distanceModel,
              maxDistance: "undefined" !== typeof bb.maxDistance ? bb.maxDistance : Yb.maxDistance,
              refDistance: "undefined" !== typeof bb.refDistance ? bb.refDistance : Yb.refDistance,
              rolloffFactor: "undefined" !== typeof bb.rolloffFactor ? bb.rolloffFactor : Yb.rolloffFactor,
              panningModel: "undefined" !== typeof bb.panningModel ? bb.panningModel : Yb.panningModel
            };
            var Sb = Bb._panner;
            Sb ? (Sb.coneInnerAngle = Yb.coneInnerAngle, Sb.coneOuterAngle = Yb.coneOuterAngle, Sb.coneOuterGain = Yb.coneOuterGain, Sb.distanceModel = Yb.distanceModel, Sb.maxDistance = Yb.maxDistance, Sb.refDistance = Yb.refDistance, Sb.rolloffFactor = Yb.rolloffFactor, Sb.panningModel = Yb.panningModel) : (Bb._pos || (Bb._pos = Ob._pos || [0, 0, -.5]), ub(Bb, "spatial"))
          } return Ob
      }, Sound.prototype.init = function(bb) {
        return function() {
          var ub = this,
            hb = ub._parent;
          ub._orientation = hb._orientation, ub._stereo = hb._stereo, ub._pos = hb._pos, ub._pannerAttr = hb._pannerAttr, bb.call(this), ub._stereo ? hb.stereo(ub._stereo) : ub._pos && hb.pos(ub._pos[0], ub._pos[1], ub._pos[2], ub._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(bb) {
        return function() {
          var ub = this,
            hb = ub._parent;
          return ub._orientation = hb._orientation, ub._stereo = hb._stereo, ub._pos = hb._pos, ub._pannerAttr = hb._pannerAttr, ub._stereo ? hb.stereo(ub._stereo) : ub._pos ? hb.pos(ub._pos[0], ub._pos[1], ub._pos[2], ub._id) : ub._panner && (ub._panner.disconnect(0), ub._panner = void 0, hb._refreshBuffer(ub)), bb.call(this)
        }
      }(Sound.prototype.reset);
      var ub = function(bb, ub) {
        "spatial" === (ub = ub || "spatial") ? (bb._panner = Howler.ctx.createPanner(), bb._panner.coneInnerAngle = bb._pannerAttr.coneInnerAngle, bb._panner.coneOuterAngle = bb._pannerAttr.coneOuterAngle, bb._panner.coneOuterGain = bb._pannerAttr.coneOuterGain, bb._panner.distanceModel = bb._pannerAttr.distanceModel, bb._panner.maxDistance = bb._pannerAttr.maxDistance, bb._panner.refDistance = bb._pannerAttr.refDistance, bb._panner.rolloffFactor = bb._pannerAttr.rolloffFactor, bb._panner.panningModel = bb._pannerAttr.panningModel, "undefined" !== typeof bb._panner.positionX ? (bb._panner.positionX.setValueAtTime(bb._pos[0], Howler.ctx.currentTime), bb._panner.positionY.setValueAtTime(bb._pos[1], Howler.ctx.currentTime), bb._panner.positionZ.setValueAtTime(bb._pos[2], Howler.ctx.currentTime)) : bb._panner.setPosition(bb._pos[0], bb._pos[1], bb._pos[2]), "undefined" !== typeof bb._panner.orientationX ? (bb._panner.orientationX.setValueAtTime(bb._orientation[0], Howler.ctx.currentTime), bb._panner.orientationY.setValueAtTime(bb._orientation[1], Howler.ctx.currentTime), bb._panner.orientationZ.setValueAtTime(bb._orientation[2], Howler.ctx.currentTime)) : bb._panner.setOrientation(bb._orientation[0], bb._orientation[1], bb._orientation[2])) : (bb._panner = Howler.ctx.createStereoPanner(), bb._panner.pan.setValueAtTime(bb._stereo, Howler.ctx.currentTime)), bb._panner.connect(bb._node), bb.DW || bb._parent.pause(bb._id, !0).play(bb._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);