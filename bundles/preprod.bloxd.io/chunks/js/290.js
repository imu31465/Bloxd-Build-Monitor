export const id = 290;
export const ids = [290];
export const modules = {
  41573: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => yi
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM);
    const aM = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      PM = 3e3;

    function nM(MM) {
      return MM.down && MM.inPlay && !MM.bound
    }

    function QM(MM, rM) {
      let iM = 0,
        OM = MM.length;
      for (; iM < OM;) {
        const SM = iM + OM >> 1;
        MM[SM].atMs <= rM ? iM = SM + 1 : OM = SM
      }
      return iM - 1
    }

    function zM(MM, rM) {
      return rM[1] - MM[1] || (MM[0] < rM[0] ? -1 : 1)
    }
    const LM = {
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

    function mM(MM) {
      var rM;
      const iM = LM[MM];
      if (void 0 !== iM) return iM;
      const OM = null !== (rM = /^(?:Key|Digit)(.)$/.exec(MM)) && void 0 !== rM ? rM : /^Numpad(.+)$/.exec(MM);
      return null !== OM ? MM.startsWith("Numpad") ? `Num ${OM[1]}` : OM[1] : MM
    }
    const HM = 250,
      hM = 60;
    var JM = iM(1303);
    const dM = 6;

    function yM(MM) {
      const rM = Math.max(0, Math.floor(MM / 1e3)),
        iM = Math.floor(rM / 3600),
        OM = Math.floor(rM % 3600 / 60),
        SM = String(rM % 60).padStart(2, "0");
      return iM > 0 ? `${iM}:${String(OM).padStart(2,"0")}:${SM}` : `${OM}:${SM}`
    }

    function lM(MM, rM) {
      return getComputedStyle(MM).getPropertyValue(rM).trim()
    }

    function EM(MM, rM) {
      switch (MM.kind) {
        case "note":
          return MM.label;
        case "hidden":
          return rM.tabHidden;
        default:
          return rM[MM.kind]
      }
    }

    function UM(MM) {
      let {
        draw: rM,
        className: iM
      } = MM;
      const SM = (0, OM.useRef)(null);
      return (0, OM.useEffect)((() => {
        const MM = SM.current,
          iM = MM.getContext("2d");
        if (null === rM || null === iM) return;
        const {
          clientWidth: OM,
          clientHeight: jM
        } = MM, aM = window.devicePixelRatio;
        MM.width = Math.round(OM * aM), MM.height = Math.round(jM * aM), iM.setTransform(aM, 0, 0, aM, 0, 0), rM(iM, OM, jM, MM)
      }), [rM]), (0, JM.jsx)("canvas", {
        ref: SM,
        className: iM
      })
    }

    function GM(MM) {
      let {
        controller: rM,
        frames: iM,
        input: SM,
        markers: jM,
        inactiveRanges: aM,
        videoGaps: QM,
        labels: LM
      } = MM;
      const {
        timeline: GM
      } = rM, CM = (0, OM.useRef)(null), [eM, bM] = (0, OM.useState)(0), [wM, tM] = (0, OM.useState)(null), gM = (0, OM.useRef)(null), uM = Math.max(1, GM.durationMs);
      ! function(MM, rM, iM) {
        (0, OM.useEffect)((() => {
          let OM = 0,
            SM = NaN;
          const jM = () => {
            var aM;
            OM = requestAnimationFrame(jM);
            const PM = (null !== (aM = rM.current) && void 0 !== aM ? aM : MM.getPositionMs()) / Math.max(1, MM.timeline.durationMs) * 100;
            PM !== SM && (SM = PM, iM.current.style.setProperty("--brv-position", `${PM}%`))
          };
          return jM(), () => {
            cancelAnimationFrame(OM)
          }
        }), [MM])
      }(rM, gM, CM), (0, OM.useEffect)((() => {
        const MM = CM.current,
          rM = new ResizeObserver((() => {
            bM(MM.clientWidth)
          }));
        return rM.observe(MM), () => {
          rM.disconnect()
        }
      }), []);
      const RM = (0, OM.useMemo)((() => 0 === eM ? null : function(MM, rM, iM) {
          const OM = Math.max(1, Math.min(iM, Math.floor(rM.durationMs / HM))),
            SM = rM.durationMs / OM,
            jM = new Array(OM).fill(0);
          for (const aM of MM) rM.contains(aM.atMs) && jM[Math.min(OM - 1, Math.floor(rM.toPosition(aM.atMs) / SM))]++;
          return {
            bucketMs: SM,
            fps: jM.map((MM => 0 === MM ? null : 1e3 * MM / SM))
          }
        }(iM, GM, Math.round(eM))), [iM, GM, eM]),
        pM = rM.lowFps,
        WM = (0, OM.useMemo)((() => null === RM ? null : (MM, rM, iM, OM) => {
          ! function(MM, rM, iM, OM, SM, jM) {
            MM.clearRect(0, 0, iM, OM);
            const aM = iM / rM.fps.length;
            rM.fps.forEach(((rM, iM) => {
              if (null === rM) return;
              const PM = Math.max(1, Math.min(rM, hM) / hM * OM);
              MM.fillStyle = rM < SM ? jM.lowFps : jM.fps, MM.fillRect(iM * aM, OM - PM, Math.max(1, aM), PM)
            }))
          }(MM, RM, rM, iM, pM, {
            fps: lM(OM, "--brv-fps"),
            lowFps: lM(OM, "--brv-low-fps")
          })
        }), [RM, pM]),
        sM = (0, OM.useMemo)((() => {
          if (0 === eM || !SM.inputRecorded) return null;
          const MM = function(MM, rM, iM) {
            const OM = Math.max(1, rM.durationMs) / iM,
              SM = new Array(iM).fill(0),
              jM = new Array(iM).fill(0);
            for (const aM of MM) {
              if (!aM.down || !rM.contains(aM.atMs)) continue;
              const MM = Math.min(iM - 1, Math.floor(rM.toPosition(aM.atMs) / OM));
              SM[MM]++, nM(aM) && jM[MM]++
            }
            return {
              presses: SM,
              unbound: jM
            }
          }(SM.keys, GM, Math.max(1, Math.round(eM)));
          return (rM, iM, OM, SM) => {
            ! function(MM, rM, iM, OM, SM) {
              MM.clearRect(0, 0, iM, OM);
              const jM = iM / rM.presses.length;
              rM.presses.forEach(((iM, aM) => {
                if (0 === iM) return;
                const PM = rM.unbound[aM] > 0;
                MM.globalAlpha = PM ? 1 : Math.min(1, .35 + .15 * iM), MM.fillStyle = PM ? SM.unbound : SM.presses, MM.fillRect(aM * jM, 0, Math.max(PM ? 2 : 1, jM), OM)
              })), MM.globalAlpha = 1
            }(rM, MM, iM, OM, {
              presses: lM(SM, "--brv-key-press"),
              unbound: lM(SM, "--brv-key-unbound")
            })
          }
        }), [SM, GM, eM]),
        DM = (0, OM.useMemo)((() => function(MM) {
          const rM = [];
          for (const OM of MM) {
            var iM;
            if (!nM(OM)) continue;
            let MM = rM.at(-1);
            (void 0 === MM || OM.atMs - MM.endMs > PM) && (MM = {
              startMs: OM.atMs,
              endMs: OM.atMs,
              counts: new Map
            }, rM.push(MM)), MM.endMs = OM.atMs, MM.counts.set(OM.code, (null !== (iM = MM.counts.get(OM.code)) && void 0 !== iM ? iM : 0) + 1)
          }
          return rM.map((MM => {
            let {
              startMs: rM,
              endMs: iM,
              counts: OM
            } = MM;
            return {
              startMs: rM,
              endMs: iM,
              keys: [...OM].sort(zM)
            }
          }))
        }(SM.keys.filter((MM => GM.contains(MM.atMs))))), [SM.keys, GM]),
        kM = MM => GM.toPosition(MM) / uM * 100,
        ZM = MM => kM(MM) / 100 * eM,
        oM = MM => {
          const rM = CM.current.getBoundingClientRect();
          return {
            px: MM - rM.left,
            positionMs: Math.max(0, Math.min(rM.width, MM - rM.left)) / rM.width * uM
          }
        },
        fM = null === wM || 0 === eM ? null : {
          px: wM,
          positionMs: Math.max(0, Math.min(eM, wM)) / eM * uM
        },
        YM = null === fM || null === RM ? null : function(MM, rM) {
          const iM = Math.max(0, Math.min(MM.fps.length - 1, Math.floor(rM / MM.bucketMs))),
            OM = MM.fps[iM];
          return null === OM ? null : Math.round(OM)
        }(RM, fM.positionMs),
        NM = null !== fM && QM.some((MM => fM.px >= ZM(MM.startMs) && fM.px < ZM(MM.endMs))),
        AM = null === fM ? void 0 : jM.find((MM => {
          var rM;
          return fM.px >= ZM(MM.atMs) - dM && fM.px <= ZM(null !== (rM = MM.endMs) && void 0 !== rM ? rM : MM.atMs) + dM
        })),
        xM = null === fM ? void 0 : DM.find((MM => fM.px >= ZM(MM.startMs) - dM && fM.px <= ZM(MM.endMs) + dM));
      return (0, JM.jsxs)("div", {
        ref: CM,
        className: SM.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: MM => {
          MM.currentTarget.setPointerCapture(MM.pointerId);
          const rM = oM(MM.clientX);
          tM(rM.px), gM.current = rM.positionMs
        },
        onPointerMove: MM => {
          const rM = oM(MM.clientX);
          tM(rM.px), null !== gM.current && (gM.current = rM.positionMs)
        },
        onPointerUp: MM => {
          null !== gM.current && (rM.seekToPosition(oM(MM.clientX).positionMs), gM.current = null)
        },
        onPointerCancel: () => {
          gM.current = null, tM(null)
        },
        onPointerLeave: () => {
          tM(null)
        },
        children: [(0, JM.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, JM.jsx)(UM, {
            draw: WM,
            className: "brv-seekbar-canvas"
          }), aM.map((MM => {
            const rM = kM(MM.startMs);
            return (0, JM.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${rM}%`,
                width: kM(MM.endMs) - rM + "%"
              }
            }, MM.startMs)
          })), QM.map((MM => {
            const rM = kM(MM.startMs);
            return (0, JM.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${rM}%`,
                width: kM(MM.endMs) - rM + "%"
              }
            }, MM.startMs)
          })), (0, JM.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== fM && (0, JM.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: fM.px
            }
          })]
        }), SM.inputRecorded && (0, JM.jsx)(UM, {
          draw: sM,
          className: "brv-seekbar-input"
        }), (0, JM.jsx)("div", {
          className: "brv-seekbar-markers",
          children: jM.map(((MM, rM) => {
            var iM;
            const OM = kM(MM.atMs),
              SM = void 0 !== MM.endMs;
            return (0, JM.jsx)("div", {
              className: `brv-marker brv-marker-${MM.kind}${SM?" brv-marker-range":""}`,
              style: {
                left: `${OM}%`,
                width: SM ? kM(null !== (iM = MM.endMs) && void 0 !== iM ? iM : MM.atMs) - OM + "%" : void 0
              }
            }, rM)
          }))
        }), (0, JM.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== fM && (0, JM.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: fM.px
          },
          children: [yM(fM.positionMs), null !== YM && ` \xb7 ${LM.fps(YM)}`, void 0 !== AM && ` \xb7 ${EM(AM,LM)}`, NM && ` \xb7 ${LM.videoGap}`, void 0 !== xM && ` \xb7 ${LM.unboundKeys((vM=xM.keys,vM.map((MM=>{let[rM,iM]=MM;return iM>1?`${mM(rM)} \xd7${iM}`:mM(rM)})).join(", ")))}`]
        })]
      });
      var vM
    }
    var CM = iM(2546),
      eM = iM(1188),
      bM = iM(4937),
      wM = iM(1396),
      tM = iM(1520),
      gM = iM(1398),
      uM = iM(6989),
      RM = iM(5481),
      pM = iM(5479);
    const WM = [.5, 1, 2, 4, 8, 16];
    var sM = iM(41580);

    function DM(MM) {
      const rM = MM.filter((MM => MM.endMs > MM.startMs)).sort(((MM, rM) => MM.startMs - rM.startMs)),
        iM = [];
      for (const OM of rM) {
        const MM = iM.at(-1);
        void 0 !== MM && OM.startMs <= MM.endMs ? MM.endMs = Math.max(MM.endMs, OM.endMs) : iM.push({
          ...OM
        })
      }
      return iM
    }
    class kM {
      constructor(MM) {
        this.Ld = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.Ld = DM(MM), this.positionStarts = [];
        let rM = 0;
        for (const iM of this.Ld) this.positionStarts.push(rM), rM += iM.endMs - iM.startMs;
        this.durationMs = rM
      }
      get startMs() {
        var MM, rM;
        return null !== (MM = null === (rM = this.Ld[0]) || void 0 === rM ? void 0 : rM.startMs) && void 0 !== MM ? MM : 0
      }
      get endMs() {
        var MM, rM;
        return null !== (MM = null === (rM = this.Ld.at(-1)) || void 0 === rM ? void 0 : rM.endMs) && void 0 !== MM ? MM : 0
      }
      toPosition(MM) {
        for (let rM = 0; rM < this.Ld.length; rM++) {
          const iM = this.Ld[rM];
          if (MM < iM.endMs) return this.positionStarts[rM] + Math.max(0, MM - iM.startMs)
        }
        return this.durationMs
      }
      toTime(MM) {
        const rM = Math.max(0, Math.min(this.durationMs, MM));
        for (let iM = this.Ld.length - 1; iM >= 0; iM--)
          if (rM >= this.positionStarts[iM]) return this.Ld[iM].startMs + (rM - this.positionStarts[iM]);
        return this.startMs
      }
      contains(MM) {
        return this.Ld.some((rM => MM >= rM.startMs && MM < rM.endMs))
      }
      nextPlayableTime(MM) {
        for (const rM of this.Ld) {
          if (MM < rM.startMs) return rM.startMs;
          if (MM < rM.endMs) return MM
        }
        return null
      }
    }

    function ZM(MM) {
      return [...MM].sort(((MM, rM) => MM.startMs - rM.startMs))
    }

    function oM(MM, rM) {
      let iM = 1 / 0,
        OM = -1 / 0;
      const SM = MM => {
        iM = Math.min(iM, MM), OM = Math.max(OM, MM)
      };
      for (const jM of [...MM.videoSegments, ...MM.telemetryChunks]) SM(jM.startMs), SM(jM.endMs);
      for (const jM of MM.domEvents) SM(rM.toEpoch(jM.timestamp));
      return iM < OM ? {
        startMs: iM,
        endMs: OM
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class fM {
      constructor(MM, rM) {
        this.wallNowMs = rM, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = MM, this.anchorWallMs = rM()
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
      timeAtWall(MM) {
        return this.playingState ? this.anchorTimeMs + (MM - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(MM) {
        this.anchorTimeMs = MM, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(MM) {
        this.reanchor(), this.speedState = MM
      }
      reanchor() {
        const MM = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(MM), this.anchorWallMs = MM
      }
    }
    const YM = "bloxd-clock";
    class NM {
      constructor(MM) {
        this.samples = void 0, this.samples = [];
        for (const iM of MM) {
          var rM;
          const MM = iM.data;
          iM.type === sM.e.Custom && (null === MM || void 0 === MM ? void 0 : MM.tag) === YM && "number" === typeof(null === (rM = MM.payload) || void 0 === rM ? void 0 : rM.epochMs) && this.samples.push({
            domMs: iM.timestamp,
            offsetMs: MM.payload.epochMs - iM.timestamp
          })
        }
        this.samples.sort(((MM, rM) => MM.domMs - rM.domMs))
      }
      toEpoch(MM) {
        return MM + this.offsetAtDom(MM)
      }
      toDom(MM) {
        return MM - this.offsetAtDom(MM)
      }
      offsetAtDom(MM) {
        var rM, iM;
        let OM = 0,
          SM = this.samples.length - 1;
        for (; OM < SM;) {
          const rM = Math.ceil((OM + SM) / 2);
          this.samples[rM].domMs <= MM ? OM = rM : SM = rM - 1
        }
        return null !== (rM = null === (iM = this.samples[OM]) || void 0 === iM ? void 0 : iM.offsetMs) && void 0 !== rM ? rM : 0
      }
    }
    const AM = new Set([sM.g.MouseMove, sM.g.MouseInteraction, sM.g.Scroll, sM.g.Input, sM.g.TouchMove, sM.g.Drag]),
      xM = "bloxd-active",
      vM = "player_death",
      FM = "error",
      BM = {
        $exception: "error",
        [FM]: "error",
        death: "death",
        [vM]: "death"
      };

    function XM(MM, rM, iM) {
      return function(MM, rM) {
        const iM = [];
        for (const OM of MM) {
          let MM = OM.startMs;
          for (const SM of rM) SM.endMs <= MM || SM.startMs >= OM.endMs || (SM.startMs > MM && iM.push({
            startMs: MM,
            endMs: SM.startMs
          }), MM = Math.max(MM, SM.endMs));
          MM < OM.endMs && iM.push({
            startMs: MM,
            endMs: OM.endMs
          })
        }
        return iM
      }(function(MM) {
        const rM = [];
        for (const iM of MM) {
          const MM = rM.at(-1);
          void 0 !== MM && iM.atMs - MM.endMs <= 5e3 ? MM.endMs = iM.atMs : rM.push({
            startMs: iM.atMs,
            endMs: iM.atMs
          })
        }
        return rM
      }(MM), DM([...rM, ...iM])).filter((MM => MM.endMs - MM.startMs >= 1e3))
    }

    function IM(MM) {
      var rM, iM, OM;
      return MM.type === sM.e.IncrementalSnapshot ? AM.has(null !== (iM = null === (OM = MM.data) || void 0 === OM ? void 0 : OM.source) && void 0 !== iM ? iM : -1) : MM.type === sM.e.Custom && (null === (rM = MM.data) || void 0 === rM ? void 0 : rM.tag) === xM
    }

    function KM(MM, rM) {
      const iM = [];
      for (const aM of MM)
        if (aM.type === sM.e.Custom) {
          var OM;
          const MM = null === (OM = aM.data) || void 0 === OM ? void 0 : OM.tag,
            SM = void 0 === MM ? void 0 : BM[MM];
          void 0 !== SM && iM.push({
            kind: SM,
            atMs: rM.toEpoch(aM.timestamp)
          })
        } else if (aM.type === sM.e.Plugin) {
        var SM, jM;
        const MM = aM.data;
        "rrweb/console@1" !== (null === MM || void 0 === MM ? void 0 : MM.plugin) || "error" !== (null === (SM = MM.payload) || void 0 === SM ? void 0 : SM.level) && "assert" !== (null === (jM = MM.payload) || void 0 === jM ? void 0 : jM.level) || iM.push({
          kind: "error",
          atMs: rM.toEpoch(aM.timestamp)
        })
      }
      return iM
    }
    const qM = 3e6;
    class TM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qM;
        this.fetchUrls = MM, this.onUrls = rM, this.wallNowMs = iM, this.refreshableAfterMs = OM, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = iM()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const MM = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        MM > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), MM) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(MM) {
        this.inFlight = !0;
        const rM = this.wallNowMs();
        this.lastRefreshWallMs = rM;
        let iM = !1;
        MM().then((MM => {
          this.destroyed || (this.urlsFetchedAtWallMs = rM, this.onUrls(MM))
        })).catch((MM => {
          console.error("Failed to refresh the replay's URLs.", MM), iM = !0
        })).finally((() => {
          this.inFlight = !1, iM && this.request()
        }))
      }
    }
    class VM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qM;
        this.source = MM, this.description = rM, this.wallNowMs = iM, this.refreshableAfterMs = OM, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(MM) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const rM = this.wallNowMs();
        for (const iM of MM) this.entries.set(iM.sequence, {
          urls: iM,
          fetchedAtWallMs: rM
        })
      }
      get(MM) {
        const rM = this.getFresh(MM);
        return null !== rM ? rM : null === this.source || this.unavailable.has(MM) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(MM) {
        return null === this.getFresh(MM) && !this.unavailable.has(MM)
      }
      request(MM) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const rM = MM.filter((MM => this.needs(MM)));
        rM.length > 0 && this.fetch(this.source, rM.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(MM) {
        const rM = this.entries.get(MM);
        return void 0 === rM ? null : null === this.source || this.wallNowMs() - rM.fetchedAtWallMs < this.refreshableAfterMs ? rM.urls : null
      }
      fetch(MM, rM) {
        this.inFlight = !0;
        const iM = this.wallNowMs();
        MM.load(rM).then((MM => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const OM = new Set;
          for (const rM of MM) this.entries.set(rM.sequence, {
            urls: rM,
            fetchedAtWallMs: iM
          }), OM.add(rM.sequence);
          for (const iM of rM) OM.has(iM) || (console.warn(`Replay sequence ${iM} has no ${this.description}.`), this.unavailable.add(iM))
        })).catch((MM => {
          console.error(`Failed to fetch the replay's ${this.description}.`, MM), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class cM {
      constructor(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : qM;
        this.load = rM, this.onLoaded = iM, this.onFailed = OM, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = Mr([]), this.hidden = [], this.destroyed = !1, this.chunks = [...MM].sort(((MM, rM) => MM.startMs - rM.startMs)).map((MM => ({
          chunk: MM,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new VM(SM, "telemetry URLs", jM, aM), this.urls.reset(ir(MM))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((MM => "loaded" === MM.status)).length
      }
      update(MM, rM, iM) {
        if (null === this.load || this.destroyed) return;
        const OM = rM.toPosition(MM),
          SM = rM.toTime(OM - 1e4),
          jM = rM.toTime(OM + 6e4 * Math.max(1, iM)),
          aM = rM.toTime(OM + 12e4 * Math.max(1, iM)),
          PM = this.chunks.filter((MM => "idle" === MM.status && MM.chunk.endMs >= SM && MM.chunk.startMs <= aM)).sort(((rM, iM) => Or(MM, rM.chunk) - Or(MM, iM.chunk)));
        this.urls.request(PM.flatMap((MM => {
          var rM;
          let {
            chunk: iM
          } = MM;
          return null !== (rM = iM.sequence) && void 0 !== rM ? rM : []
        })));
        for (const nM of PM) {
          if (this.loading >= 3) return;
          const MM = nM.chunk.startMs <= jM ? this.getUrl(nM.chunk) : null;
          null !== MM && this.startLoad(nM, MM, this.load)
        }
      }
      replaceUrls(MM) {
        this.urls.reset(ir(MM));
        for (const rM of this.chunks) {
          const iM = MM.find((MM => MM.startMs === rM.chunk.startMs && MM.endMs === rM.chunk.endMs));
          void 0 !== iM && (rM.chunk = iM, "failed" === rM.status && (rM.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(MM) {
        var rM;
        if (void 0 === MM.sequence) return null !== (rM = MM.url) && void 0 !== rM ? rM : null;
        const iM = this.urls.get(MM.sequence);
        return "string" === typeof iM ? null : iM.url
      }
      startLoad(MM, rM, iM) {
        MM.status = "loading", MM.attempts++, this.loading++, iM(rM).then((rM => {
          this.destroyed || (MM.status = "loaded", MM.telemetry = rM, this.merge(), this.onLoaded())
        })).catch((rM => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${MM.chunk.startMs}-${MM.chunk.endMs}.`, rM), MM.status = MM.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const MM = [];
        let rM = !1;
        for (const OM of this.chunks) {
          const iM = MM.at(-1);
          if (null === OM.telemetry) {
            rM = !1;
            continue
          }
          const SM = rr(OM.telemetry, OM.chunk);
          void 0 !== iM && rM && OM.chunk.startMs <= iM.endMs + 1e3 ? (iM.telemetry.push(SM), iM.endMs = OM.chunk.endMs) : (MM.push({
            telemetry: [SM],
            endMs: OM.chunk.endMs
          }), rM = !0)
        }
        const iM = MM.map((MM => function(MM, rM) {
          const iM = MM.actions.at(-1);
          if (void 0 === iM || 0 === iM.bits) return MM;
          return {
            ...MM,
            actions: [...MM.actions, {
              atMs: rM,
              bits: 0
            }]
          }
        }(Mr(MM.telemetry), MM.endMs)));
        this.merged = Mr(iM), this.hidden = iM.flatMap(((rM, iM) => function(MM, rM) {
          const iM = [];
          let OM = null;
          for (const {
              atMs: SM,
              event: jM
            }
            of MM.events) "hidden" === jM && null === OM ? OM = SM : "visible" === jM && null !== OM && (iM.push({
            startMs: OM,
            endMs: SM
          }), OM = null);
          return null !== OM && iM.push({
            startMs: OM,
            endMs: rM
          }), DM(iM)
        }(rM, MM[iM].endMs)))
      }
    }

    function Mr(MM) {
      return {
        inputRecorded: MM.some((MM => MM.keys.length > 0)),
        frames: MM.flatMap((MM => MM.frames)),
        states: MM.flatMap((MM => MM.states)),
        events: MM.flatMap((MM => MM.events)),
        actions: MM.flatMap((MM => MM.actions)),
        keys: MM.flatMap((MM => MM.keys))
      }
    }

    function rr(MM, rM) {
      const {
        actions: iM
      } = MM;
      return !MM.inputRecorded || iM.length > 0 && iM[0].atMs <= rM.startMs + 1 ? MM : {
        ...MM,
        actions: [{
          atMs: rM.startMs,
          bits: 0
        }, ...iM]
      }
    }

    function ir(MM) {
      return MM.flatMap((MM => {
        let {
          sequence: rM,
          url: iM
        } = MM;
        return void 0 === rM || void 0 === iM ? [] : [{
          sequence: rM,
          url: iM
        }]
      }))
    }

    function Or(MM, rM) {
      return MM < rM.startMs ? rM.startMs - MM : MM > rM.endMs ? 2 * (MM - rM.endMs) : 0
    }
    class Sr {
      constructor(MM, rM, iM, OM) {
        this.data = MM, this.domClock = rM, this.timeline = iM, this.options = OM, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(MM, rM) {
          return MM.filter(IM).map((MM => rM.toEpoch(MM.timestamp)))
        }(MM.domEvents, rM), this.telemetry = new cM(MM.telemetryChunks, OM.loadTelemetryChunk, (() => {
          this.rebuild()
        }), OM.onTelemetryFailed, OM.telemetryUrls), this.rebuild()
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
      update(MM, rM) {
        this.telemetry.update(MM, this.timeline, rM)
      }
      replaceTelemetryUrls(MM) {
        this.telemetry.replaceUrls(MM)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(MM) {
        return this.telemetry.hiddenRanges.some(jr(MM))
      }
      isVideoGapAt(MM) {
        return this.videoGapRanges.some(jr(MM))
      }
      rebuild() {
        const MM = this.telemetry.telemetry,
          rM = this.telemetry.hiddenRanges;
        this.videoGapRanges = XM(MM.frames, this.data.videoSegments, rM), this.inactiveRangeList = function(MM, rM, iM, OM) {
          const SM = [...rM];
          if (MM.length > 0) {
            const rM = [iM.startMs, ...MM, iM.endMs];
            for (let MM = 1; MM < rM.length; MM++) {
              const iM = rM[MM - 1],
                jM = rM[MM] - 1e3;
              jM - iM >= OM && SM.push({
                startMs: iM,
                endMs: jM
              })
            }
          }
          return DM(SM).filter((MM => MM.endMs - MM.startMs >= OM))
        }(this.activityTimes, rM, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(MM) {
          const {
            timeline: rM
          } = MM;
          return [...KM(MM.domEvents, MM.domClock), ...MM.telemetry.events.filter((MM => {
            let {
              event: rM
            } = MM;
            return "contextLost" === rM
          })).map((MM => {
            let {
              atMs: rM
            } = MM;
            return {
              kind: "graphicsCrash",
              atMs: rM
            }
          })), ...MM.hidden.map((MM => ({
            kind: "hidden",
            atMs: MM.startMs,
            endMs: MM.endMs
          }))), ...MM.extraMarkers].filter((MM => MM.atMs >= rM.startMs && MM.atMs <= rM.endMs && (rM.contains(MM.atMs) || rM.contains(MM.atMs - 1)))).sort(((MM, rM) => MM.atMs - rM.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: MM,
          extraMarkers: this.data.markers,
          hidden: rM,
          timeline: this.timeline
        })
      }
    }

    function jr(MM) {
      return rM => MM >= rM.startMs && MM < rM.endMs
    }
    const ar = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      Pr = new Set(["srcset", "imagesrcset"]),
      nr = new Set(["to", "from", "by", "values"]),
      Qr = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      zr = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      Lr = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      mr = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      Hr = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      hr = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      Jr = /^data:image\/(?!svg)/i,
      dr = "about:invalid";

    function yr(MM, rM) {
      let {
        hosts: iM
      } = rM, OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const SM = MM.trim();
      if (/[\\\u0000-\u001f]/.test(SM)) return !1;
      if (!hr.test(SM)) return !0;
      let jM;
      try {
        jM = new URL(SM.startsWith("//") ? `https:${SM}` : SM)
      } catch {
        return !1
      }
      return "data:" === jM.protocol ? OM ? "text/css" !== SM.slice(5).split(/[,;]/)[0].trim().toLowerCase() : Jr.test(SM) : "blob:" === jM.protocol || ("http:" === jM.protocol || "https:" === jM.protocol) && iM.some((MM => jM.hostname === MM || jM.hostname.endsWith(`.${MM}`)))
    }

    function lr(MM, rM) {
      return MM.replace(zr, (function(MM) {
        for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
        if (yr(OM.slice(0, 7).find((MM => "string" === typeof MM)), rM, !0)) return MM;
        const jM = MM.slice(0, 4).toLowerCase();
        return "url(" === jM ? `url("${dr}")` : "@imp" === jM ? `@import "${dr}"` : `"${dr}"`
      }))
    }

    function Er(MM) {
      return Hr.test(MM.replace(zr, '""'))
    }

    function Ur(MM) {
      let rM = "between";
      for (let iM = 0; iM < MM.length; iM++) {
        const OM = MM[iM];
        if ("/" === OM && "*" === MM[iM + 1]) {
          if (iM = MM.indexOf("*/", iM + 2), -1 === iM) return "open";
          iM++, rM = "between"
        } else if ('"' === OM || "'" === OM) {
          for (iM++; iM < MM.length && MM[iM] !== OM && !/[\n\r\f]/.test(MM[iM]); iM++) "\\" === MM[iM] && iM++;
          if (iM >= MM.length) return "open";
          rM = "token"
        } else "\\" === OM ? (iM++, rM = "token") : ";" === OM || "{" === OM || "}" === OM ? rM = "between" : /\s/.test(OM) || (rM = "token")
      }
      return rM
    }

    function Gr(MM, rM) {
      const iM = lr(MM, rM);
      if (Er(iM) || "open" === Ur(iM)) return "";
      if (!iM.includes("\\")) return iM;
      const OM = function(MM) {
        return MM.replace(mr, ((MM, rM, iM) => void 0 !== rM ? String.fromCodePoint(Math.min(parseInt(rM, 16), 1114111)) : null !== iM && void 0 !== iM ? iM : ""))
      }(iM);
      return lr(OM, rM) !== OM || Er(OM) ? "" : iM
    }

    function Cr(MM, rM) {
      const iM = Lr.test(MM) ? Gr(MM, rM) : MM;
      return iM.split("/* rr_split */").every((MM => "between" === Ur(MM))) ? iM : ""
    }

    function er(MM, rM, iM) {
      if ("string" === typeof rM) {
        const OM = MM.toLowerCase();
        if (Qr.has(OM)) return null;
        if (Pr.has(OM)) return function(MM, rM) {
          return MM.split(",").every((MM => {
            const iM = MM.trim().split(/\s+/)[0];
            return void 0 === iM || "" === iM || yr(iM, rM)
          }))
        }(rM, iM) ? rM : null;
        if (nr.has(OM)) {
          return rM.split(";").every((MM => yr(MM, iM))) ? er("", rM, iM) : null
        }
        return ar.has(OM) ? yr(rM, iM) ? rM : null : "_csstext" === OM ? Cr(rM, iM) : Lr.test(rM) ? Gr(rM, iM) : rM
      }
      if (Array.isArray(rM)) return rM.map((MM => er("", MM, iM)));
      if (null !== rM && "object" === typeof rM) {
        const OM = "style" === MM.toLowerCase(),
          SM = {};
        for (const [MM, aM] of Object.entries(rM)) SM[MM] = er(OM ? "" : MM, aM, iM);
        const {
          id: jM
        } = SM;
        if ("number" === typeof jM && iM.styleTextIds.has(jM))
          for (const MM of ["textContent", "value"]) {
            const rM = SM[MM];
            "string" === typeof rM && (SM[MM] = Cr(rM, iM))
          }
        return SM
      }
      return rM
    }

    function br(MM) {
      const rM = new Set,
        iM = [],
        OM = (MM, SM) => {
          if (null === MM || "object" !== typeof MM) return;
          const {
            id: jM,
            tagName: aM,
            childNodes: PM
          } = MM;
          if ("number" === typeof jM && ("string" === typeof aM && "style" === aM.toLowerCase() && rM.add(jM), iM.push({
              id: jM,
              parentId: SM
            }), Array.isArray(PM)))
            for (const rM of PM) OM(rM, jM)
        };
      for (const jM of MM) {
        const MM = jM.data;
        if (jM.type === sM.e.FullSnapshot) OM(null === MM || void 0 === MM ? void 0 : MM.node, null);
        else if (jM.type === sM.e.IncrementalSnapshot && Array.isArray(null === MM || void 0 === MM ? void 0 : MM.adds))
          for (const rM of MM.adds) OM(null === rM || void 0 === rM ? void 0 : rM.node, null === rM || void 0 === rM ? void 0 : rM.parentId)
      }
      const SM = new Set;
      for (const {
          id: jM,
          parentId: aM
        }
        of iM) "number" === typeof aM && rM.has(aM) && SM.add(jM);
      return SM
    }
    const wr = "brv-styles",
      tr = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      gr = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${tr.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class ur {
      static create(MM, rM, iM, OM, SM, jM, aM) {
        return rM.some((MM => MM.type === sM.e.FullSnapshot)) ? new ur(MM, function(MM, rM) {
          const iM = {
            hosts: rM,
            styleTextIds: br(MM)
          };
          return MM.map((MM => MM.type === sM.e.Meta ? MM : {
            ...MM,
            data: er("data", MM.data, iM)
          }))
        }(rM, SM), iM, OM, jM, aM) : null
      }
      constructor(MM, rM, iM, OM, SM, jM) {
        var aM, PM, nM, QM;
        this.domClock = iM, this.canvasSelectors = OM, this.videoLayer = SM, this.replayer = void 0, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (aM = null === (PM = rM[0]) || void 0 === PM ? void 0 : PM.timestamp) && void 0 !== aM ? aM : 0, this.lastDomMs = null !== (nM = null === (QM = rM.at(-1)) || void 0 === QM ? void 0 : QM.timestamp) && void 0 !== nM ? nM : 0, this.replayer = new sM.i(rM, {
          root: MM,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          insertStyleRules: tr
        }), this.replayer.on("resize", (MM => {
          const {
            width: rM,
            height: iM
          } = MM;
          jM({
            width: rM,
            height: iM
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect()
        }))
      }
      sync(MM, rM) {
        const iM = this.domOffsetAt(MM);
        rM ? this.replayer.play(iM) : this.replayer.pause(iM), this.lastDomCheckMs = performance.now()
      }
      update(MM, rM, iM) {
        iM - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = iM, this.placeVideoOverCanvas()), rM && iM - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = iM, this.checkDrift(MM))
      }
      setSpeed(MM) {
        this.replayer.setConfig({
          speed: MM
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(MM) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(MM)) - this.firstDomMs)
      }
      checkDrift(MM) {
        const rM = this.domOffsetAt(MM);
        rM >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - rM) > 400 && this.replayer.play(rM)
      }
      placeVideoOverCanvas() {
        const MM = this.replayer.iframe.contentDocument,
          rM = null === MM ? null : function(MM, rM) {
            for (const iM of rM) {
              const rM = MM.querySelector(iM);
              if (null !== rM) return rM
            }
            return null
          }(MM, this.canvasSelectors),
          iM = this.videoLayer.element;
        null !== rM ? (iM.previousSibling !== rM && rM.after(iM), iM.style.display = "", iM.style.left = `${rM.offsetLeft}px`, iM.style.top = `${rM.offsetTop}px`, iM.style.width = `${rM.offsetWidth}px`, iM.style.height = `${rM.offsetHeight}px`) : iM.style.display = "none"
      }
    }
    const Rr = {
      width: 1280,
      height: 720
    };
    class pr {
      constructor(MM, rM) {
        this.root = MM, this.onViewportChanged = rM, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", MM.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(MM)
      }
      setViewport(MM) {
        var rM;
        null === MM || MM.width <= 0 || MM.height <= 0 || MM.width === (null === (rM = this.viewport) || void 0 === rM ? void 0 : rM.width) && MM.height === this.viewport.height || (this.viewport = MM, this.element.style.width = `${MM.width}px`, this.element.style.height = `${MM.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var MM;
        const rM = null !== (MM = this.viewport) && void 0 !== MM ? MM : Rr,
          iM = this.root.getBoundingClientRect(),
          OM = Math.min(iM.width / rM.width, iM.height / rM.height),
          SM = (iM.width - rM.width * OM) / 2,
          jM = (iM.height - rM.height * OM) / 2;
        this.element.style.transform = `translate(${SM}px, ${jM}px) scale(${OM})`
      }
    }
    class Wr {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qM;
        this.urls = void 0, this.urls = new VM(MM, "video URLs", rM, iM)
      }
      reset(MM) {
        this.urls.reset(MM.flatMap((MM => {
          var rM;
          return null !== (rM = function(MM) {
            return "url" in MM ? null === MM.url ? null : {
              sequence: MM.sequence,
              url: MM.url
            } : void 0 === MM.partUrls ? null : {
              sequence: MM.sequence,
              partUrls: MM.partUrls
            }
          }(MM)) && void 0 !== rM ? rM : []
        })))
      }
      get(MM) {
        return this.urls.get(MM)
      }
      update(MM, rM, iM) {
        this.urls.request(function(MM, rM, iM, OM) {
          return MM.filter((MM => MM.endMs > rM && MM.startMs < rM + iM && OM(MM.sequence))).map((MM => MM.sequence))
        }(MM, rM, 12e4 * Math.max(1, iM), (MM => this.urls.needs(MM))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function sr(MM, rM, iM) {
      const OM = [];
      let SM = MM.length,
        jM = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, MM.length)
      }, (() => (async () => {
        for (; jM < SM;) {
          const PM = jM++;
          try {
            OM[PM] = await rM(MM[PM], iM)
          } catch (aM) {
            if (iM.aborted) throw aM;
            console.warn(`Replay video part ${PM} failed to load; playing the parts before it.`, aM), SM = Math.min(SM, PM)
          }
        }
      })()))), OM.slice(0, SM)
    }

    function Dr(MM) {
      const rM = [];
      let iM = 0;
      for (const zM of MM) rM.push(iM), iM += zM.byteLength;
      let OM = 0;
      const SM = iM => {
          for (; rM[OM] > iM;) OM--;
          for (; OM + 1 < rM.length && rM[OM + 1] <= iM;) OM++;
          return MM[OM][iM - rM[OM]]
        },
        jM = MM => SM(MM) * 2 ** 24 + 65536 * SM(MM + 1) + 256 * SM(MM + 2) + SM(MM + 3);
      let aM = 0,
        PM = !1,
        nM = !1,
        QM = 0;
      for (; aM + 8 <= iM;) {
        const MM = String.fromCharCode(SM(aM + 4), SM(aM + 5), SM(aM + 6), SM(aM + 7));
        let rM = jM(aM);
        if (1 === rM) {
          if (aM + 16 > iM) break;
          rM = jM(aM + 8) * 2 ** 32 + jM(aM + 12)
        } else 0 === rM && (rM = iM - aM);
        if (rM < 8 || aM + rM > iM) break;
        aM += rM, "moov" === MM ? PM = !0 : "moof" === MM ? nM = !0 : "mdat" === MM && nM ? (nM = !1, QM = aM) : !nM && QM > 0 && (QM = aM)
      }
      return PM && QM > 0 ? QM : null
    }
    async function kr(MM, rM) {
      const iM = await fetch(MM, {
        signal: rM
      });
      if (!iM.ok) throw new Error(`HTTP ${iM.status}`);
      return iM.arrayBuffer()
    }
    class Zr {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kr,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = MM, this.vL = rM, this.blobs = new Map
      }
      get(MM, rM) {
        const iM = or(MM, rM),
          OM = this.blobs.get(iM);
        return void 0 === OM ? null : (this.remember(iM, OM), OM)
      }
      async load(MM, rM, iM) {
        const OM = await sr(rM, this.fetchPart, iM),
          SM = function(MM) {
            const rM = MM.map((MM => new Uint8Array(MM))),
              iM = Dr(rM);
            return null === iM ? null : new Blob(function(MM, rM) {
              const iM = [];
              let OM = rM;
              for (const SM of MM) {
                if (OM <= 0) break;
                iM.push(SM.byteLength <= OM ? SM : SM.subarray(0, OM)), OM -= SM.byteLength
              }
              return iM
            }(rM, iM), {
              type: "video/mp4"
            })
          }(OM);
        return null !== SM && OM.length === rM.length && this.remember(or(MM, rM.length), SM), SM
      }
      remember(MM, rM) {
        this.blobs.delete(MM), this.blobs.set(MM, rM), this.blobs.size > this.vL && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function or(MM, rM) {
      return `${MM}/${rM}`
    }

    function fr(MM) {
      const rM = function(MM) {
        return MM.map(((rM, iM) => {
          const OM = MM[iM + 1];
          return void 0 === OM ? rM.endMs : Math.min(rM.endMs, OM.startMs)
        }))
      }(MM);
      return MM.map(((MM, iM) => ({
        ...MM,
        endMs: rM[iM]
      }))).filter((MM => MM.endMs > MM.startMs))
    }

    function Yr(MM, rM) {
      let iM = 0,
        OM = MM.length - 1;
      for (; iM <= OM;) {
        const SM = iM + OM >> 1,
          jM = MM[SM];
        if (rM < jM.startMs) OM = SM - 1;
        else {
          if (!(rM >= jM.endMs)) return jM;
          iM = SM + 1
        }
      }
      return null
    }

    function Nr(MM, rM) {
      return (rM - MM.startMs) / 1e3
    }

    function Ar(MM) {
      return Math.max(.4, .1 * MM)
    }

    function xr(MM) {
      return Math.max(.0625, Math.min(16, MM))
    }
    class vr {
      constructor(MM, rM, iM, OM, SM, jM, aM) {
        this.still = rM, this.clock = iM, this.frameDurationS = OM, this.wallNowMs = SM, this.onLoadFailed = aM, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new Zr, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = fr(MM), this.segmentUrls = new Wr(jM), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(MM) {
        var rM, iM;
        const OM = null !== (rM = null !== (iM = Yr(this.segments, MM)) && void 0 !== iM ? iM : this.segments.find((rM => rM.startMs > MM))) && void 0 !== rM ? rM : this.segments.at(-1);
        return void 0 === OM ? null : {
          width: OM.width,
          height: OM.height
        }
      }
      failedAt(MM) {
        const rM = Yr(this.segments, MM);
        return null !== rM && this.failed.has(rM.sequence)
      }
      replaceSegments(MM, rM) {
        for (const iM of this.slots.values()) this.release(iM);
        this.slots.clear(), this.failed.clear(), this.segments = fr(MM), this.segmentUrls.reset(this.segments), this.still = rM
      }
      update(MM) {
        var rM, iM;
        this.segmentUrls.update(this.segments, MM, this.clock.speed);
        const OM = Yr(this.segments, MM),
          SM = function(MM, rM) {
            const iM = MM.find((MM => MM.startMs > rM));
            return void 0 === iM ? null : iM.startMs - rM <= ("parts" in iM ? 15e3 : 8e3) ? iM : null
          }(this.segments, MM);
        this.evictExcept([OM, SM, null !== (rM = null === (iM = this.shown) || void 0 === iM ? void 0 : iM.segment) && void 0 !== rM ? rM : null]), null !== SM && this.getSlot(SM), this.showStill(null === OM ? function(MM, rM, iM) {
          if (null === rM) return null;
          const OM = MM.at(-1);
          return void 0 === OM ? iM >= rM.atMs - 1e4 ? rM : null : iM >= OM.endMs && Math.abs(rM.atMs - OM.endMs) <= 1e4 ? rM : null
        }(this.segments, this.still, MM) : null);
        const jM = null === OM ? null : this.getSlot(OM);
        if (null !== jM) {
          this.sync(jM, Nr(jM.segment, MM)), jM.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !jM.video.seeking && this.show(jM);
          for (const MM of this.slots.values()) MM === jM || MM.video.paused || MM.video.pause()
        } else {
          null === OM && this.show(null);
          for (const MM of this.slots.values()) MM.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: MM,
          sumAbsDriftMs: rM,
          maxAbsDriftMs: iM,
          withinOneFrame: OM,
          seeks: SM
        } = this.stats;
        return {
          frames: MM,
          meanAbsDriftMs: 0 === MM ? 0 : rM / MM,
          maxAbsDriftMs: iM,
          withinOneFrame: 0 === MM ? 1 : OM / MM,
          seeks: SM
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
        for (const MM of this.slots.values()) this.release(MM);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(MM, rM) {
        const {
          video: iM
        } = MM;
        if (iM.seeking) return;
        const {
          playing: OM,
          speed: SM
        } = this.clock, jM = OM && SM < 16, aM = function(MM) {
          let {
            targetS: rM,
            currentS: iM,
            playing: OM,
            speed: SM,
            frameDurationS: jM
          } = MM;
          const aM = iM - rM;
          if (!OM) return Math.abs(aM) > jM / 2 ? {
            kind: "seek",
            mediaTimeS: rM
          } : {
            kind: "none"
          };
          if (Math.abs(aM) > Ar(SM)) return {
            kind: "seek",
            mediaTimeS: rM
          };
          if (Math.abs(aM) < jM / 4) return {
            kind: "rate",
            playbackRate: xr(SM)
          };
          const PM = SM - aM / .5;
          return {
            kind: "rate",
            playbackRate: xr(Math.max(.5 * SM, Math.min(1.5 * SM, PM)))
          }
        }({
          targetS: rM,
          currentS: iM.currentTime,
          playing: jM,
          speed: SM,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === aM.kind) {
          const rM = this.seekLatencyS * SM,
            PM = OM ? jM ? Math.min(rM, Ar(SM) / 2) : rM : 0;
          MM.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, jM && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), iM.currentTime = Math.max(0, aM.mediaTimeS + PM)
        } else "rate" === aM.kind && Math.abs(iM.playbackRate - aM.playbackRate) > .001 && (iM.playbackRate = aM.playbackRate);
        jM && iM.paused && iM.currentTime < iM.duration ? (iM.playbackRate = xr(SM), iM.play().catch((MM => {
          console.warn("Replay video refused to play.", MM)
        }))) : jM || iM.paused || iM.pause()
      }
      getSlot(MM) {
        const rM = this.slots.get(MM.sequence);
        if (void 0 !== rM) return rM;
        const iM = "parts" in MM ? this.blobs.get(MM.sequence, MM.parts) : null,
          OM = null === iM ? this.segmentUrls.get(MM.sequence) : null;
        if ("pending" === OM) return null;
        if ("failed" === OM) return this.failed.has(MM.sequence) || (console.error(`Replay video segment ${MM.sequence} has no URLs to load.`), this.markFailed(MM)), null;
        const SM = document.createElement("video");
        SM.className = "brv-video", SM.muted = !0, SM.playsInline = !0, SM.preload = "auto", SM.disablePictureInPicture = !0;
        const jM = {
          segment: MM,
          video: SM,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== iM ? this.playBlob(jM, iM) : null !== OM && ("url" in OM ? SM.src = OM.url : this.loadParts(jM, OM.partUrls)), SM.addEventListener("seeked", (() => {
          if (null !== jM.seekStartedWallMs) {
            const MM = (this.wallNowMs() - jM.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, MM), jM.seekStartedWallMs = null
          }
        })), SM.addEventListener("loadeddata", (() => {
          this.slots.get(MM.sequence) === jM && this.failed.delete(MM.sequence)
        })), SM.addEventListener("error", (() => {
          this.slots.get(MM.sequence) === jM && (console.error(`Replay video segment ${MM.sequence} failed to load.`, SM.error), this.markFailed(MM))
        })), this.watchFrames(jM), this.element.appendChild(SM), this.slots.set(MM.sequence, jM), jM
      }
      loadParts(MM, rM) {
        this.blobs.load(MM.segment.sequence, rM, MM.abort.signal).then((rM => {
          if (this.slots.get(MM.segment.sequence) === MM) return null === rM ? (console.error(`Replay video segment ${MM.segment.sequence} has no playable parts.`), void this.markFailed(MM.segment)) : void this.playBlob(MM, rM)
        }), (rM => {
          this.slots.get(MM.segment.sequence) === MM && (console.error(`Replay video segment ${MM.segment.sequence} failed to load.`, rM), this.markFailed(MM.segment))
        }))
      }
      playBlob(MM, rM) {
        MM.objectUrl = URL.createObjectURL(rM), MM.video.src = MM.objectUrl
      }
      markFailed(MM) {
        this.failed.add(MM.sequence), this.onLoadFailed()
      }
      showStill(MM) {
        const rM = null !== MM && MM.url !== this.failedStillUrl ? MM : null;
        null !== rM && this.stillImage.getAttribute("src") !== rM.url && (this.stillImage.src = rM.url);
        const iM = null !== rM && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        iM !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", iM), this.stillShown = iM)
      }
      show(MM) {
        var rM;
        this.shown !== MM && (null === (rM = this.shown) || void 0 === rM || rM.video.classList.remove("brv-video-shown"), null === MM || void 0 === MM || MM.video.classList.add("brv-video-shown"), this.shown = MM)
      }
      evictExcept(MM) {
        for (const [rM, iM] of this.slots) MM.includes(iM.segment) || (this.release(iM), this.slots.delete(rM))
      }
      release(MM) {
        this.shown === MM && (this.shown = null), MM.abort.abort(), MM.video.pause(), MM.video.removeAttribute("src"), MM.video.load(), MM.video.remove(), null !== MM.objectUrl && URL.revokeObjectURL(MM.objectUrl)
      }
      watchFrames(MM) {
        const {
          video: rM
        } = MM;
        if ("function" !== typeof rM.requestVideoFrameCallback) return;
        const iM = (OM, SM) => {
          if (!this.slots.has(MM.segment.sequence)) return;
          const jM = rM.ownerDocument.defaultView,
            aM = null === jM ? 0 : jM.performance.timeOrigin - performance.timeOrigin,
            PM = Nr(MM.segment, this.clock.timeAtWall(SM.expectedDisplayTime + aM)),
            nM = this.lastPresented,
            QM = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== nM && nM.slot === MM && QM && this.clock.playing && SM.mediaTime > nM.mediaTimeS) {
            const MM = Math.abs(function(MM, rM, iM) {
              return iM < MM ? 1e3 * (iM - MM) : 1e3 * Math.max(0, iM - rM)
            }(nM.mediaTimeS, SM.mediaTime, nM.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += MM, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, MM), MM <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: MM,
            mediaTimeS: SM.mediaTime,
            clockMediaTimeS: PM
          }, rM.requestVideoFrameCallback(iM)
        };
        rM.requestVideoFrameCallback(iM)
      }
    }
    const Fr = 1 / 30,
      Br = ["#noa-canvas", "#noa-container"];
    class Xr {
      constructor(MM, rM) {
        var iM, OM, SM, jM, aM, PM, nM, QM;
        let zM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.bL = () => {
          this.frame = requestAnimationFrame(this.bL);
          const MM = performance.now();
          this.applySkips();
          const rM = this.clock.timeMs();
          this.annotations.update(rM, this.clock.speed), this.videoLayer.update(rM), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(rM)) : this.domLayer.update(rM, this.clock.playing, MM);
          const iM = this.getState();
          (null === this.lastState || function(MM, rM) {
            return Object.keys(MM).some((iM => "positionMs" === iM ? Math.floor(MM.positionMs / 1e3) !== Math.floor(rM.positionMs / 1e3) : MM[iM] !== rM[iM]))
          }(iM, this.lastState)) && this.emitState(iM)
        };
        const LM = () => performance.now();
        this.lowFps = null !== (iM = zM.lowFps) && void 0 !== iM ? iM : 25;
        const mM = new NM(rM.domEvents);
        this.timeline = new kM(rM.windows.length > 0 ? rM.windows : [oM(rM, mM)]), this.chapters = [...rM.chapters].sort(((MM, rM) => MM.startMs - rM.startMs)), this.annotations = new Sr(rM, mM, this.timeline, {
          inactivityThresholdMs: null !== (OM = zM.inactivityThresholdMs) && void 0 !== OM ? OM : 1e4,
          loadTelemetryChunk: null !== (SM = zM.loadTelemetryChunk) && void 0 !== SM ? SM : null,
          telemetryUrls: null !== (jM = zM.telemetryUrls) && void 0 !== jM ? jM : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new TM(null !== (aM = zM.refreshUrls) && void 0 !== aM ? aM : null, (MM => {
          this.videoLayer.replaceSegments(ZM(MM.videoSegments), MM.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(MM.telemetryChunks)
        })), this.clock = new fM(this.timeline.startMs, LM), this.stage = new pr(MM, (() => {
          var MM;
          null === (MM = this.domLayer) || void 0 === MM || MM.invalidateCanvasRect()
        })), this.videoLayer = new vr(ZM(rM.videoSegments), rM.still, this.clock, Fr, LM, null !== (PM = zM.segmentUrls) && void 0 !== PM ? PM : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = ur.create(this.stage.element, rM.domEvents, mM, null !== (nM = zM.canvasSelectors) && void 0 !== nM ? nM : Br, null !== (QM = zM.resourceHosts) && void 0 !== QM ? QM : [], this.videoLayer, (MM => {
          this.stage.setViewport(MM)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.bL()
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
      subscribe(MM) {
        return this.listeners.add(MM), MM(this.getState()), () => {
          this.listeners.delete(MM)
        }
      }
      getState() {
        const MM = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(MM),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(MM),
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
      seekToPosition(MM) {
        this.seekToTime(this.timeline.toTime(MM))
      }
      seekBy(MM) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + MM)
      }
      stepFrame(MM) {
        this.clock.pause(), this.seekBy(MM * Fr * 1e3)
      }
      setSpeed(MM) {
        var rM;
        this.clock.setSpeed(MM), null === (rM = this.domLayer) || void 0 === rM || rM.setSpeed(MM), this.emit()
      }
      setSkipInactive(MM) {
        this.skipInactive = MM, this.emit()
      }
      goToChapter(MM) {
        const rM = this.clock.timeMs(),
          iM = 1 === MM ? this.chapters.find((MM => MM.startMs > rM + 500)) : this.chapters.findLast((MM => MM.startMs < rM - 2e3));
        void 0 !== iM && this.seekToTime(iM.startMs)
      }
      destroy() {
        var MM;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (MM = this.domLayer) || void 0 === MM || MM.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(MM) {
        return this.annotations.isHiddenAt(MM) ? "tabHidden" : this.videoLayer.failedAt(MM) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(MM) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var MM;
        if (!this.clock.playing) return;
        const rM = this.clock.timeMs(),
          iM = this.timeline.nextPlayableTime(rM);
        if (null === iM) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const OM = this.skipInactive ? this.annotations.inactiveRanges.find((MM => iM >= MM.startMs && iM < MM.endMs - 500)) : void 0,
          SM = null !== (MM = null === OM || void 0 === OM ? void 0 : OM.endMs) && void 0 !== MM ? MM : iM;
        SM !== rM && this.seekToTime(SM)
      }
      seekToTime(MM) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, MM))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var MM;
        null === (MM = this.domLayer) || void 0 === MM || MM.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(MM) {
        this.lastState = MM;
        for (const rM of this.listeners) rM(MM)
      }
    }
    const Ir = 2500,
      Kr = 5;

    function qr(MM) {
      let {
        label: rM,
        sQ: iM,
        wide: OM = !1
      } = MM;
      return (0, JM.jsx)("span", {
        className: `brv-key${iM?" brv-key-held":""}${OM?" brv-key-wide":""}`,
        children: rM
      })
    }
    const Tr = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function Vr(MM) {
      const [rM, iM] = (0, OM.useState)({
        bits: 0,
        presses: []
      });
      return (0, OM.useEffect)((() => {
        let rM = 0,
          OM = "";
        const SM = () => {
          rM = requestAnimationFrame(SM);
          const jM = MM.timeline.toTime(MM.getPositionMs()),
            {
              actions: aM,
              keys: PM
            } = MM.input,
            LM = function(MM, rM) {
              const iM = QM(MM, rM);
              return iM < 0 ? 0 : MM[iM].bits
            }(aM, jM),
            mM = function(MM, rM, iM, OM) {
              const SM = Math.floor(rM / iM) * iM,
                jM = new Map,
                aM = new Set;
              for (let zM = QM(MM, SM + iM); zM >= 0 && MM[zM].atMs >= SM; zM--) {
                var PM;
                const rM = MM[zM];
                rM.down && rM.inPlay && rM.atMs !== SM + iM && (jM.set(rM.code, (null !== (PM = jM.get(rM.code)) && void 0 !== PM ? PM : 0) + 1), nM(rM) && aM.add(rM.code))
              }
              return [...jM].sort(zM).slice(0, OM).map((MM => {
                let [rM] = MM;
                return {
                  code: rM,
                  unbound: aM.has(rM)
                }
              }))
            }(PM, jM, Ir, Kr),
            HM = `${LM};${mM.map((MM=>`${MM.code}:${MM.unbound}`)).join(",")}`;
          HM !== OM && (OM = HM, iM({
            bits: LM,
            presses: mM
          }))
        };
        return SM(), () => {
          cancelAnimationFrame(rM)
        }
      }), [MM]), rM
    }

    function cr(MM) {
      let {
        controller: rM,
        labels: iM
      } = MM;
      const {
        bits: OM,
        presses: SM
      } = Vr(rM), jM = MM => function(MM, rM) {
        return 0 !== (MM & 1 << aM.indexOf(rM))
      }(OM, MM);
      return (0, JM.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, JM.jsx)("div", {
          className: "brv-input-slot",
          children: SM.map((MM => {
            const rM = mM(MM.code);
            return (0, JM.jsx)("span", {
              className: MM.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: MM.unbound ? iM.unboundKey(rM) : rM
            }, MM.code)
          }))
        }), (0, JM.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, JM.jsxs)("div", {
            className: "brv-keys",
            children: [(0, JM.jsx)("div", {
              className: "brv-keys-row",
              children: (0, JM.jsx)(qr, {
                label: "W",
                sQ: jM("forward")
              })
            }), (0, JM.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, JM.jsx)(qr, {
                label: "A",
                sQ: jM("left")
              }), (0, JM.jsx)(qr, {
                label: "S",
                sQ: jM("backward")
              }), (0, JM.jsx)(qr, {
                label: "D",
                sQ: jM("right")
              })]
            }), (0, JM.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, JM.jsx)(qr, {
                label: "Shift",
                sQ: jM("sprint")
              }), (0, JM.jsx)(qr, {
                label: "Ctrl",
                sQ: jM("crouch")
              }), (0, JM.jsx)(qr, {
                label: "Space",
                sQ: jM("jump"),
                wide: !0
              })]
            })]
          }), (0, JM.jsx)("div", {
            className: "brv-mouse",
            children: Tr.map((MM => {
              let {
                action: rM,
                className: iM
              } = MM;
              return (0, JM.jsx)("span", {
                className: `${iM}${jM(rM)?" brv-key-held":""}`
              }, rM)
            }))
          })]
        })]
      })
    }
    const Mi = {
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
      fps: MM => `${MM} FPS`,
      keys: "Keys",
      unboundKey: MM => `${MM} does nothing here`,
      unboundKeys: MM => `${MM} did nothing`
    };

    function ri(MM) {
      let {
        path: rM
      } = MM;
      return (0, JM.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, JM.jsx)("path", {
          d: rM
        })
      })
    }
    const ii = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function Oi(MM) {
      let {
        label: rM,
        onClick: iM,
        children: OM
      } = MM;
      return (0, JM.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: rM,
        "aria-label": rM,
        onClick: iM,
        children: OM
      })
    }

    function Si(MM) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === MM ? document.exitFullscreen() : MM.requestFullscreen()).catch((MM => {
        console.warn("Couldn't toggle fullscreen.", MM)
      }))
    }

    function ji(MM) {
      let {
        data: rM,
        className: iM,
        autoPlay: SM = !1,
        options: jM,
        labels: aM = Mi,
        onController: PM
      } = MM;
      const nM = (0, OM.useRef)(null),
        QM = (0, OM.useRef)(null),
        zM = (0, OM.useRef)(jM);
      zM.current = jM;
      const LM = (0, OM.useRef)(SM);
      LM.current = SM;
      const mM = (0, OM.useRef)(PM);
      mM.current = PM;
      const [HM, hM] = (0, OM.useState)(null), [dM, lM] = (0, OM.useState)(null), [EM, UM] = (0, OM.useState)(!0), CM = () => {
        UM((MM => !MM))
      };
      (0, OM.useEffect)((() => {
        var MM;
        ! function(MM) {
          if (null !== MM.getElementById(wr)) return;
          const rM = MM.createElement("style");
          rM.id = wr, rM.textContent = gr, MM.head.appendChild(rM)
        }(document);
        const iM = new Xr(nM.current, rM, zM.current),
          OM = iM.subscribe(lM);
        return hM(iM), null === (MM = mM.current) || void 0 === MM || MM.call(mM, iM), LM.current && iM.play(), QM.current.focus({
          preventScroll: !0
        }), () => {
          var MM;
          OM(), iM.destroy(), null === (MM = mM.current) || void 0 === MM || MM.call(mM, null)
        }
      }), [rM]);
      const eM = null !== HM && HM.input.inputRecorded,
        bM = null === HM || null === dM ? void 0 : HM.chapters.findLast((MM => HM.timeline.toPosition(MM.startMs) <= dM.positionMs));
      return (0, JM.jsxs)("div", {
        ref: QM,
        className: void 0 === iM ? "brv-player" : `brv-player ${iM}`,
        tabIndex: 0,
        onKeyDown: MM => {
          if (MM.target instanceof HTMLSelectElement) return;
          if (" " === MM.key && MM.target !== MM.currentTarget && MM.target instanceof HTMLButtonElement) return;
          const rM = function(MM) {
            let {
              key: rM,
              shiftKey: iM,
              ctrlKey: OM,
              metaKey: SM,
              altKey: jM
            } = MM;
            if (OM || SM || jM) return null;
            const aM = Number(rM) - 1;
            if (/^[1-9]$/.test(rM) && aM < WM.length) return {
              type: "setSpeed",
              speed: WM[aM]
            };
            switch (rM.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: iM ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: iM ? 1e3 : 5e3
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
                  type: "chapter", direction: iM ? -1 : 1
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
          }(MM);
          null !== rM && null !== HM && null !== dM && (MM.preventDefault(), function(MM, rM, iM, OM) {
            switch (rM.type) {
              case "togglePlay":
                MM.togglePlay();
                break;
              case "seekBy":
                MM.seekBy(rM.deltaMs);
                break;
              case "stepFrame":
                MM.stepFrame(rM.direction);
                break;
              case "setSpeed":
                MM.setSpeed(rM.speed);
                break;
              case "chapter":
                MM.goToChapter(rM.direction);
                break;
              case "toggleSkipInactive":
                MM.setSkipInactive(!iM.skipInactive);
                break;
              case "toggleFullscreen":
                Si(OM.root);
                break;
              case "toggleKeys":
                OM.toggleKeys()
            }
          }(HM, rM, dM, {
            root: MM.currentTarget,
            toggleKeys: CM
          }))
        },
        children: [(0, JM.jsxs)("div", {
          ref: nM,
          className: "brv-viewport",
          onClick: () => {
            null === HM || void 0 === HM || HM.togglePlay()
          },
          children: [null !== dM && null !== dM.notice && (0, JM.jsx)("div", {
            className: "brv-overlay",
            children: aM[dM.notice]
          }), null !== HM && EM && eM && (0, JM.jsx)(cr, {
            controller: HM,
            labels: aM
          })]
        }), null !== HM && null !== dM && (0, JM.jsxs)(JM.Fragment, {
          children: [(0, JM.jsx)(GM, {
            controller: HM,
            frames: HM.frames,
            input: HM.input,
            markers: HM.markers,
            inactiveRanges: HM.inactiveRanges,
            videoGaps: HM.videoGaps,
            labels: aM
          }), HM.chapters.length > 1 && (0, JM.jsx)("div", {
            className: "brv-chapters",
            children: HM.chapters.map((MM => (0, JM.jsxs)("button", {
              type: "button",
              className: MM === bM ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                HM.seekToPosition(HM.timeline.toPosition(MM.startMs))
              },
              children: [MM.label, " \xb7 ", yM(MM.endMs - MM.startMs)]
            }, MM.startMs)))
          }), (0, JM.jsxs)("div", {
            className: "brv-controls",
            children: [(0, JM.jsx)(Oi, {
              label: dM.playing ? aM.pause : aM.play,
              onClick: () => {
                HM.togglePlay()
              },
              children: (0, JM.jsx)(ri, {
                path: dM.playing ? ii.pause : ii.play
              })
            }), (0, JM.jsxs)("span", {
              className: "brv-time",
              children: [yM(dM.positionMs), " / ", yM(dM.durationMs)]
            }), (0, JM.jsx)("select", {
              className: "brv-speed",
              value: dM.speed,
              title: `${aM.speed} (1-${WM.length})`,
              "aria-label": aM.speed,
              onChange: MM => {
                HM.setSpeed(Number(MM.target.value))
              },
              children: WM.map((MM => (0, JM.jsxs)("option", {
                value: MM,
                children: [MM, "x"]
              }, MM)))
            }), (0, JM.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": dM.skipInactive,
              title: `${aM.skipInactive} (S)`,
              onClick: () => {
                HM.setSkipInactive(!dM.skipInactive)
              },
              children: [(0, JM.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), aM.skipInactive]
            }), eM && (0, JM.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": EM,
              title: `${aM.keys} (I)`,
              onClick: CM,
              children: [(0, JM.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), aM.keys]
            }), document.fullscreenEnabled && (0, JM.jsx)(Oi, {
              label: aM.fullscreen,
              onClick: () => {
                Si(QM.current)
              },
              children: (0, JM.jsx)(ri, {
                path: ii.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var ai = iM(5476);
    const Pi = ["bloxd.io", window.location.hostname];

    function ni(MM) {
      let {
        gameAnalyticsId: rM,
        recordingId: iM,
        userContext: SM,
        autoPlay: jM
      } = MM;
      const {
        t: aM
      } = (0, eM.A)(), [PM, nM] = (0, OM.useState)({
        status: "loading"
      }), [QM, zM] = (0, OM.useState)(0), LM = (0, OM.useMemo)((() => function(MM) {
        return {
          play: MM("studio:replayPlay"),
          pause: MM("studio:replayPause"),
          speed: MM("studio:replaySpeed"),
          skipInactive: MM("studio:replaySkipIdle"),
          fullscreen: MM("studio:replayFullscreen"),
          tabHidden: MM("studio:replayTabHidden"),
          videoFailed: MM("studio:replayVideoFailed"),
          nothingToShow: MM("studio:replayNothingToShow"),
          videoGap: MM("studio:replayVideoGap"),
          error: MM("general:error"),
          graphicsCrash: MM("studio:replayMarkerGraphicsCrash"),
          death: MM("studio:replayMarkerDeath"),
          fps: rM => MM("studio:replayFps", {
            fps: rM
          }),
          keys: MM("studio:replayKeys"),
          unboundKey: rM => MM("studio:replayUnboundKey", {
            key: rM
          }),
          unboundKeys: rM => MM("studio:replayUnboundKeys", {
            keys: rM
          })
        }
      }(aM)), [aM]), mM = (0, OM.useMemo)((() => ({
        resourceHosts: Pi,
        loadTelemetryChunk: uM.A,
        refreshUrls: async () => (0, uM.u)(await ai.c.getReplay(SM, rM, iM)),
        segmentUrls: {
          load: async MM => (await ai.c.getReplaySegmentUrls(SM, rM, iM, MM, [])).videoSegments,
          maxSequences: pM.x
        },
        telemetryUrls: {
          load: async MM => (await ai.c.getReplaySegmentUrls(SM, rM, iM, [], MM)).telemetrySegments,
          maxSequences: pM.E
        }
      })), [rM, iM]);
      return (0, OM.useEffect)((() => {
        let MM = !1;
        return nM({
          status: "loading"
        }), (0, uM.B)({
          getReplay: () => ai.c.getReplay(SM, rM, iM),
          loadDomEvents: uM.z,
          onPreparing: () => {
            nM({
              status: "preparing"
            })
          },
          wait: MM => new Promise((rM => {
            setTimeout(rM, MM)
          })),
          isCancelled: () => MM
        }).then((rM => {
          if (!MM && null !== rM) {
            const MM = (0, uM.y)(rM.replay, rM.domEvents, (MM => aM("studio:replayVisit", {
              number: MM
            })));
            nM({
              status: "loaded",
              value: MM
            })
          }
        })).catch((rM => {
          console.error("Failed to load studio replay", rM), MM || nM({
            status: "error",
            message: (0, uM.o)(rM, aM("studio:replayLoadFailed"))
          })
        })), () => {
          MM = !0
        }
      }), [rM, iM, QM]), "loading" === PM.status ? (0, JM.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, JM.jsx)(wM.d, {})
      }) : "preparing" === PM.status ? (0, JM.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, JM.jsx)(wM.d, {}), aM("studio:replayPreparing")]
      }) : "error" === PM.status ? (0, JM.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [PM.message, (0, JM.jsx)(tM.V, {
          onClick: () => {
            zM((MM => MM + 1))
          },
          children: aM("general:tryAgain")
        })]
      }) : (0, JM.jsx)(ji, {
        className: "StudioReplayPlayer",
        data: PM.value,
        labels: LM,
        options: mM,
        autoPlay: jM || QM > 0
      })
    }

    function Qi(MM) {
      let {
        onPlay: rM
      } = MM;
      const {
        t: iM
      } = (0, eM.A)();
      return (0, JM.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": iM("general:play"),
        onClick: rM,
        children: (0, JM.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, JM.jsx)(gM.b, {
            name: "play"
          })
        })
      })
    }
    const zi = uM.O.replay,
      Li = uM.O.filters,
      mi = uM.O.endedAt,
      Hi = {
        newPlayers: "studio:replaysFilterNewPlayers",
        quickQuits: "studio:replaysFilterQuickQuits",
        leftAfterDying: "studio:replaysFilterLeftAfterDying",
        lowFps: "studio:replaysFilterLowFps",
        mobile: "studio:replaysFilterMobile",
        errors: "studio:replaysFilterErrors"
      },
      Ji = {
        mobile: "studio:replayTagMobile",
        tablet: "studio:replayTagTablet",
        newPlayer: "studio:replayTagNewPlayer",
        leftAfterDying: "studio:replayTagLeftAfterDying",
        lowFps: "studio:replayTagLowFps",
        error: "studio:replayTagError"
      };

    function di(MM) {
      let {
        item: rM,
        selected: iM,
        onSelect: OM
      } = MM;
      const {
        t: SM
      } = (0, eM.A)(), aM = (0, uM.s)(rM);
      return (0, JM.jsxs)("button", {
        type: "button",
        className: jM()("StudioReplayListItem", {
          StudioReplayListItemSelected: iM
        }),
        onClick: OM,
        children: [(0, JM.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, JM.jsx)("span", {
            children: (0, uM.l)(rM.startedAtMs)
          }), (0, JM.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: yM(rM.inGameDurationMs)
          })]
        }), aM.length > 0 && (0, JM.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: aM.map((MM => (0, JM.jsx)("span", {
            className: jM()("StudioReplayTag", `StudioReplayTag-${MM}`),
            children: SM(Ji[MM])
          }, MM)))
        })]
      })
    }

    function yi(MM) {
      let {
        gameAnalyticsId: rM,
        userContext: iM,
        availability: OM
      } = MM;
      const {
        t: SM
      } = (0, eM.A)();
      return "on" === OM ? (0, JM.jsx)(li, {
        gameAnalyticsId: rM,
        userContext: iM
      }) : "failed" === OM ? (0, JM.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, JM.jsx)(gM.b, {
          name: "face-dizzy"
        }), SM("studio:replaysStartFailed"), (0, JM.jsx)(tM.V, {
          onClick: () => {
            CM.f.startNow()
          },
          children: SM("general:tryAgain")
        })]
      }) : (0, JM.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, JM.jsx)(wM.d, {})
      })
    }

    function li(MM) {
      var rM, iM;
      let {
        gameAnalyticsId: SM,
        userContext: aM
      } = MM;
      const {
        t: PM
      } = (0, eM.A)(), nM = function(MM, rM) {
        const {
          t: iM
        } = (0, eM.A)(), [SM, jM] = (0, OM.useState)({
          status: "loading"
        });
        return (0, OM.useEffect)((() => {
          let OM = !1;
          return jM({
            status: "loading"
          }), ai.c.listReplays(rM, MM).then((MM => {
            OM || jM({
              status: "loaded",
              value: MM
            })
          })).catch((MM => {
            console.error("Failed to list studio replays", MM), OM || jM({
              status: "error",
              message: (0, uM.o)(MM, iM("studio:replaysLoadFailed"))
            })
          })), () => {
            OM = !0
          }
        }), [MM]), SM
      }(SM, aM), [QM, zM] = (0, bM.k)(), LM = (0, uM.I)(QM.get(Li)), mM = (0, uM.H)(QM.get(mi)), HM = QM.get(zi), hM = "loaded" === nM.status ? (0, uM.d)(nM.value.recordings, LM, mM) : [], dM = "loaded" === nM.status ? (0, uM.R)(nM.value.recordings, hM, HM) : [], yM = null !== (rM = null !== HM && void 0 !== HM ? HM : null === (iM = dM[0]) || void 0 === iM ? void 0 : iM.recordingId) && void 0 !== rM ? rM : null, [lM, EM] = (0, OM.useState)(HM), [UM, GM] = (0, OM.useState)(!1), CM = (0, OM.useRef)(null), pM = (0, OM.useRef)(null !== HM), WM = (0, OM.useRef)(null);

      function sM(MM) {
        MM === lM && MM === yM || (WM.current = null, pM.current = !0, GM(!0), EM(MM), zM((rM => {
          (0, bM.f)(rM, zi, MM)
        }), {
          push: !0
        }))
      }

      function DM(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        yM !== lM && (WM.current = yM), zM((iM => {
          (0, bM.f)(iM, zi, yM), (0, bM.f)(iM, Li, (0, uM.h)(MM)), rM && (0, bM.f)(iM, mi, null)
        }))
      }
      if ((0, OM.useEffect)((() => {
          null !== HM && HM !== WM.current && EM(HM)
        }), [HM]), (0, OM.useEffect)((() => {
          pM.current && null !== CM.current && (pM.current = !1, CM.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [lM, nM.status]), "loading" === nM.status) return (0, JM.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, JM.jsx)(wM.d, {})
      });
      if ("error" === nM.status) return (0, JM.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, JM.jsx)(gM.b, {
          name: "face-dizzy"
        }), nM.message]
      });
      const {
        recordings: kM,
        dailyQuota: ZM
      } = nM.value;
      if (0 === kM.length) return (0, JM.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, JM.jsx)(gM.b, {
          name: "video"
        }), PM(0 === ZM ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const oM = uM.K.filter((MM => kM.some((rM => (0, uM.D)(rM, MM))))),
        fM = yM !== lM;
      return (0, JM.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, JM.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== mM && (0, JM.jsxs)(tM.V, {
            active: !0,
            onClick: () => {
              DM(LM, !0)
            },
            children: [PM("studio:replaysFilterEndedAt", {
              minutes: (0, RM.u)(mM.minute, mM.orLonger ? mM.minute : 1 / 0)
            }), (0, JM.jsx)(gM.b, {
              name: "xmark"
            })]
          }), oM.map((MM => (0, JM.jsx)(tM.V, {
            active: LM.includes(MM),
            onClick: () => {
              ! function(MM) {
                DM(LM.includes(MM) ? LM.filter((rM => rM !== MM)) : [...LM, MM])
              }(MM)
            },
            children: PM(Hi[MM])
          }, MM))), ZM > 0 && (0, JM.jsx)("span", {
            className: "StudioReplaysQuota",
            children: PM("studio:replaysQuota", {
              count: ZM
            })
          })]
        }), (0, JM.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, JM.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === hM.length && (0, JM.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [PM("studio:replaysNoMatch"), (0, JM.jsx)(tM.V, {
                onClick: () => {
                  DM([], !0)
                },
                children: PM("studio:replaysClearFilters")
              })]
            }), dM.map((MM => (0, JM.jsx)(di, {
              item: MM,
              selected: MM.recordingId === yM,
              onSelect: () => {
                sM(MM.recordingId)
              }
            }, MM.recordingId)))]
          }), null !== yM && (0, JM.jsxs)("div", {
            ref: CM,
            className: jM()("StudioReplayViewer", {
              StudioReplayViewerWaiting: fM
            }),
            children: [!fM && (0, JM.jsx)(ni, {
              gameAnalyticsId: SM,
              recordingId: yM,
              userContext: aM,
              autoPlay: UM
            }, yM), fM && (0, JM.jsx)(Qi, {
              onPlay: () => {
                sM(yM)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);