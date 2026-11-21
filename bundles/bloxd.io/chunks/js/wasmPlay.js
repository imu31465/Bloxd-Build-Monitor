export const id = 61;
export const ids = [61];
export const modules = {
  39734: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      f: () => Nd
    });
    const pd = "The world isn't loaded, so no blocks can be seen.",
      Nd = "The world isn't loaded, so nothing in it can be seen."
  },
  39246: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Od,
      e: () => ed,
      h: () => Ld
    });
    var pd = kd(2704);
    const Nd = 0,
      Wd = 2,
      Pd = 3,
      Zd = 4;
    class gd {
      constructor(dd, Jd) {
        this.width = dd, this.oo = Jd, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(dd * Jd)
      }
      push(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let pd = 0; pd < this.width; pd++) kd[pd] = dd[Jd + pd];
        return this.next = (this.next + 1) % this.oo, this.size = Math.min(this.size + 1, this.oo), kd
      }
      lines() {
        const dd = [],
          Jd = (this.next - this.size + this.oo) % this.oo;
        for (let kd = 0; kd < this.size; kd++) {
          const pd = (Jd + kd) % this.oo * this.width;
          dd.push(Array.from(this.data.subarray(pd, pd + this.width)).join(","))
        }
        return dd
      }
    }

    function Cd(dd) {
      return Number.isFinite(dd) ? String(Math.round(10 * dd) / 10) : String(dd)
    }

    function Kd(dd) {
      return Number.isFinite(dd) ? dd.toFixed(1) : String(dd)
    }
    class od {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.lE = 0, this.pastLimit = 0, this.lockSkips = 0, this.rO = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class ld {
      constructor() {
        var dd = this;
        this.tally = new od, this.records = new gd(10, 3600), this.events = new gd(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [pd, gd, od, ld, Qd, Ld, Od, ed, Rd, Id] = dd.records.push(Jd, kd), Gd = dd.tally;
          switch (Gd.frames++, Od) {
            case Nd:
              return void Gd.idle++;
            case Zd:
              return void Gd.rO++;
            case Pd:
              return Gd.lockSkips++, void(0 === od && 0 === ld || dd.outlier(`lock skip dropped raw (${Cd(od)}, ${Cd(ld)}) at ${Kd(pd)} ms`))
          }
          Gd.looked++, Number.isFinite(gd) && (Gd.dtMin = Math.min(Gd.dtMin, gd), Gd.dtMax = Math.max(Gd.dtMax, gd), Gd.dtSum += gd, gd > 0 && (Gd.peakRate = Math.max(Gd.peakRate, Math.hypot(Qd, Ld) / gd))), Gd.raw[0] += od, Gd.raw[1] += ld, Gd.turned[0] += Qd, Gd.turned[1] += Ld;
          const vd = Math.abs(od) > Id || Math.abs(ld) > Id,
            xd = `raw (${Cd(od)}, ${Cd(ld)}) over ${Kd(gd)} ms, limit ${Cd(Id)}, filter v (${ed.toFixed(3)}, ${Rd.toFixed(3)}) px/ms, at ${Kd(pd)} ms`;
          Od === Wd ? (Gd.lE++, dd.outlier(`spike put right: ${xd} -> turned (${Cd(Qd)}, ${Cd(Ld)})`)) : vd ? (Gd.pastLimit++, dd.outlier(`kept past limit: ${xd}`)) : gd > 50 && (Gd.longFrames++, dd.outlier(`long frame: ${xd}, turned in full`))
        }, this.onMouseMove = dd => {
          const Jd = this.tally,
            {
              movementX: kd,
              movementY: pd
            } = dd;
          Jd.events++;
          const Nd = Math.max(Math.abs(kd), Math.abs(pd));
          Jd.eventMax = Math.max(Jd.eventMax, Nd);
          const Wd = null !== document.pointerLockElement,
            Pd = this.event;
          Pd[0] = dd.timeStamp, Pd[1] = kd, Pd[2] = pd, Pd[3] = Wd ? 1 : 0, this.events.push(Pd), Nd >= 200 && (Jd.bigEvents++, this.eventOutlier(`big mousemove (${kd}, ${pd}) at ${Kd(dd.timeStamp)} ms, lock ${Wd?"EC":"free"}`))
        }, this.onLockChange = () => {
          const dd = document.pointerLockElement;
          (0, pd.h)("look", `pointer lock ${dd?`gained (${dd.tagName.toLowerCase()})`:"lost"} at ${Kd(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, pd.h)("look", `pointer lock request failed at ${Kd(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, pd.h)("look", `page ${document.visibilityState} at ${Kd(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const dd = this.tally;
          if (this.tally = new od, 0 === dd.events && 0 === dd.raw[0] && 0 === dd.raw[1] && 0 === dd.lockSkips && 0 === dd.lE && 0 === dd.dropped) return;
          const Jd = dd.looked > 0 ? dd.dtSum / dd.looked : NaN,
            kd = [`${dd.frames} frames (${dd.looked} looked, ${dd.idle} idle${"wasm"===this.client?`, ${dd.rO} carried`:""})`, `dt avg ${Kd(Jd)} min ${Kd(dd.dtMin)} max ${Kd(dd.dtMax)}, ${dd.longFrames} long`, `${dd.events} mousemoves (max ${Cd(dd.eventMax)} px, ${dd.bigEvents} big)`, `raw (${Cd(dd.raw[0])}, ${Cd(dd.raw[1])}) turned (${Cd(dd.turned[0])}, ${Cd(dd.turned[1])})`, `peak ${dd.peakRate.toFixed(2)} px/ms`, `put right ${dd.lE}, past limit ${dd.pastLimit}, lock skips ${dd.lockSkips}`, "lock " + (document.pointerLockElement ? "EC" : "free")];
          dd.dropped > 0 && kd.push(`${dd.dropped} doubled spike copies dropped`), dd.lost > 0 && kd.push(`${dd.lost} records lost`), dd.suppressed > 0 && kd.push(`${dd.suppressed} outlier lines not shown`), (0, pd.h)("look", `1s: ${kd.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(dd, Jd) {
        this.client = dd, this.take = Jd;
        const {
          screen: kd
        } = window;
        (0, pd.h)("look", `start: ${dd} client, dpr ${window.devicePixelRatio}, screen ${kd.width}x${kd.height}, pointer lock ${document.pointerLockElement?"EC":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, pd.g)("look", this.dump))
      }
      outlier(dd) {
        const Jd = this.tally;
        Jd.outliers >= 20 ? Jd.suppressed++ : (Jd.outliers++, (0, pd.h)("look", dd))
      }
      eventOutlier(dd) {
        const Jd = this.tally;
        Jd.eventLines >= 10 ? Jd.suppressed++ : (Jd.eventLines++, (0, pd.h)("look", dd))
      }
      takeRecords() {
        var dd;
        const Jd = null === (dd = this.take) || void 0 === dd ? void 0 : dd.call(this);
        if (Jd && Jd.length >= 2) {
          this.tally.lost += Jd[0], this.tally.dropped += Jd[1];
          for (let dd = 2; dd + 10 <= Jd.length; dd += 10) this.record(Jd, dd)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Qd = null;

    function Ld(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Qd ??= new ld, Qd.start(dd, Jd), Qd.record
    }

    function Od() {
      var dd;
      null === (dd = Qd) || void 0 === dd || dd.endTake()
    }

    function ed() {
      var dd;
      null === (dd = Qd) || void 0 === dd || dd.droppedCopy()
    }
  },
  9125: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    const pd = new Set(["chunkBorders"])
  },
  9274: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      d: () => Nd,
      e: () => Kd
    });
    var pd = kd(1598);

    function Nd(dd) {
      var Jd;
      return {
        ...Pd.store,
        yaw: Pd.store.yaw + (null !== (Jd = pd.c[dd].previewYaw) && void 0 !== Jd ? Jd : 0)
      }
    }
    const Wd = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Pd = {
        player: Wd,
        store: {
          ...Wd,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Zd(dd, Jd) {
      dd instanceof Promise ? dd.then(Jd).catch((dd => {
        console.error("Couldn't open the preview", dd)
      })) : Jd(dd)
    }
    class gd {
      constructor(dd) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Zd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height), null !== this.view && dd.show(this.view))
        }))
      }
      show(dd) {
        var Jd;
        this.view = dd, null === (Jd = this.opened) || void 0 === Jd || Jd.show(dd)
      }
      resize(dd, Jd) {
        var kd;
        this.size = {
          width: dd,
          height: Jd
        }, null === (kd = this.opened) || void 0 === kd || kd.resize(dd, Jd)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    class Cd {
      constructor(dd) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(dd).then((dd => dd.ready)), Zd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.opened) || void 0 === Jd ? void 0 : Jd.isReady()) && void 0 !== dd && dd
      }
      setCosmetic(dd, Jd) {
        var kd;
        null === (kd = this.opened) || void 0 === kd || kd.setCosmetic(dd, Jd)
      }
      playEmote(dd) {
        var Jd;
        null === (Jd = this.opened) || void 0 === Jd || Jd.playEmote(dd)
      }
      setOrbit(dd) {
        var Jd;
        null === (Jd = this.opened) || void 0 === Jd || Jd.setOrbit(dd)
      }
      resetCamera() {
        var dd;
        null === (dd = this.opened) || void 0 === dd || dd.resetCamera()
      }
      async untilDrawn(dd) {
        var Jd;
        await this.ready, await (null === (Jd = this.opened) || void 0 === Jd ? void 0 : Jd.untilDrawn(dd))
      }
      resize(dd, Jd) {
        var kd;
        this.size = {
          width: dd,
          height: Jd
        }, null === (kd = this.opened) || void 0 === kd || kd.resize(dd, Jd)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    const Kd = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(dd) {
        this.host = dd
      }
      setDefaultHost(dd) {
        this.makeDefault = dd
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(dd) {
        return new gd(this.current().openMob(dd))
      }
      openPet(dd) {
        return new gd(this.current().openPet(dd))
      }
      openMobLineup(dd) {
        return new gd(this.current().openMobLineup(dd))
      }
      openCharacter(dd, Jd) {
        return new Cd(this.current().openCharacter(dd, Jd))
      }
    }
  },
  39385: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od,
      f: () => ld
    });
    var pd = kd(149),
      Nd = kd(183),
      Wd = kd(1509),
      Pd = kd(2812),
      Zd = kd(1520),
      gd = kd(36640),
      Cd = kd(645),
      Kd = kd(39347);

    function od(dd) {
      (0, Pd.f)("matchmake_failed", dd, pd.n[pd.n.SHADER_PACK])
    }
    async function ld(dd, Jd) {
      var kd;
      const pd = null === (kd = await Kd.shaderPackPage.preload()) || void 0 === kd ? void 0 : kd.listing,
        Pd = (0, gd.c)();
      pd && null !== Pd && await Zd.d.reportShaderPackSession(dd, {
        packId: pd.packId,
        sourceHash: pd.sourceHash,
        game: (0, Wd.e)(Jd, Nd.B, "other"),
        playSessionId: Pd,
        visitSessionId: (0, Cd.d)()
      })
    }
  },
  39203: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd
    });
    var pd = kd(29),
      Nd = kd(1307),
      Wd = kd(3308);
    const Pd = "Reconnecting";
    class Zd {
      constructor(dd) {
        this.hooks = dd, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = dd => {
          dd.persisted || this.leave()
        }, this.controller = new Wd.b((Jd => dd.reconnect(Jd)), {
          isSessionLive: () => !this.ended && dd.isLive(),
          onPhaseChanged: dd => {
            this.onPhaseChanged(dd)
          },
          onReconnected: Jd => {
            dd.onReconnected(Jd)
          },
          onGaveUp: Jd => {
            !this.ended && dd.isLive() && dd.onGaveUp(this.sessionBased, Jd)
          }
        })
      }
      onInitialInfo(dd, Jd) {
        this.graceMs = dd, this.sessionBased = Jd
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(dd) {
        this.ended || this.controller.onConnectionLost(dd, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const dd = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Jd = this.controller.heldToken;
        this.end(), dd && "" !== Jd && this.hooks.releaseSeat(Jd)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(dd) {
        const Jd = "frozen" === dd || "resuming" === dd;
        Jd !== this.stopped && (this.stopped = Jd, this.hooks.freeze(Jd));
        const kd = "frozen" === dd || "resuming" === dd && this.frozen;
        kd && !this.frozen ? (0, Nd.p)(Pd) : !kd && this.frozen && (0, Nd.o)(Pd), this.frozen = kd, this.setListening("connected" !== dd), pd.j.nO(Wd.i, kd ? "frozen" : dd)
      }
      setListening(dd) {
        dd !== this.listening && (this.listening = dd, dd ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39206: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = dd, this.now = Jd, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const dd = this.now(),
            Jd = dd - this.lastCheckAt <= 2e3;
          this.lastCheckAt = dd;
          const kd = "visible" === document.visibilityState;
          !kd || Jd && this.wasVisible || (this.resumedAt = dd), this.wasVisible = kd, kd && dd - this.lastHeardAt > 12e3 && dd - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Jd(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  9169: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(1078);

    function Nd() {
      var dd, Jd;
      return null !== (dd = null === (Jd = screen.orientation) || void 0 === Jd ? void 0 : Jd.type) && void 0 !== dd ? dd : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Wd = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Nd() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Nd(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, pd.ZO)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const dd of this.resizers) dd()
          }
        }), 1e3)
      }
      heldSizer(dd) {
        let Jd = !1;
        return () => {
          if (Jd && this.isHeld()) return null;
          const kd = dd();
          return Jd ||= null !== kd, kd
        }
      }
      onRelease(dd) {
        return this.resizers.add(dd), () => {
          this.resizers.delete(dd)
        }
      }
    }
  },
  39376: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    let pd = !1;
    async function Nd(dd, Jd) {
      if (!pd) {
        pd = !0;
        try {
          const [{
            reloadBloxd: pd
          }, {
            NotificationProvider: Nd
          }] = await Promise.all([Promise.resolve().then((() => kd(1753))), Promise.resolve().then((() => kd(1371)))]);
          if (!dd || !0 === await Nd.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void pd(Jd)
        } catch (Nd) {
          console.error("Leaving the replay failed", Nd)
        }
        pd = !1
      }
    }
  },
  39220: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      h: () => Kd
    });
    var pd = kd(1743),
      Nd = kd(193),
      Wd = kd(1726),
      Pd = kd(1794),
      Zd = kd(1220),
      gd = kd(1147);
    async function Cd(dd, Jd) {
      return function(dd) {
        return "object" === typeof dd && null !== dd && dd.code === Nd.e.VpnIp.code
      }(Jd) && function(dd) {
        return Wd.e.supports("appCheck") && dd.isLoggedIn() && !dd.hasTriedAppAttestation()
      }(dd) && await async function(dd) {
        try {
          const {
            token: Jd
          } = await (0, Pd.b)(), {
            "3PSIDMCPP": kd
          } = await (0, gd.postJsonWithMetricsCookiesAndJsonResponse)(`${Zd.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Jd
          }, {
            retries: 0
          }, dd.getMetricsCookies());
          return dd.setAppAttestedAuthJwt(kd), !0
        } catch (Jd) {
          return Jd instanceof pd.c && "failed" === Jd.code ? (console.warn("The app couldn't get an App Check token:", Jd), dd.markAppAttestationTried()) : console.error("Failed to attest the app:", Jd), !1
        }
      }(dd)
    }
    async function Kd(dd, Jd) {
      try {
        return await Jd()
      } catch (kd) {
        if (!await Cd(dd, kd)) throw kd
      }
      return Jd()
    }
  },
  41042: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gd
    });
    var pd = kd(1769);
    const Nd = 33177600,
      Wd = 3e4;
    let Pd = !1;

    function Zd(dd, Jd, kd) {
      if (!dd.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Pd) return Promise.reject(new Error("A screenshot is already being taken"));
      Pd = !0;
      const pd = function(dd, Jd, kd) {
        const pd = Math.max(1, dd),
          Wd = Math.max(1, Jd),
          Pd = Math.min(1, kd / Math.max(pd, Wd), Math.sqrt(Nd / (pd * Wd)));
        return {
          width: Math.max(1, Math.floor(pd * Pd)),
          height: Math.max(1, Math.floor(Wd * Pd))
        }
      }(Jd, kd, dd.maxTextureSize);
      return dd.resize(pd.width, pd.height), new Promise(((Jd, kd) => {
        let pd, Nd = 2,
          Zd = null;
        const gd = () => {
          var Jd;
          Pd = !1, null === (Jd = Zd) || void 0 === Jd || Jd(), clearTimeout(pd), dd.restoreSize()
        };
        pd = setTimeout((() => {
          gd(), kd(new Error("No frame was drawn to capture"))
        }), Wd), Zd = dd.onFrameDrawn((() => {
          if (Nd--, Nd > 0) return;
          const {
            canvas: pd
          } = dd, Wd = {
            width: pd.width,
            height: pd.height
          };
          try {
            pd.toBlob((dd => {
              dd ? Jd({
                blob: dd,
                ...Wd
              }) : kd(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Pd) {
            kd(Pd)
          } finally {
            gd()
          }
        }))
      }))
    }
    async function gd(dd, Jd, kd) {
      try {
        const Nd = await Zd(dd, Jd, kd);
        (0, pd.d)(Nd.blob, `bloxd-screenshot-${Nd.width}x${Nd.height}-${Date.now()}.png`)
      } catch (Nd) {
        console.error("Error taking screenshot:", Nd)
      }
    }
  },
  39743: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd
    });
    var pd = kd(1726),
      Nd = kd(95),
      Wd = kd(126),
      Pd = kd(36608),
      Zd = kd(632),
      gd = kd(1751);

    function Cd(dd) {
      var Jd, kd, gd, Cd;
      const od = (0, Pd.b)();
      return {
        game: dd,
        os: (0, Nd.getOperatingSystem)(),
        decodedAudioMiB: null === od ? null : (0, Zd.K)(od.bytes),
        songsDecoded: null !== (Jd = null === od || void 0 === od ? void 0 : od.songsDecoded) && void 0 !== Jd ? Jd : null,
        sheetsDecoded: null !== (kd = null === od || void 0 === od ? void 0 : od.sheetsDecoded) && void 0 !== kd ? kd : null,
        siteUsed: Wd.t,
        appVersion: (null === (gd = pd.e.appHello) || void 0 === gd ? void 0 : gd.appVersion) || null,
        appBuild: (null === (Cd = pd.e.appHello) || void 0 === Cd ? void 0 : Cd.build) || null,
        msSinceVideoAd: Kd()
      }
    }

    function Kd() {
      if ((0, gd.h)()) return 0;
      const dd = (0, gd.e)();
      return null === dd ? null : Math.round(performance.now() - dd.endedAt)
    }(0, gd.m)(Zd.G)
  },
  36608: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      e: () => Nd
    });
    let pd = null;

    function Nd(dd) {
      pd = dd
    }

    function Wd() {
      return null === pd ? null : pd()
    }
  },
  39215: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ld,
      f: () => Kd
    });
    var pd = kd(193),
      Nd = kd(1822),
      Wd = kd(1827),
      Pd = kd(8825);
    const Zd = [250, 500, 1e3, 2e3, 1250],
      gd = 406;

    function Cd(dd) {
      if ("object" !== typeof dd || null === dd) return !1;
      const {
        code: Jd,
        message: kd
      } = dd, Nd = pd.e.duplicateLobbyNameError;
      return (Jd === Nd.code || Jd === gd) && (kd === Nd.text || kd === Nd.text + pd.k)
    }
    async function Kd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd.e;
      for (let Nd = 0;; Nd++) {
        let Pd;
        (0, Wd.j)(Jd);
        try {
          return await dd()
        } catch (pd) {
          if (Pd = Zd[Nd], void 0 === Pd || !Cd(pd)) throw pd
        }
        await kd(Pd, Jd)
      }
    }
    const od = new Set([pd.e.duplicateLobbyNameError.code, pd.e.lobbyCantBeCreated.code, pd.e.roomDisposedEarlyError.code, pd.e.roomDisposedLateError.code, pd.e.serverRoomLimitReached.code]);

    function ld(dd) {
      if (Cd(dd)) return !0;
      const Jd = (0, Pd.g)(dd);
      return "number" === typeof Jd && od.has(Jd)
    }
  },
  8825: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      g: () => Pd,
      k: () => Zd,
      n: () => Cd,
      p: () => gd
    });
    var pd = kd(193),
      Nd = kd(4482);

    function Wd(dd) {
      return Pd(dd) === pd.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Pd(dd) {
      return "object" === typeof dd && null !== dd ? dd.code : void 0
    }

    function Zd(dd) {
      var Jd;
      return null !== (Jd = Object.keys(Nd.d).find((Jd => Nd.d[Jd] === dd))) && void 0 !== Jd ? Jd : null
    }

    function gd(dd) {
      return "notWhitelisted" === dd ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Cd = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39298: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(300),
      Nd = kd(126),
      Wd = kd(33);

    function Pd() {
      Wd.i.setItem(pd.Cb, Wd.i.getItem(pd.Cb) + 1), (0, Nd.n)() && Wd.i.setItem(pd.Bb, Wd.i.getItem(pd.Bb) + 1)
    }
  },
  36631: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Id,
      g: () => Gd
    });
    var pd = kd(1013),
      Nd = kd(614),
      Wd = kd(313),
      Pd = kd(1016),
      Zd = kd(626),
      gd = kd(661),
      Cd = kd(4379),
      Kd = kd(95),
      od = kd(126),
      ld = kd(1753),
      Qd = kd(108),
      Ld = kd(36640),
      Od = kd(33),
      ed = kd(645),
      Rd = kd(36645);

    function Id() {
      var dd, Jd;
      return [...null !== (dd = navigator.languages) && void 0 !== dd ? dd : [null !== (Jd = navigator.language) && void 0 !== Jd ? Jd : "none"], "EN-gb"]
    }

    function Gd(dd, Jd, kd, Gd, vd) {
      const xd = (0, pd.i)(Jd) ? (0, pd.o)(Jd) : null,
        qd = {
          cookies: (0, ld.getAllCookiesForGameNameWithVariation)(Jd),
          isMobile: (0, Kd.isMobile)(),
          isUsingCustomGameTexturePack: null !== xd && vd(xd),
          generalCookies: {
            joinDiscord: !!Od.i.getItem("DiscordPressed"),
            newGo: Cd.b,
            ...dd.getMetricsCookies(),
            trafficCode: Gd,
            compliance: Kd.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Kd.getBrowserName)(),
            version: (0, Kd.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Kd.getPlatformType)(),
            deviceType: (0, Qd.e)()
          },
          isLoggedIn: dd.isLoggedIn(),
          lobbyName: kd,
          languages: Id(),
          version: Nd.c,
          siteUsed: od.t,
          subsiteUsed: od.A,
          playSessionId: (0, Ld.k)(Jd),
          visitSessionId: (0, ed.d)(),
          clientReason: Zd.l.reason,
          budgetBasis: (0, Rd.h)(),
          ...null !== gd.n && {
            diagClaim: gd.n.claimId
          }
        };
      return null !== xd && (0, Wd.Kc)(xd) ? (qd.lobbyName = (0, pd.g)(xd, (0, pd.l)(Jd), kd), {
        roomName: `classic_${Pd.d}`,
        joinOptions: qd
      }) : {
        roomName: Jd,
        joinOptions: qd
      }
    }
  },
  40650: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd
    });
    var pd = kd(39734);

    function Nd(dd) {
      return {
        current: () => dd,
        watch: () => () => {}
      }
    }

    function Wd() {}
    const Pd = Object.freeze([0, 0, 0]),
      Zd = {
        states: {
          health: Nd({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Nd({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Nd({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Nd({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Nd({}),
          creativeVisibility: Nd({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Nd(null),
          heldItemAim: Nd({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Nd(!1),
          gliderBoostFuel: Nd(0),
          flight: Nd({
            canFly: !1,
            flying: !1
          }),
          crafting: Nd({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Nd({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Nd({}),
          fullInventory: Nd(!1),
          crosshairTarget: Nd({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Nd(!0),
          freeCamera: Nd({
            allowed: !1,
            movesFly: !1
          }),
          replay: Nd(null),
          replayEdits: Nd(null),
          replayRecorder: Nd({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Nd(!1)
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
          selectHotbarSlot: Wd,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Wd,
          setInventoryOpen: Wd,
          changeIronChestPasskey: Wd,
          dragReplayCamera: Wd,
          applyTemporaryThirdPerson: Wd,
          holdEmoteWheel: Wd,
          recordFlyingMiddleText: Wd,
          focusCrafting: Wd,
          craftRecipe: () => ({
            LC: 0,
            wg: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Wd,
          setShopOpen: Wd,
          buyShopItem: Wd,
          lobbyManage: Wd,
          sendChatMessage: Wd,
          ignorePlayer: Wd,
          reportPlayer: Wd,
          reportWorldCodeChat: Wd,
          requestDiscordReportKey: Wd,
          reportLobbyOrGame: Wd,
          playEmote: Wd,
          updateMyCosmetic: Wd,
          writeOnBoard: Wd,
          writeBook: Wd,
          writeNameTag: Wd,
          setCustomLobbyBlock: Wd,
          openIronChest: Wd,
          sendCodeCollab: Wd,
          clickCodeBlock: Wd,
          bindCustomButtonKeys: Wd,
          pressCustomButton: Wd,
          moveReplayFreecam: Wd,
          holdReplayFreecamVertical: Wd,
          respawn: Wd,
          wakeUp: Wd,
          requestLeaderboard: Wd,
          completeTask: Wd,
          setServerCookie: Wd,
          answerUiRequest: Wd,
          chooseRewardedAd: Wd,
          setCameraZoom: Wd,
          setFreeCameraMovesFly: Wd,
          setBlockHighlight: Wd,
          setCrosshairInteractPrompt: Wd,
          setLookSensitivity: Wd,
          replayAction: Wd,
          setReplayPlaying: Wd,
          seekReplay: Wd,
          setReplayCameraMode: Wd,
          syncReplayCameraMode: Wd,
          setReplayCameraKeyframe: Wd,
          moveReplayCameraKeyframe: Wd,
          deleteReplayCameraKeyframes: Wd,
          setReplayPlaybackMark: Wd,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Wd,
          exportReplayVideo: Wd,
          toggleRecording: Wd,
          saveClip: Wd,
          setRecorderPrefs: Wd,
          setReplayViewerOpen: Wd
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => pd.c,
          worldCodeAiGameState: () => pd.f
        },
        lookups: {
          localPos: () => Pd,
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
  36645: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => qd,
      h: () => xd,
      i: () => vd
    });
    var pd = kd(193),
      Nd = kd(95),
      Wd = kd(2788),
      Pd = kd(4242),
      Zd = kd(632),
      gd = kd(36651);
    const Cd = 1048576,
      Kd = 1024 * Cd,
      od = 400 * Cd,
      ld = 147456,
      Qd = .5,
      Ld = 1.5 * Kd,
      Od = 768 * Cd;

    function ed(dd) {
      return od + dd * ld
    }

    function Rd(dd, Jd, kd) {
      var Nd, Pd;
      let {
        footprintBytes: Zd,
        basis: Cd,
        namesLimit: Rd
      } = function(dd) {
        const {
          os: Jd,
          deviceMemory: kd
        } = dd;
        if ("ios" === Jd) switch ((0, Wd.g)(dd)) {
          case "ipad_m":
            return {
              footprintBytes: ed(gd.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Od, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Ld, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Od, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof kd && Number.isFinite(kd) && kd > 0 ? {
          footprintBytes: kd * Kd * Qd,
          basis: `memory-${kd}`,
          namesLimit: !0
        } : "android" === Jd ? {
          footprintBytes: Od,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: ed(gd.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(dd);
      if (kd) {
        const dd = Math.min(Zd, ed(gd.d));
        Zd = od + Math.max(0, dd - od) / 2, Cd += "+killed", Rd = !0
      }
      null !== Jd && ed(Jd) < Zd && (Zd = ed(Jd), Cd += "+learned", Rd = !0);
      const Id = function(dd) {
          const Jd = Math.floor((dd - od) / ld);
          return Math.min(gd.d, Math.max(gd.e, Jd))
        }(Zd),
        Gd = (0, gd.l)(Id);
      return {
        footprintBytes: Zd,
        shedFootprintBytes: Rd ? Math.max(Zd, ed(Id)) : null,
        chunkCap: Id,
        maxHorizDistance: null !== (Nd = null === Gd || void 0 === Gd ? void 0 : Gd.horizontal) && void 0 !== Nd ? Nd : pd.g.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Pd = null === Gd || void 0 === Gd ? void 0 : Gd.vertical) && void 0 !== Pd ? Pd : pd.g.maxChunkVertAddDistance,
        basis: Cd
      }
    }
    let Id = null;

    function Gd() {
      return Rd({
        os: (0, Nd.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Wd.i)()
      }, (0, Pd.d)(), (0, Zd.F)("wasm").length > 0)
    }

    function vd() {
      return Id ??= Gd(), Id
    }

    function xd() {
      var dd;
      return (null !== (dd = Id) && void 0 !== dd ? dd : Gd()).basis
    }

    function qd(dd, Jd) {
      return dd.setChunkCap(Jd.chunkCap)
    }
  },
  41036: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      i: () => Wd
    });
    var pd = kd(3018),
      Nd = kd(1013);

    function Wd(dd, Jd) {
      return null !== dd.gameSource && (0, pd.o)(Jd, dd.gameSource)
    }

    function Pd(dd, Jd) {
      if (null === dd.gameSource || "" === dd.gameSource || null === Jd) return !0;
      const kd = (0, Nd.i)(Jd) ? (0, Nd.o)(Jd) : null;
      return null !== kd && Wd(dd, kd)
    }
  },
  41008: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Zd
    });
    var pd = kd(597),
      Nd = kd(41011),
      Wd = kd(40986);
    async function Pd(dd) {
      const Jd = await (0, Nd.j)({
        Helmet: kd(38151),
        Chestplate: kd(38154),
        Gauntlets: kd(38167),
        Leggings: kd(38160),
        Boots: kd(38163)
      } [pd.c[dd]]);
      try {
        return (0, Wd.s)(Jd)
      } finally {
        Jd.close()
      }
    }
    const Zd = new class {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd.n;
        this.decode = dd, this.register = Jd, this.decoded = new Map
      }
      warm() {
        for (let dd = 0; dd < pd.c.length; dd++) this.part(dd).catch((Jd => {
          console.warn(`The grayscale armour ${pd.c[dd]} image didn't decode ahead of use`, Jd)
        }))
      }
      async load(dd, Jd) {
        const {
          width: kd,
          height: Wd,
          pixels: Pd
        } = await this.part(dd), Zd = new ImageData(function(dd, Jd) {
          const kd = new Uint8ClampedArray(dd.length);
          for (let pd = 0; pd < dd.length; pd += 4) kd[pd] = Math.round(dd[pd] * Jd[0] / 255), kd[pd + 1] = Math.round(dd[pd + 1] * Jd[1] / 255), kd[pd + 2] = Math.round(dd[pd + 2] * Jd[2] / 255), kd[pd + 3] = dd[pd + 3];
          return kd
        }(Pd, function(dd) {
          return [dd >>> 16 & 255, dd >>> 8 & 255, 255 & dd]
        }(Jd)), kd, Wd);
        let gd;
        try {
          gd = await createImageBitmap(Zd, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (Cd) {
          throw new Nd.d("decode", `grayscale armour ${pd.c[dd]}`, {
            cause: Cd
          })
        }
        return {
          id: this.register(gd),
          width: kd,
          height: Wd
        }
      }
      part(dd) {
        const Jd = this.decoded.get(dd);
        if (void 0 !== Jd) return Jd;
        const kd = this.decode(dd).catch((Jd => {
          throw this.decoded.delete(dd), Jd instanceof Nd.d ? Jd : new Nd.d("decode", `grayscale armour ${pd.c[dd]}`, {
            cause: Jd
          })
        }));
        return this.decoded.set(dd, kd), kd
      }
    }
  },
  41006: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      i: () => ed,
      l: () => Kd,
      n: () => od,
      p: () => Od
    });
    var pd = kd(40963),
      Nd = kd(41008),
      Wd = kd(41011);
    const Pd = 396,
      Zd = 1,
      gd = 2,
      Cd = 3,
      Kd = {
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
      od = {
        File: 0,
        Item: 1
      },
      ld = 0,
      Qd = 1,
      Ld = 2;

    function Od(dd) {
      const Jd = (0, pd.l)();
      Jd.catch((() => {}));
      let Nd = null;
      return {
        glbUrl: dd,
        lifeformAtlasUrl: async dd => (await Jd).lifeformAtlasUrl(dd),
        armourAtlasUrl: async () => (await kd.e(202).then((() => kd(34385)))).armourAtlasUrl,
        capeUrl: async dd => (await Jd).capeUrl(dd),
        attachmentImageUrl: async dd => (await Jd).attachmentImageUrl(dd),
        blockImageUrl: async dd => (await Jd).blockImageUrl(dd),
        groupAtlasUrl: async dd => (await Jd).groupAtlasUrl(dd),
        particleTextureUrl: async dd => (await Jd).particleTextureUrl(dd),
        particleItemUrl: async dd => (Nd ??= kd.e(38).then((() => kd(51597))).catch((dd => {
          throw Nd = null, dd
        })), (await Nd).particleItemUrl(dd))
      }
    }
    class ed {
      constructor(dd, Jd) {
        var kd, Pd, Zd, gd;
        let Cd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = dd, this.onFailure = Jd, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.pL = !1, this.load = null !== (kd = Cd.load) && void 0 !== kd ? kd : (dd, Jd) => (0, Wd.k)(dd, Cd.fetchImage, Jd), this.release = null !== (Pd = Cd.release) && void 0 !== Pd ? Pd : Wd.p, this.fetchFile = null !== (Zd = Cd.fetchFile) && void 0 !== Zd ? Zd : dd => (0, pd.h)(dd), this.greyscaleArmour = null !== (gd = Cd.greyscaleArmour) && void 0 !== gd ? gd : Nd.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(dd, Jd) {
        this.glbWrittenImages.set(dd, Bd(Jd))
      }
      glbTaken(dd, Jd) {
        const kd = this.glbWrittenImages.get(dd);
        this.glbWrittenImages.delete(dd), Jd && this.setGlbImages(dd, void 0 !== kd && kd.length > 0 ? kd : void 0)
      }
      setGlbImages(dd, Jd) {
        var kd;
        this.glbTakenCount.set(dd, (null !== (kd = this.glbTakenCount.get(dd)) && void 0 !== kd ? kd : 0) + 1), void 0 === Jd ? this.glbImages.delete(dd) : this.glbImages.set(dd, Jd);
        const pd = [];
        for (const {
            key: Nd
          }
          of this.loading.values()) Nd.kind === Kd.Glb && Nd.word === dd && pd.push(Nd);
        for (let Nd = this.ready.length - 1; Nd >= 0; Nd--) {
          const {
            key: Jd,
            id: kd
          } = this.ready[Nd];
          Jd.kind === Kd.Glb && Jd.word === dd && (this.ready.splice(Nd, 1), null !== kd && (this.answered.delete(kd), this.release(kd)), pd.push(Jd))
        }
        this.loadAgain(pd)
      }
      onEvent(dd) {
        if (this.pL) return;
        const Jd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
        for (let kd = 0; kd + 8 <= dd.byteLength; kd += 8) {
          const dd = Jd.getUint8(kd),
            pd = Jd.getUint32(kd + 4, !0);
          if (dd === Cd) {
            this.answered.delete(pd), this.release(pd);
            continue
          }
          const Nd = {
            kind: Jd.getUint8(kd + 1),
            index: Jd.getUint8(kd + 2),
            word: pd
          };
          dd === Zd ? this.want(Nd) : dd === gd && this.loading.delete(Rd(Nd))
        }
      }
      reload(dd, Jd) {
        const kd = kd => dd.includes(kd.kind) && (void 0 === Jd || Jd(kd)),
          pd = new Map;
        for (const Nd of this.answered.values()) kd(Nd) && pd.set(Rd(Nd), Nd);
        for (const [Nd, {
            key: Wd
          }] of this.loading) kd(Wd) && pd.set(Nd, Wd);
        this.loadAgain(pd.values())
      }
      loadAgain(dd) {
        for (const Jd of dd) this.loading.delete(Rd(Jd)), this.want(Jd)
      }
      drain(dd) {
        if (null !== dd)
          for (; this.ready.length > 0;) {
            if (!dd(Pd, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.pL = !0, this.loading.clear(), this.ready.length = 0;
        for (const dd of this.answered.keys()) this.release(dd);
        this.answered.clear()
      }
      want(dd) {
        const Jd = Rd(dd);
        if (this.loading.has(Jd)) return;
        const kd = {
          key: dd
        };
        this.loading.set(Jd, kd), this.loadKey(dd).then((pd => {
          this.pL || this.loading.get(Jd) !== kd ? this.release(pd.id) : (this.loading.delete(Jd), this.answered.set(pd.id, dd), this.ready.push({
            record: Gd(dd, ld, pd),
            key: dd,
            id: pd.id
          }))
        }), (pd => {
          if (this.pL || this.loading.get(Jd) !== kd) return;
          this.loading.delete(Jd), this.onFailure({
            key: dd,
            error: pd
          });
          const Nd = pd instanceof Wd.d && "decode" === pd.stage ? Qd : Ld;
          this.ready.push({
            record: Gd(dd, Nd, null),
            key: dd,
            id: null
          })
        }))
      }
      async loadKey(dd) {
        switch (dd.kind) {
          case Kd.Glb:
            return this.load(await this.glbImage(dd), "none");
          case Kd.LifeformAtlas:
            return this.load(Id(await this.sources.lifeformAtlasUrl(dd.word), dd), "none");
          case Kd.ArmourAtlas:
            return this.load(Id(await this.sources.armourAtlasUrl(), dd), "none");
          case Kd.Cape:
            return this.load(Id(await this.sources.capeUrl(dd.word), dd), "none");
          case Kd.AttachmentImage:
            return this.load(Id(await this.sources.attachmentImageUrl(dd.word), dd), "none");
          case Kd.GroupAtlas:
            return this.load(Id(await this.sources.groupAtlasUrl(dd.word), dd), "none");
          case Kd.BlockImage:
            return this.load(Id(await this.sources.blockImageUrl(dd.word), dd), "none");
          case Kd.Particle: {
            const Jd = await (dd.index === od.Item ? this.sources.particleItemUrl(dd.word) : this.sources.particleTextureUrl(dd.word));
            return this.load(Id(Jd, dd), "flipY")
          }
          case Kd.GreyscaleArmour:
            return this.greyscaleArmour.load(dd.index, dd.word);
          default:
            throw new Wd.d("fetch", `image kind ${dd.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(dd) {
        var Jd;
        let kd = this.glbImages.get(dd.word);
        if (void 0 === kd) {
          const Jd = this.glbTakenCount.get(dd.word),
            pd = Id(await this.sources.glbUrl(dd.word), dd);
          try {
            kd = Bd(await this.fetchFile(pd))
          } catch (Nd) {
            throw new Wd.d("fetch", pd, {
              cause: Nd
            })
          }
          this.glbTakenCount.get(dd.word) === Jd && this.glbImages.set(dd.word, kd)
        }
        const pd = null === (Jd = kd) || void 0 === Jd ? void 0 : Jd[dd.index];
        if (!pd) throw new Wd.d("decode", `image ${dd.index} of file ${2147483647&dd.word}`, {
          cause: null
        });
        return pd
      }
    }

    function Rd(dd) {
      let {
        kind: Jd,
        index: kd,
        word: pd
      } = dd;
      return `${Jd}:${kd}:${pd}`
    }

    function Id(dd, Jd) {
      if (null === dd) throw new Wd.d("fetch", `no URL for image ${Rd(Jd)}`, {
        cause: null
      });
      return dd
    }

    function Gd(dd, Jd, kd) {
      var pd, Nd, Wd;
      const Pd = new Uint8Array(16),
        Zd = new DataView(Pd.buffer);
      return Zd.setUint8(0, dd.kind), Zd.setUint8(1, dd.index), Zd.setUint8(2, Jd), Zd.setUint32(4, dd.word, !0), Zd.setUint32(8, null !== (pd = null === kd || void 0 === kd ? void 0 : kd.id) && void 0 !== pd ? pd : 0, !0), Zd.setUint16(12, Math.min(null !== (Nd = null === kd || void 0 === kd ? void 0 : kd.width) && void 0 !== Nd ? Nd : 0, 65535), !0), Zd.setUint16(14, Math.min(null !== (Wd = null === kd || void 0 === kd ? void 0 : kd.height) && void 0 !== Wd ? Wd : 0, 65535), !0), Pd
    }
    const vd = 1179937895,
      xd = 1313821514,
      qd = 5130562;

    function Bd(dd) {
      var Jd;
      const kd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      if (dd.byteLength < 20 || kd.getUint32(0, !0) !== vd || kd.getUint32(16, !0) !== xd) return [];
      let pd, Nd = 20 + kd.getUint32(12, !0);
      try {
        pd = JSON.parse((new TextDecoder).decode(dd.subarray(20, Nd)))
      } catch {
        return []
      }
      for (; Nd + 8 <= dd.byteLength && kd.getUint32(Nd + 4, !0) !== qd;) Nd += 8 + kd.getUint32(Nd, !0);
      const Wd = null !== (Jd = pd.images) && void 0 !== Jd ? Jd : [];
      if (0 === Wd.length || Nd + 8 > dd.byteLength) return Wd.map((() => null));
      const Pd = dd.subarray(Nd + 8, Math.min(dd.byteLength, Nd + 8 + kd.getUint32(Nd, !0)));
      return Wd.map((dd => {
        var Jd, kd, Nd;
        const Wd = void 0 === dd.bufferView || null === (Jd = pd.bufferViews) || void 0 === Jd ? void 0 : Jd[dd.bufferView];
        if (!Wd || 0 !== (null !== (kd = Wd.buffer) && void 0 !== kd ? kd : 0) || void 0 === Wd.byteLength) return null;
        const Zd = null !== (Nd = Wd.byteOffset) && void 0 !== Nd ? Nd : 0,
          gd = Zd + Wd.byteLength;
        return gd <= Pd.byteLength ? Pd.slice(Zd, gd) : null
      }))
    }
  },
  40658: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      e: () => Wd,
      f: () => Nd
    });
    let pd = null;

    function Nd(dd) {
      pd = dd
    }

    function Wd(dd) {
      pd === dd && (pd = null)
    }

    function Pd() {
      var dd;
      null === (dd = pd) || void 0 === dd || dd()
    }
  },
  36765: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Kd,
      i: () => ld,
      m: () => Rd,
      n: () => Cd
    });
    var pd = kd(22),
      Nd = kd(2337),
      Wd = kd(2345),
      Pd = kd(2352),
      Zd = kd(2405),
      gd = kd(29);

    function Cd(dd, Jd) {
      return (!(0, Pd.c)() || 0 === dd && 0 === Jd) && (0, Wd.A)(Nd.k.Joystick, 0, dd, Jd, 0)
    }
    const Kd = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function od(dd) {
      return dd.classList.contains("TouchKeyHit") && Qd() ? null : dd.firstElementChild
    }

    function ld(dd) {
      return dd.classList.contains("TouchKeyHit") && !dd.classList.contains("CanvasZone") ? {
        whole: !Qd(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Ld(od(dd))
      }
    }

    function Qd() {
      return document.documentElement.classList.contains(Zd.i)
    }

    function Ld(dd) {
      return !(dd instanceof HTMLElement) || dd.offsetWidth <= 0 || dd.offsetHeight <= 0 ? null : {
        width: dd.offsetWidth,
        height: dd.offsetHeight
      }
    }

    function Od(dd, Jd) {
      const kd = dd => Math.min(65535, Math.round(4 * dd));
      return (kd(dd) | kd(Jd) << 16) >>> 0
    }

    function ed(dd) {
      return {
        x: dd.left + dd.width / 2,
        y: dd.top + dd.height / 2,
        radius: Math.min(dd.width, dd.height) / 2
      }
    }
    const Rd = new class {
      constructor(dd) {
        this.write = dd, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Jd ? this.elements.set(dd, {
          element: Jd,
          hidden: kd
        }) : this.elements.delete(dd), this.measureOne(dd)
      }
      measure() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = dd.left, this.canvasTop = dd.top;
        for (const Jd of this.elements.keys()) this.measureOne(Jd)
      }
      hitZone(dd, Jd) {
        let kd = null,
          pd = 1;
        for (const Nd of this.elements.keys()) {
          const Wd = this.shown(Nd);
          if (!Wd) continue;
          const {
            rect: Pd,
            element: Zd
          } = Wd, gd = ed(Pd), Cd = Math.max(0, Pd.width / 2 - gd.radius), Kd = Math.max(0, Pd.height / 2 - gd.radius), ld = Math.max(0, Math.abs(dd - gd.x) - Cd), Qd = Math.max(0, Math.abs(Jd - gd.y) - Kd), Od = Zd.firstElementChild;
          let Rd = Math.hypot(ld, Qd) / gd.radius;
          const Id = Ld(od(Zd));
          Id && (Rd = Math.min(Rd, Math.max(2 * Math.abs(dd - gd.x) / Id.width, 2 * Math.abs(Jd - gd.y) / Id.height))), Rd < pd && (kd = {
            code: Nd,
            element: Zd,
            key: Od,
            ...gd
          }, pd = Rd)
        }
        return kd
      }
      measureOne(dd) {
        const Jd = this.shown(dd);
        if (!Jd) return void this.write(Nd.k.TouchZone, dd, 0, 0, 0);
        const {
          rect: kd,
          element: pd
        } = Jd, Wd = ed(kd);
        this.write(Nd.k.TouchZone, dd, Wd.x - this.canvasLeft, Wd.y - this.canvasTop, Od(kd.width, kd.height));
        const Pd = Ld(od(pd));
        this.write(Nd.k.TouchZone, 256 | dd, 0, 0, Pd ? Od(Pd.width, Pd.height) : 0)
      }
      shown(dd) {
        const Jd = this.elements.get(dd),
          kd = pd.d.get("worldPanelHud");
        if (!Jd || Jd.hidden || "none" === kd) return null;
        const Nd = Jd.element.getBoundingClientRect();
        return Nd.width <= 0 || Nd.height <= 0 ? null : {
          rect: Nd,
          element: Jd.element
        }
      }
    }(Wd.A);
    (0, gd.n)(Zd.e, (() => {
      Rd.measure()
    }))
  },
  40886: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gd,
      c: () => Cd
    });
    var pd = kd(40888),
      Nd = kd(39220),
      Wd = kd(36631),
      Pd = kd(40801),
      Zd = kd(40868);
    const gd = pd.d.timeForPlayerToConnect - 1e4;
    async function Cd(dd, Jd, kd, pd) {
      let gd;
      try {
        gd = await dd.getTrafficCode()
      } catch (Ld) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", Ld), new Zd.z(Ld)
      }
      const {
        gameNameWithVariation: Cd,
        lobbyName: Kd
      } = Jd, od = () => {
        const Jd = (0, Wd.g)(dd, Cd, Kd, gd, (dd => {
          var Jd;
          return null !== (Jd = null === kd || void 0 === kd ? void 0 : kd.isUsingCustomGameTexturePack(dd)) && void 0 !== Jd && Jd
        }));
        Jd.joinOptions.wasmClient = !0;
        const Nd = (0, Pd.H)();
        return null !== Nd && (Jd.joinOptions.renderBackend = Nd), Jd.joinOptions.joinAdHold = pd, Jd
      }, {
        roomName: ld,
        joinOptions: Qd
      } = od();
      return {
        endpoint: Jd.endpoint,
        roomName: ld,
        joinOptions: Qd,
        session: {
          gameNameWithVariation: Cd,
          lobbyName: Kd,
          playerDbId: dd.whamm
        },
        optionsAfterRefusal: async Jd => await (0, Nd.e)(dd, Jd) ? od().joinOptions : null
      }
    }
  },
  4911: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      i: () => Pd
    });
    var pd = kd(3018),
      Nd = kd(4915);
    let Wd = null;

    function Pd(dd, Jd) {
      Wd = {
        pack: dd.metaData.id === pd.e ? null : dd,
        prompt: Jd
      }
    }

    function Zd(dd, Jd) {
      const kd = Wd;
      null !== kd && (0, Nd.d)(kd.pack, dd) && (Wd = null, Jd && kd.prompt())
    }
  },
  41020: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      g: () => Wd,
      h: () => od,
      k: () => Pd
    });
    var pd = kd(41006),
      Nd = kd(40963);
    const Wd = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(dd) {
        this.change((() => {
          this.page = dd
        }))
      }
      setSessionFiles(dd) {
        const Jd = void 0 !== this.session && void 0 === dd;
        if (this.change((() => {
            this.session = dd
          })), Jd)
          for (const kd of [...this.pageListeners]) kd()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(dd) {
        return this.pageListeners.add(dd), () => {
          this.pageListeners.delete(dd)
        }
      }
      setFollower(dd) {
        this.follower = dd, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const dd of [...this.wantedListeners]) dd();
        this.startFollower()
      }
      onWanted(dd) {
        return this.wantedListeners.add(dd), () => {
          this.wantedListeners.delete(dd)
        }
      }
      onChange(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      startFollower() {
        const dd = this.follower;
        this.isWanted && null !== dd && (this.follower = null, dd((() => {
          this.follower = dd
        })))
      }
      change(dd) {
        const Jd = this.current;
        if (dd(), this.current !== Jd)
          for (const kd of this.listeners) kd()
      }
    };

    function Pd(dd, Jd) {
      return {
        ...dd,
        armourAtlasUrl: () => {
          var kd, pd;
          return null !== (kd = null === (pd = Jd()) || void 0 === pd ? void 0 : pd.armourAtlasUrl()) && void 0 !== kd ? kd : dd.armourAtlasUrl()
        },
        lifeformAtlasUrl: kd => gd(Jd(), (dd => dd.LIFEFORM_ATLAS_PATHS[kd]), (() => dd.lifeformAtlasUrl(kd))),
        groupAtlasUrl: kd => gd(Jd(), (dd => dd.GROUP_ATLAS_PATHS[kd]), (() => dd.groupAtlasUrl(kd))),
        particleItemUrl: pd => Cd(Jd(), (async () => {
          const dd = await kd.e(38).then((() => kd(51597))).catch((() => null));
          return (null === dd || void 0 === dd ? void 0 : dd.particleItemSprite(pd)) || null
        }), (() => dd.particleItemUrl(pd))),
        blockImageUrl: kd => Cd(Jd(), (async () => {
          var dd, Jd;
          return null !== (dd = null === (Jd = await Zd()) || void 0 === Jd ? void 0 : Jd.blockImageName(kd)) && void 0 !== dd ? dd : null
        }), (() => dd.blockImageUrl(kd)))
      }
    }

    function Zd() {
      return (0, Nd.l)().catch((() => null))
    }

    function gd(dd, Jd, kd) {
      return Cd(dd, (async () => {
        var dd;
        const kd = await Zd(),
          pd = null === kd ? null : Jd(kd),
          Nd = null !== (dd = null === pd || void 0 === pd ? void 0 : pd.slice(pd.lastIndexOf("/") + 1)) && void 0 !== dd ? dd : null;
        return "Player_Atlas" === Nd ? null : Nd
      }), kd)
    }
    async function Cd(dd, Jd, kd) {
      if (null !== dd) {
        const kd = await Jd(),
          pd = null === kd ? null : dd.textureUrl(kd);
        if (null !== pd) return pd
      }
      return kd()
    }
    const Kd = 0;

    function od(dd) {
      const Jd = [pd.l.ArmourAtlas, pd.l.LifeformAtlas, pd.l.GroupAtlas, pd.l.BlockImage, pd.l.Particle];
      dd.reload(Jd, (dd => {
        switch (dd.kind) {
          case pd.l.Particle:
            return dd.index === pd.n.Item;
          case pd.l.LifeformAtlas:
            return dd.word !== Kd;
          default:
            return !0
        }
      }))
    }
  },
  40891: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      e: () => Zd,
      f: () => Pd,
      i: () => Nd,
      l: () => Wd
    });
    const pd = 1e3;

    function Nd() {
      gd((() => {
        window.location.reload()
      }))
    }

    function Wd() {
      return new Promise((() => {}))
    }

    function Pd(dd) {
      gd((() => {
        window.location.replace(dd(window.location.href))
      }))
    }

    function Zd(dd) {
      Promise.resolve().then((() => kd(103))).then((Jd => {
        let {
          currentUrl: kd
        } = Jd;
        Pd((() => kd.mergeSearchParamsInto(dd)))
      }), (() => {
        Pd((() => dd))
      }))
    }

    function gd(dd) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => kd(1753))).then((Jd => {
        let {
          prepareForUnloadWithoutConfirmation: kd
        } = Jd;
        try {
          kd()
        } catch (pd) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", pd), window.onbeforeunload = null
        }
        dd()
      }), (() => {
        window.onbeforeunload = null, dd()
      })) : dd()
    }
  },
  4915: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return Nd(dd, Jd)
    }

    function Nd(dd, Jd) {
      if (dd === Jd) return !0;
      if ("object" !== typeof dd || "object" !== typeof Jd || null === dd || null === Jd || Array.isArray(dd) !== Array.isArray(Jd)) return !1;
      const kd = dd,
        pd = Jd,
        Wd = Object.keys(kd);
      return Wd.length === Object.keys(pd).length && Wd.every((dd => Object.prototype.hasOwnProperty.call(pd, dd) && Nd(kd[dd], pd[dd])))
    }
    kd.d(Jd, {
      d: () => pd
    })
  },
  40933: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Bd,
      e: () => xd,
      i: () => ed,
      k: () => Od
    });
    var pd = kd(1822),
      Nd = kd(1827),
      Wd = kd(39215),
      Pd = kd(39222),
      Zd = kd(1797),
      gd = kd(40860),
      Cd = kd(40868);
    const Kd = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      od = 3,
      ld = [500, 1500];

    function Qd(dd) {
      const Jd = new URL(dd);
      return {
        secure: "https:" === Jd.protocol || "wss:" === Jd.protocol,
        host: Jd.host,
        pathname: Jd.pathname.replace(/\/+$/, ""),
        search: Jd.searchParams.toString()
      }
    }

    function Ld(dd, Jd, kd) {
      const {
        secure: pd,
        host: Nd,
        pathname: Wd,
        search: Pd
      } = Qd(dd);
      return `${pd?"https":"http"}://${Nd}${Wd}/matchmake/${Jd}/${encodeURIComponent(kd)}${Pd?`?${Pd}`:""}`
    }

    function Od(dd, Jd) {
      var kd;
      const pd = null !== (kd = Jd.protocol) && void 0 !== kd ? kd : "ws";
      if ("ws" !== pd) throw new Error(`seat reservation asks for the ${pd} transport`);
      const {
        secure: Nd,
        host: Wd,
        pathname: Pd,
        search: Zd
      } = Qd(dd), gd = new URLSearchParams(Zd);
      gd.append("sessionId", Jd.sessionId), Jd.reconnectionToken && gd.append("reconnectionToken", Jd.reconnectionToken);
      return `${Nd?"wss":"ws"}://${Jd.room.publicAddress||`${Wd}${Pd}`}/${Jd.room.processId}/${Jd.room.roomId}?${gd.toString()}`
    }
    async function ed(dd, Jd, kd) {
      var gd;
      let Kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Qd = null !== (gd = Kd.sleep) && void 0 !== gd ? gd : pd.e,
        Od = new Nd.b(Kd.signal),
        ed = new Zd.e(Pd.d, (() => {
          (0, Nd.e)(Od.controller, new Pd.g)
        })),
        {
          signal: vd
        } = Od;
      try {
        return await (0, Wd.f)((() => async function(dd, Jd, kd, pd) {
          var Wd;
          const {
            signal: Pd,
            sleep: Zd
          } = pd, gd = Ld(dd, "joinOrCreate", Jd), Kd = JSON.stringify(kd);
          let Qd = null;
          for (let Ld = 0; Ld < od; Ld++) {
            var Od;
            if (Ld > 0) await Zd(null !== (Od = ld[Ld - 1]) && void 0 !== Od ? Od : 1500, Pd);
            let dd;
            (0, Nd.j)(Pd);
            try {
              dd = await Id(gd, Kd, pd)
            } catch (ed) {
              (0, Nd.j)(Pd), Qd = Rd(ed);
              continue
            }
            const {
              response: Jd,
              answer: kd,
              refusal: Wd,
              lost: od
            } = dd;
            if (null === od) {
              if (null !== Wd) throw Gd(Wd, kd);
              if (Jd.ok && null !== kd && sd(kd)) return kd;
              Qd = new Cd.x(`seat request answered HTTP ${Jd.status}${null===kd?" without JSON":" without a seat"}`, !1)
            } else Qd = Rd(od.error)
          }
          throw null !== (Wd = Qd) && void 0 !== Wd ? Wd : new Cd.x("seat request made no attempt", !1)
        }(dd, Jd, kd, {
          ...Kd,
          signal: vd,
          sleep: Qd
        })), vd, Qd)
      } finally {
        ed.stop(), Od.unfollow()
      }
    }

    function Rd(dd) {
      return new Cd.x(dd instanceof Error ? dd.message : String(dd), !0, dd)
    }
    async function Id(dd, Jd, kd) {
      var pd;
      const {
        signal: Wd
      } = kd, Pd = null !== (pd = kd.fetch) && void 0 !== pd ? pd : fetch, Zd = await Pd(dd, {
        method: "POST",
        headers: {
          ...Kd,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: Jd,
        credentials: "include",
        signal: Wd
      }), {
        answer: gd,
        lost: Cd
      } = await async function(dd) {
        try {
          const Jd = await dd.json();
          return {
            answer: "object" === typeof Jd && null !== Jd ? Jd : null,
            lost: null
          }
        } catch (Jd) {
          return {
            answer: null,
            lost: Jd instanceof SyntaxError ? null : {
              error: Jd
            }
          }
        }
      }(Zd), od = null !== gd && "string" === typeof gd.error ? gd.error : null;
      var ld;
      null !== od && (null === (ld = kd.onRefusal) || void 0 === ld || ld.call(kd));
      return (0, Nd.j)(Wd), {
        response: Zd,
        answer: gd,
        refusal: od,
        lost: Cd
      }
    }

    function Gd(dd, Jd) {
      return new Cd.m(dd, "number" === typeof(null === Jd || void 0 === Jd ? void 0 : Jd.code) ? Jd.code : 0, (0, gd.p)(dd).text)
    }
    class vd extends Error {
      constructor(dd, Jd) {
        super(dd), this.code = Jd, this.name = "SeatHttpError"
      }
    }
    async function xd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Nd,
        answer: Wd,
        refusal: Pd,
        lost: Zd
      } = await Id(Ld(dd, "reconnect", Jd), JSON.stringify({
        reconnectionToken: kd
      }), pd);
      if (null !== Zd) throw Zd.error;
      if (!Nd.ok) {
        const dd = null !== Wd && "number" === typeof Wd.code && 0 !== Wd.code ? Wd.code : Nd.status;
        throw new vd(`the seat's reconnect was refused: ${null!==Pd&&void 0!==Pd?Pd:`HTTP ${Nd.status}`}`, dd)
      }
      if (null !== Pd) throw Gd(Pd, Wd);
      if (null === Wd || !sd(Wd)) throw new Error("the seat's reconnect answered " + (null === Wd ? "without JSON" : "without a seat"));
      return {
        ...Wd,
        reconnectionToken: kd
      }
    }
    const qd = 10;

    function Bd(dd) {
      if (dd.byteLength < 2 || dd[0] !== qd) return null;
      const Jd = 2 + dd[1];
      return Jd > dd.byteLength ? null : (new TextDecoder).decode(dd.subarray(2, Jd))
    }

    function sd(dd) {
      const Jd = dd.room;
      return "string" === typeof dd.sessionId && "object" === typeof Jd && null !== Jd && "string" === typeof Jd.roomId && "string" === typeof Jd.processId && "string" === typeof Jd.name
    }
  },
  40578: (dd, Jd, kd) => {
    kd.d(Jd, {
      $: () => qd,
      A: () => vd,
      D: () => xd,
      G: () => ed,
      K: () => Md,
      O: () => Sd,
      Q: () => Ld,
      R: () => Xd,
      V: () => Id,
      X: () => Rd,
      Y: () => Gd,
      e: () => Nd,
      g: () => jd,
      h: () => bd,
      i: () => Qd,
      l: () => Od,
      p: () => Yd,
      r: () => sd,
      s: () => Fd,
      t: () => ad,
      w: () => Bd,
      y: () => md
    });
    var pd = kd(2839);
    const Nd = {
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

    function Wd(dd, Jd) {
      return !ArrayBuffer.isView(dd) || dd instanceof DataView ? Array.isArray(dd) ? dd.map((dd => Jd(dd))) : dd : Array.from(dd, (dd => Jd(dd)))
    }

    function Pd(dd) {
      if ("string" !== typeof dd) return dd;
      for (let Jd = 0; Jd < dd.length; Jd++) {
        const kd = dd.charCodeAt(Jd);
        if (kd >= 55296 && kd <= 57343) return gd.decode(Zd.encode(dd))
      }
      return dd
    }
    const Zd = new TextEncoder,
      gd = new TextDecoder;

    function Cd(dd) {
      return dd
    }
    let Kd;

    function od(dd) {
      return null === dd || "object" !== typeof dd ? dd : [Pd(dd.WC), Pd(dd.PC)]
    }

    function ld(dd) {
      return null === dd || "object" !== typeof dd ? dd : [Wd(dd.zd, Cd), Wd(dd.oK, Cd)]
    }

    function Qd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.IC), Pd(Jd.vC)];
      var Jd
    }

    function Ld(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Jd.id, Jd.WK];
      var Jd
    }

    function Od(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Jd.SJ, Pd(Jd.jJ), Jd.XJ, Pd(Jd.UJ), Jd.EJ, Jd.cJ, Jd.BP, Pd(Jd.sP), Pd(Jd.iP)];
      var Jd
    }

    function ed(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Wd(Jd.pC, Cd), Jd.NC];
      var Jd
    }

    function Rd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Wd(Jd.sC, (dd => Pd(dd))), Pd(Jd.iC), Jd.aC];
      var Jd
    }

    function Id(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Wd(Jd.PK, Cd), Pd(Jd.ZK), Jd.gK];
      var Jd
    }

    function Gd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.np), Pd(Jd.Up)];
      var Jd
    }

    function vd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.HC)];
      var Jd
    }

    function xd(dd) {
      return Pd(dd)
    }

    function qd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.XC), Pd(Jd.fC), Pd(Jd.WC), Pd(Jd.PC)];
      var Jd
    }

    function Bd(dd) {
      return od(dd)
    }

    function sd(dd) {
      return od(dd)
    }

    function ad(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.xP)];
      var Jd
    }

    function Md(dd) {
      return dd
    }

    function Fd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.Vg), Pd(Jd.zg)];
      var Jd
    }

    function Yd(dd) {
      return Pd(dd)
    }

    function md(dd) {
      return ld(dd)
    }

    function bd(dd) {
      return ld(dd)
    }

    function Sd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Pd(Jd.qP)];
      var Jd
    }

    function jd(dd) {
      return (Kd ??= (0, pd.g)().map((dd => dd.name)), Kd).map((Jd => {
        return "string" === typeof(kd = dd[Jd]) ? Pd(kd) : Wd(kd, Cd);
        var kd
      }))
    }

    function Xd(dd) {
      return null === (Jd = dd) || "object" !== typeof Jd ? Jd : [Jd.RK, Jd.IK, Jd.GK];
      var Jd
    }
  },
  41028: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(41036),
      Nd = kd(41020);
    const Wd = new class {
      constructor(dd) {
        this.pack = dd, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, dd.onWanted((() => {
          this.release()
        }))
      }
      setGame(dd) {
        if (void 0 === dd && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const Jd = this.inGame();
        if (this.game = dd, this.update(), this.inGame() !== Jd)
          for (const kd of this.gameListeners) kd()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(dd) {
        return this.gameListeners.add(dd), () => {
          this.gameListeners.delete(dd)
        }
      }
      unwantedLeave(dd) {
        dd && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(dd) {
        null !== dd && dd === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const dd = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, dd && this.setGame(void 0)
      }
      setSettled(dd) {
        this.settle = dd, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, pd.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Nd.g)
  },
  40851: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      followPageUiPack: () => UC,
      packForGame: () => nC,
      playWasmGame: () => HC,
      prefetchWasmPreviews: () => zZ,
      setGamePackConfirm: () => kC,
      startWasmPlay: () => cC,
      startWasmPreviews: () => VZ
    });
    var pd = kd(193),
      Nd = kd(1266),
      Wd = kd(149),
      Pd = kd(39228),
      Zd = kd(1932),
      gd = kd(29),
      Cd = kd(4543),
      Kd = kd(1332),
      od = kd(1751),
      ld = kd(1348),
      Qd = kd(39376),
      Ld = kd(1320),
      Od = kd(39385),
      ed = kd(39298),
      Rd = kd(36640),
      Id = kd(39215),
      Gd = kd(8825),
      vd = kd(39222),
      xd = kd(40672),
      qd = kd(4666),
      Bd = kd(40575),
      sd = kd(40650),
      ad = kd(40578);
    const Md = {
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

    function Fd(dd) {
      const Jd = {
        ...sd.e[dd]
      };
      for (const kd of Object.keys(Md[dd])) delete Jd[kd];
      return Jd
    }

    function Yd() {
      var dd, Jd;
      return null === (dd = null === (Jd = (0, Bd.k)()) || void 0 === Jd ? void 0 : Jd.localPlayerAlive()) || void 0 === dd || dd
    }

    function md() {
      var dd, Jd;
      return null !== (dd = null === (Jd = (0, Bd.k)()) || void 0 === Jd ? void 0 : Jd.localDeaths()) && void 0 !== dd ? dd : null
    }
    const bd = {
        current: Yd,
        watch: dd => {
          let Jd = Yd(),
            kd = md();
          return (0, qd.D)((() => {
            const pd = Yd(),
              Nd = md(),
              Wd = null !== Nd && null !== kd && Nd !== kd;
            kd = Nd, Wd ? (Jd || dd(!0), dd(!1), pd && dd(!0), Jd = pd) : pd !== Jd && (Jd = pd, dd(pd))
          }))
        }
      },
      Sd = {
        states: {
          ...Fd("states"),
          localPlayerAlive: bd
        },
        events: {
          ...Fd("events"),
          localPlayerAliveSet: {
            watch: bd.watch
          }
        },
        commands: {
          ...Fd("commands"),
          respawn: () => {
            var dd;
            null === (dd = (0, Bd.k)()) || void 0 === dd || dd.respawn()
          },
          playEmote: dd => {
            var Jd;
            null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.send(ad.e.PlayEmote, (0, ad.A)({
              HC: dd
            }))
          },
          applyTemporaryThirdPerson: dd => {
            var Jd;
            let {
              durationMs: kd
            } = dd;
            null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.thirdPersonFor(kd)
          },
          bindCustomButtonKeys: dd => {
            var Jd;
            null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.bindCustomButtonKeys(dd)
          },
          pressCustomButton: dd => {
            var Jd;
            let {
              id: kd,
              down: pd
            } = dd;
            null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.pressCustomButton(kd, pd)
          },
          setLookSensitivity: () => {},
          wakeUp: dd => {
            const Jd = (0, ad.O)({
                qP: dd
              }),
              kd = () => {
                const dd = (0, Bd.k)();
                return !(null !== dd && void 0 !== dd && dd.isSessionLive) || dd.send(ad.e.StopSleeping, Jd)
              };
            if (!kd()) {
              const dd = (0, qd.D)((() => {
                kd() && dd()
              }))
            }
          },
          setCameraZoom: dd => {
            var Jd;
            null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.setCameraZoom(dd)
          }
        },
        queries: Fd("queries"),
        lookups: {
          ...Fd("lookups"),
          cameraZoom: () => {
            var dd, Jd;
            return null !== (dd = null === (Jd = (0, Bd.k)()) || void 0 === Jd ? void 0 : Jd.cameraZoom()) && void 0 !== dd ? dd : 0
          }
        }
      };
    var jd = kd(40860),
      Xd = kd(40868),
      fd = kd(40870),
      nd = kd(40886),
      Ud = kd(1275),
      yd = kd(103),
      Dd = kd(4379),
      Td = kd(3610),
      Ed = kd(1184);
    const cd = {
      Tg: () => (0, Ud.e)(),
      inbuiltOverwritten: () => Dd.c,
      reflectApplyHit: () => Ed.b,
      definerHit: () => yd.currentUrl.c,
      emitReplaced: () => (0, gd.e)(),
      confirmMesh: () => (0, Td.e)(),
      confirmMeshHitStack: () => (0, Td.g)()
    };
    var hd = kd(40874),
      rd = kd(40891);
    var ud = kd(22),
      td = kd(1938),
      Vd = kd(1975),
      zd = kd(1675),
      Hd = kd(2011),
      wd = kd(1211),
      Ad = kd(1273),
      dJ = kd(40827);

    function JJ() {
      return Ad.c.get().getCurrentLanguageCode()
    }

    function kJ(dd) {
      const Jd = () => {
        dd({
          translate: (dd, Jd) => (0, wd.v)(JJ(), dd, Jd),
          keyBindingText: dd => {
            const Jd = (0, Vd.u)(dd, ud.d.get("isTouchScreen"));
            return null !== Jd ? (0, wd.x)(JJ(), Jd.translationKey, Jd.params) : (0, Vd.s)((0, Vd.t)(dd))
          },
          isFriend: Hd.f,
          hiddenNames: td.d.shown,
          loadsFontRest: (0, dJ.e)(JJ())
        })
      };
      let kd = !1;
      const pd = () => {
          const dd = JJ();
          (0, wd.j)(dd).then((() => {
            kd || dd !== JJ() || Jd()
          }))
        },
        Nd = () => zd.c.getSocialState().friends.map((dd => dd.name.toLowerCase())).sort().join(" ");
      let Wd = Nd();
      Jd(), pd();
      const Pd = [(0, Ad.d)((() => {
        Jd(), pd()
      })), (0, gd.n)("customBindingsChanged", Jd), (0, gd.n)("appManagerUpdated|isTouchScreen", Jd), (0, Hd.d)((() => {
        const dd = Nd();
        dd !== Wd && (Wd = dd, Jd())
      })), td.d.subscribe(Jd)];
      return () => {
        kd = !0;
        for (const dd of Pd) dd()
      }
    }
    var pJ = kd(614),
      NJ = kd(1013),
      WJ = kd(1958),
      PJ = kd(300),
      ZJ = kd(2761),
      gJ = kd(36480),
      CJ = kd(2770),
      KJ = kd(38870),
      oJ = kd(4563),
      lJ = kd(40745),
      QJ = kd(661),
      LJ = kd(626),
      OJ = kd(679),
      eJ = kd(681),
      RJ = kd(1955),
      IJ = kd(3613),
      GJ = kd(3123);
    let vJ = null;
    var xJ = kd(1220),
      qJ = kd(1827),
      BJ = kd(4275),
      sJ = kd(3277),
      iJ = kd(53),
      aJ = kd(296),
      MJ = kd(282),
      FJ = kd(40692),
      YJ = kd(4673);
    var mJ = kd(40893);
    class bJ {
      constructor(dd, Jd) {
        this.showView = dd, this.holdForAd = Jd
      }
      pointerUnlockRequestsChanged() {
        (0, FJ.G)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, FJ.s)())
        }]
      }
      setGameViewShown(dd) {
        this.showView(dd)
      }
      setGameView(dd) {
        (0, mJ.k)(dd)
      }
      videoAdHold(dd, Jd) {
        this.holdForAd(dd, Jd)
      }
    }
    class SJ {
      leave(dd) {
        ! function(dd) {
          if (null !== (0, ld.d)().websocketUrl) try {
            (0, qd.P)().leaveGame(dd)
          } finally {
            (0, ld.r)({
              websocketUrl: null
            })
          }
        }(dd)
      }
      isReplay() {
        return !1
      }
    }
    class jJ {
      watchFrameStarts(dd) {
        return (0, qd.v)(dd)
      }
      watchFrames(dd) {
        return (0, qd.s)(dd)
      }
      watchTicks(dd) {
        return (0, qd.D)(dd)
      }
    }
    var XJ = kd(40900);

    function fJ(dd) {
      return dd >= 0 ? Math.min(1, dd) : 0
    }

    function nJ(dd, Jd) {
      const {
        fade: kd
      } = dd;
      return null === kd || Jd - kd.at >= kd.ms ? dd.volume : kd.from + (dd.volume - kd.from) * Math.max(0, (Jd - kd.at) / kd.ms)
    }

    function UJ(dd) {
      const Jd = Object.entries(dd),
        kd = new Uint32Array(Jd.length);
      let pd = 0;
      for (const [Pd, [, Zd]] of Jd.entries()) kd[Pd] = Zd.length, pd += Zd.length;
      const Nd = new Float64Array(3 * pd);
      let Wd = 0;
      for (const [, Pd] of Jd)
        for (const dd of Pd) Nd.set(dd, Wd), Wd += 3;
      return {
        blocks: Jd.map((dd => {
          let [Jd] = dd;
          return Jd
        })).join("\0"),
        counts: kd,
        values: Nd
      }
    }
    class yJ {
      constructor(dd, Jd) {
        this.core = dd, this.warn = Jd, this.latest = 0
      }
      async feed() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DJ;
        const Jd = ++this.latest;
        let kd;
        try {
          kd = await dd()
        } catch (pd) {
          return void(this.core.isStopped || Jd !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", pd))
        }
        Jd === this.latest && (this.core.setBlockColours(kd) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function DJ() {
      return UJ((await kd.e(202).then((() => kd(34385)))).averageColors)
    }
    var TJ = kd(4680),
      EJ = kd(4688),
      cJ = kd(40629),
      hJ = kd(36448),
      rJ = kd(40807),
      uJ = kd(605),
      tJ = kd(37203),
      VJ = kd(597),
      zJ = kd(313),
      HJ = kd(40778);
    const wJ = [3e4, 12e4, 3e5];
    class AJ extends Error {}
    const dk = {
      mobTypes: uJ.n,
      vehicleTypes: tJ.e,
      mobAiStates: uJ.l,
      playerPoses: VJ.q
    };
    var Jk = kd(40771),
      kk = kd(40906),
      pk = kd(40919),
      Nk = kd(40924),
      Wk = kd(3308),
      Pk = kd(39203),
      Zk = kd(4709),
      gk = kd(2337);
    const Ck = gk.y.KeysDisabled | gk.y.LookFrozen | gk.y.ClicksSuppressed,
      Kk = Wk.f;
    var lk = (0, Nk.b)("resumingConn");
    class Qk {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = dd, this.now = Jd, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, lk, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Pk.d({
          reconnect: dd => this.reconnect(dd),
          isLive: () => dd.isLive(),
          onReconnected: Jd => {
            this.landed = Jd, dd.onReconnected(Jd), this.landIfResumed()
          },
          onGaveUp: (Jd, kd) => {
            this.abortAttempt(), dd.onGaveUp(Jd, kd)
          },
          freeze: Jd => {
            dd.SF(Jd), (0, Zk.i)(Ck, Jd ? Ck : 0, "reconnectFreeze")
          },
          releaseSeat: dd => {
            this.releaseSeat(dd)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, pk.b)(this, lk)[lk]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(dd) {
        let {
          conn: Jd,
          graceMs: kd,
          sessionBased: pd,
          replayOffer: Nd
        } = dd;
        this.session.onInitialInfo(kd, pd), this.isResuming() && (this.initialInfoConn = Jd, this.initialInfoOffer = Nd, this.landIfResumed())
      }
      onResumeComplete(dd) {
        0 !== dd && (dd === (0, pk.b)(this, lk)[lk] ? ((0, pk.b)(this, lk)[lk] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = dd))
      }
      onDropped(dd) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, pk.b)(this, lk)[lk] = 0, this.session.onConnectionLost(dd)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, pk.b)(this, lk)[lk] = 0, this.session.end()
      }
      reconnect(dd) {
        const Jd = this.attempt;
        if (null !== Jd && this.awaitingJoinRoom(Jd)) return Jd.result;
        this.abortAttempt();
        const kd = new AbortController,
          pd = this.drops,
          Nd = {
            attachedAt: null
          },
          Wd = this.shell.reconnect(dd, kd.signal, (() => {
            Nd.attachedAt = this.now()
          })).then((dd => {
            if (this.clearAttempt(Pd), this.drops !== pd) throw new Error("the resumed room dropped before its attempt settled");
            return dd
          }), (dd => {
            throw this.clearAttempt(Pd), dd
          })),
          Pd = {
            abort: kd,
            socket: Nd,
            result: Wd
          };
        return this.attempt = Pd, Wd
      }
      clearAttempt(dd) {
        this.attempt === dd && (this.attempt = null)
      }
      abortAttempt() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const Jd = this.attempt;
        this.attempt = null, null === Jd || void 0 === Jd || Jd.abort.abort(dd)
      }
      awaitingJoinRoom(dd) {
        const Jd = dd.socket.attachedAt;
        return null !== Jd && this.now() - Jd < Kk
      }
      releaseSeat(dd) {
        const Jd = this.attempt,
          kd = null !== Jd && this.awaitingJoinRoom(Jd);
        this.abortAttempt(new Xd.u), kd || this.shell.releaseSeat(dd)
      }
      landIfResumed() {
        const dd = this.landed;
        if (null !== dd && dd.conn === this.initialInfoConn) {
          const Jd = this.initialInfoOffer && this.completedEarlyConn !== dd.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !Jd) return void this.session.onResumed();
          (0, pk.b)(this, lk)[lk] = dd.conn, this.session.onResuming()
        }
      }
    }
    var Lk = kd(39206),
      Ok = kd(40933),
      ek = kd(36651),
      Rk = kd(36645),
      Ik = kd(4911),
      Gk = kd(4261),
      vk = kd(3112),
      xk = kd(40707),
      qk = kd(632),
      Bk = kd(39743),
      sk = kd(4351),
      ik = kd(33),
      ak = kd(40940),
      Mk = kd(40980),
      Fk = kd(4292),
      Yk = kd(2345),
      mk = kd(1670),
      bk = kd(1699),
      Sk = kd(1307),
      jk = kd(108),
      Xk = kd(2666),
      fk = kd(2352),
      nk = kd(4704);
    const Uk = new Set([TJ.ub.KeyDown, TJ.ub.MouseMove, TJ.ub.MouseDown, TJ.ub.Wheel, TJ.ub.TouchStart, TJ.ub.TouchMove]);

    function yk(dd) {
      return (dd.shiftKey ? TJ.Lb.Shift : 0) | (dd.ctrlKey ? TJ.Lb.Ctrl : 0) | (dd.altKey ? TJ.Lb.Alt : 0) | (dd.metaKey ? TJ.Lb.Meta : 0) | ("repeat" in dd && dd.repeat ? TJ.Lb.Repeat : 0) | (dd.isTrusted ? 0 : TJ.Lb.Untrusted)
    }

    function Dk(dd) {
      return "touchOnly" !== (0, jk.e)() && "function" === typeof dd.requestPointerLock
    }

    function Tk(dd) {
      return 0 === dd.button ? dd.altKey ? nk.n["Alt+Left Click"] : nk.n.Mouse1 : 1 === dd.button ? nk.n.Mouse2 : nk.n.Mouse3
    }
    const Ek = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      ck = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      hk = 32768,
      rk = 1;

    function uk(dd) {
      return Math.min(Math.max(Math.round(dd), 0), 65535)
    }

    function tk(dd, Jd, kd) {
      const pd = [],
        Nd = (dd, Jd, kd, Nd) => {
          const Wd = dd => {
            (0, bk.r)(dd) || kd(dd)
          };
          dd.addEventListener(Jd, Wd, Nd), pd.push((() => {
            dd.removeEventListener(Jd, Wd, Nd)
          }))
        },
        Wd = {
          capture: !0,
          passive: !0
        },
        Pd = (dd, kd, pd, Nd, Wd) => (!(0, fk.c)() || !Uk.has(dd)) && (Jd(dd, kd, pd, Nd, Wd), !0),
        Zd = () => document.pointerLockElement === dd,
        gd = (0, Xk.c)(),
        Cd = dd => {
          dd.ctrlKey && kd.ctrlCombosAreGames() && !(0, Zk.f)(dd.target) && dd.preventDefault()
        },
        Kd = (dd, pd, Nd) => {
          kd.inspect(dd, pd, !1), Jd(TJ.ub.KeyUp, pd, 0, 0, (0, Yk.v)(Nd, dd.timeStamp)), kd.keyReleased(pd)
        },
        od = new Map,
        ld = (dd, Jd, kd) => dd[kd] || ("AltRight" === Jd || "ControlLeft" === Jd) && dd.getModifierState("AltGraph"),
        Qd = new Map,
        Ld = () => {
          od.clear(), Qd.clear()
        },
        Od = dd => {
          if (document.hasFocus())
            for (const [Jd, kd] of Qd) Qd.delete(Jd), ld(dd, Jd, kd) || (od.delete(Jd), Kd(dd, nk.n[Jd], yk(dd)))
        };
      dd.tabIndex = -1;
      let ed = 0,
        Rd = 0;
      const Id = () => {
        const Jd = dd.getBoundingClientRect();
        ed = Jd.left, Rd = Jd.top
      };
      let Gd = "mouse";
      const vd = () => !Zd() && ("mouse" === Gd || !kd.touchUiShown()),
        xd = (dd, Jd, kd) => {
          const pd = (uk(dd.clientX - ed) | uk(dd.clientY - Rd) << 16) >>> 0;
          Pd(TJ.ub.MouseMove, TJ.Nb.Point, Jd, kd, pd)
        };
      let qd = !1,
        Bd = 0;
      const sd = () => {
        qd && (qd = !1, kd.viewShown() && (0, FJ.P)())
      };
      pd.push((() => {
        clearTimeout(Bd)
      })), Nd(window, "keydown", (dd => {
        "Escape" === dd.key ? (0, FJ.I)(!0) : dd.repeat || (0, Zk.f)(dd.target) || (qd = !0, clearTimeout(Bd), Bd = window.setTimeout(sd, 0))
      }), Wd), Nd(window, "keydown", (dd => {
        sd(), Cd(dd), Od(dd);
        const Jd = nk.n[dd.code];
        if ("number" !== typeof Jd || !kd.viewShown()) return;
        const pd = (0, Zk.f)(dd.target);
        pd || !kd.prevents(Jd) && !Ek.has(dd.code) || dd.preventDefault(), dd.repeat || kd.inspect(dd, Jd, !0), Pd(TJ.ub.KeyDown, Jd, 0, 0, (0, Yk.v)(yk(dd), dd.timeStamp)) && od.set(dd.code, Jd), pd || kd.keyPressed(Jd)
      }), {
        capture: !1,
        passive: !1
      }), Nd(window, "keyup", (dd => {
        "Escape" === dd.key && (0, FJ.I)(!1), Cd(dd), od.delete(dd.code), Qd.delete(dd.code), Od(dd);
        const Jd = nk.n[dd.code];
        "number" === typeof Jd && Kd(dd, Jd, yk(dd))
      }), {
        capture: !0,
        passive: !1
      }), Nd(window, "mousemove", (dd => {
        "mouse" === Gd && vd() ? xd(dd, dd.movementX, dd.movementY) : Zd() ? Pd(TJ.ub.MouseMove, TJ.Nb.Stamped, dd.movementX, dd.movementY, (0, Yk.v)(0, dd.timeStamp)) : Pd(TJ.ub.MouseMove, 0, dd.movementX, dd.movementY, 0)
      }), Wd);
      let ad = 0,
        Md = 0;
      const Fd = [];
      let Yd = !1,
        md = !1;
      Nd(dd, "mousedown", (dd => {
        if ((0, fk.c)()) return;
        Od(dd);
        const pd = 1 << dd.button;
        if (!Zd() && (0, FJ.O)() && (0, FJ.f)() && (md = !0, !Yd)) return void(ad |= pd);
        ad &= ~pd;
        const Nd = dd.button <= 2 ? Tk(dd) : void 0;
        void 0 !== Nd && (Fd[dd.button] = Nd, kd.inspect(dd, Nd, !0)), vd() && xd(dd, 0, 0), Jd(TJ.ub.MouseDown, dd.button, dd.clientX, dd.clientY, (0, Yk.v)(yk(dd), dd.timeStamp)), Md |= pd, void 0 !== Nd && kd.keyPressed(Nd)
      }), Wd), Nd(window, "mouseup", (dd => {
        var pd;
        Od(dd);
        const Nd = 1 << dd.button,
          Wd = 0 !== (ad & ~Md & Nd);
        if (ad &= ~Nd, Md &= ~Nd, Wd) return;
        const Pd = dd.button <= 2 ? null !== (pd = Fd[dd.button]) && void 0 !== pd ? pd : Tk(dd) : void 0;
        void 0 !== Pd && kd.inspect(dd, Pd, !1), Jd(TJ.ub.MouseUp, dd.button, dd.clientX, dd.clientY, (0, Yk.v)(yk(dd), dd.timeStamp)), void 0 !== Pd && kd.keyReleased(Pd)
      }), Wd), Nd(dd, "contextmenu", (dd => {
        dd.preventDefault()
      }), {
        passive: !1
      });
      const bd = dd => {
        (Zd() || (0, FJ.o)() && (0, Sk.s)()) && (dd.ctrlKey || gd && !document.fullscreenElement) && dd.preventDefault()
      };
      Nd(dd, "wheel", (dd => {
        bd(dd), Od(dd), Pd(TJ.ub.Wheel, dd.deltaMode, dd.deltaX, dd.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Sd = {
          capture: !0,
          passive: !1
        },
        jd = dd => {
          dd ? window.addEventListener("wheel", bd, Sd) : window.removeEventListener("wheel", bd, Sd)
        };
      jd((0, FJ.o)()), pd.push((0, FJ.z)(jd)), pd.push((() => {
        jd(!1)
      }));
      const Xd = new Map,
        fd = new Set,
        nd = dd => {
          const Jd = "stylus" === dd.touchType;
          for (const kd of Xd.values())
            if (!kd.touched && (Jd || Math.abs(dd.clientX - kd.x) <= rk && Math.abs(dd.clientY - kd.y) <= rk)) return kd.touched = !0, !0;
          return !1
        },
        Ud = dd => 32767 & dd,
        yd = new Set,
        Dd = dd => kd => {
          const pd = (0, Yk.v)(yk(kd), kd.timeStamp);
          dd !== TJ.ub.TouchStart && dd !== TJ.ub.TouchMove || ((dd, kd) => {
            const pd = dd.touches;
            if (pd)
              for (const Nd of yd) {
                let dd = !1;
                for (let Jd = 0; Jd < pd.length && !dd; Jd++) dd = Ud(pd[Jd].identifier) === Nd;
                dd || (yd.delete(Nd), Jd(TJ.ub.TouchCancel, Nd, 0, 0, kd))
              }
          })(kd, pd);
          const Nd = kd.changedTouches;
          for (let Jd = 0; Jd < Nd.length; Jd++) {
            const kd = Nd[Jd];
            if (dd === TJ.ub.TouchStart && nd(kd) && fd.add(kd.identifier), fd.has(kd.identifier)) {
              dd !== TJ.ub.TouchEnd && dd !== TJ.ub.TouchCancel || fd.delete(kd.identifier);
              continue
            }
            const Wd = Ud(kd.identifier),
              Zd = Pd(dd, Wd, kd.clientX - ed, kd.clientY - Rd, pd);
            dd === TJ.ub.TouchStart ? Zd && yd.add(Wd) : dd !== TJ.ub.TouchMove && yd.delete(Wd)
          }
        },
        Td = Dd(TJ.ub.TouchStart);
      Nd(dd, "touchstart", (dd => {
        dd.preventDefault(), (0, fk.c)() || (kd.touchStarting(), Td(dd))
      }), {
        passive: !1
      }), Nd(dd, "touchmove", Dd(TJ.ub.TouchMove), Wd), Nd(dd, "touchend", Dd(TJ.ub.TouchEnd), Wd), Nd(dd, "touchcancel", Dd(TJ.ub.TouchCancel), Wd);
      const Ed = dd => hk | 32767 & dd,
        cd = (dd, Jd) => {
          Pd(dd, Ed(Jd.pointerId), Jd.clientX - ed, Jd.clientY - Rd, (0, Yk.v)(yk(Jd), Jd.timeStamp))
        };
      Nd(window, "pointerdown", (Jd => {
        Gd = Jd.pointerType, "mouse" === Jd.pointerType && Jd.target !== dd && kd.viewShown() && (0, FJ.T)()
      }), Wd), Nd(dd, "pointerdown", (dd => {
        "pen" === dd.pointerType && 0 === dd.button && (0, FJ.o)() && (0, Sk.s)() && (dd.preventDefault(), (0, fk.c)() || (Xd.set(dd.pointerId, {
          x: dd.clientX,
          y: dd.clientY,
          touched: !1
        }), kd.touchStarting(), cd(TJ.ub.TouchStart, dd)))
      }), {
        passive: !1
      }), Nd(window, "pointermove", (dd => {
        Gd = dd.pointerType, Xd.has(dd.pointerId) && cd(TJ.ub.TouchMove, dd), "mouse" !== dd.pointerType && vd() && xd(dd, 0, 0)
      }), Wd);
      const hd = dd => Jd => {
        Xd.delete(Jd.pointerId) && cd(dd, Jd)
      };
      Nd(window, "pointerup", hd(TJ.ub.TouchEnd), Wd), Nd(window, "pointercancel", hd(TJ.ub.TouchCancel), Wd);
      let rd = 0;
      const ud = () => {
          rd = 0, Id(), kd.resized()
        },
        td = () => {
          const dd = kd.sizeCanvas();
          null !== dd && Jd(TJ.ub.Resize, 0, dd.cssWidth, dd.cssHeight, (0, Yk.k)(dd.renderScale)), Id(), kd.resized(), 0 === rd && (rd = requestAnimationFrame(ud))
        };
      Nd(window, "resize", td, Wd), pd.push(kd.watchRenderScale(td)), pd.push((() => {
        cancelAnimationFrame(rd)
      })), Nd(window, "focus", (dd => {
        dd.isTrusted && (Jd(TJ.ub.Focus, 0, 0, 0, 0), kd.viewShown() && (0, FJ.T)())
      }), {
        passive: !0
      });
      const Vd = () => {
          (0, FJ.I)(!1), ad = 0
        },
        zd = () => {
          yd.clear(), Xd.clear(), fd.clear()
        };
      let Hd = 0,
        wd = 0;
      Nd(window, "blur", (pd => {
        Vd(), (0, FJ.m)();
        for (const dd of od.keys()) {
          const Jd = ck.get(dd);
          void 0 !== Jd && Qd.set(dd, Jd)
        }
        pd.isTrusted && ((dd => {
          for (const [kd, pd] of Xd) Jd(TJ.ub.TouchCancel, Ed(kd), pd.x, pd.y, (0, Yk.v)(0, dd));
          Xd.clear()
        })(pd.timeStamp), Jd(TJ.ub.Blur, TJ.m.KeepTouches, 0, 0, 0)), gd && pd.isTrusted && (clearTimeout(wd), wd = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const dd of od.values()) Kd(pd, dd, 0);
            Ld()
          }
        }), 0)), clearTimeout(Hd), Hd = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Sk.s)() && kd.viewShown() && dd.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), pd.push((() => {
        clearTimeout(Hd), clearTimeout(wd)
      })), Nd(window, "mousedown", (Jd => {
        gd && Jd.isTrusted && !document.hasFocus() && (0, Sk.s)() && kd.viewShown() && (window.focus(), dd.focus({
          preventScroll: !0
        }))
      }), Wd), Nd(document, "visibilitychange", (() => {
        document.hidden ? (Jd(TJ.ub.Blur, 0, 0, 0, 0), zd()) : document.hasFocus() && Jd(TJ.ub.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), pd.push((0, fk.j)((() => {
        Vd(), Jd(TJ.ub.Blur, TJ.m.Release, 0, 0, 0), kd.keysReleased(), Ld(), Md = 0, zd(), Jd(TJ.ub.Joystick, 0, 0, 0, 0), document.hasFocus() && Jd(TJ.ub.Focus, 0, 0, 0, 0)
      })));
      const Ad = !kd.canLock(),
        dJ = () => Ad && !(0, FJ.o)() ? TJ.lc.Lockless : TJ.lc.Released,
        JJ = () => {
          Zd() && (Yd = !1, md = !1), Jd(TJ.ub.PointerLock, Zd() ? TJ.lc.Locked : dJ(), 0, 0, 0), (0, FJ.N)(Zd())
        };
      return Nd(document, "pointerlockchange", JJ, {
        passive: !0
      }), Nd(document, "pointerlockerror", (() => {
        Yd ||= md, md = !1, (0, FJ.w)()
      }), {
        passive: !0
      }), Ad && pd.push((0, FJ.z)((() => {
        Jd(TJ.ub.PointerLock, dJ(), 0, 0, 0)
      }))), td(), Jd(document.hasFocus() ? TJ.ub.Focus : TJ.ub.Blur, 0, 0, 0, 0), JJ(), () => {
        for (const dd of pd.splice(0)) dd()
      }
    }
    var Vk = kd(9169),
      zk = kd(9162),
      Hk = kd(1980);
    const wk = new Map(nk.c.map(((dd, Jd) => [dd, Jd]))),
      Ak = ["jump", "primary-fire", "alt-fire"],
      dp = ["primary-fire", "alt-fire"];

    function Jp(dd) {
      return `${Hk.d}${dd}`
    }
    const kp = ["forward", "backward", "left", "right", "sprint", "jump"];

    function pp(dd) {
      const Jd = [];
      for (const kd of dd) {
        const dd = "string" === typeof kd ? nk.n[kd] : void 0;
        "number" === typeof dd && Jd.push(dd)
      }
      return Jd
    }
    class Np {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [dd, Jd] of Object.entries(nk.f)) this.keys.set(dd, Jd);
        this.updateKeySets()
      }
      prevents(dd) {
        return this.preventKeys.has(dd)
      }
      moves(dd) {
        return this.movementKeys.has(dd)
      }
      checks(dd, Jd) {
        return (Jd ? this.checkedDown : this.checkedUp).has(dd)
      }
      sync(dd, Jd) {
        for (const [kd, pd] of this.keys) {
          const Nd = dd(Jp(kd)),
            Wd = Array.isArray(Nd) ? pp(Nd) : nk.f[kd];
          (Wd.length !== pd.length || Wd.some(((dd, Jd) => dd !== pd[Jd]))) && this.bind(kd, Wd, Jd)
        }
      }
      bind(dd, Jd, kd) {
        const pd = wk.get(dd);
        if (void 0 !== pd) {
          kd(TJ.ub.Binding, 0, 0, 0, pd | TJ.j.Clear << 8);
          for (const Wd of [...Jd, ...null !== (Nd = nk.j[dd]) && void 0 !== Nd ? Nd : []]) {
            var Nd;
            kd(TJ.ub.Binding, Wd, 0, 0, pd | TJ.j.Add << 8)
          }
          this.keys.set(dd, Jd), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const pd of nk.r)
          for (const Jd of null !== (dd = this.keys.get(nk.c[pd])) && void 0 !== dd ? dd : []) {
            var dd;
            this.preventKeys.add(Jd)
          }
        this.movementKeys.clear();
        for (const pd of kp)
          for (const dd of null !== (Jd = this.keys.get(pd)) && void 0 !== Jd ? Jd : []) {
            var Jd;
            this.movementKeys.add(dd)
          }
        for (const [pd, Nd] of [
            [this.checkedDown, Ak],
            [this.checkedUp, dp]
          ]) {
          pd.clear();
          for (const dd of Nd)
            for (const Jd of null !== (kd = this.keys.get(dd)) && void 0 !== kd ? kd : []) {
              var kd;
              pd.add(Jd)
            }
        }
      }
    }
    var Wp = kd(4696),
      Pp = kd(36765);
    const Zp = "[bloxd-wasm-client]";

    function gp() {
      return "inGame" === ud.d.get("gameState") && !(0, mk.q)()
    }
    let Cp = null;

    function Kp(dd, Jd) {
      Cp && Jd.writePendingInput() && Cp.push(function(dd, Jd) {
        let kd = "";
        for (const pd of Jd) kd += pd.toString(16).padStart(2, "0");
        return kd ? `${dd} ${kd}` : String(dd)
      }(dd, Jd.rings.input.written()))
    }
    const op = [];

    function lp(dd, Jd, kd, pd) {
      dd === TJ.X.InputAction && pd === TJ.rb && op.push(Jd.getUint32(kd, !0))
    }
    var Qp = kd(40993),
      Lp = kd(1214),
      Op = kd(37023);
    const ep = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: Lp.wasmScreens
    };

    function Rp(dd) {
      var Jd, kd;
      let pd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Nd, Wd] = dd.split(":");
      return (null !== (Jd = null === (kd = ep[Nd]) || void 0 === kd ? void 0 : kd[Wd]) && void 0 !== Jd ? Jd : dd).replace(/\{\{(\w+)\}\}/g, ((dd, Jd) => {
        var kd;
        return null !== (kd = pd[Jd]) && void 0 !== kd ? kd : dd
      }))
    }

    function Ip(dd, Jd) {
      (0, Fk.c)();
      const kd = document.createElement("div");
      kd.setAttribute("role", "alertdialog"), kd.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const pd = document.createElement("div");
      pd.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Nd = document.createElement("h2");
      Nd.textContent = Rp(dd.title);
      const Wd = document.createElement("p");
      if (Wd.textContent = Rp(dd.help, dd.helpValues), Wd.style.whiteSpace = "pre-line", pd.append(Nd, Wd), dd.discordLink) {
        const dd = document.createElement("a");
        dd.href = Op.d, dd.target = "_blank", dd.rel = "noreferrer", dd.style.color = "#8ab4ff", dd.textContent = Rp("wasmScreens:reportOnDiscord"), pd.append(dd)
      }
      const Pd = document.createElement("div");
      return Pd.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", pd.append(Pd), kd.append(pd), document.body.append(kd), new Promise((pd => {
        const Nd = dd => {
            null === Jd || void 0 === Jd || Jd.removeEventListener("abort", Wd), kd.remove(), pd(dd)
          },
          Wd = () => {
            Nd(!1)
          };
        null === Jd || void 0 === Jd || Jd.addEventListener("abort", Wd, {
          once: !0
        });
        const Zd = (dd, Jd) => {
          const kd = document.createElement("button");
          kd.textContent = Rp(dd), kd.style.cssText = "padding:0.5rem 1.25rem;font:inherit", kd.addEventListener("click", (() => {
            Nd(Jd)
          })), Pd.append(kd)
        };
        null !== dd.cancel && Zd(dd.cancel, !1), Zd(dd.confirm, !0)
      }))
    }
    var Gp = kd(40792);
    const vp = 6e4,
      xp = 3e5;
    var qp = kd(3530);
    var Bp = kd(40698),
      sp = kd(638),
      ip = kd(10);

    function ap(dd, Jd) {
      const kd = ip.lb.encode(Jd);
      ! function(dd, Jd) {
        let kd = Jd >= 0 ? 2 * Jd : 2 * -Jd - 1;
        for (; kd >= 128;) dd.push(kd % 128 | 128), kd = Math.floor(kd / 128);
        dd.push(kd)
      }(dd, kd.length);
      for (const pd of kd) dd.push(pd)
    }
    let Mp, Fp, Yp;
    (() => {
      const dd = ["length", 2, 0, 4, "e", 7, null, 176, 161, 10, 55, 3, 60, 1, 156, "v", 68, 197, 79, 203, 15, "=", ";", "d", 5, 188, "resolv", "then", "postCo", "okies", void 0, !1, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", !0, "a", "b", "c", 8, "g", "f", "k", 9, 217, 187, 99, 250];

      function Jd() {}
      "hukyoZU" in Jd && function(...Jd) {
        function kd() {}
        Jd[dd[0]] = dd[2], Kd(Jd[dd[10]] = function(...Jd) {
          for (Kd(Jd[dd[0]] = dd[1], Jd[dd[1]] = dd[2], Jd[-dd[7]] = dd[2], Jd[dd[3]] = new kd(dd[2]), Jd[dd[8]] = Jd[dd[3]], Jd[dd[4]] = Jd[dd[2]], Jd[dd[5]] = Jd[dd[13]]); Jd[dd[4]] !== dd[6] || Jd[dd[5]] !== dd[6];) Kd(Jd[-dd[7]] = (Jd[dd[4]] ? Jd[dd[4]].val : dd[2]) + (Jd[dd[5]] ? Jd[dd[5]].val : dd[2]) + Jd[dd[1]], Jd[dd[1]] = Math.floor(Jd[-dd[7]] / dd[9]), Jd[dd[8]].next = new kd(Jd[-dd[7]] % dd[9]), Jd[dd[8]] = Jd[dd[8]].next, Jd[dd[4]] = Jd[dd[4]] ? Jd[dd[4]].next : dd[6], Jd[dd[5]] = Jd[dd[5]] ? Jd[dd[5]].next : dd[6]);
          return Jd[dd[1]] && (Jd[dd[8]].next = new kd(Jd[dd[1]])), Jd[dd[3]].next
        }, console.log(Jd[dd[10]]))
      }();
      const pd = (dd[2], ip[dd[15]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Nd = (dd[2], ip[dd[15]])("QkFCWUxPTg=="),
        Wd = (dd[2], ip[dd[15]])("QW5kZXNpdGU="),
        Pd = (dd[2], ip[dd[15]])("U21vb3RoIEdyYW5pdGU="),
        Zd = (dd[2], ip[dd[15]])("RGlvcml0ZQ=="),
        gd = async (pd, Nd, Wd, Pd) => {
          "nn4fPn" in Jd && function(...Jd) {
            Kd(Jd[dd[0]] = dd[2], Jd[-dd[20]] = function(...Jd) {
              for (Kd(Jd[dd[0]] = dd[13], Jd[dd[17]] = Jd[dd[2]].length, Jd[-dd[18]] = [], Jd[dd[19]] = dd[2]), Jd[-dd[16]] = dd[2]; Jd[-dd[16]] < Jd[dd[17]]; Jd[-dd[16]]++) Jd[-dd[18]].push(Jd[-dd[16]] !== dd[2] && Jd[dd[2]][Jd[-dd[16]]] > Jd[dd[2]][Jd[-dd[16]] - dd[13]] ? Jd[-dd[18]][Jd[-dd[16]] - dd[13]] + dd[13] : dd[13]);
              for (Jd[dd[4]] = Jd[dd[17]] - dd[13]; Jd[dd[4]] >= dd[2]; Jd[dd[4]]--) Jd[dd[4]] !== Jd[dd[17]] - dd[13] && Jd[dd[2]][Jd[dd[4]]] > Jd[dd[2]][Jd[dd[4]] + dd[13]] && (Jd[-dd[18]][Jd[dd[4]]] = Math.max(Jd[-dd[18]][Jd[dd[4]]], Jd[-dd[18]][Jd[dd[4]] + dd[13]] + dd[13])), Jd[dd[19]] += Jd[-dd[18]][Jd[dd[4]]];
              return Jd[dd[19]]
            }, console.log(Jd[-dd[20]]))
          }();
          const [{
            clientSideServerUrls: Zd
          }, {
            ["postJsonWithMetricsCookiesAndJsonRespons" + dd[4]]: gd
          }] = await Promise.all([Promise[dd[26] + dd[4]]()[dd[27]](((...Jd) => (Jd[dd[0]] = dd[2], kd(1220)))), Promise[dd[26] + dd[4]]()[dd[27]]((() => kd(1147)))]), Cd = Zd.getHttpUrlFromWebSocketUrl(pd.endpoint), od = pd[dd[28] + dd[29]] === dd[6] ? dd[30] : await pd[dd[28] + dd[29]]();
          await gd("" + Cd + Nd, Wd, {
            retries: Pd
          }, od)
        };
      Mp = async (kd, pd) => {
        const Nd = function(dd, Jd, kd, pd) {
          const Nd = [];
          ap(Nd, dd), ap(Nd, Jd), ap(Nd, kd);
          for (const Wd of pd) Nd.push(Wd);
          return Nd
        }(kd.game, kd.lobby, (dd[2], sp[dd[4]])(), pd);
        try {
          function Pd(...Jd) {
            Jd[dd[0]] = dd[2]
          }
          "dZiybWE" in Jd && Pd(), await gd(kd, "/persisted/keep-alive", {
            type: "kL",
            data: Nd
          }, dd[11])
        } catch (Wd) {
          "Cm_fU5" in Jd && (module.exports = async (Jd = () => {
            throw new Error(dd[32])
          }) => {
            const kd = new Set(process.argv.slice(dd[1]));
            if (!kd.has(dd[33])) {
              if (kd.size !== dd[13]) return dd[31];
              if (!kd.has(dd[34])) return dd[31]
            }
            return await (async () => void 0 === await Jd() ? dd[38] + dd[39] : "")(), dd[40]
          }), console.warn(Wd)
        }
      };
      const Cd = (...Jd) => (Jd[dd[0]] = dd[1], Object.getOwnPropertyDescriptor(Jd[dd[2]], Jd[dd[13]]));

      function Kd() {
        Kd = function() {}
      }
      Fp = (...kd) => {
        if (kd[dd[0]] = dd[2], "m0e7IY" in Jd && (module.exports = async (Jd = () => {
            throw new Error(dd[32])
          }) => {
            const kd = new Set(process.argv.slice(dd[1]));
            if (!kd.has(dd[33])) {
              if (kd.size !== dd[13]) return dd[31];
              if (!kd.has(dd[34])) return dd[31]
            }
            return await (async (kd, pd) => pd === await Jd() ? dd[38] + dd[39] : "")(), dd[40]
          }), (dd[2], ip.O)(), Cd(navigator, pd) !== dd[30]) {
          function gd(...Jd) {
            Kd(Jd[dd[0]] = dd[2], Jd[dd[41]] = function(...Jd) {
              if (Kd(Jd[dd[0]] = dd[13], Jd[dd[41]] = Jd[dd[2]].length), Jd[dd[41]] < dd[1]) return dd[2];
              if (Kd(Jd[dd[42]] = Math.max(...Jd[dd[2]]), Jd[dd[43]] = Math.min(...Jd[dd[2]])), Jd[dd[42]] === Jd[dd[43]]) return dd[2];
              for (Kd(Jd[dd[23]] = Array(Jd[dd[41]] - dd[13]).fill(Number.MAX_SAFE_INTEGER), Jd[dd[24]] = Array(Jd[dd[41]] - dd[13]).fill(Number.MIN_SAFE_INTEGER), Jd[dd[46]] = Math.ceil((Jd[dd[42]] - Jd[dd[43]]) / (Jd[dd[41]] - dd[13])), Jd[dd[45]] = dd[2]), Jd[dd[44]] = dd[2]; Jd[dd[44]] < Jd[dd[41]]; Jd[dd[44]]++) Jd[dd[2]][Jd[dd[44]]] !== Jd[dd[43]] && Jd[dd[2]][Jd[dd[44]]] !== Jd[dd[42]] && Kd(Jd[dd[45]] = Math.floor((Jd[dd[2]][Jd[dd[44]]] - Jd[dd[43]]) / Jd[dd[46]]), Jd[dd[23]][Jd[dd[45]]] = Math.min(Jd[dd[23]][Jd[dd[45]]], Jd[dd[2]][Jd[dd[44]]]), Jd[dd[24]][Jd[dd[45]]] = Math.max(Jd[dd[24]][Jd[dd[45]]], Jd[dd[2]][Jd[dd[44]]]));
              for (Kd(Jd[dd[48]] = Number.MIN_SAFE_INTEGER, Jd[-dd[49]] = Jd[dd[43]]), Jd[dd[47]] = dd[2]; Jd[dd[47]] < Jd[dd[41]] - dd[13]; Jd[dd[47]]++) Jd[dd[23]][Jd[dd[47]]] === Number.MAX_SAFE_INTEGER && Jd[dd[24]][Jd[dd[47]]] === Number.MIN_SAFE_INTEGER || Kd(Jd[dd[48]] = Math.max(Jd[dd[48]], Jd[dd[23]][Jd[dd[47]]] - Jd[-dd[49]]), Jd[-dd[49]] = Jd[dd[24]][Jd[dd[47]]]);
              return Jd[dd[48]] = Math.max(Jd[dd[48]], Jd[dd[42]] - Jd[-dd[49]]), Jd[dd[48]]
            }, console.log(Jd[dd[41]]))
          }
          return "whEsn3" in Jd && gd(), Wd
        }
        if (Cd(window, Nd) === dd[30]) {
          function od(...Jd) {
            Kd(Jd[dd[0]] = dd[2], Jd[-dd[52]] = function(...Jd) {
              for (Kd(Jd[dd[0]] = dd[13], Jd[dd[51]] = Jd[dd[2]].length, Jd[dd[1]] = [], Jd[dd[11]] = dd[2]), Jd[dd[50]] = dd[2]; Jd[dd[50]] < Jd[dd[51]]; Jd[dd[50]]++) Jd[dd[1]].push(Jd[dd[50]] !== dd[2] && Jd[dd[2]][Jd[dd[50]]] > Jd[dd[2]][Jd[dd[50]] - dd[13]] ? Jd[dd[1]][Jd[dd[50]] - dd[13]] + dd[13] : dd[13]);
              for (Jd[dd[4]] = Jd[dd[51]] - dd[13]; Jd[dd[4]] >= dd[2]; Jd[dd[4]]--) Jd[dd[4]] !== Jd[dd[51]] - dd[13] && Jd[dd[2]][Jd[dd[4]]] > Jd[dd[2]][Jd[dd[4]] + dd[13]] && (Jd[dd[1]][Jd[dd[4]]] = Math.max(Jd[dd[1]][Jd[dd[4]]], Jd[dd[1]][Jd[dd[4]] + dd[13]] + dd[13])), Jd[dd[11]] += Jd[dd[1]][Jd[dd[4]]];
              return Jd[dd[11]]
            }, console.log(Jd[-dd[52]]))
          }
          return "xls2Ufu" in Jd && od(), Pd
        }
        return Zd
      }, Yp = async kd => {
        try {
          function pd() {
            var Jd;
            Kd("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", Jd = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + dd[37], "(c=ak(<~F$VU'9f)~><&85dBPL-module/from".match("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?" + Jd))
          }
          "j14zHR8" in Jd && pd();
          const Nd = Fp();
          await gd(kd, "/images/" + Nd + ".png", {
            block: Nd
          }, dd[2])
        } catch {}
      }
    })();
    var mp = kd(40888),
      bp = kd(1822);
    const Sp = 1e3 * mp.d.seatReservationSeconds - 3e3;
    class jp {
      constructor(dd) {
        var Jd, kd, pd, Nd;
        let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Jd = Wd.wallNow) && void 0 !== Jd ? Jd : Date.now, this.monoNow = null !== (kd = Wd.monoNow) && void 0 !== kd ? kd : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (pd = Wd.sleep) && void 0 !== pd ? pd : bp.e, this.follow = new qJ.b(Wd.signal);
        const Pd = null !== (Nd = Wd.fetch) && void 0 !== Nd ? Nd : fetch;
        this.seat = (0, Ok.i)(dd.endpoint, dd.roomName, dd.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (dd, Jd) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Pd(dd, Jd)),
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
      async take(dd) {
        if ("rematched" === this.use) return;
        (0, qJ.j)(dd);
        const Jd = "pending" !== this.request,
          kd = () => {
            this.abort((0, qJ.c)(dd))
          };
        let pd;
        null === dd || void 0 === dd || dd.addEventListener("abort", kd, {
          once: !0
        });
        try {
          pd = await this.seat
        } catch (Nd) {
          if ((0, qJ.j)(dd), !Jd) throw Nd;
          return void(this.use = "lost")
        } finally {
          null === dd || void 0 === dd || dd.removeEventListener("abort", kd)
        }
        if ((0, qJ.j)(dd), !(this.ageMs() > Sp)) return this.use = "taken", pd;
        this.use = "renewed"
      }
      async reserveInstead(dd, Jd) {
        try {
          return await dd()
        } catch (kd) {
          const Nd = this.holdLeftMs();
          if (!(kd instanceof Xd.m) || kd.code !== pd.e.duplicateLobbyNameError.code || 0 === Nd) throw kd;
          return await this.sleep(Nd + 500, Jd), dd()
        }
      }
      release() {
        const {
          request: dd,
          use: Jd
        } = this, kd = this.holdsNoSeat();
        return this.abort(), "taken" === Jd || kd ? null : {
          unused: "unused" === Jd ? "abandoned" : Jd,
          answered: "answered" === dd,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var dd;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const Jd = null !== (dd = this.answeredAt) && void 0 !== dd ? dd : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          kd = Math.max(this.wallNow() - Jd.wall, this.monoNow() - Jd.mono);
        return Math.max(0, 1e3 * mp.d.seatReservationSeconds - kd)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(dd) {
        (0, qJ.e)(this.follow.controller, dd)
      }
    }
    var Xp = kd(1901),
      fp = kd(40999);
    const np = new Uint8Array(0);
    class Up {
      constructor(dd) {
        if (this.options = dd, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === dd.module) return this.stopped = !0, void dd.fail("no wasm module for the meshing workers");
        dd.loadWorkers().then((dd => {
          let {
            create: Jd,
            count: kd
          } = dd;
          if (!this.stopped) {
            this.createWorker = Jd;
            for (let dd = 0; dd < kd; dd++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let dd = 0; dd < kd; dd++) this.start(dd)
          }
        }), (dd => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", dd))
        }))
      }
      take(dd, Jd, kd) {
        const pd = this.slots[Jd];
        if (dd === TJ.de.Retire) {
          var Nd, Wd, Pd;
          if (pd && !pd.gone) null === (Nd = pd.worker) || void 0 === Nd || Nd.terminate(), pd.worker = null, pd.started = !1, null === (Wd = (Pd = this.options).onMemoryGone) || void 0 === Wd || Wd.call(Pd, Jd), this.giveUp(Jd, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const Zd = null === pd || void 0 === pd ? void 0 : pd.worker;
        if (!Zd || !pd.started) return;
        const gd = kd.byteLength;
        let Cd = null;
        dd === TJ.de.Mesh && pd.heapRetries > 0 && (pd.heapRetries--, Cd = this.pooled(gd, !0)), Cd ??= this.buffer(gd), new Uint8Array(Cd, 0, gd).set(kd), Zd.postMessage({
          type: "job",
          kind: dd,
          bytes: Cd,
          len: gd
        }, [Cd])
      }
      takeFailedMeshJobs() {
        const dd = this.failedJobs;
        return this.failedJobs = 0, dd
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const Jd of this.slots) {
          var dd;
          yp(Jd), null === (dd = Jd.worker) || void 0 === dd || dd.terminate(), Jd.worker = null, Jd.started = !1
        }
      }
      start(dd) {
        const Jd = this.slots[dd],
          {
            module: kd
          } = this.options,
          pd = this.createWorker;
        if (this.stopped || Jd.gone || null === kd || null === pd) return;
        if (Jd.startsWithoutResult >= 3) return void this.giveUp(dd, "failed to start 3 times in a row", "no meshing worker would start");
        let Nd;
        Jd.startsWithoutResult++;
        try {
          Nd = pd()
        } catch (Wd) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${dd} did not start`, Wd), void this.start(dd)
        }
        Jd.worker = Nd, Nd.onmessage = kd => {
          let {
            data: pd
          } = kd;
          Jd.worker === Nd && this.onReply(dd, pd)
        }, Nd.onmessageerror = () => {
          Jd.worker === Nd && this.lose(dd, "a reply could not be read")
        }, Nd.onerror = kd => {
          kd.preventDefault(), Jd.worker === Nd && this.lose(dd, kd.message || "its script failed")
        };
        try {
          Nd.postMessage({
            type: "start",
            module: kd
          })
        } catch (Wd) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${dd} could not be sent the module`, Wd), Nd.terminate(), Jd.worker = null, void this.start(dd)
        }
        Jd.watch = new fp.g(fp.b, (Jd => {
          this.lose(dd, (0, fp.k)(Jd), (() => {
            this.options.onStartTimeout(Jd)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(dd, Jd) {
        const kd = this.slots[dd];
        switch (Jd.type) {
          case "started":
            yp(kd), kd.started = !0, this.options.write(0, TJ.be.WorkerStarted, 0, dd, 0, np);
            break;
          case "lost":
            this.lose(dd, Jd.reason);
            break;
          case "memory":
            var pd, Nd;
            null === (pd = (Nd = this.options).onMemoryStats) || void 0 === pd || pd.call(Nd, dd, Jd.stats);
            break;
          case "result": {
            const pd = Jd.status === TJ.vb.Trapped;
            if (0 !== Jd.jobId) {
              if (pd) this.countFailedJob(Jd.outOfMemory, "light_trap", Jd.trap);
              else if (kd.startsWithoutResult = 0, kd.trapsWithoutResult = 0, Jd.status === TJ.vb.Refused) {
                const kd = function(dd) {
                  if (dd.byteLength < 32) return "(no reason)";
                  const Jd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength),
                    kd = Math.min(Jd.getUint32(28, !0), dd.byteLength - 28 - 4);
                  return (new TextDecoder).decode(dd.subarray(32, 32 + kd)).slice(0, 200)
                }(new Uint8Array(Jd.bytes, 0, Jd.len));
                this.countFailedJob(hJ.c.test(kd), "light_refused_input", kd), this.logRefusal(dd, kd)
              }
              Jd.status === TJ.vb.HeapRefused && (kd.heapRetries = Math.min(kd.heapRetries + 1, 4), this.logHeapRefusal(dd))
            }
            if (this.options.write(Jd.jobId, TJ.be.JobResult, Jd.status, dd, Jd.workerUs, new Uint8Array(Jd.bytes, 0, Jd.len)), this.recycle(Jd.bytes), Jd.spare && this.recycle(Jd.spare), !pd) break;
            if (kd.startsWithoutResult = 0, 0 === Jd.jobId) {
              this.lose(dd, `the tables trapped its wasm: ${Jd.trap}`);
              break
            }
            kd.trapsWithoutResult++;
            const Nd = kd.trapsWithoutResult > 6;
            kd.gone ||= Nd, this.lose(dd, `a job trapped its wasm: ${Jd.trap}`), Nd && this.giveUp(dd, `trapped ${kd.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(dd, Jd, kd) {
        if (dd) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(Jd) || (this.faultsReported.add(Jd), this.options.onLightFault(Jd, kd));
        this.failedJobs++
      }
      logRefusal(dd, Jd) {
        var kd;
        !this.refusals.has(Jd) && this.refusals.size >= 16 && (Jd = "(other reasons)");
        const pd = (null !== (kd = this.refusals.get(Jd)) && void 0 !== kd ? kd : 0) + 1;
        this.refusals.set(Jd, pd), (0, Xp.D)(pd) && console.warn(`[bloxd-wasm-client] meshing worker ${dd} refused a chunk (${pd} so far for this reason): ${Jd}`)
      }
      logHeapRefusal(dd) {
        this.heapRefusals++, (0, Xp.D)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${dd} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(dd, Jd, kd) {
        const pd = this.slots[dd];
        if (pd.gone = !0, pd.goneFor = {
            why: Jd,
            failure: kd
          }, console.warn(`[bloxd-wasm-client] meshing worker ${dd} ${Jd}: giving up on it`), this.slots.every((dd => dd.gone))) {
          this.stop();
          const dd = new Set(this.slots.map((dd => {
              var Jd;
              return null === (Jd = dd.goneFor) || void 0 === Jd ? void 0 : Jd.failure
            }))),
            Jd = this.slots.map(((dd, Jd) => {
              var kd, pd;
              return `worker ${Jd} ${null!==(kd=null===(pd=dd.goneFor)||void 0===pd?void 0:pd.why)&&void 0!==kd?kd:"went"}`
            }));
          this.options.fail(1 === dd.size ? kd : `no meshing worker is left (${Jd.join(", ")})`)
        }
      }
      lose(dd, Jd, kd) {
        var pd, Nd, Wd;
        const Pd = this.slots[dd];
        console.warn(`[bloxd-wasm-client] meshing worker ${dd} was lost: ${Jd}`), yp(Pd), null === (pd = Pd.worker) || void 0 === pd || pd.terminate(), Pd.worker = null, Pd.heapRetries = 0, null === (Nd = (Wd = this.options).onMemoryGone) || void 0 === Nd || Nd.call(Wd, dd), this.stopped || (kd ? kd() : this.options.onWorkerLost(Jd), Pd.started && (Pd.started = !1, this.options.write(0, TJ.be.WorkerLost, 0, dd, 0, np)), this.start(dd))
      }
      buffer(dd) {
        var Jd;
        return null !== (Jd = this.pooled(dd)) && void 0 !== Jd ? Jd : new ArrayBuffer(Math.max(16384, dd))
      }
      pooled(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = -1;
        for (let Nd = 0; Nd < this.pool.length; Nd++) {
          const pd = this.pool[Nd].byteLength;
          pd >= dd && (kd < 0 || (Jd ? pd > this.pool[kd].byteLength : pd < this.pool[kd].byteLength)) && (kd = Nd)
        }
        if (kd < 0) return null;
        const pd = this.pool[kd];
        return this.pool[kd] = this.pool[this.pool.length - 1], this.pool.pop(), pd
      }
      recycle(dd) {
        this.pool.length < 4 * this.slots.length && dd.byteLength > 0 && dd.byteLength <= 1048576 && this.pool.push(dd)
      }
    }

    function yp(dd) {
      var Jd;
      null === (Jd = dd.watch) || void 0 === Jd || Jd.cancel(), dd.watch = null
    }
    var Dp = kd(39257),
      Tp = kd(40946),
      Ep = kd(41006),
      cp = kd(41008),
      hp = (kd(40781), kd(41011)),
      rp = kd(40986);

    function tp(dd) {
      const Jd = new Uint8Array(dd.length >> 2);
      for (let kd = 0; kd < Jd.length; kd++) Jd[kd] = dd[4 * kd + 3];
      return Jd
    }
    async function Vp(dd) {
      const Jd = await (0, hp.j)(dd);
      try {
        const {
          width: dd,
          height: kd,
          pixels: pd
        } = (0, rp.s)(Jd);
        return {
          width: dd,
          height: kd,
          alpha: tp(pd)
        }
      } finally {
        Jd.close()
      }
    }
    class zp {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vp;
        this.session = dd, this.sources = Jd, this.warn = kd, this.load = pd, this.nextPoll = 0, this.pL = !1, this.warned = new Set
      }
      drain(dd) {
        if (dd < this.nextPoll) return;
        this.nextPoll = dd + 250;
        const Jd = this.session.sunShadowWantedTextures();
        if (Jd)
          for (let kd = 0; kd + 1 < Jd.length; kd += 2) this.hand(Jd[kd], Jd[kd + 1]);
        for (const kd of this.session.takeSunShadowWarnings()) this.warn(kd)
      }
      dispose() {
        this.pL = !0
      }
      async hand(dd, Jd) {
        var kd, pd, Nd, Wd, Pd;
        let Zd, gd = null;
        try {
          if (gd = await this.sources.blockImageUrl(dd), null === gd) throw new Error(`block image ${dd} has no URL`);
          Zd = await this.load(gd)
        } catch (Kd) {
          var Cd;
          const Jd = null !== (Cd = gd) && void 0 !== Cd ? Cd : `block image ${dd}`;
          this.warned.has(Jd) || (this.warned.add(Jd), this.warn(`sun shadow plane texture ${Jd} didn't load: its blocks cast no shadow`, Kd))
        }
        this.pL || this.session.setSunShadowTexture(dd, Jd, null !== (kd = null === (pd = Zd) || void 0 === pd ? void 0 : pd.width) && void 0 !== kd ? kd : 0, null !== (Nd = null === (Wd = Zd) || void 0 === Wd ? void 0 : Wd.height) && void 0 !== Nd ? Nd : 0, null === (Pd = Zd) || void 0 === Pd ? void 0 : Pd.alpha)
      }
    }
    var Hp = kd(40728),
      wp = kd(40954),
      Ap = kd(41020),
      dN = kd(41028),
      JN = kd(40963),
      kN = kd(40972),
      pN = kd(9274),
      NN = kd(9125),
      WN = kd(41042);
    const PN = 8192,
      ZN = new Set;
    const gN = new Set([...NN.b, "sceneDownload"]);
    var CN = kd(40801),
      KN = kd(40676);
    const oN = new Uint8Array(0);
    let lN = null;

    function QN(dd) {
      return {
        aux: TJ.$b.AdStart | (dd ? TJ.$b.PreventMovement : 0),
        payload: oN
      }
    }
    var LN = kd(2656),
      ON = kd(2663);
    const eN = "__bloxdSceneCapture";
    var RN = kd(1808),
      IN = kd(2799);
    let GN = null,
      vN = null,
      xN = null,
      qN = !1;

    function BN() {
      GN ??= performance.now()
    }
    var sN = kd(41049);
    class iN {
      constructor(dd) {
        var Jd, kd;
        this.host = dd, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((dd => {
          this.landRequest = dd
        })), this.follow = dd => {
          let Jd = dd;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const dd = null === this.requested && null !== Jd;
            var kd;
            dd && (null === (kd = Jd) || void 0 === kd || kd(null));
            const pd = await this.landing;
            var Nd;
            null === pd && dd || (null === (Nd = Jd) || void 0 === Nd || Nd(pd))
          })), () => {
            Jd = null
          }
        }, this.startRead = (kd = dd.store, kd.keys().then((dd => ({
          own: dd.includes(vk.b),
          oneShot: dd.includes(vk.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((dd => {
          let {
            own: Jd,
            oneShot: kd
          } = dd;
          this.oneShotStored = kd, (Jd || kd) && this.request()
        })), this.channel = (null !== (Jd = dd.openChannel) && void 0 !== Jd ? Jd : vk.q)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var dd;
        if (null !== this.requested) return this.requested;
        null === (dd = this.channel) || void 0 === dd || dd.close(), this.channel = null;
        const Jd = this.oneShotStored;
        return this.requested = function(dd, Jd, kd) {
          return new Promise((Jd => {
            Jd(dd())
          })).catch((dd => (null !== Jd && (0, vk.j)(Jd), kd(dd), null)))
        }((() => this.host.load(Jd).then((dd => (dd.setGamePackConfirm(this.confirm), this.landed = dd, dd)))), Jd ? this.host.store : null, this.host.TQ), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var dd;
          return null !== (dd = this.requested) && void 0 !== dd ? dd : null
        }))
      }
      setGamePackConfirm(dd) {
        var Jd;
        this.confirm = dd, null === (Jd = this.landed) || void 0 === Jd || Jd.setGamePackConfirm(dd)
      }
    }
    var aN = kd(36453);
    const MN = 216 * aN.f,
      FN = 92 * aN.d,
      YN = 64 * aN.f,
      mN = 16 * aN.f;

    function bN() {
      var dd, Jd;
      return null !== (dd = null === (Jd = performance.memory) || void 0 === Jd ? void 0 : Jd.ZI) && void 0 !== dd ? dd : null
    }
    class SN {
      constructor(dd, Jd) {
        this.budgetBytes = dd, this.reads = Jd, this.estimate = null, this.shedAt = null
      }
      read(dd) {
        var Jd;
        const kd = this.reads.storedChunks(),
          pd = this.reads.gpuBytes(),
          Nd = Math.max(null !== (Jd = this.reads.jsHeapBytes()) && void 0 !== Jd ? Jd : 0, YN),
          Wd = MN + dd + Nd + pd + kd * FN;
        this.estimate = {
          wasmBytes: dd,
          jsHeapBytes: Nd,
          gpuBytes: pd,
          storedChunks: kd,
          totalBytes: Wd
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: dd,
          budgetBytes: Jd,
          shedAt: kd
        } = this;
        return !(null === dd || null === Jd || dd.totalBytes < Jd || null !== kd && dd.totalBytes < kd + mN) && (this.shedAt = dd.totalBytes, !0)
      }
      describe() {
        const {
          estimate: dd,
          budgetBytes: Jd
        } = this;
        return null === dd ? null : `estimate ${(0,aN.l)(dd.totalBytes)} MiB of budget ${null===Jd?"none":(0,aN.l)(Jd)}: wasm ${(0,aN.l)(dd.wasmBytes)} js ${(0,aN.l)(dd.jsHeapBytes)} gpu ${(0,aN.l)(dd.gpuBytes)} chunks ${dd.storedChunks}`
      }
      snapshot() {
        const {
          estimate: dd,
          budgetBytes: Jd
        } = this;
        return {
          ...null === dd ? {} : {
            footprintMiB: Number((0, aN.l)(dd.totalBytes)),
            gpuMiB: Number((0, aN.l)(dd.gpuBytes)),
            storedChunks: dd.storedChunks
          },
          footprintBudgetMiB: null === Jd ? -1 : Number((0, aN.l)(Jd))
        }
      }
    }
    var jN = kd(2704),
      XN = kd(4376),
      fN = kd(39246),
      nN = kd(38138);
    const UN = EJ.ab + 1,
      yN = 4096 * UN;
    class DN {
      constructor(dd, Jd) {
        this.log = dd, this.take = Jd, this.EC = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(dd, Jd) {
        const kd = this.take();
        kd.length >= EJ.Z && kd[0] > 0 && (0, jN.h)("remesh", `${kd[0]} core records lost to a full log`);
        const pd = this.EC;
        for (let Nd = EJ.Z; Nd + EJ.ab <= kd.length; Nd += EJ.ab) {
          for (let dd = Nd; dd < Nd + EJ.ab; dd++) pd.push(kd[dd]);
          pd.push(dd)
        }
        if (Jd || !(pd.length < yN)) {
          for (let Jd = 0; Jd < pd.length; Jd += UN) this.feed(Jd, dd);
          pd.length = 0, Jd && this.log.frame(dd)
        }
      }
      feed(dd, Jd) {
        var kd;
        const pd = this.EC,
          Nd = (0, nN.d)(pd[dd + 1], pd[dd + 2], pd[dd + 3]),
          Wd = pd[dd + 4],
          Pd = pd[dd + EJ.ab];
        switch (pd[dd]) {
          case EJ.zb.Edit:
            this.log.edit(Nd, Pd);
            break;
          case EJ.zb.Sent:
            this.latest.set(Nd, Wd), this.log.sent(Nd, Wd, pd[dd + 5], pd[dd + 6], pd[dd + 7], null !== (kd = this.unshown.get(Nd)) && void 0 !== kd ? kd : nN.b, Pd);
            break;
          case EJ.zb.Done: {
            this.log.received(Wd, pd[dd + 5] / 1e3, Pd);
            const Jd = this.unshown.get(Nd);
            void 0 === Jd ? this.unshown.set(Nd, [Wd]) : Jd.push(Wd);
            break
          }
          case EJ.zb.Failed: {
            const dd = this.latest.get(Nd);
            void 0 !== dd && dd !== Wd ? this.log.reassign(Nd, Wd, dd) : this.log.failed(Wd), this.ended(Nd, Wd);
            break
          }
          case EJ.zb.Shown:
            this.log.applied(Nd, Wd, Jd), this.ended(Nd, Wd);
            break;
          case EJ.zb.Replaced:
            this.log.reassign(Nd, Wd, pd[dd + 5]), this.ended(Nd, Wd);
            break;
          case EJ.zb.Emptied:
            this.log.emptied(Nd, Jd);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${pd[dd]}`)
        }
      }
      ended(dd, Jd) {
        this.latest.get(dd) === Jd && this.latest.delete(dd);
        const kd = this.unshown.get(dd);
        if (void 0 === kd) return;
        const pd = kd.indexOf(Jd);
        pd >= 0 && kd.splice(pd, 1), 0 === kd.length && this.unshown.delete(dd)
      }
    }
    let TN = null;
    var EN = kd(3084);
    const cN = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      hN = new Set(["creativeFlat", "skyGrid"]);
    const rN = new Uint8Array(0);
    class uN {
      constructor(dd) {
        this.options = dd, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.EC = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== dd.module ? dd.write(0, TJ.be.WorldgenStarted, 0, 0, rN) : this.giveUp()
      }
      take(dd, Jd) {
        if (!(this.gone || null === this.worker && null === this.EC))
          if (dd === TJ.de.WorldgenSeed) {
            const dd = 0 === Jd.byteLength ? null : this.options.decodeSettings(Jd);
            null === dd ? this.release() : function(dd, Jd) {
              if ((null === dd || void 0 === dd ? void 0 : dd.byteLength) !== Jd.byteLength) return !1;
              for (let kd = 0; kd < dd.byteLength; kd++)
                if (dd[kd] !== Jd[kd]) return !1;
              return !0
            }(this.seed, Jd) || (this.seed = Jd.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: dd
            }, []), null !== dd ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (dd === TJ.de.Generate) {
          var kd;
          const dd = new DataView(Jd.buffer, Jd.byteOffset, TJ.Wd),
            pd = null !== (kd = this.pool.pop()) && void 0 !== kd ? kd : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: dd.getUint32(0, !0),
            x: dd.getInt32(4, !0),
            y: dd.getInt32(8, !0),
            z: dd.getInt32(12, !0),
            bytes: pd
          }, [pd])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stop() {
        var dd;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (dd = this.worker) || void 0 === dd || dd.terminate(), this.worker = null
      }
      post(dd, Jd) {
        var kd;
        null !== this.EC ? this.EC.push({
          message: dd,
          transfer: Jd
        }) : null === (kd = this.worker) || void 0 === kd || kd.postMessage(dd, Jd)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.EC ??= [])
      }
      endWorker() {
        var dd, Jd, kd;
        this.endWatch(), null === (dd = this.worker) || void 0 === dd || dd.terminate(), this.worker = null, null === (Jd = (kd = this.options).onMemoryGone) || void 0 === Jd || Jd.call(kd)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((dd => {
          this.createWorker = dd, this.wanted && this.start()
        }), (dd => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(dd))
        })))
      }
      start() {
        const {
          module: dd
        } = this.options, Jd = this.createWorker;
        if (this.gone || null === dd || null === Jd) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let kd;
        this.startsWithoutResult++;
        try {
          kd = Jd()
        } catch (Nd) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Nd), this.lastLoss = `it did not start (${String(Nd)})`, void this.start()
        }
        this.worker = kd, kd.onmessage = dd => {
          let {
            data: Jd
          } = dd;
          this.worker === kd && this.onReply(kd, Jd)
        }, kd.onerror = dd => {
          dd.preventDefault(), this.worker === kd && this.lose(dd.message || "its script failed")
        };
        try {
          kd.postMessage({
            type: "start",
            module: dd,
            KL: pd.g.KL
          })
        } catch (Nd) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Nd), this.lastLoss = `it could not be sent the module (${String(Nd)})`, kd.terminate(), this.worker = null, void this.start()
        }
        this.watch = new fp.g(fp.f, (dd => {
          this.lose((0, fp.k)(dd), (() => {
            this.options.onStartTimeout(dd)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(dd, Jd) {
        switch (Jd.type) {
          case "started": {
            this.endWatch();
            const Jd = this.EC;
            if (null === Jd) {
              this.options.write(0, TJ.be.WorldgenStarted, 0, 0, rN);
              break
            }
            this.EC = null;
            for (const {
                message: kd,
                transfer: pd
              }
              of Jd) dd.postMessage(kd, pd);
            break
          }
          case "lost":
            this.lose(Jd.reason);
            break;
          case "memory":
            var kd, pd;
            null === (kd = (pd = this.options).onMemoryStats) || void 0 === kd || kd.call(pd, Jd.stats);
            break;
          case "result":
            Jd.status !== TJ.vb.Trapped && (this.startsWithoutResult = 0), this.options.write(Jd.ticket, TJ.be.WorldgenResult, Jd.status, Jd.workerUs, new Uint8Array(Jd.bytes, 0, Jd.len)), this.recycle(Jd.bytes), Jd.spare && this.recycle(Jd.spare)
        }
      }
      lose(dd, Jd) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${dd}`), this.lastLoss = dd, this.endWorker(), this.gone || (Jd ? Jd() : this.options.onWorkerLost(dd), this.dropHeld(), this.EC = null, this.options.write(0, TJ.be.WorldgenLost, TJ.fe.Lost, 0, rN), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, TJ.be.WorldgenLost, TJ.fe.Gone, 0, rN)
      }
      endWatch() {
        var dd;
        null === (dd = this.watch) || void 0 === dd || dd.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.EC) {
          for (const {
              message: dd
            }
            of this.EC) "generate" === dd.type && this.recycle(dd.bytes);
          this.EC.length = 0
        }
      }
      recycle(dd) {
        this.pool.length < 16 && dd.byteLength > 0 && dd.byteLength <= 16384 && this.pool.push(dd)
      }
    }
    var tN = kd(37938),
      VN = kd(3601),
      zN = kd(40658),
      HN = kd(41051),
      wN = kd(40915);
    const AN = /[(@\s]([^\s(@]+)$/,
      dW = /:\d/;

    function JW(dd, Jd) {
      for (let kd = 0; kd + Jd.length <= dd.length; kd++) {
        let pd = 0;
        for (; pd < Jd.length && dd[kd + pd] === Jd[pd];) pd++;
        if (pd === Jd.length) return kd
      }
      return -1
    }

    function kW(dd) {
      return "(" === dd || ")" === dd || "@" === dd || "," === dd || " " === dd || "\t" === dd
    }

    function pW(dd, Jd) {
      let kd = Jd;
      for (; kd > 0 && !kW(dd[kd - 1]);) kd--;
      let pd = Jd;
      for (; pd < dd.length && !kW(dd[pd]);) pd++;
      let Nd = "";
      for (let Wd = kd; Wd < pd; Wd++) Nd += dd[Wd];
      return Nd
    }

    function NW(dd, Jd) {
      var kd;
      const pd = /[^\n]+/g,
        Nd = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        Wd = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let Pd = null,
        Zd = null,
        gd = (0, ip.q)(ip.$, pd, [dd]);
      for (; null !== gd;) {
        const kd = (0, ip.q)(ip.$, Nd, [gd[0]]),
          Cd = null === Jd ? -1 : JW(gd[0], Jd);
        if (-1 !== Cd) {
          if (null !== kd) return kd[0];
          const dd = pW(gd[0], Cd),
            Jd = (0, ip.q)(ip.$, AN, [gd[0]]),
            pd = null !== (0, ip.q)(ip.$, dW, [dd]) ? dd : null === Jd ? null : Jd[1],
            Nd = null === pd ? null : (0, ip.q)(ip.$, Wd, [pd]);
          if (null !== Nd && "" !== Nd[1]) return Nd[1]
        }
        null !== kd && (null === Pd ? Pd = kd[0] : null === Zd && kd[0] !== Pd && (Zd = kd[0])), gd = (0, ip.q)(ip.$, pd, [dd])
      }
      return null !== (kd = Zd) && void 0 !== kd ? kd : null === Pd ? "none" : "own"
    }
    const WW = (dd, Jd) => dd.includes(Jd),
      PW = dd => {
        try {
          return dd()
        } catch {
          return !1
        }
      },
      ZW = -1,
      gW = dd => {
        try {
          return dd()
        } catch {
          return ZW
        }
      };

    function CW(dd, Jd) {
      return {
        probe: (kd, pd, Nd) => {
          try {
            return ((kd, pd, Nd) => {
              switch (kd) {
                case TJ.pc.StackCheck:
                  return Jd.stackCheck() ? 1 : 0;
                case TJ.pc.ConfirmMesh:
                  return Jd.confirmMesh();
                case TJ.pc.IndexPassReplaced:
                  return Jd.indexPassReplaced() ? 1 : 0;
                case TJ.pc.ProductSubChanged:
                  return Jd.productSubChanged() ? 1 : 0;
                case TJ.pc.RenderStatus:
                  return Jd.bK();
                case TJ.pc.Held:
                  return Jd.EC();
                case TJ.pc.PlayerKilledSubs:
                  return Jd.playerKilledSubs();
                case TJ.gb: {
                  const kd = Jd.getComplete();
                  return null === kd ? 0 : (0, ip.q)(ip.C, ip.lb, [kd, new ip.c((0, ip.L)(dd()), pd, Nd)]).written
                }
                default:
                  return 0
              }
            })(kd, pd, Nd)
          } catch {
            return TJ.gc
          }
        }
      }
    }
    class KW {
      constructor(dd) {
        this.write = dd, this.flagsWritten = 0, this.written = (0, ip.s)(null)
      }
      Do(dd) {
        let {
          flags: Jd,
          values: kd
        } = dd;
        for (let pd = 0; pd < kd.length; pd++) this.value(kd[pd][0], kd[pd][1]);
        this.setFlags(Jd | TJ.c.Ready)
      }
      value(dd, Jd) {
        this.written[dd] !== Jd && this.write(dd, Jd, 0) && (this.written[dd] = Jd)
      }
      setFlags(dd) {
        const Jd = dd & ~this.flagsWritten;
        0 !== Jd && this.write(TJ.g.Flags, Jd, Jd) && (this.flagsWritten |= Jd)
      }
      originStackHit() {
        return this.write(TJ.g.Flags, TJ.c.OriginStackHit, TJ.c.OriginStackHit)
      }
    }
    const oW = {
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
      lW = 1e3;

    function QW(dd, Jd) {
      const kd = new KW(Jd);
      let pd = !1;
      kd.Do(dd.Do());
      const Nd = (0, ip.cb)((() => {
          kd.Do(dd.Do())
        }), lW),
        Wd = () => {
          dd.checks.stackCheck() && (pd = !0)
        };
      (0, HN.e)(Wd);
      const Pd = () => {
        const Jd = dd.checkPadCall();
        0 !== Jd && kd.setFlags(Jd)
      };
      return (0, zN.f)(Pd), {
        onInput: Jd => {
          (function(dd) {
            switch (dd) {
              case TJ.ub.KeyDown:
              case TJ.ub.KeyUp:
              case TJ.ub.MouseDown:
              case TJ.ub.MouseUp:
              case TJ.ub.Wheel:
              case TJ.ub.TouchStart:
              case TJ.ub.TouchEnd:
              case TJ.ub.TouchButton:
              case TJ.ub.PadAction:
                return !0;
              default:
                return !1
            }
          })(Jd) && dd.checks.stackCheck() && (pd = !0)
        },
        onSend: Wd,
        beforeFrame: () => {
          pd && kd.originStackHit() && (pd = !1)
        },
        onEvent: Jd => {
          const pd = dd.checkEvent(Jd);
          kd.value(TJ.g.ProbeUsedProp, dd.usedProp()), 0 !== pd && kd.setFlags(pd)
        },
        stop: () => {
          (0, ip.fb)(Nd), (0, HN.c)(Wd), (0, zN.e)(Pd)
        }
      }
    }
    let LW;
    const OW = ["length", 0, 1, 33554432, 67108864, 2, void 0, null, 3, "v", "c3RhY2", "cw==", 1e5, "b", "d", "e", 242, "stack", "name", 4, "g", 141, 5, 69, "a", "c", 189, !1, 103, 204, !0, 71, 72, 1023, 54, 65536, 19, 10, 55296, 56320, 105, 6, 12, 63, 128, 169, 192, "Invalid byte index", 255, 224, 31, "Invalid continuation byte", 240, 234, 15, 7, 18, 155, "s", 60, "s=", "=", ";", "string", 11, "n", "r", 237, 117, 131, "h", 217, "k", 56319, 64512, 65535, 57343, "Lone s", "urroga", "te U+", 16, 4294967168, 4294965248, 4294901760, 4292870144, 61, 70, 118, 2048, 248, 1114111, "Invalid UTF-8 detected", 68, "3.0.0", "undefi", "ned", "functi", "on", "q", "H", 23, 142, "protot", "ype", "decode", "I=", "eTR5bm", "t", "U", "K", "Id", "chEven", "dispat", "w", "now", "confir", "mMesh", "produc", "j", "player", "Killed", "number", "toString", "get", "f", 77, 133, "z", "None", "En", "tOverw", "ritten", "plete", "p"];

    function eW() {}

    function RW() {
      RW = function() {}
    }
    LW = function(dd) {
      let Jd = arguments[OW[0]] > OW[2] && arguments[OW[2]] !== OW[6] ? arguments[OW[2]] : () => OW[7],
        kd = arguments[OW[0]] > OW[5] && arguments[OW[5]] !== OW[6] ? arguments[OW[5]] : OW[7],
        pd = arguments[OW[0]] > OW[8] && arguments[OW[8]] !== OW[6] ? arguments[OW[8]] : "";
      const Nd = window,
        Wd = (0, ip[OW[9]])("RXJyb3" + OW[105]),
        Pd = (0, ip[OW[9]])(OW[10] + OW[60]),
        Zd = (0, ip[OW[9]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        Cd = (0, ip[OW[9]])(OW[10] + "tUcmFjZUxpbWl0"),
        Kd = (0, ip[OW[9]])("bmF0aXZl"),
        od = [(0, ip[OW[9]])("bWFpbi5qcw=="), (0, ip[OW[9]])("aW5kZXguanM="), (0, ip[OW[9]])("dXNlcnNjcmlwdA=="), (0, ip[OW[9]])("Y29udGVudC5q" + OW[11]), (0, ip[OW[9]])("b3B0aW9ucy5q" + OW[11]), (0, ip[OW[9]])("cG9wdXAuanM="), (0, ip[OW[9]])("LnVzZXIuanM="), (0, ip[OW[9]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        ld = (...dd) => {
          dd[OW[0]] = OW[2];
          const Jd = Nd[Wd],
            kd = Jd;
          kd[Cd] < OW[12] && (kd[Cd] = OW[12]);
          const pd = "string" === typeof(ld = (new Jd)[Pd]) ? ld : `${ld}`,
            gd = {},
            Kd = kd[Zd];
          var ld;
          typeof Kd === OW[96] + OW[97] && (0, ip[OW[98]])(Kd, Jd, [gd]);
          const Qd = gd[Pd],
            Ld = dd[OW[1]] ? od[OW[0]] : od[OW[0]] - OW[2];
          for (let Od = OW[1]; Od < Ld; Od++) {
            function ed() {
              console.log((function(dd) {
                var Jd, kd, pd, Nd, Wd = dd.length;
                for (RW(Jd = [], kd = OW[1]), pd = OW[1]; pd < Wd; pd++) Jd.push(pd !== OW[1] && dd[pd] > dd[pd - OW[2]] ? Jd[pd - OW[2]] + OW[2] : OW[2]);
                for (Nd = Wd - OW[2]; Nd >= OW[1]; Nd--) Nd !== Wd - OW[2] && dd[Nd] > dd[Nd + OW[2]] && (Jd[Nd] = Math.max(Jd[Nd], Jd[Nd + OW[2]] + OW[2])), kd += Jd[Nd];
                return kd
              }))
            }
            if ("DwApav" + OW[108] in eW && ed(), WW(pd, od[Od])) {
              function Rd(...dd) {
                dd[OW[0]] = OW[1]
              }
              return "eiqmTP" + OW[72] in eW && Rd(), {
                [OW[17]]: pd,
                [OW[18]]: od[Od]
              }
            }
            if (typeof Qd === OW[63] && WW(Qd, od[Od])) {
              function Id(...dd) {
                RW(dd[OW[0]] = OW[1], dd[-OW[16]] = function(...dd) {
                  for (RW(dd[OW[0]] = OW[2], dd[OW[2]] = dd[OW[1]].length, dd[OW[13]] = [], dd[OW[8]] = OW[1]), dd[OW[14]] = OW[1]; dd[OW[14]] < dd[OW[2]]; dd[OW[14]]++) dd[OW[13]].push(dd[OW[14]] !== OW[1] && dd[OW[1]][dd[OW[14]]] > dd[OW[1]][dd[OW[14]] - OW[2]] ? dd[OW[13]][dd[OW[14]] - OW[2]] + OW[2] : OW[2]);
                  for (dd[OW[15]] = dd[OW[2]] - OW[2]; dd[OW[15]] >= OW[1]; dd[OW[15]]--) dd[OW[15]] !== dd[OW[2]] - OW[2] && dd[OW[1]][dd[OW[15]]] > dd[OW[1]][dd[OW[15]] + OW[2]] && (dd[OW[13]][dd[OW[15]]] = Math.max(dd[OW[13]][dd[OW[15]]], dd[OW[13]][dd[OW[15]] + OW[2]] + OW[2])), dd[OW[8]] += dd[OW[13]][dd[OW[15]]];
                  return dd[OW[8]]
                }, console.log(dd[-OW[16]]))
              }
              return "kk4SsN" in eW && Id(), {
                [OW[17]]: Qd,
                [OW[18]]: od[Od]
              }
            }
          }
          return OW[7]
        },
        Qd = dd => ("hL9bca" + OW[25] in eW && function(...dd) {
          RW(dd[OW[0]] = OW[1], dd[OW[13]] = function(...dd) {
            for (RW(dd[OW[0]] = OW[2], dd[-OW[23]] = OW[1], dd[OW[5]] = {}, dd[OW[8]] = OW[1], dd[OW[19]] = OW[1], dd[OW[15]] = OW[1], dd[-OW[21]] = dd[OW[1]].length), dd[OW[20]] = OW[1]; dd[OW[20]] < dd[-OW[21]]; dd[OW[20]]++) {
              for (RW(dd[OW[5]] = {}, dd[OW[8]] = OW[1], dd[OW[19]] = OW[2]), dd[OW[22]] = dd[OW[20]] + OW[2]; dd[OW[22]] < dd[-OW[21]]; dd[OW[22]]++) dd[OW[1]][dd[OW[20]]].x !== dd[OW[1]][dd[OW[22]]].x || dd[OW[1]][dd[OW[20]]].y !== dd[OW[1]][dd[OW[22]]].y ? (dd[OW[1]][dd[OW[20]]].y === dd[OW[1]][dd[OW[22]]].y ? dd[OW[15]] = Number.MAX_SAFE_INTEGER : dd[OW[15]] = (dd[OW[1]][dd[OW[20]]].x - dd[OW[1]][dd[OW[22]]].x) / (dd[OW[1]][dd[OW[20]]].y - dd[OW[1]][dd[OW[22]]].y), dd[OW[5]][dd[OW[15]]] || (dd[OW[5]][dd[OW[15]]] = OW[1]), RW(dd[OW[5]][dd[OW[15]]]++, dd[OW[8]] = Math.max(dd[OW[8]], dd[OW[5]][dd[OW[15]]]))) : dd[OW[19]]++;
              RW(dd[OW[8]] += dd[OW[19]], dd[-OW[23]] = Math.max(dd[-OW[23]], dd[OW[8]]))
            }
            return dd[-OW[23]]
          }, console.log(dd[OW[13]]))
        }(), ld(dd) !== OW[7]);
      let Ld = OW[7],
        Od = OW[7],
        ed = OW[7];
      const Rd = (...dd) => {
        dd[OW[0]] = OW[2], "C_IziNX" in eW && function(...dd) {
          RW(dd[OW[0]] = OW[1], dd[-OW[28]] = function(...Jd) {
            return RW(Jd[OW[0]] = OW[2], Jd[OW[24]] = []), (Jd[OW[1]] === OW[2] || Jd[OW[1]] >= OW[19]) && dd[OW[2]](Jd[OW[24]], [], Jd[OW[1]], OW[1]), Jd[OW[24]]
          }, dd[OW[2]] = function(...Jd) {
            for (Jd[OW[0]] = OW[19], Jd[OW[19]] = Jd[OW[8]]; Jd[OW[19]] < Jd[OW[5]]; Jd[OW[19]]++) {
              if (Jd[OW[2]].length !== Jd[OW[19]]) return;
              for (Jd[OW[13]] = OW[1]; Jd[OW[13]] < Jd[OW[5]]; Jd[OW[13]]++) dd[OW[25]](Jd[OW[2]], [Jd[OW[19]], Jd[OW[13]]]) && (RW(Jd[OW[2]].push([Jd[OW[19]], Jd[OW[13]]]), dd[OW[2]](Jd[OW[1]], Jd[OW[2]], Jd[OW[5]], Jd[OW[19]] + OW[2])), Jd[OW[2]].length === Jd[OW[5]] && Jd[OW[1]].push(dd[OW[14]](Jd[OW[2]])), Jd[OW[2]].pop())
            }
          }, dd[OW[14]] = function(...dd) {
            for (RW(dd[OW[0]] = OW[2], dd[OW[2]] = [], dd[OW[13]] = dd[OW[1]].length), dd[OW[25]] = OW[1]; dd[OW[25]] < dd[OW[13]]; dd[OW[25]]++)
              for (dd[OW[2]][dd[OW[25]]] = "", dd[OW[14]] = OW[1]; dd[OW[14]] < dd[OW[13]]; dd[OW[14]]++) dd[OW[2]][dd[OW[25]]] += dd[OW[1]][dd[OW[25]]][OW[2]] === dd[OW[14]] ? "Q" : ".";
            return dd[OW[2]]
          }, dd[OW[25]] = function(...dd) {
            for (RW(dd[OW[0]] = OW[5], dd[-OW[26]] = dd[OW[1]].length), dd[OW[13]] = OW[1]; dd[OW[13]] < dd[-OW[26]]; dd[OW[13]]++) {
              if (dd[OW[1]][dd[OW[13]]][OW[1]] === dd[OW[2]][OW[1]] || dd[OW[1]][dd[OW[13]]][OW[2]] === dd[OW[2]][OW[2]]) return OW[27];
              if (Math.abs((dd[OW[1]][dd[OW[13]]][OW[1]] - dd[OW[2]][OW[1]]) / (dd[OW[1]][dd[OW[13]]][OW[2]] - dd[OW[2]][OW[2]])) === OW[2]) return OW[27]
            }
            return OW[30]
          }, console.log(dd[-OW[28]]))
        }();
        try {
          function Jd(...dd) {
            RW(dd[OW[0]] = OW[1], dd[OW[29]] = function(dd) {
              var Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od = dd.length;
              if (od < OW[5]) return OW[1];
              if (RW(Jd = Math.max(...dd), kd = Math.min(...dd)), Jd === kd) return OW[1];
              for (RW(pd = Array(od - OW[2]).fill(Number.MAX_SAFE_INTEGER), Nd = Array(od - OW[2]).fill(Number.MIN_SAFE_INTEGER), Wd = Math.ceil((Jd - kd) / (od - OW[2])), Pd = OW[1]), Zd = OW[1]; Zd < od; Zd++) dd[Zd] !== kd && dd[Zd] !== Jd && RW(Pd = Math.floor((dd[Zd] - kd) / Wd), pd[Pd] = Math.min(pd[Pd], dd[Zd]), Nd[Pd] = Math.max(Nd[Pd], dd[Zd]));
              for (RW(gd = Number.MIN_SAFE_INTEGER, Cd = kd), Kd = OW[1]; Kd < od - OW[2]; Kd++) pd[Kd] === Number.MAX_SAFE_INTEGER && Nd[Kd] === Number.MIN_SAFE_INTEGER || RW(gd = Math.max(gd, pd[Kd] - Cd), Cd = Nd[Kd]);
              return gd = Math.max(gd, Jd - Cd)
            }, console.log(dd[OW[29]]))
          }
          return "yQ3MXv" in eW && Jd(), dd[OW[1]]()
        } catch {
          function kd(...dd) {
            RW(dd[OW[0]] = OW[1], dd[OW[14]] = function(dd) {
              var Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od = dd.length;
              if (od < OW[5]) return OW[1];
              if (RW(Jd = Math.max(...dd), kd = Math.min(...dd)), Jd === kd) return OW[1];
              for (RW(pd = Array(od - OW[2]).fill(Number.MAX_SAFE_INTEGER), Nd = Array(od - OW[2]).fill(Number.MIN_SAFE_INTEGER), Wd = Math.ceil((Jd - kd) / (od - OW[2])), Pd = OW[1]), Zd = OW[1]; Zd < od; Zd++) dd[Zd] !== kd && dd[Zd] !== Jd && RW(Pd = Math.floor((dd[Zd] - kd) / Wd), pd[Pd] = Math.min(pd[Pd], dd[Zd]), Nd[Pd] = Math.max(Nd[Pd], dd[Zd]));
              for (RW(gd = Number.MIN_SAFE_INTEGER, Cd = kd), Kd = OW[1]; Kd < od - OW[2]; Kd++) pd[Kd] === Number.MAX_SAFE_INTEGER && Nd[Kd] === Number.MIN_SAFE_INTEGER || RW(gd = Math.max(gd, pd[Kd] - Cd), Cd = Nd[Kd]);
              return gd = Math.max(gd, Jd - Cd)
            }, console.log(dd[OW[14]]))
          }
          return "hrfPhSi" in eW && kd(), OW[30]
        }
      };
      let Id = OW[27];
      const Gd = () => {
          if (!Id && (0, ip[OW[127]])()) {
            function dd(...dd) {
              dd[OW[0]] = OW[1]
            }
            "QJOFQh" + OW[66] in eW && dd(), Id = OW[30]
          }
        },
        vd = (...dd) => {
          dd[OW[0]] = OW[2], "pnI7NNx" in eW && function(...dd) {
            dd[OW[0]] = OW[1]
          }();
          try {
            return dd[OW[1]]()
          } catch {
            return OW[6]
          }
        },
        xd = (...dd) => {
          dd[OW[0]] = OW[2];
          try {
            function Jd(...dd) {
              dd[OW[0]] = OW[1];
              const Jd = require("path"),
                {
                  version: kd
                } = require("../../package"),
                {
                  version: pd
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: Nd
                } = require("@redacted/components/package"),
                {
                  sdkVersion: Wd
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Jd.resolve(__dirname, "../redacted.js")
            }
            return "kctS1V" + OW[65] in eW && Jd(), dd[OW[1]](), OW[30]
          } catch {
            function kd() {
              ! function(...dd) {
                function Jd(...dd) {
                  for (RW(dd[OW[0]] = OW[2], dd[OW[24]] = [], dd[OW[13]] = OW[1], dd[OW[8]] = dd[OW[1]].length, dd[OW[14]] = OW[6], dd[-OW[32]] = OW[6]); dd[OW[13]] < dd[OW[8]];) RW(dd[OW[14]] = dd[OW[1]].charCodeAt(dd[OW[13]]++), dd[OW[14]] >= OW[38] && dd[OW[14]] <= OW[73] && dd[OW[13]] < dd[OW[8]] ? (dd[-OW[32]] = dd[OW[1]].charCodeAt(dd[OW[13]]++), (dd[-OW[32]] & OW[74]) == OW[39] ? dd[OW[24]].push(((dd[OW[14]] & OW[33]) << OW[37]) + (dd[-OW[32]] & OW[33]) + OW[35]) : (dd[OW[24]].push(dd[OW[14]]), dd[OW[13]]--)) : dd[OW[24]].push(dd[OW[14]]));
                  return dd[OW[24]]
                }

                function kd(dd) {
                  if (dd >= OW[38] && dd <= OW[76]) throw Error(OW[77] + OW[78] + OW[79] + dd.toString(OW[80]).toUpperCase() + " is not a scalar value")
                }

                function pd(...Jd) {
                  return Jd[OW[0]] = OW[5], dd[-OW[36]](Jd[OW[1]] >> Jd[OW[2]] & OW[43] | OW[44])
                }

                function Nd(...Jd) {
                  return Jd[OW[0]] = OW[2], (Jd[OW[1]] & OW[81]) == OW[1] ? dd[-OW[36]](Jd[OW[1]]) : (Jd[OW[40]] = "", (Jd[OW[1]] & OW[82]) == OW[1] ? Jd[OW[40]] = dd[-OW[36]](Jd[OW[1]] >> OW[41] & OW[50] | OW[46]) : (Jd[OW[1]] & OW[83]) == OW[1] ? RW(kd(Jd[OW[1]]), Jd[OW[40]] = dd[-OW[36]](Jd[OW[1]] >> OW[42] & OW[54] | OW[49]), Jd[OW[40]] += pd(Jd[OW[1]], OW[41])) : (Jd[OW[1]] & OW[84]) == OW[1] && RW(Jd[OW[40]] = dd[-OW[36]](Jd[OW[1]] >> OW[56] & OW[55] | OW[52]), Jd[OW[40]] += pd(Jd[OW[1]], OW[42]), Jd[OW[40]] += pd(Jd[OW[1]], OW[41])), Jd[OW[40]] += dd[-OW[36]](Jd[OW[1]] & OW[43] | OW[44]), Jd[OW[40]])
                }

                function Wd(...Jd) {
                  if (Jd[OW[0]] = OW[1], dd[OW[13]] >= dd[OW[25]]) throw Error(OW[47]);
                  if (RW(Jd[OW[14]] = dd[OW[19]][dd[OW[13]]] & OW[48], dd[OW[13]]++), (Jd[OW[14]] & OW[46]) == OW[44]) return Jd[OW[14]] & OW[43];
                  throw Error(OW[51])
                }

                function Pd(...Jd) {
                  if (RW(Jd[OW[0]] = OW[1], Jd[OW[24]] = OW[6], Jd[OW[2]] = OW[6], Jd[OW[53]] = OW[6], Jd[OW[14]] = OW[6], Jd[OW[15]] = OW[6]), dd[OW[13]] > dd[OW[25]]) throw Error(OW[47]);
                  if (dd[OW[13]] == dd[OW[25]]) return OW[27];
                  if (RW(Jd[OW[24]] = dd[OW[19]][dd[OW[13]]] & OW[48], dd[OW[13]]++), (Jd[OW[24]] & OW[44]) == OW[1]) return Jd[OW[24]];
                  if ((Jd[OW[24]] & OW[49]) == OW[46]) {
                    if (RW(Jd[OW[2]] = Wd(), Jd[OW[15]] = (Jd[OW[24]] & OW[50]) << OW[41] | Jd[OW[2]]), Jd[OW[15]] >= OW[44]) return Jd[OW[15]];
                    throw Error(OW[51])
                  }
                  if ((Jd[OW[24]] & OW[52]) == OW[49]) {
                    if (RW(Jd[OW[2]] = Wd(), Jd[OW[53]] = Wd(), Jd[OW[15]] = (Jd[OW[24]] & OW[54]) << OW[42] | Jd[OW[2]] << OW[41] | Jd[OW[53]]), Jd[OW[15]] >= OW[88]) return kd(Jd[OW[15]]), Jd[OW[15]];
                    throw Error(OW[51])
                  }
                  if ((Jd[OW[24]] & OW[89]) == OW[52] && (RW(Jd[OW[2]] = Wd(), Jd[OW[53]] = Wd(), Jd[OW[14]] = Wd(), Jd[OW[15]] = (Jd[OW[24]] & OW[55]) << OW[56] | Jd[OW[2]] << OW[42] | Jd[OW[53]] << OW[41] | Jd[OW[14]]), Jd[OW[15]] >= OW[35] && Jd[OW[15]] <= OW[90])) return Jd[OW[15]];
                  throw Error(OW[91])
                }
                RW(dd[OW[0]] = OW[2], dd[-OW[36]] = String.fromCharCode), RW(dd[OW[19]] = OW[6], dd[OW[25]] = OW[6], dd[OW[13]] = OW[6]), RW(dd[OW[1]].version = OW[93], dd[OW[1]].encode = function(...dd) {
                  for (RW(dd[OW[0]] = OW[2], dd[-OW[45]] = Jd(dd[OW[1]]), dd[OW[5]] = dd[-OW[45]].length, dd[OW[8]] = -OW[2], dd[OW[19]] = OW[6], dd[OW[22]] = ""); ++dd[OW[8]] < dd[OW[5]];) RW(dd[OW[19]] = dd[-OW[45]][dd[OW[8]]], dd[OW[22]] += Nd(dd[OW[19]]));
                  return dd[OW[22]]
                }, dd[OW[1]].decode = function(...kd) {
                  for (RW(kd[OW[0]] = OW[2], dd[OW[19]] = Jd(kd[OW[1]]), dd[OW[25]] = dd[OW[19]].length, dd[OW[13]] = OW[1], kd[OW[24]] = [], kd[OW[57]] = OW[6]);
                    (kd[OW[57]] = Pd()) !== OW[27];) kd[OW[24]].push(kd[OW[57]]);
                  return function(...Jd) {
                    for (RW(Jd[OW[0]] = OW[2], Jd[OW[2]] = Jd[OW[1]].length, Jd[OW[5]] = -OW[2], Jd[OW[34]] = OW[6], Jd[OW[14]] = ""); ++Jd[OW[5]] < Jd[OW[2]];) Jd[OW[34]] = Jd[OW[1]][Jd[OW[5]]], Jd[OW[34]] > OW[75] && RW(Jd[OW[34]] -= OW[35], Jd[OW[14]] += dd[-OW[36]](Jd[OW[34]] >>> OW[37] & OW[33] | OW[38]), Jd[OW[34]] = OW[39] | Jd[OW[34]] & OW[33]), Jd[OW[14]] += dd[-OW[36]](Jd[OW[34]]);
                    return Jd[OW[14]]
                  }(kd[OW[24]])
                })
              }(typeof exports === OW[94] + OW[95] ? this.utf8 = {} : exports)
            }
            return "z76ljK1" in eW && kd(), OW[27]
          }
        },
        qd = (0, ip[OW[9]])("a29qbzYzb25i"),
        Bd = (0, ip[OW[58]])(OW[7]);
      let sd = OW[7],
        ad = OW[27],
        Md = OW[27];
      const Fd = (0, ip[OW[58]])(OW[7]);
      let Yd = OW[1];
      const md = (0, ip[OW[58]])(OW[7]);
      let bd = OW[1];
      const Sd = (0, ip[OW[58]])(OW[7]);
      let jd = OW[27],
        Xd = OW[27];
      const fd = (...Jd) => {
          if (Jd[OW[0]] = OW[5], "hq922D" + OW[99] in eW && function(...dd) {
              dd[OW[0]] = OW[1]
            }(), Jd[OW[1]] === dd) {
            if (sd === OW[7]) {
              function Nd(...dd) {
                dd[OW[0]] = OW[1]
              }
              "lWQXEJ" in eW && Nd(), sd = typeof Jd[OW[2]] === OW[121] ? Jd[OW[2]] : -OW[2]
            } else ad = OW[30];
            return
          }
          const kd = Bd[Jd[OW[1]]];
          if (!Jd[OW[2]]) return void(kd && (Md = OW[30]));
          if (Jd[OW[1]] !== qd) {
            return void(Bd[Jd[OW[1]]] = Jd[OW[2]])
          }
          Bd[Jd[OW[1]]] = OW[30];
          const pd = typeof Jd[OW[2]] === OW[63] ? Jd[OW[2]] : "" + Jd[OW[2]];
          if (!Sd[pd]) {
            if ((0, tN[OW[65]])(pd)) {
              return "UkHVTf" in eW && (module.exports = async (dd = () => {
                throw new Error("No redacted path provided")
              }) => {
                const Jd = new Set(process.argv.slice(OW[5]));
                if (!Jd.has("--version")) {
                  if (Jd.size !== OW[2]) return OW[27];
                  if (!Jd.has("-v")) return OW[27]
                }
                return await (async () => void 0 === await dd() ? " (local)" : "")(), OW[30]
              }), void(Xd = OW[30])
            }
            if ((0, tN[OW[66]])(pd)) {
              function Wd(...dd) {
                function Jd(dd) {
                  return dd[OW[2]] * OW[4] + (dd[OW[1]] < OW[1] ? OW[3] | dd[OW[1]] : dd[OW[1]])
                }

                function kd(...dd) {
                  switch (dd[OW[0]] = OW[2], ((dd[OW[1]] & OW[3]) !== OW[1]) * OW[2] + (dd[OW[1]] < OW[1]) * OW[5]) {
                    case OW[1]:
                      return [dd[OW[1]] % OW[3], Math.trunc(dd[OW[1]] / OW[4])];
                    case OW[2]:
                      return [dd[OW[1]] % OW[3] - OW[3], Math.trunc(dd[OW[1]] / OW[4]) + OW[2]];
                    case OW[5]:
                      return [((dd[OW[1]] + OW[3]) % OW[3] + OW[3]) % OW[3], Math.round(dd[OW[1]] / OW[4])];
                    case OW[8]:
                      return [dd[OW[1]] % OW[3], Math.trunc(dd[OW[1]] / OW[4])]
                  }
                }
                dd[OW[0]] = OW[1], RW(dd[OW[24]] = Jd([OW[5], OW[19]]), dd[OW[2]] = Jd([OW[2], OW[5]]), dd[OW[5]] = dd[OW[24]] + dd[OW[2]], dd[OW[8]] = dd[OW[5]] - dd[OW[2]], dd[OW[15]] = dd[OW[8]] * OW[5], dd[OW[67]] = dd[OW[15]] / OW[5], console.log(kd(dd[OW[5]])), console.log(kd(dd[OW[8]])), console.log(kd(dd[OW[15]])), console.log(kd(dd[OW[67]])))
              }
              if ("wvR5KO" in eW && Wd(), Yd < 8) {
                function Pd(...dd) {
                  RW(dd[OW[0]] = OW[1], dd[-OW[71]] = function(...dd) {
                    for (RW(dd[OW[0]] = OW[2], dd[OW[2]] = OW[1], dd[OW[13]] = {}, dd[OW[8]] = OW[1], dd[OW[69]] = OW[1], dd[OW[15]] = OW[1], dd[OW[68]] = dd[OW[1]].length), dd[OW[59]] = OW[1]; dd[OW[59]] < dd[OW[68]]; dd[OW[59]]++) {
                      for (RW(dd[OW[13]] = {}, dd[OW[8]] = OW[1], dd[OW[69]] = OW[2]), dd[OW[70]] = dd[OW[59]] + OW[2]; dd[OW[70]] < dd[OW[68]]; dd[OW[70]]++) dd[OW[1]][dd[OW[59]]].x !== dd[OW[1]][dd[OW[70]]].x || dd[OW[1]][dd[OW[59]]].y !== dd[OW[1]][dd[OW[70]]].y ? (dd[OW[1]][dd[OW[59]]].y === dd[OW[1]][dd[OW[70]]].y ? dd[OW[15]] = Number.MAX_SAFE_INTEGER : dd[OW[15]] = (dd[OW[1]][dd[OW[59]]].x - dd[OW[1]][dd[OW[70]]].x) / (dd[OW[1]][dd[OW[59]]].y - dd[OW[1]][dd[OW[70]]].y), dd[OW[13]][dd[OW[15]]] || (dd[OW[13]][dd[OW[15]]] = OW[1]), RW(dd[OW[13]][dd[OW[15]]]++, dd[OW[8]] = Math.max(dd[OW[8]], dd[OW[13]][dd[OW[15]]]))) : dd[OW[69]]++;
                      RW(dd[OW[8]] += dd[OW[69]], dd[OW[2]] = Math.max(dd[OW[2]], dd[OW[8]]))
                    }
                    return dd[OW[2]]
                  }, console.log(dd[-OW[71]]))
                }
                "fd91hL" + OW[113] in eW && Pd(), RW(Sd[pd] = OW[30], Fd[Yd++] = pd, jd ||= (0, tN[OW[72]])(pd))
              } else !jd && (0, tN[OW[72]])(pd) && RW(Sd[pd] = OW[30], Fd[8 - OW[2]] = pd, jd = OW[30])
            } else {
              function Zd() {
                const dd = require("big-integer");
                module.exports = class {
                  static randomPrime(...Jd) {
                    Jd[OW[0]] = OW[2];
                    const kd = dd.one.shiftLeft(Jd[OW[1]] - OW[2]),
                      pd = dd.one.shiftLeft(Jd[OW[1]]).prev();
                    for (; OW[30];) {
                      let Jd = dd.randBetween(kd, pd);
                      if (Jd.isProbablePrime(256)) return Jd
                    }
                  }
                  static generate(...Jd) {
                    Jd[OW[0]] = OW[2];
                    const kd = dd(65537);
                    let pd, Nd;
                    Jd[OW[24]] = OW[6];
                    do {
                      RW(pd = this.randomPrime(Jd[OW[1]] / OW[5]), Nd = this.randomPrime(Jd[OW[1]] / OW[5]), Jd[OW[24]] = dd.lcm(pd.prev(), Nd.prev()))
                    } while (dd.gcd(kd, Jd[OW[24]]).notEquals(OW[2]) || pd.minus(Nd).abs().shiftRight(Jd[OW[1]] / OW[5] - 100).isZero());
                    return {
                      e: kd,
                      n: pd.multiply(Nd),
                      d: kd.modInv(Jd[OW[24]])
                    }
                  }
                  static encrypt(Jd, kd, pd) {
                    return dd(Jd).modPow(pd, kd)
                  }
                  static decrypt(...Jd) {
                    return Jd[OW[0]] = OW[8], dd(Jd[OW[1]]).modPow(Jd[OW[2]], Jd[OW[5]])
                  }
                  static encode(...Jd) {
                    Jd[OW[0]] = OW[2];
                    const kd = Jd[OW[1]].split("").map((dd => dd.charCodeAt())).join("");
                    return dd(kd)
                  }
                  static decode(...dd) {
                    dd[OW[0]] = OW[2];
                    const Jd = dd[OW[1]].toString();
                    dd[OW[2]] = "";
                    for (let kd = OW[1]; kd < Jd.length; kd += OW[5]) {
                      let pd = Number(Jd.substr(kd, OW[5]));
                      pd <= 30 ? (dd[OW[2]] += String.fromCharCode(Number(Jd.substr(kd, OW[8]))), kd++) : dd[OW[2]] += String.fromCharCode(pd)
                    }
                    return dd[OW[2]]
                  }
                }
              }
              "RcSX_B" + OW[109] in eW && Zd(), bd < 4 && RW(Sd[pd] = OW[30], md[bd++] = pd)
            }
          }
        },
        nd = (0, VN[OW[15]])(dd),
        Ud = nd ? nd.replaced : (() => {
          try {
            function Jd() {
              ! function(...dd) {
                function Jd(dd) {
                  var Jd, kd, pd, Nd, Wd = [];
                  for (RW(Jd = OW[1], kd = dd.length, pd = void 0, Nd = void 0); Jd < kd;) RW(pd = dd.charCodeAt(Jd++), pd >= OW[38] && pd <= OW[73] && Jd < kd ? ((Nd = dd.charCodeAt(Jd++)) & OW[74]) == OW[39] ? Wd.push(((pd & OW[33]) << OW[37]) + (Nd & OW[33]) + OW[35]) : (Wd.push(pd), Jd--) : Wd.push(pd));
                  return Wd
                }

                function kd(...dd) {
                  if (dd[OW[0]] = OW[2], dd[OW[1]] >= OW[38] && dd[OW[1]] <= OW[76]) throw Error(OW[77] + OW[78] + OW[79] + dd[OW[1]].toString(OW[80]).toUpperCase() + " is not a scalar valu" + OW[15])
                }

                function pd(...Jd) {
                  return Jd[OW[0]] = OW[5], dd[OW[2]](Jd[OW[1]] >> Jd[OW[2]] & OW[43] | OW[44])
                }

                function Nd(Jd) {
                  var Nd;
                  return (Jd & OW[81]) == OW[1] ? dd[OW[2]](Jd) : (Nd = "", (Jd & OW[82]) == OW[1] ? Nd = dd[OW[2]](Jd >> OW[41] & OW[50] | OW[46]) : (Jd & OW[83]) == OW[1] ? RW(kd(Jd), Nd = dd[OW[2]](Jd >> OW[42] & OW[54] | OW[49]), Nd += pd(Jd, OW[41])) : (Jd & OW[84]) == OW[1] && RW(Nd = dd[OW[2]](Jd >> OW[56] & OW[55] | OW[52]), Nd += pd(Jd, OW[42]), Nd += pd(Jd, OW[41])), Nd += dd[OW[2]](Jd & OW[43] | OW[44]))
                }

                function Wd(...Jd) {
                  if (Jd[OW[0]] = OW[1], dd[OW[5]] >= dd[OW[25]]) throw Error(OW[47]);
                  if (RW(Jd[-OW[86]] = dd[OW[87]][dd[OW[5]]] & OW[48], dd[OW[5]]++), (Jd[-OW[86]] & OW[46]) == OW[44]) return Jd[-OW[86]] & OW[43];
                  throw Error(OW[51])
                }

                function Pd() {
                  var Jd, pd, Nd, Pd, Zd;
                  if (RW(pd = void 0, Nd = void 0, Pd = void 0, Zd = void 0), dd[OW[5]] > dd[OW[25]]) throw Error(OW[47]);
                  if (dd[OW[5]] == dd[OW[25]]) return OW[27];
                  if (RW(Jd = dd[OW[87]][dd[OW[5]]] & OW[48], dd[OW[5]]++), (Jd & OW[44]) == OW[1]) return Jd;
                  if ((Jd & OW[49]) == OW[46]) {
                    if (RW(pd = Wd(), Zd = (Jd & OW[50]) << OW[41] | pd), Zd >= OW[44]) return Zd;
                    throw Error(OW[51])
                  }
                  if ((Jd & OW[52]) == OW[49]) {
                    if (RW(pd = Wd(), Nd = Wd(), Zd = (Jd & OW[54]) << OW[42] | pd << OW[41] | Nd), Zd >= OW[88]) return kd(Zd), Zd;
                    throw Error(OW[51])
                  }
                  if ((Jd & OW[89]) == OW[52] && (RW(pd = Wd(), Nd = Wd(), Pd = Wd(), Zd = (Jd & OW[55]) << OW[56] | pd << OW[42] | Nd << OW[41] | Pd), Zd >= OW[35] && Zd <= OW[90])) return Zd;
                  throw Error(OW[91])
                }
                RW(dd[OW[0]] = OW[2], dd[OW[2]] = String.fromCharCode), RW(dd[OW[87]] = OW[6], dd[OW[25]] = OW[6], dd[OW[5]] = OW[6]), RW(dd[OW[1]].version = OW[93], dd[OW[1]].encode = function(...dd) {
                  for (RW(dd[OW[0]] = OW[2], dd[OW[24]] = Jd(dd[OW[1]]), dd[-OW[52]] = dd[OW[24]].length, dd[OW[67]] = -OW[2], dd[OW[14]] = OW[6], dd[OW[85]] = ""); ++dd[OW[67]] < dd[-OW[52]];) RW(dd[OW[14]] = dd[OW[24]][dd[OW[67]]], dd[OW[85]] += Nd(dd[OW[14]]));
                  return dd[OW[85]]
                }, dd[OW[1]].decode = function(...kd) {
                  for (RW(kd[OW[0]] = OW[2], dd[OW[87]] = Jd(kd[OW[1]]), dd[OW[25]] = dd[OW[87]].length, dd[OW[5]] = OW[1], kd[OW[24]] = [], kd[-OW[92]] = OW[6]);
                    (kd[-OW[92]] = Pd()) !== OW[27];) kd[OW[24]].push(kd[-OW[92]]);
                  return function(Jd) {
                    var kd, pd, Nd, Wd = Jd.length;
                    for (RW(kd = -OW[2], pd = void 0, Nd = ""); ++kd < Wd;)(pd = Jd[kd]) > OW[75] && RW(pd -= OW[35], Nd += dd[OW[2]](pd >>> OW[37] & OW[33] | OW[38]), pd = OW[39] | pd & OW[33]), Nd += dd[OW[2]](pd);
                    return Nd
                  }(kd[OW[24]])
                })
              }(typeof exports === OW[94] + OW[95] ? this.utf8 = {} : exports)
            }
            return "woMBsW" in eW && Jd(), Nd[dd]
          } catch {
            return OW[6]
          }
        })();
      if (xd((() => {
          Nd[dd] = fd
        })), typeof Ud === OW[96] + OW[97]) {
        const dd = Ud;
        xd((() => {
          dd(fd)
        }))
      }
      if (nd) {
        const Jd = nd.reports;
        xd((() => {
          for (const kd in Jd)(0, ip[OW[98]])(ip[OW[99]], Jd, [kd]) && kd !== dd && fd(kd, Jd[kd])
        }))
      }
      const yd = nd ? OW[5] : OW[2];
      let Dd = OW[27];
      const Td = (...Jd) => (Jd[OW[0]] = OW[1], ad ? OW[30] : (RW(Jd[-OW[37]] = OW[27], Dd = !xd((() => {
          Jd[-OW[37]] = Nd[dd] !== fd
        }))), Jd[-OW[37]])),
        Ed = Rd(((...Jd) => {
          Jd[OW[0]] = OW[1];
          const kd = (0, ip.R)(Nd, dd);
          return (kd === OW[7] || void 0 === kd ? void 0 : kd.configurable) !== OW[27] || typeof kd[OW[123]] !== OW[96] + OW[97] || sd !== yd
        })),
        cd = {},
        hd = () => {
          try {
            return navigator[OW[117] + "tSub"]
          } catch {
            return cd
          }
        },
        rd = hd(),
        ud = kd,
        td = ud === OW[7] ? ((...dd) => {
          dd[OW[0]] = OW[1];
          const Jd = OW[59];
          RW(dd[OW[101]] = OW[27], dd[-OW[100]] = Jd - OW[2]);
          const kd = TextDecoder[OW[102] + OW[103]][OW[104]],
            pd = function() {
              dd[-OW[100]]++, dd[-OW[100]] === Jd && (PW((() => Qd(OW[27]))) && (dd[OW[101]] = OW[30]), dd[-OW[100]] = OW[1]);
              for (var pd = arguments[OW[0]], Nd = new Array(pd), Wd = OW[1]; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
              return (0, ip[OW[98]])(kd, this, Nd)
            };
          return xd((() => {
            TextDecoder[OW[102] + OW[103]][OW[104]] = pd
          })), () => dd[OW[101]] ? OW[5] : gW((() => TextDecoder[OW[102] + OW[103]][OW[104]] !== pd ? OW[41] : OW[1]))
        })() : () => gW((() => ud[OW[115] + OW[116]]())),
        Vd = (0, sJ[OW[124]])(),
        zd = (0, ip[OW[58]])(OW[7]),
        Hd = (0, ip[OW[58]])(OW[7]);
      let wd = OW[1],
        Ad = OW[1],
        dJ = OW[1];
      const JJ = (0, ip[OW[58]])(OW[7]),
        kJ = (0, ip[OW[58]])(OW[7]);
      let pJ = OW[7],
        NJ = (0, ip[OW[58]])(OW[7]);
      const WJ = (...dd) => {
          RW(dd[OW[0]] = OW[5], zd[wd] = dd[OW[1]], Hd[wd] = dd[OW[2]], wd++)
        },
        PJ = dd => {
          var Jd;
          return (Jd = (Hd[dd] ? kJ : JJ)[zd[dd]]) !== OW[7] && void 0 !== Jd ? Jd : -OW[2]
        },
        ZJ = (0, ip[OW[9]])("d2lvNjQz"),
        gJ = (0, ip[OW[9]])("amtsa2plZndu"),
        CJ = [
          [(0, ip[OW[9]])("aW9qZndlODNq"), "2"],
          [(0, ip[OW[9]])("a3Bq"), "4"],
          [(0, ip[OW[9]])("dXJocmZm"), "5"]
        ],
        KJ = [
          [(0, ip[OW[9]])(OW[106] + OW[105]), OW[133]],
          [(0, ip[OW[9]])(OW[106] + "w="), "o"]
        ],
        lJ = (0, ip[OW[9]])("eTR5bnM="),
        QJ = (0, ip[OW[9]])("aHRleWpldA=="),
        LJ = (0, ip[OW[9]])("c2RmbGpneGxmY2pr"),
        OJ = [
          [(0, ip[OW[9]])("a3NhZmR1"), OW[66]],
          [(0, ip[OW[9]])("ZGZnYWFzZGFz"), OW[58]],
          [LJ, OW[107]],
          [(0, ip[OW[9]])("bGFzZWRraGFz"), "u"],
          [(0, ip[OW[9]])("cW16ZjhrM24="), OW[24]]
        ],
        eJ = [
          [lJ, OW[9]],
          [QJ, OW[98]],
          [(0, ip[OW[9]])("bmI3ZnEy"), OW[13]]
        ],
        RJ = (0, ip[OW[9]])("bGtxM20="),
        IJ = (0, ip[OW[9]])("bWtxN3" + OW[105]),
        GJ = ["mk:tw", "mk:jf"],
        vJ = ((...dd) => {
          dd[OW[0]] = OW[1];
          try {
            return dd[-OW[100]] = OW[6], (dd[-OW[100]] = Nd[(0, ip[OW[9]])("V2ViU29ja2V0")]) === OW[7] || void 0 === dd[-OW[100]] ? void 0 : dd[-OW[100]][OW[102] + OW[103]]
          } catch {
            return OW[6]
          }
        })(),
        xJ = ["send", "close", "addEventListener", "removeEventListener", OW[112] + OW[111] + OW[107]],
        qJ = ["onmessage", "onopen", "onclos" + OW[15], "onerro" + OW[66]];
      let BJ = OW[27];
      const iJ = (...dd) => {
          dd[OW[0]] = OW[1];
          const kd = Jd();
          kd === OW[7] || BJ || (BJ = Rd((() => {
            if (vJ !== OW[6] && (0, ip[OW[108]])(kd) !== vJ) return OW[30];
            for (let dd = OW[1]; dd < xJ[OW[0]]; dd++)
              if ((0, ip[OW[98]])(ip[OW[99]], kd, [xJ[dd]])) return OW[30];
            for (let dd = OW[1]; dd < qJ[OW[0]]; dd++)
              if (kd[qJ[dd]] !== OW[7] && kd[qJ[dd]] !== OW[6]) return OW[30];
            return OW[27]
          })))
        },
        aJ = (0, ip[OW[9]])("RXZlbnQ=");
      let MJ = TJ[OW[110]][OW[128]],
        FJ = OW[1];
      const YJ = () => FJ++ === OW[22] ? (FJ = OW[1], Qd(OW[27]) ? TJ[OW[25]].CheckFuncHit : OW[1]) : OW[1],
        mJ = (0, ip[OW[58]])(OW[7]),
        bJ = pd[OW[0]];
      for (let gd = OW[1]; gd < bJ; gd++) {
        const dd = (0, ip[OW[98]])(ip.ib, pd, [gd]);
        mJ[gd] = dd >= 99 && dd <= 122 ? dd : OW[1]
      }
      const SJ = (dd, Jd) => {
          return typeof dd === OW[96] + OW[97] && (0, ip[OW[98]])(ip.$, Jd, [(kd = dd, (0, ip.q)(ip.G, kd, []))]) !== OW[7];
          var kd
        },
        jJ = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        XJ = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        fJ = [
          [oW["Dispat" + OW[111] + OW[107]], () => !SJ(EventTarget[OW[102] + OW[103]][OW[112] + OW[111] + OW[107]], jJ)],
          [oW.PerformanceNow, () => !SJ(performance[OW[114]], XJ)],
          [oW["DateNo" + OW[113]], () => !SJ(Date[OW[114]], XJ)]
        ],
        nJ = (0, ip[OW[58]])(OW[7]);
      let UJ = OW[1];
      const yJ = {
        stackCheck: () => {
          let dd = OW[7];
          const Jd = PW((() => (dd = ld(OW[30]), dd !== OW[7])));
          var kd, pd;
          return dd !== OW[7] && Ld === OW[7] && (kd = dd[OW[17]], pd = dd[OW[18]], Ld = (0, tN.x)(NW(kd, pd))), Jd
        },
        [OW[115] + OW[116]]: (...dd) => {
          dd[OW[0]] = OW[1];
          const Jd = td();
          if (Jd === OW[5]) return OW[5];
          if (Bd[ZJ]) return OW[8];
          const kd = gW((() => Nd[gJ] ? OW[19] : OW[1]));
          return kd !== OW[1] ? kd === OW[19] ? OW[19] : OW[1] : Jd === ZW ? OW[1] : Jd === OW[41] ? OW[41] : (Gd(), pd = Function[OW[102] + OW[103]], Wd = OW[122], Pd = (...dd) => (dd[OW[0]] = OW[2], dd[OW[1]].writable !== OW[30]), PW((() => {
            const dd = Object.getOwnPropertyDescriptor(pd, Wd);
            return void 0 !== dd && Pd(dd)
          })) ? OW[55] : OW[1]);
          var pd, Wd, Pd
        },
        indexPassReplaced: Td,
        [OW[117] + "tSubChanged"]: (...dd) => {
          if (dd[OW[0]] = OW[1], rd === cd || Dd) return OW[27];
          const Jd = hd();
          return Jd !== cd && Jd !== rd
        },
        EC: (...dd) => {
          RW(dd[OW[0]] = OW[1], dd[OW[25]] = bJ);
          for (let Jd = OW[1]; Jd < fJ[OW[0]] + UJ; Jd++) {
            const kd = Jd < fJ[OW[0]] ? fJ[Jd] : nJ[Jd - fJ[OW[0]]];
            kd[OW[1]] < dd[OW[25]] && Rd(kd[OW[2]]) && (dd[OW[25]] = kd[OW[1]])
          }
          return dd[OW[25]] < bJ ? mJ[dd[OW[25]]] : OW[1]
        },
        bK: () => Vd ? sJ[OW[118]] : 8,
        [OW[119] + OW[120] + "Subs"]: (...dd) => {
          dd[OW[0]] = OW[1];
          const Jd = gd[OW[118]].pR[OW[119] + OW[120]];
          return typeof Jd === OW[121] && Jd > OW[1] ? Jd > OW[75] ? OW[75] : Jd : OW[1]
        },
        ["getCom" + OW[132]]: (...dd) => {
          RW(dd[OW[0]] = OW[1], dd[OW[24]] = OW[6], wd = OW[1]);
          for (let kd = OW[1]; kd < Yd; kd++) WJ(Fd[kd], OW[30]);
          for (let kd = OW[1]; kd < CJ[OW[0]]; kd++) Bd[CJ[kd][OW[1]]] && WJ(CJ[kd][OW[2]], OW[30]);
          const Jd = gW((() => WW(atob[OW[122]](), Kd) ? OW[1] : OW[2]));
          Jd === OW[2] && WJ(OW[20], OW[30]), Gd();
          const pd = Jd === ZW ? ZW : gW(((...dd) => {
            dd[OW[0]] = OW[1];
            const Jd = Object.getOwnPropertyDescriptor(window, "atob");
            return Jd === OW[6] ? ZW : Jd[OW[123]] !== OW[6] ? OW[2] : OW[1]
          }));
          pd === OW[2] && WJ(OW[124], OW[30]);
          const Nd = pd === ZW;
          for (let kd = OW[1]; kd < KJ[OW[0]] && !Nd; kd++) Bd[KJ[kd][OW[1]]] && WJ(KJ[kd][OW[2]], OW[30]);
          const Wd = wd > Yd;
          dd[OW[125]] = OW[7], Yd === OW[1] && (bd > OW[1] ? dd[OW[125]] = md[OW[1]] : Xd ? dd[OW[125]] = "fp" : Wd || (dd[OW[125]] = Bd[lJ] ? OW[9] : Bd[QJ] ? OW[98] : OW[7]));
          for (let kd = OW[1]; kd < OJ[OW[0]] && !Nd; kd++) Bd[OJ[kd][OW[1]]] && WJ(OJ[kd][OW[2]], OW[30]);
          const Pd = wd,
            Zd = (0, wN[OW[25]])(),
            gd = Zd !== OW[7] && (0, oJ[OW[66]])(Zd);
          gd && !Nd && WJ(Zd, OW[27]), Ed && WJ("ix", OW[27]), Md && WJ("il", OW[27]);
          for (let kd = OW[1]; kd < bd; kd++) WJ(md[kd], OW[30]);
          for (let kd = OW[1]; kd < eJ[OW[0]]; kd++) Bd[eJ[kd][OW[1]]] && WJ(eJ[kd][OW[2]], OW[30]);
          Bd[RJ] && WJ("mk:lk", OW[30]);
          const Cd = ((...dd) => {
            dd[OW[0]] = OW[2];
            for (let Jd = OW[1]; Jd < GJ[OW[0]]; Jd++)
              if (dd[OW[1]] === GJ[Jd]) return GJ[Jd];
            return OW[7]
          })(Bd[IJ]);
          if (Cd !== OW[7] && WJ(Cd, OW[30]), kd !== OW[7] && vd(kd.emitReplaced) === OW[30] && WJ("mk:em", OW[30]), BJ && WJ("3s", OW[27]), ip.bb && WJ("3b", OW[27]), Gd(), Id && WJ("3d", OW[27]), Nd && WJ("3g", OW[27]), Zd === OW[7] || gd || WJ(Zd, OW[27]), Ld !== OW[7] && WJ(Ld, OW[27]), ed === OW[7] && kd !== OW[7]) {
            const dd = vd(kd[OW[115] + "mMeshHitStac" + OW[72]]);
            typeof dd === OW[63] && (ed = function(dd, Jd, kd) {
              let pd = 0;
              for (; pd < kd && -1 === JW(dd, Jd[pd]);) pd++;
              return (0, tN.j)(NW(dd, pd < kd ? Jd[pd] : null))
            }(dd, od, od[OW[0]] - OW[2]))
          }
          if (ed !== OW[7] && WJ(ed, OW[27]), Od === OW[7] && sJ[OW[15]] !== OW[7] && (Od = function(dd) {
              const Jd = /[^\n]+/g,
                kd = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let pd = null,
                Nd = "",
                Wd = !1,
                Pd = (0, ip.q)(ip.$, Jd, [dd]);
              for (; null !== Pd;) {
                const Zd = (0, ip.q)(ip.$, kd, [Pd[0]]),
                  gd = null === Zd ? (0, ip.q)(ip.$, AN, [Pd[0]]) : null,
                  Cd = null !== gd && null !== (0, ip.q)(ip.$, dW, [gd[1]]) && 0 !== JW(gd[1], "wasm:") ? gd[1] : null;
                if (null === pd) null !== Zd ? (pd = Zd[2], Nd = Zd[4]) : null !== Cd && (pd = "");
                else if (null !== Zd) {
                  Wd = !0;
                  const dd = Zd[2] === pd;
                  if ("" !== Zd[1] || !dd || Zd[4] !== Nd) {
                    const Jd = "moz-extension" === Zd[3] || "safari-web-extension" === Zd[3];
                    return (0, tN.i)("" !== Zd[1] || dd ? "inline" : Jd ? Zd[3] : Zd[2])
                  }
                } else if (null !== Cd) {
                  const dd = -1 !== JW(Pd[0], "userscript") || -1 !== JW(Pd[0], ".user.js");
                  return (0, tN.i)(dd ? "userscript" : "inline")
                }
                Pd = (0, ip.q)(ip.$, Jd, [dd])
              }
              return (0, tN.i)(Wd ? "own" : "unknown")
            }(sJ[OW[15]])), Od !== OW[7] && WJ(Od, OW[27]), wd === OW[1]) return OW[7];
          if (dd[OW[125]] === OW[7] && Hd[OW[1]] && !(0, tN[OW[72]])(zd[OW[1]]))
            for (let kd = OW[2]; kd < Pd; kd++)
              if (Hd[kd] && (0, tN[OW[72]])(zd[kd])) {
                const dd = zd[kd];
                for (let Jd = kd; Jd > OW[1]; Jd--) RW(zd[Jd] = zd[Jd - OW[2]], Hd[Jd] = Hd[Jd - OW[2]]);
                RW(zd[OW[1]] = dd, Hd[OW[1]] = OW[30]);
                break
              } if (RW(dd[-OW[126]] = OW[1], dd[OW[8]] = dd[OW[125]] === OW[7] ? OW[1] : Pd), dd[OW[8]] > OW[1] && Zd !== OW[7] && gd && !Nd) {
            for (let Jd = dd[OW[8]]; Jd > OW[1]; Jd--) RW(zd[Jd] = zd[Jd - OW[2]], Hd[Jd] = Hd[Jd - OW[2]]);
            RW(zd[OW[1]] = Zd, Hd[OW[1]] = OW[27], dd[-OW[126]] = OW[2], dd[OW[8]]++)
          }
          if (dd[OW[19]] = OW[1], Ad++ % OW[5] === OW[2])
            for (let kd = OW[2]; kd < wd; kd++) PJ(kd) < PJ(dd[OW[19]]) && (dd[OW[19]] = kd);
          const ld = zd[dd[OW[19]]];
          (Hd[dd[OW[19]]] ? kJ : JJ)[ld] = dJ++;
          const Qd = dd[OW[19]] >= dd[-OW[126]] && dd[OW[19]] < dd[OW[8]];
          if (!Hd[dd[OW[19]]] || ld === dd[OW[125]] || dd[OW[19]] === OW[1] && !Qd) return ld === OW[107] ? (0, tN[OW[127]])(Bd[LJ], tN[OW[15]]) : ld;
          const Rd = (dd[OW[24]] = dd[OW[125]]) !== OW[7] && void 0 !== dd[OW[24]] ? dd[OW[24]] : zd[OW[1]];
          return Rd !== pJ && RW(pJ = Rd, NJ = (0, ip[OW[58]])(OW[7])), NJ[ld] ??= (0, tN[OW[9]])(ld, Rd)
        }
      };
      let DJ = TJ[OW[110]][OW[128]];
      const EJ = () => MJ !== TJ[OW[110]][OW[128]] ? MJ : DJ;
      let cJ = OW[1],
        hJ = OW[5],
        rJ = OW[1],
        uJ = OW[1];
      return {
        checks: yJ,
        checkEvent: (...dd) => {
          dd[OW[0]] = OW[2];
          try {
            const Jd = Nd[aJ];
            if (typeof Jd === OW[96] + OW[97] && !(dd[OW[1]] instanceof Jd) && !(0, ip[OW[109]])(dd[OW[1]])) return MJ = TJ[OW[110]].NotEvent, OW[1];
            if (dd[OW[1]].isTrusted === OW[27]) return OW[1];
            let kd = OW[1];
            for (const pd in dd[OW[1]]) kd++;
            return kd < OW[37] ? (MJ = TJ[OW[110]]["FewPropertie" + OW[58]], OW[1]) : YJ()
          } catch {}
          return OW[1]
        },
        checkPadCall: () => {
          try {
            return YJ()
          } catch {
            return OW[1]
          }
        },
        usedProp: EJ,
        watchHeld: (...dd) => {
          RW(dd[OW[0]] = OW[5], dd[OW[5]] = OW[6]);
          const Jd = xd((() => {
            dd[OW[5]] = dd[OW[2]]()
          }));
          nJ[UJ++] = [dd[OW[1]], () => !Jd || dd[OW[2]]() !== dd[OW[5]]]
        },
        Do: (...dd) => {
          dd[OW[0]] = OW[1];
          const Jd = Td();
          return ((...dd) => {
            if (RW(dd[OW[0]] = OW[2], dd[OW[24]] = OW[6], dd[OW[13]] = OW[6]), kd !== OW[7]) {
              const Jd = vd(kd.Tg),
                pd = "v3" === Jd ? OW[8] : "v5" === Jd ? OW[22] : "v6" === Jd ? OW[41] : OW[5];
              pd !== OW[5] && (hJ = pd);
              const Nd = vd(kd["inbuil" + OW[130] + OW[131]]);
              typeof Nd === OW[121] && Nd >= OW[1] && Nd <= OW[64] && (Nd | OW[1]) === Nd && (rJ = Nd), RW(dd[OW[24]] = vd(kd.reflectApplyHit), dd[OW[13]] = vd(kd.definerHit))
            }
            const Jd = dd[OW[1]] ? OW[54] : "11" === dd[OW[13]] ? OW[64] : "13" === dd[OW[13]] ? 13 : dd[OW[24]] !== OW[6] && dd[OW[24]] !== OW[7] ? OW[5] : "10" === dd[OW[13]] ? OW[37] : "12" === dd[OW[13]] ? OW[42] : OW[1];
            Jd !== OW[1] && (uJ = Jd)
          })(Jd), cJ++ % 10 === OW[1] && (iJ(), PW((() => !WW(Nd[Wd][OW[122]][OW[122]](), Kd))) && (DJ = DJ === TJ[OW[110]][OW[129]] ? TJ[OW[110]][OW[129]] : TJ[OW[110]].Fr), PW((() => !WW(Nd[Wd][OW[122]](), Kd))) && (DJ = TJ[OW[110]][OW[129]])), {
            flags: Jd ? TJ[OW[25]].Butto : OW[1],
            values: [
              [TJ[OW[20]].PhysicsVersion, hJ],
              [TJ[OW[20]]["Inbuil" + OW[130] + OW[131]], rJ],
              [TJ[OW[20]]["AltCom" + OW[132]], uJ],
              [TJ[OW[20]]["ProbeUsedPro" + OW[133]], EJ()]
            ]
          }
        }
      }
    };
    const IW = "[bloxd-wasm-client]",
      GW = "bloxdWasmDownloadFailed",
      vW = Jk.d,
      xW = "boot",
      qW = "playSources",
      BW = "wasmBuild",
      sW = "bloxd-wasm-joined",
      iW = "bloxd-wasm-first-view",
      aW = "bloxd-wasm-playable-legacy",
      MW = 1048576,
      FW = 8 * MW,
      YW = 8,
      mW = 1006,
      bW = 1e3,
      SW = "You lost connection to the server.",
      jW = "general:lostConnection",
      XW = 1048576,
      fW = 5e3,
      nW = 100,
      UW = [2e3, 1e4, 3e4],
      yW = 3e4;
    let DW = null,
      TW = null,
      EW = !1,
      cW = !1,
      hW = !1,
      rW = null,
      uW = null,
      tW = null,
      VW = null,
      zW = null,
      HW = null,
      wW = null;
    const AW = new class {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = dd, this.soundOn = Jd, this.now = kd, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var dd;
        null === (dd = this.player) || void 0 === dd || dd.prepare()
      }
      preload(dd) {
        var Jd;
        this.stopped || (null === (Jd = this.player) || void 0 === Jd || Jd.preload(dd))
      }
      endSession() {
        var dd, Jd;
        null === (dd = this.player) || void 0 === dd || dd.cancelPreload(), null === (Jd = this.player) || void 0 === Jd || Jd.freeSheetsAfterGame()
      }
      load(dd) {
        if (null !== this.player || this.stopped) return;
        this.player = dd, dd.setMaster(this.master, this.soundOn);
        const Jd = this.now(),
          kd = this.local;
        this.local = [];
        for (const Nd of kd)
          if (!(Nd.stopped || !Nd.loop && Jd - Nd.at >= 300)) try {
            this.start(Nd, dd, Jd)
          } catch (pd) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", pd)
          }
      }
      start(dd, Jd, kd) {
        const {
          name: pd,
          pos: Nd,
          ear: Wd,
          maxHearDist: Pd,
          refDistance: Zd,
          loop: gd,
          fade: Cd
        } = dd, Kd = Jd.playGame(pd, nJ(dd, kd), Nd, Wd, Pd, Zd, gd);
        if (dd.sound = Kd, 1 !== dd.rate && Kd.rate(dd.rate), null !== dd.panner && Kd.setPannerAttr(dd.panner), null !== dd.moved && Kd.setPosition(dd.moved), null !== Cd && kd - Cd.at < Cd.ms) {
          const Jd = fJ(this.master);
          Jd > 0 ? Kd.fade(0, dd.volume * Jd, Cd.at + Cd.ms - kd) : Kd.setRelativeVolume(dd.volume)
        }
      }
      onAudioEvent(dd, Jd, kd, pd) {
        var Nd, Wd;
        return null === (Nd = null === (Wd = this.player) || void 0 === Wd ? void 0 : Wd.onAudioEvent(dd, Jd, kd, pd)) || void 0 === Nd || Nd
      }
      applyListener(dd) {
        var Jd;
        null === (Jd = this.player) || void 0 === Jd || Jd.applyListener(dd)
      }
      playGame(dd, Jd, kd, pd, Nd, Wd, Pd) {
        if (this.stopped) return XJ.c;
        if (this.player) return this.player.playGame(dd, Jd, kd, pd, Nd, Wd, Pd);
        const Zd = this.now();
        this.local = this.local.filter((dd => !dd.stopped && (dd.loop || Zd - dd.at < 300)));
        const gd = {
          name: dd,
          volume: fJ(Jd),
          fade: null,
          pos: kd && [kd[0], kd[1], kd[2]],
          ear: pd && [pd[0], pd[1], pd[2]],
          maxHearDist: Nd,
          refDistance: Wd,
          loop: Pd,
          rate: 1,
          panner: null,
          moved: null,
          at: Zd,
          stopped: !1,
          sound: null
        };
        this.local.push(gd);
        const Cd = {
          stop: () => {
            var dd;
            return gd.stopped = !0, null === (dd = gd.sound) || void 0 === dd || dd.stop(), Cd
          },
          fade: (dd, Jd, kd) => {
            if (gd.sound) return gd.sound.fade(dd, Jd, kd), Cd;
            const pd = fJ(this.master),
              Nd = fJ(pd > 0 ? Jd / pd : Jd > 0 ? gd.volume : 0),
              Wd = this.now(),
              Pd = nJ(gd, Wd);
            return gd.volume = Nd, gd.fade = kd > 0 && Pd !== Nd ? {
              from: Pd,
              at: Wd,
              ms: kd
            } : null, Cd
          },
          rate: dd => (gd.sound ? gd.sound.rate(dd) : gd.rate = dd, Cd),
          getVolume: () => gd.sound ? gd.sound.getVolume() : gd.volume * fJ(this.master),
          getRelativeVolume: () => gd.sound ? gd.sound.getRelativeVolume() : gd.volume,
          setRelativeVolume: dd => (gd.sound ? gd.sound.setRelativeVolume(dd) : (gd.volume = fJ(dd), gd.fade = null), Cd),
          setPannerAttr: dd => (gd.sound ? gd.sound.setPannerAttr(dd) : gd.panner = {
            ...dd
          }, Cd),
          setPosition: dd => (gd.sound ? gd.sound.setPosition(dd) : gd.moved = [dd[0], dd[1], dd[2]], Cd)
        };
        return Cd
      }
      setMaster(dd, Jd) {
        var kd;
        this.master = dd, this.soundOn = Jd, null === (kd = this.player) || void 0 === kd || kd.setMaster(dd, Jd)
      }
      stop() {
        var dd;
        this.stopped = !0, null === (dd = this.player) || void 0 === dd || dd.stopAll();
        for (const Jd of this.local) Jd.stopped = !0;
        this.local = []
      }
    }((0, iJ.b)(), !0);
    let dP = {
        wasm: "unknown",
        client: String(pJ.c)
      },
      JP = null,
      kP = () => {};
    const pP = new Promise((dd => {
      kP = dd
    }));
    let NP = () => {};
    const WP = new Promise((dd => {
      NP = dd
    }));
    let PP, ZP = null,
      gP = null,
      CP = null,
      KP = null,
      oP = null,
      lP = null,
      QP = null,
      LP = null,
      OP = null,
      eP = null,
      RP = null,
      IP = null,
      GP = null,
      vP = null,
      xP = null,
      qP = null,
      BP = null,
      sP = null,
      iP = !1,
      aP = null;
    const MP = new Set,
      FP = new Set;

    function YP(dd) {
      if (!MP.has(dd)) {
        MP.add(dd);
        for (const kd of FP) try {
          kd(dd)
        } catch (Jd) {
          console.error(`${IW} a startup listener threw`, Jd)
        }
      }
    }

    function mP(dd) {
      iP = !0, dd.isStopped || YP("texturesIn")
    }
    let bP = 1,
      SP = -1 / 0,
      jP = !1,
      XP = !1,
      fP = 0,
      nP = null,
      UP = !1;
    const yP = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let DP = 0,
      TP = 0,
      EP = null,
      cP = null,
      hP = null,
      rP = null;
    const uP = new WeakMap;
    let tP = null,
      VP = null,
      zP = null,
      HP = null,
      wP = null,
      AP = null,
      dZ = null,
      JZ = null,
      kZ = 0,
      pZ = null,
      NZ = null,
      WZ = null,
      PZ = null,
      ZZ = -1 / 0,
      gZ = null;
    const CZ = new Set;
    let KZ = !1,
      oZ = null;
    const lZ = new Map,
      QZ = new Set;
    let LZ = !1;
    const OZ = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let eZ = null,
      RZ = () => [0, 0],
      IZ = () => {},
      GZ = () => {},
      vZ = null,
      xZ = null;
    const qZ = new class {
      constructor(dd) {
        this.reached = dd, this.next = 1
      }
      observe(dd) {
        if (!(dd < this.next)) {
          for (; this.next <= dd;) this.next *= 2;
          this.reached(dd)
        }
      }
    }((dd => {
      console.warn(`${IW} chunk cancels from the server this session: ${dd}`)
    }));
    let BZ = 1,
      sZ = null,
      iZ = null,
      aZ = null,
      MZ = null,
      FZ = null,
      YZ = !1,
      mZ = !1,
      bZ = 0,
      SZ = null,
      jZ = !1,
      XZ = null,
      fZ = null,
      nZ = !1;
    const UZ = new class {
      constructor(dd) {
        this.nO = dd, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(dd, Jd, kd) {
        (0, YJ.b)(dd) && (this.lossPending = !1);
        const pd = kd - this.lastFrameMs;
        this.lastFrameMs = kd, this.lossPending && Jd && (0, YJ.h)(dd) ? (null === this.undrawnSinceMs || pd > 1e3) && (this.undrawnSinceMs = kd) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && kd - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(dd) {
        dd !== this.shown && (this.shown = dd, this.nO(dd))
      }
    }((dd => {
      gd.j.nO(Ld.e, dd)
    }));
    let yZ = !1,
      DZ = !0,
      TZ = null,
      EZ = !1,
      cZ = !1,
      hZ = !1;

    function rZ() {
      return tW ??= Promise.all([kd.e(190), kd.e(137), kd.e(57)]).then((() => kd(43193))).then((dd => (uW = dd, Object.assign(globalThis, {
        bloxdPreviewPage: dd.pagePreviews()
      }), dd)), (dd => {
        throw tW = null, dd
      })), tW
    }

    function uZ() {
      return rW ??= kd.e(55).then((() => kd(43210))).catch((dd => {
        throw rW = null, new Bd.e(dd)
      })), rW
    }
    class tZ {
      constructor() {
        this.host = null
      }
      open(dd) {
        return null !== this.host ? dd(this.host) : rZ().then((Jd => (this.host ??= new Jd.WasmPreviewHost(Jd.pagePreviews()), dd(this.host))))
      }
      openMob(dd) {
        return this.open((Jd => Jd.openMob(dd)))
      }
      openPet(dd) {
        return this.open((Jd => Jd.openPet(dd)))
      }
      openMobLineup(dd) {
        return this.open((Jd => Jd.openMobLineup(dd)))
      }
      openCharacter(dd, Jd) {
        return this.open((kd => kd.openCharacter(dd, Jd)))
      }
    }

    function VZ() {
      hW || (hW = !0, pN.e.setHost(new tZ), (0, vk.i)(), Ap.g.setFollower(Vg), Object.assign(globalThis, {
        bloxdPreviews: pN.e
      }))
    }

    function zZ() {
      rZ().then((dd => {
        dd.pagePreviews().prefetch()
      }), (() => {}))
    }

    function HZ() {
      let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (cW) return;
      cW = !0, yZ = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), DZ = !yZ, console.info(`${IW} starting`), EW || (EW = !0, (0, Ld.D)(new bJ(Lg, qg)), (0, ld.o)(new SJ), (0, Ld.z)(new jJ), (0, Ld.u)()), VZ(), (0, ak.setCrashScreen)((dd => {
        let {
          text: Jd,
          reload: kd
        } = dd;
        ! function(dd, Jd) {
          var kd, pd;
          if (EZ) return;
          EZ = !0, (0, qk.e)(), null === (kd = gZ) || void 0 === kd || kd.abort(), gZ = null, dN.b.release();
          const Nd = yZ ? null !== (pd = dd.cancel) && void 0 !== pd ? pd : "general:back" : null;
          Ip({
            ...dd,
            cancel: Nd
          }).then((dd => {
            dd && Jd && cZ ? ((0, LJ.p)("reloadOntoJs"), (0, rd.f)(LJ.B)) : dd && Jd ? (0, rd.i)() : yZ && (0, rd.e)("/")
          }))
        }(Jd, kd)
      })), (0, Tp.l)(), (0, sJ.f)();
      let Jd = null;
      try {
        Jd = LW("langpp400t8", (() => {
          var dd, Jd;
          return null !== (dd = null === (Jd = ZP) || void 0 === Jd ? void 0 : Jd.ws) && void 0 !== dd ? dd : null
        }), dd, "cmtqsjzdiy")
      } catch (Nd) {
        console.error(`${IW} probes`, Nd)
      }
      const pd = function() {
        const dd = (0, qp.o)(),
          Jd = (0, qp.i)();
        let kd = !1;
        return pd => {
          dd && !kd && (kd = !0, (0, ak.reportStaleBuildReload)(dd, Jd, pd))
        }
      }();
      Hg(), yZ || function() {
        const dd = function(dd) {
          var Jd;
          const kd = new URLSearchParams(dd),
            pd = kd.get("game");
          return pd ? {
            game: pd,
            lobby: null !== (Jd = kd.get("lobby")) && void 0 !== Jd ? Jd : null
          } : null
        }(window.location.search);
        if (dd) return (0, NJ.i)(dd.game) && Hg().request(), void dg(dd.game, dd.lobby);
        const Jd = new URLSearchParams(window.location.search).get("ws");
        if (!Jd) return;
        pP.then((dd => {
          dd && async function(dd, Jd) {
            try {
              await (0, Bd.o)(dd), zP = Mg(new WebSocket(Jd)), null !== zP && dN.b.setGame(null), wZ()
            } catch (Nd) {
              console.error(`${IW} ?ws=${Jd} did not attach`, Nd)
            }
          }(dd, Jd)
        }))
      }(), async function(dd) {
        var Jd, pd, Wd, Pd, Zd;
        if ("undefined" === typeof WebAssembly) return Eg("noWebAssembly", "This browser has no WebAssembly"), null;
        const Cd = await (0, CN.R)();
        if ((0, ak.setCrashBackend)((0, Jk.l)(Cd) ? "unsupported" : null !== (Jd = null === Cd || void 0 === Cd ? void 0 : Cd.backend) && void 0 !== Jd ? Jd : "none"), (0, Jk.l)(Cd)) return Eg("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Cd.missing.join(", ")}`, {
          missing: Cd.missing.join(",")
        }), null;
        if ((0, jN.m)("render")) try {
          const {
            startRenderDebug: dd
          } = await Promise.all([kd.e(75), kd.e(47)]).then((() => kd(4552)));
          dd(Cd)
        } catch (iJ) {
          console.warn("The render debug topic didn't load", iJ)
        }
        if ((0, jN.m)("renderlite")) try {
          const {
            startRenderLite: dd
          } = await Promise.all([kd.e(261), kd.e(48)]).then((() => kd(43231)));
          aZ = dd(Cd)
        } catch (iJ) {
          console.warn("The renderlite debug topic didn't load", iJ)
        }
        if ((0, jN.m)("renderprobe")) try {
          const {
            startRenderProbe: dd
          } = await kd.e(49).then((() => kd(43238)));
          dd(Cd)
        } catch (iJ) {
          console.warn("The renderprobe debug topic didn't load", iJ)
        }
        let Kd = null;
        if (null !== Cd && cg()) {
          const dd = (0, Gp.f)(Cd, !0);
          "webgl" === Cd.backend && null !== dd && (0, eJ.n)(dd, ak.reportGpuWasmPopulation), null !== dd && (0, OJ.r)(dd), Kd = (0, Gp.e)(Cd, dd)
        }
        if (null !== Cd && null !== Kd) return (0, ak.reportGpuFallback)(Kd, Cd.backend), hg(`the wasm client's renderer plays this GPU (${Kd}) on ${Cd.backend} worse than the JS client`, "gpu"), null;
        const od = null !== (pd = null === Cd || void 0 === Cd ? void 0 : Cd.backend) && void 0 !== pd ? pd : null;
        OZ.adapter = null !== (Wd = null === Cd || void 0 === Cd ? void 0 : Cd.adapter) && void 0 !== Wd ? Wd : null, OZ.boundAtMs = null, OZ.indirectHangs = null;
        const ld = !(0, Jk.Q)();
        null !== Cd && "none" !== Cd.reason && console.info(`${IW} drawing with ${Cd.backend}: ${Cd.reason}`);
        const Qd = (0, CN.E)();
        NP(!0), (0, Bd.A)((dd => {
          try {
            null !== od && (vZ = dd.startSkyFeed, ug(), function(dd) {
              var Jd, kd;
              RZ = dd.rasterText, wP = dd.setTextLocalPlayer, dd.setTextLocalPlayer(null !== (Jd = null === (kd = HP) || void 0 === kd ? void 0 : kd.info.playerDbId) && void 0 !== Jd ? Jd : null), IZ = dd.drainTextRerasters, GZ = dd.loadTextIcons, dd.warmText((() => YZ)), dd.textChanged(), YZ && setTimeout(GZ, 0)
            }(dd), xZ = dd.startShellAnalytics, pC())
          } finally {
            hZ || (MZ = dd.followMenuPrefs({
              setSoundPrefs: sg,
              setEnvPrefs: ig,
              setUiPrefs: Bg,
              setLookPrefs: ag
            }))
          }
        })), (0, Bd.s)(AW).catch((dd => {
          console.warn(`${IW} the game code did not load: a join asks again`, dd)
        }));
        const Ld = (0, CN.i)(Cd);
        let Od, ed;
        Ld.catch((() => {})), "loading" === (0, ZJ.v)() && BN();
        try {
          Od = function(dd) {
            const Jd = null !== dd && void 0 !== dd ? dd : document.createElement("canvas");
            Jd.id = "wasm-game-canvas", (0, ON.j)();
            const kd = (0, mJ.d)(),
              pd = (0, mJ.g)(kd);
            return Jd.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, LN.c)(Jd, pd), (0, mJ.c)(Jd, kd), Jd.width = pd.bufferWidth, Jd.height = pd.bufferHeight, Og(Jd, DZ), TZ = Jd, document.body.append(Jd), Jd
          }(null === od ? null : await (await rZ()).pagePreviews().beginSession())
        } catch (Nd) {
          return await XC({
            site: BW,
            error: Nd
          }, (() => {
            (0, ak.showUnsupported)((0, Op.k)("fetch"), EN.e.fetch, `the previews did not load: ${String(Nd)}`)
          })), null
        }
        BN();
        try {
          ed = await Ld
        } catch (Nd) {
          return await XC({
            site: BW,
            error: Nd
          }, (() => {
            (0, ak.showUnsupported)((0, Op.k)("fetch"), EN.e.fetch, `the ${null!==od&&void 0!==od?od:"client"} build did not load: ${String(Nd)}`)
          })), null
        }
        const Rd = (0, CN.e)(),
          Id = !Rd && !0 !== ik.k.getItem(GW),
          Gd = !Rd && "loading" === (0, ZJ.v)();
        await (0, gJ.h)(ed, lJ.g, {
          reloadFailedDownload: Id
        }), Gd && !(0, ZJ.M)() && await (0, gJ.h)(ed, lJ.g, {
          reloadFailedDownload: Id
        });
        vN = performance.now();
        const vd = dP;
        if (!(0, ZJ.M)()) {
          (0, ZJ.L)() && ik.k.setItem(GW, !0);
          const dd = (0, ZJ.l)();
          if ("call" === dd) BC({
            site: kk.s,
            error: (0, ZJ.i)(),
            header: null
          }, vd);
          else {
            const Jd = null !== dd && void 0 !== dd ? dd : "instantiate",
              kd = () => {
                (0, ak.showUnsupported)((0, Op.k)(Jd), EN.e[Jd], (0, ZJ.e)())
              };
            if ("compile" !== dd && "instantiate" !== dd || !cg())
              if ("fetch" === Jd) {
                const dd = [ed.url().href, lJ.g.url().href];
                await XC({
                  site: BW,
                  error: (0, ZJ.e)(),
                  urls: dd
                }, kd)
              } else kd();
            else {
              const Jd = (0, ZJ.e)(),
                kd = (0, cJ.n)((0, ZJ.i)());
              (0, ak.reportCountedLoadFallback)((0, Op.k)(dd), EN.e[dd], Jd, kd), hg(`the wasm client did not ${dd} here (${Jd})`, kd ? "oom" : null)
            }
          }
          return null
        }(0, CJ.O)(ed.url()) && (0, ak.reportUnstreamedCoreLoad)();
        const xd = (0, ZJ.x)();
        let sd, ad = vd;
        try {
          ad = {
            ...vd,
            wasm: xd.Zo()
          };
          const {
            Le: dd
          } = ed.bindings, Jd = dd.Opd();
          if (Jd !== TJ.A) return BC({
            site: kk.d,
            error: `core ABI ${Jd}, page ABI ${TJ.A}`,
            header: null
          }, ad), null;
          const [kd, pd] = (0, TJ.ve)();
          sd = new dd(kd, pd)
        } catch (Nd) {
          return BC({
            site: kk.d,
            error: Nd,
            header: null
          }, ad), null
        }
        dP = ad, JP = ed.bindings;
        const Md = new kk.f(sd, ZJ.o, {
          onCrash: dd => {
            var Jd;
            null === (Jd = aZ) || void 0 === Jd || Jd.crashed(dd), ld && function(dd, Jd, kd) {
              if ("webgpu" !== Jd || (0, CN.d)()) return !1;
              const pd = function(dd) {
                if (dd.site === kk.e && (0, Jk.n)(dd.error)) return "frames_refused";
                return dd.site === vW && (0, Jk.r)(dd.error) ? "start_failed" : null
              }(dd);
              if (null === pd || !(0, Jk.L)(pd)) return !1;
              return (0, ak.reportRenderReload)("webgpu", "start_failed" === pd ? 0 : 1, kd, {
                cause: pd,
                error: dd.error,
                context: OZ,
                session: aC(null)
              }), gC(), !0
            }(dd, od, ad) || BC(dd, ad)
          },
          onNetEvent: ZC,
          onReconnectGrace: yg,
          onCoreErrors: (dd, Jd) => {
            var kd, pd;
            dd.some((dd => {
              let {
                code: Jd
              } = dd;
              return Jd === TJ.G.RenderDeviceLost
            })) && ((0, CN.z)(), UZ.deviceLost()), null === (kd = aZ) || void 0 === kd || kd.coreErrors(dd), (0, ak.reportCoreErrors)(dd, Jd, ad, ((dd, Jd) => {
              var kd;
              return null === (kd = eZ) || void 0 === kd ? void 0 : kd.epd(dd, Jd)
            })), null === (pd = aP) || void 0 === pd || pd.coreErrors(dd)
          },
          onRenderReload: (dd, Jd, kd) => {
            ! function(dd, Jd, kd, pd, Nd, Wd) {
              var Pd;
              if ((0, CN.d)()) return;
              const Zd = Jd === TJ._c.WEBGPU,
                gd = pd === TJ._c.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                Cd = (0, Jk.M)(eZ);
              null === (Pd = aZ) || void 0 === Pd || Pd.reload(Zd, kd, gd, null === Cd || void 0 === Cd ? void 0 : Cd.message);
              const Kd = Zd ? (0, Jk.J)(gd, Nd) : null;
              if (null !== Kd) {
                const Jd = void 0 === Cd ? "" : ` (${Cd.message})`;
                return void dd.crash(ak.RENDER_RELOAD_SITE, new Error(`${(0,ak.renderReloadMessage)("webgpu",gd,kd)} and ${Kd}${Jd}`))
              }
              const od = Zd ? "webgpu" : "webgl1" === Wd ? "webgl1" : "webgl";
              "lost" === gd && (0, CN.z)();
              Zd || (0, LJ.n)();
              (0, ak.reportRenderReload)(od, kd, dP, {
                cause: gd,
                error: Cd,
                context: OZ,
                session: aC(dd.sunShadowsHeld())
              }), gC()
            }(Md, dd, Jd, kd, ld, od)
          },
          onEnvEvent: dd => {
            var Jd;
            dd.kind === TJ.X.SkyImages && (null === (Jd = qP) || void 0 === Jd || Jd.onEvent(dd.payload))
          },
          onImages: dd => {
            var Jd;
            null === (Jd = BP) || void 0 === Jd || Jd.onEvent(dd)
          },
          onModelRequest: dd => {
            var Jd;
            null === (Jd = GP) || void 0 === Jd || Jd.request(dd)
          },
          onModelTaken: (dd, Jd) => {
            var kd;
            null === (kd = GP) || void 0 === kd || kd.taken(dd, Jd)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(dd, Jd) {
                const kd = wW;
                if (null === kd || dd.isStopped) return;
                kd.restore((dd => {
                  (0, ak.reportTerrainTextureFailure)(dd, Jd)
                })).then((Jd => {
                  !1 !== Jd || dd.isStopped ? !0 === Jd && console.info(`${IW} terrain textures handed over again after the renderer lost them`) : console.warn(`${IW} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Md, ad)
            }))
          },
          onKeepAlive: dd => {
            const Jd = null === rP ? void 0 : uP.get(rP);
            void 0 !== Jd && Mp(Jd, dd)
          }
        });
        if (VW = Md, null !== dd) {
          Md.setAntiCheatProbes(CW(ZJ.o, dd.checks)), dd.watchHeld(oW.CoreFrame, (() => Md.frame)), dd.watchHeld(oW.GlueFrame, (() => sd.frame));
          const Jd = QW(dd, ((dd, Jd, kd) => {
            let pd = !1;
            return mC(Md, (() => {
              pd = Md.rings.input.writeRecord(TJ.ub.AntiCheat, dd, Jd, kd, 0)
            })), pd
          }));
          Md.isStopped ? Jd.stop() : RP = Jd
        }
        DW = (dd, Jd, kd) => Md.rings.cmd.writeCmd(dd, Jd, kd), TW = dd => Md.rings.cmd.growForCmd(dd), UP = !1, ug(), (0, Bd.B)(Md, {
          core: sd,
          memory: ZJ.o,
          staleOr: (dd, Jd, kd) => XC({
            site: dd,
            error: Jd
          }, kd),
          reportReplayFault: (dd, Jd) => {
            (0, ak.reportReplayFault)(dd, Jd, dP)
          },
          audio: AW,
          options: RJ.b,
          onNetEvent: ZC,
          sessionInfo: dd => {
            var Jd;
            return (null === (Jd = HP) || void 0 === Jd ? void 0 : Jd.conn) === dd ? HP.info : null
          },
          onEventOverflow: lg,
          replayShaderPack: dd => {
            var Jd;
            null === (Jd = aP) || void 0 === Jd || Jd.replay(dd)
          },
          hasPackModel: dd => {
            var Jd, kd;
            return null !== (null !== (Jd = null === (kd = tg()) || void 0 === kd ? void 0 : kd.modelUrl(dd)) && void 0 !== Jd ? Jd : null)
          },
          beforeWrite: () => (!jP && Md.rings.net.cursor > 0 && oC(Md, !1, "all"), !Md.isStopped),
          beforeOp: () => (!jP && Md.netWrittenSinceFrame > 0 && oC(Md, !1, "budget"), !Md.isStopped)
        }), (0, qd.O)({
          lockPointer: () => {
            if (!Dk(Od)) return !1;
            try {
              Promise.resolve(Od.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Fk.c)()
          },
          leaveGame: () => {
            og()
          },
          canvas: () => Od
        }), IP = (0, qd.D)((() => {
          var dd;
          const Jd = (0, Bd.k)();
          null === (dd = (0, Bd.w)()) || void 0 === dd || dd.followCursorAim(!0 === (null === Jd || void 0 === Jd ? void 0 : Jd.isSessionLive) ? Jd : null)
        })), EP && Md.setUiPrefs(EP);
        cP && Md.setEnvPrefs(cP);
        hP && Md.setLookPrefs(hP);
        const Fd = lN ? QN(lN.preventMovement) : null;
        Fd && xg(Fd);
        const Yd = (0, Rk.i)(),
          md = (0, Rk.e)(Md, Yd);
        OP = Yd.basis, (0, sk.l)(null === md ? null : (0, ek.l)(md)), LP = md;
        const bd = (0, KJ.e)();
        let Sd = 1 / 0,
          jd = !0,
          Xd = Yd.shedFootprintBytes;
        const fd = new Dp.e(bd, (() => sd.qe()), (dd => {
          Md.crash(kk.l, dd)
        }));
        lP = fd, QP = fd, null !== md && fd.setCeiling(Math.min((0, Dp.v)(md), Sd));
        if (jd) {
          fd.setShed((dd => {
            const Jd = Md.shedMemory("joinReserve" !== dd);
            return null !== Jd && (null === LP || Jd < LP) && (LP = Jd, (0, sk.l)((0, ek.l)(Jd))), Jd
          }), ((dd, Jd, kd) => {
            1 === Jd ? (0, ak.reportMemoryShed)(dd, kd, dP) : console.warn(`${IW} wasm memory: shed again (${dd}): shed ${Jd}`, kd.wasmMemoryShed)
          }), (() => Md.addDistanceInUse()));
          const dd = (0, Jk.C)(xd);
          fd.setFootprint(new SN(Xd, {
            storedChunks: () => sd.Rpd(),
            gpuBytes: () => {
              var Jd;
              return null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.Ipd()) && void 0 !== Jd ? Jd : 0
            },
            jsHeapBytes: bN
          }))
        }
        window.addEventListener("pagehide", (() => {
          lP === fd && (fd.refreshStats(), YC(fd))
        })), window.addEventListener("pagehide", CC), window.addEventListener("pagehide", KC), !1;
        const [nd, Ud] = (0, Gk.g)();
        FZ = (0, xk.f)((dd => Md.setChunkAddDistance(dd.horizontal, dd.vertical)), {
          horizontal: nd,
          vertical: Ud
        }), Md.setAmbientOcclusion(!0 !== ik.i.getItem("disableAmbientOcclusion")), Md.setPoseLod(!0 !== ik.i.getItem(PJ.Q)), (0, jN.m)("look") && (Md.setDebugLog(TJ.L.Look, !0), (0, fN.h)("wasm", (() => Md.takeDebugLog(TJ.L.Look))));
        (0, jN.m)("remesh") && (Md.setDebugLog(TJ.L.Remesh, !0), yd = () => Md.takeDebugLog(TJ.L.Remesh), TN = new DN((0, nN.i)(), yd));
        var yd;
        const Dd = function(dd, Jd, kd, pd) {
          const Nd = new Np,
            Wd = dd => ik.i.getItem(dd);
          Nd.sync(Wd, Jd), (0, FJ.W)();
          const Pd = (0, gd.n)("customBindingsChanged", (() => {
            Nd.sync(Wd, Jd)
          }));
          (0, Yk.r)(Jd);
          const Zd = new Set,
            Cd = (0, qd.D)((() => {
              var dd;
              Zd.size > 0 && gp() && !0 === (null === (dd = (0, Bd.k)()) || void 0 === dd ? void 0 : dd.localPlayerAlive()) && gd.j.nO("usedKeyboard")
            })),
            Kd = Vk.d.heldSizer((() => (0, mJ.n)(dd))),
            od = tk(dd, Jd, {
              prevents: dd => Nd.prevents(dd),
              keyPressed: dd => {
                Nd.moves(dd) && (Zd.add(dd), gp() && gd.j.nO("usedKeyboard"))
              },
              keyReleased: dd => {
                Zd.delete(dd)
              },
              keysReleased: () => {
                Zd.clear()
              },
              resized: () => {
                Pp.m.measure(dd.getBoundingClientRect()), (0, zk.k)()
              },
              sizeCanvas: Kd,
              watchRenderScale: Jd => {
                const kd = (0, mJ.o)(dd, Jd),
                  pd = Vk.d.onRelease(Jd);
                return () => {
                  kd(), pd()
                }
              },
              touchStarting: () => {
                Pp.m.measure(dd.getBoundingClientRect())
              },
              viewShown: kd,
              touchUiShown: () => ud.d.get("isTouchScreen"),
              ctrlCombosAreGames: gp,
              inspect: (dd, Jd, kd) => {
                Nd.checks(Jd, kd) && pd(dd)
              },
              canLock: () => Dk(dd)
            }),
            ld = (0, Zk.b)(Jd);
          return () => {
            Pd(), Cd(), (0, Yk.r)(null), ld(), od()
          }
        }(Od, ((dd, Jd, kd, pd, Nd) => {
          var Wd;
          mC(Md, (() => {
            Md.rings.input.writeRecord(dd, Jd, kd, pd, Nd)
          })), null === (Wd = RP) || void 0 === Wd || Wd.onInput(dd), !XP && (0, Qp.c)(dd, Nd) && (0, Qp.b)((() => {
            VW !== Md || hZ || Md.isStopped || !IC() || oC(Md, !1, "budget", !1)
          }))
        }), (() => DZ), (dd => {
          var Jd;
          null === (Jd = RP) || void 0 === Jd || Jd.onEvent(dd)
        }));
        if (Md.isStopped) return Dd(), null;
        gP = Dd;
        const Td = () => !Md.isStopped && !EZ;
        if (Md.isStopped) return null;
        (0, ZJ.R)((() => {
          "call" === (0, ZJ.l)() && Md.crash(kk.s, (0, ZJ.i)())
        }));
        const Ed = (0, kk.S)(Md.rings.worker, (() => {
          oC(Md, !1, "budget")
        }));
        CP = function(dd, Jd) {
          return bC().then((dd => {
            let {
              prefetchWorldgenWorker: Jd
            } = dd;
            Jd()
          }), (() => {})), new uN({
            module: (0, ZJ.s)(),
            decodeSettings: dd => {
              const Jd = (0, Bd.w)();
              if (null === Jd) throw new Error("no game code to decode the world-gen seed with");
              return Jd.decodeMapSettings(dd)
            },
            loadWorker: SC,
            onMapWithoutWorldgen: () => {
              jC((dd => {
                let {
                  stopWorldgenWorkerPrefetch: Jd
                } = dd;
                Jd()
              }))
            },
            onLoadFailed: dd => {
              (0, ak.reportWorldgenLoadFailure)(dd, dP)
            },
            onWorkerLost: dd => {
              (0, ak.reportWorkerLost)(kk.G, dd, dP)
            },
            onStartTimeout: dd => {
              (0, ak.reportWorkerStartTimeout)(kk.G, dd, dP)
            },
            onGaveUp: dd => {
              (0, ak.reportWorldgenGaveUp)(dd, dP)
            },
            onMemoryStats: dd => {
              var Jd;
              null === (Jd = lP) || void 0 === Jd || Jd.noteWorldgen(dd)
            },
            onMemoryGone: () => {
              var dd;
              null === (dd = lP) || void 0 === dd || dd.worldgenGone()
            },
            write: (kd, pd, Nd, Wd, Pd) => {
              mC(dd, (() => {
                dd.rings.worker.writeWorkerRecord(kd, pd, Nd, 0, Wd, Pd) || dd.crash(kk.G, `a world-gen record of kind ${pd} did not fit the worker-in ring`)
              })), Jd()
            }
          })
        }(Md, Ed), oP = function(dd, Jd) {
          return new Up({
            module: (0, ZJ.s)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: dd
              }, Jd] = await Promise.all([kd.e(40).then((() => kd(43274))), Promise.resolve().then((() => kd(95))).then((dd => {
                let {
                  isMobile: Jd
                } = dd;
                return Jd()
              }), (() => !1))]);
              return {
                create: dd,
                count: (0, BJ.c)(navigator.hardwareConcurrency, Jd)
              }
            },
            write: (kd, pd, Nd, Wd, Pd, Zd) => {
              (0, zk.j)(), mC(dd, (() => {
                dd.rings.worker.writeWorkerRecord(kd, pd, Nd, Wd, Pd, Zd) || dd.crash(kk.p, `a meshing record of kind ${pd} did not fit the worker-in ring`)
              })), Jd()
            },
            onWorkerLost: dd => {
              (0, ak.reportWorkerLost)(kk.p, dd, dP)
            },
            onLightFault: (dd, Jd) => {
              (0, ak.reportLightFault)(dd, Jd, dP)
            },
            onStartTimeout: dd => {
              (0, ak.reportWorkerStartTimeout)(kk.p, dd, dP)
            },
            onMemoryStats: (dd, Jd) => {
              var kd;
              null === (kd = lP) || void 0 === kd || kd.noteMeshWorker(dd, Jd)
            },
            onMemoryGone: dd => {
              var Jd;
              null === (Jd = lP) || void 0 === Jd || Jd.meshWorkerGone(dd)
            },
            fail: (Jd, kd) => {
              const pd = () => {
                dd.crash(kk.p, void 0 === kd ? Jd : new Error(Jd, {
                  cause: kd
                }))
              };
              void 0 !== kd ? XC({
                site: kk.p,
                error: kd
              }, pd) : pd()
            }
          })
        }(Md, Ed);
        const cd = (0, JN.n)(xJ.clientSideServerUrls.staticUrl, {
            onTableFailed: dd => {
              XC({
                site: ak.MODEL_FEED_SITE,
                error: dd
              }, (() => {}), Td)
            },
            packUrl: dd => {
              var Jd, kd;
              return null !== (Jd = null === (kd = tg()) || void 0 === kd ? void 0 : kd.modelUrl(dd)) && void 0 !== Jd ? Jd : null
            }
          }),
          td = function(dd, Jd, kd) {
            const pd = kd => {
              var pd, Nd;
              return null !== (pd = null === (Nd = Jd()) || void 0 === Nd ? void 0 : Nd.drawnUrl(kd)) && void 0 !== pd ? pd : dd.url(kd)
            };
            return (0, Ap.k)((0, Ep.p)(pd), kd)
          }(cd, (() => GP), tg),
          Vd = new Ep.i(td, (dd => {
            console.warn(`${IW} image ${dd.key.kind}:${dd.key.index}:${dd.key.word} failed`, dd.error)
          }));
        BP = Vd, sP = new zp(Md, td, ((dd, Jd) => {
          void 0 === Jd ? console.warn(`${IW} ${dd}`) : zg(dd, Jd)
        }));
        const zd = new wp.m(cd, function(dd, Jd) {
          let pd = !1,
            Nd = null,
            Wd = null;
          const Pd = {
              onUnavailable: (kd, pd) => {
                Wd ??= XC({
                  site: ak.MODEL_POOL_SITE,
                  error: kd,
                  urls: pd
                }, (() => {
                  (0, ak.reportModelPoolFailure)(kd, dd)
                }), Jd)
              },
              onDecoderFailed: (kd, pd) => {
                const Nd = () => {
                  (0, ak.reportDracoDecoderFailure)(kd, dd)
                };
                void 0 !== pd ? XC({
                  site: ak.MODEL_POOL_SITE,
                  error: kd,
                  urls: pd
                }, Nd, Jd) : Nd()
              },
              onWorkerLost: Jd => {
                (0, ak.reportWorkerLost)(ak.MODEL_POOL_SITE, Jd, dd)
              },
              onModuleRetry: (Jd, kd) => {
                (0, ak.reportModelsModuleRetry)(Jd, kd, dd)
              }
            },
            Zd = kd.e(42).then((() => kd(43280))).then((dd => {
              let {
                pageModelPool: Jd
              } = dd;
              if (pd) return null;
              const kd = Jd(Pd);
              return Nd = kd.unlisten, vP = kd.pool, kd.pool
            }), (dd => (pd || Pd.onUnavailable(dd, void 0), null)));
          return xP = () => {
            var dd;
            pd = !0, null === (dd = Nd) || void 0 === dd || dd(), vP = null
          }, (dd, Jd) => Zd.then((kd => {
            var pd;
            return null !== (pd = null === kd || void 0 === kd ? void 0 : kd.build(dd, Jd)) && void 0 !== pd ? pd : (0, kN.r)(dd, "the model workers did not load")
          })).then((dd => null !== Wd && (0, kN.i)(dd) ? Wd.then((() => dd)) : dd))
        }(ad, Td), (dd => {
          dd.startup ? (qC(), XC({
            site: ak.MODEL_FEED_SITE,
            error: dd.error,
            urls: "" === dd.url ? void 0 : [dd.url]
          }, (() => {
            (0, ak.reportModelFailure)(dd, ad)
          }))) : (0, ak.reportModelFailure)(dd, ad)
        }), {
          onWritten: (dd, Jd) => {
            Vd.glbWritten(dd, Jd)
          },
          onTaken: (dd, Jd) => {
            Vd.glbTaken(dd, Jd)
          },
          onPackFileFailed: (dd, Jd) => {
            console.warn(`${IW} the texture pack's model file ${dd} failed: the shipped one loads`, Jd)
          }
        });
        GP = zd;
        const Hd = new rp.e(Md);
        wW = Hd, Hd.swap((dd => {
          const Jd = () => {
            (0, ak.reportTerrainTextureFailure)(dd, ad)
          };
          if (YZ) return void Jd();
          const kd = () => !YZ,
            pd = null === dd.url ? void 0 : [dd.url];
          XC({
            site: kk.C,
            error: dd.error,
            urls: pd
          }, Jd, kd)
        })).then((dd => {
          null !== dd && (dd || Md.isStopped || console.warn(`${IW} the core refused the terrain textures: terrain draws untextured`), mP(Md))
        }));
        const wd = new yJ(Md, ((dd, Jd) => {
          console.warn(`${IW} ${dd}`, ...void 0 === Jd ? [] : [Jd])
        }));
        wd.feed(), null !== od && function(dd, Jd, pd, Nd, Wd, Pd) {
          let Zd = null,
            gd = null,
            Cd = !1;
          const Kd = {
            textures: null,
            stop: () => {
              var dd, Jd;
              Cd = !0, null === (dd = gd) || void 0 === dd || dd(), null === (Jd = Zd) || void 0 === Jd || Jd(), dN.b.setSettled(null), null !== JP && AZ.clear(JP)
            }
          };
          HW = Kd, gd = Hg().follow((gd => {
            null !== gd && Promise.all([kd.e(194), kd.e(45)]).then((() => kd(43245))).then((kd => {
              let {
                PackTextures: od
              } = kd;
              if (Cd || dd.isStopped) return;
              const ld = new od({
                feed: gd,
                terrain: Jd,
                backend: pd,
                stopped: () => dd.isStopped,
                landed: () => {
                  mP(dd)
                },
                packSwapped: () => {
                  (0, Ap.h)(Nd), Pd.feed((() => async function(dd) {
                    const Jd = null === dd ? null : await dd.averageColours;
                    return null === Jd ? DJ() : UJ(Jd)
                  }(ld.assets))), (0, Hp.k)(ld.files()), Wd.refresh().then((dd => {
                    null !== dd && console.info(`${IW} texture pack models: ${dd.resent} of ${dd.delivered} files written again, ${dd.refetched} refetched`)
                  }))
                },
                settled: (dd, Jd, kd) => {
                  var pd;
                  (dN.b.setSettled({
                    state: dd,
                    files: Jd
                  }), null === dd.gameSource && (0, Ik.e)(dd.pack, kd), kd) || function(dd) {
                    const Jd = JP;
                    null !== Jd && AZ.apply(Jd, dd).then((Jd => {
                      Jd && dd && console.info(`${IW} the texture pack's animations are in (${Object.keys(dd).length} files)`)
                    }))
                  }(null === (pd = dd.pack) || void 0 === pd ? void 0 : pd.animations)
                },
                settling: () => {
                  dN.b.setSettled(null)
                },
                warn: zg,
                maxTextureSize: () => Promise.resolve((0, Jk.R)(document.createElement("canvas")))
              });
              Kd.textures = ld, Zd = ld.start()
            }), (dd => {
              console.warn(`${IW} the texture pack's terrain didn't load: the built atlas stays`, dd)
            }))
          }))
        }(Md, Hd, od, Vd, zd, wd);
        const Ad = () => {
            Md.setTextureLayers("")
          },
          dJ = dd => {
            (vJ ??= kd.e(51).then((() => kd(43282))).then((dd => {
              let {
                TEXTURE_NAMES: Jd
              } = dd;
              return Jd
            }), (dd => {
              throw vJ = null, dd
            })), vJ).then((dd => {
              Md.setTextureLayers(dd) || Md.isStopped || (console.warn(`${IW} the core refused the texture names: textured Boxes draw textureNotFound`), Ad())
            }), (Jd => {
              if (Md.isStopped) return;
              const [kd, ...pd] = dd;
              void 0 === kd ? XC({
                site: ak.TEXTURE_NAMES_SITE,
                error: Jd
              }, (() => {
                console.warn(`${IW} the texture names didn't load, so textured Boxes draw textureNotFound`, Jd), Ad()
              }), Td) : setTimeout((() => {
                dJ(pd)
              }), kd)
            }))
          };
        if (dJ(UW), null !== od && !await async function(dd, Jd, kd, pd, Wd, Pd) {
            var Zd;
            const gd = (0, Jk.C)(kd);
            if (null === gd) return dd.crash(vW, new Error(`this ${pd} build has no openRenderer`)), !1;
            let Cd;
            eZ = gd;
            try {
              var Kd, od, ld, Qd;
              const Nd = null !== (Kd = null === (od = uW) || void 0 === od ? void 0 : od.pagePreviews()) && void 0 !== Kd ? Kd : null,
                Zd = null !== (ld = null === (Qd = uW) || void 0 === Qd ? void 0 : Qd.previewModule(kd)) && void 0 !== ld ? ld : null;
              if (null === Nd || null === Zd) {
                null === Nd || void 0 === Nd || Nd.endSession(!1), Cd = (0, mJ.d)().sampleCount, await (0, Jk.f)(Jd, gd, Pd, rg, Cd, await Wd);
                const dd = (0, Jk.h)(kd);
                null === dd && console.warn(`${IW} this ${pd} build has no image registry: sky and model images won't show`), (0, hp.h)(dd)
              } else {
                (0, CN.d)() && await (0, rd.l)();
                const kd = (0, CN.L)();
                if (null !== kd) {
                  const Jd = (0, Jk.M)(gd);
                  return dd.crash(ak.RENDER_RELOAD_SITE, new Error(`${kd}${void 0===Jd?"":` (${Jd.message})`}`)), !1
                }
                Cd = await Nd.bindSession(Zd, Jd, (async dd => (0, Jk.s)(gd, vW, Pd, dd, rg, await Wd)))
              }
            } catch (Nd) {
              return dd.crash(vW, Nd), !1
            }(function(dd, Jd) {
              const kd = dd,
                {
                  requestCapture: pd,
                  takeCapture: Nd
                } = kd;
              if ("function" !== typeof pd || "function" !== typeof Nd) return;
              const Wd = {
                request() {
                  pd.call(kd, Jd)
                },
                take() {
                  var dd;
                  return null !== (dd = Nd.call(kd)) && void 0 !== dd ? dd : null
                }
              };
              window[eN] = Wd
            })(Jd, Cd), BZ = Cd, LZ = !0;
            const Ld = performance.now();
            return OZ.boundAtMs = null !== (Zd = (0, CN.P)()) && void 0 !== Zd ? Zd : Ld, OZ.indirectHangs = (0, CN.C)(), console.info(`${IW} ${pd} renderer bound at ${Math.round(Ld)} ms`), !dd.isStopped
          }(Md, sd, xd, od, Qd, Od)) return null;
        if (null !== od) {
          var JJ, kJ, pJ;
          (0, oJ.N)(od);
          const dd = () => !Md.isStopped && RC();
          kd.e(186).then((() => kd(9117))).then((Jd => {
            let {
              devTools: kd
            } = Jd;
            Md.isStopped || kd.setHost(function(dd) {
              return {
                tools: gN,
                async downloadScene(Jd, kd) {
                  let {
                    width: pd,
                    height: Nd,
                    colouring: Wd
                  } = kd;
                  "screenshot" === Jd && null === Wd ? await (0, WN.b)(dd, pd, Nd) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(dd, Jd) {
              return {
                canvas: dd,
                maxTextureSize: PN,
                drawing: Jd,
                resize: (dd, Jd) => {
                  (0, Yk.A)(TJ.ub.Resize, 0, dd, Jd, (0, Yk.k)(1))
                },
                restoreSize: () => {
                  const Jd = (0, mJ.n)(dd);
                  null !== Jd && (0, Yk.A)(TJ.ub.Resize, 0, Jd.cssWidth, Jd.cssHeight, (0, Yk.k)(Jd.renderScale))
                },
                onFrameDrawn: dd => (ZN.add(dd), () => {
                  ZN.delete(dd)
                })
              }
            }(Od, dd)))
          }), (dd => {
            console.warn(`${IW} the developer tools didn't load: no captures this session`, dd)
          }));
          const Jd = "webgpu" === od && null !== (JJ = null === Cd || void 0 === Cd || null === (kJ = Cd.adapter) || void 0 === kJ ? void 0 : kJ.vendor) && void 0 !== JJ ? JJ : null;
          sZ = {
            backend: od,
            canvas: Od,
            fallbackReason: null !== (pJ = null === Cd || void 0 === Cd ? void 0 : Cd.reason) && void 0 !== pJ ? pJ : null,
            adapterVendor: Jd
          }, pC();
          try {
            (0, zk.r)(od, Od, Jd)
          } catch (Nd) {
            (0, zk.v)(), console.error(`${IW} the quality steps didn't start`, Nd)
          }
        }
        const {
          storagePullBreaks: NJ,
          splitPassBreaks: WJ
        } = await Qd;
        WJ && console.warn(`${IW} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const QJ = NJ ? hd.d : (0, hd.j)(Cd, (0, MJ.i)());
        if ((0, jN.m)("webgpuloss")) {
          var IJ, GJ;
          const dd = {
            backend: od,
            reason: null !== (IJ = null === Cd || void 0 === Cd ? void 0 : Cd.reason) && void 0 !== IJ ? IJ : null,
            source: null !== (GJ = null === Cd || void 0 === Cd ? void 0 : Cd.source) && void 0 !== GJ ? GJ : null,
            storagePullBreaks: NJ,
            noWebGpu: QJ.messageKey
          };
          (0, XN.d)((Jd => {
            Jd.noteWasmPick(dd)
          }))
        }
        const qJ = "webgpu" === od && !NJ;
        if (aP = (0, hd.l)(qJ ? Md : null, qJ && null !== (Pd = null === (Zd = uW) || void 0 === Zd ? void 0 : Zd.pagePreviews().EQ) && void 0 !== Pd ? Pd : null, QJ, zg), hZ) return null;
        if (fd.reserveAtJoin((0, Dp.r)(null !== md && void 0 !== md ? md : ek.e)), Md.isStopped) return null;
        const sJ = dd => {
          if (null !== iZ) try {
            iZ.animationFrame(dd)
          } catch (Nd) {
            PC(Nd)
          }
          if (function(dd, Jd) {
              return Jd && !hZ && !XP && IC() && RC() && dd.framePaces(performance.now())
            }(Md, DZ)) {
            if (Md.writePendingInput(), (0, qd.i)(dd, lC), NC(!1, dd), null !== iZ) try {
              iZ.framePaced()
            } catch (Nd) {
              PC(Nd)
            }
            requestAnimationFrame(sJ)
          } else oC(Md, DZ, "budget") && ((0, YJ.h)(Md.lastFrameKind) && RC() && (0, qd.i)(dd, lC), NC(DZ && nZ, dd), UZ.frame(Md.lastFrameKind, DZ && RC(), dd), sC(Md), fd.afterFrame(), requestAnimationFrame(sJ))
        };
        requestAnimationFrame(sJ);
        return function(dd) {
          if (dd.has("inputLog") && (0, Wp.i)((dd => {
              let {
                action: Jd,
                down: kd,
                press: pd
              } = dd;
              console.info(`${Zp} input ${Jd} ${kd?"down":"up"} press ${pd} at ${performance.now().toFixed(1)}`)
            })), dd.has("inputDump")) {
            const dd = [];
            Cp = dd, Object.assign(window, {
              bloxdInputDump: () => dd.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), eP = function(dd, Jd) {
          let kd = null;
          const pd = () => {
              null !== kd && (clearInterval(kd), kd = null)
            },
            Nd = () => {
              document.hidden ? kd ??= setInterval((() => {
                oC(dd, !1, "budget") ? (sC(dd), Jd.afterFrame()) : pd()
              }), nW) : pd()
            };
          return document.addEventListener("visibilitychange", Nd), Nd(), () => {
            pd(), document.removeEventListener("visibilitychange", Nd)
          }
        }(Md, fd), Md
      }(Jd).then((dd => {
        var Jd;
        (pd(dP), NP(null !== dd), null !== dd && (xN = performance.now()), kP(dd), null === dd) ? null === (Jd = uW) || void 0 === Jd || Jd.pagePreviews().endSession(null === (0, ZJ.l)()): YP("booted")
      }), (dd => {
        pd(dP), NP(!1), kP(null), BC({
          site: xW,
          error: dd,
          header: null
        }, dP)
      }))
    }

    function wZ() {
      const dd = JP;
      null !== dd && rZ().then((Jd => {
        let {
          pageBuiltInAnimationPack: kd
        } = Jd;
        kd().provide(dd)
      }), (dd => {
        console.warn(`${IW} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, dd)
      }))
    }
    const AZ = new class {
      constructor(dd) {
        this.deps = dd, this.latest = 0, this.EC = null
      }
      apply(dd, Jd) {
        return this.load(dd, Jd, 0)
      }
      async load(dd, Jd, kd) {
        var pd;
        const Nd = ++this.latest,
          Wd = this.deps.compiler;
        if (void 0 === Jd || null === Jd || "object" !== typeof Jd || 0 === Object.keys(Jd).length || null === Wd) return this.drop(dd), !1;
        if ((null === (pd = this.EC) || void 0 === pd ? void 0 : pd.module) === dd && (0, zJ.le)(this.EC.files, Jd)) return !1;
        try {
          const [kd, pd] = await Promise.all([Wd(), this.deps.builtIns()]);
          if (Nd !== this.latest) return !1;
          const Pd = await kd(Jd, dk, {
            builtIns: pd
          });
          if (Nd !== this.latest) return !1;
          const Zd = this.call(dd, Pd);
          if (void 0 === Zd) throw new AJ("the compiled animations didn't read against the built-in pack");
          return this.EC = {
              module: dd,
              files: Jd
            },
            function(dd) {
              for (let Jd = 0; Jd + 2 < dd.length; Jd += 3) {
                ("error" === dd[Jd] ? console.error : console.warn)(`Animation for the texture pack: ${dd[Jd+1]}: ${dd[Jd+2]}`)
              }
            }(Zd), !0
        } catch (Zd) {
          var Pd;
          if (Nd !== this.latest) return !1;
          this.drop(dd), 0 === kd && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", Zd);
          const pd = (null !== (Pd = this.deps.retryAfterMs) && void 0 !== Pd ? Pd : wJ)[kd];
          return void 0 === pd || Zd instanceof AJ || (0, HJ.j)(dd) || setTimeout((() => {
            Nd === this.latest && this.load(dd, Jd, kd + 1)
          }), pd), !1
        }
      }
      call(dd, Jd) {
        try {
          return dd.Lpd(Jd)
        } catch (kd) {
          throw (0, HJ.k)(dd, kd), kd
        }
      }
      clear(dd) {
        this.latest++, this.drop(dd)
      }
      drop(dd) {
        const Jd = this.EC;
        if (this.EC = null, (null === Jd || void 0 === Jd ? void 0 : Jd.module) === dd && !(0, HJ.j)(dd)) try {
          this.call(dd, null)
        } catch {}
      }
    }({
      compiler: rJ.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: dd
        } = await rZ();
        return dd().whenSet()
      },
      warn: zg
    });
    async function dg(dd, Jd) {
      let pd = !1;
      await Jg({
        matchmake: async () => {
          const {
            guestJoinTarget: Nd,
            guestJoinWithPack: Wd
          } = await kd.e(343).then((() => kd(43215)));
          return pd ? Nd(dd, Jd, Ag()) : (pd = !0, Wd(dd, Jd, (Jd => dC(dd, Jd)), Ag))
        },
        onFailure: dd => {
          (0, ak.showJoinFailure)(dd, dP)
        },
        rejoin: eg,
        invalidateTrafficCode: Rg
      })
    }
    async function Jg(dd) {
      let {
        matchmake: Jd,
        onFailure: kd,
        rejoin: Nd,
        invalidateTrafficCode: Wd,
        pageReady: Pd,
        signal: Zd
      } = dd;
      const gd = () => !0 === (null === Zd || void 0 === Zd ? void 0 : Zd.aborted);
      let Cd;
      const Kd = dN.b.rejoinHold();
      VP = null;
      const od = (0, qk.L)("wasm", FC);
      let ld = !1,
        Qd = performance.now();
      try {
        if (!await WP) return {
          kind: "stopped"
        };
        if (gd()) return {
          kind: "CJ"
        };
        uZ().catch((() => {}));
        let dd = await Jd();
        var Od, ed;
        if (Qd = performance.now(), !gd()) MC(null !== (Od = null === (ed = dd.target.session) || void 0 === ed ? void 0 : ed.gameNameWithVariation) && void 0 !== Od ? Od : null);
        const kd = () => performance.now() - dd.matchedAt <= dd.freshMs,
          pd = pg(dd.target).catch((() => {}));
        kd() && !gd() && (Cd = new jp(dd.target, {
          signal: Zd
        }));
        const Wd = performance.now();
        if (null === await pP) return {
          kind: "stopped"
        };
        var Rd, Id;
        if (function(dd) {
            var Jd, kd;
            if (RN.e.markGameEngineConstructed(), qN) return;
            qN = !0;
            const pd = Math.max(dd, null !== (Jd = GN) && void 0 !== Jd ? Jd : dd);
            (0, IN.e)("ready", Math.max(0, (null !== (kd = vN) && void 0 !== kd ? kd : pd) - pd) / 1e3)
          }(Wd), !gd())
          if (null !== vN && null !== xN ? ((0, Ld.l)("wasm_loaded", vN), (0, Ld.l)("wasm_core_ready", xN)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), dd.target.session && function(dd) {
              const Jd = (0, zJ._b)(dd);
              return "classic" !== Jd ? cN.has(Jd) : !(0, NJ.i)(dd) && !hN.has((0, zJ.Vb)(dd))
            }(dd.target.session.gameNameWithVariation)) null === (Rd = CP) || void 0 === Rd || Rd.prestart();
        if (await pd, !kd() && !gd()) null === (Id = Cd) || void 0 === Id || Id.rematched(), dd = await Jd(), Qd = performance.now();
        if (gd()) return {
          kind: "CJ"
        };
        const Kd = await async function(dd) {
          var Jd, kd, pd;
          let {
            signal: Nd,
            rejoin: Wd = null,
            early: Pd,
            pageReady: Zd
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Nd && void 0 !== Nd && Nd.aborted) throw new DOMException("the join was left", "AbortError");
          const gd = (Cd = NZ, Kd = performance.now(), null !== Cd && Kd - Cd < vp);
          var Cd, Kd;
          NZ = null;
          const od = new AbortController,
            ld = null !== (Jd = null === (kd = dd.session) || void 0 === kd ? void 0 : kd.gameNameWithVariation) && void 0 !== Jd ? Jd : null;
          MC(ld), Pg({
            controller: od,
            game: ld
          }), WZ = null, null === (pd = gZ) || void 0 === pd || pd.abort(), gZ = null, KZ = !1, oZ = null, lZ.clear();
          const Qd = () => {
            (0, qJ.e)(od, (0, qJ.c)(Nd))
          };
          null === Nd || void 0 === Nd || Nd.addEventListener("abort", Qd, {
            once: !0
          });
          try {
            var Od, ed, Rd;
            const Jd = await pP;
            if (null === Jd || Jd.isStopped || hZ) throw new Error("no core is running to join a game with");
            if (dd.session && null !== aP) {
              const Jd = await Ng(aP.join(dd.session.gameNameWithVariation), od.signal);
              if ((0, jN.m)("webgpuloss")) {
                const kd = dd.session.gameNameWithVariation,
                  pd = aP.couldntRunInJoinedGame();
                (0, XN.d)((dd => dd.noteWasmJoin(kd, Jd, pd)))
              }
              if (null !== Jd) throw new hd.f(Jd)
            }
            const [, , , {
              joinRoom: kd
            }] = await Ng(Promise.all([(0, Bd.o)(Jd), pg(dd), null === Zd || void 0 === Zd ? void 0 : Zd(), uZ()]), od.signal), pd = dd.session, Nd = pd ? {
              ...vg,
              attachSocket: Jd => {
                const kd = Mg(Jd, dd.endpoint);
                var Nd;
                null !== kd && (HP = {
                  conn: kd,
                  info: pd
                }, null === (Nd = wP) || void 0 === Nd || Nd(pd.playerDbId));
                return kd
              }
            } : vg, Cd = await kd(Nd, dd, {
              signal: od.signal,
              early: Pd
            }).catch((dd => {
              throw function(dd) {
                if (!(dd instanceof Xd.d)) return dd;
                if ("roomError" === dd.stage && null !== oZ) return kg(new Xd.d(dd.message, dd.stage, dd.code, oZ), dd);
                const Jd = "closed" === dd.stage && null !== PZ ? lZ.get(PZ.conn) : void 0;
                return void 0 === Jd ? dd : kg(new Xd.d(dd.message, dd.stage, Jd.code), dd)
              }(dd)
            }));
            if (tP !== od) throw Cd.leave(), new DOMException("the join was left", "AbortError");
            gg(Cd), null === (Od = oP) || void 0 === Od || Od.newGame();
            const Kd = function(dd) {
              var Jd, kd;
              const {
                session: pd
              } = dd, Nd = void 0 === pd ? dd.joinOptions.lobbyName : pd.lobbyName;
              return {
                endpoint: dd.endpoint,
                game: null !== (Jd = null === pd || void 0 === pd ? void 0 : pd.gameNameWithVariation) && void 0 !== Jd ? Jd : dd.roomName,
                lobby: String(null !== Nd && void 0 !== Nd ? Nd : null),
                postCookies: null !== (kd = dd.postCookies) && void 0 !== kd ? kd : null
              }
            }(dd);
            uP.set(Cd, Kd), Yp(Kd);
            const ld = performance.now(),
              Qd = {
                conn: Cd.conn,
                rejoin: Wd,
                game: null !== (ed = null === (Rd = dd.session) || void 0 === Rd ? void 0 : Rd.gameNameWithVariation) && void 0 !== ed ? ed : "",
                joinedAt: ld,
                rejoinedAt: gd ? ld : null,
                overflow: null
              };
            AP = Qd,
              function(dd, Jd) {
                fg();
                const kd = {
                  endpoint: Jd,
                  roomId: dd.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Qk({
                    reconnect: (dd, Jd, pd) => async function(dd, Jd, kd, pd) {
                      const {
                        roomId: Nd,
                        roomToken: Wd
                      } = Ug(dd, Jd), Pd = VW;
                      if (null === Pd || Pd.isStopped || hZ) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: Zd
                      } = await Ng(uZ(), kd), gd = {
                        ...vg,
                        attachSocket: Jd => dZ !== dd || 0 === dd.heldConn ? (Jd.close(), null) : Mg(Jd, dd.endpoint, !0)
                      };
                      return Zd(gd, dd.endpoint, Nd, Wd, {
                        signal: kd,
                        onAttached: pd
                      })
                    }(kd, dd, Jd, pd),
                    releaseSeat: dd => {
                      !async function(dd, Jd) {
                        const {
                          roomId: kd,
                          roomToken: pd
                        } = Ug(dd, Jd);
                        try {
                          const {
                            leaveHeldSeat: Jd
                          } = await uZ();
                          await Jd(dd.endpoint, kd, pd)
                        } catch (Nd) {
                          console.warn(`${IW} the held seat of a game left while it reconnected couldn't be released`, Nd)
                        }
                      }(kd, dd)
                    },
                    isLive: () => dZ === kd && null !== AP && !hZ,
                    SF: dd => {
                      pZ = dd, Xg()
                    },
                    onReconnected: dd => {
                      ! function(dd) {
                        const Jd = rP;
                        if (null !== Jd && Jd !== dd) {
                          const kd = uP.get(Jd);
                          void 0 !== kd && uP.set(dd, kd), fZ === Jd && (fZ = dd), Jd.detach()
                        }
                        gg(dd)
                      }(dd)
                    },
                    onGaveUp: (dd, Jd) => {
                      ! function(dd, Jd, kd) {
                        var pd, Nd;
                        console.warn(`${IW} gave up reconnecting (${kd.reason}, ${kd.attempts} attempts)`, kd.lastError), (0, ak.reportReconnectGaveUp)(kd, dP);
                        const Wd = null !== (pd = null === (Nd = AP) || void 0 === Nd ? void 0 : Nd.rejoin) && void 0 !== pd ? pd : null;
                        ng(dd, "gaveUp"), Kg();
                        const Pd = {
                          code: dd.dropCode,
                          name: null,
                          reason: SW,
                          canReconnect: !Jd,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Gg(Pd, Jd ? null : Wd, !1, {
                          reasonKey: jW,
                          canPlayAgain: Jd
                        })
                      }(kd, dd, Jd)
                    }
                  })
                };
                dZ = kd, null !== JZ && JZ.conn === dd.conn && kd.resume.onInitialInfo(JZ)
              }(Cd, dd.endpoint), performance.mark(sW), (0, Ld.l)("wasm_joined", ld), setTimeout((() => {
                rP === Cd && (0, Ld.h)()
              }), 0), wZ(), console.info(`${IW} joined ${dd.roomName} as ${Cd.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const Id = WZ;
            WZ = null, null !== Id && Qg(Qd, Id.mask, Id.frames);
            const Gd = lZ.get(Cd.conn);
            return lZ.clear(), void 0 !== Gd && (gg(null), Ig(Cd.conn, Gd.code, Gd.reason)), Cd
          } finally {
            var Id;
            null === Nd || void 0 === Nd || Nd.removeEventListener("abort", Qd), tP === od && Zg(rP, null), (null === (Id = PZ) || void 0 === Id ? void 0 : Id.join) === od && (PZ = null)
          }
        }(dd.target, {
          signal: Zd,
          rejoin: Nd(dd.target),
          early: Cd,
          pageReady: Pd
        });
        return ld = !0, {
          kind: "joined",
          game: Kd
        }
      } catch (vd) {
        if (vd instanceof DOMException && "AbortError" === vd.name || gd()) return {
          kind: "CJ"
        };
        if (hZ) return {
          kind: "stopped"
        };
        if (KZ && (KZ = !1, await Wd().catch((dd => {
            console.warn(`${IW} the cached traffic code could not be dropped`, dd)
          }))), null === await pP) return {
          kind: "stopped"
        };
        if (vd instanceof hd.f) return kd(vd, performance.now() - Qd), {
          kind: "failed",
          error: vd,
          reloading: !1
        };
        if (vd instanceof Xd.d && vd.code === pd.e.wasmClientNotAllowed.code && yZ) return hg("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: vd,
          reloading: !0
        };
        const dd = vd instanceof Xd.d && vd.code === pd.e.outdatedVersion.code,
          Jd = () => null === rP,
          Nd = await XC({
            site: ak.JOIN_SITE,
            error: vd,
            outdated: dd
          }, (() => {
            kd(vd, performance.now() - Qd)
          }), Jd);
        return {
          kind: "failed",
          error: vd,
          reloading: Nd
        }
      } finally {
        var Gd;
        ld || od.end(), dN.b.releaseHold(Kd);
        const dd = null === (Gd = Cd) || void 0 === Gd ? void 0 : Gd.release();
        dd && (0, ak.reportUnusedSeat)(dd, dP)
      }
    }

    function kg(dd, Jd) {
      return dd.stack = Jd.stack, dd
    }

    function pg(dd) {
      return dd.session ? (0, Bd.v)(AW, dd.session.gameNameWithVariation) : Promise.resolve()
    }

    function Ng(dd, Jd) {
      return (0, qJ.j)(Jd), new Promise(((kd, pd) => {
        const Nd = () => {
          pd((0, qJ.c)(Jd))
        };
        Jd.addEventListener("abort", Nd, {
          once: !0
        }), dd.then((dd => {
          Jd.removeEventListener("abort", Nd), kd(dd)
        }), (dd => {
          Jd.removeEventListener("abort", Nd), pd(dd)
        }))
      }))
    }

    function Wg() {
      Pg(null)
    }

    function Pg(dd) {
      var Jd, kd, pd;
      (function() {
        const dd = dZ;
        null !== dd && ng(dd, "left")
      }(), null === ZP || ZP.left) || (ZP.left = !0, null === (pd = (0, Bd.k)()) || void 0 === pd || pd.socketLeft(), (0, ld.r)({
        websocketUrl: null
      }));
      tP && (0, qJ.e)(tP, new DOMException("the join was left", "AbortError")), Kg(null !== dd), null === (Jd = aP) || void 0 === Jd || Jd.leave();
      const Nd = rP;
      null !== dd && dN.b.setGame(dd.game), Zg(null, null !== (kd = null === dd || void 0 === dd ? void 0 : dd.controller) && void 0 !== kd ? kd : null), null === Nd || void 0 === Nd || Nd.leave(), Cg(0), (0, IJ.d)()
    }

    function Zg(dd, Jd) {
      rP = dd, tP = Jd, null === rP && null === tP && dN.b.setGame(void 0)
    }

    function gg(dd) {
      Zg(dd, tP)
    }

    function Cg(dd) {
      const Jd = VW;
      return null !== DW && !hZ && null !== Jd && !Jd.isStopped && (!!DW(Xd.i, 0, (0, Xd.A)(dd)) && (UP = !0, 0 === dd || XP || oC(Jd, !1, "all"), !0))
    }

    function Kg() {
      var dd, Jd;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, qk.e)();
      const kd = null !== (dd = null === (Jd = AP) || void 0 === Jd ? void 0 : Jd.overflow) && void 0 !== dd ? dd : null;
      AP = null, null !== kd && (0, ak.reportEventOverflow)(kd, dP)
    }

    function og() {
      null !== rP || null !== tP ? Wg() : Fg()
    }

    function lg(dd, Jd) {
      console.warn(`${IW} the event buffer refused records in ${Jd} frames (categories ${dd})`), hZ || (null !== AP ? Qg(AP, dd, Jd) : null !== tP && function(dd, Jd, kd) {
        var pd;
        const Nd = function(dd, Jd) {
          return null === dd ? "drop" : dd.activated ? "keep" : 0 !== (Jd & EJ.p.NetSession) ? "fail" : "drop"
        }((null === (pd = PZ) || void 0 === pd ? void 0 : pd.join) === dd ? PZ : null, Jd);
        "keep" === Nd ? WZ = {
          mask: Jd,
          frames: kd
        } : "fail" === Nd && (0, qJ.e)(dd, new Error("the join's net session was lost to an event overflow"))
      }(tP, dd, Jd))
    }

    function Qg(dd, Jd, kd) {
      const pd = dd.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      pd.frames += kd, pd.acks++, pd.mask |= Jd;
      const Nd = function(dd, Jd, kd) {
        if (0 === (dd & EJ.p.NetSession)) return "none";
        const pd = null !== Jd.rejoinedAt && kd - Jd.rejoinedAt < xp;
        return null === Jd.rejoin || pd ? "fail" : "rejoin"
      }(Jd, dd, performance.now());
      "none" !== Nd && queueMicrotask((() => {
        if (AP !== dd) return;
        const Jd = "rejoin" === Nd && performance.now() - ZZ >= jd.h;
        pd.outcome = Jd ? "rejoined" : "failed", Gg(function(dd, Jd) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: dd,
            automaticallyReconnect: Jd,
            requiresRefresh: !1
          }
        }(null !== dd.rejoin, Jd), dd.rejoin, Jd), Wg(), Jd && (NZ = performance.now())
      }))
    }

    function Lg(dd) {
      DZ = dd, TZ && Og(TZ, dd)
    }

    function Og(dd, Jd) {
      dd.style.visibility = Jd ? "visible" : "hidden"
    }

    function eg(dd) {
      var Jd;
      const kd = dd.roomName,
        pd = null !== (Jd = dd.joinOptions.lobbyName) && void 0 !== Jd ? Jd : null;
      return () => {
        dg(kd, pd)
      }
    }

    function Rg() {
      return kd.e(343).then((() => kd(43215))).then((dd => {
        let {
          invalidateGuestTrafficCode: Jd
        } = dd;
        return Jd()
      })).catch((dd => {
        console.warn(`${IW} the cached traffic code could not be dropped`, dd)
      }))
    }

    function Ig(dd, Jd, kd) {
      var Nd, Wd;
      let Pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (hZ) return;
      if ((null === (Nd = AP) || void 0 === Nd ? void 0 : Nd.conn) !== dd) return void(null !== tP && lZ.set(dd, {
        code: Jd,
        reason: kd
      }));
      const {
        rejoin: Zd,
        game: gd,
        joinedAt: Cd
      } = AP;
      Kg(), fg();
      const Kd = (0, jd.k)(Jd, (0, Bp.f)(dd));
      if (console.info(`${IW} the game's connection closed with code ${Jd} (${null!==(Wd=Kd.name)&&void 0!==Wd?Wd:"unrecognised"})`), Jd === pd.e.gameOrPluginKick.code || Pd || (0, ak.reportDisconnect)(Kd, dP, {
          closeReason: kd,
          sinceJoinedMs: performance.now() - Cd,
          game: gd
        }), Kd.requiresRefresh) {
        const dd = "outdatedVersion" === Kd.name,
          kd = new Error(`the game's connection closed with code ${Jd}`),
          pd = () => null === AP && null === tP;
        return void XC({
          site: ak.JOIN_SITE,
          error: kd,
          outdated: dd
        }, (() => {
          pd() && Gg(Kd, null, !1)
        }), pd)
      }
      const od = Kd.canReconnect ? Zd : null,
        ld = null !== od && Kd.automaticallyReconnect && performance.now() - ZZ >= jd.h;
      Gg(Kd, od, ld)
    }

    function Gg(dd, Jd, kd) {
      var pd;
      let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (EZ) return;
      dN.b.unwantedLeave(kd && null !== Jd && 0 === CZ.size), null === (pd = gZ) || void 0 === pd || pd.abort();
      const Wd = new AbortController;
      gZ = Wd;
      const Pd = null === Jd ? null : () => {
        Wd.signal.aborted || (Wd.abort(), Jd())
      };
      if (kd && null !== Pd) {
        ZZ = performance.now();
        const dd = setTimeout(Pd, jd.e);
        Wd.signal.addEventListener("abort", (() => {
          clearTimeout(dd)
        }))
      }
      const Zd = {
        code: dd.code,
        name: dd.name,
        reason: dd.reason,
        reasonKey: Nd.reasonKey,
        reconnect: Pd,
        reconnecting: kd,
        requiresRefresh: dd.requiresRefresh,
        canPlayAgain: Nd.canPlayAgain
      };
      if (CZ.size > 0)
        for (const Cd of [...CZ]) try {
          Cd(Zd)
        } catch (gd) {
          console.error(`${IW} an unwanted-leave listener threw`, gd)
        } else Ip((0, Op.g)(dd, null !== Pd, kd), Wd.signal).then((Jd => {
          Jd && (null !== Pd ? Pd() : dd.requiresRefresh && (0, rd.i)())
        }))
    }
    const vg = {
      attachSocket: dd => Mg(dd),
      onConnection: dd => (QZ.add(dd), () => {
        QZ.delete(dd)
      }),
      sendRaw: (dd, Jd) => {
        const kd = ZP;
        return null !== kd && kd.conn === dd && xC(kd, Jd)
      },
      leaveRoom: Cg,
      closeSocket: dd => {
        var Jd;
        (null === (Jd = ZP) || void 0 === Jd ? void 0 : Jd.conn) === dd && Fg()
      },
      flushNet: Yg
    };

    function xg(dd) {
      var Jd;
      let {
        aux: kd,
        payload: pd
      } = dd;
      null === (Jd = VW) || void 0 === Jd || Jd.queueOptions(kd, pd)
    }

    function qg(dd, Jd) {
      xg(function(dd, Jd) {
        return lN = dd ? {
          preventMovement: Jd
        } : null, dd ? QN(Jd) : {
          aux: TJ.$b.AdEnd,
          payload: oN
        }
      }(dd, Jd))
    }

    function Bg(dd) {
      var Jd;
      EP = dd, null === (Jd = VW) || void 0 === Jd || Jd.setUiPrefs(dd)
    }

    function sg(dd, Jd) {
      AW.setMaster(dd, Jd)
    }

    function ig(dd) {
      var Jd;
      cP = dd, null === (Jd = VW) || void 0 === Jd || Jd.setEnvPrefs(dd)
    }

    function ag(dd) {
      var Jd;
      hP = dd, null === (Jd = VW) || void 0 === Jd || Jd.setLookPrefs(dd)
    }

    function Mg(dd) {
      var Jd;
      let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(dd.url).origin,
        pd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (dd.readyState === WebSocket.CLOSING || dd.readyState === WebSocket.CLOSED) return console.warn(`${IW} a closing or closed socket can't be attached`), null;
      const Nd = VW;
      if (!Nd || Nd.isStopped) return console.warn(`${IW} no core is running to attach a socket to`), dd.close(), null;
      if (null === (0, Bd.k)()) return console.warn(`${IW} the game has not started to attach a socket to`), dd.close(), null;
      if (bP > TJ.w) return console.warn(`${IW} this core has attached all the sockets it can; reload to play on`), dd.close(), null;
      if (UP && !XP && (oC(Nd, !1, "all"), Nd.isStopped || hZ)) return dd.close(), null;
      Fg();
      const Wd = bP++;
      if (!Tg(Nd, "open", Wd, pd ? TJ._b.Resume : 0)) return dd.close(), null;
      pd || RJ.b.reset(), PZ = null === tP ? null : {
        join: tP,
        conn: Wd,
        activated: !1
      }, dd.binaryType = "arraybuffer";
      const Pd = new Lk.b((() => {
          ! function(dd, Jd) {
            if (ZP !== Jd || dd.isStopped || null === Sg(Jd, mW)) return;
            Jd.detach(), ZP = null, bg(dd, Jd, mW, "", !0), Jd.ws.close()
          }(Nd, Zd)
        })),
        Zd = {
          ws: dd,
          conn: Wd,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: pd,
          token: null,
          detach: () => {
            Pd.dispose(), dd.removeEventListener("message", gd), dd.removeEventListener("open", Cd), dd.removeEventListener("close", Kd)
          }
        },
        gd = dd => {
          if (dd.data instanceof ArrayBuffer) {
            var Jd;
            const kd = new Uint8Array(dd.data);
            Pd.heard(), Zd.token = null !== (Jd = (0, Ok.d)(kd)) && void 0 !== Jd ? Jd : Zd.token,
              function(dd, Jd, kd) {
                mC(dd, (() => {
                  dd.rings.net.writeFrame(Jd, kd) || dd.crash(kk.q, `a socket frame of ${kd.byteLength} bytes did not fit the net-in ring`)
                }));
                const pd = dd.rings.net.cursor >= FW;
                (pd || dd.netWrittenSinceFrame >= MW || document.hidden && performance.now() - SP >= nW) && oC(dd, !1, "budget")
              }(Nd, Wd, kd)
          }
        },
        Cd = () => {
          pd || (0, Ld.l)("wasm_socket_open", performance.now());
          for (const Jd of Zd.pending.splice(0)) dd.send(Jd);
          Zd.pendingBytes = 0
        },
        Kd = dd => {
          if (ZP === Zd && Nd.rings.net.cursor > 0 && oC(Nd, !1, "all"), ZP === Zd) {
            if (Zd.detach(), ZP = null, bg(Nd, Zd, dd.code, dd.reason) || mg(Nd, Zd)) return;
            Tg(Nd, "close", Wd), jg(Wd, Zd.left), Ig(Wd, dd.code, dd.reason)
          }
        };
      return dd.addEventListener("message", gd), dd.addEventListener("open", Cd), dd.addEventListener("close", Kd), ZP = Zd, null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.socketAttached(Wd), (0, ld.r)({
        websocketUrl: kd
      }), Wd
    }

    function Fg() {
      const dd = ZP;
      if (!dd) return;
      const Jd = VW,
        kd = dd.resume;
      kd && (Yg(), ZP !== dd) || (ZP = null, dd.detach(), dd.ws.close(), null !== Jd && (mg(Jd, dd) || kd && bg(Jd, dd, bW)) || (null !== Jd && Tg(Jd, "close", dd.conn), jg(dd.conn, dd.left)))
    }

    function Yg() {
      const dd = VW;
      null !== dd && !dd.isStopped && !hZ && !XP && dd.rings.net.cursor > 0 && oC(dd, !1, "all")
    }

    function mg(dd, Jd) {
      var kd;
      if (!Jd.resume) return !1;
      const pd = dZ;
      return null !== pd && null !== Jd.token && "" !== Jd.token && (pd.pendingHold = {
        conn: Jd.conn,
        token: `${pd.roomId}:${Jd.token}`
      }), Tg(dd, "close", Jd.conn), null === (kd = (0, Bd.k)()) || void 0 === kd || kd.socketDetached(Jd.conn), !0
    }

    function bg(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Wd = Sg(Jd, kd);
      if (null === Wd) return !1;
      const {
        EC: Pd,
        token: Zd,
        game: gd,
        joinedAt: Cd
      } = Wd;
      if (!Tg(dd, "close", Jd.conn, TJ.B.Held)) return !0;
      console.warn(`${IW} the game's connection ${Nd?"went silent":`dropped with code ${kd}`}, holding it`);
      const Kd = {
        closeReason: pd,
        sinceJoinedMs: performance.now() - Cd,
        game: gd
      };
      return (0, ak.reportDisconnect)((0, jd.k)(kd), dP, Kd, Nd ? "silent" : void 0), Pd.heldConn = Jd.conn, Pd.dropCode = kd, Pd.pendingHold = {
        conn: Jd.conn,
        token: `${Pd.roomId}:${Zd}`
      }, XP || oC(dd, !1, "all"), !0
    }

    function Sg(dd, Jd) {
      const kd = dZ,
        Nd = AP,
        Wd = dd.token;
      return null === kd || null === Nd || hZ || dd.left || Nd.conn !== dd.conn || null === Wd || "" === Wd ? null : (0, pd.h)(Jd) && kd.resume.canHoldSeat() ? {
        EC: kd,
        token: Wd,
        game: Nd.game,
        joinedAt: Nd.joinedAt
      } : null
    }

    function jg(dd, Jd) {
      var kd;
      null === (kd = (0, Bd.k)()) || void 0 === kd || kd.closeGame(dd), (0, KN.b)().close(dd), Jd || (0, ld.r)({
        websocketUrl: null
      })
    }

    function Xg() {
      const dd = pZ;
      if (null === dd) return;
      const Jd = (0, Bd.k)();
      hZ || null === Jd || Jd.SF(dd) ? pZ = null : performance.now() - yP.pause >= fW && (yP.pause = performance.now(), console.warn(`${IW} the cmd ring had no room for SetPaused(${dd}): written before the next frame`))
    }

    function fg() {
      const dd = dZ;
      dZ = null, null === dd || void 0 === dd || dd.resume.dispose()
    }

    function ng(dd, Jd) {
      var kd, pd;
      const {
        heldConn: Nd
      } = dd, Wd = dd.resume.resumingConn;
      dd.heldConn = 0, dd.pendingHold = null, dZ === dd && (dZ = null), "left" === Jd ? dd.resume.leave() : dd.resume.dispose(), 0 === kZ || (null === (kd = ZP) || void 0 === kd ? void 0 : kd.conn) !== kZ || "left" === Jd && (null === (pd = rP) || void 0 === pd ? void 0 : pd.conn) === kZ || Dg(kZ), "gaveUp" === Jd && 0 !== Wd && Dg(Wd), 0 !== Nd && "refused" !== Jd && (console.info(`${IW} the game held through its drop ${"left"===Jd?"was left":"is given up"}`), null === VW || VW.isStopped || Tg(VW, "close", Nd), jg(Nd, !1))
    }

    function Ug(dd, Jd) {
      const kd = Jd.indexOf(":");
      return {
        roomId: kd < 0 ? dd.roomId : Jd.slice(0, kd),
        roomToken: Jd.slice(kd + 1)
      }
    }

    function yg(dd) {
      var Jd;
      JZ = dd, dd.conn === kZ && (kZ = 0);
      const kd = dZ;
      null !== kd && (null === (Jd = AP) || void 0 === Jd ? void 0 : Jd.conn) === dd.conn && kd.resume.onInitialInfo(dd)
    }

    function Dg(dd) {
      var Jd;
      const kd = ZP;
      (null === kd || void 0 === kd ? void 0 : kd.conn) === dd && (kd.left = !0, null === (Jd = (0, Bd.k)()) || void 0 === Jd || Jd.socketLeft(), (0, ld.r)({
        websocketUrl: null
      }), Cg(dd) ? setTimeout((() => {
        ZP === kd && Fg()
      }), Xd.g) : Fg())
    }

    function Tg(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Nd = !1;
      return mC(dd, (() => {
        const {
          net: Wd
        } = dd.rings;
        Nd = "open" === Jd ? Wd.writeOpen(kd, pd) : Wd.writeClose(kd, pd), Nd || dd.crash(kk.q, `a socket ${Jd} did not fit the net-in ring`)
      })), Nd
    }

    function Eg(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (cg()) {
        const pd = "browser" === dd && (0, CN.T)() ? "blockedAfterLoss" : "unsupported";
        return (0, ak.reportUnsupportedFallback)(dd, pd, Jd, kd), void hg(`the wasm client can't run here (${Jd}; ${pd})`, pd)
      }(0, ak.showUnsupported)(dd, "unsupported", Jd, kd)
    }

    function cg() {
      return yZ && "wasm" !== (0, LJ.f)(window.location.search)
    }

    function hg(dd, Jd) {
      console.warn(`${IW} ${dd}: reloading on the JS client`), null !== Jd && (0, LJ.t)(Jd), (0, LJ.p)(null === Jd ? "reloadOntoJs" : "decline");
      const kd = () => {
        (0, rd.f)(LJ.B)
      };
      (0, ak.flushCrashReports)(rd.d).then(kd, kd)
    }

    function rg(dd, Jd, kd, pd) {
      return RZ(dd, Jd, kd, pd)
    }

    function ug() {
      null === vZ || null === VW || VW.isStopped || hZ || null !== qP || null === DW || (qP = vZ(DW, zg, Hg().follow))
    }

    function tg() {
      var dd, Jd, kd;
      return null !== (dd = null === (Jd = HW) || void 0 === Jd || null === (kd = Jd.textures) || void 0 === kd ? void 0 : kd.files()) && void 0 !== dd ? dd : null
    }

    function Vg(dd) {
      Hg().follow((Jd => {
        null !== Jd && Promise.all([Promise.all([kd.e(194), kd.e(45)]).then((() => kd(43259))), (0, CN.R)()]).then((dd => {
          let [{
            followPagePackFiles: kd
          }, pd] = dd;
          const Nd = null === pd || (0, Jk.l)(pd) ? "webgl" : pd.backend;
          kd(Jd, Ap.g, Nd, (dd => {
            Ap.g.setPageFiles(dd)
          }), zg)
        }), (Jd => {
          console.warn(`${IW} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Jd), dd()
        }))
      }))
    }

    function zg(dd, Jd) {
      console.warn(`${IW} ${dd}`, Jd)
    }

    function Hg() {
      return zW ??= new iN({
        load: dd => Promise.all([kd.e(194), kd.e(52)]).then((() => kd(43264))).then((Jd => {
          let {
            startPageTexturePackFeed: kd
          } = Jd;
          return kd(zg, dd)
        })),
        store: ik.f,
        TQ: dd => {
          pP.then((() => {
            (0, ak.reportTexturePackFeedLoadFailure)(dd, dP)
          }))
        }
      }), zW
    }
    const wg = dd => Hg().follow(dd);

    function Ag() {
      return Hg().loaded()
    }
    const dC = function(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Nd = 0;
        return async function(Wd, Pd) {
          let Zd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const gd = ++Nd,
            Cd = pd() + Jd,
            Kd = await
          function(dd, Jd) {
            let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((pd => {
              const Nd = setTimeout((() => {
                pd(null), dd.then((dd => {
                  null !== dd && (dd.joinedWithout(), kd(dd))
                }))
              }), Jd);
              dd.then((dd => {
                clearTimeout(Nd), pd(dd)
              }))
            }))
          }(dd(Wd), Jd, (dd => {
            gd === Nd && Zd() && Pd(dd, pd() + Jd).catch((dd => {
              kd("the texture pack step after the join failed", dd)
            }))
          }));
          return null === Kd ? null : Pd(Kd, Cd)
        }
      }((dd => (0, NJ.i)(dd) ? Hg().request() : Hg().forJoin()), sN.d, zg),
      JC = function(dd, Jd) {
        let kd = !1;
        return {
          setGamePackConfirm: dd => {
            kd = null !== dd, Jd(dd)
          },
          packStep: (Jd, pd, Nd) => dd(Jd, pd, (() => kd && Nd()))
        }
      }(dC, (dd => {
        Hg().setGamePackConfirm(dd)
      }));

    function kC(dd) {
      JC.setGamePackConfirm(dd)
    }

    function pC() {
      if (hZ || null !== iZ || null === xZ || null === sZ) return;
      const {
        backend: dd,
        canvas: Jd,
        fallbackReason: kd,
        adapterVendor: pd
      } = sZ, Nd = xZ;
      xZ = null;
      try {
        iZ = Nd({
          backend: dd,
          canvas: Jd,
          fallbackReason: kd,
          adapterVendor: pd,
          joinedGame: () => hZ ? null : rP,
          inGame: WC,
          shaderPackReach: () => {
            var dd, Jd;
            return null !== (dd = null === (Jd = aP) || void 0 === Jd ? void 0 : Jd.reachInJoinedGame()) && void 0 !== dd ? dd : null
          },
          msaa: () => BZ > 1,
          writeCmd: (dd, Jd, kd) => null !== DW && DW(dd, Jd, kd),
          takeFailedMeshJobs: () => {
            var dd, Jd;
            return null !== (dd = null === (Jd = oP) || void 0 === Jd ? void 0 : Jd.takeFailedMeshJobs()) && void 0 !== dd ? dd : 0
          },
          readLoadCounts: dd => {
            var Jd, kd;
            return null !== (Jd = null === (kd = VW) || void 0 === kd ? void 0 : kd.readLoadCounts(dd)) && void 0 !== Jd && Jd
          },
          mainStalled: (dd, Jd) => {
            (0, ak.reportMainStall)(dd, Jd, dP)
          }
        })
      } catch (Wd) {
        console.error(`${IW} the frame telemetry didn't start`, Wd)
      }
    }

    function NC(dd, Jd) {
      try {
        var kd, pd, Nd;
        const Wd = LZ && null !== (kd = null === (pd = VW) || void 0 === pd || null === (Nd = pd.lastHeader) || void 0 === Nd ? void 0 : Nd.renderPending) && void 0 !== kd ? kd : 0;
        (0, zk.g)(Jd, dd, WC() && !(null !== lN), Wd)
      } catch (Wd) {
        (0, zk.v)(), console.error(`${IW} the quality steps stopped`, Wd)
      }
    }

    function WC() {
      return null !== rP && fZ === rP && !hZ
    }

    function PC(dd) {
      const Jd = iZ;
      iZ = null;
      try {
        null === Jd || void 0 === Jd || Jd.stop()
      } catch {}
      console.error(`${IW} the frame telemetry threw: it stops`, dd)
    }

    function ZC(dd) {
      var Jd, kd, pd, Nd;
      if ((0, KN.b)().fire(dd), "message" === dd.type) {
        if (fP++, dd.IC === TJ.Kc.ERROR && null !== tP) {
          var Wd;
          const {
            text: Jd,
            dropsCache: kd
          } = (0, jd.p)((new TextDecoder).decode(dd.payload));
          KZ ||= kd, (null === (Wd = PZ) || void 0 === Wd ? void 0 : Wd.conn) === dd.conn && (oZ = Jd)
        } else if (dd.IC === EJ.ac.ResumeComplete) {
          var Pd;
          null === (Pd = dZ) || void 0 === Pd || Pd.resume.onResumeComplete(dd.conn)
        }
        return
      }
      dd.phase === TJ.C.Left ? nP = dd.conn : dd.phase === TJ.C.Activated && (null === (Jd = PZ) || void 0 === Jd ? void 0 : Jd.conn) === dd.conn ? PZ.activated = !0 : dd.phase === TJ.C.Resumed ? function(dd) {
        var Jd, kd;
        kZ = dd;
        const pd = dZ;
        if (null === pd || 0 === pd.heldConn || (null === (Jd = ZP) || void 0 === Jd ? void 0 : Jd.conn) !== dd || !ZP.resume || null === AP) return;
        console.info(`${IW} the game resumed on conn ${dd}, waiting for its InitialInfo`);
        const Nd = pd.heldConn;
        pd.heldConn = 0, ZP.resume = !1, AP.conn = dd, (null === (kd = HP) || void 0 === kd ? void 0 : kd.conn) === Nd && (HP = {
          conn: dd,
          info: HP.info
        }), RJ.b.apply({
          shopInfo: null,
          _shopVersion: WJ.d
        })
      }(dd.conn) : dd.phase === TJ.C.Held ? function(dd) {
        var Jd;
        const kd = dZ,
          pd = null !== (Jd = null === kd || void 0 === kd ? void 0 : kd.pendingHold) && void 0 !== Jd ? Jd : null;
        if (null !== kd && null !== pd && pd.conn === dd) return kd.pendingHold = null, kd.heldConn = dd, kZ = 0, console.warn(`${IW} the core holds the game, reconnecting`), void kd.resume.onDropped(pd.token);
        if (dd === kZ) {
          kZ = 0;
          const Jd = VW;
          null === Jd || Jd.isStopped || (console.info(`${IW} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Tg(Jd, "close", dd))
        }
      }(dd.conn) : dd.phase === TJ.C.Closed && (null === (kd = dZ) || void 0 === kd || null === (pd = kd.pendingHold) || void 0 === pd ? void 0 : pd.conn) === dd.conn && (dZ.heldConn === dd.conn ? function(dd) {
        const Jd = dd.heldConn,
          kd = dd.dropCode;
        ng(dd, "refused"), console.info(`${IW} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          jg(Jd, !1), Ig(Jd, kd, "", !0)
        }))
      }(dZ) : dZ.pendingHold = null);
      const Zd = Object.keys(TJ.C).find((Jd => TJ.C[Jd] === dd.phase)),
        gd = 0 === dd.code ? "" : ` (code ${dd.code})`;
      console.info(`${IW} conn ${dd.conn}: ${null!==Zd&&void 0!==Zd?Zd:dd.phase}${gd}, ${fP} raw messages so far`), (null === (Nd = rP) || void 0 === Nd ? void 0 : Nd.conn) !== dd.conn || dd.phase !== TJ.C.Left && dd.phase !== TJ.C.Closed || gg(null), zP !== dd.conn || dd.phase !== TJ.C.Left && dd.phase !== TJ.C.Closed || (zP = null, null === rP && null === tP && dN.b.setGame(void 0));
      for (const Kd of [...QZ]) try {
        Kd(dd.conn, dd.phase, dd.code)
      } catch (Cd) {
        (0, cJ.p)(Cd, `${IW} a connection listener threw`)
      }
    }

    function gC() {
      (0, CN.o)(), queueMicrotask((() => {
        try {
          qC()
        } catch (dd) {
          console.warn(`${IW} stopping before the reload threw`, dd)
        }(0, ak.flushCrashReports)(rd.d).then(rd.i, rd.i)
      }))
    }

    function CC() {
      const dd = VW;
      null === dd || dd.isStopped || null === ZP || XP || !dd.hasPendingCommands() || oC(dd, !1, "budget")
    }

    function KC(dd) {
      var Jd;
      const kd = rP;
      dd.persisted || null === kd || (null === (Jd = ZP) || void 0 === Jd ? void 0 : Jd.conn) !== kd.conn || ZP.left || kd.leave()
    }

    function oC(dd, Jd, pd) {
      let Nd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Wd = XP;
      XP = !0;
      try {
        return function(dd, Jd, pd, Nd) {
          var Wd, Pd, Zd, gd;
          if (hZ) return !1;
          if (mC(dd, QC), hZ || dd.isStopped) return !1;
          GC() && YP("modelsIn");
          Xg(), SP = performance.now(), nP = null, UP = !1, (0, qd.T)(), null === (Wd = RP) || void 0 === Wd || Wd.beforeFrame(), Kp(SP, dd), (0, qd.L)(SP, LC), jP = !0;
          const Cd = Jd && IC();
          let Kd;
          try {
            Kd = dd.frame(SP, Cd, pd)
          } finally {
            jP = !1
          }
          if (!Kd) return !1;
          qZ.observe(null !== (Pd = null === (Zd = dd.lastHeader) || void 0 === Zd ? void 0 : Zd.chunksCancelled) && void 0 !== Pd ? Pd : 0);
          const od = dd.lastFrameKind,
            ld = (0, YJ.b)(od);
          (function(dd) {
            null !== TN && TN.afterFrame(performance.now(), dd)
          })(ld), null === (gd = aZ) || void 0 === gd || gd.frame(dd, SP, od), Jd && (nZ = ld);
          ld && (0, aJ.e)(SP);
          if (null !== iZ) try {
            iZ.frameRan(dd, SP, performance.now(), od)
          } catch (Od) {
            PC(Od)
          }
          "drawn" === od && RC() && function() {
            for (const dd of [...ZN]) dd()
          }();
          dd.forEachNetOut(vC);
          const Qd = ZP;
          null !== nP && (null === Qd || void 0 === Qd ? void 0 : Qd.conn) === nP && xC(Qd, Xd.l);
          (function(dd) {
            var Jd;
            if (YZ) return;
            null === SZ && IC() && (SZ = performance.now());
            if (null === tP && null === rP) return;
            null === SZ || jZ || (jZ = !0, (0, Ld.l)("wasm_startup_loaded", SZ));
            let kd = 0;
            null !== rP ? kd = -1 : !0 === (null === (Jd = PZ) || void 0 === Jd ? void 0 : Jd.activated) && (kd = ~EJ.P.TerrainDrawn);
            const pd = dd.headerWord(EJ.B.LoadSteps) & kd & ~bZ;
            if (0 === pd) return;
            bZ |= pd;
            const Nd = performance.now();
            for (const [Wd, Pd] of Object.entries(eC)) 0 !== (pd & EJ.P[Wd]) && (0, Ld.l)(Pd, Nd)
          })(dd), Jd && function(dd) {
            var Jd, pd, Nd;
            if (null === rP || !IC()) return;
            null === XZ || fZ === rP && !XZ.frame(SP, 0 !== (dd.headerWord(EJ.B.LoadSteps) & EJ.P.TerrainDrawn)) || (XZ = null);
            const Wd = dd.lastHeader,
              Pd = !LZ || 0 === (null === Wd || void 0 === Wd ? void 0 : Wd.renderPending);
            !mZ && Pd && (mZ = !0, performance.mark(aW));
            if (fZ === rP) return;
            const Zd = null !== (Jd = null === Wd || void 0 === Wd ? void 0 : Wd.firstView) && void 0 !== Jd ? Jd : TJ._.NotYet;
            if (LZ && Zd === TJ._.NotYet) return;
            if (YZ && (!0 !== (null === (pd = (0, Bd.k)()) || void 0 === pd ? void 0 : pd.isSessionLive) || !Pd)) return;
            fZ = rP;
            const gd = rP;
            if (setTimeout((() => {
                rP === gd && (0, Ld.j)()
              }), 0), null === (Nd = aP) || void 0 === Nd || Nd.playable(), function() {
                clearTimeout(PP), PP = setTimeout((() => {
                  WC() && jC((dd => {
                    let {
                      prefetchWorldgenWorker: Jd
                    } = dd;
                    Jd()
                  }))
                }), yW)
              }(), YZ) return;
            YZ = !0, performance.mark(iW), (0, jN.m)("render") && Promise.all([kd.e(75), kd.e(47)]).then((() => kd(4552))).then((dd => {
              let {
                renderDebugPlayable: Jd
              } = dd;
              Jd()
            }), (dd => {
              console.warn("The render debug topic didn't load", dd)
            }));
            const Cd = Math.round(performance.now());
            if (LZ && Zd !== TJ._.Drawn) {
              const Jd = Zd === TJ._.HeldBackstop ? "held_draws" : "long",
                {
                  cause: kd
                } = OC(dd);
              if (console.warn(`${IW} playable at ${Cd} ms on the first view's ${Jd} backstop, ${kd}: it wasn't drawn whole in time`), (0, Ld.l)("wasm_view_backstop", Cd, `${Jd}:${kd}`), "long" === Jd) {
                var Kd, od;
                const Jd = null !== (Kd = null === (od = AP) || void 0 === od ? void 0 : od.game) && void 0 !== Kd ? Kd : "";
                XZ = new Mk.e((() => {
                  const {
                    cause: kd,
                    census: pd
                  } = OC(dd);
                  (0, ak.reportFirstViewNoTerrain)(Jd, kd, pd, dP), (0, QJ.q)("noTerrain")
                }))
              }
            } else console.info(`${IW} playable at ${Cd} ms${LZ?"":" (no renderer)"}`);
            setTimeout(GZ, 0), (0, GJ.e)().catch((dd => {
              console.error(`${IW} item sprites didn't load, so item particles show the missing texture`, dd)
            })), cp.c.warm()
          }(dd);
          (0, kk.Q)(dd, {
            worldgen: CP,
            mesh: oP
          }),
          function(dd) {
            dd.forEachEvent(lp);
            for (const Jd of op) try {
              (0, Wp.c)(Jd)
            } catch (Od) {
              if ((0, cJ.j)(Od)) {
                dd.crashOn(kk.h, Od);
                break
              }
              console.error(`${Zp} an input action listener threw`, Od)
            }
            op.length = 0
          }(dd), Nd && (0, FJ.e)();
          return !dd.isStopped
        }(dd, Jd, "all" === pd || dd.rings.net.cursor >= FW || dd.netKeptFrames >= YW, Nd)
      } finally {
        XP = Wd
      }
    }

    function lC(dd) {
      console.error(`${IW} a frame-start listener threw`, dd)
    }

    function QC() {
      var dd, Jd, kd, pd;
      null === (dd = GP) || void 0 === dd || dd.drain(DW, TW), null === (Jd = BP) || void 0 === Jd || Jd.drain(DW), null === (kd = sP) || void 0 === kd || kd.drain(performance.now()), IZ(DW), null === (pd = qP) || void 0 === pd || pd.drain()
    }

    function LC(dd) {
      console.error(`${IW} a before-frame listener threw`, dd)
    }

    function OC(dd) {
      const Jd = (0, Bd.k)(),
        kd = (0, Bd.w)(),
        pd = null === Jd || null === kd ? null : kd.readDrawCensus(Jd.api);
      return {
        cause: (0, Mk.l)(dd.headerWord(EJ.B.LoadSteps), pd),
        census: pd
      }
    }
    const eC = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function RC() {
      return LZ && IC()
    }

    function IC() {
      return iP && GC()
    }

    function GC() {
      return null === GP || GP.startupDone
    }

    function vC(dd, Jd) {
      const kd = ZP;
      (null === kd || void 0 === kd ? void 0 : kd.conn) === dd ? xC(kd, Jd) : TP++
    }

    function xC(dd, Jd) {
      const {
        ws: kd
      } = dd;
      return kd.readyState === WebSocket.OPEN ? (kd.send(Jd), !0) : kd.readyState === WebSocket.CONNECTING && dd.pendingBytes + Jd.byteLength <= XW ? (dd.pending.push(Jd.slice()), dd.pendingBytes += Jd.byteLength, !0) : (TP++, !1)
    }

    function qC() {
      var dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed;
      hZ = !0, UZ.stop(), (0, fN.d)(), TN = null, fg(), (0, qd.P)().unlockPointer(), (0, qd.O)(null), null === (dd = IP) || void 0 === dd || dd(), IP = null, null === (Jd = (0, Bd.w)()) || void 0 === Jd || Jd.followCursorAim(null), (0, FJ.H)(), (0, Bd.i)(), AW.stop(), null === (kd = MZ) || void 0 === kd || kd(), MZ = null, null === (pd = FZ) || void 0 === pd || pd(), FZ = null, null === (Nd = iZ) || void 0 === Nd || Nd.stop(), iZ = null, (0, Yk.r)(null), null === (Wd = gP) || void 0 === Wd || Wd(), gP = null, null === (Pd = CP) || void 0 === Pd || Pd.stop(), CP = null, null === (Zd = oP) || void 0 === Zd || Zd.stop(), oP = null, null !== (gd = HW) && void 0 !== gd && null !== (Cd = gd.textures) && void 0 !== Cd && Cd.assets && (0, Hp.k)(null), null === (Kd = HW) || void 0 === Kd || Kd.stop(), HW = null, wW = null;
      const Rd = lP;
      lP = null, Rd && (Rd.stop(), YC(Rd)), null === (od = BP) || void 0 === od || od.dispose(), BP = null, null === (ld = sP) || void 0 === ld || ld.dispose(), sP = null, GP = null, null === (Qd = xP) || void 0 === Qd || Qd(), xP = null, null === (Ld = eP) || void 0 === Ld || Ld(), eP = null, null === (Od = RP) || void 0 === Od || Od.stop(), RP = null, Wg(), dN.b.release(), Fg();
      const Id = qP;
      qP = null;
      try {
        null === Id || void 0 === Id || Id.dispose()
      } catch (Gd) {
        console.warn(`${IW} the sky's images didn't release`, Gd)
      }(0, hp.h)(null), null === (ed = uW) || void 0 === ed || ed.pagePreviews().endSession(null === (0, ZJ.l)())
    }

    function BC(dd, Jd) {
      var kd, pd;
      const Nd = null !== (kd = null === (pd = lP) || void 0 === pd ? void 0 : pd.details()) && void 0 !== kd ? kd : {},
        Wd = dd.site === vW || dd.site === xW || dd.site === ak.RENDER_RELOAD_SITE || dd.site === qW ? dd.error instanceof WebAssembly.RuntimeError || dd.error instanceof HJ.e : !(0, Jk.n)(dd.error) && (0, kk.K)(dd);
      Wd && dd.error instanceof Error && (0, ZJ.O)(dd.error);
      const Pd = Wd || dd.site === kk.s ? (0, ak.readTrap)(dd.error) : null,
        Zd = null !== Pd && (0, hJ.f)(Pd.kind, Pd.refusedBytes) ? Pd.refusedBytes : 0,
        gd = null === QP ? (0, Dp.z)(function() {
          try {
            return (0, ZJ.o)().buffer.byteLength
          } catch {
            return 0
          }
        }(), Zd, null) : QP.ceilingMayRefuse(Zd),
        Cd = Zd > 0 && !gd && cg();
      var Kd;
      if (Cd && ((0, LJ.t)("oom"), (0, LJ.p)("decline"), cZ = !0), qC(), (0, CN.d)()) return console.warn(`${IW} the session stopped at ${dd.site} as the page reloads`, dd.error), void((0, Jk.n)(dd.error) || (null === (Kd = dd.header) || void 0 === Kd ? void 0 : Kd.lastError) === TJ.G.CoreBusy || (0, ak.reportStoppedCore)(dd, Jd, Pd, {
        memoryDetails: Nd,
        declined: Cd
      }));
      (0, ak.showCrash)(dd, Jd, Pd, {
        memoryDetails: Nd,
        declined: Cd
      })
    }

    function sC(dd) {
      const {
        input: Jd,
        net: kd,
        worker: pd
      } = dd.rings, Nd = dd.optionsDropped, Wd = Jd.dropped + Nd + kd.dropped + pd.dropped + TP;
      Wd !== DP && function(dd, Jd) {
        const kd = performance.now();
        return !(kd - yP[dd] < fW) && (yP[dd] = kd, console.warn(`${IW} ${Jd}`), !0)
      }("dropped", `${Wd} records dropped so far (input ${Jd.dropped}, options ${Nd}, net ${kd.dropped}, worker ${pd.dropped}, net-out ${TP})`) && (DP = Wd)
    }

    function iC() {
      var dd, Jd;
      const kd = (0, xk.c)();
      if (null === kd) return null;
      const pd = (0, sk.q)(kd);
      return {
        ...pd,
        horizontal: Math.min(pd.horizontal, null !== (dd = null === (Jd = lP) || void 0 === Jd ? void 0 : Jd.shedDistanceInUse()) && void 0 !== dd ? dd : 1 / 0)
      }
    }

    function aC(dd) {
      var Jd, kd;
      return {
        samples: LZ ? BZ : null,
        sunShadows: dd,
        renderDistance: null !== (Jd = null === (kd = iC()) || void 0 === kd ? void 0 : kd.horizontal) && void 0 !== Jd ? Jd : null
      }
    }

    function MC(dd) {
      VP = dd, (0, qk.G)()
    }

    function FC() {
      var dd, Jd, kd;
      const pd = iC();
      return {
        ...null === (dd = lP) || void 0 === dd ? void 0 : dd.pageKillSnapshot(),
        renderDistance: null !== (Jd = null === pd || void 0 === pd ? void 0 : pd.horizontal) && void 0 !== Jd ? Jd : null,
        renderDistanceVertical: null !== (kd = null === pd || void 0 === pd ? void 0 : pd.vertical) && void 0 !== kd ? kd : null,
        chunkCap: LP,
        budgetBasis: OP,
        renderBackend: (0, CN.H)(),
        ...(0, Bk.e)(VP)
      }
    }

    function YC(dd) {
      console.info(`${IW} wasm memory at the session's end`, dd.details())
    }

    function mC(dd, Jd) {
      if (!dd.isStopped) try {
        Jd()
      } catch (kd) {
        dd.crash(kk.v, kd)
      }
    }

    function bC() {
      return KP ??= kd.e(69).then((() => kd(43268))).catch((dd => {
        throw KP = null, dd
      })), KP
    }
    async function SC() {
      const {
        createWorldgenWorker: dd,
        worldgenWorkerReady: Jd
      } = await bC();
      return await Jd(), dd
    }

    function jC(dd) {
      var Jd;
      null === (Jd = KP) || void 0 === Jd || Jd.then(dd, (() => {}))
    }

    function XC(dd, Jd, kd) {
      return async function(dd, Jd, kd) {
        let {
          stop: pd,
          stillWanted: Nd
        } = kd;
        const Wd = await (0, qp.m)(dd, {
          stillWanted: Nd,
          beforeReload: async () => {
            pd(), await (0, ak.flushCrashReports)(rd.d)
          },
          reload: rd.i
        });
        return Wd || Jd(), Wd
      }(dd, Jd, {
        stop: qC,
        stillWanted: kd
      })
    }
    let fC = !1;

    function nC() {
      return fC = !0, async function(dd, Jd, pd) {
        const {
          gamePackSource: Nd
        } = await kd.e(344).then((() => kd(43223)));
        await JC.packStep(dd, ((kd, pd) => kd.packForGame(dd, Nd(Jd), pd)), pd)
      }(...arguments)
    }

    function UC(dd) {
      ! function(dd, Jd) {
        dd((dd => {
          null === dd || void 0 === dd || dd.subscribe((dd => {
            let {
              pack: kd,
              gameSource: pd
            } = dd;
            Jd(null === pd || null === kd ? null : {
              pack: kd,
              source: "" === pd ? null : pd
            })
          }))
        }))
      }(wg, dd)
    }
    let yC = !1,
      DC = null,
      TC = !1,
      EC = !1;

    function cC() {
      var dd;
      yC || (yC = !0, HZ("play", cd), (0, ld.o)(new kK), Zd.gameBridge.attach(Sd), zC().catch((() => {})), (0, Bd.A)((dd => {
        kJ(dd.setTextHost)
      })), dd = uC, CZ.add(dd), function(dd) {
        for (const Jd of MP) dd(Jd);
        FP.add(dd)
      }((dd => {
        rC(hC[dd])
      })))
    }
    const hC = {
      booted: Wd.n.INITIALISE_NOA,
      texturesIn: Wd.n.REGISTRATION,
      modelsIn: Wd.n.SETUP_LIFEFORMS
    };

    function rC(dd) {
      gd.j.nO("matchmakeAndPlayStepCompleted", {
        step: dd,
        totalSubSteps: 1
      })
    }

    function uC(dd) {
      if (!TC) return;
      const {
        gameNameWithVariation: Jd,
        lobbyName: kd
      } = (0, ld.d)();
      if (dd.code === pd.e.serverUpdating.code) return (new kK).leaveLive(), void VC(Jd, kd);
      gd.j.nO("unwantedLeftGame", {
        reason: tC(dd),
        requiresRefresh: dd.requiresRefresh,
        canReconnect: null !== dd.reconnect,
        automaticallyReconnect: dd.reconnecting,
        canPlayAgain: dd.canPlayAgain,
        gameNameWithVariation: Jd,
        lobbyName: kd
      }), (new kK).leaveLive()
    }

    function tC(dd) {
      return null !== dd.reasonKey ? {
        translationKey: dd.reasonKey
      } : "gameOrPluginKick" === dd.name ? dd.reason : `You have disconnected from the server.\n${dd.reason}`
    }

    function VC(dd, Jd) {
      var pd;
      pd = (0, Cd.D)(dd, Jd), Promise.resolve().then((() => kd(1543))).then((dd => {
        let {
          navigatePreserveSearch: Jd
        } = dd;
        Jd(pd)
      })).catch((dd => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", dd), (0, rd.e)(pd)
      }))
    }

    function zC() {
      return DC ??= Promise.all([kd.e(70), kd.e(73), kd.e(72), kd.e(71), kd.e(84), kd.e(261), kd.e(200), kd.e(218), kd.e(239), kd.e(213), kd.e(46)]).then((() => kd(40663))).then((dd => {
        try {
          dd.attachPlayGameSources()
        } catch (Jd) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Jd),
            function(dd) {
              pP.then((Jd => {
                null === Jd || Jd.isStopped || hZ ? console.warn(`${IW} the play sources threw as they attached, after the client stopped`, dd) : BC({
                  site: qW,
                  error: dd,
                  header: null
                }, dP)
              }))
            }(Jd), Jd
        }
      }), (dd => {
        throw DC = null, new Bd.e(dd)
      })), DC
    }
    async function HC(dd, Jd) {
      cC(), fC = !0, TC = !0;
      let kd = {
          place: dd.place,
          matchedAt: dd.matchedAt
        },
        Pd = dd.place.gameNameWithVariation;
      const Zd = (0, od.h)();
      let gd = null;
      const Cd = await Jg({
        matchmake: async () => {
          let Jd = kd;
          if (kd = null, null === Jd) {
            const kd = await dd.rematch();
            if (kd.isError()) throw gd = kd.asError().forward(), new Error(kd.asError().message);
            Jd = {
              place: kd.getValue(),
              matchedAt: performance.now()
            }
          }
          Pd = Jd.place.gameNameWithVariation;
          return {
            target: await (0, nd.c)(dd.userContext, Jd.place, Ag(), Zd),
            matchedAt: Jd.matchedAt,
            freshMs: nd.b
          }
        },
        pageReady: zC,
        onFailure: (dd, Jd) => {
          null === gd && function(dd, Jd) {
            (0, ak.reportPageJoinFailure)(dd, dP, Jd)
          }(dd, {
            sinceJoinStartMs: Jd,
            game: Pd
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => dd.userContext.invalidateTrafficCode(),
        signal: Jd
      });
      switch (Cd.kind) {
        case "joined":
          if (Zd) {
            const {
              game: dd
            } = Cd;
            (0, od.q)((() => {
              dd.endJoinAd() && (0, Ld.k)()
            }))
          }
          return EC || (EC = !0, (0, ed.b)()), TC ? (rC(Wd.n.CONNECT_TO_GAME_SERVER), rC(Wd.n.SHADER_PACK), function() {
            var dd, Jd;
            return null !== (dd = null === (Jd = aP) || void 0 === Jd ? void 0 : Jd.runsInJoinedGame()) && void 0 !== dd && dd
          }() && (0, Od.f)(dd.userContext, Pd).catch((dd => {
            console.error("Failed to report the shader pack session", dd)
          })), function() {
            const dd = function() {
              var dd, Jd;
              return null !== (dd = null === (Jd = aP) || void 0 === Jd ? void 0 : Jd.couldntRunInJoinedGame()) && void 0 !== dd ? dd : null
            }();
            null !== dd && (0, Od.c)(dd)
          }(), Nd.b.value(void 0)) : JK("The server ended the game as it joined");
        case "failed":
          if (!Cd.reloading) {
            if (null !== gd) return gd;
            if ((Cd.error instanceof Xd.m || Cd.error instanceof Xd.d) && Cd.error.code === pd.e.serverUpdating.code) {
              if (Jd.aborted) return JK("Left the game while it loaded");
              const {
                gameNameWithVariation: dd,
                lobbyName: kd
              } = (0, ld.d)();
              return VC(dd, kd), JK("The server is updating")
            }
            return Cd.error instanceof hd.f ? Nd.b.errorWithCode(Cd.error.messageKey, Wd.n.SHADER_PACK, {
              severity: "medium"
            }) : Nd.b.errorWithCode(function(dd) {
              if (dd instanceof Xd.z || dd instanceof vd.g) return dd.message;
              if (wC(dd)) return (0, jd.m)(dd.code, dd.serverText);
              return jd.j
            }(Cd.error), Wd.n.CONNECT_TO_GAME_SERVER, {
              error: AC(Cd.error) ? Cd.error : void 0,
              severity: dK(Cd.error),
              gameServerUnreachable: (0, fd.d)(Cd.error),
              rematch: (0, Id.b)(Cd.error),
              gameRefused: (0, Gd.d)(Cd.error)
            })
          }
          return JK("Reloading into the new build");
        case "stopped":
          return JK("The game client stopped, and shows why");
        case "CJ":
          return JK("Left the game while it loaded")
      }
    }

    function wC(dd) {
      return dd instanceof Xd.m || dd instanceof Xd.d && "attach" !== dd.stage
    }

    function AC(dd) {
      return !(dd instanceof Xd.z) && !wC(dd) && void 0 === (0, fd.d)(dd)
    }

    function dK(dd) {
      return wC(dd) ? dd instanceof Xd.d && (0, jd.k)(dd.code).requiresRefresh ? "medium" : "low" : AC(dd) || dd instanceof Xd.z ? "medium" : "low"
    }

    function JK(dd) {
      return Nd.b.errorWithCode(dd, Wd.n.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        CJ: !0
      })
    }
    class kK {
      leave(dd) {
        if ((0, xd.b)()) {
          var Jd, kd;
          if ((0, Pd.d)()) return;
          (0, Qd.e)(!0 === (null === (Jd = (0, xd.k)()) || void 0 === Jd || null === (kd = Jd.currentViewer) || void 0 === kd ? void 0 : kd.unsavedChanges), dd)
        } else this.leaveLive()
      }
      leaveLive() {
        var dd;
        fC && (null === (dd = Ag()) || void 0 === dd || dd.endGamePack());
        if (!TC) return;
        TC = !1, (0, Rd.g)();
        try {
          var Jd;
          null === (Jd = (0, Bd.w)()) || void 0 === Jd || Jd.clearWasmCameraScreen()
        } catch (pd) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", pd)
        }
        const {
          gameNameWithVariation: kd
        } = (0, ld.d)();
        try {
          og()
        } finally {
          (0, ld.r)({
            websocketUrl: null
          }), gd.j.nO("leaveGame", {
            gameNameWithVariation: kd
          }), (0, Kd.E)()
        }
      }
      isReplay() {
        return (0, xd.b)()
      }
    }
  },
  40999: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      f: () => pd,
      g: () => Zd,
      k: () => Pd
    });
    const pd = 12e4,
      Nd = 3e4,
      Wd = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: dd => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", dd), () => {
          document.removeEventListener("visibilitychange", dd)
        })
      };

    function Pd(dd) {
      return `it sent no start within ${Math.round(dd)} ms`
    }
    class Zd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wd;
        this.timeoutMs = dd, this.onTimeout = Jd, this.now = kd, this.visibility = pd, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = pd.listen((() => {
          this.onVisibility()
        })), pd.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const dd = this.step;
        return null === dd ? 0 : Math.min(this.now() - dd.at, dd.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const dd = this.timeoutMs - this.counted;
        if (dd <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Jd = Math.min(dd, 5e3);
        this.step = {
          at: this.now(),
          ms: Jd
        }, this.arm(Jd, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(dd, Jd) {
        this.timer = setTimeout((() => {
          this.timer = null, Jd()
        }), dd)
      }
    }
  },
  40888: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    const pd = {
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
  38870: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = kd(2761);
    const Nd = ["none", "idle", "now"];

    function Wd() {
      const dd = () => (0, pd.x)();
      return {
        memoryBytes: () => (0, pd.o)().buffer.byteLength,
        reserveUpFront: Jd => dd().VK(Jd),
        reserveAhead: Jd => dd().tK(Jd),
        setCeiling: Jd => {
          dd().zK(Jd)
        },
        lowWater: () => Nd[dd().uK()] ?? "none",
        stats: () => function(dd) {
          const Jd = new Uint32Array((0, pd.o)().buffer, dd, 17),
            kd = dd => Jd[dd] ?? 0,
            Nd = dd => ({
              upFront: kd(dd),
              ahead: kd(dd + 1),
              onDemandInFrame: kd(dd + 2),
              onDemand: kd(dd + 3)
            });
          return {
            memoryBytes: kd(0),
            initialBytes: kd(1),
            liveBytes: kd(2),
            peakLiveBytes: kd(3),
            headroomBytes: kd(4),
            unusedBytes: kd(5),
            ceilingBytes: kd(6),
            reservesRefused: kd(7),
            grows: Nd(8),
            grownBytes: Nd(12),
            allocationsRefused: kd(16)
          }
        }(dd().HK()),
        takeBallast: () => dd().wK(),
        takePressure: () => dd().AK()
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);