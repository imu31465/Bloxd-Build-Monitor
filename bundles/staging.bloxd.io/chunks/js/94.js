/*! For license information please see fsa8nn.94.9708398c.chunk.js.LICENSE.txt */
export const id = 94;
export const ids = [94];
export const modules = {
  4585: (bb, cb, sb) => {
    var kb;
    ! function() {
      var Wb = function() {
        this.init()
      };
      Wb.prototype = {
        init: function() {
          var bb = this || ab;
          return bb._counter = 1e3, bb._html5AudioPool = [], bb.html5PoolSize = 10, bb._codecs = {}, bb._howls = [], bb._muted = !1, bb._volume = 1, bb._canPlayEvent = "canplaythrough", bb._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, bb.masterGain = null, bb.noAudio = !1, bb.usingWebAudio = !0, bb.autoSuspend = !0, bb.ctx = null, bb.autoUnlock = !0, bb._setup(), bb
        },
        volume: function(bb) {
          var cb = this || ab;
          if (bb = parseFloat(bb), cb.ctx || nb(), "undefined" !== typeof bb && bb >= 0 && bb <= 1) {
            if (cb._volume = bb, cb._muted) return cb;
            cb.usingWebAudio && cb.masterGain.gain.setValueAtTime(bb, ab.ctx.currentTime);
            for (var sb = 0; sb < cb._howls.length; sb++)
              if (!cb._howls[sb]._webAudio)
                for (var kb = cb._howls[sb]._getSoundIds(), Wb = 0; Wb < kb.length; Wb++) {
                  var Tb = cb._howls[sb]._soundById(kb[Wb]);
                  Tb && Tb._node && (Tb._node.volume = Tb._volume * bb)
                }
            return cb
          }
          return cb._volume
        },
        mute: function(bb) {
          var cb = this || ab;
          cb.ctx || nb(), cb._muted = bb, cb.usingWebAudio && cb.masterGain.gain.setValueAtTime(bb ? 0 : cb._volume, ab.ctx.currentTime);
          for (var sb = 0; sb < cb._howls.length; sb++)
            if (!cb._howls[sb]._webAudio)
              for (var kb = cb._howls[sb]._getSoundIds(), Wb = 0; Wb < kb.length; Wb++) {
                var Tb = cb._howls[sb]._soundById(kb[Wb]);
                Tb && Tb._node && (Tb._node.muted = !!bb || Tb._muted)
              }
          return cb
        },
        stop: function() {
          for (var bb = this || ab, cb = 0; cb < bb._howls.length; cb++) bb._howls[cb].stop();
          return bb
        },
        unload: function() {
          for (var bb = this || ab, cb = bb._howls.length - 1; cb >= 0; cb--) bb._howls[cb].unload();
          return bb.usingWebAudio && bb.ctx && "undefined" !== typeof bb.ctx.close && (bb.ctx.close(), bb.ctx = null, nb()), bb
        },
        codecs: function(bb) {
          return (this || ab)._codecs[bb.replace(/^x-/, "")]
        },
        _setup: function() {
          var bb = this || ab;
          if (bb.state = bb.ctx && bb.ctx.state || "suspended", bb._autoSuspend(), !bb.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (bb._canPlayEvent = "canplay")
            } catch (cb) {
              bb.noAudio = !0
            } else bb.noAudio = !0;
          try {
            (new Audio).muted && (bb.noAudio = !0)
          } catch (cb) {}
          return bb.noAudio || bb._setupCodecs(), bb
        },
        _setupCodecs: function() {
          var bb = this || ab,
            cb = null;
          try {
            cb = "undefined" !== typeof Audio ? new Audio : null
          } catch (fb) {
            return bb
          }
          if (!cb || "function" !== typeof cb.canPlayType) return bb;
          var sb = cb.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            kb = bb._navigator ? bb._navigator.userAgent : "",
            Wb = kb.match(/OPR\/([0-6].)/g),
            Tb = Wb && parseInt(Wb[0].split("/")[1], 10) < 33,
            Ub = -1 !== kb.indexOf("Safari") && -1 === kb.indexOf("Chrome"),
            Ib = kb.match(/Version\/(.*?) /),
            Hb = Ub && Ib && parseInt(Ib[1], 10) < 15;
          return bb._codecs = {
            mp3: !(Tb || !sb && !cb.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!sb,
            opus: !!cb.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!cb.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!cb.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(cb.canPlayType('audio/wav; codecs="1"') || cb.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!cb.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!cb.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(cb.canPlayType("audio/x-m4a;") || cb.canPlayType("audio/m4a;") || cb.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(cb.canPlayType("audio/x-m4b;") || cb.canPlayType("audio/m4b;") || cb.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(cb.canPlayType("audio/x-mp4;") || cb.canPlayType("audio/mp4;") || cb.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Hb || !cb.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Hb || !cb.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!cb.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(cb.canPlayType("audio/x-flac;") || cb.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, bb
        },
        _unlockAudio: function() {
          var bb = this || ab;
          if (!bb._audioUnlocked && bb.ctx) {
            bb._audioUnlocked = !1, bb.autoUnlock = !1, bb._mobileUnloaded || 44100 === bb.ctx.sampleRate || (bb._mobileUnloaded = !0, bb.unload()), bb._scratchBuffer = bb.ctx.createBuffer(1, 1, 22050);
            var cb = function(sb) {
              for (; bb._html5AudioPool.length < bb.html5PoolSize;) try {
                var kb = new Audio;
                kb._unlocked = !0, bb._releaseHtml5Audio(kb)
              } catch (sb) {
                bb.noAudio = !0;
                break
              }
              for (var Wb = 0; Wb < bb._howls.length; Wb++)
                if (!bb._howls[Wb]._webAudio)
                  for (var ab = bb._howls[Wb]._getSoundIds(), Tb = 0; Tb < ab.length; Tb++) {
                    var Ub = bb._howls[Wb]._soundById(ab[Tb]);
                    Ub && Ub._node && !Ub._node._unlocked && (Ub._node._unlocked = !0, Ub._node.load())
                  }
              bb._autoResume();
              var Ib = bb.ctx.createBufferSource();
              Ib.buffer = bb._scratchBuffer, Ib.connect(bb.ctx.destination), "undefined" === typeof Ib.start ? Ib.noteOn(0) : Ib.start(0), "function" === typeof bb.ctx.resume && bb.ctx.resume(), Ib.onended = function() {
                Ib.disconnect(0), bb._audioUnlocked = !0, document.removeEventListener("touchstart", cb, !0), document.removeEventListener("touchend", cb, !0), document.removeEventListener("click", cb, !0), document.removeEventListener("keydown", cb, !0);
                for (var sb = 0; sb < bb._howls.length; sb++) bb._howls[sb]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", cb, !0), document.addEventListener("touchend", cb, !0), document.addEventListener("click", cb, !0), document.addEventListener("keydown", cb, !0), bb
          }
        },
        _obtainHtml5Audio: function() {
          var bb = this || ab;
          if (bb._html5AudioPool.length) return bb._html5AudioPool.pop();
          var cb = (new Audio).play();
          return cb && "undefined" !== typeof Promise && (cb instanceof Promise || "function" === typeof cb.then) && cb.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(bb) {
          var cb = this || ab;
          return bb._unlocked && cb._html5AudioPool.push(bb), cb
        },
        _autoSuspend: function() {
          var bb = this;
          if (bb.autoSuspend && bb.ctx && "undefined" !== typeof bb.ctx.suspend && ab.usingWebAudio) {
            for (var cb = 0; cb < bb._howls.length; cb++)
              if (bb._howls[cb]._webAudio)
                for (var sb = 0; sb < bb._howls[cb]._sounds.length; sb++)
                  if (!bb._howls[cb]._sounds[sb].bV) return bb;
            return bb._suspendTimer && clearTimeout(bb._suspendTimer), bb._suspendTimer = setTimeout((function() {
              if (bb.autoSuspend) {
                bb._suspendTimer = null, bb.state = "suspending";
                var cb = function() {
                  bb.state = "suspended", bb._resumeAfterSuspend && (delete bb._resumeAfterSuspend, bb._autoResume())
                };
                bb.ctx.suspend().then(cb, cb)
              }
            }), 3e4), bb
          }
        },
        _autoResume: function() {
          var bb = this;
          if (bb.ctx && "undefined" !== typeof bb.ctx.resume && ab.usingWebAudio) return "running" === bb.state && "interrupted" !== bb.ctx.state && bb._suspendTimer ? (clearTimeout(bb._suspendTimer), bb._suspendTimer = null) : "suspended" === bb.state || "running" === bb.state && "interrupted" === bb.ctx.state ? (bb.ctx.resume().then((function() {
            bb.state = "running";
            for (var cb = 0; cb < bb._howls.length; cb++) bb._howls[cb]._emit("resume")
          })), bb._suspendTimer && (clearTimeout(bb._suspendTimer), bb._suspendTimer = null)) : "suspending" === bb.state && (bb._resumeAfterSuspend = !0), bb
        }
      };
      var ab = new Wb,
        Tb = function(bb) {
          bb.src && 0 !== bb.src.length ? this.init(bb) : console.error("An array of source files must be passed with any new Howl.")
        };
      Tb.prototype = {
        init: function(bb) {
          var cb = this;
          return ab.ctx || nb(), cb._autoplay = bb.autoplay || !1, cb._format = "string" !== typeof bb.format ? bb.format : [bb.format], cb._html5 = bb.html5 || !1, cb._muted = bb.mute || !1, cb._loop = bb.loop || !1, cb._pool = bb.pool || 5, cb._preload = "boolean" !== typeof bb.preload && "metadata" !== bb.preload || bb.preload, cb._rate = bb.rate || 1, cb._sprite = bb.sprite || {}, cb._src = "string" !== typeof bb.src ? bb.src : [bb.src], cb._volume = void 0 !== bb.volume ? bb.volume : 1, cb._xhr = {
            method: bb.xhr && bb.xhr.method ? bb.xhr.method : "GET",
            headers: bb.xhr && bb.xhr.headers ? bb.xhr.headers : null,
            withCredentials: !(!bb.xhr || !bb.xhr.withCredentials) && bb.xhr.withCredentials
          }, cb._duration = 0, cb._state = "unloaded", cb._sounds = [], cb._endTimers = {}, cb._queue = [], cb._playLock = !1, cb._onend = bb.onend ? [{
            Nm: bb.onend
          }] : [], cb._onfade = bb.onfade ? [{
            Nm: bb.onfade
          }] : [], cb._onload = bb.onload ? [{
            Nm: bb.onload
          }] : [], cb._onloaderror = bb.onloaderror ? [{
            Nm: bb.onloaderror
          }] : [], cb._onplayerror = bb.onplayerror ? [{
            Nm: bb.onplayerror
          }] : [], cb._onpause = bb.onpause ? [{
            Nm: bb.onpause
          }] : [], cb._onplay = bb.onplay ? [{
            Nm: bb.onplay
          }] : [], cb._onstop = bb.onstop ? [{
            Nm: bb.onstop
          }] : [], cb._onmute = bb.onmute ? [{
            Nm: bb.onmute
          }] : [], cb._onvolume = bb.onvolume ? [{
            Nm: bb.onvolume
          }] : [], cb._onrate = bb.onrate ? [{
            Nm: bb.onrate
          }] : [], cb._onseek = bb.onseek ? [{
            Nm: bb.onseek
          }] : [], cb._onunlock = bb.onunlock ? [{
            Nm: bb.onunlock
          }] : [], cb._onresume = [], cb._webAudio = ab.usingWebAudio && !cb._html5, "undefined" !== typeof ab.ctx && ab.ctx && ab.autoUnlock && ab._unlockAudio(), ab._howls.push(cb), cb._autoplay && cb._queue.push({
            event: "play",
            action: function() {
              cb.play()
            }
          }), cb._preload && "none" !== cb._preload && cb.load(), cb
        },
        load: function() {
          var bb = this,
            cb = null;
          if (ab.noAudio) bb._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof bb._src && (bb._src = [bb._src]);
            for (var sb = 0; sb < bb._src.length; sb++) {
              var kb, Wb;
              if (bb._format && bb._format[sb]) kb = bb._format[sb];
              else {
                if ("string" !== typeof(Wb = bb._src[sb])) {
                  bb._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(kb = /^data:audio\/([^;,]+);/i.exec(Wb)) || (kb = /\.([^.]+)$/.exec(Wb.split("?", 1)[0])), kb && (kb = kb[1].toLowerCase())
              }
              if (kb || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), kb && ab.codecs(kb)) {
                cb = bb._src[sb];
                break
              }
            }
            if (cb) return bb._src = cb, bb._state = "loading", "https:" === window.location.protocol && "http:" === cb.slice(0, 5) && (bb._html5 = !0, bb._webAudio = !1), new Ub(bb), bb._webAudio && Hb(bb), bb;
            bb._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(bb, cb) {
          var sb = this,
            kb = null;
          if ("number" === typeof bb) kb = bb, bb = null;
          else {
            if ("string" === typeof bb && "loaded" === sb._state && !sb._sprite[bb]) return null;
            if ("undefined" === typeof bb && (bb = "__default", !sb._playLock)) {
              for (var Wb = 0, Tb = 0; Tb < sb._sounds.length; Tb++) sb._sounds[Tb].bV && !sb._sounds[Tb]._ended && (Wb++, kb = sb._sounds[Tb]._id);
              1 === Wb ? bb = null : kb = null
            }
          }
          var Ub = kb ? sb._soundById(kb) : sb._inactiveSound();
          if (!Ub) return null;
          if (kb && !bb && (bb = Ub._sprite || "__default"), "loaded" !== sb._state) {
            Ub._sprite = bb, Ub._ended = !1;
            var Ib = Ub._id;
            return sb._queue.push({
              event: "play",
              action: function() {
                sb.play(Ib)
              }
            }), Ib
          }
          if (kb && !Ub.bV) return cb || sb._loadQueue("play"), Ub._id;
          sb._webAudio && ab._autoResume();
          var Hb = Math.max(0, Ub._seek > 0 ? Ub._seek : sb._sprite[bb][0] / 1e3),
            fb = Math.max(0, (sb._sprite[bb][0] + sb._sprite[bb][1]) / 1e3 - Hb),
            Mb = 1e3 * fb / Math.abs(Ub._rate),
            Xb = sb._sprite[bb][0] / 1e3,
            nb = (sb._sprite[bb][0] + sb._sprite[bb][1]) / 1e3;
          Ub._sprite = bb, Ub._ended = !1;
          var mb = function() {
            Ub.bV = !1, Ub._seek = Hb, Ub._start = Xb, Ub._stop = nb, Ub._loop = !(!Ub._loop && !sb._sprite[bb][2])
          };
          if (!(Hb >= nb)) {
            var lb = Ub._node;
            if (sb._webAudio) {
              var Qb = function() {
                sb._playLock = !1, mb(), sb._refreshBuffer(Ub);
                var bb = Ub._muted || sb._muted ? 0 : Ub._volume;
                lb.gain.setValueAtTime(bb, ab.ctx.currentTime), Ub._playStart = ab.ctx.currentTime, "undefined" === typeof lb.bufferSource.start ? Ub._loop ? lb.bufferSource.noteGrainOn(0, Hb, 86400) : lb.bufferSource.noteGrainOn(0, Hb, fb) : Ub._loop ? lb.bufferSource.start(0, Hb, 86400) : lb.bufferSource.start(0, Hb, fb), Mb !== 1 / 0 && (sb._endTimers[Ub._id] = setTimeout(sb._ended.bind(sb, Ub), Mb)), cb || setTimeout((function() {
                  sb._emit("play", Ub._id), sb._loadQueue()
                }), 0)
              };
              "running" === ab.state && "interrupted" !== ab.ctx.state ? Qb() : (sb._playLock = !0, sb.once("resume", Qb), sb._clearTimer(Ub._id))
            } else {
              var eb = function() {
                lb.currentTime = Hb, lb.muted = Ub._muted || sb._muted || ab._muted || lb.muted, lb.volume = Ub._volume * ab.volume(), lb.playbackRate = Ub._rate;
                try {
                  var kb = lb.play();
                  if (kb && "undefined" !== typeof Promise && (kb instanceof Promise || "function" === typeof kb.then) ? (sb._playLock = !0, mb(), kb.then((function() {
                      sb._playLock = !1, lb._unlocked = !0, cb ? sb._loadQueue() : sb._emit("play", Ub._id)
                    })).catch((function() {
                      sb._playLock = !1, sb._emit("playerror", Ub._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), Ub._ended = !0, Ub.bV = !0
                    }))) : cb || (sb._playLock = !1, mb(), sb._emit("play", Ub._id)), lb.playbackRate = Ub._rate, lb.paused) return void sb._emit("playerror", Ub._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== bb || Ub._loop ? sb._endTimers[Ub._id] = setTimeout(sb._ended.bind(sb, Ub), Mb) : (sb._endTimers[Ub._id] = function() {
                    sb._ended(Ub), lb.removeEventListener("ended", sb._endTimers[Ub._id], !1)
                  }, lb.addEventListener("ended", sb._endTimers[Ub._id], !1))
                } catch (Wb) {
                  sb._emit("playerror", Ub._id, Wb)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === lb.src && (lb.src = sb._src, lb.load());
              var Cb = window && window.ejecta || !lb.readyState && ab._navigator.isCocoonJS;
              if (lb.readyState >= 3 || Cb) eb();
              else {
                sb._playLock = !0, sb._state = "loading";
                var Nb = function() {
                  sb._state = "loaded", eb(), lb.removeEventListener(ab._canPlayEvent, Nb, !1)
                };
                lb.addEventListener(ab._canPlayEvent, Nb, !1), sb._clearTimer(Ub._id)
              }
            }
            return Ub._id
          }
          sb._ended(Ub)
        },
        pause: function(bb) {
          var cb = this;
          if ("loaded" !== cb._state || cb._playLock) return cb._queue.push({
            event: "pause",
            action: function() {
              cb.pause(bb)
            }
          }), cb;
          for (var sb = cb._getSoundIds(bb), kb = 0; kb < sb.length; kb++) {
            cb._clearTimer(sb[kb]);
            var Wb = cb._soundById(sb[kb]);
            if (Wb && !Wb.bV && (Wb._seek = cb.seek(sb[kb]), Wb._rateSeek = 0, Wb.bV = !0, cb._stopFade(sb[kb]), Wb._node))
              if (cb._webAudio) {
                if (!Wb._node.bufferSource) continue;
                "undefined" === typeof Wb._node.bufferSource.stop ? Wb._node.bufferSource.noteOff(0) : Wb._node.bufferSource.stop(0), cb._cleanBuffer(Wb._node)
              } else isNaN(Wb._node.duration) && Wb._node.duration !== 1 / 0 || Wb._node.pause();
            arguments[1] || cb._emit("pause", Wb ? Wb._id : null)
          }
          return cb
        },
        stop: function(bb, cb) {
          var sb = this;
          if ("loaded" !== sb._state || sb._playLock) return sb._queue.push({
            event: "stop",
            action: function() {
              sb.stop(bb)
            }
          }), sb;
          for (var kb = sb._getSoundIds(bb), Wb = 0; Wb < kb.length; Wb++) {
            sb._clearTimer(kb[Wb]);
            var ab = sb._soundById(kb[Wb]);
            ab && (ab._seek = ab._start || 0, ab._rateSeek = 0, ab.bV = !0, ab._ended = !0, sb._stopFade(kb[Wb]), ab._node && (sb._webAudio ? ab._node.bufferSource && ("undefined" === typeof ab._node.bufferSource.stop ? ab._node.bufferSource.noteOff(0) : ab._node.bufferSource.stop(0), sb._cleanBuffer(ab._node)) : isNaN(ab._node.duration) && ab._node.duration !== 1 / 0 || (ab._node.currentTime = ab._start || 0, ab._node.pause(), ab._node.duration === 1 / 0 && sb._clearSound(ab._node))), cb || sb._emit("stop", ab._id))
          }
          return sb
        },
        mute: function(bb, cb) {
          var sb = this;
          if ("loaded" !== sb._state || sb._playLock) return sb._queue.push({
            event: "mute",
            action: function() {
              sb.mute(bb, cb)
            }
          }), sb;
          if ("undefined" === typeof cb) {
            if ("boolean" !== typeof bb) return sb._muted;
            sb._muted = bb
          }
          for (var kb = sb._getSoundIds(cb), Wb = 0; Wb < kb.length; Wb++) {
            var Tb = sb._soundById(kb[Wb]);
            Tb && (Tb._muted = bb, Tb._interval && sb._stopFade(Tb._id), sb._webAudio && Tb._node ? Tb._node.gain.setValueAtTime(bb ? 0 : Tb._volume, ab.ctx.currentTime) : Tb._node && (Tb._node.muted = !!ab._muted || bb), sb._emit("mute", Tb._id))
          }
          return sb
        },
        volume: function() {
          var bb, cb, sb, kb = this,
            Wb = arguments;
          if (0 === Wb.length) return kb._volume;
          if (1 === Wb.length || 2 === Wb.length && "undefined" === typeof Wb[1] ? kb._getSoundIds().indexOf(Wb[0]) >= 0 ? cb = parseInt(Wb[0], 10) : bb = parseFloat(Wb[0]) : Wb.length >= 2 && (bb = parseFloat(Wb[0]), cb = parseInt(Wb[1], 10)), !("undefined" !== typeof bb && bb >= 0 && bb <= 1)) return (sb = cb ? kb._soundById(cb) : kb._sounds[0]) ? sb._volume : 0;
          if ("loaded" !== kb._state || kb._playLock) return kb._queue.push({
            event: "volume",
            action: function() {
              kb.volume.apply(kb, Wb)
            }
          }), kb;
          "undefined" === typeof cb && (kb._volume = bb), cb = kb._getSoundIds(cb);
          for (var Tb = 0; Tb < cb.length; Tb++)(sb = kb._soundById(cb[Tb])) && (sb._volume = bb, Wb[2] || kb._stopFade(cb[Tb]), kb._webAudio && sb._node && !sb._muted ? sb._node.gain.setValueAtTime(bb, ab.ctx.currentTime) : sb._node && !sb._muted && (sb._node.volume = bb * ab.volume()), kb._emit("volume", sb._id));
          return kb
        },
        fade: function(bb, cb, sb, kb) {
          var Wb = this;
          if ("loaded" !== Wb._state || Wb._playLock) return Wb._queue.push({
            event: "fade",
            action: function() {
              Wb.fade(bb, cb, sb, kb)
            }
          }), Wb;
          bb = Math.min(Math.max(0, parseFloat(bb)), 1), cb = Math.min(Math.max(0, parseFloat(cb)), 1), sb = parseFloat(sb), Wb.volume(bb, kb);
          for (var Tb = Wb._getSoundIds(kb), Ub = 0; Ub < Tb.length; Ub++) {
            var Ib = Wb._soundById(Tb[Ub]);
            if (Ib) {
              if (kb || Wb._stopFade(Tb[Ub]), Wb._webAudio && !Ib._muted) {
                var Hb = ab.ctx.currentTime,
                  fb = Hb + sb / 1e3;
                Ib._volume = bb, Ib._node.gain.setValueAtTime(bb, Hb), Ib._node.gain.linearRampToValueAtTime(cb, fb)
              }
              Wb._startFadeInterval(Ib, bb, cb, sb, Tb[Ub], "undefined" === typeof kb)
            }
          }
          return Wb
        },
        _startFadeInterval: function(bb, cb, sb, kb, Wb, ab) {
          var Tb = this,
            Ub = cb,
            Ib = sb - cb,
            Hb = Math.abs(Ib / .01),
            fb = Math.max(4, Hb > 0 ? kb / Hb : kb),
            Mb = Date.now();
          bb._fadeTo = sb, bb._interval = setInterval((function() {
            var Wb = (Date.now() - Mb) / kb;
            Mb = Date.now(), Ub += Ib * Wb, Ub = Math.round(100 * Ub) / 100, Ub = Ib < 0 ? Math.max(sb, Ub) : Math.min(sb, Ub), Tb._webAudio ? bb._volume = Ub : Tb.volume(Ub, bb._id, !0), ab && (Tb._volume = Ub), (sb < cb && Ub <= sb || sb > cb && Ub >= sb) && (clearInterval(bb._interval), bb._interval = null, bb._fadeTo = null, Tb.volume(sb, bb._id), Tb._emit("fade", bb._id))
          }), fb)
        },
        _stopFade: function(bb) {
          var cb = this,
            sb = cb._soundById(bb);
          return sb && sb._interval && (cb._webAudio && sb._node.gain.cancelScheduledValues(ab.ctx.currentTime), clearInterval(sb._interval), sb._interval = null, cb.volume(sb._fadeTo, bb), sb._fadeTo = null, cb._emit("fade", bb)), cb
        },
        loop: function() {
          var bb, cb, sb, kb = this,
            Wb = arguments;
          if (0 === Wb.length) return kb._loop;
          if (1 === Wb.length) {
            if ("boolean" !== typeof Wb[0]) return !!(sb = kb._soundById(parseInt(Wb[0], 10))) && sb._loop;
            bb = Wb[0], kb._loop = bb
          } else 2 === Wb.length && (bb = Wb[0], cb = parseInt(Wb[1], 10));
          for (var ab = kb._getSoundIds(cb), Tb = 0; Tb < ab.length; Tb++)(sb = kb._soundById(ab[Tb])) && (sb._loop = bb, kb._webAudio && sb._node && sb._node.bufferSource && (sb._node.bufferSource.loop = bb, bb && (sb._node.bufferSource.loopStart = sb._start || 0, sb._node.bufferSource.loopEnd = sb._stop, kb.playing(ab[Tb]) && (kb.pause(ab[Tb], !0), kb.play(ab[Tb], !0)))));
          return kb
        },
        rate: function() {
          var bb, cb, sb, kb = this,
            Wb = arguments;
          if (0 === Wb.length) cb = kb._sounds[0]._id;
          else if (1 === Wb.length) {
            kb._getSoundIds().indexOf(Wb[0]) >= 0 ? cb = parseInt(Wb[0], 10) : bb = parseFloat(Wb[0])
          } else 2 === Wb.length && (bb = parseFloat(Wb[0]), cb = parseInt(Wb[1], 10));
          if ("number" !== typeof bb) return (sb = kb._soundById(cb)) ? sb._rate : kb._rate;
          if ("loaded" !== kb._state || kb._playLock) return kb._queue.push({
            event: "rate",
            action: function() {
              kb.rate.apply(kb, Wb)
            }
          }), kb;
          "undefined" === typeof cb && (kb._rate = bb), cb = kb._getSoundIds(cb);
          for (var Tb = 0; Tb < cb.length; Tb++)
            if (sb = kb._soundById(cb[Tb])) {
              kb.playing(cb[Tb]) && (sb._rateSeek = kb.seek(cb[Tb]), sb._playStart = kb._webAudio ? ab.ctx.currentTime : sb._playStart), sb._rate = bb, kb._webAudio && sb._node && sb._node.bufferSource ? sb._node.bufferSource.playbackRate.setValueAtTime(bb, ab.ctx.currentTime) : sb._node && (sb._node.playbackRate = bb);
              var Ub = kb.seek(cb[Tb]),
                Ib = 1e3 * ((kb._sprite[sb._sprite][0] + kb._sprite[sb._sprite][1]) / 1e3 - Ub) / Math.abs(sb._rate);
              !kb._endTimers[cb[Tb]] && sb.bV || (kb._clearTimer(cb[Tb]), kb._endTimers[cb[Tb]] = setTimeout(kb._ended.bind(kb, sb), Ib)), kb._emit("rate", sb._id)
            } return kb
        },
        seek: function() {
          var bb, cb, sb = this,
            kb = arguments;
          if (0 === kb.length) sb._sounds.length && (cb = sb._sounds[0]._id);
          else if (1 === kb.length) {
            sb._getSoundIds().indexOf(kb[0]) >= 0 ? cb = parseInt(kb[0], 10) : sb._sounds.length && (cb = sb._sounds[0]._id, bb = parseFloat(kb[0]))
          } else 2 === kb.length && (bb = parseFloat(kb[0]), cb = parseInt(kb[1], 10));
          if ("undefined" === typeof cb) return 0;
          if ("number" === typeof bb && ("loaded" !== sb._state || sb._playLock)) return sb._queue.push({
            event: "seek",
            action: function() {
              sb.seek.apply(sb, kb)
            }
          }), sb;
          var Wb = sb._soundById(cb);
          if (Wb) {
            if (!("number" === typeof bb && bb >= 0)) {
              if (sb._webAudio) {
                var Tb = sb.playing(cb) ? ab.ctx.currentTime - Wb._playStart : 0,
                  Ub = Wb._rateSeek ? Wb._rateSeek - Wb._seek : 0;
                return Wb._seek + (Ub + Tb * Math.abs(Wb._rate))
              }
              return Wb._node.currentTime
            }
            var Ib = sb.playing(cb);
            Ib && sb.pause(cb, !0), Wb._seek = bb, Wb._ended = !1, sb._clearTimer(cb), sb._webAudio || !Wb._node || isNaN(Wb._node.duration) || (Wb._node.currentTime = bb);
            var Hb = function() {
              Ib && sb.play(cb, !0), sb._emit("seek", cb)
            };
            if (Ib && !sb._webAudio) {
              var fb = function() {
                sb._playLock ? setTimeout(fb, 0) : Hb()
              };
              setTimeout(fb, 0)
            } else Hb()
          }
          return sb
        },
        playing: function(bb) {
          var cb = this;
          if ("number" === typeof bb) {
            var sb = cb._soundById(bb);
            return !!sb && !sb.bV
          }
          for (var kb = 0; kb < cb._sounds.length; kb++)
            if (!cb._sounds[kb].bV) return !0;
          return !1
        },
        duration: function(bb) {
          var cb = this,
            sb = cb._duration,
            kb = cb._soundById(bb);
          return kb && (sb = cb._sprite[kb._sprite][1] / 1e3), sb
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var bb = this, cb = bb._sounds, sb = 0; sb < cb.length; sb++) cb[sb].bV || bb.stop(cb[sb]._id), bb._webAudio || (bb._clearSound(cb[sb]._node), cb[sb]._node.removeEventListener("error", cb[sb]._errorFn, !1), cb[sb]._node.removeEventListener(ab._canPlayEvent, cb[sb]._loadFn, !1), cb[sb]._node.removeEventListener("ended", cb[sb]._endFn, !1), ab._releaseHtml5Audio(cb[sb]._node)), delete cb[sb]._node, bb._clearTimer(cb[sb]._id);
          var kb = ab._howls.indexOf(bb);
          kb >= 0 && ab._howls.splice(kb, 1);
          var Wb = !0;
          for (sb = 0; sb < ab._howls.length; sb++)
            if (ab._howls[sb]._src === bb._src || bb._src.indexOf(ab._howls[sb]._src) >= 0) {
              Wb = !1;
              break
            } return Ib && Wb && delete Ib[bb._src], ab.noAudio = !1, bb._state = "unloaded", bb._sounds = [], bb = null, null
        },
        on: function(bb, cb, sb, kb) {
          var Wb = this["_on" + bb];
          return "function" === typeof cb && Wb.push(kb ? {
            id: sb,
            Nm: cb,
            once: kb
          } : {
            id: sb,
            Nm: cb
          }), this
        },
        off: function(bb, cb, sb) {
          var kb = this,
            Wb = kb["_on" + bb],
            ab = 0;
          if ("number" === typeof cb && (sb = cb, cb = null), cb || sb)
            for (ab = 0; ab < Wb.length; ab++) {
              var Tb = sb === Wb[ab].id;
              if (cb === Wb[ab].Nm && Tb || !cb && Tb) {
                Wb.splice(ab, 1);
                break
              }
            } else if (bb) kb["_on" + bb] = [];
            else {
              var Ub = Object.keys(kb);
              for (ab = 0; ab < Ub.length; ab++) 0 === Ub[ab].indexOf("_on") && Array.isArray(kb[Ub[ab]]) && (kb[Ub[ab]] = [])
            } return kb
        },
        once: function(bb, cb, sb) {
          return this.on(bb, cb, sb, 1), this
        },
        _emit: function(bb, cb, sb) {
          for (var kb = this, Wb = kb["_on" + bb], ab = Wb.length - 1; ab >= 0; ab--) Wb[ab].id && Wb[ab].id !== cb && "load" !== bb || (setTimeout(function(bb) {
            bb.call(this, cb, sb)
          }.bind(kb, Wb[ab].Nm), 0), Wb[ab].once && kb.off(bb, Wb[ab].Nm, Wb[ab].id));
          return kb._loadQueue(bb), kb
        },
        _loadQueue: function(bb) {
          var cb = this;
          if (cb._queue.length > 0) {
            var sb = cb._queue[0];
            sb.event === bb && (cb._queue.shift(), cb._loadQueue()), bb || sb.action()
          }
          return cb
        },
        _ended: function(bb) {
          var cb = this,
            sb = bb._sprite;
          if (!cb._webAudio && bb._node && !bb._node.paused && !bb._node.ended && bb._node.currentTime < bb._stop) return setTimeout(cb._ended.bind(cb, bb), 100), cb;
          var kb = !(!bb._loop && !cb._sprite[sb][2]);
          if (cb._emit("end", bb._id), !cb._webAudio && kb && cb.stop(bb._id, !0).play(bb._id), cb._webAudio && kb) {
            cb._emit("play", bb._id), bb._seek = bb._start || 0, bb._rateSeek = 0, bb._playStart = ab.ctx.currentTime;
            var Wb = 1e3 * (bb._stop - bb._start) / Math.abs(bb._rate);
            cb._endTimers[bb._id] = setTimeout(cb._ended.bind(cb, bb), Wb)
          }
          return cb._webAudio && !kb && (bb.bV = !0, bb._ended = !0, bb._seek = bb._start || 0, bb._rateSeek = 0, cb._clearTimer(bb._id), cb._cleanBuffer(bb._node), ab._autoSuspend()), cb._webAudio || kb || cb.stop(bb._id, !0), cb
        },
        _clearTimer: function(bb) {
          var cb = this;
          if (cb._endTimers[bb]) {
            if ("function" !== typeof cb._endTimers[bb]) clearTimeout(cb._endTimers[bb]);
            else {
              var sb = cb._soundById(bb);
              sb && sb._node && sb._node.removeEventListener("ended", cb._endTimers[bb], !1)
            }
            delete cb._endTimers[bb]
          }
          return cb
        },
        _soundById: function(bb) {
          for (var cb = this, sb = 0; sb < cb._sounds.length; sb++)
            if (bb === cb._sounds[sb]._id) return cb._sounds[sb];
          return null
        },
        _inactiveSound: function() {
          var bb = this;
          bb._drain();
          for (var cb = 0; cb < bb._sounds.length; cb++)
            if (bb._sounds[cb]._ended) return bb._sounds[cb].reset();
          return new Ub(bb)
        },
        _drain: function() {
          var bb = this,
            cb = bb._pool,
            sb = 0,
            kb = 0;
          if (!(bb._sounds.length < cb)) {
            for (kb = 0; kb < bb._sounds.length; kb++) bb._sounds[kb]._ended && sb++;
            for (kb = bb._sounds.length - 1; kb >= 0; kb--) {
              if (sb <= cb) return;
              bb._sounds[kb]._ended && (bb._webAudio && bb._sounds[kb]._node && bb._sounds[kb]._node.disconnect(0), bb._sounds.splice(kb, 1), sb--)
            }
          }
        },
        _getSoundIds: function(bb) {
          if ("undefined" === typeof bb) {
            for (var cb = [], sb = 0; sb < this._sounds.length; sb++) cb.push(this._sounds[sb]._id);
            return cb
          }
          return [bb]
        },
        _refreshBuffer: function(bb) {
          return bb._node.bufferSource = ab.ctx.createBufferSource(), bb._node.bufferSource.buffer = Ib[this._src], bb._panner ? bb._node.bufferSource.connect(bb._panner) : bb._node.bufferSource.connect(bb._node), bb._node.bufferSource.loop = bb._loop, bb._loop && (bb._node.bufferSource.loopStart = bb._start || 0, bb._node.bufferSource.loopEnd = bb._stop || 0), bb._node.bufferSource.playbackRate.setValueAtTime(bb._rate, ab.ctx.currentTime), this
        },
        _cleanBuffer: function(bb) {
          var cb = ab._navigator && ab._navigator.vendor.indexOf("Apple") >= 0;
          if (ab._scratchBuffer && bb.bufferSource && (bb.bufferSource.onended = null, bb.bufferSource.disconnect(0), cb)) try {
            bb.bufferSource.buffer = ab._scratchBuffer
          } catch (sb) {}
          return bb.bufferSource = null, this
        },
        _clearSound: function(bb) {
          /MSIE |Trident\//.test(ab._navigator && ab._navigator.userAgent) || (bb.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var Ub = function(bb) {
        this._parent = bb, this.init()
      };
      Ub.prototype = {
        init: function() {
          var bb = this,
            cb = bb._parent;
          return bb._muted = cb._muted, bb._loop = cb._loop, bb._volume = cb._volume, bb._rate = cb._rate, bb._seek = 0, bb.bV = !0, bb._ended = !0, bb._sprite = "__default", bb._id = ++ab._counter, cb._sounds.push(bb), bb.create(), bb
        },
        create: function() {
          var bb = this,
            cb = bb._parent,
            sb = ab._muted || bb._muted || bb._parent._muted ? 0 : bb._volume;
          return cb._webAudio ? (bb._node = "undefined" === typeof ab.ctx.createGain ? ab.ctx.createGainNode() : ab.ctx.createGain(), bb._node.gain.setValueAtTime(sb, ab.ctx.currentTime), bb._node.paused = !0, bb._node.connect(ab.masterGain)) : ab.noAudio || (bb._node = ab._obtainHtml5Audio(), bb._errorFn = bb._errorListener.bind(bb), bb._node.addEventListener("error", bb._errorFn, !1), bb._loadFn = bb._loadListener.bind(bb), bb._node.addEventListener(ab._canPlayEvent, bb._loadFn, !1), bb._endFn = bb._endListener.bind(bb), bb._node.addEventListener("ended", bb._endFn, !1), bb._node.src = cb._src, bb._node.preload = !0 === cb._preload ? "auto" : cb._preload, bb._node.volume = sb * ab.volume(), bb._node.load()), bb
        },
        reset: function() {
          var bb = this,
            cb = bb._parent;
          return bb._muted = cb._muted, bb._loop = cb._loop, bb._volume = cb._volume, bb._rate = cb._rate, bb._seek = 0, bb._rateSeek = 0, bb.bV = !0, bb._ended = !0, bb._sprite = "__default", bb._id = ++ab._counter, bb
        },
        _errorListener: function() {
          var bb = this;
          bb._parent._emit("loaderror", bb._id, bb._node.error ? bb._node.error.code : 0), bb._node.removeEventListener("error", bb._errorFn, !1)
        },
        _loadListener: function() {
          var bb = this,
            cb = bb._parent;
          cb._duration = Math.ceil(10 * bb._node.duration) / 10, 0 === Object.keys(cb._sprite).length && (cb._sprite = {
            __default: [0, 1e3 * cb._duration]
          }), "loaded" !== cb._state && (cb._state = "loaded", cb._emit("load"), cb._loadQueue()), bb._node.removeEventListener(ab._canPlayEvent, bb._loadFn, !1)
        },
        _endListener: function() {
          var bb = this,
            cb = bb._parent;
          cb._duration === 1 / 0 && (cb._duration = Math.ceil(10 * bb._node.duration) / 10, cb._sprite.__default[1] === 1 / 0 && (cb._sprite.__default[1] = 1e3 * cb._duration), cb._ended(bb)), bb._node.removeEventListener("ended", bb._endFn, !1)
        }
      };
      var Ib = {},
        Hb = function(bb) {
          var cb = bb._src;
          if (Ib[cb]) return bb._duration = Ib[cb].duration, void Xb(bb);
          if (/^data:[^;]+;base64,/.test(cb)) {
            for (var sb = atob(cb.split(",")[1]), kb = new Uint8Array(sb.length), Wb = 0; Wb < sb.length; ++Wb) kb[Wb] = sb.charCodeAt(Wb);
            Mb(kb.buffer, bb)
          } else {
            var ab = new XMLHttpRequest;
            ab.open(bb._xhr.method, cb, !0), ab.withCredentials = bb._xhr.withCredentials, ab.responseType = "arraybuffer", bb._xhr.headers && Object.keys(bb._xhr.headers).forEach((function(cb) {
              ab.setRequestHeader(cb, bb._xhr.headers[cb])
            })), ab.onload = function() {
              var cb = (ab.status + "")[0];
              "0" === cb || "2" === cb || "3" === cb ? Mb(ab.response, bb) : bb._emit("loaderror", null, "Failed loading audio file with status: " + ab.status + ".")
            }, ab.onerror = function() {
              bb._webAudio && (bb._html5 = !0, bb._webAudio = !1, bb._sounds = [], delete Ib[cb], bb.load())
            }, fb(ab)
          }
        },
        fb = function(bb) {
          try {
            bb.send()
          } catch (cb) {
            bb.onerror()
          }
        },
        Mb = function(bb, cb) {
          var sb = function() {
              cb._emit("loaderror", null, "Decoding audio data failed.")
            },
            kb = function(bb) {
              bb && cb._sounds.length > 0 ? (Ib[cb._src] = bb, Xb(cb, bb)) : sb()
            };
          "undefined" !== typeof Promise && 1 === ab.ctx.decodeAudioData.length ? ab.ctx.decodeAudioData(bb).then(kb).catch(sb) : ab.ctx.decodeAudioData(bb, kb, sb)
        },
        Xb = function(bb, cb) {
          cb && !bb._duration && (bb._duration = cb.duration), 0 === Object.keys(bb._sprite).length && (bb._sprite = {
            __default: [0, 1e3 * bb._duration]
          }), "loaded" !== bb._state && (bb._state = "loaded", bb._emit("load"), bb._loadQueue())
        },
        nb = function() {
          if (ab.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? ab.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? ab.ctx = new webkitAudioContext : ab.usingWebAudio = !1
            } catch (Wb) {
              ab.usingWebAudio = !1
            }
            ab.ctx || (ab.usingWebAudio = !1);
            var bb = /iP(hone|od|ad)/.test(ab._navigator && ab._navigator.platform),
              cb = ab._navigator && ab._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              sb = cb ? parseInt(cb[1], 10) : null;
            if (bb && sb && sb < 9) {
              var kb = /safari/.test(ab._navigator && ab._navigator.userAgent.toLowerCase());
              ab._navigator && !kb && (ab.usingWebAudio = !1)
            }
            ab.usingWebAudio && (ab.masterGain = "undefined" === typeof ab.ctx.createGain ? ab.ctx.createGainNode() : ab.ctx.createGain(), ab.masterGain.gain.setValueAtTime(ab._muted ? 0 : ab._volume, ab.ctx.currentTime), ab.masterGain.connect(ab.ctx.destination)), ab._setup()
          }
        };
      void 0 === (kb = function() {
        return {
          Howler: ab,
          Howl: Tb
        }
      }.apply(cb, [])) || (bb.exports = kb), cb.Howler = ab, cb.Howl = Tb, "undefined" !== typeof sb.g ? (sb.g.HowlerGlobal = Wb, sb.g.Howler = ab, sb.g.Howl = Tb, sb.g.Sound = Ub) : "undefined" !== typeof window && (window.HowlerGlobal = Wb, window.Howler = ab, window.Howl = Tb, window.Sound = Ub)
    }(),
    function() {
      var bb;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(bb) {
        var cb = this;
        if (!cb.ctx || !cb.ctx.listener) return cb;
        for (var sb = cb._howls.length - 1; sb >= 0; sb--) cb._howls[sb].stereo(bb);
        return cb
      }, HowlerGlobal.prototype.pos = function(bb, cb, sb) {
        var kb = this;
        return kb.ctx && kb.ctx.listener ? (cb = "number" !== typeof cb ? kb._pos[1] : cb, sb = "number" !== typeof sb ? kb._pos[2] : sb, "number" !== typeof bb ? kb._pos : (kb._pos = [bb, cb, sb], "undefined" !== typeof kb.ctx.listener.positionX ? (kb.ctx.listener.positionX.setTargetAtTime(kb._pos[0], Howler.ctx.currentTime, .1), kb.ctx.listener.positionY.setTargetAtTime(kb._pos[1], Howler.ctx.currentTime, .1), kb.ctx.listener.positionZ.setTargetAtTime(kb._pos[2], Howler.ctx.currentTime, .1)) : kb.ctx.listener.setPosition(kb._pos[0], kb._pos[1], kb._pos[2]), kb)) : kb
      }, HowlerGlobal.prototype.orientation = function(bb, cb, sb, kb, Wb, ab) {
        var Tb = this;
        if (!Tb.ctx || !Tb.ctx.listener) return Tb;
        var Ub = Tb._orientation;
        return cb = "number" !== typeof cb ? Ub[1] : cb, sb = "number" !== typeof sb ? Ub[2] : sb, kb = "number" !== typeof kb ? Ub[3] : kb, Wb = "number" !== typeof Wb ? Ub[4] : Wb, ab = "number" !== typeof ab ? Ub[5] : ab, "number" !== typeof bb ? Ub : (Tb._orientation = [bb, cb, sb, kb, Wb, ab], "undefined" !== typeof Tb.ctx.listener.forwardX ? (Tb.ctx.listener.forwardX.setTargetAtTime(bb, Howler.ctx.currentTime, .1), Tb.ctx.listener.forwardY.setTargetAtTime(cb, Howler.ctx.currentTime, .1), Tb.ctx.listener.forwardZ.setTargetAtTime(sb, Howler.ctx.currentTime, .1), Tb.ctx.listener.upX.setTargetAtTime(kb, Howler.ctx.currentTime, .1), Tb.ctx.listener.upY.setTargetAtTime(Wb, Howler.ctx.currentTime, .1), Tb.ctx.listener.upZ.setTargetAtTime(ab, Howler.ctx.currentTime, .1)) : Tb.ctx.listener.setOrientation(bb, cb, sb, kb, Wb, ab), Tb)
      }, Howl.prototype.init = (bb = Howl.prototype.init, function(cb) {
        var sb = this;
        return sb._orientation = cb.orientation || [1, 0, 0], sb._stereo = cb.stereo || null, sb._pos = cb.pos || null, sb._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof cb.coneInnerAngle ? cb.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof cb.coneOuterAngle ? cb.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof cb.coneOuterGain ? cb.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof cb.distanceModel ? cb.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof cb.maxDistance ? cb.maxDistance : 1e4,
          panningModel: "undefined" !== typeof cb.panningModel ? cb.panningModel : "HRTF",
          refDistance: "undefined" !== typeof cb.refDistance ? cb.refDistance : 1,
          rolloffFactor: "undefined" !== typeof cb.rolloffFactor ? cb.rolloffFactor : 1
        }, sb._onstereo = cb.onstereo ? [{
          Nm: cb.onstereo
        }] : [], sb._onpos = cb.onpos ? [{
          Nm: cb.onpos
        }] : [], sb._onorientation = cb.onorientation ? [{
          Nm: cb.onorientation
        }] : [], bb.call(this, cb)
      }), Howl.prototype.stereo = function(bb, sb) {
        var kb = this;
        if (!kb._webAudio) return kb;
        if ("loaded" !== kb._state) return kb._queue.push({
          event: "stereo",
          action: function() {
            kb.stereo(bb, sb)
          }
        }), kb;
        var Wb = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof sb) {
          if ("number" !== typeof bb) return kb._stereo;
          kb._stereo = bb, kb._pos = [bb, 0, 0]
        }
        for (var ab = kb._getSoundIds(sb), Tb = 0; Tb < ab.length; Tb++) {
          var Ub = kb._soundById(ab[Tb]);
          if (Ub) {
            if ("number" !== typeof bb) return Ub._stereo;
            Ub._stereo = bb, Ub._pos = [bb, 0, 0], Ub._node && (Ub._pannerAttr.panningModel = "equalpower", Ub._panner && Ub._panner.pan || cb(Ub, Wb), "spatial" === Wb ? "undefined" !== typeof Ub._panner.positionX ? (Ub._panner.positionX.setValueAtTime(bb, Howler.ctx.currentTime), Ub._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), Ub._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : Ub._panner.setPosition(bb, 0, 0) : Ub._panner.pan.setValueAtTime(bb, Howler.ctx.currentTime)), kb._emit("stereo", Ub._id)
          }
        }
        return kb
      }, Howl.prototype.pos = function(bb, sb, kb, Wb) {
        var ab = this;
        if (!ab._webAudio) return ab;
        if ("loaded" !== ab._state) return ab._queue.push({
          event: "pos",
          action: function() {
            ab.pos(bb, sb, kb, Wb)
          }
        }), ab;
        if (sb = "number" !== typeof sb ? 0 : sb, kb = "number" !== typeof kb ? -.5 : kb, "undefined" === typeof Wb) {
          if ("number" !== typeof bb) return ab._pos;
          ab._pos = [bb, sb, kb]
        }
        for (var Tb = ab._getSoundIds(Wb), Ub = 0; Ub < Tb.length; Ub++) {
          var Ib = ab._soundById(Tb[Ub]);
          if (Ib) {
            if ("number" !== typeof bb) return Ib._pos;
            Ib._pos = [bb, sb, kb], Ib._node && (Ib._panner && !Ib._panner.pan || cb(Ib, "spatial"), "undefined" !== typeof Ib._panner.positionX ? (Ib._panner.positionX.setValueAtTime(bb, Howler.ctx.currentTime), Ib._panner.positionY.setValueAtTime(sb, Howler.ctx.currentTime), Ib._panner.positionZ.setValueAtTime(kb, Howler.ctx.currentTime)) : Ib._panner.setPosition(bb, sb, kb)), ab._emit("pos", Ib._id)
          }
        }
        return ab
      }, Howl.prototype.orientation = function(bb, sb, kb, Wb) {
        var ab = this;
        if (!ab._webAudio) return ab;
        if ("loaded" !== ab._state) return ab._queue.push({
          event: "orientation",
          action: function() {
            ab.orientation(bb, sb, kb, Wb)
          }
        }), ab;
        if (sb = "number" !== typeof sb ? ab._orientation[1] : sb, kb = "number" !== typeof kb ? ab._orientation[2] : kb, "undefined" === typeof Wb) {
          if ("number" !== typeof bb) return ab._orientation;
          ab._orientation = [bb, sb, kb]
        }
        for (var Tb = ab._getSoundIds(Wb), Ub = 0; Ub < Tb.length; Ub++) {
          var Ib = ab._soundById(Tb[Ub]);
          if (Ib) {
            if ("number" !== typeof bb) return Ib._orientation;
            Ib._orientation = [bb, sb, kb], Ib._node && (Ib._panner || (Ib._pos || (Ib._pos = ab._pos || [0, 0, -.5]), cb(Ib, "spatial")), "undefined" !== typeof Ib._panner.orientationX ? (Ib._panner.orientationX.setValueAtTime(bb, Howler.ctx.currentTime), Ib._panner.orientationY.setValueAtTime(sb, Howler.ctx.currentTime), Ib._panner.orientationZ.setValueAtTime(kb, Howler.ctx.currentTime)) : Ib._panner.setOrientation(bb, sb, kb)), ab._emit("orientation", Ib._id)
          }
        }
        return ab
      }, Howl.prototype.pannerAttr = function() {
        var bb, sb, kb, Wb = this,
          ab = arguments;
        if (!Wb._webAudio) return Wb;
        if (0 === ab.length) return Wb._pannerAttr;
        if (1 === ab.length) {
          if ("object" !== typeof ab[0]) return (kb = Wb._soundById(parseInt(ab[0], 10))) ? kb._pannerAttr : Wb._pannerAttr;
          bb = ab[0], "undefined" === typeof sb && (bb.pannerAttr || (bb.pannerAttr = {
            coneInnerAngle: bb.coneInnerAngle,
            coneOuterAngle: bb.coneOuterAngle,
            coneOuterGain: bb.coneOuterGain,
            distanceModel: bb.distanceModel,
            maxDistance: bb.maxDistance,
            refDistance: bb.refDistance,
            rolloffFactor: bb.rolloffFactor,
            panningModel: bb.panningModel
          }), Wb._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof bb.pannerAttr.coneInnerAngle ? bb.pannerAttr.coneInnerAngle : Wb._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof bb.pannerAttr.coneOuterAngle ? bb.pannerAttr.coneOuterAngle : Wb._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof bb.pannerAttr.coneOuterGain ? bb.pannerAttr.coneOuterGain : Wb._coneOuterGain,
            distanceModel: "undefined" !== typeof bb.pannerAttr.distanceModel ? bb.pannerAttr.distanceModel : Wb._distanceModel,
            maxDistance: "undefined" !== typeof bb.pannerAttr.maxDistance ? bb.pannerAttr.maxDistance : Wb._maxDistance,
            refDistance: "undefined" !== typeof bb.pannerAttr.refDistance ? bb.pannerAttr.refDistance : Wb._refDistance,
            rolloffFactor: "undefined" !== typeof bb.pannerAttr.rolloffFactor ? bb.pannerAttr.rolloffFactor : Wb._rolloffFactor,
            panningModel: "undefined" !== typeof bb.pannerAttr.panningModel ? bb.pannerAttr.panningModel : Wb._panningModel
          })
        } else 2 === ab.length && (bb = ab[0], sb = parseInt(ab[1], 10));
        for (var Tb = Wb._getSoundIds(sb), Ub = 0; Ub < Tb.length; Ub++)
          if (kb = Wb._soundById(Tb[Ub])) {
            var Ib = kb._pannerAttr;
            Ib = {
              coneInnerAngle: "undefined" !== typeof bb.coneInnerAngle ? bb.coneInnerAngle : Ib.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof bb.coneOuterAngle ? bb.coneOuterAngle : Ib.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof bb.coneOuterGain ? bb.coneOuterGain : Ib.coneOuterGain,
              distanceModel: "undefined" !== typeof bb.distanceModel ? bb.distanceModel : Ib.distanceModel,
              maxDistance: "undefined" !== typeof bb.maxDistance ? bb.maxDistance : Ib.maxDistance,
              refDistance: "undefined" !== typeof bb.refDistance ? bb.refDistance : Ib.refDistance,
              rolloffFactor: "undefined" !== typeof bb.rolloffFactor ? bb.rolloffFactor : Ib.rolloffFactor,
              panningModel: "undefined" !== typeof bb.panningModel ? bb.panningModel : Ib.panningModel
            };
            var Hb = kb._panner;
            Hb ? (Hb.coneInnerAngle = Ib.coneInnerAngle, Hb.coneOuterAngle = Ib.coneOuterAngle, Hb.coneOuterGain = Ib.coneOuterGain, Hb.distanceModel = Ib.distanceModel, Hb.maxDistance = Ib.maxDistance, Hb.refDistance = Ib.refDistance, Hb.rolloffFactor = Ib.rolloffFactor, Hb.panningModel = Ib.panningModel) : (kb._pos || (kb._pos = Wb._pos || [0, 0, -.5]), cb(kb, "spatial"))
          } return Wb
      }, Sound.prototype.init = function(bb) {
        return function() {
          var cb = this,
            sb = cb._parent;
          cb._orientation = sb._orientation, cb._stereo = sb._stereo, cb._pos = sb._pos, cb._pannerAttr = sb._pannerAttr, bb.call(this), cb._stereo ? sb.stereo(cb._stereo) : cb._pos && sb.pos(cb._pos[0], cb._pos[1], cb._pos[2], cb._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(bb) {
        return function() {
          var cb = this,
            sb = cb._parent;
          return cb._orientation = sb._orientation, cb._stereo = sb._stereo, cb._pos = sb._pos, cb._pannerAttr = sb._pannerAttr, cb._stereo ? sb.stereo(cb._stereo) : cb._pos ? sb.pos(cb._pos[0], cb._pos[1], cb._pos[2], cb._id) : cb._panner && (cb._panner.disconnect(0), cb._panner = void 0, sb._refreshBuffer(cb)), bb.call(this)
        }
      }(Sound.prototype.reset);
      var cb = function(bb, cb) {
        "spatial" === (cb = cb || "spatial") ? (bb._panner = Howler.ctx.createPanner(), bb._panner.coneInnerAngle = bb._pannerAttr.coneInnerAngle, bb._panner.coneOuterAngle = bb._pannerAttr.coneOuterAngle, bb._panner.coneOuterGain = bb._pannerAttr.coneOuterGain, bb._panner.distanceModel = bb._pannerAttr.distanceModel, bb._panner.maxDistance = bb._pannerAttr.maxDistance, bb._panner.refDistance = bb._pannerAttr.refDistance, bb._panner.rolloffFactor = bb._pannerAttr.rolloffFactor, bb._panner.panningModel = bb._pannerAttr.panningModel, "undefined" !== typeof bb._panner.positionX ? (bb._panner.positionX.setValueAtTime(bb._pos[0], Howler.ctx.currentTime), bb._panner.positionY.setValueAtTime(bb._pos[1], Howler.ctx.currentTime), bb._panner.positionZ.setValueAtTime(bb._pos[2], Howler.ctx.currentTime)) : bb._panner.setPosition(bb._pos[0], bb._pos[1], bb._pos[2]), "undefined" !== typeof bb._panner.orientationX ? (bb._panner.orientationX.setValueAtTime(bb._orientation[0], Howler.ctx.currentTime), bb._panner.orientationY.setValueAtTime(bb._orientation[1], Howler.ctx.currentTime), bb._panner.orientationZ.setValueAtTime(bb._orientation[2], Howler.ctx.currentTime)) : bb._panner.setOrientation(bb._orientation[0], bb._orientation[1], bb._orientation[2])) : (bb._panner = Howler.ctx.createStereoPanner(), bb._panner.pan.setValueAtTime(bb._stereo, Howler.ctx.currentTime)), bb._panner.connect(bb._node), bb.bV || bb._parent.pause(bb._id, !0).play(bb._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);