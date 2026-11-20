/*! For license information please see teusab.94.4424f644.chunk.js.LICENSE.txt */
export const id = 94;
export const ids = [94];
export const modules = {
  4551: (bb, ab, Ub) => {
    var Ab;
    ! function() {
      var Mb = function() {
        this.init()
      };
      Mb.prototype = {
        init: function() {
          var bb = this || Tb;
          return bb._counter = 1e3, bb._html5AudioPool = [], bb.html5PoolSize = 10, bb._codecs = {}, bb._howls = [], bb._muted = !1, bb._volume = 1, bb._canPlayEvent = "canplaythrough", bb._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, bb.masterGain = null, bb.noAudio = !1, bb.usingWebAudio = !0, bb.autoSuspend = !0, bb.ctx = null, bb.autoUnlock = !0, bb._setup(), bb
        },
        volume: function(bb) {
          var ab = this || Tb;
          if (bb = parseFloat(bb), ab.ctx || Xb(), "undefined" !== typeof bb && bb >= 0 && bb <= 1) {
            if (ab._volume = bb, ab._muted) return ab;
            ab.usingWebAudio && ab.masterGain.gain.setValueAtTime(bb, Tb.ctx.currentTime);
            for (var Ub = 0; Ub < ab._howls.length; Ub++)
              if (!ab._howls[Ub]._webAudio)
                for (var Ab = ab._howls[Ub]._getSoundIds(), Mb = 0; Mb < Ab.length; Mb++) {
                  var Eb = ab._howls[Ub]._soundById(Ab[Mb]);
                  Eb && Eb._node && (Eb._node.volume = Eb._volume * bb)
                }
            return ab
          }
          return ab._volume
        },
        mute: function(bb) {
          var ab = this || Tb;
          ab.ctx || Xb(), ab._muted = bb, ab.usingWebAudio && ab.masterGain.gain.setValueAtTime(bb ? 0 : ab._volume, Tb.ctx.currentTime);
          for (var Ub = 0; Ub < ab._howls.length; Ub++)
            if (!ab._howls[Ub]._webAudio)
              for (var Ab = ab._howls[Ub]._getSoundIds(), Mb = 0; Mb < Ab.length; Mb++) {
                var Eb = ab._howls[Ub]._soundById(Ab[Mb]);
                Eb && Eb._node && (Eb._node.muted = !!bb || Eb._muted)
              }
          return ab
        },
        stop: function() {
          for (var bb = this || Tb, ab = 0; ab < bb._howls.length; ab++) bb._howls[ab].stop();
          return bb
        },
        unload: function() {
          for (var bb = this || Tb, ab = bb._howls.length - 1; ab >= 0; ab--) bb._howls[ab].unload();
          return bb.usingWebAudio && bb.ctx && "undefined" !== typeof bb.ctx.close && (bb.ctx.close(), bb.ctx = null, Xb()), bb
        },
        codecs: function(bb) {
          return (this || Tb)._codecs[bb.replace(/^x-/, "")]
        },
        _setup: function() {
          var bb = this || Tb;
          if (bb.state = bb.ctx && bb.ctx.state || "suspended", bb._autoSuspend(), !bb.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (bb._canPlayEvent = "canplay")
            } catch (ab) {
              bb.noAudio = !0
            } else bb.noAudio = !0;
          try {
            (new Audio).muted && (bb.noAudio = !0)
          } catch (ab) {}
          return bb.noAudio || bb._setupCodecs(), bb
        },
        _setupCodecs: function() {
          var bb = this || Tb,
            ab = null;
          try {
            ab = "undefined" !== typeof Audio ? new Audio : null
          } catch (vb) {
            return bb
          }
          if (!ab || "function" !== typeof ab.canPlayType) return bb;
          var Ub = ab.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            Ab = bb._navigator ? bb._navigator.userAgent : "",
            Mb = Ab.match(/OPR\/([0-6].)/g),
            Eb = Mb && parseInt(Mb[0].split("/")[1], 10) < 33,
            Yb = -1 !== Ab.indexOf("Safari") && -1 === Ab.indexOf("Chrome"),
            Bb = Ab.match(/Version\/(.*?) /),
            eb = Yb && Bb && parseInt(Bb[1], 10) < 15;
          return bb._codecs = {
            mp3: !(Eb || !Ub && !ab.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!Ub,
            opus: !!ab.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!ab.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!ab.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(ab.canPlayType('audio/wav; codecs="1"') || ab.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!ab.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!ab.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(ab.canPlayType("audio/x-m4a;") || ab.canPlayType("audio/m4a;") || ab.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(ab.canPlayType("audio/x-m4b;") || ab.canPlayType("audio/m4b;") || ab.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(ab.canPlayType("audio/x-mp4;") || ab.canPlayType("audio/mp4;") || ab.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(eb || !ab.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(eb || !ab.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!ab.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(ab.canPlayType("audio/x-flac;") || ab.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, bb
        },
        _unlockAudio: function() {
          var bb = this || Tb;
          if (!bb._audioUnlocked && bb.ctx) {
            bb._audioUnlocked = !1, bb.autoUnlock = !1, bb._mobileUnloaded || 44100 === bb.ctx.sampleRate || (bb._mobileUnloaded = !0, bb.unload()), bb._scratchBuffer = bb.ctx.createBuffer(1, 1, 22050);
            var ab = function(Ub) {
              for (; bb._html5AudioPool.length < bb.html5PoolSize;) try {
                var Ab = new Audio;
                Ab._unlocked = !0, bb._releaseHtml5Audio(Ab)
              } catch (Ub) {
                bb.noAudio = !0;
                break
              }
              for (var Mb = 0; Mb < bb._howls.length; Mb++)
                if (!bb._howls[Mb]._webAudio)
                  for (var Tb = bb._howls[Mb]._getSoundIds(), Eb = 0; Eb < Tb.length; Eb++) {
                    var Yb = bb._howls[Mb]._soundById(Tb[Eb]);
                    Yb && Yb._node && !Yb._node._unlocked && (Yb._node._unlocked = !0, Yb._node.load())
                  }
              bb._autoResume();
              var Bb = bb.ctx.createBufferSource();
              Bb.buffer = bb._scratchBuffer, Bb.connect(bb.ctx.destination), "undefined" === typeof Bb.start ? Bb.noteOn(0) : Bb.start(0), "function" === typeof bb.ctx.resume && bb.ctx.resume(), Bb.onended = function() {
                Bb.disconnect(0), bb._audioUnlocked = !0, document.removeEventListener("touchstart", ab, !0), document.removeEventListener("touchend", ab, !0), document.removeEventListener("click", ab, !0), document.removeEventListener("keydown", ab, !0);
                for (var Ub = 0; Ub < bb._howls.length; Ub++) bb._howls[Ub]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", ab, !0), document.addEventListener("touchend", ab, !0), document.addEventListener("click", ab, !0), document.addEventListener("keydown", ab, !0), bb
          }
        },
        _obtainHtml5Audio: function() {
          var bb = this || Tb;
          if (bb._html5AudioPool.length) return bb._html5AudioPool.pop();
          var ab = (new Audio).play();
          return ab && "undefined" !== typeof Promise && (ab instanceof Promise || "function" === typeof ab.then) && ab.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(bb) {
          var ab = this || Tb;
          return bb._unlocked && ab._html5AudioPool.push(bb), ab
        },
        _autoSuspend: function() {
          var bb = this;
          if (bb.autoSuspend && bb.ctx && "undefined" !== typeof bb.ctx.suspend && Tb.usingWebAudio) {
            for (var ab = 0; ab < bb._howls.length; ab++)
              if (bb._howls[ab]._webAudio)
                for (var Ub = 0; Ub < bb._howls[ab]._sounds.length; Ub++)
                  if (!bb._howls[ab]._sounds[Ub].jD) return bb;
            return bb._suspendTimer && clearTimeout(bb._suspendTimer), bb._suspendTimer = setTimeout((function() {
              if (bb.autoSuspend) {
                bb._suspendTimer = null, bb.state = "suspending";
                var ab = function() {
                  bb.state = "suspended", bb._resumeAfterSuspend && (delete bb._resumeAfterSuspend, bb._autoResume())
                };
                bb.ctx.suspend().then(ab, ab)
              }
            }), 3e4), bb
          }
        },
        _autoResume: function() {
          var bb = this;
          if (bb.ctx && "undefined" !== typeof bb.ctx.resume && Tb.usingWebAudio) return "running" === bb.state && "interrupted" !== bb.ctx.state && bb._suspendTimer ? (clearTimeout(bb._suspendTimer), bb._suspendTimer = null) : "suspended" === bb.state || "running" === bb.state && "interrupted" === bb.ctx.state ? (bb.ctx.resume().then((function() {
            bb.state = "running";
            for (var ab = 0; ab < bb._howls.length; ab++) bb._howls[ab]._emit("resume")
          })), bb._suspendTimer && (clearTimeout(bb._suspendTimer), bb._suspendTimer = null)) : "suspending" === bb.state && (bb._resumeAfterSuspend = !0), bb
        }
      };
      var Tb = new Mb,
        Eb = function(bb) {
          bb.src && 0 !== bb.src.length ? this.init(bb) : console.error("An array of source files must be passed with any new Howl.")
        };
      Eb.prototype = {
        init: function(bb) {
          var ab = this;
          return Tb.ctx || Xb(), ab._autoplay = bb.autoplay || !1, ab._format = "string" !== typeof bb.format ? bb.format : [bb.format], ab._html5 = bb.html5 || !1, ab._muted = bb.mute || !1, ab._loop = bb.loop || !1, ab._pool = bb.pool || 5, ab._preload = "boolean" !== typeof bb.preload && "metadata" !== bb.preload || bb.preload, ab._rate = bb.rate || 1, ab._sprite = bb.sprite || {}, ab._src = "string" !== typeof bb.src ? bb.src : [bb.src], ab._volume = void 0 !== bb.volume ? bb.volume : 1, ab._xhr = {
            method: bb.xhr && bb.xhr.method ? bb.xhr.method : "GET",
            headers: bb.xhr && bb.xhr.headers ? bb.xhr.headers : null,
            withCredentials: !(!bb.xhr || !bb.xhr.withCredentials) && bb.xhr.withCredentials
          }, ab._duration = 0, ab._state = "unloaded", ab._sounds = [], ab._endTimers = {}, ab._queue = [], ab._playLock = !1, ab._onend = bb.onend ? [{
            uX: bb.onend
          }] : [], ab._onfade = bb.onfade ? [{
            uX: bb.onfade
          }] : [], ab._onload = bb.onload ? [{
            uX: bb.onload
          }] : [], ab._onloaderror = bb.onloaderror ? [{
            uX: bb.onloaderror
          }] : [], ab._onplayerror = bb.onplayerror ? [{
            uX: bb.onplayerror
          }] : [], ab._onpause = bb.onpause ? [{
            uX: bb.onpause
          }] : [], ab._onplay = bb.onplay ? [{
            uX: bb.onplay
          }] : [], ab._onstop = bb.onstop ? [{
            uX: bb.onstop
          }] : [], ab._onmute = bb.onmute ? [{
            uX: bb.onmute
          }] : [], ab._onvolume = bb.onvolume ? [{
            uX: bb.onvolume
          }] : [], ab._onrate = bb.onrate ? [{
            uX: bb.onrate
          }] : [], ab._onseek = bb.onseek ? [{
            uX: bb.onseek
          }] : [], ab._onunlock = bb.onunlock ? [{
            uX: bb.onunlock
          }] : [], ab._onresume = [], ab._webAudio = Tb.usingWebAudio && !ab._html5, "undefined" !== typeof Tb.ctx && Tb.ctx && Tb.autoUnlock && Tb._unlockAudio(), Tb._howls.push(ab), ab._autoplay && ab._queue.push({
            event: "play",
            action: function() {
              ab.play()
            }
          }), ab._preload && "none" !== ab._preload && ab.load(), ab
        },
        load: function() {
          var bb = this,
            ab = null;
          if (Tb.noAudio) bb._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof bb._src && (bb._src = [bb._src]);
            for (var Ub = 0; Ub < bb._src.length; Ub++) {
              var Ab, Mb;
              if (bb._format && bb._format[Ub]) Ab = bb._format[Ub];
              else {
                if ("string" !== typeof(Mb = bb._src[Ub])) {
                  bb._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(Ab = /^data:audio\/([^;,]+);/i.exec(Mb)) || (Ab = /\.([^.]+)$/.exec(Mb.split("?", 1)[0])), Ab && (Ab = Ab[1].toLowerCase())
              }
              if (Ab || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), Ab && Tb.codecs(Ab)) {
                ab = bb._src[Ub];
                break
              }
            }
            if (ab) return bb._src = ab, bb._state = "loading", "https:" === window.location.protocol && "http:" === ab.slice(0, 5) && (bb._html5 = !0, bb._webAudio = !1), new Yb(bb), bb._webAudio && eb(bb), bb;
            bb._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(bb, ab) {
          var Ub = this,
            Ab = null;
          if ("number" === typeof bb) Ab = bb, bb = null;
          else {
            if ("string" === typeof bb && "loaded" === Ub._state && !Ub._sprite[bb]) return null;
            if ("undefined" === typeof bb && (bb = "__default", !Ub._playLock)) {
              for (var Mb = 0, Eb = 0; Eb < Ub._sounds.length; Eb++) Ub._sounds[Eb].jD && !Ub._sounds[Eb]._ended && (Mb++, Ab = Ub._sounds[Eb]._id);
              1 === Mb ? bb = null : Ab = null
            }
          }
          var Yb = Ab ? Ub._soundById(Ab) : Ub._inactiveSound();
          if (!Yb) return null;
          if (Ab && !bb && (bb = Yb._sprite || "__default"), "loaded" !== Ub._state) {
            Yb._sprite = bb, Yb._ended = !1;
            var Bb = Yb._id;
            return Ub._queue.push({
              event: "play",
              action: function() {
                Ub.play(Bb)
              }
            }), Bb
          }
          if (Ab && !Yb.jD) return ab || Ub._loadQueue("play"), Yb._id;
          Ub._webAudio && Tb._autoResume();
          var eb = Math.max(0, Yb._seek > 0 ? Yb._seek : Ub._sprite[bb][0] / 1e3),
            vb = Math.max(0, (Ub._sprite[bb][0] + Ub._sprite[bb][1]) / 1e3 - eb),
            Lb = 1e3 * vb / Math.abs(Yb._rate),
            Pb = Ub._sprite[bb][0] / 1e3,
            Xb = (Ub._sprite[bb][0] + Ub._sprite[bb][1]) / 1e3;
          Yb._sprite = bb, Yb._ended = !1;
          var jb = function() {
            Yb.jD = !1, Yb._seek = eb, Yb._start = Pb, Yb._stop = Xb, Yb._loop = !(!Yb._loop && !Ub._sprite[bb][2])
          };
          if (!(eb >= Xb)) {
            var Rb = Yb._node;
            if (Ub._webAudio) {
              var kb = function() {
                Ub._playLock = !1, jb(), Ub._refreshBuffer(Yb);
                var bb = Yb._muted || Ub._muted ? 0 : Yb._volume;
                Rb.gain.setValueAtTime(bb, Tb.ctx.currentTime), Yb._playStart = Tb.ctx.currentTime, "undefined" === typeof Rb.bufferSource.start ? Yb._loop ? Rb.bufferSource.noteGrainOn(0, eb, 86400) : Rb.bufferSource.noteGrainOn(0, eb, vb) : Yb._loop ? Rb.bufferSource.start(0, eb, 86400) : Rb.bufferSource.start(0, eb, vb), Lb !== 1 / 0 && (Ub._endTimers[Yb._id] = setTimeout(Ub._ended.bind(Ub, Yb), Lb)), ab || setTimeout((function() {
                  Ub._emit("play", Yb._id), Ub._loadQueue()
                }), 0)
              };
              "running" === Tb.state && "interrupted" !== Tb.ctx.state ? kb() : (Ub._playLock = !0, Ub.once("resume", kb), Ub._clearTimer(Yb._id))
            } else {
              var yb = function() {
                Rb.currentTime = eb, Rb.muted = Yb._muted || Ub._muted || Tb._muted || Rb.muted, Rb.volume = Yb._volume * Tb.volume(), Rb.playbackRate = Yb._rate;
                try {
                  var Ab = Rb.play();
                  if (Ab && "undefined" !== typeof Promise && (Ab instanceof Promise || "function" === typeof Ab.then) ? (Ub._playLock = !0, jb(), Ab.then((function() {
                      Ub._playLock = !1, Rb._unlocked = !0, ab ? Ub._loadQueue() : Ub._emit("play", Yb._id)
                    })).catch((function() {
                      Ub._playLock = !1, Ub._emit("playerror", Yb._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), Yb._ended = !0, Yb.jD = !0
                    }))) : ab || (Ub._playLock = !1, jb(), Ub._emit("play", Yb._id)), Rb.playbackRate = Yb._rate, Rb.paused) return void Ub._emit("playerror", Yb._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== bb || Yb._loop ? Ub._endTimers[Yb._id] = setTimeout(Ub._ended.bind(Ub, Yb), Lb) : (Ub._endTimers[Yb._id] = function() {
                    Ub._ended(Yb), Rb.removeEventListener("ended", Ub._endTimers[Yb._id], !1)
                  }, Rb.addEventListener("ended", Ub._endTimers[Yb._id], !1))
                } catch (Mb) {
                  Ub._emit("playerror", Yb._id, Mb)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Rb.src && (Rb.src = Ub._src, Rb.load());
              var Zb = window && window.ejecta || !Rb.readyState && Tb._navigator.isCocoonJS;
              if (Rb.readyState >= 3 || Zb) yb();
              else {
                Ub._playLock = !0, Ub._state = "loading";
                var Db = function() {
                  Ub._state = "loaded", yb(), Rb.removeEventListener(Tb._canPlayEvent, Db, !1)
                };
                Rb.addEventListener(Tb._canPlayEvent, Db, !1), Ub._clearTimer(Yb._id)
              }
            }
            return Yb._id
          }
          Ub._ended(Yb)
        },
        pause: function(bb) {
          var ab = this;
          if ("loaded" !== ab._state || ab._playLock) return ab._queue.push({
            event: "pause",
            action: function() {
              ab.pause(bb)
            }
          }), ab;
          for (var Ub = ab._getSoundIds(bb), Ab = 0; Ab < Ub.length; Ab++) {
            ab._clearTimer(Ub[Ab]);
            var Mb = ab._soundById(Ub[Ab]);
            if (Mb && !Mb.jD && (Mb._seek = ab.seek(Ub[Ab]), Mb._rateSeek = 0, Mb.jD = !0, ab._stopFade(Ub[Ab]), Mb._node))
              if (ab._webAudio) {
                if (!Mb._node.bufferSource) continue;
                "undefined" === typeof Mb._node.bufferSource.stop ? Mb._node.bufferSource.noteOff(0) : Mb._node.bufferSource.stop(0), ab._cleanBuffer(Mb._node)
              } else isNaN(Mb._node.duration) && Mb._node.duration !== 1 / 0 || Mb._node.pause();
            arguments[1] || ab._emit("pause", Mb ? Mb._id : null)
          }
          return ab
        },
        stop: function(bb, ab) {
          var Ub = this;
          if ("loaded" !== Ub._state || Ub._playLock) return Ub._queue.push({
            event: "stop",
            action: function() {
              Ub.stop(bb)
            }
          }), Ub;
          for (var Ab = Ub._getSoundIds(bb), Mb = 0; Mb < Ab.length; Mb++) {
            Ub._clearTimer(Ab[Mb]);
            var Tb = Ub._soundById(Ab[Mb]);
            Tb && (Tb._seek = Tb._start || 0, Tb._rateSeek = 0, Tb.jD = !0, Tb._ended = !0, Ub._stopFade(Ab[Mb]), Tb._node && (Ub._webAudio ? Tb._node.bufferSource && ("undefined" === typeof Tb._node.bufferSource.stop ? Tb._node.bufferSource.noteOff(0) : Tb._node.bufferSource.stop(0), Ub._cleanBuffer(Tb._node)) : isNaN(Tb._node.duration) && Tb._node.duration !== 1 / 0 || (Tb._node.currentTime = Tb._start || 0, Tb._node.pause(), Tb._node.duration === 1 / 0 && Ub._clearSound(Tb._node))), ab || Ub._emit("stop", Tb._id))
          }
          return Ub
        },
        mute: function(bb, ab) {
          var Ub = this;
          if ("loaded" !== Ub._state || Ub._playLock) return Ub._queue.push({
            event: "mute",
            action: function() {
              Ub.mute(bb, ab)
            }
          }), Ub;
          if ("undefined" === typeof ab) {
            if ("boolean" !== typeof bb) return Ub._muted;
            Ub._muted = bb
          }
          for (var Ab = Ub._getSoundIds(ab), Mb = 0; Mb < Ab.length; Mb++) {
            var Eb = Ub._soundById(Ab[Mb]);
            Eb && (Eb._muted = bb, Eb._interval && Ub._stopFade(Eb._id), Ub._webAudio && Eb._node ? Eb._node.gain.setValueAtTime(bb ? 0 : Eb._volume, Tb.ctx.currentTime) : Eb._node && (Eb._node.muted = !!Tb._muted || bb), Ub._emit("mute", Eb._id))
          }
          return Ub
        },
        volume: function() {
          var bb, ab, Ub, Ab = this,
            Mb = arguments;
          if (0 === Mb.length) return Ab._volume;
          if (1 === Mb.length || 2 === Mb.length && "undefined" === typeof Mb[1] ? Ab._getSoundIds().indexOf(Mb[0]) >= 0 ? ab = parseInt(Mb[0], 10) : bb = parseFloat(Mb[0]) : Mb.length >= 2 && (bb = parseFloat(Mb[0]), ab = parseInt(Mb[1], 10)), !("undefined" !== typeof bb && bb >= 0 && bb <= 1)) return (Ub = ab ? Ab._soundById(ab) : Ab._sounds[0]) ? Ub._volume : 0;
          if ("loaded" !== Ab._state || Ab._playLock) return Ab._queue.push({
            event: "volume",
            action: function() {
              Ab.volume.apply(Ab, Mb)
            }
          }), Ab;
          "undefined" === typeof ab && (Ab._volume = bb), ab = Ab._getSoundIds(ab);
          for (var Eb = 0; Eb < ab.length; Eb++)(Ub = Ab._soundById(ab[Eb])) && (Ub._volume = bb, Mb[2] || Ab._stopFade(ab[Eb]), Ab._webAudio && Ub._node && !Ub._muted ? Ub._node.gain.setValueAtTime(bb, Tb.ctx.currentTime) : Ub._node && !Ub._muted && (Ub._node.volume = bb * Tb.volume()), Ab._emit("volume", Ub._id));
          return Ab
        },
        fade: function(bb, ab, Ub, Ab) {
          var Mb = this;
          if ("loaded" !== Mb._state || Mb._playLock) return Mb._queue.push({
            event: "fade",
            action: function() {
              Mb.fade(bb, ab, Ub, Ab)
            }
          }), Mb;
          bb = Math.min(Math.max(0, parseFloat(bb)), 1), ab = Math.min(Math.max(0, parseFloat(ab)), 1), Ub = parseFloat(Ub), Mb.volume(bb, Ab);
          for (var Eb = Mb._getSoundIds(Ab), Yb = 0; Yb < Eb.length; Yb++) {
            var Bb = Mb._soundById(Eb[Yb]);
            if (Bb) {
              if (Ab || Mb._stopFade(Eb[Yb]), Mb._webAudio && !Bb._muted) {
                var eb = Tb.ctx.currentTime,
                  vb = eb + Ub / 1e3;
                Bb._volume = bb, Bb._node.gain.setValueAtTime(bb, eb), Bb._node.gain.linearRampToValueAtTime(ab, vb)
              }
              Mb._startFadeInterval(Bb, bb, ab, Ub, Eb[Yb], "undefined" === typeof Ab)
            }
          }
          return Mb
        },
        _startFadeInterval: function(bb, ab, Ub, Ab, Mb, Tb) {
          var Eb = this,
            Yb = ab,
            Bb = Ub - ab,
            eb = Math.abs(Bb / .01),
            vb = Math.max(4, eb > 0 ? Ab / eb : Ab),
            Lb = Date.now();
          bb._fadeTo = Ub, bb._interval = setInterval((function() {
            var Mb = (Date.now() - Lb) / Ab;
            Lb = Date.now(), Yb += Bb * Mb, Yb = Math.round(100 * Yb) / 100, Yb = Bb < 0 ? Math.max(Ub, Yb) : Math.min(Ub, Yb), Eb._webAudio ? bb._volume = Yb : Eb.volume(Yb, bb._id, !0), Tb && (Eb._volume = Yb), (Ub < ab && Yb <= Ub || Ub > ab && Yb >= Ub) && (clearInterval(bb._interval), bb._interval = null, bb._fadeTo = null, Eb.volume(Ub, bb._id), Eb._emit("fade", bb._id))
          }), vb)
        },
        _stopFade: function(bb) {
          var ab = this,
            Ub = ab._soundById(bb);
          return Ub && Ub._interval && (ab._webAudio && Ub._node.gain.cancelScheduledValues(Tb.ctx.currentTime), clearInterval(Ub._interval), Ub._interval = null, ab.volume(Ub._fadeTo, bb), Ub._fadeTo = null, ab._emit("fade", bb)), ab
        },
        loop: function() {
          var bb, ab, Ub, Ab = this,
            Mb = arguments;
          if (0 === Mb.length) return Ab._loop;
          if (1 === Mb.length) {
            if ("boolean" !== typeof Mb[0]) return !!(Ub = Ab._soundById(parseInt(Mb[0], 10))) && Ub._loop;
            bb = Mb[0], Ab._loop = bb
          } else 2 === Mb.length && (bb = Mb[0], ab = parseInt(Mb[1], 10));
          for (var Tb = Ab._getSoundIds(ab), Eb = 0; Eb < Tb.length; Eb++)(Ub = Ab._soundById(Tb[Eb])) && (Ub._loop = bb, Ab._webAudio && Ub._node && Ub._node.bufferSource && (Ub._node.bufferSource.loop = bb, bb && (Ub._node.bufferSource.loopStart = Ub._start || 0, Ub._node.bufferSource.loopEnd = Ub._stop, Ab.playing(Tb[Eb]) && (Ab.pause(Tb[Eb], !0), Ab.play(Tb[Eb], !0)))));
          return Ab
        },
        rate: function() {
          var bb, ab, Ub, Ab = this,
            Mb = arguments;
          if (0 === Mb.length) ab = Ab._sounds[0]._id;
          else if (1 === Mb.length) {
            Ab._getSoundIds().indexOf(Mb[0]) >= 0 ? ab = parseInt(Mb[0], 10) : bb = parseFloat(Mb[0])
          } else 2 === Mb.length && (bb = parseFloat(Mb[0]), ab = parseInt(Mb[1], 10));
          if ("number" !== typeof bb) return (Ub = Ab._soundById(ab)) ? Ub._rate : Ab._rate;
          if ("loaded" !== Ab._state || Ab._playLock) return Ab._queue.push({
            event: "rate",
            action: function() {
              Ab.rate.apply(Ab, Mb)
            }
          }), Ab;
          "undefined" === typeof ab && (Ab._rate = bb), ab = Ab._getSoundIds(ab);
          for (var Eb = 0; Eb < ab.length; Eb++)
            if (Ub = Ab._soundById(ab[Eb])) {
              Ab.playing(ab[Eb]) && (Ub._rateSeek = Ab.seek(ab[Eb]), Ub._playStart = Ab._webAudio ? Tb.ctx.currentTime : Ub._playStart), Ub._rate = bb, Ab._webAudio && Ub._node && Ub._node.bufferSource ? Ub._node.bufferSource.playbackRate.setValueAtTime(bb, Tb.ctx.currentTime) : Ub._node && (Ub._node.playbackRate = bb);
              var Yb = Ab.seek(ab[Eb]),
                Bb = 1e3 * ((Ab._sprite[Ub._sprite][0] + Ab._sprite[Ub._sprite][1]) / 1e3 - Yb) / Math.abs(Ub._rate);
              !Ab._endTimers[ab[Eb]] && Ub.jD || (Ab._clearTimer(ab[Eb]), Ab._endTimers[ab[Eb]] = setTimeout(Ab._ended.bind(Ab, Ub), Bb)), Ab._emit("rate", Ub._id)
            } return Ab
        },
        seek: function() {
          var bb, ab, Ub = this,
            Ab = arguments;
          if (0 === Ab.length) Ub._sounds.length && (ab = Ub._sounds[0]._id);
          else if (1 === Ab.length) {
            Ub._getSoundIds().indexOf(Ab[0]) >= 0 ? ab = parseInt(Ab[0], 10) : Ub._sounds.length && (ab = Ub._sounds[0]._id, bb = parseFloat(Ab[0]))
          } else 2 === Ab.length && (bb = parseFloat(Ab[0]), ab = parseInt(Ab[1], 10));
          if ("undefined" === typeof ab) return 0;
          if ("number" === typeof bb && ("loaded" !== Ub._state || Ub._playLock)) return Ub._queue.push({
            event: "seek",
            action: function() {
              Ub.seek.apply(Ub, Ab)
            }
          }), Ub;
          var Mb = Ub._soundById(ab);
          if (Mb) {
            if (!("number" === typeof bb && bb >= 0)) {
              if (Ub._webAudio) {
                var Eb = Ub.playing(ab) ? Tb.ctx.currentTime - Mb._playStart : 0,
                  Yb = Mb._rateSeek ? Mb._rateSeek - Mb._seek : 0;
                return Mb._seek + (Yb + Eb * Math.abs(Mb._rate))
              }
              return Mb._node.currentTime
            }
            var Bb = Ub.playing(ab);
            Bb && Ub.pause(ab, !0), Mb._seek = bb, Mb._ended = !1, Ub._clearTimer(ab), Ub._webAudio || !Mb._node || isNaN(Mb._node.duration) || (Mb._node.currentTime = bb);
            var eb = function() {
              Bb && Ub.play(ab, !0), Ub._emit("seek", ab)
            };
            if (Bb && !Ub._webAudio) {
              var vb = function() {
                Ub._playLock ? setTimeout(vb, 0) : eb()
              };
              setTimeout(vb, 0)
            } else eb()
          }
          return Ub
        },
        playing: function(bb) {
          var ab = this;
          if ("number" === typeof bb) {
            var Ub = ab._soundById(bb);
            return !!Ub && !Ub.jD
          }
          for (var Ab = 0; Ab < ab._sounds.length; Ab++)
            if (!ab._sounds[Ab].jD) return !0;
          return !1
        },
        duration: function(bb) {
          var ab = this,
            Ub = ab._duration,
            Ab = ab._soundById(bb);
          return Ab && (Ub = ab._sprite[Ab._sprite][1] / 1e3), Ub
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var bb = this, ab = bb._sounds, Ub = 0; Ub < ab.length; Ub++) ab[Ub].jD || bb.stop(ab[Ub]._id), bb._webAudio || (bb._clearSound(ab[Ub]._node), ab[Ub]._node.removeEventListener("error", ab[Ub]._errorFn, !1), ab[Ub]._node.removeEventListener(Tb._canPlayEvent, ab[Ub]._loadFn, !1), ab[Ub]._node.removeEventListener("ended", ab[Ub]._endFn, !1), Tb._releaseHtml5Audio(ab[Ub]._node)), delete ab[Ub]._node, bb._clearTimer(ab[Ub]._id);
          var Ab = Tb._howls.indexOf(bb);
          Ab >= 0 && Tb._howls.splice(Ab, 1);
          var Mb = !0;
          for (Ub = 0; Ub < Tb._howls.length; Ub++)
            if (Tb._howls[Ub]._src === bb._src || bb._src.indexOf(Tb._howls[Ub]._src) >= 0) {
              Mb = !1;
              break
            } return Bb && Mb && delete Bb[bb._src], Tb.noAudio = !1, bb._state = "unloaded", bb._sounds = [], bb = null, null
        },
        on: function(bb, ab, Ub, Ab) {
          var Mb = this["_on" + bb];
          return "function" === typeof ab && Mb.push(Ab ? {
            id: Ub,
            uX: ab,
            once: Ab
          } : {
            id: Ub,
            uX: ab
          }), this
        },
        off: function(bb, ab, Ub) {
          var Ab = this,
            Mb = Ab["_on" + bb],
            Tb = 0;
          if ("number" === typeof ab && (Ub = ab, ab = null), ab || Ub)
            for (Tb = 0; Tb < Mb.length; Tb++) {
              var Eb = Ub === Mb[Tb].id;
              if (ab === Mb[Tb].uX && Eb || !ab && Eb) {
                Mb.splice(Tb, 1);
                break
              }
            } else if (bb) Ab["_on" + bb] = [];
            else {
              var Yb = Object.keys(Ab);
              for (Tb = 0; Tb < Yb.length; Tb++) 0 === Yb[Tb].indexOf("_on") && Array.isArray(Ab[Yb[Tb]]) && (Ab[Yb[Tb]] = [])
            } return Ab
        },
        once: function(bb, ab, Ub) {
          return this.on(bb, ab, Ub, 1), this
        },
        _emit: function(bb, ab, Ub) {
          for (var Ab = this, Mb = Ab["_on" + bb], Tb = Mb.length - 1; Tb >= 0; Tb--) Mb[Tb].id && Mb[Tb].id !== ab && "load" !== bb || (setTimeout(function(bb) {
            bb.call(this, ab, Ub)
          }.bind(Ab, Mb[Tb].uX), 0), Mb[Tb].once && Ab.off(bb, Mb[Tb].uX, Mb[Tb].id));
          return Ab._loadQueue(bb), Ab
        },
        _loadQueue: function(bb) {
          var ab = this;
          if (ab._queue.length > 0) {
            var Ub = ab._queue[0];
            Ub.event === bb && (ab._queue.shift(), ab._loadQueue()), bb || Ub.action()
          }
          return ab
        },
        _ended: function(bb) {
          var ab = this,
            Ub = bb._sprite;
          if (!ab._webAudio && bb._node && !bb._node.paused && !bb._node.ended && bb._node.currentTime < bb._stop) return setTimeout(ab._ended.bind(ab, bb), 100), ab;
          var Ab = !(!bb._loop && !ab._sprite[Ub][2]);
          if (ab._emit("end", bb._id), !ab._webAudio && Ab && ab.stop(bb._id, !0).play(bb._id), ab._webAudio && Ab) {
            ab._emit("play", bb._id), bb._seek = bb._start || 0, bb._rateSeek = 0, bb._playStart = Tb.ctx.currentTime;
            var Mb = 1e3 * (bb._stop - bb._start) / Math.abs(bb._rate);
            ab._endTimers[bb._id] = setTimeout(ab._ended.bind(ab, bb), Mb)
          }
          return ab._webAudio && !Ab && (bb.jD = !0, bb._ended = !0, bb._seek = bb._start || 0, bb._rateSeek = 0, ab._clearTimer(bb._id), ab._cleanBuffer(bb._node), Tb._autoSuspend()), ab._webAudio || Ab || ab.stop(bb._id, !0), ab
        },
        _clearTimer: function(bb) {
          var ab = this;
          if (ab._endTimers[bb]) {
            if ("function" !== typeof ab._endTimers[bb]) clearTimeout(ab._endTimers[bb]);
            else {
              var Ub = ab._soundById(bb);
              Ub && Ub._node && Ub._node.removeEventListener("ended", ab._endTimers[bb], !1)
            }
            delete ab._endTimers[bb]
          }
          return ab
        },
        _soundById: function(bb) {
          for (var ab = this, Ub = 0; Ub < ab._sounds.length; Ub++)
            if (bb === ab._sounds[Ub]._id) return ab._sounds[Ub];
          return null
        },
        _inactiveSound: function() {
          var bb = this;
          bb._drain();
          for (var ab = 0; ab < bb._sounds.length; ab++)
            if (bb._sounds[ab]._ended) return bb._sounds[ab].reset();
          return new Yb(bb)
        },
        _drain: function() {
          var bb = this,
            ab = bb._pool,
            Ub = 0,
            Ab = 0;
          if (!(bb._sounds.length < ab)) {
            for (Ab = 0; Ab < bb._sounds.length; Ab++) bb._sounds[Ab]._ended && Ub++;
            for (Ab = bb._sounds.length - 1; Ab >= 0; Ab--) {
              if (Ub <= ab) return;
              bb._sounds[Ab]._ended && (bb._webAudio && bb._sounds[Ab]._node && bb._sounds[Ab]._node.disconnect(0), bb._sounds.splice(Ab, 1), Ub--)
            }
          }
        },
        _getSoundIds: function(bb) {
          if ("undefined" === typeof bb) {
            for (var ab = [], Ub = 0; Ub < this._sounds.length; Ub++) ab.push(this._sounds[Ub]._id);
            return ab
          }
          return [bb]
        },
        _refreshBuffer: function(bb) {
          return bb._node.bufferSource = Tb.ctx.createBufferSource(), bb._node.bufferSource.buffer = Bb[this._src], bb._panner ? bb._node.bufferSource.connect(bb._panner) : bb._node.bufferSource.connect(bb._node), bb._node.bufferSource.loop = bb._loop, bb._loop && (bb._node.bufferSource.loopStart = bb._start || 0, bb._node.bufferSource.loopEnd = bb._stop || 0), bb._node.bufferSource.playbackRate.setValueAtTime(bb._rate, Tb.ctx.currentTime), this
        },
        _cleanBuffer: function(bb) {
          var ab = Tb._navigator && Tb._navigator.vendor.indexOf("Apple") >= 0;
          if (Tb._scratchBuffer && bb.bufferSource && (bb.bufferSource.onended = null, bb.bufferSource.disconnect(0), ab)) try {
            bb.bufferSource.buffer = Tb._scratchBuffer
          } catch (Ub) {}
          return bb.bufferSource = null, this
        },
        _clearSound: function(bb) {
          /MSIE |Trident\//.test(Tb._navigator && Tb._navigator.userAgent) || (bb.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var Yb = function(bb) {
        this._parent = bb, this.init()
      };
      Yb.prototype = {
        init: function() {
          var bb = this,
            ab = bb._parent;
          return bb._muted = ab._muted, bb._loop = ab._loop, bb._volume = ab._volume, bb._rate = ab._rate, bb._seek = 0, bb.jD = !0, bb._ended = !0, bb._sprite = "__default", bb._id = ++Tb._counter, ab._sounds.push(bb), bb.create(), bb
        },
        create: function() {
          var bb = this,
            ab = bb._parent,
            Ub = Tb._muted || bb._muted || bb._parent._muted ? 0 : bb._volume;
          return ab._webAudio ? (bb._node = "undefined" === typeof Tb.ctx.createGain ? Tb.ctx.createGainNode() : Tb.ctx.createGain(), bb._node.gain.setValueAtTime(Ub, Tb.ctx.currentTime), bb._node.paused = !0, bb._node.connect(Tb.masterGain)) : Tb.noAudio || (bb._node = Tb._obtainHtml5Audio(), bb._errorFn = bb._errorListener.bind(bb), bb._node.addEventListener("error", bb._errorFn, !1), bb._loadFn = bb._loadListener.bind(bb), bb._node.addEventListener(Tb._canPlayEvent, bb._loadFn, !1), bb._endFn = bb._endListener.bind(bb), bb._node.addEventListener("ended", bb._endFn, !1), bb._node.src = ab._src, bb._node.preload = !0 === ab._preload ? "auto" : ab._preload, bb._node.volume = Ub * Tb.volume(), bb._node.load()), bb
        },
        reset: function() {
          var bb = this,
            ab = bb._parent;
          return bb._muted = ab._muted, bb._loop = ab._loop, bb._volume = ab._volume, bb._rate = ab._rate, bb._seek = 0, bb._rateSeek = 0, bb.jD = !0, bb._ended = !0, bb._sprite = "__default", bb._id = ++Tb._counter, bb
        },
        _errorListener: function() {
          var bb = this;
          bb._parent._emit("loaderror", bb._id, bb._node.error ? bb._node.error.code : 0), bb._node.removeEventListener("error", bb._errorFn, !1)
        },
        _loadListener: function() {
          var bb = this,
            ab = bb._parent;
          ab._duration = Math.ceil(10 * bb._node.duration) / 10, 0 === Object.keys(ab._sprite).length && (ab._sprite = {
            __default: [0, 1e3 * ab._duration]
          }), "loaded" !== ab._state && (ab._state = "loaded", ab._emit("load"), ab._loadQueue()), bb._node.removeEventListener(Tb._canPlayEvent, bb._loadFn, !1)
        },
        _endListener: function() {
          var bb = this,
            ab = bb._parent;
          ab._duration === 1 / 0 && (ab._duration = Math.ceil(10 * bb._node.duration) / 10, ab._sprite.__default[1] === 1 / 0 && (ab._sprite.__default[1] = 1e3 * ab._duration), ab._ended(bb)), bb._node.removeEventListener("ended", bb._endFn, !1)
        }
      };
      var Bb = {},
        eb = function(bb) {
          var ab = bb._src;
          if (Bb[ab]) return bb._duration = Bb[ab].duration, void Pb(bb);
          if (/^data:[^;]+;base64,/.test(ab)) {
            for (var Ub = atob(ab.split(",")[1]), Ab = new Uint8Array(Ub.length), Mb = 0; Mb < Ub.length; ++Mb) Ab[Mb] = Ub.charCodeAt(Mb);
            Lb(Ab.buffer, bb)
          } else {
            var Tb = new XMLHttpRequest;
            Tb.open(bb._xhr.method, ab, !0), Tb.withCredentials = bb._xhr.withCredentials, Tb.responseType = "arraybuffer", bb._xhr.headers && Object.keys(bb._xhr.headers).forEach((function(ab) {
              Tb.setRequestHeader(ab, bb._xhr.headers[ab])
            })), Tb.onload = function() {
              var ab = (Tb.status + "")[0];
              "0" === ab || "2" === ab || "3" === ab ? Lb(Tb.response, bb) : bb._emit("loaderror", null, "Failed loading audio file with status: " + Tb.status + ".")
            }, Tb.onerror = function() {
              bb._webAudio && (bb._html5 = !0, bb._webAudio = !1, bb._sounds = [], delete Bb[ab], bb.load())
            }, vb(Tb)
          }
        },
        vb = function(bb) {
          try {
            bb.send()
          } catch (ab) {
            bb.onerror()
          }
        },
        Lb = function(bb, ab) {
          var Ub = function() {
              ab._emit("loaderror", null, "Decoding audio data failed.")
            },
            Ab = function(bb) {
              bb && ab._sounds.length > 0 ? (Bb[ab._src] = bb, Pb(ab, bb)) : Ub()
            };
          "undefined" !== typeof Promise && 1 === Tb.ctx.decodeAudioData.length ? Tb.ctx.decodeAudioData(bb).then(Ab).catch(Ub) : Tb.ctx.decodeAudioData(bb, Ab, Ub)
        },
        Pb = function(bb, ab) {
          ab && !bb._duration && (bb._duration = ab.duration), 0 === Object.keys(bb._sprite).length && (bb._sprite = {
            __default: [0, 1e3 * bb._duration]
          }), "loaded" !== bb._state && (bb._state = "loaded", bb._emit("load"), bb._loadQueue())
        },
        Xb = function() {
          if (Tb.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Tb.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Tb.ctx = new webkitAudioContext : Tb.usingWebAudio = !1
            } catch (Mb) {
              Tb.usingWebAudio = !1
            }
            Tb.ctx || (Tb.usingWebAudio = !1);
            var bb = /iP(hone|od|ad)/.test(Tb._navigator && Tb._navigator.platform),
              ab = Tb._navigator && Tb._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              Ub = ab ? parseInt(ab[1], 10) : null;
            if (bb && Ub && Ub < 9) {
              var Ab = /safari/.test(Tb._navigator && Tb._navigator.userAgent.toLowerCase());
              Tb._navigator && !Ab && (Tb.usingWebAudio = !1)
            }
            Tb.usingWebAudio && (Tb.masterGain = "undefined" === typeof Tb.ctx.createGain ? Tb.ctx.createGainNode() : Tb.ctx.createGain(), Tb.masterGain.gain.setValueAtTime(Tb._muted ? 0 : Tb._volume, Tb.ctx.currentTime), Tb.masterGain.connect(Tb.ctx.destination)), Tb._setup()
          }
        };
      void 0 === (Ab = function() {
        return {
          Howler: Tb,
          Howl: Eb
        }
      }.apply(ab, [])) || (bb.exports = Ab), ab.Howler = Tb, ab.Howl = Eb, "undefined" !== typeof Ub.g ? (Ub.g.HowlerGlobal = Mb, Ub.g.Howler = Tb, Ub.g.Howl = Eb, Ub.g.Sound = Yb) : "undefined" !== typeof window && (window.HowlerGlobal = Mb, window.Howler = Tb, window.Howl = Eb, window.Sound = Yb)
    }(),
    function() {
      var bb;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(bb) {
        var ab = this;
        if (!ab.ctx || !ab.ctx.listener) return ab;
        for (var Ub = ab._howls.length - 1; Ub >= 0; Ub--) ab._howls[Ub].stereo(bb);
        return ab
      }, HowlerGlobal.prototype.pos = function(bb, ab, Ub) {
        var Ab = this;
        return Ab.ctx && Ab.ctx.listener ? (ab = "number" !== typeof ab ? Ab._pos[1] : ab, Ub = "number" !== typeof Ub ? Ab._pos[2] : Ub, "number" !== typeof bb ? Ab._pos : (Ab._pos = [bb, ab, Ub], "undefined" !== typeof Ab.ctx.listener.positionX ? (Ab.ctx.listener.positionX.setTargetAtTime(Ab._pos[0], Howler.ctx.currentTime, .1), Ab.ctx.listener.positionY.setTargetAtTime(Ab._pos[1], Howler.ctx.currentTime, .1), Ab.ctx.listener.positionZ.setTargetAtTime(Ab._pos[2], Howler.ctx.currentTime, .1)) : Ab.ctx.listener.setPosition(Ab._pos[0], Ab._pos[1], Ab._pos[2]), Ab)) : Ab
      }, HowlerGlobal.prototype.orientation = function(bb, ab, Ub, Ab, Mb, Tb) {
        var Eb = this;
        if (!Eb.ctx || !Eb.ctx.listener) return Eb;
        var Yb = Eb._orientation;
        return ab = "number" !== typeof ab ? Yb[1] : ab, Ub = "number" !== typeof Ub ? Yb[2] : Ub, Ab = "number" !== typeof Ab ? Yb[3] : Ab, Mb = "number" !== typeof Mb ? Yb[4] : Mb, Tb = "number" !== typeof Tb ? Yb[5] : Tb, "number" !== typeof bb ? Yb : (Eb._orientation = [bb, ab, Ub, Ab, Mb, Tb], "undefined" !== typeof Eb.ctx.listener.forwardX ? (Eb.ctx.listener.forwardX.setTargetAtTime(bb, Howler.ctx.currentTime, .1), Eb.ctx.listener.forwardY.setTargetAtTime(ab, Howler.ctx.currentTime, .1), Eb.ctx.listener.forwardZ.setTargetAtTime(Ub, Howler.ctx.currentTime, .1), Eb.ctx.listener.upX.setTargetAtTime(Ab, Howler.ctx.currentTime, .1), Eb.ctx.listener.upY.setTargetAtTime(Mb, Howler.ctx.currentTime, .1), Eb.ctx.listener.upZ.setTargetAtTime(Tb, Howler.ctx.currentTime, .1)) : Eb.ctx.listener.setOrientation(bb, ab, Ub, Ab, Mb, Tb), Eb)
      }, Howl.prototype.init = (bb = Howl.prototype.init, function(ab) {
        var Ub = this;
        return Ub._orientation = ab.orientation || [1, 0, 0], Ub._stereo = ab.stereo || null, Ub._pos = ab.pos || null, Ub._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof ab.coneInnerAngle ? ab.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof ab.coneOuterAngle ? ab.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof ab.coneOuterGain ? ab.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof ab.distanceModel ? ab.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof ab.maxDistance ? ab.maxDistance : 1e4,
          panningModel: "undefined" !== typeof ab.panningModel ? ab.panningModel : "HRTF",
          refDistance: "undefined" !== typeof ab.refDistance ? ab.refDistance : 1,
          rolloffFactor: "undefined" !== typeof ab.rolloffFactor ? ab.rolloffFactor : 1
        }, Ub._onstereo = ab.onstereo ? [{
          uX: ab.onstereo
        }] : [], Ub._onpos = ab.onpos ? [{
          uX: ab.onpos
        }] : [], Ub._onorientation = ab.onorientation ? [{
          uX: ab.onorientation
        }] : [], bb.call(this, ab)
      }), Howl.prototype.stereo = function(bb, Ub) {
        var Ab = this;
        if (!Ab._webAudio) return Ab;
        if ("loaded" !== Ab._state) return Ab._queue.push({
          event: "stereo",
          action: function() {
            Ab.stereo(bb, Ub)
          }
        }), Ab;
        var Mb = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof Ub) {
          if ("number" !== typeof bb) return Ab._stereo;
          Ab._stereo = bb, Ab._pos = [bb, 0, 0]
        }
        for (var Tb = Ab._getSoundIds(Ub), Eb = 0; Eb < Tb.length; Eb++) {
          var Yb = Ab._soundById(Tb[Eb]);
          if (Yb) {
            if ("number" !== typeof bb) return Yb._stereo;
            Yb._stereo = bb, Yb._pos = [bb, 0, 0], Yb._node && (Yb._pannerAttr.panningModel = "equalpower", Yb._panner && Yb._panner.pan || ab(Yb, Mb), "spatial" === Mb ? "undefined" !== typeof Yb._panner.positionX ? (Yb._panner.positionX.setValueAtTime(bb, Howler.ctx.currentTime), Yb._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), Yb._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : Yb._panner.setPosition(bb, 0, 0) : Yb._panner.pan.setValueAtTime(bb, Howler.ctx.currentTime)), Ab._emit("stereo", Yb._id)
          }
        }
        return Ab
      }, Howl.prototype.pos = function(bb, Ub, Ab, Mb) {
        var Tb = this;
        if (!Tb._webAudio) return Tb;
        if ("loaded" !== Tb._state) return Tb._queue.push({
          event: "pos",
          action: function() {
            Tb.pos(bb, Ub, Ab, Mb)
          }
        }), Tb;
        if (Ub = "number" !== typeof Ub ? 0 : Ub, Ab = "number" !== typeof Ab ? -.5 : Ab, "undefined" === typeof Mb) {
          if ("number" !== typeof bb) return Tb._pos;
          Tb._pos = [bb, Ub, Ab]
        }
        for (var Eb = Tb._getSoundIds(Mb), Yb = 0; Yb < Eb.length; Yb++) {
          var Bb = Tb._soundById(Eb[Yb]);
          if (Bb) {
            if ("number" !== typeof bb) return Bb._pos;
            Bb._pos = [bb, Ub, Ab], Bb._node && (Bb._panner && !Bb._panner.pan || ab(Bb, "spatial"), "undefined" !== typeof Bb._panner.positionX ? (Bb._panner.positionX.setValueAtTime(bb, Howler.ctx.currentTime), Bb._panner.positionY.setValueAtTime(Ub, Howler.ctx.currentTime), Bb._panner.positionZ.setValueAtTime(Ab, Howler.ctx.currentTime)) : Bb._panner.setPosition(bb, Ub, Ab)), Tb._emit("pos", Bb._id)
          }
        }
        return Tb
      }, Howl.prototype.orientation = function(bb, Ub, Ab, Mb) {
        var Tb = this;
        if (!Tb._webAudio) return Tb;
        if ("loaded" !== Tb._state) return Tb._queue.push({
          event: "orientation",
          action: function() {
            Tb.orientation(bb, Ub, Ab, Mb)
          }
        }), Tb;
        if (Ub = "number" !== typeof Ub ? Tb._orientation[1] : Ub, Ab = "number" !== typeof Ab ? Tb._orientation[2] : Ab, "undefined" === typeof Mb) {
          if ("number" !== typeof bb) return Tb._orientation;
          Tb._orientation = [bb, Ub, Ab]
        }
        for (var Eb = Tb._getSoundIds(Mb), Yb = 0; Yb < Eb.length; Yb++) {
          var Bb = Tb._soundById(Eb[Yb]);
          if (Bb) {
            if ("number" !== typeof bb) return Bb._orientation;
            Bb._orientation = [bb, Ub, Ab], Bb._node && (Bb._panner || (Bb._pos || (Bb._pos = Tb._pos || [0, 0, -.5]), ab(Bb, "spatial")), "undefined" !== typeof Bb._panner.orientationX ? (Bb._panner.orientationX.setValueAtTime(bb, Howler.ctx.currentTime), Bb._panner.orientationY.setValueAtTime(Ub, Howler.ctx.currentTime), Bb._panner.orientationZ.setValueAtTime(Ab, Howler.ctx.currentTime)) : Bb._panner.setOrientation(bb, Ub, Ab)), Tb._emit("orientation", Bb._id)
          }
        }
        return Tb
      }, Howl.prototype.pannerAttr = function() {
        var bb, Ub, Ab, Mb = this,
          Tb = arguments;
        if (!Mb._webAudio) return Mb;
        if (0 === Tb.length) return Mb._pannerAttr;
        if (1 === Tb.length) {
          if ("object" !== typeof Tb[0]) return (Ab = Mb._soundById(parseInt(Tb[0], 10))) ? Ab._pannerAttr : Mb._pannerAttr;
          bb = Tb[0], "undefined" === typeof Ub && (bb.pannerAttr || (bb.pannerAttr = {
            coneInnerAngle: bb.coneInnerAngle,
            coneOuterAngle: bb.coneOuterAngle,
            coneOuterGain: bb.coneOuterGain,
            distanceModel: bb.distanceModel,
            maxDistance: bb.maxDistance,
            refDistance: bb.refDistance,
            rolloffFactor: bb.rolloffFactor,
            panningModel: bb.panningModel
          }), Mb._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof bb.pannerAttr.coneInnerAngle ? bb.pannerAttr.coneInnerAngle : Mb._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof bb.pannerAttr.coneOuterAngle ? bb.pannerAttr.coneOuterAngle : Mb._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof bb.pannerAttr.coneOuterGain ? bb.pannerAttr.coneOuterGain : Mb._coneOuterGain,
            distanceModel: "undefined" !== typeof bb.pannerAttr.distanceModel ? bb.pannerAttr.distanceModel : Mb._distanceModel,
            maxDistance: "undefined" !== typeof bb.pannerAttr.maxDistance ? bb.pannerAttr.maxDistance : Mb._maxDistance,
            refDistance: "undefined" !== typeof bb.pannerAttr.refDistance ? bb.pannerAttr.refDistance : Mb._refDistance,
            rolloffFactor: "undefined" !== typeof bb.pannerAttr.rolloffFactor ? bb.pannerAttr.rolloffFactor : Mb._rolloffFactor,
            panningModel: "undefined" !== typeof bb.pannerAttr.panningModel ? bb.pannerAttr.panningModel : Mb._panningModel
          })
        } else 2 === Tb.length && (bb = Tb[0], Ub = parseInt(Tb[1], 10));
        for (var Eb = Mb._getSoundIds(Ub), Yb = 0; Yb < Eb.length; Yb++)
          if (Ab = Mb._soundById(Eb[Yb])) {
            var Bb = Ab._pannerAttr;
            Bb = {
              coneInnerAngle: "undefined" !== typeof bb.coneInnerAngle ? bb.coneInnerAngle : Bb.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof bb.coneOuterAngle ? bb.coneOuterAngle : Bb.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof bb.coneOuterGain ? bb.coneOuterGain : Bb.coneOuterGain,
              distanceModel: "undefined" !== typeof bb.distanceModel ? bb.distanceModel : Bb.distanceModel,
              maxDistance: "undefined" !== typeof bb.maxDistance ? bb.maxDistance : Bb.maxDistance,
              refDistance: "undefined" !== typeof bb.refDistance ? bb.refDistance : Bb.refDistance,
              rolloffFactor: "undefined" !== typeof bb.rolloffFactor ? bb.rolloffFactor : Bb.rolloffFactor,
              panningModel: "undefined" !== typeof bb.panningModel ? bb.panningModel : Bb.panningModel
            };
            var eb = Ab._panner;
            eb ? (eb.coneInnerAngle = Bb.coneInnerAngle, eb.coneOuterAngle = Bb.coneOuterAngle, eb.coneOuterGain = Bb.coneOuterGain, eb.distanceModel = Bb.distanceModel, eb.maxDistance = Bb.maxDistance, eb.refDistance = Bb.refDistance, eb.rolloffFactor = Bb.rolloffFactor, eb.panningModel = Bb.panningModel) : (Ab._pos || (Ab._pos = Mb._pos || [0, 0, -.5]), ab(Ab, "spatial"))
          } return Mb
      }, Sound.prototype.init = function(bb) {
        return function() {
          var ab = this,
            Ub = ab._parent;
          ab._orientation = Ub._orientation, ab._stereo = Ub._stereo, ab._pos = Ub._pos, ab._pannerAttr = Ub._pannerAttr, bb.call(this), ab._stereo ? Ub.stereo(ab._stereo) : ab._pos && Ub.pos(ab._pos[0], ab._pos[1], ab._pos[2], ab._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(bb) {
        return function() {
          var ab = this,
            Ub = ab._parent;
          return ab._orientation = Ub._orientation, ab._stereo = Ub._stereo, ab._pos = Ub._pos, ab._pannerAttr = Ub._pannerAttr, ab._stereo ? Ub.stereo(ab._stereo) : ab._pos ? Ub.pos(ab._pos[0], ab._pos[1], ab._pos[2], ab._id) : ab._panner && (ab._panner.disconnect(0), ab._panner = void 0, Ub._refreshBuffer(ab)), bb.call(this)
        }
      }(Sound.prototype.reset);
      var ab = function(bb, ab) {
        "spatial" === (ab = ab || "spatial") ? (bb._panner = Howler.ctx.createPanner(), bb._panner.coneInnerAngle = bb._pannerAttr.coneInnerAngle, bb._panner.coneOuterAngle = bb._pannerAttr.coneOuterAngle, bb._panner.coneOuterGain = bb._pannerAttr.coneOuterGain, bb._panner.distanceModel = bb._pannerAttr.distanceModel, bb._panner.maxDistance = bb._pannerAttr.maxDistance, bb._panner.refDistance = bb._pannerAttr.refDistance, bb._panner.rolloffFactor = bb._pannerAttr.rolloffFactor, bb._panner.panningModel = bb._pannerAttr.panningModel, "undefined" !== typeof bb._panner.positionX ? (bb._panner.positionX.setValueAtTime(bb._pos[0], Howler.ctx.currentTime), bb._panner.positionY.setValueAtTime(bb._pos[1], Howler.ctx.currentTime), bb._panner.positionZ.setValueAtTime(bb._pos[2], Howler.ctx.currentTime)) : bb._panner.setPosition(bb._pos[0], bb._pos[1], bb._pos[2]), "undefined" !== typeof bb._panner.orientationX ? (bb._panner.orientationX.setValueAtTime(bb._orientation[0], Howler.ctx.currentTime), bb._panner.orientationY.setValueAtTime(bb._orientation[1], Howler.ctx.currentTime), bb._panner.orientationZ.setValueAtTime(bb._orientation[2], Howler.ctx.currentTime)) : bb._panner.setOrientation(bb._orientation[0], bb._orientation[1], bb._orientation[2])) : (bb._panner = Howler.ctx.createStereoPanner(), bb._panner.pan.setValueAtTime(bb._stereo, Howler.ctx.currentTime)), bb._panner.connect(bb._node), bb.jD || bb._parent.pause(bb._id, !0).play(bb._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);