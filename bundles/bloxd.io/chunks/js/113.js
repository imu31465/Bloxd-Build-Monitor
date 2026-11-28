/*! For license information please see welxxc.113.d7d690d5.chunk.js.LICENSE.txt */
export const id = 113;
export const ids = [113];
export const modules = {
  5768: (bb, wb, Mb) => {
    var eb;
    ! function() {
      var Hb = function() {
        this.init()
      };
      Hb.prototype = {
        init: function() {
          var bb = this || pb;
          return bb._counter = 1e3, bb._html5AudioPool = [], bb.html5PoolSize = 10, bb._codecs = {}, bb._howls = [], bb._muted = !1, bb._volume = 1, bb._canPlayEvent = "canplaythrough", bb._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, bb.masterGain = null, bb.noAudio = !1, bb.usingWebAudio = !0, bb.autoSuspend = !0, bb.ctx = null, bb.autoUnlock = !0, bb._setup(), bb
        },
        volume: function(bb) {
          var wb = this || pb;
          if (bb = parseFloat(bb), wb.ctx || tb(), "undefined" !== typeof bb && bb >= 0 && bb <= 1) {
            if (wb._volume = bb, wb._muted) return wb;
            wb.usingWebAudio && wb.masterGain.gain.setValueAtTime(bb, pb.ctx.currentTime);
            for (var Mb = 0; Mb < wb._howls.length; Mb++)
              if (!wb._howls[Mb]._webAudio)
                for (var eb = wb._howls[Mb]._getSoundIds(), Hb = 0; Hb < eb.length; Hb++) {
                  var Vb = wb._howls[Mb]._soundById(eb[Hb]);
                  Vb && Vb._node && (Vb._node.volume = Vb._volume * bb)
                }
            return wb
          }
          return wb._volume
        },
        mute: function(bb) {
          var wb = this || pb;
          wb.ctx || tb(), wb._muted = bb, wb.usingWebAudio && wb.masterGain.gain.setValueAtTime(bb ? 0 : wb._volume, pb.ctx.currentTime);
          for (var Mb = 0; Mb < wb._howls.length; Mb++)
            if (!wb._howls[Mb]._webAudio)
              for (var eb = wb._howls[Mb]._getSoundIds(), Hb = 0; Hb < eb.length; Hb++) {
                var Vb = wb._howls[Mb]._soundById(eb[Hb]);
                Vb && Vb._node && (Vb._node.muted = !!bb || Vb._muted)
              }
          return wb
        },
        stop: function() {
          for (var bb = this || pb, wb = 0; wb < bb._howls.length; wb++) bb._howls[wb].stop();
          return bb
        },
        unload: function() {
          for (var bb = this || pb, wb = bb._howls.length - 1; wb >= 0; wb--) bb._howls[wb].unload();
          return bb.usingWebAudio && bb.ctx && "undefined" !== typeof bb.ctx.close && (bb.ctx.close(), bb.ctx = null, tb()), bb
        },
        codecs: function(bb) {
          return (this || pb)._codecs[bb.replace(/^x-/, "")]
        },
        _setup: function() {
          var bb = this || pb;
          if (bb.state = bb.ctx && bb.ctx.state || "suspended", bb._autoSuspend(), !bb.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (bb._canPlayEvent = "canplay")
            } catch (wb) {
              bb.noAudio = !0
            } else bb.noAudio = !0;
          try {
            (new Audio).muted && (bb.noAudio = !0)
          } catch (wb) {}
          return bb.noAudio || bb._setupCodecs(), bb
        },
        _setupCodecs: function() {
          var bb = this || pb,
            wb = null;
          try {
            wb = "undefined" !== typeof Audio ? new Audio : null
          } catch (Ib) {
            return bb
          }
          if (!wb || "function" !== typeof wb.canPlayType) return bb;
          var Mb = wb.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            eb = bb._navigator ? bb._navigator.userAgent : "",
            Hb = eb.match(/OPR\/([0-6].)/g),
            Vb = Hb && parseInt(Hb[0].split("/")[1], 10) < 33,
            gb = -1 !== eb.indexOf("Safari") && -1 === eb.indexOf("Chrome"),
            lb = eb.match(/Version\/(.*?) /),
            Lb = gb && lb && parseInt(lb[1], 10) < 15;
          return bb._codecs = {
            mp3: !(Vb || !Mb && !wb.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!Mb,
            opus: !!wb.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!wb.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!wb.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(wb.canPlayType('audio/wav; codecs="1"') || wb.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!wb.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!wb.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(wb.canPlayType("audio/x-m4a;") || wb.canPlayType("audio/m4a;") || wb.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(wb.canPlayType("audio/x-m4b;") || wb.canPlayType("audio/m4b;") || wb.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(wb.canPlayType("audio/x-mp4;") || wb.canPlayType("audio/mp4;") || wb.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Lb || !wb.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Lb || !wb.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!wb.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(wb.canPlayType("audio/x-flac;") || wb.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, bb
        },
        _unlockAudio: function() {
          var bb = this || pb;
          if (!bb._audioUnlocked && bb.ctx) {
            bb._audioUnlocked = !1, bb.autoUnlock = !1, bb._mobileUnloaded || 44100 === bb.ctx.sampleRate || (bb._mobileUnloaded = !0, bb.unload()), bb._scratchBuffer = bb.ctx.createBuffer(1, 1, 22050);
            var wb = function(Mb) {
              for (; bb._html5AudioPool.length < bb.html5PoolSize;) try {
                var eb = new Audio;
                eb._unlocked = !0, bb._releaseHtml5Audio(eb)
              } catch (Mb) {
                bb.noAudio = !0;
                break
              }
              for (var Hb = 0; Hb < bb._howls.length; Hb++)
                if (!bb._howls[Hb]._webAudio)
                  for (var pb = bb._howls[Hb]._getSoundIds(), Vb = 0; Vb < pb.length; Vb++) {
                    var gb = bb._howls[Hb]._soundById(pb[Vb]);
                    gb && gb._node && !gb._node._unlocked && (gb._node._unlocked = !0, gb._node.load())
                  }
              bb._autoResume();
              var lb = bb.ctx.createBufferSource();
              lb.buffer = bb._scratchBuffer, lb.connect(bb.ctx.destination), "undefined" === typeof lb.start ? lb.noteOn(0) : lb.start(0), "function" === typeof bb.ctx.resume && bb.ctx.resume(), lb.onended = function() {
                lb.disconnect(0), bb._audioUnlocked = !0, document.removeEventListener("touchstart", wb, !0), document.removeEventListener("touchend", wb, !0), document.removeEventListener("click", wb, !0), document.removeEventListener("keydown", wb, !0);
                for (var Mb = 0; Mb < bb._howls.length; Mb++) bb._howls[Mb]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", wb, !0), document.addEventListener("touchend", wb, !0), document.addEventListener("click", wb, !0), document.addEventListener("keydown", wb, !0), bb
          }
        },
        _obtainHtml5Audio: function() {
          var bb = this || pb;
          if (bb._html5AudioPool.length) return bb._html5AudioPool.pop();
          var wb = (new Audio).play();
          return wb && "undefined" !== typeof Promise && (wb instanceof Promise || "function" === typeof wb.then) && wb.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(bb) {
          var wb = this || pb;
          return bb._unlocked && wb._html5AudioPool.push(bb), wb
        },
        _autoSuspend: function() {
          var bb = this;
          if (bb.autoSuspend && bb.ctx && "undefined" !== typeof bb.ctx.suspend && pb.usingWebAudio) {
            for (var wb = 0; wb < bb._howls.length; wb++)
              if (bb._howls[wb]._webAudio)
                for (var Mb = 0; Mb < bb._howls[wb]._sounds.length; Mb++)
                  if (!bb._howls[wb]._sounds[Mb].BO) return bb;
            return bb._suspendTimer && clearTimeout(bb._suspendTimer), bb._suspendTimer = setTimeout((function() {
              if (bb.autoSuspend) {
                bb._suspendTimer = null, bb.state = "suspending";
                var wb = function() {
                  bb.state = "suspended", bb._resumeAfterSuspend && (delete bb._resumeAfterSuspend, bb._autoResume())
                };
                bb.ctx.suspend().then(wb, wb)
              }
            }), 3e4), bb
          }
        },
        _autoResume: function() {
          var bb = this;
          if (bb.ctx && "undefined" !== typeof bb.ctx.resume && pb.usingWebAudio) return "running" === bb.state && "interrupted" !== bb.ctx.state && bb._suspendTimer ? (clearTimeout(bb._suspendTimer), bb._suspendTimer = null) : "suspended" === bb.state || "running" === bb.state && "interrupted" === bb.ctx.state ? (bb.ctx.resume().then((function() {
            bb.state = "running";
            for (var wb = 0; wb < bb._howls.length; wb++) bb._howls[wb]._emit("resume")
          })), bb._suspendTimer && (clearTimeout(bb._suspendTimer), bb._suspendTimer = null)) : "suspending" === bb.state && (bb._resumeAfterSuspend = !0), bb
        }
      };
      var pb = new Hb,
        Vb = function(bb) {
          bb.src && 0 !== bb.src.length ? this.init(bb) : console.error("An array of source files must be passed with any new Howl.")
        };
      Vb.prototype = {
        init: function(bb) {
          var wb = this;
          return pb.ctx || tb(), wb._autoplay = bb.autoplay || !1, wb._format = "string" !== typeof bb.format ? bb.format : [bb.format], wb._html5 = bb.html5 || !1, wb._muted = bb.mute || !1, wb._loop = bb.loop || !1, wb._pool = bb.pool || 5, wb._preload = "boolean" !== typeof bb.preload && "metadata" !== bb.preload || bb.preload, wb._rate = bb.rate || 1, wb._sprite = bb.sprite || {}, wb._src = "string" !== typeof bb.src ? bb.src : [bb.src], wb._volume = void 0 !== bb.volume ? bb.volume : 1, wb._xhr = {
            method: bb.xhr && bb.xhr.method ? bb.xhr.method : "GET",
            headers: bb.xhr && bb.xhr.headers ? bb.xhr.headers : null,
            withCredentials: !(!bb.xhr || !bb.xhr.withCredentials) && bb.xhr.withCredentials
          }, wb._duration = 0, wb._state = "unloaded", wb._sounds = [], wb._endTimers = {}, wb._queue = [], wb._playLock = !1, wb._onend = bb.onend ? [{
            kI: bb.onend
          }] : [], wb._onfade = bb.onfade ? [{
            kI: bb.onfade
          }] : [], wb._onload = bb.onload ? [{
            kI: bb.onload
          }] : [], wb._onloaderror = bb.onloaderror ? [{
            kI: bb.onloaderror
          }] : [], wb._onplayerror = bb.onplayerror ? [{
            kI: bb.onplayerror
          }] : [], wb._onpause = bb.onpause ? [{
            kI: bb.onpause
          }] : [], wb._onplay = bb.onplay ? [{
            kI: bb.onplay
          }] : [], wb._onstop = bb.onstop ? [{
            kI: bb.onstop
          }] : [], wb._onmute = bb.onmute ? [{
            kI: bb.onmute
          }] : [], wb._onvolume = bb.onvolume ? [{
            kI: bb.onvolume
          }] : [], wb._onrate = bb.onrate ? [{
            kI: bb.onrate
          }] : [], wb._onseek = bb.onseek ? [{
            kI: bb.onseek
          }] : [], wb._onunlock = bb.onunlock ? [{
            kI: bb.onunlock
          }] : [], wb._onresume = [], wb._webAudio = pb.usingWebAudio && !wb._html5, "undefined" !== typeof pb.ctx && pb.ctx && pb.autoUnlock && pb._unlockAudio(), pb._howls.push(wb), wb._autoplay && wb._queue.push({
            event: "play",
            action: function() {
              wb.play()
            }
          }), wb._preload && "none" !== wb._preload && wb.load(), wb
        },
        load: function() {
          var bb = this,
            wb = null;
          if (pb.noAudio) bb._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof bb._src && (bb._src = [bb._src]);
            for (var Mb = 0; Mb < bb._src.length; Mb++) {
              var eb, Hb;
              if (bb._format && bb._format[Mb]) eb = bb._format[Mb];
              else {
                if ("string" !== typeof(Hb = bb._src[Mb])) {
                  bb._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(eb = /^data:audio\/([^;,]+);/i.exec(Hb)) || (eb = /\.([^.]+)$/.exec(Hb.split("?", 1)[0])), eb && (eb = eb[1].toLowerCase())
              }
              if (eb || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), eb && pb.codecs(eb)) {
                wb = bb._src[Mb];
                break
              }
            }
            if (wb) return bb._src = wb, bb._state = "loading", "https:" === window.location.protocol && "http:" === wb.slice(0, 5) && (bb._html5 = !0, bb._webAudio = !1), new gb(bb), bb._webAudio && Lb(bb), bb;
            bb._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(bb, wb) {
          var Mb = this,
            eb = null;
          if ("number" === typeof bb) eb = bb, bb = null;
          else {
            if ("string" === typeof bb && "loaded" === Mb._state && !Mb._sprite[bb]) return null;
            if ("undefined" === typeof bb && (bb = "__default", !Mb._playLock)) {
              for (var Hb = 0, Vb = 0; Vb < Mb._sounds.length; Vb++) Mb._sounds[Vb].BO && !Mb._sounds[Vb]._ended && (Hb++, eb = Mb._sounds[Vb]._id);
              1 === Hb ? bb = null : eb = null
            }
          }
          var gb = eb ? Mb._soundById(eb) : Mb._inactiveSound();
          if (!gb) return null;
          if (eb && !bb && (bb = gb._sprite || "__default"), "loaded" !== Mb._state) {
            gb._sprite = bb, gb._ended = !1;
            var lb = gb._id;
            return Mb._queue.push({
              event: "play",
              action: function() {
                Mb.play(lb)
              }
            }), lb
          }
          if (eb && !gb.BO) return wb || Mb._loadQueue("play"), gb._id;
          Mb._webAudio && pb._autoResume();
          var Lb = Math.max(0, gb._seek > 0 ? gb._seek : Mb._sprite[bb][0] / 1e3),
            Ib = Math.max(0, (Mb._sprite[bb][0] + Mb._sprite[bb][1]) / 1e3 - Lb),
            Ob = 1e3 * Ib / Math.abs(gb._rate),
            Ub = Mb._sprite[bb][0] / 1e3,
            tb = (Mb._sprite[bb][0] + Mb._sprite[bb][1]) / 1e3;
          gb._sprite = bb, gb._ended = !1;
          var Cb = function() {
            gb.BO = !1, gb._seek = Lb, gb._start = Ub, gb._stop = tb, gb._loop = !(!gb._loop && !Mb._sprite[bb][2])
          };
          if (!(Lb >= tb)) {
            var Eb = gb._node;
            if (Mb._webAudio) {
              var Fb = function() {
                Mb._playLock = !1, Cb(), Mb._refreshBuffer(gb);
                var bb = gb._muted || Mb._muted ? 0 : gb._volume;
                Eb.gain.setValueAtTime(bb, pb.ctx.currentTime), gb._playStart = pb.ctx.currentTime, "undefined" === typeof Eb.bufferSource.start ? gb._loop ? Eb.bufferSource.noteGrainOn(0, Lb, 86400) : Eb.bufferSource.noteGrainOn(0, Lb, Ib) : gb._loop ? Eb.bufferSource.start(0, Lb, 86400) : Eb.bufferSource.start(0, Lb, Ib), Ob !== 1 / 0 && (Mb._endTimers[gb._id] = setTimeout(Mb._ended.bind(Mb, gb), Ob)), wb || setTimeout((function() {
                  Mb._emit("play", gb._id), Mb._loadQueue()
                }), 0)
              };
              "running" === pb.state && "interrupted" !== pb.ctx.state ? Fb() : (Mb._playLock = !0, Mb.once("resume", Fb), Mb._clearTimer(gb._id))
            } else {
              var Bb = function() {
                Eb.currentTime = Lb, Eb.muted = gb._muted || Mb._muted || pb._muted || Eb.muted, Eb.volume = gb._volume * pb.volume(), Eb.playbackRate = gb._rate;
                try {
                  var eb = Eb.play();
                  if (eb && "undefined" !== typeof Promise && (eb instanceof Promise || "function" === typeof eb.then) ? (Mb._playLock = !0, Cb(), eb.then((function() {
                      Mb._playLock = !1, Eb._unlocked = !0, wb ? Mb._loadQueue() : Mb._emit("play", gb._id)
                    })).catch((function() {
                      Mb._playLock = !1, Mb._emit("playerror", gb._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), gb._ended = !0, gb.BO = !0
                    }))) : wb || (Mb._playLock = !1, Cb(), Mb._emit("play", gb._id)), Eb.playbackRate = gb._rate, Eb.paused) return void Mb._emit("playerror", gb._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== bb || gb._loop ? Mb._endTimers[gb._id] = setTimeout(Mb._ended.bind(Mb, gb), Ob) : (Mb._endTimers[gb._id] = function() {
                    Mb._ended(gb), Eb.removeEventListener("ended", Mb._endTimers[gb._id], !1)
                  }, Eb.addEventListener("ended", Mb._endTimers[gb._id], !1))
                } catch (Hb) {
                  Mb._emit("playerror", gb._id, Hb)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Eb.src && (Eb.src = Mb._src, Eb.load());
              var sb = window && window.ejecta || !Eb.readyState && pb._navigator.isCocoonJS;
              if (Eb.readyState >= 3 || sb) Bb();
              else {
                Mb._playLock = !0, Mb._state = "loading";
                var mb = function() {
                  Mb._state = "loaded", Bb(), Eb.removeEventListener(pb._canPlayEvent, mb, !1)
                };
                Eb.addEventListener(pb._canPlayEvent, mb, !1), Mb._clearTimer(gb._id)
              }
            }
            return gb._id
          }
          Mb._ended(gb)
        },
        pause: function(bb) {
          var wb = this;
          if ("loaded" !== wb._state || wb._playLock) return wb._queue.push({
            event: "pause",
            action: function() {
              wb.pause(bb)
            }
          }), wb;
          for (var Mb = wb._getSoundIds(bb), eb = 0; eb < Mb.length; eb++) {
            wb._clearTimer(Mb[eb]);
            var Hb = wb._soundById(Mb[eb]);
            if (Hb && !Hb.BO && (Hb._seek = wb.seek(Mb[eb]), Hb._rateSeek = 0, Hb.BO = !0, wb._stopFade(Mb[eb]), Hb._node))
              if (wb._webAudio) {
                if (!Hb._node.bufferSource) continue;
                "undefined" === typeof Hb._node.bufferSource.stop ? Hb._node.bufferSource.noteOff(0) : Hb._node.bufferSource.stop(0), wb._cleanBuffer(Hb._node)
              } else isNaN(Hb._node.duration) && Hb._node.duration !== 1 / 0 || Hb._node.pause();
            arguments[1] || wb._emit("pause", Hb ? Hb._id : null)
          }
          return wb
        },
        stop: function(bb, wb) {
          var Mb = this;
          if ("loaded" !== Mb._state || Mb._playLock) return Mb._queue.push({
            event: "stop",
            action: function() {
              Mb.stop(bb)
            }
          }), Mb;
          for (var eb = Mb._getSoundIds(bb), Hb = 0; Hb < eb.length; Hb++) {
            Mb._clearTimer(eb[Hb]);
            var pb = Mb._soundById(eb[Hb]);
            pb && (pb._seek = pb._start || 0, pb._rateSeek = 0, pb.BO = !0, pb._ended = !0, Mb._stopFade(eb[Hb]), pb._node && (Mb._webAudio ? pb._node.bufferSource && ("undefined" === typeof pb._node.bufferSource.stop ? pb._node.bufferSource.noteOff(0) : pb._node.bufferSource.stop(0), Mb._cleanBuffer(pb._node)) : isNaN(pb._node.duration) && pb._node.duration !== 1 / 0 || (pb._node.currentTime = pb._start || 0, pb._node.pause(), pb._node.duration === 1 / 0 && Mb._clearSound(pb._node))), wb || Mb._emit("stop", pb._id))
          }
          return Mb
        },
        mute: function(bb, wb) {
          var Mb = this;
          if ("loaded" !== Mb._state || Mb._playLock) return Mb._queue.push({
            event: "mute",
            action: function() {
              Mb.mute(bb, wb)
            }
          }), Mb;
          if ("undefined" === typeof wb) {
            if ("boolean" !== typeof bb) return Mb._muted;
            Mb._muted = bb
          }
          for (var eb = Mb._getSoundIds(wb), Hb = 0; Hb < eb.length; Hb++) {
            var Vb = Mb._soundById(eb[Hb]);
            Vb && (Vb._muted = bb, Vb._interval && Mb._stopFade(Vb._id), Mb._webAudio && Vb._node ? Vb._node.gain.setValueAtTime(bb ? 0 : Vb._volume, pb.ctx.currentTime) : Vb._node && (Vb._node.muted = !!pb._muted || bb), Mb._emit("mute", Vb._id))
          }
          return Mb
        },
        volume: function() {
          var bb, wb, Mb, eb = this,
            Hb = arguments;
          if (0 === Hb.length) return eb._volume;
          if (1 === Hb.length || 2 === Hb.length && "undefined" === typeof Hb[1] ? eb._getSoundIds().indexOf(Hb[0]) >= 0 ? wb = parseInt(Hb[0], 10) : bb = parseFloat(Hb[0]) : Hb.length >= 2 && (bb = parseFloat(Hb[0]), wb = parseInt(Hb[1], 10)), !("undefined" !== typeof bb && bb >= 0 && bb <= 1)) return (Mb = wb ? eb._soundById(wb) : eb._sounds[0]) ? Mb._volume : 0;
          if ("loaded" !== eb._state || eb._playLock) return eb._queue.push({
            event: "volume",
            action: function() {
              eb.volume.apply(eb, Hb)
            }
          }), eb;
          "undefined" === typeof wb && (eb._volume = bb), wb = eb._getSoundIds(wb);
          for (var Vb = 0; Vb < wb.length; Vb++)(Mb = eb._soundById(wb[Vb])) && (Mb._volume = bb, Hb[2] || eb._stopFade(wb[Vb]), eb._webAudio && Mb._node && !Mb._muted ? Mb._node.gain.setValueAtTime(bb, pb.ctx.currentTime) : Mb._node && !Mb._muted && (Mb._node.volume = bb * pb.volume()), eb._emit("volume", Mb._id));
          return eb
        },
        fade: function(bb, wb, Mb, eb) {
          var Hb = this;
          if ("loaded" !== Hb._state || Hb._playLock) return Hb._queue.push({
            event: "fade",
            action: function() {
              Hb.fade(bb, wb, Mb, eb)
            }
          }), Hb;
          bb = Math.min(Math.max(0, parseFloat(bb)), 1), wb = Math.min(Math.max(0, parseFloat(wb)), 1), Mb = parseFloat(Mb), Hb.volume(bb, eb);
          for (var Vb = Hb._getSoundIds(eb), gb = 0; gb < Vb.length; gb++) {
            var lb = Hb._soundById(Vb[gb]);
            if (lb) {
              if (eb || Hb._stopFade(Vb[gb]), Hb._webAudio && !lb._muted) {
                var Lb = pb.ctx.currentTime,
                  Ib = Lb + Mb / 1e3;
                lb._volume = bb, lb._node.gain.setValueAtTime(bb, Lb), lb._node.gain.linearRampToValueAtTime(wb, Ib)
              }
              Hb._startFadeInterval(lb, bb, wb, Mb, Vb[gb], "undefined" === typeof eb)
            }
          }
          return Hb
        },
        _startFadeInterval: function(bb, wb, Mb, eb, Hb, pb) {
          var Vb = this,
            gb = wb,
            lb = Mb - wb,
            Lb = Math.abs(lb / .01),
            Ib = Math.max(4, Lb > 0 ? eb / Lb : eb),
            Ob = Date.now();
          bb._fadeTo = Mb, bb._interval = setInterval((function() {
            var Hb = (Date.now() - Ob) / eb;
            Ob = Date.now(), gb += lb * Hb, gb = Math.round(100 * gb) / 100, gb = lb < 0 ? Math.max(Mb, gb) : Math.min(Mb, gb), Vb._webAudio ? bb._volume = gb : Vb.volume(gb, bb._id, !0), pb && (Vb._volume = gb), (Mb < wb && gb <= Mb || Mb > wb && gb >= Mb) && (clearInterval(bb._interval), bb._interval = null, bb._fadeTo = null, Vb.volume(Mb, bb._id), Vb._emit("fade", bb._id))
          }), Ib)
        },
        _stopFade: function(bb) {
          var wb = this,
            Mb = wb._soundById(bb);
          return Mb && Mb._interval && (wb._webAudio && Mb._node.gain.cancelScheduledValues(pb.ctx.currentTime), clearInterval(Mb._interval), Mb._interval = null, wb.volume(Mb._fadeTo, bb), Mb._fadeTo = null, wb._emit("fade", bb)), wb
        },
        loop: function() {
          var bb, wb, Mb, eb = this,
            Hb = arguments;
          if (0 === Hb.length) return eb._loop;
          if (1 === Hb.length) {
            if ("boolean" !== typeof Hb[0]) return !!(Mb = eb._soundById(parseInt(Hb[0], 10))) && Mb._loop;
            bb = Hb[0], eb._loop = bb
          } else 2 === Hb.length && (bb = Hb[0], wb = parseInt(Hb[1], 10));
          for (var pb = eb._getSoundIds(wb), Vb = 0; Vb < pb.length; Vb++)(Mb = eb._soundById(pb[Vb])) && (Mb._loop = bb, eb._webAudio && Mb._node && Mb._node.bufferSource && (Mb._node.bufferSource.loop = bb, bb && (Mb._node.bufferSource.loopStart = Mb._start || 0, Mb._node.bufferSource.loopEnd = Mb._stop, eb.playing(pb[Vb]) && (eb.pause(pb[Vb], !0), eb.play(pb[Vb], !0)))));
          return eb
        },
        rate: function() {
          var bb, wb, Mb, eb = this,
            Hb = arguments;
          if (0 === Hb.length) wb = eb._sounds[0]._id;
          else if (1 === Hb.length) {
            eb._getSoundIds().indexOf(Hb[0]) >= 0 ? wb = parseInt(Hb[0], 10) : bb = parseFloat(Hb[0])
          } else 2 === Hb.length && (bb = parseFloat(Hb[0]), wb = parseInt(Hb[1], 10));
          if ("number" !== typeof bb) return (Mb = eb._soundById(wb)) ? Mb._rate : eb._rate;
          if ("loaded" !== eb._state || eb._playLock) return eb._queue.push({
            event: "rate",
            action: function() {
              eb.rate.apply(eb, Hb)
            }
          }), eb;
          "undefined" === typeof wb && (eb._rate = bb), wb = eb._getSoundIds(wb);
          for (var Vb = 0; Vb < wb.length; Vb++)
            if (Mb = eb._soundById(wb[Vb])) {
              eb.playing(wb[Vb]) && (Mb._rateSeek = eb.seek(wb[Vb]), Mb._playStart = eb._webAudio ? pb.ctx.currentTime : Mb._playStart), Mb._rate = bb, eb._webAudio && Mb._node && Mb._node.bufferSource ? Mb._node.bufferSource.playbackRate.setValueAtTime(bb, pb.ctx.currentTime) : Mb._node && (Mb._node.playbackRate = bb);
              var gb = eb.seek(wb[Vb]),
                lb = 1e3 * ((eb._sprite[Mb._sprite][0] + eb._sprite[Mb._sprite][1]) / 1e3 - gb) / Math.abs(Mb._rate);
              !eb._endTimers[wb[Vb]] && Mb.BO || (eb._clearTimer(wb[Vb]), eb._endTimers[wb[Vb]] = setTimeout(eb._ended.bind(eb, Mb), lb)), eb._emit("rate", Mb._id)
            } return eb
        },
        seek: function() {
          var bb, wb, Mb = this,
            eb = arguments;
          if (0 === eb.length) Mb._sounds.length && (wb = Mb._sounds[0]._id);
          else if (1 === eb.length) {
            Mb._getSoundIds().indexOf(eb[0]) >= 0 ? wb = parseInt(eb[0], 10) : Mb._sounds.length && (wb = Mb._sounds[0]._id, bb = parseFloat(eb[0]))
          } else 2 === eb.length && (bb = parseFloat(eb[0]), wb = parseInt(eb[1], 10));
          if ("undefined" === typeof wb) return 0;
          if ("number" === typeof bb && ("loaded" !== Mb._state || Mb._playLock)) return Mb._queue.push({
            event: "seek",
            action: function() {
              Mb.seek.apply(Mb, eb)
            }
          }), Mb;
          var Hb = Mb._soundById(wb);
          if (Hb) {
            if (!("number" === typeof bb && bb >= 0)) {
              if (Mb._webAudio) {
                var Vb = Mb.playing(wb) ? pb.ctx.currentTime - Hb._playStart : 0,
                  gb = Hb._rateSeek ? Hb._rateSeek - Hb._seek : 0;
                return Hb._seek + (gb + Vb * Math.abs(Hb._rate))
              }
              return Hb._node.currentTime
            }
            var lb = Mb.playing(wb);
            lb && Mb.pause(wb, !0), Hb._seek = bb, Hb._ended = !1, Mb._clearTimer(wb), Mb._webAudio || !Hb._node || isNaN(Hb._node.duration) || (Hb._node.currentTime = bb);
            var Lb = function() {
              lb && Mb.play(wb, !0), Mb._emit("seek", wb)
            };
            if (lb && !Mb._webAudio) {
              var Ib = function() {
                Mb._playLock ? setTimeout(Ib, 0) : Lb()
              };
              setTimeout(Ib, 0)
            } else Lb()
          }
          return Mb
        },
        playing: function(bb) {
          var wb = this;
          if ("number" === typeof bb) {
            var Mb = wb._soundById(bb);
            return !!Mb && !Mb.BO
          }
          for (var eb = 0; eb < wb._sounds.length; eb++)
            if (!wb._sounds[eb].BO) return !0;
          return !1
        },
        duration: function(bb) {
          var wb = this,
            Mb = wb._duration,
            eb = wb._soundById(bb);
          return eb && (Mb = wb._sprite[eb._sprite][1] / 1e3), Mb
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var bb = this, wb = bb._sounds, Mb = 0; Mb < wb.length; Mb++) wb[Mb].BO || bb.stop(wb[Mb]._id), bb._webAudio || (bb._clearSound(wb[Mb]._node), wb[Mb]._node.removeEventListener("error", wb[Mb]._errorFn, !1), wb[Mb]._node.removeEventListener(pb._canPlayEvent, wb[Mb]._loadFn, !1), wb[Mb]._node.removeEventListener("ended", wb[Mb]._endFn, !1), pb._releaseHtml5Audio(wb[Mb]._node)), delete wb[Mb]._node, bb._clearTimer(wb[Mb]._id);
          var eb = pb._howls.indexOf(bb);
          eb >= 0 && pb._howls.splice(eb, 1);
          var Hb = !0;
          for (Mb = 0; Mb < pb._howls.length; Mb++)
            if (pb._howls[Mb]._src === bb._src || bb._src.indexOf(pb._howls[Mb]._src) >= 0) {
              Hb = !1;
              break
            } return lb && Hb && delete lb[bb._src], pb.noAudio = !1, bb._state = "unloaded", bb._sounds = [], bb = null, null
        },
        on: function(bb, wb, Mb, eb) {
          var Hb = this["_on" + bb];
          return "function" === typeof wb && Hb.push(eb ? {
            id: Mb,
            kI: wb,
            once: eb
          } : {
            id: Mb,
            kI: wb
          }), this
        },
        off: function(bb, wb, Mb) {
          var eb = this,
            Hb = eb["_on" + bb],
            pb = 0;
          if ("number" === typeof wb && (Mb = wb, wb = null), wb || Mb)
            for (pb = 0; pb < Hb.length; pb++) {
              var Vb = Mb === Hb[pb].id;
              if (wb === Hb[pb].kI && Vb || !wb && Vb) {
                Hb.splice(pb, 1);
                break
              }
            } else if (bb) eb["_on" + bb] = [];
            else {
              var gb = Object.keys(eb);
              for (pb = 0; pb < gb.length; pb++) 0 === gb[pb].indexOf("_on") && Array.isArray(eb[gb[pb]]) && (eb[gb[pb]] = [])
            } return eb
        },
        once: function(bb, wb, Mb) {
          return this.on(bb, wb, Mb, 1), this
        },
        _emit: function(bb, wb, Mb) {
          for (var eb = this, Hb = eb["_on" + bb], pb = Hb.length - 1; pb >= 0; pb--) Hb[pb].id && Hb[pb].id !== wb && "load" !== bb || (setTimeout(function(bb) {
            bb.call(this, wb, Mb)
          }.bind(eb, Hb[pb].kI), 0), Hb[pb].once && eb.off(bb, Hb[pb].kI, Hb[pb].id));
          return eb._loadQueue(bb), eb
        },
        _loadQueue: function(bb) {
          var wb = this;
          if (wb._queue.length > 0) {
            var Mb = wb._queue[0];
            Mb.event === bb && (wb._queue.shift(), wb._loadQueue()), bb || Mb.action()
          }
          return wb
        },
        _ended: function(bb) {
          var wb = this,
            Mb = bb._sprite;
          if (!wb._webAudio && bb._node && !bb._node.paused && !bb._node.ended && bb._node.currentTime < bb._stop) return setTimeout(wb._ended.bind(wb, bb), 100), wb;
          var eb = !(!bb._loop && !wb._sprite[Mb][2]);
          if (wb._emit("end", bb._id), !wb._webAudio && eb && wb.stop(bb._id, !0).play(bb._id), wb._webAudio && eb) {
            wb._emit("play", bb._id), bb._seek = bb._start || 0, bb._rateSeek = 0, bb._playStart = pb.ctx.currentTime;
            var Hb = 1e3 * (bb._stop - bb._start) / Math.abs(bb._rate);
            wb._endTimers[bb._id] = setTimeout(wb._ended.bind(wb, bb), Hb)
          }
          return wb._webAudio && !eb && (bb.BO = !0, bb._ended = !0, bb._seek = bb._start || 0, bb._rateSeek = 0, wb._clearTimer(bb._id), wb._cleanBuffer(bb._node), pb._autoSuspend()), wb._webAudio || eb || wb.stop(bb._id, !0), wb
        },
        _clearTimer: function(bb) {
          var wb = this;
          if (wb._endTimers[bb]) {
            if ("function" !== typeof wb._endTimers[bb]) clearTimeout(wb._endTimers[bb]);
            else {
              var Mb = wb._soundById(bb);
              Mb && Mb._node && Mb._node.removeEventListener("ended", wb._endTimers[bb], !1)
            }
            delete wb._endTimers[bb]
          }
          return wb
        },
        _soundById: function(bb) {
          for (var wb = this, Mb = 0; Mb < wb._sounds.length; Mb++)
            if (bb === wb._sounds[Mb]._id) return wb._sounds[Mb];
          return null
        },
        _inactiveSound: function() {
          var bb = this;
          bb._drain();
          for (var wb = 0; wb < bb._sounds.length; wb++)
            if (bb._sounds[wb]._ended) return bb._sounds[wb].reset();
          return new gb(bb)
        },
        _drain: function() {
          var bb = this,
            wb = bb._pool,
            Mb = 0,
            eb = 0;
          if (!(bb._sounds.length < wb)) {
            for (eb = 0; eb < bb._sounds.length; eb++) bb._sounds[eb]._ended && Mb++;
            for (eb = bb._sounds.length - 1; eb >= 0; eb--) {
              if (Mb <= wb) return;
              bb._sounds[eb]._ended && (bb._webAudio && bb._sounds[eb]._node && bb._sounds[eb]._node.disconnect(0), bb._sounds.splice(eb, 1), Mb--)
            }
          }
        },
        _getSoundIds: function(bb) {
          if ("undefined" === typeof bb) {
            for (var wb = [], Mb = 0; Mb < this._sounds.length; Mb++) wb.push(this._sounds[Mb]._id);
            return wb
          }
          return [bb]
        },
        _refreshBuffer: function(bb) {
          return bb._node.bufferSource = pb.ctx.createBufferSource(), bb._node.bufferSource.buffer = lb[this._src], bb._panner ? bb._node.bufferSource.connect(bb._panner) : bb._node.bufferSource.connect(bb._node), bb._node.bufferSource.loop = bb._loop, bb._loop && (bb._node.bufferSource.loopStart = bb._start || 0, bb._node.bufferSource.loopEnd = bb._stop || 0), bb._node.bufferSource.playbackRate.setValueAtTime(bb._rate, pb.ctx.currentTime), this
        },
        _cleanBuffer: function(bb) {
          var wb = pb._navigator && pb._navigator.vendor.indexOf("Apple") >= 0;
          if (pb._scratchBuffer && bb.bufferSource && (bb.bufferSource.onended = null, bb.bufferSource.disconnect(0), wb)) try {
            bb.bufferSource.buffer = pb._scratchBuffer
          } catch (Mb) {}
          return bb.bufferSource = null, this
        },
        _clearSound: function(bb) {
          /MSIE |Trident\//.test(pb._navigator && pb._navigator.userAgent) || (bb.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var gb = function(bb) {
        this._parent = bb, this.init()
      };
      gb.prototype = {
        init: function() {
          var bb = this,
            wb = bb._parent;
          return bb._muted = wb._muted, bb._loop = wb._loop, bb._volume = wb._volume, bb._rate = wb._rate, bb._seek = 0, bb.BO = !0, bb._ended = !0, bb._sprite = "__default", bb._id = ++pb._counter, wb._sounds.push(bb), bb.create(), bb
        },
        create: function() {
          var bb = this,
            wb = bb._parent,
            Mb = pb._muted || bb._muted || bb._parent._muted ? 0 : bb._volume;
          return wb._webAudio ? (bb._node = "undefined" === typeof pb.ctx.createGain ? pb.ctx.createGainNode() : pb.ctx.createGain(), bb._node.gain.setValueAtTime(Mb, pb.ctx.currentTime), bb._node.paused = !0, bb._node.connect(pb.masterGain)) : pb.noAudio || (bb._node = pb._obtainHtml5Audio(), bb._errorFn = bb._errorListener.bind(bb), bb._node.addEventListener("error", bb._errorFn, !1), bb._loadFn = bb._loadListener.bind(bb), bb._node.addEventListener(pb._canPlayEvent, bb._loadFn, !1), bb._endFn = bb._endListener.bind(bb), bb._node.addEventListener("ended", bb._endFn, !1), bb._node.src = wb._src, bb._node.preload = !0 === wb._preload ? "auto" : wb._preload, bb._node.volume = Mb * pb.volume(), bb._node.load()), bb
        },
        reset: function() {
          var bb = this,
            wb = bb._parent;
          return bb._muted = wb._muted, bb._loop = wb._loop, bb._volume = wb._volume, bb._rate = wb._rate, bb._seek = 0, bb._rateSeek = 0, bb.BO = !0, bb._ended = !0, bb._sprite = "__default", bb._id = ++pb._counter, bb
        },
        _errorListener: function() {
          var bb = this;
          bb._parent._emit("loaderror", bb._id, bb._node.error ? bb._node.error.code : 0), bb._node.removeEventListener("error", bb._errorFn, !1)
        },
        _loadListener: function() {
          var bb = this,
            wb = bb._parent;
          wb._duration = Math.ceil(10 * bb._node.duration) / 10, 0 === Object.keys(wb._sprite).length && (wb._sprite = {
            __default: [0, 1e3 * wb._duration]
          }), "loaded" !== wb._state && (wb._state = "loaded", wb._emit("load"), wb._loadQueue()), bb._node.removeEventListener(pb._canPlayEvent, bb._loadFn, !1)
        },
        _endListener: function() {
          var bb = this,
            wb = bb._parent;
          wb._duration === 1 / 0 && (wb._duration = Math.ceil(10 * bb._node.duration) / 10, wb._sprite.__default[1] === 1 / 0 && (wb._sprite.__default[1] = 1e3 * wb._duration), wb._ended(bb)), bb._node.removeEventListener("ended", bb._endFn, !1)
        }
      };
      var lb = {},
        Lb = function(bb) {
          var wb = bb._src;
          if (lb[wb]) return bb._duration = lb[wb].duration, void Ub(bb);
          if (/^data:[^;]+;base64,/.test(wb)) {
            for (var Mb = atob(wb.split(",")[1]), eb = new Uint8Array(Mb.length), Hb = 0; Hb < Mb.length; ++Hb) eb[Hb] = Mb.charCodeAt(Hb);
            Ob(eb.buffer, bb)
          } else {
            var pb = new XMLHttpRequest;
            pb.open(bb._xhr.method, wb, !0), pb.withCredentials = bb._xhr.withCredentials, pb.responseType = "arraybuffer", bb._xhr.headers && Object.keys(bb._xhr.headers).forEach((function(wb) {
              pb.setRequestHeader(wb, bb._xhr.headers[wb])
            })), pb.onload = function() {
              var wb = (pb.status + "")[0];
              "0" === wb || "2" === wb || "3" === wb ? Ob(pb.response, bb) : bb._emit("loaderror", null, "Failed loading audio file with status: " + pb.status + ".")
            }, pb.onerror = function() {
              bb._webAudio && (bb._html5 = !0, bb._webAudio = !1, bb._sounds = [], delete lb[wb], bb.load())
            }, Ib(pb)
          }
        },
        Ib = function(bb) {
          try {
            bb.send()
          } catch (wb) {
            bb.onerror()
          }
        },
        Ob = function(bb, wb) {
          var Mb = function() {
              wb._emit("loaderror", null, "Decoding audio data failed.")
            },
            eb = function(bb) {
              bb && wb._sounds.length > 0 ? (lb[wb._src] = bb, Ub(wb, bb)) : Mb()
            };
          "undefined" !== typeof Promise && 1 === pb.ctx.decodeAudioData.length ? pb.ctx.decodeAudioData(bb).then(eb).catch(Mb) : pb.ctx.decodeAudioData(bb, eb, Mb)
        },
        Ub = function(bb, wb) {
          wb && !bb._duration && (bb._duration = wb.duration), 0 === Object.keys(bb._sprite).length && (bb._sprite = {
            __default: [0, 1e3 * bb._duration]
          }), "loaded" !== bb._state && (bb._state = "loaded", bb._emit("load"), bb._loadQueue())
        },
        tb = function() {
          if (pb.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? pb.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? pb.ctx = new webkitAudioContext : pb.usingWebAudio = !1
            } catch (Hb) {
              pb.usingWebAudio = !1
            }
            pb.ctx || (pb.usingWebAudio = !1);
            var bb = /iP(hone|od|ad)/.test(pb._navigator && pb._navigator.platform),
              wb = pb._navigator && pb._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              Mb = wb ? parseInt(wb[1], 10) : null;
            if (bb && Mb && Mb < 9) {
              var eb = /safari/.test(pb._navigator && pb._navigator.userAgent.toLowerCase());
              pb._navigator && !eb && (pb.usingWebAudio = !1)
            }
            pb.usingWebAudio && (pb.masterGain = "undefined" === typeof pb.ctx.createGain ? pb.ctx.createGainNode() : pb.ctx.createGain(), pb.masterGain.gain.setValueAtTime(pb._muted ? 0 : pb._volume, pb.ctx.currentTime), pb.masterGain.connect(pb.ctx.destination)), pb._setup()
          }
        };
      void 0 === (eb = function() {
        return {
          Howler: pb,
          Howl: Vb
        }
      }.apply(wb, [])) || (bb.exports = eb), wb.Howler = pb, wb.Howl = Vb, "undefined" !== typeof Mb.g ? (Mb.g.HowlerGlobal = Hb, Mb.g.Howler = pb, Mb.g.Howl = Vb, Mb.g.Sound = gb) : "undefined" !== typeof window && (window.HowlerGlobal = Hb, window.Howler = pb, window.Howl = Vb, window.Sound = gb)
    }(),
    function() {
      var bb;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(bb) {
        var wb = this;
        if (!wb.ctx || !wb.ctx.listener) return wb;
        for (var Mb = wb._howls.length - 1; Mb >= 0; Mb--) wb._howls[Mb].stereo(bb);
        return wb
      }, HowlerGlobal.prototype.pos = function(bb, wb, Mb) {
        var eb = this;
        return eb.ctx && eb.ctx.listener ? (wb = "number" !== typeof wb ? eb._pos[1] : wb, Mb = "number" !== typeof Mb ? eb._pos[2] : Mb, "number" !== typeof bb ? eb._pos : (eb._pos = [bb, wb, Mb], "undefined" !== typeof eb.ctx.listener.positionX ? (eb.ctx.listener.positionX.setTargetAtTime(eb._pos[0], Howler.ctx.currentTime, .1), eb.ctx.listener.positionY.setTargetAtTime(eb._pos[1], Howler.ctx.currentTime, .1), eb.ctx.listener.positionZ.setTargetAtTime(eb._pos[2], Howler.ctx.currentTime, .1)) : eb.ctx.listener.setPosition(eb._pos[0], eb._pos[1], eb._pos[2]), eb)) : eb
      }, HowlerGlobal.prototype.orientation = function(bb, wb, Mb, eb, Hb, pb) {
        var Vb = this;
        if (!Vb.ctx || !Vb.ctx.listener) return Vb;
        var gb = Vb._orientation;
        return wb = "number" !== typeof wb ? gb[1] : wb, Mb = "number" !== typeof Mb ? gb[2] : Mb, eb = "number" !== typeof eb ? gb[3] : eb, Hb = "number" !== typeof Hb ? gb[4] : Hb, pb = "number" !== typeof pb ? gb[5] : pb, "number" !== typeof bb ? gb : (Vb._orientation = [bb, wb, Mb, eb, Hb, pb], "undefined" !== typeof Vb.ctx.listener.forwardX ? (Vb.ctx.listener.forwardX.setTargetAtTime(bb, Howler.ctx.currentTime, .1), Vb.ctx.listener.forwardY.setTargetAtTime(wb, Howler.ctx.currentTime, .1), Vb.ctx.listener.forwardZ.setTargetAtTime(Mb, Howler.ctx.currentTime, .1), Vb.ctx.listener.upX.setTargetAtTime(eb, Howler.ctx.currentTime, .1), Vb.ctx.listener.upY.setTargetAtTime(Hb, Howler.ctx.currentTime, .1), Vb.ctx.listener.upZ.setTargetAtTime(pb, Howler.ctx.currentTime, .1)) : Vb.ctx.listener.setOrientation(bb, wb, Mb, eb, Hb, pb), Vb)
      }, Howl.prototype.init = (bb = Howl.prototype.init, function(wb) {
        var Mb = this;
        return Mb._orientation = wb.orientation || [1, 0, 0], Mb._stereo = wb.stereo || null, Mb._pos = wb.pos || null, Mb._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof wb.coneInnerAngle ? wb.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof wb.coneOuterAngle ? wb.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof wb.coneOuterGain ? wb.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof wb.distanceModel ? wb.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof wb.maxDistance ? wb.maxDistance : 1e4,
          panningModel: "undefined" !== typeof wb.panningModel ? wb.panningModel : "HRTF",
          refDistance: "undefined" !== typeof wb.refDistance ? wb.refDistance : 1,
          rolloffFactor: "undefined" !== typeof wb.rolloffFactor ? wb.rolloffFactor : 1
        }, Mb._onstereo = wb.onstereo ? [{
          kI: wb.onstereo
        }] : [], Mb._onpos = wb.onpos ? [{
          kI: wb.onpos
        }] : [], Mb._onorientation = wb.onorientation ? [{
          kI: wb.onorientation
        }] : [], bb.call(this, wb)
      }), Howl.prototype.stereo = function(bb, Mb) {
        var eb = this;
        if (!eb._webAudio) return eb;
        if ("loaded" !== eb._state) return eb._queue.push({
          event: "stereo",
          action: function() {
            eb.stereo(bb, Mb)
          }
        }), eb;
        var Hb = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof Mb) {
          if ("number" !== typeof bb) return eb._stereo;
          eb._stereo = bb, eb._pos = [bb, 0, 0]
        }
        for (var pb = eb._getSoundIds(Mb), Vb = 0; Vb < pb.length; Vb++) {
          var gb = eb._soundById(pb[Vb]);
          if (gb) {
            if ("number" !== typeof bb) return gb._stereo;
            gb._stereo = bb, gb._pos = [bb, 0, 0], gb._node && (gb._pannerAttr.panningModel = "equalpower", gb._panner && gb._panner.pan || wb(gb, Hb), "spatial" === Hb ? "undefined" !== typeof gb._panner.positionX ? (gb._panner.positionX.setValueAtTime(bb, Howler.ctx.currentTime), gb._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), gb._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : gb._panner.setPosition(bb, 0, 0) : gb._panner.pan.setValueAtTime(bb, Howler.ctx.currentTime)), eb._emit("stereo", gb._id)
          }
        }
        return eb
      }, Howl.prototype.pos = function(bb, Mb, eb, Hb) {
        var pb = this;
        if (!pb._webAudio) return pb;
        if ("loaded" !== pb._state) return pb._queue.push({
          event: "pos",
          action: function() {
            pb.pos(bb, Mb, eb, Hb)
          }
        }), pb;
        if (Mb = "number" !== typeof Mb ? 0 : Mb, eb = "number" !== typeof eb ? -.5 : eb, "undefined" === typeof Hb) {
          if ("number" !== typeof bb) return pb._pos;
          pb._pos = [bb, Mb, eb]
        }
        for (var Vb = pb._getSoundIds(Hb), gb = 0; gb < Vb.length; gb++) {
          var lb = pb._soundById(Vb[gb]);
          if (lb) {
            if ("number" !== typeof bb) return lb._pos;
            lb._pos = [bb, Mb, eb], lb._node && (lb._panner && !lb._panner.pan || wb(lb, "spatial"), "undefined" !== typeof lb._panner.positionX ? (lb._panner.positionX.setValueAtTime(bb, Howler.ctx.currentTime), lb._panner.positionY.setValueAtTime(Mb, Howler.ctx.currentTime), lb._panner.positionZ.setValueAtTime(eb, Howler.ctx.currentTime)) : lb._panner.setPosition(bb, Mb, eb)), pb._emit("pos", lb._id)
          }
        }
        return pb
      }, Howl.prototype.orientation = function(bb, Mb, eb, Hb) {
        var pb = this;
        if (!pb._webAudio) return pb;
        if ("loaded" !== pb._state) return pb._queue.push({
          event: "orientation",
          action: function() {
            pb.orientation(bb, Mb, eb, Hb)
          }
        }), pb;
        if (Mb = "number" !== typeof Mb ? pb._orientation[1] : Mb, eb = "number" !== typeof eb ? pb._orientation[2] : eb, "undefined" === typeof Hb) {
          if ("number" !== typeof bb) return pb._orientation;
          pb._orientation = [bb, Mb, eb]
        }
        for (var Vb = pb._getSoundIds(Hb), gb = 0; gb < Vb.length; gb++) {
          var lb = pb._soundById(Vb[gb]);
          if (lb) {
            if ("number" !== typeof bb) return lb._orientation;
            lb._orientation = [bb, Mb, eb], lb._node && (lb._panner || (lb._pos || (lb._pos = pb._pos || [0, 0, -.5]), wb(lb, "spatial")), "undefined" !== typeof lb._panner.orientationX ? (lb._panner.orientationX.setValueAtTime(bb, Howler.ctx.currentTime), lb._panner.orientationY.setValueAtTime(Mb, Howler.ctx.currentTime), lb._panner.orientationZ.setValueAtTime(eb, Howler.ctx.currentTime)) : lb._panner.setOrientation(bb, Mb, eb)), pb._emit("orientation", lb._id)
          }
        }
        return pb
      }, Howl.prototype.pannerAttr = function() {
        var bb, Mb, eb, Hb = this,
          pb = arguments;
        if (!Hb._webAudio) return Hb;
        if (0 === pb.length) return Hb._pannerAttr;
        if (1 === pb.length) {
          if ("object" !== typeof pb[0]) return (eb = Hb._soundById(parseInt(pb[0], 10))) ? eb._pannerAttr : Hb._pannerAttr;
          bb = pb[0], "undefined" === typeof Mb && (bb.pannerAttr || (bb.pannerAttr = {
            coneInnerAngle: bb.coneInnerAngle,
            coneOuterAngle: bb.coneOuterAngle,
            coneOuterGain: bb.coneOuterGain,
            distanceModel: bb.distanceModel,
            maxDistance: bb.maxDistance,
            refDistance: bb.refDistance,
            rolloffFactor: bb.rolloffFactor,
            panningModel: bb.panningModel
          }), Hb._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof bb.pannerAttr.coneInnerAngle ? bb.pannerAttr.coneInnerAngle : Hb._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof bb.pannerAttr.coneOuterAngle ? bb.pannerAttr.coneOuterAngle : Hb._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof bb.pannerAttr.coneOuterGain ? bb.pannerAttr.coneOuterGain : Hb._coneOuterGain,
            distanceModel: "undefined" !== typeof bb.pannerAttr.distanceModel ? bb.pannerAttr.distanceModel : Hb._distanceModel,
            maxDistance: "undefined" !== typeof bb.pannerAttr.maxDistance ? bb.pannerAttr.maxDistance : Hb._maxDistance,
            refDistance: "undefined" !== typeof bb.pannerAttr.refDistance ? bb.pannerAttr.refDistance : Hb._refDistance,
            rolloffFactor: "undefined" !== typeof bb.pannerAttr.rolloffFactor ? bb.pannerAttr.rolloffFactor : Hb._rolloffFactor,
            panningModel: "undefined" !== typeof bb.pannerAttr.panningModel ? bb.pannerAttr.panningModel : Hb._panningModel
          })
        } else 2 === pb.length && (bb = pb[0], Mb = parseInt(pb[1], 10));
        for (var Vb = Hb._getSoundIds(Mb), gb = 0; gb < Vb.length; gb++)
          if (eb = Hb._soundById(Vb[gb])) {
            var lb = eb._pannerAttr;
            lb = {
              coneInnerAngle: "undefined" !== typeof bb.coneInnerAngle ? bb.coneInnerAngle : lb.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof bb.coneOuterAngle ? bb.coneOuterAngle : lb.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof bb.coneOuterGain ? bb.coneOuterGain : lb.coneOuterGain,
              distanceModel: "undefined" !== typeof bb.distanceModel ? bb.distanceModel : lb.distanceModel,
              maxDistance: "undefined" !== typeof bb.maxDistance ? bb.maxDistance : lb.maxDistance,
              refDistance: "undefined" !== typeof bb.refDistance ? bb.refDistance : lb.refDistance,
              rolloffFactor: "undefined" !== typeof bb.rolloffFactor ? bb.rolloffFactor : lb.rolloffFactor,
              panningModel: "undefined" !== typeof bb.panningModel ? bb.panningModel : lb.panningModel
            };
            var Lb = eb._panner;
            Lb ? (Lb.coneInnerAngle = lb.coneInnerAngle, Lb.coneOuterAngle = lb.coneOuterAngle, Lb.coneOuterGain = lb.coneOuterGain, Lb.distanceModel = lb.distanceModel, Lb.maxDistance = lb.maxDistance, Lb.refDistance = lb.refDistance, Lb.rolloffFactor = lb.rolloffFactor, Lb.panningModel = lb.panningModel) : (eb._pos || (eb._pos = Hb._pos || [0, 0, -.5]), wb(eb, "spatial"))
          } return Hb
      }, Sound.prototype.init = function(bb) {
        return function() {
          var wb = this,
            Mb = wb._parent;
          wb._orientation = Mb._orientation, wb._stereo = Mb._stereo, wb._pos = Mb._pos, wb._pannerAttr = Mb._pannerAttr, bb.call(this), wb._stereo ? Mb.stereo(wb._stereo) : wb._pos && Mb.pos(wb._pos[0], wb._pos[1], wb._pos[2], wb._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(bb) {
        return function() {
          var wb = this,
            Mb = wb._parent;
          return wb._orientation = Mb._orientation, wb._stereo = Mb._stereo, wb._pos = Mb._pos, wb._pannerAttr = Mb._pannerAttr, wb._stereo ? Mb.stereo(wb._stereo) : wb._pos ? Mb.pos(wb._pos[0], wb._pos[1], wb._pos[2], wb._id) : wb._panner && (wb._panner.disconnect(0), wb._panner = void 0, Mb._refreshBuffer(wb)), bb.call(this)
        }
      }(Sound.prototype.reset);
      var wb = function(bb, wb) {
        "spatial" === (wb = wb || "spatial") ? (bb._panner = Howler.ctx.createPanner(), bb._panner.coneInnerAngle = bb._pannerAttr.coneInnerAngle, bb._panner.coneOuterAngle = bb._pannerAttr.coneOuterAngle, bb._panner.coneOuterGain = bb._pannerAttr.coneOuterGain, bb._panner.distanceModel = bb._pannerAttr.distanceModel, bb._panner.maxDistance = bb._pannerAttr.maxDistance, bb._panner.refDistance = bb._pannerAttr.refDistance, bb._panner.rolloffFactor = bb._pannerAttr.rolloffFactor, bb._panner.panningModel = bb._pannerAttr.panningModel, "undefined" !== typeof bb._panner.positionX ? (bb._panner.positionX.setValueAtTime(bb._pos[0], Howler.ctx.currentTime), bb._panner.positionY.setValueAtTime(bb._pos[1], Howler.ctx.currentTime), bb._panner.positionZ.setValueAtTime(bb._pos[2], Howler.ctx.currentTime)) : bb._panner.setPosition(bb._pos[0], bb._pos[1], bb._pos[2]), "undefined" !== typeof bb._panner.orientationX ? (bb._panner.orientationX.setValueAtTime(bb._orientation[0], Howler.ctx.currentTime), bb._panner.orientationY.setValueAtTime(bb._orientation[1], Howler.ctx.currentTime), bb._panner.orientationZ.setValueAtTime(bb._orientation[2], Howler.ctx.currentTime)) : bb._panner.setOrientation(bb._orientation[0], bb._orientation[1], bb._orientation[2])) : (bb._panner = Howler.ctx.createStereoPanner(), bb._panner.pan.setValueAtTime(bb._stereo, Howler.ctx.currentTime)), bb._panner.connect(bb._node), bb.BO || bb._parent.pause(bb._id, !0).play(bb._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);