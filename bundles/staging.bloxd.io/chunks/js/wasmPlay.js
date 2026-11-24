export const id = 63;
export const ids = [63, 115, 116, 136];
export const modules = {
  39757: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm,
      f: () => Am
    });
    const hm = "The world isn't loaded, so no blocks can be seen.",
      Am = "The world isn't loaded, so nothing in it can be seen."
  },
  39229: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Km,
      e: () => Qm,
      g: () => Im
    });
    var hm = fm(4741),
      Am = fm(2813),
      am = fm(1877);
    const xm = new Map(Object.entries(hm.m).map((mm => {
      let [Tm, fm] = mm;
      return [fm, Tm]
    })));

    function wm(mm) {
      return (0, am.F)(mm).toFixed(1)
    }

    function Dm(mm, Tm) {
      return `camera set by ${xm.get(mm[Tm+1])}: heading ${`${wm(mm[Tm+2])} -> ${wm(mm[Tm+4])}`} deg, pitch ${`${wm(mm[Tm+3])} -> ${wm(mm[Tm+5])}`} deg, at ${mm[Tm].toFixed(1)} ms`
    }
    class im {
      constructor(mm, Tm) {
        this.width = mm, this.yp = Tm, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(mm * Tm)
      }
      push(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let hm = 0; hm < this.width; hm++) fm[hm] = mm[Tm + hm];
        return this.next = (this.next + 1) % this.yp, this.size = Math.min(this.size + 1, this.yp), fm
      }
      lines() {
        const mm = [],
          Tm = (this.next - this.size + this.yp) % this.yp;
        for (let fm = 0; fm < this.size; fm++) {
          const hm = (Tm + fm) % this.yp * this.width;
          mm.push(Array.from(this.data.subarray(hm, hm + this.width)).join(","))
        }
        return mm
      }
    }
    const Rm = 0,
      pm = 2,
      Em = 3,
      om = 4;

    function Om(mm) {
      return Number.isFinite(mm) ? String(Math.round(10 * mm) / 10) : String(mm)
    }

    function Ym(mm) {
      return Number.isFinite(mm) ? mm.toFixed(1) : String(mm)
    }
    class qm {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Fs = 0, this.pastLimit = 0, this.lockSkips = 0, this.jq = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.Fs > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.Fs > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class jm {
      constructor() {
        var mm = this;
        this.remote = (0, Am.p)(), this.tally = new qm, this.records = new im(10, this.remote ? 1 : 3600), this.events = new im(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(Tm) {
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [hm, Am, am, xm, wm, Dm, im, qm, jm, Vm] = mm.records.push(Tm, fm), Im = mm.tally;
          switch (Im.frames++, im) {
            case Rm:
              return void Im.idle++;
            case om:
              return void Im.jq++;
            case Em:
              return Im.lockSkips++, void(0 === am && 0 === xm || mm.outlier(`lock skip dropped raw (${Om(am)}, ${Om(xm)}) at ${Ym(hm)} ms`))
          }
          Im.looked++, Number.isFinite(Am) && (Im.dtMin = Math.min(Im.dtMin, Am), Im.dtMax = Math.max(Im.dtMax, Am), Im.dtSum += Am, Am > 0 && (Im.peakRate = Math.max(Im.peakRate, Math.hypot(wm, Dm) / Am))), Im.raw[0] += am, Im.raw[1] += xm, Im.turned[0] += wm, Im.turned[1] += Dm;
          const Km = Math.abs(am) > Vm || Math.abs(xm) > Vm,
            Qm = `raw (${Om(am)}, ${Om(xm)}) over ${Ym(Am)} ms, limit ${Om(Vm)}, filter v (${qm.toFixed(3)}, ${jm.toFixed(3)}) px/ms, at ${Ym(hm)} ms`;
          im === pm ? (Im.Fs++, mm.outlier(`spike put right: ${Qm} -> turned (${Om(wm)}, ${Om(Dm)})`)) : Km ? (Im.pastLimit++, mm.outlier(`kept past limit: ${Qm}`)) : Am > 50 && (Im.longFrames++, mm.remote || mm.outlier(`long frame: ${Qm}, turned in full`))
        }, this.onMouseMove = mm => {
          const Tm = this.tally,
            {
              movementX: fm,
              movementY: hm
            } = mm;
          Tm.events++;
          const Am = Math.max(Math.abs(fm), Math.abs(hm));
          Tm.eventMax = Math.max(Tm.eventMax, Am);
          const am = null !== document.pointerLockElement,
            xm = this.event;
          xm[0] = mm.timeStamp, xm[1] = fm, xm[2] = hm, xm[3] = am ? 1 : 0, this.events.push(xm), Am >= 200 && (Tm.bigEvents++, this.eventOutlier(`big mousemove (${fm}, ${hm}) at ${Ym(mm.timeStamp)} ms, lock ${am?"ni":"free"}`))
        }, this.onLockChange = () => {
          const mm = document.pointerLockElement;
          (0, Am.g)("look", `pointer lock ${mm?`gained (${mm.tagName.toLowerCase()})`:"lost"} at ${Ym(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Am.g)("look", `pointer lock request failed at ${Ym(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Am.g)("look", `page ${document.visibilityState} at ${Ym(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const mm = this.tally;
          if (this.tally = new qm, !mm.moved() || this.remote && !mm.hasEvent()) return;
          const Tm = mm.looked > 0 ? mm.dtSum / mm.looked : NaN,
            fm = [`${mm.frames} frames (${mm.looked} looked, ${mm.idle} idle${"wasm"===this.client?`, ${mm.jq} carried`:""})`, `dt avg ${Ym(Tm)} min ${Ym(mm.dtMin)} max ${Ym(mm.dtMax)}, ${mm.longFrames} long`, `${mm.events} mousemoves (max ${Om(mm.eventMax)} px, ${mm.bigEvents} big)`, `raw (${Om(mm.raw[0])}, ${Om(mm.raw[1])}) turned (${Om(mm.turned[0])}, ${Om(mm.turned[1])})`, `peak ${mm.peakRate.toFixed(2)} px/ms`, `put right ${mm.Fs}, past limit ${mm.pastLimit}, lock skips ${mm.lockSkips}`, "lock " + (document.pointerLockElement ? "ni" : "free")];
          mm.dropped > 0 && fm.push(`${mm.dropped} doubled spike copies dropped`), mm.cameraSets > 0 && fm.push(`${mm.cameraSets} camera sets`), mm.cameraSetsLost > 0 && fm.push(`${mm.cameraSetsLost} camera set records lost`), mm.lost > 0 && fm.push(`${mm.lost} records lost`), mm.suppressed > 0 && fm.push(`${mm.suppressed} outlier lines not shown`), (0, Am.g)("look", `1s: ${fm.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(mm, Tm) {
        this.client = mm, this.takes = Tm;
        const {
          screen: fm
        } = window;
        (0, Am.g)("look", `start: ${mm} client, dpr ${window.devicePixelRatio}, screen ${fm.width}x${fm.height}, pointer lock ${document.pointerLockElement?"ni":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, Am.f)("look", this.dump))
      }
      outlier(mm) {
        const Tm = this.tally;
        Tm.outliers >= 20 ? Tm.suppressed++ : (Tm.outliers++, (0, Am.g)("look", mm))
      }
      eventOutlier(mm) {
        const Tm = this.tally;
        Tm.eventLines >= 10 ? Tm.suppressed++ : (Tm.eventLines++, (0, Am.g)("look", mm))
      }
      takeRecords() {
        if (null === this.takes) return;
        const mm = this.takes.look();
        if (mm.length >= 2) {
          this.tally.lost += mm[0], this.tally.dropped += mm[1];
          for (let Tm = 2; Tm + 10 <= mm.length; Tm += 10) this.record(mm, Tm)
        }
        const Tm = this.takes.cameraSets();
        if (Tm.length >= hm.b) {
          this.tally.cameraSetsLost += Tm[0];
          for (let mm = hm.b; mm + hm.e <= Tm.length; mm += hm.e) this.tally.cameraSets++, this.outlier(Dm(Tm, mm))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let Vm = null;

    function Im(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Vm ??= new jm, Vm.start(mm, Tm), Vm.record
    }

    function Km() {
      var mm;
      null === (mm = Vm) || void 0 === mm || mm.endTake()
    }

    function Qm() {
      var mm;
      null === (mm = Vm) || void 0 === mm || mm.droppedCopy()
    }
  },
  34168: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    const hm = new Set(["chunkBorders"])
  },
  34322: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      e: () => Am,
      h: () => Rm
    });
    var hm = fm(1572);

    function Am(mm) {
      var Tm;
      return {
        ...xm.store,
        yaw: xm.store.yaw + (null !== (Tm = hm.e[mm].previewYaw) && void 0 !== Tm ? Tm : 0)
      }
    }
    const am = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      xm = {
        player: am,
        store: {
          ...am,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function wm(mm, Tm) {
      mm instanceof Promise ? mm.then(Tm).catch((mm => {
        console.error("Couldn't open the preview", mm)
      })) : Tm(mm)
    }
    class Dm {
      constructor(mm) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, wm(mm, (mm => {
          this.closed ? mm.close() : (this.opened = mm, null !== this.size && mm.resize(this.size.width, this.size.height), null !== this.view && mm.show(this.view))
        }))
      }
      show(mm) {
        var Tm;
        this.view = mm, null === (Tm = this.opened) || void 0 === Tm || Tm.show(mm)
      }
      resize(mm, Tm) {
        var fm;
        this.size = {
          width: mm,
          height: Tm
        }, null === (fm = this.opened) || void 0 === fm || fm.resize(mm, Tm)
      }
      close() {
        var mm;
        this.closed = !0, null === (mm = this.opened) || void 0 === mm || mm.close(), this.opened = null
      }
    }
    class im {
      constructor(mm) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(mm).then((mm => mm.ready)), wm(mm, (mm => {
          this.closed ? mm.close() : (this.opened = mm, null !== this.size && mm.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.opened) || void 0 === Tm ? void 0 : Tm.isReady()) && void 0 !== mm && mm
      }
      setCosmetic(mm, Tm) {
        var fm;
        null === (fm = this.opened) || void 0 === fm || fm.setCosmetic(mm, Tm)
      }
      playEmote(mm) {
        var Tm;
        null === (Tm = this.opened) || void 0 === Tm || Tm.playEmote(mm)
      }
      setOrbit(mm) {
        var Tm;
        null === (Tm = this.opened) || void 0 === Tm || Tm.setOrbit(mm)
      }
      resetCamera() {
        var mm;
        null === (mm = this.opened) || void 0 === mm || mm.resetCamera()
      }
      async untilDrawn(mm) {
        var Tm;
        await this.ready, await (null === (Tm = this.opened) || void 0 === Tm ? void 0 : Tm.untilDrawn(mm))
      }
      resize(mm, Tm) {
        var fm;
        this.size = {
          width: mm,
          height: Tm
        }, null === (fm = this.opened) || void 0 === fm || fm.resize(mm, Tm)
      }
      close() {
        var mm;
        this.closed = !0, null === (mm = this.opened) || void 0 === mm || mm.close(), this.opened = null
      }
    }
    const Rm = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(mm) {
        this.host = mm
      }
      setDefaultHost(mm) {
        this.makeDefault = mm
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(mm) {
        return new Dm(this.current().openMob(mm))
      }
      openPet(mm) {
        return new Dm(this.current().openPet(mm))
      }
      openMobLineup(mm) {
        return new Dm(this.current().openMobLineup(mm))
      }
      openCharacter(mm, Tm) {
        return new im(this.current().openCharacter(mm, Tm))
      }
    }
  },
  4985: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.d,
      d: () => Am,
      e: () => hm.l
    });
    var hm = fm(4989);
    const Am = [!1, !0].flatMap((mm => ["terrain", "liquid", "model"].map((Tm => ({
      strict: mm,
      program: Tm
    })))))
  },
  39342: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      ShaderPackPage: () => Dm,
      harnessShaderPackMode: () => Em,
      setHarnessUrlShaderPack: () => pm,
      shaderPackPage: () => Rm
    });
    var hm = fm(105),
      Am = fm(37),
      am = (fm(3466), fm(4985), fm(3461)),
      xm = fm(6609);
    fm(6578);
    const wm = {
      status: "none"
    };
    class Dm {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, am.h)(hm.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), im().then((mm => {
            mm && Am.g.removeItem(am.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, am.e)(hm.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const mm = await this.load();
        return "active" === mm.status ? mm.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((mm => (console.error("Failed to load the shader pack", mm), wm))).then((mm => (this.resolved ??= mm, mm))), this.pagePack
      }
      hasNone() {
        var mm;
        return "none" === (null === (mm = this.resolved) || void 0 === mm ? void 0 : mm.status)
      }
      block(mm) {
        this.resolved = {
          status: "blocked",
          messageKey: mm,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([fm.e(77), fm.e(133), fm.e(140)]).then((() => fm(41755))).then((mm => (mm.prefetchCompiler(), mm))), this.compiling
      }
      async readStored() {
        const mm = await im();
        return mm && this.compiler().then((mm => mm.reconcileHint())).catch((mm => {
          console.error("Failed to correct the shader pack hint", mm)
        })), mm
      }
      async read() {
        const mm = await this.preload();
        return mm ? (await this.compiler()).compilePagePack(mm) : wm
      }
    }
    async function im() {
      if (!(0, am.j)(hm.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const mm = await (0, xm.e)(!0);
        return mm || Am.g.setItem(am.b, !1), mm
      } catch (mm) {
        return console.error("Failed to read the stored shader pack", mm), Am.g.removeItem(am.b), null
      }
    }
    const Rm = new Dm;

    function pm(mm, Tm) {}

    function Em() {
      return null
    }
  },
  39383: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => pm,
      h: () => Em
    });
    var hm = fm(168),
      Am = fm(193),
      am = fm(1483),
      xm = fm(2932),
      wm = fm(1494),
      Dm = fm(36549),
      im = fm(690),
      Rm = fm(39342);

    function pm(mm) {
      (0, xm.reportClientError)("matchmake_failed", mm, hm.k[hm.k.SHADER_PACK])
    }
    async function Em(mm, Tm) {
      var fm;
      const hm = null === (fm = await Rm.shaderPackPage.preload()) || void 0 === fm ? void 0 : fm.listing,
        xm = (0, Dm.d)();
      hm && null !== xm && await wm.d.reportShaderPackSession(mm, {
        packId: hm.packId,
        sourceHash: hm.sourceHash,
        game: (0, am.e)(Tm, Am.y, "other"),
        playSessionId: xm,
        visitSessionId: (0, im.f)()
      })
    }
  },
  6609: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => am
    });
    var hm = fm(37);
    const Am = "shaderPack";
    async function am() {
      var mm;
      let Tm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (mm = await hm.e.getItem(Am, Tm)) && void 0 !== mm ? mm : null
    }
  },
  6578: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      loadShaderPackTextures: () => xm,
      shaderPackTextures: () => wm
    });
    var hm = fm(4989);
    let Am = null,
      am = null;

    function xm() {
      return am ??= Promise.all([fm.e(72), fm.e(188)]).then((() => fm(40597))).then((mm => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Tm,
          textureNameToIndex: fm,
          textureAnimationData: am
        } = mm;
        return Am ??= (0, hm.g)(fm, am, Tm), Am
      })), am
    }

    function wm() {
      if (null === Am) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Am
    }
  },
  39156: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm
    });
    var hm = fm(31),
      Am = fm(1286),
      am = fm(2979);
    const xm = "Reconnecting";
    class wm {
      constructor(mm) {
        this.hooks = mm, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = mm => {
          mm.persisted || this.leave()
        }, this.controller = new am.d((Tm => mm.reconnect(Tm)), {
          isSessionLive: () => !this.ended && mm.isLive(),
          onPhaseChanged: mm => {
            this.onPhaseChanged(mm)
          },
          onReconnected: Tm => {
            mm.onReconnected(Tm)
          },
          onGaveUp: Tm => {
            !this.ended && mm.isLive() && mm.onGaveUp(this.sessionBased, Tm)
          }
        })
      }
      onInitialInfo(mm, Tm) {
        this.graceMs = mm, this.sessionBased = Tm
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(mm) {
        this.ended || this.controller.onConnectionLost(mm, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const mm = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Tm = this.controller.heldToken;
        this.end(), mm && "" !== Tm && this.hooks.releaseSeat(Tm)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(mm) {
        const Tm = (0, am.n)(mm);
        Tm !== this.stopped && (this.stopped = Tm, this.hooks.freeze(Tm));
        const fm = "frozen" === mm || "resuming" === mm && this.frozen;
        fm && !this.frozen ? (0, Am.p)(xm, {
          overridesPause: !0
        }) : !fm && this.frozen && (0, Am.l)(xm), this.frozen = fm, this.setListening("connected" !== mm), hm.j.gp(am.m, fm ? "frozen" : mm)
      }
      setListening(mm) {
        mm !== this.listening && (this.listening = mm, mm ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39164: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm
    });
    class hm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = mm, this.now = Tm, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const mm = this.now(),
            Tm = mm - this.lastCheckAt <= 2e3;
          this.lastCheckAt = mm;
          const fm = "visible" === document.visibilityState;
          !fm || Tm && this.wasVisible || (this.resumedAt = mm), this.wasVisible = fm, fm && mm - this.lastHeardAt > 12e3 && mm - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Tm(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  34239: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am
    });
    var hm = fm(1103);

    function Am() {
      var mm, Tm;
      return null !== (mm = null === (Tm = screen.orientation) || void 0 === Tm ? void 0 : Tm.type) && void 0 !== mm ? mm : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const am = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Am() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Am(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, hm.lY)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const mm of this.resizers) mm()
          }
        }), 1e3)
      }
      heldSizer(mm) {
        let Tm = !1;
        return () => {
          if (Tm && this.isHeld()) return null;
          const fm = mm();
          return Tm ||= null !== fm, fm
        }
      }
      onRelease(mm) {
        return this.resizers.add(mm), () => {
          this.resizers.delete(mm)
        }
      }
    }
  },
  39370: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am
    });
    let hm = !1;
    async function Am(mm, Tm) {
      if (!hm) {
        hm = !0;
        try {
          const [{
            reloadBloxd: hm
          }, {
            NotificationProvider: Am
          }] = await Promise.all([Promise.resolve().then((() => fm(1713))), Promise.resolve().then((() => fm(1354)))]);
          if (!mm || !0 === await Am.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void hm(Tm)
        } catch (Am) {
          console.error("Leaving the replay failed", Am)
        }
        hm = !1
      }
    }
  },
  39171: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      e: () => Rm
    });
    var hm = fm(1696),
      Am = fm(198),
      am = fm(1681),
      xm = fm(1766),
      wm = fm(1214),
      Dm = fm(1162);
    async function im(mm, Tm) {
      return function(mm) {
        return "object" === typeof mm && null !== mm && mm.code === Am.b.VpnIp.code
      }(Tm) && function(mm) {
        return am.e.supports("appCheck") && mm.isLoggedIn() && !mm.hasTriedAppAttestation()
      }(mm) && await async function(mm) {
        try {
          const {
            token: Tm
          } = await (0, xm.d)(), {
            "3PSIDMCPP": fm
          } = await (0, Dm.postJsonWithMetricsCookiesAndJsonResponse)(`${wm.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Tm
          }, {
            retries: 0
          }, mm.getMetricsCookies());
          return mm.setAppAttestedAuthJwt(fm), !0
        } catch (Tm) {
          return Tm instanceof hm.e && "failed" === Tm.code ? (console.warn("The app couldn't get an App Check token:", Tm), mm.markAppAttestationTried()) : console.error("Failed to attest the app:", Tm), !1
        }
      }(mm)
    }
    async function Rm(mm, Tm) {
      try {
        return await Tm()
      } catch (fm) {
        if (!await im(mm, fm)) throw fm
      }
      return Tm()
    }
  },
  41049: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => wm,
      f: () => Dm
    });
    var hm = fm(1730);
    const Am = 33177600,
      am = 3e4;
    let xm = !1;

    function wm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: wm = 1,
        type: Dm = "image/png",
        quality: im
      } = hm;
      if (!mm.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (xm) return Promise.reject(new Error("A screenshot is already being taken"));
      xm = !0;
      const Rm = function(mm, Tm, fm) {
        const hm = Math.max(1, mm),
          am = Math.max(1, Tm),
          xm = Math.min(1, fm / Math.max(hm, am), Math.sqrt(Am / (hm * am)));
        return {
          width: Math.max(1, Math.floor(hm * xm)),
          height: Math.max(1, Math.floor(am * xm))
        }
      }(Tm, fm, mm.maxTextureSize);
      return mm.resize(Rm.width, Rm.height, wm * Rm.width / Math.max(1, Tm)), new Promise(((Tm, fm) => {
        let hm, Am = 2,
          wm = null;
        const Rm = () => {
          var Tm;
          xm = !1, null === (Tm = wm) || void 0 === Tm || Tm(), clearTimeout(hm), mm.restoreSize()
        };
        hm = setTimeout((() => {
          Rm(), fm(new Error("No frame was drawn to capture"))
        }), am), wm = mm.onFrameDrawn((() => {
          if (Am--, Am > 0) return;
          const {
            canvas: hm
          } = mm, am = {
            width: hm.width,
            height: hm.height
          };
          try {
            hm.toBlob((mm => {
              mm ? Tm({
                blob: mm,
                ...am
              }) : fm(new Error("The canvas gave no image"))
            }), Dm, im)
          } catch (xm) {
            fm(xm)
          } finally {
            Rm()
          }
        }))
      }))
    }
    async function Dm(mm, Tm, fm) {
      try {
        const Am = await wm(mm, Tm, fm);
        (0, hm.c)(Am.blob, `bloxd-screenshot-${Am.width}x${Am.height}-${Date.now()}.png`)
      } catch (Am) {
        console.error("Error taking screenshot:", Am)
      }
    }
  },
  39169: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Em,
      h: () => Rm
    });
    var hm = fm(198),
      Am = fm(1810),
      am = fm(1223),
      xm = fm(8854);
    const wm = [250, 500, 1e3, 2e3, 1250],
      Dm = 406;

    function im(mm) {
      if ("object" !== typeof mm || null === mm) return !1;
      const {
        code: Tm,
        message: fm
      } = mm, Am = hm.b.duplicateLobbyNameError;
      return (Tm === Am.code || Tm === Dm) && (fm === Am.text || fm === Am.text + hm.i)
    }
    async function Rm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Am.c;
      for (let Am = 0;; Am++) {
        let xm;
        (0, am.h)(Tm);
        try {
          return await mm()
        } catch (hm) {
          if (xm = wm[Am], void 0 === xm || !im(hm)) throw hm
        }
        await fm(xm, Tm)
      }
    }
    const pm = new Set([hm.b.duplicateLobbyNameError.code, hm.b.lobbyCantBeCreated.code, hm.b.roomDisposedEarlyError.code, hm.b.roomDisposedLateError.code, hm.b.serverRoomLimitReached.code]);

    function Em(mm) {
      if (im(mm)) return !0;
      const Tm = (0, xm.d)(mm);
      return "number" === typeof Tm && pm.has(Tm)
    }
  },
  39283: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(339),
      Am = fm(135),
      am = fm(37);

    function xm() {
      am.g.setItem(hm.Gb, am.g.getItem(hm.Gb) + 1), (0, Am.g)() && am.g.setItem(hm.Cb, am.g.getItem(hm.Cb) + 1)
    }
  },
  36545: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Qm,
      d: () => nm
    });
    var hm = fm(1041),
      Am = fm(208),
      am = fm(347),
      xm = fm(658),
      wm = fm(354),
      Dm = fm(1047),
      im = fm(675),
      Rm = fm(713),
      pm = fm(4460),
      Em = fm(105),
      om = fm(135),
      Om = fm(1713),
      Ym = fm(115),
      qm = fm(36549),
      jm = fm(37),
      Vm = fm(690),
      Im = fm(330),
      Km = fm(36554);

    function Qm() {
      var mm, Tm;
      return [...null !== (mm = navigator.languages) && void 0 !== mm ? mm : [null !== (Tm = navigator.language) && void 0 !== Tm ? Tm : "none"], "en-gb"]
    }

    function nm(mm, Tm, fm, nm, Jm) {
      const cm = (0, hm.k)(Tm) ? (0, hm.n)(Tm) : null,
        zm = mm.isLoggedIn() && void 0 !== (0, Am.c)(am.i, om.q) ? (0, Im.q)() : null,
        Zm = {
          cookies: (0, Om.getAllCookiesForGameNameWithVariation)(Tm),
          isMobile: (0, Em.isMobile)(),
          isUsingCustomGameTexturePack: null !== cm && Jm(cm),
          generalCookies: {
            joinDiscord: !!jm.g.getItem("DiscordPressed"),
            newGo: pm.d,
            ...mm.getMetricsCookies(),
            trafficCode: nm,
            compliance: Em.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Em.getBrowserName)(),
            version: (0, Em.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Em.getPlatformType)(),
            deviceType: (0, Ym.d)()
          },
          isLoggedIn: mm.isLoggedIn(),
          lobbyName: fm,
          languages: Qm(),
          version: xm.d,
          siteUsed: om.q,
          subsiteUsed: om.w,
          playSessionId: (0, qm.i)(Tm),
          visitSessionId: (0, Vm.f)(),
          clientReason: im.s.reason,
          budgetBasis: (0, Km.g)(),
          ...null !== Rm.k && {
            diagClaim: Rm.k.claimId
          },
          ...null !== zm && {
            webGpuLoss: zm
          }
        };
      return null !== cm && (0, wm.Ac)(cm) ? (Zm.lobbyName = (0, hm.h)(cm, (0, hm.m)(Tm), fm), {
        roomName: `classic_${Dm.e}`,
        joinOptions: Zm
      }) : {
        roomName: Tm,
        joinOptions: Zm
      }
    }
  },
  39200: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => om,
      i: () => Em
    });
    const hm = "ue:",
      Am = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      am = "[A-Za-z0-9]{1,24}",
      xm = 15,
      wm = new RegExp(`^${am}$`);
    new RegExp(`^${hm}(${[...Am,"other"].join("|")}):(?:n|k(${am})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function Dm(mm, Tm, fm, am, Dm) {
      const im = "string" === typeof mm && Am.includes(mm) ? mm : "other";
      let Rm = "n";
      return "string" === typeof Tm ? Rm = wm.test(Tm) ? `k${Tm}` : "n" : "number" === typeof fm && Number.isInteger(fm) && fm >= 0 && fm <= xm && (Rm = `b${fm}`), `${hm}${im}:${Rm}:${am?1:0}${Dm?1:0}`
    }
    var im = fm(1668),
      Rm = fm(1722);
    let pm = null;

    function Em(mm) {
      const Tm = mm instanceof Element && mm !== document.body && mm !== document.documentElement && !(0, im.q)(mm) && !mm.closest("#root");
      return {
        editable: (0, Rm.b)(mm),
        outsideView: Tm
      }
    }

    function om(mm) {
      return pm ??= function(mm) {
        try {
          const {
            editable: Tm,
            outsideView: fm
          } = Em(mm.target), hm = mm;
          return Dm(mm.type, hm.code, hm.button, Tm, fm)
        } catch {
          return Dm(null, null, null, !1, !1)
        }
      }(mm), pm
    }
  },
  40740: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm
    });
    var hm = fm(39757);

    function Am(mm) {
      return {
        current: () => mm,
        watch: () => () => {}
      }
    }

    function am() {}
    const xm = Object.freeze([0, 0, 0]),
      wm = {
        states: {
          health: Am({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Am({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Am({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Am({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Am({}),
          creativeVisibility: Am({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Am(null),
          heldItemAim: Am({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Am(!1),
          gliderBoostFuel: Am(0),
          flight: Am({
            canFly: !1,
            flying: !1
          }),
          crafting: Am({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Am({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Am({}),
          fullInventory: Am(!1),
          crosshairTarget: Am({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Am(!0),
          freeCamera: Am({
            allowed: !1,
            movesFly: !1
          }),
          replay: Am(null),
          replayEdits: Am(null),
          replayRecorder: Am({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Am(!1)
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
          selectHotbarSlot: am,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: am,
          setInventoryOpen: am,
          changeIronChestPasskey: am,
          dragReplayCamera: am,
          applyTemporaryThirdPerson: am,
          holdEmoteWheel: am,
          recordFlyingMiddleText: am,
          focusCrafting: am,
          craftRecipe: () => ({
            iw: 0,
            Kx: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: am,
          setShopOpen: am,
          buyShopItem: am,
          lobbyManage: am,
          sendChatMessage: am,
          ignorePlayer: am,
          reportPlayer: am,
          reportWorldCodeChat: am,
          requestDiscordReportKey: am,
          reportLobbyOrGame: am,
          playEmote: am,
          updateMyCosmetic: am,
          writeOnBoard: am,
          writeBook: am,
          writeNameTag: am,
          setCustomLobbyBlock: am,
          openIronChest: am,
          sendCodeCollab: am,
          clickCodeBlock: am,
          bindCustomButtonKeys: am,
          pressCustomButton: am,
          moveReplayFreecam: am,
          holdReplayFreecamVertical: am,
          respawn: am,
          wakeUp: am,
          requestLeaderboard: am,
          completeTask: am,
          setServerCookie: am,
          answerUiRequest: am,
          chooseRewardedAd: am,
          setCameraZoom: am,
          setFreeCameraMovesFly: am,
          setBlockHighlight: am,
          setCrosshairInteractPrompt: am,
          setLookSensitivity: am,
          replayAction: am,
          setReplayPlaying: am,
          seekReplay: am,
          setReplayCameraMode: am,
          syncReplayCameraMode: am,
          setReplayCameraKeyframe: am,
          moveReplayCameraKeyframe: am,
          deleteReplayCameraKeyframes: am,
          setReplayPlaybackMark: am,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: am,
          exportReplayVideo: am,
          toggleRecording: am,
          saveClip: am,
          setRecorderPrefs: am,
          setReplayViewerOpen: am
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => hm.b,
          worldCodeAiGameState: () => hm.f
        },
        lookups: {
          localPos: () => xm,
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
  41045: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      h: () => am
    });
    var hm = fm(2123),
      Am = fm(1041);

    function am(mm, Tm) {
      return null !== mm.gameSource && (0, hm.k)(Tm, mm.gameSource)
    }

    function xm(mm, Tm) {
      if (null === mm.gameSource || "" === mm.gameSource || null === Tm) return !0;
      const fm = (0, Am.k)(Tm) ? (0, Am.n)(Tm) : null;
      return null !== fm && am(mm, fm)
    }
  },
  41022: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm
    });
    var hm = fm(645),
      Am = fm(41024),
      am = fm(40887);
    async function xm(mm) {
      const Tm = await (0, Am.h)({
        Helmet: fm(38016),
        Chestplate: fm(38020),
        Gauntlets: fm(38038),
        Leggings: fm(38025),
        Boots: fm(38032)
      } [hm.e[mm]]);
      try {
        return (0, am.j)(Tm)
      } finally {
        Tm.close()
      }
    }
    const wm = new class {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Am.l;
        this.decode = mm, this.register = Tm, this.decoded = new Map
      }
      warm() {
        for (let mm = 0; mm < hm.e.length; mm++) this.part(mm).catch((Tm => {
          console.warn(`The grayscale armour ${hm.e[mm]} image didn't decode ahead of use`, Tm)
        }))
      }
      async load(mm, Tm) {
        const {
          width: fm,
          height: am,
          pixels: xm
        } = await this.part(mm), wm = new ImageData(function(mm, Tm) {
          const fm = new Uint8ClampedArray(mm.length);
          for (let hm = 0; hm < mm.length; hm += 4) fm[hm] = Math.round(mm[hm] * Tm[0] / 255), fm[hm + 1] = Math.round(mm[hm + 1] * Tm[1] / 255), fm[hm + 2] = Math.round(mm[hm + 2] * Tm[2] / 255), fm[hm + 3] = mm[hm + 3];
          return fm
        }(xm, function(mm) {
          return [mm >>> 16 & 255, mm >>> 8 & 255, 255 & mm]
        }(Tm)), fm, am);
        let Dm;
        try {
          Dm = await createImageBitmap(wm, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (im) {
          throw new Am.c("decode", `grayscale armour ${hm.e[mm]}`, {
            cause: im
          })
        }
        return {
          id: this.register(Dm),
          width: fm,
          height: am
        }
      }
      part(mm) {
        const Tm = this.decoded.get(mm);
        if (void 0 !== Tm) return Tm;
        const fm = this.decode(mm).catch((Tm => {
          throw this.decoded.delete(mm), Tm instanceof Am.c ? Tm : new Am.c("decode", `grayscale armour ${hm.e[mm]}`, {
            cause: Tm
          })
        }));
        return this.decoded.set(mm, fm), fm
      }
    }
  },
  41019: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      e: () => qm,
      g: () => Rm,
      k: () => pm,
      o: () => Ym
    });
    var hm = fm(40866),
      Am = fm(41022),
      am = fm(41024);
    const xm = 396,
      wm = 1,
      Dm = 2,
      im = 3,
      Rm = {
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
      pm = {
        File: 0,
        Item: 1
      },
      Em = 0,
      om = 1,
      Om = 2;

    function Ym(mm) {
      const Tm = (0, hm.p)();
      Tm.catch((() => {}));
      let Am = null;
      return {
        glbUrl: mm,
        lifeformAtlasUrl: async mm => (await Tm).lifeformAtlasUrl(mm),
        armourAtlasUrl: async () => (await fm.e(204).then((() => fm(34376)))).armourAtlasUrl,
        capeUrl: async mm => (await Tm).capeUrl(mm),
        attachmentImageUrl: async mm => (await Tm).attachmentImageUrl(mm),
        blockImageUrl: async mm => (await Tm).blockImageUrl(mm),
        groupAtlasUrl: async mm => (await Tm).groupAtlasUrl(mm),
        particleTextureUrl: async mm => (await Tm).particleTextureUrl(mm),
        particleItemUrl: async mm => (Am ??= fm.e(38).then((() => fm(51035))).catch((mm => {
          throw Am = null, mm
        })), (await Am).particleItemUrl(mm))
      }
    }
    class qm {
      constructor(mm, Tm) {
        var fm, xm, wm, Dm;
        let im = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = mm, this.onFailure = Tm, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.PO = !1, this.load = null !== (fm = im.load) && void 0 !== fm ? fm : (mm, Tm) => (0, am.j)(mm, im.fetchImage, Tm), this.release = null !== (xm = im.release) && void 0 !== xm ? xm : am.o, this.fetchFile = null !== (wm = im.fetchFile) && void 0 !== wm ? wm : mm => (0, hm.l)(mm), this.greyscaleArmour = null !== (Dm = im.greyscaleArmour) && void 0 !== Dm ? Dm : Am.e
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(mm, Tm) {
        this.glbWrittenImages.set(mm, Jm(Tm))
      }
      glbTaken(mm, Tm) {
        const fm = this.glbWrittenImages.get(mm);
        this.glbWrittenImages.delete(mm), Tm && this.setGlbImages(mm, void 0 !== fm && fm.length > 0 ? fm : void 0)
      }
      setGlbImages(mm, Tm) {
        var fm;
        this.glbTakenCount.set(mm, (null !== (fm = this.glbTakenCount.get(mm)) && void 0 !== fm ? fm : 0) + 1), void 0 === Tm ? this.glbImages.delete(mm) : this.glbImages.set(mm, Tm);
        const hm = [];
        for (const {
            key: Am
          }
          of this.loading.values()) Am.kind === Rm.Glb && Am.word === mm && hm.push(Am);
        for (let Am = this.ready.length - 1; Am >= 0; Am--) {
          const {
            key: Tm,
            id: fm
          } = this.ready[Am];
          Tm.kind === Rm.Glb && Tm.word === mm && (this.ready.splice(Am, 1), null !== fm && (this.answered.delete(fm), this.release(fm)), hm.push(Tm))
        }
        this.loadAgain(hm)
      }
      onEvent(mm) {
        if (this.PO) return;
        const Tm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength);
        for (let fm = 0; fm + 8 <= mm.byteLength; fm += 8) {
          const mm = Tm.getUint8(fm),
            hm = Tm.getUint32(fm + 4, !0);
          if (mm === im) {
            this.answered.delete(hm), this.release(hm);
            continue
          }
          const Am = {
            kind: Tm.getUint8(fm + 1),
            index: Tm.getUint8(fm + 2),
            word: hm
          };
          mm === wm ? this.want(Am) : mm === Dm && this.loading.delete(jm(Am))
        }
      }
      reload(mm, Tm) {
        const fm = fm => mm.includes(fm.kind) && (void 0 === Tm || Tm(fm)),
          hm = new Map;
        for (const Am of this.answered.values()) fm(Am) && hm.set(jm(Am), Am);
        for (const [Am, {
            key: am
          }] of this.loading) fm(am) && hm.set(Am, am);
        this.loadAgain(hm.values())
      }
      loadAgain(mm) {
        for (const Tm of mm) this.loading.delete(jm(Tm)), this.want(Tm)
      }
      drain(mm) {
        if (null !== mm)
          for (; this.ready.length > 0;) {
            if (!mm(xm, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.PO = !0, this.loading.clear(), this.ready.length = 0;
        for (const mm of this.answered.keys()) this.release(mm);
        this.answered.clear()
      }
      want(mm) {
        const Tm = jm(mm);
        if (this.loading.has(Tm)) return;
        const fm = {
          key: mm
        };
        this.loading.set(Tm, fm), this.loadKey(mm).then((hm => {
          this.PO || this.loading.get(Tm) !== fm ? this.release(hm.id) : (this.loading.delete(Tm), this.answered.set(hm.id, mm), this.ready.push({
            record: Im(mm, Em, hm),
            key: mm,
            id: hm.id
          }))
        }), (hm => {
          if (this.PO || this.loading.get(Tm) !== fm) return;
          this.loading.delete(Tm), this.onFailure({
            key: mm,
            error: hm
          });
          const Am = hm instanceof am.c && "decode" === hm.stage ? om : Om;
          this.ready.push({
            record: Im(mm, Am, null),
            key: mm,
            id: null
          })
        }))
      }
      async loadKey(mm) {
        switch (mm.kind) {
          case Rm.Glb:
            return this.load(await this.glbImage(mm), "none");
          case Rm.LifeformAtlas:
            return this.load(Vm(await this.sources.lifeformAtlasUrl(mm.word), mm), "none");
          case Rm.ArmourAtlas:
            return this.load(Vm(await this.sources.armourAtlasUrl(), mm), "none");
          case Rm.Cape:
            return this.load(Vm(await this.sources.capeUrl(mm.word), mm), "none");
          case Rm.AttachmentImage:
            return this.load(Vm(await this.sources.attachmentImageUrl(mm.word), mm), "none");
          case Rm.GroupAtlas:
            return this.load(Vm(await this.sources.groupAtlasUrl(mm.word), mm), "none");
          case Rm.BlockImage:
            return this.load(Vm(await this.sources.blockImageUrl(mm.word), mm), "none");
          case Rm.Particle: {
            const Tm = await (mm.index === pm.Item ? this.sources.particleItemUrl(mm.word) : this.sources.particleTextureUrl(mm.word));
            return this.load(Vm(Tm, mm), "flipY")
          }
          case Rm.GreyscaleArmour:
            return this.greyscaleArmour.load(mm.index, mm.word);
          default:
            throw new am.c("fetch", `image kind ${mm.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(mm) {
        var Tm;
        let fm = this.glbImages.get(mm.word);
        if (void 0 === fm) {
          const Tm = this.glbTakenCount.get(mm.word),
            hm = Vm(await this.sources.glbUrl(mm.word), mm);
          try {
            fm = Jm(await this.fetchFile(hm))
          } catch (Am) {
            throw new am.c("fetch", hm, {
              cause: Am
            })
          }
          this.glbTakenCount.get(mm.word) === Tm && this.glbImages.set(mm.word, fm)
        }
        const hm = null === (Tm = fm) || void 0 === Tm ? void 0 : Tm[mm.index];
        if (!hm) throw new am.c("decode", `image ${mm.index} of file ${2147483647&mm.word}`, {
          cause: null
        });
        return hm
      }
    }

    function jm(mm) {
      let {
        kind: Tm,
        index: fm,
        word: hm
      } = mm;
      return `${Tm}:${fm}:${hm}`
    }

    function Vm(mm, Tm) {
      if (null === mm) throw new am.c("fetch", `no URL for image ${jm(Tm)}`, {
        cause: null
      });
      return mm
    }

    function Im(mm, Tm, fm) {
      var hm, Am, am;
      const xm = new Uint8Array(16),
        wm = new DataView(xm.buffer);
      return wm.setUint8(0, mm.kind), wm.setUint8(1, mm.index), wm.setUint8(2, Tm), wm.setUint32(4, mm.word, !0), wm.setUint32(8, null !== (hm = null === fm || void 0 === fm ? void 0 : fm.id) && void 0 !== hm ? hm : 0, !0), wm.setUint16(12, Math.min(null !== (Am = null === fm || void 0 === fm ? void 0 : fm.width) && void 0 !== Am ? Am : 0, 65535), !0), wm.setUint16(14, Math.min(null !== (am = null === fm || void 0 === fm ? void 0 : fm.height) && void 0 !== am ? am : 0, 65535), !0), xm
    }
    const Km = 1179937895,
      Qm = 1313821514,
      nm = 5130562;

    function Jm(mm) {
      var Tm;
      const fm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength);
      if (mm.byteLength < 20 || fm.getUint32(0, !0) !== Km || fm.getUint32(16, !0) !== Qm) return [];
      let hm, Am = 20 + fm.getUint32(12, !0);
      try {
        hm = JSON.parse((new TextDecoder).decode(mm.subarray(20, Am)))
      } catch {
        return []
      }
      for (; Am + 8 <= mm.byteLength && fm.getUint32(Am + 4, !0) !== nm;) Am += 8 + fm.getUint32(Am, !0);
      const am = null !== (Tm = hm.images) && void 0 !== Tm ? Tm : [];
      if (0 === am.length || Am + 8 > mm.byteLength) return am.map((() => null));
      const xm = mm.subarray(Am + 8, Math.min(mm.byteLength, Am + 8 + fm.getUint32(Am, !0)));
      return am.map((mm => {
        var Tm, fm, Am;
        const am = void 0 === mm.bufferView || null === (Tm = hm.bufferViews) || void 0 === Tm ? void 0 : Tm[mm.bufferView];
        if (!am || 0 !== (null !== (fm = am.buffer) && void 0 !== fm ? fm : 0) || void 0 === am.byteLength) return null;
        const wm = null !== (Am = am.byteOffset) && void 0 !== Am ? Am : 0,
          Dm = wm + am.byteLength;
        return Dm <= xm.byteLength ? xm.slice(wm, Dm) : null
      }))
    }
  },
  40743: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      e: () => am,
      i: () => Am
    });
    let hm = null;

    function Am(mm) {
      hm = mm
    }

    function am(mm) {
      hm === mm && (hm = null)
    }

    function xm() {
      var mm;
      null === (mm = hm) || void 0 === mm || mm()
    }
  },
  36672: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Rm,
      g: () => Em,
      k: () => jm,
      l: () => im
    });
    var hm = fm(23),
      Am = fm(2364),
      am = fm(2373),
      xm = fm(2379),
      wm = fm(2466),
      Dm = fm(31);

    function im(mm, Tm) {
      return (!(0, xm.e)() || 0 === mm && 0 === Tm) && (0, am.y)(Am.i.Joystick, 0, mm, Tm, 0)
    }
    const Rm = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function pm(mm) {
      return mm.classList.contains("TouchKeyHit") && om() ? null : mm.firstElementChild
    }

    function Em(mm) {
      return mm.classList.contains("TouchKeyHit") && !mm.classList.contains("CanvasZone") ? {
        whole: !om(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Om(pm(mm))
      }
    }

    function om() {
      return document.documentElement.classList.contains(wm.i)
    }

    function Om(mm) {
      return !(mm instanceof HTMLElement) || mm.offsetWidth <= 0 || mm.offsetHeight <= 0 ? null : {
        width: mm.offsetWidth,
        height: mm.offsetHeight
      }
    }

    function Ym(mm, Tm) {
      const fm = mm => Math.min(65535, Math.round(4 * mm));
      return (fm(mm) | fm(Tm) << 16) >>> 0
    }

    function qm(mm) {
      return {
        x: mm.left + mm.width / 2,
        y: mm.top + mm.height / 2,
        radius: Math.min(mm.width, mm.height) / 2
      }
    }
    const jm = new class {
      constructor(mm) {
        this.write = mm, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Tm ? this.elements.set(mm, {
          element: Tm,
          hidden: fm
        }) : this.elements.delete(mm), this.measureOne(mm)
      }
      measure() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = mm.left, this.canvasTop = mm.top;
        for (const Tm of this.elements.keys()) this.measureOne(Tm)
      }
      hitZone(mm, Tm) {
        let fm = null,
          hm = 1;
        for (const Am of this.elements.keys()) {
          const am = this.shown(Am);
          if (!am) continue;
          const {
            rect: xm,
            element: wm
          } = am, Dm = qm(xm), im = Math.max(0, xm.width / 2 - Dm.radius), Rm = Math.max(0, xm.height / 2 - Dm.radius), Em = Math.max(0, Math.abs(mm - Dm.x) - im), om = Math.max(0, Math.abs(Tm - Dm.y) - Rm), Ym = wm.firstElementChild;
          let jm = Math.hypot(Em, om) / Dm.radius;
          const Vm = Om(pm(wm));
          Vm && (jm = Math.min(jm, Math.max(2 * Math.abs(mm - Dm.x) / Vm.width, 2 * Math.abs(Tm - Dm.y) / Vm.height))), jm < hm && (fm = {
            code: Am,
            element: wm,
            key: Ym,
            ...Dm
          }, hm = jm)
        }
        return fm
      }
      measureOne(mm) {
        const Tm = this.shown(mm);
        if (!Tm) return void this.write(Am.i.TouchZone, mm, 0, 0, 0);
        const {
          rect: fm,
          element: hm
        } = Tm, am = qm(fm);
        this.write(Am.i.TouchZone, mm, am.x - this.canvasLeft, am.y - this.canvasTop, Ym(fm.width, fm.height));
        const xm = Om(pm(hm));
        this.write(Am.i.TouchZone, 256 | mm, 0, 0, xm ? Ym(xm.width, xm.height) : 0)
      }
      shown(mm) {
        const Tm = this.elements.get(mm),
          fm = hm.c.get("worldPanelHud");
        if (!Tm || Tm.hidden || "none" === fm) return null;
        const Am = Tm.element.getBoundingClientRect();
        return Am.width <= 0 || Am.height <= 0 ? null : {
          rect: Am,
          element: Tm.element
        }
      }
    }(am.y);
    (0, Dm.m)(wm.e, (() => {
      jm.measure()
    }))
  },
  40783: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Dm,
      e: () => im
    });
    var hm = fm(40921),
      Am = fm(39171),
      am = fm(36545),
      xm = fm(40790),
      wm = fm(40765);
    const Dm = hm.e.timeForPlayerToConnect - 1e4;
    async function im(mm, Tm, fm, hm) {
      let Dm;
      try {
        Dm = await mm.getTrafficCode()
      } catch (Om) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", Om), new wm.s(Om)
      }
      const {
        gameNameWithVariation: im,
        lobbyName: Rm
      } = Tm, pm = () => {
        const Tm = (0, am.d)(mm, im, Rm, Dm, (mm => {
          var Tm;
          return null !== (Tm = null === fm || void 0 === fm ? void 0 : fm.isUsingCustomGameTexturePack(mm)) && void 0 !== Tm && Tm
        }));
        Tm.joinOptions.wasmClient = !0;
        const Am = (0, xm.O)();
        return null !== Am && (Tm.joinOptions.renderBackend = Am), Tm.joinOptions.joinAdHold = hm, Tm
      }, {
        roomName: Em,
        joinOptions: om
      } = pm();
      return {
        endpoint: Tm.endpoint,
        roomName: Em,
        joinOptions: om,
        session: {
          gameNameWithVariation: im,
          lobbyName: Rm,
          playerDbId: mm.whamm
        },
        optionsAfterRefusal: async Tm => await (0, Am.d)(mm, Tm) ? pm().joinOptions : null
      }
    }
  },
  41032: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Rm,
      f: () => am,
      j: () => pm,
      l: () => xm
    });
    var hm = fm(41019),
      Am = fm(40866);
    const am = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(mm) {
        this.change((() => {
          this.page = mm
        }))
      }
      setSessionFiles(mm) {
        const Tm = void 0 !== this.session && void 0 === mm;
        if (this.change((() => {
            this.session = mm
          })), Tm)
          for (const fm of [...this.pageListeners]) fm()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(mm) {
        return this.pageListeners.add(mm), () => {
          this.pageListeners.delete(mm)
        }
      }
      setFollower(mm) {
        this.follower = mm, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const mm of [...this.wantedListeners]) mm();
        this.startFollower()
      }
      onWanted(mm) {
        return this.wantedListeners.add(mm), () => {
          this.wantedListeners.delete(mm)
        }
      }
      onChange(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      startFollower() {
        const mm = this.follower;
        this.isWanted && null !== mm && (this.follower = null, mm((() => {
          this.follower = mm
        })))
      }
      change(mm) {
        const Tm = this.current;
        if (mm(), this.current !== Tm)
          for (const fm of this.listeners) fm()
      }
    };

    function xm(mm, Tm) {
      return {
        ...mm,
        armourAtlasUrl: () => {
          var fm, hm;
          return null !== (fm = null === (hm = Tm()) || void 0 === hm ? void 0 : hm.armourAtlasUrl()) && void 0 !== fm ? fm : mm.armourAtlasUrl()
        },
        lifeformAtlasUrl: fm => Dm(Tm(), (mm => mm.LIFEFORM_ATLAS_PATHS[fm]), (() => mm.lifeformAtlasUrl(fm))),
        groupAtlasUrl: fm => Dm(Tm(), (mm => mm.GROUP_ATLAS_PATHS[fm]), (() => mm.groupAtlasUrl(fm))),
        particleItemUrl: hm => im(Tm(), (async () => {
          const mm = await fm.e(38).then((() => fm(51035))).catch((() => null));
          return (null === mm || void 0 === mm ? void 0 : mm.particleItemSprite(hm)) || null
        }), (() => mm.particleItemUrl(hm))),
        blockImageUrl: fm => im(Tm(), (async () => {
          var mm, Tm;
          return null !== (mm = null === (Tm = await wm()) || void 0 === Tm ? void 0 : Tm.blockImageName(fm)) && void 0 !== mm ? mm : null
        }), (() => mm.blockImageUrl(fm)))
      }
    }

    function wm() {
      return (0, Am.p)().catch((() => null))
    }

    function Dm(mm, Tm, fm) {
      return im(mm, (async () => {
        var mm;
        const fm = await wm(),
          hm = null === fm ? null : Tm(fm),
          Am = null !== (mm = null === hm || void 0 === hm ? void 0 : hm.slice(hm.lastIndexOf("/") + 1)) && void 0 !== mm ? mm : null;
        return "Player_Atlas" === Am ? null : Am
      }), fm)
    }
    async function im(mm, Tm, fm) {
      if (null !== mm) {
        const fm = await Tm(),
          hm = null === fm ? null : mm.textureUrl(fm);
        if (null !== hm) return hm
      }
      return fm()
    }
    const Rm = 0;

    function pm(mm) {
      const Tm = [hm.g.ArmourAtlas, hm.g.LifeformAtlas, hm.g.GroupAtlas, hm.g.BlockImage, hm.g.Particle];
      mm.reload(Tm, (mm => {
        switch (mm.kind) {
          case hm.g.Particle:
            return mm.index === hm.k.Item;
          case hm.g.LifeformAtlas:
            return mm.word !== Rm;
          default:
            return !0
        }
      }))
    }
  },
  40928: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm,
      d: () => wm,
      e: () => xm,
      h: () => Am,
      l: () => am
    });
    const hm = 1e3;

    function Am() {
      Dm((() => {
        window.location.reload()
      }))
    }

    function am() {
      return new Promise((() => {}))
    }

    function xm(mm) {
      Dm((() => {
        window.location.replace(mm(window.location.href))
      }))
    }

    function wm(mm) {
      Promise.resolve().then((() => fm(112))).then((Tm => {
        let {
          currentUrl: fm
        } = Tm;
        xm((() => fm.mergeSearchParamsInto(mm)))
      }), (() => {
        xm((() => mm))
      }))
    }

    function Dm(mm) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => fm(1713))).then((Tm => {
        let {
          prepareForUnloadWithoutConfirmation: fm
        } = Tm;
        try {
          fm()
        } catch (hm) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", hm), window.onbeforeunload = null
        }
        mm()
      }), (() => {
        window.onbeforeunload = null, mm()
      })) : mm()
    }
  },
  5004: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return Am(mm, Tm)
    }

    function Am(mm, Tm) {
      if (mm === Tm) return !0;
      if ("object" !== typeof mm || "object" !== typeof Tm || null === mm || null === Tm || Array.isArray(mm) !== Array.isArray(Tm)) return !1;
      const fm = mm,
        hm = Tm,
        am = Object.keys(fm);
      return am.length === Object.keys(hm).length && am.every((mm => Object.prototype.hasOwnProperty.call(hm, mm) && Am(fm[mm], hm[mm])))
    }
    fm.d(Tm, {
      e: () => hm
    })
  },
  40989: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => nm,
      f: () => Km,
      j: () => Ym,
      l: () => Om
    });
    var hm = fm(1810),
      Am = fm(1223),
      am = fm(39169),
      xm = fm(36573),
      wm = fm(39187),
      Dm = fm(40765);
    const im = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Rm = 3,
      pm = [500, 1500];

    function Em(mm) {
      const Tm = new URL(mm);
      return {
        secure: "https:" === Tm.protocol || "wss:" === Tm.protocol,
        host: Tm.host,
        pathname: Tm.pathname.replace(/\/+$/, ""),
        search: Tm.searchParams.toString()
      }
    }

    function om(mm, Tm, fm) {
      const {
        secure: hm,
        host: Am,
        pathname: am,
        search: xm
      } = Em(mm);
      return `${hm?"https":"http"}://${Am}${am}/matchmake/${Tm}/${encodeURIComponent(fm)}${xm?`?${xm}`:""}`
    }

    function Om(mm, Tm) {
      var fm;
      const hm = null !== (fm = Tm.protocol) && void 0 !== fm ? fm : "ws";
      if ("ws" !== hm) throw new Error(`seat reservation asks for the ${hm} transport`);
      const {
        secure: Am,
        host: am,
        pathname: xm,
        search: wm
      } = Em(mm), Dm = new URLSearchParams(wm);
      Dm.append("sessionId", Tm.sessionId), Tm.reconnectionToken && Dm.append("reconnectionToken", Tm.reconnectionToken);
      return `${Am?"wss":"ws"}://${Tm.room.publicAddress||`${am}${xm}`}/${Tm.room.processId}/${Tm.room.roomId}?${Dm.toString()}`
    }
    async function Ym(mm, Tm, fm) {
      var wm;
      let im = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Em = null !== (wm = im.sleep) && void 0 !== wm ? wm : hm.c,
        Om = new Am.b(im.signal),
        Ym = new xm.c((() => {
          (0, Am.d)(Om.controller, new xm.e("seat"))
        })),
        {
          signal: Im
        } = Om;
      try {
        const hm = await (0, am.h)((() => async function(mm, Tm, fm, hm) {
          var am;
          const {
            signal: xm,
            sleep: wm
          } = hm, im = om(mm, "joinOrCreate", Tm), Em = JSON.stringify(fm);
          let Om = null;
          for (let om = 0; om < Rm; om++) {
            var Ym;
            if (om > 0) await wm(null !== (Ym = pm[om - 1]) && void 0 !== Ym ? Ym : 1500, xm);
            let mm;
            (0, Am.h)(xm);
            try {
              mm = await jm(im, Em, hm)
            } catch (Im) {
              (0, Am.h)(xm), Om = qm(Im);
              continue
            }
            const {
              response: Tm,
              answer: fm,
              refusal: am,
              lost: Rm
            } = mm;
            if (null === Rm) {
              if (null !== am) throw Vm(am, fm);
              if (Tm.ok && null !== fm && Jm(fm)) return fm;
              Om = new Dm.q(`seat request answered HTTP ${Tm.status}${null===fm?" without JSON":" without a seat"}`, !1, void 0, Tm.status)
            } else Om = qm(Rm.error)
          }
          throw null !== (am = Om) && void 0 !== am ? am : new Dm.q("seat request made no attempt", !1)
        }(mm, Tm, fm, {
          ...im,
          signal: Im,
          sleep: Em
        })), Im, Em);
        return Ym.answered(), hm
      } finally {
        Ym.stop(), Om.unfollow()
      }
    }

    function qm(mm) {
      return new Dm.q(mm instanceof Error ? mm.message : String(mm), !0, mm)
    }
    async function jm(mm, Tm, fm) {
      var hm;
      const {
        signal: am
      } = fm, xm = null !== (hm = fm.fetch) && void 0 !== hm ? hm : fetch, wm = await xm(mm, {
        method: "POST",
        headers: {
          ...im,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: Tm,
        credentials: "include",
        signal: am
      }), {
        answer: Dm,
        lost: Rm
      } = await async function(mm) {
        try {
          const Tm = await mm.json();
          return {
            answer: "object" === typeof Tm && null !== Tm ? Tm : null,
            lost: null
          }
        } catch (Tm) {
          return {
            answer: null,
            lost: Tm instanceof SyntaxError ? null : {
              error: Tm
            }
          }
        }
      }(wm), pm = null !== Dm && "string" === typeof Dm.error ? Dm.error : null;
      var Em;
      null !== pm && (null === (Em = fm.onRefusal) || void 0 === Em || Em.call(fm));
      return (0, Am.h)(am), {
        response: wm,
        answer: Dm,
        refusal: pm,
        lost: Rm
      }
    }

    function Vm(mm, Tm) {
      return new Dm.j(mm, "number" === typeof(null === Tm || void 0 === Tm ? void 0 : Tm.code) ? Tm.code : 0, (0, wm.p)(mm).text)
    }
    class Im extends Error {
      constructor(mm, Tm) {
        super(mm), this.code = Tm, this.name = "SeatHttpError"
      }
    }
    async function Km(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Am,
        answer: am,
        refusal: xm,
        lost: wm
      } = await jm(om(mm, "reconnect", Tm), JSON.stringify({
        reconnectionToken: fm
      }), hm);
      if (null !== wm) throw wm.error;
      if (!Am.ok) {
        const mm = null !== am && "number" === typeof am.code && 0 !== am.code ? am.code : Am.status;
        throw new Im(`the seat's reconnect was refused: ${null!==xm&&void 0!==xm?xm:`HTTP ${Am.status}`}`, mm)
      }
      if (null !== xm) throw Vm(xm, am);
      if (null === am || !Jm(am)) throw new Error("the seat's reconnect answered " + (null === am ? "without JSON" : "without a seat"));
      return {
        ...am,
        reconnectionToken: fm
      }
    }
    const Qm = 10;

    function nm(mm) {
      if (mm.byteLength < 2 || mm[0] !== Qm) return null;
      const Tm = 2 + mm[1];
      return Tm > mm.byteLength ? null : (new TextDecoder).decode(mm.subarray(2, Tm))
    }

    function Jm(mm) {
      const Tm = mm.room;
      return "string" === typeof mm.sessionId && "object" === typeof Tm && null !== Tm && "string" === typeof Tm.roomId && "string" === typeof Tm.processId && "string" === typeof Tm.name
    }
  },
  40675: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => Jm,
      B: () => Sm,
      D: () => Km,
      G: () => Qm,
      J: () => qm,
      M: () => Zm,
      P: () => Nm,
      S: () => Om,
      W: () => Xm,
      _: () => Vm,
      ab: () => jm,
      bb: () => Im,
      cb: () => nm,
      e: () => Am,
      h: () => Gm,
      j: () => em,
      k: () => om,
      n: () => Ym,
      q: () => bm,
      t: () => cm,
      w: () => km,
      y: () => zm
    });
    var hm = fm(2987);
    const Am = {
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

    function am(mm, Tm) {
      return !ArrayBuffer.isView(mm) || mm instanceof DataView ? Array.isArray(mm) ? mm.map((mm => Tm(mm))) : mm : Array.from(mm, (mm => Tm(mm)))
    }

    function xm(mm) {
      if ("string" !== typeof mm) return mm;
      for (let Tm = 0; Tm < mm.length; Tm++) {
        const fm = mm.charCodeAt(Tm);
        if (fm >= 55296 && fm <= 57343) return Dm.decode(wm.encode(mm))
      }
      return mm
    }
    const wm = new TextEncoder,
      Dm = new TextDecoder;

    function im(mm) {
      return mm
    }
    let Rm;

    function pm(mm) {
      return null === mm || "object" !== typeof mm ? mm : [xm(mm.dD), xm(mm.gD)]
    }

    function Em(mm) {
      return null === mm || "object" !== typeof mm ? mm : [am(mm.Ph, im), am(mm.Ox, im)]
    }

    function om(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.Hi), xm(Tm.yi)];
      var Tm
    }

    function Om(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [Tm.id, Tm.bR];
      var Tm
    }

    function Ym(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [Tm.va, xm(Tm.Ua), Tm.da, xm(Tm.Fa), Tm.Ax, Tm.wx, Tm.Fx, xm(Tm.mw), xm(Tm.Tw)];
      var Tm
    }

    function qm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [am(Tm.qR, im), Tm.jR];
      var Tm
    }

    function jm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [am(Tm.Ji, (mm => xm(mm))), xm(Tm.zi), Tm.Zi];
      var Tm
    }

    function Vm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [am(Tm.Ux, im), xm(Tm.gx), Tm.Wx];
      var Tm
    }

    function Im(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.Sh), xm(Tm.eh)];
      var Tm
    }

    function Km(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.xw)];
      var Tm
    }

    function Qm(mm) {
      return xm(mm)
    }

    function nm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.hR), xm(Tm.AR), xm(Tm.dD), xm(Tm.gD)];
      var Tm
    }

    function Jm(mm) {
      return pm(mm)
    }

    function cm(mm) {
      return pm(mm)
    }

    function zm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.Ex)];
      var Tm
    }

    function Zm(mm) {
      return mm
    }

    function km(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.Hx), xm(Tm.yx)];
      var Tm
    }

    function bm(mm) {
      return xm(mm)
    }

    function Sm(mm) {
      return Em(mm)
    }

    function em(mm) {
      return Em(mm)
    }

    function Nm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.aR)];
      var Tm
    }

    function Gm(mm) {
      return (Rm ??= (0, hm.h)().map((mm => mm.name)), Rm).map((Tm => {
        return "string" === typeof(fm = mm[Tm]) ? xm(fm) : am(fm, im);
        var fm
      }))
    }

    function Xm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [Tm.Li, Tm.Ui, Tm.gi];
      var Tm
    }
  },
  41039: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am
    });
    var hm = fm(41045),
      Am = fm(41032);
    const am = new class {
      constructor(mm) {
        this.pack = mm, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, mm.onWanted((() => {
          this.release()
        }))
      }
      setGame(mm) {
        if (void 0 === mm && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const Tm = this.inGame();
        if (this.game = mm, this.update(), this.inGame() !== Tm)
          for (const fm of this.gameListeners) fm()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(mm) {
        return this.gameListeners.add(mm), () => {
          this.gameListeners.delete(mm)
        }
      }
      unwantedLeave(mm) {
        mm && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(mm) {
        null !== mm && mm === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const mm = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, mm && this.setGame(void 0)
      }
      setSettled(mm) {
        this.settle = mm, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, hm.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Am.f)
  },
  4996: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      d: () => wm
    });
    var hm = fm(2123),
      Am = fm(5004);
    let am = null;

    function xm(mm) {
      am = {
        pack: mm.metaData.id === hm.c ? null : mm
      }
    }

    function wm(mm) {
      return !(null === am || !(0, Am.e)(am.pack, mm)) && (am = null, !0)
    }
  },
  40755: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      followPageUiPack: () => RR,
      packForGame: () => iR,
      playWasmGame: () => nR,
      prefetchWasmPreviews: () => ED,
      setGamePackConfirm: () => ni,
      startWasmPlay: () => YR,
      startWasmPreviews: () => pD
    });
    var hm = fm(198),
      Am = fm(1254),
      am = fm(168),
      xm = fm(39209),
      wm = fm(1905),
      Dm = fm(31),
      im = fm(4620),
      Rm = fm(1309),
      pm = fm(1698),
      Em = fm(1321),
      om = fm(39370),
      Om = fm(1296),
      Ym = fm(39383),
      qm = fm(39283),
      jm = fm(36549),
      Vm = fm(39169),
      Im = fm(8854),
      Km = fm(36573),
      Qm = fm(40761),
      nm = fm(4722),
      Jm = fm(40669),
      cm = fm(40740),
      zm = fm(40675);
    const Zm = {
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

    function km(mm) {
      const Tm = {
        ...cm.b[mm]
      };
      for (const fm of Object.keys(Zm[mm])) delete Tm[fm];
      return Tm
    }

    function bm() {
      var mm, Tm;
      return null === (mm = null === (Tm = (0, Jm.i)()) || void 0 === Tm ? void 0 : Tm.localPlayerAlive()) || void 0 === mm || mm
    }

    function Sm() {
      var mm, Tm;
      return null !== (mm = null === (Tm = (0, Jm.i)()) || void 0 === Tm ? void 0 : Tm.localDeaths()) && void 0 !== mm ? mm : null
    }
    const em = {
        current: bm,
        watch: mm => {
          let Tm = bm(),
            fm = Sm();
          return (0, nm.y)((() => {
            const hm = bm(),
              Am = Sm(),
              am = null !== Am && null !== fm && Am !== fm;
            fm = Am, am ? (Tm || mm(!0), mm(!1), hm && mm(!0), Tm = hm) : hm !== Tm && (Tm = hm, mm(hm))
          }))
        }
      },
      Nm = {
        states: {
          ...km("states"),
          localPlayerAlive: em
        },
        events: {
          ...km("events"),
          localPlayerAliveSet: {
            watch: em.watch
          }
        },
        commands: {
          ...km("commands"),
          respawn: () => {
            var mm;
            null === (mm = (0, Jm.i)()) || void 0 === mm || mm.respawn()
          },
          playEmote: mm => {
            var Tm;
            null === (Tm = (0, Jm.i)()) || void 0 === Tm || Tm.send(zm.e.PlayEmote, (0, zm.D)({
              xw: mm
            }))
          },
          applyTemporaryThirdPerson: mm => {
            var Tm;
            let {
              durationMs: fm
            } = mm;
            null === (Tm = (0, Jm.i)()) || void 0 === Tm || Tm.thirdPersonFor(fm)
          },
          bindCustomButtonKeys: mm => {
            var Tm;
            null === (Tm = (0, Jm.i)()) || void 0 === Tm || Tm.bindCustomButtonKeys(mm)
          },
          pressCustomButton: mm => {
            var Tm;
            let {
              id: fm,
              down: hm
            } = mm;
            null === (Tm = (0, Jm.i)()) || void 0 === Tm || Tm.pressCustomButton(fm, hm)
          },
          setLookSensitivity: () => {},
          wakeUp: mm => {
            const Tm = (0, zm.P)({
                aR: mm
              }),
              fm = () => {
                const mm = (0, Jm.i)();
                return !(null !== mm && void 0 !== mm && mm.isSessionLive) || mm.send(zm.e.StopSleeping, Tm)
              };
            if (!fm()) {
              const mm = (0, nm.y)((() => {
                fm() && mm()
              }))
            }
          },
          setCameraZoom: mm => {
            var Tm;
            null === (Tm = (0, Jm.i)()) || void 0 === Tm || Tm.setCameraZoom(mm)
          }
        },
        queries: km("queries"),
        lookups: {
          ...km("lookups"),
          cameraZoom: () => {
            var mm, Tm;
            return null !== (mm = null === (Tm = (0, Jm.i)()) || void 0 === Tm ? void 0 : Tm.cameraZoom()) && void 0 !== mm ? mm : 0
          }
        }
      };
    var Gm = fm(39187),
      Xm = fm(40765),
      Pm = fm(40769),
      Hm = fm(40783),
      ym = fm(1266),
      Cm = fm(112),
      rm = fm(4460),
      sm = fm(3711),
      lm = fm(1190);
    const Mm = {
      tR: () => (0, ym.e)(),
      inbuiltOverwritten: () => rm.e,
      reflectApplyHit: () => lm.b,
      definerHit: () => Cm.currentUrl.c,
      emitReplaced: () => (0, Dm.d)(),
      confirmMesh: () => (0, sm.c)(),
      confirmMeshHitStack: () => (0, sm.f)()
    };
    var um = fm(40774),
      Bm = fm(40928);
    var Lm = fm(23),
      tm = fm(1912),
      Um = fm(1957),
      dm = fm(1643),
      gm = fm(2006),
      Wm = fm(1208),
      Fm = fm(1259),
      mT = fm(40931);

    function TT() {
      return Fm.e.get().getCurrentLanguageCode()
    }

    function fT(mm) {
      const Tm = () => {
        mm({
          translate: (mm, Tm) => (0, Wm.v)(TT(), mm, Tm),
          keyBindingText: mm => {
            const Tm = (0, Um.o)(mm, Lm.c.get("isTouchScreen"));
            return null !== Tm ? (0, Wm.w)(TT(), Tm.translationKey, Tm.params) : (0, Um.k)((0, Um.l)(mm))
          },
          isFriend: gm.h,
          hiddenNames: tm.e.shown,
          loadsFontRest: (0, mT.d)(TT())
        })
      };
      let fm = !1;
      const hm = () => {
          const mm = TT();
          (0, Wm.m)(mm).then((() => {
            fm || mm !== TT() || Tm()
          }))
        },
        Am = () => dm.e.getSocialState().friends.map((mm => mm.name.toLowerCase())).sort().join(" ");
      let am = Am();
      Tm(), hm();
      const xm = [(0, Fm.f)((() => {
        Tm(), hm()
      })), (0, Dm.m)("customBindingsChanged", Tm), (0, Dm.m)("appManagerUpdated|isTouchScreen", Tm), (0, gm.d)((() => {
        const mm = Am();
        mm !== am && (am = mm, Tm())
      })), tm.e.subscribe(Tm)];
      return () => {
        fm = !0;
        for (const mm of xm) mm()
      }
    }
    var hT = fm(658),
      AT = fm(1041),
      aT = fm(1934),
      xT = fm(339),
      wT = fm(193),
      DT = fm(2873),
      iT = fm(2876),
      RT = fm(38824),
      pT = fm(4632),
      ET = fm(40950),
      oT = fm(713),
      OT = fm(675),
      YT = fm(723),
      qT = fm(730),
      jT = fm(1928),
      VT = fm(3714),
      IT = fm(3293);
    let KT = null;
    var QT = fm(1214),
      nT = fm(1223),
      JT = fm(4364),
      cT = fm(3457),
      zT = fm(55),
      ZT = fm(336),
      kT = fm(330),
      bT = fm(40962),
      ST = fm(4729);
    var eT = fm(37754),
      NT = fm(40971);
    class GT {
      constructor(mm, Tm) {
        this.showView = mm, this.holdForAd = Tm
      }
      pointerUnlockRequestsChanged() {
        (0, bT.A)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, bT.p)())
        }]
      }
      setGameViewShown(mm) {
        this.showView(mm)
      }
      setGameView(mm) {
        (0, NT.i)(mm)
      }
      videoAdHold(mm, Tm) {
        this.holdForAd(mm, Tm)
      }
    }
    class XT {
      leave(mm) {
        ! function(mm) {
          if (null !== (0, Em.d)().websocketUrl) try {
            (0, nm.J)().leaveGame(mm)
          } finally {
            (0, Em.r)({
              websocketUrl: null
            })
          }
        }(mm)
      }
      isReplay() {
        return !1
      }
    }
    class PT {
      watchFrameStarts(mm) {
        return (0, nm.s)(mm)
      }
      watchFrames(mm) {
        return (0, nm.q)(mm)
      }
      watchTicks(mm) {
        return (0, nm.y)(mm)
      }
    }
    var HT = fm(40973);

    function yT(mm) {
      return mm >= 0 ? Math.min(1, mm) : 0
    }

    function CT(mm, Tm) {
      const {
        fade: fm
      } = mm;
      return null === fm || Tm - fm.at >= fm.ms ? mm.volume : fm.from + (mm.volume - fm.from) * Math.max(0, (Tm - fm.at) / fm.ms)
    }

    function rT(mm) {
      const Tm = Object.entries(mm),
        fm = new Uint32Array(Tm.length);
      let hm = 0;
      for (const [xm, [, wm]] of Tm.entries()) fm[xm] = wm.length, hm += wm.length;
      const Am = new Float64Array(3 * hm);
      let am = 0;
      for (const [, xm] of Tm)
        for (const mm of xm) Am.set(mm, am), am += 3;
      return {
        blocks: Tm.map((mm => {
          let [Tm] = mm;
          return Tm
        })).join("\0"),
        counts: fm,
        values: Am
      }
    }
    class sT {
      constructor(mm, Tm) {
        this.core = mm, this.warn = Tm, this.latest = 0
      }
      async feed() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lT;
        const Tm = ++this.latest;
        let fm;
        try {
          fm = await mm()
        } catch (hm) {
          return void(this.core.isStopped || Tm !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", hm))
        }
        Tm === this.latest && (this.core.setBlockColours(fm) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function lT() {
      return rT((await fm.e(204).then((() => fm(34376)))).averageColors)
    }
    var MT = fm(4732),
      uT = fm(4741),
      BT = fm(40716),
      LT = fm(3229),
      vT = fm(36348),
      tT = fm(40818),
      UT = fm(649),
      dT = fm(37154),
      gT = fm(645),
      WT = fm(354),
      FT = fm(40807);
    const mf = [3e4, 12e4, 3e5];
    class Tf extends Error {}
    const ff = {
      mobTypes: UT.o,
      vehicleTypes: dT.e,
      mobAiStates: UT.k,
      playerPoses: gT.r
    };
    var hf = fm(40793),
      Af = fm(40841),
      af = fm(1103),
      xf = fm(40975),
      wf = fm(40983),
      Df = fm(2979),
      Rf = fm(39156),
      pf = fm(4763),
      Ef = fm(2364);
    const of = Ef.w.KeysDisabled | Ef.w.LookFrozen | Ef.w.ClicksSuppressed, Of = Df.e;
    var Yf = (0, wf.c)("resumingConn");
    class qf {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = mm, this.now = Tm, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Yf, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Rf.c({
          reconnect: mm => this.reconnect(mm),
          isLive: () => mm.isLive(),
          onReconnected: Tm => {
            this.landed = Tm, mm.onReconnected(Tm), this.landIfResumed()
          },
          onGaveUp: (Tm, fm) => {
            this.abortAttempt(), mm.onGaveUp(Tm, fm)
          },
          freeze: Tm => {
            mm.nS(Tm), (0, pf.h)(of, Tm ? of : 0, "reconnectFreeze")
          },
          releaseSeat: mm => {
            this.releaseSeat(mm)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, xf.e)(this, Yf)[Yf]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(mm) {
        let {
          conn: Tm,
          graceMs: fm,
          sessionBased: hm,
          replayOffer: Am
        } = mm;
        this.session.onInitialInfo(fm, hm), this.isResuming() && (this.initialInfoConn = Tm, this.initialInfoOffer = Am, this.landIfResumed())
      }
      onResumeComplete(mm) {
        0 !== mm && (mm === (0, xf.e)(this, Yf)[Yf] ? ((0, xf.e)(this, Yf)[Yf] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = mm))
      }
      onDropped(mm) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, xf.e)(this, Yf)[Yf] = 0, this.session.onConnectionLost(mm)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, xf.e)(this, Yf)[Yf] = 0, this.session.end()
      }
      reconnect(mm) {
        const Tm = this.attempt;
        if (null !== Tm && this.awaitingJoinRoom(Tm)) return Tm.result;
        this.abortAttempt();
        const fm = new AbortController,
          hm = this.drops,
          Am = {
            attachedAt: null
          },
          am = this.shell.reconnect(mm, fm.signal, (() => {
            Am.attachedAt = this.now()
          })).then((mm => {
            if (this.clearAttempt(xm), this.drops !== hm) throw new Error("the resumed room dropped before its attempt settled");
            return mm
          }), (mm => {
            throw this.clearAttempt(xm), mm
          })),
          xm = {
            abort: fm,
            socket: Am,
            result: am
          };
        return this.attempt = xm, am
      }
      clearAttempt(mm) {
        this.attempt === mm && (this.attempt = null)
      }
      abortAttempt() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const Tm = this.attempt;
        this.attempt = null, null === Tm || void 0 === Tm || Tm.abort.abort(mm)
      }
      awaitingJoinRoom(mm) {
        const Tm = mm.socket.attachedAt;
        return null !== Tm && this.now() - Tm < Of
      }
      releaseSeat(mm) {
        const Tm = this.attempt,
          fm = null !== Tm && this.awaitingJoinRoom(Tm);
        this.abortAttempt(new Xm.m), fm || this.shell.releaseSeat(mm)
      }
      landIfResumed() {
        const mm = this.landed;
        if (null !== mm && mm.conn === this.initialInfoConn) {
          const Tm = this.initialInfoOffer && this.completedEarlyConn !== mm.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !Tm) return void this.session.onResumed();
          (0, xf.e)(this, Yf)[Yf] = mm.conn, this.session.onResuming()
        }
      }
    }
    var jf = fm(39164),
      Vf = fm(40989),
      If = fm(36557),
      Kf = fm(36554),
      Qf = fm(2123),
      nf = fm(1877),
      Jf = fm(4238),
      zf = fm(40821),
      Zf = fm(4996);

    function kf(mm) {
      let {
        pack: Tm,
        gameSource: fm
      } = mm;
      if (null !== fm && "" !== fm) return `game:${fm}`;
      if (null === Tm) return "default";
      const {
        id: hm,
        version: Am
      } = Tm.metaData;
      if (hm !== Qf.l.CUSTOM) return `${hm}@${Am}`;
      const am = [];
      for (const xm of [Tm.textureOverrides, Tm.modelOverrides, Tm.animations])
        for (const [mm, Tm] of Object.entries(null !== xm && void 0 !== xm ? xm : {})) am.push(`${mm}:${Tm.length}`);
      return `${hm}:${(0,nf.x)(am.join())}`
    }
    var bf = fm(4355),
      Sf = fm(3251),
      ef = fm(40992),
      Nf = fm(677),
      Gf = fm(3260),
      Xf = fm(4432),
      Pf = fm(37),
      Hf = fm(40878),
      yf = fm(4381),
      Cf = fm(2373),
      rf = fm(1635),
      sf = fm(1668),
      lf = fm(1286),
      Mf = fm(115),
      uf = fm(315),
      Bf = fm(39200),
      Lf = fm(2379),
      vf = fm(4755);
    const tf = new Set([MT.wb.KeyDown, MT.wb.MouseMove, MT.wb.MouseDown, MT.wb.Wheel, MT.wb.TouchStart, MT.wb.TouchMove]);

    function Uf(mm) {
      return (mm.shiftKey ? MT.Pb.Shift : 0) | (mm.ctrlKey ? MT.Pb.Ctrl : 0) | (mm.altKey ? MT.Pb.Alt : 0) | (mm.metaKey ? MT.Pb.Meta : 0) | ("repeat" in mm && mm.repeat ? MT.Pb.Repeat : 0) | (mm.isTrusted ? 0 : MT.Pb.Untrusted | function(mm) {
        try {
          const {
            editable: Tm,
            outsideView: fm
          } = (0, Bf.i)(mm.target);
          return (Tm ? MT.Pb.UntrustedEditable : 0) | (fm ? MT.Pb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(mm))
    }

    function df(mm) {
      return "touchOnly" !== (0, Mf.d)() && "function" === typeof mm.requestPointerLock
    }

    function gf(mm) {
      return 0 === mm.button ? mm.altKey ? vf.i["Alt+Left Click"] : vf.i.Mouse1 : 1 === mm.button ? vf.i.Mouse2 : vf.i.Mouse3
    }
    const Wf = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Ff = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      mh = 32768,
      Th = 1;

    function fh(mm) {
      return Math.min(Math.max(Math.round(mm), 0), 65535)
    }

    function hh(mm, Tm, fm) {
      const hm = [],
        Am = (mm, Tm, fm, Am) => {
          const am = mm => {
            (0, sf.u)(mm) || fm(mm)
          };
          mm.addEventListener(Tm, am, Am), hm.push((() => {
            mm.removeEventListener(Tm, am, Am)
          }))
        },
        am = {
          capture: !0,
          passive: !0
        },
        xm = (mm, fm, hm, Am, am) => (!(0, Lf.e)() || !tf.has(mm)) && (Tm(mm, fm, hm, Am, am), !0),
        wm = () => document.pointerLockElement === mm,
        Dm = (0, uf.f)(),
        im = mm => {
          mm.ctrlKey && fm.ctrlCombosAreGames() && !(0, pf.f)(mm.target) && mm.preventDefault()
        },
        Rm = (mm, hm, Am) => {
          fm.inspect(mm, hm, !1), Tm(MT.wb.KeyUp, hm, 0, 0, (0, Cf.t)(Am, mm.timeStamp)), fm.keyReleased(hm)
        },
        pm = new Map,
        Em = (mm, Tm, fm) => mm[fm] || ("AltRight" === Tm || "ControlLeft" === Tm) && mm.getModifierState("AltGraph"),
        om = new Map,
        Om = () => {
          pm.clear(), om.clear()
        },
        Ym = mm => {
          if (mm.isTrusted && document.hasFocus())
            for (const [Tm, fm] of om) om.delete(Tm), Em(mm, Tm, fm) || (pm.delete(Tm), Rm(mm, vf.i[Tm], Uf(mm)))
        };
      mm.tabIndex = -1;
      let qm = 0,
        jm = 0;
      const Vm = () => {
        const Tm = mm.getBoundingClientRect();
        qm = Tm.left, jm = Tm.top
      };
      let Im = "mouse";
      const Km = () => !wm() && ("mouse" === Im || !fm.touchUiShown()),
        Qm = (mm, Tm, fm) => {
          const hm = (fh(mm.clientX - qm) | fh(mm.clientY - jm) << 16) >>> 0;
          xm(MT.wb.MouseMove, MT.Tb.Point, Tm, fm, hm)
        };
      let nm = !1,
        Jm = 0;
      const cm = () => {
        nm && (nm = !1, fm.viewShown() && (0, bT.N)())
      };
      hm.push((() => {
        clearTimeout(Jm)
      })), Am(window, "keydown", (mm => {
        "Escape" === mm.key ? (0, bT.E)(!0) : mm.repeat || (0, pf.f)(mm.target) || (nm = !0, clearTimeout(Jm), Jm = window.setTimeout(cm, 0))
      }), am), Am(window, "keydown", (mm => {
        cm(), im(mm), Ym(mm);
        const Tm = vf.i[mm.code];
        if ("number" !== typeof Tm || !fm.viewShown()) return;
        const hm = (0, pf.f)(mm.target);
        hm || !fm.prevents(Tm) && !Wf.has(mm.code) || mm.preventDefault(), mm.repeat || fm.inspect(mm, Tm, !0), xm(MT.wb.KeyDown, Tm, 0, 0, (0, Cf.t)(Uf(mm), mm.timeStamp)) && pm.set(mm.code, Tm), hm || fm.keyPressed(Tm)
      }), {
        capture: !1,
        passive: !1
      }), Am(window, "keyup", (mm => {
        "Escape" === mm.key && (0, bT.E)(!1), im(mm), pm.delete(mm.code), om.delete(mm.code), Ym(mm);
        const Tm = vf.i[mm.code];
        "number" === typeof Tm && Rm(mm, Tm, Uf(mm))
      }), {
        capture: !0,
        passive: !1
      }), Am(window, "mousemove", (mm => {
        "mouse" === Im && Km() ? Qm(mm, mm.movementX, mm.movementY) : wm() ? xm(MT.wb.MouseMove, MT.Tb.Stamped, mm.movementX, mm.movementY, (0, Cf.t)(0, mm.timeStamp)) : xm(MT.wb.MouseMove, 0, mm.movementX, mm.movementY, 0)
      }), am);
      let zm = 0,
        Zm = 0;
      const km = [];
      let bm = !1,
        Sm = !1;
      Am(mm, "mousedown", (mm => {
        if ((0, Lf.e)()) return;
        Ym(mm);
        const hm = 1 << mm.button;
        if (!wm() && (0, bT.K)() && (0, bT.d)() && (Sm = !0, !bm)) return void(zm |= hm);
        zm &= ~hm;
        const Am = mm.button <= 2 ? gf(mm) : void 0;
        void 0 !== Am && (km[mm.button] = Am, fm.inspect(mm, Am, !0)), Km() && Qm(mm, 0, 0), Tm(MT.wb.MouseDown, mm.button, mm.clientX, mm.clientY, (0, Cf.t)(Uf(mm), mm.timeStamp)), Zm |= hm, void 0 !== Am && fm.keyPressed(Am)
      }), am), Am(window, "mouseup", (mm => {
        var hm;
        Ym(mm);
        const Am = 1 << mm.button,
          am = 0 !== (zm & ~Zm & Am);
        if (zm &= ~Am, Zm &= ~Am, am) return;
        const xm = mm.button <= 2 ? null !== (hm = km[mm.button]) && void 0 !== hm ? hm : gf(mm) : void 0;
        void 0 !== xm && fm.inspect(mm, xm, !1), Tm(MT.wb.MouseUp, mm.button, mm.clientX, mm.clientY, (0, Cf.t)(Uf(mm), mm.timeStamp)), void 0 !== xm && fm.keyReleased(xm)
      }), am), Am(mm, "contextmenu", (mm => {
        mm.preventDefault()
      }), {
        passive: !1
      });
      const em = mm => {
        (wm() || (0, bT.l)() && (0, lf.r)()) && (mm.ctrlKey || Dm && !document.fullscreenElement) && mm.preventDefault()
      };
      Am(mm, "wheel", (mm => {
        em(mm), Ym(mm), xm(MT.wb.Wheel, mm.deltaMode, mm.deltaX, mm.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Nm = {
          capture: !0,
          passive: !1
        },
        Gm = mm => {
          mm ? window.addEventListener("wheel", em, Nm) : window.removeEventListener("wheel", em, Nm)
        };
      Gm((0, bT.l)()), hm.push((0, bT.w)(Gm)), hm.push((() => {
        Gm(!1)
      }));
      const Xm = new Map,
        Pm = new Set,
        Hm = mm => {
          const Tm = "stylus" === mm.touchType;
          for (const fm of Xm.values())
            if (!fm.touched && (Tm || Math.abs(mm.clientX - fm.x) <= Th && Math.abs(mm.clientY - fm.y) <= Th)) return fm.touched = !0, !0;
          return !1
        },
        ym = mm => 32767 & mm,
        Cm = new Set,
        rm = mm => fm => {
          const hm = (0, Cf.t)(Uf(fm), fm.timeStamp);
          mm !== MT.wb.TouchStart && mm !== MT.wb.TouchMove || ((mm, fm) => {
            const hm = mm.touches;
            if (hm)
              for (const Am of Cm) {
                let mm = !1;
                for (let Tm = 0; Tm < hm.length && !mm; Tm++) mm = ym(hm[Tm].identifier) === Am;
                mm || (Cm.delete(Am), Tm(MT.wb.TouchCancel, Am, 0, 0, fm))
              }
          })(fm, hm);
          const Am = fm.changedTouches;
          for (let Tm = 0; Tm < Am.length; Tm++) {
            const fm = Am[Tm];
            if (mm === MT.wb.TouchStart && Hm(fm) && Pm.add(fm.identifier), Pm.has(fm.identifier)) {
              mm !== MT.wb.TouchEnd && mm !== MT.wb.TouchCancel || Pm.delete(fm.identifier);
              continue
            }
            const am = ym(fm.identifier),
              wm = xm(mm, am, fm.clientX - qm, fm.clientY - jm, hm);
            mm === MT.wb.TouchStart ? wm && Cm.add(am) : mm !== MT.wb.TouchMove && Cm.delete(am)
          }
        },
        sm = rm(MT.wb.TouchStart);
      Am(mm, "touchstart", (mm => {
        mm.preventDefault(), (0, Lf.e)() || (fm.touchStarting(), sm(mm))
      }), {
        passive: !1
      }), Am(mm, "touchmove", rm(MT.wb.TouchMove), am), Am(mm, "touchend", rm(MT.wb.TouchEnd), am), Am(mm, "touchcancel", rm(MT.wb.TouchCancel), am);
      const lm = mm => mh | 32767 & mm,
        Mm = (mm, Tm) => {
          xm(mm, lm(Tm.pointerId), Tm.clientX - qm, Tm.clientY - jm, (0, Cf.t)(Uf(Tm), Tm.timeStamp))
        };
      Am(window, "pointerdown", (Tm => {
        Im = Tm.pointerType, "mouse" === Tm.pointerType && Tm.target !== mm && fm.viewShown() && (0, bT.R)()
      }), am), Am(mm, "pointerdown", (mm => {
        "pen" === mm.pointerType && 0 === mm.button && (0, bT.l)() && (0, lf.r)() && (mm.preventDefault(), (0, Lf.e)() || (Xm.set(mm.pointerId, {
          x: mm.clientX,
          y: mm.clientY,
          touched: !1
        }), fm.touchStarting(), Mm(MT.wb.TouchStart, mm)))
      }), {
        passive: !1
      }), Am(window, "pointermove", (mm => {
        Im = mm.pointerType, Xm.has(mm.pointerId) && Mm(MT.wb.TouchMove, mm), "mouse" !== mm.pointerType && Km() && Qm(mm, 0, 0)
      }), am);
      const um = mm => Tm => {
        Xm.delete(Tm.pointerId) && Mm(mm, Tm)
      };
      Am(window, "pointerup", um(MT.wb.TouchEnd), am), Am(window, "pointercancel", um(MT.wb.TouchCancel), am);
      let Bm = 0;
      const Lm = () => {
          Bm = 0, Vm(), fm.resized()
        },
        tm = () => {
          const mm = fm.sizeCanvas();
          null !== mm && Tm(MT.wb.Resize, 0, mm.cssWidth, mm.cssHeight, (0, Cf.m)(mm.renderScale)), Vm(), fm.resized(), 0 === Bm && (Bm = requestAnimationFrame(Lm))
        };
      Am(window, "resize", tm, am), hm.push(fm.watchRenderScale(tm)), hm.push((() => {
        cancelAnimationFrame(Bm)
      })), Am(window, "focus", (mm => {
        mm.isTrusted && (Tm(MT.wb.Focus, 0, 0, 0, 0), fm.viewShown() && (0, bT.R)())
      }), {
        passive: !0
      });
      const Um = () => {
          (0, bT.E)(!1), zm = 0
        },
        dm = () => {
          Cm.clear(), Xm.clear(), Pm.clear()
        };
      let gm = 0,
        Wm = 0;
      Am(window, "blur", (hm => {
        Um(), (0, bT.i)();
        for (const mm of pm.keys()) {
          const Tm = Ff.get(mm);
          void 0 !== Tm && om.set(mm, Tm)
        }
        hm.isTrusted && ((mm => {
          for (const [fm, hm] of Xm) Tm(MT.wb.TouchCancel, lm(fm), hm.x, hm.y, (0, Cf.t)(0, mm));
          Xm.clear()
        })(hm.timeStamp), Tm(MT.wb.Blur, MT.s.KeepTouches, 0, 0, 0)), Dm && hm.isTrusted && (clearTimeout(Wm), Wm = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const mm of pm.values()) Rm(hm, mm, 0);
            Om()
          }
        }), 0)), clearTimeout(gm), gm = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, lf.r)() && fm.viewShown() && mm.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), hm.push((() => {
        clearTimeout(gm), clearTimeout(Wm)
      })), Am(window, "mousedown", (Tm => {
        Dm && Tm.isTrusted && !document.hasFocus() && (0, lf.r)() && fm.viewShown() && (window.focus(), mm.focus({
          preventScroll: !0
        }))
      }), am), Am(document, "visibilitychange", (() => {
        document.hidden ? (Tm(MT.wb.Blur, 0, 0, 0, 0), dm()) : document.hasFocus() && Tm(MT.wb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), hm.push((0, Lf.g)((() => {
        Um(), Tm(MT.wb.Blur, MT.s.Release, 0, 0, 0), fm.keysReleased(), Om(), Zm = 0, dm(), Tm(MT.wb.Joystick, 0, 0, 0, 0), document.hasFocus() && Tm(MT.wb.Focus, 0, 0, 0, 0)
      })));
      const Fm = !fm.canLock(),
        mT = () => Fm && !(0, bT.l)() ? MT.ic.Lockless : MT.ic.Released,
        TT = () => {
          wm() && (bm = !1, Sm = !1), Tm(MT.wb.PointerLock, wm() ? MT.ic.Locked : mT(), 0, 0, 0), (0, bT.J)(wm())
        };
      return Am(document, "pointerlockchange", TT, {
        passive: !0
      }), Am(document, "pointerlockerror", (() => {
        bm ||= Sm, Sm = !1, (0, bT.t)()
      }), {
        passive: !0
      }), Fm && hm.push((0, bT.w)((() => {
        Tm(MT.wb.PointerLock, mT(), 0, 0, 0)
      }))), tm(), Tm(document.hasFocus() ? MT.wb.Focus : MT.wb.Blur, 0, 0, 0, 0), TT(), () => {
        for (const mm of hm.splice(0)) mm()
      }
    }
    var Ah = fm(34239),
      ah = fm(34225),
      xh = fm(1966);
    const wh = new Map(vf.e.map(((mm, Tm) => [mm, Tm]))),
      Dh = ["jump", "primary-fire", "alt-fire"],
      ih = ["primary-fire", "alt-fire"];

    function Rh(mm) {
      return `${xh.e}${mm}`
    }
    const ph = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Eh(mm) {
      const Tm = [];
      for (const fm of mm) {
        const mm = "string" === typeof fm ? vf.i[fm] : void 0;
        "number" === typeof mm && Tm.push(mm)
      }
      return Tm
    }
    class oh {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [mm, Tm] of Object.entries(vf.g)) this.keys.set(mm, Tm);
        this.updateKeySets()
      }
      prevents(mm) {
        return this.preventKeys.has(mm)
      }
      moves(mm) {
        return this.movementKeys.has(mm)
      }
      checks(mm, Tm) {
        return (Tm ? this.checkedDown : this.checkedUp).has(mm)
      }
      sync(mm, Tm) {
        for (const [fm, hm] of this.keys) {
          const Am = mm(Rh(fm)),
            am = Array.isArray(Am) ? Eh(Am) : vf.g[fm];
          (am.length !== hm.length || am.some(((mm, Tm) => mm !== hm[Tm]))) && this.bind(fm, am, Tm)
        }
      }
      bind(mm, Tm, fm) {
        const hm = wh.get(mm);
        if (void 0 !== hm) {
          fm(MT.wb.Binding, 0, 0, 0, hm | MT.o.Clear << 8);
          for (const am of [...Tm, ...null !== (Am = vf.h[mm]) && void 0 !== Am ? Am : []]) {
            var Am;
            fm(MT.wb.Binding, am, 0, 0, hm | MT.o.Add << 8)
          }
          this.keys.set(mm, Tm), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const hm of vf.m)
          for (const Tm of null !== (mm = this.keys.get(vf.e[hm])) && void 0 !== mm ? mm : []) {
            var mm;
            this.preventKeys.add(Tm)
          }
        this.movementKeys.clear();
        for (const hm of ph)
          for (const mm of null !== (Tm = this.keys.get(hm)) && void 0 !== Tm ? Tm : []) {
            var Tm;
            this.movementKeys.add(mm)
          }
        for (const [hm, Am] of [
            [this.checkedDown, Dh],
            [this.checkedUp, ih]
          ]) {
          hm.clear();
          for (const mm of Am)
            for (const Tm of null !== (fm = this.keys.get(mm)) && void 0 !== fm ? fm : []) {
              var fm;
              hm.add(Tm)
            }
        }
      }
    }
    var Oh = fm(4747),
      Yh = fm(36672);
    const qh = "[bloxd-wasm-client]";

    function jh() {
      return "inGame" === Lm.c.get("gameState") && !(0, rf.o)()
    }
    let Vh = null;

    function Ih(mm, Tm) {
      Vh && Tm.writePendingInput() && Vh.push(function(mm, Tm) {
        let fm = "";
        for (const hm of Tm) fm += hm.toString(16).padStart(2, "0");
        return fm ? `${mm} ${fm}` : String(mm)
      }(mm, Tm.rings.input.written()))
    }
    const Kh = [];

    function Qh(mm, Tm, fm, hm) {
      mm === MT.Z.InputAction && hm === MT.rb && Kh.push(Tm.getUint32(fm, !0))
    }
    var nh = fm(41e3),
      Jh = fm(1212),
      ch = fm(36943);
    const zh = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: Jh.wasmScreens
    };

    function Zh(mm) {
      var Tm, fm;
      let hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Am, am] = mm.split(":");
      return (null !== (Tm = null === (fm = zh[Am]) || void 0 === fm ? void 0 : fm[am]) && void 0 !== Tm ? Tm : mm).replace(/\{\{(\w+)\}\}/g, ((mm, Tm) => {
        var fm;
        return null !== (fm = hm[Tm]) && void 0 !== fm ? fm : mm
      }))
    }

    function kh(mm, Tm) {
      (0, yf.c)();
      const fm = document.createElement("div");
      fm.setAttribute("role", "alertdialog"), fm.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const hm = document.createElement("div");
      hm.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Am = document.createElement("h2");
      Am.textContent = Zh(mm.title);
      const am = document.createElement("p");
      if (am.textContent = Zh(mm.help, mm.helpValues), am.style.whiteSpace = "pre-line", hm.append(Am, am), mm.discordLink) {
        const mm = document.createElement("a");
        mm.href = ch.c, mm.target = "_blank", mm.rel = "noreferrer", mm.style.color = "#8ab4ff", mm.textContent = Zh("wasmScreens:reportOnDiscord"), hm.append(mm)
      }
      const xm = document.createElement("div");
      return xm.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", hm.append(xm), fm.append(hm), document.body.append(fm), new Promise((hm => {
        const Am = mm => {
            null === Tm || void 0 === Tm || Tm.removeEventListener("abort", am), fm.remove(), hm(mm)
          },
          am = () => {
            Am(!1)
          };
        null === Tm || void 0 === Tm || Tm.addEventListener("abort", am, {
          once: !0
        });
        const wm = (mm, Tm) => {
          const fm = document.createElement("button");
          fm.textContent = Zh(mm), fm.style.cssText = "padding:0.5rem 1.25rem;font:inherit", fm.addEventListener("click", (() => {
            Am(Tm)
          })), xm.append(fm)
        };
        null !== mm.cancel && wm(mm.cancel, !1), wm(mm.confirm, !0)
      }))
    }
    var bh = fm(40814);
    const Sh = 6e4,
      eh = 3e5;
    var Nh = fm(3627);
    var Gh = fm(41009),
      Xh = fm(685),
      Ph = fm(16);

    function Hh(mm, Tm) {
      const fm = Ph.eb.encode(Tm);
      ! function(mm, Tm) {
        let fm = Tm >= 0 ? 2 * Tm : 2 * -Tm - 1;
        for (; fm >= 128;) mm.push(fm % 128 | 128), fm = Math.floor(fm / 128);
        mm.push(fm)
      }(mm, fm.length);
      for (const hm of fm) mm.push(hm)
    }
    let yh, Ch, rh;
    (() => {
      const mm = [0, "s", "length", 1, 29, "b", 4, 9, 153, 2, "d", !1, 238, "e", 3, 6, 7, null, "a", 209, 10, 156, "resolv", "then", 108, 169, "postCo", "okies", 60, 82, 115, 85, 69, "k", void 0, 43, 1023, 122, 247, 79, 65536, 202, 55296, 56320, 147, 12, 63, 128, 52, 244, 192, "Invalid byte index", 255, 224, 31, "Invalid continuation byte", 240, "c", 15, 18, 5, 54, !0, 210, "Block ", "image "];

      function Tm() {}
      const hm = (mm[0], Ph[mm[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Am = (mm[0], Ph[mm[1]])("QkFCWUxPTg=="),
        am = (mm[0], Ph[mm[1]])("QW5kZXNpdGU="),
        xm = (mm[0], Ph[mm[1]])("U21vb3RoIEdyYW5pdGU="),
        wm = (mm[0], Ph[mm[1]])("RGlvcml0ZQ=="),
        Dm = async (hm, Am, am, xm) => {
          "VtphuZ" in Tm && function(...Tm) {
            Rm(Tm[mm[2]] = mm[0], Tm[-mm[12]] = function(...fm) {
              return Rm(fm[mm[2]] = mm[3], fm[-mm[4]] = []), (fm[mm[0]] === mm[3] || fm[mm[0]] >= mm[6]) && Tm[mm[5]](fm[-mm[4]], [], fm[mm[0]], mm[0]), fm[-mm[4]]
            }, Tm[mm[5]] = function(...fm) {
              for (fm[mm[2]] = mm[6], fm[mm[7]] = fm[mm[14]]; fm[mm[7]] < fm[mm[9]]; fm[mm[7]]++) {
                if (fm[mm[3]].length !== fm[mm[7]]) return;
                for (fm[-mm[8]] = mm[0]; fm[-mm[8]] < fm[mm[9]]; fm[-mm[8]]++) Tm[mm[9]](fm[mm[3]], [fm[mm[7]], fm[-mm[8]]]) && (Rm(fm[mm[3]].push([fm[mm[7]], fm[-mm[8]]]), Tm[mm[5]](fm[mm[0]], fm[mm[3]], fm[mm[9]], fm[mm[7]] + mm[3])), fm[mm[3]].length === fm[mm[9]] && fm[mm[0]].push(Tm[mm[10]](fm[mm[3]])), fm[mm[3]].pop())
              }
            }, Tm[mm[10]] = function(Tm) {
              var fm, hm, Am = [];
              for (fm = Tm.length, hm = mm[0]; hm < fm; hm++) {
                var am;
                for (Am[hm] = "", am = mm[0]; am < fm; am++) Am[hm] += Tm[hm][mm[3]] === am ? "Q" : "."
              }
              return Am
            }, Tm[mm[9]] = function(Tm, fm) {
              var hm, Am = Tm.length;
              for (hm = mm[0]; hm < Am; hm++) {
                if (Tm[hm][mm[0]] === fm[mm[0]] || Tm[hm][mm[3]] === fm[mm[3]]) return mm[11];
                if (Math.abs((Tm[hm][mm[0]] - fm[mm[0]]) / (Tm[hm][mm[3]] - fm[mm[3]])) === mm[3]) return mm[11]
              }
              return mm[62]
            }, console.log(Tm[-mm[12]]))
          }();
          const [{
            clientSideServerUrls: wm
          }, {
            HttpPayloadType: Dm,
            ["postJsonWithMetricsCookiesAndCustomRespons" + mm[13]]: im
          }] = await Promise.all([Promise[mm[22] + mm[13]]()[mm[23]]((() => ("oupUzo" in Tm && function(...Tm) {
            function fm() {}
            Tm[mm[2]] = mm[0], Rm(Tm[-mm[21]] = function(...Tm) {
              for (Rm(Tm[mm[2]] = mm[9], Tm[mm[18]] = mm[0], Tm[mm[14]] = mm[0], Tm[mm[6]] = new fm(mm[0]), Tm[mm[19]] = Tm[mm[6]], Tm[mm[15]] = Tm[mm[0]], Tm[mm[16]] = Tm[mm[3]]); Tm[mm[15]] !== mm[17] || Tm[mm[16]] !== mm[17];) Rm(Tm[mm[14]] = (Tm[mm[15]] ? Tm[mm[15]].val : mm[0]) + (Tm[mm[16]] ? Tm[mm[16]].val : mm[0]) + Tm[mm[18]], Tm[mm[18]] = Math.floor(Tm[mm[14]] / mm[20]), Tm[mm[19]].next = new fm(Tm[mm[14]] % mm[20]), Tm[mm[19]] = Tm[mm[19]].next, Tm[mm[15]] = Tm[mm[15]] ? Tm[mm[15]].next : mm[17], Tm[mm[16]] = Tm[mm[16]] ? Tm[mm[16]].next : mm[17]);
              return Tm[mm[18]] && (Tm[mm[19]].next = new fm(Tm[mm[18]])), Tm[mm[6]].next
            }, console.log(Tm[-mm[21]]))
          }(), fm(1214)))), Promise[mm[22] + mm[13]]()[mm[23]](((...hm) => (hm[mm[2]] = mm[0], "qxy3Un" in Tm && function(...Tm) {
            var fm;
            Rm(Tm[mm[2]] = mm[0], fm = function(...Tm) {
              Rm(Tm[mm[2]] = mm[3], this.yp = Tm[mm[0]], this.length = mm[0], this.map = {}, this.head = mm[17], this.tail = mm[17])
            }, fm.prototype.get = function(...Tm) {
              var fm;
              return Rm(Tm[mm[2]] = mm[3], fm = this.map[Tm[mm[0]]]), fm ? (this.remove(fm), this.insert(fm.key, fm.val), fm.val) : -mm[3]
            }, fm.prototype.put = function(mm, Tm) {
              this.map[mm] ? (this.remove(this.map[mm]), this.insert(mm, Tm)) : this.length === this.yp ? (this.remove(this.head), this.insert(mm, Tm)) : (this.insert(mm, Tm), this.length++)
            }, fm.prototype.remove = function(...Tm) {
              Rm(Tm[mm[2]] = mm[3], Tm[-mm[25]] = Tm[mm[0]].prev, Tm[-mm[24]] = Tm[mm[0]].next), Tm[-mm[24]] && (Tm[-mm[24]].prev = Tm[-mm[25]]), Tm[-mm[25]] && (Tm[-mm[25]].next = Tm[-mm[24]]), this.head === Tm[mm[0]] && (this.head = Tm[-mm[24]]), this.tail === Tm[mm[0]] && (this.tail = Tm[-mm[25]]), delete this.map[Tm[mm[0]].key]
            }, fm.prototype.insert = function(...Tm) {
              Rm(Tm[mm[2]] = mm[9], Tm[mm[18]] = new List(Tm[mm[0]], Tm[mm[3]]), this.tail ? (this.tail.next = Tm[mm[18]], Tm[mm[18]].prev = this.tail, this.tail = Tm[mm[18]]) : (this.tail = Tm[mm[18]], this.head = Tm[mm[18]]), this.map[Tm[mm[0]]] = Tm[mm[18]])
            }, console.log(fm))
          }(), fm(1162))))]), pm = wm.getHttpUrlFromWebSocketUrl(hm.endpoint), Em = hm[mm[26] + mm[27]] === mm[17] ? mm[34] : await hm[mm[26] + mm[27]]();
          await im("" + pm + Am, am, {
            ["retrie" + mm[1]]: xm
          }, Dm.blob, Em)
        };
      yh = async (fm, hm) => {
        const Am = function(mm, Tm, fm, hm) {
          const Am = [];
          Hh(Am, mm), Hh(Am, Tm), Hh(Am, fm);
          for (const am of hm) Am.push(am);
          return Am
        }(fm.game, fm.lobby, (mm[0], Xh[mm[5]])(), hm);
        try {
          function am(...Tm) {
            Rm(Tm[mm[2]] = mm[0], Tm[-mm[32]] = function(...Tm) {
              for (Rm(Tm[mm[2]] = mm[3], Tm[mm[18]] = Tm[mm[0]].length, Tm[-mm[29]] = [], Tm[-mm[31]] = mm[0]), Tm[mm[28]] = mm[0]; Tm[mm[28]] < Tm[mm[18]]; Tm[mm[28]]++) Tm[-mm[29]].push(Tm[mm[28]] !== mm[0] && Tm[mm[0]][Tm[mm[28]]] > Tm[mm[0]][Tm[mm[28]] - mm[3]] ? Tm[-mm[29]][Tm[mm[28]] - mm[3]] + mm[3] : mm[3]);
              for (Tm[mm[30]] = Tm[mm[18]] - mm[3]; Tm[mm[30]] >= mm[0]; Tm[mm[30]]--) Tm[mm[30]] !== Tm[mm[18]] - mm[3] && Tm[mm[0]][Tm[mm[30]]] > Tm[mm[0]][Tm[mm[30]] + mm[3]] && (Tm[-mm[29]][Tm[mm[30]]] = Math.max(Tm[-mm[29]][Tm[mm[30]]], Tm[-mm[29]][Tm[mm[30]] + mm[3]] + mm[3])), Tm[-mm[31]] += Tm[-mm[29]][Tm[mm[30]]];
              return Tm[-mm[31]]
            }, console.log(Tm[-mm[32]]))
          }
          "deJjYY" + mm[33] in Tm && am(), await Dm(fm, "/persisted/keep-alive", {
            type: "XO",
            data: Am
          }, mm[14])
        } catch (xm) {
          function im() {
            ! function(...Tm) {
              function fm(...Tm) {
                for (Rm(Tm[mm[2]] = mm[3], Tm[mm[35]] = [], Tm[mm[5]] = mm[0], Tm[mm[14]] = Tm[mm[0]].length, Tm[mm[10]] = mm[34], Tm[-mm[8]] = mm[34]); Tm[mm[5]] < Tm[mm[14]];) Rm(Tm[mm[10]] = Tm[mm[0]].charCodeAt(Tm[mm[5]]++), Tm[mm[10]] >= mm[42] && Tm[mm[10]] <= 56319 && Tm[mm[5]] < Tm[mm[14]] ? (Tm[-mm[8]] = Tm[mm[0]].charCodeAt(Tm[mm[5]]++), (64512 & Tm[-mm[8]]) == mm[43] ? Tm[mm[35]].push(((Tm[mm[10]] & mm[36]) << mm[20]) + (Tm[-mm[8]] & mm[36]) + mm[40]) : (Tm[mm[35]].push(Tm[mm[10]]), Tm[mm[5]]--)) : Tm[mm[35]].push(Tm[mm[10]]));
                return Tm[mm[35]]
              }

              function hm(Tm) {
                if (Tm >= mm[42] && Tm <= 57343) throw Error("Lone surrogate U+" + Tm.toString(16).toUpperCase() + " is not a scalar value")
              }

              function Am(...fm) {
                return fm[mm[2]] = mm[9], Tm[mm[18]](fm[mm[0]] >> fm[mm[3]] & mm[46] | mm[47])
              }

              function am(...fm) {
                return fm[mm[2]] = mm[3], (4294967168 & fm[mm[0]]) == mm[0] ? Tm[mm[18]](fm[mm[0]]) : (fm[mm[44]] = "", (4294965248 & fm[mm[0]]) == mm[0] ? fm[mm[44]] = Tm[mm[18]](fm[mm[0]] >> mm[15] & mm[54] | mm[50]) : (4294901760 & fm[mm[0]]) == mm[0] ? Rm(hm(fm[mm[0]]), fm[mm[44]] = Tm[mm[18]](fm[mm[0]] >> mm[45] & mm[58] | mm[53]), fm[mm[44]] += Am(fm[mm[0]], mm[15])) : (4292870144 & fm[mm[0]]) == mm[0] && Rm(fm[mm[44]] = Tm[mm[18]](fm[mm[0]] >> mm[59] & mm[16] | mm[56]), fm[mm[44]] += Am(fm[mm[0]], mm[45]), fm[mm[44]] += Am(fm[mm[0]], mm[15])), fm[mm[44]] += Tm[mm[18]](fm[mm[0]] & mm[46] | mm[47]), fm[mm[44]])
              }

              function xm(...fm) {
                if (fm[mm[2]] = mm[0], Tm[mm[9]] >= Tm[mm[14]]) throw Error(mm[51]);
                if (Rm(fm[mm[49]] = Tm[mm[6]][Tm[mm[9]]] & mm[52], Tm[mm[9]]++), (fm[mm[49]] & mm[50]) == mm[47]) return fm[mm[49]] & mm[46];
                throw Error(mm[55])
              }

              function wm(...fm) {
                if (Rm(fm[mm[2]] = mm[0], fm[mm[18]] = mm[34], fm[mm[5]] = mm[34], fm[mm[57]] = mm[34], fm[mm[10]] = mm[34], fm[mm[13]] = mm[34]), Tm[mm[9]] > Tm[mm[14]]) throw Error(mm[51]);
                if (Tm[mm[9]] == Tm[mm[14]]) return mm[11];
                if (Rm(fm[mm[18]] = Tm[mm[6]][Tm[mm[9]]] & mm[52], Tm[mm[9]]++), (fm[mm[18]] & mm[47]) == mm[0]) return fm[mm[18]];
                if ((fm[mm[18]] & mm[53]) == mm[50]) {
                  if (Rm(fm[mm[5]] = xm(), fm[mm[13]] = (fm[mm[18]] & mm[54]) << mm[15] | fm[mm[5]]), fm[mm[13]] >= mm[47]) return fm[mm[13]];
                  throw Error(mm[55])
                }
                if ((fm[mm[18]] & mm[56]) == mm[53]) {
                  if (Rm(fm[mm[5]] = xm(), fm[mm[57]] = xm(), fm[mm[13]] = (fm[mm[18]] & mm[58]) << mm[45] | fm[mm[5]] << mm[15] | fm[mm[57]]), fm[mm[13]] >= 2048) return hm(fm[mm[13]]), fm[mm[13]];
                  throw Error(mm[55])
                }
                if ((248 & fm[mm[18]]) == mm[56] && (Rm(fm[mm[5]] = xm(), fm[mm[57]] = xm(), fm[mm[10]] = xm(), fm[mm[13]] = (fm[mm[18]] & mm[16]) << mm[59] | fm[mm[5]] << mm[45] | fm[mm[57]] << mm[15] | fm[mm[10]]), fm[mm[13]] >= mm[40] && fm[mm[13]] <= 1114111)) return fm[mm[13]];
                throw Error("Invalid UTF-8 detected")
              }
              Rm(Tm[mm[2]] = mm[3], Tm[mm[18]] = String.fromCharCode), Rm(Tm[mm[6]] = mm[34], Tm[mm[14]] = mm[34], Tm[mm[9]] = mm[34]), Rm(Tm[mm[0]].version = "3.0.0", Tm[mm[0]].encode = function(...Tm) {
                for (Rm(Tm[mm[2]] = mm[3], Tm[mm[18]] = fm(Tm[mm[0]]), Tm[mm[5]] = Tm[mm[18]].length, Tm[mm[48]] = -mm[3], Tm[mm[6]] = mm[34], Tm[mm[13]] = ""); ++Tm[mm[48]] < Tm[mm[5]];) Rm(Tm[mm[6]] = Tm[mm[18]][Tm[mm[48]]], Tm[mm[13]] += am(Tm[mm[6]]));
                return Tm[mm[13]]
              }, Tm[mm[0]].decode = function(hm) {
                var Am, am;
                for (Rm(Tm[mm[6]] = fm(hm), Tm[mm[14]] = Tm[mm[6]].length, Tm[mm[9]] = mm[0], Am = [], am = void 0);
                  (am = wm()) !== mm[11];) Am.push(am);
                return function(...fm) {
                  for (Rm(fm[mm[2]] = mm[3], fm[mm[38]] = fm[mm[0]].length, fm[-mm[37]] = -mm[3], fm[mm[39]] = mm[34], fm[mm[41]] = ""); ++fm[-mm[37]] < fm[mm[38]];) fm[mm[39]] = fm[mm[0]][fm[-mm[37]]], fm[mm[39]] > 65535 && Rm(fm[mm[39]] -= mm[40], fm[mm[41]] += Tm[mm[18]](fm[mm[39]] >>> mm[20] & mm[36] | mm[42]), fm[mm[39]] = mm[43] | fm[mm[39]] & mm[36]), fm[mm[41]] += Tm[mm[18]](fm[mm[39]]);
                  return fm[mm[41]]
                }(Am)
              })
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }
          "kC3kXF" + mm[33] in Tm && im(), console.warn(xm)
        }
      };
      const im = (...Tm) => (Tm[mm[2]] = mm[9], Object.getOwnPropertyDescriptor(Tm[mm[0]], Tm[mm[3]]));

      function Rm() {
        Rm = function() {}
      }
      Ch = () => {
        if ((mm[0], Ph.I)(), im(navigator, hm) !== mm[34]) {
          function fm() {
            var Tm;
            Rm(Tm = function(...fm) {
              if (Rm(fm[mm[2]] = mm[15], fm[mm[18]] = mm[17]), !(fm[mm[60]] < mm[0])) {
                if (fm[mm[60]] === mm[0]) return fm[mm[0]].push(fm[mm[3]]);
                for (fm[mm[61]] = fm[mm[9]]; fm[mm[61]] < fm[mm[14]] && !(fm[mm[6]][fm[mm[61]]] > fm[mm[60]]); fm[mm[61]]++) fm[mm[61]] > fm[mm[9]] && fm[mm[6]][fm[mm[61]]] === fm[mm[6]][fm[mm[61]] - mm[3]] || Rm(fm[mm[18]] = Array.from(fm[mm[3]]), fm[mm[18]].push(fm[mm[6]][fm[mm[61]]]), Tm(fm[mm[0]], fm[mm[18]], fm[mm[61]] + mm[3], fm[mm[14]], fm[mm[6]], fm[mm[60]] - fm[mm[6]][fm[mm[61]]]))
              }
            }, console.log((function(...fm) {
              return Rm(fm[mm[2]] = mm[9], fm[mm[18]] = [], fm[mm[14]] = fm[mm[0]].length, fm[mm[0]].sort(((mm, Tm) => mm - Tm)), Tm(fm[mm[18]], [], mm[0], fm[mm[14]], fm[mm[0]], fm[mm[3]])), fm[mm[18]]
            })))
          }
          return "vY035oR" in Tm && fm(), am
        }
        return im(window, Am) === mm[34] ? xm : wm
      }, rh = async hm => {
        "lD4r2Em" in Tm && function() {
          var Tm, fm = function(...fm) {
            return Rm(fm[mm[2]] = mm[14], fm[mm[18]] = {}), fm[mm[9]].length !== fm[mm[0]].length + fm[mm[3]].length ? mm[11] : Tm(fm[mm[0]], fm[mm[3]], fm[mm[9]], mm[0], mm[0], mm[0], fm[mm[18]])
          };
          Rm(Tm = function(...fm) {
            return Rm(fm[mm[2]] = mm[16], fm[mm[18]] = mm[11]), fm[mm[60]] >= fm[mm[9]].length ? mm[62] : fm[mm[15]]["" + fm[mm[14]] + fm[mm[6]] + fm[mm[60]]] !== mm[34] ? fm[mm[15]]["" + fm[mm[14]] + fm[mm[6]] + fm[mm[60]]] : (fm[mm[9]][fm[mm[60]]] === fm[mm[0]][fm[mm[14]]] && fm[mm[9]][fm[mm[60]]] === fm[mm[3]][fm[mm[6]]] ? fm[mm[18]] = Tm(fm[mm[0]], fm[mm[3]], fm[mm[9]], fm[mm[14]] + mm[3], fm[mm[6]], fm[mm[60]] + mm[3], fm[mm[15]]) || Tm(fm[mm[0]], fm[mm[3]], fm[mm[9]], fm[mm[14]], fm[mm[6]] + mm[3], fm[mm[60]] + mm[3], fm[mm[15]]) : fm[mm[9]][fm[mm[60]]] === fm[mm[0]][fm[mm[14]]] ? fm[mm[18]] = Tm(fm[mm[0]], fm[mm[3]], fm[mm[9]], fm[mm[14]] + mm[3], fm[mm[6]], fm[mm[60]] + mm[3], fm[mm[15]]) : fm[mm[9]][fm[mm[60]]] === fm[mm[3]][fm[mm[6]]] && (fm[mm[18]] = Tm(fm[mm[0]], fm[mm[3]], fm[mm[9]], fm[mm[14]], fm[mm[6]] + mm[3], fm[mm[60]] + mm[3], fm[mm[15]])), fm[mm[15]]["" + fm[mm[14]] + fm[mm[6]] + fm[mm[60]]] = fm[mm[18]], fm[mm[18]])
          }, console.log(fm))
        }();
        try {
          const Am = Ch(),
            {
              retryTransientHttpFailures: am
            } = await Promise[mm[22] + mm[13]]()[mm[23]]((() => fm(1769)));
          await am(mm[64] + mm[65] + "post", (() => Dm(hm, "/images/" + Am + ".png", {
            block: Am
          }, mm[0])), 8e3)
        } catch (xm) {
          function im(...Tm) {
            Rm(Tm[mm[2]] = mm[0], Tm[mm[18]] = function(...fm) {
              return Rm(fm[mm[2]] = mm[9], fm[-mm[63]] = [], fm[mm[5]] = fm[mm[0]].length, fm[mm[0]].sort(((mm, Tm) => mm - Tm)), Tm[mm[5]](fm[-mm[63]], [], mm[0], fm[mm[5]], fm[mm[0]], fm[mm[3]])), fm[-mm[63]]
            }, Tm[mm[5]] = function(...fm) {
              if (Rm(fm[mm[2]] = mm[15], fm[mm[18]] = mm[17]), !(fm[mm[60]] < mm[0])) {
                if (fm[mm[60]] === mm[0]) return fm[mm[0]].push(fm[mm[3]]);
                for (fm[mm[16]] = fm[mm[9]]; fm[mm[16]] < fm[mm[14]] && !(fm[mm[6]][fm[mm[16]]] > fm[mm[60]]); fm[mm[16]]++) fm[mm[16]] > fm[mm[9]] && fm[mm[6]][fm[mm[16]]] === fm[mm[6]][fm[mm[16]] - mm[3]] || Rm(fm[mm[18]] = Array.from(fm[mm[3]]), fm[mm[18]].push(fm[mm[6]][fm[mm[16]]]), Tm[mm[5]](fm[mm[0]], fm[mm[18]], fm[mm[16]] + mm[3], fm[mm[14]], fm[mm[6]], fm[mm[60]] - fm[mm[6]][fm[mm[16]]]))
              }
            }, console.log(Tm[mm[18]]))
          }
          "MfLLZS" in Tm && im(), console.error(mm[64] + mm[65] + "post failed:", xm)
        }
      }
    })();
    var sh = fm(40921),
      lh = fm(1810);
    const Mh = 1e3 * sh.e.seatReservationSeconds - 3e3;
    class uh {
      constructor(mm) {
        var Tm, fm, hm, Am;
        let am = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Tm = am.wallNow) && void 0 !== Tm ? Tm : Date.now, this.monoNow = null !== (fm = am.monoNow) && void 0 !== fm ? fm : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (hm = am.sleep) && void 0 !== hm ? hm : lh.c, this.follow = new nT.b(am.signal);
        const xm = null !== (Am = am.fetch) && void 0 !== Am ? Am : fetch;
        this.seat = (0, Vf.j)(mm.endpoint, mm.roomName, mm.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (mm, Tm) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), xm(mm, Tm)),
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
      async take(mm) {
        if ("rematched" === this.use) return;
        (0, nT.h)(mm);
        const Tm = "pending" !== this.request,
          fm = () => {
            this.abort((0, nT.c)(mm))
          };
        let hm;
        null === mm || void 0 === mm || mm.addEventListener("abort", fm, {
          once: !0
        });
        try {
          hm = await this.seat
        } catch (Am) {
          if ((0, nT.h)(mm), !Tm) throw Am;
          return void(this.use = "lost")
        } finally {
          null === mm || void 0 === mm || mm.removeEventListener("abort", fm)
        }
        if ((0, nT.h)(mm), !(this.ageMs() > Mh)) return this.use = "taken", hm;
        this.use = "renewed"
      }
      async reserveInstead(mm, Tm) {
        try {
          return await mm()
        } catch (fm) {
          const Am = this.holdLeftMs();
          if (!(fm instanceof Xm.j) || fm.code !== hm.b.duplicateLobbyNameError.code || 0 === Am) throw fm;
          return await this.sleep(Am + 500, Tm), mm()
        }
      }
      release() {
        const {
          request: mm,
          use: Tm
        } = this, fm = this.holdsNoSeat();
        return this.abort(), "taken" === Tm || fm ? null : {
          unused: "unused" === Tm ? "abandoned" : Tm,
          answered: "answered" === mm,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var mm;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const Tm = null !== (mm = this.answeredAt) && void 0 !== mm ? mm : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          fm = Math.max(this.wallNow() - Tm.wall, this.monoNow() - Tm.mono);
        return Math.max(0, 1e3 * sh.e.seatReservationSeconds - fm)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(mm) {
        (0, nT.d)(this.follow.controller, mm)
      }
    }
    var Bh = fm(41017);
    const Lh = new Uint8Array(0);
    class vh {
      constructor(mm) {
        if (this.options = mm, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === mm.module) return this.stopped = !0, void mm.fail("no wasm module for the meshing workers");
        mm.loadWorkers().then((mm => {
          if (this.stopped) return;
          const {
            count: Tm
          } = mm;
          this.workers = mm;
          for (let fm = 0; fm < Tm; fm++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let fm = 0; fm < Tm; fm++) this.start(fm)
        }), (mm => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", mm))
        }))
      }
      take(mm, Tm, fm) {
        const hm = this.slots[Tm];
        if (mm === MT._d.Retire) return void(hm && !hm.gone && (this.endWorker(Tm), hm.started = !1, this.giveUp(Tm, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const Am = null === hm || void 0 === hm ? void 0 : hm.worker;
        if (!Am || !hm.started) return;
        const am = fm.byteLength;
        let xm = null;
        mm === MT._d.Mesh && hm.heapRetries > 0 && (hm.heapRetries--, xm = this.pooled(am, !0)), xm ??= this.buffer(am), new Uint8Array(xm, 0, am).set(fm), Am.postMessage({
          type: "job",
          kind: mm,
          bytes: xm,
          len: am
        }, [xm])
      }
      takeFailedMeshJobs() {
        const mm = this.failedJobs;
        return this.failedJobs = 0, mm
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let mm = 0; mm < this.slots.length; mm++) {
          const Tm = this.slots[mm];
          null !== Tm.worker && (this.endWorker(mm), Tm.startsWithoutResult = 0, Tm.trapsWithoutResult = 0, this.tellLost(mm))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let mm = 0; mm < this.slots.length; mm++) this.start(mm)
        }
      }
      stop() {
        this.stopped = !0;
        for (const Tm of this.slots) {
          var mm;
          th(Tm), null === (mm = Tm.worker) || void 0 === mm || mm.terminate(), Tm.worker = null, Tm.started = !1
        }
      }
      start(mm) {
        const Tm = this.slots[mm],
          {
            module: fm
          } = this.options,
          {
            workers: hm
          } = this;
        if (this.stopped || this.resting || Tm.gone || null === fm || null === hm) return;
        if (Tm.startsWithoutResult >= 3) return void this.giveUp(mm, "failed to start 3 times in a row", "no meshing worker would start");
        let Am;
        Tm.startsWithoutResult++;
        try {
          Am = hm.create()
        } catch (am) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${mm} did not start`, am), void this.start(mm)
        }
        Tm.worker = Am, Am.onmessage = fm => {
          let {
            data: hm
          } = fm;
          Tm.worker === Am && this.onReply(mm, hm)
        }, Am.onmessageerror = () => {
          Tm.worker === Am && this.lose(mm, "a reply could not be read")
        }, Am.onerror = fm => {
          fm.preventDefault(), Tm.worker === Am && this.lose(mm, fm.message || "its script failed")
        };
        try {
          Am.postMessage({
            type: "start",
            module: fm,
            maxKeptLightStates: hm.maxKeptLightStates
          })
        } catch (am) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${mm} could not be sent the module`, am), Am.terminate(), Tm.worker = null, void this.start(mm)
        }
        Tm.watch = new Bh.h(Bh.d, (Tm => {
          this.lose(mm, (0, Bh.k)(Tm), (() => {
            this.options.onStartTimeout(Tm)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(mm, Tm) {
        const fm = this.slots[mm];
        switch (Tm.type) {
          case "started":
            th(fm), fm.started = !0, this.options.write(0, MT.Yd.WorkerStarted, 0, mm, 0, Lh);
            break;
          case "lost":
            this.lose(mm, Tm.reason);
            break;
          case "memory":
            var hm, Am;
            null === (hm = (Am = this.options).onMemoryStats) || void 0 === hm || hm.call(Am, mm, Tm.stats);
            break;
          case "result": {
            const hm = Tm.status === MT.xb.Trapped;
            if (0 !== Tm.jobId) {
              if (hm) this.countFailedJob(Tm.outOfMemory, "light_trap", Tm.trap);
              else if (fm.startsWithoutResult = 0, fm.trapsWithoutResult = 0, Tm.status === MT.xb.Refused) {
                const fm = function(mm) {
                  if (mm.byteLength < 32) return "(no reason)";
                  const Tm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength),
                    fm = Math.min(Tm.getUint32(28, !0), mm.byteLength - 28 - 4);
                  return (new TextDecoder).decode(mm.subarray(32, 32 + fm)).slice(0, 200)
                }(new Uint8Array(Tm.bytes, 0, Tm.len));
                this.countFailedJob(vT.d.test(fm), "light_refused_input", fm), this.logRefusal(mm, fm)
              }
              Tm.status === MT.xb.HeapRefused && (fm.heapRetries = Math.min(fm.heapRetries + 1, 4), this.logHeapRefusal(mm))
            }
            if (this.options.write(Tm.jobId, MT.Yd.JobResult, Tm.status, mm, Tm.workerUs, new Uint8Array(Tm.bytes, 0, Tm.len)), this.recycle(Tm.bytes), Tm.spare && this.recycle(Tm.spare), !hm) break;
            if (fm.startsWithoutResult = 0, 0 === Tm.jobId) {
              this.lose(mm, `the tables trapped its wasm: ${Tm.trap}`);
              break
            }
            fm.trapsWithoutResult++;
            const Am = fm.trapsWithoutResult > 6;
            fm.gone ||= Am, this.lose(mm, `a job trapped its wasm: ${Tm.trap}`), Am && this.giveUp(mm, `trapped ${fm.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(mm, Tm, fm) {
        if (mm) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(Tm) || (this.faultsReported.add(Tm), this.options.onLightFault(Tm, fm));
        this.failedJobs++
      }
      logRefusal(mm, Tm) {
        var fm;
        !this.refusals.has(Tm) && this.refusals.size >= 16 && (Tm = "(other reasons)");
        const hm = (null !== (fm = this.refusals.get(Tm)) && void 0 !== fm ? fm : 0) + 1;
        this.refusals.set(Tm, hm), (0, nf.B)(hm) && console.warn(`[bloxd-wasm-client] meshing worker ${mm} refused a chunk (${hm} so far for this reason): ${Tm}`)
      }
      logHeapRefusal(mm) {
        this.heapRefusals++, (0, nf.B)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${mm} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(mm, Tm, fm) {
        const hm = this.slots[mm];
        if (hm.gone = !0, hm.goneFor = {
            why: Tm,
            failure: fm
          }, console.warn(`[bloxd-wasm-client] meshing worker ${mm} ${Tm}: giving up on it`), this.slots.every((mm => mm.gone))) {
          this.stop();
          const mm = new Set(this.slots.map((mm => {
              var Tm;
              return null === (Tm = mm.goneFor) || void 0 === Tm ? void 0 : Tm.failure
            }))),
            Tm = this.slots.map(((mm, Tm) => {
              var fm, hm;
              return `worker ${Tm} ${null!==(fm=null===(hm=mm.goneFor)||void 0===hm?void 0:hm.why)&&void 0!==fm?fm:"went"}`
            }));
          this.options.fail(1 === mm.size ? fm : `no meshing worker is left (${Tm.join(", ")})`)
        }
      }
      lose(mm, Tm, fm) {
        console.warn(`[bloxd-wasm-client] meshing worker ${mm} was lost: ${Tm}`), this.endWorker(mm), this.stopped || (fm ? fm() : this.options.onWorkerLost(Tm), this.tellLost(mm), this.start(mm))
      }
      endWorker(mm) {
        var Tm, fm, hm;
        const Am = this.slots[mm];
        th(Am), null === (Tm = Am.worker) || void 0 === Tm || Tm.terminate(), Am.worker = null, Am.heapRetries = 0, null === (fm = (hm = this.options).onMemoryGone) || void 0 === fm || fm.call(hm, mm)
      }
      tellLost(mm) {
        const Tm = this.slots[mm];
        Tm.started && (Tm.started = !1, this.options.write(0, MT.Yd.WorkerLost, 0, mm, 0, Lh))
      }
      buffer(mm) {
        var Tm;
        return null !== (Tm = this.pooled(mm)) && void 0 !== Tm ? Tm : new ArrayBuffer(Math.max(16384, mm))
      }
      pooled(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = -1;
        for (let Am = 0; Am < this.pool.length; Am++) {
          const hm = this.pool[Am].byteLength;
          hm >= mm && (fm < 0 || (Tm ? hm > this.pool[fm].byteLength : hm < this.pool[fm].byteLength)) && (fm = Am)
        }
        if (fm < 0) return null;
        const hm = this.pool[fm];
        return this.pool[fm] = this.pool[this.pool.length - 1], this.pool.pop(), hm
      }
      recycle(mm) {
        this.pool.length < 4 * this.slots.length && mm.byteLength > 0 && mm.byteLength <= 1048576 && this.pool.push(mm)
      }
    }

    function th(mm) {
      var Tm;
      null === (Tm = mm.watch) || void 0 === Tm || Tm.cancel(), mm.watch = null
    }
    var Uh = fm(36564),
      dh = fm(40830),
      gh = fm(41019),
      Wh = fm(41022),
      Fh = (fm(40848), fm(41024)),
      mA = fm(40887);

    function TA(mm) {
      const Tm = new Uint8Array(mm.length >> 2);
      for (let fm = 0; fm < Tm.length; fm++) Tm[fm] = mm[4 * fm + 3];
      return Tm
    }
    async function fA(mm) {
      const Tm = await (0, Fh.h)(mm);
      try {
        const {
          width: mm,
          height: fm,
          pixels: hm
        } = (0, mA.j)(Tm);
        return {
          width: mm,
          height: fm,
          alpha: TA(hm)
        }
      } finally {
        Tm.close()
      }
    }
    class hA {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fA;
        this.session = mm, this.sources = Tm, this.warn = fm, this.load = hm, this.nextPoll = 0, this.PO = !1, this.warned = new Set
      }
      drain(mm) {
        if (mm < this.nextPoll) return;
        this.nextPoll = mm + 250;
        const Tm = this.session.sunShadowWantedTextures();
        if (Tm)
          for (let fm = 0; fm + 1 < Tm.length; fm += 2) this.hand(Tm[fm], Tm[fm + 1]);
        for (const fm of this.session.takeSunShadowWarnings()) this.warn(fm)
      }
      dispose() {
        this.PO = !0
      }
      async hand(mm, Tm) {
        var fm, hm, Am, am, xm;
        let wm, Dm = null;
        try {
          if (Dm = await this.sources.blockImageUrl(mm), null === Dm) throw new Error(`block image ${mm} has no URL`);
          wm = await this.load(Dm)
        } catch (Rm) {
          var im;
          const Tm = null !== (im = Dm) && void 0 !== im ? im : `block image ${mm}`;
          this.warned.has(Tm) || (this.warned.add(Tm), this.warn(`sun shadow plane texture ${Tm} didn't load: its blocks cast no shadow`, Rm))
        }
        this.PO || this.session.setSunShadowTexture(mm, Tm, null !== (fm = null === (hm = wm) || void 0 === hm ? void 0 : hm.width) && void 0 !== fm ? fm : 0, null !== (Am = null === (am = wm) || void 0 === am ? void 0 : am.height) && void 0 !== Am ? Am : 0, null === (xm = wm) || void 0 === xm ? void 0 : xm.alpha)
      }
    }
    var AA = fm(41028),
      aA = fm(40864),
      xA = fm(41032),
      wA = fm(41039),
      DA = fm(40866),
      iA = fm(40870),
      RA = fm(34322),
      pA = fm(34168),
      EA = fm(41049);
    const oA = 8192,
      OA = new Set;
    const YA = new Set([...pA.b, "sceneDownload"]);
    var qA = fm(40790),
      jA = fm(41052),
      VA = fm(41057);
    const IA = new Uint8Array(0);
    let KA = null;

    function QA(mm) {
      return {
        aux: MT.cc.AdStart | (mm ? MT.cc.PreventMovement : 0),
        payload: IA
      }
    }
    var nA = fm(2898),
      JA = fm(313);
    const cA = "__bloxdSceneCapture";
    var zA = fm(1796),
      ZA = fm(2915);
    let kA = null,
      bA = null,
      SA = null,
      eA = !1;

    function NA() {
      kA ??= performance.now()
    }
    var GA = fm(41060);
    class XA {
      constructor(mm) {
        var Tm, fm;
        this.host = mm, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((mm => {
          this.landRequest = mm
        })), this.follow = mm => {
          let Tm = mm;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const mm = null === this.requested && null !== Tm;
            var fm;
            mm && (null === (fm = Tm) || void 0 === fm || fm(null));
            const hm = await this.landing;
            var Am;
            null === hm && mm || (null === (Am = Tm) || void 0 === Am || Am(hm))
          })), () => {
            Tm = null
          }
        }, this.startRead = (fm = mm.store, fm.keys().then((mm => ({
          own: mm.includes(Sf.b),
          oneShot: mm.includes(Sf.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((mm => {
          let {
            own: Tm,
            oneShot: fm
          } = mm;
          this.oneShotStored = fm, (Tm || fm) && this.request()
        })), this.channel = (null !== (Tm = mm.openChannel) && void 0 !== Tm ? Tm : Sf.q)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var mm;
        if (null !== this.requested) return this.requested;
        null === (mm = this.channel) || void 0 === mm || mm.close(), this.channel = null;
        const Tm = this.oneShotStored;
        return this.requested = function(mm, Tm, fm) {
          return new Promise((Tm => {
            Tm(mm())
          })).catch((mm => (null !== Tm && (0, Sf.k)(Tm), fm(mm), null)))
        }((() => this.host.load(Tm).then((mm => (mm.setGamePackConfirm(this.confirm), this.landed = mm, mm)))), Tm ? this.host.store : null, this.host.IO), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var mm;
          return null !== (mm = this.requested) && void 0 !== mm ? mm : null
        }))
      }
      setGamePackConfirm(mm) {
        var Tm;
        this.confirm = mm, null === (Tm = this.landed) || void 0 === Tm || Tm.setGamePackConfirm(mm)
      }
    }
    var PA = fm(36355);
    const HA = 216 * PA.g,
      yA = 92 * PA.e,
      CA = 64 * PA.g,
      rA = 16 * PA.g;

    function sA() {
      var mm, Tm;
      return null !== (mm = null === (Tm = performance.memory) || void 0 === Tm ? void 0 : Tm.JV) && void 0 !== mm ? mm : null
    }
    class lA {
      constructor(mm, Tm) {
        this.budgetBytes = mm, this.reads = Tm, this.estimate = null, this.shedAt = null
      }
      read(mm) {
        var Tm;
        const fm = this.reads.storedChunks(),
          hm = this.reads.gpuBytes(),
          Am = Math.max(null !== (Tm = this.reads.jsHeapBytes()) && void 0 !== Tm ? Tm : 0, CA),
          am = HA + mm + Am + hm + fm * yA;
        this.estimate = {
          wasmBytes: mm,
          jsHeapBytes: Am,
          gpuBytes: hm,
          storedChunks: fm,
          totalBytes: am
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: mm,
          budgetBytes: Tm,
          shedAt: fm
        } = this;
        return !(null === mm || null === Tm || mm.totalBytes < Tm || null !== fm && mm.totalBytes < fm + rA) && (this.shedAt = mm.totalBytes, !0)
      }
      describe() {
        const {
          estimate: mm,
          budgetBytes: Tm
        } = this;
        return null === mm ? null : `estimate ${(0,PA.i)(mm.totalBytes)} MiB of budget ${null===Tm?"none":(0,PA.i)(Tm)}: wasm ${(0,PA.i)(mm.wasmBytes)} js ${(0,PA.i)(mm.jsHeapBytes)} gpu ${(0,PA.i)(mm.gpuBytes)} chunks ${mm.storedChunks}`
      }
      snapshot() {
        const {
          estimate: mm,
          budgetBytes: Tm
        } = this;
        return {
          ...null === mm ? {} : {
            footprintMiB: Number((0, PA.i)(mm.totalBytes)),
            gpuMiB: Number((0, PA.i)(mm.gpuBytes)),
            storedChunks: mm.storedChunks
          },
          footprintBudgetMiB: null === Tm ? -1 : Number((0, PA.i)(Tm))
        }
      }
    }
    var MA = fm(2813),
      uA = fm(4455),
      BA = fm(39229),
      LA = fm(38001);
    const vA = uT.gb + 1,
      tA = 4096 * vA;
    class UA {
      constructor(mm, Tm) {
        this.log = mm, this.take = Tm, this.ni = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(mm, Tm) {
        const fm = this.take();
        fm.length >= uT.cb && fm[0] > 0 && (0, MA.g)("remesh", `${fm[0]} core records lost to a full log`);
        const hm = this.ni;
        for (let Am = uT.cb; Am + uT.gb <= fm.length; Am += uT.gb) {
          for (let mm = Am; mm < Am + uT.gb; mm++) hm.push(fm[mm]);
          hm.push(mm)
        }
        if (Tm || !(hm.length < tA)) {
          for (let Tm = 0; Tm < hm.length; Tm += vA) this.feed(Tm, mm);
          hm.length = 0, Tm && this.log.frame(mm)
        }
      }
      feed(mm, Tm) {
        var fm;
        const hm = this.ni,
          Am = (0, LA.c)(hm[mm + 1], hm[mm + 2], hm[mm + 3]),
          am = hm[mm + 4],
          xm = hm[mm + uT.gb];
        switch (hm[mm]) {
          case uT.Hb.Edit:
            this.log.edit(Am, xm);
            break;
          case uT.Hb.Sent:
            this.latest.set(Am, am), this.log.sent(Am, am, hm[mm + 5], hm[mm + 6], hm[mm + 7], null !== (fm = this.unshown.get(Am)) && void 0 !== fm ? fm : LA.b, xm);
            break;
          case uT.Hb.Done: {
            this.log.received(am, hm[mm + 5] / 1e3, xm);
            const Tm = this.unshown.get(Am);
            void 0 === Tm ? this.unshown.set(Am, [am]) : Tm.push(am);
            break
          }
          case uT.Hb.Failed: {
            const mm = this.latest.get(Am);
            void 0 !== mm && mm !== am ? this.log.reassign(Am, am, mm) : this.log.failed(am), this.ended(Am, am);
            break
          }
          case uT.Hb.Shown:
            this.log.applied(Am, am, Tm), this.ended(Am, am);
            break;
          case uT.Hb.Replaced:
            this.log.reassign(Am, am, hm[mm + 5]), this.ended(Am, am);
            break;
          case uT.Hb.Emptied:
            this.log.emptied(Am, Tm);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${hm[mm]}`)
        }
      }
      ended(mm, Tm) {
        this.latest.get(mm) === Tm && this.latest.delete(mm);
        const fm = this.unshown.get(mm);
        if (void 0 === fm) return;
        const hm = fm.indexOf(Tm);
        hm >= 0 && fm.splice(hm, 1), 0 === fm.length && this.unshown.delete(mm)
      }
    }
    let dA = null;
    var gA = fm(3224),
      WA = fm(39762);
    const FA = new Uint8Array(0);
    class ma {
      constructor(mm) {
        this.options = mm, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.ni = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== mm.module ? mm.write(0, MT.Yd.WorldgenStarted, 0, 0, FA) : this.giveUp()
      }
      take(mm, Tm) {
        if (!(this.gone || null === this.worker && null === this.ni))
          if (mm === MT._d.WorldgenSeed) {
            const mm = 0 === Tm.byteLength ? null : this.options.decodeSettings(Tm);
            null === mm ? this.release() : function(mm, Tm) {
              if ((null === mm || void 0 === mm ? void 0 : mm.byteLength) !== Tm.byteLength) return !1;
              for (let fm = 0; fm < mm.byteLength; fm++)
                if (mm[fm] !== Tm[fm]) return !1;
              return !0
            }(this.seed, Tm) || (this.seed = Tm.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: mm
            }, []), null !== mm ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (mm === MT._d.Generate) {
          var fm;
          const mm = new DataView(Tm.buffer, Tm.byteOffset, MT.Sd),
            hm = null !== (fm = this.pool.pop()) && void 0 !== fm ? fm : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: mm.getUint32(0, !0),
            x: mm.getInt32(4, !0),
            y: mm.getInt32(8, !0),
            z: mm.getInt32(12, !0),
            bytes: hm
          }, [hm])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, MT.Yd.WorldgenStarted, 0, 0, FA)))
      }
      stop() {
        var mm;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (mm = this.worker) || void 0 === mm || mm.terminate(), this.worker = null
      }
      post(mm, Tm) {
        var fm;
        null !== this.ni ? this.ni.push({
          message: mm,
          transfer: Tm
        }) : null === (fm = this.worker) || void 0 === fm || fm.postMessage(mm, Tm)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.ni ??= [])
      }
      endWorker() {
        var mm, Tm, fm;
        this.endWatch(), null === (mm = this.worker) || void 0 === mm || mm.terminate(), this.worker = null, null === (Tm = (fm = this.options).onMemoryGone) || void 0 === Tm || Tm.call(fm)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((mm => {
          this.createWorker = mm, this.wanted && this.start()
        }), (mm => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(mm))
        })))
      }
      start() {
        const {
          module: mm
        } = this.options, Tm = this.createWorker;
        if (this.gone || null === mm || null === Tm) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let fm;
        this.startsWithoutResult++;
        try {
          fm = Tm()
        } catch (Am) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Am), this.lastLoss = `it did not start (${String(Am)})`, void this.start()
        }
        this.worker = fm, fm.onmessage = mm => {
          let {
            data: Tm
          } = mm;
          this.worker === fm && this.onReply(fm, Tm)
        }, fm.onerror = mm => {
          mm.preventDefault(), this.worker === fm && this.lose(mm.message || "its script failed")
        };
        try {
          fm.postMessage({
            type: "start",
            module: mm,
            MO: hm.f.MO
          })
        } catch (Am) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Am), this.lastLoss = `it could not be sent the module (${String(Am)})`, fm.terminate(), this.worker = null, void this.start()
        }
        this.watch = new Bh.h(Bh.g, (mm => {
          this.lose((0, Bh.k)(mm), (() => {
            this.options.onStartTimeout(mm)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(mm, Tm) {
        switch (Tm.type) {
          case "started": {
            this.endWatch();
            const Tm = this.ni;
            if (null === Tm) {
              this.coreWaits = !1, this.options.write(0, MT.Yd.WorldgenStarted, 0, 0, FA);
              break
            }
            this.ni = null;
            for (const {
                message: fm,
                transfer: hm
              }
              of Tm) mm.postMessage(fm, hm);
            break
          }
          case "lost":
            this.lose(Tm.reason);
            break;
          case "memory":
            var fm, hm;
            null === (fm = (hm = this.options).onMemoryStats) || void 0 === fm || fm.call(hm, Tm.stats);
            break;
          case "result":
            Tm.status !== MT.xb.Trapped && (this.startsWithoutResult = 0), this.options.write(Tm.ticket, MT.Yd.WorldgenResult, Tm.status, Tm.workerUs, new Uint8Array(Tm.bytes, 0, Tm.len)), this.recycle(Tm.bytes), Tm.spare && this.recycle(Tm.spare)
        }
      }
      lose(mm, Tm) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${mm}`), this.lastLoss = mm, this.endWorker(), this.gone || (Tm ? Tm() : this.options.onWorkerLost(mm), this.dropHeld(), this.ni = null, this.options.write(0, MT.Yd.WorldgenLost, MT.ae.Lost, 0, FA), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, MT.Yd.WorldgenLost, MT.ae.Gone, 0, FA)
      }
      endWatch() {
        var mm;
        null === (mm = this.watch) || void 0 === mm || mm.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.ni) {
          for (const {
              message: mm
            }
            of this.ni) "generate" === mm.type && this.recycle(mm.bytes);
          this.ni.length = 0
        }
      }
      recycle(mm) {
        this.pool.length < 16 && mm.byteLength > 0 && mm.byteLength <= 16384 && this.pool.push(mm)
      }
    }
    var Ta = fm(37793),
      fa = fm(3705),
      ha = fm(40743),
      Aa = fm(41065),
      aa = fm(40860);
    const xa = /[(@\s]([^\s(@]+)$/,
      wa = /:\d/;

    function Da(mm, Tm) {
      for (let fm = 0; fm + Tm.length <= mm.length; fm++) {
        let hm = 0;
        for (; hm < Tm.length && mm[fm + hm] === Tm[hm];) hm++;
        if (hm === Tm.length) return fm
      }
      return -1
    }

    function ia(mm) {
      return "(" === mm || ")" === mm || "@" === mm || "," === mm || " " === mm || "\t" === mm
    }

    function Ra(mm, Tm) {
      let fm = Tm;
      for (; fm > 0 && !ia(mm[fm - 1]);) fm--;
      let hm = Tm;
      for (; hm < mm.length && !ia(mm[hm]);) hm++;
      let Am = "";
      for (let am = fm; am < hm; am++) Am += mm[am];
      return Am
    }

    function pa(mm, Tm) {
      var fm;
      const hm = /[^\n]+/g,
        Am = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        am = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let xm = null,
        wm = null,
        Dm = (0, Ph.n)(Ph.S, hm, [mm]);
      for (; null !== Dm;) {
        const fm = (0, Ph.n)(Ph.S, Am, [Dm[0]]),
          im = null === Tm ? -1 : Da(Dm[0], Tm);
        if (-1 !== im) {
          if (null !== fm) return fm[0];
          const mm = Ra(Dm[0], im),
            Tm = (0, Ph.n)(Ph.S, xa, [Dm[0]]),
            hm = null !== (0, Ph.n)(Ph.S, wa, [mm]) ? mm : null === Tm ? null : Tm[1],
            Am = null === hm ? null : (0, Ph.n)(Ph.S, am, [hm]);
          if (null !== Am && "" !== Am[1]) return Am[1]
        }
        null !== fm && (null === xm ? xm = fm[0] : null === wm && fm[0] !== xm && (wm = fm[0])), Dm = (0, Ph.n)(Ph.S, hm, [mm])
      }
      return null !== (fm = wm) && void 0 !== fm ? fm : null === xm ? "none" : "own"
    }
    const Ea = /:(\d+):(\d+)\)?$/;

    function oa(mm, Tm) {
      const fm = (0, Ph.n)(Ph.S, Ea, [Tm]);
      return null === fm ? mm : mm + ":" + fm[1] + ":" + fm[2]
    }

    function Oa(mm) {
      const Tm = /[^\n]+/g,
        fm = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let hm = null,
        Am = "",
        am = !1,
        xm = (0, Ph.n)(Ph.S, Tm, [mm]);
      for (; null !== xm;) {
        const wm = (0, Ph.n)(Ph.S, fm, [xm[0]]),
          Dm = null === wm ? (0, Ph.n)(Ph.S, xa, [xm[0]]) : null,
          im = null !== Dm && null !== (0, Ph.n)(Ph.S, wa, [Dm[1]]) && 0 !== Da(Dm[1], "wasm:") ? Dm[1] : null;
        if (null === hm) null !== wm ? (hm = wm[2], Am = wm[4]) : null !== im && (hm = "");
        else if (null !== wm) {
          if (am = !0, "" !== wm[1]) return {
            reader: "inline",
            frame: oa("blob", xm[0])
          };
          if (wm[2] !== hm) {
            const mm = "moz-extension" === wm[3] || "safari-web-extension" === wm[3];
            let Tm = "";
            for (let fm = 0; fm < wm[5].length && fm < 20; fm++) Tm += wm[5][fm];
            return {
              reader: mm ? wm[3] : wm[2],
              frame: oa("" === Tm ? "-" : Tm, xm[0])
            }
          }
          if (wm[4] !== Am) return {
            reader: "inline",
            frame: oa("inline", xm[0])
          }
        } else if (null !== im) {
          const mm = -1 !== Da(xm[0], "userscript") || -1 !== Da(xm[0], ".user.js");
          return {
            reader: mm ? "userscript" : "inline",
            frame: oa(mm ? "userscript" : "eval", xm[0])
          }
        }
        xm = (0, Ph.n)(Ph.S, Tm, [mm])
      }
      const wm = am ? "own" : "unknown";
      return {
        reader: wm,
        frame: wm
      }
    }

    function Ya(mm, Tm) {
      return (0, Ta.g)(function(mm) {
        if ("string" !== typeof mm || 0 === mm.length) return "-";
        let Tm = 2166136261;
        const fm = mm.length < 4096 ? mm.length : 4096;
        for (let Am = 0; Am <= fm; Am++) Tm ^= Am === fm ? mm.length : (0, Ph.n)(Ph.ab, mm, [Am]), Tm = Tm + (Tm << 1) + (Tm << 4) + (Tm << 7) + (Tm << 8) + (Tm << 24) >>> 0;
        let hm = "";
        for (let Am = 28; Am >= 0; Am -= 4) hm += "0123456789abcdef" [Tm >>> Am & 15];
        return hm
      }(Tm), Oa(mm).frame)
    }
    const qa = (mm, Tm) => mm.includes(Tm),
      ja = mm => {
        try {
          return mm()
        } catch {
          return !1
        }
      },
      Va = -1,
      Ia = mm => {
        try {
          return mm()
        } catch {
          return Va
        }
      };

    function Ka(mm, Tm) {
      return {
        probe: (fm, hm, Am) => {
          try {
            return ((fm, hm, Am) => {
              switch (fm) {
                case MT.jc.StackCheck:
                  return Tm.stackCheck() ? 1 : 0;
                case MT.jc.ConfirmMesh:
                  return Tm.confirmMesh();
                case MT.jc.IndexPassReplaced:
                  return Tm.indexPassReplaced() ? 1 : 0;
                case MT.jc.ProductSubChanged:
                  return Tm.productSubChanged() ? 1 : 0;
                case MT.jc.RenderStatus:
                  return Tm.fR();
                case MT.jc.Held:
                  return Tm.ni();
                case MT.jc.PlayerKilledSubs:
                  return Tm.playerKilledSubs();
                case MT.hb: {
                  const fm = Tm.getComplete();
                  return null === fm ? 0 : (0, Ph.n)(Ph.v, Ph.eb, [fm, new Ph.c((0, Ph.G)(mm()), hm, Am)]).written
                }
                default:
                  return 0
              }
            })(fm, hm, Am)
          } catch {
            return MT.fc
          }
        }
      }
    }
    class Qa {
      constructor(mm) {
        this.write = mm, this.flagsWritten = 0, this.written = (0, Ph.o)(null)
      }
      DE(mm) {
        let {
          flags: Tm,
          values: fm
        } = mm;
        for (let hm = 0; hm < fm.length; hm++) this.value(fm[hm][0], fm[hm][1]);
        this.setFlags(Tm | MT.e.Ready)
      }
      value(mm, Tm) {
        this.written[mm] !== Tm && this.write(mm, Tm, 0) && (this.written[mm] = Tm)
      }
      setFlags(mm) {
        const Tm = mm & ~this.flagsWritten;
        0 !== Tm && this.write(MT.h.Flags, Tm, Tm) && (this.flagsWritten |= Tm)
      }
      originStackHit() {
        return this.write(MT.h.Flags, MT.e.OriginStackHit, MT.e.OriginStackHit)
      }
    }
    const na = {
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
      Ja = 1e3;
    let ca;
    const za = [1, "length", 0, 229, "b", 29, 2, void 0, null, 3, "s", "cw==", 237, 1e5, "a", "stack", "name", 168, "e", 149, 6, 5, 27, 4, 245, !0, !1, 218, "c", 60, "s=", 109, 181, 24, 1e3, "expire", "=", ";", ";path=", "/", "o", "?", 7, "f", 23, 8, ")", "string", 200, 133, 228, 42, 11, 142, 10, 144, "p", "functi", "on", "n", "protot", "ype", "decode", "I=", "eTR5bm", "u", "q", "t", "r", "B", "Dd", "chEven", "dispat", "now", 79, "confir", "mMesh", "produc", "player", "Killed", "number", 65535, "toString", "get", "d", "v", "k", 187, "g", 162, "None", 222, "En", "h", "tOverw", "ritten", "plete"];

    function Za() {}

    function ka() {
      ka = function() {}
    }
    ca = function(mm) {
      let Tm = arguments[za[1]] > za[0] && arguments[za[0]] !== za[7] ? arguments[za[0]] : (...mm) => (mm[za[1]] = za[2], "WW1Wc1" in Za && function(...mm) {
          ka(mm[za[1]] = za[2], mm[za[3]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", mm[za[4]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + za[41], mm[za[5]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + za[46], mm[za[3]].match(mm[za[4]] + mm[za[5]]))
        }(), za[8]),
        fm = arguments[za[1]] > za[6] && arguments[za[6]] !== za[7] ? arguments[za[6]] : za[8],
        hm = arguments[za[1]] > za[9] && arguments[za[9]] !== za[7] ? arguments[za[9]] : "";
      const Am = window,
        am = (za[2], Ph[za[10]])("RXJyb3" + za[63]),
        xm = (za[2], Ph[za[10]])("c3RhY2" + za[30]),
        wm = (za[2], Ph[za[10]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        im = (za[2], Ph[za[10]])("c3RhY2tUcmFjZUxpbWl0"),
        Rm = (za[2], Ph[za[10]])("bmF0aXZl"),
        pm = [(za[2], Ph[za[10]])("bWFpbi5qcw=="), (za[2], Ph[za[10]])("aW5kZXguanM="), (za[2], Ph[za[10]])("dXNlcnNjcmlwdA=="), (za[2], Ph[za[10]])("Y29udGVudC5q" + za[11]), (za[2], Ph[za[10]])("b3B0aW9ucy5q" + za[11]), (za[2], Ph[za[10]])("cG9wdXAuanM="), (za[2], Ph[za[10]])("LnVzZXIuanM="), (za[2], Ph[za[10]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Em = (...mm) => {
          mm[za[1]] = za[0], "VmrPsn" in Za && function(...mm) {
            mm[za[1]] = za[2]
          }();
          const Tm = Am[am],
            fm = Tm;
          if (fm[im] < za[13]) {
            function Ym(...mm) {
              ka(mm[za[1]] = za[2], mm[-za[12]] = function(mm) {
                var Tm, fm, hm, Am, am = mm.length;
                for (ka(Tm = [], fm = za[2]), hm = za[2]; hm < am; hm++) Tm.push(hm !== za[2] && mm[hm] > mm[hm - za[0]] ? Tm[hm - za[0]] + za[0] : za[0]);
                for (Am = am - za[0]; Am >= za[2]; Am--) Am !== am - za[0] && mm[Am] > mm[Am + za[0]] && (Tm[Am] = Math.max(Tm[Am], Tm[Am + za[0]] + za[0])), fm += Tm[Am];
                return fm
              }, console.log(mm[-za[12]]))
            }
            "wZ50Mm" in Za && Ym(), fm[im] = za[13]
          }
          const hm = "string" === typeof(Em = (new Tm)[xm]) ? Em : `${Em}`,
            Dm = {},
            Rm = fm[wm];
          var Em;
          typeof Rm === za[57] + za[58] && (za[2], Ph[za[59]])(Rm, Tm, [Dm]);
          const om = Dm[xm],
            Om = mm[za[2]] ? pm[za[1]] : pm[za[1]] - za[0];
          for (let qm = za[2]; qm < Om; qm++) {
            function jm(...mm) {
              mm[za[1]] = za[2]
            }
            if ("F56L6Y" in Za && jm(), qa(hm, pm[qm])) {
              function Vm(...mm) {
                mm[za[1]] = za[2]
              }
              return "MXQPxIz" in Za && Vm(), {
                [za[15]]: hm,
                [za[16]]: pm[qm]
              }
            }
            if (typeof om === za[47] && qa(om, pm[qm])) {
              function Im(...mm) {
                mm[za[1]] = za[2];
                const Tm = require("big-integer");
                ka(mm[za[4]] = class {
                  static randomPrime(...mm) {
                    mm[za[1]] = za[0];
                    const fm = Tm.one.shiftLeft(mm[za[2]] - za[0]),
                      hm = Tm.one.shiftLeft(mm[za[2]]).prev();
                    for (; za[25];) {
                      let mm = Tm.randBetween(fm, hm);
                      if (mm.isProbablePrime(256)) return mm
                    }
                  }
                  static generate(...mm) {
                    mm[za[1]] = za[0];
                    const fm = Tm(65537);
                    let hm, Am;
                    mm[za[0]] = za[7];
                    do {
                      ka(hm = this.randomPrime(mm[za[2]] / za[6]), Am = this.randomPrime(mm[za[2]] / za[6]), mm[za[0]] = Tm.lcm(hm.prev(), Am.prev()))
                    } while (Tm.gcd(fm, mm[za[0]]).notEquals(za[0]) || hm.minus(Am).abs().shiftRight(mm[za[2]] / za[6] - 100).isZero());
                    return {
                      e: fm,
                      n: hm.multiply(Am),
                      d: fm.modInv(mm[za[0]])
                    }
                  }
                  static encrypt(...mm) {
                    return mm[za[1]] = za[9], Tm(mm[za[2]]).modPow(mm[za[6]], mm[za[0]])
                  }
                  static decrypt(...mm) {
                    return mm[za[1]] = za[9], Tm(mm[za[2]]).modPow(mm[za[0]], mm[za[6]])
                  }
                  static encode(...mm) {
                    mm[za[1]] = za[0];
                    const fm = mm[za[2]].split("").map((mm => mm.charCodeAt())).join("");
                    return Tm(fm)
                  }
                  static decode(...mm) {
                    mm[za[1]] = za[0];
                    const Tm = mm[za[2]].toString();
                    mm[za[14]] = "";
                    for (let fm = za[2]; fm < Tm.length; fm += za[6]) {
                      let hm = Number(Tm.substr(fm, za[6]));
                      hm <= 30 ? (mm[za[14]] += String.fromCharCode(Number(Tm.substr(fm, za[9]))), fm++) : mm[za[14]] += String.fromCharCode(hm)
                    }
                    return mm[za[14]]
                  }
                }, module.exports = mm[za[4]])
              }
              return "ne8EE8D" in Za && Im(), {
                [za[15]]: om,
                [za[16]]: pm[qm]
              }
            }
          }
          return za[8]
        },
        om = (...mm) => (mm[za[1]] = za[0], "L0FnluN" in Za && function(...mm) {
          ka(mm[za[1]] = za[2], mm[za[4]] = function(...mm) {
            for (ka(mm[za[1]] = za[0], mm[za[14]] = mm[za[2]].length, mm[za[4]] = [], mm[za[9]] = za[2]), mm[za[17]] = za[2]; mm[za[17]] < mm[za[14]]; mm[za[17]]++) mm[za[4]].push(mm[za[17]] !== za[2] && mm[za[2]][mm[za[17]]] > mm[za[2]][mm[za[17]] - za[0]] ? mm[za[4]][mm[za[17]] - za[0]] + za[0] : za[0]);
            for (mm[za[18]] = mm[za[14]] - za[0]; mm[za[18]] >= za[2]; mm[za[18]]--) mm[za[18]] !== mm[za[14]] - za[0] && mm[za[2]][mm[za[18]]] > mm[za[2]][mm[za[18]] + za[0]] && (mm[za[4]][mm[za[18]]] = Math.max(mm[za[4]][mm[za[18]]], mm[za[4]][mm[za[18]] + za[0]] + za[0])), mm[za[9]] += mm[za[4]][mm[za[18]]];
            return mm[za[9]]
          }, console.log(mm[za[4]]))
        }(), Em(mm[za[2]]) !== za[8]);
      let Om = za[8],
        Ym = za[8],
        qm = za[8],
        jm = za[8];
      const Vm = (...mm) => {
        mm[za[1]] = za[0];
        try {
          function Tm(...mm) {
            ka(mm[za[1]] = za[2], mm[za[24]] = function(...Tm) {
              return ka(Tm[za[1]] = za[6], Tm[za[19]] = [], Tm[za[4]] = Tm[za[2]].length, Tm[za[2]].sort(((mm, Tm) => mm - Tm)), mm[za[0]](Tm[za[19]], [], za[2], Tm[za[4]], Tm[za[2]], Tm[za[0]])), Tm[za[19]]
            }, mm[za[0]] = function(...Tm) {
              if (ka(Tm[za[1]] = za[20], Tm[za[20]] = za[8]), !(Tm[za[21]] < za[2])) {
                if (Tm[za[21]] === za[2]) return Tm[za[2]].push(Tm[za[0]]);
                for (Tm[-za[22]] = Tm[za[6]]; Tm[-za[22]] < Tm[za[9]] && !(Tm[za[23]][Tm[-za[22]]] > Tm[za[21]]); Tm[-za[22]]++) Tm[-za[22]] > Tm[za[6]] && Tm[za[23]][Tm[-za[22]]] === Tm[za[23]][Tm[-za[22]] - za[0]] || ka(Tm[za[20]] = Array.from(Tm[za[0]]), Tm[za[20]].push(Tm[za[23]][Tm[-za[22]]]), mm[za[0]](Tm[za[2]], Tm[za[20]], Tm[-za[22]] + za[0], Tm[za[9]], Tm[za[23]], Tm[za[21]] - Tm[za[23]][Tm[-za[22]]]))
              }
            }, console.log(mm[za[24]]))
          }
          return "In0NxA" in Za && Tm(), mm[za[2]]()
        } catch {
          return za[25]
        }
      };
      let Im = za[26];
      const Km = (...mm) => {
          if (mm[za[1]] = za[2], "RRKiXE" in Za && function(...mm) {
              ka(mm[za[1]] = za[2], mm[za[14]] = function(...Tm) {
                return Tm[za[1]] = za[6], mm[-za[27]]({}, Tm[za[2]], Tm[za[0]])
              }, mm[-za[27]] = function(...Tm) {
                if (ka(Tm[za[1]] = za[9], Tm[za[9]] = {}), Tm[za[2]][Tm[za[0]] + Tm[za[6]]] !== za[7]) return Tm[za[2]][Tm[za[0]] + Tm[za[6]]];
                if (Tm[za[0]] === Tm[za[6]]) return za[25];
                for (Tm[za[23]] = za[2]; Tm[za[23]] < Tm[za[0]].length; Tm[za[23]]++) Tm[za[9]][Tm[za[0]][Tm[za[23]]]] === za[7] && (Tm[za[9]][Tm[za[0]][Tm[za[23]]]] = za[2]), Tm[za[9]][Tm[za[6]][Tm[za[23]]]] === za[7] && (Tm[za[9]][Tm[za[6]][Tm[za[23]]]] = za[2]), ka(Tm[za[9]][Tm[za[0]][Tm[za[23]]]]++, Tm[za[9]][Tm[za[6]][Tm[za[23]]]]--);
                for (Tm[za[28]] in Tm[za[9]])
                  if (Tm[za[9]][Tm[za[28]]] !== za[2]) return Tm[za[2]][Tm[za[0]] + Tm[za[6]]] = za[26], za[26];
                for (Tm[za[20]] = za[0]; Tm[za[20]] < Tm[za[0]].length; Tm[za[20]]++)
                  if (mm[-za[27]](Tm[za[2]], Tm[za[0]].substr(za[2], Tm[za[20]]), Tm[za[6]].substr(za[2], Tm[za[20]])) && mm[-za[27]](Tm[za[2]], Tm[za[0]].substr(Tm[za[20]]), Tm[za[6]].substr(Tm[za[20]])) || mm[-za[27]](Tm[za[2]], Tm[za[0]].substr(za[2], Tm[za[20]]), Tm[za[6]].substr(Tm[za[6]].length - Tm[za[20]])) && mm[-za[27]](Tm[za[2]], Tm[za[0]].substr(Tm[za[20]]), Tm[za[6]].substr(za[2], Tm[za[6]].length - Tm[za[20]]))) return Tm[za[2]][Tm[za[0]] + Tm[za[6]]] = za[25], za[25];
                return Tm[za[2]][Tm[za[0]] + Tm[za[6]]] = za[26], za[26]
              }, console.log(mm[za[14]]))
            }(), !Im && (za[2], Ph[za[65]])()) {
            function Tm(...mm) {
              var Tm;
              ka(mm[za[1]] = za[2], Tm = function(...mm) {
                ka(mm[za[1]] = za[0], this.yp = mm[za[2]], this.length = za[2], this.map = {}, this.head = za[8], this.tail = za[8])
              }, Tm.prototype.get = function(...mm) {
                var Tm;
                return ka(mm[za[1]] = za[0], Tm = this.map[mm[za[2]]]), Tm ? (this.remove(Tm), this.insert(Tm.key, Tm.val), Tm.val) : -za[0]
              }, Tm.prototype.put = function(...mm) {
                ka(mm[za[1]] = za[6], this.map[mm[za[2]]] ? (this.remove(this.map[mm[za[2]]]), this.insert(mm[za[2]], mm[za[0]])) : this.length === this.yp ? (this.remove(this.head), this.insert(mm[za[2]], mm[za[0]])) : (this.insert(mm[za[2]], mm[za[0]]), this.length++))
              }, Tm.prototype.remove = function(...mm) {
                ka(mm[za[1]] = za[0], mm[za[14]] = mm[za[2]].prev, mm[za[6]] = mm[za[2]].next), mm[za[6]] && (mm[za[6]].prev = mm[za[14]]), mm[za[14]] && (mm[za[14]].next = mm[za[6]]), this.head === mm[za[2]] && (this.head = mm[za[6]]), this.tail === mm[za[2]] && (this.tail = mm[za[14]]), delete this.map[mm[za[2]].key]
              }, Tm.prototype.insert = function(...mm) {
                ka(mm[za[1]] = za[6], mm[za[14]] = new List(mm[za[2]], mm[za[0]]), this.tail ? (this.tail.next = mm[za[14]], mm[za[14]].prev = this.tail, this.tail = mm[za[14]]) : (this.tail = mm[za[14]], this.head = mm[za[14]]), this.map[mm[za[2]]] = mm[za[14]])
              }, console.log(Tm))
            }
            "uEukMe" in Za && Tm(), Im = za[25]
          }
        },
        Qm = (...mm) => {
          mm[za[1]] = za[0];
          try {
            return mm[za[2]]()
          } catch {
            function Tm(...mm) {
              mm[za[1]] = za[2]
            }
            return "A0_N8q" in Za && Tm(), za[7]
          }
        },
        nm = (...mm) => {
          mm[za[1]] = za[0], "dkQNwhT" in Za && function(...mm) {
            mm[za[1]] = za[2]
          }();
          try {
            function Tm(...mm) {
              ka(mm[za[1]] = za[2], mm[za[4]] = function(...Tm) {
                return Tm[za[1]] = za[6], mm[-za[31]]({}, Tm[za[2]], Tm[za[0]])
              }, mm[-za[31]] = function(...Tm) {
                if (ka(Tm[za[1]] = za[9], Tm[za[9]] = {}), Tm[za[2]][Tm[za[0]] + Tm[za[6]]] !== za[7]) return Tm[za[2]][Tm[za[0]] + Tm[za[6]]];
                if (Tm[za[0]] === Tm[za[6]]) return za[25];
                for (Tm[za[4]] = za[2]; Tm[za[4]] < Tm[za[0]].length; Tm[za[4]]++) Tm[za[9]][Tm[za[0]][Tm[za[4]]]] === za[7] && (Tm[za[9]][Tm[za[0]][Tm[za[4]]]] = za[2]), Tm[za[9]][Tm[za[6]][Tm[za[4]]]] === za[7] && (Tm[za[9]][Tm[za[6]][Tm[za[4]]]] = za[2]), ka(Tm[za[9]][Tm[za[0]][Tm[za[4]]]]++, Tm[za[9]][Tm[za[6]][Tm[za[4]]]]--);
                for (Tm[za[21]] in Tm[za[9]])
                  if (Tm[za[9]][Tm[za[21]]] !== za[2]) return Tm[za[2]][Tm[za[0]] + Tm[za[6]]] = za[26], za[26];
                for (Tm[za[32]] = za[0]; Tm[za[32]] < Tm[za[0]].length; Tm[za[32]]++)
                  if (mm[-za[31]](Tm[za[2]], Tm[za[0]].substr(za[2], Tm[za[32]]), Tm[za[6]].substr(za[2], Tm[za[32]])) && mm[-za[31]](Tm[za[2]], Tm[za[0]].substr(Tm[za[32]]), Tm[za[6]].substr(Tm[za[32]])) || mm[-za[31]](Tm[za[2]], Tm[za[0]].substr(za[2], Tm[za[32]]), Tm[za[6]].substr(Tm[za[6]].length - Tm[za[32]])) && mm[-za[31]](Tm[za[2]], Tm[za[0]].substr(Tm[za[32]]), Tm[za[6]].substr(za[2], Tm[za[6]].length - Tm[za[32]]))) return Tm[za[2]][Tm[za[0]] + Tm[za[6]]] = za[25], za[25];
                return Tm[za[2]][Tm[za[0]] + Tm[za[6]]] = za[26], za[26]
              }, console.log(mm[za[4]]))
            }
            return "fSlHFI" in Za && Tm(), mm[za[2]](), za[25]
          } catch {
            function fm(...mm) {
              mm[za[1]] = za[2]
            }
            return "ucUfgp" in Za && fm(), za[26]
          }
        },
        Jm = (za[2], Ph[za[10]])("a29qbzYzb25i"),
        cm = (za[2], Ph[za[40]])(za[8]);
      let zm = za[8],
        Zm = za[26],
        km = za[26];
      const bm = (za[2], Ph[za[40]])(za[8]);
      let Sm = za[2];
      const em = (za[2], Ph[za[40]])(za[8]);
      let Nm = za[2];
      const Gm = (za[2], Ph[za[40]])(za[8]);
      let Xm = za[26],
        Pm = za[26];
      const Hm = (...Tm) => {
          if (Tm[za[1]] = za[6], Tm[za[2]] === mm) {
            function Am(...mm) {
              mm[za[1]] = za[2]
            }
            if ("kFE2PP" in Za && Am(), zm === za[8]) {
              function am(...mm) {
                mm[za[1]] = za[2]
              }
              "wjc_YoY" in Za && am(), zm = typeof Tm[za[0]] === za[80] ? Tm[za[0]] : -za[0]
            } else {
              function xm() {
                var mm;
                ka(mm = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + za[41], "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", "(c=ak(<~F$VU'9f)~><&85dBPL-module/from".match(mm + "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)"))
              }
              "sxqzeG" in Za && xm(), Zm = za[25]
            }
            return
          }
          const fm = cm[Tm[za[2]]];
          if (!Tm[za[0]]) {
            function wm(...mm) {
              ka(mm[za[1]] = za[2], mm[za[14]] = function(...mm) {
                for (ka(mm[za[1]] = za[0], mm[za[14]] = za[2], mm[za[6]] = {}, mm[za[28]] = za[2], mm[za[44]] = za[2], mm[za[21]] = za[2], mm[za[43]] = mm[za[2]].length), mm[za[42]] = za[2]; mm[za[42]] < mm[za[43]]; mm[za[42]]++) {
                  for (ka(mm[za[6]] = {}, mm[za[28]] = za[2], mm[za[44]] = za[0]), mm[za[45]] = mm[za[42]] + za[0]; mm[za[45]] < mm[za[43]]; mm[za[45]]++) mm[za[2]][mm[za[42]]].x !== mm[za[2]][mm[za[45]]].x || mm[za[2]][mm[za[42]]].y !== mm[za[2]][mm[za[45]]].y ? (mm[za[2]][mm[za[42]]].y === mm[za[2]][mm[za[45]]].y ? mm[za[21]] = Number.MAX_SAFE_INTEGER : mm[za[21]] = (mm[za[2]][mm[za[42]]].x - mm[za[2]][mm[za[45]]].x) / (mm[za[2]][mm[za[42]]].y - mm[za[2]][mm[za[45]]].y), mm[za[6]][mm[za[21]]] || (mm[za[6]][mm[za[21]]] = za[2]), ka(mm[za[6]][mm[za[21]]]++, mm[za[28]] = Math.max(mm[za[28]], mm[za[6]][mm[za[21]]]))) : mm[za[44]]++;
                  ka(mm[za[28]] += mm[za[44]], mm[za[14]] = Math.max(mm[za[14]], mm[za[28]]))
                }
                return mm[za[14]]
              }, console.log(mm[za[14]]))
            }
            if ("kqvLU5" + za[40] in Za && wm(), fm) {
              "n79hWy" in Za && (module.exports = async (mm = () => {
                throw new Error("No redacted path provided")
              }) => {
                const Tm = new Set(process.argv.slice(za[6]));
                if (!Tm.has("--version")) {
                  if (Tm.size !== za[0]) return za[26];
                  if (!Tm.has("-v")) return za[26]
                }
                return await (async () => void 0 === await mm() ? " (local)" : "")(), za[25]
              }), km = za[25]
            }
            return
          }
          if (Tm[za[2]] !== Jm) return void(cm[Tm[za[2]]] = Tm[za[0]]);
          cm[Tm[za[2]]] = za[25];
          const hm = typeof Tm[za[0]] === za[47] ? Tm[za[0]] : "" + Tm[za[0]];
          if (!Gm[hm])
            if ((za[2], Ta[za[66]])(hm)) Pm = za[25];
            else if ((za[2], Ta[za[10]])(hm))
            if (Sm < 8) {
              function Dm(...mm) {
                ka(mm[za[1]] = za[2], mm[za[55]] = function(...mm) {
                  if (ka(mm[za[1]] = za[0], mm[za[48]] = mm[za[2]].length), mm[za[48]] < za[6]) return za[2];
                  if (ka(mm[za[4]] = Math.max(...mm[za[2]]), mm[za[9]] = Math.min(...mm[za[2]])), mm[za[4]] === mm[za[9]]) return za[2];
                  for (ka(mm[-za[22]] = Array(mm[za[48]] - za[0]).fill(Number.MAX_SAFE_INTEGER), mm[-za[51]] = Array(mm[za[48]] - za[0]).fill(Number.MIN_SAFE_INTEGER), mm[za[50]] = Math.ceil((mm[za[4]] - mm[za[9]]) / (mm[za[48]] - za[0])), mm[-za[49]] = za[2]), mm[za[45]] = za[2]; mm[za[45]] < mm[za[48]]; mm[za[45]]++) mm[za[2]][mm[za[45]]] !== mm[za[9]] && mm[za[2]][mm[za[45]]] !== mm[za[4]] && ka(mm[-za[49]] = Math.floor((mm[za[2]][mm[za[45]]] - mm[za[9]]) / mm[za[50]]), mm[-za[22]][mm[-za[49]]] = Math.min(mm[-za[22]][mm[-za[49]]], mm[za[2]][mm[za[45]]]), mm[-za[51]][mm[-za[49]]] = Math.max(mm[-za[51]][mm[-za[49]]], mm[za[2]][mm[za[45]]]));
                  for (ka(mm[za[53]] = Number.MIN_SAFE_INTEGER, mm[za[54]] = mm[za[9]]), mm[za[52]] = za[2]; mm[za[52]] < mm[za[48]] - za[0]; mm[za[52]]++) mm[-za[22]][mm[za[52]]] === Number.MAX_SAFE_INTEGER && mm[-za[51]][mm[za[52]]] === Number.MIN_SAFE_INTEGER || ka(mm[za[53]] = Math.max(mm[za[53]], mm[-za[22]][mm[za[52]]] - mm[za[54]]), mm[za[54]] = mm[-za[51]][mm[za[52]]]);
                  return mm[za[53]] = Math.max(mm[za[53]], mm[za[4]] - mm[za[54]]), mm[za[53]]
                }, console.log(mm[za[55]]))
              }
              "RGY0yo" in Za && Dm(), ka(Gm[hm] = za[25], bm[Sm++] = hm, Xm ||= (za[2], Ta[za[56]])(hm))
            } else !Xm && (za[2], Ta[za[56]])(hm) && ka(Gm[hm] = za[25], bm[8 - za[0]] = hm, Xm = za[25]);
          else Nm < 4 && ka(Gm[hm] = za[25], em[Nm++] = hm)
        },
        ym = (za[2], fa.i)(mm),
        Cm = ym ? ym.replaced : (() => {
          try {
            return Am[mm]
          } catch {
            return za[7]
          }
        })();
      if (nm((() => {
          Am[mm] = Hm
        })), typeof Cm === za[57] + za[58]) {
        const mm = Cm;
        nm((() => {
          mm(Hm)
        }))
      }
      if (ym) {
        const Tm = ym.reports;
        nm((() => {
          for (const fm in Tm)(za[2], Ph[za[59]])(Ph[za[69]], Tm, [fm]) && fm !== mm && Hm(fm, Tm[fm])
        }))
      }
      const rm = ym ? za[6] : za[0];
      let sm = za[26];
      const lm = (...Tm) => (Tm[za[1]] = za[2], Zm ? za[25] : (ka(Tm[za[14]] = za[26], sm = !nm((() => {
          Tm[za[14]] = Am[mm] !== Hm
        }))), Tm[za[14]])),
        Mm = Vm(((...Tm) => {
          Tm[za[1]] = za[2];
          const fm = (za[2], Ph.K)(Am, mm);
          return (fm === za[8] || fm === void za[2] ? void za[2] : fm.configurable) !== za[26] || typeof fm[za[83]] !== za[57] + za[58] || zm !== rm
        })),
        um = {},
        Bm = () => {
          try {
            return navigator[za[77] + "tSub"]
          } catch {
            return um
          }
        },
        Lm = Bm(),
        tm = fm,
        Um = tm === za[8] ? ((...mm) => {
          mm[za[1]] = za[2];
          const Tm = za[29];
          ka(mm[za[14]] = za[26], mm[za[4]] = Tm - za[0]);
          const fm = TextDecoder[za[60] + za[61]][za[62]],
            hm = function() {
              mm[za[4]]++, mm[za[4]] === Tm && (ja((() => om(za[26]))) && (mm[za[14]] = za[25]), mm[za[4]] = za[2]);
              for (var hm = arguments[za[1]], Am = new Array(hm), am = za[2]; am < hm; am++) Am[am] = arguments[am];
              return (za[2], Ph[za[59]])(fm, this, Am)
            };
          return nm((() => {
            TextDecoder[za[60] + za[61]][za[62]] = hm
          })), () => mm[za[14]] ? za[6] : Ia((() => TextDecoder[za[60] + za[61]][za[62]] !== hm ? za[20] : za[2]))
        })() : () => Ia((() => tm[za[75] + za[76]]())),
        dm = (za[2], cT[za[93]])(),
        gm = (za[2], Ph[za[40]])(za[8]),
        Wm = (za[2], Ph[za[40]])(za[8]);
      let Fm = za[2],
        mT = za[2],
        TT = za[2];
      const fT = (za[2], Ph[za[40]])(za[8]),
        hT = (za[2], Ph[za[40]])(za[8]);
      let AT = za[8],
        aT = (za[2], Ph[za[40]])(za[8]);
      const xT = (...mm) => {
          ka(mm[za[1]] = za[6], gm[Fm] = mm[za[2]], Wm[Fm] = mm[za[0]], Fm++)
        },
        wT = (...mm) => (ka(mm[za[1]] = za[0], mm[za[14]] = za[7]), (mm[za[14]] = (Wm[mm[za[2]]] ? hT : fT)[gm[mm[za[2]]]]) !== za[8] && mm[za[14]] !== void za[2] ? mm[za[14]] : -za[0]),
        DT = (za[2], Ph[za[10]])("d2lvNjQz"),
        iT = (za[2], Ph[za[10]])("amtsa2plZndu"),
        RT = [
          [(za[2], Ph[za[10]])("aW9qZndlODNq"), "2"],
          [(za[2], Ph[za[10]])("a3Bq"), "4"],
          [(za[2], Ph[za[10]])("dXJocmZm"), "5"]
        ],
        ET = [
          [(za[2], Ph[za[10]])(za[64] + za[63]), za[56]],
          [(za[2], Ph[za[10]])(za[64] + "w="), za[40]]
        ],
        oT = (za[2], Ph[za[10]])("eTR5bnM="),
        OT = (za[2], Ph[za[10]])("aHRleWpldA=="),
        YT = (za[2], Ph[za[10]])("c2RmbGpneGxmY2pr"),
        qT = [
          [(za[2], Ph[za[10]])("a3NhZmR1"), za[68]],
          [(za[2], Ph[za[10]])("ZGZnYWFzZGFz"), za[10]],
          [YT, za[67]],
          [(za[2], Ph[za[10]])("bGFzZWRraGFz"), za[65]],
          [(za[2], Ph[za[10]])("cW16ZjhrM24="), za[14]]
        ],
        jT = [
          [oT, za[85]],
          [OT, za[66]],
          [(za[2], Ph[za[10]])("bmI3ZnEy"), za[4]]
        ],
        VT = (za[2], Ph[za[10]])("bGtxM20="),
        IT = (za[2], Ph[za[10]])("bWtxN3" + za[63]),
        KT = ["mk:tw", "mk:jf"],
        QT = ((...mm) => {
          mm[za[1]] = za[2];
          try {
            return mm[za[14]] = za[7], (mm[za[14]] = Am[(za[2], Ph[za[10]])("V2ViU29ja2V0")]) === za[8] || mm[za[14]] === void za[2] ? void za[2] : mm[za[14]][za[60] + za[61]]
          } catch {
            return za[7]
          }
        })(),
        nT = ["send", "close", "addEventListener", "removeEventListener", za[72] + za[71] + za[67]],
        JT = ["onmessage", "onopen", "onclos" + za[18], "onerro" + za[68]];
      let zT = za[26];
      const ZT = (...mm) => {
          mm[za[1]] = za[2];
          const fm = Tm();
          fm === za[8] || zT || (zT = Vm((() => {
            if (QT !== za[7] && (za[2], Ph.M)(fm) !== QT) return za[25];
            for (let mm = za[2]; mm < nT[za[1]]; mm++)
              if ((za[2], Ph[za[59]])(Ph[za[69]], fm, [nT[mm]])) return za[25];
            for (let mm = za[2]; mm < JT[za[1]]; mm++)
              if (fm[JT[mm]] !== za[8] && fm[JT[mm]] !== za[7]) return za[25];
            return za[26]
          })))
        },
        kT = (za[2], Ph[za[10]])("RXZlbnQ=");
      let bT = MT[za[70]][za[90]],
        ST = za[2];
      const eT = () => ST++ === za[21] ? (ST = za[2], om(za[26]) ? MT[za[18]].CheckFuncHit : za[2]) : za[2],
        NT = (za[2], Ph[za[40]])(za[8]),
        GT = hm[za[1]];
      for (let Dm = za[2]; Dm < GT; Dm++) {
        const mm = (za[2], Ph[za[59]])(Ph.ab, hm, [Dm]);
        NT[Dm] = mm >= 99 && mm <= 122 ? mm : za[2]
      }
      const XT = (...mm) => {
          return mm[za[1]] = za[6], typeof mm[za[2]] === za[57] + za[58] && (za[2], Ph[za[59]])(Ph.S, mm[za[0]], [(Tm = mm[za[2]], (0, Ph.n)(Ph.y, Tm, []))]) !== za[8];
          var Tm
        },
        PT = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        HT = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        yT = [
          [na["Dispat" + za[71] + za[67]], () => !XT(EventTarget[za[60] + za[61]][za[72] + za[71] + za[67]], PT)],
          [na.PerformanceNow, () => !XT(performance[za[73]], HT)],
          [na.DateNow, () => !XT(Date[za[73]], HT)]
        ],
        CT = (za[2], Ph[za[40]])(za[8]);
      let rT = za[2];
      const sT = {
        stackCheck: (...mm) => {
          ka(mm[za[1]] = za[2], mm[-za[22]] = za[8]);
          const Tm = ja((() => (mm[-za[22]] = Em(za[25]), mm[-za[22]] !== za[8])));
          var fm, hm;
          return mm[-za[22]] !== za[8] && Om === za[8] && (fm = mm[-za[22]][za[15]], hm = mm[-za[22]][za[16]], Om = (0, Ta.v)(pa(fm, hm))), Tm
        },
        [za[75] + za[76]]: (...mm) => {
          mm[za[1]] = za[2];
          const Tm = Um();
          if (Tm === za[6]) return za[6];
          if (cm[DT]) return za[9];
          const fm = Ia((() => Am[iT] ? za[23] : za[2]));
          return fm !== za[2] ? fm === za[23] ? za[23] : za[2] : Tm === Va ? za[2] : Tm === za[20] ? za[20] : (Km(), hm = Function[za[60] + za[61]], am = za[82], xm = (...mm) => (mm[za[1]] = za[0], mm[za[2]].writable !== za[25]), ja((() => {
            const mm = Object.getOwnPropertyDescriptor(hm, am);
            return void 0 !== mm && xm(mm)
          })) ? za[42] : za[2]);
          var hm, am, xm
        },
        indexPassReplaced: lm,
        [za[77] + "tSubChanged"]: (...mm) => {
          if (mm[za[1]] = za[2], Lm === um || sm) return za[26];
          const Tm = Bm();
          return Tm !== um && Tm !== Lm
        },
        ni: (...mm) => {
          ka(mm[za[1]] = za[2], mm[-za[74]] = GT);
          for (let Tm = za[2]; Tm < yT[za[1]] + rT; Tm++) {
            const fm = Tm < yT[za[1]] ? yT[Tm] : CT[Tm - yT[za[1]]];
            fm[za[2]] < mm[-za[74]] && Vm(fm[za[0]]) && (mm[-za[74]] = fm[za[2]])
          }
          return mm[-za[74]] < GT ? NT[mm[-za[74]]] : za[2]
        },
        fR: () => dm ? cT[za[86]] : za[45],
        [za[78] + za[79] + "Subs"]: (...mm) => {
          mm[za[1]] = za[2];
          const Tm = Dm.j.hV[za[78] + za[79]];
          return typeof Tm === za[80] && Tm > za[2] ? Tm > za[81] ? za[81] : Tm : za[2]
        },
        ["getCom" + za[96]]: (...mm) => {
          ka(mm[za[1]] = za[2], mm[za[89]] = za[7], Fm = za[2]);
          for (let fm = za[2]; fm < Sm; fm++) xT(bm[fm], za[25]);
          for (let fm = za[2]; fm < RT[za[1]]; fm++) cm[RT[fm][za[2]]] && xT(RT[fm][za[0]], za[25]);
          const Tm = Ia((() => qa(atob[za[82]](), Rm) ? za[2] : za[0]));
          Tm === za[0] && xT(za[88], za[25]), Km();
          const hm = Tm === Va ? Va : Ia(((...mm) => {
            mm[za[1]] = za[2];
            const Tm = Object.getOwnPropertyDescriptor(window, "atob");
            return Tm === za[7] ? Va : Tm[za[83]] !== za[7] ? za[0] : za[2]
          }));
          hm === za[0] && xT(za[43], za[25]);
          const Am = hm === Va;
          for (let fm = za[2]; fm < ET[za[1]] && !Am; fm++) cm[ET[fm][za[2]]] && xT(ET[fm][za[0]], za[25]);
          const am = Fm > Sm;
          mm[za[84]] = za[8], Sm === za[2] && (Nm > za[2] ? mm[za[84]] = em[za[2]] : Pm ? mm[za[84]] = "fp" : am || (mm[za[84]] = cm[oT] ? za[85] : cm[OT] ? za[66] : za[8]));
          for (let fm = za[2]; fm < qT[za[1]] && !Am; fm++) cm[qT[fm][za[2]]] && xT(qT[fm][za[0]], za[25]);
          const xm = Fm,
            wm = (za[2], aa[za[4]])(),
            Dm = wm !== za[8] && (za[2], pT[za[56]])(wm);
          Dm && !Am && xT(wm, za[26]), Mm && xT("ix", za[26]), km && xT("il", za[26]);
          for (let fm = za[2]; fm < Nm; fm++) xT(em[fm], za[25]);
          for (let fm = za[2]; fm < jT[za[1]]; fm++) cm[jT[fm][za[2]]] && xT(jT[fm][za[0]], za[25]);
          cm[VT] && xT("mk:lk", za[25]);
          const im = ((...mm) => {
            mm[za[1]] = za[0];
            for (let Tm = za[2]; Tm < KT[za[1]]; Tm++)
              if (mm[za[2]] === KT[Tm]) return KT[Tm];
            return za[8]
          })(cm[IT]);
          if (im !== za[8] && xT(im, za[25]), fm !== za[8] && Qm(fm.emitReplaced) === za[25] && xT("mk:em", za[25]), zT && xT("3s", za[26]), Ph.U && xT("3b", za[26]), Km(), Im && xT("3d", za[26]), Am && xT("3g", za[26]), wm === za[8] || Dm || xT(wm, za[26]), Om !== za[8] && xT(Om, za[26]), jm === za[8] && fm !== za[8]) {
            const mm = Qm(fm[za[75] + "mMeshHitStac" + za[86]]);
            typeof mm === za[47] && (jm = function(mm, Tm, fm) {
              let hm = 0;
              for (; hm < fm && -1 === Da(mm, Tm[hm]);) hm++;
              return (0, Ta.l)(pa(mm, hm < fm ? Tm[hm] : null))
            }(mm, pm, pm[za[1]] - za[0]))
          }
          var Em;
          if (jm !== za[8] && xT(jm, za[26]), Ym === za[8] && cT[za[84]] !== za[8] && ka((Em = cT[za[84]], Ym = (0, Ta.k)(Oa(Em).reader)), qm = Ya(cT[za[84]], Qm((() => cT[za[4]] === za[8] ? za[8] : (za[2], Ph.bb)(cT[za[4]]))))), Ym !== za[8] && xT(Ym, za[26]), qm !== za[8] && xT(qm, za[26]), Fm === za[2]) return za[8];
          if (mm[za[84]] === za[8] && Wm[za[2]] && !(za[2], Ta[za[56]])(gm[za[2]]))
            for (let fm = za[0]; fm < xm; fm++)
              if (Wm[fm] && (za[2], Ta[za[56]])(gm[fm])) {
                const mm = gm[fm];
                for (let Tm = fm; Tm > za[2]; Tm--) ka(gm[Tm] = gm[Tm - za[0]], Wm[Tm] = Wm[Tm - za[0]]);
                ka(gm[za[2]] = mm, Wm[za[2]] = za[25]);
                break
              } if (ka(mm[za[6]] = za[2], mm[za[87]] = mm[za[84]] === za[8] ? za[2] : xm), mm[za[87]] > za[2] && wm !== za[8] && Dm && !Am) {
            for (let Tm = mm[za[87]]; Tm > za[2]; Tm--) ka(gm[Tm] = gm[Tm - za[0]], Wm[Tm] = Wm[Tm - za[0]]);
            ka(gm[za[2]] = wm, Wm[za[2]] = za[26], mm[za[6]] = za[0], mm[za[87]]++)
          }
          if (mm[za[88]] = za[2], mT++ % za[6] === za[0])
            for (let fm = za[0]; fm < Fm; fm++) wT(fm) < wT(mm[za[88]]) && (mm[za[88]] = fm);
          const om = gm[mm[za[88]]];
          (Wm[mm[za[88]]] ? hT : fT)[om] = TT++;
          const Vm = mm[za[88]] >= mm[za[6]] && mm[za[88]] < mm[za[87]];
          if (!Wm[mm[za[88]]] || om === mm[za[84]] || mm[za[88]] === za[2] && !Vm) return om === za[67] ? (za[2], Ta.y)(cm[YT], Ta[za[84]]) : om;
          const nm = (mm[za[89]] = mm[za[84]]) !== za[8] && mm[za[89]] !== void za[2] ? mm[za[89]] : gm[za[2]];
          return nm !== AT && ka(AT = nm, aT = (za[2], Ph[za[40]])(za[8])), aT[om] ??= (za[2], Ta[za[65]])(om, nm)
        }
      };
      let lT = MT[za[70]][za[90]];
      const uT = () => bT !== MT[za[70]][za[90]] ? bT : lT;
      let BT = za[2],
        LT = za[6],
        vT = za[2],
        tT = za[2];
      return {
        checks: sT,
        checkEvent: (...mm) => {
          mm[za[1]] = za[0];
          try {
            const Tm = Am[kT];
            if (typeof Tm === za[57] + za[58] && !(mm[za[2]] instanceof Tm) && !(za[2], Ph.F)(mm[za[2]])) return bT = MT[za[70]].NotEvent, za[2];
            if (mm[za[2]].isTrusted === za[26]) return za[2];
            let fm = za[2];
            for (const hm in mm[za[2]]) fm++;
            return fm < za[54] ? (bT = MT[za[70]]["FewPropertie" + za[10]], za[2]) : eT()
          } catch {}
          return za[2]
        },
        checkPadCall: () => {
          try {
            return eT()
          } catch {
            return za[2]
          }
        },
        usedProp: uT,
        watchHeld: (...mm) => {
          ka(mm[za[1]] = za[6], mm[za[14]] = za[7]);
          const Tm = nm((() => {
            mm[za[14]] = mm[za[0]]()
          }));
          CT[rT++] = [mm[za[2]], () => !Tm || mm[za[0]]() !== mm[za[14]]]
        },
        DE: (...mm) => {
          mm[za[1]] = za[2];
          const Tm = lm();
          return ((...mm) => {
            if (ka(mm[za[1]] = za[0], mm[za[91]] = za[7], mm[za[4]] = za[7]), fm !== za[8]) {
              const Tm = Qm(fm.tR),
                hm = "v3" === Tm ? za[9] : "v5" === Tm ? za[21] : "v6" === Tm ? za[20] : za[6];
              hm !== za[6] && (LT = hm);
              const Am = Qm(fm["inbuil" + za[94] + za[95]]);
              typeof Am === za[80] && Am >= za[2] && Am <= za[52] && (Am | za[2]) === Am && (vT = Am), ka(mm[za[91]] = Qm(fm.reflectApplyHit), mm[za[4]] = Qm(fm.definerHit))
            }
            const Tm = mm[za[2]] ? 15 : "11" === mm[za[4]] ? za[52] : "13" === mm[za[4]] ? 13 : mm[za[91]] !== za[7] && mm[za[91]] !== za[8] ? za[6] : "10" === mm[za[4]] ? za[54] : "12" === mm[za[4]] ? 12 : za[2];
            Tm !== za[2] && (tT = Tm)
          })(Tm), BT++ % 10 === za[2] && (ZT(), ja((() => !qa(Am[am][za[82]][za[82]](), Rm))) && (lT = lT === MT[za[70]][za[92]] ? MT[za[70]][za[92]] : MT[za[70]].Fr), ja((() => !qa(Am[am][za[82]](), Rm))) && (lT = MT[za[70]][za[92]])), {
            flags: Tm ? MT[za[18]].Butto : za[2],
            values: [
              [MT[za[93]].PhysicsVersion, LT],
              [MT[za[93]]["Inbuil" + za[94] + za[95]], vT],
              [MT[za[93]]["AltCom" + za[96]], tT],
              [MT[za[93]]["ProbeUsedPro" + za[56]], uT()]
            ]
          }
        }
      }
    };
    const ba = "[bloxd-wasm-client]",
      Sa = "bloxdWasmDownloadFailed",
      ea = hf.b,
      Na = "boot",
      Ga = "playSources",
      Xa = "wasmBuild",
      Pa = "bloxd-wasm-joined",
      Ha = "bloxd-wasm-first-view",
      ya = "bloxd-wasm-playable-legacy",
      Ca = 1048576,
      ra = 8 * Ca,
      sa = 1006,
      la = 1e3,
      Ma = "You lost connection to the server.",
      ua = "general:lostConnection",
      Ba = 1048576,
      La = 5e3,
      va = 100,
      ta = [2e3, 1e4, 3e4],
      Ua = 3e4;
    let da = null,
      ga = null,
      Wa = !1,
      Fa = !1,
      mx = !1,
      Tx = null,
      fx = null,
      hx = null,
      Ax = null,
      ax = null,
      xx = null,
      wx = null;
    const Dx = new class {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = mm, this.soundOn = Tm, this.now = fm, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var mm;
        null === (mm = this.player) || void 0 === mm || mm.prepare()
      }
      preload(mm) {
        var Tm;
        this.stopped || (null === (Tm = this.player) || void 0 === Tm || Tm.preload(mm))
      }
      endSession() {
        var mm, Tm;
        null === (mm = this.player) || void 0 === mm || mm.cancelPreload(), null === (Tm = this.player) || void 0 === Tm || Tm.freeSheetsAfterGame()
      }
      load(mm) {
        if (null !== this.player || this.stopped) return;
        this.player = mm, mm.setMaster(this.master, this.soundOn);
        const Tm = this.now(),
          fm = this.local;
        this.local = [];
        for (const Am of fm)
          if (!(Am.stopped || !Am.loop && Tm - Am.at >= 300)) try {
            this.start(Am, mm, Tm)
          } catch (hm) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", hm)
          }
      }
      start(mm, Tm, fm) {
        const {
          name: hm,
          pos: Am,
          ear: am,
          maxHearDist: xm,
          refDistance: wm,
          loop: Dm,
          fade: im
        } = mm, Rm = Tm.playGame(hm, CT(mm, fm), Am, am, xm, wm, Dm);
        if (mm.sound = Rm, 1 !== mm.rate && Rm.rate(mm.rate), null !== mm.panner && Rm.setPannerAttr(mm.panner), null !== mm.moved && Rm.setPosition(mm.moved), null !== im && fm - im.at < im.ms) {
          const Tm = yT(this.master);
          Tm > 0 ? Rm.fade(0, mm.volume * Tm, im.at + im.ms - fm) : Rm.setRelativeVolume(mm.volume)
        }
      }
      onAudioEvent(mm, Tm, fm, hm) {
        var Am, am;
        return null === (Am = null === (am = this.player) || void 0 === am ? void 0 : am.onAudioEvent(mm, Tm, fm, hm)) || void 0 === Am || Am
      }
      applyListener(mm) {
        var Tm;
        null === (Tm = this.player) || void 0 === Tm || Tm.applyListener(mm)
      }
      playGame(mm, Tm, fm, hm, Am, am, xm) {
        if (this.stopped) return HT.b;
        if (this.player) return this.player.playGame(mm, Tm, fm, hm, Am, am, xm);
        const wm = this.now();
        this.local = this.local.filter((mm => !mm.stopped && (mm.loop || wm - mm.at < 300)));
        const Dm = {
          name: mm,
          volume: yT(Tm),
          fade: null,
          pos: fm && [fm[0], fm[1], fm[2]],
          ear: hm && [hm[0], hm[1], hm[2]],
          maxHearDist: Am,
          refDistance: am,
          loop: xm,
          rate: 1,
          panner: null,
          moved: null,
          at: wm,
          stopped: !1,
          sound: null
        };
        this.local.push(Dm);
        const im = {
          stop: () => {
            var mm;
            return Dm.stopped = !0, null === (mm = Dm.sound) || void 0 === mm || mm.stop(), im
          },
          fade: (mm, Tm, fm) => {
            if (Dm.sound) return Dm.sound.fade(mm, Tm, fm), im;
            const hm = yT(this.master),
              Am = yT(hm > 0 ? Tm / hm : Tm > 0 ? Dm.volume : 0),
              am = this.now(),
              xm = CT(Dm, am);
            return Dm.volume = Am, Dm.fade = fm > 0 && xm !== Am ? {
              from: xm,
              at: am,
              ms: fm
            } : null, im
          },
          rate: mm => (Dm.sound ? Dm.sound.rate(mm) : Dm.rate = mm, im),
          getVolume: () => Dm.sound ? Dm.sound.getVolume() : Dm.volume * yT(this.master),
          getRelativeVolume: () => Dm.sound ? Dm.sound.getRelativeVolume() : Dm.volume,
          setRelativeVolume: mm => (Dm.sound ? Dm.sound.setRelativeVolume(mm) : (Dm.volume = yT(mm), Dm.fade = null), im),
          setPannerAttr: mm => (Dm.sound ? Dm.sound.setPannerAttr(mm) : Dm.panner = {
            ...mm
          }, im),
          setPosition: mm => (Dm.sound ? Dm.sound.setPosition(mm) : Dm.moved = [mm[0], mm[1], mm[2]], im)
        };
        return im
      }
      setMaster(mm, Tm) {
        var fm;
        this.master = mm, this.soundOn = Tm, null === (fm = this.player) || void 0 === fm || fm.setMaster(mm, Tm)
      }
      stop() {
        var mm;
        this.stopped = !0, null === (mm = this.player) || void 0 === mm || mm.stopAll();
        for (const Tm of this.local) Tm.stopped = !0;
        this.local = []
      }
    }((0, zT.c)(), !0);
    let ix = {
        wasm: "unknown",
        client: String(hT.d)
      },
      Rx = null,
      px = () => {};
    const Ex = new Promise((mm => {
      px = mm
    }));
    let ox = () => {};
    const Ox = new Promise((mm => {
      ox = mm
    }));
    let Yx, qx = null,
      jx = null,
      Vx = null,
      Ix = null,
      Kx = null,
      Qx = null,
      nx = null,
      Jx = null,
      cx = null,
      zx = null,
      Zx = null,
      kx = null,
      bx = null,
      Sx = null,
      ex = null,
      Nx = null,
      Gx = null,
      Xx = null,
      Px = null,
      Hx = !1,
      yx = null;
    const Cx = new Set,
      rx = new Set;

    function sx(mm) {
      if (!Cx.has(mm)) {
        Cx.add(mm);
        for (const fm of rx) try {
          fm(mm)
        } catch (Tm) {
          console.error(`${ba} a startup listener threw`, Tm)
        }
      }
    }

    function lx(mm) {
      Hx = !0, mm.isStopped || sx("texturesIn")
    }
    let Mx = 1,
      ux = -1 / 0,
      Bx = -1 / 0,
      Lx = -1 / 0,
      vx = !1,
      tx = null,
      Ux = !1,
      dx = !1,
      gx = 0,
      Wx = null,
      Fx = !1;
    const mw = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Tw = 0,
      fw = 0,
      hw = null,
      Aw = null,
      aw = null,
      xw = null;
    const ww = new WeakMap;
    let Dw = null,
      iw = null,
      Rw = !1,
      pw = null,
      Ew = null,
      ow = null,
      Ow = null,
      Yw = null,
      qw = null,
      jw = 0,
      Vw = null,
      Iw = null,
      Kw = null,
      Qw = null,
      nw = -1 / 0,
      Jw = null;
    const zw = new Set;
    let Zw = !1,
      kw = null;
    const bw = new Map,
      Sw = new Set;
    let ew = !1;
    const Nw = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Gw = null,
      Xw = () => [0, 0],
      Pw = () => {},
      Hw = () => {},
      yw = null,
      Cw = null;
    const rw = new class {
      constructor(mm) {
        this.reached = mm, this.next = 1
      }
      observe(mm) {
        if (!(mm < this.next)) {
          for (; this.next <= mm;) this.next *= 2;
          this.reached(mm)
        }
      }
    }((mm => {
      console.warn(`${ba} chunk cancels from the server this session: ${mm}`)
    }));
    let sw = 1,
      lw = null,
      Mw = null,
      uw = null,
      Bw = null,
      Lw = null,
      vw = !1,
      tw = !1,
      Uw = 0,
      dw = null,
      gw = !1,
      Ww = null,
      Fw = null,
      mD = !1;
    const TD = new class {
      constructor(mm) {
        this.gp = mm, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(mm, Tm, fm) {
        (0, ST.b)(mm) && (this.lossPending = !1);
        const hm = fm - this.lastFrameMs;
        this.lastFrameMs = fm, this.lossPending && Tm && (0, ST.f)(mm) ? (null === this.undrawnSinceMs || hm > 1e3) && (this.undrawnSinceMs = fm) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && fm - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(mm) {
        mm !== this.shown && (this.shown = mm, this.gp(mm))
      }
    }((mm => {
      Dm.j.gp(Om.b, mm)
    }));
    let fD = !1,
      hD = !0,
      AD = null,
      aD = !1,
      xD = !1,
      wD = !1;

    function DD() {
      return hx ??= Promise.all([fm.e(198), fm.e(142), fm.e(59)]).then((() => fm(50960))).then((mm => (fx = mm, Object.assign(globalThis, {
        bloxdPreviewPage: mm.pagePreviews()
      }), mm)), (mm => {
        throw hx = null, mm
      })), hx
    }

    function iD() {
      return Tx ??= fm.e(57).then((() => fm(50966))).catch((mm => {
        throw Tx = null, new Jm.d(mm)
      })), Tx
    }
    class RD {
      constructor() {
        this.host = null
      }
      open(mm) {
        return null !== this.host ? mm(this.host) : DD().then((Tm => (this.host ??= new Tm.WasmPreviewHost(Tm.pagePreviews()), mm(this.host))))
      }
      openMob(mm) {
        return this.open((Tm => Tm.openMob(mm)))
      }
      openPet(mm) {
        return this.open((Tm => Tm.openPet(mm)))
      }
      openMobLineup(mm) {
        return this.open((Tm => Tm.openMobLineup(mm)))
      }
      openCharacter(mm, Tm) {
        return this.open((fm => fm.openCharacter(mm, Tm)))
      }
    }

    function pD() {
      mx || (mx = !0, RA.h.setHost(new RD), (0, Sf.j)(), xA.f.setFollower(Yi), Object.assign(globalThis, {
        bloxdPreviews: RA.h
      }))
    }

    function ED() {
      DD().then((mm => {
        mm.pagePreviews().prefetch()
      }), (() => {}))
    }

    function oD() {
      let mm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Fa) return;
      Fa = !0, fD = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), hD = !fD, console.info(`${ba} starting`), Wa || (Wa = !0, (0, Om.A)(new GT(ND, sD)), (0, Em.o)(new XT), (0, Om.y)(new PT), (0, Om.r)()), fD && Dm.j.subscribe("appManagerUpdated|gameState", eD), pD(), (0, zf.setCrashScreen)((mm => {
        let {
          text: Tm,
          reload: fm
        } = mm;
        ! function(mm, Tm) {
          var fm, hm;
          if (aD) return;
          aD = !0, (0, Nf.U)(), null === (fm = Jw) || void 0 === fm || fm.abort(), Jw = null, wA.d.release();
          const Am = fD ? null !== (hm = mm.cancel) && void 0 !== hm ? hm : "general:back" : null;
          kh({
            ...mm,
            cancel: Am
          }).then((mm => {
            mm && Tm && xD ? ((0, OT.x)("reloadOntoJs"), (0, Bm.e)(OT.D)) : mm && Tm ? (0, Bm.h)() : fD && (0, Bm.d)("/")
          }))
        }(Tm, fm)
      })), (0, dh.j)(), (0, cT.h)();
      let Tm = null;
      try {
        Tm = ca("9jkmtzlb1do", (() => {
          var mm, Tm;
          return null !== (mm = null === (Tm = qx) || void 0 === Tm ? void 0 : Tm.ws) && void 0 !== mm ? mm : null
        }), mm, "gyshxeimfd")
      } catch (Am) {
        console.error(`${ba} probes`, Am)
      }
      const hm = function() {
        const mm = (0, Nh.l)(),
          Tm = (0, Nh.g)();
        let fm = !1;
        return hm => {
          mm && !fm && (fm = !0, (0, zf.reportStaleBuildReload)(mm, Tm, hm))
        }
      }();
      ji(), fD || function() {
        const mm = function(mm) {
          var Tm;
          const fm = new URLSearchParams(mm),
            hm = fm.get("game");
          return hm ? {
            game: hm,
            lobby: null !== (Tm = fm.get("lobby")) && void 0 !== Tm ? Tm : null
          } : null
        }(window.location.search);
        if (mm) return (0, AT.k)(mm.game) && ji().request(), void qD(mm.game, mm.lobby);
        const Tm = new URLSearchParams(window.location.search).get("ws");
        if (!Tm) return;
        Ex.then((mm => {
          mm && async function(mm, Tm) {
            try {
              await (0, Jm.j)(mm), pw = LD(new WebSocket(Tm)), null !== pw && wA.d.setGame(null), OD()
            } catch (Am) {
              console.error(`${ba} ?ws=${Tm} did not attach`, Am)
            }
          }(mm, Tm)
        }))
      }(), async function(mm) {
        var Tm, hm, am, xm, wm, im;
        if ("undefined" === typeof WebAssembly) return Di("noWebAssembly", "This browser has no WebAssembly"), null;
        const Rm = await (0, qA.X)();
        if ((0, zf.setCrashBackend)((0, hf.o)(Rm) ? "unsupported" : null !== (Tm = null === Rm || void 0 === Rm ? void 0 : Rm.backend) && void 0 !== Tm ? Tm : "none"), (0, hf.o)(Rm)) return Di("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${Rm.missing.join(", ")}`, {
          missing: Rm.missing.join(",")
        }), null;
        if ((0, MA.o)("render")) try {
          const {
            startRenderDebug: mm
          } = await Promise.all([fm.e(77), fm.e(48)]).then((() => fm(4624)));
          mm(Rm)
        } catch (zT) {
          console.warn("The render debug topic didn't load", zT)
        }
        if ((0, MA.o)("renderlite")) try {
          const {
            startRenderLite: mm
          } = await Promise.all([fm.e(269), fm.e(49)]).then((() => fm(50979)));
          uw = mm(Rm)
        } catch (zT) {
          console.warn("The renderlite debug topic didn't load", zT)
        }
        if ((0, MA.o)("renderprobe")) try {
          const {
            startRenderProbe: mm
          } = await fm.e(50).then((() => fm(50985)));
          mm(Rm)
        } catch (zT) {
          console.warn("The renderprobe debug topic didn't load", zT)
        }
        let pm = null;
        if (null !== Rm && ii()) {
          const mm = (0, bh.g)(Rm);
          null === mm || "webgl" !== Rm.backend && !(0, YT.t)(mm) || (0, qT.l)(mm, zf.reportGpuWasmPopulation), null !== mm && (0, YT.p)(mm), pm = (0, bh.c)(Rm, mm)
        }
        if (null !== Rm && null !== pm) return (0, zf.reportGpuFallback)(pm, Rm.backend), Ri(`the wasm client's renderer plays this GPU (${pm}) on ${Rm.backend} worse than the JS client`, "gpu"), null;
        const Em = null !== (hm = null === Rm || void 0 === Rm ? void 0 : Rm.backend) && void 0 !== hm ? hm : null;
        Nw.adapter = null !== (am = null === Rm || void 0 === Rm ? void 0 : Rm.adapter) && void 0 !== am ? am : null, Nw.boundAtMs = null, Nw.indirectHangs = null, Nw.restoresSkipped = null;
        const om = !(0, hf._)();
        null !== Rm && "none" !== Rm.reason && console.info(`${ba} drawing with ${Rm.backend}: ${Rm.reason}`);
        const Om = (0, qA.K)();
        ox(!0), (0, Jm.u)((mm => {
          try {
            null !== Em && (yw = mm.startSkyFeed, oi(), function(mm) {
              var Tm, fm;
              Xw = mm.rasterText, ow = mm.setTextLocalPlayer, mm.setTextLocalPlayer(null !== (Tm = null === (fm = Ew) || void 0 === fm ? void 0 : fm.info.playerDbId) && void 0 !== Tm ? Tm : null), Pw = mm.drainTextRerasters, Hw = mm.loadTextIcons, mm.warmText((() => vw)), mm.textChanged(), vw && setTimeout(Hw, 0)
            }(mm), Cw = mm.startShellAnalytics, Ji())
          } finally {
            wD || (Bw = mm.followMenuPrefs({
              setSoundPrefs: MD,
              setEnvPrefs: uD,
              setUiPrefs: lD,
              setLookPrefs: BD
            }))
          }
        })), (0, Jm.k)(Dx).catch((mm => {
          console.warn(`${ba} the game code did not load: a join asks again`, mm)
        }));
        const Ym = (0, qA.q)(Rm);
        let qm, jm;
        Ym.catch((() => {})), "loading" === (0, DT.A)() && NA();
        try {
          qm = function(mm) {
            const Tm = null !== mm && void 0 !== mm ? mm : document.createElement("canvas");
            Tm.id = "wasm-game-canvas", (0, JA.g)();
            const fm = (0, NT.e)(),
              hm = (0, NT.h)(fm);
            Tm.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, nA.g)(Tm, hm), (0, NT.c)(Tm, fm), Tm.width = hm.bufferWidth, Tm.height = hm.bufferHeight;
            const Am = document.createElement("div");
            return Am.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", Am.append(Tm), GD(Am, hD), AD = Am, document.body.append(Am), Tm
          }(null === Em ? null : await (await DD()).pagePreviews().beginSession())
        } catch (Am) {
          return await wR({
            site: Xa,
            error: Am
          }, (() => {
            (0, zf.showUnsupported)((0, ch.m)("fetch"), gA.i.fetch, `the previews did not load: ${String(Am)}`)
          })), null
        }
        NA();
        try {
          jm = await Ym
        } catch (Am) {
          return await wR({
            site: Xa,
            error: Am
          }, (() => {
            (0, zf.showUnsupported)((0, ch.m)("fetch"), gA.i.fetch, `the ${null!==Em&&void 0!==Em?Em:"client"} build did not load: ${String(Am)}`)
          })), null
        }
        const Vm = (0, qA.i)(),
          Im = !Vm && !0 !== Pf.k.getItem(Sa),
          Km = !Vm && "loading" === (0, DT.A)();
        await (0, jA.e)(jm, {
          reloadFailedDownload: Im
        }), Km && !(0, DT.U)() && await (0, jA.e)(jm, {
          reloadFailedDownload: Im
        });
        bA = performance.now();
        const Qm = ix;
        if (!(0, DT.U)()) {
          (0, DT.Q)() && Pf.k.setItem(Sa, !0);
          const mm = (0, DT.p)();
          if ("call" === mm) Li({
            site: Af.t,
            error: (0, DT.m)(),
            header: null
          }, Qm);
          else {
            const Tm = null !== mm && void 0 !== mm ? mm : "instantiate",
              fm = () => {
                (0, zf.showUnsupported)((0, ch.m)(Tm), gA.i[Tm], (0, DT.h)())
              };
            if ("compile" !== mm && "instantiate" !== mm || !ii())
              if ("fetch" === Tm) {
                const mm = [jm.url().href, ET.g.url().href];
                await wR({
                  site: Xa,
                  error: (0, DT.h)(),
                  urls: mm
                }, fm)
              } else fm();
            else {
              const Tm = (0, DT.h)(),
                fm = (0, LT.b)((0, DT.m)());
              (0, zf.reportCountedLoadFallback)((0, ch.m)(mm), gA.i[mm], Tm, fm), Ri(`the wasm client did not ${mm} here (${Tm})`, fm ? "oom" : null)
            }
          }
          return null
        }(0, iT.R)(jm.url()) && (0, zf.reportUnstreamedCoreLoad)();
        const cm = (0, DT.D)();
        let zm, Zm = Qm;
        try {
          Zm = {
            ...Qm,
            wasm: cm.Xp()
          };
          const {
            rq: mm
          } = jm.bindings, Tm = mm.Wfm();
          if (Tm !== MT.F) return Li({
            site: Af.c,
            error: `core ABI ${Tm}, page ABI ${MT.F}`,
            header: null
          }, Zm), null;
          const [fm, hm] = (0, MT.qe)();
          zm = new mm(fm, hm)
        } catch (Am) {
          return Li({
            site: Af.c,
            error: Am,
            header: null
          }, Zm), null
        }
        ix = Zm, Rx = jm.bindings;
        const km = new Af.k(zm, DT.w, {
          onCrash: mm => {
            var Tm;
            null === (Tm = uw) || void 0 === Tm || Tm.crashed(mm),
              function(mm, Tm, fm, hm) {
                if ("webgpu" !== Tm || (0, qA.e)()) return !1;
                const Am = function(mm) {
                  if (mm.site === Af.g && (0, hf.p)(mm.error)) return "frames_refused";
                  return mm.site === ea && (0, hf.t)(mm.error) ? "start_failed" : null
                }(mm);
                if (null === Am) return !1;
                if (null !== (0, hf.W)(Am, hm)) return (0, zf.countRenderLost)(Am, mm.error, Nw), !1;
                return kT.C.reloaded(null, !1), (0, zf.reportRenderReload)("webgpu", "start_failed" === Am ? 0 : 1, fm, {
                  cause: Am,
                  error: mm.error,
                  context: Nw,
                  session: di(null)
                }), bi(), !0
              }(mm, Em, Zm, om) || Li(mm, Zm)
          },
          onNetEvent: ki,
          onReconnectGrace: ai,
          onJoinPreloadEnded: Ai,
          onCoreErrors: (mm, Tm) => {
            var fm, hm;
            mm.some((mm => {
              let {
                code: Tm
              } = mm;
              return Tm === MT.Q.RenderDeviceLost
            })) && ((0, qA.D)(), TD.deviceLost(), "webgpu" === Em && kT.C.lost()), null === (fm = uw) || void 0 === fm || fm.coreErrors(mm);
            const Am = () => {
              (0, zf.reportCoreErrors)(mm, Tm, Zm, ((mm, Tm) => {
                var fm;
                return mm === MT.Q.EnvUnknownSky ? (0, zf.unknownSkyWords)(jT.b.get("skyBox")) : mm === MT.Q.RenderDeviceLost ? (0, zf.deviceLossWords)(Tm, Nw.boundAtMs) : null === (fm = Gw) || void 0 === fm ? void 0 : fm.Ffm(mm, Tm)
              }))
            };
            mm.some((mm => {
              let {
                code: Tm
              } = mm;
              return Tm === MT.Q.EnvUnknownSky
            })) ? queueMicrotask(Am) : Am(), null === (hm = yx) || void 0 === hm || hm.coreErrors(mm)
          },
          onRenderReload: (mm, Tm, fm) => {
            ! function(mm, Tm, fm, hm, Am, am) {
              var xm;
              if ((0, qA.e)()) return;
              const wm = Tm === MT.Wc.WEBGPU,
                Dm = hm === MT.Wc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                im = hm === MT.Wc.RESTORE_LOST,
                Rm = wm && (0, kT.m)(Nw.adapter, fm, "lost" === Dm, im),
                pm = (0, hf.Z)(Gw);
              null === (xm = uw) || void 0 === xm || xm.reload(wm, fm, Dm, null === pm || void 0 === pm ? void 0 : pm.message);
              const Em = wm ? (0, hf.W)(Dm, Am) : null;
              if (null !== Em) {
                (0, zf.countRenderLost)(Dm, pm, Nw);
                const Tm = void 0 === pm ? "" : ` (${pm.message})`;
                return void mm.crash(zf.RENDER_RELOAD_SITE, new Error(`${(0,zf.renderReloadMessage)("webgpu",Dm,fm)} and ${Em}${Tm}`))
              }
              const om = wm ? "webgpu" : "webgl1" === am ? "webgl1" : "webgl";
              "lost" === Dm && (0, qA.D)();
              wm || (0, OT.u)();
              (0, zf.reportRenderReload)(om, fm, ix, {
                from: "game",
                cause: Dm,
                restoreLost: im,
                adapterRemembered: Rm,
                error: pm,
                context: Nw,
                session: di(mm.sunShadowsHeld())
              }), bi()
            }(km, mm, Tm, fm, om, Em)
          },
          onEnvEvent: mm => {
            var Tm;
            mm.kind === MT.Z.SkyImages ? null === (Tm = Nx) || void 0 === Tm || Tm.onEvent(mm.payload) : mm.kind === MT.Z.EnvLighting && (Gx = 1 === mm.payload[0])
          },
          onImages: mm => {
            var Tm;
            null === (Tm = Xx) || void 0 === Tm || Tm.onEvent(mm)
          },
          onModelRequest: mm => {
            var Tm;
            null === (Tm = bx) || void 0 === Tm || Tm.request(mm)
          },
          onModelTaken: (mm, Tm) => {
            var fm;
            null === (fm = bx) || void 0 === fm || fm.taken(mm, Tm)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(mm, Tm) {
                const fm = wx;
                if (null === fm || mm.isStopped) return;
                fm.restore((mm => {
                  (0, zf.reportTerrainTextureFailure)(mm, Tm)
                })).then((Tm => {
                  !1 !== Tm || mm.isStopped ? !0 === Tm && console.info(`${ba} terrain textures handed over again after the renderer lost them`) : console.warn(`${ba} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(km, Zm)
            }))
          },
          onKeepAlive: mm => {
            const Tm = null === xw ? void 0 : ww.get(xw);
            void 0 !== Tm && yh(Tm, mm)
          },
          onSends: () => {
            ! function(mm) {
              const Tm = performance.now();
              if (mm.forEachNetOut(Mi), Ci(mm), (0, Af.L)(mm, {
                  worldgen: Vx,
                  mesh: Kx
                }), null !== Mw) try {
                Mw.sendsWent(mm, Tm, performance.now())
              } catch (Am) {
                Zi(Am)
              }
            }(km)
          }
        });
        if (Ax = km, null === (xm = eT.e.wasmNetReady) || void 0 === xm || xm.call(eT.e, (() => km.isStopped ? 0 : km.netKeptFrames)), null !== mm) {
          km.setAntiCheatProbes(Ka(DT.w, mm.checks)), mm.watchHeld(na.CoreFrame, (() => km.frame)), mm.watchHeld(na.GlueFrame, (() => zm.frame));
          const Tm = function(mm, Tm) {
            const fm = new Qa(Tm);
            let hm = !1;
            fm.DE(mm.DE());
            const Am = (0, Ph.X)((() => {
              fm.DE(mm.DE())
            }), Ja);
            let am = 6 * (0, Ph.O)() | 0;
            const xm = () => {
              ++am < 6 || (am = 0, mm.checks.stackCheck() && (hm = !0))
            };
            (0, Aa.j)(xm);
            const wm = () => {
              const Tm = mm.checkPadCall();
              0 !== Tm && fm.setFlags(Tm)
            };
            return (0, ha.i)(wm), {
              onSend: xm,
              beforeFrame: () => {
                hm && fm.originStackHit() && (hm = !1)
              },
              onEvent: Tm => {
                const hm = mm.checkEvent(Tm);
                fm.value(MT.h.ProbeUsedProp, mm.usedProp()), 0 !== hm && fm.setFlags(hm)
              },
              stop: () => {
                (0, Ph.$)(Am), (0, Aa.h)(xm), (0, ha.e)(wm)
              }
            }
          }(mm, ((mm, Tm, fm) => {
            let hm = !1;
            return mR(km, (() => {
              hm = km.rings.input.writeRecord(MT.wb.AntiCheat, mm, Tm, fm, 0)
            })), hm
          }));
          km.isStopped ? Tm.stop() : Zx = Tm
        }
        da = (mm, Tm, fm) => km.rings.cmd.writeCmd(mm, Tm, fm), ga = mm => km.rings.cmd.growForCmd(mm), Fx = !1, oi(), (0, Jm.x)(km, {
          core: zm,
          memory: DT.w,
          staleOr: (mm, Tm, fm, hm) => wR({
            site: mm,
            error: Tm
          }, fm, hm),
          reportReplayFault: (mm, Tm) => {
            (0, zf.reportReplayFault)(mm, Tm, ix)
          },
          audio: Dx,
          options: jT.b,
          onNetEvent: ki,
          sessionInfo: mm => {
            var Tm;
            return (null === (Tm = Ew) || void 0 === Tm ? void 0 : Tm.conn) === mm ? Ew.info : null
          },
          onEventOverflow: bD,
          replayShaderPack: mm => {
            var Tm;
            null === (Tm = yx) || void 0 === Tm || Tm.replay(mm)
          },
          hasPackModel: mm => {
            var Tm, fm;
            return null !== (null !== (Tm = null === (fm = Oi()) || void 0 === fm ? void 0 : fm.modelUrl(mm)) && void 0 !== Tm ? Tm : null)
          },
          beforeWrite: () => (!Ux && km.rings.net.cursor > 0 && Ni(km, !1, "all"), !km.isStopped),
          beforeOp: () => (!Ux && km.netWrittenSinceFrame > 0 && Ni(km, !1, "budget"), !km.isStopped)
        }), (0, nm.G)({
          lockPointer: () => {
            if (!df(qm)) return !1;
            try {
              Promise.resolve(qm.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, yf.c)()
          },
          leaveGame: () => {
            kD()
          },
          canvas: () => qm
        }), kx = (0, nm.y)((() => {
          var mm;
          const Tm = (0, Jm.i)();
          null === (mm = (0, Jm.s)()) || void 0 === mm || mm.followCursorAim(!0 === (null === Tm || void 0 === Tm ? void 0 : Tm.isSessionLive) ? Tm : null)
        })), hw && km.setUiPrefs(hw);
        Aw && km.setEnvPrefs(Aw);
        aw && km.setLookPrefs(aw);
        const bm = KA ? QA(KA.preventMovement) : null;
        bm && rD(bm);
        const Sm = (0, Kf.j)(),
          em = (0, Kf.f)(km, Sm);
        cx = Sm.basis, (0, Xf.l)(null === em ? null : (0, If.t)(em)), Jx = em;
        const Nm = (0, RT.e)();
        let Gm = 1 / 0,
          Xm = !0,
          Pm = Sm.shedFootprintBytes;
        const Hm = new Uh.b(Nm, (() => zm.mj()), (mm => {
          km.crash(Af.q, mm)
        }));
        Qx = Hm, nx = Hm, null !== em && Hm.setCeiling(Math.min((0, Uh.s)(em), Gm, (0, Kf.k)()));
        if (Xm) {
          Hm.setShed((mm => {
            const Tm = km.shedMemory("joinReserve" !== mm);
            return null !== Tm && (null === Jx || Tm < Jx) && (Jx = Tm, (0, Xf.l)((0, If.t)(Tm))), Tm
          }), ((mm, Tm, fm) => {
            1 === Tm ? (0, zf.reportMemoryShed)(mm, fm, ix) : console.warn(`${ba} wasm memory: shed again (${mm}): shed ${Tm}`, fm.wasmMemoryShed)
          }), (() => km.addDistanceInUse()));
          const mm = (0, hf.L)(cm);
          Hm.setFootprint(new lA(Pm, {
            storedChunks: () => zm.mhm(),
            gpuBytes: () => {
              var Tm;
              return null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.Thm()) && void 0 !== Tm ? Tm : 0
            },
            jsHeapBytes: sA
          }))
        }
        window.addEventListener("pagehide", (() => {
          Qx === Hm && (Hm.refreshStats(), Fi(Hm))
        })), window.addEventListener("pagehide", Si), window.addEventListener("pagehide", ei), !1;
        const [ym, Cm] = (0, bf.e)();
        Lw = (0, ef.h)((mm => km.setChunkAddDistance(mm.horizontal, mm.vertical)), {
          horizontal: ym,
          vertical: Cm
        }), km.setAmbientOcclusion(!0 !== Pf.g.getItem("disableAmbientOcclusion")), km.setPoseLod(!0 !== Pf.g.getItem(xT.N)), (0, MA.o)("look") && (km.setDebugLog(MT.T.Look, !0), km.setDebugLog(MT.T.CameraSet, !0), (0, BA.g)("wasm", {
          look: () => km.takeDebugLog(MT.T.Look),
          cameraSets: () => km.takeDebugLog(MT.T.CameraSet)
        }));
        (0, MA.o)("remesh") && (km.setDebugLog(MT.T.Remesh, !0), rm = () => km.takeDebugLog(MT.T.Remesh), dA = new UA((0, LA.h)(), rm));
        var rm;
        const sm = function(mm, Tm, fm, hm) {
          const Am = new oh,
            am = mm => Pf.g.getItem(mm);
          Am.sync(am, Tm), (0, bT.V)();
          const xm = (0, Dm.m)("customBindingsChanged", (() => {
            Am.sync(am, Tm)
          }));
          (0, Cf.r)(Tm);
          const wm = new Set,
            im = (0, nm.y)((() => {
              var mm;
              wm.size > 0 && jh() && !0 === (null === (mm = (0, Jm.i)()) || void 0 === mm ? void 0 : mm.localPlayerAlive()) && Dm.j.gp("usedKeyboard")
            })),
            Rm = Ah.e.heldSizer((() => (0, NT.k)(mm))),
            pm = hh(mm, Tm, {
              prevents: mm => Am.prevents(mm),
              keyPressed: mm => {
                Am.moves(mm) && (wm.add(mm), jh() && Dm.j.gp("usedKeyboard"))
              },
              keyReleased: mm => {
                wm.delete(mm)
              },
              keysReleased: () => {
                wm.clear()
              },
              resized: () => {
                Yh.k.measure(mm.getBoundingClientRect()), (0, ah.j)()
              },
              sizeCanvas: Rm,
              watchRenderScale: Tm => {
                const fm = (0, NT.l)(mm, Tm),
                  hm = Ah.e.onRelease(Tm);
                return () => {
                  fm(), hm()
                }
              },
              touchStarting: () => {
                Yh.k.measure(mm.getBoundingClientRect())
              },
              viewShown: fm,
              touchUiShown: () => Lm.c.get("isTouchScreen"),
              ctrlCombosAreGames: jh,
              inspect: (mm, Tm, fm) => {
                Am.checks(Tm, fm) && hm(mm)
              },
              canLock: () => df(mm)
            }),
            Em = (0, pf.b)(Tm);
          return () => {
            xm(), im(), (0, Cf.r)(null), Em(), pm()
          }
        }(qm, ((mm, Tm, fm, hm, Am) => {
          mR(km, (() => {
            km.rings.input.writeRecord(mm, Tm, fm, hm, Am)
          })), !dx && (0, nh.c)(mm, Am) && (0, nh.b)((() => {
            Ax !== km || wD || km.isStopped || !si() || Ni(km, !1, "budget", !1)
          }))
        }), (() => hD), (mm => {
          var Tm;
          null === (Tm = Zx) || void 0 === Tm || Tm.onEvent(mm)
        }));
        if (km.isStopped) return sm(), null;
        jx = sm;
        const lm = () => !km.isStopped && !aD;
        if (km.isStopped) return null;
        (0, DT.X)((() => {
          "call" === (0, DT.p)() && km.crash(Af.t, (0, DT.m)())
        }));
        const Mm = (0, Af.N)(km.rings.worker, (() => {
          Ni(km, !1, document.hidden ? "all" : "budget")
        }));
        Vx = function(mm, Tm) {
          return TR().then((mm => {
            let {
              prefetchWorldgenWorker: Tm
            } = mm;
            Tm()
          }), (() => {})), new ma({
            module: (0, DT.z)(),
            decodeSettings: mm => {
              const Tm = (0, Jm.s)();
              if (null === Tm) throw new Error("no game code to decode the world-gen seed with");
              return Tm.decodeMapSettings(mm)
            },
            loadWorker: fR,
            onMapWithoutWorldgen: () => {
              hR((mm => {
                let {
                  stopWorldgenWorkerPrefetch: Tm
                } = mm;
                Tm()
              }))
            },
            onLoadFailed: mm => {
              (0, zf.reportWorldgenLoadFailure)(mm, ix)
            },
            onWorkerLost: mm => {
              (0, zf.reportWorkerLost)(Af.B, mm, ix)
            },
            onStartTimeout: mm => {
              (0, zf.reportWorkerStartTimeout)(Af.B, mm, ix)
            },
            onGaveUp: mm => {
              (0, zf.reportWorldgenGaveUp)(mm, ix)
            },
            onMemoryStats: mm => {
              var Tm;
              null === (Tm = Qx) || void 0 === Tm || Tm.noteWorldgen(mm)
            },
            onMemoryGone: () => {
              var mm;
              null === (mm = Qx) || void 0 === mm || mm.worldgenGone()
            },
            write: (fm, hm, Am, am, xm) => {
              mR(mm, (() => {
                mm.rings.worker.writeWorkerRecord(fm, hm, Am, 0, am, xm) || mm.crash(Af.B, `a world-gen record of kind ${hm} did not fit the worker-in ring`)
              })), Tm()
            }
          })
        }(km, Mm), Kx = function(mm, Tm) {
          return new vh({
            module: (0, DT.z)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: mm
              }, Tm] = await Promise.all([fm.e(40).then((() => fm(51026))), Promise.resolve().then((() => fm(105))).then((mm => {
                let {
                  isMobile: Tm
                } = mm;
                return Tm()
              }), (() => !1))]);
              return {
                create: mm,
                count: (0, JT.d)(navigator.hardwareConcurrency, Tm),
                maxKeptLightStates: Tm ? 1 : void 0
              }
            },
            write: (fm, hm, Am, am, xm, wm) => {
              (0, ah.h)(), mR(mm, (() => {
                mm.rings.worker.writeWorkerRecord(fm, hm, Am, am, xm, wm) || mm.crash(Af.r, `a meshing record of kind ${hm} did not fit the worker-in ring`)
              })), Tm()
            },
            onWorkerLost: mm => {
              (0, zf.reportWorkerLost)(Af.r, mm, ix)
            },
            onLightFault: (mm, Tm) => {
              (0, zf.reportLightFault)(mm, Tm, ix)
            },
            onStartTimeout: mm => {
              (0, zf.reportWorkerStartTimeout)(Af.r, mm, ix)
            },
            onMemoryStats: (mm, Tm) => {
              var fm;
              null === (fm = Qx) || void 0 === fm || fm.noteMeshWorker(mm, Tm)
            },
            onMemoryGone: mm => {
              var Tm;
              null === (Tm = Qx) || void 0 === Tm || Tm.meshWorkerGone(mm)
            },
            fail: (Tm, fm) => {
              const hm = () => {
                mm.crash(Af.r, void 0 === fm ? Tm : new Error(Tm, {
                  cause: fm
                }))
              };
              void 0 !== fm ? wR({
                site: Af.r,
                error: fm
              }, hm) : hm()
            }
          })
        }(km, Mm), eD();
        const tm = (0, DA.s)(QT.clientSideServerUrls.staticUrl, {
            onTableFailed: mm => {
              wR({
                site: zf.MODEL_FEED_SITE,
                error: mm
              }, (() => {}), {
                stillWanted: lm
              })
            },
            packUrl: mm => {
              var Tm, fm;
              return null !== (Tm = null === (fm = Oi()) || void 0 === fm ? void 0 : fm.modelUrl(mm)) && void 0 !== Tm ? Tm : null
            }
          }),
          Um = function(mm, Tm, fm) {
            const hm = fm => {
              var hm, Am;
              return null !== (hm = null === (Am = Tm()) || void 0 === Am ? void 0 : Am.drawnUrl(fm)) && void 0 !== hm ? hm : mm.url(fm)
            };
            return (0, xA.l)((0, gh.o)(hm), fm)
          }(tm, (() => bx), Oi),
          dm = new gh.e(Um, (mm => {
            console.warn(`${ba} image ${mm.key.kind}:${mm.key.index}:${mm.key.word} failed`, mm.error)
          }));
        Xx = dm, Px = new hA(km, Um, ((mm, Tm) => {
          void 0 === Tm ? console.warn(`${ba} ${mm}`) : qi(mm, Tm)
        }));
        const gm = new aA.i(tm, function(mm, Tm) {
          let hm = !1,
            Am = null,
            am = null;
          const xm = {
              onUnavailable: (fm, hm) => {
                am ??= wR({
                  site: zf.MODEL_POOL_SITE,
                  error: fm,
                  urls: hm
                }, (() => {
                  (0, zf.reportModelPoolFailure)(fm, mm)
                }), {
                  stillWanted: Tm
                })
              },
              onDecoderFailed: (fm, hm) => {
                const Am = () => {
                  (0, zf.reportDracoDecoderFailure)(fm, mm)
                };
                void 0 !== hm ? wR({
                  site: zf.MODEL_POOL_SITE,
                  error: fm,
                  urls: hm
                }, Am, {
                  stillWanted: Tm
                }) : Am()
              },
              onWorkerLost: Tm => {
                (0, zf.reportWorkerLost)(zf.MODEL_POOL_SITE, Tm, mm)
              },
              onModuleRetry: (Tm, fm) => {
                (0, zf.reportModelsModuleRetry)(Tm, fm, mm)
              }
            },
            wm = fm.e(42).then((() => fm(51029))).then((mm => {
              let {
                pageModelPool: Tm
              } = mm;
              if (hm) return null;
              const fm = Tm(xm);
              return Am = fm.unlisten, Sx = fm.pool, eD(), fm.pool
            }), (mm => (hm || xm.onUnavailable(mm, void 0), null)));
          return ex = () => {
            var mm;
            hm = !0, null === (mm = Am) || void 0 === mm || mm(), Sx = null
          }, (mm, Tm) => wm.then((fm => {
            var hm;
            return null !== (hm = null === fm || void 0 === fm ? void 0 : fm.build(mm, Tm)) && void 0 !== hm ? hm : (0, iA.r)(mm, "the model workers did not load")
          })).then((mm => null !== am && (0, iA.n)(mm) ? am.then((() => mm)) : mm))
        }(Zm, lm), (mm => {
          mm.startup ? (Bi(), wR({
            site: zf.MODEL_FEED_SITE,
            error: mm.error,
            urls: "" === mm.url ? void 0 : [mm.url]
          }, (() => {
            (0, zf.reportModelFailure)(mm, Zm)
          }))) : (0, zf.reportModelFailure)(mm, Zm)
        }), {
          onWritten: (mm, Tm) => {
            dm.glbWritten(mm, Tm)
          },
          onTaken: (mm, Tm) => {
            dm.glbTaken(mm, Tm)
          },
          onPackFileFailed: (mm, Tm) => {
            console.warn(`${ba} the texture pack's model file ${mm} failed: the shipped one loads`, Tm)
          }
        });
        bx = gm;
        const Wm = new mA.c(km);
        wx = Wm, Wm.swap((mm => {
          const Tm = () => {
            (0, zf.reportTerrainTextureFailure)(mm, Zm)
          };
          if (vw) return void Tm();
          const fm = () => !vw,
            hm = null === mm.url ? void 0 : [mm.url];
          wR({
            site: Af.y,
            error: mm.error,
            urls: hm
          }, Tm, {
            stillWanted: fm
          })
        })).then((mm => {
          null !== mm && (mm || km.isStopped || console.warn(`${ba} the core refused the terrain textures: terrain draws untextured`), lx(km))
        }));
        const Fm = new sT(km, ((mm, Tm) => {
          console.warn(`${ba} ${mm}`, ...void 0 === Tm ? [] : [Tm])
        }));
        Fm.feed(), null !== Em && function(mm, Tm, hm, Am, am, xm) {
          let wm = null,
            im = null,
            Rm = !1;
          const pm = {
            textures: null,
            stop: () => {
              var mm, Tm;
              Rm = !0, null === (mm = im) || void 0 === mm || mm(), null === (Tm = wm) || void 0 === Tm || Tm(), wA.d.setSettled(null), null !== Rx && YD.clear(Rx)
            }
          };
          xx = pm, im = ji().follow((im => {
            null !== im && Promise.all([fm.e(201), fm.e(45)]).then((() => fm(50989))).then((fm => {
              let {
                PackTextures: Em
              } = fm;
              if (Rm || mm.isStopped) return;
              const om = new Em({
                feed: im,
                terrain: Tm,
                backend: hm,
                stopped: () => mm.isStopped,
                landed: () => {
                  lx(mm)
                },
                packSwapped: () => {
                  (0, xA.j)(Am), xm.feed((() => async function(mm) {
                    const Tm = null === mm ? null : await mm.averageColours;
                    return null === Tm ? lT() : rT(Tm)
                  }(om.assets))), (0, AA.j)(om.files()), am.refresh().then((mm => {
                    null !== mm && console.info(`${ba} texture pack models: ${mm.resent} of ${mm.delivered} files written again, ${mm.refetched} refetched`)
                  }))
                },
                settled: (mm, Tm, fm) => {
                  var hm;
                  (wA.d.setSettled({
                    state: mm,
                    files: Tm
                  }), function(mm, Tm, fm) {
                    const hm = null === mm.gameSource && (0, Zf.d)(mm.pack);
                    if (null === Tm) return;
                    const Am = (0, Jf.h)(Tm.error),
                      am = hm ? "settings" : Tm.source;
                    Dm.j.gp(Jf.d, {
                      failure: Am,
                      source: am,
                      pack: kf(mm)
                    }), (0, zf.reportTexturePackKeptOut)(am, Am, Tm.error, fm)
                  }(mm, fm, ix), null === fm) && function(mm) {
                    const Tm = Rx;
                    null !== Tm && YD.apply(Tm, mm).then((Tm => {
                      Tm && mm && console.info(`${ba} the texture pack's animations are in (${Object.keys(mm).length} files)`)
                    }))
                  }(null === (hm = mm.pack) || void 0 === hm ? void 0 : hm.animations)
                },
                settling: () => {
                  wA.d.setSettled(null)
                },
                warn: qi,
                maxTextureSize: () => Promise.resolve((0, hf.cb)(document.createElement("canvas")))
              });
              pm.textures = om, wm = om.start()
            }), (mm => {
              console.warn(`${ba} the texture pack's terrain didn't load: the built atlas stays`, mm)
            }))
          }))
        }(km, Wm, Em, dm, gm, Fm);
        const mT = () => {
            km.setTextureLayers("")
          },
          TT = mm => {
            (KT ??= fm.e(53).then((() => fm(51033))).then((mm => {
              let {
                TEXTURE_NAMES: Tm
              } = mm;
              return Tm
            }), (mm => {
              throw KT = null, mm
            })), KT).then((mm => {
              km.setTextureLayers(mm) || km.isStopped || (console.warn(`${ba} the core refused the texture names: textured Boxes draw textureNotFound`), mT())
            }), (Tm => {
              if (km.isStopped) return;
              const [fm, ...hm] = mm;
              void 0 === fm ? wR({
                site: zf.TEXTURE_NAMES_SITE,
                error: Tm
              }, (() => {
                console.warn(`${ba} the texture names didn't load, so textured Boxes draw textureNotFound`, Tm), mT()
              }), {
                stillWanted: lm
              }) : setTimeout((() => {
                TT(hm)
              }), fm)
            }))
          };
        if (TT(ta), null !== Em && !await async function(mm, Tm, fm, hm, am, xm) {
            var wm;
            const Dm = (0, hf.L)(fm);
            if (null === Dm) return mm.crash(ea, new Error(`this ${hm} build has no openRenderer`)), !1;
            let im;
            Gw = Dm;
            try {
              var Rm, pm, Em, om;
              const Am = null !== (Rm = null === (pm = fx) || void 0 === pm ? void 0 : pm.pagePreviews()) && void 0 !== Rm ? Rm : null,
                wm = null !== (Em = null === (om = fx) || void 0 === om ? void 0 : om.previewModule(fm)) && void 0 !== Em ? Em : null;
              if (null === Am || null === wm) {
                null === Am || void 0 === Am || Am.endSession(!1), im = (0, NT.e)().sampleCount, await (0, hf.f)(Tm, Dm, xm, Ei, im, await am);
                const mm = (0, hf.k)(fm);
                null === mm && console.warn(`${ba} this ${hm} build has no image registry: sky and model images won't show`), (0, Fh.d)(mm)
              } else {
                (0, qA.e)() && await (0, Bm.l)();
                const fm = (0, qA.P)();
                if (null !== fm) {
                  const Tm = (0, hf.Z)(Dm);
                  return mm.crash(zf.RENDER_RELOAD_SITE, new Error(`${fm}${void 0===Tm?"":` (${Tm.message})`}`)), !1
                }
                im = await Am.bindSession(wm, Tm, (async mm => (0, hf.v)(Dm, ea, xm, mm, Ei, await am)))
              }
            } catch (Am) {
              return mm.crash(ea, Am), !1
            }(function(mm, Tm) {
              const fm = mm,
                {
                  requestCapture: hm,
                  takeCapture: Am
                } = fm;
              if ("function" !== typeof hm || "function" !== typeof Am) return;
              const am = {
                request() {
                  hm.call(fm, Tm)
                },
                take() {
                  var mm;
                  return null !== (mm = Am.call(fm)) && void 0 !== mm ? mm : null
                }
              };
              window[cA] = am
            })(Tm, im), sw = im, ew = !0;
            const Om = performance.now();
            return Nw.boundAtMs = null !== (wm = (0, qA.S)()) && void 0 !== wm ? wm : Om, Nw.indirectHangs = (0, qA.H)(), Nw.restoresSkipped = (0, qA.T)(), console.info(`${ba} ${hm} renderer bound at ${Math.round(Om)} ms`), !mm.isStopped
          }(km, zm, cm, Em, Om, qm)) return null;
        if (null !== Em) {
          var fT, hT, AT;
          (0, pT.H)(Em);
          const mm = () => !km.isStopped && ri();
          fm.e(194).then((() => fm(34163))).then((Tm => {
            let {
              devTools: fm
            } = Tm;
            km.isStopped || fm.setHost(function(mm) {
              return {
                tools: YA,
                async downloadScene(Tm, fm) {
                  let {
                    width: hm,
                    height: Am,
                    colouring: am
                  } = fm;
                  "screenshot" === Tm && null === am ? await (0, EA.f)(mm, hm, Am) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (Tm, fm, hm) => (0, EA.d)(mm, Tm, fm, hm)
              }
            }(function(mm, Tm) {
              return {
                canvas: mm,
                maxTextureSize: oA,
                drawing: Tm,
                resize: (mm, Tm, fm) => {
                  (0, Cf.y)(MT.wb.Resize, 0, mm / fm, Tm / fm, (0, Cf.m)(fm))
                },
                restoreSize: () => {
                  const Tm = (0, NT.k)(mm);
                  null !== Tm && (0, Cf.y)(MT.wb.Resize, 0, Tm.cssWidth, Tm.cssHeight, (0, Cf.m)(Tm.renderScale))
                },
                onFrameDrawn: mm => (OA.add(mm), () => {
                  OA.delete(mm)
                })
              }
            }(qm, mm)))
          }), (mm => {
            console.warn(`${ba} the developer tools didn't load: no captures this session`, mm)
          }));
          const Tm = "webgpu" === Em && null !== (fT = null === Rm || void 0 === Rm || null === (hT = Rm.adapter) || void 0 === hT ? void 0 : hT.vendor) && void 0 !== fT ? fT : null;
          lw = {
            backend: Em,
            canvas: qm,
            fallbackReason: null !== (AT = null === Rm || void 0 === Rm ? void 0 : Rm.reason) && void 0 !== AT ? AT : null,
            adapterVendor: Tm
          }, Ji();
          try {
            (0, ah.t)(Em, qm, Tm)
          } catch (Am) {
            (0, ah.w)(), console.error(`${ba} the quality steps didn't start`, Am)
          }
        }
        const {
          storagePullBreaks: aT,
          splitPassBreaks: wT
        } = await Om;
        wT && console.warn(`${ba} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const oT = (0, um.i)(Rm, (0, kT.h)());
        if ((0, MA.o)("webgpuloss")) {
          var VT, IT;
          const mm = {
            backend: Em,
            reason: null !== (VT = null === Rm || void 0 === Rm ? void 0 : Rm.reason) && void 0 !== VT ? VT : null,
            source: null !== (IT = null === Rm || void 0 === Rm ? void 0 : Rm.source) && void 0 !== IT ? IT : null,
            storagePullBreaks: aT,
            noWebGpu: oT.messageKey
          };
          (0, uA.e)((Tm => {
            Tm.noteWasmPick(mm)
          }))
        }
        const nT = "webgpu" === Em;
        if (yx = (0, um.j)(nT ? km : null, nT && null !== (wm = null === (im = fx) || void 0 === im ? void 0 : im.pagePreviews().KO) && void 0 !== wm ? wm : null, oT, qi), wD) return null;
        if (Hm.reserveAtJoin((0, Uh.p)(null !== em && void 0 !== em ? em : If.h)), km.isStopped) return null;
        const cT = mm => {
          if (Lx = performance.now(), vx = !1, null !== Mw) try {
            Mw.animationFrame(mm)
          } catch (Am) {
            Zi(Am)
          }
          if (function(mm, Tm) {
              return Tm && !wD && !dx && si() && ri() && mm.framePaces(performance.now())
            }(km, hD)) {
            if (km.writePendingInput(), (0, nm.h)(mm, Gi), ci(!1, mm), null !== Mw) try {
              Mw.framePaced()
            } catch (Am) {
              Zi(Am)
            }
            requestAnimationFrame(cT)
          } else Ni(km, hD, "budget") && ((0, ST.f)(km.lastFrameKind) && ri() && (0, nm.h)(mm, Gi), ci(hD && mD, mm), TD.frame(km.lastFrameKind, hD && ri(), mm), (0, ST.b)(km.lastFrameKind) && kT.C.drew(), ti(km), Hm.afterFrame(), requestAnimationFrame(cT))
        };
        requestAnimationFrame(cT);
        return function(mm) {
          if (mm.has("inputLog") && (0, Oh.g)((mm => {
              let {
                action: Tm,
                down: fm,
                press: hm
              } = mm;
              console.info(`${qh} input ${Tm} ${fm?"down":"up"} press ${hm} at ${performance.now().toFixed(1)}`)
            })), mm.has("inputDump")) {
            const mm = [];
            Vh = mm, Object.assign(window, {
              bloxdInputDump: () => mm.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), zx = function(mm) {
          let Tm = null;
          const fm = () => {
              null !== Tm && (clearInterval(Tm), Tm = null)
            },
            hm = () => {
              document.hidden ? Tm ??= setInterval((() => {
                aR(mm) || fm()
              }), va) : fm()
            };
          return document.addEventListener("visibilitychange", hm), hm(), () => {
            fm(), document.removeEventListener("visibilitychange", hm)
          }
        }(km), km
      }(Tm).then((mm => {
        var Tm;
        (hm(ix), ox(null !== mm), null !== mm && (SA = performance.now()), px(mm), null === mm) ? null === (Tm = fx) || void 0 === Tm || Tm.pagePreviews().endSession(null === (0, DT.p)()): sx("booted")
      }), (mm => {
        hm(ix), ox(!1), px(null), Li({
          site: Na,
          error: mm,
          header: null
        }, ix)
      }))
    }

    function OD() {
      const mm = Rx;
      null !== mm && DD().then((Tm => {
        let {
          pageBuiltInAnimationPack: fm
        } = Tm;
        fm().provide(mm)
      }), (mm => {
        console.warn(`${ba} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, mm)
      }))
    }
    const YD = new class {
      constructor(mm) {
        this.deps = mm, this.latest = 0, this.ni = null
      }
      apply(mm, Tm) {
        return this.load(mm, Tm, 0)
      }
      async load(mm, Tm, fm) {
        var hm;
        const Am = ++this.latest,
          am = this.deps.compiler;
        if (void 0 === Tm || null === Tm || "object" !== typeof Tm || 0 === Object.keys(Tm).length || null === am) return this.drop(mm), !1;
        if ((null === (hm = this.ni) || void 0 === hm ? void 0 : hm.module) === mm && (0, WT.Zd)(this.ni.files, Tm)) return !1;
        try {
          const [fm, hm] = await Promise.all([am(), this.deps.builtIns()]);
          if (Am !== this.latest) return !1;
          const xm = await fm(Tm, ff, {
            builtIns: hm
          });
          if (Am !== this.latest) return !1;
          const wm = this.call(mm, xm);
          if (void 0 === wm) throw new Tf("the compiled animations didn't read against the built-in pack");
          return this.ni = {
              module: mm,
              files: Tm
            },
            function(mm) {
              for (let Tm = 0; Tm + 2 < mm.length; Tm += 3) {
                ("error" === mm[Tm] ? console.error : console.warn)(`Animation for the texture pack: ${mm[Tm+1]}: ${mm[Tm+2]}`)
              }
            }(wm), !0
        } catch (wm) {
          var xm;
          if (Am !== this.latest) return !1;
          this.drop(mm), 0 === fm && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", wm);
          const hm = (null !== (xm = this.deps.retryAfterMs) && void 0 !== xm ? xm : mf)[fm];
          return void 0 === hm || wm instanceof Tf || (0, FT.i)(mm) || setTimeout((() => {
            Am === this.latest && this.load(mm, Tm, fm + 1)
          }), hm), !1
        }
      }
      call(mm, Tm) {
        try {
          return mm.gfm(Tm)
        } catch (fm) {
          throw (0, FT.m)(mm, fm), fm
        }
      }
      clear(mm) {
        this.latest++, this.drop(mm)
      }
      drop(mm) {
        const Tm = this.ni;
        if (this.ni = null, (null === Tm || void 0 === Tm ? void 0 : Tm.module) === mm && !(0, FT.i)(mm)) try {
          this.call(mm, null)
        } catch {}
      }
    }({
      compiler: tT.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: mm
        } = await DD();
        return mm().whenSet()
      },
      warn: qi
    });
    async function qD(mm, Tm) {
      let hm = !1;
      await jD({
        matchmake: async () => {
          const {
            guestJoinTarget: Am,
            guestJoinWithPack: am
          } = await fm.e(272).then((() => fm(50975)));
          return hm ? Am(mm, Tm, Ii()) : (hm = !0, am(mm, Tm, (Tm => Ki(mm, Tm)), Ii))
        },
        onFailure: mm => {
          (0, zf.showJoinFailure)(mm, ix)
        },
        rejoin: XD,
        invalidateTrafficCode: PD
      })
    }
    async function jD(mm) {
      let {
        matchmake: Tm,
        onFailure: fm,
        rejoin: Am,
        invalidateTrafficCode: am,
        pageReady: xm,
        signal: wm
      } = mm;
      const Dm = () => !0 === (null === wm || void 0 === wm ? void 0 : wm.aborted);
      let im;
      const Rm = wA.d.rejoinHold();
      iw = null;
      const pm = (0, Nf.R)("wasm", Wi);
      let Em = !1,
        om = performance.now();
      try {
        if (!await Ox) return {
          kind: "stopped"
        };
        if (Dm()) return {
          kind: "Af"
        };
        iD().catch((() => {}));
        let mm = await Tm();
        var Ym, qm;
        if (om = performance.now(), !Dm()) gi(null !== (Ym = null === (qm = mm.target.session) || void 0 === qm ? void 0 : qm.gameNameWithVariation) && void 0 !== Ym ? Ym : null);
        const fm = () => performance.now() - mm.matchedAt <= mm.freshMs,
          hm = ID(mm.target).catch((() => {}));
        fm() && !Dm() && (im = new uh(mm.target, {
          signal: wm
        }));
        const am = performance.now();
        if (null === await Ex) return {
          kind: "stopped"
        };
        var jm, Vm;
        if (function(mm) {
            var Tm, fm;
            if (zA.c.markGameEngineConstructed(), eA) return;
            eA = !0;
            const hm = Math.max(mm, null !== (Tm = kA) && void 0 !== Tm ? Tm : mm);
            (0, ZA.i)("ready", Math.max(0, (null !== (fm = bA) && void 0 !== fm ? fm : hm) - hm) / 1e3)
          }(am), !Dm())
          if (null !== bA && null !== SA ? ((0, Om.j)("wasm_loaded", bA), (0, Om.j)("wasm_core_ready", SA)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), mm.target.session && (0, WA.b)(mm.target.session.gameNameWithVariation)) null === (jm = Vx) || void 0 === jm || jm.prestart();
        if (await hm, !fm() && !Dm()) null === (Vm = im) || void 0 === Vm || Vm.rematched(), mm = await Tm(), om = performance.now();
        if (Dm()) return {
          kind: "Af"
        };
        const Rm = await async function(mm) {
          var Tm, fm, hm;
          let {
            signal: Am,
            rejoin: am = null,
            early: xm,
            pageReady: wm
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Am && void 0 !== Am && Am.aborted) throw new DOMException("the join was left", "AbortError");
          const Dm = (im = Iw, Rm = performance.now(), null !== im && Rm - im < Sh);
          var im, Rm;
          Iw = null;
          const pm = new AbortController,
            Em = null !== (Tm = null === (fm = mm.session) || void 0 === fm ? void 0 : fm.gameNameWithVariation) && void 0 !== Tm ? Tm : null;
          gi(Em), nD({
            controller: pm,
            game: Em
          }), Kw = null, null === (hm = Jw) || void 0 === hm || hm.abort(), Jw = null, Zw = !1, kw = null, bw.clear();
          const om = () => {
            (0, nT.d)(pm, (0, nT.c)(Am))
          };
          null === Am || void 0 === Am || Am.addEventListener("abort", om, {
            once: !0
          });
          try {
            var Ym, qm, jm;
            const Tm = await Ex;
            if (null === Tm || Tm.isStopped || wD) throw new Error("no core is running to join a game with");
            if (mm.session && null !== yx) {
              const Tm = await KD(yx.join(mm.session.gameNameWithVariation), pm.signal);
              if ((0, MA.o)("webgpuloss")) {
                const fm = mm.session.gameNameWithVariation,
                  hm = yx.couldntRunInJoinedGame();
                (0, uA.e)((mm => mm.noteWasmJoin(fm, Tm, hm)))
              }
              if (null !== Tm) throw new um.e(Tm)
            }
            const [, , , {
              joinRoom: fm
            }] = await KD(Promise.all([(0, Jm.j)(Tm), ID(mm), null === wm || void 0 === wm ? void 0 : wm(), iD()]), pm.signal), hm = mm.session, Am = hm ? {
              ...CD,
              attachSocket: Tm => {
                const fm = LD(Tm, mm.endpoint);
                var Am;
                null !== fm && (Ew = {
                  conn: fm,
                  info: hm
                }, null === (Am = ow) || void 0 === Am || Am(hm.playerDbId));
                return fm
              }
            } : CD, im = await fm(Am, mm, {
              signal: pm.signal,
              early: xm
            }).catch((mm => {
              throw function(mm) {
                if (!(mm instanceof Xm.b)) return mm;
                if ("roomError" === mm.stage && null !== kw) return VD(new Xm.b(mm.message, mm.stage, mm.code, kw), mm);
                const Tm = "closed" === mm.stage && null !== Qw ? bw.get(Qw.conn) : void 0;
                return void 0 === Tm ? mm : VD(new Xm.b(mm.message, mm.stage, Tm.code, null, mm.socketOpened), mm)
              }(mm)
            }));
            if (Dw !== pm) throw im.leave(), new DOMException("the join was left", "AbortError");
            cD(im), null === (Ym = Kx) || void 0 === Ym || Ym.newGame();
            const Rm = function(mm) {
              var Tm, fm;
              const {
                session: hm
              } = mm, Am = void 0 === hm ? mm.joinOptions.lobbyName : hm.lobbyName;
              return {
                endpoint: mm.endpoint,
                game: null !== (Tm = null === hm || void 0 === hm ? void 0 : hm.gameNameWithVariation) && void 0 !== Tm ? Tm : mm.roomName,
                lobby: String(null !== Am && void 0 !== Am ? Am : null),
                postCookies: null !== (fm = mm.postCookies) && void 0 !== fm ? fm : null
              }
            }(mm);
            ww.set(im, Rm), rh(Rm);
            const Em = performance.now(),
              om = {
                conn: im.conn,
                rejoin: am,
                game: null !== (qm = null === (jm = mm.session) || void 0 === jm ? void 0 : jm.gameNameWithVariation) && void 0 !== qm ? qm : "",
                joinedAt: Em,
                rejoinedAt: Dm ? Em : null,
                overflow: null
              };
            Ow = om,
              function(mm, Tm) {
                mi();
                const fm = {
                  endpoint: Tm,
                  roomId: mm.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new qf({
                    reconnect: (mm, Tm, hm) => async function(mm, Tm, fm, hm) {
                      const {
                        roomId: Am,
                        roomToken: am
                      } = fi(mm, Tm), xm = Ax;
                      if (null === xm || xm.isStopped || wD) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: wm
                      } = await KD(iD(), fm), Dm = {
                        ...CD,
                        attachSocket: Tm => Yw !== mm || 0 === mm.heldConn ? (Tm.close(), null) : LD(Tm, mm.endpoint, !0)
                      };
                      return wm(Dm, mm.endpoint, Am, am, {
                        signal: fm,
                        onAttached: hm
                      })
                    }(fm, mm, Tm, hm),
                    releaseSeat: mm => {
                      !async function(mm, Tm) {
                        const {
                          roomId: fm,
                          roomToken: hm
                        } = fi(mm, Tm);
                        try {
                          const {
                            leaveHeldSeat: Tm
                          } = await iD();
                          await Tm(mm.endpoint, fm, hm)
                        } catch (Am) {
                          console.warn(`${ba} the held seat of a game left while it reconnected couldn't be released`, Am)
                        }
                      }(fm, mm)
                    },
                    isLive: () => Yw === fm && null !== Ow && !wD,
                    nS: mm => {
                      Vw = mm, FD()
                    },
                    onReconnected: mm => {
                      ! function(mm) {
                        const Tm = xw;
                        if (null !== Tm && Tm !== mm) {
                          const fm = ww.get(Tm);
                          void 0 !== fm && ww.set(mm, fm), Fw === Tm && (Fw = mm), Tm.detach()
                        }
                        cD(mm)
                      }(mm)
                    },
                    onGaveUp: (mm, Tm) => {
                      ! function(mm, Tm, fm) {
                        var hm, Am;
                        console.warn(`${ba} gave up reconnecting (${fm.reason}, ${fm.attempts} attempts)`, fm.lastError), (0, zf.reportReconnectGaveUp)(fm, ix);
                        const am = null !== (hm = null === (Am = Ow) || void 0 === Am ? void 0 : Am.rejoin) && void 0 !== hm ? hm : null;
                        Ti(mm, "gaveUp"), ZD();
                        const xm = {
                          code: mm.dropCode,
                          name: null,
                          reason: Ma,
                          canReconnect: !Tm,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        yD(xm, Tm ? null : am, !1, {
                          reasonKey: ua,
                          canPlayAgain: Tm
                        })
                      }(fm, mm, Tm)
                    }
                  })
                };
                Yw = fm, null !== qw && qw.conn === mm.conn && fm.resume.onInitialInfo(qw)
              }(im, mm.endpoint), performance.mark(Pa), (0, Om.j)("wasm_joined", Em), setTimeout((() => {
                xw === im && (0, Om.e)()
              }), 0), OD(), console.info(`${ba} joined ${mm.roomName} as ${im.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const Vm = Kw;
            Kw = null, null !== Vm && SD(om, Vm.mask, Vm.frames);
            const Im = bw.get(im.conn);
            return bw.clear(), void 0 !== Im && (cD(null), HD(im.conn, Im.code, Im.reason)), im
          } finally {
            var Vm;
            null === Am || void 0 === Am || Am.removeEventListener("abort", om), Dw === pm && JD(xw, null), (null === (Vm = Qw) || void 0 === Vm ? void 0 : Vm.join) === pm && (Qw = null)
          }
        }(mm.target, {
          signal: wm,
          rejoin: Am(mm.target),
          early: im,
          pageReady: xm
        });
        return Em = !0, {
          kind: "joined",
          game: Rm
        }
      } catch (Km) {
        if (Km instanceof DOMException && "AbortError" === Km.name || Dm()) return {
          kind: "Af"
        };
        if (wD) return {
          kind: "stopped"
        };
        if (Zw && (Zw = !1, await am().catch((mm => {
            console.warn(`${ba} the cached traffic code could not be dropped`, mm)
          }))), null === await Ex) return {
          kind: "stopped"
        };
        if (Km instanceof um.e) return fm(Km, performance.now() - om), {
          kind: "failed",
          error: Km,
          reloading: !1
        };
        if (Km instanceof Xm.b && Km.code === hm.b.wasmClientNotAllowed.code && fD) return Ri("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Km,
          reloading: !0
        };
        const mm = Km instanceof Xm.b && Km.code === hm.b.outdatedVersion.code,
          Tm = () => null === xw,
          Am = await wR({
            site: zf.JOIN_SITE,
            error: Km,
            outdated: mm
          }, (() => {
            fm(Km, performance.now() - om)
          }), {
            stillWanted: Tm
          });
        return {
          kind: "failed",
          error: Km,
          reloading: Am
        }
      } finally {
        var Im;
        Em || pm.end(), wA.d.releaseHold(Rm);
        const mm = null === (Im = im) || void 0 === Im ? void 0 : Im.release();
        mm && (0, zf.reportUnusedSeat)(mm, ix)
      }
    }

    function VD(mm, Tm) {
      return mm.stack = Tm.stack, mm
    }

    function ID(mm) {
      return mm.session ? (0, Jm.o)(Dx, mm.session.gameNameWithVariation) : Promise.resolve()
    }

    function KD(mm, Tm) {
      return (0, nT.h)(Tm), new Promise(((fm, hm) => {
        const Am = () => {
          hm((0, nT.c)(Tm))
        };
        Tm.addEventListener("abort", Am, {
          once: !0
        }), mm.then((mm => {
          Tm.removeEventListener("abort", Am), fm(mm)
        }), (mm => {
          Tm.removeEventListener("abort", Am), hm(mm)
        }))
      }))
    }

    function QD() {
      nD(null)
    }

    function nD(mm) {
      var Tm, fm, hm;
      (function() {
        const mm = Yw;
        null !== mm && Ti(mm, "left")
      }(), null === qx || qx.left) || (qx.left = !0, null === (hm = (0, Jm.i)()) || void 0 === hm || hm.socketLeft(), (0, Em.r)({
        websocketUrl: null
      }));
      Dw && (0, nT.d)(Dw, new DOMException("the join was left", "AbortError")), ZD(null !== mm), null === (Tm = yx) || void 0 === Tm || Tm.leave();
      const Am = xw;
      null !== mm && wA.d.setGame(mm.game), JD(null, null !== (fm = null === mm || void 0 === mm ? void 0 : mm.controller) && void 0 !== fm ? fm : null), null === Am || void 0 === Am || Am.leave(), zD(0), (0, VT.f)()
    }

    function JD(mm, Tm) {
      xw = mm, Dw = Tm, null === xw && null === Dw && wA.d.setGame(void 0)
    }

    function cD(mm) {
      JD(mm, Dw)
    }

    function zD(mm) {
      const Tm = Ax;
      return null !== da && !wD && null !== Tm && !Tm.isStopped && (!!da(Xm.h, 0, (0, Xm.w)(mm)) && (Fx = !0, 0 === mm || dx || Ni(Tm, !1, "all"), !0))
    }

    function ZD() {
      var mm, Tm;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Nf.d)();
      const fm = null !== (mm = null === (Tm = Ow) || void 0 === Tm ? void 0 : Tm.overflow) && void 0 !== mm ? mm : null;
      Ow = null, null !== fm && (0, zf.reportEventOverflow)(fm, ix)
    }

    function kD() {
      null !== xw || null !== Dw ? QD() : vD()
    }

    function bD(mm, Tm) {
      console.warn(`${ba} the event buffer refused records in ${Tm} frames (categories ${mm})`), wD || (null !== Ow ? SD(Ow, mm, Tm) : null !== Dw && function(mm, Tm, fm) {
        var hm;
        const Am = function(mm, Tm) {
          return null === mm ? "drop" : mm.activated ? "keep" : 0 !== (Tm & uT.y.NetSession) ? "fail" : "drop"
        }((null === (hm = Qw) || void 0 === hm ? void 0 : hm.join) === mm ? Qw : null, Tm);
        "keep" === Am ? Kw = {
          mask: Tm,
          frames: fm
        } : "fail" === Am && (0, nT.d)(mm, new Error("the join's net session was lost to an event overflow"))
      }(Dw, mm, Tm))
    }

    function SD(mm, Tm, fm) {
      const hm = mm.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      hm.frames += fm, hm.acks++, hm.mask |= Tm;
      const Am = function(mm, Tm, fm) {
        if (0 === (mm & uT.y.NetSession)) return "none";
        const hm = null !== Tm.rejoinedAt && fm - Tm.rejoinedAt < eh;
        return null === Tm.rejoin || hm ? "fail" : "rejoin"
      }(Tm, mm, performance.now());
      "none" !== Am && queueMicrotask((() => {
        if (Ow !== mm) return;
        const Tm = "rejoin" === Am && performance.now() - nw >= Gm.f;
        hm.outcome = Tm ? "rejoined" : "failed", yD(function(mm, Tm) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: mm,
            automaticallyReconnect: Tm,
            requiresRefresh: !1
          }
        }(null !== mm.rejoin, Tm), mm.rejoin, Tm), QD(), Tm && (Iw = performance.now())
      }))
    }

    function eD() {
      fD && function(mm, Tm) {
        let {
          mesh: fm,
          worldgen: hm,
          modelPool: Am
        } = mm;
        "landingPage" === Tm ? (null === fm || void 0 === fm || fm.stopWorkers(), null === hm || void 0 === hm || hm.stopWorker(), null === Am || void 0 === Am || Am.stopWorkers()) : ((0, Lm.i)(Tm) || "inGame" === Tm) && (null === fm || void 0 === fm || fm.restartWorkers(), null === Am || void 0 === Am || Am.startWorkers())
      }({
        mesh: Kx,
        worldgen: Vx,
        modelPool: Sx
      }, Lm.c.get("gameState"))
    }

    function ND(mm) {
      hD = mm, AD && GD(AD, mm)
    }

    function GD(mm, Tm) {
      mm.style.visibility = Tm ? "visible" : "hidden"
    }

    function XD(mm) {
      var Tm;
      const fm = mm.roomName,
        hm = null !== (Tm = mm.joinOptions.lobbyName) && void 0 !== Tm ? Tm : null;
      return () => {
        qD(fm, hm)
      }
    }

    function PD() {
      return fm.e(272).then((() => fm(50975))).then((mm => {
        let {
          invalidateGuestTrafficCode: Tm
        } = mm;
        return Tm()
      })).catch((mm => {
        console.warn(`${ba} the cached traffic code could not be dropped`, mm)
      }))
    }

    function HD(mm, Tm, fm) {
      var Am, am;
      let xm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (wD) return;
      if ((null === (Am = Ow) || void 0 === Am ? void 0 : Am.conn) !== mm) return void(null !== Dw && bw.set(mm, {
        code: Tm,
        reason: fm
      }));
      const {
        rejoin: wm,
        game: Dm,
        joinedAt: im
      } = Ow;
      ZD(), mi();
      const Rm = (0, Gm.k)(Tm, (0, Gh.g)(mm));
      if (console.info(`${ba} the game's connection closed with code ${Tm} (${null!==(am=Rm.name)&&void 0!==am?am:"unrecognised"})`), Tm === hm.b.gameOrPluginKick.code || xm || (0, zf.reportDisconnect)(Rm, ix, {
          closeReason: fm,
          sinceJoinedMs: performance.now() - im,
          game: Dm
        }), Rm.requiresRefresh) {
        const mm = "outdatedVersion" === Rm.name,
          fm = new Error(`the game's connection closed with code ${Tm}`),
          hm = () => null === Ow && null === Dw;
        return void wR({
          site: zf.JOIN_SITE,
          error: fm,
          outdated: mm
        }, (() => {
          hm() && yD(Rm, null, !1)
        }), {
          stillWanted: hm
        })
      }
      const pm = Rm.canReconnect ? wm : null,
        Em = null !== pm && Rm.automaticallyReconnect && performance.now() - nw >= Gm.f;
      yD(Rm, pm, Em)
    }

    function yD(mm, Tm, fm) {
      var hm;
      let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (aD) return;
      wA.d.unwantedLeave(fm && null !== Tm && 0 === zw.size), null === (hm = Jw) || void 0 === hm || hm.abort();
      const am = new AbortController;
      Jw = am;
      const xm = null === Tm ? null : () => {
        am.signal.aborted || (am.abort(), Tm())
      };
      if (fm && null !== xm) {
        nw = performance.now();
        const mm = setTimeout(xm, Gm.b);
        am.signal.addEventListener("abort", (() => {
          clearTimeout(mm)
        }))
      }
      const wm = {
        code: mm.code,
        name: mm.name,
        reason: mm.reason,
        reasonKey: Am.reasonKey,
        reconnect: xm,
        reconnecting: fm,
        requiresRefresh: mm.requiresRefresh,
        canPlayAgain: Am.canPlayAgain
      };
      if (zw.size > 0)
        for (const im of [...zw]) try {
          im(wm)
        } catch (Dm) {
          console.error(`${ba} an unwanted-leave listener threw`, Dm)
        } else kh((0, ch.h)(mm, null !== xm, fm), am.signal).then((Tm => {
          Tm && (null !== xm ? xm() : mm.requiresRefresh && (0, Bm.h)())
        }))
    }
    const CD = {
      attachSocket: mm => LD(mm),
      onConnection: mm => (Sw.add(mm), () => {
        Sw.delete(mm)
      }),
      sendRaw: (mm, Tm) => {
        const fm = qx;
        return null !== fm && fm.conn === mm && ui(fm, Tm)
      },
      leaveRoom: zD,
      closeSocket: mm => {
        var Tm;
        (null === (Tm = qx) || void 0 === Tm ? void 0 : Tm.conn) === mm && vD()
      },
      flushNet: tD
    };

    function rD(mm) {
      var Tm;
      let {
        aux: fm,
        payload: hm
      } = mm;
      null === (Tm = Ax) || void 0 === Tm || Tm.queueOptions(fm, hm)
    }

    function sD(mm, Tm) {
      rD(function(mm, Tm) {
        return KA = mm ? {
          preventMovement: Tm
        } : null, mm ? QA(Tm) : {
          aux: MT.cc.AdEnd,
          payload: IA
        }
      }(mm, Tm))
    }

    function lD(mm) {
      var Tm;
      hw = mm, null === (Tm = Ax) || void 0 === Tm || Tm.setUiPrefs(mm)
    }

    function MD(mm, Tm) {
      Dx.setMaster(mm, Tm)
    }

    function uD(mm) {
      var Tm;
      Aw = mm, null === (Tm = Ax) || void 0 === Tm || Tm.setEnvPrefs(mm)
    }

    function BD(mm) {
      var Tm;
      aw = mm, null === (Tm = Ax) || void 0 === Tm || Tm.setLookPrefs(mm)
    }

    function LD(mm) {
      var Tm;
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(mm.url).origin,
        hm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (mm.readyState === WebSocket.CLOSING || mm.readyState === WebSocket.CLOSED) return console.warn(`${ba} a closing or closed socket can't be attached`), null;
      const Am = Ax;
      if (!Am || Am.isStopped) return console.warn(`${ba} no core is running to attach a socket to`), mm.close(), null;
      if (null === (0, Jm.i)()) return console.warn(`${ba} the game has not started to attach a socket to`), mm.close(), null;
      if (Mx > MT.B) return console.warn(`${ba} this core has attached all the sockets it can; reload to play on`), mm.close(), null;
      if (Fx && !dx && (Ni(Am, !1, "all"), Am.isStopped || wD)) return mm.close(), null;
      vD();
      const am = Mx++;
      if (!wi(Am, "open", am, hm ? MT.ac.Resume : 0)) return mm.close(), null;
      hm || jT.b.reset(), Qw = null === Dw ? null : {
        join: Dw,
        conn: am,
        activated: !1
      }, mm.binaryType = "arraybuffer";
      const xm = new jf.d((() => {
          ! function(mm, Tm) {
            if (qx !== Tm || mm.isStopped || null === gD(Tm, sa)) return;
            Tm.detach(), qx = null, dD(mm, Tm, sa, "", !0), Tm.ws.close()
          }(Am, wm)
        })),
        wm = {
          ws: mm,
          conn: am,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: hm,
          token: null,
          detach: () => {
            xm.dispose(), mm.removeEventListener("message", Dm), mm.removeEventListener("open", im), mm.removeEventListener("close", Rm)
          }
        },
        Dm = mm => {
          if (mm.data instanceof ArrayBuffer) {
            var Tm;
            const fm = new Uint8Array(mm.data);
            xm.heard(), wm.token = null !== (Tm = (0, Vf.d)(fm)) && void 0 !== Tm ? Tm : wm.token,
              function(mm, Tm, fm) {
                mR(mm, (() => {
                  mm.rings.net.writeFrame(Tm, fm) || mm.crash(Af.s, `a socket frame of ${fm.byteLength} bytes did not fit the net-in ring`)
                }));
                const hm = mm.rings.net.cursor >= ra;
                !AR() && (hm || mm.netWrittenSinceFrame >= Ca) && Ni(mm, !1, document.hidden ? "all" : "budget");
                xR(mm)
              }(Am, am, fm)
          }
        },
        im = () => {
          hm || (0, Om.j)("wasm_socket_open", performance.now());
          for (const Tm of wm.pending.splice(0)) mm.send(Tm);
          wm.pendingBytes = 0
        },
        Rm = mm => {
          if (qx === wm && Am.rings.net.cursor > 0 && Ni(Am, !1, "all"), qx === wm) {
            if (wm.detach(), qx = null, dD(Am, wm, mm.code, mm.reason) || UD(Am, wm)) return;
            wi(Am, "close", am), WD(am, wm.left), HD(am, mm.code, mm.reason)
          }
        };
      return mm.addEventListener("message", Dm), mm.addEventListener("open", im), mm.addEventListener("close", Rm), qx = wm, null === (Tm = (0, Jm.i)()) || void 0 === Tm || Tm.socketAttached(am), (0, Em.r)({
        websocketUrl: fm
      }), am
    }

    function vD() {
      const mm = qx;
      if (!mm) return;
      const Tm = Ax,
        fm = mm.resume;
      fm && (tD(), qx !== mm) || (qx = null, mm.detach(), mm.ws.close(), null !== Tm && (UD(Tm, mm) || fm && dD(Tm, mm, la)) || (null !== Tm && wi(Tm, "close", mm.conn), WD(mm.conn, mm.left)))
    }

    function tD() {
      const mm = Ax;
      null !== mm && !mm.isStopped && !wD && !dx && mm.rings.net.cursor > 0 && Ni(mm, !1, "all")
    }

    function UD(mm, Tm) {
      var fm;
      if (!Tm.resume) return !1;
      const hm = Yw;
      return null !== hm && null !== Tm.token && "" !== Tm.token && (hm.pendingHold = {
        conn: Tm.conn,
        token: `${hm.roomId}:${Tm.token}`
      }), wi(mm, "close", Tm.conn), null === (fm = (0, Jm.i)()) || void 0 === fm || fm.socketDetached(Tm.conn), !0
    }

    function dD(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const am = gD(Tm, fm);
      if (null === am) return !1;
      const {
        ni: xm,
        token: wm,
        game: Dm,
        joinedAt: im
      } = am;
      if (!wi(mm, "close", Tm.conn, MT.I.Held)) return !0;
      console.warn(`${ba} the game's connection ${Am?"went silent":`dropped with code ${fm}`}, holding it`);
      const Rm = {
        closeReason: hm,
        sinceJoinedMs: performance.now() - im,
        game: Dm
      };
      return (0, zf.reportDisconnect)((0, Gm.k)(fm), ix, Rm, Am ? "silent" : void 0), xm.heldConn = Tm.conn, xm.dropCode = fm, xm.pendingHold = {
        conn: Tm.conn,
        token: `${xm.roomId}:${wm}`
      }, dx || Ni(mm, !1, "all"), !0
    }

    function gD(mm, Tm) {
      const fm = Yw,
        Am = Ow,
        am = mm.token;
      return null === fm || null === Am || wD || mm.left || Am.conn !== mm.conn || null === am || "" === am ? null : (0, hm.h)(Tm) && fm.resume.canHoldSeat() ? {
        ni: fm,
        token: am,
        game: Am.game,
        joinedAt: Am.joinedAt
      } : null
    }

    function WD(mm, Tm) {
      var fm;
      null === (fm = (0, Jm.i)()) || void 0 === fm || fm.closeGame(mm), (0, VA.b)().close(mm), Tm || (0, Em.r)({
        websocketUrl: null
      })
    }

    function FD() {
      const mm = Vw;
      if (null === mm) return;
      const Tm = (0, Jm.i)();
      wD || null === Tm || Tm.nS(mm) ? Vw = null : performance.now() - mw.pause >= La && (mw.pause = performance.now(), console.warn(`${ba} the cmd ring had no room for SetPaused(${mm}): written before the next frame`))
    }

    function mi() {
      const mm = Yw;
      Yw = null, null === mm || void 0 === mm || mm.resume.dispose()
    }

    function Ti(mm, Tm) {
      var fm, hm;
      const {
        heldConn: Am
      } = mm, am = mm.resume.resumingConn;
      mm.heldConn = 0, mm.pendingHold = null, Yw === mm && (Yw = null), "left" === Tm ? mm.resume.leave() : mm.resume.dispose(), 0 === jw || (null === (fm = qx) || void 0 === fm ? void 0 : fm.conn) !== jw || "left" === Tm && (null === (hm = xw) || void 0 === hm ? void 0 : hm.conn) === jw || xi(jw), "gaveUp" === Tm && 0 !== am && xi(am), 0 !== Am && "refused" !== Tm && (console.info(`${ba} the game held through its drop ${"left"===Tm?"was left":"is given up"}`), null === Ax || Ax.isStopped || wi(Ax, "close", Am), WD(Am, !1))
    }

    function fi(mm, Tm) {
      const fm = Tm.indexOf(":");
      return {
        roomId: fm < 0 ? mm.roomId : Tm.slice(0, fm),
        roomToken: Tm.slice(fm + 1)
      }
    }

    function Ai(mm) {
      (0, af.logClientMeasurement)("join_preload", mm, {
        client: "wasm"
      })
    }

    function ai(mm) {
      var Tm;
      qw = mm, mm.conn === jw && (jw = 0);
      const fm = Yw;
      null !== fm && (null === (Tm = Ow) || void 0 === Tm ? void 0 : Tm.conn) === mm.conn && fm.resume.onInitialInfo(mm)
    }

    function xi(mm) {
      var Tm;
      const fm = qx;
      (null === fm || void 0 === fm ? void 0 : fm.conn) === mm && (fm.left = !0, null === (Tm = (0, Jm.i)()) || void 0 === Tm || Tm.socketLeft(), (0, Em.r)({
        websocketUrl: null
      }), zD(mm) ? setTimeout((() => {
        qx === fm && vD()
      }), Xm.d) : vD())
    }

    function wi(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Am = !1;
      return mR(mm, (() => {
        const {
          net: am
        } = mm.rings;
        Am = "open" === Tm ? am.writeOpen(fm, hm) : am.writeClose(fm, hm), Am || mm.crash(Af.s, `a socket ${Tm} did not fit the net-in ring`)
      })), Am
    }

    function Di(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (ii()) {
        const hm = "browser" === mm && (0, qA.$)() ? "blockedAfterLoss" : "unsupported";
        return (0, zf.reportUnsupportedFallback)(mm, hm, Tm, fm), void Ri(`the wasm client can't run here (${Tm}; ${hm})`, hm)
      }(0, zf.showUnsupported)(mm, "unsupported", Tm, fm)
    }

    function ii() {
      return fD && "wasm" !== (0, OT.e)(window.location.search)
    }

    function Ri(mm, Tm) {
      console.warn(`${ba} ${mm}: reloading on the JS client`), null !== Tm && (0, OT.y)(Tm), (0, OT.x)(null === Tm ? "reloadOntoJs" : "decline");
      const fm = () => {
        (0, Bm.e)(OT.D)
      };
      (0, zf.flushCrashReports)(Bm.c).then(fm, fm)
    }

    function Ei(mm, Tm, fm, hm) {
      return Xw(mm, Tm, fm, hm)
    }

    function oi() {
      null === yw || null === Ax || Ax.isStopped || wD || null !== Nx || null === da || (Nx = yw(da, qi, ji().follow))
    }

    function Oi() {
      var mm, Tm, fm;
      return null !== (mm = null === (Tm = xx) || void 0 === Tm || null === (fm = Tm.textures) || void 0 === fm ? void 0 : fm.files()) && void 0 !== mm ? mm : null
    }

    function Yi(mm) {
      ji().follow((Tm => {
        null !== Tm && Promise.all([Promise.all([fm.e(201), fm.e(45)]).then((() => fm(51008))), (0, qA.X)()]).then((mm => {
          let [{
            followPagePackFiles: fm
          }, hm] = mm;
          const Am = null === hm || (0, hf.o)(hm) ? "webgl" : hm.backend;
          fm(Tm, xA.f, Am, (mm => {
            xA.f.setPageFiles(mm)
          }), qi)
        }), (Tm => {
          console.warn(`${ba} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Tm), mm()
        }))
      }))
    }

    function qi(mm, Tm) {
      console.warn(`${ba} ${mm}`, Tm)
    }

    function ji() {
      return ax ??= new XA({
        load: mm => Promise.all([fm.e(201), fm.e(54)]).then((() => fm(51012))).then((Tm => {
          let {
            startPageTexturePackFeed: fm
          } = Tm;
          return fm(qi, mm)
        })),
        store: Pf.e,
        IO: mm => {
          Ex.then((() => {
            (0, zf.reportTexturePackFeedLoadFailure)(mm, ix)
          }))
        }
      }), ax
    }
    const Vi = mm => ji().follow(mm);

    function Ii() {
      return ji().loaded()
    }
    const Ki = function(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Am = 0;
        return async function(am, xm) {
          let wm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Dm = ++Am,
            im = hm() + Tm,
            Rm = await
          function(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((hm => {
              const Am = setTimeout((() => {
                hm(null), mm.then((mm => {
                  null !== mm && (mm.joinedWithout(), fm(mm))
                }))
              }), Tm);
              mm.then((mm => {
                clearTimeout(Am), hm(mm)
              }))
            }))
          }(mm(am), Tm, (mm => {
            Dm === Am && wm() && xm(mm, hm() + Tm).catch((mm => {
              fm("the texture pack step after the join failed", mm)
            }))
          }));
          return null === Rm ? null : xm(Rm, im)
        }
      }((mm => (0, AT.k)(mm) ? ji().request() : ji().forJoin()), GA.d, qi),
      Qi = function(mm, Tm) {
        let fm = !1;
        return {
          setGamePackConfirm: mm => {
            fm = null !== mm, Tm(mm)
          },
          packStep: (Tm, hm, Am) => mm(Tm, hm, (() => fm && Am()))
        }
      }(Ki, (mm => {
        ji().setGamePackConfirm(mm)
      }));

    function ni(mm) {
      Qi.setGamePackConfirm(mm)
    }

    function Ji() {
      if (wD || null !== Mw || null === Cw || null === lw) return;
      const {
        backend: mm,
        canvas: Tm,
        fallbackReason: fm,
        adapterVendor: hm
      } = lw, Am = Cw;
      Cw = null;
      try {
        Mw = Am({
          backend: mm,
          canvas: Tm,
          fallbackReason: fm,
          adapterVendor: hm,
          joinedGame: () => wD ? null : xw,
          inGame: zi,
          shaderPackReach: () => {
            var mm, Tm;
            return null !== (mm = null === (Tm = yx) || void 0 === Tm ? void 0 : Tm.reachInJoinedGame()) && void 0 !== mm ? mm : null
          },
          FY: () => Gx,
          msaa: () => sw > 1,
          writeCmd: (mm, Tm, fm) => null !== da && da(mm, Tm, fm),
          takeFailedMeshJobs: () => {
            var mm, Tm;
            return null !== (mm = null === (Tm = Kx) || void 0 === Tm ? void 0 : Tm.takeFailedMeshJobs()) && void 0 !== mm ? mm : 0
          },
          readLoadCounts: mm => {
            var Tm, fm;
            return null !== (Tm = null === (fm = Ax) || void 0 === fm ? void 0 : fm.readLoadCounts(mm)) && void 0 !== Tm && Tm
          },
          mainStalled: (mm, Tm, fm) => {
            (0, zf.reportMainStall)(mm, Tm, fm, ix)
          }
        })
      } catch (am) {
        console.error(`${ba} the frame telemetry didn't start`, am)
      }
    }

    function ci(mm, Tm) {
      try {
        var fm, hm, Am;
        const am = ew && null !== (fm = null === (hm = Ax) || void 0 === hm || null === (Am = hm.lastHeader) || void 0 === Am ? void 0 : Am.renderPending) && void 0 !== fm ? fm : 0;
        (0, ah.e)(Tm, mm, zi() && !(null !== KA), am)
      } catch (am) {
        (0, ah.w)(), console.error(`${ba} the quality steps stopped`, am)
      }
    }

    function zi() {
      return null !== xw && Fw === xw && !wD
    }

    function Zi(mm) {
      const Tm = Mw;
      Mw = null;
      try {
        null === Tm || void 0 === Tm || Tm.stop()
      } catch {}
      console.error(`${ba} the frame telemetry threw: it stops`, mm)
    }

    function ki(mm) {
      var Tm, fm, hm, Am;
      if ((0, VA.b)().fire(mm), "message" === mm.type) {
        if (gx++, mm.Hi === MT.Jc.ERROR && null !== Dw) {
          var am;
          const {
            text: Tm,
            dropsCache: fm
          } = (0, Gm.p)((new TextDecoder).decode(mm.payload));
          Zw ||= fm, (null === (am = Qw) || void 0 === am ? void 0 : am.conn) === mm.conn && (kw = Tm)
        } else if (mm.Hi === uT.gc.ResumeComplete) {
          var xm;
          null === (xm = Yw) || void 0 === xm || xm.resume.onResumeComplete(mm.conn)
        }
        return
      }
      mm.phase === MT.L.Left ? Wx = mm.conn : mm.phase === MT.L.Activated && (null === (Tm = Qw) || void 0 === Tm ? void 0 : Tm.conn) === mm.conn ? Qw.activated = !0 : mm.phase === MT.L.Resumed ? function(mm) {
        var Tm, fm;
        jw = mm;
        const hm = Yw;
        if (null === hm || 0 === hm.heldConn || (null === (Tm = qx) || void 0 === Tm ? void 0 : Tm.conn) !== mm || !qx.resume || null === Ow) return;
        console.info(`${ba} the game resumed on conn ${mm}, waiting for its InitialInfo`);
        const Am = hm.heldConn;
        hm.heldConn = 0, qx.resume = !1, Ow.conn = mm, (null === (fm = Ew) || void 0 === fm ? void 0 : fm.conn) === Am && (Ew = {
          conn: mm,
          info: Ew.info
        }), jT.b.apply({
          shopInfo: null,
          _shopVersion: aT.c
        })
      }(mm.conn) : mm.phase === MT.L.Held ? function(mm) {
        var Tm;
        const fm = Yw,
          hm = null !== (Tm = null === fm || void 0 === fm ? void 0 : fm.pendingHold) && void 0 !== Tm ? Tm : null;
        if (null !== fm && null !== hm && hm.conn === mm) return fm.pendingHold = null, fm.heldConn = mm, jw = 0, console.warn(`${ba} the core holds the game, reconnecting`), void fm.resume.onDropped(hm.token);
        if (mm === jw) {
          jw = 0;
          const Tm = Ax;
          null === Tm || Tm.isStopped || (console.info(`${ba} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), wi(Tm, "close", mm))
        }
      }(mm.conn) : mm.phase === MT.L.Closed && (null === (fm = Yw) || void 0 === fm || null === (hm = fm.pendingHold) || void 0 === hm ? void 0 : hm.conn) === mm.conn && (Yw.heldConn === mm.conn ? function(mm) {
        const Tm = mm.heldConn,
          fm = mm.dropCode;
        Ti(mm, "refused"), console.info(`${ba} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          WD(Tm, !1), HD(Tm, fm, "", !0)
        }))
      }(Yw) : Yw.pendingHold = null);
      const wm = Object.keys(MT.L).find((Tm => MT.L[Tm] === mm.phase)),
        Dm = 0 === mm.code ? "" : ` (code ${mm.code})`;
      console.info(`${ba} conn ${mm.conn}: ${null!==wm&&void 0!==wm?wm:mm.phase}${Dm}, ${gx} raw messages so far`), (null === (Am = xw) || void 0 === Am ? void 0 : Am.conn) !== mm.conn || mm.phase !== MT.L.Left && mm.phase !== MT.L.Closed || cD(null), pw !== mm.conn || mm.phase !== MT.L.Left && mm.phase !== MT.L.Closed || (pw = null, null === xw && null === Dw && wA.d.setGame(void 0));
      for (const Rm of [...Sw]) try {
        Rm(mm.conn, mm.phase, mm.code)
      } catch (im) {
        (0, BT.m)(im, `${ba} a connection listener threw`)
      }
    }

    function bi() {
      (0, qA.t)(), queueMicrotask((() => {
        try {
          Bi()
        } catch (mm) {
          console.warn(`${ba} stopping before the reload threw`, mm)
        }(0, zf.flushCrashReports)(Bm.c).then(Bm.h, Bm.h)
      }))
    }

    function Si() {
      const mm = Ax;
      null === mm || mm.isStopped || null === qx || dx || !mm.hasPendingCommands() || Ni(mm, !1, "budget")
    }

    function ei(mm) {
      var Tm;
      const fm = xw;
      mm.persisted || null === fm || (null === (Tm = qx) || void 0 === Tm ? void 0 : Tm.conn) !== fm.conn || qx.left || fm.leave()
    }

    function Ni(mm, Tm, hm) {
      let Am = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const am = dx;
      dx = !0;
      try {
        const am = mm.rings.net.cursor >= ra;
        am && "all" !== hm && !document.hidden && vi("backlog", `a shown tab's net-in is ${mm.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(mm, Tm, hm, Am) {
          var am, xm, wm, Dm;
          if (wD) return !1;
          if (mR(mm, Xi), wD || mm.isStopped) return !1;
          li() && sx("modelsIn");
          FD(), ux = performance.now(), Wx = null, Fx = !1, (0, nm.K)(), null === (am = Zx) || void 0 === am || am.beforeFrame(), Ih(ux, mm), (0, nm.F)(ux, Pi), Ux = !0;
          const im = Tm && si();
          let Rm;
          try {
            Rm = mm.frame(ux, im, hm)
          } finally {
            Ux = !1
          }
          if (!Rm) return !1;
          rw.observe(null !== (xm = null === (wm = mm.lastHeader) || void 0 === wm ? void 0 : wm.chunksCancelled) && void 0 !== xm ? xm : 0);
          const pm = mm.lastFrameKind,
            Em = (0, ST.b)(pm);
          (function(mm) {
            null !== dA && dA.afterFrame(performance.now(), mm)
          })(Em), null === (Dm = uw) || void 0 === Dm || Dm.frame(mm, ux, pm), Tm && (mD = Em);
          Em && (0, ZT.d)(ux);
          if (null !== Mw) try {
            Mw.frameRan(mm, ux, performance.now(), pm)
          } catch (Ym) {
            Zi(Ym)
          }
          "drawn" === pm && ri() && function() {
            for (const mm of [...OA]) mm()
          }();
          mm.forEachNetOut(Mi);
          const om = qx;
          null !== Wx && (null === om || void 0 === om ? void 0 : om.conn) === Wx && ui(om, Xm.i);
          Ci(mm),
            function(mm) {
              const Tm = 0 !== (mm.headerWord(uT.L.LoadSteps) & uT.Y.JoinPreload);
              Tm !== Rw && (Rw = Tm, (0, zf.setCrashAdPreload)(Tm), (0, Nf.F)())
            }(mm), Tm && function(mm) {
              var Tm, hm, Am;
              if (null === xw || !si()) return;
              const am = mm.headerWord(uT.L.LoadSteps);
              null === Ww || Fw === xw && !Ww.frame(ux, 0 !== (am & uT._.TerrainDrawn)) || (Ww = null);
              if (0 === (am & uT.Y.PlayerBound)) return;
              const xm = mm.lastHeader,
                wm = !ew || 0 === (null === xm || void 0 === xm ? void 0 : xm.renderPending);
              !tw && wm && (tw = !0, performance.mark(ya));
              if (Fw === xw) return;
              const Dm = null !== (Tm = null === xm || void 0 === xm ? void 0 : xm.firstView) && void 0 !== Tm ? Tm : MT.ab.NotYet;
              if (ew && Dm === MT.ab.NotYet) return;
              if (vw && (!0 !== (null === (hm = (0, Jm.i)()) || void 0 === hm ? void 0 : hm.isSessionLive) || !wm)) return;
              Fw = xw;
              const im = xw;
              if (setTimeout((() => {
                  xw === im && (0, Om.g)()
                }), 0), null === (Am = yx) || void 0 === Am || Am.playable(), function() {
                  clearTimeout(Yx), Yx = setTimeout((() => {
                    zi() && hR((mm => {
                      let {
                        prefetchWorldgenWorker: Tm
                      } = mm;
                      Tm()
                    }))
                  }), Ua)
                }(), vw) return;
              vw = !0, performance.mark(Ha), (0, MA.o)("render") && Promise.all([fm.e(77), fm.e(48)]).then((() => fm(4624))).then((mm => {
                let {
                  renderDebugPlayable: Tm
                } = mm;
                Tm()
              }), (mm => {
                console.warn("The render debug topic didn't load", mm)
              }));
              const Rm = Math.round(performance.now()),
                pm = mm.readViewQueuedPrograms();
              null !== pm && (0, Om.j)("wasm_view_links", Rm, (0, wT.db)(pm));
              if (ew && Dm !== MT.ab.Drawn) {
                const Tm = Dm === MT.ab.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: fm
                  } = Hi(mm);
                if (console.warn(`${ba} playable at ${Rm} ms on the first view's ${Tm} backstop, ${fm}: it wasn't drawn whole in time`), (0, Om.j)("wasm_view_backstop", Rm, `${Tm}:${fm}`), "long" === Tm) {
                  var Em, om;
                  const Tm = null !== (Em = null === (om = Ow) || void 0 === om ? void 0 : om.game) && void 0 !== Em ? Em : "";
                  Ww = new Hf.b((() => {
                    const {
                      cause: fm,
                      census: hm
                    } = Hi(mm);
                    (0, zf.reportFirstViewNoTerrain)(Tm, fm, hm, ix), (0, oT.p)("noTerrain")
                  }))
                }
              } else console.info(`${ba} playable at ${Rm} ms${ew?"":" (no renderer)"}`);
              setTimeout(Hw, 0), (0, IT.f)().catch((mm => {
                console.error(`${ba} item sprites didn't load, so item particles show the missing texture`, mm)
              })), Wh.e.warm()
            }(mm);
          (0, Af.L)(mm, {
            worldgen: Vx,
            mesh: Kx
          }),
          function(mm) {
            mm.forEachEvent(Qh);
            for (const Tm of Kh) try {
              (0, Oh.b)(Tm)
            } catch (Ym) {
              if ((0, BT.k)(Ym)) {
                mm.crashOn(Af.n, Ym);
                break
              }
              console.error(`${qh} an input action listener threw`, Ym)
            }
            Kh.length = 0
          }(mm), Am && (0, bT.b)();
          return !mm.isStopped
        }(mm, Tm, "all" === hm || am, Am)
      } finally {
        dx = am, am || (Bx = performance.now())
      }
    }

    function Gi(mm) {
      console.error(`${ba} a frame-start listener threw`, mm)
    }

    function Xi() {
      var mm, Tm, fm, hm;
      null === (mm = bx) || void 0 === mm || mm.drain(da, ga), null === (Tm = Xx) || void 0 === Tm || Tm.drain(da), null === (fm = Px) || void 0 === fm || fm.drain(performance.now()), Pw(da), null === (hm = Nx) || void 0 === hm || hm.drain()
    }

    function Pi(mm) {
      console.error(`${ba} a before-frame listener threw`, mm)
    }

    function Hi(mm) {
      const Tm = (0, Jm.i)(),
        fm = (0, Jm.s)(),
        hm = null === Tm || null === fm ? null : fm.readDrawCensus(Tm.api);
      return {
        cause: (0, Hf.e)(mm.headerWord(uT.L.LoadSteps), hm),
        census: hm
      }
    }
    const yi = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Ci(mm) {
      var Tm;
      if (vw) return;
      if (null === dw && si() && (dw = performance.now()), null === Dw && null === xw) return;
      null === dw || gw || (gw = !0, (0, Om.j)("wasm_startup_loaded", dw));
      let fm = 0;
      null !== xw ? fm = -1 : !0 === (null === (Tm = Qw) || void 0 === Tm ? void 0 : Tm.activated) && (fm = ~uT._.TerrainDrawn);
      const hm = mm.headerWord(uT.L.LoadSteps) & fm & ~Uw;
      if (0 === hm) return;
      Uw |= hm;
      const Am = performance.now();
      for (const [am, xm] of Object.entries(yi)) 0 !== (hm & uT._[am]) && (0, Om.j)(xm, Am)
    }

    function ri() {
      return ew && si()
    }

    function si() {
      return Hx && li()
    }

    function li() {
      return null === bx || bx.startupDone
    }

    function Mi(mm, Tm) {
      const fm = qx;
      (null === fm || void 0 === fm ? void 0 : fm.conn) === mm ? ui(fm, Tm) : fw++
    }

    function ui(mm, Tm) {
      const {
        ws: fm
      } = mm;
      return fm.readyState === WebSocket.OPEN ? (fm.send(Tm), !0) : fm.readyState === WebSocket.CONNECTING && mm.pendingBytes + Tm.byteLength <= Ba ? (mm.pending.push(Tm.slice()), mm.pendingBytes += Tm.byteLength, !0) : (fw++, !1)
    }

    function Bi() {
      var mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm;
      wD = !0, TD.stop(), (0, BA.c)(), dA = null, mi(), (0, nm.J)().unlockPointer(), (0, nm.G)(null), null === (mm = kx) || void 0 === mm || mm(), kx = null, null === (Tm = (0, Jm.s)()) || void 0 === Tm || Tm.followCursorAim(null), (0, bT.C)(), (0, Jm.f)(), Dx.stop(), null === (fm = Bw) || void 0 === fm || fm(), Bw = null, null === (hm = Lw) || void 0 === hm || hm(), Lw = null, null === (Am = Mw) || void 0 === Am || Am.stop(), Mw = null, (0, Cf.r)(null), null === (am = jx) || void 0 === am || am(), jx = null, null === (xm = Vx) || void 0 === xm || xm.stop(), Vx = null, null === (wm = Kx) || void 0 === wm || wm.stop(), Kx = null, null !== (Dm = xx) && void 0 !== Dm && null !== (im = Dm.textures) && void 0 !== im && im.assets && (0, AA.j)(null), null === (Rm = xx) || void 0 === Rm || Rm.stop(), xx = null, wx = null;
      const jm = Qx;
      Qx = null, jm && (jm.stop(), Fi(jm)), null === (pm = Xx) || void 0 === pm || pm.dispose(), Xx = null, null === (Em = Px) || void 0 === Em || Em.dispose(), Px = null, bx = null, null === (om = ex) || void 0 === om || om(), ex = null, null === (Om = zx) || void 0 === Om || Om(), zx = null, null !== tx && (clearTimeout(tx), tx = null), null === (Ym = Zx) || void 0 === Ym || Ym.stop(), Zx = null, QD(), wA.d.release(), vD();
      const Vm = Nx;
      Nx = null;
      try {
        null === Vm || void 0 === Vm || Vm.dispose()
      } catch (Im) {
        console.warn(`${ba} the sky's images didn't release`, Im)
      }(0, Fh.d)(null), null === (qm = fx) || void 0 === qm || qm.pagePreviews().endSession(null === (0, DT.p)())
    }

    function Li(mm, Tm) {
      var fm, hm;
      const Am = null !== (fm = null === (hm = Qx) || void 0 === hm ? void 0 : hm.details()) && void 0 !== fm ? fm : {},
        am = mm.site === ea || mm.site === Na || mm.site === zf.RENDER_RELOAD_SITE || mm.site === Ga ? mm.error instanceof WebAssembly.RuntimeError || mm.error instanceof FT.e : !(0, hf.p)(mm.error) && (0, Af.F)(mm);
      am && mm.error instanceof Error && (0, DT.W)(mm.error);
      const xm = am || mm.site === Af.t ? (0, zf.readTrap)(mm.error) : null,
        wm = null !== xm && (0, vT.g)(xm.kind, xm.refusedBytes) ? xm.refusedBytes : 0,
        Dm = (0, Kf.k)(),
        im = null === nx ? (0, Uh.w)(function() {
          try {
            return (0, DT.w)().buffer.byteLength
          } catch {
            return 0
          }
        }(), wm, Dm) : nx.ceilingMayRefuse(wm, Dm),
        Rm = wm > 0 && !im && ii();
      var pm;
      if (Rm && ((0, OT.y)("oom"), (0, OT.x)("decline"), xD = !0), Bi(), (0, qA.e)()) return console.warn(`${ba} the session stopped at ${mm.site} as the page reloads`, mm.error), void((0, hf.p)(mm.error) || (null === (pm = mm.header) || void 0 === pm ? void 0 : pm.lastError) === MT.Q.CoreBusy || (0, zf.reportStoppedCore)(mm, Tm, xm, {
        memoryDetails: Am,
        declined: Rm
      }));
      (0, zf.showCrash)(mm, Tm, xm, {
        memoryDetails: Am,
        declined: Rm
      })
    }

    function vi(mm, Tm) {
      const fm = performance.now();
      return !(fm - mw[mm] < La) && (mw[mm] = fm, console.warn(`${ba} ${Tm}`), !0)
    }

    function ti(mm) {
      const {
        input: Tm,
        net: fm,
        worker: hm
      } = mm.rings, Am = mm.optionsDropped, am = Tm.dropped + Am + fm.dropped + hm.dropped + fw;
      am !== Tw && vi("dropped", `${am} records dropped so far (input ${Tm.dropped}, options ${Am}, net ${fm.dropped}, worker ${hm.dropped}, net-out ${fw})`) && (Tw = am)
    }

    function Ui() {
      var mm, Tm;
      const fm = (0, ef.e)();
      if (null === fm) return null;
      const hm = (0, Xf.n)(fm);
      return {
        ...hm,
        horizontal: Math.min(hm.horizontal, null !== (mm = null === (Tm = Qx) || void 0 === Tm ? void 0 : Tm.shedDistanceInUse()) && void 0 !== mm ? mm : 1 / 0)
      }
    }

    function di(mm) {
      var Tm, fm;
      return {
        samples: ew ? sw : null,
        sunShadows: mm,
        renderDistance: null !== (Tm = null === (fm = Ui()) || void 0 === fm ? void 0 : fm.horizontal) && void 0 !== Tm ? Tm : null
      }
    }

    function gi(mm) {
      iw = mm, (0, Nf.F)()
    }

    function Wi() {
      var mm, Tm, fm;
      const hm = Ui();
      return {
        ...null === (mm = Qx) || void 0 === mm ? void 0 : mm.pageKillSnapshot(),
        renderDistance: null !== (Tm = null === hm || void 0 === hm ? void 0 : hm.horizontal) && void 0 !== Tm ? Tm : null,
        renderDistanceVertical: null !== (fm = null === hm || void 0 === hm ? void 0 : hm.vertical) && void 0 !== fm ? fm : null,
        chunkCap: Jx,
        budgetBasis: cx,
        renderBackend: (0, qA.O)(),
        adPreload: Rw,
        ...(0, Gf.e)(iw)
      }
    }

    function Fi(mm) {
      console.info(`${ba} wasm memory at the session's end`, mm.details())
    }

    function mR(mm, Tm) {
      if (!mm.isStopped) try {
        Tm()
      } catch (fm) {
        mm.crash(Af.u, fm)
      }
    }

    function TR() {
      return Ix ??= fm.e(71).then((() => fm(51020))).catch((mm => {
        throw Ix = null, mm
      })), Ix
    }
    async function fR() {
      const {
        createWorldgenWorker: mm,
        worldgenWorkerReady: Tm
      } = await TR();
      return await Tm(), mm
    }

    function hR(mm) {
      var Tm;
      null === (Tm = Ix) || void 0 === Tm || Tm.then(mm, (() => {}))
    }

    function AR() {
      return performance.now() - Math.max(Bx, Lx) >= va
    }

    function aR(mm) {
      const Tm = document.hidden || vx ? "all" : "budget";
      vx = !0;
      const fm = Ni(mm, !1, Tm);
      var hm;
      fm && (ti(mm), null === (hm = Qx) || void 0 === hm || hm.afterFrame());
      return fm
    }

    function xR(mm) {
      mm.isStopped || 0 === mm.rings.net.cursor || AR() && !aR(mm) || mm.rings.net.cursor > 0 && performance.now() - Lx >= va / 2 && function(mm) {
        tx ??= setTimeout((() => {
          tx = null, xR(mm)
        }), va)
      }(mm)
    }

    function wR(mm, Tm) {
      return async function(mm, Tm, fm) {
        let {
          stop: hm,
          stillWanted: Am,
          beforeReload: am
        } = fm;
        const xm = await (0, Nh.k)(mm, {
          stillWanted: Am,
          beforeReload: async () => {
            hm(), await Promise.all([(0, zf.flushCrashReports)(Bm.c), null === am || void 0 === am ? void 0 : am()])
          },
          reload: Bm.h
        });
        return xm || Tm(), xm
      }(mm, Tm, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: Bi
      })
    }
    let DR = !1;

    function iR() {
      return DR = !0, async function(mm, Tm, hm) {
        const {
          gamePackSource: Am
        } = await fm.e(271).then((() => fm(41120)));
        await Qi.packStep(mm, ((fm, hm) => fm.packForGame(mm, Am(Tm), hm)), hm)
      }(...arguments)
    }

    function RR(mm) {
      ! function(mm, Tm) {
        mm((mm => {
          null === mm || void 0 === mm || mm.subscribe((mm => {
            let {
              pack: fm,
              gameSource: hm
            } = mm;
            Tm(null === hm || null === fm ? null : {
              pack: fm,
              source: "" === hm ? null : hm
            })
          }))
        }))
      }(Vi, mm)
    }
    let pR = !1,
      ER = null,
      oR = !1,
      OR = !1;

    function YR() {
      var mm;
      pR || (pR = !0, oD("play", Mm), (0, Em.o)(new kR), wm.gameBridge.attach(Nm), QR().catch((() => {})), (0, Jm.u)((mm => {
        fT(mm.setTextHost)
      })), mm = VR, zw.add(mm), function(mm) {
        for (const Tm of Cx) mm(Tm);
        rx.add(mm)
      }((mm => {
        jR(qR[mm])
      })))
    }
    const qR = {
      booted: am.k.INITIALISE_NOA,
      texturesIn: am.k.REGISTRATION,
      modelsIn: am.k.SETUP_LIFEFORMS
    };

    function jR(mm) {
      Dm.j.gp("matchmakeAndPlayStepCompleted", {
        step: mm,
        totalSubSteps: 1
      })
    }

    function VR(mm) {
      if (!oR) return;
      const {
        gameNameWithVariation: Tm,
        lobbyName: fm
      } = (0, Em.d)();
      if (mm.code === hm.b.serverUpdating.code) return (new kR).leaveLive(), void KR(Tm, fm);
      Dm.j.gp("unwantedLeftGame", {
        reason: IR(mm),
        requiresRefresh: mm.requiresRefresh,
        canReconnect: null !== mm.reconnect,
        automaticallyReconnect: mm.reconnecting,
        canPlayAgain: mm.canPlayAgain,
        gameNameWithVariation: Tm,
        lobbyName: fm
      }), (new kR).leaveLive()
    }

    function IR(mm) {
      return null !== mm.reasonKey ? {
        translationKey: mm.reasonKey
      } : "gameOrPluginKick" === mm.name ? mm.reason : `You have disconnected from the server.\n${mm.reason}`
    }

    function KR(mm, Tm) {
      var hm;
      hm = (0, im.B)(mm, Tm), Promise.resolve().then((() => fm(1519))).then((mm => {
        let {
          navigatePreserveSearch: Tm
        } = mm;
        Tm(hm)
      })).catch((mm => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", mm), (0, Bm.d)(hm)
      }))
    }

    function QR() {
      return ER ??= Promise.all([fm.e(72), fm.e(75), fm.e(74), fm.e(73), fm.e(89), fm.e(86), fm.e(269), fm.e(189), fm.e(223), fm.e(247), fm.e(218), fm.e(46)]).then((() => fm(41069))).then((mm => {
        try {
          mm.attachPlayGameSources()
        } catch (Tm) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Tm),
            function(mm) {
              Ex.then((Tm => {
                null === Tm || Tm.isStopped || wD ? console.warn(`${ba} the play sources threw as they attached, after the client stopped`, mm) : Li({
                  site: Ga,
                  error: mm,
                  header: null
                }, ix)
              }))
            }(Tm), Tm
        }
      }), (mm => {
        throw ER = null, new Jm.d(mm)
      })), ER
    }
    async function nR(mm, Tm) {
      YR(), DR = !0, oR = !0;
      let fm = {
          place: mm.place,
          matchedAt: mm.matchedAt
        },
        xm = mm.place.gameNameWithVariation;
      const wm = (0, pm.e)();
      let Dm = null;
      const im = await jD({
        matchmake: async () => {
          let Tm = fm;
          if (fm = null, null === Tm) {
            const fm = await mm.rematch();
            if (fm.isError()) throw Dm = fm.asError().forward(), new Error(fm.asError().message);
            Tm = {
              place: fm.getValue(),
              matchedAt: performance.now()
            }
          }
          xm = Tm.place.gameNameWithVariation;
          return {
            target: await (0, Hm.e)(mm.userContext, Tm.place, Ii(), wm),
            matchedAt: Tm.matchedAt,
            freshMs: Hm.c
          }
        },
        pageReady: QR,
        onFailure: (mm, Tm) => {
          null === Dm && function(mm, Tm) {
            (0, zf.reportPageJoinFailure)(mm, ix, Tm)
          }(mm, {
            sinceJoinStartMs: Tm,
            game: xm
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => mm.userContext.invalidateTrafficCode(),
        signal: Tm
      });
      switch (im.kind) {
        case "joined":
          if (wm) {
            const {
              game: mm
            } = im;
            (0, pm.p)((() => {
              mm.endJoinAd() && (0, Om.i)()
            }))
          }
          return OR || (OR = !0, (0, qm.e)()), oR ? (jR(am.k.CONNECT_TO_GAME_SERVER), jR(am.k.SHADER_PACK), function() {
            var mm, Tm;
            return null !== (mm = null === (Tm = yx) || void 0 === Tm ? void 0 : Tm.runsInJoinedGame()) && void 0 !== mm && mm
          }() && (0, Ym.h)(mm.userContext, xm).catch((mm => {
            console.error("Failed to report the shader pack session", mm)
          })), function() {
            const mm = function() {
              var mm, Tm;
              return null !== (mm = null === (Tm = yx) || void 0 === Tm ? void 0 : Tm.couldntRunInJoinedGame()) && void 0 !== mm ? mm : null
            }();
            null !== mm && (0, Ym.d)(mm)
          }(), Am.e.value(void 0)) : ZR("The server ended the game as it joined");
        case "failed":
          if (!im.reloading) {
            if (null !== Dm) return Dm;
            if ((im.error instanceof Xm.j || im.error instanceof Xm.b) && im.error.code === hm.b.serverUpdating.code) {
              if (Tm.aborted) return ZR("Left the game while it loaded");
              const {
                gameNameWithVariation: mm,
                lobbyName: fm
              } = (0, Em.d)();
              return KR(mm, fm), ZR("The server is updating")
            }
            return im.error instanceof um.e ? Am.e.errorWithCode(im.error.messageKey, am.k.SHADER_PACK, {
              severity: "medium"
            }) : Am.e.errorWithCode(function(mm) {
              if (mm instanceof Xm.s || mm instanceof Km.e) return mm.message;
              if (JR(mm)) return (0, Gm.m)(mm.code, mm.serverText);
              return Gm.g
            }(im.error), am.k.CONNECT_TO_GAME_SERVER, {
              error: cR(im.error) ? im.error : void 0,
              severity: zR(im.error),
              gameServerUnreachable: (0, Pm.e)(im.error),
              joinFailure: (0, Pm.i)(im.error),
              rematch: (0, Vm.e)(im.error),
              gameRefused: (0, Im.c)(im.error)
            })
          }
          return ZR("Reloading into the new build");
        case "stopped":
          return ZR("The game client stopped, and shows why");
        case "Af":
          return ZR("Left the game while it loaded")
      }
    }

    function JR(mm) {
      return mm instanceof Xm.j || mm instanceof Xm.b && "attach" !== mm.stage
    }

    function cR(mm) {
      return !(mm instanceof Xm.s) && !JR(mm) && void 0 === (0, Pm.e)(mm)
    }

    function zR(mm) {
      return JR(mm) ? mm instanceof Xm.b && (0, Gm.k)(mm.code).requiresRefresh ? "medium" : "low" : cR(mm) || mm instanceof Xm.s ? "medium" : "low"
    }

    function ZR(mm) {
      return Am.e.errorWithCode(mm, am.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Af: !0
      })
    }
    class kR {
      leave(mm) {
        if ((0, Qm.b)()) {
          var Tm, fm;
          if ((0, xm.b)()) return;
          (0, om.b)(!0 === (null === (Tm = (0, Qm.j)()) || void 0 === Tm || null === (fm = Tm.currentViewer) || void 0 === fm ? void 0 : fm.unsavedChanges), mm)
        } else this.leaveLive()
      }
      leaveLive() {
        var mm;
        DR && (null === (mm = Ii()) || void 0 === mm || mm.endGamePack());
        if (!oR) return;
        oR = !1, (0, jm.f)();
        try {
          var Tm;
          null === (Tm = (0, Jm.s)()) || void 0 === Tm || Tm.clearWasmCameraScreen()
        } catch (hm) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", hm)
        }
        const {
          gameNameWithVariation: fm
        } = (0, Em.d)();
        try {
          kD()
        } finally {
          (0, Em.r)({
            websocketUrl: null
          }), Dm.j.gp("leaveGame", {
            gameNameWithVariation: fm
          }), (0, Rm.P)()
        }
      }
      isReplay() {
        return (0, Qm.b)()
      }
    }
  },
  41017: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am,
      g: () => hm,
      h: () => wm,
      k: () => xm
    });
    const hm = 12e4,
      Am = 3e4,
      am = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: mm => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", mm), () => {
          document.removeEventListener("visibilitychange", mm)
        })
      };

    function xm(mm) {
      return `it sent no start within ${Math.round(mm)} ms`
    }
    class wm {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : am;
        this.timeoutMs = mm, this.onTimeout = Tm, this.now = fm, this.visibility = hm, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = hm.listen((() => {
          this.onVisibility()
        })), hm.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const mm = this.step;
        return null === mm ? 0 : Math.min(this.now() - mm.at, mm.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const mm = this.timeoutMs - this.counted;
        if (mm <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Tm = Math.min(mm, 5e3);
        this.step = {
          at: this.now(),
          ms: Tm
        }, this.arm(Tm, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(mm, Tm) {
        this.timer = setTimeout((() => {
          this.timer = null, Tm()
        }), mm)
      }
    }
  },
  39762: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm
    });
    var hm = fm(354),
      Am = fm(1041);
    const am = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      xm = new Set(["creativeFlat", "skyGrid"]);

    function wm(mm) {
      const Tm = (0, hm.Pb)(mm);
      return "classic" !== Tm ? am.has(Tm) : !(0, Am.k)(mm) && !xm.has((0, hm.Jb)(mm))
    }
  },
  40921: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    const hm = {
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
  38824: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am
    });
    var hm = fm(2873);
    const Am = ["none", "idle", "now"];

    function am() {
      const mm = () => (0, hm.D)();
      return {
        memoryBytes: () => (0, hm.w)().buffer.byteLength,
        reserveUpFront: Tm => mm().np(Tm),
        reserveAhead: Tm => mm().Qp(Tm),
        setCeiling: Tm => {
          mm().Jp(Tm)
        },
        lowWater: () => Am[mm().Kp()] ?? "none",
        stats: () => function(mm) {
          const Tm = new Uint32Array((0, hm.w)().buffer, mm, 17),
            fm = mm => Tm[mm] ?? 0,
            Am = mm => ({
              upFront: fm(mm),
              ahead: fm(mm + 1),
              onDemandInFrame: fm(mm + 2),
              onDemand: fm(mm + 3)
            });
          return {
            memoryBytes: fm(0),
            initialBytes: fm(1),
            liveBytes: fm(2),
            peakLiveBytes: fm(3),
            headroomBytes: fm(4),
            unusedBytes: fm(5),
            ceilingBytes: fm(6),
            reservesRefused: fm(7),
            grows: Am(8),
            grownBytes: Am(12),
            allocationsRefused: fm(16)
          }
        }(mm().cp()),
        takeBallast: () => mm().zp(),
        takePressure: () => mm().Zp()
      }
    }
  },
  4989: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      c: () => xm,
      d: () => hm,
      g: () => Ym,
      i: () => pm,
      l: () => Am,
      o: () => am,
      q: () => im,
      r: () => Rm,
      t: () => Em
    });
    const hm = 5;

    function Am(mm) {
      return mm === hm
    }

    function am(mm) {
      return [...mm.features]
    }
    const xm = 262144,
      wm = 256,
      Dm = 256;

    function im(mm) {
      if ("object" !== typeof mm || null === mm || Array.isArray(mm)) return "The pack has no files.";
      const Tm = [];
      for (const [fm, hm] of Object.entries(mm)) {
        if ("string" !== typeof hm) return `${fm} isn't text.`;
        Tm.push({
          path: fm,
          source: hm
        })
      }
      return Tm.sort(((mm, Tm) => pm(mm.path, Tm.path))),
        function(mm) {
          if (0 === mm.length) return "The pack has no .wgsl files.";
          if (mm.length > wm) return `The pack has more than ${wm} .wgsl files.`;
          const Tm = new Set;
          for (const {
              path: fm
            }
            of mm) {
            const mm = om(fm);
            if (null !== mm) return mm;
            if (Tm.has(fm)) return `The pack has two files at ${fm}.`;
            Tm.add(fm)
          }
          return Em(mm) > xm ? `The pack's .wgsl files are over ${xm/1024} KB in total.` : null
        }(Tm) ?? Tm
    }

    function Rm(mm) {
      const Tm = {};
      for (const fm of mm) Tm[fm.path] = fm.source;
      return Tm
    }

    function pm(mm, Tm) {
      return mm < Tm ? -1 : mm > Tm ? 1 : 0
    }

    function Em(mm) {
      const Tm = new TextEncoder;
      let fm = 0;
      for (const {
          source: hm
        }
        of mm) fm += Tm.encode(hm).byteLength;
      return fm
    }

    function om(mm) {
      if (!mm.toLowerCase().endsWith(".wgsl")) return `${mm} isn't a .wgsl file.`;
      if (mm.length > Dm) return `A file path is over ${Dm} characters.`;
      if (mm.includes("\\") || /[\u0000-\u001f]/.test(mm)) return `${mm} isn't a valid file path.`;
      return mm.split("/").some((mm => "" === mm || "." === mm || ".." === mm)) ? `${mm} isn't a valid file path.` : null
    }
    const Om = /^(.*)\[rot\[([1-4])$/;

    function Ym(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const hm = new Map;
      Tm.forEach(((mm, Tm) => {
        let {
          numAnimStates: fm,
          animStartIdx: Am
        } = mm;
        for (let am = 1; am < fm; am++) hm.set(Am + am - 1, Tm)
      }));
      const Am = Object.entries(mm),
        am = new Map;
      for (const [Ym, qm] of Am) {
        const mm = Om.exec(Ym);
        "1" === mm?.[2] && am.set(mm[1], qm + 1)
      }
      const xm = mm => {
          const Tm = Om.exec(mm);
          return Tm && am.has(Tm[1]) ? {
            root: Tm[1],
            rotation: Number(Tm[2]) - 1
          } : null
        },
        wm = new Set(Am.map((mm => {
          let [Tm] = mm;
          return xm(Tm)?.root ?? Tm
        }))),
        Dm = (mm, fm) => {
          const hm = mm.replace(/_?0$/, "");
          return (Tm[fm]?.numAnimStates ?? 0) > 1 && !wm.has(hm) ? hm : mm
        },
        im = new Map;
      for (const [Om, Ym] of Am) im.set(Ym, Dm(xm(Om)?.root ?? Om, Ym));
      const Rm = Am.reduce(((mm, Tm) => {
          let [, fm] = Tm;
          return Math.max(mm, fm + 1)
        }), 0),
        pm = Array.from({
          length: Rm
        }, ((mm, Tm) => ({
          id: Tm + 1,
          rotation: 0
        }))),
        Em = new Map,
        om = new Map;
      for (const [Om, Ym] of Am) {
        const mm = xm(Om),
          Tm = hm.get(Ym);
        if (void 0 !== Tm) {
          const fm = im.get(Tm);
          om.set(Om, {
            name: Om,
            texture: fm,
            kind: "frame"
          }), mm && !om.has(mm.root) && om.set(mm.root, {
            name: mm.root,
            texture: fm,
            kind: "frame"
          });
          continue
        }
        const fm = im.get(Ym),
          Am = mm?.root ?? Om;
        if (fm !== Am && om.set(Am, {
            name: Am,
            texture: fm,
            kind: "frame"
          }), mm) {
          const Tm = am.get(mm.root);
          pm[Ym] = {
            id: Tm,
            rotation: mm.rotation
          }, Em.set(fm, Tm), om.set(Om, {
            name: Om,
            texture: fm,
            kind: "rotation"
          })
        } else Em.set(fm, Ym + 1)
      }
      for (const Om of Em.keys()) om.delete(Om);
      for (const [Om, Ym] of fm) {
        const mm = Em.get(Ym);
        void 0 === mm || Em.has(Om) || (Em.set(Om, mm), om.delete(Om))
      }
      return {
        named: [...Em].sort(((mm, Tm) => {
          let [fm] = mm, [hm] = Tm;
          return fm < hm ? -1 : fm > hm ? 1 : 0
        })).map((mm => {
          let [Tm, fm] = mm;
          return {
            name: Tm,
            id: fm
          }
        })),
        aliases: [...om.values()],
        layers: pm
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);