/*! For license information please see u88b9b.111.756ff745.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5340: (ee, ie, He) => {
    var ye;
    ! function() {
      var be = function() {
        this.init()
      };
      be.prototype = {
        init: function() {
          var ee = this || Me;
          return ee._counter = 1e3, ee._html5AudioPool = [], ee.html5PoolSize = 10, ee._codecs = {}, ee._howls = [], ee._muted = !1, ee._volume = 1, ee._canPlayEvent = "canplaythrough", ee._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, ee.masterGain = null, ee.noAudio = !1, ee.usingWebAudio = !0, ee.autoSuspend = !0, ee.ctx = null, ee.autoUnlock = !0, ee._setup(), ee
        },
        volume: function(ee) {
          var ie = this || Me;
          if (ee = parseFloat(ee), ie.ctx || qe(), "undefined" !== typeof ee && ee >= 0 && ee <= 1) {
            if (ie._volume = ee, ie._muted) return ie;
            ie.usingWebAudio && ie.masterGain.gain.setValueAtTime(ee, Me.ctx.currentTime);
            for (var He = 0; He < ie._howls.length; He++)
              if (!ie._howls[He]._webAudio)
                for (var ye = ie._howls[He]._getSoundIds(), be = 0; be < ye.length; be++) {
                  var Ke = ie._howls[He]._soundById(ye[be]);
                  Ke && Ke._node && (Ke._node.volume = Ke._volume * ee)
                }
            return ie
          }
          return ie._volume
        },
        mute: function(ee) {
          var ie = this || Me;
          ie.ctx || qe(), ie._muted = ee, ie.usingWebAudio && ie.masterGain.gain.setValueAtTime(ee ? 0 : ie._volume, Me.ctx.currentTime);
          for (var He = 0; He < ie._howls.length; He++)
            if (!ie._howls[He]._webAudio)
              for (var ye = ie._howls[He]._getSoundIds(), be = 0; be < ye.length; be++) {
                var Ke = ie._howls[He]._soundById(ye[be]);
                Ke && Ke._node && (Ke._node.muted = !!ee || Ke._muted)
              }
          return ie
        },
        stop: function() {
          for (var ee = this || Me, ie = 0; ie < ee._howls.length; ie++) ee._howls[ie].stop();
          return ee
        },
        unload: function() {
          for (var ee = this || Me, ie = ee._howls.length - 1; ie >= 0; ie--) ee._howls[ie].unload();
          return ee.usingWebAudio && ee.ctx && "undefined" !== typeof ee.ctx.close && (ee.ctx.close(), ee.ctx = null, qe()), ee
        },
        codecs: function(ee) {
          return (this || Me)._codecs[ee.replace(/^x-/, "")]
        },
        _setup: function() {
          var ee = this || Me;
          if (ee.state = ee.ctx && ee.ctx.state || "suspended", ee._autoSuspend(), !ee.usingWebAudio)
            if ("undefined" !== typeof Audio) try {
              "undefined" === typeof(new Audio).oncanplaythrough && (ee._canPlayEvent = "canplay")
            } catch (ie) {
              ee.noAudio = !0
            } else ee.noAudio = !0;
          try {
            (new Audio).muted && (ee.noAudio = !0)
          } catch (ie) {}
          return ee.noAudio || ee._setupCodecs(), ee
        },
        _setupCodecs: function() {
          var ee = this || Me,
            ie = null;
          try {
            ie = "undefined" !== typeof Audio ? new Audio : null
          } catch (oe) {
            return ee
          }
          if (!ie || "function" !== typeof ie.canPlayType) return ee;
          var He = ie.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            ye = ee._navigator ? ee._navigator.userAgent : "",
            be = ye.match(/OPR\/([0-6].)/g),
            Ke = be && parseInt(be[0].split("/")[1], 10) < 33,
            Ue = -1 !== ye.indexOf("Safari") && -1 === ye.indexOf("Chrome"),
            Fe = ye.match(/Version\/(.*?) /),
            Je = Ue && Fe && parseInt(Fe[1], 10) < 15;
          return ee._codecs = {
            mp3: !(Ke || !He && !ie.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!He,
            opus: !!ie.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!ie.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!ie.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(ie.canPlayType('audio/wav; codecs="1"') || ie.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!ie.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!ie.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(ie.canPlayType("audio/x-m4a;") || ie.canPlayType("audio/m4a;") || ie.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(ie.canPlayType("audio/x-m4b;") || ie.canPlayType("audio/m4b;") || ie.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(ie.canPlayType("audio/x-mp4;") || ie.canPlayType("audio/mp4;") || ie.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(Je || !ie.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(Je || !ie.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!ie.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(ie.canPlayType("audio/x-flac;") || ie.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, ee
        },
        _unlockAudio: function() {
          var ee = this || Me;
          if (!ee._audioUnlocked && ee.ctx) {
            ee._audioUnlocked = !1, ee.autoUnlock = !1, ee._mobileUnloaded || 44100 === ee.ctx.sampleRate || (ee._mobileUnloaded = !0, ee.unload()), ee._scratchBuffer = ee.ctx.createBuffer(1, 1, 22050);
            var ie = function(He) {
              for (; ee._html5AudioPool.length < ee.html5PoolSize;) try {
                var ye = new Audio;
                ye._unlocked = !0, ee._releaseHtml5Audio(ye)
              } catch (He) {
                ee.noAudio = !0;
                break
              }
              for (var be = 0; be < ee._howls.length; be++)
                if (!ee._howls[be]._webAudio)
                  for (var Me = ee._howls[be]._getSoundIds(), Ke = 0; Ke < Me.length; Ke++) {
                    var Ue = ee._howls[be]._soundById(Me[Ke]);
                    Ue && Ue._node && !Ue._node._unlocked && (Ue._node._unlocked = !0, Ue._node.load())
                  }
              ee._autoResume();
              var Fe = ee.ctx.createBufferSource();
              Fe.buffer = ee._scratchBuffer, Fe.connect(ee.ctx.destination), "undefined" === typeof Fe.start ? Fe.noteOn(0) : Fe.start(0), "function" === typeof ee.ctx.resume && ee.ctx.resume(), Fe.onended = function() {
                Fe.disconnect(0), ee._audioUnlocked = !0, document.removeEventListener("touchstart", ie, !0), document.removeEventListener("touchend", ie, !0), document.removeEventListener("click", ie, !0), document.removeEventListener("keydown", ie, !0);
                for (var He = 0; He < ee._howls.length; He++) ee._howls[He]._emit("unlock")
              }
            };
            return document.addEventListener("touchstart", ie, !0), document.addEventListener("touchend", ie, !0), document.addEventListener("click", ie, !0), document.addEventListener("keydown", ie, !0), ee
          }
        },
        _obtainHtml5Audio: function() {
          var ee = this || Me;
          if (ee._html5AudioPool.length) return ee._html5AudioPool.pop();
          var ie = (new Audio).play();
          return ie && "undefined" !== typeof Promise && (ie instanceof Promise || "function" === typeof ie.then) && ie.catch((function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })), new Audio
        },
        _releaseHtml5Audio: function(ee) {
          var ie = this || Me;
          return ee._unlocked && ie._html5AudioPool.push(ee), ie
        },
        _autoSuspend: function() {
          var ee = this;
          if (ee.autoSuspend && ee.ctx && "undefined" !== typeof ee.ctx.suspend && Me.usingWebAudio) {
            for (var ie = 0; ie < ee._howls.length; ie++)
              if (ee._howls[ie]._webAudio)
                for (var He = 0; He < ee._howls[ie]._sounds.length; He++)
                  if (!ee._howls[ie]._sounds[He].AR) return ee;
            return ee._suspendTimer && clearTimeout(ee._suspendTimer), ee._suspendTimer = setTimeout((function() {
              if (ee.autoSuspend) {
                ee._suspendTimer = null, ee.state = "suspending";
                var ie = function() {
                  ee.state = "suspended", ee._resumeAfterSuspend && (delete ee._resumeAfterSuspend, ee._autoResume())
                };
                ee.ctx.suspend().then(ie, ie)
              }
            }), 3e4), ee
          }
        },
        _autoResume: function() {
          var ee = this;
          if (ee.ctx && "undefined" !== typeof ee.ctx.resume && Me.usingWebAudio) return "running" === ee.state && "interrupted" !== ee.ctx.state && ee._suspendTimer ? (clearTimeout(ee._suspendTimer), ee._suspendTimer = null) : "suspended" === ee.state || "running" === ee.state && "interrupted" === ee.ctx.state ? (ee.ctx.resume().then((function() {
            ee.state = "running";
            for (var ie = 0; ie < ee._howls.length; ie++) ee._howls[ie]._emit("resume")
          })), ee._suspendTimer && (clearTimeout(ee._suspendTimer), ee._suspendTimer = null)) : "suspending" === ee.state && (ee._resumeAfterSuspend = !0), ee
        }
      };
      var Me = new be,
        Ke = function(ee) {
          ee.src && 0 !== ee.src.length ? this.init(ee) : console.error("An array of source files must be passed with any new Howl.")
        };
      Ke.prototype = {
        init: function(ee) {
          var ie = this;
          return Me.ctx || qe(), ie._autoplay = ee.autoplay || !1, ie._format = "string" !== typeof ee.format ? ee.format : [ee.format], ie._html5 = ee.html5 || !1, ie._muted = ee.mute || !1, ie._loop = ee.loop || !1, ie._pool = ee.pool || 5, ie._preload = "boolean" !== typeof ee.preload && "metadata" !== ee.preload || ee.preload, ie._rate = ee.rate || 1, ie._sprite = ee.sprite || {}, ie._src = "string" !== typeof ee.src ? ee.src : [ee.src], ie._volume = void 0 !== ee.volume ? ee.volume : 1, ie._xhr = {
            method: ee.xhr && ee.xhr.method ? ee.xhr.method : "GET",
            headers: ee.xhr && ee.xhr.headers ? ee.xhr.headers : null,
            withCredentials: !(!ee.xhr || !ee.xhr.withCredentials) && ee.xhr.withCredentials
          }, ie._duration = 0, ie._state = "unloaded", ie._sounds = [], ie._endTimers = {}, ie._queue = [], ie._playLock = !1, ie._onend = ee.onend ? [{
            oR: ee.onend
          }] : [], ie._onfade = ee.onfade ? [{
            oR: ee.onfade
          }] : [], ie._onload = ee.onload ? [{
            oR: ee.onload
          }] : [], ie._onloaderror = ee.onloaderror ? [{
            oR: ee.onloaderror
          }] : [], ie._onplayerror = ee.onplayerror ? [{
            oR: ee.onplayerror
          }] : [], ie._onpause = ee.onpause ? [{
            oR: ee.onpause
          }] : [], ie._onplay = ee.onplay ? [{
            oR: ee.onplay
          }] : [], ie._onstop = ee.onstop ? [{
            oR: ee.onstop
          }] : [], ie._onmute = ee.onmute ? [{
            oR: ee.onmute
          }] : [], ie._onvolume = ee.onvolume ? [{
            oR: ee.onvolume
          }] : [], ie._onrate = ee.onrate ? [{
            oR: ee.onrate
          }] : [], ie._onseek = ee.onseek ? [{
            oR: ee.onseek
          }] : [], ie._onunlock = ee.onunlock ? [{
            oR: ee.onunlock
          }] : [], ie._onresume = [], ie._webAudio = Me.usingWebAudio && !ie._html5, "undefined" !== typeof Me.ctx && Me.ctx && Me.autoUnlock && Me._unlockAudio(), Me._howls.push(ie), ie._autoplay && ie._queue.push({
            event: "play",
            action: function() {
              ie.play()
            }
          }), ie._preload && "none" !== ie._preload && ie.load(), ie
        },
        load: function() {
          var ee = this,
            ie = null;
          if (Me.noAudio) ee._emit("loaderror", null, "No audio support.");
          else {
            "string" === typeof ee._src && (ee._src = [ee._src]);
            for (var He = 0; He < ee._src.length; He++) {
              var ye, be;
              if (ee._format && ee._format[He]) ye = ee._format[He];
              else {
                if ("string" !== typeof(be = ee._src[He])) {
                  ee._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue
                }(ye = /^data:audio\/([^;,]+);/i.exec(be)) || (ye = /\.([^.]+)$/.exec(be.split("?", 1)[0])), ye && (ye = ye[1].toLowerCase())
              }
              if (ye || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), ye && Me.codecs(ye)) {
                ie = ee._src[He];
                break
              }
            }
            if (ie) return ee._src = ie, ee._state = "loading", "https:" === window.location.protocol && "http:" === ie.slice(0, 5) && (ee._html5 = !0, ee._webAudio = !1), new Ue(ee), ee._webAudio && Je(ee), ee;
            ee._emit("loaderror", null, "No codec support for selected audio sources.")
          }
        },
        play: function(ee, ie) {
          var He = this,
            ye = null;
          if ("number" === typeof ee) ye = ee, ee = null;
          else {
            if ("string" === typeof ee && "loaded" === He._state && !He._sprite[ee]) return null;
            if ("undefined" === typeof ee && (ee = "__default", !He._playLock)) {
              for (var be = 0, Ke = 0; Ke < He._sounds.length; Ke++) He._sounds[Ke].AR && !He._sounds[Ke]._ended && (be++, ye = He._sounds[Ke]._id);
              1 === be ? ee = null : ye = null
            }
          }
          var Ue = ye ? He._soundById(ye) : He._inactiveSound();
          if (!Ue) return null;
          if (ye && !ee && (ee = Ue._sprite || "__default"), "loaded" !== He._state) {
            Ue._sprite = ee, Ue._ended = !1;
            var Fe = Ue._id;
            return He._queue.push({
              event: "play",
              action: function() {
                He.play(Fe)
              }
            }), Fe
          }
          if (ye && !Ue.AR) return ie || He._loadQueue("play"), Ue._id;
          He._webAudio && Me._autoResume();
          var Je = Math.max(0, Ue._seek > 0 ? Ue._seek : He._sprite[ee][0] / 1e3),
            oe = Math.max(0, (He._sprite[ee][0] + He._sprite[ee][1]) / 1e3 - Je),
            Re = 1e3 * oe / Math.abs(Ue._rate),
            ke = He._sprite[ee][0] / 1e3,
            qe = (He._sprite[ee][0] + He._sprite[ee][1]) / 1e3;
          Ue._sprite = ee, Ue._ended = !1;
          var fe = function() {
            Ue.AR = !1, Ue._seek = Je, Ue._start = ke, Ue._stop = qe, Ue._loop = !(!Ue._loop && !He._sprite[ee][2])
          };
          if (!(Je >= qe)) {
            var Te = Ue._node;
            if (He._webAudio) {
              var pe = function() {
                He._playLock = !1, fe(), He._refreshBuffer(Ue);
                var ee = Ue._muted || He._muted ? 0 : Ue._volume;
                Te.gain.setValueAtTime(ee, Me.ctx.currentTime), Ue._playStart = Me.ctx.currentTime, "undefined" === typeof Te.bufferSource.start ? Ue._loop ? Te.bufferSource.noteGrainOn(0, Je, 86400) : Te.bufferSource.noteGrainOn(0, Je, oe) : Ue._loop ? Te.bufferSource.start(0, Je, 86400) : Te.bufferSource.start(0, Je, oe), Re !== 1 / 0 && (He._endTimers[Ue._id] = setTimeout(He._ended.bind(He, Ue), Re)), ie || setTimeout((function() {
                  He._emit("play", Ue._id), He._loadQueue()
                }), 0)
              };
              "running" === Me.state && "interrupted" !== Me.ctx.state ? pe() : (He._playLock = !0, He.once("resume", pe), He._clearTimer(Ue._id))
            } else {
              var Xe = function() {
                Te.currentTime = Je, Te.muted = Ue._muted || He._muted || Me._muted || Te.muted, Te.volume = Ue._volume * Me.volume(), Te.playbackRate = Ue._rate;
                try {
                  var ye = Te.play();
                  if (ye && "undefined" !== typeof Promise && (ye instanceof Promise || "function" === typeof ye.then) ? (He._playLock = !0, fe(), ye.then((function() {
                      He._playLock = !1, Te._unlocked = !0, ie ? He._loadQueue() : He._emit("play", Ue._id)
                    })).catch((function() {
                      He._playLock = !1, He._emit("playerror", Ue._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), Ue._ended = !0, Ue.AR = !0
                    }))) : ie || (He._playLock = !1, fe(), He._emit("play", Ue._id)), Te.playbackRate = Ue._rate, Te.paused) return void He._emit("playerror", Ue._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== ee || Ue._loop ? He._endTimers[Ue._id] = setTimeout(He._ended.bind(He, Ue), Re) : (He._endTimers[Ue._id] = function() {
                    He._ended(Ue), Te.removeEventListener("ended", He._endTimers[Ue._id], !1)
                  }, Te.addEventListener("ended", He._endTimers[Ue._id], !1))
                } catch (be) {
                  He._emit("playerror", Ue._id, be)
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === Te.src && (Te.src = He._src, Te.load());
              var ze = window && window.ejecta || !Te.readyState && Me._navigator.isCocoonJS;
              if (Te.readyState >= 3 || ze) Xe();
              else {
                He._playLock = !0, He._state = "loading";
                var Be = function() {
                  He._state = "loaded", Xe(), Te.removeEventListener(Me._canPlayEvent, Be, !1)
                };
                Te.addEventListener(Me._canPlayEvent, Be, !1), He._clearTimer(Ue._id)
              }
            }
            return Ue._id
          }
          He._ended(Ue)
        },
        pause: function(ee) {
          var ie = this;
          if ("loaded" !== ie._state || ie._playLock) return ie._queue.push({
            event: "pause",
            action: function() {
              ie.pause(ee)
            }
          }), ie;
          for (var He = ie._getSoundIds(ee), ye = 0; ye < He.length; ye++) {
            ie._clearTimer(He[ye]);
            var be = ie._soundById(He[ye]);
            if (be && !be.AR && (be._seek = ie.seek(He[ye]), be._rateSeek = 0, be.AR = !0, ie._stopFade(He[ye]), be._node))
              if (ie._webAudio) {
                if (!be._node.bufferSource) continue;
                "undefined" === typeof be._node.bufferSource.stop ? be._node.bufferSource.noteOff(0) : be._node.bufferSource.stop(0), ie._cleanBuffer(be._node)
              } else isNaN(be._node.duration) && be._node.duration !== 1 / 0 || be._node.pause();
            arguments[1] || ie._emit("pause", be ? be._id : null)
          }
          return ie
        },
        stop: function(ee, ie) {
          var He = this;
          if ("loaded" !== He._state || He._playLock) return He._queue.push({
            event: "stop",
            action: function() {
              He.stop(ee)
            }
          }), He;
          for (var ye = He._getSoundIds(ee), be = 0; be < ye.length; be++) {
            He._clearTimer(ye[be]);
            var Me = He._soundById(ye[be]);
            Me && (Me._seek = Me._start || 0, Me._rateSeek = 0, Me.AR = !0, Me._ended = !0, He._stopFade(ye[be]), Me._node && (He._webAudio ? Me._node.bufferSource && ("undefined" === typeof Me._node.bufferSource.stop ? Me._node.bufferSource.noteOff(0) : Me._node.bufferSource.stop(0), He._cleanBuffer(Me._node)) : isNaN(Me._node.duration) && Me._node.duration !== 1 / 0 || (Me._node.currentTime = Me._start || 0, Me._node.pause(), Me._node.duration === 1 / 0 && He._clearSound(Me._node))), ie || He._emit("stop", Me._id))
          }
          return He
        },
        mute: function(ee, ie) {
          var He = this;
          if ("loaded" !== He._state || He._playLock) return He._queue.push({
            event: "mute",
            action: function() {
              He.mute(ee, ie)
            }
          }), He;
          if ("undefined" === typeof ie) {
            if ("boolean" !== typeof ee) return He._muted;
            He._muted = ee
          }
          for (var ye = He._getSoundIds(ie), be = 0; be < ye.length; be++) {
            var Ke = He._soundById(ye[be]);
            Ke && (Ke._muted = ee, Ke._interval && He._stopFade(Ke._id), He._webAudio && Ke._node ? Ke._node.gain.setValueAtTime(ee ? 0 : Ke._volume, Me.ctx.currentTime) : Ke._node && (Ke._node.muted = !!Me._muted || ee), He._emit("mute", Ke._id))
          }
          return He
        },
        volume: function() {
          var ee, ie, He, ye = this,
            be = arguments;
          if (0 === be.length) return ye._volume;
          if (1 === be.length || 2 === be.length && "undefined" === typeof be[1] ? ye._getSoundIds().indexOf(be[0]) >= 0 ? ie = parseInt(be[0], 10) : ee = parseFloat(be[0]) : be.length >= 2 && (ee = parseFloat(be[0]), ie = parseInt(be[1], 10)), !("undefined" !== typeof ee && ee >= 0 && ee <= 1)) return (He = ie ? ye._soundById(ie) : ye._sounds[0]) ? He._volume : 0;
          if ("loaded" !== ye._state || ye._playLock) return ye._queue.push({
            event: "volume",
            action: function() {
              ye.volume.apply(ye, be)
            }
          }), ye;
          "undefined" === typeof ie && (ye._volume = ee), ie = ye._getSoundIds(ie);
          for (var Ke = 0; Ke < ie.length; Ke++)(He = ye._soundById(ie[Ke])) && (He._volume = ee, be[2] || ye._stopFade(ie[Ke]), ye._webAudio && He._node && !He._muted ? He._node.gain.setValueAtTime(ee, Me.ctx.currentTime) : He._node && !He._muted && (He._node.volume = ee * Me.volume()), ye._emit("volume", He._id));
          return ye
        },
        fade: function(ee, ie, He, ye) {
          var be = this;
          if ("loaded" !== be._state || be._playLock) return be._queue.push({
            event: "fade",
            action: function() {
              be.fade(ee, ie, He, ye)
            }
          }), be;
          ee = Math.min(Math.max(0, parseFloat(ee)), 1), ie = Math.min(Math.max(0, parseFloat(ie)), 1), He = parseFloat(He), be.volume(ee, ye);
          for (var Ke = be._getSoundIds(ye), Ue = 0; Ue < Ke.length; Ue++) {
            var Fe = be._soundById(Ke[Ue]);
            if (Fe) {
              if (ye || be._stopFade(Ke[Ue]), be._webAudio && !Fe._muted) {
                var Je = Me.ctx.currentTime,
                  oe = Je + He / 1e3;
                Fe._volume = ee, Fe._node.gain.setValueAtTime(ee, Je), Fe._node.gain.linearRampToValueAtTime(ie, oe)
              }
              be._startFadeInterval(Fe, ee, ie, He, Ke[Ue], "undefined" === typeof ye)
            }
          }
          return be
        },
        _startFadeInterval: function(ee, ie, He, ye, be, Me) {
          var Ke = this,
            Ue = ie,
            Fe = He - ie,
            Je = Math.abs(Fe / .01),
            oe = Math.max(4, Je > 0 ? ye / Je : ye),
            Re = Date.now();
          ee._fadeTo = He, ee._interval = setInterval((function() {
            var be = (Date.now() - Re) / ye;
            Re = Date.now(), Ue += Fe * be, Ue = Math.round(100 * Ue) / 100, Ue = Fe < 0 ? Math.max(He, Ue) : Math.min(He, Ue), Ke._webAudio ? ee._volume = Ue : Ke.volume(Ue, ee._id, !0), Me && (Ke._volume = Ue), (He < ie && Ue <= He || He > ie && Ue >= He) && (clearInterval(ee._interval), ee._interval = null, ee._fadeTo = null, Ke.volume(He, ee._id), Ke._emit("fade", ee._id))
          }), oe)
        },
        _stopFade: function(ee) {
          var ie = this,
            He = ie._soundById(ee);
          return He && He._interval && (ie._webAudio && He._node.gain.cancelScheduledValues(Me.ctx.currentTime), clearInterval(He._interval), He._interval = null, ie.volume(He._fadeTo, ee), He._fadeTo = null, ie._emit("fade", ee)), ie
        },
        loop: function() {
          var ee, ie, He, ye = this,
            be = arguments;
          if (0 === be.length) return ye._loop;
          if (1 === be.length) {
            if ("boolean" !== typeof be[0]) return !!(He = ye._soundById(parseInt(be[0], 10))) && He._loop;
            ee = be[0], ye._loop = ee
          } else 2 === be.length && (ee = be[0], ie = parseInt(be[1], 10));
          for (var Me = ye._getSoundIds(ie), Ke = 0; Ke < Me.length; Ke++)(He = ye._soundById(Me[Ke])) && (He._loop = ee, ye._webAudio && He._node && He._node.bufferSource && (He._node.bufferSource.loop = ee, ee && (He._node.bufferSource.loopStart = He._start || 0, He._node.bufferSource.loopEnd = He._stop, ye.playing(Me[Ke]) && (ye.pause(Me[Ke], !0), ye.play(Me[Ke], !0)))));
          return ye
        },
        rate: function() {
          var ee, ie, He, ye = this,
            be = arguments;
          if (0 === be.length) ie = ye._sounds[0]._id;
          else if (1 === be.length) {
            ye._getSoundIds().indexOf(be[0]) >= 0 ? ie = parseInt(be[0], 10) : ee = parseFloat(be[0])
          } else 2 === be.length && (ee = parseFloat(be[0]), ie = parseInt(be[1], 10));
          if ("number" !== typeof ee) return (He = ye._soundById(ie)) ? He._rate : ye._rate;
          if ("loaded" !== ye._state || ye._playLock) return ye._queue.push({
            event: "rate",
            action: function() {
              ye.rate.apply(ye, be)
            }
          }), ye;
          "undefined" === typeof ie && (ye._rate = ee), ie = ye._getSoundIds(ie);
          for (var Ke = 0; Ke < ie.length; Ke++)
            if (He = ye._soundById(ie[Ke])) {
              ye.playing(ie[Ke]) && (He._rateSeek = ye.seek(ie[Ke]), He._playStart = ye._webAudio ? Me.ctx.currentTime : He._playStart), He._rate = ee, ye._webAudio && He._node && He._node.bufferSource ? He._node.bufferSource.playbackRate.setValueAtTime(ee, Me.ctx.currentTime) : He._node && (He._node.playbackRate = ee);
              var Ue = ye.seek(ie[Ke]),
                Fe = 1e3 * ((ye._sprite[He._sprite][0] + ye._sprite[He._sprite][1]) / 1e3 - Ue) / Math.abs(He._rate);
              !ye._endTimers[ie[Ke]] && He.AR || (ye._clearTimer(ie[Ke]), ye._endTimers[ie[Ke]] = setTimeout(ye._ended.bind(ye, He), Fe)), ye._emit("rate", He._id)
            } return ye
        },
        seek: function() {
          var ee, ie, He = this,
            ye = arguments;
          if (0 === ye.length) He._sounds.length && (ie = He._sounds[0]._id);
          else if (1 === ye.length) {
            He._getSoundIds().indexOf(ye[0]) >= 0 ? ie = parseInt(ye[0], 10) : He._sounds.length && (ie = He._sounds[0]._id, ee = parseFloat(ye[0]))
          } else 2 === ye.length && (ee = parseFloat(ye[0]), ie = parseInt(ye[1], 10));
          if ("undefined" === typeof ie) return 0;
          if ("number" === typeof ee && ("loaded" !== He._state || He._playLock)) return He._queue.push({
            event: "seek",
            action: function() {
              He.seek.apply(He, ye)
            }
          }), He;
          var be = He._soundById(ie);
          if (be) {
            if (!("number" === typeof ee && ee >= 0)) {
              if (He._webAudio) {
                var Ke = He.playing(ie) ? Me.ctx.currentTime - be._playStart : 0,
                  Ue = be._rateSeek ? be._rateSeek - be._seek : 0;
                return be._seek + (Ue + Ke * Math.abs(be._rate))
              }
              return be._node.currentTime
            }
            var Fe = He.playing(ie);
            Fe && He.pause(ie, !0), be._seek = ee, be._ended = !1, He._clearTimer(ie), He._webAudio || !be._node || isNaN(be._node.duration) || (be._node.currentTime = ee);
            var Je = function() {
              Fe && He.play(ie, !0), He._emit("seek", ie)
            };
            if (Fe && !He._webAudio) {
              var oe = function() {
                He._playLock ? setTimeout(oe, 0) : Je()
              };
              setTimeout(oe, 0)
            } else Je()
          }
          return He
        },
        playing: function(ee) {
          var ie = this;
          if ("number" === typeof ee) {
            var He = ie._soundById(ee);
            return !!He && !He.AR
          }
          for (var ye = 0; ye < ie._sounds.length; ye++)
            if (!ie._sounds[ye].AR) return !0;
          return !1
        },
        duration: function(ee) {
          var ie = this,
            He = ie._duration,
            ye = ie._soundById(ee);
          return ye && (He = ie._sprite[ye._sprite][1] / 1e3), He
        },
        state: function() {
          return this._state
        },
        unload: function() {
          for (var ee = this, ie = ee._sounds, He = 0; He < ie.length; He++) ie[He].AR || ee.stop(ie[He]._id), ee._webAudio || (ee._clearSound(ie[He]._node), ie[He]._node.removeEventListener("error", ie[He]._errorFn, !1), ie[He]._node.removeEventListener(Me._canPlayEvent, ie[He]._loadFn, !1), ie[He]._node.removeEventListener("ended", ie[He]._endFn, !1), Me._releaseHtml5Audio(ie[He]._node)), delete ie[He]._node, ee._clearTimer(ie[He]._id);
          var ye = Me._howls.indexOf(ee);
          ye >= 0 && Me._howls.splice(ye, 1);
          var be = !0;
          for (He = 0; He < Me._howls.length; He++)
            if (Me._howls[He]._src === ee._src || ee._src.indexOf(Me._howls[He]._src) >= 0) {
              be = !1;
              break
            } return Fe && be && delete Fe[ee._src], Me.noAudio = !1, ee._state = "unloaded", ee._sounds = [], ee = null, null
        },
        on: function(ee, ie, He, ye) {
          var be = this["_on" + ee];
          return "function" === typeof ie && be.push(ye ? {
            id: He,
            oR: ie,
            once: ye
          } : {
            id: He,
            oR: ie
          }), this
        },
        off: function(ee, ie, He) {
          var ye = this,
            be = ye["_on" + ee],
            Me = 0;
          if ("number" === typeof ie && (He = ie, ie = null), ie || He)
            for (Me = 0; Me < be.length; Me++) {
              var Ke = He === be[Me].id;
              if (ie === be[Me].oR && Ke || !ie && Ke) {
                be.splice(Me, 1);
                break
              }
            } else if (ee) ye["_on" + ee] = [];
            else {
              var Ue = Object.keys(ye);
              for (Me = 0; Me < Ue.length; Me++) 0 === Ue[Me].indexOf("_on") && Array.isArray(ye[Ue[Me]]) && (ye[Ue[Me]] = [])
            } return ye
        },
        once: function(ee, ie, He) {
          return this.on(ee, ie, He, 1), this
        },
        _emit: function(ee, ie, He) {
          for (var ye = this, be = ye["_on" + ee], Me = be.length - 1; Me >= 0; Me--) be[Me].id && be[Me].id !== ie && "load" !== ee || (setTimeout(function(ee) {
            ee.call(this, ie, He)
          }.bind(ye, be[Me].oR), 0), be[Me].once && ye.off(ee, be[Me].oR, be[Me].id));
          return ye._loadQueue(ee), ye
        },
        _loadQueue: function(ee) {
          var ie = this;
          if (ie._queue.length > 0) {
            var He = ie._queue[0];
            He.event === ee && (ie._queue.shift(), ie._loadQueue()), ee || He.action()
          }
          return ie
        },
        _ended: function(ee) {
          var ie = this,
            He = ee._sprite;
          if (!ie._webAudio && ee._node && !ee._node.paused && !ee._node.ended && ee._node.currentTime < ee._stop) return setTimeout(ie._ended.bind(ie, ee), 100), ie;
          var ye = !(!ee._loop && !ie._sprite[He][2]);
          if (ie._emit("end", ee._id), !ie._webAudio && ye && ie.stop(ee._id, !0).play(ee._id), ie._webAudio && ye) {
            ie._emit("play", ee._id), ee._seek = ee._start || 0, ee._rateSeek = 0, ee._playStart = Me.ctx.currentTime;
            var be = 1e3 * (ee._stop - ee._start) / Math.abs(ee._rate);
            ie._endTimers[ee._id] = setTimeout(ie._ended.bind(ie, ee), be)
          }
          return ie._webAudio && !ye && (ee.AR = !0, ee._ended = !0, ee._seek = ee._start || 0, ee._rateSeek = 0, ie._clearTimer(ee._id), ie._cleanBuffer(ee._node), Me._autoSuspend()), ie._webAudio || ye || ie.stop(ee._id, !0), ie
        },
        _clearTimer: function(ee) {
          var ie = this;
          if (ie._endTimers[ee]) {
            if ("function" !== typeof ie._endTimers[ee]) clearTimeout(ie._endTimers[ee]);
            else {
              var He = ie._soundById(ee);
              He && He._node && He._node.removeEventListener("ended", ie._endTimers[ee], !1)
            }
            delete ie._endTimers[ee]
          }
          return ie
        },
        _soundById: function(ee) {
          for (var ie = this, He = 0; He < ie._sounds.length; He++)
            if (ee === ie._sounds[He]._id) return ie._sounds[He];
          return null
        },
        _inactiveSound: function() {
          var ee = this;
          ee._drain();
          for (var ie = 0; ie < ee._sounds.length; ie++)
            if (ee._sounds[ie]._ended) return ee._sounds[ie].reset();
          return new Ue(ee)
        },
        _drain: function() {
          var ee = this,
            ie = ee._pool,
            He = 0,
            ye = 0;
          if (!(ee._sounds.length < ie)) {
            for (ye = 0; ye < ee._sounds.length; ye++) ee._sounds[ye]._ended && He++;
            for (ye = ee._sounds.length - 1; ye >= 0; ye--) {
              if (He <= ie) return;
              ee._sounds[ye]._ended && (ee._webAudio && ee._sounds[ye]._node && ee._sounds[ye]._node.disconnect(0), ee._sounds.splice(ye, 1), He--)
            }
          }
        },
        _getSoundIds: function(ee) {
          if ("undefined" === typeof ee) {
            for (var ie = [], He = 0; He < this._sounds.length; He++) ie.push(this._sounds[He]._id);
            return ie
          }
          return [ee]
        },
        _refreshBuffer: function(ee) {
          return ee._node.bufferSource = Me.ctx.createBufferSource(), ee._node.bufferSource.buffer = Fe[this._src], ee._panner ? ee._node.bufferSource.connect(ee._panner) : ee._node.bufferSource.connect(ee._node), ee._node.bufferSource.loop = ee._loop, ee._loop && (ee._node.bufferSource.loopStart = ee._start || 0, ee._node.bufferSource.loopEnd = ee._stop || 0), ee._node.bufferSource.playbackRate.setValueAtTime(ee._rate, Me.ctx.currentTime), this
        },
        _cleanBuffer: function(ee) {
          var ie = Me._navigator && Me._navigator.vendor.indexOf("Apple") >= 0;
          if (Me._scratchBuffer && ee.bufferSource && (ee.bufferSource.onended = null, ee.bufferSource.disconnect(0), ie)) try {
            ee.bufferSource.buffer = Me._scratchBuffer
          } catch (He) {}
          return ee.bufferSource = null, this
        },
        _clearSound: function(ee) {
          /MSIE |Trident\//.test(Me._navigator && Me._navigator.userAgent) || (ee.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
        }
      };
      var Ue = function(ee) {
        this._parent = ee, this.init()
      };
      Ue.prototype = {
        init: function() {
          var ee = this,
            ie = ee._parent;
          return ee._muted = ie._muted, ee._loop = ie._loop, ee._volume = ie._volume, ee._rate = ie._rate, ee._seek = 0, ee.AR = !0, ee._ended = !0, ee._sprite = "__default", ee._id = ++Me._counter, ie._sounds.push(ee), ee.create(), ee
        },
        create: function() {
          var ee = this,
            ie = ee._parent,
            He = Me._muted || ee._muted || ee._parent._muted ? 0 : ee._volume;
          return ie._webAudio ? (ee._node = "undefined" === typeof Me.ctx.createGain ? Me.ctx.createGainNode() : Me.ctx.createGain(), ee._node.gain.setValueAtTime(He, Me.ctx.currentTime), ee._node.paused = !0, ee._node.connect(Me.masterGain)) : Me.noAudio || (ee._node = Me._obtainHtml5Audio(), ee._errorFn = ee._errorListener.bind(ee), ee._node.addEventListener("error", ee._errorFn, !1), ee._loadFn = ee._loadListener.bind(ee), ee._node.addEventListener(Me._canPlayEvent, ee._loadFn, !1), ee._endFn = ee._endListener.bind(ee), ee._node.addEventListener("ended", ee._endFn, !1), ee._node.src = ie._src, ee._node.preload = !0 === ie._preload ? "auto" : ie._preload, ee._node.volume = He * Me.volume(), ee._node.load()), ee
        },
        reset: function() {
          var ee = this,
            ie = ee._parent;
          return ee._muted = ie._muted, ee._loop = ie._loop, ee._volume = ie._volume, ee._rate = ie._rate, ee._seek = 0, ee._rateSeek = 0, ee.AR = !0, ee._ended = !0, ee._sprite = "__default", ee._id = ++Me._counter, ee
        },
        _errorListener: function() {
          var ee = this;
          ee._parent._emit("loaderror", ee._id, ee._node.error ? ee._node.error.code : 0), ee._node.removeEventListener("error", ee._errorFn, !1)
        },
        _loadListener: function() {
          var ee = this,
            ie = ee._parent;
          ie._duration = Math.ceil(10 * ee._node.duration) / 10, 0 === Object.keys(ie._sprite).length && (ie._sprite = {
            __default: [0, 1e3 * ie._duration]
          }), "loaded" !== ie._state && (ie._state = "loaded", ie._emit("load"), ie._loadQueue()), ee._node.removeEventListener(Me._canPlayEvent, ee._loadFn, !1)
        },
        _endListener: function() {
          var ee = this,
            ie = ee._parent;
          ie._duration === 1 / 0 && (ie._duration = Math.ceil(10 * ee._node.duration) / 10, ie._sprite.__default[1] === 1 / 0 && (ie._sprite.__default[1] = 1e3 * ie._duration), ie._ended(ee)), ee._node.removeEventListener("ended", ee._endFn, !1)
        }
      };
      var Fe = {},
        Je = function(ee) {
          var ie = ee._src;
          if (Fe[ie]) return ee._duration = Fe[ie].duration, void ke(ee);
          if (/^data:[^;]+;base64,/.test(ie)) {
            for (var He = atob(ie.split(",")[1]), ye = new Uint8Array(He.length), be = 0; be < He.length; ++be) ye[be] = He.charCodeAt(be);
            Re(ye.buffer, ee)
          } else {
            var Me = new XMLHttpRequest;
            Me.open(ee._xhr.method, ie, !0), Me.withCredentials = ee._xhr.withCredentials, Me.responseType = "arraybuffer", ee._xhr.headers && Object.keys(ee._xhr.headers).forEach((function(ie) {
              Me.setRequestHeader(ie, ee._xhr.headers[ie])
            })), Me.onload = function() {
              var ie = (Me.status + "")[0];
              "0" === ie || "2" === ie || "3" === ie ? Re(Me.response, ee) : ee._emit("loaderror", null, "Failed loading audio file with status: " + Me.status + ".")
            }, Me.onerror = function() {
              ee._webAudio && (ee._html5 = !0, ee._webAudio = !1, ee._sounds = [], delete Fe[ie], ee.load())
            }, oe(Me)
          }
        },
        oe = function(ee) {
          try {
            ee.send()
          } catch (ie) {
            ee.onerror()
          }
        },
        Re = function(ee, ie) {
          var He = function() {
              ie._emit("loaderror", null, "Decoding audio data failed.")
            },
            ye = function(ee) {
              ee && ie._sounds.length > 0 ? (Fe[ie._src] = ee, ke(ie, ee)) : He()
            };
          "undefined" !== typeof Promise && 1 === Me.ctx.decodeAudioData.length ? Me.ctx.decodeAudioData(ee).then(ye).catch(He) : Me.ctx.decodeAudioData(ee, ye, He)
        },
        ke = function(ee, ie) {
          ie && !ee._duration && (ee._duration = ie.duration), 0 === Object.keys(ee._sprite).length && (ee._sprite = {
            __default: [0, 1e3 * ee._duration]
          }), "loaded" !== ee._state && (ee._state = "loaded", ee._emit("load"), ee._loadQueue())
        },
        qe = function() {
          if (Me.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? Me.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? Me.ctx = new webkitAudioContext : Me.usingWebAudio = !1
            } catch (be) {
              Me.usingWebAudio = !1
            }
            Me.ctx || (Me.usingWebAudio = !1);
            var ee = /iP(hone|od|ad)/.test(Me._navigator && Me._navigator.platform),
              ie = Me._navigator && Me._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              He = ie ? parseInt(ie[1], 10) : null;
            if (ee && He && He < 9) {
              var ye = /safari/.test(Me._navigator && Me._navigator.userAgent.toLowerCase());
              Me._navigator && !ye && (Me.usingWebAudio = !1)
            }
            Me.usingWebAudio && (Me.masterGain = "undefined" === typeof Me.ctx.createGain ? Me.ctx.createGainNode() : Me.ctx.createGain(), Me.masterGain.gain.setValueAtTime(Me._muted ? 0 : Me._volume, Me.ctx.currentTime), Me.masterGain.connect(Me.ctx.destination)), Me._setup()
          }
        };
      void 0 === (ye = function() {
        return {
          Howler: Me,
          Howl: Ke
        }
      }.apply(ie, [])) || (ee.exports = ye), ie.Howler = Me, ie.Howl = Ke, "undefined" !== typeof He.g ? (He.g.HowlerGlobal = be, He.g.Howler = Me, He.g.Howl = Ke, He.g.Sound = Ue) : "undefined" !== typeof window && (window.HowlerGlobal = be, window.Howler = Me, window.Howl = Ke, window.Sound = Ue)
    }(),
    function() {
      var ee;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(ee) {
        var ie = this;
        if (!ie.ctx || !ie.ctx.listener) return ie;
        for (var He = ie._howls.length - 1; He >= 0; He--) ie._howls[He].stereo(ee);
        return ie
      }, HowlerGlobal.prototype.pos = function(ee, ie, He) {
        var ye = this;
        return ye.ctx && ye.ctx.listener ? (ie = "number" !== typeof ie ? ye._pos[1] : ie, He = "number" !== typeof He ? ye._pos[2] : He, "number" !== typeof ee ? ye._pos : (ye._pos = [ee, ie, He], "undefined" !== typeof ye.ctx.listener.positionX ? (ye.ctx.listener.positionX.setTargetAtTime(ye._pos[0], Howler.ctx.currentTime, .1), ye.ctx.listener.positionY.setTargetAtTime(ye._pos[1], Howler.ctx.currentTime, .1), ye.ctx.listener.positionZ.setTargetAtTime(ye._pos[2], Howler.ctx.currentTime, .1)) : ye.ctx.listener.setPosition(ye._pos[0], ye._pos[1], ye._pos[2]), ye)) : ye
      }, HowlerGlobal.prototype.orientation = function(ee, ie, He, ye, be, Me) {
        var Ke = this;
        if (!Ke.ctx || !Ke.ctx.listener) return Ke;
        var Ue = Ke._orientation;
        return ie = "number" !== typeof ie ? Ue[1] : ie, He = "number" !== typeof He ? Ue[2] : He, ye = "number" !== typeof ye ? Ue[3] : ye, be = "number" !== typeof be ? Ue[4] : be, Me = "number" !== typeof Me ? Ue[5] : Me, "number" !== typeof ee ? Ue : (Ke._orientation = [ee, ie, He, ye, be, Me], "undefined" !== typeof Ke.ctx.listener.forwardX ? (Ke.ctx.listener.forwardX.setTargetAtTime(ee, Howler.ctx.currentTime, .1), Ke.ctx.listener.forwardY.setTargetAtTime(ie, Howler.ctx.currentTime, .1), Ke.ctx.listener.forwardZ.setTargetAtTime(He, Howler.ctx.currentTime, .1), Ke.ctx.listener.upX.setTargetAtTime(ye, Howler.ctx.currentTime, .1), Ke.ctx.listener.upY.setTargetAtTime(be, Howler.ctx.currentTime, .1), Ke.ctx.listener.upZ.setTargetAtTime(Me, Howler.ctx.currentTime, .1)) : Ke.ctx.listener.setOrientation(ee, ie, He, ye, be, Me), Ke)
      }, Howl.prototype.init = (ee = Howl.prototype.init, function(ie) {
        var He = this;
        return He._orientation = ie.orientation || [1, 0, 0], He._stereo = ie.stereo || null, He._pos = ie.pos || null, He._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof ie.coneInnerAngle ? ie.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof ie.coneOuterAngle ? ie.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof ie.coneOuterGain ? ie.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof ie.distanceModel ? ie.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof ie.maxDistance ? ie.maxDistance : 1e4,
          panningModel: "undefined" !== typeof ie.panningModel ? ie.panningModel : "HRTF",
          refDistance: "undefined" !== typeof ie.refDistance ? ie.refDistance : 1,
          rolloffFactor: "undefined" !== typeof ie.rolloffFactor ? ie.rolloffFactor : 1
        }, He._onstereo = ie.onstereo ? [{
          oR: ie.onstereo
        }] : [], He._onpos = ie.onpos ? [{
          oR: ie.onpos
        }] : [], He._onorientation = ie.onorientation ? [{
          oR: ie.onorientation
        }] : [], ee.call(this, ie)
      }), Howl.prototype.stereo = function(ee, He) {
        var ye = this;
        if (!ye._webAudio) return ye;
        if ("loaded" !== ye._state) return ye._queue.push({
          event: "stereo",
          action: function() {
            ye.stereo(ee, He)
          }
        }), ye;
        var be = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof He) {
          if ("number" !== typeof ee) return ye._stereo;
          ye._stereo = ee, ye._pos = [ee, 0, 0]
        }
        for (var Me = ye._getSoundIds(He), Ke = 0; Ke < Me.length; Ke++) {
          var Ue = ye._soundById(Me[Ke]);
          if (Ue) {
            if ("number" !== typeof ee) return Ue._stereo;
            Ue._stereo = ee, Ue._pos = [ee, 0, 0], Ue._node && (Ue._pannerAttr.panningModel = "equalpower", Ue._panner && Ue._panner.pan || ie(Ue, be), "spatial" === be ? "undefined" !== typeof Ue._panner.positionX ? (Ue._panner.positionX.setValueAtTime(ee, Howler.ctx.currentTime), Ue._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), Ue._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : Ue._panner.setPosition(ee, 0, 0) : Ue._panner.pan.setValueAtTime(ee, Howler.ctx.currentTime)), ye._emit("stereo", Ue._id)
          }
        }
        return ye
      }, Howl.prototype.pos = function(ee, He, ye, be) {
        var Me = this;
        if (!Me._webAudio) return Me;
        if ("loaded" !== Me._state) return Me._queue.push({
          event: "pos",
          action: function() {
            Me.pos(ee, He, ye, be)
          }
        }), Me;
        if (He = "number" !== typeof He ? 0 : He, ye = "number" !== typeof ye ? -.5 : ye, "undefined" === typeof be) {
          if ("number" !== typeof ee) return Me._pos;
          Me._pos = [ee, He, ye]
        }
        for (var Ke = Me._getSoundIds(be), Ue = 0; Ue < Ke.length; Ue++) {
          var Fe = Me._soundById(Ke[Ue]);
          if (Fe) {
            if ("number" !== typeof ee) return Fe._pos;
            Fe._pos = [ee, He, ye], Fe._node && (Fe._panner && !Fe._panner.pan || ie(Fe, "spatial"), "undefined" !== typeof Fe._panner.positionX ? (Fe._panner.positionX.setValueAtTime(ee, Howler.ctx.currentTime), Fe._panner.positionY.setValueAtTime(He, Howler.ctx.currentTime), Fe._panner.positionZ.setValueAtTime(ye, Howler.ctx.currentTime)) : Fe._panner.setPosition(ee, He, ye)), Me._emit("pos", Fe._id)
          }
        }
        return Me
      }, Howl.prototype.orientation = function(ee, He, ye, be) {
        var Me = this;
        if (!Me._webAudio) return Me;
        if ("loaded" !== Me._state) return Me._queue.push({
          event: "orientation",
          action: function() {
            Me.orientation(ee, He, ye, be)
          }
        }), Me;
        if (He = "number" !== typeof He ? Me._orientation[1] : He, ye = "number" !== typeof ye ? Me._orientation[2] : ye, "undefined" === typeof be) {
          if ("number" !== typeof ee) return Me._orientation;
          Me._orientation = [ee, He, ye]
        }
        for (var Ke = Me._getSoundIds(be), Ue = 0; Ue < Ke.length; Ue++) {
          var Fe = Me._soundById(Ke[Ue]);
          if (Fe) {
            if ("number" !== typeof ee) return Fe._orientation;
            Fe._orientation = [ee, He, ye], Fe._node && (Fe._panner || (Fe._pos || (Fe._pos = Me._pos || [0, 0, -.5]), ie(Fe, "spatial")), "undefined" !== typeof Fe._panner.orientationX ? (Fe._panner.orientationX.setValueAtTime(ee, Howler.ctx.currentTime), Fe._panner.orientationY.setValueAtTime(He, Howler.ctx.currentTime), Fe._panner.orientationZ.setValueAtTime(ye, Howler.ctx.currentTime)) : Fe._panner.setOrientation(ee, He, ye)), Me._emit("orientation", Fe._id)
          }
        }
        return Me
      }, Howl.prototype.pannerAttr = function() {
        var ee, He, ye, be = this,
          Me = arguments;
        if (!be._webAudio) return be;
        if (0 === Me.length) return be._pannerAttr;
        if (1 === Me.length) {
          if ("object" !== typeof Me[0]) return (ye = be._soundById(parseInt(Me[0], 10))) ? ye._pannerAttr : be._pannerAttr;
          ee = Me[0], "undefined" === typeof He && (ee.pannerAttr || (ee.pannerAttr = {
            coneInnerAngle: ee.coneInnerAngle,
            coneOuterAngle: ee.coneOuterAngle,
            coneOuterGain: ee.coneOuterGain,
            distanceModel: ee.distanceModel,
            maxDistance: ee.maxDistance,
            refDistance: ee.refDistance,
            rolloffFactor: ee.rolloffFactor,
            panningModel: ee.panningModel
          }), be._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof ee.pannerAttr.coneInnerAngle ? ee.pannerAttr.coneInnerAngle : be._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof ee.pannerAttr.coneOuterAngle ? ee.pannerAttr.coneOuterAngle : be._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof ee.pannerAttr.coneOuterGain ? ee.pannerAttr.coneOuterGain : be._coneOuterGain,
            distanceModel: "undefined" !== typeof ee.pannerAttr.distanceModel ? ee.pannerAttr.distanceModel : be._distanceModel,
            maxDistance: "undefined" !== typeof ee.pannerAttr.maxDistance ? ee.pannerAttr.maxDistance : be._maxDistance,
            refDistance: "undefined" !== typeof ee.pannerAttr.refDistance ? ee.pannerAttr.refDistance : be._refDistance,
            rolloffFactor: "undefined" !== typeof ee.pannerAttr.rolloffFactor ? ee.pannerAttr.rolloffFactor : be._rolloffFactor,
            panningModel: "undefined" !== typeof ee.pannerAttr.panningModel ? ee.pannerAttr.panningModel : be._panningModel
          })
        } else 2 === Me.length && (ee = Me[0], He = parseInt(Me[1], 10));
        for (var Ke = be._getSoundIds(He), Ue = 0; Ue < Ke.length; Ue++)
          if (ye = be._soundById(Ke[Ue])) {
            var Fe = ye._pannerAttr;
            Fe = {
              coneInnerAngle: "undefined" !== typeof ee.coneInnerAngle ? ee.coneInnerAngle : Fe.coneInnerAngle,
              coneOuterAngle: "undefined" !== typeof ee.coneOuterAngle ? ee.coneOuterAngle : Fe.coneOuterAngle,
              coneOuterGain: "undefined" !== typeof ee.coneOuterGain ? ee.coneOuterGain : Fe.coneOuterGain,
              distanceModel: "undefined" !== typeof ee.distanceModel ? ee.distanceModel : Fe.distanceModel,
              maxDistance: "undefined" !== typeof ee.maxDistance ? ee.maxDistance : Fe.maxDistance,
              refDistance: "undefined" !== typeof ee.refDistance ? ee.refDistance : Fe.refDistance,
              rolloffFactor: "undefined" !== typeof ee.rolloffFactor ? ee.rolloffFactor : Fe.rolloffFactor,
              panningModel: "undefined" !== typeof ee.panningModel ? ee.panningModel : Fe.panningModel
            };
            var Je = ye._panner;
            Je ? (Je.coneInnerAngle = Fe.coneInnerAngle, Je.coneOuterAngle = Fe.coneOuterAngle, Je.coneOuterGain = Fe.coneOuterGain, Je.distanceModel = Fe.distanceModel, Je.maxDistance = Fe.maxDistance, Je.refDistance = Fe.refDistance, Je.rolloffFactor = Fe.rolloffFactor, Je.panningModel = Fe.panningModel) : (ye._pos || (ye._pos = be._pos || [0, 0, -.5]), ie(ye, "spatial"))
          } return be
      }, Sound.prototype.init = function(ee) {
        return function() {
          var ie = this,
            He = ie._parent;
          ie._orientation = He._orientation, ie._stereo = He._stereo, ie._pos = He._pos, ie._pannerAttr = He._pannerAttr, ee.call(this), ie._stereo ? He.stereo(ie._stereo) : ie._pos && He.pos(ie._pos[0], ie._pos[1], ie._pos[2], ie._id)
        }
      }(Sound.prototype.init), Sound.prototype.reset = function(ee) {
        return function() {
          var ie = this,
            He = ie._parent;
          return ie._orientation = He._orientation, ie._stereo = He._stereo, ie._pos = He._pos, ie._pannerAttr = He._pannerAttr, ie._stereo ? He.stereo(ie._stereo) : ie._pos ? He.pos(ie._pos[0], ie._pos[1], ie._pos[2], ie._id) : ie._panner && (ie._panner.disconnect(0), ie._panner = void 0, He._refreshBuffer(ie)), ee.call(this)
        }
      }(Sound.prototype.reset);
      var ie = function(ee, ie) {
        "spatial" === (ie = ie || "spatial") ? (ee._panner = Howler.ctx.createPanner(), ee._panner.coneInnerAngle = ee._pannerAttr.coneInnerAngle, ee._panner.coneOuterAngle = ee._pannerAttr.coneOuterAngle, ee._panner.coneOuterGain = ee._pannerAttr.coneOuterGain, ee._panner.distanceModel = ee._pannerAttr.distanceModel, ee._panner.maxDistance = ee._pannerAttr.maxDistance, ee._panner.refDistance = ee._pannerAttr.refDistance, ee._panner.rolloffFactor = ee._pannerAttr.rolloffFactor, ee._panner.panningModel = ee._pannerAttr.panningModel, "undefined" !== typeof ee._panner.positionX ? (ee._panner.positionX.setValueAtTime(ee._pos[0], Howler.ctx.currentTime), ee._panner.positionY.setValueAtTime(ee._pos[1], Howler.ctx.currentTime), ee._panner.positionZ.setValueAtTime(ee._pos[2], Howler.ctx.currentTime)) : ee._panner.setPosition(ee._pos[0], ee._pos[1], ee._pos[2]), "undefined" !== typeof ee._panner.orientationX ? (ee._panner.orientationX.setValueAtTime(ee._orientation[0], Howler.ctx.currentTime), ee._panner.orientationY.setValueAtTime(ee._orientation[1], Howler.ctx.currentTime), ee._panner.orientationZ.setValueAtTime(ee._orientation[2], Howler.ctx.currentTime)) : ee._panner.setOrientation(ee._orientation[0], ee._orientation[1], ee._orientation[2])) : (ee._panner = Howler.ctx.createStereoPanner(), ee._panner.pan.setValueAtTime(ee._stereo, Howler.ctx.currentTime)), ee._panner.connect(ee._node), ee.AR || ee._parent.pause(ee._id, !0).play(ee._id, !0)
      }
    }()
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);