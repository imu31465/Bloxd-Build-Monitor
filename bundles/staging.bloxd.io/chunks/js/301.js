export const id = 301;
export const ids = [301];
export const modules = {
  42165: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => ZM
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb);
    const Vb = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      gb = 3e3;

    function lb(bb) {
      return bb.down && bb.inPlay && !bb.bound
    }

    function Lb(bb, wb) {
      let Mb = 0,
        eb = bb.length;
      for (; Mb < eb;) {
        const Hb = Mb + eb >> 1;
        bb[Hb].atMs <= wb ? Mb = Hb + 1 : eb = Hb
      }
      return Mb - 1
    }

    function Ib(bb) {
      let {
        code: wb,
        unbound: Mb
      } = bb;
      return `${wb}:${Mb}`
    }

    function Ob(bb, wb) {
      return wb[1] - bb[1] || (bb[0] < wb[0] ? -1 : 1)
    }
    const Ub = {
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

    function tb(bb) {
      var wb;
      const Mb = Ub[bb];
      if (void 0 !== Mb) return Mb;
      const eb = null !== (wb = /^(?:Key|Digit)(.)$/.exec(bb)) && void 0 !== wb ? wb : /^Numpad(.+)$/.exec(bb);
      return null !== eb ? bb.startsWith("Numpad") ? `Num ${eb[1]}` : eb[1] : bb
    }
    const Cb = 250,
      Eb = 60;
    var Fb = Mb(1364);
    const Bb = 6;

    function sb(bb) {
      const wb = Math.max(0, Math.floor(bb / 1e3)),
        Mb = Math.floor(wb / 3600),
        eb = Math.floor(wb % 3600 / 60),
        Hb = String(wb % 60).padStart(2, "0");
      return Mb > 0 ? `${Mb}:${String(eb).padStart(2,"0")}:${Hb}` : `${eb}:${Hb}`
    }

    function mb(bb, wb) {
      return getComputedStyle(bb).getPropertyValue(wb).trim()
    }

    function hb(bb, wb) {
      switch (bb.kind) {
        case "note":
          return bb.label;
        case "hidden":
          return wb.tabHidden;
        default:
          return wb[bb.kind]
      }
    }

    function zb(bb) {
      let {
        draw: wb,
        className: Mb
      } = bb;
      const Hb = (0, eb.useRef)(null);
      return (0, eb.useEffect)((() => {
        const bb = Hb.current,
          Mb = bb.getContext("2d");
        if (null === wb || null === Mb) return;
        const {
          clientWidth: eb,
          clientHeight: pb
        } = bb, Vb = window.devicePixelRatio;
        bb.width = Math.round(eb * Vb), bb.height = Math.round(pb * Vb), Mb.setTransform(Vb, 0, 0, Vb, 0, 0), wb(Mb, eb, pb, bb)
      }), [wb]), (0, Fb.jsx)("canvas", {
        ref: Hb,
        className: Mb
      })
    }

    function Xb(bb) {
      let {
        controller: wb,
        frames: Mb,
        input: Hb,
        markers: pb,
        inactiveRanges: Vb,
        videoGaps: Lb,
        labels: Ib
      } = bb;
      const {
        timeline: Ub
      } = wb, Xb = (0, eb.useRef)(null), [xb, jb] = (0, eb.useState)(0), [Kb, rb] = (0, eb.useState)(null), Rb = (0, eb.useRef)(null), Db = Math.max(1, Ub.durationMs);
      ! function(bb, wb, Mb) {
        (0, eb.useEffect)((() => {
          let eb = 0,
            Hb = NaN;
          const pb = () => {
            var Vb;
            eb = requestAnimationFrame(pb);
            const gb = (null !== (Vb = wb.current) && void 0 !== Vb ? Vb : bb.getPositionMs()) / Math.max(1, bb.timeline.durationMs) * 100;
            gb !== Hb && (Hb = gb, Mb.current.style.setProperty("--brv-position", `${gb}%`))
          };
          return pb(), () => {
            cancelAnimationFrame(eb)
          }
        }), [bb])
      }(wb, Rb, Xb), (0, eb.useEffect)((() => {
        const bb = Xb.current,
          wb = new ResizeObserver((() => {
            jb(bb.clientWidth)
          }));
        return wb.observe(bb), () => {
          wb.disconnect()
        }
      }), []);
      const cb = (0, eb.useMemo)((() => 0 === xb ? null : function(bb, wb, Mb) {
          const eb = Math.max(1, Math.min(Mb, Math.floor(wb.durationMs / Cb))),
            Hb = wb.durationMs / eb,
            pb = new Array(eb).fill(0);
          for (const Vb of bb) wb.contains(Vb.atMs) && pb[Math.min(eb - 1, Math.floor(wb.toPosition(Vb.atMs) / Hb))]++;
          return {
            bucketMs: Hb,
            fps: pb.map((bb => 0 === bb ? null : 1e3 * bb / Hb))
          }
        }(Mb, Ub, Math.round(xb))), [Mb, Ub, xb]),
        Yb = wb.lowFps,
        Zb = (0, eb.useMemo)((() => null === cb ? null : (bb, wb, Mb, eb) => {
          ! function(bb, wb, Mb, eb, Hb, pb) {
            bb.clearRect(0, 0, Mb, eb);
            const Vb = Mb / wb.fps.length;
            wb.fps.forEach(((wb, Mb) => {
              if (null === wb) return;
              const gb = Math.max(1, Math.min(wb, Eb) / Eb * eb);
              bb.fillStyle = wb < Hb ? pb.lowFps : pb.fps, bb.fillRect(Mb * Vb, eb - gb, Math.max(1, Vb), gb)
            }))
          }(bb, cb, wb, Mb, Yb, {
            fps: mb(eb, "--brv-fps"),
            lowFps: mb(eb, "--brv-low-fps")
          })
        }), [cb, Yb]),
        fb = (0, eb.useMemo)((() => {
          if (0 === xb || !Hb.inputRecorded) return null;
          const bb = function(bb, wb, Mb) {
            const eb = Math.max(1, wb.durationMs) / Mb,
              Hb = new Array(Mb).fill(0),
              pb = new Array(Mb).fill(0);
            for (const Vb of bb) {
              if (!Vb.down || !wb.contains(Vb.atMs)) continue;
              const bb = Math.min(Mb - 1, Math.floor(wb.toPosition(Vb.atMs) / eb));
              Hb[bb]++, lb(Vb) && pb[bb]++
            }
            return {
              presses: Hb,
              unbound: pb
            }
          }(Hb.keys, Ub, Math.max(1, Math.round(xb)));
          return (wb, Mb, eb, Hb) => {
            ! function(bb, wb, Mb, eb, Hb) {
              bb.clearRect(0, 0, Mb, eb);
              const pb = Mb / wb.presses.length;
              wb.presses.forEach(((Mb, Vb) => {
                if (0 === Mb) return;
                const gb = wb.unbound[Vb] > 0;
                bb.globalAlpha = gb ? 1 : Math.min(1, .35 + .15 * Mb), bb.fillStyle = gb ? Hb.unbound : Hb.presses, bb.fillRect(Vb * pb, 0, Math.max(gb ? 2 : 1, pb), eb)
              })), bb.globalAlpha = 1
            }(wb, bb, Mb, eb, {
              presses: mb(Hb, "--brv-key-press"),
              unbound: mb(Hb, "--brv-key-unbound")
            })
          }
        }), [Hb, Ub, xb]),
        Ab = (0, eb.useMemo)((() => function(bb) {
          const wb = [];
          for (const eb of bb) {
            var Mb;
            if (!lb(eb)) continue;
            let bb = wb.at(-1);
            (void 0 === bb || eb.atMs - bb.endMs > gb) && (bb = {
              startMs: eb.atMs,
              endMs: eb.atMs,
              counts: new Map
            }, wb.push(bb)), bb.endMs = eb.atMs, bb.counts.set(eb.code, (null !== (Mb = bb.counts.get(eb.code)) && void 0 !== Mb ? Mb : 0) + 1)
          }
          return wb.map((bb => {
            let {
              startMs: wb,
              endMs: Mb,
              counts: eb
            } = bb;
            return {
              startMs: wb,
              endMs: Mb,
              keys: [...eb].sort(Ob)
            }
          }))
        }(Hb.keys.filter((bb => Ub.contains(bb.atMs))))), [Hb.keys, Ub]),
        Wb = bb => Ub.toPosition(bb) / Db * 100,
        Jb = bb => Wb(bb) / 100 * xb,
        Sb = bb => {
          const wb = Xb.current.getBoundingClientRect();
          return {
            px: bb - wb.left,
            positionMs: Math.max(0, Math.min(wb.width, bb - wb.left)) / wb.width * Db
          }
        },
        Nb = null === Kb || 0 === xb ? null : {
          px: Kb,
          positionMs: Math.max(0, Math.min(xb, Kb)) / xb * Db
        },
        vb = null === Nb || null === cb ? null : function(bb, wb) {
          const Mb = Math.max(0, Math.min(bb.fps.length - 1, Math.floor(wb / bb.bucketMs))),
            eb = bb.fps[Mb];
          return null === eb ? null : Math.round(eb)
        }(cb, Nb.positionMs),
        Qb = null !== Nb && Lb.some((bb => Nb.px >= Jb(bb.startMs) && Nb.px < Jb(bb.endMs))),
        Gb = null === Nb ? void 0 : pb.find((bb => {
          var wb;
          return Nb.px >= Jb(bb.atMs) - Bb && Nb.px <= Jb(null !== (wb = bb.endMs) && void 0 !== wb ? wb : bb.atMs) + Bb
        })),
        qb = null === Nb ? void 0 : Ab.find((bb => Nb.px >= Jb(bb.startMs) - Bb && Nb.px <= Jb(bb.endMs) + Bb));
      return (0, Fb.jsxs)("div", {
        ref: Xb,
        className: Hb.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: bb => {
          bb.currentTarget.setPointerCapture(bb.pointerId);
          const wb = Sb(bb.clientX);
          rb(wb.px), Rb.current = wb.positionMs
        },
        onPointerMove: bb => {
          const wb = Sb(bb.clientX);
          rb(wb.px), null !== Rb.current && (Rb.current = wb.positionMs)
        },
        onPointerUp: bb => {
          null !== Rb.current && (wb.seekToPosition(Sb(bb.clientX).positionMs), Rb.current = null)
        },
        onPointerCancel: () => {
          Rb.current = null, rb(null)
        },
        onPointerLeave: () => {
          rb(null)
        },
        children: [(0, Fb.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, Fb.jsx)(zb, {
            draw: Zb,
            className: "brv-seekbar-canvas"
          }), Vb.map((bb => {
            const wb = Wb(bb.startMs);
            return (0, Fb.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${wb}%`,
                width: Wb(bb.endMs) - wb + "%"
              }
            }, bb.startMs)
          })), Lb.map((bb => {
            const wb = Wb(bb.startMs);
            return (0, Fb.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${wb}%`,
                width: Wb(bb.endMs) - wb + "%"
              }
            }, bb.startMs)
          })), (0, Fb.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== Nb && (0, Fb.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: Nb.px
            }
          })]
        }), Hb.inputRecorded && (0, Fb.jsx)(zb, {
          draw: fb,
          className: "brv-seekbar-input"
        }), (0, Fb.jsx)("div", {
          className: "brv-seekbar-markers",
          children: pb.map(((bb, wb) => {
            var Mb;
            const eb = Wb(bb.atMs),
              Hb = void 0 !== bb.endMs;
            return (0, Fb.jsx)("div", {
              className: `brv-marker brv-marker-${bb.kind}${Hb?" brv-marker-range":""}`,
              style: {
                left: `${eb}%`,
                width: Hb ? Wb(null !== (Mb = bb.endMs) && void 0 !== Mb ? Mb : bb.atMs) - eb + "%" : void 0
              }
            }, wb)
          }))
        }), (0, Fb.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== Nb && (0, Fb.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: Nb.px
          },
          children: [sb(Nb.positionMs), null !== vb && ` \xb7 ${Ib.fps(vb)}`, void 0 !== Gb && ` \xb7 ${hb(Gb,Ib)}`, Qb && ` \xb7 ${Ib.videoGap}`, void 0 !== qb && ` \xb7 ${Ib.unboundKeys((ab=qb.keys,ab.map((bb=>{let[wb,Mb]=bb;return Mb>1?`${tb(wb)} \xd7${Mb}`:tb(wb)})).join(", ")))}`]
        })]
      });
      var ab
    }
    var xb = Mb(5518),
      jb = Mb(1259),
      Kb = Mb(5411),
      rb = Mb(1468),
      Rb = Mb(1616),
      Db = Mb(1475),
      cb = Mb(7675),
      Yb = Mb(6145),
      Zb = Mb(6142);
    const fb = [.5, 1, 2, 4, 8, 16];
    var Ab = Mb(42168);

    function Wb(bb) {
      const wb = bb.filter((bb => bb.endMs > bb.startMs)).sort(((bb, wb) => bb.startMs - wb.startMs)),
        Mb = [];
      for (const eb of wb) {
        const bb = Mb.at(-1);
        void 0 !== bb && eb.startMs <= bb.endMs ? bb.endMs = Math.max(bb.endMs, eb.endMs) : Mb.push({
          ...eb
        })
      }
      return Mb
    }
    class Jb {
      constructor(bb) {
        this.gF = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.gF = Wb(bb), this.positionStarts = [];
        let wb = 0;
        for (const Mb of this.gF) this.positionStarts.push(wb), wb += Mb.endMs - Mb.startMs;
        this.durationMs = wb
      }
      get startMs() {
        var bb, wb;
        return null !== (bb = null === (wb = this.gF[0]) || void 0 === wb ? void 0 : wb.startMs) && void 0 !== bb ? bb : 0
      }
      get endMs() {
        var bb, wb;
        return null !== (bb = null === (wb = this.gF.at(-1)) || void 0 === wb ? void 0 : wb.endMs) && void 0 !== bb ? bb : 0
      }
      toPosition(bb) {
        for (let wb = 0; wb < this.gF.length; wb++) {
          const Mb = this.gF[wb];
          if (bb < Mb.endMs) return this.positionStarts[wb] + Math.max(0, bb - Mb.startMs)
        }
        return this.durationMs
      }
      toTime(bb) {
        const wb = Math.max(0, Math.min(this.durationMs, bb));
        for (let Mb = this.gF.length - 1; Mb >= 0; Mb--)
          if (wb >= this.positionStarts[Mb]) return this.gF[Mb].startMs + (wb - this.positionStarts[Mb]);
        return this.startMs
      }
      contains(bb) {
        return this.gF.some((wb => bb >= wb.startMs && bb < wb.endMs))
      }
      nextPlayableTime(bb) {
        for (const wb of this.gF) {
          if (bb < wb.startMs) return wb.startMs;
          if (bb < wb.endMs) return bb
        }
        return null
      }
    }

    function Sb(bb) {
      return [...bb].sort(((bb, wb) => bb.startMs - wb.startMs))
    }

    function Nb(bb, wb) {
      let Mb = 1 / 0,
        eb = -1 / 0;
      const Hb = bb => {
        Mb = Math.min(Mb, bb), eb = Math.max(eb, bb)
      };
      for (const pb of [...bb.videoSegments, ...bb.telemetryChunks]) Hb(pb.startMs), Hb(pb.endMs);
      for (const pb of bb.domEvents) Hb(wb.toEpoch(pb.timestamp));
      return Mb < eb ? {
        startMs: Mb,
        endMs: eb
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class vb {
      constructor(bb, wb) {
        this.wallNowMs = wb, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = bb, this.anchorWallMs = wb()
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
      timeAtWall(bb) {
        return this.playingState ? this.anchorTimeMs + (bb - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(bb) {
        this.anchorTimeMs = bb, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(bb) {
        this.reanchor(), this.speedState = bb
      }
      reanchor() {
        const bb = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(bb), this.anchorWallMs = bb
      }
    }
    const Qb = "bloxd-clock";
    class Gb {
      constructor(bb) {
        this.samples = void 0, this.samples = [];
        for (const Mb of bb) {
          var wb;
          const bb = Mb.data;
          Mb.type === Ab.d.Custom && (null === bb || void 0 === bb ? void 0 : bb.tag) === Qb && "number" === typeof(null === (wb = bb.payload) || void 0 === wb ? void 0 : wb.epochMs) && this.samples.push({
            domMs: Mb.timestamp,
            offsetMs: bb.payload.epochMs - Mb.timestamp
          })
        }
        this.samples.sort(((bb, wb) => bb.domMs - wb.domMs))
      }
      toEpoch(bb) {
        return bb + this.offsetAtDom(bb)
      }
      toDom(bb) {
        return bb - this.offsetAtDom(bb)
      }
      offsetAtDom(bb) {
        var wb, Mb;
        let eb = 0,
          Hb = this.samples.length - 1;
        for (; eb < Hb;) {
          const wb = Math.ceil((eb + Hb) / 2);
          this.samples[wb].domMs <= bb ? eb = wb : Hb = wb - 1
        }
        return null !== (wb = null === (Mb = this.samples[eb]) || void 0 === Mb ? void 0 : Mb.offsetMs) && void 0 !== wb ? wb : 0
      }
    }
    const qb = new Set([Ab.e.MouseMove, Ab.e.MouseInteraction, Ab.e.Scroll, Ab.e.Input, Ab.e.TouchMove, Ab.e.Drag]),
      ab = "bloxd-active",
      ib = "player_death",
      ub = "error",
      db = {
        $exception: "error",
        [ub]: "error",
        death: "death",
        [ib]: "death"
      };

    function Pb(bb, wb, Mb) {
      return function(bb, wb) {
        const Mb = [];
        for (const eb of bb) {
          let bb = eb.startMs;
          for (const Hb of wb) Hb.endMs <= bb || Hb.startMs >= eb.endMs || (Hb.startMs > bb && Mb.push({
            startMs: bb,
            endMs: Hb.startMs
          }), bb = Math.max(bb, Hb.endMs));
          bb < eb.endMs && Mb.push({
            startMs: bb,
            endMs: eb.endMs
          })
        }
        return Mb
      }(function(bb) {
        const wb = [];
        for (const Mb of bb) {
          const bb = wb.at(-1);
          void 0 !== bb && Mb.atMs - bb.endMs <= 5e3 ? bb.endMs = Mb.atMs : wb.push({
            startMs: Mb.atMs,
            endMs: Mb.atMs
          })
        }
        return wb
      }(bb), Wb([...wb, ...Mb])).filter((bb => bb.endMs - bb.startMs >= 1e3))
    }

    function nb(bb) {
      var wb, Mb, eb;
      return bb.type === Ab.d.IncrementalSnapshot ? qb.has(null !== (Mb = null === (eb = bb.data) || void 0 === eb ? void 0 : eb.source) && void 0 !== Mb ? Mb : -1) : bb.type === Ab.d.Custom && (null === (wb = bb.data) || void 0 === wb ? void 0 : wb.tag) === ab
    }

    function yb(bb, wb) {
      const Mb = [];
      for (const Vb of bb)
        if (Vb.type === Ab.d.Custom) {
          var eb;
          const bb = null === (eb = Vb.data) || void 0 === eb ? void 0 : eb.tag,
            Hb = void 0 === bb ? void 0 : db[bb];
          void 0 !== Hb && Mb.push({
            kind: Hb,
            atMs: wb.toEpoch(Vb.timestamp)
          })
        } else if (Vb.type === Ab.d.Plugin) {
        var Hb, pb;
        const bb = Vb.data;
        "rrweb/console@1" !== (null === bb || void 0 === bb ? void 0 : bb.plugin) || "error" !== (null === (Hb = bb.payload) || void 0 === Hb ? void 0 : Hb.level) && "assert" !== (null === (pb = bb.payload) || void 0 === pb ? void 0 : pb.level) || Mb.push({
          kind: "error",
          atMs: wb.toEpoch(Vb.timestamp)
        })
      }
      return Mb
    }
    const ob = 3e6;
    class Tb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ob;
        this.fetchUrls = bb, this.onUrls = wb, this.wallNowMs = Mb, this.refreshableAfterMs = eb, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = Mb()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const bb = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        bb > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), bb) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(bb) {
        this.inFlight = !0;
        const wb = this.wallNowMs();
        this.lastRefreshWallMs = wb;
        let Mb = !1;
        bb().then((bb => {
          this.destroyed || (this.urlsFetchedAtWallMs = wb, this.onUrls(bb))
        })).catch((bb => {
          console.error("Failed to refresh the replay's URLs.", bb), Mb = !0
        })).finally((() => {
          this.inFlight = !1, Mb && this.request()
        }))
      }
    }
    class kb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ob;
        this.source = bb, this.description = wb, this.wallNowMs = Mb, this.refreshableAfterMs = eb, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(bb) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const wb = this.wallNowMs();
        for (const Mb of bb) this.entries.set(Mb.sequence, {
          urls: Mb,
          fetchedAtWallMs: wb
        })
      }
      get(bb) {
        const wb = this.getFresh(bb);
        return null !== wb ? wb : null === this.source || this.unavailable.has(bb) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(bb) {
        return null === this.getFresh(bb) && !this.unavailable.has(bb)
      }
      request(bb) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const wb = bb.filter((bb => this.needs(bb)));
        wb.length > 0 && this.fetch(this.source, wb.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(bb) {
        const wb = this.entries.get(bb);
        return void 0 === wb ? null : null === this.source || this.wallNowMs() - wb.fetchedAtWallMs < this.refreshableAfterMs ? wb.urls : null
      }
      fetch(bb, wb) {
        this.inFlight = !0;
        const Mb = this.wallNowMs();
        bb.load(wb).then((bb => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const eb = new Set;
          for (const wb of bb) this.entries.set(wb.sequence, {
            urls: wb,
            fetchedAtWallMs: Mb
          }), eb.add(wb.sequence);
          for (const Mb of wb) eb.has(Mb) || (console.warn(`Replay sequence ${Mb} has no ${this.description}.`), this.unavailable.add(Mb))
        })).catch((bb => {
          console.error(`Failed to fetch the replay's ${this.description}.`, bb), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class bw {
      constructor(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ob;
        this.load = wb, this.onLoaded = Mb, this.onFailed = eb, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = ww([]), this.hidden = [], this.destroyed = !1, this.chunks = [...bb].sort(((bb, wb) => bb.startMs - wb.startMs)).map((bb => ({
          chunk: bb,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new kb(Hb, "telemetry URLs", pb, Vb), this.urls.reset(ew(bb))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((bb => "loaded" === bb.status)).length
      }
      update(bb, wb, Mb) {
        if (null === this.load || this.destroyed) return;
        const eb = wb.toPosition(bb),
          Hb = wb.toTime(eb - 1e4),
          pb = wb.toTime(eb + 6e4 * Math.max(1, Mb)),
          Vb = wb.toTime(eb + 12e4 * Math.max(1, Mb)),
          gb = this.chunks.filter((bb => "idle" === bb.status && bb.chunk.endMs >= Hb && bb.chunk.startMs <= Vb)).sort(((wb, Mb) => Hw(bb, wb.chunk) - Hw(bb, Mb.chunk)));
        this.urls.request(gb.flatMap((bb => {
          var wb;
          let {
            chunk: Mb
          } = bb;
          return null !== (wb = Mb.sequence) && void 0 !== wb ? wb : []
        })));
        for (const lb of gb) {
          if (this.loading >= 3) return;
          const bb = lb.chunk.startMs <= pb ? this.getUrl(lb.chunk) : null;
          null !== bb && this.startLoad(lb, bb, this.load)
        }
      }
      replaceUrls(bb) {
        this.urls.reset(ew(bb));
        for (const wb of this.chunks) {
          const Mb = bb.find((bb => bb.startMs === wb.chunk.startMs && bb.endMs === wb.chunk.endMs));
          void 0 !== Mb && (wb.chunk = Mb, "failed" === wb.status && (wb.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(bb) {
        var wb;
        if (void 0 === bb.sequence) return null !== (wb = bb.url) && void 0 !== wb ? wb : null;
        const Mb = this.urls.get(bb.sequence);
        return "string" === typeof Mb ? null : Mb.url
      }
      startLoad(bb, wb, Mb) {
        bb.status = "loading", bb.attempts++, this.loading++, Mb(wb).then((wb => {
          this.destroyed || (bb.status = "loaded", bb.telemetry = wb, this.merge(), this.onLoaded())
        })).catch((wb => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${bb.chunk.startMs}-${bb.chunk.endMs}.`, wb), bb.status = bb.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const bb = [];
        let wb = !1;
        for (const eb of this.chunks) {
          const Mb = bb.at(-1);
          if (null === eb.telemetry) {
            wb = !1;
            continue
          }
          const Hb = Mw(eb.telemetry, eb.chunk);
          void 0 !== Mb && wb && eb.chunk.startMs <= Mb.endMs + 1e3 ? (Mb.telemetry.push(Hb), Mb.endMs = eb.chunk.endMs) : (bb.push({
            telemetry: [Hb],
            endMs: eb.chunk.endMs
          }), wb = !0)
        }
        const Mb = bb.map((bb => function(bb, wb) {
          const Mb = bb.actions.at(-1);
          if (void 0 === Mb || 0 === Mb.bits) return bb;
          return {
            ...bb,
            actions: [...bb.actions, {
              atMs: wb,
              bits: 0
            }]
          }
        }(ww(bb.telemetry), bb.endMs)));
        this.merged = ww(Mb), this.hidden = Mb.flatMap(((wb, Mb) => function(bb, wb) {
          const Mb = [];
          let eb = null;
          for (const {
              atMs: Hb,
              event: pb
            }
            of bb.events) "hidden" === pb && null === eb ? eb = Hb : "visible" === pb && null !== eb && (Mb.push({
            startMs: eb,
            endMs: Hb
          }), eb = null);
          return null !== eb && Mb.push({
            startMs: eb,
            endMs: wb
          }), Wb(Mb)
        }(wb, bb[Mb].endMs)))
      }
    }

    function ww(bb) {
      return {
        inputRecorded: bb.some((bb => bb.keys.length > 0)),
        frames: bb.flatMap((bb => bb.frames)),
        states: bb.flatMap((bb => bb.states)),
        events: bb.flatMap((bb => bb.events)),
        actions: bb.flatMap((bb => bb.actions)),
        keys: bb.flatMap((bb => bb.keys))
      }
    }

    function Mw(bb, wb) {
      const {
        actions: Mb
      } = bb;
      return !bb.inputRecorded || Mb.length > 0 && Mb[0].atMs <= wb.startMs + 1 ? bb : {
        ...bb,
        actions: [{
          atMs: wb.startMs,
          bits: 0
        }, ...Mb]
      }
    }

    function ew(bb) {
      return bb.flatMap((bb => {
        let {
          sequence: wb,
          url: Mb
        } = bb;
        return void 0 === wb || void 0 === Mb ? [] : [{
          sequence: wb,
          url: Mb
        }]
      }))
    }

    function Hw(bb, wb) {
      return bb < wb.startMs ? wb.startMs - bb : bb > wb.endMs ? 2 * (bb - wb.endMs) : 0
    }
    class pw {
      constructor(bb, wb, Mb, eb) {
        this.data = bb, this.domClock = wb, this.timeline = Mb, this.options = eb, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(bb, wb) {
          return bb.filter(nb).map((bb => wb.toEpoch(bb.timestamp)))
        }(bb.domEvents, wb), this.telemetry = new bw(bb.telemetryChunks, eb.loadTelemetryChunk, (() => {
          this.rebuild()
        }), eb.onTelemetryFailed, eb.telemetryUrls), this.rebuild()
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
      update(bb, wb) {
        this.telemetry.update(bb, this.timeline, wb)
      }
      replaceTelemetryUrls(bb) {
        this.telemetry.replaceUrls(bb)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(bb) {
        return this.telemetry.hiddenRanges.some(Vw(bb))
      }
      isVideoGapAt(bb) {
        return this.videoGapRanges.some(Vw(bb))
      }
      rebuild() {
        const bb = this.telemetry.telemetry,
          wb = this.telemetry.hiddenRanges;
        this.videoGapRanges = Pb(bb.frames, this.data.videoSegments, wb), this.inactiveRangeList = function(bb, wb, Mb, eb) {
          const Hb = [...wb];
          if (bb.length > 0) {
            const wb = [Mb.startMs, ...bb, Mb.endMs];
            for (let bb = 1; bb < wb.length; bb++) {
              const Mb = wb[bb - 1],
                pb = wb[bb] - 1e3;
              pb - Mb >= eb && Hb.push({
                startMs: Mb,
                endMs: pb
              })
            }
          }
          return Wb(Hb).filter((bb => bb.endMs - bb.startMs >= eb))
        }(this.activityTimes, wb, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(bb) {
          const {
            timeline: wb
          } = bb;
          return [...yb(bb.domEvents, bb.domClock), ...bb.telemetry.events.filter((bb => {
            let {
              event: wb
            } = bb;
            return "contextLost" === wb
          })).map((bb => {
            let {
              atMs: wb
            } = bb;
            return {
              kind: "graphicsCrash",
              atMs: wb
            }
          })), ...bb.hidden.map((bb => ({
            kind: "hidden",
            atMs: bb.startMs,
            endMs: bb.endMs
          }))), ...bb.extraMarkers].filter((bb => bb.atMs >= wb.startMs && bb.atMs <= wb.endMs && (wb.contains(bb.atMs) || wb.contains(bb.atMs - 1)))).sort(((bb, wb) => bb.atMs - wb.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: bb,
          extraMarkers: this.data.markers,
          hidden: wb,
          timeline: this.timeline
        })
      }
    }

    function Vw(bb) {
      return wb => bb >= wb.startMs && bb < wb.endMs
    }
    class gw {
      constructor() {
        this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
          handler: (bb, wb, Mb) => {
            let {
              replayer: eb
            } = Mb;
            this.record(bb), wb && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
              this.settleQueued = !1, this.settle(eb)
            })))
          }
        }
      }
      settle(bb) {
        const wb = bb.iframe.contentDocument;
        if (null === wb || void 0 === wb || !wb.documentElement.classList.contains("rrweb-paused")) return;
        const Mb = bb.getMetaData().startTime + bb.getCurrentTime();
        ! function(bb, wb, Mb, eb) {
          for (const Hb of bb) {
            const bb = Hb.effect,
              pb = Mb.get(wb.getId(bb.target)),
              Vb = void 0 === pb ? 1 / 0 : eb - pb,
              gb = Math.min(Math.max(Vb, Number(Hb.currentTime)), Number(bb.getComputedTiming().endTime));
            Number.isFinite(gb) && (Hb.currentTime = gb)
          }
        }(wb.getAnimations(), bb.getMirror(), this.addedAt, Mb)
      }
      record(bb) {
        if (bb.type === Ab.d.FullSnapshot) this.addedAt.clear();
        else if (bb.type === Ab.d.IncrementalSnapshot && bb.data.source === Ab.e.Mutation) {
          for (const {
              id: wb
            }
            of bb.data.removes) this.addedAt.delete(wb);
          for (const {
              node: wb
            }
            of bb.data.adds) this.addedAt.set(wb.id, bb.timestamp)
        }
      }
    }
    const lw = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      Lw = new Set(["srcset", "imagesrcset"]),
      Iw = new Set(["to", "from", "by", "values"]),
      Ow = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      Uw = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      tw = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      Cw = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      Ew = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      Fw = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      Bw = /^data:image\/(?!svg)/i,
      sw = "about:invalid";

    function mw(bb, wb) {
      let {
        hosts: Mb
      } = wb, eb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Hb = bb.trim();
      if (/[\\\u0000-\u001f]/.test(Hb)) return !1;
      if (!Fw.test(Hb)) return !0;
      let pb;
      try {
        pb = new URL(Hb.startsWith("//") ? `https:${Hb}` : Hb)
      } catch {
        return !1
      }
      return "data:" === pb.protocol ? eb ? "text/css" !== Hb.slice(5).split(/[,;]/)[0].trim().toLowerCase() : Bw.test(Hb) : "blob:" === pb.protocol || ("http:" === pb.protocol || "https:" === pb.protocol) && Mb.some((bb => pb.hostname === bb || pb.hostname.endsWith(`.${bb}`)))
    }

    function hw(bb, wb) {
      return bb.replace(Uw, (function(bb) {
        for (var Mb = arguments.length, eb = new Array(Mb > 1 ? Mb - 1 : 0), Hb = 1; Hb < Mb; Hb++) eb[Hb - 1] = arguments[Hb];
        if (mw(eb.slice(0, 7).find((bb => "string" === typeof bb)), wb, !0)) return bb;
        const pb = bb.slice(0, 4).toLowerCase();
        return "url(" === pb ? `url("${sw}")` : "@imp" === pb ? `@import "${sw}"` : `"${sw}"`
      }))
    }

    function zw(bb) {
      return Ew.test(bb.replace(Uw, '""'))
    }

    function Xw(bb) {
      let wb = "between";
      for (let Mb = 0; Mb < bb.length; Mb++) {
        const eb = bb[Mb];
        if ("/" === eb && "*" === bb[Mb + 1]) {
          if (Mb = bb.indexOf("*/", Mb + 2), -1 === Mb) return "open";
          Mb++, wb = "between"
        } else if ('"' === eb || "'" === eb) {
          for (Mb++; Mb < bb.length && bb[Mb] !== eb && !/[\n\r\f]/.test(bb[Mb]); Mb++) "\\" === bb[Mb] && Mb++;
          if (Mb >= bb.length) return "open";
          wb = "token"
        } else "\\" === eb ? (Mb++, wb = "token") : ";" === eb || "{" === eb || "}" === eb ? wb = "between" : /\s/.test(eb) || (wb = "token")
      }
      return wb
    }

    function xw(bb, wb) {
      const Mb = hw(bb, wb);
      if (zw(Mb) || "open" === Xw(Mb)) return "";
      if (!Mb.includes("\\")) return Mb;
      const eb = function(bb) {
        return bb.replace(Cw, ((bb, wb, Mb) => void 0 !== wb ? String.fromCodePoint(Math.min(parseInt(wb, 16), 1114111)) : null !== Mb && void 0 !== Mb ? Mb : ""))
      }(Mb);
      return hw(eb, wb) !== eb || zw(eb) ? "" : Mb
    }

    function jw(bb, wb) {
      const Mb = tw.test(bb) ? xw(bb, wb) : bb;
      return Mb.split("/* rr_split */").every((bb => "between" === Xw(bb))) ? Mb : ""
    }

    function Kw(bb, wb, Mb) {
      if ("string" === typeof wb) {
        const eb = bb.toLowerCase();
        if (Ow.has(eb)) return null;
        if (Lw.has(eb)) return function(bb, wb) {
          return bb.split(",").every((bb => {
            const Mb = bb.trim().split(/\s+/)[0];
            return void 0 === Mb || "" === Mb || mw(Mb, wb)
          }))
        }(wb, Mb) ? wb : null;
        if (Iw.has(eb)) {
          return wb.split(";").every((bb => mw(bb, Mb))) ? Kw("", wb, Mb) : null
        }
        return lw.has(eb) ? mw(wb, Mb) ? wb : null : "_csstext" === eb ? jw(wb, Mb) : tw.test(wb) ? xw(wb, Mb) : wb
      }
      if (Array.isArray(wb)) return wb.map((bb => Kw("", bb, Mb)));
      if (null !== wb && "object" === typeof wb) {
        const eb = "style" === bb.toLowerCase(),
          Hb = {};
        for (const [bb, Vb] of Object.entries(wb)) Hb[bb] = Kw(eb ? "" : bb, Vb, Mb);
        const {
          id: pb
        } = Hb;
        if ("number" === typeof pb && Mb.styleTextIds.has(pb))
          for (const bb of ["textContent", "value"]) {
            const wb = Hb[bb];
            "string" === typeof wb && (Hb[bb] = jw(wb, Mb))
          }
        return Hb
      }
      return wb
    }

    function rw(bb, wb) {
      const Mb = (bb, eb) => {
        if (null === bb || "object" !== typeof bb) return;
        const Hb = bb;
        if (wb(Hb, eb), Array.isArray(Hb.childNodes))
          for (const wb of Hb.childNodes) Mb(wb, Hb.id)
      };
      for (const eb of bb) {
        const bb = eb.data;
        if (eb.type === Ab.d.FullSnapshot) Mb(null === bb || void 0 === bb ? void 0 : bb.node, null);
        else if (eb.type === Ab.d.IncrementalSnapshot && Array.isArray(null === bb || void 0 === bb ? void 0 : bb.adds))
          for (const wb of bb.adds) Mb(null === wb || void 0 === wb ? void 0 : wb.node, null === wb || void 0 === wb ? void 0 : wb.parentId)
      }
    }

    function Rw(bb) {
      const wb = new Set,
        Mb = [];
      rw(bb, ((bb, eb) => {
        let {
          id: Hb,
          tagName: pb
        } = bb;
        "number" === typeof Hb && ("string" === typeof pb && "style" === pb.toLowerCase() && wb.add(Hb), Mb.push({
          id: Hb,
          parentId: eb
        }))
      }));
      const eb = new Set;
      for (const {
          id: Hb,
          parentId: pb
        }
        of Mb) "number" === typeof pb && wb.has(pb) && eb.add(Hb);
      return eb
    }
    const Dw = {
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
      Yw = {
        pointer: ["none", "coarse", "fine"],
        "any-pointer": ["none", "coarse", "fine"],
        hover: ["none", "hover"],
        "any-hover": ["none", "hover"]
      },
      Zw = "(min-width: 0px)",
      fw = "(not (min-width: 0px))",
      Aw = /@media\b[^{;]*/gi,
      Ww = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
      Jw = new Set(["_cssText", "rule", "replace", "replaceSync"]);

    function Sw(bb, wb) {
      return bb.replace(Aw, (bb => bb.replace(Ww, ((bb, Mb, eb) => {
        const Hb = Mb.toLowerCase(),
          pb = Dw[wb][Hb];
        if (void 0 === eb) return "none" === pb ? fw : Zw;
        const Vb = eb.toLowerCase();
        return Yw[Hb].includes(Vb) ? Vb === pb ? Zw : fw : bb
      }))))
    }

    function Nw(bb) {
      const wb = bb.attributes,
        Mb = null === wb || void 0 === wb ? void 0 : wb.rel,
        eb = null === wb || void 0 === wb ? void 0 : wb.href;
      return "link" === bb.tagName && "string" === typeof Mb && Mb.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof eb ? eb : null
    }

    function vw(bb) {
      const wb = new Map;
      rw(bb, (bb => {
        const Mb = Nw(bb);
        null !== Mb && wb.set(bb.id, Mb)
      }));
      const Mb = new Map;
      for (const Hb of bb) {
        const bb = Hb.data;
        if (Hb.type === Ab.d.IncrementalSnapshot && (null === bb || void 0 === bb ? void 0 : bb.source) === Ab.e.Mutation)
          for (const Hb of null !== (eb = bb.attributes) && void 0 !== eb ? eb : []) {
            var eb;
            const bb = Hb.attributes._cssText,
              pb = wb.get(Hb.id);
            "string" !== typeof bb || void 0 === pb || Mb.has(pb) || Mb.set(pb, bb)
          }
      }
      return Mb
    }

    function Qw(bb, wb, Mb) {
      var eb;
      if ("string" === typeof bb) return null !== Mb.pointer && Jw.has(wb) ? Sw(bb, Mb.pointer) : bb;
      if (Array.isArray(bb)) {
        let wb = !1;
        const eb = bb.map((bb => {
          const eb = Qw(bb, "", Mb);
          return wb ||= eb !== bb, eb
        }));
        return wb ? eb : bb
      }
      if (null === bb || "object" !== typeof bb) return bb;
      const Hb = function(bb, wb) {
        const Mb = bb.attributes,
          eb = Nw(bb),
          Hb = null !== eb && void 0 === (null === Mb || void 0 === Mb ? void 0 : Mb._cssText) ? wb.sheets.get(eb) : void 0;
        return void 0 === Hb ? bb : {
          ...bb,
          attributes: {
            ...Mb,
            _cssText: Hb
          }
        }
      }(bb, Mb);
      let pb = null;
      for (const [gb, lb] of Object.entries(Hb)) {
        const bb = Qw(lb, gb, Mb);
        bb !== lb && (pb ??= {
          ...Hb
        }, pb[gb] = bb)
      }
      const {
        id: Vb
      } = Hb;
      if (null !== Mb.pointer && "number" === typeof Vb && Mb.styleTextIds.has(Vb))
        for (const gb of ["textContent", "value"]) {
          const bb = Hb[gb],
            wb = "string" === typeof bb ? Sw(bb, Mb.pointer) : bb;
          wb !== bb && (pb ??= {
            ...Hb
          }, pb[gb] = wb)
        }
      return null !== (eb = pb) && void 0 !== eb ? eb : Hb
    }
    const Gw = "brv-styles",
      qw = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      aw = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${qw.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class iw {
      static create(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        if (!wb.some((bb => bb.type === Ab.d.FullSnapshot))) return null;
        const lb = function(bb, wb) {
          const Mb = {
            sheets: vw(bb),
            styleTextIds: Rw(bb),
            pointer: wb
          };
          return bb.map((bb => {
            if (bb.type !== Ab.d.FullSnapshot && bb.type !== Ab.d.IncrementalSnapshot) return bb;
            const wb = Qw(bb.data, "data", Mb);
            return wb === bb.data ? bb : {
              ...bb,
              data: wb
            }
          }))
        }(function(bb, wb) {
          const Mb = {
            hosts: wb,
            styleTextIds: Rw(bb)
          };
          return bb.map((bb => bb.type === Ab.d.Meta ? bb : {
            ...bb,
            data: Kw("data", bb.data, Mb)
          }))
        }(wb, pb), Mb);
        return new iw(bb, lb, eb, Hb, Vb, gb)
      }
      constructor(bb, wb, Mb, eb, Hb, pb) {
        var Vb, gb, lb, Lb;
        this.domClock = Mb, this.canvasSelectors = eb, this.videoLayer = Hb, this.replayer = void 0, this.pausedAnimations = new gw, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (Vb = null === (gb = wb[0]) || void 0 === gb ? void 0 : gb.timestamp) && void 0 !== Vb ? Vb : 0, this.lastDomMs = null !== (lb = null === (Lb = wb.at(-1)) || void 0 === Lb ? void 0 : Lb.timestamp) && void 0 !== lb ? lb : 0, this.replayer = new Ab.i(wb, {
          root: bb,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          plugins: [this.pausedAnimations.plugin],
          insertStyleRules: qw
        }), this.replayer.on("resize", (bb => {
          const {
            width: wb,
            height: Mb
          } = bb;
          pb({
            width: wb,
            height: Mb
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect(), this.pausedAnimations.settle(this.replayer)
        }))
      }
      sync(bb, wb) {
        const Mb = this.domOffsetAt(bb);
        wb ? this.replayer.play(Mb) : this.replayer.pause(Mb), this.lastDomCheckMs = performance.now()
      }
      update(bb, wb, Mb) {
        Mb - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = Mb, this.placeVideoOverCanvas()), wb && Mb - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = Mb, this.checkDrift(bb))
      }
      setSpeed(bb) {
        this.replayer.setConfig({
          speed: bb
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(bb) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(bb)) - this.firstDomMs)
      }
      checkDrift(bb) {
        const wb = this.domOffsetAt(bb);
        wb >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - wb) > 400 && this.replayer.play(wb)
      }
      placeVideoOverCanvas() {
        const bb = this.replayer.iframe.contentDocument,
          wb = null === bb ? null : function(bb, wb) {
            for (const Mb of wb) {
              const wb = bb.querySelector(Mb);
              if (null !== wb) return wb
            }
            return null
          }(bb, this.canvasSelectors),
          Mb = this.videoLayer.element;
        null !== wb ? (Mb.previousSibling !== wb && wb.after(Mb), Mb.style.display = "", Mb.style.left = `${wb.offsetLeft}px`, Mb.style.top = `${wb.offsetTop}px`, Mb.style.width = `${wb.offsetWidth}px`, Mb.style.height = `${wb.offsetHeight}px`) : Mb.style.display = "none"
      }
    }
    const uw = {
      width: 1280,
      height: 720
    };
    class dw {
      constructor(bb, wb) {
        this.root = bb, this.onViewportChanged = wb, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", bb.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(bb)
      }
      setViewport(bb) {
        var wb;
        null === bb || bb.width <= 0 || bb.height <= 0 || bb.width === (null === (wb = this.viewport) || void 0 === wb ? void 0 : wb.width) && bb.height === this.viewport.height || (this.viewport = bb, this.element.style.width = `${bb.width}px`, this.element.style.height = `${bb.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var bb;
        const wb = null !== (bb = this.viewport) && void 0 !== bb ? bb : uw,
          Mb = this.root.getBoundingClientRect(),
          eb = Math.min(Mb.width / wb.width, Mb.height / wb.height),
          Hb = (Mb.width - wb.width * eb) / 2,
          pb = (Mb.height - wb.height * eb) / 2;
        this.element.style.transform = `translate(${Hb}px, ${pb}px) scale(${eb})`
      }
    }
    class Pw {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ob;
        this.urls = void 0, this.urls = new kb(bb, "video URLs", wb, Mb)
      }
      reset(bb) {
        this.urls.reset(bb.flatMap((bb => {
          var wb;
          return null !== (wb = function(bb) {
            return "url" in bb ? null === bb.url ? null : {
              sequence: bb.sequence,
              url: bb.url
            } : void 0 === bb.partUrls ? null : {
              sequence: bb.sequence,
              partUrls: bb.partUrls
            }
          }(bb)) && void 0 !== wb ? wb : []
        })))
      }
      get(bb) {
        return this.urls.get(bb)
      }
      update(bb, wb, Mb) {
        this.urls.request(function(bb, wb, Mb, eb) {
          return bb.filter((bb => bb.endMs > wb && bb.startMs < wb + Mb && eb(bb.sequence))).map((bb => bb.sequence))
        }(bb, wb, 12e4 * Math.max(1, Mb), (bb => this.urls.needs(bb))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function nw(bb, wb, Mb) {
      const eb = [];
      let Hb = bb.length,
        pb = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, bb.length)
      }, (() => (async () => {
        for (; pb < Hb;) {
          const gb = pb++;
          try {
            eb[gb] = await wb(bb[gb], Mb)
          } catch (Vb) {
            if (Mb.aborted) throw Vb;
            console.warn(`Replay video part ${gb} failed to load; playing the parts before it.`, Vb), Hb = Math.min(Hb, gb)
          }
        }
      })()))), eb.slice(0, Hb)
    }

    function yw(bb) {
      const wb = [];
      let Mb = 0;
      for (const Ib of bb) wb.push(Mb), Mb += Ib.byteLength;
      let eb = 0;
      const Hb = Mb => {
          for (; wb[eb] > Mb;) eb--;
          for (; eb + 1 < wb.length && wb[eb + 1] <= Mb;) eb++;
          return bb[eb][Mb - wb[eb]]
        },
        pb = bb => Hb(bb) * 2 ** 24 + 65536 * Hb(bb + 1) + 256 * Hb(bb + 2) + Hb(bb + 3);
      let Vb = 0,
        gb = !1,
        lb = !1,
        Lb = 0;
      for (; Vb + 8 <= Mb;) {
        const bb = String.fromCharCode(Hb(Vb + 4), Hb(Vb + 5), Hb(Vb + 6), Hb(Vb + 7));
        let wb = pb(Vb);
        if (1 === wb) {
          if (Vb + 16 > Mb) break;
          wb = pb(Vb + 8) * 2 ** 32 + pb(Vb + 12)
        } else 0 === wb && (wb = Mb - Vb);
        if (wb < 8 || Vb + wb > Mb) break;
        Vb += wb, "moov" === bb ? gb = !0 : "moof" === bb ? lb = !0 : "mdat" === bb && lb ? (lb = !1, Lb = Vb) : !lb && Lb > 0 && (Lb = Vb)
      }
      return gb && Lb > 0 ? Lb : null
    }
    async function ow(bb, wb) {
      const Mb = await fetch(bb, {
        signal: wb
      });
      if (!Mb.ok) throw new Error(`HTTP ${Mb.status}`);
      return Mb.arrayBuffer()
    }
    class Tw {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ow,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = bb, this.qO = wb, this.blobs = new Map
      }
      get(bb, wb) {
        const Mb = kw(bb, wb),
          eb = this.blobs.get(Mb);
        return void 0 === eb ? null : (this.remember(Mb, eb), eb)
      }
      async load(bb, wb, Mb) {
        const eb = await nw(wb, this.fetchPart, Mb),
          Hb = function(bb) {
            const wb = bb.map((bb => new Uint8Array(bb))),
              Mb = yw(wb);
            return null === Mb ? null : new Blob(function(bb, wb) {
              const Mb = [];
              let eb = wb;
              for (const Hb of bb) {
                if (eb <= 0) break;
                Mb.push(Hb.byteLength <= eb ? Hb : Hb.subarray(0, eb)), eb -= Hb.byteLength
              }
              return Mb
            }(wb, Mb), {
              type: "video/mp4"
            })
          }(eb);
        return null !== Hb && eb.length === wb.length && this.remember(kw(bb, wb.length), Hb), Hb
      }
      remember(bb, wb) {
        this.blobs.delete(bb), this.blobs.set(bb, wb), this.blobs.size > this.qO && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function kw(bb, wb) {
      return `${bb}/${wb}`
    }

    function bM(bb) {
      const wb = function(bb) {
        return bb.map(((wb, Mb) => {
          const eb = bb[Mb + 1];
          return void 0 === eb ? wb.endMs : Math.min(wb.endMs, eb.startMs)
        }))
      }(bb);
      return bb.map(((bb, Mb) => ({
        ...bb,
        endMs: wb[Mb]
      }))).filter((bb => bb.endMs > bb.startMs))
    }

    function wM(bb, wb) {
      let Mb = 0,
        eb = bb.length - 1;
      for (; Mb <= eb;) {
        const Hb = Mb + eb >> 1,
          pb = bb[Hb];
        if (wb < pb.startMs) eb = Hb - 1;
        else {
          if (!(wb >= pb.endMs)) return pb;
          Mb = Hb + 1
        }
      }
      return null
    }

    function MM(bb, wb) {
      return (wb - bb.startMs) / 1e3
    }

    function eM(bb) {
      return Math.max(.4, .1 * bb)
    }

    function HM(bb) {
      return Math.max(.0625, Math.min(16, bb))
    }
    class pM {
      constructor(bb, wb, Mb, eb, Hb, pb, Vb) {
        this.still = wb, this.clock = Mb, this.frameDurationS = eb, this.wallNowMs = Hb, this.onLoadFailed = Vb, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new Tw, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = bM(bb), this.segmentUrls = new Pw(pb), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(bb) {
        var wb, Mb;
        const eb = null !== (wb = null !== (Mb = wM(this.segments, bb)) && void 0 !== Mb ? Mb : this.segments.find((wb => wb.startMs > bb))) && void 0 !== wb ? wb : this.segments.at(-1);
        return void 0 === eb ? null : {
          width: eb.width,
          height: eb.height
        }
      }
      failedAt(bb) {
        const wb = wM(this.segments, bb);
        return null !== wb && this.failed.has(wb.sequence)
      }
      replaceSegments(bb, wb) {
        for (const Mb of this.slots.values()) this.release(Mb);
        this.slots.clear(), this.failed.clear(), this.segments = bM(bb), this.segmentUrls.reset(this.segments), this.still = wb
      }
      update(bb) {
        var wb, Mb;
        this.segmentUrls.update(this.segments, bb, this.clock.speed);
        const eb = wM(this.segments, bb),
          Hb = function(bb, wb) {
            const Mb = bb.find((bb => bb.startMs > wb));
            return void 0 === Mb ? null : Mb.startMs - wb <= ("parts" in Mb ? 15e3 : 8e3) ? Mb : null
          }(this.segments, bb);
        this.evictExcept([eb, Hb, null !== (wb = null === (Mb = this.shown) || void 0 === Mb ? void 0 : Mb.segment) && void 0 !== wb ? wb : null]), null !== Hb && this.getSlot(Hb), this.showStill(null === eb ? function(bb, wb, Mb) {
          if (null === wb) return null;
          const eb = bb.at(-1);
          return void 0 === eb ? Mb >= wb.atMs - 1e4 ? wb : null : Mb >= eb.endMs && Math.abs(wb.atMs - eb.endMs) <= 1e4 ? wb : null
        }(this.segments, this.still, bb) : null);
        const pb = null === eb ? null : this.getSlot(eb);
        if (null !== pb) {
          this.sync(pb, MM(pb.segment, bb)), pb.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !pb.video.seeking && this.show(pb);
          for (const bb of this.slots.values()) bb === pb || bb.video.paused || bb.video.pause()
        } else {
          null === eb && this.show(null);
          for (const bb of this.slots.values()) bb.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: bb,
          sumAbsDriftMs: wb,
          maxAbsDriftMs: Mb,
          withinOneFrame: eb,
          seeks: Hb
        } = this.stats;
        return {
          frames: bb,
          meanAbsDriftMs: 0 === bb ? 0 : wb / bb,
          maxAbsDriftMs: Mb,
          withinOneFrame: 0 === bb ? 1 : eb / bb,
          seeks: Hb
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
        for (const bb of this.slots.values()) this.release(bb);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(bb, wb) {
        const {
          video: Mb
        } = bb;
        if (Mb.seeking) return;
        const {
          playing: eb,
          speed: Hb
        } = this.clock, pb = eb && Hb < 16, Vb = function(bb) {
          let {
            targetS: wb,
            currentS: Mb,
            playing: eb,
            speed: Hb,
            frameDurationS: pb
          } = bb;
          const Vb = Mb - wb;
          if (!eb) return Math.abs(Vb) > pb / 2 ? {
            kind: "seek",
            mediaTimeS: wb
          } : {
            kind: "none"
          };
          if (Math.abs(Vb) > eM(Hb)) return {
            kind: "seek",
            mediaTimeS: wb
          };
          if (Math.abs(Vb) < pb / 4) return {
            kind: "rate",
            playbackRate: HM(Hb)
          };
          const gb = Hb - Vb / .5;
          return {
            kind: "rate",
            playbackRate: HM(Math.max(.5 * Hb, Math.min(1.5 * Hb, gb)))
          }
        }({
          targetS: wb,
          currentS: Mb.currentTime,
          playing: pb,
          speed: Hb,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === Vb.kind) {
          const wb = this.seekLatencyS * Hb,
            gb = eb ? pb ? Math.min(wb, eM(Hb) / 2) : wb : 0;
          bb.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, pb && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), Mb.currentTime = Math.max(0, Vb.mediaTimeS + gb)
        } else "rate" === Vb.kind && Math.abs(Mb.playbackRate - Vb.playbackRate) > .001 && (Mb.playbackRate = Vb.playbackRate);
        pb && Mb.paused && Mb.currentTime < Mb.duration ? (Mb.playbackRate = HM(Hb), Mb.play().catch((bb => {
          console.warn("Replay video refused to play.", bb)
        }))) : pb || Mb.paused || Mb.pause()
      }
      getSlot(bb) {
        const wb = this.slots.get(bb.sequence);
        if (void 0 !== wb) return wb;
        const Mb = "parts" in bb ? this.blobs.get(bb.sequence, bb.parts) : null,
          eb = null === Mb ? this.segmentUrls.get(bb.sequence) : null;
        if ("pending" === eb) return null;
        if ("failed" === eb) return this.failed.has(bb.sequence) || (console.error(`Replay video segment ${bb.sequence} has no URLs to load.`), this.markFailed(bb)), null;
        const Hb = document.createElement("video");
        Hb.className = "brv-video", Hb.muted = !0, Hb.playsInline = !0, Hb.preload = "auto", Hb.disablePictureInPicture = !0;
        const pb = {
          segment: bb,
          video: Hb,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== Mb ? this.playBlob(pb, Mb) : null !== eb && ("url" in eb ? Hb.src = eb.url : this.loadParts(pb, eb.partUrls)), Hb.addEventListener("seeked", (() => {
          if (null !== pb.seekStartedWallMs) {
            const bb = (this.wallNowMs() - pb.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, bb), pb.seekStartedWallMs = null
          }
        })), Hb.addEventListener("loadeddata", (() => {
          this.slots.get(bb.sequence) === pb && this.failed.delete(bb.sequence)
        })), Hb.addEventListener("error", (() => {
          this.slots.get(bb.sequence) === pb && (console.error(`Replay video segment ${bb.sequence} failed to load.`, Hb.error), this.markFailed(bb))
        })), this.watchFrames(pb), this.element.appendChild(Hb), this.slots.set(bb.sequence, pb), pb
      }
      loadParts(bb, wb) {
        this.blobs.load(bb.segment.sequence, wb, bb.abort.signal).then((wb => {
          if (this.slots.get(bb.segment.sequence) === bb) return null === wb ? (console.error(`Replay video segment ${bb.segment.sequence} has no playable parts.`), void this.markFailed(bb.segment)) : void this.playBlob(bb, wb)
        }), (wb => {
          this.slots.get(bb.segment.sequence) === bb && (console.error(`Replay video segment ${bb.segment.sequence} failed to load.`, wb), this.markFailed(bb.segment))
        }))
      }
      playBlob(bb, wb) {
        bb.objectUrl = URL.createObjectURL(wb), bb.video.src = bb.objectUrl
      }
      markFailed(bb) {
        this.failed.add(bb.sequence), this.onLoadFailed()
      }
      showStill(bb) {
        const wb = null !== bb && bb.url !== this.failedStillUrl ? bb : null;
        null !== wb && this.stillImage.getAttribute("src") !== wb.url && (this.stillImage.src = wb.url);
        const Mb = null !== wb && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        Mb !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", Mb), this.stillShown = Mb)
      }
      show(bb) {
        var wb;
        this.shown !== bb && (null === (wb = this.shown) || void 0 === wb || wb.video.classList.remove("brv-video-shown"), null === bb || void 0 === bb || bb.video.classList.add("brv-video-shown"), this.shown = bb)
      }
      evictExcept(bb) {
        for (const [wb, Mb] of this.slots) bb.includes(Mb.segment) || (this.release(Mb), this.slots.delete(wb))
      }
      release(bb) {
        this.shown === bb && (this.shown = null), bb.abort.abort(), bb.video.pause(), bb.video.removeAttribute("src"), bb.video.load(), bb.video.remove(), null !== bb.objectUrl && URL.revokeObjectURL(bb.objectUrl)
      }
      watchFrames(bb) {
        const {
          video: wb
        } = bb;
        if ("function" !== typeof wb.requestVideoFrameCallback) return;
        const Mb = (eb, Hb) => {
          if (!this.slots.has(bb.segment.sequence)) return;
          const pb = wb.ownerDocument.defaultView,
            Vb = null === pb ? 0 : pb.performance.timeOrigin - performance.timeOrigin,
            gb = MM(bb.segment, this.clock.timeAtWall(Hb.expectedDisplayTime + Vb)),
            lb = this.lastPresented,
            Lb = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== lb && lb.slot === bb && Lb && this.clock.playing && Hb.mediaTime > lb.mediaTimeS) {
            const bb = Math.abs(function(bb, wb, Mb) {
              return Mb < bb ? 1e3 * (Mb - bb) : 1e3 * Math.max(0, Mb - wb)
            }(lb.mediaTimeS, Hb.mediaTime, lb.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += bb, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, bb), bb <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: bb,
            mediaTimeS: Hb.mediaTime,
            clockMediaTimeS: gb
          }, wb.requestVideoFrameCallback(Mb)
        };
        wb.requestVideoFrameCallback(Mb)
      }
    }
    const VM = 1 / 30,
      gM = ["#noa-canvas", "#noa-container"];
    class lM {
      constructor(bb, wb) {
        var Mb, eb, Hb, pb, Vb, gb, lb, Lb;
        let Ib = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.sO = () => {
          this.frame = requestAnimationFrame(this.sO);
          const bb = performance.now();
          this.applySkips();
          const wb = this.clock.timeMs();
          this.annotations.update(wb, this.clock.speed), this.videoLayer.update(wb), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(wb)) : this.domLayer.update(wb, this.clock.playing, bb);
          const Mb = this.getState();
          (null === this.lastState || function(bb, wb) {
            return Object.keys(bb).some((Mb => "positionMs" === Mb ? Math.floor(bb.positionMs / 1e3) !== Math.floor(wb.positionMs / 1e3) : bb[Mb] !== wb[Mb]))
          }(Mb, this.lastState)) && this.emitState(Mb)
        };
        const Ob = () => performance.now();
        this.lowFps = null !== (Mb = Ib.lowFps) && void 0 !== Mb ? Mb : 25;
        const Ub = new Gb(wb.domEvents);
        this.timeline = new Jb(wb.windows.length > 0 ? wb.windows : [Nb(wb, Ub)]), this.chapters = [...wb.chapters].sort(((bb, wb) => bb.startMs - wb.startMs)), this.annotations = new pw(wb, Ub, this.timeline, {
          inactivityThresholdMs: null !== (eb = Ib.inactivityThresholdMs) && void 0 !== eb ? eb : 1e4,
          loadTelemetryChunk: null !== (Hb = Ib.loadTelemetryChunk) && void 0 !== Hb ? Hb : null,
          telemetryUrls: null !== (pb = Ib.telemetryUrls) && void 0 !== pb ? pb : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new Tb(null !== (Vb = Ib.refreshUrls) && void 0 !== Vb ? Vb : null, (bb => {
          this.videoLayer.replaceSegments(Sb(bb.videoSegments), bb.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(bb.telemetryChunks)
        })), this.clock = new vb(this.timeline.startMs, Ob), this.stage = new dw(bb, (() => {
          var bb;
          null === (bb = this.domLayer) || void 0 === bb || bb.invalidateCanvasRect()
        })), this.videoLayer = new pM(Sb(wb.videoSegments), wb.still, this.clock, VM, Ob, null !== (gb = Ib.segmentUrls) && void 0 !== gb ? gb : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = iw.create(this.stage.element, wb.domEvents, wb.recordedPointer, Ub, null !== (lb = Ib.canvasSelectors) && void 0 !== lb ? lb : gM, null !== (Lb = Ib.resourceHosts) && void 0 !== Lb ? Lb : [], this.videoLayer, (bb => {
          this.stage.setViewport(bb)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.sO()
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
      subscribe(bb) {
        return this.listeners.add(bb), bb(this.getState()), () => {
          this.listeners.delete(bb)
        }
      }
      getState() {
        const bb = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(bb),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(bb),
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
      seekToPosition(bb) {
        this.seekToTime(this.timeline.toTime(bb))
      }
      seekBy(bb) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + bb)
      }
      stepFrame(bb) {
        this.clock.pause(), this.seekBy(bb * VM * 1e3)
      }
      setSpeed(bb) {
        var wb;
        this.clock.setSpeed(bb), null === (wb = this.domLayer) || void 0 === wb || wb.setSpeed(bb), this.emit()
      }
      setSkipInactive(bb) {
        this.skipInactive = bb, this.emit()
      }
      goToChapter(bb) {
        const wb = this.clock.timeMs(),
          Mb = 1 === bb ? this.chapters.find((bb => bb.startMs > wb + 500)) : this.chapters.findLast((bb => bb.startMs < wb - 2e3));
        void 0 !== Mb && this.seekToTime(Mb.startMs)
      }
      destroy() {
        var bb;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (bb = this.domLayer) || void 0 === bb || bb.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(bb) {
        return this.annotations.isHiddenAt(bb) ? "tabHidden" : this.videoLayer.failedAt(bb) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(bb) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var bb;
        if (!this.clock.playing) return;
        const wb = this.clock.timeMs(),
          Mb = this.timeline.nextPlayableTime(wb);
        if (null === Mb) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const eb = this.skipInactive ? this.annotations.inactiveRanges.find((bb => Mb >= bb.startMs && Mb < bb.endMs - 500)) : void 0,
          Hb = null !== (bb = null === eb || void 0 === eb ? void 0 : eb.endMs) && void 0 !== bb ? bb : Mb;
        Hb !== wb && this.seekToTime(Hb)
      }
      seekToTime(bb) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, bb))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var bb;
        null === (bb = this.domLayer) || void 0 === bb || bb.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(bb) {
        this.lastState = bb;
        for (const wb of this.listeners) wb(bb)
      }
    }
    const LM = 2500,
      IM = 5;

    function OM(bb) {
      let {
        label: wb,
        dg: Mb,
        wide: eb = !1
      } = bb;
      return (0, Fb.jsx)("span", {
        className: `brv-key${Mb?" brv-key-held":""}${eb?" brv-key-wide":""}`,
        children: wb
      })
    }
    const UM = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function tM(bb) {
      const [wb, Mb] = (0, eb.useState)({
        bits: 0,
        presses: []
      });
      return (0, eb.useEffect)((() => {
        let wb = 0,
          eb = "";
        const Hb = () => {
          wb = requestAnimationFrame(Hb);
          const pb = bb.timeline.toTime(bb.getPositionMs()),
            {
              actions: Vb,
              keys: gb
            } = bb.input,
            Ub = function(bb, wb) {
              const Mb = Lb(bb, wb);
              return Mb < 0 ? 0 : bb[Mb].bits
            }(Vb, pb),
            tb = function(bb, wb, Mb, eb) {
              const Hb = Math.floor(wb / Mb) * Mb,
                pb = new Map;
              for (let Vb = Lb(bb, Hb + Mb); Vb >= 0 && bb[Vb].atMs >= Hb; Vb--) {
                const wb = bb[Vb];
                if (!wb.down || !wb.inPlay || wb.atMs === Hb + Mb) continue;
                const eb = {
                    code: wb.code,
                    unbound: lb(wb)
                  },
                  gb = Ib(eb),
                  Lb = pb.get(gb);
                void 0 === Lb ? pb.set(gb, {
                  key: eb,
                  presses: 1
                }) : Lb.presses++
              }
              return [...pb].sort(((bb, wb) => Ob([bb[0], bb[1].presses], [wb[0], wb[1].presses]))).slice(0, eb).map((bb => {
                let [, {
                  key: wb
                }] = bb;
                return wb
              }))
            }(gb, pb, LM, IM),
            Cb = `${Ub};${tb.map((bb=>Ib(bb))).join(",")}`;
          Cb !== eb && (eb = Cb, Mb({
            bits: Ub,
            presses: tb
          }))
        };
        return Hb(), () => {
          cancelAnimationFrame(wb)
        }
      }), [bb]), wb
    }

    function CM(bb) {
      let {
        controller: wb,
        labels: Mb
      } = bb;
      const {
        bits: eb,
        presses: Hb
      } = tM(wb), pb = bb => function(bb, wb) {
        return 0 !== (bb & 1 << Vb.indexOf(wb))
      }(eb, bb);
      return (0, Fb.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, Fb.jsx)("div", {
          className: "brv-input-slot",
          children: Hb.map((bb => {
            const wb = tb(bb.code);
            return (0, Fb.jsx)("span", {
              className: bb.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: bb.unbound ? Mb.unboundKey(wb) : wb
            }, Ib(bb))
          }))
        }), (0, Fb.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, Fb.jsxs)("div", {
            className: "brv-keys",
            children: [(0, Fb.jsx)("div", {
              className: "brv-keys-row",
              children: (0, Fb.jsx)(OM, {
                label: "W",
                dg: pb("forward")
              })
            }), (0, Fb.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, Fb.jsx)(OM, {
                label: "A",
                dg: pb("left")
              }), (0, Fb.jsx)(OM, {
                label: "S",
                dg: pb("backward")
              }), (0, Fb.jsx)(OM, {
                label: "D",
                dg: pb("right")
              })]
            }), (0, Fb.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, Fb.jsx)(OM, {
                label: "Shift",
                dg: pb("sprint")
              }), (0, Fb.jsx)(OM, {
                label: "Ctrl",
                dg: pb("crouch")
              }), (0, Fb.jsx)(OM, {
                label: "Space",
                dg: pb("jump"),
                wide: !0
              })]
            })]
          }), (0, Fb.jsx)("div", {
            className: "brv-mouse",
            children: UM.map((bb => {
              let {
                action: wb,
                className: Mb
              } = bb;
              return (0, Fb.jsx)("span", {
                className: `${Mb}${pb(wb)?" brv-key-held":""}`
              }, wb)
            }))
          })]
        })]
      })
    }
    const EM = {
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
      fps: bb => `${bb} FPS`,
      keys: "Keys",
      unboundKey: bb => `${bb} does nothing here`,
      unboundKeys: bb => `${bb} did nothing`
    };

    function FM(bb) {
      let {
        path: wb
      } = bb;
      return (0, Fb.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, Fb.jsx)("path", {
          d: wb
        })
      })
    }
    const BM = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function sM(bb) {
      let {
        label: wb,
        onClick: Mb,
        children: eb
      } = bb;
      return (0, Fb.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: wb,
        "aria-label": wb,
        onClick: Mb,
        children: eb
      })
    }

    function mM(bb) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === bb ? document.exitFullscreen() : bb.requestFullscreen()).catch((bb => {
        console.warn("Couldn't toggle fullscreen.", bb)
      }))
    }

    function hM(bb) {
      let {
        data: wb,
        className: Mb,
        autoPlay: Hb = !1,
        options: pb,
        labels: Vb = EM,
        onController: gb
      } = bb;
      const lb = (0, eb.useRef)(null),
        Lb = (0, eb.useRef)(null),
        Ib = (0, eb.useRef)(pb);
      Ib.current = pb;
      const Ob = (0, eb.useRef)(Hb);
      Ob.current = Hb;
      const Ub = (0, eb.useRef)(gb);
      Ub.current = gb;
      const [tb, Cb] = (0, eb.useState)(null), [Eb, Bb] = (0, eb.useState)(null), [mb, hb] = (0, eb.useState)(!0), zb = () => {
        hb((bb => !bb))
      };
      (0, eb.useEffect)((() => {
        var bb;
        ! function(bb) {
          if (null !== bb.getElementById(Gw)) return;
          const wb = bb.createElement("style");
          wb.id = Gw, wb.textContent = aw, bb.head.appendChild(wb)
        }(document);
        const Mb = new lM(lb.current, wb, Ib.current),
          eb = Mb.subscribe(Bb);
        return Cb(Mb), null === (bb = Ub.current) || void 0 === bb || bb.call(Ub, Mb), Ob.current && Mb.play(), Lb.current.focus({
          preventScroll: !0
        }), () => {
          var bb;
          eb(), Mb.destroy(), null === (bb = Ub.current) || void 0 === bb || bb.call(Ub, null)
        }
      }), [wb]);
      const xb = null !== tb && tb.input.inputRecorded,
        jb = null === tb || null === Eb ? void 0 : tb.chapters.findLast((bb => tb.timeline.toPosition(bb.startMs) <= Eb.positionMs));
      return (0, Fb.jsxs)("div", {
        ref: Lb,
        className: void 0 === Mb ? "brv-player" : `brv-player ${Mb}`,
        tabIndex: 0,
        onKeyDown: bb => {
          if (bb.target instanceof HTMLSelectElement) return;
          if (" " === bb.key && bb.target !== bb.currentTarget && bb.target instanceof HTMLButtonElement) return;
          const wb = function(bb) {
            let {
              key: wb,
              shiftKey: Mb,
              ctrlKey: eb,
              metaKey: Hb,
              altKey: pb
            } = bb;
            if (eb || Hb || pb) return null;
            const Vb = Number(wb) - 1;
            if (/^[1-9]$/.test(wb) && Vb < fb.length) return {
              type: "setSpeed",
              speed: fb[Vb]
            };
            switch (wb.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: Mb ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: Mb ? 1e3 : 5e3
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
                  type: "chapter", direction: Mb ? -1 : 1
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
          }(bb);
          null !== wb && null !== tb && null !== Eb && (bb.preventDefault(), function(bb, wb, Mb, eb) {
            switch (wb.type) {
              case "togglePlay":
                bb.togglePlay();
                break;
              case "seekBy":
                bb.seekBy(wb.deltaMs);
                break;
              case "stepFrame":
                bb.stepFrame(wb.direction);
                break;
              case "setSpeed":
                bb.setSpeed(wb.speed);
                break;
              case "chapter":
                bb.goToChapter(wb.direction);
                break;
              case "toggleSkipInactive":
                bb.setSkipInactive(!Mb.skipInactive);
                break;
              case "toggleFullscreen":
                mM(eb.root);
                break;
              case "toggleKeys":
                eb.toggleKeys()
            }
          }(tb, wb, Eb, {
            root: bb.currentTarget,
            toggleKeys: zb
          }))
        },
        children: [(0, Fb.jsxs)("div", {
          ref: lb,
          className: "brv-viewport",
          onClick: () => {
            null === tb || void 0 === tb || tb.togglePlay()
          },
          children: [null !== Eb && null !== Eb.notice && (0, Fb.jsx)("div", {
            className: "brv-overlay",
            children: Vb[Eb.notice]
          }), null !== tb && mb && xb && (0, Fb.jsx)(CM, {
            controller: tb,
            labels: Vb
          })]
        }), null !== tb && null !== Eb && (0, Fb.jsxs)(Fb.Fragment, {
          children: [(0, Fb.jsx)(Xb, {
            controller: tb,
            frames: tb.frames,
            input: tb.input,
            markers: tb.markers,
            inactiveRanges: tb.inactiveRanges,
            videoGaps: tb.videoGaps,
            labels: Vb
          }), tb.chapters.length > 1 && (0, Fb.jsx)("div", {
            className: "brv-chapters",
            children: tb.chapters.map((bb => (0, Fb.jsxs)("button", {
              type: "button",
              className: bb === jb ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                tb.seekToPosition(tb.timeline.toPosition(bb.startMs))
              },
              children: [bb.label, " \xb7 ", sb(bb.endMs - bb.startMs)]
            }, bb.startMs)))
          }), (0, Fb.jsxs)("div", {
            className: "brv-controls",
            children: [(0, Fb.jsx)(sM, {
              label: Eb.playing ? Vb.pause : Vb.play,
              onClick: () => {
                tb.togglePlay()
              },
              children: (0, Fb.jsx)(FM, {
                path: Eb.playing ? BM.pause : BM.play
              })
            }), (0, Fb.jsxs)("span", {
              className: "brv-time",
              children: [sb(Eb.positionMs), " / ", sb(Eb.durationMs)]
            }), (0, Fb.jsx)("select", {
              className: "brv-speed",
              value: Eb.speed,
              title: `${Vb.speed} (1-${fb.length})`,
              "aria-label": Vb.speed,
              onChange: bb => {
                tb.setSpeed(Number(bb.target.value))
              },
              children: fb.map((bb => (0, Fb.jsxs)("option", {
                value: bb,
                children: [bb, "x"]
              }, bb)))
            }), (0, Fb.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": Eb.skipInactive,
              title: `${Vb.skipInactive} (S)`,
              onClick: () => {
                tb.setSkipInactive(!Eb.skipInactive)
              },
              children: [(0, Fb.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), Vb.skipInactive]
            }), xb && (0, Fb.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": mb,
              title: `${Vb.keys} (I)`,
              onClick: zb,
              children: [(0, Fb.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), Vb.keys]
            }), document.fullscreenEnabled && (0, Fb.jsx)(sM, {
              label: Vb.fullscreen,
              onClick: () => {
                mM(Lb.current)
              },
              children: (0, Fb.jsx)(FM, {
                path: BM.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var zM = Mb(6138);
    const XM = ["bloxd.io", window.location.hostname];

    function xM(bb) {
      let {
        gameAnalyticsId: wb,
        recordingId: Mb,
        userContext: Hb,
        autoPlay: pb
      } = bb;
      const {
        t: Vb
      } = (0, jb.C)(), [gb, lb] = (0, eb.useState)({
        status: "loading"
      }), [Lb, Ib] = (0, eb.useState)(0), Ob = (0, eb.useMemo)((() => function(bb) {
        return {
          play: bb("studio:replayPlay"),
          pause: bb("studio:replayPause"),
          speed: bb("studio:replaySpeed"),
          skipInactive: bb("studio:replaySkipIdle"),
          fullscreen: bb("studio:replayFullscreen"),
          tabHidden: bb("studio:replayTabHidden"),
          videoFailed: bb("studio:replayVideoFailed"),
          nothingToShow: bb("studio:replayNothingToShow"),
          videoGap: bb("studio:replayVideoGap"),
          error: bb("general:error"),
          graphicsCrash: bb("studio:replayMarkerGraphicsCrash"),
          death: bb("studio:replayMarkerDeath"),
          fps: wb => bb("studio:replayFps", {
            fps: wb
          }),
          keys: bb("studio:replayKeys"),
          unboundKey: wb => bb("studio:replayUnboundKey", {
            key: wb
          }),
          unboundKeys: wb => bb("studio:replayUnboundKeys", {
            keys: wb
          })
        }
      }(Vb)), [Vb]), Ub = (0, eb.useMemo)((() => ({
        resourceHosts: XM,
        loadTelemetryChunk: cb.E,
        refreshUrls: async () => (0, cb.w)(await zM.e.getReplay(Hb, wb, Mb)),
        segmentUrls: {
          load: async bb => (await zM.e.getReplaySegmentUrls(Hb, wb, Mb, bb, [])).videoSegments,
          maxSequences: Zb.b
        },
        telemetryUrls: {
          load: async bb => (await zM.e.getReplaySegmentUrls(Hb, wb, Mb, [], bb)).telemetrySegments,
          maxSequences: Zb.h
        }
      })), [wb, Mb]);
      return (0, eb.useEffect)((() => {
        let bb = !1;
        return lb({
          status: "loading"
        }), (0, cb.F)({
          getReplay: () => zM.e.getReplay(Hb, wb, Mb),
          loadDomEvents: cb.C,
          onPreparing: () => {
            lb({
              status: "preparing"
            })
          },
          wait: bb => new Promise((wb => {
            setTimeout(wb, bb)
          })),
          isCancelled: () => bb
        }).then((wb => {
          if (!bb && null !== wb) {
            const bb = (0, cb.y)(wb.replay, wb.domEvents, (bb => Vb("studio:replayVisit", {
              number: bb
            })));
            lb({
              status: "loaded",
              value: bb
            })
          }
        })).catch((wb => {
          console.error("Failed to load studio replay", wb), bb || lb({
            status: "error",
            message: (0, cb.q)(wb, Vb("studio:replayLoadFailed"))
          })
        })), () => {
          bb = !0
        }
      }), [wb, Mb, Lb]), "loading" === gb.status ? (0, Fb.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, Fb.jsx)(rb.c, {})
      }) : "preparing" === gb.status ? (0, Fb.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, Fb.jsx)(rb.c, {}), Vb("studio:replayPreparing")]
      }) : "error" === gb.status ? (0, Fb.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [gb.message, (0, Fb.jsx)(Rb.Y, {
          onClick: () => {
            Ib((bb => bb + 1))
          },
          children: Vb("general:tryAgain")
        })]
      }) : (0, Fb.jsx)(hM, {
        className: "StudioReplayPlayer",
        data: gb.value,
        labels: Ob,
        options: Ub,
        autoPlay: pb || Lb > 0
      })
    }

    function jM(bb) {
      let {
        onPlay: wb
      } = bb;
      const {
        t: Mb
      } = (0, jb.C)();
      return (0, Fb.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": Mb("general:play"),
        onClick: wb,
        children: (0, Fb.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, Fb.jsx)(Db.b, {
            name: "play"
          })
        })
      })
    }
    const KM = cb.V.replay,
      rM = cb.V.filters,
      RM = cb.V.endedAt,
      DM = {
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
      cM = {
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

    function YM(bb) {
      let {
        item: wb,
        selected: Mb,
        onSelect: eb
      } = bb;
      const {
        t: Hb
      } = (0, jb.C)(), Vb = (0, cb.u)(wb);
      return (0, Fb.jsxs)("button", {
        type: "button",
        className: pb()("StudioReplayListItem", {
          StudioReplayListItemSelected: Mb
        }),
        onClick: eb,
        children: [(0, Fb.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, Fb.jsx)("span", {
            children: (0, cb.m)(wb.startedAtMs)
          }), (0, Fb.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: sb(wb.inGameDurationMs)
          })]
        }), Vb.length > 0 && (0, Fb.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: Vb.map((bb => (0, Fb.jsx)("span", {
            className: pb()("StudioReplayTag", `StudioReplayTag-${bb}`),
            children: Hb(cM[bb])
          }, bb)))
        })]
      })
    }

    function ZM(bb) {
      let {
        gameAnalyticsId: wb,
        userContext: Mb,
        availability: eb
      } = bb;
      const {
        t: Hb
      } = (0, jb.C)();
      return "on" === eb ? (0, Fb.jsx)(fM, {
        gameAnalyticsId: wb,
        userContext: Mb
      }) : "failed" === eb ? (0, Fb.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, Fb.jsx)(Db.b, {
          name: "face-dizzy"
        }), Hb("studio:replaysStartFailed"), (0, Fb.jsx)(Rb.Y, {
          onClick: () => {
            xb.e.startNow()
          },
          children: Hb("general:tryAgain")
        })]
      }) : (0, Fb.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, Fb.jsx)(rb.c, {})
      })
    }

    function fM(bb) {
      var wb, Mb;
      let {
        gameAnalyticsId: Hb,
        userContext: Vb
      } = bb;
      const {
        t: gb
      } = (0, jb.C)(), lb = function(bb, wb) {
        const {
          t: Mb
        } = (0, jb.C)(), [Hb, pb] = (0, eb.useState)({
          status: "loading"
        });
        return (0, eb.useEffect)((() => {
          let eb = !1;
          return pb({
            status: "loading"
          }), zM.e.listReplays(wb, bb).then((bb => {
            eb || pb({
              status: "loaded",
              value: bb
            })
          })).catch((bb => {
            console.error("Failed to list studio replays", bb), eb || pb({
              status: "error",
              message: (0, cb.q)(bb, Mb("studio:replaysLoadFailed"))
            })
          })), () => {
            eb = !0
          }
        }), [bb]), Hb
      }(Hb, Vb), [Lb, Ib] = (0, Kb.m)(), Ob = (0, cb.N)(Lb.get(rM)), Ub = (0, cb.K)(Lb.get(RM)), tb = Lb.get(KM), Cb = "loaded" === lb.status ? (0, cb.d)(lb.value.recordings, Ob, Ub) : [], Eb = "loaded" === lb.status ? (0, cb.W)(lb.value.recordings, Cb, tb) : [], Bb = null !== (wb = null !== tb && void 0 !== tb ? tb : null === (Mb = Eb[0]) || void 0 === Mb ? void 0 : Mb.recordingId) && void 0 !== wb ? wb : null, [sb, mb] = (0, eb.useState)(tb), [hb, zb] = (0, eb.useState)(!1), Xb = (0, eb.useRef)(null), xb = (0, eb.useRef)(null !== tb), Zb = (0, eb.useRef)(null);

      function fb(bb) {
        bb === sb && bb === Bb || (Zb.current = null, xb.current = !0, zb(!0), mb(bb), Ib((wb => {
          (0, Kb.g)(wb, KM, bb)
        }), {
          push: !0
        }))
      }

      function Ab(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        Bb !== sb && (Zb.current = Bb), Ib((Mb => {
          (0, Kb.g)(Mb, KM, Bb), (0, Kb.g)(Mb, rM, (0, cb.j)(bb)), wb && (0, Kb.g)(Mb, RM, null)
        }))
      }
      if ((0, eb.useEffect)((() => {
          null !== tb && tb !== Zb.current && mb(tb)
        }), [tb]), (0, eb.useEffect)((() => {
          xb.current && null !== Xb.current && (xb.current = !1, Xb.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [sb, lb.status]), "loading" === lb.status) return (0, Fb.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, Fb.jsx)(rb.c, {})
      });
      if ("error" === lb.status) return (0, Fb.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, Fb.jsx)(Db.b, {
          name: "face-dizzy"
        }), lb.message]
      });
      const {
        recordings: Wb,
        dailyQuota: Jb
      } = lb.value;
      if (0 === Wb.length) return (0, Fb.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, Fb.jsx)(Db.b, {
          name: "video"
        }), gb(0 === Jb ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const Sb = cb.R.filter((bb => Wb.some((wb => (0, cb.J)(wb, bb))))),
        Nb = Bb !== sb;
      return (0, Fb.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, Fb.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== Ub && (0, Fb.jsxs)(Rb.Y, {
            active: !0,
            onClick: () => {
              Ab(Ob, !0)
            },
            children: [gb("studio:replaysFilterEndedAt", {
              minutes: (0, Yb.z)(Ub.minute, Ub.orLonger ? Ub.minute : 1 / 0)
            }), (0, Fb.jsx)(Db.b, {
              name: "xmark"
            })]
          }), Sb.map((bb => (0, Fb.jsx)(Rb.Y, {
            active: Ob.includes(bb),
            onClick: () => {
              ! function(bb) {
                Ab(Ob.includes(bb) ? Ob.filter((wb => wb !== bb)) : [...Ob, bb])
              }(bb)
            },
            children: gb(DM[bb])
          }, bb))), Jb > 0 && (0, Fb.jsx)("span", {
            className: "StudioReplaysQuota",
            children: gb("studio:replaysQuota", {
              count: Jb
            })
          })]
        }), (0, Fb.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, Fb.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === Cb.length && (0, Fb.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [gb("studio:replaysNoMatch"), (0, Fb.jsx)(Rb.Y, {
                onClick: () => {
                  Ab([], !0)
                },
                children: gb("studio:replaysClearFilters")
              })]
            }), Eb.map((bb => (0, Fb.jsx)(YM, {
              item: bb,
              selected: bb.recordingId === Bb,
              onSelect: () => {
                fb(bb.recordingId)
              }
            }, bb.recordingId)))]
          }), null !== Bb && (0, Fb.jsxs)("div", {
            ref: Xb,
            className: pb()("StudioReplayViewer", {
              StudioReplayViewerWaiting: Nb
            }),
            children: [!Nb && (0, Fb.jsx)(xM, {
              gameAnalyticsId: Hb,
              recordingId: Bb,
              userContext: Vb,
              autoPlay: hb
            }, Bb), Nb && (0, Fb.jsx)(jM, {
              onPlay: () => {
                fb(Bb)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);