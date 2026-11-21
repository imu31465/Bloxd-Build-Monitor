export const id = 61;
export const ids = [61];
export const modules = {
  39168: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      h: () => qQ
    });
    const LQ = "The world isn't loaded, so no blocks can be seen.",
      qQ = "The world isn't loaded, so nothing in it can be seen."
  },
  38640: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ,
      f: () => tQ,
      g: () => xQ
    });
    var LQ = wQ(2753);
    const qQ = 0,
      oQ = 2,
      DQ = 3,
      kQ = 4;
    class vQ {
      constructor(QQ, FQ) {
        this.width = QQ, this.MH = FQ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(QQ * FQ)
      }
      push(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wQ = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let LQ = 0; LQ < this.width; LQ++) wQ[LQ] = QQ[FQ + LQ];
        return this.next = (this.next + 1) % this.MH, this.size = Math.min(this.size + 1, this.MH), wQ
      }
      lines() {
        const QQ = [],
          FQ = (this.next - this.size + this.MH) % this.MH;
        for (let wQ = 0; wQ < this.size; wQ++) {
          const LQ = (FQ + wQ) % this.MH * this.width;
          QQ.push(Array.from(this.data.subarray(LQ, LQ + this.width)).join(","))
        }
        return QQ
      }
    }

    function mQ(QQ) {
      return Number.isFinite(QQ) ? String(Math.round(10 * QQ) / 10) : String(QQ)
    }

    function uQ(QQ) {
      return Number.isFinite(QQ) ? QQ.toFixed(1) : String(QQ)
    }
    class HQ {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.vJ = 0, this.pastLimit = 0, this.lockSkips = 0, this.Ft = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class bQ {
      constructor() {
        var QQ = this;
        this.tally = new HQ, this.records = new vQ(10, 3600), this.events = new vQ(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [LQ, vQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ] = QQ.records.push(FQ, wQ), GQ = QQ.tally;
          switch (GQ.frames++, AQ) {
            case qQ:
              return void GQ.idle++;
            case kQ:
              return void GQ.Ft++;
            case DQ:
              return GQ.lockSkips++, void(0 === HQ && 0 === bQ || QQ.outlier(`lock skip dropped raw (${mQ(HQ)}, ${mQ(bQ)}) at ${uQ(LQ)} ms`))
          }
          GQ.looked++, Number.isFinite(vQ) && (GQ.dtMin = Math.min(GQ.dtMin, vQ), GQ.dtMax = Math.max(GQ.dtMax, vQ), GQ.dtSum += vQ, vQ > 0 && (GQ.peakRate = Math.max(GQ.peakRate, Math.hypot(YQ, xQ) / vQ))), GQ.raw[0] += HQ, GQ.raw[1] += bQ, GQ.turned[0] += YQ, GQ.turned[1] += xQ;
          const pQ = Math.abs(HQ) > MQ || Math.abs(bQ) > MQ,
            cQ = `raw (${mQ(HQ)}, ${mQ(bQ)}) over ${uQ(vQ)} ms, limit ${mQ(MQ)}, filter v (${tQ.toFixed(3)}, ${eQ.toFixed(3)}) px/ms, at ${uQ(LQ)} ms`;
          AQ === oQ ? (GQ.vJ++, QQ.outlier(`spike put right: ${cQ} -> turned (${mQ(YQ)}, ${mQ(xQ)})`)) : pQ ? (GQ.pastLimit++, QQ.outlier(`kept past limit: ${cQ}`)) : vQ > 50 && (GQ.longFrames++, QQ.outlier(`long frame: ${cQ}, turned in full`))
        }, this.onMouseMove = QQ => {
          const FQ = this.tally,
            {
              movementX: wQ,
              movementY: LQ
            } = QQ;
          FQ.events++;
          const qQ = Math.max(Math.abs(wQ), Math.abs(LQ));
          FQ.eventMax = Math.max(FQ.eventMax, qQ);
          const oQ = null !== document.pointerLockElement,
            DQ = this.event;
          DQ[0] = QQ.timeStamp, DQ[1] = wQ, DQ[2] = LQ, DQ[3] = oQ ? 1 : 0, this.events.push(DQ), qQ >= 200 && (FQ.bigEvents++, this.eventOutlier(`big mousemove (${wQ}, ${LQ}) at ${uQ(QQ.timeStamp)} ms, lock ${oQ?"ym":"free"}`))
        }, this.onLockChange = () => {
          const QQ = document.pointerLockElement;
          (0, LQ.m)("look", `pointer lock ${QQ?`gained (${QQ.tagName.toLowerCase()})`:"lost"} at ${uQ(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, LQ.m)("look", `pointer lock request failed at ${uQ(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, LQ.m)("look", `page ${document.visibilityState} at ${uQ(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const QQ = this.tally;
          if (this.tally = new HQ, 0 === QQ.events && 0 === QQ.raw[0] && 0 === QQ.raw[1] && 0 === QQ.lockSkips && 0 === QQ.vJ && 0 === QQ.dropped) return;
          const FQ = QQ.looked > 0 ? QQ.dtSum / QQ.looked : NaN,
            wQ = [`${QQ.frames} frames (${QQ.looked} looked, ${QQ.idle} idle${"wasm"===this.client?`, ${QQ.Ft} carried`:""})`, `dt avg ${uQ(FQ)} min ${uQ(QQ.dtMin)} max ${uQ(QQ.dtMax)}, ${QQ.longFrames} long`, `${QQ.events} mousemoves (max ${mQ(QQ.eventMax)} px, ${QQ.bigEvents} big)`, `raw (${mQ(QQ.raw[0])}, ${mQ(QQ.raw[1])}) turned (${mQ(QQ.turned[0])}, ${mQ(QQ.turned[1])})`, `peak ${QQ.peakRate.toFixed(2)} px/ms`, `put right ${QQ.vJ}, past limit ${QQ.pastLimit}, lock skips ${QQ.lockSkips}`, "lock " + (document.pointerLockElement ? "ym" : "free")];
          QQ.dropped > 0 && wQ.push(`${QQ.dropped} doubled spike copies dropped`), QQ.lost > 0 && wQ.push(`${QQ.lost} records lost`), QQ.suppressed > 0 && wQ.push(`${QQ.suppressed} outlier lines not shown`), (0, LQ.m)("look", `1s: ${wQ.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(QQ, FQ) {
        this.client = QQ, this.take = FQ;
        const {
          screen: wQ
        } = window;
        (0, LQ.m)("look", `start: ${QQ} client, dpr ${window.devicePixelRatio}, screen ${wQ.width}x${wQ.height}, pointer lock ${document.pointerLockElement?"ym":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, LQ.i)("look", this.dump))
      }
      outlier(QQ) {
        const FQ = this.tally;
        FQ.outliers >= 20 ? FQ.suppressed++ : (FQ.outliers++, (0, LQ.m)("look", QQ))
      }
      eventOutlier(QQ) {
        const FQ = this.tally;
        FQ.eventLines >= 10 ? FQ.suppressed++ : (FQ.eventLines++, (0, LQ.m)("look", QQ))
      }
      takeRecords() {
        var QQ;
        const FQ = null === (QQ = this.take) || void 0 === QQ ? void 0 : QQ.call(this);
        if (FQ && FQ.length >= 2) {
          this.tally.lost += FQ[0], this.tally.dropped += FQ[1];
          for (let QQ = 2; QQ + 10 <= FQ.length; QQ += 10) this.record(FQ, QQ)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let YQ = null;

    function xQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return YQ ??= new bQ, YQ.start(QQ, FQ), YQ.record
    }

    function AQ() {
      var QQ;
      null === (QQ = YQ) || void 0 === QQ || QQ.endTake()
    }

    function tQ() {
      var QQ;
      null === (QQ = YQ) || void 0 === QQ || QQ.droppedCopy()
    }
  },
  8986: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    const LQ = new Set(["chunkBorders"])
  },
  9142: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      d: () => qQ,
      g: () => uQ
    });
    var LQ = wQ(1560);

    function qQ(QQ) {
      var FQ;
      return {
        ...DQ.store,
        yaw: DQ.store.yaw + (null !== (FQ = LQ.e[QQ].previewYaw) && void 0 !== FQ ? FQ : 0)
      }
    }
    const oQ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      DQ = {
        player: oQ,
        store: {
          ...oQ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kQ(QQ, FQ) {
      QQ instanceof Promise ? QQ.then(FQ).catch((QQ => {
        console.error("Couldn't open the preview", QQ)
      })) : FQ(QQ)
    }
    class vQ {
      constructor(QQ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
        }))
      }
      show(QQ) {
        var FQ;
        this.view = QQ, null === (FQ = this.opened) || void 0 === FQ || FQ.show(QQ)
      }
      resize(QQ, FQ) {
        var wQ;
        this.size = {
          width: QQ,
          height: FQ
        }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    class mQ {
      constructor(QQ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), kQ(QQ, (QQ => {
          this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.isReady()) && void 0 !== QQ && QQ
      }
      setCosmetic(QQ, FQ) {
        var wQ;
        null === (wQ = this.opened) || void 0 === wQ || wQ.setCosmetic(QQ, FQ)
      }
      playEmote(QQ) {
        var FQ;
        null === (FQ = this.opened) || void 0 === FQ || FQ.playEmote(QQ)
      }
      setOrbit(QQ) {
        var FQ;
        null === (FQ = this.opened) || void 0 === FQ || FQ.setOrbit(QQ)
      }
      resetCamera() {
        var QQ;
        null === (QQ = this.opened) || void 0 === QQ || QQ.resetCamera()
      }
      async untilDrawn(QQ) {
        var FQ;
        await this.ready, await (null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.untilDrawn(QQ))
      }
      resize(QQ, FQ) {
        var wQ;
        this.size = {
          width: QQ,
          height: FQ
        }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
      }
    }
    const uQ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(QQ) {
        this.host = QQ
      }
      setDefaultHost(QQ) {
        this.makeDefault = QQ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(QQ) {
        return new vQ(this.current().openMob(QQ))
      }
      openPet(QQ) {
        return new vQ(this.current().openPet(QQ))
      }
      openMobLineup(QQ) {
        return new vQ(this.current().openMobLineup(QQ))
      }
      openCharacter(QQ, FQ) {
        return new mQ(this.current().openCharacter(QQ, FQ))
      }
    }
  },
  38783: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => HQ,
      e: () => bQ
    });
    var LQ = wQ(160),
      qQ = wQ(190),
      oQ = wQ(1483),
      DQ = wQ(2860),
      kQ = wQ(1489),
      vQ = wQ(36110),
      mQ = wQ(649),
      uQ = wQ(38741);

    function HQ(QQ) {
      (0, DQ.f)("matchmake_failed", QQ, LQ.o[LQ.o.SHADER_PACK])
    }
    async function bQ(QQ, FQ) {
      var wQ;
      const LQ = null === (wQ = await uQ.shaderPackPage.preload()) || void 0 === wQ ? void 0 : wQ.listing,
        DQ = (0, vQ.e)();
      LQ && null !== DQ && await kQ.b.reportShaderPackSession(QQ, {
        packId: LQ.packId,
        sourceHash: LQ.sourceHash,
        game: (0, oQ.e)(FQ, qQ.t, "other"),
        playSessionId: DQ,
        visitSessionId: (0, mQ.c)()
      })
    }
  },
  38590: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ
    });
    var LQ = wQ(22),
      qQ = wQ(1302),
      oQ = wQ(3337);
    const DQ = "Reconnecting";
    class kQ {
      constructor(QQ) {
        this.hooks = QQ, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = QQ => {
          QQ.persisted || this.leave()
        }, this.controller = new oQ.e((FQ => QQ.reconnect(FQ)), {
          isSessionLive: () => !this.ended && QQ.isLive(),
          onPhaseChanged: QQ => {
            this.onPhaseChanged(QQ)
          },
          onReconnected: FQ => {
            QQ.onReconnected(FQ)
          },
          onGaveUp: FQ => {
            !this.ended && QQ.isLive() && QQ.onGaveUp(this.sessionBased, FQ)
          }
        })
      }
      onInitialInfo(QQ, FQ) {
        this.graceMs = QQ, this.sessionBased = FQ
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
          FQ = this.controller.heldToken;
        this.end(), QQ && "" !== FQ && this.hooks.releaseSeat(FQ)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(QQ) {
        const FQ = "frozen" === QQ || "resuming" === QQ;
        FQ !== this.stopped && (this.stopped = FQ, this.hooks.freeze(FQ));
        const wQ = "frozen" === QQ || "resuming" === QQ && this.frozen;
        wQ && !this.frozen ? (0, qQ.n)(DQ) : !wQ && this.frozen && (0, qQ.l)(DQ), this.frozen = wQ, this.setListening("connected" !== QQ), LQ.l.GA(oQ.o, wQ ? "frozen" : QQ)
      }
      setListening(QQ) {
        QQ !== this.listening && (this.listening = QQ, QQ ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38593: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    class LQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = QQ, this.now = FQ, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const QQ = this.now(),
            FQ = QQ - this.lastCheckAt <= 2e3;
          this.lastCheckAt = QQ;
          const wQ = "visible" === document.visibilityState;
          !wQ || FQ && this.wasVisible || (this.resumedAt = QQ), this.wasVisible = wQ, wQ && QQ - this.lastHeardAt > 12e3 && QQ - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = FQ(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  9022: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(1087);

    function qQ() {
      var QQ, FQ;
      return null !== (QQ = null === (FQ = screen.orientation) || void 0 === FQ ? void 0 : FQ.type) && void 0 !== QQ ? QQ : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const oQ = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && qQ() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = qQ(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, LQ.pA)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const QQ of this.resizers) QQ()
          }
        }), 1e3)
      }
      heldSizer(QQ) {
        let FQ = !1;
        return () => {
          if (FQ && this.isHeld()) return null;
          const wQ = QQ();
          return FQ ||= null !== wQ, wQ
        }
      }
      onRelease(QQ) {
        return this.resizers.add(QQ), () => {
          this.resizers.delete(QQ)
        }
      }
    }
  },
  38771: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    let LQ = !1;
    async function qQ(QQ, FQ) {
      if (!LQ) {
        LQ = !0;
        try {
          const [{
            reloadBloxd: LQ
          }, {
            NotificationProvider: qQ
          }] = await Promise.all([Promise.resolve().then((() => wQ(1725))), Promise.resolve().then((() => wQ(1362)))]);
          if (!QQ || !0 === await qQ.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void LQ(FQ)
        } catch (qQ) {
          console.error("Leaving the replay failed", qQ)
        }
        LQ = !1
      }
    }
  },
  38603: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ,
      g: () => uQ
    });
    var LQ = wQ(1715),
      qQ = wQ(201),
      oQ = wQ(1694),
      DQ = wQ(1766),
      kQ = wQ(1213),
      vQ = wQ(1147);
    async function mQ(QQ, FQ) {
      return function(QQ) {
        return "object" === typeof QQ && null !== QQ && QQ.code === qQ.d.VpnIp.code
      }(FQ) && function(QQ) {
        return oQ.d.supports("appCheck") && QQ.isLoggedIn() && !QQ.hasTriedAppAttestation()
      }(QQ) && await async function(QQ) {
        try {
          const {
            token: FQ
          } = await (0, DQ.d)(), {
            "3PSIDMCPP": wQ
          } = await (0, vQ.postJsonWithMetricsCookiesAndJsonResponse)(`${kQ.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: FQ
          }, {
            retries: 0
          }, QQ.getMetricsCookies());
          return QQ.setAppAttestedAuthJwt(wQ), !0
        } catch (FQ) {
          return FQ instanceof LQ.d && "failed" === FQ.code ? (console.warn("The app couldn't get an App Check token:", FQ), QQ.markAppAttestationTried()) : console.error("Failed to attest the app:", FQ), !1
        }
      }(QQ)
    }
    async function uQ(QQ, FQ) {
      try {
        return await FQ()
      } catch (wQ) {
        if (!await mQ(QQ, wQ)) throw wQ
      }
      return FQ()
    }
  },
  40455: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => vQ
    });
    var LQ = wQ(1739);
    const qQ = 33177600,
      oQ = 3e4;
    let DQ = !1;

    function kQ(QQ, FQ, wQ) {
      if (!QQ.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (DQ) return Promise.reject(new Error("A screenshot is already being taken"));
      DQ = !0;
      const LQ = function(QQ, FQ, wQ) {
        const LQ = Math.max(1, QQ),
          oQ = Math.max(1, FQ),
          DQ = Math.min(1, wQ / Math.max(LQ, oQ), Math.sqrt(qQ / (LQ * oQ)));
        return {
          width: Math.max(1, Math.floor(LQ * DQ)),
          height: Math.max(1, Math.floor(oQ * DQ))
        }
      }(FQ, wQ, QQ.maxTextureSize);
      return QQ.resize(LQ.width, LQ.height), new Promise(((FQ, wQ) => {
        let LQ, qQ = 2,
          kQ = null;
        const vQ = () => {
          var FQ;
          DQ = !1, null === (FQ = kQ) || void 0 === FQ || FQ(), clearTimeout(LQ), QQ.restoreSize()
        };
        LQ = setTimeout((() => {
          vQ(), wQ(new Error("No frame was drawn to capture"))
        }), oQ), kQ = QQ.onFrameDrawn((() => {
          if (qQ--, qQ > 0) return;
          const {
            canvas: LQ
          } = QQ, oQ = {
            width: LQ.width,
            height: LQ.height
          };
          try {
            LQ.toBlob((QQ => {
              QQ ? FQ({
                blob: QQ,
                ...oQ
              }) : wQ(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (DQ) {
            wQ(DQ)
          } finally {
            vQ()
          }
        }))
      }))
    }
    async function vQ(QQ, FQ, wQ) {
      try {
        const qQ = await kQ(QQ, FQ, wQ);
        (0, LQ.e)(qQ.blob, `bloxd-screenshot-${qQ.width}x${qQ.height}-${Date.now()}.png`)
      } catch (qQ) {
        console.error("Error taking screenshot:", qQ)
      }
    }
  },
  39175: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => mQ
    });
    var LQ = wQ(1694),
      qQ = wQ(96),
      oQ = wQ(134),
      DQ = wQ(36086),
      kQ = wQ(641),
      vQ = wQ(1723);

    function mQ(QQ) {
      var FQ, wQ, vQ, mQ;
      const HQ = (0, DQ.b)();
      return {
        game: QQ,
        os: (0, qQ.getOperatingSystem)(),
        decodedAudioMiB: null === HQ ? null : (0, kQ.G)(HQ.bytes),
        songsDecoded: null !== (FQ = null === HQ || void 0 === HQ ? void 0 : HQ.songsDecoded) && void 0 !== FQ ? FQ : null,
        sheetsDecoded: null !== (wQ = null === HQ || void 0 === HQ ? void 0 : HQ.sheetsDecoded) && void 0 !== wQ ? wQ : null,
        siteUsed: oQ.r,
        appVersion: (null === (vQ = LQ.d.appHello) || void 0 === vQ ? void 0 : vQ.appVersion) || null,
        appBuild: (null === (mQ = LQ.d.appHello) || void 0 === mQ ? void 0 : mQ.build) || null,
        msSinceVideoAd: uQ()
      }
    }

    function uQ() {
      if ((0, vQ.e)()) return 0;
      const QQ = (0, vQ.d)();
      return null === QQ ? null : Math.round(performance.now() - QQ.endedAt)
    }(0, vQ.m)(kQ.C)
  },
  36086: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      c: () => qQ
    });
    let LQ = null;

    function qQ(QQ) {
      LQ = QQ
    }

    function oQ() {
      return null === LQ ? null : LQ()
    }
  },
  38595: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ,
      e: () => uQ
    });
    var LQ = wQ(201),
      qQ = wQ(1799),
      oQ = wQ(1804),
      DQ = wQ(8667);
    const kQ = [250, 500, 1e3, 2e3, 1250],
      vQ = 406;

    function mQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return !1;
      const {
        code: FQ,
        message: wQ
      } = QQ, qQ = LQ.d.duplicateLobbyNameError;
      return (FQ === qQ.code || FQ === vQ) && (wQ === qQ.text || wQ === qQ.text + LQ.l)
    }
    async function uQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.e;
      for (let qQ = 0;; qQ++) {
        let DQ;
        (0, oQ.n)(FQ);
        try {
          return await QQ()
        } catch (LQ) {
          if (DQ = kQ[qQ], void 0 === DQ || !mQ(LQ)) throw LQ
        }
        await wQ(DQ, FQ)
      }
    }
    const HQ = new Set([LQ.d.duplicateLobbyNameError.code, LQ.d.lobbyCantBeCreated.code, LQ.d.roomDisposedEarlyError.code, LQ.d.roomDisposedLateError.code, LQ.d.serverRoomLimitReached.code]);

    function bQ(QQ) {
      if (mQ(QQ)) return !0;
      const FQ = (0, DQ.i)(QQ);
      return "number" === typeof FQ && HQ.has(FQ)
    }
  },
  8667: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      i: () => DQ,
      l: () => kQ,
      m: () => mQ,
      q: () => vQ
    });
    var LQ = wQ(201),
      qQ = wQ(4475);

    function oQ(QQ) {
      return DQ(QQ) === LQ.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function DQ(QQ) {
      return "object" === typeof QQ && null !== QQ ? QQ.code : void 0
    }

    function kQ(QQ) {
      var FQ;
      return null !== (FQ = Object.keys(qQ.c).find((FQ => qQ.c[FQ] === QQ))) && void 0 !== FQ ? FQ : null
    }

    function vQ(QQ) {
      return "notWhitelisted" === QQ ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const mQ = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38688: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(307),
      qQ = wQ(134),
      oQ = wQ(27);

    function DQ() {
      oQ.i.setItem(LQ.Gb, oQ.i.getItem(LQ.Gb) + 1), (0, qQ.l)() && oQ.i.setItem(LQ.Eb, oQ.i.getItem(LQ.Eb) + 1)
    }
  },
  36102: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => MQ,
      f: () => GQ
    });
    var LQ = wQ(1038),
      qQ = wQ(626),
      oQ = wQ(317),
      DQ = wQ(1044),
      kQ = wQ(634),
      vQ = wQ(656),
      mQ = wQ(4367),
      uQ = wQ(96),
      HQ = wQ(134),
      bQ = wQ(1725),
      YQ = wQ(114),
      xQ = wQ(36110),
      AQ = wQ(27),
      tQ = wQ(649),
      eQ = wQ(36117);

    function MQ() {
      var QQ, FQ;
      return [...null !== (QQ = navigator.languages) && void 0 !== QQ ? QQ : [null !== (FQ = navigator.language) && void 0 !== FQ ? FQ : "none"], "EN-gb"]
    }

    function GQ(QQ, FQ, wQ, GQ, pQ) {
      const cQ = (0, LQ.f)(FQ) ? (0, LQ.l)(FQ) : null,
        CQ = {
          cookies: (0, bQ.getAllCookiesForGameNameWithVariation)(FQ),
          isMobile: (0, uQ.isMobile)(),
          isUsingCustomGameTexturePack: null !== cQ && pQ(cQ),
          generalCookies: {
            joinDiscord: !!AQ.i.getItem("DiscordPressed"),
            newGo: mQ.e,
            ...QQ.getMetricsCookies(),
            trafficCode: GQ,
            compliance: uQ.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, uQ.getBrowserName)(),
            version: (0, uQ.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, uQ.getPlatformType)(),
            deviceType: (0, YQ.e)()
          },
          isLoggedIn: QQ.isLoggedIn(),
          lobbyName: wQ,
          languages: MQ(),
          version: qQ.b,
          siteUsed: HQ.r,
          subsiteUsed: HQ.w,
          playSessionId: (0, xQ.h)(FQ),
          visitSessionId: (0, tQ.c)(),
          clientReason: kQ.j.reason,
          budgetBasis: (0, eQ.f)(),
          ...null !== vQ.n && {
            diagClaim: vQ.n.claimId
          }
        };
      return null !== cQ && (0, oQ.Hc)(cQ) ? (CQ.lobbyName = (0, LQ.d)(cQ, (0, LQ.i)(FQ), wQ), {
        roomName: `classic_${DQ.h}`,
        joinOptions: CQ
      }) : {
        roomName: FQ,
        joinOptions: CQ
      }
    }
  },
  40082: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(39168);

    function qQ(QQ) {
      return {
        current: () => QQ,
        watch: () => () => {}
      }
    }

    function oQ() {}
    const DQ = Object.freeze([0, 0, 0]),
      kQ = {
        states: {
          health: qQ({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: qQ({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: qQ({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: qQ({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: qQ({}),
          creativeVisibility: qQ({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: qQ(null),
          heldItemAim: qQ({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: qQ(!1),
          gliderBoostFuel: qQ(0),
          flight: qQ({
            canFly: !1,
            flying: !1
          }),
          crafting: qQ({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: qQ({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: qQ({}),
          fullInventory: qQ(!1),
          crosshairTarget: qQ({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: qQ(!0),
          freeCamera: qQ({
            allowed: !1,
            movesFly: !1
          }),
          replay: qQ(null),
          replayEdits: qQ(null),
          replayRecorder: qQ({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: qQ(!1)
        },
        events: {
          hotbarSlotRequested: {
            watch: () => () => {}
          },
          hotbarScrolled: {
            watch: () => () => {}
          },
          hotbarDropRequested: {
            watch: () => () => {}
          },
          inventoryDropRequested: {
            watch: () => () => {}
          },
          numberKeyPressed: {
            watch: () => () => {}
          },
          chestToggled: {
            watch: () => () => {}
          },
          chestRefreshed: {
            watch: () => () => {}
          },
          inventorySynced: {
            watch: () => () => {}
          },
          enchantingTableOpened: {
            watch: () => () => {}
          },
          cosmeticsUpdated: {
            watch: () => () => {}
          },
          shotDamageToShow: {
            watch: () => () => {}
          },
          boardEditRequested: {
            watch: () => () => {}
          },
          kill: {
            watch: () => () => {}
          },
          chatReceived: {
            watch: () => () => {}
          },
          ironChestOpenRequested: {
            watch: () => () => {}
          },
          localEffectUpdated: {
            watch: () => () => {}
          },
          localPlayerAliveSet: {
            watch: () => () => {}
          },
          replayUiActionRequested: {
            watch: () => () => {}
          },
          replayViewerRequested: {
            watch: () => () => {}
          }
        },
        commands: {
          selectHotbarSlot: oQ,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: oQ,
          setInventoryOpen: oQ,
          changeIronChestPasskey: oQ,
          dragReplayCamera: oQ,
          applyTemporaryThirdPerson: oQ,
          holdEmoteWheel: oQ,
          recordFlyingMiddleText: oQ,
          focusCrafting: oQ,
          craftRecipe: () => ({
            Sm: 0,
            wm: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: oQ,
          setShopOpen: oQ,
          buyShopItem: oQ,
          lobbyManage: oQ,
          sendChatMessage: oQ,
          ignorePlayer: oQ,
          reportPlayer: oQ,
          reportWorldCodeChat: oQ,
          requestDiscordReportKey: oQ,
          reportLobbyOrGame: oQ,
          playEmote: oQ,
          updateMyCosmetic: oQ,
          writeOnBoard: oQ,
          writeBook: oQ,
          writeNameTag: oQ,
          setCustomLobbyBlock: oQ,
          openIronChest: oQ,
          sendCodeCollab: oQ,
          clickCodeBlock: oQ,
          bindCustomButtonKeys: oQ,
          pressCustomButton: oQ,
          moveReplayFreecam: oQ,
          holdReplayFreecamVertical: oQ,
          respawn: oQ,
          wakeUp: oQ,
          requestLeaderboard: oQ,
          completeTask: oQ,
          setServerCookie: oQ,
          answerUiRequest: oQ,
          chooseRewardedAd: oQ,
          setCameraZoom: oQ,
          setFreeCameraMovesFly: oQ,
          setBlockHighlight: oQ,
          setCrosshairInteractPrompt: oQ,
          setLookSensitivity: oQ,
          replayAction: oQ,
          setReplayPlaying: oQ,
          seekReplay: oQ,
          setReplayCameraMode: oQ,
          syncReplayCameraMode: oQ,
          setReplayCameraKeyframe: oQ,
          moveReplayCameraKeyframe: oQ,
          deleteReplayCameraKeyframes: oQ,
          setReplayPlaybackMark: oQ,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: oQ,
          exportReplayVideo: oQ,
          toggleRecording: oQ,
          saveClip: oQ,
          setRecorderPrefs: oQ,
          setReplayViewerOpen: oQ
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => LQ.d,
          worldCodeAiGameState: () => LQ.h
        },
        lookups: {
          localPos: () => DQ,
          targetedBlockPos: () => null,
          blockAtViewPoint: () => null,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          freeCameraPos: () => null,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  36117: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => CQ,
      f: () => cQ,
      g: () => pQ
    });
    var LQ = wQ(201),
      qQ = wQ(96),
      oQ = wQ(2836),
      DQ = wQ(4253),
      kQ = wQ(641),
      vQ = wQ(36119);
    const mQ = 1048576,
      uQ = 1024 * mQ,
      HQ = 400 * mQ,
      bQ = 147456,
      YQ = .5,
      xQ = 1.5 * uQ,
      AQ = 768 * mQ;

    function tQ(QQ) {
      return HQ + QQ * bQ
    }

    function eQ(QQ, FQ, wQ) {
      var qQ, DQ;
      let {
        footprintBytes: kQ,
        basis: mQ,
        namesLimit: eQ
      } = function(QQ) {
        const {
          os: FQ,
          deviceMemory: wQ
        } = QQ;
        if ("ios" === FQ) switch ((0, oQ.e)(QQ)) {
          case "ipad_m":
            return {
              footprintBytes: tQ(vQ.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: AQ, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: xQ, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: AQ, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof wQ && Number.isFinite(wQ) && wQ > 0 ? {
          footprintBytes: wQ * uQ * YQ,
          basis: `memory-${wQ}`,
          namesLimit: !0
        } : "android" === FQ ? {
          footprintBytes: AQ,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: tQ(vQ.f),
          basis: "unreported",
          namesLimit: !1
        }
      }(QQ);
      if (wQ) {
        const QQ = Math.min(kQ, tQ(vQ.d));
        kQ = HQ + Math.max(0, QQ - HQ) / 2, mQ += "+killed", eQ = !0
      }
      null !== FQ && tQ(FQ) < kQ && (kQ = tQ(FQ), mQ += "+learned", eQ = !0);
      const MQ = function(QQ) {
          const FQ = Math.floor((QQ - HQ) / bQ);
          return Math.min(vQ.d, Math.max(vQ.e, FQ))
        }(kQ),
        GQ = (0, vQ.l)(MQ);
      return {
        footprintBytes: kQ,
        shedFootprintBytes: eQ ? Math.max(kQ, tQ(MQ)) : null,
        chunkCap: MQ,
        maxHorizDistance: null !== (qQ = null === GQ || void 0 === GQ ? void 0 : GQ.horizontal) && void 0 !== qQ ? qQ : LQ.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (DQ = null === GQ || void 0 === GQ ? void 0 : GQ.vertical) && void 0 !== DQ ? DQ : LQ.e.maxChunkVertAddDistance,
        basis: mQ
      }
    }
    let MQ = null;

    function GQ() {
      return eQ({
        os: (0, qQ.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, oQ.h)()
      }, (0, DQ.d)(), (0, kQ.B)("wasm").length > 0)
    }

    function pQ() {
      return MQ ??= GQ(), MQ
    }

    function cQ() {
      var QQ;
      return (null !== (QQ = MQ) && void 0 !== QQ ? QQ : GQ()).basis
    }

    function CQ(QQ, FQ) {
      return QQ.setChunkCap(FQ.chunkCap)
    }
  },
  40447: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      e: () => oQ
    });
    var LQ = wQ(3047),
      qQ = wQ(1038);

    function oQ(QQ, FQ) {
      return null !== QQ.gameSource && (0, LQ.p)(FQ, QQ.gameSource)
    }

    function DQ(QQ, FQ) {
      if (null === QQ.gameSource || "" === QQ.gameSource || null === FQ) return !0;
      const wQ = (0, qQ.f)(FQ) ? (0, qQ.l)(FQ) : null;
      return null !== wQ && oQ(QQ, wQ)
    }
  },
  40428: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ
    });
    var LQ = wQ(609),
      qQ = wQ(40430),
      oQ = wQ(40399);
    async function DQ(QQ) {
      const FQ = await (0, qQ.d)({
        Helmet: wQ(37502),
        Chestplate: wQ(37510),
        Gauntlets: wQ(37527),
        Leggings: wQ(37514),
        Boots: wQ(37520)
      } [LQ.c[QQ]]);
      try {
        return (0, oQ.s)(FQ)
      } finally {
        FQ.close()
      }
    }
    const kQ = new class {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DQ,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.i;
        this.decode = QQ, this.register = FQ, this.decoded = new Map
      }
      warm() {
        for (let QQ = 0; QQ < LQ.c.length; QQ++) this.part(QQ).catch((FQ => {
          console.warn(`The grayscale armour ${LQ.c[QQ]} image didn't decode ahead of use`, FQ)
        }))
      }
      async load(QQ, FQ) {
        const {
          width: wQ,
          height: oQ,
          pixels: DQ
        } = await this.part(QQ), kQ = new ImageData(function(QQ, FQ) {
          const wQ = new Uint8ClampedArray(QQ.length);
          for (let LQ = 0; LQ < QQ.length; LQ += 4) wQ[LQ] = Math.round(QQ[LQ] * FQ[0] / 255), wQ[LQ + 1] = Math.round(QQ[LQ + 1] * FQ[1] / 255), wQ[LQ + 2] = Math.round(QQ[LQ + 2] * FQ[2] / 255), wQ[LQ + 3] = QQ[LQ + 3];
          return wQ
        }(DQ, function(QQ) {
          return [QQ >>> 16 & 255, QQ >>> 8 & 255, 255 & QQ]
        }(FQ)), wQ, oQ);
        let vQ;
        try {
          vQ = await createImageBitmap(kQ, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (mQ) {
          throw new qQ.b("decode", `grayscale armour ${LQ.c[QQ]}`, {
            cause: mQ
          })
        }
        return {
          id: this.register(vQ),
          width: wQ,
          height: oQ
        }
      }
      part(QQ) {
        const FQ = this.decoded.get(QQ);
        if (void 0 !== FQ) return FQ;
        const wQ = this.decode(QQ).catch((FQ => {
          throw this.decoded.delete(QQ), FQ instanceof qQ.b ? FQ : new qQ.b("decode", `grayscale armour ${LQ.c[QQ]}`, {
            cause: FQ
          })
        }));
        return this.decoded.set(QQ, wQ), wQ
      }
    }
  },
  40426: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      c: () => tQ,
      g: () => uQ,
      k: () => HQ,
      o: () => AQ
    });
    var LQ = wQ(40385),
      qQ = wQ(40428),
      oQ = wQ(40430);
    const DQ = 396,
      kQ = 1,
      vQ = 2,
      mQ = 3,
      uQ = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8,
        GreyscaleArmour: 9
      },
      HQ = {
        File: 0,
        Item: 1
      },
      bQ = 0,
      YQ = 1,
      xQ = 2;

    function AQ(QQ) {
      const FQ = (0, LQ.o)();
      FQ.catch((() => {}));
      let qQ = null;
      return {
        glbUrl: QQ,
        lifeformAtlasUrl: async QQ => (await FQ).lifeformAtlasUrl(QQ),
        armourAtlasUrl: async () => (await wQ.e(202).then((() => wQ(33928)))).armourAtlasUrl,
        capeUrl: async QQ => (await FQ).capeUrl(QQ),
        attachmentImageUrl: async QQ => (await FQ).attachmentImageUrl(QQ),
        blockImageUrl: async QQ => (await FQ).blockImageUrl(QQ),
        groupAtlasUrl: async QQ => (await FQ).groupAtlasUrl(QQ),
        particleTextureUrl: async QQ => (await FQ).particleTextureUrl(QQ),
        particleItemUrl: async QQ => (qQ ??= wQ.e(38).then((() => wQ(51079))).catch((QQ => {
          throw qQ = null, QQ
        })), (await qQ).particleItemUrl(QQ))
      }
    }
    class tQ {
      constructor(QQ, FQ) {
        var wQ, DQ, kQ, vQ;
        let mQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = QQ, this.onFailure = FQ, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.kx = !1, this.load = null !== (wQ = mQ.load) && void 0 !== wQ ? wQ : (QQ, FQ) => (0, oQ.f)(QQ, mQ.fetchImage, FQ), this.release = null !== (DQ = mQ.release) && void 0 !== DQ ? DQ : oQ.m, this.fetchFile = null !== (kQ = mQ.fetchFile) && void 0 !== kQ ? kQ : QQ => (0, LQ.j)(QQ), this.greyscaleArmour = null !== (vQ = mQ.greyscaleArmour) && void 0 !== vQ ? vQ : qQ.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(QQ, FQ) {
        this.glbWrittenImages.set(QQ, SQ(FQ))
      }
      glbTaken(QQ, FQ) {
        const wQ = this.glbWrittenImages.get(QQ);
        this.glbWrittenImages.delete(QQ), FQ && this.setGlbImages(QQ, void 0 !== wQ && wQ.length > 0 ? wQ : void 0)
      }
      setGlbImages(QQ, FQ) {
        var wQ;
        this.glbTakenCount.set(QQ, (null !== (wQ = this.glbTakenCount.get(QQ)) && void 0 !== wQ ? wQ : 0) + 1), void 0 === FQ ? this.glbImages.delete(QQ) : this.glbImages.set(QQ, FQ);
        const LQ = [];
        for (const {
            key: qQ
          }
          of this.loading.values()) qQ.kind === uQ.Glb && qQ.word === QQ && LQ.push(qQ);
        for (let qQ = this.ready.length - 1; qQ >= 0; qQ--) {
          const {
            key: FQ,
            id: wQ
          } = this.ready[qQ];
          FQ.kind === uQ.Glb && FQ.word === QQ && (this.ready.splice(qQ, 1), null !== wQ && (this.answered.delete(wQ), this.release(wQ)), LQ.push(FQ))
        }
        this.loadAgain(LQ)
      }
      onEvent(QQ) {
        if (this.kx) return;
        const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
        for (let wQ = 0; wQ + 8 <= QQ.byteLength; wQ += 8) {
          const QQ = FQ.getUint8(wQ),
            LQ = FQ.getUint32(wQ + 4, !0);
          if (QQ === mQ) {
            this.answered.delete(LQ), this.release(LQ);
            continue
          }
          const qQ = {
            kind: FQ.getUint8(wQ + 1),
            index: FQ.getUint8(wQ + 2),
            word: LQ
          };
          QQ === kQ ? this.want(qQ) : QQ === vQ && this.loading.delete(eQ(qQ))
        }
      }
      reload(QQ, FQ) {
        const wQ = wQ => QQ.includes(wQ.kind) && (void 0 === FQ || FQ(wQ)),
          LQ = new Map;
        for (const qQ of this.answered.values()) wQ(qQ) && LQ.set(eQ(qQ), qQ);
        for (const [qQ, {
            key: oQ
          }] of this.loading) wQ(oQ) && LQ.set(qQ, oQ);
        this.loadAgain(LQ.values())
      }
      loadAgain(QQ) {
        for (const FQ of QQ) this.loading.delete(eQ(FQ)), this.want(FQ)
      }
      drain(QQ) {
        if (null !== QQ)
          for (; this.ready.length > 0;) {
            if (!QQ(DQ, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.kx = !0, this.loading.clear(), this.ready.length = 0;
        for (const QQ of this.answered.keys()) this.release(QQ);
        this.answered.clear()
      }
      want(QQ) {
        const FQ = eQ(QQ);
        if (this.loading.has(FQ)) return;
        const wQ = {
          key: QQ
        };
        this.loading.set(FQ, wQ), this.loadKey(QQ).then((LQ => {
          this.kx || this.loading.get(FQ) !== wQ ? this.release(LQ.id) : (this.loading.delete(FQ), this.answered.set(LQ.id, QQ), this.ready.push({
            record: GQ(QQ, bQ, LQ),
            key: QQ,
            id: LQ.id
          }))
        }), (LQ => {
          if (this.kx || this.loading.get(FQ) !== wQ) return;
          this.loading.delete(FQ), this.onFailure({
            key: QQ,
            error: LQ
          });
          const qQ = LQ instanceof oQ.b && "decode" === LQ.stage ? YQ : xQ;
          this.ready.push({
            record: GQ(QQ, qQ, null),
            key: QQ,
            id: null
          })
        }))
      }
      async loadKey(QQ) {
        switch (QQ.kind) {
          case uQ.Glb:
            return this.load(await this.glbImage(QQ), "none");
          case uQ.LifeformAtlas:
            return this.load(MQ(await this.sources.lifeformAtlasUrl(QQ.word), QQ), "none");
          case uQ.ArmourAtlas:
            return this.load(MQ(await this.sources.armourAtlasUrl(), QQ), "none");
          case uQ.Cape:
            return this.load(MQ(await this.sources.capeUrl(QQ.word), QQ), "none");
          case uQ.AttachmentImage:
            return this.load(MQ(await this.sources.attachmentImageUrl(QQ.word), QQ), "none");
          case uQ.GroupAtlas:
            return this.load(MQ(await this.sources.groupAtlasUrl(QQ.word), QQ), "none");
          case uQ.BlockImage:
            return this.load(MQ(await this.sources.blockImageUrl(QQ.word), QQ), "none");
          case uQ.Particle: {
            const FQ = await (QQ.index === HQ.Item ? this.sources.particleItemUrl(QQ.word) : this.sources.particleTextureUrl(QQ.word));
            return this.load(MQ(FQ, QQ), "flipY")
          }
          case uQ.GreyscaleArmour:
            return this.greyscaleArmour.load(QQ.index, QQ.word);
          default:
            throw new oQ.b("fetch", `image kind ${QQ.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(QQ) {
        var FQ;
        let wQ = this.glbImages.get(QQ.word);
        if (void 0 === wQ) {
          const FQ = this.glbTakenCount.get(QQ.word),
            LQ = MQ(await this.sources.glbUrl(QQ.word), QQ);
          try {
            wQ = SQ(await this.fetchFile(LQ))
          } catch (qQ) {
            throw new oQ.b("fetch", LQ, {
              cause: qQ
            })
          }
          this.glbTakenCount.get(QQ.word) === FQ && this.glbImages.set(QQ.word, wQ)
        }
        const LQ = null === (FQ = wQ) || void 0 === FQ ? void 0 : FQ[QQ.index];
        if (!LQ) throw new oQ.b("decode", `image ${QQ.index} of file ${2147483647&QQ.word}`, {
          cause: null
        });
        return LQ
      }
    }

    function eQ(QQ) {
      let {
        kind: FQ,
        index: wQ,
        word: LQ
      } = QQ;
      return `${FQ}:${wQ}:${LQ}`
    }

    function MQ(QQ, FQ) {
      if (null === QQ) throw new oQ.b("fetch", `no URL for image ${eQ(FQ)}`, {
        cause: null
      });
      return QQ
    }

    function GQ(QQ, FQ, wQ) {
      var LQ, qQ, oQ;
      const DQ = new Uint8Array(16),
        kQ = new DataView(DQ.buffer);
      return kQ.setUint8(0, QQ.kind), kQ.setUint8(1, QQ.index), kQ.setUint8(2, FQ), kQ.setUint32(4, QQ.word, !0), kQ.setUint32(8, null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.id) && void 0 !== LQ ? LQ : 0, !0), kQ.setUint16(12, Math.min(null !== (qQ = null === wQ || void 0 === wQ ? void 0 : wQ.width) && void 0 !== qQ ? qQ : 0, 65535), !0), kQ.setUint16(14, Math.min(null !== (oQ = null === wQ || void 0 === wQ ? void 0 : wQ.height) && void 0 !== oQ ? oQ : 0, 65535), !0), DQ
    }
    const pQ = 1179937895,
      cQ = 1313821514,
      CQ = 5130562;

    function SQ(QQ) {
      var FQ;
      const wQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      if (QQ.byteLength < 20 || wQ.getUint32(0, !0) !== pQ || wQ.getUint32(16, !0) !== cQ) return [];
      let LQ, qQ = 20 + wQ.getUint32(12, !0);
      try {
        LQ = JSON.parse((new TextDecoder).decode(QQ.subarray(20, qQ)))
      } catch {
        return []
      }
      for (; qQ + 8 <= QQ.byteLength && wQ.getUint32(qQ + 4, !0) !== CQ;) qQ += 8 + wQ.getUint32(qQ, !0);
      const oQ = null !== (FQ = LQ.images) && void 0 !== FQ ? FQ : [];
      if (0 === oQ.length || qQ + 8 > QQ.byteLength) return oQ.map((() => null));
      const DQ = QQ.subarray(qQ + 8, Math.min(QQ.byteLength, qQ + 8 + wQ.getUint32(qQ, !0)));
      return oQ.map((QQ => {
        var FQ, wQ, qQ;
        const oQ = void 0 === QQ.bufferView || null === (FQ = LQ.bufferViews) || void 0 === FQ ? void 0 : FQ[QQ.bufferView];
        if (!oQ || 0 !== (null !== (wQ = oQ.buffer) && void 0 !== wQ ? wQ : 0) || void 0 === oQ.byteLength) return null;
        const kQ = null !== (qQ = oQ.byteOffset) && void 0 !== qQ ? qQ : 0,
          vQ = kQ + oQ.byteLength;
        return vQ <= DQ.byteLength ? DQ.slice(kQ, vQ) : null
      }))
    }
  },
  40089: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      g: () => oQ,
      j: () => qQ
    });
    let LQ = null;

    function qQ(QQ) {
      LQ = QQ
    }

    function oQ(QQ) {
      LQ === QQ && (LQ = null)
    }

    function DQ() {
      var QQ;
      null === (QQ = LQ) || void 0 === QQ || QQ()
    }
  },
  36224: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ,
      g: () => bQ,
      j: () => eQ,
      n: () => mQ
    });
    var LQ = wQ(17),
      qQ = wQ(2313),
      oQ = wQ(2320),
      DQ = wQ(2327),
      kQ = wQ(2407),
      vQ = wQ(22);

    function mQ(QQ, FQ) {
      return (!(0, DQ.b)() || 0 === QQ && 0 === FQ) && (0, oQ.w)(qQ.i.Joystick, 0, QQ, FQ, 0)
    }
    const uQ = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function HQ(QQ) {
      return QQ.classList.contains("TouchKeyHit") && YQ() ? null : QQ.firstElementChild
    }

    function bQ(QQ) {
      return QQ.classList.contains("TouchKeyHit") && !QQ.classList.contains("CanvasZone") ? {
        whole: !YQ(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: xQ(HQ(QQ))
      }
    }

    function YQ() {
      return document.documentElement.classList.contains(kQ.o)
    }

    function xQ(QQ) {
      return !(QQ instanceof HTMLElement) || QQ.offsetWidth <= 0 || QQ.offsetHeight <= 0 ? null : {
        width: QQ.offsetWidth,
        height: QQ.offsetHeight
      }
    }

    function AQ(QQ, FQ) {
      const wQ = QQ => Math.min(65535, Math.round(4 * QQ));
      return (wQ(QQ) | wQ(FQ) << 16) >>> 0
    }

    function tQ(QQ) {
      return {
        x: QQ.left + QQ.width / 2,
        y: QQ.top + QQ.height / 2,
        radius: Math.min(QQ.width, QQ.height) / 2
      }
    }
    const eQ = new class {
      constructor(QQ) {
        this.write = QQ, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        FQ ? this.elements.set(QQ, {
          element: FQ,
          hidden: wQ
        }) : this.elements.delete(QQ), this.measureOne(QQ)
      }
      measure() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = QQ.left, this.canvasTop = QQ.top;
        for (const FQ of this.elements.keys()) this.measureOne(FQ)
      }
      hitZone(QQ, FQ) {
        let wQ = null,
          LQ = 1;
        for (const qQ of this.elements.keys()) {
          const oQ = this.shown(qQ);
          if (!oQ) continue;
          const {
            rect: DQ,
            element: kQ
          } = oQ, vQ = tQ(DQ), mQ = Math.max(0, DQ.width / 2 - vQ.radius), uQ = Math.max(0, DQ.height / 2 - vQ.radius), bQ = Math.max(0, Math.abs(QQ - vQ.x) - mQ), YQ = Math.max(0, Math.abs(FQ - vQ.y) - uQ), AQ = kQ.firstElementChild;
          let eQ = Math.hypot(bQ, YQ) / vQ.radius;
          const MQ = xQ(HQ(kQ));
          MQ && (eQ = Math.min(eQ, Math.max(2 * Math.abs(QQ - vQ.x) / MQ.width, 2 * Math.abs(FQ - vQ.y) / MQ.height))), eQ < LQ && (wQ = {
            code: qQ,
            element: kQ,
            key: AQ,
            ...vQ
          }, LQ = eQ)
        }
        return wQ
      }
      measureOne(QQ) {
        const FQ = this.shown(QQ);
        if (!FQ) return void this.write(qQ.i.TouchZone, QQ, 0, 0, 0);
        const {
          rect: wQ,
          element: LQ
        } = FQ, oQ = tQ(wQ);
        this.write(qQ.i.TouchZone, QQ, oQ.x - this.canvasLeft, oQ.y - this.canvasTop, AQ(wQ.width, wQ.height));
        const DQ = xQ(HQ(LQ));
        this.write(qQ.i.TouchZone, 256 | QQ, 0, 0, DQ ? AQ(DQ.width, DQ.height) : 0)
      }
      shown(QQ) {
        const FQ = this.elements.get(QQ),
          wQ = LQ.c.get("worldPanelHud");
        if (!FQ || FQ.hidden || "none" === wQ) return null;
        const qQ = FQ.element.getBoundingClientRect();
        return qQ.width <= 0 || qQ.height <= 0 ? null : {
          rect: qQ,
          element: FQ.element
        }
      }
    }(oQ.w);
    (0, vQ.o)(kQ.g, (() => {
      eQ.measure()
    }))
  },
  40314: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ,
      i: () => mQ
    });
    var LQ = wQ(40316),
      qQ = wQ(38603),
      oQ = wQ(36102),
      DQ = wQ(40242),
      kQ = wQ(40283);
    const vQ = LQ.e.timeForPlayerToConnect - 1e4;
    async function mQ(QQ, FQ, wQ, LQ) {
      let vQ;
      try {
        vQ = await QQ.getTrafficCode()
      } catch (xQ) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", xQ), new kQ.z(xQ)
      }
      const {
        gameNameWithVariation: mQ,
        lobbyName: uQ
      } = FQ, HQ = () => {
        const FQ = (0, oQ.f)(QQ, mQ, uQ, vQ, (QQ => {
          var FQ;
          return null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.isUsingCustomGameTexturePack(QQ)) && void 0 !== FQ && FQ
        }));
        FQ.joinOptions.wasmClient = !0;
        const qQ = (0, DQ.D)();
        return null !== qQ && (FQ.joinOptions.renderBackend = qQ), FQ.joinOptions.joinAdHold = LQ, FQ
      }, {
        roomName: bQ,
        joinOptions: YQ
      } = HQ();
      return {
        endpoint: FQ.endpoint,
        roomName: bQ,
        joinOptions: YQ,
        session: {
          gameNameWithVariation: mQ,
          lobbyName: uQ,
          playerDbId: QQ.whamm
        },
        optionsAfterRefusal: async FQ => await (0, qQ.d)(QQ, FQ) ? HQ().joinOptions : null
      }
    }
  },
  4884: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ,
      i: () => DQ
    });
    var LQ = wQ(3047),
      qQ = wQ(4892);
    let oQ = null;

    function DQ(QQ, FQ) {
      oQ = {
        pack: QQ.metaData.id === LQ.d ? null : QQ,
        prompt: FQ
      }
    }

    function kQ(QQ, FQ) {
      const wQ = oQ;
      null !== wQ && (0, qQ.d)(wQ.pack, QQ) && (oQ = null, FQ && wQ.prompt())
    }
  },
  40436: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ,
      e: () => oQ,
      f: () => HQ,
      h: () => DQ
    });
    var LQ = wQ(40426),
      qQ = wQ(40385);
    const oQ = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(QQ) {
        this.change((() => {
          this.page = QQ
        }))
      }
      setSessionFiles(QQ) {
        const FQ = void 0 !== this.session && void 0 === QQ;
        if (this.change((() => {
            this.session = QQ
          })), FQ)
          for (const wQ of [...this.pageListeners]) wQ()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(QQ) {
        return this.pageListeners.add(QQ), () => {
          this.pageListeners.delete(QQ)
        }
      }
      setFollower(QQ) {
        this.follower = QQ, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const QQ of [...this.wantedListeners]) QQ();
        this.startFollower()
      }
      onWanted(QQ) {
        return this.wantedListeners.add(QQ), () => {
          this.wantedListeners.delete(QQ)
        }
      }
      onChange(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      startFollower() {
        const QQ = this.follower;
        this.isWanted && null !== QQ && (this.follower = null, QQ((() => {
          this.follower = QQ
        })))
      }
      change(QQ) {
        const FQ = this.current;
        if (QQ(), this.current !== FQ)
          for (const wQ of this.listeners) wQ()
      }
    };

    function DQ(QQ, FQ) {
      return {
        ...QQ,
        armourAtlasUrl: () => {
          var wQ, LQ;
          return null !== (wQ = null === (LQ = FQ()) || void 0 === LQ ? void 0 : LQ.armourAtlasUrl()) && void 0 !== wQ ? wQ : QQ.armourAtlasUrl()
        },
        lifeformAtlasUrl: wQ => vQ(FQ(), (QQ => QQ.LIFEFORM_ATLAS_PATHS[wQ]), (() => QQ.lifeformAtlasUrl(wQ))),
        groupAtlasUrl: wQ => vQ(FQ(), (QQ => QQ.GROUP_ATLAS_PATHS[wQ]), (() => QQ.groupAtlasUrl(wQ))),
        particleItemUrl: LQ => mQ(FQ(), (async () => {
          const QQ = await wQ.e(38).then((() => wQ(51079))).catch((() => null));
          return (null === QQ || void 0 === QQ ? void 0 : QQ.particleItemSprite(LQ)) || null
        }), (() => QQ.particleItemUrl(LQ))),
        blockImageUrl: wQ => mQ(FQ(), (async () => {
          var QQ, FQ;
          return null !== (QQ = null === (FQ = await kQ()) || void 0 === FQ ? void 0 : FQ.blockImageName(wQ)) && void 0 !== QQ ? QQ : null
        }), (() => QQ.blockImageUrl(wQ)))
      }
    }

    function kQ() {
      return (0, qQ.o)().catch((() => null))
    }

    function vQ(QQ, FQ, wQ) {
      return mQ(QQ, (async () => {
        var QQ;
        const wQ = await kQ(),
          LQ = null === wQ ? null : FQ(wQ),
          qQ = null !== (QQ = null === LQ || void 0 === LQ ? void 0 : LQ.slice(LQ.lastIndexOf("/") + 1)) && void 0 !== QQ ? QQ : null;
        return "Player_Atlas" === qQ ? null : qQ
      }), wQ)
    }
    async function mQ(QQ, FQ, wQ) {
      if (null !== QQ) {
        const wQ = await FQ(),
          LQ = null === wQ ? null : QQ.textureUrl(wQ);
        if (null !== LQ) return LQ
      }
      return wQ()
    }
    const uQ = 0;

    function HQ(QQ) {
      const FQ = [LQ.g.ArmourAtlas, LQ.g.LifeformAtlas, LQ.g.GroupAtlas, LQ.g.BlockImage, LQ.g.Particle];
      QQ.reload(FQ, (QQ => {
        switch (QQ.kind) {
          case LQ.g.Particle:
            return QQ.index === LQ.k.Item;
          case LQ.g.LifeformAtlas:
            return QQ.word !== uQ;
          default:
            return !0
        }
      }))
    }
  },
  40325: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      f: () => kQ,
      g: () => DQ,
      i: () => qQ,
      l: () => oQ
    });
    const LQ = 1e3;

    function qQ() {
      vQ((() => {
        window.location.reload()
      }))
    }

    function oQ() {
      return new Promise((() => {}))
    }

    function DQ(QQ) {
      vQ((() => {
        window.location.replace(QQ(window.location.href))
      }))
    }

    function kQ(QQ) {
      Promise.resolve().then((() => wQ(106))).then((FQ => {
        let {
          currentUrl: wQ
        } = FQ;
        DQ((() => wQ.mergeSearchParamsInto(QQ)))
      }), (() => {
        DQ((() => QQ))
      }))
    }

    function vQ(QQ) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => wQ(1725))).then((FQ => {
        let {
          prepareForUnloadWithoutConfirmation: wQ
        } = FQ;
        try {
          wQ()
        } catch (LQ) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", LQ), window.onbeforeunload = null
        }
        QQ()
      }), (() => {
        window.onbeforeunload = null, QQ()
      })) : QQ()
    }
  },
  4892: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return qQ(QQ, FQ)
    }

    function qQ(QQ, FQ) {
      if (QQ === FQ) return !0;
      if ("object" !== typeof QQ || "object" !== typeof FQ || null === QQ || null === FQ || Array.isArray(QQ) !== Array.isArray(FQ)) return !1;
      const wQ = QQ,
        LQ = FQ,
        oQ = Object.keys(wQ);
      return oQ.length === Object.keys(LQ).length && oQ.every((QQ => Object.prototype.hasOwnProperty.call(LQ, QQ) && qQ(wQ[QQ], LQ[QQ])))
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  40362: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => SQ,
      h: () => cQ,
      j: () => tQ,
      n: () => AQ
    });
    var LQ = wQ(1799),
      qQ = wQ(1804),
      oQ = wQ(38595),
      DQ = wQ(38607),
      kQ = wQ(1772),
      vQ = wQ(40275),
      mQ = wQ(40283);
    const uQ = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      HQ = 3,
      bQ = [500, 1500];

    function YQ(QQ) {
      const FQ = new URL(QQ);
      return {
        secure: "https:" === FQ.protocol || "wss:" === FQ.protocol,
        host: FQ.host,
        pathname: FQ.pathname.replace(/\/+$/, ""),
        search: FQ.searchParams.toString()
      }
    }

    function xQ(QQ, FQ, wQ) {
      const {
        secure: LQ,
        host: qQ,
        pathname: oQ,
        search: DQ
      } = YQ(QQ);
      return `${LQ?"https":"http"}://${qQ}${oQ}/matchmake/${FQ}/${encodeURIComponent(wQ)}${DQ?`?${DQ}`:""}`
    }

    function AQ(QQ, FQ) {
      var wQ;
      const LQ = null !== (wQ = FQ.protocol) && void 0 !== wQ ? wQ : "ws";
      if ("ws" !== LQ) throw new Error(`seat reservation asks for the ${LQ} transport`);
      const {
        secure: qQ,
        host: oQ,
        pathname: DQ,
        search: kQ
      } = YQ(QQ), vQ = new URLSearchParams(kQ);
      vQ.append("sessionId", FQ.sessionId), FQ.reconnectionToken && vQ.append("reconnectionToken", FQ.reconnectionToken);
      return `${qQ?"wss":"ws"}://${FQ.room.publicAddress||`${oQ}${DQ}`}/${FQ.room.processId}/${FQ.room.roomId}?${vQ.toString()}`
    }
    async function tQ(QQ, FQ, wQ) {
      var vQ;
      let uQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const YQ = null !== (vQ = uQ.sleep) && void 0 !== vQ ? vQ : LQ.e,
        AQ = new qQ.b(uQ.signal),
        tQ = new kQ.d(DQ.c, (() => {
          (0, qQ.h)(AQ.controller, new DQ.d)
        })),
        {
          signal: pQ
        } = AQ;
      try {
        return await (0, oQ.e)((() => async function(QQ, FQ, wQ, LQ) {
          var oQ;
          const {
            signal: DQ,
            sleep: kQ
          } = LQ, vQ = xQ(QQ, "joinOrCreate", FQ), uQ = JSON.stringify(wQ);
          let YQ = null;
          for (let xQ = 0; xQ < HQ; xQ++) {
            var AQ;
            if (xQ > 0) await kQ(null !== (AQ = bQ[xQ - 1]) && void 0 !== AQ ? AQ : 1500, DQ);
            let QQ;
            (0, qQ.n)(DQ);
            try {
              QQ = await MQ(vQ, uQ, LQ)
            } catch (tQ) {
              (0, qQ.n)(DQ), YQ = eQ(tQ);
              continue
            }
            const {
              response: FQ,
              answer: wQ,
              refusal: oQ,
              lost: HQ
            } = QQ;
            if (null === HQ) {
              if (null !== oQ) throw GQ(oQ, wQ);
              if (FQ.ok && null !== wQ && iQ(wQ)) return wQ;
              YQ = new mQ.x(`seat request answered HTTP ${FQ.status}${null===wQ?" without JSON":" without a seat"}`, !1)
            } else YQ = eQ(HQ.error)
          }
          throw null !== (oQ = YQ) && void 0 !== oQ ? oQ : new mQ.x("seat request made no attempt", !1)
        }(QQ, FQ, wQ, {
          ...uQ,
          signal: pQ,
          sleep: YQ
        })), pQ, YQ)
      } finally {
        tQ.stop(), AQ.unfollow()
      }
    }

    function eQ(QQ) {
      return new mQ.x(QQ instanceof Error ? QQ.message : String(QQ), !0, QQ)
    }
    async function MQ(QQ, FQ, wQ) {
      var LQ;
      const {
        signal: oQ
      } = wQ, DQ = null !== (LQ = wQ.fetch) && void 0 !== LQ ? LQ : fetch, kQ = await DQ(QQ, {
        method: "POST",
        headers: {
          ...uQ,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: FQ,
        credentials: "include",
        signal: oQ
      }), {
        answer: vQ,
        lost: mQ
      } = await async function(QQ) {
        try {
          const FQ = await QQ.json();
          return {
            answer: "object" === typeof FQ && null !== FQ ? FQ : null,
            lost: null
          }
        } catch (FQ) {
          return {
            answer: null,
            lost: FQ instanceof SyntaxError ? null : {
              error: FQ
            }
          }
        }
      }(kQ), HQ = null !== vQ && "string" === typeof vQ.error ? vQ.error : null;
      var bQ;
      null !== HQ && (null === (bQ = wQ.onRefusal) || void 0 === bQ || bQ.call(wQ));
      return (0, qQ.n)(oQ), {
        response: kQ,
        answer: vQ,
        refusal: HQ,
        lost: mQ
      }
    }

    function GQ(QQ, FQ) {
      return new mQ.q(QQ, "number" === typeof(null === FQ || void 0 === FQ ? void 0 : FQ.code) ? FQ.code : 0, (0, vQ.p)(QQ).text)
    }
    class pQ extends Error {
      constructor(QQ, FQ) {
        super(QQ), this.code = FQ, this.name = "SeatHttpError"
      }
    }
    async function cQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: qQ,
        answer: oQ,
        refusal: DQ,
        lost: kQ
      } = await MQ(xQ(QQ, "reconnect", FQ), JSON.stringify({
        reconnectionToken: wQ
      }), LQ);
      if (null !== kQ) throw kQ.error;
      if (!qQ.ok) {
        const QQ = null !== oQ && "number" === typeof oQ.code && 0 !== oQ.code ? oQ.code : qQ.status;
        throw new pQ(`the seat's reconnect was refused: ${null!==DQ&&void 0!==DQ?DQ:`HTTP ${qQ.status}`}`, QQ)
      }
      if (null !== DQ) throw GQ(DQ, oQ);
      if (null === oQ || !iQ(oQ)) throw new Error("the seat's reconnect answered " + (null === oQ ? "without JSON" : "without a seat"));
      return {
        ...oQ,
        reconnectionToken: wQ
      }
    }
    const CQ = 10;

    function SQ(QQ) {
      if (QQ.byteLength < 2 || QQ[0] !== CQ) return null;
      const FQ = 2 + QQ[1];
      return FQ > QQ.byteLength ? null : (new TextDecoder).decode(QQ.subarray(2, FQ))
    }

    function iQ(QQ) {
      const FQ = QQ.room;
      return "string" === typeof QQ.sessionId && "object" === typeof FQ && null !== FQ && "string" === typeof FQ.roomId && "string" === typeof FQ.processId && "string" === typeof FQ.name
    }
  },
  40018: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => SQ,
      D: () => rQ,
      G: () => pQ,
      I: () => cQ,
      K: () => tQ,
      N: () => RQ,
      R: () => UQ,
      S: () => xQ,
      T: () => TQ,
      W: () => MQ,
      Y: () => eQ,
      ab: () => GQ,
      b: () => qQ,
      db: () => CQ,
      f: () => NQ,
      g: () => IQ,
      j: () => YQ,
      n: () => AQ,
      q: () => sQ,
      t: () => iQ,
      w: () => OQ,
      z: () => WQ
    });
    var LQ = wQ(2895);
    const qQ = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function oQ(QQ, FQ) {
      return !ArrayBuffer.isView(QQ) || QQ instanceof DataView ? Array.isArray(QQ) ? QQ.map((QQ => FQ(QQ))) : QQ : Array.from(QQ, (QQ => FQ(QQ)))
    }

    function DQ(QQ) {
      if ("string" !== typeof QQ) return QQ;
      for (let FQ = 0; FQ < QQ.length; FQ++) {
        const wQ = QQ.charCodeAt(FQ);
        if (wQ >= 55296 && wQ <= 57343) return vQ.decode(kQ.encode(QQ))
      }
      return QQ
    }
    const kQ = new TextEncoder,
      vQ = new TextDecoder;

    function mQ(QQ) {
      return QQ
    }
    let uQ;

    function HQ(QQ) {
      return null === QQ || "object" !== typeof QQ ? QQ : [DQ(QQ.Hm), DQ(QQ.bm)]
    }

    function bQ(QQ) {
      return null === QQ || "object" !== typeof QQ ? QQ : [oQ(QQ.VQ, mQ), oQ(QQ.pu, mQ)]
    }

    function YQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.Om), DQ(FQ.sm)];
      var FQ
    }

    function xQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [FQ.id, FQ.xu];
      var FQ
    }

    function AQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [FQ.RF, DQ(FQ.OF), FQ.sF, DQ(FQ.UF), FQ.zF, FQ.lF, FQ.CD, DQ(FQ.SD), DQ(FQ.iD)];
      var FQ
    }

    function tQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [oQ(FQ.km, mQ), FQ.um];
      var FQ
    }

    function eQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [oQ(FQ.Nm, (QQ => DQ(QQ))), DQ(FQ.Tm), FQ.Km];
      var FQ
    }

    function MQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [oQ(FQ.Au, mQ), DQ(FQ.tu), FQ.eu];
      var FQ
    }

    function GQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.SL), DQ(FQ.iL)];
      var FQ
    }

    function pQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.ou)];
      var FQ
    }

    function cQ(QQ) {
      return DQ(QQ)
    }

    function CQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.hm), DQ(FQ.Jm), DQ(FQ.Hm), DQ(FQ.bm)];
      var FQ
    }

    function SQ(QQ) {
      return HQ(QQ)
    }

    function iQ(QQ) {
      return HQ(QQ)
    }

    function WQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.pD)];
      var FQ
    }

    function RQ(QQ) {
      return QQ
    }

    function OQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.Bv), DQ(FQ.Qm)];
      var FQ
    }

    function sQ(QQ) {
      return DQ(QQ)
    }

    function rQ(QQ) {
      return bQ(QQ)
    }

    function IQ(QQ) {
      return bQ(QQ)
    }

    function UQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.cD)];
      var FQ
    }

    function NQ(QQ) {
      return (uQ ??= (0, LQ.h)().map((QQ => QQ.name)), uQ).map((FQ => {
        return "string" === typeof(wQ = QQ[FQ]) ? DQ(wQ) : oQ(wQ, mQ);
        var wQ
      }))
    }

    function TQ(QQ) {
      return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [FQ.Wu, FQ.Ru, FQ.Ou];
      var FQ
    }
  },
  40443: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ
    });
    var LQ = wQ(40447),
      qQ = wQ(40436);
    const oQ = new class {
      constructor(QQ) {
        this.pack = QQ, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, QQ.onWanted((() => {
          this.release()
        }))
      }
      setGame(QQ) {
        if (void 0 === QQ && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const FQ = this.inGame();
        if (this.game = QQ, this.update(), this.inGame() !== FQ)
          for (const wQ of this.gameListeners) wQ()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(QQ) {
        return this.gameListeners.add(QQ), () => {
          this.gameListeners.delete(QQ)
        }
      }
      unwantedLeave(QQ) {
        QQ && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(QQ) {
        null !== QQ && QQ === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const QQ = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, QQ && this.setGame(void 0)
      }
      setSettled(QQ) {
        this.settle = QQ, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, LQ.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(qQ.e)
  },
  40273: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      followPageUiPack: () => Xm,
      packForGame: () => am,
      playWasmGame: () => dm,
      prefetchWasmPreviews: () => yk,
      setGamePackConfirm: () => Lm,
      startWasmPlay: () => Em,
      startWasmPreviews: () => Zk
    });
    var LQ = wQ(201),
      qQ = wQ(1257),
      oQ = wQ(160),
      DQ = wQ(38620),
      kQ = wQ(1897),
      vQ = wQ(22),
      mQ = wQ(4524),
      uQ = wQ(1326),
      HQ = wQ(1723),
      bQ = wQ(1339),
      YQ = wQ(38771),
      xQ = wQ(1314),
      AQ = wQ(38783),
      tQ = wQ(38688),
      eQ = wQ(36110),
      MQ = wQ(38595),
      GQ = wQ(8667),
      pQ = wQ(38607),
      cQ = wQ(40108),
      CQ = wQ(4621),
      SQ = wQ(40009),
      iQ = wQ(40082),
      WQ = wQ(40018);
    const RQ = {
      states: {
        health: !0,
        aura: !0,
        hotbar: !0,
        heldItemAim: !0,
        crouching: !0,
        flight: !0,
        gliderBoostFuel: !0,
        crosshairTarget: !0,
        inventory: !0,
        crafting: !0,
        stationItems: !0,
        itemInfo: !0,
        creativeVisibility: !0,
        fullInventory: !0,
        replay: !0,
        replayEdits: !0,
        replayRecorder: !0,
        replayVideoExporting: !0,
        players: !0,
        lobbyLeaderboardRows: !0,
        freeCamera: !0
      },
      events: {
        hotbarSlotRequested: !0,
        hotbarScrolled: !0,
        numberKeyPressed: !0,
        shotDamageToShow: !0,
        chatReceived: !0,
        chestToggled: !0,
        chestRefreshed: !0,
        inventorySynced: !0,
        inventoryDropRequested: !0,
        enchantingTableOpened: !0,
        localEffectUpdated: !0,
        kill: !0,
        replayUiActionRequested: !0,
        replayViewerRequested: !0,
        cosmeticsUpdated: !0,
        boardEditRequested: !0,
        ironChestOpenRequested: !0
      },
      commands: {
        clickCodeBlock: !0,
        selectHotbarSlot: !0,
        setCrosshairInteractPrompt: !0,
        sendChatMessage: !0,
        removeInventoryItem: !0,
        swapInventorySlots: !0,
        moveInventoryItem: !0,
        quickMoveInventoryItem: !0,
        setInventoryOpen: !0,
        closeChest: !0,
        focusCrafting: !0,
        craftRecipe: !0,
        salvageItem: !0,
        enchantItem: !0,
        changeIronChestPasskey: !0,
        openIronChest: !0,
        completeTask: !0,
        setServerCookie: !0,
        answerUiRequest: !0,
        requestLeaderboard: !0,
        chooseRewardedAd: !0,
        ignorePlayer: !0,
        reportPlayer: !0,
        reportWorldCodeChat: !0,
        requestDiscordReportKey: !0,
        reportLobbyOrGame: !0,
        updateMyCosmetic: !0,
        holdEmoteWheel: !0,
        writeOnBoard: !0,
        writeBook: !0,
        writeNameTag: !0,
        setCustomLobbyBlock: !0,
        sendCodeCollab: !0,
        replayAction: !0,
        setReplayPlaying: !0,
        seekReplay: !0,
        setReplayCameraMode: !0,
        syncReplayCameraMode: !0,
        setReplayCameraKeyframe: !0,
        moveReplayCameraKeyframe: !0,
        deleteReplayCameraKeyframes: !0,
        setReplayPlaybackMark: !0,
        cropReplay: !0,
        holdReplayForShaderPackFailure: !0,
        exportReplayVideo: !0,
        toggleRecording: !0,
        saveClip: !0,
        setRecorderPrefs: !0,
        setReplayViewerOpen: !0,
        recordFlyingMiddleText: !0,
        dragReplayCamera: !0,
        moveReplayFreecam: !0,
        holdReplayFreecamVertical: !0,
        setShopOpen: !0,
        buyShopItem: !0,
        setFreeCameraMovesFly: !0,
        setBlockHighlight: !0,
        lobbyManage: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        targetedBlockPos: !0,
        blockAtViewPoint: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0,
        freeCameraPos: !0
      }
    };

    function OQ(QQ) {
      const FQ = {
        ...iQ.d[QQ]
      };
      for (const wQ of Object.keys(RQ[QQ])) delete FQ[wQ];
      return FQ
    }

    function sQ() {
      var QQ, FQ;
      return null === (QQ = null === (FQ = (0, SQ.k)()) || void 0 === FQ ? void 0 : FQ.localPlayerAlive()) || void 0 === QQ || QQ
    }

    function rQ() {
      var QQ, FQ;
      return null !== (QQ = null === (FQ = (0, SQ.k)()) || void 0 === FQ ? void 0 : FQ.localDeaths()) && void 0 !== QQ ? QQ : null
    }
    const IQ = {
        current: sQ,
        watch: QQ => {
          let FQ = sQ(),
            wQ = rQ();
          return (0, CQ.x)((() => {
            const LQ = sQ(),
              qQ = rQ(),
              oQ = null !== qQ && null !== wQ && qQ !== wQ;
            wQ = qQ, oQ ? (FQ || QQ(!0), QQ(!1), LQ && QQ(!0), FQ = LQ) : LQ !== FQ && (FQ = LQ, QQ(LQ))
          }))
        }
      },
      UQ = {
        states: {
          ...OQ("states"),
          localPlayerAlive: IQ
        },
        events: {
          ...OQ("events"),
          localPlayerAliveSet: {
            watch: IQ.watch
          }
        },
        commands: {
          ...OQ("commands"),
          respawn: () => {
            var QQ;
            null === (QQ = (0, SQ.k)()) || void 0 === QQ || QQ.respawn()
          },
          playEmote: QQ => {
            var FQ;
            null === (FQ = (0, SQ.k)()) || void 0 === FQ || FQ.send(WQ.b.PlayEmote, (0, WQ.G)({
              ou: QQ
            }))
          },
          applyTemporaryThirdPerson: QQ => {
            var FQ;
            let {
              durationMs: wQ
            } = QQ;
            null === (FQ = (0, SQ.k)()) || void 0 === FQ || FQ.thirdPersonFor(wQ)
          },
          bindCustomButtonKeys: QQ => {
            var FQ;
            null === (FQ = (0, SQ.k)()) || void 0 === FQ || FQ.bindCustomButtonKeys(QQ)
          },
          pressCustomButton: QQ => {
            var FQ;
            let {
              id: wQ,
              down: LQ
            } = QQ;
            null === (FQ = (0, SQ.k)()) || void 0 === FQ || FQ.pressCustomButton(wQ, LQ)
          },
          setLookSensitivity: () => {},
          wakeUp: QQ => {
            const FQ = (0, WQ.R)({
                cD: QQ
              }),
              wQ = () => {
                const QQ = (0, SQ.k)();
                return !(null !== QQ && void 0 !== QQ && QQ.isSessionLive) || QQ.send(WQ.b.StopSleeping, FQ)
              };
            if (!wQ()) {
              const QQ = (0, CQ.x)((() => {
                wQ() && QQ()
              }))
            }
          },
          setCameraZoom: QQ => {
            var FQ;
            null === (FQ = (0, SQ.k)()) || void 0 === FQ || FQ.setCameraZoom(QQ)
          }
        },
        queries: OQ("queries"),
        lookups: {
          ...OQ("lookups"),
          cameraZoom: () => {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = (0, SQ.k)()) || void 0 === FQ ? void 0 : FQ.cameraZoom()) && void 0 !== QQ ? QQ : 0
          }
        }
      };
    var NQ = wQ(40275),
      TQ = wQ(40283),
      KQ = wQ(40292),
      zQ = wQ(40314),
      lQ = wQ(1274),
      jQ = wQ(106),
      aQ = wQ(4367),
      XQ = wQ(3596),
      fQ = wQ(1188);
    const VQ = {
      Jv: () => (0, lQ.b)(),
      inbuiltOverwritten: () => aQ.g,
      reflectApplyHit: () => fQ.b,
      definerHit: () => jQ.currentUrl.c,
      emitReplaced: () => (0, vQ.e)(),
      confirmMesh: () => (0, XQ.e)(),
      confirmMeshHitStack: () => (0, XQ.g)()
    };
    var hQ = wQ(40301),
      JQ = wQ(40325);
    var EQ = wQ(17),
      nQ = wQ(1899),
      gQ = wQ(1940),
      PQ = wQ(1645),
      ZQ = wQ(1994),
      yQ = wQ(1207),
      BQ = wQ(1265),
      dQ = wQ(40262);

    function QF() {
      return BQ.e.get().getCurrentLanguageCode()
    }

    function FF(QQ) {
      const FQ = () => {
        QQ({
          translate: (QQ, FQ) => (0, yQ.s)(QF(), QQ, FQ),
          keyBindingText: QQ => {
            const FQ = (0, gQ.q)(QQ, EQ.c.get("isTouchScreen"));
            return null !== FQ ? (0, yQ.u)(QF(), FQ.translationKey, FQ.params) : (0, gQ.l)((0, gQ.n)(QQ))
          },
          isFriend: ZQ.g,
          hiddenNames: nQ.b.shown,
          loadsFontRest: (0, dQ.c)(QF())
        })
      };
      let wQ = !1;
      const LQ = () => {
          const QQ = QF();
          (0, yQ.j)(QQ).then((() => {
            wQ || QQ !== QF() || FQ()
          }))
        },
        qQ = () => PQ.e.getSocialState().friends.map((QQ => QQ.name.toLowerCase())).sort().join(" ");
      let oQ = qQ();
      FQ(), LQ();
      const DQ = [(0, BQ.f)((() => {
        FQ(), LQ()
      })), (0, vQ.o)("customBindingsChanged", FQ), (0, vQ.o)("appManagerUpdated|isTouchScreen", FQ), (0, ZQ.c)((() => {
        const QQ = qQ();
        QQ !== oQ && (oQ = QQ, FQ())
      })), nQ.b.subscribe(FQ)];
      return () => {
        wQ = !0;
        for (const QQ of DQ) QQ()
      }
    }
    var wF = wQ(626),
      LF = wQ(1038),
      qF = wQ(1916),
      oF = wQ(307),
      DF = wQ(2809),
      kF = wQ(35962),
      vF = wQ(2811),
      mF = wQ(38260),
      uF = wQ(4540),
      HF = wQ(40201),
      bF = wQ(656),
      YF = wQ(634),
      xF = wQ(671),
      AF = wQ(676),
      tF = wQ(1911),
      eF = wQ(3599),
      MF = wQ(3145);
    let GF = null;
    var pF = wQ(1213),
      cF = wQ(1804),
      CF = wQ(4279),
      SF = wQ(3315),
      iF = wQ(47),
      WF = wQ(299),
      RF = wQ(282),
      OF = wQ(40145),
      sF = wQ(4626);
    var rF = wQ(40332);
    class IF {
      constructor(QQ, FQ) {
        this.showView = QQ, this.holdForAd = FQ
      }
      pointerUnlockRequestsChanged() {
        (0, OF.y)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, OF.o)())
        }]
      }
      setGameViewShown(QQ) {
        this.showView(QQ)
      }
      setGameView(QQ) {
        (0, rF.k)(QQ)
      }
      videoAdHold(QQ, FQ) {
        this.holdForAd(QQ, FQ)
      }
    }
    class UF {
      leave(QQ) {
        ! function(QQ) {
          if (null !== (0, bQ.c)().websocketUrl) try {
            (0, CQ.H)().leaveGame(QQ)
          } finally {
            (0, bQ.s)({
              websocketUrl: null
            })
          }
        }(QQ)
      }
      isReplay() {
        return !1
      }
    }
    class NF {
      watchFrameStarts(QQ) {
        return (0, CQ.r)(QQ)
      }
      watchFrames(QQ) {
        return (0, CQ.n)(QQ)
      }
      watchTicks(QQ) {
        return (0, CQ.x)(QQ)
      }
    }
    var TF = wQ(40335);

    function KF(QQ) {
      return QQ >= 0 ? Math.min(1, QQ) : 0
    }

    function zF(QQ, FQ) {
      const {
        fade: wQ
      } = QQ;
      return null === wQ || FQ - wQ.at >= wQ.ms ? QQ.volume : wQ.from + (QQ.volume - wQ.from) * Math.max(0, (FQ - wQ.at) / wQ.ms)
    }

    function lF(QQ) {
      const FQ = Object.entries(QQ),
        wQ = new Uint32Array(FQ.length);
      let LQ = 0;
      for (const [DQ, [, kQ]] of FQ.entries()) wQ[DQ] = kQ.length, LQ += kQ.length;
      const qQ = new Float64Array(3 * LQ);
      let oQ = 0;
      for (const [, DQ] of FQ)
        for (const QQ of DQ) qQ.set(QQ, oQ), oQ += 3;
      return {
        blocks: FQ.map((QQ => {
          let [FQ] = QQ;
          return FQ
        })).join("\0"),
        counts: wQ,
        values: qQ
      }
    }
    class jF {
      constructor(QQ, FQ) {
        this.core = QQ, this.warn = FQ, this.latest = 0
      }
      async feed() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aF;
        const FQ = ++this.latest;
        let wQ;
        try {
          wQ = await QQ()
        } catch (LQ) {
          return void(this.core.isStopped || FQ !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", LQ))
        }
        FQ === this.latest && (this.core.setBlockColours(wQ) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function aF() {
      return lF((await wQ.e(202).then((() => wQ(33928)))).averageColors)
    }
    var XF = wQ(4632),
      fF = wQ(4638),
      VF = wQ(40065),
      hF = wQ(35929),
      JF = wQ(40250),
      EF = wQ(617),
      nF = wQ(36657),
      gF = wQ(609),
      PF = wQ(317),
      ZF = wQ(40226);
    const yF = [3e4, 12e4, 3e5];
    class BF extends Error {}
    const dF = {
      mobTypes: EF.i,
      vehicleTypes: nF.b,
      mobAiStates: EF.h,
      playerPoses: gF.t
    };
    var Qw = wQ(40222),
      Fw = wQ(40338),
      ww = wQ(40351),
      Lw = wQ(40360),
      qw = wQ(3337),
      ow = wQ(38590),
      Dw = wQ(4657),
      kw = wQ(2313);
    const vw = kw.w.KeysDisabled | kw.w.LookFrozen | kw.w.ClicksSuppressed,
      mw = qw.g;
    var uw = (0, Lw.c)("resumingConn");
    class Hw {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = QQ, this.now = FQ, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, uw, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new ow.c({
          reconnect: QQ => this.reconnect(QQ),
          isLive: () => QQ.isLive(),
          onReconnected: FQ => {
            this.landed = FQ, QQ.onReconnected(FQ), this.landIfResumed()
          },
          onGaveUp: (FQ, wQ) => {
            this.abortAttempt(), QQ.onGaveUp(FQ, wQ)
          },
          freeze: FQ => {
            QQ.pI(FQ), (0, Dw.i)(vw, FQ ? vw : 0, "reconnectFreeze")
          },
          releaseSeat: QQ => {
            this.releaseSeat(QQ)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, ww.e)(this, uw)[uw]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(QQ) {
        let {
          conn: FQ,
          graceMs: wQ,
          sessionBased: LQ,
          replayOffer: qQ
        } = QQ;
        this.session.onInitialInfo(wQ, LQ), this.isResuming() && (this.initialInfoConn = FQ, this.initialInfoOffer = qQ, this.landIfResumed())
      }
      onResumeComplete(QQ) {
        0 !== QQ && (QQ === (0, ww.e)(this, uw)[uw] ? ((0, ww.e)(this, uw)[uw] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = QQ))
      }
      onDropped(QQ) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, ww.e)(this, uw)[uw] = 0, this.session.onConnectionLost(QQ)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, ww.e)(this, uw)[uw] = 0, this.session.end()
      }
      reconnect(QQ) {
        const FQ = this.attempt;
        if (null !== FQ && this.awaitingJoinRoom(FQ)) return FQ.result;
        this.abortAttempt();
        const wQ = new AbortController,
          LQ = this.drops,
          qQ = {
            attachedAt: null
          },
          oQ = this.shell.reconnect(QQ, wQ.signal, (() => {
            qQ.attachedAt = this.now()
          })).then((QQ => {
            if (this.clearAttempt(DQ), this.drops !== LQ) throw new Error("the resumed room dropped before its attempt settled");
            return QQ
          }), (QQ => {
            throw this.clearAttempt(DQ), QQ
          })),
          DQ = {
            abort: wQ,
            socket: qQ,
            result: oQ
          };
        return this.attempt = DQ, oQ
      }
      clearAttempt(QQ) {
        this.attempt === QQ && (this.attempt = null)
      }
      abortAttempt() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const FQ = this.attempt;
        this.attempt = null, null === FQ || void 0 === FQ || FQ.abort.abort(QQ)
      }
      awaitingJoinRoom(QQ) {
        const FQ = QQ.socket.attachedAt;
        return null !== FQ && this.now() - FQ < mw
      }
      releaseSeat(QQ) {
        const FQ = this.attempt,
          wQ = null !== FQ && this.awaitingJoinRoom(FQ);
        this.abortAttempt(new TQ.v), wQ || this.shell.releaseSeat(QQ)
      }
      landIfResumed() {
        const QQ = this.landed;
        if (null !== QQ && QQ.conn === this.initialInfoConn) {
          const FQ = this.initialInfoOffer && this.completedEarlyConn !== QQ.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !FQ) return void this.session.onResumed();
          (0, ww.e)(this, uw)[uw] = QQ.conn, this.session.onResuming()
        }
      }
    }
    var bw = wQ(38593),
      Yw = wQ(40362),
      xw = wQ(36119),
      Aw = wQ(36117),
      tw = wQ(4884),
      ew = wQ(4268),
      Mw = wQ(3139),
      Gw = wQ(40160),
      pw = wQ(641),
      Cw = wQ(39175),
      Sw = wQ(4348),
      iw = wQ(27),
      Ww = wQ(40369),
      Rw = wQ(40396),
      Ow = wQ(4292),
      sw = wQ(2320),
      rw = wQ(1641),
      Iw = wQ(1668),
      Uw = wQ(1302),
      Nw = wQ(114),
      Tw = wQ(2715),
      Kw = wQ(2327),
      zw = wQ(4651);
    const lw = new Set([XF.fb.KeyDown, XF.fb.MouseMove, XF.fb.MouseDown, XF.fb.Wheel, XF.fb.TouchStart, XF.fb.TouchMove]);

    function jw(QQ) {
      return (QQ.shiftKey ? XF.rb.Shift : 0) | (QQ.ctrlKey ? XF.rb.Ctrl : 0) | (QQ.altKey ? XF.rb.Alt : 0) | (QQ.metaKey ? XF.rb.Meta : 0) | ("repeat" in QQ && QQ.repeat ? XF.rb.Repeat : 0) | (QQ.isTrusted ? 0 : XF.rb.Untrusted)
    }

    function aw(QQ) {
      return "touchOnly" !== (0, Nw.e)() && "function" === typeof QQ.requestPointerLock
    }

    function Xw(QQ) {
      return 0 === QQ.button ? QQ.altKey ? zw.f["Alt+Left Click"] : zw.f.Mouse1 : 1 === QQ.button ? zw.f.Mouse2 : zw.f.Mouse3
    }
    const fw = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Vw = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      hw = 32768,
      Jw = 1;

    function Ew(QQ) {
      return Math.min(Math.max(Math.round(QQ), 0), 65535)
    }

    function nw(QQ, FQ, wQ) {
      const LQ = [],
        qQ = (QQ, FQ, wQ, qQ) => {
          const oQ = QQ => {
            (0, Iw.s)(QQ) || wQ(QQ)
          };
          QQ.addEventListener(FQ, oQ, qQ), LQ.push((() => {
            QQ.removeEventListener(FQ, oQ, qQ)
          }))
        },
        oQ = {
          capture: !0,
          passive: !0
        },
        DQ = (QQ, wQ, LQ, qQ, oQ) => (!(0, Kw.b)() || !lw.has(QQ)) && (FQ(QQ, wQ, LQ, qQ, oQ), !0),
        kQ = () => document.pointerLockElement === QQ,
        vQ = (0, Tw.e)(),
        mQ = QQ => {
          QQ.ctrlKey && wQ.ctrlCombosAreGames() && !(0, Dw.g)(QQ.target) && QQ.preventDefault()
        },
        uQ = (QQ, LQ, qQ) => {
          wQ.inspect(QQ, LQ, !1), FQ(XF.fb.KeyUp, LQ, 0, 0, (0, sw.t)(qQ, QQ.timeStamp)), wQ.keyReleased(LQ)
        },
        HQ = new Map,
        bQ = (QQ, FQ, wQ) => QQ[wQ] || ("AltRight" === FQ || "ControlLeft" === FQ) && QQ.getModifierState("AltGraph"),
        YQ = new Map,
        xQ = () => {
          HQ.clear(), YQ.clear()
        },
        AQ = QQ => {
          if (document.hasFocus())
            for (const [FQ, wQ] of YQ) YQ.delete(FQ), bQ(QQ, FQ, wQ) || (HQ.delete(FQ), uQ(QQ, zw.f[FQ], jw(QQ)))
        };
      QQ.tabIndex = -1;
      let tQ = 0,
        eQ = 0;
      const MQ = () => {
        const FQ = QQ.getBoundingClientRect();
        tQ = FQ.left, eQ = FQ.top
      };
      let GQ = "mouse";
      const pQ = () => !kQ() && ("mouse" === GQ || !wQ.touchUiShown()),
        cQ = (QQ, FQ, wQ) => {
          const LQ = (Ew(QQ.clientX - tQ) | Ew(QQ.clientY - eQ) << 16) >>> 0;
          DQ(XF.fb.MouseMove, XF.sb.Point, FQ, wQ, LQ)
        };
      let CQ = !1,
        SQ = 0;
      const iQ = () => {
        CQ && (CQ = !1, wQ.viewShown() && (0, OF.K)())
      };
      LQ.push((() => {
        clearTimeout(SQ)
      })), qQ(window, "keydown", (QQ => {
        "Escape" === QQ.key ? (0, OF.C)(!0) : QQ.repeat || (0, Dw.g)(QQ.target) || (CQ = !0, clearTimeout(SQ), SQ = window.setTimeout(iQ, 0))
      }), oQ), qQ(window, "keydown", (QQ => {
        iQ(), mQ(QQ), AQ(QQ);
        const FQ = zw.f[QQ.code];
        if ("number" !== typeof FQ || !wQ.viewShown()) return;
        const LQ = (0, Dw.g)(QQ.target);
        LQ || !wQ.prevents(FQ) && !fw.has(QQ.code) || QQ.preventDefault(), QQ.repeat || wQ.inspect(QQ, FQ, !0), DQ(XF.fb.KeyDown, FQ, 0, 0, (0, sw.t)(jw(QQ), QQ.timeStamp)) && HQ.set(QQ.code, FQ), LQ || wQ.keyPressed(FQ)
      }), {
        capture: !1,
        passive: !1
      }), qQ(window, "keyup", (QQ => {
        "Escape" === QQ.key && (0, OF.C)(!1), mQ(QQ), HQ.delete(QQ.code), YQ.delete(QQ.code), AQ(QQ);
        const FQ = zw.f[QQ.code];
        "number" === typeof FQ && uQ(QQ, FQ, jw(QQ))
      }), {
        capture: !0,
        passive: !1
      }), qQ(window, "mousemove", (QQ => {
        "mouse" === GQ && pQ() ? cQ(QQ, QQ.movementX, QQ.movementY) : kQ() ? DQ(XF.fb.MouseMove, XF.sb.Stamped, QQ.movementX, QQ.movementY, (0, sw.t)(0, QQ.timeStamp)) : DQ(XF.fb.MouseMove, 0, QQ.movementX, QQ.movementY, 0)
      }), oQ);
      let WQ = 0,
        RQ = 0;
      const OQ = [];
      let sQ = !1,
        rQ = !1;
      qQ(QQ, "mousedown", (QQ => {
        if ((0, Kw.b)()) return;
        AQ(QQ);
        const LQ = 1 << QQ.button;
        if (!kQ() && (0, OF.J)() && (0, OF.e)() && (rQ = !0, !sQ)) return void(WQ |= LQ);
        WQ &= ~LQ;
        const qQ = QQ.button <= 2 ? Xw(QQ) : void 0;
        void 0 !== qQ && (OQ[QQ.button] = qQ, wQ.inspect(QQ, qQ, !0)), pQ() && cQ(QQ, 0, 0), FQ(XF.fb.MouseDown, QQ.button, QQ.clientX, QQ.clientY, (0, sw.t)(jw(QQ), QQ.timeStamp)), RQ |= LQ, void 0 !== qQ && wQ.keyPressed(qQ)
      }), oQ), qQ(window, "mouseup", (QQ => {
        var LQ;
        AQ(QQ);
        const qQ = 1 << QQ.button,
          oQ = 0 !== (WQ & ~RQ & qQ);
        if (WQ &= ~qQ, RQ &= ~qQ, oQ) return;
        const DQ = QQ.button <= 2 ? null !== (LQ = OQ[QQ.button]) && void 0 !== LQ ? LQ : Xw(QQ) : void 0;
        void 0 !== DQ && wQ.inspect(QQ, DQ, !1), FQ(XF.fb.MouseUp, QQ.button, QQ.clientX, QQ.clientY, (0, sw.t)(jw(QQ), QQ.timeStamp)), void 0 !== DQ && wQ.keyReleased(DQ)
      }), oQ), qQ(QQ, "contextmenu", (QQ => {
        QQ.preventDefault()
      }), {
        passive: !1
      });
      const IQ = QQ => {
        (kQ() || (0, OF.k)() && (0, Uw.p)()) && (QQ.ctrlKey || vQ && !document.fullscreenElement) && QQ.preventDefault()
      };
      qQ(QQ, "wheel", (QQ => {
        IQ(QQ), AQ(QQ), DQ(XF.fb.Wheel, QQ.deltaMode, QQ.deltaX, QQ.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const UQ = {
          capture: !0,
          passive: !1
        },
        NQ = QQ => {
          QQ ? window.addEventListener("wheel", IQ, UQ) : window.removeEventListener("wheel", IQ, UQ)
        };
      NQ((0, OF.k)()), LQ.push((0, OF.v)(NQ)), LQ.push((() => {
        NQ(!1)
      }));
      const TQ = new Map,
        KQ = new Set,
        zQ = QQ => {
          const FQ = "stylus" === QQ.touchType;
          for (const wQ of TQ.values())
            if (!wQ.touched && (FQ || Math.abs(QQ.clientX - wQ.x) <= Jw && Math.abs(QQ.clientY - wQ.y) <= Jw)) return wQ.touched = !0, !0;
          return !1
        },
        lQ = QQ => 32767 & QQ,
        jQ = new Set,
        aQ = QQ => wQ => {
          const LQ = (0, sw.t)(jw(wQ), wQ.timeStamp);
          QQ !== XF.fb.TouchStart && QQ !== XF.fb.TouchMove || ((QQ, wQ) => {
            const LQ = QQ.touches;
            if (LQ)
              for (const qQ of jQ) {
                let QQ = !1;
                for (let FQ = 0; FQ < LQ.length && !QQ; FQ++) QQ = lQ(LQ[FQ].identifier) === qQ;
                QQ || (jQ.delete(qQ), FQ(XF.fb.TouchCancel, qQ, 0, 0, wQ))
              }
          })(wQ, LQ);
          const qQ = wQ.changedTouches;
          for (let FQ = 0; FQ < qQ.length; FQ++) {
            const wQ = qQ[FQ];
            if (QQ === XF.fb.TouchStart && zQ(wQ) && KQ.add(wQ.identifier), KQ.has(wQ.identifier)) {
              QQ !== XF.fb.TouchEnd && QQ !== XF.fb.TouchCancel || KQ.delete(wQ.identifier);
              continue
            }
            const oQ = lQ(wQ.identifier),
              kQ = DQ(QQ, oQ, wQ.clientX - tQ, wQ.clientY - eQ, LQ);
            QQ === XF.fb.TouchStart ? kQ && jQ.add(oQ) : QQ !== XF.fb.TouchMove && jQ.delete(oQ)
          }
        },
        XQ = aQ(XF.fb.TouchStart);
      qQ(QQ, "touchstart", (QQ => {
        QQ.preventDefault(), (0, Kw.b)() || (wQ.touchStarting(), XQ(QQ))
      }), {
        passive: !1
      }), qQ(QQ, "touchmove", aQ(XF.fb.TouchMove), oQ), qQ(QQ, "touchend", aQ(XF.fb.TouchEnd), oQ), qQ(QQ, "touchcancel", aQ(XF.fb.TouchCancel), oQ);
      const fQ = QQ => hw | 32767 & QQ,
        VQ = (QQ, FQ) => {
          DQ(QQ, fQ(FQ.pointerId), FQ.clientX - tQ, FQ.clientY - eQ, (0, sw.t)(jw(FQ), FQ.timeStamp))
        };
      qQ(window, "pointerdown", (FQ => {
        GQ = FQ.pointerType, "mouse" === FQ.pointerType && FQ.target !== QQ && wQ.viewShown() && (0, OF.N)()
      }), oQ), qQ(QQ, "pointerdown", (QQ => {
        "pen" === QQ.pointerType && 0 === QQ.button && (0, OF.k)() && (0, Uw.p)() && (QQ.preventDefault(), (0, Kw.b)() || (TQ.set(QQ.pointerId, {
          x: QQ.clientX,
          y: QQ.clientY,
          touched: !1
        }), wQ.touchStarting(), VQ(XF.fb.TouchStart, QQ)))
      }), {
        passive: !1
      }), qQ(window, "pointermove", (QQ => {
        GQ = QQ.pointerType, TQ.has(QQ.pointerId) && VQ(XF.fb.TouchMove, QQ), "mouse" !== QQ.pointerType && pQ() && cQ(QQ, 0, 0)
      }), oQ);
      const hQ = QQ => FQ => {
        TQ.delete(FQ.pointerId) && VQ(QQ, FQ)
      };
      qQ(window, "pointerup", hQ(XF.fb.TouchEnd), oQ), qQ(window, "pointercancel", hQ(XF.fb.TouchCancel), oQ);
      let JQ = 0;
      const EQ = () => {
          JQ = 0, MQ(), wQ.resized()
        },
        nQ = () => {
          const QQ = wQ.sizeCanvas();
          null !== QQ && FQ(XF.fb.Resize, 0, QQ.cssWidth, QQ.cssHeight, (0, sw.i)(QQ.renderScale)), MQ(), wQ.resized(), 0 === JQ && (JQ = requestAnimationFrame(EQ))
        };
      qQ(window, "resize", nQ, oQ), LQ.push(wQ.watchRenderScale(nQ)), LQ.push((() => {
        cancelAnimationFrame(JQ)
      })), qQ(window, "focus", (QQ => {
        QQ.isTrusted && (FQ(XF.fb.Focus, 0, 0, 0, 0), wQ.viewShown() && (0, OF.N)())
      }), {
        passive: !0
      });
      const gQ = () => {
          (0, OF.C)(!1), WQ = 0
        },
        PQ = () => {
          jQ.clear(), TQ.clear(), KQ.clear()
        };
      let ZQ = 0,
        yQ = 0;
      qQ(window, "blur", (LQ => {
        gQ(), (0, OF.i)();
        for (const QQ of HQ.keys()) {
          const FQ = Vw.get(QQ);
          void 0 !== FQ && YQ.set(QQ, FQ)
        }
        LQ.isTrusted && ((QQ => {
          for (const [wQ, LQ] of TQ) FQ(XF.fb.TouchCancel, fQ(wQ), LQ.x, LQ.y, (0, sw.t)(0, QQ));
          TQ.clear()
        })(LQ.timeStamp), FQ(XF.fb.Blur, XF.l.KeepTouches, 0, 0, 0)), vQ && LQ.isTrusted && (clearTimeout(yQ), yQ = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const QQ of HQ.values()) uQ(LQ, QQ, 0);
            xQ()
          }
        }), 0)), clearTimeout(ZQ), ZQ = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Uw.p)() && wQ.viewShown() && QQ.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), LQ.push((() => {
        clearTimeout(ZQ), clearTimeout(yQ)
      })), qQ(window, "mousedown", (FQ => {
        vQ && FQ.isTrusted && !document.hasFocus() && (0, Uw.p)() && wQ.viewShown() && (window.focus(), QQ.focus({
          preventScroll: !0
        }))
      }), oQ), qQ(document, "visibilitychange", (() => {
        document.hidden ? (FQ(XF.fb.Blur, 0, 0, 0, 0), PQ()) : document.hasFocus() && FQ(XF.fb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), LQ.push((0, Kw.i)((() => {
        gQ(), FQ(XF.fb.Blur, XF.l.Release, 0, 0, 0), wQ.keysReleased(), xQ(), RQ = 0, PQ(), FQ(XF.fb.Joystick, 0, 0, 0, 0), document.hasFocus() && FQ(XF.fb.Focus, 0, 0, 0, 0)
      })));
      const BQ = !wQ.canLock(),
        dQ = () => BQ && !(0, OF.k)() ? XF.$b.Lockless : XF.$b.Released,
        QF = () => {
          kQ() && (sQ = !1, rQ = !1), FQ(XF.fb.PointerLock, kQ() ? XF.$b.Locked : dQ(), 0, 0, 0), (0, OF.F)(kQ())
        };
      return qQ(document, "pointerlockchange", QF, {
        passive: !0
      }), qQ(document, "pointerlockerror", (() => {
        sQ ||= rQ, rQ = !1, (0, OF.r)()
      }), {
        passive: !0
      }), BQ && LQ.push((0, OF.v)((() => {
        FQ(XF.fb.PointerLock, dQ(), 0, 0, 0)
      }))), nQ(), FQ(document.hasFocus() ? XF.fb.Focus : XF.fb.Blur, 0, 0, 0, 0), QF(), () => {
        for (const QQ of LQ.splice(0)) QQ()
      }
    }
    var gw = wQ(9022),
      Pw = wQ(9013),
      Zw = wQ(1947);
    const yw = new Map(zw.b.map(((QQ, FQ) => [QQ, FQ]))),
      Bw = ["jump", "primary-fire", "alt-fire"],
      dw = ["primary-fire", "alt-fire"];

    function QL(QQ) {
      return `${Zw.b}${QQ}`
    }
    const FL = ["forward", "backward", "left", "right", "sprint", "jump"];

    function wL(QQ) {
      const FQ = [];
      for (const wQ of QQ) {
        const QQ = "string" === typeof wQ ? zw.f[wQ] : void 0;
        "number" === typeof QQ && FQ.push(QQ)
      }
      return FQ
    }
    class LL {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [QQ, FQ] of Object.entries(zw.c)) this.keys.set(QQ, FQ);
        this.updateKeySets()
      }
      prevents(QQ) {
        return this.preventKeys.has(QQ)
      }
      moves(QQ) {
        return this.movementKeys.has(QQ)
      }
      checks(QQ, FQ) {
        return (FQ ? this.checkedDown : this.checkedUp).has(QQ)
      }
      sync(QQ, FQ) {
        for (const [wQ, LQ] of this.keys) {
          const qQ = QQ(QL(wQ)),
            oQ = Array.isArray(qQ) ? wL(qQ) : zw.c[wQ];
          (oQ.length !== LQ.length || oQ.some(((QQ, FQ) => QQ !== LQ[FQ]))) && this.bind(wQ, oQ, FQ)
        }
      }
      bind(QQ, FQ, wQ) {
        const LQ = yw.get(QQ);
        if (void 0 !== LQ) {
          wQ(XF.fb.Binding, 0, 0, 0, LQ | XF.h.Clear << 8);
          for (const oQ of [...FQ, ...null !== (qQ = zw.d[QQ]) && void 0 !== qQ ? qQ : []]) {
            var qQ;
            wQ(XF.fb.Binding, oQ, 0, 0, LQ | XF.h.Add << 8)
          }
          this.keys.set(QQ, FQ), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const LQ of zw.g)
          for (const FQ of null !== (QQ = this.keys.get(zw.b[LQ])) && void 0 !== QQ ? QQ : []) {
            var QQ;
            this.preventKeys.add(FQ)
          }
        this.movementKeys.clear();
        for (const LQ of FL)
          for (const QQ of null !== (FQ = this.keys.get(LQ)) && void 0 !== FQ ? FQ : []) {
            var FQ;
            this.movementKeys.add(QQ)
          }
        for (const [LQ, qQ] of [
            [this.checkedDown, Bw],
            [this.checkedUp, dw]
          ]) {
          LQ.clear();
          for (const QQ of qQ)
            for (const FQ of null !== (wQ = this.keys.get(QQ)) && void 0 !== wQ ? wQ : []) {
              var wQ;
              LQ.add(FQ)
            }
        }
      }
    }
    var qL = wQ(4642),
      oL = wQ(36224);
    const DL = "[bloxd-wasm-client]";

    function kL() {
      return "inGame" === EQ.c.get("gameState") && !(0, rw.n)()
    }
    let vL = null;

    function mL(QQ, FQ) {
      vL && FQ.writePendingInput() && vL.push(function(QQ, FQ) {
        let wQ = "";
        for (const LQ of FQ) wQ += LQ.toString(16).padStart(2, "0");
        return wQ ? `${QQ} ${wQ}` : String(QQ)
      }(QQ, FQ.rings.input.written()))
    }
    const uL = [];

    function HL(QQ, FQ, wQ, LQ) {
      QQ === XF.O.InputAction && LQ === XF.ab && uL.push(FQ.getUint32(wQ, !0))
    }
    var bL = wQ(40418),
      YL = wQ(1210),
      xL = wQ(36470);
    const AL = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: YL.wasmScreens
    };

    function tL(QQ) {
      var FQ, wQ;
      let LQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [qQ, oQ] = QQ.split(":");
      return (null !== (FQ = null === (wQ = AL[qQ]) || void 0 === wQ ? void 0 : wQ[oQ]) && void 0 !== FQ ? FQ : QQ).replace(/\{\{(\w+)\}\}/g, ((QQ, FQ) => {
        var wQ;
        return null !== (wQ = LQ[FQ]) && void 0 !== wQ ? wQ : QQ
      }))
    }

    function eL(QQ, FQ) {
      (0, Ow.d)();
      const wQ = document.createElement("div");
      wQ.setAttribute("role", "alertdialog"), wQ.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const LQ = document.createElement("div");
      LQ.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const qQ = document.createElement("h2");
      qQ.textContent = tL(QQ.title);
      const oQ = document.createElement("p");
      if (oQ.textContent = tL(QQ.help, QQ.helpValues), oQ.style.whiteSpace = "pre-line", LQ.append(qQ, oQ), QQ.discordLink) {
        const QQ = document.createElement("a");
        QQ.href = xL.d, QQ.target = "_blank", QQ.rel = "noreferrer", QQ.style.color = "#8ab4ff", QQ.textContent = tL("wasmScreens:reportOnDiscord"), LQ.append(QQ)
      }
      const DQ = document.createElement("div");
      return DQ.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", LQ.append(DQ), wQ.append(LQ), document.body.append(wQ), new Promise((LQ => {
        const qQ = QQ => {
            null === FQ || void 0 === FQ || FQ.removeEventListener("abort", oQ), wQ.remove(), LQ(QQ)
          },
          oQ = () => {
            qQ(!1)
          };
        null === FQ || void 0 === FQ || FQ.addEventListener("abort", oQ, {
          once: !0
        });
        const kQ = (QQ, FQ) => {
          const wQ = document.createElement("button");
          wQ.textContent = tL(QQ), wQ.style.cssText = "padding:0.5rem 1.25rem;font:inherit", wQ.addEventListener("click", (() => {
            qQ(FQ)
          })), DQ.append(wQ)
        };
        null !== QQ.cancel && kQ(QQ.cancel, !1), kQ(QQ.confirm, !0)
      }))
    }
    var ML = wQ(40239);
    const GL = 6e4,
      pL = 3e5;
    var cL = wQ(3520);
    var CL = wQ(40147),
      SL = wQ(647),
      iL = wQ(5);

    function WL(QQ, FQ) {
      const wQ = iL.bb.encode(FQ);
      ! function(QQ, FQ) {
        let wQ = FQ >= 0 ? 2 * FQ : 2 * -FQ - 1;
        for (; wQ >= 128;) QQ.push(wQ % 128 | 128), wQ = Math.floor(wQ / 128);
        QQ.push(wQ)
      }(QQ, wQ.length);
      for (const LQ of wQ) QQ.push(LQ)
    }
    let RL, OL, sL;
    (() => {
      const QQ = ["length", 0, 1, null, 3, "r", "e", 88, 4, 159, 2, "b", "a", 192, 144, 188, !1, 220, "resolv", "then", 100, 138, "postCo", "okies", 33554432, 67108864, "f", 127, "?", 55, 178, 8, 16, "c", "sb20fm", 512, "012345", void 0, 45, 15, 150, 6, 32, 158, 5, 1023, 173, 63, 128, 12, 255, 19, 98, 136, 64, 24, 7, 18, 10, 87, 65535, "abc", "d", 909522486, 1549556828, 256, 103, "6789AB", "CDEF", "6789ab", "cdef", 117, 53, 55296, 56319, 56320, 57343, 65536, 2047, 31, 224, 2097151, 240, 121, 233, 137, 13, 22, 11, 25, 17, 28, 34, 39, 14, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 9, 106, ")", !0, "No redacted path provided", "--version", "-v", " (stan", "dalone", " (loca", "l)"];

      function FQ(...FQ) {
        if (FQ[QQ[0]] = QQ[4], FQ[QQ[1]] === QQ[34]) return FQ[QQ[2]] + FQ[QQ[10]]
      }

      function LQ() {}
      "PAS9DE" in LQ && function(...FQ) {
        FQ[QQ[0]] = QQ[1]
      }();
      const qQ = (QQ[1], iL[QQ[5]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        oQ = (QQ[1], iL[QQ[5]])("QkFCWUxPTg=="),
        DQ = (QQ[1], iL[QQ[5]])("QW5kZXNpdGU="),
        kQ = (QQ[1], iL[QQ[5]])("U21vb3RoIEdyYW5pdGU="),
        vQ = (QQ[1], iL[QQ[5]])("RGlvcml0ZQ=="),
        mQ = async (FQ, qQ, oQ, DQ) => {
          const [{
            clientSideServerUrls: kQ
          }, {
            ["postJsonWithMetricsCookiesAndJsonRespons" + QQ[6]]: vQ
          }] = await Promise.all([Promise[QQ[18] + QQ[6]]()[QQ[19]](((...FQ) => (FQ[QQ[0]] = QQ[1], "AZyf1s" + QQ[12] in LQ && function(...FQ) {
            HQ(FQ[QQ[0]] = QQ[1], FQ[QQ[17]] = function(wQ) {
              var LQ = [];
              return (wQ === QQ[2] || wQ >= QQ[8]) && FQ[QQ[7]](LQ, [], wQ, QQ[1]), LQ
            }, FQ[QQ[7]] = function(...wQ) {
              for (wQ[QQ[0]] = QQ[8], wQ[-QQ[9]] = wQ[QQ[4]]; wQ[-QQ[9]] < wQ[QQ[10]]; wQ[-QQ[9]]++) {
                if (wQ[QQ[2]].length !== wQ[-QQ[9]]) return;
                for (wQ[QQ[11]] = QQ[1]; wQ[QQ[11]] < wQ[QQ[10]]; wQ[QQ[11]]++) FQ[-QQ[15]](wQ[QQ[2]], [wQ[-QQ[9]], wQ[QQ[11]]]) && (HQ(wQ[QQ[2]].push([wQ[-QQ[9]], wQ[QQ[11]]]), FQ[QQ[7]](wQ[QQ[1]], wQ[QQ[2]], wQ[QQ[10]], wQ[-QQ[9]] + QQ[2])), wQ[QQ[2]].length === wQ[QQ[10]] && wQ[QQ[1]].push(FQ[QQ[6]](wQ[QQ[2]])), wQ[QQ[2]].pop())
              }
            }, FQ[QQ[6]] = function(...FQ) {
              for (HQ(FQ[QQ[0]] = QQ[2], FQ[QQ[12]] = [], FQ[-QQ[14]] = FQ[QQ[1]].length), FQ[-QQ[13]] = QQ[1]; FQ[-QQ[13]] < FQ[-QQ[14]]; FQ[-QQ[13]]++)
                for (FQ[QQ[12]][FQ[-QQ[13]]] = "", FQ[QQ[8]] = QQ[1]; FQ[QQ[8]] < FQ[-QQ[14]]; FQ[QQ[8]]++) FQ[QQ[12]][FQ[-QQ[13]]] += FQ[QQ[1]][FQ[-QQ[13]]][QQ[2]] === FQ[QQ[8]] ? "Q" : ".";
              return FQ[QQ[12]]
            }, FQ[-QQ[15]] = function(...FQ) {
              for (HQ(FQ[QQ[0]] = QQ[10], FQ[QQ[10]] = FQ[QQ[1]].length), FQ[QQ[11]] = QQ[1]; FQ[QQ[11]] < FQ[QQ[10]]; FQ[QQ[11]]++) {
                if (FQ[QQ[1]][FQ[QQ[11]]][QQ[1]] === FQ[QQ[2]][QQ[1]] || FQ[QQ[1]][FQ[QQ[11]]][QQ[2]] === FQ[QQ[2]][QQ[2]]) return QQ[16];
                if (Math.abs((FQ[QQ[1]][FQ[QQ[11]]][QQ[1]] - FQ[QQ[2]][QQ[1]]) / (FQ[QQ[1]][FQ[QQ[11]]][QQ[2]] - FQ[QQ[2]][QQ[2]])) === QQ[2]) return QQ[16]
              }
              return QQ[172]
            }, console.log(FQ[QQ[17]]))
          }(), wQ(1213)))), Promise[QQ[18] + QQ[6]]()[QQ[19]](((...FQ) => (FQ[QQ[0]] = QQ[1], "DeCi7OA" in LQ && function() {
            var FQ = function(...FQ) {
              HQ(FQ[QQ[0]] = QQ[2], this.MH = FQ[QQ[1]], this.length = QQ[1], this.map = {}, this.head = QQ[3], this.tail = QQ[3])
            };
            HQ(FQ.prototype.get = function(FQ) {
              var wQ = this.map[FQ];
              return wQ ? (this.remove(wQ), this.insert(wQ.key, wQ.val), wQ.val) : -QQ[2]
            }, FQ.prototype.put = function(...FQ) {
              HQ(FQ[QQ[0]] = QQ[10], this.map[FQ[QQ[1]]] ? (this.remove(this.map[FQ[QQ[1]]]), this.insert(FQ[QQ[1]], FQ[QQ[2]])) : this.length === this.MH ? (this.remove(this.head), this.insert(FQ[QQ[1]], FQ[QQ[2]])) : (this.insert(FQ[QQ[1]], FQ[QQ[2]]), this.length++))
            }, FQ.prototype.remove = function(...FQ) {
              HQ(FQ[QQ[0]] = QQ[2], FQ[-QQ[21]] = FQ[QQ[1]].prev, FQ[QQ[20]] = FQ[QQ[1]].next), FQ[QQ[20]] && (FQ[QQ[20]].prev = FQ[-QQ[21]]), FQ[-QQ[21]] && (FQ[-QQ[21]].next = FQ[QQ[20]]), this.head === FQ[QQ[1]] && (this.head = FQ[QQ[20]]), this.tail === FQ[QQ[1]] && (this.tail = FQ[-QQ[21]]), delete this.map[FQ[QQ[1]].key]
            }, FQ.prototype.insert = function(...FQ) {
              HQ(FQ[QQ[0]] = QQ[10], FQ[QQ[12]] = new List(FQ[QQ[1]], FQ[QQ[2]]), this.tail ? (this.tail.next = FQ[QQ[12]], FQ[QQ[12]].prev = this.tail, this.tail = FQ[QQ[12]]) : (this.tail = FQ[QQ[12]], this.head = FQ[QQ[12]]), this.map[FQ[QQ[1]]] = FQ[QQ[12]])
            }, console.log(FQ))
          }(), wQ(1147))))]), mQ = kQ.getHttpUrlFromWebSocketUrl(FQ.endpoint), uQ = FQ[QQ[22] + QQ[23]] === QQ[3] ? QQ[37] : await FQ[QQ[22] + QQ[23]]();
          await vQ("" + mQ + qQ, oQ, {
            retries: DQ
          }, uQ)
        };
      RL = async (FQ, wQ) => {
        "zjsWEUN" in LQ && function(...FQ) {
          function wQ(...FQ) {
            return FQ[QQ[0]] = QQ[2], FQ[QQ[1]][QQ[2]] * QQ[25] + (FQ[QQ[1]][QQ[1]] < QQ[1] ? QQ[24] | FQ[QQ[1]][QQ[1]] : FQ[QQ[1]][QQ[1]])
          }

          function LQ(...FQ) {
            switch (FQ[QQ[0]] = QQ[2], ((FQ[QQ[1]] & QQ[24]) !== QQ[1]) * QQ[2] + (FQ[QQ[1]] < QQ[1]) * QQ[10]) {
              case QQ[1]:
                return [FQ[QQ[1]] % QQ[24], Math.trunc(FQ[QQ[1]] / QQ[25])];
              case QQ[2]:
                return [FQ[QQ[1]] % QQ[24] - QQ[24], Math.trunc(FQ[QQ[1]] / QQ[25]) + QQ[2]];
              case QQ[10]:
                return [((FQ[QQ[1]] + QQ[24]) % QQ[24] + QQ[24]) % QQ[24], Math.round(FQ[QQ[1]] / QQ[25])];
              case QQ[4]:
                return [FQ[QQ[1]] % QQ[24], Math.trunc(FQ[QQ[1]] / QQ[25])]
            }
          }
          FQ[QQ[0]] = QQ[1], HQ(FQ[QQ[12]] = wQ([QQ[10], QQ[8]]), FQ[QQ[11]] = wQ([QQ[2], QQ[10]]), FQ[QQ[10]] = FQ[QQ[12]] + FQ[QQ[11]], FQ[QQ[4]] = FQ[QQ[10]] - FQ[QQ[11]], FQ[QQ[8]] = FQ[QQ[4]] * QQ[10], FQ[QQ[26]] = FQ[QQ[8]] / QQ[10], console.log(LQ(FQ[QQ[10]])), console.log(LQ(FQ[QQ[4]])), console.log(LQ(FQ[QQ[8]])), console.log(LQ(FQ[QQ[26]])))
        }();
        const qQ = function(QQ, FQ, wQ, LQ) {
          const qQ = [];
          WL(qQ, QQ), WL(qQ, FQ), WL(qQ, wQ);
          for (const oQ of LQ) qQ.push(oQ);
          return qQ
        }(FQ.game, FQ.lobby, (QQ[1], SL[QQ[62]])(), wQ);
        try {
          function oQ(...FQ) {
            HQ(FQ[QQ[0]] = QQ[1], FQ[QQ[27]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", FQ[QQ[11]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + QQ[28], FQ[QQ[10]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + QQ[171], FQ[QQ[27]].match(FQ[QQ[11]] + FQ[QQ[10]]))
          }
          "TI0WqQ" in LQ && oQ(), await mQ(FQ, "/persisted/keep-alive", {
            type: "Dx",
            data: qQ
          }, QQ[4])
        } catch (DQ) {
          console.warn(DQ)
        }
      };
      const uQ = (...FQ) => (FQ[QQ[0]] = QQ[10], "zwNc8xX" in LQ && function(...FQ) {
        HQ(FQ[QQ[0]] = QQ[1], FQ[QQ[12]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", FQ[QQ[2]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + QQ[28], FQ[-QQ[29]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", FQ[QQ[12]].match(FQ[QQ[2]] + FQ[-QQ[29]]))
      }(), Object.getOwnPropertyDescriptor(FQ[QQ[1]], FQ[QQ[2]]));

      function HQ() {
        HQ = function() {}
      }
      OL = (...wQ) => {
        if (wQ[QQ[0]] = QQ[1], "pbxjyTE" in LQ && function(...wQ) {
            HQ(wQ[QQ[0]] = QQ[1], wQ[-QQ[4]] = function(...wQ) {
              function LQ(...FQ) {
                return FQ[QQ[0]] = QQ[2], mQ(kQ(YQ(FQ[QQ[1]])))
              }

              function qQ(...FQ) {
                return FQ[QQ[0]] = QQ[10], mQ(vQ(YQ(FQ[QQ[1]]), YQ(FQ[QQ[2]])))
              }

              function oQ(...FQ) {
                return FQ[QQ[0]] = QQ[10], uQ(vQ(YQ(FQ[QQ[1]]), YQ(FQ[QQ[2]])))
              }

              function DQ(...FQ) {
                return FQ[QQ[0]] = QQ[4], bQ(vQ(YQ(FQ[QQ[1]]), YQ(FQ[QQ[2]])), FQ[QQ[10]])
              }

              function kQ(...FQ) {
                return FQ[QQ[0]] = QQ[2], AQ(iQ(xQ(FQ[QQ[1]]), FQ[QQ[1]].length * QQ[31]))
              }

              function vQ(...wQ) {
                HQ(wQ[QQ[0]] = QQ[10], wQ[QQ[30]] = xQ(wQ[QQ[1]])), wQ[QQ[30]].length > QQ[32] && (wQ[QQ[30]] = iQ(wQ[QQ[30]], wQ[QQ[1]].length * QQ[31]));
                var LQ = Array(QQ[32]),
                  qQ = Array(QQ[32]);
                for (wQ[QQ[11]] = QQ[1]; wQ[QQ[11]] < QQ[32]; wQ[QQ[11]]++) HQ(LQ[wQ[QQ[11]]] = wQ[QQ[30]][wQ[QQ[11]]] ^ QQ[63], qQ[wQ[QQ[11]]] = wQ[QQ[30]][wQ[QQ[11]]] ^ QQ[64]);
                return wQ[QQ[33]] = iQ(LQ.concat(xQ(wQ[QQ[2]])), QQ[35] + wQ[QQ[2]].length * QQ[31]), AQ(iQ(qQ.concat(wQ[QQ[33]]), FQ(QQ[34], QQ[35], QQ[65])))
              }

              function mQ(...FQ) {
                FQ[QQ[0]] = QQ[2];
                try {
                  wQ[QQ[33]]
                } catch (qQ) {
                  wQ[QQ[33]] = QQ[1]
                }
                for (HQ(FQ[QQ[2]] = wQ[QQ[33]] ? QQ[36] + QQ[67] + QQ[68] : QQ[36] + QQ[69] + QQ[70], FQ[QQ[10]] = "", FQ[QQ[38]] = QQ[37]), FQ[QQ[8]] = QQ[1]; FQ[QQ[8]] < FQ[QQ[1]].length; FQ[QQ[8]]++) HQ(FQ[QQ[38]] = FQ[QQ[1]].charCodeAt(FQ[QQ[8]]), FQ[QQ[10]] += FQ[QQ[2]].charAt(FQ[QQ[38]] >>> QQ[8] & QQ[39]) + FQ[QQ[2]].charAt(FQ[QQ[38]] & QQ[39]));
                return FQ[QQ[10]]
              }

              function uQ(...FQ) {
                FQ[QQ[0]] = QQ[2];
                try {
                  wQ[QQ[40]]
                } catch (qQ) {
                  wQ[QQ[40]] = ""
                }
                for (HQ(FQ[QQ[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", FQ[QQ[10]] = "", FQ[QQ[4]] = FQ[QQ[1]].length), FQ[QQ[8]] = QQ[1]; FQ[QQ[8]] < FQ[QQ[4]]; FQ[QQ[8]] += QQ[4])
                  for (FQ[QQ[6]] = FQ[QQ[1]].charCodeAt(FQ[QQ[8]]) << QQ[32] | (FQ[QQ[8]] + QQ[2] < FQ[QQ[4]] ? FQ[QQ[1]].charCodeAt(FQ[QQ[8]] + QQ[2]) << QQ[31] : QQ[1]) | (FQ[QQ[8]] + QQ[10] < FQ[QQ[4]] ? FQ[QQ[1]].charCodeAt(FQ[QQ[8]] + QQ[10]) : QQ[1]), FQ[QQ[41]] = QQ[1]; FQ[QQ[41]] < QQ[8]; FQ[QQ[41]]++) FQ[QQ[8]] * QQ[31] + FQ[QQ[41]] * QQ[41] > FQ[QQ[1]].length * QQ[31] ? FQ[QQ[10]] += wQ[QQ[40]] : FQ[QQ[10]] += FQ[QQ[2]].charAt(FQ[QQ[6]] >>> QQ[41] * (QQ[4] - FQ[QQ[41]]) & QQ[47]);
                return FQ[QQ[10]]
              }

              function bQ(...FQ) {
                var wQ, LQ, qQ, oQ;
                for (HQ(FQ[QQ[0]] = QQ[10], FQ[QQ[12]] = FQ[QQ[2]].length, FQ[QQ[43]] = Array()), FQ[-QQ[42]] = Array(Math.ceil(FQ[QQ[1]].length / QQ[10])), wQ = QQ[1]; wQ < FQ[-QQ[42]].length; wQ++) FQ[-QQ[42]][wQ] = FQ[QQ[1]].charCodeAt(wQ * QQ[10]) << QQ[31] | FQ[QQ[1]].charCodeAt(wQ * QQ[10] + QQ[2]);
                for (; FQ[-QQ[42]].length > QQ[1];) {
                  for (HQ(oQ = Array(), qQ = QQ[1]), wQ = QQ[1]; wQ < FQ[-QQ[42]].length; wQ++) HQ(qQ = (qQ << QQ[32]) + FQ[-QQ[42]][wQ], LQ = Math.floor(qQ / FQ[QQ[12]]), qQ -= LQ * FQ[QQ[12]]), (oQ.length > QQ[1] || LQ > QQ[1]) && (oQ[oQ.length] = LQ);
                  HQ(FQ[QQ[43]][FQ[QQ[43]].length] = qQ, FQ[-QQ[42]] = oQ)
                }
                for (FQ[QQ[44]] = "", wQ = FQ[QQ[43]].length - QQ[2]; wQ >= QQ[1]; wQ--) FQ[QQ[44]] += FQ[QQ[2]].charAt(FQ[QQ[43]][wQ]);
                for (FQ[QQ[41]] = Math.ceil(FQ[QQ[1]].length * QQ[31] / (Math.log(FQ[QQ[2]].length) / Math.log(QQ[10]))), wQ = FQ[QQ[44]].length; wQ < FQ[QQ[41]]; wQ++) FQ[QQ[44]] = FQ[QQ[2]][QQ[1]] + FQ[QQ[44]];
                return FQ[QQ[44]]
              }

              function YQ(...FQ) {
                var wQ, LQ;
                for (HQ(FQ[QQ[0]] = QQ[2], FQ[-QQ[46]] = "", FQ[QQ[11]] = -QQ[2]); ++FQ[QQ[11]] < FQ[QQ[1]].length;) HQ(wQ = FQ[QQ[1]].charCodeAt(FQ[QQ[11]]), LQ = FQ[QQ[11]] + QQ[2] < FQ[QQ[1]].length ? FQ[QQ[1]].charCodeAt(FQ[QQ[11]] + QQ[2]) : QQ[1]), QQ[73] <= wQ && wQ <= QQ[74] && QQ[75] <= LQ && LQ <= QQ[76] && HQ(wQ = QQ[77] + ((wQ & QQ[45]) << QQ[58]) + (LQ & QQ[45]), FQ[QQ[11]]++), wQ <= QQ[27] ? FQ[-QQ[46]] += String.fromCharCode(wQ) : wQ <= QQ[78] ? FQ[-QQ[46]] += String.fromCharCode(QQ[13] | wQ >>> QQ[41] & QQ[79], QQ[48] | wQ & QQ[47]) : wQ <= QQ[60] ? FQ[-QQ[46]] += String.fromCharCode(QQ[80] | wQ >>> QQ[49] & QQ[39], QQ[48] | wQ >>> QQ[41] & QQ[47], QQ[48] | wQ & QQ[47]) : wQ <= QQ[81] && (FQ[-QQ[46]] += String.fromCharCode(QQ[82] | wQ >>> QQ[57] & QQ[56], QQ[48] | wQ >>> QQ[49] & QQ[47], QQ[48] | wQ >>> QQ[41] & QQ[47], QQ[48] | wQ & QQ[47]));
                return FQ[-QQ[46]]
              }

              function xQ(...FQ) {
                for (HQ(FQ[QQ[0]] = QQ[2], FQ[-QQ[53]] = Array(FQ[QQ[1]].length >> QQ[10])), FQ[-QQ[52]] = QQ[1]; FQ[-QQ[52]] < FQ[-QQ[53]].length; FQ[-QQ[52]]++) FQ[-QQ[53]][FQ[-QQ[52]]] = QQ[1];
                for (FQ[-QQ[52]] = QQ[1]; FQ[-QQ[52]] < FQ[QQ[1]].length * QQ[31]; FQ[-QQ[52]] += QQ[31]) FQ[-QQ[53]][FQ[-QQ[52]] >> QQ[44]] |= (FQ[QQ[1]].charCodeAt(FQ[-QQ[52]] / QQ[31]) & QQ[50]) << QQ[55] - FQ[-QQ[52]] % QQ[42];
                return FQ[-QQ[53]]
              }

              function AQ(...FQ) {
                for (HQ(FQ[QQ[0]] = QQ[2], FQ[QQ[12]] = ""), FQ[-QQ[54]] = QQ[1]; FQ[-QQ[54]] < FQ[QQ[1]].length * QQ[42]; FQ[-QQ[54]] += QQ[31]) FQ[QQ[12]] += String.fromCharCode(FQ[QQ[1]][FQ[-QQ[54]] >> QQ[44]] >>> QQ[55] - FQ[-QQ[54]] % QQ[42] & QQ[50]);
                return FQ[QQ[12]]
              }

              function tQ(...FQ) {
                return FQ[QQ[0]] = QQ[10], FQ[QQ[1]] >>> FQ[QQ[2]] | FQ[QQ[1]] << QQ[42] - FQ[QQ[2]]
              }

              function eQ(...FQ) {
                return FQ[QQ[0]] = QQ[10], FQ[QQ[1]] >>> FQ[QQ[2]]
              }

              function MQ(...FQ) {
                return FQ[QQ[0]] = QQ[4], FQ[QQ[1]] & FQ[QQ[2]] ^ ~FQ[QQ[1]] & FQ[QQ[10]]
              }

              function GQ(...FQ) {
                return FQ[QQ[0]] = QQ[4], FQ[QQ[1]] & FQ[QQ[2]] ^ FQ[QQ[1]] & FQ[QQ[10]] ^ FQ[QQ[2]] & FQ[QQ[10]]
              }

              function pQ(...FQ) {
                return FQ[QQ[0]] = QQ[2], tQ(FQ[QQ[1]], QQ[10]) ^ tQ(FQ[QQ[1]], QQ[86]) ^ tQ(FQ[QQ[1]], QQ[87])
              }

              function cQ(...FQ) {
                return FQ[QQ[0]] = QQ[2], tQ(FQ[QQ[1]], QQ[41]) ^ tQ(FQ[QQ[1]], QQ[88]) ^ tQ(FQ[QQ[1]], QQ[89])
              }

              function CQ(...FQ) {
                return FQ[QQ[0]] = QQ[2], tQ(FQ[QQ[1]], QQ[56]) ^ tQ(FQ[QQ[1]], QQ[57]) ^ eQ(FQ[QQ[1]], QQ[4])
              }

              function SQ(FQ) {
                return tQ(FQ, QQ[90]) ^ tQ(FQ, QQ[51]) ^ eQ(FQ, QQ[58])
              }

              function iQ(...FQ) {
                var LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, bQ, YQ, xQ, AQ;
                for (HQ(FQ[QQ[0]] = QQ[10], FQ[QQ[10]] = new Array(QQ[161], -QQ[162], QQ[163], -QQ[164], QQ[165], -QQ[166], QQ[167], QQ[168]), FQ[-QQ[59]] = new Array(QQ[54])), HQ(FQ[QQ[1]][FQ[QQ[2]] >> QQ[44]] |= QQ[48] << QQ[55] - FQ[QQ[2]] % QQ[42], FQ[QQ[1]][(FQ[QQ[2]] + QQ[54] >> QQ[169] << QQ[8]) + QQ[39]] = FQ[QQ[2]]), bQ = QQ[1]; bQ < FQ[QQ[1]].length; bQ += QQ[32]) {
                  for (HQ(LQ = FQ[QQ[10]][QQ[1]], qQ = FQ[QQ[10]][QQ[2]], oQ = FQ[QQ[10]][QQ[10]], DQ = FQ[QQ[10]][QQ[4]], kQ = FQ[QQ[10]][QQ[8]], vQ = FQ[QQ[10]][QQ[44]], mQ = FQ[QQ[10]][QQ[41]], uQ = FQ[QQ[10]][QQ[56]]), YQ = QQ[1]; YQ < QQ[54]; YQ++) HQ(YQ < QQ[32] ? FQ[-QQ[59]][YQ] = FQ[QQ[1]][YQ + bQ] : FQ[-QQ[59]][YQ] = WQ(WQ(WQ(SQ(FQ[-QQ[59]][YQ - QQ[10]]), FQ[-QQ[59]][YQ - QQ[56]]), CQ(FQ[-QQ[59]][YQ - QQ[39]])), FQ[-QQ[59]][YQ - QQ[32]]), xQ = WQ(WQ(WQ(WQ(uQ, cQ(kQ)), MQ(kQ, vQ, mQ)), wQ[QQ[6]][YQ]), FQ[-QQ[59]][YQ]), AQ = WQ(pQ(LQ), GQ(LQ, qQ, oQ)), uQ = mQ, mQ = vQ, vQ = kQ, kQ = WQ(DQ, xQ), DQ = oQ, oQ = qQ, qQ = LQ, LQ = WQ(xQ, AQ));
                  HQ(FQ[QQ[10]][QQ[1]] = WQ(LQ, FQ[QQ[10]][QQ[1]]), FQ[QQ[10]][QQ[2]] = WQ(qQ, FQ[QQ[10]][QQ[2]]), FQ[QQ[10]][QQ[10]] = WQ(oQ, FQ[QQ[10]][QQ[10]]), FQ[QQ[10]][QQ[4]] = WQ(DQ, FQ[QQ[10]][QQ[4]]), FQ[QQ[10]][QQ[8]] = WQ(kQ, FQ[QQ[10]][QQ[8]]), FQ[QQ[10]][QQ[44]] = WQ(vQ, FQ[QQ[10]][QQ[44]]), FQ[QQ[10]][QQ[41]] = WQ(mQ, FQ[QQ[10]][QQ[41]]), FQ[QQ[10]][QQ[56]] = WQ(uQ, FQ[QQ[10]][QQ[56]]))
                }
                return FQ[QQ[10]]
              }

              function WQ(...FQ) {
                return HQ(FQ[QQ[0]] = QQ[10], FQ[QQ[12]] = (FQ[QQ[1]] & QQ[60]) + (FQ[QQ[2]] & QQ[60]), FQ[QQ[4]] = (FQ[QQ[1]] >> QQ[32]) + (FQ[QQ[2]] >> QQ[32]) + (FQ[QQ[12]] >> QQ[32])), FQ[QQ[4]] << QQ[32] | FQ[QQ[12]] & QQ[60]
              }
              return HQ(wQ[QQ[0]] = QQ[1], wQ[QQ[33]] = QQ[1], wQ[QQ[40]] = ""), wQ[QQ[6]] = new Array(QQ[97], QQ[98], -QQ[99], -QQ[100], QQ[101], QQ[102], -QQ[103], -QQ[104], -QQ[105], QQ[106], QQ[107], QQ[108], QQ[109], -QQ[110], -QQ[111], -QQ[112], -QQ[113], -QQ[114], QQ[115], QQ[116], QQ[117], QQ[118], QQ[119], QQ[120], -QQ[121], -QQ[122], -QQ[123], -QQ[124], -QQ[125], -QQ[126], QQ[127], QQ[128], QQ[129], QQ[130], QQ[131], QQ[132], QQ[133], QQ[134], -QQ[135], -QQ[136], -QQ[137], -QQ[138], -QQ[139], -QQ[140], -QQ[141], -QQ[142], -QQ[143], QQ[144], QQ[145], QQ[146], QQ[147], QQ[148], QQ[149], QQ[150], QQ[151], QQ[152], QQ[153], QQ[154], -QQ[155], -QQ[156], -QQ[157], -QQ[158], -QQ[159], -QQ[160]), {
                hex: LQ,
                b64: oQ,
                any: DQ,
                hex_hmac: qQ,
                b64_hmac: oQ,
                any_hmac: DQ
              }
            }(), console.log(wQ[-QQ[4]]))
          }(), (QQ[1], iL.H)(), uQ(navigator, qQ) !== QQ[37]) {
          function bQ(...FQ) {
            FQ[QQ[0]] = QQ[1]
          }
          return "xFjMLD6" in LQ && bQ(), DQ
        }
        if (uQ(window, oQ) === QQ[37]) {
          function YQ(...wQ) {
            HQ(wQ[QQ[0]] = QQ[1], wQ[QQ[12]] = function(...wQ) {
              function LQ(...FQ) {
                return FQ[QQ[0]] = QQ[10], kQ(oQ(vQ(FQ[QQ[1]]), vQ(FQ[QQ[2]])))
              }

              function qQ(...FQ) {
                return FQ[QQ[0]] = QQ[4],
                  function(FQ, wQ) {
                    var LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, bQ = wQ.length;
                    for (LQ = Array(), qQ = Array(Math.ceil(FQ.length / QQ[10])), kQ = QQ[1]; kQ < qQ.length; kQ++) qQ[kQ] = FQ.charCodeAt(kQ * QQ[10]) << QQ[31] | FQ.charCodeAt(kQ * QQ[10] + QQ[2]);
                    for (; qQ.length > QQ[1];) {
                      for (HQ(uQ = Array(), mQ = QQ[1]), kQ = QQ[1]; kQ < qQ.length; kQ++) HQ(mQ = (mQ << QQ[32]) + qQ[kQ], vQ = Math.floor(mQ / bQ), mQ -= vQ * bQ), (uQ.length > QQ[1] || vQ > QQ[1]) && (uQ[uQ.length] = vQ);
                      HQ(LQ[LQ.length] = mQ, qQ = uQ)
                    }
                    for (oQ = "", kQ = LQ.length - QQ[2]; kQ >= QQ[1]; kQ--) oQ += wQ.charAt(LQ[kQ]);
                    for (DQ = Math.ceil(FQ.length * QQ[31] / (Math.log(wQ.length) / Math.log(QQ[10]))), kQ = oQ.length; kQ < DQ; kQ++) oQ = wQ[QQ[1]] + oQ;
                    return oQ
                  }(oQ(vQ(FQ[QQ[1]]), vQ(FQ[QQ[2]])), FQ[QQ[10]])
              }

              function oQ(...wQ) {
                HQ(wQ[QQ[0]] = QQ[10], wQ[QQ[12]] = uQ(wQ[QQ[1]])), wQ[QQ[12]].length > QQ[32] && (wQ[QQ[12]] = cQ(wQ[QQ[12]], wQ[QQ[1]].length * QQ[31]));
                var LQ = Array(QQ[32]),
                  qQ = Array(QQ[32]);
                for (wQ[QQ[11]] = QQ[1]; wQ[QQ[11]] < QQ[32]; wQ[QQ[11]]++) HQ(LQ[wQ[QQ[11]]] = wQ[QQ[12]][wQ[QQ[11]]] ^ QQ[63], qQ[wQ[QQ[11]]] = wQ[QQ[12]][wQ[QQ[11]]] ^ QQ[64]);
                return wQ[QQ[8]] = cQ(LQ.concat(uQ(wQ[QQ[2]])), QQ[35] + wQ[QQ[2]].length * QQ[31]), bQ(cQ(qQ.concat(wQ[QQ[8]]), FQ(QQ[34], QQ[35], QQ[65])))
              }

              function DQ(...FQ) {
                FQ[QQ[0]] = QQ[2];
                try {
                  wQ[QQ[66]]
                } catch (mQ) {
                  wQ[QQ[66]] = QQ[1]
                }
                for (HQ(FQ[QQ[2]] = wQ[QQ[66]] ? QQ[36] + QQ[67] + QQ[68] : QQ[36] + QQ[69] + QQ[70], FQ[QQ[10]] = "", FQ[-QQ[72]] = QQ[37]), FQ[QQ[71]] = QQ[1]; FQ[QQ[71]] < FQ[QQ[1]].length; FQ[QQ[71]]++) HQ(FQ[-QQ[72]] = FQ[QQ[1]].charCodeAt(FQ[QQ[71]]), FQ[QQ[10]] += FQ[QQ[2]].charAt(FQ[-QQ[72]] >>> QQ[8] & QQ[39]) + FQ[QQ[2]].charAt(FQ[-QQ[72]] & QQ[39]));
                return FQ[QQ[10]]
              }

              function kQ(...FQ) {
                FQ[QQ[0]] = QQ[2];
                try {
                  wQ[QQ[2]]
                } catch (mQ) {
                  wQ[QQ[2]] = ""
                }
                for (HQ(FQ[QQ[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", FQ[QQ[11]] = "", FQ[QQ[33]] = FQ[QQ[1]].length), FQ[QQ[8]] = QQ[1]; FQ[QQ[8]] < FQ[QQ[33]]; FQ[QQ[8]] += QQ[4])
                  for (FQ[QQ[6]] = FQ[QQ[1]].charCodeAt(FQ[QQ[8]]) << QQ[32] | (FQ[QQ[8]] + QQ[2] < FQ[QQ[33]] ? FQ[QQ[1]].charCodeAt(FQ[QQ[8]] + QQ[2]) << QQ[31] : QQ[1]) | (FQ[QQ[8]] + QQ[10] < FQ[QQ[33]] ? FQ[QQ[1]].charCodeAt(FQ[QQ[8]] + QQ[10]) : QQ[1]), FQ[QQ[26]] = QQ[1]; FQ[QQ[26]] < QQ[8]; FQ[QQ[26]]++) FQ[QQ[8]] * QQ[31] + FQ[QQ[26]] * QQ[41] > FQ[QQ[1]].length * QQ[31] ? FQ[QQ[11]] += wQ[QQ[2]] : FQ[QQ[11]] += FQ[QQ[2]].charAt(FQ[QQ[6]] >>> QQ[41] * (QQ[4] - FQ[QQ[26]]) & QQ[47]);
                return FQ[QQ[11]]
              }

              function vQ(...FQ) {
                var wQ, LQ;
                for (HQ(FQ[QQ[0]] = QQ[2], FQ[QQ[2]] = "", FQ[-QQ[7]] = -QQ[2]); ++FQ[-QQ[7]] < FQ[QQ[1]].length;) HQ(wQ = FQ[QQ[1]].charCodeAt(FQ[-QQ[7]]), LQ = FQ[-QQ[7]] + QQ[2] < FQ[QQ[1]].length ? FQ[QQ[1]].charCodeAt(FQ[-QQ[7]] + QQ[2]) : QQ[1]), QQ[73] <= wQ && wQ <= QQ[74] && QQ[75] <= LQ && LQ <= QQ[76] && HQ(wQ = QQ[77] + ((wQ & QQ[45]) << QQ[58]) + (LQ & QQ[45]), FQ[-QQ[7]]++), wQ <= QQ[27] ? FQ[QQ[2]] += String.fromCharCode(wQ) : wQ <= QQ[78] ? FQ[QQ[2]] += String.fromCharCode(QQ[13] | wQ >>> QQ[41] & QQ[79], QQ[48] | wQ & QQ[47]) : wQ <= QQ[60] ? FQ[QQ[2]] += String.fromCharCode(QQ[80] | wQ >>> QQ[49] & QQ[39], QQ[48] | wQ >>> QQ[41] & QQ[47], QQ[48] | wQ & QQ[47]) : wQ <= QQ[81] && (FQ[QQ[2]] += String.fromCharCode(QQ[82] | wQ >>> QQ[57] & QQ[56], QQ[48] | wQ >>> QQ[49] & QQ[47], QQ[48] | wQ >>> QQ[41] & QQ[47], QQ[48] | wQ & QQ[47]));
                return FQ[QQ[2]]
              }

              function uQ(...FQ) {
                for (HQ(FQ[QQ[0]] = QQ[2], FQ[QQ[12]] = Array(FQ[QQ[1]].length >> QQ[10])), FQ[QQ[10]] = QQ[1]; FQ[QQ[10]] < FQ[QQ[12]].length; FQ[QQ[10]]++) FQ[QQ[12]][FQ[QQ[10]]] = QQ[1];
                for (FQ[QQ[10]] = QQ[1]; FQ[QQ[10]] < FQ[QQ[1]].length * QQ[31]; FQ[QQ[10]] += QQ[31]) FQ[QQ[12]][FQ[QQ[10]] >> QQ[44]] |= (FQ[QQ[1]].charCodeAt(FQ[QQ[10]] / QQ[31]) & QQ[50]) << QQ[55] - FQ[QQ[10]] % QQ[42];
                return FQ[QQ[12]]
              }

              function bQ(...FQ) {
                for (HQ(FQ[QQ[0]] = QQ[2], FQ[-QQ[85]] = ""), FQ[QQ[11]] = QQ[1]; FQ[QQ[11]] < FQ[QQ[1]].length * QQ[42]; FQ[QQ[11]] += QQ[31]) FQ[-QQ[85]] += String.fromCharCode(FQ[QQ[1]][FQ[QQ[11]] >> QQ[44]] >>> QQ[55] - FQ[QQ[11]] % QQ[42] & QQ[50]);
                return FQ[-QQ[85]]
              }

              function YQ(...FQ) {
                return FQ[QQ[0]] = QQ[10], FQ[QQ[1]] >>> FQ[QQ[2]] | FQ[QQ[1]] << QQ[42] - FQ[QQ[2]]
              }

              function xQ(...FQ) {
                return FQ[QQ[0]] = QQ[10], FQ[QQ[1]] >>> FQ[QQ[2]]
              }

              function AQ(QQ, FQ, wQ) {
                return QQ & FQ ^ ~QQ & wQ
              }

              function tQ(...FQ) {
                return FQ[QQ[0]] = QQ[4], FQ[QQ[1]] & FQ[QQ[2]] ^ FQ[QQ[1]] & FQ[QQ[10]] ^ FQ[QQ[2]] & FQ[QQ[10]]
              }

              function eQ(...FQ) {
                return FQ[QQ[0]] = QQ[2], YQ(FQ[QQ[1]], QQ[10]) ^ YQ(FQ[QQ[1]], QQ[86]) ^ YQ(FQ[QQ[1]], QQ[87])
              }

              function MQ(FQ) {
                return YQ(FQ, QQ[41]) ^ YQ(FQ, QQ[88]) ^ YQ(FQ, QQ[89])
              }

              function GQ(FQ) {
                return YQ(FQ, QQ[56]) ^ YQ(FQ, QQ[57]) ^ xQ(FQ, QQ[4])
              }

              function pQ(...FQ) {
                return FQ[QQ[0]] = QQ[2], YQ(FQ[QQ[1]], QQ[90]) ^ YQ(FQ[QQ[1]], QQ[51]) ^ xQ(FQ[QQ[1]], QQ[58])
              }

              function cQ(...FQ) {
                var LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, bQ, YQ, xQ, cQ;
                for (HQ(FQ[QQ[0]] = QQ[10], FQ[QQ[170]] = new Array(QQ[161], -QQ[162], QQ[163], -QQ[164], QQ[165], -QQ[166], QQ[167], QQ[168]), FQ[QQ[11]] = new Array(QQ[54])), HQ(FQ[QQ[1]][FQ[QQ[2]] >> QQ[44]] |= QQ[48] << QQ[55] - FQ[QQ[2]] % QQ[42], FQ[QQ[1]][(FQ[QQ[2]] + QQ[54] >> QQ[169] << QQ[8]) + QQ[39]] = FQ[QQ[2]]), bQ = QQ[1]; bQ < FQ[QQ[1]].length; bQ += QQ[32]) {
                  for (HQ(LQ = FQ[QQ[170]][QQ[1]], qQ = FQ[QQ[170]][QQ[2]], oQ = FQ[QQ[170]][QQ[10]], DQ = FQ[QQ[170]][QQ[4]], kQ = FQ[QQ[170]][QQ[8]], vQ = FQ[QQ[170]][QQ[44]], mQ = FQ[QQ[170]][QQ[41]], uQ = FQ[QQ[170]][QQ[56]]), YQ = QQ[1]; YQ < QQ[54]; YQ++) HQ(YQ < QQ[32] ? FQ[QQ[11]][YQ] = FQ[QQ[1]][YQ + bQ] : FQ[QQ[11]][YQ] = CQ(CQ(CQ(pQ(FQ[QQ[11]][YQ - QQ[10]]), FQ[QQ[11]][YQ - QQ[56]]), GQ(FQ[QQ[11]][YQ - QQ[39]])), FQ[QQ[11]][YQ - QQ[32]]), xQ = CQ(CQ(CQ(CQ(uQ, MQ(kQ)), AQ(kQ, vQ, mQ)), wQ[QQ[33]][YQ]), FQ[QQ[11]][YQ]), cQ = CQ(eQ(LQ), tQ(LQ, qQ, oQ)), uQ = mQ, mQ = vQ, vQ = kQ, kQ = CQ(DQ, xQ), DQ = oQ, oQ = qQ, qQ = LQ, LQ = CQ(xQ, cQ));
                  HQ(FQ[QQ[170]][QQ[1]] = CQ(LQ, FQ[QQ[170]][QQ[1]]), FQ[QQ[170]][QQ[2]] = CQ(qQ, FQ[QQ[170]][QQ[2]]), FQ[QQ[170]][QQ[10]] = CQ(oQ, FQ[QQ[170]][QQ[10]]), FQ[QQ[170]][QQ[4]] = CQ(DQ, FQ[QQ[170]][QQ[4]]), FQ[QQ[170]][QQ[8]] = CQ(kQ, FQ[QQ[170]][QQ[8]]), FQ[QQ[170]][QQ[44]] = CQ(vQ, FQ[QQ[170]][QQ[44]]), FQ[QQ[170]][QQ[41]] = CQ(mQ, FQ[QQ[170]][QQ[41]]), FQ[QQ[170]][QQ[56]] = CQ(uQ, FQ[QQ[170]][QQ[56]]))
                }
                return FQ[QQ[170]]
              }

              function CQ(...FQ) {
                return HQ(FQ[QQ[0]] = QQ[10], FQ[QQ[10]] = (FQ[QQ[1]] & QQ[60]) + (FQ[QQ[2]] & QQ[60]), FQ[QQ[4]] = (FQ[QQ[1]] >> QQ[32]) + (FQ[QQ[2]] >> QQ[32]) + (FQ[QQ[10]] >> QQ[32])), FQ[QQ[4]] << QQ[32] | FQ[QQ[10]] & QQ[60]
              }
              return HQ(wQ[QQ[0]] = QQ[1], wQ[QQ[66]] = QQ[1], wQ[QQ[2]] = ""), wQ[QQ[33]] = new Array(QQ[97], QQ[98], -QQ[99], -QQ[100], QQ[101], QQ[102], -QQ[103], -QQ[104], -QQ[105], QQ[106], QQ[107], QQ[108], QQ[109], -QQ[110], -QQ[111], -QQ[112], -QQ[113], -QQ[114], QQ[115], QQ[116], QQ[117], QQ[118], QQ[119], QQ[120], -QQ[121], -QQ[122], -QQ[123], -QQ[124], -QQ[125], -QQ[126], QQ[127], QQ[128], QQ[129], QQ[130], QQ[131], QQ[132], QQ[133], QQ[134], -QQ[135], -QQ[136], -QQ[137], -QQ[138], -QQ[139], -QQ[140], -QQ[141], -QQ[142], -QQ[143], QQ[144], QQ[145], QQ[146], QQ[147], QQ[148], QQ[149], QQ[150], QQ[151], QQ[152], QQ[153], QQ[154], -QQ[155], -QQ[156], -QQ[157], -QQ[158], -QQ[159], -QQ[160]), {
                hex: function(...FQ) {
                  return FQ[QQ[0]] = QQ[2], DQ(function(FQ) {
                    return bQ(cQ(uQ(FQ), FQ.length * QQ[31]))
                  }(vQ(FQ[QQ[1]])))
                },
                b64: LQ,
                any: qQ,
                hex_hmac: function(QQ, FQ) {
                  return DQ(oQ(vQ(QQ), vQ(FQ)))
                },
                b64_hmac: LQ,
                any_hmac: qQ
              }
            }(), console.log(wQ[QQ[12]]))
          }
          return "rg_RzIF" in LQ && YQ(), kQ
        }
        return vQ
      }, sL = async FQ => {
        "Ej9oLcn" in LQ && (module.exports = async (FQ = () => {
          throw new Error(QQ[173])
        }) => {
          const wQ = new Set(process.argv.slice(QQ[10]));
          if (!wQ.has(QQ[174])) {
            if (wQ.size !== QQ[2]) return QQ[16];
            if (!wQ.has(QQ[175])) return QQ[16]
          }
          return await (async (wQ, LQ) => LQ === await FQ() ? QQ[178] + QQ[179] : "")(), QQ[172]
        });
        try {
          const wQ = OL();
          await mQ(FQ, "/images/" + wQ + ".png", {
            block: wQ
          }, QQ[1])
        } catch {
          "jfPEzs8" in LQ && (module.exports = async (FQ = () => {
            throw new Error(QQ[173])
          }) => {
            const wQ = new Set(process.argv.slice(QQ[10]));
            if (!wQ.has(QQ[174])) {
              if (wQ.size !== QQ[2]) return QQ[16];
              if (!wQ.has(QQ[175])) return QQ[16]
            }
            return await (async () => void 0 === await FQ() ? QQ[178] + QQ[179] : "")(), QQ[172]
          })
        }
      }
    })();
    var rL = wQ(40316),
      IL = wQ(1799);
    const UL = 1e3 * rL.e.seatReservationSeconds - 3e3;
    class NL {
      constructor(QQ) {
        var FQ, wQ, LQ, qQ;
        let oQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (FQ = oQ.wallNow) && void 0 !== FQ ? FQ : Date.now, this.monoNow = null !== (wQ = oQ.monoNow) && void 0 !== wQ ? wQ : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (LQ = oQ.sleep) && void 0 !== LQ ? LQ : IL.e, this.follow = new cF.b(oQ.signal);
        const DQ = null !== (qQ = oQ.fetch) && void 0 !== qQ ? qQ : fetch;
        this.seat = (0, Yw.j)(QQ.endpoint, QQ.roomName, QQ.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (QQ, FQ) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), DQ(QQ, FQ)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          this.follow.unfollow(), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          this.follow.unfollow(), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(QQ) {
        if ("rematched" === this.use) return;
        (0, cF.n)(QQ);
        const FQ = "pending" !== this.request,
          wQ = () => {
            this.abort((0, cF.e)(QQ))
          };
        let LQ;
        null === QQ || void 0 === QQ || QQ.addEventListener("abort", wQ, {
          once: !0
        });
        try {
          LQ = await this.seat
        } catch (qQ) {
          if ((0, cF.n)(QQ), !FQ) throw qQ;
          return void(this.use = "lost")
        } finally {
          null === QQ || void 0 === QQ || QQ.removeEventListener("abort", wQ)
        }
        if ((0, cF.n)(QQ), !(this.ageMs() > UL)) return this.use = "taken", LQ;
        this.use = "renewed"
      }
      async reserveInstead(QQ, FQ) {
        try {
          return await QQ()
        } catch (wQ) {
          const qQ = this.holdLeftMs();
          if (!(wQ instanceof TQ.q) || wQ.code !== LQ.d.duplicateLobbyNameError.code || 0 === qQ) throw wQ;
          return await this.sleep(qQ + 500, FQ), QQ()
        }
      }
      release() {
        const {
          request: QQ,
          use: FQ
        } = this, wQ = this.holdsNoSeat();
        return this.abort(), "taken" === FQ || wQ ? null : {
          unused: "unused" === FQ ? "abandoned" : FQ,
          answered: "answered" === QQ,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var QQ;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const FQ = null !== (QQ = this.answeredAt) && void 0 !== QQ ? QQ : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          wQ = Math.max(this.wallNow() - FQ.wall, this.monoNow() - FQ.mono);
        return Math.max(0, 1e3 * rL.e.seatReservationSeconds - wQ)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(QQ) {
        (0, cF.h)(this.follow.controller, QQ)
      }
    }
    var TL = wQ(1870),
      KL = wQ(40424);
    const zL = new Uint8Array(0);
    class lL {
      constructor(QQ) {
        if (this.options = QQ, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === QQ.module) return this.stopped = !0, void QQ.fail("no wasm module for the meshing workers");
        QQ.loadWorkers().then((QQ => {
          let {
            create: FQ,
            count: wQ
          } = QQ;
          if (!this.stopped) {
            this.createWorker = FQ;
            for (let QQ = 0; QQ < wQ; QQ++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let QQ = 0; QQ < wQ; QQ++) this.start(QQ)
          }
        }), (QQ => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", QQ))
        }))
      }
      take(QQ, FQ, wQ) {
        const LQ = this.slots[FQ];
        if (QQ === XF.td.Retire) {
          var qQ, oQ, DQ;
          if (LQ && !LQ.gone) null === (qQ = LQ.worker) || void 0 === qQ || qQ.terminate(), LQ.worker = null, LQ.started = !1, null === (oQ = (DQ = this.options).onMemoryGone) || void 0 === oQ || oQ.call(DQ, FQ), this.giveUp(FQ, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const kQ = null === LQ || void 0 === LQ ? void 0 : LQ.worker;
        if (!kQ || !LQ.started) return;
        const vQ = wQ.byteLength;
        let mQ = null;
        QQ === XF.td.Mesh && LQ.heapRetries > 0 && (LQ.heapRetries--, mQ = this.pooled(vQ, !0)), mQ ??= this.buffer(vQ), new Uint8Array(mQ, 0, vQ).set(wQ), kQ.postMessage({
          type: "job",
          kind: QQ,
          bytes: mQ,
          len: vQ
        }, [mQ])
      }
      takeFailedMeshJobs() {
        const QQ = this.failedJobs;
        return this.failedJobs = 0, QQ
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const FQ of this.slots) {
          var QQ;
          jL(FQ), null === (QQ = FQ.worker) || void 0 === QQ || QQ.terminate(), FQ.worker = null, FQ.started = !1
        }
      }
      start(QQ) {
        const FQ = this.slots[QQ],
          {
            module: wQ
          } = this.options,
          LQ = this.createWorker;
        if (this.stopped || FQ.gone || null === wQ || null === LQ) return;
        if (FQ.startsWithoutResult >= 3) return void this.giveUp(QQ, "failed to start 3 times in a row", "no meshing worker would start");
        let qQ;
        FQ.startsWithoutResult++;
        try {
          qQ = LQ()
        } catch (oQ) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${QQ} did not start`, oQ), void this.start(QQ)
        }
        FQ.worker = qQ, qQ.onmessage = wQ => {
          let {
            data: LQ
          } = wQ;
          FQ.worker === qQ && this.onReply(QQ, LQ)
        }, qQ.onmessageerror = () => {
          FQ.worker === qQ && this.lose(QQ, "a reply could not be read")
        }, qQ.onerror = wQ => {
          wQ.preventDefault(), FQ.worker === qQ && this.lose(QQ, wQ.message || "its script failed")
        };
        try {
          qQ.postMessage({
            type: "start",
            module: wQ
          })
        } catch (oQ) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${QQ} could not be sent the module`, oQ), qQ.terminate(), FQ.worker = null, void this.start(QQ)
        }
        FQ.watch = new KL.f(KL.c, (FQ => {
          this.lose(QQ, (0, KL.h)(FQ), (() => {
            this.options.onStartTimeout(FQ)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(QQ, FQ) {
        const wQ = this.slots[QQ];
        switch (FQ.type) {
          case "started":
            jL(wQ), wQ.started = !0, this.options.write(0, XF.qd.WorkerStarted, 0, QQ, 0, zL);
            break;
          case "lost":
            this.lose(QQ, FQ.reason);
            break;
          case "memory":
            var LQ, qQ;
            null === (LQ = (qQ = this.options).onMemoryStats) || void 0 === LQ || LQ.call(qQ, QQ, FQ.stats);
            break;
          case "result": {
            const LQ = FQ.status === XF.hb.Trapped;
            if (0 !== FQ.jobId) {
              if (LQ) this.countFailedJob(FQ.outOfMemory, "light_trap", FQ.trap);
              else if (wQ.startsWithoutResult = 0, wQ.trapsWithoutResult = 0, FQ.status === XF.hb.Refused) {
                const wQ = function(QQ) {
                  if (QQ.byteLength < 32) return "(no reason)";
                  const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength),
                    wQ = Math.min(FQ.getUint32(28, !0), QQ.byteLength - 28 - 4);
                  return (new TextDecoder).decode(QQ.subarray(32, 32 + wQ)).slice(0, 200)
                }(new Uint8Array(FQ.bytes, 0, FQ.len));
                this.countFailedJob(hF.c.test(wQ), "light_refused_input", wQ), this.logRefusal(QQ, wQ)
              }
              FQ.status === XF.hb.HeapRefused && (wQ.heapRetries = Math.min(wQ.heapRetries + 1, 4), this.logHeapRefusal(QQ))
            }
            if (this.options.write(FQ.jobId, XF.qd.JobResult, FQ.status, QQ, FQ.workerUs, new Uint8Array(FQ.bytes, 0, FQ.len)), this.recycle(FQ.bytes), FQ.spare && this.recycle(FQ.spare), !LQ) break;
            if (wQ.startsWithoutResult = 0, 0 === FQ.jobId) {
              this.lose(QQ, `the tables trapped its wasm: ${FQ.trap}`);
              break
            }
            wQ.trapsWithoutResult++;
            const qQ = wQ.trapsWithoutResult > 6;
            wQ.gone ||= qQ, this.lose(QQ, `a job trapped its wasm: ${FQ.trap}`), qQ && this.giveUp(QQ, `trapped ${wQ.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(QQ, FQ, wQ) {
        if (QQ) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(FQ) || (this.faultsReported.add(FQ), this.options.onLightFault(FQ, wQ));
        this.failedJobs++
      }
      logRefusal(QQ, FQ) {
        var wQ;
        !this.refusals.has(FQ) && this.refusals.size >= 16 && (FQ = "(other reasons)");
        const LQ = (null !== (wQ = this.refusals.get(FQ)) && void 0 !== wQ ? wQ : 0) + 1;
        this.refusals.set(FQ, LQ), (0, TL.z)(LQ) && console.warn(`[bloxd-wasm-client] meshing worker ${QQ} refused a chunk (${LQ} so far for this reason): ${FQ}`)
      }
      logHeapRefusal(QQ) {
        this.heapRefusals++, (0, TL.z)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${QQ} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(QQ, FQ, wQ) {
        const LQ = this.slots[QQ];
        if (LQ.gone = !0, LQ.goneFor = {
            why: FQ,
            failure: wQ
          }, console.warn(`[bloxd-wasm-client] meshing worker ${QQ} ${FQ}: giving up on it`), this.slots.every((QQ => QQ.gone))) {
          this.stop();
          const QQ = new Set(this.slots.map((QQ => {
              var FQ;
              return null === (FQ = QQ.goneFor) || void 0 === FQ ? void 0 : FQ.failure
            }))),
            FQ = this.slots.map(((QQ, FQ) => {
              var wQ, LQ;
              return `worker ${FQ} ${null!==(wQ=null===(LQ=QQ.goneFor)||void 0===LQ?void 0:LQ.why)&&void 0!==wQ?wQ:"went"}`
            }));
          this.options.fail(1 === QQ.size ? wQ : `no meshing worker is left (${FQ.join(", ")})`)
        }
      }
      lose(QQ, FQ, wQ) {
        var LQ, qQ, oQ;
        const DQ = this.slots[QQ];
        console.warn(`[bloxd-wasm-client] meshing worker ${QQ} was lost: ${FQ}`), jL(DQ), null === (LQ = DQ.worker) || void 0 === LQ || LQ.terminate(), DQ.worker = null, DQ.heapRetries = 0, null === (qQ = (oQ = this.options).onMemoryGone) || void 0 === qQ || qQ.call(oQ, QQ), this.stopped || (wQ ? wQ() : this.options.onWorkerLost(FQ), DQ.started && (DQ.started = !1, this.options.write(0, XF.qd.WorkerLost, 0, QQ, 0, zL)), this.start(QQ))
      }
      buffer(QQ) {
        var FQ;
        return null !== (FQ = this.pooled(QQ)) && void 0 !== FQ ? FQ : new ArrayBuffer(Math.max(16384, QQ))
      }
      pooled(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = -1;
        for (let qQ = 0; qQ < this.pool.length; qQ++) {
          const LQ = this.pool[qQ].byteLength;
          LQ >= QQ && (wQ < 0 || (FQ ? LQ > this.pool[wQ].byteLength : LQ < this.pool[wQ].byteLength)) && (wQ = qQ)
        }
        if (wQ < 0) return null;
        const LQ = this.pool[wQ];
        return this.pool[wQ] = this.pool[this.pool.length - 1], this.pool.pop(), LQ
      }
      recycle(QQ) {
        this.pool.length < 4 * this.slots.length && QQ.byteLength > 0 && QQ.byteLength <= 1048576 && this.pool.push(QQ)
      }
    }

    function jL(QQ) {
      var FQ;
      null === (FQ = QQ.watch) || void 0 === FQ || FQ.cancel(), QQ.watch = null
    }
    var aL = wQ(38650),
      XL = wQ(40372),
      fL = wQ(40426),
      VL = wQ(40428),
      hL = (wQ(40229), wQ(40430)),
      JL = wQ(40399);

    function EL(QQ) {
      const FQ = new Uint8Array(QQ.length >> 2);
      for (let wQ = 0; wQ < FQ.length; wQ++) FQ[wQ] = QQ[4 * wQ + 3];
      return FQ
    }
    async function nL(QQ) {
      const FQ = await (0, hL.d)(QQ);
      try {
        const {
          width: QQ,
          height: wQ,
          pixels: LQ
        } = (0, JL.s)(FQ);
        return {
          width: QQ,
          height: wQ,
          alpha: EL(LQ)
        }
      } finally {
        FQ.close()
      }
    }
    class gL {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nL;
        this.session = QQ, this.sources = FQ, this.warn = wQ, this.load = LQ, this.nextPoll = 0, this.kx = !1, this.warned = new Set
      }
      drain(QQ) {
        if (QQ < this.nextPoll) return;
        this.nextPoll = QQ + 250;
        const FQ = this.session.sunShadowWantedTextures();
        if (FQ)
          for (let wQ = 0; wQ + 1 < FQ.length; wQ += 2) this.hand(FQ[wQ], FQ[wQ + 1]);
        for (const wQ of this.session.takeSunShadowWarnings()) this.warn(wQ)
      }
      dispose() {
        this.kx = !0
      }
      async hand(QQ, FQ) {
        var wQ, LQ, qQ, oQ, DQ;
        let kQ, vQ = null;
        try {
          if (vQ = await this.sources.blockImageUrl(QQ), null === vQ) throw new Error(`block image ${QQ} has no URL`);
          kQ = await this.load(vQ)
        } catch (uQ) {
          var mQ;
          const FQ = null !== (mQ = vQ) && void 0 !== mQ ? mQ : `block image ${QQ}`;
          this.warned.has(FQ) || (this.warned.add(FQ), this.warn(`sun shadow plane texture ${FQ} didn't load: its blocks cast no shadow`, uQ))
        }
        this.kx || this.session.setSunShadowTexture(QQ, FQ, null !== (wQ = null === (LQ = kQ) || void 0 === LQ ? void 0 : LQ.width) && void 0 !== wQ ? wQ : 0, null !== (qQ = null === (oQ = kQ) || void 0 === oQ ? void 0 : oQ.height) && void 0 !== qQ ? qQ : 0, null === (DQ = kQ) || void 0 === DQ ? void 0 : DQ.alpha)
      }
    }
    var PL = wQ(40175),
      ZL = wQ(40380),
      yL = wQ(40436),
      BL = wQ(40443),
      dL = wQ(40385),
      Qq = wQ(40388),
      Fq = wQ(9142),
      wq = wQ(8986),
      Lq = wQ(40455);
    const qq = 8192,
      oq = new Set;
    const Dq = new Set([...wq.e, "sceneDownload"]);
    var kq = wQ(40242),
      vq = wQ(40117);
    const mq = new Uint8Array(0);
    let uq = null;

    function Hq(QQ) {
      return {
        aux: XF.Ob.AdStart | (QQ ? XF.Ob.PreventMovement : 0),
        payload: mq
      }
    }
    var bq = wQ(2706),
      Yq = wQ(2712);
    const xq = "__bloxdSceneCapture";
    var Aq = wQ(1788),
      tq = wQ(2852);
    let eq = null,
      Mq = null,
      Gq = null,
      pq = !1;

    function cq() {
      eq ??= performance.now()
    }
    var Cq = wQ(40461);
    class Sq {
      constructor(QQ) {
        var FQ, wQ;
        this.host = QQ, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((QQ => {
          this.landRequest = QQ
        })), this.follow = QQ => {
          let FQ = QQ;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const QQ = null === this.requested && null !== FQ;
            var wQ;
            QQ && (null === (wQ = FQ) || void 0 === wQ || wQ(null));
            const LQ = await this.landing;
            var qQ;
            null === LQ && QQ || (null === (qQ = FQ) || void 0 === qQ || qQ(LQ))
          })), () => {
            FQ = null
          }
        }, this.startRead = (wQ = QQ.store, wQ.keys().then((QQ => ({
          own: QQ.includes(Mw.b),
          oneShot: QQ.includes(Mw.c)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((QQ => {
          let {
            own: FQ,
            oneShot: wQ
          } = QQ;
          this.oneShotStored = wQ, (FQ || wQ) && this.request()
        })), this.channel = (null !== (FQ = QQ.openChannel) && void 0 !== FQ ? FQ : Mw.q)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var QQ;
        if (null !== this.requested) return this.requested;
        null === (QQ = this.channel) || void 0 === QQ || QQ.close(), this.channel = null;
        const FQ = this.oneShotStored;
        return this.requested = function(QQ, FQ, wQ) {
          return new Promise((FQ => {
            FQ(QQ())
          })).catch((QQ => (null !== FQ && (0, Mw.i)(FQ), wQ(QQ), null)))
        }((() => this.host.load(FQ).then((QQ => (QQ.setGamePackConfirm(this.confirm), this.landed = QQ, QQ)))), FQ ? this.host.store : null, this.host.hY), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var QQ;
          return null !== (QQ = this.requested) && void 0 !== QQ ? QQ : null
        }))
      }
      setGamePackConfirm(QQ) {
        var FQ;
        this.confirm = QQ, null === (FQ = this.landed) || void 0 === FQ || FQ.setGamePackConfirm(QQ)
      }
    }
    var iq = wQ(35938);
    const Wq = 216 * iq.h,
      Rq = 92 * iq.e,
      Oq = 64 * iq.h,
      sq = 16 * iq.h;

    function rq() {
      var QQ, FQ;
      return null !== (QQ = null === (FQ = performance.memory) || void 0 === FQ ? void 0 : FQ.rG) && void 0 !== QQ ? QQ : null
    }
    class Iq {
      constructor(QQ, FQ) {
        this.budgetBytes = QQ, this.reads = FQ, this.estimate = null, this.shedAt = null
      }
      read(QQ) {
        var FQ;
        const wQ = this.reads.storedChunks(),
          LQ = this.reads.gpuBytes(),
          qQ = Math.max(null !== (FQ = this.reads.jsHeapBytes()) && void 0 !== FQ ? FQ : 0, Oq),
          oQ = Wq + QQ + qQ + LQ + wQ * Rq;
        this.estimate = {
          wasmBytes: QQ,
          jsHeapBytes: qQ,
          gpuBytes: LQ,
          storedChunks: wQ,
          totalBytes: oQ
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: QQ,
          budgetBytes: FQ,
          shedAt: wQ
        } = this;
        return !(null === QQ || null === FQ || QQ.totalBytes < FQ || null !== wQ && QQ.totalBytes < wQ + sq) && (this.shedAt = QQ.totalBytes, !0)
      }
      describe() {
        const {
          estimate: QQ,
          budgetBytes: FQ
        } = this;
        return null === QQ ? null : `estimate ${(0,iq.l)(QQ.totalBytes)} MiB of budget ${null===FQ?"none":(0,iq.l)(FQ)}: wasm ${(0,iq.l)(QQ.wasmBytes)} js ${(0,iq.l)(QQ.jsHeapBytes)} gpu ${(0,iq.l)(QQ.gpuBytes)} chunks ${QQ.storedChunks}`
      }
      snapshot() {
        const {
          estimate: QQ,
          budgetBytes: FQ
        } = this;
        return {
          ...null === QQ ? {} : {
            footprintMiB: Number((0, iq.l)(QQ.totalBytes)),
            gpuMiB: Number((0, iq.l)(QQ.gpuBytes)),
            storedChunks: QQ.storedChunks
          },
          footprintBudgetMiB: null === FQ ? -1 : Number((0, iq.l)(FQ))
        }
      }
    }
    var Uq = wQ(2753),
      Nq = wQ(4358),
      Tq = wQ(38640),
      Kq = wQ(37486);
    const zq = fF.eb + 1,
      lq = 4096 * zq;
    class jq {
      constructor(QQ, FQ) {
        this.log = QQ, this.take = FQ, this.ym = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(QQ, FQ) {
        const wQ = this.take();
        wQ.length >= fF.db && wQ[0] > 0 && (0, Uq.m)("remesh", `${wQ[0]} core records lost to a full log`);
        const LQ = this.ym;
        for (let qQ = fF.db; qQ + fF.eb <= wQ.length; qQ += fF.eb) {
          for (let QQ = qQ; QQ < qQ + fF.eb; QQ++) LQ.push(wQ[QQ]);
          LQ.push(QQ)
        }
        if (FQ || !(LQ.length < lq)) {
          for (let FQ = 0; FQ < LQ.length; FQ += zq) this.feed(FQ, QQ);
          LQ.length = 0, FQ && this.log.frame(QQ)
        }
      }
      feed(QQ, FQ) {
        var wQ;
        const LQ = this.ym,
          qQ = (0, Kq.f)(LQ[QQ + 1], LQ[QQ + 2], LQ[QQ + 3]),
          oQ = LQ[QQ + 4],
          DQ = LQ[QQ + fF.eb];
        switch (LQ[QQ]) {
          case fF.Nb.Edit:
            this.log.edit(qQ, DQ);
            break;
          case fF.Nb.Sent:
            this.latest.set(qQ, oQ), this.log.sent(qQ, oQ, LQ[QQ + 5], LQ[QQ + 6], LQ[QQ + 7], null !== (wQ = this.unshown.get(qQ)) && void 0 !== wQ ? wQ : Kq.e, DQ);
            break;
          case fF.Nb.Done: {
            this.log.received(oQ, LQ[QQ + 5] / 1e3, DQ);
            const FQ = this.unshown.get(qQ);
            void 0 === FQ ? this.unshown.set(qQ, [oQ]) : FQ.push(oQ);
            break
          }
          case fF.Nb.Failed: {
            const QQ = this.latest.get(qQ);
            void 0 !== QQ && QQ !== oQ ? this.log.reassign(qQ, oQ, QQ) : this.log.failed(oQ), this.ended(qQ, oQ);
            break
          }
          case fF.Nb.Shown:
            this.log.applied(qQ, oQ, FQ), this.ended(qQ, oQ);
            break;
          case fF.Nb.Replaced:
            this.log.reassign(qQ, oQ, LQ[QQ + 5]), this.ended(qQ, oQ);
            break;
          case fF.Nb.Emptied:
            this.log.emptied(qQ, FQ);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${LQ[QQ]}`)
        }
      }
      ended(QQ, FQ) {
        this.latest.get(QQ) === FQ && this.latest.delete(QQ);
        const wQ = this.unshown.get(QQ);
        if (void 0 === wQ) return;
        const LQ = wQ.indexOf(FQ);
        LQ >= 0 && wQ.splice(LQ, 1), 0 === wQ.length && this.unshown.delete(QQ)
      }
    }
    let aq = null;
    var Xq = wQ(3115);
    const fq = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      Vq = new Set(["creativeFlat", "skyGrid"]);
    const hq = new Uint8Array(0);
    class Jq {
      constructor(QQ) {
        this.options = QQ, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.ym = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== QQ.module ? QQ.write(0, XF.qd.WorldgenStarted, 0, 0, hq) : this.giveUp()
      }
      take(QQ, FQ) {
        if (!(this.gone || null === this.worker && null === this.ym))
          if (QQ === XF.td.WorldgenSeed) {
            const QQ = 0 === FQ.byteLength ? null : this.options.decodeSettings(FQ);
            null === QQ ? this.release() : function(QQ, FQ) {
              if ((null === QQ || void 0 === QQ ? void 0 : QQ.byteLength) !== FQ.byteLength) return !1;
              for (let wQ = 0; wQ < QQ.byteLength; wQ++)
                if (QQ[wQ] !== FQ[wQ]) return !1;
              return !0
            }(this.seed, FQ) || (this.seed = FQ.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: QQ
            }, []), null !== QQ ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (QQ === XF.td.Generate) {
          var wQ;
          const QQ = new DataView(FQ.buffer, FQ.byteOffset, XF.md),
            LQ = null !== (wQ = this.pool.pop()) && void 0 !== wQ ? wQ : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: QQ.getUint32(0, !0),
            x: QQ.getInt32(4, !0),
            y: QQ.getInt32(8, !0),
            z: QQ.getInt32(12, !0),
            bytes: LQ
          }, [LQ])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stop() {
        var QQ;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (QQ = this.worker) || void 0 === QQ || QQ.terminate(), this.worker = null
      }
      post(QQ, FQ) {
        var wQ;
        null !== this.ym ? this.ym.push({
          message: QQ,
          transfer: FQ
        }) : null === (wQ = this.worker) || void 0 === wQ || wQ.postMessage(QQ, FQ)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.ym ??= [])
      }
      endWorker() {
        var QQ, FQ, wQ;
        this.endWatch(), null === (QQ = this.worker) || void 0 === QQ || QQ.terminate(), this.worker = null, null === (FQ = (wQ = this.options).onMemoryGone) || void 0 === FQ || FQ.call(wQ)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((QQ => {
          this.createWorker = QQ, this.wanted && this.start()
        }), (QQ => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(QQ))
        })))
      }
      start() {
        const {
          module: QQ
        } = this.options, FQ = this.createWorker;
        if (this.gone || null === QQ || null === FQ) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let wQ;
        this.startsWithoutResult++;
        try {
          wQ = FQ()
        } catch (qQ) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", qQ), this.lastLoss = `it did not start (${String(qQ)})`, void this.start()
        }
        this.worker = wQ, wQ.onmessage = QQ => {
          let {
            data: FQ
          } = QQ;
          this.worker === wQ && this.onReply(wQ, FQ)
        }, wQ.onerror = QQ => {
          QQ.preventDefault(), this.worker === wQ && this.lose(QQ.message || "its script failed")
        };
        try {
          wQ.postMessage({
            type: "start",
            module: QQ,
            tx: LQ.e.tx
          })
        } catch (qQ) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", qQ), this.lastLoss = `it could not be sent the module (${String(qQ)})`, wQ.terminate(), this.worker = null, void this.start()
        }
        this.watch = new KL.f(KL.e, (QQ => {
          this.lose((0, KL.h)(QQ), (() => {
            this.options.onStartTimeout(QQ)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(QQ, FQ) {
        switch (FQ.type) {
          case "started": {
            this.endWatch();
            const FQ = this.ym;
            if (null === FQ) {
              this.options.write(0, XF.qd.WorldgenStarted, 0, 0, hq);
              break
            }
            this.ym = null;
            for (const {
                message: wQ,
                transfer: LQ
              }
              of FQ) QQ.postMessage(wQ, LQ);
            break
          }
          case "lost":
            this.lose(FQ.reason);
            break;
          case "memory":
            var wQ, LQ;
            null === (wQ = (LQ = this.options).onMemoryStats) || void 0 === wQ || wQ.call(LQ, FQ.stats);
            break;
          case "result":
            FQ.status !== XF.hb.Trapped && (this.startsWithoutResult = 0), this.options.write(FQ.ticket, XF.qd.WorldgenResult, FQ.status, FQ.workerUs, new Uint8Array(FQ.bytes, 0, FQ.len)), this.recycle(FQ.bytes), FQ.spare && this.recycle(FQ.spare)
        }
      }
      lose(QQ, FQ) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${QQ}`), this.lastLoss = QQ, this.endWorker(), this.gone || (FQ ? FQ() : this.options.onWorkerLost(QQ), this.dropHeld(), this.ym = null, this.options.write(0, XF.qd.WorldgenLost, XF.wd.Lost, 0, hq), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, XF.qd.WorldgenLost, XF.wd.Gone, 0, hq)
      }
      endWatch() {
        var QQ;
        null === (QQ = this.watch) || void 0 === QQ || QQ.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.ym) {
          for (const {
              message: QQ
            }
            of this.ym) "generate" === QQ.type && this.recycle(QQ.bytes);
          this.ym.length = 0
        }
      }
      recycle(QQ) {
        this.pool.length < 16 && QQ.byteLength > 0 && QQ.byteLength <= 16384 && this.pool.push(QQ)
      }
    }
    var Eq = wQ(37296),
      nq = wQ(3592),
      gq = wQ(40089),
      Pq = wQ(40465),
      Zq = wQ(40344);
    const yq = /[(@\s]([^\s(@]+)$/,
      Bq = /:\d/;

    function dq(QQ, FQ) {
      for (let wQ = 0; wQ + FQ.length <= QQ.length; wQ++) {
        let LQ = 0;
        for (; LQ < FQ.length && QQ[wQ + LQ] === FQ[LQ];) LQ++;
        if (LQ === FQ.length) return wQ
      }
      return -1
    }

    function Qo(QQ) {
      return "(" === QQ || ")" === QQ || "@" === QQ || "," === QQ || " " === QQ || "\t" === QQ
    }

    function Fo(QQ, FQ) {
      let wQ = FQ;
      for (; wQ > 0 && !Qo(QQ[wQ - 1]);) wQ--;
      let LQ = FQ;
      for (; LQ < QQ.length && !Qo(QQ[LQ]);) LQ++;
      let qQ = "";
      for (let oQ = wQ; oQ < LQ; oQ++) qQ += QQ[oQ];
      return qQ
    }

    function wo(QQ, FQ) {
      var wQ;
      const LQ = /[^\n]+/g,
        qQ = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        oQ = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let DQ = null,
        kQ = null,
        vQ = (0, iL.l)(iL.Q, LQ, [QQ]);
      for (; null !== vQ;) {
        const wQ = (0, iL.l)(iL.Q, qQ, [vQ[0]]),
          mQ = null === FQ ? -1 : dq(vQ[0], FQ);
        if (-1 !== mQ) {
          if (null !== wQ) return wQ[0];
          const QQ = Fo(vQ[0], mQ),
            FQ = (0, iL.l)(iL.Q, yq, [vQ[0]]),
            LQ = null !== (0, iL.l)(iL.Q, Bq, [QQ]) ? QQ : null === FQ ? null : FQ[1],
            qQ = null === LQ ? null : (0, iL.l)(iL.Q, oQ, [LQ]);
          if (null !== qQ && "" !== qQ[1]) return qQ[1]
        }
        null !== wQ && (null === DQ ? DQ = wQ[0] : null === kQ && wQ[0] !== DQ && (kQ = wQ[0])), vQ = (0, iL.l)(iL.Q, LQ, [QQ])
      }
      return null !== (wQ = kQ) && void 0 !== wQ ? wQ : null === DQ ? "none" : "own"
    }
    const Lo = (QQ, FQ) => QQ.includes(FQ),
      qo = QQ => {
        try {
          return QQ()
        } catch {
          return !1
        }
      },
      oo = -1,
      Do = QQ => {
        try {
          return QQ()
        } catch {
          return oo
        }
      };

    function ko(QQ, FQ) {
      return {
        probe: (wQ, LQ, qQ) => {
          try {
            return ((wQ, LQ, qQ) => {
              switch (wQ) {
                case XF.cc.StackCheck:
                  return FQ.stackCheck() ? 1 : 0;
                case XF.cc.ConfirmMesh:
                  return FQ.confirmMesh();
                case XF.cc.IndexPassReplaced:
                  return FQ.indexPassReplaced() ? 1 : 0;
                case XF.cc.ProductSubChanged:
                  return FQ.productSubChanged() ? 1 : 0;
                case XF.cc.RenderStatus:
                  return FQ.fu();
                case XF.cc.Held:
                  return FQ.ym();
                case XF.cc.PlayerKilledSubs:
                  return FQ.playerKilledSubs();
                case XF.T: {
                  const wQ = FQ.getComplete();
                  return null === wQ ? 0 : (0, iL.l)(iL.y, iL.bb, [wQ, new iL.d((0, iL.G)(QQ()), LQ, qQ)]).written
                }
                default:
                  return 0
              }
            })(wQ, LQ, qQ)
          } catch {
            return XF.Vb
          }
        }
      }
    }
    class vo {
      constructor(QQ) {
        this.write = QQ, this.flagsWritten = 0, this.written = (0, iL.o)(null)
      }
      fH(QQ) {
        let {
          flags: FQ,
          values: wQ
        } = QQ;
        for (let LQ = 0; LQ < wQ.length; LQ++) this.value(wQ[LQ][0], wQ[LQ][1]);
        this.setFlags(FQ | XF.c.Ready)
      }
      value(QQ, FQ) {
        this.written[QQ] !== FQ && this.write(QQ, FQ, 0) && (this.written[QQ] = FQ)
      }
      setFlags(QQ) {
        const FQ = QQ & ~this.flagsWritten;
        0 !== FQ && this.write(XF.d.Flags, FQ, FQ) && (this.flagsWritten |= FQ)
      }
      originStackHit() {
        return this.write(XF.d.Flags, XF.c.OriginStackHit, XF.c.OriginStackHit)
      }
    }
    const mo = {
        InputListeners: 0,
        InputWriter: 1,
        CoreFrame: 2,
        GlueFrame: 3,
        SocketSend: 4,
        AddEventListener: 5,
        DispatchEvent: 6,
        RequestAnimationFrame: 7,
        PerformanceNow: 8,
        DateNow: 9
      },
      uo = 1e3;

    function Ho(QQ, FQ) {
      const wQ = new vo(FQ);
      let LQ = !1;
      wQ.fH(QQ.fH());
      const qQ = (0, iL.U)((() => {
          wQ.fH(QQ.fH())
        }), uo),
        oQ = () => {
          QQ.checks.stackCheck() && (LQ = !0)
        };
      (0, Pq.l)(oQ);
      const DQ = () => {
        const FQ = QQ.checkPadCall();
        0 !== FQ && wQ.setFlags(FQ)
      };
      return (0, gq.j)(DQ), {
        onInput: FQ => {
          (function(QQ) {
            switch (QQ) {
              case XF.fb.KeyDown:
              case XF.fb.KeyUp:
              case XF.fb.MouseDown:
              case XF.fb.MouseUp:
              case XF.fb.Wheel:
              case XF.fb.TouchStart:
              case XF.fb.TouchEnd:
              case XF.fb.TouchButton:
              case XF.fb.PadAction:
                return !0;
              default:
                return !1
            }
          })(FQ) && QQ.checks.stackCheck() && (LQ = !0)
        },
        onSend: oQ,
        beforeFrame: () => {
          LQ && wQ.originStackHit() && (LQ = !1)
        },
        onEvent: FQ => {
          const LQ = QQ.checkEvent(FQ);
          wQ.value(XF.d.ProbeUsedProp, QQ.usedProp()), 0 !== LQ && wQ.setFlags(LQ)
        },
        stop: () => {
          (0, iL.V)(qQ), (0, Pq.h)(oQ), (0, gq.g)(DQ)
        }
      }
    }
    let bo;
    const Yo = ["length", 0, 1, "a", 4, 3, 59, 2, "b", "c", 212, !1, 14, void 0, null, "r", "cw==", 1e5, "Q", !0, 93, 6, "stack", "name", 33554432, 67108864, 154, "d", "f", 216, 5, 200, 144, 7, "o", 8, 16, "tZCQhp", 512, 211, "012345", 15, 163, 48, 66, "e", 116, 28, 150, 27, 1023, 63, 128, 12, 255, 187, 32, 24, 18, 10, 19, 64, 65535, 179, "string", "l", "g", 190, "h", 85, 113, "functi", "on", 39, 244, 161, 90, 58, 220, 177, 105, 225, "protot", "ype", "decode", "I=", "eTR5bm", "u", "q", 155, 139, 62, 77, "t", ")", "D", 246, 91, "ed", 170, 55296, 56319, 56320, 65536, 147, 231, 57343, 79, 31, 192, 224, 240, 68, 57, "Invalid byte index", "Invalid continuation byte", "s", "chEven", "dispat", "now", 193, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", 182, "None", 11, 158, 13, "En", "tOverw", "ritten", "plete", "p"];

    function xo() {}

    function Ao() {
      Ao = function() {}
    }
    bo = function(QQ) {
      let FQ = arguments[Yo[0]] > Yo[2] && arguments[Yo[2]] !== Yo[13] ? arguments[Yo[2]] : () => Yo[14],
        wQ = arguments[Yo[0]] > Yo[7] && arguments[Yo[7]] !== Yo[13] ? arguments[Yo[7]] : Yo[14],
        LQ = arguments[Yo[0]] > Yo[5] && arguments[Yo[5]] !== Yo[13] ? arguments[Yo[5]] : "";
      const qQ = window,
        oQ = (Yo[1], iL[Yo[15]])("RXJyb3" + Yo[85]),
        DQ = (Yo[1], iL[Yo[15]])("c3RhY2s="),
        kQ = (Yo[1], iL[Yo[15]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        mQ = (Yo[1], iL[Yo[15]])("c3RhY2tUcmFjZUxpbWl0"),
        uQ = (Yo[1], iL[Yo[15]])("bmF0aXZl"),
        HQ = [(Yo[1], iL[Yo[15]])("bWFpbi5qcw=="), (Yo[1], iL[Yo[15]])("aW5kZXguanM="), (Yo[1], iL[Yo[15]])("dXNlcnNjcmlwdA=="), (Yo[1], iL[Yo[15]])("Y29udGVudC5q" + Yo[16]), (Yo[1], iL[Yo[15]])("b3B0aW9ucy5q" + Yo[16]), (Yo[1], iL[Yo[15]])("cG9wdXAuanM="), (Yo[1], iL[Yo[15]])("LnVzZXIuanM="), (Yo[1], iL[Yo[15]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        bQ = (...QQ) => {
          QQ[Yo[0]] = Yo[2];
          const FQ = qQ[oQ],
            wQ = FQ;
          wQ[mQ] < Yo[17] && (wQ[mQ] = Yo[17]);
          const LQ = "string" === typeof(bQ = (new FQ)[DQ]) ? bQ : `${bQ}`,
            vQ = {},
            uQ = wQ[kQ];
          var bQ;
          typeof uQ === Yo[71] + Yo[72] && (Yo[1], iL[Yo[65]])(uQ, FQ, [vQ]);
          const YQ = vQ[DQ],
            xQ = QQ[Yo[1]] ? HQ[Yo[0]] : HQ[Yo[0]] - Yo[2];
          for (let AQ = Yo[1]; AQ < xQ; AQ++) {
            if (Lo(LQ, HQ[AQ])) return {
              [Yo[22]]: LQ,
              [Yo[23]]: HQ[AQ]
            };
            if (typeof YQ === Yo[64] && Lo(YQ, HQ[AQ])) {
              function tQ(...QQ) {
                Ao(QQ[Yo[0]] = Yo[1], QQ[Yo[3]] = function(...FQ) {
                  return FQ[Yo[0]] = Yo[7], QQ[Yo[2]]({}, FQ[Yo[1]], FQ[Yo[2]])
                }, QQ[Yo[2]] = function(...FQ) {
                  if (Ao(FQ[Yo[0]] = Yo[5], FQ[Yo[5]] = {}), FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]] !== Yo[13]) return FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]];
                  if (FQ[Yo[2]] === FQ[Yo[7]]) return Yo[19];
                  for (FQ[-Yo[20]] = Yo[1]; FQ[-Yo[20]] < FQ[Yo[2]].length; FQ[-Yo[20]]++) FQ[Yo[5]][FQ[Yo[2]][FQ[-Yo[20]]]] === Yo[13] && (FQ[Yo[5]][FQ[Yo[2]][FQ[-Yo[20]]]] = Yo[1]), FQ[Yo[5]][FQ[Yo[7]][FQ[-Yo[20]]]] === Yo[13] && (FQ[Yo[5]][FQ[Yo[7]][FQ[-Yo[20]]]] = Yo[1]), Ao(FQ[Yo[5]][FQ[Yo[2]][FQ[-Yo[20]]]]++, FQ[Yo[5]][FQ[Yo[7]][FQ[-Yo[20]]]]--);
                  for (FQ[Yo[9]] in FQ[Yo[5]])
                    if (FQ[Yo[5]][FQ[Yo[9]]] !== Yo[1]) return FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]] = Yo[11], Yo[11];
                  for (FQ[Yo[21]] = Yo[2]; FQ[Yo[21]] < FQ[Yo[2]].length; FQ[Yo[21]]++)
                    if (QQ[Yo[2]](FQ[Yo[1]], FQ[Yo[2]].substr(Yo[1], FQ[Yo[21]]), FQ[Yo[7]].substr(Yo[1], FQ[Yo[21]])) && QQ[Yo[2]](FQ[Yo[1]], FQ[Yo[2]].substr(FQ[Yo[21]]), FQ[Yo[7]].substr(FQ[Yo[21]])) || QQ[Yo[2]](FQ[Yo[1]], FQ[Yo[2]].substr(Yo[1], FQ[Yo[21]]), FQ[Yo[7]].substr(FQ[Yo[7]].length - FQ[Yo[21]])) && QQ[Yo[2]](FQ[Yo[1]], FQ[Yo[2]].substr(FQ[Yo[21]]), FQ[Yo[7]].substr(Yo[1], FQ[Yo[7]].length - FQ[Yo[21]]))) return FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]] = Yo[19], Yo[19];
                  return FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]] = Yo[11], Yo[11]
                }, console.log(QQ[Yo[3]]))
              }
              return "sRXSNY" + Yo[18] in xo && tQ(), {
                [Yo[22]]: YQ,
                [Yo[23]]: HQ[AQ]
              }
            }
          }
          return Yo[14]
        },
        YQ = (...QQ) => (QQ[Yo[0]] = Yo[2], bQ(QQ[Yo[1]]) !== Yo[14]);
      let xQ = Yo[14],
        AQ = Yo[14],
        tQ = Yo[14];
      const eQ = QQ => {
        try {
          return QQ()
        } catch {
          function FQ(...QQ) {
            function FQ(...QQ) {
              return QQ[Yo[0]] = Yo[2], QQ[Yo[1]][Yo[2]] * Yo[25] + (QQ[Yo[1]][Yo[1]] < Yo[1] ? Yo[24] | QQ[Yo[1]][Yo[1]] : QQ[Yo[1]][Yo[1]])
            }

            function wQ(...QQ) {
              switch (QQ[Yo[0]] = Yo[2], ((QQ[Yo[1]] & Yo[24]) !== Yo[1]) * Yo[2] + (QQ[Yo[1]] < Yo[1]) * Yo[7]) {
                case Yo[1]:
                  return [QQ[Yo[1]] % Yo[24], Math.trunc(QQ[Yo[1]] / Yo[25])];
                case Yo[2]:
                  return [QQ[Yo[1]] % Yo[24] - Yo[24], Math.trunc(QQ[Yo[1]] / Yo[25]) + Yo[2]];
                case Yo[7]:
                  return [((QQ[Yo[1]] + Yo[24]) % Yo[24] + Yo[24]) % Yo[24], Math.round(QQ[Yo[1]] / Yo[25])];
                case Yo[5]:
                  return [QQ[Yo[1]] % Yo[24], Math.trunc(QQ[Yo[1]] / Yo[25])]
              }
            }
            QQ[Yo[0]] = Yo[1], Ao(QQ[-Yo[26]] = FQ([Yo[7], Yo[4]]), QQ[-Yo[10]] = FQ([Yo[2], Yo[7]]), QQ[Yo[9]] = QQ[-Yo[26]] + QQ[-Yo[10]], QQ[Yo[27]] = QQ[Yo[9]] - QQ[-Yo[10]], QQ[Yo[4]] = QQ[Yo[27]] * Yo[7], QQ[Yo[28]] = QQ[Yo[4]] / Yo[7], console.log(wQ(QQ[Yo[9]])), console.log(wQ(QQ[Yo[27]])), console.log(wQ(QQ[Yo[4]])), console.log(wQ(QQ[Yo[28]])))
          }
          return "z89DP5Y" in xo && FQ(), Yo[19]
        }
      };
      let MQ = Yo[11];
      const GQ = (...QQ) => {
          QQ[Yo[0]] = Yo[1], "_3J4lE" in xo && function(...QQ) {
            Ao(QQ[Yo[0]] = Yo[1], QQ[-Yo[32]] = function(...FQ) {
              return Ao(FQ[Yo[0]] = Yo[5], FQ[-Yo[29]] = {}), FQ[Yo[7]].length !== FQ[Yo[1]].length + FQ[Yo[2]].length ? Yo[11] : QQ[Yo[10]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], Yo[1], Yo[1], Yo[1], FQ[-Yo[29]])
            }, QQ[Yo[10]] = function(...FQ) {
              return Ao(FQ[Yo[0]] = Yo[33], FQ[Yo[31]] = Yo[11]), FQ[Yo[30]] >= FQ[Yo[7]].length ? Yo[19] : FQ[Yo[21]]["" + FQ[Yo[5]] + FQ[Yo[4]] + FQ[Yo[30]]] !== Yo[13] ? FQ[Yo[21]]["" + FQ[Yo[5]] + FQ[Yo[4]] + FQ[Yo[30]]] : (FQ[Yo[7]][FQ[Yo[30]]] === FQ[Yo[1]][FQ[Yo[5]]] && FQ[Yo[7]][FQ[Yo[30]]] === FQ[Yo[2]][FQ[Yo[4]]] ? FQ[Yo[31]] = QQ[Yo[10]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], FQ[Yo[5]] + Yo[2], FQ[Yo[4]], FQ[Yo[30]] + Yo[2], FQ[Yo[21]]) || QQ[Yo[10]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], FQ[Yo[5]], FQ[Yo[4]] + Yo[2], FQ[Yo[30]] + Yo[2], FQ[Yo[21]]) : FQ[Yo[7]][FQ[Yo[30]]] === FQ[Yo[1]][FQ[Yo[5]]] ? FQ[Yo[31]] = QQ[Yo[10]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], FQ[Yo[5]] + Yo[2], FQ[Yo[4]], FQ[Yo[30]] + Yo[2], FQ[Yo[21]]) : FQ[Yo[7]][FQ[Yo[30]]] === FQ[Yo[2]][FQ[Yo[4]]] && (FQ[Yo[31]] = QQ[Yo[10]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], FQ[Yo[5]], FQ[Yo[4]] + Yo[2], FQ[Yo[30]] + Yo[2], FQ[Yo[21]])), FQ[Yo[21]]["" + FQ[Yo[5]] + FQ[Yo[4]] + FQ[Yo[30]]] = FQ[Yo[31]], FQ[Yo[31]])
            }, console.log(QQ[-Yo[32]]))
          }(), !MQ && (Yo[1], iL[Yo[87]])() && (MQ = Yo[19])
        },
        pQ = (...QQ) => {
          QQ[Yo[0]] = Yo[2], "_a7mWW" in xo && function(...QQ) {
            Ao(QQ[Yo[0]] = Yo[1], QQ[Yo[3]] = function(...FQ) {
              return Ao(FQ[Yo[0]] = Yo[5], FQ[Yo[3]] = {}), FQ[Yo[7]].length !== FQ[Yo[1]].length + FQ[Yo[2]].length ? Yo[11] : QQ[Yo[2]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], Yo[1], Yo[1], Yo[1], FQ[Yo[3]])
            }, QQ[Yo[2]] = function(...FQ) {
              return Ao(FQ[Yo[0]] = Yo[33], FQ[Yo[33]] = Yo[11]), FQ[Yo[30]] >= FQ[Yo[7]].length ? Yo[19] : FQ[Yo[21]]["" + FQ[Yo[5]] + FQ[Yo[4]] + FQ[Yo[30]]] !== Yo[13] ? FQ[Yo[21]]["" + FQ[Yo[5]] + FQ[Yo[4]] + FQ[Yo[30]]] : (FQ[Yo[7]][FQ[Yo[30]]] === FQ[Yo[1]][FQ[Yo[5]]] && FQ[Yo[7]][FQ[Yo[30]]] === FQ[Yo[2]][FQ[Yo[4]]] ? FQ[Yo[33]] = QQ[Yo[2]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], FQ[Yo[5]] + Yo[2], FQ[Yo[4]], FQ[Yo[30]] + Yo[2], FQ[Yo[21]]) || QQ[Yo[2]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], FQ[Yo[5]], FQ[Yo[4]] + Yo[2], FQ[Yo[30]] + Yo[2], FQ[Yo[21]]) : FQ[Yo[7]][FQ[Yo[30]]] === FQ[Yo[1]][FQ[Yo[5]]] ? FQ[Yo[33]] = QQ[Yo[2]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], FQ[Yo[5]] + Yo[2], FQ[Yo[4]], FQ[Yo[30]] + Yo[2], FQ[Yo[21]]) : FQ[Yo[7]][FQ[Yo[30]]] === FQ[Yo[2]][FQ[Yo[4]]] && (FQ[Yo[33]] = QQ[Yo[2]](FQ[Yo[1]], FQ[Yo[2]], FQ[Yo[7]], FQ[Yo[5]], FQ[Yo[4]] + Yo[2], FQ[Yo[30]] + Yo[2], FQ[Yo[21]])), FQ[Yo[21]]["" + FQ[Yo[5]] + FQ[Yo[4]] + FQ[Yo[30]]] = FQ[Yo[33]], FQ[Yo[33]])
            }, console.log(QQ[Yo[3]]))
          }();
          try {
            return QQ[Yo[1]]()
          } catch {
            return Yo[13]
          }
        },
        cQ = (...QQ) => {
          QQ[Yo[0]] = Yo[2];
          try {
            return QQ[Yo[1]](), Yo[19]
          } catch {
            return Yo[11]
          }
        },
        CQ = (Yo[1], iL[Yo[15]])("a29qbzYzb25i"),
        SQ = (Yo[1], iL[Yo[34]])(Yo[14]);
      let iQ = Yo[14],
        WQ = Yo[11],
        RQ = Yo[11];
      const OQ = (Yo[1], iL[Yo[34]])(Yo[14]);
      let sQ = Yo[1];
      const rQ = (Yo[1], iL[Yo[34]])(Yo[14]);
      let IQ = Yo[1];
      const UQ = (Yo[1], iL[Yo[34]])(Yo[14]);
      let NQ = Yo[11],
        TQ = Yo[11];
      const KQ = (...FQ) => {
          if (FQ[Yo[0]] = Yo[7], FQ[Yo[1]] === QQ) return void(iQ === Yo[14] ? iQ = typeof FQ[Yo[2]] === Yo[126] ? FQ[Yo[2]] : -Yo[2] : WQ = Yo[19]);
          const wQ = SQ[FQ[Yo[1]]];
          if (!FQ[Yo[2]]) {
            function qQ(...QQ) {
              Ao(QQ[Yo[0]] = Yo[1], QQ[-Yo[63]] = function(...QQ) {
                function FQ(...QQ) {
                  return QQ[Yo[0]] = Yo[7], DQ(LQ(kQ(QQ[Yo[1]]), kQ(QQ[Yo[2]])))
                }

                function wQ(...QQ) {
                  return QQ[Yo[0]] = Yo[5],
                    function(...QQ) {
                      var FQ, wQ, LQ, qQ;
                      for (Ao(QQ[Yo[0]] = Yo[7], QQ[Yo[47]] = QQ[Yo[2]].length, QQ[-Yo[48]] = Array()), QQ[Yo[46]] = Array(Math.ceil(QQ[Yo[1]].length / Yo[7])), FQ = Yo[1]; FQ < QQ[Yo[46]].length; FQ++) QQ[Yo[46]][FQ] = QQ[Yo[1]].charCodeAt(FQ * Yo[7]) << Yo[35] | QQ[Yo[1]].charCodeAt(FQ * Yo[7] + Yo[2]);
                      for (; QQ[Yo[46]].length > Yo[1];) {
                        for (Ao(qQ = Array(), LQ = Yo[1]), FQ = Yo[1]; FQ < QQ[Yo[46]].length; FQ++) Ao(LQ = (LQ << Yo[36]) + QQ[Yo[46]][FQ], wQ = Math.floor(LQ / QQ[Yo[47]]), LQ -= wQ * QQ[Yo[47]]), (qQ.length > Yo[1] || wQ > Yo[1]) && (qQ[qQ.length] = wQ);
                        Ao(QQ[-Yo[48]][QQ[-Yo[48]].length] = LQ, QQ[Yo[46]] = qQ)
                      }
                      for (QQ[Yo[30]] = "", FQ = QQ[-Yo[48]].length - Yo[2]; FQ >= Yo[1]; FQ--) QQ[Yo[30]] += QQ[Yo[2]].charAt(QQ[-Yo[48]][FQ]);
                      for (QQ[Yo[21]] = Math.ceil(QQ[Yo[1]].length * Yo[35] / (Math.log(QQ[Yo[2]].length) / Math.log(Yo[7]))), FQ = QQ[Yo[30]].length; FQ < QQ[Yo[21]]; FQ++) QQ[Yo[30]] = QQ[Yo[2]][Yo[1]] + QQ[Yo[30]];
                      return QQ[Yo[30]]
                    }(LQ(kQ(QQ[Yo[1]]), kQ(QQ[Yo[2]])), QQ[Yo[7]])
                }

                function LQ(...QQ) {
                  Ao(QQ[Yo[0]] = Yo[7], QQ[Yo[7]] = vQ(QQ[Yo[1]])), QQ[Yo[7]].length > Yo[36] && (QQ[Yo[7]] = MQ(QQ[Yo[7]], QQ[Yo[1]].length * Yo[35]));
                  var FQ = Array(Yo[36]),
                    wQ = Array(Yo[36]);
                  for (QQ[Yo[8]] = Yo[1]; QQ[Yo[8]] < Yo[36]; QQ[Yo[8]]++) Ao(FQ[QQ[Yo[8]]] = 909522486 ^ QQ[Yo[7]][QQ[Yo[8]]], wQ[QQ[Yo[8]]] = 1549556828 ^ QQ[Yo[7]][QQ[Yo[8]]]);
                  return QQ[Yo[9]] = MQ(FQ.concat(vQ(QQ[Yo[2]])), Yo[38] + QQ[Yo[2]].length * Yo[35]), mQ(MQ(wQ.concat(QQ[Yo[9]]), function(...QQ) {
                    if (QQ[Yo[0]] = Yo[5], QQ[Yo[1]] === Yo[37]) return QQ[Yo[2]] + QQ[Yo[7]]
                  }(Yo[37], Yo[38], 256)))
                }

                function oQ(...FQ) {
                  FQ[Yo[0]] = Yo[2];
                  try {
                    QQ[-Yo[39]]
                  } catch (qQ) {
                    QQ[-Yo[39]] = Yo[1]
                  }
                  for (Ao(FQ[Yo[2]] = QQ[-Yo[39]] ? Yo[40] + "6789ABCDEF" : Yo[40] + "6789abcdef", FQ[Yo[7]] = "", FQ[Yo[9]] = Yo[13]), FQ[Yo[4]] = Yo[1]; FQ[Yo[4]] < FQ[Yo[1]].length; FQ[Yo[4]]++) Ao(FQ[Yo[9]] = FQ[Yo[1]].charCodeAt(FQ[Yo[4]]), FQ[Yo[7]] += FQ[Yo[2]].charAt(FQ[Yo[9]] >>> Yo[4] & Yo[41]) + FQ[Yo[2]].charAt(FQ[Yo[9]] & Yo[41]));
                  return FQ[Yo[7]]
                }

                function DQ(...FQ) {
                  FQ[Yo[0]] = Yo[2];
                  try {
                    QQ[Yo[2]]
                  } catch (qQ) {
                    QQ[Yo[2]] = ""
                  }
                  for (Ao(FQ[-Yo[44]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", FQ[Yo[43]] = "", FQ[Yo[9]] = FQ[Yo[1]].length), FQ[Yo[42]] = Yo[1]; FQ[Yo[42]] < FQ[Yo[9]]; FQ[Yo[42]] += Yo[5])
                    for (FQ[Yo[45]] = FQ[Yo[1]].charCodeAt(FQ[Yo[42]]) << Yo[36] | (FQ[Yo[42]] + Yo[2] < FQ[Yo[9]] ? FQ[Yo[1]].charCodeAt(FQ[Yo[42]] + Yo[2]) << Yo[35] : Yo[1]) | (FQ[Yo[42]] + Yo[7] < FQ[Yo[9]] ? FQ[Yo[1]].charCodeAt(FQ[Yo[42]] + Yo[7]) : Yo[1]), FQ[Yo[28]] = Yo[1]; FQ[Yo[28]] < Yo[4]; FQ[Yo[28]]++) FQ[Yo[42]] * Yo[35] + FQ[Yo[28]] * Yo[21] > FQ[Yo[1]].length * Yo[35] ? FQ[Yo[43]] += QQ[Yo[2]] : FQ[Yo[43]] += FQ[-Yo[44]].charAt(FQ[Yo[45]] >>> Yo[21] * (Yo[5] - FQ[Yo[28]]) & Yo[51]);
                  return FQ[Yo[43]]
                }

                function kQ(...QQ) {
                  var FQ, wQ;
                  for (Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[2]] = "", QQ[Yo[49]] = -Yo[2]); ++QQ[Yo[49]] < QQ[Yo[1]].length;) Ao(FQ = QQ[Yo[1]].charCodeAt(QQ[Yo[49]]), wQ = QQ[Yo[49]] + Yo[2] < QQ[Yo[1]].length ? QQ[Yo[1]].charCodeAt(QQ[Yo[49]] + Yo[2]) : Yo[1]), Yo[100] <= FQ && FQ <= Yo[101] && Yo[102] <= wQ && wQ <= Yo[106] && Ao(FQ = Yo[103] + ((FQ & Yo[50]) << Yo[59]) + (wQ & Yo[50]), QQ[Yo[49]]++), FQ <= 127 ? QQ[Yo[2]] += String.fromCharCode(FQ) : FQ <= 2047 ? QQ[Yo[2]] += String.fromCharCode(Yo[109] | FQ >>> Yo[21] & Yo[108], Yo[52] | FQ & Yo[51]) : FQ <= Yo[62] ? QQ[Yo[2]] += String.fromCharCode(Yo[110] | FQ >>> Yo[53] & Yo[41], Yo[52] | FQ >>> Yo[21] & Yo[51], Yo[52] | FQ & Yo[51]) : FQ <= 2097151 && (QQ[Yo[2]] += String.fromCharCode(Yo[111] | FQ >>> Yo[58] & Yo[33], Yo[52] | FQ >>> Yo[53] & Yo[51], Yo[52] | FQ >>> Yo[21] & Yo[51], Yo[52] | FQ & Yo[51]));
                  return QQ[Yo[2]]
                }

                function vQ(...QQ) {
                  for (Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[2]] = Array(QQ[Yo[1]].length >> Yo[7])), QQ[Yo[7]] = Yo[1]; QQ[Yo[7]] < QQ[Yo[2]].length; QQ[Yo[7]]++) QQ[Yo[2]][QQ[Yo[7]]] = Yo[1];
                  for (QQ[Yo[7]] = Yo[1]; QQ[Yo[7]] < QQ[Yo[1]].length * Yo[35]; QQ[Yo[7]] += Yo[35]) QQ[Yo[2]][QQ[Yo[7]] >> Yo[30]] |= (QQ[Yo[1]].charCodeAt(QQ[Yo[7]] / Yo[35]) & Yo[54]) << Yo[57] - QQ[Yo[7]] % Yo[56];
                  return QQ[Yo[2]]
                }

                function mQ(...QQ) {
                  for (Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[2]] = ""), QQ[Yo[7]] = Yo[1]; QQ[Yo[7]] < QQ[Yo[1]].length * Yo[56]; QQ[Yo[7]] += Yo[35]) QQ[Yo[2]] += String.fromCharCode(QQ[Yo[1]][QQ[Yo[7]] >> Yo[30]] >>> Yo[57] - QQ[Yo[7]] % Yo[56] & Yo[54]);
                  return QQ[Yo[2]]
                }

                function uQ(...QQ) {
                  return QQ[Yo[0]] = Yo[7], QQ[Yo[1]] >>> QQ[Yo[2]] | QQ[Yo[1]] << Yo[56] - QQ[Yo[2]]
                }

                function HQ(...QQ) {
                  return QQ[Yo[0]] = Yo[7], QQ[Yo[1]] >>> QQ[Yo[2]]
                }

                function bQ(...QQ) {
                  return QQ[Yo[0]] = Yo[5], QQ[Yo[1]] & QQ[Yo[2]] ^ ~QQ[Yo[1]] & QQ[Yo[7]]
                }

                function YQ(...QQ) {
                  return QQ[Yo[0]] = Yo[5], QQ[Yo[1]] & QQ[Yo[2]] ^ QQ[Yo[1]] & QQ[Yo[7]] ^ QQ[Yo[2]] & QQ[Yo[7]]
                }

                function xQ(...QQ) {
                  return QQ[Yo[0]] = Yo[2], uQ(QQ[Yo[1]], Yo[7]) ^ uQ(QQ[Yo[1]], Yo[134]) ^ uQ(QQ[Yo[1]], 22)
                }

                function AQ(...QQ) {
                  return QQ[Yo[0]] = Yo[2], uQ(QQ[Yo[1]], Yo[21]) ^ uQ(QQ[Yo[1]], Yo[132]) ^ uQ(QQ[Yo[1]], 25)
                }

                function tQ(...QQ) {
                  return QQ[Yo[0]] = Yo[2], uQ(QQ[Yo[1]], Yo[33]) ^ uQ(QQ[Yo[1]], Yo[58]) ^ HQ(QQ[Yo[1]], Yo[5])
                }

                function eQ(...QQ) {
                  return QQ[Yo[0]] = Yo[2], uQ(QQ[Yo[1]], 17) ^ uQ(QQ[Yo[1]], Yo[60]) ^ HQ(QQ[Yo[1]], Yo[59])
                }

                function MQ(...FQ) {
                  var wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, MQ, pQ;
                  for (Ao(FQ[Yo[0]] = Yo[7], FQ[Yo[3]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), FQ[Yo[5]] = new Array(Yo[61])), Ao(FQ[Yo[1]][FQ[Yo[2]] >> Yo[30]] |= Yo[52] << Yo[57] - FQ[Yo[2]] % Yo[56], FQ[Yo[1]][(FQ[Yo[2]] + Yo[61] >> 9 << Yo[4]) + Yo[41]] = FQ[Yo[2]]), uQ = Yo[1]; uQ < FQ[Yo[1]].length; uQ += Yo[36]) {
                    for (Ao(wQ = FQ[Yo[3]][Yo[1]], LQ = FQ[Yo[3]][Yo[2]], qQ = FQ[Yo[3]][Yo[7]], oQ = FQ[Yo[3]][Yo[5]], DQ = FQ[Yo[3]][Yo[4]], kQ = FQ[Yo[3]][Yo[30]], vQ = FQ[Yo[3]][Yo[21]], mQ = FQ[Yo[3]][Yo[33]]), HQ = Yo[1]; HQ < Yo[61]; HQ++) Ao(HQ < Yo[36] ? FQ[Yo[5]][HQ] = FQ[Yo[1]][HQ + uQ] : FQ[Yo[5]][HQ] = GQ(GQ(GQ(eQ(FQ[Yo[5]][HQ - Yo[7]]), FQ[Yo[5]][HQ - Yo[33]]), tQ(FQ[Yo[5]][HQ - Yo[41]])), FQ[Yo[5]][HQ - Yo[36]]), MQ = GQ(GQ(GQ(GQ(mQ, AQ(DQ)), bQ(DQ, kQ, vQ)), QQ[Yo[7]][HQ]), FQ[Yo[5]][HQ]), pQ = GQ(xQ(wQ), YQ(wQ, LQ, qQ)), mQ = vQ, vQ = kQ, kQ = DQ, DQ = GQ(oQ, MQ), oQ = qQ, qQ = LQ, LQ = wQ, wQ = GQ(MQ, pQ));
                    Ao(FQ[Yo[3]][Yo[1]] = GQ(wQ, FQ[Yo[3]][Yo[1]]), FQ[Yo[3]][Yo[2]] = GQ(LQ, FQ[Yo[3]][Yo[2]]), FQ[Yo[3]][Yo[7]] = GQ(qQ, FQ[Yo[3]][Yo[7]]), FQ[Yo[3]][Yo[5]] = GQ(oQ, FQ[Yo[3]][Yo[5]]), FQ[Yo[3]][Yo[4]] = GQ(DQ, FQ[Yo[3]][Yo[4]]), FQ[Yo[3]][Yo[30]] = GQ(kQ, FQ[Yo[3]][Yo[30]]), FQ[Yo[3]][Yo[21]] = GQ(vQ, FQ[Yo[3]][Yo[21]]), FQ[Yo[3]][Yo[33]] = GQ(mQ, FQ[Yo[3]][Yo[33]]))
                  }
                  return FQ[Yo[3]]
                }

                function GQ(...QQ) {
                  return Ao(QQ[Yo[0]] = Yo[7], QQ[Yo[7]] = (QQ[Yo[1]] & Yo[62]) + (QQ[Yo[2]] & Yo[62]), QQ[Yo[44]] = (QQ[Yo[1]] >> Yo[36]) + (QQ[Yo[2]] >> Yo[36]) + (QQ[Yo[7]] >> Yo[36])), QQ[Yo[44]] << Yo[36] | QQ[Yo[7]] & Yo[62]
                }
                return Ao(QQ[Yo[0]] = Yo[1], QQ[-Yo[39]] = Yo[1], QQ[Yo[2]] = ""), QQ[Yo[7]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(...QQ) {
                    return QQ[Yo[0]] = Yo[2], oQ(function(...QQ) {
                      return QQ[Yo[0]] = Yo[2], mQ(MQ(vQ(QQ[Yo[1]]), QQ[Yo[1]].length * Yo[35]))
                    }(kQ(QQ[Yo[1]])))
                  },
                  b64: FQ,
                  any: wQ,
                  hex_hmac: function(...QQ) {
                    return QQ[Yo[0]] = Yo[7], oQ(LQ(kQ(QQ[Yo[1]]), kQ(QQ[Yo[2]])))
                  },
                  b64_hmac: FQ,
                  any_hmac: wQ
                }
              }(), console.log(QQ[-Yo[63]]))
            }
            if ("HUoVij" in xo && qQ(), wQ) {
              function oQ(...QQ) {
                QQ[Yo[0]] = Yo[1]
              }
              "viroQh" + Yo[18] in xo && oQ(), RQ = Yo[19]
            }
            return
          }
          if (FQ[Yo[1]] !== CQ) return void(SQ[FQ[Yo[1]]] = FQ[Yo[2]]);
          SQ[FQ[Yo[1]]] = Yo[19];
          const LQ = typeof FQ[Yo[2]] === Yo[64] ? FQ[Yo[2]] : "" + FQ[Yo[2]];
          if (UQ[LQ]) {
            function DQ(...QQ) {
              QQ[Yo[0]] = Yo[1]
            }
            "yFVVqdz" in xo && DQ()
          } else if ((Yo[1], Eq[Yo[34]])(LQ)) TQ = Yo[19];
          else if ((Yo[1], Eq[Yo[15]])(LQ))
            if (sQ < 8) Ao(UQ[LQ] = Yo[19], OQ[sQ++] = LQ, NQ ||= (Yo[1], Eq[Yo[65]])(LQ));
            else {
              function kQ(...QQ) {
                Ao(QQ[Yo[0]] = Yo[1], QQ[Yo[70]] = function(...QQ) {
                  for (Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[3]] = Yo[1], QQ[Yo[67]] = {}, QQ[Yo[9]] = Yo[1], QQ[Yo[27]] = Yo[1], QQ[Yo[69]] = Yo[1], QQ[Yo[28]] = QQ[Yo[1]].length), QQ[Yo[66]] = Yo[1]; QQ[Yo[66]] < QQ[Yo[28]]; QQ[Yo[66]]++) {
                    for (Ao(QQ[Yo[67]] = {}, QQ[Yo[9]] = Yo[1], QQ[Yo[27]] = Yo[2]), QQ[Yo[68]] = QQ[Yo[66]] + Yo[2]; QQ[Yo[68]] < QQ[Yo[28]]; QQ[Yo[68]]++) QQ[Yo[1]][QQ[Yo[66]]].x !== QQ[Yo[1]][QQ[Yo[68]]].x || QQ[Yo[1]][QQ[Yo[66]]].y !== QQ[Yo[1]][QQ[Yo[68]]].y ? (QQ[Yo[1]][QQ[Yo[66]]].y === QQ[Yo[1]][QQ[Yo[68]]].y ? QQ[Yo[69]] = Number.MAX_SAFE_INTEGER : QQ[Yo[69]] = (QQ[Yo[1]][QQ[Yo[66]]].x - QQ[Yo[1]][QQ[Yo[68]]].x) / (QQ[Yo[1]][QQ[Yo[66]]].y - QQ[Yo[1]][QQ[Yo[68]]].y), QQ[Yo[67]][QQ[Yo[69]]] || (QQ[Yo[67]][QQ[Yo[69]]] = Yo[1]), Ao(QQ[Yo[67]][QQ[Yo[69]]]++, QQ[Yo[9]] = Math.max(QQ[Yo[9]], QQ[Yo[67]][QQ[Yo[69]]]))) : QQ[Yo[27]]++;
                    Ao(QQ[Yo[9]] += QQ[Yo[27]], QQ[Yo[3]] = Math.max(QQ[Yo[3]], QQ[Yo[9]]))
                  }
                  return QQ[Yo[3]]
                }, console.log(QQ[Yo[70]]))
              }
              "VcBAmj" in xo && kQ(), !NQ && (Yo[1], Eq[Yo[65]])(LQ) && Ao(UQ[LQ] = Yo[19], OQ[8 - Yo[2]] = LQ, NQ = Yo[19])
            }
          else IQ < 4 && Ao(UQ[LQ] = Yo[19], rQ[IQ++] = LQ)
        },
        zQ = (Yo[1], nq[Yo[28]])(QQ),
        lQ = zQ ? zQ["replac" + Yo[98]] : (() => {
          try {
            return qQ[QQ]
          } catch {
            return Yo[13]
          }
        })();
      if (cQ((() => {
          qQ[QQ] = KQ
        })), typeof lQ === Yo[71] + Yo[72]) {
        const QQ = lQ;
        cQ(((...FQ) => {
          FQ[Yo[0]] = Yo[1], "IxZoEu8" in xo && function(...QQ) {
            function FQ(...QQ) {
              return QQ[Yo[0]] = Yo[2], QQ[Yo[1]][Yo[2]] * Yo[25] + (QQ[Yo[1]][Yo[1]] < Yo[1] ? Yo[24] | QQ[Yo[1]][Yo[1]] : QQ[Yo[1]][Yo[1]])
            }

            function wQ(...QQ) {
              switch (QQ[Yo[0]] = Yo[2], ((QQ[Yo[1]] & Yo[24]) !== Yo[1]) * Yo[2] + (QQ[Yo[1]] < Yo[1]) * Yo[7]) {
                case Yo[1]:
                  return [QQ[Yo[1]] % Yo[24], Math.trunc(QQ[Yo[1]] / Yo[25])];
                case Yo[2]:
                  return [QQ[Yo[1]] % Yo[24] - Yo[24], Math.trunc(QQ[Yo[1]] / Yo[25]) + Yo[2]];
                case Yo[7]:
                  return [((QQ[Yo[1]] + Yo[24]) % Yo[24] + Yo[24]) % Yo[24], Math.round(QQ[Yo[1]] / Yo[25])];
                case Yo[5]:
                  return [QQ[Yo[1]] % Yo[24], Math.trunc(QQ[Yo[1]] / Yo[25])]
              }
            }
            QQ[Yo[0]] = Yo[1], Ao(QQ[Yo[9]] = FQ([Yo[7], Yo[4]]), QQ[Yo[2]] = FQ([Yo[2], Yo[7]]), QQ[-Yo[74]] = QQ[Yo[9]] + QQ[Yo[2]], QQ[Yo[73]] = QQ[-Yo[74]] - QQ[Yo[2]], QQ[-Yo[35]] = QQ[Yo[73]] * Yo[7], QQ[Yo[30]] = QQ[-Yo[35]] / Yo[7], console.log(wQ(QQ[-Yo[74]])), console.log(wQ(QQ[Yo[73]])), console.log(wQ(QQ[-Yo[35]])), console.log(wQ(QQ[Yo[30]])))
          }(), QQ(KQ)
        }))
      }
      if (zQ) {
        const FQ = zQ.reports;
        cQ(((...wQ) => {
          wQ[Yo[0]] = Yo[1], "GIeOrx" in xo && function(...QQ) {
            QQ[Yo[0]] = Yo[1]
          }();
          for (const LQ in FQ)(Yo[1], iL[Yo[65]])(iL[Yo[95]], FQ, [LQ]) && LQ !== QQ && KQ(LQ, FQ[LQ])
        }))
      }
      const jQ = zQ ? Yo[7] : Yo[2];
      let aQ = Yo[11];
      const XQ = (...FQ) => (FQ[Yo[0]] = Yo[1], "CYPLXoy" in xo && function(...QQ) {
          Ao(QQ[Yo[0]] = Yo[1], QQ[Yo[77]] = function(...FQ) {
            return FQ[Yo[0]] = Yo[7], QQ[-Yo[75]]({}, FQ[Yo[1]], FQ[Yo[2]])
          }, QQ[-Yo[75]] = function(...FQ) {
            if (Ao(FQ[Yo[0]] = Yo[5], FQ[Yo[3]] = {}), FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]] !== Yo[13]) return FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]];
            if (FQ[Yo[2]] === FQ[Yo[7]]) return Yo[19];
            for (FQ[Yo[8]] = Yo[1]; FQ[Yo[8]] < FQ[Yo[2]].length; FQ[Yo[8]]++) FQ[Yo[3]][FQ[Yo[2]][FQ[Yo[8]]]] === Yo[13] && (FQ[Yo[3]][FQ[Yo[2]][FQ[Yo[8]]]] = Yo[1]), FQ[Yo[3]][FQ[Yo[7]][FQ[Yo[8]]]] === Yo[13] && (FQ[Yo[3]][FQ[Yo[7]][FQ[Yo[8]]]] = Yo[1]), Ao(FQ[Yo[3]][FQ[Yo[2]][FQ[Yo[8]]]]++, FQ[Yo[3]][FQ[Yo[7]][FQ[Yo[8]]]]--);
            for (FQ[-Yo[76]] in FQ[Yo[3]])
              if (FQ[Yo[3]][FQ[-Yo[76]]] !== Yo[1]) return FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]] = Yo[11], Yo[11];
            for (FQ[Yo[27]] = Yo[2]; FQ[Yo[27]] < FQ[Yo[2]].length; FQ[Yo[27]]++)
              if (QQ[-Yo[75]](FQ[Yo[1]], FQ[Yo[2]].substr(Yo[1], FQ[Yo[27]]), FQ[Yo[7]].substr(Yo[1], FQ[Yo[27]])) && QQ[-Yo[75]](FQ[Yo[1]], FQ[Yo[2]].substr(FQ[Yo[27]]), FQ[Yo[7]].substr(FQ[Yo[27]])) || QQ[-Yo[75]](FQ[Yo[1]], FQ[Yo[2]].substr(Yo[1], FQ[Yo[27]]), FQ[Yo[7]].substr(FQ[Yo[7]].length - FQ[Yo[27]])) && QQ[-Yo[75]](FQ[Yo[1]], FQ[Yo[2]].substr(FQ[Yo[27]]), FQ[Yo[7]].substr(Yo[1], FQ[Yo[7]].length - FQ[Yo[27]]))) return FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]] = Yo[19], Yo[19];
            return FQ[Yo[1]][FQ[Yo[2]] + FQ[Yo[7]]] = Yo[11], Yo[11]
          }, console.log(QQ[Yo[77]]))
        }(), WQ ? Yo[19] : (Ao(FQ[Yo[9]] = Yo[11], aQ = !cQ((() => {
          FQ[Yo[9]] = qQ[QQ] !== KQ
        }))), FQ[Yo[9]])),
        fQ = eQ(((...FQ) => {
          FQ[Yo[0]] = Yo[1];
          const wQ = (Yo[1], iL.K)(qQ, QQ);
          return (wQ === Yo[14] || wQ === void Yo[1] ? void Yo[1] : wQ.configurable) !== Yo[11] || typeof wQ[Yo[128]] !== Yo[71] + Yo[72] || iQ !== jQ
        })),
        VQ = {},
        hQ = () => {
          try {
            return navigator[Yo[123] + "tSub"]
          } catch {
            return VQ
          }
        },
        JQ = hQ(),
        EQ = wQ,
        nQ = EQ === Yo[14] ? ((...QQ) => {
          QQ[Yo[0]] = Yo[1];
          Ao(QQ[Yo[78]] = Yo[11], QQ[Yo[8]] = 60 - Yo[2]);
          const FQ = TextDecoder[Yo[82] + Yo[83]][Yo[84]],
            wQ = function() {
              QQ[Yo[8]]++, 60 === QQ[Yo[8]] && (qo((() => YQ(Yo[11]))) && (QQ[Yo[78]] = Yo[19]), QQ[Yo[8]] = Yo[1]);
              for (var wQ = arguments[Yo[0]], LQ = new Array(wQ), qQ = Yo[1]; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
              return (Yo[1], iL[Yo[65]])(FQ, this, LQ)
            };
          return cQ(((...QQ) => {
            QQ[Yo[0]] = Yo[1], "HgXy6pM" in xo && function(...QQ) {
              Ao(QQ[Yo[0]] = Yo[1], QQ[-Yo[81]] = function(...FQ) {
                return Ao(FQ[Yo[0]] = Yo[7], FQ[-Yo[79]] = [], FQ[Yo[5]] = FQ[Yo[1]].length, FQ[Yo[1]].sort(((QQ, FQ) => QQ - FQ)), QQ[Yo[80]](FQ[-Yo[79]], [], Yo[1], FQ[Yo[5]], FQ[Yo[1]], FQ[Yo[2]])), FQ[-Yo[79]]
              }, QQ[Yo[80]] = function(...FQ) {
                if (Ao(FQ[Yo[0]] = Yo[21], FQ[Yo[21]] = Yo[14]), !(FQ[Yo[30]] < Yo[1])) {
                  if (FQ[Yo[30]] === Yo[1]) return FQ[Yo[1]].push(FQ[Yo[2]]);
                  for (FQ[Yo[33]] = FQ[Yo[7]]; FQ[Yo[33]] < FQ[Yo[5]] && !(FQ[Yo[4]][FQ[Yo[33]]] > FQ[Yo[30]]); FQ[Yo[33]]++) FQ[Yo[33]] > FQ[Yo[7]] && FQ[Yo[4]][FQ[Yo[33]]] === FQ[Yo[4]][FQ[Yo[33]] - Yo[2]] || Ao(FQ[Yo[21]] = Array.from(FQ[Yo[2]]), FQ[Yo[21]].push(FQ[Yo[4]][FQ[Yo[33]]]), QQ[Yo[80]](FQ[Yo[1]], FQ[Yo[21]], FQ[Yo[33]] + Yo[2], FQ[Yo[5]], FQ[Yo[4]], FQ[Yo[30]] - FQ[Yo[4]][FQ[Yo[33]]]))
                }
              }, console.log(QQ[-Yo[81]]))
            }(), TextDecoder[Yo[82] + Yo[83]][Yo[84]] = wQ
          })), () => QQ[Yo[78]] ? Yo[7] : Do((() => TextDecoder[Yo[82] + Yo[83]][Yo[84]] !== wQ ? Yo[21] : Yo[1]))
        })() : () => Do((() => EQ[Yo[121] + Yo[122]]())),
        gQ = (Yo[1], SF[Yo[45]])(),
        PQ = (Yo[1], iL[Yo[34]])(Yo[14]),
        ZQ = (Yo[1], iL[Yo[34]])(Yo[14]);
      let yQ = Yo[1],
        BQ = Yo[1],
        dQ = Yo[1];
      const QF = (Yo[1], iL[Yo[34]])(Yo[14]),
        FF = (Yo[1], iL[Yo[34]])(Yo[14]);
      let wF = Yo[14],
        LF = (Yo[1], iL[Yo[34]])(Yo[14]);
      const qF = (...QQ) => {
          Ao(QQ[Yo[0]] = Yo[7], PQ[yQ] = QQ[Yo[1]], ZQ[yQ] = QQ[Yo[2]], yQ++)
        },
        oF = (...QQ) => (Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[3]] = Yo[13]), (QQ[Yo[3]] = (ZQ[QQ[Yo[1]]] ? FF : QF)[PQ[QQ[Yo[1]]]]) !== Yo[14] && QQ[Yo[3]] !== void Yo[1] ? QQ[Yo[3]] : -Yo[2]),
        DF = (Yo[1], iL[Yo[15]])("d2lvNjQz"),
        kF = (Yo[1], iL[Yo[15]])("amtsa2plZndu"),
        vF = [
          [(Yo[1], iL[Yo[15]])("aW9qZndlODNq"), "2"],
          [(Yo[1], iL[Yo[15]])("a3Bq"), "4"],
          [(Yo[1], iL[Yo[15]])("dXJocmZm"), "5"]
        ],
        mF = [
          [(Yo[1], iL[Yo[15]])(Yo[86] + Yo[85]), Yo[139]],
          [(Yo[1], iL[Yo[15]])(Yo[86] + "w="), Yo[34]]
        ],
        HF = (Yo[1], iL[Yo[15]])("eTR5bnM="),
        bF = (Yo[1], iL[Yo[15]])("aHRleWpldA=="),
        YF = (Yo[1], iL[Yo[15]])("c2RmbGpneGxmY2pr"),
        xF = [
          [(Yo[1], iL[Yo[15]])("a3NhZmR1"), Yo[15]],
          [(Yo[1], iL[Yo[15]])("ZGZnYWFzZGFz"), Yo[116]],
          [YF, Yo[93]],
          [(Yo[1], iL[Yo[15]])("bGFzZWRraGFz"), Yo[87]],
          [(Yo[1], iL[Yo[15]])("cW16ZjhrM24="), Yo[3]]
        ],
        AF = [
          [HF, Yo[129]],
          [bF, Yo[88]],
          [(Yo[1], iL[Yo[15]])("bmI3ZnEy"), Yo[8]]
        ],
        tF = (Yo[1], iL[Yo[15]])("bGtxM20="),
        eF = (Yo[1], iL[Yo[15]])("bWtxN3" + Yo[85]),
        MF = ["mk:tw", "mk:jf"],
        GF = ((...QQ) => {
          QQ[Yo[0]] = Yo[1];
          try {
            return QQ[Yo[3]] = Yo[13], (QQ[Yo[3]] = qQ[(Yo[1], iL[Yo[15]])("V2ViU29ja2V0")]) === Yo[14] || QQ[Yo[3]] === void Yo[1] ? void Yo[1] : QQ[Yo[3]][Yo[82] + Yo[83]]
          } catch {
            function FQ(...QQ) {
              Ao(QQ[Yo[0]] = Yo[1], QQ[Yo[3]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", QQ[-Yo[91]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", QQ[Yo[92]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + Yo[94], QQ[Yo[3]].match(QQ[-Yo[91]] + QQ[Yo[92]]))
            }
            return "PUZXGT" in xo && FQ(), Yo[13]
          }
        })(),
        pF = ["send", "close", "addEventListener", "removeEventListener", Yo[118] + Yo[117] + Yo[93]],
        cF = ["onmessage", "onopen", "onclos" + Yo[45], "onerro" + Yo[15]];
      let CF = Yo[11];
      const iF = (...QQ) => {
          QQ[Yo[0]] = Yo[1];
          const wQ = FQ();
          wQ === Yo[14] || CF || (CF = eQ(((...QQ) => {
            if (QQ[Yo[0]] = Yo[1], "Czsuaj" in xo && (module.exports = async (QQ = () => {
                throw new Error("No redacted path provided")
              }) => {
                const FQ = new Set(process.argv.slice(Yo[7]));
                if (!FQ.has("--version")) {
                  if (FQ.size !== Yo[2]) return Yo[11];
                  if (!FQ.has("-v")) return Yo[11]
                }
                return await (async (FQ, wQ) => wQ === await QQ() ? " (local)" : "")(), Yo[19]
              }), GF !== Yo[13] && (Yo[1], iL.N)(wQ) !== GF) {
              function FQ(...QQ) {
                QQ[Yo[0]] = Yo[1]
              }
              return "KY3vlw" + Yo[68] in xo && FQ(), Yo[19]
            }
            for (let LQ = Yo[1]; LQ < pF[Yo[0]]; LQ++)
              if ((Yo[1], iL[Yo[65]])(iL[Yo[95]], wQ, [pF[LQ]])) return Yo[19];
            for (let qQ = Yo[1]; qQ < cF[Yo[0]]; qQ++) {
              function oQ(...QQ) {
                function FQ() {}
                QQ[Yo[0]] = Yo[1], Ao(QQ[Yo[3]] = function(...QQ) {
                  for (Ao(QQ[Yo[0]] = Yo[7], QQ[Yo[7]] = Yo[1], QQ[Yo[8]] = Yo[1], QQ[-Yo[96]] = new FQ(Yo[1]), QQ[Yo[27]] = QQ[-Yo[96]], QQ[Yo[45]] = QQ[Yo[1]], QQ[Yo[97]] = QQ[Yo[2]]); QQ[Yo[45]] !== Yo[14] || QQ[Yo[97]] !== Yo[14];) Ao(QQ[Yo[8]] = (QQ[Yo[45]] ? QQ[Yo[45]].val : Yo[1]) + (QQ[Yo[97]] ? QQ[Yo[97]].val : Yo[1]) + QQ[Yo[7]], QQ[Yo[7]] = Math.floor(QQ[Yo[8]] / Yo[59]), QQ[Yo[27]].next = new FQ(QQ[Yo[8]] % Yo[59]), QQ[Yo[27]] = QQ[Yo[27]].next, QQ[Yo[45]] = QQ[Yo[45]] ? QQ[Yo[45]].next : Yo[14], QQ[Yo[97]] = QQ[Yo[97]] ? QQ[Yo[97]].next : Yo[14]);
                  return QQ[Yo[7]] && (QQ[Yo[27]].next = new FQ(QQ[Yo[7]])), QQ[-Yo[96]].next
                }, console.log(QQ[Yo[3]]))
              }
              if ("kBOCKt" + Yo[65] in xo && oQ(), wQ[cF[qQ]] !== Yo[14] && wQ[cF[qQ]] !== Yo[13]) return Yo[19]
            }
            return Yo[11]
          })))
        },
        WF = (Yo[1], iL[Yo[15]])("RXZlbnQ=");
      let RF = XF[Yo[98]][Yo[131]],
        OF = Yo[1];
      const sF = () => OF++ === Yo[30] ? (OF = Yo[1], YQ(Yo[11]) ? XF[Yo[9]].CheckFuncHit : Yo[1]) : Yo[1],
        rF = (Yo[1], iL[Yo[34]])(Yo[14]),
        IF = LQ[Yo[0]];
      for (let vQ = Yo[1]; vQ < IF; vQ++) {
        const QQ = (Yo[1], iL[Yo[65]])(iL.Z, LQ, [vQ]);
        rF[vQ] = QQ >= 99 && QQ <= 122 ? QQ : Yo[1]
      }
      const UF = (...QQ) => {
          return QQ[Yo[0]] = Yo[7], typeof QQ[Yo[1]] === Yo[71] + Yo[72] && (Yo[1], iL[Yo[65]])(iL[Yo[18]], QQ[Yo[2]], [(FQ = QQ[Yo[1]], (0, iL.l)(iL.C, FQ, []))]) !== Yo[14];
          var FQ
        },
        NF = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        TF = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        KF = [
          [mo["Dispat" + Yo[117] + Yo[93]], () => !UF(EventTarget[Yo[82] + Yo[83]][Yo[118] + Yo[117] + Yo[93]], NF)],
          [mo.PerformanceNow, () => !UF(performance[Yo[119]], TF)],
          [mo.DateNow, () => !UF(Date[Yo[119]], TF)]
        ],
        zF = (Yo[1], iL[Yo[34]])(Yo[14]);
      let lF = Yo[1];
      const jF = {
        stackCheck: (...QQ) => {
          Ao(QQ[Yo[0]] = Yo[1], QQ[Yo[3]] = Yo[14]);
          const FQ = qo((() => (QQ[Yo[3]] = bQ(Yo[19]), QQ[Yo[3]] !== Yo[14])));
          var wQ, LQ;
          return QQ[Yo[3]] !== Yo[14] && xQ === Yo[14] && (wQ = QQ[Yo[3]][Yo[22]], LQ = QQ[Yo[3]][Yo[23]], xQ = (0, Eq.t)(wo(wQ, LQ))), FQ
        },
        [Yo[121] + Yo[122]]: (...QQ) => {
          QQ[Yo[0]] = Yo[1];
          const FQ = nQ();
          if (FQ === Yo[7]) return Yo[7];
          if (SQ[DF]) return Yo[5];
          const wQ = Do((() => qQ[kF] ? Yo[4] : Yo[1]));
          return wQ !== Yo[1] ? wQ === Yo[4] ? Yo[4] : Yo[1] : FQ === oo ? Yo[1] : FQ === Yo[21] ? Yo[21] : (GQ(), LQ = Function[Yo[82] + Yo[83]], oQ = Yo[127], DQ = (...QQ) => (QQ[Yo[0]] = Yo[2], QQ[Yo[1]].writable !== Yo[19]), qo((() => {
            const QQ = Object.getOwnPropertyDescriptor(LQ, oQ);
            return void 0 !== QQ && DQ(QQ)
          })) ? Yo[33] : Yo[1]);
          var LQ, oQ, DQ
        },
        indexPassReplaced: XQ,
        [Yo[123] + "tSubChanged"]: (...QQ) => {
          if (QQ[Yo[0]] = Yo[1], JQ === VQ || aQ) return Yo[11];
          const FQ = hQ();
          return FQ !== VQ && FQ !== JQ
        },
        ym: (...QQ) => {
          Ao(QQ[Yo[0]] = Yo[1], QQ[Yo[120]] = IF);
          for (let FQ = Yo[1]; FQ < KF[Yo[0]] + lF; FQ++) {
            const wQ = FQ < KF[Yo[0]] ? KF[FQ] : zF[FQ - KF[Yo[0]]];
            wQ[Yo[1]] < QQ[Yo[120]] && eQ(wQ[Yo[2]]) && (QQ[Yo[120]] = wQ[Yo[1]])
          }
          return QQ[Yo[120]] < IF ? rF[QQ[Yo[120]]] : Yo[1]
        },
        fu: () => gQ ? SF[Yo[68]] : Yo[35],
        [Yo[124] + Yo[125] + "Subs"]: (...QQ) => {
          QQ[Yo[0]] = Yo[1];
          const FQ = vQ[Yo[65]].rM[Yo[124] + Yo[125]];
          return typeof FQ === Yo[126] && FQ > Yo[1] ? FQ > Yo[62] ? Yo[62] : FQ : Yo[1]
        },
        ["getCom" + Yo[138]]: (...QQ) => {
          Ao(QQ[Yo[0]] = Yo[1], QQ[Yo[9]] = Yo[13], yQ = Yo[1]);
          for (let wQ = Yo[1]; wQ < sQ; wQ++) qF(OQ[wQ], Yo[19]);
          for (let wQ = Yo[1]; wQ < vF[Yo[0]]; wQ++) SQ[vF[wQ][Yo[1]]] && qF(vF[wQ][Yo[2]], Yo[19]);
          const FQ = Do((() => Lo(atob[Yo[127]](), uQ) ? Yo[1] : Yo[2]));
          FQ === Yo[2] && qF(Yo[66], Yo[19]), GQ();
          const LQ = FQ === oo ? oo : Do(((...QQ) => {
            QQ[Yo[0]] = Yo[1];
            const FQ = Object.getOwnPropertyDescriptor(window, "atob");
            return FQ === Yo[13] ? oo : FQ[Yo[128]] !== Yo[13] ? Yo[2] : Yo[1]
          }));
          LQ === Yo[2] && qF(Yo[28], Yo[19]);
          const qQ = LQ === oo;
          for (let wQ = Yo[1]; wQ < mF[Yo[0]] && !qQ; wQ++) SQ[mF[wQ][Yo[1]]] && qF(mF[wQ][Yo[2]], Yo[19]);
          const oQ = yQ > sQ;
          QQ[Yo[2]] = Yo[14], sQ === Yo[1] && (IQ > Yo[1] ? QQ[Yo[2]] = rQ[Yo[1]] : TQ ? QQ[Yo[2]] = "fp" : oQ || (QQ[Yo[2]] = SQ[HF] ? Yo[129] : SQ[bF] ? Yo[88] : Yo[14]));
          for (let wQ = Yo[1]; wQ < xF[Yo[0]] && !qQ; wQ++) SQ[xF[wQ][Yo[1]]] && qF(xF[wQ][Yo[2]], Yo[19]);
          const DQ = yQ,
            kQ = (Yo[1], Zq[Yo[8]])(),
            vQ = kQ !== Yo[14] && (Yo[1], uF.i)(kQ);
          vQ && !qQ && qF(kQ, Yo[11]), fQ && qF("ix", Yo[11]), RQ && qF("il", Yo[11]);
          for (let wQ = Yo[1]; wQ < IQ; wQ++) qF(rQ[wQ], Yo[19]);
          for (let wQ = Yo[1]; wQ < AF[Yo[0]]; wQ++) SQ[AF[wQ][Yo[1]]] && qF(AF[wQ][Yo[2]], Yo[19]);
          SQ[tF] && qF("mk:lk", Yo[19]);
          const mQ = ((...QQ) => {
            QQ[Yo[0]] = Yo[2], "Flzg8a" in xo && function(...QQ) {
              Ao(QQ[Yo[0]] = Yo[1], QQ[-Yo[89]] = function(...QQ) {
                for (Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[3]] = QQ[Yo[1]].length, QQ[Yo[7]] = [], QQ[-Yo[89]] = Yo[1]), QQ[Yo[4]] = Yo[1]; QQ[Yo[4]] < QQ[Yo[3]]; QQ[Yo[4]]++) QQ[Yo[7]].push(QQ[Yo[4]] !== Yo[1] && QQ[Yo[1]][QQ[Yo[4]]] > QQ[Yo[1]][QQ[Yo[4]] - Yo[2]] ? QQ[Yo[7]][QQ[Yo[4]] - Yo[2]] + Yo[2] : Yo[2]);
                for (QQ[-Yo[90]] = QQ[Yo[3]] - Yo[2]; QQ[-Yo[90]] >= Yo[1]; QQ[-Yo[90]]--) QQ[-Yo[90]] !== QQ[Yo[3]] - Yo[2] && QQ[Yo[1]][QQ[-Yo[90]]] > QQ[Yo[1]][QQ[-Yo[90]] + Yo[2]] && (QQ[Yo[7]][QQ[-Yo[90]]] = Math.max(QQ[Yo[7]][QQ[-Yo[90]]], QQ[Yo[7]][QQ[-Yo[90]] + Yo[2]] + Yo[2])), QQ[-Yo[89]] += QQ[Yo[7]][QQ[-Yo[90]]];
                return QQ[-Yo[89]]
              }, console.log(QQ[-Yo[89]]))
            }();
            for (let FQ = Yo[1]; FQ < MF[Yo[0]]; FQ++)
              if (QQ[Yo[1]] === MF[FQ]) return MF[FQ];
            return Yo[14]
          })(SQ[eF]);
          if (mQ !== Yo[14] && qF(mQ, Yo[19]), wQ !== Yo[14] && pQ(wQ.emitReplaced) === Yo[19] && qF("mk:em", Yo[19]), CF && qF("3s", Yo[11]), iL.T && qF("3b", Yo[11]), GQ(), MQ && qF("3d", Yo[11]), qQ && qF("3g", Yo[11]), kQ === Yo[14] || vQ || qF(kQ, Yo[11]), xQ !== Yo[14] && qF(xQ, Yo[11]), tQ === Yo[14] && wQ !== Yo[14]) {
            const QQ = pQ(wQ[Yo[121] + "mMeshHitStack"]);
            typeof QQ === Yo[64] && (tQ = function(QQ, FQ, wQ) {
              let LQ = 0;
              for (; LQ < wQ && -1 === dq(QQ, FQ[LQ]);) LQ++;
              return (0, Eq.i)(wo(QQ, LQ < wQ ? FQ[LQ] : null))
            }(QQ, HQ, HQ[Yo[0]] - Yo[2]))
          }
          if (tQ !== Yo[14] && qF(tQ, Yo[11]), AQ === Yo[14] && SF[Yo[9]] !== Yo[14] && (AQ = function(QQ) {
              const FQ = /[^\n]+/g,
                wQ = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let LQ = null,
                qQ = "",
                oQ = !1,
                DQ = (0, iL.l)(iL.Q, FQ, [QQ]);
              for (; null !== DQ;) {
                const kQ = (0, iL.l)(iL.Q, wQ, [DQ[0]]),
                  vQ = null === kQ ? (0, iL.l)(iL.Q, yq, [DQ[0]]) : null,
                  mQ = null !== vQ && null !== (0, iL.l)(iL.Q, Bq, [vQ[1]]) && 0 !== dq(vQ[1], "wasm:") ? vQ[1] : null;
                if (null === LQ) null !== kQ ? (LQ = kQ[2], qQ = kQ[4]) : null !== mQ && (LQ = "");
                else if (null !== kQ) {
                  oQ = !0;
                  const QQ = kQ[2] === LQ;
                  if ("" !== kQ[1] || !QQ || kQ[4] !== qQ) {
                    const FQ = "moz-extension" === kQ[3] || "safari-web-extension" === kQ[3];
                    return (0, Eq.g)("" !== kQ[1] || QQ ? "inline" : FQ ? kQ[3] : kQ[2])
                  }
                } else if (null !== mQ) {
                  const QQ = -1 !== dq(DQ[0], "userscript") || -1 !== dq(DQ[0], ".user.js");
                  return (0, Eq.g)(QQ ? "userscript" : "inline")
                }
                DQ = (0, iL.l)(iL.Q, FQ, [QQ])
              }
              return (0, Eq.g)(oQ ? "own" : "unknown")
            }(SF[Yo[9]])), AQ !== Yo[14] && qF(AQ, Yo[11]), yQ === Yo[1]) return Yo[14];
          if (QQ[Yo[2]] === Yo[14] && ZQ[Yo[1]] && !(Yo[1], Eq[Yo[65]])(PQ[Yo[1]]))
            for (let wQ = Yo[2]; wQ < DQ; wQ++)
              if (ZQ[wQ] && (Yo[1], Eq[Yo[65]])(PQ[wQ])) {
                const QQ = PQ[wQ];
                for (let FQ = wQ; FQ > Yo[1]; FQ--) Ao(PQ[FQ] = PQ[FQ - Yo[2]], ZQ[FQ] = ZQ[FQ - Yo[2]]);
                Ao(PQ[Yo[1]] = QQ, ZQ[Yo[1]] = Yo[19]);
                break
              } if (Ao(QQ[Yo[7]] = Yo[1], QQ[Yo[130]] = QQ[Yo[2]] === Yo[14] ? Yo[1] : DQ), QQ[Yo[130]] > Yo[1] && kQ !== Yo[14] && vQ && !qQ) {
            for (let FQ = QQ[Yo[130]]; FQ > Yo[1]; FQ--) Ao(PQ[FQ] = PQ[FQ - Yo[2]], ZQ[FQ] = ZQ[FQ - Yo[2]]);
            Ao(PQ[Yo[1]] = kQ, ZQ[Yo[1]] = Yo[11], QQ[Yo[7]] = Yo[2], QQ[Yo[130]]++)
          }
          if (QQ[Yo[4]] = Yo[1], BQ++ % Yo[7] === Yo[2])
            for (let wQ = Yo[2]; wQ < yQ; wQ++) oF(wQ) < oF(QQ[Yo[4]]) && (QQ[Yo[4]] = wQ);
          const bQ = PQ[QQ[Yo[4]]];
          (ZQ[QQ[Yo[4]]] ? FF : QF)[bQ] = dQ++;
          const YQ = QQ[Yo[4]] >= QQ[Yo[7]] && QQ[Yo[4]] < QQ[Yo[130]];
          if (!ZQ[QQ[Yo[4]]] || bQ === QQ[Yo[2]] || QQ[Yo[4]] === Yo[1] && !YQ) return bQ === Yo[93] ? (Yo[1], Eq[Yo[129]])(SQ[YF], Eq[Yo[27]]) : bQ;
          const eQ = (QQ[Yo[9]] = QQ[Yo[2]]) !== Yo[14] && QQ[Yo[9]] !== void Yo[1] ? QQ[Yo[9]] : PQ[Yo[1]];
          return eQ !== wF && Ao(wF = eQ, LF = (Yo[1], iL[Yo[34]])(Yo[14])), LF[bQ] ??= (Yo[1], Eq[Yo[116]])(bQ, eQ)
        }
      };
      let aF = XF[Yo[98]][Yo[131]];
      const fF = () => RF !== XF[Yo[98]][Yo[131]] ? RF : aF;
      let VF = Yo[1],
        hF = Yo[7],
        JF = Yo[1],
        EF = Yo[1];
      return {
        checks: jF,
        checkEvent: (...QQ) => {
          QQ[Yo[0]] = Yo[2], "yIcNYO" in xo && function() {
            ! function(...QQ) {
              function FQ(...QQ) {
                for (Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[3]] = [], QQ[-Yo[91]] = Yo[1], QQ[Yo[99]] = QQ[Yo[1]].length, QQ[Yo[27]] = Yo[13], QQ[Yo[45]] = Yo[13]); QQ[-Yo[91]] < QQ[Yo[99]];) Ao(QQ[Yo[27]] = QQ[Yo[1]].charCodeAt(QQ[-Yo[91]]++), QQ[Yo[27]] >= Yo[100] && QQ[Yo[27]] <= Yo[101] && QQ[-Yo[91]] < QQ[Yo[99]] ? (QQ[Yo[45]] = QQ[Yo[1]].charCodeAt(QQ[-Yo[91]]++), (64512 & QQ[Yo[45]]) == Yo[102] ? QQ[Yo[3]].push(((QQ[Yo[27]] & Yo[50]) << Yo[59]) + (QQ[Yo[45]] & Yo[50]) + Yo[103]) : (QQ[Yo[3]].push(QQ[Yo[27]]), QQ[-Yo[91]]--)) : QQ[Yo[3]].push(QQ[Yo[27]]));
                return QQ[Yo[3]]
              }

              function wQ(...FQ) {
                for (Ao(FQ[Yo[0]] = Yo[2], FQ[Yo[77]] = FQ[Yo[1]].length, FQ[-Yo[104]] = -Yo[2], FQ[Yo[5]] = Yo[13], FQ[Yo[27]] = ""); ++FQ[-Yo[104]] < FQ[Yo[77]];) FQ[Yo[5]] = FQ[Yo[1]][FQ[-Yo[104]]], FQ[Yo[5]] > Yo[62] && Ao(FQ[Yo[5]] -= Yo[103], FQ[Yo[27]] += QQ[Yo[105]](FQ[Yo[5]] >>> Yo[59] & Yo[50] | Yo[100]), FQ[Yo[5]] = Yo[102] | FQ[Yo[5]] & Yo[50]), FQ[Yo[27]] += QQ[Yo[105]](FQ[Yo[5]]);
                return FQ[Yo[27]]
              }

              function LQ(...QQ) {
                if (QQ[Yo[0]] = Yo[2], QQ[Yo[1]] >= Yo[100] && QQ[Yo[1]] <= Yo[106]) throw Error("Lone surrogate U+" + QQ[Yo[1]].toString(Yo[36]).toUpperCase() + " is not a scalar value")
              }

              function qQ(...FQ) {
                return FQ[Yo[0]] = Yo[7], QQ[Yo[105]](FQ[Yo[1]] >> FQ[Yo[2]] & Yo[51] | Yo[52])
              }

              function oQ(...FQ) {
                return FQ[Yo[0]] = Yo[2], (4294967168 & FQ[Yo[1]]) == Yo[1] ? QQ[Yo[105]](FQ[Yo[1]]) : (FQ[-Yo[107]] = "", (4294965248 & FQ[Yo[1]]) == Yo[1] ? FQ[-Yo[107]] = QQ[Yo[105]](FQ[Yo[1]] >> Yo[21] & Yo[108] | Yo[109]) : (4294901760 & FQ[Yo[1]]) == Yo[1] ? Ao(LQ(FQ[Yo[1]]), FQ[-Yo[107]] = QQ[Yo[105]](FQ[Yo[1]] >> Yo[53] & Yo[41] | Yo[110]), FQ[-Yo[107]] += qQ(FQ[Yo[1]], Yo[21])) : (4292870144 & FQ[Yo[1]]) == Yo[1] && Ao(FQ[-Yo[107]] = QQ[Yo[105]](FQ[Yo[1]] >> Yo[58] & Yo[33] | Yo[111]), FQ[-Yo[107]] += qQ(FQ[Yo[1]], Yo[53]), FQ[-Yo[107]] += qQ(FQ[Yo[1]], Yo[21])), FQ[-Yo[107]] += QQ[Yo[105]](FQ[Yo[1]] & Yo[51] | Yo[52]), FQ[-Yo[107]])
              }

              function DQ(...QQ) {
                for (Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[3]] = FQ(QQ[Yo[1]]), QQ[-Yo[112]] = QQ[Yo[3]].length, QQ[Yo[9]] = -Yo[2], QQ[Yo[113]] = Yo[13], QQ[Yo[45]] = ""); ++QQ[Yo[9]] < QQ[-Yo[112]];) Ao(QQ[Yo[113]] = QQ[Yo[3]][QQ[Yo[9]]], QQ[Yo[45]] += oQ(QQ[Yo[113]]));
                return QQ[Yo[45]]
              }

              function kQ() {
                var FQ;
                if (QQ[Yo[56]] >= QQ[Yo[9]]) throw Error(Yo[114]);
                if (Ao(FQ = QQ[Yo[4]][QQ[Yo[56]]] & Yo[54], QQ[Yo[56]]++), (FQ & Yo[109]) == Yo[52]) return FQ & Yo[51];
                throw Error(Yo[115])
              }

              function vQ(...FQ) {
                if (Ao(FQ[Yo[0]] = Yo[1], FQ[Yo[8]] = Yo[13], FQ[Yo[9]] = Yo[13], FQ[Yo[27]] = Yo[13], FQ[Yo[5]] = Yo[13], FQ[Yo[28]] = Yo[13]), QQ[Yo[56]] > QQ[Yo[9]]) throw Error(Yo[114]);
                if (QQ[Yo[56]] == QQ[Yo[9]]) return Yo[11];
                if (Ao(FQ[Yo[8]] = QQ[Yo[4]][QQ[Yo[56]]] & Yo[54], QQ[Yo[56]]++), (FQ[Yo[8]] & Yo[52]) == Yo[1]) return FQ[Yo[8]];
                if ((FQ[Yo[8]] & Yo[110]) == Yo[109]) {
                  if (Ao(FQ[Yo[9]] = kQ(), FQ[Yo[28]] = (FQ[Yo[8]] & Yo[108]) << Yo[21] | FQ[Yo[9]]), FQ[Yo[28]] >= Yo[52]) return FQ[Yo[28]];
                  throw Error(Yo[115])
                }
                if ((FQ[Yo[8]] & Yo[111]) == Yo[110]) {
                  if (Ao(FQ[Yo[9]] = kQ(), FQ[Yo[27]] = kQ(), FQ[Yo[28]] = (FQ[Yo[8]] & Yo[41]) << Yo[53] | FQ[Yo[9]] << Yo[21] | FQ[Yo[27]]), FQ[Yo[28]] >= 2048) return LQ(FQ[Yo[28]]), FQ[Yo[28]];
                  throw Error(Yo[115])
                }
                if ((248 & FQ[Yo[8]]) == Yo[111] && (Ao(FQ[Yo[9]] = kQ(), FQ[Yo[27]] = kQ(), FQ[Yo[5]] = kQ(), FQ[Yo[28]] = (FQ[Yo[8]] & Yo[33]) << Yo[58] | FQ[Yo[9]] << Yo[53] | FQ[Yo[27]] << Yo[21] | FQ[Yo[5]]), FQ[Yo[28]] >= Yo[103] && FQ[Yo[28]] <= 1114111)) return FQ[Yo[28]];
                throw Error("Invalid UTF-8 detected")
              }

              function mQ(...LQ) {
                for (Ao(LQ[Yo[0]] = Yo[2], QQ[Yo[4]] = FQ(LQ[Yo[1]]), QQ[Yo[9]] = QQ[Yo[4]].length, QQ[Yo[56]] = Yo[1], LQ[Yo[3]] = [], LQ[Yo[8]] = Yo[13]);
                  (LQ[Yo[8]] = vQ()) !== Yo[11];) LQ[Yo[3]].push(LQ[Yo[8]]);
                return wQ(LQ[Yo[3]])
              }
              Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[105]] = String.fromCharCode), Ao(QQ[Yo[4]] = Yo[13], QQ[Yo[9]] = Yo[13], QQ[Yo[56]] = Yo[13]), Ao(QQ[Yo[1]].version = "3.0.0", QQ[Yo[1]].encode = DQ, QQ[Yo[1]].decode = mQ)
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }();
          try {
            const FQ = qQ[WF];
            if (typeof FQ === Yo[71] + Yo[72] && !(QQ[Yo[1]] instanceof FQ) && !(Yo[1], iL.E)(QQ[Yo[1]])) return RF = XF[Yo[98]].NotEvent, Yo[1];
            if (QQ[Yo[1]].isTrusted === Yo[11]) return Yo[1];
            let wQ = Yo[1];
            for (const LQ in QQ[Yo[1]]) wQ++;
            return wQ < Yo[59] ? (RF = XF[Yo[98]]["FewPropertie" + Yo[116]], Yo[1]) : sF()
          } catch {}
          return Yo[1]
        },
        checkPadCall: () => {
          try {
            return sF()
          } catch {
            return Yo[1]
          }
        },
        usedProp: fF,
        watchHeld: (...QQ) => {
          Ao(QQ[Yo[0]] = Yo[7], QQ[Yo[63]] = Yo[13]);
          const FQ = cQ((() => {
            QQ[Yo[63]] = QQ[Yo[2]]()
          }));
          zF[lF++] = [QQ[Yo[1]], () => !FQ || QQ[Yo[2]]() !== QQ[Yo[63]]]
        },
        fH: (...QQ) => {
          QQ[Yo[0]] = Yo[1];
          const FQ = XQ();
          return ((...QQ) => {
            if (Ao(QQ[Yo[0]] = Yo[2], QQ[Yo[3]] = Yo[13], QQ[-Yo[133]] = Yo[13]), wQ !== Yo[14]) {
              const FQ = pQ(wQ.Jv),
                LQ = "v3" === FQ ? Yo[5] : "v5" === FQ ? Yo[30] : "v6" === FQ ? Yo[21] : Yo[7];
              LQ !== Yo[7] && (hF = LQ);
              const qQ = pQ(wQ["inbuil" + Yo[136] + Yo[137]]);
              typeof qQ === Yo[126] && qQ >= Yo[1] && qQ <= Yo[132] && (qQ | Yo[1]) === qQ && (JF = qQ), Ao(QQ[Yo[3]] = pQ(wQ.reflectApplyHit), QQ[-Yo[133]] = pQ(wQ.definerHit))
            }
            const FQ = QQ[Yo[1]] ? Yo[41] : "11" === QQ[-Yo[133]] ? Yo[132] : "13" === QQ[-Yo[133]] ? Yo[134] : QQ[Yo[3]] !== Yo[13] && QQ[Yo[3]] !== Yo[14] ? Yo[7] : "10" === QQ[-Yo[133]] ? Yo[59] : "12" === QQ[-Yo[133]] ? Yo[53] : Yo[1];
            FQ !== Yo[1] && (EF = FQ)
          })(FQ), VF++ % 10 === Yo[1] && (iF(), qo((() => !Lo(qQ[oQ][Yo[127]][Yo[127]](), uQ))) && (aF = aF === XF[Yo[98]][Yo[135]] ? XF[Yo[98]][Yo[135]] : XF[Yo[98]].Fr), qo((() => !Lo(qQ[oQ][Yo[127]](), uQ))) && (aF = XF[Yo[98]][Yo[135]])), {
            flags: FQ ? XF[Yo[9]].Butto : Yo[1],
            values: [
              [XF[Yo[27]].PhysicsVersion, hF],
              [XF[Yo[27]]["Inbuil" + Yo[136] + Yo[137]], JF],
              [XF[Yo[27]]["AltCom" + Yo[138]], EF],
              [XF[Yo[27]]["ProbeUsedPro" + Yo[139]], fF()]
            ]
          }
        }
      }
    };
    const to = "[bloxd-wasm-client]",
      eo = "bloxdWasmDownloadFailed",
      Mo = Qw.c,
      Go = "boot",
      po = "playSources",
      co = "wasmBuild",
      Co = "bloxd-wasm-joined",
      So = "bloxd-wasm-first-view",
      io = "bloxd-wasm-playable-legacy",
      Wo = 1048576,
      Ro = 8 * Wo,
      Oo = 8,
      so = 1006,
      ro = 1e3,
      Io = "You lost connection to the server.",
      Uo = "general:lostConnection",
      No = 1048576,
      To = 5e3,
      Ko = 100,
      zo = [2e3, 1e4, 3e4],
      jo = 3e4;
    let ao = null,
      Xo = null,
      fo = !1,
      Vo = !1,
      ho = !1,
      Jo = null,
      Eo = null,
      no = null,
      go = null,
      Po = null,
      Zo = null,
      yo = null;
    const Bo = new class {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = QQ, this.soundOn = FQ, this.now = wQ, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var QQ;
        null === (QQ = this.player) || void 0 === QQ || QQ.prepare()
      }
      preload(QQ) {
        var FQ;
        this.stopped || (null === (FQ = this.player) || void 0 === FQ || FQ.preload(QQ))
      }
      endSession() {
        var QQ, FQ;
        null === (QQ = this.player) || void 0 === QQ || QQ.cancelPreload(), null === (FQ = this.player) || void 0 === FQ || FQ.freeSheetsAfterGame()
      }
      load(QQ) {
        if (null !== this.player || this.stopped) return;
        this.player = QQ, QQ.setMaster(this.master, this.soundOn);
        const FQ = this.now(),
          wQ = this.local;
        this.local = [];
        for (const qQ of wQ)
          if (!(qQ.stopped || !qQ.loop && FQ - qQ.at >= 300)) try {
            this.start(qQ, QQ, FQ)
          } catch (LQ) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", LQ)
          }
      }
      start(QQ, FQ, wQ) {
        const {
          name: LQ,
          pos: qQ,
          ear: oQ,
          maxHearDist: DQ,
          refDistance: kQ,
          loop: vQ,
          fade: mQ
        } = QQ, uQ = FQ.playGame(LQ, zF(QQ, wQ), qQ, oQ, DQ, kQ, vQ);
        if (QQ.sound = uQ, 1 !== QQ.rate && uQ.rate(QQ.rate), null !== QQ.panner && uQ.setPannerAttr(QQ.panner), null !== QQ.moved && uQ.setPosition(QQ.moved), null !== mQ && wQ - mQ.at < mQ.ms) {
          const FQ = KF(this.master);
          FQ > 0 ? uQ.fade(0, QQ.volume * FQ, mQ.at + mQ.ms - wQ) : uQ.setRelativeVolume(QQ.volume)
        }
      }
      onAudioEvent(QQ, FQ, wQ, LQ) {
        var qQ, oQ;
        return null === (qQ = null === (oQ = this.player) || void 0 === oQ ? void 0 : oQ.onAudioEvent(QQ, FQ, wQ, LQ)) || void 0 === qQ || qQ
      }
      applyListener(QQ) {
        var FQ;
        null === (FQ = this.player) || void 0 === FQ || FQ.applyListener(QQ)
      }
      playGame(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        if (this.stopped) return TF.b;
        if (this.player) return this.player.playGame(QQ, FQ, wQ, LQ, qQ, oQ, DQ);
        const kQ = this.now();
        this.local = this.local.filter((QQ => !QQ.stopped && (QQ.loop || kQ - QQ.at < 300)));
        const vQ = {
          name: QQ,
          volume: KF(FQ),
          fade: null,
          pos: wQ && [wQ[0], wQ[1], wQ[2]],
          ear: LQ && [LQ[0], LQ[1], LQ[2]],
          maxHearDist: qQ,
          refDistance: oQ,
          loop: DQ,
          rate: 1,
          panner: null,
          moved: null,
          at: kQ,
          stopped: !1,
          sound: null
        };
        this.local.push(vQ);
        const mQ = {
          stop: () => {
            var QQ;
            return vQ.stopped = !0, null === (QQ = vQ.sound) || void 0 === QQ || QQ.stop(), mQ
          },
          fade: (QQ, FQ, wQ) => {
            if (vQ.sound) return vQ.sound.fade(QQ, FQ, wQ), mQ;
            const LQ = KF(this.master),
              qQ = KF(LQ > 0 ? FQ / LQ : FQ > 0 ? vQ.volume : 0),
              oQ = this.now(),
              DQ = zF(vQ, oQ);
            return vQ.volume = qQ, vQ.fade = wQ > 0 && DQ !== qQ ? {
              from: DQ,
              at: oQ,
              ms: wQ
            } : null, mQ
          },
          rate: QQ => (vQ.sound ? vQ.sound.rate(QQ) : vQ.rate = QQ, mQ),
          getVolume: () => vQ.sound ? vQ.sound.getVolume() : vQ.volume * KF(this.master),
          getRelativeVolume: () => vQ.sound ? vQ.sound.getRelativeVolume() : vQ.volume,
          setRelativeVolume: QQ => (vQ.sound ? vQ.sound.setRelativeVolume(QQ) : (vQ.volume = KF(QQ), vQ.fade = null), mQ),
          setPannerAttr: QQ => (vQ.sound ? vQ.sound.setPannerAttr(QQ) : vQ.panner = {
            ...QQ
          }, mQ),
          setPosition: QQ => (vQ.sound ? vQ.sound.setPosition(QQ) : vQ.moved = [QQ[0], QQ[1], QQ[2]], mQ)
        };
        return mQ
      }
      setMaster(QQ, FQ) {
        var wQ;
        this.master = QQ, this.soundOn = FQ, null === (wQ = this.player) || void 0 === wQ || wQ.setMaster(QQ, FQ)
      }
      stop() {
        var QQ;
        this.stopped = !0, null === (QQ = this.player) || void 0 === QQ || QQ.stopAll();
        for (const FQ of this.local) FQ.stopped = !0;
        this.local = []
      }
    }((0, iF.c)(), !0);
    let QD = {
        wasm: "unknown",
        client: String(wF.b)
      },
      FD = null,
      wD = () => {};
    const LD = new Promise((QQ => {
      wD = QQ
    }));
    let qD = () => {};
    const oD = new Promise((QQ => {
      qD = QQ
    }));
    let DD, kD = null,
      vD = null,
      mD = null,
      uD = null,
      HD = null,
      bD = null,
      YD = null,
      xD = null,
      AD = null,
      tD = null,
      eD = null,
      MD = null,
      GD = null,
      pD = null,
      cD = null,
      CD = null,
      SD = null,
      iD = null,
      WD = !1,
      RD = null;
    const OD = new Set,
      sD = new Set;

    function rD(QQ) {
      if (!OD.has(QQ)) {
        OD.add(QQ);
        for (const wQ of sD) try {
          wQ(QQ)
        } catch (FQ) {
          console.error(`${to} a startup listener threw`, FQ)
        }
      }
    }

    function ID(QQ) {
      WD = !0, QQ.isStopped || rD("texturesIn")
    }
    let UD = 1,
      ND = -1 / 0,
      TD = !1,
      KD = !1,
      zD = 0,
      lD = null,
      jD = !1;
    const aD = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let XD = 0,
      fD = 0,
      VD = null,
      hD = null,
      JD = null,
      ED = null;
    const nD = new WeakMap;
    let gD = null,
      PD = null,
      ZD = null,
      yD = null,
      BD = null,
      dD = null,
      Qk = null,
      Fk = null,
      wk = 0,
      Lk = null,
      qk = null,
      Dk = null,
      kk = null,
      vk = -1 / 0,
      mk = null;
    const uk = new Set;
    let Hk = !1,
      bk = null;
    const Yk = new Map,
      xk = new Set;
    let Ak = !1;
    const tk = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let ek = null,
      Mk = () => [0, 0],
      Gk = () => {},
      pk = () => {},
      ck = null,
      Ck = null;
    const Sk = new class {
      constructor(QQ) {
        this.reached = QQ, this.next = 1
      }
      observe(QQ) {
        if (!(QQ < this.next)) {
          for (; this.next <= QQ;) this.next *= 2;
          this.reached(QQ)
        }
      }
    }((QQ => {
      console.warn(`${to} chunk cancels from the server this session: ${QQ}`)
    }));
    let ik = 1,
      Wk = null,
      Rk = null,
      Ok = null,
      sk = null,
      rk = null,
      Ik = !1,
      Uk = !1,
      Nk = 0,
      Tk = null,
      Kk = !1,
      zk = null,
      lk = null,
      jk = !1;
    const ak = new class {
      constructor(QQ) {
        this.GA = QQ, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(QQ, FQ, wQ) {
        (0, sF.c)(QQ) && (this.lossPending = !1);
        const LQ = wQ - this.lastFrameMs;
        this.lastFrameMs = wQ, this.lossPending && FQ && (0, sF.h)(QQ) ? (null === this.undrawnSinceMs || LQ > 1e3) && (this.undrawnSinceMs = wQ) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && wQ - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(QQ) {
        QQ !== this.shown && (this.shown = QQ, this.GA(QQ))
      }
    }((QQ => {
      vQ.l.GA(xQ.d, QQ)
    }));
    let Xk = !1,
      fk = !0,
      Vk = null,
      hk = !1,
      Jk = !1,
      Ek = !1;

    function nk() {
      return no ??= Promise.all([wQ.e(190), wQ.e(137), wQ.e(57)]).then((() => wQ(42687))).then((QQ => (Eo = QQ, Object.assign(globalThis, {
        bloxdPreviewPage: QQ.pagePreviews()
      }), QQ)), (QQ => {
        throw no = null, QQ
      })), no
    }

    function gk() {
      return Jo ??= wQ.e(55).then((() => wQ(42705))).catch((QQ => {
        throw Jo = null, new SQ.d(QQ)
      })), Jo
    }
    class Pk {
      constructor() {
        this.host = null
      }
      open(QQ) {
        return null !== this.host ? QQ(this.host) : nk().then((FQ => (this.host ??= new FQ.WasmPreviewHost(FQ.pagePreviews()), QQ(this.host))))
      }
      openMob(QQ) {
        return this.open((FQ => FQ.openMob(QQ)))
      }
      openPet(QQ) {
        return this.open((FQ => FQ.openPet(QQ)))
      }
      openMobLineup(QQ) {
        return this.open((FQ => FQ.openMobLineup(QQ)))
      }
      openCharacter(QQ, FQ) {
        return this.open((wQ => wQ.openCharacter(QQ, FQ)))
      }
    }

    function Zk() {
      ho || (ho = !0, Fq.g.setHost(new Pk), (0, Mw.h)(), yL.e.setFollower(Zv), Object.assign(globalThis, {
        bloxdPreviews: Fq.g
      }))
    }

    function yk() {
      nk().then((QQ => {
        QQ.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Bk() {
      let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Vo) return;
      Vo = !0, Xk = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), fk = !Xk, console.info(`${to} starting`), fo || (fo = !0, (0, xQ.H)(new IF(Av, Sv)), (0, bQ.o)(new UF), (0, xQ.F)(new NF), (0, xQ.A)()), Zk(), (0, Ww.setCrashScreen)((QQ => {
        let {
          text: FQ,
          reload: wQ
        } = QQ;
        ! function(QQ, FQ) {
          var wQ, LQ;
          if (hk) return;
          hk = !0, (0, pw.e)(), null === (wQ = mk) || void 0 === wQ || wQ.abort(), mk = null, BL.d.release();
          const qQ = Xk ? null !== (LQ = QQ.cancel) && void 0 !== LQ ? LQ : "general:back" : null;
          eL({
            ...QQ,
            cancel: qQ
          }).then((QQ => {
            QQ && FQ && Jk ? ((0, YF.n)("reloadOntoJs"), (0, JQ.g)(YF.u)) : QQ && FQ ? (0, JQ.i)() : Xk && (0, JQ.f)("/")
          }))
        }(FQ, wQ)
      })), (0, XL.l)(), (0, SF.e)();
      let FQ = null;
      try {
        FQ = bo("ay4cxw6n6pf", (() => {
          var QQ, FQ;
          return null !== (QQ = null === (FQ = kD) || void 0 === FQ ? void 0 : FQ.ws) && void 0 !== QQ ? QQ : null
        }), QQ, "cmtqsjzdiy")
      } catch (qQ) {
        console.error(`${to} probes`, qQ)
      }
      const LQ = function() {
        const QQ = (0, cL.r)(),
          FQ = (0, cL.j)();
        let wQ = !1;
        return LQ => {
          QQ && !wQ && (wQ = !0, (0, Ww.reportStaleBuildReload)(QQ, FQ, LQ))
        }
      }();
      Bv(), Xk || function() {
        const QQ = function(QQ) {
          var FQ;
          const wQ = new URLSearchParams(QQ),
            LQ = wQ.get("game");
          return LQ ? {
            game: LQ,
            lobby: null !== (FQ = wQ.get("lobby")) && void 0 !== FQ ? FQ : null
          } : null
        }(window.location.search);
        if (QQ) return (0, LF.f)(QQ.game) && Bv().request(), void Fv(QQ.game, QQ.lobby);
        const FQ = new URLSearchParams(window.location.search).get("ws");
        if (!FQ) return;
        LD.then((QQ => {
          QQ && async function(QQ, FQ) {
            try {
              await (0, SQ.o)(QQ), ZD = sv(new WebSocket(FQ)), null !== ZD && BL.d.setGame(null), dk()
            } catch (qQ) {
              console.error(`${to} ?ws=${FQ} did not attach`, qQ)
            }
          }(QQ, FQ)
        }))
      }(), async function(QQ) {
        var FQ, LQ, oQ, DQ, kQ;
        if ("undefined" === typeof WebAssembly) return hv("noWebAssembly", "This browser has no WebAssembly"), null;
        const mQ = await (0, kq.M)();
        if ((0, Ww.setCrashBackend)((0, Qw.p)(mQ) ? "unsupported" : null !== (FQ = null === mQ || void 0 === mQ ? void 0 : mQ.backend) && void 0 !== FQ ? FQ : "none"), (0, Qw.p)(mQ)) return hv("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${mQ.missing.join(", ")}`, {
          missing: mQ.missing.join(",")
        }), null;
        if ((0, Uq.o)("render")) try {
          const {
            startRenderDebug: QQ
          } = await Promise.all([wQ.e(75), wQ.e(47)]).then((() => wQ(4533)));
          QQ(mQ)
        } catch (iF) {
          console.warn("The render debug topic didn't load", iF)
        }
        if ((0, Uq.o)("renderlite")) try {
          const {
            startRenderLite: QQ
          } = await Promise.all([wQ.e(261), wQ.e(48)]).then((() => wQ(42722)));
          Ok = QQ(mQ)
        } catch (iF) {
          console.warn("The renderlite debug topic didn't load", iF)
        }
        if ((0, Uq.o)("renderprobe")) try {
          const {
            startRenderProbe: QQ
          } = await wQ.e(49).then((() => wQ(42729)));
          QQ(mQ)
        } catch (iF) {
          console.warn("The renderprobe debug topic didn't load", iF)
        }
        let uQ = null;
        if (null !== mQ && Jv()) {
          const QQ = (0, ML.d)(mQ, !0);
          "webgl" === mQ.backend && null !== QQ && (0, AF.m)(QQ, Ww.reportGpuWasmPopulation), null !== QQ && (0, xF.k)(QQ), uQ = (0, ML.b)(mQ, QQ)
        }
        if (null !== mQ && null !== uQ) return (0, Ww.reportGpuFallback)(uQ, mQ.backend), Ev(`the wasm client's renderer plays this GPU (${uQ}) on ${mQ.backend} worse than the JS client`, "gpu"), null;
        const HQ = null !== (LQ = null === mQ || void 0 === mQ ? void 0 : mQ.backend) && void 0 !== LQ ? LQ : null;
        tk.adapter = null !== (oQ = null === mQ || void 0 === mQ ? void 0 : mQ.adapter) && void 0 !== oQ ? oQ : null, tk.boundAtMs = null, tk.indirectHangs = null;
        const bQ = !(0, Qw.Y)();
        null !== mQ && "none" !== mQ.reason && console.info(`${to} drawing with ${mQ.backend}: ${mQ.reason}`);
        const YQ = (0, kq.A)();
        qD(!0), (0, SQ.y)((QQ => {
          try {
            null !== HQ && (ck = QQ.startSkyFeed, gv(), function(QQ) {
              var FQ, wQ;
              Mk = QQ.rasterText, BD = QQ.setTextLocalPlayer, QQ.setTextLocalPlayer(null !== (FQ = null === (wQ = yD) || void 0 === wQ ? void 0 : wQ.info.playerDbId) && void 0 !== FQ ? FQ : null), Gk = QQ.drainTextRerasters, pk = QQ.loadTextIcons, QQ.warmText((() => Ik)), QQ.textChanged(), Ik && setTimeout(pk, 0)
            }(QQ), Ck = QQ.startShellAnalytics, qm())
          } finally {
            Ek || (sk = QQ.followMenuPrefs({
              setSoundPrefs: Wv,
              setEnvPrefs: Rv,
              setUiPrefs: iv,
              setLookPrefs: Ov
            }))
          }
        })), (0, SQ.p)(Bo).catch((QQ => {
          console.warn(`${to} the game code did not load: a join asks again`, QQ)
        }));
        const xQ = (0, kq.k)(mQ);
        let AQ, tQ;
        xQ.catch((() => {})), "loading" === (0, DF.z)() && cq();
        try {
          AQ = function(QQ) {
            const FQ = null !== QQ && void 0 !== QQ ? QQ : document.createElement("canvas");
            FQ.id = "wasm-game-canvas", (0, Yq.m)();
            const wQ = (0, rF.f)(),
              LQ = (0, rF.j)(wQ);
            return FQ.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, bq.c)(FQ, LQ), (0, rF.e)(FQ, wQ), FQ.width = LQ.bufferWidth, FQ.height = LQ.bufferHeight, tv(FQ, fk), Vk = FQ, document.body.append(FQ), FQ
          }(null === HQ ? null : await (await nk()).pagePreviews().beginSession())
        } catch (qQ) {
          return await lm({
            site: co,
            error: qQ
          }, (() => {
            (0, Ww.showUnsupported)((0, xL.r)("fetch"), Xq.d.fetch, `the previews did not load: ${String(qQ)}`)
          })), null
        }
        cq();
        try {
          tQ = await xQ
        } catch (qQ) {
          return await lm({
            site: co,
            error: qQ
          }, (() => {
            (0, Ww.showUnsupported)((0, xL.r)("fetch"), Xq.d.fetch, `the ${null!==HQ&&void 0!==HQ?HQ:"client"} build did not load: ${String(qQ)}`)
          })), null
        }
        const eQ = (0, kq.d)(),
          MQ = !eQ && !0 !== iw.m.getItem(eo),
          GQ = !eQ && "loading" === (0, DF.z)();
        await (0, kF.l)(tQ, HF.e, {
          reloadFailedDownload: MQ
        }), GQ && !(0, DF.I)() && await (0, kF.l)(tQ, HF.e, {
          reloadFailedDownload: MQ
        });
        Mq = performance.now();
        const pQ = QD;
        if (!(0, DF.I)()) {
          (0, DF.H)() && iw.m.setItem(eo, !0);
          const QQ = (0, DF.p)();
          if ("call" === QQ) Wm({
            site: Fw.v,
            error: (0, DF.n)(),
            header: null
          }, pQ);
          else {
            const FQ = null !== QQ && void 0 !== QQ ? QQ : "instantiate",
              wQ = () => {
                (0, Ww.showUnsupported)((0, xL.r)(FQ), Xq.d[FQ], (0, DF.j)())
              };
            if ("compile" !== QQ && "instantiate" !== QQ || !Jv())
              if ("fetch" === FQ) {
                const QQ = [tQ.url().href, HF.e.url().href];
                await lm({
                  site: co,
                  error: (0, DF.j)(),
                  urls: QQ
                }, wQ)
              } else wQ();
            else {
              const FQ = (0, DF.j)(),
                wQ = (0, VF.i)((0, DF.n)());
              (0, Ww.reportCountedLoadFallback)((0, xL.r)(QQ), Xq.d[QQ], FQ, wQ), Ev(`the wasm client did not ${QQ} here (${FQ})`, wQ ? "oom" : null)
            }
          }
          return null
        }(0, vF.bb)(tQ.url()) && (0, Ww.reportUnstreamedCoreLoad)();
        const cQ = (0, DF.B)();
        let iQ, WQ = pQ;
        try {
          WQ = {
            ...pQ,
            wasm: cQ.AH()
          };
          const {
            Ot: QQ
          } = tQ.bindings, FQ = QQ.MLQ();
          if (FQ !== XF.t) return Wm({
            site: Fw.d,
            error: `core ABI ${FQ}, page ABI ${XF.t}`,
            header: null
          }, WQ), null;
          const [wQ, LQ] = (0, XF.Ud)();
          iQ = new QQ(wQ, LQ)
        } catch (qQ) {
          return Wm({
            site: Fw.d,
            error: qQ,
            header: null
          }, WQ), null
        }
        QD = WQ, FD = tQ.bindings;
        const RQ = new Fw.j(iQ, DF.t, {
          onCrash: QQ => {
            var FQ;
            null === (FQ = Ok) || void 0 === FQ || FQ.crashed(QQ), bQ && function(QQ, FQ, wQ) {
              if ("webgpu" !== FQ || (0, kq.c)()) return !1;
              const LQ = function(QQ) {
                if (QQ.site === Fw.g && (0, Qw.t)(QQ.error)) return "frames_refused";
                return QQ.site === Mo && (0, Qw.v)(QQ.error) ? "start_failed" : null
              }(QQ);
              if (null === LQ || !(0, Qw.T)(LQ)) return !1;
              return (0, Ww.reportRenderReload)("webgpu", "start_failed" === LQ ? 0 : 1, wQ, {
                cause: LQ,
                error: QQ.error,
                context: tk,
                session: sm(null)
              }), um(), !0
            }(QQ, HQ, WQ) || Wm(QQ, WQ)
          },
          onNetEvent: mm,
          onReconnectGrace: Xv,
          onCoreErrors: (QQ, FQ) => {
            var wQ, LQ;
            QQ.some((QQ => {
              let {
                code: FQ
              } = QQ;
              return FQ === XF.D.RenderDeviceLost
            })) && ((0, kq.w)(), ak.deviceLost()), null === (wQ = Ok) || void 0 === wQ || wQ.coreErrors(QQ), (0, Ww.reportCoreErrors)(QQ, FQ, WQ, ((QQ, FQ) => {
              var wQ;
              return null === (wQ = ek) || void 0 === wQ ? void 0 : wQ.GLQ(QQ, FQ)
            })), null === (LQ = RD) || void 0 === LQ || LQ.coreErrors(QQ)
          },
          onRenderReload: (QQ, FQ, wQ) => {
            ! function(QQ, FQ, wQ, LQ, qQ, oQ) {
              var DQ;
              if ((0, kq.c)()) return;
              const kQ = FQ === XF.Ic.WEBGPU,
                vQ = LQ === XF.Ic.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                mQ = (0, Qw.U)(ek);
              null === (DQ = Ok) || void 0 === DQ || DQ.reload(kQ, wQ, vQ, null === mQ || void 0 === mQ ? void 0 : mQ.message);
              const uQ = kQ ? (0, Qw.Q)(vQ, qQ) : null;
              if (null !== uQ) {
                const FQ = void 0 === mQ ? "" : ` (${mQ.message})`;
                return void QQ.crash(Ww.RENDER_RELOAD_SITE, new Error(`${(0,Ww.renderReloadMessage)("webgpu",vQ,wQ)} and ${uQ}${FQ}`))
              }
              const HQ = kQ ? "webgpu" : "webgl1" === oQ ? "webgl1" : "webgl";
              "lost" === vQ && (0, kq.w)();
              kQ || (0, YF.k)();
              (0, Ww.reportRenderReload)(HQ, wQ, QD, {
                cause: vQ,
                error: mQ,
                context: tk,
                session: sm(QQ.sunShadowsHeld())
              }), um()
            }(RQ, QQ, FQ, wQ, bQ, HQ)
          },
          onEnvEvent: QQ => {
            var FQ;
            QQ.kind === XF.O.SkyImages && (null === (FQ = CD) || void 0 === FQ || FQ.onEvent(QQ.payload))
          },
          onImages: QQ => {
            var FQ;
            null === (FQ = SD) || void 0 === FQ || FQ.onEvent(QQ)
          },
          onModelRequest: QQ => {
            var FQ;
            null === (FQ = GD) || void 0 === FQ || FQ.request(QQ)
          },
          onModelTaken: (QQ, FQ) => {
            var wQ;
            null === (wQ = GD) || void 0 === wQ || wQ.taken(QQ, FQ)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(QQ, FQ) {
                const wQ = yo;
                if (null === wQ || QQ.isStopped) return;
                wQ.restore((QQ => {
                  (0, Ww.reportTerrainTextureFailure)(QQ, FQ)
                })).then((FQ => {
                  !1 !== FQ || QQ.isStopped ? !0 === FQ && console.info(`${to} terrain textures handed over again after the renderer lost them`) : console.warn(`${to} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(RQ, WQ)
            }))
          },
          onKeepAlive: QQ => {
            const FQ = null === ED ? void 0 : nD.get(ED);
            void 0 !== FQ && RL(FQ, QQ)
          }
        });
        if (go = RQ, null !== QQ) {
          RQ.setAntiCheatProbes(ko(DF.t, QQ.checks)), QQ.watchHeld(mo.CoreFrame, (() => RQ.frame)), QQ.watchHeld(mo.GlueFrame, (() => iQ.frame));
          const FQ = Ho(QQ, ((QQ, FQ, wQ) => {
            let LQ = !1;
            return Nm(RQ, (() => {
              LQ = RQ.rings.input.writeRecord(XF.fb.AntiCheat, QQ, FQ, wQ, 0)
            })), LQ
          }));
          RQ.isStopped ? FQ.stop() : eD = FQ
        }
        ao = (QQ, FQ, wQ) => RQ.rings.cmd.writeCmd(QQ, FQ, wQ), Xo = QQ => RQ.rings.cmd.growForCmd(QQ), jD = !1, gv(), (0, SQ.z)(RQ, {
          core: iQ,
          memory: DF.t,
          staleOr: (QQ, FQ, wQ) => lm({
            site: QQ,
            error: FQ
          }, wQ),
          reportReplayFault: (QQ, FQ) => {
            (0, Ww.reportReplayFault)(QQ, FQ, QD)
          },
          audio: Bo,
          options: tF.b,
          onNetEvent: mm,
          sessionInfo: QQ => {
            var FQ;
            return (null === (FQ = yD) || void 0 === FQ ? void 0 : FQ.conn) === QQ ? yD.info : null
          },
          onEventOverflow: Yv,
          replayShaderPack: QQ => {
            var FQ;
            null === (FQ = RD) || void 0 === FQ || FQ.replay(QQ)
          },
          hasPackModel: QQ => {
            var FQ, wQ;
            return null !== (null !== (FQ = null === (wQ = Pv()) || void 0 === wQ ? void 0 : wQ.modelUrl(QQ)) && void 0 !== FQ ? FQ : null)
          },
          beforeWrite: () => (!TD && RQ.rings.net.cursor > 0 && Ym(RQ, !1, "all"), !RQ.isStopped),
          beforeOp: () => (!TD && RQ.netWrittenSinceFrame > 0 && Ym(RQ, !1, "budget"), !RQ.isStopped)
        }), (0, CQ.F)({
          lockPointer: () => {
            if (!aw(AQ)) return !1;
            try {
              Promise.resolve(AQ.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Ow.d)()
          },
          leaveGame: () => {
            bv()
          },
          canvas: () => AQ
        }), MD = (0, CQ.x)((() => {
          var QQ;
          const FQ = (0, SQ.k)();
          null === (QQ = (0, SQ.u)()) || void 0 === QQ || QQ.followCursorAim(!0 === (null === FQ || void 0 === FQ ? void 0 : FQ.isSessionLive) ? FQ : null)
        })), VD && RQ.setUiPrefs(VD);
        hD && RQ.setEnvPrefs(hD);
        JD && RQ.setLookPrefs(JD);
        const OQ = uq ? Hq(uq.preventMovement) : null;
        OQ && Cv(OQ);
        const sQ = (0, Aw.g)(),
          rQ = (0, Aw.e)(RQ, sQ);
        AD = sQ.basis, (0, Sw.h)(null === rQ ? null : (0, xw.l)(rQ)), xD = rQ;
        const IQ = (0, mF.b)();
        let UQ = 1 / 0,
          NQ = !0,
          TQ = sQ.shedFootprintBytes;
        const KQ = new aL.b(IQ, (() => iQ.lt()), (QQ => {
          RQ.crash(Fw.n, QQ)
        }));
        bD = KQ, YD = KQ, null !== rQ && KQ.setCeiling(Math.min((0, aL.p)(rQ), UQ));
        if (NQ) {
          KQ.setShed((QQ => {
            const FQ = RQ.shedMemory("joinReserve" !== QQ);
            return null !== FQ && (null === xD || FQ < xD) && (xD = FQ, (0, Sw.h)((0, xw.l)(FQ))), FQ
          }), ((QQ, FQ, wQ) => {
            1 === FQ ? (0, Ww.reportMemoryShed)(QQ, wQ, QD) : console.warn(`${to} wasm memory: shed again (${QQ}): shed ${FQ}`, wQ.wasmMemoryShed)
          }), (() => RQ.addDistanceInUse()));
          const QQ = (0, Qw.J)(cQ);
          KQ.setFootprint(new Iq(TQ, {
            storedChunks: () => iQ.pLQ(),
            gpuBytes: () => {
              var FQ;
              return null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.cLQ()) && void 0 !== FQ ? FQ : 0
            },
            jsHeapBytes: rq
          }))
        }
        window.addEventListener("pagehide", (() => {
          bD === KQ && (KQ.refreshStats(), Um(KQ))
        })), window.addEventListener("pagehide", Hm), window.addEventListener("pagehide", bm), !1;
        const [zQ, lQ] = (0, ew.g)();
        rk = (0, Gw.d)((QQ => RQ.setChunkAddDistance(QQ.horizontal, QQ.vertical)), {
          horizontal: zQ,
          vertical: lQ
        }), RQ.setAmbientOcclusion(!0 !== iw.i.getItem("disableAmbientOcclusion")), RQ.setPoseLod(!0 !== iw.i.getItem(oF.L)), (0, Uq.o)("look") && (RQ.setDebugLog(XF.H.Look, !0), (0, Tq.g)("wasm", (() => RQ.takeDebugLog(XF.H.Look))));
        (0, Uq.o)("remesh") && (RQ.setDebugLog(XF.H.Remesh, !0), jQ = () => RQ.takeDebugLog(XF.H.Remesh), aq = new jq((0, Kq.o)(), jQ));
        var jQ;
        const aQ = function(QQ, FQ, wQ, LQ) {
          const qQ = new LL,
            oQ = QQ => iw.i.getItem(QQ);
          qQ.sync(oQ, FQ), (0, OF.Q)();
          const DQ = (0, vQ.o)("customBindingsChanged", (() => {
            qQ.sync(oQ, FQ)
          }));
          (0, sw.p)(FQ);
          const kQ = new Set,
            mQ = (0, CQ.x)((() => {
              var QQ;
              kQ.size > 0 && kL() && !0 === (null === (QQ = (0, SQ.k)()) || void 0 === QQ ? void 0 : QQ.localPlayerAlive()) && vQ.l.GA("usedKeyboard")
            })),
            uQ = gw.e.heldSizer((() => (0, rF.l)(QQ))),
            HQ = nw(QQ, FQ, {
              prevents: QQ => qQ.prevents(QQ),
              keyPressed: QQ => {
                qQ.moves(QQ) && (kQ.add(QQ), kL() && vQ.l.GA("usedKeyboard"))
              },
              keyReleased: QQ => {
                kQ.delete(QQ)
              },
              keysReleased: () => {
                kQ.clear()
              },
              resized: () => {
                oL.j.measure(QQ.getBoundingClientRect()), (0, Pw.g)()
              },
              sizeCanvas: uQ,
              watchRenderScale: FQ => {
                const wQ = (0, rF.o)(QQ, FQ),
                  LQ = gw.e.onRelease(FQ);
                return () => {
                  wQ(), LQ()
                }
              },
              touchStarting: () => {
                oL.j.measure(QQ.getBoundingClientRect())
              },
              viewShown: wQ,
              touchUiShown: () => EQ.c.get("isTouchScreen"),
              ctrlCombosAreGames: kL,
              inspect: (QQ, FQ, wQ) => {
                qQ.checks(FQ, wQ) && LQ(QQ)
              },
              canLock: () => aw(QQ)
            }),
            bQ = (0, Dw.e)(FQ);
          return () => {
            DQ(), mQ(), (0, sw.p)(null), bQ(), HQ()
          }
        }(AQ, ((QQ, FQ, wQ, LQ, qQ) => {
          var oQ;
          Nm(RQ, (() => {
            RQ.rings.input.writeRecord(QQ, FQ, wQ, LQ, qQ)
          })), null === (oQ = eD) || void 0 === oQ || oQ.onInput(QQ), !KD && (0, bL.g)(QQ, qQ) && (0, bL.e)((() => {
            go !== RQ || Ek || RQ.isStopped || !pm() || Ym(RQ, !1, "budget", !1)
          }))
        }), (() => fk), (QQ => {
          var FQ;
          null === (FQ = eD) || void 0 === FQ || FQ.onEvent(QQ)
        }));
        if (RQ.isStopped) return aQ(), null;
        vD = aQ;
        const XQ = () => !RQ.isStopped && !hk;
        if (RQ.isStopped) return null;
        (0, DF.O)((() => {
          "call" === (0, DF.p)() && RQ.crash(Fw.v, (0, DF.n)())
        }));
        const fQ = (0, Fw.O)(RQ.rings.worker, (() => {
          Ym(RQ, !1, "budget")
        }));
        mD = function(QQ, FQ) {
          return Tm().then((QQ => {
            let {
              prefetchWorldgenWorker: FQ
            } = QQ;
            FQ()
          }), (() => {})), new Jq({
            module: (0, DF.w)(),
            decodeSettings: QQ => {
              const FQ = (0, SQ.u)();
              if (null === FQ) throw new Error("no game code to decode the world-gen seed with");
              return FQ.decodeMapSettings(QQ)
            },
            loadWorker: Km,
            onMapWithoutWorldgen: () => {
              zm((QQ => {
                let {
                  stopWorldgenWorkerPrefetch: FQ
                } = QQ;
                FQ()
              }))
            },
            onLoadFailed: QQ => {
              (0, Ww.reportWorldgenLoadFailure)(QQ, QD)
            },
            onWorkerLost: QQ => {
              (0, Ww.reportWorkerLost)(Fw.C, QQ, QD)
            },
            onStartTimeout: QQ => {
              (0, Ww.reportWorkerStartTimeout)(Fw.C, QQ, QD)
            },
            onGaveUp: QQ => {
              (0, Ww.reportWorldgenGaveUp)(QQ, QD)
            },
            onMemoryStats: QQ => {
              var FQ;
              null === (FQ = bD) || void 0 === FQ || FQ.noteWorldgen(QQ)
            },
            onMemoryGone: () => {
              var QQ;
              null === (QQ = bD) || void 0 === QQ || QQ.worldgenGone()
            },
            write: (wQ, LQ, qQ, oQ, DQ) => {
              Nm(QQ, (() => {
                QQ.rings.worker.writeWorkerRecord(wQ, LQ, qQ, 0, oQ, DQ) || QQ.crash(Fw.C, `a world-gen record of kind ${LQ} did not fit the worker-in ring`)
              })), FQ()
            }
          })
        }(RQ, fQ), HD = function(QQ, FQ) {
          return new lL({
            module: (0, DF.w)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: QQ
              }, FQ] = await Promise.all([wQ.e(40).then((() => wQ(42775))), Promise.resolve().then((() => wQ(96))).then((QQ => {
                let {
                  isMobile: FQ
                } = QQ;
                return FQ()
              }), (() => !1))]);
              return {
                create: QQ,
                count: (0, CF.b)(navigator.hardwareConcurrency, FQ)
              }
            },
            write: (wQ, LQ, qQ, oQ, DQ, kQ) => {
              (0, Pw.e)(), Nm(QQ, (() => {
                QQ.rings.worker.writeWorkerRecord(wQ, LQ, qQ, oQ, DQ, kQ) || QQ.crash(Fw.r, `a meshing record of kind ${LQ} did not fit the worker-in ring`)
              })), FQ()
            },
            onWorkerLost: QQ => {
              (0, Ww.reportWorkerLost)(Fw.r, QQ, QD)
            },
            onLightFault: (QQ, FQ) => {
              (0, Ww.reportLightFault)(QQ, FQ, QD)
            },
            onStartTimeout: QQ => {
              (0, Ww.reportWorkerStartTimeout)(Fw.r, QQ, QD)
            },
            onMemoryStats: (QQ, FQ) => {
              var wQ;
              null === (wQ = bD) || void 0 === wQ || wQ.noteMeshWorker(QQ, FQ)
            },
            onMemoryGone: QQ => {
              var FQ;
              null === (FQ = bD) || void 0 === FQ || FQ.meshWorkerGone(QQ)
            },
            fail: (FQ, wQ) => {
              const LQ = () => {
                QQ.crash(Fw.r, void 0 === wQ ? FQ : new Error(FQ, {
                  cause: wQ
                }))
              };
              void 0 !== wQ ? lm({
                site: Fw.r,
                error: wQ
              }, LQ) : LQ()
            }
          })
        }(RQ, fQ);
        const VQ = (0, dL.r)(pF.clientSideServerUrls.staticUrl, {
            onTableFailed: QQ => {
              lm({
                site: Ww.MODEL_FEED_SITE,
                error: QQ
              }, (() => {}), XQ)
            },
            packUrl: QQ => {
              var FQ, wQ;
              return null !== (FQ = null === (wQ = Pv()) || void 0 === wQ ? void 0 : wQ.modelUrl(QQ)) && void 0 !== FQ ? FQ : null
            }
          }),
          nQ = function(QQ, FQ, wQ) {
            const LQ = wQ => {
              var LQ, qQ;
              return null !== (LQ = null === (qQ = FQ()) || void 0 === qQ ? void 0 : qQ.drawnUrl(wQ)) && void 0 !== LQ ? LQ : QQ.url(wQ)
            };
            return (0, yL.h)((0, fL.o)(LQ), wQ)
          }(VQ, (() => GD), Pv),
          gQ = new fL.c(nQ, (QQ => {
            console.warn(`${to} image ${QQ.key.kind}:${QQ.key.index}:${QQ.key.word} failed`, QQ.error)
          }));
        SD = gQ, iD = new gL(RQ, nQ, ((QQ, FQ) => {
          void 0 === FQ ? console.warn(`${to} ${QQ}`) : yv(QQ, FQ)
        }));
        const PQ = new ZL.h(VQ, function(QQ, FQ) {
          let LQ = !1,
            qQ = null,
            oQ = null;
          const DQ = {
              onUnavailable: (wQ, LQ) => {
                oQ ??= lm({
                  site: Ww.MODEL_POOL_SITE,
                  error: wQ,
                  urls: LQ
                }, (() => {
                  (0, Ww.reportModelPoolFailure)(wQ, QQ)
                }), FQ)
              },
              onDecoderFailed: (wQ, LQ) => {
                const qQ = () => {
                  (0, Ww.reportDracoDecoderFailure)(wQ, QQ)
                };
                void 0 !== LQ ? lm({
                  site: Ww.MODEL_POOL_SITE,
                  error: wQ,
                  urls: LQ
                }, qQ, FQ) : qQ()
              },
              onWorkerLost: FQ => {
                (0, Ww.reportWorkerLost)(Ww.MODEL_POOL_SITE, FQ, QQ)
              },
              onModuleRetry: (FQ, wQ) => {
                (0, Ww.reportModelsModuleRetry)(FQ, wQ, QQ)
              }
            },
            kQ = wQ.e(42).then((() => wQ(42779))).then((QQ => {
              let {
                pageModelPool: FQ
              } = QQ;
              if (LQ) return null;
              const wQ = FQ(DQ);
              return qQ = wQ.unlisten, pD = wQ.pool, wQ.pool
            }), (QQ => (LQ || DQ.onUnavailable(QQ, void 0), null)));
          return cD = () => {
            var QQ;
            LQ = !0, null === (QQ = qQ) || void 0 === QQ || QQ(), pD = null
          }, (QQ, FQ) => kQ.then((wQ => {
            var LQ;
            return null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.build(QQ, FQ)) && void 0 !== LQ ? LQ : (0, Qq.v)(QQ, "the model workers did not load")
          })).then((QQ => null !== oQ && (0, Qq.n)(QQ) ? oQ.then((() => QQ)) : QQ))
        }(WQ, XQ), (QQ => {
          QQ.startup ? (im(), lm({
            site: Ww.MODEL_FEED_SITE,
            error: QQ.error,
            urls: "" === QQ.url ? void 0 : [QQ.url]
          }, (() => {
            (0, Ww.reportModelFailure)(QQ, WQ)
          }))) : (0, Ww.reportModelFailure)(QQ, WQ)
        }), {
          onWritten: (QQ, FQ) => {
            gQ.glbWritten(QQ, FQ)
          },
          onTaken: (QQ, FQ) => {
            gQ.glbTaken(QQ, FQ)
          },
          onPackFileFailed: (QQ, FQ) => {
            console.warn(`${to} the texture pack's model file ${QQ} failed: the shipped one loads`, FQ)
          }
        });
        GD = PQ;
        const ZQ = new JL.f(RQ);
        yo = ZQ, ZQ.swap((QQ => {
          const FQ = () => {
            (0, Ww.reportTerrainTextureFailure)(QQ, WQ)
          };
          if (Ik) return void FQ();
          const wQ = () => !Ik,
            LQ = null === QQ.url ? void 0 : [QQ.url];
          lm({
            site: Fw.B,
            error: QQ.error,
            urls: LQ
          }, FQ, wQ)
        })).then((QQ => {
          null !== QQ && (QQ || RQ.isStopped || console.warn(`${to} the core refused the terrain textures: terrain draws untextured`), ID(RQ))
        }));
        const yQ = new jF(RQ, ((QQ, FQ) => {
          console.warn(`${to} ${QQ}`, ...void 0 === FQ ? [] : [FQ])
        }));
        yQ.feed(), null !== HQ && function(QQ, FQ, LQ, qQ, oQ, DQ) {
          let kQ = null,
            vQ = null,
            mQ = !1;
          const uQ = {
            textures: null,
            stop: () => {
              var QQ, FQ;
              mQ = !0, null === (QQ = vQ) || void 0 === QQ || QQ(), null === (FQ = kQ) || void 0 === FQ || FQ(), BL.d.setSettled(null), null !== FD && Qv.clear(FD)
            }
          };
          Zo = uQ, vQ = Bv().follow((vQ => {
            null !== vQ && Promise.all([wQ.e(194), wQ.e(45)]).then((() => wQ(42738))).then((wQ => {
              let {
                PackTextures: HQ
              } = wQ;
              if (mQ || QQ.isStopped) return;
              const bQ = new HQ({
                feed: vQ,
                terrain: FQ,
                backend: LQ,
                stopped: () => QQ.isStopped,
                landed: () => {
                  ID(QQ)
                },
                packSwapped: () => {
                  (0, yL.f)(qQ), DQ.feed((() => async function(QQ) {
                    const FQ = null === QQ ? null : await QQ.averageColours;
                    return null === FQ ? aF() : lF(FQ)
                  }(bQ.assets))), (0, PL.j)(bQ.files()), oQ.refresh().then((QQ => {
                    null !== QQ && console.info(`${to} texture pack models: ${QQ.resent} of ${QQ.delivered} files written again, ${QQ.refetched} refetched`)
                  }))
                },
                settled: (QQ, FQ, wQ) => {
                  var LQ;
                  (BL.d.setSettled({
                    state: QQ,
                    files: FQ
                  }), null === QQ.gameSource && (0, tw.e)(QQ.pack, wQ), wQ) || function(QQ) {
                    const FQ = FD;
                    null !== FQ && Qv.apply(FQ, QQ).then((FQ => {
                      FQ && QQ && console.info(`${to} the texture pack's animations are in (${Object.keys(QQ).length} files)`)
                    }))
                  }(null === (LQ = QQ.pack) || void 0 === LQ ? void 0 : LQ.animations)
                },
                settling: () => {
                  BL.d.setSettled(null)
                },
                warn: yv,
                maxTextureSize: () => Promise.resolve((0, Qw.ab)(document.createElement("canvas")))
              });
              uQ.textures = bQ, kQ = bQ.start()
            }), (QQ => {
              console.warn(`${to} the texture pack's terrain didn't load: the built atlas stays`, QQ)
            }))
          }))
        }(RQ, ZQ, HQ, gQ, PQ, yQ);
        const BQ = () => {
            RQ.setTextureLayers("")
          },
          dQ = QQ => {
            (GF ??= wQ.e(51).then((() => wQ(42786))).then((QQ => {
              let {
                TEXTURE_NAMES: FQ
              } = QQ;
              return FQ
            }), (QQ => {
              throw GF = null, QQ
            })), GF).then((QQ => {
              RQ.setTextureLayers(QQ) || RQ.isStopped || (console.warn(`${to} the core refused the texture names: textured Boxes draw textureNotFound`), BQ())
            }), (FQ => {
              if (RQ.isStopped) return;
              const [wQ, ...LQ] = QQ;
              void 0 === wQ ? lm({
                site: Ww.TEXTURE_NAMES_SITE,
                error: FQ
              }, (() => {
                console.warn(`${to} the texture names didn't load, so textured Boxes draw textureNotFound`, FQ), BQ()
              }), XQ) : setTimeout((() => {
                dQ(LQ)
              }), wQ)
            }))
          };
        if (dQ(zo), null !== HQ && !await async function(QQ, FQ, wQ, LQ, oQ, DQ) {
            var kQ;
            const vQ = (0, Qw.J)(wQ);
            if (null === vQ) return QQ.crash(Mo, new Error(`this ${LQ} build has no openRenderer`)), !1;
            let mQ;
            ek = vQ;
            try {
              var uQ, HQ, bQ, YQ;
              const qQ = null !== (uQ = null === (HQ = Eo) || void 0 === HQ ? void 0 : HQ.pagePreviews()) && void 0 !== uQ ? uQ : null,
                kQ = null !== (bQ = null === (YQ = Eo) || void 0 === YQ ? void 0 : YQ.previewModule(wQ)) && void 0 !== bQ ? bQ : null;
              if (null === qQ || null === kQ) {
                null === qQ || void 0 === qQ || qQ.endSession(!1), mQ = (0, rF.f)().sampleCount, await (0, Qw.d)(FQ, vQ, DQ, nv, mQ, await oQ);
                const QQ = (0, Qw.l)(wQ);
                null === QQ && console.warn(`${to} this ${LQ} build has no image registry: sky and model images won't show`), (0, hL.c)(QQ)
              } else {
                (0, kq.c)() && await (0, JQ.l)();
                const wQ = (0, kq.G)();
                if (null !== wQ) {
                  const FQ = (0, Qw.U)(vQ);
                  return QQ.crash(Ww.RENDER_RELOAD_SITE, new Error(`${wQ}${void 0===FQ?"":` (${FQ.message})`}`)), !1
                }
                mQ = await qQ.bindSession(kQ, FQ, (async QQ => (0, Qw.w)(vQ, Mo, DQ, QQ, nv, await oQ)))
              }
            } catch (qQ) {
              return QQ.crash(Mo, qQ), !1
            }(function(QQ, FQ) {
              const wQ = QQ,
                {
                  requestCapture: LQ,
                  takeCapture: qQ
                } = wQ;
              if ("function" !== typeof LQ || "function" !== typeof qQ) return;
              const oQ = {
                request() {
                  LQ.call(wQ, FQ)
                },
                take() {
                  var QQ;
                  return null !== (QQ = qQ.call(wQ)) && void 0 !== QQ ? QQ : null
                }
              };
              window[xq] = oQ
            })(FQ, mQ), ik = mQ, Ak = !0;
            const xQ = performance.now();
            return tk.boundAtMs = null !== (kQ = (0, kq.J)()) && void 0 !== kQ ? kQ : xQ, tk.indirectHangs = (0, kq.z)(), console.info(`${to} ${LQ} renderer bound at ${Math.round(xQ)} ms`), !QQ.isStopped
          }(RQ, iQ, cQ, HQ, YQ, AQ)) return null;
        if (null !== HQ) {
          var QF, FF, wF;
          (0, uF.t)(HQ);
          const QQ = () => !RQ.isStopped && Gm();
          wQ.e(186).then((() => wQ(8978))).then((FQ => {
            let {
              devTools: wQ
            } = FQ;
            RQ.isStopped || wQ.setHost(function(QQ) {
              return {
                tools: Dq,
                async downloadScene(FQ, wQ) {
                  let {
                    width: LQ,
                    height: qQ,
                    colouring: oQ
                  } = wQ;
                  "screenshot" === FQ && null === oQ ? await (0, Lq.c)(QQ, LQ, qQ) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(QQ, FQ) {
              return {
                canvas: QQ,
                maxTextureSize: qq,
                drawing: FQ,
                resize: (QQ, FQ) => {
                  (0, sw.w)(XF.fb.Resize, 0, QQ, FQ, (0, sw.i)(1))
                },
                restoreSize: () => {
                  const FQ = (0, rF.l)(QQ);
                  null !== FQ && (0, sw.w)(XF.fb.Resize, 0, FQ.cssWidth, FQ.cssHeight, (0, sw.i)(FQ.renderScale))
                },
                onFrameDrawn: QQ => (oq.add(QQ), () => {
                  oq.delete(QQ)
                })
              }
            }(AQ, QQ)))
          }), (QQ => {
            console.warn(`${to} the developer tools didn't load: no captures this session`, QQ)
          }));
          const FQ = "webgpu" === HQ && null !== (QF = null === mQ || void 0 === mQ || null === (FF = mQ.adapter) || void 0 === FF ? void 0 : FF.vendor) && void 0 !== QF ? QF : null;
          Wk = {
            backend: HQ,
            canvas: AQ,
            fallbackReason: null !== (wF = null === mQ || void 0 === mQ ? void 0 : mQ.reason) && void 0 !== wF ? wF : null,
            adapterVendor: FQ
          }, qm();
          try {
            (0, Pw.k)(HQ, AQ, FQ)
          } catch (qQ) {
            (0, Pw.o)(), console.error(`${to} the quality steps didn't start`, qQ)
          }
        }
        const {
          storagePullBreaks: LF,
          splitPassBreaks: qF
        } = await YQ;
        qF && console.warn(`${to} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const bF = LF ? hQ.b : (0, hQ.e)(mQ, (0, RF.g)());
        if ((0, Uq.o)("webgpuloss")) {
          var eF, MF;
          const QQ = {
            backend: HQ,
            reason: null !== (eF = null === mQ || void 0 === mQ ? void 0 : mQ.reason) && void 0 !== eF ? eF : null,
            source: null !== (MF = null === mQ || void 0 === mQ ? void 0 : mQ.source) && void 0 !== MF ? MF : null,
            storagePullBreaks: LF,
            noWebGpu: bF.messageKey
          };
          (0, Nq.b)((FQ => {
            FQ.noteWasmPick(QQ)
          }))
        }
        const cF = "webgpu" === HQ && !LF;
        if (RD = (0, hQ.h)(cF ? RQ : null, cF && null !== (DQ = null === (kQ = Eo) || void 0 === kQ ? void 0 : kQ.pagePreviews().JY) && void 0 !== DQ ? DQ : null, bF, yv), Ek) return null;
        if (KQ.reserveAtJoin((0, aL.m)(null !== rQ && void 0 !== rQ ? rQ : xw.e)), RQ.isStopped) return null;
        const SF = QQ => {
          if (null !== Rk) try {
            Rk.animationFrame(QQ)
          } catch (qQ) {
            km(qQ)
          }
          if (function(QQ, FQ) {
              return FQ && !Ek && !KD && pm() && Gm() && QQ.framePaces(performance.now())
            }(RQ, fk)) {
            if (RQ.writePendingInput(), (0, CQ.e)(QQ, xm), om(!1, QQ), null !== Rk) try {
              Rk.framePaced()
            } catch (qQ) {
              km(qQ)
            }
            requestAnimationFrame(SF)
          } else Ym(RQ, fk, "budget") && ((0, sF.h)(RQ.lastFrameKind) && Gm() && (0, CQ.e)(QQ, xm), om(fk && jk, QQ), ak.frame(RQ.lastFrameKind, fk && Gm(), QQ), Rm(RQ), KQ.afterFrame(), requestAnimationFrame(SF))
        };
        requestAnimationFrame(SF);
        return function(QQ) {
          if (QQ.has("inputLog") && (0, qL.j)((QQ => {
              let {
                action: FQ,
                down: wQ,
                press: LQ
              } = QQ;
              console.info(`${DL} input ${FQ} ${wQ?"down":"up"} press ${LQ} at ${performance.now().toFixed(1)}`)
            })), QQ.has("inputDump")) {
            const QQ = [];
            vL = QQ, Object.assign(window, {
              bloxdInputDump: () => QQ.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), tD = function(QQ, FQ) {
          let wQ = null;
          const LQ = () => {
              null !== wQ && (clearInterval(wQ), wQ = null)
            },
            qQ = () => {
              document.hidden ? wQ ??= setInterval((() => {
                Ym(QQ, !1, "budget") ? (Rm(QQ), FQ.afterFrame()) : LQ()
              }), Ko) : LQ()
            };
          return document.addEventListener("visibilitychange", qQ), qQ(), () => {
            LQ(), document.removeEventListener("visibilitychange", qQ)
          }
        }(RQ, KQ), RQ
      }(FQ).then((QQ => {
        var FQ;
        (LQ(QD), qD(null !== QQ), null !== QQ && (Gq = performance.now()), wD(QQ), null === QQ) ? null === (FQ = Eo) || void 0 === FQ || FQ.pagePreviews().endSession(null === (0, DF.p)()): rD("booted")
      }), (QQ => {
        LQ(QD), qD(!1), wD(null), Wm({
          site: Go,
          error: QQ,
          header: null
        }, QD)
      }))
    }

    function dk() {
      const QQ = FD;
      null !== QQ && nk().then((FQ => {
        let {
          pageBuiltInAnimationPack: wQ
        } = FQ;
        wQ().provide(QQ)
      }), (QQ => {
        console.warn(`${to} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, QQ)
      }))
    }
    const Qv = new class {
      constructor(QQ) {
        this.deps = QQ, this.latest = 0, this.ym = null
      }
      apply(QQ, FQ) {
        return this.load(QQ, FQ, 0)
      }
      async load(QQ, FQ, wQ) {
        var LQ;
        const qQ = ++this.latest,
          oQ = this.deps.compiler;
        if (void 0 === FQ || null === FQ || "object" !== typeof FQ || 0 === Object.keys(FQ).length || null === oQ) return this.drop(QQ), !1;
        if ((null === (LQ = this.ym) || void 0 === LQ ? void 0 : LQ.module) === QQ && (0, PF.oe)(this.ym.files, FQ)) return !1;
        try {
          const [wQ, LQ] = await Promise.all([oQ(), this.deps.builtIns()]);
          if (qQ !== this.latest) return !1;
          const DQ = await wQ(FQ, dF, {
            builtIns: LQ
          });
          if (qQ !== this.latest) return !1;
          const kQ = this.call(QQ, DQ);
          if (void 0 === kQ) throw new BF("the compiled animations didn't read against the built-in pack");
          return this.ym = {
              module: QQ,
              files: FQ
            },
            function(QQ) {
              for (let FQ = 0; FQ + 2 < QQ.length; FQ += 3) {
                ("error" === QQ[FQ] ? console.error : console.warn)(`Animation for the texture pack: ${QQ[FQ+1]}: ${QQ[FQ+2]}`)
              }
            }(kQ), !0
        } catch (kQ) {
          var DQ;
          if (qQ !== this.latest) return !1;
          this.drop(QQ), 0 === wQ && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", kQ);
          const LQ = (null !== (DQ = this.deps.retryAfterMs) && void 0 !== DQ ? DQ : yF)[wQ];
          return void 0 === LQ || kQ instanceof BF || (0, ZF.g)(QQ) || setTimeout((() => {
            qQ === this.latest && this.load(QQ, FQ, wQ + 1)
          }), LQ), !1
        }
      }
      call(QQ, FQ) {
        try {
          return QQ.eLQ(FQ)
        } catch (wQ) {
          throw (0, ZF.j)(QQ, wQ), wQ
        }
      }
      clear(QQ) {
        this.latest++, this.drop(QQ)
      }
      drop(QQ) {
        const FQ = this.ym;
        if (this.ym = null, (null === FQ || void 0 === FQ ? void 0 : FQ.module) === QQ && !(0, ZF.g)(QQ)) try {
          this.call(QQ, null)
        } catch {}
      }
    }({
      compiler: JF.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: QQ
        } = await nk();
        return QQ().whenSet()
      },
      warn: yv
    });
    async function Fv(QQ, FQ) {
      let LQ = !1;
      await wv({
        matchmake: async () => {
          const {
            guestJoinTarget: qQ,
            guestJoinWithPack: oQ
          } = await wQ.e(343).then((() => wQ(42707)));
          return LQ ? qQ(QQ, FQ, Qm()) : (LQ = !0, oQ(QQ, FQ, (FQ => Fm(QQ, FQ)), Qm))
        },
        onFailure: QQ => {
          (0, Ww.showJoinFailure)(QQ, QD)
        },
        rejoin: ev,
        invalidateTrafficCode: Mv
      })
    }
    async function wv(QQ) {
      let {
        matchmake: FQ,
        onFailure: wQ,
        rejoin: qQ,
        invalidateTrafficCode: oQ,
        pageReady: DQ,
        signal: kQ
      } = QQ;
      const vQ = () => !0 === (null === kQ || void 0 === kQ ? void 0 : kQ.aborted);
      let mQ;
      const uQ = BL.d.rejoinHold();
      PD = null;
      const HQ = (0, pw.K)("wasm", Im);
      let bQ = !1,
        YQ = performance.now();
      try {
        if (!await oD) return {
          kind: "stopped"
        };
        if (vQ()) return {
          kind: "wF"
        };
        gk().catch((() => {}));
        let QQ = await FQ();
        var AQ, tQ;
        if (YQ = performance.now(), !vQ()) rm(null !== (AQ = null === (tQ = QQ.target.session) || void 0 === tQ ? void 0 : tQ.gameNameWithVariation) && void 0 !== AQ ? AQ : null);
        const wQ = () => performance.now() - QQ.matchedAt <= QQ.freshMs,
          LQ = qv(QQ.target).catch((() => {}));
        wQ() && !vQ() && (mQ = new NL(QQ.target, {
          signal: kQ
        }));
        const oQ = performance.now();
        if (null === await LD) return {
          kind: "stopped"
        };
        var eQ, MQ;
        if (function(QQ) {
            var FQ, wQ;
            if (Aq.b.markGameEngineConstructed(), pq) return;
            pq = !0;
            const LQ = Math.max(QQ, null !== (FQ = eq) && void 0 !== FQ ? FQ : QQ);
            (0, tq.j)("ready", Math.max(0, (null !== (wQ = Mq) && void 0 !== wQ ? wQ : LQ) - LQ) / 1e3)
          }(oQ), !vQ())
          if (null !== Mq && null !== Gq ? ((0, xQ.m)("wasm_loaded", Mq), (0, xQ.m)("wasm_core_ready", Gq)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), QQ.target.session && function(QQ) {
              const FQ = (0, PF.Wb)(QQ);
              return "classic" !== FQ ? fq.has(FQ) : !(0, LF.f)(QQ) && !Vq.has((0, PF.Pb)(QQ))
            }(QQ.target.session.gameNameWithVariation)) null === (eQ = mD) || void 0 === eQ || eQ.prestart();
        if (await LQ, !wQ() && !vQ()) null === (MQ = mQ) || void 0 === MQ || MQ.rematched(), QQ = await FQ(), YQ = performance.now();
        if (vQ()) return {
          kind: "wF"
        };
        const uQ = await async function(QQ) {
          var FQ, wQ, LQ;
          let {
            signal: qQ,
            rejoin: oQ = null,
            early: DQ,
            pageReady: kQ
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== qQ && void 0 !== qQ && qQ.aborted) throw new DOMException("the join was left", "AbortError");
          const vQ = (mQ = qk, uQ = performance.now(), null !== mQ && uQ - mQ < GL);
          var mQ, uQ;
          qk = null;
          const HQ = new AbortController,
            bQ = null !== (FQ = null === (wQ = QQ.session) || void 0 === wQ ? void 0 : wQ.gameNameWithVariation) && void 0 !== FQ ? FQ : null;
          rm(bQ), kv({
            controller: HQ,
            game: bQ
          }), Dk = null, null === (LQ = mk) || void 0 === LQ || LQ.abort(), mk = null, Hk = !1, bk = null, Yk.clear();
          const YQ = () => {
            (0, cF.h)(HQ, (0, cF.e)(qQ))
          };
          null === qQ || void 0 === qQ || qQ.addEventListener("abort", YQ, {
            once: !0
          });
          try {
            var AQ, tQ, eQ;
            const FQ = await LD;
            if (null === FQ || FQ.isStopped || Ek) throw new Error("no core is running to join a game with");
            if (QQ.session && null !== RD) {
              const FQ = await ov(RD.join(QQ.session.gameNameWithVariation), HQ.signal);
              if ((0, Uq.o)("webgpuloss")) {
                const wQ = QQ.session.gameNameWithVariation,
                  LQ = RD.couldntRunInJoinedGame();
                (0, Nq.b)((QQ => QQ.noteWasmJoin(wQ, FQ, LQ)))
              }
              if (null !== FQ) throw new hQ.c(FQ)
            }
            const [, , , {
              joinRoom: wQ
            }] = await ov(Promise.all([(0, SQ.o)(FQ), qv(QQ), null === kQ || void 0 === kQ ? void 0 : kQ(), gk()]), HQ.signal), LQ = QQ.session, qQ = LQ ? {
              ...cv,
              attachSocket: FQ => {
                const wQ = sv(FQ, QQ.endpoint);
                var qQ;
                null !== wQ && (yD = {
                  conn: wQ,
                  info: LQ
                }, null === (qQ = BD) || void 0 === qQ || qQ(LQ.playerDbId));
                return wQ
              }
            } : cv, mQ = await wQ(qQ, QQ, {
              signal: HQ.signal,
              early: DQ
            }).catch((QQ => {
              throw function(QQ) {
                if (!(QQ instanceof TQ.e)) return QQ;
                if ("roomError" === QQ.stage && null !== bk) return Lv(new TQ.e(QQ.message, QQ.stage, QQ.code, bk), QQ);
                const FQ = "closed" === QQ.stage && null !== kk ? Yk.get(kk.conn) : void 0;
                return void 0 === FQ ? QQ : Lv(new TQ.e(QQ.message, QQ.stage, FQ.code), QQ)
              }(QQ)
            }));
            if (gD !== HQ) throw mQ.leave(), new DOMException("the join was left", "AbortError");
            mv(mQ), null === (AQ = HD) || void 0 === AQ || AQ.newGame();
            const uQ = function(QQ) {
              var FQ, wQ;
              const {
                session: LQ
              } = QQ, qQ = void 0 === LQ ? QQ.joinOptions.lobbyName : LQ.lobbyName;
              return {
                endpoint: QQ.endpoint,
                game: null !== (FQ = null === LQ || void 0 === LQ ? void 0 : LQ.gameNameWithVariation) && void 0 !== FQ ? FQ : QQ.roomName,
                lobby: String(null !== qQ && void 0 !== qQ ? qQ : null),
                postCookies: null !== (wQ = QQ.postCookies) && void 0 !== wQ ? wQ : null
              }
            }(QQ);
            nD.set(mQ, uQ), sL(uQ);
            const bQ = performance.now(),
              YQ = {
                conn: mQ.conn,
                rejoin: oQ,
                game: null !== (tQ = null === (eQ = QQ.session) || void 0 === eQ ? void 0 : eQ.gameNameWithVariation) && void 0 !== tQ ? tQ : "",
                joinedAt: bQ,
                rejoinedAt: vQ ? bQ : null,
                overflow: null
              };
            dD = YQ,
              function(QQ, FQ) {
                lv();
                const wQ = {
                  endpoint: FQ,
                  roomId: QQ.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Hw({
                    reconnect: (QQ, FQ, LQ) => async function(QQ, FQ, wQ, LQ) {
                      const {
                        roomId: qQ,
                        roomToken: oQ
                      } = av(QQ, FQ), DQ = go;
                      if (null === DQ || DQ.isStopped || Ek) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: kQ
                      } = await ov(gk(), wQ), vQ = {
                        ...cv,
                        attachSocket: FQ => Qk !== QQ || 0 === QQ.heldConn ? (FQ.close(), null) : sv(FQ, QQ.endpoint, !0)
                      };
                      return kQ(vQ, QQ.endpoint, qQ, oQ, {
                        signal: wQ,
                        onAttached: LQ
                      })
                    }(wQ, QQ, FQ, LQ),
                    releaseSeat: QQ => {
                      !async function(QQ, FQ) {
                        const {
                          roomId: wQ,
                          roomToken: LQ
                        } = av(QQ, FQ);
                        try {
                          const {
                            leaveHeldSeat: FQ
                          } = await gk();
                          await FQ(QQ.endpoint, wQ, LQ)
                        } catch (qQ) {
                          console.warn(`${to} the held seat of a game left while it reconnected couldn't be released`, qQ)
                        }
                      }(wQ, QQ)
                    },
                    isLive: () => Qk === wQ && null !== dD && !Ek,
                    pI: QQ => {
                      Lk = QQ, zv()
                    },
                    onReconnected: QQ => {
                      ! function(QQ) {
                        const FQ = ED;
                        if (null !== FQ && FQ !== QQ) {
                          const wQ = nD.get(FQ);
                          void 0 !== wQ && nD.set(QQ, wQ), lk === FQ && (lk = QQ), FQ.detach()
                        }
                        mv(QQ)
                      }(QQ)
                    },
                    onGaveUp: (QQ, FQ) => {
                      ! function(QQ, FQ, wQ) {
                        var LQ, qQ;
                        console.warn(`${to} gave up reconnecting (${wQ.reason}, ${wQ.attempts} attempts)`, wQ.lastError), (0, Ww.reportReconnectGaveUp)(wQ, QD);
                        const oQ = null !== (LQ = null === (qQ = dD) || void 0 === qQ ? void 0 : qQ.rejoin) && void 0 !== LQ ? LQ : null;
                        jv(QQ, "gaveUp"), Hv();
                        const DQ = {
                          code: QQ.dropCode,
                          name: null,
                          reason: Io,
                          canReconnect: !FQ,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        pv(DQ, FQ ? null : oQ, !1, {
                          reasonKey: Uo,
                          canPlayAgain: FQ
                        })
                      }(wQ, QQ, FQ)
                    }
                  })
                };
                Qk = wQ, null !== Fk && Fk.conn === QQ.conn && wQ.resume.onInitialInfo(Fk)
              }(mQ, QQ.endpoint), performance.mark(Co), (0, xQ.m)("wasm_joined", bQ), setTimeout((() => {
                ED === mQ && (0, xQ.f)()
              }), 0), dk(), console.info(`${to} joined ${QQ.roomName} as ${mQ.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const MQ = Dk;
            Dk = null, null !== MQ && xv(YQ, MQ.mask, MQ.frames);
            const GQ = Yk.get(mQ.conn);
            return Yk.clear(), void 0 !== GQ && (mv(null), Gv(mQ.conn, GQ.code, GQ.reason)), mQ
          } finally {
            var MQ;
            null === qQ || void 0 === qQ || qQ.removeEventListener("abort", YQ), gD === HQ && vv(ED, null), (null === (MQ = kk) || void 0 === MQ ? void 0 : MQ.join) === HQ && (kk = null)
          }
        }(QQ.target, {
          signal: kQ,
          rejoin: qQ(QQ.target),
          early: mQ,
          pageReady: DQ
        });
        return bQ = !0, {
          kind: "joined",
          game: uQ
        }
      } catch (pQ) {
        if (pQ instanceof DOMException && "AbortError" === pQ.name || vQ()) return {
          kind: "wF"
        };
        if (Ek) return {
          kind: "stopped"
        };
        if (Hk && (Hk = !1, await oQ().catch((QQ => {
            console.warn(`${to} the cached traffic code could not be dropped`, QQ)
          }))), null === await LD) return {
          kind: "stopped"
        };
        if (pQ instanceof hQ.c) return wQ(pQ, performance.now() - YQ), {
          kind: "failed",
          error: pQ,
          reloading: !1
        };
        if (pQ instanceof TQ.e && pQ.code === LQ.d.wasmClientNotAllowed.code && Xk) return Ev("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: pQ,
          reloading: !0
        };
        const QQ = pQ instanceof TQ.e && pQ.code === LQ.d.outdatedVersion.code,
          FQ = () => null === ED,
          qQ = await lm({
            site: Ww.JOIN_SITE,
            error: pQ,
            outdated: QQ
          }, (() => {
            wQ(pQ, performance.now() - YQ)
          }), FQ);
        return {
          kind: "failed",
          error: pQ,
          reloading: qQ
        }
      } finally {
        var GQ;
        bQ || HQ.end(), BL.d.releaseHold(uQ);
        const QQ = null === (GQ = mQ) || void 0 === GQ ? void 0 : GQ.release();
        QQ && (0, Ww.reportUnusedSeat)(QQ, QD)
      }
    }

    function Lv(QQ, FQ) {
      return QQ.stack = FQ.stack, QQ
    }

    function qv(QQ) {
      return QQ.session ? (0, SQ.r)(Bo, QQ.session.gameNameWithVariation) : Promise.resolve()
    }

    function ov(QQ, FQ) {
      return (0, cF.n)(FQ), new Promise(((wQ, LQ) => {
        const qQ = () => {
          LQ((0, cF.e)(FQ))
        };
        FQ.addEventListener("abort", qQ, {
          once: !0
        }), QQ.then((QQ => {
          FQ.removeEventListener("abort", qQ), wQ(QQ)
        }), (QQ => {
          FQ.removeEventListener("abort", qQ), LQ(QQ)
        }))
      }))
    }

    function Dv() {
      kv(null)
    }

    function kv(QQ) {
      var FQ, wQ, LQ;
      (function() {
        const QQ = Qk;
        null !== QQ && jv(QQ, "left")
      }(), null === kD || kD.left) || (kD.left = !0, null === (LQ = (0, SQ.k)()) || void 0 === LQ || LQ.socketLeft(), (0, bQ.s)({
        websocketUrl: null
      }));
      gD && (0, cF.h)(gD, new DOMException("the join was left", "AbortError")), Hv(null !== QQ), null === (FQ = RD) || void 0 === FQ || FQ.leave();
      const qQ = ED;
      null !== QQ && BL.d.setGame(QQ.game), vv(null, null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.controller) && void 0 !== wQ ? wQ : null), null === qQ || void 0 === qQ || qQ.leave(), uv(0), (0, eF.e)()
    }

    function vv(QQ, FQ) {
      ED = QQ, gD = FQ, null === ED && null === gD && BL.d.setGame(void 0)
    }

    function mv(QQ) {
      vv(QQ, gD)
    }

    function uv(QQ) {
      const FQ = go;
      return null !== ao && !Ek && null !== FQ && !FQ.isStopped && (!!ao(TQ.l, 0, (0, TQ.A)(QQ)) && (jD = !0, 0 === QQ || KD || Ym(FQ, !1, "all"), !0))
    }

    function Hv() {
      var QQ, FQ;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, pw.e)();
      const wQ = null !== (QQ = null === (FQ = dD) || void 0 === FQ ? void 0 : FQ.overflow) && void 0 !== QQ ? QQ : null;
      dD = null, null !== wQ && (0, Ww.reportEventOverflow)(wQ, QD)
    }

    function bv() {
      null !== ED || null !== gD ? Dv() : rv()
    }

    function Yv(QQ, FQ) {
      console.warn(`${to} the event buffer refused records in ${FQ} frames (categories ${QQ})`), Ek || (null !== dD ? xv(dD, QQ, FQ) : null !== gD && function(QQ, FQ, wQ) {
        var LQ;
        const qQ = function(QQ, FQ) {
          return null === QQ ? "drop" : QQ.activated ? "keep" : 0 !== (FQ & fF.r.NetSession) ? "fail" : "drop"
        }((null === (LQ = kk) || void 0 === LQ ? void 0 : LQ.join) === QQ ? kk : null, FQ);
        "keep" === qQ ? Dk = {
          mask: FQ,
          frames: wQ
        } : "fail" === qQ && (0, cF.h)(QQ, new Error("the join's net session was lost to an event overflow"))
      }(gD, QQ, FQ))
    }

    function xv(QQ, FQ, wQ) {
      const LQ = QQ.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      LQ.frames += wQ, LQ.acks++, LQ.mask |= FQ;
      const qQ = function(QQ, FQ, wQ) {
        if (0 === (QQ & fF.r.NetSession)) return "none";
        const LQ = null !== FQ.rejoinedAt && wQ - FQ.rejoinedAt < pL;
        return null === FQ.rejoin || LQ ? "fail" : "rejoin"
      }(FQ, QQ, performance.now());
      "none" !== qQ && queueMicrotask((() => {
        if (dD !== QQ) return;
        const FQ = "rejoin" === qQ && performance.now() - vk >= NQ.e;
        LQ.outcome = FQ ? "rejoined" : "failed", pv(function(QQ, FQ) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: QQ,
            automaticallyReconnect: FQ,
            requiresRefresh: !1
          }
        }(null !== QQ.rejoin, FQ), QQ.rejoin, FQ), Dv(), FQ && (qk = performance.now())
      }))
    }

    function Av(QQ) {
      fk = QQ, Vk && tv(Vk, QQ)
    }

    function tv(QQ, FQ) {
      QQ.style.visibility = FQ ? "visible" : "hidden"
    }

    function ev(QQ) {
      var FQ;
      const wQ = QQ.roomName,
        LQ = null !== (FQ = QQ.joinOptions.lobbyName) && void 0 !== FQ ? FQ : null;
      return () => {
        Fv(wQ, LQ)
      }
    }

    function Mv() {
      return wQ.e(343).then((() => wQ(42707))).then((QQ => {
        let {
          invalidateGuestTrafficCode: FQ
        } = QQ;
        return FQ()
      })).catch((QQ => {
        console.warn(`${to} the cached traffic code could not be dropped`, QQ)
      }))
    }

    function Gv(QQ, FQ, wQ) {
      var qQ, oQ;
      let DQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Ek) return;
      if ((null === (qQ = dD) || void 0 === qQ ? void 0 : qQ.conn) !== QQ) return void(null !== gD && Yk.set(QQ, {
        code: FQ,
        reason: wQ
      }));
      const {
        rejoin: kQ,
        game: vQ,
        joinedAt: mQ
      } = dD;
      Hv(), lv();
      const uQ = (0, NQ.j)(FQ, (0, CL.c)(QQ));
      if (console.info(`${to} the game's connection closed with code ${FQ} (${null!==(oQ=uQ.name)&&void 0!==oQ?oQ:"unrecognised"})`), FQ === LQ.d.gameOrPluginKick.code || DQ || (0, Ww.reportDisconnect)(uQ, QD, {
          closeReason: wQ,
          sinceJoinedMs: performance.now() - mQ,
          game: vQ
        }), uQ.requiresRefresh) {
        const QQ = "outdatedVersion" === uQ.name,
          wQ = new Error(`the game's connection closed with code ${FQ}`),
          LQ = () => null === dD && null === gD;
        return void lm({
          site: Ww.JOIN_SITE,
          error: wQ,
          outdated: QQ
        }, (() => {
          LQ() && pv(uQ, null, !1)
        }), LQ)
      }
      const HQ = uQ.canReconnect ? kQ : null,
        bQ = null !== HQ && uQ.automaticallyReconnect && performance.now() - vk >= NQ.e;
      pv(uQ, HQ, bQ)
    }

    function pv(QQ, FQ, wQ) {
      var LQ;
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (hk) return;
      BL.d.unwantedLeave(wQ && null !== FQ && 0 === uk.size), null === (LQ = mk) || void 0 === LQ || LQ.abort();
      const oQ = new AbortController;
      mk = oQ;
      const DQ = null === FQ ? null : () => {
        oQ.signal.aborted || (oQ.abort(), FQ())
      };
      if (wQ && null !== DQ) {
        vk = performance.now();
        const QQ = setTimeout(DQ, NQ.d);
        oQ.signal.addEventListener("abort", (() => {
          clearTimeout(QQ)
        }))
      }
      const kQ = {
        code: QQ.code,
        name: QQ.name,
        reason: QQ.reason,
        reasonKey: qQ.reasonKey,
        reconnect: DQ,
        reconnecting: wQ,
        requiresRefresh: QQ.requiresRefresh,
        canPlayAgain: qQ.canPlayAgain
      };
      if (uk.size > 0)
        for (const mQ of [...uk]) try {
          mQ(kQ)
        } catch (vQ) {
          console.error(`${to} an unwanted-leave listener threw`, vQ)
        } else eL((0, xL.k)(QQ, null !== DQ, wQ), oQ.signal).then((FQ => {
          FQ && (null !== DQ ? DQ() : QQ.requiresRefresh && (0, JQ.i)())
        }))
    }
    const cv = {
      attachSocket: QQ => sv(QQ),
      onConnection: QQ => (xk.add(QQ), () => {
        xk.delete(QQ)
      }),
      sendRaw: (QQ, FQ) => {
        const wQ = kD;
        return null !== wQ && wQ.conn === QQ && Sm(wQ, FQ)
      },
      leaveRoom: uv,
      closeSocket: QQ => {
        var FQ;
        (null === (FQ = kD) || void 0 === FQ ? void 0 : FQ.conn) === QQ && rv()
      },
      flushNet: Iv
    };

    function Cv(QQ) {
      var FQ;
      let {
        aux: wQ,
        payload: LQ
      } = QQ;
      null === (FQ = go) || void 0 === FQ || FQ.queueOptions(wQ, LQ)
    }

    function Sv(QQ, FQ) {
      Cv(function(QQ, FQ) {
        return uq = QQ ? {
          preventMovement: FQ
        } : null, QQ ? Hq(FQ) : {
          aux: XF.Ob.AdEnd,
          payload: mq
        }
      }(QQ, FQ))
    }

    function iv(QQ) {
      var FQ;
      VD = QQ, null === (FQ = go) || void 0 === FQ || FQ.setUiPrefs(QQ)
    }

    function Wv(QQ, FQ) {
      Bo.setMaster(QQ, FQ)
    }

    function Rv(QQ) {
      var FQ;
      hD = QQ, null === (FQ = go) || void 0 === FQ || FQ.setEnvPrefs(QQ)
    }

    function Ov(QQ) {
      var FQ;
      JD = QQ, null === (FQ = go) || void 0 === FQ || FQ.setLookPrefs(QQ)
    }

    function sv(QQ) {
      var FQ;
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(QQ.url).origin,
        LQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (QQ.readyState === WebSocket.CLOSING || QQ.readyState === WebSocket.CLOSED) return console.warn(`${to} a closing or closed socket can't be attached`), null;
      const qQ = go;
      if (!qQ || qQ.isStopped) return console.warn(`${to} no core is running to attach a socket to`), QQ.close(), null;
      if (null === (0, SQ.k)()) return console.warn(`${to} the game has not started to attach a socket to`), QQ.close(), null;
      if (UD > XF.q) return console.warn(`${to} this core has attached all the sockets it can; reload to play on`), QQ.close(), null;
      if (jD && !KD && (Ym(qQ, !1, "all"), qQ.isStopped || Ek)) return QQ.close(), null;
      rv();
      const oQ = UD++;
      if (!Vv(qQ, "open", oQ, LQ ? XF.Lb.Resume : 0)) return QQ.close(), null;
      LQ || tF.b.reset(), kk = null === gD ? null : {
        join: gD,
        conn: oQ,
        activated: !1
      }, QQ.binaryType = "arraybuffer";
      const DQ = new bw.b((() => {
          ! function(QQ, FQ) {
            if (kD !== FQ || QQ.isStopped || null === Tv(FQ, so)) return;
            FQ.detach(), kD = null, Nv(QQ, FQ, so, "", !0), FQ.ws.close()
          }(qQ, kQ)
        })),
        kQ = {
          ws: QQ,
          conn: oQ,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: LQ,
          token: null,
          detach: () => {
            DQ.dispose(), QQ.removeEventListener("message", vQ), QQ.removeEventListener("open", mQ), QQ.removeEventListener("close", uQ)
          }
        },
        vQ = QQ => {
          if (QQ.data instanceof ArrayBuffer) {
            var FQ;
            const wQ = new Uint8Array(QQ.data);
            DQ.heard(), kQ.token = null !== (FQ = (0, Yw.e)(wQ)) && void 0 !== FQ ? FQ : kQ.token,
              function(QQ, FQ, wQ) {
                Nm(QQ, (() => {
                  QQ.rings.net.writeFrame(FQ, wQ) || QQ.crash(Fw.s, `a socket frame of ${wQ.byteLength} bytes did not fit the net-in ring`)
                }));
                const LQ = QQ.rings.net.cursor >= Ro;
                (LQ || QQ.netWrittenSinceFrame >= Wo || document.hidden && performance.now() - ND >= Ko) && Ym(QQ, !1, "budget")
              }(qQ, oQ, wQ)
          }
        },
        mQ = () => {
          LQ || (0, xQ.m)("wasm_socket_open", performance.now());
          for (const FQ of kQ.pending.splice(0)) QQ.send(FQ);
          kQ.pendingBytes = 0
        },
        uQ = QQ => {
          if (kD === kQ && qQ.rings.net.cursor > 0 && Ym(qQ, !1, "all"), kD === kQ) {
            if (kQ.detach(), kD = null, Nv(qQ, kQ, QQ.code, QQ.reason) || Uv(qQ, kQ)) return;
            Vv(qQ, "close", oQ), Kv(oQ, kQ.left), Gv(oQ, QQ.code, QQ.reason)
          }
        };
      return QQ.addEventListener("message", vQ), QQ.addEventListener("open", mQ), QQ.addEventListener("close", uQ), kD = kQ, null === (FQ = (0, SQ.k)()) || void 0 === FQ || FQ.socketAttached(oQ), (0, bQ.s)({
        websocketUrl: wQ
      }), oQ
    }

    function rv() {
      const QQ = kD;
      if (!QQ) return;
      const FQ = go,
        wQ = QQ.resume;
      wQ && (Iv(), kD !== QQ) || (kD = null, QQ.detach(), QQ.ws.close(), null !== FQ && (Uv(FQ, QQ) || wQ && Nv(FQ, QQ, ro)) || (null !== FQ && Vv(FQ, "close", QQ.conn), Kv(QQ.conn, QQ.left)))
    }

    function Iv() {
      const QQ = go;
      null !== QQ && !QQ.isStopped && !Ek && !KD && QQ.rings.net.cursor > 0 && Ym(QQ, !1, "all")
    }

    function Uv(QQ, FQ) {
      var wQ;
      if (!FQ.resume) return !1;
      const LQ = Qk;
      return null !== LQ && null !== FQ.token && "" !== FQ.token && (LQ.pendingHold = {
        conn: FQ.conn,
        token: `${LQ.roomId}:${FQ.token}`
      }), Vv(QQ, "close", FQ.conn), null === (wQ = (0, SQ.k)()) || void 0 === wQ || wQ.socketDetached(FQ.conn), !0
    }

    function Nv(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const oQ = Tv(FQ, wQ);
      if (null === oQ) return !1;
      const {
        ym: DQ,
        token: kQ,
        game: vQ,
        joinedAt: mQ
      } = oQ;
      if (!Vv(QQ, "close", FQ.conn, XF.v.Held)) return !0;
      console.warn(`${to} the game's connection ${qQ?"went silent":`dropped with code ${wQ}`}, holding it`);
      const uQ = {
        closeReason: LQ,
        sinceJoinedMs: performance.now() - mQ,
        game: vQ
      };
      return (0, Ww.reportDisconnect)((0, NQ.j)(wQ), QD, uQ, qQ ? "silent" : void 0), DQ.heldConn = FQ.conn, DQ.dropCode = wQ, DQ.pendingHold = {
        conn: FQ.conn,
        token: `${DQ.roomId}:${kQ}`
      }, KD || Ym(QQ, !1, "all"), !0
    }

    function Tv(QQ, FQ) {
      const wQ = Qk,
        qQ = dD,
        oQ = QQ.token;
      return null === wQ || null === qQ || Ek || QQ.left || qQ.conn !== QQ.conn || null === oQ || "" === oQ ? null : (0, LQ.i)(FQ) && wQ.resume.canHoldSeat() ? {
        ym: wQ,
        token: oQ,
        game: qQ.game,
        joinedAt: qQ.joinedAt
      } : null
    }

    function Kv(QQ, FQ) {
      var wQ;
      null === (wQ = (0, SQ.k)()) || void 0 === wQ || wQ.closeGame(QQ), (0, vq.c)().close(QQ), FQ || (0, bQ.s)({
        websocketUrl: null
      })
    }

    function zv() {
      const QQ = Lk;
      if (null === QQ) return;
      const FQ = (0, SQ.k)();
      Ek || null === FQ || FQ.pI(QQ) ? Lk = null : performance.now() - aD.pause >= To && (aD.pause = performance.now(), console.warn(`${to} the cmd ring had no room for SetPaused(${QQ}): written before the next frame`))
    }

    function lv() {
      const QQ = Qk;
      Qk = null, null === QQ || void 0 === QQ || QQ.resume.dispose()
    }

    function jv(QQ, FQ) {
      var wQ, LQ;
      const {
        heldConn: qQ
      } = QQ, oQ = QQ.resume.resumingConn;
      QQ.heldConn = 0, QQ.pendingHold = null, Qk === QQ && (Qk = null), "left" === FQ ? QQ.resume.leave() : QQ.resume.dispose(), 0 === wk || (null === (wQ = kD) || void 0 === wQ ? void 0 : wQ.conn) !== wk || "left" === FQ && (null === (LQ = ED) || void 0 === LQ ? void 0 : LQ.conn) === wk || fv(wk), "gaveUp" === FQ && 0 !== oQ && fv(oQ), 0 !== qQ && "refused" !== FQ && (console.info(`${to} the game held through its drop ${"left"===FQ?"was left":"is given up"}`), null === go || go.isStopped || Vv(go, "close", qQ), Kv(qQ, !1))
    }

    function av(QQ, FQ) {
      const wQ = FQ.indexOf(":");
      return {
        roomId: wQ < 0 ? QQ.roomId : FQ.slice(0, wQ),
        roomToken: FQ.slice(wQ + 1)
      }
    }

    function Xv(QQ) {
      var FQ;
      Fk = QQ, QQ.conn === wk && (wk = 0);
      const wQ = Qk;
      null !== wQ && (null === (FQ = dD) || void 0 === FQ ? void 0 : FQ.conn) === QQ.conn && wQ.resume.onInitialInfo(QQ)
    }

    function fv(QQ) {
      var FQ;
      const wQ = kD;
      (null === wQ || void 0 === wQ ? void 0 : wQ.conn) === QQ && (wQ.left = !0, null === (FQ = (0, SQ.k)()) || void 0 === FQ || FQ.socketLeft(), (0, bQ.s)({
        websocketUrl: null
      }), uv(QQ) ? setTimeout((() => {
        kD === wQ && rv()
      }), TQ.i) : rv())
    }

    function Vv(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = !1;
      return Nm(QQ, (() => {
        const {
          net: oQ
        } = QQ.rings;
        qQ = "open" === FQ ? oQ.writeOpen(wQ, LQ) : oQ.writeClose(wQ, LQ), qQ || QQ.crash(Fw.s, `a socket ${FQ} did not fit the net-in ring`)
      })), qQ
    }

    function hv(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (Jv()) {
        const LQ = "browser" === QQ && (0, kq.R)() ? "blockedAfterLoss" : "unsupported";
        return (0, Ww.reportUnsupportedFallback)(QQ, LQ, FQ, wQ), void Ev(`the wasm client can't run here (${FQ}; ${LQ})`, LQ)
      }(0, Ww.showUnsupported)(QQ, "unsupported", FQ, wQ)
    }

    function Jv() {
      return Xk && "wasm" !== (0, YF.e)(window.location.search)
    }

    function Ev(QQ, FQ) {
      console.warn(`${to} ${QQ}: reloading on the JS client`), null !== FQ && (0, YF.r)(FQ), (0, YF.n)(null === FQ ? "reloadOntoJs" : "decline");
      const wQ = () => {
        (0, JQ.g)(YF.u)
      };
      (0, Ww.flushCrashReports)(JQ.c).then(wQ, wQ)
    }

    function nv(QQ, FQ, wQ, LQ) {
      return Mk(QQ, FQ, wQ, LQ)
    }

    function gv() {
      null === ck || null === go || go.isStopped || Ek || null !== CD || null === ao || (CD = ck(ao, yv, Bv().follow))
    }

    function Pv() {
      var QQ, FQ, wQ;
      return null !== (QQ = null === (FQ = Zo) || void 0 === FQ || null === (wQ = FQ.textures) || void 0 === wQ ? void 0 : wQ.files()) && void 0 !== QQ ? QQ : null
    }

    function Zv(QQ) {
      Bv().follow((FQ => {
        null !== FQ && Promise.all([Promise.all([wQ.e(194), wQ.e(45)]).then((() => wQ(42759))), (0, kq.M)()]).then((QQ => {
          let [{
            followPagePackFiles: wQ
          }, LQ] = QQ;
          const qQ = null === LQ || (0, Qw.p)(LQ) ? "webgl" : LQ.backend;
          wQ(FQ, yL.e, qQ, (QQ => {
            yL.e.setPageFiles(QQ)
          }), yv)
        }), (FQ => {
          console.warn(`${to} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, FQ), QQ()
        }))
      }))
    }

    function yv(QQ, FQ) {
      console.warn(`${to} ${QQ}`, FQ)
    }

    function Bv() {
      return Po ??= new Sq({
        load: QQ => Promise.all([wQ.e(194), wQ.e(52)]).then((() => wQ(42765))).then((FQ => {
          let {
            startPageTexturePackFeed: wQ
          } = FQ;
          return wQ(yv, QQ)
        })),
        store: iw.h,
        hY: QQ => {
          LD.then((() => {
            (0, Ww.reportTexturePackFeedLoadFailure)(QQ, QD)
          }))
        }
      }), Po
    }
    const dv = QQ => Bv().follow(QQ);

    function Qm() {
      return Bv().loaded()
    }
    const Fm = function(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          qQ = 0;
        return async function(oQ, DQ) {
          let kQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const vQ = ++qQ,
            mQ = LQ() + FQ,
            uQ = await
          function(QQ, FQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((LQ => {
              const qQ = setTimeout((() => {
                LQ(null), QQ.then((QQ => {
                  null !== QQ && (QQ.joinedWithout(), wQ(QQ))
                }))
              }), FQ);
              QQ.then((QQ => {
                clearTimeout(qQ), LQ(QQ)
              }))
            }))
          }(QQ(oQ), FQ, (QQ => {
            vQ === qQ && kQ() && DQ(QQ, LQ() + FQ).catch((QQ => {
              wQ("the texture pack step after the join failed", QQ)
            }))
          }));
          return null === uQ ? null : DQ(uQ, mQ)
        }
      }((QQ => (0, LF.f)(QQ) ? Bv().request() : Bv().forJoin()), Cq.e, yv),
      wm = function(QQ, FQ) {
        let wQ = !1;
        return {
          setGamePackConfirm: QQ => {
            wQ = null !== QQ, FQ(QQ)
          },
          packStep: (FQ, LQ, qQ) => QQ(FQ, LQ, (() => wQ && qQ()))
        }
      }(Fm, (QQ => {
        Bv().setGamePackConfirm(QQ)
      }));

    function Lm(QQ) {
      wm.setGamePackConfirm(QQ)
    }

    function qm() {
      if (Ek || null !== Rk || null === Ck || null === Wk) return;
      const {
        backend: QQ,
        canvas: FQ,
        fallbackReason: wQ,
        adapterVendor: LQ
      } = Wk, qQ = Ck;
      Ck = null;
      try {
        Rk = qQ({
          backend: QQ,
          canvas: FQ,
          fallbackReason: wQ,
          adapterVendor: LQ,
          joinedGame: () => Ek ? null : ED,
          inGame: Dm,
          shaderPackReach: () => {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = RD) || void 0 === FQ ? void 0 : FQ.reachInJoinedGame()) && void 0 !== QQ ? QQ : null
          },
          msaa: () => ik > 1,
          writeCmd: (QQ, FQ, wQ) => null !== ao && ao(QQ, FQ, wQ),
          takeFailedMeshJobs: () => {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = HD) || void 0 === FQ ? void 0 : FQ.takeFailedMeshJobs()) && void 0 !== QQ ? QQ : 0
          },
          readLoadCounts: QQ => {
            var FQ, wQ;
            return null !== (FQ = null === (wQ = go) || void 0 === wQ ? void 0 : wQ.readLoadCounts(QQ)) && void 0 !== FQ && FQ
          },
          mainStalled: (QQ, FQ) => {
            (0, Ww.reportMainStall)(QQ, FQ, QD)
          }
        })
      } catch (oQ) {
        console.error(`${to} the frame telemetry didn't start`, oQ)
      }
    }

    function om(QQ, FQ) {
      try {
        var wQ, LQ, qQ;
        const oQ = Ak && null !== (wQ = null === (LQ = go) || void 0 === LQ || null === (qQ = LQ.lastHeader) || void 0 === qQ ? void 0 : qQ.renderPending) && void 0 !== wQ ? wQ : 0;
        (0, Pw.d)(FQ, QQ, Dm() && !(null !== uq), oQ)
      } catch (oQ) {
        (0, Pw.o)(), console.error(`${to} the quality steps stopped`, oQ)
      }
    }

    function Dm() {
      return null !== ED && lk === ED && !Ek
    }

    function km(QQ) {
      const FQ = Rk;
      Rk = null;
      try {
        null === FQ || void 0 === FQ || FQ.stop()
      } catch {}
      console.error(`${to} the frame telemetry threw: it stops`, QQ)
    }

    function mm(QQ) {
      var FQ, wQ, LQ, qQ;
      if ((0, vq.c)().fire(QQ), "message" === QQ.type) {
        if (zD++, QQ.Om === XF.vc.ERROR && null !== gD) {
          var oQ;
          const {
            text: FQ,
            dropsCache: wQ
          } = (0, NQ.p)((new TextDecoder).decode(QQ.payload));
          Hk ||= wQ, (null === (oQ = kk) || void 0 === oQ ? void 0 : oQ.conn) === QQ.conn && (bk = FQ)
        } else if (QQ.Om === fF.rc.ResumeComplete) {
          var DQ;
          null === (DQ = Qk) || void 0 === DQ || DQ.resume.onResumeComplete(QQ.conn)
        }
        return
      }
      QQ.phase === XF.z.Left ? lD = QQ.conn : QQ.phase === XF.z.Activated && (null === (FQ = kk) || void 0 === FQ ? void 0 : FQ.conn) === QQ.conn ? kk.activated = !0 : QQ.phase === XF.z.Resumed ? function(QQ) {
        var FQ, wQ;
        wk = QQ;
        const LQ = Qk;
        if (null === LQ || 0 === LQ.heldConn || (null === (FQ = kD) || void 0 === FQ ? void 0 : FQ.conn) !== QQ || !kD.resume || null === dD) return;
        console.info(`${to} the game resumed on conn ${QQ}, waiting for its InitialInfo`);
        const qQ = LQ.heldConn;
        LQ.heldConn = 0, kD.resume = !1, dD.conn = QQ, (null === (wQ = yD) || void 0 === wQ ? void 0 : wQ.conn) === qQ && (yD = {
          conn: QQ,
          info: yD.info
        }), tF.b.apply({
          shopInfo: null,
          _shopVersion: qF.c
        })
      }(QQ.conn) : QQ.phase === XF.z.Held ? function(QQ) {
        var FQ;
        const wQ = Qk,
          LQ = null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.pendingHold) && void 0 !== FQ ? FQ : null;
        if (null !== wQ && null !== LQ && LQ.conn === QQ) return wQ.pendingHold = null, wQ.heldConn = QQ, wk = 0, console.warn(`${to} the core holds the game, reconnecting`), void wQ.resume.onDropped(LQ.token);
        if (QQ === wk) {
          wk = 0;
          const FQ = go;
          null === FQ || FQ.isStopped || (console.info(`${to} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Vv(FQ, "close", QQ))
        }
      }(QQ.conn) : QQ.phase === XF.z.Closed && (null === (wQ = Qk) || void 0 === wQ || null === (LQ = wQ.pendingHold) || void 0 === LQ ? void 0 : LQ.conn) === QQ.conn && (Qk.heldConn === QQ.conn ? function(QQ) {
        const FQ = QQ.heldConn,
          wQ = QQ.dropCode;
        jv(QQ, "refused"), console.info(`${to} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          Kv(FQ, !1), Gv(FQ, wQ, "", !0)
        }))
      }(Qk) : Qk.pendingHold = null);
      const kQ = Object.keys(XF.z).find((FQ => XF.z[FQ] === QQ.phase)),
        vQ = 0 === QQ.code ? "" : ` (code ${QQ.code})`;
      console.info(`${to} conn ${QQ.conn}: ${null!==kQ&&void 0!==kQ?kQ:QQ.phase}${vQ}, ${zD} raw messages so far`), (null === (qQ = ED) || void 0 === qQ ? void 0 : qQ.conn) !== QQ.conn || QQ.phase !== XF.z.Left && QQ.phase !== XF.z.Closed || mv(null), ZD !== QQ.conn || QQ.phase !== XF.z.Left && QQ.phase !== XF.z.Closed || (ZD = null, null === ED && null === gD && BL.d.setGame(void 0));
      for (const uQ of [...xk]) try {
        uQ(QQ.conn, QQ.phase, QQ.code)
      } catch (mQ) {
        (0, VF.o)(mQ, `${to} a connection listener threw`)
      }
    }

    function um() {
      (0, kq.p)(), queueMicrotask((() => {
        try {
          im()
        } catch (QQ) {
          console.warn(`${to} stopping before the reload threw`, QQ)
        }(0, Ww.flushCrashReports)(JQ.c).then(JQ.i, JQ.i)
      }))
    }

    function Hm() {
      const QQ = go;
      null === QQ || QQ.isStopped || null === kD || KD || !QQ.hasPendingCommands() || Ym(QQ, !1, "budget")
    }

    function bm(QQ) {
      var FQ;
      const wQ = ED;
      QQ.persisted || null === wQ || (null === (FQ = kD) || void 0 === FQ ? void 0 : FQ.conn) !== wQ.conn || kD.left || wQ.leave()
    }

    function Ym(QQ, FQ, LQ) {
      let qQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const oQ = KD;
      KD = !0;
      try {
        return function(QQ, FQ, LQ, qQ) {
          var oQ, DQ, kQ, vQ;
          if (Ek) return !1;
          if (Nm(QQ, Am), Ek || QQ.isStopped) return !1;
          cm() && rD("modelsIn");
          zv(), ND = performance.now(), lD = null, jD = !1, (0, CQ.I)(), null === (oQ = eD) || void 0 === oQ || oQ.beforeFrame(), mL(ND, QQ), (0, CQ.B)(ND, tm), TD = !0;
          const mQ = FQ && pm();
          let uQ;
          try {
            uQ = QQ.frame(ND, mQ, LQ)
          } finally {
            TD = !1
          }
          if (!uQ) return !1;
          Sk.observe(null !== (DQ = null === (kQ = QQ.lastHeader) || void 0 === kQ ? void 0 : kQ.chunksCancelled) && void 0 !== DQ ? DQ : 0);
          const HQ = QQ.lastFrameKind,
            bQ = (0, sF.c)(HQ);
          (function(QQ) {
            null !== aq && aq.afterFrame(performance.now(), QQ)
          })(bQ), null === (vQ = Ok) || void 0 === vQ || vQ.frame(QQ, ND, HQ), FQ && (jk = bQ);
          bQ && (0, WF.b)(ND);
          if (null !== Rk) try {
            Rk.frameRan(QQ, ND, performance.now(), HQ)
          } catch (AQ) {
            km(AQ)
          }
          "drawn" === HQ && Gm() && function() {
            for (const QQ of [...oq]) QQ()
          }();
          QQ.forEachNetOut(Cm);
          const YQ = kD;
          null !== lD && (null === YQ || void 0 === YQ ? void 0 : YQ.conn) === lD && Sm(YQ, TQ.m);
          (function(QQ) {
            var FQ;
            if (Ik) return;
            null === Tk && pm() && (Tk = performance.now());
            if (null === gD && null === ED) return;
            null === Tk || Kk || (Kk = !0, (0, xQ.m)("wasm_startup_loaded", Tk));
            let wQ = 0;
            null !== ED ? wQ = -1 : !0 === (null === (FQ = kk) || void 0 === FQ ? void 0 : FQ.activated) && (wQ = ~fF.U.TerrainDrawn);
            const LQ = QQ.headerWord(fF.F.LoadSteps) & wQ & ~Nk;
            if (0 === LQ) return;
            Nk |= LQ;
            const qQ = performance.now();
            for (const [oQ, DQ] of Object.entries(Mm)) 0 !== (LQ & fF.U[oQ]) && (0, xQ.m)(DQ, qQ)
          })(QQ), FQ && function(QQ) {
            var FQ, LQ, qQ;
            if (null === ED || !pm()) return;
            null === zk || lk === ED && !zk.frame(ND, 0 !== (QQ.headerWord(fF.F.LoadSteps) & fF.U.TerrainDrawn)) || (zk = null);
            const oQ = QQ.lastHeader,
              DQ = !Ak || 0 === (null === oQ || void 0 === oQ ? void 0 : oQ.renderPending);
            !Uk && DQ && (Uk = !0, performance.mark(io));
            if (lk === ED) return;
            const kQ = null !== (FQ = null === oQ || void 0 === oQ ? void 0 : oQ.firstView) && void 0 !== FQ ? FQ : XF.Q.NotYet;
            if (Ak && kQ === XF.Q.NotYet) return;
            if (Ik && (!0 !== (null === (LQ = (0, SQ.k)()) || void 0 === LQ ? void 0 : LQ.isSessionLive) || !DQ)) return;
            lk = ED;
            const vQ = ED;
            if (setTimeout((() => {
                ED === vQ && (0, xQ.i)()
              }), 0), null === (qQ = RD) || void 0 === qQ || qQ.playable(), function() {
                clearTimeout(DD), DD = setTimeout((() => {
                  Dm() && zm((QQ => {
                    let {
                      prefetchWorldgenWorker: FQ
                    } = QQ;
                    FQ()
                  }))
                }), jo)
              }(), Ik) return;
            Ik = !0, performance.mark(So), (0, Uq.o)("render") && Promise.all([wQ.e(75), wQ.e(47)]).then((() => wQ(4533))).then((QQ => {
              let {
                renderDebugPlayable: FQ
              } = QQ;
              FQ()
            }), (QQ => {
              console.warn("The render debug topic didn't load", QQ)
            }));
            const mQ = Math.round(performance.now());
            if (Ak && kQ !== XF.Q.Drawn) {
              const FQ = kQ === XF.Q.HeldBackstop ? "held_draws" : "long",
                {
                  cause: wQ
                } = em(QQ);
              if (console.warn(`${to} playable at ${mQ} ms on the first view's ${FQ} backstop, ${wQ}: it wasn't drawn whole in time`), (0, xQ.m)("wasm_view_backstop", mQ, `${FQ}:${wQ}`), "long" === FQ) {
                var uQ, HQ;
                const FQ = null !== (uQ = null === (HQ = dD) || void 0 === HQ ? void 0 : HQ.game) && void 0 !== uQ ? uQ : "";
                zk = new Rw.d((() => {
                  const {
                    cause: wQ,
                    census: LQ
                  } = em(QQ);
                  (0, Ww.reportFirstViewNoTerrain)(FQ, wQ, LQ, QD), (0, bF.s)("noTerrain")
                }))
              }
            } else console.info(`${to} playable at ${mQ} ms${Ak?"":" (no renderer)"}`);
            setTimeout(pk, 0), (0, MF.h)().catch((QQ => {
              console.error(`${to} item sprites didn't load, so item particles show the missing texture`, QQ)
            })), VL.c.warm()
          }(QQ);
          (0, Fw.N)(QQ, {
            worldgen: mD,
            mesh: HD
          }),
          function(QQ) {
            QQ.forEachEvent(HL);
            for (const FQ of uL) try {
              (0, qL.e)(FQ)
            } catch (AQ) {
              if ((0, VF.f)(AQ)) {
                QQ.crashOn(Fw.m, AQ);
                break
              }
              console.error(`${DL} an input action listener threw`, AQ)
            }
            uL.length = 0
          }(QQ), qQ && (0, OF.d)();
          return !QQ.isStopped
        }(QQ, FQ, "all" === LQ || QQ.rings.net.cursor >= Ro || QQ.netKeptFrames >= Oo, qQ)
      } finally {
        KD = oQ
      }
    }

    function xm(QQ) {
      console.error(`${to} a frame-start listener threw`, QQ)
    }

    function Am() {
      var QQ, FQ, wQ, LQ;
      null === (QQ = GD) || void 0 === QQ || QQ.drain(ao, Xo), null === (FQ = SD) || void 0 === FQ || FQ.drain(ao), null === (wQ = iD) || void 0 === wQ || wQ.drain(performance.now()), Gk(ao), null === (LQ = CD) || void 0 === LQ || LQ.drain()
    }

    function tm(QQ) {
      console.error(`${to} a before-frame listener threw`, QQ)
    }

    function em(QQ) {
      const FQ = (0, SQ.k)(),
        wQ = (0, SQ.u)(),
        LQ = null === FQ || null === wQ ? null : wQ.readDrawCensus(FQ.api);
      return {
        cause: (0, Rw.g)(QQ.headerWord(fF.F.LoadSteps), LQ),
        census: LQ
      }
    }
    const Mm = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Gm() {
      return Ak && pm()
    }

    function pm() {
      return WD && cm()
    }

    function cm() {
      return null === GD || GD.startupDone
    }

    function Cm(QQ, FQ) {
      const wQ = kD;
      (null === wQ || void 0 === wQ ? void 0 : wQ.conn) === QQ ? Sm(wQ, FQ) : fD++
    }

    function Sm(QQ, FQ) {
      const {
        ws: wQ
      } = QQ;
      return wQ.readyState === WebSocket.OPEN ? (wQ.send(FQ), !0) : wQ.readyState === WebSocket.CONNECTING && QQ.pendingBytes + FQ.byteLength <= No ? (QQ.pending.push(FQ.slice()), QQ.pendingBytes += FQ.byteLength, !0) : (fD++, !1)
    }

    function im() {
      var QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ;
      Ek = !0, ak.stop(), (0, Tq.b)(), aq = null, lv(), (0, CQ.H)().unlockPointer(), (0, CQ.F)(null), null === (QQ = MD) || void 0 === QQ || QQ(), MD = null, null === (FQ = (0, SQ.u)()) || void 0 === FQ || FQ.followCursorAim(null), (0, OF.z)(), (0, SQ.h)(), Bo.stop(), null === (wQ = sk) || void 0 === wQ || wQ(), sk = null, null === (LQ = rk) || void 0 === LQ || LQ(), rk = null, null === (qQ = Rk) || void 0 === qQ || qQ.stop(), Rk = null, (0, sw.p)(null), null === (oQ = vD) || void 0 === oQ || oQ(), vD = null, null === (DQ = mD) || void 0 === DQ || DQ.stop(), mD = null, null === (kQ = HD) || void 0 === kQ || kQ.stop(), HD = null, null !== (vQ = Zo) && void 0 !== vQ && null !== (mQ = vQ.textures) && void 0 !== mQ && mQ.assets && (0, PL.j)(null), null === (uQ = Zo) || void 0 === uQ || uQ.stop(), Zo = null, yo = null;
      const eQ = bD;
      bD = null, eQ && (eQ.stop(), Um(eQ)), null === (HQ = SD) || void 0 === HQ || HQ.dispose(), SD = null, null === (bQ = iD) || void 0 === bQ || bQ.dispose(), iD = null, GD = null, null === (YQ = cD) || void 0 === YQ || YQ(), cD = null, null === (xQ = tD) || void 0 === xQ || xQ(), tD = null, null === (AQ = eD) || void 0 === AQ || AQ.stop(), eD = null, Dv(), BL.d.release(), rv();
      const MQ = CD;
      CD = null;
      try {
        null === MQ || void 0 === MQ || MQ.dispose()
      } catch (GQ) {
        console.warn(`${to} the sky's images didn't release`, GQ)
      }(0, hL.c)(null), null === (tQ = Eo) || void 0 === tQ || tQ.pagePreviews().endSession(null === (0, DF.p)())
    }

    function Wm(QQ, FQ) {
      var wQ, LQ;
      const qQ = null !== (wQ = null === (LQ = bD) || void 0 === LQ ? void 0 : LQ.details()) && void 0 !== wQ ? wQ : {},
        oQ = QQ.site === Mo || QQ.site === Go || QQ.site === Ww.RENDER_RELOAD_SITE || QQ.site === po ? QQ.error instanceof WebAssembly.RuntimeError || QQ.error instanceof ZF.b : !(0, Qw.t)(QQ.error) && (0, Fw.G)(QQ);
      oQ && QQ.error instanceof Error && (0, DF.K)(QQ.error);
      const DQ = oQ || QQ.site === Fw.v ? (0, Ww.readTrap)(QQ.error) : null,
        kQ = null !== DQ && (0, hF.g)(DQ.kind, DQ.refusedBytes) ? DQ.refusedBytes : 0,
        vQ = null === YD ? (0, aL.s)(function() {
          try {
            return (0, DF.t)().buffer.byteLength
          } catch {
            return 0
          }
        }(), kQ, null) : YD.ceilingMayRefuse(kQ),
        mQ = kQ > 0 && !vQ && Jv();
      var uQ;
      if (mQ && ((0, YF.r)("oom"), (0, YF.n)("decline"), Jk = !0), im(), (0, kq.c)()) return console.warn(`${to} the session stopped at ${QQ.site} as the page reloads`, QQ.error), void((0, Qw.t)(QQ.error) || (null === (uQ = QQ.header) || void 0 === uQ ? void 0 : uQ.lastError) === XF.D.CoreBusy || (0, Ww.reportStoppedCore)(QQ, FQ, DQ, {
        memoryDetails: qQ,
        declined: mQ
      }));
      (0, Ww.showCrash)(QQ, FQ, DQ, {
        memoryDetails: qQ,
        declined: mQ
      })
    }

    function Rm(QQ) {
      const {
        input: FQ,
        net: wQ,
        worker: LQ
      } = QQ.rings, qQ = QQ.optionsDropped, oQ = FQ.dropped + qQ + wQ.dropped + LQ.dropped + fD;
      oQ !== XD && function(QQ, FQ) {
        const wQ = performance.now();
        return !(wQ - aD[QQ] < To) && (aD[QQ] = wQ, console.warn(`${to} ${FQ}`), !0)
      }("dropped", `${oQ} records dropped so far (input ${FQ.dropped}, options ${qQ}, net ${wQ.dropped}, worker ${LQ.dropped}, net-out ${fD})`) && (XD = oQ)
    }

    function Om() {
      var QQ, FQ;
      const wQ = (0, Gw.b)();
      if (null === wQ) return null;
      const LQ = (0, Sw.l)(wQ);
      return {
        ...LQ,
        horizontal: Math.min(LQ.horizontal, null !== (QQ = null === (FQ = bD) || void 0 === FQ ? void 0 : FQ.shedDistanceInUse()) && void 0 !== QQ ? QQ : 1 / 0)
      }
    }

    function sm(QQ) {
      var FQ, wQ;
      return {
        samples: Ak ? ik : null,
        sunShadows: QQ,
        renderDistance: null !== (FQ = null === (wQ = Om()) || void 0 === wQ ? void 0 : wQ.horizontal) && void 0 !== FQ ? FQ : null
      }
    }

    function rm(QQ) {
      PD = QQ, (0, pw.C)()
    }

    function Im() {
      var QQ, FQ, wQ;
      const LQ = Om();
      return {
        ...null === (QQ = bD) || void 0 === QQ ? void 0 : QQ.pageKillSnapshot(),
        renderDistance: null !== (FQ = null === LQ || void 0 === LQ ? void 0 : LQ.horizontal) && void 0 !== FQ ? FQ : null,
        renderDistanceVertical: null !== (wQ = null === LQ || void 0 === LQ ? void 0 : LQ.vertical) && void 0 !== wQ ? wQ : null,
        chunkCap: xD,
        budgetBasis: AD,
        renderBackend: (0, kq.D)(),
        ...(0, Cw.e)(PD)
      }
    }

    function Um(QQ) {
      console.info(`${to} wasm memory at the session's end`, QQ.details())
    }

    function Nm(QQ, FQ) {
      if (!QQ.isStopped) try {
        FQ()
      } catch (wQ) {
        QQ.crash(Fw.x, wQ)
      }
    }

    function Tm() {
      return uD ??= wQ.e(69).then((() => wQ(42767))).catch((QQ => {
        throw uD = null, QQ
      })), uD
    }
    async function Km() {
      const {
        createWorldgenWorker: QQ,
        worldgenWorkerReady: FQ
      } = await Tm();
      return await FQ(), QQ
    }

    function zm(QQ) {
      var FQ;
      null === (FQ = uD) || void 0 === FQ || FQ.then(QQ, (() => {}))
    }

    function lm(QQ, FQ, wQ) {
      return async function(QQ, FQ, wQ) {
        let {
          stop: LQ,
          stillWanted: qQ
        } = wQ;
        const oQ = await (0, cL.n)(QQ, {
          stillWanted: qQ,
          beforeReload: async () => {
            LQ(), await (0, Ww.flushCrashReports)(JQ.c)
          },
          reload: JQ.i
        });
        return oQ || FQ(), oQ
      }(QQ, FQ, {
        stop: im,
        stillWanted: wQ
      })
    }
    let jm = !1;

    function am() {
      return jm = !0, async function(QQ, FQ, LQ) {
        const {
          gamePackSource: qQ
        } = await wQ.e(344).then((() => wQ(42714)));
        await wm.packStep(QQ, ((wQ, LQ) => wQ.packForGame(QQ, qQ(FQ), LQ)), LQ)
      }(...arguments)
    }

    function Xm(QQ) {
      ! function(QQ, FQ) {
        QQ((QQ => {
          null === QQ || void 0 === QQ || QQ.subscribe((QQ => {
            let {
              pack: wQ,
              gameSource: LQ
            } = QQ;
            FQ(null === LQ || null === wQ ? null : {
              pack: wQ,
              source: "" === LQ ? null : LQ
            })
          }))
        }))
      }(dv, QQ)
    }
    let fm = !1,
      Vm = null,
      hm = !1,
      Jm = !1;

    function Em() {
      var QQ;
      fm || (fm = !0, Bk("play", VQ), (0, bQ.o)(new qu), kQ.gameBridge.attach(UQ), Bm().catch((() => {})), (0, SQ.y)((QQ => {
        FF(QQ.setTextHost)
      })), QQ = Pm, uk.add(QQ), function(QQ) {
        for (const FQ of OD) QQ(FQ);
        sD.add(QQ)
      }((QQ => {
        gm(nm[QQ])
      })))
    }
    const nm = {
      booted: oQ.o.INITIALISE_NOA,
      texturesIn: oQ.o.REGISTRATION,
      modelsIn: oQ.o.SETUP_LIFEFORMS
    };

    function gm(QQ) {
      vQ.l.GA("matchmakeAndPlayStepCompleted", {
        step: QQ,
        totalSubSteps: 1
      })
    }

    function Pm(QQ) {
      if (!hm) return;
      const {
        gameNameWithVariation: FQ,
        lobbyName: wQ
      } = (0, bQ.c)();
      if (QQ.code === LQ.d.serverUpdating.code) return (new qu).leaveLive(), void ym(FQ, wQ);
      vQ.l.GA("unwantedLeftGame", {
        reason: Zm(QQ),
        requiresRefresh: QQ.requiresRefresh,
        canReconnect: null !== QQ.reconnect,
        automaticallyReconnect: QQ.reconnecting,
        canPlayAgain: QQ.canPlayAgain,
        gameNameWithVariation: FQ,
        lobbyName: wQ
      }), (new qu).leaveLive()
    }

    function Zm(QQ) {
      return null !== QQ.reasonKey ? {
        translationKey: QQ.reasonKey
      } : "gameOrPluginKick" === QQ.name ? QQ.reason : `You have disconnected from the server.\n${QQ.reason}`
    }

    function ym(QQ, FQ) {
      var LQ;
      LQ = (0, mQ.G)(QQ, FQ), Promise.resolve().then((() => wQ(1503))).then((QQ => {
        let {
          navigatePreserveSearch: FQ
        } = QQ;
        FQ(LQ)
      })).catch((QQ => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", QQ), (0, JQ.f)(LQ)
      }))
    }

    function Bm() {
      return Vm ??= Promise.all([wQ.e(70), wQ.e(73), wQ.e(72), wQ.e(71), wQ.e(84), wQ.e(261), wQ.e(200), wQ.e(218), wQ.e(239), wQ.e(213), wQ.e(46)]).then((() => wQ(40103))).then((QQ => {
        try {
          QQ.attachPlayGameSources()
        } catch (FQ) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", FQ),
            function(QQ) {
              LD.then((FQ => {
                null === FQ || FQ.isStopped || Ek ? console.warn(`${to} the play sources threw as they attached, after the client stopped`, QQ) : Wm({
                  site: po,
                  error: QQ,
                  header: null
                }, QD)
              }))
            }(FQ), FQ
        }
      }), (QQ => {
        throw Vm = null, new SQ.d(QQ)
      })), Vm
    }
    async function dm(QQ, FQ) {
      Em(), jm = !0, hm = !0;
      let wQ = {
          place: QQ.place,
          matchedAt: QQ.matchedAt
        },
        DQ = QQ.place.gameNameWithVariation;
      const kQ = (0, HQ.e)();
      let vQ = null;
      const mQ = await wv({
        matchmake: async () => {
          let FQ = wQ;
          if (wQ = null, null === FQ) {
            const wQ = await QQ.rematch();
            if (wQ.isError()) throw vQ = wQ.asError().forward(), new Error(wQ.asError().message);
            FQ = {
              place: wQ.getValue(),
              matchedAt: performance.now()
            }
          }
          DQ = FQ.place.gameNameWithVariation;
          return {
            target: await (0, zQ.i)(QQ.userContext, FQ.place, Qm(), kQ),
            matchedAt: FQ.matchedAt,
            freshMs: zQ.e
          }
        },
        pageReady: Bm,
        onFailure: (QQ, FQ) => {
          null === vQ && function(QQ, FQ) {
            (0, Ww.reportPageJoinFailure)(QQ, QD, FQ)
          }(QQ, {
            sinceJoinStartMs: FQ,
            game: DQ
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => QQ.userContext.invalidateTrafficCode(),
        signal: FQ
      });
      switch (mQ.kind) {
        case "joined":
          if (kQ) {
            const {
              game: QQ
            } = mQ;
            (0, HQ.q)((() => {
              QQ.endJoinAd() && (0, xQ.k)()
            }))
          }
          return Jm || (Jm = !0, (0, tQ.c)()), hm ? (gm(oQ.o.CONNECT_TO_GAME_SERVER), gm(oQ.o.SHADER_PACK), function() {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = RD) || void 0 === FQ ? void 0 : FQ.runsInJoinedGame()) && void 0 !== QQ && QQ
          }() && (0, AQ.e)(QQ.userContext, DQ).catch((QQ => {
            console.error("Failed to report the shader pack session", QQ)
          })), function() {
            const QQ = function() {
              var QQ, FQ;
              return null !== (QQ = null === (FQ = RD) || void 0 === FQ ? void 0 : FQ.couldntRunInJoinedGame()) && void 0 !== QQ ? QQ : null
            }();
            null !== QQ && (0, AQ.b)(QQ)
          }(), qQ.d.value(void 0)) : Lu("The server ended the game as it joined");
        case "failed":
          if (!mQ.reloading) {
            if (null !== vQ) return vQ;
            if ((mQ.error instanceof TQ.q || mQ.error instanceof TQ.e) && mQ.error.code === LQ.d.serverUpdating.code) {
              if (FQ.aborted) return Lu("Left the game while it loaded");
              const {
                gameNameWithVariation: QQ,
                lobbyName: wQ
              } = (0, bQ.c)();
              return ym(QQ, wQ), Lu("The server is updating")
            }
            return mQ.error instanceof hQ.c ? qQ.d.errorWithCode(mQ.error.messageKey, oQ.o.SHADER_PACK, {
              severity: "medium"
            }) : qQ.d.errorWithCode(function(QQ) {
              if (QQ instanceof TQ.z || QQ instanceof pQ.d) return QQ.message;
              if (Qu(QQ)) return (0, NQ.n)(QQ.code, QQ.serverText);
              return NQ.f
            }(mQ.error), oQ.o.CONNECT_TO_GAME_SERVER, {
              error: Fu(mQ.error) ? mQ.error : void 0,
              severity: wu(mQ.error),
              gameServerUnreachable: (0, KQ.c)(mQ.error),
              rematch: (0, MQ.c)(mQ.error),
              gameRefused: (0, GQ.e)(mQ.error)
            })
          }
          return Lu("Reloading into the new build");
        case "stopped":
          return Lu("The game client stopped, and shows why");
        case "wF":
          return Lu("Left the game while it loaded")
      }
    }

    function Qu(QQ) {
      return QQ instanceof TQ.q || QQ instanceof TQ.e && "attach" !== QQ.stage
    }

    function Fu(QQ) {
      return !(QQ instanceof TQ.z) && !Qu(QQ) && void 0 === (0, KQ.c)(QQ)
    }

    function wu(QQ) {
      return Qu(QQ) ? QQ instanceof TQ.e && (0, NQ.j)(QQ.code).requiresRefresh ? "medium" : "low" : Fu(QQ) || QQ instanceof TQ.z ? "medium" : "low"
    }

    function Lu(QQ) {
      return qQ.d.errorWithCode(QQ, oQ.o.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        wF: !0
      })
    }
    class qu {
      leave(QQ) {
        if ((0, cQ.c)()) {
          var FQ, wQ;
          if ((0, DQ.d)()) return;
          (0, YQ.e)(!0 === (null === (FQ = (0, cQ.k)()) || void 0 === FQ || null === (wQ = FQ.currentViewer) || void 0 === wQ ? void 0 : wQ.unsavedChanges), QQ)
        } else this.leaveLive()
      }
      leaveLive() {
        var QQ;
        jm && (null === (QQ = Qm()) || void 0 === QQ || QQ.endGamePack());
        if (!hm) return;
        hm = !1, (0, eQ.g)();
        try {
          var FQ;
          null === (FQ = (0, SQ.u)()) || void 0 === FQ || FQ.clearWasmCameraScreen()
        } catch (LQ) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", LQ)
        }
        const {
          gameNameWithVariation: wQ
        } = (0, bQ.c)();
        try {
          bv()
        } finally {
          (0, bQ.s)({
            websocketUrl: null
          }), vQ.l.GA("leaveGame", {
            gameNameWithVariation: wQ
          }), (0, uQ.U)()
        }
      }
      isReplay() {
        return (0, cQ.c)()
      }
    }
  },
  40424: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ,
      e: () => LQ,
      f: () => kQ,
      h: () => DQ
    });
    const LQ = 12e4,
      qQ = 3e4,
      oQ = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: QQ => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", QQ), () => {
          document.removeEventListener("visibilitychange", QQ)
        })
      };

    function DQ(QQ) {
      return `it sent no start within ${Math.round(QQ)} ms`
    }
    class kQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : oQ;
        this.timeoutMs = QQ, this.onTimeout = FQ, this.now = wQ, this.visibility = LQ, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = LQ.listen((() => {
          this.onVisibility()
        })), LQ.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const QQ = this.step;
        return null === QQ ? 0 : Math.min(this.now() - QQ.at, QQ.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const QQ = this.timeoutMs - this.counted;
        if (QQ <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const FQ = Math.min(QQ, 5e3);
        this.step = {
          at: this.now(),
          ms: FQ
        }, this.arm(FQ, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(QQ, FQ) {
        this.timer = setTimeout((() => {
          this.timer = null, FQ()
        }), QQ)
      }
    }
  },
  40316: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    const LQ = {
      roomsPerServerMax: 30,
      timeForPlayerToConnect: 3e4,
      seatReservationSeconds: 15,
      healthWindowMs: 3e5,
      minAttemptsForRoomHealthWindow: 6,
      minAttemptsForServerHealthWindow: 20,
      minAttemptsForEmptyServerHealthWindow: 6,
      playerTimeoutThreshold: .8,
      gameServerMatchmakingHeartbeatInterval: 2e3,
      gameServerMatchmakingAnalyticsHeartbeatInterval: 1e4,
      SetRoomsHeartbeatBackoffMultiplier: 1.5,
      SetRoomsHeartbeatMaxInterval: 1e4,
      AnalyticsHeartbeatBackoffMultiplier: 1.2,
      AnalyticsHeartbeatMaxInterval: 3e4,
      defaultSubtractionFromMaxPlayersForSoftCap: 2,
      saveExpectedPlayersEvery: 1e4,
      unregisterFrozenGameServersIntervalMs: 1e3,
      gameServerFrozenThresholdMs: 3e4,
      matchmakingSkipsDrainingLobbies: !0,
      minNotDrainingShareToSkipDrainingLobbies: .5,
      drainingSessionLobbyFillMs: 3e5
    }
  },
  38260: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(2809);
    const qQ = ["none", "idle", "now"];

    function oQ() {
      const QQ = () => (0, LQ.B)();
      return {
        memoryBytes: () => (0, LQ.t)().buffer.byteLength,
        reserveUpFront: FQ => QQ().oH(FQ),
        reserveAhead: FQ => QQ().qH(FQ),
        setCeiling: FQ => {
          QQ().DH(FQ)
        },
        lowWater: () => qQ[QQ().LH()] ?? "none",
        stats: () => function(QQ) {
          const FQ = new Uint32Array((0, LQ.t)().buffer, QQ, 17),
            wQ = QQ => FQ[QQ] ?? 0,
            qQ = QQ => ({
              upFront: wQ(QQ),
              ahead: wQ(QQ + 1),
              onDemandInFrame: wQ(QQ + 2),
              onDemand: wQ(QQ + 3)
            });
          return {
            memoryBytes: wQ(0),
            initialBytes: wQ(1),
            liveBytes: wQ(2),
            peakLiveBytes: wQ(3),
            headroomBytes: wQ(4),
            unusedBytes: wQ(5),
            ceilingBytes: wQ(6),
            reservesRefused: wQ(7),
            grows: qQ(8),
            grownBytes: qQ(12),
            allocationsRefused: wQ(16)
          }
        }(QQ().kH()),
        takeBallast: () => QQ().vH(),
        takePressure: () => QQ().mH()
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);