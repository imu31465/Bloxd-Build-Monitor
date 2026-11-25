export const id = 174;
export const ids = [174];
export const modules = {
  40118: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      h: () => aM
    });
    var OM = iM(22);
    let SM = !1;

    function jM() {
      return SM
    }

    function aM(MM) {
      SM !== MM && (SM = MM, OM.i.Tz("replayViewer|videoExportChanged"))
    }
  },
  37316: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      f: () => PM,
      i: () => QM,
      j: () => nM,
      l: () => EM
    });
    var OM = iM(632),
      SM = iM(1845),
      jM = iM(5200);
    class aM {
      constructor(MM, rM) {
        this.width = MM, this.vL = rM, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(MM * rM)
      }
      push(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = this.data,
          OM = this.next * this.width;
        for (let SM = 0; SM < this.width; SM++) iM[OM + SM] = MM[rM + SM];
        this.next = (this.next + 1) % this.vL, this.size = Math.min(this.size + 1, this.vL)
      }
      rows() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const iM = [],
          OM = (this.next - this.size + this.vL) % this.vL;
        for (let SM = 0; SM < this.size; SM++) {
          const jM = (OM + SM) % this.vL * this.width;
          this.data[jM + MM] >= rM && iM.push(Array.from(this.data.subarray(jM, jM + this.width)))
        }
        return iM
      }
      lines() {
        return this.rows().map((MM => MM.join(",")))
      }
    }
    const PM = 10,
      nM = {
        idle: 0,
        ML: 1,
        pD: 2,
        ZD: 3,
        yd: 4
      },
      QM = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      zM = {
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
      LM = 12e3,
      mM = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      HM = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      hM = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      JM = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      dM = ["nowMs", "change", "count"];

    function yM(MM) {
      return "js" === MM ? zM.jsClient : zM.wasmClient
    }
    class lM {
      constructor() {
        this.steps = new aM(PM, LM), this.events = new aM(HM.length, LM), this.frames = new aM(hM.length, LM), this.cameraSets = new aM(jM.g, 256), this.changes = new aM(dM.length, 256)
      }
    }
    const EM = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(HM.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(MM, rM) {
        this.startedClient = MM, this.startedAtMs = performance.now(), null !== this.rings ? this.change(yM(MM)) : rM && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(zM.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new lM, null !== this.startedClient && this.changeAt(this.startedAtMs, yM(this.startedClient), 1))
      }
      step(MM, rM) {
        var iM;
        MM[rM + 6] !== nM.yd && (null === (iM = this.rings) || void 0 === iM || iM.steps.push(MM, rM))
      }
      cameraSet(MM, rM) {
        var iM;
        null === (iM = this.rings) || void 0 === iM || iM.cameraSets.push(MM, rM)
      }
      mouseMove(MM, rM) {
        const iM = this.rings;
        if (null === iM) return;
        const OM = this.sample;
        OM[0] = MM.timeStamp, OM[1] = performance.now(), OM[2] = MM.movementX, OM[3] = MM.movementY, OM[4] = rM ? 1 : 0, iM.events.push(OM)
      }
      frame(MM, rM, iM, OM) {
        const SM = this.rings;
        if (null === SM || OM === QM.none) return;
        const jM = this.sample;
        jM[0] = performance.now(), jM[1] = MM, jM[2] = rM, jM[3] = iM, jM[4] = OM, SM.frames.push(jM)
      }
      change(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), MM, rM)
      }
      changeAt(MM, rM, iM) {
        const OM = this.rings;
        if (null === OM) return;
        const SM = this.sample;
        SM[0] = MM, SM[1] = rM, SM[2] = iM, OM.changes.push(SM)
      }
      dumpText() {
        var MM, rM;
        const iM = this.rings;
        return [`look records (${this.startedClient}): ${mM.join(",")}`, ...null !== (MM = null === iM || void 0 === iM ? void 0 : iM.steps.lines()) && void 0 !== MM ? MM : [], `mousemove events: ${HM.join(",")}`, ...null !== (rM = null === iM || void 0 === iM ? void 0 : iM.events.lines()) && void 0 !== rM ? rM : []].join("\n")
      }
      toJson(MM, rM) {
        var iM;
        const SM = MM - 6e4,
          jM = this.rings,
          aM = function(MM, rM) {
            var iM;
            let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const jM = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.rows(OM, SM)) && void 0 !== iM ? iM : [];
            return {
              columns: rM,
              fromMs: 0 === jM.length ? null : jM[0][OM],
              rows: jM
            }
          };
        return {
          version: OM.c,
          client: null !== (iM = this.startedClient) && void 0 !== iM ? iM : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: MM,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          Vd: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...rM,
          outcomes: nM,
          frameKinds: QM,
          changes: zM,
          lookSteps: aM(null === jM || void 0 === jM ? void 0 : jM.steps, mM),
          mouseMoves: aM(null === jM || void 0 === jM ? void 0 : jM.events, HM, 1),
          frames: aM(null === jM || void 0 === jM ? void 0 : jM.frames, hM),
          cameraSets: aM(null === jM || void 0 === jM ? void 0 : jM.cameraSets, JM),
          pageChanges: aM(null === jM || void 0 === jM ? void 0 : jM.changes, dM)
        }
      }
      save(MM) {
        const rM = JSON.stringify(this.toJson(performance.now(), MM));
        (0, SM.c)(new Blob([rM], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  37312: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      LOOK_DEBUG_HEADER: () => zM,
      endLookDebugTake: () => yM,
      noteLookDroppedCopy: () => lM,
      saveLookCapture: () => EM,
      startLookDebug: () => dM
    });
    var OM = iM(5200),
      SM = iM(3122),
      jM = iM(2e3);
    const aM = new Map(Object.entries(OM.l).map((MM => {
      let [rM, iM] = MM;
      return [iM, rM]
    })));

    function PM(MM) {
      return (0, jM.J)(MM).toFixed(1)
    }

    function nM(MM, rM) {
      return `camera set by ${aM.get(MM[rM+1])}: heading ${`${PM(MM[rM+2])} -> ${PM(MM[rM+4])}`} deg, pitch ${`${PM(MM[rM+3])} -> ${PM(MM[rM+5])}`} deg, at ${MM[rM].toFixed(1)} ms`
    }
    var QM = iM(37316);
    const zM = 2;

    function LM(MM) {
      return Number.isFinite(MM) ? String(Math.round(10 * MM) / 10) : String(MM)
    }

    function mM(MM) {
      return Number.isFinite(MM) ? MM.toFixed(1) : String(MM)
    }
    class HM {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.pD = 0, this.pastLimit = 0, this.lockSkips = 0, this.yd = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.pD > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.pD > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class hM {
      constructor() {
        var MM = this;
        this.topicOn = (0, SM.p)("look"), this.remote = (0, SM.q)(), this.tally = new HM, this.takes = null, this.started = !1, this.record = function(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (QM.l.step(rM, iM), !MM.topicOn) return;
          const OM = rM[iM],
            SM = rM[iM + 1],
            jM = rM[iM + 2],
            aM = rM[iM + 3],
            PM = rM[iM + 4],
            nM = rM[iM + 5],
            zM = rM[iM + 6],
            HM = rM[iM + 7],
            hM = rM[iM + 8],
            JM = rM[iM + 9],
            dM = MM.tally;
          switch (dM.frames++, zM) {
            case QM.j.idle:
              return void dM.idle++;
            case QM.j.yd:
              return void dM.yd++;
            case QM.j.ZD:
              return dM.lockSkips++, void(0 === jM && 0 === aM || MM.outlier(`lock skip dropped raw (${LM(jM)}, ${LM(aM)}) at ${mM(OM)} ms`))
          }
          dM.looked++, Number.isFinite(SM) && (dM.dtMin = Math.min(dM.dtMin, SM), dM.dtMax = Math.max(dM.dtMax, SM), dM.dtSum += SM, SM > 0 && (dM.peakRate = Math.max(dM.peakRate, Math.hypot(PM, nM) / SM))), dM.raw[0] += jM, dM.raw[1] += aM, dM.turned[0] += PM, dM.turned[1] += nM;
          const yM = Math.abs(jM) > JM || Math.abs(aM) > JM,
            lM = `raw (${LM(jM)}, ${LM(aM)}) over ${mM(SM)} ms, limit ${LM(JM)}, filter v (${HM.toFixed(3)}, ${hM.toFixed(3)}) px/ms, at ${mM(OM)} ms`;
          zM === QM.j.pD ? (dM.pD++, MM.outlier(`spike put right: ${lM} -> turned (${LM(PM)}, ${LM(nM)})`)) : yM ? (dM.pastLimit++, MM.outlier(`kept past limit: ${lM}`)) : SM > 50 && (dM.longFrames++, MM.remote || MM.outlier(`long frame: ${lM}, turned in full`))
        }, this.onMouseMove = MM => {
          const rM = null !== document.pointerLockElement;
          if (QM.l.mouseMove(MM, rM), !this.topicOn) return;
          const iM = this.tally,
            {
              movementX: OM,
              movementY: SM
            } = MM;
          iM.events++;
          const jM = Math.max(Math.abs(OM), Math.abs(SM));
          iM.eventMax = Math.max(iM.eventMax, jM), jM >= 200 && (iM.bigEvents++, this.eventOutlier(`big mousemove (${OM}, ${SM}) at ${mM(MM.timeStamp)} ms, lock ${rM?"sQ":"free"}`))
        }, this.onLockChange = () => {
          const MM = document.pointerLockElement;
          MM ? QM.l.lockGained() : QM.l.change(QM.d.lockLost), this.topicOn && (0, SM.k)("look", `pointer lock ${MM?`gained (${MM.tagName.toLowerCase()})`:"lost"} at ${mM(performance.now())} ms`)
        }, this.onLockError = () => {
          QM.l.change(QM.d.lockError), this.topicOn && (0, SM.k)("look", `pointer lock request failed at ${mM(performance.now())} ms`)
        }, this.onVisibility = () => {
          QM.l.change("hidden" === document.visibilityState ? QM.d.hidden : QM.d.visible), this.topicOn && (0, SM.k)("look", `page ${document.visibilityState} at ${mM(performance.now())} ms`)
        }, this.onFocus = () => {
          QM.l.change(QM.d.focus)
        }, this.onBlur = () => {
          QM.l.change(QM.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const MM = this.tally;
          if (this.tally = new HM, !MM.moved() || this.remote && !MM.hasEvent()) return;
          const rM = MM.looked > 0 ? MM.dtSum / MM.looked : NaN,
            iM = [`${MM.frames} frames (${MM.looked} looked, ${MM.idle} idle${"wasm"===QM.l.client?`, ${MM.yd} carried`:""})`, `dt avg ${mM(rM)} min ${mM(MM.dtMin)} max ${mM(MM.dtMax)}, ${MM.longFrames} long`, `${MM.events} mousemoves (max ${LM(MM.eventMax)} px, ${MM.bigEvents} big)`, `raw (${LM(MM.raw[0])}, ${LM(MM.raw[1])}) turned (${LM(MM.turned[0])}, ${LM(MM.turned[1])})`, `peak ${MM.peakRate.toFixed(2)} px/ms`, `put right ${MM.pD}, past limit ${MM.pastLimit}, lock skips ${MM.lockSkips}`, "lock " + (document.pointerLockElement ? "sQ" : "free")];
          MM.dropped > 0 && iM.push(`${MM.dropped} doubled spike copies dropped`), MM.cameraSets > 0 && iM.push(`${MM.cameraSets} camera sets`), MM.cameraSetsLost > 0 && iM.push(`${MM.cameraSetsLost} camera set records lost`), MM.lost > 0 && iM.push(`${MM.lost} records lost`), MM.suppressed > 0 && iM.push(`${MM.suppressed} outlier lines not shown`), (0, SM.k)("look", `1s: ${iM.join("; ")}`)
        }
      }
      start(MM, rM) {
        if (QM.l.start(MM, null !== document.pointerLockElement), this.takes = rM, this.topicOn) {
          const {
            screen: rM
          } = window;
          (0, SM.k)("look", `start: ${MM} client, dpr ${window.devicePixelRatio}, screen ${rM.width}x${rM.height}, pointer lock ${document.pointerLockElement?"sQ":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, SM.i)("look", (() => QM.l.dumpText())))
      }
      outlier(MM) {
        const rM = this.tally;
        rM.outliers >= 20 ? rM.suppressed++ : (rM.outliers++, (0, SM.k)("look", MM))
      }
      eventOutlier(MM) {
        const rM = this.tally;
        rM.eventLines >= 10 ? rM.suppressed++ : (rM.eventLines++, (0, SM.k)("look", MM))
      }
      takeRecords() {
        if (null === this.takes) return;
        const MM = this.takes.look();
        if (MM.length >= zM) {
          this.counted(QM.d.stepsLost, MM[0]), this.counted(QM.d.droppedCopies, MM[1]);
          for (let rM = zM; rM + QM.f <= MM.length; rM += QM.f) this.record(MM, rM)
        }
        const rM = this.takes.cameraSets();
        if (rM.length >= OM.d) {
          this.counted(QM.d.cameraSetsLost, rM[0]);
          for (let MM = OM.d; MM + OM.g <= rM.length; MM += OM.g) QM.l.cameraSet(rM, MM), this.topicOn && (this.tally.cameraSets++, this.outlier(nM(rM, MM)))
        }
      }
      droppedCopy() {
        this.counted(QM.d.droppedCopies, 1)
      }
      counted(MM, rM) {
        if (0 === rM) return;
        if (QM.l.change(MM, rM), !this.topicOn) return;
        const iM = this.tally;
        MM === QM.d.droppedCopies ? iM.dropped += rM : MM === QM.d.stepsLost ? iM.lost += rM : iM.cameraSetsLost += rM
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let JM = null;

    function dM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return JM ??= new hM, JM.start(MM, rM), JM.record
    }

    function yM() {
      var MM;
      null === (MM = JM) || void 0 === MM || MM.endTake()
    }

    function lM() {
      var MM;
      null === (MM = JM) || void 0 === MM || MM.droppedCopy()
    }
    async function EM(MM) {
      var rM;
      null === (rM = JM) || void 0 === rM || rM.takeRecords();
      const {
        clientHintsRead: OM,
        debugDeviceLines: SM
      } = await iM.e(34).then((() => iM(34912)));
      await OM, QM.l.save({
        ...MM,
        device: SM()
      })
    }
  },
  40077: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM
    });
    var OM = iM(22),
      SM = iM(1313),
      jM = iM(3324);
    const aM = "Reconnecting";
    class PM {
      constructor(MM) {
        this.hooks = MM, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = MM => {
          MM.persisted || this.leave()
        }, this.controller = new jM.d((rM => MM.reconnect(rM)), {
          isSessionLive: () => !this.ended && MM.isLive(),
          onPhaseChanged: MM => {
            this.onPhaseChanged(MM)
          },
          onReconnected: rM => {
            MM.onReconnected(rM)
          },
          onGaveUp: rM => {
            !this.ended && MM.isLive() && MM.onGaveUp(this.sessionBased, rM)
          }
        })
      }
      onInitialInfo(MM, rM) {
        this.graceMs = MM, this.sessionBased = rM
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(MM) {
        this.ended || this.controller.onConnectionLost(MM, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const MM = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          rM = this.controller.heldToken;
        this.end(), MM && "" !== rM && this.hooks.releaseSeat(rM)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(MM) {
        const rM = (0, jM.o)(MM);
        rM !== this.stopped && (this.stopped = rM, this.hooks.freeze(rM));
        const iM = "frozen" === MM || "resuming" === MM && this.frozen;
        iM && !this.frozen ? (0, SM.z)(aM, {
          overridesPause: !0
        }) : !iM && this.frozen && (0, SM.v)(aM), this.frozen = iM, this.setListening("connected" !== MM), OM.i.Tz(jM.k, iM ? "frozen" : MM)
      }
      setListening(MM) {
        MM !== this.listening && (this.listening = MM, MM ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  40079: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    class OM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = MM, this.now = rM, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const MM = this.now(),
            rM = MM - this.lastCheckAt <= 2e3;
          this.lastCheckAt = MM;
          const iM = "visible" === document.visibilityState;
          !iM || rM && this.wasVisible || (this.resumedAt = MM), this.wasVisible = iM, iM && MM - this.lastHeardAt > 12e3 && MM - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = rM(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  40089: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM,
      h: () => zM
    });
    var OM = iM(1810),
      SM = iM(181),
      jM = iM(1771),
      aM = iM(1884),
      PM = iM(1202),
      nM = iM(1144);
    async function QM(MM, rM) {
      return function(MM) {
        return "object" === typeof MM && null !== MM && MM.code === SM.d.VpnIp.code
      }(rM) && function(MM) {
        return jM.e.supports("appCheck") && MM.isLoggedIn() && !MM.hasTriedAppAttestation()
      }(MM) && await async function(MM) {
        try {
          const {
            token: rM
          } = await (0, aM.d)(), {
            "3PSIDMCPP": iM
          } = await (0, nM.postJsonWithMetricsCookiesAndJsonResponse)(`${PM.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: rM
          }, {
            retries: 0
          }, MM.getMetricsCookies());
          return MM.setAppAttestedAuthJwt(iM), !0
        } catch (rM) {
          return rM instanceof OM.e && "failed" === rM.code ? (console.warn("The app couldn't get an App Check token:", rM), MM.markAppAttestationTried()) : console.error("Failed to attest the app:", rM), !1
        }
      }(MM)
    }
    async function zM(MM, rM) {
      try {
        return await rM()
      } catch (iM) {
        if (!await QM(MM, iM)) throw iM
      }
      return rM()
    }
  },
  40087: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => mM,
      g: () => zM
    });
    var OM = iM(181),
      SM = iM(1919),
      jM = iM(1215),
      aM = iM(9510);
    const PM = [250, 500, 1e3, 2e3, 1250],
      nM = 406;

    function QM(MM) {
      if ("object" !== typeof MM || null === MM) return !1;
      const {
        code: rM,
        message: iM
      } = MM, SM = OM.d.duplicateLobbyNameError;
      return (rM === SM.code || rM === nM) && (iM === SM.text || iM === SM.text + OM.k)
    }
    async function zM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SM.c;
      for (let SM = 0;; SM++) {
        let aM;
        (0, jM.p)(rM);
        try {
          return await MM()
        } catch (OM) {
          if (aM = PM[SM], void 0 === aM || !QM(OM)) throw OM
        }
        await iM(aM, rM)
      }
    }
    const LM = new Set([OM.d.duplicateLobbyNameError.code, OM.d.lobbyCantBeCreated.code, OM.d.roomDisposedEarlyError.code, OM.d.roomDisposedLateError.code, OM.d.serverRoomLimitReached.code]);

    function mM(MM) {
      if (QM(MM)) return !0;
      const rM = (0, aM.f)(MM);
      return "number" === typeof rM && LM.has(rM)
    }
  },
  40094: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM
    });
    var OM = iM(9510),
      SM = iM(37437),
      jM = iM(40100);
    const aM = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      PM = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function nM(MM, rM) {
      if (MM instanceof SM.i) return {
        at: aM[rM],
        code: 0
      };
      const iM = (0, OM.f)(MM),
        nM = "number" === typeof iM ? iM : 0;
      return null !== (0, jM.m)(nM).name ? {
        at: "refused",
        code: nM
      } : {
        at: PM[rM],
        code: nM
      }
    }
  },
  9510: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      f: () => aM,
      h: () => PM,
      l: () => QM,
      p: () => nM
    });
    var OM = iM(181),
      SM = iM(5003);

    function jM(MM) {
      return aM(MM) === OM.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function aM(MM) {
      return "object" === typeof MM && null !== MM ? MM.code : void 0
    }

    function PM(MM) {
      var rM;
      return null !== (rM = Object.keys(SM.e).find((rM => SM.e[rM] === MM))) && void 0 !== rM ? rM : null
    }

    function nM(MM) {
      return "notWhitelisted" === MM ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const QM = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37416: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => mM,
      e: () => zM,
      g: () => HM,
      k: () => LM
    });
    var OM = iM(332),
      SM = iM(670),
      jM = iM(680),
      aM = iM(30);
    const PM = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      nM = "playSessionGameNameWithVariation",
      QM = "wasMatchmakePlayer";

    function zM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k;
      (0, jM.k)(MM, PM)
    }

    function LM() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).setItem(QM, !0)
    }

    function mM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k;
      return (0, jM.e)(MM, PM)
    }

    function HM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM.k;
      const iM = (0, jM.e)(rM, PM),
        zM = function(MM) {
          const rM = MM.getItem(nM);
          return "string" !== typeof rM ? null : rM
        }(rM),
        LM = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).getItem(QM)
        }(rM);
      let mM;
      return mM = null !== iM && null !== zM && (0, jM.g)(rM, PM) && function(MM, rM, iM) {
          const SM = (0, OM.Mb)(MM),
            jM = (0, OM.Mb)(rM),
            aM = (0, OM.Jb)(MM),
            PM = (0, OM.Jb)(rM);
          return !(SM !== jM || !iM) || SM === jM && aM === PM
        }(zM, MM, LM) ? iM : (0, SM.e)(), (0, jM.o)(rM, PM, mM), rM.setItem(nM, MM),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).removeItem(QM)
        }(rM), mM
    }
  },
  37414: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => GM,
      f: () => CM
    });
    var OM = iM(1073),
      SM = iM(187),
      jM = iM(327),
      aM = iM(632),
      PM = iM(332),
      nM = iM(1081),
      QM = iM(656),
      zM = iM(694),
      LM = iM(4906),
      mM = iM(83),
      HM = iM(119),
      hM = iM(1830),
      JM = iM(103),
      dM = iM(37416),
      yM = iM(30),
      lM = iM(673),
      EM = iM(637),
      UM = iM(37422);

    function GM() {
      var MM, rM;
      return [...null !== (MM = navigator.languages) && void 0 !== MM ? MM : [null !== (rM = navigator.language) && void 0 !== rM ? rM : "none"], "en-Gb"]
    }

    function CM(MM, rM, iM, CM, eM) {
      const bM = (0, OM.m)(rM) ? (0, OM.p)(rM) : null,
        wM = MM.isLoggedIn() && void 0 !== (0, SM.d)(jM.g, HM.siteUsed) ? (0, EM.h)() : null,
        tM = {
          cookies: (0, hM.getAllCookiesForGameNameWithVariation)(rM),
          isMobile: (0, mM.isMobile)(),
          isUsingCustomGameTexturePack: null !== bM && eM(bM),
          generalCookies: {
            joinDiscord: !!yM.g.getItem("DiscordPressed"),
            newGo: LM.c,
            ...MM.getMetricsCookies(),
            trafficCode: CM,
            compliance: mM.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, mM.getBrowserName)(),
            version: (0, mM.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, mM.getPlatformType)(),
            deviceType: (0, JM.c)()
          },
          isLoggedIn: MM.isLoggedIn(),
          lobbyName: iM,
          languages: GM(),
          version: aM.c,
          siteUsed: HM.siteUsed,
          subsiteUsed: HM.subsiteUsed,
          playSessionId: (0, dM.g)(rM),
          visitSessionId: (0, lM.e)(),
          clientReason: QM.x.reason,
          budgetBasis: (0, UM.f)(),
          ...null !== zM.m && {
            diagClaim: zM.m.claimId
          },
          ...null !== wM && {
            webGpuLoss: wM
          }
        };
      return null !== bM && (0, PM.Dc)(bM) ? (tM.lobbyName = (0, OM.i)(bM, (0, OM.o)(rM), iM), {
        roomName: `classic_${nM.g}`,
        joinOptions: tM
      }) : {
        roomName: rM,
        joinOptions: tM
      }
    }
  },
  40110: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => HM,
      g: () => mM
    });
    const OM = "ue:",
      SM = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      jM = "[A-Za-z0-9]{1,24}",
      aM = 15,
      PM = new RegExp(`^${jM}$`);
    new RegExp(`^${OM}(${[...SM,"other"].join("|")}):(?:n|k(${jM})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function nM(MM, rM, iM, jM, nM) {
      const QM = "string" === typeof MM && SM.includes(MM) ? MM : "other";
      let zM = "n";
      return "string" === typeof rM ? zM = PM.test(rM) ? `k${rM}` : "n" : "number" === typeof iM && Number.isInteger(iM) && iM >= 0 && iM <= aM && (zM = `b${iM}`), `${OM}${QM}:${zM}:${jM?1:0}${nM?1:0}`
    }
    var QM = iM(1750),
      zM = iM(1835);
    let LM = null;

    function mM(MM) {
      const rM = MM instanceof Element && MM !== document.body && MM !== document.documentElement && !(0, QM.p)(MM) && !MM.closest("#root");
      return {
        editable: (0, zM.e)(MM),
        outsideView: rM
      }
    }

    function HM(MM) {
      return LM ??= function(MM) {
        try {
          const {
            editable: rM,
            outsideView: iM
          } = mM(MM.target), OM = MM;
          return nM(MM.type, OM.code, OM.button, rM, iM)
        } catch {
          return nM(null, null, null, !1, !1)
        }
      }(MM), LM
    }
  },
  40100: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      f: () => jM,
      j: () => PM,
      m: () => zM,
      p: () => nM,
      t: () => aM
    });
    var OM = iM(181);
    const SM = 3e3,
      jM = 15e3;

    function aM(MM) {
      const rM = MM.endsWith(OM.k);
      return {
        text: (rM ? MM.slice(0, -OM.k.length) : MM) || null,
        dropsCache: rM
      }
    }
    const PM = "Either your internet isn't working or this is a bug.";

    function nM(MM, rM) {
      const iM = zM(MM);
      return null !== iM.name && "" === OM.d[iM.name].text && null !== rM ? rM : iM.reason
    }
    const QM = "You were removed from the game.";

    function zM(MM) {
      var rM;
      let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const SM = null !== (rM = Object.keys(OM.d).find((rM => OM.d[rM].code === MM))) && void 0 !== rM ? rM : null;
      if (null === SM) return {
        code: MM,
        name: SM,
        reason: null !== iM && void 0 !== iM ? iM : `${PM}\nCode: ${MM}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: jM,
        canReconnect: aM = !1
      } = OM.d[SM], nM = MM === OM.d.outdatedVersion.code || MM === OM.d.loadRecaptchaError.code;
      return {
        code: MM,
        name: SM,
        reason: "" !== jM ? jM : null !== iM && void 0 !== iM ? iM : MM === OM.d.gameOrPluginKick.code ? QM : `Code: ${MM}`,
        canReconnect: aM,
        automaticallyReconnect: MM === OM.d.customGameUpdated.code || MM === OM.d.duplicateLobbyNameError.code,
        requiresRefresh: nM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);