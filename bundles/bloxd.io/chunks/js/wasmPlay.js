export const id = 60;
export const ids = [60];
export const modules = {
  39346: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      e: () => Ku
    });
    const Eu = "The world isn't loaded, so no blocks can be seen.",
      Ku = "The world isn't loaded, so nothing in it can be seen."
  },
  38847: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => pu,
      d: () => Tu,
      e: () => Su
    });
    var Eu = yu(2707);
    const Ku = 0,
      Qu = 2,
      mu = 3,
      Ju = 4;
    class Nu {
      constructor(uu, Ru) {
        this.width = uu, this.Nr = Ru, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(uu * Ru)
      }
      push(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Eu = 0; Eu < this.width; Eu++) yu[Eu] = uu[Ru + Eu];
        return this.next = (this.next + 1) % this.Nr, this.size = Math.min(this.size + 1, this.Nr), yu
      }
      lines() {
        const uu = [],
          Ru = (this.next - this.size + this.Nr) % this.Nr;
        for (let yu = 0; yu < this.size; yu++) {
          const Eu = (Ru + yu) % this.Nr * this.width;
          uu.push(Array.from(this.data.subarray(Eu, Eu + this.width)).join(","))
        }
        return uu
      }
    }

    function Xu(uu) {
      return Number.isFinite(uu) ? String(Math.round(10 * uu) / 10) : String(uu)
    }

    function Vu(uu) {
      return Number.isFinite(uu) ? uu.toFixed(1) : String(uu)
    }
    class ru {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.KF = 0, this.pastLimit = 0, this.lockSkips = 0, this.NT = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Bu {
      constructor() {
        var uu = this;
        this.tally = new ru, this.records = new Nu(10, 3600), this.events = new Nu(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Eu, Nu, ru, Bu, xu, Su, pu, Tu, Wu, ju] = uu.records.push(Ru, yu), Hu = uu.tally;
          switch (Hu.frames++, pu) {
            case Ku:
              return void Hu.idle++;
            case Ju:
              return void Hu.NT++;
            case mu:
              return Hu.lockSkips++, void(0 === ru && 0 === Bu || uu.outlier(`lock skip dropped raw (${Xu(ru)}, ${Xu(Bu)}) at ${Vu(Eu)} ms`))
          }
          Hu.looked++, Number.isFinite(Nu) && (Hu.dtMin = Math.min(Hu.dtMin, Nu), Hu.dtMax = Math.max(Hu.dtMax, Nu), Hu.dtSum += Nu, Nu > 0 && (Hu.peakRate = Math.max(Hu.peakRate, Math.hypot(xu, Su) / Nu))), Hu.raw[0] += ru, Hu.raw[1] += Bu, Hu.turned[0] += xu, Hu.turned[1] += Su;
          const du = Math.abs(ru) > ju || Math.abs(Bu) > ju,
            bu = `raw (${Xu(ru)}, ${Xu(Bu)}) over ${Vu(Nu)} ms, limit ${Xu(ju)}, filter v (${Tu.toFixed(3)}, ${Wu.toFixed(3)}) px/ms, at ${Vu(Eu)} ms`;
          pu === Qu ? (Hu.KF++, uu.outlier(`spike put right: ${bu} -> turned (${Xu(xu)}, ${Xu(Su)})`)) : du ? (Hu.pastLimit++, uu.outlier(`kept past limit: ${bu}`)) : Nu > 50 && (Hu.longFrames++, uu.outlier(`long frame: ${bu}, turned in full`))
        }, this.onMouseMove = uu => {
          const Ru = this.tally,
            {
              movementX: yu,
              movementY: Eu
            } = uu;
          Ru.events++;
          const Ku = Math.max(Math.abs(yu), Math.abs(Eu));
          Ru.eventMax = Math.max(Ru.eventMax, Ku);
          const Qu = null !== document.pointerLockElement,
            mu = this.event;
          mu[0] = uu.timeStamp, mu[1] = yu, mu[2] = Eu, mu[3] = Qu ? 1 : 0, this.events.push(mu), Ku >= 200 && (Ru.bigEvents++, this.eventOutlier(`big mousemove (${yu}, ${Eu}) at ${Vu(uu.timeStamp)} ms, lock ${Qu?"jJ":"free"}`))
        }, this.onLockChange = () => {
          const uu = document.pointerLockElement;
          (0, Eu.i)("look", `pointer lock ${uu?`gained (${uu.tagName.toLowerCase()})`:"lost"} at ${Vu(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Eu.i)("look", `pointer lock request failed at ${Vu(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Eu.i)("look", `page ${document.visibilityState} at ${Vu(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const uu = this.tally;
          if (this.tally = new ru, 0 === uu.events && 0 === uu.raw[0] && 0 === uu.raw[1] && 0 === uu.lockSkips && 0 === uu.KF && 0 === uu.dropped) return;
          const Ru = uu.looked > 0 ? uu.dtSum / uu.looked : NaN,
            yu = [`${uu.frames} frames (${uu.looked} looked, ${uu.idle} idle${"wasm"===this.client?`, ${uu.NT} carried`:""})`, `dt avg ${Vu(Ru)} min ${Vu(uu.dtMin)} max ${Vu(uu.dtMax)}, ${uu.longFrames} long`, `${uu.events} mousemoves (max ${Xu(uu.eventMax)} px, ${uu.bigEvents} big)`, `raw (${Xu(uu.raw[0])}, ${Xu(uu.raw[1])}) turned (${Xu(uu.turned[0])}, ${Xu(uu.turned[1])})`, `peak ${uu.peakRate.toFixed(2)} px/ms`, `put right ${uu.KF}, past limit ${uu.pastLimit}, lock skips ${uu.lockSkips}`, "lock " + (document.pointerLockElement ? "jJ" : "free")];
          uu.dropped > 0 && yu.push(`${uu.dropped} doubled spike copies dropped`), uu.lost > 0 && yu.push(`${uu.lost} records lost`), uu.suppressed > 0 && yu.push(`${uu.suppressed} outlier lines not shown`), (0, Eu.i)("look", `1s: ${yu.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(uu, Ru) {
        this.client = uu, this.take = Ru;
        const {
          screen: yu
        } = window;
        (0, Eu.i)("look", `start: ${uu} client, dpr ${window.devicePixelRatio}, screen ${yu.width}x${yu.height}, pointer lock ${document.pointerLockElement?"jJ":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Eu.g)("look", this.dump))
      }
      outlier(uu) {
        const Ru = this.tally;
        Ru.outliers >= 20 ? Ru.suppressed++ : (Ru.outliers++, (0, Eu.i)("look", uu))
      }
      eventOutlier(uu) {
        const Ru = this.tally;
        Ru.eventLines >= 10 ? Ru.suppressed++ : (Ru.eventLines++, (0, Eu.i)("look", uu))
      }
      takeRecords() {
        var uu;
        const Ru = null === (uu = this.take) || void 0 === uu ? void 0 : uu.call(this);
        if (Ru && Ru.length >= 2) {
          this.tally.lost += Ru[0], this.tally.dropped += Ru[1];
          for (let uu = 2; uu + 10 <= Ru.length; uu += 10) this.record(Ru, uu)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let xu = null;

    function Su(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return xu ??= new Bu, xu.start(uu, Ru), xu.record
    }

    function pu() {
      var uu;
      null === (uu = xu) || void 0 === uu || uu.endTake()
    }

    function Tu() {
      var uu;
      null === (uu = xu) || void 0 === uu || uu.droppedCopy()
    }
  },
  8949: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    const Eu = new Set(["chunkBorders"])
  },
  9100: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      c: () => Ku,
      e: () => Vu
    });
    var Eu = yu(1517);

    function Ku(uu) {
      var Ru;
      return {
        ...mu.store,
        yaw: mu.store.yaw + (null !== (Ru = Eu.b[uu].previewYaw) && void 0 !== Ru ? Ru : 0)
      }
    }
    const Qu = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mu = {
        player: Qu,
        store: {
          ...Qu,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ju(uu, Ru) {
      uu instanceof Promise ? uu.then(Ru).catch((uu => {
        console.error("Couldn't open the preview", uu)
      })) : Ru(uu)
    }
    class Nu {
      constructor(uu) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height), null !== this.view && uu.show(this.view))
        }))
      }
      show(uu) {
        var Ru;
        this.view = uu, null === (Ru = this.opened) || void 0 === Ru || Ru.show(uu)
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    class Xu {
      constructor(uu) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(uu).then((uu => uu.ready)), Ju(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.isReady()) && void 0 !== uu && uu
      }
      setCosmetic(uu, Ru) {
        var yu;
        null === (yu = this.opened) || void 0 === yu || yu.setCosmetic(uu, Ru)
      }
      playEmote(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.playEmote(uu)
      }
      setOrbit(uu) {
        var Ru;
        null === (Ru = this.opened) || void 0 === Ru || Ru.setOrbit(uu)
      }
      resetCamera() {
        var uu;
        null === (uu = this.opened) || void 0 === uu || uu.resetCamera()
      }
      async untilDrawn(uu) {
        var Ru;
        await this.ready, await (null === (Ru = this.opened) || void 0 === Ru ? void 0 : Ru.untilDrawn(uu))
      }
      resize(uu, Ru) {
        var yu;
        this.size = {
          width: uu,
          height: Ru
        }, null === (yu = this.opened) || void 0 === yu || yu.resize(uu, Ru)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    const Vu = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(uu) {
        this.host = uu
      }
      setDefaultHost(uu) {
        this.makeDefault = uu
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(uu) {
        return new Nu(this.current().openMob(uu))
      }
      openPet(uu) {
        return new Nu(this.current().openPet(uu))
      }
      openMobLineup(uu) {
        return new Nu(this.current().openMobLineup(uu))
      }
      openCharacter(uu, Ru) {
        return new Xu(this.current().openCharacter(uu, Ru))
      }
    }
  },
  38994: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => ru,
      f: () => Bu
    });
    var Eu = yu(174),
      Ku = yu(203),
      Qu = yu(1439),
      mu = yu(3032),
      Ju = yu(1447),
      Nu = yu(36322),
      Xu = yu(640),
      Vu = yu(38963);

    function ru(uu) {
      (0, mu.e)("matchmake_failed", uu, Eu.p[Eu.p.SHADER_PACK])
    }
    async function Bu(uu, Ru) {
      var yu;
      const Eu = null === (yu = await Vu.shaderPackPage.preload()) || void 0 === yu ? void 0 : yu.listing,
        mu = (0, Nu.e)();
      Eu && null !== mu && await Ju.e.reportShaderPackSession(uu, {
        packId: Eu.packId,
        sourceHash: Eu.sourceHash,
        game: (0, Qu.f)(Ru, Ku.w, "other"),
        playSessionId: mu,
        visitSessionId: (0, Xu.e)()
      })
    }
  },
  38797: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju
    });
    var Eu = yu(34),
      Ku = yu(1250),
      Qu = yu(3273);
    const mu = "Reconnecting";
    class Ju {
      constructor(uu) {
        this.hooks = uu, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = uu => {
          uu.persisted || this.leave()
        }, this.controller = new Qu.d((Ru => uu.reconnect(Ru)), {
          isSessionLive: () => !this.ended && uu.isLive(),
          onPhaseChanged: uu => {
            this.onPhaseChanged(uu)
          },
          onReconnected: Ru => {
            uu.onReconnected(Ru)
          },
          onGaveUp: Ru => {
            !this.ended && uu.isLive() && uu.onGaveUp(this.sessionBased, Ru)
          }
        })
      }
      onInitialInfo(uu, Ru) {
        this.graceMs = uu, this.sessionBased = Ru
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
          Ru = this.controller.heldToken;
        this.end(), uu && "" !== Ru && this.hooks.releaseSeat(Ru)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(uu) {
        const Ru = "frozen" === uu || "resuming" === uu;
        Ru !== this.stopped && (this.stopped = Ru, this.hooks.freeze(Ru));
        const yu = "frozen" === uu || "resuming" === uu && this.frozen;
        yu && !this.frozen ? (0, Ku.o)(mu) : !yu && this.frozen && (0, Ku.m)(mu), this.frozen = yu, this.setListening("connected" !== uu), Eu.k.Op(Qu.n, yu ? "frozen" : uu)
      }
      setListening(uu) {
        uu !== this.listening && (this.listening = uu, uu ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38802: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = uu, this.now = Ru, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const uu = this.now(),
            Ru = uu - this.lastCheckAt <= 2e3;
          this.lastCheckAt = uu;
          const yu = "visible" === document.visibilityState;
          !yu || Ru && this.wasVisible || (this.resumedAt = uu), this.wasVisible = yu, yu && uu - this.lastHeardAt > 12e3 && uu - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Ru(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8984: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(1056);

    function Ku() {
      var uu, Ru;
      return null !== (uu = null === (Ru = screen.orientation) || void 0 === Ru ? void 0 : Ru.type) && void 0 !== uu ? uu : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Qu = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Ku() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Ku(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Eu.jp)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const uu of this.resizers) uu()
          }
        }), 1e3)
      }
      heldSizer(uu) {
        let Ru = !1;
        return () => {
          if (Ru && this.isHeld()) return null;
          const yu = uu();
          return Ru ||= null !== yu, yu
        }
      }
      onRelease(uu) {
        return this.resizers.add(uu), () => {
          this.resizers.delete(uu)
        }
      }
    }
  },
  38984: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    let Eu = !1;
    async function Ku(uu, Ru) {
      if (!Eu) {
        Eu = !0;
        try {
          const [{
            reloadBloxd: Eu
          }, {
            NotificationProvider: Ku
          }] = await Promise.all([Promise.resolve().then((() => yu(1661))), Promise.resolve().then((() => yu(1311)))]);
          if (!uu || !0 === await Ku.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Eu(Ru)
        } catch (Ku) {
          console.error("Leaving the replay failed", Ku)
        }
        Eu = !1
      }
    }
  },
  38812: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu,
      d: () => Vu
    });
    var Eu = yu(1646),
      Ku = yu(212),
      Qu = yu(1626),
      mu = yu(1690),
      Ju = yu(1176),
      Nu = yu(1110);
    async function Xu(uu, Ru) {
      return function(uu) {
        return "object" === typeof uu && null !== uu && uu.code === Ku.c.VpnIp.code
      }(Ru) && function(uu) {
        return Qu.d.supports("appCheck") && uu.isLoggedIn() && !uu.hasTriedAppAttestation()
      }(uu) && await async function(uu) {
        try {
          const {
            token: Ru
          } = await (0, mu.e)(), {
            "3PSIDMCPP": yu
          } = await (0, Nu.postJsonWithMetricsCookiesAndJsonResponse)(`${Ju.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Ru
          }, {
            retries: 0
          }, uu.getMetricsCookies());
          return uu.setAppAttestedAuthJwt(yu), !0
        } catch (Ru) {
          return Ru instanceof Eu.c && "failed" === Ru.code ? (console.warn("The app couldn't get an App Check token:", Ru), uu.markAppAttestationTried()) : console.error("Failed to attest the app:", Ru), !1
        }
      }(uu)
    }
    async function Vu(uu, Ru) {
      try {
        return await Ru()
      } catch (yu) {
        if (!await Xu(uu, yu)) throw yu
      }
      return Ru()
    }
  },
  40616: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu
    });
    var Eu = yu(1670);
    const Ku = 33177600,
      Qu = 3e4;
    let mu = !1;

    function Ju(uu, Ru, yu) {
      if (!uu.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (mu) return Promise.reject(new Error("A screenshot is already being taken"));
      mu = !0;
      const Eu = function(uu, Ru, yu) {
        const Eu = Math.max(1, uu),
          Qu = Math.max(1, Ru),
          mu = Math.min(1, yu / Math.max(Eu, Qu), Math.sqrt(Ku / (Eu * Qu)));
        return {
          width: Math.max(1, Math.floor(Eu * mu)),
          height: Math.max(1, Math.floor(Qu * mu))
        }
      }(Ru, yu, uu.maxTextureSize);
      return uu.resize(Eu.width, Eu.height), new Promise(((Ru, yu) => {
        let Eu, Ku = 2,
          Ju = null;
        const Nu = () => {
          var Ru;
          mu = !1, null === (Ru = Ju) || void 0 === Ru || Ru(), clearTimeout(Eu), uu.restoreSize()
        };
        Eu = setTimeout((() => {
          Nu(), yu(new Error("No frame was drawn to capture"))
        }), Qu), Ju = uu.onFrameDrawn((() => {
          if (Ku--, Ku > 0) return;
          const {
            canvas: Eu
          } = uu, Qu = {
            width: Eu.width,
            height: Eu.height
          };
          try {
            Eu.toBlob((uu => {
              uu ? Ru({
                blob: uu,
                ...Qu
              }) : yu(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (mu) {
            yu(mu)
          } finally {
            Nu()
          }
        }))
      }))
    }
    async function Nu(uu, Ru, yu) {
      try {
        const Ku = await Ju(uu, Ru, yu);
        (0, Eu.c)(Ku.blob, `bloxd-screenshot-${Ku.width}x${Ku.height}-${Date.now()}.png`)
      } catch (Ku) {
        console.error("Error taking screenshot:", Ku)
      }
    }
  },
  38808: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Bu,
      e: () => Vu
    });
    var Eu = yu(212),
      Ku = yu(1731),
      Qu = yu(1739),
      mu = yu(8652);
    const Ju = [250, 500, 1e3, 2e3, 1250],
      Nu = 406;

    function Xu(uu) {
      if ("object" !== typeof uu || null === uu) return !1;
      const {
        code: Ru,
        message: yu
      } = uu, Ku = Eu.c.duplicateLobbyNameError;
      return (Ru === Ku.code || Ru === Nu) && (yu === Ku.text || yu === Ku.text + Eu.j)
    }
    async function Vu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ku.d;
      for (let Ku = 0;; Ku++) {
        let mu;
        (0, Qu.p)(Ru);
        try {
          return await uu()
        } catch (Eu) {
          if (mu = Ju[Ku], void 0 === mu || !Xu(Eu)) throw Eu
        }
        await yu(mu, Ru)
      }
    }
    const ru = new Set([Eu.c.duplicateLobbyNameError.code, Eu.c.lobbyCantBeCreated.code, Eu.c.roomDisposedEarlyError.code, Eu.c.roomDisposedLateError.code, Eu.c.serverRoomLimitReached.code]);

    function Bu(uu) {
      if (Xu(uu)) return !0;
      const Ru = (0, mu.g)(uu);
      return "number" === typeof Ru && ru.has(Ru)
    }
  },
  8652: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => mu,
      j: () => Ju,
      l: () => Xu,
      p: () => Nu
    });
    var Eu = yu(212),
      Ku = yu(4409);

    function Qu(uu) {
      return mu(uu) === Eu.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function mu(uu) {
      return "object" === typeof uu && null !== uu ? uu.code : void 0
    }

    function Ju(uu) {
      var Ru;
      return null !== (Ru = Object.keys(Ku.e).find((Ru => Ku.e[Ru] === uu))) && void 0 !== Ru ? Ru : null
    }

    function Nu(uu) {
      return "notWhitelisted" === uu ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Xu = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38906: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu
    });
    var Eu = yu(330),
      Ku = yu(145),
      Qu = yu(47);

    function mu() {
      Qu.i.setItem(Eu.Nb, Qu.i.getItem(Eu.Nb) + 1), (0, Ku.n)() && Qu.i.setItem(Eu.Kb, Qu.i.getItem(Eu.Kb) + 1)
    }
  },
  36316: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ju,
      c: () => Hu
    });
    var Eu = yu(1001),
      Ku = yu(614),
      Qu = yu(343),
      mu = yu(1008),
      Ju = yu(624),
      Nu = yu(654),
      Xu = yu(4291),
      Vu = yu(106),
      ru = yu(145),
      Bu = yu(1661),
      xu = yu(125),
      Su = yu(36322),
      pu = yu(47),
      Tu = yu(640),
      Wu = yu(36324);

    function ju() {
      var uu, Ru;
      return [...null !== (uu = navigator.languages) && void 0 !== uu ? uu : [null !== (Ru = navigator.language) && void 0 !== Ru ? Ru : "none"], "en-Gb"]
    }

    function Hu(uu, Ru, yu, Hu, du) {
      const bu = (0, Eu.i)(Ru) ? (0, Eu.n)(Ru) : null,
        Cu = {
          cookies: (0, Bu.getAllCookiesForGameNameWithVariation)(Ru),
          isMobile: (0, Vu.isMobile)(),
          isUsingCustomGameTexturePack: null !== bu && du(bu),
          generalCookies: {
            joinDiscord: !!pu.i.getItem("DiscordPressed"),
            newGo: Xu.b,
            ...uu.getMetricsCookies(),
            trafficCode: Hu,
            compliance: Vu.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Vu.getBrowserName)(),
            version: (0, Vu.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Vu.getPlatformType)(),
            deviceType: (0, xu.c)()
          },
          isLoggedIn: uu.isLoggedIn(),
          lobbyName: yu,
          languages: ju(),
          version: Ku.c,
          siteUsed: ru.v,
          subsiteUsed: ru.C,
          playSessionId: (0, Su.l)(Ru),
          visitSessionId: (0, Tu.e)(),
          clientReason: Ju.i.reason,
          budgetBasis: (0, Wu.f)(),
          ...null !== Nu.n && {
            diagClaim: Nu.n.claimId
          }
        };
      return null !== bu && (0, Qu.Qc)(bu) ? (Cu.lobbyName = (0, Eu.h)(bu, (0, Eu.m)(Ru), yu), {
        roomName: `classic_${mu.e}`,
        joinOptions: Cu
      }) : {
        roomName: Ru,
        joinOptions: Cu
      }
    }
  },
  40241: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju
    });
    var Eu = yu(39346);

    function Ku(uu) {
      return {
        current: () => uu,
        watch: () => () => {}
      }
    }

    function Qu() {}
    const mu = Object.freeze([0, 0, 0]),
      Ju = {
        states: {
          health: Ku({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Ku({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Ku({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Ku({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Ku({}),
          creativeVisibility: Ku({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Ku(null),
          heldItemAim: Ku({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Ku(!1),
          gliderBoostFuel: Ku(0),
          flight: Ku({
            canFly: !1,
            flying: !1
          }),
          crafting: Ku({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Ku({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Ku({}),
          fullInventory: Ku(!1),
          crosshairTarget: Ku({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Ku(!0),
          freeCamera: Ku({
            allowed: !1,
            movesFly: !1
          }),
          replay: Ku(null),
          replayEdits: Ku(null),
          replayRecorder: Ku({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Ku(!1)
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
          selectHotbarSlot: Qu,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Qu,
          setInventoryOpen: Qu,
          changeIronChestPasskey: Qu,
          dragReplayCamera: Qu,
          applyTemporaryThirdPerson: Qu,
          holdEmoteWheel: Qu,
          recordFlyingMiddleText: Qu,
          focusCrafting: Qu,
          craftRecipe: () => ({
            QV: 0,
            nV: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Qu,
          setShopOpen: Qu,
          buyShopItem: Qu,
          sendChatMessage: Qu,
          ignorePlayer: Qu,
          reportPlayer: Qu,
          reportWorldCodeChat: Qu,
          requestDiscordReportKey: Qu,
          reportLobbyOrGame: Qu,
          playEmote: Qu,
          updateMyCosmetic: Qu,
          writeOnBoard: Qu,
          writeBook: Qu,
          writeNameTag: Qu,
          setCustomLobbyBlock: Qu,
          openIronChest: Qu,
          sendCodeCollab: Qu,
          clickCodeBlock: Qu,
          bindCustomButtonKeys: Qu,
          pressCustomButton: Qu,
          moveReplayFreecam: Qu,
          holdReplayFreecamVertical: Qu,
          respawn: Qu,
          wakeUp: Qu,
          requestLeaderboard: Qu,
          completeTask: Qu,
          setServerCookie: Qu,
          answerUiRequest: Qu,
          chooseRewardedAd: Qu,
          setCameraZoom: Qu,
          setFreeCameraMovesFly: Qu,
          setBlockHighlight: Qu,
          setCrosshairInteractPrompt: Qu,
          setLookSensitivity: Qu,
          replayAction: Qu,
          setReplayPlaying: Qu,
          seekReplay: Qu,
          setReplayCameraMode: Qu,
          syncReplayCameraMode: Qu,
          setReplayCameraKeyframe: Qu,
          moveReplayCameraKeyframe: Qu,
          deleteReplayCameraKeyframes: Qu,
          setReplayPlaybackMark: Qu,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Qu,
          exportReplayVideo: Qu,
          toggleRecording: Qu,
          saveClip: Qu,
          setRecorderPrefs: Qu,
          setReplayViewerOpen: Qu
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Eu.d,
          worldCodeAiGameState: () => Eu.e
        },
        lookups: {
          localPos: () => mu,
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
  36324: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Cu,
      f: () => bu,
      g: () => du
    });
    var Eu = yu(212),
      Ku = yu(106),
      Qu = yu(2716),
      mu = yu(4164),
      Ju = yu(629),
      Nu = yu(36328);
    const Xu = 1048576,
      Vu = 1024 * Xu,
      ru = 400 * Xu,
      Bu = 147456,
      xu = .5,
      Su = 1.5 * Vu,
      pu = 768 * Xu;

    function Tu(uu) {
      return ru + uu * Bu
    }

    function Wu(uu, Ru, yu) {
      var Ku, mu;
      let {
        footprintBytes: Ju,
        basis: Xu,
        namesLimit: Wu
      } = function(uu) {
        const {
          os: Ru,
          deviceMemory: yu
        } = uu;
        if ("ios" === Ru) switch ((0, Qu.f)(uu)) {
          case "ipad_m":
            return {
              footprintBytes: Tu(Nu.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: pu, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Su, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: pu, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof yu && Number.isFinite(yu) && yu > 0 ? {
          footprintBytes: yu * Vu * xu,
          basis: `memory-${yu}`,
          namesLimit: !0
        } : "android" === Ru ? {
          footprintBytes: pu,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Tu(Nu.i),
          basis: "unreported",
          namesLimit: !1
        }
      }(uu);
      if (yu) {
        const uu = Math.min(Ju, Tu(Nu.e));
        Ju = ru + Math.max(0, uu - ru) / 2, Xu += "+killed", Wu = !0
      }
      null !== Ru && Tu(Ru) < Ju && (Ju = Tu(Ru), Xu += "+learned", Wu = !0);
      const ju = function(uu) {
          const Ru = Math.floor((uu - ru) / Bu);
          return Math.min(Nu.e, Math.max(Nu.g, Ru))
        }(Ju),
        Hu = (0, Nu.l)(ju);
      return {
        footprintBytes: Ju,
        shedFootprintBytes: Wu ? Math.max(Ju, Tu(ju)) : null,
        chunkCap: ju,
        maxHorizDistance: null !== (Ku = null === Hu || void 0 === Hu ? void 0 : Hu.horizontal) && void 0 !== Ku ? Ku : Eu.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (mu = null === Hu || void 0 === Hu ? void 0 : Hu.vertical) && void 0 !== mu ? mu : Eu.f.maxChunkVertAddDistance,
        basis: Xu
      }
    }
    let ju = null;

    function Hu() {
      return Wu({
        os: (0, Ku.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Qu.i)()
      }, (0, mu.g)(), (0, Ju.F)("wasm").length > 0)
    }

    function du() {
      return ju ??= Hu(), ju
    }

    function bu() {
      var uu;
      return (null !== (uu = ju) && void 0 !== uu ? uu : Hu()).basis
    }

    function Cu(uu, Ru) {
      return uu.setChunkCap(Ru.chunkCap)
    }
  },
  40613: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      d: () => Qu
    });
    var Eu = yu(2950),
      Ku = yu(1001);

    function Qu(uu, Ru) {
      return null !== uu.gameSource && (0, Eu.o)(Ru, uu.gameSource)
    }

    function mu(uu, Ru) {
      if (null === uu.gameSource || "" === uu.gameSource || null === Ru) return !0;
      const yu = (0, Ku.i)(Ru) ? (0, Ku.n)(Ru) : null;
      return null !== yu && Qu(uu, yu)
    }
  },
  40597: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju
    });
    var Eu = yu(599),
      Ku = yu(40603),
      Qu = yu(40559);
    async function mu(uu) {
      const Ru = await (0, Ku.h)({
        Helmet: yu(37703),
        Chestplate: yu(37705),
        Gauntlets: yu(37723),
        Leggings: yu(37714),
        Boots: yu(37720)
      } [Eu.e[uu]]);
      try {
        return (0, Qu.k)(Ru)
      } finally {
        Ru.close()
      }
    }
    const Ju = new class {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ku.l;
        this.decode = uu, this.register = Ru, this.decoded = new Map
      }
      warm() {
        for (let uu = 0; uu < Eu.e.length; uu++) this.part(uu).catch((Ru => {
          console.warn(`The grayscale armour ${Eu.e[uu]} image didn't decode ahead of use`, Ru)
        }))
      }
      async load(uu, Ru) {
        const {
          width: yu,
          height: Qu,
          pixels: mu
        } = await this.part(uu), Ju = new ImageData(function(uu, Ru) {
          const yu = new Uint8ClampedArray(uu.length);
          for (let Eu = 0; Eu < uu.length; Eu += 4) yu[Eu] = Math.round(uu[Eu] * Ru[0] / 255), yu[Eu + 1] = Math.round(uu[Eu + 1] * Ru[1] / 255), yu[Eu + 2] = Math.round(uu[Eu + 2] * Ru[2] / 255), yu[Eu + 3] = uu[Eu + 3];
          return yu
        }(mu, function(uu) {
          return [uu >>> 16 & 255, uu >>> 8 & 255, 255 & uu]
        }(Ru)), yu, Qu);
        let Nu;
        try {
          Nu = await createImageBitmap(Ju, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Xu) {
          throw new Ku.e("decode", `grayscale armour ${Eu.e[uu]}`, {
            cause: Xu
          })
        }
        return {
          id: this.register(Nu),
          width: yu,
          height: Qu
        }
      }
      part(uu) {
        const Ru = this.decoded.get(uu);
        if (void 0 !== Ru) return Ru;
        const yu = this.decode(uu).catch((Ru => {
          throw this.decoded.delete(uu), Ru instanceof Ku.e ? Ru : new Ku.e("decode", `grayscale armour ${Eu.e[uu]}`, {
            cause: Ru
          })
        }));
        return this.decoded.set(uu, yu), yu
      }
    }
  },
  40590: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      d: () => Tu,
      g: () => Vu,
      h: () => ru,
      l: () => pu
    });
    var Eu = yu(40535),
      Ku = yu(40597),
      Qu = yu(40603);
    const mu = 396,
      Ju = 1,
      Nu = 2,
      Xu = 3,
      Vu = {
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
      ru = {
        File: 0,
        Item: 1
      },
      Bu = 0,
      xu = 1,
      Su = 2;

    function pu(uu) {
      const Ru = (0, Eu.p)();
      Ru.catch((() => {}));
      let Ku = null;
      return {
        glbUrl: uu,
        lifeformAtlasUrl: async uu => (await Ru).lifeformAtlasUrl(uu),
        armourAtlasUrl: async () => (await yu.e(201).then((() => yu(34131)))).armourAtlasUrl,
        capeUrl: async uu => (await Ru).capeUrl(uu),
        attachmentImageUrl: async uu => (await Ru).attachmentImageUrl(uu),
        blockImageUrl: async uu => (await Ru).blockImageUrl(uu),
        groupAtlasUrl: async uu => (await Ru).groupAtlasUrl(uu),
        particleTextureUrl: async uu => (await Ru).particleTextureUrl(uu),
        particleItemUrl: async uu => (Ku ??= yu.e(38).then((() => yu(51462))).catch((uu => {
          throw Ku = null, uu
        })), (await Ku).particleItemUrl(uu))
      }
    }
    class Tu {
      constructor(uu, Ru) {
        var yu, mu, Ju, Nu;
        let Xu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = uu, this.onFailure = Ru, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.VS = !1, this.load = null !== (yu = Xu.load) && void 0 !== yu ? yu : (uu, Ru) => (0, Qu.i)(uu, Xu.fetchImage, Ru), this.release = null !== (mu = Xu.release) && void 0 !== mu ? mu : Qu.o, this.fetchFile = null !== (Ju = Xu.fetchFile) && void 0 !== Ju ? Ju : uu => (0, Eu.i)(uu), this.greyscaleArmour = null !== (Nu = Xu.greyscaleArmour) && void 0 !== Nu ? Nu : Ku.e
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(uu, Ru) {
        this.glbWrittenImages.set(uu, ku(Ru))
      }
      glbTaken(uu, Ru) {
        const yu = this.glbWrittenImages.get(uu);
        this.glbWrittenImages.delete(uu), Ru && this.setGlbImages(uu, void 0 !== yu && yu.length > 0 ? yu : void 0)
      }
      setGlbImages(uu, Ru) {
        var yu;
        this.glbTakenCount.set(uu, (null !== (yu = this.glbTakenCount.get(uu)) && void 0 !== yu ? yu : 0) + 1), void 0 === Ru ? this.glbImages.delete(uu) : this.glbImages.set(uu, Ru);
        const Eu = [];
        for (const {
            key: Ku
          }
          of this.loading.values()) Ku.kind === Vu.Glb && Ku.word === uu && Eu.push(Ku);
        for (let Ku = this.ready.length - 1; Ku >= 0; Ku--) {
          const {
            key: Ru,
            id: yu
          } = this.ready[Ku];
          Ru.kind === Vu.Glb && Ru.word === uu && (this.ready.splice(Ku, 1), null !== yu && (this.answered.delete(yu), this.release(yu)), Eu.push(Ru))
        }
        this.loadAgain(Eu)
      }
      onEvent(uu) {
        if (this.VS) return;
        const Ru = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
        for (let yu = 0; yu + 8 <= uu.byteLength; yu += 8) {
          const uu = Ru.getUint8(yu),
            Eu = Ru.getUint32(yu + 4, !0);
          if (uu === Xu) {
            this.answered.delete(Eu), this.release(Eu);
            continue
          }
          const Ku = {
            kind: Ru.getUint8(yu + 1),
            index: Ru.getUint8(yu + 2),
            word: Eu
          };
          uu === Ju ? this.want(Ku) : uu === Nu && this.loading.delete(Wu(Ku))
        }
      }
      reload(uu, Ru) {
        const yu = yu => uu.includes(yu.kind) && (void 0 === Ru || Ru(yu)),
          Eu = new Map;
        for (const Ku of this.answered.values()) yu(Ku) && Eu.set(Wu(Ku), Ku);
        for (const [Ku, {
            key: Qu
          }] of this.loading) yu(Qu) && Eu.set(Ku, Qu);
        this.loadAgain(Eu.values())
      }
      loadAgain(uu) {
        for (const Ru of uu) this.loading.delete(Wu(Ru)), this.want(Ru)
      }
      drain(uu) {
        if (null !== uu)
          for (; this.ready.length > 0;) {
            if (!uu(mu, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.VS = !0, this.loading.clear(), this.ready.length = 0;
        for (const uu of this.answered.keys()) this.release(uu);
        this.answered.clear()
      }
      want(uu) {
        const Ru = Wu(uu);
        if (this.loading.has(Ru)) return;
        const yu = {
          key: uu
        };
        this.loading.set(Ru, yu), this.loadKey(uu).then((Eu => {
          this.VS || this.loading.get(Ru) !== yu ? this.release(Eu.id) : (this.loading.delete(Ru), this.answered.set(Eu.id, uu), this.ready.push({
            record: Hu(uu, Bu, Eu),
            key: uu,
            id: Eu.id
          }))
        }), (Eu => {
          if (this.VS || this.loading.get(Ru) !== yu) return;
          this.loading.delete(Ru), this.onFailure({
            key: uu,
            error: Eu
          });
          const Ku = Eu instanceof Qu.e && "decode" === Eu.stage ? xu : Su;
          this.ready.push({
            record: Hu(uu, Ku, null),
            key: uu,
            id: null
          })
        }))
      }
      async loadKey(uu) {
        switch (uu.kind) {
          case Vu.Glb:
            return this.load(await this.glbImage(uu), "none");
          case Vu.LifeformAtlas:
            return this.load(ju(await this.sources.lifeformAtlasUrl(uu.word), uu), "none");
          case Vu.ArmourAtlas:
            return this.load(ju(await this.sources.armourAtlasUrl(), uu), "none");
          case Vu.Cape:
            return this.load(ju(await this.sources.capeUrl(uu.word), uu), "none");
          case Vu.AttachmentImage:
            return this.load(ju(await this.sources.attachmentImageUrl(uu.word), uu), "none");
          case Vu.GroupAtlas:
            return this.load(ju(await this.sources.groupAtlasUrl(uu.word), uu), "none");
          case Vu.BlockImage:
            return this.load(ju(await this.sources.blockImageUrl(uu.word), uu), "none");
          case Vu.Particle: {
            const Ru = await (uu.index === ru.Item ? this.sources.particleItemUrl(uu.word) : this.sources.particleTextureUrl(uu.word));
            return this.load(ju(Ru, uu), "flipY")
          }
          case Vu.GreyscaleArmour:
            return this.greyscaleArmour.load(uu.index, uu.word);
          default:
            throw new Qu.e("fetch", `image kind ${uu.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(uu) {
        var Ru;
        let yu = this.glbImages.get(uu.word);
        if (void 0 === yu) {
          const Ru = this.glbTakenCount.get(uu.word),
            Eu = ju(await this.sources.glbUrl(uu.word), uu);
          try {
            yu = ku(await this.fetchFile(Eu))
          } catch (Ku) {
            throw new Qu.e("fetch", Eu, {
              cause: Ku
            })
          }
          this.glbTakenCount.get(uu.word) === Ru && this.glbImages.set(uu.word, yu)
        }
        const Eu = null === (Ru = yu) || void 0 === Ru ? void 0 : Ru[uu.index];
        if (!Eu) throw new Qu.e("decode", `image ${uu.index} of file ${2147483647&uu.word}`, {
          cause: null
        });
        return Eu
      }
    }

    function Wu(uu) {
      let {
        kind: Ru,
        index: yu,
        word: Eu
      } = uu;
      return `${Ru}:${yu}:${Eu}`
    }

    function ju(uu, Ru) {
      if (null === uu) throw new Qu.e("fetch", `no URL for image ${Wu(Ru)}`, {
        cause: null
      });
      return uu
    }

    function Hu(uu, Ru, yu) {
      var Eu, Ku, Qu;
      const mu = new Uint8Array(16),
        Ju = new DataView(mu.buffer);
      return Ju.setUint8(0, uu.kind), Ju.setUint8(1, uu.index), Ju.setUint8(2, Ru), Ju.setUint32(4, uu.word, !0), Ju.setUint32(8, null !== (Eu = null === yu || void 0 === yu ? void 0 : yu.id) && void 0 !== Eu ? Eu : 0, !0), Ju.setUint16(12, Math.min(null !== (Ku = null === yu || void 0 === yu ? void 0 : yu.width) && void 0 !== Ku ? Ku : 0, 65535), !0), Ju.setUint16(14, Math.min(null !== (Qu = null === yu || void 0 === yu ? void 0 : yu.height) && void 0 !== Qu ? Qu : 0, 65535), !0), mu
    }
    const du = 1179937895,
      bu = 1313821514,
      Cu = 5130562;

    function ku(uu) {
      var Ru;
      const yu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      if (uu.byteLength < 20 || yu.getUint32(0, !0) !== du || yu.getUint32(16, !0) !== bu) return [];
      let Eu, Ku = 20 + yu.getUint32(12, !0);
      try {
        Eu = JSON.parse((new TextDecoder).decode(uu.subarray(20, Ku)))
      } catch {
        return []
      }
      for (; Ku + 8 <= uu.byteLength && yu.getUint32(Ku + 4, !0) !== Cu;) Ku += 8 + yu.getUint32(Ku, !0);
      const Qu = null !== (Ru = Eu.images) && void 0 !== Ru ? Ru : [];
      if (0 === Qu.length || Ku + 8 > uu.byteLength) return Qu.map((() => null));
      const mu = uu.subarray(Ku + 8, Math.min(uu.byteLength, Ku + 8 + yu.getUint32(Ku, !0)));
      return Qu.map((uu => {
        var Ru, yu, Ku;
        const Qu = void 0 === uu.bufferView || null === (Ru = Eu.bufferViews) || void 0 === Ru ? void 0 : Ru[uu.bufferView];
        if (!Qu || 0 !== (null !== (yu = Qu.buffer) && void 0 !== yu ? yu : 0) || void 0 === Qu.byteLength) return null;
        const Ju = null !== (Ku = Qu.byteOffset) && void 0 !== Ku ? Ku : 0,
          Nu = Ju + Qu.byteLength;
        return Nu <= mu.byteLength ? mu.slice(Ju, Nu) : null
      }))
    }
  },
  40243: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      i: () => Qu,
      k: () => Ku
    });
    let Eu = null;

    function Ku(uu) {
      Eu = uu
    }

    function Qu(uu) {
      Eu === uu && (Eu = null)
    }

    function mu() {
      var uu;
      null === (uu = Eu) || void 0 === uu || uu()
    }
  },
  36431: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Vu,
      g: () => Bu,
      k: () => Wu,
      m: () => Xu
    });
    var Eu = yu(27),
      Ku = yu(2306),
      Qu = yu(2312),
      mu = yu(2320),
      Ju = yu(2368),
      Nu = yu(34);

    function Xu(uu, Ru) {
      return (!(0, mu.b)() || 0 === uu && 0 === Ru) && (0, Qu.D)(Ku.f.Joystick, 0, uu, Ru, 0)
    }
    const Vu = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function ru(uu) {
      return uu.classList.contains("TouchKeyHit") && xu() ? null : uu.firstElementChild
    }

    function Bu(uu) {
      return uu.classList.contains("TouchKeyHit") && !uu.classList.contains("CanvasZone") ? {
        whole: !xu(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Su(ru(uu))
      }
    }

    function xu() {
      return document.documentElement.classList.contains(Ju.k)
    }

    function Su(uu) {
      return !(uu instanceof HTMLElement) || uu.offsetWidth <= 0 || uu.offsetHeight <= 0 ? null : {
        width: uu.offsetWidth,
        height: uu.offsetHeight
      }
    }

    function pu(uu, Ru) {
      const yu = uu => Math.min(65535, Math.round(4 * uu));
      return (yu(uu) | yu(Ru) << 16) >>> 0
    }

    function Tu(uu) {
      return {
        x: uu.left + uu.width / 2,
        y: uu.top + uu.height / 2,
        radius: Math.min(uu.width, uu.height) / 2
      }
    }
    const Wu = new class {
      constructor(uu) {
        this.write = uu, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Ru ? this.elements.set(uu, {
          element: Ru,
          hidden: yu
        }) : this.elements.delete(uu), this.measureOne(uu)
      }
      measure() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = uu.left, this.canvasTop = uu.top;
        for (const Ru of this.elements.keys()) this.measureOne(Ru)
      }
      hitZone(uu, Ru) {
        let yu = null,
          Eu = 1;
        for (const Ku of this.elements.keys()) {
          const Qu = this.shown(Ku);
          if (!Qu) continue;
          const {
            rect: mu,
            element: Ju
          } = Qu, Nu = Tu(mu), Xu = Math.max(0, mu.width / 2 - Nu.radius), Vu = Math.max(0, mu.height / 2 - Nu.radius), Bu = Math.max(0, Math.abs(uu - Nu.x) - Xu), xu = Math.max(0, Math.abs(Ru - Nu.y) - Vu), pu = Ju.firstElementChild;
          let Wu = Math.hypot(Bu, xu) / Nu.radius;
          const ju = Su(ru(Ju));
          ju && (Wu = Math.min(Wu, Math.max(2 * Math.abs(uu - Nu.x) / ju.width, 2 * Math.abs(Ru - Nu.y) / ju.height))), Wu < Eu && (yu = {
            code: Ku,
            element: Ju,
            key: pu,
            ...Nu
          }, Eu = Wu)
        }
        return yu
      }
      measureOne(uu) {
        const Ru = this.shown(uu);
        if (!Ru) return void this.write(Ku.f.TouchZone, uu, 0, 0, 0);
        const {
          rect: yu,
          element: Eu
        } = Ru, Qu = Tu(yu);
        this.write(Ku.f.TouchZone, uu, Qu.x - this.canvasLeft, Qu.y - this.canvasTop, pu(yu.width, yu.height));
        const mu = Su(ru(Eu));
        this.write(Ku.f.TouchZone, 256 | uu, 0, 0, mu ? pu(mu.width, mu.height) : 0)
      }
      shown(uu) {
        const Ru = this.elements.get(uu),
          yu = Eu.d.get("worldPanelHud");
        if (!Ru || Ru.hidden || "none" === yu) return null;
        const Ku = Ru.element.getBoundingClientRect();
        return Ku.width <= 0 || Ku.height <= 0 ? null : {
          rect: Ku,
          element: Ru.element
        }
      }
    }(Qu.D);
    (0, Nu.n)(Ju.e, (() => {
      Wu.measure()
    }))
  },
  40446: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu,
      e: () => Xu
    });
    var Eu = yu(40454),
      Ku = yu(38812),
      Qu = yu(36316),
      mu = yu(40393),
      Ju = yu(40433);
    const Nu = Eu.b.timeForPlayerToConnect - 1e4;
    async function Xu(uu, Ru, yu, Eu) {
      let Nu;
      try {
        Nu = await uu.getTrafficCode()
      } catch (Su) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", Su), new Ju.v(Su)
      }
      const {
        gameNameWithVariation: Xu,
        lobbyName: Vu
      } = Ru, ru = () => {
        const Ru = (0, Qu.c)(uu, Xu, Vu, Nu, (uu => {
          var Ru;
          return null !== (Ru = null === yu || void 0 === yu ? void 0 : yu.isUsingCustomGameTexturePack(uu)) && void 0 !== Ru && Ru
        }));
        Ru.joinOptions.wasmClient = !0;
        const Ku = (0, mu.E)();
        return null !== Ku && (Ru.joinOptions.renderBackend = Ku), Ru.joinOptions.joinAdHold = Eu, Ru
      }, {
        roomName: Bu,
        joinOptions: xu
      } = ru();
      return {
        endpoint: Ru.endpoint,
        roomName: Bu,
        joinOptions: xu,
        session: {
          gameNameWithVariation: Xu,
          lobbyName: Vu,
          playerDbId: uu.whamm
        },
        optionsAfterRefusal: async Ru => await (0, Ku.c)(uu, Ru) ? ru().joinOptions : null
      }
    }
  },
  4827: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      f: () => mu
    });
    var Eu = yu(2950),
      Ku = yu(4836);
    let Qu = null;

    function mu(uu, Ru) {
      Qu = {
        pack: uu.metaData.id === Eu.e ? null : uu,
        prompt: Ru
      }
    }

    function Ju(uu, Ru) {
      const yu = Qu;
      null !== yu && (0, Ku.e)(yu.pack, uu) && (Qu = null, Ru && yu.prompt())
    }
  },
  40605: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Vu,
      f: () => Qu,
      g: () => ru,
      k: () => mu
    });
    var Eu = yu(40590),
      Ku = yu(40535);
    const Qu = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(uu) {
        this.change((() => {
          this.page = uu
        }))
      }
      setSessionFiles(uu) {
        const Ru = void 0 !== this.session && void 0 === uu;
        if (this.change((() => {
            this.session = uu
          })), Ru)
          for (const yu of [...this.pageListeners]) yu()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(uu) {
        return this.pageListeners.add(uu), () => {
          this.pageListeners.delete(uu)
        }
      }
      setFollower(uu) {
        this.follower = uu, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const uu of [...this.wantedListeners]) uu();
        this.startFollower()
      }
      onWanted(uu) {
        return this.wantedListeners.add(uu), () => {
          this.wantedListeners.delete(uu)
        }
      }
      onChange(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      startFollower() {
        const uu = this.follower;
        this.isWanted && null !== uu && (this.follower = null, uu((() => {
          this.follower = uu
        })))
      }
      change(uu) {
        const Ru = this.current;
        if (uu(), this.current !== Ru)
          for (const yu of this.listeners) yu()
      }
    };

    function mu(uu, Ru) {
      return {
        ...uu,
        armourAtlasUrl: () => {
          var yu, Eu;
          return null !== (yu = null === (Eu = Ru()) || void 0 === Eu ? void 0 : Eu.armourAtlasUrl()) && void 0 !== yu ? yu : uu.armourAtlasUrl()
        },
        lifeformAtlasUrl: yu => Nu(Ru(), (uu => uu.LIFEFORM_ATLAS_PATHS[yu]), (() => uu.lifeformAtlasUrl(yu))),
        groupAtlasUrl: yu => Nu(Ru(), (uu => uu.GROUP_ATLAS_PATHS[yu]), (() => uu.groupAtlasUrl(yu))),
        particleItemUrl: Eu => Xu(Ru(), (async () => {
          const uu = await yu.e(38).then((() => yu(51462))).catch((() => null));
          return (null === uu || void 0 === uu ? void 0 : uu.particleItemSprite(Eu)) || null
        }), (() => uu.particleItemUrl(Eu))),
        blockImageUrl: yu => Xu(Ru(), (async () => {
          var uu, Ru;
          return null !== (uu = null === (Ru = await Ju()) || void 0 === Ru ? void 0 : Ru.blockImageName(yu)) && void 0 !== uu ? uu : null
        }), (() => uu.blockImageUrl(yu)))
      }
    }

    function Ju() {
      return (0, Ku.p)().catch((() => null))
    }

    function Nu(uu, Ru, yu) {
      return Xu(uu, (async () => {
        var uu;
        const yu = await Ju(),
          Eu = null === yu ? null : Ru(yu),
          Ku = null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu.slice(Eu.lastIndexOf("/") + 1)) && void 0 !== uu ? uu : null;
        return "Player_Atlas" === Ku ? null : Ku
      }), yu)
    }
    async function Xu(uu, Ru, yu) {
      if (null !== uu) {
        const yu = await Ru(),
          Eu = null === yu ? null : uu.textureUrl(yu);
        if (null !== Eu) return Eu
      }
      return yu()
    }
    const Vu = 0;

    function ru(uu) {
      const Ru = [Eu.g.ArmourAtlas, Eu.g.LifeformAtlas, Eu.g.GroupAtlas, Eu.g.BlockImage, Eu.g.Particle];
      uu.reload(Ru, (uu => {
        switch (uu.kind) {
          case Eu.g.Particle:
            return uu.index === Eu.h.Item;
          case Eu.g.LifeformAtlas:
            return uu.word !== Vu;
          default:
            return !0
        }
      }))
    }
  },
  40462: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      g: () => Ju,
      j: () => mu,
      k: () => Ku,
      l: () => Qu
    });
    const Eu = 1e3;

    function Ku() {
      Nu((() => {
        window.location.reload()
      }))
    }

    function Qu() {
      return new Promise((() => {}))
    }

    function mu(uu) {
      Nu((() => {
        window.location.replace(uu(window.location.href))
      }))
    }

    function Ju(uu) {
      Promise.resolve().then((() => yu(122))).then((Ru => {
        let {
          currentUrl: yu
        } = Ru;
        mu((() => yu.mergeSearchParamsInto(uu)))
      }), (() => {
        mu((() => uu))
      }))
    }

    function Nu(uu) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => yu(1661))).then((Ru => {
        let {
          prepareForUnloadWithoutConfirmation: yu
        } = Ru;
        try {
          yu()
        } catch (Eu) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Eu), window.onbeforeunload = null
        }
        uu()
      }), (() => {
        window.onbeforeunload = null, uu()
      })) : uu()
    }
  },
  4836: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return Ku(uu, Ru)
    }

    function Ku(uu, Ru) {
      if (uu === Ru) return !0;
      if ("object" !== typeof uu || "object" !== typeof Ru || null === uu || null === Ru || Array.isArray(uu) !== Array.isArray(Ru)) return !1;
      const yu = uu,
        Eu = Ru,
        Qu = Object.keys(yu);
      return Qu.length === Object.keys(Eu).length && Qu.every((uu => Object.prototype.hasOwnProperty.call(Eu, uu) && Ku(yu[uu], Eu[uu])))
    }
    yu.d(Ru, {
      e: () => Eu
    })
  },
  40505: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => ku,
      i: () => bu,
      j: () => Tu,
      k: () => pu
    });
    var Eu = yu(1731),
      Ku = yu(1739),
      Qu = yu(38808),
      mu = yu(38818),
      Ju = yu(1699),
      Nu = yu(40424),
      Xu = yu(40433);
    const Vu = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      ru = 3,
      Bu = [500, 1500];

    function xu(uu) {
      const Ru = new URL(uu);
      return {
        secure: "https:" === Ru.protocol || "wss:" === Ru.protocol,
        host: Ru.host,
        pathname: Ru.pathname.replace(/\/+$/, ""),
        search: Ru.searchParams.toString()
      }
    }

    function Su(uu, Ru, yu) {
      const {
        secure: Eu,
        host: Ku,
        pathname: Qu,
        search: mu
      } = xu(uu);
      return `${Eu?"https":"http"}://${Ku}${Qu}/matchmake/${Ru}/${encodeURIComponent(yu)}${mu?`?${mu}`:""}`
    }

    function pu(uu, Ru) {
      var yu;
      const Eu = null !== (yu = Ru.protocol) && void 0 !== yu ? yu : "ws";
      if ("ws" !== Eu) throw new Error(`seat reservation asks for the ${Eu} transport`);
      const {
        secure: Ku,
        host: Qu,
        pathname: mu,
        search: Ju
      } = xu(uu), Nu = new URLSearchParams(Ju);
      Nu.append("sessionId", Ru.sessionId), Ru.reconnectionToken && Nu.append("reconnectionToken", Ru.reconnectionToken);
      return `${Ku?"wss":"ws"}://${Ru.room.publicAddress||`${Qu}${mu}`}/${Ru.room.processId}/${Ru.room.roomId}?${Nu.toString()}`
    }
    async function Tu(uu, Ru, yu) {
      var Nu;
      let Vu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const xu = null !== (Nu = Vu.sleep) && void 0 !== Nu ? Nu : Eu.d,
        pu = new Ku.b(Vu.signal),
        Tu = new Ju.c(mu.e, (() => {
          (0, Ku.i)(pu.controller, new mu.i)
        })),
        {
          signal: du
        } = pu;
      try {
        return await (0, Qu.e)((() => async function(uu, Ru, yu, Eu) {
          var Qu;
          const {
            signal: mu,
            sleep: Ju
          } = Eu, Nu = Su(uu, "joinOrCreate", Ru), Vu = JSON.stringify(yu);
          let xu = null;
          for (let Su = 0; Su < ru; Su++) {
            var pu;
            if (Su > 0) await Ju(null !== (pu = Bu[Su - 1]) && void 0 !== pu ? pu : 1500, mu);
            let uu;
            (0, Ku.p)(mu);
            try {
              uu = await ju(Nu, Vu, Eu)
            } catch (Tu) {
              (0, Ku.p)(mu), xu = Wu(Tu);
              continue
            }
            const {
              response: Ru,
              answer: yu,
              refusal: Qu,
              lost: ru
            } = uu;
            if (null === ru) {
              if (null !== Qu) throw Hu(Qu, yu);
              if (Ru.ok && null !== yu && eu(yu)) return yu;
              xu = new Xu.s(`seat request answered HTTP ${Ru.status}${null===yu?" without JSON":" without a seat"}`, !1)
            } else xu = Wu(ru.error)
          }
          throw null !== (Qu = xu) && void 0 !== Qu ? Qu : new Xu.s("seat request made no attempt", !1)
        }(uu, Ru, yu, {
          ...Vu,
          signal: du,
          sleep: xu
        })), du, xu)
      } finally {
        Tu.stop(), pu.unfollow()
      }
    }

    function Wu(uu) {
      return new Xu.s(uu instanceof Error ? uu.message : String(uu), !0, uu)
    }
    async function ju(uu, Ru, yu) {
      var Eu;
      const {
        signal: Qu
      } = yu, mu = null !== (Eu = yu.fetch) && void 0 !== Eu ? Eu : fetch, Ju = await mu(uu, {
        method: "POST",
        headers: {
          ...Vu,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: Ru,
        credentials: "include",
        signal: Qu
      }), {
        answer: Nu,
        lost: Xu
      } = await async function(uu) {
        try {
          const Ru = await uu.json();
          return {
            answer: "object" === typeof Ru && null !== Ru ? Ru : null,
            lost: null
          }
        } catch (Ru) {
          return {
            answer: null,
            lost: Ru instanceof SyntaxError ? null : {
              error: Ru
            }
          }
        }
      }(Ju), ru = null !== Nu && "string" === typeof Nu.error ? Nu.error : null;
      var Bu;
      null !== ru && (null === (Bu = yu.onRefusal) || void 0 === Bu || Bu.call(yu));
      return (0, Ku.p)(Qu), {
        response: Ju,
        answer: Nu,
        refusal: ru,
        lost: Xu
      }
    }

    function Hu(uu, Ru) {
      return new Xu.l(uu, "number" === typeof(null === Ru || void 0 === Ru ? void 0 : Ru.code) ? Ru.code : 0, (0, Nu.r)(uu).text)
    }
    class du extends Error {
      constructor(uu, Ru) {
        super(uu), this.code = Ru, this.name = "SeatHttpError"
      }
    }
    async function bu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Ku,
        answer: Qu,
        refusal: mu,
        lost: Ju
      } = await ju(Su(uu, "reconnect", Ru), JSON.stringify({
        reconnectionToken: yu
      }), Eu);
      if (null !== Ju) throw Ju.error;
      if (!Ku.ok) {
        const uu = null !== Qu && "number" === typeof Qu.code && 0 !== Qu.code ? Qu.code : Ku.status;
        throw new du(`the seat's reconnect was refused: ${null!==mu&&void 0!==mu?mu:`HTTP ${Ku.status}`}`, uu)
      }
      if (null !== mu) throw Hu(mu, Qu);
      if (null === Qu || !eu(Qu)) throw new Error("the seat's reconnect answered " + (null === Qu ? "without JSON" : "without a seat"));
      return {
        ...Qu,
        reconnectionToken: yu
      }
    }
    const Cu = 10;

    function ku(uu) {
      if (uu.byteLength < 2 || uu[0] !== Cu) return null;
      const Ru = 2 + uu[1];
      return Ru > uu.byteLength ? null : (new TextDecoder).decode(uu.subarray(2, Ru))
    }

    function eu(uu) {
      const Ru = uu.room;
      return "string" === typeof uu.sessionId && "object" === typeof Ru && null !== Ru && "string" === typeof Ru.roomId && "string" === typeof Ru.processId && "string" === typeof Ru.name
    }
  },
  40177: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => du,
      C: () => bu,
      E: () => Tu,
      H: () => Du,
      L: () => nu,
      N: () => Su,
      R: () => tu,
      T: () => ju,
      U: () => Wu,
      V: () => Hu,
      W: () => Cu,
      d: () => Ku,
      e: () => su,
      g: () => Uu,
      i: () => xu,
      l: () => pu,
      n: () => Iu,
      p: () => eu,
      q: () => Mu,
      r: () => Au,
      v: () => ku,
      x: () => Gu
    });
    var Eu = yu(2772);
    const Ku = {
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

    function Qu(uu, Ru) {
      return !ArrayBuffer.isView(uu) || uu instanceof DataView ? Array.isArray(uu) ? uu.map((uu => Ru(uu))) : uu : Array.from(uu, (uu => Ru(uu)))
    }

    function mu(uu) {
      if ("string" !== typeof uu) return uu;
      for (let Ru = 0; Ru < uu.length; Ru++) {
        const yu = uu.charCodeAt(Ru);
        if (yu >= 55296 && yu <= 57343) return Nu.decode(Ju.encode(uu))
      }
      return uu
    }
    const Ju = new TextEncoder,
      Nu = new TextDecoder;

    function Xu(uu) {
      return uu
    }
    let Vu;

    function ru(uu) {
      return null === uu || "object" !== typeof uu ? uu : [mu(uu.vQ), mu(uu.aQ)]
    }

    function Bu(uu) {
      return null === uu || "object" !== typeof uu ? uu : [Qu(uu.zQ, Xu), Qu(uu.SX, Xu)]
    }

    function xu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.Dm), mu(Ru.Mm)];
      var Ru
    }

    function Su(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Ru.id, Ru.Jm];
      var Ru
    }

    function pu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Ru.WR, mu(Ru.jR), Ru.HR, mu(Ru.CR), Ru.DR, Ru.MR, Ru.Cm, mu(Ru.km), mu(Ru.Am)];
      var Ru
    }

    function Tu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Qu(Ru.RV, Xu), Ru.yV];
      var Ru
    }

    function Wu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Qu(Ru.SJ, (uu => mu(uu))), mu(Ru.pJ), Ru.TJ];
      var Ru
    }

    function ju(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Qu(Ru.Nm, Xu), mu(Ru.Xm), Ru.Vm];
      var Ru
    }

    function Hu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.Py), mu(Ru.iy)];
      var Ru
    }

    function du(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.NJ)];
      var Ru
    }

    function bu(uu) {
      return mu(uu)
    }

    function Cu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.IV), mu(Ru.GV), mu(Ru.vQ), mu(Ru.aQ)];
      var Ru
    }

    function ku(uu) {
      return ru(uu)
    }

    function eu(uu) {
      return ru(uu)
    }

    function Au(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.Im)];
      var Ru
    }

    function Du(uu) {
      return uu
    }

    function Mu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.Rm), mu(Ru.ym)];
      var Ru
    }

    function Iu(uu) {
      return mu(uu)
    }

    function Gu(uu) {
      return Bu(uu)
    }

    function Uu(uu) {
      return Bu(uu)
    }

    function nu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.BJ)];
      var Ru
    }

    function su(uu) {
      return (Vu ??= (0, Eu.f)().map((uu => uu.name)), Vu).map((Ru => {
        return "string" === typeof(yu = uu[Ru]) ? mu(yu) : Qu(yu, Xu);
        var yu
      }))
    }

    function tu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Ru.dJ, Ru.bJ, Ru.CJ];
      var Ru
    }
  },
  40607: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(40613),
      Ku = yu(40605);
    const Qu = new class {
      constructor(uu) {
        this.pack = uu, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, uu.onWanted((() => {
          this.release()
        }))
      }
      setGame(uu) {
        if (void 0 === uu && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const Ru = this.inGame();
        if (this.game = uu, this.update(), this.inGame() !== Ru)
          for (const yu of this.gameListeners) yu()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(uu) {
        return this.gameListeners.add(uu), () => {
          this.gameListeners.delete(uu)
        }
      }
      unwantedLeave(uu) {
        uu && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(uu) {
        null !== uu && uu === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const uu = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, uu && this.setGame(void 0)
      }
      setSettled(uu) {
        this.settle = uu, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Eu.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Ku.f)
  },
  40418: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      followPageUiPack: () => MX,
      packForGame: () => DX,
      playWasmGame: () => FX,
      prefetchWasmPreviews: () => FJ,
      setGamePackConfirm: () => oN,
      startWasmPlay: () => sX,
      startWasmPreviews: () => zJ
    });
    var Eu = yu(212),
      Ku = yu(1217),
      Qu = yu(174),
      mu = yu(38836),
      Ju = yu(1855),
      Nu = yu(34),
      Xu = yu(4461),
      Vu = yu(1269),
      ru = yu(1652),
      Bu = yu(1280),
      xu = yu(38984),
      Su = yu(38994),
      pu = yu(38906),
      Tu = yu(36322),
      Wu = yu(38808),
      ju = yu(8652),
      Hu = yu(38818),
      du = yu(40256),
      bu = yu(4549),
      Cu = yu(40173),
      ku = yu(40241),
      eu = yu(40177);
    const Au = {
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
        setBlockHighlight: !0
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

    function Du(uu) {
      const Ru = {
        ...ku.b[uu]
      };
      for (const yu of Object.keys(Au[uu])) delete Ru[yu];
      return Ru
    }

    function Mu() {
      var uu, Ru;
      return null === (uu = null === (Ru = (0, Cu.i)()) || void 0 === Ru ? void 0 : Ru.localPlayerAlive()) || void 0 === uu || uu
    }

    function Iu() {
      var uu, Ru;
      return null !== (uu = null === (Ru = (0, Cu.i)()) || void 0 === Ru ? void 0 : Ru.localDeaths()) && void 0 !== uu ? uu : null
    }
    const Gu = {
        current: Mu,
        watch: uu => {
          let Ru = Mu(),
            yu = Iu();
          return (0, bu.y)((() => {
            const Eu = Mu(),
              Ku = Iu(),
              Qu = null !== Ku && null !== yu && Ku !== yu;
            yu = Ku, Qu ? (Ru || uu(!0), uu(!1), Eu && uu(!0), Ru = Eu) : Eu !== Ru && (Ru = Eu, uu(Eu))
          }))
        }
      },
      Uu = {
        states: {
          ...Du("states"),
          localPlayerAlive: Gu
        },
        events: {
          ...Du("events"),
          localPlayerAliveSet: {
            watch: Gu.watch
          }
        },
        commands: {
          ...Du("commands"),
          respawn: () => {
            var uu;
            null === (uu = (0, Cu.i)()) || void 0 === uu || uu.respawn()
          },
          playEmote: uu => {
            var Ru;
            null === (Ru = (0, Cu.i)()) || void 0 === Ru || Ru.send(eu.d.PlayEmote, (0, eu.A)({
              NJ: uu
            }))
          },
          applyTemporaryThirdPerson: uu => {
            var Ru;
            let {
              durationMs: yu
            } = uu;
            null === (Ru = (0, Cu.i)()) || void 0 === Ru || Ru.thirdPersonFor(yu)
          },
          bindCustomButtonKeys: uu => {
            var Ru;
            null === (Ru = (0, Cu.i)()) || void 0 === Ru || Ru.bindCustomButtonKeys(uu)
          },
          pressCustomButton: uu => {
            var Ru;
            let {
              id: yu,
              down: Eu
            } = uu;
            null === (Ru = (0, Cu.i)()) || void 0 === Ru || Ru.pressCustomButton(yu, Eu)
          },
          setLookSensitivity: () => {},
          wakeUp: uu => {
            const Ru = (0, eu.L)({
                BJ: uu
              }),
              yu = () => {
                const uu = (0, Cu.i)();
                return !(null !== uu && void 0 !== uu && uu.isSessionLive) || uu.send(eu.d.StopSleeping, Ru)
              };
            if (!yu()) {
              const uu = (0, bu.y)((() => {
                yu() && uu()
              }))
            }
          },
          setCameraZoom: uu => {
            var Ru;
            null === (Ru = (0, Cu.i)()) || void 0 === Ru || Ru.setCameraZoom(uu)
          }
        },
        queries: Du("queries"),
        lookups: {
          ...Du("lookups"),
          cameraZoom: () => {
            var uu, Ru;
            return null !== (uu = null === (Ru = (0, Cu.i)()) || void 0 === Ru ? void 0 : Ru.cameraZoom()) && void 0 !== uu ? uu : 0
          }
        }
      };
    var nu = yu(40424),
      su = yu(40433),
      tu = yu(40440),
      lu = yu(40446),
      gu = yu(1228),
      cu = yu(122),
      Lu = yu(4291),
      zu = yu(3538),
      Fu = yu(1136);
    const wu = {
      uV: () => (0, gu.b)(),
      inbuiltOverwritten: () => Lu.c,
      reflectApplyHit: () => Fu.b,
      definerHit: () => cu.currentUrl.c,
      emitReplaced: () => (0, Nu.d)(),
      confirmMesh: () => (0, zu.e)()
    };
    var Zu = yu(40442),
      hu = yu(40462);
    var Pu = yu(27),
      iu = yu(1862),
      Yu = yu(1915),
      ou = yu(1587),
      qu = yu(1955),
      Ou = yu(1170),
      vu = yu(1224),
      au = yu(40410);

    function fu() {
      return vu.f.get().getCurrentLanguageCode()
    }

    function uR(uu) {
      const Ru = () => {
        uu({
          translate: (uu, Ru) => (0, Ou.s)(fu(), uu, Ru),
          keyBindingText: uu => {
            const Ru = (0, Yu.v)(uu, Pu.d.get("isTouchScreen"));
            return null !== Ru ? (0, Ou.w)(fu(), Ru.translationKey, Ru.params) : (0, Yu.o)((0, Yu.r)(uu))
          },
          isFriend: qu.d,
          hiddenNames: iu.d.shown,
          loadsFontRest: (0, au.c)(fu())
        })
      };
      let yu = !1;
      const Eu = () => {
          const uu = fu();
          (0, Ou.m)(uu).then((() => {
            yu || uu !== fu() || Ru()
          }))
        },
        Ku = () => ou.c.getSocialState().friends.map((uu => uu.name.toLowerCase())).sort().join(" ");
      let Qu = Ku();
      Ru(), Eu();
      const mu = [(0, vu.h)((() => {
        Ru(), Eu()
      })), (0, Nu.n)("customBindingsChanged", Ru), (0, Nu.n)("appManagerUpdated|isTouchScreen", Ru), (0, qu.b)((() => {
        const uu = Ku();
        uu !== Qu && (Qu = uu, Ru())
      })), iu.d.subscribe(Ru)];
      return () => {
        yu = !0;
        for (const uu of mu) uu()
      }
    }
    var RR = yu(614),
      yR = yu(1001),
      ER = yu(1887),
      KR = yu(330),
      QR = yu(3510),
      mR = yu(36199),
      JR = yu(3514),
      NR = yu(38496),
      XR = yu(4470),
      VR = yu(40341),
      rR = yu(624),
      BR = yu(673),
      xR = yu(680),
      SR = yu(1878),
      pR = yu(3543),
      TR = yu(3088);
    let WR = null;
    var jR = yu(1176),
      HR = yu(1739),
      dR = yu(4187),
      bR = yu(3252),
      CR = yu(60),
      kR = yu(325),
      eR = yu(305),
      AR = yu(40286),
      DR = yu(4558);
    var MR = yu(40470);
    class IR {
      constructor(uu, Ru) {
        this.showView = uu, this.holdForAd = Ru
      }
      pointerUnlockRequestsChanged() {
        (0, AR.v)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, AR.m)())
        }]
      }
      setGameViewShown(uu) {
        this.showView(uu)
      }
      setGameView(uu) {
        (0, MR.m)(uu)
      }
      videoAdHold(uu, Ru) {
        this.holdForAd(uu, Ru)
      }
    }
    class GR {
      leave(uu) {
        ! function(uu) {
          if (null !== (0, Bu.c)().websocketUrl) try {
            (0, bu.I)().leaveGame(uu)
          } finally {
            (0, Bu.n)({
              websocketUrl: null
            })
          }
        }(uu)
      }
      isReplay() {
        return !1
      }
    }
    class UR {
      watchFrameStarts(uu) {
        return (0, bu.r)(uu)
      }
      watchFrames(uu) {
        return (0, bu.o)(uu)
      }
      watchTicks(uu) {
        return (0, bu.y)(uu)
      }
    }
    var nR = yu(1257),
      sR = yu(40472);

    function tR(uu) {
      return uu >= 0 ? Math.min(1, uu) : 0
    }

    function lR(uu, Ru) {
      const {
        fade: yu
      } = uu;
      return null === yu || Ru - yu.at >= yu.ms ? uu.volume : yu.from + (uu.volume - yu.from) * Math.max(0, (Ru - yu.at) / yu.ms)
    }

    function gR(uu) {
      const Ru = Object.entries(uu),
        yu = new Uint32Array(Ru.length);
      let Eu = 0;
      for (const [mu, [, Ju]] of Ru.entries()) yu[mu] = Ju.length, Eu += Ju.length;
      const Ku = new Float64Array(3 * Eu);
      let Qu = 0;
      for (const [, mu] of Ru)
        for (const uu of mu) Ku.set(uu, Qu), Qu += 3;
      return {
        blocks: Ru.map((uu => {
          let [Ru] = uu;
          return Ru
        })).join("\0"),
        counts: yu,
        values: Ku
      }
    }
    class cR {
      constructor(uu, Ru) {
        this.core = uu, this.warn = Ru, this.latest = 0
      }
      async feed() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LR;
        const Ru = ++this.latest;
        let yu;
        try {
          yu = await uu()
        } catch (Eu) {
          return void(this.core.isStopped || Ru !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Eu))
        }
        Ru === this.latest && (this.core.setBlockColours(yu) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function LR() {
      return gR((await yu.e(201).then((() => yu(34131)))).averageColors)
    }
    var zR = yu(4562),
      FR = yu(4564),
      wR = yu(40223),
      ZR = yu(36170),
      hR = yu(40401),
      PR = yu(602),
      iR = yu(36797),
      YR = yu(599),
      oR = yu(343),
      qR = yu(40371);
    const OR = [3e4, 12e4, 3e5];
    class vR extends Error {}
    const aR = {
      mobTypes: PR.k,
      vehicleTypes: iR.e,
      mobAiStates: PR.h,
      playerPoses: YR.q
    };
    var fR = yu(40361),
      uy = yu(40480),
      Ry = yu(40492),
      yy = yu(40499),
      Ey = yu(3273),
      Ky = yu(38797),
      Qy = yu(4586),
      my = yu(2306);
    const Jy = my.t.KeysDisabled | my.t.LookFrozen | my.t.ClicksSuppressed,
      Ny = Ey.f;
    var Xy = (0, yy.b)("resumingConn");
    class Vy {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = uu, this.now = Ru, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Xy, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Ky.b({
          reconnect: uu => this.reconnect(uu),
          isLive: () => uu.isLive(),
          onReconnected: Ru => {
            this.landed = Ru, uu.onReconnected(Ru), this.landIfResumed()
          },
          onGaveUp: (Ru, yu) => {
            this.abortAttempt(), uu.onGaveUp(Ru, yu)
          },
          freeze: Ru => {
            uu.Dk(Ru), (0, Qy.h)(Jy, Ru ? Jy : 0, "reconnectFreeze")
          },
          releaseSeat: uu => {
            this.releaseSeat(uu)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Ry.e)(this, Xy)[Xy]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(uu) {
        let {
          conn: Ru,
          graceMs: yu,
          sessionBased: Eu,
          replayOffer: Ku
        } = uu;
        this.session.onInitialInfo(yu, Eu), this.isResuming() && (this.initialInfoConn = Ru, this.initialInfoOffer = Ku, this.landIfResumed())
      }
      onResumeComplete(uu) {
        0 !== uu && (uu === (0, Ry.e)(this, Xy)[Xy] ? ((0, Ry.e)(this, Xy)[Xy] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = uu))
      }
      onDropped(uu) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Ry.e)(this, Xy)[Xy] = 0, this.session.onConnectionLost(uu)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Ry.e)(this, Xy)[Xy] = 0, this.session.end()
      }
      reconnect(uu) {
        const Ru = this.attempt;
        if (null !== Ru && this.awaitingJoinRoom(Ru)) return Ru.result;
        this.abortAttempt();
        const yu = new AbortController,
          Eu = this.drops,
          Ku = {
            attachedAt: null
          },
          Qu = this.shell.reconnect(uu, yu.signal, (() => {
            Ku.attachedAt = this.now()
          })).then((uu => {
            if (this.clearAttempt(mu), this.drops !== Eu) throw new Error("the resumed room dropped before its attempt settled");
            return uu
          }), (uu => {
            throw this.clearAttempt(mu), uu
          })),
          mu = {
            abort: yu,
            socket: Ku,
            result: Qu
          };
        return this.attempt = mu, Qu
      }
      clearAttempt(uu) {
        this.attempt === uu && (this.attempt = null)
      }
      abortAttempt() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const Ru = this.attempt;
        this.attempt = null, null === Ru || void 0 === Ru || Ru.abort.abort(uu)
      }
      awaitingJoinRoom(uu) {
        const Ru = uu.socket.attachedAt;
        return null !== Ru && this.now() - Ru < Ny
      }
      releaseSeat(uu) {
        const Ru = this.attempt,
          yu = null !== Ru && this.awaitingJoinRoom(Ru);
        this.abortAttempt(new su.o), yu || this.shell.releaseSeat(uu)
      }
      landIfResumed() {
        const uu = this.landed;
        if (null !== uu && uu.conn === this.initialInfoConn) {
          const Ru = this.initialInfoOffer && this.completedEarlyConn !== uu.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !Ru) return void this.session.onResumed();
          (0, Ry.e)(this, Xy)[Xy] = uu.conn, this.session.onResuming()
        }
      }
    }
    var ry = yu(38802),
      By = yu(40505),
      xy = yu(36328),
      Sy = yu(36324),
      py = yu(4827),
      Ty = yu(4179),
      Wy = yu(3077),
      jy = yu(40302),
      Hy = yu(629),
      dy = yu(4263),
      by = yu(47),
      Cy = yu(40513),
      ky = yu(40553),
      ey = yu(4204),
      Ay = yu(2312),
      Dy = yu(1583),
      My = yu(1611),
      Iy = yu(1250),
      Gy = yu(125),
      Uy = yu(2677),
      ny = yu(2320),
      sy = yu(4578);
    const ty = new Set([zR.yb.KeyDown, zR.yb.MouseMove, zR.yb.MouseDown, zR.yb.Wheel, zR.yb.TouchStart, zR.yb.TouchMove]);

    function ly(uu) {
      return (uu.shiftKey ? zR.Ib.Shift : 0) | (uu.ctrlKey ? zR.Ib.Ctrl : 0) | (uu.altKey ? zR.Ib.Alt : 0) | (uu.metaKey ? zR.Ib.Meta : 0) | ("repeat" in uu && uu.repeat ? zR.Ib.Repeat : 0) | (uu.isTrusted ? 0 : zR.Ib.Untrusted)
    }

    function gy(uu) {
      return "touchOnly" !== (0, Gy.c)() && "function" === typeof uu.requestPointerLock
    }

    function cy(uu) {
      return 0 === uu.button ? uu.altKey ? sy.j["Alt+Left Click"] : sy.j.Mouse1 : 1 === uu.button ? sy.j.Mouse2 : sy.j.Mouse3
    }
    const Ly = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      zy = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      Fy = 32768,
      wy = 1;

    function Zy(uu) {
      return Math.min(Math.max(Math.round(uu), 0), 65535)
    }

    function hy(uu, Ru, yu) {
      const Eu = [],
        Ku = (uu, Ru, yu, Ku) => {
          const Qu = uu => {
            (0, My.j)(uu) || yu(uu)
          };
          uu.addEventListener(Ru, Qu, Ku), Eu.push((() => {
            uu.removeEventListener(Ru, Qu, Ku)
          }))
        },
        Qu = {
          capture: !0,
          passive: !0
        },
        mu = (uu, yu, Eu, Ku, Qu) => (!(0, ny.b)() || !ty.has(uu)) && (Ru(uu, yu, Eu, Ku, Qu), !0),
        Ju = () => document.pointerLockElement === uu,
        Nu = (0, Uy.c)(),
        Xu = uu => {
          uu.ctrlKey && yu.ctrlCombosAreGames() && !(0, Qy.f)(uu.target) && uu.preventDefault()
        },
        Vu = (uu, Eu, Ku) => {
          yu.inspect(uu, Eu, !1), Ru(zR.yb.KeyUp, Eu, 0, 0, (0, Ay.v)(Ku, uu.timeStamp)), yu.keyReleased(Eu)
        },
        ru = new Map,
        Bu = (uu, Ru, yu) => uu[yu] || ("AltRight" === Ru || "ControlLeft" === Ru) && uu.getModifierState("AltGraph"),
        xu = new Map,
        Su = () => {
          ru.clear(), xu.clear()
        },
        pu = uu => {
          if (document.hasFocus())
            for (const [Ru, yu] of xu) xu.delete(Ru), Bu(uu, Ru, yu) || (ru.delete(Ru), Vu(uu, sy.j[Ru], ly(uu)))
        };
      uu.tabIndex = -1;
      let Tu = 0,
        Wu = 0;
      const ju = () => {
        const Ru = uu.getBoundingClientRect();
        Tu = Ru.left, Wu = Ru.top
      };
      let Hu = "mouse";
      const du = () => !Ju() && ("mouse" === Hu || !yu.touchUiShown()),
        bu = (uu, Ru, yu) => {
          const Eu = (Zy(uu.clientX - Tu) | Zy(uu.clientY - Wu) << 16) >>> 0;
          mu(zR.yb.MouseMove, zR.Kb.Point, Ru, yu, Eu)
        };
      let Cu = !1,
        ku = 0;
      const eu = () => {
        Cu && (Cu = !1, yu.viewShown() && (0, AR.N)())
      };
      Eu.push((() => {
        clearTimeout(ku)
      })), Ku(window, "keydown", (uu => {
        "Escape" === uu.key ? (0, AR.B)(!0) : uu.repeat || (0, Qy.f)(uu.target) || (Cu = !0, clearTimeout(ku), ku = window.setTimeout(eu, 0))
      }), Qu), Ku(window, "keydown", (uu => {
        eu(), Xu(uu), pu(uu);
        const Ru = sy.j[uu.code];
        if ("number" !== typeof Ru || !yu.viewShown()) return;
        const Eu = (0, Qy.f)(uu.target);
        Eu || !yu.prevents(Ru) && !Ly.has(uu.code) || uu.preventDefault(), uu.repeat || yu.inspect(uu, Ru, !0), mu(zR.yb.KeyDown, Ru, 0, 0, (0, Ay.v)(ly(uu), uu.timeStamp)) && ru.set(uu.code, Ru), Eu || yu.keyPressed(Ru)
      }), {
        capture: !1,
        passive: !1
      }), Ku(window, "keyup", (uu => {
        "Escape" === uu.key && (0, AR.B)(!1), Xu(uu), ru.delete(uu.code), xu.delete(uu.code), pu(uu);
        const Ru = sy.j[uu.code];
        "number" === typeof Ru && Vu(uu, Ru, ly(uu))
      }), {
        capture: !0,
        passive: !1
      }), Ku(window, "mousemove", (uu => {
        "mouse" === Hu && du() ? bu(uu, uu.movementX, uu.movementY) : Ju() ? mu(zR.yb.MouseMove, zR.Kb.Stamped, uu.movementX, uu.movementY, (0, Ay.v)(0, uu.timeStamp)) : mu(zR.yb.MouseMove, 0, uu.movementX, uu.movementY, 0)
      }), Qu);
      let Au = 0,
        Du = 0;
      const Mu = [];
      let Iu = !1,
        Gu = !1;
      Ku(uu, "mousedown", (uu => {
        if ((0, ny.b)()) return;
        pu(uu);
        const Eu = 1 << uu.button;
        if (!Ju() && (0, AR.L)() && (0, AR.e)() && (Gu = !0, !Iu)) return void(Au |= Eu);
        Au &= ~Eu;
        const Ku = uu.button <= 2 ? cy(uu) : void 0;
        void 0 !== Ku && (Mu[uu.button] = Ku, yu.inspect(uu, Ku, !0)), du() && bu(uu, 0, 0), Ru(zR.yb.MouseDown, uu.button, uu.clientX, uu.clientY, (0, Ay.v)(ly(uu), uu.timeStamp)), Du |= Eu, void 0 !== Ku && yu.keyPressed(Ku)
      }), Qu), Ku(window, "mouseup", (uu => {
        var Eu;
        pu(uu);
        const Ku = 1 << uu.button,
          Qu = 0 !== (Au & ~Du & Ku);
        if (Au &= ~Ku, Du &= ~Ku, Qu) return;
        const mu = uu.button <= 2 ? null !== (Eu = Mu[uu.button]) && void 0 !== Eu ? Eu : cy(uu) : void 0;
        void 0 !== mu && yu.inspect(uu, mu, !1), Ru(zR.yb.MouseUp, uu.button, uu.clientX, uu.clientY, (0, Ay.v)(ly(uu), uu.timeStamp)), void 0 !== mu && yu.keyReleased(mu)
      }), Qu), Ku(uu, "contextmenu", (uu => {
        uu.preventDefault()
      }), {
        passive: !1
      });
      const Uu = uu => {
        (Ju() || (0, AR.j)() && (0, Iy.r)()) && (uu.ctrlKey || Nu && !document.fullscreenElement) && uu.preventDefault()
      };
      Ku(uu, "wheel", (uu => {
        Uu(uu), pu(uu), mu(zR.yb.Wheel, uu.deltaMode, uu.deltaX, uu.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const nu = {
          capture: !0,
          passive: !1
        },
        su = uu => {
          uu ? window.addEventListener("wheel", Uu, nu) : window.removeEventListener("wheel", Uu, nu)
        };
      su((0, AR.j)()), Eu.push((0, AR.s)(su)), Eu.push((() => {
        su(!1)
      }));
      const tu = new Map,
        lu = new Set,
        gu = uu => {
          const Ru = "stylus" === uu.touchType;
          for (const yu of tu.values())
            if (!yu.touched && (Ru || Math.abs(uu.clientX - yu.x) <= wy && Math.abs(uu.clientY - yu.y) <= wy)) return yu.touched = !0, !0;
          return !1
        },
        cu = uu => 32767 & uu,
        Lu = new Set,
        zu = uu => yu => {
          const Eu = (0, Ay.v)(ly(yu), yu.timeStamp);
          uu !== zR.yb.TouchStart && uu !== zR.yb.TouchMove || ((uu, yu) => {
            const Eu = uu.touches;
            if (Eu)
              for (const Ku of Lu) {
                let uu = !1;
                for (let Ru = 0; Ru < Eu.length && !uu; Ru++) uu = cu(Eu[Ru].identifier) === Ku;
                uu || (Lu.delete(Ku), Ru(zR.yb.TouchCancel, Ku, 0, 0, yu))
              }
          })(yu, Eu);
          const Ku = yu.changedTouches;
          for (let Ru = 0; Ru < Ku.length; Ru++) {
            const yu = Ku[Ru];
            if (uu === zR.yb.TouchStart && gu(yu) && lu.add(yu.identifier), lu.has(yu.identifier)) {
              uu !== zR.yb.TouchEnd && uu !== zR.yb.TouchCancel || lu.delete(yu.identifier);
              continue
            }
            const Qu = cu(yu.identifier),
              Ju = mu(uu, Qu, yu.clientX - Tu, yu.clientY - Wu, Eu);
            uu === zR.yb.TouchStart ? Ju && Lu.add(Qu) : uu !== zR.yb.TouchMove && Lu.delete(Qu)
          }
        },
        Fu = zu(zR.yb.TouchStart);
      Ku(uu, "touchstart", (uu => {
        uu.preventDefault(), (0, ny.b)() || (yu.touchStarting(), Fu(uu))
      }), {
        passive: !1
      }), Ku(uu, "touchmove", zu(zR.yb.TouchMove), Qu), Ku(uu, "touchend", zu(zR.yb.TouchEnd), Qu), Ku(uu, "touchcancel", zu(zR.yb.TouchCancel), Qu);
      const wu = uu => Fy | 32767 & uu,
        Zu = (uu, Ru) => {
          mu(uu, wu(Ru.pointerId), Ru.clientX - Tu, Ru.clientY - Wu, (0, Ay.v)(ly(Ru), Ru.timeStamp))
        };
      Ku(window, "pointerdown", (Ru => {
        Hu = Ru.pointerType, "mouse" === Ru.pointerType && Ru.target !== uu && yu.viewShown() && (0, AR.O)()
      }), Qu), Ku(uu, "pointerdown", (uu => {
        "pen" === uu.pointerType && 0 === uu.button && (0, AR.j)() && (0, Iy.r)() && (uu.preventDefault(), (0, ny.b)() || (tu.set(uu.pointerId, {
          x: uu.clientX,
          y: uu.clientY,
          touched: !1
        }), yu.touchStarting(), Zu(zR.yb.TouchStart, uu)))
      }), {
        passive: !1
      }), Ku(window, "pointermove", (uu => {
        Hu = uu.pointerType, tu.has(uu.pointerId) && Zu(zR.yb.TouchMove, uu), "mouse" !== uu.pointerType && du() && bu(uu, 0, 0)
      }), Qu);
      const hu = uu => Ru => {
        tu.delete(Ru.pointerId) && Zu(uu, Ru)
      };
      Ku(window, "pointerup", hu(zR.yb.TouchEnd), Qu), Ku(window, "pointercancel", hu(zR.yb.TouchCancel), Qu);
      let Pu = 0;
      const iu = () => {
          Pu = 0, ju(), yu.resized()
        },
        Yu = () => {
          const uu = yu.sizeCanvas();
          null !== uu && Ru(zR.yb.Resize, 0, uu.cssWidth, uu.cssHeight, (0, Ay.m)(uu.renderScale)), ju(), yu.resized(), 0 === Pu && (Pu = requestAnimationFrame(iu))
        };
      Ku(window, "resize", Yu, Qu), Eu.push(yu.watchRenderScale(Yu)), Eu.push((() => {
        cancelAnimationFrame(Pu)
      })), Ku(window, "focus", (uu => {
        uu.isTrusted && (Ru(zR.yb.Focus, 0, 0, 0, 0), yu.viewShown() && (0, AR.O)())
      }), {
        passive: !0
      });
      const ou = () => {
          (0, AR.B)(!1), Au = 0
        },
        qu = () => {
          Lu.clear(), tu.clear(), lu.clear()
        };
      let Ou = 0,
        vu = 0;
      Ku(window, "blur", (Eu => {
        ou(), (0, AR.h)();
        for (const uu of ru.keys()) {
          const Ru = zy.get(uu);
          void 0 !== Ru && xu.set(uu, Ru)
        }
        Eu.isTrusted && ((uu => {
          for (const [yu, Eu] of tu) Ru(zR.yb.TouchCancel, wu(yu), Eu.x, Eu.y, (0, Ay.v)(0, uu));
          tu.clear()
        })(Eu.timeStamp), Ru(zR.yb.Blur, zR.t.KeepTouches, 0, 0, 0)), Nu && Eu.isTrusted && (clearTimeout(vu), vu = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const uu of ru.values()) Vu(Eu, uu, 0);
            Su()
          }
        }), 0)), clearTimeout(Ou), Ou = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Iy.r)() && yu.viewShown() && uu.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Eu.push((() => {
        clearTimeout(Ou), clearTimeout(vu)
      })), Ku(window, "mousedown", (Ru => {
        Nu && Ru.isTrusted && !document.hasFocus() && (0, Iy.r)() && yu.viewShown() && (window.focus(), uu.focus({
          preventScroll: !0
        }))
      }), Qu), Ku(document, "visibilitychange", (() => {
        document.hidden ? (Ru(zR.yb.Blur, 0, 0, 0, 0), qu()) : document.hasFocus() && Ru(zR.yb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Eu.push((0, ny.f)((() => {
        ou(), Ru(zR.yb.Blur, zR.t.Release, 0, 0, 0), yu.keysReleased(), Su(), Du = 0, qu(), Ru(zR.yb.Joystick, 0, 0, 0, 0), document.hasFocus() && Ru(zR.yb.Focus, 0, 0, 0, 0)
      })));
      const au = !yu.canLock(),
        fu = () => au && !(0, AR.j)() ? zR.bc.Lockless : zR.bc.Released,
        uR = () => {
          Ju() && (Iu = !1, Gu = !1), Ru(zR.yb.PointerLock, Ju() ? zR.bc.Locked : fu(), 0, 0, 0), (0, AR.I)(Ju())
        };
      return Ku(document, "pointerlockchange", uR, {
        passive: !0
      }), Ku(document, "pointerlockerror", (() => {
        Iu ||= Gu, Gu = !1, (0, AR.p)()
      }), {
        passive: !0
      }), au && Eu.push((0, AR.s)((() => {
        Ru(zR.yb.PointerLock, fu(), 0, 0, 0)
      }))), Yu(), Ru(document.hasFocus() ? zR.yb.Focus : zR.yb.Blur, 0, 0, 0, 0), uR(), () => {
        for (const uu of Eu.splice(0)) uu()
      }
    }
    var Py = yu(8984),
      iy = yu(8973),
      Yy = yu(1920);
    const oy = new Map(sy.b.map(((uu, Ru) => [uu, Ru]))),
      qy = ["jump", "primary-fire", "alt-fire"],
      Oy = ["primary-fire", "alt-fire"];

    function vy(uu) {
      return `${Yy.d}${uu}`
    }
    const ay = ["forward", "backward", "left", "right", "sprint", "jump"];

    function fy(uu) {
      const Ru = [];
      for (const yu of uu) {
        const uu = "string" === typeof yu ? sy.j[yu] : void 0;
        "number" === typeof uu && Ru.push(uu)
      }
      return Ru
    }
    class uE {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [uu, Ru] of Object.entries(sy.e)) this.keys.set(uu, Ru);
        this.updateKeySets()
      }
      prevents(uu) {
        return this.preventKeys.has(uu)
      }
      moves(uu) {
        return this.movementKeys.has(uu)
      }
      checks(uu, Ru) {
        return (Ru ? this.checkedDown : this.checkedUp).has(uu)
      }
      sync(uu, Ru) {
        for (const [yu, Eu] of this.keys) {
          const Ku = uu(vy(yu)),
            Qu = Array.isArray(Ku) ? fy(Ku) : sy.e[yu];
          (Qu.length !== Eu.length || Qu.some(((uu, Ru) => uu !== Eu[Ru]))) && this.bind(yu, Qu, Ru)
        }
      }
      bind(uu, Ru, yu) {
        const Eu = oy.get(uu);
        if (void 0 !== Eu) {
          yu(zR.yb.Binding, 0, 0, 0, Eu | zR.p.Clear << 8);
          for (const Qu of [...Ru, ...null !== (Ku = sy.f[uu]) && void 0 !== Ku ? Ku : []]) {
            var Ku;
            yu(zR.yb.Binding, Qu, 0, 0, Eu | zR.p.Add << 8)
          }
          this.keys.set(uu, Ru), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Eu of sy.k)
          for (const Ru of null !== (uu = this.keys.get(sy.b[Eu])) && void 0 !== uu ? uu : []) {
            var uu;
            this.preventKeys.add(Ru)
          }
        this.movementKeys.clear();
        for (const Eu of ay)
          for (const uu of null !== (Ru = this.keys.get(Eu)) && void 0 !== Ru ? Ru : []) {
            var Ru;
            this.movementKeys.add(uu)
          }
        for (const [Eu, Ku] of [
            [this.checkedDown, qy],
            [this.checkedUp, Oy]
          ]) {
          Eu.clear();
          for (const uu of Ku)
            for (const Ru of null !== (yu = this.keys.get(uu)) && void 0 !== yu ? yu : []) {
              var yu;
              Eu.add(Ru)
            }
        }
      }
    }
    var RE = yu(4573),
      yE = yu(36431);
    const EE = "[bloxd-wasm-client]";

    function KE() {
      return "inGame" === Pu.d.get("gameState") && !(0, Dy.t)()
    }
    let QE = null;

    function mE(uu, Ru) {
      QE && Ru.writePendingInput() && QE.push(function(uu, Ru) {
        let yu = "";
        for (const Eu of Ru) yu += Eu.toString(16).padStart(2, "0");
        return yu ? `${uu} ${yu}` : String(uu)
      }(uu, Ru.rings.input.written()))
    }
    const JE = [];

    function NE(uu, Ru, yu, Eu) {
      uu === zR.ab.InputAction && Eu === zR.ub && JE.push(Ru.getUint32(yu, !0))
    }
    var XE = yu(40578),
      VE = yu(1173),
      rE = yu(36615);
    const BE = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: VE.wasmScreens
    };

    function xE(uu) {
      var Ru, yu;
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Ku, Qu] = uu.split(":");
      return (null !== (Ru = null === (yu = BE[Ku]) || void 0 === yu ? void 0 : yu[Qu]) && void 0 !== Ru ? Ru : uu).replace(/\{\{(\w+)\}\}/g, ((uu, Ru) => {
        var yu;
        return null !== (yu = Eu[Ru]) && void 0 !== yu ? yu : uu
      }))
    }

    function SE(uu, Ru) {
      (0, ey.c)();
      const yu = document.createElement("div");
      yu.setAttribute("role", "alertdialog"), yu.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Eu = document.createElement("div");
      Eu.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Ku = document.createElement("h2");
      Ku.textContent = xE(uu.title);
      const Qu = document.createElement("p");
      if (Qu.textContent = xE(uu.help, uu.helpValues), Qu.style.whiteSpace = "pre-line", Eu.append(Ku, Qu), uu.discordLink) {
        const uu = document.createElement("a");
        uu.href = rE.c, uu.target = "_blank", uu.rel = "noreferrer", uu.style.color = "#8ab4ff", uu.textContent = xE("wasmScreens:reportOnDiscord"), Eu.append(uu)
      }
      const mu = document.createElement("div");
      return mu.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Eu.append(mu), yu.append(Eu), document.body.append(yu), new Promise((Eu => {
        const Ku = uu => {
            null === Ru || void 0 === Ru || Ru.removeEventListener("abort", Qu), yu.remove(), Eu(uu)
          },
          Qu = () => {
            Ku(!1)
          };
        null === Ru || void 0 === Ru || Ru.addEventListener("abort", Qu, {
          once: !0
        });
        const Ju = (uu, Ru) => {
          const yu = document.createElement("button");
          yu.textContent = xE(uu), yu.style.cssText = "padding:0.5rem 1.25rem;font:inherit", yu.addEventListener("click", (() => {
            Ku(Ru)
          })), mu.append(yu)
        };
        null !== uu.cancel && Ju(uu.cancel, !1), Ju(uu.confirm, !0)
      }))
    }
    var pE = yu(40384);
    const TE = 6e4,
      WE = 3e5;
    var jE = yu(3462);
    var HE = yu(40292),
      dE = yu(631),
      bE = yu(13);

    function CE(uu, Ru) {
      const yu = bE.ab.encode(Ru);
      ! function(uu, Ru) {
        let yu = Ru >= 0 ? 2 * Ru : 2 * -Ru - 1;
        for (; yu >= 128;) uu.push(yu % 128 | 128), yu = Math.floor(yu / 128);
        uu.push(yu)
      }(uu, yu.length);
      for (const Eu of yu) uu.push(Eu)
    }
    let kE, eE, AE;
    (() => {
      const uu = [0, "t", "resolv", "e", "then", "length", 1, "a", "postCo", "okies", "b", 235, 3, 5, 2, 217, void 0, !1, !0, 33554432, 67108864, "d", 161, "f", "g", "c", null, 212, 10];

      function Ru() {}
      const Eu = (0, bE[uu[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Ku = (0, bE[uu[1]])("QkFCWUxPTg=="),
        Qu = (0, bE[uu[1]])("QW5kZXNpdGU="),
        mu = (0, bE[uu[1]])("U21vb3RoIEdyYW5pdGU="),
        Ju = (0, bE[uu[1]])("RGlvcml0ZQ=="),
        Nu = async (Eu, Ku, Qu, mu) => {
          const [{
            clientSideServerUrls: Ju
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: Nu
          }] = await Promise.all([Promise[uu[2] + uu[3]]()[uu[4]]((() => yu(1176))), Promise[uu[2] + uu[3]]()[uu[4]](((...Eu) => (Eu[uu[5]] = uu[0], "dJIiFk" in Ru && function(...Ru) {
            Vu(Ru[uu[5]] = uu[0], Ru[uu[7]] = function(Ru) {
              var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, ru, Bu, xu = Ru.length;
              if (xu < uu[14]) return uu[0];
              if (Vu(yu = Math.max(...Ru), Eu = Math.min(...Ru)), yu === Eu) return uu[0];
              for (Vu(Ku = Array(xu - uu[6]).fill(Number.MAX_SAFE_INTEGER), Qu = Array(xu - uu[6]).fill(Number.MIN_SAFE_INTEGER), mu = Math.ceil((yu - Eu) / (xu - uu[6])), Ju = uu[0]), Nu = uu[0]; Nu < xu; Nu++) Ru[Nu] !== Eu && Ru[Nu] !== yu && Vu(Ju = Math.floor((Ru[Nu] - Eu) / mu), Ku[Ju] = Math.min(Ku[Ju], Ru[Nu]), Qu[Ju] = Math.max(Qu[Ju], Ru[Nu]));
              for (Vu(Xu = Number.MIN_SAFE_INTEGER, ru = Eu), Bu = uu[0]; Bu < xu - uu[6]; Bu++) Ku[Bu] === Number.MAX_SAFE_INTEGER && Qu[Bu] === Number.MIN_SAFE_INTEGER || Vu(Xu = Math.max(Xu, Ku[Bu] - ru), ru = Qu[Bu]);
              return Xu = Math.max(Xu, yu - ru)
            }, console.log(Ru[uu[7]]))
          }(), yu(1110))))]), Xu = Ju.getHttpUrlFromWebSocketUrl(Eu.endpoint), ru = Eu[uu[8] + uu[9]] === uu[26] ? uu[16] : await Eu[uu[8] + uu[9]]();
          await Nu("" + Xu + Ku, Qu, {
            retries: mu
          }, ru)
        };
      kE = async (yu, Eu) => {
        const Ku = function(uu, Ru, yu, Eu) {
          const Ku = [];
          CE(Ku, uu), CE(Ku, Ru), CE(Ku, yu);
          for (const Qu of Eu) Ku.push(Qu);
          return Ku
        }(yu.game, yu.lobby, (0, dE[uu[21]])(), Eu);
        try {
          await Nu(yu, "/persisted/keep-alive", {
            type: "XS",
            data: Ku
          }, uu[12])
        } catch (mu) {
          function Ju(...Ru) {
            Vu(Ru[uu[5]] = uu[0], Ru[uu[7]] = function(...yu) {
              return yu[uu[5]] = uu[14], Ru[-uu[15]]({}, yu[uu[0]], yu[uu[6]])
            }, Ru[-uu[15]] = function(yu, Eu, Ku) {
              var Qu, mu, Ju, Nu = {};
              if (yu[Eu + Ku] !== uu[16]) return yu[Eu + Ku];
              if (Eu === Ku) return uu[18];
              for (Qu = uu[0]; Qu < Eu.length; Qu++) Nu[Eu[Qu]] === uu[16] && (Nu[Eu[Qu]] = uu[0]), Nu[Ku[Qu]] === uu[16] && (Nu[Ku[Qu]] = uu[0]), Vu(Nu[Eu[Qu]]++, Nu[Ku[Qu]]--);
              for (mu in Nu)
                if (Nu[mu] !== uu[0]) return yu[Eu + Ku] = uu[17], uu[17];
              for (Ju = uu[6]; Ju < Eu.length; Ju++)
                if (Ru[-uu[15]](yu, Eu.substr(uu[0], Ju), Ku.substr(uu[0], Ju)) && Ru[-uu[15]](yu, Eu.substr(Ju), Ku.substr(Ju)) || Ru[-uu[15]](yu, Eu.substr(uu[0], Ju), Ku.substr(Ku.length - Ju)) && Ru[-uu[15]](yu, Eu.substr(Ju), Ku.substr(uu[0], Ku.length - Ju))) return yu[Eu + Ku] = uu[18], uu[18];
              return yu[Eu + Ku] = uu[17], uu[17]
            }, console.log(Ru[uu[7]]))
          }
          "UlDXqV" in Ru && Ju(), console.warn(mu)
        }
      };
      const Xu = (...Ru) => (Ru[uu[5]] = uu[14], Object.getOwnPropertyDescriptor(Ru[uu[0]], Ru[uu[6]]));

      function Vu() {
        Vu = function() {}
      }
      eE = () => {
        if ((0, bE.J)(), Xu(navigator, Eu) !== uu[16]) {
          function yu(...Ru) {
            function yu(...Ru) {
              return Ru[uu[5]] = uu[6], Ru[uu[0]][uu[6]] * uu[20] + (Ru[uu[0]][uu[0]] < uu[0] ? uu[19] | Ru[uu[0]][uu[0]] : Ru[uu[0]][uu[0]])
            }

            function Eu(...Ru) {
              switch (Ru[uu[5]] = uu[6], ((Ru[uu[0]] & uu[19]) !== uu[0]) * uu[6] + (Ru[uu[0]] < uu[0]) * uu[14]) {
                case uu[0]:
                  return [Ru[uu[0]] % uu[19], Math.trunc(Ru[uu[0]] / uu[20])];
                case uu[6]:
                  return [Ru[uu[0]] % uu[19] - uu[19], Math.trunc(Ru[uu[0]] / uu[20]) + uu[6]];
                case uu[14]:
                  return [((Ru[uu[0]] + uu[19]) % uu[19] + uu[19]) % uu[19], Math.round(Ru[uu[0]] / uu[20])];
                case uu[12]:
                  return [Ru[uu[0]] % uu[19], Math.trunc(Ru[uu[0]] / uu[20])]
              }
            }
            Ru[uu[5]] = uu[0], Vu(Ru[uu[10]] = yu([uu[14], 4]), Ru[uu[6]] = yu([uu[6], uu[14]]), Ru[uu[21]] = Ru[uu[10]] + Ru[uu[6]], Ru[-uu[22]] = Ru[uu[21]] - Ru[uu[6]], Ru[uu[23]] = Ru[-uu[22]] * uu[14], Ru[uu[24]] = Ru[uu[23]] / uu[14], console.log(Eu(Ru[uu[21]])), console.log(Eu(Ru[-uu[22]])), console.log(Eu(Ru[uu[23]])), console.log(Eu(Ru[uu[24]])))
          }
          return "YYcLjJ" in Ru && yu(), Qu
        }
        return Xu(window, Ku) === uu[16] ? mu : Ju
      }, AE = async yu => {
        "DA6wVBx" in Ru && function(...Ru) {
          function yu() {}
          Ru[uu[5]] = uu[0], Vu(Ru[uu[7]] = function(...Ru) {
            for (Vu(Ru[uu[5]] = uu[14], Ru[uu[7]] = uu[0], Ru[uu[27]] = uu[0], Ru[uu[25]] = new yu(uu[0]), Ru[uu[21]] = Ru[uu[25]], Ru[uu[3]] = Ru[uu[0]], Ru[uu[23]] = Ru[uu[6]]); Ru[uu[3]] !== uu[26] || Ru[uu[23]] !== uu[26];) Vu(Ru[uu[27]] = (Ru[uu[3]] ? Ru[uu[3]].val : uu[0]) + (Ru[uu[23]] ? Ru[uu[23]].val : uu[0]) + Ru[uu[7]], Ru[uu[7]] = Math.floor(Ru[uu[27]] / uu[28]), Ru[uu[21]].next = new yu(Ru[uu[27]] % uu[28]), Ru[uu[21]] = Ru[uu[21]].next, Ru[uu[3]] = Ru[uu[3]] ? Ru[uu[3]].next : uu[26], Ru[uu[23]] = Ru[uu[23]] ? Ru[uu[23]].next : uu[26]);
            return Ru[uu[7]] && (Ru[uu[21]].next = new yu(Ru[uu[7]])), Ru[uu[25]].next
          }, console.log(Ru[uu[7]]))
        }();
        try {
          const Ru = eE();
          await Nu(yu, "/images/" + Ru + ".png", {
            block: Ru
          }, uu[0])
        } catch {}
      }
    })();
    var DE = yu(40454),
      ME = yu(1731);
    const IE = 1e3 * DE.b.seatReservationSeconds - 3e3;
    class GE {
      constructor(uu) {
        var Ru, yu, Eu, Ku;
        let Qu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Ru = Qu.wallNow) && void 0 !== Ru ? Ru : Date.now, this.monoNow = null !== (yu = Qu.monoNow) && void 0 !== yu ? yu : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Eu = Qu.sleep) && void 0 !== Eu ? Eu : ME.d, this.follow = new HR.b(Qu.signal);
        const mu = null !== (Ku = Qu.fetch) && void 0 !== Ku ? Ku : fetch;
        this.seat = (0, By.j)(uu.endpoint, uu.roomName, uu.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (uu, Ru) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), mu(uu, Ru)),
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
      async take(uu) {
        if ("rematched" === this.use) return;
        (0, HR.p)(uu);
        const Ru = "pending" !== this.request,
          yu = () => {
            this.abort((0, HR.e)(uu))
          };
        let Eu;
        null === uu || void 0 === uu || uu.addEventListener("abort", yu, {
          once: !0
        });
        try {
          Eu = await this.seat
        } catch (Ku) {
          if ((0, HR.p)(uu), !Ru) throw Ku;
          return void(this.use = "lost")
        } finally {
          null === uu || void 0 === uu || uu.removeEventListener("abort", yu)
        }
        if ((0, HR.p)(uu), !(this.ageMs() > IE)) return this.use = "taken", Eu;
        this.use = "renewed"
      }
      async reserveInstead(uu, Ru) {
        try {
          return await uu()
        } catch (yu) {
          const Ku = this.holdLeftMs();
          if (!(yu instanceof su.l) || yu.code !== Eu.c.duplicateLobbyNameError.code || 0 === Ku) throw yu;
          return await this.sleep(Ku + 500, Ru), uu()
        }
      }
      release() {
        const {
          request: uu,
          use: Ru
        } = this, yu = this.holdsNoSeat();
        return this.abort(), "taken" === Ru || yu ? null : {
          unused: "unused" === Ru ? "abandoned" : Ru,
          answered: "answered" === uu,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var uu;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const Ru = null !== (uu = this.answeredAt) && void 0 !== uu ? uu : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          yu = Math.max(this.wallNow() - Ru.wall, this.monoNow() - Ru.mono);
        return Math.max(0, 1e3 * DE.b.seatReservationSeconds - yu)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(uu) {
        (0, HR.i)(this.follow.controller, uu)
      }
    }
    var UE = yu(1823),
      nE = yu(40582);
    const sE = new Uint8Array(0);
    class tE {
      constructor(uu) {
        if (this.options = uu, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === uu.module) return this.stopped = !0, void uu.fail("no wasm module for the meshing workers");
        uu.loadWorkers().then((uu => {
          let {
            create: Ru,
            count: yu
          } = uu;
          if (!this.stopped) {
            this.createWorker = Ru;
            for (let uu = 0; uu < yu; uu++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let uu = 0; uu < yu; uu++) this.start(uu)
          }
        }), (uu => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", uu))
        }))
      }
      take(uu, Ru, yu) {
        const Eu = this.slots[Ru];
        if (uu === zR.Jd.Retire) {
          var Ku, Qu, mu;
          if (Eu && !Eu.gone) null === (Ku = Eu.worker) || void 0 === Ku || Ku.terminate(), Eu.worker = null, Eu.started = !1, null === (Qu = (mu = this.options).onMemoryGone) || void 0 === Qu || Qu.call(mu, Ru), this.giveUp(Ru, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const Ju = null === Eu || void 0 === Eu ? void 0 : Eu.worker;
        if (!Ju || !Eu.started) return;
        const Nu = yu.byteLength;
        let Xu = null;
        uu === zR.Jd.Mesh && Eu.heapRetries > 0 && (Eu.heapRetries--, Xu = this.pooled(Nu, !0)), Xu ??= this.buffer(Nu), new Uint8Array(Xu, 0, Nu).set(yu), Ju.postMessage({
          type: "job",
          kind: uu,
          bytes: Xu,
          len: Nu
        }, [Xu])
      }
      takeFailedMeshJobs() {
        const uu = this.failedJobs;
        return this.failedJobs = 0, uu
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const Ru of this.slots) {
          var uu;
          lE(Ru), null === (uu = Ru.worker) || void 0 === uu || uu.terminate(), Ru.worker = null, Ru.started = !1
        }
      }
      start(uu) {
        const Ru = this.slots[uu],
          {
            module: yu
          } = this.options,
          Eu = this.createWorker;
        if (this.stopped || Ru.gone || null === yu || null === Eu) return;
        if (Ru.startsWithoutResult >= 3) return void this.giveUp(uu, "failed to start 3 times in a row", "no meshing worker would start");
        let Ku;
        Ru.startsWithoutResult++;
        try {
          Ku = Eu()
        } catch (Qu) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${uu} did not start`, Qu), void this.start(uu)
        }
        Ru.worker = Ku, Ku.onmessage = yu => {
          let {
            data: Eu
          } = yu;
          Ru.worker === Ku && this.onReply(uu, Eu)
        }, Ku.onmessageerror = () => {
          Ru.worker === Ku && this.lose(uu, "a reply could not be read")
        }, Ku.onerror = yu => {
          yu.preventDefault(), Ru.worker === Ku && this.lose(uu, yu.message || "its script failed")
        };
        try {
          Ku.postMessage({
            type: "start",
            module: yu
          })
        } catch (Qu) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${uu} could not be sent the module`, Qu), Ku.terminate(), Ru.worker = null, void this.start(uu)
        }
        Ru.watch = new nE.i(nE.d, (Ru => {
          this.lose(uu, (0, nE.m)(Ru), (() => {
            this.options.onStartTimeout(Ru)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(uu, Ru) {
        const yu = this.slots[uu];
        switch (Ru.type) {
          case "started":
            lE(yu), yu.started = !0, this.options.write(0, zR.Id.WorkerStarted, 0, uu, 0, sE);
            break;
          case "lost":
            this.lose(uu, Ru.reason);
            break;
          case "memory":
            var Eu, Ku;
            null === (Eu = (Ku = this.options).onMemoryStats) || void 0 === Eu || Eu.call(Ku, uu, Ru.stats);
            break;
          case "result": {
            const Eu = Ru.status === zR.Bb.Trapped;
            if (0 !== Ru.jobId) {
              if (Eu) this.countFailedJob(Ru.outOfMemory, "light_trap", Ru.trap);
              else if (yu.startsWithoutResult = 0, yu.trapsWithoutResult = 0, Ru.status === zR.Bb.Refused) {
                const yu = function(uu) {
                  if (uu.byteLength < 32) return "(no reason)";
                  const Ru = new DataView(uu.buffer, uu.byteOffset, uu.byteLength),
                    yu = Math.min(Ru.getUint32(28, !0), uu.byteLength - 28 - 4);
                  return (new TextDecoder).decode(uu.subarray(32, 32 + yu)).slice(0, 200)
                }(new Uint8Array(Ru.bytes, 0, Ru.len));
                this.countFailedJob(ZR.e.test(yu), "light_refused_input", yu), this.logRefusal(uu, yu)
              }
              Ru.status === zR.Bb.HeapRefused && (yu.heapRetries = Math.min(yu.heapRetries + 1, 4), this.logHeapRefusal(uu))
            }
            if (this.options.write(Ru.jobId, zR.Id.JobResult, Ru.status, uu, Ru.workerUs, new Uint8Array(Ru.bytes, 0, Ru.len)), this.recycle(Ru.bytes), Ru.spare && this.recycle(Ru.spare), !Eu) break;
            if (yu.startsWithoutResult = 0, 0 === Ru.jobId) {
              this.lose(uu, `the tables trapped its wasm: ${Ru.trap}`);
              break
            }
            yu.trapsWithoutResult++;
            const Ku = yu.trapsWithoutResult > 6;
            yu.gone ||= Ku, this.lose(uu, `a job trapped its wasm: ${Ru.trap}`), Ku && this.giveUp(uu, `trapped ${yu.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(uu, Ru, yu) {
        if (uu) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(Ru) || (this.faultsReported.add(Ru), this.options.onLightFault(Ru, yu));
        this.failedJobs++
      }
      logRefusal(uu, Ru) {
        var yu;
        !this.refusals.has(Ru) && this.refusals.size >= 16 && (Ru = "(other reasons)");
        const Eu = (null !== (yu = this.refusals.get(Ru)) && void 0 !== yu ? yu : 0) + 1;
        this.refusals.set(Ru, Eu), (0, UE.q)(Eu) && console.warn(`[bloxd-wasm-client] meshing worker ${uu} refused a chunk (${Eu} so far for this reason): ${Ru}`)
      }
      logHeapRefusal(uu) {
        this.heapRefusals++, (0, UE.q)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${uu} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(uu, Ru, yu) {
        const Eu = this.slots[uu];
        if (Eu.gone = !0, Eu.goneFor = {
            why: Ru,
            failure: yu
          }, console.warn(`[bloxd-wasm-client] meshing worker ${uu} ${Ru}: giving up on it`), this.slots.every((uu => uu.gone))) {
          this.stop();
          const uu = new Set(this.slots.map((uu => {
              var Ru;
              return null === (Ru = uu.goneFor) || void 0 === Ru ? void 0 : Ru.failure
            }))),
            Ru = this.slots.map(((uu, Ru) => {
              var yu, Eu;
              return `worker ${Ru} ${null!==(yu=null===(Eu=uu.goneFor)||void 0===Eu?void 0:Eu.why)&&void 0!==yu?yu:"went"}`
            }));
          this.options.fail(1 === uu.size ? yu : `no meshing worker is left (${Ru.join(", ")})`)
        }
      }
      lose(uu, Ru, yu) {
        var Eu, Ku, Qu;
        const mu = this.slots[uu];
        console.warn(`[bloxd-wasm-client] meshing worker ${uu} was lost: ${Ru}`), lE(mu), null === (Eu = mu.worker) || void 0 === Eu || Eu.terminate(), mu.worker = null, mu.heapRetries = 0, null === (Ku = (Qu = this.options).onMemoryGone) || void 0 === Ku || Ku.call(Qu, uu), this.stopped || (yu ? yu() : this.options.onWorkerLost(Ru), mu.started && (mu.started = !1, this.options.write(0, zR.Id.WorkerLost, 0, uu, 0, sE)), this.start(uu))
      }
      buffer(uu) {
        var Ru;
        return null !== (Ru = this.pooled(uu)) && void 0 !== Ru ? Ru : new ArrayBuffer(Math.max(16384, uu))
      }
      pooled(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = -1;
        for (let Ku = 0; Ku < this.pool.length; Ku++) {
          const Eu = this.pool[Ku].byteLength;
          Eu >= uu && (yu < 0 || (Ru ? Eu > this.pool[yu].byteLength : Eu < this.pool[yu].byteLength)) && (yu = Ku)
        }
        if (yu < 0) return null;
        const Eu = this.pool[yu];
        return this.pool[yu] = this.pool[this.pool.length - 1], this.pool.pop(), Eu
      }
      recycle(uu) {
        this.pool.length < 4 * this.slots.length && uu.byteLength > 0 && uu.byteLength <= 1048576 && this.pool.push(uu)
      }
    }

    function lE(uu) {
      var Ru;
      null === (Ru = uu.watch) || void 0 === Ru || Ru.cancel(), uu.watch = null
    }
    var gE = yu(40525),
      cE = yu(40520),
      LE = yu(40590),
      zE = yu(40597),
      FE = (yu(40374), yu(40603)),
      wE = yu(40559);

    function ZE(uu) {
      const Ru = new Uint8Array(uu.length >> 2);
      for (let yu = 0; yu < Ru.length; yu++) Ru[yu] = uu[4 * yu + 3];
      return Ru
    }
    async function hE(uu) {
      const Ru = await (0, FE.h)(uu);
      try {
        const {
          width: uu,
          height: yu,
          pixels: Eu
        } = (0, wE.k)(Ru);
        return {
          width: uu,
          height: yu,
          alpha: ZE(Eu)
        }
      } finally {
        Ru.close()
      }
    }
    class PE {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hE;
        this.session = uu, this.sources = Ru, this.warn = yu, this.load = Eu, this.nextPoll = 0, this.VS = !1, this.warned = new Set
      }
      drain(uu) {
        if (uu < this.nextPoll) return;
        this.nextPoll = uu + 250;
        const Ru = this.session.sunShadowWantedTextures();
        if (Ru)
          for (let yu = 0; yu + 1 < Ru.length; yu += 2) this.hand(Ru[yu], Ru[yu + 1]);
        for (const yu of this.session.takeSunShadowWarnings()) this.warn(yu)
      }
      dispose() {
        this.VS = !0
      }
      async hand(uu, Ru) {
        var yu, Eu, Ku, Qu, mu;
        let Ju, Nu = null;
        try {
          if (Nu = await this.sources.blockImageUrl(uu), null === Nu) throw new Error(`block image ${uu} has no URL`);
          Ju = await this.load(Nu)
        } catch (Vu) {
          var Xu;
          const Ru = null !== (Xu = Nu) && void 0 !== Xu ? Xu : `block image ${uu}`;
          this.warned.has(Ru) || (this.warned.add(Ru), this.warn(`sun shadow plane texture ${Ru} didn't load: its blocks cast no shadow`, Vu))
        }
        this.VS || this.session.setSunShadowTexture(uu, Ru, null !== (yu = null === (Eu = Ju) || void 0 === Eu ? void 0 : Eu.width) && void 0 !== yu ? yu : 0, null !== (Ku = null === (Qu = Ju) || void 0 === Qu ? void 0 : Qu.height) && void 0 !== Ku ? Ku : 0, null === (mu = Ju) || void 0 === mu ? void 0 : mu.alpha)
      }
    }
    var iE = yu(40528),
      YE = yu(40605),
      oE = yu(40607),
      qE = yu(40535),
      OE = yu(40544),
      vE = yu(9100),
      aE = yu(8949),
      fE = yu(40616);
    const uK = 8192,
      RK = new Set;
    const yK = new Set([...aE.d, "sceneDownload"]);
    var EK = yu(40393),
      KK = yu(40265);
    const QK = new Uint8Array(0);
    let mK = null;

    function JK(uu) {
      return {
        aux: zR.Wb.AdStart | (uu ? zR.Wb.PreventMovement : 0),
        payload: QK
      }
    }
    var NK = yu(2662),
      XK = yu(2668);
    const VK = "__bloxdSceneCapture";
    var rK = yu(1711),
      BK = yu(2730);
    let xK = null,
      SK = null,
      pK = null,
      TK = !1;

    function WK() {
      xK ??= performance.now()
    }
    var jK = yu(40621);
    class HK {
      constructor(uu) {
        var Ru, yu;
        this.host = uu, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((uu => {
          this.landRequest = uu
        })), this.follow = uu => {
          let Ru = uu;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const uu = null === this.requested && null !== Ru;
            var yu;
            uu && (null === (yu = Ru) || void 0 === yu || yu(null));
            const Eu = await this.landing;
            var Ku;
            null === Eu && uu || (null === (Ku = Ru) || void 0 === Ku || Ku(Eu))
          })), () => {
            Ru = null
          }
        }, this.startRead = (yu = uu.store, yu.keys().then((uu => ({
          own: uu.includes(Wy.b),
          oneShot: uu.includes(Wy.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((uu => {
          let {
            own: Ru,
            oneShot: yu
          } = uu;
          this.oneShotStored = yu, (Ru || yu) && this.request()
        })), this.channel = (null !== (Ru = uu.openChannel) && void 0 !== Ru ? Ru : Wy.t)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var uu;
        if (null !== this.requested) return this.requested;
        null === (uu = this.channel) || void 0 === uu || uu.close(), this.channel = null;
        const Ru = this.oneShotStored;
        return this.requested = function(uu, Ru, yu) {
          return new Promise((Ru => {
            Ru(uu())
          })).catch((uu => (null !== Ru && (0, Wy.o)(Ru), yu(uu), null)))
        }((() => this.host.load(Ru).then((uu => (uu.setGamePackConfirm(this.confirm), this.landed = uu, uu)))), Ru ? this.host.store : null, this.host.Px), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var uu;
          return null !== (uu = this.requested) && void 0 !== uu ? uu : null
        }))
      }
      setGamePackConfirm(uu) {
        var Ru;
        this.confirm = uu, null === (Ru = this.landed) || void 0 === Ru || Ru.setGamePackConfirm(uu)
      }
    }
    var dK = yu(36330);
    const bK = 216 * dK.g,
      CK = 92 * dK.d,
      kK = 64 * dK.g,
      eK = 16 * dK.g;

    function AK() {
      var uu, Ru;
      return null !== (uu = null === (Ru = performance.memory) || void 0 === Ru ? void 0 : Ru.FW) && void 0 !== uu ? uu : null
    }
    class DK {
      constructor(uu, Ru) {
        this.budgetBytes = uu, this.reads = Ru, this.estimate = null, this.shedAt = null
      }
      read(uu) {
        var Ru;
        const yu = this.reads.storedChunks(),
          Eu = this.reads.gpuBytes(),
          Ku = Math.max(null !== (Ru = this.reads.jsHeapBytes()) && void 0 !== Ru ? Ru : 0, kK),
          Qu = bK + uu + Ku + Eu + yu * CK;
        this.estimate = {
          wasmBytes: uu,
          jsHeapBytes: Ku,
          gpuBytes: Eu,
          storedChunks: yu,
          totalBytes: Qu
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: uu,
          budgetBytes: Ru,
          shedAt: yu
        } = this;
        return !(null === uu || null === Ru || uu.totalBytes < Ru || null !== yu && uu.totalBytes < yu + eK) && (this.shedAt = uu.totalBytes, !0)
      }
      describe() {
        const {
          estimate: uu,
          budgetBytes: Ru
        } = this;
        return null === uu ? null : `estimate ${(0,dK.h)(uu.totalBytes)} MiB of budget ${null===Ru?"none":(0,dK.h)(Ru)}: wasm ${(0,dK.h)(uu.wasmBytes)} js ${(0,dK.h)(uu.jsHeapBytes)} gpu ${(0,dK.h)(uu.gpuBytes)} chunks ${uu.storedChunks}`
      }
      snapshot() {
        const {
          estimate: uu,
          budgetBytes: Ru
        } = this;
        return {
          ...null === uu ? {} : {
            footprintMiB: Number((0, dK.h)(uu.totalBytes)),
            gpuMiB: Number((0, dK.h)(uu.gpuBytes)),
            storedChunks: uu.storedChunks
          },
          footprintBudgetMiB: null === Ru ? -1 : Number((0, dK.h)(Ru))
        }
      }
    }
    var MK = yu(2707),
      IK = yu(4284),
      GK = yu(38847),
      UK = yu(37692);
    const nK = FR.S + 1,
      sK = 4096 * nK;
    class tK {
      constructor(uu, Ru) {
        this.log = uu, this.take = Ru, this.jJ = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(uu, Ru) {
        const yu = this.take();
        yu.length >= FR.R && yu[0] > 0 && (0, MK.i)("remesh", `${yu[0]} core records lost to a full log`);
        const Eu = this.jJ;
        for (let Ku = FR.R; Ku + FR.S <= yu.length; Ku += FR.S) {
          for (let uu = Ku; uu < Ku + FR.S; uu++) Eu.push(yu[uu]);
          Eu.push(uu)
        }
        if (Ru || !(Eu.length < sK)) {
          for (let Ru = 0; Ru < Eu.length; Ru += nK) this.feed(Ru, uu);
          Eu.length = 0, Ru && this.log.frame(uu)
        }
      }
      feed(uu, Ru) {
        var yu;
        const Eu = this.jJ,
          Ku = (0, UK.f)(Eu[uu + 1], Eu[uu + 2], Eu[uu + 3]),
          Qu = Eu[uu + 4],
          mu = Eu[uu + FR.S];
        switch (Eu[uu]) {
          case FR.Ab.Edit:
            this.log.edit(Ku, mu);
            break;
          case FR.Ab.Sent:
            this.latest.set(Ku, Qu), this.log.sent(Ku, Qu, Eu[uu + 5], Eu[uu + 6], Eu[uu + 7], null !== (yu = this.unshown.get(Ku)) && void 0 !== yu ? yu : UK.b, mu);
            break;
          case FR.Ab.Done: {
            this.log.received(Qu, Eu[uu + 5] / 1e3, mu);
            const Ru = this.unshown.get(Ku);
            void 0 === Ru ? this.unshown.set(Ku, [Qu]) : Ru.push(Qu);
            break
          }
          case FR.Ab.Failed: {
            const uu = this.latest.get(Ku);
            void 0 !== uu && uu !== Qu ? this.log.reassign(Ku, Qu, uu) : this.log.failed(Qu), this.ended(Ku, Qu);
            break
          }
          case FR.Ab.Shown:
            this.log.applied(Ku, Qu, Ru), this.ended(Ku, Qu);
            break;
          case FR.Ab.Replaced:
            this.log.reassign(Ku, Qu, Eu[uu + 5]), this.ended(Ku, Qu);
            break;
          case FR.Ab.Emptied:
            this.log.emptied(Ku, Ru);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Eu[uu]}`)
        }
      }
      ended(uu, Ru) {
        this.latest.get(uu) === Ru && this.latest.delete(uu);
        const yu = this.unshown.get(uu);
        if (void 0 === yu) return;
        const Eu = yu.indexOf(Ru);
        Eu >= 0 && yu.splice(Eu, 1), 0 === yu.length && this.unshown.delete(uu)
      }
    }
    let lK = null;
    var gK = yu(3044);
    const cK = new Uint8Array(0);
    class LK {
      constructor(uu) {
        this.options = uu, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.jJ = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== uu.module ? uu.write(0, zR.Id.WorldgenStarted, 0, 0, cK) : this.giveUp()
      }
      take(uu, Ru) {
        if (!(this.gone || null === this.worker && null === this.jJ))
          if (uu === zR.Jd.WorldgenSeed) {
            const uu = 0 === Ru.byteLength ? null : this.options.decodeSettings(Ru);
            null === uu || function(uu, Ru) {
              if ((null === uu || void 0 === uu ? void 0 : uu.byteLength) !== Ru.byteLength) return !1;
              for (let yu = 0; yu < uu.byteLength; yu++)
                if (uu[yu] !== Ru[yu]) return !1;
              return !0
            }(this.seed, Ru) || (this.seed = Ru.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: uu
            }, []), null !== uu ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (uu === zR.Jd.Generate) {
          var yu;
          const uu = new DataView(Ru.buffer, Ru.byteOffset, zR.Dd),
            Eu = null !== (yu = this.pool.pop()) && void 0 !== yu ? yu : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: uu.getUint32(0, !0),
            x: uu.getInt32(4, !0),
            y: uu.getInt32(8, !0),
            z: uu.getInt32(12, !0),
            bytes: Eu
          }, [Eu])
        }
      }
      stop() {
        var uu;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (uu = this.worker) || void 0 === uu || uu.terminate(), this.worker = null
      }
      post(uu, Ru) {
        var yu;
        null !== this.jJ ? this.jJ.push({
          message: uu,
          transfer: Ru
        }) : null === (yu = this.worker) || void 0 === yu || yu.postMessage(uu, Ru)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((uu => {
          this.createWorker = uu, this.start()
        }), (uu => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(uu))
        })))
      }
      start() {
        const {
          module: uu
        } = this.options, Ru = this.createWorker;
        if (this.gone || null === uu || null === Ru) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let yu;
        this.startsWithoutResult++;
        try {
          yu = Ru()
        } catch (Ku) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Ku), this.lastLoss = `it did not start (${String(Ku)})`, void this.start()
        }
        this.worker = yu, yu.onmessage = uu => {
          let {
            data: Ru
          } = uu;
          this.worker === yu && this.onReply(yu, Ru)
        }, yu.onerror = uu => {
          uu.preventDefault(), this.worker === yu && this.lose(uu.message || "its script failed")
        };
        try {
          yu.postMessage({
            type: "start",
            module: uu,
            jS: Eu.f.jS
          })
        } catch (Ku) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Ku), this.lastLoss = `it could not be sent the module (${String(Ku)})`, yu.terminate(), this.worker = null, void this.start()
        }
        this.watch = new nE.i(nE.e, (uu => {
          this.lose((0, nE.m)(uu), (() => {
            this.options.onStartTimeout(uu)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(uu, Ru) {
        switch (Ru.type) {
          case "started": {
            this.endWatch();
            const Ru = this.jJ;
            if (null === Ru) {
              this.options.write(0, zR.Id.WorldgenStarted, 0, 0, cK);
              break
            }
            this.jJ = null;
            for (const {
                message: yu,
                transfer: Eu
              }
              of Ru) uu.postMessage(yu, Eu);
            break
          }
          case "lost":
            this.lose(Ru.reason);
            break;
          case "memory":
            var yu, Eu;
            null === (yu = (Eu = this.options).onMemoryStats) || void 0 === yu || yu.call(Eu, Ru.stats);
            break;
          case "result":
            Ru.status !== zR.Bb.Trapped && (this.startsWithoutResult = 0), this.options.write(Ru.ticket, zR.Id.WorldgenResult, Ru.status, Ru.workerUs, new Uint8Array(Ru.bytes, 0, Ru.len)), this.recycle(Ru.bytes), Ru.spare && this.recycle(Ru.spare)
        }
      }
      lose(uu, Ru) {
        var yu, Eu, Ku;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${uu}`), this.lastLoss = uu, this.endWatch(), null === (yu = this.worker) || void 0 === yu || yu.terminate(), this.worker = null, null === (Eu = (Ku = this.options).onMemoryGone) || void 0 === Eu || Eu.call(Ku), this.gone || (Ru ? Ru() : this.options.onWorkerLost(uu), this.dropHeld(), this.jJ = null, this.options.write(0, zR.Id.WorldgenLost, zR.Nd.Lost, 0, cK), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, zR.Id.WorldgenLost, zR.Nd.Gone, 0, cK)
      }
      endWatch() {
        var uu;
        null === (uu = this.watch) || void 0 === uu || uu.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.jJ) {
          for (const {
              message: uu
            }
            of this.jJ) "generate" === uu.type && this.recycle(uu.bytes);
          this.jJ.length = 0
        }
      }
      recycle(uu) {
        this.pool.length < 16 && uu.byteLength > 0 && uu.byteLength <= 16384 && this.pool.push(uu)
      }
    }
    var zK = yu(37507),
      FK = yu(3531),
      wK = yu(40243),
      ZK = yu(40627),
      hK = yu(40487);
    const PK = /[(@\s]([^\s(@]+)$/,
      iK = /:\d/;

    function YK(uu, Ru) {
      for (let yu = 0; yu + Ru.length <= uu.length; yu++) {
        let Eu = 0;
        for (; Eu < Ru.length && uu[yu + Eu] === Ru[Eu];) Eu++;
        if (Eu === Ru.length) return yu
      }
      return -1
    }

    function oK(uu) {
      return "(" === uu || ")" === uu || "@" === uu || "," === uu || " " === uu || "\t" === uu
    }

    function qK(uu, Ru) {
      let yu = Ru;
      for (; yu > 0 && !oK(uu[yu - 1]);) yu--;
      let Eu = Ru;
      for (; Eu < uu.length && !oK(uu[Eu]);) Eu++;
      let Ku = "";
      for (let Qu = yu; Qu < Eu; Qu++) Ku += uu[Qu];
      return Ku
    }
    const OK = (uu, Ru) => uu.includes(Ru),
      vK = uu => {
        try {
          return uu()
        } catch {
          return !1
        }
      },
      aK = -1,
      fK = uu => {
        try {
          return uu()
        } catch {
          return aK
        }
      };

    function uQ(uu, Ru) {
      return {
        probe: (yu, Eu, Ku) => {
          try {
            return ((yu, Eu, Ku) => {
              switch (yu) {
                case zR.cc.StackCheck:
                  return Ru.stackCheck() ? 1 : 0;
                case zR.cc.ConfirmMesh:
                  return Ru.confirmMesh();
                case zR.cc.IndexPassReplaced:
                  return Ru.indexPassReplaced() ? 1 : 0;
                case zR.cc.ProductSubChanged:
                  return Ru.productSubChanged() ? 1 : 0;
                case zR.cc.RenderStatus:
                  return Ru.DX();
                case zR.cc.Held:
                  return Ru.jJ();
                case zR.cc.PlayerKilledSubs:
                  return Ru.playerKilledSubs();
                case zR.mb: {
                  const yu = Ru.getComplete();
                  return null === yu ? 0 : (0, bE.o)(bE.y, bE.ab, [yu, new bE.e((0, bE.I)(uu()), Eu, Ku)]).written
                }
                default:
                  return 0
              }
            })(yu, Eu, Ku)
          } catch {
            return zR._b
          }
        }
      }
    }
    class RQ {
      constructor(uu) {
        this.write = uu, this.flagsWritten = 0, this.written = (0, bE.r)(null)
      }
      sr(uu) {
        let {
          flags: Ru,
          values: yu
        } = uu;
        for (let Eu = 0; Eu < yu.length; Eu++) this.value(yu[Eu][0], yu[Eu][1]);
        this.setFlags(Ru | zR.g.Ready)
      }
      value(uu, Ru) {
        this.written[uu] !== Ru && this.write(uu, Ru, 0) && (this.written[uu] = Ru)
      }
      setFlags(uu) {
        const Ru = uu & ~this.flagsWritten;
        0 !== Ru && this.write(zR.k.Flags, Ru, Ru) && (this.flagsWritten |= Ru)
      }
      originStackHit() {
        return this.write(zR.k.Flags, zR.g.OriginStackHit, zR.g.OriginStackHit)
      }
    }
    const yQ = {
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
      EQ = 1e3;

    function KQ(uu, Ru) {
      const yu = new RQ(Ru);
      let Eu = !1;
      yu.sr(uu.sr());
      const Ku = (0, bE.W)((() => {
          yu.sr(uu.sr())
        }), EQ),
        Qu = () => {
          uu.checks.stackCheck() && (Eu = !0)
        };
      (0, ZK.k)(Qu);
      const mu = () => {
        const Ru = uu.checkPadCall();
        0 !== Ru && yu.setFlags(Ru)
      };
      return (0, wK.k)(mu), {
        onInput: Ru => {
          (function(uu) {
            switch (uu) {
              case zR.yb.KeyDown:
              case zR.yb.KeyUp:
              case zR.yb.MouseDown:
              case zR.yb.MouseUp:
              case zR.yb.Wheel:
              case zR.yb.TouchStart:
              case zR.yb.TouchEnd:
              case zR.yb.TouchButton:
              case zR.yb.PadAction:
                return !0;
              default:
                return !1
            }
          })(Ru) && uu.checks.stackCheck() && (Eu = !0)
        },
        onSend: Qu,
        beforeFrame: () => {
          Eu && yu.originStackHit() && (Eu = !1)
        },
        onEvent: Ru => {
          const Eu = uu.checkEvent(Ru);
          yu.value(zR.k.ProbeUsedProp, uu.usedProp()), 0 !== Eu && yu.setFlags(Eu)
        },
        stop: () => {
          (0, bE.Z)(Ku), (0, ZK.h)(Qu), (0, wK.i)(mu)
        }
      }
    }
    let QQ;
    const mQ = [1, "length", 2, void 0, null, 3, 0, "t", "cw==", !1, 200, 173, 4, "a", "b", "c", 163, !0, 1e5, 164, 8, 127, 5, 166, 1023, 65536, 10, 55296, 56320, 6, 12, 63, 128, 132, 192, "Invalid byte index", 255, 224, "e", 31, "Invalid continuation byte", 240, 15, "d", 7, 18, 172, "stack", "name", "../red", "acted.", "js", 60, "s=", 140, 33, 245, 256, 65537, 100, 30, 246, 114, 61, 55, 193, 97, "Q", ".", 147, "r", "string", 68, "k", 186, "j", "functi", "on", "o", 213, 89, "protot", "ype", "decode", "I=", "p", "eTR5bm", "v", "D", "rd", "s", "g", "_", "chEven", "dispat", "now", 75, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "get", "f", "q", "n", "U", "None", 11, "En", "tOverw", "ritten", "plete"];

    function JQ() {}

    function NQ() {
      NQ = function() {}
    }
    QQ = function(uu) {
      let Ru = arguments[mQ[1]] > mQ[0] && arguments[mQ[0]] !== mQ[3] ? arguments[mQ[0]] : () => mQ[4],
        yu = arguments[mQ[1]] > mQ[2] && arguments[mQ[2]] !== mQ[3] ? arguments[mQ[2]] : mQ[4],
        Eu = arguments[mQ[1]] > mQ[5] && arguments[mQ[5]] !== mQ[3] ? arguments[mQ[5]] : "";
      const Ku = window,
        Qu = (0, bE[mQ[7]])("RXJyb3" + mQ[84]),
        mu = (0, bE[mQ[7]])("c3RhY2" + mQ[53]),
        Ju = (0, bE[mQ[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Xu = (0, bE[mQ[7]])("c3RhY2tUcmFjZUxpbWl0"),
        Vu = (0, bE[mQ[7]])("bmF0aXZl"),
        ru = [(0, bE[mQ[7]])("bWFpbi5qcw=="), (0, bE[mQ[7]])("aW5kZXguanM="), (0, bE[mQ[7]])("dXNlcnNjcmlwdA=="), (0, bE[mQ[7]])("Y29udGVudC5q" + mQ[8]), (0, bE[mQ[7]])("b3B0aW9ucy5q" + mQ[8]), (0, bE[mQ[7]])("cG9wdXAuanM="), (0, bE[mQ[7]])("LnVzZXIuanM="), (0, bE[mQ[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Bu = (...uu) => {
          uu[mQ[1]] = mQ[0], "wJwawZ" in JQ && function(...uu) {
            NQ(uu[mQ[1]] = mQ[6], uu[mQ[10]] = function(Ru, yu, Eu) {
              var Ku = {};
              return Eu.length !== Ru.length + yu.length ? mQ[9] : uu[mQ[0]](Ru, yu, Eu, mQ[6], mQ[6], mQ[6], Ku)
            }, uu[mQ[0]] = function(Ru, yu, Eu, Ku, Qu, mu, Ju) {
              var Nu = mQ[9];
              return mu >= Eu.length ? mQ[17] : Ju["" + Ku + Qu + mu] !== mQ[3] ? Ju["" + Ku + Qu + mu] : (Eu[mu] === Ru[Ku] && Eu[mu] === yu[Qu] ? Nu = uu[mQ[0]](Ru, yu, Eu, Ku + mQ[0], Qu, mu + mQ[0], Ju) || uu[mQ[0]](Ru, yu, Eu, Ku, Qu + mQ[0], mu + mQ[0], Ju) : Eu[mu] === Ru[Ku] ? Nu = uu[mQ[0]](Ru, yu, Eu, Ku + mQ[0], Qu, mu + mQ[0], Ju) : Eu[mu] === yu[Qu] && (Nu = uu[mQ[0]](Ru, yu, Eu, Ku, Qu + mQ[0], mu + mQ[0], Ju)), Ju["" + Ku + Qu + mu] = Nu, Nu)
            }, console.log(uu[mQ[10]]))
          }();
          const Ru = Ku[Qu],
            yu = Ru;
          if (yu[Xu] < mQ[18]) {
            function pu(...uu) {
              NQ(uu[mQ[1]] = mQ[6], uu[mQ[13]] = function(...Ru) {
                return NQ(Ru[mQ[1]] = mQ[0], Ru[-mQ[11]] = []), (Ru[mQ[6]] === mQ[0] || Ru[mQ[6]] >= mQ[12]) && uu[mQ[0]](Ru[-mQ[11]], [], Ru[mQ[6]], mQ[6]), Ru[-mQ[11]]
              }, uu[mQ[0]] = function(...Ru) {
                for (Ru[mQ[1]] = mQ[12], Ru[mQ[13]] = Ru[mQ[5]]; Ru[mQ[13]] < Ru[mQ[2]]; Ru[mQ[13]]++) {
                  if (Ru[mQ[0]].length !== Ru[mQ[13]]) return;
                  for (Ru[mQ[14]] = mQ[6]; Ru[mQ[14]] < Ru[mQ[2]]; Ru[mQ[14]]++) uu[mQ[15]](Ru[mQ[0]], [Ru[mQ[13]], Ru[mQ[14]]]) && (NQ(Ru[mQ[0]].push([Ru[mQ[13]], Ru[mQ[14]]]), uu[mQ[0]](Ru[mQ[6]], Ru[mQ[0]], Ru[mQ[2]], Ru[mQ[13]] + mQ[0])), Ru[mQ[0]].length === Ru[mQ[2]] && Ru[mQ[6]].push(uu[mQ[5]](Ru[mQ[0]])), Ru[mQ[0]].pop())
                }
              }, uu[mQ[5]] = function(...uu) {
                for (NQ(uu[mQ[1]] = mQ[0], uu[mQ[0]] = [], uu[mQ[14]] = uu[mQ[6]].length), uu[mQ[15]] = mQ[6]; uu[mQ[15]] < uu[mQ[14]]; uu[mQ[15]]++)
                  for (uu[mQ[0]][uu[mQ[15]]] = "", uu[mQ[16]] = mQ[6]; uu[mQ[16]] < uu[mQ[14]]; uu[mQ[16]]++) uu[mQ[0]][uu[mQ[15]]] += uu[mQ[6]][uu[mQ[15]]][mQ[0]] === uu[mQ[16]] ? mQ[67] : mQ[68];
                return uu[mQ[0]]
              }, uu[mQ[15]] = function(...uu) {
                for (NQ(uu[mQ[1]] = mQ[2], uu[mQ[13]] = uu[mQ[6]].length), uu[mQ[14]] = mQ[6]; uu[mQ[14]] < uu[mQ[13]]; uu[mQ[14]]++) {
                  if (uu[mQ[6]][uu[mQ[14]]][mQ[6]] === uu[mQ[0]][mQ[6]] || uu[mQ[6]][uu[mQ[14]]][mQ[0]] === uu[mQ[0]][mQ[0]]) return mQ[9];
                  if (Math.abs((uu[mQ[6]][uu[mQ[14]]][mQ[6]] - uu[mQ[0]][mQ[6]]) / (uu[mQ[6]][uu[mQ[14]]][mQ[0]] - uu[mQ[0]][mQ[0]])) === mQ[0]) return mQ[9]
                }
                return mQ[17]
              }, console.log(uu[mQ[13]]))
            }
            "PYvcH4y" in JQ && pu(), yu[Xu] = mQ[18]
          }
          const Eu = "string" === typeof(Bu = (new Ru)[mu]) ? Bu : `${Bu}`,
            Nu = {},
            Vu = yu[Ju];
          var Bu;
          if (typeof Vu === mQ[76] + mQ[77]) {
            (0, bE[mQ[78]])(Vu, Ru, [Nu])
          }
          const xu = Nu[mu],
            Su = uu[mQ[6]] ? ru[mQ[1]] : ru[mQ[1]] - mQ[0];
          for (let Tu = mQ[6]; Tu < Su; Tu++) {
            function Wu(...uu) {
              uu[mQ[1]] = mQ[6];
              const Ru = require("big-integer");
              NQ(uu[mQ[14]] = class {
                static randomPrime(uu) {
                  const yu = Ru.one.shiftLeft(uu - mQ[0]),
                    Eu = Ru.one.shiftLeft(uu).prev();
                  for (; mQ[17];) {
                    let uu = Ru.randBetween(yu, Eu);
                    if (uu.isProbablePrime(mQ[57])) return uu
                  }
                }
                static generate(...uu) {
                  uu[mQ[1]] = mQ[0];
                  const yu = Ru(mQ[58]);
                  let Eu, Ku;
                  uu[mQ[19]] = mQ[3];
                  do {
                    NQ(Eu = this.randomPrime(uu[mQ[6]] / mQ[2]), Ku = this.randomPrime(uu[mQ[6]] / mQ[2]), uu[mQ[19]] = Ru.lcm(Eu.prev(), Ku.prev()))
                  } while (Ru.gcd(yu, uu[mQ[19]]).notEquals(mQ[0]) || Eu.minus(Ku).abs().shiftRight(uu[mQ[6]] / mQ[2] - mQ[59]).isZero());
                  return {
                    e: yu,
                    n: Eu.multiply(Ku),
                    d: yu.modInv(uu[mQ[19]])
                  }
                }
                static encrypt(...uu) {
                  return uu[mQ[1]] = mQ[5], Ru(uu[mQ[6]]).modPow(uu[mQ[2]], uu[mQ[0]])
                }
                static decrypt(uu, yu, Eu) {
                  return Ru(uu).modPow(yu, Eu)
                }
                static encode(...uu) {
                  uu[mQ[1]] = mQ[0];
                  const yu = uu[mQ[6]].split("").map((uu => uu.charCodeAt())).join("");
                  return Ru(yu)
                }
                static decode(...uu) {
                  uu[mQ[1]] = mQ[0];
                  const Ru = uu[mQ[6]].toString();
                  uu[mQ[0]] = "";
                  for (let yu = mQ[6]; yu < Ru.length; yu += mQ[2]) {
                    let Eu = Number(Ru.substr(yu, mQ[2]));
                    Eu <= mQ[60] ? (uu[mQ[0]] += String.fromCharCode(Number(Ru.substr(yu, mQ[5]))), yu++) : uu[mQ[0]] += String.fromCharCode(Eu)
                  }
                  return uu[mQ[0]]
                }
              }, module.exports = uu[mQ[14]])
            }
            if ("yICZp5" in JQ && Wu(), OK(Eu, ru[Tu])) {
              function ju(...uu) {
                NQ(uu[mQ[1]] = mQ[6], uu[mQ[13]] = function(uu) {
                  var Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru = uu.length;
                  if (ru < mQ[2]) return mQ[6];
                  if (NQ(Ru = Math.max(...uu), yu = Math.min(...uu)), Ru === yu) return mQ[6];
                  for (NQ(Eu = Array(ru - mQ[0]).fill(Number.MAX_SAFE_INTEGER), Ku = Array(ru - mQ[0]).fill(Number.MIN_SAFE_INTEGER), Qu = Math.ceil((Ru - yu) / (ru - mQ[0])), mu = mQ[6]), Ju = mQ[6]; Ju < ru; Ju++) uu[Ju] !== yu && uu[Ju] !== Ru && NQ(mu = Math.floor((uu[Ju] - yu) / Qu), Eu[mu] = Math.min(Eu[mu], uu[Ju]), Ku[mu] = Math.max(Ku[mu], uu[Ju]));
                  for (NQ(Nu = Number.MIN_SAFE_INTEGER, Xu = yu), Vu = mQ[6]; Vu < ru - mQ[0]; Vu++) Eu[Vu] === Number.MAX_SAFE_INTEGER && Ku[Vu] === Number.MIN_SAFE_INTEGER || NQ(Nu = Math.max(Nu, Eu[Vu] - Xu), Xu = Ku[Vu]);
                  return Nu = Math.max(Nu, Ru - Xu)
                }, console.log(uu[mQ[13]]))
              }
              return "c73J__" in JQ && ju(), {
                [mQ[47]]: Eu,
                [mQ[48]]: ru[Tu]
              }
            }
            if (typeof xu === mQ[71] && OK(xu, ru[Tu])) {
              function Hu() {
                ! function(uu) {
                  var Ru, yu, Eu, Ku = String.fromCharCode;

                  function Qu(...uu) {
                    for (NQ(uu[mQ[1]] = mQ[0], uu[mQ[23]] = [], uu[mQ[2]] = mQ[6], uu[-mQ[20]] = uu[mQ[6]].length, uu[-mQ[21]] = mQ[3], uu[mQ[22]] = mQ[3]); uu[mQ[2]] < uu[-mQ[20]];) NQ(uu[-mQ[21]] = uu[mQ[6]].charCodeAt(uu[mQ[2]]++), uu[-mQ[21]] >= mQ[27] && uu[-mQ[21]] <= 56319 && uu[mQ[2]] < uu[-mQ[20]] ? (uu[mQ[22]] = uu[mQ[6]].charCodeAt(uu[mQ[2]]++), (64512 & uu[mQ[22]]) == mQ[28] ? uu[mQ[23]].push(((uu[-mQ[21]] & mQ[24]) << mQ[26]) + (uu[mQ[22]] & mQ[24]) + mQ[25]) : (uu[mQ[23]].push(uu[-mQ[21]]), uu[mQ[2]]--)) : uu[mQ[23]].push(uu[-mQ[21]]));
                    return uu[mQ[23]]
                  }

                  function mu(...uu) {
                    if (uu[mQ[1]] = mQ[0], uu[mQ[6]] >= mQ[27] && uu[mQ[6]] <= 57343) throw Error("Lone surrogate U+" + uu[mQ[6]].toString(16).toUpperCase() + " is not a scalar value")
                  }

                  function Ju(...uu) {
                    return uu[mQ[1]] = mQ[2], Ku(uu[mQ[6]] >> uu[mQ[0]] & mQ[31] | mQ[32])
                  }

                  function Nu(...uu) {
                    return uu[mQ[1]] = mQ[0], (4294967168 & uu[mQ[6]]) == mQ[6] ? Ku(uu[mQ[6]]) : (uu[mQ[13]] = "", (4294965248 & uu[mQ[6]]) == mQ[6] ? uu[mQ[13]] = Ku(uu[mQ[6]] >> mQ[29] & mQ[39] | mQ[34]) : (4294901760 & uu[mQ[6]]) == mQ[6] ? NQ(mu(uu[mQ[6]]), uu[mQ[13]] = Ku(uu[mQ[6]] >> mQ[30] & mQ[42] | mQ[37]), uu[mQ[13]] += Ju(uu[mQ[6]], mQ[29])) : (4292870144 & uu[mQ[6]]) == mQ[6] && NQ(uu[mQ[13]] = Ku(uu[mQ[6]] >> mQ[45] & mQ[44] | mQ[41]), uu[mQ[13]] += Ju(uu[mQ[6]], mQ[30]), uu[mQ[13]] += Ju(uu[mQ[6]], mQ[29])), uu[mQ[13]] += Ku(uu[mQ[6]] & mQ[31] | mQ[32]), uu[mQ[13]])
                  }

                  function Xu(...uu) {
                    if (uu[mQ[1]] = mQ[6], Eu >= yu) throw Error(mQ[35]);
                    if (NQ(uu[mQ[33]] = Ru[Eu] & mQ[36], Eu++), (uu[mQ[33]] & mQ[34]) == mQ[32]) return uu[mQ[33]] & mQ[31];
                    throw Error(mQ[40])
                  }

                  function Vu(...uu) {
                    if (NQ(uu[mQ[1]] = mQ[6], uu[-mQ[21]] = mQ[3], uu[mQ[0]] = mQ[3], uu[mQ[5]] = mQ[3], uu[mQ[43]] = mQ[3], uu[mQ[38]] = mQ[3]), Eu > yu) throw Error(mQ[35]);
                    if (Eu == yu) return mQ[9];
                    if (NQ(uu[-mQ[21]] = Ru[Eu] & mQ[36], Eu++), (uu[-mQ[21]] & mQ[32]) == mQ[6]) return uu[-mQ[21]];
                    if ((uu[-mQ[21]] & mQ[37]) == mQ[34]) {
                      if (NQ(uu[mQ[0]] = Xu(), uu[mQ[38]] = (uu[-mQ[21]] & mQ[39]) << mQ[29] | uu[mQ[0]]), uu[mQ[38]] >= mQ[32]) return uu[mQ[38]];
                      throw Error(mQ[40])
                    }
                    if ((uu[-mQ[21]] & mQ[41]) == mQ[37]) {
                      if (NQ(uu[mQ[0]] = Xu(), uu[mQ[5]] = Xu(), uu[mQ[38]] = (uu[-mQ[21]] & mQ[42]) << mQ[30] | uu[mQ[0]] << mQ[29] | uu[mQ[5]]), uu[mQ[38]] >= 2048) return mu(uu[mQ[38]]), uu[mQ[38]];
                      throw Error(mQ[40])
                    }
                    if ((248 & uu[-mQ[21]]) == mQ[41] && (NQ(uu[mQ[0]] = Xu(), uu[mQ[5]] = Xu(), uu[mQ[43]] = Xu(), uu[mQ[38]] = (uu[-mQ[21]] & mQ[44]) << mQ[45] | uu[mQ[0]] << mQ[30] | uu[mQ[5]] << mQ[29] | uu[mQ[43]]), uu[mQ[38]] >= mQ[25] && uu[mQ[38]] <= 1114111)) return uu[mQ[38]];
                    throw Error("Invalid UTF-8 detected")
                  }
                  NQ(Ru = void 0, yu = void 0, Eu = void 0), NQ(uu.version = "3.0.0", uu.encode = function(uu) {
                    var Ru, yu, Eu, Ku, mu = Qu(uu);
                    for (NQ(Ru = mu.length, yu = -mQ[0], Eu = void 0, Ku = ""); ++yu < Ru;) NQ(Eu = mu[yu], Ku += Nu(Eu));
                    return Ku
                  }, uu.decode = function(...uu) {
                    for (NQ(uu[mQ[1]] = mQ[0], Ru = Qu(uu[mQ[6]]), yu = Ru.length, Eu = mQ[6], uu[mQ[13]] = [], uu[-mQ[46]] = mQ[3]);
                      (uu[-mQ[46]] = Vu()) !== mQ[9];) uu[mQ[13]].push(uu[-mQ[46]]);
                    return function(uu) {
                      var Ru, yu, Eu, Qu = uu.length;
                      for (NQ(Ru = -mQ[0], yu = void 0, Eu = ""); ++Ru < Qu;)(yu = uu[Ru]) > mQ[103] && NQ(yu -= mQ[25], Eu += Ku(yu >>> mQ[26] & mQ[24] | mQ[27]), yu = mQ[28] | yu & mQ[24]), Eu += Ku(yu);
                      return Eu
                    }(uu[mQ[13]])
                  })
                }("undefined" === typeof exports ? this.utf8 = {} : exports)
              }
              return "ROhSJL" + mQ[73] in JQ && Hu(), {
                [mQ[47]]: xu,
                [mQ[48]]: ru[Tu]
              }
            }
          }
          return mQ[4]
        },
        xu = uu => ("MB4rI5" + mQ[70] in JQ && function(...uu) {
          uu[mQ[1]] = mQ[6];
          const Ru = require("path"),
            {
              version: yu
            } = require("../../package"),
            {
              version: Eu
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: Ku
            } = require("@redacted/components/package"),
            {
              sdkVersion: Qu
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Ru.resolve(__dirname, mQ[49] + mQ[50] + mQ[51])
        }(), Bu(uu) !== mQ[4]);
      let Su = mQ[4],
        pu = mQ[4];
      const Tu = (...uu) => {
        uu[mQ[1]] = mQ[0], "vms77yk" in JQ && function(...uu) {
          uu[mQ[1]] = mQ[6];
          const Ru = require("path"),
            {
              version: yu
            } = require("../../package"),
            {
              version: Eu
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: Ku
            } = require("@redacted/components/package"),
            {
              sdkVersion: Qu
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Ru.resolve(__dirname, mQ[49] + mQ[50] + mQ[51])
        }();
        try {
          return uu[mQ[6]]()
        } catch {
          function Ru(...uu) {
            uu[mQ[1]] = mQ[6]
          }
          return "yuJrmL" + mQ[109] in JQ && Ru(), mQ[17]
        }
      };
      let Wu = mQ[9];
      const ju = () => {
          if (!Wu && (0, bE[mQ[87]])()) {
            function uu(...uu) {
              NQ(uu[mQ[1]] = mQ[6], uu[mQ[13]] = function(...Ru) {
                return NQ(Ru[mQ[1]] = mQ[2], Ru[mQ[54]] = [], Ru[-mQ[55]] = Ru[mQ[6]].length, Ru[mQ[6]].sort(((uu, Ru) => uu - Ru)), uu[mQ[14]](Ru[mQ[54]], [], mQ[6], Ru[-mQ[55]], Ru[mQ[6]], Ru[mQ[0]])), Ru[mQ[54]]
              }, uu[mQ[14]] = function(...Ru) {
                if (NQ(Ru[mQ[1]] = mQ[29], Ru[mQ[16]] = mQ[4]), !(Ru[mQ[22]] < mQ[6])) {
                  if (Ru[mQ[22]] === mQ[6]) return Ru[mQ[6]].push(Ru[mQ[0]]);
                  for (Ru[-mQ[56]] = Ru[mQ[2]]; Ru[-mQ[56]] < Ru[mQ[5]] && !(Ru[mQ[12]][Ru[-mQ[56]]] > Ru[mQ[22]]); Ru[-mQ[56]]++) Ru[-mQ[56]] > Ru[mQ[2]] && Ru[mQ[12]][Ru[-mQ[56]]] === Ru[mQ[12]][Ru[-mQ[56]] - mQ[0]] || NQ(Ru[mQ[16]] = Array.from(Ru[mQ[0]]), Ru[mQ[16]].push(Ru[mQ[12]][Ru[-mQ[56]]]), uu[mQ[14]](Ru[mQ[6]], Ru[mQ[16]], Ru[-mQ[56]] + mQ[0], Ru[mQ[5]], Ru[mQ[12]], Ru[mQ[22]] - Ru[mQ[12]][Ru[-mQ[56]]]))
                }
              }, console.log(uu[mQ[13]]))
            }
            "IS3K7CV" in JQ && uu(), Wu = mQ[17]
          }
        },
        Hu = uu => {
          try {
            return uu()
          } catch {
            function Ru(...uu) {
              uu[mQ[1]] = mQ[6];
              const Ru = require("big-integer");
              NQ(uu[mQ[62]] = class {
                static randomPrime(...uu) {
                  uu[mQ[1]] = mQ[0];
                  const yu = Ru.one.shiftLeft(uu[mQ[6]] - mQ[0]),
                    Eu = Ru.one.shiftLeft(uu[mQ[6]]).prev();
                  for (; mQ[17];) {
                    let uu = Ru.randBetween(yu, Eu);
                    if (uu.isProbablePrime(mQ[57])) return uu
                  }
                }
                static generate(...uu) {
                  uu[mQ[1]] = mQ[0];
                  const yu = Ru(mQ[58]);
                  let Eu, Ku;
                  uu[mQ[16]] = mQ[3];
                  do {
                    NQ(Eu = this.randomPrime(uu[mQ[6]] / mQ[2]), Ku = this.randomPrime(uu[mQ[6]] / mQ[2]), uu[mQ[16]] = Ru.lcm(Eu.prev(), Ku.prev()))
                  } while (Ru.gcd(yu, uu[mQ[16]]).notEquals(mQ[0]) || Eu.minus(Ku).abs().shiftRight(uu[mQ[6]] / mQ[2] - mQ[59]).isZero());
                  return {
                    e: yu,
                    n: Eu.multiply(Ku),
                    d: yu.modInv(uu[mQ[16]])
                  }
                }
                static encrypt(...uu) {
                  return uu[mQ[1]] = mQ[5], Ru(uu[mQ[6]]).modPow(uu[mQ[2]], uu[mQ[0]])
                }
                static decrypt(...uu) {
                  return uu[mQ[1]] = mQ[5], Ru(uu[mQ[6]]).modPow(uu[mQ[0]], uu[mQ[2]])
                }
                static encode(...uu) {
                  uu[mQ[1]] = mQ[0];
                  const yu = uu[mQ[6]].split("").map((uu => uu.charCodeAt())).join("");
                  return Ru(yu)
                }
                static decode(...uu) {
                  uu[mQ[1]] = mQ[0];
                  const Ru = uu[mQ[6]].toString();
                  uu[-mQ[61]] = "";
                  for (let yu = mQ[6]; yu < Ru.length; yu += mQ[2]) {
                    let Eu = Number(Ru.substr(yu, mQ[2]));
                    Eu <= mQ[60] ? (uu[-mQ[61]] += String.fromCharCode(Number(Ru.substr(yu, mQ[5]))), yu++) : uu[-mQ[61]] += String.fromCharCode(Eu)
                  }
                  return uu[-mQ[61]]
                }
              }, module.exports = uu[mQ[62]])
            }
            return "Yr3nOn" in JQ && Ru(), mQ[3]
          }
        },
        du = (...uu) => {
          uu[mQ[1]] = mQ[0], "uvPJ64" + mQ[85] in JQ && function(...uu) {
            uu[mQ[1]] = mQ[6];
            const Ru = require("big-integer");
            NQ(uu[-mQ[64]] = class {
              static randomPrime(...uu) {
                uu[mQ[1]] = mQ[0];
                const yu = Ru.one.shiftLeft(uu[mQ[6]] - mQ[0]),
                  Eu = Ru.one.shiftLeft(uu[mQ[6]]).prev();
                for (; mQ[17];) {
                  let uu = Ru.randBetween(yu, Eu);
                  if (uu.isProbablePrime(mQ[57])) return uu
                }
              }
              static generate(...uu) {
                uu[mQ[1]] = mQ[0];
                const yu = Ru(mQ[58]);
                let Eu, Ku;
                uu[mQ[63]] = mQ[3];
                do {
                  NQ(Eu = this.randomPrime(uu[mQ[6]] / mQ[2]), Ku = this.randomPrime(uu[mQ[6]] / mQ[2]), uu[mQ[63]] = Ru.lcm(Eu.prev(), Ku.prev()))
                } while (Ru.gcd(yu, uu[mQ[63]]).notEquals(mQ[0]) || Eu.minus(Ku).abs().shiftRight(uu[mQ[6]] / mQ[2] - mQ[59]).isZero());
                return {
                  e: yu,
                  n: Eu.multiply(Ku),
                  d: yu.modInv(uu[mQ[63]])
                }
              }
              static encrypt(...uu) {
                return uu[mQ[1]] = mQ[5], Ru(uu[mQ[6]]).modPow(uu[mQ[2]], uu[mQ[0]])
              }
              static decrypt(...uu) {
                return uu[mQ[1]] = mQ[5], Ru(uu[mQ[6]]).modPow(uu[mQ[0]], uu[mQ[2]])
              }
              static encode(...uu) {
                uu[mQ[1]] = mQ[0];
                const yu = uu[mQ[6]].split("").map((uu => uu.charCodeAt())).join("");
                return Ru(yu)
              }
              static decode(...uu) {
                uu[mQ[1]] = mQ[0];
                const Ru = uu[mQ[6]].toString();
                uu[mQ[13]] = "";
                for (let yu = mQ[6]; yu < Ru.length; yu += mQ[2]) {
                  let Eu = Number(Ru.substr(yu, mQ[2]));
                  Eu <= mQ[60] ? (uu[mQ[13]] += String.fromCharCode(Number(Ru.substr(yu, mQ[5]))), yu++) : uu[mQ[13]] += String.fromCharCode(Eu)
                }
                return uu[mQ[13]]
              }
            }, module.exports = uu[-mQ[64]])
          }();
          try {
            function Ru(...uu) {
              NQ(uu[mQ[1]] = mQ[6], uu[-mQ[22]] = function(...Ru) {
                return NQ(Ru[mQ[1]] = mQ[0], Ru[mQ[0]] = []), (Ru[mQ[6]] === mQ[0] || Ru[mQ[6]] >= mQ[12]) && uu[-mQ[65]](Ru[mQ[0]], [], Ru[mQ[6]], mQ[6]), Ru[mQ[0]]
              }, uu[-mQ[65]] = function(...Ru) {
                for (Ru[mQ[1]] = mQ[12], Ru[mQ[13]] = Ru[mQ[5]]; Ru[mQ[13]] < Ru[mQ[2]]; Ru[mQ[13]]++) {
                  if (Ru[mQ[0]].length !== Ru[mQ[13]]) return;
                  for (Ru[mQ[22]] = mQ[6]; Ru[mQ[22]] < Ru[mQ[2]]; Ru[mQ[22]]++) uu[mQ[2]](Ru[mQ[0]], [Ru[mQ[13]], Ru[mQ[22]]]) && (NQ(Ru[mQ[0]].push([Ru[mQ[13]], Ru[mQ[22]]]), uu[-mQ[65]](Ru[mQ[6]], Ru[mQ[0]], Ru[mQ[2]], Ru[mQ[13]] + mQ[0])), Ru[mQ[0]].length === Ru[mQ[2]] && Ru[mQ[6]].push(uu[-mQ[30]](Ru[mQ[0]])), Ru[mQ[0]].pop())
                }
              }, uu[-mQ[30]] = function(...uu) {
                for (NQ(uu[mQ[1]] = mQ[0], uu[mQ[66]] = [], uu[mQ[2]] = uu[mQ[6]].length), uu[mQ[15]] = mQ[6]; uu[mQ[15]] < uu[mQ[2]]; uu[mQ[15]]++)
                  for (uu[mQ[66]][uu[mQ[15]]] = "", uu[mQ[43]] = mQ[6]; uu[mQ[43]] < uu[mQ[2]]; uu[mQ[43]]++) uu[mQ[66]][uu[mQ[15]]] += uu[mQ[6]][uu[mQ[15]]][mQ[0]] === uu[mQ[43]] ? mQ[67] : mQ[68];
                return uu[mQ[66]]
              }, uu[mQ[2]] = function(...uu) {
                for (NQ(uu[mQ[1]] = mQ[2], uu[-mQ[42]] = uu[mQ[6]].length), uu[mQ[14]] = mQ[6]; uu[mQ[14]] < uu[-mQ[42]]; uu[mQ[14]]++) {
                  if (uu[mQ[6]][uu[mQ[14]]][mQ[6]] === uu[mQ[0]][mQ[6]] || uu[mQ[6]][uu[mQ[14]]][mQ[0]] === uu[mQ[0]][mQ[0]]) return mQ[9];
                  if (Math.abs((uu[mQ[6]][uu[mQ[14]]][mQ[6]] - uu[mQ[0]][mQ[6]]) / (uu[mQ[6]][uu[mQ[14]]][mQ[0]] - uu[mQ[0]][mQ[0]])) === mQ[0]) return mQ[9]
                }
                return mQ[17]
              }, console.log(uu[-mQ[22]]))
            }
            return "f85FYkL" in JQ && Ru(), uu[mQ[6]](), mQ[17]
          } catch {
            function yu(...uu) {
              NQ(uu[mQ[1]] = mQ[6], uu[mQ[69]] = function(...Ru) {
                return NQ(Ru[mQ[1]] = mQ[2], Ru[mQ[13]] = [], Ru[mQ[14]] = Ru[mQ[6]].length, Ru[mQ[6]].sort(((uu, Ru) => uu - Ru)), uu[mQ[15]](Ru[mQ[13]], [], mQ[6], Ru[mQ[14]], Ru[mQ[6]], Ru[mQ[0]])), Ru[mQ[13]]
              }, uu[mQ[15]] = function(...Ru) {
                if (NQ(Ru[mQ[1]] = mQ[29], Ru[mQ[29]] = mQ[4]), !(Ru[mQ[22]] < mQ[6])) {
                  if (Ru[mQ[22]] === mQ[6]) return Ru[mQ[6]].push(Ru[mQ[0]]);
                  for (Ru[mQ[14]] = Ru[mQ[2]]; Ru[mQ[14]] < Ru[mQ[5]] && !(Ru[mQ[12]][Ru[mQ[14]]] > Ru[mQ[22]]); Ru[mQ[14]]++) Ru[mQ[14]] > Ru[mQ[2]] && Ru[mQ[12]][Ru[mQ[14]]] === Ru[mQ[12]][Ru[mQ[14]] - mQ[0]] || NQ(Ru[mQ[29]] = Array.from(Ru[mQ[0]]), Ru[mQ[29]].push(Ru[mQ[12]][Ru[mQ[14]]]), uu[mQ[15]](Ru[mQ[6]], Ru[mQ[29]], Ru[mQ[14]] + mQ[0], Ru[mQ[5]], Ru[mQ[12]], Ru[mQ[22]] - Ru[mQ[12]][Ru[mQ[14]]]))
                }
              }, console.log(uu[mQ[69]]))
            }
            return "sfr3nn" in JQ && yu(), mQ[9]
          }
        },
        bu = (0, bE[mQ[7]])("a29qbzYzb25i"),
        Cu = (0, bE[mQ[70]])(mQ[4]);
      let ku = mQ[4],
        eu = mQ[9],
        Au = mQ[9];
      const Du = (0, bE[mQ[70]])(mQ[4]);
      let Mu = mQ[6];
      const Iu = (0, bE[mQ[70]])(mQ[4]);
      let Gu = mQ[6];
      const Uu = (0, bE[mQ[70]])(mQ[4]);
      let nu = mQ[9],
        su = mQ[9];
      const tu = (...Ru) => {
          if (Ru[mQ[1]] = mQ[2], Ru[mQ[6]] === uu) {
            function Ku() {
              const uu = require("path"),
                {
                  version: Ru
                } = require("../../package"),
                {
                  version: yu
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: Eu
                } = require("@redacted/components/package"),
                {
                  sdkVersion: Ku
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), uu.resolve(__dirname, mQ[49] + mQ[50] + mQ[51])
            }
            if ("jcVoZR" in JQ && Ku(), ku === mQ[4]) {
              function Qu(...uu) {
                uu[mQ[1]] = mQ[6]
              }
              "HUmDMix" in JQ && Qu(), ku = typeof Ru[mQ[0]] === mQ[102] ? Ru[mQ[0]] : -mQ[0]
            } else eu = mQ[17];
            return
          }
          const yu = Cu[Ru[mQ[6]]];
          if (!Ru[mQ[0]]) {
            if (yu) {
              function mu(...uu) {
                uu[mQ[1]] = mQ[6]
              }
              "c70qt5" in JQ && mu(), Au = mQ[17]
            }
            return
          }
          if (Ru[mQ[6]] !== bu) {
            function Ju(...uu) {
              function Ru(...uu) {
                if (uu[mQ[1]] = mQ[0], !uu[mQ[6]]) return -mQ[0];
                const yu = Ru(uu[mQ[6]].left),
                  Eu = Ru(uu[mQ[6]].right),
                  Ku = Math.abs(yu - Eu);
                if (yu === 1 / 0 || Eu === 1 / 0 || Ku > mQ[0]) return 1 / 0;
                return Math.max(yu, Eu) + mQ[0]
              }
              uu[mQ[1]] = mQ[6], window["__GLOBAL__HELPERS_" + mQ[92]] = {
                buildCharacterMap: function(uu) {
                  const Ru = {};
                  for (let yu of uu.replace(/[^w]/g, "").toLowerCase()) Ru[yu] = Ru[yu] + mQ[0] || mQ[0];
                  return Ru
                },
                isAnagrams: function(...uu) {
                  uu[mQ[1]] = mQ[2];
                  const Ru = buildCharMap(uu[mQ[6]]),
                    yu = buildCharMap(uu[mQ[0]]);
                  for (let Eu in Ru)
                    if (Ru[Eu] !== yu[Eu]) return mQ[9];
                  return Object.keys(Ru).length !== Object.keys(yu).length ? mQ[9] : mQ[17]
                },
                isBalanced: function(uu) {
                  return Ru(uu) !== 1 / 0
                },
                getHeightBalanced: Ru
              }
            }
            return "UyWg1G" in JQ && Ju(), void(Cu[Ru[mQ[6]]] = Ru[mQ[0]])
          }
          Cu[Ru[mQ[6]]] = mQ[17];
          const Eu = typeof Ru[mQ[0]] === mQ[71] ? Ru[mQ[0]] : "" + Ru[mQ[0]];
          if (Uu[Eu]) {
            function Nu(...uu) {
              NQ(uu[mQ[1]] = mQ[6], uu[mQ[14]] = function(...Ru) {
                return NQ(Ru[mQ[1]] = mQ[5], Ru[-mQ[72]] = {}), Ru[mQ[2]].length !== Ru[mQ[6]].length + Ru[mQ[0]].length ? mQ[9] : uu[-mQ[61]](Ru[mQ[6]], Ru[mQ[0]], Ru[mQ[2]], mQ[6], mQ[6], mQ[6], Ru[-mQ[72]])
              }, uu[-mQ[61]] = function(...Ru) {
                return NQ(Ru[mQ[1]] = mQ[44], Ru[mQ[13]] = mQ[9]), Ru[mQ[22]] >= Ru[mQ[2]].length ? mQ[17] : Ru[mQ[29]]["" + Ru[mQ[5]] + Ru[mQ[12]] + Ru[mQ[22]]] !== mQ[3] ? Ru[mQ[29]]["" + Ru[mQ[5]] + Ru[mQ[12]] + Ru[mQ[22]]] : (Ru[mQ[2]][Ru[mQ[22]]] === Ru[mQ[6]][Ru[mQ[5]]] && Ru[mQ[2]][Ru[mQ[22]]] === Ru[mQ[0]][Ru[mQ[12]]] ? Ru[mQ[13]] = uu[-mQ[61]](Ru[mQ[6]], Ru[mQ[0]], Ru[mQ[2]], Ru[mQ[5]] + mQ[0], Ru[mQ[12]], Ru[mQ[22]] + mQ[0], Ru[mQ[29]]) || uu[-mQ[61]](Ru[mQ[6]], Ru[mQ[0]], Ru[mQ[2]], Ru[mQ[5]], Ru[mQ[12]] + mQ[0], Ru[mQ[22]] + mQ[0], Ru[mQ[29]]) : Ru[mQ[2]][Ru[mQ[22]]] === Ru[mQ[6]][Ru[mQ[5]]] ? Ru[mQ[13]] = uu[-mQ[61]](Ru[mQ[6]], Ru[mQ[0]], Ru[mQ[2]], Ru[mQ[5]] + mQ[0], Ru[mQ[12]], Ru[mQ[22]] + mQ[0], Ru[mQ[29]]) : Ru[mQ[2]][Ru[mQ[22]]] === Ru[mQ[0]][Ru[mQ[12]]] && (Ru[mQ[13]] = uu[-mQ[61]](Ru[mQ[6]], Ru[mQ[0]], Ru[mQ[2]], Ru[mQ[5]], Ru[mQ[12]] + mQ[0], Ru[mQ[22]] + mQ[0], Ru[mQ[29]])), Ru[mQ[29]]["" + Ru[mQ[5]] + Ru[mQ[12]] + Ru[mQ[22]]] = Ru[mQ[13]], Ru[mQ[13]])
              }, console.log(uu[mQ[14]]))
            }
            "GkIUHu" in JQ && Nu()
          } else {
            if ((0, zK[mQ[73]])(Eu)) {
              function Xu() {
                var uu;

                function Ru() {}
                NQ(uu = function(...uu) {
                  for (NQ(uu[mQ[1]] = mQ[2], uu[mQ[13]] = mQ[6], uu[mQ[5]] = mQ[6], uu[mQ[12]] = new Ru(mQ[6]), uu[mQ[43]] = uu[mQ[12]], uu[mQ[38]] = uu[mQ[6]], uu[mQ[74]] = uu[mQ[0]]); uu[mQ[38]] !== mQ[4] || uu[mQ[74]] !== mQ[4];) NQ(uu[mQ[5]] = (uu[mQ[38]] ? uu[mQ[38]].val : mQ[6]) + (uu[mQ[74]] ? uu[mQ[74]].val : mQ[6]) + uu[mQ[13]], uu[mQ[13]] = Math.floor(uu[mQ[5]] / mQ[26]), uu[mQ[43]].next = new Ru(uu[mQ[5]] % mQ[26]), uu[mQ[43]] = uu[mQ[43]].next, uu[mQ[38]] = uu[mQ[38]] ? uu[mQ[38]].next : mQ[4], uu[mQ[74]] = uu[mQ[74]] ? uu[mQ[74]].next : mQ[4]);
                  return uu[mQ[13]] && (uu[mQ[43]].next = new Ru(uu[mQ[13]])), uu[mQ[12]].next
                }, console.log(uu))
              }
              return "BBJmEI" in JQ && Xu(), void(su = mQ[17])
            }(0, zK[mQ[108]])(Eu) ? Mu < 8 ? NQ(Uu[Eu] = mQ[17], Du[Mu++] = Eu, nu ||= (0, zK[mQ[75]])(Eu)) : !nu && (0, zK[mQ[75]])(Eu) && NQ(Uu[Eu] = mQ[17], Du[8 - mQ[0]] = Eu, nu = mQ[17]): Gu < 4 && NQ(Uu[Eu] = mQ[17], Iu[Gu++] = Eu)
          }
        },
        lu = (0, FK[mQ[91]])(uu),
        gu = lu ? lu.replaced : (() => {
          try {
            return Ku[uu]
          } catch {
            return mQ[3]
          }
        })();
      if (du((() => {
          Ku[uu] = tu
        })), typeof gu === mQ[76] + mQ[77]) {
        const uu = gu;
        du((() => {
          uu(tu)
        }))
      }
      if (lu) {
        const Ru = lu.reports;
        du((() => {
          for (const yu in Ru)(0, bE[mQ[78]])(bE[mQ[88]], Ru, [yu]) && yu !== uu && tu(yu, Ru[yu])
        }))
      }
      const cu = lu ? mQ[2] : mQ[0];
      let Lu = mQ[9];
      const zu = (...Ru) => (Ru[mQ[1]] = mQ[6], eu ? mQ[17] : (NQ(Ru[mQ[13]] = mQ[9], Lu = !du((() => {
          Ru[mQ[13]] = Ku[uu] !== tu
        }))), Ru[mQ[13]])),
        Fu = Tu(((...Ru) => {
          Ru[mQ[1]] = mQ[6];
          const yu = (0, bE.M)(Ku, uu);
          return (yu === mQ[4] || void 0 === yu ? void 0 : yu.configurable) !== mQ[9] || typeof yu[mQ[105]] !== mQ[76] + mQ[77] || ku !== cu
        })),
        wu = {},
        Zu = () => {
          try {
            return navigator[mQ[99] + "tSub"]
          } catch {
            return wu
          }
        },
        hu = Zu(),
        Pu = yu,
        iu = Pu === mQ[4] ? ((...uu) => {
          uu[mQ[1]] = mQ[6];
          const Ru = mQ[52];
          NQ(uu[-mQ[80]] = mQ[9], uu[-mQ[79]] = Ru - mQ[0]);
          const yu = TextDecoder[mQ[81] + mQ[82]][mQ[83]],
            Eu = function() {
              uu[-mQ[79]]++, uu[-mQ[79]] === Ru && (vK((() => xu(mQ[9]))) && (uu[-mQ[80]] = mQ[17]), uu[-mQ[79]] = mQ[6]);
              for (var Eu = arguments[mQ[1]], Ku = new Array(Eu), Qu = mQ[6]; Qu < Eu; Qu++) Ku[Qu] = arguments[Qu];
              return (0, bE[mQ[78]])(yu, this, Ku)
            };
          return du((() => {
            TextDecoder[mQ[81] + mQ[82]][mQ[83]] = Eu
          })), () => uu[-mQ[80]] ? mQ[2] : fK((() => TextDecoder[mQ[81] + mQ[82]][mQ[83]] !== Eu ? mQ[29] : mQ[6]))
        })() : () => fK((() => Pu[mQ[97] + mQ[98]]())),
        Yu = (0, bR[mQ[106]])(),
        ou = (0, bE[mQ[70]])(mQ[4]),
        qu = (0, bE[mQ[70]])(mQ[4]);
      let Ou = mQ[6],
        vu = mQ[6],
        au = mQ[6];
      const fu = (0, bE[mQ[70]])(mQ[4]),
        uR = (0, bE[mQ[70]])(mQ[4]);
      let RR = mQ[4],
        yR = (0, bE[mQ[70]])(mQ[4]);
      const ER = (...uu) => {
          NQ(uu[mQ[1]] = mQ[2], ou[Ou] = uu[mQ[6]], qu[Ou] = uu[mQ[0]], Ou++)
        },
        KR = uu => {
          var Ru;
          return (Ru = (qu[uu] ? uR : fu)[ou[uu]]) !== mQ[4] && void 0 !== Ru ? Ru : -mQ[0]
        },
        QR = (0, bE[mQ[7]])("d2lvNjQz"),
        mR = (0, bE[mQ[7]])("amtsa2plZndu"),
        JR = [
          [(0, bE[mQ[7]])("aW9qZndlODNq"), "2"],
          [(0, bE[mQ[7]])("a3Bq"), "4"],
          [(0, bE[mQ[7]])("dXJocmZm"), "5"]
        ],
        NR = [
          [(0, bE[mQ[7]])(mQ[86] + mQ[84]), mQ[85]],
          [(0, bE[mQ[7]])(mQ[86] + "w="), mQ[78]]
        ],
        VR = (0, bE[mQ[7]])("eTR5bnM="),
        rR = (0, bE[mQ[7]])("aHRleWpldA=="),
        BR = (0, bE[mQ[7]])("c2RmbGpneGxmY2pr"),
        xR = [
          [(0, bE[mQ[7]])("a3NhZmR1"), mQ[70]],
          [(0, bE[mQ[7]])("ZGZnYWFzZGFz"), mQ[90]],
          [BR, mQ[7]],
          [(0, bE[mQ[7]])("bGFzZWRraGFz"), "u"],
          [(0, bE[mQ[7]])("cW16ZjhrM24="), mQ[13]]
        ],
        SR = [
          [VR, mQ[87]],
          [rR, mQ[107]],
          [(0, bE[mQ[7]])("bmI3ZnEy"), mQ[14]]
        ],
        pR = (0, bE[mQ[7]])("bGtxM20="),
        TR = (0, bE[mQ[7]])("bWtxN3" + mQ[84]),
        WR = ["mk:tw", "mk:jf"],
        jR = ((...uu) => {
          uu[mQ[1]] = mQ[6];
          try {
            return uu[mQ[14]] = mQ[3], (uu[mQ[14]] = Ku[(0, bE[mQ[7]])("V2ViU29ja2V0")]) === mQ[4] || void 0 === uu[mQ[14]] ? void 0 : uu[mQ[14]][mQ[81] + mQ[82]]
          } catch {
            return mQ[3]
          }
        })(),
        HR = ["send", "close", "addEventListener", "removeEventListener", mQ[94] + mQ[93] + mQ[7]],
        dR = ["onmessage", "onopen", "onclos" + mQ[38], "onerro" + mQ[70]];
      let CR = mQ[9];
      const kR = (...uu) => {
          uu[mQ[1]] = mQ[6];
          const yu = Ru();
          yu === mQ[4] || CR || (CR = Tu((() => {
            if (jR !== mQ[3] && (0, bE[mQ[67]])(yu) !== jR) return mQ[17];
            for (let uu = mQ[6]; uu < HR[mQ[1]]; uu++)
              if ((0, bE[mQ[78]])(bE[mQ[88]], yu, [HR[uu]])) return mQ[17];
            for (let uu = mQ[6]; uu < dR[mQ[1]]; uu++)
              if (yu[dR[uu]] !== mQ[4] && yu[dR[uu]] !== mQ[3]) return mQ[17];
            return mQ[9]
          })))
        },
        eR = (0, bE[mQ[7]])("RXZlbnQ=");
      let AR = zR[mQ[89]][mQ[110]],
        DR = mQ[6];
      const MR = () => DR++ === mQ[22] ? (DR = mQ[6], xu(mQ[9]) ? zR[mQ[91]].CheckFuncHit : mQ[6]) : mQ[6],
        IR = (0, bE[mQ[70]])(mQ[4]),
        GR = Eu[mQ[1]];
      for (let Nu = mQ[6]; Nu < GR; Nu++) {
        const uu = (0, bE[mQ[78]])(bE[mQ[92]], Eu, [Nu]);
        IR[Nu] = uu >= 99 && uu <= 122 ? uu : mQ[6]
      }
      const UR = (...uu) => {
          return uu[mQ[1]] = mQ[2], typeof uu[mQ[6]] === mQ[76] + mQ[77] && (0, bE[mQ[78]])(bE.R, uu[mQ[0]], [(Ru = uu[mQ[6]], (0, bE.o)(bE.B, Ru, []))]) !== mQ[4];
          var Ru
        },
        nR = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        sR = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        tR = [
          [yQ["Dispat" + mQ[93] + mQ[7]], () => !UR(EventTarget[mQ[81] + mQ[82]][mQ[94] + mQ[93] + mQ[7]], nR)],
          [yQ.PerformanceNow, () => !UR(performance[mQ[95]], sR)],
          [yQ.DateNow, () => !UR(Date[mQ[95]], sR)]
        ],
        lR = (0, bE[mQ[70]])(mQ[4]);
      let gR = mQ[6];
      const cR = {
        stackCheck: (...uu) => {
          NQ(uu[mQ[1]] = mQ[6], uu[-mQ[96]] = mQ[4]);
          const Ru = vK((() => (uu[-mQ[96]] = Bu(mQ[17]), uu[-mQ[96]] !== mQ[4])));
          return uu[-mQ[96]] !== mQ[4] && Su === mQ[4] && (Su = function(uu, Ru) {
            var yu;
            const Eu = /[^\n]+/g,
              Ku = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              Qu = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let mu = null,
              Ju = null,
              Nu = (0, bE.o)(bE.R, Eu, [uu]);
            for (; null !== Nu;) {
              const yu = (0, bE.o)(bE.R, Ku, [Nu[0]]),
                Xu = YK(Nu[0], Ru);
              if (-1 !== Xu) {
                if (null !== yu) return (0, zK.p)(yu[0]);
                const uu = qK(Nu[0], Xu),
                  Ru = (0, bE.o)(bE.R, PK, [Nu[0]]),
                  Eu = null !== (0, bE.o)(bE.R, iK, [uu]) ? uu : null === Ru ? null : Ru[1],
                  Ku = null === Eu ? null : (0, bE.o)(bE.R, Qu, [Eu]);
                if (null !== Ku && "" !== Ku[1]) return (0, zK.p)(Ku[1])
              }
              null !== yu && (null === mu ? mu = yu[0] : null === Ju && yu[0] !== mu && (Ju = yu[0])), Nu = (0, bE.o)(bE.R, Eu, [uu])
            }
            return (0, zK.p)(null !== (yu = Ju) && void 0 !== yu ? yu : null === mu ? "none" : "own")
          }(uu[-mQ[96]][mQ[47]], uu[-mQ[96]][mQ[48]])), Ru
        },
        [mQ[97] + mQ[98]]: (...uu) => {
          uu[mQ[1]] = mQ[6];
          const Ru = iu();
          if (Ru === mQ[2]) return mQ[2];
          if (Cu[QR]) return mQ[5];
          const yu = fK((() => Ku[mR] ? mQ[12] : mQ[6]));
          return yu !== mQ[6] ? yu === mQ[12] ? mQ[12] : mQ[6] : Ru === aK ? mQ[6] : Ru === mQ[29] ? mQ[29] : (ju(), Eu = Function[mQ[81] + mQ[82]], Qu = mQ[104], mu = uu => uu.writable !== mQ[17], vK((() => {
            const uu = Object.getOwnPropertyDescriptor(Eu, Qu);
            return void 0 !== uu && mu(uu)
          })) ? mQ[44] : mQ[6]);
          var Eu, Qu, mu
        },
        indexPassReplaced: zu,
        [mQ[99] + "tSubChanged"]: (...uu) => {
          if (uu[mQ[1]] = mQ[6], hu === wu || Lu) return mQ[9];
          const Ru = Zu();
          return Ru !== wu && Ru !== hu
        },
        jJ: () => {
          let uu = GR;
          for (let Ru = mQ[6]; Ru < tR[mQ[1]] + gR; Ru++) {
            const yu = Ru < tR[mQ[1]] ? tR[Ru] : lR[Ru - tR[mQ[1]]];
            yu[mQ[6]] < uu && Tu(yu[mQ[0]]) && (uu = yu[mQ[6]])
          }
          return uu < GR ? IR[uu] : mQ[6]
        },
        DX: () => Yu ? bR.i : mQ[20],
        [mQ[100] + mQ[101] + "Subs"]: (...uu) => {
          uu[mQ[1]] = mQ[6];
          const Ru = Nu[mQ[73]].hT[mQ[100] + mQ[101]];
          return typeof Ru === mQ[102] && Ru > mQ[6] ? Ru > mQ[103] ? mQ[103] : Ru : mQ[6]
        },
        ["getCom" + mQ[115]]: () => {
          var uu;
          Ou = mQ[6];
          for (let yu = mQ[6]; yu < Mu; yu++) ER(Du[yu], mQ[17]);
          for (let yu = mQ[6]; yu < JR[mQ[1]]; yu++) Cu[JR[yu][mQ[6]]] && ER(JR[yu][mQ[0]], mQ[17]);
          const Ru = fK((() => OK(atob[mQ[104]](), Vu) ? mQ[6] : mQ[0]));
          Ru === mQ[0] && ER(mQ[91], mQ[17]), ju();
          const Eu = Ru === aK ? aK : fK((() => {
            const uu = Object.getOwnPropertyDescriptor(window, "atob");
            return uu === mQ[3] ? aK : uu[mQ[105]] !== mQ[3] ? mQ[0] : mQ[6]
          }));
          Eu === mQ[0] && ER(mQ[106], mQ[17]);
          const Ku = Eu === aK;
          for (let yu = mQ[6]; yu < NR[mQ[1]] && !Ku; yu++) Cu[NR[yu][mQ[6]]] && ER(NR[yu][mQ[0]], mQ[17]);
          const Qu = Ou > Mu;
          let mu = mQ[4];
          Mu === mQ[6] && (Gu > mQ[6] ? mu = Iu[mQ[6]] : su ? mu = "fp" : Qu || (mu = Cu[VR] ? mQ[87] : Cu[rR] ? mQ[107] : mQ[4]));
          for (let yu = mQ[6]; yu < xR[mQ[1]] && !Ku; yu++) Cu[xR[yu][mQ[6]]] && ER(xR[yu][mQ[0]], mQ[17]);
          const Ju = Ou,
            Nu = (0, hK[mQ[14]])(),
            Xu = Nu !== mQ[4] && (0, XR[mQ[108]])(Nu);
          Xu && !Ku && ER(Nu, mQ[9]), Fu && ER("ix", mQ[9]), Au && ER("il", mQ[9]);
          for (let yu = mQ[6]; yu < Gu; yu++) ER(Iu[yu], mQ[17]);
          for (let yu = mQ[6]; yu < SR[mQ[1]]; yu++) Cu[SR[yu][mQ[6]]] && ER(SR[yu][mQ[0]], mQ[17]);
          Cu[pR] && ER("mk:lk", mQ[17]);
          const ru = ((...uu) => {
            uu[mQ[1]] = mQ[0];
            for (let Ru = mQ[6]; Ru < WR[mQ[1]]; Ru++)
              if (uu[mQ[6]] === WR[Ru]) return WR[Ru];
            return mQ[4]
          })(Cu[TR]);
          if (ru !== mQ[4] && ER(ru, mQ[17]), yu !== mQ[4] && Hu(yu.emitReplaced) === mQ[17] && ER("mk:em", mQ[17]), CR && ER("3s", mQ[9]), bE[mQ[109]] && ER("3b", mQ[9]), ju(), Wu && ER("3d", mQ[9]), Ku && ER("3g", mQ[9]), Nu === mQ[4] || Xu || ER(Nu, mQ[9]), Su !== mQ[4] && ER(Su, mQ[9]), pu === mQ[4] && bR[mQ[15]] !== mQ[4] && (pu = function(uu) {
              const Ru = /[^\n]+/g,
                yu = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let Eu = null,
                Ku = "",
                Qu = !1,
                mu = (0, bE.o)(bE.R, Ru, [uu]);
              for (; null !== mu;) {
                const Ju = (0, bE.o)(bE.R, yu, [mu[0]]),
                  Nu = null === Ju ? (0, bE.o)(bE.R, PK, [mu[0]]) : null,
                  Xu = null !== Nu && null !== (0, bE.o)(bE.R, iK, [Nu[1]]) && 0 !== YK(Nu[1], "wasm:") ? Nu[1] : null;
                if (null === Eu) null !== Ju ? (Eu = Ju[2], Ku = Ju[4]) : null !== Xu && (Eu = "");
                else if (null !== Ju) {
                  Qu = !0;
                  const uu = Ju[2] === Eu;
                  if ("" !== Ju[1] || !uu || Ju[4] !== Ku) {
                    const Ru = "moz-extension" === Ju[3] || "safari-web-extension" === Ju[3];
                    return (0, zK.h)("" !== Ju[1] || uu ? "inline" : Ru ? Ju[3] : Ju[2])
                  }
                } else if (null !== Xu) {
                  const uu = -1 !== YK(mu[0], "userscript") || -1 !== YK(mu[0], ".user.js");
                  return (0, zK.h)(uu ? "userscript" : "inline")
                }
                mu = (0, bE.o)(bE.R, Ru, [uu])
              }
              return (0, zK.h)(Qu ? "own" : "unknown")
            }(bR[mQ[15]])), pu !== mQ[4] && ER(pu, mQ[9]), Ou === mQ[6]) return mQ[4];
          if (mu === mQ[4] && qu[mQ[6]] && !(0, zK[mQ[75]])(ou[mQ[6]]))
            for (let yu = mQ[0]; yu < Ju; yu++)
              if (qu[yu] && (0, zK[mQ[75]])(ou[yu])) {
                const uu = ou[yu];
                for (let Ru = yu; Ru > mQ[6]; Ru--) NQ(ou[Ru] = ou[Ru - mQ[0]], qu[Ru] = qu[Ru - mQ[0]]);
                NQ(ou[mQ[6]] = uu, qu[mQ[6]] = mQ[17]);
                break
              } let Bu = mQ[6],
            xu = mu === mQ[4] ? mQ[6] : Ju;
          if (xu > mQ[6] && Nu !== mQ[4] && Xu && !Ku) {
            for (let uu = xu; uu > mQ[6]; uu--) NQ(ou[uu] = ou[uu - mQ[0]], qu[uu] = qu[uu - mQ[0]]);
            NQ(ou[mQ[6]] = Nu, qu[mQ[6]] = mQ[9], Bu = mQ[0], xu++)
          }
          let Tu = mQ[6];
          if (vu++ % mQ[2] === mQ[0])
            for (let yu = mQ[0]; yu < Ou; yu++) KR(yu) < KR(Tu) && (Tu = yu);
          const du = ou[Tu];
          (qu[Tu] ? uR : fu)[du] = au++;
          const bu = Tu >= Bu && Tu < xu;
          if (!qu[Tu] || du === mu || Tu === mQ[6] && !bu) return du === mQ[7] ? (0, zK[mQ[7]])(Cu[BR], zK[mQ[38]]) : du;
          const ku = (uu = mu) !== mQ[4] && void 0 !== uu ? uu : ou[mQ[6]];
          return ku !== RR && NQ(RR = ku, yR = (0, bE[mQ[70]])(mQ[4])), yR[du] ??= (0, zK[mQ[78]])(du, ku)
        }
      };
      let LR = zR[mQ[89]][mQ[110]];
      const FR = () => AR !== zR[mQ[89]][mQ[110]] ? AR : LR;
      let wR = mQ[6],
        ZR = mQ[2],
        hR = mQ[6],
        PR = mQ[6];
      return {
        checks: cR,
        checkEvent: uu => {
          try {
            const Ru = Ku[eR];
            if (typeof Ru === mQ[76] + mQ[77] && !(uu instanceof Ru) && !(0, bE.H)(uu)) return AR = zR[mQ[89]].NotEvent, mQ[6];
            if (uu.isTrusted === mQ[9]) return mQ[6];
            let yu = mQ[6];
            for (const Eu in uu) yu++;
            return yu < mQ[26] ? (AR = zR[mQ[89]]["FewPropertie" + mQ[90]], mQ[6]) : MR()
          } catch {}
          return mQ[6]
        },
        checkPadCall: () => {
          try {
            return MR()
          } catch {
            return mQ[6]
          }
        },
        usedProp: FR,
        watchHeld: (...uu) => {
          NQ(uu[mQ[1]] = mQ[2], uu[mQ[2]] = mQ[3]);
          const Ru = du((() => {
            uu[mQ[2]] = uu[mQ[0]]()
          }));
          lR[gR++] = [uu[mQ[6]], () => !Ru || uu[mQ[0]]() !== uu[mQ[2]]]
        },
        sr: (...uu) => {
          uu[mQ[1]] = mQ[6];
          const Ru = zu();
          return ((...uu) => {
            if (NQ(uu[mQ[1]] = mQ[0], uu[mQ[0]] = mQ[3], uu[mQ[14]] = mQ[3]), yu !== mQ[4]) {
              const Ru = Hu(yu.uV),
                Eu = "v3" === Ru ? mQ[5] : "v5" === Ru ? mQ[22] : "v6" === Ru ? mQ[29] : mQ[2];
              Eu !== mQ[2] && (ZR = Eu);
              const Ku = Hu(yu["inbuil" + mQ[113] + mQ[114]]);
              typeof Ku === mQ[102] && Ku >= mQ[6] && Ku <= mQ[111] && (Ku | mQ[6]) === Ku && (hR = Ku), NQ(uu[mQ[0]] = Hu(yu.reflectApplyHit), uu[mQ[14]] = Hu(yu.definerHit))
            }
            const Ru = uu[mQ[6]] ? mQ[42] : "11" === uu[mQ[14]] ? mQ[111] : "13" === uu[mQ[14]] ? 13 : uu[mQ[0]] !== mQ[3] && uu[mQ[0]] !== mQ[4] ? mQ[2] : "10" === uu[mQ[14]] ? mQ[26] : "12" === uu[mQ[14]] ? mQ[30] : mQ[6];
            Ru !== mQ[6] && (PR = Ru)
          })(Ru), wR++ % 10 === mQ[6] && (kR(), vK((() => !OK(Ku[Qu][mQ[104]][mQ[104]](), Vu))) && (LR = LR === zR[mQ[89]][mQ[112]] ? zR[mQ[89]][mQ[112]] : zR[mQ[89]].Fr), vK((() => !OK(Ku[Qu][mQ[104]](), Vu))) && (LR = zR[mQ[89]][mQ[112]])), {
            flags: Ru ? zR[mQ[91]].Butto : mQ[6],
            values: [
              [zR[mQ[73]].PhysicsVersion, ZR],
              [zR[mQ[73]]["Inbuil" + mQ[113] + mQ[114]], hR],
              [zR[mQ[73]]["AltCom" + mQ[115]], PR],
              [zR[mQ[73]]["ProbeUsedPro" + mQ[85]], FR()]
            ]
          }
        }
      }
    };
    const XQ = "[bloxd-wasm-client]",
      VQ = "bloxdWasmDownloadFailed",
      rQ = fR.d,
      BQ = "boot",
      xQ = "playSources",
      SQ = "wasmBuild",
      pQ = "bloxd-wasm-joined",
      TQ = "bloxd-wasm-first-view",
      WQ = "bloxd-wasm-playable-legacy",
      jQ = 1048576,
      HQ = 8 * jQ,
      dQ = 8,
      bQ = 1006,
      CQ = 1e3,
      kQ = "You lost connection to the server.",
      eQ = "general:lostConnection",
      AQ = 1048576,
      DQ = 5e3,
      MQ = 100,
      IQ = [2e3, 1e4, 3e4],
      GQ = 3e4;
    let UQ = null,
      nQ = null,
      sQ = !1,
      tQ = !1,
      lQ = !1,
      gQ = null,
      cQ = null,
      LQ = null,
      zQ = null,
      FQ = null,
      wQ = null,
      ZQ = null;
    const hQ = new class {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = uu, this.soundOn = Ru, this.now = yu, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var uu;
        null === (uu = this.player) || void 0 === uu || uu.prepare()
      }
      preload(uu) {
        var Ru;
        this.stopped || (null === (Ru = this.player) || void 0 === Ru || Ru.preload(uu))
      }
      cancelPreload() {
        var uu;
        null === (uu = this.player) || void 0 === uu || uu.cancelPreload()
      }
      load(uu) {
        if (null !== this.player || this.stopped) return;
        this.player = uu, uu.setMaster(this.master, this.soundOn);
        const Ru = this.now(),
          yu = this.local;
        this.local = [];
        for (const Ku of yu)
          if (!(Ku.stopped || !Ku.loop && Ru - Ku.at >= 300)) try {
            this.start(Ku, uu, Ru)
          } catch (Eu) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Eu)
          }
      }
      start(uu, Ru, yu) {
        const {
          name: Eu,
          pos: Ku,
          ear: Qu,
          maxHearDist: mu,
          refDistance: Ju,
          loop: Nu,
          fade: Xu
        } = uu, Vu = Ru.playGame(Eu, lR(uu, yu), Ku, Qu, mu, Ju, Nu);
        if (uu.sound = Vu, 1 !== uu.rate && Vu.rate(uu.rate), null !== uu.panner && Vu.setPannerAttr(uu.panner), null !== uu.moved && Vu.setPosition(uu.moved), null !== Xu && yu - Xu.at < Xu.ms) {
          const Ru = tR(this.master);
          Ru > 0 ? Vu.fade(0, uu.volume * Ru, Xu.at + Xu.ms - yu) : Vu.setRelativeVolume(uu.volume)
        }
      }
      onAudioEvent(uu, Ru, yu, Eu) {
        var Ku, Qu;
        return null === (Ku = null === (Qu = this.player) || void 0 === Qu ? void 0 : Qu.onAudioEvent(uu, Ru, yu, Eu)) || void 0 === Ku || Ku
      }
      applyListener(uu) {
        var Ru;
        null === (Ru = this.player) || void 0 === Ru || Ru.applyListener(uu)
      }
      playGame(uu, Ru, yu, Eu, Ku, Qu, mu) {
        if (this.stopped) return sR.b;
        if (this.player) return this.player.playGame(uu, Ru, yu, Eu, Ku, Qu, mu);
        const Ju = this.now();
        this.local = this.local.filter((uu => !uu.stopped && (uu.loop || Ju - uu.at < 300)));
        const Nu = {
          name: uu,
          volume: tR(Ru),
          fade: null,
          pos: yu && [yu[0], yu[1], yu[2]],
          ear: Eu && [Eu[0], Eu[1], Eu[2]],
          maxHearDist: Ku,
          refDistance: Qu,
          loop: mu,
          rate: 1,
          panner: null,
          moved: null,
          at: Ju,
          stopped: !1,
          sound: null
        };
        this.local.push(Nu);
        const Xu = {
          stop: () => {
            var uu;
            return Nu.stopped = !0, null === (uu = Nu.sound) || void 0 === uu || uu.stop(), Xu
          },
          fade: (uu, Ru, yu) => {
            if (Nu.sound) return Nu.sound.fade(uu, Ru, yu), Xu;
            const Eu = tR(this.master),
              Ku = tR(Eu > 0 ? Ru / Eu : Ru > 0 ? Nu.volume : 0),
              Qu = this.now(),
              mu = lR(Nu, Qu);
            return Nu.volume = Ku, Nu.fade = yu > 0 && mu !== Ku ? {
              from: mu,
              at: Qu,
              ms: yu
            } : null, Xu
          },
          rate: uu => (Nu.sound ? Nu.sound.rate(uu) : Nu.rate = uu, Xu),
          getVolume: () => Nu.sound ? Nu.sound.getVolume() : Nu.volume * tR(this.master),
          getRelativeVolume: () => Nu.sound ? Nu.sound.getRelativeVolume() : Nu.volume,
          setRelativeVolume: uu => (Nu.sound ? Nu.sound.setRelativeVolume(uu) : (Nu.volume = tR(uu), Nu.fade = null), Xu),
          setPannerAttr: uu => (Nu.sound ? Nu.sound.setPannerAttr(uu) : Nu.panner = {
            ...uu
          }, Xu),
          setPosition: uu => (Nu.sound ? Nu.sound.setPosition(uu) : Nu.moved = [uu[0], uu[1], uu[2]], Xu)
        };
        return Xu
      }
      setMaster(uu, Ru) {
        var yu;
        this.master = uu, this.soundOn = Ru, null === (yu = this.player) || void 0 === yu || yu.setMaster(uu, Ru)
      }
      stop() {
        var uu;
        this.stopped = !0, null === (uu = this.player) || void 0 === uu || uu.stopAll();
        for (const Ru of this.local) Ru.stopped = !0;
        this.local = []
      }
    }((0, CR.b)(), !0);
    let PQ = {
        wasm: "unknown",
        client: String(RR.c)
      },
      iQ = null,
      YQ = () => {};
    const oQ = new Promise((uu => {
      YQ = uu
    }));
    let qQ = () => {};
    const OQ = new Promise((uu => {
      qQ = uu
    }));
    let vQ, aQ = null,
      fQ = null,
      um = null,
      Rm = null,
      ym = null,
      Em = null,
      Km = null,
      Qm = null,
      mm = null,
      Jm = null,
      Nm = null,
      Xm = null,
      Vm = null,
      rm = null,
      Bm = null,
      xm = null,
      Sm = null,
      pm = null,
      Tm = !1,
      Wm = null;
    const jm = new Set,
      Hm = new Set;

    function dm(uu) {
      if (!jm.has(uu)) {
        jm.add(uu);
        for (const yu of Hm) try {
          yu(uu)
        } catch (Ru) {
          console.error(`${XQ} a startup listener threw`, Ru)
        }
      }
    }

    function bm(uu) {
      Tm = !0, uu.isStopped || dm("texturesIn")
    }
    let Cm = 1,
      km = -1 / 0,
      em = !1,
      Am = !1,
      Dm = 0,
      Mm = null,
      Im = !1;
    const Gm = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let Um = 0,
      nm = 0,
      sm = null,
      tm = null,
      lm = null,
      gm = null;
    const cm = new WeakMap;
    let Lm = null,
      zm = null,
      Fm = null,
      wm = null,
      Zm = null,
      hm = null,
      Pm = null,
      im = 0,
      Ym = null,
      om = null,
      qm = null,
      Om = null,
      am = -1 / 0,
      fm = null;
    const uJ = new Set;
    let RJ = !1,
      yJ = null;
    const EJ = new Map,
      KJ = new Set;
    let QJ = !1;
    const mJ = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let JJ = null,
      NJ = () => [0, 0],
      XJ = () => {},
      VJ = () => {},
      rJ = null,
      BJ = null;
    const xJ = new class {
      constructor(uu) {
        this.reached = uu, this.next = 1
      }
      observe(uu) {
        if (!(uu < this.next)) {
          for (; this.next <= uu;) this.next *= 2;
          this.reached(uu)
        }
      }
    }((uu => {
      console.warn(`${XQ} chunk cancels from the server this session: ${uu}`)
    }));
    let SJ = 1,
      pJ = null,
      TJ = null,
      WJ = null,
      jJ = null,
      HJ = null,
      dJ = !1,
      bJ = !1,
      CJ = 0,
      kJ = null,
      eJ = !1,
      AJ = null,
      DJ = null,
      MJ = !1;
    const IJ = new class {
      constructor(uu) {
        this.Op = uu, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(uu, Ru, yu) {
        (0, DR.b)(uu) && (this.lossPending = !1);
        const Eu = yu - this.lastFrameMs;
        this.lastFrameMs = yu, this.lossPending && Ru && (0, DR.g)(uu) ? (null === this.undrawnSinceMs || Eu > 1e3) && (this.undrawnSinceMs = yu) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && yu - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(uu) {
        uu !== this.shown && (this.shown = uu, this.Op(uu))
      }
    }((uu => {
      Nu.k.Op(nR.c, uu)
    }));
    let GJ = !1,
      UJ = !0,
      nJ = null,
      sJ = !1,
      tJ = !1,
      lJ = !1;

    function gJ() {
      return LQ ??= Promise.all([yu.e(189), yu.e(136), yu.e(56)]).then((() => yu(42850))).then((uu => (cQ = uu, Object.assign(globalThis, {
        bloxdPreviewPage: uu.pagePreviews()
      }), uu)), (uu => {
        throw LQ = null, uu
      })), LQ
    }

    function cJ() {
      return gQ ??= yu.e(54).then((() => yu(42872))).catch((uu => {
        throw gQ = null, new Cu.e(uu)
      })), gQ
    }
    class LJ {
      constructor() {
        this.host = null
      }
      open(uu) {
        return null !== this.host ? uu(this.host) : gJ().then((Ru => (this.host ??= new Ru.WasmPreviewHost(Ru.pagePreviews()), uu(this.host))))
      }
      openMob(uu) {
        return this.open((Ru => Ru.openMob(uu)))
      }
      openPet(uu) {
        return this.open((Ru => Ru.openPet(uu)))
      }
      openMobLineup(uu) {
        return this.open((Ru => Ru.openMobLineup(uu)))
      }
      openCharacter(uu, Ru) {
        return this.open((yu => yu.openCharacter(uu, Ru)))
      }
    }

    function zJ() {
      lQ || (lQ = !0, vE.e.setHost(new LJ), (0, Wy.n)(), YE.f.setFollower(FN), Object.assign(globalThis, {
        bloxdPreviews: vE.e
      }))
    }

    function FJ() {
      gJ().then((uu => {
        uu.pagePreviews().prefetch()
      }), (() => {}))
    }

    function wJ() {
      let uu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (tQ) return;
      tQ = !0, GJ = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), UJ = !GJ, console.info(`${XQ} starting`), sQ || (sQ = !0, (0, nR.L)(new IR(QN, xN)), (0, Bu.k)(new GR), (0, nR.I)(new UR), (0, nR.y)()), zJ(), (0, Cy.setCrashScreen)((uu => {
        let {
          text: Ru,
          reload: yu
        } = uu;
        ! function(uu, Ru) {
          var yu, Eu;
          if (sJ) return;
          sJ = !0, (0, Hy.g)(), null === (yu = fm) || void 0 === yu || yu.abort(), fm = null, oE.c.release();
          const Ku = GJ ? null !== (Eu = uu.cancel) && void 0 !== Eu ? Eu : "general:back" : null;
          SE({
            ...uu,
            cancel: Ku
          }).then((uu => {
            uu && Ru && tJ ? ((0, rR.l)("reloadOntoJs"), (0, hu.j)(rR.t)) : uu && Ru ? (0, hu.k)() : GJ && (0, hu.g)("/")
          }))
        }(Ru, yu)
      })), (0, cE.i)(), (0, bR.f)();
      let Ru = null;
      try {
        Ru = QQ("nbusw871zw", (() => {
          var uu, Ru;
          return null !== (uu = null === (Ru = aQ) || void 0 === Ru ? void 0 : Ru.ws) && void 0 !== uu ? uu : null
        }), uu, "zmnluctdxq")
      } catch (Ku) {
        console.error(`${XQ} probes`, Ku)
      }
      const Eu = function() {
        const uu = (0, jE.j)(),
          Ru = (0, jE.f)();
        let yu = !1;
        return Eu => {
          uu && !yu && (yu = !0, (0, Cy.reportStaleBuildReload)(uu, Ru, Eu))
        }
      }();
      ZN(), GJ || function() {
        const uu = function(uu) {
          var Ru;
          const yu = new URLSearchParams(uu),
            Eu = yu.get("game");
          return Eu ? {
            game: Eu,
            lobby: null !== (Ru = yu.get("lobby")) && void 0 !== Ru ? Ru : null
          } : null
        }(window.location.search);
        if (uu) return (0, yR.i)(uu.game) && ZN().request(), void PJ(uu.game, uu.lobby);
        const Ru = new URLSearchParams(window.location.search).get("ws");
        if (!Ru) return;
        oQ.then((uu => {
          uu && async function(uu, Ru) {
            try {
              await (0, Cu.m)(uu), zm = jN(new WebSocket(Ru)), null !== zm && oE.c.setGame(null), ZJ()
            } catch (Ku) {
              console.error(`${XQ} ?ws=${Ru} did not attach`, Ku)
            }
          }(uu, Ru)
        }))
      }(), async function(uu) {
        var Ru, Eu, Qu, mu, Ju;
        if ("undefined" === typeof WebAssembly) return sN("noWebAssembly", "This browser has no WebAssembly"), null;
        const Xu = await (0, EK.L)();
        if ((0, Cy.setCrashBackend)((0, fR.l)(Xu) ? "unsupported" : null !== (Ru = null === Xu || void 0 === Xu ? void 0 : Xu.backend) && void 0 !== Ru ? Ru : "none"), (0, fR.l)(Xu)) return sN("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Xu.missing.join(", ")}`, {
          missing: Xu.missing.join(",")
        }), null;
        if ((0, MK.m)("render")) try {
          const {
            startRenderDebug: uu
          } = await Promise.all([yu.e(74), yu.e(47)]).then((() => yu(4464)));
          uu(Xu)
        } catch (kR) {
          console.warn("The render debug topic didn't load", kR)
        }
        if ((0, MK.m)("renderlite")) try {
          const {
            startRenderLite: uu
          } = await Promise.all([yu.e(259), yu.e(48)]).then((() => yu(42891)));
          WJ = uu(Xu)
        } catch (kR) {
          console.warn("The renderlite debug topic didn't load", kR)
        }
        let Vu = null;
        if (null !== Xu && tN()) {
          const uu = (0, pE.e)(Xu, !0);
          "webgl" === Xu.backend && null !== uu && (0, xR.m)(uu, Cy.reportGpuWasmPopulation), null !== uu && (0, BR.t)(uu), Vu = (0, pE.b)(Xu, uu)
        }
        if (null !== Xu && null !== Vu) return (0, Cy.reportGpuFallback)(Vu, Xu.backend), lN(`the wasm client's renderer plays this GPU (${Vu}) on ${Xu.backend} worse than the JS client`, "gpu"), null;
        const ru = null !== (Eu = null === Xu || void 0 === Xu ? void 0 : Xu.backend) && void 0 !== Eu ? Eu : null;
        mJ.adapter = null !== (Qu = null === Xu || void 0 === Xu ? void 0 : Xu.adapter) && void 0 !== Qu ? Qu : null, mJ.boundAtMs = null, mJ.indirectHangs = null;
        const Bu = !(0, fR.V)();
        null !== Xu && "none" !== Xu.reason && console.info(`${XQ} drawing with ${Xu.backend}: ${Xu.reason}`);
        const xu = (0, EK.D)();
        qQ(!0), (0, Cu.z)((uu => {
          try {
            null !== ru && (rJ = uu.startSkyFeed, cN(), function(uu) {
              var Ru, yu;
              NJ = uu.rasterText, wm = uu.setTextLocalPlayer, uu.setTextLocalPlayer(null !== (Ru = null === (yu = Fm) || void 0 === yu ? void 0 : yu.info.playerDbId) && void 0 !== Ru ? Ru : null), XJ = uu.drainTextRerasters, VJ = uu.loadTextIcons, uu.warmText((() => dJ)), uu.textChanged(), dJ && setTimeout(VJ, 0)
            }(uu), BJ = uu.startShellAnalytics, qN())
          } finally {
            lJ || (jJ = uu.followMenuPrefs({
              setSoundPrefs: pN,
              setEnvPrefs: TN,
              setUiPrefs: SN,
              setLookPrefs: WN
            }))
          }
        })), (0, Cu.p)(hQ).catch((uu => {
          console.warn(`${XQ} the game code did not load: a join asks again`, uu)
        }));
        const Su = (0, EK.m)(Xu);
        let pu, Tu;
        Su.catch((() => {})), "loading" === (0, QR.u)() && WK();
        try {
          pu = function(uu) {
            const Ru = null !== uu && void 0 !== uu ? uu : document.createElement("canvas");
            Ru.id = "wasm-game-canvas", (0, XK.g)();
            const yu = (0, MR.f)(),
              Eu = (0, MR.i)(yu);
            return Ru.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, NK.i)(Ru, Eu), (0, MR.e)(Ru, yu), Ru.width = Eu.bufferWidth, Ru.height = Eu.bufferHeight, mN(Ru, UJ), nJ = Ru, document.body.append(Ru), Ru
          }(null === ru ? null : await (await gJ()).pagePreviews().beginSession())
        } catch (Ku) {
          return await eX({
            site: SQ,
            error: Ku
          }, (() => {
            (0, Cy.showUnsupported)((0, rE.o)("fetch"), gK.h.fetch, `the previews did not load: ${String(Ku)}`)
          })), null
        }
        WK();
        try {
          Tu = await Su
        } catch (Ku) {
          return await eX({
            site: SQ,
            error: Ku
          }, (() => {
            (0, Cy.showUnsupported)((0, rE.o)("fetch"), gK.h.fetch, `the ${null!==ru&&void 0!==ru?ru:"client"} build did not load: ${String(Ku)}`)
          })), null
        }
        const Wu = (0, EK.g)(),
          ju = !Wu && !0 !== by.j.getItem(VQ),
          Hu = !Wu && "loading" === (0, QR.u)();
        await (0, mR.h)(Tu, VR.e, {
          reloadFailedDownload: ju
        }), Hu && !(0, QR.N)() && await (0, mR.h)(Tu, VR.e, {
          reloadFailedDownload: ju
        });
        SK = performance.now();
        const du = PQ;
        if (!(0, QR.N)()) {
          (0, QR.K)() && by.j.setItem(VQ, !0);
          const uu = (0, QR.l)();
          if ("call" === uu) SX({
            site: uy.o,
            error: (0, QR.i)(),
            header: null
          }, du);
          else {
            const Ru = null !== uu && void 0 !== uu ? uu : "instantiate",
              yu = () => {
                (0, Cy.showUnsupported)((0, rE.o)(Ru), gK.h[Ru], (0, QR.g)())
              };
            if ("compile" !== uu && "instantiate" !== uu || !tN())
              if ("fetch" === Ru) {
                const uu = [Tu.url().href, VR.e.url().href];
                await eX({
                  site: SQ,
                  error: (0, QR.g)(),
                  urls: uu
                }, yu)
              } else yu();
            else {
              const Ru = (0, QR.g)(),
                yu = (0, wR.j)((0, QR.i)());
              (0, Cy.reportCountedLoadFallback)((0, rE.o)(uu), gK.h[uu], Ru, yu), lN(`the wasm client did not ${uu} here (${Ru})`, yu ? "oom" : null)
            }
          }
          return null
        }(0, JR.N)(Tu.url()) && (0, Cy.reportUnstreamedCoreLoad)();
        const ku = (0, QR.w)();
        let eu, Au = du;
        try {
          Au = {
            ...du,
            wasm: ku.Qr()
          };
          const {
            AT: uu
          } = Tu.bindings, Ru = uu.WEu();
          if (Ru !== zR.E) return SX({
            site: uy.d,
            error: `core ABI ${Ru}, page ABI ${zR.E}`,
            header: null
          }, Au), null;
          const [yu, Eu] = (0, zR.ee)();
          eu = new uu(yu, Eu)
        } catch (Ku) {
          return SX({
            site: uy.d,
            error: Ku,
            header: null
          }, Au), null
        }
        PQ = Au, iQ = Tu.bindings;
        const Du = new uy.f(eu, QR.r, {
          onCrash: uu => {
            var Ru;
            null === (Ru = WJ) || void 0 === Ru || Ru.crashed(uu), Bu && function(uu, Ru, yu) {
              if ("webgpu" !== Ru || (0, EK.e)()) return !1;
              const Eu = function(uu) {
                if (uu.site === uy.e && (0, fR.o)(uu.error)) return "frames_refused";
                return uu.site === rQ && (0, fR.q)(uu.error) ? "start_failed" : null
              }(uu);
              if (null === Eu || !(0, fR.Q)(Eu)) return !1;
              return (0, Cy.reportRenderReload)("webgpu", "start_failed" === Eu ? 0 : 1, yu, {
                cause: Eu,
                error: uu.error,
                context: mJ,
                session: WX(null)
              }), uX(), !0
            }(uu, ru, Au) || SX(uu, Au)
          },
          onNetEvent: fN,
          onReconnectGrace: GN,
          onCoreErrors: (uu, Ru) => {
            var yu, Eu;
            uu.some((uu => {
              let {
                code: Ru
              } = uu;
              return Ru === zR.O.RenderDeviceLost
            })) && ((0, EK.x)(), IJ.deviceLost()), null === (yu = WJ) || void 0 === yu || yu.coreErrors(uu), (0, Cy.reportCoreErrors)(uu, Ru, Au, ((uu, Ru) => {
              var yu;
              return null === (yu = JJ) || void 0 === yu ? void 0 : yu.jEu(uu, Ru)
            })), null === (Eu = Wm) || void 0 === Eu || Eu.coreErrors(uu)
          },
          onRenderReload: (uu, Ru, yu) => {
            ! function(uu, Ru, yu, Eu, Ku, Qu) {
              var mu;
              if ((0, EK.e)()) return;
              const Ju = Ru === zR.Uc.WEBGPU,
                Nu = Eu === zR.Uc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Xu = (0, fR.R)(JJ);
              null === (mu = WJ) || void 0 === mu || mu.reload(Ju, yu, Nu, null === Xu || void 0 === Xu ? void 0 : Xu.message);
              const Vu = Ju ? (0, fR.N)(Nu, Ku) : null;
              if (null !== Vu) {
                const Ru = void 0 === Xu ? "" : ` (${Xu.message})`;
                return void uu.crash(Cy.RENDER_RELOAD_SITE, new Error(`${(0,Cy.renderReloadMessage)("webgpu",Nu,yu)} and ${Vu}${Ru}`))
              }
              const ru = Ju ? "webgpu" : "webgl1" === Qu ? "webgl1" : "webgl";
              "lost" === Nu && (0, EK.x)();
              (0, Cy.reportRenderReload)(ru, yu, PQ, {
                cause: Nu,
                error: Xu,
                context: mJ,
                session: WX(uu.sunShadowsHeld())
              }), uX()
            }(Du, uu, Ru, yu, Bu, ru)
          },
          onEnvEvent: uu => {
            var Ru;
            uu.kind === zR.ab.SkyImages && (null === (Ru = xm) || void 0 === Ru || Ru.onEvent(uu.payload))
          },
          onImages: uu => {
            var Ru;
            null === (Ru = Sm) || void 0 === Ru || Ru.onEvent(uu)
          },
          onModelRequest: uu => {
            var Ru;
            null === (Ru = Vm) || void 0 === Ru || Ru.request(uu)
          },
          onModelTaken: (uu, Ru) => {
            var yu;
            null === (yu = Vm) || void 0 === yu || yu.taken(uu, Ru)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(uu, Ru) {
                const yu = ZQ;
                if (null === yu || uu.isStopped) return;
                yu.restore((uu => {
                  (0, Cy.reportTerrainTextureFailure)(uu, Ru)
                })).then((Ru => {
                  !1 !== Ru || uu.isStopped ? !0 === Ru && console.info(`${XQ} terrain textures handed over again after the renderer lost them`) : console.warn(`${XQ} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Du, Au)
            }))
          },
          onKeepAlive: uu => {
            const Ru = null === gm ? void 0 : cm.get(gm);
            void 0 !== Ru && kE(Ru, uu)
          }
        });
        if (zQ = Du, null !== uu) {
          Du.setAntiCheatProbes(uQ(QR.r, uu.checks)), uu.watchHeld(yQ.CoreFrame, (() => Du.frame)), uu.watchHeld(yQ.GlueFrame, (() => eu.frame));
          const Ru = KQ(uu, ((uu, Ru, yu) => {
            let Eu = !1;
            return dX(Du, (() => {
              Eu = Du.rings.input.writeRecord(zR.yb.AntiCheat, uu, Ru, yu, 0)
            })), Eu
          }));
          Du.isStopped ? Ru.stop() : Nm = Ru
        }
        UQ = (uu, Ru, yu) => Du.rings.cmd.writeCmd(uu, Ru, yu), nQ = uu => Du.rings.cmd.growForCmd(uu), Im = !1, cN(), (0, Cu.B)(Du, {
          core: eu,
          memory: QR.r,
          staleOr: (uu, Ru, yu) => eX({
            site: uu,
            error: Ru
          }, yu),
          reportReplayFault: (uu, Ru) => {
            (0, Cy.reportReplayFault)(uu, Ru, PQ)
          },
          audio: hQ,
          options: SR.b,
          onNetEvent: fN,
          sessionInfo: uu => {
            var Ru;
            return (null === (Ru = Fm) || void 0 === Ru ? void 0 : Ru.conn) === uu ? Fm.info : null
          },
          onEventOverflow: EN,
          replayShaderPack: uu => {
            var Ru;
            null === (Ru = Wm) || void 0 === Ru || Ru.replay(uu)
          },
          hasPackModel: uu => {
            var Ru, yu;
            return null !== (null !== (Ru = null === (yu = LN()) || void 0 === yu ? void 0 : yu.modelUrl(uu)) && void 0 !== Ru ? Ru : null)
          },
          beforeWrite: () => (!em && Du.rings.net.cursor > 0 && EX(Du, !1, "all"), !Du.isStopped),
          beforeOp: () => (!em && Du.netWrittenSinceFrame > 0 && EX(Du, !1, "budget"), !Du.isStopped)
        }), (0, bu.G)({
          lockPointer: () => {
            if (!gy(pu)) return !1;
            try {
              Promise.resolve(pu.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, ey.c)()
          },
          leaveGame: () => {
            yN()
          },
          canvas: () => pu
        }), Xm = (0, bu.y)((() => {
          var uu;
          const Ru = (0, Cu.i)();
          null === (uu = (0, Cu.v)()) || void 0 === uu || uu.followCursorAim(!0 === (null === Ru || void 0 === Ru ? void 0 : Ru.isSessionLive) ? Ru : null)
        })), sm && Du.setUiPrefs(sm);
        tm && Du.setEnvPrefs(tm);
        lm && Du.setLookPrefs(lm);
        const Mu = mK ? JK(mK.preventMovement) : null;
        Mu && BN(Mu);
        const Iu = (0, Sy.g)(),
          Gu = (0, Sy.c)(Du, Iu);
        mm = Iu.basis, (0, dy.f)(null === Gu ? null : (0, xy.l)(Gu)), Qm = Gu;
        const Uu = (0, NR.e)();
        let nu = 1 / 0,
          su = !0,
          tu = Iu.shedFootprintBytes;
        const lu = new gE.d(Uu, (() => eu.sT()), (uu => {
          Du.crash(uy.j, uu)
        }));
        Em = lu, Km = lu, null !== Gu && lu.setCeiling(Math.min((0, gE.n)(Gu), nu));
        if (su) {
          lu.setShed((uu => {
            const Ru = Du.shedMemory("joinReserve" !== uu);
            return null !== Ru && (null === Qm || Ru < Qm) && (Qm = Ru, (0, dy.f)((0, xy.l)(Ru))), Ru
          }), ((uu, Ru, yu) => {
            1 === Ru ? (0, Cy.reportMemoryShed)(uu, yu, PQ) : console.warn(`${XQ} wasm memory: shed again (${uu}): shed ${Ru}`, yu.wasmMemoryShed)
          }), (() => Du.addDistanceInUse()));
          const uu = (0, fR.F)(ku);
          lu.setFootprint(new DK(tu, {
            storedChunks: () => eu.HEu(),
            gpuBytes: () => {
              var Ru;
              return null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.dEu()) && void 0 !== Ru ? Ru : 0
            },
            jsHeapBytes: AK
          }))
        }
        window.addEventListener("pagehide", (() => {
          Em === lu && (lu.refreshStats(), HX(lu))
        })), window.addEventListener("pagehide", RX), window.addEventListener("pagehide", yX), !1;
        const [gu, cu] = (0, Ty.c)();
        HJ = (0, jy.g)((uu => Du.setChunkAddDistance(uu.horizontal, uu.vertical)), {
          horizontal: gu,
          vertical: cu
        }), Du.setAmbientOcclusion(!0 !== by.i.getItem("disableAmbientOcclusion")), Du.setPoseLod(!0 !== by.i.getItem(KR.P)), (0, MK.m)("look") && (Du.setDebugLog(zR.R.Look, !0), (0, GK.e)("wasm", (() => Du.takeDebugLog(zR.R.Look))));
        (0, MK.m)("remesh") && (Du.setDebugLog(zR.R.Remesh, !0), Lu = () => Du.takeDebugLog(zR.R.Remesh), lK = new tK((0, UK.m)(), Lu));
        var Lu;
        const zu = function(uu, Ru, yu, Eu) {
          const Ku = new uE,
            Qu = uu => by.i.getItem(uu);
          Ku.sync(Qu, Ru), (0, AR.S)();
          const mu = (0, Nu.n)("customBindingsChanged", (() => {
            Ku.sync(Qu, Ru)
          }));
          (0, Ay.r)(Ru);
          const Ju = new Set,
            Xu = (0, bu.y)((() => {
              var uu;
              Ju.size > 0 && KE() && !0 === (null === (uu = (0, Cu.i)()) || void 0 === uu ? void 0 : uu.localPlayerAlive()) && Nu.k.Op("usedKeyboard")
            })),
            Vu = Py.e.heldSizer((() => (0, MR.p)(uu))),
            ru = hy(uu, Ru, {
              prevents: uu => Ku.prevents(uu),
              keyPressed: uu => {
                Ku.moves(uu) && (Ju.add(uu), KE() && Nu.k.Op("usedKeyboard"))
              },
              keyReleased: uu => {
                Ju.delete(uu)
              },
              keysReleased: () => {
                Ju.clear()
              },
              resized: () => {
                yE.k.measure(uu.getBoundingClientRect()), (0, iy.p)()
              },
              sizeCanvas: Vu,
              watchRenderScale: Ru => {
                const yu = (0, MR.q)(uu, Ru),
                  Eu = Py.e.onRelease(Ru);
                return () => {
                  yu(), Eu()
                }
              },
              touchStarting: () => {
                yE.k.measure(uu.getBoundingClientRect())
              },
              viewShown: yu,
              touchUiShown: () => Pu.d.get("isTouchScreen"),
              ctrlCombosAreGames: KE,
              inspect: (uu, Ru, yu) => {
                Ku.checks(Ru, yu) && Eu(uu)
              },
              canLock: () => gy(uu)
            }),
            Bu = (0, Qy.e)(Ru);
          return () => {
            mu(), Xu(), (0, Ay.r)(null), Bu(), ru()
          }
        }(pu, ((uu, Ru, yu, Eu, Ku) => {
          var Qu;
          dX(Du, (() => {
            Du.rings.input.writeRecord(uu, Ru, yu, Eu, Ku)
          })), null === (Qu = Nm) || void 0 === Qu || Qu.onInput(uu), !Am && (0, XE.g)(uu, Ku) && (0, XE.c)((() => {
            zQ !== Du || lJ || Du.isStopped || !XX() || EX(Du, !1, "budget", !1)
          }))
        }), (() => UJ), (uu => {
          var Ru;
          null === (Ru = Nm) || void 0 === Ru || Ru.onEvent(uu)
        }));
        if (Du.isStopped) return zu(), null;
        fQ = zu;
        const Fu = () => !Du.isStopped && !sJ;
        if (Du.isStopped) return null;
        (0, QR.S)((() => {
          "call" === (0, QR.l)() && Du.crash(uy.o, (0, QR.i)())
        }));
        const wu = (0, uy.H)(Du.rings.worker, (() => {
          EX(Du, !1, "budget")
        }));
        um = function(uu, Ru) {
          return bX().then((uu => {
            let {
              prefetchWorldgenWorker: Ru
            } = uu;
            Ru()
          }), (() => {})), new LK({
            module: (0, QR.s)(),
            decodeSettings: uu => {
              const Ru = (0, Cu.v)();
              if (null === Ru) throw new Error("no game code to decode the world-gen seed with");
              return Ru.decodeMapSettings(uu)
            },
            loadWorker: CX,
            onMapWithoutWorldgen: () => {
              kX((uu => {
                let {
                  stopWorldgenWorkerPrefetch: Ru
                } = uu;
                Ru()
              }))
            },
            onLoadFailed: uu => {
              (0, Cy.reportWorldgenLoadFailure)(uu, PQ)
            },
            onWorkerLost: uu => {
              (0, Cy.reportWorkerLost)(uy.x, uu, PQ)
            },
            onStartTimeout: uu => {
              (0, Cy.reportWorkerStartTimeout)(uy.x, uu, PQ)
            },
            onGaveUp: uu => {
              (0, Cy.reportWorldgenGaveUp)(uu, PQ)
            },
            onMemoryStats: uu => {
              var Ru;
              null === (Ru = Em) || void 0 === Ru || Ru.noteWorldgen(uu)
            },
            onMemoryGone: () => {
              var uu;
              null === (uu = Em) || void 0 === uu || uu.worldgenGone()
            },
            write: (yu, Eu, Ku, Qu, mu) => {
              dX(uu, (() => {
                uu.rings.worker.writeWorkerRecord(yu, Eu, Ku, 0, Qu, mu) || uu.crash(uy.x, `a world-gen record of kind ${Eu} did not fit the worker-in ring`)
              })), Ru()
            }
          })
        }(Du, wu), ym = function(uu, Ru) {
          return new tE({
            module: (0, QR.s)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: uu
              }, Ru] = await Promise.all([yu.e(40).then((() => yu(42929))), Promise.resolve().then((() => yu(106))).then((uu => {
                let {
                  isMobile: Ru
                } = uu;
                return Ru()
              }), (() => !1))]);
              return {
                create: uu,
                count: (0, dR.e)(navigator.hardwareConcurrency, Ru)
              }
            },
            write: (yu, Eu, Ku, Qu, mu, Ju) => {
              (0, iy.m)(), dX(uu, (() => {
                uu.rings.worker.writeWorkerRecord(yu, Eu, Ku, Qu, mu, Ju) || uu.crash(uy.l, `a meshing record of kind ${Eu} did not fit the worker-in ring`)
              })), Ru()
            },
            onWorkerLost: uu => {
              (0, Cy.reportWorkerLost)(uy.l, uu, PQ)
            },
            onLightFault: (uu, Ru) => {
              (0, Cy.reportLightFault)(uu, Ru, PQ)
            },
            onStartTimeout: uu => {
              (0, Cy.reportWorkerStartTimeout)(uy.l, uu, PQ)
            },
            onMemoryStats: (uu, Ru) => {
              var yu;
              null === (yu = Em) || void 0 === yu || yu.noteMeshWorker(uu, Ru)
            },
            onMemoryGone: uu => {
              var Ru;
              null === (Ru = Em) || void 0 === Ru || Ru.meshWorkerGone(uu)
            },
            fail: (Ru, yu) => {
              const Eu = () => {
                uu.crash(uy.l, void 0 === yu ? Ru : new Error(Ru, {
                  cause: yu
                }))
              };
              void 0 !== yu ? eX({
                site: uy.l,
                error: yu
              }, Eu) : Eu()
            }
          })
        }(Du, wu);
        const iu = (0, qE.t)(jR.clientSideServerUrls.staticUrl, {
            onTableFailed: uu => {
              eX({
                site: Cy.MODEL_FEED_SITE,
                error: uu
              }, (() => {}), Fu)
            },
            packUrl: uu => {
              var Ru, yu;
              return null !== (Ru = null === (yu = LN()) || void 0 === yu ? void 0 : yu.modelUrl(uu)) && void 0 !== Ru ? Ru : null
            }
          }),
          Yu = function(uu, Ru, yu) {
            const Eu = yu => {
              var Eu, Ku;
              return null !== (Eu = null === (Ku = Ru()) || void 0 === Ku ? void 0 : Ku.drawnUrl(yu)) && void 0 !== Eu ? Eu : uu.url(yu)
            };
            return (0, YE.k)((0, LE.l)(Eu), yu)
          }(iu, (() => Vm), LN),
          ou = new LE.d(Yu, (uu => {
            console.warn(`${XQ} image ${uu.key.kind}:${uu.key.index}:${uu.key.word} failed`, uu.error)
          }));
        Sm = ou, pm = new PE(Du, Yu, ((uu, Ru) => {
          void 0 === Ru ? console.warn(`${XQ} ${uu}`) : wN(uu, Ru)
        }));
        const qu = new iE.f(iu, function(uu, Ru) {
          let Eu = !1,
            Ku = null,
            Qu = null;
          const mu = {
              onUnavailable: (yu, Eu) => {
                Qu ??= eX({
                  site: Cy.MODEL_POOL_SITE,
                  error: yu,
                  urls: Eu
                }, (() => {
                  (0, Cy.reportModelPoolFailure)(yu, uu)
                }), Ru)
              },
              onDecoderFailed: (yu, Eu) => {
                const Ku = () => {
                  (0, Cy.reportDracoDecoderFailure)(yu, uu)
                };
                void 0 !== Eu ? eX({
                  site: Cy.MODEL_POOL_SITE,
                  error: yu,
                  urls: Eu
                }, Ku, Ru) : Ku()
              },
              onWorkerLost: Ru => {
                (0, Cy.reportWorkerLost)(Cy.MODEL_POOL_SITE, Ru, uu)
              },
              onModuleRetry: (Ru, yu) => {
                (0, Cy.reportModelsModuleRetry)(Ru, yu, uu)
              }
            },
            Ju = yu.e(42).then((() => yu(42935))).then((uu => {
              let {
                pageModelPool: Ru
              } = uu;
              if (Eu) return null;
              const yu = Ru(mu);
              return Ku = yu.unlisten, rm = yu.pool, yu.pool
            }), (uu => (Eu || mu.onUnavailable(uu, void 0), null)));
          return Bm = () => {
            var uu;
            Eu = !0, null === (uu = Ku) || void 0 === uu || uu(), rm = null
          }, (uu, Ru) => Ju.then((yu => {
            var Eu;
            return null !== (Eu = null === yu || void 0 === yu ? void 0 : yu.build(uu, Ru)) && void 0 !== Eu ? Eu : (0, OE.o)(uu, "the model workers did not load")
          })).then((uu => null !== Qu && (0, OE.i)(uu) ? Qu.then((() => uu)) : uu))
        }(Au, Fu), (uu => {
          uu.startup ? (xX(), eX({
            site: Cy.MODEL_FEED_SITE,
            error: uu.error,
            urls: "" === uu.url ? void 0 : [uu.url]
          }, (() => {
            (0, Cy.reportModelFailure)(uu, Au)
          }))) : (0, Cy.reportModelFailure)(uu, Au)
        }), {
          onWritten: (uu, Ru) => {
            ou.glbWritten(uu, Ru)
          },
          onTaken: (uu, Ru) => {
            ou.glbTaken(uu, Ru)
          },
          onPackFileFailed: (uu, Ru) => {
            console.warn(`${XQ} the texture pack's model file ${uu} failed: the shipped one loads`, Ru)
          }
        });
        Vm = qu;
        const Ou = new wE.e(Du);
        ZQ = Ou, Ou.swap((uu => {
          const Ru = () => {
            (0, Cy.reportTerrainTextureFailure)(uu, Au)
          };
          if (dJ) return void Ru();
          const yu = () => !dJ,
            Eu = null === uu.url ? void 0 : [uu.url];
          eX({
            site: uy.u,
            error: uu.error,
            urls: Eu
          }, Ru, yu)
        })).then((uu => {
          null !== uu && (uu || Du.isStopped || console.warn(`${XQ} the core refused the terrain textures: terrain draws untextured`), bm(Du))
        }));
        const vu = new cR(Du, ((uu, Ru) => {
          console.warn(`${XQ} ${uu}`, ...void 0 === Ru ? [] : [Ru])
        }));
        vu.feed(), null !== ru && function(uu, Ru, Eu, Ku, Qu, mu) {
          let Ju = null,
            Nu = null,
            Xu = !1;
          const Vu = {
            textures: null,
            stop: () => {
              var uu, Ru;
              Xu = !0, null === (uu = Nu) || void 0 === uu || uu(), null === (Ru = Ju) || void 0 === Ru || Ru(), oE.c.setSettled(null), null !== iQ && hJ.clear(iQ)
            }
          };
          wQ = Vu, Nu = ZN().follow((Nu => {
            null !== Nu && Promise.all([yu.e(193), yu.e(45)]).then((() => yu(42898))).then((yu => {
              let {
                PackTextures: ru
              } = yu;
              if (Xu || uu.isStopped) return;
              const Bu = new ru({
                feed: Nu,
                terrain: Ru,
                backend: Eu,
                stopped: () => uu.isStopped,
                landed: () => {
                  bm(uu)
                },
                packSwapped: () => {
                  (0, YE.g)(Ku), mu.feed((() => async function(uu) {
                    const Ru = null === uu ? null : await uu.averageColours;
                    return null === Ru ? LR() : gR(Ru)
                  }(Bu.assets))), zN(Bu.iconOverrides()), Qu.refresh().then((uu => {
                    null !== uu && console.info(`${XQ} texture pack models: ${uu.resent} of ${uu.delivered} files written again, ${uu.refetched} refetched`)
                  }))
                },
                settled: (uu, Ru, yu) => {
                  var Eu;
                  (oE.c.setSettled({
                    state: uu,
                    files: Ru
                  }), null === uu.gameSource && (0, py.e)(uu.pack, yu), yu) || function(uu) {
                    const Ru = iQ;
                    null !== Ru && hJ.apply(Ru, uu).then((Ru => {
                      Ru && uu && console.info(`${XQ} the texture pack's animations are in (${Object.keys(uu).length} files)`)
                    }))
                  }(null === (Eu = uu.pack) || void 0 === Eu ? void 0 : Eu.animations)
                },
                settling: () => {
                  oE.c.setSettled(null)
                },
                warn: wN,
                maxTextureSize: () => Promise.resolve((0, fR.X)(document.createElement("canvas")))
              });
              Vu.textures = Bu, Ju = Bu.start()
            }), (uu => {
              console.warn(`${XQ} the texture pack's terrain didn't load: the built atlas stays`, uu)
            }))
          }))
        }(Du, Ou, ru, ou, qu, vu);
        const au = () => {
            Du.setTextureLayers("")
          },
          fu = uu => {
            (WR ??= yu.e(50).then((() => yu(42942))).then((uu => {
              let {
                TEXTURE_NAMES: Ru
              } = uu;
              return Ru
            }), (uu => {
              throw WR = null, uu
            })), WR).then((uu => {
              Du.setTextureLayers(uu) || Du.isStopped || (console.warn(`${XQ} the core refused the texture names: textured Boxes draw textureNotFound`), au())
            }), (Ru => {
              if (Du.isStopped) return;
              const [yu, ...Eu] = uu;
              void 0 === yu ? eX({
                site: Cy.TEXTURE_NAMES_SITE,
                error: Ru
              }, (() => {
                console.warn(`${XQ} the texture names didn't load, so textured Boxes draw textureNotFound`, Ru), au()
              }), Fu) : setTimeout((() => {
                fu(Eu)
              }), yu)
            }))
          };
        if (fu(IQ), null !== ru && !await async function(uu, Ru, yu, Eu, Qu, mu) {
            var Ju;
            const Nu = (0, fR.F)(yu);
            if (null === Nu) return uu.crash(rQ, new Error(`this ${Eu} build has no openRenderer`)), !1;
            let Xu;
            JJ = Nu;
            try {
              var Vu, ru, Bu, xu;
              const Ku = null !== (Vu = null === (ru = cQ) || void 0 === ru ? void 0 : ru.pagePreviews()) && void 0 !== Vu ? Vu : null,
                Ju = null !== (Bu = null === (xu = cQ) || void 0 === xu ? void 0 : xu.previewModule(yu)) && void 0 !== Bu ? Bu : null;
              if (null === Ku || null === Ju) {
                null === Ku || void 0 === Ku || Ku.endSession(!1), Xu = (0, MR.f)().sampleCount, await (0, fR.f)(Ru, Nu, mu, gN, Xu, await Qu);
                const uu = (0, fR.j)(yu);
                null === uu && console.warn(`${XQ} this ${Eu} build has no image registry: sky and model images won't show`), (0, FE.g)(uu)
              } else {
                (0, EK.e)() && await (0, hu.l)();
                const yu = (0, EK.F)();
                if (null !== yu) {
                  const Ru = (0, fR.R)(Nu);
                  return uu.crash(Cy.RENDER_RELOAD_SITE, new Error(`${yu}${void 0===Ru?"":` (${Ru.message})`}`)), !1
                }
                Xu = await Ku.bindSession(Ju, Ru, (async uu => (0, fR.u)(Nu, rQ, mu, uu, gN, await Qu)))
              }
            } catch (Ku) {
              return uu.crash(rQ, Ku), !1
            }(function(uu, Ru) {
              const yu = uu,
                {
                  requestCapture: Eu,
                  takeCapture: Ku
                } = yu;
              if ("function" !== typeof Eu || "function" !== typeof Ku) return;
              const Qu = {
                request() {
                  Eu.call(yu, Ru)
                },
                take() {
                  var uu;
                  return null !== (uu = Ku.call(yu)) && void 0 !== uu ? uu : null
                }
              };
              window[VK] = Qu
            })(Ru, Xu), SJ = Xu, QJ = !0;
            const Su = performance.now();
            return mJ.boundAtMs = null !== (Ju = (0, EK.I)()) && void 0 !== Ju ? Ju : Su, mJ.indirectHangs = (0, EK.z)(), console.info(`${XQ} ${Eu} renderer bound at ${Math.round(Su)} ms`), !uu.isStopped
          }(Du, eu, ku, ru, xu, pu)) return null;
        if (null !== ru) {
          var uR, RR, yR;
          (0, XR.G)(ru);
          const uu = () => !Du.isStopped && NX();
          yu.e(185).then((() => yu(8946))).then((Ru => {
            let {
              devTools: yu
            } = Ru;
            Du.isStopped || yu.setHost(function(uu) {
              return {
                tools: yK,
                async downloadScene(Ru, yu) {
                  let {
                    width: Eu,
                    height: Ku,
                    colouring: Qu
                  } = yu;
                  "screenshot" === Ru && null === Qu ? await (0, fE.b)(uu, Eu, Ku) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(uu, Ru) {
              return {
                canvas: uu,
                maxTextureSize: uK,
                drawing: Ru,
                resize: (uu, Ru) => {
                  (0, Ay.D)(zR.yb.Resize, 0, uu, Ru, (0, Ay.m)(1))
                },
                restoreSize: () => {
                  const Ru = (0, MR.p)(uu);
                  null !== Ru && (0, Ay.D)(zR.yb.Resize, 0, Ru.cssWidth, Ru.cssHeight, (0, Ay.m)(Ru.renderScale))
                },
                onFrameDrawn: uu => (RK.add(uu), () => {
                  RK.delete(uu)
                })
              }
            }(pu, uu)))
          }), (uu => {
            console.warn(`${XQ} the developer tools didn't load: no captures this session`, uu)
          }));
          const Ru = "webgpu" === ru && null !== (uR = null === Xu || void 0 === Xu || null === (RR = Xu.adapter) || void 0 === RR ? void 0 : RR.vendor) && void 0 !== uR ? uR : null;
          pJ = {
            backend: ru,
            canvas: pu,
            fallbackReason: null !== (yR = null === Xu || void 0 === Xu ? void 0 : Xu.reason) && void 0 !== yR ? yR : null,
            adapterVendor: Ru
          }, qN();
          try {
            (0, iy.u)(ru, pu, Ru)
          } catch (Ku) {
            (0, iy.y)(), console.error(`${XQ} the quality steps didn't start`, Ku)
          }
        }
        const {
          storagePullBreaks: ER,
          splitPassBreaks: rR
        } = await xu;
        rR && console.warn(`${XQ} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const pR = ER ? Zu.e : (0, Zu.m)(Xu, (0, eR.f)());
        if ((0, MK.m)("webgpuloss")) {
          var TR, HR;
          const uu = {
            backend: ru,
            reason: null !== (TR = null === Xu || void 0 === Xu ? void 0 : Xu.reason) && void 0 !== TR ? TR : null,
            source: null !== (HR = null === Xu || void 0 === Xu ? void 0 : Xu.source) && void 0 !== HR ? HR : null,
            storagePullBreaks: ER,
            noWebGpu: pR.messageKey
          };
          (0, IK.d)((Ru => {
            Ru.noteWasmPick(uu)
          }))
        }
        const bR = "webgpu" === ru && !ER;
        if (Wm = (0, Zu.n)(bR ? Du : null, bR && null !== (mu = null === (Ju = cQ) || void 0 === Ju ? void 0 : Ju.pagePreviews().ix) && void 0 !== mu ? mu : null, pR, wN), lJ) return null;
        if (lu.reserveAtJoin((0, gE.k)(null !== Gu && void 0 !== Gu ? Gu : xy.g)), Du.isStopped) return null;
        const CR = uu => {
          if (null !== TJ) try {
            TJ.animationFrame(uu)
          } catch (Ku) {
            aN(Ku)
          }
          if (function(uu, Ru) {
              return Ru && !lJ && !Am && XX() && NX() && uu.framePaces(performance.now())
            }(Du, UJ)) return Du.writePendingInput(), (0, bu.g)(uu, KX), ON(!1, uu), void requestAnimationFrame(CR);
          EX(Du, UJ, "budget") && ((0, DR.g)(Du.lastFrameKind) && NX() && (0, bu.g)(uu, KX), ON(UJ && MJ, uu), IJ.frame(Du.lastFrameKind, UJ && NX(), uu), pX(Du), lu.afterFrame(), requestAnimationFrame(CR))
        };
        requestAnimationFrame(CR);
        return function(uu) {
          if (uu.has("inputLog") && (0, RE.h)((uu => {
              let {
                action: Ru,
                down: yu,
                press: Eu
              } = uu;
              console.info(`${EE} input ${Ru} ${yu?"down":"up"} press ${Eu} at ${performance.now().toFixed(1)}`)
            })), uu.has("inputDump")) {
            const uu = [];
            QE = uu, Object.assign(window, {
              bloxdInputDump: () => uu.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Jm = function(uu, Ru) {
          let yu = null;
          const Eu = () => {
              null !== yu && (clearInterval(yu), yu = null)
            },
            Ku = () => {
              document.hidden ? yu ??= setInterval((() => {
                EX(uu, !1, "budget") ? (pX(uu), Ru.afterFrame()) : Eu()
              }), MQ) : Eu()
            };
          return document.addEventListener("visibilitychange", Ku), Ku(), () => {
            Eu(), document.removeEventListener("visibilitychange", Ku)
          }
        }(Du, lu), Du
      }(Ru).then((uu => {
        var Ru;
        (Eu(PQ), qQ(null !== uu), null !== uu && (pK = performance.now()), YQ(uu), null === uu) ? null === (Ru = cQ) || void 0 === Ru || Ru.pagePreviews().endSession(null === (0, QR.l)()): dm("booted")
      }), (uu => {
        Eu(PQ), qQ(!1), YQ(null), SX({
          site: BQ,
          error: uu,
          header: null
        }, PQ)
      }))
    }

    function ZJ() {
      const uu = iQ;
      null !== uu && gJ().then((Ru => {
        let {
          pageBuiltInAnimationPack: yu
        } = Ru;
        yu().provide(uu)
      }), (uu => {
        console.warn(`${XQ} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, uu)
      }))
    }
    const hJ = new class {
      constructor(uu) {
        this.deps = uu, this.latest = 0, this.jJ = null
      }
      apply(uu, Ru) {
        return this.load(uu, Ru, 0)
      }
      async load(uu, Ru, yu) {
        var Eu;
        const Ku = ++this.latest,
          Qu = this.deps.compiler;
        if (void 0 === Ru || null === Ru || "object" !== typeof Ru || 0 === Object.keys(Ru).length || null === Qu) return this.drop(uu), !1;
        if ((null === (Eu = this.jJ) || void 0 === Eu ? void 0 : Eu.module) === uu && (0, oR.ge)(this.jJ.files, Ru)) return !1;
        try {
          const [yu, Eu] = await Promise.all([Qu(), this.deps.builtIns()]);
          if (Ku !== this.latest) return !1;
          const mu = await yu(Ru, aR, {
            builtIns: Eu
          });
          if (Ku !== this.latest) return !1;
          const Ju = this.call(uu, mu);
          if (void 0 === Ju) throw new vR("the compiled animations didn't read against the built-in pack");
          return this.jJ = {
              module: uu,
              files: Ru
            },
            function(uu) {
              for (let Ru = 0; Ru + 2 < uu.length; Ru += 3) {
                ("error" === uu[Ru] ? console.error : console.warn)(`Animation for the texture pack: ${uu[Ru+1]}: ${uu[Ru+2]}`)
              }
            }(Ju), !0
        } catch (Ju) {
          var mu;
          if (Ku !== this.latest) return !1;
          this.drop(uu), 0 === yu && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", Ju);
          const Eu = (null !== (mu = this.deps.retryAfterMs) && void 0 !== mu ? mu : OR)[yu];
          return void 0 === Eu || Ju instanceof vR || (0, qR.h)(uu) || setTimeout((() => {
            Ku === this.latest && this.load(uu, Ru, yu + 1)
          }), Eu), !1
        }
      }
      call(uu, Ru) {
        try {
          return uu.TEu(Ru)
        } catch (yu) {
          throw (0, qR.i)(uu, yu), yu
        }
      }
      clear(uu) {
        this.latest++, this.drop(uu)
      }
      drop(uu) {
        const Ru = this.jJ;
        if (this.jJ = null, (null === Ru || void 0 === Ru ? void 0 : Ru.module) === uu && !(0, qR.h)(uu)) try {
          this.call(uu, null)
        } catch {}
      }
    }({
      compiler: hR.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: uu
        } = await gJ();
        return uu().whenSet()
      },
      warn: wN
    });
    async function PJ(uu, Ru) {
      let Eu = !1;
      await iJ({
        matchmake: async () => {
          const {
            guestJoinTarget: Ku,
            guestJoinWithPack: Qu
          } = await yu.e(342).then((() => yu(42876)));
          return Eu ? Ku(uu, Ru, PN()) : (Eu = !0, Qu(uu, Ru, (Ru => iN(uu, Ru)), PN))
        },
        onFailure: uu => {
          (0, Cy.showJoinFailure)(uu, PQ)
        },
        rejoin: JN,
        invalidateTrafficCode: NN
      })
    }
    async function iJ(uu) {
      let {
        matchmake: Ru,
        onFailure: yu,
        rejoin: Ku,
        invalidateTrafficCode: Qu,
        pageReady: mu,
        signal: Ju
      } = uu;
      const Nu = () => !0 === (null === Ju || void 0 === Ju ? void 0 : Ju.aborted);
      let Xu;
      const Vu = oE.c.rejoinHold(),
        ru = (0, Hy.L)("wasm", jX);
      let Bu = !1,
        xu = performance.now();
      try {
        if (!await OQ) return {
          kind: "stopped"
        };
        if (Nu()) return {
          kind: "Ty"
        };
        cJ().catch((() => {}));
        let uu = await Ru();
        xu = performance.now();
        const yu = () => performance.now() - uu.matchedAt <= uu.freshMs,
          Eu = oJ(uu.target).catch((() => {}));
        yu() && !Nu() && (Xu = new GE(uu.target, {
          signal: Ju
        }));
        const Qu = performance.now();
        if (null === await oQ) return {
          kind: "stopped"
        };
        var Su;
        if (function(uu) {
            var Ru, yu;
            if (rK.b.markGameEngineConstructed(), TK) return;
            TK = !0;
            const Eu = Math.max(uu, null !== (Ru = xK) && void 0 !== Ru ? Ru : uu);
            (0, BK.m)("ready", Math.max(0, (null !== (yu = SK) && void 0 !== yu ? yu : Eu) - Eu) / 1e3)
          }(Qu), Nu() || (null !== SK && null !== pK ? ((0, nR.m)("wasm_loaded", SK), (0, nR.m)("wasm_core_ready", pK)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await Eu, !yu() && !Nu()) null === (Su = Xu) || void 0 === Su || Su.rematched(), uu = await Ru(), xu = performance.now();
        if (Nu()) return {
          kind: "Ty"
        };
        const Vu = await async function(uu) {
          var Ru, yu, Eu;
          let {
            signal: Ku,
            rejoin: Qu = null,
            early: mu,
            pageReady: Ju
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Ku && void 0 !== Ku && Ku.aborted) throw new DOMException("the join was left", "AbortError");
          const Nu = (Xu = om, Vu = performance.now(), null !== Xu && Vu - Xu < TE);
          var Xu, Vu;
          om = null;
          const ru = new AbortController;
          vJ({
            controller: ru,
            game: null !== (Ru = null === (yu = uu.session) || void 0 === yu ? void 0 : yu.gameNameWithVariation) && void 0 !== Ru ? Ru : null
          }), qm = null, null === (Eu = fm) || void 0 === Eu || Eu.abort(), fm = null, RJ = !1, yJ = null, EJ.clear();
          const Bu = () => {
            (0, HR.i)(ru, (0, HR.e)(Ku))
          };
          null === Ku || void 0 === Ku || Ku.addEventListener("abort", Bu, {
            once: !0
          });
          try {
            var xu, Su, pu;
            const Ru = await oQ;
            if (null === Ru || Ru.isStopped || lJ) throw new Error("no core is running to join a game with");
            if (uu.session && null !== Wm) {
              const Ru = await qJ(Wm.join(uu.session.gameNameWithVariation), ru.signal);
              if ((0, MK.m)("webgpuloss")) {
                const yu = uu.session.gameNameWithVariation,
                  Eu = Wm.couldntRunInJoinedGame();
                (0, IK.d)((uu => uu.noteWasmJoin(yu, Ru, Eu)))
              }
              if (null !== Ru) throw new Zu.i(Ru)
            }
            const [, , , {
              joinRoom: yu
            }] = await qJ(Promise.all([(0, Cu.m)(Ru), oJ(uu), null === Ju || void 0 === Ju ? void 0 : Ju(), cJ()]), ru.signal), Eu = uu.session, Ku = Eu ? {
              ...rN,
              attachSocket: Ru => {
                const yu = jN(Ru, uu.endpoint);
                var Ku;
                null !== yu && (Fm = {
                  conn: yu,
                  info: Eu
                }, null === (Ku = wm) || void 0 === Ku || Ku(Eu.playerDbId));
                return yu
              }
            } : rN, Xu = await yu(Ku, uu, {
              signal: ru.signal,
              early: mu
            }).catch((uu => {
              throw function(uu) {
                if (!(uu instanceof su.b)) return uu;
                if ("roomError" === uu.stage && null !== yJ) return YJ(new su.b(uu.message, uu.stage, uu.code, yJ), uu);
                const Ru = "closed" === uu.stage && null !== Om ? EJ.get(Om.conn) : void 0;
                return void 0 === Ru ? uu : YJ(new su.b(uu.message, uu.stage, Ru.code), uu)
              }(uu)
            }));
            if (Lm !== ru) throw Xu.leave(), new DOMException("the join was left", "AbortError");
            fJ(Xu), null === (xu = ym) || void 0 === xu || xu.newGame();
            const Vu = function(uu) {
              var Ru, yu;
              const {
                session: Eu
              } = uu, Ku = void 0 === Eu ? uu.joinOptions.lobbyName : Eu.lobbyName;
              return {
                endpoint: uu.endpoint,
                game: null !== (Ru = null === Eu || void 0 === Eu ? void 0 : Eu.gameNameWithVariation) && void 0 !== Ru ? Ru : uu.roomName,
                lobby: String(null !== Ku && void 0 !== Ku ? Ku : null),
                postCookies: null !== (yu = uu.postCookies) && void 0 !== yu ? yu : null
              }
            }(uu);
            cm.set(Xu, Vu), AE(Vu);
            const Bu = performance.now(),
              Tu = {
                conn: Xu.conn,
                rejoin: Qu,
                game: null !== (Su = null === (pu = uu.session) || void 0 === pu ? void 0 : pu.gameNameWithVariation) && void 0 !== Su ? Su : "",
                joinedAt: Bu,
                rejoinedAt: Nu ? Bu : null,
                overflow: null
              };
            Zm = Tu,
              function(uu, Ru) {
                DN();
                const yu = {
                  endpoint: Ru,
                  roomId: uu.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Vy({
                    reconnect: (uu, Ru, Eu) => async function(uu, Ru, yu, Eu) {
                      const {
                        roomId: Ku,
                        roomToken: Qu
                      } = IN(uu, Ru), mu = zQ;
                      if (null === mu || mu.isStopped || lJ) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: Ju
                      } = await qJ(cJ(), yu), Nu = {
                        ...rN,
                        attachSocket: Ru => hm !== uu || 0 === uu.heldConn ? (Ru.close(), null) : jN(Ru, uu.endpoint, !0)
                      };
                      return Ju(Nu, uu.endpoint, Ku, Qu, {
                        signal: yu,
                        onAttached: Eu
                      })
                    }(yu, uu, Ru, Eu),
                    releaseSeat: uu => {
                      !async function(uu, Ru) {
                        const {
                          roomId: yu,
                          roomToken: Eu
                        } = IN(uu, Ru);
                        try {
                          const {
                            leaveHeldSeat: Ru
                          } = await cJ();
                          await Ru(uu.endpoint, yu, Eu)
                        } catch (Ku) {
                          console.warn(`${XQ} the held seat of a game left while it reconnected couldn't be released`, Ku)
                        }
                      }(yu, uu)
                    },
                    isLive: () => hm === yu && null !== Zm && !lJ,
                    Dk: uu => {
                      Ym = uu, AN()
                    },
                    onReconnected: uu => {
                      ! function(uu) {
                        const Ru = gm;
                        if (null !== Ru && Ru !== uu) {
                          const yu = cm.get(Ru);
                          void 0 !== yu && cm.set(uu, yu), DJ === Ru && (DJ = uu), Ru.detach()
                        }
                        fJ(uu)
                      }(uu)
                    },
                    onGaveUp: (uu, Ru) => {
                      ! function(uu, Ru, yu) {
                        var Eu, Ku;
                        console.warn(`${XQ} gave up reconnecting (${yu.reason}, ${yu.attempts} attempts)`, yu.lastError), (0, Cy.reportReconnectGaveUp)(yu, PQ);
                        const Qu = null !== (Eu = null === (Ku = Zm) || void 0 === Ku ? void 0 : Ku.rejoin) && void 0 !== Eu ? Eu : null;
                        MN(uu, "gaveUp"), RN();
                        const mu = {
                          code: uu.dropCode,
                          name: null,
                          reason: kQ,
                          canReconnect: !Ru,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        VN(mu, Ru ? null : Qu, !1, {
                          reasonKey: eQ,
                          canPlayAgain: Ru
                        })
                      }(yu, uu, Ru)
                    }
                  })
                };
                hm = yu, null !== Pm && Pm.conn === uu.conn && yu.resume.onInitialInfo(Pm)
              }(Xu, uu.endpoint), performance.mark(pQ), (0, nR.m)("wasm_joined", Bu), setTimeout((() => {
                gm === Xu && (0, nR.g)()
              }), 0), ZJ(), console.info(`${XQ} joined ${uu.roomName} as ${Xu.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const Wu = qm;
            qm = null, null !== Wu && KN(Tu, Wu.mask, Wu.frames);
            const ju = EJ.get(Xu.conn);
            return EJ.clear(), void 0 !== ju && (fJ(null), XN(Xu.conn, ju.code, ju.reason)), Xu
          } finally {
            var Tu;
            null === Ku || void 0 === Ku || Ku.removeEventListener("abort", Bu), Lm === ru && aJ(gm, null), (null === (Tu = Om) || void 0 === Tu ? void 0 : Tu.join) === ru && (Om = null)
          }
        }(uu.target, {
          signal: Ju,
          rejoin: Ku(uu.target),
          early: Xu,
          pageReady: mu
        });
        return Bu = !0, {
          kind: "joined",
          game: Vu
        }
      } catch (Tu) {
        if (Tu instanceof DOMException && "AbortError" === Tu.name || Nu()) return {
          kind: "Ty"
        };
        if (lJ) return {
          kind: "stopped"
        };
        if (RJ && (RJ = !1, await Qu().catch((uu => {
            console.warn(`${XQ} the cached traffic code could not be dropped`, uu)
          }))), null === await oQ) return {
          kind: "stopped"
        };
        if (Tu instanceof Zu.i) return yu(Tu, performance.now() - xu), {
          kind: "failed",
          error: Tu,
          reloading: !1
        };
        if (Tu instanceof su.b && Tu.code === Eu.c.wasmClientNotAllowed.code && GJ) return lN("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Tu,
          reloading: !0
        };
        const uu = Tu instanceof su.b && Tu.code === Eu.c.outdatedVersion.code,
          Ru = () => null === gm,
          Ku = await eX({
            site: Cy.JOIN_SITE,
            error: Tu,
            outdated: uu
          }, (() => {
            yu(Tu, performance.now() - xu)
          }), Ru);
        return {
          kind: "failed",
          error: Tu,
          reloading: Ku
        }
      } finally {
        var pu;
        Bu || ru.end(), oE.c.releaseHold(Vu);
        const uu = null === (pu = Xu) || void 0 === pu ? void 0 : pu.release();
        uu && (0, Cy.reportUnusedSeat)(uu, PQ)
      }
    }

    function YJ(uu, Ru) {
      return uu.stack = Ru.stack, uu
    }

    function oJ(uu) {
      return uu.session ? (0, Cu.t)(hQ, uu.session.gameNameWithVariation) : Promise.resolve()
    }

    function qJ(uu, Ru) {
      return (0, HR.p)(Ru), new Promise(((yu, Eu) => {
        const Ku = () => {
          Eu((0, HR.e)(Ru))
        };
        Ru.addEventListener("abort", Ku, {
          once: !0
        }), uu.then((uu => {
          Ru.removeEventListener("abort", Ku), yu(uu)
        }), (uu => {
          Ru.removeEventListener("abort", Ku), Eu(uu)
        }))
      }))
    }

    function OJ() {
      vJ(null)
    }

    function vJ(uu) {
      var Ru, yu, Eu;
      (function() {
        const uu = hm;
        null !== uu && MN(uu, "left")
      }(), null === aQ || aQ.left) || (aQ.left = !0, null === (Eu = (0, Cu.i)()) || void 0 === Eu || Eu.socketLeft(), (0, Bu.n)({
        websocketUrl: null
      }));
      Lm && (0, HR.i)(Lm, new DOMException("the join was left", "AbortError")), RN(null !== uu), null === (Ru = Wm) || void 0 === Ru || Ru.leave();
      const Ku = gm;
      null !== uu && oE.c.setGame(uu.game), aJ(null, null !== (yu = null === uu || void 0 === uu ? void 0 : uu.controller) && void 0 !== yu ? yu : null), null === Ku || void 0 === Ku || Ku.leave(), uN(0), (0, pR.i)()
    }

    function aJ(uu, Ru) {
      gm = uu, Lm = Ru, null === gm && null === Lm && oE.c.setGame(void 0)
    }

    function fJ(uu) {
      aJ(uu, Lm)
    }

    function uN(uu) {
      const Ru = zQ;
      return null !== UQ && !lJ && null !== Ru && !Ru.isStopped && (!!UQ(su.e, 0, (0, su.w)(uu)) && (Im = !0, 0 === uu || Am || EX(Ru, !1, "all"), !0))
    }

    function RN() {
      var uu, Ru;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Hy.g)();
      const yu = null !== (uu = null === (Ru = Zm) || void 0 === Ru ? void 0 : Ru.overflow) && void 0 !== uu ? uu : null;
      Zm = null, null !== yu && (0, Cy.reportEventOverflow)(yu, PQ)
    }

    function yN() {
      null !== gm || null !== Lm ? OJ() : HN()
    }

    function EN(uu, Ru) {
      console.warn(`${XQ} the event buffer refused records in ${Ru} frames (categories ${uu})`), lJ || (null !== Zm ? KN(Zm, uu, Ru) : null !== Lm && function(uu, Ru, yu) {
        var Eu;
        const Ku = function(uu, Ru) {
          return null === uu ? "drop" : uu.activated ? "keep" : 0 !== (Ru & FR.p.NetSession) ? "fail" : "drop"
        }((null === (Eu = Om) || void 0 === Eu ? void 0 : Eu.join) === uu ? Om : null, Ru);
        "keep" === Ku ? qm = {
          mask: Ru,
          frames: yu
        } : "fail" === Ku && (0, HR.i)(uu, new Error("the join's net session was lost to an event overflow"))
      }(Lm, uu, Ru))
    }

    function KN(uu, Ru, yu) {
      const Eu = uu.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Eu.frames += yu, Eu.acks++, Eu.mask |= Ru;
      const Ku = function(uu, Ru, yu) {
        if (0 === (uu & FR.p.NetSession)) return "none";
        const Eu = null !== Ru.rejoinedAt && yu - Ru.rejoinedAt < WE;
        return null === Ru.rejoin || Eu ? "fail" : "rejoin"
      }(Ru, uu, performance.now());
      "none" !== Ku && queueMicrotask((() => {
        if (Zm !== uu) return;
        const Ru = "rejoin" === Ku && performance.now() - am >= nu.i;
        Eu.outcome = Ru ? "rejoined" : "failed", VN(function(uu, Ru) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: uu,
            automaticallyReconnect: Ru,
            requiresRefresh: !1
          }
        }(null !== uu.rejoin, Ru), uu.rejoin, Ru), OJ(), Ru && (om = performance.now())
      }))
    }

    function QN(uu) {
      UJ = uu, nJ && mN(nJ, uu)
    }

    function mN(uu, Ru) {
      uu.style.visibility = Ru ? "visible" : "hidden"
    }

    function JN(uu) {
      var Ru;
      const yu = uu.roomName,
        Eu = null !== (Ru = uu.joinOptions.lobbyName) && void 0 !== Ru ? Ru : null;
      return () => {
        PJ(yu, Eu)
      }
    }

    function NN() {
      return yu.e(342).then((() => yu(42876))).then((uu => {
        let {
          invalidateGuestTrafficCode: Ru
        } = uu;
        return Ru()
      })).catch((uu => {
        console.warn(`${XQ} the cached traffic code could not be dropped`, uu)
      }))
    }

    function XN(uu, Ru, yu) {
      var Ku, Qu;
      let mu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (lJ) return;
      if ((null === (Ku = Zm) || void 0 === Ku ? void 0 : Ku.conn) !== uu) return void(null !== Lm && EJ.set(uu, {
        code: Ru,
        reason: yu
      }));
      const {
        rejoin: Ju,
        game: Nu,
        joinedAt: Xu
      } = Zm;
      RN(), DN();
      const Vu = (0, nu.m)(Ru, (0, HE.g)(uu));
      if (console.info(`${XQ} the game's connection closed with code ${Ru} (${null!==(Qu=Vu.name)&&void 0!==Qu?Qu:"unrecognised"})`), Ru === Eu.c.gameOrPluginKick.code || mu || (0, Cy.reportDisconnect)(Vu, PQ, {
          closeReason: yu,
          sinceJoinedMs: performance.now() - Xu,
          game: Nu
        }), Vu.requiresRefresh) {
        const uu = "outdatedVersion" === Vu.name,
          yu = new Error(`the game's connection closed with code ${Ru}`),
          Eu = () => null === Zm && null === Lm;
        return void eX({
          site: Cy.JOIN_SITE,
          error: yu,
          outdated: uu
        }, (() => {
          Eu() && VN(Vu, null, !1)
        }), Eu)
      }
      const ru = Vu.canReconnect ? Ju : null,
        Bu = null !== ru && Vu.automaticallyReconnect && performance.now() - am >= nu.i;
      VN(Vu, ru, Bu)
    }

    function VN(uu, Ru, yu) {
      var Eu;
      let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (sJ) return;
      oE.c.unwantedLeave(yu && null !== Ru && 0 === uJ.size), null === (Eu = fm) || void 0 === Eu || Eu.abort();
      const Qu = new AbortController;
      fm = Qu;
      const mu = null === Ru ? null : () => {
        Qu.signal.aborted || (Qu.abort(), Ru())
      };
      if (yu && null !== mu) {
        am = performance.now();
        const uu = setTimeout(mu, nu.e);
        Qu.signal.addEventListener("abort", (() => {
          clearTimeout(uu)
        }))
      }
      const Ju = {
        code: uu.code,
        name: uu.name,
        reason: uu.reason,
        reasonKey: Ku.reasonKey,
        reconnect: mu,
        reconnecting: yu,
        requiresRefresh: uu.requiresRefresh,
        canPlayAgain: Ku.canPlayAgain
      };
      if (uJ.size > 0)
        for (const Xu of [...uJ]) try {
          Xu(Ju)
        } catch (Nu) {
          console.error(`${XQ} an unwanted-leave listener threw`, Nu)
        } else SE((0, rE.i)(uu, null !== mu, yu), Qu.signal).then((Ru => {
          Ru && (null !== mu ? mu() : uu.requiresRefresh && (0, hu.k)())
        }))
    }
    const rN = {
      attachSocket: uu => jN(uu),
      onConnection: uu => (KJ.add(uu), () => {
        KJ.delete(uu)
      }),
      sendRaw: (uu, Ru) => {
        const yu = aQ;
        return null !== yu && yu.conn === uu && BX(yu, Ru)
      },
      leaveRoom: uN,
      closeSocket: uu => {
        var Ru;
        (null === (Ru = aQ) || void 0 === Ru ? void 0 : Ru.conn) === uu && HN()
      },
      flushNet: dN
    };

    function BN(uu) {
      var Ru;
      let {
        aux: yu,
        payload: Eu
      } = uu;
      null === (Ru = zQ) || void 0 === Ru || Ru.queueOptions(yu, Eu)
    }

    function xN(uu, Ru) {
      BN(function(uu, Ru) {
        return mK = uu ? {
          preventMovement: Ru
        } : null, uu ? JK(Ru) : {
          aux: zR.Wb.AdEnd,
          payload: QK
        }
      }(uu, Ru))
    }

    function SN(uu) {
      var Ru;
      sm = uu, null === (Ru = zQ) || void 0 === Ru || Ru.setUiPrefs(uu)
    }

    function pN(uu, Ru) {
      hQ.setMaster(uu, Ru)
    }

    function TN(uu) {
      var Ru;
      tm = uu, null === (Ru = zQ) || void 0 === Ru || Ru.setEnvPrefs(uu)
    }

    function WN(uu) {
      var Ru;
      lm = uu, null === (Ru = zQ) || void 0 === Ru || Ru.setLookPrefs(uu)
    }

    function jN(uu) {
      var Ru;
      let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(uu.url).origin,
        Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (uu.readyState === WebSocket.CLOSING || uu.readyState === WebSocket.CLOSED) return console.warn(`${XQ} a closing or closed socket can't be attached`), null;
      const Ku = zQ;
      if (!Ku || Ku.isStopped) return console.warn(`${XQ} no core is running to attach a socket to`), uu.close(), null;
      if (null === (0, Cu.i)()) return console.warn(`${XQ} the game has not started to attach a socket to`), uu.close(), null;
      if (Cm > zR.B) return console.warn(`${XQ} this core has attached all the sockets it can; reload to play on`), uu.close(), null;
      if (Im && !Am && (EX(Ku, !1, "all"), Ku.isStopped || lJ)) return uu.close(), null;
      HN();
      const Qu = Cm++;
      if (!nN(Ku, "open", Qu, Eu ? zR.Vb.Resume : 0)) return uu.close(), null;
      Eu || SR.b.reset(), Om = null === Lm ? null : {
        join: Lm,
        conn: Qu,
        activated: !1
      }, uu.binaryType = "arraybuffer";
      const mu = new ry.e((() => {
          ! function(uu, Ru) {
            if (aQ !== Ru || uu.isStopped || null === kN(Ru, bQ)) return;
            Ru.detach(), aQ = null, CN(uu, Ru, bQ, "", !0), Ru.ws.close()
          }(Ku, Ju)
        })),
        Ju = {
          ws: uu,
          conn: Qu,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Eu,
          token: null,
          detach: () => {
            mu.dispose(), uu.removeEventListener("message", Nu), uu.removeEventListener("open", Xu), uu.removeEventListener("close", Vu)
          }
        },
        Nu = uu => {
          if (uu.data instanceof ArrayBuffer) {
            var Ru;
            const yu = new Uint8Array(uu.data);
            mu.heard(), Ju.token = null !== (Ru = (0, By.e)(yu)) && void 0 !== Ru ? Ru : Ju.token,
              function(uu, Ru, yu) {
                dX(uu, (() => {
                  uu.rings.net.writeFrame(Ru, yu) || uu.crash(uy.n, `a socket frame of ${yu.byteLength} bytes did not fit the net-in ring`)
                }));
                const Eu = uu.rings.net.cursor >= HQ;
                (Eu || uu.netWrittenSinceFrame >= jQ || document.hidden && performance.now() - km >= MQ) && EX(uu, !1, "budget")
              }(Ku, Qu, yu)
          }
        },
        Xu = () => {
          Eu || (0, nR.m)("wasm_socket_open", performance.now());
          for (const Ru of Ju.pending.splice(0)) uu.send(Ru);
          Ju.pendingBytes = 0
        },
        Vu = uu => {
          if (aQ === Ju && Ku.rings.net.cursor > 0 && EX(Ku, !1, "all"), aQ === Ju) {
            if (Ju.detach(), aQ = null, CN(Ku, Ju, uu.code, uu.reason) || bN(Ku, Ju)) return;
            nN(Ku, "close", Qu), eN(Qu, Ju.left), XN(Qu, uu.code, uu.reason)
          }
        };
      return uu.addEventListener("message", Nu), uu.addEventListener("open", Xu), uu.addEventListener("close", Vu), aQ = Ju, null === (Ru = (0, Cu.i)()) || void 0 === Ru || Ru.socketAttached(Qu), (0, Bu.n)({
        websocketUrl: yu
      }), Qu
    }

    function HN() {
      const uu = aQ;
      if (!uu) return;
      const Ru = zQ,
        yu = uu.resume;
      yu && (dN(), aQ !== uu) || (aQ = null, uu.detach(), uu.ws.close(), null !== Ru && (bN(Ru, uu) || yu && CN(Ru, uu, CQ)) || (null !== Ru && nN(Ru, "close", uu.conn), eN(uu.conn, uu.left)))
    }

    function dN() {
      const uu = zQ;
      null !== uu && !uu.isStopped && !lJ && !Am && uu.rings.net.cursor > 0 && EX(uu, !1, "all")
    }

    function bN(uu, Ru) {
      var yu;
      if (!Ru.resume) return !1;
      const Eu = hm;
      return null !== Eu && null !== Ru.token && "" !== Ru.token && (Eu.pendingHold = {
        conn: Ru.conn,
        token: `${Eu.roomId}:${Ru.token}`
      }), nN(uu, "close", Ru.conn), null === (yu = (0, Cu.i)()) || void 0 === yu || yu.socketDetached(Ru.conn), !0
    }

    function CN(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Qu = kN(Ru, yu);
      if (null === Qu) return !1;
      const {
        jJ: mu,
        token: Ju,
        game: Nu,
        joinedAt: Xu
      } = Qu;
      if (!nN(uu, "close", Ru.conn, zR.F.Held)) return !0;
      console.warn(`${XQ} the game's connection ${Ku?"went silent":`dropped with code ${yu}`}, holding it`);
      const Vu = {
        closeReason: Eu,
        sinceJoinedMs: performance.now() - Xu,
        game: Nu
      };
      return (0, Cy.reportDisconnect)((0, nu.m)(yu), PQ, Vu, Ku ? "silent" : void 0), mu.heldConn = Ru.conn, mu.dropCode = yu, mu.pendingHold = {
        conn: Ru.conn,
        token: `${mu.roomId}:${Ju}`
      }, Am || EX(uu, !1, "all"), !0
    }

    function kN(uu, Ru) {
      const yu = hm,
        Ku = Zm,
        Qu = uu.token;
      return null === yu || null === Ku || lJ || uu.left || Ku.conn !== uu.conn || null === Qu || "" === Qu ? null : (0, Eu.h)(Ru) && yu.resume.canHoldSeat() ? {
        jJ: yu,
        token: Qu,
        game: Ku.game,
        joinedAt: Ku.joinedAt
      } : null
    }

    function eN(uu, Ru) {
      var yu;
      null === (yu = (0, Cu.i)()) || void 0 === yu || yu.closeGame(uu), (0, KK.c)().close(uu), Ru || (0, Bu.n)({
        websocketUrl: null
      })
    }

    function AN() {
      const uu = Ym;
      if (null === uu) return;
      const Ru = (0, Cu.i)();
      lJ || null === Ru || Ru.Dk(uu) ? Ym = null : performance.now() - Gm.pause >= DQ && (Gm.pause = performance.now(), console.warn(`${XQ} the cmd ring had no room for SetPaused(${uu}): written before the next frame`))
    }

    function DN() {
      const uu = hm;
      hm = null, null === uu || void 0 === uu || uu.resume.dispose()
    }

    function MN(uu, Ru) {
      var yu, Eu;
      const {
        heldConn: Ku
      } = uu, Qu = uu.resume.resumingConn;
      uu.heldConn = 0, uu.pendingHold = null, hm === uu && (hm = null), "left" === Ru ? uu.resume.leave() : uu.resume.dispose(), 0 === im || (null === (yu = aQ) || void 0 === yu ? void 0 : yu.conn) !== im || "left" === Ru && (null === (Eu = gm) || void 0 === Eu ? void 0 : Eu.conn) === im || UN(im), "gaveUp" === Ru && 0 !== Qu && UN(Qu), 0 !== Ku && "refused" !== Ru && (console.info(`${XQ} the game held through its drop ${"left"===Ru?"was left":"is given up"}`), null === zQ || zQ.isStopped || nN(zQ, "close", Ku), eN(Ku, !1))
    }

    function IN(uu, Ru) {
      const yu = Ru.indexOf(":");
      return {
        roomId: yu < 0 ? uu.roomId : Ru.slice(0, yu),
        roomToken: Ru.slice(yu + 1)
      }
    }

    function GN(uu) {
      var Ru;
      Pm = uu, uu.conn === im && (im = 0);
      const yu = hm;
      null !== yu && (null === (Ru = Zm) || void 0 === Ru ? void 0 : Ru.conn) === uu.conn && yu.resume.onInitialInfo(uu)
    }

    function UN(uu) {
      var Ru;
      const yu = aQ;
      (null === yu || void 0 === yu ? void 0 : yu.conn) === uu && (yu.left = !0, null === (Ru = (0, Cu.i)()) || void 0 === Ru || Ru.socketLeft(), (0, Bu.n)({
        websocketUrl: null
      }), uN(uu) ? setTimeout((() => {
        aQ === yu && HN()
      }), su.c) : HN())
    }

    function nN(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ku = !1;
      return dX(uu, (() => {
        const {
          net: Qu
        } = uu.rings;
        Ku = "open" === Ru ? Qu.writeOpen(yu, Eu) : Qu.writeClose(yu, Eu), Ku || uu.crash(uy.n, `a socket ${Ru} did not fit the net-in ring`)
      })), Ku
    }

    function sN(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (tN()) {
        const Eu = "browser" === uu && (0, EK.P)() ? "blockedAfterLoss" : "unsupported";
        return (0, Cy.reportUnsupportedFallback)(uu, Eu, Ru, yu), void lN(`the wasm client can't run here (${Ru}; ${Eu})`, Eu)
      }(0, Cy.showUnsupported)(uu, "unsupported", Ru, yu)
    }

    function tN() {
      return GJ && "wasm" !== (0, rR.e)(window.location.search)
    }

    function lN(uu, Ru) {
      console.warn(`${XQ} ${uu}: reloading on the JS client`), null !== Ru && (0, rR.p)(Ru), (0, rR.l)(null === Ru ? "reloadOntoJs" : "decline");
      const yu = () => {
        (0, hu.j)(rR.t)
      };
      (0, Cy.flushCrashReports)(hu.e).then(yu, yu)
    }

    function gN(uu, Ru, yu, Eu) {
      return NJ(uu, Ru, yu, Eu)
    }

    function cN() {
      null === rJ || null === zQ || zQ.isStopped || lJ || null !== xm || null === UQ || (xm = rJ(UQ, wN, ZN().follow))
    }

    function LN() {
      var uu, Ru, yu;
      return null !== (uu = null === (Ru = wQ) || void 0 === Ru || null === (yu = Ru.textures) || void 0 === yu ? void 0 : yu.files()) && void 0 !== uu ? uu : null
    }

    function zN(uu) {
      yu.e(260).then((() => yu(40313))).then((Ru => {
        let {
          setIconFileOverrides: yu
        } = Ru;
        yu(uu)
      }), (uu => {
        console.warn(`${XQ} the item icons couldn't take the texture pack's files`, uu)
      }))
    }

    function FN(uu) {
      ZN().follow((Ru => {
        null !== Ru && Promise.all([Promise.all([yu.e(193), yu.e(45)]).then((() => yu(42912))), (0, EK.L)()]).then((uu => {
          let [{
            followPagePackFiles: yu
          }, Eu] = uu;
          const Ku = null === Eu || (0, fR.l)(Eu) ? "webgl" : Eu.backend;
          yu(Ru, YE.f, Ku, (uu => {
            YE.f.setPageFiles(uu)
          }), wN)
        }), (Ru => {
          console.warn(`${XQ} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Ru), uu()
        }))
      }))
    }

    function wN(uu, Ru) {
      console.warn(`${XQ} ${uu}`, Ru)
    }

    function ZN() {
      return FQ ??= new HK({
        load: uu => Promise.all([yu.e(193), yu.e(51)]).then((() => yu(42914))).then((Ru => {
          let {
            startPageTexturePackFeed: yu
          } = Ru;
          return yu(wN, uu)
        })),
        store: by.f,
        Px: uu => {
          oQ.then((() => {
            (0, Cy.reportTexturePackFeedLoadFailure)(uu, PQ)
          }))
        }
      }), FQ
    }
    const hN = uu => ZN().follow(uu);

    function PN() {
      return ZN().loaded()
    }
    const iN = function(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Ku = 0;
        return async function(Qu, mu) {
          let Ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Nu = ++Ku,
            Xu = Eu() + Ru,
            Vu = await
          function(uu, Ru) {
            let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Eu => {
              const Ku = setTimeout((() => {
                Eu(null), uu.then((uu => {
                  null !== uu && (uu.joinedWithout(), yu(uu))
                }))
              }), Ru);
              uu.then((uu => {
                clearTimeout(Ku), Eu(uu)
              }))
            }))
          }(uu(Qu), Ru, (uu => {
            Nu === Ku && Ju() && mu(uu, Eu() + Ru).catch((uu => {
              yu("the texture pack step after the join failed", uu)
            }))
          }));
          return null === Vu ? null : mu(Vu, Xu)
        }
      }((uu => (0, yR.i)(uu) ? ZN().request() : ZN().forJoin()), jK.b, wN),
      YN = function(uu, Ru) {
        let yu = !1;
        return {
          setGamePackConfirm: uu => {
            yu = null !== uu, Ru(uu)
          },
          packStep: (Ru, Eu, Ku) => uu(Ru, Eu, (() => yu && Ku()))
        }
      }(iN, (uu => {
        ZN().setGamePackConfirm(uu)
      }));

    function oN(uu) {
      YN.setGamePackConfirm(uu)
    }

    function qN() {
      if (lJ || null !== TJ || null === BJ || null === pJ) return;
      const {
        backend: uu,
        canvas: Ru,
        fallbackReason: yu,
        adapterVendor: Eu
      } = pJ, Ku = BJ;
      BJ = null;
      try {
        TJ = Ku({
          backend: uu,
          canvas: Ru,
          fallbackReason: yu,
          adapterVendor: Eu,
          joinedGame: () => lJ ? null : gm,
          inGame: vN,
          shaderPackReach: () => {
            var uu, Ru;
            return null !== (uu = null === (Ru = Wm) || void 0 === Ru ? void 0 : Ru.reachInJoinedGame()) && void 0 !== uu ? uu : null
          },
          msaa: () => SJ > 1,
          writeCmd: (uu, Ru, yu) => null !== UQ && UQ(uu, Ru, yu),
          takeFailedMeshJobs: () => {
            var uu, Ru;
            return null !== (uu = null === (Ru = ym) || void 0 === Ru ? void 0 : Ru.takeFailedMeshJobs()) && void 0 !== uu ? uu : 0
          }
        })
      } catch (Qu) {
        console.error(`${XQ} the frame telemetry didn't start`, Qu)
      }
    }

    function ON(uu, Ru) {
      try {
        var yu, Eu, Ku;
        const Qu = QJ && null !== (yu = null === (Eu = zQ) || void 0 === Eu || null === (Ku = Eu.lastHeader) || void 0 === Ku ? void 0 : Ku.renderPending) && void 0 !== yu ? yu : 0;
        (0, iy.k)(Ru, uu, vN() && !(null !== mK), Qu)
      } catch (Qu) {
        (0, iy.y)(), console.error(`${XQ} the quality steps stopped`, Qu)
      }
    }

    function vN() {
      return null !== gm && DJ === gm && !lJ
    }

    function aN(uu) {
      const Ru = TJ;
      TJ = null;
      try {
        null === Ru || void 0 === Ru || Ru.stop()
      } catch {}
      console.error(`${XQ} the frame telemetry threw: it stops`, uu)
    }

    function fN(uu) {
      var Ru, yu, Eu, Ku;
      if ((0, KK.c)().fire(uu), "message" === uu.type) {
        if (Dm++, uu.Dm === zR.Ic.ERROR && null !== Lm) {
          var Qu;
          const {
            text: Ru,
            dropsCache: yu
          } = (0, nu.r)((new TextDecoder).decode(uu.payload));
          RJ ||= yu, (null === (Qu = Om) || void 0 === Qu ? void 0 : Qu.conn) === uu.conn && (yJ = Ru)
        } else if (uu.Dm === FR.$b.ResumeComplete) {
          var mu;
          null === (mu = hm) || void 0 === mu || mu.resume.onResumeComplete(uu.conn)
        }
        return
      }
      uu.phase === zR.J.Left ? Mm = uu.conn : uu.phase === zR.J.Activated && (null === (Ru = Om) || void 0 === Ru ? void 0 : Ru.conn) === uu.conn ? Om.activated = !0 : uu.phase === zR.J.Resumed ? function(uu) {
        var Ru, yu;
        im = uu;
        const Eu = hm;
        if (null === Eu || 0 === Eu.heldConn || (null === (Ru = aQ) || void 0 === Ru ? void 0 : Ru.conn) !== uu || !aQ.resume || null === Zm) return;
        console.info(`${XQ} the game resumed on conn ${uu}, waiting for its InitialInfo`);
        const Ku = Eu.heldConn;
        Eu.heldConn = 0, aQ.resume = !1, Zm.conn = uu, (null === (yu = Fm) || void 0 === yu ? void 0 : yu.conn) === Ku && (Fm = {
          conn: uu,
          info: Fm.info
        }), SR.b.apply({
          shopInfo: null,
          _shopVersion: ER.b
        })
      }(uu.conn) : uu.phase === zR.J.Held ? function(uu) {
        var Ru;
        const yu = hm,
          Eu = null !== (Ru = null === yu || void 0 === yu ? void 0 : yu.pendingHold) && void 0 !== Ru ? Ru : null;
        if (null !== yu && null !== Eu && Eu.conn === uu) return yu.pendingHold = null, yu.heldConn = uu, im = 0, console.warn(`${XQ} the core holds the game, reconnecting`), void yu.resume.onDropped(Eu.token);
        if (uu === im) {
          im = 0;
          const Ru = zQ;
          null === Ru || Ru.isStopped || (console.info(`${XQ} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), nN(Ru, "close", uu))
        }
      }(uu.conn) : uu.phase === zR.J.Closed && (null === (yu = hm) || void 0 === yu || null === (Eu = yu.pendingHold) || void 0 === Eu ? void 0 : Eu.conn) === uu.conn && (hm.heldConn === uu.conn ? function(uu) {
        const Ru = uu.heldConn,
          yu = uu.dropCode;
        MN(uu, "refused"), console.info(`${XQ} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          eN(Ru, !1), XN(Ru, yu, "", !0)
        }))
      }(hm) : hm.pendingHold = null);
      const Ju = Object.keys(zR.J).find((Ru => zR.J[Ru] === uu.phase)),
        Nu = 0 === uu.code ? "" : ` (code ${uu.code})`;
      console.info(`${XQ} conn ${uu.conn}: ${null!==Ju&&void 0!==Ju?Ju:uu.phase}${Nu}, ${Dm} raw messages so far`), (null === (Ku = gm) || void 0 === Ku ? void 0 : Ku.conn) !== uu.conn || uu.phase !== zR.J.Left && uu.phase !== zR.J.Closed || fJ(null), zm !== uu.conn || uu.phase !== zR.J.Left && uu.phase !== zR.J.Closed || (zm = null, null === gm && null === Lm && oE.c.setGame(void 0));
      for (const Vu of [...KJ]) try {
        Vu(uu.conn, uu.phase, uu.code)
      } catch (Xu) {
        (0, wR.m)(Xu, `${XQ} a connection listener threw`)
      }
    }

    function uX() {
      (0, EK.r)(), queueMicrotask((() => {
        try {
          xX()
        } catch (uu) {
          console.warn(`${XQ} stopping before the reload threw`, uu)
        }(0, Cy.flushCrashReports)(hu.e).then(hu.k, hu.k)
      }))
    }

    function RX() {
      const uu = zQ;
      null === uu || uu.isStopped || null === aQ || Am || !uu.hasPendingCommands() || EX(uu, !1, "budget")
    }

    function yX(uu) {
      var Ru;
      const yu = gm;
      uu.persisted || null === yu || (null === (Ru = aQ) || void 0 === Ru ? void 0 : Ru.conn) !== yu.conn || aQ.left || yu.leave()
    }

    function EX(uu, Ru, Eu) {
      let Ku = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Qu = Am;
      Am = !0;
      try {
        return function(uu, Ru, Eu, Ku) {
          var Qu, mu, Ju, Nu;
          if (lJ) return !1;
          if (dX(uu, QX), lJ || uu.isStopped) return !1;
          VX() && dm("modelsIn");
          AN(), km = performance.now(), Mm = null, Im = !1, (0, bu.J)(), null === (Qu = Nm) || void 0 === Qu || Qu.beforeFrame(), mE(km, uu), (0, bu.E)(km, mX), em = !0;
          const Xu = Ru && XX();
          let Vu;
          try {
            Vu = uu.frame(km, Xu, Eu)
          } finally {
            em = !1
          }
          if (!Vu) return !1;
          xJ.observe(null !== (mu = null === (Ju = uu.lastHeader) || void 0 === Ju ? void 0 : Ju.chunksCancelled) && void 0 !== mu ? mu : 0);
          const ru = uu.lastFrameKind,
            Bu = (0, DR.b)(ru);
          (function(uu) {
            null !== lK && lK.afterFrame(performance.now(), uu)
          })(Bu), null === (Nu = WJ) || void 0 === Nu || Nu.frame(uu, km, ru), Ru && (MJ = Bu);
          Bu && (0, kR.e)(km);
          if (null !== TJ) try {
            TJ.frameRan(uu, km, performance.now(), ru)
          } catch (Su) {
            aN(Su)
          }
          "drawn" === ru && NX() && function() {
            for (const uu of [...RK]) uu()
          }();
          uu.forEachNetOut(rX);
          const xu = aQ;
          null !== Mm && (null === xu || void 0 === xu ? void 0 : xu.conn) === Mm && BX(xu, su.h);
          (function(uu) {
            var Ru;
            if (dJ) return;
            null === kJ && XX() && (kJ = performance.now());
            if (null === Lm && null === gm) return;
            null === kJ || eJ || (eJ = !0, (0, nR.m)("wasm_startup_loaded", kJ));
            let yu = 0;
            null !== gm ? yu = -1 : !0 === (null === (Ru = Om) || void 0 === Ru ? void 0 : Ru.activated) && (yu = ~FR.L.TerrainDrawn);
            const Eu = uu.headerWord(FR.E.LoadSteps) & yu & ~CJ;
            if (0 === Eu) return;
            CJ |= Eu;
            const Ku = performance.now();
            for (const [Qu, mu] of Object.entries(JX)) 0 !== (Eu & FR.L[Qu]) && (0, nR.m)(mu, Ku)
          })(uu), Ru && function(uu) {
            var Ru, Eu, Ku;
            if (null === gm || !XX()) return;
            null === AJ || DJ === gm && !AJ.frame(km, 0 !== (uu.headerWord(FR.E.LoadSteps) & FR.L.TerrainDrawn)) || (AJ = null);
            const Qu = uu.lastHeader,
              mu = !QJ || 0 === (null === Qu || void 0 === Qu ? void 0 : Qu.renderPending);
            !bJ && mu && (bJ = !0, performance.mark(WQ));
            if (DJ === gm) return;
            const Ju = null !== (Ru = null === Qu || void 0 === Qu ? void 0 : Qu.firstView) && void 0 !== Ru ? Ru : zR.bb.NotYet;
            if (QJ && Ju === zR.bb.NotYet) return;
            if (dJ && (!0 !== (null === (Eu = (0, Cu.i)()) || void 0 === Eu ? void 0 : Eu.isSessionLive) || !mu)) return;
            DJ = gm;
            const Nu = gm;
            if (setTimeout((() => {
                gm === Nu && (0, nR.k)()
              }), 0), null === (Ku = Wm) || void 0 === Ku || Ku.playable(), function() {
                clearTimeout(vQ), vQ = setTimeout((() => {
                  vN() && kX((uu => {
                    let {
                      prefetchWorldgenWorker: Ru
                    } = uu;
                    Ru()
                  }))
                }), GQ)
              }(), dJ) return;
            dJ = !0, performance.mark(TQ), (0, MK.m)("render") && Promise.all([yu.e(74), yu.e(47)]).then((() => yu(4464))).then((uu => {
              let {
                renderDebugPlayable: Ru
              } = uu;
              Ru()
            }), (uu => {
              console.warn("The render debug topic didn't load", uu)
            }));
            const Xu = Math.round(performance.now());
            if (QJ && Ju !== zR.bb.Drawn) {
              const uu = Ju === zR.bb.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${XQ} playable at ${Xu} ms on the first view's ${uu} backstop: it wasn't drawn whole in time`), (0, nR.m)("wasm_view_backstop", Xu, uu), "long" === uu) {
                var Vu, ru;
                const uu = null !== (Vu = null === (ru = Zm) || void 0 === ru ? void 0 : ru.game) && void 0 !== Vu ? Vu : "";
                AJ = new ky.e((() => {
                  (0, Cy.reportFirstViewNoTerrain)(uu, PQ)
                }))
              }
            } else console.info(`${XQ} playable at ${Xu} ms${QJ?"":" (no renderer)"}`);
            setTimeout(VJ, 0), (0, TR.h)().catch((uu => {
              console.error(`${XQ} item sprites didn't load, so item particles show the missing texture`, uu)
            })), zE.e.warm()
          }(uu);
          (0, uy.E)(uu, {
            worldgen: um,
            mesh: ym
          }),
          function(uu) {
            uu.forEachEvent(NE);
            for (const Ru of JE) try {
              (0, RE.d)(Ru)
            } catch (Su) {
              if ((0, wR.g)(Su)) {
                uu.crashOn(uy.i, Su);
                break
              }
              console.error(`${EE} an input action listener threw`, Su)
            }
            JE.length = 0
          }(uu), Ku && (0, AR.d)();
          return !uu.isStopped
        }(uu, Ru, "all" === Eu || uu.rings.net.cursor >= HQ || uu.netKeptFrames >= dQ, Ku)
      } finally {
        Am = Qu
      }
    }

    function KX(uu) {
      console.error(`${XQ} a frame-start listener threw`, uu)
    }

    function QX() {
      var uu, Ru, yu, Eu;
      null === (uu = Vm) || void 0 === uu || uu.drain(UQ, nQ), null === (Ru = Sm) || void 0 === Ru || Ru.drain(UQ), null === (yu = pm) || void 0 === yu || yu.drain(performance.now()), XJ(UQ), null === (Eu = xm) || void 0 === Eu || Eu.drain()
    }

    function mX(uu) {
      console.error(`${XQ} a before-frame listener threw`, uu)
    }
    const JX = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function NX() {
      return QJ && XX()
    }

    function XX() {
      return Tm && VX()
    }

    function VX() {
      return null === Vm || Vm.startupDone
    }

    function rX(uu, Ru) {
      const yu = aQ;
      (null === yu || void 0 === yu ? void 0 : yu.conn) === uu ? BX(yu, Ru) : nm++
    }

    function BX(uu, Ru) {
      const {
        ws: yu
      } = uu;
      return yu.readyState === WebSocket.OPEN ? (yu.send(Ru), !0) : yu.readyState === WebSocket.CONNECTING && uu.pendingBytes + Ru.byteLength <= AQ ? (uu.pending.push(Ru.slice()), uu.pendingBytes += Ru.byteLength, !0) : (nm++, !1)
    }

    function xX() {
      var uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu;
      lJ = !0, IJ.stop(), (0, GK.b)(), lK = null, DN(), (0, bu.I)().unlockPointer(), (0, bu.G)(null), null === (uu = Xm) || void 0 === uu || uu(), Xm = null, null === (Ru = (0, Cu.v)()) || void 0 === Ru || Ru.followCursorAim(null), (0, AR.x)(), (0, Cu.g)(), hQ.stop(), null === (yu = jJ) || void 0 === yu || yu(), jJ = null, null === (Eu = HJ) || void 0 === Eu || Eu(), HJ = null, null === (Ku = TJ) || void 0 === Ku || Ku.stop(), TJ = null, (0, Ay.r)(null), null === (Qu = fQ) || void 0 === Qu || Qu(), fQ = null, null === (mu = um) || void 0 === mu || mu.stop(), um = null, null === (Ju = ym) || void 0 === Ju || Ju.stop(), ym = null, null !== (Nu = wQ) && void 0 !== Nu && null !== (Xu = Nu.textures) && void 0 !== Xu && Xu.assets && zN(null), null === (Vu = wQ) || void 0 === Vu || Vu.stop(), wQ = null, ZQ = null;
      const Wu = Em;
      Em = null, Wu && (Wu.stop(), HX(Wu)), null === (ru = Sm) || void 0 === ru || ru.dispose(), Sm = null, null === (Bu = pm) || void 0 === Bu || Bu.dispose(), pm = null, Vm = null, null === (xu = Bm) || void 0 === xu || xu(), Bm = null, null === (Su = Jm) || void 0 === Su || Su(), Jm = null, null === (pu = Nm) || void 0 === pu || pu.stop(), Nm = null, OJ(), oE.c.release(), HN();
      const ju = xm;
      xm = null;
      try {
        null === ju || void 0 === ju || ju.dispose()
      } catch (Hu) {
        console.warn(`${XQ} the sky's images didn't release`, Hu)
      }(0, FE.g)(null), null === (Tu = cQ) || void 0 === Tu || Tu.pagePreviews().endSession(null === (0, QR.l)())
    }

    function SX(uu, Ru) {
      var yu, Eu;
      const Ku = null !== (yu = null === (Eu = Em) || void 0 === Eu ? void 0 : Eu.details()) && void 0 !== yu ? yu : {},
        Qu = uu.site === rQ || uu.site === BQ || uu.site === Cy.RENDER_RELOAD_SITE || uu.site === xQ ? uu.error instanceof WebAssembly.RuntimeError || uu.error instanceof qR.b : !(0, fR.o)(uu.error) && (0, uy.z)(uu);
      Qu && uu.error instanceof Error && (0, QR.P)(uu.error);
      const mu = Qu || uu.site === uy.o ? (0, Cy.readTrap)(uu.error) : null,
        Ju = null !== mu && (0, ZR.g)(mu.kind, mu.refusedBytes) ? mu.refusedBytes : 0,
        Nu = null === Km ? (0, gE.o)(function() {
          try {
            return (0, QR.r)().buffer.byteLength
          } catch {
            return 0
          }
        }(), Ju, null) : Km.ceilingMayRefuse(Ju),
        Xu = Ju > 0 && !Nu && tN();
      var Vu;
      if (Xu && ((0, rR.p)("oom"), (0, rR.l)("decline"), tJ = !0), xX(), (0, EK.e)()) return console.warn(`${XQ} the session stopped at ${uu.site} as the page reloads`, uu.error), void((0, fR.o)(uu.error) || (null === (Vu = uu.header) || void 0 === Vu ? void 0 : Vu.lastError) === zR.O.CoreBusy || (0, Cy.reportStoppedCore)(uu, Ru, mu, {
        memoryDetails: Ku,
        declined: Xu
      }));
      (0, Cy.showCrash)(uu, Ru, mu, {
        memoryDetails: Ku,
        declined: Xu
      })
    }

    function pX(uu) {
      const {
        input: Ru,
        net: yu,
        worker: Eu
      } = uu.rings, Ku = uu.optionsDropped, Qu = Ru.dropped + Ku + yu.dropped + Eu.dropped + nm;
      Qu !== Um && function(uu, Ru) {
        const yu = performance.now();
        return !(yu - Gm[uu] < DQ) && (Gm[uu] = yu, console.warn(`${XQ} ${Ru}`), !0)
      }("dropped", `${Qu} records dropped so far (input ${Ru.dropped}, options ${Ku}, net ${yu.dropped}, worker ${Eu.dropped}, net-out ${nm})`) && (Um = Qu)
    }

    function TX() {
      var uu, Ru;
      const yu = (0, jy.c)();
      if (null === yu) return null;
      const Eu = (0, dy.g)(yu);
      return {
        ...Eu,
        horizontal: Math.min(Eu.horizontal, null !== (uu = null === (Ru = Em) || void 0 === Ru ? void 0 : Ru.shedDistanceInUse()) && void 0 !== uu ? uu : 1 / 0)
      }
    }

    function WX(uu) {
      var Ru, yu;
      return {
        samples: QJ ? SJ : null,
        sunShadows: uu,
        renderDistance: null !== (Ru = null === (yu = TX()) || void 0 === yu ? void 0 : yu.horizontal) && void 0 !== Ru ? Ru : null
      }
    }

    function jX() {
      var uu, Ru, yu;
      const Eu = TX();
      return {
        ...null === (uu = Em) || void 0 === uu ? void 0 : uu.pageKillSnapshot(),
        renderDistance: null !== (Ru = null === Eu || void 0 === Eu ? void 0 : Eu.horizontal) && void 0 !== Ru ? Ru : null,
        renderDistanceVertical: null !== (yu = null === Eu || void 0 === Eu ? void 0 : Eu.vertical) && void 0 !== yu ? yu : null,
        chunkCap: Qm,
        budgetBasis: mm,
        renderBackend: (0, EK.E)()
      }
    }

    function HX(uu) {
      console.info(`${XQ} wasm memory at the session's end`, uu.details())
    }

    function dX(uu, Ru) {
      if (!uu.isStopped) try {
        Ru()
      } catch (yu) {
        uu.crash(uy.q, yu)
      }
    }

    function bX() {
      return Rm ??= yu.e(68).then((() => yu(42923))).catch((uu => {
        throw Rm = null, uu
      })), Rm
    }
    async function CX() {
      const {
        createWorldgenWorker: uu,
        worldgenWorkerReady: Ru
      } = await bX();
      return await Ru(), uu
    }

    function kX(uu) {
      var Ru;
      null === (Ru = Rm) || void 0 === Ru || Ru.then(uu, (() => {}))
    }

    function eX(uu, Ru, yu) {
      return async function(uu, Ru, yu) {
        let {
          stop: Eu,
          stillWanted: Ku
        } = yu;
        const Qu = await (0, jE.h)(uu, {
          stillWanted: Ku,
          beforeReload: async () => {
            Eu(), await (0, Cy.flushCrashReports)(hu.e)
          },
          reload: hu.k
        });
        return Qu || Ru(), Qu
      }(uu, Ru, {
        stop: xX,
        stillWanted: yu
      })
    }
    let AX = !1;

    function DX() {
      return AX = !0, async function(uu, Ru, Eu) {
        const {
          gamePackSource: Ku
        } = await yu.e(343).then((() => yu(42885)));
        await YN.packStep(uu, ((yu, Eu) => yu.packForGame(uu, Ku(Ru), Eu)), Eu)
      }(...arguments)
    }

    function MX(uu) {
      ! function(uu, Ru) {
        uu((uu => {
          null === uu || void 0 === uu || uu.subscribe((uu => {
            let {
              pack: yu,
              gameSource: Eu
            } = uu;
            Ru(null === Eu || null === yu ? null : {
              pack: yu,
              source: "" === Eu ? null : Eu
            })
          }))
        }))
      }(hN, uu)
    }
    let IX = !1,
      GX = null,
      UX = !1,
      nX = !1;

    function sX() {
      var uu;
      IX || (IX = !0, wJ("play", wu), (0, Bu.k)(new iX), Ju.gameBridge.attach(Uu), zX().catch((() => {})), (0, Cu.z)((uu => {
        uR(uu.setTextHost)
      })), uu = gX, uJ.add(uu), function(uu) {
        for (const Ru of jm) uu(Ru);
        Hm.add(uu)
      }((uu => {
        lX(tX[uu])
      })))
    }
    const tX = {
      booted: Qu.p.INITIALISE_NOA,
      texturesIn: Qu.p.REGISTRATION,
      modelsIn: Qu.p.SETUP_LIFEFORMS
    };

    function lX(uu) {
      Nu.k.Op("matchmakeAndPlayStepCompleted", {
        step: uu,
        totalSubSteps: 1
      })
    }

    function gX(uu) {
      if (!UX) return;
      const {
        gameNameWithVariation: Ru,
        lobbyName: yu
      } = (0, Bu.c)();
      if (uu.code === Eu.c.serverUpdating.code) return (new iX).leaveLive(), void LX(Ru, yu);
      Nu.k.Op("unwantedLeftGame", {
        reason: cX(uu),
        requiresRefresh: uu.requiresRefresh,
        canReconnect: null !== uu.reconnect,
        automaticallyReconnect: uu.reconnecting,
        canPlayAgain: uu.canPlayAgain,
        gameNameWithVariation: Ru,
        lobbyName: yu
      }), (new iX).leaveLive()
    }

    function cX(uu) {
      return null !== uu.reasonKey ? {
        translationKey: uu.reasonKey
      } : "gameOrPluginKick" === uu.name ? uu.reason : `You have disconnected from the server.\n${uu.reason}`
    }

    function LX(uu, Ru) {
      var Eu;
      Eu = (0, Xu.u)(uu, Ru), Promise.resolve().then((() => yu(1467))).then((uu => {
        let {
          navigatePreserveSearch: Ru
        } = uu;
        Ru(Eu)
      })).catch((uu => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", uu), (0, hu.g)(Eu)
      }))
    }

    function zX() {
      return GX ??= Promise.all([yu.e(69), yu.e(72), yu.e(71), yu.e(70), yu.e(83), yu.e(259), yu.e(199), yu.e(216), yu.e(237), yu.e(212), yu.e(46)]).then((() => yu(40253))).then((uu => {
        try {
          uu.attachPlayGameSources()
        } catch (Ru) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Ru),
            function(uu) {
              oQ.then((Ru => {
                null === Ru || Ru.isStopped || lJ ? console.warn(`${XQ} the play sources threw as they attached, after the client stopped`, uu) : SX({
                  site: xQ,
                  error: uu,
                  header: null
                }, PQ)
              }))
            }(Ru), Ru
        }
      }), (uu => {
        throw GX = null, new Cu.e(uu)
      })), GX
    }
    async function FX(uu, Ru) {
      sX(), AX = !0, UX = !0;
      let yu = {
          place: uu.place,
          matchedAt: uu.matchedAt
        },
        mu = uu.place.gameNameWithVariation;
      const Ju = (0, ru.h)();
      let Nu = null;
      const Xu = await iJ({
        matchmake: async () => {
          let Ru = yu;
          if (yu = null, null === Ru) {
            const yu = await uu.rematch();
            if (yu.isError()) throw Nu = yu.asError().forward(), new Error(yu.asError().message);
            Ru = {
              place: yu.getValue(),
              matchedAt: performance.now()
            }
          }
          mu = Ru.place.gameNameWithVariation;
          return {
            target: await (0, lu.e)(uu.userContext, Ru.place, PN(), Ju),
            matchedAt: Ru.matchedAt,
            freshMs: lu.b
          }
        },
        pageReady: zX,
        onFailure: (uu, Ru) => {
          null === Nu && function(uu, Ru) {
            (0, Cy.reportPageJoinFailure)(uu, PQ, Ru)
          }(uu, {
            sinceJoinStartMs: Ru,
            game: mu
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => uu.userContext.invalidateTrafficCode(),
        signal: Ru
      });
      switch (Xu.kind) {
        case "joined":
          if (Ju) {
            const {
              game: uu
            } = Xu;
            (0, ru.u)((() => {
              uu.endJoinAd()
            }))
          }
          return nX || (nX = !0, (0, pu.d)()), UX ? (lX(Qu.p.CONNECT_TO_GAME_SERVER), lX(Qu.p.SHADER_PACK), function() {
            var uu, Ru;
            return null !== (uu = null === (Ru = Wm) || void 0 === Ru ? void 0 : Ru.runsInJoinedGame()) && void 0 !== uu && uu
          }() && (0, Su.f)(uu.userContext, mu).catch((uu => {
            console.error("Failed to report the shader pack session", uu)
          })), function() {
            const uu = function() {
              var uu, Ru;
              return null !== (uu = null === (Ru = Wm) || void 0 === Ru ? void 0 : Ru.couldntRunInJoinedGame()) && void 0 !== uu ? uu : null
            }();
            null !== uu && (0, Su.e)(uu)
          }(), Ku.c.value(void 0)) : PX("The server ended the game as it joined");
        case "failed":
          if (!Xu.reloading) {
            if (null !== Nu) return Nu;
            if ((Xu.error instanceof su.l || Xu.error instanceof su.b) && Xu.error.code === Eu.c.serverUpdating.code) {
              if (Ru.aborted) return PX("Left the game while it loaded");
              const {
                gameNameWithVariation: uu,
                lobbyName: yu
              } = (0, Bu.c)();
              return LX(uu, yu), PX("The server is updating")
            }
            return Xu.error instanceof Zu.i ? Ku.c.errorWithCode(Xu.error.messageKey, Qu.p.SHADER_PACK, {
              severity: "medium"
            }) : Ku.c.errorWithCode(function(uu) {
              if (uu instanceof su.v || uu instanceof Hu.i) return uu.message;
              if (wX(uu)) return (0, nu.p)(uu.code, uu.serverText);
              return nu.j
            }(Xu.error), Qu.p.CONNECT_TO_GAME_SERVER, {
              error: ZX(Xu.error) ? Xu.error : void 0,
              severity: hX(Xu.error),
              gameServerUnreachable: (0, tu.e)(Xu.error),
              rematch: (0, Wu.c)(Xu.error),
              gameRefused: (0, ju.c)(Xu.error)
            })
          }
          return PX("Reloading into the new build");
        case "stopped":
          return PX("The game client stopped, and shows why");
        case "Ty":
          return PX("Left the game while it loaded")
      }
    }

    function wX(uu) {
      return uu instanceof su.l || uu instanceof su.b && "attach" !== uu.stage
    }

    function ZX(uu) {
      return !(uu instanceof su.v) && !wX(uu) && void 0 === (0, tu.e)(uu)
    }

    function hX(uu) {
      return wX(uu) ? uu instanceof su.b && (0, nu.m)(uu.code).requiresRefresh ? "medium" : "low" : ZX(uu) || uu instanceof su.v ? "medium" : "low"
    }

    function PX(uu) {
      return Ku.c.errorWithCode(uu, Qu.p.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Ty: !0
      })
    }
    class iX {
      leave(uu) {
        if ((0, du.d)()) {
          var Ru, yu;
          if ((0, mu.b)()) return;
          (0, xu.d)(!0 === (null === (Ru = (0, du.i)()) || void 0 === Ru || null === (yu = Ru.currentViewer) || void 0 === yu ? void 0 : yu.unsavedChanges), uu)
        } else this.leaveLive()
      }
      leaveLive() {
        var uu;
        AX && (null === (uu = PN()) || void 0 === uu || uu.endGamePack());
        if (!UX) return;
        UX = !1, (0, Tu.h)();
        try {
          var Ru;
          null === (Ru = (0, Cu.v)()) || void 0 === Ru || Ru.clearWasmCameraScreen()
        } catch (Eu) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Eu)
        }
        const {
          gameNameWithVariation: yu
        } = (0, Bu.c)();
        try {
          yN()
        } finally {
          (0, Bu.n)({
            websocketUrl: null
          }), Nu.k.Op("leaveGame", {
            gameNameWithVariation: yu
          }), (0, Vu.Y)()
        }
      }
      isReplay() {
        return (0, du.d)()
      }
    }
  },
  40582: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      e: () => Eu,
      i: () => Ju,
      m: () => mu
    });
    const Eu = 12e4,
      Ku = 3e4,
      Qu = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: uu => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", uu), () => {
          document.removeEventListener("visibilitychange", uu)
        })
      };

    function mu(uu) {
      return `it sent no start within ${Math.round(uu)} ms`
    }
    class Ju {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Qu;
        this.timeoutMs = uu, this.onTimeout = Ru, this.now = yu, this.visibility = Eu, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Eu.listen((() => {
          this.onVisibility()
        })), Eu.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const uu = this.step;
        return null === uu ? 0 : Math.min(this.now() - uu.at, uu.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const uu = this.timeoutMs - this.counted;
        if (uu <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Ru = Math.min(uu, 5e3);
        this.step = {
          at: this.now(),
          ms: Ru
        }, this.arm(Ru, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(uu, Ru) {
        this.timer = setTimeout((() => {
          this.timer = null, Ru()
        }), uu)
      }
    }
  },
  40454: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    const Eu = {
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
  38496: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(3510);
    const Ku = ["none", "idle", "now"];

    function Qu() {
      const uu = () => (0, Eu.w)();
      return {
        memoryBytes: () => (0, Eu.r)().buffer.byteLength,
        reserveUpFront: Ru => uu().qV(Ru),
        reserveAhead: Ru => uu().oV(Ru),
        setCeiling: Ru => {
          uu().OV(Ru)
        },
        lowWater: () => Ku[uu().YV()] ?? "none",
        stats: () => function(uu) {
          const Ru = new Uint32Array((0, Eu.r)().buffer, uu, 17),
            yu = uu => Ru[uu] ?? 0,
            Ku = uu => ({
              upFront: yu(uu),
              ahead: yu(uu + 1),
              onDemandInFrame: yu(uu + 2),
              onDemand: yu(uu + 3)
            });
          return {
            memoryBytes: yu(0),
            initialBytes: yu(1),
            liveBytes: yu(2),
            peakLiveBytes: yu(3),
            headroomBytes: yu(4),
            unusedBytes: yu(5),
            ceilingBytes: yu(6),
            reservesRefused: yu(7),
            grows: Ku(8),
            grownBytes: Ku(12),
            allocationsRefused: yu(16)
          }
        }(uu().vV()),
        takeBallast: () => uu().aV(),
        takePressure: () => uu().fV()
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);