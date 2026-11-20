export const id = 60;
export const ids = [60];
export const modules = {
  39203: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      e: () => tk
    });
    const Rk = "The world isn't loaded, so no blocks can be seen.",
      tk = "The world isn't loaded, so nothing in it can be seen."
  },
  38731: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => yk,
      f: () => fk,
      i: () => ek
    });
    var Rk = Bk(2711);
    const tk = 0,
      ak = 2,
      Xk = 3,
      bk = 4;
    class wk {
      constructor(kk, Fk) {
        this.width = kk, this.KV = Fk, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(kk * Fk)
      }
      push(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Rk = 0; Rk < this.width; Rk++) Bk[Rk] = kk[Fk + Rk];
        return this.next = (this.next + 1) % this.KV, this.size = Math.min(this.size + 1, this.KV), Bk
      }
      lines() {
        const kk = [],
          Fk = (this.next - this.size + this.KV) % this.KV;
        for (let Bk = 0; Bk < this.size; Bk++) {
          const Rk = (Fk + Bk) % this.KV * this.width;
          kk.push(Array.from(this.data.subarray(Rk, Rk + this.width)).join(","))
        }
        return kk
      }
    }

    function dk(kk) {
      return Number.isFinite(kk) ? String(Math.round(10 * kk) / 10) : String(kk)
    }

    function sk(kk) {
      return Number.isFinite(kk) ? kk.toFixed(1) : String(kk)
    }
    class Vk {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.dD = 0, this.pastLimit = 0, this.lockSkips = 0, this.ws = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Jk {
      constructor() {
        var kk = this;
        this.tally = new Vk, this.records = new wk(10, 3600), this.events = new wk(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Rk, wk, Vk, Jk, Ak, ek, yk, fk, mk, Wk] = kk.records.push(Fk, Bk), vk = kk.tally;
          switch (vk.frames++, yk) {
            case tk:
              return void vk.idle++;
            case bk:
              return void vk.ws++;
            case Xk:
              return vk.lockSkips++, void(0 === Vk && 0 === Jk || kk.outlier(`lock skip dropped raw (${dk(Vk)}, ${dk(Jk)}) at ${sk(Rk)} ms`))
          }
          vk.looked++, Number.isFinite(wk) && (vk.dtMin = Math.min(vk.dtMin, wk), vk.dtMax = Math.max(vk.dtMax, wk), vk.dtSum += wk, wk > 0 && (vk.peakRate = Math.max(vk.peakRate, Math.hypot(Ak, ek) / wk))), vk.raw[0] += Vk, vk.raw[1] += Jk, vk.turned[0] += Ak, vk.turned[1] += ek;
          const ik = Math.abs(Vk) > Wk || Math.abs(Jk) > Wk,
            Yk = `raw (${dk(Vk)}, ${dk(Jk)}) over ${sk(wk)} ms, limit ${dk(Wk)}, filter v (${fk.toFixed(3)}, ${mk.toFixed(3)}) px/ms, at ${sk(Rk)} ms`;
          yk === ak ? (vk.dD++, kk.outlier(`spike put right: ${Yk} -> turned (${dk(Ak)}, ${dk(ek)})`)) : ik ? (vk.pastLimit++, kk.outlier(`kept past limit: ${Yk}`)) : wk > 50 && (vk.longFrames++, kk.outlier(`long frame: ${Yk}, turned in full`))
        }, this.onMouseMove = kk => {
          const Fk = this.tally,
            {
              movementX: Bk,
              movementY: Rk
            } = kk;
          Fk.events++;
          const tk = Math.max(Math.abs(Bk), Math.abs(Rk));
          Fk.eventMax = Math.max(Fk.eventMax, tk);
          const ak = null !== document.pointerLockElement,
            Xk = this.event;
          Xk[0] = kk.timeStamp, Xk[1] = Bk, Xk[2] = Rk, Xk[3] = ak ? 1 : 0, this.events.push(Xk), tk >= 200 && (Fk.bigEvents++, this.eventOutlier(`big mousemove (${Bk}, ${Rk}) at ${sk(kk.timeStamp)} ms, lock ${ak?"Hb":"free"}`))
        }, this.onLockChange = () => {
          const kk = document.pointerLockElement;
          (0, Rk.k)("look", `pointer lock ${kk?`gained (${kk.tagName.toLowerCase()})`:"lost"} at ${sk(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Rk.k)("look", `pointer lock request failed at ${sk(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Rk.k)("look", `page ${document.visibilityState} at ${sk(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const kk = this.tally;
          if (this.tally = new Vk, 0 === kk.events && 0 === kk.raw[0] && 0 === kk.raw[1] && 0 === kk.lockSkips && 0 === kk.dD && 0 === kk.dropped) return;
          const Fk = kk.looked > 0 ? kk.dtSum / kk.looked : NaN,
            Bk = [`${kk.frames} frames (${kk.looked} looked, ${kk.idle} idle${"wasm"===this.client?`, ${kk.ws} carried`:""})`, `dt avg ${sk(Fk)} min ${sk(kk.dtMin)} max ${sk(kk.dtMax)}, ${kk.longFrames} long`, `${kk.events} mousemoves (max ${dk(kk.eventMax)} px, ${kk.bigEvents} big)`, `raw (${dk(kk.raw[0])}, ${dk(kk.raw[1])}) turned (${dk(kk.turned[0])}, ${dk(kk.turned[1])})`, `peak ${kk.peakRate.toFixed(2)} px/ms`, `put right ${kk.dD}, past limit ${kk.pastLimit}, lock skips ${kk.lockSkips}`, "lock " + (document.pointerLockElement ? "Hb" : "free")];
          kk.dropped > 0 && Bk.push(`${kk.dropped} doubled spike copies dropped`), kk.lost > 0 && Bk.push(`${kk.lost} records lost`), kk.suppressed > 0 && Bk.push(`${kk.suppressed} outlier lines not shown`), (0, Rk.k)("look", `1s: ${Bk.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(kk, Fk) {
        this.client = kk, this.take = Fk;
        const {
          screen: Bk
        } = window;
        (0, Rk.k)("look", `start: ${kk} client, dpr ${window.devicePixelRatio}, screen ${Bk.width}x${Bk.height}, pointer lock ${document.pointerLockElement?"Hb":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Rk.i)("look", this.dump))
      }
      outlier(kk) {
        const Fk = this.tally;
        Fk.outliers >= 20 ? Fk.suppressed++ : (Fk.outliers++, (0, Rk.k)("look", kk))
      }
      eventOutlier(kk) {
        const Fk = this.tally;
        Fk.eventLines >= 10 ? Fk.suppressed++ : (Fk.eventLines++, (0, Rk.k)("look", kk))
      }
      takeRecords() {
        var kk;
        const Fk = null === (kk = this.take) || void 0 === kk ? void 0 : kk.call(this);
        if (Fk && Fk.length >= 2) {
          this.tally.lost += Fk[0], this.tally.dropped += Fk[1];
          for (let kk = 2; kk + 10 <= Fk.length; kk += 10) this.record(Fk, kk)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Ak = null;

    function ek(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Ak ??= new Jk, Ak.start(kk, Fk), Ak.record
    }

    function yk() {
      var kk;
      null === (kk = Ak) || void 0 === kk || kk.endTake()
    }

    function fk() {
      var kk;
      null === (kk = Ak) || void 0 === kk || kk.droppedCopy()
    }
  },
  8894: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    const Rk = new Set(["chunkBorders"])
  },
  9045: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      f: () => tk,
      i: () => sk
    });
    var Rk = Bk(1512);

    function tk(kk) {
      var Fk;
      return {
        ...Xk.store,
        yaw: Xk.store.yaw + (null !== (Fk = Rk.d[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
      }
    }
    const ak = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xk = {
        player: ak,
        store: {
          ...ak,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function bk(kk, Fk) {
      kk instanceof Promise ? kk.then(Fk).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : Fk(kk)
    }
    class wk {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, bk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var Fk;
        this.view = kk, null === (Fk = this.opened) || void 0 === Fk || Fk.show(kk)
      }
      resize(kk, Fk) {
        var Bk;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Bk = this.opened) || void 0 === Bk || Bk.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class dk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), bk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.opened) || void 0 === Fk ? void 0 : Fk.isReady()) && void 0 !== kk && kk
      }
      setCosmetic(kk, Fk) {
        var Bk;
        null === (Bk = this.opened) || void 0 === Bk || Bk.setCosmetic(kk, Fk)
      }
      playEmote(kk) {
        var Fk;
        null === (Fk = this.opened) || void 0 === Fk || Fk.playEmote(kk)
      }
      setOrbit(kk) {
        var Fk;
        null === (Fk = this.opened) || void 0 === Fk || Fk.setOrbit(kk)
      }
      resetCamera() {
        var kk;
        null === (kk = this.opened) || void 0 === kk || kk.resetCamera()
      }
      async untilDrawn(kk) {
        var Fk;
        await this.ready, await (null === (Fk = this.opened) || void 0 === Fk ? void 0 : Fk.untilDrawn(kk))
      }
      resize(kk, Fk) {
        var Bk;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Bk = this.opened) || void 0 === Bk || Bk.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const sk = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(kk) {
        this.host = kk
      }
      setDefaultHost(kk) {
        this.makeDefault = kk
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(kk) {
        return new wk(this.current().openMob(kk))
      }
      openPet(kk) {
        return new wk(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new wk(this.current().openMobLineup(kk))
      }
      openCharacter(kk, Fk) {
        return new dk(this.current().openCharacter(kk, Fk))
      }
    }
  },
  38856: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Vk,
      h: () => Jk
    });
    var Rk = Bk(152),
      tk = Bk(176),
      ak = Bk(1434),
      Xk = Bk(3037),
      bk = Bk(1441),
      wk = Bk(36202),
      dk = Bk(633),
      sk = Bk(38817);

    function Vk(kk) {
      (0, Xk.g)("matchmake_failed", kk, Rk.k[Rk.k.SHADER_PACK])
    }
    async function Jk(kk, Fk) {
      var Bk;
      const Rk = null === (Bk = await sk.shaderPackPage.preload()) || void 0 === Bk ? void 0 : Bk.listing,
        Xk = (0, wk.e)();
      Rk && null !== Xk && await bk.b.reportShaderPackSession(kk, {
        packId: Rk.packId,
        sourceHash: Rk.sourceHash,
        game: (0, ak.c)(Fk, tk.z, "other"),
        playSessionId: Xk,
        visitSessionId: (0, dk.e)()
      })
    }
  },
  38692: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk
    });
    var Rk = Bk(29),
      tk = Bk(1239),
      ak = Bk(3272);
    const Xk = "Reconnecting";
    class bk {
      constructor(kk) {
        this.hooks = kk, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = kk => {
          kk.persisted || this.leave()
        }, this.controller = new ak.e((Fk => kk.reconnect(Fk)), {
          isSessionLive: () => !this.ended && kk.isLive(),
          onPhaseChanged: kk => {
            this.onPhaseChanged(kk)
          },
          onReconnected: Fk => {
            kk.onReconnected(Fk)
          },
          onGaveUp: Fk => {
            !this.ended && kk.isLive() && kk.onGaveUp(this.sessionBased, Fk)
          }
        })
      }
      onInitialInfo(kk, Fk) {
        this.graceMs = kk, this.sessionBased = Fk
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(kk) {
        this.ended || this.controller.onConnectionLost(kk, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const kk = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Fk = this.controller.heldToken;
        this.end(), kk && "" !== Fk && this.hooks.releaseSeat(Fk)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(kk) {
        const Fk = "frozen" === kk || "resuming" === kk;
        Fk !== this.stopped && (this.stopped = Fk, this.hooks.freeze(Fk));
        const Bk = "frozen" === kk || "resuming" === kk && this.frozen;
        Bk && !this.frozen ? (0, tk.m)(Xk) : !Bk && this.frozen && (0, tk.l)(Xk), this.frozen = Bk, this.setListening("connected" !== kk), Rk.o.Hf(ak.o, Bk ? "frozen" : kk)
      }
      setListening(kk) {
        kk !== this.listening && (this.listening = kk, kk ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38696: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = kk, this.now = Fk, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const kk = this.now(),
            Fk = kk - this.lastCheckAt <= 2e3;
          this.lastCheckAt = kk;
          const Bk = "visible" === document.visibilityState;
          !Bk || Fk && this.wasVisible || (this.resumedAt = kk), this.wasVisible = Bk, Bk && kk - this.lastHeardAt > 12e3 && kk - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Fk(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8939: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak
    });
    var Rk = Bk(1047);

    function tk() {
      var kk, Fk;
      return null !== (kk = null === (Fk = screen.orientation) || void 0 === Fk ? void 0 : Fk.type) && void 0 !== kk ? kk : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ak = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && tk() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = tk(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Rk.ly)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const kk of this.resizers) kk()
          }
        }), 1e3)
      }
      heldSizer(kk) {
        let Fk = !1;
        return () => {
          if (Fk && this.isHeld()) return null;
          const Bk = kk();
          return Fk ||= null !== Bk, Bk
        }
      }
      onRelease(kk) {
        return this.resizers.add(kk), () => {
          this.resizers.delete(kk)
        }
      }
    }
  },
  38849: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    let Rk = !1;
    async function tk(kk, Fk) {
      if (!Rk) {
        Rk = !0;
        try {
          const [{
            reloadBloxd: Rk
          }, {
            NotificationProvider: tk
          }] = await Promise.all([Promise.resolve().then((() => Bk(1650))), Promise.resolve().then((() => Bk(1300)))]);
          if (!kk || !0 === await tk.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Rk(Fk)
        } catch (tk) {
          console.error("Leaving the replay failed", tk)
        }
        Rk = !1
      }
    }
  },
  38701: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => dk,
      i: () => sk
    });
    var Rk = Bk(1644),
      tk = Bk(182),
      ak = Bk(1625),
      Xk = Bk(1693),
      bk = Bk(1154),
      wk = Bk(1101);
    async function dk(kk, Fk) {
      return function(kk) {
        return "object" === typeof kk && null !== kk && kk.code === tk.e.VpnIp.code
      }(Fk) && function(kk) {
        return ak.d.supports("appCheck") && kk.isLoggedIn() && !kk.hasTriedAppAttestation()
      }(kk) && await async function(kk) {
        try {
          const {
            token: Fk
          } = await (0, Xk.e)(), {
            "3PSIDMCPP": Bk
          } = await (0, wk.postJsonWithMetricsCookiesAndJsonResponse)(`${bk.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Fk
          }, {
            retries: 0
          }, kk.getMetricsCookies());
          return kk.setAppAttestedAuthJwt(Bk), !0
        } catch (Fk) {
          return Fk instanceof Rk.e && "failed" === Fk.code ? (console.warn("The app couldn't get an App Check token:", Fk), kk.markAppAttestationTried()) : console.error("Failed to attest the app:", Fk), !1
        }
      }(kk)
    }
    async function sk(kk, Fk) {
      try {
        return await Fk()
      } catch (Bk) {
        if (!await dk(kk, Bk)) throw Bk
      }
      return Fk()
    }
  },
  40467: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk
    });
    var Rk = Bk(1663);
    const tk = 33177600,
      ak = 3e4;
    let Xk = !1;

    function bk(kk, Fk, Bk) {
      if (!kk.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Xk) return Promise.reject(new Error("A screenshot is already being taken"));
      Xk = !0;
      const Rk = function(kk, Fk, Bk) {
        const Rk = Math.max(1, kk),
          ak = Math.max(1, Fk),
          Xk = Math.min(1, Bk / Math.max(Rk, ak), Math.sqrt(tk / (Rk * ak)));
        return {
          width: Math.max(1, Math.floor(Rk * Xk)),
          height: Math.max(1, Math.floor(ak * Xk))
        }
      }(Fk, Bk, kk.maxTextureSize);
      return kk.resize(Rk.width, Rk.height), new Promise(((Fk, Bk) => {
        let Rk, tk = 2,
          bk = null;
        const wk = () => {
          var Fk;
          Xk = !1, null === (Fk = bk) || void 0 === Fk || Fk(), clearTimeout(Rk), kk.restoreSize()
        };
        Rk = setTimeout((() => {
          wk(), Bk(new Error("No frame was drawn to capture"))
        }), ak), bk = kk.onFrameDrawn((() => {
          if (tk--, tk > 0) return;
          const {
            canvas: Rk
          } = kk, ak = {
            width: Rk.width,
            height: Rk.height
          };
          try {
            Rk.toBlob((kk => {
              kk ? Fk({
                blob: kk,
                ...ak
              }) : Bk(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Xk) {
            Bk(Xk)
          } finally {
            wk()
          }
        }))
      }))
    }
    async function wk(kk, Fk, Bk) {
      try {
        const tk = await bk(kk, Fk, Bk);
        (0, Rk.e)(tk.blob, `bloxd-screenshot-${tk.width}x${tk.height}-${Date.now()}.png`)
      } catch (tk) {
        console.error("Error taking screenshot:", tk)
      }
    }
  },
  38699: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Jk,
      f: () => sk
    });
    var Rk = Bk(182),
      tk = Bk(1727),
      ak = Bk(1733),
      Xk = Bk(8577);
    const bk = [250, 500, 1e3, 2e3, 1250],
      wk = 406;

    function dk(kk) {
      if ("object" !== typeof kk || null === kk) return !1;
      const {
        code: Fk,
        message: Bk
      } = kk, tk = Rk.e.duplicateLobbyNameError;
      return (Fk === tk.code || Fk === wk) && (Bk === tk.text || Bk === tk.text + Rk.p)
    }
    async function sk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tk.b;
      for (let tk = 0;; tk++) {
        let Xk;
        (0, ak.k)(Fk);
        try {
          return await kk()
        } catch (Rk) {
          if (Xk = bk[tk], void 0 === Xk || !dk(Rk)) throw Rk
        }
        await Bk(Xk, Fk)
      }
    }
    const Vk = new Set([Rk.e.duplicateLobbyNameError.code, Rk.e.lobbyCantBeCreated.code, Rk.e.roomDisposedEarlyError.code, Rk.e.roomDisposedLateError.code, Rk.e.serverRoomLimitReached.code]);

    function Jk(kk) {
      if (dk(kk)) return !0;
      const Fk = (0, Xk.f)(kk);
      return "number" === typeof Fk && Vk.has(Fk)
    }
  },
  8577: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      f: () => Xk,
      i: () => bk,
      m: () => dk,
      o: () => wk
    });
    var Rk = Bk(182),
      tk = Bk(4366);

    function ak(kk) {
      return Xk(kk) === Rk.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xk(kk) {
      return "object" === typeof kk && null !== kk ? kk.code : void 0
    }

    function bk(kk) {
      var Fk;
      return null !== (Fk = Object.keys(tk.c).find((Fk => tk.c[Fk] === kk))) && void 0 !== Fk ? Fk : null
    }

    function wk(kk) {
      return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const dk = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38773: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(279),
      tk = Bk(132),
      ak = Bk(42);

    function Xk() {
      ak.i.setItem(Rk.Ib, ak.i.getItem(Rk.Ib) + 1), (0, tk.h)() && ak.i.setItem(Rk.Hb, ak.i.getItem(Rk.Hb) + 1)
    }
  },
  36194: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Wk,
      f: () => vk
    });
    var Rk = Bk(994),
      tk = Bk(608),
      ak = Bk(291),
      Xk = Bk(1e3),
      bk = Bk(624),
      wk = Bk(646),
      dk = Bk(4258),
      sk = Bk(98),
      Vk = Bk(132),
      Jk = Bk(1650),
      Ak = Bk(112),
      ek = Bk(36202),
      yk = Bk(42),
      fk = Bk(633),
      mk = Bk(36204);

    function Wk() {
      var kk, Fk;
      return [...null !== (kk = navigator.languages) && void 0 !== kk ? kk : [null !== (Fk = navigator.language) && void 0 !== Fk ? Fk : "none"], "en-Gb"]
    }

    function vk(kk, Fk, Bk, vk, ik) {
      const Yk = (0, Rk.n)(Fk) ? (0, Rk.v)(Fk) : null,
        Lk = {
          cookies: (0, Jk.getAllCookiesForGameNameWithVariation)(Fk),
          isMobile: (0, sk.isMobile)(),
          isUsingCustomGameTexturePack: null !== Yk && ik(Yk),
          generalCookies: {
            joinDiscord: !!yk.i.getItem("DiscordPressed"),
            newGo: dk.b,
            ...kk.getMetricsCookies(),
            trafficCode: vk,
            compliance: sk.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, sk.getBrowserName)(),
            version: (0, sk.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, sk.getPlatformType)(),
            deviceType: (0, Ak.c)()
          },
          isLoggedIn: kk.isLoggedIn(),
          lobbyName: Bk,
          languages: Wk(),
          version: tk.e,
          siteUsed: Vk.q,
          subsiteUsed: Vk.z,
          playSessionId: (0, ek.j)(Fk),
          visitSessionId: (0, fk.e)(),
          clientReason: bk.i.reason,
          budgetBasis: (0, mk.g)(),
          ...null !== wk.l && {
            diagClaim: wk.l.claimId
          }
        };
      return null !== Yk && (0, ak.Gc)(Yk) ? (Lk.lobbyName = (0, Rk.j)(Yk, (0, Rk.r)(Fk), Bk), {
        roomName: `classic_${Xk.c}`,
        joinOptions: Lk
      }) : {
        roomName: Fk,
        joinOptions: Lk
      }
    }
  },
  40077: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk
    });
    var Rk = Bk(39203);

    function tk(kk) {
      return {
        current: () => kk,
        watch: () => () => {}
      }
    }

    function ak() {}
    const Xk = Object.freeze([0, 0, 0]),
      bk = {
        states: {
          health: tk({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: tk({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: tk({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: tk({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: tk({}),
          creativeVisibility: tk({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: tk(null),
          heldItemAim: tk({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: tk(!1),
          gliderBoostFuel: tk(0),
          flight: tk({
            canFly: !1,
            flying: !1
          }),
          crafting: tk({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: tk({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: tk({}),
          fullInventory: tk(!1),
          crosshairTarget: tk({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: tk(!0),
          freeCamera: tk({
            allowed: !1,
            movesFly: !1
          }),
          replay: tk(null),
          replayEdits: tk(null),
          replayRecorder: tk({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: tk(!1)
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
          selectHotbarSlot: ak,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ak,
          setInventoryOpen: ak,
          changeIronChestPasskey: ak,
          dragReplayCamera: ak,
          applyTemporaryThirdPerson: ak,
          holdEmoteWheel: ak,
          recordFlyingMiddleText: ak,
          focusCrafting: ak,
          craftRecipe: () => ({
            Ps: 0,
            fV: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ak,
          setShopOpen: ak,
          buyShopItem: ak,
          sendChatMessage: ak,
          ignorePlayer: ak,
          reportPlayer: ak,
          reportWorldCodeChat: ak,
          requestDiscordReportKey: ak,
          reportLobbyOrGame: ak,
          playEmote: ak,
          updateMyCosmetic: ak,
          writeOnBoard: ak,
          writeBook: ak,
          writeNameTag: ak,
          setCustomLobbyBlock: ak,
          openIronChest: ak,
          sendCodeCollab: ak,
          clickCodeBlock: ak,
          bindCustomButtonKeys: ak,
          pressCustomButton: ak,
          moveReplayFreecam: ak,
          holdReplayFreecamVertical: ak,
          respawn: ak,
          wakeUp: ak,
          requestLeaderboard: ak,
          completeTask: ak,
          setServerCookie: ak,
          answerUiRequest: ak,
          chooseRewardedAd: ak,
          setCameraZoom: ak,
          setFreeCameraMovesFly: ak,
          setBlockHighlight: ak,
          setCrosshairInteractPrompt: ak,
          setLookSensitivity: ak,
          replayAction: ak,
          setReplayPlaying: ak,
          seekReplay: ak,
          setReplayCameraMode: ak,
          syncReplayCameraMode: ak,
          setReplayCameraKeyframe: ak,
          moveReplayCameraKeyframe: ak,
          deleteReplayCameraKeyframes: ak,
          setReplayPlaybackMark: ak,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ak,
          exportReplayVideo: ak,
          toggleRecording: ak,
          saveClip: ak,
          setRecorderPrefs: ak,
          setReplayViewerOpen: ak
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Rk.d,
          worldCodeAiGameState: () => Rk.e
        },
        lookups: {
          localPos: () => Xk,
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
  36204: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Lk,
      g: () => Yk,
      k: () => ik
    });
    var Rk = Bk(182),
      tk = Bk(98),
      ak = Bk(2722),
      Xk = Bk(4143),
      bk = Bk(629),
      wk = Bk(36209);
    const dk = 1048576,
      sk = 1024 * dk,
      Vk = 400 * dk,
      Jk = 147456,
      Ak = .5,
      ek = 1.5 * sk,
      yk = 768 * dk;

    function fk(kk) {
      return Vk + kk * Jk
    }

    function mk(kk, Fk, Bk) {
      var tk, Xk;
      let {
        footprintBytes: bk,
        basis: dk,
        namesLimit: mk
      } = function(kk) {
        const {
          os: Fk,
          deviceMemory: Bk
        } = kk;
        if ("ios" === Fk) switch ((0, ak.d)(kk)) {
          case "ipad_m":
            return {
              footprintBytes: fk(wk.b), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: yk, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: ek, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: yk, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof Bk && Number.isFinite(Bk) && Bk > 0 ? {
          footprintBytes: Bk * sk * Ak,
          basis: `memory-${Bk}`,
          namesLimit: !0
        } : "android" === Fk ? {
          footprintBytes: yk,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: fk(wk.f),
          basis: "unreported",
          namesLimit: !1
        }
      }(kk);
      if (Bk) {
        const kk = Math.min(bk, fk(wk.b));
        bk = Vk + Math.max(0, kk - Vk) / 2, dk += "+killed", mk = !0
      }
      null !== Fk && fk(Fk) < bk && (bk = fk(Fk), dk += "+learned", mk = !0);
      const Wk = function(kk) {
          const Fk = Math.floor((kk - Vk) / Jk);
          return Math.min(wk.b, Math.max(wk.e, Fk))
        }(bk),
        vk = (0, wk.l)(Wk);
      return {
        footprintBytes: bk,
        shedFootprintBytes: mk ? Math.max(bk, fk(Wk)) : null,
        chunkCap: Wk,
        maxHorizDistance: null !== (tk = null === vk || void 0 === vk ? void 0 : vk.horizontal) && void 0 !== tk ? tk : Rk.h.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Xk = null === vk || void 0 === vk ? void 0 : vk.vertical) && void 0 !== Xk ? Xk : Rk.h.maxChunkVertAddDistance,
        basis: dk
      }
    }
    let Wk = null;

    function vk() {
      return mk({
        os: (0, tk.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, ak.g)()
      }, (0, Xk.g)(), (0, bk.I)("wasm").length > 0)
    }

    function ik() {
      return Wk ??= vk(), Wk
    }

    function Yk() {
      var kk;
      return (null !== (kk = Wk) && void 0 !== kk ? kk : vk()).basis
    }

    function Lk(kk, Fk) {
      return kk.setChunkCap(Fk.chunkCap)
    }
  },
  40460: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      e: () => ak
    });
    var Rk = Bk(2954),
      tk = Bk(994);

    function ak(kk, Fk) {
      return null !== kk.gameSource && (0, Rk.m)(Fk, kk.gameSource)
    }

    function Xk(kk, Fk) {
      if (null === kk.gameSource || "" === kk.gameSource || null === Fk) return !0;
      const Bk = (0, tk.n)(Fk) ? (0, tk.v)(Fk) : null;
      return null !== Bk && ak(kk, Bk)
    }
  },
  40437: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk
    });
    var Rk = Bk(594),
      tk = Bk(40440),
      ak = Bk(40407);
    async function Xk(kk) {
      const Fk = await (0, tk.j)({
        Helmet: Bk(37647),
        Chestplate: Bk(37649),
        Gauntlets: Bk(37659),
        Leggings: Bk(37651),
        Boots: Bk(37657)
      } [Rk.b[kk]]);
      try {
        return (0, ak.s)(Fk)
      } finally {
        Fk.close()
      }
    }
    const bk = new class {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk.q;
        this.decode = kk, this.register = Fk, this.decoded = new Map
      }
      warm() {
        for (let kk = 0; kk < Rk.b.length; kk++) this.part(kk).catch((Fk => {
          console.warn(`The grayscale armour ${Rk.b[kk]} image didn't decode ahead of use`, Fk)
        }))
      }
      async load(kk, Fk) {
        const {
          width: Bk,
          height: ak,
          pixels: Xk
        } = await this.part(kk), bk = new ImageData(function(kk, Fk) {
          const Bk = new Uint8ClampedArray(kk.length);
          for (let Rk = 0; Rk < kk.length; Rk += 4) Bk[Rk] = Math.round(kk[Rk] * Fk[0] / 255), Bk[Rk + 1] = Math.round(kk[Rk + 1] * Fk[1] / 255), Bk[Rk + 2] = Math.round(kk[Rk + 2] * Fk[2] / 255), Bk[Rk + 3] = kk[Rk + 3];
          return Bk
        }(Xk, function(kk) {
          return [kk >>> 16 & 255, kk >>> 8 & 255, 255 & kk]
        }(Fk)), Bk, ak);
        let wk;
        try {
          wk = await createImageBitmap(bk, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (dk) {
          throw new tk.c("decode", `grayscale armour ${Rk.b[kk]}`, {
            cause: dk
          })
        }
        return {
          id: this.register(wk),
          width: Bk,
          height: ak
        }
      }
      part(kk) {
        const Fk = this.decoded.get(kk);
        if (void 0 !== Fk) return Fk;
        const Bk = this.decode(kk).catch((Fk => {
          throw this.decoded.delete(kk), Fk instanceof tk.c ? Fk : new tk.c("decode", `grayscale armour ${Rk.b[kk]}`, {
            cause: Fk
          })
        }));
        return this.decoded.set(kk, Bk), Bk
      }
    }
  },
  40435: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      g: () => fk,
      h: () => sk,
      j: () => Vk,
      l: () => yk
    });
    var Rk = Bk(40387),
      tk = Bk(40437),
      ak = Bk(40440);
    const Xk = 396,
      bk = 1,
      wk = 2,
      dk = 3,
      sk = {
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
      Vk = {
        File: 0,
        Item: 1
      },
      Jk = 0,
      Ak = 1,
      ek = 2;

    function yk(kk) {
      const Fk = (0, Rk.o)();
      Fk.catch((() => {}));
      let tk = null;
      return {
        glbUrl: kk,
        lifeformAtlasUrl: async kk => (await Fk).lifeformAtlasUrl(kk),
        armourAtlasUrl: async () => (await Bk.e(201).then((() => Bk(34024)))).armourAtlasUrl,
        capeUrl: async kk => (await Fk).capeUrl(kk),
        attachmentImageUrl: async kk => (await Fk).attachmentImageUrl(kk),
        blockImageUrl: async kk => (await Fk).blockImageUrl(kk),
        groupAtlasUrl: async kk => (await Fk).groupAtlasUrl(kk),
        particleTextureUrl: async kk => (await Fk).particleTextureUrl(kk),
        particleItemUrl: async kk => (tk ??= Bk.e(38).then((() => Bk(51219))).catch((kk => {
          throw tk = null, kk
        })), (await tk).particleItemUrl(kk))
      }
    }
    class fk {
      constructor(kk, Fk) {
        var Bk, Xk, bk, wk;
        let dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = kk, this.onFailure = Fk, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.Te = !1, this.load = null !== (Bk = dk.load) && void 0 !== Bk ? Bk : (kk, Fk) => (0, ak.n)(kk, dk.fetchImage, Fk), this.release = null !== (Xk = dk.release) && void 0 !== Xk ? Xk : ak.r, this.fetchFile = null !== (bk = dk.fetchFile) && void 0 !== bk ? bk : kk => (0, Rk.j)(kk), this.greyscaleArmour = null !== (wk = dk.greyscaleArmour) && void 0 !== wk ? wk : tk.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(kk, Fk) {
        this.glbWrittenImages.set(kk, Ok(Fk))
      }
      glbTaken(kk, Fk) {
        const Bk = this.glbWrittenImages.get(kk);
        this.glbWrittenImages.delete(kk), Fk && this.setGlbImages(kk, void 0 !== Bk && Bk.length > 0 ? Bk : void 0)
      }
      setGlbImages(kk, Fk) {
        var Bk;
        this.glbTakenCount.set(kk, (null !== (Bk = this.glbTakenCount.get(kk)) && void 0 !== Bk ? Bk : 0) + 1), void 0 === Fk ? this.glbImages.delete(kk) : this.glbImages.set(kk, Fk);
        const Rk = [];
        for (const {
            key: tk
          }
          of this.loading.values()) tk.kind === sk.Glb && tk.word === kk && Rk.push(tk);
        for (let tk = this.ready.length - 1; tk >= 0; tk--) {
          const {
            key: Fk,
            id: Bk
          } = this.ready[tk];
          Fk.kind === sk.Glb && Fk.word === kk && (this.ready.splice(tk, 1), null !== Bk && (this.answered.delete(Bk), this.release(Bk)), Rk.push(Fk))
        }
        this.loadAgain(Rk)
      }
      onEvent(kk) {
        if (this.Te) return;
        const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
        for (let Bk = 0; Bk + 8 <= kk.byteLength; Bk += 8) {
          const kk = Fk.getUint8(Bk),
            Rk = Fk.getUint32(Bk + 4, !0);
          if (kk === dk) {
            this.answered.delete(Rk), this.release(Rk);
            continue
          }
          const tk = {
            kind: Fk.getUint8(Bk + 1),
            index: Fk.getUint8(Bk + 2),
            word: Rk
          };
          kk === bk ? this.want(tk) : kk === wk && this.loading.delete(mk(tk))
        }
      }
      reload(kk, Fk) {
        const Bk = Bk => kk.includes(Bk.kind) && (void 0 === Fk || Fk(Bk)),
          Rk = new Map;
        for (const tk of this.answered.values()) Bk(tk) && Rk.set(mk(tk), tk);
        for (const [tk, {
            key: ak
          }] of this.loading) Bk(ak) && Rk.set(tk, ak);
        this.loadAgain(Rk.values())
      }
      loadAgain(kk) {
        for (const Fk of kk) this.loading.delete(mk(Fk)), this.want(Fk)
      }
      drain(kk) {
        if (null !== kk)
          for (; this.ready.length > 0;) {
            if (!kk(Xk, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Te = !0, this.loading.clear(), this.ready.length = 0;
        for (const kk of this.answered.keys()) this.release(kk);
        this.answered.clear()
      }
      want(kk) {
        const Fk = mk(kk);
        if (this.loading.has(Fk)) return;
        const Bk = {
          key: kk
        };
        this.loading.set(Fk, Bk), this.loadKey(kk).then((Rk => {
          this.Te || this.loading.get(Fk) !== Bk ? this.release(Rk.id) : (this.loading.delete(Fk), this.answered.set(Rk.id, kk), this.ready.push({
            record: vk(kk, Jk, Rk),
            key: kk,
            id: Rk.id
          }))
        }), (Rk => {
          if (this.Te || this.loading.get(Fk) !== Bk) return;
          this.loading.delete(Fk), this.onFailure({
            key: kk,
            error: Rk
          });
          const tk = Rk instanceof ak.c && "decode" === Rk.stage ? Ak : ek;
          this.ready.push({
            record: vk(kk, tk, null),
            key: kk,
            id: null
          })
        }))
      }
      async loadKey(kk) {
        switch (kk.kind) {
          case sk.Glb:
            return this.load(await this.glbImage(kk), "none");
          case sk.LifeformAtlas:
            return this.load(Wk(await this.sources.lifeformAtlasUrl(kk.word), kk), "none");
          case sk.ArmourAtlas:
            return this.load(Wk(await this.sources.armourAtlasUrl(), kk), "none");
          case sk.Cape:
            return this.load(Wk(await this.sources.capeUrl(kk.word), kk), "none");
          case sk.AttachmentImage:
            return this.load(Wk(await this.sources.attachmentImageUrl(kk.word), kk), "none");
          case sk.GroupAtlas:
            return this.load(Wk(await this.sources.groupAtlasUrl(kk.word), kk), "none");
          case sk.BlockImage:
            return this.load(Wk(await this.sources.blockImageUrl(kk.word), kk), "none");
          case sk.Particle: {
            const Fk = await (kk.index === Vk.Item ? this.sources.particleItemUrl(kk.word) : this.sources.particleTextureUrl(kk.word));
            return this.load(Wk(Fk, kk), "flipY")
          }
          case sk.GreyscaleArmour:
            return this.greyscaleArmour.load(kk.index, kk.word);
          default:
            throw new ak.c("fetch", `image kind ${kk.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(kk) {
        var Fk;
        let Bk = this.glbImages.get(kk.word);
        if (void 0 === Bk) {
          const Fk = this.glbTakenCount.get(kk.word),
            Rk = Wk(await this.sources.glbUrl(kk.word), kk);
          try {
            Bk = Ok(await this.fetchFile(Rk))
          } catch (tk) {
            throw new ak.c("fetch", Rk, {
              cause: tk
            })
          }
          this.glbTakenCount.get(kk.word) === Fk && this.glbImages.set(kk.word, Bk)
        }
        const Rk = null === (Fk = Bk) || void 0 === Fk ? void 0 : Fk[kk.index];
        if (!Rk) throw new ak.c("decode", `image ${kk.index} of file ${2147483647&kk.word}`, {
          cause: null
        });
        return Rk
      }
    }

    function mk(kk) {
      let {
        kind: Fk,
        index: Bk,
        word: Rk
      } = kk;
      return `${Fk}:${Bk}:${Rk}`
    }

    function Wk(kk, Fk) {
      if (null === kk) throw new ak.c("fetch", `no URL for image ${mk(Fk)}`, {
        cause: null
      });
      return kk
    }

    function vk(kk, Fk, Bk) {
      var Rk, tk, ak;
      const Xk = new Uint8Array(16),
        bk = new DataView(Xk.buffer);
      return bk.setUint8(0, kk.kind), bk.setUint8(1, kk.index), bk.setUint8(2, Fk), bk.setUint32(4, kk.word, !0), bk.setUint32(8, null !== (Rk = null === Bk || void 0 === Bk ? void 0 : Bk.id) && void 0 !== Rk ? Rk : 0, !0), bk.setUint16(12, Math.min(null !== (tk = null === Bk || void 0 === Bk ? void 0 : Bk.width) && void 0 !== tk ? tk : 0, 65535), !0), bk.setUint16(14, Math.min(null !== (ak = null === Bk || void 0 === Bk ? void 0 : Bk.height) && void 0 !== ak ? ak : 0, 65535), !0), Xk
    }
    const ik = 1179937895,
      Yk = 1313821514,
      Lk = 5130562;

    function Ok(kk) {
      var Fk;
      const Bk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      if (kk.byteLength < 20 || Bk.getUint32(0, !0) !== ik || Bk.getUint32(16, !0) !== Yk) return [];
      let Rk, tk = 20 + Bk.getUint32(12, !0);
      try {
        Rk = JSON.parse((new TextDecoder).decode(kk.subarray(20, tk)))
      } catch {
        return []
      }
      for (; tk + 8 <= kk.byteLength && Bk.getUint32(tk + 4, !0) !== Lk;) tk += 8 + Bk.getUint32(tk, !0);
      const ak = null !== (Fk = Rk.images) && void 0 !== Fk ? Fk : [];
      if (0 === ak.length || tk + 8 > kk.byteLength) return ak.map((() => null));
      const Xk = kk.subarray(tk + 8, Math.min(kk.byteLength, tk + 8 + Bk.getUint32(tk, !0)));
      return ak.map((kk => {
        var Fk, Bk, tk;
        const ak = void 0 === kk.bufferView || null === (Fk = Rk.bufferViews) || void 0 === Fk ? void 0 : Fk[kk.bufferView];
        if (!ak || 0 !== (null !== (Bk = ak.buffer) && void 0 !== Bk ? Bk : 0) || void 0 === ak.byteLength) return null;
        const bk = null !== (tk = ak.byteOffset) && void 0 !== tk ? tk : 0,
          wk = bk + ak.byteLength;
        return wk <= Xk.byteLength ? Xk.slice(bk, wk) : null
      }))
    }
  },
  40080: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      g: () => ak,
      h: () => tk
    });
    let Rk = null;

    function tk(kk) {
      Rk = kk
    }

    function ak(kk) {
      Rk === kk && (Rk = null)
    }

    function Xk() {
      var kk;
      null === (kk = Rk) || void 0 === kk || kk()
    }
  },
  36322: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => sk,
      d: () => Jk,
      h: () => mk,
      j: () => dk
    });
    var Rk = Bk(22),
      tk = Bk(2303),
      ak = Bk(2305),
      Xk = Bk(2309),
      bk = Bk(2359),
      wk = Bk(29);

    function dk(kk, Fk) {
      return (!(0, Xk.d)() || 0 === kk && 0 === Fk) && (0, ak.u)(tk.j.Joystick, 0, kk, Fk, 0)
    }
    const sk = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Vk(kk) {
      return kk.classList.contains("TouchKeyHit") && Ak() ? null : kk.firstElementChild
    }

    function Jk(kk) {
      return kk.classList.contains("TouchKeyHit") && !kk.classList.contains("CanvasZone") ? {
        whole: !Ak(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: ek(Vk(kk))
      }
    }

    function Ak() {
      return document.documentElement.classList.contains(bk.l)
    }

    function ek(kk) {
      return !(kk instanceof HTMLElement) || kk.offsetWidth <= 0 || kk.offsetHeight <= 0 ? null : {
        width: kk.offsetWidth,
        height: kk.offsetHeight
      }
    }

    function yk(kk, Fk) {
      const Bk = kk => Math.min(65535, Math.round(4 * kk));
      return (Bk(kk) | Bk(Fk) << 16) >>> 0
    }

    function fk(kk) {
      return {
        x: kk.left + kk.width / 2,
        y: kk.top + kk.height / 2,
        radius: Math.min(kk.width, kk.height) / 2
      }
    }
    const mk = new class {
      constructor(kk) {
        this.write = kk, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Fk ? this.elements.set(kk, {
          element: Fk,
          hidden: Bk
        }) : this.elements.delete(kk), this.measureOne(kk)
      }
      measure() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = kk.left, this.canvasTop = kk.top;
        for (const Fk of this.elements.keys()) this.measureOne(Fk)
      }
      hitZone(kk, Fk) {
        let Bk = null,
          Rk = 1;
        for (const tk of this.elements.keys()) {
          const ak = this.shown(tk);
          if (!ak) continue;
          const {
            rect: Xk,
            element: bk
          } = ak, wk = fk(Xk), dk = Math.max(0, Xk.width / 2 - wk.radius), sk = Math.max(0, Xk.height / 2 - wk.radius), Jk = Math.max(0, Math.abs(kk - wk.x) - dk), Ak = Math.max(0, Math.abs(Fk - wk.y) - sk), yk = bk.firstElementChild;
          let mk = Math.hypot(Jk, Ak) / wk.radius;
          const Wk = ek(Vk(bk));
          Wk && (mk = Math.min(mk, Math.max(2 * Math.abs(kk - wk.x) / Wk.width, 2 * Math.abs(Fk - wk.y) / Wk.height))), mk < Rk && (Bk = {
            code: tk,
            element: bk,
            key: yk,
            ...wk
          }, Rk = mk)
        }
        return Bk
      }
      measureOne(kk) {
        const Fk = this.shown(kk);
        if (!Fk) return void this.write(tk.j.TouchZone, kk, 0, 0, 0);
        const {
          rect: Bk,
          element: Rk
        } = Fk, ak = fk(Bk);
        this.write(tk.j.TouchZone, kk, ak.x - this.canvasLeft, ak.y - this.canvasTop, yk(Bk.width, Bk.height));
        const Xk = ek(Vk(Rk));
        this.write(tk.j.TouchZone, 256 | kk, 0, 0, Xk ? yk(Xk.width, Xk.height) : 0)
      }
      shown(kk) {
        const Fk = this.elements.get(kk),
          Bk = Rk.c.get("worldPanelHud");
        if (!Fk || Fk.hidden || "none" === Bk) return null;
        const tk = Fk.element.getBoundingClientRect();
        return tk.width <= 0 || tk.height <= 0 ? null : {
          rect: tk,
          element: Fk.element
        }
      }
    }(ak.u);
    (0, wk.p)(bk.f, (() => {
      mk.measure()
    }))
  },
  40297: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => wk,
      e: () => dk
    });
    var Rk = Bk(40305),
      tk = Bk(38701),
      ak = Bk(36194),
      Xk = Bk(40231),
      bk = Bk(40284);
    const wk = Rk.b.timeForPlayerToConnect - 1e4;
    async function dk(kk, Fk, Bk, Rk) {
      let wk;
      try {
        wk = await kk.getTrafficCode()
      } catch (ek) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", ek), new bk.y(ek)
      }
      const {
        gameNameWithVariation: dk,
        lobbyName: sk
      } = Fk, Vk = () => {
        const Fk = (0, ak.f)(kk, dk, sk, wk, (kk => {
          var Fk;
          return null !== (Fk = null === Bk || void 0 === Bk ? void 0 : Bk.isUsingCustomGameTexturePack(kk)) && void 0 !== Fk && Fk
        }));
        Fk.joinOptions.wasmClient = !0;
        const tk = (0, Xk.I)();
        return null !== tk && (Fk.joinOptions.renderBackend = tk), Fk.joinOptions.joinAdHold = Rk, Fk
      }, {
        roomName: Jk,
        joinOptions: Ak
      } = Vk();
      return {
        endpoint: Fk.endpoint,
        roomName: Jk,
        joinOptions: Ak,
        session: {
          gameNameWithVariation: dk,
          lobbyName: sk,
          playerDbId: kk.whamm
        },
        optionsAfterRefusal: async Fk => await (0, tk.e)(kk, Fk) ? Vk().joinOptions : null
      }
    }
  },
  4726: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      e: () => Xk
    });
    var Rk = Bk(2954),
      tk = Bk(4732);
    let ak = null;

    function Xk(kk, Fk) {
      ak = {
        pack: kk.metaData.id === Rk.c ? null : kk,
        prompt: Fk
      }
    }

    function bk(kk, Fk) {
      const Bk = ak;
      null !== Bk && (0, tk.c)(Bk.pack, kk) && (ak = null, Fk && Bk.prompt())
    }
  },
  40448: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => sk,
      h: () => ak,
      i: () => Vk,
      k: () => Xk
    });
    var Rk = Bk(40435),
      tk = Bk(40387);
    const ak = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(kk) {
        this.change((() => {
          this.page = kk
        }))
      }
      setSessionFiles(kk) {
        const Fk = void 0 !== this.session && void 0 === kk;
        if (this.change((() => {
            this.session = kk
          })), Fk)
          for (const Bk of [...this.pageListeners]) Bk()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(kk) {
        return this.pageListeners.add(kk), () => {
          this.pageListeners.delete(kk)
        }
      }
      setFollower(kk) {
        this.follower = kk, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const kk of [...this.wantedListeners]) kk();
        this.startFollower()
      }
      onWanted(kk) {
        return this.wantedListeners.add(kk), () => {
          this.wantedListeners.delete(kk)
        }
      }
      onChange(kk) {
        return this.listeners.add(kk), () => {
          this.listeners.delete(kk)
        }
      }
      startFollower() {
        const kk = this.follower;
        this.isWanted && null !== kk && (this.follower = null, kk((() => {
          this.follower = kk
        })))
      }
      change(kk) {
        const Fk = this.current;
        if (kk(), this.current !== Fk)
          for (const Bk of this.listeners) Bk()
      }
    };

    function Xk(kk, Fk) {
      return {
        ...kk,
        armourAtlasUrl: () => {
          var Bk, Rk;
          return null !== (Bk = null === (Rk = Fk()) || void 0 === Rk ? void 0 : Rk.armourAtlasUrl()) && void 0 !== Bk ? Bk : kk.armourAtlasUrl()
        },
        lifeformAtlasUrl: Bk => wk(Fk(), (kk => kk.LIFEFORM_ATLAS_PATHS[Bk]), (() => kk.lifeformAtlasUrl(Bk))),
        groupAtlasUrl: Bk => wk(Fk(), (kk => kk.GROUP_ATLAS_PATHS[Bk]), (() => kk.groupAtlasUrl(Bk))),
        particleItemUrl: Rk => dk(Fk(), (async () => {
          const kk = await Bk.e(38).then((() => Bk(51219))).catch((() => null));
          return (null === kk || void 0 === kk ? void 0 : kk.particleItemSprite(Rk)) || null
        }), (() => kk.particleItemUrl(Rk))),
        blockImageUrl: Bk => dk(Fk(), (async () => {
          var kk, Fk;
          return null !== (kk = null === (Fk = await bk()) || void 0 === Fk ? void 0 : Fk.blockImageName(Bk)) && void 0 !== kk ? kk : null
        }), (() => kk.blockImageUrl(Bk)))
      }
    }

    function bk() {
      return (0, tk.o)().catch((() => null))
    }

    function wk(kk, Fk, Bk) {
      return dk(kk, (async () => {
        var kk;
        const Bk = await bk(),
          Rk = null === Bk ? null : Fk(Bk),
          tk = null !== (kk = null === Rk || void 0 === Rk ? void 0 : Rk.slice(Rk.lastIndexOf("/") + 1)) && void 0 !== kk ? kk : null;
        return "Player_Atlas" === tk ? null : tk
      }), Bk)
    }
    async function dk(kk, Fk, Bk) {
      if (null !== kk) {
        const Bk = await Fk(),
          Rk = null === Bk ? null : kk.textureUrl(Bk);
        if (null !== Rk) return Rk
      }
      return Bk()
    }
    const sk = 0;

    function Vk(kk) {
      const Fk = [Rk.h.ArmourAtlas, Rk.h.LifeformAtlas, Rk.h.GroupAtlas, Rk.h.BlockImage, Rk.h.Particle];
      kk.reload(Fk, (kk => {
        switch (kk.kind) {
          case Rk.h.Particle:
            return kk.index === Rk.j.Item;
          case Rk.h.LifeformAtlas:
            return kk.word !== sk;
          default:
            return !0
        }
      }))
    }
  },
  40311: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk,
      f: () => bk,
      i: () => Xk,
      k: () => tk,
      m: () => ak
    });
    const Rk = 1e3;

    function tk() {
      wk((() => {
        window.location.reload()
      }))
    }

    function ak() {
      return new Promise((() => {}))
    }

    function Xk(kk) {
      wk((() => {
        window.location.replace(kk(window.location.href))
      }))
    }

    function bk(kk) {
      Promise.resolve().then((() => Bk(109))).then((Fk => {
        let {
          currentUrl: Bk
        } = Fk;
        Xk((() => Bk.mergeSearchParamsInto(kk)))
      }), (() => {
        Xk((() => kk))
      }))
    }

    function wk(kk) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => Bk(1650))).then((Fk => {
        let {
          prepareForUnloadWithoutConfirmation: Bk
        } = Fk;
        try {
          Bk()
        } catch (Rk) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Rk), window.onbeforeunload = null
        }
        kk()
      }), (() => {
        window.onbeforeunload = null, kk()
      })) : kk()
    }
  },
  4732: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return tk(kk, Fk)
    }

    function tk(kk, Fk) {
      if (kk === Fk) return !0;
      if ("object" !== typeof kk || "object" !== typeof Fk || null === kk || null === Fk || Array.isArray(kk) !== Array.isArray(Fk)) return !1;
      const Bk = kk,
        Rk = Fk,
        ak = Object.keys(Bk);
      return ak.length === Object.keys(Rk).length && ak.every((kk => Object.prototype.hasOwnProperty.call(Rk, kk) && tk(Bk[kk], Rk[kk])))
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  40352: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Ok,
      d: () => Yk,
      h: () => fk,
      i: () => yk
    });
    var Rk = Bk(1727),
      tk = Bk(1733),
      ak = Bk(38699),
      Xk = Bk(38708),
      bk = Bk(1698),
      wk = Bk(40280),
      dk = Bk(40284);
    const sk = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Vk = 3,
      Jk = [500, 1500];

    function Ak(kk) {
      const Fk = new URL(kk);
      return {
        secure: "https:" === Fk.protocol || "wss:" === Fk.protocol,
        host: Fk.host,
        pathname: Fk.pathname.replace(/\/+$/, ""),
        search: Fk.searchParams.toString()
      }
    }

    function ek(kk, Fk, Bk) {
      const {
        secure: Rk,
        host: tk,
        pathname: ak,
        search: Xk
      } = Ak(kk);
      return `${Rk?"https":"http"}://${tk}${ak}/matchmake/${Fk}/${encodeURIComponent(Bk)}${Xk?`?${Xk}`:""}`
    }

    function yk(kk, Fk) {
      var Bk;
      const Rk = null !== (Bk = Fk.protocol) && void 0 !== Bk ? Bk : "ws";
      if ("ws" !== Rk) throw new Error(`seat reservation asks for the ${Rk} transport`);
      const {
        secure: tk,
        host: ak,
        pathname: Xk,
        search: bk
      } = Ak(kk), wk = new URLSearchParams(bk);
      wk.append("sessionId", Fk.sessionId), Fk.reconnectionToken && wk.append("reconnectionToken", Fk.reconnectionToken);
      return `${tk?"wss":"ws"}://${Fk.room.publicAddress||`${ak}${Xk}`}/${Fk.room.processId}/${Fk.room.roomId}?${wk.toString()}`
    }
    async function fk(kk, Fk, Bk) {
      var wk;
      let sk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Ak = null !== (wk = sk.sleep) && void 0 !== wk ? wk : Rk.b,
        yk = new tk.d(sk.signal),
        fk = new bk.e(Xk.d, (() => {
          (0, tk.i)(yk.controller, new Xk.e)
        })),
        {
          signal: ik
        } = yk;
      try {
        return await (0, ak.f)((() => async function(kk, Fk, Bk, Rk) {
          var ak;
          const {
            signal: Xk,
            sleep: bk
          } = Rk, wk = ek(kk, "joinOrCreate", Fk), sk = JSON.stringify(Bk);
          let Ak = null;
          for (let ek = 0; ek < Vk; ek++) {
            var yk;
            if (ek > 0) await bk(null !== (yk = Jk[ek - 1]) && void 0 !== yk ? yk : 1500, Xk);
            let kk;
            (0, tk.k)(Xk);
            try {
              kk = await Wk(wk, sk, Rk)
            } catch (fk) {
              (0, tk.k)(Xk), Ak = mk(fk);
              continue
            }
            const {
              response: Fk,
              answer: Bk,
              refusal: ak,
              lost: Vk
            } = kk;
            if (null === Vk) {
              if (null !== ak) throw vk(ak, Bk);
              if (Fk.ok && null !== Bk && Ek(Bk)) return Bk;
              Ak = new dk.u(`seat request answered HTTP ${Fk.status}${null===Bk?" without JSON":" without a seat"}`, !1)
            } else Ak = mk(Vk.error)
          }
          throw null !== (ak = Ak) && void 0 !== ak ? ak : new dk.u("seat request made no attempt", !1)
        }(kk, Fk, Bk, {
          ...sk,
          signal: ik,
          sleep: Ak
        })), ik, Ak)
      } finally {
        fk.stop(), yk.unfollow()
      }
    }

    function mk(kk) {
      return new dk.u(kk instanceof Error ? kk.message : String(kk), !0, kk)
    }
    async function Wk(kk, Fk, Bk) {
      var Rk;
      const {
        signal: ak
      } = Bk, Xk = null !== (Rk = Bk.fetch) && void 0 !== Rk ? Rk : fetch, bk = await Xk(kk, {
        method: "POST",
        headers: {
          ...sk,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: Fk,
        credentials: "include",
        signal: ak
      }), {
        answer: wk,
        lost: dk
      } = await async function(kk) {
        try {
          const Fk = await kk.json();
          return {
            answer: "object" === typeof Fk && null !== Fk ? Fk : null,
            lost: null
          }
        } catch (Fk) {
          return {
            answer: null,
            lost: Fk instanceof SyntaxError ? null : {
              error: Fk
            }
          }
        }
      }(bk), Vk = null !== wk && "string" === typeof wk.error ? wk.error : null;
      var Jk;
      null !== Vk && (null === (Jk = Bk.onRefusal) || void 0 === Jk || Jk.call(Bk));
      return (0, tk.k)(ak), {
        response: bk,
        answer: wk,
        refusal: Vk,
        lost: dk
      }
    }

    function vk(kk, Fk) {
      return new dk.n(kk, "number" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.code) ? Fk.code : 0, (0, wk.l)(kk).text)
    }
    class ik extends Error {
      constructor(kk, Fk) {
        super(kk), this.code = Fk, this.name = "SeatHttpError"
      }
    }
    async function Yk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: tk,
        answer: ak,
        refusal: Xk,
        lost: bk
      } = await Wk(ek(kk, "reconnect", Fk), JSON.stringify({
        reconnectionToken: Bk
      }), Rk);
      if (null !== bk) throw bk.error;
      if (!tk.ok) {
        const kk = null !== ak && "number" === typeof ak.code && 0 !== ak.code ? ak.code : tk.status;
        throw new ik(`the seat's reconnect was refused: ${null!==Xk&&void 0!==Xk?Xk:`HTTP ${tk.status}`}`, kk)
      }
      if (null !== Xk) throw vk(Xk, ak);
      if (null === ak || !Ek(ak)) throw new Error("the seat's reconnect answered " + (null === ak ? "without JSON" : "without a seat"));
      return {
        ...ak,
        reconnectionToken: Bk
      }
    }
    const Lk = 10;

    function Ok(kk) {
      if (kk.byteLength < 2 || kk[0] !== Lk) return null;
      const Fk = 2 + kk[1];
      return Fk > kk.byteLength ? null : (new TextDecoder).decode(kk.subarray(2, Fk))
    }

    function Ek(kk) {
      const Fk = kk.room;
      return "string" === typeof kk.sessionId && "object" === typeof Fk && null !== Fk && "string" === typeof Fk.roomId && "string" === typeof Fk.processId && "string" === typeof Fk.name
    }
  },
  40021: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Mk,
      B: () => ik,
      E: () => Yk,
      G: () => fk,
      I: () => Nk,
      L: () => Uk,
      O: () => ek,
      R: () => Gk,
      S: () => Wk,
      T: () => mk,
      X: () => vk,
      Z: () => Lk,
      b: () => tk,
      f: () => ck,
      g: () => gk,
      k: () => Ak,
      n: () => yk,
      p: () => uk,
      r: () => Ek,
      v: () => Hk,
      x: () => Sk,
      y: () => Ok
    });
    var Rk = Bk(2778);
    const tk = {
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

    function ak(kk, Fk) {
      return !ArrayBuffer.isView(kk) || kk instanceof DataView ? Array.isArray(kk) ? kk.map((kk => Fk(kk))) : kk : Array.from(kk, (kk => Fk(kk)))
    }

    function Xk(kk) {
      if ("string" !== typeof kk) return kk;
      for (let Fk = 0; Fk < kk.length; Fk++) {
        const Bk = kk.charCodeAt(Fk);
        if (Bk >= 55296 && Bk <= 57343) return wk.decode(bk.encode(kk))
      }
      return kk
    }
    const bk = new TextEncoder,
      wk = new TextDecoder;

    function dk(kk) {
      return kk
    }
    let sk;

    function Vk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [Xk(kk.aX), Xk(kk.XX)]
    }

    function Jk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [ak(kk.xa, dk), ak(kk.Gd, dk)]
    }

    function Ak(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.UX), Xk(Fk.cX)];
      var Fk
    }

    function ek(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.id, Fk.eX];
      var Fk
    }

    function yk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.WF, Xk(Fk.vF), Fk.iF, Xk(Fk.LF), Fk.HF, Fk.uF, Fk.uX, Xk(Fk.MX), Xk(Fk.gX)];
      var Fk
    }

    function fk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ak(Fk.Gs, dk), Fk.Ts];
      var Fk
    }

    function mk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ak(Fk.Ob, (kk => Xk(kk))), Xk(Fk.Eb), Fk.Sb];
      var Fk
    }

    function Wk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ak(Fk.yX, dk), Xk(Fk.fX), Fk.mX];
      var Fk
    }

    function vk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.hB), Xk(Fk.qB)];
      var Fk
    }

    function ik(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.fb)];
      var Fk
    }

    function Yk(kk) {
      return Xk(kk)
    }

    function Lk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.AV), Xk(Fk.eV), Xk(Fk.aX), Xk(Fk.XX)];
      var Fk
    }

    function Ok(kk) {
      return Vk(kk)
    }

    function Ek(kk) {
      return Vk(kk)
    }

    function Sk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.GX)];
      var Fk
    }

    function Nk(kk) {
      return kk
    }

    function Hk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.dX), Xk(Fk.sX)];
      var Fk
    }

    function uk(kk) {
      return Xk(kk)
    }

    function Mk(kk) {
      return Jk(kk)
    }

    function gk(kk) {
      return Jk(kk)
    }

    function Uk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Xk(Fk.ob)];
      var Fk
    }

    function ck(kk) {
      return (sk ??= (0, Rk.d)().map((kk => kk.name)), sk).map((Fk => {
        return "string" === typeof(Bk = kk[Fk]) ? Xk(Bk) : ak(Bk, dk);
        var Bk
      }))
    }

    function Gk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.Mb, Fk.gb, Fk.Ub];
      var Fk
    }
  },
  40452: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(40460),
      tk = Bk(40448);
    const ak = new class {
      constructor(kk) {
        this.pack = kk, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, kk.onWanted((() => {
          this.release()
        }))
      }
      setGame(kk) {
        if (void 0 === kk && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const Fk = this.inGame();
        if (this.game = kk, this.update(), this.inGame() !== Fk)
          for (const Bk of this.gameListeners) Bk()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(kk) {
        return this.gameListeners.add(kk), () => {
          this.gameListeners.delete(kk)
        }
      }
      unwantedLeave(kk) {
        kk && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(kk) {
        null !== kk && kk === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const kk = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, kk && this.setGame(void 0)
      }
      setSettled(kk) {
        this.settle = kk, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Rk.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(tk.h)
  },
  40278: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      followPageUiPack: () => gd,
      packForGame: () => Md,
      playWasmGame: () => Zd,
      prefetchWasmPreviews: () => qb,
      setGamePackConfirm: () => nw,
      startWasmPlay: () => rd,
      startWasmPreviews: () => hb
    });
    var Rk = Bk(182),
      tk = Bk(1195),
      ak = Bk(152),
      Xk = Bk(38719),
      bk = Bk(1847),
      wk = Bk(29),
      dk = Bk(4409),
      sk = Bk(1259),
      Vk = Bk(1646),
      Jk = Bk(1267),
      Ak = Bk(38849),
      ek = Bk(38856),
      yk = Bk(38773),
      fk = Bk(36202),
      mk = Bk(38699),
      Wk = Bk(8577),
      vk = Bk(38708),
      ik = Bk(40097),
      Yk = Bk(4511),
      Lk = Bk(40015),
      Ok = Bk(40077),
      Ek = Bk(40021);
    const Sk = {
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

    function Nk(kk) {
      const Fk = {
        ...Ok.d[kk]
      };
      for (const Bk of Object.keys(Sk[kk])) delete Fk[Bk];
      return Fk
    }

    function Hk() {
      var kk, Fk;
      return null === (kk = null === (Fk = (0, Lk.g)()) || void 0 === Fk ? void 0 : Fk.localPlayerAlive()) || void 0 === kk || kk
    }

    function uk() {
      var kk, Fk;
      return null !== (kk = null === (Fk = (0, Lk.g)()) || void 0 === Fk ? void 0 : Fk.localDeaths()) && void 0 !== kk ? kk : null
    }
    const Mk = {
        current: Hk,
        watch: kk => {
          let Fk = Hk(),
            Bk = uk();
          return (0, Yk.x)((() => {
            const Rk = Hk(),
              tk = uk(),
              ak = null !== tk && null !== Bk && tk !== Bk;
            Bk = tk, ak ? (Fk || kk(!0), kk(!1), Rk && kk(!0), Fk = Rk) : Rk !== Fk && (Fk = Rk, kk(Rk))
          }))
        }
      },
      gk = {
        states: {
          ...Nk("states"),
          localPlayerAlive: Mk
        },
        events: {
          ...Nk("events"),
          localPlayerAliveSet: {
            watch: Mk.watch
          }
        },
        commands: {
          ...Nk("commands"),
          respawn: () => {
            var kk;
            null === (kk = (0, Lk.g)()) || void 0 === kk || kk.respawn()
          },
          playEmote: kk => {
            var Fk;
            null === (Fk = (0, Lk.g)()) || void 0 === Fk || Fk.send(Ek.b.PlayEmote, (0, Ek.B)({
              fb: kk
            }))
          },
          applyTemporaryThirdPerson: kk => {
            var Fk;
            let {
              durationMs: Bk
            } = kk;
            null === (Fk = (0, Lk.g)()) || void 0 === Fk || Fk.thirdPersonFor(Bk)
          },
          bindCustomButtonKeys: kk => {
            var Fk;
            null === (Fk = (0, Lk.g)()) || void 0 === Fk || Fk.bindCustomButtonKeys(kk)
          },
          pressCustomButton: kk => {
            var Fk;
            let {
              id: Bk,
              down: Rk
            } = kk;
            null === (Fk = (0, Lk.g)()) || void 0 === Fk || Fk.pressCustomButton(Bk, Rk)
          },
          setLookSensitivity: () => {},
          wakeUp: kk => {
            const Fk = (0, Ek.L)({
                ob: kk
              }),
              Bk = () => {
                const kk = (0, Lk.g)();
                return !(null !== kk && void 0 !== kk && kk.isSessionLive) || kk.send(Ek.b.StopSleeping, Fk)
              };
            if (!Bk()) {
              const kk = (0, Yk.x)((() => {
                Bk() && kk()
              }))
            }
          },
          setCameraZoom: kk => {
            var Fk;
            null === (Fk = (0, Lk.g)()) || void 0 === Fk || Fk.setCameraZoom(kk)
          }
        },
        queries: Nk("queries"),
        lookups: {
          ...Nk("lookups"),
          cameraZoom: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = (0, Lk.g)()) || void 0 === Fk ? void 0 : Fk.cameraZoom()) && void 0 !== kk ? kk : 0
          }
        }
      };
    var Uk = Bk(40280),
      ck = Bk(40284),
      Gk = Bk(40288),
      Tk = Bk(40297),
      rk = Bk(1209),
      Dk = Bk(109),
      zk = Bk(4258),
      Pk = Bk(3515),
      hk = Bk(1132);
    const qk = {
      Us: () => (0, rk.e)(),
      inbuiltOverwritten: () => zk.d,
      reflectApplyHit: () => hk.b,
      definerHit: () => Dk.currentUrl.c,
      emitReplaced: () => (0, wk.c)(),
      confirmMesh: () => (0, Pk.d)()
    };
    var Ck = Bk(40290),
      Zk = Bk(40311);
    var pk = Bk(22),
      Kk = Bk(1849),
      xk = Bk(1881),
      jk = Bk(1594),
      lk = Bk(1933),
      nk = Bk(1149),
      Ik = Bk(1203),
      Qk = Bk(40254);

    function kF() {
      return Ik.c.get().getCurrentLanguageCode()
    }

    function FF(kk) {
      const Fk = () => {
        kk({
          translate: (kk, Fk) => (0, nk.o)(kF(), kk, Fk),
          keyBindingText: kk => {
            const Fk = (0, xk.r)(kk, pk.c.get("isTouchScreen"));
            return null !== Fk ? (0, nk.r)(kF(), Fk.translationKey, Fk.params) : (0, xk.n)((0, xk.o)(kk))
          },
          isFriend: lk.e,
          hiddenNames: Kk.b.shown,
          loadsFontRest: (0, Qk.d)(kF())
        })
      };
      let Bk = !1;
      const Rk = () => {
          const kk = kF();
          (0, nk.h)(kk).then((() => {
            Bk || kk !== kF() || Fk()
          }))
        },
        tk = () => jk.b.getSocialState().friends.map((kk => kk.name.toLowerCase())).sort().join(" ");
      let ak = tk();
      Fk(), Rk();
      const Xk = [(0, Ik.f)((() => {
        Fk(), Rk()
      })), (0, wk.p)("customBindingsChanged", Fk), (0, wk.p)("appManagerUpdated|isTouchScreen", Fk), (0, lk.d)((() => {
        const kk = tk();
        kk !== ak && (ak = kk, Fk())
      })), Kk.b.subscribe(Fk)];
      return () => {
        Bk = !0;
        for (const kk of Xk) kk()
      }
    }
    var BF = Bk(608),
      RF = Bk(994),
      tF = Bk(1870),
      aF = Bk(279),
      XF = Bk(3502),
      bF = Bk(36046),
      wF = Bk(3506),
      dF = Bk(38369),
      sF = Bk(4425),
      VF = Bk(40171),
      JF = Bk(624),
      AF = Bk(665),
      eF = Bk(670),
      yF = Bk(1863),
      fF = Bk(3519),
      mF = Bk(3083);
    let WF = null;
    var vF = Bk(1154),
      iF = Bk(1733),
      YF = Bk(4166),
      oF = Bk(3250),
      LF = Bk(55),
      OF = Bk(276),
      EF = Bk(267),
      SF = Bk(40122),
      NF = Bk(4517);
    var HF = Bk(40319);
    class uF {
      constructor(kk, Fk) {
        this.showView = kk, this.holdForAd = Fk
      }
      pointerUnlockRequestsChanged() {
        (0, SF.A)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, SF.o)())
        }]
      }
      setGameViewShown(kk) {
        this.showView(kk)
      }
      setGameView(kk) {
        (0, HF.p)(kk)
      }
      videoAdHold(kk, Fk) {
        this.holdForAd(kk, Fk)
      }
    }
    class MF {
      leave(kk) {
        ! function(kk) {
          if (null !== (0, Jk.e)().websocketUrl) try {
            (0, Yk.J)().leaveGame(kk)
          } finally {
            (0, Jk.u)({
              websocketUrl: null
            })
          }
        }(kk)
      }
      isReplay() {
        return !1
      }
    }
    class gF {
      watchFrameStarts(kk) {
        return (0, Yk.s)(kk)
      }
      watchFrames(kk) {
        return (0, Yk.p)(kk)
      }
      watchTicks(kk) {
        return (0, Yk.x)(kk)
      }
    }
    var UF = Bk(1245),
      cF = Bk(40322);

    function GF(kk) {
      return kk >= 0 ? Math.min(1, kk) : 0
    }

    function TF(kk, Fk) {
      const {
        fade: Bk
      } = kk;
      return null === Bk || Fk - Bk.at >= Bk.ms ? kk.volume : Bk.from + (kk.volume - Bk.from) * Math.max(0, (Fk - Bk.at) / Bk.ms)
    }

    function rF(kk) {
      const Fk = Object.entries(kk),
        Bk = new Uint32Array(Fk.length);
      let Rk = 0;
      for (const [Xk, [, bk]] of Fk.entries()) Bk[Xk] = bk.length, Rk += bk.length;
      const tk = new Float64Array(3 * Rk);
      let ak = 0;
      for (const [, Xk] of Fk)
        for (const kk of Xk) tk.set(kk, ak), ak += 3;
      return {
        blocks: Fk.map((kk => {
          let [Fk] = kk;
          return Fk
        })).join("\0"),
        counts: Bk,
        values: tk
      }
    }
    class DF {
      constructor(kk, Fk) {
        this.core = kk, this.warn = Fk, this.latest = 0
      }
      async feed() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zF;
        const Fk = ++this.latest;
        let Bk;
        try {
          Bk = await kk()
        } catch (Rk) {
          return void(this.core.isStopped || Fk !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Rk))
        }
        Fk === this.latest && (this.core.setBlockColours(Bk) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function zF() {
      return rF((await Bk.e(201).then((() => Bk(34024)))).averageColors)
    }
    var PF = Bk(4524),
      hF = Bk(4531),
      qF = Bk(40065),
      CF = Bk(36011),
      ZF = Bk(40239),
      pF = Bk(597),
      KF = Bk(36724),
      xF = Bk(594),
      jF = Bk(291),
      lF = Bk(40200);
    const nF = [3e4, 12e4, 3e5];
    class IF extends Error {}
    const QF = {
      mobTypes: pF.p,
      vehicleTypes: KF.e,
      mobAiStates: pF.l,
      playerPoses: xF.o
    };
    var kB = Bk(40189),
      FB = Bk(40330),
      BB = Bk(40342),
      RB = Bk(40346),
      tB = Bk(3272),
      aB = Bk(38692),
      XB = Bk(4546),
      bB = Bk(2303);
    const wB = bB.A.KeysDisabled | bB.A.LookFrozen | bB.A.ClicksSuppressed,
      dB = tB.h;
    var sB = (0, RB.c)("resumingConn");
    class VB {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = kk, this.now = Fk, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, sB, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new aB.b({
          reconnect: kk => this.reconnect(kk),
          isLive: () => kk.isLive(),
          onReconnected: Fk => {
            this.landed = Fk, kk.onReconnected(Fk), this.landIfResumed()
          },
          onGaveUp: (Fk, Bk) => {
            this.abortAttempt(), kk.onGaveUp(Fk, Bk)
          },
          freeze: Fk => {
            kk.lL(Fk), (0, XB.i)(wB, Fk ? wB : 0, "reconnectFreeze")
          },
          releaseSeat: kk => {
            this.releaseSeat(kk)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, BB.b)(this, sB)[sB]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(kk) {
        let {
          conn: Fk,
          graceMs: Bk,
          sessionBased: Rk,
          replayOffer: tk
        } = kk;
        this.session.onInitialInfo(Bk, Rk), this.isResuming() && (this.initialInfoConn = Fk, this.initialInfoOffer = tk, this.landIfResumed())
      }
      onResumeComplete(kk) {
        0 !== kk && (kk === (0, BB.b)(this, sB)[sB] ? ((0, BB.b)(this, sB)[sB] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = kk))
      }
      onDropped(kk) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, BB.b)(this, sB)[sB] = 0, this.session.onConnectionLost(kk)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, BB.b)(this, sB)[sB] = 0, this.session.end()
      }
      reconnect(kk) {
        const Fk = this.attempt;
        if (null !== Fk && this.awaitingJoinRoom(Fk)) return Fk.result;
        this.abortAttempt();
        const Bk = new AbortController,
          Rk = this.drops,
          tk = {
            attachedAt: null
          },
          ak = this.shell.reconnect(kk, Bk.signal, (() => {
            tk.attachedAt = this.now()
          })).then((kk => {
            if (this.clearAttempt(Xk), this.drops !== Rk) throw new Error("the resumed room dropped before its attempt settled");
            return kk
          }), (kk => {
            throw this.clearAttempt(Xk), kk
          })),
          Xk = {
            abort: Bk,
            socket: tk,
            result: ak
          };
        return this.attempt = Xk, ak
      }
      clearAttempt(kk) {
        this.attempt === kk && (this.attempt = null)
      }
      abortAttempt() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const Fk = this.attempt;
        this.attempt = null, null === Fk || void 0 === Fk || Fk.abort.abort(kk)
      }
      awaitingJoinRoom(kk) {
        const Fk = kk.socket.attachedAt;
        return null !== Fk && this.now() - Fk < dB
      }
      releaseSeat(kk) {
        const Fk = this.attempt,
          Bk = null !== Fk && this.awaitingJoinRoom(Fk);
        this.abortAttempt(new ck.t), Bk || this.shell.releaseSeat(kk)
      }
      landIfResumed() {
        const kk = this.landed;
        if (null !== kk && kk.conn === this.initialInfoConn) {
          const Fk = this.initialInfoOffer && this.completedEarlyConn !== kk.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !Fk) return void this.session.onResumed();
          (0, BB.b)(this, sB)[sB] = kk.conn, this.session.onResuming()
        }
      }
    }
    var JB = Bk(38696),
      AB = Bk(40352),
      eB = Bk(36209),
      yB = Bk(36204),
      fB = Bk(4726),
      mB = Bk(4154),
      WB = Bk(3073),
      vB = Bk(40141),
      iB = Bk(629),
      YB = Bk(4242),
      oB = Bk(42),
      LB = Bk(40355),
      OB = Bk(40401),
      EB = Bk(4179),
      SB = Bk(2305),
      NB = Bk(1585),
      HB = Bk(1614),
      uB = Bk(1239),
      MB = Bk(112),
      gB = Bk(2672),
      UB = Bk(2309),
      cB = Bk(4541);
    const GB = new Set([PF.hb.KeyDown, PF.hb.MouseMove, PF.hb.MouseDown, PF.hb.Wheel, PF.hb.TouchStart, PF.hb.TouchMove]);

    function TB(kk) {
      return (kk.shiftKey ? PF.qb.Shift : 0) | (kk.ctrlKey ? PF.qb.Ctrl : 0) | (kk.altKey ? PF.qb.Alt : 0) | (kk.metaKey ? PF.qb.Meta : 0) | ("repeat" in kk && kk.repeat ? PF.qb.Repeat : 0) | (kk.isTrusted ? 0 : PF.qb.Untrusted)
    }

    function rB(kk) {
      return "touchOnly" !== (0, MB.c)() && "function" === typeof kk.requestPointerLock
    }

    function DB(kk) {
      return 0 === kk.button ? kk.altKey ? cB.m["Alt+Left Click"] : cB.m.Mouse1 : 1 === kk.button ? cB.m.Mouse2 : cB.m.Mouse3
    }
    const zB = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      PB = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      hB = 32768,
      qB = 1;

    function CB(kk) {
      return Math.min(Math.max(Math.round(kk), 0), 65535)
    }

    function ZB(kk, Fk, Bk) {
      const Rk = [],
        tk = (kk, Fk, Bk, tk) => {
          const ak = kk => {
            (0, HB.r)(kk) || Bk(kk)
          };
          kk.addEventListener(Fk, ak, tk), Rk.push((() => {
            kk.removeEventListener(Fk, ak, tk)
          }))
        },
        ak = {
          capture: !0,
          passive: !0
        },
        Xk = (kk, Bk, Rk, tk, ak) => (!(0, UB.d)() || !GB.has(kk)) && (Fk(kk, Bk, Rk, tk, ak), !0),
        bk = () => document.pointerLockElement === kk,
        wk = (0, gB.d)(),
        dk = kk => {
          kk.ctrlKey && Bk.ctrlCombosAreGames() && !(0, XB.g)(kk.target) && kk.preventDefault()
        },
        sk = (kk, Rk, tk) => {
          Bk.inspect(kk, Rk, !1), Fk(PF.hb.KeyUp, Rk, 0, 0, (0, SB.n)(tk, kk.timeStamp)), Bk.keyReleased(Rk)
        },
        Vk = new Map,
        Jk = (kk, Fk, Bk) => kk[Bk] || ("AltRight" === Fk || "ControlLeft" === Fk) && kk.getModifierState("AltGraph"),
        Ak = new Map,
        ek = () => {
          Vk.clear(), Ak.clear()
        },
        yk = kk => {
          if (document.hasFocus())
            for (const [Fk, Bk] of Ak) Ak.delete(Fk), Jk(kk, Fk, Bk) || (Vk.delete(Fk), sk(kk, cB.m[Fk], TB(kk)))
        };
      kk.tabIndex = -1;
      let fk = 0,
        mk = 0;
      const Wk = () => {
        const Fk = kk.getBoundingClientRect();
        fk = Fk.left, mk = Fk.top
      };
      let vk = "mouse";
      const ik = () => !bk() && ("mouse" === vk || !Bk.touchUiShown()),
        Yk = (kk, Fk, Bk) => {
          const Rk = (CB(kk.clientX - fk) | CB(kk.clientY - mk) << 16) >>> 0;
          Xk(PF.hb.MouseMove, PF.rb.Point, Fk, Bk, Rk)
        };
      let Lk = !1,
        Ok = 0;
      const Ek = () => {
        Lk && (Lk = !1, Bk.viewShown() && (0, SF.M)())
      };
      Rk.push((() => {
        clearTimeout(Ok)
      })), tk(window, "keydown", (kk => {
        "Escape" === kk.key ? (0, SF.E)(!0) : kk.repeat || (0, XB.g)(kk.target) || (Lk = !0, clearTimeout(Ok), Ok = window.setTimeout(Ek, 0))
      }), ak), tk(window, "keydown", (kk => {
        Ek(), dk(kk), yk(kk);
        const Fk = cB.m[kk.code];
        if ("number" !== typeof Fk || !Bk.viewShown()) return;
        const Rk = (0, XB.g)(kk.target);
        Rk || !Bk.prevents(Fk) && !zB.has(kk.code) || kk.preventDefault(), kk.repeat || Bk.inspect(kk, Fk, !0), Xk(PF.hb.KeyDown, Fk, 0, 0, (0, SB.n)(TB(kk), kk.timeStamp)) && Vk.set(kk.code, Fk), Rk || Bk.keyPressed(Fk)
      }), {
        capture: !1,
        passive: !1
      }), tk(window, "keyup", (kk => {
        "Escape" === kk.key && (0, SF.E)(!1), dk(kk), Vk.delete(kk.code), Ak.delete(kk.code), yk(kk);
        const Fk = cB.m[kk.code];
        "number" === typeof Fk && sk(kk, Fk, TB(kk))
      }), {
        capture: !0,
        passive: !1
      }), tk(window, "mousemove", (kk => {
        "mouse" === vk && ik() ? Yk(kk, kk.movementX, kk.movementY) : bk() ? Xk(PF.hb.MouseMove, PF.rb.Stamped, kk.movementX, kk.movementY, (0, SB.n)(0, kk.timeStamp)) : Xk(PF.hb.MouseMove, 0, kk.movementX, kk.movementY, 0)
      }), ak);
      let Sk = 0,
        Nk = 0;
      const Hk = [];
      let uk = !1,
        Mk = !1;
      tk(kk, "mousedown", (kk => {
        if ((0, UB.d)()) return;
        yk(kk);
        const Rk = 1 << kk.button;
        if (!bk() && (0, SF.L)() && (0, SF.e)() && (Mk = !0, !uk)) return void(Sk |= Rk);
        Sk &= ~Rk;
        const tk = kk.button <= 2 ? DB(kk) : void 0;
        void 0 !== tk && (Hk[kk.button] = tk, Bk.inspect(kk, tk, !0)), ik() && Yk(kk, 0, 0), Fk(PF.hb.MouseDown, kk.button, kk.clientX, kk.clientY, (0, SB.n)(TB(kk), kk.timeStamp)), Nk |= Rk, void 0 !== tk && Bk.keyPressed(tk)
      }), ak), tk(window, "mouseup", (kk => {
        var Rk;
        yk(kk);
        const tk = 1 << kk.button,
          ak = 0 !== (Sk & ~Nk & tk);
        if (Sk &= ~tk, Nk &= ~tk, ak) return;
        const Xk = kk.button <= 2 ? null !== (Rk = Hk[kk.button]) && void 0 !== Rk ? Rk : DB(kk) : void 0;
        void 0 !== Xk && Bk.inspect(kk, Xk, !1), Fk(PF.hb.MouseUp, kk.button, kk.clientX, kk.clientY, (0, SB.n)(TB(kk), kk.timeStamp)), void 0 !== Xk && Bk.keyReleased(Xk)
      }), ak), tk(kk, "contextmenu", (kk => {
        kk.preventDefault()
      }), {
        passive: !1
      });
      const gk = kk => {
        (bk() || (0, SF.n)() && (0, uB.o)()) && (kk.ctrlKey || wk && !document.fullscreenElement) && kk.preventDefault()
      };
      tk(kk, "wheel", (kk => {
        gk(kk), yk(kk), Xk(PF.hb.Wheel, kk.deltaMode, kk.deltaX, kk.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Uk = {
          capture: !0,
          passive: !1
        },
        ck = kk => {
          kk ? window.addEventListener("wheel", gk, Uk) : window.removeEventListener("wheel", gk, Uk)
        };
      ck((0, SF.n)()), Rk.push((0, SF.s)(ck)), Rk.push((() => {
        ck(!1)
      }));
      const Gk = new Map,
        Tk = new Set,
        rk = kk => {
          const Fk = "stylus" === kk.touchType;
          for (const Bk of Gk.values())
            if (!Bk.touched && (Fk || Math.abs(kk.clientX - Bk.x) <= qB && Math.abs(kk.clientY - Bk.y) <= qB)) return Bk.touched = !0, !0;
          return !1
        },
        Dk = kk => 32767 & kk,
        zk = new Set,
        Pk = kk => Bk => {
          const Rk = (0, SB.n)(TB(Bk), Bk.timeStamp);
          kk !== PF.hb.TouchStart && kk !== PF.hb.TouchMove || ((kk, Bk) => {
            const Rk = kk.touches;
            if (Rk)
              for (const tk of zk) {
                let kk = !1;
                for (let Fk = 0; Fk < Rk.length && !kk; Fk++) kk = Dk(Rk[Fk].identifier) === tk;
                kk || (zk.delete(tk), Fk(PF.hb.TouchCancel, tk, 0, 0, Bk))
              }
          })(Bk, Rk);
          const tk = Bk.changedTouches;
          for (let Fk = 0; Fk < tk.length; Fk++) {
            const Bk = tk[Fk];
            if (kk === PF.hb.TouchStart && rk(Bk) && Tk.add(Bk.identifier), Tk.has(Bk.identifier)) {
              kk !== PF.hb.TouchEnd && kk !== PF.hb.TouchCancel || Tk.delete(Bk.identifier);
              continue
            }
            const ak = Dk(Bk.identifier),
              bk = Xk(kk, ak, Bk.clientX - fk, Bk.clientY - mk, Rk);
            kk === PF.hb.TouchStart ? bk && zk.add(ak) : kk !== PF.hb.TouchMove && zk.delete(ak)
          }
        },
        hk = Pk(PF.hb.TouchStart);
      tk(kk, "touchstart", (kk => {
        kk.preventDefault(), (0, UB.d)() || (Bk.touchStarting(), hk(kk))
      }), {
        passive: !1
      }), tk(kk, "touchmove", Pk(PF.hb.TouchMove), ak), tk(kk, "touchend", Pk(PF.hb.TouchEnd), ak), tk(kk, "touchcancel", Pk(PF.hb.TouchCancel), ak);
      const qk = kk => hB | 32767 & kk,
        Ck = (kk, Fk) => {
          Xk(kk, qk(Fk.pointerId), Fk.clientX - fk, Fk.clientY - mk, (0, SB.n)(TB(Fk), Fk.timeStamp))
        };
      tk(window, "pointerdown", (Fk => {
        vk = Fk.pointerType, "mouse" === Fk.pointerType && Fk.target !== kk && Bk.viewShown() && (0, SF.O)()
      }), ak), tk(kk, "pointerdown", (kk => {
        "pen" === kk.pointerType && 0 === kk.button && (0, SF.n)() && (0, uB.o)() && (kk.preventDefault(), (0, UB.d)() || (Gk.set(kk.pointerId, {
          x: kk.clientX,
          y: kk.clientY,
          touched: !1
        }), Bk.touchStarting(), Ck(PF.hb.TouchStart, kk)))
      }), {
        passive: !1
      }), tk(window, "pointermove", (kk => {
        vk = kk.pointerType, Gk.has(kk.pointerId) && Ck(PF.hb.TouchMove, kk), "mouse" !== kk.pointerType && ik() && Yk(kk, 0, 0)
      }), ak);
      const Zk = kk => Fk => {
        Gk.delete(Fk.pointerId) && Ck(kk, Fk)
      };
      tk(window, "pointerup", Zk(PF.hb.TouchEnd), ak), tk(window, "pointercancel", Zk(PF.hb.TouchCancel), ak);
      let pk = 0;
      const Kk = () => {
          pk = 0, Wk(), Bk.resized()
        },
        xk = () => {
          const kk = Bk.sizeCanvas();
          null !== kk && Fk(PF.hb.Resize, 0, kk.cssWidth, kk.cssHeight, (0, SB.f)(kk.renderScale)), Wk(), Bk.resized(), 0 === pk && (pk = requestAnimationFrame(Kk))
        };
      tk(window, "resize", xk, ak), Rk.push(Bk.watchRenderScale(xk)), Rk.push((() => {
        cancelAnimationFrame(pk)
      })), tk(window, "focus", (kk => {
        kk.isTrusted && (Fk(PF.hb.Focus, 0, 0, 0, 0), Bk.viewShown() && (0, SF.O)())
      }), {
        passive: !0
      });
      const jk = () => {
          (0, SF.E)(!1), Sk = 0
        },
        lk = () => {
          zk.clear(), Gk.clear(), Tk.clear()
        };
      let nk = 0,
        Ik = 0;
      tk(window, "blur", (Rk => {
        jk(), (0, SF.j)();
        for (const kk of Vk.keys()) {
          const Fk = PB.get(kk);
          void 0 !== Fk && Ak.set(kk, Fk)
        }
        Rk.isTrusted && ((kk => {
          for (const [Bk, Rk] of Gk) Fk(PF.hb.TouchCancel, qk(Bk), Rk.x, Rk.y, (0, SB.n)(0, kk));
          Gk.clear()
        })(Rk.timeStamp), Fk(PF.hb.Blur, PF.m.KeepTouches, 0, 0, 0)), wk && Rk.isTrusted && (clearTimeout(Ik), Ik = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const kk of Vk.values()) sk(Rk, kk, 0);
            ek()
          }
        }), 0)), clearTimeout(nk), nk = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, uB.o)() && Bk.viewShown() && kk.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Rk.push((() => {
        clearTimeout(nk), clearTimeout(Ik)
      })), tk(window, "mousedown", (Fk => {
        wk && Fk.isTrusted && !document.hasFocus() && (0, uB.o)() && Bk.viewShown() && (window.focus(), kk.focus({
          preventScroll: !0
        }))
      }), ak), tk(document, "visibilitychange", (() => {
        document.hidden ? (Fk(PF.hb.Blur, 0, 0, 0, 0), lk()) : document.hasFocus() && Fk(PF.hb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Rk.push((0, UB.g)((() => {
        jk(), Fk(PF.hb.Blur, PF.m.Release, 0, 0, 0), Bk.keysReleased(), ek(), Nk = 0, lk(), Fk(PF.hb.Joystick, 0, 0, 0, 0), document.hasFocus() && Fk(PF.hb.Focus, 0, 0, 0, 0)
      })));
      const Qk = !Bk.canLock(),
        kF = () => Qk && !(0, SF.n)() ? PF.Ob.Lockless : PF.Ob.Released,
        FF = () => {
          bk() && (uk = !1, Mk = !1), Fk(PF.hb.PointerLock, bk() ? PF.Ob.Locked : kF(), 0, 0, 0), (0, SF.K)(bk())
        };
      return tk(document, "pointerlockchange", FF, {
        passive: !0
      }), tk(document, "pointerlockerror", (() => {
        uk ||= Mk, Mk = !1, (0, SF.p)()
      }), {
        passive: !0
      }), Qk && Rk.push((0, SF.s)((() => {
        Fk(PF.hb.PointerLock, kF(), 0, 0, 0)
      }))), xk(), Fk(document.hasFocus() ? PF.hb.Focus : PF.hb.Blur, 0, 0, 0, 0), FF(), () => {
        for (const kk of Rk.splice(0)) kk()
      }
    }
    var pB = Bk(8939),
      KB = Bk(8926),
      xB = Bk(1887);
    const jB = new Map(cB.c.map(((kk, Fk) => [kk, Fk]))),
      lB = ["jump", "primary-fire", "alt-fire"],
      nB = ["primary-fire", "alt-fire"];

    function IB(kk) {
      return `${xB.c}${kk}`
    }
    const QB = ["forward", "backward", "left", "right", "sprint", "jump"];

    function kR(kk) {
      const Fk = [];
      for (const Bk of kk) {
        const kk = "string" === typeof Bk ? cB.m[Bk] : void 0;
        "number" === typeof kk && Fk.push(kk)
      }
      return Fk
    }
    class FR {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [kk, Fk] of Object.entries(cB.f)) this.keys.set(kk, Fk);
        this.updateKeySets()
      }
      prevents(kk) {
        return this.preventKeys.has(kk)
      }
      moves(kk) {
        return this.movementKeys.has(kk)
      }
      checks(kk, Fk) {
        return (Fk ? this.checkedDown : this.checkedUp).has(kk)
      }
      sync(kk, Fk) {
        for (const [Bk, Rk] of this.keys) {
          const tk = kk(IB(Bk)),
            ak = Array.isArray(tk) ? kR(tk) : cB.f[Bk];
          (ak.length !== Rk.length || ak.some(((kk, Fk) => kk !== Rk[Fk]))) && this.bind(Bk, ak, Fk)
        }
      }
      bind(kk, Fk, Bk) {
        const Rk = jB.get(kk);
        if (void 0 !== Rk) {
          Bk(PF.hb.Binding, 0, 0, 0, Rk | PF.l.Clear << 8);
          for (const ak of [...Fk, ...null !== (tk = cB.j[kk]) && void 0 !== tk ? tk : []]) {
            var tk;
            Bk(PF.hb.Binding, ak, 0, 0, Rk | PF.l.Add << 8)
          }
          this.keys.set(kk, Fk), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Rk of cB.o)
          for (const Fk of null !== (kk = this.keys.get(cB.c[Rk])) && void 0 !== kk ? kk : []) {
            var kk;
            this.preventKeys.add(Fk)
          }
        this.movementKeys.clear();
        for (const Rk of QB)
          for (const kk of null !== (Fk = this.keys.get(Rk)) && void 0 !== Fk ? Fk : []) {
            var Fk;
            this.movementKeys.add(kk)
          }
        for (const [Rk, tk] of [
            [this.checkedDown, lB],
            [this.checkedUp, nB]
          ]) {
          Rk.clear();
          for (const kk of tk)
            for (const Fk of null !== (Bk = this.keys.get(kk)) && void 0 !== Bk ? Bk : []) {
              var Bk;
              Rk.add(Fk)
            }
        }
      }
    }
    var BR = Bk(4533),
      RR = Bk(36322);
    const tR = "[bloxd-wasm-client]";

    function aR() {
      return "inGame" === pk.c.get("gameState") && !(0, NB.v)()
    }
    let XR = null;

    function bR(kk, Fk) {
      XR && Fk.writePendingInput() && XR.push(function(kk, Fk) {
        let Bk = "";
        for (const Rk of Fk) Bk += Rk.toString(16).padStart(2, "0");
        return Bk ? `${kk} ${Bk}` : String(kk)
      }(kk, Fk.rings.input.written()))
    }
    const wR = [];

    function dR(kk, Fk, Bk, Rk) {
      kk === PF.M.InputAction && Rk === PF.db && wR.push(Fk.getUint32(Bk, !0))
    }
    var sR = Bk(40427),
      VR = Bk(1151),
      JR = Bk(36522);
    const AR = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: VR.wasmScreens
    };

    function eR(kk) {
      var Fk, Bk;
      let Rk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [tk, ak] = kk.split(":");
      return (null !== (Fk = null === (Bk = AR[tk]) || void 0 === Bk ? void 0 : Bk[ak]) && void 0 !== Fk ? Fk : kk).replace(/\{\{(\w+)\}\}/g, ((kk, Fk) => {
        var Bk;
        return null !== (Bk = Rk[Fk]) && void 0 !== Bk ? Bk : kk
      }))
    }

    function yR(kk, Fk) {
      (0, EB.d)();
      const Bk = document.createElement("div");
      Bk.setAttribute("role", "alertdialog"), Bk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Rk = document.createElement("div");
      Rk.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const tk = document.createElement("h2");
      tk.textContent = eR(kk.title);
      const ak = document.createElement("p");
      if (ak.textContent = eR(kk.help, kk.helpValues), ak.style.whiteSpace = "pre-line", Rk.append(tk, ak), kk.discordLink) {
        const kk = document.createElement("a");
        kk.href = JR.d, kk.target = "_blank", kk.rel = "noreferrer", kk.style.color = "#8ab4ff", kk.textContent = eR("wasmScreens:reportOnDiscord"), Rk.append(kk)
      }
      const Xk = document.createElement("div");
      return Xk.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Rk.append(Xk), Bk.append(Rk), document.body.append(Bk), new Promise((Rk => {
        const tk = kk => {
            null === Fk || void 0 === Fk || Fk.removeEventListener("abort", ak), Bk.remove(), Rk(kk)
          },
          ak = () => {
            tk(!1)
          };
        null === Fk || void 0 === Fk || Fk.addEventListener("abort", ak, {
          once: !0
        });
        const bk = (kk, Fk) => {
          const Bk = document.createElement("button");
          Bk.textContent = eR(kk), Bk.style.cssText = "padding:0.5rem 1.25rem;font:inherit", Bk.addEventListener("click", (() => {
            tk(Fk)
          })), Xk.append(Bk)
        };
        null !== kk.cancel && bk(kk.cancel, !1), bk(kk.confirm, !0)
      }))
    }
    var fR = Bk(40224);
    const mR = 6e4,
      WR = 3e5;
    var vR = Bk(3442);
    var iR = Bk(40131),
      YR = Bk(631),
      oR = Bk(6);

    function LR(kk, Fk) {
      const Bk = oR.bb.encode(Fk);
      ! function(kk, Fk) {
        let Bk = Fk >= 0 ? 2 * Fk : 2 * -Fk - 1;
        for (; Bk >= 128;) kk.push(Bk % 128 | 128), Bk = Math.floor(Bk / 128);
        kk.push(Bk)
      }(kk, Bk.length);
      for (const Rk of Bk) kk.push(Rk)
    }
    let OR, ER, SR;
    (() => {
      const kk = [0, "q", "length", 1, 33554432, 67108864, 2, "b", 133, "d", 4, "e", 185, "resolv", "then", void 0, 86, "c", 83, 1023, 3, "a", 65536, 224, 42, 10, 55296, 56320, 6, 12, 63, 128, 55, 25, 5, 192, "Invalid byte index", 137, 255, 31, "Invalid continuation byte", 240, 15, 109, 7, 18, 52, !1, 188, "postCo", "okies", 216, 181, 77, 65, null, 69, 131, 46, !0, 56, "Q", ".", 84, 232];

      function Fk() {}
      const Rk = (kk[0], oR[kk[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        tk = (kk[0], oR[kk[1]])("QkFCWUxPTg=="),
        ak = (kk[0], oR[kk[1]])("QW5kZXNpdGU="),
        Xk = (kk[0], oR[kk[1]])("U21vb3RoIEdyYW5pdGU="),
        bk = (kk[0], oR[kk[1]])("RGlvcml0ZQ=="),
        wk = async (Rk, tk, ak, Xk) => {
          "NAU8g4" in Fk && function(...Fk) {
            function Bk(...Fk) {
              return Fk[kk[2]] = kk[3], Fk[kk[0]][kk[3]] * kk[5] + (Fk[kk[0]][kk[0]] < kk[0] ? kk[4] | Fk[kk[0]][kk[0]] : Fk[kk[0]][kk[0]])
            }

            function Rk(...Fk) {
              switch (Fk[kk[2]] = kk[3], ((Fk[kk[0]] & kk[4]) !== kk[0]) * kk[3] + (Fk[kk[0]] < kk[0]) * kk[6]) {
                case kk[0]:
                  return [Fk[kk[0]] % kk[4], Math.trunc(Fk[kk[0]] / kk[5])];
                case kk[3]:
                  return [Fk[kk[0]] % kk[4] - kk[4], Math.trunc(Fk[kk[0]] / kk[5]) + kk[3]];
                case kk[6]:
                  return [((Fk[kk[0]] + kk[4]) % kk[4] + kk[4]) % kk[4], Math.round(Fk[kk[0]] / kk[5])];
                case kk[20]:
                  return [Fk[kk[0]] % kk[4], Math.trunc(Fk[kk[0]] / kk[5])]
              }
            }
            Fk[kk[2]] = kk[0], sk(Fk[kk[7]] = Bk([kk[6], kk[10]]), Fk[kk[8]] = Bk([kk[3], kk[6]]), Fk[kk[9]] = Fk[kk[7]] + Fk[kk[8]], Fk[kk[11]] = Fk[kk[9]] - Fk[kk[8]], Fk[kk[10]] = Fk[kk[11]] * kk[6], Fk[-kk[12]] = Fk[kk[10]] / kk[6], console.log(Rk(Fk[kk[9]])), console.log(Rk(Fk[kk[11]])), console.log(Rk(Fk[kk[10]])), console.log(Rk(Fk[-kk[12]])))
          }();
          const [{
            clientSideServerUrls: bk
          }, {
            ["postJsonWithMetricsCookiesAndJsonRespons" + kk[11]]: wk
          }] = await Promise.all([Promise[kk[13] + kk[11]]()[kk[14]](((...Rk) => (Rk[kk[2]] = kk[0], "uP7lvg" in Fk && function(...Fk) {
            Fk[kk[2]] = kk[0]
          }(), Bk(1154)))), Promise[kk[13] + kk[11]]()[kk[14]](((...Rk) => (Rk[kk[2]] = kk[0], "piup1u" in Fk && function() {
            ! function(...Fk) {
              function Bk(...Fk) {
                for (sk(Fk[kk[2]] = kk[3], Fk[kk[3]] = [], Fk[kk[16]] = kk[0], Fk[kk[17]] = Fk[kk[0]].length, Fk[kk[9]] = kk[15], Fk[-kk[18]] = kk[15]); Fk[kk[16]] < Fk[kk[17]];) sk(Fk[kk[9]] = Fk[kk[0]].charCodeAt(Fk[kk[16]]++), Fk[kk[9]] >= kk[26] && Fk[kk[9]] <= 56319 && Fk[kk[16]] < Fk[kk[17]] ? (Fk[-kk[18]] = Fk[kk[0]].charCodeAt(Fk[kk[16]]++), (64512 & Fk[-kk[18]]) == kk[27] ? Fk[kk[3]].push(((Fk[kk[9]] & kk[19]) << kk[25]) + (Fk[-kk[18]] & kk[19]) + kk[22]) : (Fk[kk[3]].push(Fk[kk[9]]), Fk[kk[16]]--)) : Fk[kk[3]].push(Fk[kk[9]]));
                return Fk[kk[3]]
              }

              function Rk(...Bk) {
                for (sk(Bk[kk[2]] = kk[3], Bk[kk[21]] = Bk[kk[0]].length, Bk[kk[7]] = -kk[3], Bk[kk[20]] = kk[15], Bk[kk[23]] = ""); ++Bk[kk[7]] < Bk[kk[21]];) Bk[kk[20]] = Bk[kk[0]][Bk[kk[7]]], Bk[kk[20]] > 65535 && sk(Bk[kk[20]] -= kk[22], Bk[kk[23]] += Fk[-kk[24]](Bk[kk[20]] >>> kk[25] & kk[19] | kk[26]), Bk[kk[20]] = kk[27] | Bk[kk[20]] & kk[19]), Bk[kk[23]] += Fk[-kk[24]](Bk[kk[20]]);
                return Bk[kk[23]]
              }

              function tk(...Fk) {
                if (Fk[kk[2]] = kk[3], Fk[kk[0]] >= kk[26] && Fk[kk[0]] <= 57343) throw Error("Lone surrogate U+" + Fk[kk[0]].toString(16).toUpperCase() + " is not a scalar value")
              }

              function ak(...Bk) {
                return Bk[kk[2]] = kk[6], Fk[-kk[24]](Bk[kk[0]] >> Bk[kk[3]] & kk[30] | kk[31])
              }

              function Xk(...Bk) {
                return Bk[kk[2]] = kk[3], (4294967168 & Bk[kk[0]]) == kk[0] ? Fk[-kk[24]](Bk[kk[0]]) : (Bk[kk[3]] = "", (4294965248 & Bk[kk[0]]) == kk[0] ? Bk[kk[3]] = Fk[-kk[24]](Bk[kk[0]] >> kk[28] & kk[39] | kk[35]) : (4294901760 & Bk[kk[0]]) == kk[0] ? sk(tk(Bk[kk[0]]), Bk[kk[3]] = Fk[-kk[24]](Bk[kk[0]] >> kk[29] & kk[42] | kk[23]), Bk[kk[3]] += ak(Bk[kk[0]], kk[28])) : (4292870144 & Bk[kk[0]]) == kk[0] && sk(Bk[kk[3]] = Fk[-kk[24]](Bk[kk[0]] >> kk[45] & kk[44] | kk[41]), Bk[kk[3]] += ak(Bk[kk[0]], kk[29]), Bk[kk[3]] += ak(Bk[kk[0]], kk[28])), Bk[kk[3]] += Fk[-kk[24]](Bk[kk[0]] & kk[30] | kk[31]), Bk[kk[3]])
              }

              function bk(...Fk) {
                for (sk(Fk[kk[2]] = kk[3], Fk[-kk[32]] = Bk(Fk[kk[0]]), Fk[-kk[33]] = Fk[-kk[32]].length, Fk[-kk[23]] = -kk[3], Fk[kk[9]] = kk[15], Fk[kk[34]] = ""); ++Fk[-kk[23]] < Fk[-kk[33]];) sk(Fk[kk[9]] = Fk[-kk[32]][Fk[-kk[23]]], Fk[kk[34]] += Xk(Fk[kk[9]]));
                return Fk[kk[34]]
              }

              function wk(...Bk) {
                if (Bk[kk[2]] = kk[0], Fk[kk[7]] >= Fk[kk[17]]) throw Error(kk[36]);
                if (sk(Bk[kk[21]] = Fk[kk[10]][Fk[kk[7]]] & kk[38], Fk[kk[7]]++), (Bk[kk[21]] & kk[35]) == kk[31]) return Bk[kk[21]] & kk[30];
                throw Error(kk[40])
              }

              function dk(...Bk) {
                if (sk(Bk[kk[2]] = kk[0], Bk[-kk[37]] = kk[15], Bk[kk[7]] = kk[15], Bk[kk[6]] = kk[15], Bk[-kk[43]] = kk[15], Bk[kk[10]] = kk[15]), Fk[kk[7]] > Fk[kk[17]]) throw Error(kk[36]);
                if (Fk[kk[7]] == Fk[kk[17]]) return kk[47];
                if (sk(Bk[-kk[37]] = Fk[kk[10]][Fk[kk[7]]] & kk[38], Fk[kk[7]]++), (Bk[-kk[37]] & kk[31]) == kk[0]) return Bk[-kk[37]];
                if ((Bk[-kk[37]] & kk[23]) == kk[35]) {
                  if (sk(Bk[kk[7]] = wk(), Bk[kk[10]] = (Bk[-kk[37]] & kk[39]) << kk[28] | Bk[kk[7]]), Bk[kk[10]] >= kk[31]) return Bk[kk[10]];
                  throw Error(kk[40])
                }
                if ((Bk[-kk[37]] & kk[41]) == kk[23]) {
                  if (sk(Bk[kk[7]] = wk(), Bk[kk[6]] = wk(), Bk[kk[10]] = (Bk[-kk[37]] & kk[42]) << kk[29] | Bk[kk[7]] << kk[28] | Bk[kk[6]]), Bk[kk[10]] >= 2048) return tk(Bk[kk[10]]), Bk[kk[10]];
                  throw Error(kk[40])
                }
                if ((248 & Bk[-kk[37]]) == kk[41] && (sk(Bk[kk[7]] = wk(), Bk[kk[6]] = wk(), Bk[-kk[43]] = wk(), Bk[kk[10]] = (Bk[-kk[37]] & kk[44]) << kk[45] | Bk[kk[7]] << kk[29] | Bk[kk[6]] << kk[28] | Bk[-kk[43]]), Bk[kk[10]] >= kk[22] && Bk[kk[10]] <= 1114111)) return Bk[kk[10]];
                throw Error("Invalid UTF-8 detected")
              }

              function Vk(...tk) {
                for (sk(tk[kk[2]] = kk[3], Fk[kk[10]] = Bk(tk[kk[0]]), Fk[kk[17]] = Fk[kk[10]].length, Fk[kk[7]] = kk[0], tk[kk[48]] = [], tk[-kk[46]] = kk[15]);
                  (tk[-kk[46]] = dk()) !== kk[47];) tk[kk[48]].push(tk[-kk[46]]);
                return Rk(tk[kk[48]])
              }
              sk(Fk[kk[2]] = kk[3], Fk[-kk[24]] = String.fromCharCode), sk(Fk[kk[10]] = kk[15], Fk[kk[17]] = kk[15], Fk[kk[7]] = kk[15]), sk(Fk[kk[0]].version = "3.0.0", Fk[kk[0]].encode = bk, Fk[kk[0]].decode = Vk)
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }(), Bk(1101))))]), dk = bk.getHttpUrlFromWebSocketUrl(Rk.endpoint), Vk = Rk[kk[49] + kk[50]] === kk[55] ? kk[15] : await Rk[kk[49] + kk[50]]();
          await wk("" + dk + tk, ak, {
            retries: Xk
          }, Vk)
        };
      OR = async (Bk, Rk) => {
        const tk = function(kk, Fk, Bk, Rk) {
          const tk = [];
          LR(tk, kk), LR(tk, Fk), LR(tk, Bk);
          for (const ak of Rk) tk.push(ak);
          return tk
        }(Bk.game, Bk.lobby, (kk[0], YR[kk[9]])(), Rk);
        try {
          await wk(Bk, "/persisted/keep-alive", {
            type: "Ge",
            data: tk
          }, kk[20])
        } catch (ak) {
          function bk(...Fk) {
            sk(Fk[kk[2]] = kk[0], Fk[-kk[52]] = function(...Bk) {
              return sk(Bk[kk[2]] = kk[3], Bk[-kk[51]] = []), (Bk[kk[0]] === kk[3] || Bk[kk[0]] >= kk[10]) && Fk[kk[3]](Bk[-kk[51]], [], Bk[kk[0]], kk[0]), Bk[-kk[51]]
            }, Fk[kk[3]] = function(...Bk) {
              for (Bk[kk[2]] = kk[10], Bk[kk[21]] = Bk[kk[20]]; Bk[kk[21]] < Bk[kk[6]]; Bk[kk[21]]++) {
                if (Bk[kk[3]].length !== Bk[kk[21]]) return;
                for (Bk[kk[52]] = kk[0]; Bk[kk[52]] < Bk[kk[6]]; Bk[kk[52]]++) Fk[kk[6]](Bk[kk[3]], [Bk[kk[21]], Bk[kk[52]]]) && (sk(Bk[kk[3]].push([Bk[kk[21]], Bk[kk[52]]]), Fk[kk[3]](Bk[kk[0]], Bk[kk[3]], Bk[kk[6]], Bk[kk[21]] + kk[3])), Bk[kk[3]].length === Bk[kk[6]] && Bk[kk[0]].push(Fk[-kk[30]](Bk[kk[3]])), Bk[kk[3]].pop())
              }
            }, Fk[-kk[30]] = function(...Fk) {
              for (sk(Fk[kk[2]] = kk[3], Fk[kk[53]] = [], Fk[kk[6]] = Fk[kk[0]].length), Fk[kk[17]] = kk[0]; Fk[kk[17]] < Fk[kk[6]]; Fk[kk[17]]++)
                for (Fk[kk[53]][Fk[kk[17]]] = "", Fk[kk[10]] = kk[0]; Fk[kk[10]] < Fk[kk[6]]; Fk[kk[10]]++) Fk[kk[53]][Fk[kk[17]]] += Fk[kk[0]][Fk[kk[17]]][kk[3]] === Fk[kk[10]] ? kk[61] : kk[62];
              return Fk[kk[53]]
            }, Fk[kk[6]] = function(Fk, Bk) {
              var Rk, tk = Fk.length;
              for (Rk = kk[0]; Rk < tk; Rk++) {
                if (Fk[Rk][kk[0]] === Bk[kk[0]] || Fk[Rk][kk[3]] === Bk[kk[3]]) return kk[47];
                if (Math.abs((Fk[Rk][kk[0]] - Bk[kk[0]]) / (Fk[Rk][kk[3]] - Bk[kk[3]])) === kk[3]) return kk[47]
              }
              return kk[59]
            }, console.log(Fk[-kk[52]]))
          }
          "xU0j5C" in Fk && bk(), console.warn(ak)
        }
      };
      const dk = (...Bk) => (Bk[kk[2]] = kk[6], "zEvGTru" in Fk && function(...Fk) {
        function Bk() {}
        Fk[kk[2]] = kk[0], sk(Fk[kk[58]] = function(...Fk) {
          for (sk(Fk[kk[2]] = kk[6], Fk[kk[6]] = kk[0], Fk[-kk[57]] = kk[0], Fk[-kk[54]] = new Bk(kk[0]), Fk[kk[9]] = Fk[-kk[54]], Fk[kk[11]] = Fk[kk[0]], Fk[-kk[56]] = Fk[kk[3]]); Fk[kk[11]] !== kk[55] || Fk[-kk[56]] !== kk[55];) sk(Fk[-kk[57]] = (Fk[kk[11]] ? Fk[kk[11]].val : kk[0]) + (Fk[-kk[56]] ? Fk[-kk[56]].val : kk[0]) + Fk[kk[6]], Fk[kk[6]] = Math.floor(Fk[-kk[57]] / kk[25]), Fk[kk[9]].next = new Bk(Fk[-kk[57]] % kk[25]), Fk[kk[9]] = Fk[kk[9]].next, Fk[kk[11]] = Fk[kk[11]] ? Fk[kk[11]].next : kk[55], Fk[-kk[56]] = Fk[-kk[56]] ? Fk[-kk[56]].next : kk[55]);
          return Fk[kk[6]] && (Fk[kk[9]].next = new Bk(Fk[kk[6]])), Fk[-kk[54]].next
        }, console.log(Fk[kk[58]]))
      }(), Object.getOwnPropertyDescriptor(Bk[kk[0]], Bk[kk[3]]));

      function sk() {
        sk = function() {}
      }
      ER = () => {
        if ((kk[0], oR.H)(), dk(navigator, Rk) !== kk[15]) {
          function Bk() {
            var Fk;
            sk(Fk = function(Bk, Rk, tk, ak, Xk, bk, wk) {
              var dk = kk[47];
              return bk >= tk.length ? kk[59] : wk["" + ak + Xk + bk] !== kk[15] ? wk["" + ak + Xk + bk] : (tk[bk] === Bk[ak] && tk[bk] === Rk[Xk] ? dk = Fk(Bk, Rk, tk, ak + kk[3], Xk, bk + kk[3], wk) || Fk(Bk, Rk, tk, ak, Xk + kk[3], bk + kk[3], wk) : tk[bk] === Bk[ak] ? dk = Fk(Bk, Rk, tk, ak + kk[3], Xk, bk + kk[3], wk) : tk[bk] === Rk[Xk] && (dk = Fk(Bk, Rk, tk, ak, Xk + kk[3], bk + kk[3], wk)), wk["" + ak + Xk + bk] = dk, dk)
            }, console.log((function(...Bk) {
              return sk(Bk[kk[2]] = kk[20], Bk[kk[21]] = {}), Bk[kk[6]].length !== Bk[kk[0]].length + Bk[kk[3]].length ? kk[47] : Fk(Bk[kk[0]], Bk[kk[3]], Bk[kk[6]], kk[0], kk[0], kk[0], Bk[kk[21]])
            })))
          }
          return "my5ERy" in Fk && Bk(), ak
        }
        if (dk(window, tk) === kk[15]) {
          function wk(...Fk) {
            sk(Fk[kk[2]] = kk[0], Fk[kk[7]] = function(Bk) {
              var Rk = [];
              return (Bk === kk[3] || Bk >= kk[10]) && Fk[-kk[60]](Rk, [], Bk, kk[0]), Rk
            }, Fk[-kk[60]] = function(...Bk) {
              for (Bk[kk[2]] = kk[10], Bk[kk[21]] = Bk[kk[20]]; Bk[kk[21]] < Bk[kk[6]]; Bk[kk[21]]++) {
                if (Bk[kk[3]].length !== Bk[kk[21]]) return;
                for (Bk[kk[7]] = kk[0]; Bk[kk[7]] < Bk[kk[6]]; Bk[kk[7]]++) Fk[kk[9]](Bk[kk[3]], [Bk[kk[21]], Bk[kk[7]]]) && (sk(Bk[kk[3]].push([Bk[kk[21]], Bk[kk[7]]]), Fk[-kk[60]](Bk[kk[0]], Bk[kk[3]], Bk[kk[6]], Bk[kk[21]] + kk[3])), Bk[kk[3]].length === Bk[kk[6]] && Bk[kk[0]].push(Fk[kk[20]](Bk[kk[3]])), Bk[kk[3]].pop())
              }
            }, Fk[kk[20]] = function(Fk) {
              var Bk, Rk, tk = [];
              for (Bk = Fk.length, Rk = kk[0]; Rk < Bk; Rk++) {
                var ak;
                for (tk[Rk] = "", ak = kk[0]; ak < Bk; ak++) tk[Rk] += Fk[Rk][kk[3]] === ak ? kk[61] : kk[62]
              }
              return tk
            }, Fk[kk[9]] = function(Fk, Bk) {
              var Rk, tk = Fk.length;
              for (Rk = kk[0]; Rk < tk; Rk++) {
                if (Fk[Rk][kk[0]] === Bk[kk[0]] || Fk[Rk][kk[3]] === Bk[kk[3]]) return kk[47];
                if (Math.abs((Fk[Rk][kk[0]] - Bk[kk[0]]) / (Fk[Rk][kk[3]] - Bk[kk[3]])) === kk[3]) return kk[47]
              }
              return kk[59]
            }, console.log(Fk[kk[7]]))
          }
          return "wcHxKgz" in Fk && wk(), Xk
        }
        return bk
      }, SR = async Bk => {
        "U89q2E" in Fk && function(...Fk) {
          Fk[kk[2]] = kk[0]
        }();
        try {
          const Rk = ER();
          await wk(Bk, "/images/" + Rk + ".png", {
            block: Rk
          }, kk[0])
        } catch {
          function tk(...Fk) {
            function Bk(Fk) {
              return Fk[kk[3]] * kk[5] + (Fk[kk[0]] < kk[0] ? kk[4] | Fk[kk[0]] : Fk[kk[0]])
            }

            function Rk(...Fk) {
              switch (Fk[kk[2]] = kk[3], ((Fk[kk[0]] & kk[4]) !== kk[0]) * kk[3] + (Fk[kk[0]] < kk[0]) * kk[6]) {
                case kk[0]:
                  return [Fk[kk[0]] % kk[4], Math.trunc(Fk[kk[0]] / kk[5])];
                case kk[3]:
                  return [Fk[kk[0]] % kk[4] - kk[4], Math.trunc(Fk[kk[0]] / kk[5]) + kk[3]];
                case kk[6]:
                  return [((Fk[kk[0]] + kk[4]) % kk[4] + kk[4]) % kk[4], Math.round(Fk[kk[0]] / kk[5])];
                case kk[20]:
                  return [Fk[kk[0]] % kk[4], Math.trunc(Fk[kk[0]] / kk[5])]
              }
            }
            Fk[kk[2]] = kk[0], sk(Fk[-kk[63]] = Bk([kk[6], kk[10]]), Fk[kk[7]] = Bk([kk[3], kk[6]]), Fk[kk[17]] = Fk[-kk[63]] + Fk[kk[7]], Fk[kk[9]] = Fk[kk[17]] - Fk[kk[7]], Fk[kk[10]] = Fk[kk[9]] * kk[6], Fk[kk[64]] = Fk[kk[10]] / kk[6], console.log(Rk(Fk[kk[17]])), console.log(Rk(Fk[kk[9]])), console.log(Rk(Fk[kk[10]])), console.log(Rk(Fk[kk[64]])))
          }
          "z71jK_" in Fk && tk()
        }
      }
    })();
    var NR = Bk(40305),
      HR = Bk(1727);
    const uR = 1e3 * NR.b.seatReservationSeconds - 3e3;
    class MR {
      constructor(kk) {
        var Fk, Bk, Rk, tk;
        let ak = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Fk = ak.wallNow) && void 0 !== Fk ? Fk : Date.now, this.monoNow = null !== (Bk = ak.monoNow) && void 0 !== Bk ? Bk : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Rk = ak.sleep) && void 0 !== Rk ? Rk : HR.b, this.follow = new iF.d(ak.signal);
        const Xk = null !== (tk = ak.fetch) && void 0 !== tk ? tk : fetch;
        this.seat = (0, AB.h)(kk.endpoint, kk.roomName, kk.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (kk, Fk) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Xk(kk, Fk)),
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
      async take(kk) {
        if ("rematched" === this.use) return;
        (0, iF.k)(kk);
        const Fk = "pending" !== this.request,
          Bk = () => {
            this.abort((0, iF.e)(kk))
          };
        let Rk;
        null === kk || void 0 === kk || kk.addEventListener("abort", Bk, {
          once: !0
        });
        try {
          Rk = await this.seat
        } catch (tk) {
          if ((0, iF.k)(kk), !Fk) throw tk;
          return void(this.use = "lost")
        } finally {
          null === kk || void 0 === kk || kk.removeEventListener("abort", Bk)
        }
        if ((0, iF.k)(kk), !(this.ageMs() > uR)) return this.use = "taken", Rk;
        this.use = "renewed"
      }
      async reserveInstead(kk, Fk) {
        try {
          return await kk()
        } catch (Bk) {
          const tk = this.holdLeftMs();
          if (!(Bk instanceof ck.n) || Bk.code !== Rk.e.duplicateLobbyNameError.code || 0 === tk) throw Bk;
          return await this.sleep(tk + 500, Fk), kk()
        }
      }
      release() {
        const {
          request: kk,
          use: Fk
        } = this, Bk = this.holdsNoSeat();
        return this.abort(), "taken" === Fk || Bk ? null : {
          unused: "unused" === Fk ? "abandoned" : Fk,
          answered: "answered" === kk,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var kk;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const Fk = null !== (kk = this.answeredAt) && void 0 !== kk ? kk : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          Bk = Math.max(this.wallNow() - Fk.wall, this.monoNow() - Fk.mono);
        return Math.max(0, 1e3 * NR.b.seatReservationSeconds - Bk)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(kk) {
        (0, iF.i)(this.follow.controller, kk)
      }
    }
    var gR = Bk(1808),
      UR = Bk(40431);
    const cR = new Uint8Array(0);
    class GR {
      constructor(kk) {
        if (this.options = kk, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === kk.module) return this.stopped = !0, void kk.fail("no wasm module for the meshing workers");
        kk.loadWorkers().then((kk => {
          let {
            create: Fk,
            count: Bk
          } = kk;
          if (!this.stopped) {
            this.createWorker = Fk;
            for (let kk = 0; kk < Bk; kk++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let kk = 0; kk < Bk; kk++) this.start(kk)
          }
        }), (kk => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", kk))
        }))
      }
      take(kk, Fk, Bk) {
        const Rk = this.slots[Fk];
        if (kk === PF.ed.Retire) {
          var tk, ak, Xk;
          if (Rk && !Rk.gone) null === (tk = Rk.worker) || void 0 === tk || tk.terminate(), Rk.worker = null, Rk.started = !1, null === (ak = (Xk = this.options).onMemoryGone) || void 0 === ak || ak.call(Xk, Fk), this.giveUp(Fk, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const bk = null === Rk || void 0 === Rk ? void 0 : Rk.worker;
        if (!bk || !Rk.started) return;
        const wk = Bk.byteLength;
        let dk = null;
        kk === PF.ed.Mesh && Rk.heapRetries > 0 && (Rk.heapRetries--, dk = this.pooled(wk, !0)), dk ??= this.buffer(wk), new Uint8Array(dk, 0, wk).set(Bk), bk.postMessage({
          type: "job",
          kind: kk,
          bytes: dk,
          len: wk
        }, [dk])
      }
      takeFailedMeshJobs() {
        const kk = this.failedJobs;
        return this.failedJobs = 0, kk
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const Fk of this.slots) {
          var kk;
          TR(Fk), null === (kk = Fk.worker) || void 0 === kk || kk.terminate(), Fk.worker = null, Fk.started = !1
        }
      }
      start(kk) {
        const Fk = this.slots[kk],
          {
            module: Bk
          } = this.options,
          Rk = this.createWorker;
        if (this.stopped || Fk.gone || null === Bk || null === Rk) return;
        if (Fk.startsWithoutResult >= 3) return void this.giveUp(kk, "failed to start 3 times in a row", "no meshing worker would start");
        let tk;
        Fk.startsWithoutResult++;
        try {
          tk = Rk()
        } catch (ak) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${kk} did not start`, ak), void this.start(kk)
        }
        Fk.worker = tk, tk.onmessage = Bk => {
          let {
            data: Rk
          } = Bk;
          Fk.worker === tk && this.onReply(kk, Rk)
        }, tk.onmessageerror = () => {
          Fk.worker === tk && this.lose(kk, "a reply could not be read")
        }, tk.onerror = Bk => {
          Bk.preventDefault(), Fk.worker === tk && this.lose(kk, Bk.message || "its script failed")
        };
        try {
          tk.postMessage({
            type: "start",
            module: Bk
          })
        } catch (ak) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${kk} could not be sent the module`, ak), tk.terminate(), Fk.worker = null, void this.start(kk)
        }
        Fk.watch = new UR.f(UR.c, (Fk => {
          this.lose(kk, (0, UR.i)(Fk), (() => {
            this.options.onStartTimeout(Fk)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(kk, Fk) {
        const Bk = this.slots[kk];
        switch (Fk.type) {
          case "started":
            TR(Bk), Bk.started = !0, this.options.write(0, PF.dd.WorkerStarted, 0, kk, 0, cR);
            break;
          case "lost":
            this.lose(kk, Fk.reason);
            break;
          case "memory":
            var Rk, tk;
            null === (Rk = (tk = this.options).onMemoryStats) || void 0 === Rk || Rk.call(tk, kk, Fk.stats);
            break;
          case "result": {
            const Rk = Fk.status === PF.ib.Trapped;
            if (0 !== Fk.jobId) {
              if (Rk) this.countFailedJob(Fk.outOfMemory, "light_trap", Fk.trap);
              else if (Bk.startsWithoutResult = 0, Bk.trapsWithoutResult = 0, Fk.status === PF.ib.Refused) {
                const Bk = function(kk) {
                  if (kk.byteLength < 32) return "(no reason)";
                  const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength),
                    Bk = Math.min(Fk.getUint32(28, !0), kk.byteLength - 28 - 4);
                  return (new TextDecoder).decode(kk.subarray(32, 32 + Bk)).slice(0, 200)
                }(new Uint8Array(Fk.bytes, 0, Fk.len));
                this.countFailedJob(CF.c.test(Bk), "light_refused_input", Bk), this.logRefusal(kk, Bk)
              }
              Fk.status === PF.ib.HeapRefused && (Bk.heapRetries = Math.min(Bk.heapRetries + 1, 4), this.logHeapRefusal(kk))
            }
            if (this.options.write(Fk.jobId, PF.dd.JobResult, Fk.status, kk, Fk.workerUs, new Uint8Array(Fk.bytes, 0, Fk.len)), this.recycle(Fk.bytes), Fk.spare && this.recycle(Fk.spare), !Rk) break;
            if (Bk.startsWithoutResult = 0, 0 === Fk.jobId) {
              this.lose(kk, `the tables trapped its wasm: ${Fk.trap}`);
              break
            }
            Bk.trapsWithoutResult++;
            const tk = Bk.trapsWithoutResult > 6;
            Bk.gone ||= tk, this.lose(kk, `a job trapped its wasm: ${Fk.trap}`), tk && this.giveUp(kk, `trapped ${Bk.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(kk, Fk, Bk) {
        if (kk) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(Fk) || (this.faultsReported.add(Fk), this.options.onLightFault(Fk, Bk));
        this.failedJobs++
      }
      logRefusal(kk, Fk) {
        var Bk;
        !this.refusals.has(Fk) && this.refusals.size >= 16 && (Fk = "(other reasons)");
        const Rk = (null !== (Bk = this.refusals.get(Fk)) && void 0 !== Bk ? Bk : 0) + 1;
        this.refusals.set(Fk, Rk), (0, gR.t)(Rk) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} refused a chunk (${Rk} so far for this reason): ${Fk}`)
      }
      logHeapRefusal(kk) {
        this.heapRefusals++, (0, gR.t)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(kk, Fk, Bk) {
        const Rk = this.slots[kk];
        if (Rk.gone = !0, Rk.goneFor = {
            why: Fk,
            failure: Bk
          }, console.warn(`[bloxd-wasm-client] meshing worker ${kk} ${Fk}: giving up on it`), this.slots.every((kk => kk.gone))) {
          this.stop();
          const kk = new Set(this.slots.map((kk => {
              var Fk;
              return null === (Fk = kk.goneFor) || void 0 === Fk ? void 0 : Fk.failure
            }))),
            Fk = this.slots.map(((kk, Fk) => {
              var Bk, Rk;
              return `worker ${Fk} ${null!==(Bk=null===(Rk=kk.goneFor)||void 0===Rk?void 0:Rk.why)&&void 0!==Bk?Bk:"went"}`
            }));
          this.options.fail(1 === kk.size ? Bk : `no meshing worker is left (${Fk.join(", ")})`)
        }
      }
      lose(kk, Fk, Bk) {
        var Rk, tk, ak;
        const Xk = this.slots[kk];
        console.warn(`[bloxd-wasm-client] meshing worker ${kk} was lost: ${Fk}`), TR(Xk), null === (Rk = Xk.worker) || void 0 === Rk || Rk.terminate(), Xk.worker = null, Xk.heapRetries = 0, null === (tk = (ak = this.options).onMemoryGone) || void 0 === tk || tk.call(ak, kk), this.stopped || (Bk ? Bk() : this.options.onWorkerLost(Fk), Xk.started && (Xk.started = !1, this.options.write(0, PF.dd.WorkerLost, 0, kk, 0, cR)), this.start(kk))
      }
      buffer(kk) {
        var Fk;
        return null !== (Fk = this.pooled(kk)) && void 0 !== Fk ? Fk : new ArrayBuffer(Math.max(16384, kk))
      }
      pooled(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = -1;
        for (let tk = 0; tk < this.pool.length; tk++) {
          const Rk = this.pool[tk].byteLength;
          Rk >= kk && (Bk < 0 || (Fk ? Rk > this.pool[Bk].byteLength : Rk < this.pool[Bk].byteLength)) && (Bk = tk)
        }
        if (Bk < 0) return null;
        const Rk = this.pool[Bk];
        return this.pool[Bk] = this.pool[this.pool.length - 1], this.pool.pop(), Rk
      }
      recycle(kk) {
        this.pool.length < 4 * this.slots.length && kk.byteLength > 0 && kk.byteLength <= 1048576 && this.pool.push(kk)
      }
    }

    function TR(kk) {
      var Fk;
      null === (Fk = kk.watch) || void 0 === Fk || Fk.cancel(), kk.watch = null
    }
    var rR = Bk(40370),
      DR = Bk(40362),
      zR = Bk(40435),
      PR = Bk(40437),
      hR = (Bk(40207), Bk(40440)),
      qR = Bk(40407);

    function CR(kk) {
      const Fk = new Uint8Array(kk.length >> 2);
      for (let Bk = 0; Bk < Fk.length; Bk++) Fk[Bk] = kk[4 * Bk + 3];
      return Fk
    }
    async function ZR(kk) {
      const Fk = await (0, hR.j)(kk);
      try {
        const {
          width: kk,
          height: Bk,
          pixels: Rk
        } = (0, qR.s)(Fk);
        return {
          width: kk,
          height: Bk,
          alpha: CR(Rk)
        }
      } finally {
        Fk.close()
      }
    }
    class pR {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZR;
        this.session = kk, this.sources = Fk, this.warn = Bk, this.load = Rk, this.nextPoll = 0, this.Te = !1, this.warned = new Set
      }
      drain(kk) {
        if (kk < this.nextPoll) return;
        this.nextPoll = kk + 250;
        const Fk = this.session.sunShadowWantedTextures();
        if (Fk)
          for (let Bk = 0; Bk + 1 < Fk.length; Bk += 2) this.hand(Fk[Bk], Fk[Bk + 1]);
        for (const Bk of this.session.takeSunShadowWarnings()) this.warn(Bk)
      }
      dispose() {
        this.Te = !0
      }
      async hand(kk, Fk) {
        var Bk, Rk, tk, ak, Xk;
        let bk, wk = null;
        try {
          if (wk = await this.sources.blockImageUrl(kk), null === wk) throw new Error(`block image ${kk} has no URL`);
          bk = await this.load(wk)
        } catch (sk) {
          var dk;
          const Fk = null !== (dk = wk) && void 0 !== dk ? dk : `block image ${kk}`;
          this.warned.has(Fk) || (this.warned.add(Fk), this.warn(`sun shadow plane texture ${Fk} didn't load: its blocks cast no shadow`, sk))
        }
        this.Te || this.session.setSunShadowTexture(kk, Fk, null !== (Bk = null === (Rk = bk) || void 0 === Rk ? void 0 : Rk.width) && void 0 !== Bk ? Bk : 0, null !== (tk = null === (ak = bk) || void 0 === ak ? void 0 : ak.height) && void 0 !== tk ? tk : 0, null === (Xk = bk) || void 0 === Xk ? void 0 : Xk.alpha)
      }
    }
    var KR = Bk(40379),
      xR = Bk(40448),
      jR = Bk(40452),
      lR = Bk(40387),
      nR = Bk(40393),
      IR = Bk(9045),
      QR = Bk(8894),
      kt = Bk(40467);
    const Ft = 8192,
      Bt = new Set;
    const Rt = new Set([...QR.e, "sceneDownload"]);
    var tt = Bk(40231),
      Xt = Bk(40100);
    const bt = new Uint8Array(0);
    let wt = null;

    function dt(kk) {
      return {
        aux: PF.Hb.AdStart | (kk ? PF.Hb.PreventMovement : 0),
        payload: bt
      }
    }
    var st = Bk(2660),
      Vt = Bk(2667);
    const Jt = "__bloxdSceneCapture";
    var At = Bk(1708),
      et = Bk(2745);
    let yt = null,
      ft = null,
      mt = null,
      Wt = !1;

    function vt() {
      yt ??= performance.now()
    }
    var it = Bk(40476);
    class Yt {
      constructor(kk) {
        var Fk, Bk;
        this.host = kk, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((kk => {
          this.landRequest = kk
        })), this.follow = kk => {
          let Fk = kk;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const kk = null === this.requested && null !== Fk;
            var Bk;
            kk && (null === (Bk = Fk) || void 0 === Bk || Bk(null));
            const Rk = await this.landing;
            var tk;
            null === Rk && kk || (null === (tk = Fk) || void 0 === tk || tk(Rk))
          })), () => {
            Fk = null
          }
        }, this.startRead = (Bk = kk.store, Bk.keys().then((kk => ({
          own: kk.includes(WB.d),
          oneShot: kk.includes(WB.h)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((kk => {
          let {
            own: Fk,
            oneShot: Bk
          } = kk;
          this.oneShotStored = Bk, (Fk || Bk) && this.request()
        })), this.channel = (null !== (Fk = kk.openChannel) && void 0 !== Fk ? Fk : WB.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var kk;
        if (null !== this.requested) return this.requested;
        null === (kk = this.channel) || void 0 === kk || kk.close(), this.channel = null;
        const Fk = this.oneShotStored;
        return this.requested = function(kk, Fk, Bk) {
          return new Promise((Fk => {
            Fk(kk())
          })).catch((kk => (null !== Fk && (0, WB.r)(Fk), Bk(kk), null)))
        }((() => this.host.load(Fk).then((kk => (kk.setGamePackConfirm(this.confirm), this.landed = kk, kk)))), Fk ? this.host.store : null, this.host.ve), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var kk;
          return null !== (kk = this.requested) && void 0 !== kk ? kk : null
        }))
      }
      setGamePackConfirm(kk) {
        var Fk;
        this.confirm = kk, null === (Fk = this.landed) || void 0 === Fk || Fk.setGamePackConfirm(kk)
      }
    }
    var ot = Bk(36217);
    const Lt = 216 * ot.e,
      Ot = 92 * ot.c,
      Et = 64 * ot.e,
      St = 16 * ot.e;

    function Nt() {
      var kk, Fk;
      return null !== (kk = null === (Fk = performance.memory) || void 0 === Fk ? void 0 : Fk.vW) && void 0 !== kk ? kk : null
    }
    class Ht {
      constructor(kk, Fk) {
        this.budgetBytes = kk, this.reads = Fk, this.estimate = null, this.shedAt = null
      }
      read(kk) {
        var Fk;
        const Bk = this.reads.storedChunks(),
          Rk = this.reads.gpuBytes(),
          tk = Math.max(null !== (Fk = this.reads.jsHeapBytes()) && void 0 !== Fk ? Fk : 0, Et),
          ak = Lt + kk + tk + Rk + Bk * Ot;
        this.estimate = {
          wasmBytes: kk,
          jsHeapBytes: tk,
          gpuBytes: Rk,
          storedChunks: Bk,
          totalBytes: ak
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: kk,
          budgetBytes: Fk,
          shedAt: Bk
        } = this;
        return !(null === kk || null === Fk || kk.totalBytes < Fk || null !== Bk && kk.totalBytes < Bk + St) && (this.shedAt = kk.totalBytes, !0)
      }
      describe() {
        const {
          estimate: kk,
          budgetBytes: Fk
        } = this;
        return null === kk ? null : `estimate ${(0,ot.f)(kk.totalBytes)} MiB of budget ${null===Fk?"none":(0,ot.f)(Fk)}: wasm ${(0,ot.f)(kk.wasmBytes)} js ${(0,ot.f)(kk.jsHeapBytes)} gpu ${(0,ot.f)(kk.gpuBytes)} chunks ${kk.storedChunks}`
      }
      snapshot() {
        const {
          estimate: kk,
          budgetBytes: Fk
        } = this;
        return {
          ...null === kk ? {} : {
            footprintMiB: Number((0, ot.f)(kk.totalBytes)),
            gpuMiB: Number((0, ot.f)(kk.gpuBytes)),
            storedChunks: kk.storedChunks
          },
          footprintBudgetMiB: null === Fk ? -1 : Number((0, ot.f)(Fk))
        }
      }
    }
    var ut = Bk(2711),
      Mt = Bk(4255),
      gt = Bk(38731),
      Ut = Bk(37625);
    const ct = hF.N + 1,
      Gt = 4096 * ct;
    class Tt {
      constructor(kk, Fk) {
        this.log = kk, this.take = Fk, this.Hb = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(kk, Fk) {
        const Bk = this.take();
        Bk.length >= hF.L && Bk[0] > 0 && (0, ut.k)("remesh", `${Bk[0]} core records lost to a full log`);
        const Rk = this.Hb;
        for (let tk = hF.L; tk + hF.N <= Bk.length; tk += hF.N) {
          for (let kk = tk; kk < tk + hF.N; kk++) Rk.push(Bk[kk]);
          Rk.push(kk)
        }
        if (Fk || !(Rk.length < Gt)) {
          for (let Fk = 0; Fk < Rk.length; Fk += ct) this.feed(Fk, kk);
          Rk.length = 0, Fk && this.log.frame(kk)
        }
      }
      feed(kk, Fk) {
        var Bk;
        const Rk = this.Hb,
          tk = (0, Ut.f)(Rk[kk + 1], Rk[kk + 2], Rk[kk + 3]),
          ak = Rk[kk + 4],
          Xk = Rk[kk + hF.N];
        switch (Rk[kk]) {
          case hF.qb.Edit:
            this.log.edit(tk, Xk);
            break;
          case hF.qb.Sent:
            this.latest.set(tk, ak), this.log.sent(tk, ak, Rk[kk + 5], Rk[kk + 6], Rk[kk + 7], null !== (Bk = this.unshown.get(tk)) && void 0 !== Bk ? Bk : Ut.b, Xk);
            break;
          case hF.qb.Done: {
            this.log.received(ak, Rk[kk + 5] / 1e3, Xk);
            const Fk = this.unshown.get(tk);
            void 0 === Fk ? this.unshown.set(tk, [ak]) : Fk.push(ak);
            break
          }
          case hF.qb.Failed: {
            const kk = this.latest.get(tk);
            void 0 !== kk && kk !== ak ? this.log.reassign(tk, ak, kk) : this.log.failed(ak), this.ended(tk, ak);
            break
          }
          case hF.qb.Shown:
            this.log.applied(tk, ak, Fk), this.ended(tk, ak);
            break;
          case hF.qb.Replaced:
            this.log.reassign(tk, ak, Rk[kk + 5]), this.ended(tk, ak);
            break;
          case hF.qb.Emptied:
            this.log.emptied(tk, Fk);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Rk[kk]}`)
        }
      }
      ended(kk, Fk) {
        this.latest.get(kk) === Fk && this.latest.delete(kk);
        const Bk = this.unshown.get(kk);
        if (void 0 === Bk) return;
        const Rk = Bk.indexOf(Fk);
        Rk >= 0 && Bk.splice(Rk, 1), 0 === Bk.length && this.unshown.delete(kk)
      }
    }
    let rt = null;
    var Dt = Bk(3052);
    const zt = new Uint8Array(0);
    class Pt {
      constructor(kk) {
        this.options = kk, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.Hb = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== kk.module ? kk.write(0, PF.dd.WorldgenStarted, 0, 0, zt) : this.giveUp()
      }
      take(kk, Fk) {
        if (!(this.gone || null === this.worker && null === this.Hb))
          if (kk === PF.ed.WorldgenSeed) {
            const kk = 0 === Fk.byteLength ? null : this.options.decodeSettings(Fk);
            null === kk || function(kk, Fk) {
              if ((null === kk || void 0 === kk ? void 0 : kk.byteLength) !== Fk.byteLength) return !1;
              for (let Bk = 0; Bk < kk.byteLength; Bk++)
                if (kk[Bk] !== Fk[Bk]) return !1;
              return !0
            }(this.seed, Fk) || (this.seed = Fk.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: kk
            }, []), null !== kk ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (kk === PF.ed.Generate) {
          var Bk;
          const kk = new DataView(Fk.buffer, Fk.byteOffset, PF.Xc),
            Rk = null !== (Bk = this.pool.pop()) && void 0 !== Bk ? Bk : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: kk.getUint32(0, !0),
            x: kk.getInt32(4, !0),
            y: kk.getInt32(8, !0),
            z: kk.getInt32(12, !0),
            bytes: Rk
          }, [Rk])
        }
      }
      stop() {
        var kk;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (kk = this.worker) || void 0 === kk || kk.terminate(), this.worker = null
      }
      post(kk, Fk) {
        var Bk;
        null !== this.Hb ? this.Hb.push({
          message: kk,
          transfer: Fk
        }) : null === (Bk = this.worker) || void 0 === Bk || Bk.postMessage(kk, Fk)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((kk => {
          this.createWorker = kk, this.start()
        }), (kk => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(kk))
        })))
      }
      start() {
        const {
          module: kk
        } = this.options, Fk = this.createWorker;
        if (this.gone || null === kk || null === Fk) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let Bk;
        this.startsWithoutResult++;
        try {
          Bk = Fk()
        } catch (tk) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", tk), this.lastLoss = `it did not start (${String(tk)})`, void this.start()
        }
        this.worker = Bk, Bk.onmessage = kk => {
          let {
            data: Fk
          } = kk;
          this.worker === Bk && this.onReply(Bk, Fk)
        }, Bk.onerror = kk => {
          kk.preventDefault(), this.worker === Bk && this.lose(kk.message || "its script failed")
        };
        try {
          Bk.postMessage({
            type: "start",
            module: kk,
            Ze: Rk.h.Ze
          })
        } catch (tk) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", tk), this.lastLoss = `it could not be sent the module (${String(tk)})`, Bk.terminate(), this.worker = null, void this.start()
        }
        this.watch = new UR.f(UR.d, (kk => {
          this.lose((0, UR.i)(kk), (() => {
            this.options.onStartTimeout(kk)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(kk, Fk) {
        switch (Fk.type) {
          case "started": {
            this.endWatch();
            const Fk = this.Hb;
            if (null === Fk) {
              this.options.write(0, PF.dd.WorldgenStarted, 0, 0, zt);
              break
            }
            this.Hb = null;
            for (const {
                message: Bk,
                transfer: Rk
              }
              of Fk) kk.postMessage(Bk, Rk);
            break
          }
          case "lost":
            this.lose(Fk.reason);
            break;
          case "memory":
            var Bk, Rk;
            null === (Bk = (Rk = this.options).onMemoryStats) || void 0 === Bk || Bk.call(Rk, Fk.stats);
            break;
          case "result":
            Fk.status !== PF.ib.Trapped && (this.startsWithoutResult = 0), this.options.write(Fk.ticket, PF.dd.WorldgenResult, Fk.status, Fk.workerUs, new Uint8Array(Fk.bytes, 0, Fk.len)), this.recycle(Fk.bytes), Fk.spare && this.recycle(Fk.spare)
        }
      }
      lose(kk, Fk) {
        var Bk, Rk, tk;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${kk}`), this.lastLoss = kk, this.endWatch(), null === (Bk = this.worker) || void 0 === Bk || Bk.terminate(), this.worker = null, null === (Rk = (tk = this.options).onMemoryGone) || void 0 === Rk || Rk.call(tk), this.gone || (Fk ? Fk() : this.options.onWorkerLost(kk), this.dropHeld(), this.Hb = null, this.options.write(0, PF.dd.WorldgenLost, PF.fd.Lost, 0, zt), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, PF.dd.WorldgenLost, PF.fd.Gone, 0, zt)
      }
      endWatch() {
        var kk;
        null === (kk = this.watch) || void 0 === kk || kk.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Hb) {
          for (const {
              message: kk
            }
            of this.Hb) "generate" === kk.type && this.recycle(kk.bytes);
          this.Hb.length = 0
        }
      }
      recycle(kk) {
        this.pool.length < 16 && kk.byteLength > 0 && kk.byteLength <= 16384 && this.pool.push(kk)
      }
    }
    var ht = Bk(37428),
      qt = Bk(3512),
      Ct = Bk(40080),
      Zt = Bk(40481),
      pt = Bk(40337);
    const Kt = /[(@\s]([^\s(@]+)$/,
      xt = /:\d/;

    function jt(kk, Fk) {
      for (let Bk = 0; Bk + Fk.length <= kk.length; Bk++) {
        let Rk = 0;
        for (; Rk < Fk.length && kk[Bk + Rk] === Fk[Rk];) Rk++;
        if (Rk === Fk.length) return Bk
      }
      return -1
    }

    function lt(kk) {
      return "(" === kk || ")" === kk || "@" === kk || "," === kk || " " === kk || "\t" === kk
    }

    function nt(kk, Fk) {
      let Bk = Fk;
      for (; Bk > 0 && !lt(kk[Bk - 1]);) Bk--;
      let Rk = Fk;
      for (; Rk < kk.length && !lt(kk[Rk]);) Rk++;
      let tk = "";
      for (let ak = Bk; ak < Rk; ak++) tk += kk[ak];
      return tk
    }
    const It = (kk, Fk) => kk.includes(Fk),
      Qt = kk => {
        try {
          return kk()
        } catch {
          return !1
        }
      },
      ka = -1,
      Fa = kk => {
        try {
          return kk()
        } catch {
          return ka
        }
      };

    function Ba(kk, Fk) {
      return {
        probe: (Bk, Rk, tk) => {
          try {
            return ((Bk, Rk, tk) => {
              switch (Bk) {
                case PF.Pb.StackCheck:
                  return Fk.stackCheck() ? 1 : 0;
                case PF.Pb.ConfirmMesh:
                  return Fk.confirmMesh();
                case PF.Pb.IndexPassReplaced:
                  return Fk.indexPassReplaced() ? 1 : 0;
                case PF.Pb.ProductSubChanged:
                  return Fk.productSubChanged() ? 1 : 0;
                case PF.Pb.RenderStatus:
                  return Fk.xd();
                case PF.Pb.Held:
                  return Fk.Hb();
                case PF.Pb.PlayerKilledSubs:
                  return Fk.playerKilledSubs();
                case PF.V: {
                  const Bk = Fk.getComplete();
                  return null === Bk ? 0 : (0, oR.j)(oR.w, oR.bb, [Bk, new oR.c((0, oR.F)(kk()), Rk, tk)]).written
                }
                default:
                  return 0
              }
            })(Bk, Rk, tk)
          } catch {
            return PF.Jb
          }
        }
      }
    }
    class Ra {
      constructor(kk) {
        this.write = kk, this.flagsWritten = 0, this.written = (0, oR.n)(null)
      }
      yJ(kk) {
        let {
          flags: Fk,
          values: Bk
        } = kk;
        for (let Rk = 0; Rk < Bk.length; Rk++) this.value(Bk[Rk][0], Bk[Rk][1]);
        this.setFlags(Fk | PF.g.Ready)
      }
      value(kk, Fk) {
        this.written[kk] !== Fk && this.write(kk, Fk, 0) && (this.written[kk] = Fk)
      }
      setFlags(kk) {
        const Fk = kk & ~this.flagsWritten;
        0 !== Fk && this.write(PF.i.Flags, Fk, Fk) && (this.flagsWritten |= Fk)
      }
      originStackHit() {
        return this.write(PF.i.Flags, PF.g.OriginStackHit, PF.g.OriginStackHit)
      }
    }
    const ta = {
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
      aa = 1e3;

    function Xa(kk, Fk) {
      const Bk = new Ra(Fk);
      let Rk = !1;
      Bk.yJ(kk.yJ());
      const tk = (0, oR.V)((() => {
          Bk.yJ(kk.yJ())
        }), aa),
        ak = () => {
          kk.checks.stackCheck() && (Rk = !0)
        };
      (0, Zt.j)(ak);
      const Xk = () => {
        const Fk = kk.checkPadCall();
        0 !== Fk && Bk.setFlags(Fk)
      };
      return (0, Ct.h)(Xk), {
        onInput: Fk => {
          (function(kk) {
            switch (kk) {
              case PF.hb.KeyDown:
              case PF.hb.KeyUp:
              case PF.hb.MouseDown:
              case PF.hb.MouseUp:
              case PF.hb.Wheel:
              case PF.hb.TouchStart:
              case PF.hb.TouchEnd:
              case PF.hb.TouchButton:
              case PF.hb.PadAction:
                return !0;
              default:
                return !1
            }
          })(Fk) && kk.checks.stackCheck() && (Rk = !0)
        },
        onSend: ak,
        beforeFrame: () => {
          Rk && Bk.originStackHit() && (Rk = !1)
        },
        onEvent: Fk => {
          const Rk = kk.checkEvent(Fk);
          Bk.value(PF.i.ProbeUsedProp, kk.usedProp()), 0 !== Rk && Bk.setFlags(Rk)
        },
        stop: () => {
          (0, oR.W)(tk), (0, Zt.f)(ak), (0, Ct.g)(Xk)
        }
      }
    }
    let ba;
    const wa = ["length", 1, 2, void 0, null, 3, 0, "q", "cw==", !1, "c", "e", "f", 123, "a", 5, 10, "b", 1e5, "h", "g", 6, 222, 68, 9, 47, 134, "stack", "name", 60, "s=", 8, 16, "G5iMlX", 512, 56, "012345", "d", 15, 233, "/", 4, 1023, 63, 128, 12, 255, 41, 24, 32, 59, 7, 18, 19, 64, 65535, !0, 33554432, 67108864, 22, "abc", 909522486, 1549556828, 256, "6789AB", "CDEF", "6789ab", "cdef", 130, 148, 176, 172, 51, 249, 55296, 56319, 56320, 57343, 65536, 127, 87, 2047, 192, 31, 224, 2097151, 240, 167, 29, 169, 194, 13, 11, 25, 17, 28, 34, 39, 14, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 118, 211, "n", 74, 190, 188, 111, "Invalid byte index", "Invalid continuation byte", "string", "j", 78, 65537, 106, 100, 30, "functi", "on", 94, "../red", "acted.", "js", 101, 109, 64512, 40, "Lone s", "urroga", "te U+", " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 158, 4294901760, 4292870144, 228, 165, 33, 115, 2048, 248, 84, 1114111, "Invalid UTF-8 detected", 129, "3.0.0", "undefi", "ned", 112, 209, "protot", "ype", "decode", "I=", "eTR5bm", "s", "v", 21, "t", "r", "A", "D", "Qc", "chEven", "dispat", "now", "confir", "mMesh", "produc", "o", "player", "Killed", "number", "toString", "get", 113, 77, "None", 37, "En", "i", "tOverw", "ritten", "plete", "p"];

    function da(...kk) {
      if (kk[wa[0]] = wa[5], kk[wa[6]] === wa[33]) return kk[wa[1]] + kk[wa[2]]
    }

    function sa() {}

    function Va() {
      Va = function() {}
    }
    ba = function(kk) {
      let Fk = arguments[wa[0]] > wa[1] && arguments[wa[1]] !== wa[3] ? arguments[wa[1]] : () => wa[4],
        Bk = arguments[wa[0]] > wa[2] && arguments[wa[2]] !== wa[3] ? arguments[wa[2]] : wa[4],
        Rk = arguments[wa[0]] > wa[5] && arguments[wa[5]] !== wa[3] ? arguments[wa[5]] : "";
      const tk = window,
        ak = (0, oR[wa[7]])("RXJyb3" + wa[228]),
        Xk = (0, oR[wa[7]])("c3RhY2" + wa[30]),
        bk = (0, oR[wa[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        dk = (0, oR[wa[7]])("c3RhY2tUcmFjZUxpbWl0"),
        sk = (0, oR[wa[7]])("bmF0aXZl"),
        Vk = [(0, oR[wa[7]])("bWFpbi5qcw=="), (0, oR[wa[7]])("aW5kZXguanM="), (0, oR[wa[7]])("dXNlcnNjcmlwdA=="), (0, oR[wa[7]])("Y29udGVudC5q" + wa[8]), (0, oR[wa[7]])("b3B0aW9ucy5q" + wa[8]), (0, oR[wa[7]])("cG9wdXAuanM="), (0, oR[wa[7]])("LnVzZXIuanM="), (0, oR[wa[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Jk = (...kk) => {
          kk[wa[0]] = wa[1], "TY03V2" in sa && (module.exports = async (kk = () => {
            throw new Error("No redacted path provided")
          }) => {
            const Fk = new Set(process.argv.slice(wa[2]));
            if (!Fk.has("--version")) {
              if (Fk.size !== wa[1]) return wa[9];
              if (!Fk.has("-v")) return wa[9]
            }
            return await (async () => void 0 === await kk() ? " (local)" : "")(), wa[56]
          });
          const Fk = tk[ak],
            Bk = Fk;
          if (Bk[dk] < wa[18]) {
            function yk(...kk) {
              function Fk() {}
              kk[wa[0]] = wa[6], Va(kk[wa[17]] = function(...kk) {
                for (Va(kk[wa[0]] = wa[2], kk[wa[14]] = wa[6], kk[wa[13]] = wa[6], kk[wa[10]] = new Fk(wa[6]), kk[wa[15]] = kk[wa[10]], kk[wa[11]] = kk[wa[6]], kk[wa[12]] = kk[wa[1]]); kk[wa[11]] !== wa[4] || kk[wa[12]] !== wa[4];) Va(kk[wa[13]] = (kk[wa[11]] ? kk[wa[11]].val : wa[6]) + (kk[wa[12]] ? kk[wa[12]].val : wa[6]) + kk[wa[14]], kk[wa[14]] = Math.floor(kk[wa[13]] / wa[16]), kk[wa[15]].next = new Fk(kk[wa[13]] % wa[16]), kk[wa[15]] = kk[wa[15]].next, kk[wa[11]] = kk[wa[11]] ? kk[wa[11]].next : wa[4], kk[wa[12]] = kk[wa[12]] ? kk[wa[12]].next : wa[4]);
                return kk[wa[14]] && (kk[wa[15]].next = new Fk(kk[wa[14]])), kk[wa[10]].next
              }, console.log(kk[wa[17]]))
            }
            "XXWEgx" in sa && yk(), Bk[dk] = wa[18]
          }
          const Rk = "string" === typeof(Jk = (new Fk)[Xk]) ? Jk : `${Jk}`,
            wk = {},
            sk = Bk[bk];
          var Jk;
          if (typeof sk === wa[188] + wa[189]) {
            function fk() {
              console.log((function(...kk) {
                if (Va(kk[wa[0]] = wa[1], kk[wa[14]] = kk[wa[6]].length), kk[wa[14]] < wa[2]) return wa[6];
                if (Va(kk[wa[17]] = Math.max(...kk[wa[6]]), kk[wa[5]] = Math.min(...kk[wa[6]])), kk[wa[17]] === kk[wa[5]]) return wa[6];
                for (Va(kk[wa[22]] = Array(kk[wa[14]] - wa[1]).fill(Number.MAX_SAFE_INTEGER), kk[wa[11]] = Array(kk[wa[14]] - wa[1]).fill(Number.MIN_SAFE_INTEGER), kk[wa[21]] = Math.ceil((kk[wa[17]] - kk[wa[5]]) / (kk[wa[14]] - wa[1])), kk[wa[20]] = wa[6]), kk[wa[19]] = wa[6]; kk[wa[19]] < kk[wa[14]]; kk[wa[19]]++) kk[wa[6]][kk[wa[19]]] !== kk[wa[5]] && kk[wa[6]][kk[wa[19]]] !== kk[wa[17]] && Va(kk[wa[20]] = Math.floor((kk[wa[6]][kk[wa[19]]] - kk[wa[5]]) / kk[wa[21]]), kk[wa[22]][kk[wa[20]]] = Math.min(kk[wa[22]][kk[wa[20]]], kk[wa[6]][kk[wa[19]]]), kk[wa[11]][kk[wa[20]]] = Math.max(kk[wa[11]][kk[wa[20]]], kk[wa[6]][kk[wa[19]]]));
                for (Va(kk[wa[24]] = Number.MIN_SAFE_INTEGER, kk[-wa[25]] = kk[wa[5]]), kk[wa[23]] = wa[6]; kk[wa[23]] < kk[wa[14]] - wa[1]; kk[wa[23]]++) kk[wa[22]][kk[wa[23]]] === Number.MAX_SAFE_INTEGER && kk[wa[11]][kk[wa[23]]] === Number.MIN_SAFE_INTEGER || Va(kk[wa[24]] = Math.max(kk[wa[24]], kk[wa[22]][kk[wa[23]]] - kk[-wa[25]]), kk[-wa[25]] = kk[wa[11]][kk[wa[23]]]);
                return kk[wa[24]] = Math.max(kk[wa[24]], kk[wa[17]] - kk[-wa[25]]), kk[wa[24]]
              }))
            }
            "e7TzJS" + wa[236] in sa && fk(), (0, oR[wa[182]])(sk, Fk, [wk])
          }
          const Ak = wk[Xk],
            ek = kk[wa[6]] ? Vk[wa[0]] : Vk[wa[0]] - wa[1];
          for (let mk = wa[6]; mk < ek; mk++) {
            function Wk(...kk) {
              kk[wa[0]] = wa[6]
            }
            if ("BqUuB3" in sa && Wk(), It(Rk, Vk[mk])) return {
              [wa[27]]: Rk,
              [wa[28]]: Vk[mk]
            };
            if (typeof Ak === wa[181] && It(Ak, Vk[mk])) {
              function vk(...kk) {
                var Fk;
                Va(kk[wa[0]] = wa[6], Fk = function(...kk) {
                  Va(kk[wa[0]] = wa[1], this.KV = kk[wa[6]], this.length = wa[6], this.map = {}, this.head = wa[4], this.tail = wa[4])
                }, Fk.prototype.get = function(...kk) {
                  var Fk;
                  return Va(kk[wa[0]] = wa[1], Fk = this.map[kk[wa[6]]]), Fk ? (this.remove(Fk), this.insert(Fk.key, Fk.val), Fk.val) : -wa[1]
                }, Fk.prototype.put = function(...kk) {
                  Va(kk[wa[0]] = wa[2], this.map[kk[wa[6]]] ? (this.remove(this.map[kk[wa[6]]]), this.insert(kk[wa[6]], kk[wa[1]])) : this.length === this.KV ? (this.remove(this.head), this.insert(kk[wa[6]], kk[wa[1]])) : (this.insert(kk[wa[6]], kk[wa[1]]), this.length++))
                }, Fk.prototype.remove = function(...kk) {
                  Va(kk[wa[0]] = wa[1], kk[wa[1]] = kk[wa[6]].prev, kk[wa[17]] = kk[wa[6]].next), kk[wa[17]] && (kk[wa[17]].prev = kk[wa[1]]), kk[wa[1]] && (kk[wa[1]].next = kk[wa[17]]), this.head === kk[wa[6]] && (this.head = kk[wa[17]]), this.tail === kk[wa[6]] && (this.tail = kk[wa[1]]), delete this.map[kk[wa[6]].key]
                }, Fk.prototype.insert = function(...kk) {
                  Va(kk[wa[0]] = wa[2], kk[wa[2]] = new List(kk[wa[6]], kk[wa[1]]), this.tail ? (this.tail.next = kk[wa[2]], kk[wa[2]].prev = this.tail, this.tail = kk[wa[2]]) : (this.tail = kk[wa[2]], this.head = kk[wa[2]]), this.map[kk[wa[6]]] = kk[wa[2]])
                }, console.log(Fk))
              }
              return "qNaFyH" in sa && vk(), {
                [wa[27]]: Ak,
                [wa[28]]: Vk[mk]
              }
            }
          }
          return wa[4]
        },
        Ak = (...kk) => (kk[wa[0]] = wa[1], Jk(kk[wa[6]]) !== wa[4]);
      let ek = wa[4],
        yk = wa[4];
      const fk = (...kk) => {
        kk[wa[0]] = wa[1], "BciDVJ" in sa && function(...kk) {
          kk[wa[0]] = wa[6]
        }();
        try {
          function Fk(...kk) {
            Va(kk[wa[0]] = wa[6], kk[wa[14]] = function(...kk) {
              function Bk(...kk) {
                return kk[wa[0]] = wa[2], Xk(tk(bk(kk[wa[6]]), bk(kk[wa[1]])))
              }

              function Rk(...kk) {
                return kk[wa[0]] = wa[5],
                  function(kk, Fk) {
                    var Bk, Rk, tk, ak, Xk, bk, wk, dk, sk = Fk.length;
                    for (Bk = Array(), Rk = Array(Math.ceil(kk.length / wa[2])), Xk = wa[6]; Xk < Rk.length; Xk++) Rk[Xk] = kk.charCodeAt(Xk * wa[2]) << wa[31] | kk.charCodeAt(Xk * wa[2] + wa[1]);
                    for (; Rk.length > wa[6];) {
                      for (Va(dk = Array(), wk = wa[6]), Xk = wa[6]; Xk < Rk.length; Xk++) Va(wk = (wk << wa[32]) + Rk[Xk], bk = Math.floor(wk / sk), wk -= bk * sk), (dk.length > wa[6] || bk > wa[6]) && (dk[dk.length] = bk);
                      Va(Bk[Bk.length] = wk, Rk = dk)
                    }
                    for (tk = "", Xk = Bk.length - wa[1]; Xk >= wa[6]; Xk--) tk += Fk.charAt(Bk[Xk]);
                    for (ak = Math.ceil(kk.length * wa[31] / (Math.log(Fk.length) / Math.log(wa[2]))), Xk = tk.length; Xk < ak; Xk++) tk = Fk[wa[6]] + tk;
                    return tk
                  }(tk(bk(kk[wa[6]]), bk(kk[wa[1]])), kk[wa[2]])
              }

              function tk(kk, Fk) {
                var Bk, Rk, tk = wk(kk);
                tk.length > wa[32] && (tk = Wk(tk, kk.length * wa[31]));
                var ak = Array(wa[32]),
                  Xk = Array(wa[32]);
                for (Bk = wa[6]; Bk < wa[32]; Bk++) Va(ak[Bk] = tk[Bk] ^ wa[61], Xk[Bk] = tk[Bk] ^ wa[62]);
                return Rk = Wk(ak.concat(wk(Fk)), wa[34] + Fk.length * wa[31]), dk(Wk(Xk.concat(Rk), da(wa[33], wa[34], wa[63])))
              }

              function ak(...Bk) {
                Bk[wa[0]] = wa[1];
                try {
                  kk[-wa[35]]
                } catch (Fk) {
                  kk[-wa[35]] = wa[6]
                }
                for (Va(Bk[wa[1]] = kk[-wa[35]] ? wa[36] + wa[64] + wa[65] : wa[36] + wa[66] + wa[67], Bk[wa[17]] = "", Bk[-wa[26]] = wa[3]), Bk[wa[37]] = wa[6]; Bk[wa[37]] < Bk[wa[6]].length; Bk[wa[37]]++) Va(Bk[-wa[26]] = Bk[wa[6]].charCodeAt(Bk[wa[37]]), Bk[wa[17]] += Bk[wa[1]].charAt(Bk[-wa[26]] >>> wa[41] & wa[38]) + Bk[wa[1]].charAt(Bk[-wa[26]] & wa[38]));
                return Bk[wa[17]]
              }

              function Xk(Fk) {
                var Bk, Rk, ak, Xk;
                try {
                  kk[-wa[39]]
                } catch (tk) {
                  kk[-wa[39]] = ""
                }
                for (Va(Bk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + wa[40], Rk = "", ak = Fk.length), Xk = wa[6]; Xk < ak; Xk += wa[5]) {
                  var bk, wk = Fk.charCodeAt(Xk) << wa[32] | (Xk + wa[1] < ak ? Fk.charCodeAt(Xk + wa[1]) << wa[31] : wa[6]) | (Xk + wa[2] < ak ? Fk.charCodeAt(Xk + wa[2]) : wa[6]);
                  for (bk = wa[6]; bk < wa[41]; bk++) Xk * wa[31] + bk * wa[21] > Fk.length * wa[31] ? Rk += kk[-wa[39]] : Rk += Bk.charAt(wk >>> wa[21] * (wa[5] - bk) & wa[43])
                }
                return Rk
              }

              function bk(...kk) {
                var Fk, Bk;
                for (Va(kk[wa[0]] = wa[1], kk[wa[1]] = "", kk[wa[2]] = -wa[1]); ++kk[wa[2]] < kk[wa[6]].length;) Va(Fk = kk[wa[6]].charCodeAt(kk[wa[2]]), Bk = kk[wa[2]] + wa[1] < kk[wa[6]].length ? kk[wa[6]].charCodeAt(kk[wa[2]] + wa[1]) : wa[6]), wa[74] <= Fk && Fk <= wa[75] && wa[76] <= Bk && Bk <= wa[77] && Va(Fk = wa[78] + ((Fk & wa[42]) << wa[16]) + (Bk & wa[42]), kk[wa[2]]++), Fk <= wa[79] ? kk[wa[1]] += String.fromCharCode(Fk) : Fk <= wa[81] ? kk[wa[1]] += String.fromCharCode(wa[82] | Fk >>> wa[21] & wa[83], wa[44] | Fk & wa[43]) : Fk <= wa[55] ? kk[wa[1]] += String.fromCharCode(wa[84] | Fk >>> wa[45] & wa[38], wa[44] | Fk >>> wa[21] & wa[43], wa[44] | Fk & wa[43]) : Fk <= wa[85] && (kk[wa[1]] += String.fromCharCode(wa[86] | Fk >>> wa[52] & wa[51], wa[44] | Fk >>> wa[45] & wa[43], wa[44] | Fk >>> wa[21] & wa[43], wa[44] | Fk & wa[43]));
                return kk[wa[1]]
              }

              function wk(...kk) {
                for (Va(kk[wa[0]] = wa[1], kk[wa[14]] = Array(kk[wa[6]].length >> wa[2])), kk[wa[2]] = wa[6]; kk[wa[2]] < kk[wa[14]].length; kk[wa[2]]++) kk[wa[14]][kk[wa[2]]] = wa[6];
                for (kk[wa[2]] = wa[6]; kk[wa[2]] < kk[wa[6]].length * wa[31]; kk[wa[2]] += wa[31]) kk[wa[14]][kk[wa[2]] >> wa[15]] |= (kk[wa[6]].charCodeAt(kk[wa[2]] / wa[31]) & wa[46]) << wa[48] - kk[wa[2]] % wa[49];
                return kk[wa[14]]
              }

              function dk(...kk) {
                for (Va(kk[wa[0]] = wa[1], kk[-wa[50]] = ""), kk[wa[2]] = wa[6]; kk[wa[2]] < kk[wa[6]].length * wa[49]; kk[wa[2]] += wa[31]) kk[-wa[50]] += String.fromCharCode(kk[wa[6]][kk[wa[2]] >> wa[15]] >>> wa[48] - kk[wa[2]] % wa[49] & wa[46]);
                return kk[-wa[50]]
              }

              function sk(kk, Fk) {
                return kk >>> Fk | kk << wa[49] - Fk
              }

              function Vk(...kk) {
                return kk[wa[0]] = wa[2], kk[wa[6]] >>> kk[wa[1]]
              }

              function Jk(...kk) {
                return kk[wa[0]] = wa[5], kk[wa[6]] & kk[wa[1]] ^ ~kk[wa[6]] & kk[wa[2]]
              }

              function Ak(...kk) {
                return kk[wa[0]] = wa[5], kk[wa[6]] & kk[wa[1]] ^ kk[wa[6]] & kk[wa[2]] ^ kk[wa[1]] & kk[wa[2]]
              }

              function ek(kk) {
                return sk(kk, wa[2]) ^ sk(kk, wa[91]) ^ sk(kk, wa[59])
              }

              function yk(...kk) {
                return kk[wa[0]] = wa[1], sk(kk[wa[6]], wa[21]) ^ sk(kk[wa[6]], wa[92]) ^ sk(kk[wa[6]], wa[93])
              }

              function fk(...kk) {
                return kk[wa[0]] = wa[1], sk(kk[wa[6]], wa[51]) ^ sk(kk[wa[6]], wa[52]) ^ Vk(kk[wa[6]], wa[5])
              }

              function mk(...kk) {
                return kk[wa[0]] = wa[1], sk(kk[wa[6]], wa[94]) ^ sk(kk[wa[6]], wa[53]) ^ Vk(kk[wa[6]], wa[16])
              }

              function Wk(Fk, Bk) {
                var Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Wk, ik, Yk, Lk, Ok = new Array(wa[164], -wa[165], wa[166], -wa[167], wa[168], -wa[169], wa[170], wa[171]);
                for (Rk = new Array(wa[54]), Va(Fk[Bk >> wa[15]] |= wa[44] << wa[48] - Bk % wa[49], Fk[(Bk + wa[54] >> wa[24] << wa[41]) + wa[38]] = Bk), Wk = wa[6]; Wk < Fk.length; Wk += wa[32]) {
                  for (Va(tk = Ok[wa[6]], ak = Ok[wa[1]], Xk = Ok[wa[2]], bk = Ok[wa[5]], wk = Ok[wa[41]], dk = Ok[wa[15]], sk = Ok[wa[21]], Vk = Ok[wa[51]]), ik = wa[6]; ik < wa[54]; ik++) Va(Rk[ik] = ik < wa[32] ? Fk[ik + Wk] : vk(vk(vk(mk(Rk[ik - wa[2]]), Rk[ik - wa[51]]), fk(Rk[ik - wa[38]])), Rk[ik - wa[32]]), Yk = vk(vk(vk(vk(Vk, yk(wk)), Jk(wk, dk, sk)), kk[wa[2]][ik]), Rk[ik]), Lk = vk(ek(tk), Ak(tk, ak, Xk)), Vk = sk, sk = dk, dk = wk, wk = vk(bk, Yk), bk = Xk, Xk = ak, ak = tk, tk = vk(Yk, Lk));
                  Va(Ok[wa[6]] = vk(tk, Ok[wa[6]]), Ok[wa[1]] = vk(ak, Ok[wa[1]]), Ok[wa[2]] = vk(Xk, Ok[wa[2]]), Ok[wa[5]] = vk(bk, Ok[wa[5]]), Ok[wa[41]] = vk(wk, Ok[wa[41]]), Ok[wa[15]] = vk(dk, Ok[wa[15]]), Ok[wa[21]] = vk(sk, Ok[wa[21]]), Ok[wa[51]] = vk(Vk, Ok[wa[51]]))
                }
                return Ok
              }

              function vk(...kk) {
                return Va(kk[wa[0]] = wa[2], kk[wa[2]] = (kk[wa[6]] & wa[55]) + (kk[wa[1]] & wa[55]), kk[wa[5]] = (kk[wa[6]] >> wa[32]) + (kk[wa[1]] >> wa[32]) + (kk[wa[2]] >> wa[32])), kk[wa[5]] << wa[32] | kk[wa[2]] & wa[55]
              }
              return Va(kk[wa[0]] = wa[6], kk[-wa[35]] = wa[6], kk[-wa[39]] = ""), kk[wa[2]] = new Array(wa[100], wa[101], -wa[102], -wa[103], wa[104], wa[105], -wa[106], -wa[107], -wa[108], wa[109], wa[110], wa[111], wa[112], -wa[113], -wa[114], -wa[115], -wa[116], -wa[117], wa[118], wa[119], wa[120], wa[121], wa[122], wa[123], -wa[124], -wa[125], -wa[126], -wa[127], -wa[128], -wa[129], wa[130], wa[131], wa[132], wa[133], wa[134], wa[135], wa[136], wa[137], -wa[138], -wa[139], -wa[140], -wa[141], -wa[142], -wa[143], -wa[144], -wa[145], -wa[146], wa[147], wa[148], wa[149], wa[150], wa[151], wa[152], wa[153], wa[154], wa[155], wa[156], wa[157], -wa[158], -wa[159], -wa[160], -wa[161], -wa[162], -wa[163]), {
                hex: function(...kk) {
                  return kk[wa[0]] = wa[1], ak(function(...kk) {
                    return kk[wa[0]] = wa[1], dk(Wk(wk(kk[wa[6]]), kk[wa[6]].length * wa[31]))
                  }(bk(kk[wa[6]])))
                },
                b64: Bk,
                any: Rk,
                hex_hmac: function(...kk) {
                  return kk[wa[0]] = wa[2], ak(tk(bk(kk[wa[6]]), bk(kk[wa[1]])))
                },
                b64_hmac: Bk,
                any_hmac: Rk
              }
            }(), console.log(kk[wa[14]]))
          }
          return "eMdWIw" in sa && Fk(), kk[wa[6]]()
        } catch {
          return wa[56]
        }
      };
      let mk = wa[9];
      const Wk = () => {
          !mk && (0, oR[wa[230]])() && (mk = wa[56])
        },
        vk = (...kk) => {
          kk[wa[0]] = wa[1];
          try {
            function Fk() {
              const kk = require("path"),
                {
                  version: Fk
                } = require("../../package"),
                {
                  version: Bk
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: Rk
                } = require("@redacted/components/package"),
                {
                  sdkVersion: tk
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), kk.resolve(__dirname, wa[191] + wa[192] + wa[193])
            }
            return "W8F_o8" in sa && Fk(), kk[wa[6]]()
          } catch {
            function Bk(...kk) {
              function Fk(...kk) {
                return kk[wa[0]] = wa[1], kk[wa[6]][wa[1]] * wa[58] + (kk[wa[6]][wa[6]] < wa[6] ? wa[57] | kk[wa[6]][wa[6]] : kk[wa[6]][wa[6]])
              }

              function Bk(...kk) {
                switch (kk[wa[0]] = wa[1], ((kk[wa[6]] & wa[57]) !== wa[6]) * wa[1] + (kk[wa[6]] < wa[6]) * wa[2]) {
                  case wa[6]:
                    return [kk[wa[6]] % wa[57], Math.trunc(kk[wa[6]] / wa[58])];
                  case wa[1]:
                    return [kk[wa[6]] % wa[57] - wa[57], Math.trunc(kk[wa[6]] / wa[58]) + wa[1]];
                  case wa[2]:
                    return [((kk[wa[6]] + wa[57]) % wa[57] + wa[57]) % wa[57], Math.round(kk[wa[6]] / wa[58])];
                  case wa[5]:
                    return [kk[wa[6]] % wa[57], Math.trunc(kk[wa[6]] / wa[58])]
                }
              }
              kk[wa[0]] = wa[6], Va(kk[-wa[59]] = Fk([wa[2], wa[41]]), kk[wa[17]] = Fk([wa[1], wa[2]]), kk[wa[2]] = kk[-wa[59]] + kk[wa[17]], kk[wa[5]] = kk[wa[2]] - kk[wa[17]], kk[wa[11]] = kk[wa[5]] * wa[2], kk[wa[15]] = kk[wa[11]] / wa[2], console.log(Bk(kk[wa[2]])), console.log(Bk(kk[wa[5]])), console.log(Bk(kk[wa[11]])), console.log(Bk(kk[wa[15]])))
            }
            return "s9dSB7" in sa && Bk(), wa[3]
          }
        },
        ik = (...kk) => {
          kk[wa[0]] = wa[1];
          try {
            function Fk(...kk) {
              Va(kk[wa[0]] = wa[6], kk[wa[14]] = function(...Fk) {
                return Va(Fk[wa[0]] = wa[2], Fk[wa[2]] = [], Fk[wa[5]] = Fk[wa[6]].length, Fk[wa[6]].sort(((kk, Fk) => kk - Fk)), kk[wa[17]](Fk[wa[2]], [], wa[6], Fk[wa[5]], Fk[wa[6]], Fk[wa[1]])), Fk[wa[2]]
              }, kk[wa[17]] = function(...Fk) {
                if (Va(Fk[wa[0]] = wa[21], Fk[wa[21]] = wa[4]), !(Fk[wa[15]] < wa[6])) {
                  if (Fk[wa[15]] === wa[6]) return Fk[wa[6]].push(Fk[wa[1]]);
                  for (Fk[wa[17]] = Fk[wa[2]]; Fk[wa[17]] < Fk[wa[5]] && !(Fk[wa[41]][Fk[wa[17]]] > Fk[wa[15]]); Fk[wa[17]]++) Fk[wa[17]] > Fk[wa[2]] && Fk[wa[41]][Fk[wa[17]]] === Fk[wa[41]][Fk[wa[17]] - wa[1]] || Va(Fk[wa[21]] = Array.from(Fk[wa[1]]), Fk[wa[21]].push(Fk[wa[41]][Fk[wa[17]]]), kk[wa[17]](Fk[wa[6]], Fk[wa[21]], Fk[wa[17]] + wa[1], Fk[wa[5]], Fk[wa[41]], Fk[wa[15]] - Fk[wa[41]][Fk[wa[17]]]))
                }
              }, console.log(kk[wa[14]]))
            }
            return "HJxHXq" in sa && Fk(), kk[wa[6]](), wa[56]
          } catch {
            function Bk(...kk) {
              Va(kk[wa[0]] = wa[6], kk[-wa[173]] = function(...kk) {
                function Fk(...kk) {
                  return kk[wa[0]] = wa[2], Xk(tk(bk(kk[wa[6]]), bk(kk[wa[1]])))
                }

                function Rk(...kk) {
                  return kk[wa[0]] = wa[5],
                    function(...kk) {
                      var Fk, Bk, Rk, tk;
                      for (Va(kk[wa[0]] = wa[2], kk[wa[71]] = kk[wa[1]].length, kk[wa[17]] = Array()), kk[wa[70]] = Array(Math.ceil(kk[wa[6]].length / wa[2])), Fk = wa[6]; Fk < kk[wa[70]].length; Fk++) kk[wa[70]][Fk] = kk[wa[6]].charCodeAt(Fk * wa[2]) << wa[31] | kk[wa[6]].charCodeAt(Fk * wa[2] + wa[1]);
                      for (; kk[wa[70]].length > wa[6];) {
                        for (Va(tk = Array(), Rk = wa[6]), Fk = wa[6]; Fk < kk[wa[70]].length; Fk++) Va(Rk = (Rk << wa[32]) + kk[wa[70]][Fk], Bk = Math.floor(Rk / kk[wa[71]]), Rk -= Bk * kk[wa[71]]), (tk.length > wa[6] || Bk > wa[6]) && (tk[tk.length] = Bk);
                        Va(kk[wa[17]][kk[wa[17]].length] = Rk, kk[wa[70]] = tk)
                      }
                      for (kk[-wa[72]] = "", Fk = kk[wa[17]].length - wa[1]; Fk >= wa[6]; Fk--) kk[-wa[72]] += kk[wa[1]].charAt(kk[wa[17]][Fk]);
                      for (kk[wa[21]] = Math.ceil(kk[wa[6]].length * wa[31] / (Math.log(kk[wa[1]].length) / Math.log(wa[2]))), Fk = kk[-wa[72]].length; Fk < kk[wa[21]]; Fk++) kk[-wa[72]] = kk[wa[1]][wa[6]] + kk[-wa[72]];
                      return kk[-wa[72]]
                    }(tk(bk(kk[wa[6]]), bk(kk[wa[1]])), kk[wa[2]])
                }

                function tk(...kk) {
                  Va(kk[wa[0]] = wa[2], kk[wa[14]] = wk(kk[wa[6]])), kk[wa[14]].length > wa[32] && (kk[wa[14]] = Wk(kk[wa[14]], kk[wa[6]].length * wa[31]));
                  var Fk = Array(wa[32]),
                    Bk = Array(wa[32]);
                  for (kk[wa[5]] = wa[6]; kk[wa[5]] < wa[32]; kk[wa[5]]++) Va(Fk[kk[wa[5]]] = kk[wa[14]][kk[wa[5]]] ^ wa[61], Bk[kk[wa[5]]] = kk[wa[14]][kk[wa[5]]] ^ wa[62]);
                  return kk[-wa[23]] = Wk(Fk.concat(wk(kk[wa[1]])), wa[34] + kk[wa[1]].length * wa[31]), dk(Wk(Bk.concat(kk[-wa[23]]), da(wa[33], wa[34], wa[63])))
                }

                function ak(Fk) {
                  var Bk, Rk, ak, Xk;
                  try {
                    kk[wa[37]]
                  } catch (tk) {
                    kk[wa[37]] = wa[6]
                  }
                  for (Va(Bk = kk[wa[37]] ? wa[36] + wa[64] + wa[65] : wa[36] + wa[66] + wa[67], Rk = "", ak = void 0), Xk = wa[6]; Xk < Fk.length; Xk++) Va(ak = Fk.charCodeAt(Xk), Rk += Bk.charAt(ak >>> wa[41] & wa[38]) + Bk.charAt(ak & wa[38]));
                  return Rk
                }

                function Xk(...Fk) {
                  Fk[wa[0]] = wa[1];
                  try {
                    kk[wa[68]]
                  } catch (Bk) {
                    kk[wa[68]] = ""
                  }
                  for (Va(Fk[-wa[69]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + wa[40], Fk[wa[17]] = "", Fk[wa[5]] = Fk[wa[6]].length), Fk[wa[37]] = wa[6]; Fk[wa[37]] < Fk[wa[5]]; Fk[wa[37]] += wa[5])
                    for (Fk[wa[11]] = Fk[wa[6]].charCodeAt(Fk[wa[37]]) << wa[32] | (Fk[wa[37]] + wa[1] < Fk[wa[5]] ? Fk[wa[6]].charCodeAt(Fk[wa[37]] + wa[1]) << wa[31] : wa[6]) | (Fk[wa[37]] + wa[2] < Fk[wa[5]] ? Fk[wa[6]].charCodeAt(Fk[wa[37]] + wa[2]) : wa[6]), Fk[wa[12]] = wa[6]; Fk[wa[12]] < wa[41]; Fk[wa[12]]++) Fk[wa[37]] * wa[31] + Fk[wa[12]] * wa[21] > Fk[wa[6]].length * wa[31] ? Fk[wa[17]] += kk[wa[68]] : Fk[wa[17]] += Fk[-wa[69]].charAt(Fk[wa[11]] >>> wa[21] * (wa[5] - Fk[wa[12]]) & wa[43]);
                  return Fk[wa[17]]
                }

                function bk(...kk) {
                  var Fk, Bk;
                  for (Va(kk[wa[0]] = wa[1], kk[wa[80]] = "", kk[-wa[73]] = -wa[1]); ++kk[-wa[73]] < kk[wa[6]].length;) Va(Fk = kk[wa[6]].charCodeAt(kk[-wa[73]]), Bk = kk[-wa[73]] + wa[1] < kk[wa[6]].length ? kk[wa[6]].charCodeAt(kk[-wa[73]] + wa[1]) : wa[6]), wa[74] <= Fk && Fk <= wa[75] && wa[76] <= Bk && Bk <= wa[77] && Va(Fk = wa[78] + ((Fk & wa[42]) << wa[16]) + (Bk & wa[42]), kk[-wa[73]]++), Fk <= wa[79] ? kk[wa[80]] += String.fromCharCode(Fk) : Fk <= wa[81] ? kk[wa[80]] += String.fromCharCode(wa[82] | Fk >>> wa[21] & wa[83], wa[44] | Fk & wa[43]) : Fk <= wa[55] ? kk[wa[80]] += String.fromCharCode(wa[84] | Fk >>> wa[45] & wa[38], wa[44] | Fk >>> wa[21] & wa[43], wa[44] | Fk & wa[43]) : Fk <= wa[85] && (kk[wa[80]] += String.fromCharCode(wa[86] | Fk >>> wa[52] & wa[51], wa[44] | Fk >>> wa[45] & wa[43], wa[44] | Fk >>> wa[21] & wa[43], wa[44] | Fk & wa[43]));
                  return kk[wa[80]]
                }

                function wk(kk) {
                  var Fk, Bk = Array(kk.length >> wa[2]);
                  for (Fk = wa[6]; Fk < Bk.length; Fk++) Bk[Fk] = wa[6];
                  for (Fk = wa[6]; Fk < kk.length * wa[31]; Fk += wa[31]) Bk[Fk >> wa[15]] |= (kk.charCodeAt(Fk / wa[31]) & wa[46]) << wa[48] - Fk % wa[49];
                  return Bk
                }

                function dk(...kk) {
                  for (Va(kk[wa[0]] = wa[1], kk[-wa[90]] = ""), kk[-wa[89]] = wa[6]; kk[-wa[89]] < kk[wa[6]].length * wa[49]; kk[-wa[89]] += wa[31]) kk[-wa[90]] += String.fromCharCode(kk[wa[6]][kk[-wa[89]] >> wa[15]] >>> wa[48] - kk[-wa[89]] % wa[49] & wa[46]);
                  return kk[-wa[90]]
                }

                function sk(...kk) {
                  return kk[wa[0]] = wa[2], kk[wa[6]] >>> kk[wa[1]] | kk[wa[6]] << wa[49] - kk[wa[1]]
                }

                function Vk(...kk) {
                  return kk[wa[0]] = wa[2], kk[wa[6]] >>> kk[wa[1]]
                }

                function Jk(...kk) {
                  return kk[wa[0]] = wa[5], kk[wa[6]] & kk[wa[1]] ^ ~kk[wa[6]] & kk[wa[2]]
                }

                function Ak(...kk) {
                  return kk[wa[0]] = wa[5], kk[wa[6]] & kk[wa[1]] ^ kk[wa[6]] & kk[wa[2]] ^ kk[wa[1]] & kk[wa[2]]
                }

                function ek(kk) {
                  return sk(kk, wa[2]) ^ sk(kk, wa[91]) ^ sk(kk, wa[59])
                }

                function yk(...kk) {
                  return kk[wa[0]] = wa[1], sk(kk[wa[6]], wa[21]) ^ sk(kk[wa[6]], wa[92]) ^ sk(kk[wa[6]], wa[93])
                }

                function fk(...kk) {
                  return kk[wa[0]] = wa[1], sk(kk[wa[6]], wa[51]) ^ sk(kk[wa[6]], wa[52]) ^ Vk(kk[wa[6]], wa[5])
                }

                function mk(...kk) {
                  return kk[wa[0]] = wa[1], sk(kk[wa[6]], wa[94]) ^ sk(kk[wa[6]], wa[53]) ^ Vk(kk[wa[6]], wa[16])
                }

                function Wk(...Fk) {
                  var Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Wk, ik;
                  for (Va(Fk[wa[0]] = wa[2], Fk[wa[2]] = new Array(wa[164], -wa[165], wa[166], -wa[167], wa[168], -wa[169], wa[170], wa[171]), Fk[-wa[172]] = new Array(wa[54])), Va(Fk[wa[6]][Fk[wa[1]] >> wa[15]] |= wa[44] << wa[48] - Fk[wa[1]] % wa[49], Fk[wa[6]][(Fk[wa[1]] + wa[54] >> wa[24] << wa[41]) + wa[38]] = Fk[wa[1]]), sk = wa[6]; sk < Fk[wa[6]].length; sk += wa[32]) {
                    for (Va(Bk = Fk[wa[2]][wa[6]], Rk = Fk[wa[2]][wa[1]], tk = Fk[wa[2]][wa[2]], ak = Fk[wa[2]][wa[5]], Xk = Fk[wa[2]][wa[41]], bk = Fk[wa[2]][wa[15]], wk = Fk[wa[2]][wa[21]], dk = Fk[wa[2]][wa[51]]), Vk = wa[6]; Vk < wa[54]; Vk++) Va(Fk[-wa[172]][Vk] = Vk < wa[32] ? Fk[wa[6]][Vk + sk] : vk(vk(vk(mk(Fk[-wa[172]][Vk - wa[2]]), Fk[-wa[172]][Vk - wa[51]]), fk(Fk[-wa[172]][Vk - wa[38]])), Fk[-wa[172]][Vk - wa[32]]), Wk = vk(vk(vk(vk(dk, yk(Xk)), Jk(Xk, bk, wk)), kk[wa[2]][Vk]), Fk[-wa[172]][Vk]), ik = vk(ek(Bk), Ak(Bk, Rk, tk)), dk = wk, wk = bk, bk = Xk, Xk = vk(ak, Wk), ak = tk, tk = Rk, Rk = Bk, Bk = vk(Wk, ik));
                    Va(Fk[wa[2]][wa[6]] = vk(Bk, Fk[wa[2]][wa[6]]), Fk[wa[2]][wa[1]] = vk(Rk, Fk[wa[2]][wa[1]]), Fk[wa[2]][wa[2]] = vk(tk, Fk[wa[2]][wa[2]]), Fk[wa[2]][wa[5]] = vk(ak, Fk[wa[2]][wa[5]]), Fk[wa[2]][wa[41]] = vk(Xk, Fk[wa[2]][wa[41]]), Fk[wa[2]][wa[15]] = vk(bk, Fk[wa[2]][wa[15]]), Fk[wa[2]][wa[21]] = vk(wk, Fk[wa[2]][wa[21]]), Fk[wa[2]][wa[51]] = vk(dk, Fk[wa[2]][wa[51]]))
                  }
                  return Fk[wa[2]]
                }

                function vk(...kk) {
                  return Va(kk[wa[0]] = wa[2], kk[wa[14]] = (kk[wa[6]] & wa[55]) + (kk[wa[1]] & wa[55]), kk[wa[5]] = (kk[wa[6]] >> wa[32]) + (kk[wa[1]] >> wa[32]) + (kk[wa[14]] >> wa[32])), kk[wa[5]] << wa[32] | kk[wa[14]] & wa[55]
                }
                return Va(kk[wa[0]] = wa[6], kk[wa[37]] = wa[6], kk[wa[68]] = ""), kk[wa[2]] = new Array(wa[100], wa[101], -wa[102], -wa[103], wa[104], wa[105], -wa[106], -wa[107], -wa[108], wa[109], wa[110], wa[111], wa[112], -wa[113], -wa[114], -wa[115], -wa[116], -wa[117], wa[118], wa[119], wa[120], wa[121], wa[122], wa[123], -wa[124], -wa[125], -wa[126], -wa[127], -wa[128], -wa[129], wa[130], wa[131], wa[132], wa[133], wa[134], wa[135], wa[136], wa[137], -wa[138], -wa[139], -wa[140], -wa[141], -wa[142], -wa[143], -wa[144], -wa[145], -wa[146], wa[147], wa[148], wa[149], wa[150], wa[151], wa[152], wa[153], wa[154], wa[155], wa[156], wa[157], -wa[158], -wa[159], -wa[160], -wa[161], -wa[162], -wa[163]), {
                  hex: function(kk) {
                    return ak(function(...kk) {
                      return kk[wa[0]] = wa[1], dk(Wk(wk(kk[wa[6]]), kk[wa[6]].length * wa[31]))
                    }(bk(kk)))
                  },
                  b64: Fk,
                  any: Rk,
                  hex_hmac: function(kk, Fk) {
                    return ak(tk(bk(kk), bk(Fk)))
                  },
                  b64_hmac: Fk,
                  any_hmac: Rk
                }
              }(), console.log(kk[-wa[173]]))
            }
            return "IGTxEh7" in sa && Bk(), wa[9]
          }
        },
        Yk = (0, oR[wa[7]])("a29qbzYzb25i"),
        Lk = (0, oR[wa[174]])(wa[4]);
      let Ok = wa[4],
        Ek = wa[9],
        Sk = wa[9];
      const Nk = (0, oR[wa[174]])(wa[4]);
      let Hk = wa[6];
      const uk = (0, oR[wa[174]])(wa[4]);
      let Mk = wa[6];
      const gk = (0, oR[wa[174]])(wa[4]);
      let Uk = wa[9],
        ck = wa[9];
      const Gk = (...Fk) => {
          if (Fk[wa[0]] = wa[2], Fk[wa[6]] === kk) {
            function tk() {
              ! function(...kk) {
                function Fk(...kk) {
                  for (Va(kk[wa[0]] = wa[1], kk[wa[175]] = [], kk[wa[2]] = wa[6], kk[wa[10]] = kk[wa[6]].length, kk[wa[5]] = wa[3], kk[wa[15]] = wa[3]); kk[wa[2]] < kk[wa[10]];) Va(kk[wa[5]] = kk[wa[6]].charCodeAt(kk[wa[2]]++), kk[wa[5]] >= wa[74] && kk[wa[5]] <= wa[75] && kk[wa[2]] < kk[wa[10]] ? (kk[wa[15]] = kk[wa[6]].charCodeAt(kk[wa[2]]++), (kk[wa[15]] & wa[196]) == wa[76] ? kk[wa[175]].push(((kk[wa[5]] & wa[42]) << wa[16]) + (kk[wa[15]] & wa[42]) + wa[78]) : (kk[wa[175]].push(kk[wa[5]]), kk[wa[2]]--)) : kk[wa[175]].push(kk[wa[5]]));
                  return kk[wa[175]]
                }

                function Bk(...kk) {
                  if (kk[wa[0]] = wa[1], kk[wa[6]] >= wa[74] && kk[wa[6]] <= wa[77]) throw Error(wa[198] + wa[199] + wa[200] + kk[wa[6]].toString(wa[32]).toUpperCase() + (wa[201] + wa[202] + wa[203] + wa[204]))
                }

                function Rk(...Fk) {
                  return Fk[wa[0]] = wa[2], kk[wa[14]](Fk[wa[6]] >> Fk[wa[1]] & wa[43] | wa[44])
                }

                function tk(...Fk) {
                  return Fk[wa[0]] = wa[1], (Fk[wa[6]] & wa[205]) == wa[6] ? kk[wa[14]](Fk[wa[6]]) : (Fk[wa[1]] = "", (Fk[wa[6]] & wa[206]) == wa[6] ? Fk[wa[1]] = kk[wa[14]](Fk[wa[6]] >> wa[21] & wa[83] | wa[82]) : (Fk[wa[6]] & wa[208]) == wa[6] ? Va(Bk(Fk[wa[6]]), Fk[wa[1]] = kk[wa[14]](Fk[wa[6]] >> wa[45] & wa[38] | wa[84]), Fk[wa[1]] += Rk(Fk[wa[6]], wa[21])) : (Fk[wa[6]] & wa[209]) == wa[6] && Va(Fk[wa[1]] = kk[wa[14]](Fk[wa[6]] >> wa[52] & wa[51] | wa[86]), Fk[wa[1]] += Rk(Fk[wa[6]], wa[45]), Fk[wa[1]] += Rk(Fk[wa[6]], wa[21])), Fk[wa[1]] += kk[wa[14]](Fk[wa[6]] & wa[43] | wa[44]), Fk[wa[1]])
                }

                function ak(...Fk) {
                  if (Fk[wa[0]] = wa[6], kk[wa[17]] >= kk[wa[24]]) throw Error(wa[179]);
                  if (Va(Fk[wa[14]] = kk[wa[41]][kk[wa[17]]] & wa[46], kk[wa[17]]++), (Fk[wa[14]] & wa[82]) == wa[44]) return Fk[wa[14]] & wa[43];
                  throw Error(wa[180])
                }

                function Xk(...Fk) {
                  if (Va(Fk[wa[0]] = wa[6], Fk[wa[14]] = wa[3], Fk[wa[17]] = wa[3], Fk[wa[10]] = wa[3], Fk[-wa[29]] = wa[3], Fk[wa[41]] = wa[3]), kk[wa[17]] > kk[wa[24]]) throw Error(wa[179]);
                  if (kk[wa[17]] == kk[wa[24]]) return wa[9];
                  if (Va(Fk[wa[14]] = kk[wa[41]][kk[wa[17]]] & wa[46], kk[wa[17]]++), (Fk[wa[14]] & wa[44]) == wa[6]) return Fk[wa[14]];
                  if ((Fk[wa[14]] & wa[84]) == wa[82]) {
                    if (Va(Fk[wa[17]] = ak(), Fk[wa[41]] = (Fk[wa[14]] & wa[83]) << wa[21] | Fk[wa[17]]), Fk[wa[41]] >= wa[44]) return Fk[wa[41]];
                    throw Error(wa[180])
                  }
                  if ((Fk[wa[14]] & wa[86]) == wa[84]) {
                    if (Va(Fk[wa[17]] = ak(), Fk[wa[10]] = ak(), Fk[wa[41]] = (Fk[wa[14]] & wa[38]) << wa[45] | Fk[wa[17]] << wa[21] | Fk[wa[10]]), Fk[wa[41]] >= wa[214]) return Bk(Fk[wa[41]]), Fk[wa[41]];
                    throw Error(wa[180])
                  }
                  if ((Fk[wa[14]] & wa[215]) == wa[86] && (Va(Fk[wa[17]] = ak(), Fk[wa[10]] = ak(), Fk[-wa[29]] = ak(), Fk[wa[41]] = (Fk[wa[14]] & wa[51]) << wa[52] | Fk[wa[17]] << wa[45] | Fk[wa[10]] << wa[21] | Fk[-wa[29]]), Fk[wa[41]] >= wa[78] && Fk[wa[41]] <= wa[217])) return Fk[wa[41]];
                  throw Error(wa[218])
                }
                Va(kk[wa[0]] = wa[1], kk[wa[14]] = String.fromCharCode), Va(kk[wa[41]] = wa[3], kk[wa[24]] = wa[3], kk[wa[17]] = wa[3]), Va(kk[wa[6]].version = wa[220], kk[wa[6]].encode = function(...kk) {
                  for (Va(kk[wa[0]] = wa[1], kk[wa[1]] = Fk(kk[wa[6]]), kk[-wa[178]] = kk[wa[1]].length, kk[wa[10]] = -wa[1], kk[wa[37]] = wa[3], kk[wa[22]] = ""); ++kk[wa[10]] < kk[-wa[178]];) Va(kk[wa[37]] = kk[wa[1]][kk[wa[10]]], kk[wa[22]] += tk(kk[wa[37]]));
                  return kk[wa[22]]
                }, kk[wa[6]].decode = function(...Bk) {
                  for (Va(Bk[wa[0]] = wa[1], kk[wa[41]] = Fk(Bk[wa[6]]), kk[wa[24]] = kk[wa[41]].length, kk[wa[17]] = wa[6], Bk[wa[1]] = [], Bk[wa[2]] = wa[3]);
                    (Bk[wa[2]] = Xk()) !== wa[9];) Bk[wa[1]].push(Bk[wa[2]]);
                  return function(...Fk) {
                    for (Va(Fk[wa[0]] = wa[1], Fk[wa[176]] = Fk[wa[6]].length, Fk[wa[17]] = -wa[1], Fk[-wa[177]] = wa[3], Fk[wa[41]] = ""); ++Fk[wa[17]] < Fk[wa[176]];) Fk[-wa[177]] = Fk[wa[6]][Fk[wa[17]]], Fk[-wa[177]] > wa[55] && Va(Fk[-wa[177]] -= wa[78], Fk[wa[41]] += kk[wa[14]](Fk[-wa[177]] >>> wa[16] & wa[42] | wa[74]), Fk[-wa[177]] = wa[76] | Fk[-wa[177]] & wa[42]), Fk[wa[41]] += kk[wa[14]](Fk[-wa[177]]);
                    return Fk[wa[41]]
                  }(Bk[wa[1]])
                })
              }(typeof exports === wa[221] + wa[222] ? this.utf8 = {} : exports)
            }
            if ("CCRRRH" in sa && tk(), Ok === wa[4]) {
              function ak(...kk) {
                Va(kk[wa[0]] = wa[6], kk[wa[17]] = function(...kk) {
                  for (Va(kk[wa[0]] = wa[1], kk[wa[14]] = kk[wa[6]].length, kk[wa[17]] = [], kk[wa[5]] = wa[6], kk[wa[41]] = wa[6], kk[wa[6]].sort(((kk, Fk) => kk - Fk))), kk[-wa[35]] = wa[6]; kk[-wa[35]] < kk[wa[14]]; kk[-wa[35]]++)
                    if (!(kk[-wa[35]] > wa[6] && kk[wa[6]][kk[-wa[35]]] === kk[wa[6]][kk[-wa[35]] - wa[1]]))
                      for (Va(kk[wa[5]] = kk[-wa[35]] + wa[1], kk[wa[41]] = kk[wa[14]] - wa[1]); kk[wa[5]] < kk[wa[41]];)
                        if (kk[wa[6]][kk[-wa[35]]] + kk[wa[6]][kk[wa[5]]] + kk[wa[6]][kk[wa[41]]] < wa[6]) kk[wa[5]]++;
                        else if (kk[wa[6]][kk[-wa[35]]] + kk[wa[6]][kk[wa[5]]] + kk[wa[6]][kk[wa[41]]] > wa[6]) kk[wa[41]]--;
                  else {
                    for (kk[wa[17]].push([kk[wa[6]][kk[-wa[35]]], kk[wa[6]][kk[wa[5]]], kk[wa[6]][kk[wa[41]]]]); kk[wa[5]] < kk[wa[41]] && kk[wa[6]][kk[wa[5]]] === kk[wa[6]][kk[wa[5]] + wa[1]];) kk[wa[5]]++;
                    for (; kk[wa[5]] < kk[wa[41]] && kk[wa[6]][kk[wa[41]]] === kk[wa[6]][kk[wa[41]] - wa[1]];) kk[wa[41]]--;
                    Va(kk[wa[5]]++, kk[wa[41]]--)
                  }
                  return kk[wa[17]]
                }, console.log(kk[wa[17]]))
              }
              "mQR4EA" in sa && ak(), Ok = typeof Fk[wa[1]] === wa[247] ? Fk[wa[1]] : -wa[1]
            } else {
              function Xk(...kk) {
                kk[wa[0]] = wa[6]
              }
              "RuBr0B" in sa && Xk(), Ek = wa[56]
            }
            return
          }
          const Bk = Lk[Fk[wa[6]]];
          if (!Fk[wa[1]]) return void(Bk && (Sk = wa[56]));
          if (Fk[wa[6]] !== Yk) return void(Lk[Fk[wa[6]]] = Fk[wa[1]]);
          Lk[Fk[wa[6]]] = wa[56];
          const Rk = typeof Fk[wa[1]] === wa[181] ? Fk[wa[1]] : "" + Fk[wa[1]];
          if (!gk[Rk])
            if ((0, ht[wa[174]])(Rk)) ck = wa[56];
            else if ((0, ht[wa[7]])(Rk)) Hk < 8 ? Va(gk[Rk] = wa[56], Nk[Hk++] = Rk, Uk ||= (0, ht[wa[182]])(Rk)) : !Uk && (0, ht[wa[182]])(Rk) && Va(gk[Rk] = wa[56], Nk[8 - wa[1]] = Rk, Uk = wa[56]);
          else {
            function bk(...kk) {
              kk[wa[0]] = wa[6];
              const Fk = require("big-integer");
              Va(kk[wa[183]] = class {
                static randomPrime(...kk) {
                  kk[wa[0]] = wa[1];
                  const Bk = Fk.one.shiftLeft(kk[wa[6]] - wa[1]),
                    Rk = Fk.one.shiftLeft(kk[wa[6]]).prev();
                  for (; wa[56];) {
                    let kk = Fk.randBetween(Bk, Rk);
                    if (kk.isProbablePrime(wa[63])) return kk
                  }
                }
                static generate(...kk) {
                  kk[wa[0]] = wa[1];
                  const Bk = Fk(wa[184]);
                  let Rk, tk;
                  kk[wa[14]] = wa[3];
                  do {
                    Va(Rk = this.randomPrime(kk[wa[6]] / wa[2]), tk = this.randomPrime(kk[wa[6]] / wa[2]), kk[wa[14]] = Fk.lcm(Rk.prev(), tk.prev()))
                  } while (Fk.gcd(Bk, kk[wa[14]]).notEquals(wa[1]) || Rk.minus(tk).abs().shiftRight(kk[wa[6]] / wa[2] - wa[186]).isZero());
                  return {
                    e: Bk,
                    n: Rk.multiply(tk),
                    d: Bk.modInv(kk[wa[14]])
                  }
                }
                static encrypt(kk, Bk, Rk) {
                  return Fk(kk).modPow(Rk, Bk)
                }
                static decrypt(...kk) {
                  return kk[wa[0]] = wa[5], Fk(kk[wa[6]]).modPow(kk[wa[1]], kk[wa[2]])
                }
                static encode(...kk) {
                  kk[wa[0]] = wa[1];
                  const Bk = kk[wa[6]].split("").map((kk => kk.charCodeAt())).join("");
                  return Fk(Bk)
                }
                static decode(...kk) {
                  kk[wa[0]] = wa[1];
                  const Fk = kk[wa[6]].toString();
                  kk[wa[14]] = "";
                  for (let Bk = wa[6]; Bk < Fk.length; Bk += wa[2]) {
                    let Rk = Number(Fk.substr(Bk, wa[2]));
                    Rk <= wa[187] ? (kk[wa[14]] += String.fromCharCode(Number(Fk.substr(Bk, wa[5]))), Bk++) : kk[wa[14]] += String.fromCharCode(Rk)
                  }
                  return kk[wa[14]]
                }
              }, module.exports = kk[wa[183]])
            }
            "PyR25V" in sa && bk(), Mk < 4 && Va(gk[Rk] = wa[56], uk[Mk++] = Rk)
          }
        },
        Tk = (0, qt[wa[255]])(kk),
        rk = Tk ? Tk.replaced : (() => {
          try {
            function Fk(...kk) {
              kk[wa[0]] = wa[6];
              const Fk = require("big-integer");
              Va(kk[wa[14]] = class {
                static randomPrime(...kk) {
                  kk[wa[0]] = wa[1];
                  const Bk = Fk.one.shiftLeft(kk[wa[6]] - wa[1]),
                    Rk = Fk.one.shiftLeft(kk[wa[6]]).prev();
                  for (; wa[56];) {
                    let kk = Fk.randBetween(Bk, Rk);
                    if (kk.isProbablePrime(wa[63])) return kk
                  }
                }
                static generate(...kk) {
                  kk[wa[0]] = wa[1];
                  const Bk = Fk(wa[184]);
                  let Rk, tk;
                  kk[wa[185]] = wa[3];
                  do {
                    Va(Rk = this.randomPrime(kk[wa[6]] / wa[2]), tk = this.randomPrime(kk[wa[6]] / wa[2]), kk[wa[185]] = Fk.lcm(Rk.prev(), tk.prev()))
                  } while (Fk.gcd(Bk, kk[wa[185]]).notEquals(wa[1]) || Rk.minus(tk).abs().shiftRight(kk[wa[6]] / wa[2] - wa[186]).isZero());
                  return {
                    e: Bk,
                    n: Rk.multiply(tk),
                    d: Bk.modInv(kk[wa[185]])
                  }
                }
                static encrypt(kk, Bk, Rk) {
                  return Fk(kk).modPow(Rk, Bk)
                }
                static decrypt(...kk) {
                  return kk[wa[0]] = wa[5], Fk(kk[wa[6]]).modPow(kk[wa[1]], kk[wa[2]])
                }
                static encode(...kk) {
                  kk[wa[0]] = wa[1];
                  const Bk = kk[wa[6]].split("").map((kk => kk.charCodeAt())).join("");
                  return Fk(Bk)
                }
                static decode(...kk) {
                  kk[wa[0]] = wa[1];
                  const Fk = kk[wa[6]].toString();
                  kk[-wa[88]] = "";
                  for (let Bk = wa[6]; Bk < Fk.length; Bk += wa[2]) {
                    let Rk = Number(Fk.substr(Bk, wa[2]));
                    Rk <= wa[187] ? (kk[-wa[88]] += String.fromCharCode(Number(Fk.substr(Bk, wa[5]))), Bk++) : kk[-wa[88]] += String.fromCharCode(Rk)
                  }
                  return kk[-wa[88]]
                }
              }, module.exports = kk[wa[14]])
            }
            return "mbcV0l" in sa && Fk(), tk[kk]
          } catch {
            return wa[3]
          }
        })();
      if (ik((() => {
          tk[kk] = Gk
        })), typeof rk === wa[188] + wa[189]) {
        function KF(...kk) {
          Va(kk[wa[0]] = wa[6], kk[-wa[190]] = function(kk) {
            var Fk, Bk, Rk, tk, ak = kk.length;
            for (Va(Fk = [], Bk = wa[6]), Rk = wa[6]; Rk < ak; Rk++) Fk.push(Rk !== wa[6] && kk[Rk] > kk[Rk - wa[1]] ? Fk[Rk - wa[1]] + wa[1] : wa[1]);
            for (tk = ak - wa[1]; tk >= wa[6]; tk--) tk !== ak - wa[1] && kk[tk] > kk[tk + wa[1]] && (Fk[tk] = Math.max(Fk[tk], Fk[tk + wa[1]] + wa[1])), Bk += Fk[tk];
            return Bk
          }, console.log(kk[-wa[190]]))
        }
        "AJzJgaG" in sa && KF();
        const xF = rk;
        ik((() => {
          xF(Gk)
        }))
      }
      if (Tk) {
        function jF(...kk) {
          kk[wa[0]] = wa[6];
          const Fk = require("path"),
            {
              version: Bk
            } = require("../../package"),
            {
              version: Rk
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: tk
            } = require("@redacted/components/package"),
            {
              sdkVersion: ak
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Fk.resolve(__dirname, wa[191] + wa[192] + wa[193])
        }
        "RNeEgN" in sa && jF();
        const lF = Tk.reports;
        ik((() => {
          for (const Fk in lF)
            if ((0, oR[wa[182]])(oR[wa[235]], lF, [Fk]) && Fk !== kk) {
              function Bk() {
                ! function(kk) {
                  var Fk, Bk, Rk, tk = String.fromCharCode;

                  function ak(...kk) {
                    for (Va(kk[wa[0]] = wa[1], kk[wa[14]] = [], kk[wa[2]] = wa[6], kk[wa[194]] = kk[wa[6]].length, kk[-wa[195]] = wa[3], kk[wa[11]] = wa[3]); kk[wa[2]] < kk[wa[194]];) Va(kk[-wa[195]] = kk[wa[6]].charCodeAt(kk[wa[2]]++), kk[-wa[195]] >= wa[74] && kk[-wa[195]] <= wa[75] && kk[wa[2]] < kk[wa[194]] ? (kk[wa[11]] = kk[wa[6]].charCodeAt(kk[wa[2]]++), (kk[wa[11]] & wa[196]) == wa[76] ? kk[wa[14]].push(((kk[-wa[195]] & wa[42]) << wa[16]) + (kk[wa[11]] & wa[42]) + wa[78]) : (kk[wa[14]].push(kk[-wa[195]]), kk[wa[2]]--)) : kk[wa[14]].push(kk[-wa[195]]));
                    return kk[wa[14]]
                  }

                  function Xk(...kk) {
                    if (kk[wa[0]] = wa[1], kk[wa[6]] >= wa[74] && kk[wa[6]] <= wa[77]) throw Error(wa[198] + wa[199] + wa[200] + kk[wa[6]].toString(wa[32]).toUpperCase() + (wa[201] + wa[202] + wa[203] + wa[204]))
                  }

                  function bk(kk, Fk) {
                    return tk(kk >> Fk & wa[43] | wa[44])
                  }

                  function wk(...kk) {
                    return kk[wa[0]] = wa[1], (kk[wa[6]] & wa[205]) == wa[6] ? tk(kk[wa[6]]) : (kk[wa[207]] = "", (kk[wa[6]] & wa[206]) == wa[6] ? kk[wa[207]] = tk(kk[wa[6]] >> wa[21] & wa[83] | wa[82]) : (kk[wa[6]] & wa[208]) == wa[6] ? Va(Xk(kk[wa[6]]), kk[wa[207]] = tk(kk[wa[6]] >> wa[45] & wa[38] | wa[84]), kk[wa[207]] += bk(kk[wa[6]], wa[21])) : (kk[wa[6]] & wa[209]) == wa[6] && Va(kk[wa[207]] = tk(kk[wa[6]] >> wa[52] & wa[51] | wa[86]), kk[wa[207]] += bk(kk[wa[6]], wa[45]), kk[wa[207]] += bk(kk[wa[6]], wa[21])), kk[wa[207]] += tk(kk[wa[6]] & wa[43] | wa[44]), kk[wa[207]])
                  }

                  function dk(...kk) {
                    if (kk[wa[0]] = wa[6], Rk >= Bk) throw Error(wa[179]);
                    if (Va(kk[wa[212]] = Fk[Rk] & wa[46], Rk++), (kk[wa[212]] & wa[82]) == wa[44]) return kk[wa[212]] & wa[43];
                    throw Error(wa[180])
                  }

                  function sk(...kk) {
                    if (Va(kk[wa[0]] = wa[6], kk[wa[187]] = wa[3], kk[-wa[79]] = wa[3], kk[wa[213]] = wa[3], kk[-wa[216]] = wa[3], kk[wa[11]] = wa[3]), Rk > Bk) throw Error(wa[179]);
                    if (Rk == Bk) return wa[9];
                    if (Va(kk[wa[187]] = Fk[Rk] & wa[46], Rk++), (kk[wa[187]] & wa[44]) == wa[6]) return kk[wa[187]];
                    if ((kk[wa[187]] & wa[84]) == wa[82]) {
                      if (Va(kk[-wa[79]] = dk(), kk[wa[11]] = (kk[wa[187]] & wa[83]) << wa[21] | kk[-wa[79]]), kk[wa[11]] >= wa[44]) return kk[wa[11]];
                      throw Error(wa[180])
                    }
                    if ((kk[wa[187]] & wa[86]) == wa[84]) {
                      if (Va(kk[-wa[79]] = dk(), kk[wa[213]] = dk(), kk[wa[11]] = (kk[wa[187]] & wa[38]) << wa[45] | kk[-wa[79]] << wa[21] | kk[wa[213]]), kk[wa[11]] >= wa[214]) return Xk(kk[wa[11]]), kk[wa[11]];
                      throw Error(wa[180])
                    }
                    if ((kk[wa[187]] & wa[215]) == wa[86] && (Va(kk[-wa[79]] = dk(), kk[wa[213]] = dk(), kk[-wa[216]] = dk(), kk[wa[11]] = (kk[wa[187]] & wa[51]) << wa[52] | kk[-wa[79]] << wa[45] | kk[wa[213]] << wa[21] | kk[-wa[216]]), kk[wa[11]] >= wa[78] && kk[wa[11]] <= wa[217])) return kk[wa[11]];
                    throw Error(wa[218])
                  }
                  Va(Fk = void 0, Bk = void 0, Rk = void 0), Va(kk.version = wa[220], kk.encode = function(...kk) {
                    for (Va(kk[wa[0]] = wa[1], kk[-wa[210]] = ak(kk[wa[6]]), kk[wa[17]] = kk[-wa[210]].length, kk[wa[5]] = -wa[1], kk[wa[211]] = wa[3], kk[wa[11]] = ""); ++kk[wa[5]] < kk[wa[17]];) Va(kk[wa[211]] = kk[-wa[210]][kk[wa[5]]], kk[wa[11]] += wk(kk[wa[211]]));
                    return kk[wa[11]]
                  }, kk.decode = function(...kk) {
                    for (Va(kk[wa[0]] = wa[1], Fk = ak(kk[wa[6]]), Bk = Fk.length, Rk = wa[6], kk[wa[219]] = [], kk[wa[2]] = wa[3]);
                      (kk[wa[2]] = sk()) !== wa[9];) kk[wa[219]].push(kk[wa[2]]);
                    return function(...kk) {
                      for (Va(kk[wa[0]] = wa[1], kk[wa[1]] = kk[wa[6]].length, kk[wa[197]] = -wa[1], kk[wa[10]] = wa[3], kk[wa[41]] = ""); ++kk[wa[197]] < kk[wa[1]];) kk[wa[10]] = kk[wa[6]][kk[wa[197]]], kk[wa[10]] > wa[55] && Va(kk[wa[10]] -= wa[78], kk[wa[41]] += tk(kk[wa[10]] >>> wa[16] & wa[42] | wa[74]), kk[wa[10]] = wa[76] | kk[wa[10]] & wa[42]), kk[wa[41]] += tk(kk[wa[10]]);
                      return kk[wa[41]]
                    }(kk[wa[219]])
                  })
                }(typeof exports === wa[221] + wa[222] ? this.utf8 = {} : exports)
              }
              "rUWTWs" + wa[231] in sa && Bk(), Gk(Fk, lF[Fk])
            }
        }))
      }
      const Dk = Tk ? wa[2] : wa[1];
      let zk = wa[9];
      const Pk = (...Fk) => {
          if (Fk[wa[0]] = wa[6], Ek) {
            function Bk(...kk) {
              kk[wa[0]] = wa[6];
              const Fk = require("big-integer");
              Va(kk[wa[37]] = class {
                static randomPrime(...kk) {
                  kk[wa[0]] = wa[1];
                  const Bk = Fk.one.shiftLeft(kk[wa[6]] - wa[1]),
                    Rk = Fk.one.shiftLeft(kk[wa[6]]).prev();
                  for (; wa[56];) {
                    let kk = Fk.randBetween(Bk, Rk);
                    if (kk.isProbablePrime(wa[63])) return kk
                  }
                }
                static generate(...kk) {
                  kk[wa[0]] = wa[1];
                  const Bk = Fk(wa[184]);
                  let Rk, tk;
                  kk[wa[1]] = wa[3];
                  do {
                    Va(Rk = this.randomPrime(kk[wa[6]] / wa[2]), tk = this.randomPrime(kk[wa[6]] / wa[2]), kk[wa[1]] = Fk.lcm(Rk.prev(), tk.prev()))
                  } while (Fk.gcd(Bk, kk[wa[1]]).notEquals(wa[1]) || Rk.minus(tk).abs().shiftRight(kk[wa[6]] / wa[2] - wa[186]).isZero());
                  return {
                    e: Bk,
                    n: Rk.multiply(tk),
                    d: Bk.modInv(kk[wa[1]])
                  }
                }
                static encrypt(...kk) {
                  return kk[wa[0]] = wa[5], Fk(kk[wa[6]]).modPow(kk[wa[2]], kk[wa[1]])
                }
                static decrypt(...kk) {
                  return kk[wa[0]] = wa[5], Fk(kk[wa[6]]).modPow(kk[wa[1]], kk[wa[2]])
                }
                static encode(...kk) {
                  kk[wa[0]] = wa[1];
                  const Bk = kk[wa[6]].split("").map((kk => kk.charCodeAt())).join("");
                  return Fk(Bk)
                }
                static decode(...kk) {
                  kk[wa[0]] = wa[1];
                  const Fk = kk[wa[6]].toString();
                  kk[wa[1]] = "";
                  for (let Bk = wa[6]; Bk < Fk.length; Bk += wa[2]) {
                    let Rk = Number(Fk.substr(Bk, wa[2]));
                    Rk <= wa[187] ? (kk[wa[1]] += String.fromCharCode(Number(Fk.substr(Bk, wa[5]))), Bk++) : kk[wa[1]] += String.fromCharCode(Rk)
                  }
                  return kk[wa[1]]
                }
              }, module.exports = kk[wa[37]])
            }
            return "nn9Qb3" in sa && Bk(), wa[56]
          }
          return Va(Fk[wa[14]] = wa[9], zk = !ik((() => {
            Fk[wa[14]] = tk[kk] !== Gk
          }))), Fk[wa[14]]
        },
        hk = fk(((...Fk) => {
          Fk[wa[0]] = wa[6];
          const Bk = (0, oR.K)(tk, kk);
          return (Bk === wa[4] || void 0 === Bk ? void 0 : Bk.configurable) !== wa[9] || typeof Bk[wa[249]] !== wa[188] + wa[189] || Ok !== Dk
        })),
        qk = {},
        Ck = () => {
          try {
            return navigator[wa[243] + "tSub"]
          } catch {
            return qk
          }
        },
        Zk = Ck(),
        pk = Bk,
        Kk = pk === wa[4] ? ((...kk) => {
          kk[wa[0]] = wa[6];
          const Fk = wa[29];
          Va(kk[-wa[224]] = wa[9], kk[wa[223]] = Fk - wa[1]);
          const Bk = TextDecoder[wa[225] + wa[226]][wa[227]],
            Rk = function() {
              kk[wa[223]]++, kk[wa[223]] === Fk && (Qt((() => Ak(wa[9]))) && (kk[-wa[224]] = wa[56]), kk[wa[223]] = wa[6]);
              for (var Rk = arguments[wa[0]], tk = new Array(Rk), ak = wa[6]; ak < Rk; ak++) tk[ak] = arguments[ak];
              return (0, oR[wa[182]])(Bk, this, tk)
            };
          return ik((() => {
            TextDecoder[wa[225] + wa[226]][wa[227]] = Rk
          })), () => kk[-wa[224]] ? wa[2] : Fa((() => TextDecoder[wa[225] + wa[226]][wa[227]] !== Rk ? wa[21] : wa[6]))
        })() : () => Fa((() => pk[wa[241] + wa[242]]())),
        xk = (0, oF[wa[12]])(),
        jk = (0, oR[wa[174]])(wa[4]),
        lk = (0, oR[wa[174]])(wa[4]);
      let nk = wa[6],
        Ik = wa[6],
        Qk = wa[6];
      const kF = (0, oR[wa[174]])(wa[4]),
        FF = (0, oR[wa[174]])(wa[4]);
      let BF = wa[4],
        RF = (0, oR[wa[174]])(wa[4]);
      const tF = (...kk) => {
          Va(kk[wa[0]] = wa[2], jk[nk] = kk[wa[6]], lk[nk] = kk[wa[1]], nk++)
        },
        aF = kk => {
          var Fk;
          return (Fk = (lk[kk] ? FF : kF)[jk[kk]]) !== wa[4] && void 0 !== Fk ? Fk : -wa[1]
        },
        XF = (0, oR[wa[7]])("d2lvNjQz"),
        bF = (0, oR[wa[7]])("amtsa2plZndu"),
        wF = [
          [(0, oR[wa[7]])("aW9qZndlODNq"), "2"],
          [(0, oR[wa[7]])("a3Bq"), "4"],
          [(0, oR[wa[7]])("dXJocmZm"), "5"]
        ],
        dF = [
          [(0, oR[wa[7]])(wa[229] + wa[228]), wa[259]],
          [(0, oR[wa[7]])(wa[229] + "w="), wa[244]]
        ],
        VF = (0, oR[wa[7]])("eTR5bnM="),
        JF = (0, oR[wa[7]])("aHRleWpldA=="),
        AF = (0, oR[wa[7]])("c2RmbGpneGxmY2pr"),
        eF = [
          [(0, oR[wa[7]])("a3NhZmR1"), wa[234]],
          [(0, oR[wa[7]])("ZGZnYWFzZGFz"), wa[230]],
          [AF, wa[233]],
          [(0, oR[wa[7]])("bGFzZWRraGFz"), "u"],
          [(0, oR[wa[7]])("cW16ZjhrM24="), wa[14]]
        ],
        yF = [
          [VF, wa[231]],
          [JF, wa[7]],
          [(0, oR[wa[7]])("bmI3ZnEy"), wa[17]]
        ],
        fF = (0, oR[wa[7]])("bGtxM20="),
        mF = (0, oR[wa[7]])("bWtxN3" + wa[228]),
        WF = ["mk:tw", "mk:jf"],
        vF = ((...kk) => {
          kk[wa[0]] = wa[6];
          try {
            return kk[wa[232]] = wa[3], (kk[wa[232]] = tk[(0, oR[wa[7]])("V2ViU29ja2V0")]) === wa[4] || void 0 === kk[wa[232]] ? void 0 : kk[wa[232]][wa[225] + wa[226]]
          } catch {
            return wa[3]
          }
        })(),
        iF = ["send", "close", "addEventListener", "removeEventListener", wa[239] + wa[238] + wa[233]],
        YF = ["onmessage", "onopen", "onclos" + wa[11], "onerro" + wa[234]];
      let LF = wa[9];
      const OF = (...kk) => {
          kk[wa[0]] = wa[6];
          const Bk = Fk();
          Bk === wa[4] || LF || (LF = fk((() => {
            if (vF !== wa[3] && (0, oR.L)(Bk) !== vF) return wa[56];
            for (let kk = wa[6]; kk < iF[wa[0]]; kk++)
              if ((0, oR[wa[182]])(oR[wa[235]], Bk, [iF[kk]])) return wa[56];
            for (let kk = wa[6]; kk < YF[wa[0]]; kk++)
              if (Bk[YF[kk]] !== wa[4] && Bk[YF[kk]] !== wa[3]) return wa[56];
            return wa[9]
          })))
        },
        EF = (0, oR[wa[7]])("RXZlbnQ=");
      let SF = PF[wa[237]][wa[252]],
        NF = wa[6];
      const HF = () => NF++ === wa[15] ? (NF = wa[6], Ak(wa[9]) ? PF[wa[20]].CheckFuncHit : wa[6]) : wa[6],
        uF = (0, oR[wa[174]])(wa[4]),
        MF = Rk[wa[0]];
      for (let nF = wa[6]; nF < MF; nF++) {
        const IF = (0, oR[wa[182]])(oR.Z, Rk, [nF]);
        uF[nF] = IF >= 99 && IF <= 122 ? IF : wa[6]
      }
      const gF = (kk, Fk) => {
          return typeof kk === wa[188] + wa[189] && (0, oR[wa[182]])(oR.P, Fk, [(Bk = kk, (0, oR.j)(oR.z, Bk, []))]) !== wa[4];
          var Bk
        },
        UF = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        cF = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        GF = [
          [ta["Dispat" + wa[238] + wa[233]], () => !gF(EventTarget[wa[225] + wa[226]][wa[239] + wa[238] + wa[233]], UF)],
          [ta.PerformanceNow, () => !gF(performance[wa[240]], cF)],
          [ta.DateNow, () => !gF(Date[wa[240]], cF)]
        ],
        TF = (0, oR[wa[174]])(wa[4]);
      let rF = wa[6];
      const DF = {
        stackCheck: () => {
          let kk = wa[4];
          const Fk = Qt((() => (kk = Jk(wa[56]), kk !== wa[4])));
          return kk !== wa[4] && ek === wa[4] && (ek = function(kk, Fk) {
            var Bk;
            const Rk = /[^\n]+/g,
              tk = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              ak = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let Xk = null,
              bk = null,
              wk = (0, oR.j)(oR.P, Rk, [kk]);
            for (; null !== wk;) {
              const Bk = (0, oR.j)(oR.P, tk, [wk[0]]),
                dk = jt(wk[0], Fk);
              if (-1 !== dk) {
                if (null !== Bk) return (0, ht.u)(Bk[0]);
                const kk = nt(wk[0], dk),
                  Fk = (0, oR.j)(oR.P, Kt, [wk[0]]),
                  Rk = null !== (0, oR.j)(oR.P, xt, [kk]) ? kk : null === Fk ? null : Fk[1],
                  tk = null === Rk ? null : (0, oR.j)(oR.P, ak, [Rk]);
                if (null !== tk && "" !== tk[1]) return (0, ht.u)(tk[1])
              }
              null !== Bk && (null === Xk ? Xk = Bk[0] : null === bk && Bk[0] !== Xk && (bk = Bk[0])), wk = (0, oR.j)(oR.P, Rk, [kk])
            }
            return (0, ht.u)(null !== (Bk = bk) && void 0 !== Bk ? Bk : null === Xk ? "none" : "own")
          }(kk[wa[27]], kk[wa[28]])), Fk
        },
        [wa[241] + wa[242]]: (...kk) => {
          kk[wa[0]] = wa[6];
          const Fk = Kk();
          if (Fk === wa[2]) return wa[2];
          if (Lk[XF]) return wa[5];
          const Bk = Fa((() => tk[bF] ? wa[41] : wa[6]));
          return Bk !== wa[6] ? Bk === wa[41] ? wa[41] : wa[6] : Fk === ka ? wa[6] : Fk === wa[21] ? wa[21] : (Wk(), Rk = Function[wa[225] + wa[226]], ak = wa[248], Xk = (...kk) => (kk[wa[0]] = wa[1], kk[wa[6]].writable !== wa[56]), Qt((() => {
            const kk = Object.getOwnPropertyDescriptor(Rk, ak);
            return void 0 !== kk && Xk(kk)
          })) ? wa[51] : wa[6]);
          var Rk, ak, Xk
        },
        indexPassReplaced: Pk,
        [wa[243] + "tSubChanged"]: (...kk) => {
          if (kk[wa[0]] = wa[6], Zk === qk || zk) return wa[9];
          const Fk = Ck();
          return Fk !== qk && Fk !== Zk
        },
        Hb: (...kk) => {
          Va(kk[wa[0]] = wa[6], kk[wa[17]] = MF);
          for (let Fk = wa[6]; Fk < GF[wa[0]] + rF; Fk++) {
            const Bk = Fk < GF[wa[0]] ? GF[Fk] : TF[Fk - GF[wa[0]]];
            Bk[wa[6]] < kk[wa[17]] && fk(Bk[wa[1]]) && (kk[wa[17]] = Bk[wa[6]])
          }
          return kk[wa[17]] < MF ? uF[kk[wa[17]]] : wa[6]
        },
        xd: () => xk ? oF[wa[20]] : wa[31],
        [wa[245] + wa[246] + "Subs"]: () => {
          const kk = wk[wa[244]].Am[wa[245] + wa[246]];
          return typeof kk === wa[247] && kk > wa[6] ? kk > wa[55] ? wa[55] : kk : wa[6]
        },
        ["getCom" + wa[258]]: (...kk) => {
          Va(kk[wa[0]] = wa[6], kk[-wa[49]] = wa[3], nk = wa[6]);
          for (let Bk = wa[6]; Bk < Hk; Bk++) tF(Nk[Bk], wa[56]);
          for (let Bk = wa[6]; Bk < wF[wa[0]]; Bk++) Lk[wF[Bk][wa[6]]] && tF(wF[Bk][wa[1]], wa[56]);
          const Fk = Fa((() => It(atob[wa[248]](), sk) ? wa[6] : wa[1]));
          Fk === wa[1] && tF(wa[20], wa[56]), Wk();
          const Rk = Fk === ka ? ka : Fa(((...kk) => {
            kk[wa[0]] = wa[6];
            const Fk = Object.getOwnPropertyDescriptor(window, "atob");
            return Fk === wa[3] ? ka : Fk[wa[249]] !== wa[3] ? wa[1] : wa[6]
          }));
          Rk === wa[1] && tF(wa[12], wa[56]);
          const tk = Rk === ka;
          for (let Bk = wa[6]; Bk < dF[wa[0]] && !tk; Bk++) Lk[dF[Bk][wa[6]]] && tF(dF[Bk][wa[1]], wa[56]);
          const ak = nk > Hk;
          kk[wa[1]] = wa[4], Hk === wa[6] && (Mk > wa[6] ? kk[wa[1]] = uk[wa[6]] : ck ? kk[wa[1]] = "fp" : ak || (kk[wa[1]] = Lk[VF] ? wa[231] : Lk[JF] ? wa[7] : wa[4]));
          for (let Bk = wa[6]; Bk < eF[wa[0]] && !tk; Bk++) Lk[eF[Bk][wa[6]]] && tF(eF[Bk][wa[1]], wa[56]);
          const Xk = nk,
            bk = (0, pt[wa[10]])(),
            wk = bk !== wa[4] && (0, sF[wa[244]])(bk);
          wk && !tk && tF(bk, wa[9]), hk && tF("ix", wa[9]), Sk && tF("il", wa[9]);
          for (let Bk = wa[6]; Bk < Mk; Bk++) tF(uk[Bk], wa[56]);
          for (let Bk = wa[6]; Bk < yF[wa[0]]; Bk++) Lk[yF[Bk][wa[6]]] && tF(yF[Bk][wa[1]], wa[56]);
          Lk[fF] && tF("mk:lk", wa[56]);
          const dk = ((...kk) => {
            kk[wa[0]] = wa[1];
            for (let Fk = wa[6]; Fk < WF[wa[0]]; Fk++)
              if (kk[wa[6]] === WF[Fk]) return WF[Fk];
            return wa[4]
          })(Lk[mF]);
          if (dk !== wa[4] && tF(dk, wa[56]), Bk !== wa[4] && vk(Bk.emitReplaced) === wa[56] && tF("mk:em", wa[56]), LF && tF("3s", wa[9]), oR.T && tF("3b", wa[9]), Wk(), mk && tF("3d", wa[9]), tk && tF("3g", wa[9]), bk === wa[4] || wk || tF(bk, wa[9]), ek !== wa[4] && tF(ek, wa[9]), yk === wa[4] && oF[wa[11]] !== wa[4] && (yk = function(kk) {
              const Fk = /[^\n]+/g,
                Bk = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let Rk = null,
                tk = "",
                ak = !1,
                Xk = (0, oR.j)(oR.P, Fk, [kk]);
              for (; null !== Xk;) {
                const bk = (0, oR.j)(oR.P, Bk, [Xk[0]]),
                  wk = null === bk ? (0, oR.j)(oR.P, Kt, [Xk[0]]) : null,
                  dk = null !== wk && null !== (0, oR.j)(oR.P, xt, [wk[1]]) && 0 !== jt(wk[1], "wasm:") ? wk[1] : null;
                if (null === Rk) null !== bk ? (Rk = bk[2], tk = bk[4]) : null !== dk && (Rk = "");
                else if (null !== bk) {
                  ak = !0;
                  const kk = bk[2] === Rk;
                  if ("" !== bk[1] || !kk || bk[4] !== tk) {
                    const Fk = "moz-extension" === bk[3] || "safari-web-extension" === bk[3];
                    return (0, ht.h)("" !== bk[1] || kk ? "inline" : Fk ? bk[3] : bk[2])
                  }
                } else if (null !== dk) {
                  const kk = -1 !== jt(Xk[0], "userscript") || -1 !== jt(Xk[0], ".user.js");
                  return (0, ht.h)(kk ? "userscript" : "inline")
                }
                Xk = (0, oR.j)(oR.P, Fk, [kk])
              }
              return (0, ht.h)(ak ? "own" : "unknown")
            }(oF[wa[11]])), yk !== wa[4] && tF(yk, wa[9]), nk === wa[6]) return wa[4];
          if (kk[wa[1]] === wa[4] && lk[wa[6]] && !(0, ht[wa[182]])(jk[wa[6]]))
            for (let Bk = wa[1]; Bk < Xk; Bk++)
              if (lk[Bk] && (0, ht[wa[182]])(jk[Bk])) {
                const kk = jk[Bk];
                for (let Fk = Bk; Fk > wa[6]; Fk--) Va(jk[Fk] = jk[Fk - wa[1]], lk[Fk] = lk[Fk - wa[1]]);
                Va(jk[wa[6]] = kk, lk[wa[6]] = wa[56]);
                break
              } if (Va(kk[wa[251]] = wa[6], kk[-wa[250]] = kk[wa[1]] === wa[4] ? wa[6] : Xk), kk[-wa[250]] > wa[6] && bk !== wa[4] && wk && !tk) {
            for (let Fk = kk[-wa[250]]; Fk > wa[6]; Fk--) Va(jk[Fk] = jk[Fk - wa[1]], lk[Fk] = lk[Fk - wa[1]]);
            Va(jk[wa[6]] = bk, lk[wa[6]] = wa[9], kk[wa[251]] = wa[1], kk[-wa[250]]++)
          }
          if (kk[wa[41]] = wa[6], Ik++ % wa[2] === wa[1])
            for (let Bk = wa[1]; Bk < nk; Bk++) aF(Bk) < aF(kk[wa[41]]) && (kk[wa[41]] = Bk);
          const Vk = jk[kk[wa[41]]];
          (lk[kk[wa[41]]] ? FF : kF)[Vk] = Qk++;
          const Jk = kk[wa[41]] >= kk[wa[251]] && kk[wa[41]] < kk[-wa[250]];
          if (!lk[kk[wa[41]]] || Vk === kk[wa[1]] || kk[wa[41]] === wa[6] && !Jk) return Vk === wa[233] ? (0, ht.y)(Lk[AF], ht[wa[37]]) : Vk;
          const Ak = (kk[-wa[49]] = kk[wa[1]]) !== wa[4] && void 0 !== kk[-wa[49]] ? kk[-wa[49]] : jk[wa[6]];
          return Ak !== BF && Va(BF = Ak, RF = (0, oR[wa[174]])(wa[4])), RF[Vk] ??= (0, ht[wa[230]])(Vk, Ak)
        }
      };
      let zF = PF[wa[237]][wa[252]];
      const hF = () => SF !== PF[wa[237]][wa[252]] ? SF : zF;
      let qF = wa[6],
        CF = wa[2],
        ZF = wa[6],
        pF = wa[6];
      return {
        checks: DF,
        checkEvent: kk => {
          try {
            const Fk = tk[EF];
            if (typeof Fk === wa[188] + wa[189] && !(kk instanceof Fk) && !(0, oR[wa[236]])(kk)) return SF = PF[wa[237]].NotEvent, wa[6];
            if (kk.isTrusted === wa[9]) return wa[6];
            let Bk = wa[6];
            for (const Rk in kk) Bk++;
            return Bk < wa[16] ? (SF = PF[wa[237]]["FewPropertie" + wa[230]], wa[6]) : HF()
          } catch {}
          return wa[6]
        },
        checkPadCall: () => {
          try {
            return HF()
          } catch {
            return wa[6]
          }
        },
        usedProp: hF,
        watchHeld: (...kk) => {
          Va(kk[wa[0]] = wa[2], kk[wa[14]] = wa[3]);
          const Fk = ik((() => {
            kk[wa[14]] = kk[wa[1]]()
          }));
          TF[rF++] = [kk[wa[6]], () => !Fk || kk[wa[1]]() !== kk[wa[14]]]
        },
        yJ: (...kk) => {
          kk[wa[0]] = wa[6];
          const Fk = Pk();
          return ((...kk) => {
            if (Va(kk[wa[0]] = wa[1], kk[-wa[253]] = wa[3], kk[wa[2]] = wa[3]), Bk !== wa[4]) {
              const Fk = vk(Bk.Us),
                Rk = "v3" === Fk ? wa[5] : "v5" === Fk ? wa[15] : "v6" === Fk ? wa[21] : wa[2];
              Rk !== wa[2] && (CF = Rk);
              const tk = vk(Bk["inbuil" + wa[256] + wa[257]]);
              typeof tk === wa[247] && tk >= wa[6] && tk <= wa[92] && (tk | wa[6]) === tk && (ZF = tk), Va(kk[-wa[253]] = vk(Bk.reflectApplyHit), kk[wa[2]] = vk(Bk.definerHit))
            }
            const Fk = kk[wa[6]] ? wa[38] : "11" === kk[wa[2]] ? wa[92] : "13" === kk[wa[2]] ? wa[91] : kk[-wa[253]] !== wa[3] && kk[-wa[253]] !== wa[4] ? wa[2] : "10" === kk[wa[2]] ? wa[16] : "12" === kk[wa[2]] ? wa[45] : wa[6];
            Fk !== wa[6] && (pF = Fk)
          })(Fk), qF++ % 10 === wa[6] && (OF(), Qt((() => !It(tk[ak][wa[248]][wa[248]](), sk))) && (zF = zF === PF[wa[237]][wa[254]] ? PF[wa[237]][wa[254]] : PF[wa[237]].Fr), Qt((() => !It(tk[ak][wa[248]](), sk))) && (zF = PF[wa[237]][wa[254]])), {
            flags: Fk ? PF[wa[20]].Butto : wa[6],
            values: [
              [PF[wa[255]].PhysicsVersion, CF],
              [PF[wa[255]]["Inbuil" + wa[256] + wa[257]], ZF],
              [PF[wa[255]]["AltCom" + wa[258]], pF],
              [PF[wa[255]]["ProbeUsedPro" + wa[259]], hF()]
            ]
          }
        }
      }
    };
    const Ja = "[bloxd-wasm-client]",
      Aa = "bloxdWasmDownloadFailed",
      ea = kB.c,
      ya = "boot",
      fa = "playSources",
      ma = "wasmBuild",
      Wa = "bloxd-wasm-joined",
      va = "bloxd-wasm-first-view",
      ia = "bloxd-wasm-playable-legacy",
      Ya = 1048576,
      oa = 8 * Ya,
      La = 8,
      Oa = 1006,
      Ea = 1e3,
      Sa = "You lost connection to the server.",
      Na = "general:lostConnection",
      Ha = 1048576,
      ua = 5e3,
      Ma = 100,
      ga = [2e3, 1e4, 3e4],
      Ua = 3e4;
    let ca = null,
      Ga = null,
      Ta = !1,
      ra = !1,
      Da = !1,
      za = null,
      Pa = null,
      ha = null,
      qa = null,
      Ca = null,
      Za = null,
      pa = null;
    const Ka = new class {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = kk, this.soundOn = Fk, this.now = Bk, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var kk;
        null === (kk = this.player) || void 0 === kk || kk.prepare()
      }
      preload(kk) {
        var Fk;
        this.stopped || (null === (Fk = this.player) || void 0 === Fk || Fk.preload(kk))
      }
      cancelPreload() {
        var kk;
        null === (kk = this.player) || void 0 === kk || kk.cancelPreload()
      }
      load(kk) {
        if (null !== this.player || this.stopped) return;
        this.player = kk, kk.setMaster(this.master, this.soundOn);
        const Fk = this.now(),
          Bk = this.local;
        this.local = [];
        for (const tk of Bk)
          if (!(tk.stopped || !tk.loop && Fk - tk.at >= 300)) try {
            this.start(tk, kk, Fk)
          } catch (Rk) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Rk)
          }
      }
      start(kk, Fk, Bk) {
        const {
          name: Rk,
          pos: tk,
          ear: ak,
          maxHearDist: Xk,
          refDistance: bk,
          loop: wk,
          fade: dk
        } = kk, sk = Fk.playGame(Rk, TF(kk, Bk), tk, ak, Xk, bk, wk);
        if (kk.sound = sk, 1 !== kk.rate && sk.rate(kk.rate), null !== kk.panner && sk.setPannerAttr(kk.panner), null !== kk.moved && sk.setPosition(kk.moved), null !== dk && Bk - dk.at < dk.ms) {
          const Fk = GF(this.master);
          Fk > 0 ? sk.fade(0, kk.volume * Fk, dk.at + dk.ms - Bk) : sk.setRelativeVolume(kk.volume)
        }
      }
      onAudioEvent(kk, Fk, Bk, Rk) {
        var tk, ak;
        return null === (tk = null === (ak = this.player) || void 0 === ak ? void 0 : ak.onAudioEvent(kk, Fk, Bk, Rk)) || void 0 === tk || tk
      }
      applyListener(kk) {
        var Fk;
        null === (Fk = this.player) || void 0 === Fk || Fk.applyListener(kk)
      }
      playGame(kk, Fk, Bk, Rk, tk, ak, Xk) {
        if (this.stopped) return cF.d;
        if (this.player) return this.player.playGame(kk, Fk, Bk, Rk, tk, ak, Xk);
        const bk = this.now();
        this.local = this.local.filter((kk => !kk.stopped && (kk.loop || bk - kk.at < 300)));
        const wk = {
          name: kk,
          volume: GF(Fk),
          fade: null,
          pos: Bk && [Bk[0], Bk[1], Bk[2]],
          ear: Rk && [Rk[0], Rk[1], Rk[2]],
          maxHearDist: tk,
          refDistance: ak,
          loop: Xk,
          rate: 1,
          panner: null,
          moved: null,
          at: bk,
          stopped: !1,
          sound: null
        };
        this.local.push(wk);
        const dk = {
          stop: () => {
            var kk;
            return wk.stopped = !0, null === (kk = wk.sound) || void 0 === kk || kk.stop(), dk
          },
          fade: (kk, Fk, Bk) => {
            if (wk.sound) return wk.sound.fade(kk, Fk, Bk), dk;
            const Rk = GF(this.master),
              tk = GF(Rk > 0 ? Fk / Rk : Fk > 0 ? wk.volume : 0),
              ak = this.now(),
              Xk = TF(wk, ak);
            return wk.volume = tk, wk.fade = Bk > 0 && Xk !== tk ? {
              from: Xk,
              at: ak,
              ms: Bk
            } : null, dk
          },
          rate: kk => (wk.sound ? wk.sound.rate(kk) : wk.rate = kk, dk),
          getVolume: () => wk.sound ? wk.sound.getVolume() : wk.volume * GF(this.master),
          getRelativeVolume: () => wk.sound ? wk.sound.getRelativeVolume() : wk.volume,
          setRelativeVolume: kk => (wk.sound ? wk.sound.setRelativeVolume(kk) : (wk.volume = GF(kk), wk.fade = null), dk),
          setPannerAttr: kk => (wk.sound ? wk.sound.setPannerAttr(kk) : wk.panner = {
            ...kk
          }, dk),
          setPosition: kk => (wk.sound ? wk.sound.setPosition(kk) : wk.moved = [kk[0], kk[1], kk[2]], dk)
        };
        return dk
      }
      setMaster(kk, Fk) {
        var Bk;
        this.master = kk, this.soundOn = Fk, null === (Bk = this.player) || void 0 === Bk || Bk.setMaster(kk, Fk)
      }
      stop() {
        var kk;
        this.stopped = !0, null === (kk = this.player) || void 0 === kk || kk.stopAll();
        for (const Fk of this.local) Fk.stopped = !0;
        this.local = []
      }
    }((0, LF.d)(), !0);
    let xa = {
        wasm: "unknown",
        client: String(BF.e)
      },
      ja = null,
      la = () => {};
    const na = new Promise((kk => {
      la = kk
    }));
    let Ia = () => {};
    const Qa = new Promise((kk => {
      Ia = kk
    }));
    let kX, FX = null,
      BX = null,
      RX = null,
      tX = null,
      aX = null,
      XX = null,
      bX = null,
      wX = null,
      dX = null,
      sX = null,
      VX = null,
      JX = null,
      AX = null,
      eX = null,
      yX = null,
      fX = null,
      mX = null,
      WX = null,
      vX = !1,
      iX = null;
    const YX = new Set,
      oX = new Set;

    function LX(kk) {
      if (!YX.has(kk)) {
        YX.add(kk);
        for (const Bk of oX) try {
          Bk(kk)
        } catch (Fk) {
          console.error(`${Ja} a startup listener threw`, Fk)
        }
      }
    }

    function OX(kk) {
      vX = !0, kk.isStopped || LX("texturesIn")
    }
    let EX = 1,
      SX = -1 / 0,
      NX = !1,
      HX = !1,
      uX = 0,
      MX = null,
      gX = !1;
    const UX = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let cX = 0,
      GX = 0,
      TX = null,
      rX = null,
      DX = null,
      zX = null;
    const PX = new WeakMap;
    let hX = null,
      qX = null,
      CX = null,
      ZX = null,
      pX = null,
      KX = null,
      xX = null,
      jX = 0,
      lX = null,
      nX = null,
      IX = null,
      QX = null,
      kb = -1 / 0,
      Fb = null;
    const Bb = new Set;
    let Rb = !1,
      tb = null;
    const ab = new Map,
      Xb = new Set;
    let bb = !1;
    const wb = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let db = null,
      sb = () => [0, 0],
      Vb = () => {},
      Jb = () => {},
      Ab = null,
      eb = null;
    const yb = new class {
      constructor(kk) {
        this.reached = kk, this.next = 1
      }
      observe(kk) {
        if (!(kk < this.next)) {
          for (; this.next <= kk;) this.next *= 2;
          this.reached(kk)
        }
      }
    }((kk => {
      console.warn(`${Ja} chunk cancels from the server this session: ${kk}`)
    }));
    let fb = 1,
      mb = null,
      Wb = null,
      vb = null,
      ib = null,
      Yb = null,
      ob = !1,
      Lb = !1,
      Ob = 0,
      Eb = null,
      Sb = !1,
      Nb = null,
      Hb = null,
      ub = !1;
    const Mb = new class {
      constructor(kk) {
        this.Hf = kk, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(kk, Fk, Bk) {
        (0, NF.d)(kk) && (this.lossPending = !1);
        const Rk = Bk - this.lastFrameMs;
        this.lastFrameMs = Bk, this.lossPending && Fk && (0, NF.i)(kk) ? (null === this.undrawnSinceMs || Rk > 1e3) && (this.undrawnSinceMs = Bk) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && Bk - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(kk) {
        kk !== this.shown && (this.shown = kk, this.Hf(kk))
      }
    }((kk => {
      wk.o.Hf(UF.b, kk)
    }));
    let gb = !1,
      Ub = !0,
      cb = null,
      Gb = !1,
      Tb = !1,
      rb = !1;

    function Db() {
      return ha ??= Promise.all([Bk.e(189), Bk.e(136), Bk.e(56)]).then((() => Bk(42735))).then((kk => (Pa = kk, Object.assign(globalThis, {
        bloxdPreviewPage: kk.pagePreviews()
      }), kk)), (kk => {
        throw ha = null, kk
      })), ha
    }

    function zb() {
      return za ??= Bk.e(54).then((() => Bk(42754))).catch((kk => {
        throw za = null, new Lk.c(kk)
      })), za
    }
    class Pb {
      constructor() {
        this.host = null
      }
      open(kk) {
        return null !== this.host ? kk(this.host) : Db().then((Fk => (this.host ??= new Fk.WasmPreviewHost(Fk.pagePreviews()), kk(this.host))))
      }
      openMob(kk) {
        return this.open((Fk => Fk.openMob(kk)))
      }
      openPet(kk) {
        return this.open((Fk => Fk.openPet(kk)))
      }
      openMobLineup(kk) {
        return this.open((Fk => Fk.openMobLineup(kk)))
      }
      openCharacter(kk, Fk) {
        return this.open((Bk => Bk.openCharacter(kk, Fk)))
      }
    }

    function hb() {
      Da || (Da = !0, IR.i.setHost(new Pb), (0, WB.p)(), xR.h.setFollower(Cw), Object.assign(globalThis, {
        bloxdPreviews: IR.i
      }))
    }

    function qb() {
      Db().then((kk => {
        kk.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Cb() {
      let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (ra) return;
      ra = !0, gb = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Ub = !gb, console.info(`${Ja} starting`), Ta || (Ta = !0, (0, UF.E)(new uF(bw, yw)), (0, Jk.s)(new MF), (0, UF.A)(new gF), (0, UF.t)()), hb(), (0, LB.setCrashScreen)((kk => {
        let {
          text: Fk,
          reload: Bk
        } = kk;
        ! function(kk, Fk) {
          var Bk, Rk;
          if (Gb) return;
          Gb = !0, (0, iB.d)(), null === (Bk = Fb) || void 0 === Bk || Bk.abort(), Fb = null, jR.c.release();
          const tk = gb ? null !== (Rk = kk.cancel) && void 0 !== Rk ? Rk : "general:back" : null;
          yR({
            ...kk,
            cancel: tk
          }).then((kk => {
            kk && Fk && Tb ? ((0, JF.k)("reloadOntoJs"), (0, Zk.i)(JF.t)) : kk && Fk ? (0, Zk.k)() : gb && (0, Zk.f)("/")
          }))
        }(Fk, Bk)
      })), (0, DR.k)(), (0, oF.f)();
      let Fk = null;
      try {
        Fk = ba("wezdh007x9c", (() => {
          var kk, Fk;
          return null !== (kk = null === (Fk = FX) || void 0 === Fk ? void 0 : Fk.ws) && void 0 !== kk ? kk : null
        }), kk, "zmnluctdxq")
      } catch (tk) {
        console.error(`${Ja} probes`, tk)
      }
      const Rk = function() {
        const kk = (0, vR.l)(),
          Fk = (0, vR.f)();
        let Bk = !1;
        return Rk => {
          kk && !Bk && (Bk = !0, (0, LB.reportStaleBuildReload)(kk, Fk, Rk))
        }
      }();
      pw(), gb || function() {
        const kk = function(kk) {
          var Fk;
          const Bk = new URLSearchParams(kk),
            Rk = Bk.get("game");
          return Rk ? {
            game: Rk,
            lobby: null !== (Fk = Bk.get("lobby")) && void 0 !== Fk ? Fk : null
          } : null
        }(window.location.search);
        if (kk) return (0, RF.n)(kk.game) && pw().request(), void Kb(kk.game, kk.lobby);
        const Fk = new URLSearchParams(window.location.search).get("ws");
        if (!Fk) return;
        na.then((kk => {
          kk && async function(kk, Fk) {
            try {
              await (0, Lk.h)(kk), qX = iw(new WebSocket(Fk)), null !== qX && jR.c.setGame(null), Zb()
            } catch (tk) {
              console.error(`${Ja} ?ws=${Fk} did not attach`, tk)
            }
          }(kk, Fk)
        }))
      }(), async function(kk) {
        var Fk, Rk, ak, Xk, bk;
        if ("undefined" === typeof WebAssembly) return Tw("noWebAssembly", "This browser has no WebAssembly"), null;
        const dk = await (0, tt.P)();
        if ((0, LB.setCrashBackend)((0, kB.k)(dk) ? "unsupported" : null !== (Fk = null === dk || void 0 === dk ? void 0 : dk.backend) && void 0 !== Fk ? Fk : "none"), (0, kB.k)(dk)) return Tw("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${dk.missing.join(", ")}`, {
          missing: dk.missing.join(",")
        }), null;
        if ((0, ut.p)("render")) try {
          const {
            startRenderDebug: kk
          } = await Promise.all([Bk.e(74), Bk.e(47)]).then((() => Bk(4416)));
          kk(dk)
        } catch (OF) {
          console.warn("The render debug topic didn't load", OF)
        }
        if ((0, ut.p)("renderlite")) try {
          const {
            startRenderLite: kk
          } = await Promise.all([Bk.e(259), Bk.e(48)]).then((() => Bk(42773)));
          vb = kk(dk)
        } catch (OF) {
          console.warn("The renderlite debug topic didn't load", OF)
        }
        let sk = null;
        if (null !== dk && rw()) {
          const kk = (0, fR.f)(dk, !0);
          "webgl" === dk.backend && null !== kk && (0, eF.k)(kk, LB.reportGpuWasmPopulation), null !== kk && (0, AF.q)(kk), sk = (0, fR.c)(dk, kk)
        }
        if (null !== dk && null !== sk) return (0, LB.reportGpuFallback)(sk, dk.backend), Dw(`the wasm client's renderer plays this GPU (${sk}) on ${dk.backend} worse than the JS client`, "gpu"), null;
        const Vk = null !== (Rk = null === dk || void 0 === dk ? void 0 : dk.backend) && void 0 !== Rk ? Rk : null;
        wb.adapter = null !== (ak = null === dk || void 0 === dk ? void 0 : dk.adapter) && void 0 !== ak ? ak : null, wb.boundAtMs = null, wb.indirectHangs = null;
        const Jk = !(0, kB.P)();
        null !== dk && "none" !== dk.reason && console.info(`${Ja} drawing with ${dk.backend}: ${dk.reason}`);
        const Ak = (0, tt.H)();
        Ia(!0), (0, Lk.o)((kk => {
          try {
            null !== Vk && (Ab = kk.startSkyFeed, Pw(), function(kk) {
              var Fk, Bk;
              sb = kk.rasterText, ZX = kk.setTextLocalPlayer, kk.setTextLocalPlayer(null !== (Fk = null === (Bk = CX) || void 0 === Bk ? void 0 : Bk.info.playerDbId) && void 0 !== Fk ? Fk : null), Vb = kk.drainTextRerasters, Jb = kk.loadTextIcons, kk.warmText((() => ob)), kk.textChanged(), ob && setTimeout(Jb, 0)
            }(kk), eb = kk.startShellAnalytics, Iw())
          } finally {
            rb || (ib = kk.followMenuPrefs({
              setSoundPrefs: mw,
              setEnvPrefs: Ww,
              setUiPrefs: fw,
              setLookPrefs: vw
            }))
          }
        })), (0, Lk.k)(Ka).catch((kk => {
          console.warn(`${Ja} the game code did not load: a join asks again`, kk)
        }));
        const ek = (0, tt.o)(dk);
        let yk, fk;
        ek.catch((() => {})), "loading" === (0, XF.v)() && vt();
        try {
          yk = function(kk) {
            const Fk = null !== kk && void 0 !== kk ? kk : document.createElement("canvas");
            Fk.id = "wasm-game-canvas", (0, Vt.n)();
            const Bk = (0, HF.h)(),
              Rk = (0, HF.l)(Bk);
            return Fk.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, st.f)(Fk, Rk), (0, HF.e)(Fk, Bk), Fk.width = Rk.bufferWidth, Fk.height = Rk.bufferHeight, ww(Fk, Ub), cb = Fk, document.body.append(Fk), Fk
          }(null === Vk ? null : await (await Db()).pagePreviews().beginSession())
        } catch (tk) {
          return await Hd({
            site: ma,
            error: tk
          }, (() => {
            (0, LB.showUnsupported)((0, JR.o)("fetch"), Dt.f.fetch, `the previews did not load: ${String(tk)}`)
          })), null
        }
        vt();
        try {
          fk = await ek
        } catch (tk) {
          return await Hd({
            site: ma,
            error: tk
          }, (() => {
            (0, LB.showUnsupported)((0, JR.o)("fetch"), Dt.f.fetch, `the ${null!==Vk&&void 0!==Vk?Vk:"client"} build did not load: ${String(tk)}`)
          })), null
        }
        const mk = (0, tt.i)(),
          Wk = !mk && !0 !== oB.j.getItem(Aa),
          vk = !mk && "loading" === (0, XF.v)();
        await (0, bF.f)(fk, VF.f, {
          reloadFailedDownload: Wk
        }), vk && !(0, XF.N)() && await (0, bF.f)(fk, VF.f, {
          reloadFailedDownload: Wk
        });
        ft = performance.now();
        const ik = xa;
        if (!(0, XF.N)()) {
          (0, XF.J)() && oB.j.setItem(Aa, !0);
          const kk = (0, XF.i)();
          if ("call" === kk) md({
            site: FB.r,
            error: (0, XF.g)(),
            header: null
          }, ik);
          else {
            const Fk = null !== kk && void 0 !== kk ? kk : "instantiate",
              Bk = () => {
                (0, LB.showUnsupported)((0, JR.o)(Fk), Dt.f[Fk], (0, XF.e)())
              };
            if ("compile" !== kk && "instantiate" !== kk || !rw())
              if ("fetch" === Fk) {
                const kk = [fk.url().href, VF.f.url().href];
                await Hd({
                  site: ma,
                  error: (0, XF.e)(),
                  urls: kk
                }, Bk)
              } else Bk();
            else {
              const Fk = (0, XF.e)(),
                Bk = (0, qF.k)((0, XF.g)());
              (0, LB.reportCountedLoadFallback)((0, JR.o)(kk), Dt.f[kk], Fk, Bk), Dw(`the wasm client did not ${kk} here (${Fk})`, Bk ? "oom" : null)
            }
          }
          return null
        }(0, wF.T)(fk.url()) && (0, LB.reportUnstreamedCoreLoad)();
        const Ok = (0, XF.y)();
        let Ek, Sk = ik;
        try {
          Sk = {
            ...ik,
            wasm: Ok.CV()
          };
          const {
            gf: kk
          } = fk.bindings, Fk = kk.gBk();
          if (Fk !== PF.s) return md({
            site: FB.b,
            error: `core ABI ${Fk}, page ABI ${PF.s}`,
            header: null
          }, Sk), null;
          const [Bk, Rk] = (0, PF.rd)();
          Ek = new kk(Bk, Rk)
        } catch (tk) {
          return md({
            site: FB.b,
            error: tk,
            header: null
          }, Sk), null
        }
        xa = Sk, ja = fk.bindings;
        const Nk = new FB.e(Ek, XF.p, {
          onCrash: kk => {
            var Fk;
            null === (Fk = vb) || void 0 === Fk || Fk.crashed(kk), Jk && function(kk, Fk, Bk) {
              if ("webgpu" !== Fk || (0, tt.e)()) return !1;
              const Rk = function(kk) {
                if (kk.site === FB.d && (0, kB.m)(kk.error)) return "frames_refused";
                return kk.site === ea && (0, kB.o)(kk.error) ? "start_failed" : null
              }(kk);
              if (null === Rk || !(0, kB.M)(Rk)) return !1;
              return (0, LB.reportRenderReload)("webgpu", "start_failed" === Rk ? 0 : 1, Bk, {
                cause: Rk,
                error: kk.error,
                context: wb,
                session: Yd(null)
              }), Rd(), !0
            }(kk, Vk, Sk) || md(kk, Sk)
          },
          onNetEvent: Bd,
          onReconnectGrace: gw,
          onCoreErrors: (kk, Fk) => {
            var Bk, Rk;
            kk.some((kk => {
              let {
                code: Fk
              } = kk;
              return Fk === PF.B.RenderDeviceLost
            })) && ((0, tt.C)(), Mb.deviceLost()), null === (Bk = vb) || void 0 === Bk || Bk.coreErrors(kk), (0, LB.reportCoreErrors)(kk, Fk, Sk, ((kk, Fk) => {
              var Bk;
              return null === (Bk = db) || void 0 === Bk ? void 0 : Bk.UBk(kk, Fk)
            })), null === (Rk = iX) || void 0 === Rk || Rk.coreErrors(kk)
          },
          onRenderReload: (kk, Fk, Bk) => {
            ! function(kk, Fk, Bk, Rk, tk, ak) {
              var Xk;
              if ((0, tt.e)()) return;
              const bk = Fk === PF.nc.WEBGPU,
                wk = Rk === PF.nc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                dk = (0, kB.N)(db);
              null === (Xk = vb) || void 0 === Xk || Xk.reload(bk, Bk, wk, null === dk || void 0 === dk ? void 0 : dk.message);
              const sk = bk ? (0, kB.L)(wk, tk) : null;
              if (null !== sk) {
                const Fk = void 0 === dk ? "" : ` (${dk.message})`;
                return void kk.crash(LB.RENDER_RELOAD_SITE, new Error(`${(0,LB.renderReloadMessage)("webgpu",wk,Bk)} and ${sk}${Fk}`))
              }
              const Vk = bk ? "webgpu" : "webgl1" === ak ? "webgl1" : "webgl";
              "lost" === wk && (0, tt.C)();
              (0, LB.reportRenderReload)(Vk, Bk, xa, {
                cause: wk,
                error: dk,
                context: wb,
                session: Yd(kk.sunShadowsHeld())
              }), Rd()
            }(Nk, kk, Fk, Bk, Jk, Vk)
          },
          onEnvEvent: kk => {
            var Fk;
            kk.kind === PF.M.SkyImages && (null === (Fk = fX) || void 0 === Fk || Fk.onEvent(kk.payload))
          },
          onImages: kk => {
            var Fk;
            null === (Fk = mX) || void 0 === Fk || Fk.onEvent(kk)
          },
          onModelRequest: kk => {
            var Fk;
            null === (Fk = AX) || void 0 === Fk || Fk.request(kk)
          },
          onModelTaken: (kk, Fk) => {
            var Bk;
            null === (Bk = AX) || void 0 === Bk || Bk.taken(kk, Fk)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(kk, Fk) {
                const Bk = pa;
                if (null === Bk || kk.isStopped) return;
                Bk.restore((kk => {
                  (0, LB.reportTerrainTextureFailure)(kk, Fk)
                })).then((Fk => {
                  !1 !== Fk || kk.isStopped ? !0 === Fk && console.info(`${Ja} terrain textures handed over again after the renderer lost them`) : console.warn(`${Ja} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Nk, Sk)
            }))
          },
          onKeepAlive: kk => {
            const Fk = null === zX ? void 0 : PX.get(zX);
            void 0 !== Fk && OR(Fk, kk)
          }
        });
        if (qa = Nk, null !== kk) {
          Nk.setAntiCheatProbes(Ba(XF.p, kk.checks)), kk.watchHeld(ta.CoreFrame, (() => Nk.frame)), kk.watchHeld(ta.GlueFrame, (() => Ek.frame));
          const Fk = Xa(kk, ((kk, Fk, Bk) => {
            let Rk = !1;
            return Od(Nk, (() => {
              Rk = Nk.rings.input.writeRecord(PF.hb.AntiCheat, kk, Fk, Bk, 0)
            })), Rk
          }));
          Nk.isStopped ? Fk.stop() : VX = Fk
        }
        ca = (kk, Fk, Bk) => Nk.rings.cmd.writeCmd(kk, Fk, Bk), Ga = kk => Nk.rings.cmd.growForCmd(kk), gX = !1, Pw(), (0, Lk.r)(Nk, {
          core: Ek,
          memory: XF.p,
          staleOr: (kk, Fk, Bk) => Hd({
            site: kk,
            error: Fk
          }, Bk),
          reportReplayFault: (kk, Fk) => {
            (0, LB.reportReplayFault)(kk, Fk, xa)
          },
          audio: Ka,
          options: yF.b,
          onNetEvent: Bd,
          sessionInfo: kk => {
            var Fk;
            return (null === (Fk = CX) || void 0 === Fk ? void 0 : Fk.conn) === kk ? CX.info : null
          },
          onEventOverflow: aw,
          replayShaderPack: kk => {
            var Fk;
            null === (Fk = iX) || void 0 === Fk || Fk.replay(kk)
          },
          hasPackModel: kk => {
            var Fk, Bk;
            return null !== (null !== (Fk = null === (Bk = hw()) || void 0 === Bk ? void 0 : Bk.modelUrl(kk)) && void 0 !== Fk ? Fk : null)
          },
          beforeWrite: () => (!NX && Nk.rings.net.cursor > 0 && Xd(Nk, !1, "all"), !Nk.isStopped),
          beforeOp: () => (!NX && Nk.netWrittenSinceFrame > 0 && Xd(Nk, !1, "budget"), !Nk.isStopped)
        }), (0, Yk.G)({
          lockPointer: () => {
            if (!rB(yk)) return !1;
            try {
              Promise.resolve(yk.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, EB.d)()
          },
          leaveGame: () => {
            tw()
          },
          canvas: () => yk
        }), JX = (0, Yk.x)((() => {
          var kk;
          const Fk = (0, Lk.g)();
          null === (kk = (0, Lk.n)()) || void 0 === kk || kk.followCursorAim(!0 === (null === Fk || void 0 === Fk ? void 0 : Fk.isSessionLive) ? Fk : null)
        })), TX && Nk.setUiPrefs(TX);
        rX && Nk.setEnvPrefs(rX);
        DX && Nk.setLookPrefs(DX);
        const Hk = wt ? dt(wt.preventMovement) : null;
        Hk && ew(Hk);
        const uk = (0, yB.k)(),
          Mk = (0, yB.e)(Nk, uk);
        dX = uk.basis, (0, YB.h)(null === Mk ? null : (0, eB.l)(Mk)), wX = Mk;
        const gk = (0, dF.c)();
        let Uk = 1 / 0,
          ck = !0,
          Gk = uk.shedFootprintBytes;
        const Tk = new rR.d(gk, (() => Ek.Pf()), (kk => {
          Nk.crash(FB.k, kk)
        }));
        XX = Tk, bX = Tk, null !== Mk && Tk.setCeiling(Math.min((0, rR.l)(Mk), Uk));
        if (ck) {
          Tk.setShed((kk => {
            const Fk = Nk.shedMemory("joinReserve" !== kk);
            return null !== Fk && (null === wX || Fk < wX) && (wX = Fk, (0, YB.h)((0, eB.l)(Fk))), Fk
          }), ((kk, Fk, Bk) => {
            1 === Fk ? (0, LB.reportMemoryShed)(kk, Bk, xa) : console.warn(`${Ja} wasm memory: shed again (${kk}): shed ${Fk}`, Bk.wasmMemoryShed)
          }), (() => Nk.addDistanceInUse()));
          const kk = (0, kB.C)(Ok);
          Tk.setFootprint(new Ht(Gk, {
            storedChunks: () => Ek.cBk(),
            gpuBytes: () => {
              var Fk;
              return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.GBk()) && void 0 !== Fk ? Fk : 0
            },
            jsHeapBytes: Nt
          }))
        }
        window.addEventListener("pagehide", (() => {
          XX === Tk && (Tk.refreshStats(), Ld(Tk))
        })), window.addEventListener("pagehide", td), window.addEventListener("pagehide", ad), !1;
        const [rk, Dk] = (0, mB.g)();
        Yb = (0, vB.d)((kk => Nk.setChunkAddDistance(kk.horizontal, kk.vertical)), {
          horizontal: rk,
          vertical: Dk
        }), Nk.setAmbientOcclusion(!0 !== oB.i.getItem("disableAmbientOcclusion")), Nk.setPoseLod(!0 !== oB.i.getItem(aF.L)), (0, ut.p)("look") && (Nk.setDebugLog(PF.G.Look, !0), (0, gt.i)("wasm", (() => Nk.takeDebugLog(PF.G.Look))));
        (0, ut.p)("remesh") && (Nk.setDebugLog(PF.G.Remesh, !0), zk = () => Nk.takeDebugLog(PF.G.Remesh), rt = new Tt((0, Ut.m)(), zk));
        var zk;
        const Pk = function(kk, Fk, Bk, Rk) {
          const tk = new FR,
            ak = kk => oB.i.getItem(kk);
          tk.sync(ak, Fk), (0, SF.P)();
          const Xk = (0, wk.p)("customBindingsChanged", (() => {
            tk.sync(ak, Fk)
          }));
          (0, SB.j)(Fk);
          const bk = new Set,
            dk = (0, Yk.x)((() => {
              var kk;
              bk.size > 0 && aR() && !0 === (null === (kk = (0, Lk.g)()) || void 0 === kk ? void 0 : kk.localPlayerAlive()) && wk.o.Hf("usedKeyboard")
            })),
            sk = pB.b.heldSizer((() => (0, HF.q)(kk))),
            Vk = ZB(kk, Fk, {
              prevents: kk => tk.prevents(kk),
              keyPressed: kk => {
                tk.moves(kk) && (bk.add(kk), aR() && wk.o.Hf("usedKeyboard"))
              },
              keyReleased: kk => {
                bk.delete(kk)
              },
              keysReleased: () => {
                bk.clear()
              },
              resized: () => {
                RR.h.measure(kk.getBoundingClientRect()), (0, KB.k)()
              },
              sizeCanvas: sk,
              watchRenderScale: Fk => {
                const Bk = (0, HF.r)(kk, Fk),
                  Rk = pB.b.onRelease(Fk);
                return () => {
                  Bk(), Rk()
                }
              },
              touchStarting: () => {
                RR.h.measure(kk.getBoundingClientRect())
              },
              viewShown: Bk,
              touchUiShown: () => pk.c.get("isTouchScreen"),
              ctrlCombosAreGames: aR,
              inspect: (kk, Fk, Bk) => {
                tk.checks(Fk, Bk) && Rk(kk)
              },
              canLock: () => rB(kk)
            }),
            Jk = (0, XB.e)(Fk);
          return () => {
            Xk(), dk(), (0, SB.j)(null), Jk(), Vk()
          }
        }(yk, ((kk, Fk, Bk, Rk, tk) => {
          var ak;
          Od(Nk, (() => {
            Nk.rings.input.writeRecord(kk, Fk, Bk, Rk, tk)
          })), null === (ak = VX) || void 0 === ak || ak.onInput(kk), !HX && (0, sR.c)(kk, tk) && (0, sR.b)((() => {
            qa !== Nk || rb || Nk.isStopped || !Jd() || Xd(Nk, !1, "budget", !1)
          }))
        }), (() => Ub), (kk => {
          var Fk;
          null === (Fk = VX) || void 0 === Fk || Fk.onEvent(kk)
        }));
        if (Nk.isStopped) return Pk(), null;
        BX = Pk;
        const hk = () => !Nk.isStopped && !Gb;
        if (Nk.isStopped) return null;
        (0, XF.T)((() => {
          "call" === (0, XF.i)() && Nk.crash(FB.r, (0, XF.g)())
        }));
        const qk = (0, FB.L)(Nk.rings.worker, (() => {
          Xd(Nk, !1, "budget")
        }));
        RX = function(kk, Fk) {
          return Ed().then((kk => {
            let {
              prefetchWorldgenWorker: Fk
            } = kk;
            Fk()
          }), (() => {})), new Pt({
            module: (0, XF.r)(),
            decodeSettings: kk => {
              const Fk = (0, Lk.n)();
              if (null === Fk) throw new Error("no game code to decode the world-gen seed with");
              return Fk.decodeMapSettings(kk)
            },
            loadWorker: Sd,
            onMapWithoutWorldgen: () => {
              Nd((kk => {
                let {
                  stopWorldgenWorkerPrefetch: Fk
                } = kk;
                Fk()
              }))
            },
            onLoadFailed: kk => {
              (0, LB.reportWorldgenLoadFailure)(kk, xa)
            },
            onWorkerLost: kk => {
              (0, LB.reportWorkerLost)(FB.C, kk, xa)
            },
            onStartTimeout: kk => {
              (0, LB.reportWorkerStartTimeout)(FB.C, kk, xa)
            },
            onGaveUp: kk => {
              (0, LB.reportWorldgenGaveUp)(kk, xa)
            },
            onMemoryStats: kk => {
              var Fk;
              null === (Fk = XX) || void 0 === Fk || Fk.noteWorldgen(kk)
            },
            onMemoryGone: () => {
              var kk;
              null === (kk = XX) || void 0 === kk || kk.worldgenGone()
            },
            write: (Bk, Rk, tk, ak, Xk) => {
              Od(kk, (() => {
                kk.rings.worker.writeWorkerRecord(Bk, Rk, tk, 0, ak, Xk) || kk.crash(FB.C, `a world-gen record of kind ${Rk} did not fit the worker-in ring`)
              })), Fk()
            }
          })
        }(Nk, qk), aX = function(kk, Fk) {
          return new GR({
            module: (0, XF.r)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: kk
              }, Fk] = await Promise.all([Bk.e(40).then((() => Bk(42813))), Promise.resolve().then((() => Bk(98))).then((kk => {
                let {
                  isMobile: Fk
                } = kk;
                return Fk()
              }), (() => !1))]);
              return {
                create: kk,
                count: (0, YF.c)(navigator.hardwareConcurrency, Fk)
              }
            },
            write: (Bk, Rk, tk, ak, Xk, bk) => {
              (0, KB.j)(), Od(kk, (() => {
                kk.rings.worker.writeWorkerRecord(Bk, Rk, tk, ak, Xk, bk) || kk.crash(FB.m, `a meshing record of kind ${Rk} did not fit the worker-in ring`)
              })), Fk()
            },
            onWorkerLost: kk => {
              (0, LB.reportWorkerLost)(FB.m, kk, xa)
            },
            onLightFault: (kk, Fk) => {
              (0, LB.reportLightFault)(kk, Fk, xa)
            },
            onStartTimeout: kk => {
              (0, LB.reportWorkerStartTimeout)(FB.m, kk, xa)
            },
            onMemoryStats: (kk, Fk) => {
              var Bk;
              null === (Bk = XX) || void 0 === Bk || Bk.noteMeshWorker(kk, Fk)
            },
            onMemoryGone: kk => {
              var Fk;
              null === (Fk = XX) || void 0 === Fk || Fk.meshWorkerGone(kk)
            },
            fail: (Fk, Bk) => {
              const Rk = () => {
                kk.crash(FB.m, void 0 === Bk ? Fk : new Error(Fk, {
                  cause: Bk
                }))
              };
              void 0 !== Bk ? Hd({
                site: FB.m,
                error: Bk
              }, Rk) : Rk()
            }
          })
        }(Nk, qk);
        const Kk = (0, lR.r)(vF.clientSideServerUrls.staticUrl, {
            onTableFailed: kk => {
              Hd({
                site: LB.MODEL_FEED_SITE,
                error: kk
              }, (() => {}), hk)
            },
            packUrl: kk => {
              var Fk, Bk;
              return null !== (Fk = null === (Bk = hw()) || void 0 === Bk ? void 0 : Bk.modelUrl(kk)) && void 0 !== Fk ? Fk : null
            }
          }),
          xk = function(kk, Fk, Bk) {
            const Rk = Bk => {
              var Rk, tk;
              return null !== (Rk = null === (tk = Fk()) || void 0 === tk ? void 0 : tk.drawnUrl(Bk)) && void 0 !== Rk ? Rk : kk.url(Bk)
            };
            return (0, xR.k)((0, zR.l)(Rk), Bk)
          }(Kk, (() => AX), hw),
          jk = new zR.g(xk, (kk => {
            console.warn(`${Ja} image ${kk.key.kind}:${kk.key.index}:${kk.key.word} failed`, kk.error)
          }));
        mX = jk, WX = new pR(Nk, xk, ((kk, Fk) => {
          void 0 === Fk ? console.warn(`${Ja} ${kk}`) : Zw(kk, Fk)
        }));
        const lk = new KR.i(Kk, function(kk, Fk) {
          let Rk = !1,
            tk = null,
            ak = null;
          const Xk = {
              onUnavailable: (Bk, Rk) => {
                ak ??= Hd({
                  site: LB.MODEL_POOL_SITE,
                  error: Bk,
                  urls: Rk
                }, (() => {
                  (0, LB.reportModelPoolFailure)(Bk, kk)
                }), Fk)
              },
              onDecoderFailed: (Bk, Rk) => {
                const tk = () => {
                  (0, LB.reportDracoDecoderFailure)(Bk, kk)
                };
                void 0 !== Rk ? Hd({
                  site: LB.MODEL_POOL_SITE,
                  error: Bk,
                  urls: Rk
                }, tk, Fk) : tk()
              },
              onWorkerLost: Fk => {
                (0, LB.reportWorkerLost)(LB.MODEL_POOL_SITE, Fk, kk)
              },
              onModuleRetry: (Fk, Bk) => {
                (0, LB.reportModelsModuleRetry)(Fk, Bk, kk)
              }
            },
            bk = Bk.e(42).then((() => Bk(42819))).then((kk => {
              let {
                pageModelPool: Fk
              } = kk;
              if (Rk) return null;
              const Bk = Fk(Xk);
              return tk = Bk.unlisten, eX = Bk.pool, Bk.pool
            }), (kk => (Rk || Xk.onUnavailable(kk, void 0), null)));
          return yX = () => {
            var kk;
            Rk = !0, null === (kk = tk) || void 0 === kk || kk(), eX = null
          }, (kk, Fk) => bk.then((Bk => {
            var Rk;
            return null !== (Rk = null === Bk || void 0 === Bk ? void 0 : Bk.build(kk, Fk)) && void 0 !== Rk ? Rk : (0, nR.p)(kk, "the model workers did not load")
          })).then((kk => null !== ak && (0, nR.k)(kk) ? ak.then((() => kk)) : kk))
        }(Sk, hk), (kk => {
          kk.startup ? (fd(), Hd({
            site: LB.MODEL_FEED_SITE,
            error: kk.error,
            urls: "" === kk.url ? void 0 : [kk.url]
          }, (() => {
            (0, LB.reportModelFailure)(kk, Sk)
          }))) : (0, LB.reportModelFailure)(kk, Sk)
        }), {
          onWritten: (kk, Fk) => {
            jk.glbWritten(kk, Fk)
          },
          onTaken: (kk, Fk) => {
            jk.glbTaken(kk, Fk)
          },
          onPackFileFailed: (kk, Fk) => {
            console.warn(`${Ja} the texture pack's model file ${kk} failed: the shipped one loads`, Fk)
          }
        });
        AX = lk;
        const nk = new qR.g(Nk);
        pa = nk, nk.swap((kk => {
          const Fk = () => {
            (0, LB.reportTerrainTextureFailure)(kk, Sk)
          };
          if (ob) return void Fk();
          const Bk = () => !ob,
            Rk = null === kk.url ? void 0 : [kk.url];
          Hd({
            site: FB.y,
            error: kk.error,
            urls: Rk
          }, Fk, Bk)
        })).then((kk => {
          null !== kk && (kk || Nk.isStopped || console.warn(`${Ja} the core refused the terrain textures: terrain draws untextured`), OX(Nk))
        }));
        const Ik = new DF(Nk, ((kk, Fk) => {
          console.warn(`${Ja} ${kk}`, ...void 0 === Fk ? [] : [Fk])
        }));
        Ik.feed(), null !== Vk && function(kk, Fk, Rk, tk, ak, Xk) {
          let bk = null,
            wk = null,
            dk = !1;
          const sk = {
            textures: null,
            stop: () => {
              var kk, Fk;
              dk = !0, null === (kk = wk) || void 0 === kk || kk(), null === (Fk = bk) || void 0 === Fk || Fk(), jR.c.setSettled(null), null !== ja && pb.clear(ja)
            }
          };
          Za = sk, wk = pw().follow((wk => {
            null !== wk && Promise.all([Bk.e(193), Bk.e(45)]).then((() => Bk(42778))).then((Bk => {
              let {
                PackTextures: Vk
              } = Bk;
              if (dk || kk.isStopped) return;
              const Jk = new Vk({
                feed: wk,
                terrain: Fk,
                backend: Rk,
                stopped: () => kk.isStopped,
                landed: () => {
                  OX(kk)
                },
                packSwapped: () => {
                  (0, xR.i)(tk), Xk.feed((() => async function(kk) {
                    const Fk = null === kk ? null : await kk.averageColours;
                    return null === Fk ? zF() : rF(Fk)
                  }(Jk.assets))), qw(Jk.iconOverrides()), ak.refresh().then((kk => {
                    null !== kk && console.info(`${Ja} texture pack models: ${kk.resent} of ${kk.delivered} files written again, ${kk.refetched} refetched`)
                  }))
                },
                settled: (kk, Fk, Bk) => {
                  var Rk;
                  (jR.c.setSettled({
                    state: kk,
                    files: Fk
                  }), null === kk.gameSource && (0, fB.c)(kk.pack, Bk), Bk) || function(kk) {
                    const Fk = ja;
                    null !== Fk && pb.apply(Fk, kk).then((Fk => {
                      Fk && kk && console.info(`${Ja} the texture pack's animations are in (${Object.keys(kk).length} files)`)
                    }))
                  }(null === (Rk = kk.pack) || void 0 === Rk ? void 0 : Rk.animations)
                },
                settling: () => {
                  jR.c.setSettled(null)
                },
                warn: Zw,
                maxTextureSize: () => Promise.resolve((0, kB.R)(document.createElement("canvas")))
              });
              sk.textures = Jk, bk = Jk.start()
            }), (kk => {
              console.warn(`${Ja} the texture pack's terrain didn't load: the built atlas stays`, kk)
            }))
          }))
        }(Nk, nk, Vk, jk, lk, Ik);
        const Qk = () => {
            Nk.setTextureLayers("")
          },
          kF = kk => {
            (WF ??= Bk.e(50).then((() => Bk(42821))).then((kk => {
              let {
                TEXTURE_NAMES: Fk
              } = kk;
              return Fk
            }), (kk => {
              throw WF = null, kk
            })), WF).then((kk => {
              Nk.setTextureLayers(kk) || Nk.isStopped || (console.warn(`${Ja} the core refused the texture names: textured Boxes draw textureNotFound`), Qk())
            }), (Fk => {
              if (Nk.isStopped) return;
              const [Bk, ...Rk] = kk;
              void 0 === Bk ? Hd({
                site: LB.TEXTURE_NAMES_SITE,
                error: Fk
              }, (() => {
                console.warn(`${Ja} the texture names didn't load, so textured Boxes draw textureNotFound`, Fk), Qk()
              }), hk) : setTimeout((() => {
                kF(Rk)
              }), Bk)
            }))
          };
        if (kF(ga), null !== Vk && !await async function(kk, Fk, Bk, Rk, ak, Xk) {
            var bk;
            const wk = (0, kB.C)(Bk);
            if (null === wk) return kk.crash(ea, new Error(`this ${Rk} build has no openRenderer`)), !1;
            let dk;
            db = wk;
            try {
              var sk, Vk, Jk, Ak;
              const tk = null !== (sk = null === (Vk = Pa) || void 0 === Vk ? void 0 : Vk.pagePreviews()) && void 0 !== sk ? sk : null,
                bk = null !== (Jk = null === (Ak = Pa) || void 0 === Ak ? void 0 : Ak.previewModule(Bk)) && void 0 !== Jk ? Jk : null;
              if (null === tk || null === bk) {
                null === tk || void 0 === tk || tk.endSession(!1), dk = (0, HF.h)().sampleCount, await (0, kB.d)(Fk, wk, Xk, zw, dk, await ak);
                const kk = (0, kB.i)(Bk);
                null === kk && console.warn(`${Ja} this ${Rk} build has no image registry: sky and model images won't show`), (0, hR.f)(kk)
              } else {
                (0, tt.e)() && await (0, Zk.m)();
                const Bk = (0, tt.J)();
                if (null !== Bk) {
                  const Fk = (0, kB.N)(wk);
                  return kk.crash(LB.RENDER_RELOAD_SITE, new Error(`${Bk}${void 0===Fk?"":` (${Fk.message})`}`)), !1
                }
                dk = await tk.bindSession(bk, Fk, (async kk => (0, kB.r)(wk, ea, Xk, kk, zw, await ak)))
              }
            } catch (tk) {
              return kk.crash(ea, tk), !1
            }(function(kk, Fk) {
              const Bk = kk,
                {
                  requestCapture: Rk,
                  takeCapture: tk
                } = Bk;
              if ("function" !== typeof Rk || "function" !== typeof tk) return;
              const ak = {
                request() {
                  Rk.call(Bk, Fk)
                },
                take() {
                  var kk;
                  return null !== (kk = tk.call(Bk)) && void 0 !== kk ? kk : null
                }
              };
              window[Jt] = ak
            })(Fk, dk), fb = dk, bb = !0;
            const ek = performance.now();
            return wb.boundAtMs = null !== (bk = (0, tt.M)()) && void 0 !== bk ? bk : ek, wb.indirectHangs = (0, tt.G)(), console.info(`${Ja} ${Rk} renderer bound at ${Math.round(ek)} ms`), !kk.isStopped
          }(Nk, Ek, Ok, Vk, Ak, yk)) return null;
        if (null !== Vk) {
          var FF, BF, RF;
          (0, sF.A)(Vk);
          const kk = () => !Nk.isStopped && Vd();
          Bk.e(185).then((() => Bk(8891))).then((Fk => {
            let {
              devTools: Bk
            } = Fk;
            Nk.isStopped || Bk.setHost(function(kk) {
              return {
                tools: Rt,
                async downloadScene(Fk, Bk) {
                  let {
                    width: Rk,
                    height: tk,
                    colouring: ak
                  } = Bk;
                  "screenshot" === Fk && null === ak ? await (0, kt.b)(kk, Rk, tk) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(kk, Fk) {
              return {
                canvas: kk,
                maxTextureSize: Ft,
                drawing: Fk,
                resize: (kk, Fk) => {
                  (0, SB.u)(PF.hb.Resize, 0, kk, Fk, (0, SB.f)(1))
                },
                restoreSize: () => {
                  const Fk = (0, HF.q)(kk);
                  null !== Fk && (0, SB.u)(PF.hb.Resize, 0, Fk.cssWidth, Fk.cssHeight, (0, SB.f)(Fk.renderScale))
                },
                onFrameDrawn: kk => (Bt.add(kk), () => {
                  Bt.delete(kk)
                })
              }
            }(yk, kk)))
          }), (kk => {
            console.warn(`${Ja} the developer tools didn't load: no captures this session`, kk)
          }));
          const Fk = "webgpu" === Vk && null !== (FF = null === dk || void 0 === dk || null === (BF = dk.adapter) || void 0 === BF ? void 0 : BF.vendor) && void 0 !== FF ? FF : null;
          mb = {
            backend: Vk,
            canvas: yk,
            fallbackReason: null !== (RF = null === dk || void 0 === dk ? void 0 : dk.reason) && void 0 !== RF ? RF : null,
            adapterVendor: Fk
          }, Iw();
          try {
            (0, KB.p)(Vk, yk, Fk)
          } catch (tk) {
            (0, KB.s)(), console.error(`${Ja} the quality steps didn't start`, tk)
          }
        }
        const {
          storagePullBreaks: tF,
          splitPassBreaks: JF
        } = await Ak;
        JF && console.warn(`${Ja} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const fF = tF ? Ck.b : (0, Ck.g)(dk, (0, EF.c)());
        if ((0, ut.p)("webgpuloss")) {
          var mF, iF;
          const kk = {
            backend: Vk,
            reason: null !== (mF = null === dk || void 0 === dk ? void 0 : dk.reason) && void 0 !== mF ? mF : null,
            source: null !== (iF = null === dk || void 0 === dk ? void 0 : dk.source) && void 0 !== iF ? iF : null,
            storagePullBreaks: tF,
            noWebGpu: fF.messageKey
          };
          (0, Mt.e)((Fk => {
            Fk.noteWasmPick(kk)
          }))
        }
        const oF = "webgpu" === Vk && !tF;
        if (iX = (0, Ck.h)(oF ? Nk : null, oF && null !== (Xk = null === (bk = Pa) || void 0 === bk ? void 0 : bk.pagePreviews().ie) && void 0 !== Xk ? Xk : null, fF, Zw), rb) return null;
        if (Tk.reserveAtJoin((0, rR.j)(null !== Mk && void 0 !== Mk ? Mk : eB.e)), Nk.isStopped) return null;
        const LF = kk => {
          if (null !== Wb) try {
            Wb.animationFrame(kk)
          } catch (tk) {
            Fd(tk)
          }
          if (function(kk, Fk) {
              return Fk && !rb && !HX && Jd() && Vd() && kk.framePaces(performance.now())
            }(Nk, Ub)) return Nk.writePendingInput(), (0, Yk.e)(kk, bd), Qw(!1, kk), void requestAnimationFrame(LF);
          Xd(Nk, Ub, "budget") && ((0, NF.i)(Nk.lastFrameKind) && Vd() && (0, Yk.e)(kk, bd), Qw(Ub && ub, kk), Mb.frame(Nk.lastFrameKind, Ub && Vd(), kk), Wd(Nk), Tk.afterFrame(), requestAnimationFrame(LF))
        };
        requestAnimationFrame(LF);
        return function(kk) {
          if (kk.has("inputLog") && (0, BR.l)((kk => {
              let {
                action: Fk,
                down: Bk,
                press: Rk
              } = kk;
              console.info(`${tR} input ${Fk} ${Bk?"down":"up"} press ${Rk} at ${performance.now().toFixed(1)}`)
            })), kk.has("inputDump")) {
            const kk = [];
            XR = kk, Object.assign(window, {
              bloxdInputDump: () => kk.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), sX = function(kk, Fk) {
          let Bk = null;
          const Rk = () => {
              null !== Bk && (clearInterval(Bk), Bk = null)
            },
            tk = () => {
              document.hidden ? Bk ??= setInterval((() => {
                Xd(kk, !1, "budget") ? (Wd(kk), Fk.afterFrame()) : Rk()
              }), Ma) : Rk()
            };
          return document.addEventListener("visibilitychange", tk), tk(), () => {
            Rk(), document.removeEventListener("visibilitychange", tk)
          }
        }(Nk, Tk), Nk
      }(Fk).then((kk => {
        var Fk;
        (Rk(xa), Ia(null !== kk), null !== kk && (mt = performance.now()), la(kk), null === kk) ? null === (Fk = Pa) || void 0 === Fk || Fk.pagePreviews().endSession(null === (0, XF.i)()): LX("booted")
      }), (kk => {
        Rk(xa), Ia(!1), la(null), md({
          site: ya,
          error: kk,
          header: null
        }, xa)
      }))
    }

    function Zb() {
      const kk = ja;
      null !== kk && Db().then((Fk => {
        let {
          pageBuiltInAnimationPack: Bk
        } = Fk;
        Bk().provide(kk)
      }), (kk => {
        console.warn(`${Ja} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, kk)
      }))
    }
    const pb = new class {
      constructor(kk) {
        this.deps = kk, this.latest = 0, this.Hb = null
      }
      apply(kk, Fk) {
        return this.load(kk, Fk, 0)
      }
      async load(kk, Fk, Bk) {
        var Rk;
        const tk = ++this.latest,
          ak = this.deps.compiler;
        if (void 0 === Fk || null === Fk || "object" !== typeof Fk || 0 === Object.keys(Fk).length || null === ak) return this.drop(kk), !1;
        if ((null === (Rk = this.Hb) || void 0 === Rk ? void 0 : Rk.module) === kk && (0, jF.ge)(this.Hb.files, Fk)) return !1;
        try {
          const [Bk, Rk] = await Promise.all([ak(), this.deps.builtIns()]);
          if (tk !== this.latest) return !1;
          const Xk = await Bk(Fk, QF, {
            builtIns: Rk
          });
          if (tk !== this.latest) return !1;
          const bk = this.call(kk, Xk);
          if (void 0 === bk) throw new IF("the compiled animations didn't read against the built-in pack");
          return this.Hb = {
              module: kk,
              files: Fk
            },
            function(kk) {
              for (let Fk = 0; Fk + 2 < kk.length; Fk += 3) {
                ("error" === kk[Fk] ? console.error : console.warn)(`Animation for the texture pack: ${kk[Fk+1]}: ${kk[Fk+2]}`)
              }
            }(bk), !0
        } catch (bk) {
          var Xk;
          if (tk !== this.latest) return !1;
          this.drop(kk), 0 === Bk && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", bk);
          const Rk = (null !== (Xk = this.deps.retryAfterMs) && void 0 !== Xk ? Xk : nF)[Bk];
          return void 0 === Rk || bk instanceof IF || (0, lF.g)(kk) || setTimeout((() => {
            tk === this.latest && this.load(kk, Fk, Bk + 1)
          }), Rk), !1
        }
      }
      call(kk, Fk) {
        try {
          return kk.MBk(Fk)
        } catch (Bk) {
          throw (0, lF.h)(kk, Bk), Bk
        }
      }
      clear(kk) {
        this.latest++, this.drop(kk)
      }
      drop(kk) {
        const Fk = this.Hb;
        if (this.Hb = null, (null === Fk || void 0 === Fk ? void 0 : Fk.module) === kk && !(0, lF.g)(kk)) try {
          this.call(kk, null)
        } catch {}
      }
    }({
      compiler: ZF.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: kk
        } = await Db();
        return kk().whenSet()
      },
      warn: Zw
    });
    async function Kb(kk, Fk) {
      let Rk = !1;
      await xb({
        matchmake: async () => {
          const {
            guestJoinTarget: tk,
            guestJoinWithPack: ak
          } = await Bk.e(342).then((() => Bk(42762)));
          return Rk ? tk(kk, Fk, xw()) : (Rk = !0, ak(kk, Fk, (Fk => jw(kk, Fk)), xw))
        },
        onFailure: kk => {
          (0, LB.showJoinFailure)(kk, xa)
        },
        rejoin: dw,
        invalidateTrafficCode: sw
      })
    }
    async function xb(kk) {
      let {
        matchmake: Fk,
        onFailure: Bk,
        rejoin: tk,
        invalidateTrafficCode: ak,
        pageReady: Xk,
        signal: bk
      } = kk;
      const wk = () => !0 === (null === bk || void 0 === bk ? void 0 : bk.aborted);
      let dk;
      const sk = jR.c.rejoinHold(),
        Vk = (0, iB.T)("wasm", od);
      let Jk = !1,
        Ak = performance.now();
      try {
        if (!await Qa) return {
          kind: "stopped"
        };
        if (wk()) return {
          kind: "yB"
        };
        zb().catch((() => {}));
        let kk = await Fk();
        Ak = performance.now();
        const Bk = () => performance.now() - kk.matchedAt <= kk.freshMs,
          Rk = lb(kk.target).catch((() => {}));
        Bk() && !wk() && (dk = new MR(kk.target, {
          signal: bk
        }));
        const ak = performance.now();
        if (null === await na) return {
          kind: "stopped"
        };
        var ek;
        if (function(kk) {
            var Fk, Bk;
            if (At.d.markGameEngineConstructed(), Wt) return;
            Wt = !0;
            const Rk = Math.max(kk, null !== (Fk = yt) && void 0 !== Fk ? Fk : kk);
            (0, et.j)("ready", Math.max(0, (null !== (Bk = ft) && void 0 !== Bk ? Bk : Rk) - Rk) / 1e3)
          }(ak), wk() || (null !== ft && null !== mt ? ((0, UF.g)("wasm_loaded", ft), (0, UF.g)("wasm_core_ready", mt)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await Rk, !Bk() && !wk()) null === (ek = dk) || void 0 === ek || ek.rematched(), kk = await Fk(), Ak = performance.now();
        if (wk()) return {
          kind: "yB"
        };
        const sk = await async function(kk) {
          var Fk, Bk, Rk;
          let {
            signal: tk,
            rejoin: ak = null,
            early: Xk,
            pageReady: bk
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== tk && void 0 !== tk && tk.aborted) throw new DOMException("the join was left", "AbortError");
          const wk = (dk = nX, sk = performance.now(), null !== dk && sk - dk < mR);
          var dk, sk;
          nX = null;
          const Vk = new AbortController;
          Qb({
            controller: Vk,
            game: null !== (Fk = null === (Bk = kk.session) || void 0 === Bk ? void 0 : Bk.gameNameWithVariation) && void 0 !== Fk ? Fk : null
          }), IX = null, null === (Rk = Fb) || void 0 === Rk || Rk.abort(), Fb = null, Rb = !1, tb = null, ab.clear();
          const Jk = () => {
            (0, iF.i)(Vk, (0, iF.e)(tk))
          };
          null === tk || void 0 === tk || tk.addEventListener("abort", Jk, {
            once: !0
          });
          try {
            var Ak, ek, yk;
            const Fk = await na;
            if (null === Fk || Fk.isStopped || rb) throw new Error("no core is running to join a game with");
            if (kk.session && null !== iX) {
              const Fk = await nb(iX.join(kk.session.gameNameWithVariation), Vk.signal);
              if ((0, ut.p)("webgpuloss")) {
                const Bk = kk.session.gameNameWithVariation,
                  Rk = iX.couldntRunInJoinedGame();
                (0, Mt.e)((kk => kk.noteWasmJoin(Bk, Fk, Rk)))
              }
              if (null !== Fk) throw new Ck.e(Fk)
            }
            const [, , , {
              joinRoom: Bk
            }] = await nb(Promise.all([(0, Lk.h)(Fk), lb(kk), null === bk || void 0 === bk ? void 0 : bk(), zb()]), Vk.signal), Rk = kk.session, tk = Rk ? {
              ...Aw,
              attachSocket: Fk => {
                const Bk = iw(Fk, kk.endpoint);
                var tk;
                null !== Bk && (CX = {
                  conn: Bk,
                  info: Rk
                }, null === (tk = ZX) || void 0 === tk || tk(Rk.playerDbId));
                return Bk
              }
            } : Aw, dk = await Bk(tk, kk, {
              signal: Vk.signal,
              early: Xk
            }).catch((kk => {
              throw function(kk) {
                if (!(kk instanceof ck.e)) return kk;
                if ("roomError" === kk.stage && null !== tb) return jb(new ck.e(kk.message, kk.stage, kk.code, tb), kk);
                const Fk = "closed" === kk.stage && null !== QX ? ab.get(QX.conn) : void 0;
                return void 0 === Fk ? kk : jb(new ck.e(kk.message, kk.stage, Fk.code), kk)
              }(kk)
            }));
            if (hX !== Vk) throw dk.leave(), new DOMException("the join was left", "AbortError");
            Fw(dk), null === (Ak = aX) || void 0 === Ak || Ak.newGame();
            const sk = function(kk) {
              var Fk, Bk;
              const {
                session: Rk
              } = kk, tk = void 0 === Rk ? kk.joinOptions.lobbyName : Rk.lobbyName;
              return {
                endpoint: kk.endpoint,
                game: null !== (Fk = null === Rk || void 0 === Rk ? void 0 : Rk.gameNameWithVariation) && void 0 !== Fk ? Fk : kk.roomName,
                lobby: String(null !== tk && void 0 !== tk ? tk : null),
                postCookies: null !== (Bk = kk.postCookies) && void 0 !== Bk ? Bk : null
              }
            }(kk);
            PX.set(dk, sk), SR(sk);
            const Jk = performance.now(),
              fk = {
                conn: dk.conn,
                rejoin: ak,
                game: null !== (ek = null === (yk = kk.session) || void 0 === yk ? void 0 : yk.gameNameWithVariation) && void 0 !== ek ? ek : "",
                joinedAt: Jk,
                rejoinedAt: wk ? Jk : null,
                overflow: null
              };
            pX = fk,
              function(kk, Fk) {
                Hw();
                const Bk = {
                  endpoint: Fk,
                  roomId: kk.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new VB({
                    reconnect: (kk, Fk, Rk) => async function(kk, Fk, Bk, Rk) {
                      const {
                        roomId: tk,
                        roomToken: ak
                      } = Mw(kk, Fk), Xk = qa;
                      if (null === Xk || Xk.isStopped || rb) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: bk
                      } = await nb(zb(), Bk), wk = {
                        ...Aw,
                        attachSocket: Fk => KX !== kk || 0 === kk.heldConn ? (Fk.close(), null) : iw(Fk, kk.endpoint, !0)
                      };
                      return bk(wk, kk.endpoint, tk, ak, {
                        signal: Bk,
                        onAttached: Rk
                      })
                    }(Bk, kk, Fk, Rk),
                    releaseSeat: kk => {
                      !async function(kk, Fk) {
                        const {
                          roomId: Bk,
                          roomToken: Rk
                        } = Mw(kk, Fk);
                        try {
                          const {
                            leaveHeldSeat: Fk
                          } = await zb();
                          await Fk(kk.endpoint, Bk, Rk)
                        } catch (tk) {
                          console.warn(`${Ja} the held seat of a game left while it reconnected couldn't be released`, tk)
                        }
                      }(Bk, kk)
                    },
                    isLive: () => KX === Bk && null !== pX && !rb,
                    lL: kk => {
                      lX = kk, Nw()
                    },
                    onReconnected: kk => {
                      ! function(kk) {
                        const Fk = zX;
                        if (null !== Fk && Fk !== kk) {
                          const Bk = PX.get(Fk);
                          void 0 !== Bk && PX.set(kk, Bk), Hb === Fk && (Hb = kk), Fk.detach()
                        }
                        Fw(kk)
                      }(kk)
                    },
                    onGaveUp: (kk, Fk) => {
                      ! function(kk, Fk, Bk) {
                        var Rk, tk;
                        console.warn(`${Ja} gave up reconnecting (${Bk.reason}, ${Bk.attempts} attempts)`, Bk.lastError), (0, LB.reportReconnectGaveUp)(Bk, xa);
                        const ak = null !== (Rk = null === (tk = pX) || void 0 === tk ? void 0 : tk.rejoin) && void 0 !== Rk ? Rk : null;
                        uw(kk, "gaveUp"), Rw();
                        const Xk = {
                          code: kk.dropCode,
                          name: null,
                          reason: Sa,
                          canReconnect: !Fk,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Jw(Xk, Fk ? null : ak, !1, {
                          reasonKey: Na,
                          canPlayAgain: Fk
                        })
                      }(Bk, kk, Fk)
                    }
                  })
                };
                KX = Bk, null !== xX && xX.conn === kk.conn && Bk.resume.onInitialInfo(xX)
              }(dk, kk.endpoint), performance.mark(Wa), (0, UF.g)("wasm_joined", Jk), setTimeout((() => {
                zX === dk && (0, UF.c)()
              }), 0), Zb(), console.info(`${Ja} joined ${kk.roomName} as ${dk.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const mk = IX;
            IX = null, null !== mk && Xw(fk, mk.mask, mk.frames);
            const Wk = ab.get(dk.conn);
            return ab.clear(), void 0 !== Wk && (Fw(null), Vw(dk.conn, Wk.code, Wk.reason)), dk
          } finally {
            var fk;
            null === tk || void 0 === tk || tk.removeEventListener("abort", Jk), hX === Vk && kw(zX, null), (null === (fk = QX) || void 0 === fk ? void 0 : fk.join) === Vk && (QX = null)
          }
        }(kk.target, {
          signal: bk,
          rejoin: tk(kk.target),
          early: dk,
          pageReady: Xk
        });
        return Jk = !0, {
          kind: "joined",
          game: sk
        }
      } catch (fk) {
        if (fk instanceof DOMException && "AbortError" === fk.name || wk()) return {
          kind: "yB"
        };
        if (rb) return {
          kind: "stopped"
        };
        if (Rb && (Rb = !1, await ak().catch((kk => {
            console.warn(`${Ja} the cached traffic code could not be dropped`, kk)
          }))), null === await na) return {
          kind: "stopped"
        };
        if (fk instanceof Ck.e) return Bk(fk, performance.now() - Ak), {
          kind: "failed",
          error: fk,
          reloading: !1
        };
        if (fk instanceof ck.e && fk.code === Rk.e.wasmClientNotAllowed.code && gb) return Dw("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: fk,
          reloading: !0
        };
        const kk = fk instanceof ck.e && fk.code === Rk.e.outdatedVersion.code,
          Fk = () => null === zX,
          tk = await Hd({
            site: LB.JOIN_SITE,
            error: fk,
            outdated: kk
          }, (() => {
            Bk(fk, performance.now() - Ak)
          }), Fk);
        return {
          kind: "failed",
          error: fk,
          reloading: tk
        }
      } finally {
        var yk;
        Jk || Vk.end(), jR.c.releaseHold(sk);
        const kk = null === (yk = dk) || void 0 === yk ? void 0 : yk.release();
        kk && (0, LB.reportUnusedSeat)(kk, xa)
      }
    }

    function jb(kk, Fk) {
      return kk.stack = Fk.stack, kk
    }

    function lb(kk) {
      return kk.session ? (0, Lk.l)(Ka, kk.session.gameNameWithVariation) : Promise.resolve()
    }

    function nb(kk, Fk) {
      return (0, iF.k)(Fk), new Promise(((Bk, Rk) => {
        const tk = () => {
          Rk((0, iF.e)(Fk))
        };
        Fk.addEventListener("abort", tk, {
          once: !0
        }), kk.then((kk => {
          Fk.removeEventListener("abort", tk), Bk(kk)
        }), (kk => {
          Fk.removeEventListener("abort", tk), Rk(kk)
        }))
      }))
    }

    function Ib() {
      Qb(null)
    }

    function Qb(kk) {
      var Fk, Bk, Rk;
      (function() {
        const kk = KX;
        null !== kk && uw(kk, "left")
      }(), null === FX || FX.left) || (FX.left = !0, null === (Rk = (0, Lk.g)()) || void 0 === Rk || Rk.socketLeft(), (0, Jk.u)({
        websocketUrl: null
      }));
      hX && (0, iF.i)(hX, new DOMException("the join was left", "AbortError")), Rw(null !== kk), null === (Fk = iX) || void 0 === Fk || Fk.leave();
      const tk = zX;
      null !== kk && jR.c.setGame(kk.game), kw(null, null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.controller) && void 0 !== Bk ? Bk : null), null === tk || void 0 === tk || tk.leave(), Bw(0), (0, fF.d)()
    }

    function kw(kk, Fk) {
      zX = kk, hX = Fk, null === zX && null === hX && jR.c.setGame(void 0)
    }

    function Fw(kk) {
      kw(kk, hX)
    }

    function Bw(kk) {
      const Fk = qa;
      return null !== ca && !rb && null !== Fk && !Fk.isStopped && (!!ca(ck.j, 0, (0, ck.z)(kk)) && (gX = !0, 0 === kk || HX || Xd(Fk, !1, "all"), !0))
    }

    function Rw() {
      var kk, Fk;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, iB.d)();
      const Bk = null !== (kk = null === (Fk = pX) || void 0 === Fk ? void 0 : Fk.overflow) && void 0 !== kk ? kk : null;
      pX = null, null !== Bk && (0, LB.reportEventOverflow)(Bk, xa)
    }

    function tw() {
      null !== zX || null !== hX ? Ib() : Yw()
    }

    function aw(kk, Fk) {
      console.warn(`${Ja} the event buffer refused records in ${Fk} frames (categories ${kk})`), rb || (null !== pX ? Xw(pX, kk, Fk) : null !== hX && function(kk, Fk, Bk) {
        var Rk;
        const tk = function(kk, Fk) {
          return null === kk ? "drop" : kk.activated ? "keep" : 0 !== (Fk & hF.m.NetSession) ? "fail" : "drop"
        }((null === (Rk = QX) || void 0 === Rk ? void 0 : Rk.join) === kk ? QX : null, Fk);
        "keep" === tk ? IX = {
          mask: Fk,
          frames: Bk
        } : "fail" === tk && (0, iF.i)(kk, new Error("the join's net session was lost to an event overflow"))
      }(hX, kk, Fk))
    }

    function Xw(kk, Fk, Bk) {
      const Rk = kk.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Rk.frames += Bk, Rk.acks++, Rk.mask |= Fk;
      const tk = function(kk, Fk, Bk) {
        if (0 === (kk & hF.m.NetSession)) return "none";
        const Rk = null !== Fk.rejoinedAt && Bk - Fk.rejoinedAt < WR;
        return null === Fk.rejoin || Rk ? "fail" : "rejoin"
      }(Fk, kk, performance.now());
      "none" !== tk && queueMicrotask((() => {
        if (pX !== kk) return;
        const Fk = "rejoin" === tk && performance.now() - kb >= Uk.e;
        Rk.outcome = Fk ? "rejoined" : "failed", Jw(function(kk, Fk) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: kk,
            automaticallyReconnect: Fk,
            requiresRefresh: !1
          }
        }(null !== kk.rejoin, Fk), kk.rejoin, Fk), Ib(), Fk && (nX = performance.now())
      }))
    }

    function bw(kk) {
      Ub = kk, cb && ww(cb, kk)
    }

    function ww(kk, Fk) {
      kk.style.visibility = Fk ? "visible" : "hidden"
    }

    function dw(kk) {
      var Fk;
      const Bk = kk.roomName,
        Rk = null !== (Fk = kk.joinOptions.lobbyName) && void 0 !== Fk ? Fk : null;
      return () => {
        Kb(Bk, Rk)
      }
    }

    function sw() {
      return Bk.e(342).then((() => Bk(42762))).then((kk => {
        let {
          invalidateGuestTrafficCode: Fk
        } = kk;
        return Fk()
      })).catch((kk => {
        console.warn(`${Ja} the cached traffic code could not be dropped`, kk)
      }))
    }

    function Vw(kk, Fk, Bk) {
      var tk, ak;
      let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (rb) return;
      if ((null === (tk = pX) || void 0 === tk ? void 0 : tk.conn) !== kk) return void(null !== hX && ab.set(kk, {
        code: Fk,
        reason: Bk
      }));
      const {
        rejoin: bk,
        game: wk,
        joinedAt: dk
      } = pX;
      Rw(), Hw();
      const sk = (0, Uk.g)(Fk, (0, iR.c)(kk));
      if (console.info(`${Ja} the game's connection closed with code ${Fk} (${null!==(ak=sk.name)&&void 0!==ak?ak:"unrecognised"})`), Fk === Rk.e.gameOrPluginKick.code || Xk || (0, LB.reportDisconnect)(sk, xa, {
          closeReason: Bk,
          sinceJoinedMs: performance.now() - dk,
          game: wk
        }), sk.requiresRefresh) {
        const kk = "outdatedVersion" === sk.name,
          Bk = new Error(`the game's connection closed with code ${Fk}`),
          Rk = () => null === pX && null === hX;
        return void Hd({
          site: LB.JOIN_SITE,
          error: Bk,
          outdated: kk
        }, (() => {
          Rk() && Jw(sk, null, !1)
        }), Rk)
      }
      const Vk = sk.canReconnect ? bk : null,
        Jk = null !== Vk && sk.automaticallyReconnect && performance.now() - kb >= Uk.e;
      Jw(sk, Vk, Jk)
    }

    function Jw(kk, Fk, Bk) {
      var Rk;
      let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (Gb) return;
      jR.c.unwantedLeave(Bk && null !== Fk && 0 === Bb.size), null === (Rk = Fb) || void 0 === Rk || Rk.abort();
      const ak = new AbortController;
      Fb = ak;
      const Xk = null === Fk ? null : () => {
        ak.signal.aborted || (ak.abort(), Fk())
      };
      if (Bk && null !== Xk) {
        kb = performance.now();
        const kk = setTimeout(Xk, Uk.b);
        ak.signal.addEventListener("abort", (() => {
          clearTimeout(kk)
        }))
      }
      const bk = {
        code: kk.code,
        name: kk.name,
        reason: kk.reason,
        reasonKey: tk.reasonKey,
        reconnect: Xk,
        reconnecting: Bk,
        requiresRefresh: kk.requiresRefresh,
        canPlayAgain: tk.canPlayAgain
      };
      if (Bb.size > 0)
        for (const dk of [...Bb]) try {
          dk(bk)
        } catch (wk) {
          console.error(`${Ja} an unwanted-leave listener threw`, wk)
        } else yR((0, JR.h)(kk, null !== Xk, Bk), ak.signal).then((Fk => {
          Fk && (null !== Xk ? Xk() : kk.requiresRefresh && (0, Zk.k)())
        }))
    }
    const Aw = {
      attachSocket: kk => iw(kk),
      onConnection: kk => (Xb.add(kk), () => {
        Xb.delete(kk)
      }),
      sendRaw: (kk, Fk) => {
        const Bk = FX;
        return null !== Bk && Bk.conn === kk && yd(Bk, Fk)
      },
      leaveRoom: Bw,
      closeSocket: kk => {
        var Fk;
        (null === (Fk = FX) || void 0 === Fk ? void 0 : Fk.conn) === kk && Yw()
      },
      flushNet: ow
    };

    function ew(kk) {
      var Fk;
      let {
        aux: Bk,
        payload: Rk
      } = kk;
      null === (Fk = qa) || void 0 === Fk || Fk.queueOptions(Bk, Rk)
    }

    function yw(kk, Fk) {
      ew(function(kk, Fk) {
        return wt = kk ? {
          preventMovement: Fk
        } : null, kk ? dt(Fk) : {
          aux: PF.Hb.AdEnd,
          payload: bt
        }
      }(kk, Fk))
    }

    function fw(kk) {
      var Fk;
      TX = kk, null === (Fk = qa) || void 0 === Fk || Fk.setUiPrefs(kk)
    }

    function mw(kk, Fk) {
      Ka.setMaster(kk, Fk)
    }

    function Ww(kk) {
      var Fk;
      rX = kk, null === (Fk = qa) || void 0 === Fk || Fk.setEnvPrefs(kk)
    }

    function vw(kk) {
      var Fk;
      DX = kk, null === (Fk = qa) || void 0 === Fk || Fk.setLookPrefs(kk)
    }

    function iw(kk) {
      var Fk;
      let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(kk.url).origin,
        Rk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (kk.readyState === WebSocket.CLOSING || kk.readyState === WebSocket.CLOSED) return console.warn(`${Ja} a closing or closed socket can't be attached`), null;
      const tk = qa;
      if (!tk || tk.isStopped) return console.warn(`${Ja} no core is running to attach a socket to`), kk.close(), null;
      if (null === (0, Lk.g)()) return console.warn(`${Ja} the game has not started to attach a socket to`), kk.close(), null;
      if (EX > PF.q) return console.warn(`${Ja} this core has attached all the sockets it can; reload to play on`), kk.close(), null;
      if (gX && !HX && (Xd(tk, !1, "all"), tk.isStopped || rb)) return kk.close(), null;
      Yw();
      const ak = EX++;
      if (!Gw(tk, "open", ak, Rk ? PF.Eb.Resume : 0)) return kk.close(), null;
      Rk || yF.b.reset(), QX = null === hX ? null : {
        join: hX,
        conn: ak,
        activated: !1
      }, kk.binaryType = "arraybuffer";
      const Xk = new JB.e((() => {
          ! function(kk, Fk) {
            if (FX !== Fk || kk.isStopped || null === Ew(Fk, Oa)) return;
            Fk.detach(), FX = null, Ow(kk, Fk, Oa, "", !0), Fk.ws.close()
          }(tk, bk)
        })),
        bk = {
          ws: kk,
          conn: ak,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Rk,
          token: null,
          detach: () => {
            Xk.dispose(), kk.removeEventListener("message", wk), kk.removeEventListener("open", dk), kk.removeEventListener("close", sk)
          }
        },
        wk = kk => {
          if (kk.data instanceof ArrayBuffer) {
            var Fk;
            const Bk = new Uint8Array(kk.data);
            Xk.heard(), bk.token = null !== (Fk = (0, AB.c)(Bk)) && void 0 !== Fk ? Fk : bk.token,
              function(kk, Fk, Bk) {
                Od(kk, (() => {
                  kk.rings.net.writeFrame(Fk, Bk) || kk.crash(FB.q, `a socket frame of ${Bk.byteLength} bytes did not fit the net-in ring`)
                }));
                const Rk = kk.rings.net.cursor >= oa;
                (Rk || kk.netWrittenSinceFrame >= Ya || document.hidden && performance.now() - SX >= Ma) && Xd(kk, !1, "budget")
              }(tk, ak, Bk)
          }
        },
        dk = () => {
          Rk || (0, UF.g)("wasm_socket_open", performance.now());
          for (const Fk of bk.pending.splice(0)) kk.send(Fk);
          bk.pendingBytes = 0
        },
        sk = kk => {
          if (FX === bk && tk.rings.net.cursor > 0 && Xd(tk, !1, "all"), FX === bk) {
            if (bk.detach(), FX = null, Ow(tk, bk, kk.code, kk.reason) || Lw(tk, bk)) return;
            Gw(tk, "close", ak), Sw(ak, bk.left), Vw(ak, kk.code, kk.reason)
          }
        };
      return kk.addEventListener("message", wk), kk.addEventListener("open", dk), kk.addEventListener("close", sk), FX = bk, null === (Fk = (0, Lk.g)()) || void 0 === Fk || Fk.socketAttached(ak), (0, Jk.u)({
        websocketUrl: Bk
      }), ak
    }

    function Yw() {
      const kk = FX;
      if (!kk) return;
      const Fk = qa,
        Bk = kk.resume;
      Bk && (ow(), FX !== kk) || (FX = null, kk.detach(), kk.ws.close(), null !== Fk && (Lw(Fk, kk) || Bk && Ow(Fk, kk, Ea)) || (null !== Fk && Gw(Fk, "close", kk.conn), Sw(kk.conn, kk.left)))
    }

    function ow() {
      const kk = qa;
      null !== kk && !kk.isStopped && !rb && !HX && kk.rings.net.cursor > 0 && Xd(kk, !1, "all")
    }

    function Lw(kk, Fk) {
      var Bk;
      if (!Fk.resume) return !1;
      const Rk = KX;
      return null !== Rk && null !== Fk.token && "" !== Fk.token && (Rk.pendingHold = {
        conn: Fk.conn,
        token: `${Rk.roomId}:${Fk.token}`
      }), Gw(kk, "close", Fk.conn), null === (Bk = (0, Lk.g)()) || void 0 === Bk || Bk.socketDetached(Fk.conn), !0
    }

    function Ow(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const ak = Ew(Fk, Bk);
      if (null === ak) return !1;
      const {
        Hb: Xk,
        token: bk,
        game: wk,
        joinedAt: dk
      } = ak;
      if (!Gw(kk, "close", Fk.conn, PF.u.Held)) return !0;
      console.warn(`${Ja} the game's connection ${tk?"went silent":`dropped with code ${Bk}`}, holding it`);
      const sk = {
        closeReason: Rk,
        sinceJoinedMs: performance.now() - dk,
        game: wk
      };
      return (0, LB.reportDisconnect)((0, Uk.g)(Bk), xa, sk, tk ? "silent" : void 0), Xk.heldConn = Fk.conn, Xk.dropCode = Bk, Xk.pendingHold = {
        conn: Fk.conn,
        token: `${Xk.roomId}:${bk}`
      }, HX || Xd(kk, !1, "all"), !0
    }

    function Ew(kk, Fk) {
      const Bk = KX,
        tk = pX,
        ak = kk.token;
      return null === Bk || null === tk || rb || kk.left || tk.conn !== kk.conn || null === ak || "" === ak ? null : (0, Rk.l)(Fk) && Bk.resume.canHoldSeat() ? {
        Hb: Bk,
        token: ak,
        game: tk.game,
        joinedAt: tk.joinedAt
      } : null
    }

    function Sw(kk, Fk) {
      var Bk;
      null === (Bk = (0, Lk.g)()) || void 0 === Bk || Bk.closeGame(kk), (0, Xt.c)().close(kk), Fk || (0, Jk.u)({
        websocketUrl: null
      })
    }

    function Nw() {
      const kk = lX;
      if (null === kk) return;
      const Fk = (0, Lk.g)();
      rb || null === Fk || Fk.lL(kk) ? lX = null : performance.now() - UX.pause >= ua && (UX.pause = performance.now(), console.warn(`${Ja} the cmd ring had no room for SetPaused(${kk}): written before the next frame`))
    }

    function Hw() {
      const kk = KX;
      KX = null, null === kk || void 0 === kk || kk.resume.dispose()
    }

    function uw(kk, Fk) {
      var Bk, Rk;
      const {
        heldConn: tk
      } = kk, ak = kk.resume.resumingConn;
      kk.heldConn = 0, kk.pendingHold = null, KX === kk && (KX = null), "left" === Fk ? kk.resume.leave() : kk.resume.dispose(), 0 === jX || (null === (Bk = FX) || void 0 === Bk ? void 0 : Bk.conn) !== jX || "left" === Fk && (null === (Rk = zX) || void 0 === Rk ? void 0 : Rk.conn) === jX || Uw(jX), "gaveUp" === Fk && 0 !== ak && Uw(ak), 0 !== tk && "refused" !== Fk && (console.info(`${Ja} the game held through its drop ${"left"===Fk?"was left":"is given up"}`), null === qa || qa.isStopped || Gw(qa, "close", tk), Sw(tk, !1))
    }

    function Mw(kk, Fk) {
      const Bk = Fk.indexOf(":");
      return {
        roomId: Bk < 0 ? kk.roomId : Fk.slice(0, Bk),
        roomToken: Fk.slice(Bk + 1)
      }
    }

    function gw(kk) {
      var Fk;
      xX = kk, kk.conn === jX && (jX = 0);
      const Bk = KX;
      null !== Bk && (null === (Fk = pX) || void 0 === Fk ? void 0 : Fk.conn) === kk.conn && Bk.resume.onInitialInfo(kk)
    }

    function Uw(kk) {
      var Fk;
      const Bk = FX;
      (null === Bk || void 0 === Bk ? void 0 : Bk.conn) === kk && (Bk.left = !0, null === (Fk = (0, Lk.g)()) || void 0 === Fk || Fk.socketLeft(), (0, Jk.u)({
        websocketUrl: null
      }), Bw(kk) ? setTimeout((() => {
        FX === Bk && Yw()
      }), ck.i) : Yw())
    }

    function Gw(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tk = !1;
      return Od(kk, (() => {
        const {
          net: ak
        } = kk.rings;
        tk = "open" === Fk ? ak.writeOpen(Bk, Rk) : ak.writeClose(Bk, Rk), tk || kk.crash(FB.q, `a socket ${Fk} did not fit the net-in ring`)
      })), tk
    }

    function Tw(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (rw()) {
        const Rk = "browser" === kk && (0, tt.T)() ? "blockedAfterLoss" : "unsupported";
        return (0, LB.reportUnsupportedFallback)(kk, Rk, Fk, Bk), void Dw(`the wasm client can't run here (${Fk}; ${Rk})`, Rk)
      }(0, LB.showUnsupported)(kk, "unsupported", Fk, Bk)
    }

    function rw() {
      return gb && "wasm" !== (0, JF.e)(window.location.search)
    }

    function Dw(kk, Fk) {
      console.warn(`${Ja} ${kk}: reloading on the JS client`), null !== Fk && (0, JF.o)(Fk), (0, JF.k)(null === Fk ? "reloadOntoJs" : "decline");
      const Bk = () => {
        (0, Zk.i)(JF.t)
      };
      (0, LB.flushCrashReports)(Zk.e).then(Bk, Bk)
    }

    function zw(kk, Fk, Bk, Rk) {
      return sb(kk, Fk, Bk, Rk)
    }

    function Pw() {
      null === Ab || null === qa || qa.isStopped || rb || null !== fX || null === ca || (fX = Ab(ca, Zw, pw().follow))
    }

    function hw() {
      var kk, Fk, Bk;
      return null !== (kk = null === (Fk = Za) || void 0 === Fk || null === (Bk = Fk.textures) || void 0 === Bk ? void 0 : Bk.files()) && void 0 !== kk ? kk : null
    }

    function qw(kk) {
      Bk.e(260).then((() => Bk(40150))).then((Fk => {
        let {
          setIconFileOverrides: Bk
        } = Fk;
        Bk(kk)
      }), (kk => {
        console.warn(`${Ja} the item icons couldn't take the texture pack's files`, kk)
      }))
    }

    function Cw(kk) {
      pw().follow((Fk => {
        null !== Fk && Promise.all([Promise.all([Bk.e(193), Bk.e(45)]).then((() => Bk(42797))), (0, tt.P)()]).then((kk => {
          let [{
            followPagePackFiles: Bk
          }, Rk] = kk;
          const tk = null === Rk || (0, kB.k)(Rk) ? "webgl" : Rk.backend;
          Bk(Fk, xR.h, tk, (kk => {
            xR.h.setPageFiles(kk)
          }), Zw)
        }), (Fk => {
          console.warn(`${Ja} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Fk), kk()
        }))
      }))
    }

    function Zw(kk, Fk) {
      console.warn(`${Ja} ${kk}`, Fk)
    }

    function pw() {
      return Ca ??= new Yt({
        load: kk => Promise.all([Bk.e(193), Bk.e(51)]).then((() => Bk(42800))).then((Fk => {
          let {
            startPageTexturePackFeed: Bk
          } = Fk;
          return Bk(Zw, kk)
        })),
        store: oB.f,
        ve: kk => {
          na.then((() => {
            (0, LB.reportTexturePackFeedLoadFailure)(kk, xa)
          }))
        }
      }), Ca
    }
    const Kw = kk => pw().follow(kk);

    function xw() {
      return pw().loaded()
    }
    const jw = function(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          tk = 0;
        return async function(ak, Xk) {
          let bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const wk = ++tk,
            dk = Rk() + Fk,
            sk = await
          function(kk, Fk) {
            let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Rk => {
              const tk = setTimeout((() => {
                Rk(null), kk.then((kk => {
                  null !== kk && (kk.joinedWithout(), Bk(kk))
                }))
              }), Fk);
              kk.then((kk => {
                clearTimeout(tk), Rk(kk)
              }))
            }))
          }(kk(ak), Fk, (kk => {
            wk === tk && bk() && Xk(kk, Rk() + Fk).catch((kk => {
              Bk("the texture pack step after the join failed", kk)
            }))
          }));
          return null === sk ? null : Xk(sk, dk)
        }
      }((kk => (0, RF.n)(kk) ? pw().request() : pw().forJoin()), it.d, Zw),
      lw = function(kk, Fk) {
        let Bk = !1;
        return {
          setGamePackConfirm: kk => {
            Bk = null !== kk, Fk(kk)
          },
          packStep: (Fk, Rk, tk) => kk(Fk, Rk, (() => Bk && tk()))
        }
      }(jw, (kk => {
        pw().setGamePackConfirm(kk)
      }));

    function nw(kk) {
      lw.setGamePackConfirm(kk)
    }

    function Iw() {
      if (rb || null !== Wb || null === eb || null === mb) return;
      const {
        backend: kk,
        canvas: Fk,
        fallbackReason: Bk,
        adapterVendor: Rk
      } = mb, tk = eb;
      eb = null;
      try {
        Wb = tk({
          backend: kk,
          canvas: Fk,
          fallbackReason: Bk,
          adapterVendor: Rk,
          joinedGame: () => rb ? null : zX,
          inGame: kd,
          shaderPackReach: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = iX) || void 0 === Fk ? void 0 : Fk.reachInJoinedGame()) && void 0 !== kk ? kk : null
          },
          msaa: () => fb > 1,
          writeCmd: (kk, Fk, Bk) => null !== ca && ca(kk, Fk, Bk),
          takeFailedMeshJobs: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = aX) || void 0 === Fk ? void 0 : Fk.takeFailedMeshJobs()) && void 0 !== kk ? kk : 0
          }
        })
      } catch (ak) {
        console.error(`${Ja} the frame telemetry didn't start`, ak)
      }
    }

    function Qw(kk, Fk) {
      try {
        var Bk, Rk, tk;
        const ak = bb && null !== (Bk = null === (Rk = qa) || void 0 === Rk || null === (tk = Rk.lastHeader) || void 0 === tk ? void 0 : tk.renderPending) && void 0 !== Bk ? Bk : 0;
        (0, KB.h)(Fk, kk, kd() && !(null !== wt), ak)
      } catch (ak) {
        (0, KB.s)(), console.error(`${Ja} the quality steps stopped`, ak)
      }
    }

    function kd() {
      return null !== zX && Hb === zX && !rb
    }

    function Fd(kk) {
      const Fk = Wb;
      Wb = null;
      try {
        null === Fk || void 0 === Fk || Fk.stop()
      } catch {}
      console.error(`${Ja} the frame telemetry threw: it stops`, kk)
    }

    function Bd(kk) {
      var Fk, Bk, Rk, tk;
      if ((0, Xt.c)().fire(kk), "message" === kk.type) {
        if (uX++, kk.UX === PF.ec.ERROR && null !== hX) {
          var ak;
          const {
            text: Fk,
            dropsCache: Bk
          } = (0, Uk.l)((new TextDecoder).decode(kk.payload));
          Rb ||= Bk, (null === (ak = QX) || void 0 === ak ? void 0 : ak.conn) === kk.conn && (tb = Fk)
        } else if (kk.UX === hF.Tb.ResumeComplete) {
          var Xk;
          null === (Xk = KX) || void 0 === Xk || Xk.resume.onResumeComplete(kk.conn)
        }
        return
      }
      kk.phase === PF.y.Left ? MX = kk.conn : kk.phase === PF.y.Activated && (null === (Fk = QX) || void 0 === Fk ? void 0 : Fk.conn) === kk.conn ? QX.activated = !0 : kk.phase === PF.y.Resumed ? function(kk) {
        var Fk, Bk;
        jX = kk;
        const Rk = KX;
        if (null === Rk || 0 === Rk.heldConn || (null === (Fk = FX) || void 0 === Fk ? void 0 : Fk.conn) !== kk || !FX.resume || null === pX) return;
        console.info(`${Ja} the game resumed on conn ${kk}, waiting for its InitialInfo`);
        const tk = Rk.heldConn;
        Rk.heldConn = 0, FX.resume = !1, pX.conn = kk, (null === (Bk = CX) || void 0 === Bk ? void 0 : Bk.conn) === tk && (CX = {
          conn: kk,
          info: CX.info
        }), yF.b.apply({
          shopInfo: null,
          _shopVersion: tF.d
        })
      }(kk.conn) : kk.phase === PF.y.Held ? function(kk) {
        var Fk;
        const Bk = KX,
          Rk = null !== (Fk = null === Bk || void 0 === Bk ? void 0 : Bk.pendingHold) && void 0 !== Fk ? Fk : null;
        if (null !== Bk && null !== Rk && Rk.conn === kk) return Bk.pendingHold = null, Bk.heldConn = kk, jX = 0, console.warn(`${Ja} the core holds the game, reconnecting`), void Bk.resume.onDropped(Rk.token);
        if (kk === jX) {
          jX = 0;
          const Fk = qa;
          null === Fk || Fk.isStopped || (console.info(`${Ja} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Gw(Fk, "close", kk))
        }
      }(kk.conn) : kk.phase === PF.y.Closed && (null === (Bk = KX) || void 0 === Bk || null === (Rk = Bk.pendingHold) || void 0 === Rk ? void 0 : Rk.conn) === kk.conn && (KX.heldConn === kk.conn ? function(kk) {
        const Fk = kk.heldConn,
          Bk = kk.dropCode;
        uw(kk, "refused"), console.info(`${Ja} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          Sw(Fk, !1), Vw(Fk, Bk, "", !0)
        }))
      }(KX) : KX.pendingHold = null);
      const bk = Object.keys(PF.y).find((Fk => PF.y[Fk] === kk.phase)),
        wk = 0 === kk.code ? "" : ` (code ${kk.code})`;
      console.info(`${Ja} conn ${kk.conn}: ${null!==bk&&void 0!==bk?bk:kk.phase}${wk}, ${uX} raw messages so far`), (null === (tk = zX) || void 0 === tk ? void 0 : tk.conn) !== kk.conn || kk.phase !== PF.y.Left && kk.phase !== PF.y.Closed || Fw(null), qX !== kk.conn || kk.phase !== PF.y.Left && kk.phase !== PF.y.Closed || (qX = null, null === zX && null === hX && jR.c.setGame(void 0));
      for (const sk of [...Xb]) try {
        sk(kk.conn, kk.phase, kk.code)
      } catch (dk) {
        (0, qF.r)(dk, `${Ja} a connection listener threw`)
      }
    }

    function Rd() {
      (0, tt.u)(), queueMicrotask((() => {
        try {
          fd()
        } catch (kk) {
          console.warn(`${Ja} stopping before the reload threw`, kk)
        }(0, LB.flushCrashReports)(Zk.e).then(Zk.k, Zk.k)
      }))
    }

    function td() {
      const kk = qa;
      null === kk || kk.isStopped || null === FX || HX || !kk.hasPendingCommands() || Xd(kk, !1, "budget")
    }

    function ad(kk) {
      var Fk;
      const Bk = zX;
      kk.persisted || null === Bk || (null === (Fk = FX) || void 0 === Fk ? void 0 : Fk.conn) !== Bk.conn || FX.left || Bk.leave()
    }

    function Xd(kk, Fk, Rk) {
      let tk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ak = HX;
      HX = !0;
      try {
        return function(kk, Fk, Rk, tk) {
          var ak, Xk, bk, wk;
          if (rb) return !1;
          if (Od(kk, wd), rb || kk.isStopped) return !1;
          Ad() && LX("modelsIn");
          Nw(), SX = performance.now(), MX = null, gX = !1, (0, Yk.N)(), null === (ak = VX) || void 0 === ak || ak.beforeFrame(), bR(SX, kk), (0, Yk.D)(SX, dd), NX = !0;
          const dk = Fk && Jd();
          let sk;
          try {
            sk = kk.frame(SX, dk, Rk)
          } finally {
            NX = !1
          }
          if (!sk) return !1;
          yb.observe(null !== (Xk = null === (bk = kk.lastHeader) || void 0 === bk ? void 0 : bk.chunksCancelled) && void 0 !== Xk ? Xk : 0);
          const Vk = kk.lastFrameKind,
            Jk = (0, NF.d)(Vk);
          (function(kk) {
            null !== rt && rt.afterFrame(performance.now(), kk)
          })(Jk), null === (wk = vb) || void 0 === wk || wk.frame(kk, SX, Vk), Fk && (ub = Jk);
          Jk && (0, OF.b)(SX);
          if (null !== Wb) try {
            Wb.frameRan(kk, SX, performance.now(), Vk)
          } catch (ek) {
            Fd(ek)
          }
          "drawn" === Vk && Vd() && function() {
            for (const kk of [...Bt]) kk()
          }();
          kk.forEachNetOut(ed);
          const Ak = FX;
          null !== MX && (null === Ak || void 0 === Ak ? void 0 : Ak.conn) === MX && yd(Ak, ck.k);
          (function(kk) {
            var Fk;
            if (ob) return;
            null === Eb && Jd() && (Eb = performance.now());
            if (null === hX && null === zX) return;
            null === Eb || Sb || (Sb = !0, (0, UF.g)("wasm_startup_loaded", Eb));
            let Bk = 0;
            null !== zX ? Bk = -1 : !0 === (null === (Fk = QX) || void 0 === Fk ? void 0 : Fk.activated) && (Bk = ~hF.F.TerrainDrawn);
            const Rk = kk.headerWord(hF.z.LoadSteps) & Bk & ~Ob;
            if (0 === Rk) return;
            Ob |= Rk;
            const tk = performance.now();
            for (const [ak, Xk] of Object.entries(sd)) 0 !== (Rk & hF.F[ak]) && (0, UF.g)(Xk, tk)
          })(kk), Fk && function(kk) {
            var Fk, Rk, tk;
            if (null === zX || !Jd()) return;
            null === Nb || Hb === zX && !Nb.frame(SX, 0 !== (kk.headerWord(hF.z.LoadSteps) & hF.F.TerrainDrawn)) || (Nb = null);
            const ak = kk.lastHeader,
              Xk = !bb || 0 === (null === ak || void 0 === ak ? void 0 : ak.renderPending);
            !Lb && Xk && (Lb = !0, performance.mark(ia));
            if (Hb === zX) return;
            const bk = null !== (Fk = null === ak || void 0 === ak ? void 0 : ak.firstView) && void 0 !== Fk ? Fk : PF.P.NotYet;
            if (bb && bk === PF.P.NotYet) return;
            if (ob && (!0 !== (null === (Rk = (0, Lk.g)()) || void 0 === Rk ? void 0 : Rk.isSessionLive) || !Xk)) return;
            Hb = zX;
            const wk = zX;
            if (setTimeout((() => {
                zX === wk && (0, UF.e)()
              }), 0), null === (tk = iX) || void 0 === tk || tk.playable(), function() {
                clearTimeout(kX), kX = setTimeout((() => {
                  kd() && Nd((kk => {
                    let {
                      prefetchWorldgenWorker: Fk
                    } = kk;
                    Fk()
                  }))
                }), Ua)
              }(), ob) return;
            ob = !0, performance.mark(va), (0, ut.p)("render") && Promise.all([Bk.e(74), Bk.e(47)]).then((() => Bk(4416))).then((kk => {
              let {
                renderDebugPlayable: Fk
              } = kk;
              Fk()
            }), (kk => {
              console.warn("The render debug topic didn't load", kk)
            }));
            const dk = Math.round(performance.now());
            if (bb && bk !== PF.P.Drawn) {
              const kk = bk === PF.P.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${Ja} playable at ${dk} ms on the first view's ${kk} backstop: it wasn't drawn whole in time`), (0, UF.g)("wasm_view_backstop", dk, kk), "long" === kk) {
                var sk, Vk;
                const kk = null !== (sk = null === (Vk = pX) || void 0 === Vk ? void 0 : Vk.game) && void 0 !== sk ? sk : "";
                Nb = new OB.c((() => {
                  (0, LB.reportFirstViewNoTerrain)(kk, xa)
                }))
              }
            } else console.info(`${Ja} playable at ${dk} ms${bb?"":" (no renderer)"}`);
            setTimeout(Jb, 0), (0, mF.e)().catch((kk => {
              console.error(`${Ja} item sprites didn't load, so item particles show the missing texture`, kk)
            })), PR.b.warm()
          }(kk);
          (0, FB.J)(kk, {
            worldgen: RX,
            mesh: aX
          }),
          function(kk) {
            kk.forEachEvent(dR);
            for (const Fk of wR) try {
              (0, BR.d)(Fk)
            } catch (ek) {
              if ((0, qF.h)(ek)) {
                kk.crashOn(FB.i, ek);
                break
              }
              console.error(`${tR} an input action listener threw`, ek)
            }
            wR.length = 0
          }(kk), tk && (0, SF.c)();
          return !kk.isStopped
        }(kk, Fk, "all" === Rk || kk.rings.net.cursor >= oa || kk.netKeptFrames >= La, tk)
      } finally {
        HX = ak
      }
    }

    function bd(kk) {
      console.error(`${Ja} a frame-start listener threw`, kk)
    }

    function wd() {
      var kk, Fk, Bk, Rk;
      null === (kk = AX) || void 0 === kk || kk.drain(ca, Ga), null === (Fk = mX) || void 0 === Fk || Fk.drain(ca), null === (Bk = WX) || void 0 === Bk || Bk.drain(performance.now()), Vb(ca), null === (Rk = fX) || void 0 === Rk || Rk.drain()
    }

    function dd(kk) {
      console.error(`${Ja} a before-frame listener threw`, kk)
    }
    const sd = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Vd() {
      return bb && Jd()
    }

    function Jd() {
      return vX && Ad()
    }

    function Ad() {
      return null === AX || AX.startupDone
    }

    function ed(kk, Fk) {
      const Bk = FX;
      (null === Bk || void 0 === Bk ? void 0 : Bk.conn) === kk ? yd(Bk, Fk) : GX++
    }

    function yd(kk, Fk) {
      const {
        ws: Bk
      } = kk;
      return Bk.readyState === WebSocket.OPEN ? (Bk.send(Fk), !0) : Bk.readyState === WebSocket.CONNECTING && kk.pendingBytes + Fk.byteLength <= Ha ? (kk.pending.push(Fk.slice()), kk.pendingBytes += Fk.byteLength, !0) : (GX++, !1)
    }

    function fd() {
      var kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk;
      rb = !0, Mb.stop(), (0, gt.d)(), rt = null, Hw(), (0, Yk.J)().unlockPointer(), (0, Yk.G)(null), null === (kk = JX) || void 0 === kk || kk(), JX = null, null === (Fk = (0, Lk.n)()) || void 0 === Fk || Fk.followCursorAim(null), (0, SF.C)(), (0, Lk.d)(), Ka.stop(), null === (Bk = ib) || void 0 === Bk || Bk(), ib = null, null === (Rk = Yb) || void 0 === Rk || Rk(), Yb = null, null === (tk = Wb) || void 0 === tk || tk.stop(), Wb = null, (0, SB.j)(null), null === (ak = BX) || void 0 === ak || ak(), BX = null, null === (Xk = RX) || void 0 === Xk || Xk.stop(), RX = null, null === (bk = aX) || void 0 === bk || bk.stop(), aX = null, null !== (wk = Za) && void 0 !== wk && null !== (dk = wk.textures) && void 0 !== dk && dk.assets && qw(null), null === (sk = Za) || void 0 === sk || sk.stop(), Za = null, pa = null;
      const mk = XX;
      XX = null, mk && (mk.stop(), Ld(mk)), null === (Vk = mX) || void 0 === Vk || Vk.dispose(), mX = null, null === (Jk = WX) || void 0 === Jk || Jk.dispose(), WX = null, AX = null, null === (Ak = yX) || void 0 === Ak || Ak(), yX = null, null === (ek = sX) || void 0 === ek || ek(), sX = null, null === (yk = VX) || void 0 === yk || yk.stop(), VX = null, Ib(), jR.c.release(), Yw();
      const Wk = fX;
      fX = null;
      try {
        null === Wk || void 0 === Wk || Wk.dispose()
      } catch (vk) {
        console.warn(`${Ja} the sky's images didn't release`, vk)
      }(0, hR.f)(null), null === (fk = Pa) || void 0 === fk || fk.pagePreviews().endSession(null === (0, XF.i)())
    }

    function md(kk, Fk) {
      var Bk, Rk;
      const tk = null !== (Bk = null === (Rk = XX) || void 0 === Rk ? void 0 : Rk.details()) && void 0 !== Bk ? Bk : {},
        ak = kk.site === ea || kk.site === ya || kk.site === LB.RENDER_RELOAD_SITE || kk.site === fa ? kk.error instanceof WebAssembly.RuntimeError || kk.error instanceof lF.d : !(0, kB.m)(kk.error) && (0, FB.D)(kk);
      ak && kk.error instanceof Error && (0, XF.P)(kk.error);
      const Xk = ak || kk.site === FB.r ? (0, LB.readTrap)(kk.error) : null,
        bk = null !== Xk && (0, CF.e)(Xk.kind, Xk.refusedBytes) ? Xk.refusedBytes : 0,
        wk = null === bX ? (0, rR.p)(function() {
          try {
            return (0, XF.p)().buffer.byteLength
          } catch {
            return 0
          }
        }(), bk, null) : bX.ceilingMayRefuse(bk),
        dk = bk > 0 && !wk && rw();
      var sk;
      if (dk && ((0, JF.o)("oom"), (0, JF.k)("decline"), Tb = !0), fd(), (0, tt.e)()) return console.warn(`${Ja} the session stopped at ${kk.site} as the page reloads`, kk.error), void((0, kB.m)(kk.error) || (null === (sk = kk.header) || void 0 === sk ? void 0 : sk.lastError) === PF.B.CoreBusy || (0, LB.reportStoppedCore)(kk, Fk, Xk, {
        memoryDetails: tk,
        declined: dk
      }));
      (0, LB.showCrash)(kk, Fk, Xk, {
        memoryDetails: tk,
        declined: dk
      })
    }

    function Wd(kk) {
      const {
        input: Fk,
        net: Bk,
        worker: Rk
      } = kk.rings, tk = kk.optionsDropped, ak = Fk.dropped + tk + Bk.dropped + Rk.dropped + GX;
      ak !== cX && function(kk, Fk) {
        const Bk = performance.now();
        return !(Bk - UX[kk] < ua) && (UX[kk] = Bk, console.warn(`${Ja} ${Fk}`), !0)
      }("dropped", `${ak} records dropped so far (input ${Fk.dropped}, options ${tk}, net ${Bk.dropped}, worker ${Rk.dropped}, net-out ${GX})`) && (cX = ak)
    }

    function vd() {
      var kk, Fk;
      const Bk = (0, vB.b)();
      if (null === Bk) return null;
      const Rk = (0, YB.j)(Bk);
      return {
        ...Rk,
        horizontal: Math.min(Rk.horizontal, null !== (kk = null === (Fk = XX) || void 0 === Fk ? void 0 : Fk.shedDistanceInUse()) && void 0 !== kk ? kk : 1 / 0)
      }
    }

    function Yd(kk) {
      var Fk, Bk;
      return {
        samples: bb ? fb : null,
        sunShadows: kk,
        renderDistance: null !== (Fk = null === (Bk = vd()) || void 0 === Bk ? void 0 : Bk.horizontal) && void 0 !== Fk ? Fk : null
      }
    }

    function od() {
      var kk, Fk, Bk;
      const Rk = vd();
      return {
        ...null === (kk = XX) || void 0 === kk ? void 0 : kk.pageKillSnapshot(),
        renderDistance: null !== (Fk = null === Rk || void 0 === Rk ? void 0 : Rk.horizontal) && void 0 !== Fk ? Fk : null,
        renderDistanceVertical: null !== (Bk = null === Rk || void 0 === Rk ? void 0 : Rk.vertical) && void 0 !== Bk ? Bk : null,
        chunkCap: wX,
        budgetBasis: dX,
        renderBackend: (0, tt.I)()
      }
    }

    function Ld(kk) {
      console.info(`${Ja} wasm memory at the session's end`, kk.details())
    }

    function Od(kk, Fk) {
      if (!kk.isStopped) try {
        Fk()
      } catch (Bk) {
        kk.crash(FB.v, Bk)
      }
    }

    function Ed() {
      return tX ??= Bk.e(68).then((() => Bk(42804))).catch((kk => {
        throw tX = null, kk
      })), tX
    }
    async function Sd() {
      const {
        createWorldgenWorker: kk,
        worldgenWorkerReady: Fk
      } = await Ed();
      return await Fk(), kk
    }

    function Nd(kk) {
      var Fk;
      null === (Fk = tX) || void 0 === Fk || Fk.then(kk, (() => {}))
    }

    function Hd(kk, Fk, Bk) {
      return async function(kk, Fk, Bk) {
        let {
          stop: Rk,
          stillWanted: tk
        } = Bk;
        const ak = await (0, vR.j)(kk, {
          stillWanted: tk,
          beforeReload: async () => {
            Rk(), await (0, LB.flushCrashReports)(Zk.e)
          },
          reload: Zk.k
        });
        return ak || Fk(), ak
      }(kk, Fk, {
        stop: fd,
        stillWanted: Bk
      })
    }
    let ud = !1;

    function Md() {
      return ud = !0, async function(kk, Fk, Rk) {
        const {
          gamePackSource: tk
        } = await Bk.e(343).then((() => Bk(42770)));
        await lw.packStep(kk, ((Bk, Rk) => Bk.packForGame(kk, tk(Fk), Rk)), Rk)
      }(...arguments)
    }

    function gd(kk) {
      ! function(kk, Fk) {
        kk((kk => {
          null === kk || void 0 === kk || kk.subscribe((kk => {
            let {
              pack: Bk,
              gameSource: Rk
            } = kk;
            Fk(null === Rk || null === Bk ? null : {
              pack: Bk,
              source: "" === Rk ? null : Rk
            })
          }))
        }))
      }(Kw, kk)
    }
    let Ud = !1,
      cd = null,
      Gd = !1,
      Td = !1;

    function rd() {
      var kk;
      Ud || (Ud = !0, Cb("play", qk), (0, Jk.s)(new ld), bk.gameBridge.attach(gk), Cd().catch((() => {})), (0, Lk.o)((kk => {
        FF(kk.setTextHost)
      })), kk = Pd, Bb.add(kk), function(kk) {
        for (const Fk of YX) kk(Fk);
        oX.add(kk)
      }((kk => {
        zd(Dd[kk])
      })))
    }
    const Dd = {
      booted: ak.k.INITIALISE_NOA,
      texturesIn: ak.k.REGISTRATION,
      modelsIn: ak.k.SETUP_LIFEFORMS
    };

    function zd(kk) {
      wk.o.Hf("matchmakeAndPlayStepCompleted", {
        step: kk,
        totalSubSteps: 1
      })
    }

    function Pd(kk) {
      if (!Gd) return;
      const {
        gameNameWithVariation: Fk,
        lobbyName: Bk
      } = (0, Jk.e)();
      if (kk.code === Rk.e.serverUpdating.code) return (new ld).leaveLive(), void qd(Fk, Bk);
      wk.o.Hf("unwantedLeftGame", {
        reason: hd(kk),
        requiresRefresh: kk.requiresRefresh,
        canReconnect: null !== kk.reconnect,
        automaticallyReconnect: kk.reconnecting,
        canPlayAgain: kk.canPlayAgain,
        gameNameWithVariation: Fk,
        lobbyName: Bk
      }), (new ld).leaveLive()
    }

    function hd(kk) {
      return null !== kk.reasonKey ? {
        translationKey: kk.reasonKey
      } : "gameOrPluginKick" === kk.name ? kk.reason : `You have disconnected from the server.\n${kk.reason}`
    }

    function qd(kk, Fk) {
      var Rk;
      Rk = (0, dk.D)(kk, Fk), Promise.resolve().then((() => Bk(1459))).then((kk => {
        let {
          navigatePreserveSearch: Fk
        } = kk;
        Fk(Rk)
      })).catch((kk => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", kk), (0, Zk.f)(Rk)
      }))
    }

    function Cd() {
      return cd ??= Promise.all([Bk.e(69), Bk.e(72), Bk.e(71), Bk.e(70), Bk.e(83), Bk.e(259), Bk.e(199), Bk.e(216), Bk.e(237), Bk.e(212), Bk.e(46)]).then((() => Bk(40095))).then((kk => {
        try {
          kk.attachPlayGameSources()
        } catch (Fk) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Fk),
            function(kk) {
              na.then((Fk => {
                null === Fk || Fk.isStopped || rb ? console.warn(`${Ja} the play sources threw as they attached, after the client stopped`, kk) : md({
                  site: fa,
                  error: kk,
                  header: null
                }, xa)
              }))
            }(Fk), Fk
        }
      }), (kk => {
        throw cd = null, new Lk.c(kk)
      })), cd
    }
    async function Zd(kk, Fk) {
      rd(), ud = !0, Gd = !0;
      let Bk = {
          place: kk.place,
          matchedAt: kk.matchedAt
        },
        Xk = kk.place.gameNameWithVariation;
      const bk = (0, Vk.f)();
      let wk = null;
      const dk = await xb({
        matchmake: async () => {
          let Fk = Bk;
          if (Bk = null, null === Fk) {
            const Bk = await kk.rematch();
            if (Bk.isError()) throw wk = Bk.asError().forward(), new Error(Bk.asError().message);
            Fk = {
              place: Bk.getValue(),
              matchedAt: performance.now()
            }
          }
          Xk = Fk.place.gameNameWithVariation;
          return {
            target: await (0, Tk.e)(kk.userContext, Fk.place, xw(), bk),
            matchedAt: Fk.matchedAt,
            freshMs: Tk.c
          }
        },
        pageReady: Cd,
        onFailure: (kk, Fk) => {
          null === wk && function(kk, Fk) {
            (0, LB.reportPageJoinFailure)(kk, xa, Fk)
          }(kk, {
            sinceJoinStartMs: Fk,
            game: Xk
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => kk.userContext.invalidateTrafficCode(),
        signal: Fk
      });
      switch (dk.kind) {
        case "joined":
          if (bk) {
            const {
              game: kk
            } = dk;
            (0, Vk.t)((() => {
              kk.endJoinAd()
            }))
          }
          return Td || (Td = !0, (0, yk.b)()), Gd ? (zd(ak.k.CONNECT_TO_GAME_SERVER), zd(ak.k.SHADER_PACK), function() {
            var kk, Fk;
            return null !== (kk = null === (Fk = iX) || void 0 === Fk ? void 0 : Fk.runsInJoinedGame()) && void 0 !== kk && kk
          }() && (0, ek.h)(kk.userContext, Xk).catch((kk => {
            console.error("Failed to report the shader pack session", kk)
          })), function() {
            const kk = function() {
              var kk, Fk;
              return null !== (kk = null === (Fk = iX) || void 0 === Fk ? void 0 : Fk.couldntRunInJoinedGame()) && void 0 !== kk ? kk : null
            }();
            null !== kk && (0, ek.e)(kk)
          }(), tk.c.value(void 0)) : jd("The server ended the game as it joined");
        case "failed":
          if (!dk.reloading) {
            if (null !== wk) return wk;
            if ((dk.error instanceof ck.n || dk.error instanceof ck.e) && dk.error.code === Rk.e.serverUpdating.code) {
              if (Fk.aborted) return jd("Left the game while it loaded");
              const {
                gameNameWithVariation: kk,
                lobbyName: Bk
              } = (0, Jk.e)();
              return qd(kk, Bk), jd("The server is updating")
            }
            return dk.error instanceof Ck.e ? tk.c.errorWithCode(dk.error.messageKey, ak.k.SHADER_PACK, {
              severity: "medium"
            }) : tk.c.errorWithCode(function(kk) {
              if (kk instanceof ck.y || kk instanceof vk.e) return kk.message;
              if (pd(kk)) return (0, Uk.j)(kk.code, kk.serverText);
              return Uk.f
            }(dk.error), ak.k.CONNECT_TO_GAME_SERVER, {
              error: Kd(dk.error) ? dk.error : void 0,
              severity: xd(dk.error),
              gameServerUnreachable: (0, Gk.d)(dk.error),
              rematch: (0, mk.e)(dk.error),
              gameRefused: (0, Wk.c)(dk.error)
            })
          }
          return jd("Reloading into the new build");
        case "stopped":
          return jd("The game client stopped, and shows why");
        case "yB":
          return jd("Left the game while it loaded")
      }
    }

    function pd(kk) {
      return kk instanceof ck.n || kk instanceof ck.e && "attach" !== kk.stage
    }

    function Kd(kk) {
      return !(kk instanceof ck.y) && !pd(kk) && void 0 === (0, Gk.d)(kk)
    }

    function xd(kk) {
      return pd(kk) ? kk instanceof ck.e && (0, Uk.g)(kk.code).requiresRefresh ? "medium" : "low" : Kd(kk) || kk instanceof ck.y ? "medium" : "low"
    }

    function jd(kk) {
      return tk.c.errorWithCode(kk, ak.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        yB: !0
      })
    }
    class ld {
      leave(kk) {
        if ((0, ik.c)()) {
          var Fk, Bk;
          if ((0, Xk.b)()) return;
          (0, Ak.b)(!0 === (null === (Fk = (0, ik.i)()) || void 0 === Fk || null === (Bk = Fk.currentViewer) || void 0 === Bk ? void 0 : Bk.unsavedChanges), kk)
        } else this.leaveLive()
      }
      leaveLive() {
        var kk;
        ud && (null === (kk = xw()) || void 0 === kk || kk.endGamePack());
        if (!Gd) return;
        Gd = !1, (0, fk.i)();
        try {
          var Fk;
          null === (Fk = (0, Lk.n)()) || void 0 === Fk || Fk.clearWasmCameraScreen()
        } catch (Rk) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Rk)
        }
        const {
          gameNameWithVariation: Bk
        } = (0, Jk.e)();
        try {
          tw()
        } finally {
          (0, Jk.u)({
            websocketUrl: null
          }), wk.o.Hf("leaveGame", {
            gameNameWithVariation: Bk
          }), (0, sk.H)()
        }
      }
      isReplay() {
        return (0, ik.c)()
      }
    }
  },
  40431: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      d: () => Rk,
      f: () => bk,
      i: () => Xk
    });
    const Rk = 12e4,
      tk = 3e4,
      ak = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: kk => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", kk), () => {
          document.removeEventListener("visibilitychange", kk)
        })
      };

    function Xk(kk) {
      return `it sent no start within ${Math.round(kk)} ms`
    }
    class bk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ak;
        this.timeoutMs = kk, this.onTimeout = Fk, this.now = Bk, this.visibility = Rk, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Rk.listen((() => {
          this.onVisibility()
        })), Rk.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const kk = this.step;
        return null === kk ? 0 : Math.min(this.now() - kk.at, kk.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const kk = this.timeoutMs - this.counted;
        if (kk <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Fk = Math.min(kk, 5e3);
        this.step = {
          at: this.now(),
          ms: Fk
        }, this.arm(Fk, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(kk, Fk) {
        this.timer = setTimeout((() => {
          this.timer = null, Fk()
        }), kk)
      }
    }
  },
  40305: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    const Rk = {
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
  38369: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(3502);
    const tk = ["none", "idle", "now"];

    function ak() {
      const kk = () => (0, Rk.y)();
      return {
        memoryBytes: () => (0, Rk.p)().buffer.byteLength,
        reserveUpFront: Fk => kk().UV(Fk),
        reserveAhead: Fk => kk().gV(Fk),
        setCeiling: Fk => {
          kk().cV(Fk)
        },
        lowWater: () => tk[kk().MV()] ?? "none",
        stats: () => function(kk) {
          const Fk = new Uint32Array((0, Rk.p)().buffer, kk, 17),
            Bk = kk => Fk[kk] ?? 0,
            tk = kk => ({
              upFront: Bk(kk),
              ahead: Bk(kk + 1),
              onDemandInFrame: Bk(kk + 2),
              onDemand: Bk(kk + 3)
            });
          return {
            memoryBytes: Bk(0),
            initialBytes: Bk(1),
            liveBytes: Bk(2),
            peakLiveBytes: Bk(3),
            headroomBytes: Bk(4),
            unusedBytes: Bk(5),
            ceilingBytes: Bk(6),
            reservesRefused: Bk(7),
            grows: tk(8),
            grownBytes: tk(12),
            allocationsRefused: Bk(16)
          }
        }(kk().GV()),
        takeBallast: () => kk().TV(),
        takePressure: () => kk().rV()
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);