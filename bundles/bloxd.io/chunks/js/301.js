export const id = 301;
export const ids = [301];
export const modules = {
  42424: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => im
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd);
    const Xd = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
      Kd = 3e3;

    function hd(dd) {
      return dd.down && dd.inPlay && !dd.bound
    }

    function vd(dd, Od) {
      let md = 0,
        Wd = dd.length;
      for (; md < Wd;) {
        const Fd = md + Wd >> 1;
        dd[Fd].atMs <= Od ? md = Fd + 1 : Wd = Fd
      }
      return md - 1
    }

    function Qd(dd) {
      let {
        code: Od,
        unbound: md
      } = dd;
      return `${Od}:${md}`
    }

    function td(dd, Od) {
      return Od[1] - dd[1] || (dd[0] < Od[0] ? -1 : 1)
    }
    const od = {
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

    function Nd(dd) {
      var Od;
      const md = od[dd];
      if (void 0 !== md) return md;
      const Wd = null !== (Od = /^(?:Key|Digit)(.)$/.exec(dd)) && void 0 !== Od ? Od : /^Numpad(.+)$/.exec(dd);
      return null !== Wd ? dd.startsWith("Numpad") ? `Num ${Wd[1]}` : Wd[1] : dd
    }
    const qd = 250,
      Hd = 60;
    var yd = md(1341);
    const bd = 6;

    function Td(dd) {
      const Od = Math.max(0, Math.floor(dd / 1e3)),
        md = Math.floor(Od / 3600),
        Wd = Math.floor(Od % 3600 / 60),
        Fd = String(Od % 60).padStart(2, "0");
      return md > 0 ? `${md}:${String(Wd).padStart(2,"0")}:${Fd}` : `${Wd}:${Fd}`
    }

    function pd(dd, Od) {
      return getComputedStyle(dd).getPropertyValue(Od).trim()
    }

    function Yd(dd, Od) {
      switch (dd.kind) {
        case "note":
          return dd.label;
        case "hidden":
          return Od.tabHidden;
        default:
          return Od[dd.kind]
      }
    }

    function gd(dd) {
      let {
        draw: Od,
        className: md
      } = dd;
      const Fd = (0, Wd.useRef)(null);
      return (0, Wd.useEffect)((() => {
        const dd = Fd.current,
          md = dd.getContext("2d");
        if (null === Od || null === md) return;
        const {
          clientWidth: Wd,
          clientHeight: Rd
        } = dd, Xd = window.devicePixelRatio;
        dd.width = Math.round(Wd * Xd), dd.height = Math.round(Rd * Xd), md.setTransform(Xd, 0, 0, Xd, 0, 0), Od(md, Wd, Rd, dd)
      }), [Od]), (0, yd.jsx)("canvas", {
        ref: Fd,
        className: md
      })
    }

    function wd(dd) {
      let {
        controller: Od,
        frames: md,
        input: Fd,
        markers: Rd,
        inactiveRanges: Xd,
        videoGaps: vd,
        labels: Qd
      } = dd;
      const {
        timeline: od
      } = Od, wd = (0, Wd.useRef)(null), [Ed, Jd] = (0, Wd.useState)(0), [Ud, xd] = (0, Wd.useState)(null), Bd = (0, Wd.useRef)(null), Sd = Math.max(1, od.durationMs);
      ! function(dd, Od, md) {
        (0, Wd.useEffect)((() => {
          let Wd = 0,
            Fd = NaN;
          const Rd = () => {
            var Xd;
            Wd = requestAnimationFrame(Rd);
            const Kd = (null !== (Xd = Od.current) && void 0 !== Xd ? Xd : dd.getPositionMs()) / Math.max(1, dd.timeline.durationMs) * 100;
            Kd !== Fd && (Fd = Kd, md.current.style.setProperty("--brv-position", `${Kd}%`))
          };
          return Rd(), () => {
            cancelAnimationFrame(Wd)
          }
        }), [dd])
      }(Od, Bd, wd), (0, Wd.useEffect)((() => {
        const dd = wd.current,
          Od = new ResizeObserver((() => {
            Jd(dd.clientWidth)
          }));
        return Od.observe(dd), () => {
          Od.disconnect()
        }
      }), []);
      const sd = (0, Wd.useMemo)((() => 0 === Ed ? null : function(dd, Od, md) {
          const Wd = Math.max(1, Math.min(md, Math.floor(Od.durationMs / qd))),
            Fd = Od.durationMs / Wd,
            Rd = new Array(Wd).fill(0);
          for (const Xd of dd) Od.contains(Xd.atMs) && Rd[Math.min(Wd - 1, Math.floor(Od.toPosition(Xd.atMs) / Fd))]++;
          return {
            bucketMs: Fd,
            fps: Rd.map((dd => 0 === dd ? null : 1e3 * dd / Fd))
          }
        }(md, od, Math.round(Ed))), [md, od, Ed]),
        ud = Od.lowFps,
        Vd = (0, Wd.useMemo)((() => null === sd ? null : (dd, Od, md, Wd) => {
          ! function(dd, Od, md, Wd, Fd, Rd) {
            dd.clearRect(0, 0, md, Wd);
            const Xd = md / Od.fps.length;
            Od.fps.forEach(((Od, md) => {
              if (null === Od) return;
              const Kd = Math.max(1, Math.min(Od, Hd) / Hd * Wd);
              dd.fillStyle = Od < Fd ? Rd.lowFps : Rd.fps, dd.fillRect(md * Xd, Wd - Kd, Math.max(1, Xd), Kd)
            }))
          }(dd, sd, Od, md, ud, {
            fps: pd(Wd, "--brv-fps"),
            lowFps: pd(Wd, "--brv-low-fps")
          })
        }), [sd, ud]),
        Ad = (0, Wd.useMemo)((() => {
          if (0 === Ed || !Fd.inputRecorded) return null;
          const dd = function(dd, Od, md) {
            const Wd = Math.max(1, Od.durationMs) / md,
              Fd = new Array(md).fill(0),
              Rd = new Array(md).fill(0);
            for (const Xd of dd) {
              if (!Xd.down || !Od.contains(Xd.atMs)) continue;
              const dd = Math.min(md - 1, Math.floor(Od.toPosition(Xd.atMs) / Wd));
              Fd[dd]++, hd(Xd) && Rd[dd]++
            }
            return {
              presses: Fd,
              unbound: Rd
            }
          }(Fd.keys, od, Math.max(1, Math.round(Ed)));
          return (Od, md, Wd, Fd) => {
            ! function(dd, Od, md, Wd, Fd) {
              dd.clearRect(0, 0, md, Wd);
              const Rd = md / Od.presses.length;
              Od.presses.forEach(((md, Xd) => {
                if (0 === md) return;
                const Kd = Od.unbound[Xd] > 0;
                dd.globalAlpha = Kd ? 1 : Math.min(1, .35 + .15 * md), dd.fillStyle = Kd ? Fd.unbound : Fd.presses, dd.fillRect(Xd * Rd, 0, Math.max(Kd ? 2 : 1, Rd), Wd)
              })), dd.globalAlpha = 1
            }(Od, dd, md, Wd, {
              presses: pd(Fd, "--brv-key-press"),
              unbound: pd(Fd, "--brv-key-unbound")
            })
          }
        }), [Fd, od, Ed]),
        rd = (0, Wd.useMemo)((() => function(dd) {
          const Od = [];
          for (const Wd of dd) {
            var md;
            if (!hd(Wd)) continue;
            let dd = Od.at(-1);
            (void 0 === dd || Wd.atMs - dd.endMs > Kd) && (dd = {
              startMs: Wd.atMs,
              endMs: Wd.atMs,
              counts: new Map
            }, Od.push(dd)), dd.endMs = Wd.atMs, dd.counts.set(Wd.code, (null !== (md = dd.counts.get(Wd.code)) && void 0 !== md ? md : 0) + 1)
          }
          return Od.map((dd => {
            let {
              startMs: Od,
              endMs: md,
              counts: Wd
            } = dd;
            return {
              startMs: Od,
              endMs: md,
              keys: [...Wd].sort(td)
            }
          }))
        }(Fd.keys.filter((dd => od.contains(dd.atMs))))), [Fd.keys, od]),
        Gd = dd => od.toPosition(dd) / Sd * 100,
        nd = dd => Gd(dd) / 100 * Ed,
        Ld = dd => {
          const Od = wd.current.getBoundingClientRect();
          return {
            px: dd - Od.left,
            positionMs: Math.max(0, Math.min(Od.width, dd - Od.left)) / Od.width * Sd
          }
        },
        Pd = null === Ud || 0 === Ed ? null : {
          px: Ud,
          positionMs: Math.max(0, Math.min(Ed, Ud)) / Ed * Sd
        },
        zd = null === Pd || null === sd ? null : function(dd, Od) {
          const md = Math.max(0, Math.min(dd.fps.length - 1, Math.floor(Od / dd.bucketMs))),
            Wd = dd.fps[md];
          return null === Wd ? null : Math.round(Wd)
        }(sd, Pd.positionMs),
        cd = null !== Pd && vd.some((dd => Pd.px >= nd(dd.startMs) && Pd.px < nd(dd.endMs))),
        jd = null === Pd ? void 0 : Rd.find((dd => {
          var Od;
          return Pd.px >= nd(dd.atMs) - bd && Pd.px <= nd(null !== (Od = dd.endMs) && void 0 !== Od ? Od : dd.atMs) + bd
        })),
        Dd = null === Pd ? void 0 : rd.find((dd => Pd.px >= nd(dd.startMs) - bd && Pd.px <= nd(dd.endMs) + bd));
      return (0, yd.jsxs)("div", {
        ref: wd,
        className: Fd.inputRecorded ? "brv-seekbar brv-seekbar-with-input" : "brv-seekbar",
        onPointerDown: dd => {
          dd.currentTarget.setPointerCapture(dd.pointerId);
          const Od = Ld(dd.clientX);
          xd(Od.px), Bd.current = Od.positionMs
        },
        onPointerMove: dd => {
          const Od = Ld(dd.clientX);
          xd(Od.px), null !== Bd.current && (Bd.current = Od.positionMs)
        },
        onPointerUp: dd => {
          null !== Bd.current && (Od.seekToPosition(Ld(dd.clientX).positionMs), Bd.current = null)
        },
        onPointerCancel: () => {
          Bd.current = null, xd(null)
        },
        onPointerLeave: () => {
          xd(null)
        },
        children: [(0, yd.jsxs)("div", {
          className: "brv-seekbar-track",
          children: [(0, yd.jsx)(gd, {
            draw: Vd,
            className: "brv-seekbar-canvas"
          }), Xd.map((dd => {
            const Od = Gd(dd.startMs);
            return (0, yd.jsx)("div", {
              className: "brv-seekbar-inactive",
              style: {
                left: `${Od}%`,
                width: Gd(dd.endMs) - Od + "%"
              }
            }, dd.startMs)
          })), vd.map((dd => {
            const Od = Gd(dd.startMs);
            return (0, yd.jsx)("div", {
              className: "brv-seekbar-video-gap",
              style: {
                left: `${Od}%`,
                width: Gd(dd.endMs) - Od + "%"
              }
            }, dd.startMs)
          })), (0, yd.jsx)("div", {
            className: "brv-seekbar-progress"
          }), null !== Pd && (0, yd.jsx)("div", {
            className: "brv-seekbar-hover",
            style: {
              left: Pd.px
            }
          })]
        }), Fd.inputRecorded && (0, yd.jsx)(gd, {
          draw: Ad,
          className: "brv-seekbar-input"
        }), (0, yd.jsx)("div", {
          className: "brv-seekbar-markers",
          children: Rd.map(((dd, Od) => {
            var md;
            const Wd = Gd(dd.atMs),
              Fd = void 0 !== dd.endMs;
            return (0, yd.jsx)("div", {
              className: `brv-marker brv-marker-${dd.kind}${Fd?" brv-marker-range":""}`,
              style: {
                left: `${Wd}%`,
                width: Fd ? Gd(null !== (md = dd.endMs) && void 0 !== md ? md : dd.atMs) - Wd + "%" : void 0
              }
            }, Od)
          }))
        }), (0, yd.jsx)("div", {
          className: "brv-seekbar-playhead"
        }), null !== Pd && (0, yd.jsxs)("div", {
          className: "brv-tooltip",
          style: {
            left: Pd.px
          },
          children: [Td(Pd.positionMs), null !== zd && ` \xb7 ${Qd.fps(zd)}`, void 0 !== jd && ` \xb7 ${Yd(jd,Qd)}`, cd && ` \xb7 ${Qd.videoGap}`, void 0 !== Dd && ` \xb7 ${Qd.unboundKeys((ed=Dd.keys,ed.map((dd=>{let[Od,md]=dd;return md>1?`${Nd(Od)} \xd7${md}`:Nd(Od)})).join(", ")))}`]
        })]
      });
      var ed
    }
    var Ed = md(5343),
      Jd = md(1238),
      Ud = md(5223),
      xd = md(1436),
      Bd = md(1572),
      Sd = md(1443),
      sd = md(7451),
      ud = md(5994),
      Vd = md(5991);
    const Ad = [.5, 1, 2, 4, 8, 16];
    var rd = md(42432);

    function Gd(dd) {
      const Od = dd.filter((dd => dd.endMs > dd.startMs)).sort(((dd, Od) => dd.startMs - Od.startMs)),
        md = [];
      for (const Wd of Od) {
        const dd = md.at(-1);
        void 0 !== dd && Wd.startMs <= dd.endMs ? dd.endMs = Math.max(dd.endMs, Wd.endMs) : md.push({
          ...Wd
        })
      }
      return md
    }
    class nd {
      constructor(dd) {
        this.By = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.By = Gd(dd), this.positionStarts = [];
        let Od = 0;
        for (const md of this.By) this.positionStarts.push(Od), Od += md.endMs - md.startMs;
        this.durationMs = Od
      }
      get startMs() {
        var dd, Od;
        return null !== (dd = null === (Od = this.By[0]) || void 0 === Od ? void 0 : Od.startMs) && void 0 !== dd ? dd : 0
      }
      get endMs() {
        var dd, Od;
        return null !== (dd = null === (Od = this.By.at(-1)) || void 0 === Od ? void 0 : Od.endMs) && void 0 !== dd ? dd : 0
      }
      toPosition(dd) {
        for (let Od = 0; Od < this.By.length; Od++) {
          const md = this.By[Od];
          if (dd < md.endMs) return this.positionStarts[Od] + Math.max(0, dd - md.startMs)
        }
        return this.durationMs
      }
      toTime(dd) {
        const Od = Math.max(0, Math.min(this.durationMs, dd));
        for (let md = this.By.length - 1; md >= 0; md--)
          if (Od >= this.positionStarts[md]) return this.By[md].startMs + (Od - this.positionStarts[md]);
        return this.startMs
      }
      contains(dd) {
        return this.By.some((Od => dd >= Od.startMs && dd < Od.endMs))
      }
      nextPlayableTime(dd) {
        for (const Od of this.By) {
          if (dd < Od.startMs) return Od.startMs;
          if (dd < Od.endMs) return dd
        }
        return null
      }
    }

    function Ld(dd) {
      return [...dd].sort(((dd, Od) => dd.startMs - Od.startMs))
    }

    function Pd(dd, Od) {
      let md = 1 / 0,
        Wd = -1 / 0;
      const Fd = dd => {
        md = Math.min(md, dd), Wd = Math.max(Wd, dd)
      };
      for (const Rd of [...dd.videoSegments, ...dd.telemetryChunks]) Fd(Rd.startMs), Fd(Rd.endMs);
      for (const Rd of dd.domEvents) Fd(Od.toEpoch(Rd.timestamp));
      return md < Wd ? {
        startMs: md,
        endMs: Wd
      } : {
        startMs: 0,
        endMs: 0
      }
    }
    class zd {
      constructor(dd, Od) {
        this.wallNowMs = Od, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = dd, this.anchorWallMs = Od()
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
      timeAtWall(dd) {
        return this.playingState ? this.anchorTimeMs + (dd - this.anchorWallMs) * this.speedState : this.anchorTimeMs
      }
      play() {
        this.reanchor(), this.playingState = !0
      }
      pause() {
        this.reanchor(), this.playingState = !1
      }
      seek(dd) {
        this.anchorTimeMs = dd, this.anchorWallMs = this.wallNowMs()
      }
      setSpeed(dd) {
        this.reanchor(), this.speedState = dd
      }
      reanchor() {
        const dd = this.wallNowMs();
        this.anchorTimeMs = this.timeAtWall(dd), this.anchorWallMs = dd
      }
    }
    const cd = "bloxd-clock";
    class jd {
      constructor(dd) {
        this.samples = void 0, this.samples = [];
        for (const md of dd) {
          var Od;
          const dd = md.data;
          md.type === rd.d.Custom && (null === dd || void 0 === dd ? void 0 : dd.tag) === cd && "number" === typeof(null === (Od = dd.payload) || void 0 === Od ? void 0 : Od.epochMs) && this.samples.push({
            domMs: md.timestamp,
            offsetMs: dd.payload.epochMs - md.timestamp
          })
        }
        this.samples.sort(((dd, Od) => dd.domMs - Od.domMs))
      }
      toEpoch(dd) {
        return dd + this.offsetAtDom(dd)
      }
      toDom(dd) {
        return dd - this.offsetAtDom(dd)
      }
      offsetAtDom(dd) {
        var Od, md;
        let Wd = 0,
          Fd = this.samples.length - 1;
        for (; Wd < Fd;) {
          const Od = Math.ceil((Wd + Fd) / 2);
          this.samples[Od].domMs <= dd ? Wd = Od : Fd = Od - 1
        }
        return null !== (Od = null === (md = this.samples[Wd]) || void 0 === md ? void 0 : md.offsetMs) && void 0 !== Od ? Od : 0
      }
    }
    const Dd = new Set([rd.g.MouseMove, rd.g.MouseInteraction, rd.g.Scroll, rd.g.Input, rd.g.TouchMove, rd.g.Drag]),
      ed = "bloxd-active",
      Id = "player_death",
      ld = "error",
      Cd = {
        $exception: "error",
        [ld]: "error",
        death: "death",
        [Id]: "death"
      };

    function Zd(dd, Od, md) {
      return function(dd, Od) {
        const md = [];
        for (const Wd of dd) {
          let dd = Wd.startMs;
          for (const Fd of Od) Fd.endMs <= dd || Fd.startMs >= Wd.endMs || (Fd.startMs > dd && md.push({
            startMs: dd,
            endMs: Fd.startMs
          }), dd = Math.max(dd, Fd.endMs));
          dd < Wd.endMs && md.push({
            startMs: dd,
            endMs: Wd.endMs
          })
        }
        return md
      }(function(dd) {
        const Od = [];
        for (const md of dd) {
          const dd = Od.at(-1);
          void 0 !== dd && md.atMs - dd.endMs <= 5e3 ? dd.endMs = md.atMs : Od.push({
            startMs: md.atMs,
            endMs: md.atMs
          })
        }
        return Od
      }(dd), Gd([...Od, ...md])).filter((dd => dd.endMs - dd.startMs >= 1e3))
    }

    function kd(dd) {
      var Od, md, Wd;
      return dd.type === rd.d.IncrementalSnapshot ? Dd.has(null !== (md = null === (Wd = dd.data) || void 0 === Wd ? void 0 : Wd.source) && void 0 !== md ? md : -1) : dd.type === rd.d.Custom && (null === (Od = dd.data) || void 0 === Od ? void 0 : Od.tag) === ed
    }

    function fd(dd, Od) {
      const md = [];
      for (const Xd of dd)
        if (Xd.type === rd.d.Custom) {
          var Wd;
          const dd = null === (Wd = Xd.data) || void 0 === Wd ? void 0 : Wd.tag,
            Fd = void 0 === dd ? void 0 : Cd[dd];
          void 0 !== Fd && md.push({
            kind: Fd,
            atMs: Od.toEpoch(Xd.timestamp)
          })
        } else if (Xd.type === rd.d.Plugin) {
        var Fd, Rd;
        const dd = Xd.data;
        "rrweb/console@1" !== (null === dd || void 0 === dd ? void 0 : dd.plugin) || "error" !== (null === (Fd = dd.payload) || void 0 === Fd ? void 0 : Fd.level) && "assert" !== (null === (Rd = dd.payload) || void 0 === Rd ? void 0 : Rd.level) || md.push({
          kind: "error",
          atMs: Od.toEpoch(Xd.timestamp)
        })
      }
      return md
    }
    const Md = 3e6;
    class dO {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Md;
        this.fetchUrls = dd, this.onUrls = Od, this.wallNowMs = md, this.refreshableAfterMs = Wd, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = md()
      }
      get refreshing() {
        return this.inFlight
      }
      request() {
        if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
        if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
        const dd = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
        dd > 0 ? this.timer = setTimeout((() => {
          this.timer = null, this.request()
        }), dd) : this.start(this.fetchUrls)
      }
      destroy() {
        this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
      }
      start(dd) {
        this.inFlight = !0;
        const Od = this.wallNowMs();
        this.lastRefreshWallMs = Od;
        let md = !1;
        dd().then((dd => {
          this.destroyed || (this.urlsFetchedAtWallMs = Od, this.onUrls(dd))
        })).catch((dd => {
          console.error("Failed to refresh the replay's URLs.", dd), md = !0
        })).finally((() => {
          this.inFlight = !1, md && this.request()
        }))
      }
    }
    class OO {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Md;
        this.source = dd, this.description = Od, this.wallNowMs = md, this.refreshableAfterMs = Wd, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
      }
      reset(dd) {
        this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
        const Od = this.wallNowMs();
        for (const md of dd) this.entries.set(md.sequence, {
          urls: md,
          fetchedAtWallMs: Od
        })
      }
      get(dd) {
        const Od = this.getFresh(dd);
        return null !== Od ? Od : null === this.source || this.unavailable.has(dd) || this.failedFetches > 0 ? "failed" : "pending"
      }
      needs(dd) {
        return null === this.getFresh(dd) && !this.unavailable.has(dd)
      }
      request(dd) {
        if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
        const Od = dd.filter((dd => this.needs(dd)));
        Od.length > 0 && this.fetch(this.source, Od.slice(0, this.source.maxSequences))
      }
      destroy() {
        this.destroyed = !0
      }
      getFresh(dd) {
        const Od = this.entries.get(dd);
        return void 0 === Od ? null : null === this.source || this.wallNowMs() - Od.fetchedAtWallMs < this.refreshableAfterMs ? Od.urls : null
      }
      fetch(dd, Od) {
        this.inFlight = !0;
        const md = this.wallNowMs();
        dd.load(Od).then((dd => {
          if (this.destroyed) return;
          this.failedFetches = 0;
          const Wd = new Set;
          for (const Od of dd) this.entries.set(Od.sequence, {
            urls: Od,
            fetchedAtWallMs: md
          }), Wd.add(Od.sequence);
          for (const md of Od) Wd.has(md) || (console.warn(`Replay sequence ${md} has no ${this.description}.`), this.unavailable.add(md))
        })).catch((dd => {
          console.error(`Failed to fetch the replay's ${this.description}.`, dd), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
        })).finally((() => {
          this.inFlight = !1
        }))
      }
    }
    class mO {
      constructor(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Md;
        this.load = Od, this.onLoaded = md, this.onFailed = Wd, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = WO([]), this.hidden = [], this.destroyed = !1, this.chunks = [...dd].sort(((dd, Od) => dd.startMs - Od.startMs)).map((dd => ({
          chunk: dd,
          status: "idle",
          attempts: 0,
          telemetry: null
        }))), this.urls = new OO(Fd, "telemetry URLs", Rd, Xd), this.urls.reset(RO(dd))
      }
      get telemetry() {
        return this.merged
      }
      get hiddenRanges() {
        return this.hidden
      }
      get loadedCount() {
        return this.chunks.filter((dd => "loaded" === dd.status)).length
      }
      update(dd, Od, md) {
        if (null === this.load || this.destroyed) return;
        const Wd = Od.toPosition(dd),
          Fd = Od.toTime(Wd - 1e4),
          Rd = Od.toTime(Wd + 6e4 * Math.max(1, md)),
          Xd = Od.toTime(Wd + 12e4 * Math.max(1, md)),
          Kd = this.chunks.filter((dd => "idle" === dd.status && dd.chunk.endMs >= Fd && dd.chunk.startMs <= Xd)).sort(((Od, md) => XO(dd, Od.chunk) - XO(dd, md.chunk)));
        this.urls.request(Kd.flatMap((dd => {
          var Od;
          let {
            chunk: md
          } = dd;
          return null !== (Od = md.sequence) && void 0 !== Od ? Od : []
        })));
        for (const hd of Kd) {
          if (this.loading >= 3) return;
          const dd = hd.chunk.startMs <= Rd ? this.getUrl(hd.chunk) : null;
          null !== dd && this.startLoad(hd, dd, this.load)
        }
      }
      replaceUrls(dd) {
        this.urls.reset(RO(dd));
        for (const Od of this.chunks) {
          const md = dd.find((dd => dd.startMs === Od.chunk.startMs && dd.endMs === Od.chunk.endMs));
          void 0 !== md && (Od.chunk = md, "failed" === Od.status && (Od.status = "idle"))
        }
      }
      destroy() {
        this.destroyed = !0, this.urls.destroy()
      }
      getUrl(dd) {
        var Od;
        if (void 0 === dd.sequence) return null !== (Od = dd.url) && void 0 !== Od ? Od : null;
        const md = this.urls.get(dd.sequence);
        return "string" === typeof md ? null : md.url
      }
      startLoad(dd, Od, md) {
        dd.status = "loading", dd.attempts++, this.loading++, md(Od).then((Od => {
          this.destroyed || (dd.status = "loaded", dd.telemetry = Od, this.merge(), this.onLoaded())
        })).catch((Od => {
          this.destroyed || (console.error(`Failed to load replay telemetry for ${dd.chunk.startMs}-${dd.chunk.endMs}.`, Od), dd.status = dd.attempts < 2 ? "idle" : "failed", this.onFailed())
        })).finally((() => {
          this.loading--
        }))
      }
      merge() {
        const dd = [];
        let Od = !1;
        for (const Wd of this.chunks) {
          const md = dd.at(-1);
          if (null === Wd.telemetry) {
            Od = !1;
            continue
          }
          const Fd = FO(Wd.telemetry, Wd.chunk);
          void 0 !== md && Od && Wd.chunk.startMs <= md.endMs + 1e3 ? (md.telemetry.push(Fd), md.endMs = Wd.chunk.endMs) : (dd.push({
            telemetry: [Fd],
            endMs: Wd.chunk.endMs
          }), Od = !0)
        }
        const md = dd.map((dd => function(dd, Od) {
          const md = dd.actions.at(-1);
          if (void 0 === md || 0 === md.bits) return dd;
          return {
            ...dd,
            actions: [...dd.actions, {
              atMs: Od,
              bits: 0
            }]
          }
        }(WO(dd.telemetry), dd.endMs)));
        this.merged = WO(md), this.hidden = md.flatMap(((Od, md) => function(dd, Od) {
          const md = [];
          let Wd = null;
          for (const {
              atMs: Fd,
              event: Rd
            }
            of dd.events) "hidden" === Rd && null === Wd ? Wd = Fd : "visible" === Rd && null !== Wd && (md.push({
            startMs: Wd,
            endMs: Fd
          }), Wd = null);
          return null !== Wd && md.push({
            startMs: Wd,
            endMs: Od
          }), Gd(md)
        }(Od, dd[md].endMs)))
      }
    }

    function WO(dd) {
      return {
        inputRecorded: dd.some((dd => dd.keys.length > 0)),
        frames: dd.flatMap((dd => dd.frames)),
        states: dd.flatMap((dd => dd.states)),
        events: dd.flatMap((dd => dd.events)),
        actions: dd.flatMap((dd => dd.actions)),
        keys: dd.flatMap((dd => dd.keys))
      }
    }

    function FO(dd, Od) {
      const {
        actions: md
      } = dd;
      return !dd.inputRecorded || md.length > 0 && md[0].atMs <= Od.startMs + 1 ? dd : {
        ...dd,
        actions: [{
          atMs: Od.startMs,
          bits: 0
        }, ...md]
      }
    }

    function RO(dd) {
      return dd.flatMap((dd => {
        let {
          sequence: Od,
          url: md
        } = dd;
        return void 0 === Od || void 0 === md ? [] : [{
          sequence: Od,
          url: md
        }]
      }))
    }

    function XO(dd, Od) {
      return dd < Od.startMs ? Od.startMs - dd : dd > Od.endMs ? 2 * (dd - Od.endMs) : 0
    }
    class KO {
      constructor(dd, Od, md, Wd) {
        this.data = dd, this.domClock = Od, this.timeline = md, this.options = Wd, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(dd, Od) {
          return dd.filter(kd).map((dd => Od.toEpoch(dd.timestamp)))
        }(dd.domEvents, Od), this.telemetry = new mO(dd.telemetryChunks, Wd.loadTelemetryChunk, (() => {
          this.rebuild()
        }), Wd.onTelemetryFailed, Wd.telemetryUrls), this.rebuild()
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
      update(dd, Od) {
        this.telemetry.update(dd, this.timeline, Od)
      }
      replaceTelemetryUrls(dd) {
        this.telemetry.replaceUrls(dd)
      }
      destroy() {
        this.telemetry.destroy()
      }
      isHiddenAt(dd) {
        return this.telemetry.hiddenRanges.some(hO(dd))
      }
      isVideoGapAt(dd) {
        return this.videoGapRanges.some(hO(dd))
      }
      rebuild() {
        const dd = this.telemetry.telemetry,
          Od = this.telemetry.hiddenRanges;
        this.videoGapRanges = Zd(dd.frames, this.data.videoSegments, Od), this.inactiveRangeList = function(dd, Od, md, Wd) {
          const Fd = [...Od];
          if (dd.length > 0) {
            const Od = [md.startMs, ...dd, md.endMs];
            for (let dd = 1; dd < Od.length; dd++) {
              const md = Od[dd - 1],
                Rd = Od[dd] - 1e3;
              Rd - md >= Wd && Fd.push({
                startMs: md,
                endMs: Rd
              })
            }
          }
          return Gd(Fd).filter((dd => dd.endMs - dd.startMs >= Wd))
        }(this.activityTimes, Od, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(dd) {
          const {
            timeline: Od
          } = dd;
          return [...fd(dd.domEvents, dd.domClock), ...dd.telemetry.events.filter((dd => {
            let {
              event: Od
            } = dd;
            return "contextLost" === Od
          })).map((dd => {
            let {
              atMs: Od
            } = dd;
            return {
              kind: "graphicsCrash",
              atMs: Od
            }
          })), ...dd.hidden.map((dd => ({
            kind: "hidden",
            atMs: dd.startMs,
            endMs: dd.endMs
          }))), ...dd.extraMarkers].filter((dd => dd.atMs >= Od.startMs && dd.atMs <= Od.endMs && (Od.contains(dd.atMs) || Od.contains(dd.atMs - 1)))).sort(((dd, Od) => dd.atMs - Od.atMs))
        }({
          domEvents: this.data.domEvents,
          domClock: this.domClock,
          telemetry: dd,
          extraMarkers: this.data.markers,
          hidden: Od,
          timeline: this.timeline
        })
      }
    }

    function hO(dd) {
      return Od => dd >= Od.startMs && dd < Od.endMs
    }
    class vO {
      constructor() {
        this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
          handler: (dd, Od, md) => {
            let {
              replayer: Wd
            } = md;
            this.record(dd), Od && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
              this.settleQueued = !1, this.settle(Wd)
            })))
          }
        }
      }
      settle(dd) {
        const Od = dd.iframe.contentDocument;
        if (null === Od || void 0 === Od || !Od.documentElement.classList.contains("rrweb-paused")) return;
        const md = dd.getMetaData().startTime + dd.getCurrentTime();
        ! function(dd, Od, md, Wd) {
          for (const Fd of dd) {
            const dd = Fd.effect,
              Rd = md.get(Od.getId(dd.target)),
              Xd = void 0 === Rd ? 1 / 0 : Wd - Rd,
              Kd = Math.min(Math.max(Xd, Number(Fd.currentTime)), Number(dd.getComputedTiming().endTime));
            Number.isFinite(Kd) && (Fd.currentTime = Kd)
          }
        }(Od.getAnimations(), dd.getMirror(), this.addedAt, md)
      }
      record(dd) {
        if (dd.type === rd.d.FullSnapshot) this.addedAt.clear();
        else if (dd.type === rd.d.IncrementalSnapshot && dd.data.source === rd.g.Mutation) {
          for (const {
              id: Od
            }
            of dd.data.removes) this.addedAt.delete(Od);
          for (const {
              node: Od
            }
            of dd.data.adds) this.addedAt.set(Od.id, dd.timestamp)
        }
      }
    }
    const QO = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
      tO = new Set(["srcset", "imagesrcset"]),
      oO = new Set(["to", "from", "by", "values"]),
      NO = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
      qO = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
      HO = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
      yO = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
      bO = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
      TO = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
      pO = /^data:image\/(?!svg)/i,
      YO = "about:invalid";

    function gO(dd, Od) {
      let {
        hosts: md
      } = Od, Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Fd = dd.trim();
      if (/[\\\u0000-\u001f]/.test(Fd)) return !1;
      if (!TO.test(Fd)) return !0;
      let Rd;
      try {
        Rd = new URL(Fd.startsWith("//") ? `https:${Fd}` : Fd)
      } catch {
        return !1
      }
      return "data:" === Rd.protocol ? Wd ? "text/css" !== Fd.slice(5).split(/[,;]/)[0].trim().toLowerCase() : pO.test(Fd) : "blob:" === Rd.protocol || ("http:" === Rd.protocol || "https:" === Rd.protocol) && md.some((dd => Rd.hostname === dd || Rd.hostname.endsWith(`.${dd}`)))
    }

    function wO(dd, Od) {
      return dd.replace(qO, (function(dd) {
        for (var md = arguments.length, Wd = new Array(md > 1 ? md - 1 : 0), Fd = 1; Fd < md; Fd++) Wd[Fd - 1] = arguments[Fd];
        if (gO(Wd.slice(0, 7).find((dd => "string" === typeof dd)), Od, !0)) return dd;
        const Rd = dd.slice(0, 4).toLowerCase();
        return "url(" === Rd ? `url("${YO}")` : "@imp" === Rd ? `@import "${YO}"` : `"${YO}"`
      }))
    }

    function aO(dd) {
      return bO.test(dd.replace(qO, '""'))
    }

    function EO(dd) {
      let Od = "between";
      for (let md = 0; md < dd.length; md++) {
        const Wd = dd[md];
        if ("/" === Wd && "*" === dd[md + 1]) {
          if (md = dd.indexOf("*/", md + 2), -1 === md) return "open";
          md++, Od = "between"
        } else if ('"' === Wd || "'" === Wd) {
          for (md++; md < dd.length && dd[md] !== Wd && !/[\n\r\f]/.test(dd[md]); md++) "\\" === dd[md] && md++;
          if (md >= dd.length) return "open";
          Od = "token"
        } else "\\" === Wd ? (md++, Od = "token") : ";" === Wd || "{" === Wd || "}" === Wd ? Od = "between" : /\s/.test(Wd) || (Od = "token")
      }
      return Od
    }

    function JO(dd, Od) {
      const md = wO(dd, Od);
      if (aO(md) || "open" === EO(md)) return "";
      if (!md.includes("\\")) return md;
      const Wd = function(dd) {
        return dd.replace(yO, ((dd, Od, md) => void 0 !== Od ? String.fromCodePoint(Math.min(parseInt(Od, 16), 1114111)) : null !== md && void 0 !== md ? md : ""))
      }(md);
      return wO(Wd, Od) !== Wd || aO(Wd) ? "" : md
    }

    function UO(dd, Od) {
      const md = HO.test(dd) ? JO(dd, Od) : dd;
      return md.split("/* rr_split */").every((dd => "between" === EO(dd))) ? md : ""
    }

    function xO(dd, Od, md) {
      if ("string" === typeof Od) {
        const Wd = dd.toLowerCase();
        if (NO.has(Wd)) return null;
        if (tO.has(Wd)) return function(dd, Od) {
          return dd.split(",").every((dd => {
            const md = dd.trim().split(/\s+/)[0];
            return void 0 === md || "" === md || gO(md, Od)
          }))
        }(Od, md) ? Od : null;
        if (oO.has(Wd)) {
          return Od.split(";").every((dd => gO(dd, md))) ? xO("", Od, md) : null
        }
        return QO.has(Wd) ? gO(Od, md) ? Od : null : "_csstext" === Wd ? UO(Od, md) : HO.test(Od) ? JO(Od, md) : Od
      }
      if (Array.isArray(Od)) return Od.map((dd => xO("", dd, md)));
      if (null !== Od && "object" === typeof Od) {
        const Wd = "style" === dd.toLowerCase(),
          Fd = {};
        for (const [dd, Xd] of Object.entries(Od)) Fd[dd] = xO(Wd ? "" : dd, Xd, md);
        const {
          id: Rd
        } = Fd;
        if ("number" === typeof Rd && md.styleTextIds.has(Rd))
          for (const dd of ["textContent", "value"]) {
            const Od = Fd[dd];
            "string" === typeof Od && (Fd[dd] = UO(Od, md))
          }
        return Fd
      }
      return Od
    }

    function BO(dd, Od) {
      const md = (dd, Wd) => {
        if (null === dd || "object" !== typeof dd) return;
        const Fd = dd;
        if (Od(Fd, Wd), Array.isArray(Fd.childNodes))
          for (const Od of Fd.childNodes) md(Od, Fd.id)
      };
      for (const Wd of dd) {
        const dd = Wd.data;
        if (Wd.type === rd.d.FullSnapshot) md(null === dd || void 0 === dd ? void 0 : dd.node, null);
        else if (Wd.type === rd.d.IncrementalSnapshot && Array.isArray(null === dd || void 0 === dd ? void 0 : dd.adds))
          for (const Od of dd.adds) md(null === Od || void 0 === Od ? void 0 : Od.node, null === Od || void 0 === Od ? void 0 : Od.parentId)
      }
    }

    function SO(dd) {
      const Od = new Set,
        md = [];
      BO(dd, ((dd, Wd) => {
        let {
          id: Fd,
          tagName: Rd
        } = dd;
        "number" === typeof Fd && ("string" === typeof Rd && "style" === Rd.toLowerCase() && Od.add(Fd), md.push({
          id: Fd,
          parentId: Wd
        }))
      }));
      const Wd = new Set;
      for (const {
          id: Fd,
          parentId: Rd
        }
        of md) "number" === typeof Rd && Od.has(Rd) && Wd.add(Fd);
      return Wd
    }
    const sO = {
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
      VO = "(min-width: 0px)",
      iO = "(not (min-width: 0px))",
      AO = /@media\b[^{;]*/gi,
      rO = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
      GO = new Set(["_cssText", "rule", "replace", "replaceSync"]);

    function nO(dd, Od) {
      return dd.replace(AO, (dd => dd.replace(rO, ((dd, md, Wd) => {
        const Fd = md.toLowerCase(),
          Rd = sO[Od][Fd];
        if (void 0 === Wd) return "none" === Rd ? iO : VO;
        const Xd = Wd.toLowerCase();
        return uO[Fd].includes(Xd) ? Xd === Rd ? VO : iO : dd
      }))))
    }

    function LO(dd) {
      const Od = dd.attributes,
        md = null === Od || void 0 === Od ? void 0 : Od.rel,
        Wd = null === Od || void 0 === Od ? void 0 : Od.href;
      return "link" === dd.tagName && "string" === typeof md && md.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof Wd ? Wd : null
    }

    function PO(dd) {
      const Od = new Map;
      BO(dd, (dd => {
        const md = LO(dd);
        null !== md && Od.set(dd.id, md)
      }));
      const md = new Map;
      for (const Fd of dd) {
        const dd = Fd.data;
        if (Fd.type === rd.d.IncrementalSnapshot && (null === dd || void 0 === dd ? void 0 : dd.source) === rd.g.Mutation)
          for (const Fd of null !== (Wd = dd.attributes) && void 0 !== Wd ? Wd : []) {
            var Wd;
            const dd = Fd.attributes._cssText,
              Rd = Od.get(Fd.id);
            "string" !== typeof dd || void 0 === Rd || md.has(Rd) || md.set(Rd, dd)
          }
      }
      return md
    }

    function zO(dd, Od, md) {
      var Wd;
      if ("string" === typeof dd) return null !== md.pointer && GO.has(Od) ? nO(dd, md.pointer) : dd;
      if (Array.isArray(dd)) {
        let Od = !1;
        const Wd = dd.map((dd => {
          const Wd = zO(dd, "", md);
          return Od ||= Wd !== dd, Wd
        }));
        return Od ? Wd : dd
      }
      if (null === dd || "object" !== typeof dd) return dd;
      const Fd = function(dd, Od) {
        const md = dd.attributes,
          Wd = LO(dd),
          Fd = null !== Wd && void 0 === (null === md || void 0 === md ? void 0 : md._cssText) ? Od.sheets.get(Wd) : void 0;
        return void 0 === Fd ? dd : {
          ...dd,
          attributes: {
            ...md,
            _cssText: Fd
          }
        }
      }(dd, md);
      let Rd = null;
      for (const [Kd, hd] of Object.entries(Fd)) {
        const dd = zO(hd, Kd, md);
        dd !== hd && (Rd ??= {
          ...Fd
        }, Rd[Kd] = dd)
      }
      const {
        id: Xd
      } = Fd;
      if (null !== md.pointer && "number" === typeof Xd && md.styleTextIds.has(Xd))
        for (const Kd of ["textContent", "value"]) {
          const dd = Fd[Kd],
            Od = "string" === typeof dd ? nO(dd, md.pointer) : dd;
          Od !== dd && (Rd ??= {
            ...Fd
          }, Rd[Kd] = Od)
        }
      return null !== (Wd = Rd) && void 0 !== Wd ? Wd : Fd
    }
    const cO = "brv-styles",
      jO = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".brv-video { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-video { object-fit: fill !important; visibility: hidden !important; }", ".brv-video.brv-video-shown { visibility: visible !important; }", ".brv-still { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; margin: 0 !important; }", ".brv-still { object-fit: fill !important; visibility: hidden !important; max-width: none !important; }", ".brv-still.brv-still-shown { visibility: visible !important; }"],
      DO = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv-video-gap: rgba(10, 12, 20, 0.62);\n\t--brv-marker-error: #fc6464;\n\t--brv-marker-death: #6ec1ff;\n\t--brv-marker-note: #fcd373;\n\t--brv-key-press: #a4a4a4;\n\t--brv-key-unbound: #ff5a5a;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 0;\n\tbackground: var(--brv-bg);\n\tcolor: var(--brv-text);\n\tfont: inherit;\n\toutline: none;\n\tuser-select: none;\n}\n.brv-player:focus-visible { box-shadow: inset 0 0 0 2px var(--brv-accent); }\n.brv-player:fullscreen { width: 100%; height: 100%; }\n.brv-viewport { position: relative; flex: 1 1 auto; min-height: 12rem; overflow: hidden; background: #000; cursor: pointer; }\n.brv-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; }\n.brv-stage .replayer-wrapper { position: relative; }\n.brv-stage .replayer-wrapper > iframe { position: relative; z-index: 1; display: block; border: 0; background: transparent; color-scheme: normal; pointer-events: none; }\n.brv-stage .replayer-mouse { position: absolute; z-index: 2; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l15 11-7 1 4 8-3 1-4-8-5 5z' fill='%23fff' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat center / contain; transition: left 0.05s linear, top 0.05s linear; }\n.brv-stage .replayer-mouse.touch-device { width: 48px; height: 48px; margin: -24px 0 0 -24px; background: none; border: 3px solid transparent; border-radius: 50%; }\n.brv-stage .replayer-mouse.touch-device.touch-active { border-color: color-mix(in srgb, var(--brv-accent) 90%, transparent); }\n.brv-stage .replayer-mouse-tail { position: absolute; pointer-events: none; }\n${jO.join("\n")}\n.brv-video-layer { z-index: 0; }\n.brv-stage-video-only .brv-video-layer { inset: 0; }\n.brv-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 1rem; text-align: center; color: var(--brv-text); background: rgba(0, 0, 0, 0.55); pointer-events: none; }\n.brv-seekbar { position: relative; height: 2.75rem; margin: 0.5rem 0.75rem 0; cursor: pointer; touch-action: none; }\n.brv-seekbar-track { position: absolute; left: 0; right: 0; top: 0; height: 1.75rem; background: var(--brv-track); overflow: hidden; }\n.brv-seekbar-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.85; }\n.brv-seekbar-video-gap { position: absolute; top: 0; bottom: 0; background: var(--brv-video-gap); box-shadow: inset 0 -2px 0 var(--brv-muted); }\n.brv-seekbar-inactive { position: absolute; top: 0; bottom: 0; background: repeating-linear-gradient(135deg, var(--brv-inactive) 0 4px, transparent 4px 8px); }\n.brv-seekbar-progress { position: absolute; left: 0; top: 0; bottom: 0; width: var(--brv-position, 0); background: color-mix(in srgb, var(--brv-accent) 18%, transparent); pointer-events: none; }\n.brv-seekbar-hover { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, 0.6); pointer-events: none; }\n.brv-seekbar-playhead { position: absolute; left: var(--brv-position, 0); top: -3px; bottom: -3px; width: 3px; margin-left: -1px; background: var(--brv-accent); pointer-events: none; }\n.brv-seekbar-markers { position: absolute; left: 0; right: 0; top: 1.75rem; height: 1rem; }\n.brv-seekbar-with-input { height: 3.25rem; }\n.brv-seekbar-input { position: absolute; left: 0; top: calc(1.75rem + 2px); width: 100%; height: 0.4rem; background: color-mix(in srgb, var(--brv-track) 55%, transparent); }\n.brv-seekbar-with-input .brv-seekbar-markers { top: calc(2.15rem + 4px); }\n.brv-input { position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 3; display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; pointer-events: none; font-size: 0.8rem; }\n.brv-input-slot { display: flex; flex-direction: column; align-items: flex-end; gap: 0.2rem; }\n.brv-input-press { padding: 0.15rem 0.5rem; color: var(--brv-text); background: rgba(0, 0, 0, 0.7); white-space: nowrap; }\n.brv-input-press-unbound { background: color-mix(in srgb, var(--brv-key-unbound) 85%, black); font-weight: bold; }\n.brv-input-devices { display: flex; align-items: flex-end; gap: 0.5rem; padding: 0.4rem; background: rgba(0, 0, 0, 0.7); }\n.brv-keys { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }\n.brv-keys-row { display: flex; gap: 0.2rem; }\n.brv-key { min-width: 1.6rem; height: 1.6rem; padding: 0 0.3rem; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; color: var(--brv-muted); border: 1px solid var(--brv-muted); font-size: 0.7rem; }\n.brv-key-wide { min-width: 4.5rem; }\n.brv-key-held { color: #000; background: var(--brv-accent); border-color: var(--brv-accent); }\n.brv-mouse { position: relative; width: 2.4rem; height: 3.4rem; border: 1px solid var(--brv-muted); border-radius: 1.05rem 1.05rem 0.9rem 0.9rem; overflow: hidden; } /* round by design: the mouse's body */\n.brv-mouse-left, .brv-mouse-right { position: absolute; top: 0; width: 50%; height: 45%; box-sizing: border-box; border-bottom: 1px solid var(--brv-muted); }\n.brv-mouse-left { left: 0; border-right: 1px solid var(--brv-muted); }\n.brv-mouse-right { right: 0; }\n.brv-mouse-middle { position: absolute; left: calc(50% - 0.2rem); top: 0.35rem; z-index: 1; width: 0.4rem; height: 0.7rem; box-sizing: border-box; border: 1px solid var(--brv-muted); border-radius: 0.2rem; background: var(--brv-bg); } /* round by design: the scroll wheel */\n.brv-mouse .brv-key-held { background: var(--brv-accent); }\n.brv-marker { position: absolute; top: 2px; width: 8px; height: 8px; margin-left: -4px; border-radius: 50%; background: var(--brv-marker-note); }\n.brv-marker-range { margin-left: 0; height: 4px; top: 4px; min-width: 3px; }\n.brv-marker-error, .brv-marker-graphicsCrash { background: var(--brv-marker-error); }\n.brv-marker-death { background: var(--brv-marker-death); }\n.brv-marker-hidden { background: var(--brv-muted); }\n.brv-tooltip { position: absolute; bottom: calc(100% + 6px); transform: translateX(-50%); padding: 0.2rem 0.45rem; white-space: nowrap; font-size: 0.75rem; background: rgba(0, 0, 0, 0.85); pointer-events: none; z-index: 4; }\n.brv-chapters { display: flex; gap: 0.35rem; flex-wrap: wrap; margin: 0.25rem 0.75rem 0; }\n.brv-chapter { padding: 0.15rem 0.5rem; font: inherit; font-size: 0.75rem; color: var(--brv-text); background: var(--brv-panel); border: 1px solid transparent; cursor: pointer; }\n.brv-chapter.brv-chapter-current { border-color: var(--brv-accent); }\n.brv-controls { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0.75rem 0.75rem; }\n.brv-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem; min-width: 2.25rem; height: 2.25rem; padding: 0 0.55rem; font: inherit; font-size: 0.85rem; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-button:hover { filter: brightness(1.2); }\n.brv-button svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }\n.brv-time { font-variant-numeric: tabular-nums; font-size: 0.85rem; color: var(--brv-muted); margin-right: auto; }\n.brv-speed { height: 2.25rem; padding: 0 0.4rem; font: inherit; font-size: 0.85rem; font-variant-numeric: tabular-nums; color: var(--brv-text); background: var(--brv-panel); border: 0; cursor: pointer; }\n.brv-speed:hover { filter: brightness(1.2); }\n.brv-speed option { color: var(--brv-text); background: var(--brv-bg); }\n.brv-switch { display: inline-flex; align-items: center; gap: 0.45rem; height: 2.25rem; padding: 0 0.6rem; font: inherit; font-size: 0.85rem; color: var(--brv-muted); background: transparent; border: 0; cursor: pointer; }\n.brv-switch:hover { color: var(--brv-text); }\n.brv-switch[aria-checked="true"] { color: var(--brv-text); }\n.brv-switch-track { position: relative; width: 1.9rem; height: 1.05rem; background: var(--brv-track); transition: background 0.15s; }\n.brv-switch-track::after { content: ""; position: absolute; top: 2px; left: 2px; width: calc(1.05rem - 4px); height: calc(1.05rem - 4px); background: var(--brv-text); transition: transform 0.15s; }\n.brv-switch[aria-checked="true"] .brv-switch-track { background: var(--brv-accent); }\n.brv-switch[aria-checked="true"] .brv-switch-track::after { transform: translateX(0.85rem); }\n.brv-player button:focus-visible, .brv-speed:focus-visible { outline: 2px solid var(--brv-accent); outline-offset: 1px; }\n`;
    class eO {
      static create(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        if (!Od.some((dd => dd.type === rd.d.FullSnapshot))) return null;
        const hd = function(dd, Od) {
          const md = {
            sheets: PO(dd),
            styleTextIds: SO(dd),
            pointer: Od
          };
          return dd.map((dd => {
            if (dd.type !== rd.d.FullSnapshot && dd.type !== rd.d.IncrementalSnapshot) return dd;
            const Od = zO(dd.data, "data", md);
            return Od === dd.data ? dd : {
              ...dd,
              data: Od
            }
          }))
        }(function(dd, Od) {
          const md = {
            hosts: Od,
            styleTextIds: SO(dd)
          };
          return dd.map((dd => dd.type === rd.d.Meta ? dd : {
            ...dd,
            data: xO("data", dd.data, md)
          }))
        }(Od, Rd), md);
        return new eO(dd, hd, Wd, Fd, Xd, Kd)
      }
      constructor(dd, Od, md, Wd, Fd, Rd) {
        var Xd, Kd, hd, vd;
        this.domClock = md, this.canvasSelectors = Wd, this.videoLayer = Fd, this.replayer = void 0, this.pausedAnimations = new vO, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (Xd = null === (Kd = Od[0]) || void 0 === Kd ? void 0 : Kd.timestamp) && void 0 !== Xd ? Xd : 0, this.lastDomMs = null !== (hd = null === (vd = Od.at(-1)) || void 0 === vd ? void 0 : vd.timestamp) && void 0 !== hd ? hd : 0, this.replayer = new rd.k(Od, {
          root: dd,
          speed: 1,
          skipInactive: !1,
          mouseTail: !1,
          showWarning: !1,
          triggerFocus: !1,
          pauseAnimation: !0,
          plugins: [this.pausedAnimations.plugin],
          insertStyleRules: jO
        }), this.replayer.on("resize", (dd => {
          const {
            width: Od,
            height: md
          } = dd;
          Rd({
            width: Od,
            height: md
          })
        })), this.replayer.on("fullsnapshot-rebuilded", (() => {
          this.invalidateCanvasRect(), this.pausedAnimations.settle(this.replayer)
        }))
      }
      sync(dd, Od) {
        const md = this.domOffsetAt(dd);
        Od ? this.replayer.play(md) : this.replayer.pause(md), this.lastDomCheckMs = performance.now()
      }
      update(dd, Od, md) {
        md - this.lastCanvasRectMs >= 250 && (this.lastCanvasRectMs = md, this.placeVideoOverCanvas()), Od && md - this.lastDomCheckMs >= 500 && (this.lastDomCheckMs = md, this.checkDrift(dd))
      }
      setSpeed(dd) {
        this.replayer.setConfig({
          speed: dd
        })
      }
      invalidateCanvasRect() {
        this.lastCanvasRectMs = -1 / 0
      }
      destroy() {
        this.replayer.destroy()
      }
      domOffsetAt(dd) {
        return Math.max(0, Math.min(this.lastDomMs + 1, this.domClock.toDom(dd)) - this.firstDomMs)
      }
      checkDrift(dd) {
        const Od = this.domOffsetAt(dd);
        Od >= this.lastDomMs - this.firstDomMs || Math.abs(this.replayer.getCurrentTime() - Od) > 400 && this.replayer.play(Od)
      }
      placeVideoOverCanvas() {
        const dd = this.replayer.iframe.contentDocument,
          Od = null === dd ? null : function(dd, Od) {
            for (const md of Od) {
              const Od = dd.querySelector(md);
              if (null !== Od) return Od
            }
            return null
          }(dd, this.canvasSelectors),
          md = this.videoLayer.element;
        null !== Od ? (md.previousSibling !== Od && Od.after(md), md.style.display = "", md.style.left = `${Od.offsetLeft}px`, md.style.top = `${Od.offsetTop}px`, md.style.width = `${Od.offsetWidth}px`, md.style.height = `${Od.offsetHeight}px`) : md.style.display = "none"
      }
    }
    const IO = {
      width: 1280,
      height: 720
    };
    class lO {
      constructor(dd, Od) {
        this.root = dd, this.onViewportChanged = Od, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", dd.appendChild(this.element), this.resizeObserver = new ResizeObserver((() => {
          this.fit()
        })), this.resizeObserver.observe(dd)
      }
      setViewport(dd) {
        var Od;
        null === dd || dd.width <= 0 || dd.height <= 0 || dd.width === (null === (Od = this.viewport) || void 0 === Od ? void 0 : Od.width) && dd.height === this.viewport.height || (this.viewport = dd, this.element.style.width = `${dd.width}px`, this.element.style.height = `${dd.height}px`, this.onViewportChanged(), this.fit())
      }
      destroy() {
        this.resizeObserver.disconnect(), this.element.remove()
      }
      fit() {
        var dd;
        const Od = null !== (dd = this.viewport) && void 0 !== dd ? dd : IO,
          md = this.root.getBoundingClientRect(),
          Wd = Math.min(md.width / Od.width, md.height / Od.height),
          Fd = (md.width - Od.width * Wd) / 2,
          Rd = (md.height - Od.height * Wd) / 2;
        this.element.style.transform = `translate(${Fd}px, ${Rd}px) scale(${Wd})`
      }
    }
    class CO {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Md;
        this.urls = void 0, this.urls = new OO(dd, "video URLs", Od, md)
      }
      reset(dd) {
        this.urls.reset(dd.flatMap((dd => {
          var Od;
          return null !== (Od = function(dd) {
            return "url" in dd ? null === dd.url ? null : {
              sequence: dd.sequence,
              url: dd.url
            } : void 0 === dd.partUrls ? null : {
              sequence: dd.sequence,
              partUrls: dd.partUrls
            }
          }(dd)) && void 0 !== Od ? Od : []
        })))
      }
      get(dd) {
        return this.urls.get(dd)
      }
      update(dd, Od, md) {
        this.urls.request(function(dd, Od, md, Wd) {
          return dd.filter((dd => dd.endMs > Od && dd.startMs < Od + md && Wd(dd.sequence))).map((dd => dd.sequence))
        }(dd, Od, 12e4 * Math.max(1, md), (dd => this.urls.needs(dd))))
      }
      destroy() {
        this.urls.destroy()
      }
    }
    async function ZO(dd, Od, md) {
      const Wd = [];
      let Fd = dd.length,
        Rd = 0;
      return await Promise.all(Array.from({
        length: Math.min(3, dd.length)
      }, (() => (async () => {
        for (; Rd < Fd;) {
          const Kd = Rd++;
          try {
            Wd[Kd] = await Od(dd[Kd], md)
          } catch (Xd) {
            if (md.aborted) throw Xd;
            console.warn(`Replay video part ${Kd} failed to load; playing the parts before it.`, Xd), Fd = Math.min(Fd, Kd)
          }
        }
      })()))), Wd.slice(0, Fd)
    }

    function kO(dd) {
      const Od = [];
      let md = 0;
      for (const Qd of dd) Od.push(md), md += Qd.byteLength;
      let Wd = 0;
      const Fd = md => {
          for (; Od[Wd] > md;) Wd--;
          for (; Wd + 1 < Od.length && Od[Wd + 1] <= md;) Wd++;
          return dd[Wd][md - Od[Wd]]
        },
        Rd = dd => Fd(dd) * 2 ** 24 + 65536 * Fd(dd + 1) + 256 * Fd(dd + 2) + Fd(dd + 3);
      let Xd = 0,
        Kd = !1,
        hd = !1,
        vd = 0;
      for (; Xd + 8 <= md;) {
        const dd = String.fromCharCode(Fd(Xd + 4), Fd(Xd + 5), Fd(Xd + 6), Fd(Xd + 7));
        let Od = Rd(Xd);
        if (1 === Od) {
          if (Xd + 16 > md) break;
          Od = Rd(Xd + 8) * 2 ** 32 + Rd(Xd + 12)
        } else 0 === Od && (Od = md - Xd);
        if (Od < 8 || Xd + Od > md) break;
        Xd += Od, "moov" === dd ? Kd = !0 : "moof" === dd ? hd = !0 : "mdat" === dd && hd ? (hd = !1, vd = Xd) : !hd && vd > 0 && (vd = Xd)
      }
      return Kd && vd > 0 ? vd : null
    }
    async function fO(dd, Od) {
      const md = await fetch(dd, {
        signal: Od
      });
      if (!md.ok) throw new Error(`HTTP ${md.status}`);
      return md.arrayBuffer()
    }
    class MO {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fO,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        this.fetchPart = dd, this.Mt = Od, this.blobs = new Map
      }
      get(dd, Od) {
        const md = dm(dd, Od),
          Wd = this.blobs.get(md);
        return void 0 === Wd ? null : (this.remember(md, Wd), Wd)
      }
      async load(dd, Od, md) {
        const Wd = await ZO(Od, this.fetchPart, md),
          Fd = function(dd) {
            const Od = dd.map((dd => new Uint8Array(dd))),
              md = kO(Od);
            return null === md ? null : new Blob(function(dd, Od) {
              const md = [];
              let Wd = Od;
              for (const Fd of dd) {
                if (Wd <= 0) break;
                md.push(Fd.byteLength <= Wd ? Fd : Fd.subarray(0, Wd)), Wd -= Fd.byteLength
              }
              return md
            }(Od, md), {
              type: "video/mp4"
            })
          }(Wd);
        return null !== Fd && Wd.length === Od.length && this.remember(dm(dd, Od.length), Fd), Fd
      }
      remember(dd, Od) {
        this.blobs.delete(dd), this.blobs.set(dd, Od), this.blobs.size > this.Mt && this.blobs.delete(this.blobs.keys().next().value)
      }
    }

    function dm(dd, Od) {
      return `${dd}/${Od}`
    }

    function Om(dd) {
      const Od = function(dd) {
        return dd.map(((Od, md) => {
          const Wd = dd[md + 1];
          return void 0 === Wd ? Od.endMs : Math.min(Od.endMs, Wd.startMs)
        }))
      }(dd);
      return dd.map(((dd, md) => ({
        ...dd,
        endMs: Od[md]
      }))).filter((dd => dd.endMs > dd.startMs))
    }

    function mm(dd, Od) {
      let md = 0,
        Wd = dd.length - 1;
      for (; md <= Wd;) {
        const Fd = md + Wd >> 1,
          Rd = dd[Fd];
        if (Od < Rd.startMs) Wd = Fd - 1;
        else {
          if (!(Od >= Rd.endMs)) return Rd;
          md = Fd + 1
        }
      }
      return null
    }

    function Wm(dd, Od) {
      return (Od - dd.startMs) / 1e3
    }

    function Fm(dd) {
      return Math.max(.4, .1 * dd)
    }

    function Rm(dd) {
      return Math.max(.0625, Math.min(16, dd))
    }
    class Xm {
      constructor(dd, Od, md, Wd, Fd, Rd, Xd) {
        this.still = Od, this.clock = md, this.frameDurationS = Wd, this.wallNowMs = Fd, this.onLoadFailed = Xd, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
          frames: 0,
          sumAbsDriftMs: 0,
          maxAbsDriftMs: 0,
          withinOneFrame: 0,
          seeks: 0
        }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new MO, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = Om(dd), this.segmentUrls = new CO(Rd), this.segmentUrls.reset(this.segments), this.element = document.createElement("div"), this.element.className = "brv-video-layer", this.stillImage = document.createElement("img"), this.stillImage.className = "brv-still", this.stillImage.alt = "", this.stillImage.addEventListener("error", (() => {
          console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
        })), this.element.appendChild(this.stillImage)
      }
      get visible() {
        return null !== this.shown || this.stillShown
      }
      getVideoSizeAt(dd) {
        var Od, md;
        const Wd = null !== (Od = null !== (md = mm(this.segments, dd)) && void 0 !== md ? md : this.segments.find((Od => Od.startMs > dd))) && void 0 !== Od ? Od : this.segments.at(-1);
        return void 0 === Wd ? null : {
          width: Wd.width,
          height: Wd.height
        }
      }
      failedAt(dd) {
        const Od = mm(this.segments, dd);
        return null !== Od && this.failed.has(Od.sequence)
      }
      replaceSegments(dd, Od) {
        for (const md of this.slots.values()) this.release(md);
        this.slots.clear(), this.failed.clear(), this.segments = Om(dd), this.segmentUrls.reset(this.segments), this.still = Od
      }
      update(dd) {
        var Od, md;
        this.segmentUrls.update(this.segments, dd, this.clock.speed);
        const Wd = mm(this.segments, dd),
          Fd = function(dd, Od) {
            const md = dd.find((dd => dd.startMs > Od));
            return void 0 === md ? null : md.startMs - Od <= ("parts" in md ? 15e3 : 8e3) ? md : null
          }(this.segments, dd);
        this.evictExcept([Wd, Fd, null !== (Od = null === (md = this.shown) || void 0 === md ? void 0 : md.segment) && void 0 !== Od ? Od : null]), null !== Fd && this.getSlot(Fd), this.showStill(null === Wd ? function(dd, Od, md) {
          if (null === Od) return null;
          const Wd = dd.at(-1);
          return void 0 === Wd ? md >= Od.atMs - 1e4 ? Od : null : md >= Wd.endMs && Math.abs(Od.atMs - Wd.endMs) <= 1e4 ? Od : null
        }(this.segments, this.still, dd) : null);
        const Rd = null === Wd ? null : this.getSlot(Wd);
        if (null !== Rd) {
          this.sync(Rd, Wm(Rd.segment, dd)), Rd.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !Rd.video.seeking && this.show(Rd);
          for (const dd of this.slots.values()) dd === Rd || dd.video.paused || dd.video.pause()
        } else {
          null === Wd && this.show(null);
          for (const dd of this.slots.values()) dd.video.pause()
        }
      }
      getSyncStats() {
        const {
          frames: dd,
          sumAbsDriftMs: Od,
          maxAbsDriftMs: md,
          withinOneFrame: Wd,
          seeks: Fd
        } = this.stats;
        return {
          frames: dd,
          meanAbsDriftMs: 0 === dd ? 0 : Od / dd,
          maxAbsDriftMs: md,
          withinOneFrame: 0 === dd ? 1 : Wd / dd,
          seeks: Fd
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
        for (const dd of this.slots.values()) this.release(dd);
        this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
      }
      sync(dd, Od) {
        const {
          video: md
        } = dd;
        if (md.seeking) return;
        const {
          playing: Wd,
          speed: Fd
        } = this.clock, Rd = Wd && Fd < 16, Xd = function(dd) {
          let {
            targetS: Od,
            currentS: md,
            playing: Wd,
            speed: Fd,
            frameDurationS: Rd
          } = dd;
          const Xd = md - Od;
          if (!Wd) return Math.abs(Xd) > Rd / 2 ? {
            kind: "seek",
            mediaTimeS: Od
          } : {
            kind: "none"
          };
          if (Math.abs(Xd) > Fm(Fd)) return {
            kind: "seek",
            mediaTimeS: Od
          };
          if (Math.abs(Xd) < Rd / 4) return {
            kind: "rate",
            playbackRate: Rm(Fd)
          };
          const Kd = Fd - Xd / .5;
          return {
            kind: "rate",
            playbackRate: Rm(Math.max(.5 * Fd, Math.min(1.5 * Fd, Kd)))
          }
        }({
          targetS: Od,
          currentS: md.currentTime,
          playing: Rd,
          speed: Fd,
          frameDurationS: this.frameDurationS
        });
        if ("seek" === Xd.kind) {
          const Od = this.seekLatencyS * Fd,
            Kd = Wd ? Rd ? Math.min(Od, Fm(Fd) / 2) : Od : 0;
          dd.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, Rd && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), md.currentTime = Math.max(0, Xd.mediaTimeS + Kd)
        } else "rate" === Xd.kind && Math.abs(md.playbackRate - Xd.playbackRate) > .001 && (md.playbackRate = Xd.playbackRate);
        Rd && md.paused && md.currentTime < md.duration ? (md.playbackRate = Rm(Fd), md.play().catch((dd => {
          console.warn("Replay video refused to play.", dd)
        }))) : Rd || md.paused || md.pause()
      }
      getSlot(dd) {
        const Od = this.slots.get(dd.sequence);
        if (void 0 !== Od) return Od;
        const md = "parts" in dd ? this.blobs.get(dd.sequence, dd.parts) : null,
          Wd = null === md ? this.segmentUrls.get(dd.sequence) : null;
        if ("pending" === Wd) return null;
        if ("failed" === Wd) return this.failed.has(dd.sequence) || (console.error(`Replay video segment ${dd.sequence} has no URLs to load.`), this.markFailed(dd)), null;
        const Fd = document.createElement("video");
        Fd.className = "brv-video", Fd.muted = !0, Fd.playsInline = !0, Fd.preload = "auto", Fd.disablePictureInPicture = !0;
        const Rd = {
          segment: dd,
          video: Fd,
          seekStartedWallMs: null,
          objectUrl: null,
          abort: new AbortController
        };
        return null !== md ? this.playBlob(Rd, md) : null !== Wd && ("url" in Wd ? Fd.src = Wd.url : this.loadParts(Rd, Wd.partUrls)), Fd.addEventListener("seeked", (() => {
          if (null !== Rd.seekStartedWallMs) {
            const dd = (this.wallNowMs() - Rd.seekStartedWallMs) / 1e3;
            this.seekLatencyS = .7 * this.seekLatencyS + .3 * Math.min(1, dd), Rd.seekStartedWallMs = null
          }
        })), Fd.addEventListener("loadeddata", (() => {
          this.slots.get(dd.sequence) === Rd && this.failed.delete(dd.sequence)
        })), Fd.addEventListener("error", (() => {
          this.slots.get(dd.sequence) === Rd && (console.error(`Replay video segment ${dd.sequence} failed to load.`, Fd.error), this.markFailed(dd))
        })), this.watchFrames(Rd), this.element.appendChild(Fd), this.slots.set(dd.sequence, Rd), Rd
      }
      loadParts(dd, Od) {
        this.blobs.load(dd.segment.sequence, Od, dd.abort.signal).then((Od => {
          if (this.slots.get(dd.segment.sequence) === dd) return null === Od ? (console.error(`Replay video segment ${dd.segment.sequence} has no playable parts.`), void this.markFailed(dd.segment)) : void this.playBlob(dd, Od)
        }), (Od => {
          this.slots.get(dd.segment.sequence) === dd && (console.error(`Replay video segment ${dd.segment.sequence} failed to load.`, Od), this.markFailed(dd.segment))
        }))
      }
      playBlob(dd, Od) {
        dd.objectUrl = URL.createObjectURL(Od), dd.video.src = dd.objectUrl
      }
      markFailed(dd) {
        this.failed.add(dd.sequence), this.onLoadFailed()
      }
      showStill(dd) {
        const Od = null !== dd && dd.url !== this.failedStillUrl ? dd : null;
        null !== Od && this.stillImage.getAttribute("src") !== Od.url && (this.stillImage.src = Od.url);
        const md = null !== Od && this.stillImage.complete && this.stillImage.naturalWidth > 0;
        md !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", md), this.stillShown = md)
      }
      show(dd) {
        var Od;
        this.shown !== dd && (null === (Od = this.shown) || void 0 === Od || Od.video.classList.remove("brv-video-shown"), null === dd || void 0 === dd || dd.video.classList.add("brv-video-shown"), this.shown = dd)
      }
      evictExcept(dd) {
        for (const [Od, md] of this.slots) dd.includes(md.segment) || (this.release(md), this.slots.delete(Od))
      }
      release(dd) {
        this.shown === dd && (this.shown = null), dd.abort.abort(), dd.video.pause(), dd.video.removeAttribute("src"), dd.video.load(), dd.video.remove(), null !== dd.objectUrl && URL.revokeObjectURL(dd.objectUrl)
      }
      watchFrames(dd) {
        const {
          video: Od
        } = dd;
        if ("function" !== typeof Od.requestVideoFrameCallback) return;
        const md = (Wd, Fd) => {
          if (!this.slots.has(dd.segment.sequence)) return;
          const Rd = Od.ownerDocument.defaultView,
            Xd = null === Rd ? 0 : Rd.performance.timeOrigin - performance.timeOrigin,
            Kd = Wm(dd.segment, this.clock.timeAtWall(Fd.expectedDisplayTime + Xd)),
            hd = this.lastPresented,
            vd = this.wallNowMs() - this.lastSeekWallMs > 1e3;
          if (null !== hd && hd.slot === dd && vd && this.clock.playing && Fd.mediaTime > hd.mediaTimeS) {
            const dd = Math.abs(function(dd, Od, md) {
              return md < dd ? 1e3 * (md - dd) : 1e3 * Math.max(0, md - Od)
            }(hd.mediaTimeS, Fd.mediaTime, hd.clockMediaTimeS));
            this.stats.frames++, this.stats.sumAbsDriftMs += dd, this.stats.maxAbsDriftMs = Math.max(this.stats.maxAbsDriftMs, dd), dd <= 1e3 * this.frameDurationS && this.stats.withinOneFrame++
          }
          this.lastPresented = {
            slot: dd,
            mediaTimeS: Fd.mediaTime,
            clockMediaTimeS: Kd
          }, Od.requestVideoFrameCallback(md)
        };
        Od.requestVideoFrameCallback(md)
      }
    }
    const Km = 1 / 30,
      hm = ["#noa-canvas", "#noa-container"];
    class Qm {
      constructor(dd, Od) {
        var md, Wd, Fd, Rd, Xd, Kd, hd, vd;
        let Qd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0, this.lastState = null, this.urlRefresher = void 0, this.Et = () => {
          this.frame = requestAnimationFrame(this.Et);
          const dd = performance.now();
          this.applySkips();
          const Od = this.clock.timeMs();
          this.annotations.update(Od, this.clock.speed), this.videoLayer.update(Od), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(Od)) : this.domLayer.update(Od, this.clock.playing, dd);
          const md = this.getState();
          (null === this.lastState || function(dd, Od) {
            return Object.keys(dd).some((md => "positionMs" === md ? Math.floor(dd.positionMs / 1e3) !== Math.floor(Od.positionMs / 1e3) : dd[md] !== Od[md]))
          }(md, this.lastState)) && this.emitState(md)
        };
        const td = () => performance.now();
        this.lowFps = null !== (md = Qd.lowFps) && void 0 !== md ? md : 25;
        const od = new jd(Od.domEvents);
        this.timeline = new nd(Od.windows.length > 0 ? Od.windows : [Pd(Od, od)]), this.chapters = [...Od.chapters].sort(((dd, Od) => dd.startMs - Od.startMs)), this.annotations = new KO(Od, od, this.timeline, {
          inactivityThresholdMs: null !== (Wd = Qd.inactivityThresholdMs) && void 0 !== Wd ? Wd : 1e4,
          loadTelemetryChunk: null !== (Fd = Qd.loadTelemetryChunk) && void 0 !== Fd ? Fd : null,
          telemetryUrls: null !== (Rd = Qd.telemetryUrls) && void 0 !== Rd ? Rd : null,
          onTelemetryFailed: () => {
            this.urlRefresher.request()
          }
        }), this.urlRefresher = new dO(null !== (Xd = Qd.refreshUrls) && void 0 !== Xd ? Xd : null, (dd => {
          this.videoLayer.replaceSegments(Ld(dd.videoSegments), dd.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(dd.telemetryChunks)
        })), this.clock = new zd(this.timeline.startMs, td), this.stage = new lO(dd, (() => {
          var dd;
          null === (dd = this.domLayer) || void 0 === dd || dd.invalidateCanvasRect()
        })), this.videoLayer = new Xm(Ld(Od.videoSegments), Od.still, this.clock, Km, td, null !== (Kd = Qd.segmentUrls) && void 0 !== Kd ? Kd : null, (() => {
          this.urlRefresher.request()
        })), this.domLayer = eO.create(this.stage.element, Od.domEvents, Od.recordedPointer, od, null !== (hd = Qd.canvasSelectors) && void 0 !== hd ? hd : hm, null !== (vd = Qd.resourceHosts) && void 0 !== vd ? vd : [], this.videoLayer, (dd => {
          this.stage.setViewport(dd)
        })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.Et()
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
      subscribe(dd) {
        return this.listeners.add(dd), dd(this.getState()), () => {
          this.listeners.delete(dd)
        }
      }
      getState() {
        const dd = this.clock.timeMs();
        return {
          positionMs: this.timeline.toPosition(dd),
          durationMs: this.timeline.durationMs,
          playing: this.clock.playing,
          speed: this.clock.speed,
          skipInactive: this.skipInactive,
          ended: this.ended,
          notice: this.getNotice(dd),
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
      seekToPosition(dd) {
        this.seekToTime(this.timeline.toTime(dd))
      }
      seekBy(dd) {
        this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + dd)
      }
      stepFrame(dd) {
        this.clock.pause(), this.seekBy(dd * Km * 1e3)
      }
      setSpeed(dd) {
        var Od;
        this.clock.setSpeed(dd), null === (Od = this.domLayer) || void 0 === Od || Od.setSpeed(dd), this.emit()
      }
      setSkipInactive(dd) {
        this.skipInactive = dd, this.emit()
      }
      goToChapter(dd) {
        const Od = this.clock.timeMs(),
          md = 1 === dd ? this.chapters.find((dd => dd.startMs > Od + 500)) : this.chapters.findLast((dd => dd.startMs < Od - 2e3));
        void 0 !== md && this.seekToTime(md.startMs)
      }
      destroy() {
        var dd;
        cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (dd = this.domLayer) || void 0 === dd || dd.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
      }
      getNotice(dd) {
        return this.annotations.isHiddenAt(dd) ? "tabHidden" : this.videoLayer.failedAt(dd) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(dd) ? "videoGap" : null : "nothingToShow"
      }
      applySkips() {
        var dd;
        if (!this.clock.playing) return;
        const Od = this.clock.timeMs(),
          md = this.timeline.nextPlayableTime(Od);
        if (null === md) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
        const Wd = this.skipInactive ? this.annotations.inactiveRanges.find((dd => md >= dd.startMs && md < dd.endMs - 500)) : void 0,
          Fd = null !== (dd = null === Wd || void 0 === Wd ? void 0 : Wd.endMs) && void 0 !== dd ? dd : md;
        Fd !== Od && this.seekToTime(Fd)
      }
      seekToTime(dd) {
        this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, dd))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
      }
      syncDom() {
        var dd;
        null === (dd = this.domLayer) || void 0 === dd || dd.sync(this.clock.timeMs(), this.clock.playing)
      }
      emit() {
        this.emitState(this.getState())
      }
      emitState(dd) {
        this.lastState = dd;
        for (const Od of this.listeners) Od(dd)
      }
    }
    const tm = 2500,
      om = 5;

    function Nm(dd) {
      let {
        label: Od,
        jK: md,
        wide: Wd = !1
      } = dd;
      return (0, yd.jsx)("span", {
        className: `brv-key${md?" brv-key-held":""}${Wd?" brv-key-wide":""}`,
        children: Od
      })
    }
    const qm = [{
      action: "primary",
      className: "brv-mouse-left"
    }, {
      action: "middle",
      className: "brv-mouse-middle"
    }, {
      action: "secondary",
      className: "brv-mouse-right"
    }];

    function Hm(dd) {
      const [Od, md] = (0, Wd.useState)({
        bits: 0,
        presses: []
      });
      return (0, Wd.useEffect)((() => {
        let Od = 0,
          Wd = "";
        const Fd = () => {
          Od = requestAnimationFrame(Fd);
          const Rd = dd.timeline.toTime(dd.getPositionMs()),
            {
              actions: Xd,
              keys: Kd
            } = dd.input,
            od = function(dd, Od) {
              const md = vd(dd, Od);
              return md < 0 ? 0 : dd[md].bits
            }(Xd, Rd),
            Nd = function(dd, Od, md, Wd) {
              const Fd = Math.floor(Od / md) * md,
                Rd = new Map;
              for (let Xd = vd(dd, Fd + md); Xd >= 0 && dd[Xd].atMs >= Fd; Xd--) {
                const Od = dd[Xd];
                if (!Od.down || !Od.inPlay || Od.atMs === Fd + md) continue;
                const Wd = {
                    code: Od.code,
                    unbound: hd(Od)
                  },
                  Kd = Qd(Wd),
                  vd = Rd.get(Kd);
                void 0 === vd ? Rd.set(Kd, {
                  key: Wd,
                  presses: 1
                }) : vd.presses++
              }
              return [...Rd].sort(((dd, Od) => td([dd[0], dd[1].presses], [Od[0], Od[1].presses]))).slice(0, Wd).map((dd => {
                let [, {
                  key: Od
                }] = dd;
                return Od
              }))
            }(Kd, Rd, tm, om),
            qd = `${od};${Nd.map((dd=>Qd(dd))).join(",")}`;
          qd !== Wd && (Wd = qd, md({
            bits: od,
            presses: Nd
          }))
        };
        return Fd(), () => {
          cancelAnimationFrame(Od)
        }
      }), [dd]), Od
    }

    function ym(dd) {
      let {
        controller: Od,
        labels: md
      } = dd;
      const {
        bits: Wd,
        presses: Fd
      } = Hm(Od), Rd = dd => function(dd, Od) {
        return 0 !== (dd & 1 << Xd.indexOf(Od))
      }(Wd, dd);
      return (0, yd.jsxs)("div", {
        className: "brv-input",
        "aria-hidden": !0,
        children: [(0, yd.jsx)("div", {
          className: "brv-input-slot",
          children: Fd.map((dd => {
            const Od = Nd(dd.code);
            return (0, yd.jsx)("span", {
              className: dd.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
              children: dd.unbound ? md.unboundKey(Od) : Od
            }, Qd(dd))
          }))
        }), (0, yd.jsxs)("div", {
          className: "brv-input-devices",
          children: [(0, yd.jsxs)("div", {
            className: "brv-keys",
            children: [(0, yd.jsx)("div", {
              className: "brv-keys-row",
              children: (0, yd.jsx)(Nm, {
                label: "W",
                jK: Rd("forward")
              })
            }), (0, yd.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, yd.jsx)(Nm, {
                label: "A",
                jK: Rd("left")
              }), (0, yd.jsx)(Nm, {
                label: "S",
                jK: Rd("backward")
              }), (0, yd.jsx)(Nm, {
                label: "D",
                jK: Rd("right")
              })]
            }), (0, yd.jsxs)("div", {
              className: "brv-keys-row",
              children: [(0, yd.jsx)(Nm, {
                label: "Shift",
                jK: Rd("sprint")
              }), (0, yd.jsx)(Nm, {
                label: "Ctrl",
                jK: Rd("crouch")
              }), (0, yd.jsx)(Nm, {
                label: "Space",
                jK: Rd("jump"),
                wide: !0
              })]
            })]
          }), (0, yd.jsx)("div", {
            className: "brv-mouse",
            children: qm.map((dd => {
              let {
                action: Od,
                className: md
              } = dd;
              return (0, yd.jsx)("span", {
                className: `${md}${Rd(Od)?" brv-key-held":""}`
              }, Od)
            }))
          })]
        })]
      })
    }
    const bm = {
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
      fps: dd => `${dd} FPS`,
      keys: "Keys",
      unboundKey: dd => `${dd} does nothing here`,
      unboundKeys: dd => `${dd} did nothing`
    };

    function Tm(dd) {
      let {
        path: Od
      } = dd;
      return (0, yd.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": !0,
        children: (0, yd.jsx)("path", {
          d: Od
        })
      })
    }
    const pm = {
      play: "M7 4v16l13-8z",
      pause: "M6 4h4v16H6zm8 0h4v16h-4z",
      fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
    };

    function Ym(dd) {
      let {
        label: Od,
        onClick: md,
        children: Wd
      } = dd;
      return (0, yd.jsx)("button", {
        type: "button",
        className: "brv-button",
        title: Od,
        "aria-label": Od,
        onClick: md,
        children: Wd
      })
    }

    function gm(dd) {
      if (!document.fullscreenEnabled) return;
      (document.fullscreenElement === dd ? document.exitFullscreen() : dd.requestFullscreen()).catch((dd => {
        console.warn("Couldn't toggle fullscreen.", dd)
      }))
    }

    function wm(dd) {
      let {
        data: Od,
        className: md,
        autoPlay: Fd = !1,
        options: Rd,
        labels: Xd = bm,
        onController: Kd
      } = dd;
      const hd = (0, Wd.useRef)(null),
        vd = (0, Wd.useRef)(null),
        Qd = (0, Wd.useRef)(Rd);
      Qd.current = Rd;
      const td = (0, Wd.useRef)(Fd);
      td.current = Fd;
      const od = (0, Wd.useRef)(Kd);
      od.current = Kd;
      const [Nd, qd] = (0, Wd.useState)(null), [Hd, bd] = (0, Wd.useState)(null), [pd, Yd] = (0, Wd.useState)(!0), gd = () => {
        Yd((dd => !dd))
      };
      (0, Wd.useEffect)((() => {
        var dd;
        ! function(dd) {
          if (null !== dd.getElementById(cO)) return;
          const Od = dd.createElement("style");
          Od.id = cO, Od.textContent = DO, dd.head.appendChild(Od)
        }(document);
        const md = new Qm(hd.current, Od, Qd.current),
          Wd = md.subscribe(bd);
        return qd(md), null === (dd = od.current) || void 0 === dd || dd.call(od, md), td.current && md.play(), vd.current.focus({
          preventScroll: !0
        }), () => {
          var dd;
          Wd(), md.destroy(), null === (dd = od.current) || void 0 === dd || dd.call(od, null)
        }
      }), [Od]);
      const Ed = null !== Nd && Nd.input.inputRecorded,
        Jd = null === Nd || null === Hd ? void 0 : Nd.chapters.findLast((dd => Nd.timeline.toPosition(dd.startMs) <= Hd.positionMs));
      return (0, yd.jsxs)("div", {
        ref: vd,
        className: void 0 === md ? "brv-player" : `brv-player ${md}`,
        tabIndex: 0,
        onKeyDown: dd => {
          if (dd.target instanceof HTMLSelectElement) return;
          if (" " === dd.key && dd.target !== dd.currentTarget && dd.target instanceof HTMLButtonElement) return;
          const Od = function(dd) {
            let {
              key: Od,
              shiftKey: md,
              ctrlKey: Wd,
              metaKey: Fd,
              altKey: Rd
            } = dd;
            if (Wd || Fd || Rd) return null;
            const Xd = Number(Od) - 1;
            if (/^[1-9]$/.test(Od) && Xd < Ad.length) return {
              type: "setSpeed",
              speed: Ad[Xd]
            };
            switch (Od.toLowerCase()) {
              case " ":
              case "k":
                return {
                  type: "togglePlay"
                };
              case "arrowleft":
                return {
                  type: "seekBy", deltaMs: md ? -1e3 : -5e3
                };
              case "arrowright":
                return {
                  type: "seekBy", deltaMs: md ? 1e3 : 5e3
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
                  type: "chapter", direction: md ? -1 : 1
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
          }(dd);
          null !== Od && null !== Nd && null !== Hd && (dd.preventDefault(), function(dd, Od, md, Wd) {
            switch (Od.type) {
              case "togglePlay":
                dd.togglePlay();
                break;
              case "seekBy":
                dd.seekBy(Od.deltaMs);
                break;
              case "stepFrame":
                dd.stepFrame(Od.direction);
                break;
              case "setSpeed":
                dd.setSpeed(Od.speed);
                break;
              case "chapter":
                dd.goToChapter(Od.direction);
                break;
              case "toggleSkipInactive":
                dd.setSkipInactive(!md.skipInactive);
                break;
              case "toggleFullscreen":
                gm(Wd.root);
                break;
              case "toggleKeys":
                Wd.toggleKeys()
            }
          }(Nd, Od, Hd, {
            root: dd.currentTarget,
            toggleKeys: gd
          }))
        },
        children: [(0, yd.jsxs)("div", {
          ref: hd,
          className: "brv-viewport",
          onClick: () => {
            null === Nd || void 0 === Nd || Nd.togglePlay()
          },
          children: [null !== Hd && null !== Hd.notice && (0, yd.jsx)("div", {
            className: "brv-overlay",
            children: Xd[Hd.notice]
          }), null !== Nd && pd && Ed && (0, yd.jsx)(ym, {
            controller: Nd,
            labels: Xd
          })]
        }), null !== Nd && null !== Hd && (0, yd.jsxs)(yd.Fragment, {
          children: [(0, yd.jsx)(wd, {
            controller: Nd,
            frames: Nd.frames,
            input: Nd.input,
            markers: Nd.markers,
            inactiveRanges: Nd.inactiveRanges,
            videoGaps: Nd.videoGaps,
            labels: Xd
          }), Nd.chapters.length > 1 && (0, yd.jsx)("div", {
            className: "brv-chapters",
            children: Nd.chapters.map((dd => (0, yd.jsxs)("button", {
              type: "button",
              className: dd === Jd ? "brv-chapter brv-chapter-current" : "brv-chapter",
              onClick: () => {
                Nd.seekToPosition(Nd.timeline.toPosition(dd.startMs))
              },
              children: [dd.label, " \xb7 ", Td(dd.endMs - dd.startMs)]
            }, dd.startMs)))
          }), (0, yd.jsxs)("div", {
            className: "brv-controls",
            children: [(0, yd.jsx)(Ym, {
              label: Hd.playing ? Xd.pause : Xd.play,
              onClick: () => {
                Nd.togglePlay()
              },
              children: (0, yd.jsx)(Tm, {
                path: Hd.playing ? pm.pause : pm.play
              })
            }), (0, yd.jsxs)("span", {
              className: "brv-time",
              children: [Td(Hd.positionMs), " / ", Td(Hd.durationMs)]
            }), (0, yd.jsx)("select", {
              className: "brv-speed",
              value: Hd.speed,
              title: `${Xd.speed} (1-${Ad.length})`,
              "aria-label": Xd.speed,
              onChange: dd => {
                Nd.setSpeed(Number(dd.target.value))
              },
              children: Ad.map((dd => (0, yd.jsxs)("option", {
                value: dd,
                children: [dd, "x"]
              }, dd)))
            }), (0, yd.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": Hd.skipInactive,
              title: `${Xd.skipInactive} (S)`,
              onClick: () => {
                Nd.setSkipInactive(!Hd.skipInactive)
              },
              children: [(0, yd.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), Xd.skipInactive]
            }), Ed && (0, yd.jsxs)("button", {
              type: "button",
              role: "switch",
              className: "brv-switch",
              "aria-checked": pd,
              title: `${Xd.keys} (I)`,
              onClick: gd,
              children: [(0, yd.jsx)("span", {
                className: "brv-switch-track",
                "aria-hidden": !0
              }), Xd.keys]
            }), document.fullscreenEnabled && (0, yd.jsx)(Ym, {
              label: Xd.fullscreen,
              onClick: () => {
                gm(vd.current)
              },
              children: (0, yd.jsx)(Tm, {
                path: pm.fullscreen
              })
            })]
          })]
        })]
      })
    }
    var am = md(5989);
    const Em = ["bloxd.io", window.location.hostname];

    function Jm(dd) {
      let {
        gameAnalyticsId: Od,
        recordingId: md,
        userContext: Fd,
        autoPlay: Rd
      } = dd;
      const {
        t: Xd
      } = (0, Jd.G)(), [Kd, hd] = (0, Wd.useState)({
        status: "loading"
      }), [vd, Qd] = (0, Wd.useState)(0), td = (0, Wd.useMemo)((() => function(dd) {
        return {
          play: dd("studio:replayPlay"),
          pause: dd("studio:replayPause"),
          speed: dd("studio:replaySpeed"),
          skipInactive: dd("studio:replaySkipIdle"),
          fullscreen: dd("studio:replayFullscreen"),
          tabHidden: dd("studio:replayTabHidden"),
          videoFailed: dd("studio:replayVideoFailed"),
          nothingToShow: dd("studio:replayNothingToShow"),
          videoGap: dd("studio:replayVideoGap"),
          error: dd("general:error"),
          graphicsCrash: dd("studio:replayMarkerGraphicsCrash"),
          death: dd("studio:replayMarkerDeath"),
          fps: Od => dd("studio:replayFps", {
            fps: Od
          }),
          keys: dd("studio:replayKeys"),
          unboundKey: Od => dd("studio:replayUnboundKey", {
            key: Od
          }),
          unboundKeys: Od => dd("studio:replayUnboundKeys", {
            keys: Od
          })
        }
      }(Xd)), [Xd]), od = (0, Wd.useMemo)((() => ({
        resourceHosts: Em,
        loadTelemetryChunk: sd.C,
        refreshUrls: async () => (0, sd.t)(await am.b.getReplay(Fd, Od, md)),
        segmentUrls: {
          load: async dd => (await am.b.getReplaySegmentUrls(Fd, Od, md, dd, [])).videoSegments,
          maxSequences: Vd.b
        },
        telemetryUrls: {
          load: async dd => (await am.b.getReplaySegmentUrls(Fd, Od, md, [], dd)).telemetrySegments,
          maxSequences: Vd.i
        }
      })), [Od, md]);
      return (0, Wd.useEffect)((() => {
        let dd = !1;
        return hd({
          status: "loading"
        }), (0, sd.E)({
          getReplay: () => am.b.getReplay(Fd, Od, md),
          loadDomEvents: sd.A,
          onPreparing: () => {
            hd({
              status: "preparing"
            })
          },
          wait: dd => new Promise((Od => {
            setTimeout(Od, dd)
          })),
          isCancelled: () => dd
        }).then((Od => {
          if (!dd && null !== Od) {
            const dd = (0, sd.x)(Od.replay, Od.domEvents, (dd => Xd("studio:replayVisit", {
              number: dd
            })));
            hd({
              status: "loaded",
              value: dd
            })
          }
        })).catch((Od => {
          console.error("Failed to load studio replay", Od), dd || hd({
            status: "error",
            message: (0, sd.m)(Od, Xd("studio:replayLoadFailed"))
          })
        })), () => {
          dd = !0
        }
      }), [Od, md, vd]), "loading" === Kd.status ? (0, yd.jsx)("div", {
        className: "StudioReplaysMessage",
        children: (0, yd.jsx)(xd.c, {})
      }) : "preparing" === Kd.status ? (0, yd.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [(0, yd.jsx)(xd.c, {}), Xd("studio:replayPreparing")]
      }) : "error" === Kd.status ? (0, yd.jsxs)("div", {
        className: "StudioReplaysMessage",
        children: [Kd.message, (0, yd.jsx)(Bd.S, {
          onClick: () => {
            Qd((dd => dd + 1))
          },
          children: Xd("general:tryAgain")
        })]
      }) : (0, yd.jsx)(wm, {
        className: "StudioReplayPlayer",
        data: Kd.value,
        labels: td,
        options: od,
        autoPlay: Rd || vd > 0
      })
    }

    function Um(dd) {
      let {
        onPlay: Od
      } = dd;
      const {
        t: md
      } = (0, Jd.G)();
      return (0, yd.jsx)("button", {
        type: "button",
        className: "StudioReplayPlaceholder",
        "aria-label": md("general:play"),
        onClick: Od,
        children: (0, yd.jsx)("span", {
          className: "StudioReplayPlaceholderPlay",
          children: (0, yd.jsx)(Sd.c, {
            name: "play"
          })
        })
      })
    }
    const xm = sd.S.replay,
      Bm = sd.S.filters,
      Sm = sd.S.endedAt,
      sm = {
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
      um = {
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

    function Vm(dd) {
      let {
        item: Od,
        selected: md,
        onSelect: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Jd.G)(), Xd = (0, sd.q)(Od);
      return (0, yd.jsxs)("button", {
        type: "button",
        className: Rd()("StudioReplayListItem", {
          StudioReplayListItemSelected: md
        }),
        onClick: Wd,
        children: [(0, yd.jsxs)("div", {
          className: "StudioReplayListItemTop",
          children: [(0, yd.jsx)("span", {
            children: (0, sd.k)(Od.startedAtMs)
          }), (0, yd.jsx)("span", {
            className: "StudioReplayListItemDuration",
            children: Td(Od.inGameDurationMs)
          })]
        }), Xd.length > 0 && (0, yd.jsx)("div", {
          className: "StudioReplayListItemTags",
          children: Xd.map((dd => (0, yd.jsx)("span", {
            className: Rd()("StudioReplayTag", `StudioReplayTag-${dd}`),
            children: Fd(um[dd])
          }, dd)))
        })]
      })
    }

    function im(dd) {
      let {
        gameAnalyticsId: Od,
        userContext: md,
        availability: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Jd.G)();
      return "on" === Wd ? (0, yd.jsx)(Am, {
        gameAnalyticsId: Od,
        userContext: md
      }) : "failed" === Wd ? (0, yd.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, yd.jsx)(Sd.c, {
          name: "face-dizzy"
        }), Fd("studio:replaysStartFailed"), (0, yd.jsx)(Bd.S, {
          onClick: () => {
            Ed.c.startNow()
          },
          children: Fd("general:tryAgain")
        })]
      }) : (0, yd.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, yd.jsx)(xd.c, {})
      })
    }

    function Am(dd) {
      var Od, md;
      let {
        gameAnalyticsId: Fd,
        userContext: Xd
      } = dd;
      const {
        t: Kd
      } = (0, Jd.G)(), hd = function(dd, Od) {
        const {
          t: md
        } = (0, Jd.G)(), [Fd, Rd] = (0, Wd.useState)({
          status: "loading"
        });
        return (0, Wd.useEffect)((() => {
          let Wd = !1;
          return Rd({
            status: "loading"
          }), am.b.listReplays(Od, dd).then((dd => {
            Wd || Rd({
              status: "loaded",
              value: dd
            })
          })).catch((dd => {
            console.error("Failed to list studio replays", dd), Wd || Rd({
              status: "error",
              message: (0, sd.m)(dd, md("studio:replaysLoadFailed"))
            })
          })), () => {
            Wd = !0
          }
        }), [dd]), Fd
      }(Fd, Xd), [vd, Qd] = (0, Ud.k)(), td = (0, sd.M)(vd.get(Bm)), od = (0, sd.I)(vd.get(Sm)), Nd = vd.get(xm), qd = "loaded" === hd.status ? (0, sd.b)(hd.value.recordings, td, od) : [], Hd = "loaded" === hd.status ? (0, sd.T)(hd.value.recordings, qd, Nd) : [], bd = null !== (Od = null !== Nd && void 0 !== Nd ? Nd : null === (md = Hd[0]) || void 0 === md ? void 0 : md.recordingId) && void 0 !== Od ? Od : null, [Td, pd] = (0, Wd.useState)(Nd), [Yd, gd] = (0, Wd.useState)(!1), wd = (0, Wd.useRef)(null), Ed = (0, Wd.useRef)(null !== Nd), Vd = (0, Wd.useRef)(null);

      function Ad(dd) {
        dd === Td && dd === bd || (Vd.current = null, Ed.current = !0, gd(!0), pd(dd), Qd((Od => {
          (0, Ud.g)(Od, xm, dd)
        }), {
          push: !0
        }))
      }

      function rd(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bd !== Td && (Vd.current = bd), Qd((md => {
          (0, Ud.g)(md, xm, bd), (0, Ud.g)(md, Bm, (0, sd.g)(dd)), Od && (0, Ud.g)(md, Sm, null)
        }))
      }
      if ((0, Wd.useEffect)((() => {
          null !== Nd && Nd !== Vd.current && pd(Nd)
        }), [Nd]), (0, Wd.useEffect)((() => {
          Ed.current && null !== wd.current && (Ed.current = !1, wd.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }))
        }), [Td, hd.status]), "loading" === hd.status) return (0, yd.jsx)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: (0, yd.jsx)(xd.c, {})
      });
      if ("error" === hd.status) return (0, yd.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, yd.jsx)(Sd.c, {
          name: "face-dizzy"
        }), hd.message]
      });
      const {
        recordings: Gd,
        dailyQuota: nd
      } = hd.value;
      if (0 === Gd.length) return (0, yd.jsxs)("div", {
        className: "StudioReplaysTab StudioReplaysMessage",
        children: [(0, yd.jsx)(Sd.c, {
          name: "video"
        }), Kd(0 === nd ? "studio:replaysOff" : "studio:replaysEmpty")]
      });
      const Ld = sd.O.filter((dd => Gd.some((Od => (0, sd.G)(Od, dd))))),
        Pd = bd !== Td;
      return (0, yd.jsxs)("div", {
        className: "StudioReplaysTab",
        children: [(0, yd.jsxs)("div", {
          className: "StudioReplaysToolbar",
          children: [null !== od && (0, yd.jsxs)(Bd.S, {
            active: !0,
            onClick: () => {
              rd(td, !0)
            },
            children: [Kd("studio:replaysFilterEndedAt", {
              minutes: (0, ud.w)(od.minute, od.orLonger ? od.minute : 1 / 0)
            }), (0, yd.jsx)(Sd.c, {
              name: "xmark"
            })]
          }), Ld.map((dd => (0, yd.jsx)(Bd.S, {
            active: td.includes(dd),
            onClick: () => {
              ! function(dd) {
                rd(td.includes(dd) ? td.filter((Od => Od !== dd)) : [...td, dd])
              }(dd)
            },
            children: Kd(sm[dd])
          }, dd))), nd > 0 && (0, yd.jsx)("span", {
            className: "StudioReplaysQuota",
            children: Kd("studio:replaysQuota", {
              count: nd
            })
          })]
        }), (0, yd.jsxs)("div", {
          className: "StudioReplaysBody",
          children: [(0, yd.jsxs)("div", {
            className: "StudioReplaysList",
            children: [0 === qd.length && (0, yd.jsxs)("div", {
              className: "StudioReplaysListEmpty",
              children: [Kd("studio:replaysNoMatch"), (0, yd.jsx)(Bd.S, {
                onClick: () => {
                  rd([], !0)
                },
                children: Kd("studio:replaysClearFilters")
              })]
            }), Hd.map((dd => (0, yd.jsx)(Vm, {
              item: dd,
              selected: dd.recordingId === bd,
              onSelect: () => {
                Ad(dd.recordingId)
              }
            }, dd.recordingId)))]
          }), null !== bd && (0, yd.jsxs)("div", {
            ref: wd,
            className: Rd()("StudioReplayViewer", {
              StudioReplayViewerWaiting: Pd
            }),
            children: [!Pd && (0, yd.jsx)(Jm, {
              gameAnalyticsId: Fd,
              recordingId: bd,
              userContext: Xd,
              autoPlay: Yd
            }, bd), Pd && (0, yd.jsx)(Um, {
              onPlay: () => {
                Ad(bd)
              }
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);