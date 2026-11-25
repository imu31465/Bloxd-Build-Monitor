export const id = 160;
export const ids = [160];
export const modules = {
  39392: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      d: () => Xu
    });
    var su = ju(24);
    let Uu = !1;

    function Zu() {
      return Uu
    }

    function Xu(uu) {
      Uu !== uu && (Uu = uu, su.h.TY("replayViewer|videoExportChanged"))
    }
  },
  36770: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      g: () => lu,
      i: () => fu,
      m: () => qu,
      q: () => Mu
    });
    var su = ju(656),
      Uu = ju(1802),
      Zu = ju(4976);
    class Xu {
      constructor(uu, Eu) {
        this.width = uu, this.Mb = Eu, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(uu * Eu)
      }
      push(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = this.data,
          su = this.next * this.width;
        for (let Uu = 0; Uu < this.width; Uu++) ju[su + Uu] = uu[Eu + Uu];
        this.next = (this.next + 1) % this.Mb, this.size = Math.min(this.size + 1, this.Mb)
      }
      rows() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const ju = [],
          su = (this.next - this.size + this.Mb) % this.Mb;
        for (let Uu = 0; Uu < this.size; Uu++) {
          const Zu = (su + Uu) % this.Mb * this.width;
          this.data[Zu + uu] >= Eu && ju.push(Array.from(this.data.subarray(Zu, Zu + this.width)))
        }
        return ju
      }
      lines() {
        return this.rows().map((uu => uu.join(",")))
      }
    }
    const lu = 10,
      qu = {
        idle: 0,
        oN: 1,
        XV: 2,
        lV: 3,
        uh: 4
      },
      fu = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      Cu = {
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
      bu = 12e3,
      cu = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      Nu = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      Ou = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      Yu = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      hu = ["nowMs", "change", "count"];

    function Du(uu) {
      return "js" === uu ? Cu.jsClient : Cu.wasmClient
    }
    class gu {
      constructor() {
        this.steps = new Xu(lu, bu), this.events = new Xu(Nu.length, bu), this.frames = new Xu(Ou.length, bu), this.cameraSets = new Xu(Zu.f, 256), this.changes = new Xu(hu.length, 256)
      }
    }
    const Mu = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(Nu.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(uu, Eu) {
        this.startedClient = uu, this.startedAtMs = performance.now(), null !== this.rings ? this.change(Du(uu)) : Eu && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(Cu.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new gu, null !== this.startedClient && this.changeAt(this.startedAtMs, Du(this.startedClient), 1))
      }
      step(uu, Eu) {
        var ju;
        uu[Eu + 6] !== qu.uh && (null === (ju = this.rings) || void 0 === ju || ju.steps.push(uu, Eu))
      }
      cameraSet(uu, Eu) {
        var ju;
        null === (ju = this.rings) || void 0 === ju || ju.cameraSets.push(uu, Eu)
      }
      mouseMove(uu, Eu) {
        const ju = this.rings;
        if (null === ju) return;
        const su = this.sample;
        su[0] = uu.timeStamp, su[1] = performance.now(), su[2] = uu.movementX, su[3] = uu.movementY, su[4] = Eu ? 1 : 0, ju.events.push(su)
      }
      frame(uu, Eu, ju, su) {
        const Uu = this.rings;
        if (null === Uu || su === fu.none) return;
        const Zu = this.sample;
        Zu[0] = performance.now(), Zu[1] = uu, Zu[2] = Eu, Zu[3] = ju, Zu[4] = su, Uu.frames.push(Zu)
      }
      change(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), uu, Eu)
      }
      changeAt(uu, Eu, ju) {
        const su = this.rings;
        if (null === su) return;
        const Uu = this.sample;
        Uu[0] = uu, Uu[1] = Eu, Uu[2] = ju, su.changes.push(Uu)
      }
      dumpText() {
        var uu, Eu;
        const ju = this.rings;
        return [`look records (${this.startedClient}): ${cu.join(",")}`, ...null !== (uu = null === ju || void 0 === ju ? void 0 : ju.steps.lines()) && void 0 !== uu ? uu : [], `mousemove events: ${Nu.join(",")}`, ...null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.events.lines()) && void 0 !== Eu ? Eu : []].join("\n")
      }
      toJson(uu, Eu) {
        var ju;
        const Uu = uu - 6e4,
          Zu = this.rings,
          Xu = function(uu, Eu) {
            var ju;
            let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Zu = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.rows(su, Uu)) && void 0 !== ju ? ju : [];
            return {
              columns: Eu,
              fromMs: 0 === Zu.length ? null : Zu[0][su],
              rows: Zu
            }
          };
        return {
          version: su.b,
          client: null !== (ju = this.startedClient) && void 0 !== ju ? ju : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: uu,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          rh: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...Eu,
          outcomes: qu,
          frameKinds: fu,
          changes: Cu,
          lookSteps: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.steps, cu),
          mouseMoves: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.events, Nu, 1),
          frames: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.frames, Ou),
          cameraSets: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.cameraSets, Yu),
          pageChanges: Xu(null === Zu || void 0 === Zu ? void 0 : Zu.changes, hu)
        }
      }
      save(uu) {
        const Eu = JSON.stringify(this.toJson(performance.now(), uu));
        (0, Uu.d)(new Blob([Eu], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  36762: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      LOOK_DEBUG_HEADER: () => Cu,
      endLookDebugTake: () => Du,
      noteLookDroppedCopy: () => gu,
      saveLookCapture: () => Mu,
      startLookDebug: () => hu
    });
    var su = ju(4976),
      Uu = ju(2943),
      Zu = ju(1955);
    const Xu = new Map(Object.entries(su.h).map((uu => {
      let [Eu, ju] = uu;
      return [ju, Eu]
    })));

    function lu(uu) {
      return (0, Zu.A)(uu).toFixed(1)
    }

    function qu(uu, Eu) {
      return `camera set by ${Xu.get(uu[Eu+1])}: heading ${`${lu(uu[Eu+2])} -> ${lu(uu[Eu+4])}`} deg, pitch ${`${lu(uu[Eu+3])} -> ${lu(uu[Eu+5])}`} deg, at ${uu[Eu].toFixed(1)} ms`
    }
    var fu = ju(36770);
    const Cu = 2;

    function bu(uu) {
      return Number.isFinite(uu) ? String(Math.round(10 * uu) / 10) : String(uu)
    }

    function cu(uu) {
      return Number.isFinite(uu) ? uu.toFixed(1) : String(uu)
    }
    class Nu {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.XV = 0, this.pastLimit = 0, this.lockSkips = 0, this.uh = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.XV > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.XV > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class Ou {
      constructor() {
        var uu = this;
        this.topicOn = (0, Uu.p)("look"), this.remote = (0, Uu.r)(), this.tally = new Nu, this.takes = null, this.started = !1, this.record = function(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (fu.q.step(Eu, ju), !uu.topicOn) return;
          const su = Eu[ju],
            Uu = Eu[ju + 1],
            Zu = Eu[ju + 2],
            Xu = Eu[ju + 3],
            lu = Eu[ju + 4],
            qu = Eu[ju + 5],
            Cu = Eu[ju + 6],
            Nu = Eu[ju + 7],
            Ou = Eu[ju + 8],
            Yu = Eu[ju + 9],
            hu = uu.tally;
          switch (hu.frames++, Cu) {
            case fu.m.idle:
              return void hu.idle++;
            case fu.m.uh:
              return void hu.uh++;
            case fu.m.lV:
              return hu.lockSkips++, void(0 === Zu && 0 === Xu || uu.outlier(`lock skip dropped raw (${bu(Zu)}, ${bu(Xu)}) at ${cu(su)} ms`))
          }
          hu.looked++, Number.isFinite(Uu) && (hu.dtMin = Math.min(hu.dtMin, Uu), hu.dtMax = Math.max(hu.dtMax, Uu), hu.dtSum += Uu, Uu > 0 && (hu.peakRate = Math.max(hu.peakRate, Math.hypot(lu, qu) / Uu))), hu.raw[0] += Zu, hu.raw[1] += Xu, hu.turned[0] += lu, hu.turned[1] += qu;
          const Du = Math.abs(Zu) > Yu || Math.abs(Xu) > Yu,
            gu = `raw (${bu(Zu)}, ${bu(Xu)}) over ${cu(Uu)} ms, limit ${bu(Yu)}, filter v (${Nu.toFixed(3)}, ${Ou.toFixed(3)}) px/ms, at ${cu(su)} ms`;
          Cu === fu.m.XV ? (hu.XV++, uu.outlier(`spike put right: ${gu} -> turned (${bu(lu)}, ${bu(qu)})`)) : Du ? (hu.pastLimit++, uu.outlier(`kept past limit: ${gu}`)) : Uu > 50 && (hu.longFrames++, uu.remote || uu.outlier(`long frame: ${gu}, turned in full`))
        }, this.onMouseMove = uu => {
          const Eu = null !== document.pointerLockElement;
          if (fu.q.mouseMove(uu, Eu), !this.topicOn) return;
          const ju = this.tally,
            {
              movementX: su,
              movementY: Uu
            } = uu;
          ju.events++;
          const Zu = Math.max(Math.abs(su), Math.abs(Uu));
          ju.eventMax = Math.max(ju.eventMax, Zu), Zu >= 200 && (ju.bigEvents++, this.eventOutlier(`big mousemove (${su}, ${Uu}) at ${cu(uu.timeStamp)} ms, lock ${Eu?"dl":"free"}`))
        }, this.onLockChange = () => {
          const uu = document.pointerLockElement;
          uu ? fu.q.lockGained() : fu.q.change(fu.d.lockLost), this.topicOn && (0, Uu.k)("look", `pointer lock ${uu?`gained (${uu.tagName.toLowerCase()})`:"lost"} at ${cu(performance.now())} ms`)
        }, this.onLockError = () => {
          fu.q.change(fu.d.lockError), this.topicOn && (0, Uu.k)("look", `pointer lock request failed at ${cu(performance.now())} ms`)
        }, this.onVisibility = () => {
          fu.q.change("hidden" === document.visibilityState ? fu.d.hidden : fu.d.visible), this.topicOn && (0, Uu.k)("look", `page ${document.visibilityState} at ${cu(performance.now())} ms`)
        }, this.onFocus = () => {
          fu.q.change(fu.d.focus)
        }, this.onBlur = () => {
          fu.q.change(fu.d.blur)
        }, this.flush = () => {
          if (this.takeRecords(), !this.topicOn) return;
          const uu = this.tally;
          if (this.tally = new Nu, !uu.moved() || this.remote && !uu.hasEvent()) return;
          const Eu = uu.looked > 0 ? uu.dtSum / uu.looked : NaN,
            ju = [`${uu.frames} frames (${uu.looked} looked, ${uu.idle} idle${"wasm"===fu.q.client?`, ${uu.uh} carried`:""})`, `dt avg ${cu(Eu)} min ${cu(uu.dtMin)} max ${cu(uu.dtMax)}, ${uu.longFrames} long`, `${uu.events} mousemoves (max ${bu(uu.eventMax)} px, ${uu.bigEvents} big)`, `raw (${bu(uu.raw[0])}, ${bu(uu.raw[1])}) turned (${bu(uu.turned[0])}, ${bu(uu.turned[1])})`, `peak ${uu.peakRate.toFixed(2)} px/ms`, `put right ${uu.XV}, past limit ${uu.pastLimit}, lock skips ${uu.lockSkips}`, "lock " + (document.pointerLockElement ? "dl" : "free")];
          uu.dropped > 0 && ju.push(`${uu.dropped} doubled spike copies dropped`), uu.cameraSets > 0 && ju.push(`${uu.cameraSets} camera sets`), uu.cameraSetsLost > 0 && ju.push(`${uu.cameraSetsLost} camera set records lost`), uu.lost > 0 && ju.push(`${uu.lost} records lost`), uu.suppressed > 0 && ju.push(`${uu.suppressed} outlier lines not shown`), (0, Uu.k)("look", `1s: ${ju.join("; ")}`)
        }
      }
      start(uu, Eu) {
        if (fu.q.start(uu, null !== document.pointerLockElement), this.takes = Eu, this.topicOn) {
          const {
            screen: Eu
          } = window;
          (0, Uu.k)("look", `start: ${uu} client, dpr ${window.devicePixelRatio}, screen ${Eu.width}x${Eu.height}, pointer lock ${document.pointerLockElement?"dl":"free"}`)
        }
        this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.topicOn && !this.remote && (0, Uu.j)("look", (() => fu.q.dumpText())))
      }
      outlier(uu) {
        const Eu = this.tally;
        Eu.outliers >= 20 ? Eu.suppressed++ : (Eu.outliers++, (0, Uu.k)("look", uu))
      }
      eventOutlier(uu) {
        const Eu = this.tally;
        Eu.eventLines >= 10 ? Eu.suppressed++ : (Eu.eventLines++, (0, Uu.k)("look", uu))
      }
      takeRecords() {
        if (null === this.takes) return;
        const uu = this.takes.look();
        if (uu.length >= Cu) {
          this.counted(fu.d.stepsLost, uu[0]), this.counted(fu.d.droppedCopies, uu[1]);
          for (let Eu = Cu; Eu + fu.g <= uu.length; Eu += fu.g) this.record(uu, Eu)
        }
        const Eu = this.takes.cameraSets();
        if (Eu.length >= su.b) {
          this.counted(fu.d.cameraSetsLost, Eu[0]);
          for (let uu = su.b; uu + su.f <= Eu.length; uu += su.f) fu.q.cameraSet(Eu, uu), this.topicOn && (this.tally.cameraSets++, this.outlier(qu(Eu, uu)))
        }
      }
      droppedCopy() {
        this.counted(fu.d.droppedCopies, 1)
      }
      counted(uu, Eu) {
        if (0 === Eu) return;
        if (fu.q.change(uu, Eu), !this.topicOn) return;
        const ju = this.tally;
        uu === fu.d.droppedCopies ? ju.dropped += Eu : uu === fu.d.stepsLost ? ju.lost += Eu : ju.cameraSetsLost += Eu
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let Yu = null;

    function hu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Yu ??= new Ou, Yu.start(uu, Eu), Yu.record
    }

    function Du() {
      var uu;
      null === (uu = Yu) || void 0 === uu || uu.endTake()
    }

    function gu() {
      var uu;
      null === (uu = Yu) || void 0 === uu || uu.droppedCopy()
    }
    async function Mu(uu) {
      var Eu;
      null === (Eu = Yu) || void 0 === Eu || Eu.takeRecords();
      const {
        clientHintsRead: su,
        debugDeviceLines: Uu
      } = await ju.e(29).then((() => ju(34431)));
      await su, fu.q.save({
        ...uu,
        device: Uu()
      })
    }
  },
  39351: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu
    });
    var su = ju(24),
      Uu = ju(1343),
      Zu = ju(3148);
    const Xu = "Reconnecting";
    class lu {
      constructor(uu) {
        this.hooks = uu, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = uu => {
          uu.persisted || this.leave()
        }, this.controller = new Zu.b((Eu => uu.reconnect(Eu)), {
          isSessionLive: () => !this.ended && uu.isLive(),
          onPhaseChanged: uu => {
            this.onPhaseChanged(uu)
          },
          onReconnected: Eu => {
            uu.onReconnected(Eu)
          },
          onGaveUp: Eu => {
            !this.ended && uu.isLive() && uu.onGaveUp(this.sessionBased, Eu)
          }
        })
      }
      onInitialInfo(uu, Eu) {
        this.graceMs = uu, this.sessionBased = Eu
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(uu) {
        this.ended || this.controller.onConnectionLost(uu, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const uu = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Eu = this.controller.heldToken;
        this.end(), uu && "" !== Eu && this.hooks.releaseSeat(Eu)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(uu) {
        const Eu = (0, Zu.p)(uu);
        Eu !== this.stopped && (this.stopped = Eu, this.hooks.freeze(Eu));
        const ju = "frozen" === uu || "resuming" === uu && this.frozen;
        ju && !this.frozen ? (0, Uu.t)(Xu, {
          overridesPause: !0
        }) : !ju && this.frozen && (0, Uu.q)(Xu), this.frozen = ju, this.setListening("connected" !== uu), su.h.TY(Zu.m, ju ? "frozen" : uu)
      }
      setListening(uu) {
        uu !== this.listening && (this.listening = uu, uu ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39354: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su
    });
    class su {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = uu, this.now = Eu, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const uu = this.now(),
            Eu = uu - this.lastCheckAt <= 2e3;
          this.lastCheckAt = uu;
          const ju = "visible" === document.visibilityState;
          !ju || Eu && this.wasVisible || (this.resumedAt = uu), this.wasVisible = ju, ju && uu - this.lastHeardAt > 12e3 && uu - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Eu(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39367: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => fu,
      h: () => Cu
    });
    var su = ju(1758),
      Uu = ju(202),
      Zu = ju(1735),
      Xu = ju(1824),
      lu = ju(1255),
      qu = ju(1183);
    async function fu(uu, Eu) {
      return function(uu) {
        return "object" === typeof uu && null !== uu && uu.code === Uu.b.VpnIp.code
      }(Eu) && function(uu) {
        return Zu.d.supports("appCheck") && uu.isLoggedIn() && !uu.hasTriedAppAttestation()
      }(uu) && await async function(uu) {
        try {
          const {
            token: Eu
          } = await (0, Xu.c)(), {
            "3PSIDMCPP": ju
          } = await (0, qu.postJsonWithMetricsCookiesAndJsonResponse)(`${lu.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Eu
          }, {
            retries: 0
          }, uu.getMetricsCookies());
          return uu.setAppAttestedAuthJwt(ju), !0
        } catch (Eu) {
          return Eu instanceof su.d && "failed" === Eu.code ? (console.warn("The app couldn't get an App Check token:", Eu), uu.markAppAttestationTried()) : console.error("Failed to attest the app:", Eu), !1
        }
      }(uu)
    }
    async function Cu(uu, Eu) {
      try {
        return await Eu()
      } catch (ju) {
        if (!await fu(uu, ju)) throw ju
      }
      return Eu()
    }
  },
  39362: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => cu,
      e: () => Cu
    });
    var su = ju(202),
      Uu = ju(1866),
      Zu = ju(1259),
      Xu = ju(9128);
    const lu = [250, 500, 1e3, 2e3, 1250],
      qu = 406;

    function fu(uu) {
      if ("object" !== typeof uu || null === uu) return !1;
      const {
        code: Eu,
        message: ju
      } = uu, Uu = su.b.duplicateLobbyNameError;
      return (Eu === Uu.code || Eu === qu) && (ju === Uu.text || ju === Uu.text + su.l)
    }
    async function Cu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uu.b;
      for (let Uu = 0;; Uu++) {
        let Xu;
        (0, Zu.n)(Eu);
        try {
          return await uu()
        } catch (su) {
          if (Xu = lu[Uu], void 0 === Xu || !fu(su)) throw su
        }
        await ju(Xu, Eu)
      }
    }
    const bu = new Set([su.b.duplicateLobbyNameError.code, su.b.lobbyCantBeCreated.code, su.b.roomDisposedEarlyError.code, su.b.roomDisposedLateError.code, su.b.serverRoomLimitReached.code]);

    function cu(uu) {
      if (fu(uu)) return !0;
      const Eu = (0, Xu.f)(uu);
      return "number" === typeof Eu && bu.has(Eu)
    }
  },
  39371: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu
    });
    var su = ju(9128),
      Uu = ju(36870),
      Zu = ju(39375);
    const Xu = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      lu = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function qu(uu, Eu) {
      if (uu instanceof Uu.g) return {
        at: Xu[Eu],
        code: 0
      };
      const ju = (0, su.f)(uu),
        qu = "number" === typeof ju ? ju : 0;
      return null !== (0, Zu.k)(qu).name ? {
        at: "refused",
        code: qu
      } : {
        at: lu[Eu],
        code: qu
      }
    }
  },
  9128: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Xu,
      j: () => lu,
      n: () => fu,
      q: () => qu
    });
    var su = ju(202),
      Uu = ju(4809);

    function Zu(uu) {
      return Xu(uu) === su.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xu(uu) {
      return "object" === typeof uu && null !== uu ? uu.code : void 0
    }

    function lu(uu) {
      var Eu;
      return null !== (Eu = Object.keys(Uu.b).find((Eu => Uu.b[Eu] === uu))) && void 0 !== Eu ? Eu : null
    }

    function qu(uu) {
      return "notWhitelisted" === uu ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const fu = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36856: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => cu,
      d: () => Cu,
      f: () => Nu,
      g: () => bu
    });
    var su = ju(349),
      Uu = ju(692),
      Zu = ju(709),
      Xu = ju(31);
    const lu = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qu = "playSessionGameNameWithVariation",
      fu = "wasMatchmakePlayer";

    function Cu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l;
      (0, Zu.j)(uu, lu)
    }

    function bu() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l).setItem(fu, !0)
    }

    function cu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l;
      return (0, Zu.c)(uu, lu)
    }

    function Nu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xu.l;
      const ju = (0, Zu.c)(Eu, lu),
        Cu = function(uu) {
          const Eu = uu.getItem(qu);
          return "string" !== typeof Eu ? null : Eu
        }(Eu),
        bu = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l).getItem(fu)
        }(Eu);
      let cu;
      return cu = null !== ju && null !== Cu && (0, Zu.g)(Eu, lu) && function(uu, Eu, ju) {
          const Uu = (0, su.Vb)(uu),
            Zu = (0, su.Vb)(Eu),
            Xu = (0, su.Qb)(uu),
            lu = (0, su.Qb)(Eu);
          return !(Uu !== Zu || !ju) || Uu === Zu && Xu === lu
        }(Cu, uu, bu) ? ju : (0, Uu.e)(), (0, Zu.m)(Eu, lu, cu), Eu.setItem(qu, uu),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l).removeItem(fu)
        }(Eu), cu
    }
  },
  36850: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Gu,
      f: () => pu
    });
    var su = ju(1069),
      Uu = ju(207),
      Zu = ju(345),
      Xu = ju(656),
      lu = ju(349),
      qu = ju(1072),
      fu = ju(680),
      Cu = ju(719),
      bu = ju(4709),
      cu = ju(91),
      Nu = ju(131),
      Ou = ju(1779),
      Yu = ju(107),
      hu = ju(36856),
      Du = ju(31),
      gu = ju(701),
      Mu = ju(663),
      eu = ju(36860);

    function Gu() {
      var uu, Eu;
      return [...null !== (uu = navigator.languages) && void 0 !== uu ? uu : [null !== (Eu = navigator.language) && void 0 !== Eu ? Eu : "none"], "en-Gb"]
    }

    function pu(uu, Eu, ju, pu, wu) {
      const Ju = (0, su.l)(Eu) ? (0, su.q)(Eu) : null,
        du = uu.isLoggedIn() && void 0 !== (0, Uu.c)(Zu.q, Nu.siteUsed) ? (0, Mu.h)() : null,
        au = {
          cookies: (0, Ou.getAllCookiesForGameNameWithVariation)(Eu),
          isMobile: (0, cu.isMobile)(),
          isUsingCustomGameTexturePack: null !== Ju && wu(Ju),
          generalCookies: {
            joinDiscord: !!Du.k.getItem("DiscordPressed"),
            newGo: bu.e,
            ...uu.getMetricsCookies(),
            trafficCode: pu,
            compliance: cu.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, cu.getBrowserName)(),
            version: (0, cu.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, cu.getPlatformType)(),
            deviceType: (0, Yu.c)()
          },
          isLoggedIn: uu.isLoggedIn(),
          lobbyName: ju,
          languages: Gu(),
          version: Xu.b,
          siteUsed: Nu.siteUsed,
          subsiteUsed: Nu.subsiteUsed,
          playSessionId: (0, hu.f)(Eu),
          visitSessionId: (0, gu.f)(),
          clientReason: fu.r.reason,
          budgetBasis: (0, eu.h)(),
          ...null !== Cu.s && {
            diagClaim: Cu.s.claimId
          },
          ...null !== du && {
            webGpuLoss: du
          }
        };
      return null !== Ju && (0, lu.Ic)(Ju) ? (au.lobbyName = (0, su.h)(Ju, (0, su.m)(Eu), ju), {
        roomName: `classic_${qu.f}`,
        joinOptions: au
      }) : {
        roomName: Eu,
        joinOptions: au
      }
    }
  },
  39384: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Nu,
      e: () => cu
    });
    const su = "ue:",
      Uu = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      Zu = "[A-Za-z0-9]{1,24}",
      Xu = 15,
      lu = new RegExp(`^${Zu}$`);
    new RegExp(`^${su}(${[...Uu,"other"].join("|")}):(?:n|k(${Zu})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function qu(uu, Eu, ju, Zu, qu) {
      const fu = "string" === typeof uu && Uu.includes(uu) ? uu : "other";
      let Cu = "n";
      return "string" === typeof Eu ? Cu = lu.test(Eu) ? `k${Eu}` : "n" : "number" === typeof ju && Number.isInteger(ju) && ju >= 0 && ju <= Xu && (Cu = `b${ju}`), `${su}${fu}:${Cu}:${Zu?1:0}${qu?1:0}`
    }
    var fu = ju(1710),
      Cu = ju(1787);
    let bu = null;

    function cu(uu) {
      const Eu = uu instanceof Element && uu !== document.body && uu !== document.documentElement && !(0, fu.q)(uu) && !uu.closest("#root");
      return {
        editable: (0, Cu.e)(uu),
        outsideView: Eu
      }
    }

    function Nu(uu) {
      return bu ??= function(uu) {
        try {
          const {
            editable: Eu,
            outsideView: ju
          } = cu(uu.target), su = uu;
          return qu(uu.type, su.code, su.button, Eu, ju)
        } catch {
          return qu(null, null, null, !1, !1)
        }
      }(uu), bu
    }
  },
  39375: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      f: () => Zu,
      i: () => lu,
      k: () => Cu,
      m: () => qu,
      n: () => Xu
    });
    var su = ju(202);
    const Uu = 3e3,
      Zu = 15e3;

    function Xu(uu) {
      const Eu = uu.endsWith(su.l);
      return {
        text: (Eu ? uu.slice(0, -su.l.length) : uu) || null,
        dropsCache: Eu
      }
    }
    const lu = "Either your internet isn't working or this is a bug.";

    function qu(uu, Eu) {
      const ju = Cu(uu);
      return null !== ju.name && "" === su.b[ju.name].text && null !== Eu ? Eu : ju.reason
    }
    const fu = "You were removed from the game.";

    function Cu(uu) {
      var Eu;
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Uu = null !== (Eu = Object.keys(su.b).find((Eu => su.b[Eu].code === uu))) && void 0 !== Eu ? Eu : null;
      if (null === Uu) return {
        code: uu,
        name: Uu,
        reason: null !== ju && void 0 !== ju ? ju : `${lu}\nCode: ${uu}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Zu,
        canReconnect: Xu = !1
      } = su.b[Uu], qu = uu === su.b.outdatedVersion.code || uu === su.b.loadRecaptchaError.code;
      return {
        code: uu,
        name: Uu,
        reason: "" !== Zu ? Zu : null !== ju && void 0 !== ju ? ju : uu === su.b.gameOrPluginKick.code ? fu : `Code: ${uu}`,
        canReconnect: Xu,
        automaticallyReconnect: uu === su.b.customGameUpdated.code || uu === su.b.duplicateLobbyNameError.code,
        requiresRefresh: qu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);