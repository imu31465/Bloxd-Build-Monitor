export const id = 294;
export const ids = [294];
export const modules = {
  41478: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => mG
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB);
    const oB = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      jB = 3e3;

    function yB(BB) {
      return BB.down && BB.inPlay && !BB.bound
    }

    function JB(BB, OB) {
      let GB = 0,
        YB = BB.length;
      for (; GB < YB;) {
        const DB = GB + YB >> 1;
        BB[DB].atMs <= OB ? GB = DB + 1 : YB = DB
      }
      return GB - 1
    }

    function MB(BB) {
      let {
        code: OB,
        unbound: GB
      } = BB;
      return `${OB}:${GB}`
    }

    function PB(BB, OB) {
      return OB[1] - BB[1] || (BB[0] < OB[0] ? -1 : 1)
    }
    const zB = {
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

    function lB(BB) {
      var OB;
      const GB = zB[BB];
      if (void 0 !== GB) return GB;
      const YB = null !== (OB = /^(?:Key|Digit)(.)$/.exec(BB)) && void 0 !== OB ? OB : /^Numpad(.+)$/.exec(BB);
      return null !== YB ? BB.startsWith("Numpad") ? `Num ${YB[1]}` : YB[1] : BB
    }
    const pB = 250,
      qB = 60;
    var ZB = GB(1282);
    const NB = 6;

    function RB(BB) {
      const OB = Math.max(0, Math.floor(BB / 1e3)),
        GB = Math.floor(OB / 3600),
        YB = Math.floor(OB % 3600 / 60),
        DB = String(OB % 60).padStart(2, "0");
      return GB > 0 ? `${GB}:${String(YB).padStart(2,"0")}:${DB}` : `${YB}:${DB}`
    }

    function WB(BB, OB) {
      return getComputedStyle(BB).getPropertyValue(OB).trim()
    }

    function AB(BB, OB) {
      switch (BB.kind) {
        case "note":
          return BB.label;
        case "hidden":
          return OB.tabHidden;
        default:
          return OB[BB.kind]
      }
    }

    function VB(BB) {
      let {
        draw: OB,
        className: GB
      } = BB;
      const DB = (0, YB.useRef)(null);
      return (0, YB.useEffect)((() => {
        const BB = DB.current,
          GB = BB.getContext("2d");
        if (null === OB || null === GB) return;
        const {
          clientWidth: YB,
          clientHeight: QB
        } = BB, oB = window.devicePixelRatio;
        BB.width = Math.round(YB * oB), BB.height = Math.round(QB * oB), GB.setTransform(oB, 0, 0, oB, 0, 0), OB(GB, YB, QB, BB)
      }), [OB]), (0, ZB.jsx)("canvas", {
        ref: DB,
        className: GB
      })
    }

    function SB(BB) {
      let {
        controller: OB,
        frames: GB,
        input: DB,
        markers: QB,
        inactiveRanges: oB,
        videoGaps: JB,
        labels: MB
      } = BB;
      const {
        timeline: zB
      } = OB, SB = (0, YB.useRef)(null), [nB, UB] = (0, YB.useState)(0), [fB, kB] = (0, YB.useState)(null), dB = (0, YB.useRef)(null), KB = Math.max(1, zB.durationMs);
      ! function(BB, OB, GB) {
        (0, YB.useEffect)((() => {
          let YB = 0,
            DB = NaN;
          const QB = () => {
            var oB;
            YB = requestAnimationFrame(QB);
            const jB = (null !== (oB = OB.current) && void 0 !== oB ? oB : BB.getPositionMs()) / Math.max(1, BB.timeline.durationMs) * 100;
            jB !== DB && (DB = jB, GB.current.style.setProperty("--brv-position", `${jB}%`))
          };
          return QB(), () => {
            cancelAnimationFrame(YB)
          }
        }), [BB])
      }(OB, dB, SB), (0, YB.useEffect)((() => {
        const BB = SB.current,
          OB = new ResizeObserver((() => {
            UB(BB.clientWidth)
          }));
        return OB.observe(BB), () => {
          OB.disconnect()
        }
      }), []);
      const uB = (0, YB.useMemo)((() => 0 === nB ? null : function(BB, OB, GB) {
          const YB = Math.max(1, Math.min(GB, Math.floor(OB.durationMs / pB))),
            DB = OB.durationMs / YB,
            QB = new Array(YB).fill(0);
          for (const oB of BB) OB.contains(oB.atMs) && QB[Math.min(YB - 1, Math.floor(OB.toPosition(oB.atMs) / DB))]++;
          return {
            bucketMs: DB,
            fps: QB.map((BB => 0 === BB ? null : 1e3 * BB / DB))
          }
        }(GB, zB, Math.round(nB))), [GB, zB, nB]),
        mB = OB.lowFps,
        IB = (0, YB.useMemo)((() => null === uB ? null : (BB, OB, GB, YB) => {
          ! function(BB, OB, GB, YB, DB, QB) {
            BB.clearRect(0, 0, GB, YB);
            const oB = GB / OB.fps.length;
            OB.fps.forEach(((OB, GB) => {
              if (null === OB) return;
              const jB = Math.max(1, Math.min(OB, qB) / qB * YB);
              BB.fillStyle = OB < DB ? QB.lowFps : QB.fps, BB.fillRect(GB * oB, YB - jB, Math.max(1, oB), jB)
            }))
          }(BB, uB, OB, GB, mB, {
            fps: WB(YB, "--brv-fps"),
            lowFps: WB(YB, "--brv-low-fps")
          })
        }), [uB, mB]),
        FB = (0, YB.useMemo)((() => {
          if (0 === nB || !DB.inputRecorded) return null;
          const BB = function(BB, OB, GB) {
            const YB = Math.max(1, OB.durationMs) / GB,
              DB = new Array(GB).fill(0),
              QB = new Array(GB).fill(0);
            for (const oB of BB) {
              if (!oB.down || !OB.contains(oB.atMs)) continue;
              const BB = Math.min(GB - 1, Math.floor(OB.toPosition(oB.atMs) / YB));
              DB[BB]++, yB(oB) && QB[BB]++
            }
            return {
              presses: DB,
              unbound: QB
            }
          }(DB.keys, zB, Math.max(1, Math.round(nB)));
          return (OB, GB, YB, DB) => {
            ! function(BB, OB, GB, YB, DB) {
              BB.clearRect(0, 0, GB, YB);
              const QB = GB / OB.presses.length;
              OB.presses.forEach(((GB, oB) => {
                if (0 === GB) return;
                const jB = OB.unbound[oB] > 0;
                BB.globalAlpha = jB ? 1 : Math.min(1, .35 + .15 * GB), BB.fillStyle = jB ? DB.unbound : DB.presses, BB.fillRect(oB * QB, 0, Math.max(jB ? 2 : 1, QB), YB)
              })), BB.globalAlpha = 1
            }(OB, BB, GB, YB, {
              presses: WB(DB, "--brv-key-press"),
              unbound: WB(DB, "--brv-key-unbound")
            })
          }
        }), [DB, zB, nB]),
        iB = (0, YB.useMemo)((() => function(BB) {
          const OB = [];
          for (const YB of BB) {
            var GB;
            if (!yB(YB)) continue;
            let BB = OB.at(-1);
            (void 0 === BB || YB.atMs - BB.endMs > jB) && (BB = {
              startMs: YB.atMs,
              endMs: YB.atMs,
              counts: new Map
            }, OB.push(BB)), BB.endMs = YB.atMs, BB.counts.set(YB.code, (null !== (GB = BB.counts.get(YB.code)) && void 0 !== GB ? GB : 0) + 1)
          }
          return OB.map((BB => {
            let {
              startMs: OB,
              endMs: GB,
              counts: YB
            } = BB;
            return {
              startMs: OB,
              endMs: GB,
              keys: [...YB].sort(PB)
            }
          }))
        }(DB.keys.filter((BB => zB.contains(BB.atMs))))), [DB.keys, zB]),
        LB = BB => zB.toPosition(BB) / KB * 100,
        gB = BB => LB(BB) / 100 * nB,
        rB = BB => {
          const OB = SB.current.getBoundingClientRect();
          return {
            px: BB - OB.left,
            positionMs: Math.max(0, Math.min(OB.width, BB - OB.left)) / OB.width * KB
          }
        },
        XB = null === fB || 0 === nB ? null : {
          px: fB,
          positionMs: Math.max(0, Math.min(nB, fB)) / nB * KB
        },
        wB = null === XB || null === uB ? null : function(BB, OB) {
          const GB = Math.max(0, Math.min(BB.fps.length - 1, Math.floor(OB / BB.bucketMs))),
            YB = BB.fps[GB];
          return null === YB ? null : Math.round(YB)
        }(uB, XB.positionMs),
        EB = null !== XB && JB.some((BB => XB.px >= gB(BB.startMs) && XB.px < gB(BB.endMs))),
        cB = null === XB ? void 0 : QB.find((BB => {
          var OB;
          return XB.px >= gB(BB.atMs) - NB && XB.px <= gB(null !== (OB = BB.endMs) && void 0 !== OB ? OB : BB.atMs) + NB
        })),
        hB = null === XB ? void 0 : iB.find((BB => XB.px >= gB(BB.startMs) - NB && XB.px <= gB(BB.endMs) + NB));
      return (0, ZB.jsxs)("div", {
        ref: SB,
        className: DB.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: BB => {
          BB.currentTarget.setPointerCapture(BB.pointerId);
          const OB = rB(BB.clientX);
          kB(OB.px), dB.current = OB.positionMs
        },
        onPointerMove: BB => {
          const OB = rB(BB.clientX);
          kB(OB.px), null !== dB.current && (dB.current = OB.positionMs)
        },
        onPointerUp: BB => {
          null !== dB.current && (OB.seekToPosition(rB(BB.clientX).positionMs), dB.current = null)
        },
        onPointerCancel: () => {
          dB.current = null, kB(null)
        },
        onPointerLeave: () => {
          kB(null)
        },
        children: [(0, ZB.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, ZB.jsx)(VB, {
            draw: IB,
            className: "brv-seekbar-canvas"
          }), oB.map((BB => {
            const OB = LB(BB.startMs);
            return (0, ZB.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${OB}%`,
                width: LB(BB.endMs) - OB + "%"
              }
            }, BB.startMs)
          })), JB.map((BB => {
            const OB = LB(BB.startMs);
            return (0, ZB.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${OB}%`,
                width: LB(BB.endMs) - OB + "%"
              }
            }, BB.startMs)
          })), (0, ZB.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== XB && (0, ZB.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: XB.px
            }
          })]
        }), DB.inputRecorded && (0, ZB.jsx)(VB, {
          draw: FB,
          className: "brv-seekbar-input"
        }), (0, ZB.jsx)("div", {
          className: "brv-seekbar-markers",
          children: QB.map(((BB, OB) => {
            var GB;
            const YB = LB(BB.atMs),
              DB = void 0 !== BB.endMs;
            return (0, ZB.jsx)("div", {
              className: `brv-marker brv-marker-${BB.kind}${DB?" brv-marker-range":""}`,
              style: {
                left: `${YB}%`,
                width: DB ? LB(null !== (GB = BB.endMs) && void 0 !== GB ? GB : BB.atMs) - YB + "%" : void 0
              }
            }, OB)
          }))
        }), (0, ZB.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== XB && (0, ZB.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: XB.px
          },
          children: [RB(XB.positionMs), null !== wB && ` \xb7 ${MB.fps(wB)}`, void 0 !== cB && ` \xb7 ${AB(cB,MB)}`, EB && ` \xb7 ${MB.videoGap}`, void 0 !== hB && ` \xb7 ${MB.unboundKeys((aB=hB.keys,aB.map((BB=>{let[OB,GB]=BB;return GB>1?`${lB(OB)} \xd7${GB}`:lB(OB)})).join(", ")))}`]
        })]
      });
      var aB
    }
    var nB = GB(5090),
      UB = GB(1175),
      fB = GB(4975),
      kB = GB(1375),
      dB = GB(1485),
      KB = GB(1383),
      uB = GB(7023),
      mB = GB(5578),
      IB = GB(5575);
    const FB = [.5, 1, 2, 4, 8, 16];
    var iB = GB(41487);

    function LB(BB) {
      const OB = BB.filter((BB => BB.endMs > BB.startMs)).sort(((BB, OB) => BB.startMs - OB.startMs)),
        GB = [];
      for (const YB of OB) {
        const BB = GB.at(-1);
        void 0 !== BB && YB.startMs <= BB.endMs ? BB.endMs = Math.max(BB.endMs, YB.endMs) : GB.push({
          ...YB
        })
      }
      return GB
    }
    class gB {
      constructor(BB) {
        this.JZ = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.JZ = LB(BB), this.positionStarts = [];
        let OB = 0;
        for (const GB of this.JZ) this.positionStarts.push(OB), OB += GB.endMs - GB.startMs;
        this.durationMs = OB
      }
      get startMs() {
        var BB, OB;
        return null !== (BB = null === (OB = this.JZ[0]) || void 0 === OB ? void 0 : OB.startMs) && void 0 !== BB ? BB : 0
      }
      get endMs() {
        var BB, OB;
        return null !== (BB = null === (OB = this.JZ.at(-1)) || void 0 === OB ? void 0 : OB.endMs) && void 0 !== BB ? BB : 0
      }
      toPosition(BB) {
        for (let OB = 0; OB < this.JZ.length; OB++) {
          const GB = this.JZ[OB];
          if (BB < GB.endMs) return this.positionStarts[OB] + Math.max(0, BB - GB.startMs)
        }
        return this.durationMs
      }
      toTime(BB) {
        const OB = Math.max(0, Math.min(this.durationMs, BB));
        for (let GB = this.JZ.length - 1; GB >= 0; GB--)
          if (OB >= this.positionStarts[GB]) return this.JZ[GB].startMs + (OB - this.positionStarts[GB]);
        return this.startMs
      }
      contains(BB) {
        return this.JZ.some((OB => BB >= OB.startMs && BB < OB.endMs))
      }
      nextPlayableTime(BB) {
        for (const OB of this.JZ) {
          if (BB < OB.startMs) return OB.startMs;
          if (BB < OB.endMs) return BB
        }
        return null
      }
    }

    function rB(BB) {
      return [...BB].sort(((BB, OB) => BB.startMs - OB.startMs))
    }

    function XB(BB, OB) {
      let GB = 1 / 0,
        YB = -1 / 0;
      const DB = BB => {
        GB = Math.min(GB, BB), YB = Math.max(YB, BB)
      };
      for (const QB of [...BB.videoSegments, ...BB.telemetryChunks]) DB(QB.startMs), DB(QB.endMs);
      for (const QB of BB.domEvents) DB(OB.toEpoch(QB.timestamp));
      return GB < YB ? {
        startMs: GB,
        endMs: YB
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class wB {
      constructor(BB, OB) {
        this.wallNowMs = OB, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = BB, this.anchorWallMs = OB()
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
      timeAtWall(BB) {
        return this.playingState ? this.anchorTimeMs + (BB - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(BB) {
        this.anchorTimeMs = BB, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(BB) {
        this.reanchor(), this.speedState = BB
      }
      reanchor() {
        const BB = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(BB), this.anchorWallMs = BB
      }
    }
    const EB = "bloxd-clock";
    class cB {
      constructor(BB) {
        this.samples = void 0, this.samples = [];
        for (const GB of BB) {
          var OB;
          const BB = GB.data;
          GB.type === iB.e.Custom && (null === BB || void 0 === BB ? void 0 : BB.tag) === EB && "number" === typeof(null === (OB = BB.payload) || void 0 === OB ? void 0 : OB.epochMs) && this.samples.push({
            domMs: GB.timestamp,
            offsetMs: BB.payload.epochMs - GB.timestamp
          })
        }
        this.samples.sort(((BB, OB) => BB.domMs - OB.domMs))
      }
      toEpoch(BB) {
        return BB + this.offsetAtDom(BB)
      }
      toDom(BB) {
        return BB - this.offsetAtDom(BB)
      }
      offsetAtDom(BB) {
        var OB, GB;
        let YB = 0,
          DB = this.samples.length - 1;
        for (; YB < DB;) {
          const OB = Math.ceil((YB + DB) / 2);
          this.samples[OB].domMs <= BB ? YB = OB : DB = OB - 1
        }
        return null !== (OB = null === (GB = this.samples[YB]) || void 0 === GB ? void 0 : GB.offsetMs) && void 0 !== OB ? OB : 0
      }
    }
    const hB = new Set([iB.g.MouseMove, iB.g.MouseInteraction, iB.g.Scroll, iB.g.Input, iB.g.TouchMove, iB.g.Drag]),
      aB = "bloxd-active",
      eB = "player_death",
      TB = "error",
      bB = {
        $exception: "error",
        [TB]: "error",
        death: "death",
        [eB]: "death"
      };

    function CB(BB, OB, GB) {
      return function(BB, OB) {
        const GB = [];
        for (const YB of BB) {
          let BB = YB.startMs;
          for (const DB of OB) DB.endMs <= BB || DB.startMs >= YB.endMs || (DB.startMs > BB && GB.push({
            startMs: BB,
            endMs: DB.startMs
          }), BB = Math.max(BB, DB.endMs));
          BB < YB.endMs && GB.push({
            startMs: BB,
            endMs: YB.endMs
          })
        }
        return GB
      }(function(BB) {
        const OB = [];
        for (const GB of BB) {
          const BB = OB.at(-1);
          void 0 !== BB && GB.atMs - BB.endMs <= 5e3 ? BB.endMs = GB.atMs : OB.push({
            startMs: GB.atMs,
            endMs: GB.atMs
          })
        }
        return OB
      }(BB), LB([...OB, ...GB])).filter((BB => BB.endMs - BB.startMs >= 1e3))
    }

    function HB(BB) {
      var OB, GB, YB;
      return BB.type === iB.e.IncrementalSnapshot ? hB.has(null !== (GB = null === (YB = BB.data) || void 0 === YB ? void 0 : YB.source) && void 0 !== GB ? GB : -1) : BB.type === iB.e.Custom && (null === (OB = BB.data) || void 0 === OB ? void 0 : OB.tag) === aB
    }

    function vB(BB, OB) {
      const GB = [];
      for (const oB of BB)
        if (oB.type === iB.e.Custom) {
          var YB;
          const BB = null === (YB = oB.data) || void 0 === YB ? void 0 : YB.tag,
            DB = void 0 === BB ? void 0 : bB[BB];
          void 0 !== DB && GB.push({
            kind: DB,
            atMs: OB.toEpoch(oB.timestamp)
          })
        } else if (oB.type === iB.e.Plugin) {
        var DB, QB;
        const BB = oB.data;
        "rrweb/console@1" !== (null === BB || void 0 === BB ? void 0 : BB.plugin) || "error" !== (null === (DB = BB.payload) || void 0 === DB ? void 0 : DB.level) && "assert" !== (null === (QB = BB.payload) || void 0 === QB ? void 0 : QB.level) || GB.push({
          kind: "error",
          atMs: OB.toEpoch(oB.timestamp)
        })
      }
      return GB
    }
    const sB = 3e6;
    class xB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sB;
        this.fetchUrls = BB, this.onUrls = OB, this.wallNowMs = GB, this.refreshableAfterMs = YB, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = GB()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const BB = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        BB > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), BB) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(BB) {
        this.inFlight = !0;
        const OB = this.wallNowMs();
        this.lastRefreshWallMs = OB;
        let GB = !1;
        BB().then((BB => {
          this.destroyed || (this.urlsFetchedAtWallMs = OB, this.onUrls(BB))
        })).catch((BB => {
          console.error("Failed to refresh the replay's URLs.", BB), GB = !0
        })).finally((() => {
          this.inFlight = !1, GB && this.request()
        }))
      }
    }
    class tB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sB;
        this.source = BB, this.description = OB, this.wallNowMs = GB, this.refreshableAfterMs = YB, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(BB) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const OB = this.wallNowMs();
        for (const GB of BB) this.entries.set(GB.sequence, {
          urls: GB,
          fetchedAtWallMs: OB
        })
      }
      get(BB) {
        const OB = this.getFresh(BB);
        return null !== OB ? OB : null === this.source || this.unavailable.has(BB) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(BB) {
        return null === this.getFresh(BB) && !this.unavailable.has(BB)
      }
      request(BB) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const OB = BB.filter((BB => this.needs(BB)));
        OB.length > 0 && this.fetch(this.source, OB.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(BB) {
        const OB = this.entries.get(BB);
        return void 0 === OB ? null : null === this.source || this.wallNowMs() - OB.fetchedAtWallMs < this.refreshableAfterMs ? OB.urls : null
      }
      fetch(BB, OB) {
        this.inFlight = !0;
        const GB = this.wallNowMs();
        BB.load(OB).then((BB => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const YB = new Set;
          for (const OB of BB) this.entries.set(OB.sequence, {
            urls: OB,
            fetchedAtWallMs: GB
          }), YB.add(OB.sequence);
          for (const GB of OB) YB.has(GB) || (console.warn(`Replay sequence ${GB} has no ${this.description}.`), this.unavailable.add(GB))
        })).catch((BB => {
          console.error(`Failed to fetch the replay's ${this.description}.`, BB), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class BO {
      constructor(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : sB;
        this.load = OB, this.onLoaded = GB, this.onFailed = YB, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = OO([]), this.hidden = [], this.destroyed = !1, this.chunks = [...BB].sort(((BB, OB) => BB.startMs - OB.startMs)).map((BB => ({
          chunk: BB,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new tB(DB, "telemetry URLs", QB, oB), this.urls.reset(YO(BB))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((BB => "loaded" === BB.status)).length
      }
      update(BB, OB, GB) {
        if (null === this.load || this.destroyed) return;
        const YB = OB.toPosition(BB),
          DB = OB.toTime(YB - 1e4),
          QB = OB.toTime(YB + 6e4 * Math.max(1, GB)),
          oB = OB.toTime(YB + 12e4 * Math.max(1, GB)),
          jB = this.chunks.filter((BB => "idle" === BB.status && BB.chunk.endMs >= DB && BB.chunk.startMs <= oB)).sort(((OB, GB) => DO(BB, OB.chunk) - DO(BB, GB.chunk)));
        this.urls.request(jB.flatMap((BB => {
          var OB;
          let {
            chunk: GB
          } = BB;
          return null !== (OB = GB.sequence) && void 0 !== OB ? OB : []
        })));
        for (const yB of jB) {
          if (this.loading >= 3) return;
          const BB = yB.chunk.startMs <= QB ? this.getUrl(yB.chunk) : null;
          null !== BB && this.startLoad(yB, BB, this.load)
        }
      }
      replaceUrls(BB) {
        this.urls.reset(YO(BB));
        for (const OB of this.chunks) {
          const GB = BB.find((BB => BB.startMs === OB.chunk.startMs && BB.endMs === OB.chunk.endMs));
          void 0 !== GB && (OB.chunk = GB, "failed" === OB.status && (OB.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(BB) {
        var OB;
        if (void 0 === BB.sequence) return null !== (OB = BB.url) && void 0 !== OB ? OB : null;
        const GB = this.urls.get(BB.sequence);
        return "string" === typeof GB ? null : GB.url
      }
      startLoad(BB, OB, GB) {
        BB.status = "loading", BB.attempts++, this.loading++, GB(OB).then((OB => {
          this.destroyed || (BB.status = "loaded", BB.telemetry = OB, this.merge(), this.onLoaded())
        })).catch((OB => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${BB.chunk.startMs}-${BB.chunk.endMs}.`, OB), BB.status = BB.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const BB = [];
        let OB = !1;
        for (const YB of this.chunks) {
          const GB = BB.at(-1);
          if (null === YB.telemetry) {
            OB = !1;
            continue
          }
          const DB = GO(YB.telemetry, YB.chunk);
          void 0 !== GB && OB && YB.chunk.startMs <= GB.endMs + 1e3 ? (GB.telemetry.push(DB), GB.endMs = YB.chunk.endMs) : (BB.push({
            telemetry: [DB],
            endMs: YB.chunk.endMs
          }), OB = !0)
        }
        const GB = BB.map((BB => function(BB, OB) {
          const GB = BB.actions.at(-1);
          if (void 0 === GB || 0 === GB.bits) return BB;
          return {
            ...BB,
            actions: [...BB.actions, {
              atMs: OB,
              bits: 0
            }]
          }
        }(OO(BB.telemetry), BB.endMs)));
        this.merged = OO(GB), this.hidden = GB.flatMap(((OB, GB) => function(BB, OB) {
          const GB = [];
          let YB = null;
          for (const {
              atMs: DB,
              event: QB
            }
            of BB.events) "hidden" === QB && null === YB ? YB = DB : "visible" === QB && null !== YB && (GB.push({
            startMs: YB,
            endMs: DB
          }), YB = null);
          return null !== YB && GB.push({
            startMs: YB,
            endMs: OB
          }), LB(GB)
        }(OB, BB[GB].endMs)))
      }
    }

    function OO(BB) {
      return {
        inputRecorded: BB.some((BB => BB.keys.length > 0)),
        frames: BB.flatMap((BB => BB.frames)),
        states: BB.flatMap((BB => BB.states)),
        events: BB.flatMap((BB => BB.events)),
        actions: BB.flatMap((BB => BB.actions)),
        keys: BB.flatMap((BB => BB.keys))
      }
    }

    function GO(BB, OB) {
      const {
        actions: GB
      } = BB;
      return !BB.inputRecorded || GB.length > 0 && GB[0].atMs <= OB.startMs + 1 ? BB : {
        ...BB,
        actions: [{
          atMs: OB.startMs,
          bits: 0
        }, ...GB]
      }
    }

    function YO(BB) {
      return BB.flatMap((BB => {
        let {
          sequence: OB,
          url: GB
        } = BB;
        return void 0 === OB || void 0 === GB ? [] : [{
          sequence: OB,
          url: GB
        }]
      }))
    }

    function DO(BB, OB) {
      return BB < OB.startMs ? OB.startMs - BB : BB > OB.endMs ? 2 * (BB - OB.endMs) : 0
    }
    class QO {
      constructor(BB, OB, GB, YB) {
        this.data = BB, this.domClock = OB, this.timeline = GB, this.options = YB, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(BB, OB) {
          return BB.filter(HB).map((BB => OB.toEpoch(BB.timestamp)))
        }(BB.domEvents, OB), this.telemetry = new BO(BB.telemetryChunks, YB.loadTelemetryChunk, (() => {
          this.rebuild()
        }), YB.onTelemetryFailed, YB.telemetryUrls), this.rebuild()
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
      update(BB, OB) {
        this.telemetry.update(BB, this.timeline, OB)
      }
      replaceTelemetryUrls(BB) {
        this.telemetry.replaceUrls(BB)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(BB) {
        return this.telemetry.hiddenRanges.some(oO(BB))
      }
      isVideoGapAt(BB) {
        return this.videoGapRanges.some(oO(BB))
      }
      rebuild() {
        const BB = this.telemetry.telemetry,
          OB = this.telemetry.hiddenRanges;
        this.videoGapRanges = CB(BB.frames, this.data.videoSegments, OB), this.inactiveRangeList = function(BB, OB, GB, YB) {
          const DB = [...OB];
          if (BB.length > 0) {
            const OB = [GB.startMs, ...BB, GB.endMs];
            for (let BB = 1; BB < OB.length; BB++) {
              const GB = OB[BB - 1],
                QB = OB[BB] - 1e3;
              QB - GB >= YB && DB.push({
                startMs: GB,
                endMs: QB
              })
            }
          }
          return LB(DB).filter((BB => BB.endMs - BB.startMs >= YB))
        }(this.activityTimes, OB, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(BB) {
          const {
            timeline: OB
          } = BB;
          return [...vB(BB.domEvents, BB.domClock), ...BB.telemetry.events.filter((BB => {
            let {
              event: OB
            } = BB;
            return "contextLost" === OB
          })).map((BB => {
            let {
              atMs: OB
            } = BB;
            return {
              kind: "graphicsCrash",
              atMs: OB
            }
          })), ...BB.hidden.map((BB => ({
            kind: "hidden",
            atMs: BB.startMs,
            endMs: BB.endMs
          }))), ...BB.extraMarkers].filter((BB => BB.atMs >= OB.startMs && BB.atMs <= OB.endMs && (OB.contains(BB.atMs) || OB.contains(BB.atMs - 1)))).sort(((BB, OB) => BB.atMs - OB.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: BB,
          extraMarkers: this.data.markers,
          hidden: OB,
          timeline: this.timeline
        })
      }
    }

    function oO(BB) {
      return OB => BB >= OB.startMs && BB < OB.endMs
    }
    class jO {
      constructor() {
        this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
          handler: (BB, OB, GB) => {
            let {
              replayer: YB
            } = GB;
            this.record(BB), OB && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
              this.settleQueued = !1, this.settle(YB)
            })))
          }
        }
      }
      settle(BB) {
        const OB = BB.iframe.contentDocument;
        if (null === OB || void 0 === OB || !OB.documentElement.classList.contains("rrweb-paused")) return;
        const GB = BB.getMetaData().startTime + BB.getCurrentTime();
        ! function(BB, OB, GB, YB) {
          for (const DB of BB) {
            const BB = DB.effect,
              QB = GB.get(OB.getId(BB.target)),
              oB = void 0 === QB ? 1 / 0 : YB - QB,
              jB = Math.min(Math.max(oB, Number(DB.currentTime)), Number(BB.getComputedTiming().endTime));
            Number.isFinite(jB) && (DB.currentTime = jB)
          }
        }(OB.getAnimations(), BB.getMirror(), this.addedAt, GB)
      }
      record(BB) {
        if (BB.type === iB.e.FullSnapshot) this.addedAt.clear();
        else if (BB.type === iB.e.IncrementalSnapshot && BB.data.source === iB.g.Mutation) {
          for (const {
              id: OB
            }
            of BB.data.removes) this.addedAt.delete(OB);
          for (const {
              node: OB
            }
            of BB.data.adds) this.addedAt.set(OB.id, BB.timestamp)
        }
      }
    }
    const yO = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      JO = new Set(["srcset", "imagesrcset"]),
      MO = new Set(["to", "from", "by", "values"]),
      PO = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      zO = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      lO = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      pO = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      qO = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      ZO = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      NO = /^data:image\/(?!svg)/i,
      RO = "about:invalid";

    function WO(BB, OB) {
      let {
        hosts: GB
      } = OB, YB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const DB = BB.trim();
      if (/[\\\u0000-\u001f]/.test(DB)) return !1;
      if (!ZO.test(DB)) return !0;
      let QB;
      try {
        QB = new URL(DB.startsWith("//") ? `https:${DB}` : DB)
      } catch {
        return !1
      }
      return "data:" === QB.protocol ? YB ? "text/css" !== DB.slice(5).split(/[,;]/)[0].trim().toLowerCase() : NO.test(DB) : "blob:" === QB.protocol || ("http:" === QB.protocol || "https:" === QB.protocol) && GB.some((BB => QB.hostname === BB || QB.hostname.endsWith(`.${BB}`)))
    }

    function AO(BB, OB) {
      return BB.replace(zO, (function(BB) {
        for (var GB = arguments.length, YB = new Array(GB > 1 ? GB - 1 : 0), DB = 1; DB < GB; DB++) YB[DB - 1] = arguments[DB];
        if (WO(YB.slice(0, 7).find((BB => "string" === typeof BB)), OB, !0)) return BB;
        const QB = BB.slice(0, 4).toLowerCase();
        return "url(" === QB ? `url("${RO}")` : "@imp" === QB ? `@import "${RO}"` : `"${RO}"`
      }))
    }

    function VO(BB) {
      return qO.test(BB.replace(zO, '""'))
    }

    function SO(BB) {
      let OB = "between";
      for (let GB = 0; GB < BB.length; GB++) {
        const YB = BB[GB];
        if ("/" === YB && "*" === BB[GB + 1]) {
          if (GB = BB.indexOf("*/", GB + 2), -1 === GB) return "open";
          GB++, OB = "between"
        } else if ('"' === YB || "'" === YB) {
          for (GB++; GB < BB.length && BB[GB] !== YB && !/[\n\r\f]/.test(BB[GB]); GB++) "\\" === BB[GB] && GB++;
          if (GB >= BB.length) return "open";
          OB = "token"
        } else "\\" === YB ? (GB++, OB = "token") : ";" === YB || "{" === YB || "}" === YB ? OB = "between" : /\s/.test(YB) || (OB = "token")
      }
      return OB
    }

    function nO(BB, OB) {
      const GB = AO(BB, OB);
      if (VO(GB) || "open" === SO(GB)) return "";
      if (!GB.includes("\\")) return GB;
      const YB = function(BB) {
        return BB.replace(pO, ((BB, OB, GB) => void 0 !== OB ? String.fromCodePoint(Math.min(parseInt(OB, 16), 1114111)) : null !== GB && void 0 !== GB ? GB : ""))
      }(GB);
      return AO(YB, OB) !== YB || VO(YB) ? "" : GB
    }

    function UO(BB, OB) {
      const GB = lO.test(BB) ? nO(BB, OB) : BB;
      return GB.split("/* rr_split */").every((BB => "between" === SO(BB))) ? GB : ""
    }

    function fO(BB, OB, GB) {
      if ("string" === typeof OB) {
        const YB = BB.toLowerCase();
        if (PO.has(YB)) return null;
        if (JO.has(YB)) return function(BB, OB) {
          return BB.split(",").every((BB => {
            const GB = BB.trim().split(/\s+/)[0];
            return void 0 === GB || "" === GB || WO(GB, OB)
          }))
        }(OB, GB) ? OB : null;
        if (MO.has(YB)) {
          return OB.split(";").every((BB => WO(BB, GB))) ? fO("", OB, GB) : null
        }
        return yO.has(YB) ? WO(OB, GB) ? OB : null : "_csstext" === YB ? UO(OB, GB) : lO.test(OB) ? nO(OB, GB) : OB
      }
      if (Array.isArray(OB)) return OB.map((BB => fO("", BB, GB)));
      if (null !== OB && "object" === typeof OB) {
        const YB = "style" === BB.toLowerCase(),
          DB = {};
        for (const [BB, oB] of Object.entries(OB)) DB[BB] = fO(YB ? "" : BB, oB, GB);
        const {
          id: QB
        } = DB;
        if ("number" === typeof QB && GB.styleTextIds.has(QB))
          for (const BB of ["textContent", "value"]) {
            const OB = DB[BB];
            "string" === typeof OB && (DB[BB] = UO(OB, GB))
          }
        return DB
      }
      return OB
    }

    function kO(BB, OB) {
      const GB = (BB, YB) => {
        if (null === BB || "object" !== typeof BB) return;
        const DB = BB;
        if (OB(DB, YB), Array.isArray(DB.childNodes))
          for (const OB of DB.childNodes) GB(OB, DB.id)
      };
      for (const YB of BB) {
        const BB = YB.data;
        if (YB.type === iB.e.FullSnapshot) GB(null === BB || void 0 === BB ? void 0 : BB.node, null);
        else if (YB.type === iB.e.IncrementalSnapshot && Array.isArray(null === BB || void 0 === BB ? void 0 : BB.adds))
          for (const OB of BB.adds) GB(null === OB || void 0 === OB ? void 0 : OB.node, null === OB || void 0 === OB ? void 0 : OB.parentId)
      }
    }

    function dO(BB) {
      const OB = new Set,
        GB = [];
      kO(BB, ((BB, YB) => {
        let {
          id: DB,
          tagName: QB
        } = BB;
        "number" === typeof DB && ("string" === typeof QB && "style" === QB.toLowerCase() && OB.add(DB), GB.push({
          id: DB,
          parentId: YB
        }))
      }));
      const YB = new Set;
      for (const {
          id: DB,
          parentId: QB
        }
        of GB) "number" === typeof QB && OB.has(QB) && YB.add(DB);
      return YB
    }
    const KO = {
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
      uO = {
        pointer: ["none", "coarse", "fine"],
        "any-pointer": ["none", "coarse", "fine"],
        hover: ["none", "hover"],
        "any-hover": ["none", "hover"]
      },
      mO = "(min-width: 0px)",
      IO = "(not (min-width: 0px))",
      FO = /@media\b[^{;]*/gi,
      iO = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
      LO = new Set(["_cssText", "rule", "replace", "replaceSync"]);

    function gO(BB, OB) {
      return BB.replace(FO, (BB => BB.replace(iO, ((BB, GB, YB) => {
        const DB = GB.toLowerCase(),
          QB = KO[OB][DB];
        if (void 0 === YB) return "none" === QB ? IO : mO;
        const oB = YB.toLowerCase();
        return uO[DB].includes(oB) ? oB === QB ? mO : IO : BB
      }))))
    }

    function rO(BB) {
      const OB = BB.attributes,
        GB = null === OB || void 0 === OB ? void 0 : OB.rel,
        YB = null === OB || void 0 === OB ? void 0 : OB.href;
      return "link" === BB.tagName && "string" === typeof GB && GB.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof YB ? YB : null
    }

    function XO(BB) {
      const OB = new Map;
      kO(BB, (BB => {
        const GB = rO(BB);
        null !== GB && OB.set(BB.id, GB)
      }));
      const GB = new Map;
      for (const DB of BB) {
        const BB = DB.data;
        if (DB.type === iB.e.IncrementalSnapshot && (null === BB || void 0 === BB ? void 0 : BB.source) === iB.g.Mutation)
          for (const DB of null !== (YB = BB.attributes) && void 0 !== YB ? YB : []) {
            var YB;
            const BB = DB.attributes._cssText,
              QB = OB.get(DB.id);
            "string" !== typeof BB || void 0 === QB || GB.has(QB) || GB.set(QB, BB)
          }
      }
      return GB
    }

    function wO(BB, OB, GB) {
      var YB;
      if ("string" === typeof BB) return null !== GB.pointer && LO.has(OB) ? gO(BB, GB.pointer) : BB;
      if (Array.isArray(BB)) {
        let OB = !1;
        const YB = BB.map((BB => {
          const YB = wO(BB, "", GB);
          return OB ||= YB !== BB, YB
        }));
        return OB ? YB : BB
      }
      if (null === BB || "object" !== typeof BB) return BB;
      const DB = function(BB, OB) {
        const GB = BB.attributes,
          YB = rO(BB),
          DB = null !== YB && void 0 === (null === GB || void 0 === GB ? void 0 : GB._cssText) ? OB.sheets.get(YB) : void 0;
        return void 0 === DB ? BB : {
          ...BB,
          attributes: {
            ...GB,
            _cssText: DB
          }
        }
      }(BB, GB);
      let QB = null;
      for (const [jB, yB] of Object.entries(DB)) {
        const BB = wO(yB, jB, GB);
        BB !== yB && (QB ??= {
          ...DB
        }, QB[jB] = BB)
      }
      const {
        id: oB
      } = DB;
      if (null !== GB.pointer && "number" === typeof oB && GB.styleTextIds.has(oB))
        for (const jB of ["textContent", "value"]) {
          const BB = DB[jB],
            OB = "string" === typeof BB ? gO(BB, GB.pointer) : BB;
          OB !== BB && (QB ??= {
            ...DB
          }, QB[jB] = OB)
        }
      return null !== (YB = QB) && void 0 !== YB ? YB : DB
    }
    const EO = "brv-styles",
      cO = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      hO = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${cO.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class aO {
      static create(BB, OB, GB, YB, DB, QB, oB, jB) {
        if (!OB.some((BB => BB.type === iB.e.FullSnapshot))) return null;
        const yB = function(BB, OB) {
          const GB = {
            sheets: XO(BB),
            styleTextIds: dO(BB),
            pointer: OB
          };
          return BB.map((BB => {
            if (BB.type !== iB.e.FullSnapshot && BB.type !== iB.e.IncrementalSnapshot) return BB;
            const OB = wO(BB.data, "data", GB);
            return OB === BB.data ? BB : {
              ...BB,
              data: OB
            }
          }))
        }(function(BB, OB) {
          const GB = {
            hosts: OB,
            styleTextIds: dO(BB)
          };
          return BB.map((BB => BB.type === iB.e.Meta ? BB : {
            ...BB,
            data: fO("data", BB.data, GB)
          }))
        }(OB, QB), GB);
        return new aO(BB, yB, YB, DB, oB, jB)
      }
      constructor(BB, OB, GB, YB, DB, QB) {
        var oB, jB, yB, JB;
        this.domClock = GB, this.canvasSelectors = YB, this.videoLayer = DB, this.replayer = void 0, this.pausedAnimations = new jO, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (oB = null === (jB = OB[0]) || void 0 === jB ? void 0 : jB.timestamp) && void 0 !== oB ? oB : 0, this.lastDomMs = null !== (yB = null === (JB = OB.at(-1)) || void 0 === JB ? void 0 : JB.timestamp) && void 0 !== yB ? yB : 0, this.replayer = new iB.j(OB, {
          root: BB,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          plugins: [this.pausedAnimations.plugin],
          insertStyleRules: cO
        }), this.replayer.on("resize", (BB => {
          const {
            width: OB,
            height: GB
          } = BB;
          QB({
            width: OB,
            height: GB
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect(), this.pausedAnimations.settle(this.replayer)
        }))
      }
      sync(BB, OB) {
        const GB = this.domOffsetAt(BB);
        OB ? this.replayer.play(GB) : this.replayer.pause(GB), this.lastDomCheckMs = performance.now()
      }
      update(BB, OB, GB) {
        GB - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = GB, this.placeVideoOverCanvas()), OB && GB - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = GB, this.checkDrift(BB))
      }
      setSpeed(BB) {
        this.replayer.setConfig({
          speed: BB
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(BB) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(BB)) - this.firstDomMs)
      }
      checkDrift(BB) {
        const OB = this.domOffsetAt(BB);
        OB >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - OB) > 400 && this.replayer.play(OB)
      }
      placeVideoOverCanvas() {
        const BB = this.replayer.iframe.contentDocument,
          OB = null === BB ? null : function(BB, OB) {
            for (const GB of OB) {
              const OB = BB.querySelector(GB);
              if (null !== OB) return OB
            }
            return null
          }(BB, this.canvasSelectors),
          GB = this.videoLayer.element;
        null !== OB ? (GB.previousSibling !== OB && OB.after(GB), GB.style.display = "", GB.style.left = `${OB.offsetLeft}px`, GB.style.top = `${OB.offsetTop}px`, GB.style.width = `${OB.offsetWidth}px`, GB.style.height = `${OB.offsetHeight}px`) : GB.style.display = "none"
      }
    }
    const eO = {
      width: 1280,
      height: 720
    };
    class TO {
      constructor(BB, OB) {
        this.root = BB, this.onViewportChanged = OB, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", BB.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(BB)
      }
      setViewport(BB) {
        var OB;
        null === BB || BB.width <= 0 || BB.height <= 0 || BB.width === (null === (OB = this.viewport) || void 0 === OB ? void 0 : OB.width) && BB.height === this.viewport.height || (this.viewport = BB, this.element.style.width = `${BB.width}px`, this.element.style.height = `${BB.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var BB;
        const OB = null !== (BB = this.viewport) && void 0 !== BB ? BB : eO,
          GB = this.root.getBoundingClientRect(),
          YB = Math.min(GB.width / OB.width, GB.height / OB.height),
          DB = (GB.width - OB.width * YB) / 2,
          QB = (GB.height - OB.height * YB) / 2;
        this.element.style.transform = `translate(${DB}px, ${QB}px) scale(${YB})`
      }
    }
    class bO {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sB;
        this.urls = void 0, this.urls = new tB(BB, "video URLs", OB, GB)
      }
      reset(BB) {
        this.urls.reset(BB.flatMap((BB => {
          var OB;
          return null !== (OB = function(BB) {
            return "url" in BB ? null === BB.url ? null : {
              sequence: BB.sequence,
              url: BB.url
            } : void 0 === BB.partUrls ? null : {
              sequence: BB.sequence,
              partUrls: BB.partUrls
            }
          }(BB)) && void 0 !== OB ? OB : []
        })))
      }
      get(BB) {
        return this.urls.get(BB)
      }
      update(BB, OB, GB) {
        this.urls.request(function(BB, OB, GB, YB) {
          return BB.filter((BB => BB.endMs > OB && BB.startMs < OB + GB && YB(BB.sequence))).map((BB => BB.sequence))
        }(BB, OB, 12e4 * Math.max(1, GB), (BB => this.urls.needs(BB))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function CO(BB, OB, GB) {
      const YB = [];
      let DB = BB.length,
        QB = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, BB.length)
      }, (() => (async () => {
        for (; QB < DB;) {
          const jB = QB++;
          try {
            YB[jB] = await OB(BB[jB], GB)
          } catch (oB) {
            if (GB.aborted) throw oB;
            console.warn(`Replay video part ${jB} failed to load; playing the parts before it.`, oB), DB = Math.min(DB, jB)
          }
        }
      })()))), YB.slice(0, DB)
    }

    function HO(BB) {
      const OB = [];
      let GB = 0;
      for (const MB of BB) OB.push(GB), GB += MB.byteLength;
      let YB = 0;
      const DB = GB => {
          for (; OB[YB] > GB;) YB--;
          for (; YB + 1 < OB.length && OB[YB + 1] <= GB;) YB++;
          return BB[YB][GB - OB[YB]]
        },
        QB = BB => DB(BB) * 2 ** 24 + 65536 * DB(BB + 1) + 256 * DB(BB + 2) + DB(BB + 3);
      let oB = 0,
        jB = !1,
        yB = !1,
        JB = 0;
      for (; oB + 8 <= GB;) {
        const BB = String.fromCharCode(DB(oB + 4), DB(oB + 5), DB(oB + 6), DB(oB + 7));
        let OB = QB(oB);
        if (1 === OB) {
          if (oB + 16 > GB) break;
          OB = QB(oB + 8) * 2 ** 32 + QB(oB + 12)
        } else 0 === OB && (OB = GB - oB);
        if (OB < 8 || oB + OB > GB) break;
        oB += OB, "moov" === BB ? jB = !0 : "moof" === BB ? yB = !0 : "mdat" === BB && yB ? (yB = !1, JB = oB) : !yB && JB > 0 && (JB = oB)
      }
      return jB && JB > 0 ? JB : null
    }
    async function vO(BB, OB) {
      const GB = await fetch(BB, {
        signal: OB
      });
      if (!GB.ok) throw new Error(`HTTP ${GB.status}`);
      return GB.arrayBuffer()
    }
    class sO {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vO,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = BB, this.CP = OB, this.blobs = new Map
      }
      get(BB, OB) {
        const GB = xO(BB, OB),
          YB = this.blobs.get(GB);
        return void 0 === YB ? null : (this.remember(GB, YB), YB)
      }
      async load(BB, OB, GB) {
        const YB = await CO(OB, this.fetchPart, GB),
          DB = function(BB) {
            const OB = BB.map((BB => new Uint8Array(BB))),
              GB = HO(OB);
            return null === GB ? null : new Blob(function(BB, OB) {
              const GB = [];
              let YB = OB;
              for (const DB of BB) {
                if (YB <= 0) break;
                GB.push(DB.byteLength <= YB ? DB : DB.subarray(0, YB)), YB -= DB.byteLength
              }
              return GB
            }(OB, GB), {
              type: "video/mp4"
            })
          }(YB);
        return null !== DB && YB.length === OB.length && this.remember(xO(BB, OB.length), DB), DB
      }
      remember(BB, OB) {
        this.blobs.delete(BB), this.blobs.set(BB, OB), this.blobs.size > this.CP && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function xO(BB, OB) {
      return `${BB}/${OB}`
    }

    function tO(BB) {
      const OB = function(BB) {
        return BB.map(((OB, GB) => {
          const YB = BB[GB + 1];
          return void 0 === YB ? OB.endMs : Math.min(OB.endMs, YB.startMs)
        }))
      }(BB);
      return BB.map(((BB, GB) => ({
        ...BB,
        endMs: OB[GB]
      }))).filter((BB => BB.endMs > BB.startMs))
    }

    function BG(BB, OB) {
      let GB = 0,
        YB = BB.length - 1;
      for (; GB <= YB;) {
        const DB = GB + YB >> 1,
          QB = BB[DB];
        if (OB < QB.startMs) YB = DB - 1;
        else {
          if (!(OB >= QB.endMs)) return QB;
          GB = DB + 1
        }
      }
      return null
    }

    function OG(BB, OB) {
      return (OB - BB.startMs) / 1e3
    }

    function GG(BB) {
      return Math.max(.4, .1 * BB)
    }

    function YG(BB) {
      return Math.max(.0625, Math.min(16, BB))
    }
    class DG {
      constructor(BB, OB, GB, YB, DB, QB, oB) {
        this.still = OB, this.clock = GB, this.frameDurationS = YB, this.wallNowMs = DB, this.onLoadFailed = oB, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new sO, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = tO(BB), this.segmentUrls = new bO(QB), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(BB) {
        var OB, GB;
        const YB = null !== (OB = null !== (GB = BG(this.segments, BB)) && void 0 !== GB ? GB : this.segments.find((OB => OB.startMs > BB))) && void 0 !== OB ? OB : this.segments.at(-1);
        return void 0 === YB ? null : {
          width: YB.width,
          height: YB.height
        }
      }
      failedAt(BB) {
        const OB = BG(this.segments, BB);
        return null !== OB && this.failed.has(OB.sequence)
      }
      replaceSegments(BB, OB) {
        for (const GB of this.slots.values()) this.release(GB);
        this.slots.clear(), this.failed.clear(), this.segments = tO(BB), this.segmentUrls.reset(this.segments), this.still = OB
      }
      update(BB) {
        var OB, GB;
        this.segmentUrls.update(this.segments, BB, this.clock.speed);
        const YB = BG(this.segments, BB),
          DB = function(BB, OB) {
            const GB = BB.find((BB => BB.startMs > OB));
            return void 0 === GB ? null : GB.startMs - OB <= ("parts" in GB ? 15e3 : 8e3) ? GB : null
          }(this.segments, BB);
        this.evictExcept([YB, DB, null !== (OB = null === (GB = this.shown) || void 0 === GB ? void 0 : GB.segment) && void 0 !== OB ? OB : null]), null !== DB && this.getSlot(DB), this.showStill(null === YB ? function(BB, OB, GB) {
          if (null === OB) return null;
          const YB = BB.at(-1);
          return void 0 === YB ? GB >= OB.atMs - 1e4 ? OB : null : GB >= YB.endMs && Math.abs(OB.atMs - YB.endMs) <= 1e4 ? OB : null
        }(this.segments, this.still, BB) : null);
        const QB = null === YB ? null : this.getSlot(YB);
        if (null !== QB) {
          this.sync(QB, OG(QB.segment, BB)), QB.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !QB.video.seeking && this.show(QB);
          for (const BB of this.slots.values()) BB === QB || BB.video.paused || BB.video.pause()
        } else {
          null === YB && this.show(null);
          for (const BB of this.slots.values()) BB.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: BB,
          sumAbsDriftMs: OB,
          maxAbsDriftMs: GB,
          withinOneFrame: YB,
          seeks: DB
        } = this.stats;
        return {
          frames: BB,
          meanAbsDriftMs: 0 === BB ? 0 : OB / BB,
          maxAbsDriftMs: GB,
          withinOneFrame: 0 === BB ? 1 : YB / BB,
          seeks: DB
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
        for (const BB of this.slots.values()) this.release(BB);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(BB, OB) {
        const {
          video: GB
        } = BB;
        if (GB.seeking) return;
        const {
          playing: YB,
          speed: DB
        } = this.clock, QB = YB && DB < 16, oB = function(BB) {
          let {
            targetS: OB,
            currentS: GB,
            playing: YB,
            speed: DB,
            frameDurationS: QB
          } = BB;
          const oB = GB - OB;
          if (!YB) return Math.abs(oB) > QB / 2 ? {
            kind: "seek",
            mediaTimeS: OB
          } : {
            kind: "none"
          };
          if (Math.abs(oB) > GG(DB)) return {
            kind: "seek",
            mediaTimeS: OB
          };
          if (Math.abs(oB) < QB / 4) return {
            kind: "rate",
            playbackRate: YG(DB)
          };
          const jB = DB - oB / .5;
          return {
            kind: "rate",
            playbackRate: YG(Math.max(.5 * DB, Math.min(1.5 * DB, jB)))
          }
        }({
          targetS: OB,
          currentS: GB.currentTime,
          playing: QB,
          speed: DB,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === oB.kind) {
          const OB = this.seekLatencyS * DB,
            jB = YB ? QB ? Math.min(OB, GG(DB) / 2) : OB : 0;
          BB.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, QB && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), GB.currentTime = Math.max(0, oB.mediaTimeS + jB)
        } else "rate" === oB.kind && Math.abs(GB.playbackRate - oB.playbackRate) > .001 && (GB.playbackRate = oB.playbackRate);
        QB && GB.paused && GB.currentTime < GB.duration ? (GB.playbackRate = YG(DB), GB.play().catch((BB => {
          console.warn("Replay video refused to play.", BB)
        }))) : QB || GB.paused || GB.pause()
      }
      getSlot(BB) {
        const OB = this.slots.get(BB.sequence);
        if (void 0 !== OB) return OB;
        const GB = "parts" in BB ? this.blobs.get(BB.sequence, BB.parts) : null,
          YB = null === GB ? this.segmentUrls.get(BB.sequence) : null;
        if ("pending" === YB) return null;
        if ("failed" === YB) return this.failed.has(BB.sequence) || (console.error(`Replay video segment ${BB.sequence} has no URLs to load.`), this.markFailed(BB)), null;
        const DB = document.createElement("video");
        DB.className = "brv-video", DB.muted = !0, DB.playsInline = !0, DB.preload = "auto", DB.disablePictureInPicture = !0;
        const QB = {
          segment: BB,
          video: DB,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== GB ? this.playBlob(QB, GB) : null !== YB && ("url" in YB ? DB.src = YB.url : this.loadParts(QB, YB.partUrls)), DB.addEventListener("seeked", (() => {
          if (null !== QB.seekStartedWallMs) {
            const BB = (this.wallNowMs() - QB.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, BB), QB.seekStartedWallMs = null
          }
        })), DB.addEventListener("loadeddata", (() => {
          this.slots.get(BB.sequence) === QB && this.failed.delete(BB.sequence)
        })), DB.addEventListener("error", (() => {
          this.slots.get(BB.sequence) === QB && (console.error(`Replay video segment ${BB.sequence} failed to load.`, DB.error), this.markFailed(BB))
        })), this.watchFrames(QB), this.element.appendChild(DB), this.slots.set(BB.sequence, QB), QB
      }
      loadParts(BB, OB) {
        this.blobs.load(BB.segment.sequence, OB, BB.abort.signal).then((OB => {
          if (this.slots.get(BB.segment.sequence) === BB) return null === OB ? (console.error(`Replay video segment ${BB.segment.sequence} has no playable parts.`), void this.markFailed(BB.segment)) : void this.playBlob(BB, OB)
        }), (OB => {
          this.slots.get(BB.segment.sequence) === BB && (console.error(`Replay video segment ${BB.segment.sequence} failed to load.`, OB), this.markFailed(BB.segment))
        }))
      }
      playBlob(BB, OB) {
        BB.objectUrl = URL.createObjectURL(OB), BB.video.src = BB.objectUrl
      }
      markFailed(BB) {
        this.failed.add(BB.sequence), this.onLoadFailed()
      }
      showStill(BB) {
        const OB = null !== BB && BB.url !== this.failedStillUrl ? BB : null;
        null !== OB && this.stillImage.getAttribute("src") !== OB.url && (this.stillImage.src = OB.url);
        const GB = null !== OB && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        GB !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", GB), this.stillShown = GB)
      }
      show(BB) {
        var OB;
        this.shown !== BB && (null === (OB = this.shown) || void 0 === OB || OB.video.classList.remove("brv-video-shown"), null === BB || void 0 === BB || BB.video.classList.add("brv-video-shown"), this.shown = BB)
      }
      evictExcept(BB) {
        for (const [OB, GB] of this.slots) BB.includes(GB.segment) || (this.release(GB), this.slots.delete(OB))
      }
      release(BB) {
        this.shown === BB && (this.shown = null), BB.abort.abort(), BB.video.pause(), BB.video.removeAttribute("src"), BB.video.load(), BB.video.remove(), null !== BB.objectUrl && URL.revokeObjectURL(BB.objectUrl)
      }
      watchFrames(BB) {
        const {
          video: OB
        } = BB;
        if ("function" !== typeof OB.requestVideoFrameCallback) return;
        const GB = (YB, DB) => {
          if (!this.slots.has(BB.segment.sequence)) return;
          const QB = OB.ownerDocument.defaultView,
            oB = null === QB ? 0 : QB.performance.timeOrigin - performance.timeOrigin,
            jB = OG(BB.segment, this.clock.timeAtWall(DB.expectedDisplayTime + oB)),
            yB = this.lastPresented,
            JB = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== yB && yB.slot === BB && JB && this.clock.playing && DB.mediaTime > yB.mediaTimeS) {
            const BB = Math.abs(function(BB, OB, GB) {
              return GB < BB ? 1e3 * (GB - BB) : 1e3 * Math.max(0, GB - OB)
            }(yB.mediaTimeS, DB.mediaTime, yB.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += BB, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, BB), BB <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: BB,
            mediaTimeS: DB.mediaTime,
            clockMediaTimeS: jB
          }, OB.requestVideoFrameCallback(GB)
        };
        OB.requestVideoFrameCallback(GB)
      }
    }
    const QG = 1 / 30,
      oG = ["#noa-canvas", "#noa-container"];
    class jG {
      constructor(BB, OB) {
        var GB, YB, DB, QB, oB, jB, yB, JB;
        let MB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.kP = () => {
          this.frame = requestAnimationFrame(this.kP);
          const BB = performance.now();
          this.applySkips();
          const OB = this.clock.timeMs();
          this.annotations.update(OB, this.clock.speed), this.videoLayer.update(OB), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(OB)) : this.domLayer.update(OB, this.clock.playing, BB);
          const GB = this.getState();
          (null === this.lastState || function(BB, OB) {
            return Object.keys(BB).some((GB => "positionMs" === GB ? Math.floor(BB.positionMs / 1e3) !== Math.floor(OB.positionMs / 1e3) : BB[GB] !== OB[GB]))
          }(GB, this.lastState)) && this.emitState(GB)
        };
        const PB = () => performance.now();
        this.lowFps = null !== (GB = MB.lowFps) && void 0 !== GB ? GB : 25;
        const zB = new cB(OB.domEvents);
        this.timeline = new gB(OB.windows.length > 0 ? OB.windows : [XB(OB, zB)]), this.chapters = [...OB.chapters].sort(((BB, OB) => BB.startMs - OB.startMs)), this.annotations = new QO(OB, zB, this.timeline, {
          inactivityThresholdMs: null !== (YB = MB.inactivityThresholdMs) && void 0 !== YB ? YB : 1e4,
          loadTelemetryChunk: null !== (DB = MB.loadTelemetryChunk) && void 0 !== DB ? DB : null,
          telemetryUrls: null !== (QB = MB.telemetryUrls) && void 0 !== QB ? QB : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new xB(null !== (oB = MB.refreshUrls) && void 0 !== oB ? oB : null, (BB => {
          this.videoLayer.replaceSegments(rB(BB.videoSegments), BB.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(BB.telemetryChunks)
        })), this.clock = new wB(this.timeline.startMs, PB), this.stage = new TO(BB, (() => {
          var BB;
          null === (BB = this.domLayer) || void 0 === BB || BB.invalidateCanvasRect()
        })), this.videoLayer = new DG(rB(OB.videoSegments), OB.still, this.clock, QG, PB, null !== (jB = MB.segmentUrls) && void 0 !== jB ? jB : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = aO.create(this.stage.element, OB.domEvents, OB.recordedPointer, zB, null !== (yB = MB.canvasSelectors) && void 0 !== yB ? yB : oG, null !== (JB = MB.resourceHosts) && void 0 !== JB ? JB : [], this.videoLayer, (BB => {
          this.stage.setViewport(BB)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.kP()
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
      subscribe(BB) {
        return this.listeners.add(BB), BB(this.getState()), () => {
          this.listeners.delete(BB)
        }
      }
      getState() {
        const BB = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(BB),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(BB),
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
      seekToPosition(BB) {
        this.seekToTime(this.timeline.toTime(BB))
      }
      seekBy(BB) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + BB)
      }
      stepFrame(BB) {
        this.clock.pause(), this.seekBy(BB * QG * 1e3)
      }
      setSpeed(BB) {
        var OB;
        this.clock.setSpeed(BB), null === (OB = this.domLayer) || void 0 === OB || OB.setSpeed(BB), this.emit()
      }
      setSkipInactive(BB) {
        this.skipInactive = BB, this.emit()
      }
      goToChapter(BB) {
        const OB = this.clock.timeMs(),
          GB = 1 === BB ? this.chapters.find((BB => BB.startMs > OB + 500)) : this.chapters.findLast((BB => BB.startMs < OB - 2e3));
        void 0 !== GB && this.seekToTime(GB.startMs)
      }
      destroy() {
        var BB;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (BB = this.domLayer) || void 0 === BB || BB.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(BB) {
        return this.annotations.isHiddenAt(BB) ? "tabHidden" : this.videoLayer.failedAt(BB) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(BB) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var BB;
        if (!this.clock.playing) return;
        const OB = this.clock.timeMs(),
          GB = this.timeline.nextPlayableTime(OB);
        if (null === GB) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const YB = this.skipInactive ? this.annotations.inactiveRanges.find((BB => GB >= BB.startMs && GB < BB.endMs - 500)) : void 0,
          DB = null !== (BB = null === YB || void 0 === YB ? void 0 : YB.endMs) && void 0 !== BB ? BB : GB;
        DB !== OB && this.seekToTime(DB)
      }
      seekToTime(BB) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, BB))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var BB;
        null === (BB = this.domLayer) || void 0 === BB || BB.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(BB) {
        this.lastState = BB;
        for (const OB of this.listeners) OB(BB)
      }
    }
    const yG = 2500,
      JG = 5;

    function MG(BB) {
      let {
        label: OB,
        sJ: GB,
        wide: YB = !1
      } = BB;
      return (0, ZB.jsx)("span", {
        className: `brv-key${GB?" brv-key-held":""}${YB?" brv-key-wide":""}`,
        children: OB
      })
    }
    const PG = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function zG(BB) {
      const [OB, GB] = (0, YB.useState)({
        bits: 0,
        presses: []
      });
      return (0, YB.useEffect)((() => {
        let OB = 0,
          YB = "";
        const DB = () => {
          OB = requestAnimationFrame(DB);
          const QB = BB.timeline.toTime(BB.getPositionMs()),
            {
              actions: oB,
              keys: jB
            } = BB.input,
            zB = function(BB, OB) {
              const GB = JB(BB, OB);
              return GB < 0 ? 0 : BB[GB].bits
            }(oB, QB),
            lB = function(BB, OB, GB, YB) {
              const DB = Math.floor(OB / GB) * GB,
                QB = new Map;
              for (let oB = JB(BB, DB + GB); oB >= 0 && BB[oB].atMs >= DB; oB--) {
                const OB = BB[oB];
                if (!OB.down || !OB.inPlay || OB.atMs === DB + GB) continue;
                const YB = {
                    code: OB.code,
                    unbound: yB(OB)
                  },
                  jB = MB(YB),
                  JB = QB.get(jB);
                void 0 === JB ? QB.set(jB, {
                  key: YB,
                  presses: 1
                }) : JB.presses++
              }
              return [...QB].sort(((BB, OB) => PB([BB[0], BB[1].presses], [OB[0], OB[1].presses]))).slice(0, YB).map((BB => {
                let [, {
                  key: OB
                }] = BB;
                return OB
              }))
            }(jB, QB, yG, JG),
            pB = `${zB};${lB.map((BB=>MB(BB))).join(",")}`;
          pB !== YB && (YB = pB, GB({
            bits: zB,
            presses: lB
          }))
        };
        return DB(), () => {
          cancelAnimationFrame(OB)
        }
      }), [BB]), OB
    }

    function lG(BB) {
      let {
        controller: OB,
        labels: GB
      } = BB;
      const {
        bits: YB,
        presses: DB
      } = zG(OB), QB = BB => function(BB, OB) {
        return 0 !== (BB & 1 << oB.indexOf(OB))
      }(YB, BB);
      return (0, ZB.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, ZB.jsx)("div", {
          className: "brv-input-slot",
          children: DB.map((BB => {
            const OB = lB(BB.code);
            return (0, ZB.jsx)("span", {
              className: BB.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: BB.unbound ? GB.unboundKey(OB) : OB
            }, MB(BB))
          }))
        }), (0, ZB.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, ZB.jsxs)("div", {
            className: "brv-keys",
            children: [(0, ZB.jsx)("div", {
              className: "brv-keys-row",
              children: (0, ZB.jsx)(MG, {
                label: "W",
                sJ: QB("forward")
              })
            }), (0, ZB.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, ZB.jsx)(MG, {
                label: "A",
                sJ: QB("left")
              }), (0, ZB.jsx)(MG, {
                label: "S",
                sJ: QB("backward")
              }), (0, ZB.jsx)(MG, {
                label: "D",
                sJ: QB("right")
              })]
            }), (0, ZB.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, ZB.jsx)(MG, {
                label: "Shift",
                sJ: QB("sprint")
              }), (0, ZB.jsx)(MG, {
                label: "Ctrl",
                sJ: QB("crouch")
              }), (0, ZB.jsx)(MG, {
                label: "Space",
                sJ: QB("jump"),
                wide: !0
              })]
            })]
          }), (0, ZB.jsx)("div", {
            className: "brv-mouse",
            children: PG.map((BB => {
              let {
                action: OB,
                className: GB
              } = BB;
              return (0, ZB.jsx)("span", {
                className: `${GB}${QB(OB)?" brv-key-held":""}`
              }, OB)
            }))
          })]
        })]
      })
    }
    const pG = {
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
      fps: BB => `${BB} FPS`,
      keys: "Keys",
      unboundKey: BB => `${BB} does nothing here`,
      unboundKeys: BB => `${BB} did nothing`
    };

    function qG(BB) {
      let {
        path: OB
      } = BB;
      return (0, ZB.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, ZB.jsx)("path", {
          d: OB
        })
      })
    }
    const ZG = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function NG(BB) {
      let {
        label: OB,
        onClick: GB,
        children: YB
      } = BB;
      return (0, ZB.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: OB,
        "aria-label": OB,
        onClick: GB,
        children: YB
      })
    }

    function RG(BB) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === BB ? document.exitFullscreen() : BB.requestFullscreen()).catch((BB => {
        console.warn("Couldn't toggle fullscreen.", BB)
      }))
    }

    function WG(BB) {
      let {
        data: OB,
        className: GB,
        autoPlay: DB = !1,
        options: QB,
        labels: oB = pG,
        onController: jB
      } = BB;
      const yB = (0, YB.useRef)(null),
        JB = (0, YB.useRef)(null),
        MB = (0, YB.useRef)(QB);
      MB.current = QB;
      const PB = (0, YB.useRef)(DB);
      PB.current = DB;
      const zB = (0, YB.useRef)(jB);
      zB.current = jB;
      const [lB, pB] = (0, YB.useState)(null), [qB, NB] = (0, YB.useState)(null), [WB, AB] = (0, YB.useState)(!0), VB = () => {
        AB((BB => !BB))
      };
      (0, YB.useEffect)((() => {
        var BB;
        ! function(BB) {
          if (null !== BB.getElementById(EO)) return;
          const OB = BB.createElement("style");
          OB.id = EO, OB.textContent = hO, BB.head.appendChild(OB)
        }(document);
        const GB = new jG(yB.current, OB, MB.current),
          YB = GB.subscribe(NB);
        return pB(GB), null === (BB = zB.current) || void 0 === BB || BB.call(zB, GB), PB.current && GB.play(), JB.current.focus({
          preventScroll: !0
        }), () => {
          var BB;
          YB(), GB.destroy(), null === (BB = zB.current) || void 0 === BB || BB.call(zB, null)
        }
      }), [OB]);
      const nB = null !== lB && lB.input.inputRecorded,
        UB = null === lB || null === qB ? void 0 : lB.chapters.findLast((BB => lB.timeline.toPosition(BB.startMs) <= qB.positionMs));
      return (0, ZB.jsxs)("div", {
        ref: JB,
        className: void 0 === GB ? "brv-player" : `brv-player ${GB}`,
        tabIndex: 0,
        onKeyDown: BB => {
          if (BB.target instanceof HTMLSelectElement) return;
          if (" " === BB.key && BB.target !== BB.currentTarget && BB.target instanceof HTMLButtonElement) return;
          const OB = function(BB) {
            let {
              key: OB,
              shiftKey: GB,
              ctrlKey: YB,
              metaKey: DB,
              altKey: QB
            } = BB;
            if (YB || DB || QB) return null;
            const oB = Number(OB) - 1;
            if (/^[1-9]$/.test(OB) && oB < FB.length) return {
              type: "setSpeed",
              speed: FB[oB]
            };
            switch (OB.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: GB ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: GB ? 1e3 : 5e3
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
                  type: "chapter", direction: GB ? -1 : 1
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
          }(BB);
          null !== OB && null !== lB && null !== qB && (BB.preventDefault(), function(BB, OB, GB, YB) {
            switch (OB.type) {
              case "togglePlay":
                BB.togglePlay();
                break;
              case "seekBy":
                BB.seekBy(OB.deltaMs);
                break;
              case "stepFrame":
                BB.stepFrame(OB.direction);
                break;
              case "setSpeed":
                BB.setSpeed(OB.speed);
                break;
              case "chapter":
                BB.goToChapter(OB.direction);
                break;
              case "toggleSkipInactive":
                BB.setSkipInactive(!GB.skipInactive);
                break;
              case "toggleFullscreen":
                RG(YB.root);
                break;
              case "toggleKeys":
                YB.toggleKeys()
            }
          }(lB, OB, qB, {
            root: BB.currentTarget,
            toggleKeys: VB
          }))
        },
        children: [(0, ZB.jsxs)("div", {
          ref: yB,
          className: "brv-viewport",
          onClick: () => {
            null === lB || void 0 === lB || lB.togglePlay()
          },
          children: [null !== qB && null !== qB.notice && (0, ZB.jsx)("div", {
            className: "brv-overlay",
            children: oB[qB.notice]
          }), null !== lB && WB && nB && (0, ZB.jsx)(lG, {
            controller: lB,
            labels: oB
          })]
        }), null !== lB && null !== qB && (0, ZB.jsxs)(ZB.Fragment, {
          children: [(0, ZB.jsx)(SB, {
            controller: lB,
            frames: lB.frames,
            input: lB.input,
            markers: lB.markers,
            inactiveRanges: lB.inactiveRanges,
            videoGaps: lB.videoGaps,
            labels: oB
          }), lB.chapters.length > 1 && (0, ZB.jsx)("div", {
            className: "brv-chapters",
            children: lB.chapters.map((BB => (0, ZB.jsxs)("button", {
              type: "button",
              className: BB === UB ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                lB.seekToPosition(lB.timeline.toPosition(BB.startMs))
              },
              children: [BB.label, " \xb7 ", RB(BB.endMs - BB.startMs)]
            }, BB.startMs)))
          }), (0, ZB.jsxs)("div", {
            className: "brv-controls",
            children: [(0, ZB.jsx)(NG, {
              label: qB.playing ? oB.pause : oB.play,
              onClick: () => {
                lB.togglePlay()
              },
              children: (0, ZB.jsx)(qG, {
                path: qB.playing ? ZG.pause : ZG.play
              })
            }), (0, ZB.jsxs)("span", {
              className: "brv-time",
              children: [RB(qB.positionMs), " / ", RB(qB.durationMs)]
            }), (0, ZB.jsx)("select", {
              className: "brv-speed",
              value: qB.speed,
              title: `${oB.speed} (1-${FB.length})`,
              "aria-label": oB.speed,
              onChange: BB => {
                lB.setSpeed(Number(BB.target.value))
              },
              children: FB.map((BB => (0, ZB.jsxs)("option", {
                value: BB,
                children: [BB, "x"]
              }, BB)))
            }), (0, ZB.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": qB.skipInactive,
              title: `${oB.skipInactive} (S)`,
              onClick: () => {
                lB.setSkipInactive(!qB.skipInactive)
              },
              children: [(0, ZB.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), oB.skipInactive]
            }), nB && (0, ZB.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": WB,
              title: `${oB.keys} (I)`,
              onClick: VB,
              children: [(0, ZB.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), oB.keys]
            }), document.fullscreenEnabled && (0, ZB.jsx)(NG, {
              label: oB.fullscreen,
              onClick: () => {
                RG(JB.current)
              },
              children: (0, ZB.jsx)(qG, {
                path: ZG.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var AG = GB(5570);
    const VG = ["bloxd.io", window.location.hostname];

    function SG(BB) {
      let {
        gameAnalyticsId: OB,
        recordingId: GB,
        userContext: DB,
        autoPlay: QB
      } = BB;
      const {
        t: oB
      } = (0, UB.H)(), [jB, yB] = (0, YB.useState)({
        status: "loading"
      }), [JB, MB] = (0, YB.useState)(0), PB = (0, YB.useMemo)((() => function(BB) {
        return {
          play: BB("studio:replayPlay"),
          pause: BB("studio:replayPause"),
          speed: BB("studio:replaySpeed"),
          skipInactive: BB("studio:replaySkipIdle"),
          fullscreen: BB("studio:replayFullscreen"),
          tabHidden: BB("studio:replayTabHidden"),
          videoFailed: BB("studio:replayVideoFailed"),
          nothingToShow: BB("studio:replayNothingToShow"),
          videoGap: BB("studio:replayVideoGap"),
          error: BB("general:error"),
          graphicsCrash: BB("studio:replayMarkerGraphicsCrash"),
          death: BB("studio:replayMarkerDeath"),
          fps: OB => BB("studio:replayFps", {
            fps: OB
          }),
          keys: BB("studio:replayKeys"),
          unboundKey: OB => BB("studio:replayUnboundKey", {
            key: OB
          }),
          unboundKeys: OB => BB("studio:replayUnboundKeys", {
            keys: OB
          })
        }
      }(oB)), [oB]), zB = (0, YB.useMemo)((() => ({
        resourceHosts: VG,
        loadTelemetryChunk: uB.C,
        refreshUrls: async () => (0, uB.x)(await AG.e.getReplay(DB, OB, GB)),
        segmentUrls: {
          load: async BB => (await AG.e.getReplaySegmentUrls(DB, OB, GB, BB, [])).videoSegments,
          maxSequences: IB.b
        },
        telemetryUrls: {
          load: async BB => (await AG.e.getReplaySegmentUrls(DB, OB, GB, [], BB)).telemetrySegments,
          maxSequences: IB.g
        }
      })), [OB, GB]);
      return (0, YB.useEffect)((() => {
        let BB = !1;
        return yB({
          status: "loading"
        }), (0, uB.E)({
          getReplay: () => AG.e.getReplay(DB, OB, GB),
          loadDomEvents: uB.z,
          onPreparing: () => {
            yB({
              status: "preparing"
            })
          },
          wait: BB => new Promise((OB => {
            setTimeout(OB, BB)
          })),
          isCancelled: () => BB
        }).then((OB => {
          if (!BB && null !== OB) {
            const BB = (0, uB.y)(OB.replay, OB.domEvents, (BB => oB("studio:replayVisit", {
              number: BB
            })));
            yB({
              status: "loaded",
              value: BB
            })
          }
        })).catch((OB => {
          console.error("Failed to load studio replay", OB), BB || yB({
            status: "error",
            message: (0, uB.r)(OB, oB("studio:replayLoadFailed"))
          })
        })), () => {
          BB = !0
        }
      }), [OB, GB, JB]), "loading" === jB.status ? (0, ZB.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, ZB.jsx)(kB.b, {})
      }) : "preparing" === jB.status ? (0, ZB.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, ZB.jsx)(kB.b, {}), oB("studio:replayPreparing")]
      }) : "error" === jB.status ? (0, ZB.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [jB.message, (0, ZB.jsx)(dB.Z, {
          onClick: () => {
            MB((BB => BB + 1))
          },
          children: oB("general:tryAgain")
        })]
      }) : (0, ZB.jsx)(WG, {
        className: "StudioReplayPlayer",
        data: jB.value,
        labels: PB,
        options: zB,
        autoPlay: QB || JB > 0
      })
    }

    function nG(BB) {
      let {
        onPlay: OB
      } = BB;
      const {
        t: GB
      } = (0, UB.H)();
      return (0, ZB.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": GB("general:play"),
        onClick: OB,
        children: (0, ZB.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, ZB.jsx)(KB.b, {
            name: "play"
          })
        })
      })
    }
    const UG = uB.Q.replay,
      fG = uB.Q.filters,
      kG = uB.Q.endedAt,
      dG = {
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
      KG = {
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

    function uG(BB) {
      let {
        item: OB,
        selected: GB,
        onSelect: YB
      } = BB;
      const {
        t: DB
      } = (0, UB.H)(), oB = (0, uB.v)(OB);
      return (0, ZB.jsxs)("button", {
        type: "button",
        className: QB()("StudioReplayListItem", {
          StudioReplayListItemSelected: GB
        }),
        onClick: YB,
        children: [(0, ZB.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, ZB.jsx)("span", {
            children: (0, uB.n)(OB.startedAtMs)
          }), (0, ZB.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: RB(OB.inGameDurationMs)
          })]
        }), oB.length > 0 && (0, ZB.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: oB.map((BB => (0, ZB.jsx)("span", {
            className: QB()("StudioReplayTag", `StudioReplayTag-${BB}`),
            children: DB(KG[BB])
          }, BB)))
        })]
      })
    }

    function mG(BB) {
      let {
        gameAnalyticsId: OB,
        userContext: GB,
        availability: YB
      } = BB;
      const {
        t: DB
      } = (0, UB.H)();
      return "on" === YB ? (0, ZB.jsx)(IG, {
        gameAnalyticsId: OB,
        userContext: GB
      }) : "failed" === YB ? (0, ZB.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, ZB.jsx)(KB.b, {
          name: "face-dizzy"
        }), DB("studio:replaysStartFailed"), (0, ZB.jsx)(dB.Z, {
          onClick: () => {
            nB.b.startNow()
          },
          children: DB("general:tryAgain")
        })]
      }) : (0, ZB.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, ZB.jsx)(kB.b, {})
      })
    }

    function IG(BB) {
      var OB, GB;
      let {
        gameAnalyticsId: DB,
        userContext: oB
      } = BB;
      const {
        t: jB
      } = (0, UB.H)(), yB = function(BB, OB) {
        const {
          t: GB
        } = (0, UB.H)(), [DB, QB] = (0, YB.useState)({
          status: "loading"
        });
        return (0, YB.useEffect)((() => {
          let YB = !1;
          return QB({
            status: "loading"
          }), AG.e.listReplays(OB, BB).then((BB => {
            YB || QB({
              status: "loaded",
              value: BB
            })
          })).catch((BB => {
            console.error("Failed to list studio replays", BB), YB || QB({
              status: "error",
              message: (0, uB.r)(BB, GB("studio:replaysLoadFailed"))
            })
          })), () => {
            YB = !0
          }
        }), [BB]), DB
      }(DB, oB), [JB, MB] = (0, fB.l)(), PB = (0, uB.M)(JB.get(fG)), zB = (0, uB.J)(JB.get(kG)), lB = JB.get(UG), pB = "loaded" === yB.status ? (0, uB.d)(yB.value.recordings, PB, zB) : [], qB = "loaded" === yB.status ? (0, uB.U)(yB.value.recordings, pB, lB) : [], NB = null !== (OB = null !== lB && void 0 !== lB ? lB : null === (GB = qB[0]) || void 0 === GB ? void 0 : GB.recordingId) && void 0 !== OB ? OB : null, [RB, WB] = (0, YB.useState)(lB), [AB, VB] = (0, YB.useState)(!1), SB = (0, YB.useRef)(null), nB = (0, YB.useRef)(null !== lB), IB = (0, YB.useRef)(null);

      function FB(BB) {
        BB === RB && BB === NB || (IB.current = null, nB.current = !0, VB(!0), WB(BB), MB((OB => {
          (0, fB.i)(OB, UG, BB)
        }), {
          push: !0
        }))
      }

      function iB(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        NB !== RB && (IB.current = NB), MB((GB => {
          (0, fB.i)(GB, UG, NB), (0, fB.i)(GB, fG, (0, uB.l)(BB)), OB && (0, fB.i)(GB, kG, null)
        }))
      }
      if ((0, YB.useEffect)((() => {
          null !== lB && lB !== IB.current && WB(lB)
        }), [lB]), (0, YB.useEffect)((() => {
          nB.current && null !== SB.current && (nB.current = !1, SB.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [RB, yB.status]), "loading" === yB.status) return (0, ZB.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, ZB.jsx)(kB.b, {})
      });
      if ("error" === yB.status) return (0, ZB.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, ZB.jsx)(KB.b, {
          name: "face-dizzy"
        }), yB.message]
      });
      const {
        recordings: LB,
        dailyQuota: gB
      } = yB.value;
      if (0 === LB.length) return (0, ZB.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, ZB.jsx)(KB.b, {
          name: "video"
        }), jB(0 === gB ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const rB = uB.P.filter((BB => LB.some((OB => (0, uB.F)(OB, BB))))),
        XB = NB !== RB;
      return (0, ZB.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, ZB.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== zB && (0, ZB.jsxs)(dB.Z, {
            active: !0,
            onClick: () => {
              iB(PB, !0)
            },
            children: [jB("studio:replaysFilterEndedAt", {
              minutes: (0, mB.C)(zB.minute, zB.orLonger ? zB.minute : 1 / 0)
            }), (0, ZB.jsx)(KB.b, {
              name: "xmark"
            })]
          }), rB.map((BB => (0, ZB.jsx)(dB.Z, {
            active: PB.includes(BB),
            onClick: () => {
              ! function(BB) {
                iB(PB.includes(BB) ? PB.filter((OB => OB !== BB)) : [...PB, BB])
              }(BB)
            },
            children: jB(dG[BB])
          }, BB))), gB > 0 && (0, ZB.jsx)("span", {
            className: "StudioReplaysQuota",
            children: jB("studio:replaysQuota", {
              count: gB
            })
          })]
        }), (0, ZB.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, ZB.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === pB.length && (0, ZB.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [jB("studio:replaysNoMatch"), (0, ZB.jsx)(dB.Z, {
                onClick: () => {
                  iB([], !0)
                },
                children: jB("studio:replaysClearFilters")
              })]
            }), qB.map((BB => (0, ZB.jsx)(uG, {
              item: BB,
              selected: BB.recordingId === NB,
              onSelect: () => {
                FB(BB.recordingId)
              }
            }, BB.recordingId)))]
          }), null !== NB && (0, ZB.jsxs)("div", {
            ref: SB,
            className: QB()("StudioReplayViewer", {
              StudioReplayViewerWaiting: XB
            }),
            children: [!XB && (0, ZB.jsx)(SG, {
              gameAnalyticsId: DB,
              recordingId: NB,
              userContext: oB,
              autoPlay: AB
            }, NB), XB && (0, ZB.jsx)(nG, {
              onPlay: () => {
                FB(NB)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);