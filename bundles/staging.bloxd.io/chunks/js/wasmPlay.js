export const id = 56;
export const ids = [56];
export const modules = {
  38585: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      c: () => UJ
    });
    const FJ = "The world isn't loaded, so no blocks can be seen.",
      UJ = "The world isn't loaded, so nothing in it can be seen."
  },
  38052: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => GJ,
      f: () => fJ,
      j: () => nJ
    });
    var FJ = ZJ(2610);
    const UJ = 0,
      eJ = 2,
      XJ = 3,
      AJ = 4;
    class qJ {
      constructor(JJ, cJ) {
        this.width = JJ, this.qh = cJ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(JJ * cJ)
      }
      push(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let FJ = 0; FJ < this.width; FJ++) ZJ[FJ] = JJ[cJ + FJ];
        return this.next = (this.next + 1) % this.qh, this.size = Math.min(this.size + 1, this.qh), ZJ
      }
      lines() {
        const JJ = [],
          cJ = (this.next - this.size + this.qh) % this.qh;
        for (let ZJ = 0; ZJ < this.size; ZJ++) {
          const FJ = (cJ + ZJ) % this.qh * this.width;
          JJ.push(Array.from(this.data.subarray(FJ, FJ + this.width)).join(","))
        }
        return JJ
      }
    }

    function jJ(JJ) {
      return Number.isFinite(JJ) ? String(Math.round(10 * JJ) / 10) : String(JJ)
    }

    function YJ(JJ) {
      return Number.isFinite(JJ) ? JJ.toFixed(1) : String(JJ)
    }
    class hJ {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Qp = 0, this.pastLimit = 0, this.lockSkips = 0, this.Yf = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class DJ {
      constructor() {
        var JJ = this;
        this.tally = new hJ, this.records = new qJ(10, 3600), this.events = new qJ(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [FJ, qJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ] = JJ.records.push(cJ, ZJ), vJ = JJ.tally;
          switch (vJ.frames++, GJ) {
            case UJ:
              return void vJ.idle++;
            case AJ:
              return void vJ.Yf++;
            case XJ:
              return vJ.lockSkips++, void(0 === hJ && 0 === DJ || JJ.outlier(`lock skip dropped raw (${jJ(hJ)}, ${jJ(DJ)}) at ${YJ(FJ)} ms`))
          }
          vJ.looked++, Number.isFinite(qJ) && (vJ.dtMin = Math.min(vJ.dtMin, qJ), vJ.dtMax = Math.max(vJ.dtMax, qJ), vJ.dtSum += qJ, qJ > 0 && (vJ.peakRate = Math.max(vJ.peakRate, Math.hypot(sJ, nJ) / qJ))), vJ.raw[0] += hJ, vJ.raw[1] += DJ, vJ.turned[0] += sJ, vJ.turned[1] += nJ;
          const mJ = Math.abs(hJ) > rJ || Math.abs(DJ) > rJ,
            QJ = `raw (${jJ(hJ)}, ${jJ(DJ)}) over ${YJ(qJ)} ms, limit ${jJ(rJ)}, filter v (${fJ.toFixed(3)}, ${xJ.toFixed(3)}) px/ms, at ${YJ(FJ)} ms`;
          GJ === eJ ? (vJ.Qp++, JJ.outlier(`spike put right: ${QJ} -> turned (${jJ(sJ)}, ${jJ(nJ)})`)) : mJ ? (vJ.pastLimit++, JJ.outlier(`kept past limit: ${QJ}`)) : qJ > 50 && (vJ.longFrames++, JJ.outlier(`long frame: ${QJ}, turned in full`))
        }, this.onMouseMove = JJ => {
          const cJ = this.tally,
            {
              movementX: ZJ,
              movementY: FJ
            } = JJ;
          cJ.events++;
          const UJ = Math.max(Math.abs(ZJ), Math.abs(FJ));
          cJ.eventMax = Math.max(cJ.eventMax, UJ);
          const eJ = null !== document.pointerLockElement,
            XJ = this.event;
          XJ[0] = JJ.timeStamp, XJ[1] = ZJ, XJ[2] = FJ, XJ[3] = eJ ? 1 : 0, this.events.push(XJ), UJ >= 200 && (cJ.bigEvents++, this.eventOutlier(`big mousemove (${ZJ}, ${FJ}) at ${YJ(JJ.timeStamp)} ms, lock ${eJ?"hj":"free"}`))
        }, this.onLockChange = () => {
          const JJ = document.pointerLockElement;
          (0, FJ.j)("look", `pointer lock ${JJ?`gained (${JJ.tagName.toLowerCase()})`:"lost"} at ${YJ(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, FJ.j)("look", `pointer lock request failed at ${YJ(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, FJ.j)("look", `page ${document.visibilityState} at ${YJ(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const JJ = this.tally;
          if (this.tally = new hJ, 0 === JJ.events && 0 === JJ.raw[0] && 0 === JJ.raw[1] && 0 === JJ.lockSkips && 0 === JJ.Qp && 0 === JJ.dropped) return;
          const cJ = JJ.looked > 0 ? JJ.dtSum / JJ.looked : NaN,
            ZJ = [`${JJ.frames} frames (${JJ.looked} looked, ${JJ.idle} idle${"wasm"===this.client?`, ${JJ.Yf} carried`:""})`, `dt avg ${YJ(cJ)} min ${YJ(JJ.dtMin)} max ${YJ(JJ.dtMax)}, ${JJ.longFrames} long`, `${JJ.events} mousemoves (max ${jJ(JJ.eventMax)} px, ${JJ.bigEvents} big)`, `raw (${jJ(JJ.raw[0])}, ${jJ(JJ.raw[1])}) turned (${jJ(JJ.turned[0])}, ${jJ(JJ.turned[1])})`, `peak ${JJ.peakRate.toFixed(2)} px/ms`, `put right ${JJ.Qp}, past limit ${JJ.pastLimit}, lock skips ${JJ.lockSkips}`, "lock " + (document.pointerLockElement ? "hj" : "free")];
          JJ.dropped > 0 && ZJ.push(`${JJ.dropped} doubled spike copies dropped`), JJ.lost > 0 && ZJ.push(`${JJ.lost} records lost`), JJ.suppressed > 0 && ZJ.push(`${JJ.suppressed} outlier lines not shown`), (0, FJ.j)("look", `1s: ${ZJ.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(JJ, cJ) {
        this.client = JJ, this.take = cJ;
        const {
          screen: ZJ
        } = window;
        (0, FJ.j)("look", `start: ${JJ} client, dpr ${window.devicePixelRatio}, screen ${ZJ.width}x${ZJ.height}, pointer lock ${document.pointerLockElement?"hj":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, FJ.h)("look", this.dump))
      }
      outlier(JJ) {
        const cJ = this.tally;
        cJ.outliers >= 20 ? cJ.suppressed++ : (cJ.outliers++, (0, FJ.j)("look", JJ))
      }
      eventOutlier(JJ) {
        const cJ = this.tally;
        cJ.eventLines >= 10 ? cJ.suppressed++ : (cJ.eventLines++, (0, FJ.j)("look", JJ))
      }
      takeRecords() {
        var JJ;
        const cJ = null === (JJ = this.take) || void 0 === JJ ? void 0 : JJ.call(this);
        if (cJ && cJ.length >= 2) {
          this.tally.lost += cJ[0], this.tally.dropped += cJ[1];
          for (let JJ = 2; JJ + 10 <= cJ.length; JJ += 10) this.record(cJ, JJ)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let sJ = null;

    function nJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return sJ ??= new DJ, sJ.start(JJ, cJ), sJ.record
    }

    function GJ() {
      var JJ;
      null === (JJ = sJ) || void 0 === JJ || JJ.endTake()
    }

    function fJ() {
      var JJ;
      null === (JJ = sJ) || void 0 === JJ || JJ.droppedCopy()
    }
  },
  8482: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    const FJ = new Set(["chunkBorders"])
  },
  35868: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      g: () => qJ
    });
    const FJ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      UJ = {
        player: FJ,
        store: {
          ...FJ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function eJ(JJ, cJ) {
      JJ instanceof Promise ? JJ.then(cJ).catch((JJ => {
        console.error("Couldn't open the preview", JJ)
      })) : cJ(JJ)
    }
    class XJ {
      constructor(JJ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, eJ(JJ, (JJ => {
          this.closed ? JJ.close() : (this.opened = JJ, null !== this.size && JJ.resize(this.size.width, this.size.height), null !== this.view && JJ.show(this.view))
        }))
      }
      show(JJ) {
        var cJ;
        this.view = JJ, null === (cJ = this.opened) || void 0 === cJ || cJ.show(JJ)
      }
      resize(JJ, cJ) {
        var ZJ;
        this.size = {
          width: JJ,
          height: cJ
        }, null === (ZJ = this.opened) || void 0 === ZJ || ZJ.resize(JJ, cJ)
      }
      close() {
        var JJ;
        this.closed = !0, null === (JJ = this.opened) || void 0 === JJ || JJ.close(), this.opened = null
      }
    }
    class AJ {
      constructor(JJ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(JJ).then((JJ => JJ.ready)), eJ(JJ, (JJ => {
          this.closed ? JJ.close() : (this.opened = JJ, null !== this.size && JJ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.opened) || void 0 === cJ ? void 0 : cJ.isReady()) && void 0 !== JJ && JJ
      }
      setCosmetic(JJ, cJ) {
        var ZJ;
        null === (ZJ = this.opened) || void 0 === ZJ || ZJ.setCosmetic(JJ, cJ)
      }
      playEmote(JJ) {
        var cJ;
        null === (cJ = this.opened) || void 0 === cJ || cJ.playEmote(JJ)
      }
      resetCamera() {
        var JJ;
        null === (JJ = this.opened) || void 0 === JJ || JJ.resetCamera()
      }
      async untilDrawn(JJ) {
        var cJ;
        await this.ready, await (null === (cJ = this.opened) || void 0 === cJ ? void 0 : cJ.untilDrawn(JJ))
      }
      resize(JJ, cJ) {
        var ZJ;
        this.size = {
          width: JJ,
          height: cJ
        }, null === (ZJ = this.opened) || void 0 === ZJ || ZJ.resize(JJ, cJ)
      }
      close() {
        var JJ;
        this.closed = !0, null === (JJ = this.opened) || void 0 === JJ || JJ.close(), this.opened = null
      }
    }
    const qJ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(JJ) {
        this.host = JJ
      }
      setDefaultHost(JJ) {
        this.makeDefault = JJ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(JJ) {
        return new XJ(this.current().openMob(JJ))
      }
      openPet(JJ) {
        return new XJ(this.current().openPet(JJ))
      }
      openMobLineup(JJ) {
        return new XJ(this.current().openMobLineup(JJ))
      }
      openCharacter(JJ, cJ) {
        return new AJ(this.current().openCharacter(JJ, cJ))
      }
    }
  },
  38198: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ,
      e: () => DJ
    });
    var FJ = ZJ(143),
      UJ = ZJ(1380),
      eJ = ZJ(1372),
      XJ = ZJ(2710),
      AJ = ZJ(1389),
      qJ = ZJ(35554),
      jJ = ZJ(969),
      YJ = ZJ(38169);

    function hJ(JJ) {
      (0, XJ.h)("matchmake_failed", JJ, FJ.e[FJ.e.SHADER_PACK])
    }
    async function DJ(JJ, cJ) {
      var ZJ;
      const FJ = null === (ZJ = await YJ.shaderPackPage.preload()) || void 0 === ZJ ? void 0 : ZJ.listing,
        XJ = (0, qJ.e)();
      FJ && null !== XJ && await AJ.c.reportShaderPackSession(JJ, {
        packId: FJ.packId,
        sourceHash: FJ.sourceHash,
        game: (0, eJ.h)(cJ, UJ.r, "other"),
        playSessionId: XJ,
        visitSessionId: (0, jJ.d)()
      })
    }
  },
  37995: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(1184),
      eJ = ZJ(2951);
    const XJ = "Reconnecting";
    class AJ {
      constructor(JJ) {
        this.hooks = JJ, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = JJ => {
          JJ.persisted || this.cn()
        }, this.controller = new eJ.e((cJ => JJ.reconnect(cJ)), {
          isSessionLive: () => !this.ended && JJ.isLive(),
          onPhaseChanged: JJ => {
            this.onPhaseChanged(JJ)
          },
          onReconnected: cJ => {
            JJ.onReconnected(cJ)
          },
          onGaveUp: cJ => {
            !this.ended && JJ.isLive() && JJ.onGaveUp(this.sessionBased, cJ)
          }
        })
      }
      onInitialInfo(JJ, cJ) {
        this.graceMs = JJ, this.sessionBased = cJ
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(JJ) {
        this.ended || this.controller.onConnectionLost(JJ, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      cn() {
        const JJ = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          cJ = this.controller.heldToken;
        this.end(), JJ && "" !== cJ && this.hooks.releaseSeat(cJ)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(JJ) {
        const cJ = "frozen" === JJ || "resuming" === JJ;
        cJ !== this.stopped && (this.stopped = cJ, this.hooks.freeze(cJ));
        const ZJ = "frozen" === JJ || "resuming" === JJ && this.frozen;
        ZJ && !this.frozen ? (0, UJ.h)(XJ) : !ZJ && this.frozen && (0, UJ.e)(XJ), this.frozen = ZJ, this.setListening("connected" !== JJ), FJ.i.Uf(eJ.n, ZJ ? "frozen" : JJ)
      }
      setListening(JJ) {
        JJ !== this.listening && (this.listening = JJ, JJ ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38e3: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = JJ, this.now = cJ, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const JJ = this.now(),
            cJ = JJ - this.lastCheckAt <= 2e3;
          this.lastCheckAt = JJ;
          const ZJ = "visible" === document.visibilityState;
          !ZJ || cJ && this.wasVisible || (this.resumedAt = JJ), this.wasVisible = ZJ, ZJ && JJ - this.lastHeardAt > 12e3 && JJ - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = cJ(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8541: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(957);

    function UJ() {
      var JJ, cJ;
      return null !== (JJ = null === (cJ = screen.orientation) || void 0 === cJ ? void 0 : cJ.type) && void 0 !== JJ ? JJ : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const eJ = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && UJ() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = UJ(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, FJ.MG)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const JJ of this.resizers) JJ()
          }
        }), 1e3)
      }
      heldSizer(JJ) {
        let cJ = !1;
        return () => {
          if (cJ && this.isHeld()) return null;
          const ZJ = JJ();
          return cJ ||= null !== ZJ, ZJ
        }
      }
      onRelease(JJ) {
        return this.resizers.add(JJ), () => {
          this.resizers.delete(JJ)
        }
      }
    }
  },
  38192: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ
    });
    let FJ = !1;
    async function UJ(JJ, cJ) {
      if (!FJ) {
        FJ = !0;
        try {
          const [{
            reloadBloxd: FJ
          }, {
            NotificationProvider: UJ
          }] = await Promise.all([Promise.resolve().then((() => ZJ(1599))), Promise.resolve().then((() => ZJ(1247)))]);
          if (!JJ || !0 === await UJ.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void FJ(cJ)
        } catch (UJ) {
          console.error("Leaving the replay failed", UJ)
        }
        FJ = !1
      }
    }
  },
  38016: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      c: () => YJ
    });
    var FJ = ZJ(1592),
      UJ = ZJ(157),
      eJ = ZJ(1572),
      XJ = ZJ(1642),
      AJ = ZJ(1098),
      qJ = ZJ(1028);
    async function jJ(JJ, cJ) {
      return function(JJ) {
        return "object" === typeof JJ && null !== JJ && JJ.code === UJ.b.VpnIp.code
      }(cJ) && function(JJ) {
        return eJ.d.supports("appCheck") && JJ.isLoggedIn() && !JJ.hasTriedAppAttestation()
      }(JJ) && await async function(JJ) {
        try {
          const {
            token: cJ
          } = await (0, XJ.e)(), {
            "3PSIDMCPP": ZJ
          } = await (0, qJ.postJsonWithMetricsCookiesAndJsonResponse)(`${AJ.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: cJ
          }, {
            retries: 0
          }, JJ.getMetricsCookies());
          return JJ.setAppAttestedAuthJwt(ZJ), !0
        } catch (cJ) {
          return cJ instanceof FJ.e && "failed" === cJ.code ? (console.warn("The app couldn't get an App Check token:", cJ), JJ.markAppAttestationTried()) : console.error("Failed to attest the app:", cJ), !1
        }
      }(JJ)
    }
    async function YJ(JJ, cJ) {
      try {
        return await cJ()
      } catch (ZJ) {
        if (!await jJ(JJ, ZJ)) throw ZJ
      }
      return cJ()
    }
  },
  39824: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ
    });
    var FJ = ZJ(1620);
    const UJ = 33177600,
      eJ = 3e4;
    let XJ = !1;

    function AJ(JJ, cJ, ZJ) {
      if (!JJ.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (XJ) return Promise.reject(new Error("A screenshot is already being taken"));
      XJ = !0;
      const FJ = function(JJ, cJ, ZJ) {
        const FJ = Math.max(1, JJ),
          eJ = Math.max(1, cJ),
          XJ = Math.min(1, ZJ / Math.max(FJ, eJ), Math.sqrt(UJ / (FJ * eJ)));
        return {
          width: Math.max(1, Math.floor(FJ * XJ)),
          height: Math.max(1, Math.floor(eJ * XJ))
        }
      }(cJ, ZJ, JJ.maxTextureSize);
      return JJ.resize(FJ.width, FJ.height), new Promise(((cJ, ZJ) => {
        let FJ, UJ = 2,
          AJ = null;
        const qJ = () => {
          var cJ;
          XJ = !1, null === (cJ = AJ) || void 0 === cJ || cJ(), clearTimeout(FJ), JJ.restoreSize()
        };
        FJ = setTimeout((() => {
          qJ(), ZJ(new Error("No frame was drawn to capture"))
        }), eJ), AJ = JJ.onFrameDrawn((() => {
          if (UJ--, UJ > 0) return;
          const {
            canvas: FJ
          } = JJ, eJ = {
            width: FJ.width,
            height: FJ.height
          };
          try {
            FJ.toBlob((JJ => {
              JJ ? cJ({
                blob: JJ,
                ...eJ
              }) : ZJ(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (XJ) {
            ZJ(XJ)
          } finally {
            qJ()
          }
        }))
      }))
    }
    async function qJ(JJ, cJ, ZJ) {
      try {
        const UJ = await AJ(JJ, cJ, ZJ);
        (0, FJ.d)(UJ.blob, `bloxd-screenshot-${UJ.width}x${UJ.height}-${Date.now()}.png`)
      } catch (UJ) {
        console.error("Error taking screenshot:", UJ)
      }
    }
  },
  8546: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ
    });
    var FJ = ZJ(157),
      UJ = ZJ(1671),
      eJ = ZJ(29);
    const XJ = 2;

    function AJ() {
      let JJ = qJ("chunkHorizAddDist", FJ.c.defaultChunkHorizAddDistance),
        cJ = qJ("chunkVertAddDist", FJ.c.defaultChunkVertAddDistance);
      return JJ = (0, UJ.f)(JJ, XJ, FJ.c.maxChunkHorizAddDistance), cJ = (0, UJ.f)(cJ, XJ, FJ.c.maxChunkVertAddDistance), [JJ, cJ]
    }

    function qJ(JJ, cJ) {
      const ZJ = eJ.j.getItem(JJ),
        FJ = "number" === typeof ZJ || "string" === typeof ZJ ? Number(ZJ) : Number.NaN;
      return Number.isFinite(FJ) ? FJ : cJ
    }
  },
  38009: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ,
      f: () => jJ
    });
    var FJ = ZJ(157),
      UJ = ZJ(4064),
      eJ = ZJ(3122);
    const XJ = [250, 500, 1e3, 2e3, 1250],
      AJ = 406;

    function qJ(JJ) {
      if ("object" !== typeof JJ || null === JJ) return !1;
      const {
        code: cJ,
        message: ZJ
      } = JJ, UJ = FJ.b.duplicateLobbyNameError;
      return (cJ === UJ.code || cJ === AJ) && (ZJ === UJ.text || ZJ === UJ.text + FJ.i)
    }
    async function jJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UJ.b;
      for (let UJ = 0;; UJ++) {
        let AJ;
        (0, eJ.l)(cJ);
        try {
          return await JJ()
        } catch (FJ) {
          if (AJ = XJ[UJ], void 0 === AJ || !qJ(FJ)) throw FJ
        }
        await ZJ(AJ, cJ)
      }
    }
    const YJ = new Set([FJ.b.duplicateLobbyNameError.code, FJ.b.lobbyCantBeCreated.code, FJ.b.roomDisposedEarlyError.code, FJ.b.roomDisposedLateError.code, FJ.b.serverRoomLimitReached.code]);

    function hJ(JJ) {
      if (qJ(JJ)) return !0;
      const cJ = "object" === typeof JJ && null !== JJ ? JJ.code : void 0;
      return "number" === typeof cJ && YJ.has(cJ)
    }
  },
  38113: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      const ZJ = JJ || 4;
      return ZJ <= 6 ? 1 : ZJ <= 8 || cJ ? 2 : 3
    }
    ZJ.d(cJ, {
      b: () => FJ
    })
  },
  38108: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    var FJ = ZJ(227),
      UJ = ZJ(112),
      eJ = ZJ(29);

    function XJ() {
      eJ.j.setItem(FJ.vb, eJ.j.getItem(FJ.vb) + 1), (0, UJ.f)() && eJ.j.setItem(FJ.sb, eJ.j.getItem(FJ.sb) + 1)
    }
  },
  35551: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => fJ,
      c: () => xJ
    });
    var FJ = ZJ(889),
      UJ = ZJ(538),
      eJ = ZJ(235),
      XJ = ZJ(896),
      AJ = ZJ(547),
      qJ = ZJ(3935),
      jJ = ZJ(80),
      YJ = ZJ(112),
      hJ = ZJ(1599),
      DJ = ZJ(93),
      sJ = ZJ(35554),
      nJ = ZJ(29),
      GJ = ZJ(969);

    function fJ() {
      var JJ, cJ;
      return [...null !== (JJ = navigator.languages) && void 0 !== JJ ? JJ : [null !== (cJ = navigator.language) && void 0 !== cJ ? cJ : "none"], "En-Gb"]
    }

    function xJ(JJ, cJ, ZJ, xJ, rJ) {
      const vJ = (0, FJ.k)(cJ) ? (0, FJ.n)(cJ) : null,
        mJ = {
          cookies: (0, hJ.getAllCookiesForGameNameWithVariation)(cJ),
          isMobile: (0, jJ.isMobile)(),
          isUsingCustomGameTexturePack: null !== vJ && rJ(vJ),
          generalCookies: {
            joinDiscord: !!nJ.j.getItem("DiscordPressed"),
            newGo: qJ.c,
            ...JJ.getMetricsCookies(),
            trafficCode: xJ,
            compliance: jJ.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, jJ.getBrowserName)(),
            version: (0, jJ.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, jJ.getPlatformType)(),
            deviceType: (0, DJ.e)()
          },
          isLoggedIn: JJ.isLoggedIn(),
          lobbyName: ZJ,
          languages: fJ(),
          version: UJ.b,
          siteUsed: YJ.n,
          subsiteUsed: YJ.y,
          playSessionId: (0, sJ.h)(cJ),
          visitSessionId: (0, GJ.d)(),
          clientReason: AJ.i.reason
        };
      return null !== vJ && (0, eJ.oc)(vJ) ? (mJ.lobbyName = (0, FJ.j)(vJ, (0, FJ.l)(cJ), ZJ), {
        roomName: `classic_${XJ.e}`,
        joinOptions: mJ
      }) : {
        roomName: cJ,
        joinOptions: mJ
      }
    }
  },
  39431: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = ZJ(38585);

    function UJ(JJ) {
      return {
        current: () => JJ,
        watch: () => () => {}
      }
    }

    function eJ() {}
    const XJ = Object.freeze([0, 0, 0]),
      AJ = {
        states: {
          health: UJ({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: UJ({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: UJ({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: UJ({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: UJ({}),
          creativeVisibility: UJ({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: UJ(null),
          heldItemAim: UJ({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: UJ(!1),
          gliderBoostFuel: UJ(0),
          flight: UJ({
            canFly: !1,
            flying: !1
          }),
          crafting: UJ({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: UJ({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: UJ({}),
          fullInventory: UJ(!1),
          crosshairTarget: UJ({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: UJ(!0),
          replay: UJ(null),
          replayEdits: UJ(null),
          replayRecorder: UJ({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: UJ(!1)
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
          selectHotbarSlot: eJ,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: eJ,
          setInventoryOpen: eJ,
          changeIronChestPasskey: eJ,
          dragReplayCamera: eJ,
          applyTemporaryThirdPerson: eJ,
          holdEmoteWheel: eJ,
          recordFlyingMiddleText: eJ,
          focusCrafting: eJ,
          craftRecipe: () => ({
            jj: 0,
            fA: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: eJ,
          setShopOpen: eJ,
          buyShopItem: eJ,
          sendChatMessage: eJ,
          ignorePlayer: eJ,
          reportPlayer: eJ,
          reportWorldCodeChat: eJ,
          requestDiscordReportKey: eJ,
          reportLobbyOrGame: eJ,
          playEmote: eJ,
          updateMyCosmetic: eJ,
          writeOnBoard: eJ,
          writeBook: eJ,
          writeNameTag: eJ,
          setCustomLobbyBlock: eJ,
          openIronChest: eJ,
          sendCodeCollab: eJ,
          clickCodeBlock: eJ,
          bindCustomButtonKeys: eJ,
          pressCustomButton: eJ,
          moveReplayFreecam: eJ,
          holdReplayFreecamVertical: eJ,
          respawn: eJ,
          wakeUp: eJ,
          requestLeaderboard: eJ,
          completeTask: eJ,
          setServerCookie: eJ,
          answerUiRequest: eJ,
          chooseRewardedAd: eJ,
          setCameraZoom: eJ,
          setCrosshairInteractPrompt: eJ,
          setLookSensitivity: eJ,
          replayAction: eJ,
          setReplayPlaying: eJ,
          seekReplay: eJ,
          setReplayCameraMode: eJ,
          syncReplayCameraMode: eJ,
          setReplayCameraKeyframe: eJ,
          moveReplayCameraKeyframe: eJ,
          deleteReplayCameraKeyframes: eJ,
          setReplayPlaybackMark: eJ,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: eJ,
          exportReplayVideo: eJ,
          toggleRecording: eJ,
          saveClip: eJ,
          setRecorderPrefs: eJ,
          setReplayViewerOpen: eJ
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => FJ.b,
          worldCodeAiGameState: () => FJ.c
        },
        lookups: {
          localPos: () => XJ,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  39639: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => EJ,
      e: () => QJ,
      f: () => mJ
    });
    var FJ = ZJ(157),
      UJ = ZJ(80),
      eJ = ZJ(2466),
      XJ = ZJ(3838),
      AJ = ZJ(551),
      qJ = ZJ(39642);
    const jJ = 1048576,
      YJ = 1024 * jJ,
      hJ = 400 * jJ,
      DJ = 147456,
      sJ = .5,
      nJ = 1.5 * YJ,
      GJ = 768 * jJ;

    function fJ(JJ) {
      return hJ + JJ * DJ
    }

    function xJ(JJ, cJ, ZJ) {
      var UJ, XJ;
      let {
        footprintBytes: AJ,
        basis: jJ,
        namesLimit: xJ
      } = function(JJ) {
        const {
          os: cJ,
          deviceMemory: ZJ
        } = JJ;
        if ("ios" === cJ) switch ((0, eJ.c)(JJ)) {
          case "ipad_m":
            return {
              footprintBytes: fJ(qJ.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: GJ, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: nJ, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: GJ, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof ZJ && Number.isFinite(ZJ) && ZJ > 0 ? {
          footprintBytes: ZJ * YJ * sJ,
          basis: `memory-${ZJ}`,
          namesLimit: !0
        } : "android" === cJ ? {
          footprintBytes: GJ,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: fJ(qJ.g),
          basis: "unreported",
          namesLimit: !1
        }
      }(JJ);
      if (ZJ) {
        const JJ = Math.min(AJ, fJ(qJ.c));
        AJ = hJ + Math.max(0, JJ - hJ) / 2, jJ += "+killed", xJ = !0
      }
      null !== cJ && fJ(cJ) < AJ && (AJ = fJ(cJ), jJ += "+learned", xJ = !0);
      const rJ = function(JJ) {
          const cJ = Math.floor((JJ - hJ) / DJ);
          return Math.min(qJ.c, Math.max(qJ.d, cJ))
        }(AJ),
        vJ = (0, qJ.m)(rJ);
      return {
        footprintBytes: AJ,
        shedFootprintBytes: xJ ? Math.max(AJ, fJ(rJ)) : null,
        chunkCap: rJ,
        maxHorizDistance: null !== (UJ = null === vJ || void 0 === vJ ? void 0 : vJ.horizontal) && void 0 !== UJ ? UJ : FJ.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (XJ = null === vJ || void 0 === vJ ? void 0 : vJ.vertical) && void 0 !== XJ ? XJ : FJ.c.maxChunkVertAddDistance,
        basis: jJ
      }
    }
    let rJ = null;

    function vJ() {
      return xJ({
        os: (0, UJ.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, eJ.g)()
      }, (0, XJ.f)(), (0, AJ.u)("wasm").length > 0)
    }

    function mJ() {
      return rJ ??= vJ(), rJ
    }

    function QJ() {
      var JJ;
      return (null !== (JJ = rJ) && void 0 !== JJ ? JJ : vJ()).basis
    }

    function EJ(JJ, cJ) {
      return JJ.setChunkCap(cJ.chunkCap)
    }
  },
  39815: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      f: () => eJ
    });
    var FJ = ZJ(2651),
      UJ = ZJ(889);

    function eJ(JJ, cJ) {
      return null !== JJ.gameSource && (0, FJ.p)(cJ, JJ.gameSource)
    }

    function XJ(JJ, cJ) {
      if (null === JJ.gameSource || "" === JJ.gameSource || null === cJ) return !0;
      const ZJ = (0, UJ.k)(cJ) ? (0, UJ.n)(cJ) : null;
      return null !== ZJ && eJ(JJ, ZJ)
    }
  },
  39789: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      f: () => GJ,
      g: () => jJ,
      j: () => YJ,
      k: () => nJ
    });
    var FJ = ZJ(39732),
      UJ = ZJ(39798);
    const eJ = 396,
      XJ = 1,
      AJ = 2,
      qJ = 3,
      jJ = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      YJ = {
        File: 0,
        Item: 1
      },
      hJ = 0,
      DJ = 1,
      sJ = 2;

    function nJ(JJ) {
      const cJ = (0, FJ.j)();
      cJ.catch((() => {}));
      let UJ = null;
      return {
        glbUrl: JJ,
        lifeformAtlasUrl: async JJ => (await cJ).lifeformAtlasUrl(JJ),
        armourAtlasUrl: async () => (await ZJ.e(187).then((() => ZJ(33439)))).armourAtlasUrl,
        capeUrl: async JJ => (await cJ).capeUrl(JJ),
        attachmentImageUrl: async JJ => (await cJ).attachmentImageUrl(JJ),
        blockImageUrl: async JJ => (await cJ).blockImageUrl(JJ),
        groupAtlasUrl: async JJ => (await cJ).groupAtlasUrl(JJ),
        particleTextureUrl: async JJ => (await cJ).particleTextureUrl(JJ),
        particleItemUrl: async JJ => (UJ ??= ZJ.e(35).then((() => ZJ(50120))).catch((JJ => {
          throw UJ = null, JJ
        })), (await UJ).particleItemUrl(JJ))
      }
    }
    class GJ {
      constructor(JJ, cJ) {
        var ZJ, eJ, XJ;
        let AJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = JJ, this.onFailure = cJ, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.xn = !1, this.load = null !== (ZJ = AJ.load) && void 0 !== ZJ ? ZJ : (JJ, cJ) => (0, UJ.h)(JJ, AJ.fetchImage, cJ), this.release = null !== (eJ = AJ.release) && void 0 !== eJ ? eJ : UJ.m, this.fetchFile = null !== (XJ = AJ.fetchFile) && void 0 !== XJ ? XJ : JJ => (0, FJ.d)(JJ)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(JJ, cJ) {
        this.glbWrittenImages.set(JJ, EJ(cJ))
      }
      glbTaken(JJ, cJ) {
        const ZJ = this.glbWrittenImages.get(JJ);
        this.glbWrittenImages.delete(JJ), cJ && this.setGlbImages(JJ, void 0 !== ZJ && ZJ.length > 0 ? ZJ : void 0)
      }
      setGlbImages(JJ, cJ) {
        var ZJ;
        this.glbTakenCount.set(JJ, (null !== (ZJ = this.glbTakenCount.get(JJ)) && void 0 !== ZJ ? ZJ : 0) + 1), void 0 === cJ ? this.glbImages.delete(JJ) : this.glbImages.set(JJ, cJ);
        const FJ = [];
        for (const {
            key: UJ
          }
          of this.loading.values()) UJ.kind === jJ.Glb && UJ.word === JJ && FJ.push(UJ);
        for (let UJ = this.ready.length - 1; UJ >= 0; UJ--) {
          const {
            key: cJ,
            id: ZJ
          } = this.ready[UJ];
          cJ.kind === jJ.Glb && cJ.word === JJ && (this.ready.splice(UJ, 1), null !== ZJ && (this.answered.delete(ZJ), this.release(ZJ)), FJ.push(cJ))
        }
        this.loadAgain(FJ)
      }
      onEvent(JJ) {
        if (this.xn) return;
        const cJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength);
        for (let ZJ = 0; ZJ + 8 <= JJ.byteLength; ZJ += 8) {
          const JJ = cJ.getUint8(ZJ),
            FJ = cJ.getUint32(ZJ + 4, !0);
          if (JJ === qJ) {
            this.answered.delete(FJ), this.release(FJ);
            continue
          }
          const UJ = {
            kind: cJ.getUint8(ZJ + 1),
            index: cJ.getUint8(ZJ + 2),
            word: FJ
          };
          JJ === XJ ? this.want(UJ) : JJ === AJ && this.loading.delete(fJ(UJ))
        }
      }
      reload(JJ, cJ) {
        const ZJ = ZJ => JJ.includes(ZJ.kind) && (void 0 === cJ || cJ(ZJ)),
          FJ = new Map;
        for (const UJ of this.answered.values()) ZJ(UJ) && FJ.set(fJ(UJ), UJ);
        for (const [UJ, {
            key: eJ
          }] of this.loading) ZJ(eJ) && FJ.set(UJ, eJ);
        this.loadAgain(FJ.values())
      }
      loadAgain(JJ) {
        for (const cJ of JJ) this.loading.delete(fJ(cJ)), this.want(cJ)
      }
      drain(JJ) {
        if (null !== JJ)
          for (; this.ready.length > 0;) {
            if (!JJ(eJ, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.xn = !0, this.loading.clear(), this.ready.length = 0;
        for (const JJ of this.answered.keys()) this.release(JJ);
        this.answered.clear()
      }
      want(JJ) {
        const cJ = fJ(JJ);
        if (this.loading.has(cJ)) return;
        const ZJ = {
          key: JJ
        };
        this.loading.set(cJ, ZJ), this.loadKey(JJ).then((FJ => {
          this.xn || this.loading.get(cJ) !== ZJ ? this.release(FJ.id) : (this.loading.delete(cJ), this.answered.set(FJ.id, JJ), this.ready.push({
            record: rJ(JJ, hJ, FJ),
            key: JJ,
            id: FJ.id
          }))
        }), (FJ => {
          if (this.xn || this.loading.get(cJ) !== ZJ) return;
          this.loading.delete(cJ), this.onFailure({
            key: JJ,
            error: FJ
          });
          const eJ = FJ instanceof UJ.d && "decode" === FJ.stage ? DJ : sJ;
          this.ready.push({
            record: rJ(JJ, eJ, null),
            key: JJ,
            id: null
          })
        }))
      }
      async loadKey(JJ) {
        switch (JJ.kind) {
          case jJ.Glb:
            return this.load(await this.glbImage(JJ), "none");
          case jJ.LifeformAtlas:
            return this.load(xJ(await this.sources.lifeformAtlasUrl(JJ.word), JJ), "none");
          case jJ.ArmourAtlas:
            return this.load(xJ(await this.sources.armourAtlasUrl(), JJ), "none");
          case jJ.Cape:
            return this.load(xJ(await this.sources.capeUrl(JJ.word), JJ), "none");
          case jJ.AttachmentImage:
            return this.load(xJ(await this.sources.attachmentImageUrl(JJ.word), JJ), "none");
          case jJ.GroupAtlas:
            return this.load(xJ(await this.sources.groupAtlasUrl(JJ.word), JJ), "none");
          case jJ.BlockImage:
            return this.load(xJ(await this.sources.blockImageUrl(JJ.word), JJ), "none");
          case jJ.Particle: {
            const cJ = await (JJ.index === YJ.Item ? this.sources.particleItemUrl(JJ.word) : this.sources.particleTextureUrl(JJ.word));
            return this.load(xJ(cJ, JJ), "flipY")
          }
          default:
            throw new UJ.d("fetch", `image kind ${JJ.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(JJ) {
        var cJ;
        let ZJ = this.glbImages.get(JJ.word);
        if (void 0 === ZJ) {
          const cJ = this.glbTakenCount.get(JJ.word),
            FJ = xJ(await this.sources.glbUrl(JJ.word), JJ);
          try {
            ZJ = EJ(await this.fetchFile(FJ))
          } catch (eJ) {
            throw new UJ.d("fetch", FJ, {
              cause: eJ
            })
          }
          this.glbTakenCount.get(JJ.word) === cJ && this.glbImages.set(JJ.word, ZJ)
        }
        const FJ = null === (cJ = ZJ) || void 0 === cJ ? void 0 : cJ[JJ.index];
        if (!FJ) throw new UJ.d("decode", `image ${JJ.index} of file ${2147483647&JJ.word}`, {
          cause: null
        });
        return FJ
      }
    }

    function fJ(JJ) {
      let {
        kind: cJ,
        index: ZJ,
        word: FJ
      } = JJ;
      return `${cJ}:${ZJ}:${FJ}`
    }

    function xJ(JJ, cJ) {
      if (null === JJ) throw new UJ.d("fetch", `no URL for image ${fJ(cJ)}`, {
        cause: null
      });
      return JJ
    }

    function rJ(JJ, cJ, ZJ) {
      var FJ, UJ, eJ;
      const XJ = new Uint8Array(16),
        AJ = new DataView(XJ.buffer);
      return AJ.setUint8(0, JJ.kind), AJ.setUint8(1, JJ.index), AJ.setUint8(2, cJ), AJ.setUint32(4, JJ.word, !0), AJ.setUint32(8, null !== (FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.id) && void 0 !== FJ ? FJ : 0, !0), AJ.setUint16(12, Math.min(null !== (UJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.width) && void 0 !== UJ ? UJ : 0, 65535), !0), AJ.setUint16(14, Math.min(null !== (eJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.height) && void 0 !== eJ ? eJ : 0, 65535), !0), XJ
    }
    const vJ = 1179937895,
      mJ = 1313821514,
      QJ = 5130562;

    function EJ(JJ) {
      var cJ;
      const ZJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength);
      if (JJ.byteLength < 20 || ZJ.getUint32(0, !0) !== vJ || ZJ.getUint32(16, !0) !== mJ) return [];
      let FJ, UJ = 20 + ZJ.getUint32(12, !0);
      try {
        FJ = JSON.parse((new TextDecoder).decode(JJ.subarray(20, UJ)))
      } catch {
        return []
      }
      for (; UJ + 8 <= JJ.byteLength && ZJ.getUint32(UJ + 4, !0) !== QJ;) UJ += 8 + ZJ.getUint32(UJ, !0);
      const eJ = null !== (cJ = FJ.images) && void 0 !== cJ ? cJ : [];
      if (0 === eJ.length || UJ + 8 > JJ.byteLength) return eJ.map((() => null));
      const XJ = JJ.subarray(UJ + 8, Math.min(JJ.byteLength, UJ + 8 + ZJ.getUint32(UJ, !0)));
      return eJ.map((JJ => {
        var cJ, ZJ, UJ;
        const eJ = void 0 === JJ.bufferView || null === (cJ = FJ.bufferViews) || void 0 === cJ ? void 0 : cJ[JJ.bufferView];
        if (!eJ || 0 !== (null !== (ZJ = eJ.buffer) && void 0 !== ZJ ? ZJ : 0) || void 0 === eJ.byteLength) return null;
        const AJ = null !== (UJ = eJ.byteOffset) && void 0 !== UJ ? UJ : 0,
          qJ = AJ + eJ.byteLength;
        return qJ <= XJ.byteLength ? XJ.slice(AJ, qJ) : null
      }))
    }
  },
  39437: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      f: () => eJ,
      h: () => UJ
    });
    let FJ = null;

    function UJ(JJ) {
      FJ = JJ
    }

    function eJ(JJ) {
      FJ === JJ && (FJ = null)
    }

    function XJ() {
      var JJ;
      null === (JJ = FJ) || void 0 === JJ || JJ()
    }
  },
  35644: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      d: () => hJ,
      f: () => XJ
    });
    var FJ = ZJ(2146),
      UJ = ZJ(2153),
      eJ = ZJ(2161);

    function XJ(JJ, cJ) {
      return (!(0, eJ.b)() || 0 === JJ && 0 === cJ) && (0, UJ.z)(FJ.l.Joystick, 0, JJ, cJ, 0)
    }
    const AJ = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function qJ(JJ) {
      return !(JJ instanceof HTMLElement) || JJ.offsetWidth <= 0 || JJ.offsetHeight <= 0 ? null : {
        width: JJ.offsetWidth,
        height: JJ.offsetHeight
      }
    }

    function jJ(JJ, cJ) {
      const ZJ = JJ => Math.min(65535, Math.round(4 * JJ));
      return (ZJ(JJ) | ZJ(cJ) << 16) >>> 0
    }

    function YJ(JJ) {
      return {
        x: JJ.left + JJ.width / 2,
        y: JJ.top + JJ.height / 2,
        radius: Math.min(JJ.width, JJ.height) / 2
      }
    }
    const hJ = new class {
      constructor(JJ) {
        this.write = JJ, this.elements = new Map
      }
      set(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        cJ ? this.elements.set(JJ, {
          element: cJ,
          hidden: ZJ
        }) : this.elements.delete(JJ), this.measureOne(JJ)
      }
      measure() {
        for (const JJ of this.elements.keys()) this.measureOne(JJ)
      }
      hitZone(JJ, cJ) {
        let ZJ = null,
          FJ = 1;
        for (const UJ of this.elements.keys()) {
          const eJ = this.shown(UJ);
          if (!eJ) continue;
          const {
            rect: XJ,
            element: AJ
          } = eJ, jJ = YJ(XJ), hJ = Math.max(0, XJ.width / 2 - jJ.radius), DJ = Math.max(0, XJ.height / 2 - jJ.radius), sJ = Math.max(0, Math.abs(JJ - jJ.x) - hJ), nJ = Math.max(0, Math.abs(cJ - jJ.y) - DJ), GJ = AJ.firstElementChild;
          let fJ = Math.hypot(sJ, nJ) / jJ.radius;
          const xJ = qJ(GJ);
          xJ && (fJ = Math.min(fJ, Math.max(2 * Math.abs(JJ - jJ.x) / xJ.width, 2 * Math.abs(cJ - jJ.y) / xJ.height))), fJ < FJ && (ZJ = {
            code: UJ,
            element: AJ,
            key: GJ,
            ...jJ
          }, FJ = fJ)
        }
        return ZJ
      }
      measureOne(JJ) {
        const cJ = this.shown(JJ);
        if (!cJ) return void this.write(FJ.l.TouchZone, JJ, 0, 0, 0);
        const {
          rect: ZJ,
          element: UJ
        } = cJ, eJ = YJ(ZJ);
        this.write(FJ.l.TouchZone, JJ, eJ.x, eJ.y, jJ(ZJ.width, ZJ.height));
        const XJ = qJ(UJ.firstElementChild);
        this.write(FJ.l.TouchZone, 256 | JJ, 0, 0, XJ ? jJ(XJ.width, XJ.height) : 0)
      }
      shown(JJ) {
        const cJ = this.elements.get(JJ);
        if (!cJ || cJ.hidden) return null;
        const ZJ = cJ.element.getBoundingClientRect();
        return ZJ.width <= 0 || ZJ.height <= 0 ? null : {
          rect: ZJ,
          element: cJ.element
        }
      }
    }(UJ.z)
  },
  39630: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => jJ,
      g: () => YJ
    });
    var FJ = ZJ(39653),
      UJ = ZJ(38016),
      eJ = ZJ(35551),
      XJ = ZJ(39639),
      AJ = ZJ(39555),
      qJ = ZJ(39602);
    const jJ = FJ.e.timeForPlayerToConnect - 1e4;
    async function YJ(JJ, cJ, ZJ) {
      const FJ = await JJ.getTrafficCode().then((JJ => null !== JJ && void 0 !== JJ ? JJ : null), (JJ => (console.error("[bloxd-wasm-client] could not get a traffic code", JJ), null)));
      if (null === FJ) throw new qJ.o;
      const {
        gameNameWithVariation: jJ,
        lobbyName: YJ
      } = cJ, hJ = () => {
        const cJ = (0, eJ.c)(JJ, jJ, YJ, FJ, (JJ => {
          var cJ;
          return null !== (cJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.isUsingCustomGameTexturePack(JJ)) && void 0 !== cJ && cJ
        }));
        cJ.joinOptions.wasmClient = !0, cJ.joinOptions.budgetBasis = (0, XJ.e)();
        const UJ = (0, AJ.D)();
        return null !== UJ && (cJ.joinOptions.renderBackend = UJ), cJ
      }, {
        roomName: DJ,
        joinOptions: sJ
      } = hJ();
      return {
        endpoint: cJ.endpoint,
        roomName: DJ,
        joinOptions: sJ,
        session: {
          gameNameWithVariation: jJ,
          lobbyName: YJ,
          playerDbId: JJ.whamm
        },
        optionsAfterRefusal: async cJ => await (0, UJ.b)(JJ, cJ) ? hJ().joinOptions : null
      }
    }
  },
  4441: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ,
      f: () => XJ
    });
    var FJ = ZJ(2651),
      UJ = ZJ(4448);
    let eJ = null;

    function XJ(JJ, cJ) {
      eJ = {
        pack: JJ.metaData.id === FJ.d ? null : JJ,
        prompt: cJ
      }
    }

    function AJ(JJ, cJ) {
      const ZJ = eJ;
      null !== ZJ && (0, UJ.b)(ZJ.pack, JJ) && (eJ = null, cJ && ZJ.prompt())
    }
  },
  39803: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => YJ,
      c: () => eJ,
      g: () => hJ,
      i: () => XJ
    });
    var FJ = ZJ(39789),
      UJ = ZJ(39732);
    const eJ = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(JJ) {
        this.change((() => {
          this.page = JJ
        }))
      }
      setSessionFiles(JJ) {
        const cJ = void 0 !== this.session && void 0 === JJ;
        if (this.change((() => {
            this.session = JJ
          })), cJ)
          for (const ZJ of [...this.pageListeners]) ZJ()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(JJ) {
        return this.pageListeners.add(JJ), () => {
          this.pageListeners.delete(JJ)
        }
      }
      setFollower(JJ) {
        this.follower = JJ, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const JJ of [...this.wantedListeners]) JJ();
        this.startFollower()
      }
      onWanted(JJ) {
        return this.wantedListeners.add(JJ), () => {
          this.wantedListeners.delete(JJ)
        }
      }
      onChange(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      startFollower() {
        const JJ = this.follower;
        this.isWanted && null !== JJ && (this.follower = null, JJ((() => {
          this.follower = JJ
        })))
      }
      change(JJ) {
        const cJ = this.current;
        if (JJ(), this.current !== cJ)
          for (const ZJ of this.listeners) ZJ()
      }
    };

    function XJ(JJ, cJ) {
      return {
        ...JJ,
        armourAtlasUrl: () => {
          var ZJ, FJ;
          return null !== (ZJ = null === (FJ = cJ()) || void 0 === FJ ? void 0 : FJ.armourAtlasUrl()) && void 0 !== ZJ ? ZJ : JJ.armourAtlasUrl()
        },
        lifeformAtlasUrl: ZJ => qJ(cJ(), (JJ => JJ.LIFEFORM_ATLAS_PATHS[ZJ]), (() => JJ.lifeformAtlasUrl(ZJ))),
        groupAtlasUrl: ZJ => qJ(cJ(), (JJ => JJ.GROUP_ATLAS_PATHS[ZJ]), (() => JJ.groupAtlasUrl(ZJ))),
        particleItemUrl: FJ => jJ(cJ(), (async () => {
          const JJ = await ZJ.e(35).then((() => ZJ(50120))).catch((() => null));
          return (null === JJ || void 0 === JJ ? void 0 : JJ.particleItemSprite(FJ)) || null
        }), (() => JJ.particleItemUrl(FJ))),
        blockImageUrl: ZJ => jJ(cJ(), (async () => {
          var JJ, cJ;
          return null !== (JJ = null === (cJ = await AJ()) || void 0 === cJ ? void 0 : cJ.blockImageName(ZJ)) && void 0 !== JJ ? JJ : null
        }), (() => JJ.blockImageUrl(ZJ)))
      }
    }

    function AJ() {
      return (0, UJ.j)().catch((() => null))
    }

    function qJ(JJ, cJ, ZJ) {
      return jJ(JJ, (async () => {
        var JJ;
        const ZJ = await AJ(),
          FJ = null === ZJ ? null : cJ(ZJ),
          UJ = null !== (JJ = null === FJ || void 0 === FJ ? void 0 : FJ.slice(FJ.lastIndexOf("/") + 1)) && void 0 !== JJ ? JJ : null;
        return "Player_Atlas" === UJ ? null : UJ
      }), ZJ)
    }
    async function jJ(JJ, cJ, ZJ) {
      if (null !== JJ) {
        const ZJ = await cJ(),
          FJ = null === ZJ ? null : JJ.textureUrl(ZJ);
        if (null !== FJ) return FJ
      }
      return ZJ()
    }
    const YJ = 0;

    function hJ(JJ) {
      const cJ = [FJ.g.ArmourAtlas, FJ.g.LifeformAtlas, FJ.g.GroupAtlas, FJ.g.BlockImage, FJ.g.Particle];
      JJ.reload(cJ, (JJ => {
        switch (JJ.kind) {
          case FJ.g.Particle:
            return JJ.index === FJ.j.Item;
          case FJ.g.LifeformAtlas:
            return JJ.word !== YJ;
          default:
            return !0
        }
      }))
    }
  },
  39655: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ,
      i: () => AJ,
      m: () => XJ,
      o: () => UJ,
      q: () => eJ
    });
    const FJ = 1e3;

    function UJ() {
      qJ((() => {
        window.location.reload()
      }))
    }

    function eJ() {
      return new Promise((() => {}))
    }

    function XJ(JJ) {
      qJ((() => {
        window.location.replace(JJ(window.location.href))
      }))
    }

    function AJ(JJ) {
      Promise.resolve().then((() => ZJ(87))).then((cJ => {
        let {
          currentUrl: ZJ
        } = cJ;
        XJ((() => ZJ.mergeSearchParamsInto(JJ)))
      }), (() => {
        XJ((() => JJ))
      }))
    }

    function qJ(JJ) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => ZJ(1599))).then((cJ => {
        let {
          prepareForUnloadWithoutConfirmation: ZJ
        } = cJ;
        try {
          ZJ()
        } catch (FJ) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", FJ), window.onbeforeunload = null
        }
        JJ()
      }), (() => {
        window.onbeforeunload = null, JJ()
      })) : JJ()
    }
  },
  4448: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      return UJ(JJ, cJ)
    }

    function UJ(JJ, cJ) {
      if (JJ === cJ) return !0;
      if ("object" !== typeof JJ || "object" !== typeof cJ || null === JJ || null === cJ || Array.isArray(JJ) !== Array.isArray(cJ)) return !1;
      const ZJ = JJ,
        FJ = cJ,
        eJ = Object.keys(ZJ);
      return eJ.length === Object.keys(FJ).length && eJ.every((JJ => Object.prototype.hasOwnProperty.call(FJ, JJ) && UJ(ZJ[JJ], FJ[JJ])))
    }
    ZJ.d(cJ, {
      b: () => FJ
    })
  },
  39697: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => VJ,
      f: () => QJ,
      j: () => fJ,
      m: () => GJ
    });
    var FJ = ZJ(4064),
      UJ = ZJ(3122),
      eJ = ZJ(38009),
      XJ = ZJ(38019),
      AJ = ZJ(2538),
      qJ = ZJ(39597),
      jJ = ZJ(39602);
    const YJ = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      hJ = 3,
      DJ = [500, 1500];

    function sJ(JJ) {
      const cJ = new URL(JJ);
      return {
        secure: "https:" === cJ.protocol || "wss:" === cJ.protocol,
        host: cJ.host,
        pathname: cJ.pathname.replace(/\/+$/, ""),
        search: cJ.searchParams.toString()
      }
    }

    function nJ(JJ, cJ, ZJ) {
      const {
        secure: FJ,
        host: UJ,
        pathname: eJ,
        search: XJ
      } = sJ(JJ);
      return `${FJ?"https":"http"}://${UJ}${eJ}/matchmake/${cJ}/${encodeURIComponent(ZJ)}${XJ?`?${XJ}`:""}`
    }

    function GJ(JJ, cJ) {
      var ZJ;
      const FJ = null !== (ZJ = cJ.protocol) && void 0 !== ZJ ? ZJ : "ws";
      if ("ws" !== FJ) throw new Error(`seat reservation asks for the ${FJ} transport`);
      const {
        secure: UJ,
        host: eJ,
        pathname: XJ,
        search: AJ
      } = sJ(JJ), qJ = new URLSearchParams(AJ);
      qJ.append("sessionId", cJ.sessionId), cJ.reconnectionToken && qJ.append("reconnectionToken", cJ.reconnectionToken);
      return `${UJ?"wss":"ws"}://${cJ.room.publicAddress||`${eJ}${XJ}`}/${cJ.room.processId}/${cJ.room.roomId}?${qJ.toString()}`
    }
    async function fJ(JJ, cJ, ZJ) {
      var qJ;
      let YJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const sJ = null !== (qJ = YJ.sleep) && void 0 !== qJ ? qJ : FJ.b,
        GJ = new UJ.b(YJ.signal),
        fJ = new AJ.d(XJ.d, (() => {
          (0, UJ.i)(GJ.controller, new XJ.h)
        })),
        {
          signal: mJ
        } = GJ;
      try {
        return await (0, eJ.f)((() => async function(JJ, cJ, ZJ, FJ) {
          var eJ;
          const {
            signal: XJ,
            sleep: AJ
          } = FJ, qJ = nJ(JJ, "joinOrCreate", cJ), YJ = JSON.stringify(ZJ);
          let sJ = null;
          for (let nJ = 0; nJ < hJ; nJ++) {
            var GJ;
            if (nJ > 0) await AJ(null !== (GJ = DJ[nJ - 1]) && void 0 !== GJ ? GJ : 1500, XJ);
            let JJ;
            (0, UJ.l)(XJ);
            try {
              JJ = await rJ(qJ, YJ, FJ)
            } catch (fJ) {
              (0, UJ.l)(XJ), sJ = xJ(fJ);
              continue
            }
            const {
              response: cJ,
              answer: ZJ,
              refusal: eJ,
              lost: hJ
            } = JJ;
            if (null === hJ) {
              if (null !== eJ) throw vJ(eJ, ZJ);
              if (cJ.ok && null !== ZJ && KJ(ZJ)) return ZJ;
              sJ = new jJ.n(`seat request answered HTTP ${cJ.status}${null===ZJ?" without JSON":" without a seat"}`, !1)
            } else sJ = xJ(hJ.error)
          }
          throw null !== (eJ = sJ) && void 0 !== eJ ? eJ : new jJ.n("seat request made no attempt", !1)
        }(JJ, cJ, ZJ, {
          ...YJ,
          signal: mJ,
          sleep: sJ
        })), mJ, sJ)
      } finally {
        fJ.stop(), GJ.unfollow()
      }
    }

    function xJ(JJ) {
      return new jJ.n(JJ instanceof Error ? JJ.message : String(JJ), !0, JJ)
    }
    async function rJ(JJ, cJ, ZJ) {
      var FJ;
      const {
        signal: eJ
      } = ZJ, XJ = null !== (FJ = ZJ.fetch) && void 0 !== FJ ? FJ : fetch, AJ = await XJ(JJ, {
        method: "POST",
        headers: {
          ...YJ,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: cJ,
        credentials: "include",
        signal: eJ
      }), {
        answer: qJ,
        lost: jJ
      } = await async function(JJ) {
        try {
          const cJ = await JJ.json();
          return {
            answer: "object" === typeof cJ && null !== cJ ? cJ : null,
            lost: null
          }
        } catch (cJ) {
          return {
            answer: null,
            lost: cJ instanceof SyntaxError ? null : {
              error: cJ
            }
          }
        }
      }(AJ), hJ = null !== qJ && "string" === typeof qJ.error ? qJ.error : null;
      var DJ;
      null !== hJ && (null === (DJ = ZJ.onRefusal) || void 0 === DJ || DJ.call(ZJ));
      return (0, UJ.l)(eJ), {
        response: AJ,
        answer: qJ,
        refusal: hJ,
        lost: jJ
      }
    }

    function vJ(JJ, cJ) {
      return new jJ.i(JJ, "number" === typeof(null === cJ || void 0 === cJ ? void 0 : cJ.code) ? cJ.code : 0, (0, qJ.o)(JJ).text)
    }
    class mJ extends Error {
      constructor(JJ, cJ) {
        super(JJ), this.code = cJ, this.name = "SeatHttpError"
      }
    }
    async function QJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: UJ,
        answer: eJ,
        refusal: XJ,
        lost: AJ
      } = await rJ(nJ(JJ, "reconnect", cJ), JSON.stringify({
        reconnectionToken: ZJ
      }), FJ);
      if (null !== AJ) throw AJ.error;
      if (!UJ.ok) {
        const JJ = null !== eJ && "number" === typeof eJ.code && 0 !== eJ.code ? eJ.code : UJ.status;
        throw new mJ(`the seat's reconnect was refused: ${null!==XJ&&void 0!==XJ?XJ:`HTTP ${UJ.status}`}`, JJ)
      }
      if (null !== XJ) throw vJ(XJ, eJ);
      if (null === eJ || !KJ(eJ)) throw new Error("the seat's reconnect answered " + (null === eJ ? "without JSON" : "without a seat"));
      return {
        ...eJ,
        reconnectionToken: ZJ
      }
    }
    const EJ = 10;

    function VJ(JJ) {
      if (JJ.byteLength < 2 || JJ[0] !== EJ) return null;
      const cJ = 2 + JJ[1];
      return cJ > JJ.byteLength ? null : (new TextDecoder).decode(JJ.subarray(2, cJ))
    }

    function KJ(JJ) {
      const cJ = JJ.room;
      return "string" === typeof JJ.sessionId && "object" === typeof cJ && null !== cJ && "string" === typeof cJ.roomId && "string" === typeof cJ.processId && "string" === typeof cJ.name
    }
  },
  39368: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => VJ,
      C: () => bJ,
      E: () => mJ,
      I: () => QJ,
      M: () => fJ,
      Q: () => SJ,
      U: () => WJ,
      Y: () => nJ,
      ab: () => HJ,
      bb: () => rJ,
      d: () => UJ,
      eb: () => xJ,
      g: () => gJ,
      hb: () => vJ,
      ib: () => EJ,
      j: () => wJ,
      k: () => sJ,
      m: () => GJ,
      q: () => MJ,
      r: () => KJ,
      s: () => IJ,
      w: () => yJ
    });
    var FJ = ZJ(2505);
    const UJ = {
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
      UpdateNameTag: 53
    };

    function eJ(JJ, cJ) {
      return !ArrayBuffer.isView(JJ) || JJ instanceof DataView ? Array.isArray(JJ) ? JJ.map((JJ => cJ(JJ))) : JJ : Array.from(JJ, (JJ => cJ(JJ)))
    }

    function XJ(JJ) {
      if ("string" !== typeof JJ) return JJ;
      for (let cJ = 0; cJ < JJ.length; cJ++) {
        const ZJ = JJ.charCodeAt(cJ);
        if (ZJ >= 55296 && ZJ <= 57343) return qJ.decode(AJ.encode(JJ))
      }
      return JJ
    }
    const AJ = new TextEncoder,
      qJ = new TextDecoder;

    function jJ(JJ) {
      return JJ
    }
    let YJ;

    function hJ(JJ) {
      return null === JJ || "object" !== typeof JJ ? JJ : [XJ(JJ.XY), XJ(JJ.AY)]
    }

    function DJ(JJ) {
      return null === JJ || "object" !== typeof JJ ? JJ : [eJ(JJ.JZ, jJ), eJ(JJ.JX, jJ)]
    }

    function sJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.JY), XJ(cJ.cY)];
      var cJ
    }

    function nJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [cJ.id, cJ.vY];
      var cJ
    }

    function GJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [cJ.JJ, XJ(cJ.cJ), cJ.ZJ, XJ(cJ.eJ), cJ.jJ, cJ.YJ, cJ.JA, XJ(cJ.cA), XJ(cJ.ZA)];
      var cJ
    }

    function fJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [eJ(cJ.QA, jJ), cJ.EA];
      var cJ
    }

    function xJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [eJ(cJ.DY, (JJ => XJ(JJ))), XJ(cJ.sY), cJ.GY];
      var cJ
    }

    function rJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [eJ(cJ.Tj, jJ), XJ(cJ.Cj), cJ.uj];
      var cJ
    }

    function vJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.VF), XJ(cJ.KF)];
      var cJ
    }

    function mJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.sj)];
      var cJ
    }

    function QJ(JJ) {
      return XJ(JJ)
    }

    function EJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.EY), XJ(cJ.VY), XJ(cJ.XY), XJ(cJ.AY)];
      var cJ
    }

    function VJ(JJ) {
      return hJ(JJ)
    }

    function KJ(JJ) {
      return hJ(JJ)
    }

    function yJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.Dj)];
      var cJ
    }

    function SJ(JJ) {
      return JJ
    }

    function IJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.IY), XJ(cJ.MY)];
      var cJ
    }

    function MJ(JJ) {
      return XJ(JJ)
    }

    function bJ(JJ) {
      return DJ(JJ)
    }

    function wJ(JJ) {
      return DJ(JJ)
    }

    function WJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [XJ(cJ.YX)];
      var cJ
    }

    function gJ(JJ) {
      return (YJ ??= (0, FJ.b)().map((JJ => JJ.name)), YJ).map((cJ => {
        return "string" === typeof(ZJ = JJ[cJ]) ? XJ(ZJ) : eJ(ZJ, jJ);
        var ZJ
      }))
    }

    function HJ(JJ) {
      return null === (cJ = JJ) || "object" !== typeof cJ ? cJ : [cJ.Gj, cJ.fj, cJ.xj];
      var cJ
    }
  },
  39806: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ
    });
    var FJ = ZJ(39815),
      UJ = ZJ(39803);
    const eJ = new class {
      constructor(JJ) {
        this.pack = JJ, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, JJ.onWanted((() => {
          this.release()
        }))
      }
      setGame(JJ) {
        if (void 0 === JJ && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const cJ = this.inGame();
        if (this.game = JJ, this.update(), this.inGame() !== cJ)
          for (const ZJ of this.gameListeners) ZJ()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(JJ) {
        return this.gameListeners.add(JJ), () => {
          this.gameListeners.delete(JJ)
        }
      }
      unwantedLeave(JJ) {
        JJ && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(JJ) {
        null !== JJ && JJ === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const JJ = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, JJ && this.setGame(void 0)
      }
      setSettled(JJ) {
        this.settle = JJ, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, FJ.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(UJ.c)
  },
  39595: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      followPageUiPack: () => Xj,
      packForGame: () => ej,
      playWasmGame: () => rj,
      prefetchWasmPreviews: () => vA,
      setGamePackConfirm: () => Mq,
      startWasmPlay: () => hj,
      startWasmPreviews: () => rA
    });
    var FJ = ZJ(157),
      UJ = ZJ(1144),
      eJ = ZJ(143),
      XJ = ZJ(38033),
      AJ = ZJ(1703),
      qJ = ZJ(17),
      jJ = ZJ(4092),
      YJ = ZJ(1201),
      hJ = ZJ(1213),
      DJ = ZJ(38192),
      sJ = ZJ(38198),
      nJ = ZJ(38108),
      GJ = ZJ(35554),
      fJ = ZJ(38009),
      xJ = ZJ(38019),
      rJ = ZJ(39452),
      vJ = ZJ(4176),
      mJ = ZJ(39360),
      QJ = ZJ(39431),
      EJ = ZJ(39368);
    const VJ = {
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
        lobbyLeaderboardRows: !0
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
        buyShopItem: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0
      }
    };

    function KJ(JJ) {
      const cJ = {
        ...QJ.c[JJ]
      };
      for (const ZJ of Object.keys(VJ[JJ])) delete cJ[ZJ];
      return cJ
    }

    function yJ() {
      var JJ, cJ;
      return null === (JJ = null === (cJ = (0, mJ.j)()) || void 0 === cJ ? void 0 : cJ.localPlayerAlive()) || void 0 === JJ || JJ
    }

    function SJ() {
      var JJ, cJ;
      return null !== (JJ = null === (cJ = (0, mJ.j)()) || void 0 === cJ ? void 0 : cJ.localDeaths()) && void 0 !== JJ ? JJ : null
    }
    const IJ = {
        current: yJ,
        watch: JJ => {
          let cJ = yJ(),
            ZJ = SJ();
          return (0, vJ.w)((() => {
            const FJ = yJ(),
              UJ = SJ(),
              eJ = null !== UJ && null !== ZJ && UJ !== ZJ;
            ZJ = UJ, eJ ? (cJ || JJ(!0), JJ(!1), FJ && JJ(!0), cJ = FJ) : FJ !== cJ && (cJ = FJ, JJ(FJ))
          }))
        }
      },
      MJ = {
        states: {
          ...KJ("states"),
          localPlayerAlive: IJ
        },
        events: {
          ...KJ("events"),
          localPlayerAliveSet: {
            watch: IJ.watch
          }
        },
        commands: {
          ...KJ("commands"),
          respawn: () => {
            var JJ;
            null === (JJ = (0, mJ.j)()) || void 0 === JJ || JJ.respawn()
          },
          playEmote: JJ => {
            var cJ;
            null === (cJ = (0, mJ.j)()) || void 0 === cJ || cJ.send(EJ.d.PlayEmote, (0, EJ.E)({
              sj: JJ
            }))
          },
          applyTemporaryThirdPerson: JJ => {
            var cJ;
            let {
              durationMs: ZJ
            } = JJ;
            null === (cJ = (0, mJ.j)()) || void 0 === cJ || cJ.thirdPersonFor(ZJ)
          },
          bindCustomButtonKeys: JJ => {
            var cJ;
            null === (cJ = (0, mJ.j)()) || void 0 === cJ || cJ.bindCustomButtonKeys(JJ)
          },
          pressCustomButton: JJ => {
            var cJ;
            let {
              id: ZJ,
              down: FJ
            } = JJ;
            null === (cJ = (0, mJ.j)()) || void 0 === cJ || cJ.pressCustomButton(ZJ, FJ)
          },
          setLookSensitivity: () => {},
          wakeUp: JJ => {
            const cJ = (0, EJ.U)({
                YX: JJ
              }),
              ZJ = () => {
                const JJ = (0, mJ.j)();
                return !(null !== JJ && void 0 !== JJ && JJ.isSessionLive) || JJ.send(EJ.d.StopSleeping, cJ)
              };
            if (!ZJ()) {
              const JJ = (0, vJ.w)((() => {
                ZJ() && JJ()
              }))
            }
          },
          setCameraZoom: JJ => {
            var cJ;
            null === (cJ = (0, mJ.j)()) || void 0 === cJ || cJ.setCameraZoom(JJ)
          }
        },
        queries: KJ("queries"),
        lookups: {
          ...KJ("lookups"),
          cameraZoom: () => {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = (0, mJ.j)()) || void 0 === cJ ? void 0 : cJ.cameraZoom()) && void 0 !== JJ ? JJ : 0
          }
        }
      };
    var bJ = ZJ(39597),
      wJ = ZJ(39602),
      WJ = ZJ(39607),
      gJ = ZJ(39630),
      HJ = ZJ(1160),
      PJ = ZJ(87),
      kJ = ZJ(3935),
      pJ = ZJ(3212),
      dJ = ZJ(1064);
    const zJ = {
      bX: () => (0, HJ.b)(),
      inbuiltOverwritten: () => kJ.e,
      reflectApplyHit: () => dJ.b,
      definerHit: () => PJ.currentUrl.c,
      emitReplaced: () => (0, qJ.d)(),
      confirmMesh: () => (0, pJ.e)()
    };
    var NJ = ZJ(39615),
      OJ = ZJ(39655);
    var TJ = ZJ(13),
      CJ = ZJ(1712),
      uJ = ZJ(1756),
      iJ = ZJ(1537),
      RJ = ZJ(1811),
      LJ = ZJ(1086),
      aJ = ZJ(1151),
      BJ = ZJ(39580);

    function tJ() {
      return aJ.e.get().getCurrentLanguageCode()
    }

    function oJ(JJ) {
      const cJ = () => {
        JJ({
          translate: (JJ, cJ) => (0, LJ.w)(tJ(), JJ, cJ),
          keyBindingText: JJ => {
            const cJ = (0, uJ.y)(JJ, TJ.d.get("isTouchScreen"));
            return null !== cJ ? (0, LJ.z)(tJ(), cJ.translationKey, cJ.params) : (0, uJ.r)((0, uJ.u)(JJ))
          },
          isFriend: RJ.e,
          hiddenNames: CJ.d.shown,
          loadsFontRest: (0, BJ.b)(tJ())
        })
      };
      let ZJ = !1;
      const FJ = () => {
          const JJ = tJ();
          (0, LJ.o)(JJ).then((() => {
            ZJ || JJ !== tJ() || cJ()
          }))
        },
        UJ = () => iJ.b.getSocialState().friends.map((JJ => JJ.name.toLowerCase())).sort().join(" ");
      let eJ = UJ();
      cJ(), FJ();
      const XJ = [(0, aJ.h)((() => {
        cJ(), FJ()
      })), (0, qJ.j)("customBindingsChanged", cJ), (0, qJ.j)("appManagerUpdated|isTouchScreen", cJ), (0, RJ.d)((() => {
        const JJ = UJ();
        JJ !== eJ && (eJ = JJ, cJ())
      })), CJ.d.subscribe(cJ)];
      return () => {
        ZJ = !0;
        for (const JJ of XJ) JJ()
      }
    }
    var lJ = ZJ(538),
      Jc = ZJ(889),
      cc = ZJ(1734),
      Zc = ZJ(227),
      Fc = ZJ(3178),
      Uc = ZJ(35441),
      ec = ZJ(3183),
      Xc = ZJ(37703),
      Ac = ZJ(5971),
      qc = ZJ(39516),
      jc = ZJ(547),
      Yc = ZJ(1725),
      hc = ZJ(3218),
      Dc = ZJ(2769);
    let sc = null;
    var nc = ZJ(1098),
      Gc = ZJ(3122),
      fc = ZJ(38113),
      xc = ZJ(2936),
      rc = ZJ(41),
      vc = ZJ(225),
      mc = ZJ(223),
      Qc = ZJ(39478),
      Ec = ZJ(4182);
    class Vc {
      constructor(JJ, cJ) {
        this.showView = JJ, this.holdForAd = cJ
      }
      pointerUnlockRequestsChanged() {
        (0, Qc.C)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, Qc.q)())
        }]
      }
      setGameViewShown(JJ) {
        this.showView(JJ)
      }
      videoAdHold(JJ, cJ) {
        this.holdForAd(JJ, cJ)
      }
    }
    class Kc {
      cn(JJ) {
        ! function(JJ) {
          if (null !== (0, hJ.e)().websocketUrl) try {
            (0, vJ.F)().leaveGame(JJ)
          } finally {
            (0, hJ.o)({
              websocketUrl: null
            })
          }
        }(JJ)
      }
      isReplay() {
        return !1
      }
    }
    class yc {
      watchFrameStarts(JJ) {
        return (0, vJ.p)(JJ)
      }
      watchFrames(JJ) {
        return (0, vJ.o)(JJ)
      }
      watchTicks(JJ) {
        return (0, vJ.w)(JJ)
      }
    }
    var Sc = ZJ(1192),
      Ic = ZJ(39659);

    function Mc(JJ) {
      return JJ >= 0 ? Math.min(1, JJ) : 0
    }

    function bc(JJ, cJ) {
      const {
        fade: ZJ
      } = JJ;
      return null === ZJ || cJ - ZJ.at >= ZJ.ms ? JJ.volume : ZJ.from + (JJ.volume - ZJ.from) * Math.max(0, (cJ - ZJ.at) / ZJ.ms)
    }

    function wc(JJ) {
      const cJ = Object.entries(JJ),
        ZJ = new Uint32Array(cJ.length);
      let FJ = 0;
      for (const [XJ, [, AJ]] of cJ.entries()) ZJ[XJ] = AJ.length, FJ += AJ.length;
      const UJ = new Float64Array(3 * FJ);
      let eJ = 0;
      for (const [, XJ] of cJ)
        for (const JJ of XJ) UJ.set(JJ, eJ), eJ += 3;
      return {
        blocks: cJ.map((JJ => {
          let [cJ] = JJ;
          return cJ
        })).join("\0"),
        counts: ZJ,
        values: UJ
      }
    }
    class Wc {
      constructor(JJ, cJ) {
        this.core = JJ, this.warn = cJ, this.latest = 0
      }
      async feed() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gc;
        const cJ = ++this.latest;
        let ZJ;
        try {
          ZJ = await JJ()
        } catch (FJ) {
          return void(this.core.isStopped || cJ !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", FJ))
        }
        cJ === this.latest && (this.core.setBlockColours(ZJ) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function gc() {
      return wc((await ZJ.e(187).then((() => ZJ(33439)))).averageColors)
    }
    var Hc = ZJ(4189),
      Pc = ZJ(4198),
      kc = ZJ(39417),
      pc = ZJ(39665),
      dc = ZJ(39567),
      zc = ZJ(528),
      Nc = ZJ(36059),
      Oc = ZJ(523),
      Tc = ZJ(235),
      Cc = ZJ(39537);
    const uc = [3e4, 12e4, 3e5];
    class ic extends Error {}
    const Rc = {
      mobTypes: zc.g,
      vehicleTypes: Nc.e,
      mobAiStates: zc.e,
      playerPoses: Oc.u
    };
    var Lc = ZJ(39529),
      ac = ZJ(39672),
      Bc = ZJ(39682),
      tc = ZJ(39688),
      oc = ZJ(2951),
      lc = ZJ(37995),
      JZ = ZJ(4217),
      cZ = ZJ(2146);
    const ZZ = cZ.D.KeysDisabled | cZ.D.LookFrozen | cZ.D.ClicksSuppressed,
      FZ = oc.f;
    var UZ = (0, tc.b)("resumingConn");
    class eZ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = JJ, this.now = cJ, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, UZ, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new lc.e({
          reconnect: JJ => this.reconnect(JJ),
          isLive: () => JJ.isLive(),
          onReconnected: cJ => {
            this.landed = cJ, JJ.onReconnected(cJ), this.landIfResumed()
          },
          onGaveUp: (cJ, ZJ) => {
            this.abortAttempt(), JJ.onGaveUp(cJ, ZJ)
          },
          freeze: cJ => {
            JJ.HV(cJ), (0, JZ.g)(ZZ, cJ ? ZZ : 0, "reconnectFreeze")
          },
          releaseSeat: JJ => {
            this.releaseSeat(JJ)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Bc.d)(this, UZ)[UZ]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(JJ) {
        let {
          conn: cJ,
          graceMs: ZJ,
          sessionBased: FJ,
          replayOffer: UJ
        } = JJ;
        this.session.onInitialInfo(ZJ, FJ), this.isResuming() && (this.initialInfoConn = cJ, this.initialInfoOffer = UJ, this.landIfResumed())
      }
      onResumeComplete(JJ) {
        0 !== JJ && (JJ === (0, Bc.d)(this, UZ)[UZ] ? ((0, Bc.d)(this, UZ)[UZ] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = JJ))
      }
      onDropped(JJ) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Bc.d)(this, UZ)[UZ] = 0, this.session.onConnectionLost(JJ)
      }
      cn() {
        this.session.cn(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Bc.d)(this, UZ)[UZ] = 0, this.session.end()
      }
      reconnect(JJ) {
        const cJ = this.attempt;
        if (null !== cJ && this.awaitingJoinRoom(cJ)) return cJ.result;
        this.abortAttempt();
        const ZJ = new AbortController,
          FJ = this.drops,
          UJ = {
            attachedAt: null
          },
          eJ = this.shell.reconnect(JJ, ZJ.signal, (() => {
            UJ.attachedAt = this.now()
          })).then((JJ => {
            if (this.clearAttempt(XJ), this.drops !== FJ) throw new Error("the resumed room dropped before its attempt settled");
            return JJ
          }), (JJ => {
            throw this.clearAttempt(XJ), JJ
          })),
          XJ = {
            abort: ZJ,
            socket: UJ,
            result: eJ
          };
        return this.attempt = XJ, eJ
      }
      clearAttempt(JJ) {
        this.attempt === JJ && (this.attempt = null)
      }
      abortAttempt() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const cJ = this.attempt;
        this.attempt = null, null === cJ || void 0 === cJ || cJ.abort.abort(JJ)
      }
      awaitingJoinRoom(JJ) {
        const cJ = JJ.socket.attachedAt;
        return null !== cJ && this.now() - cJ < FZ
      }
      releaseSeat(JJ) {
        const cJ = this.attempt,
          ZJ = null !== cJ && this.awaitingJoinRoom(cJ);
        this.abortAttempt(new wJ.m), ZJ || this.shell.releaseSeat(JJ)
      }
      landIfResumed() {
        const JJ = this.landed;
        if (null !== JJ && JJ.conn === this.initialInfoConn) {
          const cJ = this.initialInfoOffer && this.completedEarlyConn !== JJ.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !cJ) return void this.session.onResumed();
          (0, Bc.d)(this, UZ)[UZ] = JJ.conn, this.session.onResuming()
        }
      }
    }
    var XZ = ZJ(38e3),
      AZ = ZJ(39697),
      qZ = ZJ(39642),
      jZ = ZJ(39639),
      YZ = ZJ(4441),
      hZ = ZJ(8546),
      DZ = ZJ(2753),
      sZ = ZJ(39487),
      nZ = ZJ(551),
      GZ = ZJ(3926),
      fZ = ZJ(29),
      xZ = ZJ(39705),
      rZ = ZJ(3853),
      vZ = ZJ(2153),
      mZ = ZJ(1528),
      QZ = ZJ(1560),
      EZ = ZJ(1184),
      VZ = ZJ(93),
      KZ = ZJ(2436),
      yZ = ZJ(2161),
      SZ = ZJ(4210);
    const IZ = new Set([Hc.sb.KeyDown, Hc.sb.MouseMove, Hc.sb.MouseDown, Hc.sb.Wheel, Hc.sb.TouchStart, Hc.sb.TouchMove]);

    function MZ(JJ) {
      return (JJ.shiftKey ? Hc.Bb.Shift : 0) | (JJ.ctrlKey ? Hc.Bb.Ctrl : 0) | (JJ.altKey ? Hc.Bb.Alt : 0) | (JJ.metaKey ? Hc.Bb.Meta : 0) | ("repeat" in JJ && JJ.repeat ? Hc.Bb.Repeat : 0) | (JJ.isTrusted ? 0 : Hc.Bb.Untrusted)
    }

    function bZ(JJ) {
      return "touchOnly" !== (0, VZ.e)() && "function" === typeof JJ.requestPointerLock
    }

    function wZ(JJ) {
      return 0 === JJ.button ? JJ.altKey ? SZ.l["Alt+Left Click"] : SZ.l.Mouse1 : 1 === JJ.button ? SZ.l.Mouse2 : SZ.l.Mouse3
    }
    const WZ = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      gZ = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      HZ = 32768,
      PZ = 1;

    function kZ(JJ) {
      return Math.min(Math.max(Math.round(JJ), 0), 65535)
    }

    function pZ(JJ, cJ, ZJ) {
      const FJ = [],
        UJ = (JJ, cJ, ZJ, UJ) => {
          const eJ = JJ => {
            (0, QZ.q)(JJ) || ZJ(JJ)
          };
          JJ.addEventListener(cJ, eJ, UJ), FJ.push((() => {
            JJ.removeEventListener(cJ, eJ, UJ)
          }))
        },
        eJ = {
          capture: !0,
          passive: !0
        },
        XJ = (JJ, ZJ, FJ, UJ, eJ) => (!(0, yZ.b)() || !IZ.has(JJ)) && (cJ(JJ, ZJ, FJ, UJ, eJ), !0),
        AJ = () => document.pointerLockElement === JJ,
        qJ = (0, KZ.c)(),
        jJ = JJ => {
          JJ.ctrlKey && ZJ.ctrlCombosAreGames() && !(0, JZ.e)(JJ.target) && JJ.preventDefault()
        },
        YJ = (JJ, FJ, UJ) => {
          ZJ.inspect(JJ, FJ, !1), cJ(Hc.sb.KeyUp, FJ, 0, 0, (0, vZ.u)(UJ, JJ.timeStamp)), ZJ.keyReleased(FJ)
        },
        hJ = new Map,
        DJ = (JJ, cJ, ZJ) => JJ[ZJ] || ("AltRight" === cJ || "ControlLeft" === cJ) && JJ.getModifierState("AltGraph"),
        sJ = new Map,
        nJ = () => {
          hJ.clear(), sJ.clear()
        },
        GJ = JJ => {
          if (document.hasFocus())
            for (const [cJ, ZJ] of sJ) sJ.delete(cJ), DJ(JJ, cJ, ZJ) || (hJ.delete(cJ), YJ(JJ, SZ.l[cJ], MZ(JJ)))
        };
      JJ.tabIndex = -1;
      let fJ = 0,
        xJ = 0;
      const rJ = () => {
        const cJ = JJ.getBoundingClientRect();
        fJ = cJ.left, xJ = cJ.top
      };
      let vJ = "mouse";
      const mJ = () => !AJ() && ("mouse" === vJ || !ZJ.touchUiShown()),
        QJ = (JJ, cJ, ZJ) => {
          const FJ = (kZ(JJ.clientX - fJ) | kZ(JJ.clientY - xJ) << 16) >>> 0;
          XJ(Hc.sb.MouseMove, Hc.Cb.Point, cJ, ZJ, FJ)
        };
      let EJ = !1,
        VJ = 0;
      const KJ = () => {
        EJ && (EJ = !1, ZJ.viewShown() && (0, Qc.S)())
      };
      FJ.push((() => {
        clearTimeout(VJ)
      })), UJ(window, "keydown", (JJ => {
        "Escape" === JJ.key ? (0, Qc.E)(!0) : JJ.repeat || (0, JZ.e)(JJ.target) || (EJ = !0, clearTimeout(VJ), VJ = window.setTimeout(KJ, 0))
      }), eJ), UJ(window, "keydown", (JJ => {
        KJ(), jJ(JJ), GJ(JJ);
        const cJ = SZ.l[JJ.code];
        if ("number" !== typeof cJ || !ZJ.viewShown()) return;
        const FJ = (0, JZ.e)(JJ.target);
        FJ || !ZJ.prevents(cJ) && !WZ.has(JJ.code) || JJ.preventDefault(), JJ.repeat || ZJ.inspect(JJ, cJ, !0), XJ(Hc.sb.KeyDown, cJ, 0, 0, (0, vZ.u)(MZ(JJ), JJ.timeStamp)) && hJ.set(JJ.code, cJ), FJ || ZJ.keyPressed(cJ)
      }), {
        capture: !1,
        passive: !1
      }), UJ(window, "keyup", (JJ => {
        "Escape" === JJ.key && (0, Qc.E)(!1), jJ(JJ), hJ.delete(JJ.code), sJ.delete(JJ.code), GJ(JJ);
        const cJ = SZ.l[JJ.code];
        "number" === typeof cJ && YJ(JJ, cJ, MZ(JJ))
      }), {
        capture: !0,
        passive: !1
      }), UJ(window, "mousemove", (JJ => {
        "mouse" === vJ && mJ() ? QJ(JJ, JJ.movementX, JJ.movementY) : AJ() ? XJ(Hc.sb.MouseMove, Hc.Cb.Stamped, JJ.movementX, JJ.movementY, (0, vZ.u)(0, JJ.timeStamp)) : XJ(Hc.sb.MouseMove, 0, JJ.movementX, JJ.movementY, 0)
      }), eJ);
      let yJ = 0,
        SJ = 0;
      const IJ = [];
      let MJ = !1,
        bJ = !1;
      UJ(JJ, "mousedown", (JJ => {
        if ((0, yZ.b)()) return;
        GJ(JJ);
        const FJ = 1 << JJ.button;
        if (!AJ() && (0, Qc.O)() && (0, Qc.i)() && (bJ = !0, !MJ)) return void(yJ |= FJ);
        yJ &= ~FJ;
        const UJ = JJ.button <= 2 ? wZ(JJ) : void 0;
        void 0 !== UJ && (IJ[JJ.button] = UJ, ZJ.inspect(JJ, UJ, !0)), mJ() && QJ(JJ, 0, 0), cJ(Hc.sb.MouseDown, JJ.button, JJ.clientX, JJ.clientY, (0, vZ.u)(MZ(JJ), JJ.timeStamp)), SJ |= FJ, void 0 !== UJ && ZJ.keyPressed(UJ)
      }), eJ), UJ(window, "mouseup", (JJ => {
        var FJ;
        GJ(JJ);
        const UJ = 1 << JJ.button,
          eJ = 0 !== (yJ & ~SJ & UJ);
        if (yJ &= ~UJ, SJ &= ~UJ, eJ) return;
        const XJ = JJ.button <= 2 ? null !== (FJ = IJ[JJ.button]) && void 0 !== FJ ? FJ : wZ(JJ) : void 0;
        void 0 !== XJ && ZJ.inspect(JJ, XJ, !1), cJ(Hc.sb.MouseUp, JJ.button, JJ.clientX, JJ.clientY, (0, vZ.u)(MZ(JJ), JJ.timeStamp)), void 0 !== XJ && ZJ.keyReleased(XJ)
      }), eJ), UJ(JJ, "contextmenu", (JJ => {
        JJ.preventDefault()
      }), {
        passive: !1
      });
      const wJ = JJ => {
        (AJ() || (0, Qc.p)() && (0, EZ.j)()) && (JJ.ctrlKey || qJ && !document.fullscreenElement) && JJ.preventDefault()
      };
      UJ(JJ, "wheel", (JJ => {
        wJ(JJ), GJ(JJ), XJ(Hc.sb.Wheel, JJ.deltaMode, JJ.deltaX, JJ.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const WJ = {
          capture: !0,
          passive: !1
        },
        gJ = JJ => {
          JJ ? window.addEventListener("wheel", wJ, WJ) : window.removeEventListener("wheel", wJ, WJ)
        };
      gJ((0, Qc.p)()), FJ.push((0, Qc.w)(gJ)), FJ.push((() => {
        gJ(!1)
      }));
      const HJ = new Map,
        PJ = new Set,
        kJ = JJ => {
          const cJ = "stylus" === JJ.touchType;
          for (const ZJ of HJ.values())
            if (!ZJ.touched && (cJ || Math.abs(JJ.clientX - ZJ.x) <= PZ && Math.abs(JJ.clientY - ZJ.y) <= PZ)) return ZJ.touched = !0, !0;
          return !1
        },
        pJ = JJ => 32767 & JJ,
        dJ = new Set,
        zJ = JJ => ZJ => {
          const FJ = (0, vZ.u)(MZ(ZJ), ZJ.timeStamp);
          JJ !== Hc.sb.TouchStart && JJ !== Hc.sb.TouchMove || ((JJ, ZJ) => {
            const FJ = JJ.touches;
            if (FJ)
              for (const UJ of dJ) {
                let JJ = !1;
                for (let cJ = 0; cJ < FJ.length && !JJ; cJ++) JJ = pJ(FJ[cJ].identifier) === UJ;
                JJ || (dJ.delete(UJ), cJ(Hc.sb.TouchCancel, UJ, 0, 0, ZJ))
              }
          })(ZJ, FJ);
          const UJ = ZJ.changedTouches;
          for (let cJ = 0; cJ < UJ.length; cJ++) {
            const ZJ = UJ[cJ];
            if (JJ === Hc.sb.TouchStart && kJ(ZJ) && PJ.add(ZJ.identifier), PJ.has(ZJ.identifier)) {
              JJ !== Hc.sb.TouchEnd && JJ !== Hc.sb.TouchCancel || PJ.delete(ZJ.identifier);
              continue
            }
            const eJ = pJ(ZJ.identifier),
              AJ = XJ(JJ, eJ, ZJ.clientX, ZJ.clientY, FJ);
            JJ === Hc.sb.TouchStart ? AJ && dJ.add(eJ) : JJ !== Hc.sb.TouchMove && dJ.delete(eJ)
          }
        },
        NJ = zJ(Hc.sb.TouchStart);
      UJ(JJ, "touchstart", (JJ => {
        JJ.preventDefault(), (0, yZ.b)() || (ZJ.touchStarting(), NJ(JJ))
      }), {
        passive: !1
      }), UJ(JJ, "touchmove", zJ(Hc.sb.TouchMove), eJ), UJ(JJ, "touchend", zJ(Hc.sb.TouchEnd), eJ), UJ(JJ, "touchcancel", zJ(Hc.sb.TouchCancel), eJ);
      const OJ = JJ => HZ | 32767 & JJ,
        TJ = (JJ, cJ) => {
          XJ(JJ, OJ(cJ.pointerId), cJ.clientX, cJ.clientY, (0, vZ.u)(MZ(cJ), cJ.timeStamp))
        };
      UJ(window, "pointerdown", (cJ => {
        vJ = cJ.pointerType, "mouse" === cJ.pointerType && cJ.target !== JJ && ZJ.viewShown() && (0, Qc.W)()
      }), eJ), UJ(JJ, "pointerdown", (JJ => {
        "pen" === JJ.pointerType && 0 === JJ.button && (0, Qc.p)() && (0, EZ.j)() && (JJ.preventDefault(), (0, yZ.b)() || (HJ.set(JJ.pointerId, {
          x: JJ.clientX,
          y: JJ.clientY,
          touched: !1
        }), ZJ.touchStarting(), TJ(Hc.sb.TouchStart, JJ)))
      }), {
        passive: !1
      }), UJ(window, "pointermove", (JJ => {
        vJ = JJ.pointerType, HJ.has(JJ.pointerId) && TJ(Hc.sb.TouchMove, JJ), "mouse" !== JJ.pointerType && mJ() && QJ(JJ, 0, 0)
      }), eJ);
      const CJ = JJ => cJ => {
        HJ.delete(cJ.pointerId) && TJ(JJ, cJ)
      };
      UJ(window, "pointerup", CJ(Hc.sb.TouchEnd), eJ), UJ(window, "pointercancel", CJ(Hc.sb.TouchCancel), eJ);
      let uJ = 0;
      const iJ = () => {
          uJ = 0, rJ(), ZJ.resized()
        },
        RJ = () => {
          const JJ = ZJ.sizeCanvas();
          null !== JJ && cJ(Hc.sb.Resize, 0, JJ.cssWidth, JJ.cssHeight, (0, vZ.l)(JJ.renderScale)), rJ(), ZJ.resized(), 0 === uJ && (uJ = requestAnimationFrame(iJ))
        };
      UJ(window, "resize", RJ, eJ), FJ.push(ZJ.watchRenderScale(RJ)), FJ.push((() => {
        cancelAnimationFrame(uJ)
      })), UJ(window, "focus", (JJ => {
        JJ.isTrusted && (cJ(Hc.sb.Focus, 0, 0, 0, 0), ZJ.viewShown() && (0, Qc.W)())
      }), {
        passive: !0
      });
      const LJ = () => {
          (0, Qc.E)(!1), yJ = 0
        },
        aJ = () => {
          dJ.clear(), HJ.clear(), PJ.clear()
        };
      let BJ = 0,
        tJ = 0;
      UJ(window, "blur", (FJ => {
        LJ(), (0, Qc.m)();
        for (const JJ of hJ.keys()) {
          const cJ = gZ.get(JJ);
          void 0 !== cJ && sJ.set(JJ, cJ)
        }
        FJ.isTrusted && ((JJ => {
          for (const [ZJ, FJ] of HJ) cJ(Hc.sb.TouchCancel, OJ(ZJ), FJ.x, FJ.y, (0, vZ.u)(0, JJ));
          HJ.clear()
        })(FJ.timeStamp), cJ(Hc.sb.Blur, Hc.q.KeepTouches, 0, 0, 0)), qJ && FJ.isTrusted && (clearTimeout(tJ), tJ = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const JJ of hJ.values()) YJ(FJ, JJ, 0);
            nJ()
          }
        }), 0)), clearTimeout(BJ), BJ = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, EZ.j)() && ZJ.viewShown() && JJ.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), FJ.push((() => {
        clearTimeout(BJ), clearTimeout(tJ)
      })), UJ(window, "mousedown", (cJ => {
        qJ && cJ.isTrusted && !document.hasFocus() && (0, EZ.j)() && ZJ.viewShown() && (window.focus(), JJ.focus({
          preventScroll: !0
        }))
      }), eJ), UJ(document, "visibilitychange", (() => {
        document.hidden ? (cJ(Hc.sb.Blur, 0, 0, 0, 0), aJ()) : document.hasFocus() && cJ(Hc.sb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), FJ.push((0, yZ.f)((() => {
        LJ(), cJ(Hc.sb.Blur, Hc.q.Release, 0, 0, 0), ZJ.keysReleased(), nJ(), SJ = 0, aJ(), cJ(Hc.sb.Joystick, 0, 0, 0, 0), document.hasFocus() && cJ(Hc.sb.Focus, 0, 0, 0, 0)
      })));
      const oJ = !ZJ.canLock(),
        lJ = () => oJ && !(0, Qc.p)() ? Hc.cc.Lockless : Hc.cc.Released,
        Jc = () => {
          AJ() && (MJ = !1, bJ = !1), cJ(Hc.sb.PointerLock, AJ() ? Hc.cc.Locked : lJ(), 0, 0, 0), (0, Qc.K)(AJ())
        };
      return UJ(document, "pointerlockchange", Jc, {
        passive: !0
      }), UJ(document, "pointerlockerror", (() => {
        MJ ||= bJ, bJ = !1, (0, Qc.u)()
      }), {
        passive: !0
      }), oJ && FJ.push((0, Qc.w)((() => {
        cJ(Hc.sb.PointerLock, lJ(), 0, 0, 0)
      }))), RJ(), cJ(document.hasFocus() ? Hc.sb.Focus : Hc.sb.Blur, 0, 0, 0, 0), Jc(), () => {
        for (const JJ of FJ.splice(0)) JJ()
      }
    }
    var dZ = ZJ(39767),
      zZ = ZJ(8541),
      NZ = ZJ(8526),
      OZ = ZJ(1765);
    const TZ = new Map(SZ.c.map(((JJ, cJ) => [JJ, cJ]))),
      CZ = ["jump", "primary-fire", "alt-fire"],
      uZ = ["primary-fire", "alt-fire"];

    function iZ(JJ) {
      return `${OZ.e}${JJ}`
    }
    const RZ = ["forward", "backward", "left", "right", "sprint", "jump"];

    function LZ(JJ) {
      const cJ = [];
      for (const ZJ of JJ) {
        const JJ = "string" === typeof ZJ ? SZ.l[ZJ] : void 0;
        "number" === typeof JJ && cJ.push(JJ)
      }
      return cJ
    }
    class aZ {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [JJ, cJ] of Object.entries(SZ.e)) this.keys.set(JJ, cJ);
        this.updateKeySets()
      }
      prevents(JJ) {
        return this.preventKeys.has(JJ)
      }
      moves(JJ) {
        return this.movementKeys.has(JJ)
      }
      checks(JJ, cJ) {
        return (cJ ? this.checkedDown : this.checkedUp).has(JJ)
      }
      sync(JJ, cJ) {
        for (const [ZJ, FJ] of this.keys) {
          const UJ = JJ(iZ(ZJ)),
            eJ = Array.isArray(UJ) ? LZ(UJ) : SZ.e[ZJ];
          (eJ.length !== FJ.length || eJ.some(((JJ, cJ) => JJ !== FJ[cJ]))) && this.bind(ZJ, eJ, cJ)
        }
      }
      bind(JJ, cJ, ZJ) {
        const FJ = TZ.get(JJ);
        if (void 0 !== FJ) {
          ZJ(Hc.sb.Binding, 0, 0, 0, FJ | Hc.n.Clear << 8);
          for (const eJ of [...cJ, ...null !== (UJ = SZ.h[JJ]) && void 0 !== UJ ? UJ : []]) {
            var UJ;
            ZJ(Hc.sb.Binding, eJ, 0, 0, FJ | Hc.n.Add << 8)
          }
          this.keys.set(JJ, cJ), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const FJ of SZ.o)
          for (const cJ of null !== (JJ = this.keys.get(SZ.c[FJ])) && void 0 !== JJ ? JJ : []) {
            var JJ;
            this.preventKeys.add(cJ)
          }
        this.movementKeys.clear();
        for (const FJ of RZ)
          for (const JJ of null !== (cJ = this.keys.get(FJ)) && void 0 !== cJ ? cJ : []) {
            var cJ;
            this.movementKeys.add(JJ)
          }
        for (const [FJ, UJ] of [
            [this.checkedDown, CZ],
            [this.checkedUp, uZ]
          ]) {
          FJ.clear();
          for (const JJ of UJ)
            for (const cJ of null !== (ZJ = this.keys.get(JJ)) && void 0 !== ZJ ? ZJ : []) {
              var ZJ;
              FJ.add(cJ)
            }
        }
      }
    }
    var BZ = ZJ(4207),
      tZ = ZJ(35644);
    const oZ = "[bloxd-wasm-client]";

    function lZ() {
      return "inGame" === TJ.d.get("gameState") && !(0, mZ.o)()
    }
    let JF = null;

    function cF(JJ, cJ) {
      JF && cJ.writePendingInput() && JF.push(function(JJ, cJ) {
        let ZJ = "";
        for (const FJ of cJ) ZJ += FJ.toString(16).padStart(2, "0");
        return ZJ ? `${JJ} ${ZJ}` : String(JJ)
      }(JJ, cJ.rings.input.written()))
    }
    const ZF = [];

    function FF(JJ, cJ, ZJ, FJ) {
      JJ === Hc.T.InputAction && FJ === Hc.pb && ZF.push(cJ.getUint32(ZJ, !0))
    }
    var UF = ZJ(39775),
      eF = ZJ(1094),
      XF = ZJ(39764);
    const AF = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: eF.wasmScreens
    };

    function qF(JJ) {
      var cJ, ZJ;
      let FJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [UJ, eJ] = JJ.split(":");
      return (null !== (cJ = null === (ZJ = AF[UJ]) || void 0 === ZJ ? void 0 : ZJ[eJ]) && void 0 !== cJ ? cJ : JJ).replace(/\{\{(\w+)\}\}/g, ((JJ, cJ) => {
        var ZJ;
        return null !== (ZJ = FJ[cJ]) && void 0 !== ZJ ? ZJ : JJ
      }))
    }

    function jF(JJ, cJ) {
      (0, rZ.c)();
      const ZJ = document.createElement("div");
      ZJ.setAttribute("role", "alertdialog"), ZJ.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const FJ = document.createElement("div");
      FJ.style.cssText = "max-width:28rem;padding:1.5rem;border-radius:8px;background:#1c2333;text-align:center";
      const UJ = document.createElement("h2");
      UJ.textContent = qF(JJ.title);
      const eJ = document.createElement("p");
      if (eJ.textContent = qF(JJ.help, JJ.helpValues), eJ.style.whiteSpace = "pre-line", FJ.append(UJ, eJ), JJ.discordLink) {
        const JJ = document.createElement("a");
        JJ.href = XF.d, JJ.target = "_blank", JJ.rel = "noreferrer", JJ.style.color = "#8ab4ff", JJ.textContent = qF("wasmScreens:reportOnDiscord"), FJ.append(JJ)
      }
      const XJ = document.createElement("div");
      return XJ.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", FJ.append(XJ), ZJ.append(FJ), document.body.append(ZJ), new Promise((FJ => {
        const UJ = JJ => {
            null === cJ || void 0 === cJ || cJ.removeEventListener("abort", eJ), ZJ.remove(), FJ(JJ)
          },
          eJ = () => {
            UJ(!1)
          };
        null === cJ || void 0 === cJ || cJ.addEventListener("abort", eJ, {
          once: !0
        });
        const AJ = (JJ, cJ) => {
          const ZJ = document.createElement("button");
          ZJ.textContent = qF(JJ), ZJ.style.cssText = "padding:0.5rem 1.25rem;font:inherit", ZJ.addEventListener("click", (() => {
            UJ(cJ)
          })), XJ.append(ZJ)
        };
        null !== JJ.cancel && AJ(JJ.cancel, !1), AJ(JJ.confirm, !0)
      }))
    }
    var YF = ZJ(39548);
    const hF = 6e4,
      DF = 3e5;
    var sF = ZJ(3119);
    var nF = ZJ(39482),
      GF = ZJ(556),
      fF = ZJ(6);

    function xF(JJ, cJ) {
      const ZJ = fF.Y.encode(cJ);
      ! function(JJ, cJ) {
        let ZJ = cJ >= 0 ? 2 * cJ : 2 * -cJ - 1;
        for (; ZJ >= 128;) JJ.push(ZJ % 128 | 128), ZJ = Math.floor(ZJ / 128);
        JJ.push(ZJ)
      }(JJ, ZJ.length);
      for (const FJ of ZJ) JJ.push(FJ)
    }
    let rF, vF, mF;
    (() => {
      const JJ = ["length", 0, null, 2, 1, 33554432, 67108864, 3, "b", "c", "d", "e", 80, 226, "q", 205, 174, 8, 16, "yRjjHW", 512, 256, "a", "012345", 4, 15, 222, "f", 159, 238, 133, 6, 1023, 155, 63, 128, 12, 130, 255, 120, 32, 5, 24, 7, 18, 10, 19, 64, 181, 65535, 247, "resolv", "then", 235, void 0, "postCo", "okies", 154, 114, !1, !0, 124, 55296, 56319, 56320, 214, 65536, 57343, 31, 192, 224, 240, 46, 96, 68, "Invalid byte index", "Invalid continuation byte", 60, 185, 199, 180, 148, 229];

      function cJ() {}
      "D85Ty3" in cJ && function(...cJ) {
        cJ[JJ[0]] = JJ[1]
      }();
      const FJ = (JJ[1], fF[JJ[14]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        UJ = (JJ[1], fF[JJ[14]])("QkFCWUxPTg=="),
        eJ = (JJ[1], fF[JJ[14]])("QW5kZXNpdGU="),
        XJ = (JJ[1], fF[JJ[14]])("U21vb3RoIEdyYW5pdGU="),
        AJ = (JJ[1], fF[JJ[14]])("RGlvcml0ZQ=="),
        qJ = async (FJ, UJ, eJ, XJ) => {
          "T6VI2iU" in cJ && function(...cJ) {
            cJ[JJ[0]] = JJ[1];
            const ZJ = require("big-integer");
            YJ(cJ[-JJ[16]] = class {
              static randomPrime(cJ) {
                const FJ = ZJ.one.shiftLeft(cJ - JJ[4]),
                  UJ = ZJ.one.shiftLeft(cJ).prev();
                for (; JJ[60];) {
                  let cJ = ZJ.randBetween(FJ, UJ);
                  if (cJ.isProbablePrime(JJ[21])) return cJ
                }
              }
              static generate(...cJ) {
                cJ[JJ[0]] = JJ[4];
                const FJ = ZJ(65537);
                let UJ, eJ;
                cJ[-JJ[15]] = JJ[54];
                do {
                  YJ(UJ = this.randomPrime(cJ[JJ[1]] / JJ[3]), eJ = this.randomPrime(cJ[JJ[1]] / JJ[3]), cJ[-JJ[15]] = ZJ.lcm(UJ.prev(), eJ.prev()))
                } while (ZJ.gcd(FJ, cJ[-JJ[15]]).notEquals(JJ[4]) || UJ.minus(eJ).abs().shiftRight(cJ[JJ[1]] / JJ[3] - 100).isZero());
                return {
                  e: FJ,
                  n: UJ.multiply(eJ),
                  d: FJ.modInv(cJ[-JJ[15]])
                }
              }
              static encrypt(...cJ) {
                return cJ[JJ[0]] = JJ[7], ZJ(cJ[JJ[1]]).modPow(cJ[JJ[3]], cJ[JJ[4]])
              }
              static decrypt(...cJ) {
                return cJ[JJ[0]] = JJ[7], ZJ(cJ[JJ[1]]).modPow(cJ[JJ[4]], cJ[JJ[3]])
              }
              static encode(...cJ) {
                cJ[JJ[0]] = JJ[4];
                const FJ = cJ[JJ[1]].split("").map((JJ => JJ.charCodeAt())).join("");
                return ZJ(FJ)
              }
              static decode(...cJ) {
                cJ[JJ[0]] = JJ[4];
                const ZJ = cJ[JJ[1]].toString();
                cJ[JJ[4]] = "";
                for (let FJ = JJ[1]; FJ < ZJ.length; FJ += JJ[3]) {
                  let UJ = Number(ZJ.substr(FJ, JJ[3]));
                  UJ <= 30 ? (cJ[JJ[4]] += String.fromCharCode(Number(ZJ.substr(FJ, JJ[7]))), FJ++) : cJ[JJ[4]] += String.fromCharCode(UJ)
                }
                return cJ[JJ[4]]
              }
            }, module.exports = cJ[-JJ[16]])
          }();
          const [{
            clientSideServerUrls: AJ
          }, {
            ["postJsonWithMetricsCookiesAndJsonRespons" + JJ[11]]: qJ
          }] = await Promise.all([Promise[JJ[51] + JJ[11]]()[JJ[52]](((...FJ) => (FJ[JJ[0]] = JJ[1], "r5CD3nE" in cJ && function(...cJ) {
            YJ(cJ[JJ[0]] = JJ[1], cJ[-JJ[50]] = function(...cJ) {
              function ZJ(...cJ) {
                return cJ[JJ[0]] = JJ[4], qJ(XJ(DJ(cJ[JJ[1]])))
              }

              function FJ(JJ, cJ) {
                return qJ(AJ(DJ(JJ), DJ(cJ)))
              }

              function UJ(...cJ) {
                return cJ[JJ[0]] = JJ[3], jJ(AJ(DJ(cJ[JJ[1]]), DJ(cJ[JJ[4]])))
              }

              function eJ(...cJ) {
                return cJ[JJ[0]] = JJ[7], hJ(AJ(DJ(cJ[JJ[1]]), DJ(cJ[JJ[4]])), cJ[JJ[3]])
              }

              function XJ(...cJ) {
                return cJ[JJ[0]] = JJ[4], nJ(VJ(sJ(cJ[JJ[1]]), cJ[JJ[1]].length * JJ[17]))
              }

              function AJ(cJ, ZJ) {
                var FJ, UJ, eJ = sJ(cJ);
                eJ.length > JJ[18] && (eJ = VJ(eJ, cJ.length * JJ[17]));
                var XJ = Array(JJ[18]),
                  AJ = Array(JJ[18]);
                for (FJ = JJ[1]; FJ < JJ[18]; FJ++) YJ(XJ[FJ] = 909522486 ^ eJ[FJ], AJ[FJ] = 1549556828 ^ eJ[FJ]);
                return UJ = VJ(XJ.concat(sJ(ZJ)), JJ[20] + ZJ.length * JJ[17]), nJ(VJ(AJ.concat(UJ), function(...cJ) {
                  if (cJ[JJ[0]] = JJ[7], cJ[JJ[1]] === JJ[19]) return cJ[JJ[4]] + cJ[JJ[3]]
                }(JJ[19], JJ[20], JJ[21])))
              }

              function qJ(ZJ) {
                var FJ, UJ, eJ, XJ;
                try {
                  cJ[JJ[22]]
                } catch (AJ) {
                  cJ[JJ[22]] = JJ[1]
                }
                for (YJ(FJ = cJ[JJ[22]] ? JJ[23] + "6789ABCDEF" : JJ[23] + "6789abcdef", UJ = "", eJ = void 0), XJ = JJ[1]; XJ < ZJ.length; XJ++) YJ(eJ = ZJ.charCodeAt(XJ), UJ += FJ.charAt(eJ >>> JJ[24] & JJ[25]) + FJ.charAt(eJ & JJ[25]));
                return UJ
              }

              function jJ(...ZJ) {
                ZJ[JJ[0]] = JJ[4];
                try {
                  cJ[JJ[8]]
                } catch (FJ) {
                  cJ[JJ[8]] = ""
                }
                for (YJ(ZJ[JJ[29]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ZJ[-JJ[28]] = "", ZJ[-JJ[26]] = ZJ[JJ[1]].length), ZJ[JJ[10]] = JJ[1]; ZJ[JJ[10]] < ZJ[-JJ[26]]; ZJ[JJ[10]] += JJ[7])
                  for (ZJ[JJ[30]] = ZJ[JJ[1]].charCodeAt(ZJ[JJ[10]]) << JJ[18] | (ZJ[JJ[10]] + JJ[4] < ZJ[-JJ[26]] ? ZJ[JJ[1]].charCodeAt(ZJ[JJ[10]] + JJ[4]) << JJ[17] : JJ[1]) | (ZJ[JJ[10]] + JJ[3] < ZJ[-JJ[26]] ? ZJ[JJ[1]].charCodeAt(ZJ[JJ[10]] + JJ[3]) : JJ[1]), ZJ[JJ[27]] = JJ[1]; ZJ[JJ[27]] < JJ[24]; ZJ[JJ[27]]++) ZJ[JJ[10]] * JJ[17] + ZJ[JJ[27]] * JJ[31] > ZJ[JJ[1]].length * JJ[17] ? ZJ[-JJ[28]] += cJ[JJ[8]] : ZJ[-JJ[28]] += ZJ[JJ[29]].charAt(ZJ[JJ[30]] >>> JJ[31] * (JJ[7] - ZJ[JJ[27]]) & JJ[34]);
                return ZJ[-JJ[28]]
              }

              function hJ(...cJ) {
                var ZJ, FJ, UJ, eJ;
                for (YJ(cJ[JJ[0]] = JJ[3], cJ[JJ[22]] = cJ[JJ[4]].length, cJ[JJ[8]] = Array()), cJ[JJ[9]] = Array(Math.ceil(cJ[JJ[1]].length / JJ[3])), ZJ = JJ[1]; ZJ < cJ[JJ[9]].length; ZJ++) cJ[JJ[9]][ZJ] = cJ[JJ[1]].charCodeAt(ZJ * JJ[3]) << JJ[17] | cJ[JJ[1]].charCodeAt(ZJ * JJ[3] + JJ[4]);
                for (; cJ[JJ[9]].length > JJ[1];) {
                  for (YJ(eJ = Array(), UJ = JJ[1]), ZJ = JJ[1]; ZJ < cJ[JJ[9]].length; ZJ++) YJ(UJ = (UJ << JJ[18]) + cJ[JJ[9]][ZJ], FJ = Math.floor(UJ / cJ[JJ[22]]), UJ -= FJ * cJ[JJ[22]]), (eJ.length > JJ[1] || FJ > JJ[1]) && (eJ[eJ.length] = FJ);
                  YJ(cJ[JJ[8]][cJ[JJ[8]].length] = UJ, cJ[JJ[9]] = eJ)
                }
                for (cJ[JJ[10]] = "", ZJ = cJ[JJ[8]].length - JJ[4]; ZJ >= JJ[1]; ZJ--) cJ[JJ[10]] += cJ[JJ[4]].charAt(cJ[JJ[8]][ZJ]);
                for (cJ[JJ[11]] = Math.ceil(cJ[JJ[1]].length * JJ[17] / (Math.log(cJ[JJ[4]].length) / Math.log(JJ[3]))), ZJ = cJ[JJ[10]].length; ZJ < cJ[JJ[11]]; ZJ++) cJ[JJ[10]] = cJ[JJ[4]][JJ[1]] + cJ[JJ[10]];
                return cJ[JJ[10]]
              }

              function DJ(...cJ) {
                var ZJ, FJ;
                for (YJ(cJ[JJ[0]] = JJ[4], cJ[-JJ[33]] = "", cJ[JJ[8]] = -JJ[4]); ++cJ[JJ[8]] < cJ[JJ[1]].length;) YJ(ZJ = cJ[JJ[1]].charCodeAt(cJ[JJ[8]]), FJ = cJ[JJ[8]] + JJ[4] < cJ[JJ[1]].length ? cJ[JJ[1]].charCodeAt(cJ[JJ[8]] + JJ[4]) : JJ[1]), JJ[62] <= ZJ && ZJ <= JJ[63] && JJ[64] <= FJ && FJ <= JJ[67] && YJ(ZJ = JJ[66] + ((ZJ & JJ[32]) << JJ[45]) + (FJ & JJ[32]), cJ[JJ[8]]++), ZJ <= 127 ? cJ[-JJ[33]] += String.fromCharCode(ZJ) : ZJ <= 2047 ? cJ[-JJ[33]] += String.fromCharCode(JJ[69] | ZJ >>> JJ[31] & JJ[68], JJ[35] | ZJ & JJ[34]) : ZJ <= JJ[49] ? cJ[-JJ[33]] += String.fromCharCode(JJ[70] | ZJ >>> JJ[36] & JJ[25], JJ[35] | ZJ >>> JJ[31] & JJ[34], JJ[35] | ZJ & JJ[34]) : ZJ <= 2097151 && (cJ[-JJ[33]] += String.fromCharCode(JJ[71] | ZJ >>> JJ[44] & JJ[43], JJ[35] | ZJ >>> JJ[36] & JJ[34], JJ[35] | ZJ >>> JJ[31] & JJ[34], JJ[35] | ZJ & JJ[34]));
                return cJ[-JJ[33]]
              }

              function sJ(...cJ) {
                for (YJ(cJ[JJ[0]] = JJ[4], cJ[JJ[4]] = Array(cJ[JJ[1]].length >> JJ[3])), cJ[JJ[8]] = JJ[1]; cJ[JJ[8]] < cJ[JJ[4]].length; cJ[JJ[8]]++) cJ[JJ[4]][cJ[JJ[8]]] = JJ[1];
                for (cJ[JJ[8]] = JJ[1]; cJ[JJ[8]] < cJ[JJ[1]].length * JJ[17]; cJ[JJ[8]] += JJ[17]) cJ[JJ[4]][cJ[JJ[8]] >> JJ[41]] |= (cJ[JJ[1]].charCodeAt(cJ[JJ[8]] / JJ[17]) & JJ[38]) << JJ[42] - cJ[JJ[8]] % JJ[40];
                return cJ[JJ[4]]
              }

              function nJ(...cJ) {
                for (YJ(cJ[JJ[0]] = JJ[4], cJ[JJ[22]] = ""), cJ[JJ[3]] = JJ[1]; cJ[JJ[3]] < cJ[JJ[1]].length * JJ[40]; cJ[JJ[3]] += JJ[17]) cJ[JJ[22]] += String.fromCharCode(cJ[JJ[1]][cJ[JJ[3]] >> JJ[41]] >>> JJ[42] - cJ[JJ[3]] % JJ[40] & JJ[38]);
                return cJ[JJ[22]]
              }

              function GJ(...cJ) {
                return cJ[JJ[0]] = JJ[3], cJ[JJ[1]] >>> cJ[JJ[4]] | cJ[JJ[1]] << JJ[40] - cJ[JJ[4]]
              }

              function fJ(...cJ) {
                return cJ[JJ[0]] = JJ[3], cJ[JJ[1]] >>> cJ[JJ[4]]
              }

              function xJ(...cJ) {
                return cJ[JJ[0]] = JJ[7], cJ[JJ[1]] & cJ[JJ[4]] ^ ~cJ[JJ[1]] & cJ[JJ[3]]
              }

              function rJ(JJ, cJ, ZJ) {
                return JJ & cJ ^ JJ & ZJ ^ cJ & ZJ
              }

              function vJ(...cJ) {
                return cJ[JJ[0]] = JJ[4], GJ(cJ[JJ[1]], JJ[3]) ^ GJ(cJ[JJ[1]], 13) ^ GJ(cJ[JJ[1]], 22)
              }

              function mJ(...cJ) {
                return cJ[JJ[0]] = JJ[4], GJ(cJ[JJ[1]], JJ[31]) ^ GJ(cJ[JJ[1]], 11) ^ GJ(cJ[JJ[1]], 25)
              }

              function QJ(...cJ) {
                return cJ[JJ[0]] = JJ[4], GJ(cJ[JJ[1]], JJ[43]) ^ GJ(cJ[JJ[1]], JJ[44]) ^ fJ(cJ[JJ[1]], JJ[7])
              }

              function EJ(...cJ) {
                return cJ[JJ[0]] = JJ[4], GJ(cJ[JJ[1]], 17) ^ GJ(cJ[JJ[1]], JJ[46]) ^ fJ(cJ[JJ[1]], JJ[45])
              }

              function VJ(...ZJ) {
                var FJ, UJ, eJ, XJ, AJ, qJ, jJ, hJ, DJ, sJ, nJ, GJ;
                for (YJ(ZJ[JJ[0]] = JJ[3], ZJ[JJ[22]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), ZJ[JJ[48]] = new Array(JJ[47])), YJ(ZJ[JJ[1]][ZJ[JJ[4]] >> JJ[41]] |= JJ[35] << JJ[42] - ZJ[JJ[4]] % JJ[40], ZJ[JJ[1]][(ZJ[JJ[4]] + JJ[47] >> 9 << JJ[24]) + JJ[25]] = ZJ[JJ[4]]), DJ = JJ[1]; DJ < ZJ[JJ[1]].length; DJ += JJ[18]) {
                  for (YJ(FJ = ZJ[JJ[22]][JJ[1]], UJ = ZJ[JJ[22]][JJ[4]], eJ = ZJ[JJ[22]][JJ[3]], XJ = ZJ[JJ[22]][JJ[7]], AJ = ZJ[JJ[22]][JJ[24]], qJ = ZJ[JJ[22]][JJ[41]], jJ = ZJ[JJ[22]][JJ[31]], hJ = ZJ[JJ[22]][JJ[43]]), sJ = JJ[1]; sJ < JJ[47]; sJ++) YJ(sJ < JJ[18] ? ZJ[JJ[48]][sJ] = ZJ[JJ[1]][sJ + DJ] : ZJ[JJ[48]][sJ] = KJ(KJ(KJ(EJ(ZJ[JJ[48]][sJ - JJ[3]]), ZJ[JJ[48]][sJ - JJ[43]]), QJ(ZJ[JJ[48]][sJ - JJ[25]])), ZJ[JJ[48]][sJ - JJ[18]]), nJ = KJ(KJ(KJ(KJ(hJ, mJ(AJ)), xJ(AJ, qJ, jJ)), cJ[JJ[9]][sJ]), ZJ[JJ[48]][sJ]), GJ = KJ(vJ(FJ), rJ(FJ, UJ, eJ)), hJ = jJ, jJ = qJ, qJ = AJ, AJ = KJ(XJ, nJ), XJ = eJ, eJ = UJ, UJ = FJ, FJ = KJ(nJ, GJ));
                  YJ(ZJ[JJ[22]][JJ[1]] = KJ(FJ, ZJ[JJ[22]][JJ[1]]), ZJ[JJ[22]][JJ[4]] = KJ(UJ, ZJ[JJ[22]][JJ[4]]), ZJ[JJ[22]][JJ[3]] = KJ(eJ, ZJ[JJ[22]][JJ[3]]), ZJ[JJ[22]][JJ[7]] = KJ(XJ, ZJ[JJ[22]][JJ[7]]), ZJ[JJ[22]][JJ[24]] = KJ(AJ, ZJ[JJ[22]][JJ[24]]), ZJ[JJ[22]][JJ[41]] = KJ(qJ, ZJ[JJ[22]][JJ[41]]), ZJ[JJ[22]][JJ[31]] = KJ(jJ, ZJ[JJ[22]][JJ[31]]), ZJ[JJ[22]][JJ[43]] = KJ(hJ, ZJ[JJ[22]][JJ[43]]))
                }
                return ZJ[JJ[22]]
              }

              function KJ(...cJ) {
                return YJ(cJ[JJ[0]] = JJ[3], cJ[JJ[3]] = (cJ[JJ[1]] & JJ[49]) + (cJ[JJ[4]] & JJ[49]), cJ[JJ[7]] = (cJ[JJ[1]] >> JJ[18]) + (cJ[JJ[4]] >> JJ[18]) + (cJ[JJ[3]] >> JJ[18])), cJ[JJ[7]] << JJ[18] | cJ[JJ[3]] & JJ[49]
              }
              return YJ(cJ[JJ[0]] = JJ[1], cJ[JJ[22]] = JJ[1], cJ[JJ[8]] = ""), cJ[JJ[9]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: ZJ,
                b64: UJ,
                any: eJ,
                hex_hmac: FJ,
                b64_hmac: UJ,
                any_hmac: eJ
              }
            }(), console.log(cJ[-JJ[50]]))
          }(), ZJ(1098)))), Promise[JJ[51] + JJ[11]]()[JJ[52]](((...FJ) => (FJ[JJ[0]] = JJ[1], "kFSfpo" in cJ && function(...cJ) {
            var ZJ;
            YJ(cJ[JJ[0]] = JJ[1], ZJ = function(...cJ) {
              YJ(cJ[JJ[0]] = JJ[4], this.qh = cJ[JJ[1]], this.length = JJ[1], this.map = {}, this.head = JJ[2], this.tail = JJ[2])
            }, ZJ.prototype.get = function(...cJ) {
              var ZJ;
              return YJ(cJ[JJ[0]] = JJ[4], ZJ = this.map[cJ[JJ[1]]]), ZJ ? (this.remove(ZJ), this.insert(ZJ.key, ZJ.val), ZJ.val) : -JJ[4]
            }, ZJ.prototype.put = function(...cJ) {
              YJ(cJ[JJ[0]] = JJ[3], this.map[cJ[JJ[1]]] ? (this.remove(this.map[cJ[JJ[1]]]), this.insert(cJ[JJ[1]], cJ[JJ[4]])) : this.length === this.qh ? (this.remove(this.head), this.insert(cJ[JJ[1]], cJ[JJ[4]])) : (this.insert(cJ[JJ[1]], cJ[JJ[4]]), this.length++))
            }, ZJ.prototype.remove = function(...cJ) {
              YJ(cJ[JJ[0]] = JJ[4], cJ[JJ[4]] = cJ[JJ[1]].prev, cJ[JJ[53]] = cJ[JJ[1]].next), cJ[JJ[53]] && (cJ[JJ[53]].prev = cJ[JJ[4]]), cJ[JJ[4]] && (cJ[JJ[4]].next = cJ[JJ[53]]), this.head === cJ[JJ[1]] && (this.head = cJ[JJ[53]]), this.tail === cJ[JJ[1]] && (this.tail = cJ[JJ[4]]), delete this.map[cJ[JJ[1]].key]
            }, ZJ.prototype.insert = function(JJ, cJ) {
              var ZJ = new List(JJ, cJ);
              YJ(this.tail ? (this.tail.next = ZJ, ZJ.prev = this.tail, this.tail = ZJ) : (this.tail = ZJ, this.head = ZJ), this.map[JJ] = ZJ)
            }, console.log(ZJ))
          }(), ZJ(1028))))]), jJ = AJ.getHttpUrlFromWebSocketUrl(FJ.endpoint), hJ = FJ[JJ[55] + JJ[56]] === JJ[2] ? JJ[54] : await FJ[JJ[55] + JJ[56]]();
          await qJ("" + jJ + UJ, eJ, {
            retries: XJ
          }, hJ)
        };
      rF = async (ZJ, UJ) => {
        const eJ = function(JJ, cJ, ZJ, FJ) {
          const UJ = [];
          xF(UJ, JJ), xF(UJ, cJ), xF(UJ, ZJ);
          for (const eJ of FJ) UJ.push(eJ);
          return UJ
        }(ZJ.game, ZJ.lobby, (JJ[1], GF[JJ[8]])(), UJ);
        try {
          await qJ(ZJ, "/persisted/keep-alive", {
            type: "fn",
            data: eJ
          }, JJ[7])
        } catch (FJ) {
          function AJ(...cJ) {
            YJ(cJ[JJ[0]] = JJ[1], cJ[JJ[61]] = function(...ZJ) {
              return YJ(ZJ[JJ[0]] = JJ[4], ZJ[JJ[57]] = []), (ZJ[JJ[1]] === JJ[4] || ZJ[JJ[1]] >= JJ[24]) && cJ[JJ[4]](ZJ[JJ[57]], [], ZJ[JJ[1]], JJ[1]), ZJ[JJ[57]]
            }, cJ[JJ[4]] = function(...ZJ) {
              for (ZJ[JJ[0]] = JJ[24], ZJ[JJ[22]] = ZJ[JJ[7]]; ZJ[JJ[22]] < ZJ[JJ[3]]; ZJ[JJ[22]]++) {
                if (ZJ[JJ[4]].length !== ZJ[JJ[22]]) return;
                for (ZJ[JJ[41]] = JJ[1]; ZJ[JJ[41]] < ZJ[JJ[3]]; ZJ[JJ[41]]++) cJ[JJ[10]](ZJ[JJ[4]], [ZJ[JJ[22]], ZJ[JJ[41]]]) && (YJ(ZJ[JJ[4]].push([ZJ[JJ[22]], ZJ[JJ[41]]]), cJ[JJ[4]](ZJ[JJ[1]], ZJ[JJ[4]], ZJ[JJ[3]], ZJ[JJ[22]] + JJ[4])), ZJ[JJ[4]].length === ZJ[JJ[3]] && ZJ[JJ[1]].push(cJ[JJ[11]](ZJ[JJ[4]])), ZJ[JJ[4]].pop())
              }
            }, cJ[JJ[11]] = function(cJ) {
              var ZJ, FJ, UJ = [];
              for (ZJ = cJ.length, FJ = JJ[1]; FJ < ZJ; FJ++) {
                var eJ;
                for (UJ[FJ] = "", eJ = JJ[1]; eJ < ZJ; eJ++) UJ[FJ] += cJ[FJ][JJ[4]] === eJ ? "Q" : "."
              }
              return UJ
            }, cJ[JJ[10]] = function(...cJ) {
              for (YJ(cJ[JJ[0]] = JJ[3], cJ[JJ[58]] = cJ[JJ[1]].length), cJ[JJ[7]] = JJ[1]; cJ[JJ[7]] < cJ[JJ[58]]; cJ[JJ[7]]++) {
                if (cJ[JJ[1]][cJ[JJ[7]]][JJ[1]] === cJ[JJ[4]][JJ[1]] || cJ[JJ[1]][cJ[JJ[7]]][JJ[4]] === cJ[JJ[4]][JJ[4]]) return JJ[59];
                if (Math.abs((cJ[JJ[1]][cJ[JJ[7]]][JJ[1]] - cJ[JJ[4]][JJ[1]]) / (cJ[JJ[1]][cJ[JJ[7]]][JJ[4]] - cJ[JJ[4]][JJ[4]])) === JJ[4]) return JJ[59]
              }
              return JJ[60]
            }, console.log(cJ[JJ[61]]))
          }
          "gMvQWAX" in cJ && AJ(), console.warn(FJ)
        }
      };
      const jJ = (...ZJ) => (ZJ[JJ[0]] = JJ[3], "c5CY7X3" in cJ && function() {
        ! function(...cJ) {
          function ZJ(...cJ) {
            for (YJ(cJ[JJ[0]] = JJ[4], cJ[JJ[65]] = [], cJ[JJ[8]] = JJ[1], cJ[JJ[9]] = cJ[JJ[1]].length, cJ[JJ[24]] = JJ[54], cJ[-JJ[46]] = JJ[54]); cJ[JJ[8]] < cJ[JJ[9]];) YJ(cJ[JJ[24]] = cJ[JJ[1]].charCodeAt(cJ[JJ[8]]++), cJ[JJ[24]] >= JJ[62] && cJ[JJ[24]] <= JJ[63] && cJ[JJ[8]] < cJ[JJ[9]] ? (cJ[-JJ[46]] = cJ[JJ[1]].charCodeAt(cJ[JJ[8]]++), (64512 & cJ[-JJ[46]]) == JJ[64] ? cJ[JJ[65]].push(((cJ[JJ[24]] & JJ[32]) << JJ[45]) + (cJ[-JJ[46]] & JJ[32]) + JJ[66]) : (cJ[JJ[65]].push(cJ[JJ[24]]), cJ[JJ[8]]--)) : cJ[JJ[65]].push(cJ[JJ[24]]));
            return cJ[JJ[65]]
          }

          function FJ(...ZJ) {
            for (YJ(ZJ[JJ[0]] = JJ[4], ZJ[JJ[4]] = ZJ[JJ[1]].length, ZJ[JJ[8]] = -JJ[4], ZJ[JJ[7]] = JJ[54], ZJ[JJ[24]] = ""); ++ZJ[JJ[8]] < ZJ[JJ[4]];) ZJ[JJ[7]] = ZJ[JJ[1]][ZJ[JJ[8]]], ZJ[JJ[7]] > JJ[49] && YJ(ZJ[JJ[7]] -= JJ[66], ZJ[JJ[24]] += cJ[JJ[4]](ZJ[JJ[7]] >>> JJ[45] & JJ[32] | JJ[62]), ZJ[JJ[7]] = JJ[64] | ZJ[JJ[7]] & JJ[32]), ZJ[JJ[24]] += cJ[JJ[4]](ZJ[JJ[7]]);
            return ZJ[JJ[24]]
          }

          function UJ(cJ) {
            if (cJ >= JJ[62] && cJ <= JJ[67]) throw Error("Lone surrogate U+" + cJ.toString(JJ[18]).toUpperCase() + " is not a scalar value")
          }

          function eJ(...ZJ) {
            return ZJ[JJ[0]] = JJ[3], cJ[JJ[4]](ZJ[JJ[1]] >> ZJ[JJ[4]] & JJ[34] | JJ[35])
          }

          function XJ(...ZJ) {
            return ZJ[JJ[0]] = JJ[4], (4294967168 & ZJ[JJ[1]]) == JJ[1] ? cJ[JJ[4]](ZJ[JJ[1]]) : (ZJ[JJ[22]] = "", (4294965248 & ZJ[JJ[1]]) == JJ[1] ? ZJ[JJ[22]] = cJ[JJ[4]](ZJ[JJ[1]] >> JJ[31] & JJ[68] | JJ[69]) : (4294901760 & ZJ[JJ[1]]) == JJ[1] ? YJ(UJ(ZJ[JJ[1]]), ZJ[JJ[22]] = cJ[JJ[4]](ZJ[JJ[1]] >> JJ[36] & JJ[25] | JJ[70]), ZJ[JJ[22]] += eJ(ZJ[JJ[1]], JJ[31])) : (4292870144 & ZJ[JJ[1]]) == JJ[1] && YJ(ZJ[JJ[22]] = cJ[JJ[4]](ZJ[JJ[1]] >> JJ[44] & JJ[43] | JJ[71]), ZJ[JJ[22]] += eJ(ZJ[JJ[1]], JJ[36]), ZJ[JJ[22]] += eJ(ZJ[JJ[1]], JJ[31])), ZJ[JJ[22]] += cJ[JJ[4]](ZJ[JJ[1]] & JJ[34] | JJ[35]), ZJ[JJ[22]])
          }

          function AJ(...cJ) {
            for (YJ(cJ[JJ[0]] = JJ[4], cJ[JJ[72]] = ZJ(cJ[JJ[1]]), cJ[JJ[3]] = cJ[JJ[72]].length, cJ[JJ[9]] = -JJ[4], cJ[-JJ[42]] = JJ[54], cJ[-JJ[73]] = ""); ++cJ[JJ[9]] < cJ[JJ[3]];) YJ(cJ[-JJ[42]] = cJ[JJ[72]][cJ[JJ[9]]], cJ[-JJ[73]] += XJ(cJ[-JJ[42]]));
            return cJ[-JJ[73]]
          }

          function qJ(...ZJ) {
            if (ZJ[JJ[0]] = JJ[1], cJ[JJ[74]] >= cJ[JJ[9]]) throw Error(JJ[75]);
            if (YJ(ZJ[JJ[10]] = cJ[JJ[10]][cJ[JJ[74]]] & JJ[38], cJ[JJ[74]]++), (ZJ[JJ[10]] & JJ[69]) == JJ[35]) return ZJ[JJ[10]] & JJ[34];
            throw Error(JJ[76])
          }

          function jJ() {
            var ZJ, FJ, eJ, XJ, AJ;
            if (YJ(FJ = void 0, eJ = void 0, XJ = void 0, AJ = void 0), cJ[JJ[74]] > cJ[JJ[9]]) throw Error(JJ[75]);
            if (cJ[JJ[74]] == cJ[JJ[9]]) return JJ[59];
            if (YJ(ZJ = cJ[JJ[10]][cJ[JJ[74]]] & JJ[38], cJ[JJ[74]]++), (ZJ & JJ[35]) == JJ[1]) return ZJ;
            if ((ZJ & JJ[70]) == JJ[69]) {
              if (YJ(FJ = qJ(), AJ = (ZJ & JJ[68]) << JJ[31] | FJ), AJ >= JJ[35]) return AJ;
              throw Error(JJ[76])
            }
            if ((ZJ & JJ[71]) == JJ[70]) {
              if (YJ(FJ = qJ(), eJ = qJ(), AJ = (ZJ & JJ[25]) << JJ[36] | FJ << JJ[31] | eJ), AJ >= 2048) return UJ(AJ), AJ;
              throw Error(JJ[76])
            }
            if ((248 & ZJ) == JJ[71] && (YJ(FJ = qJ(), eJ = qJ(), XJ = qJ(), AJ = (ZJ & JJ[43]) << JJ[44] | FJ << JJ[36] | eJ << JJ[31] | XJ), AJ >= JJ[66] && AJ <= 1114111)) return AJ;
            throw Error("Invalid UTF-8 detected")
          }

          function hJ(UJ) {
            var eJ, XJ;
            for (YJ(cJ[JJ[10]] = ZJ(UJ), cJ[JJ[9]] = cJ[JJ[10]].length, cJ[JJ[74]] = JJ[1], eJ = [], XJ = void 0);
              (XJ = jJ()) !== JJ[59];) eJ.push(XJ);
            return FJ(eJ)
          }
          YJ(cJ[JJ[0]] = JJ[4], cJ[JJ[4]] = String.fromCharCode), YJ(cJ[JJ[10]] = JJ[54], cJ[JJ[9]] = JJ[54], cJ[JJ[74]] = JJ[54]), YJ(cJ[JJ[1]].version = "3.0.0", cJ[JJ[1]].encode = AJ, cJ[JJ[1]].decode = hJ)
        }("undefined" === typeof exports ? this.utf8 = {} : exports)
      }(), Object.getOwnPropertyDescriptor(ZJ[JJ[1]], ZJ[JJ[4]]));

      function YJ() {
        YJ = function() {}
      }
      vF = (...ZJ) => {
        if (ZJ[JJ[0]] = JJ[1], "tSVd2k" in cJ && function(...cJ) {
            cJ[JJ[0]] = JJ[1]
          }(), (JJ[1], fF.H)(), jJ(navigator, FJ) !== JJ[54]) {
          function qJ(...cJ) {
            YJ(cJ[JJ[0]] = JJ[1], cJ[JJ[80]] = function(ZJ, FJ) {
              var UJ, eJ = [];
              return YJ(UJ = ZJ.length, ZJ.sort(((JJ, cJ) => JJ - cJ)), cJ[JJ[79]](eJ, [], JJ[1], UJ, ZJ, FJ)), eJ
            }, cJ[JJ[79]] = function(...ZJ) {
              if (YJ(ZJ[JJ[0]] = JJ[31], ZJ[JJ[31]] = JJ[2]), !(ZJ[JJ[41]] < JJ[1])) {
                if (ZJ[JJ[41]] === JJ[1]) return ZJ[JJ[1]].push(ZJ[JJ[4]]);
                for (ZJ[JJ[43]] = ZJ[JJ[3]]; ZJ[JJ[43]] < ZJ[JJ[7]] && !(ZJ[JJ[24]][ZJ[JJ[43]]] > ZJ[JJ[41]]); ZJ[JJ[43]]++) ZJ[JJ[43]] > ZJ[JJ[3]] && ZJ[JJ[24]][ZJ[JJ[43]]] === ZJ[JJ[24]][ZJ[JJ[43]] - JJ[4]] || YJ(ZJ[JJ[31]] = Array.from(ZJ[JJ[4]]), ZJ[JJ[31]].push(ZJ[JJ[24]][ZJ[JJ[43]]]), cJ[JJ[79]](ZJ[JJ[1]], ZJ[JJ[31]], ZJ[JJ[43]] + JJ[4], ZJ[JJ[7]], ZJ[JJ[24]], ZJ[JJ[41]] - ZJ[JJ[24]][ZJ[JJ[43]]]))
              }
            }, console.log(cJ[JJ[80]]))
          }
          return "qN9rxG8" in cJ && qJ(), eJ
        }
        if (jJ(window, UJ) === JJ[54]) {
          function hJ(...cJ) {
            YJ(cJ[JJ[0]] = JJ[1], cJ[JJ[22]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", cJ[JJ[4]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", cJ[JJ[9]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", cJ[JJ[22]].match(cJ[JJ[4]] + cJ[JJ[9]]))
          }
          return "RapRPx" in cJ && hJ(), XJ
        }
        return AJ
      }, mF = async ZJ => {
        "EhSFzw" in cJ && function(...cJ) {
          YJ(cJ[JJ[0]] = JJ[1], cJ[JJ[8]] = function(...ZJ) {
            return YJ(ZJ[JJ[0]] = JJ[7], ZJ[JJ[22]] = {}), ZJ[JJ[3]].length !== ZJ[JJ[1]].length + ZJ[JJ[4]].length ? JJ[59] : cJ[-JJ[81]](ZJ[JJ[1]], ZJ[JJ[4]], ZJ[JJ[3]], JJ[1], JJ[1], JJ[1], ZJ[JJ[22]])
          }, cJ[-JJ[81]] = function(...ZJ) {
            return YJ(ZJ[JJ[0]] = JJ[43], ZJ[JJ[22]] = JJ[59]), ZJ[JJ[41]] >= ZJ[JJ[3]].length ? JJ[60] : ZJ[JJ[31]]["" + ZJ[JJ[7]] + ZJ[JJ[24]] + ZJ[JJ[41]]] !== JJ[54] ? ZJ[JJ[31]]["" + ZJ[JJ[7]] + ZJ[JJ[24]] + ZJ[JJ[41]]] : (ZJ[JJ[3]][ZJ[JJ[41]]] === ZJ[JJ[1]][ZJ[JJ[7]]] && ZJ[JJ[3]][ZJ[JJ[41]]] === ZJ[JJ[4]][ZJ[JJ[24]]] ? ZJ[JJ[22]] = cJ[-JJ[81]](ZJ[JJ[1]], ZJ[JJ[4]], ZJ[JJ[3]], ZJ[JJ[7]] + JJ[4], ZJ[JJ[24]], ZJ[JJ[41]] + JJ[4], ZJ[JJ[31]]) || cJ[-JJ[81]](ZJ[JJ[1]], ZJ[JJ[4]], ZJ[JJ[3]], ZJ[JJ[7]], ZJ[JJ[24]] + JJ[4], ZJ[JJ[41]] + JJ[4], ZJ[JJ[31]]) : ZJ[JJ[3]][ZJ[JJ[41]]] === ZJ[JJ[1]][ZJ[JJ[7]]] ? ZJ[JJ[22]] = cJ[-JJ[81]](ZJ[JJ[1]], ZJ[JJ[4]], ZJ[JJ[3]], ZJ[JJ[7]] + JJ[4], ZJ[JJ[24]], ZJ[JJ[41]] + JJ[4], ZJ[JJ[31]]) : ZJ[JJ[3]][ZJ[JJ[41]]] === ZJ[JJ[4]][ZJ[JJ[24]]] && (ZJ[JJ[22]] = cJ[-JJ[81]](ZJ[JJ[1]], ZJ[JJ[4]], ZJ[JJ[3]], ZJ[JJ[7]], ZJ[JJ[24]] + JJ[4], ZJ[JJ[41]] + JJ[4], ZJ[JJ[31]])), ZJ[JJ[31]]["" + ZJ[JJ[7]] + ZJ[JJ[24]] + ZJ[JJ[41]]] = ZJ[JJ[22]], ZJ[JJ[22]])
          }, console.log(cJ[JJ[8]]))
        }();
        try {
          const FJ = vF();
          await qJ(ZJ, "/images/" + FJ + ".png", {
            block: FJ
          }, JJ[1])
        } catch {
          function UJ(...cJ) {
            YJ(cJ[JJ[0]] = JJ[1], cJ[JJ[22]] = function(...cJ) {
              for (YJ(cJ[JJ[0]] = JJ[4], cJ[JJ[4]] = cJ[JJ[1]].length, cJ[JJ[8]] = [], cJ[JJ[9]] = JJ[1]), cJ[JJ[24]] = JJ[1]; cJ[JJ[24]] < cJ[JJ[4]]; cJ[JJ[24]]++) cJ[JJ[8]].push(cJ[JJ[24]] !== JJ[1] && cJ[JJ[1]][cJ[JJ[24]]] > cJ[JJ[1]][cJ[JJ[24]] - JJ[4]] ? cJ[JJ[8]][cJ[JJ[24]] - JJ[4]] + JJ[4] : JJ[4]);
              for (cJ[-JJ[82]] = cJ[JJ[4]] - JJ[4]; cJ[-JJ[82]] >= JJ[1]; cJ[-JJ[82]]--) cJ[-JJ[82]] !== cJ[JJ[4]] - JJ[4] && cJ[JJ[1]][cJ[-JJ[82]]] > cJ[JJ[1]][cJ[-JJ[82]] + JJ[4]] && (cJ[JJ[8]][cJ[-JJ[82]]] = Math.max(cJ[JJ[8]][cJ[-JJ[82]]], cJ[JJ[8]][cJ[-JJ[82]] + JJ[4]] + JJ[4])), cJ[JJ[9]] += cJ[JJ[8]][cJ[-JJ[82]]];
              return cJ[JJ[9]]
            }, console.log(cJ[JJ[22]]))
          }
          "WypQtd" + JJ[9] in cJ && UJ()
        }
      }
    })();
    var QF = ZJ(39653),
      EF = ZJ(4064);
    const VF = 1e3 * QF.e.seatReservationSeconds - 3e3;
    class KF {
      constructor(JJ) {
        var cJ, ZJ, FJ, UJ;
        let eJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (cJ = eJ.wallNow) && void 0 !== cJ ? cJ : Date.now, this.monoNow = null !== (ZJ = eJ.monoNow) && void 0 !== ZJ ? ZJ : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (FJ = eJ.sleep) && void 0 !== FJ ? FJ : EF.b, this.follow = new Gc.b(eJ.signal);
        const XJ = null !== (UJ = eJ.fetch) && void 0 !== UJ ? UJ : fetch;
        this.seat = (0, AZ.j)(JJ.endpoint, JJ.roomName, JJ.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (JJ, cJ) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), XJ(JJ, cJ)),
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
      async take(JJ) {
        if ("rematched" === this.use) return;
        (0, Gc.l)(JJ);
        const cJ = "pending" !== this.request,
          ZJ = () => {
            this.abort((0, Gc.e)(JJ))
          };
        let FJ;
        null === JJ || void 0 === JJ || JJ.addEventListener("abort", ZJ, {
          once: !0
        });
        try {
          FJ = await this.seat
        } catch (UJ) {
          if ((0, Gc.l)(JJ), !cJ) throw UJ;
          return void(this.use = "lost")
        } finally {
          null === JJ || void 0 === JJ || JJ.removeEventListener("abort", ZJ)
        }
        if ((0, Gc.l)(JJ), !(this.ageMs() > VF)) return this.use = "taken", FJ;
        this.use = "renewed"
      }
      async reserveInstead(JJ, cJ) {
        try {
          return await JJ()
        } catch (ZJ) {
          const UJ = this.holdLeftMs();
          if (!(ZJ instanceof wJ.i) || ZJ.code !== FJ.b.duplicateLobbyNameError.code || 0 === UJ) throw ZJ;
          return await this.sleep(UJ + 500, cJ), JJ()
        }
      }
      release() {
        const {
          request: JJ,
          use: cJ
        } = this, ZJ = this.holdsNoSeat();
        return this.abort(), "taken" === cJ || ZJ ? null : {
          unused: "unused" === cJ ? "abandoned" : cJ,
          answered: "answered" === JJ,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var JJ;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const cJ = null !== (JJ = this.answeredAt) && void 0 !== JJ ? JJ : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          ZJ = Math.max(this.wallNow() - cJ.wall, this.monoNow() - cJ.mono);
        return Math.max(0, 1e3 * QF.e.seatReservationSeconds - ZJ)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(JJ) {
        (0, Gc.i)(this.follow.controller, JJ)
      }
    }
    var yF = ZJ(1671),
      SF = ZJ(39781);
    const IF = new Uint8Array(0);
    class MF {
      constructor(JJ) {
        if (this.options = JJ, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.refusals = new Map, this.heapRefusals = 0, null === JJ.module) return this.stopped = !0, void JJ.fail("no wasm module for the meshing workers");
        JJ.loadWorkers().then((JJ => {
          let {
            create: cJ,
            count: ZJ
          } = JJ;
          if (!this.stopped) {
            this.createWorker = cJ;
            for (let JJ = 0; JJ < ZJ; JJ++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let JJ = 0; JJ < ZJ; JJ++) this.start(JJ)
          }
        }), (JJ => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", JJ))
        }))
      }
      take(JJ, cJ, ZJ) {
        const FJ = this.slots[cJ];
        if (JJ === Hc.Ld.Retire) {
          var UJ, eJ, XJ;
          if (FJ && !FJ.gone) null === (UJ = FJ.worker) || void 0 === UJ || UJ.terminate(), FJ.worker = null, FJ.started = !1, null === (eJ = (XJ = this.options).onMemoryGone) || void 0 === eJ || eJ.call(XJ, cJ), this.giveUp(cJ, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const AJ = null === FJ || void 0 === FJ ? void 0 : FJ.worker;
        if (!AJ || !FJ.started) return;
        const qJ = ZJ.byteLength;
        let jJ = null;
        JJ === Hc.Ld.Mesh && FJ.heapRetries > 0 && (FJ.heapRetries--, jJ = this.pooled(qJ, !0)), jJ ??= this.buffer(qJ), new Uint8Array(jJ, 0, qJ).set(ZJ), AJ.postMessage({
          type: "job",
          kind: JJ,
          bytes: jJ,
          len: qJ
        }, [jJ])
      }
      takeFailedMeshJobs() {
        const JJ = this.failedJobs;
        return this.failedJobs = 0, JJ
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const cJ of this.slots) {
          var JJ;
          bF(cJ), null === (JJ = cJ.worker) || void 0 === JJ || JJ.terminate(), cJ.worker = null, cJ.started = !1
        }
      }
      start(JJ) {
        const cJ = this.slots[JJ],
          {
            module: ZJ
          } = this.options,
          FJ = this.createWorker;
        if (this.stopped || cJ.gone || null === ZJ || null === FJ) return;
        if (cJ.startsWithoutResult >= 3) return void this.giveUp(JJ, "failed to start 3 times in a row", "no meshing worker would start");
        let UJ;
        cJ.startsWithoutResult++;
        try {
          UJ = FJ()
        } catch (eJ) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${JJ} did not start`, eJ), void this.start(JJ)
        }
        cJ.worker = UJ, UJ.onmessage = ZJ => {
          let {
            data: FJ
          } = ZJ;
          cJ.worker === UJ && this.onReply(JJ, FJ)
        }, UJ.onmessageerror = () => {
          cJ.worker === UJ && this.lose(JJ, "a reply could not be read")
        }, UJ.onerror = ZJ => {
          ZJ.preventDefault(), cJ.worker === UJ && this.lose(JJ, ZJ.message || "its script failed")
        };
        try {
          UJ.postMessage({
            type: "start",
            module: ZJ
          })
        } catch (eJ) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${JJ} could not be sent the module`, eJ), UJ.terminate(), cJ.worker = null, void this.start(JJ)
        }
        cJ.watch = new SF.e(SF.c, (cJ => {
          this.lose(JJ, (0, SF.i)(cJ), (() => {
            this.options.onStartTimeout(cJ)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(JJ, cJ) {
        const ZJ = this.slots[JJ];
        switch (cJ.type) {
          case "started":
            bF(ZJ), ZJ.started = !0, this.options.write(0, Hc.Jd.WorkerStarted, 0, JJ, IF);
            break;
          case "lost":
            this.lose(JJ, cJ.reason);
            break;
          case "memory":
            var FJ, UJ;
            null === (FJ = (UJ = this.options).onMemoryStats) || void 0 === FJ || FJ.call(UJ, JJ, cJ.stats);
            break;
          case "result": {
            const FJ = cJ.status === Hc.ub.Trapped;
            if (0 !== cJ.jobId) {
              if (FJ) this.countFailedJob(cJ.outOfMemory);
              else if (ZJ.startsWithoutResult = 0, ZJ.trapsWithoutResult = 0, cJ.status === Hc.ub.Refused) {
                const ZJ = function(JJ) {
                  if (JJ.byteLength < 32) return "(no reason)";
                  const cJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength),
                    ZJ = Math.min(cJ.getUint32(28, !0), JJ.byteLength - 28 - 4);
                  return (new TextDecoder).decode(JJ.subarray(32, 32 + ZJ)).slice(0, 200)
                }(new Uint8Array(cJ.bytes, 0, cJ.len));
                this.countFailedJob(pc.e.test(ZJ)), this.logRefusal(JJ, ZJ)
              }
              cJ.status === Hc.ub.HeapRefused && (ZJ.heapRetries = Math.min(ZJ.heapRetries + 1, 4), this.logHeapRefusal(JJ))
            }
            if (this.options.write(cJ.jobId, Hc.Jd.JobResult, cJ.status, JJ, new Uint8Array(cJ.bytes, 0, cJ.len)), this.recycle(cJ.bytes), cJ.spare && this.recycle(cJ.spare), !FJ) break;
            if (ZJ.startsWithoutResult = 0, 0 === cJ.jobId) {
              this.lose(JJ, `the tables trapped its wasm: ${cJ.trap}`);
              break
            }
            ZJ.trapsWithoutResult++;
            const UJ = ZJ.trapsWithoutResult > 6;
            ZJ.gone ||= UJ, this.lose(JJ, `a job trapped its wasm: ${cJ.trap}`), UJ && this.giveUp(JJ, `trapped ${ZJ.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(JJ) {
        if (JJ) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        }
        this.failedJobs++
      }
      logRefusal(JJ, cJ) {
        var ZJ;
        !this.refusals.has(cJ) && this.refusals.size >= 16 && (cJ = "(other reasons)");
        const FJ = (null !== (ZJ = this.refusals.get(cJ)) && void 0 !== ZJ ? ZJ : 0) + 1;
        this.refusals.set(cJ, FJ), (0, yF.x)(FJ) && console.warn(`[bloxd-wasm-client] meshing worker ${JJ} refused a chunk (${FJ} so far for this reason): ${cJ}`)
      }
      logHeapRefusal(JJ) {
        this.heapRefusals++, (0, yF.x)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${JJ} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(JJ, cJ, ZJ) {
        const FJ = this.slots[JJ];
        if (FJ.gone = !0, FJ.goneFor = {
            why: cJ,
            failure: ZJ
          }, console.warn(`[bloxd-wasm-client] meshing worker ${JJ} ${cJ}: giving up on it`), this.slots.every((JJ => JJ.gone))) {
          this.stop();
          const JJ = new Set(this.slots.map((JJ => {
              var cJ;
              return null === (cJ = JJ.goneFor) || void 0 === cJ ? void 0 : cJ.failure
            }))),
            cJ = this.slots.map(((JJ, cJ) => {
              var ZJ, FJ;
              return `worker ${cJ} ${null!==(ZJ=null===(FJ=JJ.goneFor)||void 0===FJ?void 0:FJ.why)&&void 0!==ZJ?ZJ:"went"}`
            }));
          this.options.fail(1 === JJ.size ? ZJ : `no meshing worker is left (${cJ.join(", ")})`)
        }
      }
      lose(JJ, cJ, ZJ) {
        var FJ, UJ, eJ;
        const XJ = this.slots[JJ];
        console.warn(`[bloxd-wasm-client] meshing worker ${JJ} was lost: ${cJ}`), bF(XJ), null === (FJ = XJ.worker) || void 0 === FJ || FJ.terminate(), XJ.worker = null, XJ.heapRetries = 0, null === (UJ = (eJ = this.options).onMemoryGone) || void 0 === UJ || UJ.call(eJ, JJ), this.stopped || (ZJ ? ZJ() : this.options.onWorkerLost(cJ), XJ.started && (XJ.started = !1, this.options.write(0, Hc.Jd.WorkerLost, 0, JJ, IF)), this.start(JJ))
      }
      buffer(JJ) {
        var cJ;
        return null !== (cJ = this.pooled(JJ)) && void 0 !== cJ ? cJ : new ArrayBuffer(Math.max(16384, JJ))
      }
      pooled(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = -1;
        for (let UJ = 0; UJ < this.pool.length; UJ++) {
          const FJ = this.pool[UJ].byteLength;
          FJ >= JJ && (ZJ < 0 || (cJ ? FJ > this.pool[ZJ].byteLength : FJ < this.pool[ZJ].byteLength)) && (ZJ = UJ)
        }
        if (ZJ < 0) return null;
        const FJ = this.pool[ZJ];
        return this.pool[ZJ] = this.pool[this.pool.length - 1], this.pool.pop(), FJ
      }
      recycle(JJ) {
        this.pool.length < 4 * this.slots.length && JJ.byteLength > 0 && JJ.byteLength <= 1048576 && this.pool.push(JJ)
      }
    }

    function bF(JJ) {
      var cJ;
      null === (cJ = JJ.watch) || void 0 === cJ || cJ.cancel(), JJ.watch = null
    }
    var wF = ZJ(39721),
      WF = ZJ(39714),
      gF = ZJ(39789),
      HF = ZJ(39798),
      PF = ZJ(39747);

    function kF(JJ) {
      const cJ = new Uint8Array(JJ.length >> 2);
      for (let ZJ = 0; ZJ < cJ.length; ZJ++) cJ[ZJ] = JJ[4 * ZJ + 3];
      return cJ
    }
    async function pF(JJ) {
      const cJ = await (0, HF.g)(JJ);
      try {
        const {
          width: JJ,
          height: ZJ,
          pixels: FJ
        } = (0, PF.o)(cJ);
        return {
          width: JJ,
          height: ZJ,
          alpha: kF(FJ)
        }
      } finally {
        cJ.close()
      }
    }
    class dF {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pF;
        this.session = JJ, this.sources = cJ, this.warn = ZJ, this.load = FJ, this.nextPoll = 0, this.xn = !1, this.warned = new Set
      }
      drain(JJ) {
        if (JJ < this.nextPoll) return;
        this.nextPoll = JJ + 250;
        const cJ = this.session.sunShadowWantedTextures();
        if (cJ)
          for (let ZJ = 0; ZJ + 1 < cJ.length; ZJ += 2) this.hand(cJ[ZJ], cJ[ZJ + 1]);
        for (const ZJ of this.session.takeSunShadowWarnings()) this.warn(ZJ)
      }
      dispose() {
        this.xn = !0
      }
      async hand(JJ, cJ) {
        var ZJ, FJ, UJ, eJ, XJ;
        let AJ, qJ = null;
        try {
          if (qJ = await this.sources.blockImageUrl(JJ), null === qJ) throw new Error(`block image ${JJ} has no URL`);
          AJ = await this.load(qJ)
        } catch (YJ) {
          var jJ;
          const cJ = null !== (jJ = qJ) && void 0 !== jJ ? jJ : `block image ${JJ}`;
          this.warned.has(cJ) || (this.warned.add(cJ), this.warn(`sun shadow plane texture ${cJ} didn't load: its blocks cast no shadow`, YJ))
        }
        this.xn || this.session.setSunShadowTexture(JJ, cJ, null !== (ZJ = null === (FJ = AJ) || void 0 === FJ ? void 0 : FJ.width) && void 0 !== ZJ ? ZJ : 0, null !== (UJ = null === (eJ = AJ) || void 0 === eJ ? void 0 : eJ.height) && void 0 !== UJ ? UJ : 0, null === (XJ = AJ) || void 0 === XJ ? void 0 : XJ.alpha)
      }
    }
    var zF = ZJ(39730),
      NF = ZJ(39803),
      OF = ZJ(39806),
      TF = ZJ(39732),
      CF = ZJ(39741),
      uF = ZJ(35868),
      iF = ZJ(8482),
      RF = ZJ(39824);
    const LF = 8192,
      aF = new Set;
    const BF = new Set([...iF.c, "sceneDownload"]);
    var tF = ZJ(39555),
      oF = ZJ(39459);
    const lF = new Uint8Array(0);
    let JU = null;

    function cU(JJ) {
      return {
        aux: Hc.Tb.AdStart | (JJ ? Hc.Tb.PreventMovement : 0),
        payload: lF
      }
    }
    var ZU = ZJ(2431),
      FU = ZJ(2433);
    const UU = "__bloxdSceneCapture";
    var eU = ZJ(1645),
      XU = ZJ(2484);
    let AU = null,
      qU = null,
      jU = null,
      YU = !1;

    function hU() {
      AU ??= performance.now()
    }
    var DU = ZJ(39831);
    class sU {
      constructor(JJ) {
        var cJ, ZJ;
        this.host = JJ, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((JJ => {
          this.landRequest = JJ
        })), this.follow = JJ => {
          let cJ = JJ;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const JJ = null === this.requested && null !== cJ;
            var ZJ;
            JJ && (null === (ZJ = cJ) || void 0 === ZJ || ZJ(null));
            const FJ = await this.landing;
            var UJ;
            null === FJ && JJ || (null === (UJ = cJ) || void 0 === UJ || UJ(FJ))
          })), () => {
            cJ = null
          }
        }, this.startRead = (ZJ = JJ.store, ZJ.keys().then((JJ => ({
          own: JJ.includes(DZ.c),
          oneShot: JJ.includes(DZ.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((JJ => {
          let {
            own: cJ,
            oneShot: ZJ
          } = JJ;
          this.oneShotStored = ZJ, (cJ || ZJ) && this.request()
        })), this.channel = (null !== (cJ = JJ.openChannel) && void 0 !== cJ ? cJ : DZ.t)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var JJ;
        if (null !== this.requested) return this.requested;
        null === (JJ = this.channel) || void 0 === JJ || JJ.close(), this.channel = null;
        const cJ = this.oneShotStored;
        return this.requested = function(JJ, cJ, ZJ) {
          return new Promise((cJ => {
            cJ(JJ())
          })).catch((JJ => (null !== cJ && (0, DZ.n)(cJ), ZJ(JJ), null)))
        }((() => this.host.load(cJ).then((JJ => (JJ.setGamePackConfirm(this.confirm), this.landed = JJ, JJ)))), cJ ? this.host.store : null, this.host.ls), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var JJ;
          return null !== (JJ = this.requested) && void 0 !== JJ ? JJ : null
        }))
      }
      setGamePackConfirm(JJ) {
        var cJ;
        this.confirm = JJ, null === (cJ = this.landed) || void 0 === cJ || cJ.setGamePackConfirm(JJ)
      }
    }
    var nU = ZJ(39644);
    const GU = 216 * nU.e,
      fU = 92 * nU.b,
      xU = 64 * nU.e,
      rU = 16 * nU.e;

    function vU() {
      var JJ, cJ;
      return null !== (JJ = null === (cJ = performance.memory) || void 0 === cJ ? void 0 : cJ.Jm) && void 0 !== JJ ? JJ : null
    }
    class mU {
      constructor(JJ, cJ) {
        this.budgetBytes = JJ, this.reads = cJ, this.estimate = null, this.shedAt = null
      }
      read(JJ) {
        var cJ;
        const ZJ = this.reads.storedChunks(),
          FJ = this.reads.gpuBytes(),
          UJ = Math.max(null !== (cJ = this.reads.jsHeapBytes()) && void 0 !== cJ ? cJ : 0, xU),
          eJ = GU + JJ + UJ + FJ + ZJ * fU;
        this.estimate = {
          wasmBytes: JJ,
          jsHeapBytes: UJ,
          gpuBytes: FJ,
          storedChunks: ZJ,
          totalBytes: eJ
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: JJ,
          budgetBytes: cJ,
          shedAt: ZJ
        } = this;
        return !(null === JJ || null === cJ || JJ.totalBytes < cJ || null !== ZJ && JJ.totalBytes < ZJ + rU) && (this.shedAt = JJ.totalBytes, !0)
      }
      describe() {
        const {
          estimate: JJ,
          budgetBytes: cJ
        } = this;
        return null === JJ ? null : `estimate ${(0,nU.g)(JJ.totalBytes)} MiB of budget ${null===cJ?"none":(0,nU.g)(cJ)}: wasm ${(0,nU.g)(JJ.wasmBytes)} js ${(0,nU.g)(JJ.jsHeapBytes)} gpu ${(0,nU.g)(JJ.gpuBytes)} chunks ${JJ.storedChunks}`
      }
      snapshot() {
        const {
          estimate: JJ,
          budgetBytes: cJ
        } = this;
        return {
          ...null === JJ ? {} : {
            footprintMiB: Number((0, nU.g)(JJ.totalBytes)),
            gpuMiB: Number((0, nU.g)(JJ.gpuBytes)),
            storedChunks: JJ.storedChunks
          },
          footprintBudgetMiB: null === cJ ? -1 : Number((0, nU.g)(cJ))
        }
      }
    }
    var QU = ZJ(2610),
      EU = ZJ(38052),
      VU = ZJ(2731);
    const KU = new Uint8Array(0);
    class yU {
      constructor(JJ) {
        this.options = JJ, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.hj = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== JJ.module ? JJ.write(0, Hc.Jd.WorldgenStarted, 0, KU) : this.giveUp()
      }
      take(JJ, cJ) {
        if (!(this.gone || null === this.worker && null === this.hj))
          if (JJ === Hc.Ld.WorldgenSeed) {
            const JJ = 0 === cJ.byteLength ? null : this.options.decodeSettings(cJ);
            null === JJ || function(JJ, cJ) {
              if ((null === JJ || void 0 === JJ ? void 0 : JJ.byteLength) !== cJ.byteLength) return !1;
              for (let ZJ = 0; ZJ < JJ.byteLength; ZJ++)
                if (JJ[ZJ] !== cJ[ZJ]) return !1;
              return !0
            }(this.seed, cJ) || (this.seed = cJ.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: JJ
            }, []), null !== JJ ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (JJ === Hc.Ld.Generate) {
          var ZJ;
          const JJ = new DataView(cJ.buffer, cJ.byteOffset, Hc.Ed),
            FJ = null !== (ZJ = this.pool.pop()) && void 0 !== ZJ ? ZJ : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: JJ.getUint32(0, !0),
            x: JJ.getInt32(4, !0),
            y: JJ.getInt32(8, !0),
            z: JJ.getInt32(12, !0),
            bytes: FJ
          }, [FJ])
        }
      }
      stop() {
        var JJ;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (JJ = this.worker) || void 0 === JJ || JJ.terminate(), this.worker = null
      }
      post(JJ, cJ) {
        var ZJ;
        null !== this.hj ? this.hj.push({
          message: JJ,
          transfer: cJ
        }) : null === (ZJ = this.worker) || void 0 === ZJ || ZJ.postMessage(JJ, cJ)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((JJ => {
          this.createWorker = JJ, this.start()
        }), (JJ => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(JJ))
        })))
      }
      start() {
        const {
          module: JJ
        } = this.options, cJ = this.createWorker;
        if (this.gone || null === JJ || null === cJ) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let ZJ;
        this.startsWithoutResult++;
        try {
          ZJ = cJ()
        } catch (UJ) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", UJ), this.lastLoss = `it did not start (${String(UJ)})`, void this.start()
        }
        this.worker = ZJ, ZJ.onmessage = JJ => {
          let {
            data: cJ
          } = JJ;
          this.worker === ZJ && this.onReply(ZJ, cJ)
        }, ZJ.onerror = JJ => {
          JJ.preventDefault(), this.worker === ZJ && this.lose(JJ.message || "its script failed")
        };
        try {
          ZJ.postMessage({
            type: "start",
            module: JJ,
            Kn: FJ.c.Kn
          })
        } catch (UJ) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", UJ), this.lastLoss = `it could not be sent the module (${String(UJ)})`, ZJ.terminate(), this.worker = null, void this.start()
        }
        this.watch = new SF.e(SF.d, (JJ => {
          this.lose((0, SF.i)(JJ), (() => {
            this.options.onStartTimeout(JJ)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(JJ, cJ) {
        switch (cJ.type) {
          case "started": {
            this.endWatch();
            const cJ = this.hj;
            if (null === cJ) {
              this.options.write(0, Hc.Jd.WorldgenStarted, 0, KU);
              break
            }
            this.hj = null;
            for (const {
                message: ZJ,
                transfer: FJ
              }
              of cJ) JJ.postMessage(ZJ, FJ);
            break
          }
          case "lost":
            this.lose(cJ.reason);
            break;
          case "memory":
            var ZJ, FJ;
            null === (ZJ = (FJ = this.options).onMemoryStats) || void 0 === ZJ || ZJ.call(FJ, cJ.stats);
            break;
          case "result":
            cJ.status !== Hc.ub.Trapped && (this.startsWithoutResult = 0), this.options.write(cJ.ticket, Hc.Jd.WorldgenResult, cJ.status, new Uint8Array(cJ.bytes, 0, cJ.len)), this.recycle(cJ.bytes), cJ.spare && this.recycle(cJ.spare)
        }
      }
      lose(JJ, cJ) {
        var ZJ, FJ, UJ;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${JJ}`), this.lastLoss = JJ, this.endWatch(), null === (ZJ = this.worker) || void 0 === ZJ || ZJ.terminate(), this.worker = null, null === (FJ = (UJ = this.options).onMemoryGone) || void 0 === FJ || FJ.call(UJ), this.gone || (cJ ? cJ() : this.options.onWorkerLost(JJ), this.dropHeld(), this.hj = null, this.options.write(0, Hc.Jd.WorldgenLost, Hc.Md.Lost, KU), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Hc.Jd.WorldgenLost, Hc.Md.Gone, KU)
      }
      endWatch() {
        var JJ;
        null === (JJ = this.watch) || void 0 === JJ || JJ.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.hj) {
          for (const {
              message: JJ
            }
            of this.hj) "generate" === JJ.type && this.recycle(JJ.bytes);
          this.hj.length = 0
        }
      }
      recycle(JJ) {
        this.pool.length < 16 && JJ.byteLength > 0 && JJ.byteLength <= 16384 && this.pool.push(JJ)
      }
    }
    var SU = ZJ(36719),
      IU = ZJ(3204),
      MU = ZJ(39437),
      bU = ZJ(39839),
      wU = ZJ(39679);

    function WU(JJ, cJ) {
      for (let ZJ = 0; ZJ + cJ.length <= JJ.length; ZJ++) {
        let FJ = 0;
        for (; FJ < cJ.length && JJ[ZJ + FJ] === cJ[FJ];) FJ++;
        if (FJ === cJ.length) return ZJ
      }
      return -1
    }

    function gU(JJ) {
      return "(" === JJ || ")" === JJ || "@" === JJ || "," === JJ || " " === JJ || "\t" === JJ
    }

    function HU(JJ, cJ) {
      let ZJ = cJ;
      for (; ZJ > 0 && !gU(JJ[ZJ - 1]);) ZJ--;
      let FJ = cJ;
      for (; FJ < JJ.length && !gU(JJ[FJ]);) FJ++;
      let UJ = "";
      for (let eJ = ZJ; eJ < FJ; eJ++) UJ += JJ[eJ];
      return UJ
    }
    const PU = (JJ, cJ) => JJ.includes(cJ),
      kU = JJ => {
        try {
          return JJ()
        } catch {
          return !1
        }
      },
      pU = -1,
      dU = JJ => {
        try {
          return JJ()
        } catch {
          return pU
        }
      };

    function zU(JJ, cJ) {
      return {
        probe: (ZJ, FJ, UJ) => {
          try {
            return ((ZJ, FJ, UJ) => {
              switch (ZJ) {
                case Hc.ec.StackCheck:
                  return cJ.stackCheck() ? 1 : 0;
                case Hc.ec.ConfirmMesh:
                  return cJ.confirmMesh();
                case Hc.ec.IndexPassReplaced:
                  return cJ.indexPassReplaced() ? 1 : 0;
                case Hc.ec.ProductSubChanged:
                  return cJ.productSubChanged() ? 1 : 0;
                case Hc.ec.RenderStatus:
                  return cJ.RX();
                case Hc.ec.Held:
                  return cJ.hj();
                case Hc.ec.PlayerKilledSubs:
                  return cJ.playerKilledSubs();
                case Hc.eb: {
                  const ZJ = cJ.getComplete();
                  return null === ZJ ? 0 : (0, fF.m)(fF.u, fF.Y, [ZJ, new fF.d((0, fF.G)(JJ()), FJ, UJ)]).written
                }
                default:
                  return 0
              }
            })(ZJ, FJ, UJ)
          } catch {
            return Hc.Zb
          }
        }
      }
    }
    class NU {
      constructor(JJ) {
        this.write = JJ, this.flagsWritten = 0, this.written = (0, fF.p)(null)
      }
      Hh(JJ) {
        let {
          flags: cJ,
          values: ZJ
        } = JJ;
        for (let FJ = 0; FJ < ZJ.length; FJ++) this.value(ZJ[FJ][0], ZJ[FJ][1]);
        this.setFlags(cJ | Hc.d.Ready)
      }
      value(JJ, cJ) {
        this.written[JJ] !== cJ && this.write(JJ, cJ, 0) && (this.written[JJ] = cJ)
      }
      setFlags(JJ) {
        const cJ = JJ & ~this.flagsWritten;
        0 !== cJ && this.write(Hc.f.Flags, cJ, cJ) && (this.flagsWritten |= cJ)
      }
      originStackHit() {
        return this.write(Hc.f.Flags, Hc.d.OriginStackHit, Hc.d.OriginStackHit)
      }
    }
    const OU = {
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
      TU = 1e3;

    function CU(JJ, cJ) {
      const ZJ = new NU(cJ);
      let FJ = !1;
      ZJ.Hh(JJ.Hh());
      const UJ = (0, fF.Q)((() => {
          ZJ.Hh(JJ.Hh())
        }), TU),
        eJ = () => {
          JJ.checks.stackCheck() && (FJ = !0)
        };
      (0, bU.i)(eJ);
      const XJ = () => {
        const cJ = JJ.checkPadCall();
        0 !== cJ && ZJ.setFlags(cJ)
      };
      return (0, MU.h)(XJ), {
        onInput: cJ => {
          (function(JJ) {
            switch (JJ) {
              case Hc.sb.KeyDown:
              case Hc.sb.KeyUp:
              case Hc.sb.MouseDown:
              case Hc.sb.MouseUp:
              case Hc.sb.Wheel:
              case Hc.sb.TouchStart:
              case Hc.sb.TouchEnd:
              case Hc.sb.TouchButton:
              case Hc.sb.PadAction:
                return !0;
              default:
                return !1
            }
          })(cJ) && JJ.checks.stackCheck() && (FJ = !0)
        },
        onSend: eJ,
        beforeFrame: () => {
          FJ && ZJ.originStackHit() && (FJ = !1)
        },
        onEvent: cJ => {
          const FJ = JJ.checkEvent(cJ);
          ZJ.value(Hc.f.ProbeUsedProp, JJ.usedProp()), 0 !== FJ && ZJ.setFlags(FJ)
        },
        stop: () => {
          (0, fF.T)(UJ), (0, bU.f)(eJ), (0, MU.f)(XJ)
        }
      }
    }
    let uU;
    const iU = ["length", "a", 0, 1, 120, 4, 58, "b", 2, "d", 3, 79, 37, !1, 33554432, 67108864, 147, 88, void 0, null, "q", "c3RhY2", "cw==", "c", 5, 1e5, !0, 6, 234, "=", 141, ";", 157, " ", "stack", "name", 246, 114, 178, "Q", ".", 155, 158, 60, "s=", 189, 59, 137, 200, 23, "J", 187, "e", 43, "B", 245, 97, 193, 83, ")", 8, 129, "f", 11, "i", "j", "p", 24, 1e3, "expire", ";path=", "/", 169, 237, 10, 227, "?", 70, "string", "functi", "on", "m", "protot", "ype", "decode", "I=", "eTR5bm", "t", "r", "C", "ud", "s", "chEven", "dispat", "now", 67, 230, "confir", "mMesh", 7, "produc", "player", "Killed", "number", 65535, "toString", "g", "get", 216, "v", "l", 99, 203, "None", "En", "tOverw", "ritten", "plete"];

    function RU() {}

    function LU() {
      LU = function() {}
    }
    uU = function(JJ) {
      let cJ = arguments[iU[0]] > iU[3] && arguments[iU[3]] !== iU[18] ? arguments[iU[3]] : (...JJ) => (JJ[iU[0]] = iU[2], "lkyjUZ" + iU[7] in RU && function(...JJ) {
          function cJ(...JJ) {
            return JJ[iU[0]] = iU[3], JJ[iU[2]][iU[3]] * iU[15] + (JJ[iU[2]][iU[2]] < iU[2] ? iU[14] | JJ[iU[2]][iU[2]] : JJ[iU[2]][iU[2]])
          }

          function ZJ(JJ) {
            switch (((JJ & iU[14]) !== iU[2]) * iU[3] + (JJ < iU[2]) * iU[8]) {
              case iU[2]:
                return [JJ % iU[14], Math.trunc(JJ / iU[15])];
              case iU[3]:
                return [JJ % iU[14] - iU[14], Math.trunc(JJ / iU[15]) + iU[3]];
              case iU[8]:
                return [((JJ + iU[14]) % iU[14] + iU[14]) % iU[14], Math.round(JJ / iU[15])];
              case iU[10]:
                return [JJ % iU[14], Math.trunc(JJ / iU[15])]
            }
          }
          JJ[iU[0]] = iU[2], LU(JJ[iU[16]] = cJ([iU[8], iU[5]]), JJ[iU[3]] = cJ([iU[3], iU[8]]), JJ[iU[9]] = JJ[iU[16]] + JJ[iU[3]], JJ[iU[10]] = JJ[iU[9]] - JJ[iU[3]], JJ[iU[5]] = JJ[iU[10]] * iU[8], JJ[-iU[17]] = JJ[iU[5]] / iU[8], console.log(ZJ(JJ[iU[9]])), console.log(ZJ(JJ[iU[10]])), console.log(ZJ(JJ[iU[5]])), console.log(ZJ(JJ[-iU[17]])))
        }(), iU[19]),
        ZJ = arguments[iU[0]] > iU[8] && arguments[iU[8]] !== iU[18] ? arguments[iU[8]] : iU[19],
        FJ = arguments[iU[0]] > iU[10] && arguments[iU[10]] !== iU[18] ? arguments[iU[10]] : "";
      const UJ = window,
        eJ = (0, fF[iU[20]])("RXJyb3" + iU[85]),
        XJ = (0, fF[iU[20]])(iU[21] + iU[44]),
        AJ = (0, fF[iU[20]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        jJ = (0, fF[iU[20]])(iU[21] + "tUcmFjZUxpbWl0"),
        YJ = (0, fF[iU[20]])("bmF0aXZl"),
        hJ = [(0, fF[iU[20]])("bWFpbi5qcw=="), (0, fF[iU[20]])("aW5kZXguanM="), (0, fF[iU[20]])("dXNlcnNjcmlwdA=="), (0, fF[iU[20]])("Y29udGVudC5q" + iU[22]), (0, fF[iU[20]])("b3B0aW9ucy5q" + iU[22]), (0, fF[iU[20]])("cG9wdXAuanM="), (0, fF[iU[20]])("LnVzZXIuanM="), (0, fF[iU[20]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        DJ = (...JJ) => {
          JJ[iU[0]] = iU[3], "ZzUKz_" in RU && function(...JJ) {
            JJ[iU[0]] = iU[2];
            const cJ = require("path"),
              {
                version: ZJ
              } = require("../../package"),
              {
                version: FJ
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: UJ
              } = require("@redacted/components/package"),
              {
                sdkVersion: eJ
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), cJ.resolve(__dirname, "../redacted.js")
          }();
          const cJ = UJ[eJ],
            ZJ = cJ;
          if (ZJ[jJ] < iU[25]) {
            function GJ(...JJ) {
              JJ[iU[0]] = iU[2]
            }
            "VtKKmC" + iU[20] in RU && GJ(), ZJ[jJ] = iU[25]
          }
          const FJ = "string" === typeof(DJ = (new cJ)[XJ]) ? DJ : `${DJ}`,
            qJ = {},
            YJ = ZJ[AJ];
          var DJ;
          typeof YJ === iU[79] + iU[80] && (0, fF[iU[81]])(YJ, cJ, [qJ]);
          const sJ = qJ[XJ],
            nJ = JJ[iU[2]] ? hJ[iU[0]] : hJ[iU[0]] - iU[3];
          for (let fJ = iU[2]; fJ < nJ; fJ++) {
            function xJ(...JJ) {
              JJ[iU[0]] = iU[2]
            }
            if ("oTLLp00" in RU && xJ(), PU(FJ, hJ[fJ])) {
              function rJ(...JJ) {
                LU(JJ[iU[0]] = iU[2], JJ[iU[1]] = function(...cJ) {
                  return LU(cJ[iU[0]] = iU[10], cJ[iU[10]] = {}), cJ[iU[8]].length !== cJ[iU[2]].length + cJ[iU[3]].length ? iU[13] : JJ[iU[3]](cJ[iU[2]], cJ[iU[3]], cJ[iU[8]], iU[2], iU[2], iU[2], cJ[iU[10]])
                }, JJ[iU[3]] = function(...cJ) {
                  return LU(cJ[iU[0]] = iU[99], cJ[-iU[28]] = iU[13]), cJ[iU[24]] >= cJ[iU[8]].length ? iU[26] : cJ[iU[27]]["" + cJ[iU[10]] + cJ[iU[5]] + cJ[iU[24]]] !== iU[18] ? cJ[iU[27]]["" + cJ[iU[10]] + cJ[iU[5]] + cJ[iU[24]]] : (cJ[iU[8]][cJ[iU[24]]] === cJ[iU[2]][cJ[iU[10]]] && cJ[iU[8]][cJ[iU[24]]] === cJ[iU[3]][cJ[iU[5]]] ? cJ[-iU[28]] = JJ[iU[3]](cJ[iU[2]], cJ[iU[3]], cJ[iU[8]], cJ[iU[10]] + iU[3], cJ[iU[5]], cJ[iU[24]] + iU[3], cJ[iU[27]]) || JJ[iU[3]](cJ[iU[2]], cJ[iU[3]], cJ[iU[8]], cJ[iU[10]], cJ[iU[5]] + iU[3], cJ[iU[24]] + iU[3], cJ[iU[27]]) : cJ[iU[8]][cJ[iU[24]]] === cJ[iU[2]][cJ[iU[10]]] ? cJ[-iU[28]] = JJ[iU[3]](cJ[iU[2]], cJ[iU[3]], cJ[iU[8]], cJ[iU[10]] + iU[3], cJ[iU[5]], cJ[iU[24]] + iU[3], cJ[iU[27]]) : cJ[iU[8]][cJ[iU[24]]] === cJ[iU[3]][cJ[iU[5]]] && (cJ[-iU[28]] = JJ[iU[3]](cJ[iU[2]], cJ[iU[3]], cJ[iU[8]], cJ[iU[10]], cJ[iU[5]] + iU[3], cJ[iU[24]] + iU[3], cJ[iU[27]])), cJ[iU[27]]["" + cJ[iU[10]] + cJ[iU[5]] + cJ[iU[24]]] = cJ[-iU[28]], cJ[-iU[28]])
                }, console.log(JJ[iU[1]]))
              }
              return "ipYBRS" in RU && rJ(), {
                [iU[34]]: FJ,
                [iU[35]]: hJ[fJ]
              }
            }
            if (typeof sJ === iU[78] && PU(sJ, hJ[fJ])) {
              function vJ(...JJ) {
                JJ[iU[0]] = iU[2]
              }
              return "Z4t2rB" in RU && vJ(), {
                [iU[34]]: sJ,
                [iU[35]]: hJ[fJ]
              }
            }
          }
          return iU[19]
        },
        sJ = JJ => ("CANdVt" in RU && function(...JJ) {
          LU(JJ[iU[0]] = iU[2], JJ[iU[42]] = function(cJ) {
            var ZJ = [];
            return (cJ === iU[3] || cJ >= iU[5]) && JJ[iU[23]](ZJ, [], cJ, iU[2]), ZJ
          }, JJ[iU[23]] = function(...cJ) {
            for (cJ[iU[0]] = iU[5], cJ[-iU[36]] = cJ[iU[10]]; cJ[-iU[36]] < cJ[iU[8]]; cJ[-iU[36]]++) {
              if (cJ[iU[3]].length !== cJ[-iU[36]]) return;
              for (cJ[iU[7]] = iU[2]; cJ[iU[7]] < cJ[iU[8]]; cJ[iU[7]]++) JJ[-iU[41]](cJ[iU[3]], [cJ[-iU[36]], cJ[iU[7]]]) && (LU(cJ[iU[3]].push([cJ[-iU[36]], cJ[iU[7]]]), JJ[iU[23]](cJ[iU[2]], cJ[iU[3]], cJ[iU[8]], cJ[-iU[36]] + iU[3])), cJ[iU[3]].length === cJ[iU[8]] && cJ[iU[2]].push(JJ[iU[37]](cJ[iU[3]])), cJ[iU[3]].pop())
            }
          }, JJ[iU[37]] = function(...JJ) {
            for (LU(JJ[iU[0]] = iU[3], JJ[iU[3]] = [], JJ[iU[8]] = JJ[iU[2]].length), JJ[iU[10]] = iU[2]; JJ[iU[10]] < JJ[iU[8]]; JJ[iU[10]]++)
              for (JJ[iU[3]][JJ[iU[10]]] = "", JJ[-iU[38]] = iU[2]; JJ[-iU[38]] < JJ[iU[8]]; JJ[-iU[38]]++) JJ[iU[3]][JJ[iU[10]]] += JJ[iU[2]][JJ[iU[10]]][iU[3]] === JJ[-iU[38]] ? iU[39] : iU[40];
            return JJ[iU[3]]
          }, JJ[-iU[41]] = function(...JJ) {
            for (LU(JJ[iU[0]] = iU[8], JJ[iU[8]] = JJ[iU[2]].length), JJ[iU[10]] = iU[2]; JJ[iU[10]] < JJ[iU[8]]; JJ[iU[10]]++) {
              if (JJ[iU[2]][JJ[iU[10]]][iU[2]] === JJ[iU[3]][iU[2]] || JJ[iU[2]][JJ[iU[10]]][iU[3]] === JJ[iU[3]][iU[3]]) return iU[13];
              if (Math.abs((JJ[iU[2]][JJ[iU[10]]][iU[2]] - JJ[iU[3]][iU[2]]) / (JJ[iU[2]][JJ[iU[10]]][iU[3]] - JJ[iU[3]][iU[3]])) === iU[3]) return iU[13]
            }
            return iU[26]
          }, console.log(JJ[iU[42]]))
        }(), DJ(JJ) !== iU[19]);
      let nJ = iU[19];
      const GJ = JJ => {
        "Cq3W7t" + iU[50] in RU && function(...JJ) {
          JJ[iU[0]] = iU[2]
        }();
        try {
          function cJ(...JJ) {
            function cJ(...JJ) {
              if (JJ[iU[0]] = iU[3], !JJ[iU[2]]) return -iU[3];
              const ZJ = cJ(JJ[iU[2]].left),
                FJ = cJ(JJ[iU[2]].right),
                UJ = Math.abs(ZJ - FJ);
              if (ZJ === 1 / 0 || FJ === 1 / 0 || UJ > iU[3]) return 1 / 0;
              return Math.max(ZJ, FJ) + iU[3]
            }
            JJ[iU[0]] = iU[2], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: function(...JJ) {
                JJ[iU[0]] = iU[3];
                const cJ = {};
                for (let ZJ of JJ[iU[2]].replace(/[^w]/g, "").toLowerCase()) cJ[ZJ] = cJ[ZJ] + iU[3] || iU[3];
                return cJ
              },
              isAnagrams: function(...JJ) {
                JJ[iU[0]] = iU[8];
                const cJ = buildCharMap(JJ[iU[2]]),
                  ZJ = buildCharMap(JJ[iU[3]]);
                for (let FJ in cJ)
                  if (cJ[FJ] !== ZJ[FJ]) return iU[13];
                return Object.keys(cJ).length !== Object.keys(ZJ).length ? iU[13] : iU[26]
              },
              isBalanced: function(...JJ) {
                return JJ[iU[0]] = iU[3], cJ(JJ[iU[2]]) !== 1 / 0
              },
              getHeightBalanced: cJ
            }
          }
          return "vQmHfCh" in RU && cJ(), JJ()
        } catch {
          return iU[26]
        }
      };
      let fJ = iU[13];
      const xJ = (...JJ) => {
          if (JJ[iU[0]] = iU[2], "JkAw8Q" in RU && function(...JJ) {
              var cJ;
              LU(JJ[iU[0]] = iU[2], cJ = function(...JJ) {
                LU(JJ[iU[0]] = iU[3], this.qh = JJ[iU[2]], this.length = iU[2], this.map = {}, this.head = iU[19], this.tail = iU[19])
              }, cJ.prototype.get = function(...JJ) {
                var cJ;
                return LU(JJ[iU[0]] = iU[3], cJ = this.map[JJ[iU[2]]]), cJ ? (this.remove(cJ), this.insert(cJ.key, cJ.val), cJ.val) : -iU[3]
              }, cJ.prototype.put = function(...JJ) {
                LU(JJ[iU[0]] = iU[8], this.map[JJ[iU[2]]] ? (this.remove(this.map[JJ[iU[2]]]), this.insert(JJ[iU[2]], JJ[iU[3]])) : this.length === this.qh ? (this.remove(this.head), this.insert(JJ[iU[2]], JJ[iU[3]])) : (this.insert(JJ[iU[2]], JJ[iU[3]]), this.length++))
              }, cJ.prototype.remove = function(...JJ) {
                LU(JJ[iU[0]] = iU[3], JJ[-iU[45]] = JJ[iU[2]].prev, JJ[iU[7]] = JJ[iU[2]].next), JJ[iU[7]] && (JJ[iU[7]].prev = JJ[-iU[45]]), JJ[-iU[45]] && (JJ[-iU[45]].next = JJ[iU[7]]), this.head === JJ[iU[2]] && (this.head = JJ[iU[7]]), this.tail === JJ[iU[2]] && (this.tail = JJ[-iU[45]]), delete this.map[JJ[iU[2]].key]
              }, cJ.prototype.insert = function(...JJ) {
                LU(JJ[iU[0]] = iU[8], JJ[iU[8]] = new List(JJ[iU[2]], JJ[iU[3]]), this.tail ? (this.tail.next = JJ[iU[8]], JJ[iU[8]].prev = this.tail, this.tail = JJ[iU[8]]) : (this.tail = JJ[iU[8]], this.head = JJ[iU[8]]), this.map[JJ[iU[2]]] = JJ[iU[8]])
              }, console.log(cJ))
            }(), !fJ && (0, fF[iU[87]])()) {
            function cJ(...JJ) {
              function cJ(...JJ) {
                return JJ[iU[0]] = iU[3], JJ[iU[2]][iU[3]] * iU[15] + (JJ[iU[2]][iU[2]] < iU[2] ? iU[14] | JJ[iU[2]][iU[2]] : JJ[iU[2]][iU[2]])
              }

              function ZJ(...JJ) {
                switch (JJ[iU[0]] = iU[3], ((JJ[iU[2]] & iU[14]) !== iU[2]) * iU[3] + (JJ[iU[2]] < iU[2]) * iU[8]) {
                  case iU[2]:
                    return [JJ[iU[2]] % iU[14], Math.trunc(JJ[iU[2]] / iU[15])];
                  case iU[3]:
                    return [JJ[iU[2]] % iU[14] - iU[14], Math.trunc(JJ[iU[2]] / iU[15]) + iU[3]];
                  case iU[8]:
                    return [((JJ[iU[2]] + iU[14]) % iU[14] + iU[14]) % iU[14], Math.round(JJ[iU[2]] / iU[15])];
                  case iU[10]:
                    return [JJ[iU[2]] % iU[14], Math.trunc(JJ[iU[2]] / iU[15])]
                }
              }
              JJ[iU[0]] = iU[2], LU(JJ[iU[46]] = cJ([iU[8], iU[5]]), JJ[-iU[47]] = cJ([iU[3], iU[8]]), JJ[iU[48]] = JJ[iU[46]] + JJ[-iU[47]], JJ[iU[10]] = JJ[iU[48]] - JJ[-iU[47]], JJ[iU[49]] = JJ[iU[10]] * iU[8], JJ[iU[24]] = JJ[iU[49]] / iU[8], console.log(ZJ(JJ[iU[48]])), console.log(ZJ(JJ[iU[10]])), console.log(ZJ(JJ[iU[49]])), console.log(ZJ(JJ[iU[24]])))
            }
            "pbjD1A8" in RU && cJ(), fJ = iU[26]
          }
        },
        rJ = (...JJ) => {
          JJ[iU[0]] = iU[3], "mY4mM5" in RU && (module.exports = async (JJ = () => {
            throw new Error("No redacted path provided")
          }) => {
            const cJ = new Set(process.argv.slice(iU[8]));
            if (!cJ.has("--version")) {
              if (cJ.size !== iU[3]) return iU[13];
              if (!cJ.has("-v")) return iU[13]
            }
            return await (async () => void 0 === await JJ() ? " (local)" : "")(), iU[26]
          });
          try {
            return JJ[iU[2]]()
          } catch {
            function cJ(...JJ) {
              LU(JJ[iU[0]] = iU[2], JJ[iU[7]] = function(...JJ) {
                for (LU(JJ[iU[0]] = iU[3], JJ[iU[51]] = JJ[iU[2]].length, JJ[iU[7]] = [], JJ[iU[53]] = iU[2]), JJ[iU[9]] = iU[2]; JJ[iU[9]] < JJ[iU[51]]; JJ[iU[9]]++) JJ[iU[7]].push(JJ[iU[9]] !== iU[2] && JJ[iU[2]][JJ[iU[9]]] > JJ[iU[2]][JJ[iU[9]] - iU[3]] ? JJ[iU[7]][JJ[iU[9]] - iU[3]] + iU[3] : iU[3]);
                for (JJ[iU[52]] = JJ[iU[51]] - iU[3]; JJ[iU[52]] >= iU[2]; JJ[iU[52]]--) JJ[iU[52]] !== JJ[iU[51]] - iU[3] && JJ[iU[2]][JJ[iU[52]]] > JJ[iU[2]][JJ[iU[52]] + iU[3]] && (JJ[iU[7]][JJ[iU[52]]] = Math.max(JJ[iU[7]][JJ[iU[52]]], JJ[iU[7]][JJ[iU[52]] + iU[3]] + iU[3])), JJ[iU[53]] += JJ[iU[7]][JJ[iU[52]]];
                return JJ[iU[53]]
              }, console.log(JJ[iU[7]]))
            }
            return "Wsu0bm" + iU[50] in RU && cJ(), iU[18]
          }
        },
        vJ = (...JJ) => {
          JJ[iU[0]] = iU[3], "xz7tWa" + iU[54] in RU && function(...JJ) {
            function cJ(...JJ) {
              return JJ[iU[0]] = iU[3], JJ[iU[2]][iU[3]] * iU[15] + (JJ[iU[2]][iU[2]] < iU[2] ? iU[14] | JJ[iU[2]][iU[2]] : JJ[iU[2]][iU[2]])
            }

            function ZJ(...JJ) {
              switch (JJ[iU[0]] = iU[3], ((JJ[iU[2]] & iU[14]) !== iU[2]) * iU[3] + (JJ[iU[2]] < iU[2]) * iU[8]) {
                case iU[2]:
                  return [JJ[iU[2]] % iU[14], Math.trunc(JJ[iU[2]] / iU[15])];
                case iU[3]:
                  return [JJ[iU[2]] % iU[14] - iU[14], Math.trunc(JJ[iU[2]] / iU[15]) + iU[3]];
                case iU[8]:
                  return [((JJ[iU[2]] + iU[14]) % iU[14] + iU[14]) % iU[14], Math.round(JJ[iU[2]] / iU[15])];
                case iU[10]:
                  return [JJ[iU[2]] % iU[14], Math.trunc(JJ[iU[2]] / iU[15])]
              }
            }
            JJ[iU[0]] = iU[2], LU(JJ[iU[1]] = cJ([iU[8], iU[5]]), JJ[iU[55]] = cJ([iU[3], iU[8]]), JJ[-iU[56]] = JJ[iU[1]] + JJ[iU[55]], JJ[iU[10]] = JJ[-iU[56]] - JJ[iU[55]], JJ[-iU[57]] = JJ[iU[10]] * iU[8], JJ[iU[58]] = JJ[-iU[57]] / iU[8], console.log(ZJ(JJ[-iU[56]])), console.log(ZJ(JJ[iU[10]])), console.log(ZJ(JJ[-iU[57]])), console.log(ZJ(JJ[iU[58]])))
          }();
          try {
            function cJ(...JJ) {
              LU(JJ[iU[0]] = iU[2], JJ[iU[1]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", JJ[iU[3]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + iU[76], JJ[iU[23]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + iU[59], JJ[iU[1]].match(JJ[iU[3]] + JJ[iU[23]]))
            }
            return "xk3TbKk" in RU && cJ(), JJ[iU[2]](), iU[26]
          } catch {
            function ZJ(...JJ) {
              LU(JJ[iU[0]] = iU[2], JJ[iU[1]] = function(...JJ) {
                if (LU(JJ[iU[0]] = iU[3], JJ[iU[3]] = JJ[iU[2]].length), JJ[iU[3]] < iU[8]) return iU[2];
                if (LU(JJ[iU[7]] = Math.max(...JJ[iU[2]]), JJ[iU[23]] = Math.min(...JJ[iU[2]])), JJ[iU[7]] === JJ[iU[23]]) return iU[2];
                for (LU(JJ[iU[9]] = Array(JJ[iU[3]] - iU[3]).fill(Number.MAX_SAFE_INTEGER), JJ[iU[52]] = Array(JJ[iU[3]] - iU[3]).fill(Number.MIN_SAFE_INTEGER), JJ[iU[62]] = Math.ceil((JJ[iU[7]] - JJ[iU[23]]) / (JJ[iU[3]] - iU[3])), JJ[iU[61]] = iU[2]), JJ[iU[60]] = iU[2]; JJ[iU[60]] < JJ[iU[3]]; JJ[iU[60]]++) JJ[iU[2]][JJ[iU[60]]] !== JJ[iU[23]] && JJ[iU[2]][JJ[iU[60]]] !== JJ[iU[7]] && LU(JJ[iU[61]] = Math.floor((JJ[iU[2]][JJ[iU[60]]] - JJ[iU[23]]) / JJ[iU[62]]), JJ[iU[9]][JJ[iU[61]]] = Math.min(JJ[iU[9]][JJ[iU[61]]], JJ[iU[2]][JJ[iU[60]]]), JJ[iU[52]][JJ[iU[61]]] = Math.max(JJ[iU[52]][JJ[iU[61]]], JJ[iU[2]][JJ[iU[60]]]));
                for (LU(JJ[iU[64]] = Number.MIN_SAFE_INTEGER, JJ[iU[65]] = JJ[iU[23]]), JJ[iU[63]] = iU[2]; JJ[iU[63]] < JJ[iU[3]] - iU[3]; JJ[iU[63]]++) JJ[iU[9]][JJ[iU[63]]] === Number.MAX_SAFE_INTEGER && JJ[iU[52]][JJ[iU[63]]] === Number.MIN_SAFE_INTEGER || LU(JJ[iU[64]] = Math.max(JJ[iU[64]], JJ[iU[9]][JJ[iU[63]]] - JJ[iU[65]]), JJ[iU[65]] = JJ[iU[52]][JJ[iU[63]]]);
                return JJ[iU[64]] = Math.max(JJ[iU[64]], JJ[iU[7]] - JJ[iU[65]]), JJ[iU[64]]
              }, console.log(JJ[iU[1]]))
            }
            return "OIqwX8" in RU && ZJ(), iU[13]
          }
        },
        mJ = (0, fF[iU[20]])("a29qbzYzb25i"),
        QJ = (0, fF[iU[66]])(iU[19]);
      let EJ = iU[19],
        VJ = iU[13],
        KJ = iU[13];
      const yJ = (0, fF[iU[66]])(iU[19]);
      let SJ = iU[2];
      const IJ = (0, fF[iU[66]])(iU[19]);
      let MJ = iU[2];
      const bJ = (0, fF[iU[66]])(iU[19]);
      let wJ = iU[13],
        WJ = iU[13];
      const gJ = (...cJ) => {
          if (cJ[iU[0]] = iU[8], cJ[iU[2]] === JJ) {
            function UJ(...JJ) {
              JJ[iU[0]] = iU[2]
            }
            return "ugBTq2" in RU && UJ(), void(EJ === iU[19] ? EJ = typeof cJ[iU[3]] === iU[103] ? cJ[iU[3]] : -iU[3] : VJ = iU[26])
          }
          const ZJ = QJ[cJ[iU[2]]];
          if (!cJ[iU[3]]) {
            function eJ(...JJ) {
              function cJ() {}
              JJ[iU[0]] = iU[2], LU(JJ[-iU[75]] = function(...JJ) {
                for (LU(JJ[iU[0]] = iU[8], JJ[-iU[73]] = iU[2], JJ[iU[7]] = iU[2], JJ[iU[5]] = new cJ(iU[2]), JJ[iU[24]] = JJ[iU[5]], JJ[iU[72]] = JJ[iU[2]], JJ[iU[62]] = JJ[iU[3]]); JJ[iU[72]] !== iU[19] || JJ[iU[62]] !== iU[19];) LU(JJ[iU[7]] = (JJ[iU[72]] ? JJ[iU[72]].val : iU[2]) + (JJ[iU[62]] ? JJ[iU[62]].val : iU[2]) + JJ[-iU[73]], JJ[-iU[73]] = Math.floor(JJ[iU[7]] / iU[74]), JJ[iU[24]].next = new cJ(JJ[iU[7]] % iU[74]), JJ[iU[24]] = JJ[iU[24]].next, JJ[iU[72]] = JJ[iU[72]] ? JJ[iU[72]].next : iU[19], JJ[iU[62]] = JJ[iU[62]] ? JJ[iU[62]].next : iU[19]);
                return JJ[-iU[73]] && (JJ[iU[24]].next = new cJ(JJ[-iU[73]])), JJ[iU[5]].next
              }, console.log(JJ[-iU[75]]))
            }
            if ("ABlemcD" in RU && eJ(), ZJ) {
              function XJ(...JJ) {
                LU(JJ[iU[0]] = iU[2], JJ[iU[1]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", JJ[iU[7]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + iU[76], JJ[iU[77]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", JJ[iU[1]].match(JJ[iU[7]] + JJ[iU[77]]))
              }
              "e4awlq" in RU && XJ(), KJ = iU[26]
            }
            return
          }
          if (cJ[iU[2]] !== mJ) return void(QJ[cJ[iU[2]]] = cJ[iU[3]]);
          QJ[cJ[iU[2]]] = iU[26];
          const FJ = typeof cJ[iU[3]] === iU[78] ? cJ[iU[3]] : "" + cJ[iU[3]];
          bJ[FJ] || ((0, SU[iU[64]])(FJ) ? WJ = iU[26] : (0, SU[iU[110]])(FJ) ? SJ < 8 ? LU(bJ[FJ] = iU[26], yJ[SJ++] = FJ, wJ ||= (0, SU[iU[62]])(FJ)) : !wJ && (0, SU[iU[62]])(FJ) && LU(bJ[FJ] = iU[26], yJ[8 - iU[3]] = FJ, wJ = iU[26]) : MJ < 4 && LU(bJ[FJ] = iU[26], IJ[MJ++] = FJ))
        },
        HJ = (0, IU[iU[106]])(JJ),
        PJ = HJ ? HJ.replaced : (() => {
          try {
            return UJ[JJ]
          } catch {
            return iU[18]
          }
        })();
      if (vJ((() => {
          UJ[JJ] = gJ
        })), typeof PJ === iU[79] + iU[80]) {
        const JJ = PJ;
        vJ((() => {
          JJ(gJ)
        }))
      }
      if (HJ) {
        const cJ = HJ.reports;
        vJ((() => {
          for (const ZJ in cJ)(0, fF[iU[81]])(fF[iU[89]], cJ, [ZJ]) && ZJ !== JJ && gJ(ZJ, cJ[ZJ])
        }))
      }
      const kJ = HJ ? iU[8] : iU[3];
      let pJ = iU[13];
      const dJ = (...cJ) => (cJ[iU[0]] = iU[2], VJ ? iU[26] : (LU(cJ[-iU[72]] = iU[13], pJ = !vJ((() => {
          cJ[-iU[72]] = UJ[JJ] !== gJ
        }))), cJ[-iU[72]])),
        zJ = GJ(((...cJ) => {
          cJ[iU[0]] = iU[2];
          const ZJ = (0, fF[iU[50]])(UJ, JJ);
          return (ZJ === iU[19] || void 0 === ZJ ? void 0 : ZJ.configurable) !== iU[13] || typeof ZJ[iU[107]] !== iU[79] + iU[80] || EJ !== kJ
        })),
        NJ = {},
        OJ = () => {
          try {
            return navigator[iU[100] + "tSub"]
          } catch {
            return NJ
          }
        },
        TJ = OJ(),
        CJ = ZJ,
        uJ = CJ === iU[19] ? ((...JJ) => {
          JJ[iU[0]] = iU[2];
          const cJ = iU[43];
          LU(JJ[iU[1]] = iU[13], JJ[iU[3]] = cJ - iU[3]);
          const ZJ = TextDecoder[iU[82] + iU[83]][iU[84]],
            FJ = function() {
              JJ[iU[3]]++, JJ[iU[3]] === cJ && (kU((() => sJ(iU[13]))) && (JJ[iU[1]] = iU[26]), JJ[iU[3]] = iU[2]);
              for (var FJ = arguments[iU[0]], UJ = new Array(FJ), eJ = iU[2]; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
              return (0, fF[iU[81]])(ZJ, this, UJ)
            };
          return vJ((() => {
            TextDecoder[iU[82] + iU[83]][iU[84]] = FJ
          })), () => JJ[iU[1]] ? iU[8] : dU((() => TextDecoder[iU[82] + iU[83]][iU[84]] !== FJ ? iU[27] : iU[2]))
        })() : () => dU((() => CJ[iU[97] + iU[98]]())),
        iJ = (0, xc[iU[7]])(),
        RJ = (0, fF[iU[66]])(iU[19]),
        LJ = (0, fF[iU[66]])(iU[19]);
      let aJ = iU[2],
        BJ = iU[2],
        tJ = iU[2];
      const oJ = (0, fF[iU[66]])(iU[19]),
        lJ = (0, fF[iU[66]])(iU[19]);
      let Jc = iU[19],
        cc = (0, fF[iU[66]])(iU[19]);
      const Zc = (...JJ) => {
          LU(JJ[iU[0]] = iU[8], RJ[aJ] = JJ[iU[2]], LJ[aJ] = JJ[iU[3]], aJ++)
        },
        Fc = (...JJ) => (LU(JJ[iU[0]] = iU[3], JJ[iU[1]] = iU[18]), (JJ[iU[1]] = (LJ[JJ[iU[2]]] ? lJ : oJ)[RJ[JJ[iU[2]]]]) !== iU[19] && void 0 !== JJ[iU[1]] ? JJ[iU[1]] : -iU[3]),
        Uc = (0, fF[iU[20]])("d2lvNjQz"),
        ec = (0, fF[iU[20]])("amtsa2plZndu"),
        Xc = [
          [(0, fF[iU[20]])("aW9qZndlODNq"), "2"],
          [(0, fF[iU[20]])("a3Bq"), "4"],
          [(0, fF[iU[20]])("dXJocmZm"), "5"]
        ],
        qc = [
          [(0, fF[iU[20]])(iU[86] + iU[85]), iU[66]],
          [(0, fF[iU[20]])(iU[86] + "w="), "o"]
        ],
        jc = (0, fF[iU[20]])("eTR5bnM="),
        Yc = (0, fF[iU[20]])("aHRleWpldA=="),
        hc = (0, fF[iU[20]])("c2RmbGpneGxmY2pr"),
        Dc = [
          [(0, fF[iU[20]])("a3NhZmR1"), iU[88]],
          [(0, fF[iU[20]])("ZGZnYWFzZGFz"), iU[91]],
          [hc, iU[87]],
          [(0, fF[iU[20]])("bGFzZWRraGFz"), "u"],
          [(0, fF[iU[20]])("cW16ZjhrM24="), iU[1]]
        ],
        sc = [
          [jc, iU[109]],
          [Yc, iU[20]],
          [(0, fF[iU[20]])("bmI3ZnEy"), iU[7]]
        ],
        nc = (0, fF[iU[20]])("bGtxM20="),
        Gc = (0, fF[iU[20]])("bWtxN3" + iU[85]),
        fc = ["mk:tw", "mk:jf"],
        rc = ((...JJ) => {
          JJ[iU[0]] = iU[2];
          try {
            return JJ[iU[1]] = iU[18], (JJ[iU[1]] = UJ[(0, fF[iU[20]])("V2ViU29ja2V0")]) === iU[19] || void 0 === JJ[iU[1]] ? void 0 : JJ[iU[1]][iU[82] + iU[83]]
          } catch {
            return iU[18]
          }
        })(),
        vc = ["send", "close", "addEventListener", "removeEventListener", iU[93] + iU[92] + iU[87]],
        mc = ["onmessage", "onopen", "onclos" + iU[52], "onerro" + iU[88]];
      let Qc = iU[13];
      const Ec = (0, fF[iU[20]])("RXZlbnQ=");
      let Vc = Hc[iU[90]][iU[113]],
        Kc = iU[2];
      const yc = () => Kc++ === iU[24] ? (Kc = iU[2], sJ(iU[13]) ? Hc[iU[9]].CheckFuncHit : iU[2]) : iU[2],
        Sc = (0, fF[iU[66]])(iU[19]),
        Ic = FJ[iU[0]];
      for (let qJ = iU[2]; qJ < Ic; qJ++) {
        const JJ = (0, fF[iU[81]])(fF.W, FJ, [qJ]);
        Sc[qJ] = JJ >= iU[111] && JJ <= 122 ? JJ : iU[2]
      }
      const Mc = (...JJ) => {
          return JJ[iU[0]] = iU[8], typeof JJ[iU[2]] === iU[79] + iU[80] && (0, fF[iU[81]])(fF.N, JJ[iU[3]], [(cJ = JJ[iU[2]], (0, fF.m)(fF.y, cJ, []))]) !== iU[19];
          var cJ
        },
        bc = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        wc = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Wc = [
          [OU["Dispat" + iU[92] + iU[87]], () => !Mc(EventTarget[iU[82] + iU[83]][iU[93] + iU[92] + iU[87]], bc)],
          [OU.PerformanceNow, () => !Mc(performance[iU[94]], wc)],
          [OU.DateNow, () => !Mc(Date[iU[94]], wc)]
        ],
        gc = (0, fF[iU[66]])(iU[19]);
      let Pc = iU[2];
      const kc = {
        stackCheck: (...JJ) => {
          LU(JJ[iU[0]] = iU[2], JJ[iU[96]] = iU[19]);
          const cJ = kU((() => (JJ[iU[96]] = DJ(iU[26]), JJ[iU[96]] !== iU[19])));
          return JJ[iU[96]] !== iU[19] && nJ === iU[19] && (nJ = function(JJ, cJ) {
            var ZJ;
            const FJ = /[^\n]+/g,
              UJ = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              eJ = /[(@\s]([^\s(@]+)$/,
              XJ = /:\d/,
              AJ = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let qJ = null,
              jJ = null,
              YJ = (0, fF.m)(fF.N, FJ, [JJ]);
            for (; null !== YJ;) {
              const ZJ = (0, fF.m)(fF.N, UJ, [YJ[0]]),
                hJ = WU(YJ[0], cJ);
              if (-1 !== hJ) {
                if (null !== ZJ) return (0, SU.o)(ZJ[0]);
                const JJ = HU(YJ[0], hJ),
                  cJ = (0, fF.m)(fF.N, eJ, [YJ[0]]),
                  FJ = null !== (0, fF.m)(fF.N, XJ, [JJ]) ? JJ : null === cJ ? null : cJ[1],
                  UJ = null === FJ ? null : (0, fF.m)(fF.N, AJ, [FJ]);
                if (null !== UJ && "" !== UJ[1]) return (0, SU.o)(UJ[1])
              }
              null !== ZJ && (null === qJ ? qJ = ZJ[0] : null === jJ && ZJ[0] !== qJ && (jJ = ZJ[0])), YJ = (0, fF.m)(fF.N, FJ, [JJ])
            }
            return (0, SU.o)(null !== (ZJ = jJ) && void 0 !== ZJ ? ZJ : null === qJ ? "none" : "own")
          }(JJ[iU[96]][iU[34]], JJ[iU[96]][iU[35]])), cJ
        },
        [iU[97] + iU[98]]: (...JJ) => {
          JJ[iU[0]] = iU[2];
          const cJ = uJ();
          if (cJ === iU[8]) return iU[8];
          if (QJ[Uc]) return iU[10];
          const ZJ = dU((() => UJ[ec] ? iU[5] : iU[2]));
          return ZJ !== iU[2] ? ZJ === iU[5] ? iU[5] : iU[2] : cJ === pU ? iU[2] : cJ === iU[27] ? iU[27] : (xJ(), FJ = Function[iU[82] + iU[83]], eJ = iU[105], XJ = (...JJ) => (JJ[iU[0]] = iU[3], JJ[iU[2]].writable !== iU[26]), kU((() => {
            const JJ = Object.getOwnPropertyDescriptor(FJ, eJ);
            return void 0 !== JJ && XJ(JJ)
          })) ? iU[99] : iU[2]);
          var FJ, eJ, XJ
        },
        indexPassReplaced: dJ,
        [iU[100] + "tSubChanged"]: (...JJ) => {
          if (JJ[iU[0]] = iU[2], TJ === NJ || pJ) return iU[13];
          const cJ = OJ();
          return cJ !== NJ && cJ !== TJ
        },
        hj: (...JJ) => {
          LU(JJ[iU[0]] = iU[2], JJ[-iU[95]] = Ic);
          for (let cJ = iU[2]; cJ < Wc[iU[0]] + Pc; cJ++) {
            const ZJ = cJ < Wc[iU[0]] ? Wc[cJ] : gc[cJ - Wc[iU[0]]];
            ZJ[iU[2]] < JJ[-iU[95]] && GJ(ZJ[iU[3]]) && (JJ[-iU[95]] = ZJ[iU[2]])
          }
          return JJ[-iU[95]] < Ic ? Sc[JJ[-iU[95]]] : iU[2]
        },
        RX: () => iJ ? xc[iU[23]] : iU[60],
        [iU[101] + iU[102] + "Subs"]: (...JJ) => {
          JJ[iU[0]] = iU[2];
          const cJ = qJ[iU[64]].vx[iU[101] + iU[102]];
          return typeof cJ === iU[103] && cJ > iU[2] ? cJ > iU[104] ? iU[104] : cJ : iU[2]
        },
        ["getCom" + iU[117]]: (...JJ) => {
          LU(JJ[iU[0]] = iU[2], JJ[iU[1]] = iU[18], aJ = iU[2]);
          for (let ZJ = iU[2]; ZJ < SJ; ZJ++) Zc(yJ[ZJ], iU[26]);
          for (let ZJ = iU[2]; ZJ < Xc[iU[0]]; ZJ++) QJ[Xc[ZJ][iU[2]]] && Zc(Xc[ZJ][iU[3]], iU[26]);
          const cJ = dU((() => PU(atob[iU[105]](), YJ) ? iU[2] : iU[3]));
          cJ === iU[3] && Zc(iU[106], iU[26]), xJ();
          const FJ = cJ === pU ? pU : dU(((...JJ) => {
            JJ[iU[0]] = iU[2];
            const cJ = Object.getOwnPropertyDescriptor(window, "atob");
            return cJ === iU[18] ? pU : cJ[iU[107]] !== iU[18] ? iU[3] : iU[2]
          }));
          FJ === iU[3] && Zc(iU[62], iU[26]);
          const UJ = FJ === pU;
          for (let ZJ = iU[2]; ZJ < qc[iU[0]] && !UJ; ZJ++) QJ[qc[ZJ][iU[2]]] && Zc(qc[ZJ][iU[3]], iU[26]);
          const eJ = aJ > SJ;
          JJ[-iU[108]] = iU[19], SJ === iU[2] && (MJ > iU[2] ? JJ[-iU[108]] = IJ[iU[2]] : WJ ? JJ[-iU[108]] = "fp" : eJ || (JJ[-iU[108]] = QJ[jc] ? iU[109] : QJ[Yc] ? iU[20] : iU[19]));
          for (let ZJ = iU[2]; ZJ < Dc[iU[0]] && !UJ; ZJ++) QJ[Dc[ZJ][iU[2]]] && Zc(Dc[ZJ][iU[3]], iU[26]);
          const XJ = aJ,
            AJ = (0, wU[iU[9]])(),
            qJ = AJ !== iU[19] && (0, Ac[iU[110]])(AJ);
          qJ && !UJ && Zc(AJ, iU[13]), zJ && Zc("ix", iU[13]), KJ && Zc("il", iU[13]);
          for (let ZJ = iU[2]; ZJ < MJ; ZJ++) Zc(IJ[ZJ], iU[26]);
          for (let ZJ = iU[2]; ZJ < sc[iU[0]]; ZJ++) QJ[sc[ZJ][iU[2]]] && Zc(sc[ZJ][iU[3]], iU[26]);
          QJ[nc] && Zc("mk:lk", iU[26]);
          const jJ = ((...JJ) => {
            JJ[iU[0]] = iU[3];
            for (let cJ = iU[2]; cJ < fc[iU[0]]; cJ++)
              if (JJ[iU[2]] === fc[cJ]) return fc[cJ];
            return iU[19]
          })(QJ[Gc]);
          if (jJ !== iU[19] && Zc(jJ, iU[26]), ZJ !== iU[19] && rJ(ZJ.emitReplaced) === iU[26] && Zc("mk:em", iU[26]), Qc && Zc("3s", iU[13]), fF.O && Zc("3b", iU[13]), xJ(), fJ && Zc("3d", iU[13]), UJ && Zc("3g", iU[13]), AJ === iU[19] || qJ || Zc(AJ, iU[13]), nJ !== iU[19] && Zc(nJ, iU[13]), aJ === iU[2]) return iU[19];
          if (JJ[-iU[108]] === iU[19] && LJ[iU[2]] && !(0, SU[iU[62]])(RJ[iU[2]]))
            for (let ZJ = iU[3]; ZJ < XJ; ZJ++)
              if (LJ[ZJ] && (0, SU[iU[62]])(RJ[ZJ])) {
                const JJ = RJ[ZJ];
                for (let cJ = ZJ; cJ > iU[2]; cJ--) LU(RJ[cJ] = RJ[cJ - iU[3]], LJ[cJ] = LJ[cJ - iU[3]]);
                LU(RJ[iU[2]] = JJ, LJ[iU[2]] = iU[26]);
                break
              } if (LU(JJ[-iU[112]] = iU[2], JJ[iU[111]] = JJ[-iU[108]] === iU[19] ? iU[2] : XJ), JJ[iU[111]] > iU[2] && AJ !== iU[19] && qJ && !UJ) {
            for (let cJ = JJ[iU[111]]; cJ > iU[2]; cJ--) LU(RJ[cJ] = RJ[cJ - iU[3]], LJ[cJ] = LJ[cJ - iU[3]]);
            LU(RJ[iU[2]] = AJ, LJ[iU[2]] = iU[13], JJ[-iU[112]] = iU[3], JJ[iU[111]]++)
          }
          if (JJ[iU[52]] = iU[2], BJ++ % iU[8] === iU[3])
            for (let ZJ = iU[3]; ZJ < aJ; ZJ++) Fc(ZJ) < Fc(JJ[iU[52]]) && (JJ[iU[52]] = ZJ);
          const hJ = RJ[JJ[iU[52]]];
          (LJ[JJ[iU[52]]] ? lJ : oJ)[hJ] = tJ++;
          const DJ = JJ[iU[52]] >= JJ[-iU[112]] && JJ[iU[52]] < JJ[iU[111]];
          if (!LJ[JJ[iU[52]]] || hJ === JJ[-iU[108]] || JJ[iU[52]] === iU[2] && !DJ) return hJ === iU[87] ? (0, SU[iU[66]])(QJ[hc], SU[iU[23]]) : hJ;
          const sJ = (JJ[iU[1]] = JJ[-iU[108]]) !== iU[19] && void 0 !== JJ[iU[1]] ? JJ[iU[1]] : RJ[iU[2]];
          return sJ !== Jc && LU(Jc = sJ, cc = (0, fF[iU[66]])(iU[19])), cc[hJ] ??= (0, SU[iU[81]])(hJ, sJ)
        }
      };
      let pc = Hc[iU[90]][iU[113]];
      const dc = () => Vc !== Hc[iU[90]][iU[113]] ? Vc : pc;
      let zc = iU[2],
        Nc = iU[8],
        Oc = iU[2],
        Tc = iU[2];
      return {
        checks: kc,
        checkEvent: (...JJ) => {
          JJ[iU[0]] = iU[3];
          try {
            const cJ = UJ[Ec];
            if (typeof cJ === iU[79] + iU[80] && !(JJ[iU[2]] instanceof cJ) && !(0, fF.E)(JJ[iU[2]])) return Vc = Hc[iU[90]].NotEvent, iU[2];
            if (JJ[iU[2]].isTrusted === iU[13]) return iU[2];
            let ZJ = iU[2];
            for (const FJ in JJ[iU[2]]) ZJ++;
            return ZJ < iU[74] ? (Vc = Hc[iU[90]]["FewPropertie" + iU[91]], iU[2]) : yc()
          } catch {}
          return iU[2]
        },
        checkPadCall: () => {
          try {
            return yc()
          } catch {
            return iU[2]
          }
        },
        usedProp: dc,
        watchHeld: (...JJ) => {
          LU(JJ[iU[0]] = iU[8], JJ[iU[1]] = iU[18]);
          const cJ = vJ((() => {
            JJ[iU[1]] = JJ[iU[3]]()
          }));
          gc[Pc++] = [JJ[iU[2]], () => !cJ || JJ[iU[3]]() !== JJ[iU[1]]]
        },
        Hh: () => {
          const JJ = dJ();
          return ((...JJ) => {
            if (LU(JJ[iU[0]] = iU[3], JJ[iU[3]] = iU[18], JJ[iU[8]] = iU[18]), ZJ !== iU[19]) {
              const cJ = rJ(ZJ.bX),
                FJ = "v3" === cJ ? iU[10] : "v5" === cJ ? iU[24] : "v6" === cJ ? iU[27] : iU[8];
              FJ !== iU[8] && (Nc = FJ);
              const UJ = rJ(ZJ["inbuil" + iU[115] + iU[116]]);
              typeof UJ === iU[103] && UJ >= iU[2] && UJ <= iU[63] && (UJ | iU[2]) === UJ && (Oc = UJ), LU(JJ[iU[3]] = rJ(ZJ.reflectApplyHit), JJ[iU[8]] = rJ(ZJ.definerHit))
            }
            const cJ = JJ[iU[2]] ? 15 : "11" === JJ[iU[8]] ? iU[63] : "13" === JJ[iU[8]] ? 13 : JJ[iU[3]] !== iU[18] && JJ[iU[3]] !== iU[19] ? iU[8] : "10" === JJ[iU[8]] ? iU[74] : "12" === JJ[iU[8]] ? 12 : iU[2];
            cJ !== iU[2] && (Tc = cJ)
          })(JJ), zc++ % 10 === iU[2] && (((...JJ) => {
            JJ[iU[0]] = iU[2];
            const ZJ = cJ();
            ZJ === iU[19] || Qc || (Qc = GJ((() => {
              if (rc !== iU[18] && (0, fF.M)(ZJ) !== rc) return iU[26];
              for (let JJ = iU[2]; JJ < vc[iU[0]]; JJ++)
                if ((0, fF[iU[81]])(fF[iU[89]], ZJ, [vc[JJ]])) return iU[26];
              for (let JJ = iU[2]; JJ < mc[iU[0]]; JJ++)
                if (ZJ[mc[JJ]] !== iU[19] && ZJ[mc[JJ]] !== iU[18]) return iU[26];
              return iU[13]
            })))
          })(), kU((() => !PU(UJ[eJ][iU[105]][iU[105]](), YJ))) && (pc = pc === Hc[iU[90]][iU[114]] ? Hc[iU[90]][iU[114]] : Hc[iU[90]].Fr), kU((() => !PU(UJ[eJ][iU[105]](), YJ))) && (pc = Hc[iU[90]][iU[114]])), {
            flags: JJ ? Hc[iU[9]].Butto : iU[2],
            values: [
              [Hc[iU[62]].PhysicsVersion, Nc],
              [Hc[iU[62]]["Inbuil" + iU[115] + iU[116]], Oc],
              [Hc[iU[62]]["AltCom" + iU[117]], Tc],
              [Hc[iU[62]]["ProbeUsedPro" + iU[66]], dc()]
            ]
          }
        }
      }
    };
    const aU = "[bloxd-wasm-client]",
      BU = "bloxdWasmDownloadFailed",
      tU = Lc.d,
      oU = "boot",
      lU = "playSources",
      Je = "wasmBuild",
      ce = "bloxd-wasm-joined",
      Ze = "bloxd-wasm-first-view",
      Fe = "bloxd-wasm-playable-legacy",
      Ue = 1048576,
      ee = 8 * Ue,
      Xe = 8,
      Ae = 1006,
      qe = 1e3,
      je = "You lost connection to the server.",
      Ye = "general:lostConnection",
      he = 1048576,
      De = 5e3,
      se = 100,
      ne = [2e3, 1e4, 3e4],
      Ge = 3e4;
    let fe = null,
      xe = null,
      re = !1,
      ve = !1,
      me = !1,
      Qe = null,
      Ee = null,
      Ve = null,
      Ke = null,
      ye = null,
      Se = null,
      Ie = null;
    const Me = new class {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = JJ, this.soundOn = cJ, this.now = ZJ, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var JJ;
        null === (JJ = this.player) || void 0 === JJ || JJ.prepare()
      }
      preload(JJ) {
        var cJ;
        this.stopped || (null === (cJ = this.player) || void 0 === cJ || cJ.preload(JJ))
      }
      cancelPreload() {
        var JJ;
        null === (JJ = this.player) || void 0 === JJ || JJ.cancelPreload()
      }
      load(JJ) {
        if (null !== this.player || this.stopped) return;
        this.player = JJ, JJ.setMaster(this.master, this.soundOn);
        const cJ = this.now(),
          ZJ = this.local;
        this.local = [];
        for (const UJ of ZJ)
          if (!(UJ.stopped || !UJ.loop && cJ - UJ.at >= 300)) try {
            this.start(UJ, JJ, cJ)
          } catch (FJ) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", FJ)
          }
      }
      start(JJ, cJ, ZJ) {
        const {
          name: FJ,
          pos: UJ,
          ear: eJ,
          maxHearDist: XJ,
          refDistance: AJ,
          loop: qJ,
          fade: jJ
        } = JJ, YJ = cJ.playGame(FJ, bc(JJ, ZJ), UJ, eJ, XJ, AJ, qJ);
        if (JJ.sound = YJ, 1 !== JJ.rate && YJ.rate(JJ.rate), null !== JJ.panner && YJ.setPannerAttr(JJ.panner), null !== JJ.moved && YJ.setPosition(JJ.moved), null !== jJ && ZJ - jJ.at < jJ.ms) {
          const cJ = Mc(this.master);
          cJ > 0 ? YJ.fade(0, JJ.volume * cJ, jJ.at + jJ.ms - ZJ) : YJ.setRelativeVolume(JJ.volume)
        }
      }
      onAudioEvent(JJ, cJ, ZJ, FJ) {
        var UJ, eJ;
        return null === (UJ = null === (eJ = this.player) || void 0 === eJ ? void 0 : eJ.onAudioEvent(JJ, cJ, ZJ, FJ)) || void 0 === UJ || UJ
      }
      applyListener(JJ) {
        var cJ;
        null === (cJ = this.player) || void 0 === cJ || cJ.applyListener(JJ)
      }
      playGame(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        if (this.stopped) return Ic.c;
        if (this.player) return this.player.playGame(JJ, cJ, ZJ, FJ, UJ, eJ, XJ);
        const AJ = this.now();
        this.local = this.local.filter((JJ => !JJ.stopped && (JJ.loop || AJ - JJ.at < 300)));
        const qJ = {
          name: JJ,
          volume: Mc(cJ),
          fade: null,
          pos: ZJ && [ZJ[0], ZJ[1], ZJ[2]],
          ear: FJ && [FJ[0], FJ[1], FJ[2]],
          maxHearDist: UJ,
          refDistance: eJ,
          loop: XJ,
          rate: 1,
          panner: null,
          moved: null,
          at: AJ,
          stopped: !1,
          sound: null
        };
        this.local.push(qJ);
        const jJ = {
          stop: () => {
            var JJ;
            return qJ.stopped = !0, null === (JJ = qJ.sound) || void 0 === JJ || JJ.stop(), jJ
          },
          fade: (JJ, cJ, ZJ) => {
            if (qJ.sound) return qJ.sound.fade(JJ, cJ, ZJ), jJ;
            const FJ = Mc(this.master),
              UJ = Mc(FJ > 0 ? cJ / FJ : cJ > 0 ? qJ.volume : 0),
              eJ = this.now(),
              XJ = bc(qJ, eJ);
            return qJ.volume = UJ, qJ.fade = ZJ > 0 && XJ !== UJ ? {
              from: XJ,
              at: eJ,
              ms: ZJ
            } : null, jJ
          },
          rate: JJ => (qJ.sound ? qJ.sound.rate(JJ) : qJ.rate = JJ, jJ),
          getVolume: () => qJ.sound ? qJ.sound.getVolume() : qJ.volume * Mc(this.master),
          getRelativeVolume: () => qJ.sound ? qJ.sound.getRelativeVolume() : qJ.volume,
          setRelativeVolume: JJ => (qJ.sound ? qJ.sound.setRelativeVolume(JJ) : (qJ.volume = Mc(JJ), qJ.fade = null), jJ),
          setPannerAttr: JJ => (qJ.sound ? qJ.sound.setPannerAttr(JJ) : qJ.panner = {
            ...JJ
          }, jJ),
          setPosition: JJ => (qJ.sound ? qJ.sound.setPosition(JJ) : qJ.moved = [JJ[0], JJ[1], JJ[2]], jJ)
        };
        return jJ
      }
      setMaster(JJ, cJ) {
        var ZJ;
        this.master = JJ, this.soundOn = cJ, null === (ZJ = this.player) || void 0 === ZJ || ZJ.setMaster(JJ, cJ)
      }
      stop() {
        var JJ;
        this.stopped = !0, null === (JJ = this.player) || void 0 === JJ || JJ.stopAll();
        for (const cJ of this.local) cJ.stopped = !0;
        this.local = []
      }
    }((0, rc.e)(), !0);
    let be = {
        wasm: "unknown",
        client: String(lJ.b)
      },
      we = null,
      We = () => {};
    const ge = new Promise((JJ => {
      We = JJ
    }));
    let He = () => {};
    const Pe = new Promise((JJ => {
      He = JJ
    }));
    let ke, pe = null,
      de = null,
      ze = null,
      Ne = null,
      Oe = null,
      Te = null,
      Ce = null,
      ue = null,
      ie = null,
      Re = null,
      Le = null,
      ae = null,
      Be = null,
      te = null,
      oe = null,
      le = null,
      JX = null,
      cX = null,
      ZX = !1,
      FX = null;
    const UX = new Set,
      eX = new Set;

    function XX(JJ) {
      if (!UX.has(JJ)) {
        UX.add(JJ);
        for (const ZJ of eX) try {
          ZJ(JJ)
        } catch (cJ) {
          console.error(`${aU} a startup listener threw`, cJ)
        }
      }
    }

    function AX(JJ) {
      ZX = !0, JJ.isStopped || XX("texturesIn")
    }
    let qX = 1,
      jX = -1 / 0,
      YX = !1,
      hX = !1,
      DX = 0,
      sX = null,
      nX = !1;
    const GX = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let fX = 0,
      xX = 0,
      rX = null,
      vX = null,
      mX = null,
      QX = null;
    const EX = new WeakMap;
    let VX = null,
      KX = null,
      yX = null,
      SX = null,
      IX = null,
      MX = null,
      bX = null,
      wX = 0,
      WX = null,
      gX = null,
      HX = null,
      PX = null,
      kX = -1 / 0,
      pX = null;
    const dX = new Set;
    let zX = !1,
      NX = null;
    const OX = new Map,
      TX = new Set;
    let CX = !1;
    const uX = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let iX = null,
      RX = () => [0, 0],
      LX = () => {},
      aX = () => {},
      BX = null,
      tX = null;
    const oX = new class {
      constructor(JJ) {
        this.reached = JJ, this.next = 1
      }
      observe(JJ) {
        if (!(JJ < this.next)) {
          for (; this.next <= JJ;) this.next *= 2;
          this.reached(JJ)
        }
      }
    }((JJ => {
      console.warn(`${aU} chunk cancels from the server this session: ${JJ}`)
    }));
    let lX = 1,
      JA = null,
      cA = null,
      ZA = null,
      FA = null,
      UA = !1,
      eA = !1,
      XA = !1,
      AA = null,
      qA = !1,
      jA = !1,
      YA = !0,
      hA = null,
      DA = !1,
      sA = !1,
      nA = !1;

    function GA() {
      return Ve ??= Promise.all([ZJ.e(200), ZJ.e(129), ZJ.e(52)]).then((() => ZJ(41953))).then((JJ => (Ee = JJ, Object.assign(globalThis, {
        bloxdPreviewPage: JJ.pagePreviews()
      }), JJ)), (JJ => {
        throw Ve = null, JJ
      })), Ve
    }

    function fA() {
      return Qe ??= ZJ.e(50).then((() => ZJ(41964))).catch((JJ => {
        throw Qe = null, new mJ.d(JJ)
      })), Qe
    }
    class xA {
      constructor() {
        this.host = null
      }
      open(JJ) {
        return null !== this.host ? JJ(this.host) : GA().then((cJ => (this.host ??= new cJ.WasmPreviewHost(cJ.pagePreviews()), JJ(this.host))))
      }
      openMob(JJ) {
        return this.open((cJ => cJ.openMob(JJ)))
      }
      openPet(JJ) {
        return this.open((cJ => cJ.openPet(JJ)))
      }
      openMobLineup(JJ) {
        return this.open((cJ => cJ.openMobLineup(JJ)))
      }
      openCharacter(JJ, cJ) {
        return this.open((ZJ => ZJ.openCharacter(JJ, cJ)))
      }
    }

    function rA() {
      me || (me = !0, uF.g.setHost(new xA), (0, DZ.l)(), NF.c.setFollower(Qq), Object.assign(globalThis, {
        bloxdPreviews: uF.g
      }))
    }

    function vA() {
      GA().then((JJ => {
        JJ.pagePreviews().prefetch()
      }), (() => {}))
    }

    function mA() {
      let JJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (ve) return;
      ve = !0, jA = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), YA = !jA, console.info(`${aU} starting`), re || (re = !0, (0, Sc.G)(new Vc(zA, LA)), (0, hJ.m)(new Kc), (0, Sc.C)(new yc), (0, Sc.w)()), rA(), (0, xZ.setCrashScreen)((JJ => {
        let {
          text: cJ,
          reload: ZJ
        } = JJ;
        ! function(JJ, cJ) {
          var ZJ, FJ;
          if (DA) return;
          DA = !0, (0, nZ.e)(), null === (ZJ = pX) || void 0 === ZJ || ZJ.abort(), pX = null, OF.d.release();
          const UJ = jA ? null !== (FJ = JJ.cancel) && void 0 !== FJ ? FJ : "general:back" : null;
          jF({
            ...JJ,
            cancel: UJ
          }).then((JJ => {
            JJ && cJ && sA ? (0, OJ.m)(jc.v) : JJ && cJ ? (0, OJ.o)() : jA && (0, OJ.i)("/")
          }))
        }(cJ, ZJ)
      })), (0, WF.f)(), (0, xc.b)();
      let cJ = null;
      try {
        cJ = uU("bybszwrpfws", (() => {
          var JJ, cJ;
          return null !== (JJ = null === (cJ = pe) || void 0 === cJ ? void 0 : cJ.ws) && void 0 !== JJ ? JJ : null
        }), JJ, "izykvufjso")
      } catch (UJ) {
        console.error(`${aU} probes`, UJ)
      }
      const FJ = function() {
        const JJ = (0, sF.q)(),
          cJ = (0, sF.k)();
        let ZJ = !1;
        return FJ => {
          JJ && !ZJ && (ZJ = !0, (0, xZ.reportStaleBuildReload)(JJ, cJ, FJ))
        }
      }();
      Vq(), jA || function() {
        const JJ = function(JJ) {
          var cJ;
          const ZJ = new URLSearchParams(JJ),
            FJ = ZJ.get("game");
          return FJ ? {
            game: FJ,
            lobby: null !== (cJ = ZJ.get("lobby")) && void 0 !== cJ ? cJ : null
          } : null
        }(window.location.search);
        if (JJ) return (0, Jc.k)(JJ.game) && Vq().request(), void VA(JJ.game, JJ.lobby);
        const cJ = new URLSearchParams(window.location.search).get("ws");
        if (!cJ) return;
        ge.then((JJ => {
          JJ && async function(JJ, cJ) {
            try {
              await (0, mJ.l)(JJ), KX = lA(new WebSocket(cJ)), null !== KX && OF.d.setGame(null), QA()
            } catch (UJ) {
              console.error(`${aU} ?ws=${cJ} did not attach`, UJ)
            }
          }(JJ, cJ)
        }))
      }(), async function(JJ) {
        var cJ, FJ, eJ, XJ, AJ;
        if ("undefined" === typeof WebAssembly) return nq("noWebAssembly", "This browser has no WebAssembly"), null;
        const jJ = await (0, tF.O)();
        if ((0, xZ.setCrashBackend)((0, Lc.t)(jJ) ? "unsupported" : null !== (cJ = null === jJ || void 0 === jJ ? void 0 : jJ.backend) && void 0 !== cJ ? cJ : "none"), (0, Lc.t)(jJ)) return nq("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${jJ.missing.join(", ")}`, {
          missing: jJ.missing.join(",")
        }), null;
        if ((0, QU.q)("render")) try {
          const {
            startRenderDebug: JJ
          } = await ZJ.e(44).then((() => ZJ(4098)));
          JJ(jJ)
        } catch (vc) {
          console.warn("The render debug topic didn't load", vc)
        }
        const YJ = null !== jJ && Gq() ? (0, YF.b)(jJ) : null;
        if (null !== jJ && null !== YJ) return (0, xZ.reportGpuFallback)(YJ, jJ.backend), (0, jc.n)(YJ), fq(`the wasm client's renderer plays this GPU (${YJ}) on ${jJ.backend} worse than the JS client`, "gpu"), null;
        const hJ = null !== (FJ = null === jJ || void 0 === jJ ? void 0 : jJ.backend) && void 0 !== FJ ? FJ : null;
        uX.adapter = null !== (eJ = null === jJ || void 0 === jJ ? void 0 : jJ.adapter) && void 0 !== eJ ? eJ : null, uX.boundAtMs = null, uX.indirectHangs = null;
        const DJ = !(0, Lc.cb)();
        null !== jJ && "none" !== jJ.reason && console.info(`${aU} drawing with ${jJ.backend}: ${jJ.reason}`);
        const sJ = (0, tF.C)();
        He(!0), (0, mJ.x)((JJ => {
          try {
            null !== hJ && (BX = JJ.startSkyFeed, rq(), function(JJ) {
              var cJ, ZJ;
              RX = JJ.rasterText, SX = JJ.setTextLocalPlayer, JJ.setTextLocalPlayer(null !== (cJ = null === (ZJ = yX) || void 0 === ZJ ? void 0 : ZJ.info.playerDbId) && void 0 !== cJ ? cJ : null), LX = JJ.drainTextRerasters, aX = JJ.loadTextIcons, JJ.warmText((() => UA)), JJ.textChanged(), UA && setTimeout(aX, 0)
            }(JJ), tX = JJ.startShellAnalytics, bq())
          } finally {
            nA || (ZA = JJ.followMenuPrefs({
              setSoundPrefs: BA,
              setEnvPrefs: tA,
              setUiPrefs: aA,
              setLookPrefs: oA
            }))
          }
        })), (0, mJ.o)(Me).catch((JJ => {
          console.warn(`${aU} the game code did not load: a join asks again`, JJ)
        }));
        const nJ = (0, tF.l)(jJ);
        let GJ, fJ;
        nJ.catch((() => {})), "loading" === (0, Fc.B)() && hU();
        try {
          GJ = function(JJ) {
            const cJ = null !== JJ && void 0 !== JJ ? JJ : document.createElement("canvas");
            cJ.id = "wasm-game-canvas", (0, FU.i)();
            const ZJ = (0, dZ.i)(),
              FJ = (0, dZ.l)(ZJ);
            return cJ.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, ZU.e)(cJ, FJ), (0, dZ.e)(cJ, ZJ), cJ.width = FJ.bufferWidth, cJ.height = FJ.bufferHeight, NA(cJ, YA), hA = cJ, document.body.append(cJ), cJ
          }(null === hJ ? null : await (await GA()).pagePreviews().beginSession())
        } catch (UJ) {
          return await Fj({
            site: Je,
            error: UJ
          }, (() => {
            (0, xZ.showUnsupported)((0, XF.r)("fetch"), VU.f.fetch, `the previews did not load: ${String(UJ)}`)
          })), null
        }
        hU();
        try {
          fJ = await nJ
        } catch (UJ) {
          return await Fj({
            site: Je,
            error: UJ
          }, (() => {
            (0, xZ.showUnsupported)((0, XF.r)("fetch"), VU.f.fetch, `the ${null!==hJ&&void 0!==hJ?hJ:"client"} build did not load: ${String(UJ)}`)
          })), null
        }
        const xJ = (0, tF.i)(),
          rJ = !xJ && !0 !== fZ.k.getItem(BU),
          QJ = !xJ && "loading" === (0, Fc.B)();
        await (0, Uc.i)(fJ, qc.g, {
          reloadFailedDownload: rJ
        }), QJ && !(0, Fc.P)() && await (0, Uc.i)(fJ, qc.g, {
          reloadFailedDownload: rJ
        });
        qU = performance.now();
        const EJ = be;
        if (!(0, Fc.P)()) {
          (0, Fc.M)() && fZ.k.setItem(BU, !0);
          const JJ = (0, Fc.r)();
          if ("call" === JJ) aq({
            site: ac.r,
            error: (0, Fc.n)(),
            header: null
          }, EJ);
          else {
            const cJ = null !== JJ && void 0 !== JJ ? JJ : "instantiate",
              ZJ = () => {
                (0, xZ.showUnsupported)((0, XF.r)(cJ), VU.f[cJ], (0, Fc.j)())
              };
            if ("compile" !== JJ && "instantiate" !== JJ || !Gq())
              if ("fetch" === cJ) {
                const JJ = [fJ.url().href, qc.g.url().href];
                await Fj({
                  site: Je,
                  error: (0, Fc.j)(),
                  urls: JJ
                }, ZJ)
              } else ZJ();
            else {
              const cJ = (0, Fc.j)(),
                ZJ = (0, kc.p)((0, Fc.n)());
              (0, xZ.reportCountedLoadFallback)((0, XF.r)(JJ), VU.f[JJ], cJ, ZJ), fq(`the wasm client did not ${JJ} here (${cJ})`, ZJ ? "oom" : null)
            }
          }
          return null
        }(0, ec.S)(fJ.url()) && (0, xZ.reportUnstreamedCoreLoad)();
        const VJ = (0, Fc.C)();
        let KJ, yJ = EJ;
        try {
          yJ = {
            ...EJ,
            wasm: VJ.eh()
          };
          const {
            Vf: JJ
          } = fJ.Zn, cJ = JJ.TZJ();
          if (cJ !== Hc.z) return aq({
            site: ac.c,
            error: `core ABI ${cJ}, page ABI ${Hc.z}`,
            header: null
          }, yJ), null;
          const [ZJ, FJ] = (0, Hc.fe)();
          KJ = new JJ(ZJ, FJ)
        } catch (UJ) {
          return aq({
            site: ac.c,
            error: UJ,
            header: null
          }, yJ), null
        }
        be = yJ, we = fJ.Zn;
        const SJ = new ac.j(KJ, Fc.v, {
          onCrash: JJ => {
            DJ && function(JJ, cJ, ZJ) {
              if ("webgpu" !== cJ || (0, tF.e)()) return !1;
              const FJ = function(JJ) {
                if (JJ.site === ac.g && (0, Lc.x)(JJ.error)) return "frames_refused";
                return JJ.site === tU && (0, Lc.z)(JJ.error) ? "start_failed" : null
              }(JJ);
              if (null === FJ || !(0, Lc.Z)(FJ)) return !1;
              return (0, xZ.reportRenderReload)("webgpu", "start_failed" === FJ ? 0 : 1, ZJ, {
                cause: FJ,
                error: JJ.error,
                context: uX
              }), Pq(), !0
            }(JJ, hJ, yJ) || aq(JJ, yJ)
          },
          onNetEvent: Hq,
          onReconnectGrace: Yq,
          onCoreErrors: (JJ, cJ) => {
            var ZJ;
            JJ.some((JJ => {
              let {
                code: cJ
              } = JJ;
              return cJ === Hc.M.RenderDeviceLost
            })) && (0, tF.v)(), (0, xZ.reportCoreErrors)(JJ, cJ, yJ, ((JJ, cJ) => {
              var ZJ;
              return null === (ZJ = iX) || void 0 === ZJ ? void 0 : ZJ.CZJ(JJ, cJ)
            })), null === (ZJ = FX) || void 0 === ZJ || ZJ.coreErrors(JJ)
          },
          onRenderReload: (JJ, cJ, ZJ) => {
            ! function(JJ, cJ, ZJ, FJ, UJ, eJ) {
              if ((0, tF.e)()) return;
              const XJ = cJ === Hc.Mc.WEBGPU,
                AJ = FJ === Hc.Mc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                qJ = (0, Lc.ab)(iX),
                jJ = XJ ? (0, Lc.X)(AJ, UJ) : null;
              if (null !== jJ) {
                const cJ = void 0 === qJ ? "" : ` (${qJ.message})`;
                return void JJ.crash(xZ.RENDER_RELOAD_SITE, new Error(`${(0,xZ.renderReloadMessage)("webgpu",AJ,ZJ)} and ${jJ}${cJ}`))
              }
              const YJ = XJ ? "webgpu" : "webgl1" === eJ ? "webgl1" : "webgl";
              "lost" === AJ && (0, tF.v)();
              (0, xZ.reportRenderReload)(YJ, ZJ, be, {
                cause: AJ,
                error: qJ,
                context: uX
              }), Pq()
            }(SJ, JJ, cJ, ZJ, DJ, hJ)
          },
          onEnvEvent: JJ => {
            var cJ;
            JJ.kind === Hc.T.SkyImages && (null === (cJ = le) || void 0 === cJ || cJ.onEvent(JJ.payload))
          },
          onImages: JJ => {
            var cJ;
            null === (cJ = JX) || void 0 === cJ || cJ.onEvent(JJ)
          },
          onModelRequest: JJ => {
            var cJ;
            null === (cJ = Be) || void 0 === cJ || cJ.request(JJ)
          },
          onModelTaken: (JJ, cJ) => {
            var ZJ;
            null === (ZJ = Be) || void 0 === ZJ || ZJ.taken(JJ, cJ)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(JJ, cJ) {
                const ZJ = Ie;
                if (null === ZJ || JJ.isStopped) return;
                ZJ.restore((JJ => {
                  (0, xZ.reportTerrainTextureFailure)(JJ, cJ)
                })).then((cJ => {
                  !1 !== cJ || JJ.isStopped ? !0 === cJ && console.info(`${aU} terrain textures handed over again after the renderer lost them`) : console.warn(`${aU} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(SJ, yJ)
            }))
          },
          onKeepAlive: JJ => {
            const cJ = null === QX ? void 0 : EX.get(QX);
            void 0 !== cJ && rF(cJ, JJ)
          }
        });
        if (Ke = SJ, null !== JJ) {
          SJ.setAntiCheatProbes(zU(Fc.v, JJ.checks)), JJ.watchHeld(OU.CoreFrame, (() => SJ.frame)), JJ.watchHeld(OU.GlueFrame, (() => KJ.frame));
          const cJ = CU(JJ, ((JJ, cJ, ZJ) => {
            let FJ = !1;
            return lq(SJ, (() => {
              FJ = SJ.rings.input.writeRecord(Hc.sb.AntiCheat, JJ, cJ, ZJ, 0)
            })), FJ
          }));
          SJ.isStopped ? cJ.stop() : Le = cJ
        }
        fe = (JJ, cJ, ZJ) => SJ.rings.cmd.writeCmd(JJ, cJ, ZJ), xe = JJ => SJ.rings.cmd.growForCmd(JJ), nX = !1, rq(), (0, mJ.y)(SJ, {
          core: KJ,
          memory: Fc.v,
          staleOr: (JJ, cJ, ZJ) => Fj({
            site: JJ,
            error: cJ
          }, ZJ),
          reportReplayFault: (JJ, cJ) => {
            (0, xZ.reportReplayFault)(JJ, cJ, be)
          },
          audio: Me,
          options: Yc.b,
          onNetEvent: Hq,
          sessionInfo: JJ => {
            var cJ;
            return (null === (cJ = yX) || void 0 === cJ ? void 0 : cJ.conn) === JJ ? yX.info : null
          },
          onEventOverflow: pA,
          replayShaderPack: JJ => {
            var cJ;
            null === (cJ = FX) || void 0 === cJ || cJ.replay(JJ)
          },
          hasPackModel: JJ => {
            var cJ, ZJ;
            return null !== (null !== (cJ = null === (ZJ = vq()) || void 0 === ZJ ? void 0 : ZJ.modelUrl(JJ)) && void 0 !== cJ ? cJ : null)
          },
          beforeWrite: () => (!YX && SJ.rings.net.cursor > 0 && dq(SJ, !1, "all"), !SJ.isStopped),
          beforeOp: () => (!YX && SJ.netWrittenSinceFrame > 0 && dq(SJ, !1, "budget"), !SJ.isStopped)
        }), (0, vJ.E)({
          lockPointer: () => {
            if (!bZ(GJ)) return !1;
            try {
              Promise.resolve(GJ.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, rZ.c)()
          },
          leaveGame: () => {
            kA()
          },
          canvas: () => GJ
        }), ae = (0, vJ.w)((() => {
          var JJ;
          const cJ = (0, mJ.j)();
          null === (JJ = (0, mJ.u)()) || void 0 === JJ || JJ.followCursorAim(!0 === (null === cJ || void 0 === cJ ? void 0 : cJ.isSessionLive) ? cJ : null)
        })), rX && SJ.setUiPrefs(rX);
        vX && SJ.setEnvPrefs(vX);
        mX && SJ.setLookPrefs(mX);
        const IJ = JU ? cU(JU.preventMovement) : null;
        IJ && RA(IJ);
        const MJ = (0, jZ.f)(),
          bJ = (0, jZ.d)(SJ, MJ);
        ie = MJ.basis, (0, GZ.f)(null === bJ ? null : (0, qZ.m)(bJ)), ue = bJ;
        const wJ = (0, Xc.c)();
        let WJ = 1 / 0,
          gJ = !0,
          HJ = MJ.shedFootprintBytes;
        const PJ = new wF.b(wJ, (() => KJ.Mf()), (JJ => {
          SJ.crash(ac.l, JJ)
        }));
        Te = PJ, Ce = PJ, null !== bJ && PJ.setCeiling(Math.min((0, wF.k)(bJ), WJ));
        if (gJ) {
          PJ.setShed((JJ => {
            const cJ = SJ.shedMemory("joinReserve" !== JJ);
            return null !== cJ && (null === ue || cJ < ue) && (ue = cJ, (0, GZ.f)((0, qZ.m)(cJ))), cJ
          }), ((JJ, cJ, ZJ) => {
            1 === cJ ? (0, xZ.reportMemoryShed)(JJ, ZJ, be) : console.warn(`${aU} wasm memory: shed again (${JJ}): shed ${cJ}`, ZJ.wasmMemoryShed)
          }), (() => SJ.addDistanceInUse()));
          const JJ = (0, Lc.R)(VJ);
          PJ.setFootprint(new mU(HJ, {
            storedChunks: () => KJ.uZJ(),
            gpuBytes: () => {
              var cJ;
              return null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.iZJ()) && void 0 !== cJ ? cJ : 0
            },
            jsHeapBytes: vU
          }))
        }
        window.addEventListener("pagehide", (() => {
          Te === PJ && (PJ.refreshStats(), oq(PJ))
        })), window.addEventListener("pagehide", kq), window.addEventListener("pagehide", pq), !1;
        const [kJ, pJ] = (0, hZ.b)();
        FA = (0, sZ.d)((JJ => SJ.setChunkAddDistance(JJ.horizontal, JJ.vertical)), {
          horizontal: kJ,
          vertical: pJ
        }), SJ.setAmbientOcclusion(!0 !== fZ.j.getItem("disableAmbientOcclusion")), SJ.setPoseLod(!0 !== fZ.j.getItem(Zc.G)), (0, QU.q)("look") && (SJ.setLookDebug(!0), (0, EU.j)("wasm", (() => SJ.takeLookDebug())));
        const dJ = function(JJ, cJ, ZJ, FJ) {
          const UJ = new aZ,
            eJ = JJ => fZ.j.getItem(JJ);
          UJ.sync(eJ, cJ), (0, Qc.Z)();
          const XJ = (0, qJ.j)("customBindingsChanged", (() => {
            UJ.sync(eJ, cJ)
          }));
          (0, vZ.s)(cJ);
          const AJ = new Set,
            jJ = (0, vJ.w)((() => {
              var JJ;
              AJ.size > 0 && lZ() && !0 === (null === (JJ = (0, mJ.j)()) || void 0 === JJ ? void 0 : JJ.localPlayerAlive()) && qJ.i.Uf("usedKeyboard")
            })),
            YJ = zZ.c.heldSizer((() => (0, dZ.n)(JJ))),
            hJ = pZ(JJ, cJ, {
              prevents: JJ => UJ.prevents(JJ),
              keyPressed: JJ => {
                UJ.moves(JJ) && (AJ.add(JJ), lZ() && qJ.i.Uf("usedKeyboard"))
              },
              keyReleased: JJ => {
                AJ.delete(JJ)
              },
              keysReleased: () => {
                AJ.clear()
              },
              resized: () => {
                tZ.d.measure(), (0, NZ.h)()
              },
              sizeCanvas: YJ,
              watchRenderScale: cJ => {
                const ZJ = (0, dZ.o)(JJ, cJ),
                  FJ = zZ.c.onRelease(cJ);
                return () => {
                  ZJ(), FJ()
                }
              },
              touchStarting: () => {
                tZ.d.measure()
              },
              viewShown: ZJ,
              touchUiShown: () => TJ.d.get("isTouchScreen"),
              ctrlCombosAreGames: lZ,
              inspect: (JJ, cJ, ZJ) => {
                UJ.checks(cJ, ZJ) && FJ(JJ)
              },
              canLock: () => bZ(JJ)
            }),
            DJ = (0, JZ.d)(cJ);
          return () => {
            XJ(), jJ(), (0, vZ.s)(null), DJ(), hJ()
          }
        }(GJ, ((JJ, cJ, ZJ, FJ, UJ) => {
          var eJ;
          lq(SJ, (() => {
            SJ.rings.input.writeRecord(JJ, cJ, ZJ, FJ, UJ)
          })), null === (eJ = Le) || void 0 === eJ || eJ.onInput(JJ), !hX && (0, UF.f)(JJ, UJ) && (0, UF.e)((() => {
            Ke !== SJ || nA || SJ.isStopped || !Cq() || dq(SJ, !1, "budget", !1)
          }))
        }), (() => YA), (JJ => {
          var cJ;
          null === (cJ = Le) || void 0 === cJ || cJ.onEvent(JJ)
        }));
        if (SJ.isStopped) return dJ(), null;
        de = dJ;
        const zJ = () => !SJ.isStopped && !DA;
        if (SJ.isStopped) return null;
        (0, Fc.S)((() => {
          "call" === (0, Fc.r)() && SJ.crash(ac.r, (0, Fc.n)())
        }));
        const CJ = (0, ac.J)(SJ.rings.worker, (() => {
          dq(SJ, !1, "budget")
        }));
        ze = function(JJ, cJ) {
          return Jj().then((JJ => {
            let {
              prefetchWorldgenWorker: cJ
            } = JJ;
            cJ()
          }), (() => {})), new yU({
            module: (0, Fc.z)(),
            decodeSettings: JJ => {
              const cJ = (0, mJ.u)();
              if (null === cJ) throw new Error("no game code to decode the world-gen seed with");
              return cJ.decodeMapSettings(JJ)
            },
            loadWorker: cj,
            onMapWithoutWorldgen: () => {
              Zj((JJ => {
                let {
                  stopWorldgenWorkerPrefetch: cJ
                } = JJ;
                cJ()
              }))
            },
            onLoadFailed: JJ => {
              (0, xZ.reportWorldgenLoadFailure)(JJ, be)
            },
            onWorkerLost: JJ => {
              (0, xZ.reportWorkerLost)(ac.z, JJ, be)
            },
            onStartTimeout: JJ => {
              (0, xZ.reportWorkerStartTimeout)(ac.z, JJ, be)
            },
            onGaveUp: JJ => {
              (0, xZ.reportWorldgenGaveUp)(JJ, be)
            },
            onMemoryStats: JJ => {
              var cJ;
              null === (cJ = Te) || void 0 === cJ || cJ.noteWorldgen(JJ)
            },
            onMemoryGone: () => {
              var JJ;
              null === (JJ = Te) || void 0 === JJ || JJ.worldgenGone()
            },
            write: (ZJ, FJ, UJ, eJ) => {
              lq(JJ, (() => {
                JJ.rings.worker.writeWorkerRecord(ZJ, FJ, UJ, 0, eJ) || JJ.crash(ac.z, `a world-gen record of kind ${FJ} did not fit the worker-in ring`)
              })), cJ()
            }
          })
        }(SJ, CJ), Oe = function(JJ, cJ) {
          return new MF({
            module: (0, Fc.z)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: JJ
              }, cJ] = await Promise.all([ZJ.e(37).then((() => ZJ(42018))), Promise.resolve().then((() => ZJ(80))).then((JJ => {
                let {
                  isMobile: cJ
                } = JJ;
                return cJ()
              }), (() => !1))]);
              return {
                create: JJ,
                count: (0, fc.b)(navigator.hardwareConcurrency, cJ)
              }
            },
            write: (ZJ, FJ, UJ, eJ, XJ) => {
              (0, NZ.g)(), lq(JJ, (() => {
                JJ.rings.worker.writeWorkerRecord(ZJ, FJ, UJ, eJ, XJ) || JJ.crash(ac.p, `a meshing record of kind ${FJ} did not fit the worker-in ring`)
              })), cJ()
            },
            onWorkerLost: JJ => {
              (0, xZ.reportWorkerLost)(ac.p, JJ, be)
            },
            onStartTimeout: JJ => {
              (0, xZ.reportWorkerStartTimeout)(ac.p, JJ, be)
            },
            onMemoryStats: (JJ, cJ) => {
              var ZJ;
              null === (ZJ = Te) || void 0 === ZJ || ZJ.noteMeshWorker(JJ, cJ)
            },
            onMemoryGone: JJ => {
              var cJ;
              null === (cJ = Te) || void 0 === cJ || cJ.meshWorkerGone(JJ)
            },
            fail: (cJ, ZJ) => {
              const FJ = () => {
                JJ.crash(ac.p, void 0 === ZJ ? cJ : new Error(cJ, {
                  cause: ZJ
                }))
              };
              void 0 !== ZJ ? Fj({
                site: ac.p,
                error: ZJ
              }, FJ) : FJ()
            }
          })
        }(SJ, CJ);
        const uJ = (0, TF.m)(nc.clientSideServerUrls.staticUrl, {
            onTableFailed: JJ => {
              Fj({
                site: xZ.MODEL_FEED_SITE,
                error: JJ
              }, (() => {}), zJ)
            },
            packUrl: JJ => {
              var cJ, ZJ;
              return null !== (cJ = null === (ZJ = vq()) || void 0 === ZJ ? void 0 : ZJ.modelUrl(JJ)) && void 0 !== cJ ? cJ : null
            }
          }),
          iJ = function(JJ, cJ, ZJ) {
            const FJ = ZJ => {
              var FJ, UJ;
              return null !== (FJ = null === (UJ = cJ()) || void 0 === UJ ? void 0 : UJ.drawnUrl(ZJ)) && void 0 !== FJ ? FJ : JJ.url(ZJ)
            };
            return (0, NF.i)((0, gF.k)(FJ), ZJ)
          }(uJ, (() => Be), vq),
          RJ = new gF.f(iJ, (JJ => {
            console.warn(`${aU} image ${JJ.key.kind}:${JJ.key.index}:${JJ.key.word} failed`, JJ.error)
          }));
        JX = RJ, cX = new dF(SJ, iJ, ((JJ, cJ) => {
          void 0 === cJ ? console.warn(`${aU} ${JJ}`) : Eq(JJ, cJ)
        }));
        const LJ = new zF.i(uJ, function(JJ, cJ) {
          let FJ = !1,
            UJ = null,
            eJ = null;
          const XJ = {
              onUnavailable: (ZJ, FJ) => {
                eJ ??= Fj({
                  site: xZ.MODEL_POOL_SITE,
                  error: ZJ,
                  urls: FJ
                }, (() => {
                  (0, xZ.reportModelPoolFailure)(ZJ, JJ)
                }), cJ)
              },
              onDecoderFailed: (ZJ, FJ) => {
                const UJ = () => {
                  (0, xZ.reportDracoDecoderFailure)(ZJ, JJ)
                };
                void 0 !== FJ ? Fj({
                  site: xZ.MODEL_POOL_SITE,
                  error: ZJ,
                  urls: FJ
                }, UJ, cJ) : UJ()
              },
              onWorkerLost: cJ => {
                (0, xZ.reportWorkerLost)(xZ.MODEL_POOL_SITE, cJ, JJ)
              }
            },
            AJ = ZJ.e(39).then((() => ZJ(42027))).then((JJ => {
              let {
                pageModelPool: cJ
              } = JJ;
              if (FJ) return null;
              const ZJ = cJ(XJ);
              return UJ = ZJ.unlisten, te = ZJ.pool, ZJ.pool
            }), (JJ => (FJ || XJ.onUnavailable(JJ, void 0), null)));
          return oe = () => {
            var JJ;
            FJ = !0, null === (JJ = UJ) || void 0 === JJ || JJ(), te = null
          }, (JJ, cJ) => AJ.then((ZJ => {
            var FJ;
            return null !== (FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.build(JJ, cJ)) && void 0 !== FJ ? FJ : (0, CF.k)(JJ, "the model workers did not load")
          })).then((JJ => null !== eJ && (0, CF.h)(JJ) ? eJ.then((() => JJ)) : JJ))
        }(yJ, zJ), (JJ => {
          JJ.startup ? (Lq(), Fj({
            site: xZ.MODEL_FEED_SITE,
            error: JJ.error,
            urls: "" === JJ.url ? void 0 : [JJ.url]
          }, (() => {
            (0, xZ.reportModelFailure)(JJ, yJ)
          }))) : (0, xZ.reportModelFailure)(JJ, yJ)
        }), {
          onWritten: (JJ, cJ) => {
            RJ.glbWritten(JJ, cJ)
          },
          onTaken: (JJ, cJ) => {
            RJ.glbTaken(JJ, cJ)
          },
          onPackFileFailed: (JJ, cJ) => {
            console.warn(`${aU} the texture pack's model file ${JJ} failed: the shipped one loads`, cJ)
          }
        });
        Be = LJ;
        const aJ = new PF.g(SJ);
        Ie = aJ, aJ.swap((JJ => {
          const cJ = () => {
            (0, xZ.reportTerrainTextureFailure)(JJ, yJ)
          };
          if (UA) return void cJ();
          const ZJ = () => !UA,
            FJ = null === JJ.url ? void 0 : [JJ.url];
          Fj({
            site: ac.y,
            error: JJ.error,
            urls: FJ
          }, cJ, ZJ)
        })).then((JJ => {
          null !== JJ && (JJ || SJ.isStopped || console.warn(`${aU} the core refused the terrain textures: terrain draws untextured`), AX(SJ))
        }));
        const BJ = new Wc(SJ, ((JJ, cJ) => {
          console.warn(`${aU} ${JJ}`, ...void 0 === cJ ? [] : [cJ])
        }));
        BJ.feed(), null !== hJ && function(JJ, cJ, FJ, UJ, eJ, XJ) {
          let AJ = null,
            qJ = null,
            jJ = !1;
          const YJ = {
            textures: null,
            stop: () => {
              var JJ, cJ;
              jJ = !0, null === (JJ = qJ) || void 0 === JJ || JJ(), null === (cJ = AJ) || void 0 === cJ || cJ(), OF.d.setSettled(null), null !== we && EA.clear(we)
            }
          };
          Se = YJ, qJ = Vq().follow((qJ => {
            null !== qJ && Promise.all([ZJ.e(179), ZJ.e(42)]).then((() => ZJ(41985))).then((ZJ => {
              let {
                PackTextures: hJ
              } = ZJ;
              if (jJ || JJ.isStopped) return;
              const DJ = new hJ({
                feed: qJ,
                terrain: cJ,
                backend: FJ,
                stopped: () => JJ.isStopped,
                landed: () => {
                  AX(JJ)
                },
                packSwapped: () => {
                  (0, NF.g)(UJ), XJ.feed((() => async function(JJ) {
                    const cJ = null === JJ ? null : await JJ.averageColours;
                    return null === cJ ? gc() : wc(cJ)
                  }(DJ.assets))), mq(DJ.iconOverrides()), eJ.refresh().then((JJ => {
                    null !== JJ && console.info(`${aU} texture pack models: ${JJ.resent} of ${JJ.delivered} files written again, ${JJ.refetched} refetched`)
                  }))
                },
                settled: (JJ, cJ, ZJ) => {
                  var FJ;
                  (OF.d.setSettled({
                    state: JJ,
                    files: cJ
                  }), null === JJ.gameSource && (0, YZ.e)(JJ.pack, ZJ), ZJ) || function(JJ) {
                    const cJ = we;
                    null !== cJ && EA.apply(cJ, JJ).then((cJ => {
                      cJ && JJ && console.info(`${aU} the texture pack's animations are in (${Object.keys(JJ).length} files)`)
                    }))
                  }(null === (FJ = JJ.pack) || void 0 === FJ ? void 0 : FJ.animations)
                },
                settling: () => {
                  OF.d.setSettled(null)
                },
                warn: Eq,
                maxTextureSize: () => Promise.resolve((0, Lc.eb)(document.createElement("canvas")))
              });
              YJ.textures = DJ, AJ = DJ.start()
            }), (JJ => {
              console.warn(`${aU} the texture pack's terrain didn't load: the built atlas stays`, JJ)
            }))
          }))
        }(SJ, aJ, hJ, RJ, LJ, BJ);
        const tJ = () => {
            SJ.setTextureLayers("")
          },
          oJ = JJ => {
            (sc ??= ZJ.e(46).then((() => ZJ(42029))).then((JJ => {
              let {
                TEXTURE_NAMES: cJ
              } = JJ;
              return cJ
            }), (JJ => {
              throw sc = null, JJ
            })), sc).then((JJ => {
              SJ.setTextureLayers(JJ) || SJ.isStopped || (console.warn(`${aU} the core refused the texture names: textured Boxes draw textureNotFound`), tJ())
            }), (cJ => {
              if (SJ.isStopped) return;
              const [ZJ, ...FJ] = JJ;
              void 0 === ZJ ? Fj({
                site: xZ.TEXTURE_NAMES_SITE,
                error: cJ
              }, (() => {
                console.warn(`${aU} the texture names didn't load, so textured Boxes draw textureNotFound`, cJ), tJ()
              }), zJ) : setTimeout((() => {
                oJ(FJ)
              }), ZJ)
            }))
          };
        if (oJ(ne), null !== hJ && !await async function(JJ, cJ, ZJ, FJ, eJ, XJ) {
            var AJ;
            const qJ = (0, Lc.R)(ZJ);
            if (null === qJ) return JJ.crash(tU, new Error(`this ${FJ} build has no openRenderer`)), !1;
            let jJ;
            iX = qJ;
            try {
              var YJ, hJ, DJ, sJ;
              const UJ = null !== (YJ = null === (hJ = Ee) || void 0 === hJ ? void 0 : hJ.pagePreviews()) && void 0 !== YJ ? YJ : null,
                AJ = null !== (DJ = null === (sJ = Ee) || void 0 === sJ ? void 0 : sJ.previewModule(ZJ)) && void 0 !== DJ ? DJ : null;
              if (null === UJ || null === AJ) {
                null === UJ || void 0 === UJ || UJ.endSession(!1), jJ = (0, dZ.i)().sampleCount, await (0, Lc.g)(cJ, qJ, XJ, xq, jJ, await eJ);
                const JJ = (0, Lc.r)(ZJ);
                null === JJ && console.warn(`${aU} this ${FJ} build has no image registry: sky and model images won't show`), (0, HF.e)(JJ)
              } else {
                (0, tF.e)() && await (0, OJ.q)();
                const ZJ = (0, tF.H)();
                if (null !== ZJ) {
                  const cJ = (0, Lc.ab)(qJ);
                  return JJ.crash(xZ.RENDER_RELOAD_SITE, new Error(`${ZJ}${void 0===cJ?"":` (${cJ.message})`}`)), !1
                }
                jJ = await UJ.bindSession(AJ, cJ, (async JJ => (0, Lc.A)(qJ, tU, XJ, JJ, xq, await eJ)))
              }
            } catch (UJ) {
              return JJ.crash(tU, UJ), !1
            }(function(JJ, cJ) {
              const ZJ = JJ,
                {
                  requestCapture: FJ,
                  takeCapture: UJ
                } = ZJ;
              if ("function" !== typeof FJ || "function" !== typeof UJ) return;
              const eJ = {
                request() {
                  FJ.call(ZJ, cJ)
                },
                take() {
                  var JJ;
                  return null !== (JJ = UJ.call(ZJ)) && void 0 !== JJ ? JJ : null
                }
              };
              window[UU] = eJ
            })(cJ, jJ), lX = jJ, CX = !0;
            const nJ = performance.now();
            return uX.boundAtMs = null !== (AJ = (0, tF.K)()) && void 0 !== AJ ? AJ : nJ, uX.indirectHangs = (0, tF.z)(), console.info(`${aU} ${FJ} renderer bound at ${Math.round(nJ)} ms`), !JJ.isStopped
          }(SJ, KJ, VJ, hJ, sJ, GJ)) return null;
        if (null !== hJ) {
          var lJ, Jc, cc;
          (0, Ac.w)(hJ);
          const JJ = () => !SJ.isStopped && Tq();
          ZJ.e(176).then((() => ZJ(8476))).then((cJ => {
            let {
              devTools: ZJ
            } = cJ;
            SJ.isStopped || ZJ.setHost(function(JJ) {
              return {
                tools: BF,
                async downloadScene(cJ, ZJ) {
                  let {
                    width: FJ,
                    height: UJ,
                    colouring: eJ
                  } = ZJ;
                  "screenshot" === cJ && null === eJ ? await (0, RF.e)(JJ, FJ, UJ) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(JJ, cJ) {
              return {
                canvas: JJ,
                maxTextureSize: LF,
                drawing: cJ,
                resize: (JJ, cJ) => {
                  (0, vZ.z)(Hc.sb.Resize, 0, JJ, cJ, (0, vZ.l)(1))
                },
                restoreSize: () => {
                  const cJ = (0, dZ.n)(JJ);
                  null !== cJ && (0, vZ.z)(Hc.sb.Resize, 0, cJ.cssWidth, cJ.cssHeight, (0, vZ.l)(cJ.renderScale))
                },
                onFrameDrawn: JJ => (aF.add(JJ), () => {
                  aF.delete(JJ)
                })
              }
            }(GJ, JJ)))
          }), (JJ => {
            console.warn(`${aU} the developer tools didn't load: no captures this session`, JJ)
          }));
          const cJ = "webgpu" === hJ && null !== (lJ = null === jJ || void 0 === jJ || null === (Jc = jJ.adapter) || void 0 === Jc ? void 0 : Jc.vendor) && void 0 !== lJ ? lJ : null;
          JA = {
            backend: hJ,
            canvas: GJ,
            fallbackReason: null !== (cc = null === jJ || void 0 === jJ ? void 0 : jJ.reason) && void 0 !== cc ? cc : null,
            adapterVendor: cJ
          }, bq();
          try {
            (0, NZ.p)(hJ, GJ, cJ)
          } catch (UJ) {
            (0, NZ.s)(), console.error(`${aU} the quality steps didn't start`, UJ)
          }
        }
        const {
          storagePullBreaks: hc,
          splitPassBreaks: Dc
        } = await sJ;
        Dc && console.warn(`${aU} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Gc = hc ? NJ.e : (0, NJ.j)(jJ, (0, mc.e)()),
          xc = "webgpu" === hJ && !hc;
        if (FX = (0, NJ.l)(xc ? SJ : null, xc && null !== (XJ = null === (AJ = Ee) || void 0 === AJ ? void 0 : AJ.pagePreviews().Jn) && void 0 !== XJ ? XJ : null, Gc, Eq), nA) return null;
        if (PJ.reserveAtJoin((0, wF.j)(null !== bJ && void 0 !== bJ ? bJ : qZ.d)), SJ.isStopped) return null;
        const rc = JJ => {
          if (null !== cA) try {
            cA.animationFrame(JJ)
          } catch (UJ) {
            gq(UJ)
          }
          if (function(JJ, cJ) {
              return cJ && !nA && !hX && Cq() && Tq() && JJ.framePaces(performance.now())
            }(SJ, YA)) return SJ.writePendingInput(), (0, vJ.e)(JJ, zq), wq(!1, JJ), void requestAnimationFrame(rc);
          dq(SJ, YA, "budget") && ((0, Ec.g)(SJ.lastFrameKind) && Tq() && (0, vJ.e)(JJ, zq), wq(YA && qA, JJ), Bq(SJ), PJ.afterFrame(), requestAnimationFrame(rc))
        };
        requestAnimationFrame(rc);
        return function(JJ) {
          if (JJ.has("inputLog") && (0, BZ.g)((JJ => {
              let {
                action: cJ,
                down: ZJ,
                press: FJ
              } = JJ;
              console.info(`${oZ} input ${cJ} ${ZJ?"down":"up"} press ${FJ} at ${performance.now().toFixed(1)}`)
            })), JJ.has("inputDump")) {
            const JJ = [];
            JF = JJ, Object.assign(window, {
              bloxdInputDump: () => JJ.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Re = function(JJ, cJ) {
          let ZJ = null;
          const FJ = () => {
              null !== ZJ && (clearInterval(ZJ), ZJ = null)
            },
            UJ = () => {
              document.hidden ? ZJ ??= setInterval((() => {
                dq(JJ, !1, "budget") ? (Bq(JJ), cJ.afterFrame()) : FJ()
              }), se) : FJ()
            };
          return document.addEventListener("visibilitychange", UJ), UJ(), () => {
            FJ(), document.removeEventListener("visibilitychange", UJ)
          }
        }(SJ, PJ), SJ
      }(cJ).then((JJ => {
        var cJ;
        (FJ(be), He(null !== JJ), null !== JJ && (jU = performance.now()), We(JJ), null === JJ) ? null === (cJ = Ee) || void 0 === cJ || cJ.pagePreviews().endSession(null === (0, Fc.r)()): XX("booted")
      }), (JJ => {
        FJ(be), He(!1), We(null), aq({
          site: oU,
          error: JJ,
          header: null
        }, be)
      }))
    }

    function QA() {
      const JJ = we;
      null !== JJ && GA().then((cJ => {
        let {
          pageBuiltInAnimationPack: ZJ
        } = cJ;
        ZJ().provide(JJ)
      }), (JJ => {
        console.warn(`${aU} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, JJ)
      }))
    }
    const EA = new class {
      constructor(JJ) {
        this.deps = JJ, this.latest = 0, this.hj = null
      }
      apply(JJ, cJ) {
        return this.load(JJ, cJ, 0)
      }
      async load(JJ, cJ, ZJ) {
        var FJ;
        const UJ = ++this.latest,
          eJ = this.deps.compiler;
        if (void 0 === cJ || null === cJ || "object" !== typeof cJ || 0 === Object.keys(cJ).length || null === eJ) return this.drop(JJ), !1;
        if ((null === (FJ = this.hj) || void 0 === FJ ? void 0 : FJ.module) === JJ && (0, Tc.Md)(this.hj.files, cJ)) return !1;
        try {
          const [ZJ, FJ] = await Promise.all([eJ(), this.deps.builtIns()]);
          if (UJ !== this.latest) return !1;
          const XJ = await ZJ(cJ, Rc, {
            builtIns: FJ
          });
          if (UJ !== this.latest) return !1;
          const AJ = this.call(JJ, XJ);
          if (void 0 === AJ) throw new ic("the compiled animations didn't read against the built-in pack");
          return this.hj = {
              module: JJ,
              files: cJ
            },
            function(JJ) {
              for (let cJ = 0; cJ + 2 < JJ.length; cJ += 3) {
                ("error" === JJ[cJ] ? console.error : console.warn)(`Animation for the texture pack: ${JJ[cJ+1]}: ${JJ[cJ+2]}`)
              }
            }(AJ), !0
        } catch (AJ) {
          var XJ;
          if (UJ !== this.latest) return !1;
          this.drop(JJ), 0 === ZJ && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", AJ);
          const FJ = (null !== (XJ = this.deps.retryAfterMs) && void 0 !== XJ ? XJ : uc)[ZJ];
          return void 0 === FJ || AJ instanceof ic || (0, Cc.k)(JJ) || setTimeout((() => {
            UJ === this.latest && this.load(JJ, cJ, ZJ + 1)
          }), FJ), !1
        }
      }
      call(JJ, cJ) {
        try {
          return JJ.OZJ(cJ)
        } catch (ZJ) {
          throw (0, Cc.m)(JJ, ZJ), ZJ
        }
      }
      clear(JJ) {
        this.latest++, this.drop(JJ)
      }
      drop(JJ) {
        const cJ = this.hj;
        if (this.hj = null, (null === cJ || void 0 === cJ ? void 0 : cJ.module) === JJ && !(0, Cc.k)(JJ)) try {
          this.call(JJ, null)
        } catch {}
      }
    }({
      compiler: dc.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: JJ
        } = await GA();
        return JJ().whenSet()
      },
      warn: Eq
    });
    async function VA(JJ, cJ) {
      let FJ = !1;
      await KA({
        matchmake: async () => {
          const {
            guestJoinTarget: UJ,
            guestJoinWithPack: eJ
          } = await ZJ.e(332).then((() => ZJ(41973)));
          return FJ ? UJ(JJ, cJ, yq()) : (FJ = !0, eJ(JJ, cJ, (cJ => Sq(JJ, cJ)), yq))
        },
        onFailure: JJ => {
          (0, xZ.showJoinFailure)(JJ, be)
        },
        rejoin: OA,
        invalidateTrafficCode: TA
      })
    }
    async function KA(JJ) {
      let {
        matchmake: cJ,
        onFailure: ZJ,
        rejoin: UJ,
        invalidateTrafficCode: eJ,
        pageReady: XJ,
        signal: AJ
      } = JJ;
      const qJ = () => !0 === (null === AJ || void 0 === AJ ? void 0 : AJ.aborted);
      let jJ;
      const YJ = OF.d.rejoinHold(),
        hJ = (0, nZ.y)("wasm", tq);
      let DJ = !1,
        sJ = performance.now();
      try {
        if (!await Pe) return {
          kind: "stopped"
        };
        if (qJ()) return {
          kind: "hZ"
        };
        fA().catch((() => {}));
        let JJ = await cJ();
        sJ = performance.now();
        const ZJ = () => performance.now() - JJ.matchedAt <= JJ.freshMs,
          FJ = SA(JJ.target).catch((() => {}));
        ZJ() && !qJ() && (jJ = new KF(JJ.target, {
          signal: AJ
        }));
        const eJ = performance.now();
        if (null === await ge) return {
          kind: "stopped"
        };
        var nJ;
        if (function(JJ) {
            var cJ, ZJ;
            if (eU.d.markGameEngineConstructed(), YU) return;
            YU = !0;
            const FJ = Math.max(JJ, null !== (cJ = AU) && void 0 !== cJ ? cJ : JJ);
            (0, XU.i)("ready", Math.max(0, (null !== (ZJ = qU) && void 0 !== ZJ ? ZJ : FJ) - FJ) / 1e3)
          }(eJ), qJ() || (null !== qU && null !== jU ? ((0, Sc.j)("wasm_loaded", qU), (0, Sc.j)("wasm_core_ready", jU)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await FJ, !ZJ() && !qJ()) null === (nJ = jJ) || void 0 === nJ || nJ.rematched(), JJ = await cJ(), sJ = performance.now();
        if (qJ()) return {
          kind: "hZ"
        };
        const YJ = await async function(JJ) {
          var cJ, ZJ, FJ;
          let {
            signal: UJ,
            rejoin: eJ = null,
            early: XJ,
            pageReady: AJ
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== UJ && void 0 !== UJ && UJ.aborted) throw new DOMException("the join was left", "AbortError");
          const qJ = (jJ = gX, YJ = performance.now(), null !== jJ && YJ - jJ < hF);
          var jJ, YJ;
          gX = null;
          const hJ = new AbortController;
          wA({
            controller: hJ,
            game: null !== (cJ = null === (ZJ = JJ.session) || void 0 === ZJ ? void 0 : ZJ.gameNameWithVariation) && void 0 !== cJ ? cJ : null
          }), HX = null, null === (FJ = pX) || void 0 === FJ || FJ.abort(), pX = null, zX = !1, NX = null, OX.clear();
          const DJ = () => {
            (0, Gc.i)(hJ, (0, Gc.e)(UJ))
          };
          null === UJ || void 0 === UJ || UJ.addEventListener("abort", DJ, {
            once: !0
          });
          try {
            var sJ, nJ, GJ;
            const cJ = await ge;
            if (null === cJ || cJ.isStopped || nA) throw new Error("no core is running to join a game with");
            if (JJ.session && null !== FX) {
              const cJ = await IA(FX.join(JJ.session.gameNameWithVariation), hJ.signal);
              if (null !== cJ) throw new NJ.f(cJ)
            }
            const [, , , {
              joinRoom: ZJ
            }] = await IA(Promise.all([(0, mJ.l)(cJ), SA(JJ), null === AJ || void 0 === AJ ? void 0 : AJ(), fA()]), hJ.signal), FJ = JJ.session, UJ = FJ ? {
              ...iA,
              attachSocket: cJ => {
                const ZJ = lA(cJ, JJ.endpoint);
                var UJ;
                null !== ZJ && (yX = {
                  conn: ZJ,
                  info: FJ
                }, null === (UJ = SX) || void 0 === UJ || UJ(FJ.playerDbId));
                return ZJ
              }
            } : iA, jJ = await ZJ(UJ, JJ, {
              signal: hJ.signal,
              early: XJ
            }).catch((JJ => {
              throw function(JJ) {
                if (!(JJ instanceof wJ.b)) return JJ;
                if ("roomError" === JJ.stage && null !== NX) return yA(new wJ.b(JJ.message, JJ.stage, JJ.code, NX), JJ);
                const cJ = "closed" === JJ.stage && null !== PX ? OX.get(PX.conn) : void 0;
                return void 0 === cJ ? JJ : yA(new wJ.b(JJ.message, JJ.stage, cJ.code), JJ)
              }(JJ)
            }));
            if (VX !== hJ) throw jJ.cn(), new DOMException("the join was left", "AbortError");
            gA(jJ), null === (sJ = Oe) || void 0 === sJ || sJ.newGame();
            const YJ = function(JJ) {
              var cJ, ZJ;
              const {
                session: FJ
              } = JJ, UJ = void 0 === FJ ? JJ.joinOptions.lobbyName : FJ.lobbyName;
              return {
                endpoint: JJ.endpoint,
                game: null !== (cJ = null === FJ || void 0 === FJ ? void 0 : FJ.gameNameWithVariation) && void 0 !== cJ ? cJ : JJ.roomName,
                lobby: String(null !== UJ && void 0 !== UJ ? UJ : null),
                postCookies: null !== (ZJ = JJ.postCookies) && void 0 !== ZJ ? ZJ : null
              }
            }(JJ);
            EX.set(jJ, YJ), mF(YJ);
            const DJ = performance.now(),
              fJ = {
                conn: jJ.conn,
                rejoin: eJ,
                game: null !== (nJ = null === (GJ = JJ.session) || void 0 === GJ ? void 0 : GJ.gameNameWithVariation) && void 0 !== nJ ? nJ : "",
                joinedAt: DJ,
                rejoinedAt: qJ ? DJ : null,
                overflow: null
              };
            IX = fJ,
              function(JJ, cJ) {
                Aq();
                const ZJ = {
                  endpoint: cJ,
                  roomId: JJ.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new eZ({
                    reconnect: (JJ, cJ, FJ) => hq(ZJ, JJ, cJ, FJ),
                    releaseSeat: JJ => {
                      !async function(JJ, cJ) {
                        const {
                          roomId: ZJ,
                          roomToken: FJ
                        } = jq(JJ, cJ);
                        try {
                          const {
                            leaveHeldSeat: cJ
                          } = await fA();
                          await cJ(JJ.endpoint, ZJ, FJ)
                        } catch (UJ) {
                          console.warn(`${aU} the held seat of a game left while it reconnected couldn't be released`, UJ)
                        }
                      }(ZJ, JJ)
                    },
                    isLive: () => MX === ZJ && null !== IX && !nA,
                    HV: JJ => {
                      WX = JJ, Xq()
                    },
                    onReconnected: JJ => {
                      ! function(JJ) {
                        const cJ = QX;
                        if (null !== cJ && cJ !== JJ) {
                          const ZJ = EX.get(cJ);
                          void 0 !== ZJ && EX.set(JJ, ZJ), AA === cJ && (AA = JJ), cJ.detach()
                        }
                        gA(JJ)
                      }(JJ)
                    },
                    onGaveUp: (JJ, cJ) => {
                      ! function(JJ, cJ, ZJ) {
                        var FJ, UJ;
                        console.warn(`${aU} gave up reconnecting (${ZJ.reason}, ${ZJ.attempts} attempts)`, ZJ.lastError), (0, xZ.reportReconnectGaveUp)(ZJ, be);
                        const eJ = null !== (FJ = null === (UJ = IX) || void 0 === UJ ? void 0 : UJ.rejoin) && void 0 !== FJ ? FJ : null;
                        qq(JJ, "gaveUp"), PA();
                        const XJ = {
                          code: JJ.dropCode,
                          name: null,
                          reason: je,
                          canReconnect: !cJ,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        uA(XJ, cJ ? null : eJ, !1, {
                          reasonKey: Ye,
                          canPlayAgain: cJ
                        })
                      }(ZJ, JJ, cJ)
                    }
                  })
                };
                MX = ZJ, null !== bX && bX.conn === JJ.conn && ZJ.resume.onInitialInfo(bX)
              }(jJ, JJ.endpoint), performance.mark(ce), (0, Sc.j)("wasm_joined", DJ), setTimeout((() => {
                QX === jJ && (0, Sc.c)()
              }), 0), QA(), console.info(`${aU} joined ${JJ.roomName} as ${jJ.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const xJ = HX;
            HX = null, null !== xJ && dA(fJ, xJ.mask, xJ.frames);
            const rJ = OX.get(jJ.conn);
            return OX.clear(), void 0 !== rJ && (gA(null), CA(jJ.conn, rJ.code, rJ.reason)), jJ
          } finally {
            var fJ;
            null === UJ || void 0 === UJ || UJ.removeEventListener("abort", DJ), VX === hJ && WA(QX, null), (null === (fJ = PX) || void 0 === fJ ? void 0 : fJ.join) === hJ && (PX = null)
          }
        }(JJ.target, {
          signal: AJ,
          rejoin: UJ(JJ.target),
          early: jJ,
          pageReady: XJ
        });
        return DJ = !0, {
          kind: "joined",
          game: YJ
        }
      } catch (fJ) {
        if (fJ instanceof DOMException && "AbortError" === fJ.name || qJ()) return {
          kind: "hZ"
        };
        if (nA) return {
          kind: "stopped"
        };
        if (zX && (zX = !1, await eJ().catch((JJ => {
            console.warn(`${aU} the cached traffic code could not be dropped`, JJ)
          }))), null === await ge) return {
          kind: "stopped"
        };
        if (fJ instanceof NJ.f) return ZJ(fJ, performance.now() - sJ), {
          kind: "failed",
          error: fJ,
          reloading: !1
        };
        if (fJ instanceof wJ.b && fJ.code === FJ.b.wasmClientNotAllowed.code && jA) return fq("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: fJ,
          reloading: !0
        };
        const JJ = fJ instanceof wJ.b && fJ.code === FJ.b.outdatedVersion.code,
          cJ = () => null === QX,
          UJ = await Fj({
            site: xZ.JOIN_SITE,
            error: fJ,
            outdated: JJ
          }, (() => {
            ZJ(fJ, performance.now() - sJ)
          }), cJ);
        return {
          kind: "failed",
          error: fJ,
          reloading: UJ
        }
      } finally {
        var GJ;
        DJ || hJ.end(), OF.d.releaseHold(YJ);
        const JJ = null === (GJ = jJ) || void 0 === GJ ? void 0 : GJ.release();
        JJ && (0, xZ.reportUnusedSeat)(JJ, be)
      }
    }

    function yA(JJ, cJ) {
      return JJ.stack = cJ.stack, JJ
    }

    function SA(JJ) {
      return JJ.session ? (0, mJ.s)(Me, JJ.session.gameNameWithVariation) : Promise.resolve()
    }

    function IA(JJ, cJ) {
      return (0, Gc.l)(cJ), new Promise(((ZJ, FJ) => {
        const UJ = () => {
          FJ((0, Gc.e)(cJ))
        };
        cJ.addEventListener("abort", UJ, {
          once: !0
        }), JJ.then((JJ => {
          cJ.removeEventListener("abort", UJ), ZJ(JJ)
        }), (JJ => {
          cJ.removeEventListener("abort", UJ), FJ(JJ)
        }))
      }))
    }

    function MA() {
      var JJ, cJ;
      return null !== (JJ = null === (cJ = FX) || void 0 === cJ ? void 0 : cJ.runsInJoinedGame()) && void 0 !== JJ && JJ
    }

    function bA() {
      wA(null)
    }

    function wA(JJ) {
      var cJ, ZJ, FJ;
      (function() {
        const JJ = MX;
        null !== JJ && qq(JJ, "left")
      }(), null === pe || pe.left) || (pe.left = !0, null === (FJ = (0, mJ.j)()) || void 0 === FJ || FJ.socketLeft(), (0, hJ.o)({
        websocketUrl: null
      }));
      VX && (0, Gc.i)(VX, new DOMException("the join was left", "AbortError")), PA(null !== JJ), null === (cJ = FX) || void 0 === cJ || cJ.cn();
      const UJ = QX;
      null !== JJ && OF.d.setGame(JJ.game), WA(null, null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.controller) && void 0 !== ZJ ? ZJ : null), null === UJ || void 0 === UJ || UJ.cn(), HA(0), (0, hc.g)()
    }

    function WA(JJ, cJ) {
      QX = JJ, VX = cJ, null === QX && null === VX && OF.d.setGame(void 0)
    }

    function gA(JJ) {
      WA(JJ, VX)
    }

    function HA(JJ) {
      const cJ = Ke;
      return null !== fe && !nA && null !== cJ && !cJ.isStopped && (!!fe(wJ.f, 0, (0, wJ.s)(JJ)) && (nX = !0, 0 === JJ || hX || dq(cJ, !1, "all"), !0))
    }

    function PA() {
      var JJ, cJ;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, nZ.e)();
      const ZJ = null !== (JJ = null === (cJ = IX) || void 0 === cJ ? void 0 : cJ.overflow) && void 0 !== JJ ? JJ : null;
      IX = null, null !== ZJ && (0, xZ.reportEventOverflow)(ZJ, be)
    }

    function kA() {
      null !== QX || null !== VX ? bA() : Jq()
    }

    function pA(JJ, cJ) {
      console.warn(`${aU} the event buffer refused records in ${cJ} frames (categories ${JJ})`), nA || (null !== IX ? dA(IX, JJ, cJ) : null !== VX && function(JJ, cJ, ZJ) {
        var FJ;
        const UJ = function(JJ, cJ) {
          return null === JJ ? "drop" : JJ.activated ? "keep" : 0 !== (cJ & Pc.m.NetSession) ? "fail" : "drop"
        }((null === (FJ = PX) || void 0 === FJ ? void 0 : FJ.join) === JJ ? PX : null, cJ);
        "keep" === UJ ? HX = {
          mask: cJ,
          frames: ZJ
        } : "fail" === UJ && (0, Gc.i)(JJ, new Error("the join's net session was lost to an event overflow"))
      }(VX, JJ, cJ))
    }

    function dA(JJ, cJ, ZJ) {
      const FJ = JJ.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      FJ.frames += ZJ, FJ.acks++, FJ.mask |= cJ;
      const UJ = function(JJ, cJ, ZJ) {
        if (0 === (JJ & Pc.m.NetSession)) return "none";
        const FJ = null !== cJ.rejoinedAt && ZJ - cJ.rejoinedAt < DF;
        return null === cJ.rejoin || FJ ? "fail" : "rejoin"
      }(cJ, JJ, performance.now());
      "none" !== UJ && queueMicrotask((() => {
        if (IX !== JJ) return;
        const cJ = "rejoin" === UJ && performance.now() - kX >= bJ.f;
        FJ.outcome = cJ ? "rejoined" : "failed", uA(function(JJ, cJ) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: JJ,
            automaticallyReconnect: cJ,
            requiresRefresh: !1
          }
        }(null !== JJ.rejoin, cJ), JJ.rejoin, cJ), bA(), cJ && (gX = performance.now())
      }))
    }

    function zA(JJ) {
      YA = JJ, hA && NA(hA, JJ)
    }

    function NA(JJ, cJ) {
      JJ.style.visibility = cJ ? "visible" : "hidden"
    }

    function OA(JJ) {
      var cJ;
      const ZJ = JJ.roomName,
        FJ = null !== (cJ = JJ.joinOptions.lobbyName) && void 0 !== cJ ? cJ : null;
      return () => {
        VA(ZJ, FJ)
      }
    }

    function TA() {
      return ZJ.e(332).then((() => ZJ(41973))).then((JJ => {
        let {
          invalidateGuestTrafficCode: cJ
        } = JJ;
        return cJ()
      })).catch((JJ => {
        console.warn(`${aU} the cached traffic code could not be dropped`, JJ)
      }))
    }

    function CA(JJ, cJ, ZJ) {
      var UJ, eJ;
      let XJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (nA) return;
      if ((null === (UJ = IX) || void 0 === UJ ? void 0 : UJ.conn) !== JJ) return void(null !== VX && OX.set(JJ, {
        code: cJ,
        reason: ZJ
      }));
      const {
        rejoin: AJ,
        game: qJ,
        joinedAt: jJ
      } = IX;
      PA(), Aq();
      const YJ = (0, bJ.j)(cJ, (0, nF.d)(JJ));
      if (console.info(`${aU} the game's connection closed with code ${cJ} (${null!==(eJ=YJ.name)&&void 0!==eJ?eJ:"unrecognised"})`), cJ === FJ.b.gameOrPluginKick.code || XJ || (0, xZ.reportDisconnect)(YJ, be, {
          closeReason: ZJ,
          sinceJoinedMs: performance.now() - jJ,
          game: qJ
        }), YJ.requiresRefresh) {
        const JJ = "outdatedVersion" === YJ.name,
          ZJ = new Error(`the game's connection closed with code ${cJ}`),
          FJ = () => null === IX && null === VX;
        return void Fj({
          site: xZ.JOIN_SITE,
          error: ZJ,
          outdated: JJ
        }, (() => {
          FJ() && uA(YJ, null, !1)
        }), FJ)
      }
      const hJ = YJ.canReconnect ? AJ : null,
        DJ = null !== hJ && YJ.automaticallyReconnect && performance.now() - kX >= bJ.f;
      uA(YJ, hJ, DJ)
    }

    function uA(JJ, cJ, ZJ) {
      var FJ;
      let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (DA) return;
      OF.d.unwantedLeave(ZJ && null !== cJ && 0 === dX.size), null === (FJ = pX) || void 0 === FJ || FJ.abort();
      const eJ = new AbortController;
      pX = eJ;
      const XJ = null === cJ ? null : () => {
        eJ.signal.aborted || (eJ.abort(), cJ())
      };
      if (ZJ && null !== XJ) {
        kX = performance.now();
        const JJ = setTimeout(XJ, bJ.d);
        eJ.signal.addEventListener("abort", (() => {
          clearTimeout(JJ)
        }))
      }
      const AJ = {
        code: JJ.code,
        name: JJ.name,
        reason: JJ.reason,
        reasonKey: UJ.reasonKey,
        reconnect: XJ,
        reconnecting: ZJ,
        requiresRefresh: JJ.requiresRefresh,
        canPlayAgain: UJ.canPlayAgain
      };
      if (dX.size > 0)
        for (const jJ of [...dX]) try {
          jJ(AJ)
        } catch (qJ) {
          console.error(`${aU} an unwanted-leave listener threw`, qJ)
        } else jF((0, XF.k)(JJ, null !== XJ, ZJ), eJ.signal).then((cJ => {
          cJ && (null !== XJ ? XJ() : JJ.requiresRefresh && (0, OJ.o)())
        }))
    }
    const iA = {
      attachSocket: JJ => lA(JJ),
      onConnection: JJ => (TX.add(JJ), () => {
        TX.delete(JJ)
      }),
      sendRaw: (JJ, cJ) => {
        const ZJ = pe;
        return null !== ZJ && ZJ.conn === JJ && Rq(ZJ, cJ)
      },
      leaveRoom: HA,
      closeSocket: JJ => {
        var cJ;
        (null === (cJ = pe) || void 0 === cJ ? void 0 : cJ.conn) === JJ && Jq()
      },
      flushNet: cq
    };

    function RA(JJ) {
      var cJ;
      let {
        aux: ZJ,
        payload: FJ
      } = JJ;
      null === (cJ = Ke) || void 0 === cJ || cJ.queueOptions(ZJ, FJ)
    }

    function LA(JJ, cJ) {
      RA(function(JJ, cJ) {
        return JU = JJ ? {
          preventMovement: cJ
        } : null, JJ ? cU(cJ) : {
          aux: Hc.Tb.AdEnd,
          payload: lF
        }
      }(JJ, cJ))
    }

    function aA(JJ) {
      var cJ;
      rX = JJ, null === (cJ = Ke) || void 0 === cJ || cJ.setUiPrefs(JJ)
    }

    function BA(JJ, cJ) {
      Me.setMaster(JJ, cJ)
    }

    function tA(JJ) {
      var cJ;
      vX = JJ, null === (cJ = Ke) || void 0 === cJ || cJ.setEnvPrefs(JJ)
    }

    function oA(JJ) {
      var cJ;
      mX = JJ, null === (cJ = Ke) || void 0 === cJ || cJ.setLookPrefs(JJ)
    }

    function lA(JJ) {
      var cJ;
      let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(JJ.url).origin,
        FJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (JJ.readyState === WebSocket.CLOSING || JJ.readyState === WebSocket.CLOSED) return console.warn(`${aU} a closing or closed socket can't be attached`), null;
      const UJ = Ke;
      if (!UJ || UJ.isStopped) return console.warn(`${aU} no core is running to attach a socket to`), JJ.close(), null;
      if (null === (0, mJ.j)()) return console.warn(`${aU} the game has not started to attach a socket to`), JJ.close(), null;
      if (qX > Hc.w) return console.warn(`${aU} this core has attached all the sockets it can; reload to play on`), JJ.close(), null;
      if (nX && !hX && (dq(UJ, !1, "all"), UJ.isStopped || nA)) return JJ.close(), null;
      Jq();
      const eJ = qX++;
      if (!sq(UJ, "open", eJ, FJ ? Hc.Qb.Resume : 0)) return JJ.close(), null;
      PX = null === VX ? null : {
        join: VX,
        conn: eJ,
        activated: !1
      }, JJ.binaryType = "arraybuffer";
      const XJ = new XZ.d((() => {
          ! function(JJ, cJ) {
            if (pe !== cJ || JJ.isStopped || null === Uq(cJ, Ae)) return;
            cJ.detach(), pe = null, Fq(JJ, cJ, Ae, "", !0), cJ.ws.close()
          }(UJ, AJ)
        })),
        AJ = {
          ws: JJ,
          conn: eJ,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: FJ,
          token: null,
          detach: () => {
            XJ.dispose(), JJ.removeEventListener("message", qJ), JJ.removeEventListener("open", jJ), JJ.removeEventListener("close", YJ)
          }
        },
        qJ = JJ => {
          if (JJ.data instanceof ArrayBuffer) {
            var cJ;
            const ZJ = new Uint8Array(JJ.data);
            XJ.heard(), AJ.token = null !== (cJ = (0, AZ.c)(ZJ)) && void 0 !== cJ ? cJ : AJ.token,
              function(JJ, cJ, ZJ) {
                lq(JJ, (() => {
                  JJ.rings.net.writeFrame(cJ, ZJ) || JJ.crash(ac.q, `a socket frame of ${ZJ.byteLength} bytes did not fit the net-in ring`)
                }));
                const FJ = JJ.rings.net.cursor >= ee;
                (FJ || JJ.netWrittenSinceFrame >= Ue || document.hidden && performance.now() - jX >= se) && dq(JJ, !1, "budget")
              }(UJ, eJ, ZJ)
          }
        },
        jJ = () => {
          for (const cJ of AJ.pending.splice(0)) JJ.send(cJ);
          AJ.pendingBytes = 0
        },
        YJ = JJ => {
          if (pe === AJ && UJ.rings.net.cursor > 0 && dq(UJ, !1, "all"), pe === AJ) {
            if (AJ.detach(), pe = null, Fq(UJ, AJ, JJ.code, JJ.reason) || Zq(UJ, AJ)) return;
            sq(UJ, "close", eJ), eq(eJ, AJ.left), CA(eJ, JJ.code, JJ.reason)
          }
        };
      return JJ.addEventListener("message", qJ), JJ.addEventListener("open", jJ), JJ.addEventListener("close", YJ), pe = AJ, null === (cJ = (0, mJ.j)()) || void 0 === cJ || cJ.socketAttached(eJ), (0, hJ.o)({
        websocketUrl: ZJ
      }), eJ
    }

    function Jq() {
      const JJ = pe;
      if (!JJ) return;
      const cJ = Ke,
        ZJ = JJ.resume;
      ZJ && (cq(), pe !== JJ) || (pe = null, JJ.detach(), JJ.ws.close(), null !== cJ && (Zq(cJ, JJ) || ZJ && Fq(cJ, JJ, qe)) || (null !== cJ && sq(cJ, "close", JJ.conn), eq(JJ.conn, JJ.left)))
    }

    function cq() {
      const JJ = Ke;
      null !== JJ && !JJ.isStopped && !nA && !hX && JJ.rings.net.cursor > 0 && dq(JJ, !1, "all")
    }

    function Zq(JJ, cJ) {
      var ZJ;
      if (!cJ.resume) return !1;
      const FJ = MX;
      return null !== FJ && null !== cJ.token && "" !== cJ.token && (FJ.pendingHold = {
        conn: cJ.conn,
        token: `${FJ.roomId}:${cJ.token}`
      }), sq(JJ, "close", cJ.conn), null === (ZJ = (0, mJ.j)()) || void 0 === ZJ || ZJ.socketDetached(cJ.conn), !0
    }

    function Fq(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const eJ = Uq(cJ, ZJ);
      if (null === eJ) return !1;
      const {
        hj: XJ,
        token: AJ,
        game: qJ,
        joinedAt: jJ
      } = eJ;
      if (!sq(JJ, "close", cJ.conn, Hc.C.Held)) return !0;
      console.warn(`${aU} the game's connection ${UJ?"went silent":`dropped with code ${ZJ}`}, holding it`);
      const YJ = {
        closeReason: FJ,
        sinceJoinedMs: performance.now() - jJ,
        game: qJ
      };
      return (0, xZ.reportDisconnect)((0, bJ.j)(ZJ), be, YJ, UJ ? "silent" : void 0), XJ.heldConn = cJ.conn, XJ.dropCode = ZJ, XJ.pendingHold = {
        conn: cJ.conn,
        token: `${XJ.roomId}:${AJ}`
      }, hX || dq(JJ, !1, "all"), !0
    }

    function Uq(JJ, cJ) {
      const ZJ = MX,
        UJ = IX,
        eJ = JJ.token;
      return null === ZJ || null === UJ || nA || JJ.left || UJ.conn !== JJ.conn || null === eJ || "" === eJ ? null : (0, FJ.g)(cJ) && ZJ.resume.canHoldSeat() ? {
        hj: ZJ,
        token: eJ,
        game: UJ.game,
        joinedAt: UJ.joinedAt
      } : null
    }

    function eq(JJ, cJ) {
      var ZJ;
      null === (ZJ = (0, mJ.j)()) || void 0 === ZJ || ZJ.closeGame(JJ), (0, oF.c)().close(JJ), cJ || (0, hJ.o)({
        websocketUrl: null
      })
    }

    function Xq() {
      const JJ = WX;
      if (null === JJ) return;
      const cJ = (0, mJ.j)();
      nA || null === cJ || cJ.HV(JJ) ? WX = null : performance.now() - GX.pause >= De && (GX.pause = performance.now(), console.warn(`${aU} the cmd ring had no room for SetPaused(${JJ}): written before the next frame`))
    }

    function Aq() {
      const JJ = MX;
      MX = null, null === JJ || void 0 === JJ || JJ.resume.dispose()
    }

    function qq(JJ, cJ) {
      var ZJ, FJ;
      const {
        heldConn: UJ
      } = JJ, eJ = JJ.resume.resumingConn;
      JJ.heldConn = 0, JJ.pendingHold = null, MX === JJ && (MX = null), "left" === cJ ? JJ.resume.cn() : JJ.resume.dispose(), 0 === wX || (null === (ZJ = pe) || void 0 === ZJ ? void 0 : ZJ.conn) !== wX || "left" === cJ && (null === (FJ = QX) || void 0 === FJ ? void 0 : FJ.conn) === wX || Dq(wX), "gaveUp" === cJ && 0 !== eJ && Dq(eJ), 0 !== UJ && "refused" !== cJ && (console.info(`${aU} the game held through its drop ${"left"===cJ?"was left":"is given up"}`), null === Ke || Ke.isStopped || sq(Ke, "close", UJ), eq(UJ, !1))
    }

    function jq(JJ, cJ) {
      const ZJ = cJ.indexOf(":");
      return {
        roomId: ZJ < 0 ? JJ.roomId : cJ.slice(0, ZJ),
        roomToken: cJ.slice(ZJ + 1)
      }
    }

    function Yq(JJ) {
      var cJ;
      bX = JJ, JJ.conn === wX && (wX = 0);
      const ZJ = MX;
      null !== ZJ && (null === (cJ = IX) || void 0 === cJ ? void 0 : cJ.conn) === JJ.conn && ZJ.resume.onInitialInfo(JJ)
    }
    async function hq(JJ, cJ, ZJ, FJ) {
      const {
        roomId: UJ,
        roomToken: eJ
      } = jq(JJ, cJ);
      if (null === Ke || Ke.isStopped || nA) throw new Error("no core is running to resume the game on");
      const {
        resumeRoom: XJ
      } = await IA(fA(), ZJ);
      return XJ({
        ...iA,
        attachSocket: cJ => MX !== JJ || 0 === JJ.heldConn ? (cJ.close(), null) : lA(cJ, JJ.endpoint, !0)
      }, JJ.endpoint, UJ, eJ, {
        signal: ZJ,
        onAttached: FJ
      })
    }

    function Dq(JJ) {
      var cJ;
      const ZJ = pe;
      (null === ZJ || void 0 === ZJ ? void 0 : ZJ.conn) === JJ && (ZJ.left = !0, null === (cJ = (0, mJ.j)()) || void 0 === cJ || cJ.socketLeft(), (0, hJ.o)({
        websocketUrl: null
      }), HA(JJ) ? setTimeout((() => {
        pe === ZJ && Jq()
      }), wJ.d) : Jq())
    }

    function sq(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        UJ = !1;
      return lq(JJ, (() => {
        const {
          net: eJ
        } = JJ.rings;
        UJ = "open" === cJ ? eJ.writeOpen(ZJ, FJ) : eJ.writeClose(ZJ, FJ), UJ || JJ.crash(ac.q, `a socket ${cJ} did not fit the net-in ring`)
      })), UJ
    }

    function nq(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (Gq()) {
        const FJ = "browser" === JJ && (0, tF.Q)() ? "blockedAfterLoss" : "unsupported";
        return (0, xZ.reportUnsupportedFallback)(JJ, FJ, cJ, ZJ), void fq(`the wasm client can't run here (${cJ}; ${FJ})`, FJ)
      }(0, xZ.showUnsupported)(JJ, "unsupported", cJ, ZJ)
    }

    function Gq() {
      return jA && "wasm" !== (0, jc.h)(window.location.search)
    }

    function fq(JJ, cJ) {
      console.warn(`${aU} ${JJ}: reloading on the JS client`), null !== cJ && (0, jc.m)(cJ);
      const ZJ = () => {
        (0, OJ.m)(jc.v)
      };
      (0, xZ.flushCrashReports)(OJ.e).then(ZJ, ZJ)
    }

    function xq(JJ, cJ, ZJ, FJ) {
      return RX(JJ, cJ, ZJ, FJ)
    }

    function rq() {
      null === BX || null === Ke || Ke.isStopped || nA || null !== le || null === fe || (le = BX(fe, Eq, Vq().follow))
    }

    function vq() {
      var JJ, cJ, ZJ;
      return null !== (JJ = null === (cJ = Se) || void 0 === cJ || null === (ZJ = cJ.textures) || void 0 === ZJ ? void 0 : ZJ.files()) && void 0 !== JJ ? JJ : null
    }

    function mq(JJ) {
      ZJ.e(249).then((() => ZJ(39490))).then((cJ => {
        let {
          setIconFileOverrides: ZJ
        } = cJ;
        ZJ(JJ)
      }), (JJ => {
        console.warn(`${aU} the item icons couldn't take the texture pack's files`, JJ)
      }))
    }

    function Qq(JJ) {
      Vq().follow((cJ => {
        null !== cJ && Promise.all([Promise.all([ZJ.e(179), ZJ.e(42)]).then((() => ZJ(42e3))), (0, tF.O)()]).then((JJ => {
          let [{
            followPagePackFiles: ZJ
          }, FJ] = JJ;
          const UJ = null === FJ || (0, Lc.t)(FJ) ? "webgl" : FJ.backend;
          ZJ(cJ, NF.c, UJ, (JJ => {
            NF.c.setPageFiles(JJ)
          }), Eq)
        }), (cJ => {
          console.warn(`${aU} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, cJ), JJ()
        }))
      }))
    }

    function Eq(JJ, cJ) {
      console.warn(`${aU} ${JJ}`, cJ)
    }

    function Vq() {
      return ye ??= new sU({
        load: JJ => Promise.all([ZJ.e(179), ZJ.e(47)]).then((() => ZJ(42004))).then((cJ => {
          let {
            startPageTexturePackFeed: ZJ
          } = cJ;
          return ZJ(Eq, JJ)
        })),
        store: fZ.g,
        ls: JJ => {
          ge.then((() => {
            (0, xZ.reportTexturePackFeedLoadFailure)(JJ, be)
          }))
        }
      }), ye
    }
    const Kq = JJ => Vq().follow(JJ);

    function yq() {
      return Vq().loaded()
    }
    const Sq = function(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          UJ = 0;
        return async function(eJ, XJ) {
          let AJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const qJ = ++UJ,
            jJ = FJ() + cJ,
            YJ = await
          function(JJ, cJ) {
            let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((FJ => {
              const UJ = setTimeout((() => {
                FJ(null), JJ.then((JJ => {
                  null !== JJ && (JJ.joinedWithout(), ZJ(JJ))
                }))
              }), cJ);
              JJ.then((JJ => {
                clearTimeout(UJ), FJ(JJ)
              }))
            }))
          }(JJ(eJ), cJ, (JJ => {
            qJ === UJ && AJ() && XJ(JJ, FJ() + cJ).catch((JJ => {
              ZJ("the texture pack step after the join failed", JJ)
            }))
          }));
          return null === YJ ? null : XJ(YJ, jJ)
        }
      }((JJ => (0, Jc.k)(JJ) ? Vq().request() : Vq().forJoin()), DU.d, Eq),
      Iq = function(JJ, cJ) {
        let ZJ = !1;
        return {
          setGamePackConfirm: JJ => {
            ZJ = null !== JJ, cJ(JJ)
          },
          packStep: (cJ, FJ, UJ) => JJ(cJ, FJ, (() => ZJ && UJ()))
        }
      }(Sq, (JJ => {
        Vq().setGamePackConfirm(JJ)
      }));

    function Mq(JJ) {
      Iq.setGamePackConfirm(JJ)
    }

    function bq() {
      if (nA || null !== cA || null === tX || null === JA) return;
      const {
        backend: JJ,
        canvas: cJ,
        fallbackReason: ZJ,
        adapterVendor: FJ
      } = JA, UJ = tX;
      tX = null;
      try {
        cA = UJ({
          backend: JJ,
          canvas: cJ,
          fallbackReason: ZJ,
          adapterVendor: FJ,
          joinedGame: () => nA ? null : QX,
          inGame: Wq,
          shaderPackRuns: MA,
          msaa: () => lX > 1,
          writeCmd: (JJ, cJ, ZJ) => null !== fe && fe(JJ, cJ, ZJ),
          takeFailedMeshJobs: () => {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = Oe) || void 0 === cJ ? void 0 : cJ.takeFailedMeshJobs()) && void 0 !== JJ ? JJ : 0
          }
        })
      } catch (eJ) {
        console.error(`${aU} the frame telemetry didn't start`, eJ)
      }
    }

    function wq(JJ, cJ) {
      try {
        var ZJ, FJ, UJ;
        const eJ = CX && null !== (ZJ = null === (FJ = Ke) || void 0 === FJ || null === (UJ = FJ.lastHeader) || void 0 === UJ ? void 0 : UJ.renderPending) && void 0 !== ZJ ? ZJ : 0;
        (0, NZ.f)(cJ, JJ, Wq() && !(null !== JU), eJ)
      } catch (eJ) {
        (0, NZ.s)(), console.error(`${aU} the quality steps stopped`, eJ)
      }
    }

    function Wq() {
      return null !== QX && AA === QX && !nA
    }

    function gq(JJ) {
      const cJ = cA;
      cA = null;
      try {
        null === cJ || void 0 === cJ || cJ.stop()
      } catch {}
      console.error(`${aU} the frame telemetry threw: it stops`, JJ)
    }

    function Hq(JJ) {
      var cJ, ZJ, FJ;
      if ((0, oF.c)().fire(JJ), "message" === JJ.type) {
        if (DX++, JJ.JY === Hc.Ac.ERROR && null !== VX) {
          var UJ;
          const {
            text: cJ,
            dropsCache: ZJ
          } = (0, bJ.o)((new TextDecoder).decode(JJ.payload));
          zX ||= ZJ, (null === (UJ = PX) || void 0 === UJ ? void 0 : UJ.conn) === JJ.conn && (NX = cJ)
        } else if (JJ.JY === Pc.Lb.ResumeComplete) {
          var eJ;
          null === (eJ = MX) || void 0 === eJ || eJ.resume.onResumeComplete(JJ.conn)
        }
        return
      }
      if (JJ.phase === Hc.G.Left) sX = JJ.conn;
      else if (JJ.phase === Hc.G.Activated) {
        var XJ;
        Yc.b.reset(), (null === (XJ = PX) || void 0 === XJ ? void 0 : XJ.conn) === JJ.conn && (PX.activated = !0)
      } else JJ.phase === Hc.G.Resumed ? function(JJ) {
        var cJ, ZJ;
        wX = JJ;
        const FJ = MX;
        if (null === FJ || 0 === FJ.heldConn || (null === (cJ = pe) || void 0 === cJ ? void 0 : cJ.conn) !== JJ || !pe.resume || null === IX) return;
        console.info(`${aU} the game resumed on conn ${JJ}, waiting for its InitialInfo`);
        const UJ = FJ.heldConn;
        FJ.heldConn = 0, pe.resume = !1, IX.conn = JJ, (null === (ZJ = yX) || void 0 === ZJ ? void 0 : ZJ.conn) === UJ && (yX = {
          conn: JJ,
          info: yX.info
        }), Yc.b.apply({
          shopInfo: null,
          _shopVersion: cc.d
        })
      }(JJ.conn) : JJ.phase === Hc.G.Held ? function(JJ) {
        var cJ;
        const ZJ = MX,
          FJ = null !== (cJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.pendingHold) && void 0 !== cJ ? cJ : null;
        if (null !== ZJ && null !== FJ && FJ.conn === JJ) return ZJ.pendingHold = null, ZJ.heldConn = JJ, wX = 0, console.warn(`${aU} the core holds the game, reconnecting`), void ZJ.resume.onDropped(FJ.token);
        if (JJ === wX) {
          wX = 0;
          const cJ = Ke;
          null === cJ || cJ.isStopped || (console.info(`${aU} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), sq(cJ, "close", JJ))
        }
      }(JJ.conn) : JJ.phase === Hc.G.Closed && (null === (cJ = MX) || void 0 === cJ || null === (ZJ = cJ.pendingHold) || void 0 === ZJ ? void 0 : ZJ.conn) === JJ.conn && (MX.heldConn === JJ.conn ? function(JJ) {
        const cJ = JJ.heldConn,
          ZJ = JJ.dropCode;
        qq(JJ, "refused"), console.info(`${aU} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          eq(cJ, !1), CA(cJ, ZJ, "", !0)
        }))
      }(MX) : MX.pendingHold = null);
      const AJ = Object.keys(Hc.G).find((cJ => Hc.G[cJ] === JJ.phase)),
        qJ = 0 === JJ.code ? "" : ` (code ${JJ.code})`;
      console.info(`${aU} conn ${JJ.conn}: ${null!==AJ&&void 0!==AJ?AJ:JJ.phase}${qJ}, ${DX} raw messages so far`), (null === (FJ = QX) || void 0 === FJ ? void 0 : FJ.conn) !== JJ.conn || JJ.phase !== Hc.G.Left && JJ.phase !== Hc.G.Closed || gA(null), KX !== JJ.conn || JJ.phase !== Hc.G.Left && JJ.phase !== Hc.G.Closed || (KX = null, null === QX && null === VX && OF.d.setGame(void 0));
      for (const YJ of [...TX]) try {
        YJ(JJ.conn, JJ.phase, JJ.code)
      } catch (jJ) {
        (0, kc.u)(jJ, `${aU} a connection listener threw`)
      }
    }

    function Pq() {
      (0, tF.q)(), queueMicrotask((() => {
        try {
          Lq()
        } catch (JJ) {
          console.warn(`${aU} stopping before the reload threw`, JJ)
        }(0, xZ.flushCrashReports)(OJ.e).then(OJ.o, OJ.o)
      }))
    }

    function kq() {
      const JJ = Ke;
      null === JJ || JJ.isStopped || null === pe || hX || !JJ.hasPendingCommands() || dq(JJ, !1, "budget")
    }

    function pq(JJ) {
      var cJ;
      const ZJ = QX;
      JJ.persisted || null === ZJ || (null === (cJ = pe) || void 0 === cJ ? void 0 : cJ.conn) !== ZJ.conn || pe.left || ZJ.cn()
    }

    function dq(JJ, cJ, FJ) {
      let UJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const eJ = hX;
      hX = !0;
      try {
        return function(JJ, cJ, FJ, UJ) {
          var eJ, XJ, AJ;
          if (nA) return !1;
          if (lq(JJ, Nq), nA || JJ.isStopped) return !1;
          uq() && XX("modelsIn");
          Xq(), jX = performance.now(), sX = null, nX = !1, (0, vJ.H)(), null === (eJ = Le) || void 0 === eJ || eJ.beforeFrame(), cF(jX, JJ), (0, vJ.B)(jX, Oq), YX = !0;
          const qJ = cJ && Cq();
          let jJ;
          try {
            jJ = JJ.frame(jX, qJ, FJ)
          } finally {
            YX = !1
          }
          if (!jJ) return !1;
          oX.observe(null !== (XJ = null === (AJ = JJ.lastHeader) || void 0 === AJ ? void 0 : AJ.chunksCancelled) && void 0 !== XJ ? XJ : 0);
          const YJ = JJ.lastFrameKind,
            hJ = (0, Ec.c)(YJ);
          cJ && (qA = hJ);
          hJ && (0, vc.c)(jX);
          if (null !== cA) try {
            cA.frameRan(JJ, jX, performance.now(), YJ)
          } catch (sJ) {
            gq(sJ)
          }
          "drawn" === YJ && Tq() && function() {
            for (const JJ of [...aF]) JJ()
          }();
          JJ.forEachNetOut(iq);
          const DJ = pe;
          null !== sX && (null === DJ || void 0 === DJ ? void 0 : DJ.conn) === sX && Rq(DJ, wJ.g);
          cJ && function(JJ) {
            var cJ, FJ, UJ;
            if (null === QX || !Cq()) return;
            UA || XA || 0 === JJ.headerWord(Pc.D.TerrainDrawn) || (XA = !0, (0, Sc.j)("wasm_terrain_drawn", performance.now()));
            const eJ = JJ.lastHeader,
              XJ = !CX || 0 === (null === eJ || void 0 === eJ ? void 0 : eJ.renderPending);
            !eA && XJ && (eA = !0, performance.mark(Fe));
            if (AA === QX) return;
            const AJ = null !== (cJ = null === eJ || void 0 === eJ ? void 0 : eJ.firstView) && void 0 !== cJ ? cJ : Hc.W.NotYet;
            if (CX && AJ === Hc.W.NotYet) return;
            if (UA && (!0 !== (null === (FJ = (0, mJ.j)()) || void 0 === FJ ? void 0 : FJ.isSessionLive) || !XJ)) return;
            AA = QX;
            const qJ = QX;
            if (setTimeout((() => {
                QX === qJ && (0, Sc.f)()
              }), 0), null === (UJ = FX) || void 0 === UJ || UJ.playable(), function() {
                clearTimeout(ke), ke = setTimeout((() => {
                  Wq() && Zj((JJ => {
                    let {
                      prefetchWorldgenWorker: cJ
                    } = JJ;
                    cJ()
                  }))
                }), Ge)
              }(), UA) return;
            UA = !0, performance.mark(Ze), (0, QU.q)("render") && ZJ.e(44).then((() => ZJ(4098))).then((JJ => {
              let {
                renderDebugPlayable: cJ
              } = JJ;
              cJ()
            }), (JJ => {
              console.warn("The render debug topic didn't load", JJ)
            }));
            const jJ = Math.round(performance.now());
            if (CX && AJ !== Hc.W.Drawn) {
              const JJ = AJ === Hc.W.HeldBackstop ? "hj" : "long";
              console.warn(`${aU} playable at ${jJ} ms on the first view's ${JJ} backstop: it wasn't drawn whole in time`), (0, Sc.j)("wasm_view_backstop", jJ, JJ)
            } else console.info(`${aU} playable at ${jJ} ms${CX?"":" (no renderer)"}`);
            setTimeout(aX, 0), (0, Dc.i)().catch((JJ => {
              console.error(`${aU} item sprites didn't load, so item particles show the missing texture`, JJ)
            }))
          }(JJ);
          (0, ac.H)(JJ, {
            worldgen: ze,
            mesh: Oe
          }),
          function(JJ) {
            JJ.forEachEvent(FF);
            for (const cJ of ZF) try {
              (0, BZ.d)(cJ)
            } catch (sJ) {
              if ((0, kc.l)(sJ)) {
                JJ.crashOn(ac.k, sJ);
                break
              }
              console.error(`${oZ} an input action listener threw`, sJ)
            }
            ZF.length = 0
          }(JJ), UJ && (0, Qc.e)();
          return !JJ.isStopped
        }(JJ, cJ, "all" === FJ || JJ.rings.net.cursor >= ee || JJ.netKeptFrames >= Xe, UJ)
      } finally {
        hX = eJ
      }
    }

    function zq(JJ) {
      console.error(`${aU} a frame-start listener threw`, JJ)
    }

    function Nq() {
      var JJ, cJ, ZJ, FJ;
      null === (JJ = Be) || void 0 === JJ || JJ.drain(fe, xe), null === (cJ = JX) || void 0 === cJ || cJ.drain(fe), null === (ZJ = cX) || void 0 === ZJ || ZJ.drain(performance.now()), LX(fe), null === (FJ = le) || void 0 === FJ || FJ.drain()
    }

    function Oq(JJ) {
      console.error(`${aU} a before-frame listener threw`, JJ)
    }

    function Tq() {
      return CX && Cq()
    }

    function Cq() {
      return ZX && uq()
    }

    function uq() {
      return null === Be || Be.startupDone
    }

    function iq(JJ, cJ) {
      const ZJ = pe;
      (null === ZJ || void 0 === ZJ ? void 0 : ZJ.conn) === JJ ? Rq(ZJ, cJ) : xX++
    }

    function Rq(JJ, cJ) {
      const {
        ws: ZJ
      } = JJ;
      return ZJ.readyState === WebSocket.OPEN ? (ZJ.send(cJ), !0) : ZJ.readyState === WebSocket.CONNECTING && JJ.pendingBytes + cJ.byteLength <= he ? (JJ.pending.push(cJ.slice()), JJ.pendingBytes += cJ.byteLength, !0) : (xX++, !1)
    }

    function Lq() {
      var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ;
      nA = !0, (0, EU.d)(), Aq(), (0, vJ.F)().unlockPointer(), (0, vJ.E)(null), null === (JJ = ae) || void 0 === JJ || JJ(), ae = null, null === (cJ = (0, mJ.u)()) || void 0 === cJ || cJ.followCursorAim(null), (0, Qc.D)(), (0, mJ.g)(), Me.stop(), null === (ZJ = ZA) || void 0 === ZJ || ZJ(), ZA = null, null === (FJ = FA) || void 0 === FJ || FJ(), FA = null, null === (UJ = cA) || void 0 === UJ || UJ.stop(), cA = null, (0, vZ.s)(null), null === (eJ = de) || void 0 === eJ || eJ(), de = null, null === (XJ = ze) || void 0 === XJ || XJ.stop(), ze = null, null === (AJ = Oe) || void 0 === AJ || AJ.stop(), Oe = null, null !== (qJ = Se) && void 0 !== qJ && null !== (jJ = qJ.textures) && void 0 !== jJ && jJ.assets && mq(null), null === (YJ = Se) || void 0 === YJ || YJ.stop(), Se = null, Ie = null;
      const xJ = Te;
      Te = null, xJ && (xJ.stop(), oq(xJ)), null === (hJ = JX) || void 0 === hJ || hJ.dispose(), JX = null, null === (DJ = cX) || void 0 === DJ || DJ.dispose(), cX = null, Be = null, null === (sJ = oe) || void 0 === sJ || sJ(), oe = null, null === (nJ = Re) || void 0 === nJ || nJ(), Re = null, null === (GJ = Le) || void 0 === GJ || GJ.stop(), Le = null, bA(), OF.d.release(), Jq();
      const rJ = le;
      le = null;
      try {
        null === rJ || void 0 === rJ || rJ.dispose()
      } catch (QJ) {
        console.warn(`${aU} the sky's images didn't release`, QJ)
      }(0, HF.e)(null), null === (fJ = Ee) || void 0 === fJ || fJ.pagePreviews().endSession(null === (0, Fc.r)())
    }

    function aq(JJ, cJ) {
      var ZJ, FJ;
      const UJ = null !== (ZJ = null === (FJ = Te) || void 0 === FJ ? void 0 : FJ.details()) && void 0 !== ZJ ? ZJ : {},
        eJ = JJ.site === tU || JJ.site === oU || JJ.site === xZ.RENDER_RELOAD_SITE || JJ.site === lU ? JJ.error instanceof WebAssembly.RuntimeError || JJ.error instanceof Cc.d : !(0, Lc.x)(JJ.error) && (0, ac.C)(JJ);
      eJ && JJ.error instanceof Error && (0, Fc.Q)(JJ.error);
      const XJ = eJ || JJ.site === ac.r ? (0, xZ.readTrap)(JJ.error) : null,
        AJ = null !== XJ && (0, pc.h)(XJ.kind, XJ.refusedBytes) ? XJ.refusedBytes : 0,
        qJ = null === Ce ? (0, wF.n)(function() {
          try {
            return (0, Fc.v)().buffer.byteLength
          } catch {
            return 0
          }
        }(), AJ, null) : Ce.ceilingMayRefuse(AJ),
        jJ = AJ > 0 && !qJ && Gq();
      var YJ;
      if (jJ && ((0, jc.m)("oom"), sA = !0), Lq(), (0, tF.e)()) return console.warn(`${aU} the session stopped at ${JJ.site} as the page reloads`, JJ.error), void((0, Lc.x)(JJ.error) || (null === (YJ = JJ.header) || void 0 === YJ ? void 0 : YJ.lastError) === Hc.M.CoreBusy || (0, xZ.reportStoppedCore)(JJ, cJ, XJ, {
        memoryDetails: UJ,
        declined: jJ
      }));
      (0, xZ.showCrash)(JJ, cJ, XJ, {
        memoryDetails: UJ,
        declined: jJ
      })
    }

    function Bq(JJ) {
      const {
        input: cJ,
        net: ZJ,
        worker: FJ
      } = JJ.rings, UJ = JJ.optionsDropped, eJ = cJ.dropped + UJ + ZJ.dropped + FJ.dropped + xX;
      eJ !== fX && function(JJ, cJ) {
        const ZJ = performance.now();
        return !(ZJ - GX[JJ] < De) && (GX[JJ] = ZJ, console.warn(`${aU} ${cJ}`), !0)
      }("dropped", `${eJ} records dropped so far (input ${cJ.dropped}, options ${UJ}, net ${ZJ.dropped}, worker ${FJ.dropped}, net-out ${xX})`) && (fX = eJ)
    }

    function tq() {
      var JJ, cJ, ZJ, FJ;
      const UJ = (0, sZ.c)(),
        eJ = null === UJ ? null : (0, GZ.g)(UJ);
      return {
        ...null === (JJ = Te) || void 0 === JJ ? void 0 : JJ.pageKillSnapshot(),
        renderDistance: null === eJ ? null : Math.min(eJ.horizontal, null !== (cJ = null === (ZJ = Te) || void 0 === ZJ ? void 0 : ZJ.shedDistanceInUse()) && void 0 !== cJ ? cJ : 1 / 0),
        renderDistanceVertical: null !== (FJ = null === eJ || void 0 === eJ ? void 0 : eJ.vertical) && void 0 !== FJ ? FJ : null,
        chunkCap: ue,
        budgetBasis: ie,
        renderBackend: (0, tF.D)()
      }
    }

    function oq(JJ) {
      console.info(`${aU} wasm memory at the session's end`, JJ.details())
    }

    function lq(JJ, cJ) {
      if (!JJ.isStopped) try {
        cJ()
      } catch (ZJ) {
        JJ.crash(ac.u, ZJ)
      }
    }

    function Jj() {
      return Ne ??= ZJ.e(63).then((() => ZJ(42011))).catch((JJ => {
        throw Ne = null, JJ
      })), Ne
    }
    async function cj() {
      const {
        createWorldgenWorker: JJ,
        worldgenWorkerReady: cJ
      } = await Jj();
      return await cJ(), JJ
    }

    function Zj(JJ) {
      var cJ;
      null === (cJ = Ne) || void 0 === cJ || cJ.then(JJ, (() => {}))
    }

    function Fj(JJ, cJ, ZJ) {
      return async function(JJ, cJ, ZJ) {
        let {
          stop: FJ,
          stillWanted: UJ
        } = ZJ;
        const eJ = await (0, sF.n)(JJ, {
          stillWanted: UJ,
          beforeReload: async () => {
            FJ(), await (0, xZ.flushCrashReports)(OJ.e)
          },
          reload: OJ.o
        });
        return eJ || cJ(), eJ
      }(JJ, cJ, {
        stop: Lq,
        stillWanted: ZJ
      })
    }
    let Uj = !1;

    function ej() {
      return Uj = !0, async function(JJ, cJ, FJ) {
        const {
          gamePackSource: UJ
        } = await ZJ.e(333).then((() => ZJ(41982)));
        await Iq.packStep(JJ, ((ZJ, FJ) => ZJ.packForGame(JJ, UJ(cJ), FJ)), FJ)
      }(...arguments)
    }

    function Xj(JJ) {
      ! function(JJ, cJ) {
        JJ((JJ => {
          null === JJ || void 0 === JJ || JJ.subscribe((JJ => {
            let {
              pack: ZJ,
              gameSource: FJ
            } = JJ;
            cJ(null === FJ || null === ZJ ? null : {
              pack: ZJ,
              source: "" === FJ ? null : FJ
            })
          }))
        }))
      }(Kq, JJ)
    }
    let Aj = !1,
      qj = null,
      jj = !1,
      Yj = !1;

    function hj() {
      var JJ;
      Aj || (Aj = !0, mA("play", zJ), (0, hJ.m)(new Vj), AJ.gameBridge.attach(MJ), xj().catch((() => {})), (0, mJ.x)((JJ => {
        oJ(JJ.setTextHost)
      })), JJ = nj, dX.add(JJ), function(JJ) {
        for (const cJ of UX) JJ(cJ);
        eX.add(JJ)
      }((JJ => {
        sj(Dj[JJ])
      })))
    }
    const Dj = {
      booted: eJ.e.INITIALISE_NOA,
      texturesIn: eJ.e.REGISTRATION,
      modelsIn: eJ.e.SETUP_LIFEFORMS
    };

    function sj(JJ) {
      qJ.i.Uf("matchmakeAndPlayStepCompleted", {
        step: JJ,
        totalSubSteps: 1
      })
    }

    function nj(JJ) {
      if (!jj) return;
      const {
        gameNameWithVariation: cJ,
        lobbyName: ZJ
      } = (0, hJ.e)();
      if (JJ.code === FJ.b.serverUpdating.code) return (new Vj).leaveLive(), void fj(cJ, ZJ);
      qJ.i.Uf("unwantedLeftGame", {
        reason: Gj(JJ),
        requiresRefresh: JJ.requiresRefresh,
        canReconnect: null !== JJ.reconnect,
        automaticallyReconnect: JJ.reconnecting,
        canPlayAgain: JJ.canPlayAgain,
        gameNameWithVariation: cJ,
        lobbyName: ZJ
      }), (new Vj).leaveLive()
    }

    function Gj(JJ) {
      return null !== JJ.reasonKey ? {
        translationKey: JJ.reasonKey
      } : "gameOrPluginKick" === JJ.name ? JJ.reason : `You have disconnected from the server.\n${JJ.reason}`
    }

    function fj(JJ, cJ) {
      var FJ;
      FJ = (0, jJ.H)(JJ, cJ), Promise.resolve().then((() => ZJ(1406))).then((JJ => {
        let {
          navigatePreserveSearch: cJ
        } = JJ;
        cJ(FJ)
      })).catch((JJ => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", JJ), (0, OJ.i)(FJ)
      }))
    }

    function xj() {
      return qj ??= Promise.all([ZJ.e(64), ZJ.e(67), ZJ.e(66), ZJ.e(65), ZJ.e(77), ZJ.e(228), ZJ.e(202), ZJ.e(226), ZJ.e(197), ZJ.e(43)]).then((() => ZJ(39445))).then((JJ => {
        try {
          JJ.attachPlayGameSources()
        } catch (cJ) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", cJ),
            function(JJ) {
              ge.then((cJ => {
                null === cJ || cJ.isStopped || nA ? console.warn(`${aU} the play sources threw as they attached, after the client stopped`, JJ) : aq({
                  site: lU,
                  error: JJ,
                  header: null
                }, be)
              }))
            }(cJ), cJ
        }
      }), (JJ => {
        throw qj = null, new mJ.d(JJ)
      })), qj
    }
    async function rj(JJ, cJ) {
      hj(), Uj = !0, jj = !0;
      let ZJ = {
          place: JJ.place,
          matchedAt: JJ.matchedAt
        },
        XJ = JJ.place.gameNameWithVariation,
        AJ = null;
      const qJ = await KA({
        matchmake: async () => {
          let cJ = ZJ;
          if (ZJ = null, null === cJ) {
            const ZJ = await JJ.rematch();
            if (ZJ.isError()) throw AJ = ZJ.asError().forward(), new Error(ZJ.asError().message);
            cJ = {
              place: ZJ.getValue(),
              matchedAt: performance.now()
            }
          }
          XJ = cJ.place.gameNameWithVariation;
          return {
            target: await (0, gJ.g)(JJ.userContext, cJ.place, yq()),
            matchedAt: cJ.matchedAt,
            freshMs: gJ.d
          }
        },
        pageReady: xj,
        onFailure: (JJ, cJ) => {
          null === AJ && function(JJ, cJ) {
            (0, xZ.reportPageJoinFailure)(JJ, be, cJ)
          }(JJ, {
            sinceJoinStartMs: cJ,
            game: XJ
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => JJ.userContext.invalidateTrafficCode(),
        signal: cJ
      });
      switch (qJ.kind) {
        case "joined":
          return Yj || (Yj = !0, (0, nJ.c)()), jj ? (sj(eJ.e.CONNECT_TO_GAME_SERVER), sj(eJ.e.SHADER_PACK), MA() && (0, sJ.e)(JJ.userContext, XJ).catch((JJ => {
            console.error("Failed to report the shader pack session", JJ)
          })), function() {
            const JJ = function() {
              var JJ, cJ;
              return null !== (JJ = null === (cJ = FX) || void 0 === cJ ? void 0 : cJ.couldntRunInJoinedGame()) && void 0 !== JJ ? JJ : null
            }();
            null !== JJ && (0, sJ.d)(JJ)
          }(), UJ.b.value(void 0)) : Ej("The server ended the game as it joined");
        case "failed":
          if (!qJ.reloading) {
            if (null !== AJ) return AJ;
            if ((qJ.error instanceof wJ.i || qJ.error instanceof wJ.b) && qJ.error.code === FJ.b.serverUpdating.code) {
              if (cJ.aborted) return Ej("Left the game while it loaded");
              const {
                gameNameWithVariation: JJ,
                lobbyName: ZJ
              } = (0, hJ.e)();
              return fj(JJ, ZJ), Ej("The server is updating")
            }
            return qJ.error instanceof NJ.f ? UJ.b.errorWithCode(qJ.error.messageKey, eJ.e.SHADER_PACK, {
              severity: "medium"
            }) : UJ.b.errorWithCode(function(JJ) {
              if (JJ instanceof wJ.o || JJ instanceof xJ.h) return JJ.message;
              if (vj(JJ)) return (0, bJ.m)(JJ.code, JJ.serverText);
              return bJ.h
            }(qJ.error), eJ.e.CONNECT_TO_GAME_SERVER, {
              error: mj(qJ.error) ? qJ.error : void 0,
              severity: Qj(qJ.error),
              gameServerUnreachable: (0, WJ.d)(qJ.error),
              rematch: (0, fJ.d)(qJ.error)
            })
          }
          return Ej("Reloading into the new build");
        case "stopped":
          return Ej("The game client stopped, and shows why");
        case "hZ":
          return Ej("Left the game while it loaded")
      }
    }

    function vj(JJ) {
      return JJ instanceof wJ.i || JJ instanceof wJ.b && "attach" !== JJ.stage
    }

    function mj(JJ) {
      return !(JJ instanceof wJ.o) && !vj(JJ) && void 0 === (0, WJ.d)(JJ)
    }

    function Qj(JJ) {
      return vj(JJ) ? JJ instanceof wJ.b && (0, bJ.j)(JJ.code).requiresRefresh ? "medium" : "low" : mj(JJ) || JJ instanceof wJ.o ? "medium" : "low"
    }

    function Ej(JJ) {
      return UJ.b.errorWithCode(JJ, eJ.e.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        hZ: !0
      })
    }
    class Vj {
      cn(JJ) {
        if ((0, rJ.b)()) {
          var cJ, ZJ;
          if ((0, XJ.c)()) return;
          (0, DJ.d)(!0 === (null === (cJ = (0, rJ.n)()) || void 0 === cJ || null === (ZJ = cJ.currentViewer) || void 0 === ZJ ? void 0 : ZJ.unsavedChanges), JJ)
        } else this.leaveLive()
      }
      leaveLive() {
        var JJ;
        Uj && (null === (JJ = yq()) || void 0 === JJ || JJ.endGamePack());
        if (!jj) return;
        jj = !1, (0, GJ.f)();
        try {
          var cJ;
          null === (cJ = (0, mJ.u)()) || void 0 === cJ || cJ.clearWasmCameraScreen()
        } catch (FJ) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", FJ)
        }
        const {
          gameNameWithVariation: ZJ
        } = (0, hJ.e)();
        try {
          kA()
        } finally {
          (0, hJ.o)({
            websocketUrl: null
          }), qJ.i.Uf("leaveGame", {
            gameNameWithVariation: ZJ
          }), (0, YJ.R)()
        }
      }
      isReplay() {
        return (0, rJ.b)()
      }
    }
  },
  39781: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      d: () => FJ,
      e: () => AJ,
      i: () => XJ
    });
    const FJ = 12e4,
      UJ = 3e4,
      eJ = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: JJ => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", JJ), () => {
          document.removeEventListener("visibilitychange", JJ)
        })
      };

    function XJ(JJ) {
      return `it sent no start within ${Math.round(JJ)} ms`
    }
    class AJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eJ;
        this.timeoutMs = JJ, this.onTimeout = cJ, this.now = ZJ, this.visibility = FJ, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = FJ.listen((() => {
          this.onVisibility()
        })), FJ.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const JJ = this.step;
        return null === JJ ? 0 : Math.min(this.now() - JJ.at, JJ.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const JJ = this.timeoutMs - this.counted;
        if (JJ <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const cJ = Math.min(JJ, 5e3);
        this.step = {
          at: this.now(),
          ms: cJ
        }, this.arm(cJ, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(JJ, cJ) {
        this.timer = setTimeout((() => {
          this.timer = null, cJ()
        }), JJ)
      }
    }
  },
  36719: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return "string" !== typeof JJ || 2 !== JJ.length && ":" !== JJ[2] ? null : JJ[0] + JJ[1]
    }

    function UJ(JJ) {
      const cJ = FJ(JJ);
      return "op" === cJ || "ep" === cJ || "wi" === cJ || "pp" === cJ || "fp:call" === JJ || "fp:t" === JJ
    }

    function eJ(JJ) {
      return "fp" === FJ(JJ) && !UJ(JJ)
    }

    function XJ(JJ) {
      if ("string" !== typeof JJ) return !1;
      return "o" === JJ[0] && "p" === JJ[1] && (2 === JJ.length || ":" === JJ[2]) || "fp:call" === JJ || "2" === JJ || "t" === JJ || "a" === JJ
    }

    function AJ(JJ, cJ) {
      return `~${function(JJ){return JJ.length<2?JJ:":"===JJ[1]?JJ[0]:JJ[0]+JJ[1]}(cJ)}~${JJ}`
    }
    ZJ.d(cJ, {
      c: () => GJ,
      f: () => XJ,
      i: () => eJ,
      l: () => UJ,
      m: () => AJ,
      o: () => fJ,
      p: () => nJ
    });
    const qJ = 200;

    function jJ(JJ) {
      let cJ = JJ.length - 1;
      for (let ZJ = 0; ZJ < 2; ZJ++) {
        const ZJ = cJ;
        for (; cJ >= 0 && JJ[cJ] >= "0" && JJ[cJ] <= "9";) cJ--;
        if (cJ < 0 || cJ === ZJ || ":" !== JJ[cJ]) return -1;
        cJ--
      }
      return cJ + 1
    }

    function YJ(JJ) {
      return "unknown" === JJ || jJ(JJ) >= 0
    }

    function hJ(JJ, cJ) {
      return JJ[cJ] >= "\ud800" && JJ[cJ] <= "\udbff" && cJ + 1 < JJ.length && JJ[cJ + 1] >= "\udc00" && JJ[cJ + 1] <= "\udfff" ? 2 : 1
    }

    function DJ(JJ, cJ, ZJ) {
      return 2 === ZJ ? 4 : JJ[cJ] <= "\x7f" ? 1 : JJ[cJ] <= "\u07ff" ? 2 : 3
    }

    function sJ(JJ, cJ, ZJ) {
      let FJ = 0;
      for (; FJ < cJ;) {
        const cJ = hJ(JJ, FJ),
          UJ = DJ(JJ, FJ, cJ);
        if (UJ > ZJ) break;
        ZJ -= UJ, FJ += cJ
      }
      return FJ
    }

    function nJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof JJ || JJ.length > qJ || !YJ(JJ)) return "t";
      let ZJ = 2;
      for (let AJ = 0; AJ < JJ.length;) {
        const cJ = hJ(JJ, AJ);
        ZJ += DJ(JJ, AJ, cJ), AJ += cJ
      }
      if (ZJ <= cJ) return `t ${JJ}`;
      const FJ = jJ(JJ),
        UJ = cJ - 2 - (JJ.length - FJ);
      if (UJ < 0) return "t";
      const eJ = sJ(JJ, FJ, UJ);
      let XJ = "t ";
      for (let AJ = 0; AJ < eJ; AJ++) XJ += JJ[AJ];
      for (let AJ = FJ; AJ < JJ.length; AJ++) XJ += JJ[AJ];
      return XJ
    }
    const GJ = 62;

    function fJ(JJ) {
      let cJ = "so:";
      const ZJ = sJ(JJ, JJ.length, GJ - cJ.length);
      for (let FJ = 0; FJ < ZJ; FJ++) cJ += JJ[FJ];
      return cJ
    }
  },
  39653: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    const FJ = {
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
  37703: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(3178);
    const UJ = ["none", "idle", "now"];

    function eJ() {
      const JJ = () => (0, FJ.C)();
      return {
        memoryBytes: () => (0, FJ.v)().buffer.byteLength,
        reserveUpFront: cJ => JJ().LY(cJ),
        reserveAhead: cJ => JJ().RY(cJ),
        setCeiling: cJ => {
          JJ().aY(cJ)
        },
        lowWater: () => UJ[JJ().iY()] ?? "none",
        stats: () => function(JJ) {
          const cJ = new Uint32Array((0, FJ.v)().buffer, JJ, 17),
            ZJ = JJ => cJ[JJ] ?? 0,
            UJ = JJ => ({
              upFront: ZJ(JJ),
              ahead: ZJ(JJ + 1),
              onDemandInFrame: ZJ(JJ + 2),
              onDemand: ZJ(JJ + 3)
            });
          return {
            memoryBytes: ZJ(0),
            initialBytes: ZJ(1),
            liveBytes: ZJ(2),
            peakLiveBytes: ZJ(3),
            headroomBytes: ZJ(4),
            unusedBytes: ZJ(5),
            ceilingBytes: ZJ(6),
            reservesRefused: ZJ(7),
            grows: UJ(8),
            grownBytes: UJ(12),
            allocationsRefused: ZJ(16)
          }
        }(JJ().BY()),
        takeBallast: () => JJ().tY(),
        takePressure: () => JJ().oY()
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);