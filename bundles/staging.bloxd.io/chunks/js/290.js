export const id = 290;
export const ids = [290];
export const modules = {
  41753: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => Ex
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV);
    const yV = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      pV = 3e3;

    function QV(VV) {
      return VV.down && VV.inPlay && !VV.bound
    }

    function nV(VV, eV) {
      let xV = 0,
        JV = VV.length;
      for (; xV < JV;) {
        const YV = xV + JV >> 1;
        VV[YV].atMs <= eV ? xV = YV + 1 : JV = YV
      }
      return xV - 1
    }

    function wV(VV, eV) {
      return eV[1] - VV[1] || (VV[0] < eV[0] ? -1 : 1)
    }
    const ZV = {
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

    function vV(VV) {
      var eV;
      const xV = ZV[VV];
      if (void 0 !== xV) return xV;
      const JV = null !== (eV = /^(?:Key|Digit)(.)$/.exec(VV)) && void 0 !== eV ? eV : /^Numpad(.+)$/.exec(VV);
      return null !== JV ? VV.startsWith("Numpad") ? `Num ${JV[1]}` : JV[1] : VV
    }
    const rV = 250,
      kV = 60;
    var bV = xV(1321);
    const EV = 6;

    function BV(VV) {
      const eV = Math.max(0, Math.floor(VV / 1e3)),
        xV = Math.floor(eV / 3600),
        JV = Math.floor(eV % 3600 / 60),
        YV = String(eV % 60).padStart(2, "0");
      return xV > 0 ? `${xV}:${String(JV).padStart(2,"0")}:${YV}` : `${JV}:${YV}`
    }

    function jV(VV, eV) {
      return getComputedStyle(VV).getPropertyValue(eV).trim()
    }

    function qV(VV, eV) {
      switch (VV.kind) {
        case "note":
          return VV.label;
        case "hidden":
          return eV.tabHidden;
        default:
          return eV[VV.kind]
      }
    }

    function tV(VV) {
      let {
        draw: eV,
        className: xV
      } = VV;
      const YV = (0, JV.useRef)(null);
      return (0, JV.useEffect)((() => {
        const VV = YV.current,
          xV = VV.getContext("2d");
        if (null === eV || null === xV) return;
        const {
          clientWidth: JV,
          clientHeight: UV
        } = VV, yV = window.devicePixelRatio;
        VV.width = Math.round(JV * yV), VV.height = Math.round(UV * yV), xV.setTransform(yV, 0, 0, yV, 0, 0), eV(xV, JV, UV, VV)
      }), [eV]), (0, bV.jsx)("canvas", {
        ref: YV,
        className: xV
      })
    }

    function FV(VV) {
      let {
        controller: eV,
        frames: xV,
        input: YV,
        markers: UV,
        inactiveRanges: yV,
        videoGaps: nV,
        labels: ZV
      } = VV;
      const {
        timeline: FV
      } = eV, TV = (0, JV.useRef)(null), [PV, AV] = (0, JV.useState)(0), [NV, XV] = (0, JV.useState)(null), MV = (0, JV.useRef)(null), zV = Math.max(1, FV.durationMs);
      ! function(VV, eV, xV) {
        (0, JV.useEffect)((() => {
          let JV = 0,
            YV = NaN;
          const UV = () => {
            var yV;
            JV = requestAnimationFrame(UV);
            const pV = (null !== (yV = eV.current) && void 0 !== yV ? yV : VV.getPositionMs()) / Math.max(1, VV.timeline.durationMs) * 100;
            pV !== YV && (YV = pV, xV.current.style.setProperty("--brv-position", `${pV}%`))
          };
          return UV(), () => {
            cancelAnimationFrame(JV)
          }
        }), [VV])
      }(eV, MV, TV), (0, JV.useEffect)((() => {
        const VV = TV.current,
          eV = new ResizeObserver((() => {
            AV(VV.clientWidth)
          }));
        return eV.observe(VV), () => {
          eV.disconnect()
        }
      }), []);
      const GV = (0, JV.useMemo)((() => 0 === PV ? null : function(VV, eV, xV) {
          const JV = Math.max(1, Math.min(xV, Math.floor(eV.durationMs / rV))),
            YV = eV.durationMs / JV,
            UV = new Array(JV).fill(0);
          for (const yV of VV) eV.contains(yV.atMs) && UV[Math.min(JV - 1, Math.floor(eV.toPosition(yV.atMs) / YV))]++;
          return {
            bucketMs: YV,
            fps: UV.map((VV => 0 === VV ? null : 1e3 * VV / YV))
          }
        }(xV, FV, Math.round(PV))), [xV, FV, PV]),
        WV = eV.lowFps,
        RV = (0, JV.useMemo)((() => null === GV ? null : (VV, eV, xV, JV) => {
          ! function(VV, eV, xV, JV, YV, UV) {
            VV.clearRect(0, 0, xV, JV);
            const yV = xV / eV.fps.length;
            eV.fps.forEach(((eV, xV) => {
              if (null === eV) return;
              const pV = Math.max(1, Math.min(eV, kV) / kV * JV);
              VV.fillStyle = eV < YV ? UV.lowFps : UV.fps, VV.fillRect(xV * yV, JV - pV, Math.max(1, yV), pV)
            }))
          }(VV, GV, eV, xV, WV, {
            fps: jV(JV, "--brv-fps"),
            lowFps: jV(JV, "--brv-low-fps")
          })
        }), [GV, WV]),
        gV = (0, JV.useMemo)((() => {
          if (0 === PV || !YV.inputRecorded) return null;
          const VV = function(VV, eV, xV) {
            const JV = Math.max(1, eV.durationMs) / xV,
              YV = new Array(xV).fill(0),
              UV = new Array(xV).fill(0);
            for (const yV of VV) {
              if (!yV.down || !eV.contains(yV.atMs)) continue;
              const VV = Math.min(xV - 1, Math.floor(eV.toPosition(yV.atMs) / JV));
              YV[VV]++, QV(yV) && UV[VV]++
            }
            return {
              presses: YV,
              unbound: UV
            }
          }(YV.keys, FV, Math.max(1, Math.round(PV)));
          return (eV, xV, JV, YV) => {
            ! function(VV, eV, xV, JV, YV) {
              VV.clearRect(0, 0, xV, JV);
              const UV = xV / eV.presses.length;
              eV.presses.forEach(((xV, yV) => {
                if (0 === xV) return;
                const pV = eV.unbound[yV] > 0;
                VV.globalAlpha = pV ? 1 : Math.min(1, .35 + .15 * xV), VV.fillStyle = pV ? YV.unbound : YV.presses, VV.fillRect(yV * UV, 0, Math.max(pV ? 2 : 1, UV), JV)
              })), VV.globalAlpha = 1
            }(eV, VV, xV, JV, {
              presses: jV(YV, "--brv-key-press"),
              unbound: jV(YV, "--brv-key-unbound")
            })
          }
        }), [YV, FV, PV]),
        DV = (0, JV.useMemo)((() => function(VV) {
          const eV = [];
          for (const JV of VV) {
            var xV;
            if (!QV(JV)) continue;
            let VV = eV.at(-1);
            (void 0 === VV || JV.atMs - VV.endMs > pV) && (VV = {
              startMs: JV.atMs,
              endMs: JV.atMs,
              counts: new Map
            }, eV.push(VV)), VV.endMs = JV.atMs, VV.counts.set(JV.code, (null !== (xV = VV.counts.get(JV.code)) && void 0 !== xV ? xV : 0) + 1)
          }
          return eV.map((VV => {
            let {
              startMs: eV,
              endMs: xV,
              counts: JV
            } = VV;
            return {
              startMs: eV,
              endMs: xV,
              keys: [...JV].sort(wV)
            }
          }))
        }(YV.keys.filter((VV => FV.contains(VV.atMs))))), [YV.keys, FV]),
        iV = VV => FV.toPosition(VV) / zV * 100,
        CV = VV => iV(VV) / 100 * PV,
        aV = VV => {
          const eV = TV.current.getBoundingClientRect();
          return {
            px: VV - eV.left,
            positionMs: Math.max(0, Math.min(eV.width, VV - eV.left)) / eV.width * zV
          }
        },
        oV = null === NV || 0 === PV ? null : {
          px: NV,
          positionMs: Math.max(0, Math.min(PV, NV)) / PV * zV
        },
        cV = null === oV || null === GV ? null : function(VV, eV) {
          const xV = Math.max(0, Math.min(VV.fps.length - 1, Math.floor(eV / VV.bucketMs))),
            JV = VV.fps[xV];
          return null === JV ? null : Math.round(JV)
        }(GV, oV.positionMs),
        hV = null !== oV && nV.some((VV => oV.px >= CV(VV.startMs) && oV.px < CV(VV.endMs))),
        lV = null === oV ? void 0 : UV.find((VV => {
          var eV;
          return oV.px >= CV(VV.atMs) - EV && oV.px <= CV(null !== (eV = VV.endMs) && void 0 !== eV ? eV : VV.atMs) + EV
        })),
        LV = null === oV ? void 0 : DV.find((VV => oV.px >= CV(VV.startMs) - EV && oV.px <= CV(VV.endMs) + EV));
      return (0, bV.jsxs)("div", {
        ref: TV,
        className: YV.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: VV => {
          VV.currentTarget.setPointerCapture(VV.pointerId);
          const eV = aV(VV.clientX);
          XV(eV.px), MV.current = eV.positionMs
        },
        onPointerMove: VV => {
          const eV = aV(VV.clientX);
          XV(eV.px), null !== MV.current && (MV.current = eV.positionMs)
        },
        onPointerUp: VV => {
          null !== MV.current && (eV.seekToPosition(aV(VV.clientX).positionMs), MV.current = null)
        },
        onPointerCancel: () => {
          MV.current = null, XV(null)
        },
        onPointerLeave: () => {
          XV(null)
        },
        children: [(0, bV.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, bV.jsx)(tV, {
            draw: RV,
            className: "brv-seekbar-canvas"
          }), yV.map((VV => {
            const eV = iV(VV.startMs);
            return (0, bV.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${eV}%`,
                width: iV(VV.endMs) - eV + "%"
              }
            }, VV.startMs)
          })), nV.map((VV => {
            const eV = iV(VV.startMs);
            return (0, bV.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${eV}%`,
                width: iV(VV.endMs) - eV + "%"
              }
            }, VV.startMs)
          })), (0, bV.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== oV && (0, bV.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: oV.px
            }
          })]
        }), YV.inputRecorded && (0, bV.jsx)(tV, {
          draw: gV,
          className: "brv-seekbar-input"
        }), (0, bV.jsx)("div", {
          className: "brv-seekbar-markers",
          children: UV.map(((VV, eV) => {
            var xV;
            const JV = iV(VV.atMs),
              YV = void 0 !== VV.endMs;
            return (0, bV.jsx)("div", {
              className: `brv-marker brv-marker-${VV.kind}${YV?" brv-marker-range":""}`,
              style: {
                left: `${JV}%`,
                width: YV ? iV(null !== (xV = VV.endMs) && void 0 !== xV ? xV : VV.atMs) - JV + "%" : void 0
              }
            }, eV)
          }))
        }), (0, bV.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== oV && (0, bV.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: oV.px
          },
          children: [BV(oV.positionMs), null !== cV && ` \xb7 ${ZV.fps(cV)}`, void 0 !== lV && ` \xb7 ${qV(lV,ZV)}`, hV && ` \xb7 ${ZV.videoGap}`, void 0 !== LV && ` \xb7 ${ZV.unboundKeys((fV=LV.keys,fV.map((VV=>{let[eV,xV]=VV;return xV>1?`${vV(eV)} \xd7${xV}`:vV(eV)})).join(", ")))}`]
        })]
      });
      var fV
    }
    var TV = xV(2596),
      PV = xV(1220),
      AV = xV(5037),
      NV = xV(1408),
      XV = xV(1551),
      MV = xV(1414),
      zV = xV(7072),
      GV = xV(5598),
      WV = xV(5589);
    const RV = [.5, 1, 2, 4, 8, 16];
    var gV = xV(41756);

    function DV(VV) {
      const eV = VV.filter((VV => VV.endMs > VV.startMs)).sort(((VV, eV) => VV.startMs - eV.startMs)),
        xV = [];
      for (const JV of eV) {
        const VV = xV.at(-1);
        void 0 !== VV && JV.startMs <= VV.endMs ? VV.endMs = Math.max(VV.endMs, JV.endMs) : xV.push({
          ...JV
        })
      }
      return xV
    }
    class iV {
      constructor(VV) {
        this.TE = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.TE = DV(VV), this.positionStarts = [];
        let eV = 0;
        for (const xV of this.TE) this.positionStarts.push(eV), eV += xV.endMs - xV.startMs;
        this.durationMs = eV
      }
      get startMs() {
        var VV, eV;
        return null !== (VV = null === (eV = this.TE[0]) || void 0 === eV ? void 0 : eV.startMs) && void 0 !== VV ? VV : 0
      }
      get endMs() {
        var VV, eV;
        return null !== (VV = null === (eV = this.TE.at(-1)) || void 0 === eV ? void 0 : eV.endMs) && void 0 !== VV ? VV : 0
      }
      toPosition(VV) {
        for (let eV = 0; eV < this.TE.length; eV++) {
          const xV = this.TE[eV];
          if (VV < xV.endMs) return this.positionStarts[eV] + Math.max(0, VV - xV.startMs)
        }
        return this.durationMs
      }
      toTime(VV) {
        const eV = Math.max(0, Math.min(this.durationMs, VV));
        for (let xV = this.TE.length - 1; xV >= 0; xV--)
          if (eV >= this.positionStarts[xV]) return this.TE[xV].startMs + (eV - this.positionStarts[xV]);
        return this.startMs
      }
      contains(VV) {
        return this.TE.some((eV => VV >= eV.startMs && VV < eV.endMs))
      }
      nextPlayableTime(VV) {
        for (const eV of this.TE) {
          if (VV < eV.startMs) return eV.startMs;
          if (VV < eV.endMs) return VV
        }
        return null
      }
    }

    function CV(VV) {
      return [...VV].sort(((VV, eV) => VV.startMs - eV.startMs))
    }

    function aV(VV, eV) {
      let xV = 1 / 0,
        JV = -1 / 0;
      const YV = VV => {
        xV = Math.min(xV, VV), JV = Math.max(JV, VV)
      };
      for (const UV of [...VV.videoSegments, ...VV.telemetryChunks]) YV(UV.startMs), YV(UV.endMs);
      for (const UV of VV.domEvents) YV(eV.toEpoch(UV.timestamp));
      return xV < JV ? {
        startMs: xV,
        endMs: JV
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class oV {
      constructor(VV, eV) {
        this.wallNowMs = eV, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = VV, this.anchorWallMs = eV()
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
      timeAtWall(VV) {
        return this.playingState ? this.anchorTimeMs + (VV - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(VV) {
        this.anchorTimeMs = VV, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(VV) {
        this.reanchor(), this.speedState = VV
      }
      reanchor() {
        const VV = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(VV), this.anchorWallMs = VV
      }
    }
    const cV = "bloxd-clock";
    class hV {
      constructor(VV) {
        this.samples = void 0, this.samples = [];
        for (const xV of VV) {
          var eV;
          const VV = xV.data;
          xV.type === gV.d.Custom && (null === VV || void 0 === VV ? void 0 : VV.tag) === cV && "number" === typeof(null === (eV = VV.payload) || void 0 === eV ? void 0 : eV.epochMs) && this.samples.push({
            domMs: xV.timestamp,
            offsetMs: VV.payload.epochMs - xV.timestamp
          })
        }
        this.samples.sort(((VV, eV) => VV.domMs - eV.domMs))
      }
      toEpoch(VV) {
        return VV + this.offsetAtDom(VV)
      }
      toDom(VV) {
        return VV - this.offsetAtDom(VV)
      }
      offsetAtDom(VV) {
        var eV, xV;
        let JV = 0,
          YV = this.samples.length - 1;
        for (; JV < YV;) {
          const eV = Math.ceil((JV + YV) / 2);
          this.samples[eV].domMs <= VV ? JV = eV : YV = eV - 1
        }
        return null !== (eV = null === (xV = this.samples[JV]) || void 0 === xV ? void 0 : xV.offsetMs) && void 0 !== eV ? eV : 0
      }
    }
    const lV = new Set([gV.e.MouseMove, gV.e.MouseInteraction, gV.e.Scroll, gV.e.Input, gV.e.TouchMove, gV.e.Drag]),
      LV = "bloxd-active",
      fV = "player_death",
      mV = "error",
      KV = {
        $exception: "error",
        [mV]: "error",
        death: "death",
        [fV]: "death"
      };

    function HV(VV, eV, xV) {
      return function(VV, eV) {
        const xV = [];
        for (const JV of VV) {
          let VV = JV.startMs;
          for (const YV of eV) YV.endMs <= VV || YV.startMs >= JV.endMs || (YV.startMs > VV && xV.push({
            startMs: VV,
            endMs: YV.startMs
          }), VV = Math.max(VV, YV.endMs));
          VV < JV.endMs && xV.push({
            startMs: VV,
            endMs: JV.endMs
          })
        }
        return xV
      }(function(VV) {
        const eV = [];
        for (const xV of VV) {
          const VV = eV.at(-1);
          void 0 !== VV && xV.atMs - VV.endMs <= 5e3 ? VV.endMs = xV.atMs : eV.push({
            startMs: xV.atMs,
            endMs: xV.atMs
          })
        }
        return eV
      }(VV), DV([...eV, ...xV])).filter((VV => VV.endMs - VV.startMs >= 1e3))
    }

    function uV(VV) {
      var eV, xV, JV;
      return VV.type === gV.d.IncrementalSnapshot ? lV.has(null !== (xV = null === (JV = VV.data) || void 0 === JV ? void 0 : JV.source) && void 0 !== xV ? xV : -1) : VV.type === gV.d.Custom && (null === (eV = VV.data) || void 0 === eV ? void 0 : eV.tag) === LV
    }

    function sV(VV, eV) {
      const xV = [];
      for (const yV of VV)
        if (yV.type === gV.d.Custom) {
          var JV;
          const VV = null === (JV = yV.data) || void 0 === JV ? void 0 : JV.tag,
            YV = void 0 === VV ? void 0 : KV[VV];
          void 0 !== YV && xV.push({
            kind: YV,
            atMs: eV.toEpoch(yV.timestamp)
          })
        } else if (yV.type === gV.d.Plugin) {
        var YV, UV;
        const VV = yV.data;
        "rrweb/console@1" !== (null === VV || void 0 === VV ? void 0 : VV.plugin) || "error" !== (null === (YV = VV.payload) || void 0 === YV ? void 0 : YV.level) && "assert" !== (null === (UV = VV.payload) || void 0 === UV ? void 0 : UV.level) || xV.push({
          kind: "error",
          atMs: eV.toEpoch(yV.timestamp)
        })
      }
      return xV
    }
    const SV = 3e6;
    class IV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SV;
        this.fetchUrls = VV, this.onUrls = eV, this.wallNowMs = xV, this.refreshableAfterMs = JV, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = xV()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const VV = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        VV > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), VV) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(VV) {
        this.inFlight = !0;
        const eV = this.wallNowMs();
        this.lastRefreshWallMs = eV;
        let xV = !1;
        VV().then((VV => {
          this.destroyed || (this.urlsFetchedAtWallMs = eV, this.onUrls(VV))
        })).catch((VV => {
          console.error("Failed to refresh the replay's URLs.", VV), xV = !0
        })).finally((() => {
          this.inFlight = !1, xV && this.request()
        }))
      }
    }
    class dV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SV;
        this.source = VV, this.description = eV, this.wallNowMs = xV, this.refreshableAfterMs = JV, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(VV) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const eV = this.wallNowMs();
        for (const xV of VV) this.entries.set(xV.sequence, {
          urls: xV,
          fetchedAtWallMs: eV
        })
      }
      get(VV) {
        const eV = this.getFresh(VV);
        return null !== eV ? eV : null === this.source || this.unavailable.has(VV) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(VV) {
        return null === this.getFresh(VV) && !this.unavailable.has(VV)
      }
      request(VV) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const eV = VV.filter((VV => this.needs(VV)));
        eV.length > 0 && this.fetch(this.source, eV.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(VV) {
        const eV = this.entries.get(VV);
        return void 0 === eV ? null : null === this.source || this.wallNowMs() - eV.fetchedAtWallMs < this.refreshableAfterMs ? eV.urls : null
      }
      fetch(VV, eV) {
        this.inFlight = !0;
        const xV = this.wallNowMs();
        VV.load(eV).then((VV => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const JV = new Set;
          for (const eV of VV) this.entries.set(eV.sequence, {
            urls: eV,
            fetchedAtWallMs: xV
          }), JV.add(eV.sequence);
          for (const xV of eV) JV.has(xV) || (console.warn(`Replay sequence ${xV} has no ${this.description}.`), this.unavailable.add(xV))
        })).catch((VV => {
          console.error(`Failed to fetch the replay's ${this.description}.`, VV), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class OV {
      constructor(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : SV;
        this.load = eV, this.onLoaded = xV, this.onFailed = JV, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = Ve([]), this.hidden = [], this.destroyed = !1, this.chunks = [...VV].sort(((VV, eV) => VV.startMs - eV.startMs)).map((VV => ({
          chunk: VV,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new dV(YV, "telemetry URLs", UV, yV), this.urls.reset(xe(VV))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((VV => "loaded" === VV.status)).length
      }
      update(VV, eV, xV) {
        if (null === this.load || this.destroyed) return;
        const JV = eV.toPosition(VV),
          YV = eV.toTime(JV - 1e4),
          UV = eV.toTime(JV + 6e4 * Math.max(1, xV)),
          yV = eV.toTime(JV + 12e4 * Math.max(1, xV)),
          pV = this.chunks.filter((VV => "idle" === VV.status && VV.chunk.endMs >= YV && VV.chunk.startMs <= yV)).sort(((eV, xV) => Je(VV, eV.chunk) - Je(VV, xV.chunk)));
        this.urls.request(pV.flatMap((VV => {
          var eV;
          let {
            chunk: xV
          } = VV;
          return null !== (eV = xV.sequence) && void 0 !== eV ? eV : []
        })));
        for (const QV of pV) {
          if (this.loading >= 3) return;
          const VV = QV.chunk.startMs <= UV ? this.getUrl(QV.chunk) : null;
          null !== VV && this.startLoad(QV, VV, this.load)
        }
      }
      replaceUrls(VV) {
        this.urls.reset(xe(VV));
        for (const eV of this.chunks) {
          const xV = VV.find((VV => VV.startMs === eV.chunk.startMs && VV.endMs === eV.chunk.endMs));
          void 0 !== xV && (eV.chunk = xV, "failed" === eV.status && (eV.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(VV) {
        var eV;
        if (void 0 === VV.sequence) return null !== (eV = VV.url) && void 0 !== eV ? eV : null;
        const xV = this.urls.get(VV.sequence);
        return "string" === typeof xV ? null : xV.url
      }
      startLoad(VV, eV, xV) {
        VV.status = "loading", VV.attempts++, this.loading++, xV(eV).then((eV => {
          this.destroyed || (VV.status = "loaded", VV.telemetry = eV, this.merge(), this.onLoaded())
        })).catch((eV => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${VV.chunk.startMs}-${VV.chunk.endMs}.`, eV), VV.status = VV.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const VV = [];
        let eV = !1;
        for (const JV of this.chunks) {
          const xV = VV.at(-1);
          if (null === JV.telemetry) {
            eV = !1;
            continue
          }
          const YV = ee(JV.telemetry, JV.chunk);
          void 0 !== xV && eV && JV.chunk.startMs <= xV.endMs + 1e3 ? (xV.telemetry.push(YV), xV.endMs = JV.chunk.endMs) : (VV.push({
            telemetry: [YV],
            endMs: JV.chunk.endMs
          }), eV = !0)
        }
        const xV = VV.map((VV => function(VV, eV) {
          const xV = VV.actions.at(-1);
          if (void 0 === xV || 0 === xV.bits) return VV;
          return {
            ...VV,
            actions: [...VV.actions, {
              atMs: eV,
              bits: 0
            }]
          }
        }(Ve(VV.telemetry), VV.endMs)));
        this.merged = Ve(xV), this.hidden = xV.flatMap(((eV, xV) => function(VV, eV) {
          const xV = [];
          let JV = null;
          for (const {
              atMs: YV,
              event: UV
            }
            of VV.events) "hidden" === UV && null === JV ? JV = YV : "visible" === UV && null !== JV && (xV.push({
            startMs: JV,
            endMs: YV
          }), JV = null);
          return null !== JV && xV.push({
            startMs: JV,
            endMs: eV
          }), DV(xV)
        }(eV, VV[xV].endMs)))
      }
    }

    function Ve(VV) {
      return {
        inputRecorded: VV.some((VV => VV.keys.length > 0)),
        frames: VV.flatMap((VV => VV.frames)),
        states: VV.flatMap((VV => VV.states)),
        events: VV.flatMap((VV => VV.events)),
        actions: VV.flatMap((VV => VV.actions)),
        keys: VV.flatMap((VV => VV.keys))
      }
    }

    function ee(VV, eV) {
      const {
        actions: xV
      } = VV;
      return !VV.inputRecorded || xV.length > 0 && xV[0].atMs <= eV.startMs + 1 ? VV : {
        ...VV,
        actions: [{
          atMs: eV.startMs,
          bits: 0
        }, ...xV]
      }
    }

    function xe(VV) {
      return VV.flatMap((VV => {
        let {
          sequence: eV,
          url: xV
        } = VV;
        return void 0 === eV || void 0 === xV ? [] : [{
          sequence: eV,
          url: xV
        }]
      }))
    }

    function Je(VV, eV) {
      return VV < eV.startMs ? eV.startMs - VV : VV > eV.endMs ? 2 * (VV - eV.endMs) : 0
    }
    class Ye {
      constructor(VV, eV, xV, JV) {
        this.data = VV, this.domClock = eV, this.timeline = xV, this.options = JV, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(VV, eV) {
          return VV.filter(uV).map((VV => eV.toEpoch(VV.timestamp)))
        }(VV.domEvents, eV), this.telemetry = new OV(VV.telemetryChunks, JV.loadTelemetryChunk, (() => {
          this.rebuild()
        }), JV.onTelemetryFailed, JV.telemetryUrls), this.rebuild()
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
      update(VV, eV) {
        this.telemetry.update(VV, this.timeline, eV)
      }
      replaceTelemetryUrls(VV) {
        this.telemetry.replaceUrls(VV)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(VV) {
        return this.telemetry.hiddenRanges.some(Ue(VV))
      }
      isVideoGapAt(VV) {
        return this.videoGapRanges.some(Ue(VV))
      }
      rebuild() {
        const VV = this.telemetry.telemetry,
          eV = this.telemetry.hiddenRanges;
        this.videoGapRanges = HV(VV.frames, this.data.videoSegments, eV), this.inactiveRangeList = function(VV, eV, xV, JV) {
          const YV = [...eV];
          if (VV.length > 0) {
            const eV = [xV.startMs, ...VV, xV.endMs];
            for (let VV = 1; VV < eV.length; VV++) {
              const xV = eV[VV - 1],
                UV = eV[VV] - 1e3;
              UV - xV >= JV && YV.push({
                startMs: xV,
                endMs: UV
              })
            }
          }
          return DV(YV).filter((VV => VV.endMs - VV.startMs >= JV))
        }(this.activityTimes, eV, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(VV) {
          const {
            timeline: eV
          } = VV;
          return [...sV(VV.domEvents, VV.domClock), ...VV.telemetry.events.filter((VV => {
            let {
              event: eV
            } = VV;
            return "contextLost" === eV
          })).map((VV => {
            let {
              atMs: eV
            } = VV;
            return {
              kind: "graphicsCrash",
              atMs: eV
            }
          })), ...VV.hidden.map((VV => ({
            kind: "hidden",
            atMs: VV.startMs,
            endMs: VV.endMs
          }))), ...VV.extraMarkers].filter((VV => VV.atMs >= eV.startMs && VV.atMs <= eV.endMs && (eV.contains(VV.atMs) || eV.contains(VV.atMs - 1)))).sort(((VV, eV) => VV.atMs - eV.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: VV,
          extraMarkers: this.data.markers,
          hidden: eV,
          timeline: this.timeline
        })
      }
    }

    function Ue(VV) {
      return eV => VV >= eV.startMs && VV < eV.endMs
    }
    const ye = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      pe = new Set(["srcset", "imagesrcset"]),
      Qe = new Set(["to", "from", "by", "values"]),
      ne = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      we = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      Ze = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      ve = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      re = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      ke = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      be = /^data:image\/(?!svg)/i,
      Ee = "about:invalid";

    function Be(VV, eV) {
      let {
        hosts: xV
      } = eV, JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const YV = VV.trim();
      if (/[\\\u0000-\u001f]/.test(YV)) return !1;
      if (!ke.test(YV)) return !0;
      let UV;
      try {
        UV = new URL(YV.startsWith("//") ? `https:${YV}` : YV)
      } catch {
        return !1
      }
      return "data:" === UV.protocol ? JV ? "text/css" !== YV.slice(5).split(/[,;]/)[0].trim().toLowerCase() : be.test(YV) : "blob:" === UV.protocol || ("http:" === UV.protocol || "https:" === UV.protocol) && xV.some((VV => UV.hostname === VV || UV.hostname.endsWith(`.${VV}`)))
    }

    function je(VV, eV) {
      return VV.replace(we, (function(VV) {
        for (var xV = arguments.length, JV = new Array(xV > 1 ? xV - 1 : 0), YV = 1; YV < xV; YV++) JV[YV - 1] = arguments[YV];
        if (Be(JV.slice(0, 7).find((VV => "string" === typeof VV)), eV, !0)) return VV;
        const UV = VV.slice(0, 4).toLowerCase();
        return "url(" === UV ? `url("${Ee}")` : "@imp" === UV ? `@import "${Ee}"` : `"${Ee}"`
      }))
    }

    function qe(VV) {
      return re.test(VV.replace(we, '""'))
    }

    function te(VV) {
      let eV = "between";
      for (let xV = 0; xV < VV.length; xV++) {
        const JV = VV[xV];
        if ("/" === JV && "*" === VV[xV + 1]) {
          if (xV = VV.indexOf("*/", xV + 2), -1 === xV) return "open";
          xV++, eV = "between"
        } else if ('"' === JV || "'" === JV) {
          for (xV++; xV < VV.length && VV[xV] !== JV && !/[\n\r\f]/.test(VV[xV]); xV++) "\\" === VV[xV] && xV++;
          if (xV >= VV.length) return "open";
          eV = "token"
        } else "\\" === JV ? (xV++, eV = "token") : ";" === JV || "{" === JV || "}" === JV ? eV = "between" : /\s/.test(JV) || (eV = "token")
      }
      return eV
    }

    function Fe(VV, eV) {
      const xV = je(VV, eV);
      if (qe(xV) || "open" === te(xV)) return "";
      if (!xV.includes("\\")) return xV;
      const JV = function(VV) {
        return VV.replace(ve, ((VV, eV, xV) => void 0 !== eV ? String.fromCodePoint(Math.min(parseInt(eV, 16), 1114111)) : null !== xV && void 0 !== xV ? xV : ""))
      }(xV);
      return je(JV, eV) !== JV || qe(JV) ? "" : xV
    }

    function Te(VV, eV) {
      const xV = Ze.test(VV) ? Fe(VV, eV) : VV;
      return xV.split("/* rr_split */").every((VV => "between" === te(VV))) ? xV : ""
    }

    function Pe(VV, eV, xV) {
      if ("string" === typeof eV) {
        const JV = VV.toLowerCase();
        if (ne.has(JV)) return null;
        if (pe.has(JV)) return function(VV, eV) {
          return VV.split(",").every((VV => {
            const xV = VV.trim().split(/\s+/)[0];
            return void 0 === xV || "" === xV || Be(xV, eV)
          }))
        }(eV, xV) ? eV : null;
        if (Qe.has(JV)) {
          return eV.split(";").every((VV => Be(VV, xV))) ? Pe("", eV, xV) : null
        }
        return ye.has(JV) ? Be(eV, xV) ? eV : null : "_csstext" === JV ? Te(eV, xV) : Ze.test(eV) ? Fe(eV, xV) : eV
      }
      if (Array.isArray(eV)) return eV.map((VV => Pe("", VV, xV)));
      if (null !== eV && "object" === typeof eV) {
        const JV = "style" === VV.toLowerCase(),
          YV = {};
        for (const [VV, yV] of Object.entries(eV)) YV[VV] = Pe(JV ? "" : VV, yV, xV);
        const {
          id: UV
        } = YV;
        if ("number" === typeof UV && xV.styleTextIds.has(UV))
          for (const VV of ["textContent", "value"]) {
            const eV = YV[VV];
            "string" === typeof eV && (YV[VV] = Te(eV, xV))
          }
        return YV
      }
      return eV
    }

    function Ae(VV) {
      const eV = new Set,
        xV = [],
        JV = (VV, YV) => {
          if (null === VV || "object" !== typeof VV) return;
          const {
            id: UV,
            tagName: yV,
            childNodes: pV
          } = VV;
          if ("number" === typeof UV && ("string" === typeof yV && "style" === yV.toLowerCase() && eV.add(UV), xV.push({
              id: UV,
              parentId: YV
            }), Array.isArray(pV)))
            for (const eV of pV) JV(eV, UV)
        };
      for (const UV of VV) {
        const VV = UV.data;
        if (UV.type === gV.d.FullSnapshot) JV(null === VV || void 0 === VV ? void 0 : VV.node, null);
        else if (UV.type === gV.d.IncrementalSnapshot && Array.isArray(null === VV || void 0 === VV ? void 0 : VV.adds))
          for (const eV of VV.adds) JV(null === eV || void 0 === eV ? void 0 : eV.node, null === eV || void 0 === eV ? void 0 : eV.parentId)
      }
      const YV = new Set;
      for (const {
          id: UV,
          parentId: yV
        }
        of xV) "number" === typeof yV && eV.has(yV) && YV.add(UV);
      return YV
    }
    const Ne = "brv-styles",
      Xe = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      Me = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${Xe.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class ze {
      static create(VV, eV, xV, JV, YV, UV, yV) {
        return eV.some((VV => VV.type === gV.d.FullSnapshot)) ? new ze(VV, function(VV, eV) {
          const xV = {
            hosts: eV,
            styleTextIds: Ae(VV)
          };
          return VV.map((VV => VV.type === gV.d.Meta ? VV : {
            ...VV,
            data: Pe("data", VV.data, xV)
          }))
        }(eV, YV), xV, JV, UV, yV) : null
      }
      constructor(VV, eV, xV, JV, YV, UV) {
        var yV, pV, QV, nV;
        this.domClock = xV, this.canvasSelectors = JV, this.videoLayer = YV, this.replayer = void 0, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (yV = null === (pV = eV[0]) || void 0 === pV ? void 0 : pV.timestamp) && void 0 !== yV ? yV : 0, this.lastDomMs = null !== (QV = null === (nV = eV.at(-1)) || void 0 === nV ? void 0 : nV.timestamp) && void 0 !== QV ? QV : 0, this.replayer = new gV.g(eV, {
          root: VV,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          insertStyleRules: Xe
        }), this.replayer.on("resize", (VV => {
          const {
            width: eV,
            height: xV
          } = VV;
          UV({
            width: eV,
            height: xV
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect()
        }))
      }
      sync(VV, eV) {
        const xV = this.domOffsetAt(VV);
        eV ? this.replayer.play(xV) : this.replayer.pause(xV), this.lastDomCheckMs = performance.now()
      }
      update(VV, eV, xV) {
        xV - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = xV, this.placeVideoOverCanvas()), eV && xV - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = xV, this.checkDrift(VV))
      }
      setSpeed(VV) {
        this.replayer.setConfig({
          speed: VV
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(VV) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(VV)) - this.firstDomMs)
      }
      checkDrift(VV) {
        const eV = this.domOffsetAt(VV);
        eV >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - eV) > 400 && this.replayer.play(eV)
      }
      placeVideoOverCanvas() {
        const VV = this.replayer.iframe.contentDocument,
          eV = null === VV ? null : function(VV, eV) {
            for (const xV of eV) {
              const eV = VV.querySelector(xV);
              if (null !== eV) return eV
            }
            return null
          }(VV, this.canvasSelectors),
          xV = this.videoLayer.element;
        null !== eV ? (xV.previousSibling !== eV && eV.after(xV), xV.style.display = "", xV.style.left = `${eV.offsetLeft}px`, xV.style.top = `${eV.offsetTop}px`, xV.style.width = `${eV.offsetWidth}px`, xV.style.height = `${eV.offsetHeight}px`) : xV.style.display = "none"
      }
    }
    const Ge = {
      width: 1280,
      height: 720
    };
    class We {
      constructor(VV, eV) {
        this.root = VV, this.onViewportChanged = eV, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", VV.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(VV)
      }
      setViewport(VV) {
        var eV;
        null === VV || VV.width <= 0 || VV.height <= 0 || VV.width === (null === (eV = this.viewport) || void 0 === eV ? void 0 : eV.width) && VV.height === this.viewport.height || (this.viewport = VV, this.element.style.width = `${VV.width}px`, this.element.style.height = `${VV.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var VV;
        const eV = null !== (VV = this.viewport) && void 0 !== VV ? VV : Ge,
          xV = this.root.getBoundingClientRect(),
          JV = Math.min(xV.width / eV.width, xV.height / eV.height),
          YV = (xV.width - eV.width * JV) / 2,
          UV = (xV.height - eV.height * JV) / 2;
        this.element.style.transform = `translate(${YV}px, ${UV}px) scale(${JV})`
      }
    }
    class Re {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SV;
        this.urls = void 0, this.urls = new dV(VV, "video URLs", eV, xV)
      }
      reset(VV) {
        this.urls.reset(VV.flatMap((VV => {
          var eV;
          return null !== (eV = function(VV) {
            return "url" in VV ? null === VV.url ? null : {
              sequence: VV.sequence,
              url: VV.url
            } : void 0 === VV.partUrls ? null : {
              sequence: VV.sequence,
              partUrls: VV.partUrls
            }
          }(VV)) && void 0 !== eV ? eV : []
        })))
      }
      get(VV) {
        return this.urls.get(VV)
      }
      update(VV, eV, xV) {
        this.urls.request(function(VV, eV, xV, JV) {
          return VV.filter((VV => VV.endMs > eV && VV.startMs < eV + xV && JV(VV.sequence))).map((VV => VV.sequence))
        }(VV, eV, 12e4 * Math.max(1, xV), (VV => this.urls.needs(VV))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function ge(VV, eV, xV) {
      const JV = [];
      let YV = VV.length,
        UV = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, VV.length)
      }, (() => (async () => {
        for (; UV < YV;) {
          const pV = UV++;
          try {
            JV[pV] = await eV(VV[pV], xV)
          } catch (yV) {
            if (xV.aborted) throw yV;
            console.warn(`Replay video part ${pV} failed to load; playing the parts before it.`, yV), YV = Math.min(YV, pV)
          }
        }
      })()))), JV.slice(0, YV)
    }

    function De(VV) {
      const eV = [];
      let xV = 0;
      for (const wV of VV) eV.push(xV), xV += wV.byteLength;
      let JV = 0;
      const YV = xV => {
          for (; eV[JV] > xV;) JV--;
          for (; JV + 1 < eV.length && eV[JV + 1] <= xV;) JV++;
          return VV[JV][xV - eV[JV]]
        },
        UV = VV => YV(VV) * 2 ** 24 + 65536 * YV(VV + 1) + 256 * YV(VV + 2) + YV(VV + 3);
      let yV = 0,
        pV = !1,
        QV = !1,
        nV = 0;
      for (; yV + 8 <= xV;) {
        const VV = String.fromCharCode(YV(yV + 4), YV(yV + 5), YV(yV + 6), YV(yV + 7));
        let eV = UV(yV);
        if (1 === eV) {
          if (yV + 16 > xV) break;
          eV = UV(yV + 8) * 2 ** 32 + UV(yV + 12)
        } else 0 === eV && (eV = xV - yV);
        if (eV < 8 || yV + eV > xV) break;
        yV += eV, "moov" === VV ? pV = !0 : "moof" === VV ? QV = !0 : "mdat" === VV && QV ? (QV = !1, nV = yV) : !QV && nV > 0 && (nV = yV)
      }
      return pV && nV > 0 ? nV : null
    }
    async function ie(VV, eV) {
      const xV = await fetch(VV, {
        signal: eV
      });
      if (!xV.ok) throw new Error(`HTTP ${xV.status}`);
      return xV.arrayBuffer()
    }
    class Ce {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = VV, this.Jv = eV, this.blobs = new Map
      }
      get(VV, eV) {
        const xV = ae(VV, eV),
          JV = this.blobs.get(xV);
        return void 0 === JV ? null : (this.remember(xV, JV), JV)
      }
      async load(VV, eV, xV) {
        const JV = await ge(eV, this.fetchPart, xV),
          YV = function(VV) {
            const eV = VV.map((VV => new Uint8Array(VV))),
              xV = De(eV);
            return null === xV ? null : new Blob(function(VV, eV) {
              const xV = [];
              let JV = eV;
              for (const YV of VV) {
                if (JV <= 0) break;
                xV.push(YV.byteLength <= JV ? YV : YV.subarray(0, JV)), JV -= YV.byteLength
              }
              return xV
            }(eV, xV), {
              type: "video/mp4"
            })
          }(JV);
        return null !== YV && JV.length === eV.length && this.remember(ae(VV, eV.length), YV), YV
      }
      remember(VV, eV) {
        this.blobs.delete(VV), this.blobs.set(VV, eV), this.blobs.size > this.Jv && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function ae(VV, eV) {
      return `${VV}/${eV}`
    }

    function oe(VV) {
      const eV = function(VV) {
        return VV.map(((eV, xV) => {
          const JV = VV[xV + 1];
          return void 0 === JV ? eV.endMs : Math.min(eV.endMs, JV.startMs)
        }))
      }(VV);
      return VV.map(((VV, xV) => ({
        ...VV,
        endMs: eV[xV]
      }))).filter((VV => VV.endMs > VV.startMs))
    }

    function ce(VV, eV) {
      let xV = 0,
        JV = VV.length - 1;
      for (; xV <= JV;) {
        const YV = xV + JV >> 1,
          UV = VV[YV];
        if (eV < UV.startMs) JV = YV - 1;
        else {
          if (!(eV >= UV.endMs)) return UV;
          xV = YV + 1
        }
      }
      return null
    }

    function he(VV, eV) {
      return (eV - VV.startMs) / 1e3
    }

    function le(VV) {
      return Math.max(.4, .1 * VV)
    }

    function Le(VV) {
      return Math.max(.0625, Math.min(16, VV))
    }
    class fe {
      constructor(VV, eV, xV, JV, YV, UV, yV) {
        this.still = eV, this.clock = xV, this.frameDurationS = JV, this.wallNowMs = YV, this.onLoadFailed = yV, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new Ce, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = oe(VV), this.segmentUrls = new Re(UV), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(VV) {
        var eV, xV;
        const JV = null !== (eV = null !== (xV = ce(this.segments, VV)) && void 0 !== xV ? xV : this.segments.find((eV => eV.startMs > VV))) && void 0 !== eV ? eV : this.segments.at(-1);
        return void 0 === JV ? null : {
          width: JV.width,
          height: JV.height
        }
      }
      failedAt(VV) {
        const eV = ce(this.segments, VV);
        return null !== eV && this.failed.has(eV.sequence)
      }
      replaceSegments(VV, eV) {
        for (const xV of this.slots.values()) this.release(xV);
        this.slots.clear(), this.failed.clear(), this.segments = oe(VV), this.segmentUrls.reset(this.segments), this.still = eV
      }
      update(VV) {
        var eV, xV;
        this.segmentUrls.update(this.segments, VV, this.clock.speed);
        const JV = ce(this.segments, VV),
          YV = function(VV, eV) {
            const xV = VV.find((VV => VV.startMs > eV));
            return void 0 === xV ? null : xV.startMs - eV <= ("parts" in xV ? 15e3 : 8e3) ? xV : null
          }(this.segments, VV);
        this.evictExcept([JV, YV, null !== (eV = null === (xV = this.shown) || void 0 === xV ? void 0 : xV.segment) && void 0 !== eV ? eV : null]), null !== YV && this.getSlot(YV), this.showStill(null === JV ? function(VV, eV, xV) {
          if (null === eV) return null;
          const JV = VV.at(-1);
          return void 0 === JV ? xV >= eV.atMs - 1e4 ? eV : null : xV >= JV.endMs && Math.abs(eV.atMs - JV.endMs) <= 1e4 ? eV : null
        }(this.segments, this.still, VV) : null);
        const UV = null === JV ? null : this.getSlot(JV);
        if (null !== UV) {
          this.sync(UV, he(UV.segment, VV)), UV.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !UV.video.seeking && this.show(UV);
          for (const VV of this.slots.values()) VV === UV || VV.video.paused || VV.video.pause()
        } else {
          null === JV && this.show(null);
          for (const VV of this.slots.values()) VV.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: VV,
          sumAbsDriftMs: eV,
          maxAbsDriftMs: xV,
          withinOneFrame: JV,
          seeks: YV
        } = this.stats;
        return {
          frames: VV,
          meanAbsDriftMs: 0 === VV ? 0 : eV / VV,
          maxAbsDriftMs: xV,
          withinOneFrame: 0 === VV ? 1 : JV / VV,
          seeks: YV
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
        for (const VV of this.slots.values()) this.release(VV);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(VV, eV) {
        const {
          video: xV
        } = VV;
        if (xV.seeking) return;
        const {
          playing: JV,
          speed: YV
        } = this.clock, UV = JV && YV < 16, yV = function(VV) {
          let {
            targetS: eV,
            currentS: xV,
            playing: JV,
            speed: YV,
            frameDurationS: UV
          } = VV;
          const yV = xV - eV;
          if (!JV) return Math.abs(yV) > UV / 2 ? {
            kind: "seek",
            mediaTimeS: eV
          } : {
            kind: "none"
          };
          if (Math.abs(yV) > le(YV)) return {
            kind: "seek",
            mediaTimeS: eV
          };
          if (Math.abs(yV) < UV / 4) return {
            kind: "rate",
            playbackRate: Le(YV)
          };
          const pV = YV - yV / .5;
          return {
            kind: "rate",
            playbackRate: Le(Math.max(.5 * YV, Math.min(1.5 * YV, pV)))
          }
        }({
          targetS: eV,
          currentS: xV.currentTime,
          playing: UV,
          speed: YV,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === yV.kind) {
          const eV = this.seekLatencyS * YV,
            pV = JV ? UV ? Math.min(eV, le(YV) / 2) : eV : 0;
          VV.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, UV && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), xV.currentTime = Math.max(0, yV.mediaTimeS + pV)
        } else "rate" === yV.kind && Math.abs(xV.playbackRate - yV.playbackRate) > .001 && (xV.playbackRate = yV.playbackRate);
        UV && xV.paused && xV.currentTime < xV.duration ? (xV.playbackRate = Le(YV), xV.play().catch((VV => {
          console.warn("Replay video refused to play.", VV)
        }))) : UV || xV.paused || xV.pause()
      }
      getSlot(VV) {
        const eV = this.slots.get(VV.sequence);
        if (void 0 !== eV) return eV;
        const xV = "parts" in VV ? this.blobs.get(VV.sequence, VV.parts) : null,
          JV = null === xV ? this.segmentUrls.get(VV.sequence) : null;
        if ("pending" === JV) return null;
        if ("failed" === JV) return this.failed.has(VV.sequence) || (console.error(`Replay video segment ${VV.sequence} has no URLs to load.`), this.markFailed(VV)), null;
        const YV = document.createElement("video");
        YV.className = "brv-video", YV.muted = !0, YV.playsInline = !0, YV.preload = "auto", YV.disablePictureInPicture = !0;
        const UV = {
          segment: VV,
          video: YV,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== xV ? this.playBlob(UV, xV) : null !== JV && ("url" in JV ? YV.src = JV.url : this.loadParts(UV, JV.partUrls)), YV.addEventListener("seeked", (() => {
          if (null !== UV.seekStartedWallMs) {
            const VV = (this.wallNowMs() - UV.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, VV), UV.seekStartedWallMs = null
          }
        })), YV.addEventListener("loadeddata", (() => {
          this.slots.get(VV.sequence) === UV && this.failed.delete(VV.sequence)
        })), YV.addEventListener("error", (() => {
          this.slots.get(VV.sequence) === UV && (console.error(`Replay video segment ${VV.sequence} failed to load.`, YV.error), this.markFailed(VV))
        })), this.watchFrames(UV), this.element.appendChild(YV), this.slots.set(VV.sequence, UV), UV
      }
      loadParts(VV, eV) {
        this.blobs.load(VV.segment.sequence, eV, VV.abort.signal).then((eV => {
          if (this.slots.get(VV.segment.sequence) === VV) return null === eV ? (console.error(`Replay video segment ${VV.segment.sequence} has no playable parts.`), void this.markFailed(VV.segment)) : void this.playBlob(VV, eV)
        }), (eV => {
          this.slots.get(VV.segment.sequence) === VV && (console.error(`Replay video segment ${VV.segment.sequence} failed to load.`, eV), this.markFailed(VV.segment))
        }))
      }
      playBlob(VV, eV) {
        VV.objectUrl = URL.createObjectURL(eV), VV.video.src = VV.objectUrl
      }
      markFailed(VV) {
        this.failed.add(VV.sequence), this.onLoadFailed()
      }
      showStill(VV) {
        const eV = null !== VV && VV.url !== this.failedStillUrl ? VV : null;
        null !== eV && this.stillImage.getAttribute("src") !== eV.url && (this.stillImage.src = eV.url);
        const xV = null !== eV && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        xV !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", xV), this.stillShown = xV)
      }
      show(VV) {
        var eV;
        this.shown !== VV && (null === (eV = this.shown) || void 0 === eV || eV.video.classList.remove("brv-video-shown"), null === VV || void 0 === VV || VV.video.classList.add("brv-video-shown"), this.shown = VV)
      }
      evictExcept(VV) {
        for (const [eV, xV] of this.slots) VV.includes(xV.segment) || (this.release(xV), this.slots.delete(eV))
      }
      release(VV) {
        this.shown === VV && (this.shown = null), VV.abort.abort(), VV.video.pause(), VV.video.removeAttribute("src"), VV.video.load(), VV.video.remove(), null !== VV.objectUrl && URL.revokeObjectURL(VV.objectUrl)
      }
      watchFrames(VV) {
        const {
          video: eV
        } = VV;
        if ("function" !== typeof eV.requestVideoFrameCallback) return;
        const xV = (JV, YV) => {
          if (!this.slots.has(VV.segment.sequence)) return;
          const UV = eV.ownerDocument.defaultView,
            yV = null === UV ? 0 : UV.performance.timeOrigin - performance.timeOrigin,
            pV = he(VV.segment, this.clock.timeAtWall(YV.expectedDisplayTime + yV)),
            QV = this.lastPresented,
            nV = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== QV && QV.slot === VV && nV && this.clock.playing && YV.mediaTime > QV.mediaTimeS) {
            const VV = Math.abs(function(VV, eV, xV) {
              return xV < VV ? 1e3 * (xV - VV) : 1e3 * Math.max(0, xV - eV)
            }(QV.mediaTimeS, YV.mediaTime, QV.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += VV, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, VV), VV <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: VV,
            mediaTimeS: YV.mediaTime,
            clockMediaTimeS: pV
          }, eV.requestVideoFrameCallback(xV)
        };
        eV.requestVideoFrameCallback(xV)
      }
    }
    const me = 1 / 30,
      Ke = ["#noa-canvas", "#noa-container"];
    class He {
      constructor(VV, eV) {
        var xV, JV, YV, UV, yV, pV, QV, nV;
        let wV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.iZ = () => {
          this.frame = requestAnimationFrame(this.iZ);
          const VV = performance.now();
          this.applySkips();
          const eV = this.clock.timeMs();
          this.annotations.update(eV, this.clock.speed), this.videoLayer.update(eV), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(eV)) : this.domLayer.update(eV, this.clock.playing, VV);
          const xV = this.getState();
          (null === this.lastState || function(VV, eV) {
            return Object.keys(VV).some((xV => "positionMs" === xV ? Math.floor(VV.positionMs / 1e3) !== Math.floor(eV.positionMs / 1e3) : VV[xV] !== eV[xV]))
          }(xV, this.lastState)) && this.emitState(xV)
        };
        const ZV = () => performance.now();
        this.lowFps = null !== (xV = wV.lowFps) && void 0 !== xV ? xV : 25;
        const vV = new hV(eV.domEvents);
        this.timeline = new iV(eV.windows.length > 0 ? eV.windows : [aV(eV, vV)]), this.chapters = [...eV.chapters].sort(((VV, eV) => VV.startMs - eV.startMs)), this.annotations = new Ye(eV, vV, this.timeline, {
          inactivityThresholdMs: null !== (JV = wV.inactivityThresholdMs) && void 0 !== JV ? JV : 1e4,
          loadTelemetryChunk: null !== (YV = wV.loadTelemetryChunk) && void 0 !== YV ? YV : null,
          telemetryUrls: null !== (UV = wV.telemetryUrls) && void 0 !== UV ? UV : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new IV(null !== (yV = wV.refreshUrls) && void 0 !== yV ? yV : null, (VV => {
          this.videoLayer.replaceSegments(CV(VV.videoSegments), VV.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(VV.telemetryChunks)
        })), this.clock = new oV(this.timeline.startMs, ZV), this.stage = new We(VV, (() => {
          var VV;
          null === (VV = this.domLayer) || void 0 === VV || VV.invalidateCanvasRect()
        })), this.videoLayer = new fe(CV(eV.videoSegments), eV.still, this.clock, me, ZV, null !== (pV = wV.segmentUrls) && void 0 !== pV ? pV : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = ze.create(this.stage.element, eV.domEvents, vV, null !== (QV = wV.canvasSelectors) && void 0 !== QV ? QV : Ke, null !== (nV = wV.resourceHosts) && void 0 !== nV ? nV : [], this.videoLayer, (VV => {
          this.stage.setViewport(VV)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.iZ()
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
      subscribe(VV) {
        return this.listeners.add(VV), VV(this.getState()), () => {
          this.listeners.delete(VV)
        }
      }
      getState() {
        const VV = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(VV),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(VV),
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
      seekToPosition(VV) {
        this.seekToTime(this.timeline.toTime(VV))
      }
      seekBy(VV) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + VV)
      }
      stepFrame(VV) {
        this.clock.pause(), this.seekBy(VV * me * 1e3)
      }
      setSpeed(VV) {
        var eV;
        this.clock.setSpeed(VV), null === (eV = this.domLayer) || void 0 === eV || eV.setSpeed(VV), this.emit()
      }
      setSkipInactive(VV) {
        this.skipInactive = VV, this.emit()
      }
      goToChapter(VV) {
        const eV = this.clock.timeMs(),
          xV = 1 === VV ? this.chapters.find((VV => VV.startMs > eV + 500)) : this.chapters.findLast((VV => VV.startMs < eV - 2e3));
        void 0 !== xV && this.seekToTime(xV.startMs)
      }
      destroy() {
        var VV;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (VV = this.domLayer) || void 0 === VV || VV.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(VV) {
        return this.annotations.isHiddenAt(VV) ? "tabHidden" : this.videoLayer.failedAt(VV) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(VV) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var VV;
        if (!this.clock.playing) return;
        const eV = this.clock.timeMs(),
          xV = this.timeline.nextPlayableTime(eV);
        if (null === xV) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const JV = this.skipInactive ? this.annotations.inactiveRanges.find((VV => xV >= VV.startMs && xV < VV.endMs - 500)) : void 0,
          YV = null !== (VV = null === JV || void 0 === JV ? void 0 : JV.endMs) && void 0 !== VV ? VV : xV;
        YV !== eV && this.seekToTime(YV)
      }
      seekToTime(VV) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, VV))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var VV;
        null === (VV = this.domLayer) || void 0 === VV || VV.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(VV) {
        this.lastState = VV;
        for (const eV of this.listeners) eV(VV)
      }
    }
    const ue = 2500,
      se = 5;

    function Se(VV) {
      let {
        label: eV,
        hn: xV,
        wide: JV = !1
      } = VV;
      return (0, bV.jsx)("span", {
        className: `brv-key${xV?" brv-key-held":""}${JV?" brv-key-wide":""}`,
        children: eV
      })
    }
    const Ie = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function de(VV) {
      const [eV, xV] = (0, JV.useState)({
        bits: 0,
        presses: []
      });
      return (0, JV.useEffect)((() => {
        let eV = 0,
          JV = "";
        const YV = () => {
          eV = requestAnimationFrame(YV);
          const UV = VV.timeline.toTime(VV.getPositionMs()),
            {
              actions: yV,
              keys: pV
            } = VV.input,
            ZV = function(VV, eV) {
              const xV = nV(VV, eV);
              return xV < 0 ? 0 : VV[xV].bits
            }(yV, UV),
            vV = function(VV, eV, xV, JV) {
              const YV = Math.floor(eV / xV) * xV,
                UV = new Map,
                yV = new Set;
              for (let wV = nV(VV, YV + xV); wV >= 0 && VV[wV].atMs >= YV; wV--) {
                var pV;
                const eV = VV[wV];
                eV.down && eV.inPlay && eV.atMs !== YV + xV && (UV.set(eV.code, (null !== (pV = UV.get(eV.code)) && void 0 !== pV ? pV : 0) + 1), QV(eV) && yV.add(eV.code))
              }
              return [...UV].sort(wV).slice(0, JV).map((VV => {
                let [eV] = VV;
                return {
                  code: eV,
                  unbound: yV.has(eV)
                }
              }))
            }(pV, UV, ue, se),
            rV = `${ZV};${vV.map((VV=>`${VV.code}:${VV.unbound}`)).join(",")}`;
          rV !== JV && (JV = rV, xV({
            bits: ZV,
            presses: vV
          }))
        };
        return YV(), () => {
          cancelAnimationFrame(eV)
        }
      }), [VV]), eV
    }

    function Oe(VV) {
      let {
        controller: eV,
        labels: xV
      } = VV;
      const {
        bits: JV,
        presses: YV
      } = de(eV), UV = VV => function(VV, eV) {
        return 0 !== (VV & 1 << yV.indexOf(eV))
      }(JV, VV);
      return (0, bV.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, bV.jsx)("div", {
          className: "brv-input-slot",
          children: YV.map((VV => {
            const eV = vV(VV.code);
            return (0, bV.jsx)("span", {
              className: VV.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: VV.unbound ? xV.unboundKey(eV) : eV
            }, VV.code)
          }))
        }), (0, bV.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, bV.jsxs)("div", {
            className: "brv-keys",
            children: [(0, bV.jsx)("div", {
              className: "brv-keys-row",
              children: (0, bV.jsx)(Se, {
                label: "W",
                hn: UV("forward")
              })
            }), (0, bV.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, bV.jsx)(Se, {
                label: "A",
                hn: UV("left")
              }), (0, bV.jsx)(Se, {
                label: "S",
                hn: UV("backward")
              }), (0, bV.jsx)(Se, {
                label: "D",
                hn: UV("right")
              })]
            }), (0, bV.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, bV.jsx)(Se, {
                label: "Shift",
                hn: UV("sprint")
              }), (0, bV.jsx)(Se, {
                label: "Ctrl",
                hn: UV("crouch")
              }), (0, bV.jsx)(Se, {
                label: "Space",
                hn: UV("jump"),
                wide: !0
              })]
            })]
          }), (0, bV.jsx)("div", {
            className: "brv-mouse",
            children: Ie.map((VV => {
              let {
                action: eV,
                className: xV
              } = VV;
              return (0, bV.jsx)("span", {
                className: `${xV}${UV(eV)?" brv-key-held":""}`
              }, eV)
            }))
          })]
        })]
      })
    }
    const Vx = {
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
      fps: VV => `${VV} FPS`,
      keys: "Keys",
      unboundKey: VV => `${VV} does nothing here`,
      unboundKeys: VV => `${VV} did nothing`
    };

    function ex(VV) {
      let {
        path: eV
      } = VV;
      return (0, bV.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, bV.jsx)("path", {
          d: eV
        })
      })
    }
    const xx = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function Jx(VV) {
      let {
        label: eV,
        onClick: xV,
        children: JV
      } = VV;
      return (0, bV.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: eV,
        "aria-label": eV,
        onClick: xV,
        children: JV
      })
    }

    function Yx(VV) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === VV ? document.exitFullscreen() : VV.requestFullscreen()).catch((VV => {
        console.warn("Couldn't toggle fullscreen.", VV)
      }))
    }

    function Ux(VV) {
      let {
        data: eV,
        className: xV,
        autoPlay: YV = !1,
        options: UV,
        labels: yV = Vx,
        onController: pV
      } = VV;
      const QV = (0, JV.useRef)(null),
        nV = (0, JV.useRef)(null),
        wV = (0, JV.useRef)(UV);
      wV.current = UV;
      const ZV = (0, JV.useRef)(YV);
      ZV.current = YV;
      const vV = (0, JV.useRef)(pV);
      vV.current = pV;
      const [rV, kV] = (0, JV.useState)(null), [EV, jV] = (0, JV.useState)(null), [qV, tV] = (0, JV.useState)(!0), TV = () => {
        tV((VV => !VV))
      };
      (0, JV.useEffect)((() => {
        var VV;
        ! function(VV) {
          if (null !== VV.getElementById(Ne)) return;
          const eV = VV.createElement("style");
          eV.id = Ne, eV.textContent = Me, VV.head.appendChild(eV)
        }(document);
        const xV = new He(QV.current, eV, wV.current),
          JV = xV.subscribe(jV);
        return kV(xV), null === (VV = vV.current) || void 0 === VV || VV.call(vV, xV), ZV.current && xV.play(), nV.current.focus({
          preventScroll: !0
        }), () => {
          var VV;
          JV(), xV.destroy(), null === (VV = vV.current) || void 0 === VV || VV.call(vV, null)
        }
      }), [eV]);
      const PV = null !== rV && rV.input.inputRecorded,
        AV = null === rV || null === EV ? void 0 : rV.chapters.findLast((VV => rV.timeline.toPosition(VV.startMs) <= EV.positionMs));
      return (0, bV.jsxs)("div", {
        ref: nV,
        className: void 0 === xV ? "brv-player" : `brv-player ${xV}`,
        tabIndex: 0,
        onKeyDown: VV => {
          if (VV.target instanceof HTMLSelectElement) return;
          if (" " === VV.key && VV.target !== VV.currentTarget && VV.target instanceof HTMLButtonElement) return;
          const eV = function(VV) {
            let {
              key: eV,
              shiftKey: xV,
              ctrlKey: JV,
              metaKey: YV,
              altKey: UV
            } = VV;
            if (JV || YV || UV) return null;
            const yV = Number(eV) - 1;
            if (/^[1-9]$/.test(eV) && yV < RV.length) return {
              type: "setSpeed",
              speed: RV[yV]
            };
            switch (eV.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: xV ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: xV ? 1e3 : 5e3
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
                  type: "chapter", direction: xV ? -1 : 1
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
          }(VV);
          null !== eV && null !== rV && null !== EV && (VV.preventDefault(), function(VV, eV, xV, JV) {
            switch (eV.type) {
              case "togglePlay":
                VV.togglePlay();
                break;
              case "seekBy":
                VV.seekBy(eV.deltaMs);
                break;
              case "stepFrame":
                VV.stepFrame(eV.direction);
                break;
              case "setSpeed":
                VV.setSpeed(eV.speed);
                break;
              case "chapter":
                VV.goToChapter(eV.direction);
                break;
              case "toggleSkipInactive":
                VV.setSkipInactive(!xV.skipInactive);
                break;
              case "toggleFullscreen":
                Yx(JV.root);
                break;
              case "toggleKeys":
                JV.toggleKeys()
            }
          }(rV, eV, EV, {
            root: VV.currentTarget,
            toggleKeys: TV
          }))
        },
        children: [(0, bV.jsxs)("div", {
          ref: QV,
          className: "brv-viewport",
          onClick: () => {
            null === rV || void 0 === rV || rV.togglePlay()
          },
          children: [null !== EV && null !== EV.notice && (0, bV.jsx)("div", {
            className: "brv-overlay",
            children: yV[EV.notice]
          }), null !== rV && qV && PV && (0, bV.jsx)(Oe, {
            controller: rV,
            labels: yV
          })]
        }), null !== rV && null !== EV && (0, bV.jsxs)(bV.Fragment, {
          children: [(0, bV.jsx)(FV, {
            controller: rV,
            frames: rV.frames,
            input: rV.input,
            markers: rV.markers,
            inactiveRanges: rV.inactiveRanges,
            videoGaps: rV.videoGaps,
            labels: yV
          }), rV.chapters.length > 1 && (0, bV.jsx)("div", {
            className: "brv-chapters",
            children: rV.chapters.map((VV => (0, bV.jsxs)("button", {
              type: "button",
              className: VV === AV ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                rV.seekToPosition(rV.timeline.toPosition(VV.startMs))
              },
              children: [VV.label, " \xb7 ", BV(VV.endMs - VV.startMs)]
            }, VV.startMs)))
          }), (0, bV.jsxs)("div", {
            className: "brv-controls",
            children: [(0, bV.jsx)(Jx, {
              label: EV.playing ? yV.pause : yV.play,
              onClick: () => {
                rV.togglePlay()
              },
              children: (0, bV.jsx)(ex, {
                path: EV.playing ? xx.pause : xx.play
              })
            }), (0, bV.jsxs)("span", {
              className: "brv-time",
              children: [BV(EV.positionMs), " / ", BV(EV.durationMs)]
            }), (0, bV.jsx)("select", {
              className: "brv-speed",
              value: EV.speed,
              title: `${yV.speed} (1-${RV.length})`,
              "aria-label": yV.speed,
              onChange: VV => {
                rV.setSpeed(Number(VV.target.value))
              },
              children: RV.map((VV => (0, bV.jsxs)("option", {
                value: VV,
                children: [VV, "x"]
              }, VV)))
            }), (0, bV.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": EV.skipInactive,
              title: `${yV.skipInactive} (S)`,
              onClick: () => {
                rV.setSkipInactive(!EV.skipInactive)
              },
              children: [(0, bV.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), yV.skipInactive]
            }), PV && (0, bV.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": qV,
              title: `${yV.keys} (I)`,
              onClick: TV,
              children: [(0, bV.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), yV.keys]
            }), document.fullscreenEnabled && (0, bV.jsx)(Jx, {
              label: yV.fullscreen,
              onClick: () => {
                Yx(nV.current)
              },
              children: (0, bV.jsx)(ex, {
                path: xx.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var yx = xV(5586);
    const px = ["bloxd.io", window.location.hostname];

    function Qx(VV) {
      let {
        gameAnalyticsId: eV,
        recordingId: xV,
        userContext: YV,
        autoPlay: UV
      } = VV;
      const {
        t: yV
      } = (0, PV.A)(), [pV, QV] = (0, JV.useState)({
        status: "loading"
      }), [nV, wV] = (0, JV.useState)(0), ZV = (0, JV.useMemo)((() => function(VV) {
        return {
          play: VV("studio:replayPlay"),
          pause: VV("studio:replayPause"),
          speed: VV("studio:replaySpeed"),
          skipInactive: VV("studio:replaySkipIdle"),
          fullscreen: VV("studio:replayFullscreen"),
          tabHidden: VV("studio:replayTabHidden"),
          videoFailed: VV("studio:replayVideoFailed"),
          nothingToShow: VV("studio:replayNothingToShow"),
          videoGap: VV("studio:replayVideoGap"),
          error: VV("general:error"),
          graphicsCrash: VV("studio:replayMarkerGraphicsCrash"),
          death: VV("studio:replayMarkerDeath"),
          fps: eV => VV("studio:replayFps", {
            fps: eV
          }),
          keys: VV("studio:replayKeys"),
          unboundKey: eV => VV("studio:replayUnboundKey", {
            key: eV
          }),
          unboundKeys: eV => VV("studio:replayUnboundKeys", {
            keys: eV
          })
        }
      }(yV)), [yV]), vV = (0, JV.useMemo)((() => ({
        resourceHosts: px,
        loadTelemetryChunk: zV.A,
        refreshUrls: async () => (0, zV.r)(await yx.b.getReplay(YV, eV, xV)),
        segmentUrls: {
          load: async VV => (await yx.b.getReplaySegmentUrls(YV, eV, xV, VV, [])).videoSegments,
          maxSequences: WV.D
        },
        telemetryUrls: {
          load: async VV => (await yx.b.getReplaySegmentUrls(YV, eV, xV, [], VV)).telemetrySegments,
          maxSequences: WV.I
        }
      })), [eV, xV]);
      return (0, JV.useEffect)((() => {
        let VV = !1;
        return QV({
          status: "loading"
        }), (0, zV.D)({
          getReplay: () => yx.b.getReplay(YV, eV, xV),
          loadDomEvents: zV.w,
          onPreparing: () => {
            QV({
              status: "preparing"
            })
          },
          wait: VV => new Promise((eV => {
            setTimeout(eV, VV)
          })),
          isCancelled: () => VV
        }).then((eV => {
          if (!VV && null !== eV) {
            const VV = (0, zV.t)(eV.replay, eV.domEvents, (VV => yV("studio:replayVisit", {
              number: VV
            })));
            QV({
              status: "loaded",
              value: VV
            })
          }
        })).catch((eV => {
          console.error("Failed to load studio replay", eV), VV || QV({
            status: "error",
            message: (0, zV.l)(eV, yV("studio:replayLoadFailed"))
          })
        })), () => {
          VV = !0
        }
      }), [eV, xV, nV]), "loading" === pV.status ? (0, bV.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, bV.jsx)(NV.d, {})
      }) : "preparing" === pV.status ? (0, bV.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, bV.jsx)(NV.d, {}), yV("studio:replayPreparing")]
      }) : "error" === pV.status ? (0, bV.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [pV.message, (0, bV.jsx)(XV.M, {
          onClick: () => {
            wV((VV => VV + 1))
          },
          children: yV("general:tryAgain")
        })]
      }) : (0, bV.jsx)(Ux, {
        className: "StudioReplayPlayer",
        data: pV.value,
        labels: ZV,
        options: vV,
        autoPlay: UV || nV > 0
      })
    }

    function nx(VV) {
      let {
        onPlay: eV
      } = VV;
      const {
        t: xV
      } = (0, PV.A)();
      return (0, bV.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": xV("general:play"),
        onClick: eV,
        children: (0, bV.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, bV.jsx)(MV.b, {
            name: "play"
          })
        })
      })
    }
    const wx = zV.S.replay,
      Zx = zV.S.filters,
      vx = zV.S.endedAt,
      rx = {
        newPlayers: "studio:replaysFilterNewPlayers",
        quickQuits: "studio:replaysFilterQuickQuits",
        leftAfterDying: "studio:replaysFilterLeftAfterDying",
        lowFps: "studio:replaysFilterLowFps",
        mobile: "studio:replaysFilterMobile",
        errors: "studio:replaysFilterErrors"
      },
      kx = {
        mobile: "studio:replayTagMobile",
        tablet: "studio:replayTagTablet",
        newPlayer: "studio:replayTagNewPlayer",
        leftAfterDying: "studio:replayTagLeftAfterDying",
        lowFps: "studio:replayTagLowFps",
        error: "studio:replayTagError"
      };

    function bx(VV) {
      let {
        item: eV,
        selected: xV,
        onSelect: JV
      } = VV;
      const {
        t: YV
      } = (0, PV.A)(), yV = (0, zV.o)(eV);
      return (0, bV.jsxs)("button", {
        type: "button",
        className: UV()("StudioReplayListItem", {
          StudioReplayListItemSelected: xV
        }),
        onClick: JV,
        children: [(0, bV.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, bV.jsx)("span", {
            children: (0, zV.k)(eV.startedAtMs)
          }), (0, bV.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: BV(eV.inGameDurationMs)
          })]
        }), yV.length > 0 && (0, bV.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: yV.map((VV => (0, bV.jsx)("span", {
            className: UV()("StudioReplayTag", `StudioReplayTag-${VV}`),
            children: YV(kx[VV])
          }, VV)))
        })]
      })
    }

    function Ex(VV) {
      let {
        gameAnalyticsId: eV,
        userContext: xV,
        availability: JV
      } = VV;
      const {
        t: YV
      } = (0, PV.A)();
      return "on" === JV ? (0, bV.jsx)(Bx, {
        gameAnalyticsId: eV,
        userContext: xV
      }) : "failed" === JV ? (0, bV.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, bV.jsx)(MV.b, {
          name: "face-dizzy"
        }), YV("studio:replaysStartFailed"), (0, bV.jsx)(XV.M, {
          onClick: () => {
            TV.e.startNow()
          },
          children: YV("general:tryAgain")
        })]
      }) : (0, bV.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, bV.jsx)(NV.d, {})
      })
    }

    function Bx(VV) {
      var eV, xV;
      let {
        gameAnalyticsId: YV,
        userContext: yV
      } = VV;
      const {
        t: pV
      } = (0, PV.A)(), QV = function(VV, eV) {
        const {
          t: xV
        } = (0, PV.A)(), [YV, UV] = (0, JV.useState)({
          status: "loading"
        });
        return (0, JV.useEffect)((() => {
          let JV = !1;
          return UV({
            status: "loading"
          }), yx.b.listReplays(eV, VV).then((VV => {
            JV || UV({
              status: "loaded",
              value: VV
            })
          })).catch((VV => {
            console.error("Failed to list studio replays", VV), JV || UV({
              status: "error",
              message: (0, zV.l)(VV, xV("studio:replaysLoadFailed"))
            })
          })), () => {
            JV = !0
          }
        }), [VV]), YV
      }(YV, yV), [nV, wV] = (0, AV.n)(), ZV = (0, zV.L)(nV.get(Zx)), vV = (0, zV.K)(nV.get(vx)), rV = nV.get(wx), kV = "loaded" === QV.status ? (0, zV.c)(QV.value.recordings, ZV, vV) : [], EV = "loaded" === QV.status ? (0, zV.V)(QV.value.recordings, kV, rV) : [], BV = null !== (eV = null !== rV && void 0 !== rV ? rV : null === (xV = EV[0]) || void 0 === xV ? void 0 : xV.recordingId) && void 0 !== eV ? eV : null, [jV, qV] = (0, JV.useState)(rV), [tV, FV] = (0, JV.useState)(!1), TV = (0, JV.useRef)(null), WV = (0, JV.useRef)(null !== rV), RV = (0, JV.useRef)(null);

      function gV(VV) {
        VV === jV && VV === BV || (RV.current = null, WV.current = !0, FV(!0), qV(VV), wV((eV => {
          (0, AV.k)(eV, wx, VV)
        }), {
          push: !0
        }))
      }

      function DV(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BV !== jV && (RV.current = BV), wV((xV => {
          (0, AV.k)(xV, wx, BV), (0, AV.k)(xV, Zx, (0, zV.g)(VV)), eV && (0, AV.k)(xV, vx, null)
        }))
      }
      if ((0, JV.useEffect)((() => {
          null !== rV && rV !== RV.current && qV(rV)
        }), [rV]), (0, JV.useEffect)((() => {
          WV.current && null !== TV.current && (WV.current = !1, TV.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [jV, QV.status]), "loading" === QV.status) return (0, bV.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, bV.jsx)(NV.d, {})
      });
      if ("error" === QV.status) return (0, bV.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, bV.jsx)(MV.b, {
          name: "face-dizzy"
        }), QV.message]
      });
      const {
        recordings: iV,
        dailyQuota: CV
      } = QV.value;
      if (0 === iV.length) return (0, bV.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, bV.jsx)(MV.b, {
          name: "video"
        }), pV(0 === CV ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const aV = zV.P.filter((VV => iV.some((eV => (0, zV.G)(eV, VV))))),
        oV = BV !== jV;
      return (0, bV.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, bV.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== vV && (0, bV.jsxs)(XV.M, {
            active: !0,
            onClick: () => {
              DV(ZV, !0)
            },
            children: [pV("studio:replaysFilterEndedAt", {
              minutes: (0, GV.D)(vV.minute, vV.orLonger ? vV.minute : 1 / 0)
            }), (0, bV.jsx)(MV.b, {
              name: "xmark"
            })]
          }), aV.map((VV => (0, bV.jsx)(XV.M, {
            active: ZV.includes(VV),
            onClick: () => {
              ! function(VV) {
                DV(ZV.includes(VV) ? ZV.filter((eV => eV !== VV)) : [...ZV, VV])
              }(VV)
            },
            children: pV(rx[VV])
          }, VV))), CV > 0 && (0, bV.jsx)("span", {
            className: "StudioReplaysQuota",
            children: pV("studio:replaysQuota", {
              count: CV
            })
          })]
        }), (0, bV.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, bV.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === kV.length && (0, bV.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [pV("studio:replaysNoMatch"), (0, bV.jsx)(XV.M, {
                onClick: () => {
                  DV([], !0)
                },
                children: pV("studio:replaysClearFilters")
              })]
            }), EV.map((VV => (0, bV.jsx)(bx, {
              item: VV,
              selected: VV.recordingId === BV,
              onSelect: () => {
                gV(VV.recordingId)
              }
            }, VV.recordingId)))]
          }), null !== BV && (0, bV.jsxs)("div", {
            ref: TV,
            className: UV()("StudioReplayViewer", {
              StudioReplayViewerWaiting: oV
            }),
            children: [!oV && (0, bV.jsx)(Qx, {
              gameAnalyticsId: YV,
              recordingId: BV,
              userContext: yV,
              autoPlay: tV
            }, BV), oV && (0, bV.jsx)(nx, {
              onPlay: () => {
                gV(BV)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);