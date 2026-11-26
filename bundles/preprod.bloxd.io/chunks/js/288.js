export const id = 288;
export const ids = [288];
export const modules = {
  41568: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => gz
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU);
    const AU = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      FU = 3e3;

    function oU(UU) {
      return UU.down && UU.inPlay && !UU.bound
    }

    function DU(UU, XU) {
      let zU = 0,
        cU = UU.length;
      for (; zU < cU;) {
        const yU = zU + cU >> 1;
        UU[yU].atMs <= XU ? zU = yU + 1 : cU = yU
      }
      return zU - 1
    }

    function EU(UU) {
      let {
        code: XU,
        unbound: zU
      } = UU;
      return `${XU}:${zU}`
    }

    function YU(UU, XU) {
      return XU[1] - UU[1] || (UU[0] < XU[0] ? -1 : 1)
    }
    const NU = {
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

    function IU(UU) {
      var XU;
      const zU = NU[UU];
      if (void 0 !== zU) return zU;
      const cU = null !== (XU = /^(?:Key|Digit)(.)$/.exec(UU)) && void 0 !== XU ? XU : /^Numpad(.+)$/.exec(UU);
      return null !== cU ? UU.startsWith("Numpad") ? `Num ${cU[1]}` : cU[1] : UU
    }
    const pU = 250,
      aU = 60;
    var tU = zU(1305);
    const gU = 6;

    function kU(UU) {
      const XU = Math.max(0, Math.floor(UU / 1e3)),
        zU = Math.floor(XU / 3600),
        cU = Math.floor(XU % 3600 / 60),
        yU = String(XU % 60).padStart(2, "0");
      return zU > 0 ? `${zU}:${String(cU).padStart(2,"0")}:${yU}` : `${cU}:${yU}`
    }

    function GU(UU, XU) {
      return getComputedStyle(UU).getPropertyValue(XU).trim()
    }

    function BU(UU, XU) {
      switch (UU.kind) {
        case "note":
          return UU.label;
        case "hidden":
          return XU.tabHidden;
        default:
          return XU[UU.kind]
      }
    }

    function ZU(UU) {
      let {
        draw: XU,
        className: zU
      } = UU;
      const yU = (0, cU.useRef)(null);
      return (0, cU.useEffect)((() => {
        const UU = yU.current,
          zU = UU.getContext("2d");
        if (null === XU || null === zU) return;
        const {
          clientWidth: cU,
          clientHeight: QU
        } = UU, AU = window.devicePixelRatio;
        UU.width = Math.round(cU * AU), UU.height = Math.round(QU * AU), zU.setTransform(AU, 0, 0, AU, 0, 0), XU(zU, cU, QU, UU)
      }), [XU]), (0, tU.jsx)("canvas", {
        ref: yU,
        className: zU
      })
    }

    function RU(UU) {
      let {
        controller: XU,
        frames: zU,
        input: yU,
        markers: QU,
        inactiveRanges: AU,
        videoGaps: DU,
        labels: EU
      } = UU;
      const {
        timeline: NU
      } = XU, RU = (0, cU.useRef)(null), [PU, WU] = (0, cU.useState)(0), [dU, LU] = (0, cU.useState)(null), eU = (0, cU.useRef)(null), CU = Math.max(1, NU.durationMs);
      ! function(UU, XU, zU) {
        (0, cU.useEffect)((() => {
          let cU = 0,
            yU = NaN;
          const QU = () => {
            var AU;
            cU = requestAnimationFrame(QU);
            const FU = (null !== (AU = XU.current) && void 0 !== AU ? AU : UU.getPositionMs()) / Math.max(1, UU.timeline.durationMs) * 100;
            FU !== yU && (yU = FU, zU.current.style.setProperty("--brv-position", `${FU}%`))
          };
          return QU(), () => {
            cancelAnimationFrame(cU)
          }
        }), [UU])
      }(XU, eU, RU), (0, cU.useEffect)((() => {
        const UU = RU.current,
          XU = new ResizeObserver((() => {
            WU(UU.clientWidth)
          }));
        return XU.observe(UU), () => {
          XU.disconnect()
        }
      }), []);
      const wU = (0, cU.useMemo)((() => 0 === PU ? null : function(UU, XU, zU) {
          const cU = Math.max(1, Math.min(zU, Math.floor(XU.durationMs / pU))),
            yU = XU.durationMs / cU,
            QU = new Array(cU).fill(0);
          for (const AU of UU) XU.contains(AU.atMs) && QU[Math.min(cU - 1, Math.floor(XU.toPosition(AU.atMs) / yU))]++;
          return {
            bucketMs: yU,
            fps: QU.map((UU => 0 === UU ? null : 1e3 * UU / yU))
          }
        }(zU, NU, Math.round(PU))), [zU, NU, PU]),
        qU = XU.lowFps,
        OU = (0, cU.useMemo)((() => null === wU ? null : (UU, XU, zU, cU) => {
          ! function(UU, XU, zU, cU, yU, QU) {
            UU.clearRect(0, 0, zU, cU);
            const AU = zU / XU.fps.length;
            XU.fps.forEach(((XU, zU) => {
              if (null === XU) return;
              const FU = Math.max(1, Math.min(XU, aU) / aU * cU);
              UU.fillStyle = XU < yU ? QU.lowFps : QU.fps, UU.fillRect(zU * AU, cU - FU, Math.max(1, AU), FU)
            }))
          }(UU, wU, XU, zU, qU, {
            fps: GU(cU, "--brv-fps"),
            lowFps: GU(cU, "--brv-low-fps")
          })
        }), [wU, qU]),
        SU = (0, cU.useMemo)((() => {
          if (0 === PU || !yU.inputRecorded) return null;
          const UU = function(UU, XU, zU) {
            const cU = Math.max(1, XU.durationMs) / zU,
              yU = new Array(zU).fill(0),
              QU = new Array(zU).fill(0);
            for (const AU of UU) {
              if (!AU.down || !XU.contains(AU.atMs)) continue;
              const UU = Math.min(zU - 1, Math.floor(XU.toPosition(AU.atMs) / cU));
              yU[UU]++, oU(AU) && QU[UU]++
            }
            return {
              presses: yU,
              unbound: QU
            }
          }(yU.keys, NU, Math.max(1, Math.round(PU)));
          return (XU, zU, cU, yU) => {
            ! function(UU, XU, zU, cU, yU) {
              UU.clearRect(0, 0, zU, cU);
              const QU = zU / XU.presses.length;
              XU.presses.forEach(((zU, AU) => {
                if (0 === zU) return;
                const FU = XU.unbound[AU] > 0;
                UU.globalAlpha = FU ? 1 : Math.min(1, .35 + .15 * zU), UU.fillStyle = FU ? yU.unbound : yU.presses, UU.fillRect(AU * QU, 0, Math.max(FU ? 2 : 1, QU), cU)
              })), UU.globalAlpha = 1
            }(XU, UU, zU, cU, {
              presses: GU(yU, "--brv-key-press"),
              unbound: GU(yU, "--brv-key-unbound")
            })
          }
        }), [yU, NU, PU]),
        rU = (0, cU.useMemo)((() => function(UU) {
          const XU = [];
          for (const cU of UU) {
            var zU;
            if (!oU(cU)) continue;
            let UU = XU.at(-1);
            (void 0 === UU || cU.atMs - UU.endMs > FU) && (UU = {
              startMs: cU.atMs,
              endMs: cU.atMs,
              counts: new Map
            }, XU.push(UU)), UU.endMs = cU.atMs, UU.counts.set(cU.code, (null !== (zU = UU.counts.get(cU.code)) && void 0 !== zU ? zU : 0) + 1)
          }
          return XU.map((UU => {
            let {
              startMs: XU,
              endMs: zU,
              counts: cU
            } = UU;
            return {
              startMs: XU,
              endMs: zU,
              keys: [...cU].sort(YU)
            }
          }))
        }(yU.keys.filter((UU => NU.contains(UU.atMs))))), [yU.keys, NU]),
        uU = UU => NU.toPosition(UU) / CU * 100,
        fU = UU => uU(UU) / 100 * PU,
        iU = UU => {
          const XU = RU.current.getBoundingClientRect();
          return {
            px: UU - XU.left,
            positionMs: Math.max(0, Math.min(XU.width, UU - XU.left)) / XU.width * CU
          }
        },
        HU = null === dU || 0 === PU ? null : {
          px: dU,
          positionMs: Math.max(0, Math.min(PU, dU)) / PU * CU
        },
        MU = null === HU || null === wU ? null : function(UU, XU) {
          const zU = Math.max(0, Math.min(UU.fps.length - 1, Math.floor(XU / UU.bucketMs))),
            cU = UU.fps[zU];
          return null === cU ? null : Math.round(cU)
        }(wU, HU.positionMs),
        vU = null !== HU && DU.some((UU => HU.px >= fU(UU.startMs) && HU.px < fU(UU.endMs))),
        VU = null === HU ? void 0 : QU.find((UU => {
          var XU;
          return HU.px >= fU(UU.atMs) - gU && HU.px <= fU(null !== (XU = UU.endMs) && void 0 !== XU ? XU : UU.atMs) + gU
        })),
        sU = null === HU ? void 0 : rU.find((UU => HU.px >= fU(UU.startMs) - gU && HU.px <= fU(UU.endMs) + gU));
      return (0, tU.jsxs)("div", {
        ref: RU,
        className: yU.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: UU => {
          UU.currentTarget.setPointerCapture(UU.pointerId);
          const XU = iU(UU.clientX);
          LU(XU.px), eU.current = XU.positionMs
        },
        onPointerMove: UU => {
          const XU = iU(UU.clientX);
          LU(XU.px), null !== eU.current && (eU.current = XU.positionMs)
        },
        onPointerUp: UU => {
          null !== eU.current && (XU.seekToPosition(iU(UU.clientX).positionMs), eU.current = null)
        },
        onPointerCancel: () => {
          eU.current = null, LU(null)
        },
        onPointerLeave: () => {
          LU(null)
        },
        children: [(0, tU.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, tU.jsx)(ZU, {
            draw: OU,
            className: "brv-seekbar-canvas"
          }), AU.map((UU => {
            const XU = uU(UU.startMs);
            return (0, tU.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${XU}%`,
                width: uU(UU.endMs) - XU + "%"
              }
            }, UU.startMs)
          })), DU.map((UU => {
            const XU = uU(UU.startMs);
            return (0, tU.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${XU}%`,
                width: uU(UU.endMs) - XU + "%"
              }
            }, UU.startMs)
          })), (0, tU.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== HU && (0, tU.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: HU.px
            }
          })]
        }), yU.inputRecorded && (0, tU.jsx)(ZU, {
          draw: SU,
          className: "brv-seekbar-input"
        }), (0, tU.jsx)("div", {
          className: "brv-seekbar-markers",
          children: QU.map(((UU, XU) => {
            var zU;
            const cU = uU(UU.atMs),
              yU = void 0 !== UU.endMs;
            return (0, tU.jsx)("div", {
              className: `brv-marker brv-marker-${UU.kind}${yU?" brv-marker-range":""}`,
              style: {
                left: `${cU}%`,
                width: yU ? uU(null !== (zU = UU.endMs) && void 0 !== zU ? zU : UU.atMs) - cU + "%" : void 0
              }
            }, XU)
          }))
        }), (0, tU.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== HU && (0, tU.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: HU.px
          },
          children: [kU(HU.positionMs), null !== MU && ` \xb7 ${EU.fps(MU)}`, void 0 !== VU && ` \xb7 ${BU(VU,EU)}`, vU && ` \xb7 ${EU.videoGap}`, void 0 !== sU && ` \xb7 ${EU.unboundKeys((nU=sU.keys,nU.map((UU=>{let[XU,zU]=UU;return zU>1?`${IU(XU)} \xd7${zU}`:IU(XU)})).join(", ")))}`]
        })]
      });
      var nU
    }
    var PU = zU(5113),
      WU = zU(1193),
      dU = zU(4997),
      LU = zU(1384),
      eU = zU(1494),
      CU = zU(1390),
      wU = zU(7098),
      qU = zU(5646),
      OU = zU(5639);
    const SU = [.5, 1, 2, 4, 8, 16];
    var rU = zU(41571);

    function uU(UU) {
      const XU = UU.filter((UU => UU.endMs > UU.startMs)).sort(((UU, XU) => UU.startMs - XU.startMs)),
        zU = [];
      for (const cU of XU) {
        const UU = zU.at(-1);
        void 0 !== UU && cU.startMs <= UU.endMs ? UU.endMs = Math.max(UU.endMs, cU.endMs) : zU.push({
          ...cU
        })
      }
      return zU
    }
    class fU {
      constructor(UU) {
        this.Qt = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.Qt = uU(UU), this.positionStarts = [];
        let XU = 0;
        for (const zU of this.Qt) this.positionStarts.push(XU), XU += zU.endMs - zU.startMs;
        this.durationMs = XU
      }
      get startMs() {
        var UU, XU;
        return null !== (UU = null === (XU = this.Qt[0]) || void 0 === XU ? void 0 : XU.startMs) && void 0 !== UU ? UU : 0
      }
      get endMs() {
        var UU, XU;
        return null !== (UU = null === (XU = this.Qt.at(-1)) || void 0 === XU ? void 0 : XU.endMs) && void 0 !== UU ? UU : 0
      }
      toPosition(UU) {
        for (let XU = 0; XU < this.Qt.length; XU++) {
          const zU = this.Qt[XU];
          if (UU < zU.endMs) return this.positionStarts[XU] + Math.max(0, UU - zU.startMs)
        }
        return this.durationMs
      }
      toTime(UU) {
        const XU = Math.max(0, Math.min(this.durationMs, UU));
        for (let zU = this.Qt.length - 1; zU >= 0; zU--)
          if (XU >= this.positionStarts[zU]) return this.Qt[zU].startMs + (XU - this.positionStarts[zU]);
        return this.startMs
      }
      contains(UU) {
        return this.Qt.some((XU => UU >= XU.startMs && UU < XU.endMs))
      }
      nextPlayableTime(UU) {
        for (const XU of this.Qt) {
          if (UU < XU.startMs) return XU.startMs;
          if (UU < XU.endMs) return UU
        }
        return null
      }
    }

    function iU(UU) {
      return [...UU].sort(((UU, XU) => UU.startMs - XU.startMs))
    }

    function HU(UU, XU) {
      let zU = 1 / 0,
        cU = -1 / 0;
      const yU = UU => {
        zU = Math.min(zU, UU), cU = Math.max(cU, UU)
      };
      for (const QU of [...UU.videoSegments, ...UU.telemetryChunks]) yU(QU.startMs), yU(QU.endMs);
      for (const QU of UU.domEvents) yU(XU.toEpoch(QU.timestamp));
      return zU < cU ? {
        startMs: zU,
        endMs: cU
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class MU {
      constructor(UU, XU) {
        this.wallNowMs = XU, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = UU, this.anchorWallMs = XU()
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
      timeAtWall(UU) {
        return this.playingState ? this.anchorTimeMs + (UU - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(UU) {
        this.anchorTimeMs = UU, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(UU) {
        this.reanchor(), this.speedState = UU
      }
      reanchor() {
        const UU = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(UU), this.anchorWallMs = UU
      }
    }
    const vU = "bloxd-clock";
    class VU {
      constructor(UU) {
        this.samples = void 0, this.samples = [];
        for (const zU of UU) {
          var XU;
          const UU = zU.data;
          zU.type === rU.c.Custom && (null === UU || void 0 === UU ? void 0 : UU.tag) === vU && "number" === typeof(null === (XU = UU.payload) || void 0 === XU ? void 0 : XU.epochMs) && this.samples.push({
            domMs: zU.timestamp,
            offsetMs: UU.payload.epochMs - zU.timestamp
          })
        }
        this.samples.sort(((UU, XU) => UU.domMs - XU.domMs))
      }
      toEpoch(UU) {
        return UU + this.offsetAtDom(UU)
      }
      toDom(UU) {
        return UU - this.offsetAtDom(UU)
      }
      offsetAtDom(UU) {
        var XU, zU;
        let cU = 0,
          yU = this.samples.length - 1;
        for (; cU < yU;) {
          const XU = Math.ceil((cU + yU) / 2);
          this.samples[XU].domMs <= UU ? cU = XU : yU = XU - 1
        }
        return null !== (XU = null === (zU = this.samples[cU]) || void 0 === zU ? void 0 : zU.offsetMs) && void 0 !== XU ? XU : 0
      }
    }
    const sU = new Set([rU.f.MouseMove, rU.f.MouseInteraction, rU.f.Scroll, rU.f.Input, rU.f.TouchMove, rU.f.Drag]),
      nU = "bloxd-active",
      mU = "player_death",
      lU = "error",
      xU = {
        $exception: "error",
        [lU]: "error",
        death: "death",
        [mU]: "death"
      };

    function JU(UU, XU, zU) {
      return function(UU, XU) {
        const zU = [];
        for (const cU of UU) {
          let UU = cU.startMs;
          for (const yU of XU) yU.endMs <= UU || yU.startMs >= cU.endMs || (yU.startMs > UU && zU.push({
            startMs: UU,
            endMs: yU.startMs
          }), UU = Math.max(UU, yU.endMs));
          UU < cU.endMs && zU.push({
            startMs: UU,
            endMs: cU.endMs
          })
        }
        return zU
      }(function(UU) {
        const XU = [];
        for (const zU of UU) {
          const UU = XU.at(-1);
          void 0 !== UU && zU.atMs - UU.endMs <= 5e3 ? UU.endMs = zU.atMs : XU.push({
            startMs: zU.atMs,
            endMs: zU.atMs
          })
        }
        return XU
      }(UU), uU([...XU, ...zU])).filter((UU => UU.endMs - UU.startMs >= 1e3))
    }

    function jU(UU) {
      var XU, zU, cU;
      return UU.type === rU.c.IncrementalSnapshot ? sU.has(null !== (zU = null === (cU = UU.data) || void 0 === cU ? void 0 : cU.source) && void 0 !== zU ? zU : -1) : UU.type === rU.c.Custom && (null === (XU = UU.data) || void 0 === XU ? void 0 : XU.tag) === nU
    }

    function KU(UU, XU) {
      const zU = [];
      for (const AU of UU)
        if (AU.type === rU.c.Custom) {
          var cU;
          const UU = null === (cU = AU.data) || void 0 === cU ? void 0 : cU.tag,
            yU = void 0 === UU ? void 0 : xU[UU];
          void 0 !== yU && zU.push({
            kind: yU,
            atMs: XU.toEpoch(AU.timestamp)
          })
        } else if (AU.type === rU.c.Plugin) {
        var yU, QU;
        const UU = AU.data;
        "rrweb/console@1" !== (null === UU || void 0 === UU ? void 0 : UU.plugin) || "error" !== (null === (yU = UU.payload) || void 0 === yU ? void 0 : yU.level) && "assert" !== (null === (QU = UU.payload) || void 0 === QU ? void 0 : QU.level) || zU.push({
          kind: "error",
          atMs: XU.toEpoch(AU.timestamp)
        })
      }
      return zU
    }
    const bU = 3e6;
    class TU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bU;
        this.fetchUrls = UU, this.onUrls = XU, this.wallNowMs = zU, this.refreshableAfterMs = cU, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = zU()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const UU = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        UU > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), UU) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(UU) {
        this.inFlight = !0;
        const XU = this.wallNowMs();
        this.lastRefreshWallMs = XU;
        let zU = !1;
        UU().then((UU => {
          this.destroyed || (this.urlsFetchedAtWallMs = XU, this.onUrls(UU))
        })).catch((UU => {
          console.error("Failed to refresh the replay's URLs.", UU), zU = !0
        })).finally((() => {
          this.inFlight = !1, zU && this.request()
        }))
      }
    }
    class hU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bU;
        this.source = UU, this.description = XU, this.wallNowMs = zU, this.refreshableAfterMs = cU, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(UU) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const XU = this.wallNowMs();
        for (const zU of UU) this.entries.set(zU.sequence, {
          urls: zU,
          fetchedAtWallMs: XU
        })
      }
      get(UU) {
        const XU = this.getFresh(UU);
        return null !== XU ? XU : null === this.source || this.unavailable.has(UU) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(UU) {
        return null === this.getFresh(UU) && !this.unavailable.has(UU)
      }
      request(UU) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const XU = UU.filter((UU => this.needs(UU)));
        XU.length > 0 && this.fetch(this.source, XU.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(UU) {
        const XU = this.entries.get(UU);
        return void 0 === XU ? null : null === this.source || this.wallNowMs() - XU.fetchedAtWallMs < this.refreshableAfterMs ? XU.urls : null
      }
      fetch(UU, XU) {
        this.inFlight = !0;
        const zU = this.wallNowMs();
        UU.load(XU).then((UU => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const cU = new Set;
          for (const XU of UU) this.entries.set(XU.sequence, {
            urls: XU,
            fetchedAtWallMs: zU
          }), cU.add(XU.sequence);
          for (const zU of XU) cU.has(zU) || (console.warn(`Replay sequence ${zU} has no ${this.description}.`), this.unavailable.add(zU))
        })).catch((UU => {
          console.error(`Failed to fetch the replay's ${this.description}.`, UU), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class UX {
      constructor(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : bU;
        this.load = XU, this.onLoaded = zU, this.onFailed = cU, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = XX([]), this.hidden = [], this.destroyed = !1, this.chunks = [...UU].sort(((UU, XU) => UU.startMs - XU.startMs)).map((UU => ({
          chunk: UU,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new hU(yU, "telemetry URLs", QU, AU), this.urls.reset(cX(UU))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((UU => "loaded" === UU.status)).length
      }
      update(UU, XU, zU) {
        if (null === this.load || this.destroyed) return;
        const cU = XU.toPosition(UU),
          yU = XU.toTime(cU - 1e4),
          QU = XU.toTime(cU + 6e4 * Math.max(1, zU)),
          AU = XU.toTime(cU + 12e4 * Math.max(1, zU)),
          FU = this.chunks.filter((UU => "idle" === UU.status && UU.chunk.endMs >= yU && UU.chunk.startMs <= AU)).sort(((XU, zU) => yX(UU, XU.chunk) - yX(UU, zU.chunk)));
        this.urls.request(FU.flatMap((UU => {
          var XU;
          let {
            chunk: zU
          } = UU;
          return null !== (XU = zU.sequence) && void 0 !== XU ? XU : []
        })));
        for (const oU of FU) {
          if (this.loading >= 3) return;
          const UU = oU.chunk.startMs <= QU ? this.getUrl(oU.chunk) : null;
          null !== UU && this.startLoad(oU, UU, this.load)
        }
      }
      replaceUrls(UU) {
        this.urls.reset(cX(UU));
        for (const XU of this.chunks) {
          const zU = UU.find((UU => UU.startMs === XU.chunk.startMs && UU.endMs === XU.chunk.endMs));
          void 0 !== zU && (XU.chunk = zU, "failed" === XU.status && (XU.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(UU) {
        var XU;
        if (void 0 === UU.sequence) return null !== (XU = UU.url) && void 0 !== XU ? XU : null;
        const zU = this.urls.get(UU.sequence);
        return "string" === typeof zU ? null : zU.url
      }
      startLoad(UU, XU, zU) {
        UU.status = "loading", UU.attempts++, this.loading++, zU(XU).then((XU => {
          this.destroyed || (UU.status = "loaded", UU.telemetry = XU, this.merge(), this.onLoaded())
        })).catch((XU => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${UU.chunk.startMs}-${UU.chunk.endMs}.`, XU), UU.status = UU.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const UU = [];
        let XU = !1;
        for (const cU of this.chunks) {
          const zU = UU.at(-1);
          if (null === cU.telemetry) {
            XU = !1;
            continue
          }
          const yU = zX(cU.telemetry, cU.chunk);
          void 0 !== zU && XU && cU.chunk.startMs <= zU.endMs + 1e3 ? (zU.telemetry.push(yU), zU.endMs = cU.chunk.endMs) : (UU.push({
            telemetry: [yU],
            endMs: cU.chunk.endMs
          }), XU = !0)
        }
        const zU = UU.map((UU => function(UU, XU) {
          const zU = UU.actions.at(-1);
          if (void 0 === zU || 0 === zU.bits) return UU;
          return {
            ...UU,
            actions: [...UU.actions, {
              atMs: XU,
              bits: 0
            }]
          }
        }(XX(UU.telemetry), UU.endMs)));
        this.merged = XX(zU), this.hidden = zU.flatMap(((XU, zU) => function(UU, XU) {
          const zU = [];
          let cU = null;
          for (const {
              atMs: yU,
              event: QU
            }
            of UU.events) "hidden" === QU && null === cU ? cU = yU : "visible" === QU && null !== cU && (zU.push({
            startMs: cU,
            endMs: yU
          }), cU = null);
          return null !== cU && zU.push({
            startMs: cU,
            endMs: XU
          }), uU(zU)
        }(XU, UU[zU].endMs)))
      }
    }

    function XX(UU) {
      return {
        inputRecorded: UU.some((UU => UU.keys.length > 0)),
        frames: UU.flatMap((UU => UU.frames)),
        states: UU.flatMap((UU => UU.states)),
        events: UU.flatMap((UU => UU.events)),
        actions: UU.flatMap((UU => UU.actions)),
        keys: UU.flatMap((UU => UU.keys))
      }
    }

    function zX(UU, XU) {
      const {
        actions: zU
      } = UU;
      return !UU.inputRecorded || zU.length > 0 && zU[0].atMs <= XU.startMs + 1 ? UU : {
        ...UU,
        actions: [{
          atMs: XU.startMs,
          bits: 0
        }, ...zU]
      }
    }

    function cX(UU) {
      return UU.flatMap((UU => {
        let {
          sequence: XU,
          url: zU
        } = UU;
        return void 0 === XU || void 0 === zU ? [] : [{
          sequence: XU,
          url: zU
        }]
      }))
    }

    function yX(UU, XU) {
      return UU < XU.startMs ? XU.startMs - UU : UU > XU.endMs ? 2 * (UU - XU.endMs) : 0
    }
    class QX {
      constructor(UU, XU, zU, cU) {
        this.data = UU, this.domClock = XU, this.timeline = zU, this.options = cU, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(UU, XU) {
          return UU.filter(jU).map((UU => XU.toEpoch(UU.timestamp)))
        }(UU.domEvents, XU), this.telemetry = new UX(UU.telemetryChunks, cU.loadTelemetryChunk, (() => {
          this.rebuild()
        }), cU.onTelemetryFailed, cU.telemetryUrls), this.rebuild()
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
      update(UU, XU) {
        this.telemetry.update(UU, this.timeline, XU)
      }
      replaceTelemetryUrls(UU) {
        this.telemetry.replaceUrls(UU)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(UU) {
        return this.telemetry.hiddenRanges.some(AX(UU))
      }
      isVideoGapAt(UU) {
        return this.videoGapRanges.some(AX(UU))
      }
      rebuild() {
        const UU = this.telemetry.telemetry,
          XU = this.telemetry.hiddenRanges;
        this.videoGapRanges = JU(UU.frames, this.data.videoSegments, XU), this.inactiveRangeList = function(UU, XU, zU, cU) {
          const yU = [...XU];
          if (UU.length > 0) {
            const XU = [zU.startMs, ...UU, zU.endMs];
            for (let UU = 1; UU < XU.length; UU++) {
              const zU = XU[UU - 1],
                QU = XU[UU] - 1e3;
              QU - zU >= cU && yU.push({
                startMs: zU,
                endMs: QU
              })
            }
          }
          return uU(yU).filter((UU => UU.endMs - UU.startMs >= cU))
        }(this.activityTimes, XU, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(UU) {
          const {
            timeline: XU
          } = UU;
          return [...KU(UU.domEvents, UU.domClock), ...UU.telemetry.events.filter((UU => {
            let {
              event: XU
            } = UU;
            return "contextLost" === XU
          })).map((UU => {
            let {
              atMs: XU
            } = UU;
            return {
              kind: "graphicsCrash",
              atMs: XU
            }
          })), ...UU.hidden.map((UU => ({
            kind: "hidden",
            atMs: UU.startMs,
            endMs: UU.endMs
          }))), ...UU.extraMarkers].filter((UU => UU.atMs >= XU.startMs && UU.atMs <= XU.endMs && (XU.contains(UU.atMs) || XU.contains(UU.atMs - 1)))).sort(((UU, XU) => UU.atMs - XU.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: UU,
          extraMarkers: this.data.markers,
          hidden: XU,
          timeline: this.timeline
        })
      }
    }

    function AX(UU) {
      return XU => UU >= XU.startMs && UU < XU.endMs
    }
    const FX = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      oX = new Set(["srcset", "imagesrcset"]),
      DX = new Set(["to", "from", "by", "values"]),
      EX = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      YX = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      NX = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      IX = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      pX = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      aX = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      tX = /^data:image\/(?!svg)/i,
      gX = "about:invalid";

    function kX(UU, XU) {
      let {
        hosts: zU
      } = XU, cU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const yU = UU.trim();
      if (/[\\\u0000-\u001f]/.test(yU)) return !1;
      if (!aX.test(yU)) return !0;
      let QU;
      try {
        QU = new URL(yU.startsWith("//") ? `https:${yU}` : yU)
      } catch {
        return !1
      }
      return "data:" === QU.protocol ? cU ? "text/css" !== yU.slice(5).split(/[,;]/)[0].trim().toLowerCase() : tX.test(yU) : "blob:" === QU.protocol || ("http:" === QU.protocol || "https:" === QU.protocol) && zU.some((UU => QU.hostname === UU || QU.hostname.endsWith(`.${UU}`)))
    }

    function GX(UU, XU) {
      return UU.replace(YX, (function(UU) {
        for (var zU = arguments.length, cU = new Array(zU > 1 ? zU - 1 : 0), yU = 1; yU < zU; yU++) cU[yU - 1] = arguments[yU];
        if (kX(cU.slice(0, 7).find((UU => "string" === typeof UU)), XU, !0)) return UU;
        const QU = UU.slice(0, 4).toLowerCase();
        return "url(" === QU ? `url("${gX}")` : "@imp" === QU ? `@import "${gX}"` : `"${gX}"`
      }))
    }

    function BX(UU) {
      return pX.test(UU.replace(YX, '""'))
    }

    function ZX(UU) {
      let XU = "between";
      for (let zU = 0; zU < UU.length; zU++) {
        const cU = UU[zU];
        if ("/" === cU && "*" === UU[zU + 1]) {
          if (zU = UU.indexOf("*/", zU + 2), -1 === zU) return "open";
          zU++, XU = "between"
        } else if ('"' === cU || "'" === cU) {
          for (zU++; zU < UU.length && UU[zU] !== cU && !/[\n\r\f]/.test(UU[zU]); zU++) "\\" === UU[zU] && zU++;
          if (zU >= UU.length) return "open";
          XU = "token"
        } else "\\" === cU ? (zU++, XU = "token") : ";" === cU || "{" === cU || "}" === cU ? XU = "between" : /\s/.test(cU) || (XU = "token")
      }
      return XU
    }

    function RX(UU, XU) {
      const zU = GX(UU, XU);
      if (BX(zU) || "open" === ZX(zU)) return "";
      if (!zU.includes("\\")) return zU;
      const cU = function(UU) {
        return UU.replace(IX, ((UU, XU, zU) => void 0 !== XU ? String.fromCodePoint(Math.min(parseInt(XU, 16), 1114111)) : null !== zU && void 0 !== zU ? zU : ""))
      }(zU);
      return GX(cU, XU) !== cU || BX(cU) ? "" : zU
    }

    function PX(UU, XU) {
      const zU = NX.test(UU) ? RX(UU, XU) : UU;
      return zU.split("/* rr_split */").every((UU => "between" === ZX(UU))) ? zU : ""
    }

    function WX(UU, XU, zU) {
      if ("string" === typeof XU) {
        const cU = UU.toLowerCase();
        if (EX.has(cU)) return null;
        if (oX.has(cU)) return function(UU, XU) {
          return UU.split(",").every((UU => {
            const zU = UU.trim().split(/\s+/)[0];
            return void 0 === zU || "" === zU || kX(zU, XU)
          }))
        }(XU, zU) ? XU : null;
        if (DX.has(cU)) {
          return XU.split(";").every((UU => kX(UU, zU))) ? WX("", XU, zU) : null
        }
        return FX.has(cU) ? kX(XU, zU) ? XU : null : "_csstext" === cU ? PX(XU, zU) : NX.test(XU) ? RX(XU, zU) : XU
      }
      if (Array.isArray(XU)) return XU.map((UU => WX("", UU, zU)));
      if (null !== XU && "object" === typeof XU) {
        const cU = "style" === UU.toLowerCase(),
          yU = {};
        for (const [UU, AU] of Object.entries(XU)) yU[UU] = WX(cU ? "" : UU, AU, zU);
        const {
          id: QU
        } = yU;
        if ("number" === typeof QU && zU.styleTextIds.has(QU))
          for (const UU of ["textContent", "value"]) {
            const XU = yU[UU];
            "string" === typeof XU && (yU[UU] = PX(XU, zU))
          }
        return yU
      }
      return XU
    }

    function dX(UU) {
      const XU = new Set,
        zU = [],
        cU = (UU, yU) => {
          if (null === UU || "object" !== typeof UU) return;
          const {
            id: QU,
            tagName: AU,
            childNodes: FU
          } = UU;
          if ("number" === typeof QU && ("string" === typeof AU && "style" === AU.toLowerCase() && XU.add(QU), zU.push({
              id: QU,
              parentId: yU
            }), Array.isArray(FU)))
            for (const XU of FU) cU(XU, QU)
        };
      for (const QU of UU) {
        const UU = QU.data;
        if (QU.type === rU.c.FullSnapshot) cU(null === UU || void 0 === UU ? void 0 : UU.node, null);
        else if (QU.type === rU.c.IncrementalSnapshot && Array.isArray(null === UU || void 0 === UU ? void 0 : UU.adds))
          for (const XU of UU.adds) cU(null === XU || void 0 === XU ? void 0 : XU.node, null === XU || void 0 === XU ? void 0 : XU.parentId)
      }
      const yU = new Set;
      for (const {
          id: QU,
          parentId: AU
        }
        of zU) "number" === typeof AU && XU.has(AU) && yU.add(QU);
      return yU
    }
    const LX = "brv-styles",
      eX = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      CX = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${eX.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class wX {
      static create(UU, XU, zU, cU, yU, QU, AU) {
        return XU.some((UU => UU.type === rU.c.FullSnapshot)) ? new wX(UU, function(UU, XU) {
          const zU = {
            hosts: XU,
            styleTextIds: dX(UU)
          };
          return UU.map((UU => UU.type === rU.c.Meta ? UU : {
            ...UU,
            data: WX("data", UU.data, zU)
          }))
        }(XU, yU), zU, cU, QU, AU) : null
      }
      constructor(UU, XU, zU, cU, yU, QU) {
        var AU, FU, oU, DU;
        this.domClock = zU, this.canvasSelectors = cU, this.videoLayer = yU, this.replayer = void 0, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (AU = null === (FU = XU[0]) || void 0 === FU ? void 0 : FU.timestamp) && void 0 !== AU ? AU : 0, this.lastDomMs = null !== (oU = null === (DU = XU.at(-1)) || void 0 === DU ? void 0 : DU.timestamp) && void 0 !== oU ? oU : 0, this.replayer = new rU.g(XU, {
          root: UU,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          insertStyleRules: eX
        }), this.replayer.on("resize", (UU => {
          const {
            width: XU,
            height: zU
          } = UU;
          QU({
            width: XU,
            height: zU
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect()
        }))
      }
      sync(UU, XU) {
        const zU = this.domOffsetAt(UU);
        XU ? this.replayer.play(zU) : this.replayer.pause(zU), this.lastDomCheckMs = performance.now()
      }
      update(UU, XU, zU) {
        zU - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = zU, this.placeVideoOverCanvas()), XU && zU - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = zU, this.checkDrift(UU))
      }
      setSpeed(UU) {
        this.replayer.setConfig({
          speed: UU
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(UU) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(UU)) - this.firstDomMs)
      }
      checkDrift(UU) {
        const XU = this.domOffsetAt(UU);
        XU >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - XU) > 400 && this.replayer.play(XU)
      }
      placeVideoOverCanvas() {
        const UU = this.replayer.iframe.contentDocument,
          XU = null === UU ? null : function(UU, XU) {
            for (const zU of XU) {
              const XU = UU.querySelector(zU);
              if (null !== XU) return XU
            }
            return null
          }(UU, this.canvasSelectors),
          zU = this.videoLayer.element;
        null !== XU ? (zU.previousSibling !== XU && XU.after(zU), zU.style.display = "", zU.style.left = `${XU.offsetLeft}px`, zU.style.top = `${XU.offsetTop}px`, zU.style.width = `${XU.offsetWidth}px`, zU.style.height = `${XU.offsetHeight}px`) : zU.style.display = "none"
      }
    }
    const qX = {
      width: 1280,
      height: 720
    };
    class OX {
      constructor(UU, XU) {
        this.root = UU, this.onViewportChanged = XU, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", UU.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(UU)
      }
      setViewport(UU) {
        var XU;
        null === UU || UU.width <= 0 || UU.height <= 0 || UU.width === (null === (XU = this.viewport) || void 0 === XU ? void 0 : XU.width) && UU.height === this.viewport.height || (this.viewport = UU, this.element.style.width = `${UU.width}px`, this.element.style.height = `${UU.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var UU;
        const XU = null !== (UU = this.viewport) && void 0 !== UU ? UU : qX,
          zU = this.root.getBoundingClientRect(),
          cU = Math.min(zU.width / XU.width, zU.height / XU.height),
          yU = (zU.width - XU.width * cU) / 2,
          QU = (zU.height - XU.height * cU) / 2;
        this.element.style.transform = `translate(${yU}px, ${QU}px) scale(${cU})`
      }
    }
    class SX {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bU;
        this.urls = void 0, this.urls = new hU(UU, "video URLs", XU, zU)
      }
      reset(UU) {
        this.urls.reset(UU.flatMap((UU => {
          var XU;
          return null !== (XU = function(UU) {
            return "url" in UU ? null === UU.url ? null : {
              sequence: UU.sequence,
              url: UU.url
            } : void 0 === UU.partUrls ? null : {
              sequence: UU.sequence,
              partUrls: UU.partUrls
            }
          }(UU)) && void 0 !== XU ? XU : []
        })))
      }
      get(UU) {
        return this.urls.get(UU)
      }
      update(UU, XU, zU) {
        this.urls.request(function(UU, XU, zU, cU) {
          return UU.filter((UU => UU.endMs > XU && UU.startMs < XU + zU && cU(UU.sequence))).map((UU => UU.sequence))
        }(UU, XU, 12e4 * Math.max(1, zU), (UU => this.urls.needs(UU))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function rX(UU, XU, zU) {
      const cU = [];
      let yU = UU.length,
        QU = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, UU.length)
      }, (() => (async () => {
        for (; QU < yU;) {
          const FU = QU++;
          try {
            cU[FU] = await XU(UU[FU], zU)
          } catch (AU) {
            if (zU.aborted) throw AU;
            console.warn(`Replay video part ${FU} failed to load; playing the parts before it.`, AU), yU = Math.min(yU, FU)
          }
        }
      })()))), cU.slice(0, yU)
    }

    function uX(UU) {
      const XU = [];
      let zU = 0;
      for (const EU of UU) XU.push(zU), zU += EU.byteLength;
      let cU = 0;
      const yU = zU => {
          for (; XU[cU] > zU;) cU--;
          for (; cU + 1 < XU.length && XU[cU + 1] <= zU;) cU++;
          return UU[cU][zU - XU[cU]]
        },
        QU = UU => yU(UU) * 2 ** 24 + 65536 * yU(UU + 1) + 256 * yU(UU + 2) + yU(UU + 3);
      let AU = 0,
        FU = !1,
        oU = !1,
        DU = 0;
      for (; AU + 8 <= zU;) {
        const UU = String.fromCharCode(yU(AU + 4), yU(AU + 5), yU(AU + 6), yU(AU + 7));
        let XU = QU(AU);
        if (1 === XU) {
          if (AU + 16 > zU) break;
          XU = QU(AU + 8) * 2 ** 32 + QU(AU + 12)
        } else 0 === XU && (XU = zU - AU);
        if (XU < 8 || AU + XU > zU) break;
        AU += XU, "moov" === UU ? FU = !0 : "moof" === UU ? oU = !0 : "mdat" === UU && oU ? (oU = !1, DU = AU) : !oU && DU > 0 && (DU = AU)
      }
      return FU && DU > 0 ? DU : null
    }
    async function fX(UU, XU) {
      const zU = await fetch(UU, {
        signal: XU
      });
      if (!zU.ok) throw new Error(`HTTP ${zU.status}`);
      return zU.arrayBuffer()
    }
    class iX {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fX,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = UU, this.xY = XU, this.blobs = new Map
      }
      get(UU, XU) {
        const zU = HX(UU, XU),
          cU = this.blobs.get(zU);
        return void 0 === cU ? null : (this.remember(zU, cU), cU)
      }
      async load(UU, XU, zU) {
        const cU = await rX(XU, this.fetchPart, zU),
          yU = function(UU) {
            const XU = UU.map((UU => new Uint8Array(UU))),
              zU = uX(XU);
            return null === zU ? null : new Blob(function(UU, XU) {
              const zU = [];
              let cU = XU;
              for (const yU of UU) {
                if (cU <= 0) break;
                zU.push(yU.byteLength <= cU ? yU : yU.subarray(0, cU)), cU -= yU.byteLength
              }
              return zU
            }(XU, zU), {
              type: "video/mp4"
            })
          }(cU);
        return null !== yU && cU.length === XU.length && this.remember(HX(UU, XU.length), yU), yU
      }
      remember(UU, XU) {
        this.blobs.delete(UU), this.blobs.set(UU, XU), this.blobs.size > this.xY && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function HX(UU, XU) {
      return `${UU}/${XU}`
    }

    function MX(UU) {
      const XU = function(UU) {
        return UU.map(((XU, zU) => {
          const cU = UU[zU + 1];
          return void 0 === cU ? XU.endMs : Math.min(XU.endMs, cU.startMs)
        }))
      }(UU);
      return UU.map(((UU, zU) => ({
        ...UU,
        endMs: XU[zU]
      }))).filter((UU => UU.endMs > UU.startMs))
    }

    function vX(UU, XU) {
      let zU = 0,
        cU = UU.length - 1;
      for (; zU <= cU;) {
        const yU = zU + cU >> 1,
          QU = UU[yU];
        if (XU < QU.startMs) cU = yU - 1;
        else {
          if (!(XU >= QU.endMs)) return QU;
          zU = yU + 1
        }
      }
      return null
    }

    function VX(UU, XU) {
      return (XU - UU.startMs) / 1e3
    }

    function sX(UU) {
      return Math.max(.4, .1 * UU)
    }

    function nX(UU) {
      return Math.max(.0625, Math.min(16, UU))
    }
    class mX {
      constructor(UU, XU, zU, cU, yU, QU, AU) {
        this.still = XU, this.clock = zU, this.frameDurationS = cU, this.wallNowMs = yU, this.onLoadFailed = AU, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new iX, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = MX(UU), this.segmentUrls = new SX(QU), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(UU) {
        var XU, zU;
        const cU = null !== (XU = null !== (zU = vX(this.segments, UU)) && void 0 !== zU ? zU : this.segments.find((XU => XU.startMs > UU))) && void 0 !== XU ? XU : this.segments.at(-1);
        return void 0 === cU ? null : {
          width: cU.width,
          height: cU.height
        }
      }
      failedAt(UU) {
        const XU = vX(this.segments, UU);
        return null !== XU && this.failed.has(XU.sequence)
      }
      replaceSegments(UU, XU) {
        for (const zU of this.slots.values()) this.release(zU);
        this.slots.clear(), this.failed.clear(), this.segments = MX(UU), this.segmentUrls.reset(this.segments), this.still = XU
      }
      update(UU) {
        var XU, zU;
        this.segmentUrls.update(this.segments, UU, this.clock.speed);
        const cU = vX(this.segments, UU),
          yU = function(UU, XU) {
            const zU = UU.find((UU => UU.startMs > XU));
            return void 0 === zU ? null : zU.startMs - XU <= ("parts" in zU ? 15e3 : 8e3) ? zU : null
          }(this.segments, UU);
        this.evictExcept([cU, yU, null !== (XU = null === (zU = this.shown) || void 0 === zU ? void 0 : zU.segment) && void 0 !== XU ? XU : null]), null !== yU && this.getSlot(yU), this.showStill(null === cU ? function(UU, XU, zU) {
          if (null === XU) return null;
          const cU = UU.at(-1);
          return void 0 === cU ? zU >= XU.atMs - 1e4 ? XU : null : zU >= cU.endMs && Math.abs(XU.atMs - cU.endMs) <= 1e4 ? XU : null
        }(this.segments, this.still, UU) : null);
        const QU = null === cU ? null : this.getSlot(cU);
        if (null !== QU) {
          this.sync(QU, VX(QU.segment, UU)), QU.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !QU.video.seeking && this.show(QU);
          for (const UU of this.slots.values()) UU === QU || UU.video.paused || UU.video.pause()
        } else {
          null === cU && this.show(null);
          for (const UU of this.slots.values()) UU.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: UU,
          sumAbsDriftMs: XU,
          maxAbsDriftMs: zU,
          withinOneFrame: cU,
          seeks: yU
        } = this.stats;
        return {
          frames: UU,
          meanAbsDriftMs: 0 === UU ? 0 : XU / UU,
          maxAbsDriftMs: zU,
          withinOneFrame: 0 === UU ? 1 : cU / UU,
          seeks: yU
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
        for (const UU of this.slots.values()) this.release(UU);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(UU, XU) {
        const {
          video: zU
        } = UU;
        if (zU.seeking) return;
        const {
          playing: cU,
          speed: yU
        } = this.clock, QU = cU && yU < 16, AU = function(UU) {
          let {
            targetS: XU,
            currentS: zU,
            playing: cU,
            speed: yU,
            frameDurationS: QU
          } = UU;
          const AU = zU - XU;
          if (!cU) return Math.abs(AU) > QU / 2 ? {
            kind: "seek",
            mediaTimeS: XU
          } : {
            kind: "none"
          };
          if (Math.abs(AU) > sX(yU)) return {
            kind: "seek",
            mediaTimeS: XU
          };
          if (Math.abs(AU) < QU / 4) return {
            kind: "rate",
            playbackRate: nX(yU)
          };
          const FU = yU - AU / .5;
          return {
            kind: "rate",
            playbackRate: nX(Math.max(.5 * yU, Math.min(1.5 * yU, FU)))
          }
        }({
          targetS: XU,
          currentS: zU.currentTime,
          playing: QU,
          speed: yU,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === AU.kind) {
          const XU = this.seekLatencyS * yU,
            FU = cU ? QU ? Math.min(XU, sX(yU) / 2) : XU : 0;
          UU.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, QU && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), zU.currentTime = Math.max(0, AU.mediaTimeS + FU)
        } else "rate" === AU.kind && Math.abs(zU.playbackRate - AU.playbackRate) > .001 && (zU.playbackRate = AU.playbackRate);
        QU && zU.paused && zU.currentTime < zU.duration ? (zU.playbackRate = nX(yU), zU.play().catch((UU => {
          console.warn("Replay video refused to play.", UU)
        }))) : QU || zU.paused || zU.pause()
      }
      getSlot(UU) {
        const XU = this.slots.get(UU.sequence);
        if (void 0 !== XU) return XU;
        const zU = "parts" in UU ? this.blobs.get(UU.sequence, UU.parts) : null,
          cU = null === zU ? this.segmentUrls.get(UU.sequence) : null;
        if ("pending" === cU) return null;
        if ("failed" === cU) return this.failed.has(UU.sequence) || (console.error(`Replay video segment ${UU.sequence} has no URLs to load.`), this.markFailed(UU)), null;
        const yU = document.createElement("video");
        yU.className = "brv-video", yU.muted = !0, yU.playsInline = !0, yU.preload = "auto", yU.disablePictureInPicture = !0;
        const QU = {
          segment: UU,
          video: yU,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== zU ? this.playBlob(QU, zU) : null !== cU && ("url" in cU ? yU.src = cU.url : this.loadParts(QU, cU.partUrls)), yU.addEventListener("seeked", (() => {
          if (null !== QU.seekStartedWallMs) {
            const UU = (this.wallNowMs() - QU.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, UU), QU.seekStartedWallMs = null
          }
        })), yU.addEventListener("loadeddata", (() => {
          this.slots.get(UU.sequence) === QU && this.failed.delete(UU.sequence)
        })), yU.addEventListener("error", (() => {
          this.slots.get(UU.sequence) === QU && (console.error(`Replay video segment ${UU.sequence} failed to load.`, yU.error), this.markFailed(UU))
        })), this.watchFrames(QU), this.element.appendChild(yU), this.slots.set(UU.sequence, QU), QU
      }
      loadParts(UU, XU) {
        this.blobs.load(UU.segment.sequence, XU, UU.abort.signal).then((XU => {
          if (this.slots.get(UU.segment.sequence) === UU) return null === XU ? (console.error(`Replay video segment ${UU.segment.sequence} has no playable parts.`), void this.markFailed(UU.segment)) : void this.playBlob(UU, XU)
        }), (XU => {
          this.slots.get(UU.segment.sequence) === UU && (console.error(`Replay video segment ${UU.segment.sequence} failed to load.`, XU), this.markFailed(UU.segment))
        }))
      }
      playBlob(UU, XU) {
        UU.objectUrl = URL.createObjectURL(XU), UU.video.src = UU.objectUrl
      }
      markFailed(UU) {
        this.failed.add(UU.sequence), this.onLoadFailed()
      }
      showStill(UU) {
        const XU = null !== UU && UU.url !== this.failedStillUrl ? UU : null;
        null !== XU && this.stillImage.getAttribute("src") !== XU.url && (this.stillImage.src = XU.url);
        const zU = null !== XU && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        zU !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", zU), this.stillShown = zU)
      }
      show(UU) {
        var XU;
        this.shown !== UU && (null === (XU = this.shown) || void 0 === XU || XU.video.classList.remove("brv-video-shown"), null === UU || void 0 === UU || UU.video.classList.add("brv-video-shown"), this.shown = UU)
      }
      evictExcept(UU) {
        for (const [XU, zU] of this.slots) UU.includes(zU.segment) || (this.release(zU), this.slots.delete(XU))
      }
      release(UU) {
        this.shown === UU && (this.shown = null), UU.abort.abort(), UU.video.pause(), UU.video.removeAttribute("src"), UU.video.load(), UU.video.remove(), null !== UU.objectUrl && URL.revokeObjectURL(UU.objectUrl)
      }
      watchFrames(UU) {
        const {
          video: XU
        } = UU;
        if ("function" !== typeof XU.requestVideoFrameCallback) return;
        const zU = (cU, yU) => {
          if (!this.slots.has(UU.segment.sequence)) return;
          const QU = XU.ownerDocument.defaultView,
            AU = null === QU ? 0 : QU.performance.timeOrigin - performance.timeOrigin,
            FU = VX(UU.segment, this.clock.timeAtWall(yU.expectedDisplayTime + AU)),
            oU = this.lastPresented,
            DU = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== oU && oU.slot === UU && DU && this.clock.playing && yU.mediaTime > oU.mediaTimeS) {
            const UU = Math.abs(function(UU, XU, zU) {
              return zU < UU ? 1e3 * (zU - UU) : 1e3 * Math.max(0, zU - XU)
            }(oU.mediaTimeS, yU.mediaTime, oU.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += UU, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, UU), UU <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: UU,
            mediaTimeS: yU.mediaTime,
            clockMediaTimeS: FU
          }, XU.requestVideoFrameCallback(zU)
        };
        XU.requestVideoFrameCallback(zU)
      }
    }
    const lX = 1 / 30,
      xX = ["#noa-canvas", "#noa-container"];
    class JX {
      constructor(UU, XU) {
        var zU, cU, yU, QU, AU, FU, oU, DU;
        let EU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.LY = () => {
          this.frame = requestAnimationFrame(this.LY);
          const UU = performance.now();
          this.applySkips();
          const XU = this.clock.timeMs();
          this.annotations.update(XU, this.clock.speed), this.videoLayer.update(XU), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(XU)) : this.domLayer.update(XU, this.clock.playing, UU);
          const zU = this.getState();
          (null === this.lastState || function(UU, XU) {
            return Object.keys(UU).some((zU => "positionMs" === zU ? Math.floor(UU.positionMs / 1e3) !== Math.floor(XU.positionMs / 1e3) : UU[zU] !== XU[zU]))
          }(zU, this.lastState)) && this.emitState(zU)
        };
        const YU = () => performance.now();
        this.lowFps = null !== (zU = EU.lowFps) && void 0 !== zU ? zU : 25;
        const NU = new VU(XU.domEvents);
        this.timeline = new fU(XU.windows.length > 0 ? XU.windows : [HU(XU, NU)]), this.chapters = [...XU.chapters].sort(((UU, XU) => UU.startMs - XU.startMs)), this.annotations = new QX(XU, NU, this.timeline, {
          inactivityThresholdMs: null !== (cU = EU.inactivityThresholdMs) && void 0 !== cU ? cU : 1e4,
          loadTelemetryChunk: null !== (yU = EU.loadTelemetryChunk) && void 0 !== yU ? yU : null,
          telemetryUrls: null !== (QU = EU.telemetryUrls) && void 0 !== QU ? QU : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new TU(null !== (AU = EU.refreshUrls) && void 0 !== AU ? AU : null, (UU => {
          this.videoLayer.replaceSegments(iU(UU.videoSegments), UU.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(UU.telemetryChunks)
        })), this.clock = new MU(this.timeline.startMs, YU), this.stage = new OX(UU, (() => {
          var UU;
          null === (UU = this.domLayer) || void 0 === UU || UU.invalidateCanvasRect()
        })), this.videoLayer = new mX(iU(XU.videoSegments), XU.still, this.clock, lX, YU, null !== (FU = EU.segmentUrls) && void 0 !== FU ? FU : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = wX.create(this.stage.element, XU.domEvents, NU, null !== (oU = EU.canvasSelectors) && void 0 !== oU ? oU : xX, null !== (DU = EU.resourceHosts) && void 0 !== DU ? DU : [], this.videoLayer, (UU => {
          this.stage.setViewport(UU)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.LY()
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
      subscribe(UU) {
        return this.listeners.add(UU), UU(this.getState()), () => {
          this.listeners.delete(UU)
        }
      }
      getState() {
        const UU = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(UU),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(UU),
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
      seekToPosition(UU) {
        this.seekToTime(this.timeline.toTime(UU))
      }
      seekBy(UU) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + UU)
      }
      stepFrame(UU) {
        this.clock.pause(), this.seekBy(UU * lX * 1e3)
      }
      setSpeed(UU) {
        var XU;
        this.clock.setSpeed(UU), null === (XU = this.domLayer) || void 0 === XU || XU.setSpeed(UU), this.emit()
      }
      setSkipInactive(UU) {
        this.skipInactive = UU, this.emit()
      }
      goToChapter(UU) {
        const XU = this.clock.timeMs(),
          zU = 1 === UU ? this.chapters.find((UU => UU.startMs > XU + 500)) : this.chapters.findLast((UU => UU.startMs < XU - 2e3));
        void 0 !== zU && this.seekToTime(zU.startMs)
      }
      destroy() {
        var UU;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (UU = this.domLayer) || void 0 === UU || UU.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(UU) {
        return this.annotations.isHiddenAt(UU) ? "tabHidden" : this.videoLayer.failedAt(UU) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(UU) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var UU;
        if (!this.clock.playing) return;
        const XU = this.clock.timeMs(),
          zU = this.timeline.nextPlayableTime(XU);
        if (null === zU) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const cU = this.skipInactive ? this.annotations.inactiveRanges.find((UU => zU >= UU.startMs && zU < UU.endMs - 500)) : void 0,
          yU = null !== (UU = null === cU || void 0 === cU ? void 0 : cU.endMs) && void 0 !== UU ? UU : zU;
        yU !== XU && this.seekToTime(yU)
      }
      seekToTime(UU) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, UU))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var UU;
        null === (UU = this.domLayer) || void 0 === UU || UU.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(UU) {
        this.lastState = UU;
        for (const XU of this.listeners) XU(UU)
      }
    }
    const jX = 2500,
      KX = 5;

    function bX(UU) {
      let {
        label: XU,
        uD: zU,
        wide: cU = !1
      } = UU;
      return (0, tU.jsx)("span", {
        className: `brv-key${zU?" brv-key-held":""}${cU?" brv-key-wide":""}`,
        children: XU
      })
    }
    const TX = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function hX(UU) {
      const [XU, zU] = (0, cU.useState)({
        bits: 0,
        presses: []
      });
      return (0, cU.useEffect)((() => {
        let XU = 0,
          cU = "";
        const yU = () => {
          XU = requestAnimationFrame(yU);
          const QU = UU.timeline.toTime(UU.getPositionMs()),
            {
              actions: AU,
              keys: FU
            } = UU.input,
            NU = function(UU, XU) {
              const zU = DU(UU, XU);
              return zU < 0 ? 0 : UU[zU].bits
            }(AU, QU),
            IU = function(UU, XU, zU, cU) {
              const yU = Math.floor(XU / zU) * zU,
                QU = new Map;
              for (let AU = DU(UU, yU + zU); AU >= 0 && UU[AU].atMs >= yU; AU--) {
                const XU = UU[AU];
                if (!XU.down || !XU.inPlay || XU.atMs === yU + zU) continue;
                const cU = {
                    code: XU.code,
                    unbound: oU(XU)
                  },
                  FU = EU(cU),
                  DU = QU.get(FU);
                void 0 === DU ? QU.set(FU, {
                  key: cU,
                  presses: 1
                }) : DU.presses++
              }
              return [...QU].sort(((UU, XU) => YU([UU[0], UU[1].presses], [XU[0], XU[1].presses]))).slice(0, cU).map((UU => {
                let [, {
                  key: XU
                }] = UU;
                return XU
              }))
            }(FU, QU, jX, KX),
            pU = `${NU};${IU.map((UU=>EU(UU))).join(",")}`;
          pU !== cU && (cU = pU, zU({
            bits: NU,
            presses: IU
          }))
        };
        return yU(), () => {
          cancelAnimationFrame(XU)
        }
      }), [UU]), XU
    }

    function Uz(UU) {
      let {
        controller: XU,
        labels: zU
      } = UU;
      const {
        bits: cU,
        presses: yU
      } = hX(XU), QU = UU => function(UU, XU) {
        return 0 !== (UU & 1 << AU.indexOf(XU))
      }(cU, UU);
      return (0, tU.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, tU.jsx)("div", {
          className: "brv-input-slot",
          children: yU.map((UU => {
            const XU = IU(UU.code);
            return (0, tU.jsx)("span", {
              className: UU.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: UU.unbound ? zU.unboundKey(XU) : XU
            }, EU(UU))
          }))
        }), (0, tU.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, tU.jsxs)("div", {
            className: "brv-keys",
            children: [(0, tU.jsx)("div", {
              className: "brv-keys-row",
              children: (0, tU.jsx)(bX, {
                label: "W",
                uD: QU("forward")
              })
            }), (0, tU.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, tU.jsx)(bX, {
                label: "A",
                uD: QU("left")
              }), (0, tU.jsx)(bX, {
                label: "S",
                uD: QU("backward")
              }), (0, tU.jsx)(bX, {
                label: "D",
                uD: QU("right")
              })]
            }), (0, tU.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, tU.jsx)(bX, {
                label: "Shift",
                uD: QU("sprint")
              }), (0, tU.jsx)(bX, {
                label: "Ctrl",
                uD: QU("crouch")
              }), (0, tU.jsx)(bX, {
                label: "Space",
                uD: QU("jump"),
                wide: !0
              })]
            })]
          }), (0, tU.jsx)("div", {
            className: "brv-mouse",
            children: TX.map((UU => {
              let {
                action: XU,
                className: zU
              } = UU;
              return (0, tU.jsx)("span", {
                className: `${zU}${QU(XU)?" brv-key-held":""}`
              }, XU)
            }))
          })]
        })]
      })
    }
    const Xz = {
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
      fps: UU => `${UU} FPS`,
      keys: "Keys",
      unboundKey: UU => `${UU} does nothing here`,
      unboundKeys: UU => `${UU} did nothing`
    };

    function zz(UU) {
      let {
        path: XU
      } = UU;
      return (0, tU.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, tU.jsx)("path", {
          d: XU
        })
      })
    }
    const cz = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function yz(UU) {
      let {
        label: XU,
        onClick: zU,
        children: cU
      } = UU;
      return (0, tU.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: XU,
        "aria-label": XU,
        onClick: zU,
        children: cU
      })
    }

    function Qz(UU) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === UU ? document.exitFullscreen() : UU.requestFullscreen()).catch((UU => {
        console.warn("Couldn't toggle fullscreen.", UU)
      }))
    }

    function Az(UU) {
      let {
        data: XU,
        className: zU,
        autoPlay: yU = !1,
        options: QU,
        labels: AU = Xz,
        onController: FU
      } = UU;
      const oU = (0, cU.useRef)(null),
        DU = (0, cU.useRef)(null),
        EU = (0, cU.useRef)(QU);
      EU.current = QU;
      const YU = (0, cU.useRef)(yU);
      YU.current = yU;
      const NU = (0, cU.useRef)(FU);
      NU.current = FU;
      const [IU, pU] = (0, cU.useState)(null), [aU, gU] = (0, cU.useState)(null), [GU, BU] = (0, cU.useState)(!0), ZU = () => {
        BU((UU => !UU))
      };
      (0, cU.useEffect)((() => {
        var UU;
        ! function(UU) {
          if (null !== UU.getElementById(LX)) return;
          const XU = UU.createElement("style");
          XU.id = LX, XU.textContent = CX, UU.head.appendChild(XU)
        }(document);
        const zU = new JX(oU.current, XU, EU.current),
          cU = zU.subscribe(gU);
        return pU(zU), null === (UU = NU.current) || void 0 === UU || UU.call(NU, zU), YU.current && zU.play(), DU.current.focus({
          preventScroll: !0
        }), () => {
          var UU;
          cU(), zU.destroy(), null === (UU = NU.current) || void 0 === UU || UU.call(NU, null)
        }
      }), [XU]);
      const PU = null !== IU && IU.input.inputRecorded,
        WU = null === IU || null === aU ? void 0 : IU.chapters.findLast((UU => IU.timeline.toPosition(UU.startMs) <= aU.positionMs));
      return (0, tU.jsxs)("div", {
        ref: DU,
        className: void 0 === zU ? "brv-player" : `brv-player ${zU}`,
        tabIndex: 0,
        onKeyDown: UU => {
          if (UU.target instanceof HTMLSelectElement) return;
          if (" " === UU.key && UU.target !== UU.currentTarget && UU.target instanceof HTMLButtonElement) return;
          const XU = function(UU) {
            let {
              key: XU,
              shiftKey: zU,
              ctrlKey: cU,
              metaKey: yU,
              altKey: QU
            } = UU;
            if (cU || yU || QU) return null;
            const AU = Number(XU) - 1;
            if (/^[1-9]$/.test(XU) && AU < SU.length) return {
              type: "setSpeed",
              speed: SU[AU]
            };
            switch (XU.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: zU ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: zU ? 1e3 : 5e3
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
                  type: "chapter", direction: zU ? -1 : 1
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
          }(UU);
          null !== XU && null !== IU && null !== aU && (UU.preventDefault(), function(UU, XU, zU, cU) {
            switch (XU.type) {
              case "togglePlay":
                UU.togglePlay();
                break;
              case "seekBy":
                UU.seekBy(XU.deltaMs);
                break;
              case "stepFrame":
                UU.stepFrame(XU.direction);
                break;
              case "setSpeed":
                UU.setSpeed(XU.speed);
                break;
              case "chapter":
                UU.goToChapter(XU.direction);
                break;
              case "toggleSkipInactive":
                UU.setSkipInactive(!zU.skipInactive);
                break;
              case "toggleFullscreen":
                Qz(cU.root);
                break;
              case "toggleKeys":
                cU.toggleKeys()
            }
          }(IU, XU, aU, {
            root: UU.currentTarget,
            toggleKeys: ZU
          }))
        },
        children: [(0, tU.jsxs)("div", {
          ref: oU,
          className: "brv-viewport",
          onClick: () => {
            null === IU || void 0 === IU || IU.togglePlay()
          },
          children: [null !== aU && null !== aU.notice && (0, tU.jsx)("div", {
            className: "brv-overlay",
            children: AU[aU.notice]
          }), null !== IU && GU && PU && (0, tU.jsx)(Uz, {
            controller: IU,
            labels: AU
          })]
        }), null !== IU && null !== aU && (0, tU.jsxs)(tU.Fragment, {
          children: [(0, tU.jsx)(RU, {
            controller: IU,
            frames: IU.frames,
            input: IU.input,
            markers: IU.markers,
            inactiveRanges: IU.inactiveRanges,
            videoGaps: IU.videoGaps,
            labels: AU
          }), IU.chapters.length > 1 && (0, tU.jsx)("div", {
            className: "brv-chapters",
            children: IU.chapters.map((UU => (0, tU.jsxs)("button", {
              type: "button",
              className: UU === WU ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                IU.seekToPosition(IU.timeline.toPosition(UU.startMs))
              },
              children: [UU.label, " \xb7 ", kU(UU.endMs - UU.startMs)]
            }, UU.startMs)))
          }), (0, tU.jsxs)("div", {
            className: "brv-controls",
            children: [(0, tU.jsx)(yz, {
              label: aU.playing ? AU.pause : AU.play,
              onClick: () => {
                IU.togglePlay()
              },
              children: (0, tU.jsx)(zz, {
                path: aU.playing ? cz.pause : cz.play
              })
            }), (0, tU.jsxs)("span", {
              className: "brv-time",
              children: [kU(aU.positionMs), " / ", kU(aU.durationMs)]
            }), (0, tU.jsx)("select", {
              className: "brv-speed",
              value: aU.speed,
              title: `${AU.speed} (1-${SU.length})`,
              "aria-label": AU.speed,
              onChange: UU => {
                IU.setSpeed(Number(UU.target.value))
              },
              children: SU.map((UU => (0, tU.jsxs)("option", {
                value: UU,
                children: [UU, "x"]
              }, UU)))
            }), (0, tU.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": aU.skipInactive,
              title: `${AU.skipInactive} (S)`,
              onClick: () => {
                IU.setSkipInactive(!aU.skipInactive)
              },
              children: [(0, tU.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), AU.skipInactive]
            }), PU && (0, tU.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": GU,
              title: `${AU.keys} (I)`,
              onClick: ZU,
              children: [(0, tU.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), AU.keys]
            }), document.fullscreenEnabled && (0, tU.jsx)(yz, {
              label: AU.fullscreen,
              onClick: () => {
                Qz(DU.current)
              },
              children: (0, tU.jsx)(zz, {
                path: cz.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var Fz = zU(5637);
    const oz = ["bloxd.io", window.location.hostname];

    function Dz(UU) {
      let {
        gameAnalyticsId: XU,
        recordingId: zU,
        userContext: yU,
        autoPlay: QU
      } = UU;
      const {
        t: AU
      } = (0, WU.I)(), [FU, oU] = (0, cU.useState)({
        status: "loading"
      }), [DU, EU] = (0, cU.useState)(0), YU = (0, cU.useMemo)((() => function(UU) {
        return {
          play: UU("studio:replayPlay"),
          pause: UU("studio:replayPause"),
          speed: UU("studio:replaySpeed"),
          skipInactive: UU("studio:replaySkipIdle"),
          fullscreen: UU("studio:replayFullscreen"),
          tabHidden: UU("studio:replayTabHidden"),
          videoFailed: UU("studio:replayVideoFailed"),
          nothingToShow: UU("studio:replayNothingToShow"),
          videoGap: UU("studio:replayVideoGap"),
          error: UU("general:error"),
          graphicsCrash: UU("studio:replayMarkerGraphicsCrash"),
          death: UU("studio:replayMarkerDeath"),
          fps: XU => UU("studio:replayFps", {
            fps: XU
          }),
          keys: UU("studio:replayKeys"),
          unboundKey: XU => UU("studio:replayUnboundKey", {
            key: XU
          }),
          unboundKeys: XU => UU("studio:replayUnboundKeys", {
            keys: XU
          })
        }
      }(AU)), [AU]), NU = (0, cU.useMemo)((() => ({
        resourceHosts: oz,
        loadTelemetryChunk: wU.E,
        refreshUrls: async () => (0, wU.u)(await Fz.e.getReplay(yU, XU, zU)),
        segmentUrls: {
          load: async UU => (await Fz.e.getReplaySegmentUrls(yU, XU, zU, UU, [])).videoSegments,
          maxSequences: OU.c
        },
        telemetryUrls: {
          load: async UU => (await Fz.e.getReplaySegmentUrls(yU, XU, zU, [], UU)).telemetrySegments,
          maxSequences: OU.j
        }
      })), [XU, zU]);
      return (0, cU.useEffect)((() => {
        let UU = !1;
        return oU({
          status: "loading"
        }), (0, wU.G)({
          getReplay: () => Fz.e.getReplay(yU, XU, zU),
          loadDomEvents: wU.B,
          onPreparing: () => {
            oU({
              status: "preparing"
            })
          },
          wait: UU => new Promise((XU => {
            setTimeout(XU, UU)
          })),
          isCancelled: () => UU
        }).then((XU => {
          if (!UU && null !== XU) {
            const UU = (0, wU.x)(XU.replay, XU.domEvents, (UU => AU("studio:replayVisit", {
              number: UU
            })));
            oU({
              status: "loaded",
              value: UU
            })
          }
        })).catch((XU => {
          console.error("Failed to load studio replay", XU), UU || oU({
            status: "error",
            message: (0, wU.o)(XU, AU("studio:replayLoadFailed"))
          })
        })), () => {
          UU = !0
        }
      }), [XU, zU, DU]), "loading" === FU.status ? (0, tU.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, tU.jsx)(LU.b, {})
      }) : "preparing" === FU.status ? (0, tU.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, tU.jsx)(LU.b, {}), AU("studio:replayPreparing")]
      }) : "error" === FU.status ? (0, tU.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [FU.message, (0, tU.jsx)(eU.O, {
          onClick: () => {
            EU((UU => UU + 1))
          },
          children: AU("general:tryAgain")
        })]
      }) : (0, tU.jsx)(Az, {
        className: "StudioReplayPlayer",
        data: FU.value,
        labels: YU,
        options: NU,
        autoPlay: QU || DU > 0
      })
    }

    function Ez(UU) {
      let {
        onPlay: XU
      } = UU;
      const {
        t: zU
      } = (0, WU.I)();
      return (0, tU.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": zU("general:play"),
        onClick: XU,
        children: (0, tU.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, tU.jsx)(CU.d, {
            name: "play"
          })
        })
      })
    }
    const Yz = wU.R.replay,
      Nz = wU.R.filters,
      Iz = wU.R.endedAt,
      pz = {
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
      az = {
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

    function tz(UU) {
      let {
        item: XU,
        selected: zU,
        onSelect: cU
      } = UU;
      const {
        t: yU
      } = (0, WU.I)(), AU = (0, wU.s)(XU);
      return (0, tU.jsxs)("button", {
        type: "button",
        className: QU()("StudioReplayListItem", {
          StudioReplayListItemSelected: zU
        }),
        onClick: cU,
        children: [(0, tU.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, tU.jsx)("span", {
            children: (0, wU.m)(XU.startedAtMs)
          }), (0, tU.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: kU(XU.inGameDurationMs)
          })]
        }), AU.length > 0 && (0, tU.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: AU.map((UU => (0, tU.jsx)("span", {
            className: QU()("StudioReplayTag", `StudioReplayTag-${UU}`),
            children: yU(az[UU])
          }, UU)))
        })]
      })
    }

    function gz(UU) {
      let {
        gameAnalyticsId: XU,
        userContext: zU,
        availability: cU
      } = UU;
      const {
        t: yU
      } = (0, WU.I)();
      return "on" === cU ? (0, tU.jsx)(kz, {
        gameAnalyticsId: XU,
        userContext: zU
      }) : "failed" === cU ? (0, tU.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, tU.jsx)(CU.d, {
          name: "face-dizzy"
        }), yU("studio:replaysStartFailed"), (0, tU.jsx)(eU.O, {
          onClick: () => {
            PU.e.startNow()
          },
          children: yU("general:tryAgain")
        })]
      }) : (0, tU.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, tU.jsx)(LU.b, {})
      })
    }

    function kz(UU) {
      var XU, zU;
      let {
        gameAnalyticsId: yU,
        userContext: AU
      } = UU;
      const {
        t: FU
      } = (0, WU.I)(), oU = function(UU, XU) {
        const {
          t: zU
        } = (0, WU.I)(), [yU, QU] = (0, cU.useState)({
          status: "loading"
        });
        return (0, cU.useEffect)((() => {
          let cU = !1;
          return QU({
            status: "loading"
          }), Fz.e.listReplays(XU, UU).then((UU => {
            cU || QU({
              status: "loaded",
              value: UU
            })
          })).catch((UU => {
            console.error("Failed to list studio replays", UU), cU || QU({
              status: "error",
              message: (0, wU.o)(UU, zU("studio:replaysLoadFailed"))
            })
          })), () => {
            cU = !0
          }
        }), [UU]), yU
      }(yU, AU), [DU, EU] = (0, dU.q)(), YU = (0, wU.O)(DU.get(Nz)), NU = (0, wU.N)(DU.get(Iz)), IU = DU.get(Yz), pU = "loaded" === oU.status ? (0, wU.d)(oU.value.recordings, YU, NU) : [], aU = "loaded" === oU.status ? (0, wU.T)(oU.value.recordings, pU, IU) : [], gU = null !== (XU = null !== IU && void 0 !== IU ? IU : null === (zU = aU[0]) || void 0 === zU ? void 0 : zU.recordingId) && void 0 !== XU ? XU : null, [kU, GU] = (0, cU.useState)(IU), [BU, ZU] = (0, cU.useState)(!1), RU = (0, cU.useRef)(null), PU = (0, cU.useRef)(null !== IU), OU = (0, cU.useRef)(null);

      function SU(UU) {
        UU === kU && UU === gU || (OU.current = null, PU.current = !0, ZU(!0), GU(UU), EU((XU => {
          (0, dU.i)(XU, Yz, UU)
        }), {
          push: !0
        }))
      }

      function rU(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        gU !== kU && (OU.current = gU), EU((zU => {
          (0, dU.i)(zU, Yz, gU), (0, dU.i)(zU, Nz, (0, wU.i)(UU)), XU && (0, dU.i)(zU, Iz, null)
        }))
      }
      if ((0, cU.useEffect)((() => {
          null !== IU && IU !== OU.current && GU(IU)
        }), [IU]), (0, cU.useEffect)((() => {
          PU.current && null !== RU.current && (PU.current = !1, RU.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [kU, oU.status]), "loading" === oU.status) return (0, tU.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, tU.jsx)(LU.b, {})
      });
      if ("error" === oU.status) return (0, tU.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, tU.jsx)(CU.d, {
          name: "face-dizzy"
        }), oU.message]
      });
      const {
        recordings: uU,
        dailyQuota: fU
      } = oU.value;
      if (0 === uU.length) return (0, tU.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, tU.jsx)(CU.d, {
          name: "video"
        }), FU(0 === fU ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const iU = wU.Q.filter((UU => uU.some((XU => (0, wU.K)(XU, UU))))),
        HU = gU !== kU;
      return (0, tU.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, tU.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== NU && (0, tU.jsxs)(eU.O, {
            active: !0,
            onClick: () => {
              rU(YU, !0)
            },
            children: [FU("studio:replaysFilterEndedAt", {
              minutes: (0, qU.x)(NU.minute, NU.orLonger ? NU.minute : 1 / 0)
            }), (0, tU.jsx)(CU.d, {
              name: "xmark"
            })]
          }), iU.map((UU => (0, tU.jsx)(eU.O, {
            active: YU.includes(UU),
            onClick: () => {
              ! function(UU) {
                rU(YU.includes(UU) ? YU.filter((XU => XU !== UU)) : [...YU, UU])
              }(UU)
            },
            children: FU(pz[UU])
          }, UU))), fU > 0 && (0, tU.jsx)("span", {
            className: "StudioReplaysQuota",
            children: FU("studio:replaysQuota", {
              count: fU
            })
          })]
        }), (0, tU.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, tU.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === pU.length && (0, tU.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [FU("studio:replaysNoMatch"), (0, tU.jsx)(eU.O, {
                onClick: () => {
                  rU([], !0)
                },
                children: FU("studio:replaysClearFilters")
              })]
            }), aU.map((UU => (0, tU.jsx)(tz, {
              item: UU,
              selected: UU.recordingId === gU,
              onSelect: () => {
                SU(UU.recordingId)
              }
            }, UU.recordingId)))]
          }), null !== gU && (0, tU.jsxs)("div", {
            ref: RU,
            className: QU()("StudioReplayViewer", {
              StudioReplayViewerWaiting: HU
            }),
            children: [!HU && (0, tU.jsx)(Dz, {
              gameAnalyticsId: yU,
              recordingId: gU,
              userContext: AU,
              autoPlay: BU
            }, gU), HU && (0, tU.jsx)(Ez, {
              onPlay: () => {
                SU(gU)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);