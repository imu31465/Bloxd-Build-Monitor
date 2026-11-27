export const id = 301;
export const ids = [301];
export const modules = {
  42321: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => PQ
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr);
    const jr = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      Ir = 3e3;

    function fr(rr) {
      return rr.down && rr.inPlay && !rr.bound
    }

    function Er(rr, Sr) {
      let Qr = 0,
        Zr = rr.length;
      for (; Qr < Zr;) {
        const Wr = Qr + Zr >> 1;
        rr[Wr].atMs <= Sr ? Qr = Wr + 1 : Zr = Wr
      }
      return Qr - 1
    }

    function pr(rr) {
      let {
        code: Sr,
        unbound: Qr
      } = rr;
      return `${Sr}:${Qr}`
    }

    function xr(rr, Sr) {
      return Sr[1] - rr[1] || (rr[0] < Sr[0] ? -1 : 1)
    }
    const mr = {
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

    function Nr(rr) {
      var Sr;
      const Qr = mr[rr];
      if (void 0 !== Qr) return Qr;
      const Zr = null !== (Sr = /^(?:Key|Digit)(.)$/.exec(rr)) && void 0 !== Sr ? Sr : /^Numpad(.+)$/.exec(rr);
      return null !== Zr ? rr.startsWith("Numpad") ? `Num ${Zr[1]}` : Zr[1] : rr
    }
    const Ur = 250,
      tr = 60;
    var hr = Qr(1338);
    const zr = 6;

    function Yr(rr) {
      const Sr = Math.max(0, Math.floor(rr / 1e3)),
        Qr = Math.floor(Sr / 3600),
        Zr = Math.floor(Sr % 3600 / 60),
        Wr = String(Sr % 60).padStart(2, "0");
      return Qr > 0 ? `${Qr}:${String(Zr).padStart(2,"0")}:${Wr}` : `${Zr}:${Wr}`
    }

    function nr(rr, Sr) {
      return getComputedStyle(rr).getPropertyValue(Sr).trim()
    }

    function er(rr, Sr) {
      switch (rr.kind) {
        case "note":
          return rr.label;
        case "hidden":
          return Sr.tabHidden;
        default:
          return Sr[rr.kind]
      }
    }

    function Kr(rr) {
      let {
        draw: Sr,
        className: Qr
      } = rr;
      const Wr = (0, Zr.useRef)(null);
      return (0, Zr.useEffect)((() => {
        const rr = Wr.current,
          Qr = rr.getContext("2d");
        if (null === Sr || null === Qr) return;
        const {
          clientWidth: Zr,
          clientHeight: ar
        } = rr, jr = window.devicePixelRatio;
        rr.width = Math.round(Zr * jr), rr.height = Math.round(ar * jr), Qr.setTransform(jr, 0, 0, jr, 0, 0), Sr(Qr, Zr, ar, rr)
      }), [Sr]), (0, hr.jsx)("canvas", {
        ref: Wr,
        className: Qr
      })
    }

    function yr(rr) {
      let {
        controller: Sr,
        frames: Qr,
        input: Wr,
        markers: ar,
        inactiveRanges: jr,
        videoGaps: Er,
        labels: pr
      } = rr;
      const {
        timeline: mr
      } = Sr, yr = (0, Zr.useRef)(null), [Br, Tr] = (0, Zr.useState)(0), [vr, Or] = (0, Zr.useState)(null), Lr = (0, Zr.useRef)(null), lr = Math.max(1, mr.durationMs);
      ! function(rr, Sr, Qr) {
        (0, Zr.useEffect)((() => {
          let Zr = 0,
            Wr = NaN;
          const ar = () => {
            var jr;
            Zr = requestAnimationFrame(ar);
            const Ir = (null !== (jr = Sr.current) && void 0 !== jr ? jr : rr.getPositionMs()) / Math.max(1, rr.timeline.durationMs) * 100;
            Ir !== Wr && (Wr = Ir, Qr.current.style.setProperty("--brv-position", `${Ir}%`))
          };
          return ar(), () => {
            cancelAnimationFrame(Zr)
          }
        }), [rr])
      }(Sr, Lr, yr), (0, Zr.useEffect)((() => {
        const rr = yr.current,
          Sr = new ResizeObserver((() => {
            Tr(rr.clientWidth)
          }));
        return Sr.observe(rr), () => {
          Sr.disconnect()
        }
      }), []);
      const Xr = (0, Zr.useMemo)((() => 0 === Br ? null : function(rr, Sr, Qr) {
          const Zr = Math.max(1, Math.min(Qr, Math.floor(Sr.durationMs / Ur))),
            Wr = Sr.durationMs / Zr,
            ar = new Array(Zr).fill(0);
          for (const jr of rr) Sr.contains(jr.atMs) && ar[Math.min(Zr - 1, Math.floor(Sr.toPosition(jr.atMs) / Wr))]++;
          return {
            bucketMs: Wr,
            fps: ar.map((rr => 0 === rr ? null : 1e3 * rr / Wr))
          }
        }(Qr, mr, Math.round(Br))), [Qr, mr, Br]),
        Pr = Sr.lowFps,
        Hr = (0, Zr.useMemo)((() => null === Xr ? null : (rr, Sr, Qr, Zr) => {
          ! function(rr, Sr, Qr, Zr, Wr, ar) {
            rr.clearRect(0, 0, Qr, Zr);
            const jr = Qr / Sr.fps.length;
            Sr.fps.forEach(((Sr, Qr) => {
              if (null === Sr) return;
              const Ir = Math.max(1, Math.min(Sr, tr) / tr * Zr);
              rr.fillStyle = Sr < Wr ? ar.lowFps : ar.fps, rr.fillRect(Qr * jr, Zr - Ir, Math.max(1, jr), Ir)
            }))
          }(rr, Xr, Sr, Qr, Pr, {
            fps: nr(Zr, "--brv-fps"),
            lowFps: nr(Zr, "--brv-low-fps")
          })
        }), [Xr, Pr]),
        qr = (0, Zr.useMemo)((() => {
          if (0 === Br || !Wr.inputRecorded) return null;
          const rr = function(rr, Sr, Qr) {
            const Zr = Math.max(1, Sr.durationMs) / Qr,
              Wr = new Array(Qr).fill(0),
              ar = new Array(Qr).fill(0);
            for (const jr of rr) {
              if (!jr.down || !Sr.contains(jr.atMs)) continue;
              const rr = Math.min(Qr - 1, Math.floor(Sr.toPosition(jr.atMs) / Zr));
              Wr[rr]++, fr(jr) && ar[rr]++
            }
            return {
              presses: Wr,
              unbound: ar
            }
          }(Wr.keys, mr, Math.max(1, Math.round(Br)));
          return (Sr, Qr, Zr, Wr) => {
            ! function(rr, Sr, Qr, Zr, Wr) {
              rr.clearRect(0, 0, Qr, Zr);
              const ar = Qr / Sr.presses.length;
              Sr.presses.forEach(((Qr, jr) => {
                if (0 === Qr) return;
                const Ir = Sr.unbound[jr] > 0;
                rr.globalAlpha = Ir ? 1 : Math.min(1, .35 + .15 * Qr), rr.fillStyle = Ir ? Wr.unbound : Wr.presses, rr.fillRect(jr * ar, 0, Math.max(Ir ? 2 : 1, ar), Zr)
              })), rr.globalAlpha = 1
            }(Sr, rr, Qr, Zr, {
              presses: nr(Wr, "--brv-key-press"),
              unbound: nr(Wr, "--brv-key-unbound")
            })
          }
        }), [Wr, mr, Br]),
        Rr = (0, Zr.useMemo)((() => function(rr) {
          const Sr = [];
          for (const Zr of rr) {
            var Qr;
            if (!fr(Zr)) continue;
            let rr = Sr.at(-1);
            (void 0 === rr || Zr.atMs - rr.endMs > Ir) && (rr = {
              startMs: Zr.atMs,
              endMs: Zr.atMs,
              counts: new Map
            }, Sr.push(rr)), rr.endMs = Zr.atMs, rr.counts.set(Zr.code, (null !== (Qr = rr.counts.get(Zr.code)) && void 0 !== Qr ? Qr : 0) + 1)
          }
          return Sr.map((rr => {
            let {
              startMs: Sr,
              endMs: Qr,
              counts: Zr
            } = rr;
            return {
              startMs: Sr,
              endMs: Qr,
              keys: [...Zr].sort(xr)
            }
          }))
        }(Wr.keys.filter((rr => mr.contains(rr.atMs))))), [Wr.keys, mr]),
        gr = rr => mr.toPosition(rr) / lr * 100,
        Cr = rr => gr(rr) / 100 * Br,
        Mr = rr => {
          const Sr = yr.current.getBoundingClientRect();
          return {
            px: rr - Sr.left,
            positionMs: Math.max(0, Math.min(Sr.width, rr - Sr.left)) / Sr.width * lr
          }
        },
        Gr = null === vr || 0 === Br ? null : {
          px: vr,
          positionMs: Math.max(0, Math.min(Br, vr)) / Br * lr
        },
        kr = null === Gr || null === Xr ? null : function(rr, Sr) {
          const Qr = Math.max(0, Math.min(rr.fps.length - 1, Math.floor(Sr / rr.bucketMs))),
            Zr = rr.fps[Qr];
          return null === Zr ? null : Math.round(Zr)
        }(Xr, Gr.positionMs),
        Ar = null !== Gr && Er.some((rr => Gr.px >= Cr(rr.startMs) && Gr.px < Cr(rr.endMs))),
        Vr = null === Gr ? void 0 : ar.find((rr => {
          var Sr;
          return Gr.px >= Cr(rr.atMs) - zr && Gr.px <= Cr(null !== (Sr = rr.endMs) && void 0 !== Sr ? Sr : rr.atMs) + zr
        })),
        ir = null === Gr ? void 0 : Rr.find((rr => Gr.px >= Cr(rr.startMs) - zr && Gr.px <= Cr(rr.endMs) + zr));
      return (0, hr.jsxs)("div", {
        ref: yr,
        className: Wr.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: rr => {
          rr.currentTarget.setPointerCapture(rr.pointerId);
          const Sr = Mr(rr.clientX);
          Or(Sr.px), Lr.current = Sr.positionMs
        },
        onPointerMove: rr => {
          const Sr = Mr(rr.clientX);
          Or(Sr.px), null !== Lr.current && (Lr.current = Sr.positionMs)
        },
        onPointerUp: rr => {
          null !== Lr.current && (Sr.seekToPosition(Mr(rr.clientX).positionMs), Lr.current = null)
        },
        onPointerCancel: () => {
          Lr.current = null, Or(null)
        },
        onPointerLeave: () => {
          Or(null)
        },
        children: [(0, hr.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, hr.jsx)(Kr, {
            draw: Hr,
            className: "brv-seekbar-canvas"
          }), jr.map((rr => {
            const Sr = gr(rr.startMs);
            return (0, hr.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${Sr}%`,
                width: gr(rr.endMs) - Sr + "%"
              }
            }, rr.startMs)
          })), Er.map((rr => {
            const Sr = gr(rr.startMs);
            return (0, hr.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${Sr}%`,
                width: gr(rr.endMs) - Sr + "%"
              }
            }, rr.startMs)
          })), (0, hr.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== Gr && (0, hr.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: Gr.px
            }
          })]
        }), Wr.inputRecorded && (0, hr.jsx)(Kr, {
          draw: qr,
          className: "brv-seekbar-input"
        }), (0, hr.jsx)("div", {
          className: "brv-seekbar-markers",
          children: ar.map(((rr, Sr) => {
            var Qr;
            const Zr = gr(rr.atMs),
              Wr = void 0 !== rr.endMs;
            return (0, hr.jsx)("div", {
              className: `brv-marker brv-marker-${rr.kind}${Wr?" brv-marker-range":""}`,
              style: {
                left: `${Zr}%`,
                width: Wr ? gr(null !== (Qr = rr.endMs) && void 0 !== Qr ? Qr : rr.atMs) - Zr + "%" : void 0
              }
            }, Sr)
          }))
        }), (0, hr.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== Gr && (0, hr.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: Gr.px
          },
          children: [Yr(Gr.positionMs), null !== kr && ` \xb7 ${pr.fps(kr)}`, void 0 !== Vr && ` \xb7 ${er(Vr,pr)}`, Ar && ` \xb7 ${pr.videoGap}`, void 0 !== ir && ` \xb7 ${pr.unboundKeys((wr=ir.keys,wr.map((rr=>{let[Sr,Qr]=rr;return Qr>1?`${Nr(Sr)} \xd7${Qr}`:Nr(Sr)})).join(", ")))}`]
        })]
      });
      var wr
    }
    var Br = Qr(5440),
      Tr = Qr(1251),
      vr = Qr(5323),
      Or = Qr(1444),
      Lr = Qr(1576),
      lr = Qr(1448),
      Xr = Qr(7460),
      Pr = Qr(6042),
      Hr = Qr(6034);
    const qr = [.5, 1, 2, 4, 8, 16];
    var Rr = Qr(42327);

    function gr(rr) {
      const Sr = rr.filter((rr => rr.endMs > rr.startMs)).sort(((rr, Sr) => rr.startMs - Sr.startMs)),
        Qr = [];
      for (const Zr of Sr) {
        const rr = Qr.at(-1);
        void 0 !== rr && Zr.startMs <= rr.endMs ? rr.endMs = Math.max(rr.endMs, Zr.endMs) : Qr.push({
          ...Zr
        })
      }
      return Qr
    }
    class Cr {
      constructor(rr) {
        this.yh = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.yh = gr(rr), this.positionStarts = [];
        let Sr = 0;
        for (const Qr of this.yh) this.positionStarts.push(Sr), Sr += Qr.endMs - Qr.startMs;
        this.durationMs = Sr
      }
      get startMs() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.yh[0]) || void 0 === Sr ? void 0 : Sr.startMs) && void 0 !== rr ? rr : 0
      }
      get endMs() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.yh.at(-1)) || void 0 === Sr ? void 0 : Sr.endMs) && void 0 !== rr ? rr : 0
      }
      toPosition(rr) {
        for (let Sr = 0; Sr < this.yh.length; Sr++) {
          const Qr = this.yh[Sr];
          if (rr < Qr.endMs) return this.positionStarts[Sr] + Math.max(0, rr - Qr.startMs)
        }
        return this.durationMs
      }
      toTime(rr) {
        const Sr = Math.max(0, Math.min(this.durationMs, rr));
        for (let Qr = this.yh.length - 1; Qr >= 0; Qr--)
          if (Sr >= this.positionStarts[Qr]) return this.yh[Qr].startMs + (Sr - this.positionStarts[Qr]);
        return this.startMs
      }
      contains(rr) {
        return this.yh.some((Sr => rr >= Sr.startMs && rr < Sr.endMs))
      }
      nextPlayableTime(rr) {
        for (const Sr of this.yh) {
          if (rr < Sr.startMs) return Sr.startMs;
          if (rr < Sr.endMs) return rr
        }
        return null
      }
    }

    function Mr(rr) {
      return [...rr].sort(((rr, Sr) => rr.startMs - Sr.startMs))
    }

    function Gr(rr, Sr) {
      let Qr = 1 / 0,
        Zr = -1 / 0;
      const Wr = rr => {
        Qr = Math.min(Qr, rr), Zr = Math.max(Zr, rr)
      };
      for (const ar of [...rr.videoSegments, ...rr.telemetryChunks]) Wr(ar.startMs), Wr(ar.endMs);
      for (const ar of rr.domEvents) Wr(Sr.toEpoch(ar.timestamp));
      return Qr < Zr ? {
        startMs: Qr,
        endMs: Zr
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class kr {
      constructor(rr, Sr) {
        this.wallNowMs = Sr, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = rr, this.anchorWallMs = Sr()
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
      timeAtWall(rr) {
        return this.playingState ? this.anchorTimeMs + (rr - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(rr) {
        this.anchorTimeMs = rr, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(rr) {
        this.reanchor(), this.speedState = rr
      }
      reanchor() {
        const rr = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(rr), this.anchorWallMs = rr
      }
    }
    const Ar = "bloxd-clock";
    class Vr {
      constructor(rr) {
        this.samples = void 0, this.samples = [];
        for (const Qr of rr) {
          var Sr;
          const rr = Qr.data;
          Qr.type === Rr.e.Custom && (null === rr || void 0 === rr ? void 0 : rr.tag) === Ar && "number" === typeof(null === (Sr = rr.payload) || void 0 === Sr ? void 0 : Sr.epochMs) && this.samples.push({
            domMs: Qr.timestamp,
            offsetMs: rr.payload.epochMs - Qr.timestamp
          })
        }
        this.samples.sort(((rr, Sr) => rr.domMs - Sr.domMs))
      }
      toEpoch(rr) {
        return rr + this.offsetAtDom(rr)
      }
      toDom(rr) {
        return rr - this.offsetAtDom(rr)
      }
      offsetAtDom(rr) {
        var Sr, Qr;
        let Zr = 0,
          Wr = this.samples.length - 1;
        for (; Zr < Wr;) {
          const Sr = Math.ceil((Zr + Wr) / 2);
          this.samples[Sr].domMs <= rr ? Zr = Sr : Wr = Sr - 1
        }
        return null !== (Sr = null === (Qr = this.samples[Zr]) || void 0 === Qr ? void 0 : Qr.offsetMs) && void 0 !== Sr ? Sr : 0
      }
    }
    const ir = new Set([Rr.h.MouseMove, Rr.h.MouseInteraction, Rr.h.Scroll, Rr.h.Input, Rr.h.TouchMove, Rr.h.Drag]),
      wr = "bloxd-active",
      cr = "player_death",
      Fr = "error",
      or = {
        $exception: "error",
        [Fr]: "error",
        death: "death",
        [cr]: "death"
      };

    function br(rr, Sr, Qr) {
      return function(rr, Sr) {
        const Qr = [];
        for (const Zr of rr) {
          let rr = Zr.startMs;
          for (const Wr of Sr) Wr.endMs <= rr || Wr.startMs >= Zr.endMs || (Wr.startMs > rr && Qr.push({
            startMs: rr,
            endMs: Wr.startMs
          }), rr = Math.max(rr, Wr.endMs));
          rr < Zr.endMs && Qr.push({
            startMs: rr,
            endMs: Zr.endMs
          })
        }
        return Qr
      }(function(rr) {
        const Sr = [];
        for (const Qr of rr) {
          const rr = Sr.at(-1);
          void 0 !== rr && Qr.atMs - rr.endMs <= 5e3 ? rr.endMs = Qr.atMs : Sr.push({
            startMs: Qr.atMs,
            endMs: Qr.atMs
          })
        }
        return Sr
      }(rr), gr([...Sr, ...Qr])).filter((rr => rr.endMs - rr.startMs >= 1e3))
    }

    function Jr(rr) {
      var Sr, Qr, Zr;
      return rr.type === Rr.e.IncrementalSnapshot ? ir.has(null !== (Qr = null === (Zr = rr.data) || void 0 === Zr ? void 0 : Zr.source) && void 0 !== Qr ? Qr : -1) : rr.type === Rr.e.Custom && (null === (Sr = rr.data) || void 0 === Sr ? void 0 : Sr.tag) === wr
    }

    function Dr(rr, Sr) {
      const Qr = [];
      for (const jr of rr)
        if (jr.type === Rr.e.Custom) {
          var Zr;
          const rr = null === (Zr = jr.data) || void 0 === Zr ? void 0 : Zr.tag,
            Wr = void 0 === rr ? void 0 : or[rr];
          void 0 !== Wr && Qr.push({
            kind: Wr,
            atMs: Sr.toEpoch(jr.timestamp)
          })
        } else if (jr.type === Rr.e.Plugin) {
        var Wr, ar;
        const rr = jr.data;
        "rrweb/console@1" !== (null === rr || void 0 === rr ? void 0 : rr.plugin) || "error" !== (null === (Wr = rr.payload) || void 0 === Wr ? void 0 : Wr.level) && "assert" !== (null === (ar = rr.payload) || void 0 === ar ? void 0 : ar.level) || Qr.push({
          kind: "error",
          atMs: Sr.toEpoch(jr.timestamp)
        })
      }
      return Qr
    }
    const dr = 3e6;
    class sr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dr;
        this.fetchUrls = rr, this.onUrls = Sr, this.wallNowMs = Qr, this.refreshableAfterMs = Zr, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = Qr()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const rr = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        rr > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), rr) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(rr) {
        this.inFlight = !0;
        const Sr = this.wallNowMs();
        this.lastRefreshWallMs = Sr;
        let Qr = !1;
        rr().then((rr => {
          this.destroyed || (this.urlsFetchedAtWallMs = Sr, this.onUrls(rr))
        })).catch((rr => {
          console.error("Failed to refresh the replay's URLs.", rr), Qr = !0
        })).finally((() => {
          this.inFlight = !1, Qr && this.request()
        }))
      }
    }
    class ur {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dr;
        this.source = rr, this.description = Sr, this.wallNowMs = Qr, this.refreshableAfterMs = Zr, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(rr) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const Sr = this.wallNowMs();
        for (const Qr of rr) this.entries.set(Qr.sequence, {
          urls: Qr,
          fetchedAtWallMs: Sr
        })
      }
      get(rr) {
        const Sr = this.getFresh(rr);
        return null !== Sr ? Sr : null === this.source || this.unavailable.has(rr) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(rr) {
        return null === this.getFresh(rr) && !this.unavailable.has(rr)
      }
      request(rr) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const Sr = rr.filter((rr => this.needs(rr)));
        Sr.length > 0 && this.fetch(this.source, Sr.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(rr) {
        const Sr = this.entries.get(rr);
        return void 0 === Sr ? null : null === this.source || this.wallNowMs() - Sr.fetchedAtWallMs < this.refreshableAfterMs ? Sr.urls : null
      }
      fetch(rr, Sr) {
        this.inFlight = !0;
        const Qr = this.wallNowMs();
        rr.load(Sr).then((rr => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const Zr = new Set;
          for (const Sr of rr) this.entries.set(Sr.sequence, {
            urls: Sr,
            fetchedAtWallMs: Qr
          }), Zr.add(Sr.sequence);
          for (const Qr of Sr) Zr.has(Qr) || (console.warn(`Replay sequence ${Qr} has no ${this.description}.`), this.unavailable.add(Qr))
        })).catch((rr => {
          console.error(`Failed to fetch the replay's ${this.description}.`, rr), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class rS {
      constructor(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : dr;
        this.load = Sr, this.onLoaded = Qr, this.onFailed = Zr, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = SS([]), this.hidden = [], this.destroyed = !1, this.chunks = [...rr].sort(((rr, Sr) => rr.startMs - Sr.startMs)).map((rr => ({
          chunk: rr,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new ur(Wr, "telemetry URLs", ar, jr), this.urls.reset(ZS(rr))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((rr => "loaded" === rr.status)).length
      }
      update(rr, Sr, Qr) {
        if (null === this.load || this.destroyed) return;
        const Zr = Sr.toPosition(rr),
          Wr = Sr.toTime(Zr - 1e4),
          ar = Sr.toTime(Zr + 6e4 * Math.max(1, Qr)),
          jr = Sr.toTime(Zr + 12e4 * Math.max(1, Qr)),
          Ir = this.chunks.filter((rr => "idle" === rr.status && rr.chunk.endMs >= Wr && rr.chunk.startMs <= jr)).sort(((Sr, Qr) => WS(rr, Sr.chunk) - WS(rr, Qr.chunk)));
        this.urls.request(Ir.flatMap((rr => {
          var Sr;
          let {
            chunk: Qr
          } = rr;
          return null !== (Sr = Qr.sequence) && void 0 !== Sr ? Sr : []
        })));
        for (const fr of Ir) {
          if (this.loading >= 3) return;
          const rr = fr.chunk.startMs <= ar ? this.getUrl(fr.chunk) : null;
          null !== rr && this.startLoad(fr, rr, this.load)
        }
      }
      replaceUrls(rr) {
        this.urls.reset(ZS(rr));
        for (const Sr of this.chunks) {
          const Qr = rr.find((rr => rr.startMs === Sr.chunk.startMs && rr.endMs === Sr.chunk.endMs));
          void 0 !== Qr && (Sr.chunk = Qr, "failed" === Sr.status && (Sr.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(rr) {
        var Sr;
        if (void 0 === rr.sequence) return null !== (Sr = rr.url) && void 0 !== Sr ? Sr : null;
        const Qr = this.urls.get(rr.sequence);
        return "string" === typeof Qr ? null : Qr.url
      }
      startLoad(rr, Sr, Qr) {
        rr.status = "loading", rr.attempts++, this.loading++, Qr(Sr).then((Sr => {
          this.destroyed || (rr.status = "loaded", rr.telemetry = Sr, this.merge(), this.onLoaded())
        })).catch((Sr => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${rr.chunk.startMs}-${rr.chunk.endMs}.`, Sr), rr.status = rr.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const rr = [];
        let Sr = !1;
        for (const Zr of this.chunks) {
          const Qr = rr.at(-1);
          if (null === Zr.telemetry) {
            Sr = !1;
            continue
          }
          const Wr = QS(Zr.telemetry, Zr.chunk);
          void 0 !== Qr && Sr && Zr.chunk.startMs <= Qr.endMs + 1e3 ? (Qr.telemetry.push(Wr), Qr.endMs = Zr.chunk.endMs) : (rr.push({
            telemetry: [Wr],
            endMs: Zr.chunk.endMs
          }), Sr = !0)
        }
        const Qr = rr.map((rr => function(rr, Sr) {
          const Qr = rr.actions.at(-1);
          if (void 0 === Qr || 0 === Qr.bits) return rr;
          return {
            ...rr,
            actions: [...rr.actions, {
              atMs: Sr,
              bits: 0
            }]
          }
        }(SS(rr.telemetry), rr.endMs)));
        this.merged = SS(Qr), this.hidden = Qr.flatMap(((Sr, Qr) => function(rr, Sr) {
          const Qr = [];
          let Zr = null;
          for (const {
              atMs: Wr,
              event: ar
            }
            of rr.events) "hidden" === ar && null === Zr ? Zr = Wr : "visible" === ar && null !== Zr && (Qr.push({
            startMs: Zr,
            endMs: Wr
          }), Zr = null);
          return null !== Zr && Qr.push({
            startMs: Zr,
            endMs: Sr
          }), gr(Qr)
        }(Sr, rr[Qr].endMs)))
      }
    }

    function SS(rr) {
      return {
        inputRecorded: rr.some((rr => rr.keys.length > 0)),
        frames: rr.flatMap((rr => rr.frames)),
        states: rr.flatMap((rr => rr.states)),
        events: rr.flatMap((rr => rr.events)),
        actions: rr.flatMap((rr => rr.actions)),
        keys: rr.flatMap((rr => rr.keys))
      }
    }

    function QS(rr, Sr) {
      const {
        actions: Qr
      } = rr;
      return !rr.inputRecorded || Qr.length > 0 && Qr[0].atMs <= Sr.startMs + 1 ? rr : {
        ...rr,
        actions: [{
          atMs: Sr.startMs,
          bits: 0
        }, ...Qr]
      }
    }

    function ZS(rr) {
      return rr.flatMap((rr => {
        let {
          sequence: Sr,
          url: Qr
        } = rr;
        return void 0 === Sr || void 0 === Qr ? [] : [{
          sequence: Sr,
          url: Qr
        }]
      }))
    }

    function WS(rr, Sr) {
      return rr < Sr.startMs ? Sr.startMs - rr : rr > Sr.endMs ? 2 * (rr - Sr.endMs) : 0
    }
    class aS {
      constructor(rr, Sr, Qr, Zr) {
        this.data = rr, this.domClock = Sr, this.timeline = Qr, this.options = Zr, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(rr, Sr) {
          return rr.filter(Jr).map((rr => Sr.toEpoch(rr.timestamp)))
        }(rr.domEvents, Sr), this.telemetry = new rS(rr.telemetryChunks, Zr.loadTelemetryChunk, (() => {
          this.rebuild()
        }), Zr.onTelemetryFailed, Zr.telemetryUrls), this.rebuild()
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
      update(rr, Sr) {
        this.telemetry.update(rr, this.timeline, Sr)
      }
      replaceTelemetryUrls(rr) {
        this.telemetry.replaceUrls(rr)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(rr) {
        return this.telemetry.hiddenRanges.some(jS(rr))
      }
      isVideoGapAt(rr) {
        return this.videoGapRanges.some(jS(rr))
      }
      rebuild() {
        const rr = this.telemetry.telemetry,
          Sr = this.telemetry.hiddenRanges;
        this.videoGapRanges = br(rr.frames, this.data.videoSegments, Sr), this.inactiveRangeList = function(rr, Sr, Qr, Zr) {
          const Wr = [...Sr];
          if (rr.length > 0) {
            const Sr = [Qr.startMs, ...rr, Qr.endMs];
            for (let rr = 1; rr < Sr.length; rr++) {
              const Qr = Sr[rr - 1],
                ar = Sr[rr] - 1e3;
              ar - Qr >= Zr && Wr.push({
                startMs: Qr,
                endMs: ar
              })
            }
          }
          return gr(Wr).filter((rr => rr.endMs - rr.startMs >= Zr))
        }(this.activityTimes, Sr, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(rr) {
          const {
            timeline: Sr
          } = rr;
          return [...Dr(rr.domEvents, rr.domClock), ...rr.telemetry.events.filter((rr => {
            let {
              event: Sr
            } = rr;
            return "contextLost" === Sr
          })).map((rr => {
            let {
              atMs: Sr
            } = rr;
            return {
              kind: "graphicsCrash",
              atMs: Sr
            }
          })), ...rr.hidden.map((rr => ({
            kind: "hidden",
            atMs: rr.startMs,
            endMs: rr.endMs
          }))), ...rr.extraMarkers].filter((rr => rr.atMs >= Sr.startMs && rr.atMs <= Sr.endMs && (Sr.contains(rr.atMs) || Sr.contains(rr.atMs - 1)))).sort(((rr, Sr) => rr.atMs - Sr.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: rr,
          extraMarkers: this.data.markers,
          hidden: Sr,
          timeline: this.timeline
        })
      }
    }

    function jS(rr) {
      return Sr => rr >= Sr.startMs && rr < Sr.endMs
    }
    class IS {
      constructor() {
        this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
          handler: (rr, Sr, Qr) => {
            let {
              replayer: Zr
            } = Qr;
            this.record(rr), Sr && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
              this.settleQueued = !1, this.settle(Zr)
            })))
          }
        }
      }
      settle(rr) {
        const Sr = rr.iframe.contentDocument;
        if (null === Sr || void 0 === Sr || !Sr.documentElement.classList.contains("rrweb-paused")) return;
        const Qr = rr.getMetaData().startTime + rr.getCurrentTime();
        ! function(rr, Sr, Qr, Zr) {
          for (const Wr of rr) {
            const rr = Wr.effect,
              ar = Qr.get(Sr.getId(rr.target)),
              jr = void 0 === ar ? 1 / 0 : Zr - ar,
              Ir = Math.min(Math.max(jr, Number(Wr.currentTime)), Number(rr.getComputedTiming().endTime));
            Number.isFinite(Ir) && (Wr.currentTime = Ir)
          }
        }(Sr.getAnimations(), rr.getMirror(), this.addedAt, Qr)
      }
      record(rr) {
        if (rr.type === Rr.e.FullSnapshot) this.addedAt.clear();
        else if (rr.type === Rr.e.IncrementalSnapshot && rr.data.source === Rr.h.Mutation) {
          for (const {
              id: Sr
            }
            of rr.data.removes) this.addedAt.delete(Sr);
          for (const {
              node: Sr
            }
            of rr.data.adds) this.addedAt.set(Sr.id, rr.timestamp)
        }
      }
    }
    const fS = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      ES = new Set(["srcset", "imagesrcset"]),
      pS = new Set(["to", "from", "by", "values"]),
      xS = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      mS = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      NS = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      US = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      tS = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      hS = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      zS = /^data:image\/(?!svg)/i,
      YS = "about:invalid";

    function nS(rr, Sr) {
      let {
        hosts: Qr
      } = Sr, Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Wr = rr.trim();
      if (/[\\\u0000-\u001f]/.test(Wr)) return !1;
      if (!hS.test(Wr)) return !0;
      let ar;
      try {
        ar = new URL(Wr.startsWith("//") ? `https:${Wr}` : Wr)
      } catch {
        return !1
      }
      return "data:" === ar.protocol ? Zr ? "text/css" !== Wr.slice(5).split(/[,;]/)[0].trim().toLowerCase() : zS.test(Wr) : "blob:" === ar.protocol || ("http:" === ar.protocol || "https:" === ar.protocol) && Qr.some((rr => ar.hostname === rr || ar.hostname.endsWith(`.${rr}`)))
    }

    function eS(rr, Sr) {
      return rr.replace(mS, (function(rr) {
        for (var Qr = arguments.length, Zr = new Array(Qr > 1 ? Qr - 1 : 0), Wr = 1; Wr < Qr; Wr++) Zr[Wr - 1] = arguments[Wr];
        if (nS(Zr.slice(0, 7).find((rr => "string" === typeof rr)), Sr, !0)) return rr;
        const ar = rr.slice(0, 4).toLowerCase();
        return "url(" === ar ? `url("${YS}")` : "@imp" === ar ? `@import "${YS}"` : `"${YS}"`
      }))
    }

    function KS(rr) {
      return tS.test(rr.replace(mS, '""'))
    }

    function yS(rr) {
      let Sr = "between";
      for (let Qr = 0; Qr < rr.length; Qr++) {
        const Zr = rr[Qr];
        if ("/" === Zr && "*" === rr[Qr + 1]) {
          if (Qr = rr.indexOf("*/", Qr + 2), -1 === Qr) return "open";
          Qr++, Sr = "between"
        } else if ('"' === Zr || "'" === Zr) {
          for (Qr++; Qr < rr.length && rr[Qr] !== Zr && !/[\n\r\f]/.test(rr[Qr]); Qr++) "\\" === rr[Qr] && Qr++;
          if (Qr >= rr.length) return "open";
          Sr = "token"
        } else "\\" === Zr ? (Qr++, Sr = "token") : ";" === Zr || "{" === Zr || "}" === Zr ? Sr = "between" : /\s/.test(Zr) || (Sr = "token")
      }
      return Sr
    }

    function BS(rr, Sr) {
      const Qr = eS(rr, Sr);
      if (KS(Qr) || "open" === yS(Qr)) return "";
      if (!Qr.includes("\\")) return Qr;
      const Zr = function(rr) {
        return rr.replace(US, ((rr, Sr, Qr) => void 0 !== Sr ? String.fromCodePoint(Math.min(parseInt(Sr, 16), 1114111)) : null !== Qr && void 0 !== Qr ? Qr : ""))
      }(Qr);
      return eS(Zr, Sr) !== Zr || KS(Zr) ? "" : Qr
    }

    function TS(rr, Sr) {
      const Qr = NS.test(rr) ? BS(rr, Sr) : rr;
      return Qr.split("/* rr_split */").every((rr => "between" === yS(rr))) ? Qr : ""
    }

    function vS(rr, Sr, Qr) {
      if ("string" === typeof Sr) {
        const Zr = rr.toLowerCase();
        if (xS.has(Zr)) return null;
        if (ES.has(Zr)) return function(rr, Sr) {
          return rr.split(",").every((rr => {
            const Qr = rr.trim().split(/\s+/)[0];
            return void 0 === Qr || "" === Qr || nS(Qr, Sr)
          }))
        }(Sr, Qr) ? Sr : null;
        if (pS.has(Zr)) {
          return Sr.split(";").every((rr => nS(rr, Qr))) ? vS("", Sr, Qr) : null
        }
        return fS.has(Zr) ? nS(Sr, Qr) ? Sr : null : "_csstext" === Zr ? TS(Sr, Qr) : NS.test(Sr) ? BS(Sr, Qr) : Sr
      }
      if (Array.isArray(Sr)) return Sr.map((rr => vS("", rr, Qr)));
      if (null !== Sr && "object" === typeof Sr) {
        const Zr = "style" === rr.toLowerCase(),
          Wr = {};
        for (const [rr, jr] of Object.entries(Sr)) Wr[rr] = vS(Zr ? "" : rr, jr, Qr);
        const {
          id: ar
        } = Wr;
        if ("number" === typeof ar && Qr.styleTextIds.has(ar))
          for (const rr of ["textContent", "value"]) {
            const Sr = Wr[rr];
            "string" === typeof Sr && (Wr[rr] = TS(Sr, Qr))
          }
        return Wr
      }
      return Sr
    }

    function OS(rr, Sr) {
      const Qr = (rr, Zr) => {
        if (null === rr || "object" !== typeof rr) return;
        const Wr = rr;
        if (Sr(Wr, Zr), Array.isArray(Wr.childNodes))
          for (const Sr of Wr.childNodes) Qr(Sr, Wr.id)
      };
      for (const Zr of rr) {
        const rr = Zr.data;
        if (Zr.type === Rr.e.FullSnapshot) Qr(null === rr || void 0 === rr ? void 0 : rr.node, null);
        else if (Zr.type === Rr.e.IncrementalSnapshot && Array.isArray(null === rr || void 0 === rr ? void 0 : rr.adds))
          for (const Sr of rr.adds) Qr(null === Sr || void 0 === Sr ? void 0 : Sr.node, null === Sr || void 0 === Sr ? void 0 : Sr.parentId)
      }
    }

    function LS(rr) {
      const Sr = new Set,
        Qr = [];
      OS(rr, ((rr, Zr) => {
        let {
          id: Wr,
          tagName: ar
        } = rr;
        "number" === typeof Wr && ("string" === typeof ar && "style" === ar.toLowerCase() && Sr.add(Wr), Qr.push({
          id: Wr,
          parentId: Zr
        }))
      }));
      const Zr = new Set;
      for (const {
          id: Wr,
          parentId: ar
        }
        of Qr) "number" === typeof ar && Sr.has(ar) && Zr.add(Wr);
      return Zr
    }
    const lS = {
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
      XS = {
        pointer: ["none", "coarse", "fine"],
        "any-pointer": ["none", "coarse", "fine"],
        hover: ["none", "hover"],
        "any-hover": ["none", "hover"]
      },
      PS = "(min-width: 0px)",
      HS = "(not (min-width: 0px))",
      qS = /@media\b[^{;]*/gi,
      RS = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
      gS = new Set(["_cssText", "rule", "replace", "replaceSync"]);

    function CS(rr, Sr) {
      return rr.replace(qS, (rr => rr.replace(RS, ((rr, Qr, Zr) => {
        const Wr = Qr.toLowerCase(),
          ar = lS[Sr][Wr];
        if (void 0 === Zr) return "none" === ar ? HS : PS;
        const jr = Zr.toLowerCase();
        return XS[Wr].includes(jr) ? jr === ar ? PS : HS : rr
      }))))
    }

    function MS(rr) {
      const Sr = rr.attributes,
        Qr = null === Sr || void 0 === Sr ? void 0 : Sr.rel,
        Zr = null === Sr || void 0 === Sr ? void 0 : Sr.href;
      return "link" === rr.tagName && "string" === typeof Qr && Qr.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof Zr ? Zr : null
    }

    function GS(rr) {
      const Sr = new Map;
      OS(rr, (rr => {
        const Qr = MS(rr);
        null !== Qr && Sr.set(rr.id, Qr)
      }));
      const Qr = new Map;
      for (const Wr of rr) {
        const rr = Wr.data;
        if (Wr.type === Rr.e.IncrementalSnapshot && (null === rr || void 0 === rr ? void 0 : rr.source) === Rr.h.Mutation)
          for (const Wr of null !== (Zr = rr.attributes) && void 0 !== Zr ? Zr : []) {
            var Zr;
            const rr = Wr.attributes._cssText,
              ar = Sr.get(Wr.id);
            "string" !== typeof rr || void 0 === ar || Qr.has(ar) || Qr.set(ar, rr)
          }
      }
      return Qr
    }

    function kS(rr, Sr, Qr) {
      var Zr;
      if ("string" === typeof rr) return null !== Qr.pointer && gS.has(Sr) ? CS(rr, Qr.pointer) : rr;
      if (Array.isArray(rr)) {
        let Sr = !1;
        const Zr = rr.map((rr => {
          const Zr = kS(rr, "", Qr);
          return Sr ||= Zr !== rr, Zr
        }));
        return Sr ? Zr : rr
      }
      if (null === rr || "object" !== typeof rr) return rr;
      const Wr = function(rr, Sr) {
        const Qr = rr.attributes,
          Zr = MS(rr),
          Wr = null !== Zr && void 0 === (null === Qr || void 0 === Qr ? void 0 : Qr._cssText) ? Sr.sheets.get(Zr) : void 0;
        return void 0 === Wr ? rr : {
          ...rr,
          attributes: {
            ...Qr,
            _cssText: Wr
          }
        }
      }(rr, Qr);
      let ar = null;
      for (const [Ir, fr] of Object.entries(Wr)) {
        const rr = kS(fr, Ir, Qr);
        rr !== fr && (ar ??= {
          ...Wr
        }, ar[Ir] = rr)
      }
      const {
        id: jr
      } = Wr;
      if (null !== Qr.pointer && "number" === typeof jr && Qr.styleTextIds.has(jr))
        for (const Ir of ["textContent", "value"]) {
          const rr = Wr[Ir],
            Sr = "string" === typeof rr ? CS(rr, Qr.pointer) : rr;
          Sr !== rr && (ar ??= {
            ...Wr
          }, ar[Ir] = Sr)
        }
      return null !== (Zr = ar) && void 0 !== Zr ? Zr : Wr
    }
    const AS = "brv-styles",
      VS = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      iS = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${VS.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class wS {
      static create(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        if (!Sr.some((rr => rr.type === Rr.e.FullSnapshot))) return null;
        const fr = function(rr, Sr) {
          const Qr = {
            sheets: GS(rr),
            styleTextIds: LS(rr),
            pointer: Sr
          };
          return rr.map((rr => {
            if (rr.type !== Rr.e.FullSnapshot && rr.type !== Rr.e.IncrementalSnapshot) return rr;
            const Sr = kS(rr.data, "data", Qr);
            return Sr === rr.data ? rr : {
              ...rr,
              data: Sr
            }
          }))
        }(function(rr, Sr) {
          const Qr = {
            hosts: Sr,
            styleTextIds: LS(rr)
          };
          return rr.map((rr => rr.type === Rr.e.Meta ? rr : {
            ...rr,
            data: vS("data", rr.data, Qr)
          }))
        }(Sr, ar), Qr);
        return new wS(rr, fr, Zr, Wr, jr, Ir)
      }
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        var jr, Ir, fr, Er;
        this.domClock = Qr, this.canvasSelectors = Zr, this.videoLayer = Wr, this.replayer = void 0, this.pausedAnimations = new IS, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (jr = null === (Ir = Sr[0]) || void 0 === Ir ? void 0 : Ir.timestamp) && void 0 !== jr ? jr : 0, this.lastDomMs = null !== (fr = null === (Er = Sr.at(-1)) || void 0 === Er ? void 0 : Er.timestamp) && void 0 !== fr ? fr : 0, this.replayer = new Rr.l(Sr, {
          root: rr,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          plugins: [this.pausedAnimations.plugin],
          insertStyleRules: VS
        }), this.replayer.on("resize", (rr => {
          const {
            width: Sr,
            height: Qr
          } = rr;
          ar({
            width: Sr,
            height: Qr
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect(), this.pausedAnimations.settle(this.replayer)
        }))
      }
      sync(rr, Sr) {
        const Qr = this.domOffsetAt(rr);
        Sr ? this.replayer.play(Qr) : this.replayer.pause(Qr), this.lastDomCheckMs = performance.now()
      }
      update(rr, Sr, Qr) {
        Qr - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = Qr, this.placeVideoOverCanvas()), Sr && Qr - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = Qr, this.checkDrift(rr))
      }
      setSpeed(rr) {
        this.replayer.setConfig({
          speed: rr
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(rr) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(rr)) - this.firstDomMs)
      }
      checkDrift(rr) {
        const Sr = this.domOffsetAt(rr);
        Sr >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - Sr) > 400 && this.replayer.play(Sr)
      }
      placeVideoOverCanvas() {
        const rr = this.replayer.iframe.contentDocument,
          Sr = null === rr ? null : function(rr, Sr) {
            for (const Qr of Sr) {
              const Sr = rr.querySelector(Qr);
              if (null !== Sr) return Sr
            }
            return null
          }(rr, this.canvasSelectors),
          Qr = this.videoLayer.element;
        null !== Sr ? (Qr.previousSibling !== Sr && Sr.after(Qr), Qr.style.display = "", Qr.style.left = `${Sr.offsetLeft}px`, Qr.style.top = `${Sr.offsetTop}px`, Qr.style.width = `${Sr.offsetWidth}px`, Qr.style.height = `${Sr.offsetHeight}px`) : Qr.style.display = "none"
      }
    }
    const cS = {
      width: 1280,
      height: 720
    };
    class FS {
      constructor(rr, Sr) {
        this.root = rr, this.onViewportChanged = Sr, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", rr.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(rr)
      }
      setViewport(rr) {
        var Sr;
        null === rr || rr.width <= 0 || rr.height <= 0 || rr.width === (null === (Sr = this.viewport) || void 0 === Sr ? void 0 : Sr.width) && rr.height === this.viewport.height || (this.viewport = rr, this.element.style.width = `${rr.width}px`, this.element.style.height = `${rr.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var rr;
        const Sr = null !== (rr = this.viewport) && void 0 !== rr ? rr : cS,
          Qr = this.root.getBoundingClientRect(),
          Zr = Math.min(Qr.width / Sr.width, Qr.height / Sr.height),
          Wr = (Qr.width - Sr.width * Zr) / 2,
          ar = (Qr.height - Sr.height * Zr) / 2;
        this.element.style.transform = `translate(${Wr}px, ${ar}px) scale(${Zr})`
      }
    }
    class oS {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dr;
        this.urls = void 0, this.urls = new ur(rr, "video URLs", Sr, Qr)
      }
      reset(rr) {
        this.urls.reset(rr.flatMap((rr => {
          var Sr;
          return null !== (Sr = function(rr) {
            return "url" in rr ? null === rr.url ? null : {
              sequence: rr.sequence,
              url: rr.url
            } : void 0 === rr.partUrls ? null : {
              sequence: rr.sequence,
              partUrls: rr.partUrls
            }
          }(rr)) && void 0 !== Sr ? Sr : []
        })))
      }
      get(rr) {
        return this.urls.get(rr)
      }
      update(rr, Sr, Qr) {
        this.urls.request(function(rr, Sr, Qr, Zr) {
          return rr.filter((rr => rr.endMs > Sr && rr.startMs < Sr + Qr && Zr(rr.sequence))).map((rr => rr.sequence))
        }(rr, Sr, 12e4 * Math.max(1, Qr), (rr => this.urls.needs(rr))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function bS(rr, Sr, Qr) {
      const Zr = [];
      let Wr = rr.length,
        ar = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, rr.length)
      }, (() => (async () => {
        for (; ar < Wr;) {
          const Ir = ar++;
          try {
            Zr[Ir] = await Sr(rr[Ir], Qr)
          } catch (jr) {
            if (Qr.aborted) throw jr;
            console.warn(`Replay video part ${Ir} failed to load; playing the parts before it.`, jr), Wr = Math.min(Wr, Ir)
          }
        }
      })()))), Zr.slice(0, Wr)
    }

    function JS(rr) {
      const Sr = [];
      let Qr = 0;
      for (const pr of rr) Sr.push(Qr), Qr += pr.byteLength;
      let Zr = 0;
      const Wr = Qr => {
          for (; Sr[Zr] > Qr;) Zr--;
          for (; Zr + 1 < Sr.length && Sr[Zr + 1] <= Qr;) Zr++;
          return rr[Zr][Qr - Sr[Zr]]
        },
        ar = rr => Wr(rr) * 2 ** 24 + 65536 * Wr(rr + 1) + 256 * Wr(rr + 2) + Wr(rr + 3);
      let jr = 0,
        Ir = !1,
        fr = !1,
        Er = 0;
      for (; jr + 8 <= Qr;) {
        const rr = String.fromCharCode(Wr(jr + 4), Wr(jr + 5), Wr(jr + 6), Wr(jr + 7));
        let Sr = ar(jr);
        if (1 === Sr) {
          if (jr + 16 > Qr) break;
          Sr = ar(jr + 8) * 2 ** 32 + ar(jr + 12)
        } else 0 === Sr && (Sr = Qr - jr);
        if (Sr < 8 || jr + Sr > Qr) break;
        jr += Sr, "moov" === rr ? Ir = !0 : "moof" === rr ? fr = !0 : "mdat" === rr && fr ? (fr = !1, Er = jr) : !fr && Er > 0 && (Er = jr)
      }
      return Ir && Er > 0 ? Er : null
    }
    async function DS(rr, Sr) {
      const Qr = await fetch(rr, {
        signal: Sr
      });
      if (!Qr.ok) throw new Error(`HTTP ${Qr.status}`);
      return Qr.arrayBuffer()
    }
    class dS {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DS,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = rr, this.sx = Sr, this.blobs = new Map
      }
      get(rr, Sr) {
        const Qr = sS(rr, Sr),
          Zr = this.blobs.get(Qr);
        return void 0 === Zr ? null : (this.remember(Qr, Zr), Zr)
      }
      async load(rr, Sr, Qr) {
        const Zr = await bS(Sr, this.fetchPart, Qr),
          Wr = function(rr) {
            const Sr = rr.map((rr => new Uint8Array(rr))),
              Qr = JS(Sr);
            return null === Qr ? null : new Blob(function(rr, Sr) {
              const Qr = [];
              let Zr = Sr;
              for (const Wr of rr) {
                if (Zr <= 0) break;
                Qr.push(Wr.byteLength <= Zr ? Wr : Wr.subarray(0, Zr)), Zr -= Wr.byteLength
              }
              return Qr
            }(Sr, Qr), {
              type: "video/mp4"
            })
          }(Zr);
        return null !== Wr && Zr.length === Sr.length && this.remember(sS(rr, Sr.length), Wr), Wr
      }
      remember(rr, Sr) {
        this.blobs.delete(rr), this.blobs.set(rr, Sr), this.blobs.size > this.sx && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function sS(rr, Sr) {
      return `${rr}/${Sr}`
    }

    function uS(rr) {
      const Sr = function(rr) {
        return rr.map(((Sr, Qr) => {
          const Zr = rr[Qr + 1];
          return void 0 === Zr ? Sr.endMs : Math.min(Sr.endMs, Zr.startMs)
        }))
      }(rr);
      return rr.map(((rr, Qr) => ({
        ...rr,
        endMs: Sr[Qr]
      }))).filter((rr => rr.endMs > rr.startMs))
    }

    function rQ(rr, Sr) {
      let Qr = 0,
        Zr = rr.length - 1;
      for (; Qr <= Zr;) {
        const Wr = Qr + Zr >> 1,
          ar = rr[Wr];
        if (Sr < ar.startMs) Zr = Wr - 1;
        else {
          if (!(Sr >= ar.endMs)) return ar;
          Qr = Wr + 1
        }
      }
      return null
    }

    function SQ(rr, Sr) {
      return (Sr - rr.startMs) / 1e3
    }

    function QQ(rr) {
      return Math.max(.4, .1 * rr)
    }

    function ZQ(rr) {
      return Math.max(.0625, Math.min(16, rr))
    }
    class WQ {
      constructor(rr, Sr, Qr, Zr, Wr, ar, jr) {
        this.still = Sr, this.clock = Qr, this.frameDurationS = Zr, this.wallNowMs = Wr, this.onLoadFailed = jr, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new dS, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = uS(rr), this.segmentUrls = new oS(ar), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(rr) {
        var Sr, Qr;
        const Zr = null !== (Sr = null !== (Qr = rQ(this.segments, rr)) && void 0 !== Qr ? Qr : this.segments.find((Sr => Sr.startMs > rr))) && void 0 !== Sr ? Sr : this.segments.at(-1);
        return void 0 === Zr ? null : {
          width: Zr.width,
          height: Zr.height
        }
      }
      failedAt(rr) {
        const Sr = rQ(this.segments, rr);
        return null !== Sr && this.failed.has(Sr.sequence)
      }
      replaceSegments(rr, Sr) {
        for (const Qr of this.slots.values()) this.release(Qr);
        this.slots.clear(), this.failed.clear(), this.segments = uS(rr), this.segmentUrls.reset(this.segments), this.still = Sr
      }
      update(rr) {
        var Sr, Qr;
        this.segmentUrls.update(this.segments, rr, this.clock.speed);
        const Zr = rQ(this.segments, rr),
          Wr = function(rr, Sr) {
            const Qr = rr.find((rr => rr.startMs > Sr));
            return void 0 === Qr ? null : Qr.startMs - Sr <= ("parts" in Qr ? 15e3 : 8e3) ? Qr : null
          }(this.segments, rr);
        this.evictExcept([Zr, Wr, null !== (Sr = null === (Qr = this.shown) || void 0 === Qr ? void 0 : Qr.segment) && void 0 !== Sr ? Sr : null]), null !== Wr && this.getSlot(Wr), this.showStill(null === Zr ? function(rr, Sr, Qr) {
          if (null === Sr) return null;
          const Zr = rr.at(-1);
          return void 0 === Zr ? Qr >= Sr.atMs - 1e4 ? Sr : null : Qr >= Zr.endMs && Math.abs(Sr.atMs - Zr.endMs) <= 1e4 ? Sr : null
        }(this.segments, this.still, rr) : null);
        const ar = null === Zr ? null : this.getSlot(Zr);
        if (null !== ar) {
          this.sync(ar, SQ(ar.segment, rr)), ar.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !ar.video.seeking && this.show(ar);
          for (const rr of this.slots.values()) rr === ar || rr.video.paused || rr.video.pause()
        } else {
          null === Zr && this.show(null);
          for (const rr of this.slots.values()) rr.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: rr,
          sumAbsDriftMs: Sr,
          maxAbsDriftMs: Qr,
          withinOneFrame: Zr,
          seeks: Wr
        } = this.stats;
        return {
          frames: rr,
          meanAbsDriftMs: 0 === rr ? 0 : Sr / rr,
          maxAbsDriftMs: Qr,
          withinOneFrame: 0 === rr ? 1 : Zr / rr,
          seeks: Wr
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
        for (const rr of this.slots.values()) this.release(rr);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(rr, Sr) {
        const {
          video: Qr
        } = rr;
        if (Qr.seeking) return;
        const {
          playing: Zr,
          speed: Wr
        } = this.clock, ar = Zr && Wr < 16, jr = function(rr) {
          let {
            targetS: Sr,
            currentS: Qr,
            playing: Zr,
            speed: Wr,
            frameDurationS: ar
          } = rr;
          const jr = Qr - Sr;
          if (!Zr) return Math.abs(jr) > ar / 2 ? {
            kind: "seek",
            mediaTimeS: Sr
          } : {
            kind: "none"
          };
          if (Math.abs(jr) > QQ(Wr)) return {
            kind: "seek",
            mediaTimeS: Sr
          };
          if (Math.abs(jr) < ar / 4) return {
            kind: "rate",
            playbackRate: ZQ(Wr)
          };
          const Ir = Wr - jr / .5;
          return {
            kind: "rate",
            playbackRate: ZQ(Math.max(.5 * Wr, Math.min(1.5 * Wr, Ir)))
          }
        }({
          targetS: Sr,
          currentS: Qr.currentTime,
          playing: ar,
          speed: Wr,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === jr.kind) {
          const Sr = this.seekLatencyS * Wr,
            Ir = Zr ? ar ? Math.min(Sr, QQ(Wr) / 2) : Sr : 0;
          rr.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, ar && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), Qr.currentTime = Math.max(0, jr.mediaTimeS + Ir)
        } else "rate" === jr.kind && Math.abs(Qr.playbackRate - jr.playbackRate) > .001 && (Qr.playbackRate = jr.playbackRate);
        ar && Qr.paused && Qr.currentTime < Qr.duration ? (Qr.playbackRate = ZQ(Wr), Qr.play().catch((rr => {
          console.warn("Replay video refused to play.", rr)
        }))) : ar || Qr.paused || Qr.pause()
      }
      getSlot(rr) {
        const Sr = this.slots.get(rr.sequence);
        if (void 0 !== Sr) return Sr;
        const Qr = "parts" in rr ? this.blobs.get(rr.sequence, rr.parts) : null,
          Zr = null === Qr ? this.segmentUrls.get(rr.sequence) : null;
        if ("pending" === Zr) return null;
        if ("failed" === Zr) return this.failed.has(rr.sequence) || (console.error(`Replay video segment ${rr.sequence} has no URLs to load.`), this.markFailed(rr)), null;
        const Wr = document.createElement("video");
        Wr.className = "brv-video", Wr.muted = !0, Wr.playsInline = !0, Wr.preload = "auto", Wr.disablePictureInPicture = !0;
        const ar = {
          segment: rr,
          video: Wr,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== Qr ? this.playBlob(ar, Qr) : null !== Zr && ("url" in Zr ? Wr.src = Zr.url : this.loadParts(ar, Zr.partUrls)), Wr.addEventListener("seeked", (() => {
          if (null !== ar.seekStartedWallMs) {
            const rr = (this.wallNowMs() - ar.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, rr), ar.seekStartedWallMs = null
          }
        })), Wr.addEventListener("loadeddata", (() => {
          this.slots.get(rr.sequence) === ar && this.failed.delete(rr.sequence)
        })), Wr.addEventListener("error", (() => {
          this.slots.get(rr.sequence) === ar && (console.error(`Replay video segment ${rr.sequence} failed to load.`, Wr.error), this.markFailed(rr))
        })), this.watchFrames(ar), this.element.appendChild(Wr), this.slots.set(rr.sequence, ar), ar
      }
      loadParts(rr, Sr) {
        this.blobs.load(rr.segment.sequence, Sr, rr.abort.signal).then((Sr => {
          if (this.slots.get(rr.segment.sequence) === rr) return null === Sr ? (console.error(`Replay video segment ${rr.segment.sequence} has no playable parts.`), void this.markFailed(rr.segment)) : void this.playBlob(rr, Sr)
        }), (Sr => {
          this.slots.get(rr.segment.sequence) === rr && (console.error(`Replay video segment ${rr.segment.sequence} failed to load.`, Sr), this.markFailed(rr.segment))
        }))
      }
      playBlob(rr, Sr) {
        rr.objectUrl = URL.createObjectURL(Sr), rr.video.src = rr.objectUrl
      }
      markFailed(rr) {
        this.failed.add(rr.sequence), this.onLoadFailed()
      }
      showStill(rr) {
        const Sr = null !== rr && rr.url !== this.failedStillUrl ? rr : null;
        null !== Sr && this.stillImage.getAttribute("src") !== Sr.url && (this.stillImage.src = Sr.url);
        const Qr = null !== Sr && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        Qr !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", Qr), this.stillShown = Qr)
      }
      show(rr) {
        var Sr;
        this.shown !== rr && (null === (Sr = this.shown) || void 0 === Sr || Sr.video.classList.remove("brv-video-shown"), null === rr || void 0 === rr || rr.video.classList.add("brv-video-shown"), this.shown = rr)
      }
      evictExcept(rr) {
        for (const [Sr, Qr] of this.slots) rr.includes(Qr.segment) || (this.release(Qr), this.slots.delete(Sr))
      }
      release(rr) {
        this.shown === rr && (this.shown = null), rr.abort.abort(), rr.video.pause(), rr.video.removeAttribute("src"), rr.video.load(), rr.video.remove(), null !== rr.objectUrl && URL.revokeObjectURL(rr.objectUrl)
      }
      watchFrames(rr) {
        const {
          video: Sr
        } = rr;
        if ("function" !== typeof Sr.requestVideoFrameCallback) return;
        const Qr = (Zr, Wr) => {
          if (!this.slots.has(rr.segment.sequence)) return;
          const ar = Sr.ownerDocument.defaultView,
            jr = null === ar ? 0 : ar.performance.timeOrigin - performance.timeOrigin,
            Ir = SQ(rr.segment, this.clock.timeAtWall(Wr.expectedDisplayTime + jr)),
            fr = this.lastPresented,
            Er = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== fr && fr.slot === rr && Er && this.clock.playing && Wr.mediaTime > fr.mediaTimeS) {
            const rr = Math.abs(function(rr, Sr, Qr) {
              return Qr < rr ? 1e3 * (Qr - rr) : 1e3 * Math.max(0, Qr - Sr)
            }(fr.mediaTimeS, Wr.mediaTime, fr.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += rr, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, rr), rr <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: rr,
            mediaTimeS: Wr.mediaTime,
            clockMediaTimeS: Ir
          }, Sr.requestVideoFrameCallback(Qr)
        };
        Sr.requestVideoFrameCallback(Qr)
      }
    }
    const aQ = 1 / 30,
      jQ = ["#noa-canvas", "#noa-container"];
    class IQ {
      constructor(rr, Sr) {
        var Qr, Zr, Wr, ar, jr, Ir, fr, Er;
        let pr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.lx = () => {
          this.frame = requestAnimationFrame(this.lx);
          const rr = performance.now();
          this.applySkips();
          const Sr = this.clock.timeMs();
          this.annotations.update(Sr, this.clock.speed), this.videoLayer.update(Sr), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(Sr)) : this.domLayer.update(Sr, this.clock.playing, rr);
          const Qr = this.getState();
          (null === this.lastState || function(rr, Sr) {
            return Object.keys(rr).some((Qr => "positionMs" === Qr ? Math.floor(rr.positionMs / 1e3) !== Math.floor(Sr.positionMs / 1e3) : rr[Qr] !== Sr[Qr]))
          }(Qr, this.lastState)) && this.emitState(Qr)
        };
        const xr = () => performance.now();
        this.lowFps = null !== (Qr = pr.lowFps) && void 0 !== Qr ? Qr : 25;
        const mr = new Vr(Sr.domEvents);
        this.timeline = new Cr(Sr.windows.length > 0 ? Sr.windows : [Gr(Sr, mr)]), this.chapters = [...Sr.chapters].sort(((rr, Sr) => rr.startMs - Sr.startMs)), this.annotations = new aS(Sr, mr, this.timeline, {
          inactivityThresholdMs: null !== (Zr = pr.inactivityThresholdMs) && void 0 !== Zr ? Zr : 1e4,
          loadTelemetryChunk: null !== (Wr = pr.loadTelemetryChunk) && void 0 !== Wr ? Wr : null,
          telemetryUrls: null !== (ar = pr.telemetryUrls) && void 0 !== ar ? ar : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new sr(null !== (jr = pr.refreshUrls) && void 0 !== jr ? jr : null, (rr => {
          this.videoLayer.replaceSegments(Mr(rr.videoSegments), rr.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(rr.telemetryChunks)
        })), this.clock = new kr(this.timeline.startMs, xr), this.stage = new FS(rr, (() => {
          var rr;
          null === (rr = this.domLayer) || void 0 === rr || rr.invalidateCanvasRect()
        })), this.videoLayer = new WQ(Mr(Sr.videoSegments), Sr.still, this.clock, aQ, xr, null !== (Ir = pr.segmentUrls) && void 0 !== Ir ? Ir : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = wS.create(this.stage.element, Sr.domEvents, Sr.recordedPointer, mr, null !== (fr = pr.canvasSelectors) && void 0 !== fr ? fr : jQ, null !== (Er = pr.resourceHosts) && void 0 !== Er ? Er : [], this.videoLayer, (rr => {
          this.stage.setViewport(rr)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.lx()
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
      subscribe(rr) {
        return this.listeners.add(rr), rr(this.getState()), () => {
          this.listeners.delete(rr)
        }
      }
      getState() {
        const rr = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(rr),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(rr),
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
      seekToPosition(rr) {
        this.seekToTime(this.timeline.toTime(rr))
      }
      seekBy(rr) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + rr)
      }
      stepFrame(rr) {
        this.clock.pause(), this.seekBy(rr * aQ * 1e3)
      }
      setSpeed(rr) {
        var Sr;
        this.clock.setSpeed(rr), null === (Sr = this.domLayer) || void 0 === Sr || Sr.setSpeed(rr), this.emit()
      }
      setSkipInactive(rr) {
        this.skipInactive = rr, this.emit()
      }
      goToChapter(rr) {
        const Sr = this.clock.timeMs(),
          Qr = 1 === rr ? this.chapters.find((rr => rr.startMs > Sr + 500)) : this.chapters.findLast((rr => rr.startMs < Sr - 2e3));
        void 0 !== Qr && this.seekToTime(Qr.startMs)
      }
      destroy() {
        var rr;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (rr = this.domLayer) || void 0 === rr || rr.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(rr) {
        return this.annotations.isHiddenAt(rr) ? "tabHidden" : this.videoLayer.failedAt(rr) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(rr) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var rr;
        if (!this.clock.playing) return;
        const Sr = this.clock.timeMs(),
          Qr = this.timeline.nextPlayableTime(Sr);
        if (null === Qr) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const Zr = this.skipInactive ? this.annotations.inactiveRanges.find((rr => Qr >= rr.startMs && Qr < rr.endMs - 500)) : void 0,
          Wr = null !== (rr = null === Zr || void 0 === Zr ? void 0 : Zr.endMs) && void 0 !== rr ? rr : Qr;
        Wr !== Sr && this.seekToTime(Wr)
      }
      seekToTime(rr) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, rr))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var rr;
        null === (rr = this.domLayer) || void 0 === rr || rr.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(rr) {
        this.lastState = rr;
        for (const Sr of this.listeners) Sr(rr)
      }
    }
    const fQ = 2500,
      EQ = 5;

    function pQ(rr) {
      let {
        label: Sr,
        wI: Qr,
        wide: Zr = !1
      } = rr;
      return (0, hr.jsx)("span", {
        className: `brv-key${Qr?" brv-key-held":""}${Zr?" brv-key-wide":""}`,
        children: Sr
      })
    }
    const xQ = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function mQ(rr) {
      const [Sr, Qr] = (0, Zr.useState)({
        bits: 0,
        presses: []
      });
      return (0, Zr.useEffect)((() => {
        let Sr = 0,
          Zr = "";
        const Wr = () => {
          Sr = requestAnimationFrame(Wr);
          const ar = rr.timeline.toTime(rr.getPositionMs()),
            {
              actions: jr,
              keys: Ir
            } = rr.input,
            mr = function(rr, Sr) {
              const Qr = Er(rr, Sr);
              return Qr < 0 ? 0 : rr[Qr].bits
            }(jr, ar),
            Nr = function(rr, Sr, Qr, Zr) {
              const Wr = Math.floor(Sr / Qr) * Qr,
                ar = new Map;
              for (let jr = Er(rr, Wr + Qr); jr >= 0 && rr[jr].atMs >= Wr; jr--) {
                const Sr = rr[jr];
                if (!Sr.down || !Sr.inPlay || Sr.atMs === Wr + Qr) continue;
                const Zr = {
                    code: Sr.code,
                    unbound: fr(Sr)
                  },
                  Ir = pr(Zr),
                  Er = ar.get(Ir);
                void 0 === Er ? ar.set(Ir, {
                  key: Zr,
                  presses: 1
                }) : Er.presses++
              }
              return [...ar].sort(((rr, Sr) => xr([rr[0], rr[1].presses], [Sr[0], Sr[1].presses]))).slice(0, Zr).map((rr => {
                let [, {
                  key: Sr
                }] = rr;
                return Sr
              }))
            }(Ir, ar, fQ, EQ),
            Ur = `${mr};${Nr.map((rr=>pr(rr))).join(",")}`;
          Ur !== Zr && (Zr = Ur, Qr({
            bits: mr,
            presses: Nr
          }))
        };
        return Wr(), () => {
          cancelAnimationFrame(Sr)
        }
      }), [rr]), Sr
    }

    function NQ(rr) {
      let {
        controller: Sr,
        labels: Qr
      } = rr;
      const {
        bits: Zr,
        presses: Wr
      } = mQ(Sr), ar = rr => function(rr, Sr) {
        return 0 !== (rr & 1 << jr.indexOf(Sr))
      }(Zr, rr);
      return (0, hr.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, hr.jsx)("div", {
          className: "brv-input-slot",
          children: Wr.map((rr => {
            const Sr = Nr(rr.code);
            return (0, hr.jsx)("span", {
              className: rr.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: rr.unbound ? Qr.unboundKey(Sr) : Sr
            }, pr(rr))
          }))
        }), (0, hr.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, hr.jsxs)("div", {
            className: "brv-keys",
            children: [(0, hr.jsx)("div", {
              className: "brv-keys-row",
              children: (0, hr.jsx)(pQ, {
                label: "W",
                wI: ar("forward")
              })
            }), (0, hr.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, hr.jsx)(pQ, {
                label: "A",
                wI: ar("left")
              }), (0, hr.jsx)(pQ, {
                label: "S",
                wI: ar("backward")
              }), (0, hr.jsx)(pQ, {
                label: "D",
                wI: ar("right")
              })]
            }), (0, hr.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, hr.jsx)(pQ, {
                label: "Shift",
                wI: ar("sprint")
              }), (0, hr.jsx)(pQ, {
                label: "Ctrl",
                wI: ar("crouch")
              }), (0, hr.jsx)(pQ, {
                label: "Space",
                wI: ar("jump"),
                wide: !0
              })]
            })]
          }), (0, hr.jsx)("div", {
            className: "brv-mouse",
            children: xQ.map((rr => {
              let {
                action: Sr,
                className: Qr
              } = rr;
              return (0, hr.jsx)("span", {
                className: `${Qr}${ar(Sr)?" brv-key-held":""}`
              }, Sr)
            }))
          })]
        })]
      })
    }
    const UQ = {
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
      fps: rr => `${rr} FPS`,
      keys: "Keys",
      unboundKey: rr => `${rr} does nothing here`,
      unboundKeys: rr => `${rr} did nothing`
    };

    function tQ(rr) {
      let {
        path: Sr
      } = rr;
      return (0, hr.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, hr.jsx)("path", {
          d: Sr
        })
      })
    }
    const hQ = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function zQ(rr) {
      let {
        label: Sr,
        onClick: Qr,
        children: Zr
      } = rr;
      return (0, hr.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: Sr,
        "aria-label": Sr,
        onClick: Qr,
        children: Zr
      })
    }

    function YQ(rr) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === rr ? document.exitFullscreen() : rr.requestFullscreen()).catch((rr => {
        console.warn("Couldn't toggle fullscreen.", rr)
      }))
    }

    function nQ(rr) {
      let {
        data: Sr,
        className: Qr,
        autoPlay: Wr = !1,
        options: ar,
        labels: jr = UQ,
        onController: Ir
      } = rr;
      const fr = (0, Zr.useRef)(null),
        Er = (0, Zr.useRef)(null),
        pr = (0, Zr.useRef)(ar);
      pr.current = ar;
      const xr = (0, Zr.useRef)(Wr);
      xr.current = Wr;
      const mr = (0, Zr.useRef)(Ir);
      mr.current = Ir;
      const [Nr, Ur] = (0, Zr.useState)(null), [tr, zr] = (0, Zr.useState)(null), [nr, er] = (0, Zr.useState)(!0), Kr = () => {
        er((rr => !rr))
      };
      (0, Zr.useEffect)((() => {
        var rr;
        ! function(rr) {
          if (null !== rr.getElementById(AS)) return;
          const Sr = rr.createElement("style");
          Sr.id = AS, Sr.textContent = iS, rr.head.appendChild(Sr)
        }(document);
        const Qr = new IQ(fr.current, Sr, pr.current),
          Zr = Qr.subscribe(zr);
        return Ur(Qr), null === (rr = mr.current) || void 0 === rr || rr.call(mr, Qr), xr.current && Qr.play(), Er.current.focus({
          preventScroll: !0
        }), () => {
          var rr;
          Zr(), Qr.destroy(), null === (rr = mr.current) || void 0 === rr || rr.call(mr, null)
        }
      }), [Sr]);
      const Br = null !== Nr && Nr.input.inputRecorded,
        Tr = null === Nr || null === tr ? void 0 : Nr.chapters.findLast((rr => Nr.timeline.toPosition(rr.startMs) <= tr.positionMs));
      return (0, hr.jsxs)("div", {
        ref: Er,
        className: void 0 === Qr ? "brv-player" : `brv-player ${Qr}`,
        tabIndex: 0,
        onKeyDown: rr => {
          if (rr.target instanceof HTMLSelectElement) return;
          if (" " === rr.key && rr.target !== rr.currentTarget && rr.target instanceof HTMLButtonElement) return;
          const Sr = function(rr) {
            let {
              key: Sr,
              shiftKey: Qr,
              ctrlKey: Zr,
              metaKey: Wr,
              altKey: ar
            } = rr;
            if (Zr || Wr || ar) return null;
            const jr = Number(Sr) - 1;
            if (/^[1-9]$/.test(Sr) && jr < qr.length) return {
              type: "setSpeed",
              speed: qr[jr]
            };
            switch (Sr.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: Qr ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: Qr ? 1e3 : 5e3
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
                  type: "chapter", direction: Qr ? -1 : 1
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
          }(rr);
          null !== Sr && null !== Nr && null !== tr && (rr.preventDefault(), function(rr, Sr, Qr, Zr) {
            switch (Sr.type) {
              case "togglePlay":
                rr.togglePlay();
                break;
              case "seekBy":
                rr.seekBy(Sr.deltaMs);
                break;
              case "stepFrame":
                rr.stepFrame(Sr.direction);
                break;
              case "setSpeed":
                rr.setSpeed(Sr.speed);
                break;
              case "chapter":
                rr.goToChapter(Sr.direction);
                break;
              case "toggleSkipInactive":
                rr.setSkipInactive(!Qr.skipInactive);
                break;
              case "toggleFullscreen":
                YQ(Zr.root);
                break;
              case "toggleKeys":
                Zr.toggleKeys()
            }
          }(Nr, Sr, tr, {
            root: rr.currentTarget,
            toggleKeys: Kr
          }))
        },
        children: [(0, hr.jsxs)("div", {
          ref: fr,
          className: "brv-viewport",
          onClick: () => {
            null === Nr || void 0 === Nr || Nr.togglePlay()
          },
          children: [null !== tr && null !== tr.notice && (0, hr.jsx)("div", {
            className: "brv-overlay",
            children: jr[tr.notice]
          }), null !== Nr && nr && Br && (0, hr.jsx)(NQ, {
            controller: Nr,
            labels: jr
          })]
        }), null !== Nr && null !== tr && (0, hr.jsxs)(hr.Fragment, {
          children: [(0, hr.jsx)(yr, {
            controller: Nr,
            frames: Nr.frames,
            input: Nr.input,
            markers: Nr.markers,
            inactiveRanges: Nr.inactiveRanges,
            videoGaps: Nr.videoGaps,
            labels: jr
          }), Nr.chapters.length > 1 && (0, hr.jsx)("div", {
            className: "brv-chapters",
            children: Nr.chapters.map((rr => (0, hr.jsxs)("button", {
              type: "button",
              className: rr === Tr ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                Nr.seekToPosition(Nr.timeline.toPosition(rr.startMs))
              },
              children: [rr.label, " \xb7 ", Yr(rr.endMs - rr.startMs)]
            }, rr.startMs)))
          }), (0, hr.jsxs)("div", {
            className: "brv-controls",
            children: [(0, hr.jsx)(zQ, {
              label: tr.playing ? jr.pause : jr.play,
              onClick: () => {
                Nr.togglePlay()
              },
              children: (0, hr.jsx)(tQ, {
                path: tr.playing ? hQ.pause : hQ.play
              })
            }), (0, hr.jsxs)("span", {
              className: "brv-time",
              children: [Yr(tr.positionMs), " / ", Yr(tr.durationMs)]
            }), (0, hr.jsx)("select", {
              className: "brv-speed",
              value: tr.speed,
              title: `${jr.speed} (1-${qr.length})`,
              "aria-label": jr.speed,
              onChange: rr => {
                Nr.setSpeed(Number(rr.target.value))
              },
              children: qr.map((rr => (0, hr.jsxs)("option", {
                value: rr,
                children: [rr, "x"]
              }, rr)))
            }), (0, hr.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": tr.skipInactive,
              title: `${jr.skipInactive} (S)`,
              onClick: () => {
                Nr.setSkipInactive(!tr.skipInactive)
              },
              children: [(0, hr.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), jr.skipInactive]
            }), Br && (0, hr.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": nr,
              title: `${jr.keys} (I)`,
              onClick: Kr,
              children: [(0, hr.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), jr.keys]
            }), document.fullscreenEnabled && (0, hr.jsx)(zQ, {
              label: jr.fullscreen,
              onClick: () => {
                YQ(Er.current)
              },
              children: (0, hr.jsx)(tQ, {
                path: hQ.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var eQ = Qr(6028);
    const KQ = ["bloxd.io", window.location.hostname];

    function yQ(rr) {
      let {
        gameAnalyticsId: Sr,
        recordingId: Qr,
        userContext: Wr,
        autoPlay: ar
      } = rr;
      const {
        t: jr
      } = (0, Tr.E)(), [Ir, fr] = (0, Zr.useState)({
        status: "loading"
      }), [Er, pr] = (0, Zr.useState)(0), xr = (0, Zr.useMemo)((() => function(rr) {
        return {
          play: rr("studio:replayPlay"),
          pause: rr("studio:replayPause"),
          speed: rr("studio:replaySpeed"),
          skipInactive: rr("studio:replaySkipIdle"),
          fullscreen: rr("studio:replayFullscreen"),
          tabHidden: rr("studio:replayTabHidden"),
          videoFailed: rr("studio:replayVideoFailed"),
          nothingToShow: rr("studio:replayNothingToShow"),
          videoGap: rr("studio:replayVideoGap"),
          error: rr("general:error"),
          graphicsCrash: rr("studio:replayMarkerGraphicsCrash"),
          death: rr("studio:replayMarkerDeath"),
          fps: Sr => rr("studio:replayFps", {
            fps: Sr
          }),
          keys: rr("studio:replayKeys"),
          unboundKey: Sr => rr("studio:replayUnboundKey", {
            key: Sr
          }),
          unboundKeys: Sr => rr("studio:replayUnboundKeys", {
            keys: Sr
          })
        }
      }(jr)), [jr]), mr = (0, Zr.useMemo)((() => ({
        resourceHosts: KQ,
        loadTelemetryChunk: Xr.y,
        refreshUrls: async () => (0, Xr.r)(await eQ.c.getReplay(Wr, Sr, Qr)),
        segmentUrls: {
          load: async rr => (await eQ.c.getReplaySegmentUrls(Wr, Sr, Qr, rr, [])).videoSegments,
          maxSequences: Hr.e
        },
        telemetryUrls: {
          load: async rr => (await eQ.c.getReplaySegmentUrls(Wr, Sr, Qr, [], rr)).telemetrySegments,
          maxSequences: Hr.j
        }
      })), [Sr, Qr]);
      return (0, Zr.useEffect)((() => {
        let rr = !1;
        return fr({
          status: "loading"
        }), (0, Xr.B)({
          getReplay: () => eQ.c.getReplay(Wr, Sr, Qr),
          loadDomEvents: Xr.x,
          onPreparing: () => {
            fr({
              status: "preparing"
            })
          },
          wait: rr => new Promise((Sr => {
            setTimeout(Sr, rr)
          })),
          isCancelled: () => rr
        }).then((Sr => {
          if (!rr && null !== Sr) {
            const rr = (0, Xr.v)(Sr.replay, Sr.domEvents, (rr => jr("studio:replayVisit", {
              number: rr
            })));
            fr({
              status: "loaded",
              value: rr
            })
          }
        })).catch((Sr => {
          console.error("Failed to load studio replay", Sr), rr || fr({
            status: "error",
            message: (0, Xr.m)(Sr, jr("studio:replayLoadFailed"))
          })
        })), () => {
          rr = !0
        }
      }), [Sr, Qr, Er]), "loading" === Ir.status ? (0, hr.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, hr.jsx)(Or.c, {})
      }) : "preparing" === Ir.status ? (0, hr.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, hr.jsx)(Or.c, {}), jr("studio:replayPreparing")]
      }) : "error" === Ir.status ? (0, hr.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [Ir.message, (0, hr.jsx)(Lr.U, {
          onClick: () => {
            pr((rr => rr + 1))
          },
          children: jr("general:tryAgain")
        })]
      }) : (0, hr.jsx)(nQ, {
        className: "StudioReplayPlayer",
        data: Ir.value,
        labels: xr,
        options: mr,
        autoPlay: ar || Er > 0
      })
    }

    function BQ(rr) {
      let {
        onPlay: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Tr.E)();
      return (0, hr.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": Qr("general:play"),
        onClick: Sr,
        children: (0, hr.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, hr.jsx)(lr.c, {
            name: "play"
          })
        })
      })
    }
    const TQ = Xr.M.replay,
      vQ = Xr.M.filters,
      OQ = Xr.M.endedAt,
      LQ = {
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
      lQ = {
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

    function XQ(rr) {
      let {
        item: Sr,
        selected: Qr,
        onSelect: Zr
      } = rr;
      const {
        t: Wr
      } = (0, Tr.E)(), jr = (0, Xr.o)(Sr);
      return (0, hr.jsxs)("button", {
        type: "button",
        className: ar()("StudioReplayListItem", {
          StudioReplayListItemSelected: Qr
        }),
        onClick: Zr,
        children: [(0, hr.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, hr.jsx)("span", {
            children: (0, Xr.i)(Sr.startedAtMs)
          }), (0, hr.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: Yr(Sr.inGameDurationMs)
          })]
        }), jr.length > 0 && (0, hr.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: jr.map((rr => (0, hr.jsx)("span", {
            className: ar()("StudioReplayTag", `StudioReplayTag-${rr}`),
            children: Wr(lQ[rr])
          }, rr)))
        })]
      })
    }

    function PQ(rr) {
      let {
        gameAnalyticsId: Sr,
        userContext: Qr,
        availability: Zr
      } = rr;
      const {
        t: Wr
      } = (0, Tr.E)();
      return "on" === Zr ? (0, hr.jsx)(HQ, {
        gameAnalyticsId: Sr,
        userContext: Qr
      }) : "failed" === Zr ? (0, hr.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, hr.jsx)(lr.c, {
          name: "face-dizzy"
        }), Wr("studio:replaysStartFailed"), (0, hr.jsx)(Lr.U, {
          onClick: () => {
            Br.e.startNow()
          },
          children: Wr("general:tryAgain")
        })]
      }) : (0, hr.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, hr.jsx)(Or.c, {})
      })
    }

    function HQ(rr) {
      var Sr, Qr;
      let {
        gameAnalyticsId: Wr,
        userContext: jr
      } = rr;
      const {
        t: Ir
      } = (0, Tr.E)(), fr = function(rr, Sr) {
        const {
          t: Qr
        } = (0, Tr.E)(), [Wr, ar] = (0, Zr.useState)({
          status: "loading"
        });
        return (0, Zr.useEffect)((() => {
          let Zr = !1;
          return ar({
            status: "loading"
          }), eQ.c.listReplays(Sr, rr).then((rr => {
            Zr || ar({
              status: "loaded",
              value: rr
            })
          })).catch((rr => {
            console.error("Failed to list studio replays", rr), Zr || ar({
              status: "error",
              message: (0, Xr.m)(rr, Qr("studio:replaysLoadFailed"))
            })
          })), () => {
            Zr = !0
          }
        }), [rr]), Wr
      }(Wr, jr), [Er, pr] = (0, vr.m)(), xr = (0, Xr.I)(Er.get(vQ)), mr = (0, Xr.F)(Er.get(OQ)), Nr = Er.get(TQ), Ur = "loaded" === fr.status ? (0, Xr.d)(fr.value.recordings, xr, mr) : [], tr = "loaded" === fr.status ? (0, Xr.O)(fr.value.recordings, Ur, Nr) : [], zr = null !== (Sr = null !== Nr && void 0 !== Nr ? Nr : null === (Qr = tr[0]) || void 0 === Qr ? void 0 : Qr.recordingId) && void 0 !== Sr ? Sr : null, [Yr, nr] = (0, Zr.useState)(Nr), [er, Kr] = (0, Zr.useState)(!1), yr = (0, Zr.useRef)(null), Br = (0, Zr.useRef)(null !== Nr), Hr = (0, Zr.useRef)(null);

      function qr(rr) {
        rr === Yr && rr === zr || (Hr.current = null, Br.current = !0, Kr(!0), nr(rr), pr((Sr => {
          (0, vr.g)(Sr, TQ, rr)
        }), {
          push: !0
        }))
      }

      function Rr(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        zr !== Yr && (Hr.current = zr), pr((Qr => {
          (0, vr.g)(Qr, TQ, zr), (0, vr.g)(Qr, vQ, (0, Xr.h)(rr)), Sr && (0, vr.g)(Qr, OQ, null)
        }))
      }
      if ((0, Zr.useEffect)((() => {
          null !== Nr && Nr !== Hr.current && nr(Nr)
        }), [Nr]), (0, Zr.useEffect)((() => {
          Br.current && null !== yr.current && (Br.current = !1, yr.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [Yr, fr.status]), "loading" === fr.status) return (0, hr.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, hr.jsx)(Or.c, {})
      });
      if ("error" === fr.status) return (0, hr.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, hr.jsx)(lr.c, {
          name: "face-dizzy"
        }), fr.message]
      });
      const {
        recordings: gr,
        dailyQuota: Cr
      } = fr.value;
      if (0 === gr.length) return (0, hr.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, hr.jsx)(lr.c, {
          name: "video"
        }), Ir(0 === Cr ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const Mr = Xr.J.filter((rr => gr.some((Sr => (0, Xr.D)(Sr, rr))))),
        Gr = zr !== Yr;
      return (0, hr.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, hr.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== mr && (0, hr.jsxs)(Lr.U, {
            active: !0,
            onClick: () => {
              Rr(xr, !0)
            },
            children: [Ir("studio:replaysFilterEndedAt", {
              minutes: (0, Pr.y)(mr.minute, mr.orLonger ? mr.minute : 1 / 0)
            }), (0, hr.jsx)(lr.c, {
              name: "xmark"
            })]
          }), Mr.map((rr => (0, hr.jsx)(Lr.U, {
            active: xr.includes(rr),
            onClick: () => {
              ! function(rr) {
                Rr(xr.includes(rr) ? xr.filter((Sr => Sr !== rr)) : [...xr, rr])
              }(rr)
            },
            children: Ir(LQ[rr])
          }, rr))), Cr > 0 && (0, hr.jsx)("span", {
            className: "StudioReplaysQuota",
            children: Ir("studio:replaysQuota", {
              count: Cr
            })
          })]
        }), (0, hr.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, hr.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === Ur.length && (0, hr.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [Ir("studio:replaysNoMatch"), (0, hr.jsx)(Lr.U, {
                onClick: () => {
                  Rr([], !0)
                },
                children: Ir("studio:replaysClearFilters")
              })]
            }), tr.map((rr => (0, hr.jsx)(XQ, {
              item: rr,
              selected: rr.recordingId === zr,
              onSelect: () => {
                qr(rr.recordingId)
              }
            }, rr.recordingId)))]
          }), null !== zr && (0, hr.jsxs)("div", {
            ref: yr,
            className: ar()("StudioReplayViewer", {
              StudioReplayViewerWaiting: Gr
            }),
            children: [!Gr && (0, hr.jsx)(yQ, {
              gameAnalyticsId: Wr,
              recordingId: zr,
              userContext: jr,
              autoPlay: er
            }, zr), Gr && (0, hr.jsx)(BQ, {
              onPlay: () => {
                qr(zr)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);