export const id = 160;
export const ids = [160];
export const modules = {
  39288: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      g: () => mt
    });
    var Ot = Vt(31);
    let qt = !1;

    function Dt() {
      return qt
    }

    function mt(tt) {
      qt !== tt && (qt = tt, Ot.j.sw("replayViewer|videoExportChanged"))
    }
  },
  36616: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      g: () => dt,
      j: () => Ht,
      k: () => jt,
      o: () => bt
    });
    var Ot = Vt(712),
      qt = Vt(1842),
      Dt = Vt(4963);
    class mt {
      constructor(tt, et) {
        this.width = tt, this.uQ = et, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(tt * et)
      }
      push(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = this.data,
          Ot = this.next * this.width;
        for (let qt = 0; qt < this.width; qt++) Vt[Ot + qt] = tt[et + qt];
        this.next = (this.next + 1) % this.uQ, this.size = Math.min(this.size + 1, this.uQ)
      }
      rows() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const Vt = [],
          Ot = (this.next - this.size + this.uQ) % this.uQ;
        for (let qt = 0; qt < this.size; qt++) {
          const Dt = (Ot + qt) % this.uQ * this.width;
          this.data[Dt + tt] >= et && Vt.push(Array.from(this.data.subarray(Dt, Dt + this.width)))
        }
        return Vt
      }
      lines() {
        return this.rows().map((tt => tt.join(",")))
      }
    }
    const dt = 10,
      jt = {
        idle: 0,
        hE: 1,
        qI: 2,
        mI: 3,
        my: 4
      },
      Ht = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Xt = {
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
      Qt = 12e3,
      lt = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Et = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      ft = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      wt = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yt = ["nowMs", "change", "count"];

    function Nt(tt) {
      return "js" === tt ? Xt.jsClient : Xt.wasmClient
    }
    class Mt {
      constructor() {
        this.steps = new mt(dt, Qt), this.events = new mt(Et.length, Qt), this.frames = new mt(ft.length, Qt), this.cameraSets = new mt(Dt.e, 256), this.changes = new mt(yt.length, 256)
      }
    }
    const bt = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Et.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(tt, et) {
        this.startedClient = tt, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Nt(tt)) : et && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Xt.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new Mt, null !== this.startedClient && this.changeAt(this.startedAtMs, Nt(this.startedClient), 1))
      }
      step(tt, et) {
        var Vt;
        tt[et + 6] !== jt.my && (null === (Vt = this.rings) || void 0 === Vt || Vt.steps.push(tt, et))
      }
      cameraSet(tt, et) {
        var Vt;
        null === (Vt = this.rings) || void 0 === Vt || Vt.cameraSets.push(tt, et)
      }
      mouseMove(tt, et) {
        const Vt = this.rings;
        if (null === Vt) return;
        const Ot = this.sample;
        Ot[0] = tt.timeStamp, Ot[1] = performance.now(), Ot[2] = tt.movementX, Ot[3] = tt.movementY, Ot[4] = et ? 1 : 0, Vt.events.push(Ot)
      }
      frame(tt, et, Vt, Ot) {
        const qt = this.rings;
        if (null === qt || Ot === Ht.none) return;
        const Dt = this.sample;
        Dt[0] = performance.now(), Dt[1] = tt, Dt[2] = et, Dt[3] = Vt, Dt[4] = Ot, qt.frames.push(Dt)
      }
      change(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), tt, et)
      }
      changeAt(tt, et, Vt) {
        const Ot = this.rings;
        if (null === Ot) return;
        const qt = this.sample;
        qt[0] = tt, qt[1] = et, qt[2] = Vt, Ot.changes.push(qt)
      }
      dumpText() {
        var tt, et;
        const Vt = this.rings;
        return [`look records (${this.startedClient}): ${lt.join(",")}`, ...null !== (tt = null === Vt || void 0 === Vt ? void 0 : Vt.steps.lines()) && void 0 !== tt ? tt : [], `mousemove events: ${Et.join(",")}`, ...null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.events.lines()) && void 0 !== et ? et : []].join("\n")
      }
      toJson(tt, et) {
        var Vt;
        const qt = tt - 6e4,
          Dt = this.rings,
          mt = function(tt, et) {
            var Vt;
            let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Dt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.rows(Ot, qt)) && void 0 !== Vt ? Vt : [];
            return {
              columns: et,
              fromMs: 0 === Dt.length ? null : Dt[0][Ot],
              rows: Dt
            }
          };
        return {
          version: Ot.d,
          client: null !== (Vt = this.startedClient) && void 0 !== Vt ? Vt : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: tt,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          zy: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...et,
          outcomes: jt,
          frameKinds: Ht,
          changes: Xt,
          lookSteps: mt(null === Dt || void 0 === Dt ? void 0 : Dt.steps, lt),
          mouseMoves: mt(null === Dt || void 0 === Dt ? void 0 : Dt.events, Et, 1),
          frames: mt(null === Dt || void 0 === Dt ? void 0 : Dt.frames, ft),
          cameraSets: mt(null === Dt || void 0 === Dt ? void 0 : Dt.cameraSets, wt),
          pageChanges: mt(null === Dt || void 0 === Dt ? void 0 : Dt.changes, yt)
        }
      }
      save(tt) {
        const et = JSON.stringify(this.toJson(performance.now(), tt));
        (0, qt.c)(new Blob([et], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36610: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      LOOK_DEBUG_HEADER: () => Xt,
      endLookDebugTake: () => Nt,
      noteLookDroppedCopy: () => Mt,
      saveLookCapture: () => bt,
      startLookDebug: () => yt
    });
    var Ot = Vt(4963),
      qt = Vt(2902),
      Dt = Vt(1993);
    const mt = new Map(Object.entries(Ot.k).map((tt => {
      let [et, Vt] = tt;
      return [Vt, et]
    })));

    function dt(tt) {
      return (0, Dt.G)(tt).toFixed(1)
    }

    function jt(tt, et) {
      return `camera set by ${mt.get(tt[et+1])}: heading ${`${dt(tt[et+2])} -> ${dt(tt[et+4])}`} deg, pitch ${`${dt(tt[et+3])} -> ${dt(tt[et+5])}`} deg, at ${tt[et].toFixed(1)} ms`
    }
    var Ht = Vt(36616);
    const Xt = 2;

    function Qt(tt) {
      return Number.isFinite(tt) ? String(Math.round(10 * tt) / 10) : String(tt)
    }

    function lt(tt) {
      return Number.isFinite(tt) ? tt.toFixed(1) : String(tt)
    }
    class Et {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.qI = 0, this.pastLimit = 0, this.lockSkips = 0, this.my = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.qI > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.qI > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class ft {
      constructor() {
        var tt = this;
        this.topicOn = (0, qt.v)("look"), this.remote = (0, qt.x)(), this.tally = new Et, this.takes = null, this.started = !1, this.record = function(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (Ht.o.step(et, Vt), !tt.topicOn) return;
          const Ot = et[Vt],
            qt = et[Vt + 1],
            Dt = et[Vt + 2],
            mt = et[Vt + 3],
            dt = et[Vt + 4],
            jt = et[Vt + 5],
            Xt = et[Vt + 6],
            Et = et[Vt + 7],
            ft = et[Vt + 8],
            wt = et[Vt + 9],
            yt = tt.tally;
          switch (yt.frames++, Xt) {
            case Ht.k.idle:
              return void yt.idle++;
            case Ht.k.my:
              return void yt.my++;
            case Ht.k.mI:
              return yt.lockSkips++, void(0 === Dt && 0 === mt || tt.outlier(`lock skip dropped raw (${Qt(Dt)}, ${Qt(mt)}) at ${lt(Ot)} ms`))
          }
          yt.looked++, Number.isFinite(qt) && (yt.dtMin = Math.min(yt.dtMin, qt), yt.dtMax = Math.max(yt.dtMax, qt), yt.dtSum += qt, qt > 0 && (yt.peakRate = Math.max(yt.peakRate, Math.hypot(dt, jt) / qt))), yt.raw[0] += Dt, yt.raw[1] += mt, yt.turned[0] += dt, yt.turned[1] += jt;
          const Nt = Math.abs(Dt) > wt || Math.abs(mt) > wt,
            Mt = `raw (${Qt(Dt)}, ${Qt(mt)}) over ${lt(qt)} ms, limit ${Qt(wt)}, filter v (${Et.toFixed(3)}, ${ft.toFixed(3)}) px/ms, at ${lt(Ot)} ms`;
          Xt === Ht.k.qI ? (yt.qI++, tt.outlier(`spike put right: ${Mt} -> turned (${Qt(dt)}, ${Qt(jt)})`)) : Nt ? (yt.pastLimit++, tt.outlier(`kept past limit: ${Mt}`)) : qt > 50 && (yt.longFrames++, tt.remote || tt.outlier(`long frame: ${Mt}, turned in full`))
        }, this.onMouseMove = tt => {
          const et = null !== document.pointerLockElement;
          if (Ht.o.mouseMove(tt, et), !this.topicOn) return;
          const Vt = this.tally,
            {
              movementX: Ot,
              movementY: qt
            } = tt;
          Vt.events++;
          const Dt = Math.max(Math.abs(Ot), Math.abs(qt));
          Vt.eventMax = Math.max(Vt.eventMax, Dt), Dt >= 200 && (Vt.bigEvents++, this.eventOutlier(`big mousemove (${Ot}, ${qt}) at ${lt(tt.timeStamp)} ms, lock ${et?"Pd":"free"}`))
        }, this.onLockChange = () => {
          const tt = document.pointerLockElement;
          tt ? Ht.o.lockGained() : Ht.o.change(Ht.e.lockLost), this.topicOn && (0, qt.n)("look", `pointer lock ${tt?`gained (${tt.tagName.toLowerCase()})`:"lost"} at ${lt(performance.now())} ms`)
        }, this.onLockError = () => {
          Ht.o.change(Ht.e.lockError), this.topicOn && (0, qt.n)("look", `pointer lock request failed at ${lt(performance.now())} ms`)
        }, this.onVisibility = () => {
          Ht.o.change("hidden" === document.visibilityState ? Ht.e.hidden : Ht.e.visible), this.topicOn && (0, qt.n)("look", `page ${document.visibilityState} at ${lt(performance.now())} ms`)
        }, this.onFocus = () => {
          Ht.o.change(Ht.e.focus)
        }, this.onBlur = () => {
          Ht.o.change(Ht.e.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const tt = this.tally;
          if (this.tally = new Et, !tt.moved() || this.remote && !tt.hasEvent()) return;
          const et = tt.looked > 0 ? tt.dtSum / tt.looked : NaN,
            Vt = [`${tt.frames} frames (${tt.looked} looked, ${tt.idle} idle${"wasm"===Ht.o.client?`, ${tt.my} carried`:""})`, `dt avg ${lt(et)} min ${lt(tt.dtMin)} max ${lt(tt.dtMax)}, ${tt.longFrames} long`, `${tt.events} mousemoves (max ${Qt(tt.eventMax)} px, ${tt.bigEvents} big)`, `raw (${Qt(tt.raw[0])}, ${Qt(tt.raw[1])}) turned (${Qt(tt.turned[0])}, ${Qt(tt.turned[1])})`, `peak ${tt.peakRate.toFixed(2)} px/ms`, `put right ${tt.qI}, past limit ${tt.pastLimit}, lock skips ${tt.lockSkips}`, "lock " + (document.pointerLockElement ? "Pd" : "free")];
          tt.dropped > 0 && Vt.push(`${tt.dropped} doubled spike copies dropped`), tt.cameraSets > 0 && Vt.push(`${tt.cameraSets} camera sets`), tt.cameraSetsLost > 0 && Vt.push(`${tt.cameraSetsLost} camera set records lost`), tt.lost > 0 && Vt.push(`${tt.lost} records lost`), tt.suppressed > 0 && Vt.push(`${tt.suppressed} outlier lines not shown`), (0, qt.n)("look", `1s: ${Vt.join("; ")}`)
        }
      }
      start(tt, et) {
        if (Ht.o.start(tt, null !== document.pointerLockElement), this.takes = et, this.topicOn) {
          const {
            screen: et
          } = window;
          (0, qt.n)("look", `start: ${tt} client, dpr ${window.devicePixelRatio}, screen ${et.width}x${et.height}, pointer lock ${document.pointerLockElement?"Pd":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, qt.j)("look", (() => Ht.o.dumpText())))
      }
      outlier(tt) {
        const et = this.tally;
        et.outliers >= 20 ? et.suppressed++ : (et.outliers++, (0, qt.n)("look", tt))
      }
      eventOutlier(tt) {
        const et = this.tally;
        et.eventLines >= 10 ? et.suppressed++ : (et.eventLines++, (0, qt.n)("look", tt))
      }
      takeRecords() {
        if (null === this.takes) return;
        const tt = this.takes.look();
        if (tt.length >= Xt) {
          this.counted(Ht.e.stepsLost, tt[0]), this.counted(Ht.e.droppedCopies, tt[1]);
          for (let et = Xt; et + Ht.g <= tt.length; et += Ht.g) this.record(tt, et)
        }
        const et = this.takes.cameraSets();
        if (et.length >= Ot.d) {
          this.counted(Ht.e.cameraSetsLost, et[0]);
          for (let tt = Ot.d; tt + Ot.e <= et.length; tt += Ot.e) Ht.o.cameraSet(et, tt), this.topicOn && (this.tally.cameraSets++, this.outlier(jt(et, tt)))
        }
      }
      droppedCopy() {
        this.counted(Ht.e.droppedCopies, 1)
      }
      counted(tt, et) {
        if (0 === et) return;
        if (Ht.o.change(tt, et), !this.topicOn) return;
        const Vt = this.tally;
        tt === Ht.e.droppedCopies ? Vt.dropped += et : tt === Ht.e.stepsLost ? Vt.lost += et : Vt.cameraSetsLost += et
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let wt = null;

    function yt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return wt ??= new ft, wt.start(tt, et), wt.record
    }

    function Nt() {
      var tt;
      null === (tt = wt) || void 0 === tt || tt.endTake()
    }

    function Mt() {
      var tt;
      null === (tt = wt) || void 0 === tt || tt.droppedCopy()
    }
    async function bt(tt) {
      var et;
      null === (et = wt) || void 0 === et || et.takeRecords();
      const {
        clientHintsRead: Ot,
        debugDeviceLines: qt
      } = await Vt.e(29).then((() => Vt(34239)));
      await Ot, Ht.o.save({
        ...tt,
        device: qt()
      })
    }
  },
  39232: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt
    });
    var Ot = Vt(31),
      qt = Vt(1387),
      Dt = Vt(3055);
    const mt = "Reconnecting";
    class dt {
      constructor(tt) {
        this.hooks = tt, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = tt => {
          tt.persisted || this.leave()
        }, this.controller = new Dt.d((et => tt.reconnect(et)), {
          isSessionLive: () => !this.ended && tt.isLive(),
          onPhaseChanged: tt => {
            this.onPhaseChanged(tt)
          },
          onReconnected: et => {
            tt.onReconnected(et)
          },
          onGaveUp: et => {
            !this.ended && tt.isLive() && tt.onGaveUp(this.sessionBased, et)
          }
        })
      }
      onInitialInfo(tt, et) {
        this.graceMs = tt, this.sessionBased = et
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(tt) {
        this.ended || this.controller.onConnectionLost(tt, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const tt = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          et = this.controller.heldToken;
        this.end(), tt && "" !== et && this.hooks.releaseSeat(et)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(tt) {
        const et = (0, Dt.m)(tt);
        et !== this.stopped && (this.stopped = et, this.hooks.freeze(et));
        const Vt = "frozen" === tt || "resuming" === tt && this.frozen;
        Vt && !this.frozen ? (0, qt.p)(mt, {
          overridesPause: !0
        }) : !Vt && this.frozen && (0, qt.m)(mt), this.frozen = Vt, this.setListening("connected" !== tt), Ot.j.sw(Dt.l, Vt ? "frozen" : tt)
      }
      setListening(tt) {
        tt !== this.listening && (this.listening = tt, tt ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39241: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = tt, this.now = et, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const tt = this.now(),
            et = tt - this.lastCheckAt <= 2e3;
          this.lastCheckAt = tt;
          const Vt = "visible" === document.visibilityState;
          !Vt || et && this.wasVisible || (this.resumedAt = tt), this.wasVisible = Vt, Vt && tt - this.lastHeardAt > 12e3 && tt - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = et(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39257: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht,
      c: () => Xt
    });
    var Ot = Vt(1818),
      qt = Vt(229),
      Dt = Vt(1784),
      mt = Vt(1870),
      dt = Vt(1293),
      jt = Vt(1223);
    async function Ht(tt, et) {
      return function(tt) {
        return "object" === typeof tt && null !== tt && tt.code === qt.b.VpnIp.code
      }(et) && function(tt) {
        return Dt.c.supports("appCheck") && tt.isLoggedIn() && !tt.hasTriedAppAttestation()
      }(tt) && await async function(tt) {
        try {
          const {
            token: et
          } = await (0, mt.e)(), {
            "3PSIDMCPP": Vt
          } = await (0, jt.postJsonWithMetricsCookiesAndJsonResponse)(`${dt.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: et
          }, {
            retries: 0
          }, tt.getMetricsCookies());
          return tt.setAppAttestedAuthJwt(Vt), !0
        } catch (et) {
          return et instanceof Ot.d && "failed" === et.code ? (console.warn("The app couldn't get an App Check token:", et), tt.markAppAttestationTried()) : console.error("Failed to attest the app:", et), !1
        }
      }(tt)
    }
    async function Xt(tt, et) {
      try {
        return await et()
      } catch (Vt) {
        if (!await Ht(tt, Vt)) throw Vt
      }
      return et()
    }
  },
  39249: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => lt,
      g: () => Xt
    });
    var Ot = Vt(229),
      qt = Vt(1908),
      Dt = Vt(1298),
      mt = Vt(9133);
    const dt = [250, 500, 1e3, 2e3, 1250],
      jt = 406;

    function Ht(tt) {
      if ("object" !== typeof tt || null === tt) return !1;
      const {
        code: et,
        message: Vt
      } = tt, qt = Ot.b.duplicateLobbyNameError;
      return (et === qt.code || et === jt) && (Vt === qt.text || Vt === qt.text + Ot.l)
    }
    async function Xt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qt.d;
      for (let qt = 0;; qt++) {
        let mt;
        (0, Dt.n)(et);
        try {
          return await tt()
        } catch (Ot) {
          if (mt = dt[qt], void 0 === mt || !Ht(Ot)) throw Ot
        }
        await Vt(mt, et)
      }
    }
    const Qt = new Set([Ot.b.duplicateLobbyNameError.code, Ot.b.lobbyCantBeCreated.code, Ot.b.roomDisposedEarlyError.code, Ot.b.roomDisposedLateError.code, Ot.b.serverRoomLimitReached.code]);

    function lt(tt) {
      if (Ht(tt)) return !0;
      const et = (0, mt.i)(tt);
      return "number" === typeof et && Qt.has(et)
    }
  },
  39263: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt
    });
    var Ot = Vt(9133),
      qt = Vt(36738),
      Dt = Vt(39271);
    const mt = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      dt = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function jt(tt, et) {
      if (tt instanceof qt.c) return {
        at: mt[et],
        code: 0
      };
      const Vt = (0, Ot.i)(tt),
        jt = "number" === typeof Vt ? Vt : 0;
      return null !== (0, Dt.l)(jt).name ? {
        at: "refused",
        code: jt
      } : {
        at: dt[et],
        code: jt
      }
    }
  },
  9133: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => mt,
      j: () => dt,
      k: () => Ht,
      n: () => jt
    });
    var Ot = Vt(229),
      qt = Vt(4771);

    function Dt(tt) {
      return mt(tt) === Ot.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function mt(tt) {
      return "object" === typeof tt && null !== tt ? tt.code : void 0
    }

    function dt(tt) {
      var et;
      return null !== (et = Object.keys(qt.e).find((et => qt.e[et] === tt))) && void 0 !== et ? et : null
    }

    function jt(tt) {
      return "notWhitelisted" === tt ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Ht = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36709: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt,
      d: () => Xt,
      f: () => Et,
      j: () => Qt
    });
    var Ot = Vt(391),
      qt = Vt(736),
      Dt = Vt(741),
      mt = Vt(39);
    const dt = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      jt = "playSessionGameNameWithVariation",
      Ht = "wasMatchmakePlayer";

    function Xt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h;
      (0, Dt.h)(tt, dt)
    }

    function Qt() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h).setItem(Ht, !0)
    }

    function lt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h;
      return (0, Dt.d)(tt, dt)
    }

    function Et(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mt.h;
      const Vt = (0, Dt.d)(et, dt),
        Xt = function(tt) {
          const et = tt.getItem(jt);
          return "string" !== typeof et ? null : et
        }(et),
        Qt = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h).getItem(Ht)
        }(et);
      let lt;
      return lt = null !== Vt && null !== Xt && (0, Dt.g)(et, dt) && function(tt, et, Vt) {
          const qt = (0, Ot.bc)(tt),
            Dt = (0, Ot.bc)(et),
            mt = (0, Ot.Wb)(tt),
            dt = (0, Ot.Wb)(et);
          return !(qt !== Dt || !Vt) || qt === Dt && mt === dt
        }(Xt, tt, Qt) ? Vt : (0, qt.b)(), (0, Dt.k)(et, dt, lt), et.setItem(jt, tt),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h).removeItem(Ht)
        }(et), lt
    }
  },
  36701: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ct,
      e: () => ut
    });
    var Ot = Vt(1103),
      qt = Vt(241),
      Dt = Vt(388),
      mt = Vt(712),
      dt = Vt(391),
      jt = Vt(1109),
      Ht = Vt(725),
      Xt = Vt(757),
      Qt = Vt(4655),
      lt = Vt(106),
      Et = Vt(153),
      ft = Vt(1826),
      wt = Vt(129),
      yt = Vt(36709),
      Nt = Vt(39),
      Mt = Vt(738),
      bt = Vt(717),
      Jt = Vt(36715);

    function Ct() {
      var tt, et;
      return [...null !== (tt = navigator.languages) && void 0 !== tt ? tt : [null !== (et = navigator.language) && void 0 !== et ? et : "none"], "en-Gb"]
    }

    function ut(tt, et, Vt, ut, Kt) {
      const ht = (0, Ot.k)(et) ? (0, Ot.p)(et) : null,
        vt = tt.isLoggedIn() && void 0 !== (0, qt.c)(Dt.j, Et.siteUsed) ? (0, bt.g)() : null,
        Wt = {
          cookies: (0, ft.getAllCookiesForGameNameWithVariation)(et),
          isMobile: (0, lt.isMobile)(),
          isUsingCustomGameTexturePack: null !== ht && Kt(ht),
          generalCookies: {
            joinDiscord: !!Nt.e.getItem("DiscordPressed"),
            newGo: Qt.d,
            ...tt.getMetricsCookies(),
            trafficCode: ut,
            compliance: lt.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, lt.getBrowserName)(),
            version: (0, lt.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, lt.getPlatformType)(),
            deviceType: (0, wt.d)()
          },
          isLoggedIn: tt.isLoggedIn(),
          lobbyName: Vt,
          languages: Ct(),
          version: mt.d,
          siteUsed: Et.siteUsed,
          subsiteUsed: Et.subsiteUsed,
          playSessionId: (0, yt.f)(et),
          visitSessionId: (0, Mt.e)(),
          clientReason: Ht.u.reason,
          budgetBasis: (0, Jt.g)(),
          ...null !== Xt.p && {
            diagClaim: Xt.p.claimId
          },
          ...null !== vt && {
            webGpuLoss: vt
          }
        };
      return null !== ht && (0, dt.Jc)(ht) ? (Wt.lobbyName = (0, Ot.i)(ht, (0, Ot.o)(et), Vt), {
        roomName: `classic_${jt.f}`,
        joinOptions: Wt
      }) : {
        roomName: et,
        joinOptions: Wt
      }
    }
  },
  39282: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Et,
      d: () => lt
    });
    const Ot = "ue:",
      qt = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      Dt = "[A-Za-z0-9]{1,24}",
      mt = 15,
      dt = new RegExp(`^${Dt}$`);
    new RegExp(`^${Ot}(${[...qt,"other"].join("|")}):(?:n|k(${Dt})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function jt(tt, et, Vt, Dt, jt) {
      const Ht = "string" === typeof tt && qt.includes(tt) ? tt : "other";
      let Xt = "n";
      return "string" === typeof et ? Xt = dt.test(et) ? `k${et}` : "n" : "number" === typeof Vt && Number.isInteger(Vt) && Vt >= 0 && Vt <= mt && (Xt = `b${Vt}`), `${Ot}${Ht}:${Xt}:${Dt?1:0}${jt?1:0}`
    }
    var Ht = Vt(1764),
      Xt = Vt(1832);
    let Qt = null;

    function lt(tt) {
      const et = tt instanceof Element && tt !== document.body && tt !== document.documentElement && !(0, Ht.l)(tt) && !tt.closest("#root");
      return {
        editable: (0, Xt.c)(tt),
        outsideView: et
      }
    }

    function Et(tt) {
      return Qt ??= function(tt) {
        try {
          const {
            editable: et,
            outsideView: Vt
          } = lt(tt.target), Ot = tt;
          return jt(tt.type, Ot.code, Ot.button, et, Vt)
        } catch {
          return jt(null, null, null, !1, !1)
        }
      }(tt), Qt
    }
  },
  39271: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      f: () => Dt,
      j: () => dt,
      l: () => Xt,
      p: () => jt,
      q: () => mt
    });
    var Ot = Vt(229);
    const qt = 3e3,
      Dt = 15e3;

    function mt(tt) {
      const et = tt.endsWith(Ot.l);
      return {
        text: (et ? tt.slice(0, -Ot.l.length) : tt) || null,
        dropsCache: et
      }
    }
    const dt = "Either your internet isn't working or this is a bug.";

    function jt(tt, et) {
      const Vt = Xt(tt);
      return null !== Vt.name && "" === Ot.b[Vt.name].text && null !== et ? et : Vt.reason
    }
    const Ht = "You were removed from the game.";

    function Xt(tt) {
      var et;
      let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const qt = null !== (et = Object.keys(Ot.b).find((et => Ot.b[et].code === tt))) && void 0 !== et ? et : null;
      if (null === qt) return {
        code: tt,
        name: qt,
        reason: null !== Vt && void 0 !== Vt ? Vt : `${dt}\nCode: ${tt}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Dt,
        canReconnect: mt = !1
      } = Ot.b[qt], jt = tt === Ot.b.outdatedVersion.code || tt === Ot.b.loadRecaptchaError.code;
      return {
        code: tt,
        name: qt,
        reason: "" !== Dt ? Dt : null !== Vt && void 0 !== Vt ? Vt : tt === Ot.b.gameOrPluginKick.code ? Ht : `Code: ${tt}`,
        canReconnect: mt,
        automaticallyReconnect: tt === Ot.b.customGameUpdated.code || tt === Ot.b.duplicateLobbyNameError.code,
        requiresRefresh: jt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);