export const id = 63;
export const ids = [63, 115, 116, 136];
export const modules = {
  39629: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk,
      f: () => Tk
    });
    const Xk = "The world isn't loaded, so no blocks can be seen.",
      Tk = "The world isn't loaded, so nothing in it can be seen."
  },
  39102: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Kk,
      h: () => Qk,
      j: () => Pk
    });
    var Xk = Ik(4799),
      Tk = Ik(2744),
      ik = Ik(1844);
    const yk = new Map(Object.entries(Xk.k).map((kk => {
      let [Fk, Ik] = kk;
      return [Ik, Fk]
    })));

    function lk(kk) {
      return (0, ik.A)(kk).toFixed(1)
    }

    function ak(kk, Fk) {
      return `camera set by ${yk.get(kk[Fk+1])}: heading ${`${lk(kk[Fk+2])} -> ${lk(kk[Fk+4])}`} deg, pitch ${`${lk(kk[Fk+3])} -> ${lk(kk[Fk+5])}`} deg, at ${kk[Fk].toFixed(1)} ms`
    }
    class qk {
      constructor(kk, Fk) {
        this.width = kk, this.St = Fk, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(kk * Fk)
      }
      push(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Xk = 0; Xk < this.width; Xk++) Ik[Xk] = kk[Fk + Xk];
        return this.next = (this.next + 1) % this.St, this.size = Math.min(this.size + 1, this.St), Ik
      }
      lines() {
        const kk = [],
          Fk = (this.next - this.size + this.St) % this.St;
        for (let Ik = 0; Ik < this.size; Ik++) {
          const Xk = (Fk + Ik) % this.St * this.width;
          kk.push(Array.from(this.data.subarray(Xk, Xk + this.width)).join(","))
        }
        return kk
      }
    }
    const Lk = 0,
      tk = 2,
      Zk = 3,
      jk = 4;

    function ek(kk) {
      return Number.isFinite(kk) ? String(Math.round(10 * kk) / 10) : String(kk)
    }

    function wk(kk) {
      return Number.isFinite(kk) ? kk.toFixed(1) : String(kk)
    }
    class Hk {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.iW = 0, this.pastLimit = 0, this.lockSkips = 0, this.iH = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.iW > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.iW > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class Jk {
      constructor() {
        var kk = this;
        this.remote = (0, Tk.p)(), this.tally = new Hk, this.records = new qk(10, this.remote ? 1 : 3600), this.events = new qk(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(Fk) {
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Xk, Tk, ik, yk, lk, ak, qk, Hk, Jk, xk] = kk.records.push(Fk, Ik), Pk = kk.tally;
          switch (Pk.frames++, qk) {
            case Lk:
              return void Pk.idle++;
            case jk:
              return void Pk.iH++;
            case Zk:
              return Pk.lockSkips++, void(0 === ik && 0 === yk || kk.outlier(`lock skip dropped raw (${ek(ik)}, ${ek(yk)}) at ${wk(Xk)} ms`))
          }
          Pk.looked++, Number.isFinite(Tk) && (Pk.dtMin = Math.min(Pk.dtMin, Tk), Pk.dtMax = Math.max(Pk.dtMax, Tk), Pk.dtSum += Tk, Tk > 0 && (Pk.peakRate = Math.max(Pk.peakRate, Math.hypot(lk, ak) / Tk))), Pk.raw[0] += ik, Pk.raw[1] += yk, Pk.turned[0] += lk, Pk.turned[1] += ak;
          const Kk = Math.abs(ik) > xk || Math.abs(yk) > xk,
            Qk = `raw (${ek(ik)}, ${ek(yk)}) over ${wk(Tk)} ms, limit ${ek(xk)}, filter v (${Hk.toFixed(3)}, ${Jk.toFixed(3)}) px/ms, at ${wk(Xk)} ms`;
          qk === tk ? (Pk.iW++, kk.outlier(`spike put right: ${Qk} -> turned (${ek(lk)}, ${ek(ak)})`)) : Kk ? (Pk.pastLimit++, kk.outlier(`kept past limit: ${Qk}`)) : Tk > 50 && (Pk.longFrames++, kk.remote || kk.outlier(`long frame: ${Qk}, turned in full`))
        }, this.onMouseMove = kk => {
          const Fk = this.tally,
            {
              movementX: Ik,
              movementY: Xk
            } = kk;
          Fk.events++;
          const Tk = Math.max(Math.abs(Ik), Math.abs(Xk));
          Fk.eventMax = Math.max(Fk.eventMax, Tk);
          const ik = null !== document.pointerLockElement,
            yk = this.event;
          yk[0] = kk.timeStamp, yk[1] = Ik, yk[2] = Xk, yk[3] = ik ? 1 : 0, this.events.push(yk), Tk >= 200 && (Fk.bigEvents++, this.eventOutlier(`big mousemove (${Ik}, ${Xk}) at ${wk(kk.timeStamp)} ms, lock ${ik?"eq":"free"}`))
        }, this.onLockChange = () => {
          const kk = document.pointerLockElement;
          (0, Tk.g)("look", `pointer lock ${kk?`gained (${kk.tagName.toLowerCase()})`:"lost"} at ${wk(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Tk.g)("look", `pointer lock request failed at ${wk(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Tk.g)("look", `page ${document.visibilityState} at ${wk(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const kk = this.tally;
          if (this.tally = new Hk, !kk.moved() || this.remote && !kk.hasEvent()) return;
          const Fk = kk.looked > 0 ? kk.dtSum / kk.looked : NaN,
            Ik = [`${kk.frames} frames (${kk.looked} looked, ${kk.idle} idle${"wasm"===this.client?`, ${kk.iH} carried`:""})`, `dt avg ${wk(Fk)} min ${wk(kk.dtMin)} max ${wk(kk.dtMax)}, ${kk.longFrames} long`, `${kk.events} mousemoves (max ${ek(kk.eventMax)} px, ${kk.bigEvents} big)`, `raw (${ek(kk.raw[0])}, ${ek(kk.raw[1])}) turned (${ek(kk.turned[0])}, ${ek(kk.turned[1])})`, `peak ${kk.peakRate.toFixed(2)} px/ms`, `put right ${kk.iW}, past limit ${kk.pastLimit}, lock skips ${kk.lockSkips}`, "lock " + (document.pointerLockElement ? "eq" : "free")];
          kk.dropped > 0 && Ik.push(`${kk.dropped} doubled spike copies dropped`), kk.cameraSets > 0 && Ik.push(`${kk.cameraSets} camera sets`), kk.cameraSetsLost > 0 && Ik.push(`${kk.cameraSetsLost} camera set records lost`), kk.lost > 0 && Ik.push(`${kk.lost} records lost`), kk.suppressed > 0 && Ik.push(`${kk.suppressed} outlier lines not shown`), (0, Tk.g)("look", `1s: ${Ik.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(kk, Fk) {
        this.client = kk, this.takes = Fk;
        const {
          screen: Ik
        } = window;
        (0, Tk.g)("look", `start: ${kk} client, dpr ${window.devicePixelRatio}, screen ${Ik.width}x${Ik.height}, pointer lock ${document.pointerLockElement?"eq":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, Tk.f)("look", this.dump))
      }
      outlier(kk) {
        const Fk = this.tally;
        Fk.outliers >= 20 ? Fk.suppressed++ : (Fk.outliers++, (0, Tk.g)("look", kk))
      }
      eventOutlier(kk) {
        const Fk = this.tally;
        Fk.eventLines >= 10 ? Fk.suppressed++ : (Fk.eventLines++, (0, Tk.g)("look", kk))
      }
      takeRecords() {
        if (null === this.takes) return;
        const kk = this.takes.look();
        if (kk.length >= 2) {
          this.tally.lost += kk[0], this.tally.dropped += kk[1];
          for (let Fk = 2; Fk + 10 <= kk.length; Fk += 10) this.record(kk, Fk)
        }
        const Fk = this.takes.cameraSets();
        if (Fk.length >= Xk.e) {
          this.tally.cameraSetsLost += Fk[0];
          for (let kk = Xk.e; kk + Xk.f <= Fk.length; kk += Xk.f) this.tally.cameraSets++, this.outlier(ak(Fk, kk))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let xk = null;

    function Pk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return xk ??= new Jk, xk.start(kk, Fk), xk.record
    }

    function Kk() {
      var kk;
      null === (kk = xk) || void 0 === kk || kk.endTake()
    }

    function Qk() {
      var kk;
      null === (kk = xk) || void 0 === kk || kk.droppedCopy()
    }
  },
  34048: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    const Xk = new Set(["chunkBorders"])
  },
  34222: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      f: () => Tk,
      h: () => Lk
    });
    var Xk = Ik(1518);

    function Tk(kk) {
      var Fk;
      return {
        ...yk.store,
        yaw: yk.store.yaw + (null !== (Fk = Xk.c[kk].previewYaw) && void 0 !== Fk ? Fk : 0)
      }
    }
    const ik = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yk = {
        player: ik,
        store: {
          ...ik,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function lk(kk, Fk) {
      kk instanceof Promise ? kk.then(Fk).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : Fk(kk)
    }
    class ak {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var Fk;
        this.view = kk, null === (Fk = this.opened) || void 0 === Fk || Fk.show(kk)
      }
      resize(kk, Fk) {
        var Ik;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Ik = this.opened) || void 0 === Ik || Ik.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class qk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), lk(kk, (kk => {
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
        var Ik;
        null === (Ik = this.opened) || void 0 === Ik || Ik.setCosmetic(kk, Fk)
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
        var Ik;
        this.size = {
          width: kk,
          height: Fk
        }, null === (Ik = this.opened) || void 0 === Ik || Ik.resize(kk, Fk)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const Lk = new class {
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
        return new ak(this.current().openMob(kk))
      }
      openPet(kk) {
        return new ak(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new ak(this.current().openMobLineup(kk))
      }
      openCharacter(kk, Fk) {
        return new qk(this.current().openCharacter(kk, Fk))
      }
    }
  },
  5047: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk.d,
      e: () => Tk,
      i: () => Xk.m
    });
    var Xk = Ik(5053);
    const Tk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((Fk => ({
      strict: kk,
      program: Fk
    })))))
  },
  39224: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      ShaderPackPage: () => ak,
      harnessShaderPackMode: () => Zk,
      setHarnessUrlShaderPack: () => tk,
      shaderPackPage: () => Lk
    });
    var Xk = Ik(95),
      Tk = Ik(41),
      ik = (Ik(3403), Ik(5047), Ik(3396)),
      yk = Ik(6644);
    Ik(6611);
    const lk = {
      status: "none"
    };
    class ak {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, ik.j)(Xk.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), qk().then((kk => {
            kk && Tk.j.removeItem(ik.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, ik.h)(Xk.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const kk = await this.load();
        return "active" === kk.status ? kk.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((kk => (console.error("Failed to load the shader pack", kk), lk))).then((kk => (this.resolved ??= kk, kk))), this.pagePack
      }
      hasNone() {
        var kk;
        return "none" === (null === (kk = this.resolved) || void 0 === kk ? void 0 : kk.status)
      }
      block(kk) {
        this.resolved = {
          status: "blocked",
          messageKey: kk,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([Ik.e(77), Ik.e(133), Ik.e(140)]).then((() => Ik(41740))).then((kk => (kk.prefetchCompiler(), kk))), this.compiling
      }
      async readStored() {
        const kk = await qk();
        return kk && this.compiler().then((kk => kk.reconcileHint())).catch((kk => {
          console.error("Failed to correct the shader pack hint", kk)
        })), kk
      }
      async read() {
        const kk = await this.preload();
        return kk ? (await this.compiler()).compilePagePack(kk) : lk
      }
    }
    async function qk() {
      if (!(0, ik.m)(Xk.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const kk = await (0, yk.i)(!0);
        return kk || Tk.j.setItem(ik.e, !1), kk
      } catch (kk) {
        return console.error("Failed to read the stored shader pack", kk), Tk.j.removeItem(ik.e), null
      }
    }
    const Lk = new ak;

    function tk(kk, Fk) {}

    function Zk() {
      return null
    }
  },
  39264: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => tk,
      h: () => Zk
    });
    var Xk = Ik(149),
      Tk = Ik(178),
      ik = Ik(1442),
      yk = Ik(2852),
      lk = Ik(1453),
      ak = Ik(36458),
      qk = Ik(667),
      Lk = Ik(39224);

    function tk(kk) {
      (0, yk.reportClientError)("matchmake_failed", kk, Xk.j[Xk.j.SHADER_PACK])
    }
    async function Zk(kk, Fk) {
      var Ik;
      const Xk = null === (Ik = await Lk.shaderPackPage.preload()) || void 0 === Ik ? void 0 : Ik.listing,
        yk = (0, ak.c)();
      Xk && null !== yk && await lk.e.reportShaderPackSession(kk, {
        packId: Xk.packId,
        sourceHash: Xk.sourceHash,
        game: (0, ik.e)(Fk, Tk.z, "other"),
        playSessionId: yk,
        visitSessionId: (0, qk.h)()
      })
    }
  },
  6644: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      i: () => ik
    });
    var Xk = Ik(41);
    const Tk = "shaderPack";
    async function ik() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Xk.g.getItem(Tk, Fk)) && void 0 !== kk ? kk : null
    }
  },
  6611: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      loadShaderPackTextures: () => yk,
      shaderPackTextures: () => lk
    });
    var Xk = Ik(5053);
    let Tk = null,
      ik = null;

    function yk() {
      return ik ??= Promise.all([Ik.e(72), Ik.e(188)]).then((() => Ik(40500))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Fk,
          textureNameToIndex: Ik,
          textureAnimationData: ik
        } = kk;
        return Tk ??= (0, Xk.g)(Ik, ik, Fk), Tk
      })), ik
    }

    function lk() {
      if (null === Tk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Tk
    }
  },
  39034: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk
    });
    var Xk = Ik(34),
      Tk = Ik(1270),
      ik = Ik(2889);
    const yk = "Reconnecting";
    class lk {
      constructor(kk) {
        this.hooks = kk, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = kk => {
          kk.persisted || this.leave()
        }, this.controller = new ik.c((Fk => kk.reconnect(Fk)), {
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
        const Fk = (0, ik.n)(kk);
        Fk !== this.stopped && (this.stopped = Fk, this.hooks.freeze(Fk));
        const Ik = "frozen" === kk || "resuming" === kk && this.frozen;
        Ik && !this.frozen ? (0, Tk.m)(yk, {
          overridesPause: !0
        }) : !Ik && this.frozen && (0, Tk.l)(yk), this.frozen = Ik, this.setListening("connected" !== kk), Xk.g.GL(ik.m, Ik ? "frozen" : kk)
      }
      setListening(kk) {
        kk !== this.listening && (this.listening = kk, kk ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39040: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = kk, this.now = Fk, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const kk = this.now(),
            Fk = kk - this.lastCheckAt <= 2e3;
          this.lastCheckAt = kk;
          const Ik = "visible" === document.visibilityState;
          !Ik || Fk && this.wasVisible || (this.resumedAt = kk), this.wasVisible = Ik, Ik && kk - this.lastHeardAt > 12e3 && kk - this.resumedAt > 2e3 && this.onSilent()
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
  34111: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(1076);

    function Tk() {
      var kk, Fk;
      return null !== (kk = null === (Fk = screen.orientation) || void 0 === Fk ? void 0 : Fk.type) && void 0 !== kk ? kk : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ik = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Tk() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Tk(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Xk.ow)(new Error("Game view size held for 60 s"))
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
          const Ik = kk();
          return Fk ||= null !== Ik, Ik
        }
      }
      onRelease(kk) {
        return this.resizers.add(kk), () => {
          this.resizers.delete(kk)
        }
      }
    }
  },
  39250: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    let Xk = !1;
    async function Tk(kk, Fk) {
      if (!Xk) {
        Xk = !0;
        try {
          const [{
            reloadBloxd: Xk
          }, {
            NotificationProvider: Tk
          }] = await Promise.all([Promise.resolve().then((() => Ik(1665))), Promise.resolve().then((() => Ik(1324)))]);
          if (!kk || !0 === await Tk.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Xk(Fk)
        } catch (Tk) {
          console.error("Leaving the replay failed", Tk)
        }
        Xk = !1
      }
    }
  },
  39054: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => qk,
      f: () => Lk
    });
    var Xk = Ik(1649),
      Tk = Ik(187),
      ik = Ik(1631),
      yk = Ik(1716),
      lk = Ik(1194),
      ak = Ik(1120);
    async function qk(kk, Fk) {
      return function(kk) {
        return "object" === typeof kk && null !== kk && kk.code === Tk.d.VpnIp.code
      }(Fk) && function(kk) {
        return ik.b.supports("appCheck") && kk.isLoggedIn() && !kk.hasTriedAppAttestation()
      }(kk) && await async function(kk) {
        try {
          const {
            token: Fk
          } = await (0, yk.b)(), {
            "3PSIDMCPP": Ik
          } = await (0, ak.postJsonWithMetricsCookiesAndJsonResponse)(`${lk.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Fk
          }, {
            retries: 0
          }, kk.getMetricsCookies());
          return kk.setAppAttestedAuthJwt(Ik), !0
        } catch (Fk) {
          return Fk instanceof Xk.d && "failed" === Fk.code ? (console.warn("The app couldn't get an App Check token:", Fk), kk.markAppAttestationTried()) : console.error("Failed to attest the app:", Fk), !1
        }
      }(kk)
    }
    async function Lk(kk, Fk) {
      try {
        return await Fk()
      } catch (Ik) {
        if (!await qk(kk, Ik)) throw Ik
      }
      return Fk()
    }
  },
  40986: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      f: () => ak
    });
    var Xk = Ik(1682);
    const Tk = 33177600,
      ik = 3e4;
    let yk = !1;

    function lk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: lk = 1,
        type: ak = "image/png",
        quality: qk
      } = Xk;
      if (!kk.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (yk) return Promise.reject(new Error("A screenshot is already being taken"));
      yk = !0;
      const Lk = function(kk, Fk, Ik) {
        const Xk = Math.max(1, kk),
          ik = Math.max(1, Fk),
          yk = Math.min(1, Ik / Math.max(Xk, ik), Math.sqrt(Tk / (Xk * ik)));
        return {
          width: Math.max(1, Math.floor(Xk * yk)),
          height: Math.max(1, Math.floor(ik * yk))
        }
      }(Fk, Ik, kk.maxTextureSize);
      return kk.resize(Lk.width, Lk.height, lk * Lk.width / Math.max(1, Fk)), new Promise(((Fk, Ik) => {
        let Xk, Tk = 2,
          lk = null;
        const Lk = () => {
          var Fk;
          yk = !1, null === (Fk = lk) || void 0 === Fk || Fk(), clearTimeout(Xk), kk.restoreSize()
        };
        Xk = setTimeout((() => {
          Lk(), Ik(new Error("No frame was drawn to capture"))
        }), ik), lk = kk.onFrameDrawn((() => {
          if (Tk--, Tk > 0) return;
          const {
            canvas: Xk
          } = kk, ik = {
            width: Xk.width,
            height: Xk.height
          };
          try {
            Xk.toBlob((kk => {
              kk ? Fk({
                blob: kk,
                ...ik
              }) : Ik(new Error("The canvas gave no image"))
            }), ak, qk)
          } catch (yk) {
            Ik(yk)
          } finally {
            Lk()
          }
        }))
      }))
    }
    async function ak(kk, Fk, Ik) {
      try {
        const Tk = await lk(kk, Fk, Ik);
        (0, Xk.c)(Tk.blob, `bloxd-screenshot-${Tk.width}x${Tk.height}-${Date.now()}.png`)
      } catch (Tk) {
        console.error("Error taking screenshot:", Tk)
      }
    }
  },
  39046: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Zk,
      i: () => Lk
    });
    var Xk = Ik(187),
      Tk = Ik(1759),
      ik = Ik(1199),
      yk = Ik(8880);
    const lk = [250, 500, 1e3, 2e3, 1250],
      ak = 406;

    function qk(kk) {
      if ("object" !== typeof kk || null === kk) return !1;
      const {
        code: Fk,
        message: Ik
      } = kk, Tk = Xk.d.duplicateLobbyNameError;
      return (Fk === Tk.code || Fk === ak) && (Ik === Tk.text || Ik === Tk.text + Xk.m)
    }
    async function Lk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tk.b;
      for (let Tk = 0;; Tk++) {
        let yk;
        (0, ik.m)(Fk);
        try {
          return await kk()
        } catch (Xk) {
          if (yk = lk[Tk], void 0 === yk || !qk(Xk)) throw Xk
        }
        await Ik(yk, Fk)
      }
    }
    const tk = new Set([Xk.d.duplicateLobbyNameError.code, Xk.d.lobbyCantBeCreated.code, Xk.d.roomDisposedEarlyError.code, Xk.d.roomDisposedLateError.code, Xk.d.serverRoomLimitReached.code]);

    function Zk(kk) {
      if (qk(kk)) return !0;
      const Fk = (0, yk.g)(kk);
      return "number" === typeof Fk && tk.has(Fk)
    }
  },
  39171: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    var Xk = Ik(318),
      Tk = Ik(129),
      ik = Ik(41);

    function yk() {
      ik.j.setItem(Xk.Ob, ik.j.getItem(Xk.Ob) + 1), (0, Tk.p)() && ik.j.setItem(Xk.Nb, ik.j.getItem(Xk.Nb) + 1)
    }
  },
  36449: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Qk,
      g: () => sk
    });
    var Xk = Ik(1018),
      Tk = Ik(198),
      ik = Ik(333),
      yk = Ik(633),
      lk = Ik(337),
      ak = Ik(1021),
      qk = Ik(646),
      Lk = Ik(684),
      tk = Ik(4508),
      Zk = Ik(95),
      jk = Ik(129),
      ek = Ik(1665),
      wk = Ik(111),
      Hk = Ik(36458),
      Jk = Ik(41),
      xk = Ik(667),
      Pk = Ik(309),
      Kk = Ik(36466);

    function Qk() {
      var kk, Fk;
      return [...null !== (kk = navigator.languages) && void 0 !== kk ? kk : [null !== (Fk = navigator.language) && void 0 !== Fk ? Fk : "none"], "en-gb"]
    }

    function sk(kk, Fk, Ik, sk, Vk) {
      const zk = (0, Xk.j)(Fk) ? (0, Xk.n)(Fk) : null,
        Sk = kk.isLoggedIn() && void 0 !== (0, Tk.d)(ik.i, jk.v) ? (0, Pk.x)() : null,
        vk = {
          cookies: (0, ek.getAllCookiesForGameNameWithVariation)(Fk),
          isMobile: (0, Zk.isMobile)(),
          isUsingCustomGameTexturePack: null !== zk && Vk(zk),
          generalCookies: {
            joinDiscord: !!Jk.j.getItem("DiscordPressed"),
            newGo: tk.b,
            ...kk.getMetricsCookies(),
            trafficCode: sk,
            compliance: Zk.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Zk.getBrowserName)(),
            version: (0, Zk.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Zk.getPlatformType)(),
            deviceType: (0, wk.e)()
          },
          isLoggedIn: kk.isLoggedIn(),
          lobbyName: Ik,
          languages: Qk(),
          version: yk.b,
          siteUsed: jk.v,
          subsiteUsed: jk.C,
          playSessionId: (0, Hk.j)(Fk),
          visitSessionId: (0, xk.h)(),
          clientReason: qk.o.reason,
          budgetBasis: (0, Kk.h)(),
          ...null !== Lk.t && {
            diagClaim: Lk.t.claimId
          },
          ...null !== Sk && {
            webGpuLoss: Sk
          }
        };
      return null !== zk && (0, lk.Kc)(zk) ? (vk.lobbyName = (0, Xk.i)(zk, (0, Xk.l)(Fk), Ik), {
        roomName: `classic_${ak.f}`,
        joinOptions: vk
      }) : {
        roomName: Fk,
        joinOptions: vk
      }
    }
  },
  39080: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => jk,
      e: () => Zk
    });
    const Xk = "ue:",
      Tk = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      ik = "[A-Za-z0-9]{1,24}",
      yk = 15,
      lk = new RegExp(`^${ik}$`);
    new RegExp(`^${Xk}(${[...Tk,"other"].join("|")}):(?:n|k(${ik})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function ak(kk, Fk, Ik, ik, ak) {
      const qk = "string" === typeof kk && Tk.includes(kk) ? kk : "other";
      let Lk = "n";
      return "string" === typeof Fk ? Lk = lk.test(Fk) ? `k${Fk}` : "n" : "number" === typeof Ik && Number.isInteger(Ik) && Ik >= 0 && Ik <= yk && (Lk = `b${Ik}`), `${Xk}${qk}:${Lk}:${ik?1:0}${ak?1:0}`
    }
    var qk = Ik(1604),
      Lk = Ik(1668);
    let tk = null;

    function Zk(kk) {
      const Fk = kk instanceof Element && kk !== document.body && kk !== document.documentElement && !(0, qk.p)(kk) && !kk.closest("#root");
      return {
        editable: (0, Lk.b)(kk),
        outsideView: Fk
      }
    }

    function jk(kk) {
      return tk ??= function(kk) {
        try {
          const {
            editable: Fk,
            outsideView: Ik
          } = Zk(kk.target), Xk = kk;
          return ak(kk.type, Xk.code, Xk.button, Fk, Ik)
        } catch {
          return ak(null, null, null, !1, !1)
        }
      }(kk), tk
    }
  },
  40661: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk
    });
    var Xk = Ik(39629);

    function Tk(kk) {
      return {
        current: () => kk,
        watch: () => () => {}
      }
    }

    function ik() {}
    const yk = Object.freeze([0, 0, 0]),
      lk = {
        states: {
          health: Tk({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Tk({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Tk({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Tk({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Tk({}),
          creativeVisibility: Tk({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Tk(null),
          heldItemAim: Tk({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Tk(!1),
          gliderBoostFuel: Tk(0),
          flight: Tk({
            canFly: !1,
            flying: !1
          }),
          crafting: Tk({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Tk({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Tk({}),
          fullInventory: Tk(!1),
          crosshairTarget: Tk({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Tk(!0),
          freeCamera: Tk({
            allowed: !1,
            movesFly: !1
          }),
          replay: Tk(null),
          replayEdits: Tk(null),
          replayRecorder: Tk({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Tk(!1)
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
          selectHotbarSlot: ik,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ik,
          setInventoryOpen: ik,
          changeIronChestPasskey: ik,
          dragReplayCamera: ik,
          applyTemporaryThirdPerson: ik,
          holdEmoteWheel: ik,
          recordFlyingMiddleText: ik,
          focusCrafting: ik,
          craftRecipe: () => ({
            il: 0,
            jy: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ik,
          setShopOpen: ik,
          buyShopItem: ik,
          lobbyManage: ik,
          sendChatMessage: ik,
          ignorePlayer: ik,
          reportPlayer: ik,
          reportWorldCodeChat: ik,
          requestDiscordReportKey: ik,
          reportLobbyOrGame: ik,
          playEmote: ik,
          updateMyCosmetic: ik,
          writeOnBoard: ik,
          writeBook: ik,
          writeNameTag: ik,
          setCustomLobbyBlock: ik,
          openIronChest: ik,
          sendCodeCollab: ik,
          clickCodeBlock: ik,
          bindCustomButtonKeys: ik,
          pressCustomButton: ik,
          moveReplayFreecam: ik,
          holdReplayFreecamVertical: ik,
          respawn: ik,
          wakeUp: ik,
          requestLeaderboard: ik,
          completeTask: ik,
          setServerCookie: ik,
          answerUiRequest: ik,
          chooseRewardedAd: ik,
          setCameraZoom: ik,
          setFreeCameraMovesFly: ik,
          setBlockHighlight: ik,
          setCrosshairInteractPrompt: ik,
          setLookSensitivity: ik,
          replayAction: ik,
          setReplayPlaying: ik,
          seekReplay: ik,
          setReplayCameraMode: ik,
          syncReplayCameraMode: ik,
          setReplayCameraKeyframe: ik,
          moveReplayCameraKeyframe: ik,
          deleteReplayCameraKeyframes: ik,
          setReplayPlaybackMark: ik,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ik,
          exportReplayVideo: ik,
          toggleRecording: ik,
          saveClip: ik,
          setRecorderPrefs: ik,
          setReplayViewerOpen: ik
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Xk.c,
          worldCodeAiGameState: () => Xk.f
        },
        lookups: {
          localPos: () => yk,
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
  40978: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk,
      g: () => ik
    });
    var Xk = Ik(2071),
      Tk = Ik(1018);

    function ik(kk, Fk) {
      return null !== kk.gameSource && (0, Xk.i)(Fk, kk.gameSource)
    }

    function yk(kk, Fk) {
      if (null === kk.gameSource || "" === kk.gameSource || null === Fk) return !0;
      const Ik = (0, Tk.j)(Fk) ? (0, Tk.n)(Fk) : null;
      return null !== Ik && ik(kk, Ik)
    }
  },
  40954: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk
    });
    var Xk = Ik(614),
      Tk = Ik(40957),
      ik = Ik(40819);
    async function yk(kk) {
      const Fk = await (0, Tk.i)({
        Helmet: Ik(37960),
        Chestplate: Ik(37968),
        Gauntlets: Ik(37990),
        Leggings: Ik(37975),
        Boots: Ik(37984)
      } [Xk.e[kk]]);
      try {
        return (0, ik.q)(Fk)
      } finally {
        Fk.close()
      }
    }
    const lk = new class {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tk.o;
        this.decode = kk, this.register = Fk, this.decoded = new Map
      }
      warm() {
        for (let kk = 0; kk < Xk.e.length; kk++) this.part(kk).catch((Fk => {
          console.warn(`The grayscale armour ${Xk.e[kk]} image didn't decode ahead of use`, Fk)
        }))
      }
      async load(kk, Fk) {
        const {
          width: Ik,
          height: ik,
          pixels: yk
        } = await this.part(kk), lk = new ImageData(function(kk, Fk) {
          const Ik = new Uint8ClampedArray(kk.length);
          for (let Xk = 0; Xk < kk.length; Xk += 4) Ik[Xk] = Math.round(kk[Xk] * Fk[0] / 255), Ik[Xk + 1] = Math.round(kk[Xk + 1] * Fk[1] / 255), Ik[Xk + 2] = Math.round(kk[Xk + 2] * Fk[2] / 255), Ik[Xk + 3] = kk[Xk + 3];
          return Ik
        }(yk, function(kk) {
          return [kk >>> 16 & 255, kk >>> 8 & 255, 255 & kk]
        }(Fk)), Ik, ik);
        let ak;
        try {
          ak = await createImageBitmap(lk, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (qk) {
          throw new Tk.e("decode", `grayscale armour ${Xk.e[kk]}`, {
            cause: qk
          })
        }
        return {
          id: this.register(ak),
          width: Ik,
          height: ik
        }
      }
      part(kk) {
        const Fk = this.decoded.get(kk);
        if (void 0 !== Fk) return Fk;
        const Ik = this.decode(kk).catch((Fk => {
          throw this.decoded.delete(kk), Fk instanceof Tk.e ? Fk : new Tk.e("decode", `grayscale armour ${Xk.e[kk]}`, {
            cause: Fk
          })
        }));
        return this.decoded.set(kk, Ik), Ik
      }
    }
  },
  40946: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      g: () => Hk,
      i: () => Lk,
      l: () => tk,
      o: () => wk
    });
    var Xk = Ik(40799),
      Tk = Ik(40954),
      ik = Ik(40957);
    const yk = 396,
      lk = 1,
      ak = 2,
      qk = 3,
      Lk = {
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
      tk = {
        File: 0,
        Item: 1
      },
      Zk = 0,
      jk = 1,
      ek = 2;

    function wk(kk) {
      const Fk = (0, Xk.i)();
      Fk.catch((() => {}));
      let Tk = null;
      return {
        glbUrl: kk,
        lifeformAtlasUrl: async kk => (await Fk).lifeformAtlasUrl(kk),
        armourAtlasUrl: async () => (await Ik.e(204).then((() => Ik(34274)))).armourAtlasUrl,
        capeUrl: async kk => (await Fk).capeUrl(kk),
        attachmentImageUrl: async kk => (await Fk).attachmentImageUrl(kk),
        blockImageUrl: async kk => (await Fk).blockImageUrl(kk),
        groupAtlasUrl: async kk => (await Fk).groupAtlasUrl(kk),
        particleTextureUrl: async kk => (await Fk).particleTextureUrl(kk),
        particleItemUrl: async kk => (Tk ??= Ik.e(38).then((() => Ik(51036))).catch((kk => {
          throw Tk = null, kk
        })), (await Tk).particleItemUrl(kk))
      }
    }
    class Hk {
      constructor(kk, Fk) {
        var Ik, yk, lk, ak;
        let qk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = kk, this.onFailure = Fk, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.ee = !1, this.load = null !== (Ik = qk.load) && void 0 !== Ik ? Ik : (kk, Fk) => (0, ik.l)(kk, qk.fetchImage, Fk), this.release = null !== (yk = qk.release) && void 0 !== yk ? yk : ik.p, this.fetchFile = null !== (lk = qk.fetchFile) && void 0 !== lk ? lk : kk => (0, Xk.f)(kk), this.greyscaleArmour = null !== (ak = qk.greyscaleArmour) && void 0 !== ak ? ak : Tk.b
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(kk, Fk) {
        this.glbWrittenImages.set(kk, Vk(Fk))
      }
      glbTaken(kk, Fk) {
        const Ik = this.glbWrittenImages.get(kk);
        this.glbWrittenImages.delete(kk), Fk && this.setGlbImages(kk, void 0 !== Ik && Ik.length > 0 ? Ik : void 0)
      }
      setGlbImages(kk, Fk) {
        var Ik;
        this.glbTakenCount.set(kk, (null !== (Ik = this.glbTakenCount.get(kk)) && void 0 !== Ik ? Ik : 0) + 1), void 0 === Fk ? this.glbImages.delete(kk) : this.glbImages.set(kk, Fk);
        const Xk = [];
        for (const {
            key: Tk
          }
          of this.loading.values()) Tk.kind === Lk.Glb && Tk.word === kk && Xk.push(Tk);
        for (let Tk = this.ready.length - 1; Tk >= 0; Tk--) {
          const {
            key: Fk,
            id: Ik
          } = this.ready[Tk];
          Fk.kind === Lk.Glb && Fk.word === kk && (this.ready.splice(Tk, 1), null !== Ik && (this.answered.delete(Ik), this.release(Ik)), Xk.push(Fk))
        }
        this.loadAgain(Xk)
      }
      onEvent(kk) {
        if (this.ee) return;
        const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
        for (let Ik = 0; Ik + 8 <= kk.byteLength; Ik += 8) {
          const kk = Fk.getUint8(Ik),
            Xk = Fk.getUint32(Ik + 4, !0);
          if (kk === qk) {
            this.answered.delete(Xk), this.release(Xk);
            continue
          }
          const Tk = {
            kind: Fk.getUint8(Ik + 1),
            index: Fk.getUint8(Ik + 2),
            word: Xk
          };
          kk === lk ? this.want(Tk) : kk === ak && this.loading.delete(Jk(Tk))
        }
      }
      reload(kk, Fk) {
        const Ik = Ik => kk.includes(Ik.kind) && (void 0 === Fk || Fk(Ik)),
          Xk = new Map;
        for (const Tk of this.answered.values()) Ik(Tk) && Xk.set(Jk(Tk), Tk);
        for (const [Tk, {
            key: ik
          }] of this.loading) Ik(ik) && Xk.set(Tk, ik);
        this.loadAgain(Xk.values())
      }
      loadAgain(kk) {
        for (const Fk of kk) this.loading.delete(Jk(Fk)), this.want(Fk)
      }
      drain(kk) {
        if (null !== kk)
          for (; this.ready.length > 0;) {
            if (!kk(yk, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.ee = !0, this.loading.clear(), this.ready.length = 0;
        for (const kk of this.answered.keys()) this.release(kk);
        this.answered.clear()
      }
      want(kk) {
        const Fk = Jk(kk);
        if (this.loading.has(Fk)) return;
        const Ik = {
          key: kk
        };
        this.loading.set(Fk, Ik), this.loadKey(kk).then((Xk => {
          this.ee || this.loading.get(Fk) !== Ik ? this.release(Xk.id) : (this.loading.delete(Fk), this.answered.set(Xk.id, kk), this.ready.push({
            record: Pk(kk, Zk, Xk),
            key: kk,
            id: Xk.id
          }))
        }), (Xk => {
          if (this.ee || this.loading.get(Fk) !== Ik) return;
          this.loading.delete(Fk), this.onFailure({
            key: kk,
            error: Xk
          });
          const Tk = Xk instanceof ik.e && "decode" === Xk.stage ? jk : ek;
          this.ready.push({
            record: Pk(kk, Tk, null),
            key: kk,
            id: null
          })
        }))
      }
      async loadKey(kk) {
        switch (kk.kind) {
          case Lk.Glb:
            return this.load(await this.glbImage(kk), "none");
          case Lk.LifeformAtlas:
            return this.load(xk(await this.sources.lifeformAtlasUrl(kk.word), kk), "none");
          case Lk.ArmourAtlas:
            return this.load(xk(await this.sources.armourAtlasUrl(), kk), "none");
          case Lk.Cape:
            return this.load(xk(await this.sources.capeUrl(kk.word), kk), "none");
          case Lk.AttachmentImage:
            return this.load(xk(await this.sources.attachmentImageUrl(kk.word), kk), "none");
          case Lk.GroupAtlas:
            return this.load(xk(await this.sources.groupAtlasUrl(kk.word), kk), "none");
          case Lk.BlockImage:
            return this.load(xk(await this.sources.blockImageUrl(kk.word), kk), "none");
          case Lk.Particle: {
            const Fk = await (kk.index === tk.Item ? this.sources.particleItemUrl(kk.word) : this.sources.particleTextureUrl(kk.word));
            return this.load(xk(Fk, kk), "flipY")
          }
          case Lk.GreyscaleArmour:
            return this.greyscaleArmour.load(kk.index, kk.word);
          default:
            throw new ik.e("fetch", `image kind ${kk.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(kk) {
        var Fk;
        let Ik = this.glbImages.get(kk.word);
        if (void 0 === Ik) {
          const Fk = this.glbTakenCount.get(kk.word),
            Xk = xk(await this.sources.glbUrl(kk.word), kk);
          try {
            Ik = Vk(await this.fetchFile(Xk))
          } catch (Tk) {
            throw new ik.e("fetch", Xk, {
              cause: Tk
            })
          }
          this.glbTakenCount.get(kk.word) === Fk && this.glbImages.set(kk.word, Ik)
        }
        const Xk = null === (Fk = Ik) || void 0 === Fk ? void 0 : Fk[kk.index];
        if (!Xk) throw new ik.e("decode", `image ${kk.index} of file ${2147483647&kk.word}`, {
          cause: null
        });
        return Xk
      }
    }

    function Jk(kk) {
      let {
        kind: Fk,
        index: Ik,
        word: Xk
      } = kk;
      return `${Fk}:${Ik}:${Xk}`
    }

    function xk(kk, Fk) {
      if (null === kk) throw new ik.e("fetch", `no URL for image ${Jk(Fk)}`, {
        cause: null
      });
      return kk
    }

    function Pk(kk, Fk, Ik) {
      var Xk, Tk, ik;
      const yk = new Uint8Array(16),
        lk = new DataView(yk.buffer);
      return lk.setUint8(0, kk.kind), lk.setUint8(1, kk.index), lk.setUint8(2, Fk), lk.setUint32(4, kk.word, !0), lk.setUint32(8, null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.id) && void 0 !== Xk ? Xk : 0, !0), lk.setUint16(12, Math.min(null !== (Tk = null === Ik || void 0 === Ik ? void 0 : Ik.width) && void 0 !== Tk ? Tk : 0, 65535), !0), lk.setUint16(14, Math.min(null !== (ik = null === Ik || void 0 === Ik ? void 0 : Ik.height) && void 0 !== ik ? ik : 0, 65535), !0), yk
    }
    const Kk = 1179937895,
      Qk = 1313821514,
      sk = 5130562;

    function Vk(kk) {
      var Fk;
      const Ik = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      if (kk.byteLength < 20 || Ik.getUint32(0, !0) !== Kk || Ik.getUint32(16, !0) !== Qk) return [];
      let Xk, Tk = 20 + Ik.getUint32(12, !0);
      try {
        Xk = JSON.parse((new TextDecoder).decode(kk.subarray(20, Tk)))
      } catch {
        return []
      }
      for (; Tk + 8 <= kk.byteLength && Ik.getUint32(Tk + 4, !0) !== sk;) Tk += 8 + Ik.getUint32(Tk, !0);
      const ik = null !== (Fk = Xk.images) && void 0 !== Fk ? Fk : [];
      if (0 === ik.length || Tk + 8 > kk.byteLength) return ik.map((() => null));
      const yk = kk.subarray(Tk + 8, Math.min(kk.byteLength, Tk + 8 + Ik.getUint32(Tk, !0)));
      return ik.map((kk => {
        var Fk, Ik, Tk;
        const ik = void 0 === kk.bufferView || null === (Fk = Xk.bufferViews) || void 0 === Fk ? void 0 : Fk[kk.bufferView];
        if (!ik || 0 !== (null !== (Ik = ik.buffer) && void 0 !== Ik ? Ik : 0) || void 0 === ik.byteLength) return null;
        const lk = null !== (Tk = ik.byteOffset) && void 0 !== Tk ? Tk : 0,
          ak = lk + ik.byteLength;
        return ak <= yk.byteLength ? yk.slice(lk, ak) : null
      }))
    }
  },
  40670: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk,
      c: () => ik,
      e: () => Tk
    });
    let Xk = null;

    function Tk(kk) {
      Xk = kk
    }

    function ik(kk) {
      Xk === kk && (Xk = null)
    }

    function yk() {
      var kk;
      null === (kk = Xk) || void 0 === kk || kk()
    }
  },
  36588: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Lk,
      h: () => Zk,
      l: () => Jk,
      p: () => qk
    });
    var Xk = Ik(25),
      Tk = Ik(2331),
      ik = Ik(2338),
      yk = Ik(2341),
      lk = Ik(2400),
      ak = Ik(34);

    function qk(kk, Fk) {
      return (!(0, yk.d)() || 0 === kk && 0 === Fk) && (0, ik.q)(Tk.m.Joystick, 0, kk, Fk, 0)
    }
    const Lk = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function tk(kk) {
      return kk.classList.contains("TouchKeyHit") && jk() ? null : kk.firstElementChild
    }

    function Zk(kk) {
      return kk.classList.contains("TouchKeyHit") && !kk.classList.contains("CanvasZone") ? {
        whole: !jk(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: ek(tk(kk))
      }
    }

    function jk() {
      return document.documentElement.classList.contains(lk.g)
    }

    function ek(kk) {
      return !(kk instanceof HTMLElement) || kk.offsetWidth <= 0 || kk.offsetHeight <= 0 ? null : {
        width: kk.offsetWidth,
        height: kk.offsetHeight
      }
    }

    function wk(kk, Fk) {
      const Ik = kk => Math.min(65535, Math.round(4 * kk));
      return (Ik(kk) | Ik(Fk) << 16) >>> 0
    }

    function Hk(kk) {
      return {
        x: kk.left + kk.width / 2,
        y: kk.top + kk.height / 2,
        radius: Math.min(kk.width, kk.height) / 2
      }
    }
    const Jk = new class {
      constructor(kk) {
        this.write = kk, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Fk ? this.elements.set(kk, {
          element: Fk,
          hidden: Ik
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
        let Ik = null,
          Xk = 1;
        for (const Tk of this.elements.keys()) {
          const ik = this.shown(Tk);
          if (!ik) continue;
          const {
            rect: yk,
            element: lk
          } = ik, ak = Hk(yk), qk = Math.max(0, yk.width / 2 - ak.radius), Lk = Math.max(0, yk.height / 2 - ak.radius), Zk = Math.max(0, Math.abs(kk - ak.x) - qk), jk = Math.max(0, Math.abs(Fk - ak.y) - Lk), wk = lk.firstElementChild;
          let Jk = Math.hypot(Zk, jk) / ak.radius;
          const xk = ek(tk(lk));
          xk && (Jk = Math.min(Jk, Math.max(2 * Math.abs(kk - ak.x) / xk.width, 2 * Math.abs(Fk - ak.y) / xk.height))), Jk < Xk && (Ik = {
            code: Tk,
            element: lk,
            key: wk,
            ...ak
          }, Xk = Jk)
        }
        return Ik
      }
      measureOne(kk) {
        const Fk = this.shown(kk);
        if (!Fk) return void this.write(Tk.m.TouchZone, kk, 0, 0, 0);
        const {
          rect: Ik,
          element: Xk
        } = Fk, ik = Hk(Ik);
        this.write(Tk.m.TouchZone, kk, ik.x - this.canvasLeft, ik.y - this.canvasTop, wk(Ik.width, Ik.height));
        const yk = ek(tk(Xk));
        this.write(Tk.m.TouchZone, 256 | kk, 0, 0, yk ? wk(yk.width, yk.height) : 0)
      }
      shown(kk) {
        const Fk = this.elements.get(kk),
          Ik = Xk.d.get("worldPanelHud");
        if (!Fk || Fk.hidden || "none" === Ik) return null;
        const Tk = Fk.element.getBoundingClientRect();
        return Tk.width <= 0 || Tk.height <= 0 ? null : {
          rect: Tk,
          element: Fk.element
        }
      }
    }(ik.q);
    (0, ak.i)(lk.d, (() => {
      Jk.measure()
    }))
  },
  40712: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      f: () => qk
    });
    var Xk = Ik(40843),
      Tk = Ik(39054),
      ik = Ik(36449),
      yk = Ik(40721),
      lk = Ik(40689);
    const ak = Xk.d.timeForPlayerToConnect - 1e4;
    async function qk(kk, Fk, Ik, Xk) {
      let ak;
      try {
        ak = await kk.getTrafficCode()
      } catch (ek) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", ek), new lk.t(ek)
      }
      const {
        gameNameWithVariation: qk,
        lobbyName: Lk
      } = Fk, tk = () => {
        const Fk = (0, ik.g)(kk, qk, Lk, ak, (kk => {
          var Fk;
          return null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.isUsingCustomGameTexturePack(kk)) && void 0 !== Fk && Fk
        }));
        Fk.joinOptions.wasmClient = !0;
        const Tk = (0, yk.J)();
        return null !== Tk && (Fk.joinOptions.renderBackend = Tk), Fk.joinOptions.joinAdHold = Xk, Fk
      }, {
        roomName: Zk,
        joinOptions: jk
      } = tk();
      return {
        endpoint: Fk.endpoint,
        roomName: Zk,
        joinOptions: jk,
        session: {
          gameNameWithVariation: qk,
          lobbyName: Lk,
          playerDbId: kk.whamm
        },
        optionsAfterRefusal: async Fk => await (0, Tk.d)(kk, Fk) ? tk().joinOptions : null
      }
    }
  },
  40966: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Lk,
      f: () => ik,
      i: () => tk,
      m: () => yk
    });
    var Xk = Ik(40946),
      Tk = Ik(40799);
    const ik = new class {
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
          for (const Ik of [...this.pageListeners]) Ik()
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
          for (const Ik of this.listeners) Ik()
      }
    };

    function yk(kk, Fk) {
      return {
        ...kk,
        armourAtlasUrl: () => {
          var Ik, Xk;
          return null !== (Ik = null === (Xk = Fk()) || void 0 === Xk ? void 0 : Xk.armourAtlasUrl()) && void 0 !== Ik ? Ik : kk.armourAtlasUrl()
        },
        lifeformAtlasUrl: Ik => ak(Fk(), (kk => kk.LIFEFORM_ATLAS_PATHS[Ik]), (() => kk.lifeformAtlasUrl(Ik))),
        groupAtlasUrl: Ik => ak(Fk(), (kk => kk.GROUP_ATLAS_PATHS[Ik]), (() => kk.groupAtlasUrl(Ik))),
        particleItemUrl: Xk => qk(Fk(), (async () => {
          const kk = await Ik.e(38).then((() => Ik(51036))).catch((() => null));
          return (null === kk || void 0 === kk ? void 0 : kk.particleItemSprite(Xk)) || null
        }), (() => kk.particleItemUrl(Xk))),
        blockImageUrl: Ik => qk(Fk(), (async () => {
          var kk, Fk;
          return null !== (kk = null === (Fk = await lk()) || void 0 === Fk ? void 0 : Fk.blockImageName(Ik)) && void 0 !== kk ? kk : null
        }), (() => kk.blockImageUrl(Ik)))
      }
    }

    function lk() {
      return (0, Tk.i)().catch((() => null))
    }

    function ak(kk, Fk, Ik) {
      return qk(kk, (async () => {
        var kk;
        const Ik = await lk(),
          Xk = null === Ik ? null : Fk(Ik),
          Tk = null !== (kk = null === Xk || void 0 === Xk ? void 0 : Xk.slice(Xk.lastIndexOf("/") + 1)) && void 0 !== kk ? kk : null;
        return "Player_Atlas" === Tk ? null : Tk
      }), Ik)
    }
    async function qk(kk, Fk, Ik) {
      if (null !== kk) {
        const Ik = await Fk(),
          Xk = null === Ik ? null : kk.textureUrl(Ik);
        if (null !== Xk) return Xk
      }
      return Ik()
    }
    const Lk = 0;

    function tk(kk) {
      const Fk = [Xk.i.ArmourAtlas, Xk.i.LifeformAtlas, Xk.i.GroupAtlas, Xk.i.BlockImage, Xk.i.Particle];
      kk.reload(Fk, (kk => {
        switch (kk.kind) {
          case Xk.i.Particle:
            return kk.index === Xk.l.Item;
          case Xk.i.LifeformAtlas:
            return kk.word !== Lk;
          default:
            return !0
        }
      }))
    }
  },
  40845: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk,
      d: () => lk,
      e: () => yk,
      i: () => Tk,
      k: () => ik
    });
    const Xk = 1e3;

    function Tk() {
      ak((() => {
        window.location.reload()
      }))
    }

    function ik() {
      return new Promise((() => {}))
    }

    function yk(kk) {
      ak((() => {
        window.location.replace(kk(window.location.href))
      }))
    }

    function lk(kk) {
      Promise.resolve().then((() => Ik(104))).then((Fk => {
        let {
          currentUrl: Ik
        } = Fk;
        yk((() => Ik.mergeSearchParamsInto(kk)))
      }), (() => {
        yk((() => kk))
      }))
    }

    function ak(kk) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => Ik(1665))).then((Fk => {
        let {
          prepareForUnloadWithoutConfirmation: Ik
        } = Fk;
        try {
          Ik()
        } catch (Xk) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Xk), window.onbeforeunload = null
        }
        kk()
      }), (() => {
        window.onbeforeunload = null, kk()
      })) : kk()
    }
  },
  5071: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return Tk(kk, Fk)
    }

    function Tk(kk, Fk) {
      if (kk === Fk) return !0;
      if ("object" !== typeof kk || "object" !== typeof Fk || null === kk || null === Fk || Array.isArray(kk) !== Array.isArray(Fk)) return !1;
      const Ik = kk,
        Xk = Fk,
        ik = Object.keys(Ik);
      return ik.length === Object.keys(Xk).length && ik.every((kk => Object.prototype.hasOwnProperty.call(Xk, kk) && Tk(Ik[kk], Xk[kk])))
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  40917: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => sk,
      e: () => Kk,
      f: () => wk,
      i: () => ek
    });
    var Xk = Ik(1759),
      Tk = Ik(1199),
      ik = Ik(39046),
      yk = Ik(36486),
      lk = Ik(39066),
      ak = Ik(40689);
    const qk = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Lk = 3,
      tk = [500, 1500];

    function Zk(kk) {
      const Fk = new URL(kk);
      return {
        secure: "https:" === Fk.protocol || "wss:" === Fk.protocol,
        host: Fk.host,
        pathname: Fk.pathname.replace(/\/+$/, ""),
        search: Fk.searchParams.toString()
      }
    }

    function jk(kk, Fk, Ik) {
      const {
        secure: Xk,
        host: Tk,
        pathname: ik,
        search: yk
      } = Zk(kk);
      return `${Xk?"https":"http"}://${Tk}${ik}/matchmake/${Fk}/${encodeURIComponent(Ik)}${yk?`?${yk}`:""}`
    }

    function ek(kk, Fk) {
      var Ik;
      const Xk = null !== (Ik = Fk.protocol) && void 0 !== Ik ? Ik : "ws";
      if ("ws" !== Xk) throw new Error(`seat reservation asks for the ${Xk} transport`);
      const {
        secure: Tk,
        host: ik,
        pathname: yk,
        search: lk
      } = Zk(kk), ak = new URLSearchParams(lk);
      ak.append("sessionId", Fk.sessionId), Fk.reconnectionToken && ak.append("reconnectionToken", Fk.reconnectionToken);
      return `${Tk?"wss":"ws"}://${Fk.room.publicAddress||`${ik}${yk}`}/${Fk.room.processId}/${Fk.room.roomId}?${ak.toString()}`
    }
    async function wk(kk, Fk, Ik) {
      var lk;
      let qk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Zk = null !== (lk = qk.sleep) && void 0 !== lk ? lk : Xk.b,
        ek = new Tk.b(qk.signal),
        wk = new yk.e((() => {
          (0, Tk.h)(ek.controller, new yk.f("seat"))
        })),
        {
          signal: Pk
        } = ek;
      try {
        const Xk = await (0, ik.i)((() => async function(kk, Fk, Ik, Xk) {
          var ik;
          const {
            signal: yk,
            sleep: lk
          } = Xk, qk = jk(kk, "joinOrCreate", Fk), Zk = JSON.stringify(Ik);
          let ek = null;
          for (let jk = 0; jk < Lk; jk++) {
            var wk;
            if (jk > 0) await lk(null !== (wk = tk[jk - 1]) && void 0 !== wk ? wk : 1500, yk);
            let kk;
            (0, Tk.m)(yk);
            try {
              kk = await Jk(qk, Zk, Xk)
            } catch (Pk) {
              (0, Tk.m)(yk), ek = Hk(Pk);
              continue
            }
            const {
              response: Fk,
              answer: Ik,
              refusal: ik,
              lost: Lk
            } = kk;
            if (null === Lk) {
              if (null !== ik) throw xk(ik, Ik);
              if (Fk.ok && null !== Ik && Vk(Ik)) return Ik;
              ek = new ak.r(`seat request answered HTTP ${Fk.status}${null===Ik?" without JSON":" without a seat"}`, !1, void 0, Fk.status)
            } else ek = Hk(Lk.error)
          }
          throw null !== (ik = ek) && void 0 !== ik ? ik : new ak.r("seat request made no attempt", !1)
        }(kk, Fk, Ik, {
          ...qk,
          signal: Pk,
          sleep: Zk
        })), Pk, Zk);
        return wk.answered(), Xk
      } finally {
        wk.stop(), ek.unfollow()
      }
    }

    function Hk(kk) {
      return new ak.r(kk instanceof Error ? kk.message : String(kk), !0, kk)
    }
    async function Jk(kk, Fk, Ik) {
      var Xk;
      const {
        signal: ik
      } = Ik, yk = null !== (Xk = Ik.fetch) && void 0 !== Xk ? Xk : fetch, lk = await yk(kk, {
        method: "POST",
        headers: {
          ...qk,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: Fk,
        credentials: "include",
        signal: ik
      }), {
        answer: ak,
        lost: Lk
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
      }(lk), tk = null !== ak && "string" === typeof ak.error ? ak.error : null;
      var Zk;
      null !== tk && (null === (Zk = Ik.onRefusal) || void 0 === Zk || Zk.call(Ik));
      return (0, Tk.m)(ik), {
        response: lk,
        answer: ak,
        refusal: tk,
        lost: Lk
      }
    }

    function xk(kk, Fk) {
      return new ak.j(kk, "number" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.code) ? Fk.code : 0, (0, lk.p)(kk).text)
    }
    class Pk extends Error {
      constructor(kk, Fk) {
        super(kk), this.code = Fk, this.name = "SeatHttpError"
      }
    }
    async function Kk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Tk,
        answer: ik,
        refusal: yk,
        lost: lk
      } = await Jk(jk(kk, "reconnect", Fk), JSON.stringify({
        reconnectionToken: Ik
      }), Xk);
      if (null !== lk) throw lk.error;
      if (!Tk.ok) {
        const kk = null !== ik && "number" === typeof ik.code && 0 !== ik.code ? ik.code : Tk.status;
        throw new Pk(`the seat's reconnect was refused: ${null!==yk&&void 0!==yk?yk:`HTTP ${Tk.status}`}`, kk)
      }
      if (null !== yk) throw xk(yk, ik);
      if (null === ik || !Vk(ik)) throw new Error("the seat's reconnect answered " + (null === ik ? "without JSON" : "without a seat"));
      return {
        ...ik,
        reconnectionToken: Ik
      }
    }
    const Qk = 10;

    function sk(kk) {
      if (kk.byteLength < 2 || kk[0] !== Qk) return null;
      const Fk = 2 + kk[1];
      return Fk > kk.byteLength ? null : (new TextDecoder).decode(kk.subarray(2, Fk))
    }

    function Vk(kk) {
      const Fk = kk.room;
      return "string" === typeof kk.sessionId && "object" === typeof Fk && null !== Fk && "string" === typeof Fk.roomId && "string" === typeof Fk.processId && "string" === typeof Fk.name
    }
  },
  40598: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      B: () => Vk,
      F: () => nk,
      H: () => Kk,
      L: () => Qk,
      O: () => Hk,
      R: () => vk,
      T: () => pk,
      X: () => ek,
      Z: () => bk,
      ab: () => xk,
      db: () => Jk,
      e: () => Tk,
      hb: () => Pk,
      i: () => uk,
      j: () => Gk,
      lb: () => sk,
      m: () => jk,
      q: () => wk,
      s: () => Ok,
      t: () => zk,
      x: () => Ek,
      z: () => Sk
    });
    var Xk = Ik(2913);
    const Tk = {
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

    function ik(kk, Fk) {
      return !ArrayBuffer.isView(kk) || kk instanceof DataView ? Array.isArray(kk) ? kk.map((kk => Fk(kk))) : kk : Array.from(kk, (kk => Fk(kk)))
    }

    function yk(kk) {
      if ("string" !== typeof kk) return kk;
      for (let Fk = 0; Fk < kk.length; Fk++) {
        const Ik = kk.charCodeAt(Fk);
        if (Ik >= 55296 && Ik <= 57343) return ak.decode(lk.encode(kk))
      }
      return kk
    }
    const lk = new TextEncoder,
      ak = new TextDecoder;

    function qk(kk) {
      return kk
    }
    let Lk;

    function tk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [yk(kk.Ya), yk(kk.Aa)]
    }

    function Zk(kk) {
      return null === kk || "object" !== typeof kk ? kk : [ik(kk.EX, qk), ik(kk.yy, qk)]
    }

    function jk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.oq), yk(Fk.vq)];
      var Fk
    }

    function ek(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.id, Fk.HL];
      var Fk
    }

    function wk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.Wi, yk(Fk.Bi), Fk.Yi, yk(Fk.mi), Fk.ky, Fk.Fy, Fk.gy, yk(Fk.my), yk(Fk.hy)];
      var Fk
    }

    function Hk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ik(Fk.TL, qk), Fk.iL];
      var Fk
    }

    function Jk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ik(Fk.wq, (kk => yk(kk))), yk(Fk.Hq), Fk.Jq];
      var Fk
    }

    function xk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [ik(Fk.Wy, qk), yk(Fk.Yy), Fk.Ay];
      var Fk
    }

    function Pk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.VX), yk(Fk.zX)];
      var Fk
    }

    function Kk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.Il)];
      var Fk
    }

    function Qk(kk) {
      return yk(kk)
    }

    function sk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.dq), yk(Fk.Yq), yk(Fk.Ya), yk(Fk.Aa)];
      var Fk
    }

    function Vk(kk) {
      return tk(kk)
    }

    function zk(kk) {
      return tk(kk)
    }

    function Sk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.iy)];
      var Fk
    }

    function vk(kk) {
      return kk
    }

    function Ek(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.vy), yk(Fk.Ey)];
      var Fk
    }

    function Ok(kk) {
      return yk(kk)
    }

    function nk(kk) {
      return Zk(kk)
    }

    function Gk(kk) {
      return Zk(kk)
    }

    function pk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [yk(Fk.Aq)];
      var Fk
    }

    function uk(kk) {
      return (Lk ??= (0, Xk.g)().map((kk => kk.name)), Lk).map((Fk => {
        return "string" === typeof(Ik = kk[Fk]) ? yk(Ik) : ik(Ik, qk);
        var Ik
      }))
    }

    function bk(kk) {
      return null === (Fk = kk) || "object" !== typeof Fk ? Fk : [Fk.Rq, Fk.Uq, Fk.Cq];
      var Fk
    }
  },
  40971: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik
    });
    var Xk = Ik(40978),
      Tk = Ik(40966);
    const ik = new class {
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
          for (const Ik of this.gameListeners) Ik()
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
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Xk.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Tk.f)
  },
  5063: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      i: () => lk
    });
    var Xk = Ik(2071),
      Tk = Ik(5071);
    let ik = null;

    function yk(kk) {
      ik = {
        pack: kk.metaData.id === Xk.b ? null : kk
      }
    }

    function lk(kk) {
      return !(null === ik || !(0, Tk.e)(ik.pack, kk)) && (ik = null, !0)
    }
  },
  40682: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      followPageUiPack: () => aL,
      packForGame: () => lL,
      playWasmGame: () => KL,
      prefetchWasmPreviews: () => Za,
      setGamePackConfirm: () => Kq,
      startWasmPlay: () => jL,
      startWasmPreviews: () => ta
    });
    var Xk = Ik(187),
      Tk = Ik(1234),
      ik = Ik(149),
      yk = Ik(39087),
      lk = Ik(1875),
      ak = Ik(34),
      qk = Ik(4671),
      Lk = Ik(1287),
      tk = Ik(1652),
      Zk = Ik(1301),
      jk = Ik(39250),
      ek = Ik(1276),
      wk = Ik(39264),
      Hk = Ik(39171),
      Jk = Ik(36458),
      xk = Ik(39046),
      Pk = Ik(8880),
      Kk = Ik(36486),
      Qk = Ik(40685),
      sk = Ik(4792),
      Vk = Ik(40596),
      zk = Ik(40661),
      Sk = Ik(40598);
    const vk = {
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

    function Ek(kk) {
      const Fk = {
        ...zk.b[kk]
      };
      for (const Ik of Object.keys(vk[kk])) delete Fk[Ik];
      return Fk
    }

    function Ok() {
      var kk, Fk;
      return null === (kk = null === (Fk = (0, Vk.k)()) || void 0 === Fk ? void 0 : Fk.localPlayerAlive()) || void 0 === kk || kk
    }

    function nk() {
      var kk, Fk;
      return null !== (kk = null === (Fk = (0, Vk.k)()) || void 0 === Fk ? void 0 : Fk.localDeaths()) && void 0 !== kk ? kk : null
    }
    const Gk = {
        current: Ok,
        watch: kk => {
          let Fk = Ok(),
            Ik = nk();
          return (0, sk.y)((() => {
            const Xk = Ok(),
              Tk = nk(),
              ik = null !== Tk && null !== Ik && Tk !== Ik;
            Ik = Tk, ik ? (Fk || kk(!0), kk(!1), Xk && kk(!0), Fk = Xk) : Xk !== Fk && (Fk = Xk, kk(Xk))
          }))
        }
      },
      pk = {
        states: {
          ...Ek("states"),
          localPlayerAlive: Gk
        },
        events: {
          ...Ek("events"),
          localPlayerAliveSet: {
            watch: Gk.watch
          }
        },
        commands: {
          ...Ek("commands"),
          respawn: () => {
            var kk;
            null === (kk = (0, Vk.k)()) || void 0 === kk || kk.respawn()
          },
          playEmote: kk => {
            var Fk;
            null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.send(Sk.e.PlayEmote, (0, Sk.H)({
              Il: kk
            }))
          },
          applyTemporaryThirdPerson: kk => {
            var Fk;
            let {
              durationMs: Ik
            } = kk;
            null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.thirdPersonFor(Ik)
          },
          bindCustomButtonKeys: kk => {
            var Fk;
            null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.bindCustomButtonKeys(kk)
          },
          pressCustomButton: kk => {
            var Fk;
            let {
              id: Ik,
              down: Xk
            } = kk;
            null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.pressCustomButton(Ik, Xk)
          },
          setLookSensitivity: () => {},
          wakeUp: kk => {
            const Fk = (0, Sk.T)({
                Aq: kk
              }),
              Ik = () => {
                const kk = (0, Vk.k)();
                return !(null !== kk && void 0 !== kk && kk.isSessionLive) || kk.send(Sk.e.StopSleeping, Fk)
              };
            if (!Ik()) {
              const kk = (0, sk.y)((() => {
                Ik() && kk()
              }))
            }
          },
          setCameraZoom: kk => {
            var Fk;
            null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.setCameraZoom(kk)
          }
        },
        queries: Ek("queries"),
        lookups: {
          ...Ek("lookups"),
          cameraZoom: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = (0, Vk.k)()) || void 0 === Fk ? void 0 : Fk.cameraZoom()) && void 0 !== kk ? kk : 0
          }
        }
      };
    var uk = Ik(39066),
      bk = Ik(40689),
      Rk = Ik(40697),
      Uk = Ik(40712),
      Ck = Ik(1244),
      Nk = Ik(104),
      ck = Ik(4508),
      Wk = Ik(3671),
      fk = Ik(1160);
    const Bk = {
      RL: () => (0, Ck.c)(),
      inbuiltOverwritten: () => ck.f,
      reflectApplyHit: () => fk.b,
      definerHit: () => Nk.currentUrl.c,
      emitReplaced: () => (0, ak.d)(),
      confirmMesh: () => (0, Wk.c)(),
      confirmMeshHitStack: () => (0, Wk.e)()
    };
    var dk = Ik(40702),
      Yk = Ik(40845);
    var Ak = Ik(25),
      gk = Ik(1881),
      mk = Ik(1916),
      hk = Ik(1585),
      rk = Ik(1953),
      Dk = Ik(1179),
      Mk = Ik(1241),
      kF = Ik(40852);

    function FF() {
      return Mk.d.get().getCurrentLanguageCode()
    }

    function IF(kk) {
      const Fk = () => {
        kk({
          translate: (kk, Fk) => (0, Dk.t)(FF(), kk, Fk),
          keyBindingText: kk => {
            const Fk = (0, mk.r)(kk, Ak.d.get("isTouchScreen"));
            return null !== Fk ? (0, Dk.w)(FF(), Fk.translationKey, Fk.params) : (0, mk.n)((0, mk.q)(kk))
          },
          isFriend: rk.h,
          hiddenNames: gk.d.shown,
          loadsFontRest: (0, kF.e)(FF())
        })
      };
      let Ik = !1;
      const Xk = () => {
          const kk = FF();
          (0, Dk.j)(kk).then((() => {
            Ik || kk !== FF() || Fk()
          }))
        },
        Tk = () => hk.c.getSocialState().friends.map((kk => kk.name.toLowerCase())).sort().join(" ");
      let ik = Tk();
      Fk(), Xk();
      const yk = [(0, Mk.e)((() => {
        Fk(), Xk()
      })), (0, ak.i)("customBindingsChanged", Fk), (0, ak.i)("appManagerUpdated|isTouchScreen", Fk), (0, rk.d)((() => {
        const kk = Tk();
        kk !== ik && (ik = kk, Fk())
      })), gk.d.subscribe(Fk)];
      return () => {
        Ik = !0;
        for (const kk of yk) kk()
      }
    }
    var XF = Ik(633),
      TF = Ik(1018),
      iF = Ik(1902),
      yF = Ik(318),
      lF = Ik(178),
      aF = Ik(2801),
      qF = Ik(2803),
      LF = Ik(38726),
      tF = Ik(4692),
      ZF = Ik(40870),
      jF = Ik(684),
      eF = Ik(646),
      wF = Ik(705),
      HF = Ik(710),
      JF = Ik(1894),
      xF = Ik(3680),
      PF = Ik(3223);
    let KF = null;
    var QF = Ik(1194),
      sF = Ik(1199),
      VF = Ik(4411),
      zF = Ik(3388),
      SF = Ik(51),
      oF = Ik(314),
      vF = Ik(309),
      EF = Ik(40891),
      OF = Ik(4794);
    var nF = Ik(37718),
      GF = Ik(40896);
    class pF {
      constructor(kk, Fk) {
        this.showView = kk, this.holdForAd = Fk
      }
      pointerUnlockRequestsChanged() {
        (0, EF.C)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, EF.p)())
        }]
      }
      setGameViewShown(kk) {
        this.showView(kk)
      }
      setGameView(kk) {
        (0, GF.f)(kk)
      }
      videoAdHold(kk, Fk) {
        this.holdForAd(kk, Fk)
      }
    }
    class uF {
      leave(kk) {
        ! function(kk) {
          if (null !== (0, Zk.d)().websocketUrl) try {
            (0, sk.I)().leaveGame(kk)
          } finally {
            (0, Zk.s)({
              websocketUrl: null
            })
          }
        }(kk)
      }
      isReplay() {
        return !1
      }
    }
    class bF {
      watchFrameStarts(kk) {
        return (0, sk.t)(kk)
      }
      watchFrames(kk) {
        return (0, sk.s)(kk)
      }
      watchTicks(kk) {
        return (0, sk.y)(kk)
      }
    }
    var RF = Ik(40900);

    function UF(kk) {
      return kk >= 0 ? Math.min(1, kk) : 0
    }

    function CF(kk, Fk) {
      const {
        fade: Ik
      } = kk;
      return null === Ik || Fk - Ik.at >= Ik.ms ? kk.volume : Ik.from + (kk.volume - Ik.from) * Math.max(0, (Fk - Ik.at) / Ik.ms)
    }

    function NF(kk) {
      const Fk = Object.entries(kk),
        Ik = new Uint32Array(Fk.length);
      let Xk = 0;
      for (const [yk, [, lk]] of Fk.entries()) Ik[yk] = lk.length, Xk += lk.length;
      const Tk = new Float64Array(3 * Xk);
      let ik = 0;
      for (const [, yk] of Fk)
        for (const kk of yk) Tk.set(kk, ik), ik += 3;
      return {
        blocks: Fk.map((kk => {
          let [Fk] = kk;
          return Fk
        })).join("\0"),
        counts: Ik,
        values: Tk
      }
    }
    class cF {
      constructor(kk, Fk) {
        this.core = kk, this.warn = Fk, this.latest = 0
      }
      async feed() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WF;
        const Fk = ++this.latest;
        let Ik;
        try {
          Ik = await kk()
        } catch (Xk) {
          return void(this.core.isStopped || Fk !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Xk))
        }
        Fk === this.latest && (this.core.setBlockColours(Ik) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function WF() {
      return NF((await Ik.e(204).then((() => Ik(34274)))).averageColors)
    }
    var fF = Ik(4797),
      BF = Ik(4799),
      dF = Ik(40641),
      YF = Ik(3164),
      AF = Ik(36236),
      gF = Ik(40752),
      mF = Ik(621),
      hF = Ik(37101),
      rF = Ik(614),
      DF = Ik(337),
      MF = Ik(40738);
    const kI = [3e4, 12e4, 3e5];
    class FI extends Error {}
    const II = {
      mobTypes: mF.n,
      vehicleTypes: hF.d,
      mobAiStates: mF.l,
      playerPoses: rF.u
    };
    var XI = Ik(40726),
      TI = Ik(40776),
      iI = Ik(1076),
      yI = Ik(40905),
      lI = Ik(40914),
      aI = Ik(2889),
      qI = Ik(39034),
      LI = Ik(4814),
      tI = Ik(2331);
    const ZI = tI.A.KeysDisabled | tI.A.LookFrozen | tI.A.ClicksSuppressed,
      jI = aI.g;
    var eI = (0, lI.c)("resumingConn");
    class wI {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = kk, this.now = Fk, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, eI, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new qI.b({
          reconnect: kk => this.reconnect(kk),
          isLive: () => kk.isLive(),
          onReconnected: Fk => {
            this.landed = Fk, kk.onReconnected(Fk), this.landIfResumed()
          },
          onGaveUp: (Fk, Ik) => {
            this.abortAttempt(), kk.onGaveUp(Fk, Ik)
          },
          freeze: Fk => {
            kk.sE(Fk), (0, LI.g)(ZI, Fk ? ZI : 0, "reconnectFreeze")
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
        return (0, yI.c)(this, eI)[eI]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(kk) {
        let {
          conn: Fk,
          graceMs: Ik,
          sessionBased: Xk,
          replayOffer: Tk
        } = kk;
        this.session.onInitialInfo(Ik, Xk), this.isResuming() && (this.initialInfoConn = Fk, this.initialInfoOffer = Tk, this.landIfResumed())
      }
      onResumeComplete(kk) {
        0 !== kk && (kk === (0, yI.c)(this, eI)[eI] ? ((0, yI.c)(this, eI)[eI] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = kk))
      }
      onDropped(kk) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, yI.c)(this, eI)[eI] = 0, this.session.onConnectionLost(kk)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, yI.c)(this, eI)[eI] = 0, this.session.end()
      }
      reconnect(kk) {
        const Fk = this.attempt;
        if (null !== Fk && this.awaitingJoinRoom(Fk)) return Fk.result;
        this.abortAttempt();
        const Ik = new AbortController,
          Xk = this.drops,
          Tk = {
            attachedAt: null
          },
          ik = this.shell.reconnect(kk, Ik.signal, (() => {
            Tk.attachedAt = this.now()
          })).then((kk => {
            if (this.clearAttempt(yk), this.drops !== Xk) throw new Error("the resumed room dropped before its attempt settled");
            return kk
          }), (kk => {
            throw this.clearAttempt(yk), kk
          })),
          yk = {
            abort: Ik,
            socket: Tk,
            result: ik
          };
        return this.attempt = yk, ik
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
        return null !== Fk && this.now() - Fk < jI
      }
      releaseSeat(kk) {
        const Fk = this.attempt,
          Ik = null !== Fk && this.awaitingJoinRoom(Fk);
        this.abortAttempt(new bk.o), Ik || this.shell.releaseSeat(kk)
      }
      landIfResumed() {
        const kk = this.landed;
        if (null !== kk && kk.conn === this.initialInfoConn) {
          const Fk = this.initialInfoOffer && this.completedEarlyConn !== kk.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !Fk) return void this.session.onResumed();
          (0, yI.c)(this, eI)[eI] = kk.conn, this.session.onResuming()
        }
      }
    }
    var HI = Ik(39040),
      JI = Ik(40917),
      xI = Ik(36474),
      PI = Ik(36466),
      KI = Ik(2071),
      QI = Ik(1844),
      sI = Ik(4284),
      VI = Ik(40757),
      zI = Ik(5063);

    function SI(kk) {
      let {
        pack: Fk,
        gameSource: Ik
      } = kk;
      if (null !== Ik && "" !== Ik) return `game:${Ik}`;
      if (null === Fk) return "default";
      const {
        id: Xk,
        version: Tk
      } = Fk.metaData;
      if (Xk !== KI.l.CUSTOM) return `${Xk}@${Tk}`;
      const ik = [];
      for (const yk of [Fk.textureOverrides, Fk.modelOverrides, Fk.animations])
        for (const [kk, Fk] of Object.entries(null !== yk && void 0 !== yk ? yk : {})) ik.push(`${kk}:${Fk.length}`);
      return `${Xk}:${(0,QI.r)(ik.join())}`
    }
    var oI = Ik(4395),
      vI = Ik(3175),
      EI = Ik(40923),
      OI = Ik(650),
      nI = Ik(3182),
      GI = Ik(4491),
      pI = Ik(41),
      uI = Ik(40817),
      bI = Ik(4430),
      RI = Ik(2338),
      UI = Ik(1580),
      CI = Ik(1604),
      NI = Ik(1270),
      cI = Ik(111),
      WI = Ik(297),
      fI = Ik(39080),
      BI = Ik(2341),
      dI = Ik(4810);
    const YI = new Set([fF.rb.KeyDown, fF.rb.MouseMove, fF.rb.MouseDown, fF.rb.Wheel, fF.rb.TouchStart, fF.rb.TouchMove]);

    function AI(kk) {
      return (kk.shiftKey ? fF.Kb.Shift : 0) | (kk.ctrlKey ? fF.Kb.Ctrl : 0) | (kk.altKey ? fF.Kb.Alt : 0) | (kk.metaKey ? fF.Kb.Meta : 0) | ("repeat" in kk && kk.repeat ? fF.Kb.Repeat : 0) | (kk.isTrusted ? 0 : fF.Kb.Untrusted | function(kk) {
        try {
          const {
            editable: Fk,
            outsideView: Ik
          } = (0, fI.e)(kk.target);
          return (Fk ? fF.Kb.UntrustedEditable : 0) | (Ik ? fF.Kb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(kk))
    }

    function gI(kk) {
      return "touchOnly" !== (0, cI.e)() && "function" === typeof kk.requestPointerLock
    }

    function mI(kk) {
      return 0 === kk.button ? kk.altKey ? dI.o["Alt+Left Click"] : dI.o.Mouse1 : 1 === kk.button ? dI.o.Mouse2 : dI.o.Mouse3
    }
    const hI = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      rI = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      DI = 32768,
      MI = 1;

    function kX(kk) {
      return Math.min(Math.max(Math.round(kk), 0), 65535)
    }

    function FX(kk, Fk, Ik) {
      const Xk = [],
        Tk = (kk, Fk, Ik, Tk) => {
          const ik = kk => {
            (0, CI.v)(kk) || Ik(kk)
          };
          kk.addEventListener(Fk, ik, Tk), Xk.push((() => {
            kk.removeEventListener(Fk, ik, Tk)
          }))
        },
        ik = {
          capture: !0,
          passive: !0
        },
        yk = (kk, Ik, Xk, Tk, ik) => (!(0, BI.d)() || !YI.has(kk)) && (Fk(kk, Ik, Xk, Tk, ik), !0),
        lk = () => document.pointerLockElement === kk,
        ak = (0, WI.f)(),
        qk = kk => {
          kk.ctrlKey && Ik.ctrlCombosAreGames() && !(0, LI.f)(kk.target) && kk.preventDefault()
        },
        Lk = (kk, Xk, Tk) => {
          Ik.inspect(kk, Xk, !1), Fk(fF.rb.KeyUp, Xk, 0, 0, (0, RI.l)(Tk, kk.timeStamp)), Ik.keyReleased(Xk)
        },
        tk = new Map,
        Zk = (kk, Fk, Ik) => kk[Ik] || ("AltRight" === Fk || "ControlLeft" === Fk) && kk.getModifierState("AltGraph"),
        jk = new Map,
        ek = () => {
          tk.clear(), jk.clear()
        },
        wk = kk => {
          if (kk.isTrusted && document.hasFocus())
            for (const [Fk, Ik] of jk) jk.delete(Fk), Zk(kk, Fk, Ik) || (tk.delete(Fk), Lk(kk, dI.o[Fk], AI(kk)))
        };
      kk.tabIndex = -1;
      let Hk = 0,
        Jk = 0;
      const xk = () => {
        const Fk = kk.getBoundingClientRect();
        Hk = Fk.left, Jk = Fk.top
      };
      let Pk = "mouse";
      const Kk = () => !lk() && ("mouse" === Pk || !Ik.touchUiShown()),
        Qk = (kk, Fk, Ik) => {
          const Xk = (kX(kk.clientX - Hk) | kX(kk.clientY - Jk) << 16) >>> 0;
          yk(fF.rb.MouseMove, fF.Mb.Point, Fk, Ik, Xk)
        };
      let sk = !1,
        Vk = 0;
      const zk = () => {
        sk && (sk = !1, Ik.viewShown() && (0, EF.U)())
      };
      Xk.push((() => {
        clearTimeout(Vk)
      })), Tk(window, "keydown", (kk => {
        "Escape" === kk.key ? (0, EF.H)(!0) : kk.repeat || (0, LI.f)(kk.target) || (sk = !0, clearTimeout(Vk), Vk = window.setTimeout(zk, 0))
      }), ik), Tk(window, "keydown", (kk => {
        zk(), qk(kk), wk(kk);
        const Fk = dI.o[kk.code];
        if ("number" !== typeof Fk || !Ik.viewShown()) return;
        const Xk = (0, LI.f)(kk.target);
        Xk || !Ik.prevents(Fk) && !hI.has(kk.code) || kk.preventDefault(), kk.repeat || Ik.inspect(kk, Fk, !0), yk(fF.rb.KeyDown, Fk, 0, 0, (0, RI.l)(AI(kk), kk.timeStamp)) && tk.set(kk.code, Fk), Xk || Ik.keyPressed(Fk)
      }), {
        capture: !1,
        passive: !1
      }), Tk(window, "keyup", (kk => {
        "Escape" === kk.key && (0, EF.H)(!1), qk(kk), tk.delete(kk.code), jk.delete(kk.code), wk(kk);
        const Fk = dI.o[kk.code];
        "number" === typeof Fk && Lk(kk, Fk, AI(kk))
      }), {
        capture: !0,
        passive: !1
      }), Tk(window, "mousemove", (kk => {
        "mouse" === Pk && Kk() ? Qk(kk, kk.movementX, kk.movementY) : lk() ? yk(fF.rb.MouseMove, fF.Mb.Stamped, kk.movementX, kk.movementY, (0, RI.l)(0, kk.timeStamp)) : yk(fF.rb.MouseMove, 0, kk.movementX, kk.movementY, 0)
      }), ik);
      let Sk = 0,
        vk = 0;
      const Ek = [];
      let Ok = !1,
        nk = !1;
      Tk(kk, "mousedown", (kk => {
        if ((0, BI.d)()) return;
        wk(kk);
        const Xk = 1 << kk.button;
        if (!lk() && (0, EF.Q)() && (0, EF.e)() && (nk = !0, !Ok)) return void(Sk |= Xk);
        Sk &= ~Xk;
        const Tk = kk.button <= 2 ? mI(kk) : void 0;
        void 0 !== Tk && (Ek[kk.button] = Tk, Ik.inspect(kk, Tk, !0)), Kk() && Qk(kk, 0, 0), Fk(fF.rb.MouseDown, kk.button, kk.clientX, kk.clientY, (0, RI.l)(AI(kk), kk.timeStamp)), vk |= Xk, void 0 !== Tk && Ik.keyPressed(Tk)
      }), ik), Tk(window, "mouseup", (kk => {
        var Xk;
        wk(kk);
        const Tk = 1 << kk.button,
          ik = 0 !== (Sk & ~vk & Tk);
        if (Sk &= ~Tk, vk &= ~Tk, ik) return;
        const yk = kk.button <= 2 ? null !== (Xk = Ek[kk.button]) && void 0 !== Xk ? Xk : mI(kk) : void 0;
        void 0 !== yk && Ik.inspect(kk, yk, !1), Fk(fF.rb.MouseUp, kk.button, kk.clientX, kk.clientY, (0, RI.l)(AI(kk), kk.timeStamp)), void 0 !== yk && Ik.keyReleased(yk)
      }), ik), Tk(kk, "contextmenu", (kk => {
        kk.preventDefault()
      }), {
        passive: !1
      });
      const Gk = kk => {
        (lk() || (0, EF.n)() && (0, NI.n)()) && (kk.ctrlKey || ak && !document.fullscreenElement) && kk.preventDefault()
      };
      Tk(kk, "wheel", (kk => {
        Gk(kk), wk(kk), yk(fF.rb.Wheel, kk.deltaMode, kk.deltaX, kk.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const pk = {
          capture: !0,
          passive: !1
        },
        uk = kk => {
          kk ? window.addEventListener("wheel", Gk, pk) : window.removeEventListener("wheel", Gk, pk)
        };
      uk((0, EF.n)()), Xk.push((0, EF.x)(uk)), Xk.push((() => {
        uk(!1)
      }));
      const bk = new Map,
        Rk = new Set,
        Uk = kk => {
          const Fk = "stylus" === kk.touchType;
          for (const Ik of bk.values())
            if (!Ik.touched && (Fk || Math.abs(kk.clientX - Ik.x) <= MI && Math.abs(kk.clientY - Ik.y) <= MI)) return Ik.touched = !0, !0;
          return !1
        },
        Ck = kk => 32767 & kk,
        Nk = new Set,
        ck = kk => Ik => {
          const Xk = (0, RI.l)(AI(Ik), Ik.timeStamp);
          kk !== fF.rb.TouchStart && kk !== fF.rb.TouchMove || ((kk, Ik) => {
            const Xk = kk.touches;
            if (Xk)
              for (const Tk of Nk) {
                let kk = !1;
                for (let Fk = 0; Fk < Xk.length && !kk; Fk++) kk = Ck(Xk[Fk].identifier) === Tk;
                kk || (Nk.delete(Tk), Fk(fF.rb.TouchCancel, Tk, 0, 0, Ik))
              }
          })(Ik, Xk);
          const Tk = Ik.changedTouches;
          for (let Fk = 0; Fk < Tk.length; Fk++) {
            const Ik = Tk[Fk];
            if (kk === fF.rb.TouchStart && Uk(Ik) && Rk.add(Ik.identifier), Rk.has(Ik.identifier)) {
              kk !== fF.rb.TouchEnd && kk !== fF.rb.TouchCancel || Rk.delete(Ik.identifier);
              continue
            }
            const ik = Ck(Ik.identifier),
              lk = yk(kk, ik, Ik.clientX - Hk, Ik.clientY - Jk, Xk);
            kk === fF.rb.TouchStart ? lk && Nk.add(ik) : kk !== fF.rb.TouchMove && Nk.delete(ik)
          }
        },
        Wk = ck(fF.rb.TouchStart);
      Tk(kk, "touchstart", (kk => {
        kk.preventDefault(), (0, BI.d)() || (Ik.touchStarting(), Wk(kk))
      }), {
        passive: !1
      }), Tk(kk, "touchmove", ck(fF.rb.TouchMove), ik), Tk(kk, "touchend", ck(fF.rb.TouchEnd), ik), Tk(kk, "touchcancel", ck(fF.rb.TouchCancel), ik);
      const fk = kk => DI | 32767 & kk,
        Bk = (kk, Fk) => {
          yk(kk, fk(Fk.pointerId), Fk.clientX - Hk, Fk.clientY - Jk, (0, RI.l)(AI(Fk), Fk.timeStamp))
        };
      Tk(window, "pointerdown", (Fk => {
        Pk = Fk.pointerType, "mouse" === Fk.pointerType && Fk.target !== kk && Ik.viewShown() && (0, EF.X)()
      }), ik), Tk(kk, "pointerdown", (kk => {
        "pen" === kk.pointerType && 0 === kk.button && (0, EF.n)() && (0, NI.n)() && (kk.preventDefault(), (0, BI.d)() || (bk.set(kk.pointerId, {
          x: kk.clientX,
          y: kk.clientY,
          touched: !1
        }), Ik.touchStarting(), Bk(fF.rb.TouchStart, kk)))
      }), {
        passive: !1
      }), Tk(window, "pointermove", (kk => {
        Pk = kk.pointerType, bk.has(kk.pointerId) && Bk(fF.rb.TouchMove, kk), "mouse" !== kk.pointerType && Kk() && Qk(kk, 0, 0)
      }), ik);
      const dk = kk => Fk => {
        bk.delete(Fk.pointerId) && Bk(kk, Fk)
      };
      Tk(window, "pointerup", dk(fF.rb.TouchEnd), ik), Tk(window, "pointercancel", dk(fF.rb.TouchCancel), ik);
      let Yk = 0;
      const Ak = () => {
          Yk = 0, xk(), Ik.resized()
        },
        gk = () => {
          const kk = Ik.sizeCanvas();
          null !== kk && Fk(fF.rb.Resize, 0, kk.cssWidth, kk.cssHeight, (0, RI.h)(kk.renderScale)), xk(), Ik.resized(), 0 === Yk && (Yk = requestAnimationFrame(Ak))
        };
      Tk(window, "resize", gk, ik), Xk.push(Ik.watchRenderScale(gk)), Xk.push((() => {
        cancelAnimationFrame(Yk)
      })), Tk(window, "focus", (kk => {
        kk.isTrusted && (Fk(fF.rb.Focus, 0, 0, 0, 0), Ik.viewShown() && (0, EF.X)())
      }), {
        passive: !0
      });
      const mk = () => {
          (0, EF.H)(!1), Sk = 0
        },
        hk = () => {
          Nk.clear(), bk.clear(), Rk.clear()
        };
      let rk = 0,
        Dk = 0;
      Tk(window, "blur", (Xk => {
        mk(), (0, EF.l)();
        for (const kk of tk.keys()) {
          const Fk = rI.get(kk);
          void 0 !== Fk && jk.set(kk, Fk)
        }
        Xk.isTrusted && ((kk => {
          for (const [Ik, Xk] of bk) Fk(fF.rb.TouchCancel, fk(Ik), Xk.x, Xk.y, (0, RI.l)(0, kk));
          bk.clear()
        })(Xk.timeStamp), Fk(fF.rb.Blur, fF.p.KeepTouches, 0, 0, 0)), ak && Xk.isTrusted && (clearTimeout(Dk), Dk = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const kk of tk.values()) Lk(Xk, kk, 0);
            ek()
          }
        }), 0)), clearTimeout(rk), rk = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, NI.n)() && Ik.viewShown() && kk.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Xk.push((() => {
        clearTimeout(rk), clearTimeout(Dk)
      })), Tk(window, "mousedown", (Fk => {
        ak && Fk.isTrusted && !document.hasFocus() && (0, NI.n)() && Ik.viewShown() && (window.focus(), kk.focus({
          preventScroll: !0
        }))
      }), ik), Tk(document, "visibilitychange", (() => {
        document.hidden ? (Fk(fF.rb.Blur, 0, 0, 0, 0), hk()) : document.hasFocus() && Fk(fF.rb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Xk.push((0, BI.i)((() => {
        mk(), Fk(fF.rb.Blur, fF.p.Release, 0, 0, 0), Ik.keysReleased(), ek(), vk = 0, hk(), Fk(fF.rb.Joystick, 0, 0, 0, 0), document.hasFocus() && Fk(fF.rb.Focus, 0, 0, 0, 0)
      })));
      const Mk = !Ik.canLock(),
        kF = () => Mk && !(0, EF.n)() ? fF.ic.Lockless : fF.ic.Released,
        FF = () => {
          lk() && (Ok = !1, nk = !1), Fk(fF.rb.PointerLock, lk() ? fF.ic.Locked : kF(), 0, 0, 0), (0, EF.M)(lk())
        };
      return Tk(document, "pointerlockchange", FF, {
        passive: !0
      }), Tk(document, "pointerlockerror", (() => {
        Ok ||= nk, nk = !1, (0, EF.t)()
      }), {
        passive: !0
      }), Mk && Xk.push((0, EF.x)((() => {
        Fk(fF.rb.PointerLock, kF(), 0, 0, 0)
      }))), gk(), Fk(document.hasFocus() ? fF.rb.Focus : fF.rb.Blur, 0, 0, 0, 0), FF(), () => {
        for (const kk of Xk.splice(0)) kk()
      }
    }
    var IX = Ik(34111),
      XX = Ik(34095),
      TX = Ik(1920);
    const iX = new Map(dI.e.map(((kk, Fk) => [kk, Fk]))),
      yX = ["jump", "primary-fire", "alt-fire"],
      lX = ["primary-fire", "alt-fire"];

    function aX(kk) {
      return `${TX.b}${kk}`
    }
    const qX = ["forward", "backward", "left", "right", "sprint", "jump"];

    function LX(kk) {
      const Fk = [];
      for (const Ik of kk) {
        const kk = "string" === typeof Ik ? dI.o[Ik] : void 0;
        "number" === typeof kk && Fk.push(kk)
      }
      return Fk
    }
    class tX {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [kk, Fk] of Object.entries(dI.g)) this.keys.set(kk, Fk);
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
        for (const [Ik, Xk] of this.keys) {
          const Tk = kk(aX(Ik)),
            ik = Array.isArray(Tk) ? LX(Tk) : dI.g[Ik];
          (ik.length !== Xk.length || ik.some(((kk, Fk) => kk !== Xk[Fk]))) && this.bind(Ik, ik, Fk)
        }
      }
      bind(kk, Fk, Ik) {
        const Xk = iX.get(kk);
        if (void 0 !== Xk) {
          Ik(fF.rb.Binding, 0, 0, 0, Xk | fF.o.Clear << 8);
          for (const ik of [...Fk, ...null !== (Tk = dI.k[kk]) && void 0 !== Tk ? Tk : []]) {
            var Tk;
            Ik(fF.rb.Binding, ik, 0, 0, Xk | fF.o.Add << 8)
          }
          this.keys.set(kk, Fk), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Xk of dI.s)
          for (const Fk of null !== (kk = this.keys.get(dI.e[Xk])) && void 0 !== kk ? kk : []) {
            var kk;
            this.preventKeys.add(Fk)
          }
        this.movementKeys.clear();
        for (const Xk of qX)
          for (const kk of null !== (Fk = this.keys.get(Xk)) && void 0 !== Fk ? Fk : []) {
            var Fk;
            this.movementKeys.add(kk)
          }
        for (const [Xk, Tk] of [
            [this.checkedDown, yX],
            [this.checkedUp, lX]
          ]) {
          Xk.clear();
          for (const kk of Tk)
            for (const Fk of null !== (Ik = this.keys.get(kk)) && void 0 !== Ik ? Ik : []) {
              var Ik;
              Xk.add(Fk)
            }
        }
      }
    }
    var ZX = Ik(4801),
      jX = Ik(36588);
    const eX = "[bloxd-wasm-client]";

    function wX() {
      return "inGame" === Ak.d.get("gameState") && !(0, UI.s)()
    }
    let HX = null;

    function JX(kk, Fk) {
      HX && Fk.writePendingInput() && HX.push(function(kk, Fk) {
        let Ik = "";
        for (const Xk of Fk) Ik += Xk.toString(16).padStart(2, "0");
        return Ik ? `${kk} ${Ik}` : String(kk)
      }(kk, Fk.rings.input.written()))
    }
    const xX = [];

    function PX(kk, Fk, Ik, Xk) {
      kk === fF.X.InputAction && Xk === fF.mb && xX.push(Fk.getUint32(Ik, !0))
    }
    var KX = Ik(40930),
      QX = Ik(1187),
      sX = Ik(36879);
    const VX = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: QX.wasmScreens
    };

    function zX(kk) {
      var Fk, Ik;
      let Xk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Tk, ik] = kk.split(":");
      return (null !== (Fk = null === (Ik = VX[Tk]) || void 0 === Ik ? void 0 : Ik[ik]) && void 0 !== Fk ? Fk : kk).replace(/\{\{(\w+)\}\}/g, ((kk, Fk) => {
        var Ik;
        return null !== (Ik = Xk[Fk]) && void 0 !== Ik ? Ik : kk
      }))
    }

    function SX(kk, Fk) {
      (0, bI.d)();
      const Ik = document.createElement("div");
      Ik.setAttribute("role", "alertdialog"), Ik.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Xk = document.createElement("div");
      Xk.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Tk = document.createElement("h2");
      Tk.textContent = zX(kk.title);
      const ik = document.createElement("p");
      if (ik.textContent = zX(kk.help, kk.helpValues), ik.style.whiteSpace = "pre-line", Xk.append(Tk, ik), kk.discordLink) {
        const kk = document.createElement("a");
        kk.href = sX.d, kk.target = "_blank", kk.rel = "noreferrer", kk.style.color = "#8ab4ff", kk.textContent = zX("wasmScreens:reportOnDiscord"), Xk.append(kk)
      }
      const yk = document.createElement("div");
      return yk.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Xk.append(yk), Ik.append(Xk), document.body.append(Ik), new Promise((Xk => {
        const Tk = kk => {
            null === Fk || void 0 === Fk || Fk.removeEventListener("abort", ik), Ik.remove(), Xk(kk)
          },
          ik = () => {
            Tk(!1)
          };
        null === Fk || void 0 === Fk || Fk.addEventListener("abort", ik, {
          once: !0
        });
        const lk = (kk, Fk) => {
          const Ik = document.createElement("button");
          Ik.textContent = zX(kk), Ik.style.cssText = "padding:0.5rem 1.25rem;font:inherit", Ik.addEventListener("click", (() => {
            Tk(Fk)
          })), yk.append(Ik)
        };
        null !== kk.cancel && lk(kk.cancel, !1), lk(kk.confirm, !0)
      }))
    }
    var oX = Ik(40745);
    const vX = 6e4,
      EX = 3e5;
    var OX = Ik(3593);
    var nX = Ik(40935),
      GX = Ik(659),
      pX = Ik(15);

    function uX(kk, Fk) {
      const Ik = pX.hb.encode(Fk);
      ! function(kk, Fk) {
        let Ik = Fk >= 0 ? 2 * Fk : 2 * -Fk - 1;
        for (; Ik >= 128;) kk.push(Ik % 128 | 128), Ik = Math.floor(Ik / 128);
        kk.push(Ik)
      }(kk, Ik.length);
      for (const Xk of Ik) kk.push(Xk)
    }
    let bX, RX, UX;
    (() => {
      const kk = ["length", 1, 0, void 0, "b", 235, 4, 75, 135, 1023, "a", 72, 3, 65536, 10, 55296, 56320, 6, 12, 63, 128, 2, 105, 53, 65, 20, 192, 115, "Invalid byte index", "d", 255, 224, "e", 234, 31, "Invalid continuation byte", 240, 15, "g", 7, 18, !1, "r", 80, "c", "h", "f", 166, 11, 9, 176, 249, null, "resolv", "then", 5, 186, 64, "postCo", "okies", 77, 194, 149, 174, "J", 34, 49, 51, !0, "Block ", "image "];

      function Fk() {}
      const Xk = (kk[2], pX[kk[42]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Tk = (kk[2], pX[kk[42]])("QkFCWUxPTg=="),
        ik = (kk[2], pX[kk[42]])("QW5kZXNpdGU="),
        yk = (kk[2], pX[kk[42]])("U21vb3RoIEdyYW5pdGU="),
        lk = (kk[2], pX[kk[42]])("RGlvcml0ZQ=="),
        ak = async (Xk, Tk, ik, yk) => {
          "D1w3k9j" in Fk && function(...Fk) {
            Lk(Fk[kk[0]] = kk[2], Fk[-kk[50]] = function(...Fk) {
              if (Lk(Fk[kk[0]] = kk[1], Fk[kk[43]] = Fk[kk[2]].length), Fk[kk[43]] < kk[21]) return kk[2];
              if (Lk(Fk[kk[4]] = Math.max(...Fk[kk[2]]), Fk[kk[44]] = Math.min(...Fk[kk[2]])), Fk[kk[4]] === Fk[kk[44]]) return kk[2];
              for (Lk(Fk[kk[29]] = Array(Fk[kk[43]] - kk[1]).fill(Number.MAX_SAFE_INTEGER), Fk[kk[47]] = Array(Fk[kk[43]] - kk[1]).fill(Number.MIN_SAFE_INTEGER), Fk[kk[46]] = Math.ceil((Fk[kk[4]] - Fk[kk[44]]) / (Fk[kk[43]] - kk[1])), Fk[kk[39]] = kk[2]), Fk[kk[45]] = kk[2]; Fk[kk[45]] < Fk[kk[43]]; Fk[kk[45]]++) Fk[kk[2]][Fk[kk[45]]] !== Fk[kk[44]] && Fk[kk[2]][Fk[kk[45]]] !== Fk[kk[4]] && Lk(Fk[kk[39]] = Math.floor((Fk[kk[2]][Fk[kk[45]]] - Fk[kk[44]]) / Fk[kk[46]]), Fk[kk[29]][Fk[kk[39]]] = Math.min(Fk[kk[29]][Fk[kk[39]]], Fk[kk[2]][Fk[kk[45]]]), Fk[kk[47]][Fk[kk[39]]] = Math.max(Fk[kk[47]][Fk[kk[39]]], Fk[kk[2]][Fk[kk[45]]]));
              for (Lk(Fk[kk[49]] = Number.MIN_SAFE_INTEGER, Fk[kk[14]] = Fk[kk[44]]), Fk[kk[48]] = kk[2]; Fk[kk[48]] < Fk[kk[43]] - kk[1]; Fk[kk[48]]++) Fk[kk[29]][Fk[kk[48]]] === Number.MAX_SAFE_INTEGER && Fk[kk[47]][Fk[kk[48]]] === Number.MIN_SAFE_INTEGER || Lk(Fk[kk[49]] = Math.max(Fk[kk[49]], Fk[kk[29]][Fk[kk[48]]] - Fk[kk[14]]), Fk[kk[14]] = Fk[kk[47]][Fk[kk[48]]]);
              return Fk[kk[49]] = Math.max(Fk[kk[49]], Fk[kk[4]] - Fk[kk[14]]), Fk[kk[49]]
            }, console.log(Fk[-kk[50]]))
          }();
          const [{
            clientSideServerUrls: lk
          }, {
            HttpPayloadType: ak,
            ["postJsonWithMetricsCookiesAndCustomRespons" + kk[32]]: qk
          }] = await Promise.all([Promise[kk[53] + kk[32]]()[kk[54]](((...Xk) => (Xk[kk[0]] = kk[2], "qyOgGK" + kk[64] in Fk && function(...Fk) {
            function Ik() {}
            Fk[kk[0]] = kk[2], Lk(Fk[kk[4]] = function(...Fk) {
              for (Lk(Fk[kk[0]] = kk[21], Fk[kk[10]] = kk[2], Fk[kk[12]] = kk[2], Fk[kk[44]] = new Ik(kk[2]), Fk[kk[29]] = Fk[kk[44]], Fk[kk[17]] = Fk[kk[2]], Fk[kk[51]] = Fk[kk[1]]); Fk[kk[17]] !== kk[52] || Fk[kk[51]] !== kk[52];) Lk(Fk[kk[12]] = (Fk[kk[17]] ? Fk[kk[17]].val : kk[2]) + (Fk[kk[51]] ? Fk[kk[51]].val : kk[2]) + Fk[kk[10]], Fk[kk[10]] = Math.floor(Fk[kk[12]] / kk[14]), Fk[kk[29]].next = new Ik(Fk[kk[12]] % kk[14]), Fk[kk[29]] = Fk[kk[29]].next, Fk[kk[17]] = Fk[kk[17]] ? Fk[kk[17]].next : kk[52], Fk[kk[51]] = Fk[kk[51]] ? Fk[kk[51]].next : kk[52]);
              return Fk[kk[10]] && (Fk[kk[29]].next = new Ik(Fk[kk[10]])), Fk[kk[44]].next
            }, console.log(Fk[kk[4]]))
          }(), Ik(1194)))), Promise[kk[53] + kk[32]]()[kk[54]](((...Xk) => (Xk[kk[0]] = kk[2], "wPbPhA4" in Fk && function(...Fk) {
            Lk(Fk[kk[0]] = kk[2], Fk[-kk[31]] = function(...Fk) {
              for (Lk(Fk[kk[0]] = kk[1], Fk[kk[56]] = Fk[kk[2]].length, Fk[-kk[43]] = [], Fk[kk[12]] = kk[2], Fk[kk[57]] = kk[2], Fk[kk[2]].sort(((kk, Fk) => kk - Fk))), Fk[kk[55]] = kk[2]; Fk[kk[55]] < Fk[kk[56]]; Fk[kk[55]]++)
                if (!(Fk[kk[55]] > kk[2] && Fk[kk[2]][Fk[kk[55]]] === Fk[kk[2]][Fk[kk[55]] - kk[1]]))
                  for (Lk(Fk[kk[12]] = Fk[kk[55]] + kk[1], Fk[kk[57]] = Fk[kk[56]] - kk[1]); Fk[kk[12]] < Fk[kk[57]];)
                    if (Fk[kk[2]][Fk[kk[55]]] + Fk[kk[2]][Fk[kk[12]]] + Fk[kk[2]][Fk[kk[57]]] < kk[2]) Fk[kk[12]]++;
                    else if (Fk[kk[2]][Fk[kk[55]]] + Fk[kk[2]][Fk[kk[12]]] + Fk[kk[2]][Fk[kk[57]]] > kk[2]) Fk[kk[57]]--;
              else {
                for (Fk[-kk[43]].push([Fk[kk[2]][Fk[kk[55]]], Fk[kk[2]][Fk[kk[12]]], Fk[kk[2]][Fk[kk[57]]]]); Fk[kk[12]] < Fk[kk[57]] && Fk[kk[2]][Fk[kk[12]]] === Fk[kk[2]][Fk[kk[12]] + kk[1]];) Fk[kk[12]]++;
                for (; Fk[kk[12]] < Fk[kk[57]] && Fk[kk[2]][Fk[kk[57]]] === Fk[kk[2]][Fk[kk[57]] - kk[1]];) Fk[kk[57]]--;
                Lk(Fk[kk[12]]++, Fk[kk[57]]--)
              }
              return Fk[-kk[43]]
            }, console.log(Fk[-kk[31]]))
          }(), Ik(1120))))]), tk = lk.getHttpUrlFromWebSocketUrl(Xk.endpoint), Zk = Xk[kk[58] + kk[59]] === kk[52] ? kk[3] : await Xk[kk[58] + kk[59]]();
          await qk("" + tk + Tk, ik, {
            retries: yk
          }, ak.blob, Zk)
        };
      bX = async (Ik, Xk) => {
        const Tk = function(kk, Fk, Ik, Xk) {
          const Tk = [];
          uX(Tk, kk), uX(Tk, Fk), uX(Tk, Ik);
          for (const ik of Xk) Tk.push(ik);
          return Tk
        }(Ik.game, Ik.lobby, (kk[2], GX[kk[44]])(), Xk);
        try {
          await ak(Ik, "/persisted/keep-alive", {
            type: "je",
            data: Tk
          }, kk[12])
        } catch (ik) {
          function lk(...Fk) {
            Lk(Fk[kk[0]] = kk[2], Fk[-kk[61]] = function(...Ik) {
              return Lk(Ik[kk[0]] = kk[12], Ik[kk[10]] = {}), Ik[kk[21]].length !== Ik[kk[2]].length + Ik[kk[1]].length ? kk[41] : Fk[-kk[60]](Ik[kk[2]], Ik[kk[1]], Ik[kk[21]], kk[2], kk[2], kk[2], Ik[kk[10]])
            }, Fk[-kk[60]] = function(...Ik) {
              return Lk(Ik[kk[0]] = kk[39], Ik[kk[10]] = kk[41]), Ik[kk[55]] >= Ik[kk[21]].length ? kk[68] : Ik[kk[17]]["" + Ik[kk[12]] + Ik[kk[6]] + Ik[kk[55]]] !== kk[3] ? Ik[kk[17]]["" + Ik[kk[12]] + Ik[kk[6]] + Ik[kk[55]]] : (Ik[kk[21]][Ik[kk[55]]] === Ik[kk[2]][Ik[kk[12]]] && Ik[kk[21]][Ik[kk[55]]] === Ik[kk[1]][Ik[kk[6]]] ? Ik[kk[10]] = Fk[-kk[60]](Ik[kk[2]], Ik[kk[1]], Ik[kk[21]], Ik[kk[12]] + kk[1], Ik[kk[6]], Ik[kk[55]] + kk[1], Ik[kk[17]]) || Fk[-kk[60]](Ik[kk[2]], Ik[kk[1]], Ik[kk[21]], Ik[kk[12]], Ik[kk[6]] + kk[1], Ik[kk[55]] + kk[1], Ik[kk[17]]) : Ik[kk[21]][Ik[kk[55]]] === Ik[kk[2]][Ik[kk[12]]] ? Ik[kk[10]] = Fk[-kk[60]](Ik[kk[2]], Ik[kk[1]], Ik[kk[21]], Ik[kk[12]] + kk[1], Ik[kk[6]], Ik[kk[55]] + kk[1], Ik[kk[17]]) : Ik[kk[21]][Ik[kk[55]]] === Ik[kk[1]][Ik[kk[6]]] && (Ik[kk[10]] = Fk[-kk[60]](Ik[kk[2]], Ik[kk[1]], Ik[kk[21]], Ik[kk[12]], Ik[kk[6]] + kk[1], Ik[kk[55]] + kk[1], Ik[kk[17]])), Ik[kk[17]]["" + Ik[kk[12]] + Ik[kk[6]] + Ik[kk[55]]] = Ik[kk[10]], Ik[kk[10]])
            }, console.log(Fk[-kk[61]]))
          }
          "MujMBF5" in Fk && lk(), console.warn(ik)
        }
      };
      const qk = (...Ik) => (Ik[kk[0]] = kk[21], "r1V5fV" in Fk && function(...Fk) {
        Lk(Fk[kk[0]] = kk[2], Fk[-kk[14]] = function(...Fk) {
          for (Lk(Fk[kk[0]] = kk[1], Fk[kk[10]] = kk[2], Fk[kk[63]] = {}, Fk[kk[44]] = kk[2], Fk[kk[29]] = kk[2], Fk[kk[32]] = kk[2], Fk[kk[46]] = Fk[kk[2]].length), Fk[kk[62]] = kk[2]; Fk[kk[62]] < Fk[kk[46]]; Fk[kk[62]]++) {
            for (Lk(Fk[kk[63]] = {}, Fk[kk[44]] = kk[2], Fk[kk[29]] = kk[1]), Fk[kk[45]] = Fk[kk[62]] + kk[1]; Fk[kk[45]] < Fk[kk[46]]; Fk[kk[45]]++) Fk[kk[2]][Fk[kk[62]]].x !== Fk[kk[2]][Fk[kk[45]]].x || Fk[kk[2]][Fk[kk[62]]].y !== Fk[kk[2]][Fk[kk[45]]].y ? (Fk[kk[2]][Fk[kk[62]]].y === Fk[kk[2]][Fk[kk[45]]].y ? Fk[kk[32]] = Number.MAX_SAFE_INTEGER : Fk[kk[32]] = (Fk[kk[2]][Fk[kk[62]]].x - Fk[kk[2]][Fk[kk[45]]].x) / (Fk[kk[2]][Fk[kk[62]]].y - Fk[kk[2]][Fk[kk[45]]].y), Fk[kk[63]][Fk[kk[32]]] || (Fk[kk[63]][Fk[kk[32]]] = kk[2]), Lk(Fk[kk[63]][Fk[kk[32]]]++, Fk[kk[44]] = Math.max(Fk[kk[44]], Fk[kk[63]][Fk[kk[32]]]))) : Fk[kk[29]]++;
            Lk(Fk[kk[44]] += Fk[kk[29]], Fk[kk[10]] = Math.max(Fk[kk[10]], Fk[kk[44]]))
          }
          return Fk[kk[10]]
        }, console.log(Fk[-kk[14]]))
      }(), Object.getOwnPropertyDescriptor(Ik[kk[2]], Ik[kk[1]]));

      function Lk() {
        Lk = function() {}
      }
      RX = () => ((kk[2], pX[kk[64]])(), qk(navigator, Xk) !== kk[3] ? ik : qk(window, Tk) === kk[3] ? yk : lk), UX = async Xk => {
        try {
          function Tk(...Fk) {
            function Ik() {}
            Fk[kk[0]] = kk[2], Lk(Fk[kk[44]] = function(...Fk) {
              for (Lk(Fk[kk[0]] = kk[21], Fk[-kk[67]] = kk[2], Fk[-kk[66]] = kk[2], Fk[kk[6]] = new Ik(kk[2]), Fk[kk[55]] = Fk[kk[6]], Fk[kk[32]] = Fk[kk[2]], Fk[-kk[65]] = Fk[kk[1]]); Fk[kk[32]] !== kk[52] || Fk[-kk[65]] !== kk[52];) Lk(Fk[-kk[66]] = (Fk[kk[32]] ? Fk[kk[32]].val : kk[2]) + (Fk[-kk[65]] ? Fk[-kk[65]].val : kk[2]) + Fk[-kk[67]], Fk[-kk[67]] = Math.floor(Fk[-kk[66]] / kk[14]), Fk[kk[55]].next = new Ik(Fk[-kk[66]] % kk[14]), Fk[kk[55]] = Fk[kk[55]].next, Fk[kk[32]] = Fk[kk[32]] ? Fk[kk[32]].next : kk[52], Fk[-kk[65]] = Fk[-kk[65]] ? Fk[-kk[65]].next : kk[52]);
              return Fk[-kk[67]] && (Fk[kk[55]].next = new Ik(Fk[-kk[67]])), Fk[kk[6]].next
            }, console.log(Fk[kk[44]]))
          }
          "Z299FnM" in Fk && Tk();
          const ik = RX(),
            {
              retryTransientHttpFailures: lk
            } = await Promise[kk[53] + kk[32]]()[kk[54]]((() => Ik(1725)));
          await lk(kk[69] + kk[70] + "post", ((...Ik) => (Ik[kk[0]] = kk[2], "bo7HWS" in Fk && function(...Fk) {
            function Ik(...Fk) {
              Fk[kk[0]] = kk[1];
              const Ik = {};
              for (let Xk of Fk[kk[2]].replace(/[^w]/g, "").toLowerCase()) Ik[Xk] = Ik[Xk] + kk[1] || kk[1];
              return Ik
            }

            function Xk(...Fk) {
              Fk[kk[0]] = kk[21];
              const Ik = buildCharMap(Fk[kk[2]]),
                Xk = buildCharMap(Fk[kk[1]]);
              for (let Tk in Ik)
                if (Ik[Tk] !== Xk[Tk]) return kk[41];
              return Object.keys(Ik).length !== Object.keys(Xk).length ? kk[41] : kk[68]
            }

            function Tk(...Fk) {
              Fk[kk[0]] = kk[1];
              return ik(Fk[kk[2]]) !== 1 / 0
            }

            function ik(...Fk) {
              if (Fk[kk[0]] = kk[1], !Fk[kk[2]]) return -kk[1];
              const Ik = ik(Fk[kk[2]].left),
                Xk = ik(Fk[kk[2]].right),
                Tk = Math.abs(Ik - Xk);
              if (Ik === 1 / 0 || Xk === 1 / 0 || Tk > kk[1]) return 1 / 0;
              return Math.max(Ik, Xk) + kk[1]
            }
            Fk[kk[0]] = kk[2], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: Ik,
              isAnagrams: Xk,
              isBalanced: Tk,
              getHeightBalanced: ik
            }
          }(), ak(Xk, "/images/" + ik + ".png", {
            block: ik
          }, kk[2]))), 8e3)
        } catch (yk) {
          function tk(...Fk) {
            Fk[kk[0]] = kk[2]
          }
          "GgaqrG" + kk[4] in Fk && tk(), console.error(kk[69] + kk[70] + "post failed:", yk)
        }
      }
    })();
    var CX = Ik(40843),
      NX = Ik(1759);
    const cX = 1e3 * CX.d.seatReservationSeconds - 3e3;
    class WX {
      constructor(kk) {
        var Fk, Ik, Xk, Tk;
        let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Fk = ik.wallNow) && void 0 !== Fk ? Fk : Date.now, this.monoNow = null !== (Ik = ik.monoNow) && void 0 !== Ik ? Ik : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Xk = ik.sleep) && void 0 !== Xk ? Xk : NX.b, this.follow = new sF.b(ik.signal);
        const yk = null !== (Tk = ik.fetch) && void 0 !== Tk ? Tk : fetch;
        this.seat = (0, JI.f)(kk.endpoint, kk.roomName, kk.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (kk, Fk) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), yk(kk, Fk)),
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
        (0, sF.m)(kk);
        const Fk = "pending" !== this.request,
          Ik = () => {
            this.abort((0, sF.e)(kk))
          };
        let Xk;
        null === kk || void 0 === kk || kk.addEventListener("abort", Ik, {
          once: !0
        });
        try {
          Xk = await this.seat
        } catch (Tk) {
          if ((0, sF.m)(kk), !Fk) throw Tk;
          return void(this.use = "lost")
        } finally {
          null === kk || void 0 === kk || kk.removeEventListener("abort", Ik)
        }
        if ((0, sF.m)(kk), !(this.ageMs() > cX)) return this.use = "taken", Xk;
        this.use = "renewed"
      }
      async reserveInstead(kk, Fk) {
        try {
          return await kk()
        } catch (Ik) {
          const Tk = this.holdLeftMs();
          if (!(Ik instanceof bk.j) || Ik.code !== Xk.d.duplicateLobbyNameError.code || 0 === Tk) throw Ik;
          return await this.sleep(Tk + 500, Fk), kk()
        }
      }
      release() {
        const {
          request: kk,
          use: Fk
        } = this, Ik = this.holdsNoSeat();
        return this.abort(), "taken" === Fk || Ik ? null : {
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
          Ik = Math.max(this.wallNow() - Fk.wall, this.monoNow() - Fk.mono);
        return Math.max(0, 1e3 * CX.d.seatReservationSeconds - Ik)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(kk) {
        (0, sF.h)(this.follow.controller, kk)
      }
    }
    var fX = Ik(40937);
    const BX = new Uint8Array(0);
    class dX {
      constructor(kk) {
        if (this.options = kk, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === kk.module) return this.stopped = !0, void kk.fail("no wasm module for the meshing workers");
        kk.loadWorkers().then((kk => {
          if (this.stopped) return;
          const {
            count: Fk
          } = kk;
          this.workers = kk;
          for (let Ik = 0; Ik < Fk; Ik++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let Ik = 0; Ik < Fk; Ik++) this.start(Ik)
        }), (kk => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", kk))
        }))
      }
      take(kk, Fk, Ik) {
        const Xk = this.slots[Fk];
        if (kk === fF.Sd.Retire) return void(Xk && !Xk.gone && (this.endWorker(Fk), Xk.started = !1, this.giveUp(Fk, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const Tk = null === Xk || void 0 === Xk ? void 0 : Xk.worker;
        if (!Tk || !Xk.started) return;
        const ik = Ik.byteLength;
        let yk = null;
        kk === fF.Sd.Mesh && Xk.heapRetries > 0 && (Xk.heapRetries--, yk = this.pooled(ik, !0)), yk ??= this.buffer(ik), new Uint8Array(yk, 0, ik).set(Ik), Tk.postMessage({
          type: "job",
          kind: kk,
          bytes: yk,
          len: ik
        }, [yk])
      }
      takeFailedMeshJobs() {
        const kk = this.failedJobs;
        return this.failedJobs = 0, kk
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let kk = 0; kk < this.slots.length; kk++) {
          const Fk = this.slots[kk];
          null !== Fk.worker && (this.endWorker(kk), Fk.startsWithoutResult = 0, Fk.trapsWithoutResult = 0, this.tellLost(kk))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let kk = 0; kk < this.slots.length; kk++) this.start(kk)
        }
      }
      stop() {
        this.stopped = !0;
        for (const Fk of this.slots) {
          var kk;
          YX(Fk), null === (kk = Fk.worker) || void 0 === kk || kk.terminate(), Fk.worker = null, Fk.started = !1
        }
      }
      start(kk) {
        const Fk = this.slots[kk],
          {
            module: Ik
          } = this.options,
          {
            workers: Xk
          } = this;
        if (this.stopped || this.resting || Fk.gone || null === Ik || null === Xk) return;
        if (Fk.startsWithoutResult >= 3) return void this.giveUp(kk, "failed to start 3 times in a row", "no meshing worker would start");
        let Tk;
        Fk.startsWithoutResult++;
        try {
          Tk = Xk.create()
        } catch (ik) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${kk} did not start`, ik), void this.start(kk)
        }
        Fk.worker = Tk, Tk.onmessage = Ik => {
          let {
            data: Xk
          } = Ik;
          Fk.worker === Tk && this.onReply(kk, Xk)
        }, Tk.onmessageerror = () => {
          Fk.worker === Tk && this.lose(kk, "a reply could not be read")
        }, Tk.onerror = Ik => {
          Ik.preventDefault(), Fk.worker === Tk && this.lose(kk, Ik.message || "its script failed")
        };
        try {
          Tk.postMessage({
            type: "start",
            module: Ik,
            maxKeptLightStates: Xk.maxKeptLightStates
          })
        } catch (ik) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${kk} could not be sent the module`, ik), Tk.terminate(), Fk.worker = null, void this.start(kk)
        }
        Fk.watch = new fX.g(fX.c, (Fk => {
          this.lose(kk, (0, fX.i)(Fk), (() => {
            this.options.onStartTimeout(Fk)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(kk, Fk) {
        const Ik = this.slots[kk];
        switch (Fk.type) {
          case "started":
            YX(Ik), Ik.started = !0, this.options.write(0, fF.Pd.WorkerStarted, 0, kk, 0, BX);
            break;
          case "lost":
            this.lose(kk, Fk.reason);
            break;
          case "memory":
            var Xk, Tk;
            null === (Xk = (Tk = this.options).onMemoryStats) || void 0 === Xk || Xk.call(Tk, kk, Fk.stats);
            break;
          case "result": {
            const Xk = Fk.status === fF.ub.Trapped;
            if (0 !== Fk.jobId) {
              if (Xk) this.countFailedJob(Fk.outOfMemory, "light_trap", Fk.trap);
              else if (Ik.startsWithoutResult = 0, Ik.trapsWithoutResult = 0, Fk.status === fF.ub.Refused) {
                const Ik = function(kk) {
                  if (kk.byteLength < 32) return "(no reason)";
                  const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength),
                    Ik = Math.min(Fk.getUint32(28, !0), kk.byteLength - 28 - 4);
                  return (new TextDecoder).decode(kk.subarray(32, 32 + Ik)).slice(0, 200)
                }(new Uint8Array(Fk.bytes, 0, Fk.len));
                this.countFailedJob(AF.c.test(Ik), "light_refused_input", Ik), this.logRefusal(kk, Ik)
              }
              Fk.status === fF.ub.HeapRefused && (Ik.heapRetries = Math.min(Ik.heapRetries + 1, 4), this.logHeapRefusal(kk))
            }
            if (this.options.write(Fk.jobId, fF.Pd.JobResult, Fk.status, kk, Fk.workerUs, new Uint8Array(Fk.bytes, 0, Fk.len)), this.recycle(Fk.bytes), Fk.spare && this.recycle(Fk.spare), !Xk) break;
            if (Ik.startsWithoutResult = 0, 0 === Fk.jobId) {
              this.lose(kk, `the tables trapped its wasm: ${Fk.trap}`);
              break
            }
            Ik.trapsWithoutResult++;
            const Tk = Ik.trapsWithoutResult > 6;
            Ik.gone ||= Tk, this.lose(kk, `a job trapped its wasm: ${Fk.trap}`), Tk && this.giveUp(kk, `trapped ${Ik.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(kk, Fk, Ik) {
        if (kk) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(Fk) || (this.faultsReported.add(Fk), this.options.onLightFault(Fk, Ik));
        this.failedJobs++
      }
      logRefusal(kk, Fk) {
        var Ik;
        !this.refusals.has(Fk) && this.refusals.size >= 16 && (Fk = "(other reasons)");
        const Xk = (null !== (Ik = this.refusals.get(Fk)) && void 0 !== Ik ? Ik : 0) + 1;
        this.refusals.set(Fk, Xk), (0, QI.w)(Xk) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} refused a chunk (${Xk} so far for this reason): ${Fk}`)
      }
      logHeapRefusal(kk) {
        this.heapRefusals++, (0, QI.w)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${kk} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(kk, Fk, Ik) {
        const Xk = this.slots[kk];
        if (Xk.gone = !0, Xk.goneFor = {
            why: Fk,
            failure: Ik
          }, console.warn(`[bloxd-wasm-client] meshing worker ${kk} ${Fk}: giving up on it`), this.slots.every((kk => kk.gone))) {
          this.stop();
          const kk = new Set(this.slots.map((kk => {
              var Fk;
              return null === (Fk = kk.goneFor) || void 0 === Fk ? void 0 : Fk.failure
            }))),
            Fk = this.slots.map(((kk, Fk) => {
              var Ik, Xk;
              return `worker ${Fk} ${null!==(Ik=null===(Xk=kk.goneFor)||void 0===Xk?void 0:Xk.why)&&void 0!==Ik?Ik:"went"}`
            }));
          this.options.fail(1 === kk.size ? Ik : `no meshing worker is left (${Fk.join(", ")})`)
        }
      }
      lose(kk, Fk, Ik) {
        console.warn(`[bloxd-wasm-client] meshing worker ${kk} was lost: ${Fk}`), this.endWorker(kk), this.stopped || (Ik ? Ik() : this.options.onWorkerLost(Fk), this.tellLost(kk), this.start(kk))
      }
      endWorker(kk) {
        var Fk, Ik, Xk;
        const Tk = this.slots[kk];
        YX(Tk), null === (Fk = Tk.worker) || void 0 === Fk || Fk.terminate(), Tk.worker = null, Tk.heapRetries = 0, null === (Ik = (Xk = this.options).onMemoryGone) || void 0 === Ik || Ik.call(Xk, kk)
      }
      tellLost(kk) {
        const Fk = this.slots[kk];
        Fk.started && (Fk.started = !1, this.options.write(0, fF.Pd.WorkerLost, 0, kk, 0, BX))
      }
      buffer(kk) {
        var Fk;
        return null !== (Fk = this.pooled(kk)) && void 0 !== Fk ? Fk : new ArrayBuffer(Math.max(16384, kk))
      }
      pooled(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = -1;
        for (let Tk = 0; Tk < this.pool.length; Tk++) {
          const Xk = this.pool[Tk].byteLength;
          Xk >= kk && (Ik < 0 || (Fk ? Xk > this.pool[Ik].byteLength : Xk < this.pool[Ik].byteLength)) && (Ik = Tk)
        }
        if (Ik < 0) return null;
        const Xk = this.pool[Ik];
        return this.pool[Ik] = this.pool[this.pool.length - 1], this.pool.pop(), Xk
      }
      recycle(kk) {
        this.pool.length < 4 * this.slots.length && kk.byteLength > 0 && kk.byteLength <= 1048576 && this.pool.push(kk)
      }
    }

    function YX(kk) {
      var Fk;
      null === (Fk = kk.watch) || void 0 === Fk || Fk.cancel(), kk.watch = null
    }
    var AX = Ik(36479),
      gX = Ik(40764),
      mX = Ik(40946),
      hX = Ik(40954),
      rX = (Ik(40779), Ik(40957)),
      DX = Ik(40819);

    function MX(kk) {
      const Fk = new Uint8Array(kk.length >> 2);
      for (let Ik = 0; Ik < Fk.length; Ik++) Fk[Ik] = kk[4 * Ik + 3];
      return Fk
    }
    async function kT(kk) {
      const Fk = await (0, rX.i)(kk);
      try {
        const {
          width: kk,
          height: Ik,
          pixels: Xk
        } = (0, DX.q)(Fk);
        return {
          width: kk,
          height: Ik,
          alpha: MX(Xk)
        }
      } finally {
        Fk.close()
      }
    }
    class FT {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kT;
        this.session = kk, this.sources = Fk, this.warn = Ik, this.load = Xk, this.nextPoll = 0, this.ee = !1, this.warned = new Set
      }
      drain(kk) {
        if (kk < this.nextPoll) return;
        this.nextPoll = kk + 250;
        const Fk = this.session.sunShadowWantedTextures();
        if (Fk)
          for (let Ik = 0; Ik + 1 < Fk.length; Ik += 2) this.hand(Fk[Ik], Fk[Ik + 1]);
        for (const Ik of this.session.takeSunShadowWarnings()) this.warn(Ik)
      }
      dispose() {
        this.ee = !0
      }
      async hand(kk, Fk) {
        var Ik, Xk, Tk, ik, yk;
        let lk, ak = null;
        try {
          if (ak = await this.sources.blockImageUrl(kk), null === ak) throw new Error(`block image ${kk} has no URL`);
          lk = await this.load(ak)
        } catch (Lk) {
          var qk;
          const Fk = null !== (qk = ak) && void 0 !== qk ? qk : `block image ${kk}`;
          this.warned.has(Fk) || (this.warned.add(Fk), this.warn(`sun shadow plane texture ${Fk} didn't load: its blocks cast no shadow`, Lk))
        }
        this.ee || this.session.setSunShadowTexture(kk, Fk, null !== (Ik = null === (Xk = lk) || void 0 === Xk ? void 0 : Xk.width) && void 0 !== Ik ? Ik : 0, null !== (Tk = null === (ik = lk) || void 0 === ik ? void 0 : ik.height) && void 0 !== Tk ? Tk : 0, null === (yk = lk) || void 0 === yk ? void 0 : yk.alpha)
      }
    }
    var IT = Ik(40963),
      XT = Ik(40796),
      TT = Ik(40966),
      iT = Ik(40971),
      yT = Ik(40799),
      lT = Ik(40808),
      aT = Ik(34222),
      qT = Ik(34048),
      LT = Ik(40986);
    const tT = 8192,
      ZT = new Set;
    const jT = new Set([...qT.c, "sceneDownload"]);
    var eT = Ik(40721),
      wT = Ik(40991),
      HT = Ik(40994);
    const JT = new Uint8Array(0);
    let xT = null;

    function PT(kk) {
      return {
        aux: fF.Zb.AdStart | (kk ? fF.Zb.PreventMovement : 0),
        payload: JT
      }
    }
    var KT = Ik(2830),
      QT = Ik(293);
    const sT = "__bloxdSceneCapture";
    var VT = Ik(1745),
      zT = Ik(2841);
    let ST = null,
      oT = null,
      vT = null,
      ET = !1;

    function OT() {
      ST ??= performance.now()
    }
    var nT = Ik(41003);
    class GT {
      constructor(kk) {
        var Fk, Ik;
        this.host = kk, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((kk => {
          this.landRequest = kk
        })), this.follow = kk => {
          let Fk = kk;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const kk = null === this.requested && null !== Fk;
            var Ik;
            kk && (null === (Ik = Fk) || void 0 === Ik || Ik(null));
            const Xk = await this.landing;
            var Tk;
            null === Xk && kk || (null === (Tk = Fk) || void 0 === Tk || Tk(Xk))
          })), () => {
            Fk = null
          }
        }, this.startRead = (Ik = kk.store, Ik.keys().then((kk => ({
          own: kk.includes(vI.b),
          oneShot: kk.includes(vI.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((kk => {
          let {
            own: Fk,
            oneShot: Ik
          } = kk;
          this.oneShotStored = Ik, (Fk || Ik) && this.request()
        })), this.channel = (null !== (Fk = kk.openChannel) && void 0 !== Fk ? Fk : vI.u)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var kk;
        if (null !== this.requested) return this.requested;
        null === (kk = this.channel) || void 0 === kk || kk.close(), this.channel = null;
        const Fk = this.oneShotStored;
        return this.requested = function(kk, Fk, Ik) {
          return new Promise((Fk => {
            Fk(kk())
          })).catch((kk => (null !== Fk && (0, vI.o)(Fk), Ik(kk), null)))
        }((() => this.host.load(Fk).then((kk => (kk.setGamePackConfirm(this.confirm), this.landed = kk, kk)))), Fk ? this.host.store : null, this.host.Mj), this.landRequest(this.requested), this.requested
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
    var pT = Ik(36245);
    const uT = 216 * pT.h,
      bT = 92 * pT.e,
      RT = 64 * pT.h,
      UT = 16 * pT.h;

    function CT() {
      var kk, Fk;
      return null !== (kk = null === (Fk = performance.memory) || void 0 === Fk ? void 0 : Fk.HJ) && void 0 !== kk ? kk : null
    }
    class NT {
      constructor(kk, Fk) {
        this.budgetBytes = kk, this.reads = Fk, this.estimate = null, this.shedAt = null
      }
      read(kk) {
        var Fk;
        const Ik = this.reads.storedChunks(),
          Xk = this.reads.gpuBytes(),
          Tk = Math.max(null !== (Fk = this.reads.jsHeapBytes()) && void 0 !== Fk ? Fk : 0, RT),
          ik = uT + kk + Tk + Xk + Ik * bT;
        this.estimate = {
          wasmBytes: kk,
          jsHeapBytes: Tk,
          gpuBytes: Xk,
          storedChunks: Ik,
          totalBytes: ik
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: kk,
          budgetBytes: Fk,
          shedAt: Ik
        } = this;
        return !(null === kk || null === Fk || kk.totalBytes < Fk || null !== Ik && kk.totalBytes < Ik + UT) && (this.shedAt = kk.totalBytes, !0)
      }
      describe() {
        const {
          estimate: kk,
          budgetBytes: Fk
        } = this;
        return null === kk ? null : `estimate ${(0,pT.m)(kk.totalBytes)} MiB of budget ${null===Fk?"none":(0,pT.m)(Fk)}: wasm ${(0,pT.m)(kk.wasmBytes)} js ${(0,pT.m)(kk.jsHeapBytes)} gpu ${(0,pT.m)(kk.gpuBytes)} chunks ${kk.storedChunks}`
      }
      snapshot() {
        const {
          estimate: kk,
          budgetBytes: Fk
        } = this;
        return {
          ...null === kk ? {} : {
            footprintMiB: Number((0, pT.m)(kk.totalBytes)),
            gpuMiB: Number((0, pT.m)(kk.gpuBytes)),
            storedChunks: kk.storedChunks
          },
          footprintBudgetMiB: null === Fk ? -1 : Number((0, pT.m)(Fk))
        }
      }
    }
    var cT = Ik(2744),
      WT = Ik(4504),
      fT = Ik(39102),
      BT = Ik(37939);
    const dT = BF.ib + 1,
      YT = 4096 * dT;
    class AT {
      constructor(kk, Fk) {
        this.log = kk, this.take = Fk, this.eq = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(kk, Fk) {
        const Ik = this.take();
        Ik.length >= BF.eb && Ik[0] > 0 && (0, cT.g)("remesh", `${Ik[0]} core records lost to a full log`);
        const Xk = this.eq;
        for (let Tk = BF.eb; Tk + BF.ib <= Ik.length; Tk += BF.ib) {
          for (let kk = Tk; kk < Tk + BF.ib; kk++) Xk.push(Ik[kk]);
          Xk.push(kk)
        }
        if (Fk || !(Xk.length < YT)) {
          for (let Fk = 0; Fk < Xk.length; Fk += dT) this.feed(Fk, kk);
          Xk.length = 0, Fk && this.log.frame(kk)
        }
      }
      feed(kk, Fk) {
        var Ik;
        const Xk = this.eq,
          Tk = (0, BT.h)(Xk[kk + 1], Xk[kk + 2], Xk[kk + 3]),
          ik = Xk[kk + 4],
          yk = Xk[kk + BF.ib];
        switch (Xk[kk]) {
          case BF.Rb.Edit:
            this.log.edit(Tk, yk);
            break;
          case BF.Rb.Sent:
            this.latest.set(Tk, ik), this.log.sent(Tk, ik, Xk[kk + 5], Xk[kk + 6], Xk[kk + 7], null !== (Ik = this.unshown.get(Tk)) && void 0 !== Ik ? Ik : BT.d, yk);
            break;
          case BF.Rb.Done: {
            this.log.received(ik, Xk[kk + 5] / 1e3, yk);
            const Fk = this.unshown.get(Tk);
            void 0 === Fk ? this.unshown.set(Tk, [ik]) : Fk.push(ik);
            break
          }
          case BF.Rb.Failed: {
            const kk = this.latest.get(Tk);
            void 0 !== kk && kk !== ik ? this.log.reassign(Tk, ik, kk) : this.log.failed(ik), this.ended(Tk, ik);
            break
          }
          case BF.Rb.Shown:
            this.log.applied(Tk, ik, Fk), this.ended(Tk, ik);
            break;
          case BF.Rb.Replaced:
            this.log.reassign(Tk, ik, Xk[kk + 5]), this.ended(Tk, ik);
            break;
          case BF.Rb.Emptied:
            this.log.emptied(Tk, Fk);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Xk[kk]}`)
        }
      }
      ended(kk, Fk) {
        this.latest.get(kk) === Fk && this.latest.delete(kk);
        const Ik = this.unshown.get(kk);
        if (void 0 === Ik) return;
        const Xk = Ik.indexOf(Fk);
        Xk >= 0 && Ik.splice(Xk, 1), 0 === Ik.length && this.unshown.delete(kk)
      }
    }
    let gT = null;
    var mT = Ik(3161),
      hT = Ik(39631);
    const rT = new Uint8Array(0);
    class DT {
      constructor(kk) {
        this.options = kk, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.eq = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== kk.module ? kk.write(0, fF.Pd.WorldgenStarted, 0, 0, rT) : this.giveUp()
      }
      take(kk, Fk) {
        if (!(this.gone || null === this.worker && null === this.eq))
          if (kk === fF.Sd.WorldgenSeed) {
            const kk = 0 === Fk.byteLength ? null : this.options.decodeSettings(Fk);
            null === kk ? this.release() : function(kk, Fk) {
              if ((null === kk || void 0 === kk ? void 0 : kk.byteLength) !== Fk.byteLength) return !1;
              for (let Ik = 0; Ik < kk.byteLength; Ik++)
                if (kk[Ik] !== Fk[Ik]) return !1;
              return !0
            }(this.seed, Fk) || (this.seed = Fk.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: kk
            }, []), null !== kk ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (kk === fF.Sd.Generate) {
          var Ik;
          const kk = new DataView(Fk.buffer, Fk.byteOffset, fF.Nd),
            Xk = null !== (Ik = this.pool.pop()) && void 0 !== Ik ? Ik : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: kk.getUint32(0, !0),
            x: kk.getInt32(4, !0),
            y: kk.getInt32(8, !0),
            z: kk.getInt32(12, !0),
            bytes: Xk
          }, [Xk])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, fF.Pd.WorldgenStarted, 0, 0, rT)))
      }
      stop() {
        var kk;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (kk = this.worker) || void 0 === kk || kk.terminate(), this.worker = null
      }
      post(kk, Fk) {
        var Ik;
        null !== this.eq ? this.eq.push({
          message: kk,
          transfer: Fk
        }) : null === (Ik = this.worker) || void 0 === Ik || Ik.postMessage(kk, Fk)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.eq ??= [])
      }
      endWorker() {
        var kk, Fk, Ik;
        this.endWatch(), null === (kk = this.worker) || void 0 === kk || kk.terminate(), this.worker = null, null === (Fk = (Ik = this.options).onMemoryGone) || void 0 === Fk || Fk.call(Ik)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((kk => {
          this.createWorker = kk, this.wanted && this.start()
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
        let Ik;
        this.startsWithoutResult++;
        try {
          Ik = Fk()
        } catch (Tk) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Tk), this.lastLoss = `it did not start (${String(Tk)})`, void this.start()
        }
        this.worker = Ik, Ik.onmessage = kk => {
          let {
            data: Fk
          } = kk;
          this.worker === Ik && this.onReply(Ik, Fk)
        }, Ik.onerror = kk => {
          kk.preventDefault(), this.worker === Ik && this.lose(kk.message || "its script failed")
        };
        try {
          Ik.postMessage({
            type: "start",
            module: kk,
            se: Xk.f.se
          })
        } catch (Tk) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Tk), this.lastLoss = `it could not be sent the module (${String(Tk)})`, Ik.terminate(), this.worker = null, void this.start()
        }
        this.watch = new fX.g(fX.e, (kk => {
          this.lose((0, fX.i)(kk), (() => {
            this.options.onStartTimeout(kk)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(kk, Fk) {
        switch (Fk.type) {
          case "started": {
            this.endWatch();
            const Fk = this.eq;
            if (null === Fk) {
              this.coreWaits = !1, this.options.write(0, fF.Pd.WorldgenStarted, 0, 0, rT);
              break
            }
            this.eq = null;
            for (const {
                message: Ik,
                transfer: Xk
              }
              of Fk) kk.postMessage(Ik, Xk);
            break
          }
          case "lost":
            this.lose(Fk.reason);
            break;
          case "memory":
            var Ik, Xk;
            null === (Ik = (Xk = this.options).onMemoryStats) || void 0 === Ik || Ik.call(Xk, Fk.stats);
            break;
          case "result":
            Fk.status !== fF.ub.Trapped && (this.startsWithoutResult = 0), this.options.write(Fk.ticket, fF.Pd.WorldgenResult, Fk.status, Fk.workerUs, new Uint8Array(Fk.bytes, 0, Fk.len)), this.recycle(Fk.bytes), Fk.spare && this.recycle(Fk.spare)
        }
      }
      lose(kk, Fk) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${kk}`), this.lastLoss = kk, this.endWorker(), this.gone || (Fk ? Fk() : this.options.onWorkerLost(kk), this.dropHeld(), this.eq = null, this.options.write(0, fF.Pd.WorldgenLost, fF.Wd.Lost, 0, rT), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, fF.Pd.WorldgenLost, fF.Wd.Gone, 0, rT)
      }
      endWatch() {
        var kk;
        null === (kk = this.watch) || void 0 === kk || kk.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.eq) {
          for (const {
              message: kk
            }
            of this.eq) "generate" === kk.type && this.recycle(kk.bytes);
          this.eq.length = 0
        }
      }
      recycle(kk) {
        this.pool.length < 16 && kk.byteLength > 0 && kk.byteLength <= 16384 && this.pool.push(kk)
      }
    }
    var MT = Ik(37760),
      ki = Ik(3662),
      Fi = Ik(40670),
      Ii = Ik(41009),
      Xi = Ik(40787);
    const Ti = /[(@\s]([^\s(@]+)$/,
      ii = /:\d/;

    function yi(kk, Fk) {
      for (let Ik = 0; Ik + Fk.length <= kk.length; Ik++) {
        let Xk = 0;
        for (; Xk < Fk.length && kk[Ik + Xk] === Fk[Xk];) Xk++;
        if (Xk === Fk.length) return Ik
      }
      return -1
    }

    function li(kk) {
      return "(" === kk || ")" === kk || "@" === kk || "," === kk || " " === kk || "\t" === kk
    }

    function ai(kk, Fk) {
      let Ik = Fk;
      for (; Ik > 0 && !li(kk[Ik - 1]);) Ik--;
      let Xk = Fk;
      for (; Xk < kk.length && !li(kk[Xk]);) Xk++;
      let Tk = "";
      for (let ik = Ik; ik < Xk; ik++) Tk += kk[ik];
      return Tk
    }

    function qi(kk, Fk) {
      var Ik;
      const Xk = /[^\n]+/g,
        Tk = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        ik = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let yk = null,
        lk = null,
        ak = (0, pX.k)(pX.R, Xk, [kk]);
      for (; null !== ak;) {
        const Ik = (0, pX.k)(pX.R, Tk, [ak[0]]),
          qk = null === Fk ? -1 : yi(ak[0], Fk);
        if (-1 !== qk) {
          if (null !== Ik) return Ik[0];
          const kk = ai(ak[0], qk),
            Fk = (0, pX.k)(pX.R, Ti, [ak[0]]),
            Xk = null !== (0, pX.k)(pX.R, ii, [kk]) ? kk : null === Fk ? null : Fk[1],
            Tk = null === Xk ? null : (0, pX.k)(pX.R, ik, [Xk]);
          if (null !== Tk && "" !== Tk[1]) return Tk[1]
        }
        null !== Ik && (null === yk ? yk = Ik[0] : null === lk && Ik[0] !== yk && (lk = Ik[0])), ak = (0, pX.k)(pX.R, Xk, [kk])
      }
      return null !== (Ik = lk) && void 0 !== Ik ? Ik : null === yk ? "none" : "own"
    }
    const Li = /:(\d+):(\d+)\)?$/;

    function ti(kk, Fk) {
      const Ik = (0, pX.k)(pX.R, Li, [Fk]);
      return null === Ik ? kk : kk + ":" + Ik[1] + ":" + Ik[2]
    }

    function Zi(kk) {
      const Fk = /[^\n]+/g,
        Ik = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let Xk = null,
        Tk = "",
        ik = !1,
        yk = (0, pX.k)(pX.R, Fk, [kk]);
      for (; null !== yk;) {
        const lk = (0, pX.k)(pX.R, Ik, [yk[0]]),
          ak = null === lk ? (0, pX.k)(pX.R, Ti, [yk[0]]) : null,
          qk = null !== ak && null !== (0, pX.k)(pX.R, ii, [ak[1]]) && 0 !== yi(ak[1], "wasm:") ? ak[1] : null;
        if (null === Xk) null !== lk ? (Xk = lk[2], Tk = lk[4]) : null !== qk && (Xk = "");
        else if (null !== lk) {
          if (ik = !0, "" !== lk[1]) return {
            reader: "inline",
            frame: ti("blob", yk[0])
          };
          if (lk[2] !== Xk) {
            const kk = "moz-extension" === lk[3] || "safari-web-extension" === lk[3];
            let Fk = "";
            for (let Ik = 0; Ik < lk[5].length && Ik < 20; Ik++) Fk += lk[5][Ik];
            return {
              reader: kk ? lk[3] : lk[2],
              frame: ti("" === Fk ? "-" : Fk, yk[0])
            }
          }
          if (lk[4] !== Tk) return {
            reader: "inline",
            frame: ti("inline", yk[0])
          }
        } else if (null !== qk) {
          const kk = -1 !== yi(yk[0], "userscript") || -1 !== yi(yk[0], ".user.js");
          return {
            reader: kk ? "userscript" : "inline",
            frame: ti(kk ? "userscript" : "eval", yk[0])
          }
        }
        yk = (0, pX.k)(pX.R, Fk, [kk])
      }
      const lk = ik ? "own" : "unknown";
      return {
        reader: lk,
        frame: lk
      }
    }

    function ji(kk, Fk) {
      return (0, MT.g)(function(kk) {
        if ("string" !== typeof kk || 0 === kk.length) return "-";
        let Fk = 2166136261;
        const Ik = kk.length < 4096 ? kk.length : 4096;
        for (let Tk = 0; Tk <= Ik; Tk++) Fk ^= Tk === Ik ? kk.length : (0, pX.k)(pX.bb, kk, [Tk]), Fk = Fk + (Fk << 1) + (Fk << 4) + (Fk << 7) + (Fk << 8) + (Fk << 24) >>> 0;
        let Xk = "";
        for (let Tk = 28; Tk >= 0; Tk -= 4) Xk += "0123456789abcdef" [Fk >>> Tk & 15];
        return Xk
      }(Fk), Zi(kk).frame)
    }
    const ei = (kk, Fk) => kk.includes(Fk),
      wi = kk => {
        try {
          return kk()
        } catch {
          return !1
        }
      },
      Hi = -1,
      Ji = kk => {
        try {
          return kk()
        } catch {
          return Hi
        }
      };

    function xi(kk, Fk) {
      return {
        probe: (Ik, Xk, Tk) => {
          try {
            return ((Ik, Xk, Tk) => {
              switch (Ik) {
                case fF.mc.StackCheck:
                  return Fk.stackCheck() ? 1 : 0;
                case fF.mc.ConfirmMesh:
                  return Fk.confirmMesh();
                case fF.mc.IndexPassReplaced:
                  return Fk.indexPassReplaced() ? 1 : 0;
                case fF.mc.ProductSubChanged:
                  return Fk.productSubChanged() ? 1 : 0;
                case fF.mc.RenderStatus:
                  return Fk.Bq();
                case fF.mc.Held:
                  return Fk.eq();
                case fF.mc.PlayerKilledSubs:
                  return Fk.playerKilledSubs();
                case fF.cb: {
                  const Ik = Fk.getComplete();
                  return null === Ik ? 0 : (0, pX.k)(pX.u, pX.hb, [Ik, new pX.b((0, pX.F)(kk()), Xk, Tk)]).written
                }
                default:
                  return 0
              }
            })(Ik, Xk, Tk)
          } catch {
            return fF.ec
          }
        }
      }
    }
    class Pi {
      constructor(kk) {
        this.write = kk, this.flagsWritten = 0, this.written = (0, pX.n)(null)
      }
      Dt(kk) {
        let {
          flags: Fk,
          values: Ik
        } = kk;
        for (let Xk = 0; Xk < Ik.length; Xk++) this.value(Ik[Xk][0], Ik[Xk][1]);
        this.setFlags(Fk | fF.g.Ready)
      }
      value(kk, Fk) {
        this.written[kk] !== Fk && this.write(kk, Fk, 0) && (this.written[kk] = Fk)
      }
      setFlags(kk) {
        const Fk = kk & ~this.flagsWritten;
        0 !== Fk && this.write(fF.h.Flags, Fk, Fk) && (this.flagsWritten |= Fk)
      }
      originStackHit() {
        return this.write(fF.h.Flags, fF.g.OriginStackHit, fF.g.OriginStackHit)
      }
    }
    const Ki = {
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
      Qi = 1e3;
    let si;
    const Vi = ["length", 0, 1, 2, 3, "g", 114, "d", 8, 239, 110, "b", void 0, 161, "a", null, "r", "c3RhY2", "cw==", 1e5, "stack", "name", "c", 59, 179, 25, 207, 61, 5, 141, !0, 106, 173, !1, 181, 235, 6, 133, 4, 92, 134, 107, "n", 33554432, 67108864, 224, 123, 242, 137, 238, 16, 9, "fBThfO", 512, 256, "012345", 46, 15, 174, 1023, 63, 128, 12, 255, 124, 32, 68, 24, 7, 18, 10, 19, 64, "e", 65535, "string", "abc", 909522486, 1549556828, 154, "6789AB", "CDEF", "6789ab", "cdef", 192, 236, 49, "ABCDEFGHI", "JKLMNOPQR", "STUVWXYZa", "bcdefghij", "klmnopqrs", "tuvwxyz01", "23456789+", "/", 171, 55296, 56319, 56320, 57343, 65536, 127, 2047, 31, 2097151, 240, 116, 177, 13, 22, 11, 17, 28, 34, 39, 14, 41, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 209, 122, 244, 204, 203, 230, 99, 135, 93, 111, 66, 109, 144, 205, "l", 169, "functi", "on", "k", 249, 97, "protot", "ype", "decode", "4", "I=", "eTR5bm", "s", "u", "q", "t", "z", "Cd", "chEven", "dispat", "now", "confir", "mMesh", "produc", "m", "player", "Killed", "number", "toString", "get", "v", "i", "f", "None", "En", "h", "tOverw", "ritten", "plete", "p"];

    function zi(...kk) {
      if (kk[Vi[0]] = Vi[4], kk[Vi[1]] === Vi[52]) return kk[Vi[2]] + kk[Vi[3]]
    }

    function Si() {}

    function oi() {
      oi = function() {}
    }
    si = function(kk) {
      let Fk = arguments[Vi[0]] > Vi[2] && arguments[Vi[2]] !== Vi[12] ? arguments[Vi[2]] : (...kk) => (kk[Vi[0]] = Vi[1], "A3wyE_" + Vi[22] in Si && function(...kk) {
          kk[Vi[0]] = Vi[1];
          const Fk = require("big-integer");
          oi(kk[Vi[14]] = class {
            static randomPrime(...kk) {
              kk[Vi[0]] = Vi[2];
              const Ik = Fk.one.shiftLeft(kk[Vi[1]] - Vi[2]),
                Xk = Fk.one.shiftLeft(kk[Vi[1]]).prev();
              for (; Vi[30];) {
                let kk = Fk.randBetween(Ik, Xk);
                if (kk.isProbablePrime(Vi[54])) return kk
              }
            }
            static generate(...kk) {
              kk[Vi[0]] = Vi[2];
              const Ik = Fk(65537);
              let Xk, Tk;
              kk[Vi[2]] = Vi[12];
              do {
                oi(Xk = this.randomPrime(kk[Vi[1]] / Vi[3]), Tk = this.randomPrime(kk[Vi[1]] / Vi[3]), kk[Vi[2]] = Fk.lcm(Xk.prev(), Tk.prev()))
              } while (Fk.gcd(Ik, kk[Vi[2]]).notEquals(Vi[2]) || Xk.minus(Tk).abs().shiftRight(kk[Vi[1]] / Vi[3] - 100).isZero());
              return {
                e: Ik,
                n: Xk.multiply(Tk),
                d: Ik.modInv(kk[Vi[2]])
              }
            }
            static encrypt(...kk) {
              return kk[Vi[0]] = Vi[4], Fk(kk[Vi[1]]).modPow(kk[Vi[3]], kk[Vi[2]])
            }
            static decrypt(...kk) {
              return kk[Vi[0]] = Vi[4], Fk(kk[Vi[1]]).modPow(kk[Vi[2]], kk[Vi[3]])
            }
            static encode(kk) {
              const Ik = kk.split("").map((kk => kk.charCodeAt())).join("");
              return Fk(Ik)
            }
            static decode(...kk) {
              kk[Vi[0]] = Vi[2];
              const Fk = kk[Vi[1]].toString();
              kk[Vi[13]] = "";
              for (let Ik = Vi[1]; Ik < Fk.length; Ik += Vi[3]) {
                let Xk = Number(Fk.substr(Ik, Vi[3]));
                Xk <= 30 ? (kk[Vi[13]] += String.fromCharCode(Number(Fk.substr(Ik, Vi[4]))), Ik++) : kk[Vi[13]] += String.fromCharCode(Xk)
              }
              return kk[Vi[13]]
            }
          }, module.exports = kk[Vi[14]])
        }(), Vi[15]),
        Ik = arguments[Vi[0]] > Vi[3] && arguments[Vi[3]] !== Vi[12] ? arguments[Vi[3]] : Vi[15],
        Xk = arguments[Vi[0]] > Vi[4] && arguments[Vi[4]] !== Vi[12] ? arguments[Vi[4]] : "";
      const Tk = window,
        ik = (Vi[1], pX[Vi[16]])("RXJyb3" + Vi[214]),
        yk = (Vi[1], pX[Vi[16]])(Vi[17] + "s="),
        lk = (Vi[1], pX[Vi[16]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        qk = (Vi[1], pX[Vi[16]])(Vi[17] + "tUcmFjZUxpbWl0"),
        Lk = (Vi[1], pX[Vi[16]])("bmF0aXZl"),
        tk = [(Vi[1], pX[Vi[16]])("bWFpbi5qcw=="), (Vi[1], pX[Vi[16]])("aW5kZXguanM="), (Vi[1], pX[Vi[16]])("dXNlcnNjcmlwdA=="), (Vi[1], pX[Vi[16]])("Y29udGVudC5q" + Vi[18]), (Vi[1], pX[Vi[16]])("b3B0aW9ucy5q" + Vi[18]), (Vi[1], pX[Vi[16]])("cG9wdXAuanM="), (Vi[1], pX[Vi[16]])("LnVzZXIuanM="), (Vi[1], pX[Vi[16]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Zk = (...kk) => {
          kk[Vi[0]] = Vi[2];
          const Fk = Tk[ik],
            Ik = Fk;
          Ik[qk] < Vi[19] && (Ik[qk] = Vi[19]);
          const Xk = "string" === typeof(Zk = (new Fk)[yk]) ? Zk : `${Zk}`,
            ak = {},
            Lk = Ik[lk];
          var Zk;
          typeof Lk === Vi[205] + Vi[206] && (Vi[1], pX[Vi[207]])(Lk, Fk, [ak]);
          const jk = ak[yk],
            ek = kk[Vi[1]] ? tk[Vi[0]] : tk[Vi[0]] - Vi[2];
          for (let Tk = Vi[1]; Tk < ek; Tk++) {
            if (ei(Xk, tk[Tk])) return {
              [Vi[20]]: Xk,
              [Vi[21]]: tk[Tk]
            };
            if (typeof jk === Vi[75] && ei(jk, tk[Tk])) return {
              [Vi[20]]: jk,
              [Vi[21]]: tk[Tk]
            }
          }
          return Vi[15]
        },
        jk = (...kk) => (kk[Vi[0]] = Vi[2], "Q9u_FQ" in Si && function(...kk) {
          oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", kk[Vi[11]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", kk[Vi[22]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", kk[Vi[14]].match(kk[Vi[11]] + kk[Vi[22]]))
        }(), Zk(kk[Vi[1]]) !== Vi[15]);
      let ek = Vi[15],
        wk = Vi[15],
        Hk = Vi[15],
        Jk = Vi[15];
      const xk = (...kk) => {
        kk[Vi[0]] = Vi[2];
        try {
          function Fk(...kk) {
            oi(kk[Vi[0]] = Vi[1], kk[Vi[29]] = function(...kk) {
              for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Vi[1], kk[Vi[3]] = {}, kk[-Vi[25]] = Vi[1], kk[-Vi[26]] = Vi[1], kk[Vi[28]] = Vi[1], kk[-Vi[24]] = kk[Vi[1]].length), kk[-Vi[23]] = Vi[1]; kk[-Vi[23]] < kk[-Vi[24]]; kk[-Vi[23]]++) {
                for (oi(kk[Vi[3]] = {}, kk[-Vi[25]] = Vi[1], kk[-Vi[26]] = Vi[2]), kk[Vi[27]] = kk[-Vi[23]] + Vi[2]; kk[Vi[27]] < kk[-Vi[24]]; kk[Vi[27]]++) kk[Vi[1]][kk[-Vi[23]]].x !== kk[Vi[1]][kk[Vi[27]]].x || kk[Vi[1]][kk[-Vi[23]]].y !== kk[Vi[1]][kk[Vi[27]]].y ? (kk[Vi[1]][kk[-Vi[23]]].y === kk[Vi[1]][kk[Vi[27]]].y ? kk[Vi[28]] = Number.MAX_SAFE_INTEGER : kk[Vi[28]] = (kk[Vi[1]][kk[-Vi[23]]].x - kk[Vi[1]][kk[Vi[27]]].x) / (kk[Vi[1]][kk[-Vi[23]]].y - kk[Vi[1]][kk[Vi[27]]].y), kk[Vi[3]][kk[Vi[28]]] || (kk[Vi[3]][kk[Vi[28]]] = Vi[1]), oi(kk[Vi[3]][kk[Vi[28]]]++, kk[-Vi[25]] = Math.max(kk[-Vi[25]], kk[Vi[3]][kk[Vi[28]]]))) : kk[-Vi[26]]++;
                oi(kk[-Vi[25]] += kk[-Vi[26]], kk[Vi[14]] = Math.max(kk[Vi[14]], kk[-Vi[25]]))
              }
              return kk[Vi[14]]
            }, console.log(kk[Vi[29]]))
          }
          return "rhnCZl" in Si && Fk(), kk[Vi[1]]()
        } catch {
          return Vi[30]
        }
      };
      let Pk = Vi[33];
      const Kk = () => {
          if (!Pk && (Vi[1], pX[Vi[216]])()) {
            function kk(...kk) {
              oi(kk[Vi[0]] = Vi[1], kk[-Vi[35]] = function(...Fk) {
                return Fk[Vi[0]] = Vi[3], kk[Vi[2]]({}, Fk[Vi[1]], Fk[Vi[2]])
              }, kk[Vi[2]] = function(...Fk) {
                if (oi(Fk[Vi[0]] = Vi[4], Fk[-Vi[31]] = {}), Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] !== Vi[12]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]];
                if (Fk[Vi[2]] === Fk[Vi[3]]) return Vi[30];
                for (Fk[Vi[11]] = Vi[1]; Fk[Vi[11]] < Fk[Vi[2]].length; Fk[Vi[11]]++) Fk[-Vi[31]][Fk[Vi[2]][Fk[Vi[11]]]] === Vi[12] && (Fk[-Vi[31]][Fk[Vi[2]][Fk[Vi[11]]]] = Vi[1]), Fk[-Vi[31]][Fk[Vi[3]][Fk[Vi[11]]]] === Vi[12] && (Fk[-Vi[31]][Fk[Vi[3]][Fk[Vi[11]]]] = Vi[1]), oi(Fk[-Vi[31]][Fk[Vi[2]][Fk[Vi[11]]]]++, Fk[-Vi[31]][Fk[Vi[3]][Fk[Vi[11]]]]--);
                for (Fk[Vi[32]] in Fk[-Vi[31]])
                  if (Fk[-Vi[31]][Fk[Vi[32]]] !== Vi[1]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[33], Vi[33];
                for (Fk[-Vi[34]] = Vi[2]; Fk[-Vi[34]] < Fk[Vi[2]].length; Fk[-Vi[34]]++)
                  if (kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[-Vi[34]]), Fk[Vi[3]].substr(Vi[1], Fk[-Vi[34]])) && kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Fk[-Vi[34]]), Fk[Vi[3]].substr(Fk[-Vi[34]])) || kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[-Vi[34]]), Fk[Vi[3]].substr(Fk[Vi[3]].length - Fk[-Vi[34]])) && kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Fk[-Vi[34]]), Fk[Vi[3]].substr(Vi[1], Fk[Vi[3]].length - Fk[-Vi[34]]))) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[30], Vi[30];
                return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[33], Vi[33]
              }, console.log(kk[-Vi[35]]))
            }
            "FHDTWl" in Si && kk(), Pk = Vi[30]
          }
        },
        Qk = (...kk) => {
          kk[Vi[0]] = Vi[2], "SqphSqH" in Si && function() {
            var kk, Fk = function(...Fk) {
              return oi(Fk[Vi[0]] = Vi[3], Fk[Vi[14]] = [], Fk[Vi[11]] = Fk[Vi[1]].length, Fk[Vi[1]].sort(((kk, Fk) => kk - Fk)), kk(Fk[Vi[14]], [], Vi[1], Fk[Vi[11]], Fk[Vi[1]], Fk[Vi[2]])), Fk[Vi[14]]
            };
            oi(kk = function(...Fk) {
              if (oi(Fk[Vi[0]] = Vi[36], Fk[Vi[36]] = Vi[15]), !(Fk[Vi[28]] < Vi[1])) {
                if (Fk[Vi[28]] === Vi[1]) return Fk[Vi[1]].push(Fk[Vi[2]]);
                for (Fk[-Vi[37]] = Fk[Vi[3]]; Fk[-Vi[37]] < Fk[Vi[4]] && !(Fk[Vi[38]][Fk[-Vi[37]]] > Fk[Vi[28]]); Fk[-Vi[37]]++) Fk[-Vi[37]] > Fk[Vi[3]] && Fk[Vi[38]][Fk[-Vi[37]]] === Fk[Vi[38]][Fk[-Vi[37]] - Vi[2]] || oi(Fk[Vi[36]] = Array.from(Fk[Vi[2]]), Fk[Vi[36]].push(Fk[Vi[38]][Fk[-Vi[37]]]), kk(Fk[Vi[1]], Fk[Vi[36]], Fk[-Vi[37]] + Vi[2], Fk[Vi[4]], Fk[Vi[38]], Fk[Vi[28]] - Fk[Vi[38]][Fk[-Vi[37]]]))
              }
            }, console.log(Fk))
          }();
          try {
            return kk[Vi[1]]()
          } catch {
            return Vi[12]
          }
        },
        sk = (...kk) => {
          kk[Vi[0]] = Vi[2], "pUe5UK" in Si && function(...kk) {
            kk[Vi[0]] = Vi[1]
          }();
          try {
            return kk[Vi[1]](), Vi[30]
          } catch {
            return Vi[33]
          }
        },
        Vk = (Vi[1], pX[Vi[16]])("a29qbzYzb25i"),
        zk = (Vi[1], pX[Vi[42]])(Vi[15]);
      let Sk = Vi[15],
        vk = Vi[33],
        Ek = Vi[33];
      const Ok = (Vi[1], pX[Vi[42]])(Vi[15]);
      let nk = Vi[1];
      const Gk = (Vi[1], pX[Vi[42]])(Vi[15]);
      let pk = Vi[1];
      const uk = (Vi[1], pX[Vi[42]])(Vi[15]);
      let bk = Vi[33],
        Rk = Vi[33];
      const Uk = (...Fk) => {
          if (Fk[Vi[0]] = Vi[3], Fk[Vi[1]] === kk) {
            function ik(...kk) {
              function Fk(...kk) {
                return kk[Vi[0]] = Vi[2], kk[Vi[1]][Vi[2]] * Vi[44] + (kk[Vi[1]][Vi[1]] < Vi[1] ? Vi[43] | kk[Vi[1]][Vi[1]] : kk[Vi[1]][Vi[1]])
              }

              function Ik(...kk) {
                switch (kk[Vi[0]] = Vi[2], ((kk[Vi[1]] & Vi[43]) !== Vi[1]) * Vi[2] + (kk[Vi[1]] < Vi[1]) * Vi[3]) {
                  case Vi[1]:
                    return [kk[Vi[1]] % Vi[43], Math.trunc(kk[Vi[1]] / Vi[44])];
                  case Vi[2]:
                    return [kk[Vi[1]] % Vi[43] - Vi[43], Math.trunc(kk[Vi[1]] / Vi[44]) + Vi[2]];
                  case Vi[3]:
                    return [((kk[Vi[1]] + Vi[43]) % Vi[43] + Vi[43]) % Vi[43], Math.round(kk[Vi[1]] / Vi[44])];
                  case Vi[4]:
                    return [kk[Vi[1]] % Vi[43], Math.trunc(kk[Vi[1]] / Vi[44])]
                }
              }
              kk[Vi[0]] = Vi[1], oi(kk[-Vi[45]] = Fk([Vi[3], Vi[38]]), kk[Vi[2]] = Fk([Vi[2], Vi[3]]), kk[-Vi[46]] = kk[-Vi[45]] + kk[Vi[2]], kk[-Vi[47]] = kk[-Vi[46]] - kk[Vi[2]], kk[Vi[38]] = kk[-Vi[47]] * Vi[3], kk[-Vi[48]] = kk[Vi[38]] / Vi[3], console.log(Ik(kk[-Vi[46]])), console.log(Ik(kk[-Vi[47]])), console.log(Ik(kk[Vi[38]])), console.log(Ik(kk[-Vi[48]])))
            }
            if ("UYFk4A" in Si && ik(), Sk === Vi[15]) Sk = typeof Fk[Vi[2]] === Vi[231] ? Fk[Vi[2]] : -Vi[2];
            else {
              function yk(...kk) {
                oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = function(...Fk) {
                  return oi(Fk[Vi[0]] = Vi[2], Fk[Vi[14]] = []), (Fk[Vi[1]] === Vi[2] || Fk[Vi[1]] >= Vi[38]) && kk[Vi[11]](Fk[Vi[14]], [], Fk[Vi[1]], Vi[1]), Fk[Vi[14]]
                }, kk[Vi[11]] = function(...Fk) {
                  for (Fk[Vi[0]] = Vi[38], Fk[Vi[14]] = Fk[Vi[4]]; Fk[Vi[14]] < Fk[Vi[3]]; Fk[Vi[14]]++) {
                    if (Fk[Vi[2]].length !== Fk[Vi[14]]) return;
                    for (Fk[Vi[28]] = Vi[1]; Fk[Vi[28]] < Fk[Vi[3]]; Fk[Vi[28]]++) kk[Vi[3]](Fk[Vi[2]], [Fk[Vi[14]], Fk[Vi[28]]]) && (oi(Fk[Vi[2]].push([Fk[Vi[14]], Fk[Vi[28]]]), kk[Vi[11]](Fk[Vi[1]], Fk[Vi[2]], Fk[Vi[3]], Fk[Vi[14]] + Vi[2])), Fk[Vi[2]].length === Fk[Vi[3]] && Fk[Vi[1]].push(kk[Vi[7]](Fk[Vi[2]])), Fk[Vi[2]].pop())
                  }
                }, kk[Vi[7]] = function(...kk) {
                  for (oi(kk[Vi[0]] = Vi[2], kk[Vi[2]] = [], kk[Vi[3]] = kk[Vi[1]].length), kk[-Vi[49]] = Vi[1]; kk[-Vi[49]] < kk[Vi[3]]; kk[-Vi[49]]++)
                    for (kk[Vi[2]][kk[-Vi[49]]] = "", kk[Vi[7]] = Vi[1]; kk[Vi[7]] < kk[Vi[3]]; kk[Vi[7]]++) kk[Vi[2]][kk[-Vi[49]]] += kk[Vi[1]][kk[-Vi[49]]][Vi[2]] === kk[Vi[7]] ? "Q" : ".";
                  return kk[Vi[2]]
                }, kk[Vi[3]] = function(...kk) {
                  for (oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = kk[Vi[1]].length), kk[Vi[11]] = Vi[1]; kk[Vi[11]] < kk[Vi[3]]; kk[Vi[11]]++) {
                    if (kk[Vi[1]][kk[Vi[11]]][Vi[1]] === kk[Vi[2]][Vi[1]] || kk[Vi[1]][kk[Vi[11]]][Vi[2]] === kk[Vi[2]][Vi[2]]) return Vi[33];
                    if (Math.abs((kk[Vi[1]][kk[Vi[11]]][Vi[1]] - kk[Vi[2]][Vi[1]]) / (kk[Vi[1]][kk[Vi[11]]][Vi[2]] - kk[Vi[2]][Vi[2]])) === Vi[2]) return Vi[33]
                  }
                  return Vi[30]
                }, console.log(kk[Vi[14]]))
              }
              "gki9o7" in Si && yk(), vk = Vi[30]
            }
            return
          }
          const Ik = zk[Fk[Vi[1]]];
          if (!Fk[Vi[2]]) {
            function lk(...kk) {
              oi(kk[Vi[0]] = Vi[1], kk[Vi[11]] = function(...kk) {
                function Fk(...kk) {
                  return kk[Vi[0]] = Vi[3], yk(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])))
                }

                function Ik(...kk) {
                  return kk[Vi[0]] = Vi[4],
                    function(...kk) {
                      var Fk, Ik, Xk, Tk;
                      for (oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = kk[Vi[2]].length, kk[Vi[4]] = Array()), kk[-Vi[58]] = Array(Math.ceil(kk[Vi[1]].length / Vi[3])), Fk = Vi[1]; Fk < kk[-Vi[58]].length; Fk++) kk[-Vi[58]][Fk] = kk[Vi[1]].charCodeAt(Fk * Vi[3]) << Vi[8] | kk[Vi[1]].charCodeAt(Fk * Vi[3] + Vi[2]);
                      for (; kk[-Vi[58]].length > Vi[1];) {
                        for (oi(Tk = Array(), Xk = Vi[1]), Fk = Vi[1]; Fk < kk[-Vi[58]].length; Fk++) oi(Xk = (Xk << Vi[50]) + kk[-Vi[58]][Fk], Ik = Math.floor(Xk / kk[Vi[3]]), Xk -= Ik * kk[Vi[3]]), (Tk.length > Vi[1] || Ik > Vi[1]) && (Tk[Tk.length] = Ik);
                        oi(kk[Vi[4]][kk[Vi[4]].length] = Xk, kk[-Vi[58]] = Tk)
                      }
                      for (kk[Vi[28]] = "", Fk = kk[Vi[4]].length - Vi[2]; Fk >= Vi[1]; Fk--) kk[Vi[28]] += kk[Vi[2]].charAt(kk[Vi[4]][Fk]);
                      for (kk[Vi[36]] = Math.ceil(kk[Vi[1]].length * Vi[8] / (Math.log(kk[Vi[2]].length) / Math.log(Vi[3]))), Fk = kk[Vi[28]].length; Fk < kk[Vi[36]]; Fk++) kk[Vi[28]] = kk[Vi[2]][Vi[1]] + kk[Vi[28]];
                      return kk[Vi[28]]
                    }(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])), kk[Vi[3]])
                }

                function Tk(...kk) {
                  oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = ak(kk[Vi[1]])), kk[Vi[14]].length > Vi[50] && (kk[Vi[14]] = xk(kk[Vi[14]], kk[Vi[1]].length * Vi[8]));
                  var Fk = Array(Vi[50]),
                    Ik = Array(Vi[50]);
                  for (kk[-Vi[51]] = Vi[1]; kk[-Vi[51]] < Vi[50]; kk[-Vi[51]]++) oi(Fk[kk[-Vi[51]]] = kk[Vi[14]][kk[-Vi[51]]] ^ Vi[77], Ik[kk[-Vi[51]]] = kk[Vi[14]][kk[-Vi[51]]] ^ Vi[78]);
                  return kk[Vi[38]] = xk(Fk.concat(ak(kk[Vi[2]])), Vi[53] + kk[Vi[2]].length * Vi[8]), qk(xk(Ik.concat(kk[Vi[38]]), zi(Vi[52], Vi[53], Vi[54])))
                }

                function ik(...Fk) {
                  Fk[Vi[0]] = Vi[2];
                  try {
                    kk[Vi[22]]
                  } catch (Xk) {
                    kk[Vi[22]] = Vi[1]
                  }
                  for (oi(Fk[Vi[2]] = kk[Vi[22]] ? Vi[55] + Vi[80] + Vi[81] : Vi[55] + Vi[82] + Vi[83], Fk[-Vi[56]] = "", Fk[Vi[22]] = Vi[12]), Fk[Vi[38]] = Vi[1]; Fk[Vi[38]] < Fk[Vi[1]].length; Fk[Vi[38]]++) oi(Fk[Vi[22]] = Fk[Vi[1]].charCodeAt(Fk[Vi[38]]), Fk[-Vi[56]] += Fk[Vi[2]].charAt(Fk[Vi[22]] >>> Vi[38] & Vi[57]) + Fk[Vi[2]].charAt(Fk[Vi[22]] & Vi[57]));
                  return Fk[-Vi[56]]
                }

                function yk(...Fk) {
                  Fk[Vi[0]] = Vi[2];
                  try {
                    kk[Vi[7]]
                  } catch (Xk) {
                    kk[Vi[7]] = ""
                  }
                  for (oi(Fk[Vi[14]] = Vi[87] + Vi[88] + Vi[89] + Vi[90] + Vi[91] + Vi[92] + Vi[93] + Vi[94], Fk[Vi[11]] = "", Fk[Vi[4]] = Fk[Vi[1]].length), Fk[Vi[7]] = Vi[1]; Fk[Vi[7]] < Fk[Vi[4]]; Fk[Vi[7]] += Vi[4])
                    for (Fk[Vi[28]] = Fk[Vi[1]].charCodeAt(Fk[Vi[7]]) << Vi[50] | (Fk[Vi[7]] + Vi[2] < Fk[Vi[4]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[2]) << Vi[8] : Vi[1]) | (Fk[Vi[7]] + Vi[3] < Fk[Vi[4]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[3]) : Vi[1]), Fk[Vi[36]] = Vi[1]; Fk[Vi[36]] < Vi[38]; Fk[Vi[36]]++) Fk[Vi[7]] * Vi[8] + Fk[Vi[36]] * Vi[36] > Fk[Vi[1]].length * Vi[8] ? Fk[Vi[11]] += kk[Vi[7]] : Fk[Vi[11]] += Fk[Vi[14]].charAt(Fk[Vi[28]] >>> Vi[36] * (Vi[4] - Fk[Vi[36]]) & Vi[60]);
                  return Fk[Vi[11]]
                }

                function lk(...kk) {
                  var Fk, Ik;
                  for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = "", kk[Vi[11]] = -Vi[2]); ++kk[Vi[11]] < kk[Vi[1]].length;) oi(Fk = kk[Vi[1]].charCodeAt(kk[Vi[11]]), Ik = kk[Vi[11]] + Vi[2] < kk[Vi[1]].length ? kk[Vi[1]].charCodeAt(kk[Vi[11]] + Vi[2]) : Vi[1]), Vi[96] <= Fk && Fk <= Vi[97] && Vi[98] <= Ik && Ik <= Vi[99] && oi(Fk = Vi[100] + ((Fk & Vi[59]) << Vi[70]) + (Ik & Vi[59]), kk[Vi[11]]++), Fk <= Vi[101] ? kk[Vi[14]] += String.fromCharCode(Fk) : Fk <= Vi[102] ? kk[Vi[14]] += String.fromCharCode(Vi[84] | Fk >>> Vi[36] & Vi[103], Vi[61] | Fk & Vi[60]) : Fk <= Vi[74] ? kk[Vi[14]] += String.fromCharCode(Vi[45] | Fk >>> Vi[62] & Vi[57], Vi[61] | Fk >>> Vi[36] & Vi[60], Vi[61] | Fk & Vi[60]) : Fk <= Vi[104] && (kk[Vi[14]] += String.fromCharCode(Vi[105] | Fk >>> Vi[69] & Vi[68], Vi[61] | Fk >>> Vi[62] & Vi[60], Vi[61] | Fk >>> Vi[36] & Vi[60], Vi[61] | Fk & Vi[60]));
                  return kk[Vi[14]]
                }

                function ak(...kk) {
                  for (oi(kk[Vi[0]] = Vi[2], kk[Vi[2]] = Array(kk[Vi[1]].length >> Vi[3])), kk[Vi[3]] = Vi[1]; kk[Vi[3]] < kk[Vi[2]].length; kk[Vi[3]]++) kk[Vi[2]][kk[Vi[3]]] = Vi[1];
                  for (kk[Vi[3]] = Vi[1]; kk[Vi[3]] < kk[Vi[1]].length * Vi[8]; kk[Vi[3]] += Vi[8]) kk[Vi[2]][kk[Vi[3]] >> Vi[28]] |= (kk[Vi[1]].charCodeAt(kk[Vi[3]] / Vi[8]) & Vi[63]) << Vi[67] - kk[Vi[3]] % Vi[65];
                  return kk[Vi[2]]
                }

                function qk(...kk) {
                  for (oi(kk[Vi[0]] = Vi[2], kk[-Vi[66]] = ""), kk[Vi[11]] = Vi[1]; kk[Vi[11]] < kk[Vi[1]].length * Vi[65]; kk[Vi[11]] += Vi[8]) kk[-Vi[66]] += String.fromCharCode(kk[Vi[1]][kk[Vi[11]] >> Vi[28]] >>> Vi[67] - kk[Vi[11]] % Vi[65] & Vi[63]);
                  return kk[-Vi[66]]
                }

                function Lk(...kk) {
                  return kk[Vi[0]] = Vi[3], kk[Vi[1]] >>> kk[Vi[2]] | kk[Vi[1]] << Vi[65] - kk[Vi[2]]
                }

                function tk(...kk) {
                  return kk[Vi[0]] = Vi[3], kk[Vi[1]] >>> kk[Vi[2]]
                }

                function Zk(...kk) {
                  return kk[Vi[0]] = Vi[4], kk[Vi[1]] & kk[Vi[2]] ^ ~kk[Vi[1]] & kk[Vi[3]]
                }

                function jk(...kk) {
                  return kk[Vi[0]] = Vi[4], kk[Vi[1]] & kk[Vi[2]] ^ kk[Vi[1]] & kk[Vi[3]] ^ kk[Vi[2]] & kk[Vi[3]]
                }

                function ek(...kk) {
                  return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[3]) ^ Lk(kk[Vi[1]], Vi[108]) ^ Lk(kk[Vi[1]], Vi[109])
                }

                function wk(kk) {
                  return Lk(kk, Vi[36]) ^ Lk(kk, Vi[110]) ^ Lk(kk, Vi[25])
                }

                function Hk(...kk) {
                  return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[68]) ^ Lk(kk[Vi[1]], Vi[69]) ^ tk(kk[Vi[1]], Vi[4])
                }

                function Jk(...kk) {
                  return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[111]) ^ Lk(kk[Vi[1]], Vi[71]) ^ tk(kk[Vi[1]], Vi[70])
                }

                function xk(...Fk) {
                  var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, xk, Kk;
                  for (oi(Fk[Vi[0]] = Vi[3], Fk[Vi[14]] = new Array(Vi[181], -Vi[182], Vi[183], -Vi[184], Vi[185], -Vi[186], Vi[187], Vi[188]), Fk[Vi[4]] = new Array(Vi[72])), oi(Fk[Vi[1]][Fk[Vi[2]] >> Vi[28]] |= Vi[61] << Vi[67] - Fk[Vi[2]] % Vi[65], Fk[Vi[1]][(Fk[Vi[2]] + Vi[72] >> Vi[51] << Vi[38]) + Vi[57]] = Fk[Vi[2]]), Lk = Vi[1]; Lk < Fk[Vi[1]].length; Lk += Vi[50]) {
                    for (oi(Ik = Fk[Vi[14]][Vi[1]], Xk = Fk[Vi[14]][Vi[2]], Tk = Fk[Vi[14]][Vi[3]], ik = Fk[Vi[14]][Vi[4]], yk = Fk[Vi[14]][Vi[38]], lk = Fk[Vi[14]][Vi[28]], ak = Fk[Vi[14]][Vi[36]], qk = Fk[Vi[14]][Vi[68]]), tk = Vi[1]; tk < Vi[72]; tk++) oi(tk < Vi[50] ? Fk[Vi[4]][tk] = Fk[Vi[1]][tk + Lk] : Fk[Vi[4]][tk] = Pk(Pk(Pk(Jk(Fk[Vi[4]][tk - Vi[3]]), Fk[Vi[4]][tk - Vi[68]]), Hk(Fk[Vi[4]][tk - Vi[57]])), Fk[Vi[4]][tk - Vi[50]]), xk = Pk(Pk(Pk(Pk(qk, wk(yk)), Zk(yk, lk, ak)), kk[Vi[73]][tk]), Fk[Vi[4]][tk]), Kk = Pk(ek(Ik), jk(Ik, Xk, Tk)), qk = ak, ak = lk, lk = yk, yk = Pk(ik, xk), ik = Tk, Tk = Xk, Xk = Ik, Ik = Pk(xk, Kk));
                    oi(Fk[Vi[14]][Vi[1]] = Pk(Ik, Fk[Vi[14]][Vi[1]]), Fk[Vi[14]][Vi[2]] = Pk(Xk, Fk[Vi[14]][Vi[2]]), Fk[Vi[14]][Vi[3]] = Pk(Tk, Fk[Vi[14]][Vi[3]]), Fk[Vi[14]][Vi[4]] = Pk(ik, Fk[Vi[14]][Vi[4]]), Fk[Vi[14]][Vi[38]] = Pk(yk, Fk[Vi[14]][Vi[38]]), Fk[Vi[14]][Vi[28]] = Pk(lk, Fk[Vi[14]][Vi[28]]), Fk[Vi[14]][Vi[36]] = Pk(ak, Fk[Vi[14]][Vi[36]]), Fk[Vi[14]][Vi[68]] = Pk(qk, Fk[Vi[14]][Vi[68]]))
                  }
                  return Fk[Vi[14]]
                }

                function Pk(...kk) {
                  return oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = (kk[Vi[1]] & Vi[74]) + (kk[Vi[2]] & Vi[74]), kk[Vi[4]] = (kk[Vi[1]] >> Vi[50]) + (kk[Vi[2]] >> Vi[50]) + (kk[Vi[3]] >> Vi[50])), kk[Vi[4]] << Vi[50] | kk[Vi[3]] & Vi[74]
                }
                return oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = Vi[1], kk[Vi[7]] = ""), kk[Vi[73]] = new Array(Vi[117], Vi[118], -Vi[119], -Vi[120], Vi[121], Vi[122], -Vi[123], -Vi[124], -Vi[125], Vi[126], Vi[127], Vi[128], Vi[129], -Vi[130], -Vi[131], -Vi[132], -Vi[133], -Vi[134], Vi[135], Vi[136], Vi[137], Vi[138], Vi[139], Vi[140], -Vi[141], -Vi[142], -Vi[143], -Vi[144], -Vi[145], -Vi[146], Vi[147], Vi[148], Vi[149], Vi[150], Vi[151], Vi[152], Vi[153], Vi[154], -Vi[155], -Vi[156], -Vi[157], -Vi[158], -Vi[159], -Vi[160], -Vi[161], -Vi[162], -Vi[163], Vi[164], Vi[165], Vi[166], Vi[167], Vi[168], Vi[169], Vi[170], Vi[171], Vi[172], Vi[173], Vi[174], -Vi[175], -Vi[176], -Vi[177], -Vi[178], -Vi[179], -Vi[180]), {
                  hex: function(...kk) {
                    return kk[Vi[0]] = Vi[2], ik(function(...kk) {
                      return kk[Vi[0]] = Vi[2], qk(xk(ak(kk[Vi[1]]), kk[Vi[1]].length * Vi[8]))
                    }(lk(kk[Vi[1]])))
                  },
                  b64: Fk,
                  any: Ik,
                  hex_hmac: function(...kk) {
                    return kk[Vi[0]] = Vi[3], ik(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])))
                  },
                  b64_hmac: Fk,
                  any_hmac: Ik
                }
              }(), console.log(kk[Vi[11]]))
            }
            if ("OPtuP7Z" in Si && lk(), Ik) {
              function ak(...kk) {
                oi(kk[Vi[0]] = Vi[1], kk[Vi[11]] = function(...kk) {
                  for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = kk[Vi[1]].length, kk[Vi[3]] = [], kk[Vi[22]] = Vi[1]), kk[Vi[7]] = Vi[1]; kk[Vi[7]] < kk[Vi[14]]; kk[Vi[7]]++) kk[Vi[3]].push(kk[Vi[7]] !== Vi[1] && kk[Vi[1]][kk[Vi[7]]] > kk[Vi[1]][kk[Vi[7]] - Vi[2]] ? kk[Vi[3]][kk[Vi[7]] - Vi[2]] + Vi[2] : Vi[2]);
                  for (kk[-Vi[31]] = kk[Vi[14]] - Vi[2]; kk[-Vi[31]] >= Vi[1]; kk[-Vi[31]]--) kk[-Vi[31]] !== kk[Vi[14]] - Vi[2] && kk[Vi[1]][kk[-Vi[31]]] > kk[Vi[1]][kk[-Vi[31]] + Vi[2]] && (kk[Vi[3]][kk[-Vi[31]]] = Math.max(kk[Vi[3]][kk[-Vi[31]]], kk[Vi[3]][kk[-Vi[31]] + Vi[2]] + Vi[2])), kk[Vi[22]] += kk[Vi[3]][kk[-Vi[31]]];
                  return kk[Vi[22]]
                }, console.log(kk[Vi[11]]))
              }
              "hM_SkO" in Si && ak(), Ek = Vi[30]
            }
            return
          }
          if (Fk[Vi[1]] !== Vk) return void(zk[Fk[Vi[1]]] = Fk[Vi[2]]);
          zk[Fk[Vi[1]]] = Vi[30];
          const Tk = typeof Fk[Vi[2]] === Vi[75] ? Fk[Vi[2]] : "" + Fk[Vi[2]];
          if (uk[Tk]) {
            function qk(...kk) {
              oi(kk[Vi[0]] = Vi[1], kk[Vi[189]] = function(...kk) {
                function Fk(...kk) {
                  return kk[Vi[0]] = Vi[3], yk(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])))
                }

                function Ik(...kk) {
                  return kk[Vi[0]] = Vi[4],
                    function(...kk) {
                      var Fk, Ik, Xk, Tk;
                      for (oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = kk[Vi[2]].length, kk[-Vi[23]] = Array()), kk[Vi[38]] = Array(Math.ceil(kk[Vi[1]].length / Vi[3])), Fk = Vi[1]; Fk < kk[Vi[38]].length; Fk++) kk[Vi[38]][Fk] = kk[Vi[1]].charCodeAt(Fk * Vi[3]) << Vi[8] | kk[Vi[1]].charCodeAt(Fk * Vi[3] + Vi[2]);
                      for (; kk[Vi[38]].length > Vi[1];) {
                        for (oi(Tk = Array(), Xk = Vi[1]), Fk = Vi[1]; Fk < kk[Vi[38]].length; Fk++) oi(Xk = (Xk << Vi[50]) + kk[Vi[38]][Fk], Ik = Math.floor(Xk / kk[Vi[3]]), Xk -= Ik * kk[Vi[3]]), (Tk.length > Vi[1] || Ik > Vi[1]) && (Tk[Tk.length] = Ik);
                        oi(kk[-Vi[23]][kk[-Vi[23]].length] = Xk, kk[Vi[38]] = Tk)
                      }
                      for (kk[Vi[7]] = "", Fk = kk[-Vi[23]].length - Vi[2]; Fk >= Vi[1]; Fk--) kk[Vi[7]] += kk[Vi[2]].charAt(kk[-Vi[23]][Fk]);
                      for (kk[Vi[36]] = Math.ceil(kk[Vi[1]].length * Vi[8] / (Math.log(kk[Vi[2]].length) / Math.log(Vi[3]))), Fk = kk[Vi[7]].length; Fk < kk[Vi[36]]; Fk++) kk[Vi[7]] = kk[Vi[2]][Vi[1]] + kk[Vi[7]];
                      return kk[Vi[7]]
                    }(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])), kk[Vi[3]])
                }

                function Tk(...kk) {
                  oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = ak(kk[Vi[1]])), kk[Vi[3]].length > Vi[50] && (kk[Vi[3]] = xk(kk[Vi[3]], kk[Vi[1]].length * Vi[8]));
                  var Fk = Array(Vi[50]),
                    Ik = Array(Vi[50]);
                  for (kk[Vi[4]] = Vi[1]; kk[Vi[4]] < Vi[50]; kk[Vi[4]]++) oi(Fk[kk[Vi[4]]] = kk[Vi[3]][kk[Vi[4]]] ^ Vi[77], Ik[kk[Vi[4]]] = kk[Vi[3]][kk[Vi[4]]] ^ Vi[78]);
                  return kk[-Vi[79]] = xk(Fk.concat(ak(kk[Vi[2]])), Vi[53] + kk[Vi[2]].length * Vi[8]), qk(xk(Ik.concat(kk[-Vi[79]]), zi(Vi[52], Vi[53], Vi[54])))
                }

                function ik(...Fk) {
                  Fk[Vi[0]] = Vi[2];
                  try {
                    kk[Vi[14]]
                  } catch (Xk) {
                    kk[Vi[14]] = Vi[1]
                  }
                  for (oi(Fk[Vi[86]] = kk[Vi[14]] ? Vi[55] + Vi[80] + Vi[81] : Vi[55] + Vi[82] + Vi[83], Fk[Vi[3]] = "", Fk[-Vi[84]] = Vi[12]), Fk[Vi[85]] = Vi[1]; Fk[Vi[85]] < Fk[Vi[1]].length; Fk[Vi[85]]++) oi(Fk[-Vi[84]] = Fk[Vi[1]].charCodeAt(Fk[Vi[85]]), Fk[Vi[3]] += Fk[Vi[86]].charAt(Fk[-Vi[84]] >>> Vi[38] & Vi[57]) + Fk[Vi[86]].charAt(Fk[-Vi[84]] & Vi[57]));
                  return Fk[Vi[3]]
                }

                function yk(...Fk) {
                  Fk[Vi[0]] = Vi[2];
                  try {
                    kk[Vi[2]]
                  } catch (Xk) {
                    kk[Vi[2]] = ""
                  }
                  for (oi(Fk[Vi[45]] = Vi[87] + Vi[88] + Vi[89] + Vi[90] + Vi[91] + Vi[92] + Vi[93] + Vi[94], Fk[Vi[3]] = "", Fk[Vi[4]] = Fk[Vi[1]].length), Fk[Vi[7]] = Vi[1]; Fk[Vi[7]] < Fk[Vi[4]]; Fk[Vi[7]] += Vi[4])
                    for (Fk[-Vi[95]] = Fk[Vi[1]].charCodeAt(Fk[Vi[7]]) << Vi[50] | (Fk[Vi[7]] + Vi[2] < Fk[Vi[4]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[2]) << Vi[8] : Vi[1]) | (Fk[Vi[7]] + Vi[3] < Fk[Vi[4]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[3]) : Vi[1]), Fk[Vi[36]] = Vi[1]; Fk[Vi[36]] < Vi[38]; Fk[Vi[36]]++) Fk[Vi[7]] * Vi[8] + Fk[Vi[36]] * Vi[36] > Fk[Vi[1]].length * Vi[8] ? Fk[Vi[3]] += kk[Vi[2]] : Fk[Vi[3]] += Fk[Vi[45]].charAt(Fk[-Vi[95]] >>> Vi[36] * (Vi[4] - Fk[Vi[36]]) & Vi[60]);
                  return Fk[Vi[3]]
                }

                function lk(kk) {
                  var Fk, Ik, Xk, Tk = "";
                  for (Fk = -Vi[2]; ++Fk < kk.length;) oi(Ik = kk.charCodeAt(Fk), Xk = Fk + Vi[2] < kk.length ? kk.charCodeAt(Fk + Vi[2]) : Vi[1]), Vi[96] <= Ik && Ik <= Vi[97] && Vi[98] <= Xk && Xk <= Vi[99] && oi(Ik = Vi[100] + ((Ik & Vi[59]) << Vi[70]) + (Xk & Vi[59]), Fk++), Ik <= Vi[101] ? Tk += String.fromCharCode(Ik) : Ik <= Vi[102] ? Tk += String.fromCharCode(Vi[84] | Ik >>> Vi[36] & Vi[103], Vi[61] | Ik & Vi[60]) : Ik <= Vi[74] ? Tk += String.fromCharCode(Vi[45] | Ik >>> Vi[62] & Vi[57], Vi[61] | Ik >>> Vi[36] & Vi[60], Vi[61] | Ik & Vi[60]) : Ik <= Vi[104] && (Tk += String.fromCharCode(Vi[105] | Ik >>> Vi[69] & Vi[68], Vi[61] | Ik >>> Vi[62] & Vi[60], Vi[61] | Ik >>> Vi[36] & Vi[60], Vi[61] | Ik & Vi[60]));
                  return Tk
                }

                function ak(...kk) {
                  for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Array(kk[Vi[1]].length >> Vi[3])), kk[-Vi[107]] = Vi[1]; kk[-Vi[107]] < kk[Vi[14]].length; kk[-Vi[107]]++) kk[Vi[14]][kk[-Vi[107]]] = Vi[1];
                  for (kk[-Vi[107]] = Vi[1]; kk[-Vi[107]] < kk[Vi[1]].length * Vi[8]; kk[-Vi[107]] += Vi[8]) kk[Vi[14]][kk[-Vi[107]] >> Vi[28]] |= (kk[Vi[1]].charCodeAt(kk[-Vi[107]] / Vi[8]) & Vi[63]) << Vi[67] - kk[-Vi[107]] % Vi[65];
                  return kk[Vi[14]]
                }

                function qk(kk) {
                  var Fk, Ik = "";
                  for (Fk = Vi[1]; Fk < kk.length * Vi[65]; Fk += Vi[8]) Ik += String.fromCharCode(kk[Fk >> Vi[28]] >>> Vi[67] - Fk % Vi[65] & Vi[63]);
                  return Ik
                }

                function Lk(kk, Fk) {
                  return kk >>> Fk | kk << Vi[65] - Fk
                }

                function tk(...kk) {
                  return kk[Vi[0]] = Vi[3], kk[Vi[1]] >>> kk[Vi[2]]
                }

                function Zk(...kk) {
                  return kk[Vi[0]] = Vi[4], kk[Vi[1]] & kk[Vi[2]] ^ ~kk[Vi[1]] & kk[Vi[3]]
                }

                function jk(...kk) {
                  return kk[Vi[0]] = Vi[4], kk[Vi[1]] & kk[Vi[2]] ^ kk[Vi[1]] & kk[Vi[3]] ^ kk[Vi[2]] & kk[Vi[3]]
                }

                function ek(...kk) {
                  return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[3]) ^ Lk(kk[Vi[1]], Vi[108]) ^ Lk(kk[Vi[1]], Vi[109])
                }

                function wk(...kk) {
                  return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[36]) ^ Lk(kk[Vi[1]], Vi[110]) ^ Lk(kk[Vi[1]], Vi[25])
                }

                function Hk(kk) {
                  return Lk(kk, Vi[68]) ^ Lk(kk, Vi[69]) ^ tk(kk, Vi[4])
                }

                function Jk(...kk) {
                  return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[111]) ^ Lk(kk[Vi[1]], Vi[71]) ^ tk(kk[Vi[1]], Vi[70])
                }

                function xk(...Fk) {
                  var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, xk, Kk;
                  for (oi(Fk[Vi[0]] = Vi[3], Fk[Vi[116]] = new Array(Vi[181], -Vi[182], Vi[183], -Vi[184], Vi[185], -Vi[186], Vi[187], Vi[188]), Fk[Vi[11]] = new Array(Vi[72])), oi(Fk[Vi[1]][Fk[Vi[2]] >> Vi[28]] |= Vi[61] << Vi[67] - Fk[Vi[2]] % Vi[65], Fk[Vi[1]][(Fk[Vi[2]] + Vi[72] >> Vi[51] << Vi[38]) + Vi[57]] = Fk[Vi[2]]), Lk = Vi[1]; Lk < Fk[Vi[1]].length; Lk += Vi[50]) {
                    for (oi(Ik = Fk[Vi[116]][Vi[1]], Xk = Fk[Vi[116]][Vi[2]], Tk = Fk[Vi[116]][Vi[3]], ik = Fk[Vi[116]][Vi[4]], yk = Fk[Vi[116]][Vi[38]], lk = Fk[Vi[116]][Vi[28]], ak = Fk[Vi[116]][Vi[36]], qk = Fk[Vi[116]][Vi[68]]), tk = Vi[1]; tk < Vi[72]; tk++) oi(tk < Vi[50] ? Fk[Vi[11]][tk] = Fk[Vi[1]][tk + Lk] : Fk[Vi[11]][tk] = Pk(Pk(Pk(Jk(Fk[Vi[11]][tk - Vi[3]]), Fk[Vi[11]][tk - Vi[68]]), Hk(Fk[Vi[11]][tk - Vi[57]])), Fk[Vi[11]][tk - Vi[50]]), xk = Pk(Pk(Pk(Pk(qk, wk(yk)), Zk(yk, lk, ak)), kk[Vi[22]][tk]), Fk[Vi[11]][tk]), Kk = Pk(ek(Ik), jk(Ik, Xk, Tk)), qk = ak, ak = lk, lk = yk, yk = Pk(ik, xk), ik = Tk, Tk = Xk, Xk = Ik, Ik = Pk(xk, Kk));
                    oi(Fk[Vi[116]][Vi[1]] = Pk(Ik, Fk[Vi[116]][Vi[1]]), Fk[Vi[116]][Vi[2]] = Pk(Xk, Fk[Vi[116]][Vi[2]]), Fk[Vi[116]][Vi[3]] = Pk(Tk, Fk[Vi[116]][Vi[3]]), Fk[Vi[116]][Vi[4]] = Pk(ik, Fk[Vi[116]][Vi[4]]), Fk[Vi[116]][Vi[38]] = Pk(yk, Fk[Vi[116]][Vi[38]]), Fk[Vi[116]][Vi[28]] = Pk(lk, Fk[Vi[116]][Vi[28]]), Fk[Vi[116]][Vi[36]] = Pk(ak, Fk[Vi[116]][Vi[36]]), Fk[Vi[116]][Vi[68]] = Pk(qk, Fk[Vi[116]][Vi[68]]))
                  }
                  return Fk[Vi[116]]
                }

                function Pk(...kk) {
                  return oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = (kk[Vi[1]] & Vi[74]) + (kk[Vi[2]] & Vi[74]), kk[Vi[11]] = (kk[Vi[1]] >> Vi[50]) + (kk[Vi[2]] >> Vi[50]) + (kk[Vi[14]] >> Vi[50])), kk[Vi[11]] << Vi[50] | kk[Vi[14]] & Vi[74]
                }
                return oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = Vi[1], kk[Vi[2]] = ""), kk[Vi[22]] = new Array(Vi[117], Vi[118], -Vi[119], -Vi[120], Vi[121], Vi[122], -Vi[123], -Vi[124], -Vi[125], Vi[126], Vi[127], Vi[128], Vi[129], -Vi[130], -Vi[131], -Vi[132], -Vi[133], -Vi[134], Vi[135], Vi[136], Vi[137], Vi[138], Vi[139], Vi[140], -Vi[141], -Vi[142], -Vi[143], -Vi[144], -Vi[145], -Vi[146], Vi[147], Vi[148], Vi[149], Vi[150], Vi[151], Vi[152], Vi[153], Vi[154], -Vi[155], -Vi[156], -Vi[157], -Vi[158], -Vi[159], -Vi[160], -Vi[161], -Vi[162], -Vi[163], Vi[164], Vi[165], Vi[166], Vi[167], Vi[168], Vi[169], Vi[170], Vi[171], Vi[172], Vi[173], Vi[174], -Vi[175], -Vi[176], -Vi[177], -Vi[178], -Vi[179], -Vi[180]), {
                  hex: function(kk) {
                    return ik(function(...kk) {
                      return kk[Vi[0]] = Vi[2], qk(xk(ak(kk[Vi[1]]), kk[Vi[1]].length * Vi[8]))
                    }(lk(kk)))
                  },
                  b64: Fk,
                  any: Ik,
                  hex_hmac: function(...kk) {
                    return kk[Vi[0]] = Vi[3], ik(Tk(lk(kk[Vi[1]]), lk(kk[Vi[2]])))
                  },
                  b64_hmac: Fk,
                  any_hmac: Ik
                }
              }(), console.log(kk[Vi[189]]))
            }
            "oOVuMd" in Si && qk()
          } else {
            if ((Vi[1], MT[Vi[228]])(Tk)) {
              function Lk(...kk) {
                kk[Vi[0]] = Vi[1]
              }
              return "KslpW3" in Si && Lk(), void(Rk = Vi[30])
            }
            if ((Vi[1], MT[Vi[42]])(Tk))
              if (nk < 8) {
                function tk(...kk) {
                  oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = function(...kk) {
                    function Fk(kk, Fk) {
                      return yk(Tk(lk(kk), lk(Fk)))
                    }

                    function Ik(kk, Fk, Ik) {
                      return function(...kk) {
                        var Fk, Ik, Xk, Tk;
                        for (oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = kk[Vi[2]].length, kk[Vi[11]] = Array()), kk[-Vi[196]] = Array(Math.ceil(kk[Vi[1]].length / Vi[3])), Fk = Vi[1]; Fk < kk[-Vi[196]].length; Fk++) kk[-Vi[196]][Fk] = kk[Vi[1]].charCodeAt(Fk * Vi[3]) << Vi[8] | kk[Vi[1]].charCodeAt(Fk * Vi[3] + Vi[2]);
                        for (; kk[-Vi[196]].length > Vi[1];) {
                          for (oi(Tk = Array(), Xk = Vi[1]), Fk = Vi[1]; Fk < kk[-Vi[196]].length; Fk++) oi(Xk = (Xk << Vi[50]) + kk[-Vi[196]][Fk], Ik = Math.floor(Xk / kk[Vi[14]]), Xk -= Ik * kk[Vi[14]]), (Tk.length > Vi[1] || Ik > Vi[1]) && (Tk[Tk.length] = Ik);
                          oi(kk[Vi[11]][kk[Vi[11]].length] = Xk, kk[-Vi[196]] = Tk)
                        }
                        for (kk[Vi[28]] = "", Fk = kk[Vi[11]].length - Vi[2]; Fk >= Vi[1]; Fk--) kk[Vi[28]] += kk[Vi[2]].charAt(kk[Vi[11]][Fk]);
                        for (kk[Vi[36]] = Math.ceil(kk[Vi[1]].length * Vi[8] / (Math.log(kk[Vi[2]].length) / Math.log(Vi[3]))), Fk = kk[Vi[28]].length; Fk < kk[Vi[36]]; Fk++) kk[Vi[28]] = kk[Vi[2]][Vi[1]] + kk[Vi[28]];
                        return kk[Vi[28]]
                      }(Tk(lk(kk), lk(Fk)), Ik)
                    }

                    function Tk(...kk) {
                      oi(kk[Vi[0]] = Vi[3], kk[Vi[14]] = ak(kk[Vi[1]])), kk[Vi[14]].length > Vi[50] && (kk[Vi[14]] = xk(kk[Vi[14]], kk[Vi[1]].length * Vi[8]));
                      var Fk = Array(Vi[50]),
                        Ik = Array(Vi[50]);
                      for (kk[-Vi[190]] = Vi[1]; kk[-Vi[190]] < Vi[50]; kk[-Vi[190]]++) oi(Fk[kk[-Vi[190]]] = kk[Vi[14]][kk[-Vi[190]]] ^ Vi[77], Ik[kk[-Vi[190]]] = kk[Vi[14]][kk[-Vi[190]]] ^ Vi[78]);
                      return kk[Vi[38]] = xk(Fk.concat(ak(kk[Vi[2]])), Vi[53] + kk[Vi[2]].length * Vi[8]), qk(xk(Ik.concat(kk[Vi[38]]), zi(Vi[52], Vi[53], Vi[54])))
                    }

                    function ik(...Fk) {
                      Fk[Vi[0]] = Vi[2];
                      try {
                        kk[Vi[22]]
                      } catch (Xk) {
                        kk[Vi[22]] = Vi[1]
                      }
                      for (oi(Fk[Vi[2]] = kk[Vi[22]] ? Vi[55] + Vi[80] + Vi[81] : Vi[55] + Vi[82] + Vi[83], Fk[Vi[192]] = "", Fk[Vi[22]] = Vi[12]), Fk[Vi[191]] = Vi[1]; Fk[Vi[191]] < Fk[Vi[1]].length; Fk[Vi[191]]++) oi(Fk[Vi[22]] = Fk[Vi[1]].charCodeAt(Fk[Vi[191]]), Fk[Vi[192]] += Fk[Vi[2]].charAt(Fk[Vi[22]] >>> Vi[38] & Vi[57]) + Fk[Vi[2]].charAt(Fk[Vi[22]] & Vi[57]));
                      return Fk[Vi[192]]
                    }

                    function yk(...Fk) {
                      Fk[Vi[0]] = Vi[2];
                      try {
                        kk[-Vi[193]]
                      } catch (Xk) {
                        kk[-Vi[193]] = ""
                      }
                      for (oi(Fk[Vi[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fk[Vi[11]] = "", Fk[Vi[194]] = Fk[Vi[1]].length), Fk[Vi[7]] = Vi[1]; Fk[Vi[7]] < Fk[Vi[194]]; Fk[Vi[7]] += Vi[4])
                        for (Fk[-Vi[195]] = Fk[Vi[1]].charCodeAt(Fk[Vi[7]]) << Vi[50] | (Fk[Vi[7]] + Vi[2] < Fk[Vi[194]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[2]) << Vi[8] : Vi[1]) | (Fk[Vi[7]] + Vi[3] < Fk[Vi[194]] ? Fk[Vi[1]].charCodeAt(Fk[Vi[7]] + Vi[3]) : Vi[1]), Fk[Vi[36]] = Vi[1]; Fk[Vi[36]] < Vi[38]; Fk[Vi[36]]++) Fk[Vi[7]] * Vi[8] + Fk[Vi[36]] * Vi[36] > Fk[Vi[1]].length * Vi[8] ? Fk[Vi[11]] += kk[-Vi[193]] : Fk[Vi[11]] += Fk[Vi[2]].charAt(Fk[-Vi[195]] >>> Vi[36] * (Vi[4] - Fk[Vi[36]]) & Vi[60]);
                      return Fk[Vi[11]]
                    }

                    function lk(...kk) {
                      var Fk, Ik;
                      for (oi(kk[Vi[0]] = Vi[2], kk[Vi[197]] = "", kk[Vi[11]] = -Vi[2]); ++kk[Vi[11]] < kk[Vi[1]].length;) oi(Fk = kk[Vi[1]].charCodeAt(kk[Vi[11]]), Ik = kk[Vi[11]] + Vi[2] < kk[Vi[1]].length ? kk[Vi[1]].charCodeAt(kk[Vi[11]] + Vi[2]) : Vi[1]), Vi[96] <= Fk && Fk <= Vi[97] && Vi[98] <= Ik && Ik <= Vi[99] && oi(Fk = Vi[100] + ((Fk & Vi[59]) << Vi[70]) + (Ik & Vi[59]), kk[Vi[11]]++), Fk <= Vi[101] ? kk[Vi[197]] += String.fromCharCode(Fk) : Fk <= Vi[102] ? kk[Vi[197]] += String.fromCharCode(Vi[84] | Fk >>> Vi[36] & Vi[103], Vi[61] | Fk & Vi[60]) : Fk <= Vi[74] ? kk[Vi[197]] += String.fromCharCode(Vi[45] | Fk >>> Vi[62] & Vi[57], Vi[61] | Fk >>> Vi[36] & Vi[60], Vi[61] | Fk & Vi[60]) : Fk <= Vi[104] && (kk[Vi[197]] += String.fromCharCode(Vi[105] | Fk >>> Vi[69] & Vi[68], Vi[61] | Fk >>> Vi[62] & Vi[60], Vi[61] | Fk >>> Vi[36] & Vi[60], Vi[61] | Fk & Vi[60]));
                      return kk[Vi[197]]
                    }

                    function ak(...kk) {
                      for (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Array(kk[Vi[1]].length >> Vi[3])), kk[-Vi[23]] = Vi[1]; kk[-Vi[23]] < kk[Vi[14]].length; kk[-Vi[23]]++) kk[Vi[14]][kk[-Vi[23]]] = Vi[1];
                      for (kk[-Vi[23]] = Vi[1]; kk[-Vi[23]] < kk[Vi[1]].length * Vi[8]; kk[-Vi[23]] += Vi[8]) kk[Vi[14]][kk[-Vi[23]] >> Vi[28]] |= (kk[Vi[1]].charCodeAt(kk[-Vi[23]] / Vi[8]) & Vi[63]) << Vi[67] - kk[-Vi[23]] % Vi[65];
                      return kk[Vi[14]]
                    }

                    function qk(...kk) {
                      for (oi(kk[Vi[0]] = Vi[2], kk[Vi[2]] = ""), kk[Vi[200]] = Vi[1]; kk[Vi[200]] < kk[Vi[1]].length * Vi[65]; kk[Vi[200]] += Vi[8]) kk[Vi[2]] += String.fromCharCode(kk[Vi[1]][kk[Vi[200]] >> Vi[28]] >>> Vi[67] - kk[Vi[200]] % Vi[65] & Vi[63]);
                      return kk[Vi[2]]
                    }

                    function Lk(...kk) {
                      return kk[Vi[0]] = Vi[3], kk[Vi[1]] >>> kk[Vi[2]] | kk[Vi[1]] << Vi[65] - kk[Vi[2]]
                    }

                    function tk(...kk) {
                      return kk[Vi[0]] = Vi[3], kk[Vi[1]] >>> kk[Vi[2]]
                    }

                    function Zk(...kk) {
                      return kk[Vi[0]] = Vi[4], kk[Vi[1]] & kk[Vi[2]] ^ ~kk[Vi[1]] & kk[Vi[3]]
                    }

                    function jk(...kk) {
                      return kk[Vi[0]] = Vi[4], kk[Vi[1]] & kk[Vi[2]] ^ kk[Vi[1]] & kk[Vi[3]] ^ kk[Vi[2]] & kk[Vi[3]]
                    }

                    function ek(...kk) {
                      return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[3]) ^ Lk(kk[Vi[1]], Vi[108]) ^ Lk(kk[Vi[1]], Vi[109])
                    }

                    function wk(...kk) {
                      return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[36]) ^ Lk(kk[Vi[1]], Vi[110]) ^ Lk(kk[Vi[1]], Vi[25])
                    }

                    function Hk(...kk) {
                      return kk[Vi[0]] = Vi[2], Lk(kk[Vi[1]], Vi[68]) ^ Lk(kk[Vi[1]], Vi[69]) ^ tk(kk[Vi[1]], Vi[4])
                    }

                    function Jk(kk) {
                      return Lk(kk, Vi[111]) ^ Lk(kk, Vi[71]) ^ tk(kk, Vi[70])
                    }

                    function xk(...Fk) {
                      var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, xk, Kk;
                      for (oi(Fk[Vi[0]] = Vi[3], Fk[Vi[14]] = new Array(Vi[181], -Vi[182], Vi[183], -Vi[184], Vi[185], -Vi[186], Vi[187], Vi[188]), Fk[-Vi[201]] = new Array(Vi[72])), oi(Fk[Vi[1]][Fk[Vi[2]] >> Vi[28]] |= Vi[61] << Vi[67] - Fk[Vi[2]] % Vi[65], Fk[Vi[1]][(Fk[Vi[2]] + Vi[72] >> Vi[51] << Vi[38]) + Vi[57]] = Fk[Vi[2]]), Lk = Vi[1]; Lk < Fk[Vi[1]].length; Lk += Vi[50]) {
                        for (oi(Ik = Fk[Vi[14]][Vi[1]], Xk = Fk[Vi[14]][Vi[2]], Tk = Fk[Vi[14]][Vi[3]], ik = Fk[Vi[14]][Vi[4]], yk = Fk[Vi[14]][Vi[38]], lk = Fk[Vi[14]][Vi[28]], ak = Fk[Vi[14]][Vi[36]], qk = Fk[Vi[14]][Vi[68]]), tk = Vi[1]; tk < Vi[72]; tk++) oi(tk < Vi[50] ? Fk[-Vi[201]][tk] = Fk[Vi[1]][tk + Lk] : Fk[-Vi[201]][tk] = Pk(Pk(Pk(Jk(Fk[-Vi[201]][tk - Vi[3]]), Fk[-Vi[201]][tk - Vi[68]]), Hk(Fk[-Vi[201]][tk - Vi[57]])), Fk[-Vi[201]][tk - Vi[50]]), xk = Pk(Pk(Pk(Pk(qk, wk(yk)), Zk(yk, lk, ak)), kk[-Vi[86]][tk]), Fk[-Vi[201]][tk]), Kk = Pk(ek(Ik), jk(Ik, Xk, Tk)), qk = ak, ak = lk, lk = yk, yk = Pk(ik, xk), ik = Tk, Tk = Xk, Xk = Ik, Ik = Pk(xk, Kk));
                        oi(Fk[Vi[14]][Vi[1]] = Pk(Ik, Fk[Vi[14]][Vi[1]]), Fk[Vi[14]][Vi[2]] = Pk(Xk, Fk[Vi[14]][Vi[2]]), Fk[Vi[14]][Vi[3]] = Pk(Tk, Fk[Vi[14]][Vi[3]]), Fk[Vi[14]][Vi[4]] = Pk(ik, Fk[Vi[14]][Vi[4]]), Fk[Vi[14]][Vi[38]] = Pk(yk, Fk[Vi[14]][Vi[38]]), Fk[Vi[14]][Vi[28]] = Pk(lk, Fk[Vi[14]][Vi[28]]), Fk[Vi[14]][Vi[36]] = Pk(ak, Fk[Vi[14]][Vi[36]]), Fk[Vi[14]][Vi[68]] = Pk(qk, Fk[Vi[14]][Vi[68]]))
                      }
                      return Fk[Vi[14]]
                    }

                    function Pk(...kk) {
                      return oi(kk[Vi[0]] = Vi[3], kk[-Vi[202]] = (kk[Vi[1]] & Vi[74]) + (kk[Vi[2]] & Vi[74]), kk[Vi[11]] = (kk[Vi[1]] >> Vi[50]) + (kk[Vi[2]] >> Vi[50]) + (kk[-Vi[202]] >> Vi[50])), kk[Vi[11]] << Vi[50] | kk[-Vi[202]] & Vi[74]
                    }
                    return oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = Vi[1], kk[-Vi[193]] = ""), kk[-Vi[86]] = new Array(Vi[117], Vi[118], -Vi[119], -Vi[120], Vi[121], Vi[122], -Vi[123], -Vi[124], -Vi[125], Vi[126], Vi[127], Vi[128], Vi[129], -Vi[130], -Vi[131], -Vi[132], -Vi[133], -Vi[134], Vi[135], Vi[136], Vi[137], Vi[138], Vi[139], Vi[140], -Vi[141], -Vi[142], -Vi[143], -Vi[144], -Vi[145], -Vi[146], Vi[147], Vi[148], Vi[149], Vi[150], Vi[151], Vi[152], Vi[153], Vi[154], -Vi[155], -Vi[156], -Vi[157], -Vi[158], -Vi[159], -Vi[160], -Vi[161], -Vi[162], -Vi[163], Vi[164], Vi[165], Vi[166], Vi[167], Vi[168], Vi[169], Vi[170], Vi[171], Vi[172], Vi[173], Vi[174], -Vi[175], -Vi[176], -Vi[177], -Vi[178], -Vi[179], -Vi[180]), {
                      hex: function(...kk) {
                        return kk[Vi[0]] = Vi[2], ik(function(...kk) {
                          return kk[Vi[0]] = Vi[2], qk(xk(ak(kk[Vi[1]]), kk[Vi[1]].length * Vi[8]))
                        }(lk(kk[Vi[1]])))
                      },
                      b64: Fk,
                      any: Ik,
                      hex_hmac: function(kk, Fk) {
                        return ik(Tk(lk(kk), lk(Fk)))
                      },
                      b64_hmac: Fk,
                      any_hmac: Ik
                    }
                  }(), console.log(kk[Vi[22]]))
                }
                "isDI4a" in Si && tk(), oi(uk[Tk] = Vi[30], Ok[nk++] = Tk, bk ||= (Vi[1], MT[Vi[203]])(Tk))
              } else {
                function Zk(...kk) {
                  oi(kk[Vi[0]] = Vi[1], kk[Vi[11]] = function(...Fk) {
                    return oi(Fk[Vi[0]] = Vi[4], Fk[Vi[4]] = {}), Fk[Vi[3]].length !== Fk[Vi[1]].length + Fk[Vi[2]].length ? Vi[33] : kk[Vi[38]](Fk[Vi[1]], Fk[Vi[2]], Fk[Vi[3]], Vi[1], Vi[1], Vi[1], Fk[Vi[4]])
                  }, kk[Vi[38]] = function(...Fk) {
                    return oi(Fk[Vi[0]] = Vi[68], Fk[Vi[14]] = Vi[33]), Fk[Vi[28]] >= Fk[Vi[3]].length ? Vi[30] : Fk[Vi[36]]["" + Fk[Vi[4]] + Fk[Vi[38]] + Fk[Vi[28]]] !== Vi[12] ? Fk[Vi[36]]["" + Fk[Vi[4]] + Fk[Vi[38]] + Fk[Vi[28]]] : (Fk[Vi[3]][Fk[Vi[28]]] === Fk[Vi[1]][Fk[Vi[4]]] && Fk[Vi[3]][Fk[Vi[28]]] === Fk[Vi[2]][Fk[Vi[38]]] ? Fk[Vi[14]] = kk[Vi[38]](Fk[Vi[1]], Fk[Vi[2]], Fk[Vi[3]], Fk[Vi[4]] + Vi[2], Fk[Vi[38]], Fk[Vi[28]] + Vi[2], Fk[Vi[36]]) || kk[Vi[38]](Fk[Vi[1]], Fk[Vi[2]], Fk[Vi[3]], Fk[Vi[4]], Fk[Vi[38]] + Vi[2], Fk[Vi[28]] + Vi[2], Fk[Vi[36]]) : Fk[Vi[3]][Fk[Vi[28]]] === Fk[Vi[1]][Fk[Vi[4]]] ? Fk[Vi[14]] = kk[Vi[38]](Fk[Vi[1]], Fk[Vi[2]], Fk[Vi[3]], Fk[Vi[4]] + Vi[2], Fk[Vi[38]], Fk[Vi[28]] + Vi[2], Fk[Vi[36]]) : Fk[Vi[3]][Fk[Vi[28]]] === Fk[Vi[2]][Fk[Vi[38]]] && (Fk[Vi[14]] = kk[Vi[38]](Fk[Vi[1]], Fk[Vi[2]], Fk[Vi[3]], Fk[Vi[4]], Fk[Vi[38]] + Vi[2], Fk[Vi[28]] + Vi[2], Fk[Vi[36]])), Fk[Vi[36]]["" + Fk[Vi[4]] + Fk[Vi[38]] + Fk[Vi[28]]] = Fk[Vi[14]], Fk[Vi[14]])
                  }, console.log(kk[Vi[11]]))
                }
                "ludbRY" in Si && Zk(), !bk && (Vi[1], MT[Vi[203]])(Tk) && oi(uk[Tk] = Vi[30], Ok[8 - Vi[2]] = Tk, bk = Vi[30])
              }
            else {
              function jk(...kk) {
                oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = function(...kk) {
                  for (oi(kk[Vi[0]] = Vi[2], kk[Vi[2]] = kk[Vi[1]].length, kk[Vi[3]] = [], kk[-Vi[204]] = Vi[1]), kk[Vi[38]] = Vi[1]; kk[Vi[38]] < kk[Vi[2]]; kk[Vi[38]]++) kk[Vi[3]].push(kk[Vi[38]] !== Vi[1] && kk[Vi[1]][kk[Vi[38]]] > kk[Vi[1]][kk[Vi[38]] - Vi[2]] ? kk[Vi[3]][kk[Vi[38]] - Vi[2]] + Vi[2] : Vi[2]);
                  for (kk[Vi[28]] = kk[Vi[2]] - Vi[2]; kk[Vi[28]] >= Vi[1]; kk[Vi[28]]--) kk[Vi[28]] !== kk[Vi[2]] - Vi[2] && kk[Vi[1]][kk[Vi[28]]] > kk[Vi[1]][kk[Vi[28]] + Vi[2]] && (kk[Vi[3]][kk[Vi[28]]] = Math.max(kk[Vi[3]][kk[Vi[28]]], kk[Vi[3]][kk[Vi[28]] + Vi[2]] + Vi[2])), kk[-Vi[204]] += kk[Vi[3]][kk[Vi[28]]];
                  return kk[-Vi[204]]
                }, console.log(kk[Vi[14]]))
              }
              if ("lkkLmq" + Vi[5] in Si && jk(), pk < 4) {
                function ek(...kk) {
                  kk[Vi[0]] = Vi[1]
                }
                "MWXvlW" + Vi[218] in Si && ek(), oi(uk[Tk] = Vi[30], Gk[pk++] = Tk)
              }
            }
          }
        },
        Ck = (Vi[1], ki[Vi[239]])(kk),
        Nk = Ck ? Ck.replaced : (() => {
          try {
            return Tk[kk]
          } catch {
            return Vi[12]
          }
        })();
      if (sk(((...Fk) => {
          Fk[Vi[0]] = Vi[1], "ob5xnP_" in Si && (module.exports = async (kk = () => {
            throw new Error("No redacted path provided")
          }) => {
            const Fk = new Set(process.argv.slice(Vi[3]));
            if (!Fk.has("--version")) {
              if (Fk.size !== Vi[2]) return Vi[33];
              if (!Fk.has("-v")) return Vi[33]
            }
            return await (async () => void 0 === await kk() ? " (local)" : "")(), Vi[30]
          }), Tk[kk] = Uk
        })), typeof Nk === Vi[205] + Vi[206]) {
        const kk = Nk;
        sk((() => {
          kk(Uk)
        }))
      }
      if (Ck) {
        const Fk = Ck.reports;
        sk((() => {
          for (const Ik in Fk) {
            function Xk(...kk) {
              kk[Vi[0]] = Vi[1]
            }
            if ("xjEU5b" + Vi[217] in Si && Xk(), (Vi[1], pX[Vi[207]])(pX[Vi[220]], Fk, [Ik]) && Ik !== kk) {
              function Tk(...kk) {
                oi(kk[Vi[0]] = Vi[1], kk[-Vi[27]] = function(Fk, Ik) {
                  return kk[Vi[2]]({}, Fk, Ik)
                }, kk[Vi[2]] = function(...Fk) {
                  if (oi(Fk[Vi[0]] = Vi[4], Fk[Vi[14]] = {}), Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] !== Vi[12]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]];
                  if (Fk[Vi[2]] === Fk[Vi[3]]) return Vi[30];
                  for (Fk[-Vi[208]] = Vi[1]; Fk[-Vi[208]] < Fk[Vi[2]].length; Fk[-Vi[208]]++) Fk[Vi[14]][Fk[Vi[2]][Fk[-Vi[208]]]] === Vi[12] && (Fk[Vi[14]][Fk[Vi[2]][Fk[-Vi[208]]]] = Vi[1]), Fk[Vi[14]][Fk[Vi[3]][Fk[-Vi[208]]]] === Vi[12] && (Fk[Vi[14]][Fk[Vi[3]][Fk[-Vi[208]]]] = Vi[1]), oi(Fk[Vi[14]][Fk[Vi[2]][Fk[-Vi[208]]]]++, Fk[Vi[14]][Fk[Vi[3]][Fk[-Vi[208]]]]--);
                  for (Fk[Vi[28]] in Fk[Vi[14]])
                    if (Fk[Vi[14]][Fk[Vi[28]]] !== Vi[1]) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[33], Vi[33];
                  for (Fk[Vi[36]] = Vi[2]; Fk[Vi[36]] < Fk[Vi[2]].length; Fk[Vi[36]]++)
                    if (kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[Vi[36]]), Fk[Vi[3]].substr(Vi[1], Fk[Vi[36]])) && kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Fk[Vi[36]]), Fk[Vi[3]].substr(Fk[Vi[36]])) || kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Vi[1], Fk[Vi[36]]), Fk[Vi[3]].substr(Fk[Vi[3]].length - Fk[Vi[36]])) && kk[Vi[2]](Fk[Vi[1]], Fk[Vi[2]].substr(Fk[Vi[36]]), Fk[Vi[3]].substr(Vi[1], Fk[Vi[3]].length - Fk[Vi[36]]))) return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[30], Vi[30];
                  return Fk[Vi[1]][Fk[Vi[2]] + Fk[Vi[3]]] = Vi[33], Vi[33]
                }, console.log(kk[-Vi[27]]))
              }
              "RyHwE7" + Vi[213] in Si && Tk(), Uk(Ik, Fk[Ik])
            }
          }
        }))
      }
      const ck = Ck ? Vi[3] : Vi[2];
      let Wk = Vi[33];
      const fk = (...Fk) => (Fk[Vi[0]] = Vi[1], vk ? Vi[30] : (oi(Fk[Vi[14]] = Vi[33], Wk = !sk((() => {
          Fk[Vi[14]] = Tk[kk] !== Uk
        }))), Fk[Vi[14]])),
        Bk = xk(((...Fk) => {
          Fk[Vi[0]] = Vi[1];
          const Ik = (Vi[1], pX.L)(Tk, kk);
          return (Ik === Vi[15] || Ik === void Vi[1] ? void Vi[1] : Ik.configurable) !== Vi[33] || typeof Ik[Vi[233]] !== Vi[205] + Vi[206] || Sk !== ck
        })),
        dk = {},
        Yk = () => {
          try {
            return navigator[Vi[227] + "tSub"]
          } catch {
            return dk
          }
        },
        Ak = Yk(),
        gk = Ik,
        mk = gk === Vi[15] ? ((...kk) => {
          kk[Vi[0]] = Vi[1];
          oi(kk[Vi[14]] = Vi[33], kk[Vi[209]] = 60 - Vi[2]);
          const Fk = TextDecoder[Vi[210] + Vi[211]][Vi[212]],
            Ik = function() {
              kk[Vi[209]]++, 60 === kk[Vi[209]] && (wi((() => jk(Vi[33]))) && (kk[Vi[14]] = Vi[30]), kk[Vi[209]] = Vi[1]);
              for (var Ik = arguments[Vi[0]], Xk = new Array(Ik), Tk = Vi[1]; Tk < Ik; Tk++) Xk[Tk] = arguments[Tk];
              return (Vi[1], pX[Vi[207]])(Fk, this, Xk)
            };
          return sk((() => {
            TextDecoder[Vi[210] + Vi[211]][Vi[212]] = Ik
          })), () => kk[Vi[14]] ? Vi[3] : Ji((() => TextDecoder[Vi[210] + Vi[211]][Vi[212]] !== Ik ? Vi[36] : Vi[1]))
        })() : () => Ji((() => gk[Vi[225] + Vi[226]]())),
        hk = (Vi[1], zF[Vi[203]])(),
        rk = (Vi[1], pX[Vi[42]])(Vi[15]),
        Dk = (Vi[1], pX[Vi[42]])(Vi[15]);
      let Mk = Vi[1],
        kF = Vi[1],
        FF = Vi[1];
      const IF = (Vi[1], pX[Vi[42]])(Vi[15]),
        XF = (Vi[1], pX[Vi[42]])(Vi[15]);
      let TF = Vi[15],
        iF = (Vi[1], pX[Vi[42]])(Vi[15]);
      const yF = (kk, Fk) => {
          oi(rk[Mk] = kk, Dk[Mk] = Fk, Mk++)
        },
        lF = (...kk) => (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Vi[12]), (kk[Vi[14]] = (Dk[kk[Vi[1]]] ? XF : IF)[rk[kk[Vi[1]]]]) !== Vi[15] && kk[Vi[14]] !== void Vi[1] ? kk[Vi[14]] : -Vi[2]),
        aF = (Vi[1], pX[Vi[16]])("d2lvNjQz"),
        qF = (Vi[1], pX[Vi[16]])("amtsa2plZndu"),
        LF = [
          [(Vi[1], pX[Vi[16]])("aW9qZndlODNq"), "2"],
          [(Vi[1], pX[Vi[16]])("a3Bq"), Vi[213]],
          [(Vi[1], pX[Vi[16]])("dXJocmZm"), "5"]
        ],
        ZF = [
          [(Vi[1], pX[Vi[16]])(Vi[215] + Vi[214]), Vi[243]],
          [(Vi[1], pX[Vi[16]])(Vi[215] + "w="), "o"]
        ],
        jF = (Vi[1], pX[Vi[16]])("eTR5bnM="),
        eF = (Vi[1], pX[Vi[16]])("aHRleWpldA=="),
        wF = (Vi[1], pX[Vi[16]])("c2RmbGpneGxmY2pr"),
        HF = [
          [(Vi[1], pX[Vi[16]])("a3NhZmR1"), Vi[16]],
          [(Vi[1], pX[Vi[16]])("ZGZnYWFzZGFz"), Vi[216]],
          [wF, Vi[219]],
          [(Vi[1], pX[Vi[16]])("bGFzZWRraGFz"), Vi[217]],
          [(Vi[1], pX[Vi[16]])("cW16ZjhrM24="), Vi[14]]
        ],
        JF = [
          [jF, Vi[234]],
          [eF, Vi[218]],
          [(Vi[1], pX[Vi[16]])("bmI3ZnEy"), Vi[11]]
        ],
        xF = (Vi[1], pX[Vi[16]])("bGtxM20="),
        PF = (Vi[1], pX[Vi[16]])("bWtxN3" + Vi[214]),
        KF = ["mk:tw", "mk:jf"],
        QF = ((...kk) => {
          kk[Vi[0]] = Vi[1];
          try {
            return kk[Vi[200]] = Vi[12], (kk[Vi[200]] = Tk[(Vi[1], pX[Vi[16]])("V2ViU29ja2V0")]) === Vi[15] || kk[Vi[200]] === void Vi[1] ? void Vi[1] : kk[Vi[200]][Vi[210] + Vi[211]]
          } catch {
            return Vi[12]
          }
        })(),
        sF = ["send", "close", "addEventListener", "removeEventListener", Vi[223] + Vi[222] + Vi[219]],
        VF = ["onmessage", "onopen", "onclos" + Vi[73], "onerro" + Vi[16]];
      let SF = Vi[33];
      const oF = (Vi[1], pX[Vi[16]])("RXZlbnQ=");
      let vF = fF[Vi[221]][Vi[237]],
        EF = Vi[1];
      const OF = () => EF++ === Vi[28] ? (EF = Vi[1], jk(Vi[33]) ? fF[Vi[5]].CheckFuncHit : Vi[1]) : Vi[1],
        nF = (Vi[1], pX[Vi[42]])(Vi[15]),
        GF = Xk[Vi[0]];
      for (let ak = Vi[1]; ak < GF; ak++) {
        const kk = (Vi[1], pX[Vi[207]])(pX.bb, Xk, [ak]);
        nF[ak] = kk >= Vi[195] && kk <= Vi[190] ? kk : Vi[1]
      }
      const pF = (...kk) => {
          return kk[Vi[0]] = Vi[3], typeof kk[Vi[1]] === Vi[205] + Vi[206] && (Vi[1], pX[Vi[207]])(pX.R, kk[Vi[2]], [(Fk = kk[Vi[1]], (0, pX.k)(pX.x, Fk, []))]) !== Vi[15];
          var Fk
        },
        uF = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        bF = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        RF = [
          [Ki["Dispat" + Vi[222] + Vi[219]], () => !pF(EventTarget[Vi[210] + Vi[211]][Vi[223] + Vi[222] + Vi[219]], uF)],
          [Ki.PerformanceNow, () => !pF(performance[Vi[224]], bF)],
          [Ki.DateNow, () => !pF(Date[Vi[224]], bF)]
        ],
        UF = (Vi[1], pX[Vi[42]])(Vi[15]);
      let CF = Vi[1];
      const NF = {
        stackCheck: () => {
          let kk = Vi[15];
          const Fk = wi((() => (kk = Zk(Vi[30]), kk !== Vi[15])));
          var Ik, Xk;
          return kk !== Vi[15] && ek === Vi[15] && (Ik = kk[Vi[20]], Xk = kk[Vi[21]], ek = (0, MT.r)(qi(Ik, Xk))), Fk
        },
        [Vi[225] + Vi[226]]: (...kk) => {
          kk[Vi[0]] = Vi[1];
          const Fk = mk();
          if (Fk === Vi[3]) return Vi[3];
          if (zk[aF]) return Vi[4];
          const Ik = Ji((() => Tk[qF] ? Vi[38] : Vi[1]));
          return Ik !== Vi[1] ? Ik === Vi[38] ? Vi[38] : Vi[1] : Fk === Hi ? Vi[1] : Fk === Vi[36] ? Vi[36] : (Kk(), Xk = Function[Vi[210] + Vi[211]], ik = Vi[232], yk = (...kk) => (kk[Vi[0]] = Vi[2], kk[Vi[1]].writable !== Vi[30]), wi((() => {
            const kk = Object.getOwnPropertyDescriptor(Xk, ik);
            return void 0 !== kk && yk(kk)
          })) ? Vi[68] : Vi[1]);
          var Xk, ik, yk
        },
        indexPassReplaced: fk,
        [Vi[227] + "tSubChanged"]: (...kk) => {
          if (kk[Vi[0]] = Vi[1], Ak === dk || Wk) return Vi[33];
          const Fk = Yk();
          return Fk !== dk && Fk !== Ak
        },
        eq: (...kk) => {
          oi(kk[Vi[0]] = Vi[1], kk[Vi[14]] = GF);
          for (let Fk = Vi[1]; Fk < RF[Vi[0]] + CF; Fk++) {
            const Ik = Fk < RF[Vi[0]] ? RF[Fk] : UF[Fk - RF[Vi[0]]];
            Ik[Vi[1]] < kk[Vi[14]] && xk(Ik[Vi[2]]) && (kk[Vi[14]] = Ik[Vi[1]])
          }
          return kk[Vi[14]] < GF ? nF[kk[Vi[14]]] : Vi[1]
        },
        Bq: () => hk ? zF[Vi[228]] : Vi[8],
        [Vi[229] + Vi[230] + "Subs"]: () => {
          const kk = ak[Vi[5]].mH[Vi[229] + Vi[230]];
          return typeof kk === Vi[231] && kk > Vi[1] ? kk > Vi[74] ? Vi[74] : kk : Vi[1]
        },
        ["getCom" + Vi[242]]: (...kk) => {
          oi(kk[Vi[0]] = Vi[1], kk[Vi[22]] = Vi[12], Mk = Vi[1]);
          for (let Ik = Vi[1]; Ik < nk; Ik++) yF(Ok[Ik], Vi[30]);
          for (let Ik = Vi[1]; Ik < LF[Vi[0]]; Ik++) zk[LF[Ik][Vi[1]]] && yF(LF[Ik][Vi[2]], Vi[30]);
          const Fk = Ji((() => ei(atob[Vi[232]](), Lk) ? Vi[1] : Vi[2]));
          Fk === Vi[2] && yF(Vi[5], Vi[30]), Kk();
          const Xk = Fk === Hi ? Hi : Ji(((...kk) => {
            kk[Vi[0]] = Vi[1];
            const Fk = Object.getOwnPropertyDescriptor(window, "atob");
            return Fk === Vi[12] ? Hi : Fk[Vi[233]] !== Vi[12] ? Vi[2] : Vi[1]
          }));
          Xk === Vi[2] && yF(Vi[236], Vi[30]);
          const Tk = Xk === Hi;
          for (let Ik = Vi[1]; Ik < ZF[Vi[0]] && !Tk; Ik++) zk[ZF[Ik][Vi[1]]] && yF(ZF[Ik][Vi[2]], Vi[30]);
          const ik = Mk > nk;
          kk[Vi[2]] = Vi[15], nk === Vi[1] && (pk > Vi[1] ? kk[Vi[2]] = Gk[Vi[1]] : Rk ? kk[Vi[2]] = "fp" : ik || (kk[Vi[2]] = zk[jF] ? Vi[234] : zk[eF] ? Vi[218] : Vi[15]));
          for (let Ik = Vi[1]; Ik < HF[Vi[0]] && !Tk; Ik++) zk[HF[Ik][Vi[1]]] && yF(HF[Ik][Vi[2]], Vi[30]);
          const yk = Mk,
            lk = (Vi[1], Xi[Vi[22]])(),
            ak = lk !== Vi[15] && (Vi[1], tF[Vi[218]])(lk);
          ak && !Tk && yF(lk, Vi[33]), Bk && yF("ix", Vi[33]), Ek && yF("il", Vi[33]);
          for (let Ik = Vi[1]; Ik < pk; Ik++) yF(Gk[Ik], Vi[30]);
          for (let Ik = Vi[1]; Ik < JF[Vi[0]]; Ik++) zk[JF[Ik][Vi[1]]] && yF(JF[Ik][Vi[2]], Vi[30]);
          zk[xF] && yF("mk:lk", Vi[30]);
          const qk = ((...kk) => {
            kk[Vi[0]] = Vi[2];
            for (let Fk = Vi[1]; Fk < KF[Vi[0]]; Fk++)
              if (kk[Vi[1]] === KF[Fk]) return KF[Fk];
            return Vi[15]
          })(zk[PF]);
          if (qk !== Vi[15] && yF(qk, Vi[30]), Ik !== Vi[15] && Qk(Ik.emitReplaced) === Vi[30] && yF("mk:em", Vi[30]), SF && yF("3s", Vi[33]), pX.V && yF("3b", Vi[33]), Kk(), Pk && yF("3d", Vi[33]), Tk && yF("3g", Vi[33]), lk === Vi[15] || ak || yF(lk, Vi[33]), ek !== Vi[15] && yF(ek, Vi[33]), Jk === Vi[15] && Ik !== Vi[15]) {
            const kk = Qk(Ik[Vi[225] + "mMeshHitStac" + Vi[207]]);
            typeof kk === Vi[75] && (Jk = function(kk, Fk, Ik) {
              let Xk = 0;
              for (; Xk < Ik && -1 === yi(kk, Fk[Xk]);) Xk++;
              return (0, MT.j)(qi(kk, Xk < Ik ? Fk[Xk] : null))
            }(kk, tk, tk[Vi[0]] - Vi[2]))
          }
          var Zk;
          if (Jk !== Vi[15] && yF(Jk, Vi[33]), wk === Vi[15] && zF[Vi[235]] !== Vi[15] && oi((Zk = zF[Vi[235]], wk = (0, MT.i)(Zi(Zk).reader)), Hk = ji(zF[Vi[235]], Qk((() => zF[Vi[73]] === Vi[15] ? Vi[15] : (Vi[1], pX.db)(zF[Vi[73]]))))), wk !== Vi[15] && yF(wk, Vi[33]), Hk !== Vi[15] && yF(Hk, Vi[33]), Mk === Vi[1]) return Vi[15];
          if (kk[Vi[2]] === Vi[15] && Dk[Vi[1]] && !(Vi[1], MT[Vi[203]])(rk[Vi[1]]))
            for (let Ik = Vi[2]; Ik < yk; Ik++)
              if (Dk[Ik] && (Vi[1], MT[Vi[203]])(rk[Ik])) {
                const kk = rk[Ik];
                for (let Fk = Ik; Fk > Vi[1]; Fk--) oi(rk[Fk] = rk[Fk - Vi[2]], Dk[Fk] = Dk[Fk - Vi[2]]);
                oi(rk[Vi[1]] = kk, Dk[Vi[1]] = Vi[30]);
                break
              } if (oi(kk[Vi[73]] = Vi[1], kk[Vi[236]] = kk[Vi[2]] === Vi[15] ? Vi[1] : yk), kk[Vi[236]] > Vi[1] && lk !== Vi[15] && ak && !Tk) {
            for (let Fk = kk[Vi[236]]; Fk > Vi[1]; Fk--) oi(rk[Fk] = rk[Fk - Vi[2]], Dk[Fk] = Dk[Fk - Vi[2]]);
            oi(rk[Vi[1]] = lk, Dk[Vi[1]] = Vi[33], kk[Vi[73]] = Vi[2], kk[Vi[236]]++)
          }
          if (kk[Vi[38]] = Vi[1], kF++ % Vi[3] === Vi[2])
            for (let Ik = Vi[2]; Ik < Mk; Ik++) lF(Ik) < lF(kk[Vi[38]]) && (kk[Vi[38]] = Ik);
          const jk = rk[kk[Vi[38]]];
          (Dk[kk[Vi[38]]] ? XF : IF)[jk] = FF++;
          const xk = kk[Vi[38]] >= kk[Vi[73]] && kk[Vi[38]] < kk[Vi[236]];
          if (!Dk[kk[Vi[38]]] || jk === kk[Vi[2]] || kk[Vi[38]] === Vi[1] && !xk) return jk === Vi[219] ? (Vi[1], MT[Vi[219]])(zk[wF], MT[Vi[7]]) : jk;
          const sk = (kk[Vi[22]] = kk[Vi[2]]) !== Vi[15] && kk[Vi[22]] !== void Vi[1] ? kk[Vi[22]] : rk[Vi[1]];
          return sk !== TF && oi(TF = sk, iF = (Vi[1], pX[Vi[42]])(Vi[15])), iF[jk] ??= (Vi[1], MT[Vi[218]])(jk, sk)
        }
      };
      let cF = fF[Vi[221]][Vi[237]];
      const WF = () => vF !== fF[Vi[221]][Vi[237]] ? vF : cF;
      let BF = Vi[1],
        dF = Vi[3],
        YF = Vi[1],
        AF = Vi[1];
      return {
        checks: NF,
        checkEvent: (...kk) => {
          kk[Vi[0]] = Vi[2];
          try {
            const Fk = Tk[oF];
            if (typeof Fk === Vi[205] + Vi[206] && !(kk[Vi[1]] instanceof Fk) && !(Vi[1], pX.D)(kk[Vi[1]])) return vF = fF[Vi[221]].NotEvent, Vi[1];
            if (kk[Vi[1]].isTrusted === Vi[33]) return Vi[1];
            let Ik = Vi[1];
            for (const Xk in kk[Vi[1]]) Ik++;
            return Ik < Vi[70] ? (vF = fF[Vi[221]]["FewPropertie" + Vi[216]], Vi[1]) : OF()
          } catch {}
          return Vi[1]
        },
        checkPadCall: () => {
          try {
            return OF()
          } catch {
            return Vi[1]
          }
        },
        usedProp: WF,
        watchHeld: (...kk) => {
          oi(kk[Vi[0]] = Vi[3], kk[Vi[3]] = Vi[12]);
          const Fk = sk((() => {
            kk[Vi[3]] = kk[Vi[2]]()
          }));
          UF[CF++] = [kk[Vi[1]], () => !Fk || kk[Vi[2]]() !== kk[Vi[3]]]
        },
        Dt: () => {
          const kk = fk();
          return ((...kk) => {
            if (oi(kk[Vi[0]] = Vi[2], kk[Vi[14]] = Vi[12], kk[Vi[3]] = Vi[12]), Ik !== Vi[15]) {
              const Fk = Qk(Ik.RL),
                Xk = "v3" === Fk ? Vi[4] : "v5" === Fk ? Vi[28] : "v6" === Fk ? Vi[36] : Vi[3];
              Xk !== Vi[3] && (dF = Xk);
              const Tk = Qk(Ik["inbuil" + Vi[240] + Vi[241]]);
              typeof Tk === Vi[231] && Tk >= Vi[1] && Tk <= Vi[110] && (Tk | Vi[1]) === Tk && (YF = Tk), oi(kk[Vi[14]] = Qk(Ik.reflectApplyHit), kk[Vi[3]] = Qk(Ik.definerHit))
            }
            const Fk = kk[Vi[1]] ? Vi[57] : "11" === kk[Vi[3]] ? Vi[110] : "13" === kk[Vi[3]] ? Vi[108] : kk[Vi[14]] !== Vi[12] && kk[Vi[14]] !== Vi[15] ? Vi[3] : "10" === kk[Vi[3]] ? Vi[70] : "12" === kk[Vi[3]] ? Vi[62] : Vi[1];
            Fk !== Vi[1] && (AF = Fk)
          })(kk), BF++ % 10 === Vi[1] && (((...kk) => {
            kk[Vi[0]] = Vi[1];
            const Ik = Fk();
            Ik === Vi[15] || SF || (SF = xk((() => {
              if (QF !== Vi[12] && (Vi[1], pX.M)(Ik) !== QF) return Vi[30];
              for (let kk = Vi[1]; kk < sF[Vi[0]]; kk++)
                if ((Vi[1], pX[Vi[207]])(pX[Vi[220]], Ik, [sF[kk]])) return Vi[30];
              for (let kk = Vi[1]; kk < VF[Vi[0]]; kk++)
                if (Ik[VF[kk]] !== Vi[15] && Ik[VF[kk]] !== Vi[12]) return Vi[30];
              return Vi[33]
            })))
          })(), wi((() => !ei(Tk[ik][Vi[232]][Vi[232]](), Lk))) && (cF = cF === fF[Vi[221]][Vi[238]] ? fF[Vi[221]][Vi[238]] : fF[Vi[221]].Fr), wi((() => !ei(Tk[ik][Vi[232]](), Lk))) && (cF = fF[Vi[221]][Vi[238]])), {
            flags: kk ? fF[Vi[5]].Butto : Vi[1],
            values: [
              [fF[Vi[239]].PhysicsVersion, dF],
              [fF[Vi[239]]["Inbuil" + Vi[240] + Vi[241]], YF],
              [fF[Vi[239]]["AltCom" + Vi[242]], AF],
              [fF[Vi[239]]["ProbeUsedPro" + Vi[243]], WF()]
            ]
          }
        }
      }
    };
    const vi = "[bloxd-wasm-client]",
      Ei = "bloxdWasmDownloadFailed",
      Oi = XI.d,
      ni = "boot",
      Gi = "playSources",
      ui = "wasmBuild",
      bi = "bloxd-wasm-joined",
      Ri = "bloxd-wasm-first-view",
      Ui = "bloxd-wasm-playable-legacy",
      Ci = 1048576,
      Ni = 8 * Ci,
      ci = 1006,
      Wi = 1e3,
      fi = "You lost connection to the server.",
      Bi = "general:lostConnection",
      di = 1048576,
      Yi = 5e3,
      Ai = 100,
      gi = [2e3, 1e4, 3e4],
      mi = 3e4;
    let ri = null,
      Di = null,
      Mi = !1,
      ky = !1,
      Fy = !1,
      Iy = null,
      Xy = null,
      Ty = null,
      iy = null,
      yy = null,
      ly = null,
      ay = null;
    const qy = new class {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = kk, this.soundOn = Fk, this.now = Ik, this.player = null, this.local = [], this.stopped = !1
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
      endSession() {
        var kk, Fk;
        null === (kk = this.player) || void 0 === kk || kk.cancelPreload(), null === (Fk = this.player) || void 0 === Fk || Fk.freeSheetsAfterGame()
      }
      load(kk) {
        if (null !== this.player || this.stopped) return;
        this.player = kk, kk.setMaster(this.master, this.soundOn);
        const Fk = this.now(),
          Ik = this.local;
        this.local = [];
        for (const Tk of Ik)
          if (!(Tk.stopped || !Tk.loop && Fk - Tk.at >= 300)) try {
            this.start(Tk, kk, Fk)
          } catch (Xk) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Xk)
          }
      }
      start(kk, Fk, Ik) {
        const {
          name: Xk,
          pos: Tk,
          ear: ik,
          maxHearDist: yk,
          refDistance: lk,
          loop: ak,
          fade: qk
        } = kk, Lk = Fk.playGame(Xk, CF(kk, Ik), Tk, ik, yk, lk, ak);
        if (kk.sound = Lk, 1 !== kk.rate && Lk.rate(kk.rate), null !== kk.panner && Lk.setPannerAttr(kk.panner), null !== kk.moved && Lk.setPosition(kk.moved), null !== qk && Ik - qk.at < qk.ms) {
          const Fk = UF(this.master);
          Fk > 0 ? Lk.fade(0, kk.volume * Fk, qk.at + qk.ms - Ik) : Lk.setRelativeVolume(kk.volume)
        }
      }
      onAudioEvent(kk, Fk, Ik, Xk) {
        var Tk, ik;
        return null === (Tk = null === (ik = this.player) || void 0 === ik ? void 0 : ik.onAudioEvent(kk, Fk, Ik, Xk)) || void 0 === Tk || Tk
      }
      applyListener(kk) {
        var Fk;
        null === (Fk = this.player) || void 0 === Fk || Fk.applyListener(kk)
      }
      playGame(kk, Fk, Ik, Xk, Tk, ik, yk) {
        if (this.stopped) return RF.d;
        if (this.player) return this.player.playGame(kk, Fk, Ik, Xk, Tk, ik, yk);
        const lk = this.now();
        this.local = this.local.filter((kk => !kk.stopped && (kk.loop || lk - kk.at < 300)));
        const ak = {
          name: kk,
          volume: UF(Fk),
          fade: null,
          pos: Ik && [Ik[0], Ik[1], Ik[2]],
          ear: Xk && [Xk[0], Xk[1], Xk[2]],
          maxHearDist: Tk,
          refDistance: ik,
          loop: yk,
          rate: 1,
          panner: null,
          moved: null,
          at: lk,
          stopped: !1,
          sound: null
        };
        this.local.push(ak);
        const qk = {
          stop: () => {
            var kk;
            return ak.stopped = !0, null === (kk = ak.sound) || void 0 === kk || kk.stop(), qk
          },
          fade: (kk, Fk, Ik) => {
            if (ak.sound) return ak.sound.fade(kk, Fk, Ik), qk;
            const Xk = UF(this.master),
              Tk = UF(Xk > 0 ? Fk / Xk : Fk > 0 ? ak.volume : 0),
              ik = this.now(),
              yk = CF(ak, ik);
            return ak.volume = Tk, ak.fade = Ik > 0 && yk !== Tk ? {
              from: yk,
              at: ik,
              ms: Ik
            } : null, qk
          },
          rate: kk => (ak.sound ? ak.sound.rate(kk) : ak.rate = kk, qk),
          getVolume: () => ak.sound ? ak.sound.getVolume() : ak.volume * UF(this.master),
          getRelativeVolume: () => ak.sound ? ak.sound.getRelativeVolume() : ak.volume,
          setRelativeVolume: kk => (ak.sound ? ak.sound.setRelativeVolume(kk) : (ak.volume = UF(kk), ak.fade = null), qk),
          setPannerAttr: kk => (ak.sound ? ak.sound.setPannerAttr(kk) : ak.panner = {
            ...kk
          }, qk),
          setPosition: kk => (ak.sound ? ak.sound.setPosition(kk) : ak.moved = [kk[0], kk[1], kk[2]], qk)
        };
        return qk
      }
      setMaster(kk, Fk) {
        var Ik;
        this.master = kk, this.soundOn = Fk, null === (Ik = this.player) || void 0 === Ik || Ik.setMaster(kk, Fk)
      }
      stop() {
        var kk;
        this.stopped = !0, null === (kk = this.player) || void 0 === kk || kk.stopAll();
        for (const Fk of this.local) Fk.stopped = !0;
        this.local = []
      }
    }((0, SF.b)(), !0);
    let Ly = {
        wasm: "unknown",
        client: String(XF.b)
      },
      ty = null,
      Zy = () => {};
    const jy = new Promise((kk => {
      Zy = kk
    }));
    let ey = () => {};
    const wy = new Promise((kk => {
      ey = kk
    }));
    let Hy, Jy = null,
      xy = null,
      Py = null,
      Ky = null,
      Qy = null,
      sy = null,
      Vy = null,
      zy = null,
      Sy = null,
      oy = null,
      vy = null,
      Ey = null,
      Oy = null,
      ny = null,
      Gy = null,
      py = null,
      uy = null,
      by = null,
      Ry = null,
      Uy = !1,
      Cy = null;
    const Ny = new Set,
      cy = new Set;

    function Wy(kk) {
      if (!Ny.has(kk)) {
        Ny.add(kk);
        for (const Ik of cy) try {
          Ik(kk)
        } catch (Fk) {
          console.error(`${vi} a startup listener threw`, Fk)
        }
      }
    }

    function fy(kk) {
      Uy = !0, kk.isStopped || Wy("texturesIn")
    }
    let By = 1,
      dy = -1 / 0,
      Yy = -1 / 0,
      Ay = -1 / 0,
      gy = !1,
      my = null,
      hy = !1,
      ry = !1,
      Dy = 0,
      My = null,
      kl = !1;
    const Fl = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Il = 0,
      Xl = 0,
      Tl = null,
      il = null,
      yl = null,
      ll = null;
    const al = new WeakMap;
    let ql = null,
      Ll = null,
      tl = !1,
      Zl = null,
      jl = null,
      el = null,
      wl = null,
      Hl = null,
      Jl = null,
      xl = 0,
      Pl = null,
      Kl = null,
      Ql = null,
      sl = null,
      Vl = -1 / 0,
      zl = null;
    const Sl = new Set;
    let ol = !1,
      vl = null;
    const El = new Map,
      Ol = new Set;
    let nl = !1;
    const Gl = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let pl = null,
      ul = () => [0, 0],
      bl = () => {},
      Rl = () => {},
      Ul = null,
      Cl = null;
    const Nl = new class {
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
      console.warn(`${vi} chunk cancels from the server this session: ${kk}`)
    }));
    let cl = 1,
      Wl = null,
      fl = null,
      Bl = null,
      dl = null,
      Yl = null,
      Al = !1,
      gl = !1,
      ml = 0,
      hl = null,
      rl = !1,
      Dl = null,
      Ml = null,
      ka = !1;
    const Fa = new class {
      constructor(kk) {
        this.GL = kk, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(kk, Fk, Ik) {
        (0, OF.d)(kk) && (this.lossPending = !1);
        const Xk = Ik - this.lastFrameMs;
        this.lastFrameMs = Ik, this.lossPending && Fk && (0, OF.f)(kk) ? (null === this.undrawnSinceMs || Xk > 1e3) && (this.undrawnSinceMs = Ik) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && Ik - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(kk) {
        kk !== this.shown && (this.shown = kk, this.GL(kk))
      }
    }((kk => {
      ak.g.GL(ek.e, kk)
    }));
    let Ia = !1,
      Xa = !0,
      Ta = null,
      ia = !1,
      ya = !1,
      la = !1;

    function aa() {
      return Ty ??= Promise.all([Ik.e(198), Ik.e(142), Ik.e(59)]).then((() => Ik(50939))).then((kk => (Xy = kk, Object.assign(globalThis, {
        bloxdPreviewPage: kk.pagePreviews()
      }), kk)), (kk => {
        throw Ty = null, kk
      })), Ty
    }

    function qa() {
      return Iy ??= Ik.e(57).then((() => Ik(50964))).catch((kk => {
        throw Iy = null, new Vk.e(kk)
      })), Iy
    }
    class La {
      constructor() {
        this.host = null
      }
      open(kk) {
        return null !== this.host ? kk(this.host) : aa().then((Fk => (this.host ??= new Fk.WasmPreviewHost(Fk.pagePreviews()), kk(this.host))))
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
        return this.open((Ik => Ik.openCharacter(kk, Fk)))
      }
    }

    function ta() {
      Fy || (Fy = !0, aT.h.setHost(new La), (0, vI.k)(), TT.f.setFollower(jq), Object.assign(globalThis, {
        bloxdPreviews: aT.h
      }))
    }

    function Za() {
      aa().then((kk => {
        kk.pagePreviews().prefetch()
      }), (() => {}))
    }

    function ja() {
      let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (ky) return;
      ky = !0, Ia = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Xa = !Ia, console.info(`${vi} starting`), Mi || (Mi = !0, (0, ek.O)(new pF(Ga, ca)), (0, Zk.q)(new uF), (0, ek.N)(new bF), (0, ek.E)()), Ia && ak.g.subscribe("appManagerUpdated|gameState", na), ta(), (0, VI.setCrashScreen)((kk => {
        let {
          text: Fk,
          reload: Ik
        } = kk;
        ! function(kk, Fk) {
          var Ik, Xk;
          if (ia) return;
          ia = !0, (0, OI.S)(), null === (Ik = zl) || void 0 === Ik || Ik.abort(), zl = null, iT.b.release();
          const Tk = Ia ? null !== (Xk = kk.cancel) && void 0 !== Xk ? Xk : "general:back" : null;
          SX({
            ...kk,
            cancel: Tk
          }).then((kk => {
            kk && Fk && ya ? ((0, eF.u)("reloadOntoJs"), (0, Yk.e)(eF.y)) : kk && Fk ? (0, Yk.i)() : Ia && (0, Yk.d)("/")
          }))
        }(Fk, Ik)
      })), (0, gX.m)(), (0, zF.l)();
      let Fk = null;
      try {
        Fk = si("fw2oddwvwjo", (() => {
          var kk, Fk;
          return null !== (kk = null === (Fk = Jy) || void 0 === Fk ? void 0 : Fk.ws) && void 0 !== kk ? kk : null
        }), kk, "gyshxeimfd")
      } catch (Tk) {
        console.error(`${vi} probes`, Tk)
      }
      const Xk = function() {
        const kk = (0, OX.n)(),
          Fk = (0, OX.j)();
        let Ik = !1;
        return Xk => {
          kk && !Ik && (Ik = !0, (0, VI.reportStaleBuildReload)(kk, Fk, Xk))
        }
      }();
      wq(), Ia || function() {
        const kk = function(kk) {
          var Fk;
          const Ik = new URLSearchParams(kk),
            Xk = Ik.get("game");
          return Xk ? {
            game: Xk,
            lobby: null !== (Fk = Ik.get("lobby")) && void 0 !== Fk ? Fk : null
          } : null
        }(window.location.search);
        if (kk) return (0, TF.j)(kk.game) && wq().request(), void Ha(kk.game, kk.lobby);
        const Fk = new URLSearchParams(window.location.search).get("ws");
        if (!Fk) return;
        jy.then((kk => {
          kk && async function(kk, Fk) {
            try {
              await (0, Vk.n)(kk), Zl = Ya(new WebSocket(Fk)), null !== Zl && iT.b.setGame(null), ea()
            } catch (Tk) {
              console.error(`${vi} ?ws=${Fk} did not attach`, Tk)
            }
          }(kk, Fk)
        }))
      }(), async function(kk) {
        var Fk, Xk, ik, yk, lk, qk;
        if ("undefined" === typeof WebAssembly) return lq("noWebAssembly", "This browser has no WebAssembly"), null;
        const Lk = await (0, eT.Q)();
        if ((0, VI.setCrashBackend)((0, XI.h)(Lk) ? "unsupported" : null !== (Fk = null === Lk || void 0 === Lk ? void 0 : Lk.backend) && void 0 !== Fk ? Fk : "none"), (0, XI.h)(Lk)) return lq("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Lk.missing.join(", ")}`, {
          missing: Lk.missing.join(",")
        }), null;
        if ((0, cT.o)("render")) try {
          const {
            startRenderDebug: kk
          } = await Promise.all([Ik.e(77), Ik.e(48)]).then((() => Ik(4676)));
          kk(Lk)
        } catch (SF) {
          console.warn("The render debug topic didn't load", SF)
        }
        if ((0, cT.o)("renderlite")) try {
          const {
            startRenderLite: kk
          } = await Promise.all([Ik.e(269), Ik.e(49)]).then((() => Ik(50974)));
          Bl = kk(Lk)
        } catch (SF) {
          console.warn("The renderlite debug topic didn't load", SF)
        }
        if ((0, cT.o)("renderprobe")) try {
          const {
            startRenderProbe: kk
          } = await Ik.e(50).then((() => Ik(50977)));
          kk(Lk)
        } catch (SF) {
          console.warn("The renderprobe debug topic didn't load", SF)
        }
        let tk = null;
        if (null !== Lk && aq()) {
          const kk = (0, oX.f)(Lk);
          null === kk || "webgl" !== Lk.backend && !(0, wF.x)(kk) || (0, HF.m)(kk, VI.reportGpuWasmPopulation), null !== kk && (0, wF.p)(kk), tk = (0, oX.c)(Lk, kk)
        }
        if (null !== Lk && null !== tk) return (0, VI.reportGpuFallback)(tk, Lk.backend), qq(`the wasm client's renderer plays this GPU (${tk}) on ${Lk.backend} worse than the JS client`, "gpu"), null;
        const Zk = null !== (Xk = null === Lk || void 0 === Lk ? void 0 : Lk.backend) && void 0 !== Xk ? Xk : null;
        Gl.adapter = null !== (ik = null === Lk || void 0 === Lk ? void 0 : Lk.adapter) && void 0 !== ik ? ik : null, Gl.boundAtMs = null, Gl.indirectHangs = null, Gl.restoresSkipped = null;
        const jk = !(0, XI.P)();
        null !== Lk && "none" !== Lk.reason && console.info(`${vi} drawing with ${Lk.backend}: ${Lk.reason}`);
        const ek = (0, eT.F)();
        ey(!0), (0, Vk.A)((kk => {
          try {
            null !== Zk && (Ul = kk.startSkyFeed, tq(), function(kk) {
              var Fk, Ik;
              ul = kk.rasterText, el = kk.setTextLocalPlayer, kk.setTextLocalPlayer(null !== (Fk = null === (Ik = jl) || void 0 === Ik ? void 0 : Ik.info.playerDbId) && void 0 !== Fk ? Fk : null), bl = kk.drainTextRerasters, Rl = kk.loadTextIcons, kk.warmText((() => Al)), kk.textChanged(), Al && setTimeout(Rl, 0)
            }(kk), Cl = kk.startShellAnalytics, Qq())
          } finally {
            la || (dl = kk.followMenuPrefs({
              setSoundPrefs: fa,
              setEnvPrefs: Ba,
              setUiPrefs: Wa,
              setLookPrefs: da
            }))
          }
        })), (0, Vk.r)(qy).catch((kk => {
          console.warn(`${vi} the game code did not load: a join asks again`, kk)
        }));
        const wk = (0, eT.l)(Lk);
        let Hk, Jk;
        wk.catch((() => {})), "loading" === (0, aF.w)() && OT();
        try {
          Hk = function(kk) {
            const Fk = null !== kk && void 0 !== kk ? kk : document.createElement("canvas");
            Fk.id = "wasm-game-canvas", (0, QT.k)();
            const Ik = (0, GF.d)(),
              Xk = (0, GF.e)(Ik);
            Fk.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, KT.f)(Fk, Xk), (0, GF.c)(Fk, Ik), Fk.width = Xk.bufferWidth, Fk.height = Xk.bufferHeight;
            const Tk = document.createElement("div");
            return Tk.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", Tk.append(Fk), pa(Tk, Xa), Ta = Tk, document.body.append(Tk), Fk
          }(null === Zk ? null : await (await aa()).pagePreviews().beginSession())
        } catch (Tk) {
          return await iL({
            site: ui,
            error: Tk
          }, (() => {
            (0, VI.showUnsupported)((0, sX.l)("fetch"), mT.g.fetch, `the previews did not load: ${String(Tk)}`)
          })), null
        }
        OT();
        try {
          Jk = await wk
        } catch (Tk) {
          return await iL({
            site: ui,
            error: Tk
          }, (() => {
            (0, VI.showUnsupported)((0, sX.l)("fetch"), mT.g.fetch, `the ${null!==Zk&&void 0!==Zk?Zk:"client"} build did not load: ${String(Tk)}`)
          })), null
        }
        const xk = (0, eT.f)(),
          Pk = !xk && !0 !== pI.m.getItem(Ei),
          Kk = !xk && "loading" === (0, aF.w)();
        await (0, wT.b)(Jk, {
          reloadFailedDownload: Pk
        }), Kk && !(0, aF.K)() && await (0, wT.b)(Jk, {
          reloadFailedDownload: Pk
        });
        oT = performance.now();
        const Qk = Ly;
        if (!(0, aF.K)()) {
          (0, aF.I)() && pI.m.setItem(Ei, !0);
          const kk = (0, aF.n)();
          if ("call" === kk) Bq({
            site: TI.q,
            error: (0, aF.m)(),
            header: null
          }, Qk);
          else {
            const Fk = null !== kk && void 0 !== kk ? kk : "instantiate",
              Ik = () => {
                (0, VI.showUnsupported)((0, sX.l)(Fk), mT.g[Fk], (0, aF.k)())
              };
            if ("compile" !== kk && "instantiate" !== kk || !aq())
              if ("fetch" === Fk) {
                const kk = [Jk.url().href, ZF.f.url().href];
                await iL({
                  site: ui,
                  error: (0, aF.k)(),
                  urls: kk
                }, Ik)
              } else Ik();
            else {
              const Fk = (0, aF.k)(),
                Ik = (0, YF.b)((0, aF.m)());
              (0, VI.reportCountedLoadFallback)((0, sX.l)(kk), mT.g[kk], Fk, Ik), qq(`the wasm client did not ${kk} here (${Fk})`, Ik ? "oom" : null)
            }
          }
          return null
        }(0, qF.R)(Jk.url()) && (0, VI.reportUnstreamedCoreLoad)();
        const zk = (0, aF.y)();
        let Sk, vk = Qk;
        try {
          vk = {
            ...Qk,
            wasm: zk.Qt()
          };
          const {
            vH: kk
          } = Jk.bindings, Fk = kk.DIk();
          if (Fk !== fF.A) return Bq({
            site: TI.d,
            error: `core ABI ${Fk}, page ABI ${fF.A}`,
            header: null
          }, vk), null;
          const [Ik, Xk] = (0, fF.le)();
          Sk = new kk(Ik, Xk)
        } catch (Tk) {
          return Bq({
            site: TI.d,
            error: Tk,
            header: null
          }, vk), null
        }
        Ly = vk, ty = Jk.bindings;
        const Ek = new TI.i(Sk, aF.r, {
          onCrash: kk => {
            var Fk;
            null === (Fk = Bl) || void 0 === Fk || Fk.crashed(kk),
              function(kk, Fk, Ik, Xk) {
                if ("webgpu" !== Fk || (0, eT.e)()) return !1;
                const Tk = function(kk) {
                  if (kk.site === TI.f && (0, XI.j)(kk.error)) return "frames_refused";
                  return kk.site === Oi && (0, XI.l)(kk.error) ? "start_failed" : null
                }(kk);
                if (null === Tk) return !1;
                if (null !== (0, XI.M)(Tk, Xk)) return (0, VI.countRenderLost)(Tk, kk.error, Gl), !1;
                return vF.F.reloaded(null, !1), (0, VI.reportRenderReload)("webgpu", "start_failed" === Tk ? 0 : 1, Ik, {
                  cause: Tk,
                  error: kk.error,
                  context: Gl,
                  session: gq(null)
                }), oq(), !0
              }(kk, Zk, vk, jk) || Bq(kk, vk)
          },
          onNetEvent: Sq,
          onReconnectGrace: Tq,
          onJoinPreloadEnded: Xq,
          onCoreErrors: (kk, Fk) => {
            var Ik, Xk;
            kk.some((kk => {
              let {
                code: Fk
              } = kk;
              return Fk === fF.N.RenderDeviceLost
            })) && ((0, eT.z)(), Fa.deviceLost(), "webgpu" === Zk && vF.F.lost()), null === (Ik = Bl) || void 0 === Ik || Ik.coreErrors(kk);
            const Tk = () => {
              (0, VI.reportCoreErrors)(kk, Fk, vk, ((kk, Fk) => {
                var Ik;
                return kk === fF.N.EnvUnknownSky ? (0, VI.unknownSkyWords)(JF.e.get("skyBox")) : null === (Ik = pl) || void 0 === Ik ? void 0 : Ik.MIk(kk, Fk)
              }))
            };
            kk.some((kk => {
              let {
                code: Fk
              } = kk;
              return Fk === fF.N.EnvUnknownSky
            })) ? queueMicrotask(Tk) : Tk(), null === (Xk = Cy) || void 0 === Xk || Xk.coreErrors(kk)
          },
          onRenderReload: (kk, Fk, Ik) => {
            ! function(kk, Fk, Ik, Xk, Tk, ik) {
              var yk;
              if ((0, eT.e)()) return;
              const lk = Fk === fF.Xc.WEBGPU,
                ak = Xk === fF.Xc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                qk = Xk === fF.Xc.RESTORE_LOST,
                Lk = lk && (0, vF.p)(Gl.adapter, Ik, "lost" === ak, qk),
                tk = (0, XI.N)(pl);
              null === (yk = Bl) || void 0 === yk || yk.reload(lk, Ik, ak, null === tk || void 0 === tk ? void 0 : tk.message);
              const Zk = lk ? (0, XI.M)(ak, Tk) : null;
              if (null !== Zk) {
                (0, VI.countRenderLost)(ak, tk, Gl);
                const Fk = void 0 === tk ? "" : ` (${tk.message})`;
                return void kk.crash(VI.RENDER_RELOAD_SITE, new Error(`${(0,VI.renderReloadMessage)("webgpu",ak,Ik)} and ${Zk}${Fk}`))
              }
              const jk = lk ? "webgpu" : "webgl1" === ik ? "webgl1" : "webgl";
              "lost" === ak && (0, eT.z)();
              lk || (0, eF.s)();
              (0, VI.reportRenderReload)(jk, Ik, Ly, {
                cause: ak,
                restoreLost: qk,
                adapterRemembered: Lk,
                error: tk,
                context: Gl,
                session: gq(kk.sunShadowsHeld())
              }), oq()
            }(Ek, kk, Fk, Ik, jk, Zk)
          },
          onEnvEvent: kk => {
            var Fk;
            kk.kind === fF.X.SkyImages ? null === (Fk = py) || void 0 === Fk || Fk.onEvent(kk.payload) : kk.kind === fF.X.EnvLighting && (uy = 1 === kk.payload[0])
          },
          onImages: kk => {
            var Fk;
            null === (Fk = by) || void 0 === Fk || Fk.onEvent(kk)
          },
          onModelRequest: kk => {
            var Fk;
            null === (Fk = Oy) || void 0 === Fk || Fk.request(kk)
          },
          onModelTaken: (kk, Fk) => {
            var Ik;
            null === (Ik = Oy) || void 0 === Ik || Ik.taken(kk, Fk)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(kk, Fk) {
                const Ik = ay;
                if (null === Ik || kk.isStopped) return;
                Ik.restore((kk => {
                  (0, VI.reportTerrainTextureFailure)(kk, Fk)
                })).then((Fk => {
                  !1 !== Fk || kk.isStopped ? !0 === Fk && console.info(`${vi} terrain textures handed over again after the renderer lost them`) : console.warn(`${vi} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Ek, vk)
            }))
          },
          onKeepAlive: kk => {
            const Fk = null === ll ? void 0 : al.get(ll);
            void 0 !== Fk && bX(Fk, kk)
          },
          onSends: () => {
            ! function(kk) {
              const Fk = performance.now();
              if (kk.forEachNetOut(cq), Rq(kk), (0, TI.F)(kk, {
                  worldgen: Py,
                  mesh: Qy
                }), null !== fl) try {
                fl.sendsWent(kk, Fk, performance.now())
              } catch (Tk) {
                zq(Tk)
              }
            }(Ek)
          }
        });
        if (iy = Ek, null === (yk = nF.b.wasmNetReady) || void 0 === yk || yk.call(nF.b, (() => Ek.isStopped ? 0 : Ek.netKeptFrames)), null !== kk) {
          Ek.setAntiCheatProbes(xi(aF.r, kk.checks)), kk.watchHeld(Ki.CoreFrame, (() => Ek.frame)), kk.watchHeld(Ki.GlueFrame, (() => Sk.frame));
          const Fk = function(kk, Fk) {
            const Ik = new Pi(Fk);
            let Xk = !1;
            Ik.Dt(kk.Dt());
            const Tk = (0, pX.Y)((() => {
              Ik.Dt(kk.Dt())
            }), Qi);
            let ik = 6 * (0, pX.O)() | 0;
            const yk = () => {
              ++ik < 6 || (ik = 0, kk.checks.stackCheck() && (Xk = !0))
            };
            (0, Ii.i)(yk);
            const lk = () => {
              const Fk = kk.checkPadCall();
              0 !== Fk && Ik.setFlags(Fk)
            };
            return (0, Fi.e)(lk), {
              onSend: yk,
              beforeFrame: () => {
                Xk && Ik.originStackHit() && (Xk = !1)
              },
              onEvent: Fk => {
                const Xk = kk.checkEvent(Fk);
                Ik.value(fF.h.ProbeUsedProp, kk.usedProp()), 0 !== Xk && Ik.setFlags(Xk)
              },
              stop: () => {
                (0, pX.Z)(Tk), (0, Ii.g)(yk), (0, Fi.c)(lk)
              }
            }
          }(kk, ((kk, Fk, Ik) => {
            let Xk = !1;
            return Dq(Ek, (() => {
              Xk = Ek.rings.input.writeRecord(fF.rb.AntiCheat, kk, Fk, Ik, 0)
            })), Xk
          }));
          Ek.isStopped ? Fk.stop() : vy = Fk
        }
        ri = (kk, Fk, Ik) => Ek.rings.cmd.writeCmd(kk, Fk, Ik), Di = kk => Ek.rings.cmd.growForCmd(kk), kl = !1, tq(), (0, Vk.C)(Ek, {
          core: Sk,
          memory: aF.r,
          staleOr: (kk, Fk, Ik, Xk) => iL({
            site: kk,
            error: Fk
          }, Ik, Xk),
          reportReplayFault: (kk, Fk) => {
            (0, VI.reportReplayFault)(kk, Fk, Ly)
          },
          audio: qy,
          options: JF.e,
          onNetEvent: Sq,
          sessionInfo: kk => {
            var Fk;
            return (null === (Fk = jl) || void 0 === Fk ? void 0 : Fk.conn) === kk ? jl.info : null
          },
          onEventOverflow: Ea,
          replayShaderPack: kk => {
            var Fk;
            null === (Fk = Cy) || void 0 === Fk || Fk.replay(kk)
          },
          hasPackModel: kk => {
            var Fk, Ik;
            return null !== (null !== (Fk = null === (Ik = Zq()) || void 0 === Ik ? void 0 : Ik.modelUrl(kk)) && void 0 !== Fk ? Fk : null)
          },
          beforeWrite: () => (!hy && Ek.rings.net.cursor > 0 && Oq(Ek, !1, "all"), !Ek.isStopped),
          beforeOp: () => (!hy && Ek.netWrittenSinceFrame > 0 && Oq(Ek, !1, "budget"), !Ek.isStopped)
        }), (0, sk.F)({
          lockPointer: () => {
            if (!gI(Hk)) return !1;
            try {
              Promise.resolve(Hk.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, bI.d)()
          },
          leaveGame: () => {
            va()
          },
          canvas: () => Hk
        }), Ey = (0, sk.y)((() => {
          var kk;
          const Fk = (0, Vk.k)();
          null === (kk = (0, Vk.y)()) || void 0 === kk || kk.followCursorAim(!0 === (null === Fk || void 0 === Fk ? void 0 : Fk.isSessionLive) ? Fk : null)
        })), Tl && Ek.setUiPrefs(Tl);
        il && Ek.setEnvPrefs(il);
        yl && Ek.setLookPrefs(yl);
        const Ok = xT ? PT(xT.preventMovement) : null;
        Ok && Na(Ok);
        const nk = (0, PI.i)(),
          Gk = (0, PI.g)(Ek, nk);
        Sy = nk.basis, (0, GI.n)(null === Gk ? null : (0, xI.r)(Gk)), zy = Gk;
        const pk = (0, LF.d)();
        let uk = 1 / 0,
          bk = !0,
          Rk = nk.shedFootprintBytes;
        const Uk = new AX.b(pk, (() => Sk.fH()), (kk => {
          Ek.crash(TI.l, kk)
        }));
        sy = Uk, Vy = Uk, null !== Gk && Uk.setCeiling(Math.min((0, AX.i)(Gk), uk, (0, PI.m)()));
        if (bk) {
          Uk.setShed((kk => {
            const Fk = Ek.shedMemory("joinReserve" !== kk);
            return null !== Fk && (null === zy || Fk < zy) && (zy = Fk, (0, GI.n)((0, xI.r)(Fk))), Fk
          }), ((kk, Fk, Ik) => {
            1 === Fk ? (0, VI.reportMemoryShed)(kk, Ik, Ly) : console.warn(`${vi} wasm memory: shed again (${kk}): shed ${Fk}`, Ik.wasmMemoryShed)
          }), (() => Ek.addDistanceInUse()));
          const kk = (0, XI.B)(zk);
          Uk.setFootprint(new NT(Rk, {
            storedChunks: () => Sk.kXk(),
            gpuBytes: () => {
              var Fk;
              return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.FXk()) && void 0 !== Fk ? Fk : 0
            },
            jsHeapBytes: CT
          }))
        }
        window.addEventListener("pagehide", (() => {
          sy === Uk && (Uk.refreshStats(), rq(Uk))
        })), window.addEventListener("pagehide", vq), window.addEventListener("pagehide", Eq), !1;
        const [Ck, Nk] = (0, oI.e)();
        Yl = (0, EI.c)((kk => Ek.setChunkAddDistance(kk.horizontal, kk.vertical)), {
          horizontal: Ck,
          vertical: Nk
        }), Ek.setAmbientOcclusion(!0 !== pI.j.getItem("disableAmbientOcclusion")), Ek.setPoseLod(!0 !== pI.j.getItem(yF.Q)), (0, cT.o)("look") && (Ek.setDebugLog(fF.P.Look, !0), Ek.setDebugLog(fF.P.CameraSet, !0), (0, fT.j)("wasm", {
          look: () => Ek.takeDebugLog(fF.P.Look),
          cameraSets: () => Ek.takeDebugLog(fF.P.CameraSet)
        }));
        (0, cT.o)("remesh") && (Ek.setDebugLog(fF.P.Remesh, !0), ck = () => Ek.takeDebugLog(fF.P.Remesh), gT = new AT((0, BT.n)(), ck));
        var ck;
        const Wk = function(kk, Fk, Ik, Xk) {
          const Tk = new tX,
            ik = kk => pI.j.getItem(kk);
          Tk.sync(ik, Fk), (0, EF._)();
          const yk = (0, ak.i)("customBindingsChanged", (() => {
            Tk.sync(ik, Fk)
          }));
          (0, RI.k)(Fk);
          const lk = new Set,
            qk = (0, sk.y)((() => {
              var kk;
              lk.size > 0 && wX() && !0 === (null === (kk = (0, Vk.k)()) || void 0 === kk ? void 0 : kk.localPlayerAlive()) && ak.g.GL("usedKeyboard")
            })),
            Lk = IX.c.heldSizer((() => (0, GF.i)(kk))),
            tk = FX(kk, Fk, {
              prevents: kk => Tk.prevents(kk),
              keyPressed: kk => {
                Tk.moves(kk) && (lk.add(kk), wX() && ak.g.GL("usedKeyboard"))
              },
              keyReleased: kk => {
                lk.delete(kk)
              },
              keysReleased: () => {
                lk.clear()
              },
              resized: () => {
                jX.l.measure(kk.getBoundingClientRect()), (0, XX.l)()
              },
              sizeCanvas: Lk,
              watchRenderScale: Fk => {
                const Ik = (0, GF.l)(kk, Fk),
                  Xk = IX.c.onRelease(Fk);
                return () => {
                  Ik(), Xk()
                }
              },
              touchStarting: () => {
                jX.l.measure(kk.getBoundingClientRect())
              },
              viewShown: Ik,
              touchUiShown: () => Ak.d.get("isTouchScreen"),
              ctrlCombosAreGames: wX,
              inspect: (kk, Fk, Ik) => {
                Tk.checks(Fk, Ik) && Xk(kk)
              },
              canLock: () => gI(kk)
            }),
            Zk = (0, LI.e)(Fk);
          return () => {
            yk(), qk(), (0, RI.k)(null), Zk(), tk()
          }
        }(Hk, ((kk, Fk, Ik, Xk, Tk) => {
          Dq(Ek, (() => {
            Ek.rings.input.writeRecord(kk, Fk, Ik, Xk, Tk)
          })), !ry && (0, KX.e)(kk, Tk) && (0, KX.b)((() => {
            iy !== Ek || la || Ek.isStopped || !Cq() || Oq(Ek, !1, "budget", !1)
          }))
        }), (() => Xa), (kk => {
          var Fk;
          null === (Fk = vy) || void 0 === Fk || Fk.onEvent(kk)
        }));
        if (Ek.isStopped) return Wk(), null;
        xy = Wk;
        const fk = () => !Ek.isStopped && !ia;
        if (Ek.isStopped) return null;
        (0, aF.N)((() => {
          "call" === (0, aF.n)() && Ek.crash(TI.q, (0, aF.m)())
        }));
        const Bk = (0, TI.I)(Ek.rings.worker, (() => {
          Oq(Ek, !1, document.hidden ? "all" : "budget")
        }));
        Py = function(kk, Fk) {
          return Mq().then((kk => {
            let {
              prefetchWorldgenWorker: Fk
            } = kk;
            Fk()
          }), (() => {})), new DT({
            module: (0, aF.u)(),
            decodeSettings: kk => {
              const Fk = (0, Vk.y)();
              if (null === Fk) throw new Error("no game code to decode the world-gen seed with");
              return Fk.decodeMapSettings(kk)
            },
            loadWorker: kL,
            onMapWithoutWorldgen: () => {
              FL((kk => {
                let {
                  stopWorldgenWorkerPrefetch: Fk
                } = kk;
                Fk()
              }))
            },
            onLoadFailed: kk => {
              (0, VI.reportWorldgenLoadFailure)(kk, Ly)
            },
            onWorkerLost: kk => {
              (0, VI.reportWorkerLost)(TI.x, kk, Ly)
            },
            onStartTimeout: kk => {
              (0, VI.reportWorkerStartTimeout)(TI.x, kk, Ly)
            },
            onGaveUp: kk => {
              (0, VI.reportWorldgenGaveUp)(kk, Ly)
            },
            onMemoryStats: kk => {
              var Fk;
              null === (Fk = sy) || void 0 === Fk || Fk.noteWorldgen(kk)
            },
            onMemoryGone: () => {
              var kk;
              null === (kk = sy) || void 0 === kk || kk.worldgenGone()
            },
            write: (Ik, Xk, Tk, ik, yk) => {
              Dq(kk, (() => {
                kk.rings.worker.writeWorkerRecord(Ik, Xk, Tk, 0, ik, yk) || kk.crash(TI.x, `a world-gen record of kind ${Xk} did not fit the worker-in ring`)
              })), Fk()
            }
          })
        }(Ek, Bk), Qy = function(kk, Fk) {
          return new dX({
            module: (0, aF.u)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: kk
              }, Fk] = await Promise.all([Ik.e(40).then((() => Ik(51017))), Promise.resolve().then((() => Ik(95))).then((kk => {
                let {
                  isMobile: Fk
                } = kk;
                return Fk()
              }), (() => !1))]);
              return {
                create: kk,
                count: (0, VF.d)(navigator.hardwareConcurrency, Fk),
                maxKeptLightStates: Fk ? 1 : void 0
              }
            },
            write: (Ik, Xk, Tk, ik, yk, lk) => {
              (0, XX.j)(), Dq(kk, (() => {
                kk.rings.worker.writeWorkerRecord(Ik, Xk, Tk, ik, yk, lk) || kk.crash(TI.m, `a meshing record of kind ${Xk} did not fit the worker-in ring`)
              })), Fk()
            },
            onWorkerLost: kk => {
              (0, VI.reportWorkerLost)(TI.m, kk, Ly)
            },
            onLightFault: (kk, Fk) => {
              (0, VI.reportLightFault)(kk, Fk, Ly)
            },
            onStartTimeout: kk => {
              (0, VI.reportWorkerStartTimeout)(TI.m, kk, Ly)
            },
            onMemoryStats: (kk, Fk) => {
              var Ik;
              null === (Ik = sy) || void 0 === Ik || Ik.noteMeshWorker(kk, Fk)
            },
            onMemoryGone: kk => {
              var Fk;
              null === (Fk = sy) || void 0 === Fk || Fk.meshWorkerGone(kk)
            },
            fail: (Fk, Ik) => {
              const Xk = () => {
                kk.crash(TI.m, void 0 === Ik ? Fk : new Error(Fk, {
                  cause: Ik
                }))
              };
              void 0 !== Ik ? iL({
                site: TI.m,
                error: Ik
              }, Xk) : Xk()
            }
          })
        }(Ek, Bk), na();
        const gk = (0, yT.j)(QF.clientSideServerUrls.staticUrl, {
            onTableFailed: kk => {
              iL({
                site: VI.MODEL_FEED_SITE,
                error: kk
              }, (() => {}), {
                stillWanted: fk
              })
            },
            packUrl: kk => {
              var Fk, Ik;
              return null !== (Fk = null === (Ik = Zq()) || void 0 === Ik ? void 0 : Ik.modelUrl(kk)) && void 0 !== Fk ? Fk : null
            }
          }),
          mk = function(kk, Fk, Ik) {
            const Xk = Ik => {
              var Xk, Tk;
              return null !== (Xk = null === (Tk = Fk()) || void 0 === Tk ? void 0 : Tk.drawnUrl(Ik)) && void 0 !== Xk ? Xk : kk.url(Ik)
            };
            return (0, TT.m)((0, mX.o)(Xk), Ik)
          }(gk, (() => Oy), Zq),
          hk = new mX.g(mk, (kk => {
            console.warn(`${vi} image ${kk.key.kind}:${kk.key.index}:${kk.key.word} failed`, kk.error)
          }));
        by = hk, Ry = new FT(Ek, mk, ((kk, Fk) => {
          void 0 === Fk ? console.warn(`${vi} ${kk}`) : eq(kk, Fk)
        }));
        const rk = new XT.h(gk, function(kk, Fk) {
          let Xk = !1,
            Tk = null,
            ik = null;
          const yk = {
              onUnavailable: (Ik, Xk) => {
                ik ??= iL({
                  site: VI.MODEL_POOL_SITE,
                  error: Ik,
                  urls: Xk
                }, (() => {
                  (0, VI.reportModelPoolFailure)(Ik, kk)
                }), {
                  stillWanted: Fk
                })
              },
              onDecoderFailed: (Ik, Xk) => {
                const Tk = () => {
                  (0, VI.reportDracoDecoderFailure)(Ik, kk)
                };
                void 0 !== Xk ? iL({
                  site: VI.MODEL_POOL_SITE,
                  error: Ik,
                  urls: Xk
                }, Tk, {
                  stillWanted: Fk
                }) : Tk()
              },
              onWorkerLost: Fk => {
                (0, VI.reportWorkerLost)(VI.MODEL_POOL_SITE, Fk, kk)
              },
              onModuleRetry: (Fk, Ik) => {
                (0, VI.reportModelsModuleRetry)(Fk, Ik, kk)
              }
            },
            lk = Ik.e(42).then((() => Ik(51022))).then((kk => {
              let {
                pageModelPool: Fk
              } = kk;
              if (Xk) return null;
              const Ik = Fk(yk);
              return Tk = Ik.unlisten, ny = Ik.pool, na(), Ik.pool
            }), (kk => (Xk || yk.onUnavailable(kk, void 0), null)));
          return Gy = () => {
            var kk;
            Xk = !0, null === (kk = Tk) || void 0 === kk || kk(), ny = null
          }, (kk, Fk) => lk.then((Ik => {
            var Xk;
            return null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.build(kk, Fk)) && void 0 !== Xk ? Xk : (0, lT.q)(kk, "the model workers did not load")
          })).then((kk => null !== ik && (0, lT.k)(kk) ? ik.then((() => kk)) : kk))
        }(vk, fk), (kk => {
          kk.startup ? (fq(), iL({
            site: VI.MODEL_FEED_SITE,
            error: kk.error,
            urls: "" === kk.url ? void 0 : [kk.url]
          }, (() => {
            (0, VI.reportModelFailure)(kk, vk)
          }))) : (0, VI.reportModelFailure)(kk, vk)
        }), {
          onWritten: (kk, Fk) => {
            hk.glbWritten(kk, Fk)
          },
          onTaken: (kk, Fk) => {
            hk.glbTaken(kk, Fk)
          },
          onPackFileFailed: (kk, Fk) => {
            console.warn(`${vi} the texture pack's model file ${kk} failed: the shipped one loads`, Fk)
          }
        });
        Oy = rk;
        const Dk = new DX.g(Ek);
        ay = Dk, Dk.swap((kk => {
          const Fk = () => {
            (0, VI.reportTerrainTextureFailure)(kk, vk)
          };
          if (Al) return void Fk();
          const Ik = () => !Al,
            Xk = null === kk.url ? void 0 : [kk.url];
          iL({
            site: TI.v,
            error: kk.error,
            urls: Xk
          }, Fk, {
            stillWanted: Ik
          })
        })).then((kk => {
          null !== kk && (kk || Ek.isStopped || console.warn(`${vi} the core refused the terrain textures: terrain draws untextured`), fy(Ek))
        }));
        const Mk = new cF(Ek, ((kk, Fk) => {
          console.warn(`${vi} ${kk}`, ...void 0 === Fk ? [] : [Fk])
        }));
        Mk.feed(), null !== Zk && function(kk, Fk, Xk, Tk, ik, yk) {
          let lk = null,
            qk = null,
            Lk = !1;
          const tk = {
            textures: null,
            stop: () => {
              var kk, Fk;
              Lk = !0, null === (kk = qk) || void 0 === kk || kk(), null === (Fk = lk) || void 0 === Fk || Fk(), iT.b.setSettled(null), null !== ty && wa.clear(ty)
            }
          };
          ly = tk, qk = wq().follow((qk => {
            null !== qk && Promise.all([Ik.e(201), Ik.e(45)]).then((() => Ik(50985))).then((Ik => {
              let {
                PackTextures: Zk
              } = Ik;
              if (Lk || kk.isStopped) return;
              const jk = new Zk({
                feed: qk,
                terrain: Fk,
                backend: Xk,
                stopped: () => kk.isStopped,
                landed: () => {
                  fy(kk)
                },
                packSwapped: () => {
                  (0, TT.i)(Tk), yk.feed((() => async function(kk) {
                    const Fk = null === kk ? null : await kk.averageColours;
                    return null === Fk ? WF() : NF(Fk)
                  }(jk.assets))), (0, IT.m)(jk.files()), ik.refresh().then((kk => {
                    null !== kk && console.info(`${vi} texture pack models: ${kk.resent} of ${kk.delivered} files written again, ${kk.refetched} refetched`)
                  }))
                },
                settled: (kk, Fk, Ik) => {
                  var Xk;
                  (iT.b.setSettled({
                    state: kk,
                    files: Fk
                  }), function(kk, Fk, Ik) {
                    const Xk = null === kk.gameSource && (0, zI.i)(kk.pack);
                    if (null === Fk) return;
                    const Tk = (0, sI.g)(Fk.error),
                      ik = Xk ? "settings" : Fk.source;
                    ak.g.GL(sI.c, {
                      failure: Tk,
                      source: ik,
                      pack: SI(kk)
                    }), (0, VI.reportTexturePackKeptOut)(ik, Tk, Fk.error, Ik)
                  }(kk, Ik, Ly), null === Ik) && function(kk) {
                    const Fk = ty;
                    null !== Fk && wa.apply(Fk, kk).then((Fk => {
                      Fk && kk && console.info(`${vi} the texture pack's animations are in (${Object.keys(kk).length} files)`)
                    }))
                  }(null === (Xk = kk.pack) || void 0 === Xk ? void 0 : Xk.animations)
                },
                settling: () => {
                  iT.b.setSettled(null)
                },
                warn: eq,
                maxTextureSize: () => Promise.resolve((0, XI.S)(document.createElement("canvas")))
              });
              tk.textures = jk, lk = jk.start()
            }), (kk => {
              console.warn(`${vi} the texture pack's terrain didn't load: the built atlas stays`, kk)
            }))
          }))
        }(Ek, Dk, Zk, hk, rk, Mk);
        const kF = () => {
            Ek.setTextureLayers("")
          },
          FF = kk => {
            (KF ??= Ik.e(53).then((() => Ik(51028))).then((kk => {
              let {
                TEXTURE_NAMES: Fk
              } = kk;
              return Fk
            }), (kk => {
              throw KF = null, kk
            })), KF).then((kk => {
              Ek.setTextureLayers(kk) || Ek.isStopped || (console.warn(`${vi} the core refused the texture names: textured Boxes draw textureNotFound`), kF())
            }), (Fk => {
              if (Ek.isStopped) return;
              const [Ik, ...Xk] = kk;
              void 0 === Ik ? iL({
                site: VI.TEXTURE_NAMES_SITE,
                error: Fk
              }, (() => {
                console.warn(`${vi} the texture names didn't load, so textured Boxes draw textureNotFound`, Fk), kF()
              }), {
                stillWanted: fk
              }) : setTimeout((() => {
                FF(Xk)
              }), Ik)
            }))
          };
        if (FF(gi), null !== Zk && !await async function(kk, Fk, Ik, Xk, ik, yk) {
            var lk;
            const ak = (0, XI.B)(Ik);
            if (null === ak) return kk.crash(Oi, new Error(`this ${Xk} build has no openRenderer`)), !1;
            let qk;
            pl = ak;
            try {
              var Lk, tk, Zk, jk;
              const Tk = null !== (Lk = null === (tk = Xy) || void 0 === tk ? void 0 : tk.pagePreviews()) && void 0 !== Lk ? Lk : null,
                lk = null !== (Zk = null === (jk = Xy) || void 0 === jk ? void 0 : jk.previewModule(Ik)) && void 0 !== Zk ? Zk : null;
              if (null === Tk || null === lk) {
                null === Tk || void 0 === Tk || Tk.endSession(!1), qk = (0, GF.d)().sampleCount, await (0, XI.e)(Fk, ak, yk, Lq, qk, await ik);
                const kk = (0, XI.g)(Ik);
                null === kk && console.warn(`${vi} this ${Xk} build has no image registry: sky and model images won't show`), (0, rX.f)(kk)
              } else {
                (0, eT.e)() && await (0, Yk.k)();
                const Ik = (0, eT.N)();
                if (null !== Ik) {
                  const Fk = (0, XI.N)(ak);
                  return kk.crash(VI.RENDER_RELOAD_SITE, new Error(`${Ik}${void 0===Fk?"":` (${Fk.message})`}`)), !1
                }
                qk = await Tk.bindSession(lk, Fk, (async kk => (0, XI.n)(ak, Oi, yk, kk, Lq, await ik)))
              }
            } catch (Tk) {
              return kk.crash(Oi, Tk), !1
            }(function(kk, Fk) {
              const Ik = kk,
                {
                  requestCapture: Xk,
                  takeCapture: Tk
                } = Ik;
              if ("function" !== typeof Xk || "function" !== typeof Tk) return;
              const ik = {
                request() {
                  Xk.call(Ik, Fk)
                },
                take() {
                  var kk;
                  return null !== (kk = Tk.call(Ik)) && void 0 !== kk ? kk : null
                }
              };
              window[sT] = ik
            })(Fk, qk), cl = qk, nl = !0;
            const ek = performance.now();
            return Gl.boundAtMs = null !== (lk = (0, eT.O)()) && void 0 !== lk ? lk : ek, Gl.indirectHangs = (0, eT.C)(), Gl.restoresSkipped = (0, eT.P)(), console.info(`${vi} ${Xk} renderer bound at ${Math.round(ek)} ms`), !kk.isStopped
          }(Ek, Sk, zk, Zk, ek, Hk)) return null;
        if (null !== Zk) {
          var IF, XF, TF;
          (0, tF.L)(Zk);
          const kk = () => !Ek.isStopped && Uq();
          Ik.e(194).then((() => Ik(34044))).then((Fk => {
            let {
              devTools: Ik
            } = Fk;
            Ek.isStopped || Ik.setHost(function(kk) {
              return {
                tools: jT,
                async downloadScene(Fk, Ik) {
                  let {
                    width: Xk,
                    height: Tk,
                    colouring: ik
                  } = Ik;
                  "screenshot" === Fk && null === ik ? await (0, LT.f)(kk, Xk, Tk) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (Fk, Ik, Xk) => (0, LT.c)(kk, Fk, Ik, Xk)
              }
            }(function(kk, Fk) {
              return {
                canvas: kk,
                maxTextureSize: tT,
                drawing: Fk,
                resize: (kk, Fk, Ik) => {
                  (0, RI.q)(fF.rb.Resize, 0, kk / Ik, Fk / Ik, (0, RI.h)(Ik))
                },
                restoreSize: () => {
                  const Fk = (0, GF.i)(kk);
                  null !== Fk && (0, RI.q)(fF.rb.Resize, 0, Fk.cssWidth, Fk.cssHeight, (0, RI.h)(Fk.renderScale))
                },
                onFrameDrawn: kk => (ZT.add(kk), () => {
                  ZT.delete(kk)
                })
              }
            }(Hk, kk)))
          }), (kk => {
            console.warn(`${vi} the developer tools didn't load: no captures this session`, kk)
          }));
          const Fk = "webgpu" === Zk && null !== (IF = null === Lk || void 0 === Lk || null === (XF = Lk.adapter) || void 0 === XF ? void 0 : XF.vendor) && void 0 !== IF ? IF : null;
          Wl = {
            backend: Zk,
            canvas: Hk,
            fallbackReason: null !== (TF = null === Lk || void 0 === Lk ? void 0 : Lk.reason) && void 0 !== TF ? TF : null,
            adapterVendor: Fk
          }, Qq();
          try {
            (0, XX.o)(Zk, Hk, Fk)
          } catch (Tk) {
            (0, XX.s)(), console.error(`${vi} the quality steps didn't start`, Tk)
          }
        }
        const {
          storagePullBreaks: iF,
          splitPassBreaks: lF
        } = await ek;
        lF && console.warn(`${vi} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const jF = (0, dk.g)(Lk, (0, vF.l)());
        if ((0, cT.o)("webgpuloss")) {
          var xF, PF;
          const kk = {
            backend: Zk,
            reason: null !== (xF = null === Lk || void 0 === Lk ? void 0 : Lk.reason) && void 0 !== xF ? xF : null,
            source: null !== (PF = null === Lk || void 0 === Lk ? void 0 : Lk.source) && void 0 !== PF ? PF : null,
            storagePullBreaks: iF,
            noWebGpu: jF.messageKey
          };
          (0, WT.c)((Fk => {
            Fk.noteWasmPick(kk)
          }))
        }
        const sF = "webgpu" === Zk;
        if (Cy = (0, dk.i)(sF ? Ek : null, sF && null !== (lk = null === (qk = Xy) || void 0 === qk ? void 0 : qk.pagePreviews().ke) && void 0 !== lk ? lk : null, jF, eq), la) return null;
        if (Uk.reserveAtJoin((0, AX.h)(null !== Gk && void 0 !== Gk ? Gk : xI.h)), Ek.isStopped) return null;
        const zF = kk => {
          if (Ay = performance.now(), gy = !1, null !== fl) try {
            fl.animationFrame(kk)
          } catch (Tk) {
            zq(Tk)
          }
          if (function(kk, Fk) {
              return Fk && !la && !ry && Cq() && Uq() && kk.framePaces(performance.now())
            }(Ek, Xa)) {
            if (Ek.writePendingInput(), (0, sk.g)(kk, nq), sq(!1, kk), null !== fl) try {
              fl.framePaced()
            } catch (Tk) {
              zq(Tk)
            }
            requestAnimationFrame(zF)
          } else Oq(Ek, Xa, "budget") && ((0, OF.f)(Ek.lastFrameKind) && Uq() && (0, sk.g)(kk, nq), sq(Xa && ka, kk), Fa.frame(Ek.lastFrameKind, Xa && Uq(), kk), (0, OF.d)(Ek.lastFrameKind) && vF.F.drew(), Yq(Ek), Uk.afterFrame(), requestAnimationFrame(zF))
        };
        requestAnimationFrame(zF);
        return function(kk) {
          if (kk.has("inputLog") && (0, ZX.g)((kk => {
              let {
                action: Fk,
                down: Ik,
                press: Xk
              } = kk;
              console.info(`${eX} input ${Fk} ${Ik?"down":"up"} press ${Xk} at ${performance.now().toFixed(1)}`)
            })), kk.has("inputDump")) {
            const kk = [];
            HX = kk, Object.assign(window, {
              bloxdInputDump: () => kk.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), oy = function(kk) {
          let Fk = null;
          const Ik = () => {
              null !== Fk && (clearInterval(Fk), Fk = null)
            },
            Xk = () => {
              document.hidden ? Fk ??= setInterval((() => {
                XL(kk) || Ik()
              }), Ai) : Ik()
            };
          return document.addEventListener("visibilitychange", Xk), Xk(), () => {
            Ik(), document.removeEventListener("visibilitychange", Xk)
          }
        }(Ek), Ek
      }(Fk).then((kk => {
        var Fk;
        (Xk(Ly), ey(null !== kk), null !== kk && (vT = performance.now()), Zy(kk), null === kk) ? null === (Fk = Xy) || void 0 === Fk || Fk.pagePreviews().endSession(null === (0, aF.n)()): Wy("booted")
      }), (kk => {
        Xk(Ly), ey(!1), Zy(null), Bq({
          site: ni,
          error: kk,
          header: null
        }, Ly)
      }))
    }

    function ea() {
      const kk = ty;
      null !== kk && aa().then((Fk => {
        let {
          pageBuiltInAnimationPack: Ik
        } = Fk;
        Ik().provide(kk)
      }), (kk => {
        console.warn(`${vi} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, kk)
      }))
    }
    const wa = new class {
      constructor(kk) {
        this.deps = kk, this.latest = 0, this.eq = null
      }
      apply(kk, Fk) {
        return this.load(kk, Fk, 0)
      }
      async load(kk, Fk, Ik) {
        var Xk;
        const Tk = ++this.latest,
          ik = this.deps.compiler;
        if (void 0 === Fk || null === Fk || "object" !== typeof Fk || 0 === Object.keys(Fk).length || null === ik) return this.drop(kk), !1;
        if ((null === (Xk = this.eq) || void 0 === Xk ? void 0 : Xk.module) === kk && (0, DF.ce)(this.eq.files, Fk)) return !1;
        try {
          const [Ik, Xk] = await Promise.all([ik(), this.deps.builtIns()]);
          if (Tk !== this.latest) return !1;
          const yk = await Ik(Fk, II, {
            builtIns: Xk
          });
          if (Tk !== this.latest) return !1;
          const lk = this.call(kk, yk);
          if (void 0 === lk) throw new FI("the compiled animations didn't read against the built-in pack");
          return this.eq = {
              module: kk,
              files: Fk
            },
            function(kk) {
              for (let Fk = 0; Fk + 2 < kk.length; Fk += 3) {
                ("error" === kk[Fk] ? console.error : console.warn)(`Animation for the texture pack: ${kk[Fk+1]}: ${kk[Fk+2]}`)
              }
            }(lk), !0
        } catch (lk) {
          var yk;
          if (Tk !== this.latest) return !1;
          this.drop(kk), 0 === Ik && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", lk);
          const Xk = (null !== (yk = this.deps.retryAfterMs) && void 0 !== yk ? yk : kI)[Ik];
          return void 0 === Xk || lk instanceof FI || (0, MF.f)(kk) || setTimeout((() => {
            Tk === this.latest && this.load(kk, Fk, Ik + 1)
          }), Xk), !1
        }
      }
      call(kk, Fk) {
        try {
          return kk.rIk(Fk)
        } catch (Ik) {
          throw (0, MF.g)(kk, Ik), Ik
        }
      }
      clear(kk) {
        this.latest++, this.drop(kk)
      }
      drop(kk) {
        const Fk = this.eq;
        if (this.eq = null, (null === Fk || void 0 === Fk ? void 0 : Fk.module) === kk && !(0, MF.f)(kk)) try {
          this.call(kk, null)
        } catch {}
      }
    }({
      compiler: gF.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: kk
        } = await aa();
        return kk().whenSet()
      },
      warn: eq
    });
    async function Ha(kk, Fk) {
      let Xk = !1;
      await Ja({
        matchmake: async () => {
          const {
            guestJoinTarget: Tk,
            guestJoinWithPack: ik
          } = await Ik.e(272).then((() => Ik(50967)));
          return Xk ? Tk(kk, Fk, Jq()) : (Xk = !0, ik(kk, Fk, (Fk => xq(kk, Fk)), Jq))
        },
        onFailure: kk => {
          (0, VI.showJoinFailure)(kk, Ly)
        },
        rejoin: ua,
        invalidateTrafficCode: ba
      })
    }
    async function Ja(kk) {
      let {
        matchmake: Fk,
        onFailure: Ik,
        rejoin: Tk,
        invalidateTrafficCode: ik,
        pageReady: yk,
        signal: lk
      } = kk;
      const ak = () => !0 === (null === lk || void 0 === lk ? void 0 : lk.aborted);
      let qk;
      const Lk = iT.b.rejoinHold();
      Ll = null;
      const tk = (0, OI.P)("wasm", hq);
      let Zk = !1,
        jk = performance.now();
      try {
        if (!await wy) return {
          kind: "stopped"
        };
        if (ak()) return {
          kind: "iI"
        };
        qa().catch((() => {}));
        let kk = await Fk();
        var wk, Hk;
        if (jk = performance.now(), !ak()) mq(null !== (wk = null === (Hk = kk.target.session) || void 0 === Hk ? void 0 : Hk.gameNameWithVariation) && void 0 !== wk ? wk : null);
        const Ik = () => performance.now() - kk.matchedAt <= kk.freshMs,
          Xk = Pa(kk.target).catch((() => {}));
        Ik() && !ak() && (qk = new WX(kk.target, {
          signal: lk
        }));
        const ik = performance.now();
        if (null === await jy) return {
          kind: "stopped"
        };
        var Jk, xk;
        if (function(kk) {
            var Fk, Ik;
            if (VT.c.markGameEngineConstructed(), ET) return;
            ET = !0;
            const Xk = Math.max(kk, null !== (Fk = ST) && void 0 !== Fk ? Fk : kk);
            (0, zT.i)("ready", Math.max(0, (null !== (Ik = oT) && void 0 !== Ik ? Ik : Xk) - Xk) / 1e3)
          }(ik), !ak())
          if (null !== oT && null !== vT ? ((0, ek.r)("wasm_loaded", oT), (0, ek.r)("wasm_core_ready", vT)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), kk.target.session && (0, hT.c)(kk.target.session.gameNameWithVariation)) null === (Jk = Py) || void 0 === Jk || Jk.prestart();
        if (await Xk, !Ik() && !ak()) null === (xk = qk) || void 0 === xk || xk.rematched(), kk = await Fk(), jk = performance.now();
        if (ak()) return {
          kind: "iI"
        };
        const Lk = await async function(kk) {
          var Fk, Ik, Xk;
          let {
            signal: Tk,
            rejoin: ik = null,
            early: yk,
            pageReady: lk
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Tk && void 0 !== Tk && Tk.aborted) throw new DOMException("the join was left", "AbortError");
          const ak = (qk = Kl, Lk = performance.now(), null !== qk && Lk - qk < vX);
          var qk, Lk;
          Kl = null;
          const tk = new AbortController,
            Zk = null !== (Fk = null === (Ik = kk.session) || void 0 === Ik ? void 0 : Ik.gameNameWithVariation) && void 0 !== Fk ? Fk : null;
          mq(Zk), sa({
            controller: tk,
            game: Zk
          }), Ql = null, null === (Xk = zl) || void 0 === Xk || Xk.abort(), zl = null, ol = !1, vl = null, El.clear();
          const jk = () => {
            (0, sF.h)(tk, (0, sF.e)(Tk))
          };
          null === Tk || void 0 === Tk || Tk.addEventListener("abort", jk, {
            once: !0
          });
          try {
            var wk, Hk, Jk;
            const Fk = await jy;
            if (null === Fk || Fk.isStopped || la) throw new Error("no core is running to join a game with");
            if (kk.session && null !== Cy) {
              const Fk = await Ka(Cy.join(kk.session.gameNameWithVariation), tk.signal);
              if ((0, cT.o)("webgpuloss")) {
                const Ik = kk.session.gameNameWithVariation,
                  Xk = Cy.couldntRunInJoinedGame();
                (0, WT.c)((kk => kk.noteWasmJoin(Ik, Fk, Xk)))
              }
              if (null !== Fk) throw new dk.d(Fk)
            }
            const [, , , {
              joinRoom: Ik
            }] = await Ka(Promise.all([(0, Vk.n)(Fk), Pa(kk), null === lk || void 0 === lk ? void 0 : lk(), qa()]), tk.signal), Xk = kk.session, Tk = Xk ? {
              ...Ca,
              attachSocket: Fk => {
                const Ik = Ya(Fk, kk.endpoint);
                var Tk;
                null !== Ik && (jl = {
                  conn: Ik,
                  info: Xk
                }, null === (Tk = el) || void 0 === Tk || Tk(Xk.playerDbId));
                return Ik
              }
            } : Ca, qk = await Ik(Tk, kk, {
              signal: tk.signal,
              early: yk
            }).catch((kk => {
              throw function(kk) {
                if (!(kk instanceof bk.b)) return kk;
                if ("roomError" === kk.stage && null !== vl) return xa(new bk.b(kk.message, kk.stage, kk.code, vl), kk);
                const Fk = "closed" === kk.stage && null !== sl ? El.get(sl.conn) : void 0;
                return void 0 === Fk ? kk : xa(new bk.b(kk.message, kk.stage, Fk.code, null, kk.socketOpened), kk)
              }(kk)
            }));
            if (ql !== tk) throw qk.leave(), new DOMException("the join was left", "AbortError");
            za(qk), null === (wk = Qy) || void 0 === wk || wk.newGame();
            const Lk = function(kk) {
              var Fk, Ik;
              const {
                session: Xk
              } = kk, Tk = void 0 === Xk ? kk.joinOptions.lobbyName : Xk.lobbyName;
              return {
                endpoint: kk.endpoint,
                game: null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.gameNameWithVariation) && void 0 !== Fk ? Fk : kk.roomName,
                lobby: String(null !== Tk && void 0 !== Tk ? Tk : null),
                postCookies: null !== (Ik = kk.postCookies) && void 0 !== Ik ? Ik : null
              }
            }(kk);
            al.set(qk, Lk), UX(Lk);
            const Zk = performance.now(),
              jk = {
                conn: qk.conn,
                rejoin: ik,
                game: null !== (Hk = null === (Jk = kk.session) || void 0 === Jk ? void 0 : Jk.gameNameWithVariation) && void 0 !== Hk ? Hk : "",
                joinedAt: Zk,
                rejoinedAt: ak ? Zk : null,
                overflow: null
              };
            wl = jk,
              function(kk, Fk) {
                kq();
                const Ik = {
                  endpoint: Fk,
                  roomId: kk.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new wI({
                    reconnect: (kk, Fk, Xk) => async function(kk, Fk, Ik, Xk) {
                      const {
                        roomId: Tk,
                        roomToken: ik
                      } = Iq(kk, Fk), yk = iy;
                      if (null === yk || yk.isStopped || la) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: lk
                      } = await Ka(qa(), Ik), ak = {
                        ...Ca,
                        attachSocket: Fk => Hl !== kk || 0 === kk.heldConn ? (Fk.close(), null) : Ya(Fk, kk.endpoint, !0)
                      };
                      return lk(ak, kk.endpoint, Tk, ik, {
                        signal: Ik,
                        onAttached: Xk
                      })
                    }(Ik, kk, Fk, Xk),
                    releaseSeat: kk => {
                      !async function(kk, Fk) {
                        const {
                          roomId: Ik,
                          roomToken: Xk
                        } = Iq(kk, Fk);
                        try {
                          const {
                            leaveHeldSeat: Fk
                          } = await qa();
                          await Fk(kk.endpoint, Ik, Xk)
                        } catch (Tk) {
                          console.warn(`${vi} the held seat of a game left while it reconnected couldn't be released`, Tk)
                        }
                      }(Ik, kk)
                    },
                    isLive: () => Hl === Ik && null !== wl && !la,
                    sE: kk => {
                      Pl = kk, Ma()
                    },
                    onReconnected: kk => {
                      ! function(kk) {
                        const Fk = ll;
                        if (null !== Fk && Fk !== kk) {
                          const Ik = al.get(Fk);
                          void 0 !== Ik && al.set(kk, Ik), Ml === Fk && (Ml = kk), Fk.detach()
                        }
                        za(kk)
                      }(kk)
                    },
                    onGaveUp: (kk, Fk) => {
                      ! function(kk, Fk, Ik) {
                        var Xk, Tk;
                        console.warn(`${vi} gave up reconnecting (${Ik.reason}, ${Ik.attempts} attempts)`, Ik.lastError), (0, VI.reportReconnectGaveUp)(Ik, Ly);
                        const ik = null !== (Xk = null === (Tk = wl) || void 0 === Tk ? void 0 : Tk.rejoin) && void 0 !== Xk ? Xk : null;
                        Fq(kk, "gaveUp"), oa();
                        const yk = {
                          code: kk.dropCode,
                          name: null,
                          reason: fi,
                          canReconnect: !Fk,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        Ua(yk, Fk ? null : ik, !1, {
                          reasonKey: Bi,
                          canPlayAgain: Fk
                        })
                      }(Ik, kk, Fk)
                    }
                  })
                };
                Hl = Ik, null !== Jl && Jl.conn === kk.conn && Ik.resume.onInitialInfo(Jl)
              }(qk, kk.endpoint), performance.mark(bi), (0, ek.r)("wasm_joined", Zk), setTimeout((() => {
                ll === qk && (0, ek.i)()
              }), 0), ea(), console.info(`${vi} joined ${kk.roomName} as ${qk.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const xk = Ql;
            Ql = null, null !== xk && Oa(jk, xk.mask, xk.frames);
            const Pk = El.get(qk.conn);
            return El.clear(), void 0 !== Pk && (za(null), Ra(qk.conn, Pk.code, Pk.reason)), qk
          } finally {
            var xk;
            null === Tk || void 0 === Tk || Tk.removeEventListener("abort", jk), ql === tk && Va(ll, null), (null === (xk = sl) || void 0 === xk ? void 0 : xk.join) === tk && (sl = null)
          }
        }(kk.target, {
          signal: lk,
          rejoin: Tk(kk.target),
          early: qk,
          pageReady: yk
        });
        return Zk = !0, {
          kind: "joined",
          game: Lk
        }
      } catch (Kk) {
        if (Kk instanceof DOMException && "AbortError" === Kk.name || ak()) return {
          kind: "iI"
        };
        if (la) return {
          kind: "stopped"
        };
        if (ol && (ol = !1, await ik().catch((kk => {
            console.warn(`${vi} the cached traffic code could not be dropped`, kk)
          }))), null === await jy) return {
          kind: "stopped"
        };
        if (Kk instanceof dk.d) return Ik(Kk, performance.now() - jk), {
          kind: "failed",
          error: Kk,
          reloading: !1
        };
        if (Kk instanceof bk.b && Kk.code === Xk.d.wasmClientNotAllowed.code && Ia) return qq("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Kk,
          reloading: !0
        };
        const kk = Kk instanceof bk.b && Kk.code === Xk.d.outdatedVersion.code,
          Fk = () => null === ll,
          Tk = await iL({
            site: VI.JOIN_SITE,
            error: Kk,
            outdated: kk
          }, (() => {
            Ik(Kk, performance.now() - jk)
          }), {
            stillWanted: Fk
          });
        return {
          kind: "failed",
          error: Kk,
          reloading: Tk
        }
      } finally {
        var Pk;
        Zk || tk.end(), iT.b.releaseHold(Lk);
        const kk = null === (Pk = qk) || void 0 === Pk ? void 0 : Pk.release();
        kk && (0, VI.reportUnusedSeat)(kk, Ly)
      }
    }

    function xa(kk, Fk) {
      return kk.stack = Fk.stack, kk
    }

    function Pa(kk) {
      return kk.session ? (0, Vk.u)(qy, kk.session.gameNameWithVariation) : Promise.resolve()
    }

    function Ka(kk, Fk) {
      return (0, sF.m)(Fk), new Promise(((Ik, Xk) => {
        const Tk = () => {
          Xk((0, sF.e)(Fk))
        };
        Fk.addEventListener("abort", Tk, {
          once: !0
        }), kk.then((kk => {
          Fk.removeEventListener("abort", Tk), Ik(kk)
        }), (kk => {
          Fk.removeEventListener("abort", Tk), Xk(kk)
        }))
      }))
    }

    function Qa() {
      sa(null)
    }

    function sa(kk) {
      var Fk, Ik, Xk;
      (function() {
        const kk = Hl;
        null !== kk && Fq(kk, "left")
      }(), null === Jy || Jy.left) || (Jy.left = !0, null === (Xk = (0, Vk.k)()) || void 0 === Xk || Xk.socketLeft(), (0, Zk.s)({
        websocketUrl: null
      }));
      ql && (0, sF.h)(ql, new DOMException("the join was left", "AbortError")), oa(null !== kk), null === (Fk = Cy) || void 0 === Fk || Fk.leave();
      const Tk = ll;
      null !== kk && iT.b.setGame(kk.game), Va(null, null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.controller) && void 0 !== Ik ? Ik : null), null === Tk || void 0 === Tk || Tk.leave(), Sa(0), (0, xF.i)()
    }

    function Va(kk, Fk) {
      ll = kk, ql = Fk, null === ll && null === ql && iT.b.setGame(void 0)
    }

    function za(kk) {
      Va(kk, ql)
    }

    function Sa(kk) {
      const Fk = iy;
      return null !== ri && !la && null !== Fk && !Fk.isStopped && (!!ri(bk.g, 0, (0, bk.v)(kk)) && (kl = !0, 0 === kk || ry || Oq(Fk, !1, "all"), !0))
    }

    function oa() {
      var kk, Fk;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, OI.g)();
      const Ik = null !== (kk = null === (Fk = wl) || void 0 === Fk ? void 0 : Fk.overflow) && void 0 !== kk ? kk : null;
      wl = null, null !== Ik && (0, VI.reportEventOverflow)(Ik, Ly)
    }

    function va() {
      null !== ll || null !== ql ? Qa() : Aa()
    }

    function Ea(kk, Fk) {
      console.warn(`${vi} the event buffer refused records in ${Fk} frames (categories ${kk})`), la || (null !== wl ? Oa(wl, kk, Fk) : null !== ql && function(kk, Fk, Ik) {
        var Xk;
        const Tk = function(kk, Fk) {
          return null === kk ? "drop" : kk.activated ? "keep" : 0 !== (Fk & BF.x.NetSession) ? "fail" : "drop"
        }((null === (Xk = sl) || void 0 === Xk ? void 0 : Xk.join) === kk ? sl : null, Fk);
        "keep" === Tk ? Ql = {
          mask: Fk,
          frames: Ik
        } : "fail" === Tk && (0, sF.h)(kk, new Error("the join's net session was lost to an event overflow"))
      }(ql, kk, Fk))
    }

    function Oa(kk, Fk, Ik) {
      const Xk = kk.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Xk.frames += Ik, Xk.acks++, Xk.mask |= Fk;
      const Tk = function(kk, Fk, Ik) {
        if (0 === (kk & BF.x.NetSession)) return "none";
        const Xk = null !== Fk.rejoinedAt && Ik - Fk.rejoinedAt < EX;
        return null === Fk.rejoin || Xk ? "fail" : "rejoin"
      }(Fk, kk, performance.now());
      "none" !== Tk && queueMicrotask((() => {
        if (wl !== kk) return;
        const Fk = "rejoin" === Tk && performance.now() - Vl >= uk.e;
        Xk.outcome = Fk ? "rejoined" : "failed", Ua(function(kk, Fk) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: kk,
            automaticallyReconnect: Fk,
            requiresRefresh: !1
          }
        }(null !== kk.rejoin, Fk), kk.rejoin, Fk), Qa(), Fk && (Kl = performance.now())
      }))
    }

    function na() {
      Ia && function(kk, Fk) {
        let {
          mesh: Ik,
          worldgen: Xk,
          modelPool: Tk
        } = kk;
        "landingPage" === Fk ? (null === Ik || void 0 === Ik || Ik.stopWorkers(), null === Xk || void 0 === Xk || Xk.stopWorker(), null === Tk || void 0 === Tk || Tk.stopWorkers()) : ((0, Ak.g)(Fk) || "inGame" === Fk) && (null === Ik || void 0 === Ik || Ik.restartWorkers(), null === Tk || void 0 === Tk || Tk.startWorkers())
      }({
        mesh: Qy,
        worldgen: Py,
        modelPool: ny
      }, Ak.d.get("gameState"))
    }

    function Ga(kk) {
      Xa = kk, Ta && pa(Ta, kk)
    }

    function pa(kk, Fk) {
      kk.style.visibility = Fk ? "visible" : "hidden"
    }

    function ua(kk) {
      var Fk;
      const Ik = kk.roomName,
        Xk = null !== (Fk = kk.joinOptions.lobbyName) && void 0 !== Fk ? Fk : null;
      return () => {
        Ha(Ik, Xk)
      }
    }

    function ba() {
      return Ik.e(272).then((() => Ik(50967))).then((kk => {
        let {
          invalidateGuestTrafficCode: Fk
        } = kk;
        return Fk()
      })).catch((kk => {
        console.warn(`${vi} the cached traffic code could not be dropped`, kk)
      }))
    }

    function Ra(kk, Fk, Ik) {
      var Tk, ik;
      let yk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (la) return;
      if ((null === (Tk = wl) || void 0 === Tk ? void 0 : Tk.conn) !== kk) return void(null !== ql && El.set(kk, {
        code: Fk,
        reason: Ik
      }));
      const {
        rejoin: lk,
        game: ak,
        joinedAt: qk
      } = wl;
      oa(), kq();
      const Lk = (0, uk.l)(Fk, (0, nX.g)(kk));
      if (console.info(`${vi} the game's connection closed with code ${Fk} (${null!==(ik=Lk.name)&&void 0!==ik?ik:"unrecognised"})`), Fk === Xk.d.gameOrPluginKick.code || yk || (0, VI.reportDisconnect)(Lk, Ly, {
          closeReason: Ik,
          sinceJoinedMs: performance.now() - qk,
          game: ak
        }), Lk.requiresRefresh) {
        const kk = "outdatedVersion" === Lk.name,
          Ik = new Error(`the game's connection closed with code ${Fk}`),
          Xk = () => null === wl && null === ql;
        return void iL({
          site: VI.JOIN_SITE,
          error: Ik,
          outdated: kk
        }, (() => {
          Xk() && Ua(Lk, null, !1)
        }), {
          stillWanted: Xk
        })
      }
      const tk = Lk.canReconnect ? lk : null,
        Zk = null !== tk && Lk.automaticallyReconnect && performance.now() - Vl >= uk.e;
      Ua(Lk, tk, Zk)
    }

    function Ua(kk, Fk, Ik) {
      var Xk;
      let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (ia) return;
      iT.b.unwantedLeave(Ik && null !== Fk && 0 === Sl.size), null === (Xk = zl) || void 0 === Xk || Xk.abort();
      const ik = new AbortController;
      zl = ik;
      const yk = null === Fk ? null : () => {
        ik.signal.aborted || (ik.abort(), Fk())
      };
      if (Ik && null !== yk) {
        Vl = performance.now();
        const kk = setTimeout(yk, uk.b);
        ik.signal.addEventListener("abort", (() => {
          clearTimeout(kk)
        }))
      }
      const lk = {
        code: kk.code,
        name: kk.name,
        reason: kk.reason,
        reasonKey: Tk.reasonKey,
        reconnect: yk,
        reconnecting: Ik,
        requiresRefresh: kk.requiresRefresh,
        canPlayAgain: Tk.canPlayAgain
      };
      if (Sl.size > 0)
        for (const qk of [...Sl]) try {
          qk(lk)
        } catch (ak) {
          console.error(`${vi} an unwanted-leave listener threw`, ak)
        } else SX((0, sX.i)(kk, null !== yk, Ik), ik.signal).then((Fk => {
          Fk && (null !== yk ? yk() : kk.requiresRefresh && (0, Yk.i)())
        }))
    }
    const Ca = {
      attachSocket: kk => Ya(kk),
      onConnection: kk => (Ol.add(kk), () => {
        Ol.delete(kk)
      }),
      sendRaw: (kk, Fk) => {
        const Ik = Jy;
        return null !== Ik && Ik.conn === kk && Wq(Ik, Fk)
      },
      leaveRoom: Sa,
      closeSocket: kk => {
        var Fk;
        (null === (Fk = Jy) || void 0 === Fk ? void 0 : Fk.conn) === kk && Aa()
      },
      flushNet: ga
    };

    function Na(kk) {
      var Fk;
      let {
        aux: Ik,
        payload: Xk
      } = kk;
      null === (Fk = iy) || void 0 === Fk || Fk.queueOptions(Ik, Xk)
    }

    function ca(kk, Fk) {
      Na(function(kk, Fk) {
        return xT = kk ? {
          preventMovement: Fk
        } : null, kk ? PT(Fk) : {
          aux: fF.Zb.AdEnd,
          payload: JT
        }
      }(kk, Fk))
    }

    function Wa(kk) {
      var Fk;
      Tl = kk, null === (Fk = iy) || void 0 === Fk || Fk.setUiPrefs(kk)
    }

    function fa(kk, Fk) {
      qy.setMaster(kk, Fk)
    }

    function Ba(kk) {
      var Fk;
      il = kk, null === (Fk = iy) || void 0 === Fk || Fk.setEnvPrefs(kk)
    }

    function da(kk) {
      var Fk;
      yl = kk, null === (Fk = iy) || void 0 === Fk || Fk.setLookPrefs(kk)
    }

    function Ya(kk) {
      var Fk;
      let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(kk.url).origin,
        Xk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (kk.readyState === WebSocket.CLOSING || kk.readyState === WebSocket.CLOSED) return console.warn(`${vi} a closing or closed socket can't be attached`), null;
      const Tk = iy;
      if (!Tk || Tk.isStopped) return console.warn(`${vi} no core is running to attach a socket to`), kk.close(), null;
      if (null === (0, Vk.k)()) return console.warn(`${vi} the game has not started to attach a socket to`), kk.close(), null;
      if (By > fF.w) return console.warn(`${vi} this core has attached all the sockets it can; reload to play on`), kk.close(), null;
      if (kl && !ry && (Oq(Tk, !1, "all"), Tk.isStopped || la)) return kk.close(), null;
      Aa();
      const ik = By++;
      if (!yq(Tk, "open", ik, Xk ? fF.Xb.Resume : 0)) return kk.close(), null;
      Xk || JF.e.reset(), sl = null === ql ? null : {
        join: ql,
        conn: ik,
        activated: !1
      }, kk.binaryType = "arraybuffer";
      const yk = new HI.b((() => {
          ! function(kk, Fk) {
            if (Jy !== Fk || kk.isStopped || null === ra(Fk, ci)) return;
            Fk.detach(), Jy = null, ha(kk, Fk, ci, "", !0), Fk.ws.close()
          }(Tk, lk)
        })),
        lk = {
          ws: kk,
          conn: ik,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Xk,
          token: null,
          detach: () => {
            yk.dispose(), kk.removeEventListener("message", ak), kk.removeEventListener("open", qk), kk.removeEventListener("close", Lk)
          }
        },
        ak = kk => {
          if (kk.data instanceof ArrayBuffer) {
            var Fk;
            const Ik = new Uint8Array(kk.data);
            yk.heard(), lk.token = null !== (Fk = (0, JI.d)(Ik)) && void 0 !== Fk ? Fk : lk.token,
              function(kk, Fk, Ik) {
                Dq(kk, (() => {
                  kk.rings.net.writeFrame(Fk, Ik) || kk.crash(TI.n, `a socket frame of ${Ik.byteLength} bytes did not fit the net-in ring`)
                }));
                const Xk = kk.rings.net.cursor >= Ni;
                !IL() && (Xk || kk.netWrittenSinceFrame >= Ci) && Oq(kk, !1, document.hidden ? "all" : "budget");
                TL(kk)
              }(Tk, ik, Ik)
          }
        },
        qk = () => {
          Xk || (0, ek.r)("wasm_socket_open", performance.now());
          for (const Fk of lk.pending.splice(0)) kk.send(Fk);
          lk.pendingBytes = 0
        },
        Lk = kk => {
          if (Jy === lk && Tk.rings.net.cursor > 0 && Oq(Tk, !1, "all"), Jy === lk) {
            if (lk.detach(), Jy = null, ha(Tk, lk, kk.code, kk.reason) || ma(Tk, lk)) return;
            yq(Tk, "close", ik), Da(ik, lk.left), Ra(ik, kk.code, kk.reason)
          }
        };
      return kk.addEventListener("message", ak), kk.addEventListener("open", qk), kk.addEventListener("close", Lk), Jy = lk, null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.socketAttached(ik), (0, Zk.s)({
        websocketUrl: Ik
      }), ik
    }

    function Aa() {
      const kk = Jy;
      if (!kk) return;
      const Fk = iy,
        Ik = kk.resume;
      Ik && (ga(), Jy !== kk) || (Jy = null, kk.detach(), kk.ws.close(), null !== Fk && (ma(Fk, kk) || Ik && ha(Fk, kk, Wi)) || (null !== Fk && yq(Fk, "close", kk.conn), Da(kk.conn, kk.left)))
    }

    function ga() {
      const kk = iy;
      null !== kk && !kk.isStopped && !la && !ry && kk.rings.net.cursor > 0 && Oq(kk, !1, "all")
    }

    function ma(kk, Fk) {
      var Ik;
      if (!Fk.resume) return !1;
      const Xk = Hl;
      return null !== Xk && null !== Fk.token && "" !== Fk.token && (Xk.pendingHold = {
        conn: Fk.conn,
        token: `${Xk.roomId}:${Fk.token}`
      }), yq(kk, "close", Fk.conn), null === (Ik = (0, Vk.k)()) || void 0 === Ik || Ik.socketDetached(Fk.conn), !0
    }

    function ha(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const ik = ra(Fk, Ik);
      if (null === ik) return !1;
      const {
        eq: yk,
        token: lk,
        game: ak,
        joinedAt: qk
      } = ik;
      if (!yq(kk, "close", Fk.conn, fF.E.Held)) return !0;
      console.warn(`${vi} the game's connection ${Tk?"went silent":`dropped with code ${Ik}`}, holding it`);
      const Lk = {
        closeReason: Xk,
        sinceJoinedMs: performance.now() - qk,
        game: ak
      };
      return (0, VI.reportDisconnect)((0, uk.l)(Ik), Ly, Lk, Tk ? "silent" : void 0), yk.heldConn = Fk.conn, yk.dropCode = Ik, yk.pendingHold = {
        conn: Fk.conn,
        token: `${yk.roomId}:${lk}`
      }, ry || Oq(kk, !1, "all"), !0
    }

    function ra(kk, Fk) {
      const Ik = Hl,
        Tk = wl,
        ik = kk.token;
      return null === Ik || null === Tk || la || kk.left || Tk.conn !== kk.conn || null === ik || "" === ik ? null : (0, Xk.i)(Fk) && Ik.resume.canHoldSeat() ? {
        eq: Ik,
        token: ik,
        game: Tk.game,
        joinedAt: Tk.joinedAt
      } : null
    }

    function Da(kk, Fk) {
      var Ik;
      null === (Ik = (0, Vk.k)()) || void 0 === Ik || Ik.closeGame(kk), (0, HT.b)().close(kk), Fk || (0, Zk.s)({
        websocketUrl: null
      })
    }

    function Ma() {
      const kk = Pl;
      if (null === kk) return;
      const Fk = (0, Vk.k)();
      la || null === Fk || Fk.sE(kk) ? Pl = null : performance.now() - Fl.pause >= Yi && (Fl.pause = performance.now(), console.warn(`${vi} the cmd ring had no room for SetPaused(${kk}): written before the next frame`))
    }

    function kq() {
      const kk = Hl;
      Hl = null, null === kk || void 0 === kk || kk.resume.dispose()
    }

    function Fq(kk, Fk) {
      var Ik, Xk;
      const {
        heldConn: Tk
      } = kk, ik = kk.resume.resumingConn;
      kk.heldConn = 0, kk.pendingHold = null, Hl === kk && (Hl = null), "left" === Fk ? kk.resume.leave() : kk.resume.dispose(), 0 === xl || (null === (Ik = Jy) || void 0 === Ik ? void 0 : Ik.conn) !== xl || "left" === Fk && (null === (Xk = ll) || void 0 === Xk ? void 0 : Xk.conn) === xl || iq(xl), "gaveUp" === Fk && 0 !== ik && iq(ik), 0 !== Tk && "refused" !== Fk && (console.info(`${vi} the game held through its drop ${"left"===Fk?"was left":"is given up"}`), null === iy || iy.isStopped || yq(iy, "close", Tk), Da(Tk, !1))
    }

    function Iq(kk, Fk) {
      const Ik = Fk.indexOf(":");
      return {
        roomId: Ik < 0 ? kk.roomId : Fk.slice(0, Ik),
        roomToken: Fk.slice(Ik + 1)
      }
    }

    function Xq(kk) {
      (0, iI.logClientMeasurement)("join_preload", kk, {
        client: "wasm"
      })
    }

    function Tq(kk) {
      var Fk;
      Jl = kk, kk.conn === xl && (xl = 0);
      const Ik = Hl;
      null !== Ik && (null === (Fk = wl) || void 0 === Fk ? void 0 : Fk.conn) === kk.conn && Ik.resume.onInitialInfo(kk)
    }

    function iq(kk) {
      var Fk;
      const Ik = Jy;
      (null === Ik || void 0 === Ik ? void 0 : Ik.conn) === kk && (Ik.left = !0, null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.socketLeft(), (0, Zk.s)({
        websocketUrl: null
      }), Sa(kk) ? setTimeout((() => {
        Jy === Ik && Aa()
      }), bk.f) : Aa())
    }

    function yq(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Tk = !1;
      return Dq(kk, (() => {
        const {
          net: ik
        } = kk.rings;
        Tk = "open" === Fk ? ik.writeOpen(Ik, Xk) : ik.writeClose(Ik, Xk), Tk || kk.crash(TI.n, `a socket ${Fk} did not fit the net-in ring`)
      })), Tk
    }

    function lq(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (aq()) {
        const Xk = "browser" === kk && (0, eT.V)() ? "blockedAfterLoss" : "unsupported";
        return (0, VI.reportUnsupportedFallback)(kk, Xk, Fk, Ik), void qq(`the wasm client can't run here (${Fk}; ${Xk})`, Xk)
      }(0, VI.showUnsupported)(kk, "unsupported", Fk, Ik)
    }

    function aq() {
      return Ia && "wasm" !== (0, eF.f)(window.location.search)
    }

    function qq(kk, Fk) {
      console.warn(`${vi} ${kk}: reloading on the JS client`), null !== Fk && (0, eF.w)(Fk), (0, eF.u)(null === Fk ? "reloadOntoJs" : "decline");
      const Ik = () => {
        (0, Yk.e)(eF.y)
      };
      (0, VI.flushCrashReports)(Yk.c).then(Ik, Ik)
    }

    function Lq(kk, Fk, Ik, Xk) {
      return ul(kk, Fk, Ik, Xk)
    }

    function tq() {
      null === Ul || null === iy || iy.isStopped || la || null !== py || null === ri || (py = Ul(ri, eq, wq().follow))
    }

    function Zq() {
      var kk, Fk, Ik;
      return null !== (kk = null === (Fk = ly) || void 0 === Fk || null === (Ik = Fk.textures) || void 0 === Ik ? void 0 : Ik.files()) && void 0 !== kk ? kk : null
    }

    function jq(kk) {
      wq().follow((Fk => {
        null !== Fk && Promise.all([Promise.all([Ik.e(201), Ik.e(45)]).then((() => Ik(50999))), (0, eT.Q)()]).then((kk => {
          let [{
            followPagePackFiles: Ik
          }, Xk] = kk;
          const Tk = null === Xk || (0, XI.h)(Xk) ? "webgl" : Xk.backend;
          Ik(Fk, TT.f, Tk, (kk => {
            TT.f.setPageFiles(kk)
          }), eq)
        }), (Fk => {
          console.warn(`${vi} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Fk), kk()
        }))
      }))
    }

    function eq(kk, Fk) {
      console.warn(`${vi} ${kk}`, Fk)
    }

    function wq() {
      return yy ??= new GT({
        load: kk => Promise.all([Ik.e(201), Ik.e(54)]).then((() => Ik(51002))).then((Fk => {
          let {
            startPageTexturePackFeed: Ik
          } = Fk;
          return Ik(eq, kk)
        })),
        store: pI.g,
        Mj: kk => {
          jy.then((() => {
            (0, VI.reportTexturePackFeedLoadFailure)(kk, Ly)
          }))
        }
      }), yy
    }
    const Hq = kk => wq().follow(kk);

    function Jq() {
      return wq().loaded()
    }
    const xq = function(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Tk = 0;
        return async function(ik, yk) {
          let lk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const ak = ++Tk,
            qk = Xk() + Fk,
            Lk = await
          function(kk, Fk) {
            let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Xk => {
              const Tk = setTimeout((() => {
                Xk(null), kk.then((kk => {
                  null !== kk && (kk.joinedWithout(), Ik(kk))
                }))
              }), Fk);
              kk.then((kk => {
                clearTimeout(Tk), Xk(kk)
              }))
            }))
          }(kk(ik), Fk, (kk => {
            ak === Tk && lk() && yk(kk, Xk() + Fk).catch((kk => {
              Ik("the texture pack step after the join failed", kk)
            }))
          }));
          return null === Lk ? null : yk(Lk, qk)
        }
      }((kk => (0, TF.j)(kk) ? wq().request() : wq().forJoin()), nT.c, eq),
      Pq = function(kk, Fk) {
        let Ik = !1;
        return {
          setGamePackConfirm: kk => {
            Ik = null !== kk, Fk(kk)
          },
          packStep: (Fk, Xk, Tk) => kk(Fk, Xk, (() => Ik && Tk()))
        }
      }(xq, (kk => {
        wq().setGamePackConfirm(kk)
      }));

    function Kq(kk) {
      Pq.setGamePackConfirm(kk)
    }

    function Qq() {
      if (la || null !== fl || null === Cl || null === Wl) return;
      const {
        backend: kk,
        canvas: Fk,
        fallbackReason: Ik,
        adapterVendor: Xk
      } = Wl, Tk = Cl;
      Cl = null;
      try {
        fl = Tk({
          backend: kk,
          canvas: Fk,
          fallbackReason: Ik,
          adapterVendor: Xk,
          joinedGame: () => la ? null : ll,
          inGame: Vq,
          shaderPackReach: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = Cy) || void 0 === Fk ? void 0 : Fk.reachInJoinedGame()) && void 0 !== kk ? kk : null
          },
          Nw: () => uy,
          msaa: () => cl > 1,
          writeCmd: (kk, Fk, Ik) => null !== ri && ri(kk, Fk, Ik),
          takeFailedMeshJobs: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = Qy) || void 0 === Fk ? void 0 : Fk.takeFailedMeshJobs()) && void 0 !== kk ? kk : 0
          },
          readLoadCounts: kk => {
            var Fk, Ik;
            return null !== (Fk = null === (Ik = iy) || void 0 === Ik ? void 0 : Ik.readLoadCounts(kk)) && void 0 !== Fk && Fk
          },
          mainStalled: (kk, Fk, Ik) => {
            (0, VI.reportMainStall)(kk, Fk, Ik, Ly)
          }
        })
      } catch (ik) {
        console.error(`${vi} the frame telemetry didn't start`, ik)
      }
    }

    function sq(kk, Fk) {
      try {
        var Ik, Xk, Tk;
        const ik = nl && null !== (Ik = null === (Xk = iy) || void 0 === Xk || null === (Tk = Xk.lastHeader) || void 0 === Tk ? void 0 : Tk.renderPending) && void 0 !== Ik ? Ik : 0;
        (0, XX.f)(Fk, kk, Vq() && !(null !== xT), ik)
      } catch (ik) {
        (0, XX.s)(), console.error(`${vi} the quality steps stopped`, ik)
      }
    }

    function Vq() {
      return null !== ll && Ml === ll && !la
    }

    function zq(kk) {
      const Fk = fl;
      fl = null;
      try {
        null === Fk || void 0 === Fk || Fk.stop()
      } catch {}
      console.error(`${vi} the frame telemetry threw: it stops`, kk)
    }

    function Sq(kk) {
      var Fk, Ik, Xk, Tk;
      if ((0, HT.b)().fire(kk), "message" === kk.type) {
        if (Dy++, kk.oq === fF.Mc.ERROR && null !== ql) {
          var ik;
          const {
            text: Fk,
            dropsCache: Ik
          } = (0, uk.p)((new TextDecoder).decode(kk.payload));
          ol ||= Ik, (null === (ik = sl) || void 0 === ik ? void 0 : ik.conn) === kk.conn && (vl = Fk)
        } else if (kk.oq === BF.sc.ResumeComplete) {
          var yk;
          null === (yk = Hl) || void 0 === yk || yk.resume.onResumeComplete(kk.conn)
        }
        return
      }
      kk.phase === fF.I.Left ? My = kk.conn : kk.phase === fF.I.Activated && (null === (Fk = sl) || void 0 === Fk ? void 0 : Fk.conn) === kk.conn ? sl.activated = !0 : kk.phase === fF.I.Resumed ? function(kk) {
        var Fk, Ik;
        xl = kk;
        const Xk = Hl;
        if (null === Xk || 0 === Xk.heldConn || (null === (Fk = Jy) || void 0 === Fk ? void 0 : Fk.conn) !== kk || !Jy.resume || null === wl) return;
        console.info(`${vi} the game resumed on conn ${kk}, waiting for its InitialInfo`);
        const Tk = Xk.heldConn;
        Xk.heldConn = 0, Jy.resume = !1, wl.conn = kk, (null === (Ik = jl) || void 0 === Ik ? void 0 : Ik.conn) === Tk && (jl = {
          conn: kk,
          info: jl.info
        }), JF.e.apply({
          shopInfo: null,
          _shopVersion: iF.e
        })
      }(kk.conn) : kk.phase === fF.I.Held ? function(kk) {
        var Fk;
        const Ik = Hl,
          Xk = null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.pendingHold) && void 0 !== Fk ? Fk : null;
        if (null !== Ik && null !== Xk && Xk.conn === kk) return Ik.pendingHold = null, Ik.heldConn = kk, xl = 0, console.warn(`${vi} the core holds the game, reconnecting`), void Ik.resume.onDropped(Xk.token);
        if (kk === xl) {
          xl = 0;
          const Fk = iy;
          null === Fk || Fk.isStopped || (console.info(`${vi} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), yq(Fk, "close", kk))
        }
      }(kk.conn) : kk.phase === fF.I.Closed && (null === (Ik = Hl) || void 0 === Ik || null === (Xk = Ik.pendingHold) || void 0 === Xk ? void 0 : Xk.conn) === kk.conn && (Hl.heldConn === kk.conn ? function(kk) {
        const Fk = kk.heldConn,
          Ik = kk.dropCode;
        Fq(kk, "refused"), console.info(`${vi} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          Da(Fk, !1), Ra(Fk, Ik, "", !0)
        }))
      }(Hl) : Hl.pendingHold = null);
      const lk = Object.keys(fF.I).find((Fk => fF.I[Fk] === kk.phase)),
        ak = 0 === kk.code ? "" : ` (code ${kk.code})`;
      console.info(`${vi} conn ${kk.conn}: ${null!==lk&&void 0!==lk?lk:kk.phase}${ak}, ${Dy} raw messages so far`), (null === (Tk = ll) || void 0 === Tk ? void 0 : Tk.conn) !== kk.conn || kk.phase !== fF.I.Left && kk.phase !== fF.I.Closed || za(null), Zl !== kk.conn || kk.phase !== fF.I.Left && kk.phase !== fF.I.Closed || (Zl = null, null === ll && null === ql && iT.b.setGame(void 0));
      for (const Lk of [...Ol]) try {
        Lk(kk.conn, kk.phase, kk.code)
      } catch (qk) {
        (0, dF.i)(qk, `${vi} a connection listener threw`)
      }
    }

    function oq() {
      (0, eT.r)(), queueMicrotask((() => {
        try {
          fq()
        } catch (kk) {
          console.warn(`${vi} stopping before the reload threw`, kk)
        }(0, VI.flushCrashReports)(Yk.c).then(Yk.i, Yk.i)
      }))
    }

    function vq() {
      const kk = iy;
      null === kk || kk.isStopped || null === Jy || ry || !kk.hasPendingCommands() || Oq(kk, !1, "budget")
    }

    function Eq(kk) {
      var Fk;
      const Ik = ll;
      kk.persisted || null === Ik || (null === (Fk = Jy) || void 0 === Fk ? void 0 : Fk.conn) !== Ik.conn || Jy.left || Ik.leave()
    }

    function Oq(kk, Fk, Xk) {
      let Tk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ik = ry;
      ry = !0;
      try {
        const ik = kk.rings.net.cursor >= Ni;
        ik && "all" !== Xk && !document.hidden && dq("backlog", `a shown tab's net-in is ${kk.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(kk, Fk, Xk, Tk) {
          var ik, yk, lk, ak;
          if (la) return !1;
          if (Dq(kk, Gq), la || kk.isStopped) return !1;
          Nq() && Wy("modelsIn");
          Ma(), dy = performance.now(), My = null, kl = !1, (0, sk.L)(), null === (ik = vy) || void 0 === ik || ik.beforeFrame(), JX(dy, kk), (0, sk.D)(dy, pq), hy = !0;
          const qk = Fk && Cq();
          let Lk;
          try {
            Lk = kk.frame(dy, qk, Xk)
          } finally {
            hy = !1
          }
          if (!Lk) return !1;
          Nl.observe(null !== (yk = null === (lk = kk.lastHeader) || void 0 === lk ? void 0 : lk.chunksCancelled) && void 0 !== yk ? yk : 0);
          const tk = kk.lastFrameKind,
            Zk = (0, OF.d)(tk);
          (function(kk) {
            null !== gT && gT.afterFrame(performance.now(), kk)
          })(Zk), null === (ak = Bl) || void 0 === ak || ak.frame(kk, dy, tk), Fk && (ka = Zk);
          Zk && (0, oF.b)(dy);
          if (null !== fl) try {
            fl.frameRan(kk, dy, performance.now(), tk)
          } catch (wk) {
            zq(wk)
          }
          "drawn" === tk && Uq() && function() {
            for (const kk of [...ZT]) kk()
          }();
          kk.forEachNetOut(cq);
          const jk = Jy;
          null !== My && (null === jk || void 0 === jk ? void 0 : jk.conn) === My && Wq(jk, bk.i);
          Rq(kk),
            function(kk) {
              const Fk = 0 !== (kk.headerWord(BF.F.LoadSteps) & BF.S.JoinPreload);
              Fk !== tl && (tl = Fk, (0, VI.setCrashAdPreload)(Fk), (0, OI.H)())
            }(kk), Fk && function(kk) {
              var Fk, Xk, Tk;
              if (null === ll || !Cq()) return;
              const ik = kk.headerWord(BF.F.LoadSteps);
              null === Dl || Ml === ll && !Dl.frame(dy, 0 !== (ik & BF.W.TerrainDrawn)) || (Dl = null);
              if (0 === (ik & BF.S.PlayerBound)) return;
              const yk = kk.lastHeader,
                lk = !nl || 0 === (null === yk || void 0 === yk ? void 0 : yk.renderPending);
              !gl && lk && (gl = !0, performance.mark(Ui));
              if (Ml === ll) return;
              const ak = null !== (Fk = null === yk || void 0 === yk ? void 0 : yk.firstView) && void 0 !== Fk ? Fk : fF.Y.NotYet;
              if (nl && ak === fF.Y.NotYet) return;
              if (Al && (!0 !== (null === (Xk = (0, Vk.k)()) || void 0 === Xk ? void 0 : Xk.isSessionLive) || !lk)) return;
              Ml = ll;
              const qk = ll;
              if (setTimeout((() => {
                  ll === qk && (0, ek.m)()
                }), 0), null === (Tk = Cy) || void 0 === Tk || Tk.playable(), function() {
                  clearTimeout(Hy), Hy = setTimeout((() => {
                    Vq() && FL((kk => {
                      let {
                        prefetchWorldgenWorker: Fk
                      } = kk;
                      Fk()
                    }))
                  }), mi)
                }(), Al) return;
              Al = !0, performance.mark(Ri), (0, cT.o)("render") && Promise.all([Ik.e(77), Ik.e(48)]).then((() => Ik(4676))).then((kk => {
                let {
                  renderDebugPlayable: Fk
                } = kk;
                Fk()
              }), (kk => {
                console.warn("The render debug topic didn't load", kk)
              }));
              const Lk = Math.round(performance.now()),
                tk = kk.readViewQueuedPrograms();
              null !== tk && (0, ek.r)("wasm_view_links", Lk, (0, lF.ib)(tk));
              if (nl && ak !== fF.Y.Drawn) {
                const Fk = ak === fF.Y.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: Ik
                  } = uq(kk);
                if (console.warn(`${vi} playable at ${Lk} ms on the first view's ${Fk} backstop, ${Ik}: it wasn't drawn whole in time`), (0, ek.r)("wasm_view_backstop", Lk, `${Fk}:${Ik}`), "long" === Fk) {
                  var Zk, jk;
                  const Fk = null !== (Zk = null === (jk = wl) || void 0 === jk ? void 0 : jk.game) && void 0 !== Zk ? Zk : "";
                  Dl = new uI.e((() => {
                    const {
                      cause: Ik,
                      census: Xk
                    } = uq(kk);
                    (0, VI.reportFirstViewNoTerrain)(Fk, Ik, Xk, Ly), (0, jF.v)("noTerrain")
                  }))
                }
              } else console.info(`${vi} playable at ${Lk} ms${nl?"":" (no renderer)"}`);
              setTimeout(Rl, 0), (0, PF.e)().catch((kk => {
                console.error(`${vi} item sprites didn't load, so item particles show the missing texture`, kk)
              })), hX.b.warm()
            }(kk);
          (0, TI.F)(kk, {
            worldgen: Py,
            mesh: Qy
          }),
          function(kk) {
            kk.forEachEvent(PX);
            for (const Fk of xX) try {
              (0, ZX.c)(Fk)
            } catch (wk) {
              if ((0, dF.f)(wk)) {
                kk.crashOn(TI.k, wk);
                break
              }
              console.error(`${eX} an input action listener threw`, wk)
            }
            xX.length = 0
          }(kk), Tk && (0, EF.d)();
          return !kk.isStopped
        }(kk, Fk, "all" === Xk || ik, Tk)
      } finally {
        ry = ik, ik || (Yy = performance.now())
      }
    }

    function nq(kk) {
      console.error(`${vi} a frame-start listener threw`, kk)
    }

    function Gq() {
      var kk, Fk, Ik, Xk;
      null === (kk = Oy) || void 0 === kk || kk.drain(ri, Di), null === (Fk = by) || void 0 === Fk || Fk.drain(ri), null === (Ik = Ry) || void 0 === Ik || Ik.drain(performance.now()), bl(ri), null === (Xk = py) || void 0 === Xk || Xk.drain()
    }

    function pq(kk) {
      console.error(`${vi} a before-frame listener threw`, kk)
    }

    function uq(kk) {
      const Fk = (0, Vk.k)(),
        Ik = (0, Vk.y)(),
        Xk = null === Fk || null === Ik ? null : Ik.readDrawCensus(Fk.api);
      return {
        cause: (0, uI.j)(kk.headerWord(BF.F.LoadSteps), Xk),
        census: Xk
      }
    }
    const bq = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Rq(kk) {
      var Fk;
      if (Al) return;
      if (null === hl && Cq() && (hl = performance.now()), null === ql && null === ll) return;
      null === hl || rl || (rl = !0, (0, ek.r)("wasm_startup_loaded", hl));
      let Ik = 0;
      null !== ll ? Ik = -1 : !0 === (null === (Fk = sl) || void 0 === Fk ? void 0 : Fk.activated) && (Ik = ~BF.W.TerrainDrawn);
      const Xk = kk.headerWord(BF.F.LoadSteps) & Ik & ~ml;
      if (0 === Xk) return;
      ml |= Xk;
      const Tk = performance.now();
      for (const [ik, yk] of Object.entries(bq)) 0 !== (Xk & BF.W[ik]) && (0, ek.r)(yk, Tk)
    }

    function Uq() {
      return nl && Cq()
    }

    function Cq() {
      return Uy && Nq()
    }

    function Nq() {
      return null === Oy || Oy.startupDone
    }

    function cq(kk, Fk) {
      const Ik = Jy;
      (null === Ik || void 0 === Ik ? void 0 : Ik.conn) === kk ? Wq(Ik, Fk) : Xl++
    }

    function Wq(kk, Fk) {
      const {
        ws: Ik
      } = kk;
      return Ik.readyState === WebSocket.OPEN ? (Ik.send(Fk), !0) : Ik.readyState === WebSocket.CONNECTING && kk.pendingBytes + Fk.byteLength <= di ? (kk.pending.push(Fk.slice()), kk.pendingBytes += Fk.byteLength, !0) : (Xl++, !1)
    }

    function fq() {
      var kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk;
      la = !0, Fa.stop(), (0, fT.e)(), gT = null, kq(), (0, sk.I)().unlockPointer(), (0, sk.F)(null), null === (kk = Ey) || void 0 === kk || kk(), Ey = null, null === (Fk = (0, Vk.y)()) || void 0 === Fk || Fk.followCursorAim(null), (0, EF.G)(), (0, Vk.i)(), qy.stop(), null === (Ik = dl) || void 0 === Ik || Ik(), dl = null, null === (Xk = Yl) || void 0 === Xk || Xk(), Yl = null, null === (Tk = fl) || void 0 === Tk || Tk.stop(), fl = null, (0, RI.k)(null), null === (ik = xy) || void 0 === ik || ik(), xy = null, null === (yk = Py) || void 0 === yk || yk.stop(), Py = null, null === (lk = Qy) || void 0 === lk || lk.stop(), Qy = null, null !== (ak = ly) && void 0 !== ak && null !== (qk = ak.textures) && void 0 !== qk && qk.assets && (0, IT.m)(null), null === (Lk = ly) || void 0 === Lk || Lk.stop(), ly = null, ay = null;
      const Jk = sy;
      sy = null, Jk && (Jk.stop(), rq(Jk)), null === (tk = by) || void 0 === tk || tk.dispose(), by = null, null === (Zk = Ry) || void 0 === Zk || Zk.dispose(), Ry = null, Oy = null, null === (jk = Gy) || void 0 === jk || jk(), Gy = null, null === (ek = oy) || void 0 === ek || ek(), oy = null, null !== my && (clearTimeout(my), my = null), null === (wk = vy) || void 0 === wk || wk.stop(), vy = null, Qa(), iT.b.release(), Aa();
      const xk = py;
      py = null;
      try {
        null === xk || void 0 === xk || xk.dispose()
      } catch (Pk) {
        console.warn(`${vi} the sky's images didn't release`, Pk)
      }(0, rX.f)(null), null === (Hk = Xy) || void 0 === Hk || Hk.pagePreviews().endSession(null === (0, aF.n)())
    }

    function Bq(kk, Fk) {
      var Ik, Xk;
      const Tk = null !== (Ik = null === (Xk = sy) || void 0 === Xk ? void 0 : Xk.details()) && void 0 !== Ik ? Ik : {},
        ik = kk.site === Oi || kk.site === ni || kk.site === VI.RENDER_RELOAD_SITE || kk.site === Gi ? kk.error instanceof WebAssembly.RuntimeError || kk.error instanceof MF.c : !(0, XI.j)(kk.error) && (0, TI.B)(kk);
      ik && kk.error instanceof Error && (0, aF.M)(kk.error);
      const yk = ik || kk.site === TI.q ? (0, VI.readTrap)(kk.error) : null,
        lk = null !== yk && (0, AF.g)(yk.kind, yk.refusedBytes) ? yk.refusedBytes : 0,
        ak = (0, PI.m)(),
        qk = null === Vy ? (0, AX.l)(function() {
          try {
            return (0, aF.r)().buffer.byteLength
          } catch {
            return 0
          }
        }(), lk, ak) : Vy.ceilingMayRefuse(lk, ak),
        Lk = lk > 0 && !qk && aq();
      var tk;
      if (Lk && ((0, eF.w)("oom"), (0, eF.u)("decline"), ya = !0), fq(), (0, eT.e)()) return console.warn(`${vi} the session stopped at ${kk.site} as the page reloads`, kk.error), void((0, XI.j)(kk.error) || (null === (tk = kk.header) || void 0 === tk ? void 0 : tk.lastError) === fF.N.CoreBusy || (0, VI.reportStoppedCore)(kk, Fk, yk, {
        memoryDetails: Tk,
        declined: Lk
      }));
      (0, VI.showCrash)(kk, Fk, yk, {
        memoryDetails: Tk,
        declined: Lk
      })
    }

    function dq(kk, Fk) {
      const Ik = performance.now();
      return !(Ik - Fl[kk] < Yi) && (Fl[kk] = Ik, console.warn(`${vi} ${Fk}`), !0)
    }

    function Yq(kk) {
      const {
        input: Fk,
        net: Ik,
        worker: Xk
      } = kk.rings, Tk = kk.optionsDropped, ik = Fk.dropped + Tk + Ik.dropped + Xk.dropped + Xl;
      ik !== Il && dq("dropped", `${ik} records dropped so far (input ${Fk.dropped}, options ${Tk}, net ${Ik.dropped}, worker ${Xk.dropped}, net-out ${Xl})`) && (Il = ik)
    }

    function Aq() {
      var kk, Fk;
      const Ik = (0, EI.b)();
      if (null === Ik) return null;
      const Xk = (0, GI.t)(Ik);
      return {
        ...Xk,
        horizontal: Math.min(Xk.horizontal, null !== (kk = null === (Fk = sy) || void 0 === Fk ? void 0 : Fk.shedDistanceInUse()) && void 0 !== kk ? kk : 1 / 0)
      }
    }

    function gq(kk) {
      var Fk, Ik;
      return {
        samples: nl ? cl : null,
        sunShadows: kk,
        renderDistance: null !== (Fk = null === (Ik = Aq()) || void 0 === Ik ? void 0 : Ik.horizontal) && void 0 !== Fk ? Fk : null
      }
    }

    function mq(kk) {
      Ll = kk, (0, OI.H)()
    }

    function hq() {
      var kk, Fk, Ik;
      const Xk = Aq();
      return {
        ...null === (kk = sy) || void 0 === kk ? void 0 : kk.pageKillSnapshot(),
        renderDistance: null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.horizontal) && void 0 !== Fk ? Fk : null,
        renderDistanceVertical: null !== (Ik = null === Xk || void 0 === Xk ? void 0 : Xk.vertical) && void 0 !== Ik ? Ik : null,
        chunkCap: zy,
        budgetBasis: Sy,
        renderBackend: (0, eT.J)(),
        adPreload: tl,
        ...(0, nI.e)(Ll)
      }
    }

    function rq(kk) {
      console.info(`${vi} wasm memory at the session's end`, kk.details())
    }

    function Dq(kk, Fk) {
      if (!kk.isStopped) try {
        Fk()
      } catch (Ik) {
        kk.crash(TI.r, Ik)
      }
    }

    function Mq() {
      return Ky ??= Ik.e(71).then((() => Ik(51008))).catch((kk => {
        throw Ky = null, kk
      })), Ky
    }
    async function kL() {
      const {
        createWorldgenWorker: kk,
        worldgenWorkerReady: Fk
      } = await Mq();
      return await Fk(), kk
    }

    function FL(kk) {
      var Fk;
      null === (Fk = Ky) || void 0 === Fk || Fk.then(kk, (() => {}))
    }

    function IL() {
      return performance.now() - Math.max(Yy, Ay) >= Ai
    }

    function XL(kk) {
      const Fk = document.hidden || gy ? "all" : "budget";
      gy = !0;
      const Ik = Oq(kk, !1, Fk);
      var Xk;
      Ik && (Yq(kk), null === (Xk = sy) || void 0 === Xk || Xk.afterFrame());
      return Ik
    }

    function TL(kk) {
      kk.isStopped || 0 === kk.rings.net.cursor || IL() && !XL(kk) || kk.rings.net.cursor > 0 && performance.now() - Ay >= Ai / 2 && function(kk) {
        my ??= setTimeout((() => {
          my = null, TL(kk)
        }), Ai)
      }(kk)
    }

    function iL(kk, Fk) {
      return async function(kk, Fk, Ik) {
        let {
          stop: Xk,
          stillWanted: Tk,
          beforeReload: ik
        } = Ik;
        const yk = await (0, OX.k)(kk, {
          stillWanted: Tk,
          beforeReload: async () => {
            Xk(), await Promise.all([(0, VI.flushCrashReports)(Yk.c), null === ik || void 0 === ik ? void 0 : ik()])
          },
          reload: Yk.i
        });
        return yk || Fk(), yk
      }(kk, Fk, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: fq
      })
    }
    let yL = !1;

    function lL() {
      return yL = !0, async function(kk, Fk, Xk) {
        const {
          gamePackSource: Tk
        } = await Ik.e(271).then((() => Ik(41067)));
        await Pq.packStep(kk, ((Ik, Xk) => Ik.packForGame(kk, Tk(Fk), Xk)), Xk)
      }(...arguments)
    }

    function aL(kk) {
      ! function(kk, Fk) {
        kk((kk => {
          null === kk || void 0 === kk || kk.subscribe((kk => {
            let {
              pack: Ik,
              gameSource: Xk
            } = kk;
            Fk(null === Xk || null === Ik ? null : {
              pack: Ik,
              source: "" === Xk ? null : Xk
            })
          }))
        }))
      }(Hq, kk)
    }
    let qL = !1,
      LL = null,
      tL = !1,
      ZL = !1;

    function jL() {
      var kk;
      qL || (qL = !0, ja("play", Bk), (0, Zk.q)(new SL), lk.gameBridge.attach(pk), PL().catch((() => {})), (0, Vk.A)((kk => {
        IF(kk.setTextHost)
      })), kk = HL, Sl.add(kk), function(kk) {
        for (const Fk of Ny) kk(Fk);
        cy.add(kk)
      }((kk => {
        wL(eL[kk])
      })))
    }
    const eL = {
      booted: ik.j.INITIALISE_NOA,
      texturesIn: ik.j.REGISTRATION,
      modelsIn: ik.j.SETUP_LIFEFORMS
    };

    function wL(kk) {
      ak.g.GL("matchmakeAndPlayStepCompleted", {
        step: kk,
        totalSubSteps: 1
      })
    }

    function HL(kk) {
      if (!tL) return;
      const {
        gameNameWithVariation: Fk,
        lobbyName: Ik
      } = (0, Zk.d)();
      if (kk.code === Xk.d.serverUpdating.code) return (new SL).leaveLive(), void xL(Fk, Ik);
      ak.g.GL("unwantedLeftGame", {
        reason: JL(kk),
        requiresRefresh: kk.requiresRefresh,
        canReconnect: null !== kk.reconnect,
        automaticallyReconnect: kk.reconnecting,
        canPlayAgain: kk.canPlayAgain,
        gameNameWithVariation: Fk,
        lobbyName: Ik
      }), (new SL).leaveLive()
    }

    function JL(kk) {
      return null !== kk.reasonKey ? {
        translationKey: kk.reasonKey
      } : "gameOrPluginKick" === kk.name ? kk.reason : `You have disconnected from the server.\n${kk.reason}`
    }

    function xL(kk, Fk) {
      var Xk;
      Xk = (0, qk.A)(kk, Fk), Promise.resolve().then((() => Ik(1475))).then((kk => {
        let {
          navigatePreserveSearch: Fk
        } = kk;
        Fk(Xk)
      })).catch((kk => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", kk), (0, Yk.d)(Xk)
      }))
    }

    function PL() {
      return LL ??= Promise.all([Ik.e(72), Ik.e(75), Ik.e(74), Ik.e(73), Ik.e(89), Ik.e(86), Ik.e(269), Ik.e(189), Ik.e(223), Ik.e(247), Ik.e(218), Ik.e(46)]).then((() => Ik(41011))).then((kk => {
        try {
          kk.attachPlayGameSources()
        } catch (Fk) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Fk),
            function(kk) {
              jy.then((Fk => {
                null === Fk || Fk.isStopped || la ? console.warn(`${vi} the play sources threw as they attached, after the client stopped`, kk) : Bq({
                  site: Gi,
                  error: kk,
                  header: null
                }, Ly)
              }))
            }(Fk), Fk
        }
      }), (kk => {
        throw LL = null, new Vk.e(kk)
      })), LL
    }
    async function KL(kk, Fk) {
      jL(), yL = !0, tL = !0;
      let Ik = {
          place: kk.place,
          matchedAt: kk.matchedAt
        },
        yk = kk.place.gameNameWithVariation;
      const lk = (0, tk.c)();
      let ak = null;
      const qk = await Ja({
        matchmake: async () => {
          let Fk = Ik;
          if (Ik = null, null === Fk) {
            const Ik = await kk.rematch();
            if (Ik.isError()) throw ak = Ik.asError().forward(), new Error(Ik.asError().message);
            Fk = {
              place: Ik.getValue(),
              matchedAt: performance.now()
            }
          }
          yk = Fk.place.gameNameWithVariation;
          return {
            target: await (0, Uk.f)(kk.userContext, Fk.place, Jq(), lk),
            matchedAt: Fk.matchedAt,
            freshMs: Uk.c
          }
        },
        pageReady: PL,
        onFailure: (kk, Fk) => {
          null === ak && function(kk, Fk) {
            (0, VI.reportPageJoinFailure)(kk, Ly, Fk)
          }(kk, {
            sinceJoinStartMs: Fk,
            game: yk
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => kk.userContext.invalidateTrafficCode(),
        signal: Fk
      });
      switch (qk.kind) {
        case "joined":
          if (lk) {
            const {
              game: kk
            } = qk;
            (0, tk.k)((() => {
              kk.endJoinAd() && (0, ek.n)()
            }))
          }
          return ZL || (ZL = !0, (0, Hk.e)()), tL ? (wL(ik.j.CONNECT_TO_GAME_SERVER), wL(ik.j.SHADER_PACK), function() {
            var kk, Fk;
            return null !== (kk = null === (Fk = Cy) || void 0 === Fk ? void 0 : Fk.runsInJoinedGame()) && void 0 !== kk && kk
          }() && (0, wk.h)(kk.userContext, yk).catch((kk => {
            console.error("Failed to report the shader pack session", kk)
          })), function() {
            const kk = function() {
              var kk, Fk;
              return null !== (kk = null === (Fk = Cy) || void 0 === Fk ? void 0 : Fk.couldntRunInJoinedGame()) && void 0 !== kk ? kk : null
            }();
            null !== kk && (0, wk.d)(kk)
          }(), Tk.b.value(void 0)) : zL("The server ended the game as it joined");
        case "failed":
          if (!qk.reloading) {
            if (null !== ak) return ak;
            if ((qk.error instanceof bk.j || qk.error instanceof bk.b) && qk.error.code === Xk.d.serverUpdating.code) {
              if (Fk.aborted) return zL("Left the game while it loaded");
              const {
                gameNameWithVariation: kk,
                lobbyName: Ik
              } = (0, Zk.d)();
              return xL(kk, Ik), zL("The server is updating")
            }
            return qk.error instanceof dk.d ? Tk.b.errorWithCode(qk.error.messageKey, ik.j.SHADER_PACK, {
              severity: "medium"
            }) : Tk.b.errorWithCode(function(kk) {
              if (kk instanceof bk.t || kk instanceof Kk.f) return kk.message;
              if (QL(kk)) return (0, uk.n)(kk.code, kk.serverText);
              return uk.i
            }(qk.error), ik.j.CONNECT_TO_GAME_SERVER, {
              error: sL(qk.error) ? qk.error : void 0,
              severity: VL(qk.error),
              gameServerUnreachable: (0, Rk.c)(qk.error),
              joinFailure: (0, Rk.h)(qk.error),
              rematch: (0, xk.e)(qk.error),
              gameRefused: (0, Pk.e)(qk.error)
            })
          }
          return zL("Reloading into the new build");
        case "stopped":
          return zL("The game client stopped, and shows why");
        case "iI":
          return zL("Left the game while it loaded")
      }
    }

    function QL(kk) {
      return kk instanceof bk.j || kk instanceof bk.b && "attach" !== kk.stage
    }

    function sL(kk) {
      return !(kk instanceof bk.t) && !QL(kk) && void 0 === (0, Rk.c)(kk)
    }

    function VL(kk) {
      return QL(kk) ? kk instanceof bk.b && (0, uk.l)(kk.code).requiresRefresh ? "medium" : "low" : sL(kk) || kk instanceof bk.t ? "medium" : "low"
    }

    function zL(kk) {
      return Tk.b.errorWithCode(kk, ik.j.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        iI: !0
      })
    }
    class SL {
      leave(kk) {
        if ((0, Qk.c)()) {
          var Fk, Ik;
          if ((0, yk.b)()) return;
          (0, jk.b)(!0 === (null === (Fk = (0, Qk.j)()) || void 0 === Fk || null === (Ik = Fk.currentViewer) || void 0 === Ik ? void 0 : Ik.unsavedChanges), kk)
        } else this.leaveLive()
      }
      leaveLive() {
        var kk;
        yL && (null === (kk = Jq()) || void 0 === kk || kk.endGamePack());
        if (!tL) return;
        tL = !1, (0, Jk.g)();
        try {
          var Fk;
          null === (Fk = (0, Vk.y)()) || void 0 === Fk || Fk.clearWasmCameraScreen()
        } catch (Xk) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Xk)
        }
        const {
          gameNameWithVariation: Ik
        } = (0, Zk.d)();
        try {
          va()
        } finally {
          (0, Zk.s)({
            websocketUrl: null
          }), ak.g.GL("leaveGame", {
            gameNameWithVariation: Ik
          }), (0, Lk.O)()
        }
      }
      isReplay() {
        return (0, Qk.c)()
      }
    }
  },
  40937: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      e: () => Xk,
      g: () => lk,
      i: () => yk
    });
    const Xk = 12e4,
      Tk = 3e4,
      ik = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: kk => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", kk), () => {
          document.removeEventListener("visibilitychange", kk)
        })
      };

    function yk(kk) {
      return `it sent no start within ${Math.round(kk)} ms`
    }
    class lk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ik;
        this.timeoutMs = kk, this.onTimeout = Fk, this.now = Ik, this.visibility = Xk, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Xk.listen((() => {
          this.onVisibility()
        })), Xk.hidden() || this.next()
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
  39631: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk
    });
    var Xk = Ik(337),
      Tk = Ik(1018);
    const ik = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      yk = new Set(["creativeFlat", "skyGrid"]);

    function lk(kk) {
      const Fk = (0, Xk.dc)(kk);
      return "classic" !== Fk ? ik.has(Fk) : !(0, Tk.j)(kk) && !yk.has((0, Xk.Xb)(kk))
    }
  },
  40843: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    const Xk = {
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
  38726: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik
    });
    var Xk = Ik(2801);
    const Tk = ["none", "idle", "now"];

    function ik() {
      const kk = () => (0, Xk.y)();
      return {
        memoryBytes: () => (0, Xk.r)().buffer.byteLength,
        reserveUpFront: Fk => kk().tt(Fk),
        reserveAhead: Fk => kk().Lt(Fk),
        setCeiling: Fk => {
          kk().Zt(Fk)
        },
        lowWater: () => Tk[kk().qt()] ?? "none",
        stats: () => function(kk) {
          const Fk = new Uint32Array((0, Xk.r)().buffer, kk, 17),
            Ik = kk => Fk[kk] ?? 0,
            Tk = kk => ({
              upFront: Ik(kk),
              ahead: Ik(kk + 1),
              onDemandInFrame: Ik(kk + 2),
              onDemand: Ik(kk + 3)
            });
          return {
            memoryBytes: Ik(0),
            initialBytes: Ik(1),
            liveBytes: Ik(2),
            peakLiveBytes: Ik(3),
            headroomBytes: Ik(4),
            unusedBytes: Ik(5),
            ceilingBytes: Ik(6),
            reservesRefused: Ik(7),
            grows: Tk(8),
            grownBytes: Tk(12),
            allocationsRefused: Ik(16)
          }
        }(kk().jt()),
        takeBallast: () => kk().et(),
        takePressure: () => kk().wt()
      }
    }
  },
  5053: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      c: () => yk,
      d: () => Xk,
      g: () => wk,
      k: () => tk,
      m: () => Tk,
      p: () => ik,
      t: () => qk,
      w: () => Lk,
      x: () => Zk
    });
    const Xk = 5;

    function Tk(kk) {
      return kk === Xk
    }

    function ik(kk) {
      return [...kk.features]
    }
    const yk = 262144,
      lk = 256,
      ak = 256;

    function qk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const Fk = [];
      for (const [Ik, Xk] of Object.entries(kk)) {
        if ("string" !== typeof Xk) return `${Ik} isn't text.`;
        Fk.push({
          path: Ik,
          source: Xk
        })
      }
      return Fk.sort(((kk, Fk) => tk(kk.path, Fk.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > lk) return `The pack has more than ${lk} .wgsl files.`;
          const Fk = new Set;
          for (const {
              path: Ik
            }
            of kk) {
            const kk = jk(Ik);
            if (null !== kk) return kk;
            if (Fk.has(Ik)) return `The pack has two files at ${Ik}.`;
            Fk.add(Ik)
          }
          return Zk(kk) > yk ? `The pack's .wgsl files are over ${yk/1024} KB in total.` : null
        }(Fk) ?? Fk
    }

    function Lk(kk) {
      const Fk = {};
      for (const Ik of kk) Fk[Ik.path] = Ik.source;
      return Fk
    }

    function tk(kk, Fk) {
      return kk < Fk ? -1 : kk > Fk ? 1 : 0
    }

    function Zk(kk) {
      const Fk = new TextEncoder;
      let Ik = 0;
      for (const {
          source: Xk
        }
        of kk) Ik += Fk.encode(Xk).byteLength;
      return Ik
    }

    function jk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > ak) return `A file path is over ${ak} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const ek = /^(.*)\[rot\[([1-4])$/;

    function wk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Xk = new Map;
      Fk.forEach(((kk, Fk) => {
        let {
          numAnimStates: Ik,
          animStartIdx: Tk
        } = kk;
        for (let ik = 1; ik < Ik; ik++) Xk.set(Tk + ik - 1, Fk)
      }));
      const Tk = Object.entries(kk),
        ik = new Map;
      for (const [wk, Hk] of Tk) {
        const kk = ek.exec(wk);
        "1" === kk?.[2] && ik.set(kk[1], Hk + 1)
      }
      const yk = kk => {
          const Fk = ek.exec(kk);
          return Fk && ik.has(Fk[1]) ? {
            root: Fk[1],
            rotation: Number(Fk[2]) - 1
          } : null
        },
        lk = new Set(Tk.map((kk => {
          let [Fk] = kk;
          return yk(Fk)?.root ?? Fk
        }))),
        ak = (kk, Ik) => {
          const Xk = kk.replace(/_?0$/, "");
          return (Fk[Ik]?.numAnimStates ?? 0) > 1 && !lk.has(Xk) ? Xk : kk
        },
        qk = new Map;
      for (const [ek, wk] of Tk) qk.set(wk, ak(yk(ek)?.root ?? ek, wk));
      const Lk = Tk.reduce(((kk, Fk) => {
          let [, Ik] = Fk;
          return Math.max(kk, Ik + 1)
        }), 0),
        tk = Array.from({
          length: Lk
        }, ((kk, Fk) => ({
          id: Fk + 1,
          rotation: 0
        }))),
        Zk = new Map,
        jk = new Map;
      for (const [ek, wk] of Tk) {
        const kk = yk(ek),
          Fk = Xk.get(wk);
        if (void 0 !== Fk) {
          const Ik = qk.get(Fk);
          jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "frame"
          }), kk && !jk.has(kk.root) && jk.set(kk.root, {
            name: kk.root,
            texture: Ik,
            kind: "frame"
          });
          continue
        }
        const Ik = qk.get(wk),
          Tk = kk?.root ?? ek;
        if (Ik !== Tk && jk.set(Tk, {
            name: Tk,
            texture: Ik,
            kind: "frame"
          }), kk) {
          const Fk = ik.get(kk.root);
          tk[wk] = {
            id: Fk,
            rotation: kk.rotation
          }, Zk.set(Ik, Fk), jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "rotation"
          })
        } else Zk.set(Ik, wk + 1)
      }
      for (const ek of Zk.keys()) jk.delete(ek);
      for (const [ek, wk] of Ik) {
        const kk = Zk.get(wk);
        void 0 === kk || Zk.has(ek) || (Zk.set(ek, kk), jk.delete(ek))
      }
      return {
        named: [...Zk].sort(((kk, Fk) => {
          let [Ik] = kk, [Xk] = Fk;
          return Ik < Xk ? -1 : Ik > Xk ? 1 : 0
        })).map((kk => {
          let [Fk, Ik] = kk;
          return {
            name: Fk,
            id: Ik
          }
        })),
        aliases: [...jk.values()],
        layers: tk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);