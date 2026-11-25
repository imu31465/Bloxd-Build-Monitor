export const id = 162;
export const ids = [162];
export const modules = {
  39354: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      g: () => zQ
    });
    var wQ = XQ(31);
    let qQ = !1;

    function TQ() {
      return qQ
    }

    function zQ(QQ) {
      qQ !== QQ && (qQ = QQ, wQ.k.mB("replayViewer|videoExportChanged"))
    }
  },
  36674: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      g: () => sQ,
      j: () => PQ,
      k: () => FQ,
      m: () => pQ
    });
    var wQ = XQ(670),
      qQ = XQ(1812),
      TQ = XQ(5140);
    class zQ {
      constructor(QQ, WQ) {
        this.width = QQ, this.yJ = WQ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(QQ * WQ)
      }
      push(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = this.data,
          wQ = this.next * this.width;
        for (let qQ = 0; qQ < this.width; qQ++) XQ[wQ + qQ] = QQ[WQ + qQ];
        this.next = (this.next + 1) % this.yJ, this.size = Math.min(this.size + 1, this.yJ)
      }
      rows() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const XQ = [],
          wQ = (this.next - this.size + this.yJ) % this.yJ;
        for (let qQ = 0; qQ < this.size; qQ++) {
          const TQ = (wQ + qQ) % this.yJ * this.width;
          this.data[TQ + QQ] >= WQ && XQ.push(Array.from(this.data.subarray(TQ, TQ + this.width)))
        }
        return XQ
      }
      lines() {
        return this.rows().map((QQ => QQ.join(",")))
      }
    }
    const sQ = 10,
      FQ = {
        idle: 0,
        HI: 1,
        oR: 2,
        xR: 3,
        Py: 4
      },
      PQ = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      gQ = {
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
      JQ = 12e3,
      rQ = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      IQ = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      jQ = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      BQ = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yQ = ["nowMs", "change", "count"];

    function VQ(QQ) {
      return "js" === QQ ? gQ.jsClient : gQ.wasmClient
    }
    class DQ {
      constructor() {
        this.steps = new zQ(sQ, JQ), this.events = new zQ(IQ.length, JQ), this.frames = new zQ(jQ.length, JQ), this.cameraSets = new zQ(TQ.f, 256), this.changes = new zQ(yQ.length, 256)
      }
    }
    const pQ = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(IQ.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(QQ, WQ) {
        this.startedClient = QQ, this.startedAtMs = performance.now(), null !== this.rings ? this.change(VQ(QQ)) : WQ && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(gQ.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new DQ, null !== this.startedClient && this.changeAt(this.startedAtMs, VQ(this.startedClient), 1))
      }
      step(QQ, WQ) {
        var XQ;
        QQ[WQ + 6] !== FQ.Py && (null === (XQ = this.rings) || void 0 === XQ || XQ.steps.push(QQ, WQ))
      }
      cameraSet(QQ, WQ) {
        var XQ;
        null === (XQ = this.rings) || void 0 === XQ || XQ.cameraSets.push(QQ, WQ)
      }
      mouseMove(QQ, WQ) {
        const XQ = this.rings;
        if (null === XQ) return;
        const wQ = this.sample;
        wQ[0] = QQ.timeStamp, wQ[1] = performance.now(), wQ[2] = QQ.movementX, wQ[3] = QQ.movementY, wQ[4] = WQ ? 1 : 0, XQ.events.push(wQ)
      }
      frame(QQ, WQ, XQ, wQ) {
        const qQ = this.rings;
        if (null === qQ || wQ === PQ.none) return;
        const TQ = this.sample;
        TQ[0] = performance.now(), TQ[1] = QQ, TQ[2] = WQ, TQ[3] = XQ, TQ[4] = wQ, qQ.frames.push(TQ)
      }
      change(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), QQ, WQ)
      }
      changeAt(QQ, WQ, XQ) {
        const wQ = this.rings;
        if (null === wQ) return;
        const qQ = this.sample;
        qQ[0] = QQ, qQ[1] = WQ, qQ[2] = XQ, wQ.changes.push(qQ)
      }
      dumpText() {
        var QQ, WQ;
        const XQ = this.rings;
        return [`look records (${this.startedClient}): ${rQ.join(",")}`, ...null !== (QQ = null === XQ || void 0 === XQ ? void 0 : XQ.steps.lines()) && void 0 !== QQ ? QQ : [], `mousemove events: ${IQ.join(",")}`, ...null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.events.lines()) && void 0 !== WQ ? WQ : []].join("\n")
      }
      toJson(QQ, WQ) {
        var XQ;
        const qQ = QQ - 6e4,
          TQ = this.rings,
          zQ = function(QQ, WQ) {
            var XQ;
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const TQ = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.rows(wQ, qQ)) && void 0 !== XQ ? XQ : [];
            return {
              columns: WQ,
              fromMs: 0 === TQ.length ? null : TQ[0][wQ],
              rows: TQ
            }
          };
        return {
          version: wQ.c,
          client: null !== (XQ = this.startedClient) && void 0 !== XQ ? XQ : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: QQ,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Sy: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...WQ,
          outcomes: FQ,
          frameKinds: PQ,
          changes: gQ,
          lookSteps: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.steps, rQ),
          mouseMoves: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.events, IQ, 1),
          frames: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.frames, jQ),
          cameraSets: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.cameraSets, BQ),
          pageChanges: zQ(null === TQ || void 0 === TQ ? void 0 : TQ.changes, yQ)
        }
      }
      save(QQ) {
        const WQ = JSON.stringify(this.toJson(performance.now(), QQ));
        (0, qQ.e)(new Blob([WQ], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36671: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      LOOK_DEBUG_HEADER: () => gQ,
      endLookDebugTake: () => VQ,
      noteLookDroppedCopy: () => DQ,
      saveLookCapture: () => pQ,
      startLookDebug: () => yQ
    });
    var wQ = XQ(5140),
      qQ = XQ(3045),
      TQ = XQ(1972);
    const zQ = new Map(Object.entries(wQ.l).map((QQ => {
      let [WQ, XQ] = QQ;
      return [XQ, WQ]
    })));

    function sQ(QQ) {
      return (0, TQ.y)(QQ).toFixed(1)
    }

    function FQ(QQ, WQ) {
      return `camera set by ${zQ.get(QQ[WQ+1])}: heading ${`${sQ(QQ[WQ+2])} -> ${sQ(QQ[WQ+4])}`} deg, pitch ${`${sQ(QQ[WQ+3])} -> ${sQ(QQ[WQ+5])}`} deg, at ${QQ[WQ].toFixed(1)} ms`
    }
    var PQ = XQ(36674);
    const gQ = 2;

    function JQ(QQ) {
      return Number.isFinite(QQ) ? String(Math.round(10 * QQ) / 10) : String(QQ)
    }

    function rQ(QQ) {
      return Number.isFinite(QQ) ? QQ.toFixed(1) : String(QQ)
    }
    class IQ {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.oR = 0, this.pastLimit = 0, this.lockSkips = 0, this.Py = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.oR > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.oR > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class jQ {
      constructor() {
        var QQ = this;
        this.topicOn = (0, qQ.m)("look"), this.remote = (0, qQ.n)(), this.tally = new IQ, this.takes = null, this.started = !1, this.record = function(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (PQ.m.step(WQ, XQ), !QQ.topicOn) return;
          const wQ = WQ[XQ],
            qQ = WQ[XQ + 1],
            TQ = WQ[XQ + 2],
            zQ = WQ[XQ + 3],
            sQ = WQ[XQ + 4],
            FQ = WQ[XQ + 5],
            gQ = WQ[XQ + 6],
            IQ = WQ[XQ + 7],
            jQ = WQ[XQ + 8],
            BQ = WQ[XQ + 9],
            yQ = QQ.tally;
          switch (yQ.frames++, gQ) {
            case PQ.k.idle:
              return void yQ.idle++;
            case PQ.k.Py:
              return void yQ.Py++;
            case PQ.k.xR:
              return yQ.lockSkips++, void(0 === TQ && 0 === zQ || QQ.outlier(`lock skip dropped raw (${JQ(TQ)}, ${JQ(zQ)}) at ${rQ(wQ)} ms`))
          }
          yQ.looked++, Number.isFinite(qQ) && (yQ.dtMin = Math.min(yQ.dtMin, qQ), yQ.dtMax = Math.max(yQ.dtMax, qQ), yQ.dtSum += qQ, qQ > 0 && (yQ.peakRate = Math.max(yQ.peakRate, Math.hypot(sQ, FQ) / qQ))), yQ.raw[0] += TQ, yQ.raw[1] += zQ, yQ.turned[0] += sQ, yQ.turned[1] += FQ;
          const VQ = Math.abs(TQ) > BQ || Math.abs(zQ) > BQ,
            DQ = `raw (${JQ(TQ)}, ${JQ(zQ)}) over ${rQ(qQ)} ms, limit ${JQ(BQ)}, filter v (${IQ.toFixed(3)}, ${jQ.toFixed(3)}) px/ms, at ${rQ(wQ)} ms`;
          gQ === PQ.k.oR ? (yQ.oR++, QQ.outlier(`spike put right: ${DQ} -> turned (${JQ(sQ)}, ${JQ(FQ)})`)) : VQ ? (yQ.pastLimit++, QQ.outlier(`kept past limit: ${DQ}`)) : qQ > 50 && (yQ.longFrames++, QQ.remote || QQ.outlier(`long frame: ${DQ}, turned in full`))
        }, this.onMouseMove = QQ => {
          const WQ = null !== document.pointerLockElement;
          if (PQ.m.mouseMove(QQ, WQ), !this.topicOn) return;
          const XQ = this.tally,
            {
              movementX: wQ,
              movementY: qQ
            } = QQ;
          XQ.events++;
          const TQ = Math.max(Math.abs(wQ), Math.abs(qQ));
          XQ.eventMax = Math.max(XQ.eventMax, TQ), TQ >= 200 && (XQ.bigEvents++, this.eventOutlier(`big mousemove (${wQ}, ${qQ}) at ${rQ(QQ.timeStamp)} ms, lock ${WQ?"Ds":"free"}`))
        }, this.onLockChange = () => {
          const QQ = document.pointerLockElement;
          QQ ? PQ.m.lockGained() : PQ.m.change(PQ.d.lockLost), this.topicOn && (0, qQ.j)("look", `pointer lock ${QQ?`gained (${QQ.tagName.toLowerCase()})`:"lost"} at ${rQ(performance.now())} ms`)
        }, this.onLockError = () => {
          PQ.m.change(PQ.d.lockError), this.topicOn && (0, qQ.j)("look", `pointer lock request failed at ${rQ(performance.now())} ms`)
        }, this.onVisibility = () => {
          PQ.m.change("hidden" === document.visibilityState ? PQ.d.hidden : PQ.d.visible), this.topicOn && (0, qQ.j)("look", `page ${document.visibilityState} at ${rQ(performance.now())} ms`)
        }, this.onFocus = () => {
          PQ.m.change(PQ.d.focus)
        }, this.onBlur = () => {
          PQ.m.change(PQ.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const QQ = this.tally;
          if (this.tally = new IQ, !QQ.moved() || this.remote && !QQ.hasEvent()) return;
          const WQ = QQ.looked > 0 ? QQ.dtSum / QQ.looked : NaN,
            XQ = [`${QQ.frames} frames (${QQ.looked} looked, ${QQ.idle} idle${"wasm"===PQ.m.client?`, ${QQ.Py} carried`:""})`, `dt avg ${rQ(WQ)} min ${rQ(QQ.dtMin)} max ${rQ(QQ.dtMax)}, ${QQ.longFrames} long`, `${QQ.events} mousemoves (max ${JQ(QQ.eventMax)} px, ${QQ.bigEvents} big)`, `raw (${JQ(QQ.raw[0])}, ${JQ(QQ.raw[1])}) turned (${JQ(QQ.turned[0])}, ${JQ(QQ.turned[1])})`, `peak ${QQ.peakRate.toFixed(2)} px/ms`, `put right ${QQ.oR}, past limit ${QQ.pastLimit}, lock skips ${QQ.lockSkips}`, "lock " + (document.pointerLockElement ? "Ds" : "free")];
          QQ.dropped > 0 && XQ.push(`${QQ.dropped} doubled spike copies dropped`), QQ.cameraSets > 0 && XQ.push(`${QQ.cameraSets} camera sets`), QQ.cameraSetsLost > 0 && XQ.push(`${QQ.cameraSetsLost} camera set records lost`), QQ.lost > 0 && XQ.push(`${QQ.lost} records lost`), QQ.suppressed > 0 && XQ.push(`${QQ.suppressed} outlier lines not shown`), (0, qQ.j)("look", `1s: ${XQ.join("; ")}`)
        }
      }
      start(QQ, WQ) {
        if (PQ.m.start(QQ, null !== document.pointerLockElement), this.takes = WQ, this.topicOn) {
          const {
            screen: WQ
          } = window;
          (0, qQ.j)("look", `start: ${QQ} client, dpr ${window.devicePixelRatio}, screen ${WQ.width}x${WQ.height}, pointer lock ${document.pointerLockElement?"Ds":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, qQ.h)("look", (() => PQ.m.dumpText())))
      }
      outlier(QQ) {
        const WQ = this.tally;
        WQ.outliers >= 20 ? WQ.suppressed++ : (WQ.outliers++, (0, qQ.j)("look", QQ))
      }
      eventOutlier(QQ) {
        const WQ = this.tally;
        WQ.eventLines >= 10 ? WQ.suppressed++ : (WQ.eventLines++, (0, qQ.j)("look", QQ))
      }
      takeRecords() {
        if (null === this.takes) return;
        const QQ = this.takes.look();
        if (QQ.length >= gQ) {
          this.counted(PQ.d.stepsLost, QQ[0]), this.counted(PQ.d.droppedCopies, QQ[1]);
          for (let WQ = gQ; WQ + PQ.g <= QQ.length; WQ += PQ.g) this.record(QQ, WQ)
        }
        const WQ = this.takes.cameraSets();
        if (WQ.length >= wQ.c) {
          this.counted(PQ.d.cameraSetsLost, WQ[0]);
          for (let QQ = wQ.c; QQ + wQ.f <= WQ.length; QQ += wQ.f) PQ.m.cameraSet(WQ, QQ), this.topicOn && (this.tally.cameraSets++, this.outlier(FQ(WQ, QQ)))
        }
      }
      droppedCopy() {
        this.counted(PQ.d.droppedCopies, 1)
      }
      counted(QQ, WQ) {
        if (0 === WQ) return;
        if (PQ.m.change(QQ, WQ), !this.topicOn) return;
        const XQ = this.tally;
        QQ === PQ.d.droppedCopies ? XQ.dropped += WQ : QQ === PQ.d.stepsLost ? XQ.lost += WQ : XQ.cameraSetsLost += WQ
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let BQ = null;

    function yQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return BQ ??= new jQ, BQ.start(QQ, WQ), BQ.record
    }

    function VQ() {
      var QQ;
      null === (QQ = BQ) || void 0 === QQ || QQ.endTake()
    }

    function DQ() {
      var QQ;
      null === (QQ = BQ) || void 0 === QQ || QQ.droppedCopy()
    }
    async function pQ(QQ) {
      var WQ;
      null === (WQ = BQ) || void 0 === WQ || WQ.takeRecords();
      const {
        clientHintsRead: wQ,
        debugDeviceLines: qQ
      } = await XQ.e(30).then((() => XQ(34376)));
      await wQ, PQ.m.save({
        ...QQ,
        device: qQ()
      })
    }
  },
  39320: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ
    });
    var wQ = XQ(31),
      qQ = XQ(1335),
      TQ = XQ(3223);
    const zQ = "Reconnecting";
    class sQ {
      constructor(QQ) {
        this.hooks = QQ, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = QQ => {
          QQ.persisted || this.leave()
        }, this.controller = new TQ.e((WQ => QQ.reconnect(WQ)), {
          isSessionLive: () => !this.ended && QQ.isLive(),
          onPhaseChanged: QQ => {
            this.onPhaseChanged(QQ)
          },
          onReconnected: WQ => {
            QQ.onReconnected(WQ)
          },
          onGaveUp: WQ => {
            !this.ended && QQ.isLive() && QQ.onGaveUp(this.sessionBased, WQ)
          }
        })
      }
      onInitialInfo(QQ, WQ) {
        this.graceMs = QQ, this.sessionBased = WQ
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(QQ) {
        this.ended || this.controller.onConnectionLost(QQ, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const QQ = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          WQ = this.controller.heldToken;
        this.end(), QQ && "" !== WQ && this.hooks.releaseSeat(WQ)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(QQ) {
        const WQ = (0, TQ.o)(QQ);
        WQ !== this.stopped && (this.stopped = WQ, this.hooks.freeze(WQ));
        const XQ = "frozen" === QQ || "resuming" === QQ && this.frozen;
        XQ && !this.frozen ? (0, qQ.z)(zQ, {
          overridesPause: !0
        }) : !XQ && this.frozen && (0, qQ.y)(zQ), this.frozen = XQ, this.setListening("connected" !== QQ), wQ.k.mB(TQ.n, XQ ? "frozen" : QQ)
      }
      setListening(QQ) {
        QQ !== this.listening && (this.listening = QQ, QQ ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39323: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    class wQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = QQ, this.now = WQ, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const QQ = this.now(),
            WQ = QQ - this.lastCheckAt <= 2e3;
          this.lastCheckAt = QQ;
          const XQ = "visible" === document.visibilityState;
          !XQ || WQ && this.wasVisible || (this.resumedAt = QQ), this.wasVisible = XQ, XQ && QQ - this.lastHeardAt > 12e3 && QQ - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = WQ(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39333: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      h: () => gQ
    });
    var wQ = XQ(1776),
      qQ = XQ(231),
      TQ = XQ(1747),
      zQ = XQ(1838),
      sQ = XQ(1238),
      FQ = XQ(1165);
    async function PQ(QQ, WQ) {
      return function(QQ) {
        return "object" === typeof QQ && null !== QQ && QQ.code === qQ.e.VpnIp.code
      }(WQ) && function(QQ) {
        return TQ.e.supports("appCheck") && QQ.isLoggedIn() && !QQ.hasTriedAppAttestation()
      }(QQ) && await async function(QQ) {
        try {
          const {
            token: WQ
          } = await (0, zQ.e)(), {
            "3PSIDMCPP": XQ
          } = await (0, FQ.postJsonWithMetricsCookiesAndJsonResponse)(`${sQ.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: WQ
          }, {
            retries: 0
          }, QQ.getMetricsCookies());
          return QQ.setAppAttestedAuthJwt(XQ), !0
        } catch (WQ) {
          return WQ instanceof wQ.c && "failed" === WQ.code ? (console.warn("The app couldn't get an App Check token:", WQ), QQ.markAppAttestationTried()) : console.error("Failed to attest the app:", WQ), !1
        }
      }(QQ)
    }
    async function gQ(QQ, WQ) {
      try {
        return await WQ()
      } catch (XQ) {
        if (!await PQ(QQ, XQ)) throw XQ
      }
      return WQ()
    }
  },
  39331: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => rQ,
      g: () => gQ
    });
    var wQ = XQ(231),
      qQ = XQ(1881),
      TQ = XQ(1243),
      zQ = XQ(9285);
    const sQ = [250, 500, 1e3, 2e3, 1250],
      FQ = 406;

    function PQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return !1;
      const {
        code: WQ,
        message: XQ
      } = QQ, qQ = wQ.e.duplicateLobbyNameError;
      return (WQ === qQ.code || WQ === FQ) && (XQ === qQ.text || XQ === qQ.text + wQ.n)
    }
    async function gQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.e;
      for (let qQ = 0;; qQ++) {
        let zQ;
        (0, TQ.p)(WQ);
        try {
          return await QQ()
        } catch (wQ) {
          if (zQ = sQ[qQ], void 0 === zQ || !PQ(wQ)) throw wQ
        }
        await XQ(zQ, WQ)
      }
    }
    const JQ = new Set([wQ.e.duplicateLobbyNameError.code, wQ.e.lobbyCantBeCreated.code, wQ.e.roomDisposedEarlyError.code, wQ.e.roomDisposedLateError.code, wQ.e.serverRoomLimitReached.code]);

    function rQ(QQ) {
      if (PQ(QQ)) return !0;
      const WQ = (0, zQ.g)(QQ);
      return "number" === typeof WQ && JQ.has(WQ)
    }
  },
  39336: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ
    });
    var wQ = XQ(9285),
      qQ = XQ(36795),
      TQ = XQ(39341);
    const zQ = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      sQ = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function FQ(QQ, WQ) {
      if (QQ instanceof qQ.f) return {
        at: zQ[WQ],
        code: 0
      };
      const XQ = (0, wQ.g)(QQ),
        FQ = "number" === typeof XQ ? XQ : 0;
      return null !== (0, TQ.m)(FQ).name ? {
        at: "refused",
        code: FQ
      } : {
        at: sQ[WQ],
        code: FQ
      }
    }
  },
  9285: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      g: () => zQ,
      j: () => sQ,
      k: () => PQ,
      n: () => FQ
    });
    var wQ = XQ(231),
      qQ = XQ(4948);

    function TQ(QQ) {
      return zQ(QQ) === wQ.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function zQ(QQ) {
      return "object" === typeof QQ && null !== QQ ? QQ.code : void 0
    }

    function sQ(QQ) {
      var WQ;
      return null !== (WQ = Object.keys(qQ.d).find((WQ => qQ.d[WQ] === QQ))) && void 0 !== WQ ? WQ : null
    }

    function FQ(QQ) {
      return "notWhitelisted" === QQ ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const PQ = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36775: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => rQ,
      h: () => gQ,
      k: () => IQ,
      n: () => JQ
    });
    var wQ = XQ(402),
      qQ = XQ(695),
      TQ = XQ(702),
      zQ = XQ(43);
    const sQ = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      FQ = "playSessionGameNameWithVariation",
      PQ = "wasMatchmakePlayer";

    function gQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m;
      (0, TQ.j)(QQ, sQ)
    }

    function JQ() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m).setItem(PQ, !0)
    }

    function rQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m;
      return (0, TQ.e)(QQ, sQ)
    }

    function IQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ.m;
      const XQ = (0, TQ.e)(WQ, sQ),
        gQ = function(QQ) {
          const WQ = QQ.getItem(FQ);
          return "string" !== typeof WQ ? null : WQ
        }(WQ),
        JQ = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m).getItem(PQ)
        }(WQ);
      let rQ;
      return rQ = null !== XQ && null !== gQ && (0, TQ.f)(WQ, sQ) && function(QQ, WQ, XQ) {
          const qQ = (0, wQ.Mb)(QQ),
            TQ = (0, wQ.Mb)(WQ),
            zQ = (0, wQ.Fb)(QQ),
            sQ = (0, wQ.Fb)(WQ);
          return !(qQ !== TQ || !XQ) || qQ === TQ && zQ === sQ
        }(gQ, QQ, JQ) ? XQ : (0, qQ.e)(), (0, TQ.n)(WQ, sQ, rQ), WQ.setItem(FQ, QQ),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m).removeItem(PQ)
        }(WQ), rQ
    }
  },
  36766: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => UQ,
      e: () => bQ
    });
    var wQ = XQ(1049),
      qQ = XQ(243),
      TQ = XQ(400),
      zQ = XQ(670),
      sQ = XQ(402),
      FQ = XQ(1055),
      PQ = XQ(691),
      gQ = XQ(714),
      JQ = XQ(4836),
      rQ = XQ(105),
      IQ = XQ(158),
      jQ = XQ(1802),
      BQ = XQ(129),
      yQ = XQ(36775),
      VQ = XQ(43),
      DQ = XQ(698),
      pQ = XQ(675),
      GQ = XQ(36777);

    function UQ() {
      var QQ, WQ;
      return [...null !== (QQ = navigator.languages) && void 0 !== QQ ? QQ : [null !== (WQ = navigator.language) && void 0 !== WQ ? WQ : "none"], "en-Gb"]
    }

    function bQ(QQ, WQ, XQ, bQ, vQ) {
      const dQ = (0, wQ.k)(WQ) ? (0, wQ.n)(WQ) : null,
        HQ = QQ.isLoggedIn() && void 0 !== (0, qQ.e)(TQ.j, IQ.siteUsed) ? (0, pQ.e)() : null,
        aQ = {
          cookies: (0, jQ.getAllCookiesForGameNameWithVariation)(WQ),
          isMobile: (0, rQ.isMobile)(),
          isUsingCustomGameTexturePack: null !== dQ && vQ(dQ),
          generalCookies: {
            joinDiscord: !!VQ.i.getItem("DiscordPressed"),
            newGo: JQ.e,
            ...QQ.getMetricsCookies(),
            trafficCode: bQ,
            compliance: rQ.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, rQ.getBrowserName)(),
            version: (0, rQ.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, rQ.getPlatformType)(),
            deviceType: (0, BQ.c)()
          },
          isLoggedIn: QQ.isLoggedIn(),
          lobbyName: XQ,
          languages: UQ(),
          version: zQ.c,
          siteUsed: IQ.siteUsed,
          subsiteUsed: IQ.subsiteUsed,
          playSessionId: (0, yQ.k)(WQ),
          visitSessionId: (0, DQ.d)(),
          clientReason: PQ.l.reason,
          budgetBasis: (0, GQ.i)(),
          ...null !== gQ.t && {
            diagClaim: gQ.t.claimId
          },
          ...null !== HQ && {
            webGpuLoss: HQ
          }
        };
      return null !== dQ && (0, sQ.Bc)(dQ) ? (aQ.lobbyName = (0, wQ.i)(dQ, (0, wQ.m)(WQ), XQ), {
        roomName: `classic_${FQ.c}`,
        joinOptions: aQ
      }) : {
        roomName: WQ,
        joinOptions: aQ
      }
    }
  },
  39349: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => IQ,
      h: () => rQ
    });
    const wQ = "ue:",
      qQ = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      TQ = "[A-Za-z0-9]{1,24}",
      zQ = 15,
      sQ = new RegExp(`^${TQ}$`);
    new RegExp(`^${wQ}(${[...qQ,"other"].join("|")}):(?:n|k(${TQ})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function FQ(QQ, WQ, XQ, TQ, FQ) {
      const PQ = "string" === typeof QQ && qQ.includes(QQ) ? QQ : "other";
      let gQ = "n";
      return "string" === typeof WQ ? gQ = sQ.test(WQ) ? `k${WQ}` : "n" : "number" === typeof XQ && Number.isInteger(XQ) && XQ >= 0 && XQ <= zQ && (gQ = `b${XQ}`), `${wQ}${PQ}:${gQ}:${TQ?1:0}${FQ?1:0}`
    }
    var PQ = XQ(1728),
      gQ = XQ(1806);
    let JQ = null;

    function rQ(QQ) {
      const WQ = QQ instanceof Element && QQ !== document.body && QQ !== document.documentElement && !(0, PQ.q)(QQ) && !QQ.closest("#root");
      return {
        editable: (0, gQ.b)(QQ),
        outsideView: WQ
      }
    }

    function IQ(QQ) {
      return JQ ??= function(QQ) {
        try {
          const {
            editable: WQ,
            outsideView: XQ
          } = rQ(QQ.target), wQ = QQ;
          return FQ(QQ.type, wQ.code, wQ.button, WQ, XQ)
        } catch {
          return FQ(null, null, null, !1, !1)
        }
      }(QQ), JQ
    }
  },
  39341: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      e: () => TQ,
      i: () => sQ,
      m: () => gQ,
      o: () => FQ,
      q: () => zQ
    });
    var wQ = XQ(231);
    const qQ = 3e3,
      TQ = 15e3;

    function zQ(QQ) {
      const WQ = QQ.endsWith(wQ.n);
      return {
        text: (WQ ? QQ.slice(0, -wQ.n.length) : QQ) || null,
        dropsCache: WQ
      }
    }
    const sQ = "Either your internet isn't working or this is a bug.";

    function FQ(QQ, WQ) {
      const XQ = gQ(QQ);
      return null !== XQ.name && "" === wQ.e[XQ.name].text && null !== WQ ? WQ : XQ.reason
    }
    const PQ = "You were removed from the game.";

    function gQ(QQ) {
      var WQ;
      let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const qQ = null !== (WQ = Object.keys(wQ.e).find((WQ => wQ.e[WQ].code === QQ))) && void 0 !== WQ ? WQ : null;
      if (null === qQ) return {
        code: QQ,
        name: qQ,
        reason: null !== XQ && void 0 !== XQ ? XQ : `${sQ}\nCode: ${QQ}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: TQ,
        canReconnect: zQ = !1
      } = wQ.e[qQ], FQ = QQ === wQ.e.outdatedVersion.code || QQ === wQ.e.loadRecaptchaError.code;
      return {
        code: QQ,
        name: qQ,
        reason: "" !== TQ ? TQ : null !== XQ && void 0 !== XQ ? XQ : QQ === wQ.e.gameOrPluginKick.code ? PQ : `Code: ${QQ}`,
        canReconnect: zQ,
        automaticallyReconnect: QQ === wQ.e.customGameUpdated.code || QQ === wQ.e.duplicateLobbyNameError.code,
        requiresRefresh: FQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);