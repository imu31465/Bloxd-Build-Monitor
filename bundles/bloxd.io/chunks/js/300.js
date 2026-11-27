export const id = 300;
export const ids = [300];
export const modules = {
  42020: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => OG
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR);
    const ZR = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      qR = 3e3;

    function iR(RR) {
      return RR.down && RR.inPlay && !RR.bound
    }

    function fR(RR, JR) {
      let GR = 0,
        yR = RR.length;
      for (; GR < yR;) {
        const tR = GR + yR >> 1;
        RR[tR].atMs <= JR ? GR = tR + 1 : yR = tR
      }
      return GR - 1
    }

    function VR(RR) {
      let {
        code: JR,
        unbound: GR
      } = RR;
      return `${JR}:${GR}`
    }

    function KR(RR, JR) {
      return JR[1] - RR[1] || (RR[0] < JR[0] ? -1 : 1)
    }
    const wR = {
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

    function rR(RR) {
      var JR;
      const GR = wR[RR];
      if (void 0 !== GR) return GR;
      const yR = null !== (JR = /^(?:Key|Digit)(.)$/.exec(RR)) && void 0 !== JR ? JR : /^Numpad(.+)$/.exec(RR);
      return null !== yR ? RR.startsWith("Numpad") ? `Num ${yR[1]}` : yR[1] : RR
    }
    const eR = 250,
      aR = 60;
    var LR = GR(1378);
    const nR = 6;

    function UR(RR) {
      const JR = Math.max(0, Math.floor(RR / 1e3)),
        GR = Math.floor(JR / 3600),
        yR = Math.floor(JR % 3600 / 60),
        tR = String(JR % 60).padStart(2, "0");
      return GR > 0 ? `${GR}:${String(yR).padStart(2,"0")}:${tR}` : `${yR}:${tR}`
    }

    function WR(RR, JR) {
      return getComputedStyle(RR).getPropertyValue(JR).trim()
    }

    function AR(RR, JR) {
      switch (RR.kind) {
        case "note":
          return RR.label;
        case "hidden":
          return JR.tabHidden;
        default:
          return JR[RR.kind]
      }
    }

    function CR(RR) {
      let {
        draw: JR,
        className: GR
      } = RR;
      const tR = (0, yR.useRef)(null);
      return (0, yR.useEffect)((() => {
        const RR = tR.current,
          GR = RR.getContext("2d");
        if (null === JR || null === GR) return;
        const {
          clientWidth: yR,
          clientHeight: uR
        } = RR, ZR = window.devicePixelRatio;
        RR.width = Math.round(yR * ZR), RR.height = Math.round(uR * ZR), GR.setTransform(ZR, 0, 0, ZR, 0, 0), JR(GR, yR, uR, RR)
      }), [JR]), (0, LR.jsx)("canvas", {
        ref: tR,
        className: GR
      })
    }

    function XR(RR) {
      let {
        controller: JR,
        frames: GR,
        input: tR,
        markers: uR,
        inactiveRanges: ZR,
        videoGaps: fR,
        labels: VR
      } = RR;
      const {
        timeline: wR
      } = JR, XR = (0, yR.useRef)(null), [MR, BR] = (0, yR.useState)(0), [lR, pR] = (0, yR.useState)(null), gR = (0, yR.useRef)(null), bR = Math.max(1, wR.durationMs);
      ! function(RR, JR, GR) {
        (0, yR.useEffect)((() => {
          let yR = 0,
            tR = NaN;
          const uR = () => {
            var ZR;
            yR = requestAnimationFrame(uR);
            const qR = (null !== (ZR = JR.current) && void 0 !== ZR ? ZR : RR.getPositionMs()) / Math.max(1, RR.timeline.durationMs) * 100;
            qR !== tR && (tR = qR, GR.current.style.setProperty("--brv-position", `${qR}%`))
          };
          return uR(), () => {
            cancelAnimationFrame(yR)
          }
        }), [RR])
      }(JR, gR, XR), (0, yR.useEffect)((() => {
        const RR = XR.current,
          JR = new ResizeObserver((() => {
            BR(RR.clientWidth)
          }));
        return JR.observe(RR), () => {
          JR.disconnect()
        }
      }), []);
      const vR = (0, yR.useMemo)((() => 0 === MR ? null : function(RR, JR, GR) {
          const yR = Math.max(1, Math.min(GR, Math.floor(JR.durationMs / eR))),
            tR = JR.durationMs / yR,
            uR = new Array(yR).fill(0);
          for (const ZR of RR) JR.contains(ZR.atMs) && uR[Math.min(yR - 1, Math.floor(JR.toPosition(ZR.atMs) / tR))]++;
          return {
            bucketMs: tR,
            fps: uR.map((RR => 0 === RR ? null : 1e3 * RR / tR))
          }
        }(GR, wR, Math.round(MR))), [GR, wR, MR]),
        OR = JR.lowFps,
        xR = (0, yR.useMemo)((() => null === vR ? null : (RR, JR, GR, yR) => {
          ! function(RR, JR, GR, yR, tR, uR) {
            RR.clearRect(0, 0, GR, yR);
            const ZR = GR / JR.fps.length;
            JR.fps.forEach(((JR, GR) => {
              if (null === JR) return;
              const qR = Math.max(1, Math.min(JR, aR) / aR * yR);
              RR.fillStyle = JR < tR ? uR.lowFps : uR.fps, RR.fillRect(GR * ZR, yR - qR, Math.max(1, ZR), qR)
            }))
          }(RR, vR, JR, GR, OR, {
            fps: WR(yR, "--brv-fps"),
            lowFps: WR(yR, "--brv-low-fps")
          })
        }), [vR, OR]),
        NR = (0, yR.useMemo)((() => {
          if (0 === MR || !tR.inputRecorded) return null;
          const RR = function(RR, JR, GR) {
            const yR = Math.max(1, JR.durationMs) / GR,
              tR = new Array(GR).fill(0),
              uR = new Array(GR).fill(0);
            for (const ZR of RR) {
              if (!ZR.down || !JR.contains(ZR.atMs)) continue;
              const RR = Math.min(GR - 1, Math.floor(JR.toPosition(ZR.atMs) / yR));
              tR[RR]++, iR(ZR) && uR[RR]++
            }
            return {
              presses: tR,
              unbound: uR
            }
          }(tR.keys, wR, Math.max(1, Math.round(MR)));
          return (JR, GR, yR, tR) => {
            ! function(RR, JR, GR, yR, tR) {
              RR.clearRect(0, 0, GR, yR);
              const uR = GR / JR.presses.length;
              JR.presses.forEach(((GR, ZR) => {
                if (0 === GR) return;
                const qR = JR.unbound[ZR] > 0;
                RR.globalAlpha = qR ? 1 : Math.min(1, .35 + .15 * GR), RR.fillStyle = qR ? tR.unbound : tR.presses, RR.fillRect(ZR * uR, 0, Math.max(qR ? 2 : 1, uR), yR)
              })), RR.globalAlpha = 1
            }(JR, RR, GR, yR, {
              presses: WR(tR, "--brv-key-press"),
              unbound: WR(tR, "--brv-key-unbound")
            })
          }
        }), [tR, wR, MR]),
        DR = (0, yR.useMemo)((() => function(RR) {
          const JR = [];
          for (const yR of RR) {
            var GR;
            if (!iR(yR)) continue;
            let RR = JR.at(-1);
            (void 0 === RR || yR.atMs - RR.endMs > qR) && (RR = {
              startMs: yR.atMs,
              endMs: yR.atMs,
              counts: new Map
            }, JR.push(RR)), RR.endMs = yR.atMs, RR.counts.set(yR.code, (null !== (GR = RR.counts.get(yR.code)) && void 0 !== GR ? GR : 0) + 1)
          }
          return JR.map((RR => {
            let {
              startMs: JR,
              endMs: GR,
              counts: yR
            } = RR;
            return {
              startMs: JR,
              endMs: GR,
              keys: [...yR].sort(KR)
            }
          }))
        }(tR.keys.filter((RR => wR.contains(RR.atMs))))), [tR.keys, wR]),
        HR = RR => wR.toPosition(RR) / bR * 100,
        oR = RR => HR(RR) / 100 * MR,
        cR = RR => {
          const JR = XR.current.getBoundingClientRect();
          return {
            px: RR - JR.left,
            positionMs: Math.max(0, Math.min(JR.width, RR - JR.left)) / JR.width * bR
          }
        },
        PR = null === lR || 0 === MR ? null : {
          px: lR,
          positionMs: Math.max(0, Math.min(MR, lR)) / MR * bR
        },
        IR = null === PR || null === vR ? null : function(RR, JR) {
          const GR = Math.max(0, Math.min(RR.fps.length - 1, Math.floor(JR / RR.bucketMs))),
            yR = RR.fps[GR];
          return null === yR ? null : Math.round(yR)
        }(vR, PR.positionMs),
        mR = null !== PR && fR.some((RR => PR.px >= oR(RR.startMs) && PR.px < oR(RR.endMs))),
        zR = null === PR ? void 0 : uR.find((RR => {
          var JR;
          return PR.px >= oR(RR.atMs) - nR && PR.px <= oR(null !== (JR = RR.endMs) && void 0 !== JR ? JR : RR.atMs) + nR
        })),
        SR = null === PR ? void 0 : DR.find((RR => PR.px >= oR(RR.startMs) - nR && PR.px <= oR(RR.endMs) + nR));
      return (0, LR.jsxs)("div", {
        ref: XR,
        className: tR.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: RR => {
          RR.currentTarget.setPointerCapture(RR.pointerId);
          const JR = cR(RR.clientX);
          pR(JR.px), gR.current = JR.positionMs
        },
        onPointerMove: RR => {
          const JR = cR(RR.clientX);
          pR(JR.px), null !== gR.current && (gR.current = JR.positionMs)
        },
        onPointerUp: RR => {
          null !== gR.current && (JR.seekToPosition(cR(RR.clientX).positionMs), gR.current = null)
        },
        onPointerCancel: () => {
          gR.current = null, pR(null)
        },
        onPointerLeave: () => {
          pR(null)
        },
        children: [(0, LR.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, LR.jsx)(CR, {
            draw: xR,
            className: "brv-seekbar-canvas"
          }), ZR.map((RR => {
            const JR = HR(RR.startMs);
            return (0, LR.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${JR}%`,
                width: HR(RR.endMs) - JR + "%"
              }
            }, RR.startMs)
          })), fR.map((RR => {
            const JR = HR(RR.startMs);
            return (0, LR.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${JR}%`,
                width: HR(RR.endMs) - JR + "%"
              }
            }, RR.startMs)
          })), (0, LR.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== PR && (0, LR.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: PR.px
            }
          })]
        }), tR.inputRecorded && (0, LR.jsx)(CR, {
          draw: NR,
          className: "brv-seekbar-input"
        }), (0, LR.jsx)("div", {
          className: "brv-seekbar-markers",
          children: uR.map(((RR, JR) => {
            var GR;
            const yR = HR(RR.atMs),
              tR = void 0 !== RR.endMs;
            return (0, LR.jsx)("div", {
              className: `brv-marker brv-marker-${RR.kind}${tR?" brv-marker-range":""}`,
              style: {
                left: `${yR}%`,
                width: tR ? HR(null !== (GR = RR.endMs) && void 0 !== GR ? GR : RR.atMs) - yR + "%" : void 0
              }
            }, JR)
          }))
        }), (0, LR.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== PR && (0, LR.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: PR.px
          },
          children: [UR(PR.positionMs), null !== IR && ` \xb7 ${VR.fps(IR)}`, void 0 !== zR && ` \xb7 ${AR(zR,VR)}`, mR && ` \xb7 ${VR.videoGap}`, void 0 !== SR && ` \xb7 ${VR.unboundKeys((jR=SR.keys,jR.map((RR=>{let[JR,GR]=RR;return GR>1?`${rR(JR)} \xd7${GR}`:rR(JR)})).join(", ")))}`]
        })]
      });
      var jR
    }
    var MR = GR(5482),
      BR = GR(1270),
      lR = GR(5368),
      pR = GR(1465),
      gR = GR(1590),
      bR = GR(1468),
      vR = GR(7627),
      OR = GR(6128),
      xR = GR(6123);
    const NR = [.5, 1, 2, 4, 8, 16];
    var DR = GR(42028);

    function HR(RR) {
      const JR = RR.filter((RR => RR.endMs > RR.startMs)).sort(((RR, JR) => RR.startMs - JR.startMs)),
        GR = [];
      for (const yR of JR) {
        const RR = GR.at(-1);
        void 0 !== RR && yR.startMs <= RR.endMs ? RR.endMs = Math.max(RR.endMs, yR.endMs) : GR.push({
          ...yR
        })
      }
      return GR
    }
    class oR {
      constructor(RR) {
        this.WL = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.WL = HR(RR), this.positionStarts = [];
        let JR = 0;
        for (const GR of this.WL) this.positionStarts.push(JR), JR += GR.endMs - GR.startMs;
        this.durationMs = JR
      }
      get startMs() {
        var RR, JR;
        return null !== (RR = null === (JR = this.WL[0]) || void 0 === JR ? void 0 : JR.startMs) && void 0 !== RR ? RR : 0
      }
      get endMs() {
        var RR, JR;
        return null !== (RR = null === (JR = this.WL.at(-1)) || void 0 === JR ? void 0 : JR.endMs) && void 0 !== RR ? RR : 0
      }
      toPosition(RR) {
        for (let JR = 0; JR < this.WL.length; JR++) {
          const GR = this.WL[JR];
          if (RR < GR.endMs) return this.positionStarts[JR] + Math.max(0, RR - GR.startMs)
        }
        return this.durationMs
      }
      toTime(RR) {
        const JR = Math.max(0, Math.min(this.durationMs, RR));
        for (let GR = this.WL.length - 1; GR >= 0; GR--)
          if (JR >= this.positionStarts[GR]) return this.WL[GR].startMs + (JR - this.positionStarts[GR]);
        return this.startMs
      }
      contains(RR) {
        return this.WL.some((JR => RR >= JR.startMs && RR < JR.endMs))
      }
      nextPlayableTime(RR) {
        for (const JR of this.WL) {
          if (RR < JR.startMs) return JR.startMs;
          if (RR < JR.endMs) return RR
        }
        return null
      }
    }

    function cR(RR) {
      return [...RR].sort(((RR, JR) => RR.startMs - JR.startMs))
    }

    function PR(RR, JR) {
      let GR = 1 / 0,
        yR = -1 / 0;
      const tR = RR => {
        GR = Math.min(GR, RR), yR = Math.max(yR, RR)
      };
      for (const uR of [...RR.videoSegments, ...RR.telemetryChunks]) tR(uR.startMs), tR(uR.endMs);
      for (const uR of RR.domEvents) tR(JR.toEpoch(uR.timestamp));
      return GR < yR ? {
        startMs: GR,
        endMs: yR
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class IR {
      constructor(RR, JR) {
        this.wallNowMs = JR, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = RR, this.anchorWallMs = JR()
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
      timeAtWall(RR) {
        return this.playingState ? this.anchorTimeMs + (RR - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(RR) {
        this.anchorTimeMs = RR, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(RR) {
        this.reanchor(), this.speedState = RR
      }
      reanchor() {
        const RR = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(RR), this.anchorWallMs = RR
      }
    }
    const mR = "bloxd-clock";
    class zR {
      constructor(RR) {
        this.samples = void 0, this.samples = [];
        for (const GR of RR) {
          var JR;
          const RR = GR.data;
          GR.type === DR.c.Custom && (null === RR || void 0 === RR ? void 0 : RR.tag) === mR && "number" === typeof(null === (JR = RR.payload) || void 0 === JR ? void 0 : JR.epochMs) && this.samples.push({
            domMs: GR.timestamp,
            offsetMs: RR.payload.epochMs - GR.timestamp
          })
        }
        this.samples.sort(((RR, JR) => RR.domMs - JR.domMs))
      }
      toEpoch(RR) {
        return RR + this.offsetAtDom(RR)
      }
      toDom(RR) {
        return RR - this.offsetAtDom(RR)
      }
      offsetAtDom(RR) {
        var JR, GR;
        let yR = 0,
          tR = this.samples.length - 1;
        for (; yR < tR;) {
          const JR = Math.ceil((yR + tR) / 2);
          this.samples[JR].domMs <= RR ? yR = JR : tR = JR - 1
        }
        return null !== (JR = null === (GR = this.samples[yR]) || void 0 === GR ? void 0 : GR.offsetMs) && void 0 !== JR ? JR : 0
      }
    }
    const SR = new Set([DR.g.MouseMove, DR.g.MouseInteraction, DR.g.Scroll, DR.g.Input, DR.g.TouchMove, DR.g.Drag]),
      jR = "bloxd-active",
      dR = "player_death",
      ER = "error",
      YR = {
        $exception: "error",
        [ER]: "error",
        death: "death",
        [dR]: "death"
      };

    function kR(RR, JR, GR) {
      return function(RR, JR) {
        const GR = [];
        for (const yR of RR) {
          let RR = yR.startMs;
          for (const tR of JR) tR.endMs <= RR || tR.startMs >= yR.endMs || (tR.startMs > RR && GR.push({
            startMs: RR,
            endMs: tR.startMs
          }), RR = Math.max(RR, tR.endMs));
          RR < yR.endMs && GR.push({
            startMs: RR,
            endMs: yR.endMs
          })
        }
        return GR
      }(function(RR) {
        const JR = [];
        for (const GR of RR) {
          const RR = JR.at(-1);
          void 0 !== RR && GR.atMs - RR.endMs <= 5e3 ? RR.endMs = GR.atMs : JR.push({
            startMs: GR.atMs,
            endMs: GR.atMs
          })
        }
        return JR
      }(RR), HR([...JR, ...GR])).filter((RR => RR.endMs - RR.startMs >= 1e3))
    }

    function QR(RR) {
      var JR, GR, yR;
      return RR.type === DR.c.IncrementalSnapshot ? SR.has(null !== (GR = null === (yR = RR.data) || void 0 === yR ? void 0 : yR.source) && void 0 !== GR ? GR : -1) : RR.type === DR.c.Custom && (null === (JR = RR.data) || void 0 === JR ? void 0 : JR.tag) === jR
    }

    function FR(RR, JR) {
      const GR = [];
      for (const ZR of RR)
        if (ZR.type === DR.c.Custom) {
          var yR;
          const RR = null === (yR = ZR.data) || void 0 === yR ? void 0 : yR.tag,
            tR = void 0 === RR ? void 0 : YR[RR];
          void 0 !== tR && GR.push({
            kind: tR,
            atMs: JR.toEpoch(ZR.timestamp)
          })
        } else if (ZR.type === DR.c.Plugin) {
        var tR, uR;
        const RR = ZR.data;
        "rrweb/console@1" !== (null === RR || void 0 === RR ? void 0 : RR.plugin) || "error" !== (null === (tR = RR.payload) || void 0 === tR ? void 0 : tR.level) && "assert" !== (null === (uR = RR.payload) || void 0 === uR ? void 0 : uR.level) || GR.push({
          kind: "error",
          atMs: JR.toEpoch(ZR.timestamp)
        })
      }
      return GR
    }
    const TR = 3e6;
    class sR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TR;
        this.fetchUrls = RR, this.onUrls = JR, this.wallNowMs = GR, this.refreshableAfterMs = yR, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = GR()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const RR = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        RR > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), RR) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(RR) {
        this.inFlight = !0;
        const JR = this.wallNowMs();
        this.lastRefreshWallMs = JR;
        let GR = !1;
        RR().then((RR => {
          this.destroyed || (this.urlsFetchedAtWallMs = JR, this.onUrls(RR))
        })).catch((RR => {
          console.error("Failed to refresh the replay's URLs.", RR), GR = !0
        })).finally((() => {
          this.inFlight = !1, GR && this.request()
        }))
      }
    }
    class hR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TR;
        this.source = RR, this.description = JR, this.wallNowMs = GR, this.refreshableAfterMs = yR, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(RR) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const JR = this.wallNowMs();
        for (const GR of RR) this.entries.set(GR.sequence, {
          urls: GR,
          fetchedAtWallMs: JR
        })
      }
      get(RR) {
        const JR = this.getFresh(RR);
        return null !== JR ? JR : null === this.source || this.unavailable.has(RR) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(RR) {
        return null === this.getFresh(RR) && !this.unavailable.has(RR)
      }
      request(RR) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const JR = RR.filter((RR => this.needs(RR)));
        JR.length > 0 && this.fetch(this.source, JR.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(RR) {
        const JR = this.entries.get(RR);
        return void 0 === JR ? null : null === this.source || this.wallNowMs() - JR.fetchedAtWallMs < this.refreshableAfterMs ? JR.urls : null
      }
      fetch(RR, JR) {
        this.inFlight = !0;
        const GR = this.wallNowMs();
        RR.load(JR).then((RR => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const yR = new Set;
          for (const JR of RR) this.entries.set(JR.sequence, {
            urls: JR,
            fetchedAtWallMs: GR
          }), yR.add(JR.sequence);
          for (const GR of JR) yR.has(GR) || (console.warn(`Replay sequence ${GR} has no ${this.description}.`), this.unavailable.add(GR))
        })).catch((RR => {
          console.error(`Failed to fetch the replay's ${this.description}.`, RR), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class RJ {
      constructor(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TR;
        this.load = JR, this.onLoaded = GR, this.onFailed = yR, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = JJ([]), this.hidden = [], this.destroyed = !1, this.chunks = [...RR].sort(((RR, JR) => RR.startMs - JR.startMs)).map((RR => ({
          chunk: RR,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new hR(tR, "telemetry URLs", uR, ZR), this.urls.reset(yJ(RR))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((RR => "loaded" === RR.status)).length
      }
      update(RR, JR, GR) {
        if (null === this.load || this.destroyed) return;
        const yR = JR.toPosition(RR),
          tR = JR.toTime(yR - 1e4),
          uR = JR.toTime(yR + 6e4 * Math.max(1, GR)),
          ZR = JR.toTime(yR + 12e4 * Math.max(1, GR)),
          qR = this.chunks.filter((RR => "idle" === RR.status && RR.chunk.endMs >= tR && RR.chunk.startMs <= ZR)).sort(((JR, GR) => tJ(RR, JR.chunk) - tJ(RR, GR.chunk)));
        this.urls.request(qR.flatMap((RR => {
          var JR;
          let {
            chunk: GR
          } = RR;
          return null !== (JR = GR.sequence) && void 0 !== JR ? JR : []
        })));
        for (const iR of qR) {
          if (this.loading >= 3) return;
          const RR = iR.chunk.startMs <= uR ? this.getUrl(iR.chunk) : null;
          null !== RR && this.startLoad(iR, RR, this.load)
        }
      }
      replaceUrls(RR) {
        this.urls.reset(yJ(RR));
        for (const JR of this.chunks) {
          const GR = RR.find((RR => RR.startMs === JR.chunk.startMs && RR.endMs === JR.chunk.endMs));
          void 0 !== GR && (JR.chunk = GR, "failed" === JR.status && (JR.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(RR) {
        var JR;
        if (void 0 === RR.sequence) return null !== (JR = RR.url) && void 0 !== JR ? JR : null;
        const GR = this.urls.get(RR.sequence);
        return "string" === typeof GR ? null : GR.url
      }
      startLoad(RR, JR, GR) {
        RR.status = "loading", RR.attempts++, this.loading++, GR(JR).then((JR => {
          this.destroyed || (RR.status = "loaded", RR.telemetry = JR, this.merge(), this.onLoaded())
        })).catch((JR => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${RR.chunk.startMs}-${RR.chunk.endMs}.`, JR), RR.status = RR.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const RR = [];
        let JR = !1;
        for (const yR of this.chunks) {
          const GR = RR.at(-1);
          if (null === yR.telemetry) {
            JR = !1;
            continue
          }
          const tR = GJ(yR.telemetry, yR.chunk);
          void 0 !== GR && JR && yR.chunk.startMs <= GR.endMs + 1e3 ? (GR.telemetry.push(tR), GR.endMs = yR.chunk.endMs) : (RR.push({
            telemetry: [tR],
            endMs: yR.chunk.endMs
          }), JR = !0)
        }
        const GR = RR.map((RR => function(RR, JR) {
          const GR = RR.actions.at(-1);
          if (void 0 === GR || 0 === GR.bits) return RR;
          return {
            ...RR,
            actions: [...RR.actions, {
              atMs: JR,
              bits: 0
            }]
          }
        }(JJ(RR.telemetry), RR.endMs)));
        this.merged = JJ(GR), this.hidden = GR.flatMap(((JR, GR) => function(RR, JR) {
          const GR = [];
          let yR = null;
          for (const {
              atMs: tR,
              event: uR
            }
            of RR.events) "hidden" === uR && null === yR ? yR = tR : "visible" === uR && null !== yR && (GR.push({
            startMs: yR,
            endMs: tR
          }), yR = null);
          return null !== yR && GR.push({
            startMs: yR,
            endMs: JR
          }), HR(GR)
        }(JR, RR[GR].endMs)))
      }
    }

    function JJ(RR) {
      return {
        inputRecorded: RR.some((RR => RR.keys.length > 0)),
        frames: RR.flatMap((RR => RR.frames)),
        states: RR.flatMap((RR => RR.states)),
        events: RR.flatMap((RR => RR.events)),
        actions: RR.flatMap((RR => RR.actions)),
        keys: RR.flatMap((RR => RR.keys))
      }
    }

    function GJ(RR, JR) {
      const {
        actions: GR
      } = RR;
      return !RR.inputRecorded || GR.length > 0 && GR[0].atMs <= JR.startMs + 1 ? RR : {
        ...RR,
        actions: [{
          atMs: JR.startMs,
          bits: 0
        }, ...GR]
      }
    }

    function yJ(RR) {
      return RR.flatMap((RR => {
        let {
          sequence: JR,
          url: GR
        } = RR;
        return void 0 === JR || void 0 === GR ? [] : [{
          sequence: JR,
          url: GR
        }]
      }))
    }

    function tJ(RR, JR) {
      return RR < JR.startMs ? JR.startMs - RR : RR > JR.endMs ? 2 * (RR - JR.endMs) : 0
    }
    class uJ {
      constructor(RR, JR, GR, yR) {
        this.data = RR, this.domClock = JR, this.timeline = GR, this.options = yR, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(RR, JR) {
          return RR.filter(QR).map((RR => JR.toEpoch(RR.timestamp)))
        }(RR.domEvents, JR), this.telemetry = new RJ(RR.telemetryChunks, yR.loadTelemetryChunk, (() => {
          this.rebuild()
        }), yR.onTelemetryFailed, yR.telemetryUrls), this.rebuild()
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
      update(RR, JR) {
        this.telemetry.update(RR, this.timeline, JR)
      }
      replaceTelemetryUrls(RR) {
        this.telemetry.replaceUrls(RR)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(RR) {
        return this.telemetry.hiddenRanges.some(ZJ(RR))
      }
      isVideoGapAt(RR) {
        return this.videoGapRanges.some(ZJ(RR))
      }
      rebuild() {
        const RR = this.telemetry.telemetry,
          JR = this.telemetry.hiddenRanges;
        this.videoGapRanges = kR(RR.frames, this.data.videoSegments, JR), this.inactiveRangeList = function(RR, JR, GR, yR) {
          const tR = [...JR];
          if (RR.length > 0) {
            const JR = [GR.startMs, ...RR, GR.endMs];
            for (let RR = 1; RR < JR.length; RR++) {
              const GR = JR[RR - 1],
                uR = JR[RR] - 1e3;
              uR - GR >= yR && tR.push({
                startMs: GR,
                endMs: uR
              })
            }
          }
          return HR(tR).filter((RR => RR.endMs - RR.startMs >= yR))
        }(this.activityTimes, JR, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(RR) {
          const {
            timeline: JR
          } = RR;
          return [...FR(RR.domEvents, RR.domClock), ...RR.telemetry.events.filter((RR => {
            let {
              event: JR
            } = RR;
            return "contextLost" === JR
          })).map((RR => {
            let {
              atMs: JR
            } = RR;
            return {
              kind: "graphicsCrash",
              atMs: JR
            }
          })), ...RR.hidden.map((RR => ({
            kind: "hidden",
            atMs: RR.startMs,
            endMs: RR.endMs
          }))), ...RR.extraMarkers].filter((RR => RR.atMs >= JR.startMs && RR.atMs <= JR.endMs && (JR.contains(RR.atMs) || JR.contains(RR.atMs - 1)))).sort(((RR, JR) => RR.atMs - JR.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: RR,
          extraMarkers: this.data.markers,
          hidden: JR,
          timeline: this.timeline
        })
      }
    }

    function ZJ(RR) {
      return JR => RR >= JR.startMs && RR < JR.endMs
    }
    class qJ {
      constructor() {
        this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
          handler: (RR, JR, GR) => {
            let {
              replayer: yR
            } = GR;
            this.record(RR), JR && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
              this.settleQueued = !1, this.settle(yR)
            })))
          }
        }
      }
      settle(RR) {
        const JR = RR.iframe.contentDocument;
        if (null === JR || void 0 === JR || !JR.documentElement.classList.contains("rrweb-paused")) return;
        const GR = RR.getMetaData().startTime + RR.getCurrentTime();
        ! function(RR, JR, GR, yR) {
          for (const tR of RR) {
            const RR = tR.effect,
              uR = GR.get(JR.getId(RR.target)),
              ZR = void 0 === uR ? 1 / 0 : yR - uR,
              qR = Math.min(Math.max(ZR, Number(tR.currentTime)), Number(RR.getComputedTiming().endTime));
            Number.isFinite(qR) && (tR.currentTime = qR)
          }
        }(JR.getAnimations(), RR.getMirror(), this.addedAt, GR)
      }
      record(RR) {
        if (RR.type === DR.c.FullSnapshot) this.addedAt.clear();
        else if (RR.type === DR.c.IncrementalSnapshot && RR.data.source === DR.g.Mutation) {
          for (const {
              id: JR
            }
            of RR.data.removes) this.addedAt.delete(JR);
          for (const {
              node: JR
            }
            of RR.data.adds) this.addedAt.set(JR.id, RR.timestamp)
        }
      }
    }
    const iJ = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      fJ = new Set(["srcset", "imagesrcset"]),
      VJ = new Set(["to", "from", "by", "values"]),
      KJ = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      wJ = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      rJ = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      eJ = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      aJ = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      LJ = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      nJ = /^data:image\/(?!svg)/i,
      UJ = "about:invalid";

    function WJ(RR, JR) {
      let {
        hosts: GR
      } = JR, yR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const tR = RR.trim();
      if (/[\\\u0000-\u001f]/.test(tR)) return !1;
      if (!LJ.test(tR)) return !0;
      let uR;
      try {
        uR = new URL(tR.startsWith("//") ? `https:${tR}` : tR)
      } catch {
        return !1
      }
      return "data:" === uR.protocol ? yR ? "text/css" !== tR.slice(5).split(/[,;]/)[0].trim().toLowerCase() : nJ.test(tR) : "blob:" === uR.protocol || ("http:" === uR.protocol || "https:" === uR.protocol) && GR.some((RR => uR.hostname === RR || uR.hostname.endsWith(`.${RR}`)))
    }

    function AJ(RR, JR) {
      return RR.replace(wJ, (function(RR) {
        for (var GR = arguments.length, yR = new Array(GR > 1 ? GR - 1 : 0), tR = 1; tR < GR; tR++) yR[tR - 1] = arguments[tR];
        if (WJ(yR.slice(0, 7).find((RR => "string" === typeof RR)), JR, !0)) return RR;
        const uR = RR.slice(0, 4).toLowerCase();
        return "url(" === uR ? `url("${UJ}")` : "@imp" === uR ? `@import "${UJ}"` : `"${UJ}"`
      }))
    }

    function CJ(RR) {
      return aJ.test(RR.replace(wJ, '""'))
    }

    function XJ(RR) {
      let JR = "between";
      for (let GR = 0; GR < RR.length; GR++) {
        const yR = RR[GR];
        if ("/" === yR && "*" === RR[GR + 1]) {
          if (GR = RR.indexOf("*/", GR + 2), -1 === GR) return "open";
          GR++, JR = "between"
        } else if ('"' === yR || "'" === yR) {
          for (GR++; GR < RR.length && RR[GR] !== yR && !/[\n\r\f]/.test(RR[GR]); GR++) "\\" === RR[GR] && GR++;
          if (GR >= RR.length) return "open";
          JR = "token"
        } else "\\" === yR ? (GR++, JR = "token") : ";" === yR || "{" === yR || "}" === yR ? JR = "between" : /\s/.test(yR) || (JR = "token")
      }
      return JR
    }

    function MJ(RR, JR) {
      const GR = AJ(RR, JR);
      if (CJ(GR) || "open" === XJ(GR)) return "";
      if (!GR.includes("\\")) return GR;
      const yR = function(RR) {
        return RR.replace(eJ, ((RR, JR, GR) => void 0 !== JR ? String.fromCodePoint(Math.min(parseInt(JR, 16), 1114111)) : null !== GR && void 0 !== GR ? GR : ""))
      }(GR);
      return AJ(yR, JR) !== yR || CJ(yR) ? "" : GR
    }

    function BJ(RR, JR) {
      const GR = rJ.test(RR) ? MJ(RR, JR) : RR;
      return GR.split("/* rr_split */").every((RR => "between" === XJ(RR))) ? GR : ""
    }

    function lJ(RR, JR, GR) {
      if ("string" === typeof JR) {
        const yR = RR.toLowerCase();
        if (KJ.has(yR)) return null;
        if (fJ.has(yR)) return function(RR, JR) {
          return RR.split(",").every((RR => {
            const GR = RR.trim().split(/\s+/)[0];
            return void 0 === GR || "" === GR || WJ(GR, JR)
          }))
        }(JR, GR) ? JR : null;
        if (VJ.has(yR)) {
          return JR.split(";").every((RR => WJ(RR, GR))) ? lJ("", JR, GR) : null
        }
        return iJ.has(yR) ? WJ(JR, GR) ? JR : null : "_csstext" === yR ? BJ(JR, GR) : rJ.test(JR) ? MJ(JR, GR) : JR
      }
      if (Array.isArray(JR)) return JR.map((RR => lJ("", RR, GR)));
      if (null !== JR && "object" === typeof JR) {
        const yR = "style" === RR.toLowerCase(),
          tR = {};
        for (const [RR, ZR] of Object.entries(JR)) tR[RR] = lJ(yR ? "" : RR, ZR, GR);
        const {
          id: uR
        } = tR;
        if ("number" === typeof uR && GR.styleTextIds.has(uR))
          for (const RR of ["textContent", "value"]) {
            const JR = tR[RR];
            "string" === typeof JR && (tR[RR] = BJ(JR, GR))
          }
        return tR
      }
      return JR
    }

    function pJ(RR, JR) {
      const GR = (RR, yR) => {
        if (null === RR || "object" !== typeof RR) return;
        const tR = RR;
        if (JR(tR, yR), Array.isArray(tR.childNodes))
          for (const JR of tR.childNodes) GR(JR, tR.id)
      };
      for (const yR of RR) {
        const RR = yR.data;
        if (yR.type === DR.c.FullSnapshot) GR(null === RR || void 0 === RR ? void 0 : RR.node, null);
        else if (yR.type === DR.c.IncrementalSnapshot && Array.isArray(null === RR || void 0 === RR ? void 0 : RR.adds))
          for (const JR of RR.adds) GR(null === JR || void 0 === JR ? void 0 : JR.node, null === JR || void 0 === JR ? void 0 : JR.parentId)
      }
    }

    function gJ(RR) {
      const JR = new Set,
        GR = [];
      pJ(RR, ((RR, yR) => {
        let {
          id: tR,
          tagName: uR
        } = RR;
        "number" === typeof tR && ("string" === typeof uR && "style" === uR.toLowerCase() && JR.add(tR), GR.push({
          id: tR,
          parentId: yR
        }))
      }));
      const yR = new Set;
      for (const {
          id: tR,
          parentId: uR
        }
        of GR) "number" === typeof uR && JR.has(uR) && yR.add(tR);
      return yR
    }
    const bJ = {
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
      vJ = {
        pointer: ["none", "coarse", "fine"],
        "any-pointer": ["none", "coarse", "fine"],
        hover: ["none", "hover"],
        "any-hover": ["none", "hover"]
      },
      OJ = "(min-width: 0px)",
      xJ = "(not (min-width: 0px))",
      NJ = /@media\b[^{;]*/gi,
      DJ = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
      HJ = new Set(["_cssText", "rule", "replace", "replaceSync"]);

    function oJ(RR, JR) {
      return RR.replace(NJ, (RR => RR.replace(DJ, ((RR, GR, yR) => {
        const tR = GR.toLowerCase(),
          uR = bJ[JR][tR];
        if (void 0 === yR) return "none" === uR ? xJ : OJ;
        const ZR = yR.toLowerCase();
        return vJ[tR].includes(ZR) ? ZR === uR ? OJ : xJ : RR
      }))))
    }

    function cJ(RR) {
      const JR = RR.attributes,
        GR = null === JR || void 0 === JR ? void 0 : JR.rel,
        yR = null === JR || void 0 === JR ? void 0 : JR.href;
      return "link" === RR.tagName && "string" === typeof GR && GR.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof yR ? yR : null
    }

    function PJ(RR) {
      const JR = new Map;
      pJ(RR, (RR => {
        const GR = cJ(RR);
        null !== GR && JR.set(RR.id, GR)
      }));
      const GR = new Map;
      for (const tR of RR) {
        const RR = tR.data;
        if (tR.type === DR.c.IncrementalSnapshot && (null === RR || void 0 === RR ? void 0 : RR.source) === DR.g.Mutation)
          for (const tR of null !== (yR = RR.attributes) && void 0 !== yR ? yR : []) {
            var yR;
            const RR = tR.attributes._cssText,
              uR = JR.get(tR.id);
            "string" !== typeof RR || void 0 === uR || GR.has(uR) || GR.set(uR, RR)
          }
      }
      return GR
    }

    function IJ(RR, JR, GR) {
      var yR;
      if ("string" === typeof RR) return null !== GR.pointer && HJ.has(JR) ? oJ(RR, GR.pointer) : RR;
      if (Array.isArray(RR)) {
        let JR = !1;
        const yR = RR.map((RR => {
          const yR = IJ(RR, "", GR);
          return JR ||= yR !== RR, yR
        }));
        return JR ? yR : RR
      }
      if (null === RR || "object" !== typeof RR) return RR;
      const tR = function(RR, JR) {
        const GR = RR.attributes,
          yR = cJ(RR),
          tR = null !== yR && void 0 === (null === GR || void 0 === GR ? void 0 : GR._cssText) ? JR.sheets.get(yR) : void 0;
        return void 0 === tR ? RR : {
          ...RR,
          attributes: {
            ...GR,
            _cssText: tR
          }
        }
      }(RR, GR);
      let uR = null;
      for (const [qR, iR] of Object.entries(tR)) {
        const RR = IJ(iR, qR, GR);
        RR !== iR && (uR ??= {
          ...tR
        }, uR[qR] = RR)
      }
      const {
        id: ZR
      } = tR;
      if (null !== GR.pointer && "number" === typeof ZR && GR.styleTextIds.has(ZR))
        for (const qR of ["textContent", "value"]) {
          const RR = tR[qR],
            JR = "string" === typeof RR ? oJ(RR, GR.pointer) : RR;
          JR !== RR && (uR ??= {
            ...tR
          }, uR[qR] = JR)
        }
      return null !== (yR = uR) && void 0 !== yR ? yR : tR
    }
    const mJ = "brv-styles",
      zJ = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      SJ = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${zJ.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class jJ {
      static create(RR, JR, GR, yR, tR, uR, ZR, qR) {
        if (!JR.some((RR => RR.type === DR.c.FullSnapshot))) return null;
        const iR = function(RR, JR) {
          const GR = {
            sheets: PJ(RR),
            styleTextIds: gJ(RR),
            pointer: JR
          };
          return RR.map((RR => {
            if (RR.type !== DR.c.FullSnapshot && RR.type !== DR.c.IncrementalSnapshot) return RR;
            const JR = IJ(RR.data, "data", GR);
            return JR === RR.data ? RR : {
              ...RR,
              data: JR
            }
          }))
        }(function(RR, JR) {
          const GR = {
            hosts: JR,
            styleTextIds: gJ(RR)
          };
          return RR.map((RR => RR.type === DR.c.Meta ? RR : {
            ...RR,
            data: lJ("data", RR.data, GR)
          }))
        }(JR, uR), GR);
        return new jJ(RR, iR, yR, tR, ZR, qR)
      }
      constructor(RR, JR, GR, yR, tR, uR) {
        var ZR, qR, iR, fR;
        this.domClock = GR, this.canvasSelectors = yR, this.videoLayer = tR, this.replayer = void 0, this.pausedAnimations = new qJ, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (ZR = null === (qR = JR[0]) || void 0 === qR ? void 0 : qR.timestamp) && void 0 !== ZR ? ZR : 0, this.lastDomMs = null !== (iR = null === (fR = JR.at(-1)) || void 0 === fR ? void 0 : fR.timestamp) && void 0 !== iR ? iR : 0, this.replayer = new DR.k(JR, {
          root: RR,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          plugins: [this.pausedAnimations.plugin],
          insertStyleRules: zJ
        }), this.replayer.on("resize", (RR => {
          const {
            width: JR,
            height: GR
          } = RR;
          uR({
            width: JR,
            height: GR
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect(), this.pausedAnimations.settle(this.replayer)
        }))
      }
      sync(RR, JR) {
        const GR = this.domOffsetAt(RR);
        JR ? this.replayer.play(GR) : this.replayer.pause(GR), this.lastDomCheckMs = performance.now()
      }
      update(RR, JR, GR) {
        GR - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = GR, this.placeVideoOverCanvas()), JR && GR - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = GR, this.checkDrift(RR))
      }
      setSpeed(RR) {
        this.replayer.setConfig({
          speed: RR
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(RR) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(RR)) - this.firstDomMs)
      }
      checkDrift(RR) {
        const JR = this.domOffsetAt(RR);
        JR >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - JR) > 400 && this.replayer.play(JR)
      }
      placeVideoOverCanvas() {
        const RR = this.replayer.iframe.contentDocument,
          JR = null === RR ? null : function(RR, JR) {
            for (const GR of JR) {
              const JR = RR.querySelector(GR);
              if (null !== JR) return JR
            }
            return null
          }(RR, this.canvasSelectors),
          GR = this.videoLayer.element;
        null !== JR ? (GR.previousSibling !== JR && JR.after(GR), GR.style.display = "", GR.style.left = `${JR.offsetLeft}px`, GR.style.top = `${JR.offsetTop}px`, GR.style.width = `${JR.offsetWidth}px`, GR.style.height = `${JR.offsetHeight}px`) : GR.style.display = "none"
      }
    }
    const dJ = {
      width: 1280,
      height: 720
    };
    class EJ {
      constructor(RR, JR) {
        this.root = RR, this.onViewportChanged = JR, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", RR.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(RR)
      }
      setViewport(RR) {
        var JR;
        null === RR || RR.width <= 0 || RR.height <= 0 || RR.width === (null === (JR = this.viewport) || void 0 === JR ? void 0 : JR.width) && RR.height === this.viewport.height || (this.viewport = RR, this.element.style.width = `${RR.width}px`, this.element.style.height = `${RR.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var RR;
        const JR = null !== (RR = this.viewport) && void 0 !== RR ? RR : dJ,
          GR = this.root.getBoundingClientRect(),
          yR = Math.min(GR.width / JR.width, GR.height / JR.height),
          tR = (GR.width - JR.width * yR) / 2,
          uR = (GR.height - JR.height * yR) / 2;
        this.element.style.transform = `translate(${tR}px, ${uR}px) scale(${yR})`
      }
    }
    class YJ {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TR;
        this.urls = void 0, this.urls = new hR(RR, "video URLs", JR, GR)
      }
      reset(RR) {
        this.urls.reset(RR.flatMap((RR => {
          var JR;
          return null !== (JR = function(RR) {
            return "url" in RR ? null === RR.url ? null : {
              sequence: RR.sequence,
              url: RR.url
            } : void 0 === RR.partUrls ? null : {
              sequence: RR.sequence,
              partUrls: RR.partUrls
            }
          }(RR)) && void 0 !== JR ? JR : []
        })))
      }
      get(RR) {
        return this.urls.get(RR)
      }
      update(RR, JR, GR) {
        this.urls.request(function(RR, JR, GR, yR) {
          return RR.filter((RR => RR.endMs > JR && RR.startMs < JR + GR && yR(RR.sequence))).map((RR => RR.sequence))
        }(RR, JR, 12e4 * Math.max(1, GR), (RR => this.urls.needs(RR))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function kJ(RR, JR, GR) {
      const yR = [];
      let tR = RR.length,
        uR = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, RR.length)
      }, (() => (async () => {
        for (; uR < tR;) {
          const qR = uR++;
          try {
            yR[qR] = await JR(RR[qR], GR)
          } catch (ZR) {
            if (GR.aborted) throw ZR;
            console.warn(`Replay video part ${qR} failed to load; playing the parts before it.`, ZR), tR = Math.min(tR, qR)
          }
        }
      })()))), yR.slice(0, tR)
    }

    function QJ(RR) {
      const JR = [];
      let GR = 0;
      for (const VR of RR) JR.push(GR), GR += VR.byteLength;
      let yR = 0;
      const tR = GR => {
          for (; JR[yR] > GR;) yR--;
          for (; yR + 1 < JR.length && JR[yR + 1] <= GR;) yR++;
          return RR[yR][GR - JR[yR]]
        },
        uR = RR => tR(RR) * 2 ** 24 + 65536 * tR(RR + 1) + 256 * tR(RR + 2) + tR(RR + 3);
      let ZR = 0,
        qR = !1,
        iR = !1,
        fR = 0;
      for (; ZR + 8 <= GR;) {
        const RR = String.fromCharCode(tR(ZR + 4), tR(ZR + 5), tR(ZR + 6), tR(ZR + 7));
        let JR = uR(ZR);
        if (1 === JR) {
          if (ZR + 16 > GR) break;
          JR = uR(ZR + 8) * 2 ** 32 + uR(ZR + 12)
        } else 0 === JR && (JR = GR - ZR);
        if (JR < 8 || ZR + JR > GR) break;
        ZR += JR, "moov" === RR ? qR = !0 : "moof" === RR ? iR = !0 : "mdat" === RR && iR ? (iR = !1, fR = ZR) : !iR && fR > 0 && (fR = ZR)
      }
      return qR && fR > 0 ? fR : null
    }
    async function FJ(RR, JR) {
      const GR = await fetch(RR, {
        signal: JR
      });
      if (!GR.ok) throw new Error(`HTTP ${GR.status}`);
      return GR.arrayBuffer()
    }
    class TJ {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FJ,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = RR, this.hK = JR, this.blobs = new Map
      }
      get(RR, JR) {
        const GR = sJ(RR, JR),
          yR = this.blobs.get(GR);
        return void 0 === yR ? null : (this.remember(GR, yR), yR)
      }
      async load(RR, JR, GR) {
        const yR = await kJ(JR, this.fetchPart, GR),
          tR = function(RR) {
            const JR = RR.map((RR => new Uint8Array(RR))),
              GR = QJ(JR);
            return null === GR ? null : new Blob(function(RR, JR) {
              const GR = [];
              let yR = JR;
              for (const tR of RR) {
                if (yR <= 0) break;
                GR.push(tR.byteLength <= yR ? tR : tR.subarray(0, yR)), yR -= tR.byteLength
              }
              return GR
            }(JR, GR), {
              type: "video/mp4"
            })
          }(yR);
        return null !== tR && yR.length === JR.length && this.remember(sJ(RR, JR.length), tR), tR
      }
      remember(RR, JR) {
        this.blobs.delete(RR), this.blobs.set(RR, JR), this.blobs.size > this.hK && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function sJ(RR, JR) {
      return `${RR}/${JR}`
    }

    function hJ(RR) {
      const JR = function(RR) {
        return RR.map(((JR, GR) => {
          const yR = RR[GR + 1];
          return void 0 === yR ? JR.endMs : Math.min(JR.endMs, yR.startMs)
        }))
      }(RR);
      return RR.map(((RR, GR) => ({
        ...RR,
        endMs: JR[GR]
      }))).filter((RR => RR.endMs > RR.startMs))
    }

    function RG(RR, JR) {
      let GR = 0,
        yR = RR.length - 1;
      for (; GR <= yR;) {
        const tR = GR + yR >> 1,
          uR = RR[tR];
        if (JR < uR.startMs) yR = tR - 1;
        else {
          if (!(JR >= uR.endMs)) return uR;
          GR = tR + 1
        }
      }
      return null
    }

    function JG(RR, JR) {
      return (JR - RR.startMs) / 1e3
    }

    function GG(RR) {
      return Math.max(.4, .1 * RR)
    }

    function yG(RR) {
      return Math.max(.0625, Math.min(16, RR))
    }
    class tG {
      constructor(RR, JR, GR, yR, tR, uR, ZR) {
        this.still = JR, this.clock = GR, this.frameDurationS = yR, this.wallNowMs = tR, this.onLoadFailed = ZR, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new TJ, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = hJ(RR), this.segmentUrls = new YJ(uR), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(RR) {
        var JR, GR;
        const yR = null !== (JR = null !== (GR = RG(this.segments, RR)) && void 0 !== GR ? GR : this.segments.find((JR => JR.startMs > RR))) && void 0 !== JR ? JR : this.segments.at(-1);
        return void 0 === yR ? null : {
          width: yR.width,
          height: yR.height
        }
      }
      failedAt(RR) {
        const JR = RG(this.segments, RR);
        return null !== JR && this.failed.has(JR.sequence)
      }
      replaceSegments(RR, JR) {
        for (const GR of this.slots.values()) this.release(GR);
        this.slots.clear(), this.failed.clear(), this.segments = hJ(RR), this.segmentUrls.reset(this.segments), this.still = JR
      }
      update(RR) {
        var JR, GR;
        this.segmentUrls.update(this.segments, RR, this.clock.speed);
        const yR = RG(this.segments, RR),
          tR = function(RR, JR) {
            const GR = RR.find((RR => RR.startMs > JR));
            return void 0 === GR ? null : GR.startMs - JR <= ("parts" in GR ? 15e3 : 8e3) ? GR : null
          }(this.segments, RR);
        this.evictExcept([yR, tR, null !== (JR = null === (GR = this.shown) || void 0 === GR ? void 0 : GR.segment) && void 0 !== JR ? JR : null]), null !== tR && this.getSlot(tR), this.showStill(null === yR ? function(RR, JR, GR) {
          if (null === JR) return null;
          const yR = RR.at(-1);
          return void 0 === yR ? GR >= JR.atMs - 1e4 ? JR : null : GR >= yR.endMs && Math.abs(JR.atMs - yR.endMs) <= 1e4 ? JR : null
        }(this.segments, this.still, RR) : null);
        const uR = null === yR ? null : this.getSlot(yR);
        if (null !== uR) {
          this.sync(uR, JG(uR.segment, RR)), uR.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !uR.video.seeking && this.show(uR);
          for (const RR of this.slots.values()) RR === uR || RR.video.paused || RR.video.pause()
        } else {
          null === yR && this.show(null);
          for (const RR of this.slots.values()) RR.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: RR,
          sumAbsDriftMs: JR,
          maxAbsDriftMs: GR,
          withinOneFrame: yR,
          seeks: tR
        } = this.stats;
        return {
          frames: RR,
          meanAbsDriftMs: 0 === RR ? 0 : JR / RR,
          maxAbsDriftMs: GR,
          withinOneFrame: 0 === RR ? 1 : yR / RR,
          seeks: tR
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
        for (const RR of this.slots.values()) this.release(RR);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(RR, JR) {
        const {
          video: GR
        } = RR;
        if (GR.seeking) return;
        const {
          playing: yR,
          speed: tR
        } = this.clock, uR = yR && tR < 16, ZR = function(RR) {
          let {
            targetS: JR,
            currentS: GR,
            playing: yR,
            speed: tR,
            frameDurationS: uR
          } = RR;
          const ZR = GR - JR;
          if (!yR) return Math.abs(ZR) > uR / 2 ? {
            kind: "seek",
            mediaTimeS: JR
          } : {
            kind: "none"
          };
          if (Math.abs(ZR) > GG(tR)) return {
            kind: "seek",
            mediaTimeS: JR
          };
          if (Math.abs(ZR) < uR / 4) return {
            kind: "rate",
            playbackRate: yG(tR)
          };
          const qR = tR - ZR / .5;
          return {
            kind: "rate",
            playbackRate: yG(Math.max(.5 * tR, Math.min(1.5 * tR, qR)))
          }
        }({
          targetS: JR,
          currentS: GR.currentTime,
          playing: uR,
          speed: tR,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === ZR.kind) {
          const JR = this.seekLatencyS * tR,
            qR = yR ? uR ? Math.min(JR, GG(tR) / 2) : JR : 0;
          RR.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, uR && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), GR.currentTime = Math.max(0, ZR.mediaTimeS + qR)
        } else "rate" === ZR.kind && Math.abs(GR.playbackRate - ZR.playbackRate) > .001 && (GR.playbackRate = ZR.playbackRate);
        uR && GR.paused && GR.currentTime < GR.duration ? (GR.playbackRate = yG(tR), GR.play().catch((RR => {
          console.warn("Replay video refused to play.", RR)
        }))) : uR || GR.paused || GR.pause()
      }
      getSlot(RR) {
        const JR = this.slots.get(RR.sequence);
        if (void 0 !== JR) return JR;
        const GR = "parts" in RR ? this.blobs.get(RR.sequence, RR.parts) : null,
          yR = null === GR ? this.segmentUrls.get(RR.sequence) : null;
        if ("pending" === yR) return null;
        if ("failed" === yR) return this.failed.has(RR.sequence) || (console.error(`Replay video segment ${RR.sequence} has no URLs to load.`), this.markFailed(RR)), null;
        const tR = document.createElement("video");
        tR.className = "brv-video", tR.muted = !0, tR.playsInline = !0, tR.preload = "auto", tR.disablePictureInPicture = !0;
        const uR = {
          segment: RR,
          video: tR,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== GR ? this.playBlob(uR, GR) : null !== yR && ("url" in yR ? tR.src = yR.url : this.loadParts(uR, yR.partUrls)), tR.addEventListener("seeked", (() => {
          if (null !== uR.seekStartedWallMs) {
            const RR = (this.wallNowMs() - uR.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, RR), uR.seekStartedWallMs = null
          }
        })), tR.addEventListener("loadeddata", (() => {
          this.slots.get(RR.sequence) === uR && this.failed.delete(RR.sequence)
        })), tR.addEventListener("error", (() => {
          this.slots.get(RR.sequence) === uR && (console.error(`Replay video segment ${RR.sequence} failed to load.`, tR.error), this.markFailed(RR))
        })), this.watchFrames(uR), this.element.appendChild(tR), this.slots.set(RR.sequence, uR), uR
      }
      loadParts(RR, JR) {
        this.blobs.load(RR.segment.sequence, JR, RR.abort.signal).then((JR => {
          if (this.slots.get(RR.segment.sequence) === RR) return null === JR ? (console.error(`Replay video segment ${RR.segment.sequence} has no playable parts.`), void this.markFailed(RR.segment)) : void this.playBlob(RR, JR)
        }), (JR => {
          this.slots.get(RR.segment.sequence) === RR && (console.error(`Replay video segment ${RR.segment.sequence} failed to load.`, JR), this.markFailed(RR.segment))
        }))
      }
      playBlob(RR, JR) {
        RR.objectUrl = URL.createObjectURL(JR), RR.video.src = RR.objectUrl
      }
      markFailed(RR) {
        this.failed.add(RR.sequence), this.onLoadFailed()
      }
      showStill(RR) {
        const JR = null !== RR && RR.url !== this.failedStillUrl ? RR : null;
        null !== JR && this.stillImage.getAttribute("src") !== JR.url && (this.stillImage.src = JR.url);
        const GR = null !== JR && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        GR !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", GR), this.stillShown = GR)
      }
      show(RR) {
        var JR;
        this.shown !== RR && (null === (JR = this.shown) || void 0 === JR || JR.video.classList.remove("brv-video-shown"), null === RR || void 0 === RR || RR.video.classList.add("brv-video-shown"), this.shown = RR)
      }
      evictExcept(RR) {
        for (const [JR, GR] of this.slots) RR.includes(GR.segment) || (this.release(GR), this.slots.delete(JR))
      }
      release(RR) {
        this.shown === RR && (this.shown = null), RR.abort.abort(), RR.video.pause(), RR.video.removeAttribute("src"), RR.video.load(), RR.video.remove(), null !== RR.objectUrl && URL.revokeObjectURL(RR.objectUrl)
      }
      watchFrames(RR) {
        const {
          video: JR
        } = RR;
        if ("function" !== typeof JR.requestVideoFrameCallback) return;
        const GR = (yR, tR) => {
          if (!this.slots.has(RR.segment.sequence)) return;
          const uR = JR.ownerDocument.defaultView,
            ZR = null === uR ? 0 : uR.performance.timeOrigin - performance.timeOrigin,
            qR = JG(RR.segment, this.clock.timeAtWall(tR.expectedDisplayTime + ZR)),
            iR = this.lastPresented,
            fR = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== iR && iR.slot === RR && fR && this.clock.playing && tR.mediaTime > iR.mediaTimeS) {
            const RR = Math.abs(function(RR, JR, GR) {
              return GR < RR ? 1e3 * (GR - RR) : 1e3 * Math.max(0, GR - JR)
            }(iR.mediaTimeS, tR.mediaTime, iR.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += RR, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, RR), RR <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: RR,
            mediaTimeS: tR.mediaTime,
            clockMediaTimeS: qR
          }, JR.requestVideoFrameCallback(GR)
        };
        JR.requestVideoFrameCallback(GR)
      }
    }
    const uG = 1 / 30,
      ZG = ["#noa-canvas", "#noa-container"];
    class qG {
      constructor(RR, JR) {
        var GR, yR, tR, uR, ZR, qR, iR, fR;
        let VR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.gK = () => {
          this.frame = requestAnimationFrame(this.gK);
          const RR = performance.now();
          this.applySkips();
          const JR = this.clock.timeMs();
          this.annotations.update(JR, this.clock.speed), this.videoLayer.update(JR), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(JR)) : this.domLayer.update(JR, this.clock.playing, RR);
          const GR = this.getState();
          (null === this.lastState || function(RR, JR) {
            return Object.keys(RR).some((GR => "positionMs" === GR ? Math.floor(RR.positionMs / 1e3) !== Math.floor(JR.positionMs / 1e3) : RR[GR] !== JR[GR]))
          }(GR, this.lastState)) && this.emitState(GR)
        };
        const KR = () => performance.now();
        this.lowFps = null !== (GR = VR.lowFps) && void 0 !== GR ? GR : 25;
        const wR = new zR(JR.domEvents);
        this.timeline = new oR(JR.windows.length > 0 ? JR.windows : [PR(JR, wR)]), this.chapters = [...JR.chapters].sort(((RR, JR) => RR.startMs - JR.startMs)), this.annotations = new uJ(JR, wR, this.timeline, {
          inactivityThresholdMs: null !== (yR = VR.inactivityThresholdMs) && void 0 !== yR ? yR : 1e4,
          loadTelemetryChunk: null !== (tR = VR.loadTelemetryChunk) && void 0 !== tR ? tR : null,
          telemetryUrls: null !== (uR = VR.telemetryUrls) && void 0 !== uR ? uR : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new sR(null !== (ZR = VR.refreshUrls) && void 0 !== ZR ? ZR : null, (RR => {
          this.videoLayer.replaceSegments(cR(RR.videoSegments), RR.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(RR.telemetryChunks)
        })), this.clock = new IR(this.timeline.startMs, KR), this.stage = new EJ(RR, (() => {
          var RR;
          null === (RR = this.domLayer) || void 0 === RR || RR.invalidateCanvasRect()
        })), this.videoLayer = new tG(cR(JR.videoSegments), JR.still, this.clock, uG, KR, null !== (qR = VR.segmentUrls) && void 0 !== qR ? qR : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = jJ.create(this.stage.element, JR.domEvents, JR.recordedPointer, wR, null !== (iR = VR.canvasSelectors) && void 0 !== iR ? iR : ZG, null !== (fR = VR.resourceHosts) && void 0 !== fR ? fR : [], this.videoLayer, (RR => {
          this.stage.setViewport(RR)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.gK()
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
      subscribe(RR) {
        return this.listeners.add(RR), RR(this.getState()), () => {
          this.listeners.delete(RR)
        }
      }
      getState() {
        const RR = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(RR),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(RR),
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
      seekToPosition(RR) {
        this.seekToTime(this.timeline.toTime(RR))
      }
      seekBy(RR) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + RR)
      }
      stepFrame(RR) {
        this.clock.pause(), this.seekBy(RR * uG * 1e3)
      }
      setSpeed(RR) {
        var JR;
        this.clock.setSpeed(RR), null === (JR = this.domLayer) || void 0 === JR || JR.setSpeed(RR), this.emit()
      }
      setSkipInactive(RR) {
        this.skipInactive = RR, this.emit()
      }
      goToChapter(RR) {
        const JR = this.clock.timeMs(),
          GR = 1 === RR ? this.chapters.find((RR => RR.startMs > JR + 500)) : this.chapters.findLast((RR => RR.startMs < JR - 2e3));
        void 0 !== GR && this.seekToTime(GR.startMs)
      }
      destroy() {
        var RR;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (RR = this.domLayer) || void 0 === RR || RR.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(RR) {
        return this.annotations.isHiddenAt(RR) ? "tabHidden" : this.videoLayer.failedAt(RR) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(RR) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var RR;
        if (!this.clock.playing) return;
        const JR = this.clock.timeMs(),
          GR = this.timeline.nextPlayableTime(JR);
        if (null === GR) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const yR = this.skipInactive ? this.annotations.inactiveRanges.find((RR => GR >= RR.startMs && GR < RR.endMs - 500)) : void 0,
          tR = null !== (RR = null === yR || void 0 === yR ? void 0 : yR.endMs) && void 0 !== RR ? RR : GR;
        tR !== JR && this.seekToTime(tR)
      }
      seekToTime(RR) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, RR))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var RR;
        null === (RR = this.domLayer) || void 0 === RR || RR.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(RR) {
        this.lastState = RR;
        for (const JR of this.listeners) JR(RR)
      }
    }
    const iG = 2500,
      fG = 5;

    function VG(RR) {
      let {
        label: JR,
        Qq: GR,
        wide: yR = !1
      } = RR;
      return (0, LR.jsx)("span", {
        className: `brv-key${GR?" brv-key-held":""}${yR?" brv-key-wide":""}`,
        children: JR
      })
    }
    const KG = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function wG(RR) {
      const [JR, GR] = (0, yR.useState)({
        bits: 0,
        presses: []
      });
      return (0, yR.useEffect)((() => {
        let JR = 0,
          yR = "";
        const tR = () => {
          JR = requestAnimationFrame(tR);
          const uR = RR.timeline.toTime(RR.getPositionMs()),
            {
              actions: ZR,
              keys: qR
            } = RR.input,
            wR = function(RR, JR) {
              const GR = fR(RR, JR);
              return GR < 0 ? 0 : RR[GR].bits
            }(ZR, uR),
            rR = function(RR, JR, GR, yR) {
              const tR = Math.floor(JR / GR) * GR,
                uR = new Map;
              for (let ZR = fR(RR, tR + GR); ZR >= 0 && RR[ZR].atMs >= tR; ZR--) {
                const JR = RR[ZR];
                if (!JR.down || !JR.inPlay || JR.atMs === tR + GR) continue;
                const yR = {
                    code: JR.code,
                    unbound: iR(JR)
                  },
                  qR = VR(yR),
                  fR = uR.get(qR);
                void 0 === fR ? uR.set(qR, {
                  key: yR,
                  presses: 1
                }) : fR.presses++
              }
              return [...uR].sort(((RR, JR) => KR([RR[0], RR[1].presses], [JR[0], JR[1].presses]))).slice(0, yR).map((RR => {
                let [, {
                  key: JR
                }] = RR;
                return JR
              }))
            }(qR, uR, iG, fG),
            eR = `${wR};${rR.map((RR=>VR(RR))).join(",")}`;
          eR !== yR && (yR = eR, GR({
            bits: wR,
            presses: rR
          }))
        };
        return tR(), () => {
          cancelAnimationFrame(JR)
        }
      }), [RR]), JR
    }

    function rG(RR) {
      let {
        controller: JR,
        labels: GR
      } = RR;
      const {
        bits: yR,
        presses: tR
      } = wG(JR), uR = RR => function(RR, JR) {
        return 0 !== (RR & 1 << ZR.indexOf(JR))
      }(yR, RR);
      return (0, LR.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, LR.jsx)("div", {
          className: "brv-input-slot",
          children: tR.map((RR => {
            const JR = rR(RR.code);
            return (0, LR.jsx)("span", {
              className: RR.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: RR.unbound ? GR.unboundKey(JR) : JR
            }, VR(RR))
          }))
        }), (0, LR.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, LR.jsxs)("div", {
            className: "brv-keys",
            children: [(0, LR.jsx)("div", {
              className: "brv-keys-row",
              children: (0, LR.jsx)(VG, {
                label: "W",
                Qq: uR("forward")
              })
            }), (0, LR.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, LR.jsx)(VG, {
                label: "A",
                Qq: uR("left")
              }), (0, LR.jsx)(VG, {
                label: "S",
                Qq: uR("backward")
              }), (0, LR.jsx)(VG, {
                label: "D",
                Qq: uR("right")
              })]
            }), (0, LR.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, LR.jsx)(VG, {
                label: "Shift",
                Qq: uR("sprint")
              }), (0, LR.jsx)(VG, {
                label: "Ctrl",
                Qq: uR("crouch")
              }), (0, LR.jsx)(VG, {
                label: "Space",
                Qq: uR("jump"),
                wide: !0
              })]
            })]
          }), (0, LR.jsx)("div", {
            className: "brv-mouse",
            children: KG.map((RR => {
              let {
                action: JR,
                className: GR
              } = RR;
              return (0, LR.jsx)("span", {
                className: `${GR}${uR(JR)?" brv-key-held":""}`
              }, JR)
            }))
          })]
        })]
      })
    }
    const eG = {
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
      fps: RR => `${RR} FPS`,
      keys: "Keys",
      unboundKey: RR => `${RR} does nothing here`,
      unboundKeys: RR => `${RR} did nothing`
    };

    function aG(RR) {
      let {
        path: JR
      } = RR;
      return (0, LR.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, LR.jsx)("path", {
          d: JR
        })
      })
    }
    const LG = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function nG(RR) {
      let {
        label: JR,
        onClick: GR,
        children: yR
      } = RR;
      return (0, LR.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: JR,
        "aria-label": JR,
        onClick: GR,
        children: yR
      })
    }

    function UG(RR) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === RR ? document.exitFullscreen() : RR.requestFullscreen()).catch((RR => {
        console.warn("Couldn't toggle fullscreen.", RR)
      }))
    }

    function WG(RR) {
      let {
        data: JR,
        className: GR,
        autoPlay: tR = !1,
        options: uR,
        labels: ZR = eG,
        onController: qR
      } = RR;
      const iR = (0, yR.useRef)(null),
        fR = (0, yR.useRef)(null),
        VR = (0, yR.useRef)(uR);
      VR.current = uR;
      const KR = (0, yR.useRef)(tR);
      KR.current = tR;
      const wR = (0, yR.useRef)(qR);
      wR.current = qR;
      const [rR, eR] = (0, yR.useState)(null), [aR, nR] = (0, yR.useState)(null), [WR, AR] = (0, yR.useState)(!0), CR = () => {
        AR((RR => !RR))
      };
      (0, yR.useEffect)((() => {
        var RR;
        ! function(RR) {
          if (null !== RR.getElementById(mJ)) return;
          const JR = RR.createElement("style");
          JR.id = mJ, JR.textContent = SJ, RR.head.appendChild(JR)
        }(document);
        const GR = new qG(iR.current, JR, VR.current),
          yR = GR.subscribe(nR);
        return eR(GR), null === (RR = wR.current) || void 0 === RR || RR.call(wR, GR), KR.current && GR.play(), fR.current.focus({
          preventScroll: !0
        }), () => {
          var RR;
          yR(), GR.destroy(), null === (RR = wR.current) || void 0 === RR || RR.call(wR, null)
        }
      }), [JR]);
      const MR = null !== rR && rR.input.inputRecorded,
        BR = null === rR || null === aR ? void 0 : rR.chapters.findLast((RR => rR.timeline.toPosition(RR.startMs) <= aR.positionMs));
      return (0, LR.jsxs)("div", {
        ref: fR,
        className: void 0 === GR ? "brv-player" : `brv-player ${GR}`,
        tabIndex: 0,
        onKeyDown: RR => {
          if (RR.target instanceof HTMLSelectElement) return;
          if (" " === RR.key && RR.target !== RR.currentTarget && RR.target instanceof HTMLButtonElement) return;
          const JR = function(RR) {
            let {
              key: JR,
              shiftKey: GR,
              ctrlKey: yR,
              metaKey: tR,
              altKey: uR
            } = RR;
            if (yR || tR || uR) return null;
            const ZR = Number(JR) - 1;
            if (/^[1-9]$/.test(JR) && ZR < NR.length) return {
              type: "setSpeed",
              speed: NR[ZR]
            };
            switch (JR.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: GR ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: GR ? 1e3 : 5e3
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
                  type: "chapter", direction: GR ? -1 : 1
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
          }(RR);
          null !== JR && null !== rR && null !== aR && (RR.preventDefault(), function(RR, JR, GR, yR) {
            switch (JR.type) {
              case "togglePlay":
                RR.togglePlay();
                break;
              case "seekBy":
                RR.seekBy(JR.deltaMs);
                break;
              case "stepFrame":
                RR.stepFrame(JR.direction);
                break;
              case "setSpeed":
                RR.setSpeed(JR.speed);
                break;
              case "chapter":
                RR.goToChapter(JR.direction);
                break;
              case "toggleSkipInactive":
                RR.setSkipInactive(!GR.skipInactive);
                break;
              case "toggleFullscreen":
                UG(yR.root);
                break;
              case "toggleKeys":
                yR.toggleKeys()
            }
          }(rR, JR, aR, {
            root: RR.currentTarget,
            toggleKeys: CR
          }))
        },
        children: [(0, LR.jsxs)("div", {
          ref: iR,
          className: "brv-viewport",
          onClick: () => {
            null === rR || void 0 === rR || rR.togglePlay()
          },
          children: [null !== aR && null !== aR.notice && (0, LR.jsx)("div", {
            className: "brv-overlay",
            children: ZR[aR.notice]
          }), null !== rR && WR && MR && (0, LR.jsx)(rG, {
            controller: rR,
            labels: ZR
          })]
        }), null !== rR && null !== aR && (0, LR.jsxs)(LR.Fragment, {
          children: [(0, LR.jsx)(XR, {
            controller: rR,
            frames: rR.frames,
            input: rR.input,
            markers: rR.markers,
            inactiveRanges: rR.inactiveRanges,
            videoGaps: rR.videoGaps,
            labels: ZR
          }), rR.chapters.length > 1 && (0, LR.jsx)("div", {
            className: "brv-chapters",
            children: rR.chapters.map((RR => (0, LR.jsxs)("button", {
              type: "button",
              className: RR === BR ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                rR.seekToPosition(rR.timeline.toPosition(RR.startMs))
              },
              children: [RR.label, " \xb7 ", UR(RR.endMs - RR.startMs)]
            }, RR.startMs)))
          }), (0, LR.jsxs)("div", {
            className: "brv-controls",
            children: [(0, LR.jsx)(nG, {
              label: aR.playing ? ZR.pause : ZR.play,
              onClick: () => {
                rR.togglePlay()
              },
              children: (0, LR.jsx)(aG, {
                path: aR.playing ? LG.pause : LG.play
              })
            }), (0, LR.jsxs)("span", {
              className: "brv-time",
              children: [UR(aR.positionMs), " / ", UR(aR.durationMs)]
            }), (0, LR.jsx)("select", {
              className: "brv-speed",
              value: aR.speed,
              title: `${ZR.speed} (1-${NR.length})`,
              "aria-label": ZR.speed,
              onChange: RR => {
                rR.setSpeed(Number(RR.target.value))
              },
              children: NR.map((RR => (0, LR.jsxs)("option", {
                value: RR,
                children: [RR, "x"]
              }, RR)))
            }), (0, LR.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": aR.skipInactive,
              title: `${ZR.skipInactive} (S)`,
              onClick: () => {
                rR.setSkipInactive(!aR.skipInactive)
              },
              children: [(0, LR.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), ZR.skipInactive]
            }), MR && (0, LR.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": WR,
              title: `${ZR.keys} (I)`,
              onClick: CR,
              children: [(0, LR.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), ZR.keys]
            }), document.fullscreenEnabled && (0, LR.jsx)(nG, {
              label: ZR.fullscreen,
              onClick: () => {
                UG(fR.current)
              },
              children: (0, LR.jsx)(aG, {
                path: LG.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var AG = GR(6114);
    const CG = ["bloxd.io", window.location.hostname];

    function XG(RR) {
      let {
        gameAnalyticsId: JR,
        recordingId: GR,
        userContext: tR,
        autoPlay: uR
      } = RR;
      const {
        t: ZR
      } = (0, BR.A)(), [qR, iR] = (0, yR.useState)({
        status: "loading"
      }), [fR, VR] = (0, yR.useState)(0), KR = (0, yR.useMemo)((() => function(RR) {
        return {
          play: RR("studio:replayPlay"),
          pause: RR("studio:replayPause"),
          speed: RR("studio:replaySpeed"),
          skipInactive: RR("studio:replaySkipIdle"),
          fullscreen: RR("studio:replayFullscreen"),
          tabHidden: RR("studio:replayTabHidden"),
          videoFailed: RR("studio:replayVideoFailed"),
          nothingToShow: RR("studio:replayNothingToShow"),
          videoGap: RR("studio:replayVideoGap"),
          error: RR("general:error"),
          graphicsCrash: RR("studio:replayMarkerGraphicsCrash"),
          death: RR("studio:replayMarkerDeath"),
          fps: JR => RR("studio:replayFps", {
            fps: JR
          }),
          keys: RR("studio:replayKeys"),
          unboundKey: JR => RR("studio:replayUnboundKey", {
            key: JR
          }),
          unboundKeys: JR => RR("studio:replayUnboundKeys", {
            keys: JR
          })
        }
      }(ZR)), [ZR]), wR = (0, yR.useMemo)((() => ({
        resourceHosts: CG,
        loadTelemetryChunk: vR.y,
        refreshUrls: async () => (0, vR.o)(await AG.d.getReplay(tR, JR, GR)),
        segmentUrls: {
          load: async RR => (await AG.d.getReplaySegmentUrls(tR, JR, GR, RR, [])).videoSegments,
          maxSequences: xR.d
        },
        telemetryUrls: {
          load: async RR => (await AG.d.getReplaySegmentUrls(tR, JR, GR, [], RR)).telemetrySegments,
          maxSequences: xR.h
        }
      })), [JR, GR]);
      return (0, yR.useEffect)((() => {
        let RR = !1;
        return iR({
          status: "loading"
        }), (0, vR.z)({
          getReplay: () => AG.d.getReplay(tR, JR, GR),
          loadDomEvents: vR.u,
          onPreparing: () => {
            iR({
              status: "preparing"
            })
          },
          wait: RR => new Promise((JR => {
            setTimeout(JR, RR)
          })),
          isCancelled: () => RR
        }).then((JR => {
          if (!RR && null !== JR) {
            const RR = (0, vR.q)(JR.replay, JR.domEvents, (RR => ZR("studio:replayVisit", {
              number: RR
            })));
            iR({
              status: "loaded",
              value: RR
            })
          }
        })).catch((JR => {
          console.error("Failed to load studio replay", JR), RR || iR({
            status: "error",
            message: (0, vR.j)(JR, ZR("studio:replayLoadFailed"))
          })
        })), () => {
          RR = !0
        }
      }), [JR, GR, fR]), "loading" === qR.status ? (0, LR.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, LR.jsx)(pR.d, {})
      }) : "preparing" === qR.status ? (0, LR.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, LR.jsx)(pR.d, {}), ZR("studio:replayPreparing")]
      }) : "error" === qR.status ? (0, LR.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [qR.message, (0, LR.jsx)(gR.U, {
          onClick: () => {
            VR((RR => RR + 1))
          },
          children: ZR("general:tryAgain")
        })]
      }) : (0, LR.jsx)(WG, {
        className: "StudioReplayPlayer",
        data: qR.value,
        labels: KR,
        options: wR,
        autoPlay: uR || fR > 0
      })
    }

    function MG(RR) {
      let {
        onPlay: JR
      } = RR;
      const {
        t: GR
      } = (0, BR.A)();
      return (0, LR.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": GR("general:play"),
        onClick: JR,
        children: (0, LR.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, LR.jsx)(bR.d, {
            name: "play"
          })
        })
      })
    }
    const BG = vR.Q.replay,
      lG = vR.Q.filters,
      pG = vR.Q.endedAt,
      gG = {
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
      bG = {
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

    function vG(RR) {
      let {
        item: JR,
        selected: GR,
        onSelect: yR
      } = RR;
      const {
        t: tR
      } = (0, BR.A)(), ZR = (0, vR.n)(JR);
      return (0, LR.jsxs)("button", {
        type: "button",
        className: uR()("StudioReplayListItem", {
          StudioReplayListItemSelected: GR
        }),
        onClick: yR,
        children: [(0, LR.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, LR.jsx)("span", {
            children: (0, vR.i)(JR.startedAtMs)
          }), (0, LR.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: UR(JR.inGameDurationMs)
          })]
        }), ZR.length > 0 && (0, LR.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: ZR.map((RR => (0, LR.jsx)("span", {
            className: uR()("StudioReplayTag", `StudioReplayTag-${RR}`),
            children: tR(bG[RR])
          }, RR)))
        })]
      })
    }

    function OG(RR) {
      let {
        gameAnalyticsId: JR,
        userContext: GR,
        availability: yR
      } = RR;
      const {
        t: tR
      } = (0, BR.A)();
      return "on" === yR ? (0, LR.jsx)(xG, {
        gameAnalyticsId: JR,
        userContext: GR
      }) : "failed" === yR ? (0, LR.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, LR.jsx)(bR.d, {
          name: "face-dizzy"
        }), tR("studio:replaysStartFailed"), (0, LR.jsx)(gR.U, {
          onClick: () => {
            MR.e.startNow()
          },
          children: tR("general:tryAgain")
        })]
      }) : (0, LR.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, LR.jsx)(pR.d, {})
      })
    }

    function xG(RR) {
      var JR, GR;
      let {
        gameAnalyticsId: tR,
        userContext: ZR
      } = RR;
      const {
        t: qR
      } = (0, BR.A)(), iR = function(RR, JR) {
        const {
          t: GR
        } = (0, BR.A)(), [tR, uR] = (0, yR.useState)({
          status: "loading"
        });
        return (0, yR.useEffect)((() => {
          let yR = !1;
          return uR({
            status: "loading"
          }), AG.d.listReplays(JR, RR).then((RR => {
            yR || uR({
              status: "loaded",
              value: RR
            })
          })).catch((RR => {
            console.error("Failed to list studio replays", RR), yR || uR({
              status: "error",
              message: (0, vR.j)(RR, GR("studio:replaysLoadFailed"))
            })
          })), () => {
            yR = !0
          }
        }), [RR]), tR
      }(tR, ZR), [fR, VR] = (0, lR.o)(), KR = (0, vR.K)(fR.get(lG)), wR = (0, vR.G)(fR.get(pG)), rR = fR.get(BG), eR = "loaded" === iR.status ? (0, vR.c)(iR.value.recordings, KR, wR) : [], aR = "loaded" === iR.status ? (0, vR.T)(iR.value.recordings, eR, rR) : [], nR = null !== (JR = null !== rR && void 0 !== rR ? rR : null === (GR = aR[0]) || void 0 === GR ? void 0 : GR.recordingId) && void 0 !== JR ? JR : null, [UR, WR] = (0, yR.useState)(rR), [AR, CR] = (0, yR.useState)(!1), XR = (0, yR.useRef)(null), MR = (0, yR.useRef)(null !== rR), xR = (0, yR.useRef)(null);

      function NR(RR) {
        RR === UR && RR === nR || (xR.current = null, MR.current = !0, CR(!0), WR(RR), VR((JR => {
          (0, lR.h)(JR, BG, RR)
        }), {
          push: !0
        }))
      }

      function DR(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        nR !== UR && (xR.current = nR), VR((GR => {
          (0, lR.h)(GR, BG, nR), (0, lR.h)(GR, lG, (0, vR.e)(RR)), JR && (0, lR.h)(GR, pG, null)
        }))
      }
      if ((0, yR.useEffect)((() => {
          null !== rR && rR !== xR.current && WR(rR)
        }), [rR]), (0, yR.useEffect)((() => {
          MR.current && null !== XR.current && (MR.current = !1, XR.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [UR, iR.status]), "loading" === iR.status) return (0, LR.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, LR.jsx)(pR.d, {})
      });
      if ("error" === iR.status) return (0, LR.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, LR.jsx)(bR.d, {
          name: "face-dizzy"
        }), iR.message]
      });
      const {
        recordings: HR,
        dailyQuota: oR
      } = iR.value;
      if (0 === HR.length) return (0, LR.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, LR.jsx)(bR.d, {
          name: "video"
        }), qR(0 === oR ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const cR = vR.N.filter((RR => HR.some((JR => (0, vR.C)(JR, RR))))),
        PR = nR !== UR;
      return (0, LR.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, LR.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== wR && (0, LR.jsxs)(gR.U, {
            active: !0,
            onClick: () => {
              DR(KR, !0)
            },
            children: [qR("studio:replaysFilterEndedAt", {
              minutes: (0, OR.x)(wR.minute, wR.orLonger ? wR.minute : 1 / 0)
            }), (0, LR.jsx)(bR.d, {
              name: "xmark"
            })]
          }), cR.map((RR => (0, LR.jsx)(gR.U, {
            active: KR.includes(RR),
            onClick: () => {
              ! function(RR) {
                DR(KR.includes(RR) ? KR.filter((JR => JR !== RR)) : [...KR, RR])
              }(RR)
            },
            children: qR(gG[RR])
          }, RR))), oR > 0 && (0, LR.jsx)("span", {
            className: "StudioReplaysQuota",
            children: qR("studio:replaysQuota", {
              count: oR
            })
          })]
        }), (0, LR.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, LR.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === eR.length && (0, LR.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [qR("studio:replaysNoMatch"), (0, LR.jsx)(gR.U, {
                onClick: () => {
                  DR([], !0)
                },
                children: qR("studio:replaysClearFilters")
              })]
            }), aR.map((RR => (0, LR.jsx)(vG, {
              item: RR,
              selected: RR.recordingId === nR,
              onSelect: () => {
                NR(RR.recordingId)
              }
            }, RR.recordingId)))]
          }), null !== nR && (0, LR.jsxs)("div", {
            ref: XR,
            className: uR()("StudioReplayViewer", {
              StudioReplayViewerWaiting: PR
            }),
            children: [!PR && (0, LR.jsx)(XG, {
              gameAnalyticsId: tR,
              recordingId: nR,
              userContext: ZR,
              autoPlay: AR
            }, nR), PR && (0, LR.jsx)(MG, {
              onPlay: () => {
                NR(nR)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);