export const id = 294;
export const ids = [294];
export const modules = {
  41609: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => VH
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be);
    const Ke = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      Ue = 3e3;

    function Fe(ee) {
      return ee.down && ee.inPlay && !ee.bound
    }

    function Je(ee, ie) {
      let He = 0,
        ye = ee.length;
      for (; He < ye;) {
        const be = He + ye >> 1;
        ee[be].atMs <= ie ? He = be + 1 : ye = be
      }
      return He - 1
    }

    function oe(ee) {
      let {
        code: ie,
        unbound: He
      } = ee;
      return `${ie}:${He}`
    }

    function Re(ee, ie) {
      return ie[1] - ee[1] || (ee[0] < ie[0] ? -1 : 1)
    }
    const ke = {
      Mouse1: "Left click",
      Mouse2: "Middle click",
      Mouse3: "Right click",
      Mouse4: "Back button",
      Mouse5: "Forward button",
      Space: "Space",
      Escape: "Esc",
      ShiftLeft: "Shift",
      ShiftRight: "Right Shift",
      ControlLeft: "Ctrl",
      ControlRight: "Right Ctrl",
      AltLeft: "Alt",
      AltRight: "Right Alt",
      MetaLeft: "Meta",
      MetaRight: "Right Meta",
      ArrowUp: "\u2191",
      ArrowDown: "\u2193",
      ArrowLeft: "\u2190",
      ArrowRight: "\u2192",
      Minus: "-",
      Equal: "=",
      BracketLeft: "[",
      BracketRight: "]",
      Backslash: "\\",
      IntlBackslash: "\\",
      Semicolon: ";",
      Quote: "'",
      Backquote: "`",
      Comma: ",",
      Period: ".",
      Slash: "/",
      Unidentified: "Another key"
    };

    function qe(ee) {
      var ie;
      const He = ke[ee];
      if (void 0 !== He) return He;
      const ye = null !== (ie = /^(?:Key|Digit)(.)$/.exec(ee)) && void 0 !== ie ? ie : /^Numpad(.+)$/.exec(ee);
      return null !== ye ? ee.startsWith("Numpad") ? `Num ${ye[1]}` : ye[1] : ee
    }
    const fe = 250,
      Te = 60;
    var pe = He(1228);
    const Xe = 6;

    function ze(ee) {
      const ie = Math.max(0, Math.floor(ee / 1e3)),
        He = Math.floor(ie / 3600),
        ye = Math.floor(ie % 3600 / 60),
        be = String(ie % 60).padStart(2, "0");
      return He > 0 ? `${He}:${String(ye).padStart(2,"0")}:${be}` : `${ye}:${be}`
    }

    function Be(ee, ie) {
      return getComputedStyle(ee).getPropertyValue(ie).trim()
    }

    function Ee(ee, ie) {
      switch (ee.kind) {
        case "note":
          return ee.label;
        case "hidden":
          return ie.tabHidden;
        default:
          return ie[ee.kind]
      }
    }

    function ge(ee) {
      let {
        draw: ie,
        className: He
      } = ee;
      const be = (0, ye.useRef)(null);
      return (0, ye.useEffect)((() => {
        const ee = be.current,
          He = ee.getContext("2d");
        if (null === ie || null === He) return;
        const {
          clientWidth: ye,
          clientHeight: Me
        } = ee, Ke = window.devicePixelRatio;
        ee.width = Math.round(ye * Ke), ee.height = Math.round(Me * Ke), He.setTransform(Ke, 0, 0, Ke, 0, 0), ie(He, ye, Me, ee)
      }), [ie]), (0, pe.jsx)("canvas", {
        ref: be,
        className: He
      })
    }

    function Oe(ee) {
      let {
        controller: ie,
        frames: He,
        input: be,
        markers: Me,
        inactiveRanges: Ke,
        videoGaps: Je,
        labels: oe
      } = ee;
      const {
        timeline: ke
      } = ie, Oe = (0, ye.useRef)(null), [de, We] = (0, ye.useState)(0), [te, Ze] = (0, ye.useState)(null), we = (0, ye.useRef)(null), De = Math.max(1, ke.durationMs);
      ! function(ee, ie, He) {
        (0, ye.useEffect)((() => {
          let ye = 0,
            be = NaN;
          const Me = () => {
            var Ke;
            ye = requestAnimationFrame(Me);
            const Ue = (null !== (Ke = ie.current) && void 0 !== Ke ? Ke : ee.getPositionMs()) / Math.max(1, ee.timeline.durationMs) * 100;
            Ue !== be && (be = Ue, He.current.style.setProperty("--brv-position", `${Ue}%`))
          };
          return Me(), () => {
            cancelAnimationFrame(ye)
          }
        }), [ee])
      }(ie, we, Oe), (0, ye.useEffect)((() => {
        const ee = Oe.current,
          ie = new ResizeObserver((() => {
            We(ee.clientWidth)
          }));
        return ie.observe(ee), () => {
          ie.disconnect()
        }
      }), []);
      const Pe = (0, ye.useMemo)((() => 0 === de ? null : function(ee, ie, He) {
          const ye = Math.max(1, Math.min(He, Math.floor(ie.durationMs / fe))),
            be = ie.durationMs / ye,
            Me = new Array(ye).fill(0);
          for (const Ke of ee) ie.contains(Ke.atMs) && Me[Math.min(ye - 1, Math.floor(ie.toPosition(Ke.atMs) / be))]++;
          return {
            bucketMs: be,
            fps: Me.map((ee => 0 === ee ? null : 1e3 * ee / be))
          }
        }(He, ke, Math.round(de))), [He, ke, de]),
        Ae = ie.lowFps,
        Ye = (0, ye.useMemo)((() => null === Pe ? null : (ee, ie, He, ye) => {
          ! function(ee, ie, He, ye, be, Me) {
            ee.clearRect(0, 0, He, ye);
            const Ke = He / ie.fps.length;
            ie.fps.forEach(((ie, He) => {
              if (null === ie) return;
              const Ue = Math.max(1, Math.min(ie, Te) / Te * ye);
              ee.fillStyle = ie < be ? Me.lowFps : Me.fps, ee.fillRect(He * Ke, ye - Ue, Math.max(1, Ke), Ue)
            }))
          }(ee, Pe, ie, He, Ae, {
            fps: Be(ye, "--brv-fps"),
            lowFps: Be(ye, "--brv-low-fps")
          })
        }), [Pe, Ae]),
        Ve = (0, ye.useMemo)((() => {
          if (0 === de || !be.inputRecorded) return null;
          const ee = function(ee, ie, He) {
            const ye = Math.max(1, ie.durationMs) / He,
              be = new Array(He).fill(0),
              Me = new Array(He).fill(0);
            for (const Ke of ee) {
              if (!Ke.down || !ie.contains(Ke.atMs)) continue;
              const ee = Math.min(He - 1, Math.floor(ie.toPosition(Ke.atMs) / ye));
              be[ee]++, Fe(Ke) && Me[ee]++
            }
            return {
              presses: be,
              unbound: Me
            }
          }(be.keys, ke, Math.max(1, Math.round(de)));
          return (ie, He, ye, be) => {
            ! function(ee, ie, He, ye, be) {
              ee.clearRect(0, 0, He, ye);
              const Me = He / ie.presses.length;
              ie.presses.forEach(((He, Ke) => {
                if (0 === He) return;
                const Ue = ie.unbound[Ke] > 0;
                ee.globalAlpha = Ue ? 1 : Math.min(1, .35 + .15 * He), ee.fillStyle = Ue ? be.unbound : be.presses, ee.fillRect(Ke * Me, 0, Math.max(Ue ? 2 : 1, Me), ye)
              })), ee.globalAlpha = 1
            }(ie, ee, He, ye, {
              presses: Be(be, "--brv-key-press"),
              unbound: Be(be, "--brv-key-unbound")
            })
          }
        }), [be, ke, de]),
        ae = (0, ye.useMemo)((() => function(ee) {
          const ie = [];
          for (const ye of ee) {
            var He;
            if (!Fe(ye)) continue;
            let ee = ie.at(-1);
            (void 0 === ee || ye.atMs - ee.endMs > Ue) && (ee = {
              startMs: ye.atMs,
              endMs: ye.atMs,
              counts: new Map
            }, ie.push(ee)), ee.endMs = ye.atMs, ee.counts.set(ye.code, (null !== (He = ee.counts.get(ye.code)) && void 0 !== He ? He : 0) + 1)
          }
          return ie.map((ee => {
            let {
              startMs: ie,
              endMs: He,
              counts: ye
            } = ee;
            return {
              startMs: ie,
              endMs: He,
              keys: [...ye].sort(Re)
            }
          }))
        }(be.keys.filter((ee => ke.contains(ee.atMs))))), [be.keys, ke]),
        ce = ee => ke.toPosition(ee) / De * 100,
        xe = ee => ce(ee) / 100 * de,
        Le = ee => {
          const ie = Oe.current.getBoundingClientRect();
          return {
            px: ee - ie.left,
            positionMs: Math.max(0, Math.min(ie.width, ee - ie.left)) / ie.width * De
          }
        },
        Ce = null === te || 0 === de ? null : {
          px: te,
          positionMs: Math.max(0, Math.min(de, te)) / de * De
        },
        ve = null === Ce || null === Pe ? null : function(ee, ie) {
          const He = Math.max(0, Math.min(ee.fps.length - 1, Math.floor(ie / ee.bucketMs))),
            ye = ee.fps[He];
          return null === ye ? null : Math.round(ye)
        }(Pe, Ce.positionMs),
        ue = null !== Ce && Je.some((ee => Ce.px >= xe(ee.startMs) && Ce.px < xe(ee.endMs))),
        me = null === Ce ? void 0 : Me.find((ee => {
          var ie;
          return Ce.px >= xe(ee.atMs) - Xe && Ce.px <= xe(null !== (ie = ee.endMs) && void 0 !== ie ? ie : ee.atMs) + Xe
        })),
        le = null === Ce ? void 0 : ae.find((ee => Ce.px >= xe(ee.startMs) - Xe && Ce.px <= xe(ee.endMs) + Xe));
      return (0, pe.jsxs)("div", {
        ref: Oe,
        className: be.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: ee => {
          ee.currentTarget.setPointerCapture(ee.pointerId);
          const ie = Le(ee.clientX);
          Ze(ie.px), we.current = ie.positionMs
        },
        onPointerMove: ee => {
          const ie = Le(ee.clientX);
          Ze(ie.px), null !== we.current && (we.current = ie.positionMs)
        },
        onPointerUp: ee => {
          null !== we.current && (ie.seekToPosition(Le(ee.clientX).positionMs), we.current = null)
        },
        onPointerCancel: () => {
          we.current = null, Ze(null)
        },
        onPointerLeave: () => {
          Ze(null)
        },
        children: [(0, pe.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, pe.jsx)(ge, {
            draw: Ye,
            className: "brv-seekbar-canvas"
          }), Ke.map((ee => {
            const ie = ce(ee.startMs);
            return (0, pe.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${ie}%`,
                width: ce(ee.endMs) - ie + "%"
              }
            }, ee.startMs)
          })), Je.map((ee => {
            const ie = ce(ee.startMs);
            return (0, pe.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${ie}%`,
                width: ce(ee.endMs) - ie + "%"
              }
            }, ee.startMs)
          })), (0, pe.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== Ce && (0, pe.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: Ce.px
            }
          })]
        }), be.inputRecorded && (0, pe.jsx)(ge, {
          draw: Ve,
          className: "brv-seekbar-input"
        }), (0, pe.jsx)("div", {
          className: "brv-seekbar-markers",
          children: Me.map(((ee, ie) => {
            var He;
            const ye = ce(ee.atMs),
              be = void 0 !== ee.endMs;
            return (0, pe.jsx)("div", {
              className: `brv-marker brv-marker-${ee.kind}${be?" brv-marker-range":""}`,
              style: {
                left: `${ye}%`,
                width: be ? ce(null !== (He = ee.endMs) && void 0 !== He ? He : ee.atMs) - ye + "%" : void 0
              }
            }, ie)
          }))
        }), (0, pe.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== Ce && (0, pe.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: Ce.px
          },
          children: [ze(Ce.positionMs), null !== ve && ` \xb7 ${oe.fps(ve)}`, void 0 !== me && ` \xb7 ${Ee(me,oe)}`, ue && ` \xb7 ${oe.videoGap}`, void 0 !== le && ` \xb7 ${oe.unboundKeys((Se=le.keys,Se.map((ee=>{let[ie,He]=ee;return He>1?`${qe(ie)} \xd7${He}`:qe(ie)})).join(", ")))}`]
        })]
      });
      var Se
    }
    var de = He(5075),
      We = He(1127),
      te = He(4947),
      Ze = He(1320),
      we = He(1438),
      De = He(1323),
      Pe = He(7123),
      Ae = He(5628),
      Ye = He(5619);
    const Ve = [.5, 1, 2, 4, 8, 16];
    var ae = He(41612);

    function ce(ee) {
      const ie = ee.filter((ee => ee.endMs > ee.startMs)).sort(((ee, ie) => ee.startMs - ie.startMs)),
        He = [];
      for (const ye of ie) {
        const ee = He.at(-1);
        void 0 !== ee && ye.startMs <= ee.endMs ? ee.endMs = Math.max(ee.endMs, ye.endMs) : He.push({
          ...ye
        })
      }
      return He
    }
    class xe {
      constructor(ee) {
        this.zp = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.zp = ce(ee), this.positionStarts = [];
        let ie = 0;
        for (const He of this.zp) this.positionStarts.push(ie), ie += He.endMs - He.startMs;
        this.durationMs = ie
      }
      get startMs() {
        var ee, ie;
        return null !== (ee = null === (ie = this.zp[0]) || void 0 === ie ? void 0 : ie.startMs) && void 0 !== ee ? ee : 0
      }
      get endMs() {
        var ee, ie;
        return null !== (ee = null === (ie = this.zp.at(-1)) || void 0 === ie ? void 0 : ie.endMs) && void 0 !== ee ? ee : 0
      }
      toPosition(ee) {
        for (let ie = 0; ie < this.zp.length; ie++) {
          const He = this.zp[ie];
          if (ee < He.endMs) return this.positionStarts[ie] + Math.max(0, ee - He.startMs)
        }
        return this.durationMs
      }
      toTime(ee) {
        const ie = Math.max(0, Math.min(this.durationMs, ee));
        for (let He = this.zp.length - 1; He >= 0; He--)
          if (ie >= this.positionStarts[He]) return this.zp[He].startMs + (ie - this.positionStarts[He]);
        return this.startMs
      }
      contains(ee) {
        return this.zp.some((ie => ee >= ie.startMs && ee < ie.endMs))
      }
      nextPlayableTime(ee) {
        for (const ie of this.zp) {
          if (ee < ie.startMs) return ie.startMs;
          if (ee < ie.endMs) return ee
        }
        return null
      }
    }

    function Le(ee) {
      return [...ee].sort(((ee, ie) => ee.startMs - ie.startMs))
    }

    function Ce(ee, ie) {
      let He = 1 / 0,
        ye = -1 / 0;
      const be = ee => {
        He = Math.min(He, ee), ye = Math.max(ye, ee)
      };
      for (const Me of [...ee.videoSegments, ...ee.telemetryChunks]) be(Me.startMs), be(Me.endMs);
      for (const Me of ee.domEvents) be(ie.toEpoch(Me.timestamp));
      return He < ye ? {
        startMs: He,
        endMs: ye
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class ve {
      constructor(ee, ie) {
        this.wallNowMs = ie, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = ee, this.anchorWallMs = ie()
      }
      get playing() {
        return this.playingState
      }
      get speed() {
        return this.speedState
      }
      timeMs() {
        return this.timeAtWall(this.wallNowMs())
      }
      timeAtWall(ee) {
        return this.playingState ? this.anchorTimeMs + (ee - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(ee) {
        this.anchorTimeMs = ee, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(ee) {
        this.reanchor(), this.speedState = ee
      }
      reanchor() {
        const ee = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(ee), this.anchorWallMs = ee
      }
    }
    const ue = "bloxd-clock";
    class me {
      constructor(ee) {
        this.samples = void 0, this.samples = [];
        for (const He of ee) {
          var ie;
          const ee = He.data;
          He.type === ae.c.Custom && (null === ee || void 0 === ee ? void 0 : ee.tag) === ue && "number" === typeof(null === (ie = ee.payload) || void 0 === ie ? void 0 : ie.epochMs) && this.samples.push({
            domMs: He.timestamp,
            offsetMs: ee.payload.epochMs - He.timestamp
          })
        }
        this.samples.sort(((ee, ie) => ee.domMs - ie.domMs))
      }
      toEpoch(ee) {
        return ee + this.offsetAtDom(ee)
      }
      toDom(ee) {
        return ee - this.offsetAtDom(ee)
      }
      offsetAtDom(ee) {
        var ie, He;
        let ye = 0,
          be = this.samples.length - 1;
        for (; ye < be;) {
          const ie = Math.ceil((ye + be) / 2);
          this.samples[ie].domMs <= ee ? ye = ie : be = ie - 1
        }
        return null !== (ie = null === (He = this.samples[ye]) || void 0 === He ? void 0 : He.offsetMs) && void 0 !== ie ? ie : 0
      }
    }
    const le = new Set([ae.d.MouseMove, ae.d.MouseInteraction, ae.d.Scroll, ae.d.Input, ae.d.TouchMove, ae.d.Drag]),
      Se = "bloxd-active",
      ne = "player_death",
      je = "error",
      se = {
        $exception: "error",
        [je]: "error",
        death: "death",
        [ne]: "death"
      };

    function Ie(ee, ie, He) {
      return function(ee, ie) {
        const He = [];
        for (const ye of ee) {
          let ee = ye.startMs;
          for (const be of ie) be.endMs <= ee || be.startMs >= ye.endMs || (be.startMs > ee && He.push({
            startMs: ee,
            endMs: be.startMs
          }), ee = Math.max(ee, be.endMs));
          ee < ye.endMs && He.push({
            startMs: ee,
            endMs: ye.endMs
          })
        }
        return He
      }(function(ee) {
        const ie = [];
        for (const He of ee) {
          const ee = ie.at(-1);
          void 0 !== ee && He.atMs - ee.endMs <= 5e3 ? ee.endMs = He.atMs : ie.push({
            startMs: He.atMs,
            endMs: He.atMs
          })
        }
        return ie
      }(ee), ce([...ie, ...He])).filter((ee => ee.endMs - ee.startMs >= 1e3))
    }

    function he(ee) {
      var ie, He, ye;
      return ee.type === ae.c.IncrementalSnapshot ? le.has(null !== (He = null === (ye = ee.data) || void 0 === ye ? void 0 : ye.source) && void 0 !== He ? He : -1) : ee.type === ae.c.Custom && (null === (ie = ee.data) || void 0 === ie ? void 0 : ie.tag) === Se
    }

    function Ne(ee, ie) {
      const He = [];
      for (const Ke of ee)
        if (Ke.type === ae.c.Custom) {
          var ye;
          const ee = null === (ye = Ke.data) || void 0 === ye ? void 0 : ye.tag,
            be = void 0 === ee ? void 0 : se[ee];
          void 0 !== be && He.push({
            kind: be,
            atMs: ie.toEpoch(Ke.timestamp)
          })
        } else if (Ke.type === ae.c.Plugin) {
        var be, Me;
        const ee = Ke.data;
        "rrweb/console@1" !== (null === ee || void 0 === ee ? void 0 : ee.plugin) || "error" !== (null === (be = ee.payload) || void 0 === be ? void 0 : be.level) && "assert" !== (null === (Me = ee.payload) || void 0 === Me ? void 0 : Me.level) || He.push({
          kind: "error",
          atMs: ie.toEpoch(Ke.timestamp)
        })
      }
      return He
    }
    const Ge = 3e6;
    class re {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ge;
        this.fetchUrls = ee, this.onUrls = ie, this.wallNowMs = He, this.refreshableAfterMs = ye, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = He()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const ee = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        ee > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), ee) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(ee) {
        this.inFlight = !0;
        const ie = this.wallNowMs();
        this.lastRefreshWallMs = ie;
        let He = !1;
        ee().then((ee => {
          this.destroyed || (this.urlsFetchedAtWallMs = ie, this.onUrls(ee))
        })).catch((ee => {
          console.error("Failed to refresh the replay's URLs.", ee), He = !0
        })).finally((() => {
          this.inFlight = !1, He && this.request()
        }))
      }
    }
    class Qe {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ge;
        this.source = ee, this.description = ie, this.wallNowMs = He, this.refreshableAfterMs = ye, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(ee) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const ie = this.wallNowMs();
        for (const He of ee) this.entries.set(He.sequence, {
          urls: He,
          fetchedAtWallMs: ie
        })
      }
      get(ee) {
        const ie = this.getFresh(ee);
        return null !== ie ? ie : null === this.source || this.unavailable.has(ee) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(ee) {
        return null === this.getFresh(ee) && !this.unavailable.has(ee)
      }
      request(ee) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const ie = ee.filter((ee => this.needs(ee)));
        ie.length > 0 && this.fetch(this.source, ie.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(ee) {
        const ie = this.entries.get(ee);
        return void 0 === ie ? null : null === this.source || this.wallNowMs() - ie.fetchedAtWallMs < this.refreshableAfterMs ? ie.urls : null
      }
      fetch(ee, ie) {
        this.inFlight = !0;
        const He = this.wallNowMs();
        ee.load(ie).then((ee => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const ye = new Set;
          for (const ie of ee) this.entries.set(ie.sequence, {
            urls: ie,
            fetchedAtWallMs: He
          }), ye.add(ie.sequence);
          for (const He of ie) ye.has(He) || (console.warn(`Replay sequence ${He} has no ${this.description}.`), this.unavailable.add(He))
        })).catch((ee => {
          console.error(`Failed to fetch the replay's ${this.description}.`, ee), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class ei {
      constructor(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Ge;
        this.load = ie, this.onLoaded = He, this.onFailed = ye, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = ii([]), this.hidden = [], this.destroyed = !1, this.chunks = [...ee].sort(((ee, ie) => ee.startMs - ie.startMs)).map((ee => ({
          chunk: ee,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new Qe(be, "telemetry URLs", Me, Ke), this.urls.reset(yi(ee))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((ee => "loaded" === ee.status)).length
      }
      update(ee, ie, He) {
        if (null === this.load || this.destroyed) return;
        const ye = ie.toPosition(ee),
          be = ie.toTime(ye - 1e4),
          Me = ie.toTime(ye + 6e4 * Math.max(1, He)),
          Ke = ie.toTime(ye + 12e4 * Math.max(1, He)),
          Ue = this.chunks.filter((ee => "idle" === ee.status && ee.chunk.endMs >= be && ee.chunk.startMs <= Ke)).sort(((ie, He) => bi(ee, ie.chunk) - bi(ee, He.chunk)));
        this.urls.request(Ue.flatMap((ee => {
          var ie;
          let {
            chunk: He
          } = ee;
          return null !== (ie = He.sequence) && void 0 !== ie ? ie : []
        })));
        for (const Fe of Ue) {
          if (this.loading >= 3) return;
          const ee = Fe.chunk.startMs <= Me ? this.getUrl(Fe.chunk) : null;
          null !== ee && this.startLoad(Fe, ee, this.load)
        }
      }
      replaceUrls(ee) {
        this.urls.reset(yi(ee));
        for (const ie of this.chunks) {
          const He = ee.find((ee => ee.startMs === ie.chunk.startMs && ee.endMs === ie.chunk.endMs));
          void 0 !== He && (ie.chunk = He, "failed" === ie.status && (ie.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(ee) {
        var ie;
        if (void 0 === ee.sequence) return null !== (ie = ee.url) && void 0 !== ie ? ie : null;
        const He = this.urls.get(ee.sequence);
        return "string" === typeof He ? null : He.url
      }
      startLoad(ee, ie, He) {
        ee.status = "loading", ee.attempts++, this.loading++, He(ie).then((ie => {
          this.destroyed || (ee.status = "loaded", ee.telemetry = ie, this.merge(), this.onLoaded())
        })).catch((ie => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${ee.chunk.startMs}-${ee.chunk.endMs}.`, ie), ee.status = ee.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const ee = [];
        let ie = !1;
        for (const ye of this.chunks) {
          const He = ee.at(-1);
          if (null === ye.telemetry) {
            ie = !1;
            continue
          }
          const be = Hi(ye.telemetry, ye.chunk);
          void 0 !== He && ie && ye.chunk.startMs <= He.endMs + 1e3 ? (He.telemetry.push(be), He.endMs = ye.chunk.endMs) : (ee.push({
            telemetry: [be],
            endMs: ye.chunk.endMs
          }), ie = !0)
        }
        const He = ee.map((ee => function(ee, ie) {
          const He = ee.actions.at(-1);
          if (void 0 === He || 0 === He.bits) return ee;
          return {
            ...ee,
            actions: [...ee.actions, {
              atMs: ie,
              bits: 0
            }]
          }
        }(ii(ee.telemetry), ee.endMs)));
        this.merged = ii(He), this.hidden = He.flatMap(((ie, He) => function(ee, ie) {
          const He = [];
          let ye = null;
          for (const {
              atMs: be,
              event: Me
            }
            of ee.events) "hidden" === Me && null === ye ? ye = be : "visible" === Me && null !== ye && (He.push({
            startMs: ye,
            endMs: be
          }), ye = null);
          return null !== ye && He.push({
            startMs: ye,
            endMs: ie
          }), ce(He)
        }(ie, ee[He].endMs)))
      }
    }

    function ii(ee) {
      return {
        inputRecorded: ee.some((ee => ee.keys.length > 0)),
        frames: ee.flatMap((ee => ee.frames)),
        states: ee.flatMap((ee => ee.states)),
        events: ee.flatMap((ee => ee.events)),
        actions: ee.flatMap((ee => ee.actions)),
        keys: ee.flatMap((ee => ee.keys))
      }
    }

    function Hi(ee, ie) {
      const {
        actions: He
      } = ee;
      return !ee.inputRecorded || He.length > 0 && He[0].atMs <= ie.startMs + 1 ? ee : {
        ...ee,
        actions: [{
          atMs: ie.startMs,
          bits: 0
        }, ...He]
      }
    }

    function yi(ee) {
      return ee.flatMap((ee => {
        let {
          sequence: ie,
          url: He
        } = ee;
        return void 0 === ie || void 0 === He ? [] : [{
          sequence: ie,
          url: He
        }]
      }))
    }

    function bi(ee, ie) {
      return ee < ie.startMs ? ie.startMs - ee : ee > ie.endMs ? 2 * (ee - ie.endMs) : 0
    }
    class Mi {
      constructor(ee, ie, He, ye) {
        this.data = ee, this.domClock = ie, this.timeline = He, this.options = ye, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(ee, ie) {
          return ee.filter(he).map((ee => ie.toEpoch(ee.timestamp)))
        }(ee.domEvents, ie), this.telemetry = new ei(ee.telemetryChunks, ye.loadTelemetryChunk, (() => {
          this.rebuild()
        }), ye.onTelemetryFailed, ye.telemetryUrls), this.rebuild()
      }
      get markers() {
        return this.markerList
      }
      get inactiveRanges() {
        return this.inactiveRangeList
      }
      get videoGaps() {
        return this.videoGapRanges
      }
      get frames() {
        return this.telemetry.telemetry.frames
      }
      get input() {
        return this.telemetry.telemetry
      }
      get telemetryChunksLoaded() {
        return this.telemetry.loadedCount
      }
      update(ee, ie) {
        this.telemetry.update(ee, this.timeline, ie)
      }
      replaceTelemetryUrls(ee) {
        this.telemetry.replaceUrls(ee)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(ee) {
        return this.telemetry.hiddenRanges.some(Ki(ee))
      }
      isVideoGapAt(ee) {
        return this.videoGapRanges.some(Ki(ee))
      }
      rebuild() {
        const ee = this.telemetry.telemetry,
          ie = this.telemetry.hiddenRanges;
        this.videoGapRanges = Ie(ee.frames, this.data.videoSegments, ie), this.inactiveRangeList = function(ee, ie, He, ye) {
          const be = [...ie];
          if (ee.length > 0) {
            const ie = [He.startMs, ...ee, He.endMs];
            for (let ee = 1; ee < ie.length; ee++) {
              const He = ie[ee - 1],
                Me = ie[ee] - 1e3;
              Me - He >= ye && be.push({
                startMs: He,
                endMs: Me
              })
            }
          }
          return ce(be).filter((ee => ee.endMs - ee.startMs >= ye))
        }(this.activityTimes, ie, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(ee) {
          const {
            timeline: ie
          } = ee;
          return [...Ne(ee.domEvents, ee.domClock), ...ee.telemetry.events.filter((ee => {
            let {
              event: ie
            } = ee;
            return "contextLost" === ie
          })).map((ee => {
            let {
              atMs: ie
            } = ee;
            return {
              kind: "graphicsCrash",
              atMs: ie
            }
          })), ...ee.hidden.map((ee => ({
            kind: "hidden",
            atMs: ee.startMs,
            endMs: ee.endMs
          }))), ...ee.extraMarkers].filter((ee => ee.atMs >= ie.startMs && ee.atMs <= ie.endMs && (ie.contains(ee.atMs) || ie.contains(ee.atMs - 1)))).sort(((ee, ie) => ee.atMs - ie.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: ee,
          extraMarkers: this.data.markers,
          hidden: ie,
          timeline: this.timeline
        })
      }
    }

    function Ki(ee) {
      return ie => ee >= ie.startMs && ee < ie.endMs
    }
    class Ui {
      constructor() {
        this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
          handler: (ee, ie, He) => {
            let {
              replayer: ye
            } = He;
            this.record(ee), ie && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
              this.settleQueued = !1, this.settle(ye)
            })))
          }
        }
      }
      settle(ee) {
        const ie = ee.iframe.contentDocument;
        if (null === ie || void 0 === ie || !ie.documentElement.classList.contains("rrweb-paused")) return;
        const He = ee.getMetaData().startTime + ee.getCurrentTime();
        ! function(ee, ie, He, ye) {
          for (const be of ee) {
            const ee = be.effect,
              Me = He.get(ie.getId(ee.target)),
              Ke = void 0 === Me ? 1 / 0 : ye - Me,
              Ue = Math.min(Math.max(Ke, Number(be.currentTime)), Number(ee.getComputedTiming().endTime));
            Number.isFinite(Ue) && (be.currentTime = Ue)
          }
        }(ie.getAnimations(), ee.getMirror(), this.addedAt, He)
      }
      record(ee) {
        if (ee.type === ae.c.FullSnapshot) this.addedAt.clear();
        else if (ee.type === ae.c.IncrementalSnapshot && ee.data.source === ae.d.Mutation) {
          for (const {
              id: ie
            }
            of ee.data.removes) this.addedAt.delete(ie);
          for (const {
              node: ie
            }
            of ee.data.adds) this.addedAt.set(ie.id, ee.timestamp)
        }
      }
    }
    const Fi = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      Ji = new Set(["srcset", "imagesrcset"]),
      oi = new Set(["to", "from", "by", "values"]),
      Ri = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      ki = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      qi = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      fi = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      Ti = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      Xi = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      zi = /^data:image\/(?!svg)/i,
      Bi = "about:invalid";

    function Ei(ee, ie) {
      let {
        hosts: He
      } = ie, ye = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const be = ee.trim();
      if (/[\\\u0000-\u001f]/.test(be)) return !1;
      if (!Xi.test(be)) return !0;
      let Me;
      try {
        Me = new URL(be.startsWith("//") ? `https:${be}` : be)
      } catch {
        return !1
      }
      return "data:" === Me.protocol ? ye ? "text/css" !== be.slice(5).split(/[,;]/)[0].trim().toLowerCase() : zi.test(be) : "blob:" === Me.protocol || ("http:" === Me.protocol || "https:" === Me.protocol) && He.some((ee => Me.hostname === ee || Me.hostname.endsWith(`.${ee}`)))
    }

    function gi(ee, ie) {
      return ee.replace(ki, (function(ee) {
        for (var He = arguments.length, ye = new Array(He > 1 ? He - 1 : 0), be = 1; be < He; be++) ye[be - 1] = arguments[be];
        if (Ei(ye.slice(0, 7).find((ee => "string" === typeof ee)), ie, !0)) return ee;
        const Me = ee.slice(0, 4).toLowerCase();
        return "url(" === Me ? `url("${Bi}")` : "@imp" === Me ? `@import "${Bi}"` : `"${Bi}"`
      }))
    }

    function Oi(ee) {
      return Ti.test(ee.replace(ki, '""'))
    }

    function di(ee) {
      let ie = "between";
      for (let He = 0; He < ee.length; He++) {
        const ye = ee[He];
        if ("/" === ye && "*" === ee[He + 1]) {
          if (He = ee.indexOf("*/", He + 2), -1 === He) return "open";
          He++, ie = "between"
        } else if ('"' === ye || "'" === ye) {
          for (He++; He < ee.length && ee[He] !== ye && !/[\n\r\f]/.test(ee[He]); He++) "\\" === ee[He] && He++;
          if (He >= ee.length) return "open";
          ie = "token"
        } else "\\" === ye ? (He++, ie = "token") : ";" === ye || "{" === ye || "}" === ye ? ie = "between" : /\s/.test(ye) || (ie = "token")
      }
      return ie
    }

    function Wi(ee, ie) {
      const He = gi(ee, ie);
      if (Oi(He) || "open" === di(He)) return "";
      if (!He.includes("\\")) return He;
      const ye = function(ee) {
        return ee.replace(fi, ((ee, ie, He) => void 0 !== ie ? String.fromCodePoint(Math.min(parseInt(ie, 16), 1114111)) : null !== He && void 0 !== He ? He : ""))
      }(He);
      return gi(ye, ie) !== ye || Oi(ye) ? "" : He
    }

    function ti(ee, ie) {
      const He = qi.test(ee) ? Wi(ee, ie) : ee;
      return He.split("/* rr_split */").every((ee => "between" === di(ee))) ? He : ""
    }

    function Zi(ee, ie, He) {
      if ("string" === typeof ie) {
        const ye = ee.toLowerCase();
        if (Ri.has(ye)) return null;
        if (Ji.has(ye)) return function(ee, ie) {
          return ee.split(",").every((ee => {
            const He = ee.trim().split(/\s+/)[0];
            return void 0 === He || "" === He || Ei(He, ie)
          }))
        }(ie, He) ? ie : null;
        if (oi.has(ye)) {
          return ie.split(";").every((ee => Ei(ee, He))) ? Zi("", ie, He) : null
        }
        return Fi.has(ye) ? Ei(ie, He) ? ie : null : "_csstext" === ye ? ti(ie, He) : qi.test(ie) ? Wi(ie, He) : ie
      }
      if (Array.isArray(ie)) return ie.map((ee => Zi("", ee, He)));
      if (null !== ie && "object" === typeof ie) {
        const ye = "style" === ee.toLowerCase(),
          be = {};
        for (const [ee, Ke] of Object.entries(ie)) be[ee] = Zi(ye ? "" : ee, Ke, He);
        const {
          id: Me
        } = be;
        if ("number" === typeof Me && He.styleTextIds.has(Me))
          for (const ee of ["textContent", "value"]) {
            const ie = be[ee];
            "string" === typeof ie && (be[ee] = ti(ie, He))
          }
        return be
      }
      return ie
    }

    function wi(ee, ie) {
      const He = (ee, ye) => {
        if (null === ee || "object" !== typeof ee) return;
        const be = ee;
        if (ie(be, ye), Array.isArray(be.childNodes))
          for (const ie of be.childNodes) He(ie, be.id)
      };
      for (const ye of ee) {
        const ee = ye.data;
        if (ye.type === ae.c.FullSnapshot) He(null === ee || void 0 === ee ? void 0 : ee.node, null);
        else if (ye.type === ae.c.IncrementalSnapshot && Array.isArray(null === ee || void 0 === ee ? void 0 : ee.adds))
          for (const ie of ee.adds) He(null === ie || void 0 === ie ? void 0 : ie.node, null === ie || void 0 === ie ? void 0 : ie.parentId)
      }
    }

    function Di(ee) {
      const ie = new Set,
        He = [];
      wi(ee, ((ee, ye) => {
        let {
          id: be,
          tagName: Me
        } = ee;
        "number" === typeof be && ("string" === typeof Me && "style" === Me.toLowerCase() && ie.add(be), He.push({
          id: be,
          parentId: ye
        }))
      }));
      const ye = new Set;
      for (const {
          id: be,
          parentId: Me
        }
        of He) "number" === typeof Me && ie.has(Me) && ye.add(be);
      return ye
    }
    const Pi = {
        coarse: {
          pointer: "coarse",
          "any-pointer": "coarse",
          hover: "none",
          "any-hover": "none"
        },
        fine: {
          pointer: "fine",
          "any-pointer": "fine",
          hover: "hover",
          "any-hover": "hover"
        }
      },
      Ai = {
        pointer: ["none", "coarse", "fine"],
        "any-pointer": ["none", "coarse", "fine"],
        hover: ["none", "hover"],
        "any-hover": ["none", "hover"]
      },
      Yi = "(min-width: 0px)",
      Vi = "(not (min-width: 0px))",
      ai = /@media\b[^{;]*/gi,
      ci = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
      xi = new Set(["_cssText", "rule", "replace", "replaceSync"]);

    function Li(ee, ie) {
      return ee.replace(ai, (ee => ee.replace(ci, ((ee, He, ye) => {
        const be = He.toLowerCase(),
          Me = Pi[ie][be];
        if (void 0 === ye) return "none" === Me ? Vi : Yi;
        const Ke = ye.toLowerCase();
        return Ai[be].includes(Ke) ? Ke === Me ? Yi : Vi : ee
      }))))
    }

    function Ci(ee) {
      const ie = ee.attributes,
        He = null === ie || void 0 === ie ? void 0 : ie.rel,
        ye = null === ie || void 0 === ie ? void 0 : ie.href;
      return "link" === ee.tagName && "string" === typeof He && He.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof ye ? ye : null
    }

    function vi(ee) {
      const ie = new Map;
      wi(ee, (ee => {
        const He = Ci(ee);
        null !== He && ie.set(ee.id, He)
      }));
      const He = new Map;
      for (const be of ee) {
        const ee = be.data;
        if (be.type === ae.c.IncrementalSnapshot && (null === ee || void 0 === ee ? void 0 : ee.source) === ae.d.Mutation)
          for (const be of null !== (ye = ee.attributes) && void 0 !== ye ? ye : []) {
            var ye;
            const ee = be.attributes._cssText,
              Me = ie.get(be.id);
            "string" !== typeof ee || void 0 === Me || He.has(Me) || He.set(Me, ee)
          }
      }
      return He
    }

    function ui(ee, ie, He) {
      var ye;
      if ("string" === typeof ee) return null !== He.pointer && xi.has(ie) ? Li(ee, He.pointer) : ee;
      if (Array.isArray(ee)) {
        let ie = !1;
        const ye = ee.map((ee => {
          const ye = ui(ee, "", He);
          return ie ||= ye !== ee, ye
        }));
        return ie ? ye : ee
      }
      if (null === ee || "object" !== typeof ee) return ee;
      const be = function(ee, ie) {
        const He = ee.attributes,
          ye = Ci(ee),
          be = null !== ye && void 0 === (null === He || void 0 === He ? void 0 : He._cssText) ? ie.sheets.get(ye) : void 0;
        return void 0 === be ? ee : {
          ...ee,
          attributes: {
            ...He,
            _cssText: be
          }
        }
      }(ee, He);
      let Me = null;
      for (const [Ue, Fe] of Object.entries(be)) {
        const ee = ui(Fe, Ue, He);
        ee !== Fe && (Me ??= {
          ...be
        }, Me[Ue] = ee)
      }
      const {
        id: Ke
      } = be;
      if (null !== He.pointer && "number" === typeof Ke && He.styleTextIds.has(Ke))
        for (const Ue of ["textContent", "value"]) {
          const ee = be[Ue],
            ie = "string" === typeof ee ? Li(ee, He.pointer) : ee;
          ie !== ee && (Me ??= {
            ...be
          }, Me[Ue] = ie)
        }
      return null !== (ye = Me) && void 0 !== ye ? ye : be
    }
    const mi = "brv-styles",
      li = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      Si = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${li.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class ni {
      static create(ee, ie, He, ye, be, Me, Ke, Ue) {
        if (!ie.some((ee => ee.type === ae.c.FullSnapshot))) return null;
        const Fe = function(ee, ie) {
          const He = {
            sheets: vi(ee),
            styleTextIds: Di(ee),
            pointer: ie
          };
          return ee.map((ee => {
            if (ee.type !== ae.c.FullSnapshot && ee.type !== ae.c.IncrementalSnapshot) return ee;
            const ie = ui(ee.data, "data", He);
            return ie === ee.data ? ee : {
              ...ee,
              data: ie
            }
          }))
        }(function(ee, ie) {
          const He = {
            hosts: ie,
            styleTextIds: Di(ee)
          };
          return ee.map((ee => ee.type === ae.c.Meta ? ee : {
            ...ee,
            data: Zi("data", ee.data, He)
          }))
        }(ie, Me), He);
        return new ni(ee, Fe, ye, be, Ke, Ue)
      }
      constructor(ee, ie, He, ye, be, Me) {
        var Ke, Ue, Fe, Je;
        this.domClock = He, this.canvasSelectors = ye, this.videoLayer = be, this.replayer = void 0, this.pausedAnimations = new Ui, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (Ke = null === (Ue = ie[0]) || void 0 === Ue ? void 0 : Ue.timestamp) && void 0 !== Ke ? Ke : 0, this.lastDomMs = null !== (Fe = null === (Je = ie.at(-1)) || void 0 === Je ? void 0 : Je.timestamp) && void 0 !== Fe ? Fe : 0, this.replayer = new ae.e(ie, {
          root: ee,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          plugins: [this.pausedAnimations.plugin],
          insertStyleRules: li
        }), this.replayer.on("resize", (ee => {
          const {
            width: ie,
            height: He
          } = ee;
          Me({
            width: ie,
            height: He
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect(), this.pausedAnimations.settle(this.replayer)
        }))
      }
      sync(ee, ie) {
        const He = this.domOffsetAt(ee);
        ie ? this.replayer.play(He) : this.replayer.pause(He), this.lastDomCheckMs = performance.now()
      }
      update(ee, ie, He) {
        He - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = He, this.placeVideoOverCanvas()), ie && He - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = He, this.checkDrift(ee))
      }
      setSpeed(ee) {
        this.replayer.setConfig({
          speed: ee
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(ee) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(ee)) - this.firstDomMs)
      }
      checkDrift(ee) {
        const ie = this.domOffsetAt(ee);
        ie >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - ie) > 400 && this.replayer.play(ie)
      }
      placeVideoOverCanvas() {
        const ee = this.replayer.iframe.contentDocument,
          ie = null === ee ? null : function(ee, ie) {
            for (const He of ie) {
              const ie = ee.querySelector(He);
              if (null !== ie) return ie
            }
            return null
          }(ee, this.canvasSelectors),
          He = this.videoLayer.element;
        null !== ie ? (He.previousSibling !== ie && ie.after(He), He.style.display = "", He.style.left = `${ie.offsetLeft}px`, He.style.top = `${ie.offsetTop}px`, He.style.width = `${ie.offsetWidth}px`, He.style.height = `${ie.offsetHeight}px`) : He.style.display = "none"
      }
    }
    const ji = {
      width: 1280,
      height: 720
    };
    class si {
      constructor(ee, ie) {
        this.root = ee, this.onViewportChanged = ie, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", ee.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(ee)
      }
      setViewport(ee) {
        var ie;
        null === ee || ee.width <= 0 || ee.height <= 0 || ee.width === (null === (ie = this.viewport) || void 0 === ie ? void 0 : ie.width) && ee.height === this.viewport.height || (this.viewport = ee, this.element.style.width = `${ee.width}px`, this.element.style.height = `${ee.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var ee;
        const ie = null !== (ee = this.viewport) && void 0 !== ee ? ee : ji,
          He = this.root.getBoundingClientRect(),
          ye = Math.min(He.width / ie.width, He.height / ie.height),
          be = (He.width - ie.width * ye) / 2,
          Me = (He.height - ie.height * ye) / 2;
        this.element.style.transform = `translate(${be}px, ${Me}px) scale(${ye})`
      }
    }
    class Ii {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ge;
        this.urls = void 0, this.urls = new Qe(ee, "video URLs", ie, He)
      }
      reset(ee) {
        this.urls.reset(ee.flatMap((ee => {
          var ie;
          return null !== (ie = function(ee) {
            return "url" in ee ? null === ee.url ? null : {
              sequence: ee.sequence,
              url: ee.url
            } : void 0 === ee.partUrls ? null : {
              sequence: ee.sequence,
              partUrls: ee.partUrls
            }
          }(ee)) && void 0 !== ie ? ie : []
        })))
      }
      get(ee) {
        return this.urls.get(ee)
      }
      update(ee, ie, He) {
        this.urls.request(function(ee, ie, He, ye) {
          return ee.filter((ee => ee.endMs > ie && ee.startMs < ie + He && ye(ee.sequence))).map((ee => ee.sequence))
        }(ee, ie, 12e4 * Math.max(1, He), (ee => this.urls.needs(ee))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function Ni(ee, ie, He) {
      const ye = [];
      let be = ee.length,
        Me = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, ee.length)
      }, (() => (async () => {
        for (; Me < be;) {
          const Ue = Me++;
          try {
            ye[Ue] = await ie(ee[Ue], He)
          } catch (Ke) {
            if (He.aborted) throw Ke;
            console.warn(`Replay video part ${Ue} failed to load; playing the parts before it.`, Ke), be = Math.min(be, Ue)
          }
        }
      })()))), ye.slice(0, be)
    }

    function Gi(ee) {
      const ie = [];
      let He = 0;
      for (const oe of ee) ie.push(He), He += oe.byteLength;
      let ye = 0;
      const be = He => {
          for (; ie[ye] > He;) ye--;
          for (; ye + 1 < ie.length && ie[ye + 1] <= He;) ye++;
          return ee[ye][He - ie[ye]]
        },
        Me = ee => be(ee) * 2 ** 24 + 65536 * be(ee + 1) + 256 * be(ee + 2) + be(ee + 3);
      let Ke = 0,
        Ue = !1,
        Fe = !1,
        Je = 0;
      for (; Ke + 8 <= He;) {
        const ee = String.fromCharCode(be(Ke + 4), be(Ke + 5), be(Ke + 6), be(Ke + 7));
        let ie = Me(Ke);
        if (1 === ie) {
          if (Ke + 16 > He) break;
          ie = Me(Ke + 8) * 2 ** 32 + Me(Ke + 12)
        } else 0 === ie && (ie = He - Ke);
        if (ie < 8 || Ke + ie > He) break;
        Ke += ie, "moov" === ee ? Ue = !0 : "moof" === ee ? Fe = !0 : "mdat" === ee && Fe ? (Fe = !1, Je = Ke) : !Fe && Je > 0 && (Je = Ke)
      }
      return Ue && Je > 0 ? Je : null
    }
    async function ri(ee, ie) {
      const He = await fetch(ee, {
        signal: ie
      });
      if (!He.ok) throw new Error(`HTTP ${He.status}`);
      return He.arrayBuffer()
    }
    class Qi {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ri,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = ee, this.bk = ie, this.blobs = new Map
      }
      get(ee, ie) {
        const He = eH(ee, ie),
          ye = this.blobs.get(He);
        return void 0 === ye ? null : (this.remember(He, ye), ye)
      }
      async load(ee, ie, He) {
        const ye = await Ni(ie, this.fetchPart, He),
          be = function(ee) {
            const ie = ee.map((ee => new Uint8Array(ee))),
              He = Gi(ie);
            return null === He ? null : new Blob(function(ee, ie) {
              const He = [];
              let ye = ie;
              for (const be of ee) {
                if (ye <= 0) break;
                He.push(be.byteLength <= ye ? be : be.subarray(0, ye)), ye -= be.byteLength
              }
              return He
            }(ie, He), {
              type: "video/mp4"
            })
          }(ye);
        return null !== be && ye.length === ie.length && this.remember(eH(ee, ie.length), be), be
      }
      remember(ee, ie) {
        this.blobs.delete(ee), this.blobs.set(ee, ie), this.blobs.size > this.bk && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function eH(ee, ie) {
      return `${ee}/${ie}`
    }

    function iH(ee) {
      const ie = function(ee) {
        return ee.map(((ie, He) => {
          const ye = ee[He + 1];
          return void 0 === ye ? ie.endMs : Math.min(ie.endMs, ye.startMs)
        }))
      }(ee);
      return ee.map(((ee, He) => ({
        ...ee,
        endMs: ie[He]
      }))).filter((ee => ee.endMs > ee.startMs))
    }

    function HH(ee, ie) {
      let He = 0,
        ye = ee.length - 1;
      for (; He <= ye;) {
        const be = He + ye >> 1,
          Me = ee[be];
        if (ie < Me.startMs) ye = be - 1;
        else {
          if (!(ie >= Me.endMs)) return Me;
          He = be + 1
        }
      }
      return null
    }

    function yH(ee, ie) {
      return (ie - ee.startMs) / 1e3
    }

    function bH(ee) {
      return Math.max(.4, .1 * ee)
    }

    function MH(ee) {
      return Math.max(.0625, Math.min(16, ee))
    }
    class KH {
      constructor(ee, ie, He, ye, be, Me, Ke) {
        this.still = ie, this.clock = He, this.frameDurationS = ye, this.wallNowMs = be, this.onLoadFailed = Ke, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new Qi, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = iH(ee), this.segmentUrls = new Ii(Me), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(ee) {
        var ie, He;
        const ye = null !== (ie = null !== (He = HH(this.segments, ee)) && void 0 !== He ? He : this.segments.find((ie => ie.startMs > ee))) && void 0 !== ie ? ie : this.segments.at(-1);
        return void 0 === ye ? null : {
          width: ye.width,
          height: ye.height
        }
      }
      failedAt(ee) {
        const ie = HH(this.segments, ee);
        return null !== ie && this.failed.has(ie.sequence)
      }
      replaceSegments(ee, ie) {
        for (const He of this.slots.values()) this.release(He);
        this.slots.clear(), this.failed.clear(), this.segments = iH(ee), this.segmentUrls.reset(this.segments), this.still = ie
      }
      update(ee) {
        var ie, He;
        this.segmentUrls.update(this.segments, ee, this.clock.speed);
        const ye = HH(this.segments, ee),
          be = function(ee, ie) {
            const He = ee.find((ee => ee.startMs > ie));
            return void 0 === He ? null : He.startMs - ie <= ("parts" in He ? 15e3 : 8e3) ? He : null
          }(this.segments, ee);
        this.evictExcept([ye, be, null !== (ie = null === (He = this.shown) || void 0 === He ? void 0 : He.segment) && void 0 !== ie ? ie : null]), null !== be && this.getSlot(be), this.showStill(null === ye ? function(ee, ie, He) {
          if (null === ie) return null;
          const ye = ee.at(-1);
          return void 0 === ye ? He >= ie.atMs - 1e4 ? ie : null : He >= ye.endMs && Math.abs(ie.atMs - ye.endMs) <= 1e4 ? ie : null
        }(this.segments, this.still, ee) : null);
        const Me = null === ye ? null : this.getSlot(ye);
        if (null !== Me) {
          this.sync(Me, yH(Me.segment, ee)), Me.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !Me.video.seeking && this.show(Me);
          for (const ee of this.slots.values()) ee === Me || ee.video.paused || ee.video.pause()
        } else {
          null === ye && this.show(null);
          for (const ee of this.slots.values()) ee.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: ee,
          sumAbsDriftMs: ie,
          maxAbsDriftMs: He,
          withinOneFrame: ye,
          seeks: be
        } = this.stats;
        return {
          frames: ee,
          meanAbsDriftMs: 0 === ee ? 0 : ie / ee,
          maxAbsDriftMs: He,
          withinOneFrame: 0 === ee ? 1 : ye / ee,
          seeks: be
        }
      }
      resetSyncStats() {
        this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }
      }
      noteClockJump() {
        this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null
      }
      destroy() {
        for (const ee of this.slots.values()) this.release(ee);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(ee, ie) {
        const {
          video: He
        } = ee;
        if (He.seeking) return;
        const {
          playing: ye,
          speed: be
        } = this.clock, Me = ye && be < 16, Ke = function(ee) {
          let {
            targetS: ie,
            currentS: He,
            playing: ye,
            speed: be,
            frameDurationS: Me
          } = ee;
          const Ke = He - ie;
          if (!ye) return Math.abs(Ke) > Me / 2 ? {
            kind: "seek",
            mediaTimeS: ie
          } : {
            kind: "none"
          };
          if (Math.abs(Ke) > bH(be)) return {
            kind: "seek",
            mediaTimeS: ie
          };
          if (Math.abs(Ke) < Me / 4) return {
            kind: "rate",
            playbackRate: MH(be)
          };
          const Ue = be - Ke / .5;
          return {
            kind: "rate",
            playbackRate: MH(Math.max(.5 * be, Math.min(1.5 * be, Ue)))
          }
        }({
          targetS: ie,
          currentS: He.currentTime,
          playing: Me,
          speed: be,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === Ke.kind) {
          const ie = this.seekLatencyS * be,
            Ue = ye ? Me ? Math.min(ie, bH(be) / 2) : ie : 0;
          ee.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, Me && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), He.currentTime = Math.max(0, Ke.mediaTimeS + Ue)
        } else "rate" === Ke.kind && Math.abs(He.playbackRate - Ke.playbackRate) > .001 && (He.playbackRate = Ke.playbackRate);
        Me && He.paused && He.currentTime < He.duration ? (He.playbackRate = MH(be), He.play().catch((ee => {
          console.warn("Replay video refused to play.", ee)
        }))) : Me || He.paused || He.pause()
      }
      getSlot(ee) {
        const ie = this.slots.get(ee.sequence);
        if (void 0 !== ie) return ie;
        const He = "parts" in ee ? this.blobs.get(ee.sequence, ee.parts) : null,
          ye = null === He ? this.segmentUrls.get(ee.sequence) : null;
        if ("pending" === ye) return null;
        if ("failed" === ye) return this.failed.has(ee.sequence) || (console.error(`Replay video segment ${ee.sequence} has no URLs to load.`), this.markFailed(ee)), null;
        const be = document.createElement("video");
        be.className = "brv-video", be.muted = !0, be.playsInline = !0, be.preload = "auto", be.disablePictureInPicture = !0;
        const Me = {
          segment: ee,
          video: be,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== He ? this.playBlob(Me, He) : null !== ye && ("url" in ye ? be.src = ye.url : this.loadParts(Me, ye.partUrls)), be.addEventListener("seeked", (() => {
          if (null !== Me.seekStartedWallMs) {
            const ee = (this.wallNowMs() - Me.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, ee), Me.seekStartedWallMs = null
          }
        })), be.addEventListener("loadeddata", (() => {
          this.slots.get(ee.sequence) === Me && this.failed.delete(ee.sequence)
        })), be.addEventListener("error", (() => {
          this.slots.get(ee.sequence) === Me && (console.error(`Replay video segment ${ee.sequence} failed to load.`, be.error), this.markFailed(ee))
        })), this.watchFrames(Me), this.element.appendChild(be), this.slots.set(ee.sequence, Me), Me
      }
      loadParts(ee, ie) {
        this.blobs.load(ee.segment.sequence, ie, ee.abort.signal).then((ie => {
          if (this.slots.get(ee.segment.sequence) === ee) return null === ie ? (console.error(`Replay video segment ${ee.segment.sequence} has no playable parts.`), void this.markFailed(ee.segment)) : void this.playBlob(ee, ie)
        }), (ie => {
          this.slots.get(ee.segment.sequence) === ee && (console.error(`Replay video segment ${ee.segment.sequence} failed to load.`, ie), this.markFailed(ee.segment))
        }))
      }
      playBlob(ee, ie) {
        ee.objectUrl = URL.createObjectURL(ie), ee.video.src = ee.objectUrl
      }
      markFailed(ee) {
        this.failed.add(ee.sequence), this.onLoadFailed()
      }
      showStill(ee) {
        const ie = null !== ee && ee.url !== this.failedStillUrl ? ee : null;
        null !== ie && this.stillImage.getAttribute("src") !== ie.url && (this.stillImage.src = ie.url);
        const He = null !== ie && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        He !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", He), this.stillShown = He)
      }
      show(ee) {
        var ie;
        this.shown !== ee && (null === (ie = this.shown) || void 0 === ie || ie.video.classList.remove("brv-video-shown"), null === ee || void 0 === ee || ee.video.classList.add("brv-video-shown"), this.shown = ee)
      }
      evictExcept(ee) {
        for (const [ie, He] of this.slots) ee.includes(He.segment) || (this.release(He), this.slots.delete(ie))
      }
      release(ee) {
        this.shown === ee && (this.shown = null), ee.abort.abort(), ee.video.pause(), ee.video.removeAttribute("src"), ee.video.load(), ee.video.remove(), null !== ee.objectUrl && URL.revokeObjectURL(ee.objectUrl)
      }
      watchFrames(ee) {
        const {
          video: ie
        } = ee;
        if ("function" !== typeof ie.requestVideoFrameCallback) return;
        const He = (ye, be) => {
          if (!this.slots.has(ee.segment.sequence)) return;
          const Me = ie.ownerDocument.defaultView,
            Ke = null === Me ? 0 : Me.performance.timeOrigin - performance.timeOrigin,
            Ue = yH(ee.segment, this.clock.timeAtWall(be.expectedDisplayTime + Ke)),
            Fe = this.lastPresented,
            Je = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== Fe && Fe.slot === ee && Je && this.clock.playing && be.mediaTime > Fe.mediaTimeS) {
            const ee = Math.abs(function(ee, ie, He) {
              return He < ee ? 1e3 * (He - ee) : 1e3 * Math.max(0, He - ie)
            }(Fe.mediaTimeS, be.mediaTime, Fe.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += ee, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, ee), ee <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: ee,
            mediaTimeS: be.mediaTime,
            clockMediaTimeS: Ue
          }, ie.requestVideoFrameCallback(He)
        };
        ie.requestVideoFrameCallback(He)
      }
    }
    const UH = 1 / 30,
      FH = ["#noa-canvas", "#noa-container"];
    class JH {
      constructor(ee, ie) {
        var He, ye, be, Me, Ke, Ue, Fe, Je;
        let oe = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.YR = () => {
          this.frame = requestAnimationFrame(this.YR);
          const ee = performance.now();
          this.applySkips();
          const ie = this.clock.timeMs();
          this.annotations.update(ie, this.clock.speed), this.videoLayer.update(ie), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(ie)) : this.domLayer.update(ie, this.clock.playing, ee);
          const He = this.getState();
          (null === this.lastState || function(ee, ie) {
            return Object.keys(ee).some((He => "positionMs" === He ? Math.floor(ee.positionMs / 1e3) !== Math.floor(ie.positionMs / 1e3) : ee[He] !== ie[He]))
          }(He, this.lastState)) && this.emitState(He)
        };
        const Re = () => performance.now();
        this.lowFps = null !== (He = oe.lowFps) && void 0 !== He ? He : 25;
        const ke = new me(ie.domEvents);
        this.timeline = new xe(ie.windows.length > 0 ? ie.windows : [Ce(ie, ke)]), this.chapters = [...ie.chapters].sort(((ee, ie) => ee.startMs - ie.startMs)), this.annotations = new Mi(ie, ke, this.timeline, {
          inactivityThresholdMs: null !== (ye = oe.inactivityThresholdMs) && void 0 !== ye ? ye : 1e4,
          loadTelemetryChunk: null !== (be = oe.loadTelemetryChunk) && void 0 !== be ? be : null,
          telemetryUrls: null !== (Me = oe.telemetryUrls) && void 0 !== Me ? Me : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new re(null !== (Ke = oe.refreshUrls) && void 0 !== Ke ? Ke : null, (ee => {
          this.videoLayer.replaceSegments(Le(ee.videoSegments), ee.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(ee.telemetryChunks)
        })), this.clock = new ve(this.timeline.startMs, Re), this.stage = new si(ee, (() => {
          var ee;
          null === (ee = this.domLayer) || void 0 === ee || ee.invalidateCanvasRect()
        })), this.videoLayer = new KH(Le(ie.videoSegments), ie.still, this.clock, UH, Re, null !== (Ue = oe.segmentUrls) && void 0 !== Ue ? Ue : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = ni.create(this.stage.element, ie.domEvents, ie.recordedPointer, ke, null !== (Fe = oe.canvasSelectors) && void 0 !== Fe ? Fe : FH, null !== (Je = oe.resourceHosts) && void 0 !== Je ? Je : [], this.videoLayer, (ee => {
          this.stage.setViewport(ee)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.YR()
      }
      get markers() {
        return this.annotations.markers
      }
      get inactiveRanges() {
        return this.annotations.inactiveRanges
      }
      get videoGaps() {
        return this.annotations.videoGaps
      }
      get frames() {
        return this.annotations.frames
      }
      get input() {
        return this.annotations.input
      }
      subscribe(ee) {
        return this.listeners.add(ee), ee(this.getState()), () => {
          this.listeners.delete(ee)
        }
      }
      getState() {
        const ee = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(ee),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(ee),
          telemetryChunksLoaded: this.annotations.telemetryChunksLoaded
        }
      }
      getPositionMs() {
        return this.timeline.toPosition(this.clock.timeMs())
      }
      getSyncStats() {
        return this.videoLayer.getSyncStats()
      }
      resetSyncStats() {
        this.videoLayer.resetSyncStats()
      }
      play() {
        this.ended && this.seekToTime(this.timeline.startMs), this.clock.play(), this.syncDom(), this.emit()
      }
      pause() {
        this.clock.pause(), this.syncDom(), this.emit()
      }
      togglePlay() {
        this.clock.playing ? this.pause() : this.play()
      }
      seekToPosition(ee) {
        this.seekToTime(this.timeline.toTime(ee))
      }
      seekBy(ee) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + ee)
      }
      stepFrame(ee) {
        this.clock.pause(), this.seekBy(ee * UH * 1e3)
      }
      setSpeed(ee) {
        var ie;
        this.clock.setSpeed(ee), null === (ie = this.domLayer) || void 0 === ie || ie.setSpeed(ee), this.emit()
      }
      setSkipInactive(ee) {
        this.skipInactive = ee, this.emit()
      }
      goToChapter(ee) {
        const ie = this.clock.timeMs(),
          He = 1 === ee ? this.chapters.find((ee => ee.startMs > ie + 500)) : this.chapters.findLast((ee => ee.startMs < ie - 2e3));
        void 0 !== He && this.seekToTime(He.startMs)
      }
      destroy() {
        var ee;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (ee = this.domLayer) || void 0 === ee || ee.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(ee) {
        return this.annotations.isHiddenAt(ee) ? "tabHidden" : this.videoLayer.failedAt(ee) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(ee) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var ee;
        if (!this.clock.playing) return;
        const ie = this.clock.timeMs(),
          He = this.timeline.nextPlayableTime(ie);
        if (null === He) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const ye = this.skipInactive ? this.annotations.inactiveRanges.find((ee => He >= ee.startMs && He < ee.endMs - 500)) : void 0,
          be = null !== (ee = null === ye || void 0 === ye ? void 0 : ye.endMs) && void 0 !== ee ? ee : He;
        be !== ie && this.seekToTime(be)
      }
      seekToTime(ee) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, ee))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var ee;
        null === (ee = this.domLayer) || void 0 === ee || ee.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(ee) {
        this.lastState = ee;
        for (const ie of this.listeners) ie(ee)
      }
    }
    const oH = 2500,
      RH = 5;

    function kH(ee) {
      let {
        label: ie,
        lJ: He,
        wide: ye = !1
      } = ee;
      return (0, pe.jsx)("span", {
        className: `brv-key${He?" brv-key-held":""}${ye?" brv-key-wide":""}`,
        children: ie
      })
    }
    const qH = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function fH(ee) {
      const [ie, He] = (0, ye.useState)({
        bits: 0,
        presses: []
      });
      return (0, ye.useEffect)((() => {
        let ie = 0,
          ye = "";
        const be = () => {
          ie = requestAnimationFrame(be);
          const Me = ee.timeline.toTime(ee.getPositionMs()),
            {
              actions: Ke,
              keys: Ue
            } = ee.input,
            ke = function(ee, ie) {
              const He = Je(ee, ie);
              return He < 0 ? 0 : ee[He].bits
            }(Ke, Me),
            qe = function(ee, ie, He, ye) {
              const be = Math.floor(ie / He) * He,
                Me = new Map;
              for (let Ke = Je(ee, be + He); Ke >= 0 && ee[Ke].atMs >= be; Ke--) {
                const ie = ee[Ke];
                if (!ie.down || !ie.inPlay || ie.atMs === be + He) continue;
                const ye = {
                    code: ie.code,
                    unbound: Fe(ie)
                  },
                  Ue = oe(ye),
                  Je = Me.get(Ue);
                void 0 === Je ? Me.set(Ue, {
                  key: ye,
                  presses: 1
                }) : Je.presses++
              }
              return [...Me].sort(((ee, ie) => Re([ee[0], ee[1].presses], [ie[0], ie[1].presses]))).slice(0, ye).map((ee => {
                let [, {
                  key: ie
                }] = ee;
                return ie
              }))
            }(Ue, Me, oH, RH),
            fe = `${ke};${qe.map((ee=>oe(ee))).join(",")}`;
          fe !== ye && (ye = fe, He({
            bits: ke,
            presses: qe
          }))
        };
        return be(), () => {
          cancelAnimationFrame(ie)
        }
      }), [ee]), ie
    }

    function TH(ee) {
      let {
        controller: ie,
        labels: He
      } = ee;
      const {
        bits: ye,
        presses: be
      } = fH(ie), Me = ee => function(ee, ie) {
        return 0 !== (ee & 1 << Ke.indexOf(ie))
      }(ye, ee);
      return (0, pe.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, pe.jsx)("div", {
          className: "brv-input-slot",
          children: be.map((ee => {
            const ie = qe(ee.code);
            return (0, pe.jsx)("span", {
              className: ee.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: ee.unbound ? He.unboundKey(ie) : ie
            }, oe(ee))
          }))
        }), (0, pe.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, pe.jsxs)("div", {
            className: "brv-keys",
            children: [(0, pe.jsx)("div", {
              className: "brv-keys-row",
              children: (0, pe.jsx)(kH, {
                label: "W",
                lJ: Me("forward")
              })
            }), (0, pe.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, pe.jsx)(kH, {
                label: "A",
                lJ: Me("left")
              }), (0, pe.jsx)(kH, {
                label: "S",
                lJ: Me("backward")
              }), (0, pe.jsx)(kH, {
                label: "D",
                lJ: Me("right")
              })]
            }), (0, pe.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, pe.jsx)(kH, {
                label: "Shift",
                lJ: Me("sprint")
              }), (0, pe.jsx)(kH, {
                label: "Ctrl",
                lJ: Me("crouch")
              }), (0, pe.jsx)(kH, {
                label: "Space",
                lJ: Me("jump"),
                wide: !0
              })]
            })]
          }), (0, pe.jsx)("div", {
            className: "brv-mouse",
            children: qH.map((ee => {
              let {
                action: ie,
                className: He
              } = ee;
              return (0, pe.jsx)("span", {
                className: `${He}${Me(ie)?" brv-key-held":""}`
              }, ie)
            }))
          })]
        })]
      })
    }
    const pH = {
      play: "Play (space)",
      pause: "Pause (space)",
      speed: "Playback speed",
      skipInactive: "Skip idle",
      fullscreen: "Fullscreen (F)",
      tabHidden: "They switched to another tab.",
      videoFailed: "The video couldn't load.",
      nothingToShow: "Nothing was recorded here.",
      videoGap: "The game's video wasn't recorded here.",
      error: "Error",
      graphicsCrash: "The game's graphics crashed",
      death: "Died",
      fps: ee => `${ee} FPS`,
      keys: "Keys",
      unboundKey: ee => `${ee} does nothing here`,
      unboundKeys: ee => `${ee} did nothing`
    };

    function XH(ee) {
      let {
        path: ie
      } = ee;
      return (0, pe.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, pe.jsx)("path", {
          d: ie
        })
      })
    }
    const zH = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function BH(ee) {
      let {
        label: ie,
        onClick: He,
        children: ye
      } = ee;
      return (0, pe.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: ie,
        "aria-label": ie,
        onClick: He,
        children: ye
      })
    }

    function EH(ee) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === ee ? document.exitFullscreen() : ee.requestFullscreen()).catch((ee => {
        console.warn("Couldn't toggle fullscreen.", ee)
      }))
    }

    function gH(ee) {
      let {
        data: ie,
        className: He,
        autoPlay: be = !1,
        options: Me,
        labels: Ke = pH,
        onController: Ue
      } = ee;
      const Fe = (0, ye.useRef)(null),
        Je = (0, ye.useRef)(null),
        oe = (0, ye.useRef)(Me);
      oe.current = Me;
      const Re = (0, ye.useRef)(be);
      Re.current = be;
      const ke = (0, ye.useRef)(Ue);
      ke.current = Ue;
      const [qe, fe] = (0, ye.useState)(null), [Te, Xe] = (0, ye.useState)(null), [Be, Ee] = (0, ye.useState)(!0), ge = () => {
        Ee((ee => !ee))
      };
      (0, ye.useEffect)((() => {
        var ee;
        ! function(ee) {
          if (null !== ee.getElementById(mi)) return;
          const ie = ee.createElement("style");
          ie.id = mi, ie.textContent = Si, ee.head.appendChild(ie)
        }(document);
        const He = new JH(Fe.current, ie, oe.current),
          ye = He.subscribe(Xe);
        return fe(He), null === (ee = ke.current) || void 0 === ee || ee.call(ke, He), Re.current && He.play(), Je.current.focus({
          preventScroll: !0
        }), () => {
          var ee;
          ye(), He.destroy(), null === (ee = ke.current) || void 0 === ee || ee.call(ke, null)
        }
      }), [ie]);
      const de = null !== qe && qe.input.inputRecorded,
        We = null === qe || null === Te ? void 0 : qe.chapters.findLast((ee => qe.timeline.toPosition(ee.startMs) <= Te.positionMs));
      return (0, pe.jsxs)("div", {
        ref: Je,
        className: void 0 === He ? "brv-player" : `brv-player ${He}`,
        tabIndex: 0,
        onKeyDown: ee => {
          if (ee.target instanceof HTMLSelectElement) return;
          if (" " === ee.key && ee.target !== ee.currentTarget && ee.target instanceof HTMLButtonElement) return;
          const ie = function(ee) {
            let {
              key: ie,
              shiftKey: He,
              ctrlKey: ye,
              metaKey: be,
              altKey: Me
            } = ee;
            if (ye || be || Me) return null;
            const Ke = Number(ie) - 1;
            if (/^[1-9]$/.test(ie) && Ke < Ve.length) return {
              type: "setSpeed",
              speed: Ve[Ke]
            };
            switch (ie.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: He ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: He ? 1e3 : 5e3
                };
              case "j":
                return {
                  type: "seekBy", deltaMs: -1e4
                };
              case "l":
                return {
                  type: "seekBy", deltaMs: 1e4
                };
              case ",":
                return {
                  type: "stepFrame", direction: -1
                };
              case ".":
                return {
                  type: "stepFrame", direction: 1
                };
              case "n":
                return {
                  type: "chapter", direction: He ? -1 : 1
                };
              case "s":
                return {
                  type: "toggleSkipInactive"
                };
              case "f":
                return {
                  type: "toggleFullscreen"
                };
              case "i":
                return {
                  type: "toggleKeys"
                };
              default:
                return null
            }
          }(ee);
          null !== ie && null !== qe && null !== Te && (ee.preventDefault(), function(ee, ie, He, ye) {
            switch (ie.type) {
              case "togglePlay":
                ee.togglePlay();
                break;
              case "seekBy":
                ee.seekBy(ie.deltaMs);
                break;
              case "stepFrame":
                ee.stepFrame(ie.direction);
                break;
              case "setSpeed":
                ee.setSpeed(ie.speed);
                break;
              case "chapter":
                ee.goToChapter(ie.direction);
                break;
              case "toggleSkipInactive":
                ee.setSkipInactive(!He.skipInactive);
                break;
              case "toggleFullscreen":
                EH(ye.root);
                break;
              case "toggleKeys":
                ye.toggleKeys()
            }
          }(qe, ie, Te, {
            root: ee.currentTarget,
            toggleKeys: ge
          }))
        },
        children: [(0, pe.jsxs)("div", {
          ref: Fe,
          className: "brv-viewport",
          onClick: () => {
            null === qe || void 0 === qe || qe.togglePlay()
          },
          children: [null !== Te && null !== Te.notice && (0, pe.jsx)("div", {
            className: "brv-overlay",
            children: Ke[Te.notice]
          }), null !== qe && Be && de && (0, pe.jsx)(TH, {
            controller: qe,
            labels: Ke
          })]
        }), null !== qe && null !== Te && (0, pe.jsxs)(pe.Fragment, {
          children: [(0, pe.jsx)(Oe, {
            controller: qe,
            frames: qe.frames,
            input: qe.input,
            markers: qe.markers,
            inactiveRanges: qe.inactiveRanges,
            videoGaps: qe.videoGaps,
            labels: Ke
          }), qe.chapters.length > 1 && (0, pe.jsx)("div", {
            className: "brv-chapters",
            children: qe.chapters.map((ee => (0, pe.jsxs)("button", {
              type: "button",
              className: ee === We ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                qe.seekToPosition(qe.timeline.toPosition(ee.startMs))
              },
              children: [ee.label, " \xb7 ", ze(ee.endMs - ee.startMs)]
            }, ee.startMs)))
          }), (0, pe.jsxs)("div", {
            className: "brv-controls",
            children: [(0, pe.jsx)(BH, {
              label: Te.playing ? Ke.pause : Ke.play,
              onClick: () => {
                qe.togglePlay()
              },
              children: (0, pe.jsx)(XH, {
                path: Te.playing ? zH.pause : zH.play
              })
            }), (0, pe.jsxs)("span", {
              className: "brv-time",
              children: [ze(Te.positionMs), " / ", ze(Te.durationMs)]
            }), (0, pe.jsx)("select", {
              className: "brv-speed",
              value: Te.speed,
              title: `${Ke.speed} (1-${Ve.length})`,
              "aria-label": Ke.speed,
              onChange: ee => {
                qe.setSpeed(Number(ee.target.value))
              },
              children: Ve.map((ee => (0, pe.jsxs)("option", {
                value: ee,
                children: [ee, "x"]
              }, ee)))
            }), (0, pe.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": Te.skipInactive,
              title: `${Ke.skipInactive} (S)`,
              onClick: () => {
                qe.setSkipInactive(!Te.skipInactive)
              },
              children: [(0, pe.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), Ke.skipInactive]
            }), de && (0, pe.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": Be,
              title: `${Ke.keys} (I)`,
              onClick: ge,
              children: [(0, pe.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), Ke.keys]
            }), document.fullscreenEnabled && (0, pe.jsx)(BH, {
              label: Ke.fullscreen,
              onClick: () => {
                EH(Je.current)
              },
              children: (0, pe.jsx)(XH, {
                path: zH.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var OH = He(5613);
    const dH = ["bloxd.io", window.location.hostname];

    function WH(ee) {
      let {
        gameAnalyticsId: ie,
        recordingId: He,
        userContext: be,
        autoPlay: Me
      } = ee;
      const {
        t: Ke
      } = (0, We.v)(), [Ue, Fe] = (0, ye.useState)({
        status: "loading"
      }), [Je, oe] = (0, ye.useState)(0), Re = (0, ye.useMemo)((() => function(ee) {
        return {
          play: ee("studio:replayPlay"),
          pause: ee("studio:replayPause"),
          speed: ee("studio:replaySpeed"),
          skipInactive: ee("studio:replaySkipIdle"),
          fullscreen: ee("studio:replayFullscreen"),
          tabHidden: ee("studio:replayTabHidden"),
          videoFailed: ee("studio:replayVideoFailed"),
          nothingToShow: ee("studio:replayNothingToShow"),
          videoGap: ee("studio:replayVideoGap"),
          error: ee("general:error"),
          graphicsCrash: ee("studio:replayMarkerGraphicsCrash"),
          death: ee("studio:replayMarkerDeath"),
          fps: ie => ee("studio:replayFps", {
            fps: ie
          }),
          keys: ee("studio:replayKeys"),
          unboundKey: ie => ee("studio:replayUnboundKey", {
            key: ie
          }),
          unboundKeys: ie => ee("studio:replayUnboundKeys", {
            keys: ie
          })
        }
      }(Ke)), [Ke]), ke = (0, ye.useMemo)((() => ({
        resourceHosts: dH,
        loadTelemetryChunk: Pe.D,
        refreshUrls: async () => (0, Pe.u)(await OH.d.getReplay(be, ie, He)),
        segmentUrls: {
          load: async ee => (await OH.d.getReplaySegmentUrls(be, ie, He, ee, [])).videoSegments,
          maxSequences: Ye.d
        },
        telemetryUrls: {
          load: async ee => (await OH.d.getReplaySegmentUrls(be, ie, He, [], ee)).telemetrySegments,
          maxSequences: Ye.h
        }
      })), [ie, He]);
      return (0, ye.useEffect)((() => {
        let ee = !1;
        return Fe({
          status: "loading"
        }), (0, Pe.H)({
          getReplay: () => OH.d.getReplay(be, ie, He),
          loadDomEvents: Pe.A,
          onPreparing: () => {
            Fe({
              status: "preparing"
            })
          },
          wait: ee => new Promise((ie => {
            setTimeout(ie, ee)
          })),
          isCancelled: () => ee
        }).then((ie => {
          if (!ee && null !== ie) {
            const ee = (0, Pe.y)(ie.replay, ie.domEvents, (ee => Ke("studio:replayVisit", {
              number: ee
            })));
            Fe({
              status: "loaded",
              value: ee
            })
          }
        })).catch((ie => {
          console.error("Failed to load studio replay", ie), ee || Fe({
            status: "error",
            message: (0, Pe.s)(ie, Ke("studio:replayLoadFailed"))
          })
        })), () => {
          ee = !0
        }
      }), [ie, He, Je]), "loading" === Ue.status ? (0, pe.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, pe.jsx)(Ze.b, {})
      }) : "preparing" === Ue.status ? (0, pe.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, pe.jsx)(Ze.b, {}), Ke("studio:replayPreparing")]
      }) : "error" === Ue.status ? (0, pe.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [Ue.message, (0, pe.jsx)(we.M, {
          onClick: () => {
            oe((ee => ee + 1))
          },
          children: Ke("general:tryAgain")
        })]
      }) : (0, pe.jsx)(gH, {
        className: "StudioReplayPlayer",
        data: Ue.value,
        labels: Re,
        options: ke,
        autoPlay: Me || Je > 0
      })
    }

    function tH(ee) {
      let {
        onPlay: ie
      } = ee;
      const {
        t: He
      } = (0, We.v)();
      return (0, pe.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": He("general:play"),
        onClick: ie,
        children: (0, pe.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, pe.jsx)(De.e, {
            name: "play"
          })
        })
      })
    }
    const ZH = Pe.T.replay,
      wH = Pe.T.filters,
      DH = Pe.T.endedAt,
      PH = {
        newPlayers: "studio:replaysFilterNewPlayers",
        quickQuits: "studio:replaysFilterQuickQuits",
        neverMoved: "studio:replaysFilterNeverMoved",
        leftAfterDying: "studio:replaysFilterLeftAfterDying",
        unboundKeys: "studio:replaysFilterUnboundKeys",
        lowFps: "studio:replaysFilterLowFps",
        mobile: "studio:replaysFilterMobile",
        chromebooks: "studio:replaysFilterChromebooks",
        errors: "studio:replaysFilterErrors"
      },
      AH = {
        mobile: "studio:replayTagMobile",
        tablet: "studio:replayTagTablet",
        chromebook: "studio:replayTagChromebook",
        newPlayer: "studio:replayTagNewPlayer",
        quickQuit: "studio:replayTagQuickQuit",
        neverMoved: "studio:replayTagNeverMoved",
        leftAfterDying: "studio:replayTagLeftAfterDying",
        unboundKeys: "studio:replayTagUnboundKeys",
        lowFps: "studio:replayTagLowFps",
        error: "studio:replayTagError"
      };

    function YH(ee) {
      let {
        item: ie,
        selected: He,
        onSelect: ye
      } = ee;
      const {
        t: be
      } = (0, We.v)(), Ke = (0, Pe.t)(ie);
      return (0, pe.jsxs)("button", {
        type: "button",
        className: Me()("StudioReplayListItem", {
          StudioReplayListItemSelected: He
        }),
        onClick: ye,
        children: [(0, pe.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, pe.jsx)("span", {
            children: (0, Pe.o)(ie.startedAtMs)
          }), (0, pe.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: ze(ie.inGameDurationMs)
          })]
        }), Ke.length > 0 && (0, pe.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: Ke.map((ee => (0, pe.jsx)("span", {
            className: Me()("StudioReplayTag", `StudioReplayTag-${ee}`),
            children: be(AH[ee])
          }, ee)))
        })]
      })
    }

    function VH(ee) {
      let {
        gameAnalyticsId: ie,
        userContext: He,
        availability: ye
      } = ee;
      const {
        t: be
      } = (0, We.v)();
      return "on" === ye ? (0, pe.jsx)(aH, {
        gameAnalyticsId: ie,
        userContext: He
      }) : "failed" === ye ? (0, pe.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, pe.jsx)(De.e, {
          name: "face-dizzy"
        }), be("studio:replaysStartFailed"), (0, pe.jsx)(we.M, {
          onClick: () => {
            de.b.startNow()
          },
          children: be("general:tryAgain")
        })]
      }) : (0, pe.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, pe.jsx)(Ze.b, {})
      })
    }

    function aH(ee) {
      var ie, He;
      let {
        gameAnalyticsId: be,
        userContext: Ke
      } = ee;
      const {
        t: Ue
      } = (0, We.v)(), Fe = function(ee, ie) {
        const {
          t: He
        } = (0, We.v)(), [be, Me] = (0, ye.useState)({
          status: "loading"
        });
        return (0, ye.useEffect)((() => {
          let ye = !1;
          return Me({
            status: "loading"
          }), OH.d.listReplays(ie, ee).then((ee => {
            ye || Me({
              status: "loaded",
              value: ee
            })
          })).catch((ee => {
            console.error("Failed to list studio replays", ee), ye || Me({
              status: "error",
              message: (0, Pe.s)(ee, He("studio:replaysLoadFailed"))
            })
          })), () => {
            ye = !0
          }
        }), [ee]), be
      }(be, Ke), [Je, oe] = (0, te.l)(), Re = (0, Pe.Q)(Je.get(wH)), ke = (0, Pe.M)(Je.get(DH)), qe = Je.get(ZH), fe = "loaded" === Fe.status ? (0, Pe.e)(Fe.value.recordings, Re, ke) : [], Te = "loaded" === Fe.status ? (0, Pe.U)(Fe.value.recordings, fe, qe) : [], Xe = null !== (ie = null !== qe && void 0 !== qe ? qe : null === (He = Te[0]) || void 0 === He ? void 0 : He.recordingId) && void 0 !== ie ? ie : null, [ze, Be] = (0, ye.useState)(qe), [Ee, ge] = (0, ye.useState)(!1), Oe = (0, ye.useRef)(null), de = (0, ye.useRef)(null !== qe), Ye = (0, ye.useRef)(null);

      function Ve(ee) {
        ee === ze && ee === Xe || (Ye.current = null, de.current = !0, ge(!0), Be(ee), oe((ie => {
          (0, te.i)(ie, ZH, ee)
        }), {
          push: !0
        }))
      }

      function ae(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        Xe !== ze && (Ye.current = Xe), oe((He => {
          (0, te.i)(He, ZH, Xe), (0, te.i)(He, wH, (0, Pe.k)(ee)), ie && (0, te.i)(He, DH, null)
        }))
      }
      if ((0, ye.useEffect)((() => {
          null !== qe && qe !== Ye.current && Be(qe)
        }), [qe]), (0, ye.useEffect)((() => {
          de.current && null !== Oe.current && (de.current = !1, Oe.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [ze, Fe.status]), "loading" === Fe.status) return (0, pe.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, pe.jsx)(Ze.b, {})
      });
      if ("error" === Fe.status) return (0, pe.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, pe.jsx)(De.e, {
          name: "face-dizzy"
        }), Fe.message]
      });
      const {
        recordings: ce,
        dailyQuota: xe
      } = Fe.value;
      if (0 === ce.length) return (0, pe.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, pe.jsx)(De.e, {
          name: "video"
        }), Ue(0 === xe ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const Le = Pe.S.filter((ee => ce.some((ie => (0, Pe.L)(ie, ee))))),
        Ce = Xe !== ze;
      return (0, pe.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, pe.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== ke && (0, pe.jsxs)(we.M, {
            active: !0,
            onClick: () => {
              ae(Re, !0)
            },
            children: [Ue("studio:replaysFilterEndedAt", {
              minutes: (0, Ae.x)(ke.minute, ke.orLonger ? ke.minute : 1 / 0)
            }), (0, pe.jsx)(De.e, {
              name: "xmark"
            })]
          }), Le.map((ee => (0, pe.jsx)(we.M, {
            active: Re.includes(ee),
            onClick: () => {
              ! function(ee) {
                ae(Re.includes(ee) ? Re.filter((ie => ie !== ee)) : [...Re, ee])
              }(ee)
            },
            children: Ue(PH[ee])
          }, ee))), xe > 0 && (0, pe.jsx)("span", {
            className: "StudioReplaysQuota",
            children: Ue("studio:replaysQuota", {
              count: xe
            })
          })]
        }), (0, pe.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, pe.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === fe.length && (0, pe.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [Ue("studio:replaysNoMatch"), (0, pe.jsx)(we.M, {
                onClick: () => {
                  ae([], !0)
                },
                children: Ue("studio:replaysClearFilters")
              })]
            }), Te.map((ee => (0, pe.jsx)(YH, {
              item: ee,
              selected: ee.recordingId === Xe,
              onSelect: () => {
                Ve(ee.recordingId)
              }
            }, ee.recordingId)))]
          }), null !== Xe && (0, pe.jsxs)("div", {
            ref: Oe,
            className: Me()("StudioReplayViewer", {
              StudioReplayViewerWaiting: Ce
            }),
            children: [!Ce && (0, pe.jsx)(WH, {
              gameAnalyticsId: be,
              recordingId: Xe,
              userContext: Ke,
              autoPlay: Ee
            }, Xe), Ce && (0, pe.jsx)(tH, {
              onPlay: () => {
                Ve(Xe)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);