export const id = 160;
export const ids = [160];
export const modules = {
  39179: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      f: () => IB
    });
    var QB = zB(31);
    let nB = !1;

    function dB() {
      return nB
    }

    function IB(BB) {
      nB !== BB && (nB = BB, QB.n.Ly("replayViewer|videoExportChanged"))
    }
  },
  36453: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB,
      g: () => NB,
      k: () => UB,
      l: () => uB,
      m: () => LB
    });
    var QB = zB(667),
      nB = zB(1794),
      dB = zB(4893);
    class IB {
      constructor(BB, jB) {
        this.width = BB, this.Ep = jB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * jB)
      }
      push(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = this.data,
          QB = this.next * this.width;
        for (let nB = 0; nB < this.width; nB++) zB[QB + nB] = BB[jB + nB];
        this.next = (this.next + 1) % this.Ep, this.size = Math.min(this.size + 1, this.Ep)
      }
      rows() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const zB = [],
          QB = (this.next - this.size + this.Ep) % this.Ep;
        for (let nB = 0; nB < this.size; nB++) {
          const dB = (QB + nB) % this.Ep * this.width;
          this.data[dB + BB] >= jB && zB.push(Array.from(this.data.subarray(dB, dB + this.width)))
        }
        return zB
      }
      lines() {
        return this.rows().map((BB => BB.join(",")))
      }
    }
    const NB = 10,
      uB = {
        idle: 0,
        Cs: 1,
        SF: 2,
        YF: 3,
        Dy: 4
      },
      UB = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      aB = {
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
      pB = 12e3,
      rB = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      sB = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      JB = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      mB = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      yB = ["nowMs", "change", "count"];

    function kB(BB) {
      return "js" === BB ? aB.jsClient : aB.wasmClient
    }
    class GB {
      constructor() {
        this.steps = new IB(NB, pB), this.events = new IB(sB.length, pB), this.frames = new IB(JB.length, pB), this.cameraSets = new IB(dB.e, 256), this.changes = new IB(yB.length, 256)
      }
    }
    const LB = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(sB.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(BB, jB) {
        this.startedClient = BB, this.startedAtMs = performance.now(), null !== this.rings ? this.change(kB(BB)) : jB && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(aB.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new GB, null !== this.startedClient && this.changeAt(this.startedAtMs, kB(this.startedClient), 1))
      }
      step(BB, jB) {
        var zB;
        BB[jB + 6] !== uB.Dy && (null === (zB = this.rings) || void 0 === zB || zB.steps.push(BB, jB))
      }
      cameraSet(BB, jB) {
        var zB;
        null === (zB = this.rings) || void 0 === zB || zB.cameraSets.push(BB, jB)
      }
      mouseMove(BB, jB) {
        const zB = this.rings;
        if (null === zB) return;
        const QB = this.sample;
        QB[0] = BB.timeStamp, QB[1] = performance.now(), QB[2] = BB.movementX, QB[3] = BB.movementY, QB[4] = jB ? 1 : 0, zB.events.push(QB)
      }
      frame(BB, jB, zB, QB) {
        const nB = this.rings;
        if (null === nB || QB === UB.none) return;
        const dB = this.sample;
        dB[0] = performance.now(), dB[1] = BB, dB[2] = jB, dB[3] = zB, dB[4] = QB, nB.frames.push(dB)
      }
      change(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), BB, jB)
      }
      changeAt(BB, jB, zB) {
        const QB = this.rings;
        if (null === QB) return;
        const nB = this.sample;
        nB[0] = BB, nB[1] = jB, nB[2] = zB, QB.changes.push(nB)
      }
      dumpText() {
        var BB, jB;
        const zB = this.rings;
        return [`look records (${this.startedClient}): ${rB.join(",")}`, ...null !== (BB = null === zB || void 0 === zB ? void 0 : zB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${sB.join(",")}`, ...null !== (jB = null === zB || void 0 === zB ? void 0 : zB.events.lines()) && void 0 !== jB ? jB : []].join("\n")
      }
      toJson(BB, jB) {
        var zB;
        const nB = BB - 6e4,
          dB = this.rings,
          IB = function(BB, jB) {
            var zB;
            let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const dB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.rows(QB, nB)) && void 0 !== zB ? zB : [];
            return {
              columns: jB,
              fromMs: 0 === dB.length ? null : dB[0][QB],
              rows: dB
            }
          };
        return {
          version: QB.b,
          client: null !== (zB = this.startedClient) && void 0 !== zB ? zB : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: BB,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Ky: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...jB,
          outcomes: uB,
          frameKinds: UB,
          changes: aB,
          lookSteps: IB(null === dB || void 0 === dB ? void 0 : dB.steps, rB),
          mouseMoves: IB(null === dB || void 0 === dB ? void 0 : dB.events, sB, 1),
          frames: IB(null === dB || void 0 === dB ? void 0 : dB.frames, JB),
          cameraSets: IB(null === dB || void 0 === dB ? void 0 : dB.cameraSets, mB),
          pageChanges: IB(null === dB || void 0 === dB ? void 0 : dB.changes, yB)
        }
      }
      save(BB) {
        const jB = JSON.stringify(this.toJson(performance.now(), BB));
        (0, nB.e)(new Blob([jB], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36451: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      LOOK_DEBUG_HEADER: () => aB,
      endLookDebugTake: () => kB,
      noteLookDroppedCopy: () => GB,
      saveLookCapture: () => LB,
      startLookDebug: () => yB
    });
    var QB = zB(4893),
      nB = zB(2912),
      dB = zB(1948);
    const IB = new Map(Object.entries(QB.l).map((BB => {
      let [jB, zB] = BB;
      return [zB, jB]
    })));

    function NB(BB) {
      return (0, dB.G)(BB).toFixed(1)
    }

    function uB(BB, jB) {
      return `camera set by ${IB.get(BB[jB+1])}: heading ${`${NB(BB[jB+2])} -> ${NB(BB[jB+4])}`} deg, pitch ${`${NB(BB[jB+3])} -> ${NB(BB[jB+5])}`} deg, at ${BB[jB].toFixed(1)} ms`
    }
    var UB = zB(36453);
    const aB = 2;

    function pB(BB) {
      return Number.isFinite(BB) ? String(Math.round(10 * BB) / 10) : String(BB)
    }

    function rB(BB) {
      return Number.isFinite(BB) ? BB.toFixed(1) : String(BB)
    }
    class sB {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.SF = 0, this.pastLimit = 0, this.lockSkips = 0, this.Dy = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.SF > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.SF > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class JB {
      constructor() {
        var BB = this;
        this.topicOn = (0, nB.q)("look"), this.remote = (0, nB.t)(), this.tally = new sB, this.takes = null, this.started = !1, this.record = function(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (UB.m.step(jB, zB), !BB.topicOn) return;
          const QB = jB[zB],
            nB = jB[zB + 1],
            dB = jB[zB + 2],
            IB = jB[zB + 3],
            NB = jB[zB + 4],
            uB = jB[zB + 5],
            aB = jB[zB + 6],
            sB = jB[zB + 7],
            JB = jB[zB + 8],
            mB = jB[zB + 9],
            yB = BB.tally;
          switch (yB.frames++, aB) {
            case UB.l.idle:
              return void yB.idle++;
            case UB.l.Dy:
              return void yB.Dy++;
            case UB.l.YF:
              return yB.lockSkips++, void(0 === dB && 0 === IB || BB.outlier(`lock skip dropped raw (${pB(dB)}, ${pB(IB)}) at ${rB(QB)} ms`))
          }
          yB.looked++, Number.isFinite(nB) && (yB.dtMin = Math.min(yB.dtMin, nB), yB.dtMax = Math.max(yB.dtMax, nB), yB.dtSum += nB, nB > 0 && (yB.peakRate = Math.max(yB.peakRate, Math.hypot(NB, uB) / nB))), yB.raw[0] += dB, yB.raw[1] += IB, yB.turned[0] += NB, yB.turned[1] += uB;
          const kB = Math.abs(dB) > mB || Math.abs(IB) > mB,
            GB = `raw (${pB(dB)}, ${pB(IB)}) over ${rB(nB)} ms, limit ${pB(mB)}, filter v (${sB.toFixed(3)}, ${JB.toFixed(3)}) px/ms, at ${rB(QB)} ms`;
          aB === UB.l.SF ? (yB.SF++, BB.outlier(`spike put right: ${GB} -> turned (${pB(NB)}, ${pB(uB)})`)) : kB ? (yB.pastLimit++, BB.outlier(`kept past limit: ${GB}`)) : nB > 50 && (yB.longFrames++, BB.remote || BB.outlier(`long frame: ${GB}, turned in full`))
        }, this.onMouseMove = BB => {
          const jB = null !== document.pointerLockElement;
          if (UB.m.mouseMove(BB, jB), !this.topicOn) return;
          const zB = this.tally,
            {
              movementX: QB,
              movementY: nB
            } = BB;
          zB.events++;
          const dB = Math.max(Math.abs(QB), Math.abs(nB));
          zB.eventMax = Math.max(zB.eventMax, dB), dB >= 200 && (zB.bigEvents++, this.eventOutlier(`big mousemove (${QB}, ${nB}) at ${rB(BB.timeStamp)} ms, lock ${jB?"DN":"free"}`))
        }, this.onLockChange = () => {
          const BB = document.pointerLockElement;
          BB ? UB.m.lockGained() : UB.m.change(UB.e.lockLost), this.topicOn && (0, nB.n)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${rB(performance.now())} ms`)
        }, this.onLockError = () => {
          UB.m.change(UB.e.lockError), this.topicOn && (0, nB.n)("look", `pointer lock request failed at ${rB(performance.now())} ms`)
        }, this.onVisibility = () => {
          UB.m.change("hidden" === document.visibilityState ? UB.e.hidden : UB.e.visible), this.topicOn && (0, nB.n)("look", `page ${document.visibilityState} at ${rB(performance.now())} ms`)
        }, this.onFocus = () => {
          UB.m.change(UB.e.focus)
        }, this.onBlur = () => {
          UB.m.change(UB.e.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const BB = this.tally;
          if (this.tally = new sB, !BB.moved() || this.remote && !BB.hasEvent()) return;
          const jB = BB.looked > 0 ? BB.dtSum / BB.looked : NaN,
            zB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===UB.m.client?`, ${BB.Dy} carried`:""})`, `dt avg ${rB(jB)} min ${rB(BB.dtMin)} max ${rB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${pB(BB.eventMax)} px, ${BB.bigEvents} big)`, `raw (${pB(BB.raw[0])}, ${pB(BB.raw[1])}) turned (${pB(BB.turned[0])}, ${pB(BB.turned[1])})`, `peak ${BB.peakRate.toFixed(2)} px/ms`, `put right ${BB.SF}, past limit ${BB.pastLimit}, lock skips ${BB.lockSkips}`, "lock " + (document.pointerLockElement ? "DN" : "free")];
          BB.dropped > 0 && zB.push(`${BB.dropped} doubled spike copies dropped`), BB.cameraSets > 0 && zB.push(`${BB.cameraSets} camera sets`), BB.cameraSetsLost > 0 && zB.push(`${BB.cameraSetsLost} camera set records lost`), BB.lost > 0 && zB.push(`${BB.lost} records lost`), BB.suppressed > 0 && zB.push(`${BB.suppressed} outlier lines not shown`), (0, nB.n)("look", `1s: ${zB.join("; ")}`)
        }
      }
      start(BB, jB) {
        if (UB.m.start(BB, null !== document.pointerLockElement), this.takes = jB, this.topicOn) {
          const {
            screen: jB
          } = window;
          (0, nB.n)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${jB.width}x${jB.height}, pointer lock ${document.pointerLockElement?"DN":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, nB.j)("look", (() => UB.m.dumpText())))
      }
      outlier(BB) {
        const jB = this.tally;
        jB.outliers >= 20 ? jB.suppressed++ : (jB.outliers++, (0, nB.n)("look", BB))
      }
      eventOutlier(BB) {
        const jB = this.tally;
        jB.eventLines >= 10 ? jB.suppressed++ : (jB.eventLines++, (0, nB.n)("look", BB))
      }
      takeRecords() {
        if (null === this.takes) return;
        const BB = this.takes.look();
        if (BB.length >= aB) {
          this.counted(UB.e.stepsLost, BB[0]), this.counted(UB.e.droppedCopies, BB[1]);
          for (let jB = aB; jB + UB.g <= BB.length; jB += UB.g) this.record(BB, jB)
        }
        const jB = this.takes.cameraSets();
        if (jB.length >= QB.d) {
          this.counted(UB.e.cameraSetsLost, jB[0]);
          for (let BB = QB.d; BB + QB.e <= jB.length; BB += QB.e) UB.m.cameraSet(jB, BB), this.topicOn && (this.tally.cameraSets++, this.outlier(uB(jB, BB)))
        }
      }
      droppedCopy() {
        this.counted(UB.e.droppedCopies, 1)
      }
      counted(BB, jB) {
        if (0 === jB) return;
        if (UB.m.change(BB, jB), !this.topicOn) return;
        const zB = this.tally;
        BB === UB.e.droppedCopies ? zB.dropped += jB : BB === UB.e.stepsLost ? zB.lost += jB : zB.cameraSetsLost += jB
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let mB = null;

    function yB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return mB ??= new JB, mB.start(BB, jB), mB.record
    }

    function kB() {
      var BB;
      null === (BB = mB) || void 0 === BB || BB.endTake()
    }

    function GB() {
      var BB;
      null === (BB = mB) || void 0 === BB || BB.droppedCopy()
    }
    async function LB(BB) {
      var jB;
      null === (jB = mB) || void 0 === jB || jB.takeRecords();
      const {
        clientHintsRead: QB,
        debugDeviceLines: nB
      } = await zB.e(29).then((() => zB(34114)));
      await QB, UB.m.save({
        ...BB,
        device: nB()
      })
    }
  },
  39151: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => NB
    });
    var QB = zB(31),
      nB = zB(1316),
      dB = zB(3084);
    const IB = "Reconnecting";
    class NB {
      constructor(BB) {
        this.hooks = BB, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = BB => {
          BB.persisted || this.leave()
        }, this.controller = new dB.b((jB => BB.reconnect(jB)), {
          isSessionLive: () => !this.ended && BB.isLive(),
          onPhaseChanged: BB => {
            this.onPhaseChanged(BB)
          },
          onReconnected: jB => {
            BB.onReconnected(jB)
          },
          onGaveUp: jB => {
            !this.ended && BB.isLive() && BB.onGaveUp(this.sessionBased, jB)
          }
        })
      }
      onInitialInfo(BB, jB) {
        this.graceMs = BB, this.sessionBased = jB
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(BB) {
        this.ended || this.controller.onConnectionLost(BB, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const BB = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          jB = this.controller.heldToken;
        this.end(), BB && "" !== jB && this.hooks.releaseSeat(jB)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(BB) {
        const jB = (0, dB.l)(BB);
        jB !== this.stopped && (this.stopped = jB, this.hooks.freeze(jB));
        const zB = "frozen" === BB || "resuming" === BB && this.frozen;
        zB && !this.frozen ? (0, nB.u)(IB, {
          overridesPause: !0
        }) : !zB && this.frozen && (0, nB.s)(IB), this.frozen = zB, this.setListening("connected" !== BB), QB.n.Ly(dB.j, zB ? "frozen" : BB)
      }
      setListening(BB) {
        BB !== this.listening && (this.listening = BB, BB ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39153: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = BB, this.now = jB, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const BB = this.now(),
            jB = BB - this.lastCheckAt <= 2e3;
          this.lastCheckAt = BB;
          const zB = "visible" === document.visibilityState;
          !zB || jB && this.wasVisible || (this.resumedAt = BB), this.wasVisible = zB, zB && BB - this.lastHeardAt > 12e3 && BB - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = jB(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39158: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      h: () => aB
    });
    var QB = zB(1754),
      nB = zB(214),
      dB = zB(1725),
      IB = zB(1826),
      NB = zB(1244),
      uB = zB(1173);
    async function UB(BB, jB) {
      return function(BB) {
        return "object" === typeof BB && null !== BB && BB.code === nB.c.VpnIp.code
      }(jB) && function(BB) {
        return dB.c.supports("appCheck") && BB.isLoggedIn() && !BB.hasTriedAppAttestation()
      }(BB) && await async function(BB) {
        try {
          const {
            token: jB
          } = await (0, IB.d)(), {
            "3PSIDMCPP": zB
          } = await (0, uB.postJsonWithMetricsCookiesAndJsonResponse)(`${NB.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: jB
          }, {
            retries: 0
          }, BB.getMetricsCookies());
          return BB.setAppAttestedAuthJwt(zB), !0
        } catch (jB) {
          return jB instanceof QB.b && "failed" === jB.code ? (console.warn("The app couldn't get an App Check token:", jB), BB.markAppAttestationTried()) : console.error("Failed to attest the app:", jB), !1
        }
      }(BB)
    }
    async function aB(BB, jB) {
      try {
        return await jB()
      } catch (zB) {
        if (!await UB(BB, zB)) throw zB
      }
      return jB()
    }
  },
  39156: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => rB,
      f: () => aB
    });
    var QB = zB(214),
      nB = zB(1867),
      dB = zB(1253),
      IB = zB(8923);
    const NB = [250, 500, 1e3, 2e3, 1250],
      uB = 406;

    function UB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const {
        code: jB,
        message: zB
      } = BB, nB = QB.c.duplicateLobbyNameError;
      return (jB === nB.code || jB === uB) && (zB === nB.text || zB === nB.text + QB.g)
    }
    async function aB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nB.b;
      for (let nB = 0;; nB++) {
        let IB;
        (0, dB.q)(jB);
        try {
          return await BB()
        } catch (QB) {
          if (IB = NB[nB], void 0 === IB || !UB(QB)) throw QB
        }
        await zB(IB, jB)
      }
    }
    const pB = new Set([QB.c.duplicateLobbyNameError.code, QB.c.lobbyCantBeCreated.code, QB.c.roomDisposedEarlyError.code, QB.c.roomDisposedLateError.code, QB.c.serverRoomLimitReached.code]);

    function rB(BB) {
      if (UB(BB)) return !0;
      const jB = (0, IB.g)(BB);
      return "number" === typeof jB && pB.has(jB)
    }
  },
  39166: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB
    });
    var QB = zB(8923),
      nB = zB(36568),
      dB = zB(39169);
    const IB = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      NB = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function uB(BB, jB) {
      if (BB instanceof nB.h) return {
        at: IB[jB],
        code: 0
      };
      const zB = (0, QB.g)(BB),
        uB = "number" === typeof zB ? zB : 0;
      return null !== (0, dB.m)(uB).name ? {
        at: "refused",
        code: uB
      } : {
        at: NB[jB],
        code: uB
      }
    }
  },
  8923: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      g: () => IB,
      h: () => NB,
      l: () => UB,
      p: () => uB
    });
    var QB = zB(214),
      nB = zB(4729);

    function dB(BB) {
      return IB(BB) === QB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function IB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function NB(BB) {
      var jB;
      return null !== (jB = Object.keys(nB.b).find((jB => nB.b[jB] === BB))) && void 0 !== jB ? jB : null
    }

    function uB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const UB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36538: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB,
      f: () => aB,
      h: () => sB,
      i: () => pB
    });
    var QB = zB(376),
      nB = zB(698),
      dB = zB(710),
      IB = zB(41);
    const NB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      uB = "playSessionGameNameWithVariation",
      UB = "wasMatchmakePlayer";

    function aB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k;
      (0, dB.h)(BB, NB)
    }

    function pB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).setItem(UB, !0)
    }

    function rB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k;
      return (0, dB.d)(BB, NB)
    }

    function sB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IB.k;
      const zB = (0, dB.d)(jB, NB),
        aB = function(BB) {
          const jB = BB.getItem(uB);
          return "string" !== typeof jB ? null : jB
        }(jB),
        pB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).getItem(UB)
        }(jB);
      let rB;
      return rB = null !== zB && null !== aB && (0, dB.f)(jB, NB) && function(BB, jB, zB) {
          const nB = (0, QB.Sb)(BB),
            dB = (0, QB.Sb)(jB),
            IB = (0, QB.Mb)(BB),
            NB = (0, QB.Mb)(jB);
          return !(nB !== dB || !zB) || nB === dB && IB === NB
        }(aB, BB, pB) ? zB : (0, nB.b)(), (0, dB.l)(jB, NB, rB), jB.setItem(uB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).removeItem(UB)
        }(jB), rB
    }
  },
  36533: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => tB,
      i: () => SB
    });
    var QB = zB(1067),
      nB = zB(225),
      dB = zB(373),
      IB = zB(667),
      NB = zB(376),
      uB = zB(1069),
      UB = zB(690),
      aB = zB(722),
      pB = zB(4644),
      rB = zB(106),
      sB = zB(145),
      JB = zB(1778),
      mB = zB(125),
      yB = zB(36538),
      kB = zB(41),
      GB = zB(701),
      LB = zB(676),
      gB = zB(36547);

    function tB() {
      var BB, jB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (jB = navigator.language) && void 0 !== jB ? jB : "none"], "en-Gb"]
    }

    function SB(BB, jB, zB, SB, MB) {
      const EB = (0, QB.n)(jB) ? (0, QB.q)(jB) : null,
        iB = BB.isLoggedIn() && void 0 !== (0, nB.b)(dB.k, sB.siteUsed) ? (0, LB.f)() : null,
        qB = {
          cookies: (0, JB.getAllCookiesForGameNameWithVariation)(jB),
          isMobile: (0, rB.isMobile)(),
          isUsingCustomGameTexturePack: null !== EB && MB(EB),
          generalCookies: {
            joinDiscord: !!kB.j.getItem("DiscordPressed"),
            newGo: pB.c,
            ...BB.getMetricsCookies(),
            trafficCode: SB,
            compliance: rB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, rB.getBrowserName)(),
            version: (0, rB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, rB.getPlatformType)(),
            deviceType: (0, mB.c)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: zB,
          languages: tB(),
          version: IB.b,
          siteUsed: sB.siteUsed,
          subsiteUsed: sB.subsiteUsed,
          playSessionId: (0, yB.h)(jB),
          visitSessionId: (0, GB.h)(),
          clientReason: UB.p.reason,
          budgetBasis: (0, gB.i)(),
          ...null !== aB.l && {
            diagClaim: aB.l.claimId
          },
          ...null !== iB && {
            webGpuLoss: iB
          }
        };
      return null !== EB && (0, NB.Hc)(EB) ? (qB.lobbyName = (0, QB.j)(EB, (0, QB.p)(jB), zB), {
        roomName: `classic_${uB.g}`,
        joinOptions: qB
      }) : {
        roomName: jB,
        joinOptions: qB
      }
    }
  },
  39177: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => sB,
      g: () => rB
    });
    const QB = "ue:",
      nB = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      dB = "[A-Za-z0-9]{1,24}",
      IB = 15,
      NB = new RegExp(`^${dB}$`);
    new RegExp(`^${QB}(${[...nB,"other"].join("|")}):(?:n|k(${dB})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function uB(BB, jB, zB, dB, uB) {
      const UB = "string" === typeof BB && nB.includes(BB) ? BB : "other";
      let aB = "n";
      return "string" === typeof jB ? aB = NB.test(jB) ? `k${jB}` : "n" : "number" === typeof zB && Number.isInteger(zB) && zB >= 0 && zB <= IB && (aB = `b${zB}`), `${QB}${UB}:${aB}:${dB?1:0}${uB?1:0}`
    }
    var UB = zB(1694),
      aB = zB(1786);
    let pB = null;

    function rB(BB) {
      const jB = BB instanceof Element && BB !== document.body && BB !== document.documentElement && !(0, UB.m)(BB) && !BB.closest("#root");
      return {
        editable: (0, aB.e)(BB),
        outsideView: jB
      }
    }

    function sB(BB) {
      return pB ??= function(BB) {
        try {
          const {
            editable: jB,
            outsideView: zB
          } = rB(BB.target), QB = BB;
          return uB(BB.type, QB.code, QB.button, jB, zB)
        } catch {
          return uB(null, null, null, !1, !1)
        }
      }(BB), pB
    }
  },
  39169: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      h: () => dB,
      l: () => NB,
      m: () => aB,
      p: () => uB,
      t: () => IB
    });
    var QB = zB(214);
    const nB = 3e3,
      dB = 15e3;

    function IB(BB) {
      const jB = BB.endsWith(QB.g);
      return {
        text: (jB ? BB.slice(0, -QB.g.length) : BB) || null,
        dropsCache: jB
      }
    }
    const NB = "Either your internet isn't working or this is a bug.";

    function uB(BB, jB) {
      const zB = aB(BB);
      return null !== zB.name && "" === QB.c[zB.name].text && null !== jB ? jB : zB.reason
    }
    const UB = "You were removed from the game.";

    function aB(BB) {
      var jB;
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const nB = null !== (jB = Object.keys(QB.c).find((jB => QB.c[jB].code === BB))) && void 0 !== jB ? jB : null;
      if (null === nB) return {
        code: BB,
        name: nB,
        reason: null !== zB && void 0 !== zB ? zB : `${NB}\nCode: ${BB}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: dB,
        canReconnect: IB = !1
      } = QB.c[nB], uB = BB === QB.c.outdatedVersion.code || BB === QB.c.loadRecaptchaError.code;
      return {
        code: BB,
        name: nB,
        reason: "" !== dB ? dB : null !== zB && void 0 !== zB ? zB : BB === QB.c.gameOrPluginKick.code ? UB : `Code: ${BB}`,
        canReconnect: IB,
        automaticallyReconnect: BB === QB.c.customGameUpdated.code || BB === QB.c.duplicateLobbyNameError.code,
        requiresRefresh: uB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);