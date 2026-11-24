export const id = 160;
export const ids = [160];
export const modules = {
  39261: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      e: () => Sp
    });
    var Op = cp(34);
    let op = !1;

    function Ip() {
      return op
    }

    function Sp(pp) {
      op !== pp && (op = pp, Op.m.GA("replayViewer|videoExportChanged"))
    }
  },
  36591: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      c: () => xp,
      g: () => Yp,
      h: () => Lp,
      l: () => Hp
    });
    var Op = cp(643),
      op = cp(1779),
      Ip = cp(4911);
    class Sp {
      constructor(pp, ip) {
        this.width = pp, this.TA = ip, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(pp * ip)
      }
      push(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = this.data,
          Op = this.next * this.width;
        for (let op = 0; op < this.width; op++) cp[Op + op] = pp[ip + op];
        this.next = (this.next + 1) % this.TA, this.size = Math.min(this.size + 1, this.TA)
      }
      rows() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const cp = [],
          Op = (this.next - this.size + this.TA) % this.TA;
        for (let op = 0; op < this.size; op++) {
          const Ip = (Op + op) % this.TA * this.width;
          this.data[Ip + pp] >= ip && cp.push(Array.from(this.data.subarray(Ip, Ip + this.width)))
        }
        return cp
      }
      lines() {
        return this.rows().map((pp => pp.join(",")))
      }
    }
    const xp = 10,
      Lp = {
        idle: 0,
        aW: 1,
        FX: 2,
        Al: 3,
        Hw: 4
      },
      Yp = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Dp = {
        lockGained: 1,
        lockLost: 2,
        lockError: 3,
        visible: 4,
        hidden: 5,
        focus: 6,
        blur: 7,
        jsClient: 8,
        wasmClient: 9,
        droppedCopies: 10,
        stepsLost: 11,
        cameraSetsLost: 12
      },
      Ap = 12e3,
      Pp = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Wp = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      yp = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Up = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      wp = ["nowMs", "change", "count"];

    function vp(pp) {
      return "js" === pp ? Dp.jsClient : Dp.wasmClient
    }
    class tp {
      constructor() {
        this.steps = new Sp(xp, Ap), this.events = new Sp(Wp.length, Ap), this.frames = new Sp(yp.length, Ap), this.cameraSets = new Sp(Ip.e, 256), this.changes = new Sp(wp.length, 256)
      }
    }
    const Hp = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Wp.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(pp, ip) {
        this.startedClient = pp, this.startedAtMs = performance.now(), null !== this.rings ? this.change(vp(pp)) : ip && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Dp.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new tp, null !== this.startedClient && this.changeAt(this.startedAtMs, vp(this.startedClient), 1))
      }
      step(pp, ip) {
        var cp;
        pp[ip + 6] !== Lp.Hw && (null === (cp = this.rings) || void 0 === cp || cp.steps.push(pp, ip))
      }
      cameraSet(pp, ip) {
        var cp;
        null === (cp = this.rings) || void 0 === cp || cp.cameraSets.push(pp, ip)
      }
      mouseMove(pp, ip) {
        const cp = this.rings;
        if (null === cp) return;
        const Op = this.sample;
        Op[0] = pp.timeStamp, Op[1] = performance.now(), Op[2] = pp.movementX, Op[3] = pp.movementY, Op[4] = ip ? 1 : 0, cp.events.push(Op)
      }
      frame(pp, ip, cp, Op) {
        const op = this.rings;
        if (null === op || Op === Yp.none) return;
        const Ip = this.sample;
        Ip[0] = performance.now(), Ip[1] = pp, Ip[2] = ip, Ip[3] = cp, Ip[4] = Op, op.frames.push(Ip)
      }
      change(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), pp, ip)
      }
      changeAt(pp, ip, cp) {
        const Op = this.rings;
        if (null === Op) return;
        const op = this.sample;
        op[0] = pp, op[1] = ip, op[2] = cp, Op.changes.push(op)
      }
      dumpText() {
        var pp, ip;
        const cp = this.rings;
        return [`look records (${this.startedClient}): ${Pp.join(",")}`, ...null !== (pp = null === cp || void 0 === cp ? void 0 : cp.steps.lines()) && void 0 !== pp ? pp : [], `mousemove events: ${Wp.join(",")}`, ...null !== (ip = null === cp || void 0 === cp ? void 0 : cp.events.lines()) && void 0 !== ip ? ip : []].join("\n")
      }
      toJson(pp, ip) {
        var cp;
        const op = pp - 6e4,
          Ip = this.rings,
          Sp = function(pp, ip) {
            var cp;
            let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Ip = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.rows(Op, op)) && void 0 !== cp ? cp : [];
            return {
              columns: ip,
              fromMs: 0 === Ip.length ? null : Ip[0][Op],
              rows: Ip
            }
          };
        return {
          version: Op.c,
          client: null !== (cp = this.startedClient) && void 0 !== cp ? cp : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: pp,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          rw: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...ip,
          outcomes: Lp,
          frameKinds: Yp,
          changes: Dp,
          lookSteps: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.steps, Pp),
          mouseMoves: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.events, Wp, 1),
          frames: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.frames, yp),
          cameraSets: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.cameraSets, Up),
          pageChanges: Sp(null === Ip || void 0 === Ip ? void 0 : Ip.changes, wp)
        }
      }
      save(pp) {
        const ip = JSON.stringify(this.toJson(performance.now(), pp));
        (0, op.c)(new Blob([ip], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36582: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      LOOK_DEBUG_HEADER: () => Dp,
      endLookDebugTake: () => vp,
      noteLookDroppedCopy: () => tp,
      saveLookCapture: () => Hp,
      startLookDebug: () => wp
    });
    var Op = cp(4911),
      op = cp(2908),
      Ip = cp(1927);
    const Sp = new Map(Object.entries(Op.h).map((pp => {
      let [ip, cp] = pp;
      return [cp, ip]
    })));

    function xp(pp) {
      return (0, Ip.C)(pp).toFixed(1)
    }

    function Lp(pp, ip) {
      return `camera set by ${Sp.get(pp[ip+1])}: heading ${`${xp(pp[ip+2])} -> ${xp(pp[ip+4])}`} deg, pitch ${`${xp(pp[ip+3])} -> ${xp(pp[ip+5])}`} deg, at ${pp[ip].toFixed(1)} ms`
    }
    var Yp = cp(36591);
    const Dp = 2;

    function Ap(pp) {
      return Number.isFinite(pp) ? String(Math.round(10 * pp) / 10) : String(pp)
    }

    function Pp(pp) {
      return Number.isFinite(pp) ? pp.toFixed(1) : String(pp)
    }
    class Wp {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.FX = 0, this.pastLimit = 0, this.lockSkips = 0, this.Hw = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.FX > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.FX > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class yp {
      constructor() {
        var pp = this;
        this.topicOn = (0, op.r)("look"), this.remote = (0, op.v)(), this.tally = new Wp, this.takes = null, this.started = !1, this.record = function(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (Yp.l.step(ip, cp), !pp.topicOn) return;
          const Op = ip[cp],
            op = ip[cp + 1],
            Ip = ip[cp + 2],
            Sp = ip[cp + 3],
            xp = ip[cp + 4],
            Lp = ip[cp + 5],
            Dp = ip[cp + 6],
            Wp = ip[cp + 7],
            yp = ip[cp + 8],
            Up = ip[cp + 9],
            wp = pp.tally;
          switch (wp.frames++, Dp) {
            case Yp.h.idle:
              return void wp.idle++;
            case Yp.h.Hw:
              return void wp.Hw++;
            case Yp.h.Al:
              return wp.lockSkips++, void(0 === Ip && 0 === Sp || pp.outlier(`lock skip dropped raw (${Ap(Ip)}, ${Ap(Sp)}) at ${Pp(Op)} ms`))
          }
          wp.looked++, Number.isFinite(op) && (wp.dtMin = Math.min(wp.dtMin, op), wp.dtMax = Math.max(wp.dtMax, op), wp.dtSum += op, op > 0 && (wp.peakRate = Math.max(wp.peakRate, Math.hypot(xp, Lp) / op))), wp.raw[0] += Ip, wp.raw[1] += Sp, wp.turned[0] += xp, wp.turned[1] += Lp;
          const vp = Math.abs(Ip) > Up || Math.abs(Sp) > Up,
            tp = `raw (${Ap(Ip)}, ${Ap(Sp)}) over ${Pp(op)} ms, limit ${Ap(Up)}, filter v (${Wp.toFixed(3)}, ${yp.toFixed(3)}) px/ms, at ${Pp(Op)} ms`;
          Dp === Yp.h.FX ? (wp.FX++, pp.outlier(`spike put right: ${tp} -> turned (${Ap(xp)}, ${Ap(Lp)})`)) : vp ? (wp.pastLimit++, pp.outlier(`kept past limit: ${tp}`)) : op > 50 && (wp.longFrames++, pp.remote || pp.outlier(`long frame: ${tp}, turned in full`))
        }, this.onMouseMove = pp => {
          const ip = null !== document.pointerLockElement;
          if (Yp.l.mouseMove(pp, ip), !this.topicOn) return;
          const cp = this.tally,
            {
              movementX: Op,
              movementY: op
            } = pp;
          cp.events++;
          const Ip = Math.max(Math.abs(Op), Math.abs(op));
          cp.eventMax = Math.max(cp.eventMax, Ip), Ip >= 200 && (cp.bigEvents++, this.eventOutlier(`big mousemove (${Op}, ${op}) at ${Pp(pp.timeStamp)} ms, lock ${ip?"sx":"free"}`))
        }, this.onLockChange = () => {
          const pp = document.pointerLockElement;
          pp ? Yp.l.lockGained() : Yp.l.change(Yp.b.lockLost), this.topicOn && (0, op.n)("look", `pointer lock ${pp?`gained (${pp.tagName.toLowerCase()})`:"lost"} at ${Pp(performance.now())} ms`)
        }, this.onLockError = () => {
          Yp.l.change(Yp.b.lockError), this.topicOn && (0, op.n)("look", `pointer lock request failed at ${Pp(performance.now())} ms`)
        }, this.onVisibility = () => {
          Yp.l.change("hidden" === document.visibilityState ? Yp.b.hidden : Yp.b.visible), this.topicOn && (0, op.n)("look", `page ${document.visibilityState} at ${Pp(performance.now())} ms`)
        }, this.onFocus = () => {
          Yp.l.change(Yp.b.focus)
        }, this.onBlur = () => {
          Yp.l.change(Yp.b.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const pp = this.tally;
          if (this.tally = new Wp, !pp.moved() || this.remote && !pp.hasEvent()) return;
          const ip = pp.looked > 0 ? pp.dtSum / pp.looked : NaN,
            cp = [`${pp.frames} frames (${pp.looked} looked, ${pp.idle} idle${"wasm"===Yp.l.client?`, ${pp.Hw} carried`:""})`, `dt avg ${Pp(ip)} min ${Pp(pp.dtMin)} max ${Pp(pp.dtMax)}, ${pp.longFrames} long`, `${pp.events} mousemoves (max ${Ap(pp.eventMax)} px, ${pp.bigEvents} big)`, `raw (${Ap(pp.raw[0])}, ${Ap(pp.raw[1])}) turned (${Ap(pp.turned[0])}, ${Ap(pp.turned[1])})`, `peak ${pp.peakRate.toFixed(2)} px/ms`, `put right ${pp.FX}, past limit ${pp.pastLimit}, lock skips ${pp.lockSkips}`, "lock " + (document.pointerLockElement ? "sx" : "free")];
          pp.dropped > 0 && cp.push(`${pp.dropped} doubled spike copies dropped`), pp.cameraSets > 0 && cp.push(`${pp.cameraSets} camera sets`), pp.cameraSetsLost > 0 && cp.push(`${pp.cameraSetsLost} camera set records lost`), pp.lost > 0 && cp.push(`${pp.lost} records lost`), pp.suppressed > 0 && cp.push(`${pp.suppressed} outlier lines not shown`), (0, op.n)("look", `1s: ${cp.join("; ")}`)
        }
      }
      start(pp, ip) {
        if (Yp.l.start(pp, null !== document.pointerLockElement), this.takes = ip, this.topicOn) {
          const {
            screen: ip
          } = window;
          (0, op.n)("look", `start: ${pp} client, dpr ${window.devicePixelRatio}, screen ${ip.width}x${ip.height}, pointer lock ${document.pointerLockElement?"sx":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, op.k)("look", (() => Yp.l.dumpText())))
      }
      outlier(pp) {
        const ip = this.tally;
        ip.outliers >= 20 ? ip.suppressed++ : (ip.outliers++, (0, op.n)("look", pp))
      }
      eventOutlier(pp) {
        const ip = this.tally;
        ip.eventLines >= 10 ? ip.suppressed++ : (ip.eventLines++, (0, op.n)("look", pp))
      }
      takeRecords() {
        if (null === this.takes) return;
        const pp = this.takes.look();
        if (pp.length >= Dp) {
          this.counted(Yp.b.stepsLost, pp[0]), this.counted(Yp.b.droppedCopies, pp[1]);
          for (let ip = Dp; ip + Yp.c <= pp.length; ip += Yp.c) this.record(pp, ip)
        }
        const ip = this.takes.cameraSets();
        if (ip.length >= Op.d) {
          this.counted(Yp.b.cameraSetsLost, ip[0]);
          for (let pp = Op.d; pp + Op.e <= ip.length; pp += Op.e) Yp.l.cameraSet(ip, pp), this.topicOn && (this.tally.cameraSets++, this.outlier(Lp(ip, pp)))
        }
      }
      droppedCopy() {
        this.counted(Yp.b.droppedCopies, 1)
      }
      counted(pp, ip) {
        if (0 === ip) return;
        if (Yp.l.change(pp, ip), !this.topicOn) return;
        const cp = this.tally;
        pp === Yp.b.droppedCopies ? cp.dropped += ip : pp === Yp.b.stepsLost ? cp.lost += ip : cp.cameraSetsLost += ip
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let Up = null;

    function wp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Up ??= new yp, Up.start(pp, ip), Up.record
    }

    function vp() {
      var pp;
      null === (pp = Up) || void 0 === pp || pp.endTake()
    }

    function tp() {
      var pp;
      null === (pp = Up) || void 0 === pp || pp.droppedCopy()
    }
    async function Hp(pp) {
      var ip;
      null === (ip = Up) || void 0 === ip || ip.takeRecords();
      const {
        clientHintsRead: Op,
        debugDeviceLines: op
      } = await cp.e(29).then((() => cp(34291)));
      await Op, Yp.l.save({
        ...pp,
        device: op()
      })
    }
  },
  39219: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp
    });
    var Op = cp(34),
      op = cp(1308),
      Ip = cp(3071);
    const Sp = "Reconnecting";
    class xp {
      constructor(pp) {
        this.hooks = pp, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = pp => {
          pp.persisted || this.leave()
        }, this.controller = new Ip.e((ip => pp.reconnect(ip)), {
          isSessionLive: () => !this.ended && pp.isLive(),
          onPhaseChanged: pp => {
            this.onPhaseChanged(pp)
          },
          onReconnected: ip => {
            pp.onReconnected(ip)
          },
          onGaveUp: ip => {
            !this.ended && pp.isLive() && pp.onGaveUp(this.sessionBased, ip)
          }
        })
      }
      onInitialInfo(pp, ip) {
        this.graceMs = pp, this.sessionBased = ip
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(pp) {
        this.ended || this.controller.onConnectionLost(pp, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const pp = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          ip = this.controller.heldToken;
        this.end(), pp && "" !== ip && this.hooks.releaseSeat(ip)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(pp) {
        const ip = (0, Ip.q)(pp);
        ip !== this.stopped && (this.stopped = ip, this.hooks.freeze(ip));
        const cp = "frozen" === pp || "resuming" === pp && this.frozen;
        cp && !this.frozen ? (0, op.s)(Sp, {
          overridesPause: !0
        }) : !cp && this.frozen && (0, op.r)(Sp), this.frozen = cp, this.setListening("connected" !== pp), Op.m.GA(Ip.n, cp ? "frozen" : pp)
      }
      setListening(pp) {
        pp !== this.listening && (this.listening = pp, pp ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39221: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = pp, this.now = ip, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const pp = this.now(),
            ip = pp - this.lastCheckAt <= 2e3;
          this.lastCheckAt = pp;
          const cp = "visible" === document.visibilityState;
          !cp || ip && this.wasVisible || (this.resumedAt = pp), this.wasVisible = cp, cp && pp - this.lastHeardAt > 12e3 && pp - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = ip(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39235: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp,
      g: () => Dp
    });
    var Op = cp(1742),
      op = cp(195),
      Ip = cp(1705),
      Sp = cp(1810),
      xp = cp(1211),
      Lp = cp(1149);
    async function Yp(pp, ip) {
      return function(pp) {
        return "object" === typeof pp && null !== pp && pp.code === op.e.VpnIp.code
      }(ip) && function(pp) {
        return Ip.b.supports("appCheck") && pp.isLoggedIn() && !pp.hasTriedAppAttestation()
      }(pp) && await async function(pp) {
        try {
          const {
            token: ip
          } = await (0, Sp.c)(), {
            "3PSIDMCPP": cp
          } = await (0, Lp.postJsonWithMetricsCookiesAndJsonResponse)(`${xp.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: ip
          }, {
            retries: 0
          }, pp.getMetricsCookies());
          return pp.setAppAttestedAuthJwt(cp), !0
        } catch (ip) {
          return ip instanceof Op.d && "failed" === ip.code ? (console.warn("The app couldn't get an App Check token:", ip), pp.markAppAttestationTried()) : console.error("Failed to attest the app:", ip), !1
        }
      }(pp)
    }
    async function Dp(pp, ip) {
      try {
        return await ip()
      } catch (cp) {
        if (!await Yp(pp, cp)) throw cp
      }
      return ip()
    }
  },
  39226: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Pp,
      g: () => Dp
    });
    var Op = cp(195),
      op = cp(1838),
      Ip = cp(1216),
      Sp = cp(9034);
    const xp = [250, 500, 1e3, 2e3, 1250],
      Lp = 406;

    function Yp(pp) {
      if ("object" !== typeof pp || null === pp) return !1;
      const {
        code: ip,
        message: cp
      } = pp, op = Op.e.duplicateLobbyNameError;
      return (ip === op.code || ip === Lp) && (cp === op.text || cp === op.text + Op.l)
    }
    async function Dp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op.e;
      for (let op = 0;; op++) {
        let Sp;
        (0, Ip.j)(ip);
        try {
          return await pp()
        } catch (Op) {
          if (Sp = xp[op], void 0 === Sp || !Yp(Op)) throw Op
        }
        await cp(Sp, ip)
      }
    }
    const Ap = new Set([Op.e.duplicateLobbyNameError.code, Op.e.lobbyCantBeCreated.code, Op.e.roomDisposedEarlyError.code, Op.e.roomDisposedLateError.code, Op.e.serverRoomLimitReached.code]);

    function Pp(pp) {
      if (Yp(pp)) return !0;
      const ip = (0, Sp.f)(pp);
      return "number" === typeof ip && Ap.has(ip)
    }
  },
  39241: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp
    });
    var Op = cp(9034),
      op = cp(36689),
      Ip = cp(39244);
    const Sp = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      xp = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function Lp(pp, ip) {
      if (pp instanceof op.f) return {
        at: Sp[ip],
        code: 0
      };
      const cp = (0, Op.f)(pp),
        Lp = "number" === typeof cp ? cp : 0;
      return null !== (0, Ip.h)(Lp).name ? {
        at: "refused",
        code: Lp
      } : {
        at: xp[ip],
        code: Lp
      }
    }
  },
  9034: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      f: () => Sp,
      h: () => xp,
      l: () => Yp,
      o: () => Lp
    });
    var Op = cp(195),
      op = cp(4719);

    function Ip(pp) {
      return Sp(pp) === Op.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Sp(pp) {
      return "object" === typeof pp && null !== pp ? pp.code : void 0
    }

    function xp(pp) {
      var ip;
      return null !== (ip = Object.keys(op.c).find((ip => op.c[ip] === pp))) && void 0 !== ip ? ip : null
    }

    function Lp(pp) {
      return "notWhitelisted" === pp ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Yp = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36677: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Pp,
      e: () => Dp,
      g: () => Wp,
      j: () => Ap
    });
    var Op = cp(337),
      op = cp(667),
      Ip = cp(676),
      Sp = cp(44);
    const xp = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Lp = "playSessionGameNameWithVariation",
      Yp = "wasMatchmakePlayer";

    function Dp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l;
      (0, Ip.h)(pp, xp)
    }

    function Ap() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).setItem(Yp, !0)
    }

    function Pp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l;
      return (0, Ip.c)(pp, xp)
    }

    function Wp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp.l;
      const cp = (0, Ip.c)(ip, xp),
        Dp = function(pp) {
          const ip = pp.getItem(Lp);
          return "string" !== typeof ip ? null : ip
        }(ip),
        Ap = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).getItem(Yp)
        }(ip);
      let Pp;
      return Pp = null !== cp && null !== Dp && (0, Ip.f)(ip, xp) && function(pp, ip, cp) {
          const op = (0, Op.Mb)(pp),
            Ip = (0, Op.Mb)(ip),
            Sp = (0, Op.Ib)(pp),
            xp = (0, Op.Ib)(ip);
          return !(op !== Ip || !cp) || op === Ip && Sp === xp
        }(Dp, pp, Ap) ? cp : (0, op.e)(), (0, Ip.k)(ip, xp, Pp), ip.setItem(Lp, pp),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).removeItem(Yp)
        }(ip), Pp
    }
  },
  36674: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => ep,
      d: () => jp
    });
    var Op = cp(1014),
      op = cp(209),
      Ip = cp(335),
      Sp = cp(643),
      xp = cp(337),
      Lp = cp(1021),
      Yp = cp(657),
      Dp = cp(681),
      Ap = cp(4609),
      Pp = cp(104),
      Wp = cp(131),
      yp = cp(1765),
      Up = cp(116),
      wp = cp(36677),
      vp = cp(44),
      tp = cp(670),
      Hp = cp(645),
      dp = cp(36679);

    function ep() {
      var pp, ip;
      return [...null !== (pp = navigator.languages) && void 0 !== pp ? pp : [null !== (ip = navigator.language) && void 0 !== ip ? ip : "none"], "en-Gb"]
    }

    function jp(pp, ip, cp, jp, kp) {
      const mp = (0, Op.j)(ip) ? (0, Op.o)(ip) : null,
        Rp = pp.isLoggedIn() && void 0 !== (0, op.e)(Ip.k, Wp.siteUsed) ? (0, Hp.f)() : null,
        qp = {
          cookies: (0, yp.getAllCookiesForGameNameWithVariation)(ip),
          isMobile: (0, Pp.isMobile)(),
          isUsingCustomGameTexturePack: null !== mp && kp(mp),
          generalCookies: {
            joinDiscord: !!vp.h.getItem("DiscordPressed"),
            newGo: Ap.c,
            ...pp.getMetricsCookies(),
            trafficCode: jp,
            compliance: Pp.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Pp.getBrowserName)(),
            version: (0, Pp.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Pp.getPlatformType)(),
            deviceType: (0, Up.c)()
          },
          isLoggedIn: pp.isLoggedIn(),
          lobbyName: cp,
          languages: ep(),
          version: Sp.c,
          siteUsed: Wp.siteUsed,
          subsiteUsed: Wp.subsiteUsed,
          playSessionId: (0, wp.g)(ip),
          visitSessionId: (0, tp.g)(),
          clientReason: Yp.p.reason,
          budgetBasis: (0, dp.j)(),
          ...null !== Dp.n && {
            diagClaim: Dp.n.claimId
          },
          ...null !== Rp && {
            webGpuLoss: Rp
          }
        };
      return null !== mp && (0, xp.vc)(mp) ? (qp.lobbyName = (0, Op.h)(mp, (0, Op.n)(ip), cp), {
        roomName: `classic_${Lp.d}`,
        joinOptions: qp
      }) : {
        roomName: ip,
        joinOptions: qp
      }
    }
  },
  39258: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Wp,
      f: () => Pp
    });
    const Op = "ue:",
      op = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      Ip = "[A-Za-z0-9]{1,24}",
      Sp = 15,
      xp = new RegExp(`^${Ip}$`);
    new RegExp(`^${Op}(${[...op,"other"].join("|")}):(?:n|k(${Ip})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function Lp(pp, ip, cp, Ip, Lp) {
      const Yp = "string" === typeof pp && op.includes(pp) ? pp : "other";
      let Dp = "n";
      return "string" === typeof ip ? Dp = xp.test(ip) ? `k${ip}` : "n" : "number" === typeof cp && Number.isInteger(cp) && cp >= 0 && cp <= Sp && (Dp = `b${cp}`), `${Op}${Yp}:${Dp}:${Ip?1:0}${Lp?1:0}`
    }
    var Yp = cp(1677),
      Dp = cp(1770);
    let Ap = null;

    function Pp(pp) {
      const ip = pp instanceof Element && pp !== document.body && pp !== document.documentElement && !(0, Yp.u)(pp) && !pp.closest("#root");
      return {
        editable: (0, Dp.b)(pp),
        outsideView: ip
      }
    }

    function Wp(pp) {
      return Ap ??= function(pp) {
        try {
          const {
            editable: ip,
            outsideView: cp
          } = Pp(pp.target), Op = pp;
          return Lp(pp.type, Op.code, Op.button, ip, cp)
        } catch {
          return Lp(null, null, null, !1, !1)
        }
      }(pp), Ap
    }
  },
  39244: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      e: () => Ip,
      g: () => xp,
      h: () => Dp,
      k: () => Lp,
      n: () => Sp
    });
    var Op = cp(195);
    const op = 3e3,
      Ip = 15e3;

    function Sp(pp) {
      const ip = pp.endsWith(Op.l);
      return {
        text: (ip ? pp.slice(0, -Op.l.length) : pp) || null,
        dropsCache: ip
      }
    }
    const xp = "Either your internet isn't working or this is a bug.";

    function Lp(pp, ip) {
      const cp = Dp(pp);
      return null !== cp.name && "" === Op.e[cp.name].text && null !== ip ? ip : cp.reason
    }
    const Yp = "You were removed from the game.";

    function Dp(pp) {
      var ip;
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const op = null !== (ip = Object.keys(Op.e).find((ip => Op.e[ip].code === pp))) && void 0 !== ip ? ip : null;
      if (null === op) return {
        code: pp,
        name: op,
        reason: null !== cp && void 0 !== cp ? cp : `${xp}\nCode: ${pp}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Ip,
        canReconnect: Sp = !1
      } = Op.e[op], Lp = pp === Op.e.outdatedVersion.code || pp === Op.e.loadRecaptchaError.code;
      return {
        code: pp,
        name: op,
        reason: "" !== Ip ? Ip : null !== cp && void 0 !== cp ? cp : pp === Op.e.gameOrPluginKick.code ? Yp : `Code: ${pp}`,
        canReconnect: Sp,
        automaticallyReconnect: pp === Op.e.customGameUpdated.code || pp === Op.e.duplicateLobbyNameError.code,
        requiresRefresh: Lp
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);