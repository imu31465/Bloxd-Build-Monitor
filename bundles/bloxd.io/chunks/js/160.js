export const id = 160;
export const ids = [160];
export const modules = {
  39152: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      e: () => GB
    });
    var TB = ZB(24);
    let JB = !1;

    function oB() {
      return JB
    }

    function GB(BB) {
      JB !== BB && (JB = BB, TB.l.Gq("replayViewer|videoExportChanged"))
    }
  },
  36398: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => nB,
      h: () => vB,
      j: () => cB,
      k: () => kB,
      o: () => WB
    });
    var TB = ZB(671),
      JB = ZB(1821),
      oB = ZB(4975);
    class GB {
      constructor(BB, IB) {
        this.width = BB, this.ah = IB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * IB)
      }
      push(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = this.data,
          TB = this.next * this.width;
        for (let JB = 0; JB < this.width; JB++) ZB[TB + JB] = BB[IB + JB];
        this.next = (this.next + 1) % this.ah, this.size = Math.min(this.size + 1, this.ah)
      }
      rows() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const ZB = [],
          TB = (this.next - this.size + this.ah) % this.ah;
        for (let JB = 0; JB < this.size; JB++) {
          const oB = (TB + JB) % this.ah * this.width;
          this.data[oB + BB] >= IB && ZB.push(Array.from(this.data.subarray(oB, oB + this.width)))
        }
        return ZB
      }
      lines() {
        return this.rows().map((BB => BB.join(",")))
      }
    }
    const vB = 10,
      kB = {
        idle: 0,
        XF: 1,
        gM: 2,
        YM: 3,
        Fq: 4
      },
      cB = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      nB = {
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
      hB = 12e3,
      zB = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      FB = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      NB = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      gB = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      qB = ["nowMs", "change", "count"];

    function yB(BB) {
      return "js" === BB ? nB.jsClient : nB.wasmClient
    }
    class UB {
      constructor() {
        this.steps = new GB(vB, hB), this.events = new GB(FB.length, hB), this.frames = new GB(NB.length, hB), this.cameraSets = new GB(oB.f, 256), this.changes = new GB(qB.length, 256)
      }
    }
    const WB = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(FB.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(BB, IB) {
        this.startedClient = BB, this.startedAtMs = performance.now(), null !== this.rings ? this.change(yB(BB)) : IB && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(nB.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new UB, null !== this.startedClient && this.changeAt(this.startedAtMs, yB(this.startedClient), 1))
      }
      step(BB, IB) {
        var ZB;
        BB[IB + 6] !== kB.Fq && (null === (ZB = this.rings) || void 0 === ZB || ZB.steps.push(BB, IB))
      }
      cameraSet(BB, IB) {
        var ZB;
        null === (ZB = this.rings) || void 0 === ZB || ZB.cameraSets.push(BB, IB)
      }
      mouseMove(BB, IB) {
        const ZB = this.rings;
        if (null === ZB) return;
        const TB = this.sample;
        TB[0] = BB.timeStamp, TB[1] = performance.now(), TB[2] = BB.movementX, TB[3] = BB.movementY, TB[4] = IB ? 1 : 0, ZB.events.push(TB)
      }
      frame(BB, IB, ZB, TB) {
        const JB = this.rings;
        if (null === JB || TB === cB.none) return;
        const oB = this.sample;
        oB[0] = performance.now(), oB[1] = BB, oB[2] = IB, oB[3] = ZB, oB[4] = TB, JB.frames.push(oB)
      }
      change(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), BB, IB)
      }
      changeAt(BB, IB, ZB) {
        const TB = this.rings;
        if (null === TB) return;
        const JB = this.sample;
        JB[0] = BB, JB[1] = IB, JB[2] = ZB, TB.changes.push(JB)
      }
      dumpText() {
        var BB, IB;
        const ZB = this.rings;
        return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${FB.join(",")}`, ...null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.events.lines()) && void 0 !== IB ? IB : []].join("\n")
      }
      toJson(BB, IB) {
        var ZB;
        const JB = BB - 6e4,
          oB = this.rings,
          GB = function(BB, IB) {
            var ZB;
            let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const oB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.rows(TB, JB)) && void 0 !== ZB ? ZB : [];
            return {
              columns: IB,
              fromMs: 0 === oB.length ? null : oB[0][TB],
              rows: oB
            }
          };
        return {
          version: TB.b,
          client: null !== (ZB = this.startedClient) && void 0 !== ZB ? ZB : "not started",
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
          mq: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...IB,
          outcomes: kB,
          frameKinds: cB,
          changes: nB,
          lookSteps: GB(null === oB || void 0 === oB ? void 0 : oB.steps, zB),
          mouseMoves: GB(null === oB || void 0 === oB ? void 0 : oB.events, FB, 1),
          frames: GB(null === oB || void 0 === oB ? void 0 : oB.frames, NB),
          cameraSets: GB(null === oB || void 0 === oB ? void 0 : oB.cameraSets, gB),
          pageChanges: GB(null === oB || void 0 === oB ? void 0 : oB.changes, qB)
        }
      }
      save(BB) {
        const IB = JSON.stringify(this.toJson(performance.now(), BB));
        (0, JB.d)(new Blob([IB], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36396: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      LOOK_DEBUG_HEADER: () => nB,
      endLookDebugTake: () => yB,
      noteLookDroppedCopy: () => UB,
      saveLookCapture: () => WB,
      startLookDebug: () => qB
    });
    var TB = ZB(4975),
      JB = ZB(2973),
      oB = ZB(1956);
    const GB = new Map(Object.entries(TB.m).map((BB => {
      let [IB, ZB] = BB;
      return [ZB, IB]
    })));

    function vB(BB) {
      return (0, oB.K)(BB).toFixed(1)
    }

    function kB(BB, IB) {
      return `camera set by ${GB.get(BB[IB+1])}: heading ${`${vB(BB[IB+2])} -> ${vB(BB[IB+4])}`} deg, pitch ${`${vB(BB[IB+3])} -> ${vB(BB[IB+5])}`} deg, at ${BB[IB].toFixed(1)} ms`
    }
    var cB = ZB(36398);
    const nB = 2;

    function hB(BB) {
      return Number.isFinite(BB) ? String(Math.round(10 * BB) / 10) : String(BB)
    }

    function zB(BB) {
      return Number.isFinite(BB) ? BB.toFixed(1) : String(BB)
    }
    class FB {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.gM = 0, this.pastLimit = 0, this.lockSkips = 0, this.Fq = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.gM > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.gM > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class NB {
      constructor() {
        var BB = this;
        this.topicOn = (0, JB.t)("look"), this.remote = (0, JB.u)(), this.tally = new FB, this.takes = null, this.started = !1, this.record = function(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (cB.o.step(IB, ZB), !BB.topicOn) return;
          const TB = IB[ZB],
            JB = IB[ZB + 1],
            oB = IB[ZB + 2],
            GB = IB[ZB + 3],
            vB = IB[ZB + 4],
            kB = IB[ZB + 5],
            nB = IB[ZB + 6],
            FB = IB[ZB + 7],
            NB = IB[ZB + 8],
            gB = IB[ZB + 9],
            qB = BB.tally;
          switch (qB.frames++, nB) {
            case cB.k.idle:
              return void qB.idle++;
            case cB.k.Fq:
              return void qB.Fq++;
            case cB.k.YM:
              return qB.lockSkips++, void(0 === oB && 0 === GB || BB.outlier(`lock skip dropped raw (${hB(oB)}, ${hB(GB)}) at ${zB(TB)} ms`))
          }
          qB.looked++, Number.isFinite(JB) && (qB.dtMin = Math.min(qB.dtMin, JB), qB.dtMax = Math.max(qB.dtMax, JB), qB.dtSum += JB, JB > 0 && (qB.peakRate = Math.max(qB.peakRate, Math.hypot(vB, kB) / JB))), qB.raw[0] += oB, qB.raw[1] += GB, qB.turned[0] += vB, qB.turned[1] += kB;
          const yB = Math.abs(oB) > gB || Math.abs(GB) > gB,
            UB = `raw (${hB(oB)}, ${hB(GB)}) over ${zB(JB)} ms, limit ${hB(gB)}, filter v (${FB.toFixed(3)}, ${NB.toFixed(3)}) px/ms, at ${zB(TB)} ms`;
          nB === cB.k.gM ? (qB.gM++, BB.outlier(`spike put right: ${UB} -> turned (${hB(vB)}, ${hB(kB)})`)) : yB ? (qB.pastLimit++, BB.outlier(`kept past limit: ${UB}`)) : JB > 50 && (qB.longFrames++, BB.remote || BB.outlier(`long frame: ${UB}, turned in full`))
        }, this.onMouseMove = BB => {
          const IB = null !== document.pointerLockElement;
          if (cB.o.mouseMove(BB, IB), !this.topicOn) return;
          const ZB = this.tally,
            {
              movementX: TB,
              movementY: JB
            } = BB;
          ZB.events++;
          const oB = Math.max(Math.abs(TB), Math.abs(JB));
          ZB.eventMax = Math.max(ZB.eventMax, oB), oB >= 200 && (ZB.bigEvents++, this.eventOutlier(`big mousemove (${TB}, ${JB}) at ${zB(BB.timeStamp)} ms, lock ${IB?"sv":"free"}`))
        }, this.onLockChange = () => {
          const BB = document.pointerLockElement;
          BB ? cB.o.lockGained() : cB.o.change(cB.d.lockLost), this.topicOn && (0, JB.o)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${zB(performance.now())} ms`)
        }, this.onLockError = () => {
          cB.o.change(cB.d.lockError), this.topicOn && (0, JB.o)("look", `pointer lock request failed at ${zB(performance.now())} ms`)
        }, this.onVisibility = () => {
          cB.o.change("hidden" === document.visibilityState ? cB.d.hidden : cB.d.visible), this.topicOn && (0, JB.o)("look", `page ${document.visibilityState} at ${zB(performance.now())} ms`)
        }, this.onFocus = () => {
          cB.o.change(cB.d.focus)
        }, this.onBlur = () => {
          cB.o.change(cB.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const BB = this.tally;
          if (this.tally = new FB, !BB.moved() || this.remote && !BB.hasEvent()) return;
          const IB = BB.looked > 0 ? BB.dtSum / BB.looked : NaN,
            ZB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===cB.o.client?`, ${BB.Fq} carried`:""})`, `dt avg ${zB(IB)} min ${zB(BB.dtMin)} max ${zB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${hB(BB.eventMax)} px, ${BB.bigEvents} big)`, `raw (${hB(BB.raw[0])}, ${hB(BB.raw[1])}) turned (${hB(BB.turned[0])}, ${hB(BB.turned[1])})`, `peak ${BB.peakRate.toFixed(2)} px/ms`, `put right ${BB.gM}, past limit ${BB.pastLimit}, lock skips ${BB.lockSkips}`, "lock " + (document.pointerLockElement ? "sv" : "free")];
          BB.dropped > 0 && ZB.push(`${BB.dropped} doubled spike copies dropped`), BB.cameraSets > 0 && ZB.push(`${BB.cameraSets} camera sets`), BB.cameraSetsLost > 0 && ZB.push(`${BB.cameraSetsLost} camera set records lost`), BB.lost > 0 && ZB.push(`${BB.lost} records lost`), BB.suppressed > 0 && ZB.push(`${BB.suppressed} outlier lines not shown`), (0, JB.o)("look", `1s: ${ZB.join("; ")}`)
        }
      }
      start(BB, IB) {
        if (cB.o.start(BB, null !== document.pointerLockElement), this.takes = IB, this.topicOn) {
          const {
            screen: IB
          } = window;
          (0, JB.o)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${IB.width}x${IB.height}, pointer lock ${document.pointerLockElement?"sv":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, JB.l)("look", (() => cB.o.dumpText())))
      }
      outlier(BB) {
        const IB = this.tally;
        IB.outliers >= 20 ? IB.suppressed++ : (IB.outliers++, (0, JB.o)("look", BB))
      }
      eventOutlier(BB) {
        const IB = this.tally;
        IB.eventLines >= 10 ? IB.suppressed++ : (IB.eventLines++, (0, JB.o)("look", BB))
      }
      takeRecords() {
        if (null === this.takes) return;
        const BB = this.takes.look();
        if (BB.length >= nB) {
          this.counted(cB.d.stepsLost, BB[0]), this.counted(cB.d.droppedCopies, BB[1]);
          for (let IB = nB; IB + cB.h <= BB.length; IB += cB.h) this.record(BB, IB)
        }
        const IB = this.takes.cameraSets();
        if (IB.length >= TB.c) {
          this.counted(cB.d.cameraSetsLost, IB[0]);
          for (let BB = TB.c; BB + TB.f <= IB.length; BB += TB.f) cB.o.cameraSet(IB, BB), this.topicOn && (this.tally.cameraSets++, this.outlier(kB(IB, BB)))
        }
      }
      droppedCopy() {
        this.counted(cB.d.droppedCopies, 1)
      }
      counted(BB, IB) {
        if (0 === IB) return;
        if (cB.o.change(BB, IB), !this.topicOn) return;
        const ZB = this.tally;
        BB === cB.d.droppedCopies ? ZB.dropped += IB : BB === cB.d.stepsLost ? ZB.lost += IB : ZB.cameraSetsLost += IB
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let gB = null;

    function qB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return gB ??= new NB, gB.start(BB, IB), gB.record
    }

    function yB() {
      var BB;
      null === (BB = gB) || void 0 === BB || BB.endTake()
    }

    function UB() {
      var BB;
      null === (BB = gB) || void 0 === BB || BB.droppedCopy()
    }
    async function WB(BB) {
      var IB;
      null === (IB = gB) || void 0 === IB || IB.takeRecords();
      const {
        clientHintsRead: TB,
        debugDeviceLines: JB
      } = await ZB.e(29).then((() => ZB(34050)));
      await TB, cB.o.save({
        ...BB,
        device: JB()
      })
    }
  },
  39098: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB
    });
    var TB = ZB(24),
      JB = ZB(1353),
      oB = ZB(3141);
    const GB = "Reconnecting";
    class vB {
      constructor(BB) {
        this.hooks = BB, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = BB => {
          BB.persisted || this.leave()
        }, this.controller = new oB.c((IB => BB.reconnect(IB)), {
          isSessionLive: () => !this.ended && BB.isLive(),
          onPhaseChanged: BB => {
            this.onPhaseChanged(BB)
          },
          onReconnected: IB => {
            BB.onReconnected(IB)
          },
          onGaveUp: IB => {
            !this.ended && BB.isLive() && BB.onGaveUp(this.sessionBased, IB)
          }
        })
      }
      onInitialInfo(BB, IB) {
        this.graceMs = BB, this.sessionBased = IB
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
          IB = this.controller.heldToken;
        this.end(), BB && "" !== IB && this.hooks.releaseSeat(IB)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(BB) {
        const IB = (0, oB.q)(BB);
        IB !== this.stopped && (this.stopped = IB, this.hooks.freeze(IB));
        const ZB = "frozen" === BB || "resuming" === BB && this.frozen;
        ZB && !this.frozen ? (0, JB.t)(GB, {
          overridesPause: !0
        }) : !ZB && this.frozen && (0, JB.p)(GB), this.frozen = ZB, this.setListening("connected" !== BB), TB.l.Gq(oB.n, ZB ? "frozen" : BB)
      }
      setListening(BB) {
        BB !== this.listening && (this.listening = BB, BB ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39104: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    class TB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = BB, this.now = IB, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const BB = this.now(),
            IB = BB - this.lastCheckAt <= 2e3;
          this.lastCheckAt = BB;
          const ZB = "visible" === document.visibilityState;
          !ZB || IB && this.wasVisible || (this.resumedAt = BB), this.wasVisible = ZB, ZB && BB - this.lastHeardAt > 12e3 && BB - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = IB(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39119: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => cB,
      g: () => nB
    });
    var TB = ZB(1782),
      JB = ZB(201),
      oB = ZB(1755),
      GB = ZB(1845),
      vB = ZB(1258),
      kB = ZB(1186);
    async function cB(BB, IB) {
      return function(BB) {
        return "object" === typeof BB && null !== BB && BB.code === JB.c.VpnIp.code
      }(IB) && function(BB) {
        return oB.d.supports("appCheck") && BB.isLoggedIn() && !BB.hasTriedAppAttestation()
      }(BB) && await async function(BB) {
        try {
          const {
            token: IB
          } = await (0, GB.e)(), {
            "3PSIDMCPP": ZB
          } = await (0, kB.postJsonWithMetricsCookiesAndJsonResponse)(`${vB.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: IB
          }, {
            retries: 0
          }, BB.getMetricsCookies());
          return BB.setAppAttestedAuthJwt(ZB), !0
        } catch (IB) {
          return IB instanceof TB.e && "failed" === IB.code ? (console.warn("The app couldn't get an App Check token:", IB), BB.markAppAttestationTried()) : console.error("Failed to attest the app:", IB), !1
        }
      }(BB)
    }
    async function nB(BB, IB) {
      try {
        return await IB()
      } catch (ZB) {
        if (!await cB(BB, ZB)) throw ZB
      }
      return IB()
    }
  },
  39110: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => zB,
      h: () => nB
    });
    var TB = ZB(201),
      JB = ZB(1878),
      oB = ZB(1261),
      GB = ZB(9011);
    const vB = [250, 500, 1e3, 2e3, 1250],
      kB = 406;

    function cB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const {
        code: IB,
        message: ZB
      } = BB, JB = TB.c.duplicateLobbyNameError;
      return (IB === JB.code || IB === kB) && (ZB === JB.text || ZB === JB.text + TB.k)
    }
    async function nB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JB.b;
      for (let JB = 0;; JB++) {
        let GB;
        (0, oB.o)(IB);
        try {
          return await BB()
        } catch (TB) {
          if (GB = vB[JB], void 0 === GB || !cB(TB)) throw TB
        }
        await ZB(GB, IB)
      }
    }
    const hB = new Set([TB.c.duplicateLobbyNameError.code, TB.c.lobbyCantBeCreated.code, TB.c.roomDisposedEarlyError.code, TB.c.roomDisposedLateError.code, TB.c.serverRoomLimitReached.code]);

    function zB(BB) {
      if (cB(BB)) return !0;
      const IB = (0, GB.h)(BB);
      return "number" === typeof IB && hB.has(IB)
    }
  },
  39126: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB
    });
    var TB = ZB(9011),
      JB = ZB(36516),
      oB = ZB(39129);
    const GB = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      vB = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function kB(BB, IB) {
      if (BB instanceof JB.f) return {
        at: GB[IB],
        code: 0
      };
      const ZB = (0, TB.h)(BB),
        kB = "number" === typeof ZB ? ZB : 0;
      return null !== (0, oB.f)(kB).name ? {
        at: "refused",
        code: kB
      } : {
        at: vB[IB],
        code: kB
      }
    }
  },
  9011: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      h: () => GB,
      i: () => vB,
      k: () => cB,
      l: () => kB
    });
    var TB = ZB(201),
      JB = ZB(4802);

    function oB(BB) {
      return GB(BB) === TB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function GB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function vB(BB) {
      var IB;
      return null !== (IB = Object.keys(JB.c).find((IB => JB.c[IB] === BB))) && void 0 !== IB ? IB : null
    }

    function kB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const cB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36492: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => zB,
      f: () => nB,
      h: () => FB,
      l: () => hB
    });
    var TB = ZB(360),
      JB = ZB(694),
      oB = ZB(700),
      GB = ZB(36);
    const vB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      kB = "playSessionGameNameWithVariation",
      cB = "wasMatchmakePlayer";

    function nB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n;
      (0, oB.i)(BB, vB)
    }

    function hB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).setItem(cB, !0)
    }

    function zB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n;
      return (0, oB.c)(BB, vB)
    }

    function FB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GB.n;
      const ZB = (0, oB.c)(IB, vB),
        nB = function(BB) {
          const IB = BB.getItem(kB);
          return "string" !== typeof IB ? null : IB
        }(IB),
        hB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).getItem(cB)
        }(IB);
      let zB;
      return zB = null !== ZB && null !== nB && (0, oB.e)(IB, vB) && function(BB, IB, ZB) {
          const JB = (0, TB.Vb)(BB),
            oB = (0, TB.Vb)(IB),
            GB = (0, TB.Pb)(BB),
            vB = (0, TB.Pb)(IB);
          return !(JB !== oB || !ZB) || JB === oB && GB === vB
        }(nB, BB, hB) ? ZB : (0, JB.d)(), (0, oB.l)(IB, vB, zB), IB.setItem(kB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).removeItem(cB)
        }(IB), zB
    }
  },
  36485: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => CB,
      d: () => QB
    });
    var TB = ZB(1058),
      JB = ZB(212),
      oB = ZB(357),
      GB = ZB(671),
      vB = ZB(360),
      kB = ZB(1060),
      cB = ZB(684),
      nB = ZB(714),
      hB = ZB(4704),
      zB = ZB(105),
      FB = ZB(140),
      NB = ZB(1805),
      gB = ZB(121),
      qB = ZB(36492),
      yB = ZB(36),
      UB = ZB(696),
      WB = ZB(676),
      dB = ZB(36501);

    function CB() {
      var BB, IB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (IB = navigator.language) && void 0 !== IB ? IB : "none"], "en-Gb"]
    }

    function QB(BB, IB, ZB, QB, sB) {
      const wB = (0, TB.i)(IB) ? (0, TB.l)(IB) : null,
        OB = BB.isLoggedIn() && void 0 !== (0, JB.e)(oB.r, FB.siteUsed) ? (0, WB.f)() : null,
        YB = {
          cookies: (0, NB.getAllCookiesForGameNameWithVariation)(IB),
          isMobile: (0, zB.isMobile)(),
          isUsingCustomGameTexturePack: null !== wB && sB(wB),
          generalCookies: {
            joinDiscord: !!yB.m.getItem("DiscordPressed"),
            newGo: hB.b,
            ...BB.getMetricsCookies(),
            trafficCode: QB,
            compliance: zB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, zB.getBrowserName)(),
            version: (0, zB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, zB.getPlatformType)(),
            deviceType: (0, gB.e)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: ZB,
          languages: CB(),
          version: GB.b,
          siteUsed: FB.siteUsed,
          subsiteUsed: FB.subsiteUsed,
          playSessionId: (0, qB.h)(IB),
          visitSessionId: (0, UB.i)(),
          clientReason: cB.p.reason,
          budgetBasis: (0, dB.h)(),
          ...null !== nB.t && {
            diagClaim: nB.t.claimId
          },
          ...null !== OB && {
            webGpuLoss: OB
          }
        };
      return null !== wB && (0, vB.Gc)(wB) ? (YB.lobbyName = (0, TB.h)(wB, (0, TB.k)(IB), ZB), {
        roomName: `classic_${kB.h}`,
        joinOptions: YB
      }) : {
        roomName: IB,
        joinOptions: YB
      }
    }
  },
  39143: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => FB,
      c: () => zB
    });
    const TB = "ue:",
      JB = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      oB = "[A-Za-z0-9]{1,24}",
      GB = 15,
      vB = new RegExp(`^${oB}$`);
    new RegExp(`^${TB}(${[...JB,"other"].join("|")}):(?:n|k(${oB})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function kB(BB, IB, ZB, oB, kB) {
      const cB = "string" === typeof BB && JB.includes(BB) ? BB : "other";
      let nB = "n";
      return "string" === typeof IB ? nB = vB.test(IB) ? `k${IB}` : "n" : "number" === typeof ZB && Number.isInteger(ZB) && ZB >= 0 && ZB <= GB && (nB = `b${ZB}`), `${TB}${cB}:${nB}:${oB?1:0}${kB?1:0}`
    }
    var cB = ZB(1738),
      nB = ZB(1814);
    let hB = null;

    function zB(BB) {
      const IB = BB instanceof Element && BB !== document.body && BB !== document.documentElement && !(0, cB.s)(BB) && !BB.closest("#root");
      return {
        editable: (0, nB.d)(BB),
        outsideView: IB
      }
    }

    function FB(BB) {
      return hB ??= function(BB) {
        try {
          const {
            editable: IB,
            outsideView: ZB
          } = zB(BB.target), TB = BB;
          return kB(BB.type, TB.code, TB.button, IB, ZB)
        } catch {
          return kB(null, null, null, !1, !1)
        }
      }(BB), hB
    }
  },
  39129: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB,
      c: () => oB,
      e: () => vB,
      f: () => nB,
      j: () => kB,
      l: () => GB
    });
    var TB = ZB(201);
    const JB = 3e3,
      oB = 15e3;

    function GB(BB) {
      const IB = BB.endsWith(TB.k);
      return {
        text: (IB ? BB.slice(0, -TB.k.length) : BB) || null,
        dropsCache: IB
      }
    }
    const vB = "Either your internet isn't working or this is a bug.";

    function kB(BB, IB) {
      const ZB = nB(BB);
      return null !== ZB.name && "" === TB.c[ZB.name].text && null !== IB ? IB : ZB.reason
    }
    const cB = "You were removed from the game.";

    function nB(BB) {
      var IB;
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const JB = null !== (IB = Object.keys(TB.c).find((IB => TB.c[IB].code === BB))) && void 0 !== IB ? IB : null;
      if (null === JB) return {
        code: BB,
        name: JB,
        reason: null !== ZB && void 0 !== ZB ? ZB : `${vB}\nCode: ${BB}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: oB,
        canReconnect: GB = !1
      } = TB.c[JB], kB = BB === TB.c.outdatedVersion.code || BB === TB.c.loadRecaptchaError.code;
      return {
        code: BB,
        name: JB,
        reason: "" !== oB ? oB : null !== ZB && void 0 !== ZB ? ZB : BB === TB.c.gameOrPluginKick.code ? cB : `Code: ${BB}`,
        canReconnect: GB,
        automaticallyReconnect: BB === TB.c.customGameUpdated.code || BB === TB.c.duplicateLobbyNameError.code,
        requiresRefresh: kB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);