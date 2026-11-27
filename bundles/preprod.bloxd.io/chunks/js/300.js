export const id = 300;
export const ids = [300];
export const modules = {
  42e3: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => dO
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW);
    const PW = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      LW = 3e3;

    function cW(WW) {
      return WW.down && WW.inPlay && !WW.bound
    }

    function wW(WW, iW) {
      let OW = 0,
        mW = WW.length;
      for (; OW < mW;) {
        const EW = OW + mW >> 1;
        WW[EW].atMs <= iW ? OW = EW + 1 : mW = EW
      }
      return OW - 1
    }

    function tW(WW) {
      let {
        code: iW,
        unbound: OW
      } = WW;
      return `${iW}:${OW}`
    }

    function ZW(WW, iW) {
      return iW[1] - WW[1] || (WW[0] < iW[0] ? -1 : 1)
    }
    const xW = {
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

    function lW(WW) {
      var iW;
      const OW = xW[WW];
      if (void 0 !== OW) return OW;
      const mW = null !== (iW = /^(?:Key|Digit)(.)$/.exec(WW)) && void 0 !== iW ? iW : /^Numpad(.+)$/.exec(WW);
      return null !== mW ? WW.startsWith("Numpad") ? `Num ${mW[1]}` : mW[1] : WW
    }
    const AW = 250,
      bW = 60;
    var jW = OW(1283);
    const UW = 6;

    function kW(WW) {
      const iW = Math.max(0, Math.floor(WW / 1e3)),
        OW = Math.floor(iW / 3600),
        mW = Math.floor(iW % 3600 / 60),
        EW = String(iW % 60).padStart(2, "0");
      return OW > 0 ? `${OW}:${String(mW).padStart(2,"0")}:${EW}` : `${mW}:${EW}`
    }

    function sW(WW, iW) {
      return getComputedStyle(WW).getPropertyValue(iW).trim()
    }

    function MW(WW, iW) {
      switch (WW.kind) {
        case "note":
          return WW.label;
        case "hidden":
          return iW.tabHidden;
        default:
          return iW[WW.kind]
      }
    }

    function KW(WW) {
      let {
        draw: iW,
        className: OW
      } = WW;
      const EW = (0, mW.useRef)(null);
      return (0, mW.useEffect)((() => {
        const WW = EW.current,
          OW = WW.getContext("2d");
        if (null === iW || null === OW) return;
        const {
          clientWidth: mW,
          clientHeight: NW
        } = WW, PW = window.devicePixelRatio;
        WW.width = Math.round(mW * PW), WW.height = Math.round(NW * PW), OW.setTransform(PW, 0, 0, PW, 0, 0), iW(OW, mW, NW, WW)
      }), [iW]), (0, jW.jsx)("canvas", {
        ref: EW,
        className: OW
      })
    }

    function SW(WW) {
      let {
        controller: iW,
        frames: OW,
        input: EW,
        markers: NW,
        inactiveRanges: PW,
        videoGaps: wW,
        labels: tW
      } = WW;
      const {
        timeline: xW
      } = iW, SW = (0, mW.useRef)(null), [YW, yW] = (0, mW.useState)(0), [TW, JW] = (0, mW.useState)(null), hW = (0, mW.useRef)(null), HW = Math.max(1, xW.durationMs);
      ! function(WW, iW, OW) {
        (0, mW.useEffect)((() => {
          let mW = 0,
            EW = NaN;
          const NW = () => {
            var PW;
            mW = requestAnimationFrame(NW);
            const LW = (null !== (PW = iW.current) && void 0 !== PW ? PW : WW.getPositionMs()) / Math.max(1, WW.timeline.durationMs) * 100;
            LW !== EW && (EW = LW, OW.current.style.setProperty("--brv-position", `${LW}%`))
          };
          return NW(), () => {
            cancelAnimationFrame(mW)
          }
        }), [WW])
      }(iW, hW, SW), (0, mW.useEffect)((() => {
        const WW = SW.current,
          iW = new ResizeObserver((() => {
            yW(WW.clientWidth)
          }));
        return iW.observe(WW), () => {
          iW.disconnect()
        }
      }), []);
      const nW = (0, mW.useMemo)((() => 0 === YW ? null : function(WW, iW, OW) {
          const mW = Math.max(1, Math.min(OW, Math.floor(iW.durationMs / AW))),
            EW = iW.durationMs / mW,
            NW = new Array(mW).fill(0);
          for (const PW of WW) iW.contains(PW.atMs) && NW[Math.min(mW - 1, Math.floor(iW.toPosition(PW.atMs) / EW))]++;
          return {
            bucketMs: EW,
            fps: NW.map((WW => 0 === WW ? null : 1e3 * WW / EW))
          }
        }(OW, xW, Math.round(YW))), [OW, xW, YW]),
        uW = iW.lowFps,
        oW = (0, mW.useMemo)((() => null === nW ? null : (WW, iW, OW, mW) => {
          ! function(WW, iW, OW, mW, EW, NW) {
            WW.clearRect(0, 0, OW, mW);
            const PW = OW / iW.fps.length;
            iW.fps.forEach(((iW, OW) => {
              if (null === iW) return;
              const LW = Math.max(1, Math.min(iW, bW) / bW * mW);
              WW.fillStyle = iW < EW ? NW.lowFps : NW.fps, WW.fillRect(OW * PW, mW - LW, Math.max(1, PW), LW)
            }))
          }(WW, nW, iW, OW, uW, {
            fps: sW(mW, "--brv-fps"),
            lowFps: sW(mW, "--brv-low-fps")
          })
        }), [nW, uW]),
        dW = (0, mW.useMemo)((() => {
          if (0 === YW || !EW.inputRecorded) return null;
          const WW = function(WW, iW, OW) {
            const mW = Math.max(1, iW.durationMs) / OW,
              EW = new Array(OW).fill(0),
              NW = new Array(OW).fill(0);
            for (const PW of WW) {
              if (!PW.down || !iW.contains(PW.atMs)) continue;
              const WW = Math.min(OW - 1, Math.floor(iW.toPosition(PW.atMs) / mW));
              EW[WW]++, cW(PW) && NW[WW]++
            }
            return {
              presses: EW,
              unbound: NW
            }
          }(EW.keys, xW, Math.max(1, Math.round(YW)));
          return (iW, OW, mW, EW) => {
            ! function(WW, iW, OW, mW, EW) {
              WW.clearRect(0, 0, OW, mW);
              const NW = OW / iW.presses.length;
              iW.presses.forEach(((OW, PW) => {
                if (0 === OW) return;
                const LW = iW.unbound[PW] > 0;
                WW.globalAlpha = LW ? 1 : Math.min(1, .35 + .15 * OW), WW.fillStyle = LW ? EW.unbound : EW.presses, WW.fillRect(PW * NW, 0, Math.max(LW ? 2 : 1, NW), mW)
              })), WW.globalAlpha = 1
            }(iW, WW, OW, mW, {
              presses: sW(EW, "--brv-key-press"),
              unbound: sW(EW, "--brv-key-unbound")
            })
          }
        }), [EW, xW, YW]),
        eW = (0, mW.useMemo)((() => function(WW) {
          const iW = [];
          for (const mW of WW) {
            var OW;
            if (!cW(mW)) continue;
            let WW = iW.at(-1);
            (void 0 === WW || mW.atMs - WW.endMs > LW) && (WW = {
              startMs: mW.atMs,
              endMs: mW.atMs,
              counts: new Map
            }, iW.push(WW)), WW.endMs = mW.atMs, WW.counts.set(mW.code, (null !== (OW = WW.counts.get(mW.code)) && void 0 !== OW ? OW : 0) + 1)
          }
          return iW.map((WW => {
            let {
              startMs: iW,
              endMs: OW,
              counts: mW
            } = WW;
            return {
              startMs: iW,
              endMs: OW,
              keys: [...mW].sort(ZW)
            }
          }))
        }(EW.keys.filter((WW => xW.contains(WW.atMs))))), [EW.keys, xW]),
        vW = WW => xW.toPosition(WW) / HW * 100,
        gW = WW => vW(WW) / 100 * YW,
        DW = WW => {
          const iW = SW.current.getBoundingClientRect();
          return {
            px: WW - iW.left,
            positionMs: Math.max(0, Math.min(iW.width, WW - iW.left)) / iW.width * HW
          }
        },
        VW = null === TW || 0 === YW ? null : {
          px: TW,
          positionMs: Math.max(0, Math.min(YW, TW)) / YW * HW
        },
        pW = null === VW || null === nW ? null : function(WW, iW) {
          const OW = Math.max(0, Math.min(WW.fps.length - 1, Math.floor(iW / WW.bucketMs))),
            mW = WW.fps[OW];
          return null === mW ? null : Math.round(mW)
        }(nW, VW.positionMs),
        fW = null !== VW && wW.some((WW => VW.px >= gW(WW.startMs) && VW.px < gW(WW.endMs))),
        CW = null === VW ? void 0 : NW.find((WW => {
          var iW;
          return VW.px >= gW(WW.atMs) - UW && VW.px <= gW(null !== (iW = WW.endMs) && void 0 !== iW ? iW : WW.atMs) + UW
        })),
        XW = null === VW ? void 0 : eW.find((WW => VW.px >= gW(WW.startMs) - UW && VW.px <= gW(WW.endMs) + UW));
      return (0, jW.jsxs)("div", {
        ref: SW,
        className: EW.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: WW => {
          WW.currentTarget.setPointerCapture(WW.pointerId);
          const iW = DW(WW.clientX);
          JW(iW.px), hW.current = iW.positionMs
        },
        onPointerMove: WW => {
          const iW = DW(WW.clientX);
          JW(iW.px), null !== hW.current && (hW.current = iW.positionMs)
        },
        onPointerUp: WW => {
          null !== hW.current && (iW.seekToPosition(DW(WW.clientX).positionMs), hW.current = null)
        },
        onPointerCancel: () => {
          hW.current = null, JW(null)
        },
        onPointerLeave: () => {
          JW(null)
        },
        children: [(0, jW.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, jW.jsx)(KW, {
            draw: oW,
            className: "brv-seekbar-canvas"
          }), PW.map((WW => {
            const iW = vW(WW.startMs);
            return (0, jW.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${iW}%`,
                width: vW(WW.endMs) - iW + "%"
              }
            }, WW.startMs)
          })), wW.map((WW => {
            const iW = vW(WW.startMs);
            return (0, jW.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${iW}%`,
                width: vW(WW.endMs) - iW + "%"
              }
            }, WW.startMs)
          })), (0, jW.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== VW && (0, jW.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: VW.px
            }
          })]
        }), EW.inputRecorded && (0, jW.jsx)(KW, {
          draw: dW,
          className: "brv-seekbar-input"
        }), (0, jW.jsx)("div", {
          className: "brv-seekbar-markers",
          children: NW.map(((WW, iW) => {
            var OW;
            const mW = vW(WW.atMs),
              EW = void 0 !== WW.endMs;
            return (0, jW.jsx)("div", {
              className: `brv-marker brv-marker-${WW.kind}${EW?" brv-marker-range":""}`,
              style: {
                left: `${mW}%`,
                width: EW ? vW(null !== (OW = WW.endMs) && void 0 !== OW ? OW : WW.atMs) - mW + "%" : void 0
              }
            }, iW)
          }))
        }), (0, jW.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== VW && (0, jW.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: VW.px
          },
          children: [kW(VW.positionMs), null !== pW && ` \xb7 ${tW.fps(pW)}`, void 0 !== CW && ` \xb7 ${MW(CW,tW)}`, fW && ` \xb7 ${tW.videoGap}`, void 0 !== XW && ` \xb7 ${tW.unboundKeys((BW=XW.keys,BW.map((WW=>{let[iW,OW]=WW;return OW>1?`${lW(iW)} \xd7${OW}`:lW(iW)})).join(", ")))}`]
        })]
      });
      var BW
    }
    var YW = OW(5378),
      yW = OW(1172),
      TW = OW(5268),
      JW = OW(1383),
      hW = OW(1532),
      HW = OW(1391),
      nW = OW(7488),
      uW = OW(6007),
      oW = OW(5998);
    const dW = [.5, 1, 2, 4, 8, 16];
    var eW = OW(42009);

    function vW(WW) {
      const iW = WW.filter((WW => WW.endMs > WW.startMs)).sort(((WW, iW) => WW.startMs - iW.startMs)),
        OW = [];
      for (const mW of iW) {
        const WW = OW.at(-1);
        void 0 !== WW && mW.startMs <= WW.endMs ? WW.endMs = Math.max(WW.endMs, mW.endMs) : OW.push({
          ...mW
        })
      }
      return OW
    }
    class gW {
      constructor(WW) {
        this.kj = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.kj = vW(WW), this.positionStarts = [];
        let iW = 0;
        for (const OW of this.kj) this.positionStarts.push(iW), iW += OW.endMs - OW.startMs;
        this.durationMs = iW
      }
      get startMs() {
        var WW, iW;
        return null !== (WW = null === (iW = this.kj[0]) || void 0 === iW ? void 0 : iW.startMs) && void 0 !== WW ? WW : 0
      }
      get endMs() {
        var WW, iW;
        return null !== (WW = null === (iW = this.kj.at(-1)) || void 0 === iW ? void 0 : iW.endMs) && void 0 !== WW ? WW : 0
      }
      toPosition(WW) {
        for (let iW = 0; iW < this.kj.length; iW++) {
          const OW = this.kj[iW];
          if (WW < OW.endMs) return this.positionStarts[iW] + Math.max(0, WW - OW.startMs)
        }
        return this.durationMs
      }
      toTime(WW) {
        const iW = Math.max(0, Math.min(this.durationMs, WW));
        for (let OW = this.kj.length - 1; OW >= 0; OW--)
          if (iW >= this.positionStarts[OW]) return this.kj[OW].startMs + (iW - this.positionStarts[OW]);
        return this.startMs
      }
      contains(WW) {
        return this.kj.some((iW => WW >= iW.startMs && WW < iW.endMs))
      }
      nextPlayableTime(WW) {
        for (const iW of this.kj) {
          if (WW < iW.startMs) return iW.startMs;
          if (WW < iW.endMs) return WW
        }
        return null
      }
    }

    function DW(WW) {
      return [...WW].sort(((WW, iW) => WW.startMs - iW.startMs))
    }

    function VW(WW, iW) {
      let OW = 1 / 0,
        mW = -1 / 0;
      const EW = WW => {
        OW = Math.min(OW, WW), mW = Math.max(mW, WW)
      };
      for (const NW of [...WW.videoSegments, ...WW.telemetryChunks]) EW(NW.startMs), EW(NW.endMs);
      for (const NW of WW.domEvents) EW(iW.toEpoch(NW.timestamp));
      return OW < mW ? {
        startMs: OW,
        endMs: mW
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class pW {
      constructor(WW, iW) {
        this.wallNowMs = iW, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = WW, this.anchorWallMs = iW()
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
      timeAtWall(WW) {
        return this.playingState ? this.anchorTimeMs + (WW - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(WW) {
        this.anchorTimeMs = WW, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(WW) {
        this.reanchor(), this.speedState = WW
      }
      reanchor() {
        const WW = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(WW), this.anchorWallMs = WW
      }
    }
    const fW = "bloxd-clock";
    class CW {
      constructor(WW) {
        this.samples = void 0, this.samples = [];
        for (const OW of WW) {
          var iW;
          const WW = OW.data;
          OW.type === eW.e.Custom && (null === WW || void 0 === WW ? void 0 : WW.tag) === fW && "number" === typeof(null === (iW = WW.payload) || void 0 === iW ? void 0 : iW.epochMs) && this.samples.push({
            domMs: OW.timestamp,
            offsetMs: WW.payload.epochMs - OW.timestamp
          })
        }
        this.samples.sort(((WW, iW) => WW.domMs - iW.domMs))
      }
      toEpoch(WW) {
        return WW + this.offsetAtDom(WW)
      }
      toDom(WW) {
        return WW - this.offsetAtDom(WW)
      }
      offsetAtDom(WW) {
        var iW, OW;
        let mW = 0,
          EW = this.samples.length - 1;
        for (; mW < EW;) {
          const iW = Math.ceil((mW + EW) / 2);
          this.samples[iW].domMs <= WW ? mW = iW : EW = iW - 1
        }
        return null !== (iW = null === (OW = this.samples[mW]) || void 0 === OW ? void 0 : OW.offsetMs) && void 0 !== iW ? iW : 0
      }
    }
    const XW = new Set([eW.h.MouseMove, eW.h.MouseInteraction, eW.h.Scroll, eW.h.Input, eW.h.TouchMove, eW.h.Drag]),
      BW = "bloxd-active",
      qW = "player_death",
      RW = "error",
      GW = {
        $exception: "error",
        [RW]: "error",
        death: "death",
        [qW]: "death"
      };

    function IW(WW, iW, OW) {
      return function(WW, iW) {
        const OW = [];
        for (const mW of WW) {
          let WW = mW.startMs;
          for (const EW of iW) EW.endMs <= WW || EW.startMs >= mW.endMs || (EW.startMs > WW && OW.push({
            startMs: WW,
            endMs: EW.startMs
          }), WW = Math.max(WW, EW.endMs));
          WW < mW.endMs && OW.push({
            startMs: WW,
            endMs: mW.endMs
          })
        }
        return OW
      }(function(WW) {
        const iW = [];
        for (const OW of WW) {
          const WW = iW.at(-1);
          void 0 !== WW && OW.atMs - WW.endMs <= 5e3 ? WW.endMs = OW.atMs : iW.push({
            startMs: OW.atMs,
            endMs: OW.atMs
          })
        }
        return iW
      }(WW), vW([...iW, ...OW])).filter((WW => WW.endMs - WW.startMs >= 1e3))
    }

    function aW(WW) {
      var iW, OW, mW;
      return WW.type === eW.e.IncrementalSnapshot ? XW.has(null !== (OW = null === (mW = WW.data) || void 0 === mW ? void 0 : mW.source) && void 0 !== OW ? OW : -1) : WW.type === eW.e.Custom && (null === (iW = WW.data) || void 0 === iW ? void 0 : iW.tag) === BW
    }

    function rW(WW, iW) {
      const OW = [];
      for (const PW of WW)
        if (PW.type === eW.e.Custom) {
          var mW;
          const WW = null === (mW = PW.data) || void 0 === mW ? void 0 : mW.tag,
            EW = void 0 === WW ? void 0 : GW[WW];
          void 0 !== EW && OW.push({
            kind: EW,
            atMs: iW.toEpoch(PW.timestamp)
          })
        } else if (PW.type === eW.e.Plugin) {
        var EW, NW;
        const WW = PW.data;
        "rrweb/console@1" !== (null === WW || void 0 === WW ? void 0 : WW.plugin) || "error" !== (null === (EW = WW.payload) || void 0 === EW ? void 0 : EW.level) && "assert" !== (null === (NW = WW.payload) || void 0 === NW ? void 0 : NW.level) || OW.push({
          kind: "error",
          atMs: iW.toEpoch(PW.timestamp)
        })
      }
      return OW
    }
    const zW = 3e6;
    class FW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zW;
        this.fetchUrls = WW, this.onUrls = iW, this.wallNowMs = OW, this.refreshableAfterMs = mW, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = OW()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const WW = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        WW > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), WW) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(WW) {
        this.inFlight = !0;
        const iW = this.wallNowMs();
        this.lastRefreshWallMs = iW;
        let OW = !1;
        WW().then((WW => {
          this.destroyed || (this.urlsFetchedAtWallMs = iW, this.onUrls(WW))
        })).catch((WW => {
          console.error("Failed to refresh the replay's URLs.", WW), OW = !0
        })).finally((() => {
          this.inFlight = !1, OW && this.request()
        }))
      }
    }
    class QW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zW;
        this.source = WW, this.description = iW, this.wallNowMs = OW, this.refreshableAfterMs = mW, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(WW) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const iW = this.wallNowMs();
        for (const OW of WW) this.entries.set(OW.sequence, {
          urls: OW,
          fetchedAtWallMs: iW
        })
      }
      get(WW) {
        const iW = this.getFresh(WW);
        return null !== iW ? iW : null === this.source || this.unavailable.has(WW) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(WW) {
        return null === this.getFresh(WW) && !this.unavailable.has(WW)
      }
      request(WW) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const iW = WW.filter((WW => this.needs(WW)));
        iW.length > 0 && this.fetch(this.source, iW.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(WW) {
        const iW = this.entries.get(WW);
        return void 0 === iW ? null : null === this.source || this.wallNowMs() - iW.fetchedAtWallMs < this.refreshableAfterMs ? iW.urls : null
      }
      fetch(WW, iW) {
        this.inFlight = !0;
        const OW = this.wallNowMs();
        WW.load(iW).then((WW => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const mW = new Set;
          for (const iW of WW) this.entries.set(iW.sequence, {
            urls: iW,
            fetchedAtWallMs: OW
          }), mW.add(iW.sequence);
          for (const OW of iW) mW.has(OW) || (console.warn(`Replay sequence ${OW} has no ${this.description}.`), this.unavailable.add(OW))
        })).catch((WW => {
          console.error(`Failed to fetch the replay's ${this.description}.`, WW), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class Wi {
      constructor(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : zW;
        this.load = iW, this.onLoaded = OW, this.onFailed = mW, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = ii([]), this.hidden = [], this.destroyed = !1, this.chunks = [...WW].sort(((WW, iW) => WW.startMs - iW.startMs)).map((WW => ({
          chunk: WW,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new QW(EW, "telemetry URLs", NW, PW), this.urls.reset(mi(WW))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((WW => "loaded" === WW.status)).length
      }
      update(WW, iW, OW) {
        if (null === this.load || this.destroyed) return;
        const mW = iW.toPosition(WW),
          EW = iW.toTime(mW - 1e4),
          NW = iW.toTime(mW + 6e4 * Math.max(1, OW)),
          PW = iW.toTime(mW + 12e4 * Math.max(1, OW)),
          LW = this.chunks.filter((WW => "idle" === WW.status && WW.chunk.endMs >= EW && WW.chunk.startMs <= PW)).sort(((iW, OW) => Ei(WW, iW.chunk) - Ei(WW, OW.chunk)));
        this.urls.request(LW.flatMap((WW => {
          var iW;
          let {
            chunk: OW
          } = WW;
          return null !== (iW = OW.sequence) && void 0 !== iW ? iW : []
        })));
        for (const cW of LW) {
          if (this.loading >= 3) return;
          const WW = cW.chunk.startMs <= NW ? this.getUrl(cW.chunk) : null;
          null !== WW && this.startLoad(cW, WW, this.load)
        }
      }
      replaceUrls(WW) {
        this.urls.reset(mi(WW));
        for (const iW of this.chunks) {
          const OW = WW.find((WW => WW.startMs === iW.chunk.startMs && WW.endMs === iW.chunk.endMs));
          void 0 !== OW && (iW.chunk = OW, "failed" === iW.status && (iW.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(WW) {
        var iW;
        if (void 0 === WW.sequence) return null !== (iW = WW.url) && void 0 !== iW ? iW : null;
        const OW = this.urls.get(WW.sequence);
        return "string" === typeof OW ? null : OW.url
      }
      startLoad(WW, iW, OW) {
        WW.status = "loading", WW.attempts++, this.loading++, OW(iW).then((iW => {
          this.destroyed || (WW.status = "loaded", WW.telemetry = iW, this.merge(), this.onLoaded())
        })).catch((iW => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${WW.chunk.startMs}-${WW.chunk.endMs}.`, iW), WW.status = WW.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const WW = [];
        let iW = !1;
        for (const mW of this.chunks) {
          const OW = WW.at(-1);
          if (null === mW.telemetry) {
            iW = !1;
            continue
          }
          const EW = Oi(mW.telemetry, mW.chunk);
          void 0 !== OW && iW && mW.chunk.startMs <= OW.endMs + 1e3 ? (OW.telemetry.push(EW), OW.endMs = mW.chunk.endMs) : (WW.push({
            telemetry: [EW],
            endMs: mW.chunk.endMs
          }), iW = !0)
        }
        const OW = WW.map((WW => function(WW, iW) {
          const OW = WW.actions.at(-1);
          if (void 0 === OW || 0 === OW.bits) return WW;
          return {
            ...WW,
            actions: [...WW.actions, {
              atMs: iW,
              bits: 0
            }]
          }
        }(ii(WW.telemetry), WW.endMs)));
        this.merged = ii(OW), this.hidden = OW.flatMap(((iW, OW) => function(WW, iW) {
          const OW = [];
          let mW = null;
          for (const {
              atMs: EW,
              event: NW
            }
            of WW.events) "hidden" === NW && null === mW ? mW = EW : "visible" === NW && null !== mW && (OW.push({
            startMs: mW,
            endMs: EW
          }), mW = null);
          return null !== mW && OW.push({
            startMs: mW,
            endMs: iW
          }), vW(OW)
        }(iW, WW[OW].endMs)))
      }
    }

    function ii(WW) {
      return {
        inputRecorded: WW.some((WW => WW.keys.length > 0)),
        frames: WW.flatMap((WW => WW.frames)),
        states: WW.flatMap((WW => WW.states)),
        events: WW.flatMap((WW => WW.events)),
        actions: WW.flatMap((WW => WW.actions)),
        keys: WW.flatMap((WW => WW.keys))
      }
    }

    function Oi(WW, iW) {
      const {
        actions: OW
      } = WW;
      return !WW.inputRecorded || OW.length > 0 && OW[0].atMs <= iW.startMs + 1 ? WW : {
        ...WW,
        actions: [{
          atMs: iW.startMs,
          bits: 0
        }, ...OW]
      }
    }

    function mi(WW) {
      return WW.flatMap((WW => {
        let {
          sequence: iW,
          url: OW
        } = WW;
        return void 0 === iW || void 0 === OW ? [] : [{
          sequence: iW,
          url: OW
        }]
      }))
    }

    function Ei(WW, iW) {
      return WW < iW.startMs ? iW.startMs - WW : WW > iW.endMs ? 2 * (WW - iW.endMs) : 0
    }
    class Ni {
      constructor(WW, iW, OW, mW) {
        this.data = WW, this.domClock = iW, this.timeline = OW, this.options = mW, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(WW, iW) {
          return WW.filter(aW).map((WW => iW.toEpoch(WW.timestamp)))
        }(WW.domEvents, iW), this.telemetry = new Wi(WW.telemetryChunks, mW.loadTelemetryChunk, (() => {
          this.rebuild()
        }), mW.onTelemetryFailed, mW.telemetryUrls), this.rebuild()
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
      update(WW, iW) {
        this.telemetry.update(WW, this.timeline, iW)
      }
      replaceTelemetryUrls(WW) {
        this.telemetry.replaceUrls(WW)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(WW) {
        return this.telemetry.hiddenRanges.some(Pi(WW))
      }
      isVideoGapAt(WW) {
        return this.videoGapRanges.some(Pi(WW))
      }
      rebuild() {
        const WW = this.telemetry.telemetry,
          iW = this.telemetry.hiddenRanges;
        this.videoGapRanges = IW(WW.frames, this.data.videoSegments, iW), this.inactiveRangeList = function(WW, iW, OW, mW) {
          const EW = [...iW];
          if (WW.length > 0) {
            const iW = [OW.startMs, ...WW, OW.endMs];
            for (let WW = 1; WW < iW.length; WW++) {
              const OW = iW[WW - 1],
                NW = iW[WW] - 1e3;
              NW - OW >= mW && EW.push({
                startMs: OW,
                endMs: NW
              })
            }
          }
          return vW(EW).filter((WW => WW.endMs - WW.startMs >= mW))
        }(this.activityTimes, iW, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(WW) {
          const {
            timeline: iW
          } = WW;
          return [...rW(WW.domEvents, WW.domClock), ...WW.telemetry.events.filter((WW => {
            let {
              event: iW
            } = WW;
            return "contextLost" === iW
          })).map((WW => {
            let {
              atMs: iW
            } = WW;
            return {
              kind: "graphicsCrash",
              atMs: iW
            }
          })), ...WW.hidden.map((WW => ({
            kind: "hidden",
            atMs: WW.startMs,
            endMs: WW.endMs
          }))), ...WW.extraMarkers].filter((WW => WW.atMs >= iW.startMs && WW.atMs <= iW.endMs && (iW.contains(WW.atMs) || iW.contains(WW.atMs - 1)))).sort(((WW, iW) => WW.atMs - iW.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: WW,
          extraMarkers: this.data.markers,
          hidden: iW,
          timeline: this.timeline
        })
      }
    }

    function Pi(WW) {
      return iW => WW >= iW.startMs && WW < iW.endMs
    }
    class Li {
      constructor() {
        this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
          handler: (WW, iW, OW) => {
            let {
              replayer: mW
            } = OW;
            this.record(WW), iW && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
              this.settleQueued = !1, this.settle(mW)
            })))
          }
        }
      }
      settle(WW) {
        const iW = WW.iframe.contentDocument;
        if (null === iW || void 0 === iW || !iW.documentElement.classList.contains("rrweb-paused")) return;
        const OW = WW.getMetaData().startTime + WW.getCurrentTime();
        ! function(WW, iW, OW, mW) {
          for (const EW of WW) {
            const WW = EW.effect,
              NW = OW.get(iW.getId(WW.target)),
              PW = void 0 === NW ? 1 / 0 : mW - NW,
              LW = Math.min(Math.max(PW, Number(EW.currentTime)), Number(WW.getComputedTiming().endTime));
            Number.isFinite(LW) && (EW.currentTime = LW)
          }
        }(iW.getAnimations(), WW.getMirror(), this.addedAt, OW)
      }
      record(WW) {
        if (WW.type === eW.e.FullSnapshot) this.addedAt.clear();
        else if (WW.type === eW.e.IncrementalSnapshot && WW.data.source === eW.h.Mutation) {
          for (const {
              id: iW
            }
            of WW.data.removes) this.addedAt.delete(iW);
          for (const {
              node: iW
            }
            of WW.data.adds) this.addedAt.set(iW.id, WW.timestamp)
        }
      }
    }
    const ci = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      wi = new Set(["srcset", "imagesrcset"]),
      ti = new Set(["to", "from", "by", "values"]),
      Zi = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      xi = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      li = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      Ai = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      bi = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      ji = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      Ui = /^data:image\/(?!svg)/i,
      ki = "about:invalid";

    function si(WW, iW) {
      let {
        hosts: OW
      } = iW, mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const EW = WW.trim();
      if (/[\\\u0000-\u001f]/.test(EW)) return !1;
      if (!ji.test(EW)) return !0;
      let NW;
      try {
        NW = new URL(EW.startsWith("//") ? `https:${EW}` : EW)
      } catch {
        return !1
      }
      return "data:" === NW.protocol ? mW ? "text/css" !== EW.slice(5).split(/[,;]/)[0].trim().toLowerCase() : Ui.test(EW) : "blob:" === NW.protocol || ("http:" === NW.protocol || "https:" === NW.protocol) && OW.some((WW => NW.hostname === WW || NW.hostname.endsWith(`.${WW}`)))
    }

    function Mi(WW, iW) {
      return WW.replace(xi, (function(WW) {
        for (var OW = arguments.length, mW = new Array(OW > 1 ? OW - 1 : 0), EW = 1; EW < OW; EW++) mW[EW - 1] = arguments[EW];
        if (si(mW.slice(0, 7).find((WW => "string" === typeof WW)), iW, !0)) return WW;
        const NW = WW.slice(0, 4).toLowerCase();
        return "url(" === NW ? `url("${ki}")` : "@imp" === NW ? `@import "${ki}"` : `"${ki}"`
      }))
    }

    function Ki(WW) {
      return bi.test(WW.replace(xi, '""'))
    }

    function Si(WW) {
      let iW = "between";
      for (let OW = 0; OW < WW.length; OW++) {
        const mW = WW[OW];
        if ("/" === mW && "*" === WW[OW + 1]) {
          if (OW = WW.indexOf("*/", OW + 2), -1 === OW) return "open";
          OW++, iW = "between"
        } else if ('"' === mW || "'" === mW) {
          for (OW++; OW < WW.length && WW[OW] !== mW && !/[\n\r\f]/.test(WW[OW]); OW++) "\\" === WW[OW] && OW++;
          if (OW >= WW.length) return "open";
          iW = "token"
        } else "\\" === mW ? (OW++, iW = "token") : ";" === mW || "{" === mW || "}" === mW ? iW = "between" : /\s/.test(mW) || (iW = "token")
      }
      return iW
    }

    function Yi(WW, iW) {
      const OW = Mi(WW, iW);
      if (Ki(OW) || "open" === Si(OW)) return "";
      if (!OW.includes("\\")) return OW;
      const mW = function(WW) {
        return WW.replace(Ai, ((WW, iW, OW) => void 0 !== iW ? String.fromCodePoint(Math.min(parseInt(iW, 16), 1114111)) : null !== OW && void 0 !== OW ? OW : ""))
      }(OW);
      return Mi(mW, iW) !== mW || Ki(mW) ? "" : OW
    }

    function yi(WW, iW) {
      const OW = li.test(WW) ? Yi(WW, iW) : WW;
      return OW.split("/* rr_split */").every((WW => "between" === Si(WW))) ? OW : ""
    }

    function Ti(WW, iW, OW) {
      if ("string" === typeof iW) {
        const mW = WW.toLowerCase();
        if (Zi.has(mW)) return null;
        if (wi.has(mW)) return function(WW, iW) {
          return WW.split(",").every((WW => {
            const OW = WW.trim().split(/\s+/)[0];
            return void 0 === OW || "" === OW || si(OW, iW)
          }))
        }(iW, OW) ? iW : null;
        if (ti.has(mW)) {
          return iW.split(";").every((WW => si(WW, OW))) ? Ti("", iW, OW) : null
        }
        return ci.has(mW) ? si(iW, OW) ? iW : null : "_csstext" === mW ? yi(iW, OW) : li.test(iW) ? Yi(iW, OW) : iW
      }
      if (Array.isArray(iW)) return iW.map((WW => Ti("", WW, OW)));
      if (null !== iW && "object" === typeof iW) {
        const mW = "style" === WW.toLowerCase(),
          EW = {};
        for (const [WW, PW] of Object.entries(iW)) EW[WW] = Ti(mW ? "" : WW, PW, OW);
        const {
          id: NW
        } = EW;
        if ("number" === typeof NW && OW.styleTextIds.has(NW))
          for (const WW of ["textContent", "value"]) {
            const iW = EW[WW];
            "string" === typeof iW && (EW[WW] = yi(iW, OW))
          }
        return EW
      }
      return iW
    }

    function Ji(WW, iW) {
      const OW = (WW, mW) => {
        if (null === WW || "object" !== typeof WW) return;
        const EW = WW;
        if (iW(EW, mW), Array.isArray(EW.childNodes))
          for (const iW of EW.childNodes) OW(iW, EW.id)
      };
      for (const mW of WW) {
        const WW = mW.data;
        if (mW.type === eW.e.FullSnapshot) OW(null === WW || void 0 === WW ? void 0 : WW.node, null);
        else if (mW.type === eW.e.IncrementalSnapshot && Array.isArray(null === WW || void 0 === WW ? void 0 : WW.adds))
          for (const iW of WW.adds) OW(null === iW || void 0 === iW ? void 0 : iW.node, null === iW || void 0 === iW ? void 0 : iW.parentId)
      }
    }

    function Hi(WW) {
      const iW = new Set,
        OW = [];
      Ji(WW, ((WW, mW) => {
        let {
          id: EW,
          tagName: NW
        } = WW;
        "number" === typeof EW && ("string" === typeof NW && "style" === NW.toLowerCase() && iW.add(EW), OW.push({
          id: EW,
          parentId: mW
        }))
      }));
      const mW = new Set;
      for (const {
          id: EW,
          parentId: NW
        }
        of OW) "number" === typeof NW && iW.has(NW) && mW.add(EW);
      return mW
    }
    const ni = {
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
      ui = {
        pointer: ["none", "coarse", "fine"],
        "any-pointer": ["none", "coarse", "fine"],
        hover: ["none", "hover"],
        "any-hover": ["none", "hover"]
      },
      oi = "(min-width: 0px)",
      di = "(not (min-width: 0px))",
      ei = /@media\b[^{;]*/gi,
      vi = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
      gi = new Set(["_cssText", "rule", "replace", "replaceSync"]);

    function Di(WW, iW) {
      return WW.replace(ei, (WW => WW.replace(vi, ((WW, OW, mW) => {
        const EW = OW.toLowerCase(),
          NW = ni[iW][EW];
        if (void 0 === mW) return "none" === NW ? di : oi;
        const PW = mW.toLowerCase();
        return ui[EW].includes(PW) ? PW === NW ? oi : di : WW
      }))))
    }

    function Vi(WW) {
      const iW = WW.attributes,
        OW = null === iW || void 0 === iW ? void 0 : iW.rel,
        mW = null === iW || void 0 === iW ? void 0 : iW.href;
      return "link" === WW.tagName && "string" === typeof OW && OW.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof mW ? mW : null
    }

    function fi(WW) {
      const iW = new Map;
      Ji(WW, (WW => {
        const OW = Vi(WW);
        null !== OW && iW.set(WW.id, OW)
      }));
      const OW = new Map;
      for (const EW of WW) {
        const WW = EW.data;
        if (EW.type === eW.e.IncrementalSnapshot && (null === WW || void 0 === WW ? void 0 : WW.source) === eW.h.Mutation)
          for (const EW of null !== (mW = WW.attributes) && void 0 !== mW ? mW : []) {
            var mW;
            const WW = EW.attributes._cssText,
              NW = iW.get(EW.id);
            "string" !== typeof WW || void 0 === NW || OW.has(NW) || OW.set(NW, WW)
          }
      }
      return OW
    }

    function Ci(WW, iW, OW) {
      var mW;
      if ("string" === typeof WW) return null !== OW.pointer && gi.has(iW) ? Di(WW, OW.pointer) : WW;
      if (Array.isArray(WW)) {
        let iW = !1;
        const mW = WW.map((WW => {
          const mW = Ci(WW, "", OW);
          return iW ||= mW !== WW, mW
        }));
        return iW ? mW : WW
      }
      if (null === WW || "object" !== typeof WW) return WW;
      const EW = function(WW, iW) {
        const OW = WW.attributes,
          mW = Vi(WW),
          EW = null !== mW && void 0 === (null === OW || void 0 === OW ? void 0 : OW._cssText) ? iW.sheets.get(mW) : void 0;
        return void 0 === EW ? WW : {
          ...WW,
          attributes: {
            ...OW,
            _cssText: EW
          }
        }
      }(WW, OW);
      let NW = null;
      for (const [LW, cW] of Object.entries(EW)) {
        const WW = Ci(cW, LW, OW);
        WW !== cW && (NW ??= {
          ...EW
        }, NW[LW] = WW)
      }
      const {
        id: PW
      } = EW;
      if (null !== OW.pointer && "number" === typeof PW && OW.styleTextIds.has(PW))
        for (const LW of ["textContent", "value"]) {
          const WW = EW[LW],
            iW = "string" === typeof WW ? Di(WW, OW.pointer) : WW;
          iW !== WW && (NW ??= {
            ...EW
          }, NW[LW] = iW)
        }
      return null !== (mW = NW) && void 0 !== mW ? mW : EW
    }
    const Xi = "brv-styles",
      Bi = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      qi = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${Bi.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class Ri {
      static create(WW, iW, OW, mW, EW, NW, PW, LW) {
        if (!iW.some((WW => WW.type === eW.e.FullSnapshot))) return null;
        const cW = function(WW, iW) {
          const OW = {
            sheets: fi(WW),
            styleTextIds: Hi(WW),
            pointer: iW
          };
          return WW.map((WW => {
            if (WW.type !== eW.e.FullSnapshot && WW.type !== eW.e.IncrementalSnapshot) return WW;
            const iW = Ci(WW.data, "data", OW);
            return iW === WW.data ? WW : {
              ...WW,
              data: iW
            }
          }))
        }(function(WW, iW) {
          const OW = {
            hosts: iW,
            styleTextIds: Hi(WW)
          };
          return WW.map((WW => WW.type === eW.e.Meta ? WW : {
            ...WW,
            data: Ti("data", WW.data, OW)
          }))
        }(iW, NW), OW);
        return new Ri(WW, cW, mW, EW, PW, LW)
      }
      constructor(WW, iW, OW, mW, EW, NW) {
        var PW, LW, cW, wW;
        this.domClock = OW, this.canvasSelectors = mW, this.videoLayer = EW, this.replayer = void 0, this.pausedAnimations = new Li, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (PW = null === (LW = iW[0]) || void 0 === LW ? void 0 : LW.timestamp) && void 0 !== PW ? PW : 0, this.lastDomMs = null !== (cW = null === (wW = iW.at(-1)) || void 0 === wW ? void 0 : wW.timestamp) && void 0 !== cW ? cW : 0, this.replayer = new eW.k(iW, {
          root: WW,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          plugins: [this.pausedAnimations.plugin],
          insertStyleRules: Bi
        }), this.replayer.on("resize", (WW => {
          const {
            width: iW,
            height: OW
          } = WW;
          NW({
            width: iW,
            height: OW
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect(), this.pausedAnimations.settle(this.replayer)
        }))
      }
      sync(WW, iW) {
        const OW = this.domOffsetAt(WW);
        iW ? this.replayer.play(OW) : this.replayer.pause(OW), this.lastDomCheckMs = performance.now()
      }
      update(WW, iW, OW) {
        OW - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = OW, this.placeVideoOverCanvas()), iW && OW - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = OW, this.checkDrift(WW))
      }
      setSpeed(WW) {
        this.replayer.setConfig({
          speed: WW
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(WW) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(WW)) - this.firstDomMs)
      }
      checkDrift(WW) {
        const iW = this.domOffsetAt(WW);
        iW >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - iW) > 400 && this.replayer.play(iW)
      }
      placeVideoOverCanvas() {
        const WW = this.replayer.iframe.contentDocument,
          iW = null === WW ? null : function(WW, iW) {
            for (const OW of iW) {
              const iW = WW.querySelector(OW);
              if (null !== iW) return iW
            }
            return null
          }(WW, this.canvasSelectors),
          OW = this.videoLayer.element;
        null !== iW ? (OW.previousSibling !== iW && iW.after(OW), OW.style.display = "", OW.style.left = `${iW.offsetLeft}px`, OW.style.top = `${iW.offsetTop}px`, OW.style.width = `${iW.offsetWidth}px`, OW.style.height = `${iW.offsetHeight}px`) : OW.style.display = "none"
      }
    }
    const Gi = {
      width: 1280,
      height: 720
    };
    class Ii {
      constructor(WW, iW) {
        this.root = WW, this.onViewportChanged = iW, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", WW.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(WW)
      }
      setViewport(WW) {
        var iW;
        null === WW || WW.width <= 0 || WW.height <= 0 || WW.width === (null === (iW = this.viewport) || void 0 === iW ? void 0 : iW.width) && WW.height === this.viewport.height || (this.viewport = WW, this.element.style.width = `${WW.width}px`, this.element.style.height = `${WW.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var WW;
        const iW = null !== (WW = this.viewport) && void 0 !== WW ? WW : Gi,
          OW = this.root.getBoundingClientRect(),
          mW = Math.min(OW.width / iW.width, OW.height / iW.height),
          EW = (OW.width - iW.width * mW) / 2,
          NW = (OW.height - iW.height * mW) / 2;
        this.element.style.transform = `translate(${EW}px, ${NW}px) scale(${mW})`
      }
    }
    class ai {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zW;
        this.urls = void 0, this.urls = new QW(WW, "video URLs", iW, OW)
      }
      reset(WW) {
        this.urls.reset(WW.flatMap((WW => {
          var iW;
          return null !== (iW = function(WW) {
            return "url" in WW ? null === WW.url ? null : {
              sequence: WW.sequence,
              url: WW.url
            } : void 0 === WW.partUrls ? null : {
              sequence: WW.sequence,
              partUrls: WW.partUrls
            }
          }(WW)) && void 0 !== iW ? iW : []
        })))
      }
      get(WW) {
        return this.urls.get(WW)
      }
      update(WW, iW, OW) {
        this.urls.request(function(WW, iW, OW, mW) {
          return WW.filter((WW => WW.endMs > iW && WW.startMs < iW + OW && mW(WW.sequence))).map((WW => WW.sequence))
        }(WW, iW, 12e4 * Math.max(1, OW), (WW => this.urls.needs(WW))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function ri(WW, iW, OW) {
      const mW = [];
      let EW = WW.length,
        NW = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, WW.length)
      }, (() => (async () => {
        for (; NW < EW;) {
          const LW = NW++;
          try {
            mW[LW] = await iW(WW[LW], OW)
          } catch (PW) {
            if (OW.aborted) throw PW;
            console.warn(`Replay video part ${LW} failed to load; playing the parts before it.`, PW), EW = Math.min(EW, LW)
          }
        }
      })()))), mW.slice(0, EW)
    }

    function zi(WW) {
      const iW = [];
      let OW = 0;
      for (const tW of WW) iW.push(OW), OW += tW.byteLength;
      let mW = 0;
      const EW = OW => {
          for (; iW[mW] > OW;) mW--;
          for (; mW + 1 < iW.length && iW[mW + 1] <= OW;) mW++;
          return WW[mW][OW - iW[mW]]
        },
        NW = WW => EW(WW) * 2 ** 24 + 65536 * EW(WW + 1) + 256 * EW(WW + 2) + EW(WW + 3);
      let PW = 0,
        LW = !1,
        cW = !1,
        wW = 0;
      for (; PW + 8 <= OW;) {
        const WW = String.fromCharCode(EW(PW + 4), EW(PW + 5), EW(PW + 6), EW(PW + 7));
        let iW = NW(PW);
        if (1 === iW) {
          if (PW + 16 > OW) break;
          iW = NW(PW + 8) * 2 ** 32 + NW(PW + 12)
        } else 0 === iW && (iW = OW - PW);
        if (iW < 8 || PW + iW > OW) break;
        PW += iW, "moov" === WW ? LW = !0 : "moof" === WW ? cW = !0 : "mdat" === WW && cW ? (cW = !1, wW = PW) : !cW && wW > 0 && (wW = PW)
      }
      return LW && wW > 0 ? wW : null
    }
    async function Fi(WW, iW) {
      const OW = await fetch(WW, {
        signal: iW
      });
      if (!OW.ok) throw new Error(`HTTP ${OW.status}`);
      return OW.arrayBuffer()
    }
    class Qi {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = WW, this.aZ = iW, this.blobs = new Map
      }
      get(WW, iW) {
        const OW = WO(WW, iW),
          mW = this.blobs.get(OW);
        return void 0 === mW ? null : (this.remember(OW, mW), mW)
      }
      async load(WW, iW, OW) {
        const mW = await ri(iW, this.fetchPart, OW),
          EW = function(WW) {
            const iW = WW.map((WW => new Uint8Array(WW))),
              OW = zi(iW);
            return null === OW ? null : new Blob(function(WW, iW) {
              const OW = [];
              let mW = iW;
              for (const EW of WW) {
                if (mW <= 0) break;
                OW.push(EW.byteLength <= mW ? EW : EW.subarray(0, mW)), mW -= EW.byteLength
              }
              return OW
            }(iW, OW), {
              type: "video/mp4"
            })
          }(mW);
        return null !== EW && mW.length === iW.length && this.remember(WO(WW, iW.length), EW), EW
      }
      remember(WW, iW) {
        this.blobs.delete(WW), this.blobs.set(WW, iW), this.blobs.size > this.aZ && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function WO(WW, iW) {
      return `${WW}/${iW}`
    }

    function iO(WW) {
      const iW = function(WW) {
        return WW.map(((iW, OW) => {
          const mW = WW[OW + 1];
          return void 0 === mW ? iW.endMs : Math.min(iW.endMs, mW.startMs)
        }))
      }(WW);
      return WW.map(((WW, OW) => ({
        ...WW,
        endMs: iW[OW]
      }))).filter((WW => WW.endMs > WW.startMs))
    }

    function OO(WW, iW) {
      let OW = 0,
        mW = WW.length - 1;
      for (; OW <= mW;) {
        const EW = OW + mW >> 1,
          NW = WW[EW];
        if (iW < NW.startMs) mW = EW - 1;
        else {
          if (!(iW >= NW.endMs)) return NW;
          OW = EW + 1
        }
      }
      return null
    }

    function mO(WW, iW) {
      return (iW - WW.startMs) / 1e3
    }

    function EO(WW) {
      return Math.max(.4, .1 * WW)
    }

    function NO(WW) {
      return Math.max(.0625, Math.min(16, WW))
    }
    class PO {
      constructor(WW, iW, OW, mW, EW, NW, PW) {
        this.still = iW, this.clock = OW, this.frameDurationS = mW, this.wallNowMs = EW, this.onLoadFailed = PW, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new Qi, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = iO(WW), this.segmentUrls = new ai(NW), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(WW) {
        var iW, OW;
        const mW = null !== (iW = null !== (OW = OO(this.segments, WW)) && void 0 !== OW ? OW : this.segments.find((iW => iW.startMs > WW))) && void 0 !== iW ? iW : this.segments.at(-1);
        return void 0 === mW ? null : {
          width: mW.width,
          height: mW.height
        }
      }
      failedAt(WW) {
        const iW = OO(this.segments, WW);
        return null !== iW && this.failed.has(iW.sequence)
      }
      replaceSegments(WW, iW) {
        for (const OW of this.slots.values()) this.release(OW);
        this.slots.clear(), this.failed.clear(), this.segments = iO(WW), this.segmentUrls.reset(this.segments), this.still = iW
      }
      update(WW) {
        var iW, OW;
        this.segmentUrls.update(this.segments, WW, this.clock.speed);
        const mW = OO(this.segments, WW),
          EW = function(WW, iW) {
            const OW = WW.find((WW => WW.startMs > iW));
            return void 0 === OW ? null : OW.startMs - iW <= ("parts" in OW ? 15e3 : 8e3) ? OW : null
          }(this.segments, WW);
        this.evictExcept([mW, EW, null !== (iW = null === (OW = this.shown) || void 0 === OW ? void 0 : OW.segment) && void 0 !== iW ? iW : null]), null !== EW && this.getSlot(EW), this.showStill(null === mW ? function(WW, iW, OW) {
          if (null === iW) return null;
          const mW = WW.at(-1);
          return void 0 === mW ? OW >= iW.atMs - 1e4 ? iW : null : OW >= mW.endMs && Math.abs(iW.atMs - mW.endMs) <= 1e4 ? iW : null
        }(this.segments, this.still, WW) : null);
        const NW = null === mW ? null : this.getSlot(mW);
        if (null !== NW) {
          this.sync(NW, mO(NW.segment, WW)), NW.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !NW.video.seeking && this.show(NW);
          for (const WW of this.slots.values()) WW === NW || WW.video.paused || WW.video.pause()
        } else {
          null === mW && this.show(null);
          for (const WW of this.slots.values()) WW.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: WW,
          sumAbsDriftMs: iW,
          maxAbsDriftMs: OW,
          withinOneFrame: mW,
          seeks: EW
        } = this.stats;
        return {
          frames: WW,
          meanAbsDriftMs: 0 === WW ? 0 : iW / WW,
          maxAbsDriftMs: OW,
          withinOneFrame: 0 === WW ? 1 : mW / WW,
          seeks: EW
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
        for (const WW of this.slots.values()) this.release(WW);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(WW, iW) {
        const {
          video: OW
        } = WW;
        if (OW.seeking) return;
        const {
          playing: mW,
          speed: EW
        } = this.clock, NW = mW && EW < 16, PW = function(WW) {
          let {
            targetS: iW,
            currentS: OW,
            playing: mW,
            speed: EW,
            frameDurationS: NW
          } = WW;
          const PW = OW - iW;
          if (!mW) return Math.abs(PW) > NW / 2 ? {
            kind: "seek",
            mediaTimeS: iW
          } : {
            kind: "none"
          };
          if (Math.abs(PW) > EO(EW)) return {
            kind: "seek",
            mediaTimeS: iW
          };
          if (Math.abs(PW) < NW / 4) return {
            kind: "rate",
            playbackRate: NO(EW)
          };
          const LW = EW - PW / .5;
          return {
            kind: "rate",
            playbackRate: NO(Math.max(.5 * EW, Math.min(1.5 * EW, LW)))
          }
        }({
          targetS: iW,
          currentS: OW.currentTime,
          playing: NW,
          speed: EW,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === PW.kind) {
          const iW = this.seekLatencyS * EW,
            LW = mW ? NW ? Math.min(iW, EO(EW) / 2) : iW : 0;
          WW.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, NW && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), OW.currentTime = Math.max(0, PW.mediaTimeS + LW)
        } else "rate" === PW.kind && Math.abs(OW.playbackRate - PW.playbackRate) > .001 && (OW.playbackRate = PW.playbackRate);
        NW && OW.paused && OW.currentTime < OW.duration ? (OW.playbackRate = NO(EW), OW.play().catch((WW => {
          console.warn("Replay video refused to play.", WW)
        }))) : NW || OW.paused || OW.pause()
      }
      getSlot(WW) {
        const iW = this.slots.get(WW.sequence);
        if (void 0 !== iW) return iW;
        const OW = "parts" in WW ? this.blobs.get(WW.sequence, WW.parts) : null,
          mW = null === OW ? this.segmentUrls.get(WW.sequence) : null;
        if ("pending" === mW) return null;
        if ("failed" === mW) return this.failed.has(WW.sequence) || (console.error(`Replay video segment ${WW.sequence} has no URLs to load.`), this.markFailed(WW)), null;
        const EW = document.createElement("video");
        EW.className = "brv-video", EW.muted = !0, EW.playsInline = !0, EW.preload = "auto", EW.disablePictureInPicture = !0;
        const NW = {
          segment: WW,
          video: EW,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== OW ? this.playBlob(NW, OW) : null !== mW && ("url" in mW ? EW.src = mW.url : this.loadParts(NW, mW.partUrls)), EW.addEventListener("seeked", (() => {
          if (null !== NW.seekStartedWallMs) {
            const WW = (this.wallNowMs() - NW.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, WW), NW.seekStartedWallMs = null
          }
        })), EW.addEventListener("loadeddata", (() => {
          this.slots.get(WW.sequence) === NW && this.failed.delete(WW.sequence)
        })), EW.addEventListener("error", (() => {
          this.slots.get(WW.sequence) === NW && (console.error(`Replay video segment ${WW.sequence} failed to load.`, EW.error), this.markFailed(WW))
        })), this.watchFrames(NW), this.element.appendChild(EW), this.slots.set(WW.sequence, NW), NW
      }
      loadParts(WW, iW) {
        this.blobs.load(WW.segment.sequence, iW, WW.abort.signal).then((iW => {
          if (this.slots.get(WW.segment.sequence) === WW) return null === iW ? (console.error(`Replay video segment ${WW.segment.sequence} has no playable parts.`), void this.markFailed(WW.segment)) : void this.playBlob(WW, iW)
        }), (iW => {
          this.slots.get(WW.segment.sequence) === WW && (console.error(`Replay video segment ${WW.segment.sequence} failed to load.`, iW), this.markFailed(WW.segment))
        }))
      }
      playBlob(WW, iW) {
        WW.objectUrl = URL.createObjectURL(iW), WW.video.src = WW.objectUrl
      }
      markFailed(WW) {
        this.failed.add(WW.sequence), this.onLoadFailed()
      }
      showStill(WW) {
        const iW = null !== WW && WW.url !== this.failedStillUrl ? WW : null;
        null !== iW && this.stillImage.getAttribute("src") !== iW.url && (this.stillImage.src = iW.url);
        const OW = null !== iW && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        OW !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", OW), this.stillShown = OW)
      }
      show(WW) {
        var iW;
        this.shown !== WW && (null === (iW = this.shown) || void 0 === iW || iW.video.classList.remove("brv-video-shown"), null === WW || void 0 === WW || WW.video.classList.add("brv-video-shown"), this.shown = WW)
      }
      evictExcept(WW) {
        for (const [iW, OW] of this.slots) WW.includes(OW.segment) || (this.release(OW), this.slots.delete(iW))
      }
      release(WW) {
        this.shown === WW && (this.shown = null), WW.abort.abort(), WW.video.pause(), WW.video.removeAttribute("src"), WW.video.load(), WW.video.remove(), null !== WW.objectUrl && URL.revokeObjectURL(WW.objectUrl)
      }
      watchFrames(WW) {
        const {
          video: iW
        } = WW;
        if ("function" !== typeof iW.requestVideoFrameCallback) return;
        const OW = (mW, EW) => {
          if (!this.slots.has(WW.segment.sequence)) return;
          const NW = iW.ownerDocument.defaultView,
            PW = null === NW ? 0 : NW.performance.timeOrigin - performance.timeOrigin,
            LW = mO(WW.segment, this.clock.timeAtWall(EW.expectedDisplayTime + PW)),
            cW = this.lastPresented,
            wW = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== cW && cW.slot === WW && wW && this.clock.playing && EW.mediaTime > cW.mediaTimeS) {
            const WW = Math.abs(function(WW, iW, OW) {
              return OW < WW ? 1e3 * (OW - WW) : 1e3 * Math.max(0, OW - iW)
            }(cW.mediaTimeS, EW.mediaTime, cW.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += WW, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, WW), WW <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: WW,
            mediaTimeS: EW.mediaTime,
            clockMediaTimeS: LW
          }, iW.requestVideoFrameCallback(OW)
        };
        iW.requestVideoFrameCallback(OW)
      }
    }
    const LO = 1 / 30,
      cO = ["#noa-canvas", "#noa-container"];
    class wO {
      constructor(WW, iW) {
        var OW, mW, EW, NW, PW, LW, cW, wW;
        let tW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.hZ = () => {
          this.frame = requestAnimationFrame(this.hZ);
          const WW = performance.now();
          this.applySkips();
          const iW = this.clock.timeMs();
          this.annotations.update(iW, this.clock.speed), this.videoLayer.update(iW), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(iW)) : this.domLayer.update(iW, this.clock.playing, WW);
          const OW = this.getState();
          (null === this.lastState || function(WW, iW) {
            return Object.keys(WW).some((OW => "positionMs" === OW ? Math.floor(WW.positionMs / 1e3) !== Math.floor(iW.positionMs / 1e3) : WW[OW] !== iW[OW]))
          }(OW, this.lastState)) && this.emitState(OW)
        };
        const ZW = () => performance.now();
        this.lowFps = null !== (OW = tW.lowFps) && void 0 !== OW ? OW : 25;
        const xW = new CW(iW.domEvents);
        this.timeline = new gW(iW.windows.length > 0 ? iW.windows : [VW(iW, xW)]), this.chapters = [...iW.chapters].sort(((WW, iW) => WW.startMs - iW.startMs)), this.annotations = new Ni(iW, xW, this.timeline, {
          inactivityThresholdMs: null !== (mW = tW.inactivityThresholdMs) && void 0 !== mW ? mW : 1e4,
          loadTelemetryChunk: null !== (EW = tW.loadTelemetryChunk) && void 0 !== EW ? EW : null,
          telemetryUrls: null !== (NW = tW.telemetryUrls) && void 0 !== NW ? NW : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new FW(null !== (PW = tW.refreshUrls) && void 0 !== PW ? PW : null, (WW => {
          this.videoLayer.replaceSegments(DW(WW.videoSegments), WW.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(WW.telemetryChunks)
        })), this.clock = new pW(this.timeline.startMs, ZW), this.stage = new Ii(WW, (() => {
          var WW;
          null === (WW = this.domLayer) || void 0 === WW || WW.invalidateCanvasRect()
        })), this.videoLayer = new PO(DW(iW.videoSegments), iW.still, this.clock, LO, ZW, null !== (LW = tW.segmentUrls) && void 0 !== LW ? LW : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = Ri.create(this.stage.element, iW.domEvents, iW.recordedPointer, xW, null !== (cW = tW.canvasSelectors) && void 0 !== cW ? cW : cO, null !== (wW = tW.resourceHosts) && void 0 !== wW ? wW : [], this.videoLayer, (WW => {
          this.stage.setViewport(WW)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.hZ()
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
      subscribe(WW) {
        return this.listeners.add(WW), WW(this.getState()), () => {
          this.listeners.delete(WW)
        }
      }
      getState() {
        const WW = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(WW),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(WW),
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
      seekToPosition(WW) {
        this.seekToTime(this.timeline.toTime(WW))
      }
      seekBy(WW) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + WW)
      }
      stepFrame(WW) {
        this.clock.pause(), this.seekBy(WW * LO * 1e3)
      }
      setSpeed(WW) {
        var iW;
        this.clock.setSpeed(WW), null === (iW = this.domLayer) || void 0 === iW || iW.setSpeed(WW), this.emit()
      }
      setSkipInactive(WW) {
        this.skipInactive = WW, this.emit()
      }
      goToChapter(WW) {
        const iW = this.clock.timeMs(),
          OW = 1 === WW ? this.chapters.find((WW => WW.startMs > iW + 500)) : this.chapters.findLast((WW => WW.startMs < iW - 2e3));
        void 0 !== OW && this.seekToTime(OW.startMs)
      }
      destroy() {
        var WW;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (WW = this.domLayer) || void 0 === WW || WW.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(WW) {
        return this.annotations.isHiddenAt(WW) ? "tabHidden" : this.videoLayer.failedAt(WW) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(WW) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var WW;
        if (!this.clock.playing) return;
        const iW = this.clock.timeMs(),
          OW = this.timeline.nextPlayableTime(iW);
        if (null === OW) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const mW = this.skipInactive ? this.annotations.inactiveRanges.find((WW => OW >= WW.startMs && OW < WW.endMs - 500)) : void 0,
          EW = null !== (WW = null === mW || void 0 === mW ? void 0 : mW.endMs) && void 0 !== WW ? WW : OW;
        EW !== iW && this.seekToTime(EW)
      }
      seekToTime(WW) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, WW))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var WW;
        null === (WW = this.domLayer) || void 0 === WW || WW.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(WW) {
        this.lastState = WW;
        for (const iW of this.listeners) iW(WW)
      }
    }
    const tO = 2500,
      ZO = 5;

    function xO(WW) {
      let {
        label: iW,
        BL: OW,
        wide: mW = !1
      } = WW;
      return (0, jW.jsx)("span", {
        className: `brv-key${OW?" brv-key-held":""}${mW?" brv-key-wide":""}`,
        children: iW
      })
    }
    const lO = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function AO(WW) {
      const [iW, OW] = (0, mW.useState)({
        bits: 0,
        presses: []
      });
      return (0, mW.useEffect)((() => {
        let iW = 0,
          mW = "";
        const EW = () => {
          iW = requestAnimationFrame(EW);
          const NW = WW.timeline.toTime(WW.getPositionMs()),
            {
              actions: PW,
              keys: LW
            } = WW.input,
            xW = function(WW, iW) {
              const OW = wW(WW, iW);
              return OW < 0 ? 0 : WW[OW].bits
            }(PW, NW),
            lW = function(WW, iW, OW, mW) {
              const EW = Math.floor(iW / OW) * OW,
                NW = new Map;
              for (let PW = wW(WW, EW + OW); PW >= 0 && WW[PW].atMs >= EW; PW--) {
                const iW = WW[PW];
                if (!iW.down || !iW.inPlay || iW.atMs === EW + OW) continue;
                const mW = {
                    code: iW.code,
                    unbound: cW(iW)
                  },
                  LW = tW(mW),
                  wW = NW.get(LW);
                void 0 === wW ? NW.set(LW, {
                  key: mW,
                  presses: 1
                }) : wW.presses++
              }
              return [...NW].sort(((WW, iW) => ZW([WW[0], WW[1].presses], [iW[0], iW[1].presses]))).slice(0, mW).map((WW => {
                let [, {
                  key: iW
                }] = WW;
                return iW
              }))
            }(LW, NW, tO, ZO),
            AW = `${xW};${lW.map((WW=>tW(WW))).join(",")}`;
          AW !== mW && (mW = AW, OW({
            bits: xW,
            presses: lW
          }))
        };
        return EW(), () => {
          cancelAnimationFrame(iW)
        }
      }), [WW]), iW
    }

    function bO(WW) {
      let {
        controller: iW,
        labels: OW
      } = WW;
      const {
        bits: mW,
        presses: EW
      } = AO(iW), NW = WW => function(WW, iW) {
        return 0 !== (WW & 1 << PW.indexOf(iW))
      }(mW, WW);
      return (0, jW.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, jW.jsx)("div", {
          className: "brv-input-slot",
          children: EW.map((WW => {
            const iW = lW(WW.code);
            return (0, jW.jsx)("span", {
              className: WW.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: WW.unbound ? OW.unboundKey(iW) : iW
            }, tW(WW))
          }))
        }), (0, jW.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, jW.jsxs)("div", {
            className: "brv-keys",
            children: [(0, jW.jsx)("div", {
              className: "brv-keys-row",
              children: (0, jW.jsx)(xO, {
                label: "W",
                BL: NW("forward")
              })
            }), (0, jW.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, jW.jsx)(xO, {
                label: "A",
                BL: NW("left")
              }), (0, jW.jsx)(xO, {
                label: "S",
                BL: NW("backward")
              }), (0, jW.jsx)(xO, {
                label: "D",
                BL: NW("right")
              })]
            }), (0, jW.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, jW.jsx)(xO, {
                label: "Shift",
                BL: NW("sprint")
              }), (0, jW.jsx)(xO, {
                label: "Ctrl",
                BL: NW("crouch")
              }), (0, jW.jsx)(xO, {
                label: "Space",
                BL: NW("jump"),
                wide: !0
              })]
            })]
          }), (0, jW.jsx)("div", {
            className: "brv-mouse",
            children: lO.map((WW => {
              let {
                action: iW,
                className: OW
              } = WW;
              return (0, jW.jsx)("span", {
                className: `${OW}${NW(iW)?" brv-key-held":""}`
              }, iW)
            }))
          })]
        })]
      })
    }
    const jO = {
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
      fps: WW => `${WW} FPS`,
      keys: "Keys",
      unboundKey: WW => `${WW} does nothing here`,
      unboundKeys: WW => `${WW} did nothing`
    };

    function UO(WW) {
      let {
        path: iW
      } = WW;
      return (0, jW.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, jW.jsx)("path", {
          d: iW
        })
      })
    }
    const kO = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function sO(WW) {
      let {
        label: iW,
        onClick: OW,
        children: mW
      } = WW;
      return (0, jW.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: iW,
        "aria-label": iW,
        onClick: OW,
        children: mW
      })
    }

    function MO(WW) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === WW ? document.exitFullscreen() : WW.requestFullscreen()).catch((WW => {
        console.warn("Couldn't toggle fullscreen.", WW)
      }))
    }

    function KO(WW) {
      let {
        data: iW,
        className: OW,
        autoPlay: EW = !1,
        options: NW,
        labels: PW = jO,
        onController: LW
      } = WW;
      const cW = (0, mW.useRef)(null),
        wW = (0, mW.useRef)(null),
        tW = (0, mW.useRef)(NW);
      tW.current = NW;
      const ZW = (0, mW.useRef)(EW);
      ZW.current = EW;
      const xW = (0, mW.useRef)(LW);
      xW.current = LW;
      const [lW, AW] = (0, mW.useState)(null), [bW, UW] = (0, mW.useState)(null), [sW, MW] = (0, mW.useState)(!0), KW = () => {
        MW((WW => !WW))
      };
      (0, mW.useEffect)((() => {
        var WW;
        ! function(WW) {
          if (null !== WW.getElementById(Xi)) return;
          const iW = WW.createElement("style");
          iW.id = Xi, iW.textContent = qi, WW.head.appendChild(iW)
        }(document);
        const OW = new wO(cW.current, iW, tW.current),
          mW = OW.subscribe(UW);
        return AW(OW), null === (WW = xW.current) || void 0 === WW || WW.call(xW, OW), ZW.current && OW.play(), wW.current.focus({
          preventScroll: !0
        }), () => {
          var WW;
          mW(), OW.destroy(), null === (WW = xW.current) || void 0 === WW || WW.call(xW, null)
        }
      }), [iW]);
      const YW = null !== lW && lW.input.inputRecorded,
        yW = null === lW || null === bW ? void 0 : lW.chapters.findLast((WW => lW.timeline.toPosition(WW.startMs) <= bW.positionMs));
      return (0, jW.jsxs)("div", {
        ref: wW,
        className: void 0 === OW ? "brv-player" : `brv-player ${OW}`,
        tabIndex: 0,
        onKeyDown: WW => {
          if (WW.target instanceof HTMLSelectElement) return;
          if (" " === WW.key && WW.target !== WW.currentTarget && WW.target instanceof HTMLButtonElement) return;
          const iW = function(WW) {
            let {
              key: iW,
              shiftKey: OW,
              ctrlKey: mW,
              metaKey: EW,
              altKey: NW
            } = WW;
            if (mW || EW || NW) return null;
            const PW = Number(iW) - 1;
            if (/^[1-9]$/.test(iW) && PW < dW.length) return {
              type: "setSpeed",
              speed: dW[PW]
            };
            switch (iW.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: OW ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: OW ? 1e3 : 5e3
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
                  type: "chapter", direction: OW ? -1 : 1
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
          }(WW);
          null !== iW && null !== lW && null !== bW && (WW.preventDefault(), function(WW, iW, OW, mW) {
            switch (iW.type) {
              case "togglePlay":
                WW.togglePlay();
                break;
              case "seekBy":
                WW.seekBy(iW.deltaMs);
                break;
              case "stepFrame":
                WW.stepFrame(iW.direction);
                break;
              case "setSpeed":
                WW.setSpeed(iW.speed);
                break;
              case "chapter":
                WW.goToChapter(iW.direction);
                break;
              case "toggleSkipInactive":
                WW.setSkipInactive(!OW.skipInactive);
                break;
              case "toggleFullscreen":
                MO(mW.root);
                break;
              case "toggleKeys":
                mW.toggleKeys()
            }
          }(lW, iW, bW, {
            root: WW.currentTarget,
            toggleKeys: KW
          }))
        },
        children: [(0, jW.jsxs)("div", {
          ref: cW,
          className: "brv-viewport",
          onClick: () => {
            null === lW || void 0 === lW || lW.togglePlay()
          },
          children: [null !== bW && null !== bW.notice && (0, jW.jsx)("div", {
            className: "brv-overlay",
            children: PW[bW.notice]
          }), null !== lW && sW && YW && (0, jW.jsx)(bO, {
            controller: lW,
            labels: PW
          })]
        }), null !== lW && null !== bW && (0, jW.jsxs)(jW.Fragment, {
          children: [(0, jW.jsx)(SW, {
            controller: lW,
            frames: lW.frames,
            input: lW.input,
            markers: lW.markers,
            inactiveRanges: lW.inactiveRanges,
            videoGaps: lW.videoGaps,
            labels: PW
          }), lW.chapters.length > 1 && (0, jW.jsx)("div", {
            className: "brv-chapters",
            children: lW.chapters.map((WW => (0, jW.jsxs)("button", {
              type: "button",
              className: WW === yW ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                lW.seekToPosition(lW.timeline.toPosition(WW.startMs))
              },
              children: [WW.label, " \xb7 ", kW(WW.endMs - WW.startMs)]
            }, WW.startMs)))
          }), (0, jW.jsxs)("div", {
            className: "brv-controls",
            children: [(0, jW.jsx)(sO, {
              label: bW.playing ? PW.pause : PW.play,
              onClick: () => {
                lW.togglePlay()
              },
              children: (0, jW.jsx)(UO, {
                path: bW.playing ? kO.pause : kO.play
              })
            }), (0, jW.jsxs)("span", {
              className: "brv-time",
              children: [kW(bW.positionMs), " / ", kW(bW.durationMs)]
            }), (0, jW.jsx)("select", {
              className: "brv-speed",
              value: bW.speed,
              title: `${PW.speed} (1-${dW.length})`,
              "aria-label": PW.speed,
              onChange: WW => {
                lW.setSpeed(Number(WW.target.value))
              },
              children: dW.map((WW => (0, jW.jsxs)("option", {
                value: WW,
                children: [WW, "x"]
              }, WW)))
            }), (0, jW.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": bW.skipInactive,
              title: `${PW.skipInactive} (S)`,
              onClick: () => {
                lW.setSkipInactive(!bW.skipInactive)
              },
              children: [(0, jW.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), PW.skipInactive]
            }), YW && (0, jW.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": sW,
              title: `${PW.keys} (I)`,
              onClick: KW,
              children: [(0, jW.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), PW.keys]
            }), document.fullscreenEnabled && (0, jW.jsx)(sO, {
              label: PW.fullscreen,
              onClick: () => {
                MO(wW.current)
              },
              children: (0, jW.jsx)(UO, {
                path: kO.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var SO = OW(5995);
    const YO = ["bloxd.io", window.location.hostname];

    function yO(WW) {
      let {
        gameAnalyticsId: iW,
        recordingId: OW,
        userContext: EW,
        autoPlay: NW
      } = WW;
      const {
        t: PW
      } = (0, yW.B)(), [LW, cW] = (0, mW.useState)({
        status: "loading"
      }), [wW, tW] = (0, mW.useState)(0), ZW = (0, mW.useMemo)((() => function(WW) {
        return {
          play: WW("studio:replayPlay"),
          pause: WW("studio:replayPause"),
          speed: WW("studio:replaySpeed"),
          skipInactive: WW("studio:replaySkipIdle"),
          fullscreen: WW("studio:replayFullscreen"),
          tabHidden: WW("studio:replayTabHidden"),
          videoFailed: WW("studio:replayVideoFailed"),
          nothingToShow: WW("studio:replayNothingToShow"),
          videoGap: WW("studio:replayVideoGap"),
          error: WW("general:error"),
          graphicsCrash: WW("studio:replayMarkerGraphicsCrash"),
          death: WW("studio:replayMarkerDeath"),
          fps: iW => WW("studio:replayFps", {
            fps: iW
          }),
          keys: WW("studio:replayKeys"),
          unboundKey: iW => WW("studio:replayUnboundKey", {
            key: iW
          }),
          unboundKeys: iW => WW("studio:replayUnboundKeys", {
            keys: iW
          })
        }
      }(PW)), [PW]), xW = (0, mW.useMemo)((() => ({
        resourceHosts: YO,
        loadTelemetryChunk: nW.x,
        refreshUrls: async () => (0, nW.t)(await SO.b.getReplay(EW, iW, OW)),
        segmentUrls: {
          load: async WW => (await SO.b.getReplaySegmentUrls(EW, iW, OW, WW, [])).videoSegments,
          maxSequences: oW.e
        },
        telemetryUrls: {
          load: async WW => (await SO.b.getReplaySegmentUrls(EW, iW, OW, [], WW)).telemetrySegments,
          maxSequences: oW.h
        }
      })), [iW, OW]);
      return (0, mW.useEffect)((() => {
        let WW = !1;
        return cW({
          status: "loading"
        }), (0, nW.y)({
          getReplay: () => SO.b.getReplay(EW, iW, OW),
          loadDomEvents: nW.w,
          onPreparing: () => {
            cW({
              status: "preparing"
            })
          },
          wait: WW => new Promise((iW => {
            setTimeout(iW, WW)
          })),
          isCancelled: () => WW
        }).then((iW => {
          if (!WW && null !== iW) {
            const WW = (0, nW.u)(iW.replay, iW.domEvents, (WW => PW("studio:replayVisit", {
              number: WW
            })));
            cW({
              status: "loaded",
              value: WW
            })
          }
        })).catch((iW => {
          console.error("Failed to load studio replay", iW), WW || cW({
            status: "error",
            message: (0, nW.m)(iW, PW("studio:replayLoadFailed"))
          })
        })), () => {
          WW = !0
        }
      }), [iW, OW, wW]), "loading" === LW.status ? (0, jW.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, jW.jsx)(JW.d, {})
      }) : "preparing" === LW.status ? (0, jW.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, jW.jsx)(JW.d, {}), PW("studio:replayPreparing")]
      }) : "error" === LW.status ? (0, jW.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [LW.message, (0, jW.jsx)(hW.Z, {
          onClick: () => {
            tW((WW => WW + 1))
          },
          children: PW("general:tryAgain")
        })]
      }) : (0, jW.jsx)(KO, {
        className: "StudioReplayPlayer",
        data: LW.value,
        labels: ZW,
        options: xW,
        autoPlay: NW || wW > 0
      })
    }

    function TO(WW) {
      let {
        onPlay: iW
      } = WW;
      const {
        t: OW
      } = (0, yW.B)();
      return (0, jW.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": OW("general:play"),
        onClick: iW,
        children: (0, jW.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, jW.jsx)(HW.c, {
            name: "play"
          })
        })
      })
    }
    const JO = nW.F.replay,
      hO = nW.F.filters,
      HO = nW.F.endedAt,
      nO = {
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
      uO = {
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

    function oO(WW) {
      let {
        item: iW,
        selected: OW,
        onSelect: mW
      } = WW;
      const {
        t: EW
      } = (0, yW.B)(), PW = (0, nW.q)(iW);
      return (0, jW.jsxs)("button", {
        type: "button",
        className: NW()("StudioReplayListItem", {
          StudioReplayListItemSelected: OW
        }),
        onClick: mW,
        children: [(0, jW.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, jW.jsx)("span", {
            children: (0, nW.j)(iW.startedAtMs)
          }), (0, jW.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: kW(iW.inGameDurationMs)
          })]
        }), PW.length > 0 && (0, jW.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: PW.map((WW => (0, jW.jsx)("span", {
            className: NW()("StudioReplayTag", `StudioReplayTag-${WW}`),
            children: EW(uO[WW])
          }, WW)))
        })]
      })
    }

    function dO(WW) {
      let {
        gameAnalyticsId: iW,
        userContext: OW,
        availability: mW
      } = WW;
      const {
        t: EW
      } = (0, yW.B)();
      return "on" === mW ? (0, jW.jsx)(eO, {
        gameAnalyticsId: iW,
        userContext: OW
      }) : "failed" === mW ? (0, jW.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, jW.jsx)(HW.c, {
          name: "face-dizzy"
        }), EW("studio:replaysStartFailed"), (0, jW.jsx)(hW.Z, {
          onClick: () => {
            YW.e.startNow()
          },
          children: EW("general:tryAgain")
        })]
      }) : (0, jW.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, jW.jsx)(JW.d, {})
      })
    }

    function eO(WW) {
      var iW, OW;
      let {
        gameAnalyticsId: EW,
        userContext: PW
      } = WW;
      const {
        t: LW
      } = (0, yW.B)(), cW = function(WW, iW) {
        const {
          t: OW
        } = (0, yW.B)(), [EW, NW] = (0, mW.useState)({
          status: "loading"
        });
        return (0, mW.useEffect)((() => {
          let mW = !1;
          return NW({
            status: "loading"
          }), SO.b.listReplays(iW, WW).then((WW => {
            mW || NW({
              status: "loaded",
              value: WW
            })
          })).catch((WW => {
            console.error("Failed to list studio replays", WW), mW || NW({
              status: "error",
              message: (0, nW.m)(WW, OW("studio:replaysLoadFailed"))
            })
          })), () => {
            mW = !0
          }
        }), [WW]), EW
      }(EW, PW), [wW, tW] = (0, TW.q)(), ZW = (0, nW.D)(wW.get(hO)), xW = (0, nW.C)(wW.get(HO)), lW = wW.get(JO), AW = "loaded" === cW.status ? (0, nW.d)(cW.value.recordings, ZW, xW) : [], bW = "loaded" === cW.status ? (0, nW.I)(cW.value.recordings, AW, lW) : [], UW = null !== (iW = null !== lW && void 0 !== lW ? lW : null === (OW = bW[0]) || void 0 === OW ? void 0 : OW.recordingId) && void 0 !== iW ? iW : null, [kW, sW] = (0, mW.useState)(lW), [MW, KW] = (0, mW.useState)(!1), SW = (0, mW.useRef)(null), YW = (0, mW.useRef)(null !== lW), oW = (0, mW.useRef)(null);

      function dW(WW) {
        WW === kW && WW === UW || (oW.current = null, YW.current = !0, KW(!0), sW(WW), tW((iW => {
          (0, TW.j)(iW, JO, WW)
        }), {
          push: !0
        }))
      }

      function eW(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        UW !== kW && (oW.current = UW), tW((OW => {
          (0, TW.j)(OW, JO, UW), (0, TW.j)(OW, hO, (0, nW.i)(WW)), iW && (0, TW.j)(OW, HO, null)
        }))
      }
      if ((0, mW.useEffect)((() => {
          null !== lW && lW !== oW.current && sW(lW)
        }), [lW]), (0, mW.useEffect)((() => {
          YW.current && null !== SW.current && (YW.current = !1, SW.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [kW, cW.status]), "loading" === cW.status) return (0, jW.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, jW.jsx)(JW.d, {})
      });
      if ("error" === cW.status) return (0, jW.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, jW.jsx)(HW.c, {
          name: "face-dizzy"
        }), cW.message]
      });
      const {
        recordings: vW,
        dailyQuota: gW
      } = cW.value;
      if (0 === vW.length) return (0, jW.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, jW.jsx)(HW.c, {
          name: "video"
        }), LW(0 === gW ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const DW = nW.E.filter((WW => vW.some((iW => (0, nW.B)(iW, WW))))),
        VW = UW !== kW;
      return (0, jW.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, jW.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== xW && (0, jW.jsxs)(hW.Z, {
            active: !0,
            onClick: () => {
              eW(ZW, !0)
            },
            children: [LW("studio:replaysFilterEndedAt", {
              minutes: (0, uW.y)(xW.minute, xW.orLonger ? xW.minute : 1 / 0)
            }), (0, jW.jsx)(HW.c, {
              name: "xmark"
            })]
          }), DW.map((WW => (0, jW.jsx)(hW.Z, {
            active: ZW.includes(WW),
            onClick: () => {
              ! function(WW) {
                eW(ZW.includes(WW) ? ZW.filter((iW => iW !== WW)) : [...ZW, WW])
              }(WW)
            },
            children: LW(nO[WW])
          }, WW))), gW > 0 && (0, jW.jsx)("span", {
            className: "StudioReplaysQuota",
            children: LW("studio:replaysQuota", {
              count: gW
            })
          })]
        }), (0, jW.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, jW.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === AW.length && (0, jW.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [LW("studio:replaysNoMatch"), (0, jW.jsx)(hW.Z, {
                onClick: () => {
                  eW([], !0)
                },
                children: LW("studio:replaysClearFilters")
              })]
            }), bW.map((WW => (0, jW.jsx)(oO, {
              item: WW,
              selected: WW.recordingId === UW,
              onSelect: () => {
                dW(WW.recordingId)
              }
            }, WW.recordingId)))]
          }), null !== UW && (0, jW.jsxs)("div", {
            ref: SW,
            className: NW()("StudioReplayViewer", {
              StudioReplayViewerWaiting: VW
            }),
            children: [!VW && (0, jW.jsx)(yO, {
              gameAnalyticsId: EW,
              recordingId: UW,
              userContext: PW,
              autoPlay: MW
            }, UW), VW && (0, jW.jsx)(TO, {
              onPlay: () => {
                dW(UW)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);