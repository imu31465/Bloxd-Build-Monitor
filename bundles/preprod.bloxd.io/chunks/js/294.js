export const id = 294;
export const ids = [294];
export const modules = {
  41790: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => fL
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH);
    const hH = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      tH = 3e3;

    function zH(HH) {
      return HH.down && HH.inPlay && !HH.bound
    }

    function CH(HH, BH) {
      let LH = 0,
        AH = HH.length;
      for (; LH < AH;) {
        const rH = LH + AH >> 1;
        HH[rH].atMs <= BH ? LH = rH + 1 : AH = rH
      }
      return LH - 1
    }

    function EH(HH) {
      let {
        code: BH,
        unbound: LH
      } = HH;
      return `${BH}:${LH}`
    }

    function XH(HH, BH) {
      return BH[1] - HH[1] || (HH[0] < BH[0] ? -1 : 1)
    }
    const GH = {
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

    function YH(HH) {
      var BH;
      const LH = GH[HH];
      if (void 0 !== LH) return LH;
      const AH = null !== (BH = /^(?:Key|Digit)(.)$/.exec(HH)) && void 0 !== BH ? BH : /^Numpad(.+)$/.exec(HH);
      return null !== AH ? HH.startsWith("Numpad") ? `Num ${AH[1]}` : AH[1] : HH
    }
    const uH = 250,
      QH = 60;
    var WH = LH(1225);
    const MH = 6;

    function xH(HH) {
      const BH = Math.max(0, Math.floor(HH / 1e3)),
        LH = Math.floor(BH / 3600),
        AH = Math.floor(BH % 3600 / 60),
        rH = String(BH % 60).padStart(2, "0");
      return LH > 0 ? `${LH}:${String(AH).padStart(2,"0")}:${rH}` : `${AH}:${rH}`
    }

    function vH(HH, BH) {
      return getComputedStyle(HH).getPropertyValue(BH).trim()
    }

    function PH(HH, BH) {
      switch (HH.kind) {
        case "note":
          return HH.label;
        case "hidden":
          return BH.tabHidden;
        default:
          return BH[HH.kind]
      }
    }

    function TH(HH) {
      let {
        draw: BH,
        className: LH
      } = HH;
      const rH = (0, AH.useRef)(null);
      return (0, AH.useEffect)((() => {
        const HH = rH.current,
          LH = HH.getContext("2d");
        if (null === BH || null === LH) return;
        const {
          clientWidth: AH,
          clientHeight: SH
        } = HH, hH = window.devicePixelRatio;
        HH.width = Math.round(AH * hH), HH.height = Math.round(SH * hH), LH.setTransform(hH, 0, 0, hH, 0, 0), BH(LH, AH, SH, HH)
      }), [BH]), (0, WH.jsx)("canvas", {
        ref: rH,
        className: LH
      })
    }

    function UH(HH) {
      let {
        controller: BH,
        frames: LH,
        input: rH,
        markers: SH,
        inactiveRanges: hH,
        videoGaps: CH,
        labels: EH
      } = HH;
      const {
        timeline: GH
      } = BH, UH = (0, AH.useRef)(null), [VH, OH] = (0, AH.useState)(0), [bH, kH] = (0, AH.useState)(null), mH = (0, AH.useRef)(null), oH = Math.max(1, GH.durationMs);
      ! function(HH, BH, LH) {
        (0, AH.useEffect)((() => {
          let AH = 0,
            rH = NaN;
          const SH = () => {
            var hH;
            AH = requestAnimationFrame(SH);
            const tH = (null !== (hH = BH.current) && void 0 !== hH ? hH : HH.getPositionMs()) / Math.max(1, HH.timeline.durationMs) * 100;
            tH !== rH && (rH = tH, LH.current.style.setProperty("--brv-position", `${tH}%`))
          };
          return SH(), () => {
            cancelAnimationFrame(AH)
          }
        }), [HH])
      }(BH, mH, UH), (0, AH.useEffect)((() => {
        const HH = UH.current,
          BH = new ResizeObserver((() => {
            OH(HH.clientWidth)
          }));
        return BH.observe(HH), () => {
          BH.disconnect()
        }
      }), []);
      const IH = (0, AH.useMemo)((() => 0 === VH ? null : function(HH, BH, LH) {
          const AH = Math.max(1, Math.min(LH, Math.floor(BH.durationMs / uH))),
            rH = BH.durationMs / AH,
            SH = new Array(AH).fill(0);
          for (const hH of HH) BH.contains(hH.atMs) && SH[Math.min(AH - 1, Math.floor(BH.toPosition(hH.atMs) / rH))]++;
          return {
            bucketMs: rH,
            fps: SH.map((HH => 0 === HH ? null : 1e3 * HH / rH))
          }
        }(LH, GH, Math.round(VH))), [LH, GH, VH]),
        fH = BH.lowFps,
        lH = (0, AH.useMemo)((() => null === IH ? null : (HH, BH, LH, AH) => {
          ! function(HH, BH, LH, AH, rH, SH) {
            HH.clearRect(0, 0, LH, AH);
            const hH = LH / BH.fps.length;
            BH.fps.forEach(((BH, LH) => {
              if (null === BH) return;
              const tH = Math.max(1, Math.min(BH, QH) / QH * AH);
              HH.fillStyle = BH < rH ? SH.lowFps : SH.fps, HH.fillRect(LH * hH, AH - tH, Math.max(1, hH), tH)
            }))
          }(HH, IH, BH, LH, fH, {
            fps: vH(AH, "--brv-fps"),
            lowFps: vH(AH, "--brv-low-fps")
          })
        }), [IH, fH]),
        KH = (0, AH.useMemo)((() => {
          if (0 === VH || !rH.inputRecorded) return null;
          const HH = function(HH, BH, LH) {
            const AH = Math.max(1, BH.durationMs) / LH,
              rH = new Array(LH).fill(0),
              SH = new Array(LH).fill(0);
            for (const hH of HH) {
              if (!hH.down || !BH.contains(hH.atMs)) continue;
              const HH = Math.min(LH - 1, Math.floor(BH.toPosition(hH.atMs) / AH));
              rH[HH]++, zH(hH) && SH[HH]++
            }
            return {
              presses: rH,
              unbound: SH
            }
          }(rH.keys, GH, Math.max(1, Math.round(VH)));
          return (BH, LH, AH, rH) => {
            ! function(HH, BH, LH, AH, rH) {
              HH.clearRect(0, 0, LH, AH);
              const SH = LH / BH.presses.length;
              BH.presses.forEach(((LH, hH) => {
                if (0 === LH) return;
                const tH = BH.unbound[hH] > 0;
                HH.globalAlpha = tH ? 1 : Math.min(1, .35 + .15 * LH), HH.fillStyle = tH ? rH.unbound : rH.presses, HH.fillRect(hH * SH, 0, Math.max(tH ? 2 : 1, SH), AH)
              })), HH.globalAlpha = 1
            }(BH, HH, LH, AH, {
              presses: vH(rH, "--brv-key-press"),
              unbound: vH(rH, "--brv-key-unbound")
            })
          }
        }), [rH, GH, VH]),
        cH = (0, AH.useMemo)((() => function(HH) {
          const BH = [];
          for (const AH of HH) {
            var LH;
            if (!zH(AH)) continue;
            let HH = BH.at(-1);
            (void 0 === HH || AH.atMs - HH.endMs > tH) && (HH = {
              startMs: AH.atMs,
              endMs: AH.atMs,
              counts: new Map
            }, BH.push(HH)), HH.endMs = AH.atMs, HH.counts.set(AH.code, (null !== (LH = HH.counts.get(AH.code)) && void 0 !== LH ? LH : 0) + 1)
          }
          return BH.map((HH => {
            let {
              startMs: BH,
              endMs: LH,
              counts: AH
            } = HH;
            return {
              startMs: BH,
              endMs: LH,
              keys: [...AH].sort(XH)
            }
          }))
        }(rH.keys.filter((HH => GH.contains(HH.atMs))))), [rH.keys, GH]),
        eH = HH => GH.toPosition(HH) / oH * 100,
        qH = HH => eH(HH) / 100 * VH,
        gH = HH => {
          const BH = UH.current.getBoundingClientRect();
          return {
            px: HH - BH.left,
            positionMs: Math.max(0, Math.min(BH.width, HH - BH.left)) / BH.width * oH
          }
        },
        NH = null === bH || 0 === VH ? null : {
          px: bH,
          positionMs: Math.max(0, Math.min(VH, bH)) / VH * oH
        },
        RH = null === NH || null === IH ? null : function(HH, BH) {
          const LH = Math.max(0, Math.min(HH.fps.length - 1, Math.floor(BH / HH.bucketMs))),
            AH = HH.fps[LH];
          return null === AH ? null : Math.round(AH)
        }(IH, NH.positionMs),
        jH = null !== NH && CH.some((HH => NH.px >= qH(HH.startMs) && NH.px < qH(HH.endMs))),
        nH = null === NH ? void 0 : SH.find((HH => {
          var BH;
          return NH.px >= qH(HH.atMs) - MH && NH.px <= qH(null !== (BH = HH.endMs) && void 0 !== BH ? BH : HH.atMs) + MH
        })),
        FH = null === NH ? void 0 : cH.find((HH => NH.px >= qH(HH.startMs) - MH && NH.px <= qH(HH.endMs) + MH));
      return (0, WH.jsxs)("div", {
        ref: UH,
        className: rH.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: HH => {
          HH.currentTarget.setPointerCapture(HH.pointerId);
          const BH = gH(HH.clientX);
          kH(BH.px), mH.current = BH.positionMs
        },
        onPointerMove: HH => {
          const BH = gH(HH.clientX);
          kH(BH.px), null !== mH.current && (mH.current = BH.positionMs)
        },
        onPointerUp: HH => {
          null !== mH.current && (BH.seekToPosition(gH(HH.clientX).positionMs), mH.current = null)
        },
        onPointerCancel: () => {
          mH.current = null, kH(null)
        },
        onPointerLeave: () => {
          kH(null)
        },
        children: [(0, WH.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, WH.jsx)(TH, {
            draw: lH,
            className: "brv-seekbar-canvas"
          }), hH.map((HH => {
            const BH = eH(HH.startMs);
            return (0, WH.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${BH}%`,
                width: eH(HH.endMs) - BH + "%"
              }
            }, HH.startMs)
          })), CH.map((HH => {
            const BH = eH(HH.startMs);
            return (0, WH.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${BH}%`,
                width: eH(HH.endMs) - BH + "%"
              }
            }, HH.startMs)
          })), (0, WH.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== NH && (0, WH.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: NH.px
            }
          })]
        }), rH.inputRecorded && (0, WH.jsx)(TH, {
          draw: KH,
          className: "brv-seekbar-input"
        }), (0, WH.jsx)("div", {
          className: "brv-seekbar-markers",
          children: SH.map(((HH, BH) => {
            var LH;
            const AH = eH(HH.atMs),
              rH = void 0 !== HH.endMs;
            return (0, WH.jsx)("div", {
              className: `brv-marker brv-marker-${HH.kind}${rH?" brv-marker-range":""}`,
              style: {
                left: `${AH}%`,
                width: rH ? eH(null !== (LH = HH.endMs) && void 0 !== LH ? LH : HH.atMs) - AH + "%" : void 0
              }
            }, BH)
          }))
        }), (0, WH.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== NH && (0, WH.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: NH.px
          },
          children: [xH(NH.positionMs), null !== RH && ` \xb7 ${EH.fps(RH)}`, void 0 !== nH && ` \xb7 ${PH(nH,EH)}`, jH && ` \xb7 ${EH.videoGap}`, void 0 !== FH && ` \xb7 ${EH.unboundKeys((DH=FH.keys,DH.map((HH=>{let[BH,LH]=HH;return LH>1?`${YH(BH)} \xd7${LH}`:YH(BH)})).join(", ")))}`]
        })]
      });
      var DH
    }
    var VH = LH(5083),
      OH = LH(1123),
      bH = LH(4969),
      kH = LH(1313),
      mH = LH(1455),
      oH = LH(1315),
      IH = LH(7049),
      fH = LH(5572),
      lH = LH(5566);
    const KH = [.5, 1, 2, 4, 8, 16];
    var cH = LH(41798);

    function eH(HH) {
      const BH = HH.filter((HH => HH.endMs > HH.startMs)).sort(((HH, BH) => HH.startMs - BH.startMs)),
        LH = [];
      for (const AH of BH) {
        const HH = LH.at(-1);
        void 0 !== HH && AH.startMs <= HH.endMs ? HH.endMs = Math.max(HH.endMs, AH.endMs) : LH.push({
          ...AH
        })
      }
      return LH
    }
    class qH {
      constructor(HH) {
        this.rW = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.rW = eH(HH), this.positionStarts = [];
        let BH = 0;
        for (const LH of this.rW) this.positionStarts.push(BH), BH += LH.endMs - LH.startMs;
        this.durationMs = BH
      }
      get startMs() {
        var HH, BH;
        return null !== (HH = null === (BH = this.rW[0]) || void 0 === BH ? void 0 : BH.startMs) && void 0 !== HH ? HH : 0
      }
      get endMs() {
        var HH, BH;
        return null !== (HH = null === (BH = this.rW.at(-1)) || void 0 === BH ? void 0 : BH.endMs) && void 0 !== HH ? HH : 0
      }
      toPosition(HH) {
        for (let BH = 0; BH < this.rW.length; BH++) {
          const LH = this.rW[BH];
          if (HH < LH.endMs) return this.positionStarts[BH] + Math.max(0, HH - LH.startMs)
        }
        return this.durationMs
      }
      toTime(HH) {
        const BH = Math.max(0, Math.min(this.durationMs, HH));
        for (let LH = this.rW.length - 1; LH >= 0; LH--)
          if (BH >= this.positionStarts[LH]) return this.rW[LH].startMs + (BH - this.positionStarts[LH]);
        return this.startMs
      }
      contains(HH) {
        return this.rW.some((BH => HH >= BH.startMs && HH < BH.endMs))
      }
      nextPlayableTime(HH) {
        for (const BH of this.rW) {
          if (HH < BH.startMs) return BH.startMs;
          if (HH < BH.endMs) return HH
        }
        return null
      }
    }

    function gH(HH) {
      return [...HH].sort(((HH, BH) => HH.startMs - BH.startMs))
    }

    function NH(HH, BH) {
      let LH = 1 / 0,
        AH = -1 / 0;
      const rH = HH => {
        LH = Math.min(LH, HH), AH = Math.max(AH, HH)
      };
      for (const SH of [...HH.videoSegments, ...HH.telemetryChunks]) rH(SH.startMs), rH(SH.endMs);
      for (const SH of HH.domEvents) rH(BH.toEpoch(SH.timestamp));
      return LH < AH ? {
        startMs: LH,
        endMs: AH
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class RH {
      constructor(HH, BH) {
        this.wallNowMs = BH, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = HH, this.anchorWallMs = BH()
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
      timeAtWall(HH) {
        return this.playingState ? this.anchorTimeMs + (HH - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(HH) {
        this.anchorTimeMs = HH, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(HH) {
        this.reanchor(), this.speedState = HH
      }
      reanchor() {
        const HH = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(HH), this.anchorWallMs = HH
      }
    }
    const jH = "bloxd-clock";
    class nH {
      constructor(HH) {
        this.samples = void 0, this.samples = [];
        for (const LH of HH) {
          var BH;
          const HH = LH.data;
          LH.type === cH.b.Custom && (null === HH || void 0 === HH ? void 0 : HH.tag) === jH && "number" === typeof(null === (BH = HH.payload) || void 0 === BH ? void 0 : BH.epochMs) && this.samples.push({
            domMs: LH.timestamp,
            offsetMs: HH.payload.epochMs - LH.timestamp
          })
        }
        this.samples.sort(((HH, BH) => HH.domMs - BH.domMs))
      }
      toEpoch(HH) {
        return HH + this.offsetAtDom(HH)
      }
      toDom(HH) {
        return HH - this.offsetAtDom(HH)
      }
      offsetAtDom(HH) {
        var BH, LH;
        let AH = 0,
          rH = this.samples.length - 1;
        for (; AH < rH;) {
          const BH = Math.ceil((AH + rH) / 2);
          this.samples[BH].domMs <= HH ? AH = BH : rH = BH - 1
        }
        return null !== (BH = null === (LH = this.samples[AH]) || void 0 === LH ? void 0 : LH.offsetMs) && void 0 !== BH ? BH : 0
      }
    }
    const FH = new Set([cH.d.MouseMove, cH.d.MouseInteraction, cH.d.Scroll, cH.d.Input, cH.d.TouchMove, cH.d.Drag]),
      DH = "bloxd-active",
      wH = "player_death",
      ZH = "error",
      dH = {
        $exception: "error",
        [ZH]: "error",
        death: "death",
        [wH]: "death"
      };

    function aH(HH, BH, LH) {
      return function(HH, BH) {
        const LH = [];
        for (const AH of HH) {
          let HH = AH.startMs;
          for (const rH of BH) rH.endMs <= HH || rH.startMs >= AH.endMs || (rH.startMs > HH && LH.push({
            startMs: HH,
            endMs: rH.startMs
          }), HH = Math.max(HH, rH.endMs));
          HH < AH.endMs && LH.push({
            startMs: HH,
            endMs: AH.endMs
          })
        }
        return LH
      }(function(HH) {
        const BH = [];
        for (const LH of HH) {
          const HH = BH.at(-1);
          void 0 !== HH && LH.atMs - HH.endMs <= 5e3 ? HH.endMs = LH.atMs : BH.push({
            startMs: LH.atMs,
            endMs: LH.atMs
          })
        }
        return BH
      }(HH), eH([...BH, ...LH])).filter((HH => HH.endMs - HH.startMs >= 1e3))
    }

    function sH(HH) {
      var BH, LH, AH;
      return HH.type === cH.b.IncrementalSnapshot ? FH.has(null !== (LH = null === (AH = HH.data) || void 0 === AH ? void 0 : AH.source) && void 0 !== LH ? LH : -1) : HH.type === cH.b.Custom && (null === (BH = HH.data) || void 0 === BH ? void 0 : BH.tag) === DH
    }

    function JH(HH, BH) {
      const LH = [];
      for (const hH of HH)
        if (hH.type === cH.b.Custom) {
          var AH;
          const HH = null === (AH = hH.data) || void 0 === AH ? void 0 : AH.tag,
            rH = void 0 === HH ? void 0 : dH[HH];
          void 0 !== rH && LH.push({
            kind: rH,
            atMs: BH.toEpoch(hH.timestamp)
          })
        } else if (hH.type === cH.b.Plugin) {
        var rH, SH;
        const HH = hH.data;
        "rrweb/console@1" !== (null === HH || void 0 === HH ? void 0 : HH.plugin) || "error" !== (null === (rH = HH.payload) || void 0 === rH ? void 0 : rH.level) && "assert" !== (null === (SH = HH.payload) || void 0 === SH ? void 0 : SH.level) || LH.push({
          kind: "error",
          atMs: BH.toEpoch(hH.timestamp)
        })
      }
      return LH
    }
    const iH = 3e6;
    class pH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iH;
        this.fetchUrls = HH, this.onUrls = BH, this.wallNowMs = LH, this.refreshableAfterMs = AH, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = LH()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const HH = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        HH > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), HH) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(HH) {
        this.inFlight = !0;
        const BH = this.wallNowMs();
        this.lastRefreshWallMs = BH;
        let LH = !1;
        HH().then((HH => {
          this.destroyed || (this.urlsFetchedAtWallMs = BH, this.onUrls(HH))
        })).catch((HH => {
          console.error("Failed to refresh the replay's URLs.", HH), LH = !0
        })).finally((() => {
          this.inFlight = !1, LH && this.request()
        }))
      }
    }
    class yH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iH;
        this.source = HH, this.description = BH, this.wallNowMs = LH, this.refreshableAfterMs = AH, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(HH) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const BH = this.wallNowMs();
        for (const LH of HH) this.entries.set(LH.sequence, {
          urls: LH,
          fetchedAtWallMs: BH
        })
      }
      get(HH) {
        const BH = this.getFresh(HH);
        return null !== BH ? BH : null === this.source || this.unavailable.has(HH) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(HH) {
        return null === this.getFresh(HH) && !this.unavailable.has(HH)
      }
      request(HH) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const BH = HH.filter((HH => this.needs(HH)));
        BH.length > 0 && this.fetch(this.source, BH.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(HH) {
        const BH = this.entries.get(HH);
        return void 0 === BH ? null : null === this.source || this.wallNowMs() - BH.fetchedAtWallMs < this.refreshableAfterMs ? BH.urls : null
      }
      fetch(HH, BH) {
        this.inFlight = !0;
        const LH = this.wallNowMs();
        HH.load(BH).then((HH => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const AH = new Set;
          for (const BH of HH) this.entries.set(BH.sequence, {
            urls: BH,
            fetchedAtWallMs: LH
          }), AH.add(BH.sequence);
          for (const LH of BH) AH.has(LH) || (console.warn(`Replay sequence ${LH} has no ${this.description}.`), this.unavailable.add(LH))
        })).catch((HH => {
          console.error(`Failed to fetch the replay's ${this.description}.`, HH), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class HB {
      constructor(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : iH;
        this.load = BH, this.onLoaded = LH, this.onFailed = AH, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = BB([]), this.hidden = [], this.destroyed = !1, this.chunks = [...HH].sort(((HH, BH) => HH.startMs - BH.startMs)).map((HH => ({
          chunk: HH,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new yH(rH, "telemetry URLs", SH, hH), this.urls.reset(AB(HH))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((HH => "loaded" === HH.status)).length
      }
      update(HH, BH, LH) {
        if (null === this.load || this.destroyed) return;
        const AH = BH.toPosition(HH),
          rH = BH.toTime(AH - 1e4),
          SH = BH.toTime(AH + 6e4 * Math.max(1, LH)),
          hH = BH.toTime(AH + 12e4 * Math.max(1, LH)),
          tH = this.chunks.filter((HH => "idle" === HH.status && HH.chunk.endMs >= rH && HH.chunk.startMs <= hH)).sort(((BH, LH) => rB(HH, BH.chunk) - rB(HH, LH.chunk)));
        this.urls.request(tH.flatMap((HH => {
          var BH;
          let {
            chunk: LH
          } = HH;
          return null !== (BH = LH.sequence) && void 0 !== BH ? BH : []
        })));
        for (const zH of tH) {
          if (this.loading >= 3) return;
          const HH = zH.chunk.startMs <= SH ? this.getUrl(zH.chunk) : null;
          null !== HH && this.startLoad(zH, HH, this.load)
        }
      }
      replaceUrls(HH) {
        this.urls.reset(AB(HH));
        for (const BH of this.chunks) {
          const LH = HH.find((HH => HH.startMs === BH.chunk.startMs && HH.endMs === BH.chunk.endMs));
          void 0 !== LH && (BH.chunk = LH, "failed" === BH.status && (BH.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(HH) {
        var BH;
        if (void 0 === HH.sequence) return null !== (BH = HH.url) && void 0 !== BH ? BH : null;
        const LH = this.urls.get(HH.sequence);
        return "string" === typeof LH ? null : LH.url
      }
      startLoad(HH, BH, LH) {
        HH.status = "loading", HH.attempts++, this.loading++, LH(BH).then((BH => {
          this.destroyed || (HH.status = "loaded", HH.telemetry = BH, this.merge(), this.onLoaded())
        })).catch((BH => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${HH.chunk.startMs}-${HH.chunk.endMs}.`, BH), HH.status = HH.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const HH = [];
        let BH = !1;
        for (const AH of this.chunks) {
          const LH = HH.at(-1);
          if (null === AH.telemetry) {
            BH = !1;
            continue
          }
          const rH = LB(AH.telemetry, AH.chunk);
          void 0 !== LH && BH && AH.chunk.startMs <= LH.endMs + 1e3 ? (LH.telemetry.push(rH), LH.endMs = AH.chunk.endMs) : (HH.push({
            telemetry: [rH],
            endMs: AH.chunk.endMs
          }), BH = !0)
        }
        const LH = HH.map((HH => function(HH, BH) {
          const LH = HH.actions.at(-1);
          if (void 0 === LH || 0 === LH.bits) return HH;
          return {
            ...HH,
            actions: [...HH.actions, {
              atMs: BH,
              bits: 0
            }]
          }
        }(BB(HH.telemetry), HH.endMs)));
        this.merged = BB(LH), this.hidden = LH.flatMap(((BH, LH) => function(HH, BH) {
          const LH = [];
          let AH = null;
          for (const {
              atMs: rH,
              event: SH
            }
            of HH.events) "hidden" === SH && null === AH ? AH = rH : "visible" === SH && null !== AH && (LH.push({
            startMs: AH,
            endMs: rH
          }), AH = null);
          return null !== AH && LH.push({
            startMs: AH,
            endMs: BH
          }), eH(LH)
        }(BH, HH[LH].endMs)))
      }
    }

    function BB(HH) {
      return {
        inputRecorded: HH.some((HH => HH.keys.length > 0)),
        frames: HH.flatMap((HH => HH.frames)),
        states: HH.flatMap((HH => HH.states)),
        events: HH.flatMap((HH => HH.events)),
        actions: HH.flatMap((HH => HH.actions)),
        keys: HH.flatMap((HH => HH.keys))
      }
    }

    function LB(HH, BH) {
      const {
        actions: LH
      } = HH;
      return !HH.inputRecorded || LH.length > 0 && LH[0].atMs <= BH.startMs + 1 ? HH : {
        ...HH,
        actions: [{
          atMs: BH.startMs,
          bits: 0
        }, ...LH]
      }
    }

    function AB(HH) {
      return HH.flatMap((HH => {
        let {
          sequence: BH,
          url: LH
        } = HH;
        return void 0 === BH || void 0 === LH ? [] : [{
          sequence: BH,
          url: LH
        }]
      }))
    }

    function rB(HH, BH) {
      return HH < BH.startMs ? BH.startMs - HH : HH > BH.endMs ? 2 * (HH - BH.endMs) : 0
    }
    class SB {
      constructor(HH, BH, LH, AH) {
        this.data = HH, this.domClock = BH, this.timeline = LH, this.options = AH, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(HH, BH) {
          return HH.filter(sH).map((HH => BH.toEpoch(HH.timestamp)))
        }(HH.domEvents, BH), this.telemetry = new HB(HH.telemetryChunks, AH.loadTelemetryChunk, (() => {
          this.rebuild()
        }), AH.onTelemetryFailed, AH.telemetryUrls), this.rebuild()
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
      update(HH, BH) {
        this.telemetry.update(HH, this.timeline, BH)
      }
      replaceTelemetryUrls(HH) {
        this.telemetry.replaceUrls(HH)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(HH) {
        return this.telemetry.hiddenRanges.some(hB(HH))
      }
      isVideoGapAt(HH) {
        return this.videoGapRanges.some(hB(HH))
      }
      rebuild() {
        const HH = this.telemetry.telemetry,
          BH = this.telemetry.hiddenRanges;
        this.videoGapRanges = aH(HH.frames, this.data.videoSegments, BH), this.inactiveRangeList = function(HH, BH, LH, AH) {
          const rH = [...BH];
          if (HH.length > 0) {
            const BH = [LH.startMs, ...HH, LH.endMs];
            for (let HH = 1; HH < BH.length; HH++) {
              const LH = BH[HH - 1],
                SH = BH[HH] - 1e3;
              SH - LH >= AH && rH.push({
                startMs: LH,
                endMs: SH
              })
            }
          }
          return eH(rH).filter((HH => HH.endMs - HH.startMs >= AH))
        }(this.activityTimes, BH, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(HH) {
          const {
            timeline: BH
          } = HH;
          return [...JH(HH.domEvents, HH.domClock), ...HH.telemetry.events.filter((HH => {
            let {
              event: BH
            } = HH;
            return "contextLost" === BH
          })).map((HH => {
            let {
              atMs: BH
            } = HH;
            return {
              kind: "graphicsCrash",
              atMs: BH
            }
          })), ...HH.hidden.map((HH => ({
            kind: "hidden",
            atMs: HH.startMs,
            endMs: HH.endMs
          }))), ...HH.extraMarkers].filter((HH => HH.atMs >= BH.startMs && HH.atMs <= BH.endMs && (BH.contains(HH.atMs) || BH.contains(HH.atMs - 1)))).sort(((HH, BH) => HH.atMs - BH.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: HH,
          extraMarkers: this.data.markers,
          hidden: BH,
          timeline: this.timeline
        })
      }
    }

    function hB(HH) {
      return BH => HH >= BH.startMs && HH < BH.endMs
    }
    class tB {
      constructor() {
        this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
          handler: (HH, BH, LH) => {
            let {
              replayer: AH
            } = LH;
            this.record(HH), BH && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
              this.settleQueued = !1, this.settle(AH)
            })))
          }
        }
      }
      settle(HH) {
        const BH = HH.iframe.contentDocument;
        if (null === BH || void 0 === BH || !BH.documentElement.classList.contains("rrweb-paused")) return;
        const LH = HH.getMetaData().startTime + HH.getCurrentTime();
        ! function(HH, BH, LH, AH) {
          for (const rH of HH) {
            const HH = rH.effect,
              SH = LH.get(BH.getId(HH.target)),
              hH = void 0 === SH ? 1 / 0 : AH - SH,
              tH = Math.min(Math.max(hH, Number(rH.currentTime)), Number(HH.getComputedTiming().endTime));
            Number.isFinite(tH) && (rH.currentTime = tH)
          }
        }(BH.getAnimations(), HH.getMirror(), this.addedAt, LH)
      }
      record(HH) {
        if (HH.type === cH.b.FullSnapshot) this.addedAt.clear();
        else if (HH.type === cH.b.IncrementalSnapshot && HH.data.source === cH.d.Mutation) {
          for (const {
              id: BH
            }
            of HH.data.removes) this.addedAt.delete(BH);
          for (const {
              node: BH
            }
            of HH.data.adds) this.addedAt.set(BH.id, HH.timestamp)
        }
      }
    }
    const zB = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      CB = new Set(["srcset", "imagesrcset"]),
      EB = new Set(["to", "from", "by", "values"]),
      XB = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      GB = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      YB = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      uB = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      QB = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      WB = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      MB = /^data:image\/(?!svg)/i,
      xB = "about:invalid";

    function vB(HH, BH) {
      let {
        hosts: LH
      } = BH, AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const rH = HH.trim();
      if (/[\\\u0000-\u001f]/.test(rH)) return !1;
      if (!WB.test(rH)) return !0;
      let SH;
      try {
        SH = new URL(rH.startsWith("//") ? `https:${rH}` : rH)
      } catch {
        return !1
      }
      return "data:" === SH.protocol ? AH ? "text/css" !== rH.slice(5).split(/[,;]/)[0].trim().toLowerCase() : MB.test(rH) : "blob:" === SH.protocol || ("http:" === SH.protocol || "https:" === SH.protocol) && LH.some((HH => SH.hostname === HH || SH.hostname.endsWith(`.${HH}`)))
    }

    function PB(HH, BH) {
      return HH.replace(GB, (function(HH) {
        for (var LH = arguments.length, AH = new Array(LH > 1 ? LH - 1 : 0), rH = 1; rH < LH; rH++) AH[rH - 1] = arguments[rH];
        if (vB(AH.slice(0, 7).find((HH => "string" === typeof HH)), BH, !0)) return HH;
        const SH = HH.slice(0, 4).toLowerCase();
        return "url(" === SH ? `url("${xB}")` : "@imp" === SH ? `@import "${xB}"` : `"${xB}"`
      }))
    }

    function TB(HH) {
      return QB.test(HH.replace(GB, '""'))
    }

    function UB(HH) {
      let BH = "between";
      for (let LH = 0; LH < HH.length; LH++) {
        const AH = HH[LH];
        if ("/" === AH && "*" === HH[LH + 1]) {
          if (LH = HH.indexOf("*/", LH + 2), -1 === LH) return "open";
          LH++, BH = "between"
        } else if ('"' === AH || "'" === AH) {
          for (LH++; LH < HH.length && HH[LH] !== AH && !/[\n\r\f]/.test(HH[LH]); LH++) "\\" === HH[LH] && LH++;
          if (LH >= HH.length) return "open";
          BH = "token"
        } else "\\" === AH ? (LH++, BH = "token") : ";" === AH || "{" === AH || "}" === AH ? BH = "between" : /\s/.test(AH) || (BH = "token")
      }
      return BH
    }

    function VB(HH, BH) {
      const LH = PB(HH, BH);
      if (TB(LH) || "open" === UB(LH)) return "";
      if (!LH.includes("\\")) return LH;
      const AH = function(HH) {
        return HH.replace(uB, ((HH, BH, LH) => void 0 !== BH ? String.fromCodePoint(Math.min(parseInt(BH, 16), 1114111)) : null !== LH && void 0 !== LH ? LH : ""))
      }(LH);
      return PB(AH, BH) !== AH || TB(AH) ? "" : LH
    }

    function OB(HH, BH) {
      const LH = YB.test(HH) ? VB(HH, BH) : HH;
      return LH.split("/* rr_split */").every((HH => "between" === UB(HH))) ? LH : ""
    }

    function bB(HH, BH, LH) {
      if ("string" === typeof BH) {
        const AH = HH.toLowerCase();
        if (XB.has(AH)) return null;
        if (CB.has(AH)) return function(HH, BH) {
          return HH.split(",").every((HH => {
            const LH = HH.trim().split(/\s+/)[0];
            return void 0 === LH || "" === LH || vB(LH, BH)
          }))
        }(BH, LH) ? BH : null;
        if (EB.has(AH)) {
          return BH.split(";").every((HH => vB(HH, LH))) ? bB("", BH, LH) : null
        }
        return zB.has(AH) ? vB(BH, LH) ? BH : null : "_csstext" === AH ? OB(BH, LH) : YB.test(BH) ? VB(BH, LH) : BH
      }
      if (Array.isArray(BH)) return BH.map((HH => bB("", HH, LH)));
      if (null !== BH && "object" === typeof BH) {
        const AH = "style" === HH.toLowerCase(),
          rH = {};
        for (const [HH, hH] of Object.entries(BH)) rH[HH] = bB(AH ? "" : HH, hH, LH);
        const {
          id: SH
        } = rH;
        if ("number" === typeof SH && LH.styleTextIds.has(SH))
          for (const HH of ["textContent", "value"]) {
            const BH = rH[HH];
            "string" === typeof BH && (rH[HH] = OB(BH, LH))
          }
        return rH
      }
      return BH
    }

    function kB(HH, BH) {
      const LH = (HH, AH) => {
        if (null === HH || "object" !== typeof HH) return;
        const rH = HH;
        if (BH(rH, AH), Array.isArray(rH.childNodes))
          for (const BH of rH.childNodes) LH(BH, rH.id)
      };
      for (const AH of HH) {
        const HH = AH.data;
        if (AH.type === cH.b.FullSnapshot) LH(null === HH || void 0 === HH ? void 0 : HH.node, null);
        else if (AH.type === cH.b.IncrementalSnapshot && Array.isArray(null === HH || void 0 === HH ? void 0 : HH.adds))
          for (const BH of HH.adds) LH(null === BH || void 0 === BH ? void 0 : BH.node, null === BH || void 0 === BH ? void 0 : BH.parentId)
      }
    }

    function mB(HH) {
      const BH = new Set,
        LH = [];
      kB(HH, ((HH, AH) => {
        let {
          id: rH,
          tagName: SH
        } = HH;
        "number" === typeof rH && ("string" === typeof SH && "style" === SH.toLowerCase() && BH.add(rH), LH.push({
          id: rH,
          parentId: AH
        }))
      }));
      const AH = new Set;
      for (const {
          id: rH,
          parentId: SH
        }
        of LH) "number" === typeof SH && BH.has(SH) && AH.add(rH);
      return AH
    }
    const oB = {
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
      IB = {
        pointer: ["none", "coarse", "fine"],
        "any-pointer": ["none", "coarse", "fine"],
        hover: ["none", "hover"],
        "any-hover": ["none", "hover"]
      },
      fB = "(min-width: 0px)",
      lB = "(not (min-width: 0px))",
      KB = /@media\b[^{;]*/gi,
      cB = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
      eB = new Set(["_cssText", "rule", "replace", "replaceSync"]);

    function qB(HH, BH) {
      return HH.replace(KB, (HH => HH.replace(cB, ((HH, LH, AH) => {
        const rH = LH.toLowerCase(),
          SH = oB[BH][rH];
        if (void 0 === AH) return "none" === SH ? lB : fB;
        const hH = AH.toLowerCase();
        return IB[rH].includes(hH) ? hH === SH ? fB : lB : HH
      }))))
    }

    function gB(HH) {
      const BH = HH.attributes,
        LH = null === BH || void 0 === BH ? void 0 : BH.rel,
        AH = null === BH || void 0 === BH ? void 0 : BH.href;
      return "link" === HH.tagName && "string" === typeof LH && LH.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof AH ? AH : null
    }

    function NB(HH) {
      const BH = new Map;
      kB(HH, (HH => {
        const LH = gB(HH);
        null !== LH && BH.set(HH.id, LH)
      }));
      const LH = new Map;
      for (const rH of HH) {
        const HH = rH.data;
        if (rH.type === cH.b.IncrementalSnapshot && (null === HH || void 0 === HH ? void 0 : HH.source) === cH.d.Mutation)
          for (const rH of null !== (AH = HH.attributes) && void 0 !== AH ? AH : []) {
            var AH;
            const HH = rH.attributes._cssText,
              SH = BH.get(rH.id);
            "string" !== typeof HH || void 0 === SH || LH.has(SH) || LH.set(SH, HH)
          }
      }
      return LH
    }

    function RB(HH, BH, LH) {
      var AH;
      if ("string" === typeof HH) return null !== LH.pointer && eB.has(BH) ? qB(HH, LH.pointer) : HH;
      if (Array.isArray(HH)) {
        let BH = !1;
        const AH = HH.map((HH => {
          const AH = RB(HH, "", LH);
          return BH ||= AH !== HH, AH
        }));
        return BH ? AH : HH
      }
      if (null === HH || "object" !== typeof HH) return HH;
      const rH = function(HH, BH) {
        const LH = HH.attributes,
          AH = gB(HH),
          rH = null !== AH && void 0 === (null === LH || void 0 === LH ? void 0 : LH._cssText) ? BH.sheets.get(AH) : void 0;
        return void 0 === rH ? HH : {
          ...HH,
          attributes: {
            ...LH,
            _cssText: rH
          }
        }
      }(HH, LH);
      let SH = null;
      for (const [tH, zH] of Object.entries(rH)) {
        const HH = RB(zH, tH, LH);
        HH !== zH && (SH ??= {
          ...rH
        }, SH[tH] = HH)
      }
      const {
        id: hH
      } = rH;
      if (null !== LH.pointer && "number" === typeof hH && LH.styleTextIds.has(hH))
        for (const tH of ["textContent", "value"]) {
          const HH = rH[tH],
            BH = "string" === typeof HH ? qB(HH, LH.pointer) : HH;
          BH !== HH && (SH ??= {
            ...rH
          }, SH[tH] = BH)
        }
      return null !== (AH = SH) && void 0 !== AH ? AH : rH
    }
    const jB = "brv-styles",
      nB = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      FB = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${nB.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class DB {
      static create(HH, BH, LH, AH, rH, SH, hH, tH) {
        if (!BH.some((HH => HH.type === cH.b.FullSnapshot))) return null;
        const zH = function(HH, BH) {
          const LH = {
            sheets: NB(HH),
            styleTextIds: mB(HH),
            pointer: BH
          };
          return HH.map((HH => {
            if (HH.type !== cH.b.FullSnapshot && HH.type !== cH.b.IncrementalSnapshot) return HH;
            const BH = RB(HH.data, "data", LH);
            return BH === HH.data ? HH : {
              ...HH,
              data: BH
            }
          }))
        }(function(HH, BH) {
          const LH = {
            hosts: BH,
            styleTextIds: mB(HH)
          };
          return HH.map((HH => HH.type === cH.b.Meta ? HH : {
            ...HH,
            data: bB("data", HH.data, LH)
          }))
        }(BH, SH), LH);
        return new DB(HH, zH, AH, rH, hH, tH)
      }
      constructor(HH, BH, LH, AH, rH, SH) {
        var hH, tH, zH, CH;
        this.domClock = LH, this.canvasSelectors = AH, this.videoLayer = rH, this.replayer = void 0, this.pausedAnimations = new tB, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (hH = null === (tH = BH[0]) || void 0 === tH ? void 0 : tH.timestamp) && void 0 !== hH ? hH : 0, this.lastDomMs = null !== (zH = null === (CH = BH.at(-1)) || void 0 === CH ? void 0 : CH.timestamp) && void 0 !== zH ? zH : 0, this.replayer = new cH.h(BH, {
          root: HH,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          plugins: [this.pausedAnimations.plugin],
          insertStyleRules: nB
        }), this.replayer.on("resize", (HH => {
          const {
            width: BH,
            height: LH
          } = HH;
          SH({
            width: BH,
            height: LH
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect(), this.pausedAnimations.settle(this.replayer)
        }))
      }
      sync(HH, BH) {
        const LH = this.domOffsetAt(HH);
        BH ? this.replayer.play(LH) : this.replayer.pause(LH), this.lastDomCheckMs = performance.now()
      }
      update(HH, BH, LH) {
        LH - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = LH, this.placeVideoOverCanvas()), BH && LH - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = LH, this.checkDrift(HH))
      }
      setSpeed(HH) {
        this.replayer.setConfig({
          speed: HH
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(HH) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(HH)) - this.firstDomMs)
      }
      checkDrift(HH) {
        const BH = this.domOffsetAt(HH);
        BH >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - BH) > 400 && this.replayer.play(BH)
      }
      placeVideoOverCanvas() {
        const HH = this.replayer.iframe.contentDocument,
          BH = null === HH ? null : function(HH, BH) {
            for (const LH of BH) {
              const BH = HH.querySelector(LH);
              if (null !== BH) return BH
            }
            return null
          }(HH, this.canvasSelectors),
          LH = this.videoLayer.element;
        null !== BH ? (LH.previousSibling !== BH && BH.after(LH), LH.style.display = "", LH.style.left = `${BH.offsetLeft}px`, LH.style.top = `${BH.offsetTop}px`, LH.style.width = `${BH.offsetWidth}px`, LH.style.height = `${BH.offsetHeight}px`) : LH.style.display = "none"
      }
    }
    const wB = {
      width: 1280,
      height: 720
    };
    class ZB {
      constructor(HH, BH) {
        this.root = HH, this.onViewportChanged = BH, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", HH.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(HH)
      }
      setViewport(HH) {
        var BH;
        null === HH || HH.width <= 0 || HH.height <= 0 || HH.width === (null === (BH = this.viewport) || void 0 === BH ? void 0 : BH.width) && HH.height === this.viewport.height || (this.viewport = HH, this.element.style.width = `${HH.width}px`, this.element.style.height = `${HH.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var HH;
        const BH = null !== (HH = this.viewport) && void 0 !== HH ? HH : wB,
          LH = this.root.getBoundingClientRect(),
          AH = Math.min(LH.width / BH.width, LH.height / BH.height),
          rH = (LH.width - BH.width * AH) / 2,
          SH = (LH.height - BH.height * AH) / 2;
        this.element.style.transform = `translate(${rH}px, ${SH}px) scale(${AH})`
      }
    }
    class dB {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iH;
        this.urls = void 0, this.urls = new yH(HH, "video URLs", BH, LH)
      }
      reset(HH) {
        this.urls.reset(HH.flatMap((HH => {
          var BH;
          return null !== (BH = function(HH) {
            return "url" in HH ? null === HH.url ? null : {
              sequence: HH.sequence,
              url: HH.url
            } : void 0 === HH.partUrls ? null : {
              sequence: HH.sequence,
              partUrls: HH.partUrls
            }
          }(HH)) && void 0 !== BH ? BH : []
        })))
      }
      get(HH) {
        return this.urls.get(HH)
      }
      update(HH, BH, LH) {
        this.urls.request(function(HH, BH, LH, AH) {
          return HH.filter((HH => HH.endMs > BH && HH.startMs < BH + LH && AH(HH.sequence))).map((HH => HH.sequence))
        }(HH, BH, 12e4 * Math.max(1, LH), (HH => this.urls.needs(HH))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function aB(HH, BH, LH) {
      const AH = [];
      let rH = HH.length,
        SH = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, HH.length)
      }, (() => (async () => {
        for (; SH < rH;) {
          const tH = SH++;
          try {
            AH[tH] = await BH(HH[tH], LH)
          } catch (hH) {
            if (LH.aborted) throw hH;
            console.warn(`Replay video part ${tH} failed to load; playing the parts before it.`, hH), rH = Math.min(rH, tH)
          }
        }
      })()))), AH.slice(0, rH)
    }

    function sB(HH) {
      const BH = [];
      let LH = 0;
      for (const EH of HH) BH.push(LH), LH += EH.byteLength;
      let AH = 0;
      const rH = LH => {
          for (; BH[AH] > LH;) AH--;
          for (; AH + 1 < BH.length && BH[AH + 1] <= LH;) AH++;
          return HH[AH][LH - BH[AH]]
        },
        SH = HH => rH(HH) * 2 ** 24 + 65536 * rH(HH + 1) + 256 * rH(HH + 2) + rH(HH + 3);
      let hH = 0,
        tH = !1,
        zH = !1,
        CH = 0;
      for (; hH + 8 <= LH;) {
        const HH = String.fromCharCode(rH(hH + 4), rH(hH + 5), rH(hH + 6), rH(hH + 7));
        let BH = SH(hH);
        if (1 === BH) {
          if (hH + 16 > LH) break;
          BH = SH(hH + 8) * 2 ** 32 + SH(hH + 12)
        } else 0 === BH && (BH = LH - hH);
        if (BH < 8 || hH + BH > LH) break;
        hH += BH, "moov" === HH ? tH = !0 : "moof" === HH ? zH = !0 : "mdat" === HH && zH ? (zH = !1, CH = hH) : !zH && CH > 0 && (CH = hH)
      }
      return tH && CH > 0 ? CH : null
    }
    async function JB(HH, BH) {
      const LH = await fetch(HH, {
        signal: BH
      });
      if (!LH.ok) throw new Error(`HTTP ${LH.status}`);
      return LH.arrayBuffer()
    }
    class iB {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JB,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = HH, this.aX = BH, this.blobs = new Map
      }
      get(HH, BH) {
        const LH = pB(HH, BH),
          AH = this.blobs.get(LH);
        return void 0 === AH ? null : (this.remember(LH, AH), AH)
      }
      async load(HH, BH, LH) {
        const AH = await aB(BH, this.fetchPart, LH),
          rH = function(HH) {
            const BH = HH.map((HH => new Uint8Array(HH))),
              LH = sB(BH);
            return null === LH ? null : new Blob(function(HH, BH) {
              const LH = [];
              let AH = BH;
              for (const rH of HH) {
                if (AH <= 0) break;
                LH.push(rH.byteLength <= AH ? rH : rH.subarray(0, AH)), AH -= rH.byteLength
              }
              return LH
            }(BH, LH), {
              type: "video/mp4"
            })
          }(AH);
        return null !== rH && AH.length === BH.length && this.remember(pB(HH, BH.length), rH), rH
      }
      remember(HH, BH) {
        this.blobs.delete(HH), this.blobs.set(HH, BH), this.blobs.size > this.aX && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function pB(HH, BH) {
      return `${HH}/${BH}`
    }

    function yB(HH) {
      const BH = function(HH) {
        return HH.map(((BH, LH) => {
          const AH = HH[LH + 1];
          return void 0 === AH ? BH.endMs : Math.min(BH.endMs, AH.startMs)
        }))
      }(HH);
      return HH.map(((HH, LH) => ({
        ...HH,
        endMs: BH[LH]
      }))).filter((HH => HH.endMs > HH.startMs))
    }

    function HL(HH, BH) {
      let LH = 0,
        AH = HH.length - 1;
      for (; LH <= AH;) {
        const rH = LH + AH >> 1,
          SH = HH[rH];
        if (BH < SH.startMs) AH = rH - 1;
        else {
          if (!(BH >= SH.endMs)) return SH;
          LH = rH + 1
        }
      }
      return null
    }

    function BL(HH, BH) {
      return (BH - HH.startMs) / 1e3
    }

    function LL(HH) {
      return Math.max(.4, .1 * HH)
    }

    function AL(HH) {
      return Math.max(.0625, Math.min(16, HH))
    }
    class rL {
      constructor(HH, BH, LH, AH, rH, SH, hH) {
        this.still = BH, this.clock = LH, this.frameDurationS = AH, this.wallNowMs = rH, this.onLoadFailed = hH, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new iB, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = yB(HH), this.segmentUrls = new dB(SH), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(HH) {
        var BH, LH;
        const AH = null !== (BH = null !== (LH = HL(this.segments, HH)) && void 0 !== LH ? LH : this.segments.find((BH => BH.startMs > HH))) && void 0 !== BH ? BH : this.segments.at(-1);
        return void 0 === AH ? null : {
          width: AH.width,
          height: AH.height
        }
      }
      failedAt(HH) {
        const BH = HL(this.segments, HH);
        return null !== BH && this.failed.has(BH.sequence)
      }
      replaceSegments(HH, BH) {
        for (const LH of this.slots.values()) this.release(LH);
        this.slots.clear(), this.failed.clear(), this.segments = yB(HH), this.segmentUrls.reset(this.segments), this.still = BH
      }
      update(HH) {
        var BH, LH;
        this.segmentUrls.update(this.segments, HH, this.clock.speed);
        const AH = HL(this.segments, HH),
          rH = function(HH, BH) {
            const LH = HH.find((HH => HH.startMs > BH));
            return void 0 === LH ? null : LH.startMs - BH <= ("parts" in LH ? 15e3 : 8e3) ? LH : null
          }(this.segments, HH);
        this.evictExcept([AH, rH, null !== (BH = null === (LH = this.shown) || void 0 === LH ? void 0 : LH.segment) && void 0 !== BH ? BH : null]), null !== rH && this.getSlot(rH), this.showStill(null === AH ? function(HH, BH, LH) {
          if (null === BH) return null;
          const AH = HH.at(-1);
          return void 0 === AH ? LH >= BH.atMs - 1e4 ? BH : null : LH >= AH.endMs && Math.abs(BH.atMs - AH.endMs) <= 1e4 ? BH : null
        }(this.segments, this.still, HH) : null);
        const SH = null === AH ? null : this.getSlot(AH);
        if (null !== SH) {
          this.sync(SH, BL(SH.segment, HH)), SH.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !SH.video.seeking && this.show(SH);
          for (const HH of this.slots.values()) HH === SH || HH.video.paused || HH.video.pause()
        } else {
          null === AH && this.show(null);
          for (const HH of this.slots.values()) HH.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: HH,
          sumAbsDriftMs: BH,
          maxAbsDriftMs: LH,
          withinOneFrame: AH,
          seeks: rH
        } = this.stats;
        return {
          frames: HH,
          meanAbsDriftMs: 0 === HH ? 0 : BH / HH,
          maxAbsDriftMs: LH,
          withinOneFrame: 0 === HH ? 1 : AH / HH,
          seeks: rH
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
        for (const HH of this.slots.values()) this.release(HH);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(HH, BH) {
        const {
          video: LH
        } = HH;
        if (LH.seeking) return;
        const {
          playing: AH,
          speed: rH
        } = this.clock, SH = AH && rH < 16, hH = function(HH) {
          let {
            targetS: BH,
            currentS: LH,
            playing: AH,
            speed: rH,
            frameDurationS: SH
          } = HH;
          const hH = LH - BH;
          if (!AH) return Math.abs(hH) > SH / 2 ? {
            kind: "seek",
            mediaTimeS: BH
          } : {
            kind: "none"
          };
          if (Math.abs(hH) > LL(rH)) return {
            kind: "seek",
            mediaTimeS: BH
          };
          if (Math.abs(hH) < SH / 4) return {
            kind: "rate",
            playbackRate: AL(rH)
          };
          const tH = rH - hH / .5;
          return {
            kind: "rate",
            playbackRate: AL(Math.max(.5 * rH, Math.min(1.5 * rH, tH)))
          }
        }({
          targetS: BH,
          currentS: LH.currentTime,
          playing: SH,
          speed: rH,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === hH.kind) {
          const BH = this.seekLatencyS * rH,
            tH = AH ? SH ? Math.min(BH, LL(rH) / 2) : BH : 0;
          HH.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, SH && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), LH.currentTime = Math.max(0, hH.mediaTimeS + tH)
        } else "rate" === hH.kind && Math.abs(LH.playbackRate - hH.playbackRate) > .001 && (LH.playbackRate = hH.playbackRate);
        SH && LH.paused && LH.currentTime < LH.duration ? (LH.playbackRate = AL(rH), LH.play().catch((HH => {
          console.warn("Replay video refused to play.", HH)
        }))) : SH || LH.paused || LH.pause()
      }
      getSlot(HH) {
        const BH = this.slots.get(HH.sequence);
        if (void 0 !== BH) return BH;
        const LH = "parts" in HH ? this.blobs.get(HH.sequence, HH.parts) : null,
          AH = null === LH ? this.segmentUrls.get(HH.sequence) : null;
        if ("pending" === AH) return null;
        if ("failed" === AH) return this.failed.has(HH.sequence) || (console.error(`Replay video segment ${HH.sequence} has no URLs to load.`), this.markFailed(HH)), null;
        const rH = document.createElement("video");
        rH.className = "brv-video", rH.muted = !0, rH.playsInline = !0, rH.preload = "auto", rH.disablePictureInPicture = !0;
        const SH = {
          segment: HH,
          video: rH,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== LH ? this.playBlob(SH, LH) : null !== AH && ("url" in AH ? rH.src = AH.url : this.loadParts(SH, AH.partUrls)), rH.addEventListener("seeked", (() => {
          if (null !== SH.seekStartedWallMs) {
            const HH = (this.wallNowMs() - SH.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, HH), SH.seekStartedWallMs = null
          }
        })), rH.addEventListener("loadeddata", (() => {
          this.slots.get(HH.sequence) === SH && this.failed.delete(HH.sequence)
        })), rH.addEventListener("error", (() => {
          this.slots.get(HH.sequence) === SH && (console.error(`Replay video segment ${HH.sequence} failed to load.`, rH.error), this.markFailed(HH))
        })), this.watchFrames(SH), this.element.appendChild(rH), this.slots.set(HH.sequence, SH), SH
      }
      loadParts(HH, BH) {
        this.blobs.load(HH.segment.sequence, BH, HH.abort.signal).then((BH => {
          if (this.slots.get(HH.segment.sequence) === HH) return null === BH ? (console.error(`Replay video segment ${HH.segment.sequence} has no playable parts.`), void this.markFailed(HH.segment)) : void this.playBlob(HH, BH)
        }), (BH => {
          this.slots.get(HH.segment.sequence) === HH && (console.error(`Replay video segment ${HH.segment.sequence} failed to load.`, BH), this.markFailed(HH.segment))
        }))
      }
      playBlob(HH, BH) {
        HH.objectUrl = URL.createObjectURL(BH), HH.video.src = HH.objectUrl
      }
      markFailed(HH) {
        this.failed.add(HH.sequence), this.onLoadFailed()
      }
      showStill(HH) {
        const BH = null !== HH && HH.url !== this.failedStillUrl ? HH : null;
        null !== BH && this.stillImage.getAttribute("src") !== BH.url && (this.stillImage.src = BH.url);
        const LH = null !== BH && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        LH !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", LH), this.stillShown = LH)
      }
      show(HH) {
        var BH;
        this.shown !== HH && (null === (BH = this.shown) || void 0 === BH || BH.video.classList.remove("brv-video-shown"), null === HH || void 0 === HH || HH.video.classList.add("brv-video-shown"), this.shown = HH)
      }
      evictExcept(HH) {
        for (const [BH, LH] of this.slots) HH.includes(LH.segment) || (this.release(LH), this.slots.delete(BH))
      }
      release(HH) {
        this.shown === HH && (this.shown = null), HH.abort.abort(), HH.video.pause(), HH.video.removeAttribute("src"), HH.video.load(), HH.video.remove(), null !== HH.objectUrl && URL.revokeObjectURL(HH.objectUrl)
      }
      watchFrames(HH) {
        const {
          video: BH
        } = HH;
        if ("function" !== typeof BH.requestVideoFrameCallback) return;
        const LH = (AH, rH) => {
          if (!this.slots.has(HH.segment.sequence)) return;
          const SH = BH.ownerDocument.defaultView,
            hH = null === SH ? 0 : SH.performance.timeOrigin - performance.timeOrigin,
            tH = BL(HH.segment, this.clock.timeAtWall(rH.expectedDisplayTime + hH)),
            zH = this.lastPresented,
            CH = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== zH && zH.slot === HH && CH && this.clock.playing && rH.mediaTime > zH.mediaTimeS) {
            const HH = Math.abs(function(HH, BH, LH) {
              return LH < HH ? 1e3 * (LH - HH) : 1e3 * Math.max(0, LH - BH)
            }(zH.mediaTimeS, rH.mediaTime, zH.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += HH, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, HH), HH <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: HH,
            mediaTimeS: rH.mediaTime,
            clockMediaTimeS: tH
          }, BH.requestVideoFrameCallback(LH)
        };
        BH.requestVideoFrameCallback(LH)
      }
    }
    const SL = 1 / 30,
      hL = ["#noa-canvas", "#noa-container"];
    class tL {
      constructor(HH, BH) {
        var LH, AH, rH, SH, hH, tH, zH, CH;
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.IX = () => {
          this.frame = requestAnimationFrame(this.IX);
          const HH = performance.now();
          this.applySkips();
          const BH = this.clock.timeMs();
          this.annotations.update(BH, this.clock.speed), this.videoLayer.update(BH), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(BH)) : this.domLayer.update(BH, this.clock.playing, HH);
          const LH = this.getState();
          (null === this.lastState || function(HH, BH) {
            return Object.keys(HH).some((LH => "positionMs" === LH ? Math.floor(HH.positionMs / 1e3) !== Math.floor(BH.positionMs / 1e3) : HH[LH] !== BH[LH]))
          }(LH, this.lastState)) && this.emitState(LH)
        };
        const XH = () => performance.now();
        this.lowFps = null !== (LH = EH.lowFps) && void 0 !== LH ? LH : 25;
        const GH = new nH(BH.domEvents);
        this.timeline = new qH(BH.windows.length > 0 ? BH.windows : [NH(BH, GH)]), this.chapters = [...BH.chapters].sort(((HH, BH) => HH.startMs - BH.startMs)), this.annotations = new SB(BH, GH, this.timeline, {
          inactivityThresholdMs: null !== (AH = EH.inactivityThresholdMs) && void 0 !== AH ? AH : 1e4,
          loadTelemetryChunk: null !== (rH = EH.loadTelemetryChunk) && void 0 !== rH ? rH : null,
          telemetryUrls: null !== (SH = EH.telemetryUrls) && void 0 !== SH ? SH : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new pH(null !== (hH = EH.refreshUrls) && void 0 !== hH ? hH : null, (HH => {
          this.videoLayer.replaceSegments(gH(HH.videoSegments), HH.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(HH.telemetryChunks)
        })), this.clock = new RH(this.timeline.startMs, XH), this.stage = new ZB(HH, (() => {
          var HH;
          null === (HH = this.domLayer) || void 0 === HH || HH.invalidateCanvasRect()
        })), this.videoLayer = new rL(gH(BH.videoSegments), BH.still, this.clock, SL, XH, null !== (tH = EH.segmentUrls) && void 0 !== tH ? tH : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = DB.create(this.stage.element, BH.domEvents, BH.recordedPointer, GH, null !== (zH = EH.canvasSelectors) && void 0 !== zH ? zH : hL, null !== (CH = EH.resourceHosts) && void 0 !== CH ? CH : [], this.videoLayer, (HH => {
          this.stage.setViewport(HH)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.IX()
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
      subscribe(HH) {
        return this.listeners.add(HH), HH(this.getState()), () => {
          this.listeners.delete(HH)
        }
      }
      getState() {
        const HH = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(HH),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(HH),
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
      seekToPosition(HH) {
        this.seekToTime(this.timeline.toTime(HH))
      }
      seekBy(HH) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + HH)
      }
      stepFrame(HH) {
        this.clock.pause(), this.seekBy(HH * SL * 1e3)
      }
      setSpeed(HH) {
        var BH;
        this.clock.setSpeed(HH), null === (BH = this.domLayer) || void 0 === BH || BH.setSpeed(HH), this.emit()
      }
      setSkipInactive(HH) {
        this.skipInactive = HH, this.emit()
      }
      goToChapter(HH) {
        const BH = this.clock.timeMs(),
          LH = 1 === HH ? this.chapters.find((HH => HH.startMs > BH + 500)) : this.chapters.findLast((HH => HH.startMs < BH - 2e3));
        void 0 !== LH && this.seekToTime(LH.startMs)
      }
      destroy() {
        var HH;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (HH = this.domLayer) || void 0 === HH || HH.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(HH) {
        return this.annotations.isHiddenAt(HH) ? "tabHidden" : this.videoLayer.failedAt(HH) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(HH) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var HH;
        if (!this.clock.playing) return;
        const BH = this.clock.timeMs(),
          LH = this.timeline.nextPlayableTime(BH);
        if (null === LH) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const AH = this.skipInactive ? this.annotations.inactiveRanges.find((HH => LH >= HH.startMs && LH < HH.endMs - 500)) : void 0,
          rH = null !== (HH = null === AH || void 0 === AH ? void 0 : AH.endMs) && void 0 !== HH ? HH : LH;
        rH !== BH && this.seekToTime(rH)
      }
      seekToTime(HH) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, HH))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var HH;
        null === (HH = this.domLayer) || void 0 === HH || HH.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(HH) {
        this.lastState = HH;
        for (const BH of this.listeners) BH(HH)
      }
    }
    const zL = 2500,
      CL = 5;

    function EL(HH) {
      let {
        label: BH,
        LX: LH,
        wide: AH = !1
      } = HH;
      return (0, WH.jsx)("span", {
        className: `brv-key${LH?" brv-key-held":""}${AH?" brv-key-wide":""}`,
        children: BH
      })
    }
    const XL = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function GL(HH) {
      const [BH, LH] = (0, AH.useState)({
        bits: 0,
        presses: []
      });
      return (0, AH.useEffect)((() => {
        let BH = 0,
          AH = "";
        const rH = () => {
          BH = requestAnimationFrame(rH);
          const SH = HH.timeline.toTime(HH.getPositionMs()),
            {
              actions: hH,
              keys: tH
            } = HH.input,
            GH = function(HH, BH) {
              const LH = CH(HH, BH);
              return LH < 0 ? 0 : HH[LH].bits
            }(hH, SH),
            YH = function(HH, BH, LH, AH) {
              const rH = Math.floor(BH / LH) * LH,
                SH = new Map;
              for (let hH = CH(HH, rH + LH); hH >= 0 && HH[hH].atMs >= rH; hH--) {
                const BH = HH[hH];
                if (!BH.down || !BH.inPlay || BH.atMs === rH + LH) continue;
                const AH = {
                    code: BH.code,
                    unbound: zH(BH)
                  },
                  tH = EH(AH),
                  CH = SH.get(tH);
                void 0 === CH ? SH.set(tH, {
                  key: AH,
                  presses: 1
                }) : CH.presses++
              }
              return [...SH].sort(((HH, BH) => XH([HH[0], HH[1].presses], [BH[0], BH[1].presses]))).slice(0, AH).map((HH => {
                let [, {
                  key: BH
                }] = HH;
                return BH
              }))
            }(tH, SH, zL, CL),
            uH = `${GH};${YH.map((HH=>EH(HH))).join(",")}`;
          uH !== AH && (AH = uH, LH({
            bits: GH,
            presses: YH
          }))
        };
        return rH(), () => {
          cancelAnimationFrame(BH)
        }
      }), [HH]), BH
    }

    function YL(HH) {
      let {
        controller: BH,
        labels: LH
      } = HH;
      const {
        bits: AH,
        presses: rH
      } = GL(BH), SH = HH => function(HH, BH) {
        return 0 !== (HH & 1 << hH.indexOf(BH))
      }(AH, HH);
      return (0, WH.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, WH.jsx)("div", {
          className: "brv-input-slot",
          children: rH.map((HH => {
            const BH = YH(HH.code);
            return (0, WH.jsx)("span", {
              className: HH.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: HH.unbound ? LH.unboundKey(BH) : BH
            }, EH(HH))
          }))
        }), (0, WH.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, WH.jsxs)("div", {
            className: "brv-keys",
            children: [(0, WH.jsx)("div", {
              className: "brv-keys-row",
              children: (0, WH.jsx)(EL, {
                label: "W",
                LX: SH("forward")
              })
            }), (0, WH.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, WH.jsx)(EL, {
                label: "A",
                LX: SH("left")
              }), (0, WH.jsx)(EL, {
                label: "S",
                LX: SH("backward")
              }), (0, WH.jsx)(EL, {
                label: "D",
                LX: SH("right")
              })]
            }), (0, WH.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, WH.jsx)(EL, {
                label: "Shift",
                LX: SH("sprint")
              }), (0, WH.jsx)(EL, {
                label: "Ctrl",
                LX: SH("crouch")
              }), (0, WH.jsx)(EL, {
                label: "Space",
                LX: SH("jump"),
                wide: !0
              })]
            })]
          }), (0, WH.jsx)("div", {
            className: "brv-mouse",
            children: XL.map((HH => {
              let {
                action: BH,
                className: LH
              } = HH;
              return (0, WH.jsx)("span", {
                className: `${LH}${SH(BH)?" brv-key-held":""}`
              }, BH)
            }))
          })]
        })]
      })
    }
    const uL = {
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
      fps: HH => `${HH} FPS`,
      keys: "Keys",
      unboundKey: HH => `${HH} does nothing here`,
      unboundKeys: HH => `${HH} did nothing`
    };

    function QL(HH) {
      let {
        path: BH
      } = HH;
      return (0, WH.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, WH.jsx)("path", {
          d: BH
        })
      })
    }
    const WL = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function ML(HH) {
      let {
        label: BH,
        onClick: LH,
        children: AH
      } = HH;
      return (0, WH.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: BH,
        "aria-label": BH,
        onClick: LH,
        children: AH
      })
    }

    function xL(HH) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === HH ? document.exitFullscreen() : HH.requestFullscreen()).catch((HH => {
        console.warn("Couldn't toggle fullscreen.", HH)
      }))
    }

    function vL(HH) {
      let {
        data: BH,
        className: LH,
        autoPlay: rH = !1,
        options: SH,
        labels: hH = uL,
        onController: tH
      } = HH;
      const zH = (0, AH.useRef)(null),
        CH = (0, AH.useRef)(null),
        EH = (0, AH.useRef)(SH);
      EH.current = SH;
      const XH = (0, AH.useRef)(rH);
      XH.current = rH;
      const GH = (0, AH.useRef)(tH);
      GH.current = tH;
      const [YH, uH] = (0, AH.useState)(null), [QH, MH] = (0, AH.useState)(null), [vH, PH] = (0, AH.useState)(!0), TH = () => {
        PH((HH => !HH))
      };
      (0, AH.useEffect)((() => {
        var HH;
        ! function(HH) {
          if (null !== HH.getElementById(jB)) return;
          const BH = HH.createElement("style");
          BH.id = jB, BH.textContent = FB, HH.head.appendChild(BH)
        }(document);
        const LH = new tL(zH.current, BH, EH.current),
          AH = LH.subscribe(MH);
        return uH(LH), null === (HH = GH.current) || void 0 === HH || HH.call(GH, LH), XH.current && LH.play(), CH.current.focus({
          preventScroll: !0
        }), () => {
          var HH;
          AH(), LH.destroy(), null === (HH = GH.current) || void 0 === HH || HH.call(GH, null)
        }
      }), [BH]);
      const VH = null !== YH && YH.input.inputRecorded,
        OH = null === YH || null === QH ? void 0 : YH.chapters.findLast((HH => YH.timeline.toPosition(HH.startMs) <= QH.positionMs));
      return (0, WH.jsxs)("div", {
        ref: CH,
        className: void 0 === LH ? "brv-player" : `brv-player ${LH}`,
        tabIndex: 0,
        onKeyDown: HH => {
          if (HH.target instanceof HTMLSelectElement) return;
          if (" " === HH.key && HH.target !== HH.currentTarget && HH.target instanceof HTMLButtonElement) return;
          const BH = function(HH) {
            let {
              key: BH,
              shiftKey: LH,
              ctrlKey: AH,
              metaKey: rH,
              altKey: SH
            } = HH;
            if (AH || rH || SH) return null;
            const hH = Number(BH) - 1;
            if (/^[1-9]$/.test(BH) && hH < KH.length) return {
              type: "setSpeed",
              speed: KH[hH]
            };
            switch (BH.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: LH ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: LH ? 1e3 : 5e3
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
                  type: "chapter", direction: LH ? -1 : 1
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
          }(HH);
          null !== BH && null !== YH && null !== QH && (HH.preventDefault(), function(HH, BH, LH, AH) {
            switch (BH.type) {
              case "togglePlay":
                HH.togglePlay();
                break;
              case "seekBy":
                HH.seekBy(BH.deltaMs);
                break;
              case "stepFrame":
                HH.stepFrame(BH.direction);
                break;
              case "setSpeed":
                HH.setSpeed(BH.speed);
                break;
              case "chapter":
                HH.goToChapter(BH.direction);
                break;
              case "toggleSkipInactive":
                HH.setSkipInactive(!LH.skipInactive);
                break;
              case "toggleFullscreen":
                xL(AH.root);
                break;
              case "toggleKeys":
                AH.toggleKeys()
            }
          }(YH, BH, QH, {
            root: HH.currentTarget,
            toggleKeys: TH
          }))
        },
        children: [(0, WH.jsxs)("div", {
          ref: zH,
          className: "brv-viewport",
          onClick: () => {
            null === YH || void 0 === YH || YH.togglePlay()
          },
          children: [null !== QH && null !== QH.notice && (0, WH.jsx)("div", {
            className: "brv-overlay",
            children: hH[QH.notice]
          }), null !== YH && vH && VH && (0, WH.jsx)(YL, {
            controller: YH,
            labels: hH
          })]
        }), null !== YH && null !== QH && (0, WH.jsxs)(WH.Fragment, {
          children: [(0, WH.jsx)(UH, {
            controller: YH,
            frames: YH.frames,
            input: YH.input,
            markers: YH.markers,
            inactiveRanges: YH.inactiveRanges,
            videoGaps: YH.videoGaps,
            labels: hH
          }), YH.chapters.length > 1 && (0, WH.jsx)("div", {
            className: "brv-chapters",
            children: YH.chapters.map((HH => (0, WH.jsxs)("button", {
              type: "button",
              className: HH === OH ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                YH.seekToPosition(YH.timeline.toPosition(HH.startMs))
              },
              children: [HH.label, " \xb7 ", xH(HH.endMs - HH.startMs)]
            }, HH.startMs)))
          }), (0, WH.jsxs)("div", {
            className: "brv-controls",
            children: [(0, WH.jsx)(ML, {
              label: QH.playing ? hH.pause : hH.play,
              onClick: () => {
                YH.togglePlay()
              },
              children: (0, WH.jsx)(QL, {
                path: QH.playing ? WL.pause : WL.play
              })
            }), (0, WH.jsxs)("span", {
              className: "brv-time",
              children: [xH(QH.positionMs), " / ", xH(QH.durationMs)]
            }), (0, WH.jsx)("select", {
              className: "brv-speed",
              value: QH.speed,
              title: `${hH.speed} (1-${KH.length})`,
              "aria-label": hH.speed,
              onChange: HH => {
                YH.setSpeed(Number(HH.target.value))
              },
              children: KH.map((HH => (0, WH.jsxs)("option", {
                value: HH,
                children: [HH, "x"]
              }, HH)))
            }), (0, WH.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": QH.skipInactive,
              title: `${hH.skipInactive} (S)`,
              onClick: () => {
                YH.setSkipInactive(!QH.skipInactive)
              },
              children: [(0, WH.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), hH.skipInactive]
            }), VH && (0, WH.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": vH,
              title: `${hH.keys} (I)`,
              onClick: TH,
              children: [(0, WH.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), hH.keys]
            }), document.fullscreenEnabled && (0, WH.jsx)(ML, {
              label: hH.fullscreen,
              onClick: () => {
                xL(CH.current)
              },
              children: (0, WH.jsx)(QL, {
                path: WL.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var PL = LH(5564);
    const TL = ["bloxd.io", window.location.hostname];

    function UL(HH) {
      let {
        gameAnalyticsId: BH,
        recordingId: LH,
        userContext: rH,
        autoPlay: SH
      } = HH;
      const {
        t: hH
      } = (0, OH.B)(), [tH, zH] = (0, AH.useState)({
        status: "loading"
      }), [CH, EH] = (0, AH.useState)(0), XH = (0, AH.useMemo)((() => function(HH) {
        return {
          play: HH("studio:replayPlay"),
          pause: HH("studio:replayPause"),
          speed: HH("studio:replaySpeed"),
          skipInactive: HH("studio:replaySkipIdle"),
          fullscreen: HH("studio:replayFullscreen"),
          tabHidden: HH("studio:replayTabHidden"),
          videoFailed: HH("studio:replayVideoFailed"),
          nothingToShow: HH("studio:replayNothingToShow"),
          videoGap: HH("studio:replayVideoGap"),
          error: HH("general:error"),
          graphicsCrash: HH("studio:replayMarkerGraphicsCrash"),
          death: HH("studio:replayMarkerDeath"),
          fps: BH => HH("studio:replayFps", {
            fps: BH
          }),
          keys: HH("studio:replayKeys"),
          unboundKey: BH => HH("studio:replayUnboundKey", {
            key: BH
          }),
          unboundKeys: BH => HH("studio:replayUnboundKeys", {
            keys: BH
          })
        }
      }(hH)), [hH]), GH = (0, AH.useMemo)((() => ({
        resourceHosts: TL,
        loadTelemetryChunk: IH.y,
        refreshUrls: async () => (0, IH.s)(await PL.d.getReplay(rH, BH, LH)),
        segmentUrls: {
          load: async HH => (await PL.d.getReplaySegmentUrls(rH, BH, LH, HH, [])).videoSegments,
          maxSequences: lH.e
        },
        telemetryUrls: {
          load: async HH => (await PL.d.getReplaySegmentUrls(rH, BH, LH, [], HH)).telemetrySegments,
          maxSequences: lH.h
        }
      })), [BH, LH]);
      return (0, AH.useEffect)((() => {
        let HH = !1;
        return zH({
          status: "loading"
        }), (0, IH.B)({
          getReplay: () => PL.d.getReplay(rH, BH, LH),
          loadDomEvents: IH.w,
          onPreparing: () => {
            zH({
              status: "preparing"
            })
          },
          wait: HH => new Promise((BH => {
            setTimeout(BH, HH)
          })),
          isCancelled: () => HH
        }).then((BH => {
          if (!HH && null !== BH) {
            const HH = (0, IH.v)(BH.replay, BH.domEvents, (HH => hH("studio:replayVisit", {
              number: HH
            })));
            zH({
              status: "loaded",
              value: HH
            })
          }
        })).catch((BH => {
          console.error("Failed to load studio replay", BH), HH || zH({
            status: "error",
            message: (0, IH.l)(BH, hH("studio:replayLoadFailed"))
          })
        })), () => {
          HH = !0
        }
      }), [BH, LH, CH]), "loading" === tH.status ? (0, WH.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, WH.jsx)(kH.d, {})
      }) : "preparing" === tH.status ? (0, WH.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, WH.jsx)(kH.d, {}), hH("studio:replayPreparing")]
      }) : "error" === tH.status ? (0, WH.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [tH.message, (0, WH.jsx)(mH.W, {
          onClick: () => {
            EH((HH => HH + 1))
          },
          children: hH("general:tryAgain")
        })]
      }) : (0, WH.jsx)(vL, {
        className: "StudioReplayPlayer",
        data: tH.value,
        labels: XH,
        options: GH,
        autoPlay: SH || CH > 0
      })
    }

    function VL(HH) {
      let {
        onPlay: BH
      } = HH;
      const {
        t: LH
      } = (0, OH.B)();
      return (0, WH.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": LH("general:play"),
        onClick: BH,
        children: (0, WH.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, WH.jsx)(oH.c, {
            name: "play"
          })
        })
      })
    }
    const OL = IH.N.replay,
      bL = IH.N.filters,
      kL = IH.N.endedAt,
      mL = {
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
      oL = {
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

    function IL(HH) {
      let {
        item: BH,
        selected: LH,
        onSelect: AH
      } = HH;
      const {
        t: rH
      } = (0, OH.B)(), hH = (0, IH.o)(BH);
      return (0, WH.jsxs)("button", {
        type: "button",
        className: SH()("StudioReplayListItem", {
          StudioReplayListItemSelected: LH
        }),
        onClick: AH,
        children: [(0, WH.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, WH.jsx)("span", {
            children: (0, IH.k)(BH.startedAtMs)
          }), (0, WH.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: xH(BH.inGameDurationMs)
          })]
        }), hH.length > 0 && (0, WH.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: hH.map((HH => (0, WH.jsx)("span", {
            className: SH()("StudioReplayTag", `StudioReplayTag-${HH}`),
            children: rH(oL[HH])
          }, HH)))
        })]
      })
    }

    function fL(HH) {
      let {
        gameAnalyticsId: BH,
        userContext: LH,
        availability: AH
      } = HH;
      const {
        t: rH
      } = (0, OH.B)();
      return "on" === AH ? (0, WH.jsx)(lL, {
        gameAnalyticsId: BH,
        userContext: LH
      }) : "failed" === AH ? (0, WH.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, WH.jsx)(oH.c, {
          name: "face-dizzy"
        }), rH("studio:replaysStartFailed"), (0, WH.jsx)(mH.W, {
          onClick: () => {
            VH.b.startNow()
          },
          children: rH("general:tryAgain")
        })]
      }) : (0, WH.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, WH.jsx)(kH.d, {})
      })
    }

    function lL(HH) {
      var BH, LH;
      let {
        gameAnalyticsId: rH,
        userContext: hH
      } = HH;
      const {
        t: tH
      } = (0, OH.B)(), zH = function(HH, BH) {
        const {
          t: LH
        } = (0, OH.B)(), [rH, SH] = (0, AH.useState)({
          status: "loading"
        });
        return (0, AH.useEffect)((() => {
          let AH = !1;
          return SH({
            status: "loading"
          }), PL.d.listReplays(BH, HH).then((HH => {
            AH || SH({
              status: "loaded",
              value: HH
            })
          })).catch((HH => {
            console.error("Failed to list studio replays", HH), AH || SH({
              status: "error",
              message: (0, IH.l)(HH, LH("studio:replaysLoadFailed"))
            })
          })), () => {
            AH = !0
          }
        }), [HH]), rH
      }(rH, hH), [CH, EH] = (0, bH.p)(), XH = (0, IH.H)(CH.get(bL)), GH = (0, IH.F)(CH.get(kL)), YH = CH.get(OL), uH = "loaded" === zH.status ? (0, IH.e)(zH.value.recordings, XH, GH) : [], QH = "loaded" === zH.status ? (0, IH.P)(zH.value.recordings, uH, YH) : [], MH = null !== (BH = null !== YH && void 0 !== YH ? YH : null === (LH = QH[0]) || void 0 === LH ? void 0 : LH.recordingId) && void 0 !== BH ? BH : null, [xH, vH] = (0, AH.useState)(YH), [PH, TH] = (0, AH.useState)(!1), UH = (0, AH.useRef)(null), VH = (0, AH.useRef)(null !== YH), lH = (0, AH.useRef)(null);

      function KH(HH) {
        HH === xH && HH === MH || (lH.current = null, VH.current = !0, TH(!0), vH(HH), EH((BH => {
          (0, bH.j)(BH, OL, HH)
        }), {
          push: !0
        }))
      }

      function cH(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        MH !== xH && (lH.current = MH), EH((LH => {
          (0, bH.j)(LH, OL, MH), (0, bH.j)(LH, bL, (0, IH.j)(HH)), BH && (0, bH.j)(LH, kL, null)
        }))
      }
      if ((0, AH.useEffect)((() => {
          null !== YH && YH !== lH.current && vH(YH)
        }), [YH]), (0, AH.useEffect)((() => {
          VH.current && null !== UH.current && (VH.current = !1, UH.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [xH, zH.status]), "loading" === zH.status) return (0, WH.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, WH.jsx)(kH.d, {})
      });
      if ("error" === zH.status) return (0, WH.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, WH.jsx)(oH.c, {
          name: "face-dizzy"
        }), zH.message]
      });
      const {
        recordings: eH,
        dailyQuota: qH
      } = zH.value;
      if (0 === eH.length) return (0, WH.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, WH.jsx)(oH.c, {
          name: "video"
        }), tH(0 === qH ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const gH = IH.L.filter((HH => eH.some((BH => (0, IH.E)(BH, HH))))),
        NH = MH !== xH;
      return (0, WH.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, WH.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== GH && (0, WH.jsxs)(mH.W, {
            active: !0,
            onClick: () => {
              cH(XH, !0)
            },
            children: [tH("studio:replaysFilterEndedAt", {
              minutes: (0, fH.r)(GH.minute, GH.orLonger ? GH.minute : 1 / 0)
            }), (0, WH.jsx)(oH.c, {
              name: "xmark"
            })]
          }), gH.map((HH => (0, WH.jsx)(mH.W, {
            active: XH.includes(HH),
            onClick: () => {
              ! function(HH) {
                cH(XH.includes(HH) ? XH.filter((BH => BH !== HH)) : [...XH, HH])
              }(HH)
            },
            children: tH(mL[HH])
          }, HH))), qH > 0 && (0, WH.jsx)("span", {
            className: "StudioReplaysQuota",
            children: tH("studio:replaysQuota", {
              count: qH
            })
          })]
        }), (0, WH.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, WH.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === uH.length && (0, WH.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [tH("studio:replaysNoMatch"), (0, WH.jsx)(mH.W, {
                onClick: () => {
                  cH([], !0)
                },
                children: tH("studio:replaysClearFilters")
              })]
            }), QH.map((HH => (0, WH.jsx)(IL, {
              item: HH,
              selected: HH.recordingId === MH,
              onSelect: () => {
                KH(HH.recordingId)
              }
            }, HH.recordingId)))]
          }), null !== MH && (0, WH.jsxs)("div", {
            ref: UH,
            className: SH()("StudioReplayViewer", {
              StudioReplayViewerWaiting: NH
            }),
            children: [!NH && (0, WH.jsx)(UL, {
              gameAnalyticsId: rH,
              recordingId: MH,
              userContext: hH,
              autoPlay: PH
            }, MH), NH && (0, WH.jsx)(VL, {
              onPlay: () => {
                KH(MH)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);