export const id = 174;
export const ids = [174];
export const modules = {
  40285: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      f: () => yV
    });
    var JV = xV(32);
    let YV = !1;

    function UV() {
      return YV
    }

    function yV(VV) {
      YV !== VV && (YV = VV, JV.h.QZ("replayViewer|videoExportChanged"))
    }
  },
  37521: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      h: () => pV,
      i: () => nV,
      j: () => QV,
      k: () => qV
    });
    var JV = xV(660),
      YV = xV(1846),
      UV = xV(5301);
    class yV {
      constructor(VV, eV) {
        this.width = VV, this.Jv = eV, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(VV * eV)
      }
      push(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = this.data,
          JV = this.next * this.width;
        for (let YV = 0; YV < this.width; YV++) xV[JV + YV] = VV[eV + YV];
        this.next = (this.next + 1) % this.Jv, this.size = Math.min(this.size + 1, this.Jv)
      }
      rows() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const xV = [],
          JV = (this.next - this.size + this.Jv) % this.Jv;
        for (let YV = 0; YV < this.size; YV++) {
          const UV = (JV + YV) % this.Jv * this.width;
          this.data[UV + VV] >= eV && xV.push(Array.from(this.data.subarray(UV, UV + this.width)))
        }
        return xV
      }
      lines() {
        return this.rows().map((VV => VV.join(",")))
      }
    }
    const pV = 10,
      QV = {
        idle: 0,
        ZZ: 1,
        ND: 2,
        zD: 3,
        zE: 4
      },
      nV = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      wV = {
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
      ZV = 12e3,
      vV = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      rV = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      kV = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      bV = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      EV = ["nowMs", "change", "count"];

    function BV(VV) {
      return "js" === VV ? wV.jsClient : wV.wasmClient
    }
    class jV {
      constructor() {
        this.steps = new yV(pV, ZV), this.events = new yV(rV.length, ZV), this.frames = new yV(kV.length, ZV), this.cameraSets = new yV(UV.i, 256), this.changes = new yV(EV.length, 256)
      }
    }
    const qV = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(rV.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(VV, eV) {
        this.startedClient = VV, this.startedAtMs = performance.now(), null !== this.rings ? this.change(BV(VV)) : eV && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(wV.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new jV, null !== this.startedClient && this.changeAt(this.startedAtMs, BV(this.startedClient), 1))
      }
      step(VV, eV) {
        var xV;
        VV[eV + 6] !== QV.zE && (null === (xV = this.rings) || void 0 === xV || xV.steps.push(VV, eV))
      }
      cameraSet(VV, eV) {
        var xV;
        null === (xV = this.rings) || void 0 === xV || xV.cameraSets.push(VV, eV)
      }
      mouseMove(VV, eV) {
        const xV = this.rings;
        if (null === xV) return;
        const JV = this.sample;
        JV[0] = VV.timeStamp, JV[1] = performance.now(), JV[2] = VV.movementX, JV[3] = VV.movementY, JV[4] = eV ? 1 : 0, xV.events.push(JV)
      }
      frame(VV, eV, xV, JV) {
        const YV = this.rings;
        if (null === YV || JV === nV.none) return;
        const UV = this.sample;
        UV[0] = performance.now(), UV[1] = VV, UV[2] = eV, UV[3] = xV, UV[4] = JV, YV.frames.push(UV)
      }
      change(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), VV, eV)
      }
      changeAt(VV, eV, xV) {
        const JV = this.rings;
        if (null === JV) return;
        const YV = this.sample;
        YV[0] = VV, YV[1] = eV, YV[2] = xV, JV.changes.push(YV)
      }
      dumpText() {
        var VV, eV;
        const xV = this.rings;
        return [`look records (${this.startedClient}): ${vV.join(",")}`, ...null !== (VV = null === xV || void 0 === xV ? void 0 : xV.steps.lines()) && void 0 !== VV ? VV : [], `mousemove events: ${rV.join(",")}`, ...null !== (eV = null === xV || void 0 === xV ? void 0 : xV.events.lines()) && void 0 !== eV ? eV : []].join("\n")
      }
      toJson(VV, eV) {
        var xV;
        const YV = VV - 6e4,
          UV = this.rings,
          yV = function(VV, eV) {
            var xV;
            let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const UV = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.rows(JV, YV)) && void 0 !== xV ? xV : [];
            return {
              columns: eV,
              fromMs: 0 === UV.length ? null : UV[0][JV],
              rows: UV
            }
          };
        return {
          version: JV.e,
          client: null !== (xV = this.startedClient) && void 0 !== xV ? xV : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: VV,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          YB: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...eV,
          outcomes: QV,
          frameKinds: nV,
          changes: wV,
          lookSteps: yV(null === UV || void 0 === UV ? void 0 : UV.steps, vV),
          mouseMoves: yV(null === UV || void 0 === UV ? void 0 : UV.events, rV, 1),
          frames: yV(null === UV || void 0 === UV ? void 0 : UV.frames, kV),
          cameraSets: yV(null === UV || void 0 === UV ? void 0 : UV.cameraSets, bV),
          pageChanges: yV(null === UV || void 0 === UV ? void 0 : UV.changes, EV)
        }
      }
      save(VV) {
        const eV = JSON.stringify(this.toJson(performance.now(), VV));
        (0, YV.c)(new Blob([eV], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37517: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      LOOK_DEBUG_HEADER: () => wV,
      endLookDebugTake: () => BV,
      noteLookDroppedCopy: () => jV,
      saveLookCapture: () => qV,
      startLookDebug: () => EV
    });
    var JV = xV(5301),
      YV = xV(3142),
      UV = xV(2014);
    const yV = new Map(Object.entries(JV.q).map((VV => {
      let [eV, xV] = VV;
      return [xV, eV]
    })));

    function pV(VV) {
      return (0, UV.E)(VV).toFixed(1)
    }

    function QV(VV, eV) {
      return `camera set by ${yV.get(VV[eV+1])}: heading ${`${pV(VV[eV+2])} -> ${pV(VV[eV+4])}`} deg, pitch ${`${pV(VV[eV+3])} -> ${pV(VV[eV+5])}`} deg, at ${VV[eV].toFixed(1)} ms`
    }
    var nV = xV(37521);
    const wV = 2;

    function ZV(VV) {
      return Number.isFinite(VV) ? String(Math.round(10 * VV) / 10) : String(VV)
    }

    function vV(VV) {
      return Number.isFinite(VV) ? VV.toFixed(1) : String(VV)
    }
    class rV {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.ND = 0, this.pastLimit = 0, this.lockSkips = 0, this.zE = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.ND > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.ND > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class kV {
      constructor() {
        var VV = this;
        this.topicOn = (0, YV.o)("look"), this.remote = (0, YV.p)(), this.tally = new rV, this.takes = null, this.started = !1, this.record = function(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (nV.k.step(eV, xV), !VV.topicOn) return;
          const JV = eV[xV],
            YV = eV[xV + 1],
            UV = eV[xV + 2],
            yV = eV[xV + 3],
            pV = eV[xV + 4],
            QV = eV[xV + 5],
            wV = eV[xV + 6],
            rV = eV[xV + 7],
            kV = eV[xV + 8],
            bV = eV[xV + 9],
            EV = VV.tally;
          switch (EV.frames++, wV) {
            case nV.j.idle:
              return void EV.idle++;
            case nV.j.zE:
              return void EV.zE++;
            case nV.j.zD:
              return EV.lockSkips++, void(0 === UV && 0 === yV || VV.outlier(`lock skip dropped raw (${ZV(UV)}, ${ZV(yV)}) at ${vV(JV)} ms`))
          }
          EV.looked++, Number.isFinite(YV) && (EV.dtMin = Math.min(EV.dtMin, YV), EV.dtMax = Math.max(EV.dtMax, YV), EV.dtSum += YV, YV > 0 && (EV.peakRate = Math.max(EV.peakRate, Math.hypot(pV, QV) / YV))), EV.raw[0] += UV, EV.raw[1] += yV, EV.turned[0] += pV, EV.turned[1] += QV;
          const BV = Math.abs(UV) > bV || Math.abs(yV) > bV,
            jV = `raw (${ZV(UV)}, ${ZV(yV)}) over ${vV(YV)} ms, limit ${ZV(bV)}, filter v (${rV.toFixed(3)}, ${kV.toFixed(3)}) px/ms, at ${vV(JV)} ms`;
          wV === nV.j.ND ? (EV.ND++, VV.outlier(`spike put right: ${jV} -> turned (${ZV(pV)}, ${ZV(QV)})`)) : BV ? (EV.pastLimit++, VV.outlier(`kept past limit: ${jV}`)) : YV > 50 && (EV.longFrames++, VV.remote || VV.outlier(`long frame: ${jV}, turned in full`))
        }, this.onMouseMove = VV => {
          const eV = null !== document.pointerLockElement;
          if (nV.k.mouseMove(VV, eV), !this.topicOn) return;
          const xV = this.tally,
            {
              movementX: JV,
              movementY: YV
            } = VV;
          xV.events++;
          const UV = Math.max(Math.abs(JV), Math.abs(YV));
          xV.eventMax = Math.max(xV.eventMax, UV), UV >= 200 && (xV.bigEvents++, this.eventOutlier(`big mousemove (${JV}, ${YV}) at ${vV(VV.timeStamp)} ms, lock ${eV?"hn":"free"}`))
        }, this.onLockChange = () => {
          const VV = document.pointerLockElement;
          VV ? nV.k.lockGained() : nV.k.change(nV.e.lockLost), this.topicOn && (0, YV.i)("look", `pointer lock ${VV?`gained (${VV.tagName.toLowerCase()})`:"lost"} at ${vV(performance.now())} ms`)
        }, this.onLockError = () => {
          nV.k.change(nV.e.lockError), this.topicOn && (0, YV.i)("look", `pointer lock request failed at ${vV(performance.now())} ms`)
        }, this.onVisibility = () => {
          nV.k.change("hidden" === document.visibilityState ? nV.e.hidden : nV.e.visible), this.topicOn && (0, YV.i)("look", `page ${document.visibilityState} at ${vV(performance.now())} ms`)
        }, this.onFocus = () => {
          nV.k.change(nV.e.focus)
        }, this.onBlur = () => {
          nV.k.change(nV.e.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const VV = this.tally;
          if (this.tally = new rV, !VV.moved() || this.remote && !VV.hasEvent()) return;
          const eV = VV.looked > 0 ? VV.dtSum / VV.looked : NaN,
            xV = [`${VV.frames} frames (${VV.looked} looked, ${VV.idle} idle${"wasm"===nV.k.client?`, ${VV.zE} carried`:""})`, `dt avg ${vV(eV)} min ${vV(VV.dtMin)} max ${vV(VV.dtMax)}, ${VV.longFrames} long`, `${VV.events} mousemoves (max ${ZV(VV.eventMax)} px, ${VV.bigEvents} big)`, `raw (${ZV(VV.raw[0])}, ${ZV(VV.raw[1])}) turned (${ZV(VV.turned[0])}, ${ZV(VV.turned[1])})`, `peak ${VV.peakRate.toFixed(2)} px/ms`, `put right ${VV.ND}, past limit ${VV.pastLimit}, lock skips ${VV.lockSkips}`, "lock " + (document.pointerLockElement ? "hn" : "free")];
          VV.dropped > 0 && xV.push(`${VV.dropped} doubled spike copies dropped`), VV.cameraSets > 0 && xV.push(`${VV.cameraSets} camera sets`), VV.cameraSetsLost > 0 && xV.push(`${VV.cameraSetsLost} camera set records lost`), VV.lost > 0 && xV.push(`${VV.lost} records lost`), VV.suppressed > 0 && xV.push(`${VV.suppressed} outlier lines not shown`), (0, YV.i)("look", `1s: ${xV.join("; ")}`)
        }
      }
      start(VV, eV) {
        if (nV.k.start(VV, null !== document.pointerLockElement), this.takes = eV, this.topicOn) {
          const {
            screen: eV
          } = window;
          (0, YV.i)("look", `start: ${VV} client, dpr ${window.devicePixelRatio}, screen ${eV.width}x${eV.height}, pointer lock ${document.pointerLockElement?"hn":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, YV.h)("look", (() => nV.k.dumpText())))
      }
      outlier(VV) {
        const eV = this.tally;
        eV.outliers >= 20 ? eV.suppressed++ : (eV.outliers++, (0, YV.i)("look", VV))
      }
      eventOutlier(VV) {
        const eV = this.tally;
        eV.eventLines >= 10 ? eV.suppressed++ : (eV.eventLines++, (0, YV.i)("look", VV))
      }
      takeRecords() {
        if (null === this.takes) return;
        const VV = this.takes.look();
        if (VV.length >= wV) {
          this.counted(nV.e.stepsLost, VV[0]), this.counted(nV.e.droppedCopies, VV[1]);
          for (let eV = wV; eV + nV.h <= VV.length; eV += nV.h) this.record(VV, eV)
        }
        const eV = this.takes.cameraSets();
        if (eV.length >= JV.e) {
          this.counted(nV.e.cameraSetsLost, eV[0]);
          for (let VV = JV.e; VV + JV.i <= eV.length; VV += JV.i) nV.k.cameraSet(eV, VV), this.topicOn && (this.tally.cameraSets++, this.outlier(QV(eV, VV)))
        }
      }
      droppedCopy() {
        this.counted(nV.e.droppedCopies, 1)
      }
      counted(VV, eV) {
        if (0 === eV) return;
        if (nV.k.change(VV, eV), !this.topicOn) return;
        const xV = this.tally;
        VV === nV.e.droppedCopies ? xV.dropped += eV : VV === nV.e.stepsLost ? xV.lost += eV : xV.cameraSetsLost += eV
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let bV = null;

    function EV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return bV ??= new kV, bV.start(VV, eV), bV.record
    }

    function BV() {
      var VV;
      null === (VV = bV) || void 0 === VV || VV.endTake()
    }

    function jV() {
      var VV;
      null === (VV = bV) || void 0 === VV || VV.droppedCopy()
    }
    async function qV(VV) {
      var eV;
      null === (eV = bV) || void 0 === eV || eV.takeRecords();
      const {
        clientHintsRead: JV,
        debugDeviceLines: YV
      } = await xV.e(34).then((() => xV(35172)));
      await JV, nV.k.save({
        ...VV,
        device: YV()
      })
    }
  },
  40232: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV
    });
    var JV = xV(32),
      YV = xV(1332),
      UV = xV(3328);
    const yV = "Reconnecting";
    class pV {
      constructor(VV) {
        this.hooks = VV, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = VV => {
          VV.persisted || this.leave()
        }, this.controller = new UV.e((eV => VV.reconnect(eV)), {
          isSessionLive: () => !this.ended && VV.isLive(),
          onPhaseChanged: VV => {
            this.onPhaseChanged(VV)
          },
          onReconnected: eV => {
            VV.onReconnected(eV)
          },
          onGaveUp: eV => {
            !this.ended && VV.isLive() && VV.onGaveUp(this.sessionBased, eV)
          }
        })
      }
      onInitialInfo(VV, eV) {
        this.graceMs = VV, this.sessionBased = eV
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(VV) {
        this.ended || this.controller.onConnectionLost(VV, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const VV = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          eV = this.controller.heldToken;
        this.end(), VV && "" !== eV && this.hooks.releaseSeat(eV)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(VV) {
        const eV = (0, UV.o)(VV);
        eV !== this.stopped && (this.stopped = eV, this.hooks.freeze(eV));
        const xV = "frozen" === VV || "resuming" === VV && this.frozen;
        xV && !this.frozen ? (0, YV.p)(yV, {
          overridesPause: !0
        }) : !xV && this.frozen && (0, YV.m)(yV), this.frozen = xV, this.setListening("connected" !== VV), JV.h.QZ(UV.m, xV ? "frozen" : VV)
      }
      setListening(VV) {
        VV !== this.listening && (this.listening = VV, VV ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40240: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = VV, this.now = eV, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const VV = this.now(),
            eV = VV - this.lastCheckAt <= 2e3;
          this.lastCheckAt = VV;
          const xV = "visible" === document.visibilityState;
          !xV || eV && this.wasVisible || (this.resumedAt = VV), this.wasVisible = xV, xV && VV - this.lastHeardAt > 12e3 && VV - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = eV(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  40249: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      d: () => wV
    });
    var JV = xV(1813),
      YV = xV(206),
      UV = xV(1781),
      yV = xV(1885),
      pV = xV(1230),
      QV = xV(1173);
    async function nV(VV, eV) {
      return function(VV) {
        return "object" === typeof VV && null !== VV && VV.code === YV.b.VpnIp.code
      }(eV) && function(VV) {
        return UV.b.supports("appCheck") && VV.isLoggedIn() && !VV.hasTriedAppAttestation()
      }(VV) && await async function(VV) {
        try {
          const {
            token: eV
          } = await (0, yV.e)(), {
            "3PSIDMCPP": xV
          } = await (0, QV.postJsonWithMetricsCookiesAndJsonResponse)(`${pV.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: eV
          }, {
            retries: 0
          }, VV.getMetricsCookies());
          return VV.setAppAttestedAuthJwt(xV), !0
        } catch (eV) {
          return eV instanceof JV.c && "failed" === eV.code ? (console.warn("The app couldn't get an App Check token:", eV), VV.markAppAttestationTried()) : console.error("Failed to attest the app:", eV), !1
        }
      }(VV)
    }
    async function wV(VV, eV) {
      try {
        return await eV()
      } catch (xV) {
        if (!await nV(VV, xV)) throw xV
      }
      return eV()
    }
  },
  40244: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => vV,
      h: () => wV
    });
    var JV = xV(206),
      YV = xV(1922),
      UV = xV(1241),
      yV = xV(9527);
    const pV = [250, 500, 1e3, 2e3, 1250],
      QV = 406;

    function nV(VV) {
      if ("object" !== typeof VV || null === VV) return !1;
      const {
        code: eV,
        message: xV
      } = VV, YV = JV.b.duplicateLobbyNameError;
      return (eV === YV.code || eV === QV) && (xV === YV.text || xV === YV.text + JV.l)
    }
    async function wV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YV.d;
      for (let YV = 0;; YV++) {
        let yV;
        (0, UV.q)(eV);
        try {
          return await VV()
        } catch (JV) {
          if (yV = pV[YV], void 0 === yV || !nV(JV)) throw JV
        }
        await xV(yV, eV)
      }
    }
    const ZV = new Set([JV.b.duplicateLobbyNameError.code, JV.b.lobbyCantBeCreated.code, JV.b.roomDisposedEarlyError.code, JV.b.roomDisposedLateError.code, JV.b.serverRoomLimitReached.code]);

    function vV(VV) {
      if (nV(VV)) return !0;
      const eV = (0, yV.d)(VV);
      return "number" === typeof eV && ZV.has(eV)
    }
  },
  40258: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV
    });
    var JV = xV(9527),
      YV = xV(37633),
      UV = xV(40264);
    const yV = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      pV = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function QV(VV, eV) {
      if (VV instanceof YV.d) return {
        at: yV[eV],
        code: 0
      };
      const xV = (0, JV.d)(VV),
        QV = "number" === typeof xV ? xV : 0;
      return null !== (0, UV.l)(QV).name ? {
        at: "refused",
        code: QV
      } : {
        at: pV[eV],
        code: QV
      }
    }
  },
  9527: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => yV,
      f: () => pV,
      h: () => nV,
      j: () => QV
    });
    var JV = xV(206),
      YV = xV(5103);

    function UV(VV) {
      return yV(VV) === JV.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function yV(VV) {
      return "object" === typeof VV && null !== VV ? VV.code : void 0
    }

    function pV(VV) {
      var eV;
      return null !== (eV = Object.keys(YV.b).find((eV => YV.b[eV] === VV))) && void 0 !== eV ? eV : null
    }

    function QV(VV) {
      return "notWhitelisted" === VV ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const nV = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37620: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      g: () => wV,
      k: () => rV,
      m: () => ZV
    });
    var JV = xV(375),
      YV = xV(698),
      UV = xV(705),
      yV = xV(40);
    const pV = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      QV = "playSessionGameNameWithVariation",
      nV = "wasMatchmakePlayer";

    function wV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q;
      (0, UV.h)(VV, pV)
    }

    function ZV() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q).setItem(nV, !0)
    }

    function vV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q;
      return (0, UV.e)(VV, pV)
    }

    function rV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yV.q;
      const xV = (0, UV.e)(eV, pV),
        wV = function(VV) {
          const eV = VV.getItem(QV);
          return "string" !== typeof eV ? null : eV
        }(eV),
        ZV = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q).getItem(nV)
        }(eV);
      let vV;
      return vV = null !== xV && null !== wV && (0, UV.f)(eV, pV) && function(VV, eV, xV) {
          const YV = (0, JV.Pb)(VV),
            UV = (0, JV.Pb)(eV),
            yV = (0, JV.Lb)(VV),
            pV = (0, JV.Lb)(eV);
          return !(YV !== UV || !xV) || YV === UV && yV === pV
        }(wV, VV, ZV) ? xV : (0, YV.c)(), (0, UV.j)(eV, pV, vV), eV.setItem(QV, VV),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q).removeItem(nV)
        }(eV), vV
    }
  },
  37612: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => FV,
      c: () => TV
    });
    var JV = xV(1099),
      YV = xV(220),
      UV = xV(370),
      yV = xV(660),
      pV = xV(375),
      QV = xV(1108),
      nV = xV(686),
      wV = xV(717),
      ZV = xV(4995),
      vV = xV(99),
      rV = xV(138),
      kV = xV(1838),
      bV = xV(115),
      EV = xV(37620),
      BV = xV(40),
      jV = xV(701),
      qV = xV(668),
      tV = xV(37622);

    function FV() {
      var VV, eV;
      return [...null !== (VV = navigator.languages) && void 0 !== VV ? VV : [null !== (eV = navigator.language) && void 0 !== eV ? eV : "none"], "en-Gb"]
    }

    function TV(VV, eV, xV, TV, PV) {
      const AV = (0, JV.l)(eV) ? (0, JV.p)(eV) : null,
        NV = VV.isLoggedIn() && void 0 !== (0, YV.b)(UV.k, rV.siteUsed) ? (0, qV.g)() : null,
        XV = {
          cookies: (0, kV.getAllCookiesForGameNameWithVariation)(eV),
          isMobile: (0, vV.isMobile)(),
          isUsingCustomGameTexturePack: null !== AV && PV(AV),
          generalCookies: {
            joinDiscord: !!BV.m.getItem("DiscordPressed"),
            newGo: ZV.d,
            ...VV.getMetricsCookies(),
            trafficCode: TV,
            compliance: vV.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, vV.getBrowserName)(),
            version: (0, vV.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, vV.getPlatformType)(),
            deviceType: (0, bV.c)()
          },
          isLoggedIn: VV.isLoggedIn(),
          lobbyName: xV,
          languages: FV(),
          version: yV.e,
          siteUsed: rV.siteUsed,
          subsiteUsed: rV.subsiteUsed,
          playSessionId: (0, EV.k)(eV),
          visitSessionId: (0, jV.f)(),
          clientReason: nV.s.reason,
          budgetBasis: (0, tV.j)(),
          ...null !== wV.o && {
            diagClaim: wV.o.claimId
          },
          ...null !== NV && {
            webGpuLoss: NV
          }
        };
      return null !== AV && (0, pV.Hc)(AV) ? (XV.lobbyName = (0, JV.k)(AV, (0, JV.n)(eV), xV), {
        roomName: `classic_${QV.g}`,
        joinOptions: XV
      }) : {
        roomName: eV,
        joinOptions: XV
      }
    }
  },
  40276: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => rV,
      c: () => vV
    });
    const JV = "ue:",
      YV = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      UV = "[A-Za-z0-9]{1,24}",
      yV = 15,
      pV = new RegExp(`^${UV}$`);
    new RegExp(`^${JV}(${[...YV,"other"].join("|")}):(?:n|k(${UV})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function QV(VV, eV, xV, UV, QV) {
      const nV = "string" === typeof VV && YV.includes(VV) ? VV : "other";
      let wV = "n";
      return "string" === typeof eV ? wV = pV.test(eV) ? `k${eV}` : "n" : "number" === typeof xV && Number.isInteger(xV) && xV >= 0 && xV <= yV && (wV = `b${xV}`), `${JV}${nV}:${wV}:${UV?1:0}${QV?1:0}`
    }
    var nV = xV(1764),
      wV = xV(1840);
    let ZV = null;

    function vV(VV) {
      const eV = VV instanceof Element && VV !== document.body && VV !== document.documentElement && !(0, nV.q)(VV) && !VV.closest("#root");
      return {
        editable: (0, wV.b)(VV),
        outsideView: eV
      }
    }

    function rV(VV) {
      return ZV ??= function(VV) {
        try {
          const {
            editable: eV,
            outsideView: xV
          } = vV(VV.target), JV = VV;
          return QV(VV.type, JV.code, JV.button, eV, xV)
        } catch {
          return QV(null, null, null, !1, !1)
        }
      }(VV), ZV
    }
  },
  40264: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      f: () => UV,
      i: () => pV,
      l: () => wV,
      n: () => QV,
      q: () => yV
    });
    var JV = xV(206);
    const YV = 3e3,
      UV = 15e3;

    function yV(VV) {
      const eV = VV.endsWith(JV.l);
      return {
        text: (eV ? VV.slice(0, -JV.l.length) : VV) || null,
        dropsCache: eV
      }
    }
    const pV = "Either your internet isn't working or this is a bug.";

    function QV(VV, eV) {
      const xV = wV(VV);
      return null !== xV.name && "" === JV.b[xV.name].text && null !== eV ? eV : xV.reason
    }
    const nV = "You were removed from the game.";

    function wV(VV) {
      var eV;
      let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const YV = null !== (eV = Object.keys(JV.b).find((eV => JV.b[eV].code === VV))) && void 0 !== eV ? eV : null;
      if (null === YV) return {
        code: VV,
        name: YV,
        reason: null !== xV && void 0 !== xV ? xV : `${pV}\nCode: ${VV}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: UV,
        canReconnect: yV = !1
      } = JV.b[YV], QV = VV === JV.b.outdatedVersion.code || VV === JV.b.loadRecaptchaError.code;
      return {
        code: VV,
        name: YV,
        reason: "" !== UV ? UV : null !== xV && void 0 !== xV ? xV : VV === JV.b.gameOrPluginKick.code ? nV : `Code: ${VV}`,
        canReconnect: yV,
        automaticallyReconnect: VV === JV.b.customGameUpdated.code || VV === JV.b.duplicateLobbyNameError.code,
        requiresRefresh: QV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);