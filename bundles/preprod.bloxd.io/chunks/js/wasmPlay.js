export const id = 63;
export const ids = [63, 115, 116, 136];
export const modules = {
  39457: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      f: () => wC
    });
    const QC = "The world isn't loaded, so no blocks can be seen.",
      wC = "The world isn't loaded, so nothing in it can be seen."
  },
  38942: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => AC,
      g: () => xC,
      k: () => RC
    });
    var QC = ZC(4733),
      wC = ZC(2800),
      bC = ZC(1806);
    const nC = new Map(Object.entries(QC.m).map((CC => {
      let [zC, ZC] = CC;
      return [ZC, zC]
    })));

    function fC(CC) {
      return (0, bC.w)(CC).toFixed(1)
    }

    function oC(CC, zC) {
      return `camera set by ${nC.get(CC[zC+1])}: heading ${`${fC(CC[zC+2])} -> ${fC(CC[zC+4])}`} deg, pitch ${`${fC(CC[zC+3])} -> ${fC(CC[zC+5])}`} deg, at ${CC[zC].toFixed(1)} ms`
    }
    class qC {
      constructor(CC, zC) {
        this.width = CC, this.HW = zC, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(CC * zC)
      }
      push(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let QC = 0; QC < this.width; QC++) ZC[QC] = CC[zC + QC];
        return this.next = (this.next + 1) % this.HW, this.size = Math.min(this.size + 1, this.HW), ZC
      }
      lines() {
        const CC = [],
          zC = (this.next - this.size + this.HW) % this.HW;
        for (let ZC = 0; ZC < this.size; ZC++) {
          const QC = (zC + ZC) % this.HW * this.width;
          CC.push(Array.from(this.data.subarray(QC, QC + this.width)).join(","))
        }
        return CC
      }
    }
    const FC = 0,
      WC = 2,
      NC = 3,
      MC = 4;

    function gC(CC) {
      return Number.isFinite(CC) ? String(Math.round(10 * CC) / 10) : String(CC)
    }

    function SC(CC) {
      return Number.isFinite(CC) ? CC.toFixed(1) : String(CC)
    }
    class pC {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.qD = 0, this.pastLimit = 0, this.lockSkips = 0, this.Mp = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.qD > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.qD > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class PC {
      constructor() {
        var CC = this;
        this.remote = (0, wC.l)(), this.tally = new pC, this.records = new qC(10, this.remote ? 1 : 3600), this.events = new qC(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [QC, wC, bC, nC, fC, oC, qC, pC, PC, GC] = CC.records.push(zC, ZC), RC = CC.tally;
          switch (RC.frames++, qC) {
            case FC:
              return void RC.idle++;
            case MC:
              return void RC.Mp++;
            case NC:
              return RC.lockSkips++, void(0 === bC && 0 === nC || CC.outlier(`lock skip dropped raw (${gC(bC)}, ${gC(nC)}) at ${SC(QC)} ms`))
          }
          RC.looked++, Number.isFinite(wC) && (RC.dtMin = Math.min(RC.dtMin, wC), RC.dtMax = Math.max(RC.dtMax, wC), RC.dtSum += wC, wC > 0 && (RC.peakRate = Math.max(RC.peakRate, Math.hypot(fC, oC) / wC))), RC.raw[0] += bC, RC.raw[1] += nC, RC.turned[0] += fC, RC.turned[1] += oC;
          const AC = Math.abs(bC) > GC || Math.abs(nC) > GC,
            xC = `raw (${gC(bC)}, ${gC(nC)}) over ${SC(wC)} ms, limit ${gC(GC)}, filter v (${pC.toFixed(3)}, ${PC.toFixed(3)}) px/ms, at ${SC(QC)} ms`;
          qC === WC ? (RC.qD++, CC.outlier(`spike put right: ${xC} -> turned (${gC(fC)}, ${gC(oC)})`)) : AC ? (RC.pastLimit++, CC.outlier(`kept past limit: ${xC}`)) : wC > 50 && (RC.longFrames++, CC.remote || CC.outlier(`long frame: ${xC}, turned in full`))
        }, this.onMouseMove = CC => {
          const zC = this.tally,
            {
              movementX: ZC,
              movementY: QC
            } = CC;
          zC.events++;
          const wC = Math.max(Math.abs(ZC), Math.abs(QC));
          zC.eventMax = Math.max(zC.eventMax, wC);
          const bC = null !== document.pointerLockElement,
            nC = this.event;
          nC[0] = CC.timeStamp, nC[1] = ZC, nC[2] = QC, nC[3] = bC ? 1 : 0, this.events.push(nC), wC >= 200 && (zC.bigEvents++, this.eventOutlier(`big mousemove (${ZC}, ${QC}) at ${SC(CC.timeStamp)} ms, lock ${bC?"vq":"free"}`))
        }, this.onLockChange = () => {
          const CC = document.pointerLockElement;
          (0, wC.i)("look", `pointer lock ${CC?`gained (${CC.tagName.toLowerCase()})`:"lost"} at ${SC(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, wC.i)("look", `pointer lock request failed at ${SC(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, wC.i)("look", `page ${document.visibilityState} at ${SC(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const CC = this.tally;
          if (this.tally = new pC, !CC.moved() || this.remote && !CC.hasEvent()) return;
          const zC = CC.looked > 0 ? CC.dtSum / CC.looked : NaN,
            ZC = [`${CC.frames} frames (${CC.looked} looked, ${CC.idle} idle${"wasm"===this.client?`, ${CC.Mp} carried`:""})`, `dt avg ${SC(zC)} min ${SC(CC.dtMin)} max ${SC(CC.dtMax)}, ${CC.longFrames} long`, `${CC.events} mousemoves (max ${gC(CC.eventMax)} px, ${CC.bigEvents} big)`, `raw (${gC(CC.raw[0])}, ${gC(CC.raw[1])}) turned (${gC(CC.turned[0])}, ${gC(CC.turned[1])})`, `peak ${CC.peakRate.toFixed(2)} px/ms`, `put right ${CC.qD}, past limit ${CC.pastLimit}, lock skips ${CC.lockSkips}`, "lock " + (document.pointerLockElement ? "vq" : "free")];
          CC.dropped > 0 && ZC.push(`${CC.dropped} doubled spike copies dropped`), CC.cameraSets > 0 && ZC.push(`${CC.cameraSets} camera sets`), CC.cameraSetsLost > 0 && ZC.push(`${CC.cameraSetsLost} camera set records lost`), CC.lost > 0 && ZC.push(`${CC.lost} records lost`), CC.suppressed > 0 && ZC.push(`${CC.suppressed} outlier lines not shown`), (0, wC.i)("look", `1s: ${ZC.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(CC, zC) {
        this.client = CC, this.takes = zC;
        const {
          screen: ZC
        } = window;
        (0, wC.i)("look", `start: ${CC} client, dpr ${window.devicePixelRatio}, screen ${ZC.width}x${ZC.height}, pointer lock ${document.pointerLockElement?"vq":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, wC.e)("look", this.dump))
      }
      outlier(CC) {
        const zC = this.tally;
        zC.outliers >= 20 ? zC.suppressed++ : (zC.outliers++, (0, wC.i)("look", CC))
      }
      eventOutlier(CC) {
        const zC = this.tally;
        zC.eventLines >= 10 ? zC.suppressed++ : (zC.eventLines++, (0, wC.i)("look", CC))
      }
      takeRecords() {
        if (null === this.takes) return;
        const CC = this.takes.look();
        if (CC.length >= 2) {
          this.tally.lost += CC[0], this.tally.dropped += CC[1];
          for (let zC = 2; zC + 10 <= CC.length; zC += 10) this.record(CC, zC)
        }
        const zC = this.takes.cameraSets();
        if (zC.length >= QC.d) {
          this.tally.cameraSetsLost += zC[0];
          for (let CC = QC.d; CC + QC.h <= zC.length; CC += QC.h) this.tally.cameraSets++, this.outlier(oC(zC, CC))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let GC = null;

    function RC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return GC ??= new PC, GC.start(CC, zC), GC.record
    }

    function AC() {
      var CC;
      null === (CC = GC) || void 0 === CC || CC.endTake()
    }

    function xC() {
      var CC;
      null === (CC = GC) || void 0 === CC || CC.droppedCopy()
    }
  },
  34046: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    const QC = new Set(["chunkBorders"])
  },
  34194: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      g: () => wC,
      i: () => FC
    });
    var QC = ZC(1501);

    function wC(CC) {
      var zC;
      return {
        ...nC.store,
        yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
      }
    }
    const bC = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      nC = {
        player: bC,
        store: {
          ...bC,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function fC(CC, zC) {
      CC instanceof Promise ? CC.then(zC).catch((CC => {
        console.error("Couldn't open the preview", CC)
      })) : zC(CC)
    }
    class oC {
      constructor(CC) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, fC(CC, (CC => {
          this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height), null !== this.view && CC.show(this.view))
        }))
      }
      show(CC) {
        var zC;
        this.view = CC, null === (zC = this.opened) || void 0 === zC || zC.show(CC)
      }
      resize(CC, zC) {
        var ZC;
        this.size = {
          width: CC,
          height: zC
        }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
      }
      close() {
        var CC;
        this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
      }
    }
    class qC {
      constructor(CC) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(CC).then((CC => CC.ready)), fC(CC, (CC => {
          this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var CC, zC;
        return null !== (CC = null === (zC = this.opened) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
      }
      setCosmetic(CC, zC) {
        var ZC;
        null === (ZC = this.opened) || void 0 === ZC || ZC.setCosmetic(CC, zC)
      }
      playEmote(CC) {
        var zC;
        null === (zC = this.opened) || void 0 === zC || zC.playEmote(CC)
      }
      setOrbit(CC) {
        var zC;
        null === (zC = this.opened) || void 0 === zC || zC.setOrbit(CC)
      }
      resetCamera() {
        var CC;
        null === (CC = this.opened) || void 0 === CC || CC.resetCamera()
      }
      async untilDrawn(CC) {
        var zC;
        await this.ready, await (null === (zC = this.opened) || void 0 === zC ? void 0 : zC.untilDrawn(CC))
      }
      resize(CC, zC) {
        var ZC;
        this.size = {
          width: CC,
          height: zC
        }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
      }
      close() {
        var CC;
        this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
      }
    }
    const FC = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(CC) {
        this.host = CC
      }
      setDefaultHost(CC) {
        this.makeDefault = CC
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(CC) {
        return new oC(this.current().openMob(CC))
      }
      openPet(CC) {
        return new oC(this.current().openPet(CC))
      }
      openMobLineup(CC) {
        return new oC(this.current().openMobLineup(CC))
      }
      openCharacter(CC, zC) {
        return new qC(this.current().openCharacter(CC, zC))
      }
    }
  },
  4998: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC.j,
      f: () => wC,
      i: () => QC.q
    });
    var QC = ZC(5002);
    const wC = [!1, !0].flatMap((CC => ["terrain", "liquid", "model"].map((zC => ({
      strict: CC,
      program: zC
    })))))
  },
  39051: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      ShaderPackPage: () => oC,
      harnessShaderPackMode: () => NC,
      setHarnessUrlShaderPack: () => WC,
      shaderPackPage: () => FC
    });
    var QC = ZC(77),
      wC = ZC(38),
      bC = (ZC(3436), ZC(4998), ZC(3432)),
      nC = ZC(6660);
    ZC(6630);
    const fC = {
      status: "none"
    };
    class oC {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, bC.f)(QC.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), qC().then((CC => {
            CC && wC.i.removeItem(bC.b)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, bC.e)(QC.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const CC = await this.load();
        return "active" === CC.status ? CC.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((CC => (console.error("Failed to load the shader pack", CC), fC))).then((CC => (this.resolved ??= CC, CC))), this.pagePack
      }
      hasNone() {
        var CC;
        return "none" === (null === (CC = this.resolved) || void 0 === CC ? void 0 : CC.status)
      }
      block(CC) {
        this.resolved = {
          status: "blocked",
          messageKey: CC,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([ZC.e(77), ZC.e(133), ZC.e(140)]).then((() => ZC(41559))).then((CC => (CC.prefetchCompiler(), CC))), this.compiling
      }
      async readStored() {
        const CC = await qC();
        return CC && this.compiler().then((CC => CC.reconcileHint())).catch((CC => {
          console.error("Failed to correct the shader pack hint", CC)
        })), CC
      }
      async read() {
        const CC = await this.preload();
        return CC ? (await this.compiler()).compilePagePack(CC) : fC
      }
    }
    async function qC() {
      if (!(0, bC.g)(QC.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const CC = await (0, nC.e)(!0);
        return CC || wC.i.setItem(bC.b, !1), CC
      } catch (CC) {
        return console.error("Failed to read the stored shader pack", CC), wC.i.removeItem(bC.b), null
      }
    }
    const FC = new oC;

    function WC(CC, zC) {}

    function NC() {
      return null
    }
  },
  39100: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => WC,
      f: () => NC
    });
    var QC = ZC(134),
      wC = ZC(171),
      bC = ZC(1430),
      nC = ZC(2927),
      fC = ZC(1439),
      oC = ZC(36346),
      qC = ZC(625),
      FC = ZC(39051);

    function WC(CC) {
      (0, nC.reportClientError)("matchmake_failed", CC, QC.l[QC.l.SHADER_PACK])
    }
    async function NC(CC, zC) {
      var ZC;
      const QC = null === (ZC = await FC.shaderPackPage.preload()) || void 0 === ZC ? void 0 : ZC.listing,
        nC = (0, oC.d)();
      QC && null !== nC && await fC.d.reportShaderPackSession(CC, {
        packId: QC.packId,
        sourceHash: QC.sourceHash,
        game: (0, bC.f)(zC, wC.H, "other"),
        playSessionId: nC,
        visitSessionId: (0, qC.d)()
      })
    }
  },
  6660: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      e: () => bC
    });
    var QC = ZC(38);
    const wC = "shaderPack";
    async function bC() {
      var CC;
      let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
    }
  },
  6630: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      loadShaderPackTextures: () => nC,
      shaderPackTextures: () => fC
    });
    var QC = ZC(5002);
    let wC = null,
      bC = null;

    function nC() {
      return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zC,
          textureNameToIndex: ZC,
          textureAnimationData: bC
        } = CC;
        return wC ??= (0, QC.k)(ZC, bC, zC), wC
      })), bC
    }

    function fC() {
      if (null === wC) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return wC
    }
  },
  38879: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC
    });
    var QC = ZC(28),
      wC = ZC(1240),
      bC = ZC(2957);
    const nC = "Reconnecting";
    class fC {
      constructor(CC) {
        this.hooks = CC, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = CC => {
          CC.persisted || this.leave()
        }, this.controller = new bC.e((zC => CC.reconnect(zC)), {
          isSessionLive: () => !this.ended && CC.isLive(),
          onPhaseChanged: CC => {
            this.onPhaseChanged(CC)
          },
          onReconnected: zC => {
            CC.onReconnected(zC)
          },
          onGaveUp: zC => {
            !this.ended && CC.isLive() && CC.onGaveUp(this.sessionBased, zC)
          }
        })
      }
      onInitialInfo(CC, zC) {
        this.graceMs = CC, this.sessionBased = zC
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(CC) {
        this.ended || this.controller.onConnectionLost(CC, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const CC = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          zC = this.controller.heldToken;
        this.end(), CC && "" !== zC && this.hooks.releaseSeat(zC)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(CC) {
        const zC = (0, bC.s)(CC);
        zC !== this.stopped && (this.stopped = zC, this.hooks.freeze(zC));
        const ZC = "frozen" === CC || "resuming" === CC && this.frozen;
        ZC && !this.frozen ? (0, wC.u)(nC, {
          overridesPause: !0
        }) : !ZC && this.frozen && (0, wC.s)(nC), this.frozen = ZC, this.setListening("connected" !== CC), QC.o.bp(bC.p, ZC ? "frozen" : CC)
      }
      setListening(CC) {
        CC !== this.listening && (this.listening = CC, CC ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38883: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = CC, this.now = zC, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const CC = this.now(),
            zC = CC - this.lastCheckAt <= 2e3;
          this.lastCheckAt = CC;
          const ZC = "visible" === document.visibilityState;
          !ZC || zC && this.wasVisible || (this.resumedAt = CC), this.wasVisible = ZC, ZC && CC - this.lastHeardAt > 12e3 && CC - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = zC(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  34102: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(1029);

    function wC() {
      var CC, zC;
      return null !== (CC = null === (zC = screen.orientation) || void 0 === zC ? void 0 : zC.type) && void 0 !== CC ? CC : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const bC = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && wC() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = wC(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, QC.IS)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const CC of this.resizers) CC()
          }
        }), 1e3)
      }
      heldSizer(CC) {
        let zC = !1;
        return () => {
          if (zC && this.isHeld()) return null;
          const ZC = CC();
          return zC ||= null !== ZC, ZC
        }
      }
      onRelease(CC) {
        return this.resizers.add(CC), () => {
          this.resizers.delete(CC)
        }
      }
    }
  },
  39085: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC
    });
    let QC = !1;
    async function wC(CC, zC) {
      if (!QC) {
        QC = !0;
        try {
          const [{
            reloadBloxd: QC
          }, {
            NotificationProvider: wC
          }] = await Promise.all([Promise.resolve().then((() => ZC(1645))), Promise.resolve().then((() => ZC(1307)))]);
          if (!CC || !0 === await wC.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void QC(zC)
        } catch (wC) {
          console.error("Leaving the replay failed", wC)
        }
        QC = !1
      }
    }
  },
  38892: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC,
      f: () => FC
    });
    var QC = ZC(1633),
      wC = ZC(184),
      bC = ZC(1609),
      nC = ZC(1701),
      fC = ZC(1149),
      oC = ZC(1078);
    async function qC(CC, zC) {
      return function(CC) {
        return "object" === typeof CC && null !== CC && CC.code === wC.e.VpnIp.code
      }(zC) && function(CC) {
        return bC.d.supports("appCheck") && CC.isLoggedIn() && !CC.hasTriedAppAttestation()
      }(CC) && await async function(CC) {
        try {
          const {
            token: zC
          } = await (0, nC.d)(), {
            "3PSIDMCPP": ZC
          } = await (0, oC.postJsonWithMetricsCookiesAndJsonResponse)(`${fC.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: zC
          }, {
            retries: 0
          }, CC.getMetricsCookies());
          return CC.setAppAttestedAuthJwt(ZC), !0
        } catch (zC) {
          return zC instanceof QC.e && "failed" === zC.code ? (console.warn("The app couldn't get an App Check token:", zC), CC.markAppAttestationTried()) : console.error("Failed to attest the app:", zC), !1
        }
      }(CC)
    }
    async function FC(CC, zC) {
      try {
        return await zC()
      } catch (ZC) {
        if (!await qC(CC, ZC)) throw ZC
      }
      return zC()
    }
  },
  40805: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      e: () => oC
    });
    var QC = ZC(1664);
    const wC = 33177600,
      bC = 3e4;
    let nC = !1;

    function fC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: fC = 1,
        type: oC = "image/png",
        quality: qC
      } = QC;
      if (!CC.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (nC) return Promise.reject(new Error("A screenshot is already being taken"));
      nC = !0;
      const FC = function(CC, zC, ZC) {
        const QC = Math.max(1, CC),
          bC = Math.max(1, zC),
          nC = Math.min(1, ZC / Math.max(QC, bC), Math.sqrt(wC / (QC * bC)));
        return {
          width: Math.max(1, Math.floor(QC * nC)),
          height: Math.max(1, Math.floor(bC * nC))
        }
      }(zC, ZC, CC.maxTextureSize);
      return CC.resize(FC.width, FC.height, fC * FC.width / Math.max(1, zC)), new Promise(((zC, ZC) => {
        let QC, wC = 2,
          fC = null;
        const FC = () => {
          var zC;
          nC = !1, null === (zC = fC) || void 0 === zC || zC(), clearTimeout(QC), CC.restoreSize()
        };
        QC = setTimeout((() => {
          FC(), ZC(new Error("No frame was drawn to capture"))
        }), bC), fC = CC.onFrameDrawn((() => {
          if (wC--, wC > 0) return;
          const {
            canvas: QC
          } = CC, bC = {
            width: QC.width,
            height: QC.height
          };
          try {
            QC.toBlob((CC => {
              CC ? zC({
                blob: CC,
                ...bC
              }) : ZC(new Error("The canvas gave no image"))
            }), oC, qC)
          } catch (nC) {
            ZC(nC)
          } finally {
            FC()
          }
        }))
      }))
    }
    async function oC(CC, zC, ZC) {
      try {
        const wC = await fC(CC, zC, ZC);
        (0, QC.e)(wC.blob, `bloxd-screenshot-${wC.width}x${wC.height}-${Date.now()}.png`)
      } catch (wC) {
        console.error("Error taking screenshot:", wC)
      }
    }
  },
  38886: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      f: () => FC
    });
    var QC = ZC(184),
      wC = ZC(1740),
      bC = ZC(1152),
      nC = ZC(8897);
    const fC = [250, 500, 1e3, 2e3, 1250],
      oC = 406;

    function qC(CC) {
      if ("object" !== typeof CC || null === CC) return !1;
      const {
        code: zC,
        message: ZC
      } = CC, wC = QC.e.duplicateLobbyNameError;
      return (zC === wC.code || zC === oC) && (ZC === wC.text || ZC === wC.text + QC.k)
    }
    async function FC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.c;
      for (let wC = 0;; wC++) {
        let nC;
        (0, bC.n)(zC);
        try {
          return await CC()
        } catch (QC) {
          if (nC = fC[wC], void 0 === nC || !qC(QC)) throw QC
        }
        await ZC(nC, zC)
      }
    }
    const WC = new Set([QC.e.duplicateLobbyNameError.code, QC.e.lobbyCantBeCreated.code, QC.e.roomDisposedEarlyError.code, QC.e.roomDisposedLateError.code, QC.e.serverRoomLimitReached.code]);

    function NC(CC) {
      if (qC(CC)) return !0;
      const zC = (0, nC.e)(CC);
      return "number" === typeof zC && WC.has(zC)
    }
  },
  38992: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(310),
      wC = ZC(113),
      bC = ZC(38);

    function nC() {
      bC.i.setItem(QC.Gb, bC.i.getItem(QC.Gb) + 1), (0, wC.o)() && bC.i.setItem(QC.Db, bC.i.getItem(QC.Db) + 1)
    }
  },
  36342: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => xC,
      e: () => JC
    });
    var QC = ZC(970),
      wC = ZC(191),
      bC = ZC(318),
      nC = ZC(603),
      fC = ZC(326),
      oC = ZC(977),
      qC = ZC(615),
      FC = ZC(644),
      WC = ZC(4456),
      NC = ZC(77),
      MC = ZC(113),
      gC = ZC(1645),
      SC = ZC(91),
      pC = ZC(36346),
      PC = ZC(38),
      GC = ZC(625),
      RC = ZC(296),
      AC = ZC(36348);

    function xC() {
      var CC, zC;
      return [...null !== (CC = navigator.languages) && void 0 !== CC ? CC : [null !== (zC = navigator.language) && void 0 !== zC ? zC : "none"], "en-gb"]
    }

    function JC(CC, zC, ZC, JC, IC) {
      const iC = (0, QC.i)(zC) ? (0, QC.m)(zC) : null,
        vC = CC.isLoggedIn() && void 0 !== (0, wC.d)(bC.l, MC.y) ? (0, RC.u)() : null,
        eC = {
          cookies: (0, gC.getAllCookiesForGameNameWithVariation)(zC),
          isMobile: (0, NC.isMobile)(),
          isUsingCustomGameTexturePack: null !== iC && IC(iC),
          generalCookies: {
            joinDiscord: !!PC.i.getItem("DiscordPressed"),
            newGo: WC.d,
            ...CC.getMetricsCookies(),
            trafficCode: JC,
            compliance: NC.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, NC.getBrowserName)(),
            version: (0, NC.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, NC.getPlatformType)(),
            deviceType: (0, SC.c)()
          },
          isLoggedIn: CC.isLoggedIn(),
          lobbyName: ZC,
          languages: xC(),
          version: nC.e,
          siteUsed: MC.y,
          subsiteUsed: MC.H,
          playSessionId: (0, pC.j)(zC),
          visitSessionId: (0, GC.d)(),
          clientReason: qC.r.reason,
          budgetBasis: (0, AC.c)(),
          ...null !== FC.n && {
            diagClaim: FC.n.claimId
          },
          ...null !== vC && {
            webGpuLoss: vC
          }
        };
      return null !== iC && (0, fC.qc)(iC) ? (eC.lobbyName = (0, QC.f)(iC, (0, QC.k)(zC), ZC), {
        roomName: `classic_${oC.f}`,
        joinOptions: eC
      }) : {
        roomName: zC,
        joinOptions: eC
      }
    }
  },
  38920: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => MC,
      h: () => NC
    });
    const QC = "ue:",
      wC = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      bC = "[A-Za-z0-9]{1,24}",
      nC = 15,
      fC = new RegExp(`^${bC}$`);
    new RegExp(`^${QC}(${[...wC,"other"].join("|")}):(?:n|k(${bC})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function oC(CC, zC, ZC, bC, oC) {
      const qC = "string" === typeof CC && wC.includes(CC) ? CC : "other";
      let FC = "n";
      return "string" === typeof zC ? FC = fC.test(zC) ? `k${zC}` : "n" : "number" === typeof ZC && Number.isInteger(ZC) && ZC >= 0 && ZC <= nC && (FC = `b${ZC}`), `${QC}${qC}:${FC}:${bC?1:0}${oC?1:0}`
    }
    var qC = ZC(1584),
      FC = ZC(1654);
    let WC = null;

    function NC(CC) {
      const zC = CC instanceof Element && CC !== document.body && CC !== document.documentElement && !(0, qC.u)(CC) && !CC.closest("#root");
      return {
        editable: (0, FC.d)(CC),
        outsideView: zC
      }
    }

    function MC(CC) {
      return WC ??= function(CC) {
        try {
          const {
            editable: zC,
            outsideView: ZC
          } = NC(CC.target), QC = CC;
          return oC(CC.type, QC.code, QC.button, zC, ZC)
        } catch {
          return oC(null, null, null, !1, !1)
        }
      }(CC), WC
    }
  },
  40493: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC
    });
    var QC = ZC(39457);

    function wC(CC) {
      return {
        current: () => CC,
        watch: () => () => {}
      }
    }

    function bC() {}
    const nC = Object.freeze([0, 0, 0]),
      fC = {
        states: {
          health: wC({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: wC({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: wC({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: wC({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: wC({}),
          creativeVisibility: wC({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: wC(null),
          heldItemAim: wC({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: wC(!1),
          gliderBoostFuel: wC(0),
          flight: wC({
            canFly: !1,
            flying: !1
          }),
          crafting: wC({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: wC({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: wC({}),
          fullInventory: wC(!1),
          crosshairTarget: wC({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: wC(!0),
          freeCamera: wC({
            allowed: !1,
            movesFly: !1
          }),
          replay: wC(null),
          replayEdits: wC(null),
          replayRecorder: wC({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: wC(!1)
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
          selectHotbarSlot: bC,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: bC,
          setInventoryOpen: bC,
          changeIronChestPasskey: bC,
          dragReplayCamera: bC,
          applyTemporaryThirdPerson: bC,
          holdEmoteWheel: bC,
          recordFlyingMiddleText: bC,
          focusCrafting: bC,
          craftRecipe: () => ({
            Cf: 0,
            qn: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: bC,
          setShopOpen: bC,
          buyShopItem: bC,
          lobbyManage: bC,
          sendChatMessage: bC,
          ignorePlayer: bC,
          reportPlayer: bC,
          reportWorldCodeChat: bC,
          requestDiscordReportKey: bC,
          reportLobbyOrGame: bC,
          playEmote: bC,
          updateMyCosmetic: bC,
          writeOnBoard: bC,
          writeBook: bC,
          writeNameTag: bC,
          setCustomLobbyBlock: bC,
          openIronChest: bC,
          sendCodeCollab: bC,
          clickCodeBlock: bC,
          bindCustomButtonKeys: bC,
          pressCustomButton: bC,
          moveReplayFreecam: bC,
          holdReplayFreecamVertical: bC,
          respawn: bC,
          wakeUp: bC,
          requestLeaderboard: bC,
          completeTask: bC,
          setServerCookie: bC,
          answerUiRequest: bC,
          chooseRewardedAd: bC,
          setCameraZoom: bC,
          setFreeCameraMovesFly: bC,
          setBlockHighlight: bC,
          setCrosshairInteractPrompt: bC,
          setLookSensitivity: bC,
          replayAction: bC,
          setReplayPlaying: bC,
          seekReplay: bC,
          setReplayCameraMode: bC,
          syncReplayCameraMode: bC,
          setReplayCameraKeyframe: bC,
          moveReplayCameraKeyframe: bC,
          deleteReplayCameraKeyframes: bC,
          setReplayPlaybackMark: bC,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: bC,
          exportReplayVideo: bC,
          toggleRecording: bC,
          saveClip: bC,
          setRecorderPrefs: bC,
          setReplayViewerOpen: bC
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => QC.c,
          worldCodeAiGameState: () => QC.f
        },
        lookups: {
          localPos: () => nC,
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
  40798: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      f: () => bC
    });
    var QC = ZC(2063),
      wC = ZC(970);

    function bC(CC, zC) {
      return null !== CC.gameSource && (0, QC.m)(zC, CC.gameSource)
    }

    function nC(CC, zC) {
      if (null === CC.gameSource || "" === CC.gameSource || null === zC) return !0;
      const ZC = (0, wC.i)(zC) ? (0, wC.m)(zC) : null;
      return null !== ZC && bC(CC, ZC)
    }
  },
  40769: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC
    });
    var QC = ZC(590),
      wC = ZC(40772),
      bC = ZC(40647);
    async function nC(CC) {
      const zC = await (0, wC.k)({
        Helmet: ZC(37793),
        Chestplate: ZC(37802),
        Gauntlets: ZC(37816),
        Leggings: ZC(37808),
        Boots: ZC(37814)
      } [QC.b[CC]]);
      try {
        return (0, bC.l)(zC)
      } finally {
        zC.close()
      }
    }
    const fC = new class {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC.o;
        this.decode = CC, this.register = zC, this.decoded = new Map
      }
      warm() {
        for (let CC = 0; CC < QC.b.length; CC++) this.part(CC).catch((zC => {
          console.warn(`The grayscale armour ${QC.b[CC]} image didn't decode ahead of use`, zC)
        }))
      }
      async load(CC, zC) {
        const {
          width: ZC,
          height: bC,
          pixels: nC
        } = await this.part(CC), fC = new ImageData(function(CC, zC) {
          const ZC = new Uint8ClampedArray(CC.length);
          for (let QC = 0; QC < CC.length; QC += 4) ZC[QC] = Math.round(CC[QC] * zC[0] / 255), ZC[QC + 1] = Math.round(CC[QC + 1] * zC[1] / 255), ZC[QC + 2] = Math.round(CC[QC + 2] * zC[2] / 255), ZC[QC + 3] = CC[QC + 3];
          return ZC
        }(nC, function(CC) {
          return [CC >>> 16 & 255, CC >>> 8 & 255, 255 & CC]
        }(zC)), ZC, bC);
        let oC;
        try {
          oC = await createImageBitmap(fC, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (qC) {
          throw new wC.e("decode", `grayscale armour ${QC.b[CC]}`, {
            cause: qC
          })
        }
        return {
          id: this.register(oC),
          width: ZC,
          height: bC
        }
      }
      part(CC) {
        const zC = this.decoded.get(CC);
        if (void 0 !== zC) return zC;
        const ZC = this.decode(CC).catch((zC => {
          throw this.decoded.delete(CC), zC instanceof wC.e ? zC : new wC.e("decode", `grayscale armour ${QC.b[CC]}`, {
            cause: zC
          })
        }));
        return this.decoded.set(CC, ZC), ZC
      }
    }
  },
  40764: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      e: () => pC,
      f: () => FC,
      j: () => WC,
      l: () => SC
    });
    var QC = ZC(40624),
      wC = ZC(40769),
      bC = ZC(40772);
    const nC = 396,
      fC = 1,
      oC = 2,
      qC = 3,
      FC = {
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
      WC = {
        File: 0,
        Item: 1
      },
      NC = 0,
      MC = 1,
      gC = 2;

    function SC(CC) {
      const zC = (0, QC.m)();
      zC.catch((() => {}));
      let wC = null;
      return {
        glbUrl: CC,
        lifeformAtlasUrl: async CC => (await zC).lifeformAtlasUrl(CC),
        armourAtlasUrl: async () => (await ZC.e(204).then((() => ZC(34243)))).armourAtlasUrl,
        capeUrl: async CC => (await zC).capeUrl(CC),
        attachmentImageUrl: async CC => (await zC).attachmentImageUrl(CC),
        blockImageUrl: async CC => (await zC).blockImageUrl(CC),
        groupAtlasUrl: async CC => (await zC).groupAtlasUrl(CC),
        particleTextureUrl: async CC => (await zC).particleTextureUrl(CC),
        particleItemUrl: async CC => (wC ??= ZC.e(38).then((() => ZC(50780))).catch((CC => {
          throw wC = null, CC
        })), (await wC).particleItemUrl(CC))
      }
    }
    class pC {
      constructor(CC, zC) {
        var ZC, nC, fC, oC;
        let qC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = CC, this.onFailure = zC, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.Sg = !1, this.load = null !== (ZC = qC.load) && void 0 !== ZC ? ZC : (CC, zC) => (0, bC.l)(CC, qC.fetchImage, zC), this.release = null !== (nC = qC.release) && void 0 !== nC ? nC : bC.r, this.fetchFile = null !== (fC = qC.fetchFile) && void 0 !== fC ? fC : CC => (0, QC.j)(CC), this.greyscaleArmour = null !== (oC = qC.greyscaleArmour) && void 0 !== oC ? oC : wC.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(CC, zC) {
        this.glbWrittenImages.set(CC, IC(zC))
      }
      glbTaken(CC, zC) {
        const ZC = this.glbWrittenImages.get(CC);
        this.glbWrittenImages.delete(CC), zC && this.setGlbImages(CC, void 0 !== ZC && ZC.length > 0 ? ZC : void 0)
      }
      setGlbImages(CC, zC) {
        var ZC;
        this.glbTakenCount.set(CC, (null !== (ZC = this.glbTakenCount.get(CC)) && void 0 !== ZC ? ZC : 0) + 1), void 0 === zC ? this.glbImages.delete(CC) : this.glbImages.set(CC, zC);
        const QC = [];
        for (const {
            key: wC
          }
          of this.loading.values()) wC.kind === FC.Glb && wC.word === CC && QC.push(wC);
        for (let wC = this.ready.length - 1; wC >= 0; wC--) {
          const {
            key: zC,
            id: ZC
          } = this.ready[wC];
          zC.kind === FC.Glb && zC.word === CC && (this.ready.splice(wC, 1), null !== ZC && (this.answered.delete(ZC), this.release(ZC)), QC.push(zC))
        }
        this.loadAgain(QC)
      }
      onEvent(CC) {
        if (this.Sg) return;
        const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
        for (let ZC = 0; ZC + 8 <= CC.byteLength; ZC += 8) {
          const CC = zC.getUint8(ZC),
            QC = zC.getUint32(ZC + 4, !0);
          if (CC === qC) {
            this.answered.delete(QC), this.release(QC);
            continue
          }
          const wC = {
            kind: zC.getUint8(ZC + 1),
            index: zC.getUint8(ZC + 2),
            word: QC
          };
          CC === fC ? this.want(wC) : CC === oC && this.loading.delete(PC(wC))
        }
      }
      reload(CC, zC) {
        const ZC = ZC => CC.includes(ZC.kind) && (void 0 === zC || zC(ZC)),
          QC = new Map;
        for (const wC of this.answered.values()) ZC(wC) && QC.set(PC(wC), wC);
        for (const [wC, {
            key: bC
          }] of this.loading) ZC(bC) && QC.set(wC, bC);
        this.loadAgain(QC.values())
      }
      loadAgain(CC) {
        for (const zC of CC) this.loading.delete(PC(zC)), this.want(zC)
      }
      drain(CC) {
        if (null !== CC)
          for (; this.ready.length > 0;) {
            if (!CC(nC, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Sg = !0, this.loading.clear(), this.ready.length = 0;
        for (const CC of this.answered.keys()) this.release(CC);
        this.answered.clear()
      }
      want(CC) {
        const zC = PC(CC);
        if (this.loading.has(zC)) return;
        const ZC = {
          key: CC
        };
        this.loading.set(zC, ZC), this.loadKey(CC).then((QC => {
          this.Sg || this.loading.get(zC) !== ZC ? this.release(QC.id) : (this.loading.delete(zC), this.answered.set(QC.id, CC), this.ready.push({
            record: RC(CC, NC, QC),
            key: CC,
            id: QC.id
          }))
        }), (QC => {
          if (this.Sg || this.loading.get(zC) !== ZC) return;
          this.loading.delete(zC), this.onFailure({
            key: CC,
            error: QC
          });
          const wC = QC instanceof bC.e && "decode" === QC.stage ? MC : gC;
          this.ready.push({
            record: RC(CC, wC, null),
            key: CC,
            id: null
          })
        }))
      }
      async loadKey(CC) {
        switch (CC.kind) {
          case FC.Glb:
            return this.load(await this.glbImage(CC), "none");
          case FC.LifeformAtlas:
            return this.load(GC(await this.sources.lifeformAtlasUrl(CC.word), CC), "none");
          case FC.ArmourAtlas:
            return this.load(GC(await this.sources.armourAtlasUrl(), CC), "none");
          case FC.Cape:
            return this.load(GC(await this.sources.capeUrl(CC.word), CC), "none");
          case FC.AttachmentImage:
            return this.load(GC(await this.sources.attachmentImageUrl(CC.word), CC), "none");
          case FC.GroupAtlas:
            return this.load(GC(await this.sources.groupAtlasUrl(CC.word), CC), "none");
          case FC.BlockImage:
            return this.load(GC(await this.sources.blockImageUrl(CC.word), CC), "none");
          case FC.Particle: {
            const zC = await (CC.index === WC.Item ? this.sources.particleItemUrl(CC.word) : this.sources.particleTextureUrl(CC.word));
            return this.load(GC(zC, CC), "flipY")
          }
          case FC.GreyscaleArmour:
            return this.greyscaleArmour.load(CC.index, CC.word);
          default:
            throw new bC.e("fetch", `image kind ${CC.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(CC) {
        var zC;
        let ZC = this.glbImages.get(CC.word);
        if (void 0 === ZC) {
          const zC = this.glbTakenCount.get(CC.word),
            QC = GC(await this.sources.glbUrl(CC.word), CC);
          try {
            ZC = IC(await this.fetchFile(QC))
          } catch (wC) {
            throw new bC.e("fetch", QC, {
              cause: wC
            })
          }
          this.glbTakenCount.get(CC.word) === zC && this.glbImages.set(CC.word, ZC)
        }
        const QC = null === (zC = ZC) || void 0 === zC ? void 0 : zC[CC.index];
        if (!QC) throw new bC.e("decode", `image ${CC.index} of file ${2147483647&CC.word}`, {
          cause: null
        });
        return QC
      }
    }

    function PC(CC) {
      let {
        kind: zC,
        index: ZC,
        word: QC
      } = CC;
      return `${zC}:${ZC}:${QC}`
    }

    function GC(CC, zC) {
      if (null === CC) throw new bC.e("fetch", `no URL for image ${PC(zC)}`, {
        cause: null
      });
      return CC
    }

    function RC(CC, zC, ZC) {
      var QC, wC, bC;
      const nC = new Uint8Array(16),
        fC = new DataView(nC.buffer);
      return fC.setUint8(0, CC.kind), fC.setUint8(1, CC.index), fC.setUint8(2, zC), fC.setUint32(4, CC.word, !0), fC.setUint32(8, null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.id) && void 0 !== QC ? QC : 0, !0), fC.setUint16(12, Math.min(null !== (wC = null === ZC || void 0 === ZC ? void 0 : ZC.width) && void 0 !== wC ? wC : 0, 65535), !0), fC.setUint16(14, Math.min(null !== (bC = null === ZC || void 0 === ZC ? void 0 : ZC.height) && void 0 !== bC ? bC : 0, 65535), !0), nC
    }
    const AC = 1179937895,
      xC = 1313821514,
      JC = 5130562;

    function IC(CC) {
      var zC;
      const ZC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
      if (CC.byteLength < 20 || ZC.getUint32(0, !0) !== AC || ZC.getUint32(16, !0) !== xC) return [];
      let QC, wC = 20 + ZC.getUint32(12, !0);
      try {
        QC = JSON.parse((new TextDecoder).decode(CC.subarray(20, wC)))
      } catch {
        return []
      }
      for (; wC + 8 <= CC.byteLength && ZC.getUint32(wC + 4, !0) !== JC;) wC += 8 + ZC.getUint32(wC, !0);
      const bC = null !== (zC = QC.images) && void 0 !== zC ? zC : [];
      if (0 === bC.length || wC + 8 > CC.byteLength) return bC.map((() => null));
      const nC = CC.subarray(wC + 8, Math.min(CC.byteLength, wC + 8 + ZC.getUint32(wC, !0)));
      return bC.map((CC => {
        var zC, ZC, wC;
        const bC = void 0 === CC.bufferView || null === (zC = QC.bufferViews) || void 0 === zC ? void 0 : zC[CC.bufferView];
        if (!bC || 0 !== (null !== (ZC = bC.buffer) && void 0 !== ZC ? ZC : 0) || void 0 === bC.byteLength) return null;
        const fC = null !== (wC = bC.byteOffset) && void 0 !== wC ? wC : 0,
          oC = fC + bC.byteLength;
        return oC <= nC.byteLength ? nC.slice(fC, oC) : null
      }))
    }
  },
  40500: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      f: () => bC,
      i: () => wC
    });
    let QC = null;

    function wC(CC) {
      QC = CC
    }

    function bC(CC) {
      QC === CC && (QC = null)
    }

    function nC() {
      var CC;
      null === (CC = QC) || void 0 === CC || CC()
    }
  },
  36474: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC,
      g: () => NC,
      h: () => PC,
      l: () => qC
    });
    var QC = ZC(20),
      wC = ZC(2348),
      bC = ZC(2351),
      nC = ZC(2360),
      fC = ZC(2431),
      oC = ZC(28);

    function qC(CC, zC) {
      return (!(0, nC.c)() || 0 === CC && 0 === zC) && (0, bC.s)(wC.j.Joystick, 0, CC, zC, 0)
    }
    const FC = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function WC(CC) {
      return CC.classList.contains("TouchKeyHit") && MC() ? null : CC.firstElementChild
    }

    function NC(CC) {
      return CC.classList.contains("TouchKeyHit") && !CC.classList.contains("CanvasZone") ? {
        whole: !MC(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: gC(WC(CC))
      }
    }

    function MC() {
      return document.documentElement.classList.contains(fC.i)
    }

    function gC(CC) {
      return !(CC instanceof HTMLElement) || CC.offsetWidth <= 0 || CC.offsetHeight <= 0 ? null : {
        width: CC.offsetWidth,
        height: CC.offsetHeight
      }
    }

    function SC(CC, zC) {
      const ZC = CC => Math.min(65535, Math.round(4 * CC));
      return (ZC(CC) | ZC(zC) << 16) >>> 0
    }

    function pC(CC) {
      return {
        x: CC.left + CC.width / 2,
        y: CC.top + CC.height / 2,
        radius: Math.min(CC.width, CC.height) / 2
      }
    }
    const PC = new class {
      constructor(CC) {
        this.write = CC, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        zC ? this.elements.set(CC, {
          element: zC,
          hidden: ZC
        }) : this.elements.delete(CC), this.measureOne(CC)
      }
      measure() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = CC.left, this.canvasTop = CC.top;
        for (const zC of this.elements.keys()) this.measureOne(zC)
      }
      hitZone(CC, zC) {
        let ZC = null,
          QC = 1;
        for (const wC of this.elements.keys()) {
          const bC = this.shown(wC);
          if (!bC) continue;
          const {
            rect: nC,
            element: fC
          } = bC, oC = pC(nC), qC = Math.max(0, nC.width / 2 - oC.radius), FC = Math.max(0, nC.height / 2 - oC.radius), NC = Math.max(0, Math.abs(CC - oC.x) - qC), MC = Math.max(0, Math.abs(zC - oC.y) - FC), SC = fC.firstElementChild;
          let PC = Math.hypot(NC, MC) / oC.radius;
          const GC = gC(WC(fC));
          GC && (PC = Math.min(PC, Math.max(2 * Math.abs(CC - oC.x) / GC.width, 2 * Math.abs(zC - oC.y) / GC.height))), PC < QC && (ZC = {
            code: wC,
            element: fC,
            key: SC,
            ...oC
          }, QC = PC)
        }
        return ZC
      }
      measureOne(CC) {
        const zC = this.shown(CC);
        if (!zC) return void this.write(wC.j.TouchZone, CC, 0, 0, 0);
        const {
          rect: ZC,
          element: QC
        } = zC, bC = pC(ZC);
        this.write(wC.j.TouchZone, CC, bC.x - this.canvasLeft, bC.y - this.canvasTop, SC(ZC.width, ZC.height));
        const nC = gC(WC(QC));
        this.write(wC.j.TouchZone, 256 | CC, 0, 0, nC ? SC(nC.width, nC.height) : 0)
      }
      shown(CC) {
        const zC = this.elements.get(CC),
          ZC = QC.b.get("worldPanelHud");
        if (!zC || zC.hidden || "none" === ZC) return null;
        const wC = zC.element.getBoundingClientRect();
        return wC.width <= 0 || wC.height <= 0 ? null : {
          rect: wC,
          element: zC.element
        }
      }
    }(bC.s);
    (0, oC.q)(fC.e, (() => {
      PC.measure()
    }))
  },
  40538: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => oC,
      c: () => qC
    });
    var QC = ZC(40667),
      wC = ZC(38892),
      bC = ZC(36342),
      nC = ZC(40540),
      fC = ZC(40521);
    const oC = QC.e.timeForPlayerToConnect - 1e4;
    async function qC(CC, zC, ZC, QC) {
      let oC;
      try {
        oC = await CC.getTrafficCode()
      } catch (gC) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", gC), new fC.A(gC)
      }
      const {
        gameNameWithVariation: qC,
        lobbyName: FC
      } = zC, WC = () => {
        const zC = (0, bC.e)(CC, qC, FC, oC, (CC => {
          var zC;
          return null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.isUsingCustomGameTexturePack(CC)) && void 0 !== zC && zC
        }));
        zC.joinOptions.wasmClient = !0;
        const wC = (0, nC.G)();
        return null !== wC && (zC.joinOptions.renderBackend = wC), zC.joinOptions.joinAdHold = QC, zC
      }, {
        roomName: NC,
        joinOptions: MC
      } = WC();
      return {
        endpoint: zC.endpoint,
        roomName: NC,
        joinOptions: MC,
        session: {
          gameNameWithVariation: qC,
          lobbyName: FC,
          playerDbId: CC.whamm
        },
        optionsAfterRefusal: async zC => await (0, wC.e)(CC, zC) ? WC().joinOptions : null
      }
    }
  },
  40787: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC,
      g: () => bC,
      i: () => WC,
      m: () => nC
    });
    var QC = ZC(40764),
      wC = ZC(40624);
    const bC = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(CC) {
        this.change((() => {
          this.page = CC
        }))
      }
      setSessionFiles(CC) {
        const zC = void 0 !== this.session && void 0 === CC;
        if (this.change((() => {
            this.session = CC
          })), zC)
          for (const ZC of [...this.pageListeners]) ZC()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(CC) {
        return this.pageListeners.add(CC), () => {
          this.pageListeners.delete(CC)
        }
      }
      setFollower(CC) {
        this.follower = CC, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const CC of [...this.wantedListeners]) CC();
        this.startFollower()
      }
      onWanted(CC) {
        return this.wantedListeners.add(CC), () => {
          this.wantedListeners.delete(CC)
        }
      }
      onChange(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      startFollower() {
        const CC = this.follower;
        this.isWanted && null !== CC && (this.follower = null, CC((() => {
          this.follower = CC
        })))
      }
      change(CC) {
        const zC = this.current;
        if (CC(), this.current !== zC)
          for (const ZC of this.listeners) ZC()
      }
    };

    function nC(CC, zC) {
      return {
        ...CC,
        armourAtlasUrl: () => {
          var ZC, QC;
          return null !== (ZC = null === (QC = zC()) || void 0 === QC ? void 0 : QC.armourAtlasUrl()) && void 0 !== ZC ? ZC : CC.armourAtlasUrl()
        },
        lifeformAtlasUrl: ZC => oC(zC(), (CC => CC.LIFEFORM_ATLAS_PATHS[ZC]), (() => CC.lifeformAtlasUrl(ZC))),
        groupAtlasUrl: ZC => oC(zC(), (CC => CC.GROUP_ATLAS_PATHS[ZC]), (() => CC.groupAtlasUrl(ZC))),
        particleItemUrl: QC => qC(zC(), (async () => {
          const CC = await ZC.e(38).then((() => ZC(50780))).catch((() => null));
          return (null === CC || void 0 === CC ? void 0 : CC.particleItemSprite(QC)) || null
        }), (() => CC.particleItemUrl(QC))),
        blockImageUrl: ZC => qC(zC(), (async () => {
          var CC, zC;
          return null !== (CC = null === (zC = await fC()) || void 0 === zC ? void 0 : zC.blockImageName(ZC)) && void 0 !== CC ? CC : null
        }), (() => CC.blockImageUrl(ZC)))
      }
    }

    function fC() {
      return (0, wC.m)().catch((() => null))
    }

    function oC(CC, zC, ZC) {
      return qC(CC, (async () => {
        var CC;
        const ZC = await fC(),
          QC = null === ZC ? null : zC(ZC),
          wC = null !== (CC = null === QC || void 0 === QC ? void 0 : QC.slice(QC.lastIndexOf("/") + 1)) && void 0 !== CC ? CC : null;
        return "Player_Atlas" === wC ? null : wC
      }), ZC)
    }
    async function qC(CC, zC, ZC) {
      if (null !== CC) {
        const ZC = await zC(),
          QC = null === ZC ? null : CC.textureUrl(ZC);
        if (null !== QC) return QC
      }
      return ZC()
    }
    const FC = 0;

    function WC(CC) {
      const zC = [QC.f.ArmourAtlas, QC.f.LifeformAtlas, QC.f.GroupAtlas, QC.f.BlockImage, QC.f.Particle];
      CC.reload(zC, (CC => {
        switch (CC.kind) {
          case QC.f.Particle:
            return CC.index === QC.j.Item;
          case QC.f.LifeformAtlas:
            return CC.word !== FC;
          default:
            return !0
        }
      }))
    }
  },
  40675: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC,
      e: () => fC,
      h: () => nC,
      j: () => wC,
      l: () => bC
    });
    const QC = 1e3;

    function wC() {
      oC((() => {
        window.location.reload()
      }))
    }

    function bC() {
      return new Promise((() => {}))
    }

    function nC(CC) {
      oC((() => {
        window.location.replace(CC(window.location.href))
      }))
    }

    function fC(CC) {
      Promise.resolve().then((() => ZC(88))).then((zC => {
        let {
          currentUrl: ZC
        } = zC;
        nC((() => ZC.mergeSearchParamsInto(CC)))
      }), (() => {
        nC((() => CC))
      }))
    }

    function oC(CC) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => ZC(1645))).then((zC => {
        let {
          prepareForUnloadWithoutConfirmation: ZC
        } = zC;
        try {
          ZC()
        } catch (QC) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", QC), window.onbeforeunload = null
        }
        CC()
      }), (() => {
        window.onbeforeunload = null, CC()
      })) : CC()
    }
  },
  5021: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return wC(CC, zC)
    }

    function wC(CC, zC) {
      if (CC === zC) return !0;
      if ("object" !== typeof CC || "object" !== typeof zC || null === CC || null === zC || Array.isArray(CC) !== Array.isArray(zC)) return !1;
      const ZC = CC,
        QC = zC,
        bC = Object.keys(ZC);
      return bC.length === Object.keys(QC).length && bC.every((CC => Object.prototype.hasOwnProperty.call(QC, CC) && wC(ZC[CC], QC[CC])))
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  40745: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => JC,
      i: () => AC,
      l: () => SC,
      p: () => gC
    });
    var QC = ZC(1740),
      wC = ZC(1152),
      bC = ZC(38886),
      nC = ZC(36369),
      fC = ZC(38907),
      oC = ZC(40521);
    const qC = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      FC = 3,
      WC = [500, 1500];

    function NC(CC) {
      const zC = new URL(CC);
      return {
        secure: "https:" === zC.protocol || "wss:" === zC.protocol,
        host: zC.host,
        pathname: zC.pathname.replace(/\/+$/, ""),
        search: zC.searchParams.toString()
      }
    }

    function MC(CC, zC, ZC) {
      const {
        secure: QC,
        host: wC,
        pathname: bC,
        search: nC
      } = NC(CC);
      return `${QC?"https":"http"}://${wC}${bC}/matchmake/${zC}/${encodeURIComponent(ZC)}${nC?`?${nC}`:""}`
    }

    function gC(CC, zC) {
      var ZC;
      const QC = null !== (ZC = zC.protocol) && void 0 !== ZC ? ZC : "ws";
      if ("ws" !== QC) throw new Error(`seat reservation asks for the ${QC} transport`);
      const {
        secure: wC,
        host: bC,
        pathname: nC,
        search: fC
      } = NC(CC), oC = new URLSearchParams(fC);
      oC.append("sessionId", zC.sessionId), zC.reconnectionToken && oC.append("reconnectionToken", zC.reconnectionToken);
      return `${wC?"wss":"ws"}://${zC.room.publicAddress||`${bC}${nC}`}/${zC.room.processId}/${zC.room.roomId}?${oC.toString()}`
    }
    async function SC(CC, zC, ZC) {
      var fC;
      let qC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const NC = null !== (fC = qC.sleep) && void 0 !== fC ? fC : QC.c,
        gC = new wC.e(qC.signal),
        SC = new nC.b((() => {
          (0, wC.i)(gC.controller, new nC.f("seat"))
        })),
        {
          signal: RC
        } = gC;
      try {
        const QC = await (0, bC.f)((() => async function(CC, zC, ZC, QC) {
          var bC;
          const {
            signal: nC,
            sleep: fC
          } = QC, qC = MC(CC, "joinOrCreate", zC), NC = JSON.stringify(ZC);
          let gC = null;
          for (let MC = 0; MC < FC; MC++) {
            var SC;
            if (MC > 0) await fC(null !== (SC = WC[MC - 1]) && void 0 !== SC ? SC : 1500, nC);
            let CC;
            (0, wC.n)(nC);
            try {
              CC = await PC(qC, NC, QC)
            } catch (RC) {
              (0, wC.n)(nC), gC = pC(RC);
              continue
            }
            const {
              response: zC,
              answer: ZC,
              refusal: bC,
              lost: FC
            } = CC;
            if (null === FC) {
              if (null !== bC) throw GC(bC, ZC);
              if (zC.ok && null !== ZC && IC(ZC)) return ZC;
              gC = new oC.x(`seat request answered HTTP ${zC.status}${null===ZC?" without JSON":" without a seat"}`, !1, void 0, zC.status)
            } else gC = pC(FC.error)
          }
          throw null !== (bC = gC) && void 0 !== bC ? bC : new oC.x("seat request made no attempt", !1)
        }(CC, zC, ZC, {
          ...qC,
          signal: RC,
          sleep: NC
        })), RC, NC);
        return SC.answered(), QC
      } finally {
        SC.stop(), gC.unfollow()
      }
    }

    function pC(CC) {
      return new oC.x(CC instanceof Error ? CC.message : String(CC), !0, CC)
    }
    async function PC(CC, zC, ZC) {
      var QC;
      const {
        signal: bC
      } = ZC, nC = null !== (QC = ZC.fetch) && void 0 !== QC ? QC : fetch, fC = await nC(CC, {
        method: "POST",
        headers: {
          ...qC,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: zC,
        credentials: "include",
        signal: bC
      }), {
        answer: oC,
        lost: FC
      } = await async function(CC) {
        try {
          const zC = await CC.json();
          return {
            answer: "object" === typeof zC && null !== zC ? zC : null,
            lost: null
          }
        } catch (zC) {
          return {
            answer: null,
            lost: zC instanceof SyntaxError ? null : {
              error: zC
            }
          }
        }
      }(fC), WC = null !== oC && "string" === typeof oC.error ? oC.error : null;
      var NC;
      null !== WC && (null === (NC = ZC.onRefusal) || void 0 === NC || NC.call(ZC));
      return (0, wC.n)(bC), {
        response: fC,
        answer: oC,
        refusal: WC,
        lost: FC
      }
    }

    function GC(CC, zC) {
      return new oC.q(CC, "number" === typeof(null === zC || void 0 === zC ? void 0 : zC.code) ? zC.code : 0, (0, fC.o)(CC).text)
    }
    class RC extends Error {
      constructor(CC, zC) {
        super(CC), this.code = zC, this.name = "SeatHttpError"
      }
    }
    async function AC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: wC,
        answer: bC,
        refusal: nC,
        lost: fC
      } = await PC(MC(CC, "reconnect", zC), JSON.stringify({
        reconnectionToken: ZC
      }), QC);
      if (null !== fC) throw fC.error;
      if (!wC.ok) {
        const CC = null !== bC && "number" === typeof bC.code && 0 !== bC.code ? bC.code : wC.status;
        throw new RC(`the seat's reconnect was refused: ${null!==nC&&void 0!==nC?nC:`HTTP ${wC.status}`}`, CC)
      }
      if (null !== nC) throw GC(nC, bC);
      if (null === bC || !IC(bC)) throw new Error("the seat's reconnect answered " + (null === bC ? "without JSON" : "without a seat"));
      return {
        ...bC,
        reconnectionToken: ZC
      }
    }
    const xC = 10;

    function JC(CC) {
      if (CC.byteLength < 2 || CC[0] !== xC) return null;
      const zC = 2 + CC[1];
      return zC > CC.byteLength ? null : (new TextDecoder).decode(CC.subarray(2, zC))
    }

    function IC(CC) {
      const zC = CC.room;
      return "string" === typeof CC.sessionId && "object" === typeof zC && null !== zC && "string" === typeof zC.roomId && "string" === typeof zC.processId && "string" === typeof zC.name
    }
  },
  40427: (CC, zC, ZC) => {
    ZC.d(zC, {
      $: () => RC,
      A: () => AC,
      E: () => xC,
      H: () => pC,
      J: () => eC,
      M: () => mC,
      Q: () => gC,
      S: () => EC,
      V: () => GC,
      Y: () => PC,
      b: () => wC,
      cb: () => JC,
      f: () => HC,
      j: () => dC,
      k: () => MC,
      m: () => SC,
      o: () => KC,
      q: () => iC,
      r: () => hC,
      s: () => vC,
      w: () => IC,
      y: () => YC
    });
    var QC = ZC(2982);
    const wC = {
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

    function bC(CC, zC) {
      return !ArrayBuffer.isView(CC) || CC instanceof DataView ? Array.isArray(CC) ? CC.map((CC => zC(CC))) : CC : Array.from(CC, (CC => zC(CC)))
    }

    function nC(CC) {
      if ("string" !== typeof CC) return CC;
      for (let zC = 0; zC < CC.length; zC++) {
        const ZC = CC.charCodeAt(zC);
        if (ZC >= 55296 && ZC <= 57343) return oC.decode(fC.encode(CC))
      }
      return CC
    }
    const fC = new TextEncoder,
      oC = new TextDecoder;

    function qC(CC) {
      return CC
    }
    let FC;

    function WC(CC) {
      return null === CC || "object" !== typeof CC ? CC : [nC(CC.Zq), nC(CC.Qq)]
    }

    function NC(CC) {
      return null === CC || "object" !== typeof CC ? CC : [bC(CC.hQ, qC), bC(CC.zn, qC)]
    }

    function MC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.cq), nC(zC.uq)];
      var zC
    }

    function gC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [zC.id, zC.hF];
      var zC
    }

    function SC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [zC.rb, nC(zC.sb), zC.Tb, nC(zC.Db), zC.Ub, zC.Bb, zC.Tn, nC(zC.tn), nC(zC.Dn)];
      var zC
    }

    function pC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [bC(zC.gF, qC), zC.SF];
      var zC
    }

    function PC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [bC(zC.eq, (CC => nC(CC))), nC(zC.hq), zC.Kq];
      var zC
    }

    function GC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [bC(zC.cn, qC), nC(zC.rn), zC.sn];
      var zC
    }

    function RC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.JQ), nC(zC.IQ)];
      var zC
    }

    function AC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.Bn)];
      var zC
    }

    function xC(CC) {
      return nC(CC)
    }

    function JC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.ZF), nC(zC.QF), nC(zC.Zq), nC(zC.Qq)];
      var zC
    }

    function IC(CC) {
      return WC(CC)
    }

    function iC(CC) {
      return WC(CC)
    }

    function vC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.Cn)];
      var zC
    }

    function eC(CC) {
      return CC
    }

    function hC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.vn), nC(zC.en)];
      var zC
    }

    function KC(CC) {
      return nC(CC)
    }

    function YC(CC) {
      return NC(CC)
    }

    function dC(CC) {
      return NC(CC)
    }

    function mC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.wF)];
      var zC
    }

    function HC(CC) {
      return (FC ??= (0, QC.e)().map((CC => CC.name)), FC).map((zC => {
        return "string" === typeof(ZC = CC[zC]) ? nC(ZC) : bC(ZC, qC);
        var ZC
      }))
    }

    function EC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [zC.Lq, zC.Uq, zC.Bq];
      var zC
    }
  },
  40795: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(40798),
      wC = ZC(40787);
    const bC = new class {
      constructor(CC) {
        this.pack = CC, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, CC.onWanted((() => {
          this.release()
        }))
      }
      setGame(CC) {
        if (void 0 === CC && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const zC = this.inGame();
        if (this.game = CC, this.update(), this.inGame() !== zC)
          for (const ZC of this.gameListeners) ZC()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(CC) {
        return this.gameListeners.add(CC), () => {
          this.gameListeners.delete(CC)
        }
      }
      unwantedLeave(CC) {
        CC && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(CC) {
        null !== CC && CC === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const CC = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, CC && this.setGame(void 0)
      }
      setSettled(CC) {
        this.settle = CC, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, QC.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(wC.g)
  },
  5013: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      d: () => fC
    });
    var QC = ZC(2063),
      wC = ZC(5021);
    let bC = null;

    function nC(CC) {
      bC = {
        pack: CC.metaData.id === QC.c ? null : CC
      }
    }

    function fC(CC) {
      return !(null === bC || !(0, wC.b)(bC.pack, CC)) && (bC = null, !0)
    }
  },
  40510: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      followPageUiPack: () => MF,
      packForGame: () => NF,
      playWasmGame: () => vF,
      prefetchWasmPreviews: () => So,
      setGamePackConfirm: () => vq,
      startWasmPlay: () => GF,
      startWasmPreviews: () => go
    });
    var QC = ZC(184),
      wC = ZC(1187),
      bC = ZC(134),
      nC = ZC(38923),
      fC = ZC(1840),
      oC = ZC(28),
      qC = ZC(4617),
      FC = ZC(1263),
      WC = ZC(1637),
      NC = ZC(1275),
      MC = ZC(39085),
      gC = ZC(1257),
      SC = ZC(39100),
      pC = ZC(38992),
      PC = ZC(36346),
      GC = ZC(38886),
      RC = ZC(8897),
      AC = ZC(36369),
      xC = ZC(40518),
      JC = ZC(4711),
      IC = ZC(40423),
      iC = ZC(40493),
      vC = ZC(40427);
    const eC = {
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

    function hC(CC) {
      const zC = {
        ...iC.b[CC]
      };
      for (const ZC of Object.keys(eC[CC])) delete zC[ZC];
      return zC
    }

    function KC() {
      var CC, zC;
      return null === (CC = null === (zC = (0, IC.k)()) || void 0 === zC ? void 0 : zC.localPlayerAlive()) || void 0 === CC || CC
    }

    function YC() {
      var CC, zC;
      return null !== (CC = null === (zC = (0, IC.k)()) || void 0 === zC ? void 0 : zC.localDeaths()) && void 0 !== CC ? CC : null
    }
    const dC = {
        current: KC,
        watch: CC => {
          let zC = KC(),
            ZC = YC();
          return (0, JC.r)((() => {
            const QC = KC(),
              wC = YC(),
              bC = null !== wC && null !== ZC && wC !== ZC;
            ZC = wC, bC ? (zC || CC(!0), CC(!1), QC && CC(!0), zC = QC) : QC !== zC && (zC = QC, CC(QC))
          }))
        }
      },
      mC = {
        states: {
          ...hC("states"),
          localPlayerAlive: dC
        },
        events: {
          ...hC("events"),
          localPlayerAliveSet: {
            watch: dC.watch
          }
        },
        commands: {
          ...hC("commands"),
          respawn: () => {
            var CC;
            null === (CC = (0, IC.k)()) || void 0 === CC || CC.respawn()
          },
          playEmote: CC => {
            var zC;
            null === (zC = (0, IC.k)()) || void 0 === zC || zC.send(vC.b.PlayEmote, (0, vC.A)({
              Bn: CC
            }))
          },
          applyTemporaryThirdPerson: CC => {
            var zC;
            let {
              durationMs: ZC
            } = CC;
            null === (zC = (0, IC.k)()) || void 0 === zC || zC.thirdPersonFor(ZC)
          },
          bindCustomButtonKeys: CC => {
            var zC;
            null === (zC = (0, IC.k)()) || void 0 === zC || zC.bindCustomButtonKeys(CC)
          },
          pressCustomButton: CC => {
            var zC;
            let {
              id: ZC,
              down: QC
            } = CC;
            null === (zC = (0, IC.k)()) || void 0 === zC || zC.pressCustomButton(ZC, QC)
          },
          setLookSensitivity: () => {},
          wakeUp: CC => {
            const zC = (0, vC.M)({
                wF: CC
              }),
              ZC = () => {
                const CC = (0, IC.k)();
                return !(null !== CC && void 0 !== CC && CC.isSessionLive) || CC.send(vC.b.StopSleeping, zC)
              };
            if (!ZC()) {
              const CC = (0, JC.r)((() => {
                ZC() && CC()
              }))
            }
          },
          setCameraZoom: CC => {
            var zC;
            null === (zC = (0, IC.k)()) || void 0 === zC || zC.setCameraZoom(CC)
          }
        },
        queries: hC("queries"),
        lookups: {
          ...hC("lookups"),
          cameraZoom: () => {
            var CC, zC;
            return null !== (CC = null === (zC = (0, IC.k)()) || void 0 === zC ? void 0 : zC.cameraZoom()) && void 0 !== CC ? CC : 0
          }
        }
      };
    var HC = ZC(38907),
      EC = ZC(40521),
      lC = ZC(40525),
      XC = ZC(40538),
      cC = ZC(1200),
      uC = ZC(88),
      rC = ZC(4456),
      sC = ZC(3644),
      TC = ZC(1114);
    const aC = {
      yF: () => (0, cC.c)(),
      inbuiltOverwritten: () => rC.h,
      reflectApplyHit: () => TC.b,
      definerHit: () => uC.currentUrl.c,
      emitReplaced: () => (0, oC.e)(),
      confirmMesh: () => (0, sC.d)(),
      confirmMeshHitStack: () => (0, sC.f)()
    };
    var tC = ZC(40529),
      DC = ZC(40675);
    var jC = ZC(20),
      yC = ZC(1843),
      LC = ZC(1887),
      UC = ZC(1559),
      BC = ZC(1925),
      OC = ZC(1143),
      kC = ZC(1192),
      VC = ZC(40677);

    function Cz() {
      return kC.h.get().getCurrentLanguageCode()
    }

    function zz(CC) {
      const zC = () => {
        CC({
          translate: (CC, zC) => (0, OC.t)(Cz(), CC, zC),
          keyBindingText: CC => {
            const zC = (0, LC.l)(CC, jC.b.get("isTouchScreen"));
            return null !== zC ? (0, OC.u)(Cz(), zC.translationKey, zC.params) : (0, LC.h)((0, LC.k)(CC))
          },
          isFriend: BC.g,
          hiddenNames: yC.d.shown,
          loadsFontRest: (0, VC.e)(Cz())
        })
      };
      let ZC = !1;
      const QC = () => {
          const CC = Cz();
          (0, OC.k)(CC).then((() => {
            ZC || CC !== Cz() || zC()
          }))
        },
        wC = () => UC.d.getSocialState().friends.map((CC => CC.name.toLowerCase())).sort().join(" ");
      let bC = wC();
      zC(), QC();
      const nC = [(0, kC.j)((() => {
        zC(), QC()
      })), (0, oC.q)("customBindingsChanged", zC), (0, oC.q)("appManagerUpdated|isTouchScreen", zC), (0, BC.e)((() => {
        const CC = wC();
        CC !== bC && (bC = CC, zC())
      })), yC.d.subscribe(zC)];
      return () => {
        ZC = !0;
        for (const CC of nC) CC()
      }
    }
    var Zz = ZC(603),
      Qz = ZC(970),
      wz = ZC(1867),
      bz = ZC(310),
      nz = ZC(171),
      fz = ZC(2848),
      oz = ZC(2856),
      qz = ZC(38554),
      Fz = ZC(4635),
      Wz = ZC(40697),
      Nz = ZC(644),
      Mz = ZC(615),
      gz = ZC(655),
      Sz = ZC(659),
      pz = ZC(1865),
      Pz = ZC(3652),
      Gz = ZC(3273);
    let Rz = null;
    var Az = ZC(1149),
      xz = ZC(1152),
      Jz = ZC(4355),
      Iz = ZC(3428),
      iz = ZC(45),
      vz = ZC(304),
      ez = ZC(296),
      hz = ZC(40717),
      Kz = ZC(4719);
    var Yz = ZC(37525),
      dz = ZC(40723);
    class mz {
      constructor(CC, zC) {
        this.showView = CC, this.holdForAd = zC
      }
      pointerUnlockRequestsChanged() {
        (0, hz.D)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, hz.s)())
        }]
      }
      setGameViewShown(CC) {
        this.showView(CC)
      }
      setGameView(CC) {
        (0, dz.l)(CC)
      }
      videoAdHold(CC, zC) {
        this.holdForAd(CC, zC)
      }
    }
    class Hz {
      leave(CC) {
        ! function(CC) {
          if (null !== (0, NC.d)().websocketUrl) try {
            (0, JC.E)().leaveGame(CC)
          } finally {
            (0, NC.r)({
              websocketUrl: null
            })
          }
        }(CC)
      }
      isReplay() {
        return !1
      }
    }
    class Ez {
      watchFrameStarts(CC) {
        return (0, JC.n)(CC)
      }
      watchFrames(CC) {
        return (0, JC.m)(CC)
      }
      watchTicks(CC) {
        return (0, JC.r)(CC)
      }
    }
    var lz = ZC(40729);

    function Xz(CC) {
      return CC >= 0 ? Math.min(1, CC) : 0
    }

    function cz(CC, zC) {
      const {
        fade: ZC
      } = CC;
      return null === ZC || zC - ZC.at >= ZC.ms ? CC.volume : ZC.from + (CC.volume - ZC.from) * Math.max(0, (zC - ZC.at) / ZC.ms)
    }

    function uz(CC) {
      const zC = Object.entries(CC),
        ZC = new Uint32Array(zC.length);
      let QC = 0;
      for (const [nC, [, fC]] of zC.entries()) ZC[nC] = fC.length, QC += fC.length;
      const wC = new Float64Array(3 * QC);
      let bC = 0;
      for (const [, nC] of zC)
        for (const CC of nC) wC.set(CC, bC), bC += 3;
      return {
        blocks: zC.map((CC => {
          let [zC] = CC;
          return zC
        })).join("\0"),
        counts: ZC,
        values: wC
      }
    }
    class rz {
      constructor(CC, zC) {
        this.core = CC, this.warn = zC, this.latest = 0
      }
      async feed() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sz;
        const zC = ++this.latest;
        let ZC;
        try {
          ZC = await CC()
        } catch (QC) {
          return void(this.core.isStopped || zC !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", QC))
        }
        zC === this.latest && (this.core.setBlockColours(ZC) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function sz() {
      return uz((await ZC.e(204).then((() => ZC(34243)))).averageColors)
    }
    var Tz = ZC(4727),
      az = ZC(4733),
      tz = ZC(40476),
      Dz = ZC(3222),
      jz = ZC(36172),
      yz = ZC(40570),
      Lz = ZC(597),
      Uz = ZC(36926),
      Bz = ZC(590),
      Oz = ZC(326),
      kz = ZC(40552);
    const Vz = [3e4, 12e4, 3e5];
    class CZ extends Error {}
    const zZ = {
      mobTypes: Lz.p,
      vehicleTypes: Uz.e,
      mobAiStates: Lz.n,
      playerPoses: Bz.p
    };
    var ZZ = ZC(40542),
      QZ = ZC(40590),
      wZ = ZC(1029),
      bZ = ZC(40736),
      nZ = ZC(40743),
      fZ = ZC(2957),
      oZ = ZC(38879),
      qZ = ZC(4752),
      FZ = ZC(2348);
    const WZ = FZ.v.KeysDisabled | FZ.v.LookFrozen | FZ.v.ClicksSuppressed,
      NZ = fZ.g;
    var MZ = (0, nZ.c)("resumingConn");
    class gZ {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = CC, this.now = zC, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, MZ, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new oZ.d({
          reconnect: CC => this.reconnect(CC),
          isLive: () => CC.isLive(),
          onReconnected: zC => {
            this.landed = zC, CC.onReconnected(zC), this.landIfResumed()
          },
          onGaveUp: (zC, ZC) => {
            this.abortAttempt(), CC.onGaveUp(zC, ZC)
          },
          freeze: zC => {
            CC.qY(zC), (0, qZ.e)(WZ, zC ? WZ : 0, "reconnectFreeze")
          },
          releaseSeat: CC => {
            this.releaseSeat(CC)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, bZ.e)(this, MZ)[MZ]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(CC) {
        let {
          conn: zC,
          graceMs: ZC,
          sessionBased: QC,
          replayOffer: wC
        } = CC;
        this.session.onInitialInfo(ZC, QC), this.isResuming() && (this.initialInfoConn = zC, this.initialInfoOffer = wC, this.landIfResumed())
      }
      onResumeComplete(CC) {
        0 !== CC && (CC === (0, bZ.e)(this, MZ)[MZ] ? ((0, bZ.e)(this, MZ)[MZ] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = CC))
      }
      onDropped(CC) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, bZ.e)(this, MZ)[MZ] = 0, this.session.onConnectionLost(CC)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, bZ.e)(this, MZ)[MZ] = 0, this.session.end()
      }
      reconnect(CC) {
        const zC = this.attempt;
        if (null !== zC && this.awaitingJoinRoom(zC)) return zC.result;
        this.abortAttempt();
        const ZC = new AbortController,
          QC = this.drops,
          wC = {
            attachedAt: null
          },
          bC = this.shell.reconnect(CC, ZC.signal, (() => {
            wC.attachedAt = this.now()
          })).then((CC => {
            if (this.clearAttempt(nC), this.drops !== QC) throw new Error("the resumed room dropped before its attempt settled");
            return CC
          }), (CC => {
            throw this.clearAttempt(nC), CC
          })),
          nC = {
            abort: ZC,
            socket: wC,
            result: bC
          };
        return this.attempt = nC, bC
      }
      clearAttempt(CC) {
        this.attempt === CC && (this.attempt = null)
      }
      abortAttempt() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const zC = this.attempt;
        this.attempt = null, null === zC || void 0 === zC || zC.abort.abort(CC)
      }
      awaitingJoinRoom(CC) {
        const zC = CC.socket.attachedAt;
        return null !== zC && this.now() - zC < NZ
      }
      releaseSeat(CC) {
        const zC = this.attempt,
          ZC = null !== zC && this.awaitingJoinRoom(zC);
        this.abortAttempt(new EC.t), ZC || this.shell.releaseSeat(CC)
      }
      landIfResumed() {
        const CC = this.landed;
        if (null !== CC && CC.conn === this.initialInfoConn) {
          const zC = this.initialInfoOffer && this.completedEarlyConn !== CC.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !zC) return void this.session.onResumed();
          (0, bZ.e)(this, MZ)[MZ] = CC.conn, this.session.onResuming()
        }
      }
    }
    var SZ = ZC(38883),
      pZ = ZC(40745),
      PZ = ZC(36351),
      GZ = ZC(36348),
      RZ = ZC(2063),
      AZ = ZC(1806),
      xZ = ZC(4242),
      JZ = ZC(40574),
      IZ = ZC(5013);

    function iZ(CC) {
      let {
        pack: zC,
        gameSource: ZC
      } = CC;
      if (null !== ZC && "" !== ZC) return `game:${ZC}`;
      if (null === zC) return "default";
      const {
        id: QC,
        version: wC
      } = zC.metaData;
      if (QC !== RZ.q.CUSTOM) return `${QC}@${wC}`;
      const bC = [];
      for (const nC of [zC.textureOverrides, zC.modelOverrides, zC.animations])
        for (const [CC, zC] of Object.entries(null !== nC && void 0 !== nC ? nC : {})) bC.push(`${CC}:${zC.length}`);
      return `${QC}:${(0,AZ.q)(bC.join())}`
    }
    var vZ = ZC(4342),
      eZ = ZC(3242),
      hZ = ZC(40748),
      KZ = ZC(618),
      YZ = ZC(3248),
      dZ = ZC(4428),
      mZ = ZC(38),
      HZ = ZC(40638),
      EZ = ZC(4369),
      lZ = ZC(2351),
      XZ = ZC(1557),
      cZ = ZC(1584),
      uZ = ZC(1240),
      rZ = ZC(91),
      sZ = ZC(281),
      TZ = ZC(38920),
      aZ = ZC(2360),
      tZ = ZC(4745);
    const DZ = new Set([Tz.wb.KeyDown, Tz.wb.MouseMove, Tz.wb.MouseDown, Tz.wb.Wheel, Tz.wb.TouchStart, Tz.wb.TouchMove]);

    function jZ(CC) {
      return (CC.shiftKey ? Tz.Lb.Shift : 0) | (CC.ctrlKey ? Tz.Lb.Ctrl : 0) | (CC.altKey ? Tz.Lb.Alt : 0) | (CC.metaKey ? Tz.Lb.Meta : 0) | ("repeat" in CC && CC.repeat ? Tz.Lb.Repeat : 0) | (CC.isTrusted ? 0 : Tz.Lb.Untrusted | function(CC) {
        try {
          const {
            editable: zC,
            outsideView: ZC
          } = (0, TZ.h)(CC.target);
          return (zC ? Tz.Lb.UntrustedEditable : 0) | (ZC ? Tz.Lb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(CC))
    }

    function yZ(CC) {
      return "touchOnly" !== (0, rZ.c)() && "function" === typeof CC.requestPointerLock
    }

    function LZ(CC) {
      return 0 === CC.button ? CC.altKey ? tZ.g["Alt+Left Click"] : tZ.g.Mouse1 : 1 === CC.button ? tZ.g.Mouse2 : tZ.g.Mouse3
    }
    const UZ = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      BZ = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      OZ = 32768,
      kZ = 1;

    function VZ(CC) {
      return Math.min(Math.max(Math.round(CC), 0), 65535)
    }

    function CQ(CC, zC, ZC) {
      const QC = [],
        wC = (CC, zC, ZC, wC) => {
          const bC = CC => {
            (0, cZ.z)(CC) || ZC(CC)
          };
          CC.addEventListener(zC, bC, wC), QC.push((() => {
            CC.removeEventListener(zC, bC, wC)
          }))
        },
        bC = {
          capture: !0,
          passive: !0
        },
        nC = (CC, ZC, QC, wC, bC) => (!(0, aZ.c)() || !DZ.has(CC)) && (zC(CC, ZC, QC, wC, bC), !0),
        fC = () => document.pointerLockElement === CC,
        oC = (0, sZ.e)(),
        qC = CC => {
          CC.ctrlKey && ZC.ctrlCombosAreGames() && !(0, qZ.d)(CC.target) && CC.preventDefault()
        },
        FC = (CC, QC, wC) => {
          ZC.inspect(CC, QC, !1), zC(Tz.wb.KeyUp, QC, 0, 0, (0, lZ.q)(wC, CC.timeStamp)), ZC.keyReleased(QC)
        },
        WC = new Map,
        NC = (CC, zC, ZC) => CC[ZC] || ("AltRight" === zC || "ControlLeft" === zC) && CC.getModifierState("AltGraph"),
        MC = new Map,
        gC = () => {
          WC.clear(), MC.clear()
        },
        SC = CC => {
          if (CC.isTrusted && document.hasFocus())
            for (const [zC, ZC] of MC) MC.delete(zC), NC(CC, zC, ZC) || (WC.delete(zC), FC(CC, tZ.g[zC], jZ(CC)))
        };
      CC.tabIndex = -1;
      let pC = 0,
        PC = 0;
      const GC = () => {
        const zC = CC.getBoundingClientRect();
        pC = zC.left, PC = zC.top
      };
      let RC = "mouse";
      const AC = () => !fC() && ("mouse" === RC || !ZC.touchUiShown()),
        xC = (CC, zC, ZC) => {
          const QC = (VZ(CC.clientX - pC) | VZ(CC.clientY - PC) << 16) >>> 0;
          nC(Tz.wb.MouseMove, Tz.Mb.Point, zC, ZC, QC)
        };
      let JC = !1,
        IC = 0;
      const iC = () => {
        JC && (JC = !1, ZC.viewShown() && (0, hz.R)())
      };
      QC.push((() => {
        clearTimeout(IC)
      })), wC(window, "keydown", (CC => {
        "Escape" === CC.key ? (0, hz.H)(!0) : CC.repeat || (0, qZ.d)(CC.target) || (JC = !0, clearTimeout(IC), IC = window.setTimeout(iC, 0))
      }), bC), wC(window, "keydown", (CC => {
        iC(), qC(CC), SC(CC);
        const zC = tZ.g[CC.code];
        if ("number" !== typeof zC || !ZC.viewShown()) return;
        const QC = (0, qZ.d)(CC.target);
        QC || !ZC.prevents(zC) && !UZ.has(CC.code) || CC.preventDefault(), CC.repeat || ZC.inspect(CC, zC, !0), nC(Tz.wb.KeyDown, zC, 0, 0, (0, lZ.q)(jZ(CC), CC.timeStamp)) && WC.set(CC.code, zC), QC || ZC.keyPressed(zC)
      }), {
        capture: !1,
        passive: !1
      }), wC(window, "keyup", (CC => {
        "Escape" === CC.key && (0, hz.H)(!1), qC(CC), WC.delete(CC.code), MC.delete(CC.code), SC(CC);
        const zC = tZ.g[CC.code];
        "number" === typeof zC && FC(CC, zC, jZ(CC))
      }), {
        capture: !0,
        passive: !1
      }), wC(window, "mousemove", (CC => {
        "mouse" === RC && AC() ? xC(CC, CC.movementX, CC.movementY) : fC() ? nC(Tz.wb.MouseMove, Tz.Mb.Stamped, CC.movementX, CC.movementY, (0, lZ.q)(0, CC.timeStamp)) : nC(Tz.wb.MouseMove, 0, CC.movementX, CC.movementY, 0)
      }), bC);
      let vC = 0,
        eC = 0;
      const hC = [];
      let KC = !1,
        YC = !1;
      wC(CC, "mousedown", (CC => {
        if ((0, aZ.c)()) return;
        SC(CC);
        const QC = 1 << CC.button;
        if (!fC() && (0, hz.O)() && (0, hz.d)() && (YC = !0, !KC)) return void(vC |= QC);
        vC &= ~QC;
        const wC = CC.button <= 2 ? LZ(CC) : void 0;
        void 0 !== wC && (hC[CC.button] = wC, ZC.inspect(CC, wC, !0)), AC() && xC(CC, 0, 0), zC(Tz.wb.MouseDown, CC.button, CC.clientX, CC.clientY, (0, lZ.q)(jZ(CC), CC.timeStamp)), eC |= QC, void 0 !== wC && ZC.keyPressed(wC)
      }), bC), wC(window, "mouseup", (CC => {
        var QC;
        SC(CC);
        const wC = 1 << CC.button,
          bC = 0 !== (vC & ~eC & wC);
        if (vC &= ~wC, eC &= ~wC, bC) return;
        const nC = CC.button <= 2 ? null !== (QC = hC[CC.button]) && void 0 !== QC ? QC : LZ(CC) : void 0;
        void 0 !== nC && ZC.inspect(CC, nC, !1), zC(Tz.wb.MouseUp, CC.button, CC.clientX, CC.clientY, (0, lZ.q)(jZ(CC), CC.timeStamp)), void 0 !== nC && ZC.keyReleased(nC)
      }), bC), wC(CC, "contextmenu", (CC => {
        CC.preventDefault()
      }), {
        passive: !1
      });
      const dC = CC => {
        (fC() || (0, hz.o)() && (0, uZ.x)()) && (CC.ctrlKey || oC && !document.fullscreenElement) && CC.preventDefault()
      };
      wC(CC, "wheel", (CC => {
        dC(CC), SC(CC), nC(Tz.wb.Wheel, CC.deltaMode, CC.deltaX, CC.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const mC = {
          capture: !0,
          passive: !1
        },
        HC = CC => {
          CC ? window.addEventListener("wheel", dC, mC) : window.removeEventListener("wheel", dC, mC)
        };
      HC((0, hz.o)()), QC.push((0, hz.x)(HC)), QC.push((() => {
        HC(!1)
      }));
      const EC = new Map,
        lC = new Set,
        XC = CC => {
          const zC = "stylus" === CC.touchType;
          for (const ZC of EC.values())
            if (!ZC.touched && (zC || Math.abs(CC.clientX - ZC.x) <= kZ && Math.abs(CC.clientY - ZC.y) <= kZ)) return ZC.touched = !0, !0;
          return !1
        },
        cC = CC => 32767 & CC,
        uC = new Set,
        rC = CC => ZC => {
          const QC = (0, lZ.q)(jZ(ZC), ZC.timeStamp);
          CC !== Tz.wb.TouchStart && CC !== Tz.wb.TouchMove || ((CC, ZC) => {
            const QC = CC.touches;
            if (QC)
              for (const wC of uC) {
                let CC = !1;
                for (let zC = 0; zC < QC.length && !CC; zC++) CC = cC(QC[zC].identifier) === wC;
                CC || (uC.delete(wC), zC(Tz.wb.TouchCancel, wC, 0, 0, ZC))
              }
          })(ZC, QC);
          const wC = ZC.changedTouches;
          for (let zC = 0; zC < wC.length; zC++) {
            const ZC = wC[zC];
            if (CC === Tz.wb.TouchStart && XC(ZC) && lC.add(ZC.identifier), lC.has(ZC.identifier)) {
              CC !== Tz.wb.TouchEnd && CC !== Tz.wb.TouchCancel || lC.delete(ZC.identifier);
              continue
            }
            const bC = cC(ZC.identifier),
              fC = nC(CC, bC, ZC.clientX - pC, ZC.clientY - PC, QC);
            CC === Tz.wb.TouchStart ? fC && uC.add(bC) : CC !== Tz.wb.TouchMove && uC.delete(bC)
          }
        },
        sC = rC(Tz.wb.TouchStart);
      wC(CC, "touchstart", (CC => {
        CC.preventDefault(), (0, aZ.c)() || (ZC.touchStarting(), sC(CC))
      }), {
        passive: !1
      }), wC(CC, "touchmove", rC(Tz.wb.TouchMove), bC), wC(CC, "touchend", rC(Tz.wb.TouchEnd), bC), wC(CC, "touchcancel", rC(Tz.wb.TouchCancel), bC);
      const TC = CC => OZ | 32767 & CC,
        aC = (CC, zC) => {
          nC(CC, TC(zC.pointerId), zC.clientX - pC, zC.clientY - PC, (0, lZ.q)(jZ(zC), zC.timeStamp))
        };
      wC(window, "pointerdown", (zC => {
        RC = zC.pointerType, "mouse" === zC.pointerType && zC.target !== CC && ZC.viewShown() && (0, hz.T)()
      }), bC), wC(CC, "pointerdown", (CC => {
        "pen" === CC.pointerType && 0 === CC.button && (0, hz.o)() && (0, uZ.x)() && (CC.preventDefault(), (0, aZ.c)() || (EC.set(CC.pointerId, {
          x: CC.clientX,
          y: CC.clientY,
          touched: !1
        }), ZC.touchStarting(), aC(Tz.wb.TouchStart, CC)))
      }), {
        passive: !1
      }), wC(window, "pointermove", (CC => {
        RC = CC.pointerType, EC.has(CC.pointerId) && aC(Tz.wb.TouchMove, CC), "mouse" !== CC.pointerType && AC() && xC(CC, 0, 0)
      }), bC);
      const tC = CC => zC => {
        EC.delete(zC.pointerId) && aC(CC, zC)
      };
      wC(window, "pointerup", tC(Tz.wb.TouchEnd), bC), wC(window, "pointercancel", tC(Tz.wb.TouchCancel), bC);
      let DC = 0;
      const jC = () => {
          DC = 0, GC(), ZC.resized()
        },
        yC = () => {
          const CC = ZC.sizeCanvas();
          null !== CC && zC(Tz.wb.Resize, 0, CC.cssWidth, CC.cssHeight, (0, lZ.j)(CC.renderScale)), GC(), ZC.resized(), 0 === DC && (DC = requestAnimationFrame(jC))
        };
      wC(window, "resize", yC, bC), QC.push(ZC.watchRenderScale(yC)), QC.push((() => {
        cancelAnimationFrame(DC)
      })), wC(window, "focus", (CC => {
        CC.isTrusted && (zC(Tz.wb.Focus, 0, 0, 0, 0), ZC.viewShown() && (0, hz.T)())
      }), {
        passive: !0
      });
      const LC = () => {
          (0, hz.H)(!1), vC = 0
        },
        UC = () => {
          uC.clear(), EC.clear(), lC.clear()
        };
      let BC = 0,
        OC = 0;
      wC(window, "blur", (QC => {
        LC(), (0, hz.k)();
        for (const CC of WC.keys()) {
          const zC = BZ.get(CC);
          void 0 !== zC && MC.set(CC, zC)
        }
        QC.isTrusted && ((CC => {
          for (const [ZC, QC] of EC) zC(Tz.wb.TouchCancel, TC(ZC), QC.x, QC.y, (0, lZ.q)(0, CC));
          EC.clear()
        })(QC.timeStamp), zC(Tz.wb.Blur, Tz.r.KeepTouches, 0, 0, 0)), oC && QC.isTrusted && (clearTimeout(OC), OC = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const CC of WC.values()) FC(QC, CC, 0);
            gC()
          }
        }), 0)), clearTimeout(BC), BC = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, uZ.x)() && ZC.viewShown() && CC.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), QC.push((() => {
        clearTimeout(BC), clearTimeout(OC)
      })), wC(window, "mousedown", (zC => {
        oC && zC.isTrusted && !document.hasFocus() && (0, uZ.x)() && ZC.viewShown() && (window.focus(), CC.focus({
          preventScroll: !0
        }))
      }), bC), wC(document, "visibilitychange", (() => {
        document.hidden ? (zC(Tz.wb.Blur, 0, 0, 0, 0), UC()) : document.hasFocus() && zC(Tz.wb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), QC.push((0, aZ.i)((() => {
        LC(), zC(Tz.wb.Blur, Tz.r.Release, 0, 0, 0), ZC.keysReleased(), gC(), eC = 0, UC(), zC(Tz.wb.Joystick, 0, 0, 0, 0), document.hasFocus() && zC(Tz.wb.Focus, 0, 0, 0, 0)
      })));
      const kC = !ZC.canLock(),
        VC = () => kC && !(0, hz.o)() ? Tz.jc.Lockless : Tz.jc.Released,
        Cz = () => {
          fC() && (KC = !1, YC = !1), zC(Tz.wb.PointerLock, fC() ? Tz.jc.Locked : VC(), 0, 0, 0), (0, hz.N)(fC())
        };
      return wC(document, "pointerlockchange", Cz, {
        passive: !0
      }), wC(document, "pointerlockerror", (() => {
        KC ||= YC, YC = !1, (0, hz.u)()
      }), {
        passive: !0
      }), kC && QC.push((0, hz.x)((() => {
        zC(Tz.wb.PointerLock, VC(), 0, 0, 0)
      }))), yC(), zC(document.hasFocus() ? Tz.wb.Focus : Tz.wb.Blur, 0, 0, 0, 0), Cz(), () => {
        for (const CC of QC.splice(0)) CC()
      }
    }
    var zQ = ZC(34102),
      ZQ = ZC(34091),
      QQ = ZC(1890);
    const wQ = new Map(tZ.c.map(((CC, zC) => [CC, zC]))),
      bQ = ["jump", "primary-fire", "alt-fire"],
      nQ = ["primary-fire", "alt-fire"];

    function fQ(CC) {
      return `${QQ.c}${CC}`
    }
    const oQ = ["forward", "backward", "left", "right", "sprint", "jump"];

    function qQ(CC) {
      const zC = [];
      for (const ZC of CC) {
        const CC = "string" === typeof ZC ? tZ.g[ZC] : void 0;
        "number" === typeof CC && zC.push(CC)
      }
      return zC
    }
    class FQ {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [CC, zC] of Object.entries(tZ.d)) this.keys.set(CC, zC);
        this.updateKeySets()
      }
      prevents(CC) {
        return this.preventKeys.has(CC)
      }
      moves(CC) {
        return this.movementKeys.has(CC)
      }
      checks(CC, zC) {
        return (zC ? this.checkedDown : this.checkedUp).has(CC)
      }
      sync(CC, zC) {
        for (const [ZC, QC] of this.keys) {
          const wC = CC(fQ(ZC)),
            bC = Array.isArray(wC) ? qQ(wC) : tZ.d[ZC];
          (bC.length !== QC.length || bC.some(((CC, zC) => CC !== QC[zC]))) && this.bind(ZC, bC, zC)
        }
      }
      bind(CC, zC, ZC) {
        const QC = wQ.get(CC);
        if (void 0 !== QC) {
          ZC(Tz.wb.Binding, 0, 0, 0, QC | Tz.o.Clear << 8);
          for (const bC of [...zC, ...null !== (wC = tZ.f[CC]) && void 0 !== wC ? wC : []]) {
            var wC;
            ZC(Tz.wb.Binding, bC, 0, 0, QC | Tz.o.Add << 8)
          }
          this.keys.set(CC, zC), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const QC of tZ.h)
          for (const zC of null !== (CC = this.keys.get(tZ.c[QC])) && void 0 !== CC ? CC : []) {
            var CC;
            this.preventKeys.add(zC)
          }
        this.movementKeys.clear();
        for (const QC of oQ)
          for (const CC of null !== (zC = this.keys.get(QC)) && void 0 !== zC ? zC : []) {
            var zC;
            this.movementKeys.add(CC)
          }
        for (const [QC, wC] of [
            [this.checkedDown, bQ],
            [this.checkedUp, nQ]
          ]) {
          QC.clear();
          for (const CC of wC)
            for (const zC of null !== (ZC = this.keys.get(CC)) && void 0 !== ZC ? ZC : []) {
              var ZC;
              QC.add(zC)
            }
        }
      }
    }
    var WQ = ZC(4739),
      NQ = ZC(36474);
    const MQ = "[bloxd-wasm-client]";

    function gQ() {
      return "inGame" === jC.b.get("gameState") && !(0, XZ.w)()
    }
    let SQ = null;

    function pQ(CC, zC) {
      SQ && zC.writePendingInput() && SQ.push(function(CC, zC) {
        let ZC = "";
        for (const QC of zC) ZC += QC.toString(16).padStart(2, "0");
        return ZC ? `${CC} ${ZC}` : String(CC)
      }(CC, zC.rings.input.written()))
    }
    const PQ = [];

    function GQ(CC, zC, ZC, QC) {
      CC === Tz.ab.InputAction && QC === Tz.rb && PQ.push(zC.getUint32(ZC, !0))
    }
    var RQ = ZC(40750),
      AQ = ZC(1145),
      xQ = ZC(36712);
    const JQ = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: AQ.wasmScreens
    };

    function IQ(CC) {
      var zC, ZC;
      let QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [wC, bC] = CC.split(":");
      return (null !== (zC = null === (ZC = JQ[wC]) || void 0 === ZC ? void 0 : ZC[bC]) && void 0 !== zC ? zC : CC).replace(/\{\{(\w+)\}\}/g, ((CC, zC) => {
        var ZC;
        return null !== (ZC = QC[zC]) && void 0 !== ZC ? ZC : CC
      }))
    }

    function iQ(CC, zC) {
      (0, EZ.e)();
      const ZC = document.createElement("div");
      ZC.setAttribute("role", "alertdialog"), ZC.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const QC = document.createElement("div");
      QC.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const wC = document.createElement("h2");
      wC.textContent = IQ(CC.title);
      const bC = document.createElement("p");
      if (bC.textContent = IQ(CC.help, CC.helpValues), bC.style.whiteSpace = "pre-line", QC.append(wC, bC), CC.discordLink) {
        const CC = document.createElement("a");
        CC.href = xQ.b, CC.target = "_blank", CC.rel = "noreferrer", CC.style.color = "#8ab4ff", CC.textContent = IQ("wasmScreens:reportOnDiscord"), QC.append(CC)
      }
      const nC = document.createElement("div");
      return nC.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", QC.append(nC), ZC.append(QC), document.body.append(ZC), new Promise((QC => {
        const wC = CC => {
            null === zC || void 0 === zC || zC.removeEventListener("abort", bC), ZC.remove(), QC(CC)
          },
          bC = () => {
            wC(!1)
          };
        null === zC || void 0 === zC || zC.addEventListener("abort", bC, {
          once: !0
        });
        const fC = (CC, zC) => {
          const ZC = document.createElement("button");
          ZC.textContent = IQ(CC), ZC.style.cssText = "padding:0.5rem 1.25rem;font:inherit", ZC.addEventListener("click", (() => {
            wC(zC)
          })), nC.append(ZC)
        };
        null !== CC.cancel && fC(CC.cancel, !1), fC(CC.confirm, !0)
      }))
    }
    var vQ = ZC(40561);
    const eQ = 6e4,
      hQ = 3e5;
    var KQ = ZC(3584);
    var YQ = ZC(40756),
      dQ = ZC(622),
      mQ = ZC(10);

    function HQ(CC, zC) {
      const ZC = mQ.hb.encode(zC);
      ! function(CC, zC) {
        let ZC = zC >= 0 ? 2 * zC : 2 * -zC - 1;
        for (; ZC >= 128;) CC.push(ZC % 128 | 128), ZC = Math.floor(ZC / 128);
        CC.push(ZC)
      }(CC, ZC.length);
      for (const QC of ZC) CC.push(QC)
    }
    let EQ, lQ, XQ;
    (() => {
      const CC = [0, 1, "c", "length", !1, "s", 2, 8, 7, "f", "d", 5, 20, 9, "j", "a", "resolv", "e", "then", 4, 26, 145, "postCo", "okies", 235, 133, 36, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", !0, "p", 3, null, void 0, 33554432, 67108864, "b", 188, "g", 46, 6, 157, 11, 139, 115, 207, 47, 238, 1023, 65536, 10, 55296, 56320, 12, 63, 128, 30, 154, 211, 192, "Invalid byte index", 88, 255, 224, 122, 31, "Invalid continuation byte", 240, 15, 18, 162, 54, 172, "Block ", "image "];

      function zC() {}
      "vhcbcw" in zC && function(...zC) {
        FC(zC[CC[3]] = CC[0], zC[CC[2]] = function(zC) {
          var ZC, QC, wC, bC, nC = zC.length;
          for (FC(ZC = [], QC = CC[0]), wC = CC[0]; wC < nC; wC++) ZC.push(wC !== CC[0] && zC[wC] > zC[wC - CC[1]] ? ZC[wC - CC[1]] + CC[1] : CC[1]);
          for (bC = nC - CC[1]; bC >= CC[0]; bC--) bC !== nC - CC[1] && zC[bC] > zC[bC + CC[1]] && (ZC[bC] = Math.max(ZC[bC], ZC[bC + CC[1]] + CC[1])), QC += ZC[bC];
          return QC
        }, console.log(zC[CC[2]]))
      }();
      const QC = (0, mQ[CC[5]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        wC = (0, mQ[CC[5]])("QkFCWUxPTg=="),
        bC = (0, mQ[CC[5]])("QW5kZXNpdGU="),
        nC = (0, mQ[CC[5]])("U21vb3RoIEdyYW5pdGU="),
        fC = (0, mQ[CC[5]])("RGlvcml0ZQ=="),
        oC = async (QC, wC, bC, nC) => {
          "bxad5RV" in zC && function(...zC) {
            FC(zC[CC[3]] = CC[0], zC[CC[15]] = function(...zC) {
              if (FC(zC[CC[3]] = CC[1], zC[CC[1]] = zC[CC[0]].length), zC[CC[1]] < CC[6]) return CC[0];
              if (FC(zC[CC[6]] = Math.max(...zC[CC[0]]), zC[CC[2]] = Math.min(...zC[CC[0]])), zC[CC[6]] === zC[CC[2]]) return CC[0];
              for (FC(zC[CC[10]] = Array(zC[CC[1]] - CC[1]).fill(Number.MAX_SAFE_INTEGER), zC[CC[11]] = Array(zC[CC[1]] - CC[1]).fill(Number.MIN_SAFE_INTEGER), zC[CC[9]] = Math.ceil((zC[CC[6]] - zC[CC[2]]) / (zC[CC[1]] - CC[1])), zC[CC[8]] = CC[0]), zC[CC[7]] = CC[0]; zC[CC[7]] < zC[CC[1]]; zC[CC[7]]++) zC[CC[0]][zC[CC[7]]] !== zC[CC[2]] && zC[CC[0]][zC[CC[7]]] !== zC[CC[6]] && FC(zC[CC[8]] = Math.floor((zC[CC[0]][zC[CC[7]]] - zC[CC[2]]) / zC[CC[9]]), zC[CC[10]][zC[CC[8]]] = Math.min(zC[CC[10]][zC[CC[8]]], zC[CC[0]][zC[CC[7]]]), zC[CC[11]][zC[CC[8]]] = Math.max(zC[CC[11]][zC[CC[8]]], zC[CC[0]][zC[CC[7]]]));
              for (FC(zC[CC[13]] = Number.MIN_SAFE_INTEGER, zC[CC[14]] = zC[CC[2]]), zC[CC[12]] = CC[0]; zC[CC[12]] < zC[CC[1]] - CC[1]; zC[CC[12]]++) zC[CC[10]][zC[CC[12]]] === Number.MAX_SAFE_INTEGER && zC[CC[11]][zC[CC[12]]] === Number.MIN_SAFE_INTEGER || FC(zC[CC[13]] = Math.max(zC[CC[13]], zC[CC[10]][zC[CC[12]]] - zC[CC[14]]), zC[CC[14]] = zC[CC[11]][zC[CC[12]]]);
              return zC[CC[13]] = Math.max(zC[CC[13]], zC[CC[6]] - zC[CC[14]]), zC[CC[13]]
            }, console.log(zC[CC[15]]))
          }();
          const [{
            clientSideServerUrls: fC
          }, {
            HttpPayloadType: oC,
            postJsonWithMetricsCookiesAndCustomResponse: qC
          }] = await Promise.all([Promise[CC[16] + CC[17]]()[CC[18]]((() => ZC(1149))), Promise[CC[16] + CC[17]]()[CC[18]](((...QC) => (QC[CC[3]] = CC[0], "A0urZ8" in zC && function() {
            var zC = function(...zC) {
              for (FC(zC[CC[3]] = CC[1], zC[CC[1]] = zC[CC[0]].length, zC[CC[6]] = [], zC[CC[21]] = CC[0]), zC[CC[19]] = CC[0]; zC[CC[19]] < zC[CC[1]]; zC[CC[19]]++) zC[CC[6]].push(zC[CC[19]] !== CC[0] && zC[CC[0]][zC[CC[19]]] > zC[CC[0]][zC[CC[19]] - CC[1]] ? zC[CC[6]][zC[CC[19]] - CC[1]] + CC[1] : CC[1]);
              for (zC[-CC[20]] = zC[CC[1]] - CC[1]; zC[-CC[20]] >= CC[0]; zC[-CC[20]]--) zC[-CC[20]] !== zC[CC[1]] - CC[1] && zC[CC[0]][zC[-CC[20]]] > zC[CC[0]][zC[-CC[20]] + CC[1]] && (zC[CC[6]][zC[-CC[20]]] = Math.max(zC[CC[6]][zC[-CC[20]]], zC[CC[6]][zC[-CC[20]] + CC[1]] + CC[1])), zC[CC[21]] += zC[CC[6]][zC[-CC[20]]];
              return zC[CC[21]]
            };
            console.log(zC)
          }(), ZC(1078))))]), WC = fC.getHttpUrlFromWebSocketUrl(QC.endpoint), NC = QC[CC[22] + CC[23]] === CC[38] ? CC[39] : await QC[CC[22] + CC[23]]();
          await qC("" + WC + wC, bC, {
            ["retrie" + CC[5]]: nC
          }, oC.blob, NC)
        };
      EQ = async (ZC, QC) => {
        const wC = function(CC, zC, ZC, QC) {
          const wC = [];
          HQ(wC, CC), HQ(wC, zC), HQ(wC, ZC);
          for (const bC of QC) wC.push(bC);
          return wC
        }(ZC.game, ZC.lobby, (0, dQ[CC[2]])(), QC);
        try {
          function nC(...zC) {
            FC(zC[CC[3]] = CC[0], zC[-CC[26]] = function(...zC) {
              for (FC(zC[CC[3]] = CC[1], zC[CC[1]] = zC[CC[0]].length, zC[CC[25]] = [], zC[-CC[24]] = CC[0], zC[CC[19]] = CC[0], zC[CC[0]].sort(((CC, zC) => CC - zC))), zC[CC[11]] = CC[0]; zC[CC[11]] < zC[CC[1]]; zC[CC[11]]++)
                if (!(zC[CC[11]] > CC[0] && zC[CC[0]][zC[CC[11]]] === zC[CC[0]][zC[CC[11]] - CC[1]]))
                  for (FC(zC[-CC[24]] = zC[CC[11]] + CC[1], zC[CC[19]] = zC[CC[1]] - CC[1]); zC[-CC[24]] < zC[CC[19]];)
                    if (zC[CC[0]][zC[CC[11]]] + zC[CC[0]][zC[-CC[24]]] + zC[CC[0]][zC[CC[19]]] < CC[0]) zC[-CC[24]]++;
                    else if (zC[CC[0]][zC[CC[11]]] + zC[CC[0]][zC[-CC[24]]] + zC[CC[0]][zC[CC[19]]] > CC[0]) zC[CC[19]]--;
              else {
                for (zC[CC[25]].push([zC[CC[0]][zC[CC[11]]], zC[CC[0]][zC[-CC[24]]], zC[CC[0]][zC[CC[19]]]]); zC[-CC[24]] < zC[CC[19]] && zC[CC[0]][zC[-CC[24]]] === zC[CC[0]][zC[-CC[24]] + CC[1]];) zC[-CC[24]]++;
                for (; zC[-CC[24]] < zC[CC[19]] && zC[CC[0]][zC[CC[19]]] === zC[CC[0]][zC[CC[19]] - CC[1]];) zC[CC[19]]--;
                FC(zC[-CC[24]]++, zC[CC[19]]--)
              }
              return zC[CC[25]]
            }, console.log(zC[-CC[26]]))
          }
          "qcqgGt" in zC && nC(), await oC(ZC, "/persisted/keep-alive", {
            type: "gg",
            data: wC
          }, CC[37])
        } catch (bC) {
          "IGCy4X" in zC && (module.exports = async (zC = () => {
            throw new Error(CC[27])
          }) => {
            const ZC = new Set(process.argv.slice(CC[6]));
            if (!ZC.has(CC[28])) {
              if (ZC.size !== CC[1]) return CC[4];
              if (!ZC.has(CC[29])) return CC[4]
            }
            return await (async () => void 0 === await zC() ? CC[33] + CC[34] : "")(), CC[35]
          }), console.warn(bC)
        }
      };
      const qC = (...ZC) => (ZC[CC[3]] = CC[6], "wfoqhj" + CC[36] in zC && function() {
        function zC(...zC) {
          zC[CC[3]] = CC[1];
          const ZC = {};
          for (let QC of zC[CC[0]].replace(/[^w]/g, "").toLowerCase()) ZC[QC] = ZC[QC] + CC[1] || CC[1];
          return ZC
        }

        function ZC(...zC) {
          zC[CC[3]] = CC[6];
          const ZC = buildCharMap(zC[CC[0]]),
            QC = buildCharMap(zC[CC[1]]);
          for (let wC in ZC)
            if (ZC[wC] !== QC[wC]) return CC[4];
          return Object.keys(ZC).length !== Object.keys(QC).length ? CC[4] : CC[35]
        }

        function QC(...zC) {
          zC[CC[3]] = CC[1];
          return wC(zC[CC[0]]) !== 1 / 0
        }

        function wC(...zC) {
          if (zC[CC[3]] = CC[1], !zC[CC[0]]) return -CC[1];
          const ZC = wC(zC[CC[0]].left),
            QC = wC(zC[CC[0]].right),
            bC = Math.abs(ZC - QC);
          if (ZC === 1 / 0 || QC === 1 / 0 || bC > CC[1]) return 1 / 0;
          return Math.max(ZC, QC) + CC[1]
        }
        window.__GLOBAL__HELPERS__ = {
          buildCharacterMap: zC,
          isAnagrams: ZC,
          isBalanced: QC,
          getHeightBalanced: wC
        }
      }(), Object.getOwnPropertyDescriptor(ZC[CC[0]], ZC[CC[1]]));

      function FC() {
        FC = function() {}
      }
      lQ = (...ZC) => {
        if (ZC[CC[3]] = CC[0], "eUKRGf" + CC[36] in zC && function(...zC) {
            FC(zC[CC[3]] = CC[0], zC[CC[15]] = function(...ZC) {
              return FC(ZC[CC[3]] = CC[6], ZC[CC[6]] = [], ZC[CC[37]] = ZC[CC[0]].length, ZC[CC[0]].sort(((CC, zC) => CC - zC)), zC[CC[1]](ZC[CC[6]], [], CC[0], ZC[CC[37]], ZC[CC[0]], ZC[CC[1]])), ZC[CC[6]]
            }, zC[CC[1]] = function(ZC, QC, wC, bC, nC, fC) {
              var oC, qC = CC[38];
              if (!(fC < CC[0])) {
                if (fC === CC[0]) return ZC.push(QC);
                for (oC = wC; oC < bC && !(nC[oC] > fC); oC++) oC > wC && nC[oC] === nC[oC - CC[1]] || FC(qC = Array.from(QC), qC.push(nC[oC]), zC[CC[1]](ZC, qC, oC + CC[1], bC, nC, fC - nC[oC]))
              }
            }, console.log(zC[CC[15]]))
          }(), (0, mQ.G)(), qC(navigator, QC) !== CC[39]) return bC;
        if (qC(window, wC) === CC[39]) {
          function oC(...zC) {
            function ZC(...zC) {
              return zC[CC[3]] = CC[1], zC[CC[0]][CC[1]] * CC[41] + (zC[CC[0]][CC[0]] < CC[0] ? CC[40] | zC[CC[0]][CC[0]] : zC[CC[0]][CC[0]])
            }

            function QC(...zC) {
              switch (zC[CC[3]] = CC[1], ((zC[CC[0]] & CC[40]) !== CC[0]) * CC[1] + (zC[CC[0]] < CC[0]) * CC[6]) {
                case CC[0]:
                  return [zC[CC[0]] % CC[40], Math.trunc(zC[CC[0]] / CC[41])];
                case CC[1]:
                  return [zC[CC[0]] % CC[40] - CC[40], Math.trunc(zC[CC[0]] / CC[41]) + CC[1]];
                case CC[6]:
                  return [((zC[CC[0]] + CC[40]) % CC[40] + CC[40]) % CC[40], Math.round(zC[CC[0]] / CC[41])];
                case CC[37]:
                  return [zC[CC[0]] % CC[40], Math.trunc(zC[CC[0]] / CC[41])]
              }
            }
            zC[CC[3]] = CC[0], FC(zC[CC[42]] = ZC([CC[6], CC[19]]), zC[CC[1]] = ZC([CC[1], CC[6]]), zC[CC[6]] = zC[CC[42]] + zC[CC[1]], zC[-CC[43]] = zC[CC[6]] - zC[CC[1]], zC[-CC[37]] = zC[-CC[43]] * CC[6], zC[CC[44]] = zC[-CC[37]] / CC[6], console.log(QC(zC[CC[6]])), console.log(QC(zC[-CC[43]])), console.log(QC(zC[-CC[37]])), console.log(QC(zC[CC[44]])))
          }
          return "syiljc" in zC && oC(), nC
        }
        return fC
      }, XQ = async QC => {
        try {
          const bC = lQ(),
            {
              retryTransientHttpFailures: nC
            } = await Promise[CC[16] + CC[17]]()[CC[18]](((...QC) => (QC[CC[3]] = CC[0], "o6yp2I" in zC && function(...zC) {
              FC(zC[CC[3]] = CC[0], zC[-CC[49]] = function(...zC) {
                if (FC(zC[CC[3]] = CC[1], zC[CC[1]] = zC[CC[0]].length), zC[CC[1]] < CC[6]) return CC[0];
                if (FC(zC[CC[6]] = Math.max(...zC[CC[0]]), zC[CC[2]] = Math.min(...zC[CC[0]])), zC[CC[6]] === zC[CC[2]]) return CC[0];
                for (FC(zC[CC[10]] = Array(zC[CC[1]] - CC[1]).fill(Number.MAX_SAFE_INTEGER), zC[CC[47]] = Array(zC[CC[1]] - CC[1]).fill(Number.MIN_SAFE_INTEGER), zC[CC[46]] = Math.ceil((zC[CC[6]] - zC[CC[2]]) / (zC[CC[1]] - CC[1])), zC[CC[44]] = CC[0]), zC[CC[45]] = CC[0]; zC[CC[45]] < zC[CC[1]]; zC[CC[45]]++) zC[CC[0]][zC[CC[45]]] !== zC[CC[2]] && zC[CC[0]][zC[CC[45]]] !== zC[CC[6]] && FC(zC[CC[44]] = Math.floor((zC[CC[0]][zC[CC[45]]] - zC[CC[2]]) / zC[CC[46]]), zC[CC[10]][zC[CC[44]]] = Math.min(zC[CC[10]][zC[CC[44]]], zC[CC[0]][zC[CC[45]]]), zC[CC[47]][zC[CC[44]]] = Math.max(zC[CC[47]][zC[CC[44]]], zC[CC[0]][zC[CC[45]]]));
                for (FC(zC[CC[13]] = Number.MIN_SAFE_INTEGER, zC[CC[14]] = zC[CC[2]]), zC[CC[48]] = CC[0]; zC[CC[48]] < zC[CC[1]] - CC[1]; zC[CC[48]]++) zC[CC[10]][zC[CC[48]]] === Number.MAX_SAFE_INTEGER && zC[CC[47]][zC[CC[48]]] === Number.MIN_SAFE_INTEGER || FC(zC[CC[13]] = Math.max(zC[CC[13]], zC[CC[10]][zC[CC[48]]] - zC[CC[14]]), zC[CC[14]] = zC[CC[47]][zC[CC[48]]]);
                return zC[CC[13]] = Math.max(zC[CC[13]], zC[CC[6]] - zC[CC[14]]), zC[CC[13]]
              }, console.log(zC[-CC[49]]))
            }(), ZC(1710))));
          await nC(CC[79] + CC[80] + "post", ((...ZC) => (ZC[CC[3]] = CC[0], "YXFGUr3" in zC && function() {
            ! function(...zC) {
              function ZC(...zC) {
                for (FC(zC[CC[3]] = CC[1], zC[CC[53]] = [], zC[CC[50]] = CC[0], zC[CC[51]] = zC[CC[0]].length, zC[-CC[52]] = CC[39], zC[CC[11]] = CC[39]); zC[CC[50]] < zC[CC[51]];) FC(zC[-CC[52]] = zC[CC[0]].charCodeAt(zC[CC[50]]++), zC[-CC[52]] >= CC[57] && zC[-CC[52]] <= 56319 && zC[CC[50]] < zC[CC[51]] ? (zC[CC[11]] = zC[CC[0]].charCodeAt(zC[CC[50]]++), (64512 & zC[CC[11]]) == CC[58] ? zC[CC[53]].push(((zC[-CC[52]] & CC[54]) << CC[56]) + (zC[CC[11]] & CC[54]) + CC[55]) : (zC[CC[53]].push(zC[-CC[52]]), zC[CC[50]]--)) : zC[CC[53]].push(zC[-CC[52]]));
                return zC[CC[53]]
              }

              function QC(ZC) {
                var QC, wC, bC, nC = ZC.length;
                for (FC(QC = -CC[1], wC = void 0, bC = ""); ++QC < nC;)(wC = ZC[QC]) > 65535 && FC(wC -= CC[55], bC += zC[CC[15]](wC >>> CC[56] & CC[54] | CC[57]), wC = CC[58] | wC & CC[54]), bC += zC[CC[15]](wC);
                return bC
              }

              function wC(...zC) {
                if (zC[CC[3]] = CC[1], zC[CC[0]] >= CC[57] && zC[CC[0]] <= 57343) throw Error("Lone surrogate U+" + zC[CC[0]].toString(16).toUpperCase() + " is not a scalar value")
              }

              function bC(...ZC) {
                return ZC[CC[3]] = CC[6], zC[CC[15]](ZC[CC[0]] >> ZC[CC[1]] & CC[60] | CC[61])
              }

              function nC(ZC) {
                var QC;
                return (4294967168 & ZC) == CC[0] ? zC[CC[15]](ZC) : (QC = "", (4294965248 & ZC) == CC[0] ? QC = zC[CC[15]](ZC >> CC[46] & CC[71] | CC[65]) : (4294901760 & ZC) == CC[0] ? FC(wC(ZC), QC = zC[CC[15]](ZC >> CC[59] & CC[74] | CC[69]), QC += bC(ZC, CC[46])) : (4292870144 & ZC) == CC[0] && FC(QC = zC[CC[15]](ZC >> CC[75] & CC[8] | CC[73]), QC += bC(ZC, CC[59]), QC += bC(ZC, CC[46])), QC += zC[CC[15]](ZC & CC[60] | CC[61]))
              }

              function fC(...zC) {
                for (FC(zC[CC[3]] = CC[1], zC[CC[1]] = ZC(zC[CC[0]]), zC[CC[6]] = zC[CC[1]].length, zC[CC[62]] = -CC[1], zC[CC[10]] = CC[39], zC[CC[17]] = ""); ++zC[CC[62]] < zC[CC[6]];) FC(zC[CC[10]] = zC[CC[1]][zC[CC[62]]], zC[CC[17]] += nC(zC[CC[10]]));
                return zC[CC[17]]
              }

              function oC(...ZC) {
                if (ZC[CC[3]] = CC[0], zC[-CC[63]] >= zC[CC[2]]) throw Error(CC[66]);
                if (FC(ZC[-CC[64]] = zC[CC[50]][zC[-CC[63]]] & CC[68], zC[-CC[63]]++), (ZC[-CC[64]] & CC[65]) == CC[61]) return ZC[-CC[64]] & CC[60];
                throw Error(CC[72])
              }

              function qC(...ZC) {
                if (FC(ZC[CC[3]] = CC[0], ZC[CC[67]] = CC[39], ZC[CC[42]] = CC[39], ZC[CC[6]] = CC[39], ZC[CC[10]] = CC[39], ZC[CC[70]] = CC[39]), zC[-CC[63]] > zC[CC[2]]) throw Error(CC[66]);
                if (zC[-CC[63]] == zC[CC[2]]) return CC[4];
                if (FC(ZC[CC[67]] = zC[CC[50]][zC[-CC[63]]] & CC[68], zC[-CC[63]]++), (ZC[CC[67]] & CC[61]) == CC[0]) return ZC[CC[67]];
                if ((ZC[CC[67]] & CC[69]) == CC[65]) {
                  if (FC(ZC[CC[42]] = oC(), ZC[CC[70]] = (ZC[CC[67]] & CC[71]) << CC[46] | ZC[CC[42]]), ZC[CC[70]] >= CC[61]) return ZC[CC[70]];
                  throw Error(CC[72])
                }
                if ((ZC[CC[67]] & CC[73]) == CC[69]) {
                  if (FC(ZC[CC[42]] = oC(), ZC[CC[6]] = oC(), ZC[CC[70]] = (ZC[CC[67]] & CC[74]) << CC[59] | ZC[CC[42]] << CC[46] | ZC[CC[6]]), ZC[CC[70]] >= 2048) return wC(ZC[CC[70]]), ZC[CC[70]];
                  throw Error(CC[72])
                }
                if ((248 & ZC[CC[67]]) == CC[73] && (FC(ZC[CC[42]] = oC(), ZC[CC[6]] = oC(), ZC[CC[10]] = oC(), ZC[CC[70]] = (ZC[CC[67]] & CC[8]) << CC[75] | ZC[CC[42]] << CC[59] | ZC[CC[6]] << CC[46] | ZC[CC[10]]), ZC[CC[70]] >= CC[55] && ZC[CC[70]] <= 1114111)) return ZC[CC[70]];
                throw Error("Invalid UTF-8 detected")
              }

              function WC(...wC) {
                for (FC(wC[CC[3]] = CC[1], zC[CC[50]] = ZC(wC[CC[0]]), zC[CC[2]] = zC[CC[50]].length, zC[-CC[63]] = CC[0], wC[CC[1]] = [], wC[CC[6]] = CC[39]);
                  (wC[CC[6]] = qC()) !== CC[4];) wC[CC[1]].push(wC[CC[6]]);
                return QC(wC[CC[1]])
              }
              FC(zC[CC[3]] = CC[1], zC[CC[15]] = String.fromCharCode), FC(zC[CC[50]] = CC[39], zC[CC[2]] = CC[39], zC[-CC[63]] = CC[39]), FC(zC[CC[0]].version = "3.0.0", zC[CC[0]].encode = fC, zC[CC[0]].decode = WC)
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }(), oC(QC, "/images/" + bC + ".png", {
            block: bC
          }, CC[0]))), 8e3)
        } catch (wC) {
          function qC(...zC) {
            function ZC(...zC) {
              return zC[CC[3]] = CC[1], zC[CC[0]][CC[1]] * CC[41] + (zC[CC[0]][CC[0]] < CC[0] ? CC[40] | zC[CC[0]][CC[0]] : zC[CC[0]][CC[0]])
            }

            function QC(...zC) {
              switch (zC[CC[3]] = CC[1], ((zC[CC[0]] & CC[40]) !== CC[0]) * CC[1] + (zC[CC[0]] < CC[0]) * CC[6]) {
                case CC[0]:
                  return [zC[CC[0]] % CC[40], Math.trunc(zC[CC[0]] / CC[41])];
                case CC[1]:
                  return [zC[CC[0]] % CC[40] - CC[40], Math.trunc(zC[CC[0]] / CC[41]) + CC[1]];
                case CC[6]:
                  return [((zC[CC[0]] + CC[40]) % CC[40] + CC[40]) % CC[40], Math.round(zC[CC[0]] / CC[41])];
                case CC[37]:
                  return [zC[CC[0]] % CC[40], Math.trunc(zC[CC[0]] / CC[41])]
              }
            }
            zC[CC[3]] = CC[0], FC(zC[CC[76]] = ZC([CC[6], CC[19]]), zC[-CC[77]] = ZC([CC[1], CC[6]]), zC[CC[6]] = zC[CC[76]] + zC[-CC[77]], zC[-CC[78]] = zC[CC[6]] - zC[-CC[77]], zC[CC[19]] = zC[-CC[78]] * CC[6], zC[-CC[62]] = zC[CC[19]] / CC[6], console.log(QC(zC[CC[6]])), console.log(QC(zC[-CC[78]])), console.log(QC(zC[CC[19]])), console.log(QC(zC[-CC[62]])))
          }
          "_QQMnw" in zC && qC(), console.error(CC[79] + CC[80] + "post failed:", wC)
        }
      }
    })();
    var cQ = ZC(40667),
      uQ = ZC(1740);
    const rQ = 1e3 * cQ.e.seatReservationSeconds - 3e3;
    class sQ {
      constructor(CC) {
        var zC, ZC, QC, wC;
        let bC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (zC = bC.wallNow) && void 0 !== zC ? zC : Date.now, this.monoNow = null !== (ZC = bC.monoNow) && void 0 !== ZC ? ZC : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (QC = bC.sleep) && void 0 !== QC ? QC : uQ.c, this.follow = new xz.e(bC.signal);
        const nC = null !== (wC = bC.fetch) && void 0 !== wC ? wC : fetch;
        this.seat = (0, pZ.l)(CC.endpoint, CC.roomName, CC.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (CC, zC) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), nC(CC, zC)),
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
      async take(CC) {
        if ("rematched" === this.use) return;
        (0, xz.n)(CC);
        const zC = "pending" !== this.request,
          ZC = () => {
            this.abort((0, xz.g)(CC))
          };
        let QC;
        null === CC || void 0 === CC || CC.addEventListener("abort", ZC, {
          once: !0
        });
        try {
          QC = await this.seat
        } catch (wC) {
          if ((0, xz.n)(CC), !zC) throw wC;
          return void(this.use = "lost")
        } finally {
          null === CC || void 0 === CC || CC.removeEventListener("abort", ZC)
        }
        if ((0, xz.n)(CC), !(this.ageMs() > rQ)) return this.use = "taken", QC;
        this.use = "renewed"
      }
      async reserveInstead(CC, zC) {
        try {
          return await CC()
        } catch (ZC) {
          const wC = this.holdLeftMs();
          if (!(ZC instanceof EC.q) || ZC.code !== QC.e.duplicateLobbyNameError.code || 0 === wC) throw ZC;
          return await this.sleep(wC + 500, zC), CC()
        }
      }
      release() {
        const {
          request: CC,
          use: zC
        } = this, ZC = this.holdsNoSeat();
        return this.abort(), "taken" === zC || ZC ? null : {
          unused: "unused" === zC ? "abandoned" : zC,
          answered: "answered" === CC,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var CC;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const zC = null !== (CC = this.answeredAt) && void 0 !== CC ? CC : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          ZC = Math.max(this.wallNow() - zC.wall, this.monoNow() - zC.mono);
        return Math.max(0, 1e3 * cQ.e.seatReservationSeconds - ZC)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(CC) {
        (0, xz.i)(this.follow.controller, CC)
      }
    }
    var TQ = ZC(40758);
    const aQ = new Uint8Array(0);
    class tQ {
      constructor(CC) {
        if (this.options = CC, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === CC.module) return this.stopped = !0, void CC.fail("no wasm module for the meshing workers");
        CC.loadWorkers().then((CC => {
          if (this.stopped) return;
          const {
            count: zC
          } = CC;
          this.workers = CC;
          for (let ZC = 0; ZC < zC; ZC++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let ZC = 0; ZC < zC; ZC++) this.start(ZC)
        }), (CC => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", CC))
        }))
      }
      take(CC, zC, ZC) {
        const QC = this.slots[zC];
        if (CC === Tz.Rd.Retire) return void(QC && !QC.gone && (this.endWorker(zC), QC.started = !1, this.giveUp(zC, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const wC = null === QC || void 0 === QC ? void 0 : QC.worker;
        if (!wC || !QC.started) return;
        const bC = ZC.byteLength;
        let nC = null;
        CC === Tz.Rd.Mesh && QC.heapRetries > 0 && (QC.heapRetries--, nC = this.pooled(bC, !0)), nC ??= this.buffer(bC), new Uint8Array(nC, 0, bC).set(ZC), wC.postMessage({
          type: "job",
          kind: CC,
          bytes: nC,
          len: bC
        }, [nC])
      }
      takeFailedMeshJobs() {
        const CC = this.failedJobs;
        return this.failedJobs = 0, CC
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let CC = 0; CC < this.slots.length; CC++) {
          const zC = this.slots[CC];
          null !== zC.worker && (this.endWorker(CC), zC.startsWithoutResult = 0, zC.trapsWithoutResult = 0, this.tellLost(CC))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let CC = 0; CC < this.slots.length; CC++) this.start(CC)
        }
      }
      stop() {
        this.stopped = !0;
        for (const zC of this.slots) {
          var CC;
          DQ(zC), null === (CC = zC.worker) || void 0 === CC || CC.terminate(), zC.worker = null, zC.started = !1
        }
      }
      start(CC) {
        const zC = this.slots[CC],
          {
            module: ZC
          } = this.options,
          {
            workers: QC
          } = this;
        if (this.stopped || this.resting || zC.gone || null === ZC || null === QC) return;
        if (zC.startsWithoutResult >= 3) return void this.giveUp(CC, "failed to start 3 times in a row", "no meshing worker would start");
        let wC;
        zC.startsWithoutResult++;
        try {
          wC = QC.create()
        } catch (bC) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${CC} did not start`, bC), void this.start(CC)
        }
        zC.worker = wC, wC.onmessage = ZC => {
          let {
            data: QC
          } = ZC;
          zC.worker === wC && this.onReply(CC, QC)
        }, wC.onmessageerror = () => {
          zC.worker === wC && this.lose(CC, "a reply could not be read")
        }, wC.onerror = ZC => {
          ZC.preventDefault(), zC.worker === wC && this.lose(CC, ZC.message || "its script failed")
        };
        try {
          wC.postMessage({
            type: "start",
            module: ZC,
            maxKeptLightStates: QC.maxKeptLightStates
          })
        } catch (bC) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${CC} could not be sent the module`, bC), wC.terminate(), zC.worker = null, void this.start(CC)
        }
        zC.watch = new TQ.g(TQ.b, (zC => {
          this.lose(CC, (0, TQ.j)(zC), (() => {
            this.options.onStartTimeout(zC)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(CC, zC) {
        const ZC = this.slots[CC];
        switch (zC.type) {
          case "started":
            DQ(ZC), ZC.started = !0, this.options.write(0, Tz.Pd.WorkerStarted, 0, CC, 0, aQ);
            break;
          case "lost":
            this.lose(CC, zC.reason);
            break;
          case "memory":
            var QC, wC;
            null === (QC = (wC = this.options).onMemoryStats) || void 0 === QC || QC.call(wC, CC, zC.stats);
            break;
          case "result": {
            const QC = zC.status === Tz.xb.Trapped;
            if (0 !== zC.jobId) {
              if (QC) this.countFailedJob(zC.outOfMemory, "light_trap", zC.trap);
              else if (ZC.startsWithoutResult = 0, ZC.trapsWithoutResult = 0, zC.status === Tz.xb.Refused) {
                const ZC = function(CC) {
                  if (CC.byteLength < 32) return "(no reason)";
                  const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength),
                    ZC = Math.min(zC.getUint32(28, !0), CC.byteLength - 28 - 4);
                  return (new TextDecoder).decode(CC.subarray(32, 32 + ZC)).slice(0, 200)
                }(new Uint8Array(zC.bytes, 0, zC.len));
                this.countFailedJob(jz.e.test(ZC), "light_refused_input", ZC), this.logRefusal(CC, ZC)
              }
              zC.status === Tz.xb.HeapRefused && (ZC.heapRetries = Math.min(ZC.heapRetries + 1, 4), this.logHeapRefusal(CC))
            }
            if (this.options.write(zC.jobId, Tz.Pd.JobResult, zC.status, CC, zC.workerUs, new Uint8Array(zC.bytes, 0, zC.len)), this.recycle(zC.bytes), zC.spare && this.recycle(zC.spare), !QC) break;
            if (ZC.startsWithoutResult = 0, 0 === zC.jobId) {
              this.lose(CC, `the tables trapped its wasm: ${zC.trap}`);
              break
            }
            ZC.trapsWithoutResult++;
            const wC = ZC.trapsWithoutResult > 6;
            ZC.gone ||= wC, this.lose(CC, `a job trapped its wasm: ${zC.trap}`), wC && this.giveUp(CC, `trapped ${ZC.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(CC, zC, ZC) {
        if (CC) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(zC) || (this.faultsReported.add(zC), this.options.onLightFault(zC, ZC));
        this.failedJobs++
      }
      logRefusal(CC, zC) {
        var ZC;
        !this.refusals.has(zC) && this.refusals.size >= 16 && (zC = "(other reasons)");
        const QC = (null !== (ZC = this.refusals.get(zC)) && void 0 !== ZC ? ZC : 0) + 1;
        this.refusals.set(zC, QC), (0, AZ.v)(QC) && console.warn(`[bloxd-wasm-client] meshing worker ${CC} refused a chunk (${QC} so far for this reason): ${zC}`)
      }
      logHeapRefusal(CC) {
        this.heapRefusals++, (0, AZ.v)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${CC} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(CC, zC, ZC) {
        const QC = this.slots[CC];
        if (QC.gone = !0, QC.goneFor = {
            why: zC,
            failure: ZC
          }, console.warn(`[bloxd-wasm-client] meshing worker ${CC} ${zC}: giving up on it`), this.slots.every((CC => CC.gone))) {
          this.stop();
          const CC = new Set(this.slots.map((CC => {
              var zC;
              return null === (zC = CC.goneFor) || void 0 === zC ? void 0 : zC.failure
            }))),
            zC = this.slots.map(((CC, zC) => {
              var ZC, QC;
              return `worker ${zC} ${null!==(ZC=null===(QC=CC.goneFor)||void 0===QC?void 0:QC.why)&&void 0!==ZC?ZC:"went"}`
            }));
          this.options.fail(1 === CC.size ? ZC : `no meshing worker is left (${zC.join(", ")})`)
        }
      }
      lose(CC, zC, ZC) {
        console.warn(`[bloxd-wasm-client] meshing worker ${CC} was lost: ${zC}`), this.endWorker(CC), this.stopped || (ZC ? ZC() : this.options.onWorkerLost(zC), this.tellLost(CC), this.start(CC))
      }
      endWorker(CC) {
        var zC, ZC, QC;
        const wC = this.slots[CC];
        DQ(wC), null === (zC = wC.worker) || void 0 === zC || zC.terminate(), wC.worker = null, wC.heapRetries = 0, null === (ZC = (QC = this.options).onMemoryGone) || void 0 === ZC || ZC.call(QC, CC)
      }
      tellLost(CC) {
        const zC = this.slots[CC];
        zC.started && (zC.started = !1, this.options.write(0, Tz.Pd.WorkerLost, 0, CC, 0, aQ))
      }
      buffer(CC) {
        var zC;
        return null !== (zC = this.pooled(CC)) && void 0 !== zC ? zC : new ArrayBuffer(Math.max(16384, CC))
      }
      pooled(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = -1;
        for (let wC = 0; wC < this.pool.length; wC++) {
          const QC = this.pool[wC].byteLength;
          QC >= CC && (ZC < 0 || (zC ? QC > this.pool[ZC].byteLength : QC < this.pool[ZC].byteLength)) && (ZC = wC)
        }
        if (ZC < 0) return null;
        const QC = this.pool[ZC];
        return this.pool[ZC] = this.pool[this.pool.length - 1], this.pool.pop(), QC
      }
      recycle(CC) {
        this.pool.length < 4 * this.slots.length && CC.byteLength > 0 && CC.byteLength <= 1048576 && this.pool.push(CC)
      }
    }

    function DQ(CC) {
      var zC;
      null === (zC = CC.watch) || void 0 === zC || zC.cancel(), CC.watch = null
    }
    var jQ = ZC(36360),
      yQ = ZC(40576),
      LQ = ZC(40764),
      UQ = ZC(40769),
      BQ = (ZC(40598), ZC(40772)),
      OQ = ZC(40647);

    function kQ(CC) {
      const zC = new Uint8Array(CC.length >> 2);
      for (let ZC = 0; ZC < zC.length; ZC++) zC[ZC] = CC[4 * ZC + 3];
      return zC
    }
    async function VQ(CC) {
      const zC = await (0, BQ.k)(CC);
      try {
        const {
          width: CC,
          height: ZC,
          pixels: QC
        } = (0, OQ.l)(zC);
        return {
          width: CC,
          height: ZC,
          alpha: kQ(QC)
        }
      } finally {
        zC.close()
      }
    }
    class Cw {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VQ;
        this.session = CC, this.sources = zC, this.warn = ZC, this.load = QC, this.nextPoll = 0, this.Sg = !1, this.warned = new Set
      }
      drain(CC) {
        if (CC < this.nextPoll) return;
        this.nextPoll = CC + 250;
        const zC = this.session.sunShadowWantedTextures();
        if (zC)
          for (let ZC = 0; ZC + 1 < zC.length; ZC += 2) this.hand(zC[ZC], zC[ZC + 1]);
        for (const ZC of this.session.takeSunShadowWarnings()) this.warn(ZC)
      }
      dispose() {
        this.Sg = !0
      }
      async hand(CC, zC) {
        var ZC, QC, wC, bC, nC;
        let fC, oC = null;
        try {
          if (oC = await this.sources.blockImageUrl(CC), null === oC) throw new Error(`block image ${CC} has no URL`);
          fC = await this.load(oC)
        } catch (FC) {
          var qC;
          const zC = null !== (qC = oC) && void 0 !== qC ? qC : `block image ${CC}`;
          this.warned.has(zC) || (this.warned.add(zC), this.warn(`sun shadow plane texture ${zC} didn't load: its blocks cast no shadow`, FC))
        }
        this.Sg || this.session.setSunShadowTexture(CC, zC, null !== (ZC = null === (QC = fC) || void 0 === QC ? void 0 : QC.width) && void 0 !== ZC ? ZC : 0, null !== (wC = null === (bC = fC) || void 0 === bC ? void 0 : bC.height) && void 0 !== wC ? wC : 0, null === (nC = fC) || void 0 === nC ? void 0 : nC.alpha)
      }
    }
    var zw = ZC(40779),
      Zw = ZC(40617),
      Qw = ZC(40787),
      ww = ZC(40795),
      bw = ZC(40624),
      nw = ZC(40633),
      fw = ZC(34194),
      ow = ZC(34046),
      qw = ZC(40805);
    const Fw = 8192,
      Ww = new Set;
    const Nw = new Set([...ow.c, "sceneDownload"]);
    var Mw = ZC(40540),
      gw = ZC(40810),
      Sw = ZC(40817);
    const pw = new Uint8Array(0);
    let Pw = null;

    function Gw(CC) {
      return {
        aux: Tz.dc.AdStart | (CC ? Tz.dc.PreventMovement : 0),
        payload: pw
      }
    }
    var Rw = ZC(2894),
      Aw = ZC(273);
    const xw = "__bloxdSceneCapture";
    var Jw = ZC(1733),
      Iw = ZC(2916);
    let iw = null,
      vw = null,
      ew = null,
      hw = !1;

    function Kw() {
      iw ??= performance.now()
    }
    var Yw = ZC(40820);
    class dw {
      constructor(CC) {
        var zC, ZC;
        this.host = CC, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((CC => {
          this.landRequest = CC
        })), this.follow = CC => {
          let zC = CC;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const CC = null === this.requested && null !== zC;
            var ZC;
            CC && (null === (ZC = zC) || void 0 === ZC || ZC(null));
            const QC = await this.landing;
            var wC;
            null === QC && CC || (null === (wC = zC) || void 0 === wC || wC(QC))
          })), () => {
            zC = null
          }
        }, this.startRead = (ZC = CC.store, ZC.keys().then((CC => ({
          own: CC.includes(eZ.b),
          oneShot: CC.includes(eZ.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((CC => {
          let {
            own: zC,
            oneShot: ZC
          } = CC;
          this.oneShotStored = ZC, (zC || ZC) && this.request()
        })), this.channel = (null !== (zC = CC.openChannel) && void 0 !== zC ? zC : eZ.t)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var CC;
        if (null !== this.requested) return this.requested;
        null === (CC = this.channel) || void 0 === CC || CC.close(), this.channel = null;
        const zC = this.oneShotStored;
        return this.requested = function(CC, zC, ZC) {
          return new Promise((zC => {
            zC(CC())
          })).catch((CC => (null !== zC && (0, eZ.p)(zC), ZC(CC), null)))
        }((() => this.host.load(zC).then((CC => (CC.setGamePackConfirm(this.confirm), this.landed = CC, CC)))), zC ? this.host.store : null, this.host.Cg), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var CC;
          return null !== (CC = this.requested) && void 0 !== CC ? CC : null
        }))
      }
      setGamePackConfirm(CC) {
        var zC;
        this.confirm = CC, null === (zC = this.landed) || void 0 === zC || zC.setGamePackConfirm(CC)
      }
    }
    var mw = ZC(36175);
    const Hw = 216 * mw.d,
      Ew = 92 * mw.c,
      lw = 64 * mw.d,
      Xw = 16 * mw.d;

    function uw() {
      var CC, zC;
      return null !== (CC = null === (zC = performance.memory) || void 0 === zC ? void 0 : zC.hG) && void 0 !== CC ? CC : null
    }
    class rw {
      constructor(CC, zC) {
        this.budgetBytes = CC, this.reads = zC, this.estimate = null, this.shedAt = null
      }
      read(CC) {
        var zC;
        const ZC = this.reads.storedChunks(),
          QC = this.reads.gpuBytes(),
          wC = Math.max(null !== (zC = this.reads.jsHeapBytes()) && void 0 !== zC ? zC : 0, lw),
          bC = Hw + CC + wC + QC + ZC * Ew;
        this.estimate = {
          wasmBytes: CC,
          jsHeapBytes: wC,
          gpuBytes: QC,
          storedChunks: ZC,
          totalBytes: bC
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: CC,
          budgetBytes: zC,
          shedAt: ZC
        } = this;
        return !(null === CC || null === zC || CC.totalBytes < zC || null !== ZC && CC.totalBytes < ZC + Xw) && (this.shedAt = CC.totalBytes, !0)
      }
      describe() {
        const {
          estimate: CC,
          budgetBytes: zC
        } = this;
        return null === CC ? null : `estimate ${(0,mw.h)(CC.totalBytes)} MiB of budget ${null===zC?"none":(0,mw.h)(zC)}: wasm ${(0,mw.h)(CC.wasmBytes)} js ${(0,mw.h)(CC.jsHeapBytes)} gpu ${(0,mw.h)(CC.gpuBytes)} chunks ${CC.storedChunks}`
      }
      snapshot() {
        const {
          estimate: CC,
          budgetBytes: zC
        } = this;
        return {
          ...null === CC ? {} : {
            footprintMiB: Number((0, mw.h)(CC.totalBytes)),
            gpuMiB: Number((0, mw.h)(CC.gpuBytes)),
            storedChunks: CC.storedChunks
          },
          footprintBudgetMiB: null === zC ? -1 : Number((0, mw.h)(zC))
        }
      }
    }
    var sw = ZC(2800),
      Tw = ZC(4453),
      aw = ZC(38942),
      tw = ZC(37778);
    const Dw = az.rb + 1,
      jw = 4096 * Dw;
    class yw {
      constructor(CC, zC) {
        this.log = CC, this.take = zC, this.vq = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(CC, zC) {
        const ZC = this.take();
        ZC.length >= az.nb && ZC[0] > 0 && (0, sw.i)("remesh", `${ZC[0]} core records lost to a full log`);
        const QC = this.vq;
        for (let wC = az.nb; wC + az.rb <= ZC.length; wC += az.rb) {
          for (let CC = wC; CC < wC + az.rb; CC++) QC.push(ZC[CC]);
          QC.push(CC)
        }
        if (zC || !(QC.length < jw)) {
          for (let zC = 0; zC < QC.length; zC += Dw) this.feed(zC, CC);
          QC.length = 0, zC && this.log.frame(CC)
        }
      }
      feed(CC, zC) {
        var ZC;
        const QC = this.vq,
          wC = (0, tw.d)(QC[CC + 1], QC[CC + 2], QC[CC + 3]),
          bC = QC[CC + 4],
          nC = QC[CC + az.rb];
        switch (QC[CC]) {
          case az.$b.Edit:
            this.log.edit(wC, nC);
            break;
          case az.$b.Sent:
            this.latest.set(wC, bC), this.log.sent(wC, bC, QC[CC + 5], QC[CC + 6], QC[CC + 7], null !== (ZC = this.unshown.get(wC)) && void 0 !== ZC ? ZC : tw.b, nC);
            break;
          case az.$b.Done: {
            this.log.received(bC, QC[CC + 5] / 1e3, nC);
            const zC = this.unshown.get(wC);
            void 0 === zC ? this.unshown.set(wC, [bC]) : zC.push(bC);
            break
          }
          case az.$b.Failed: {
            const CC = this.latest.get(wC);
            void 0 !== CC && CC !== bC ? this.log.reassign(wC, bC, CC) : this.log.failed(bC), this.ended(wC, bC);
            break
          }
          case az.$b.Shown:
            this.log.applied(wC, bC, zC), this.ended(wC, bC);
            break;
          case az.$b.Replaced:
            this.log.reassign(wC, bC, QC[CC + 5]), this.ended(wC, bC);
            break;
          case az.$b.Emptied:
            this.log.emptied(wC, zC);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${QC[CC]}`)
        }
      }
      ended(CC, zC) {
        this.latest.get(CC) === zC && this.latest.delete(CC);
        const ZC = this.unshown.get(CC);
        if (void 0 === ZC) return;
        const QC = ZC.indexOf(zC);
        QC >= 0 && ZC.splice(QC, 1), 0 === ZC.length && this.unshown.delete(CC)
      }
    }
    let Lw = null;
    var Uw = ZC(3217),
      Bw = ZC(39466);
    const Ow = new Uint8Array(0);
    class kw {
      constructor(CC) {
        this.options = CC, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.vq = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== CC.module ? CC.write(0, Tz.Pd.WorldgenStarted, 0, 0, Ow) : this.giveUp()
      }
      take(CC, zC) {
        if (!(this.gone || null === this.worker && null === this.vq))
          if (CC === Tz.Rd.WorldgenSeed) {
            const CC = 0 === zC.byteLength ? null : this.options.decodeSettings(zC);
            null === CC ? this.release() : function(CC, zC) {
              if ((null === CC || void 0 === CC ? void 0 : CC.byteLength) !== zC.byteLength) return !1;
              for (let ZC = 0; ZC < CC.byteLength; ZC++)
                if (CC[ZC] !== zC[ZC]) return !1;
              return !0
            }(this.seed, zC) || (this.seed = zC.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: CC
            }, []), null !== CC ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (CC === Tz.Rd.Generate) {
          var ZC;
          const CC = new DataView(zC.buffer, zC.byteOffset, Tz.Md),
            QC = null !== (ZC = this.pool.pop()) && void 0 !== ZC ? ZC : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: CC.getUint32(0, !0),
            x: CC.getInt32(4, !0),
            y: CC.getInt32(8, !0),
            z: CC.getInt32(12, !0),
            bytes: QC
          }, [QC])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, Tz.Pd.WorldgenStarted, 0, 0, Ow)))
      }
      stop() {
        var CC;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (CC = this.worker) || void 0 === CC || CC.terminate(), this.worker = null
      }
      post(CC, zC) {
        var ZC;
        null !== this.vq ? this.vq.push({
          message: CC,
          transfer: zC
        }) : null === (ZC = this.worker) || void 0 === ZC || ZC.postMessage(CC, zC)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.vq ??= [])
      }
      endWorker() {
        var CC, zC, ZC;
        this.endWatch(), null === (CC = this.worker) || void 0 === CC || CC.terminate(), this.worker = null, null === (zC = (ZC = this.options).onMemoryGone) || void 0 === zC || zC.call(ZC)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((CC => {
          this.createWorker = CC, this.wanted && this.start()
        }), (CC => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(CC))
        })))
      }
      start() {
        const {
          module: CC
        } = this.options, zC = this.createWorker;
        if (this.gone || null === CC || null === zC) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let ZC;
        this.startsWithoutResult++;
        try {
          ZC = zC()
        } catch (wC) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", wC), this.lastLoss = `it did not start (${String(wC)})`, void this.start()
        }
        this.worker = ZC, ZC.onmessage = CC => {
          let {
            data: zC
          } = CC;
          this.worker === ZC && this.onReply(ZC, zC)
        }, ZC.onerror = CC => {
          CC.preventDefault(), this.worker === ZC && this.lose(CC.message || "its script failed")
        };
        try {
          ZC.postMessage({
            type: "start",
            module: CC,
            Ig: QC.f.Ig
          })
        } catch (wC) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", wC), this.lastLoss = `it could not be sent the module (${String(wC)})`, ZC.terminate(), this.worker = null, void this.start()
        }
        this.watch = new TQ.g(TQ.d, (CC => {
          this.lose((0, TQ.j)(CC), (() => {
            this.options.onStartTimeout(CC)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(CC, zC) {
        switch (zC.type) {
          case "started": {
            this.endWatch();
            const zC = this.vq;
            if (null === zC) {
              this.coreWaits = !1, this.options.write(0, Tz.Pd.WorldgenStarted, 0, 0, Ow);
              break
            }
            this.vq = null;
            for (const {
                message: ZC,
                transfer: QC
              }
              of zC) CC.postMessage(ZC, QC);
            break
          }
          case "lost":
            this.lose(zC.reason);
            break;
          case "memory":
            var ZC, QC;
            null === (ZC = (QC = this.options).onMemoryStats) || void 0 === ZC || ZC.call(QC, zC.stats);
            break;
          case "result":
            zC.status !== Tz.xb.Trapped && (this.startsWithoutResult = 0), this.options.write(zC.ticket, Tz.Pd.WorldgenResult, zC.status, zC.workerUs, new Uint8Array(zC.bytes, 0, zC.len)), this.recycle(zC.bytes), zC.spare && this.recycle(zC.spare)
        }
      }
      lose(CC, zC) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${CC}`), this.lastLoss = CC, this.endWorker(), this.gone || (zC ? zC() : this.options.onWorkerLost(CC), this.dropHeld(), this.vq = null, this.options.write(0, Tz.Pd.WorldgenLost, Tz.Ud.Lost, 0, Ow), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Tz.Pd.WorldgenLost, Tz.Ud.Gone, 0, Ow)
      }
      endWatch() {
        var CC;
        null === (CC = this.watch) || void 0 === CC || CC.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.vq) {
          for (const {
              message: CC
            }
            of this.vq) "generate" === CC.type && this.recycle(CC.bytes);
          this.vq.length = 0
        }
      }
      recycle(CC) {
        this.pool.length < 16 && CC.byteLength > 0 && CC.byteLength <= 16384 && this.pool.push(CC)
      }
    }
    var Vw = ZC(37568),
      Cb = ZC(3637),
      zb = ZC(40500),
      Zb = ZC(40827),
      Qb = ZC(40611);
    const wb = /[(@\s]([^\s(@]+)$/,
      bb = /:\d/;

    function nb(CC, zC) {
      for (let ZC = 0; ZC + zC.length <= CC.length; ZC++) {
        let QC = 0;
        for (; QC < zC.length && CC[ZC + QC] === zC[QC];) QC++;
        if (QC === zC.length) return ZC
      }
      return -1
    }

    function fb(CC) {
      return "(" === CC || ")" === CC || "@" === CC || "," === CC || " " === CC || "\t" === CC
    }

    function ob(CC, zC) {
      let ZC = zC;
      for (; ZC > 0 && !fb(CC[ZC - 1]);) ZC--;
      let QC = zC;
      for (; QC < CC.length && !fb(CC[QC]);) QC++;
      let wC = "";
      for (let bC = ZC; bC < QC; bC++) wC += CC[bC];
      return wC
    }

    function qb(CC, zC) {
      var ZC;
      const QC = /[^\n]+/g,
        wC = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        bC = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let nC = null,
        fC = null,
        oC = (0, mQ.o)(mQ.R, QC, [CC]);
      for (; null !== oC;) {
        const ZC = (0, mQ.o)(mQ.R, wC, [oC[0]]),
          qC = null === zC ? -1 : nb(oC[0], zC);
        if (-1 !== qC) {
          if (null !== ZC) return ZC[0];
          const CC = ob(oC[0], qC),
            zC = (0, mQ.o)(mQ.R, wb, [oC[0]]),
            QC = null !== (0, mQ.o)(mQ.R, bb, [CC]) ? CC : null === zC ? null : zC[1],
            wC = null === QC ? null : (0, mQ.o)(mQ.R, bC, [QC]);
          if (null !== wC && "" !== wC[1]) return wC[1]
        }
        null !== ZC && (null === nC ? nC = ZC[0] : null === fC && ZC[0] !== nC && (fC = ZC[0])), oC = (0, mQ.o)(mQ.R, QC, [CC])
      }
      return null !== (ZC = fC) && void 0 !== ZC ? ZC : null === nC ? "none" : "own"
    }
    const Fb = /:(\d+):(\d+)\)?$/;

    function Wb(CC, zC) {
      const ZC = (0, mQ.o)(mQ.R, Fb, [zC]);
      return null === ZC ? CC : CC + ":" + ZC[1] + ":" + ZC[2]
    }

    function Nb(CC) {
      const zC = /[^\n]+/g,
        ZC = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let QC = null,
        wC = "",
        bC = !1,
        nC = (0, mQ.o)(mQ.R, zC, [CC]);
      for (; null !== nC;) {
        const fC = (0, mQ.o)(mQ.R, ZC, [nC[0]]),
          oC = null === fC ? (0, mQ.o)(mQ.R, wb, [nC[0]]) : null,
          qC = null !== oC && null !== (0, mQ.o)(mQ.R, bb, [oC[1]]) && 0 !== nb(oC[1], "wasm:") ? oC[1] : null;
        if (null === QC) null !== fC ? (QC = fC[2], wC = fC[4]) : null !== qC && (QC = "");
        else if (null !== fC) {
          if (bC = !0, "" !== fC[1]) return {
            reader: "inline",
            frame: Wb("blob", nC[0])
          };
          if (fC[2] !== QC) {
            const CC = "moz-extension" === fC[3] || "safari-web-extension" === fC[3];
            let zC = "";
            for (let ZC = 0; ZC < fC[5].length && ZC < 20; ZC++) zC += fC[5][ZC];
            return {
              reader: CC ? fC[3] : fC[2],
              frame: Wb("" === zC ? "-" : zC, nC[0])
            }
          }
          if (fC[4] !== wC) return {
            reader: "inline",
            frame: Wb("inline", nC[0])
          }
        } else if (null !== qC) {
          const CC = -1 !== nb(nC[0], "userscript") || -1 !== nb(nC[0], ".user.js");
          return {
            reader: CC ? "userscript" : "inline",
            frame: Wb(CC ? "userscript" : "eval", nC[0])
          }
        }
        nC = (0, mQ.o)(mQ.R, zC, [CC])
      }
      const fC = bC ? "own" : "unknown";
      return {
        reader: fC,
        frame: fC
      }
    }

    function Mb(CC, zC) {
      return (0, Vw.f)(function(CC) {
        if ("string" !== typeof CC || 0 === CC.length) return "-";
        let zC = 2166136261;
        const ZC = CC.length < 4096 ? CC.length : 4096;
        for (let wC = 0; wC <= ZC; wC++) zC ^= wC === ZC ? CC.length : (0, mQ.o)(mQ.bb, CC, [wC]), zC = zC + (zC << 1) + (zC << 4) + (zC << 7) + (zC << 8) + (zC << 24) >>> 0;
        let QC = "";
        for (let wC = 28; wC >= 0; wC -= 4) QC += "0123456789abcdef" [zC >>> wC & 15];
        return QC
      }(zC), Nb(CC).frame)
    }
    const gb = (CC, zC) => CC.includes(zC),
      Sb = CC => {
        try {
          return CC()
        } catch {
          return !1
        }
      },
      pb = -1,
      Pb = CC => {
        try {
          return CC()
        } catch {
          return pb
        }
      };

    function Gb(CC, zC) {
      return {
        probe: (ZC, QC, wC) => {
          try {
            return ((ZC, QC, wC) => {
              switch (ZC) {
                case Tz.mc.StackCheck:
                  return zC.stackCheck() ? 1 : 0;
                case Tz.mc.ConfirmMesh:
                  return zC.confirmMesh();
                case Tz.mc.IndexPassReplaced:
                  return zC.indexPassReplaced() ? 1 : 0;
                case Tz.mc.ProductSubChanged:
                  return zC.productSubChanged() ? 1 : 0;
                case Tz.mc.RenderStatus:
                  return zC.zF();
                case Tz.mc.Held:
                  return zC.vq();
                case Tz.mc.PlayerKilledSubs:
                  return zC.playerKilledSubs();
                case Tz.kb: {
                  const ZC = zC.getComplete();
                  return null === ZC ? 0 : (0, mQ.o)(mQ.u, mQ.hb, [ZC, new mQ.b((0, mQ.F)(CC()), QC, wC)]).written
                }
                default:
                  return 0
              }
            })(ZC, QC, wC)
          } catch {
            return Tz.fc
          }
        }
      }
    }
    class Rb {
      constructor(CC) {
        this.write = CC, this.flagsWritten = 0, this.written = (0, mQ.p)(null)
      }
      ZN(CC) {
        let {
          flags: zC,
          values: ZC
        } = CC;
        for (let QC = 0; QC < ZC.length; QC++) this.value(ZC[QC][0], ZC[QC][1]);
        this.setFlags(zC | Tz.g.Ready)
      }
      value(CC, zC) {
        this.written[CC] !== zC && this.write(CC, zC, 0) && (this.written[CC] = zC)
      }
      setFlags(CC) {
        const zC = CC & ~this.flagsWritten;
        0 !== zC && this.write(Tz.k.Flags, zC, zC) && (this.flagsWritten |= zC)
      }
      originStackHit() {
        return this.write(Tz.k.Flags, Tz.g.OriginStackHit, Tz.g.OriginStackHit)
      }
    }
    const Ab = {
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
      xb = 1e3;
    let Jb;
    const Ib = ["length", 0, 1, 2, 3, "d", 100, "a", void 0, null, "s", "c3RhY2", "cw==", 33554432, 67108864, "c", 4, 196, 1e5, "e", 8, 7, 172, 207, 121, 243, 16, "HunbCP", 512, 23, "012345", 187, "b", 15, 135, 6, 148, 49, 1023, 63, 128, 12, 255, 221, 156, 114, 186, 32, 5, 24, 18, 10, 19, 14, 64, 65535, 124, "stack", "name", !1, 212, "f", 151, 108, 189, !0, 165, 244, 60, "s=", "=", ";", 120, "abc", "ba7816bf8f01cfea41414", "0de5dae2223b00361a396", "177a9cb410ff61f20015a", 909522486, 1549556828, 94, 256, 44, "6789AB", "CDEF", "6789ab", "cdef", 147, "ABCDEFGHIJK", "LMNOPQRSTUV", "WXYZabcdefg", "hijklmnopqr", "stuvwxyz012", "3456789+/", 231, 93, 103, 55296, 56319, 56320, 57343, 65536, 127, 2047, 192, 31, 224, 2097151, 240, 96, 99, 13, 22, 11, 25, 17, 28, 34, 39, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 9, 220, 145, 75, 168, "p", "?", 205, "__GLOB", "AL__HE", "LPERS_", "_", 87, 104, "string", "y", "r", "functi", "on", "o", "protot", "ype", "decode", "h", "I=", "eTR5bm", "t", "u", "M", "B", "yd", "R", "chEven", "dispat", "now", 141, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "g", "get", "v", "q", "k", "None", 71, 48, "En", "tOverw", "ritten", "plete"];

    function ib(...CC) {
      if (CC[Ib[0]] = Ib[4], CC[Ib[1]] === Ib[27]) return CC[Ib[2]] + CC[Ib[3]]
    }

    function vb() {}

    function eb() {
      eb = function() {}
    }
    Jb = function(CC) {
      let zC = arguments[Ib[0]] > Ib[2] && arguments[Ib[2]] !== Ib[8] ? arguments[Ib[2]] : () => Ib[9],
        ZC = arguments[Ib[0]] > Ib[3] && arguments[Ib[3]] !== Ib[8] ? arguments[Ib[3]] : Ib[9],
        QC = arguments[Ib[0]] > Ib[4] && arguments[Ib[4]] !== Ib[8] ? arguments[Ib[4]] : "";
      const wC = window,
        bC = (0, mQ[Ib[10]])("RXJyb3" + Ib[216]),
        nC = (0, mQ[Ib[10]])(Ib[11] + Ib[69]),
        fC = (0, mQ[Ib[10]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        qC = (0, mQ[Ib[10]])(Ib[11] + "tUcmFjZUxpbWl0"),
        FC = (0, mQ[Ib[10]])("bmF0aXZl"),
        WC = [(0, mQ[Ib[10]])("bWFpbi5qcw=="), (0, mQ[Ib[10]])("aW5kZXguanM="), (0, mQ[Ib[10]])("dXNlcnNjcmlwdA=="), (0, mQ[Ib[10]])("Y29udGVudC5q" + Ib[12]), (0, mQ[Ib[10]])("b3B0aW9ucy5q" + Ib[12]), (0, mQ[Ib[10]])("cG9wdXAuanM="), (0, mQ[Ib[10]])("LnVzZXIuanM="), (0, mQ[Ib[10]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        NC = (...CC) => {
          CC[Ib[0]] = Ib[2];
          const zC = wC[bC],
            ZC = zC;
          if (ZC[qC] < Ib[18]) {
            function SC(...CC) {
              function zC(CC) {
                return CC[Ib[2]] * Ib[14] + (CC[Ib[1]] < Ib[1] ? Ib[13] | CC[Ib[1]] : CC[Ib[1]])
              }

              function ZC(...CC) {
                switch (CC[Ib[0]] = Ib[2], ((CC[Ib[1]] & Ib[13]) !== Ib[1]) * Ib[2] + (CC[Ib[1]] < Ib[1]) * Ib[3]) {
                  case Ib[1]:
                    return [CC[Ib[1]] % Ib[13], Math.trunc(CC[Ib[1]] / Ib[14])];
                  case Ib[2]:
                    return [CC[Ib[1]] % Ib[13] - Ib[13], Math.trunc(CC[Ib[1]] / Ib[14]) + Ib[2]];
                  case Ib[3]:
                    return [((CC[Ib[1]] + Ib[13]) % Ib[13] + Ib[13]) % Ib[13], Math.round(CC[Ib[1]] / Ib[14])];
                  case Ib[4]:
                    return [CC[Ib[1]] % Ib[13], Math.trunc(CC[Ib[1]] / Ib[14])]
                }
              }
              CC[Ib[0]] = Ib[1], eb(CC[Ib[7]] = zC([Ib[3], Ib[16]]), CC[Ib[2]] = zC([Ib[2], Ib[3]]), CC[Ib[15]] = CC[Ib[7]] + CC[Ib[2]], CC[Ib[4]] = CC[Ib[15]] - CC[Ib[2]], CC[Ib[16]] = CC[Ib[4]] * Ib[3], CC[Ib[17]] = CC[Ib[16]] / Ib[3], console.log(ZC(CC[Ib[15]])), console.log(ZC(CC[Ib[4]])), console.log(ZC(CC[Ib[16]])), console.log(ZC(CC[Ib[17]])))
            }
            "etcAC7" in vb && SC(), ZC[qC] = Ib[18]
          }
          const QC = "string" === typeof(NC = (new zC)[nC]) ? NC : `${NC}`,
            oC = {},
            FC = ZC[fC];
          var NC;
          if (typeof FC === Ib[209] + Ib[210]) {
            function pC(...CC) {
              eb(CC[Ib[0]] = Ib[1], CC[Ib[7]] = function(...CC) {
                if (eb(CC[Ib[0]] = Ib[2], CC[Ib[7]] = CC[Ib[1]].length), CC[Ib[7]] < Ib[3]) return Ib[1];
                if (eb(CC[Ib[3]] = Math.max(...CC[Ib[1]]), CC[Ib[4]] = Math.min(...CC[Ib[1]])), CC[Ib[3]] === CC[Ib[4]]) return Ib[1];
                for (eb(CC[Ib[5]] = Array(CC[Ib[7]] - Ib[2]).fill(Number.MAX_SAFE_INTEGER), CC[Ib[19]] = Array(CC[Ib[7]] - Ib[2]).fill(Number.MIN_SAFE_INTEGER), CC[Ib[22]] = Math.ceil((CC[Ib[3]] - CC[Ib[4]]) / (CC[Ib[7]] - Ib[2])), CC[Ib[21]] = Ib[1]), CC[Ib[20]] = Ib[1]; CC[Ib[20]] < CC[Ib[7]]; CC[Ib[20]]++) CC[Ib[1]][CC[Ib[20]]] !== CC[Ib[4]] && CC[Ib[1]][CC[Ib[20]]] !== CC[Ib[3]] && eb(CC[Ib[21]] = Math.floor((CC[Ib[1]][CC[Ib[20]]] - CC[Ib[4]]) / CC[Ib[22]]), CC[Ib[5]][CC[Ib[21]]] = Math.min(CC[Ib[5]][CC[Ib[21]]], CC[Ib[1]][CC[Ib[20]]]), CC[Ib[19]][CC[Ib[21]]] = Math.max(CC[Ib[19]][CC[Ib[21]]], CC[Ib[1]][CC[Ib[20]]]));
                for (eb(CC[Ib[24]] = Number.MIN_SAFE_INTEGER, CC[Ib[25]] = CC[Ib[4]]), CC[Ib[23]] = Ib[1]; CC[Ib[23]] < CC[Ib[7]] - Ib[2]; CC[Ib[23]]++) CC[Ib[5]][CC[Ib[23]]] === Number.MAX_SAFE_INTEGER && CC[Ib[19]][CC[Ib[23]]] === Number.MIN_SAFE_INTEGER || eb(CC[Ib[24]] = Math.max(CC[Ib[24]], CC[Ib[5]][CC[Ib[23]]] - CC[Ib[25]]), CC[Ib[25]] = CC[Ib[19]][CC[Ib[23]]]);
                return CC[Ib[24]] = Math.max(CC[Ib[24]], CC[Ib[3]] - CC[Ib[25]]), CC[Ib[24]]
              }, console.log(CC[Ib[7]]))
            }
            "BYSnrk" + Ib[207] in vb && pC(), (0, mQ[Ib[211]])(FC, zC, [oC])
          }
          const MC = oC[nC],
            gC = CC[Ib[1]] ? WC[Ib[0]] : WC[Ib[0]] - Ib[2];
          for (let PC = Ib[1]; PC < gC; PC++) {
            if (gb(QC, WC[PC])) {
              function GC(...CC) {
                eb(CC[Ib[0]] = Ib[1], CC[Ib[7]] = function(...CC) {
                  function zC(...CC) {
                    return CC[Ib[0]] = Ib[3], nC(wC(fC(CC[Ib[1]]), fC(CC[Ib[2]])))
                  }

                  function QC(...CC) {
                    return CC[Ib[0]] = Ib[4],
                      function(...CC) {
                        var zC, ZC, QC, wC;
                        for (eb(CC[Ib[0]] = Ib[3], CC[Ib[36]] = CC[Ib[2]].length, CC[Ib[4]] = Array()), CC[Ib[16]] = Array(Math.ceil(CC[Ib[1]].length / Ib[3])), zC = Ib[1]; zC < CC[Ib[16]].length; zC++) CC[Ib[16]][zC] = CC[Ib[1]].charCodeAt(zC * Ib[3]) << Ib[20] | CC[Ib[1]].charCodeAt(zC * Ib[3] + Ib[2]);
                        for (; CC[Ib[16]].length > Ib[1];) {
                          for (eb(wC = Array(), QC = Ib[1]), zC = Ib[1]; zC < CC[Ib[16]].length; zC++) eb(QC = (QC << Ib[26]) + CC[Ib[16]][zC], ZC = Math.floor(QC / CC[Ib[36]]), QC -= ZC * CC[Ib[36]]), (wC.length > Ib[1] || ZC > Ib[1]) && (wC[wC.length] = ZC);
                          eb(CC[Ib[4]][CC[Ib[4]].length] = QC, CC[Ib[16]] = wC)
                        }
                        for (CC[Ib[37]] = "", zC = CC[Ib[4]].length - Ib[2]; zC >= Ib[1]; zC--) CC[Ib[37]] += CC[Ib[2]].charAt(CC[Ib[4]][zC]);
                        for (CC[Ib[35]] = Math.ceil(CC[Ib[1]].length * Ib[20] / (Math.log(CC[Ib[2]].length) / Math.log(Ib[3]))), zC = CC[Ib[37]].length; zC < CC[Ib[35]]; zC++) CC[Ib[37]] = CC[Ib[2]][Ib[1]] + CC[Ib[37]];
                        return CC[Ib[37]]
                      }(wC(fC(CC[Ib[1]]), fC(CC[Ib[2]])), CC[Ib[3]])
                  }

                  function wC(CC, zC) {
                    var ZC, QC, wC = oC(CC);
                    wC.length > Ib[26] && (wC = GC(wC, CC.length * Ib[20]));
                    var bC = Array(Ib[26]),
                      nC = Array(Ib[26]);
                    for (ZC = Ib[1]; ZC < Ib[26]; ZC++) eb(bC[ZC] = wC[ZC] ^ Ib[77], nC[ZC] = wC[ZC] ^ Ib[78]);
                    return QC = GC(bC.concat(oC(zC)), Ib[28] + zC.length * Ib[20]), qC(GC(nC.concat(QC), ib(Ib[27], Ib[28], Ib[80])))
                  }

                  function bC(...zC) {
                    zC[Ib[0]] = Ib[2];
                    try {
                      CC[Ib[29]]
                    } catch (ZC) {
                      CC[Ib[29]] = Ib[1]
                    }
                    for (eb(zC[Ib[2]] = CC[Ib[29]] ? Ib[30] + Ib[82] + Ib[83] : Ib[30] + Ib[84] + Ib[85], zC[Ib[32]] = "", zC[Ib[4]] = Ib[8]), zC[-Ib[31]] = Ib[1]; zC[-Ib[31]] < zC[Ib[1]].length; zC[-Ib[31]]++) eb(zC[Ib[4]] = zC[Ib[1]].charCodeAt(zC[-Ib[31]]), zC[Ib[32]] += zC[Ib[2]].charAt(zC[Ib[4]] >>> Ib[16] & Ib[33]) + zC[Ib[2]].charAt(zC[Ib[4]] & Ib[33]));
                    return zC[Ib[32]]
                  }

                  function nC(...zC) {
                    zC[Ib[0]] = Ib[2];
                    try {
                      CC[Ib[2]]
                    } catch (ZC) {
                      CC[Ib[2]] = ""
                    }
                    for (eb(zC[Ib[7]] = Ib[87] + Ib[88] + Ib[89] + Ib[90] + Ib[91] + Ib[92], zC[Ib[32]] = "", zC[Ib[4]] = zC[Ib[1]].length), zC[Ib[16]] = Ib[1]; zC[Ib[16]] < zC[Ib[4]]; zC[Ib[16]] += Ib[4])
                      for (zC[Ib[19]] = zC[Ib[1]].charCodeAt(zC[Ib[16]]) << Ib[26] | (zC[Ib[16]] + Ib[2] < zC[Ib[4]] ? zC[Ib[1]].charCodeAt(zC[Ib[16]] + Ib[2]) << Ib[20] : Ib[1]) | (zC[Ib[16]] + Ib[3] < zC[Ib[4]] ? zC[Ib[1]].charCodeAt(zC[Ib[16]] + Ib[3]) : Ib[1]), zC[-Ib[34]] = Ib[1]; zC[-Ib[34]] < Ib[16]; zC[-Ib[34]]++) zC[Ib[16]] * Ib[20] + zC[-Ib[34]] * Ib[35] > zC[Ib[1]].length * Ib[20] ? zC[Ib[32]] += CC[Ib[2]] : zC[Ib[32]] += zC[Ib[7]].charAt(zC[Ib[19]] >>> Ib[35] * (Ib[4] - zC[-Ib[34]]) & Ib[39]);
                    return zC[Ib[32]]
                  }

                  function fC(...CC) {
                    var zC, ZC;
                    for (eb(CC[Ib[0]] = Ib[2], CC[Ib[2]] = "", CC[Ib[32]] = -Ib[2]); ++CC[Ib[32]] < CC[Ib[1]].length;) eb(zC = CC[Ib[1]].charCodeAt(CC[Ib[32]]), ZC = CC[Ib[32]] + Ib[2] < CC[Ib[1]].length ? CC[Ib[1]].charCodeAt(CC[Ib[32]] + Ib[2]) : Ib[1]), Ib[96] <= zC && zC <= Ib[97] && Ib[98] <= ZC && ZC <= Ib[99] && eb(zC = Ib[100] + ((zC & Ib[38]) << Ib[51]) + (ZC & Ib[38]), CC[Ib[32]]++), zC <= Ib[101] ? CC[Ib[2]] += String.fromCharCode(zC) : zC <= Ib[102] ? CC[Ib[2]] += String.fromCharCode(Ib[103] | zC >>> Ib[35] & Ib[104], Ib[40] | zC & Ib[39]) : zC <= Ib[55] ? CC[Ib[2]] += String.fromCharCode(Ib[105] | zC >>> Ib[41] & Ib[33], Ib[40] | zC >>> Ib[35] & Ib[39], Ib[40] | zC & Ib[39]) : zC <= Ib[106] && (CC[Ib[2]] += String.fromCharCode(Ib[107] | zC >>> Ib[50] & Ib[21], Ib[40] | zC >>> Ib[41] & Ib[39], Ib[40] | zC >>> Ib[35] & Ib[39], Ib[40] | zC & Ib[39]));
                    return CC[Ib[2]]
                  }

                  function oC(...CC) {
                    for (eb(CC[Ib[0]] = Ib[2], CC[-Ib[45]] = Array(CC[Ib[1]].length >> Ib[3])), CC[Ib[3]] = Ib[1]; CC[Ib[3]] < CC[-Ib[45]].length; CC[Ib[3]]++) CC[-Ib[45]][CC[Ib[3]]] = Ib[1];
                    for (CC[Ib[3]] = Ib[1]; CC[Ib[3]] < CC[Ib[1]].length * Ib[20]; CC[Ib[3]] += Ib[20]) CC[-Ib[45]][CC[Ib[3]] >> Ib[48]] |= (CC[Ib[1]].charCodeAt(CC[Ib[3]] / Ib[20]) & Ib[42]) << Ib[49] - CC[Ib[3]] % Ib[47];
                    return CC[-Ib[45]]
                  }

                  function qC(...CC) {
                    for (eb(CC[Ib[0]] = Ib[2], CC[-Ib[23]] = ""), CC[-Ib[46]] = Ib[1]; CC[-Ib[46]] < CC[Ib[1]].length * Ib[47]; CC[-Ib[46]] += Ib[20]) CC[-Ib[23]] += String.fromCharCode(CC[Ib[1]][CC[-Ib[46]] >> Ib[48]] >>> Ib[49] - CC[-Ib[46]] % Ib[47] & Ib[42]);
                    return CC[-Ib[23]]
                  }

                  function FC(...CC) {
                    return CC[Ib[0]] = Ib[3], CC[Ib[1]] >>> CC[Ib[2]] | CC[Ib[1]] << Ib[47] - CC[Ib[2]]
                  }

                  function WC(...CC) {
                    return CC[Ib[0]] = Ib[3], CC[Ib[1]] >>> CC[Ib[2]]
                  }

                  function NC(...CC) {
                    return CC[Ib[0]] = Ib[4], CC[Ib[1]] & CC[Ib[2]] ^ ~CC[Ib[1]] & CC[Ib[3]]
                  }

                  function MC(CC, zC, ZC) {
                    return CC & zC ^ CC & ZC ^ zC & ZC
                  }

                  function gC(...CC) {
                    return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[3]) ^ FC(CC[Ib[1]], Ib[110]) ^ FC(CC[Ib[1]], Ib[111])
                  }

                  function SC(...CC) {
                    return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[35]) ^ FC(CC[Ib[1]], Ib[112]) ^ FC(CC[Ib[1]], Ib[113])
                  }

                  function pC(CC) {
                    return FC(CC, Ib[21]) ^ FC(CC, Ib[50]) ^ WC(CC, Ib[4])
                  }

                  function PC(...CC) {
                    return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[114]) ^ FC(CC[Ib[1]], Ib[52]) ^ WC(CC[Ib[1]], Ib[51])
                  }

                  function GC(...zC) {
                    var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, GC, AC;
                    for (eb(zC[Ib[0]] = Ib[3], zC[Ib[7]] = new Array(Ib[184], -Ib[185], Ib[186], -Ib[187], Ib[188], -Ib[189], Ib[190], Ib[191]), zC[Ib[32]] = new Array(Ib[54])), eb(zC[Ib[1]][zC[Ib[2]] >> Ib[48]] |= Ib[40] << Ib[49] - zC[Ib[2]] % Ib[47], zC[Ib[1]][(zC[Ib[2]] + Ib[54] >> Ib[192] << Ib[16]) + Ib[33]] = zC[Ib[2]]), FC = Ib[1]; FC < zC[Ib[1]].length; FC += Ib[26]) {
                      for (eb(ZC = zC[Ib[7]][Ib[1]], QC = zC[Ib[7]][Ib[2]], wC = zC[Ib[7]][Ib[3]], bC = zC[Ib[7]][Ib[4]], nC = zC[Ib[7]][Ib[16]], fC = zC[Ib[7]][Ib[48]], oC = zC[Ib[7]][Ib[35]], qC = zC[Ib[7]][Ib[21]]), WC = Ib[1]; WC < Ib[54]; WC++) eb(zC[Ib[32]][WC] = WC < Ib[26] ? zC[Ib[1]][WC + FC] : RC(RC(RC(PC(zC[Ib[32]][WC - Ib[3]]), zC[Ib[32]][WC - Ib[21]]), pC(zC[Ib[32]][WC - Ib[33]])), zC[Ib[32]][WC - Ib[26]]), GC = RC(RC(RC(RC(qC, SC(nC)), NC(nC, fC, oC)), CC[-Ib[53]][WC]), zC[Ib[32]][WC]), AC = RC(gC(ZC), MC(ZC, QC, wC)), qC = oC, oC = fC, fC = nC, nC = RC(bC, GC), bC = wC, wC = QC, QC = ZC, ZC = RC(GC, AC));
                      eb(zC[Ib[7]][Ib[1]] = RC(ZC, zC[Ib[7]][Ib[1]]), zC[Ib[7]][Ib[2]] = RC(QC, zC[Ib[7]][Ib[2]]), zC[Ib[7]][Ib[3]] = RC(wC, zC[Ib[7]][Ib[3]]), zC[Ib[7]][Ib[4]] = RC(bC, zC[Ib[7]][Ib[4]]), zC[Ib[7]][Ib[16]] = RC(nC, zC[Ib[7]][Ib[16]]), zC[Ib[7]][Ib[48]] = RC(fC, zC[Ib[7]][Ib[48]]), zC[Ib[7]][Ib[35]] = RC(oC, zC[Ib[7]][Ib[35]]), zC[Ib[7]][Ib[21]] = RC(qC, zC[Ib[7]][Ib[21]]))
                    }
                    return zC[Ib[7]]
                  }

                  function RC(...CC) {
                    return eb(CC[Ib[0]] = Ib[3], CC[Ib[3]] = (CC[Ib[1]] & Ib[55]) + (CC[Ib[2]] & Ib[55]), CC[Ib[32]] = (CC[Ib[1]] >> Ib[26]) + (CC[Ib[2]] >> Ib[26]) + (CC[Ib[3]] >> Ib[26])), CC[Ib[32]] << Ib[26] | CC[Ib[3]] & Ib[55]
                  }
                  return eb(CC[Ib[0]] = Ib[1], CC[Ib[29]] = Ib[1], CC[Ib[2]] = ""), CC[-Ib[53]] = new Array(Ib[120], Ib[121], -Ib[122], -Ib[123], Ib[124], Ib[125], -Ib[126], -Ib[127], -Ib[128], Ib[129], Ib[130], Ib[131], Ib[132], -Ib[133], -Ib[134], -Ib[135], -Ib[136], -Ib[137], Ib[138], Ib[139], Ib[140], Ib[141], Ib[142], Ib[143], -Ib[144], -Ib[145], -Ib[146], -Ib[147], -Ib[148], -Ib[149], Ib[150], Ib[151], Ib[152], Ib[153], Ib[154], Ib[155], Ib[156], Ib[157], -Ib[158], -Ib[159], -Ib[160], -Ib[161], -Ib[162], -Ib[163], -Ib[164], -Ib[165], -Ib[166], Ib[167], Ib[168], Ib[169], Ib[170], Ib[171], Ib[172], Ib[173], Ib[174], Ib[175], Ib[176], Ib[177], -Ib[178], -Ib[179], -Ib[180], -Ib[181], -Ib[182], -Ib[183]), {
                    hex: function(...CC) {
                      return CC[Ib[0]] = Ib[2], bC(function(...CC) {
                        return CC[Ib[0]] = Ib[2], qC(GC(oC(CC[Ib[1]]), CC[Ib[1]].length * Ib[20]))
                      }(fC(CC[Ib[1]])))
                    },
                    b64: zC,
                    any: QC,
                    hex_hmac: function(...CC) {
                      return CC[Ib[0]] = Ib[3], bC(wC(fC(CC[Ib[1]]), fC(CC[Ib[2]])))
                    },
                    b64_hmac: zC,
                    any_hmac: QC
                  }
                }(), console.log(CC[Ib[7]]))
              }
              return "GSULIF" in vb && GC(), {
                [Ib[57]]: QC,
                [Ib[58]]: WC[PC]
              }
            }
            if (typeof MC === Ib[206] && gb(MC, WC[PC])) {
              function RC() {
                var CC;
                eb(CC = function(...zC) {
                  if (eb(zC[Ib[0]] = Ib[35], zC[Ib[35]] = Ib[9]), !(zC[Ib[48]] < Ib[1])) {
                    if (zC[Ib[48]] === Ib[1]) return zC[Ib[1]].push(zC[Ib[2]]);
                    for (zC[Ib[32]] = zC[Ib[3]]; zC[Ib[32]] < zC[Ib[4]] && !(zC[Ib[16]][zC[Ib[32]]] > zC[Ib[48]]); zC[Ib[32]]++) zC[Ib[32]] > zC[Ib[3]] && zC[Ib[16]][zC[Ib[32]]] === zC[Ib[16]][zC[Ib[32]] - Ib[2]] || eb(zC[Ib[35]] = Array.from(zC[Ib[2]]), zC[Ib[35]].push(zC[Ib[16]][zC[Ib[32]]]), CC(zC[Ib[1]], zC[Ib[35]], zC[Ib[32]] + Ib[2], zC[Ib[4]], zC[Ib[16]], zC[Ib[48]] - zC[Ib[16]][zC[Ib[32]]]))
                  }
                }, console.log((function(...zC) {
                  return eb(zC[Ib[0]] = Ib[3], zC[Ib[56]] = [], zC[Ib[32]] = zC[Ib[1]].length, zC[Ib[1]].sort(((CC, zC) => CC - zC)), CC(zC[Ib[56]], [], Ib[1], zC[Ib[32]], zC[Ib[1]], zC[Ib[2]])), zC[Ib[56]]
                })))
              }
              return "KhScuZ9" in vb && RC(), {
                [Ib[57]]: MC,
                [Ib[58]]: WC[PC]
              }
            }
          }
          return Ib[9]
        },
        MC = (...CC) => (CC[Ib[0]] = Ib[2], "DUxwE4" + Ib[61] in vb && function() {
          var CC = function(...CC) {
            eb(CC[Ib[0]] = Ib[2], this.HW = CC[Ib[1]], this.length = Ib[1], this.map = {}, this.head = Ib[9], this.tail = Ib[9])
          };
          eb(CC.prototype.get = function(CC) {
            var zC = this.map[CC];
            return zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -Ib[2]
          }, CC.prototype.put = function(...CC) {
            eb(CC[Ib[0]] = Ib[3], this.map[CC[Ib[1]]] ? (this.remove(this.map[CC[Ib[1]]]), this.insert(CC[Ib[1]], CC[Ib[2]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[Ib[1]], CC[Ib[2]])) : (this.insert(CC[Ib[1]], CC[Ib[2]]), this.length++))
          }, CC.prototype.remove = function(...CC) {
            eb(CC[Ib[0]] = Ib[2], CC[Ib[2]] = CC[Ib[1]].prev, CC[Ib[3]] = CC[Ib[1]].next), CC[Ib[3]] && (CC[Ib[3]].prev = CC[Ib[2]]), CC[Ib[2]] && (CC[Ib[2]].next = CC[Ib[3]]), this.head === CC[Ib[1]] && (this.head = CC[Ib[3]]), this.tail === CC[Ib[1]] && (this.tail = CC[Ib[2]]), delete this.map[CC[Ib[1]].key]
          }, CC.prototype.insert = function(CC, zC) {
            var ZC = new List(CC, zC);
            eb(this.tail ? (this.tail.next = ZC, ZC.prev = this.tail, this.tail = ZC) : (this.tail = ZC, this.head = ZC), this.map[CC] = ZC)
          }, console.log(CC))
        }(), NC(CC[Ib[1]]) !== Ib[9]);
      let gC = Ib[9],
        SC = Ib[9],
        pC = Ib[9],
        PC = Ib[9];
      const GC = (...CC) => {
        CC[Ib[0]] = Ib[2], "KkX_yBP" in vb && function(...CC) {
          function zC(CC) {
            const zC = {};
            for (let ZC of CC.replace(/[^w]/g, "").toLowerCase()) zC[ZC] = zC[ZC] + Ib[2] || Ib[2];
            return zC
          }

          function ZC(CC, zC) {
            const ZC = buildCharMap(CC),
              QC = buildCharMap(zC);
            for (let wC in ZC)
              if (ZC[wC] !== QC[wC]) return Ib[59];
            return Object.keys(ZC).length !== Object.keys(QC).length ? Ib[59] : Ib[65]
          }

          function QC(...CC) {
            CC[Ib[0]] = Ib[2];
            return wC(CC[Ib[1]]) !== 1 / 0
          }

          function wC(...CC) {
            if (CC[Ib[0]] = Ib[2], !CC[Ib[1]]) return -Ib[2];
            const zC = wC(CC[Ib[1]].left),
              ZC = wC(CC[Ib[1]].right),
              QC = Math.abs(zC - ZC);
            if (zC === 1 / 0 || ZC === 1 / 0 || QC > Ib[2]) return 1 / 0;
            return Math.max(zC, ZC) + Ib[2]
          }
          CC[Ib[0]] = Ib[1], window[Ib[200] + Ib[201] + Ib[202] + Ib[203]] = {
            buildCharacterMap: zC,
            isAnagrams: ZC,
            isBalanced: QC,
            getHeightBalanced: wC
          }
        }();
        try {
          function zC(...CC) {
            eb(CC[Ib[0]] = Ib[1], CC[Ib[60]] = function(...zC) {
              return eb(zC[Ib[0]] = Ib[3], zC[Ib[7]] = [], zC[Ib[4]] = zC[Ib[1]].length, zC[Ib[1]].sort(((CC, zC) => CC - zC)), CC[Ib[32]](zC[Ib[7]], [], Ib[1], zC[Ib[4]], zC[Ib[1]], zC[Ib[2]])), zC[Ib[7]]
            }, CC[Ib[32]] = function(...zC) {
              if (eb(zC[Ib[0]] = Ib[35], zC[Ib[7]] = Ib[9]), !(zC[Ib[48]] < Ib[1])) {
                if (zC[Ib[48]] === Ib[1]) return zC[Ib[1]].push(zC[Ib[2]]);
                for (zC[Ib[21]] = zC[Ib[3]]; zC[Ib[21]] < zC[Ib[4]] && !(zC[Ib[16]][zC[Ib[21]]] > zC[Ib[48]]); zC[Ib[21]]++) zC[Ib[21]] > zC[Ib[3]] && zC[Ib[16]][zC[Ib[21]]] === zC[Ib[16]][zC[Ib[21]] - Ib[2]] || eb(zC[Ib[7]] = Array.from(zC[Ib[2]]), zC[Ib[7]].push(zC[Ib[16]][zC[Ib[21]]]), CC[Ib[32]](zC[Ib[1]], zC[Ib[7]], zC[Ib[21]] + Ib[2], zC[Ib[4]], zC[Ib[16]], zC[Ib[48]] - zC[Ib[16]][zC[Ib[21]]]))
              }
            }, console.log(CC[Ib[60]]))
          }
          return "SnmoMkY" in vb && zC(), CC[Ib[1]]()
        } catch {
          function ZC(...CC) {
            function zC() {}
            CC[Ib[0]] = Ib[1], eb(CC[-Ib[64]] = function(...CC) {
              for (eb(CC[Ib[0]] = Ib[3], CC[Ib[3]] = Ib[1], CC[Ib[32]] = Ib[1], CC[Ib[16]] = new zC(Ib[1]), CC[-Ib[63]] = CC[Ib[16]], CC[Ib[62]] = CC[Ib[1]], CC[Ib[61]] = CC[Ib[2]]); CC[Ib[62]] !== Ib[9] || CC[Ib[61]] !== Ib[9];) eb(CC[Ib[32]] = (CC[Ib[62]] ? CC[Ib[62]].val : Ib[1]) + (CC[Ib[61]] ? CC[Ib[61]].val : Ib[1]) + CC[Ib[3]], CC[Ib[3]] = Math.floor(CC[Ib[32]] / Ib[51]), CC[-Ib[63]].next = new zC(CC[Ib[32]] % Ib[51]), CC[-Ib[63]] = CC[-Ib[63]].next, CC[Ib[62]] = CC[Ib[62]] ? CC[Ib[62]].next : Ib[9], CC[Ib[61]] = CC[Ib[61]] ? CC[Ib[61]].next : Ib[9]);
              return CC[Ib[3]] && (CC[-Ib[63]].next = new zC(CC[Ib[3]])), CC[Ib[16]].next
            }, console.log(CC[-Ib[64]]))
          }
          return "gwds1w" in vb && ZC(), Ib[65]
        }
      };
      let RC = Ib[59];
      const AC = (...CC) => {
          if (CC[Ib[0]] = Ib[1], "THk4UN0" in vb && function(...CC) {
              eb(CC[Ib[0]] = Ib[1], CC[Ib[7]] = function(...CC) {
                for (eb(CC[Ib[0]] = Ib[2], CC[-Ib[66]] = CC[Ib[1]].length, CC[-Ib[67]] = [], CC[Ib[4]] = Ib[1]), CC[Ib[5]] = Ib[1]; CC[Ib[5]] < CC[-Ib[66]]; CC[Ib[5]]++) CC[-Ib[67]].push(CC[Ib[5]] !== Ib[1] && CC[Ib[1]][CC[Ib[5]]] > CC[Ib[1]][CC[Ib[5]] - Ib[2]] ? CC[-Ib[67]][CC[Ib[5]] - Ib[2]] + Ib[2] : Ib[2]);
                for (CC[Ib[19]] = CC[-Ib[66]] - Ib[2]; CC[Ib[19]] >= Ib[1]; CC[Ib[19]]--) CC[Ib[19]] !== CC[-Ib[66]] - Ib[2] && CC[Ib[1]][CC[Ib[19]]] > CC[Ib[1]][CC[Ib[19]] + Ib[2]] && (CC[-Ib[67]][CC[Ib[19]]] = Math.max(CC[-Ib[67]][CC[Ib[19]]], CC[-Ib[67]][CC[Ib[19]] + Ib[2]] + Ib[2])), CC[Ib[4]] += CC[-Ib[67]][CC[Ib[19]]];
                return CC[Ib[4]]
              }, console.log(CC[Ib[7]]))
            }(), !RC && (0, mQ[Ib[218]])()) {
            function zC(...CC) {
              CC[Ib[0]] = Ib[1]
            }
            "RLEwi2" + Ib[220] in vb && zC(), RC = Ib[65]
          }
        },
        xC = (...CC) => {
          CC[Ib[0]] = Ib[2], "Hp3akai" in vb && function(...CC) {
            var zC;
            eb(CC[Ib[0]] = Ib[1], zC = function(CC) {
              eb(this.HW = CC, this.length = Ib[1], this.map = {}, this.head = Ib[9], this.tail = Ib[9])
            }, zC.prototype.get = function(...CC) {
              var zC;
              return eb(CC[Ib[0]] = Ib[2], zC = this.map[CC[Ib[1]]]), zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -Ib[2]
            }, zC.prototype.put = function(...CC) {
              eb(CC[Ib[0]] = Ib[3], this.map[CC[Ib[1]]] ? (this.remove(this.map[CC[Ib[1]]]), this.insert(CC[Ib[1]], CC[Ib[2]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[Ib[1]], CC[Ib[2]])) : (this.insert(CC[Ib[1]], CC[Ib[2]]), this.length++))
            }, zC.prototype.remove = function(...CC) {
              eb(CC[Ib[0]] = Ib[2], CC[-Ib[72]] = CC[Ib[1]].prev, CC[Ib[32]] = CC[Ib[1]].next), CC[Ib[32]] && (CC[Ib[32]].prev = CC[-Ib[72]]), CC[-Ib[72]] && (CC[-Ib[72]].next = CC[Ib[32]]), this.head === CC[Ib[1]] && (this.head = CC[Ib[32]]), this.tail === CC[Ib[1]] && (this.tail = CC[-Ib[72]]), delete this.map[CC[Ib[1]].key]
            }, zC.prototype.insert = function(...CC) {
              eb(CC[Ib[0]] = Ib[3], CC[Ib[7]] = new List(CC[Ib[1]], CC[Ib[2]]), this.tail ? (this.tail.next = CC[Ib[7]], CC[Ib[7]].prev = this.tail, this.tail = CC[Ib[7]]) : (this.tail = CC[Ib[7]], this.head = CC[Ib[7]]), this.map[CC[Ib[1]]] = CC[Ib[7]])
            }, console.log(zC))
          }();
          try {
            function zC() {
              var CC = function(...CC) {
                eb(CC[Ib[0]] = Ib[2], this.HW = CC[Ib[1]], this.length = Ib[1], this.map = {}, this.head = Ib[9], this.tail = Ib[9])
              };
              eb(CC.prototype.get = function(...CC) {
                var zC;
                return eb(CC[Ib[0]] = Ib[2], zC = this.map[CC[Ib[1]]]), zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -Ib[2]
              }, CC.prototype.put = function(...CC) {
                eb(CC[Ib[0]] = Ib[3], this.map[CC[Ib[1]]] ? (this.remove(this.map[CC[Ib[1]]]), this.insert(CC[Ib[1]], CC[Ib[2]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[Ib[1]], CC[Ib[2]])) : (this.insert(CC[Ib[1]], CC[Ib[2]]), this.length++))
              }, CC.prototype.remove = function(CC) {
                var zC, ZC = CC.prev;
                (zC = CC.next) && (zC.prev = ZC), ZC && (ZC.next = zC), this.head === CC && (this.head = zC), this.tail === CC && (this.tail = ZC), delete this.map[CC.key]
              }, CC.prototype.insert = function(CC, zC) {
                var ZC = new List(CC, zC);
                eb(this.tail ? (this.tail.next = ZC, ZC.prev = this.tail, this.tail = ZC) : (this.tail = ZC, this.head = ZC), this.map[CC] = ZC)
              }, console.log(CC))
            }
            return "Ue08Oe" + Ib[223] in vb && zC(), CC[Ib[1]]()
          } catch {
            function QC(...CC) {
              eb(CC[Ib[0]] = Ib[1], CC[Ib[194]] = function(...CC) {
                function zC(...CC) {
                  return CC[Ib[0]] = Ib[3], nC(wC(fC(CC[Ib[1]]), fC(CC[Ib[2]])))
                }

                function QC(...CC) {
                  return CC[Ib[0]] = Ib[4],
                    function(CC, zC) {
                      var ZC, QC, wC, bC, nC, fC, oC, qC, FC = zC.length;
                      for (ZC = Array(), QC = Array(Math.ceil(CC.length / Ib[3])), nC = Ib[1]; nC < QC.length; nC++) QC[nC] = CC.charCodeAt(nC * Ib[3]) << Ib[20] | CC.charCodeAt(nC * Ib[3] + Ib[2]);
                      for (; QC.length > Ib[1];) {
                        for (eb(qC = Array(), oC = Ib[1]), nC = Ib[1]; nC < QC.length; nC++) eb(oC = (oC << Ib[26]) + QC[nC], fC = Math.floor(oC / FC), oC -= fC * FC), (qC.length > Ib[1] || fC > Ib[1]) && (qC[qC.length] = fC);
                        eb(ZC[ZC.length] = oC, QC = qC)
                      }
                      for (wC = "", nC = ZC.length - Ib[2]; nC >= Ib[1]; nC--) wC += zC.charAt(ZC[nC]);
                      for (bC = Math.ceil(CC.length * Ib[20] / (Math.log(zC.length) / Math.log(Ib[3]))), nC = wC.length; nC < bC; nC++) wC = zC[Ib[1]] + wC;
                      return wC
                    }(wC(fC(CC[Ib[1]]), fC(CC[Ib[2]])), CC[Ib[3]])
                }

                function wC(...CC) {
                  eb(CC[Ib[0]] = Ib[3], CC[Ib[7]] = oC(CC[Ib[1]])), CC[Ib[7]].length > Ib[26] && (CC[Ib[7]] = GC(CC[Ib[7]], CC[Ib[1]].length * Ib[20]));
                  var zC = Array(Ib[26]),
                    ZC = Array(Ib[26]);
                  for (CC[Ib[4]] = Ib[1]; CC[Ib[4]] < Ib[26]; CC[Ib[4]]++) eb(zC[CC[Ib[4]]] = CC[Ib[7]][CC[Ib[4]]] ^ Ib[77], ZC[CC[Ib[4]]] = CC[Ib[7]][CC[Ib[4]]] ^ Ib[78]);
                  return CC[Ib[79]] = GC(zC.concat(oC(CC[Ib[2]])), Ib[28] + CC[Ib[2]].length * Ib[20]), qC(GC(ZC.concat(CC[Ib[79]]), ib(Ib[27], Ib[28], Ib[80])))
                }

                function bC(zC) {
                  var ZC, QC, bC, nC;
                  try {
                    CC[Ib[81]]
                  } catch (wC) {
                    CC[Ib[81]] = Ib[1]
                  }
                  for (eb(ZC = CC[Ib[81]] ? Ib[30] + Ib[82] + Ib[83] : Ib[30] + Ib[84] + Ib[85], QC = "", bC = void 0), nC = Ib[1]; nC < zC.length; nC++) eb(bC = zC.charCodeAt(nC), QC += ZC.charAt(bC >>> Ib[16] & Ib[33]) + ZC.charAt(bC & Ib[33]));
                  return QC
                }

                function nC(...zC) {
                  zC[Ib[0]] = Ib[2];
                  try {
                    CC[Ib[86]]
                  } catch (ZC) {
                    CC[Ib[86]] = ""
                  }
                  for (eb(zC[Ib[94]] = Ib[87] + Ib[88] + Ib[89] + Ib[90] + Ib[91] + Ib[92], zC[Ib[3]] = "", zC[Ib[93]] = zC[Ib[1]].length), zC[Ib[16]] = Ib[1]; zC[Ib[16]] < zC[Ib[93]]; zC[Ib[16]] += Ib[4])
                    for (zC[Ib[48]] = zC[Ib[1]].charCodeAt(zC[Ib[16]]) << Ib[26] | (zC[Ib[16]] + Ib[2] < zC[Ib[93]] ? zC[Ib[1]].charCodeAt(zC[Ib[16]] + Ib[2]) << Ib[20] : Ib[1]) | (zC[Ib[16]] + Ib[3] < zC[Ib[93]] ? zC[Ib[1]].charCodeAt(zC[Ib[16]] + Ib[3]) : Ib[1]), zC[Ib[35]] = Ib[1]; zC[Ib[35]] < Ib[16]; zC[Ib[35]]++) zC[Ib[16]] * Ib[20] + zC[Ib[35]] * Ib[35] > zC[Ib[1]].length * Ib[20] ? zC[Ib[3]] += CC[Ib[86]] : zC[Ib[3]] += zC[Ib[94]].charAt(zC[Ib[48]] >>> Ib[35] * (Ib[4] - zC[Ib[35]]) & Ib[39]);
                  return zC[Ib[3]]
                }

                function fC(...CC) {
                  var zC, ZC;
                  for (eb(CC[Ib[0]] = Ib[2], CC[Ib[7]] = "", CC[Ib[95]] = -Ib[2]); ++CC[Ib[95]] < CC[Ib[1]].length;) eb(zC = CC[Ib[1]].charCodeAt(CC[Ib[95]]), ZC = CC[Ib[95]] + Ib[2] < CC[Ib[1]].length ? CC[Ib[1]].charCodeAt(CC[Ib[95]] + Ib[2]) : Ib[1]), Ib[96] <= zC && zC <= Ib[97] && Ib[98] <= ZC && ZC <= Ib[99] && eb(zC = Ib[100] + ((zC & Ib[38]) << Ib[51]) + (ZC & Ib[38]), CC[Ib[95]]++), zC <= Ib[101] ? CC[Ib[7]] += String.fromCharCode(zC) : zC <= Ib[102] ? CC[Ib[7]] += String.fromCharCode(Ib[103] | zC >>> Ib[35] & Ib[104], Ib[40] | zC & Ib[39]) : zC <= Ib[55] ? CC[Ib[7]] += String.fromCharCode(Ib[105] | zC >>> Ib[41] & Ib[33], Ib[40] | zC >>> Ib[35] & Ib[39], Ib[40] | zC & Ib[39]) : zC <= Ib[106] && (CC[Ib[7]] += String.fromCharCode(Ib[107] | zC >>> Ib[50] & Ib[21], Ib[40] | zC >>> Ib[41] & Ib[39], Ib[40] | zC >>> Ib[35] & Ib[39], Ib[40] | zC & Ib[39]));
                  return CC[Ib[7]]
                }

                function oC(CC) {
                  var zC, ZC = Array(CC.length >> Ib[3]);
                  for (zC = Ib[1]; zC < ZC.length; zC++) ZC[zC] = Ib[1];
                  for (zC = Ib[1]; zC < CC.length * Ib[20]; zC += Ib[20]) ZC[zC >> Ib[48]] |= (CC.charCodeAt(zC / Ib[20]) & Ib[42]) << Ib[49] - zC % Ib[47];
                  return ZC
                }

                function qC(...CC) {
                  for (eb(CC[Ib[0]] = Ib[2], CC[Ib[7]] = ""), CC[Ib[109]] = Ib[1]; CC[Ib[109]] < CC[Ib[1]].length * Ib[47]; CC[Ib[109]] += Ib[20]) CC[Ib[7]] += String.fromCharCode(CC[Ib[1]][CC[Ib[109]] >> Ib[48]] >>> Ib[49] - CC[Ib[109]] % Ib[47] & Ib[42]);
                  return CC[Ib[7]]
                }

                function FC(...CC) {
                  return CC[Ib[0]] = Ib[3], CC[Ib[1]] >>> CC[Ib[2]] | CC[Ib[1]] << Ib[47] - CC[Ib[2]]
                }

                function WC(...CC) {
                  return CC[Ib[0]] = Ib[3], CC[Ib[1]] >>> CC[Ib[2]]
                }

                function NC(CC, zC, ZC) {
                  return CC & zC ^ ~CC & ZC
                }

                function MC(...CC) {
                  return CC[Ib[0]] = Ib[4], CC[Ib[1]] & CC[Ib[2]] ^ CC[Ib[1]] & CC[Ib[3]] ^ CC[Ib[2]] & CC[Ib[3]]
                }

                function gC(...CC) {
                  return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[3]) ^ FC(CC[Ib[1]], Ib[110]) ^ FC(CC[Ib[1]], Ib[111])
                }

                function SC(...CC) {
                  return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[35]) ^ FC(CC[Ib[1]], Ib[112]) ^ FC(CC[Ib[1]], Ib[113])
                }

                function pC(...CC) {
                  return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[21]) ^ FC(CC[Ib[1]], Ib[50]) ^ WC(CC[Ib[1]], Ib[4])
                }

                function PC(...CC) {
                  return CC[Ib[0]] = Ib[2], FC(CC[Ib[1]], Ib[114]) ^ FC(CC[Ib[1]], Ib[52]) ^ WC(CC[Ib[1]], Ib[51])
                }

                function GC(...zC) {
                  var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, GC, AC;
                  for (eb(zC[Ib[0]] = Ib[3], zC[Ib[193]] = new Array(Ib[184], -Ib[185], Ib[186], -Ib[187], Ib[188], -Ib[189], Ib[190], Ib[191]), zC[Ib[32]] = new Array(Ib[54])), eb(zC[Ib[1]][zC[Ib[2]] >> Ib[48]] |= Ib[40] << Ib[49] - zC[Ib[2]] % Ib[47], zC[Ib[1]][(zC[Ib[2]] + Ib[54] >> Ib[192] << Ib[16]) + Ib[33]] = zC[Ib[2]]), FC = Ib[1]; FC < zC[Ib[1]].length; FC += Ib[26]) {
                    for (eb(ZC = zC[Ib[193]][Ib[1]], QC = zC[Ib[193]][Ib[2]], wC = zC[Ib[193]][Ib[3]], bC = zC[Ib[193]][Ib[4]], nC = zC[Ib[193]][Ib[16]], fC = zC[Ib[193]][Ib[48]], oC = zC[Ib[193]][Ib[35]], qC = zC[Ib[193]][Ib[21]]), WC = Ib[1]; WC < Ib[54]; WC++) eb(zC[Ib[32]][WC] = WC < Ib[26] ? zC[Ib[1]][WC + FC] : RC(RC(RC(PC(zC[Ib[32]][WC - Ib[3]]), zC[Ib[32]][WC - Ib[21]]), pC(zC[Ib[32]][WC - Ib[33]])), zC[Ib[32]][WC - Ib[26]]), GC = RC(RC(RC(RC(qC, SC(nC)), NC(nC, fC, oC)), CC[Ib[15]][WC]), zC[Ib[32]][WC]), AC = RC(gC(ZC), MC(ZC, QC, wC)), qC = oC, oC = fC, fC = nC, nC = RC(bC, GC), bC = wC, wC = QC, QC = ZC, ZC = RC(GC, AC));
                    eb(zC[Ib[193]][Ib[1]] = RC(ZC, zC[Ib[193]][Ib[1]]), zC[Ib[193]][Ib[2]] = RC(QC, zC[Ib[193]][Ib[2]]), zC[Ib[193]][Ib[3]] = RC(wC, zC[Ib[193]][Ib[3]]), zC[Ib[193]][Ib[4]] = RC(bC, zC[Ib[193]][Ib[4]]), zC[Ib[193]][Ib[16]] = RC(nC, zC[Ib[193]][Ib[16]]), zC[Ib[193]][Ib[48]] = RC(fC, zC[Ib[193]][Ib[48]]), zC[Ib[193]][Ib[35]] = RC(oC, zC[Ib[193]][Ib[35]]), zC[Ib[193]][Ib[21]] = RC(qC, zC[Ib[193]][Ib[21]]))
                  }
                  return zC[Ib[193]]
                }

                function RC(CC, zC) {
                  var ZC = (CC & Ib[55]) + (zC & Ib[55]);
                  return (CC >> Ib[26]) + (zC >> Ib[26]) + (ZC >> Ib[26]) << Ib[26] | ZC & Ib[55]
                }
                return eb(CC[Ib[0]] = Ib[1], CC[Ib[81]] = Ib[1], CC[Ib[86]] = ""), CC[Ib[15]] = new Array(Ib[120], Ib[121], -Ib[122], -Ib[123], Ib[124], Ib[125], -Ib[126], -Ib[127], -Ib[128], Ib[129], Ib[130], Ib[131], Ib[132], -Ib[133], -Ib[134], -Ib[135], -Ib[136], -Ib[137], Ib[138], Ib[139], Ib[140], Ib[141], Ib[142], Ib[143], -Ib[144], -Ib[145], -Ib[146], -Ib[147], -Ib[148], -Ib[149], Ib[150], Ib[151], Ib[152], Ib[153], Ib[154], Ib[155], Ib[156], Ib[157], -Ib[158], -Ib[159], -Ib[160], -Ib[161], -Ib[162], -Ib[163], -Ib[164], -Ib[165], -Ib[166], Ib[167], Ib[168], Ib[169], Ib[170], Ib[171], Ib[172], Ib[173], Ib[174], Ib[175], Ib[176], Ib[177], -Ib[178], -Ib[179], -Ib[180], -Ib[181], -Ib[182], -Ib[183]), {
                  hex: function(...CC) {
                    return CC[Ib[0]] = Ib[2], bC(function(CC) {
                      return qC(GC(oC(CC), CC.length * Ib[20]))
                    }(fC(CC[Ib[1]])))
                  },
                  b64: zC,
                  any: QC,
                  hex_hmac: function(...CC) {
                    return CC[Ib[0]] = Ib[3], bC(wC(fC(CC[Ib[1]]), fC(CC[Ib[2]])))
                  },
                  b64_hmac: zC,
                  any_hmac: QC
                }
              }(), console.log(CC[Ib[194]]))
            }
            return "rDwrj8" in vb && QC(), Ib[8]
          }
        },
        JC = (...CC) => {
          CC[Ib[0]] = Ib[2], "PbUMv6" in vb && function(...CC) {
            eb(CC[Ib[0]] = Ib[1], CC[-Ib[195]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", CC[Ib[2]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + Ib[198], CC[Ib[19]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", CC[-Ib[195]].match(CC[Ib[2]] + CC[Ib[19]]))
          }();
          try {
            function zC(...CC) {
              eb(CC[Ib[0]] = Ib[1], CC[Ib[7]] = function(...zC) {
                return eb(zC[Ib[0]] = Ib[3], zC[Ib[7]] = [], zC[Ib[4]] = zC[Ib[1]].length, zC[Ib[1]].sort(((CC, zC) => CC - zC)), CC[Ib[196]](zC[Ib[7]], [], Ib[1], zC[Ib[4]], zC[Ib[1]], zC[Ib[2]])), zC[Ib[7]]
              }, CC[Ib[196]] = function(...zC) {
                if (eb(zC[Ib[0]] = Ib[35], zC[Ib[7]] = Ib[9]), !(zC[Ib[48]] < Ib[1])) {
                  if (zC[Ib[48]] === Ib[1]) return zC[Ib[1]].push(zC[Ib[2]]);
                  for (zC[Ib[21]] = zC[Ib[3]]; zC[Ib[21]] < zC[Ib[4]] && !(zC[Ib[16]][zC[Ib[21]]] > zC[Ib[48]]); zC[Ib[21]]++) zC[Ib[21]] > zC[Ib[3]] && zC[Ib[16]][zC[Ib[21]]] === zC[Ib[16]][zC[Ib[21]] - Ib[2]] || eb(zC[Ib[7]] = Array.from(zC[Ib[2]]), zC[Ib[7]].push(zC[Ib[16]][zC[Ib[21]]]), CC[Ib[196]](zC[Ib[1]], zC[Ib[7]], zC[Ib[21]] + Ib[2], zC[Ib[4]], zC[Ib[16]], zC[Ib[48]] - zC[Ib[16]][zC[Ib[21]]]))
                }
              }, console.log(CC[Ib[7]]))
            }
            return "DrThgo" in vb && zC(), CC[Ib[1]](), Ib[65]
          } catch {
            function ZC(...CC) {
              eb(CC[Ib[0]] = Ib[1], CC[Ib[7]] = function(...zC) {
                return eb(zC[Ib[0]] = Ib[3], zC[Ib[7]] = [], zC[Ib[4]] = zC[Ib[1]].length, zC[Ib[1]].sort(((CC, zC) => CC - zC)), CC[Ib[2]](zC[Ib[7]], [], Ib[1], zC[Ib[4]], zC[Ib[1]], zC[Ib[2]])), zC[Ib[7]]
              }, CC[Ib[2]] = function(...zC) {
                if (eb(zC[Ib[0]] = Ib[35], zC[Ib[52]] = Ib[9]), !(zC[Ib[48]] < Ib[1])) {
                  if (zC[Ib[48]] === Ib[1]) return zC[Ib[1]].push(zC[Ib[2]]);
                  for (zC[Ib[32]] = zC[Ib[3]]; zC[Ib[32]] < zC[Ib[4]] && !(zC[Ib[16]][zC[Ib[32]]] > zC[Ib[48]]); zC[Ib[32]]++) zC[Ib[32]] > zC[Ib[3]] && zC[Ib[16]][zC[Ib[32]]] === zC[Ib[16]][zC[Ib[32]] - Ib[2]] || eb(zC[Ib[52]] = Array.from(zC[Ib[2]]), zC[Ib[52]].push(zC[Ib[16]][zC[Ib[32]]]), CC[Ib[2]](zC[Ib[1]], zC[Ib[52]], zC[Ib[32]] + Ib[2], zC[Ib[4]], zC[Ib[16]], zC[Ib[48]] - zC[Ib[16]][zC[Ib[32]]]))
                }
              }, console.log(CC[Ib[7]]))
            }
            return "f93q8Z" in vb && ZC(), Ib[59]
          }
        },
        IC = (0, mQ[Ib[10]])("a29qbzYzb25i"),
        iC = (0, mQ[Ib[197]])(Ib[9]);
      let vC = Ib[9],
        eC = Ib[59],
        hC = Ib[59];
      const KC = (0, mQ[Ib[197]])(Ib[9]);
      let YC = Ib[1];
      const dC = (0, mQ[Ib[197]])(Ib[9]);
      let mC = Ib[1];
      const HC = (0, mQ[Ib[197]])(Ib[9]);
      let EC = Ib[59],
        lC = Ib[59];
      const XC = (...zC) => {
          if (zC[Ib[0]] = Ib[3], zC[Ib[1]] === CC) {
            function wC(...CC) {
              eb(CC[Ib[0]] = Ib[1], CC[Ib[7]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", CC[-Ib[199]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + Ib[198], CC[-Ib[40]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", CC[Ib[7]].match(CC[-Ib[199]] + CC[-Ib[40]]))
            }
            if ("WoET9A" in vb && wC(), vC === Ib[9]) {
              function bC(...CC) {
                function zC(...CC) {
                  if (CC[Ib[0]] = Ib[2], !CC[Ib[1]]) return -Ib[2];
                  const ZC = zC(CC[Ib[1]].left),
                    QC = zC(CC[Ib[1]].right),
                    wC = Math.abs(ZC - QC);
                  if (ZC === 1 / 0 || QC === 1 / 0 || wC > Ib[2]) return 1 / 0;
                  return Math.max(ZC, QC) + Ib[2]
                }
                CC[Ib[0]] = Ib[1], window[Ib[200] + Ib[201] + Ib[202] + Ib[203]] = {
                  buildCharacterMap: function(...CC) {
                    CC[Ib[0]] = Ib[2];
                    const zC = {};
                    for (let ZC of CC[Ib[1]].replace(/[^w]/g, "").toLowerCase()) zC[ZC] = zC[ZC] + Ib[2] || Ib[2];
                    return zC
                  },
                  isAnagrams: function(...CC) {
                    CC[Ib[0]] = Ib[3];
                    const zC = buildCharMap(CC[Ib[1]]),
                      ZC = buildCharMap(CC[Ib[2]]);
                    for (let QC in zC)
                      if (zC[QC] !== ZC[QC]) return Ib[59];
                    return Object.keys(zC).length !== Object.keys(ZC).length ? Ib[59] : Ib[65]
                  },
                  isBalanced: function(...CC) {
                    return CC[Ib[0]] = Ib[2], zC(CC[Ib[1]]) !== 1 / 0
                  },
                  getHeightBalanced: zC
                }
              }
              "SM0Bs2" in vb && bC(), vC = typeof zC[Ib[2]] === Ib[233] ? zC[Ib[2]] : -Ib[2]
            } else {
              function nC(...CC) {
                eb(CC[Ib[0]] = Ib[1], CC[-Ib[204]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", CC[-Ib[34]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + Ib[198], CC[-Ib[205]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", CC[-Ib[204]].match(CC[-Ib[34]] + CC[-Ib[205]]))
              }
              "UUVUO0" in vb && nC(), eC = Ib[65]
            }
            return
          }
          const ZC = iC[zC[Ib[1]]];
          if (!zC[Ib[2]]) return void(ZC && (hC = Ib[65]));
          if (zC[Ib[1]] !== IC) return void(iC[zC[Ib[1]]] = zC[Ib[2]]);
          iC[zC[Ib[1]]] = Ib[65];
          const QC = typeof zC[Ib[2]] === Ib[206] ? zC[Ib[2]] : "" + zC[Ib[2]];
          HC[QC] || ((0, Vw[Ib[219]])(QC) ? lC = Ib[65] : (0, Vw[Ib[207]])(QC) ? YC < 8 ? eb(HC[QC] = Ib[65], KC[YC++] = QC, EC ||= (0, Vw[Ib[208]])(QC)) : !EC && (0, Vw[Ib[208]])(QC) && eb(HC[QC] = Ib[65], KC[8 - Ib[2]] = QC, EC = Ib[65]) : mC < 4 && eb(HC[QC] = Ib[65], dC[mC++] = QC))
        },
        cC = (0, Cb[Ib[215]])(CC),
        uC = cC ? cC.replaced : (() => {
          try {
            return wC[CC]
          } catch {
            return Ib[8]
          }
        })();
      if (JC((() => {
          wC[CC] = XC
        })), typeof uC === Ib[209] + Ib[210]) {
        const CC = uC;
        JC((() => {
          CC(XC)
        }))
      }
      if (cC) {
        const zC = cC.reports;
        JC((() => {
          for (const ZC in zC)(0, mQ[Ib[211]])(mQ[Ib[221]], zC, [ZC]) && ZC !== CC && XC(ZC, zC[ZC])
        }))
      }
      const rC = cC ? Ib[3] : Ib[2];
      let sC = Ib[59];
      const TC = (...zC) => (zC[Ib[0]] = Ib[1], eC ? Ib[65] : (eb(zC[Ib[7]] = Ib[59], sC = !JC((() => {
          zC[Ib[7]] = wC[CC] !== XC
        }))), zC[Ib[7]])),
        aC = GC(((...zC) => {
          zC[Ib[0]] = Ib[1];
          const ZC = (0, mQ.K)(wC, CC);
          return (ZC === Ib[9] || void 0 === ZC ? void 0 : ZC.configurable) !== Ib[59] || typeof ZC[Ib[236]] !== Ib[209] + Ib[210] || vC !== rC
        })),
        tC = {},
        DC = () => {
          try {
            return navigator[Ib[230] + "tSub"]
          } catch {
            return tC
          }
        },
        jC = DC(),
        yC = ZC,
        LC = yC === Ib[9] ? ((...CC) => {
          CC[Ib[0]] = Ib[1];
          const zC = Ib[68];
          eb(CC[Ib[7]] = Ib[59], CC[Ib[2]] = zC - Ib[2]);
          const ZC = TextDecoder[Ib[212] + Ib[213]][Ib[214]],
            QC = function() {
              CC[Ib[2]]++, CC[Ib[2]] === zC && (Sb((() => MC(Ib[59]))) && (CC[Ib[7]] = Ib[65]), CC[Ib[2]] = Ib[1]);
              for (var QC = arguments[Ib[0]], wC = new Array(QC), bC = Ib[1]; bC < QC; bC++) wC[bC] = arguments[bC];
              return (0, mQ[Ib[211]])(ZC, this, wC)
            };
          return JC((() => {
            TextDecoder[Ib[212] + Ib[213]][Ib[214]] = QC
          })), () => CC[Ib[7]] ? Ib[3] : Pb((() => TextDecoder[Ib[212] + Ib[213]][Ib[214]] !== QC ? Ib[35] : Ib[1]))
        })() : () => Pb((() => yC[Ib[228] + Ib[229]]())),
        UC = (0, Iz[Ib[215]])(),
        BC = (0, mQ[Ib[197]])(Ib[9]),
        OC = (0, mQ[Ib[197]])(Ib[9]);
      let kC = Ib[1],
        VC = Ib[1],
        Cz = Ib[1];
      const zz = (0, mQ[Ib[197]])(Ib[9]),
        Zz = (0, mQ[Ib[197]])(Ib[9]);
      let Qz = Ib[9],
        wz = (0, mQ[Ib[197]])(Ib[9]);
      const bz = (...CC) => {
          eb(CC[Ib[0]] = Ib[3], BC[kC] = CC[Ib[1]], OC[kC] = CC[Ib[2]], kC++)
        },
        nz = (...CC) => (eb(CC[Ib[0]] = Ib[2], CC[-Ib[41]] = Ib[8]), (CC[-Ib[41]] = (OC[CC[Ib[1]]] ? Zz : zz)[BC[CC[Ib[1]]]]) !== Ib[9] && void 0 !== CC[-Ib[41]] ? CC[-Ib[41]] : -Ib[2]),
        fz = (0, mQ[Ib[10]])("d2lvNjQz"),
        oz = (0, mQ[Ib[10]])("amtsa2plZndu"),
        qz = [
          [(0, mQ[Ib[10]])("aW9qZndlODNq"), "2"],
          [(0, mQ[Ib[10]])("a3Bq"), "4"],
          [(0, mQ[Ib[10]])("dXJocmZm"), "5"]
        ],
        Wz = [
          [(0, mQ[Ib[10]])(Ib[217] + Ib[216]), Ib[197]],
          [(0, mQ[Ib[10]])(Ib[217] + "w="), Ib[211]]
        ],
        Nz = (0, mQ[Ib[10]])("eTR5bnM="),
        Mz = (0, mQ[Ib[10]])("aHRleWpldA=="),
        gz = (0, mQ[Ib[10]])("c2RmbGpneGxmY2pr"),
        Sz = [
          [(0, mQ[Ib[10]])("a3NhZmR1"), Ib[208]],
          [(0, mQ[Ib[10]])("ZGZnYWFzZGFz"), Ib[10]],
          [gz, Ib[218]],
          [(0, mQ[Ib[10]])("bGFzZWRraGFz"), Ib[219]],
          [(0, mQ[Ib[10]])("cW16ZjhrM24="), Ib[7]]
        ],
        pz = [
          [Nz, Ib[237]],
          [Mz, Ib[238]],
          [(0, mQ[Ib[10]])("bmI3ZnEy"), Ib[32]]
        ],
        Pz = (0, mQ[Ib[10]])("bGtxM20="),
        Gz = (0, mQ[Ib[10]])("bWtxN3" + Ib[216]),
        Rz = ["mk:tw", "mk:jf"],
        Az = ((...CC) => {
          CC[Ib[0]] = Ib[1];
          try {
            return CC[Ib[15]] = Ib[8], (CC[Ib[15]] = wC[(0, mQ[Ib[10]])("V2ViU29ja2V0")]) === Ib[9] || void 0 === CC[Ib[15]] ? void 0 : CC[Ib[15]][Ib[212] + Ib[213]]
          } catch {
            return Ib[8]
          }
        })(),
        xz = ["send", "close", "addEventListener", "removeEventListener", Ib[225] + Ib[224] + Ib[218]],
        Jz = ["onmessage", "onopen", "onclos" + Ib[19], "onerro" + Ib[208]];
      let iz = Ib[59];
      const vz = (...CC) => {
          CC[Ib[0]] = Ib[1];
          const ZC = zC();
          ZC === Ib[9] || iz || (iz = GC((() => {
            if (Az !== Ib[8] && (0, mQ[Ib[220]])(ZC) !== Az) return Ib[65];
            for (let CC = Ib[1]; CC < xz[Ib[0]]; CC++)
              if ((0, mQ[Ib[211]])(mQ[Ib[221]], ZC, [xz[CC]])) return Ib[65];
            for (let CC = Ib[1]; CC < Jz[Ib[0]]; CC++)
              if (ZC[Jz[CC]] !== Ib[9] && ZC[Jz[CC]] !== Ib[8]) return Ib[65];
            return Ib[59]
          })))
        },
        ez = (0, mQ[Ib[10]])("RXZlbnQ=");
      let hz = Tz[Ib[222]][Ib[240]],
        Kz = Ib[1];
      const Yz = () => Kz++ === Ib[48] ? (Kz = Ib[1], MC(Ib[59]) ? Tz[Ib[235]].CheckFuncHit : Ib[1]) : Ib[1],
        dz = (0, mQ[Ib[197]])(Ib[9]),
        mz = QC[Ib[0]];
      for (let oC = Ib[1]; oC < mz; oC++) {
        const CC = (0, mQ[Ib[211]])(mQ.bb, QC, [oC]);
        dz[oC] = CC >= Ib[109] && CC <= 122 ? CC : Ib[1]
      }
      const Hz = (...CC) => {
          return CC[Ib[0]] = Ib[3], typeof CC[Ib[1]] === Ib[209] + Ib[210] && (0, mQ[Ib[211]])(mQ[Ib[223]], CC[Ib[2]], [(zC = CC[Ib[1]], (0, mQ.o)(mQ.y, zC, []))]) !== Ib[9];
          var zC
        },
        Ez = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        lz = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Xz = [
          [Ab["Dispat" + Ib[224] + Ib[218]], () => !Hz(EventTarget[Ib[212] + Ib[213]][Ib[225] + Ib[224] + Ib[218]], Ez)],
          [Ab.PerformanceNow, () => !Hz(performance[Ib[226]], lz)],
          [Ab.DateNow, () => !Hz(Date[Ib[226]], lz)]
        ],
        cz = (0, mQ[Ib[197]])(Ib[9]);
      let uz = Ib[1];
      const rz = {
        stackCheck: (...CC) => {
          eb(CC[Ib[0]] = Ib[1], CC[Ib[32]] = Ib[9]);
          const zC = Sb((() => (CC[Ib[32]] = NC(Ib[65]), CC[Ib[32]] !== Ib[9])));
          var ZC, QC;
          return CC[Ib[32]] !== Ib[9] && gC === Ib[9] && (ZC = CC[Ib[32]][Ib[57]], QC = CC[Ib[32]][Ib[58]], gC = (0, Vw.C)(qb(ZC, QC))), zC
        },
        [Ib[228] + Ib[229]]: (...CC) => {
          CC[Ib[0]] = Ib[1];
          const zC = LC();
          if (zC === Ib[3]) return Ib[3];
          if (iC[fz]) return Ib[4];
          const ZC = Pb((() => wC[oz] ? Ib[16] : Ib[1]));
          return ZC !== Ib[1] ? ZC === Ib[16] ? Ib[16] : Ib[1] : zC === pb ? Ib[1] : zC === Ib[35] ? Ib[35] : (AC(), QC = Function[Ib[212] + Ib[213]], bC = Ib[234], nC = (...CC) => (CC[Ib[0]] = Ib[2], CC[Ib[1]].writable !== Ib[65]), Sb((() => {
            const CC = Object.getOwnPropertyDescriptor(QC, bC);
            return void 0 !== CC && nC(CC)
          })) ? Ib[21] : Ib[1]);
          var QC, bC, nC
        },
        indexPassReplaced: TC,
        [Ib[230] + "tSubChanged"]: (...CC) => {
          if (CC[Ib[0]] = Ib[1], jC === tC || sC) return Ib[59];
          const zC = DC();
          return zC !== tC && zC !== jC
        },
        vq: (...CC) => {
          eb(CC[Ib[0]] = Ib[1], CC[Ib[227]] = mz);
          for (let zC = Ib[1]; zC < Xz[Ib[0]] + uz; zC++) {
            const ZC = zC < Xz[Ib[0]] ? Xz[zC] : cz[zC - Xz[Ib[0]]];
            ZC[Ib[1]] < CC[Ib[227]] && GC(ZC[Ib[2]]) && (CC[Ib[227]] = ZC[Ib[1]])
          }
          return CC[Ib[227]] < mz ? dz[CC[Ib[227]]] : Ib[1]
        },
        zF: () => UC ? Iz[Ib[239]] : Ib[20],
        [Ib[231] + Ib[232] + "Subs"]: (...CC) => {
          CC[Ib[0]] = Ib[1];
          const zC = oC[Ib[211]].QG[Ib[231] + Ib[232]];
          return typeof zC === Ib[233] && zC > Ib[1] ? zC > Ib[55] ? Ib[55] : zC : Ib[1]
        },
        ["getCom" + Ib[246]]: (...CC) => {
          eb(CC[Ib[0]] = Ib[1], CC[Ib[32]] = Ib[8], kC = Ib[1]);
          for (let ZC = Ib[1]; ZC < YC; ZC++) bz(KC[ZC], Ib[65]);
          for (let ZC = Ib[1]; ZC < qz[Ib[0]]; ZC++) iC[qz[ZC][Ib[1]]] && bz(qz[ZC][Ib[2]], Ib[65]);
          const zC = Pb((() => gb(atob[Ib[234]](), FC) ? Ib[1] : Ib[2]));
          zC === Ib[2] && bz(Ib[235], Ib[65]), AC();
          const QC = zC === pb ? pb : Pb(((...CC) => {
            CC[Ib[0]] = Ib[1];
            const zC = Object.getOwnPropertyDescriptor(window, "atob");
            return zC === Ib[8] ? pb : zC[Ib[236]] !== Ib[8] ? Ib[2] : Ib[1]
          }));
          QC === Ib[2] && bz(Ib[61], Ib[65]);
          const wC = QC === pb;
          for (let ZC = Ib[1]; ZC < Wz[Ib[0]] && !wC; ZC++) iC[Wz[ZC][Ib[1]]] && bz(Wz[ZC][Ib[2]], Ib[65]);
          const bC = kC > YC;
          CC[Ib[2]] = Ib[9], YC === Ib[1] && (mC > Ib[1] ? CC[Ib[2]] = dC[Ib[1]] : lC ? CC[Ib[2]] = "fp" : bC || (CC[Ib[2]] = iC[Nz] ? Ib[237] : iC[Mz] ? Ib[238] : Ib[9]));
          for (let ZC = Ib[1]; ZC < Sz[Ib[0]] && !wC; ZC++) iC[Sz[ZC][Ib[1]]] && bz(Sz[ZC][Ib[2]], Ib[65]);
          const nC = kC,
            fC = (0, Qb[Ib[19]])(),
            oC = fC !== Ib[9] && (0, Fz[Ib[211]])(fC);
          oC && !wC && bz(fC, Ib[59]), aC && bz("ix", Ib[59]), hC && bz("il", Ib[59]);
          for (let ZC = Ib[1]; ZC < mC; ZC++) bz(dC[ZC], Ib[65]);
          for (let ZC = Ib[1]; ZC < pz[Ib[0]]; ZC++) iC[pz[ZC][Ib[1]]] && bz(pz[ZC][Ib[2]], Ib[65]);
          iC[Pz] && bz("mk:lk", Ib[65]);
          const qC = ((...CC) => {
            CC[Ib[0]] = Ib[2];
            for (let zC = Ib[1]; zC < Rz[Ib[0]]; zC++)
              if (CC[Ib[1]] === Rz[zC]) return Rz[zC];
            return Ib[9]
          })(iC[Gz]);
          if (qC !== Ib[9] && bz(qC, Ib[65]), ZC !== Ib[9] && xC(ZC.emitReplaced) === Ib[65] && bz("mk:em", Ib[65]), iz && bz("3s", Ib[59]), mQ.V && bz("3b", Ib[59]), AC(), RC && bz("3d", Ib[59]), wC && bz("3g", Ib[59]), fC === Ib[9] || oC || bz(fC, Ib[59]), gC !== Ib[9] && bz(gC, Ib[59]), PC === Ib[9] && ZC !== Ib[9]) {
            const CC = xC(ZC[Ib[228] + "mMeshHitStac" + Ib[239]]);
            typeof CC === Ib[206] && (PC = function(CC, zC, ZC) {
              let QC = 0;
              for (; QC < ZC && -1 === nb(CC, zC[QC]);) QC++;
              return (0, Vw.n)(qb(CC, QC < ZC ? zC[QC] : null))
            }(CC, WC, WC[Ib[0]] - Ib[2]))
          }
          var NC;
          if (PC !== Ib[9] && bz(PC, Ib[59]), SC === Ib[9] && Iz[Ib[19]] !== Ib[9] && eb((NC = Iz[Ib[19]], SC = (0, Vw.j)(Nb(NC).reader)), pC = Mb(Iz[Ib[19]], xC((() => Iz[Ib[32]] === Ib[9] ? Ib[9] : (0, mQ.fb)(Iz[Ib[32]]))))), SC !== Ib[9] && bz(SC, Ib[59]), pC !== Ib[9] && bz(pC, Ib[59]), kC === Ib[1]) return Ib[9];
          if (CC[Ib[2]] === Ib[9] && OC[Ib[1]] && !(0, Vw[Ib[208]])(BC[Ib[1]]))
            for (let ZC = Ib[2]; ZC < nC; ZC++)
              if (OC[ZC] && (0, Vw[Ib[208]])(BC[ZC])) {
                const CC = BC[ZC];
                for (let zC = ZC; zC > Ib[1]; zC--) eb(BC[zC] = BC[zC - Ib[2]], OC[zC] = OC[zC - Ib[2]]);
                eb(BC[Ib[1]] = CC, OC[Ib[1]] = Ib[65]);
                break
              } if (eb(CC[Ib[3]] = Ib[1], CC[Ib[4]] = CC[Ib[2]] === Ib[9] ? Ib[1] : nC), CC[Ib[4]] > Ib[1] && fC !== Ib[9] && oC && !wC) {
            for (let zC = CC[Ib[4]]; zC > Ib[1]; zC--) eb(BC[zC] = BC[zC - Ib[2]], OC[zC] = OC[zC - Ib[2]]);
            eb(BC[Ib[1]] = fC, OC[Ib[1]] = Ib[59], CC[Ib[3]] = Ib[2], CC[Ib[4]]++)
          }
          if (CC[Ib[61]] = Ib[1], VC++ % Ib[3] === Ib[2])
            for (let ZC = Ib[2]; ZC < kC; ZC++) nz(ZC) < nz(CC[Ib[61]]) && (CC[Ib[61]] = ZC);
          const MC = BC[CC[Ib[61]]];
          (OC[CC[Ib[61]]] ? Zz : zz)[MC] = Cz++;
          const GC = CC[Ib[61]] >= CC[Ib[3]] && CC[Ib[61]] < CC[Ib[4]];
          if (!OC[CC[Ib[61]]] || MC === CC[Ib[2]] || CC[Ib[61]] === Ib[1] && !GC) return MC === Ib[218] ? (0, Vw.F)(iC[gz], Vw[Ib[5]]) : MC;
          const JC = (CC[Ib[32]] = CC[Ib[2]]) !== Ib[9] && void 0 !== CC[Ib[32]] ? CC[Ib[32]] : BC[Ib[1]];
          return JC !== Qz && eb(Qz = JC, wz = (0, mQ[Ib[197]])(Ib[9])), wz[MC] ??= (0, Vw.A)(MC, JC)
        }
      };
      let sz = Tz[Ib[222]][Ib[240]];
      const az = () => hz !== Tz[Ib[222]][Ib[240]] ? hz : sz;
      let tz = Ib[1],
        Dz = Ib[3],
        jz = Ib[1],
        yz = Ib[1];
      return {
        checks: rz,
        checkEvent: (...CC) => {
          CC[Ib[0]] = Ib[2];
          try {
            const zC = wC[ez];
            if (typeof zC === Ib[209] + Ib[210] && !(CC[Ib[1]] instanceof zC) && !(0, mQ.E)(CC[Ib[1]])) return hz = Tz[Ib[222]].NotEvent, Ib[1];
            if (CC[Ib[1]].isTrusted === Ib[59]) return Ib[1];
            let ZC = Ib[1];
            for (const QC in CC[Ib[1]]) ZC++;
            return ZC < Ib[51] ? (hz = Tz[Ib[222]]["FewPropertie" + Ib[10]], Ib[1]) : Yz()
          } catch {}
          return Ib[1]
        },
        checkPadCall: () => {
          try {
            return Yz()
          } catch {
            return Ib[1]
          }
        },
        usedProp: az,
        watchHeld: (...CC) => {
          eb(CC[Ib[0]] = Ib[3], CC[Ib[7]] = Ib[8]);
          const zC = JC((() => {
            CC[Ib[7]] = CC[Ib[2]]()
          }));
          cz[uz++] = [CC[Ib[1]], () => !zC || CC[Ib[2]]() !== CC[Ib[7]]]
        },
        ZN: (...CC) => {
          CC[Ib[0]] = Ib[1];
          const zC = TC();
          return ((...CC) => {
            if (eb(CC[Ib[0]] = Ib[2], CC[-Ib[241]] = Ib[8], CC[-Ib[242]] = Ib[8]), ZC !== Ib[9]) {
              const zC = xC(ZC.yF),
                QC = "v3" === zC ? Ib[4] : "v5" === zC ? Ib[48] : "v6" === zC ? Ib[35] : Ib[3];
              QC !== Ib[3] && (Dz = QC);
              const wC = xC(ZC["inbuil" + Ib[244] + Ib[245]]);
              typeof wC === Ib[233] && wC >= Ib[1] && wC <= Ib[112] && (wC | Ib[1]) === wC && (jz = wC), eb(CC[-Ib[241]] = xC(ZC.reflectApplyHit), CC[-Ib[242]] = xC(ZC.definerHit))
            }
            const zC = CC[Ib[1]] ? Ib[33] : "11" === CC[-Ib[242]] ? Ib[112] : "13" === CC[-Ib[242]] ? Ib[110] : CC[-Ib[241]] !== Ib[8] && CC[-Ib[241]] !== Ib[9] ? Ib[3] : "10" === CC[-Ib[242]] ? Ib[51] : "12" === CC[-Ib[242]] ? Ib[41] : Ib[1];
            zC !== Ib[1] && (yz = zC)
          })(zC), tz++ % 10 === Ib[1] && (vz(), Sb((() => !gb(wC[bC][Ib[234]][Ib[234]](), FC))) && (sz = sz === Tz[Ib[222]][Ib[243]] ? Tz[Ib[222]][Ib[243]] : Tz[Ib[222]].Fr), Sb((() => !gb(wC[bC][Ib[234]](), FC))) && (sz = Tz[Ib[222]][Ib[243]])), {
            flags: zC ? Tz[Ib[235]].Butto : Ib[1],
            values: [
              [Tz[Ib[239]].PhysicsVersion, Dz],
              [Tz[Ib[239]]["Inbuil" + Ib[244] + Ib[245]], jz],
              [Tz[Ib[239]]["AltCom" + Ib[246]], yz],
              [Tz[Ib[239]]["ProbeUsedPro" + Ib[197]], az()]
            ]
          }
        }
      }
    };
    const hb = "[bloxd-wasm-client]",
      Kb = "bloxdWasmDownloadFailed",
      Yb = ZZ.d,
      db = "boot",
      mb = "playSources",
      Hb = "wasmBuild",
      Eb = "bloxd-wasm-joined",
      lb = "bloxd-wasm-first-view",
      Xb = "bloxd-wasm-playable-legacy",
      cb = 1048576,
      ub = 8 * cb,
      rb = 1006,
      sb = 1e3,
      Tb = "You lost connection to the server.",
      ab = "general:lostConnection",
      tb = 1048576,
      Db = 5e3,
      jb = 100,
      yb = [2e3, 1e4, 3e4],
      Lb = 3e4;
    let Ub = null,
      Bb = null,
      Ob = !1,
      kb = !1,
      Vb = !1,
      Cn = null,
      zn = null,
      Zn = null,
      Qn = null,
      wn = null,
      bn = null,
      nn = null;
    const fn = new class {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = CC, this.soundOn = zC, this.now = ZC, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var CC;
        null === (CC = this.player) || void 0 === CC || CC.prepare()
      }
      preload(CC) {
        var zC;
        this.stopped || (null === (zC = this.player) || void 0 === zC || zC.preload(CC))
      }
      endSession() {
        var CC, zC;
        null === (CC = this.player) || void 0 === CC || CC.cancelPreload(), null === (zC = this.player) || void 0 === zC || zC.freeSheetsAfterGame()
      }
      load(CC) {
        if (null !== this.player || this.stopped) return;
        this.player = CC, CC.setMaster(this.master, this.soundOn);
        const zC = this.now(),
          ZC = this.local;
        this.local = [];
        for (const wC of ZC)
          if (!(wC.stopped || !wC.loop && zC - wC.at >= 300)) try {
            this.start(wC, CC, zC)
          } catch (QC) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", QC)
          }
      }
      start(CC, zC, ZC) {
        const {
          name: QC,
          pos: wC,
          ear: bC,
          maxHearDist: nC,
          refDistance: fC,
          loop: oC,
          fade: qC
        } = CC, FC = zC.playGame(QC, cz(CC, ZC), wC, bC, nC, fC, oC);
        if (CC.sound = FC, 1 !== CC.rate && FC.rate(CC.rate), null !== CC.panner && FC.setPannerAttr(CC.panner), null !== CC.moved && FC.setPosition(CC.moved), null !== qC && ZC - qC.at < qC.ms) {
          const zC = Xz(this.master);
          zC > 0 ? FC.fade(0, CC.volume * zC, qC.at + qC.ms - ZC) : FC.setRelativeVolume(CC.volume)
        }
      }
      onAudioEvent(CC, zC, ZC, QC) {
        var wC, bC;
        return null === (wC = null === (bC = this.player) || void 0 === bC ? void 0 : bC.onAudioEvent(CC, zC, ZC, QC)) || void 0 === wC || wC
      }
      applyListener(CC) {
        var zC;
        null === (zC = this.player) || void 0 === zC || zC.applyListener(CC)
      }
      playGame(CC, zC, ZC, QC, wC, bC, nC) {
        if (this.stopped) return lz.e;
        if (this.player) return this.player.playGame(CC, zC, ZC, QC, wC, bC, nC);
        const fC = this.now();
        this.local = this.local.filter((CC => !CC.stopped && (CC.loop || fC - CC.at < 300)));
        const oC = {
          name: CC,
          volume: Xz(zC),
          fade: null,
          pos: ZC && [ZC[0], ZC[1], ZC[2]],
          ear: QC && [QC[0], QC[1], QC[2]],
          maxHearDist: wC,
          refDistance: bC,
          loop: nC,
          rate: 1,
          panner: null,
          moved: null,
          at: fC,
          stopped: !1,
          sound: null
        };
        this.local.push(oC);
        const qC = {
          stop: () => {
            var CC;
            return oC.stopped = !0, null === (CC = oC.sound) || void 0 === CC || CC.stop(), qC
          },
          fade: (CC, zC, ZC) => {
            if (oC.sound) return oC.sound.fade(CC, zC, ZC), qC;
            const QC = Xz(this.master),
              wC = Xz(QC > 0 ? zC / QC : zC > 0 ? oC.volume : 0),
              bC = this.now(),
              nC = cz(oC, bC);
            return oC.volume = wC, oC.fade = ZC > 0 && nC !== wC ? {
              from: nC,
              at: bC,
              ms: ZC
            } : null, qC
          },
          rate: CC => (oC.sound ? oC.sound.rate(CC) : oC.rate = CC, qC),
          getVolume: () => oC.sound ? oC.sound.getVolume() : oC.volume * Xz(this.master),
          getRelativeVolume: () => oC.sound ? oC.sound.getRelativeVolume() : oC.volume,
          setRelativeVolume: CC => (oC.sound ? oC.sound.setRelativeVolume(CC) : (oC.volume = Xz(CC), oC.fade = null), qC),
          setPannerAttr: CC => (oC.sound ? oC.sound.setPannerAttr(CC) : oC.panner = {
            ...CC
          }, qC),
          setPosition: CC => (oC.sound ? oC.sound.setPosition(CC) : oC.moved = [CC[0], CC[1], CC[2]], qC)
        };
        return qC
      }
      setMaster(CC, zC) {
        var ZC;
        this.master = CC, this.soundOn = zC, null === (ZC = this.player) || void 0 === ZC || ZC.setMaster(CC, zC)
      }
      stop() {
        var CC;
        this.stopped = !0, null === (CC = this.player) || void 0 === CC || CC.stopAll();
        for (const zC of this.local) zC.stopped = !0;
        this.local = []
      }
    }((0, iz.d)(), !0);
    let qn = {
        wasm: "unknown",
        client: String(Zz.e)
      },
      Fn = null,
      Wn = () => {};
    const Nn = new Promise((CC => {
      Wn = CC
    }));
    let Mn = () => {};
    const gn = new Promise((CC => {
      Mn = CC
    }));
    let Sn, pn = null,
      Pn = null,
      Gn = null,
      Rn = null,
      An = null,
      xn = null,
      Jn = null,
      In = null,
      vn = null,
      en = null,
      hn = null,
      Kn = null,
      Yn = null,
      dn = null,
      mn = null,
      Hn = null,
      En = null,
      Xn = null,
      cn = null,
      un = !1,
      rn = null;
    const sn = new Set,
      Tn = new Set;

    function an(CC) {
      if (!sn.has(CC)) {
        sn.add(CC);
        for (const ZC of Tn) try {
          ZC(CC)
        } catch (zC) {
          console.error(`${hb} a startup listener threw`, zC)
        }
      }
    }

    function tn(CC) {
      un = !0, CC.isStopped || an("texturesIn")
    }
    let Dn = 1,
      jn = -1 / 0,
      yn = -1 / 0,
      Ln = -1 / 0,
      Un = !1,
      Bn = null,
      On = !1,
      kn = !1,
      Vn = 0,
      Cf = null,
      zf = !1;
    const Zf = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Qf = 0,
      wf = 0,
      bf = null,
      nf = null,
      ff = null,
      of = null;
    const qf = new WeakMap;
    let Ff = null,
      Wf = null,
      Nf = !1,
      Mf = null,
      gf = null,
      Sf = null,
      pf = null,
      Pf = null,
      Gf = null,
      Rf = 0,
      Af = null,
      xf = null,
      Jf = null,
      If = null,
      vf = -1 / 0,
      ef = null;
    const hf = new Set;
    let Kf = !1,
      Yf = null;
    const df = new Map,
      mf = new Set;
    let Hf = !1;
    const Ef = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let lf = null,
      Xf = () => [0, 0],
      uf = () => {},
      rf = () => {},
      sf = null,
      Tf = null;
    const af = new class {
      constructor(CC) {
        this.reached = CC, this.next = 1
      }
      observe(CC) {
        if (!(CC < this.next)) {
          for (; this.next <= CC;) this.next *= 2;
          this.reached(CC)
        }
      }
    }((CC => {
      console.warn(`${hb} chunk cancels from the server this session: ${CC}`)
    }));
    let tf = 1,
      Df = null,
      jf = null,
      yf = null,
      Lf = null,
      Uf = null,
      Bf = !1,
      Of = !1,
      kf = 0,
      Vf = null,
      Co = !1,
      zo = null,
      Zo = null,
      Qo = !1;
    const wo = new class {
      constructor(CC) {
        this.bp = CC, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(CC, zC, ZC) {
        (0, Kz.d)(CC) && (this.lossPending = !1);
        const QC = ZC - this.lastFrameMs;
        this.lastFrameMs = ZC, this.lossPending && zC && (0, Kz.i)(CC) ? (null === this.undrawnSinceMs || QC > 1e3) && (this.undrawnSinceMs = ZC) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && ZC - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(CC) {
        CC !== this.shown && (this.shown = CC, this.bp(CC))
      }
    }((CC => {
      oC.o.bp(gC.d, CC)
    }));
    let bo = !1,
      no = !0,
      fo = null,
      oo = !1,
      qo = !1,
      Fo = !1;

    function Wo() {
      return Zn ??= Promise.all([ZC.e(198), ZC.e(142), ZC.e(59)]).then((() => ZC(50695))).then((CC => (zn = CC, Object.assign(globalThis, {
        bloxdPreviewPage: CC.pagePreviews()
      }), CC)), (CC => {
        throw Zn = null, CC
      })), Zn
    }

    function No() {
      return Cn ??= ZC.e(57).then((() => ZC(50717))).catch((CC => {
        throw Cn = null, new IC.c(CC)
      })), Cn
    }
    class Mo {
      constructor() {
        this.host = null
      }
      open(CC) {
        return null !== this.host ? CC(this.host) : Wo().then((zC => (this.host ??= new zC.WasmPreviewHost(zC.pagePreviews()), CC(this.host))))
      }
      openMob(CC) {
        return this.open((zC => zC.openMob(CC)))
      }
      openPet(CC) {
        return this.open((zC => zC.openPet(CC)))
      }
      openMobLineup(CC) {
        return this.open((zC => zC.openMobLineup(CC)))
      }
      openCharacter(CC, zC) {
        return this.open((ZC => ZC.openCharacter(CC, zC)))
      }
    }

    function go() {
      Vb || (Vb = !0, fw.i.setHost(new Mo), (0, eZ.o)(), Qw.g.setFollower(Gq), Object.assign(globalThis, {
        bloxdPreviews: fw.i
      }))
    }

    function So() {
      Wo().then((CC => {
        CC.pagePreviews().prefetch()
      }), (() => {}))
    }

    function po() {
      let CC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (kb) return;
      kb = !0, bo = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), no = !bo, console.info(`${hb} starting`), Ob || (Ob = !0, (0, gC.J)(new mz(co, jo)), (0, NC.o)(new Hz), (0, gC.G)(new Ez), (0, gC.A)()), bo && oC.o.subscribe("appManagerUpdated|gameState", Xo), go(), (0, JZ.setCrashScreen)((CC => {
        let {
          text: zC,
          reload: ZC
        } = CC;
        ! function(CC, zC) {
          var ZC, QC;
          if (oo) return;
          oo = !0, (0, KZ.V)(), null === (ZC = ef) || void 0 === ZC || ZC.abort(), ef = null, ww.e.release();
          const wC = bo ? null !== (QC = CC.cancel) && void 0 !== QC ? QC : "general:back" : null;
          iQ({
            ...CC,
            cancel: wC
          }).then((CC => {
            CC && zC && qo ? ((0, Mz.w)("reloadOntoJs"), (0, DC.h)(Mz.C)) : CC && zC ? (0, DC.j)() : bo && (0, DC.e)("/")
          }))
        }(zC, ZC)
      })), (0, yQ.n)(), (0, Iz.h)();
      let zC = null;
      try {
        zC = Jb("9ckeslb2bss", (() => {
          var CC, zC;
          return null !== (CC = null === (zC = pn) || void 0 === zC ? void 0 : zC.ws) && void 0 !== CC ? CC : null
        }), CC, "gyshxeimfd")
      } catch (wC) {
        console.error(`${hb} probes`, wC)
      }
      const QC = function() {
        const CC = (0, KQ.k)(),
          zC = (0, KQ.g)();
        let ZC = !1;
        return QC => {
          CC && !ZC && (ZC = !0, (0, JZ.reportStaleBuildReload)(CC, zC, QC))
        }
      }();
      Aq(), bo || function() {
        const CC = function(CC) {
          var zC;
          const ZC = new URLSearchParams(CC),
            QC = ZC.get("game");
          return QC ? {
            game: QC,
            lobby: null !== (zC = ZC.get("lobby")) && void 0 !== zC ? zC : null
          } : null
        }(window.location.search);
        if (CC) return (0, Qz.i)(CC.game) && Aq().request(), void Ro(CC.game, CC.lobby);
        const zC = new URLSearchParams(window.location.search).get("ws");
        if (!zC) return;
        Nn.then((CC => {
          CC && async function(CC, zC) {
            try {
              await (0, IC.l)(CC), Mf = Oo(new WebSocket(zC)), null !== Mf && ww.e.setGame(null), Po()
            } catch (wC) {
              console.error(`${hb} ?ws=${zC} did not attach`, wC)
            }
          }(CC, zC)
        }))
      }(), async function(CC) {
        var zC, QC, bC, nC, fC, qC;
        if ("undefined" === typeof WebAssembly) return Nq("noWebAssembly", "This browser has no WebAssembly"), null;
        const FC = await (0, Mw.P)();
        if ((0, JZ.setCrashBackend)((0, ZZ.q)(FC) ? "unsupported" : null !== (zC = null === FC || void 0 === FC ? void 0 : FC.backend) && void 0 !== zC ? zC : "none"), (0, ZZ.q)(FC)) return Nq("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${FC.missing.join(", ")}`, {
          missing: FC.missing.join(",")
        }), null;
        if ((0, sw.k)("render")) try {
          const {
            startRenderDebug: CC
          } = await Promise.all([ZC.e(77), ZC.e(48)]).then((() => ZC(4621)));
          CC(FC)
        } catch (iz) {
          console.warn("The render debug topic didn't load", iz)
        }
        if ((0, sw.k)("renderlite")) try {
          const {
            startRenderLite: CC
          } = await Promise.all([ZC.e(269), ZC.e(49)]).then((() => ZC(50726)));
          yf = CC(FC)
        } catch (iz) {
          console.warn("The renderlite debug topic didn't load", iz)
        }
        if ((0, sw.k)("renderprobe")) try {
          const {
            startRenderProbe: CC
          } = await ZC.e(50).then((() => ZC(50730)));
          CC(FC)
        } catch (iz) {
          console.warn("The renderprobe debug topic didn't load", iz)
        }
        let WC = null;
        if (null !== FC && Mq()) {
          const CC = (0, vQ.g)(FC);
          null === CC || "webgl" !== FC.backend && !(0, gz.v)(CC) || (0, Sz.m)(CC, JZ.reportGpuWasmPopulation), null !== CC && (0, gz.o)(CC), WC = (0, vQ.e)(FC, CC)
        }
        if (null !== FC && null !== WC) return (0, JZ.reportGpuFallback)(WC, FC.backend), gq(`the wasm client's renderer plays this GPU (${WC}) on ${FC.backend} worse than the JS client`, "gpu"), null;
        const NC = null !== (QC = null === FC || void 0 === FC ? void 0 : FC.backend) && void 0 !== QC ? QC : null;
        Ef.adapter = null !== (bC = null === FC || void 0 === FC ? void 0 : FC.adapter) && void 0 !== bC ? bC : null, Ef.boundAtMs = null, Ef.indirectHangs = null, Ef.restoresSkipped = null;
        const MC = !(0, ZZ.$)();
        null !== FC && "none" !== FC.reason && console.info(`${hb} drawing with ${FC.backend}: ${FC.reason}`);
        const gC = (0, Mw.E)();
        Mn(!0), (0, IC.y)((CC => {
          try {
            null !== NC && (sf = CC.startSkyFeed, pq(), function(CC) {
              var zC, ZC;
              Xf = CC.rasterText, Sf = CC.setTextLocalPlayer, CC.setTextLocalPlayer(null !== (zC = null === (ZC = gf) || void 0 === ZC ? void 0 : ZC.info.playerDbId) && void 0 !== zC ? zC : null), uf = CC.drainTextRerasters, rf = CC.loadTextIcons, CC.warmText((() => Bf)), CC.textChanged(), Bf && setTimeout(rf, 0)
            }(CC), Tf = CC.startShellAnalytics, eq())
          } finally {
            Fo || (Lf = CC.followMenuPrefs({
              setSoundPrefs: Lo,
              setEnvPrefs: Uo,
              setUiPrefs: yo,
              setLookPrefs: Bo
            }))
          }
        })), (0, IC.n)(fn).catch((CC => {
          console.warn(`${hb} the game code did not load: a join asks again`, CC)
        }));
        const SC = (0, Mw.l)(FC);
        let pC, PC;
        SC.catch((() => {})), "loading" === (0, fz.y)() && Kw();
        try {
          pC = function(CC) {
            const zC = null !== CC && void 0 !== CC ? CC : document.createElement("canvas");
            zC.id = "wasm-game-canvas", (0, Aw.j)();
            const ZC = (0, dz.h)(),
              QC = (0, dz.i)(ZC);
            zC.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Rw.f)(zC, QC), (0, dz.d)(zC, ZC), zC.width = QC.bufferWidth, zC.height = QC.bufferHeight;
            const wC = document.createElement("div");
            return wC.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", wC.append(zC), uo(wC, no), fo = wC, document.body.append(wC), zC
          }(null === NC ? null : await (await Wo()).pagePreviews().beginSession())
        } catch (wC) {
          return await FF({
            site: Hb,
            error: wC
          }, (() => {
            (0, JZ.showUnsupported)((0, xQ.m)("fetch"), Uw.g.fetch, `the previews did not load: ${String(wC)}`)
          })), null
        }
        Kw();
        try {
          PC = await SC
        } catch (wC) {
          return await FF({
            site: Hb,
            error: wC
          }, (() => {
            (0, JZ.showUnsupported)((0, xQ.m)("fetch"), Uw.g.fetch, `the ${null!==NC&&void 0!==NC?NC:"client"} build did not load: ${String(wC)}`)
          })), null
        }
        const GC = (0, Mw.d)(),
          RC = !GC && !0 !== mZ.k.getItem(Kb),
          AC = !GC && "loading" === (0, fz.y)();
        await (0, gw.b)(PC, {
          reloadFailedDownload: RC
        }), AC && !(0, fz.P)() && await (0, gw.b)(PC, {
          reloadFailedDownload: RC
        });
        vw = performance.now();
        const xC = qn;
        if (!(0, fz.P)()) {
          (0, fz.M)() && mZ.k.setItem(Kb, !0);
          const CC = (0, fz.q)();
          if ("call" === CC) Uq({
            site: QZ.u,
            error: (0, fz.o)(),
            header: null
          }, xC);
          else {
            const zC = null !== CC && void 0 !== CC ? CC : "instantiate",
              ZC = () => {
                (0, JZ.showUnsupported)((0, xQ.m)(zC), Uw.g[zC], (0, fz.j)())
              };
            if ("compile" !== CC && "instantiate" !== CC || !Mq())
              if ("fetch" === zC) {
                const CC = [PC.url().href, Wz.e.url().href];
                await FF({
                  site: Hb,
                  error: (0, fz.j)(),
                  urls: CC
                }, ZC)
              } else ZC();
            else {
              const zC = (0, fz.j)(),
                ZC = (0, Dz.c)((0, fz.o)());
              (0, JZ.reportCountedLoadFallback)((0, xQ.m)(CC), Uw.g[CC], zC, ZC), gq(`the wasm client did not ${CC} here (${zC})`, ZC ? "oom" : null)
            }
          }
          return null
        }(0, oz.T)(PC.url()) && (0, JZ.reportUnstreamedCoreLoad)();
        const iC = (0, fz.z)();
        let vC, eC = xC;
        try {
          eC = {
            ...xC,
            wasm: iC.YW()
          };
          const {
            mp: CC
          } = PC.bindings, zC = CC.jZC();
          if (zC !== Tz.C) return Uq({
            site: QZ.c,
            error: `core ABI ${zC}, page ABI ${Tz.C}`,
            header: null
          }, eC), null;
          const [ZC, QC] = (0, Tz.ne)();
          vC = new CC(ZC, QC)
        } catch (wC) {
          return Uq({
            site: QZ.c,
            error: wC,
            header: null
          }, eC), null
        }
        qn = eC, Fn = PC.bindings;
        const hC = new QZ.f(vC, fz.t, {
          onCrash: CC => {
            var zC;
            null === (zC = yf) || void 0 === zC || zC.crashed(CC),
              function(CC, zC, ZC, QC) {
                if ("webgpu" !== zC || (0, Mw.b)()) return !1;
                const wC = function(CC) {
                  if (CC.site === QZ.e && (0, ZZ.t)(CC.error)) return "frames_refused";
                  return CC.site === Yb && (0, ZZ.w)(CC.error) ? "start_failed" : null
                }(CC);
                if (null === wC) return !1;
                if (null !== (0, ZZ.W)(wC, QC)) return (0, JZ.countRenderLost)(wC, CC.error, Ef), !1;
                return ez.G.reloaded(null, !1), (0, JZ.reportRenderReload)("webgpu", "start_failed" === wC ? 0 : 1, ZC, {
                  cause: wC,
                  error: CC.error,
                  context: Ef,
                  session: Vq(null)
                }), mq(), !0
              }(CC, NC, eC, MC) || Uq(CC, eC)
          },
          onNetEvent: dq,
          onReconnectGrace: qq,
          onJoinPreloadEnded: oq,
          onCoreErrors: (CC, zC) => {
            var ZC, QC;
            CC.some((CC => {
              let {
                code: zC
              } = CC;
              return zC === Tz.N.RenderDeviceLost
            })) && ((0, Mw.z)(), wo.deviceLost(), "webgpu" === NC && ez.G.lost()), null === (ZC = yf) || void 0 === ZC || ZC.coreErrors(CC);
            const wC = () => {
              (0, JZ.reportCoreErrors)(CC, zC, eC, ((CC, zC) => {
                var ZC;
                return CC === Tz.N.EnvUnknownSky ? (0, JZ.unknownSkyWords)(pz.e.get("skyBox")) : null === (ZC = lf) || void 0 === ZC ? void 0 : ZC.yZC(CC, zC)
              }))
            };
            CC.some((CC => {
              let {
                code: zC
              } = CC;
              return zC === Tz.N.EnvUnknownSky
            })) ? queueMicrotask(wC) : wC(), null === (QC = rn) || void 0 === QC || QC.coreErrors(CC)
          },
          onRenderReload: (CC, zC, ZC) => {
            ! function(CC, zC, ZC, QC, wC, bC) {
              var nC;
              if ((0, Mw.b)()) return;
              const fC = zC === Tz.Vc.WEBGPU,
                oC = QC === Tz.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                qC = QC === Tz.Vc.RESTORE_LOST,
                FC = fC && (0, ez.o)(Ef.adapter, ZC, "lost" === oC, qC),
                WC = (0, ZZ.Z)(lf);
              null === (nC = yf) || void 0 === nC || nC.reload(fC, ZC, oC, null === WC || void 0 === WC ? void 0 : WC.message);
              const NC = fC ? (0, ZZ.W)(oC, wC) : null;
              if (null !== NC) {
                (0, JZ.countRenderLost)(oC, WC, Ef);
                const zC = void 0 === WC ? "" : ` (${WC.message})`;
                return void CC.crash(JZ.RENDER_RELOAD_SITE, new Error(`${(0,JZ.renderReloadMessage)("webgpu",oC,ZC)} and ${NC}${zC}`))
              }
              const MC = fC ? "webgpu" : "webgl1" === bC ? "webgl1" : "webgl";
              "lost" === oC && (0, Mw.z)();
              fC || (0, Mz.v)();
              (0, JZ.reportRenderReload)(MC, ZC, qn, {
                cause: oC,
                restoreLost: qC,
                adapterRemembered: FC,
                error: WC,
                context: Ef,
                session: Vq(CC.sunShadowsHeld())
              }), mq()
            }(hC, CC, zC, ZC, MC, NC)
          },
          onEnvEvent: CC => {
            var zC;
            CC.kind === Tz.ab.SkyImages ? null === (zC = Hn) || void 0 === zC || zC.onEvent(CC.payload) : CC.kind === Tz.ab.EnvLighting && (En = 1 === CC.payload[0])
          },
          onImages: CC => {
            var zC;
            null === (zC = Xn) || void 0 === zC || zC.onEvent(CC)
          },
          onModelRequest: CC => {
            var zC;
            null === (zC = Yn) || void 0 === zC || zC.request(CC)
          },
          onModelTaken: (CC, zC) => {
            var ZC;
            null === (ZC = Yn) || void 0 === ZC || ZC.taken(CC, zC)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(CC, zC) {
                const ZC = nn;
                if (null === ZC || CC.isStopped) return;
                ZC.restore((CC => {
                  (0, JZ.reportTerrainTextureFailure)(CC, zC)
                })).then((zC => {
                  !1 !== zC || CC.isStopped ? !0 === zC && console.info(`${hb} terrain textures handed over again after the renderer lost them`) : console.warn(`${hb} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(hC, eC)
            }))
          },
          onKeepAlive: CC => {
            const zC = null === of ? void 0 : qf.get(of);
            void 0 !== zC && EQ(zC, CC)
          },
          onSends: () => {
            ! function(CC) {
              const zC = performance.now();
              if (CC.forEachNetOut(jq), Tq(CC), (0, QZ.K)(CC, {
                  worldgen: Gn,
                  mesh: An
                }), null !== jf) try {
                jf.sendsWent(CC, zC, performance.now())
              } catch (wC) {
                Yq(wC)
              }
            }(hC)
          }
        });
        if (Qn = hC, null === (nC = Yz.e.wasmNetReady) || void 0 === nC || nC.call(Yz.e, (() => hC.isStopped ? 0 : hC.netKeptFrames)), null !== CC) {
          hC.setAntiCheatProbes(Gb(fz.t, CC.checks)), CC.watchHeld(Ab.CoreFrame, (() => hC.frame)), CC.watchHeld(Ab.GlueFrame, (() => vC.frame));
          const zC = function(CC, zC) {
            const ZC = new Rb(zC);
            let QC = !1;
            ZC.ZN(CC.ZN());
            const wC = (0, mQ.Y)((() => {
              ZC.ZN(CC.ZN())
            }), xb);
            let bC = 6 * (0, mQ.N)() | 0;
            const nC = () => {
              ++bC < 6 || (bC = 0, CC.checks.stackCheck() && (QC = !0))
            };
            (0, Zb.g)(nC);
            const fC = () => {
              const zC = CC.checkPadCall();
              0 !== zC && ZC.setFlags(zC)
            };
            return (0, zb.i)(fC), {
              onSend: nC,
              beforeFrame: () => {
                QC && ZC.originStackHit() && (QC = !1)
              },
              onEvent: zC => {
                const QC = CC.checkEvent(zC);
                ZC.value(Tz.k.ProbeUsedProp, CC.usedProp()), 0 !== QC && ZC.setFlags(QC)
              },
              stop: () => {
                (0, mQ.ab)(wC), (0, Zb.e)(nC), (0, zb.f)(fC)
              }
            }
          }(CC, ((CC, zC, ZC) => {
            let QC = !1;
            return QF(hC, (() => {
              QC = hC.rings.input.writeRecord(Tz.wb.AntiCheat, CC, zC, ZC, 0)
            })), QC
          }));
          hC.isStopped ? zC.stop() : hn = zC
        }
        Ub = (CC, zC, ZC) => hC.rings.cmd.writeCmd(CC, zC, ZC), Bb = CC => hC.rings.cmd.growForCmd(CC), zf = !1, pq(), (0, IC.B)(hC, {
          core: vC,
          memory: fz.t,
          staleOr: (CC, zC, ZC, QC) => FF({
            site: CC,
            error: zC
          }, ZC, QC),
          reportReplayFault: (CC, zC) => {
            (0, JZ.reportReplayFault)(CC, zC, qn)
          },
          audio: fn,
          options: pz.e,
          onNetEvent: dq,
          sessionInfo: CC => {
            var zC;
            return (null === (zC = gf) || void 0 === zC ? void 0 : zC.conn) === CC ? gf.info : null
          },
          onEventOverflow: Ho,
          replayShaderPack: CC => {
            var zC;
            null === (zC = rn) || void 0 === zC || zC.replay(CC)
          },
          hasPackModel: CC => {
            var zC, ZC;
            return null !== (null !== (zC = null === (ZC = Pq()) || void 0 === ZC ? void 0 : ZC.modelUrl(CC)) && void 0 !== zC ? zC : null)
          },
          beforeWrite: () => (!On && hC.rings.net.cursor > 0 && lq(hC, !1, "all"), !hC.isStopped),
          beforeOp: () => (!On && hC.netWrittenSinceFrame > 0 && lq(hC, !1, "budget"), !hC.isStopped)
        }), (0, JC.B)({
          lockPointer: () => {
            if (!yZ(pC)) return !1;
            try {
              Promise.resolve(pC.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, EZ.e)()
          },
          leaveGame: () => {
            mo()
          },
          canvas: () => pC
        }), Kn = (0, JC.r)((() => {
          var CC;
          const zC = (0, IC.k)();
          null === (CC = (0, IC.u)()) || void 0 === CC || CC.followCursorAim(!0 === (null === zC || void 0 === zC ? void 0 : zC.isSessionLive) ? zC : null)
        })), bf && hC.setUiPrefs(bf);
        nf && hC.setEnvPrefs(nf);
        ff && hC.setLookPrefs(ff);
        const KC = Pw ? Gw(Pw.preventMovement) : null;
        KC && Do(KC);
        const YC = (0, GZ.e)(),
          dC = (0, GZ.b)(hC, YC);
        vn = YC.basis, (0, dZ.n)(null === dC ? null : (0, PZ.n)(dC)), In = dC;
        const mC = (0, qz.e)();
        let HC = 1 / 0,
          EC = !0,
          lC = YC.shedFootprintBytes;
        const XC = new jQ.e(mC, (() => vC.Lp()), (CC => {
          hC.crash(QZ.i, CC)
        }));
        xn = XC, Jn = XC, null !== dC && XC.setCeiling(Math.min((0, jQ.p)(dC), HC, (0, GZ.h)()));
        if (EC) {
          XC.setShed((CC => {
            const zC = hC.shedMemory("joinReserve" !== CC);
            return null !== zC && (null === In || zC < In) && (In = zC, (0, dZ.n)((0, PZ.n)(zC))), zC
          }), ((CC, zC, ZC) => {
            1 === zC ? (0, JZ.reportMemoryShed)(CC, ZC, qn) : console.warn(`${hb} wasm memory: shed again (${CC}): shed ${zC}`, ZC.wasmMemoryShed)
          }), (() => hC.addDistanceInUse()));
          const CC = (0, ZZ.O)(iC);
          XC.setFootprint(new rw(lC, {
            storedChunks: () => vC.LZC(),
            gpuBytes: () => {
              var zC;
              return null !== (zC = null === CC || void 0 === CC ? void 0 : CC.UZC()) && void 0 !== zC ? zC : 0
            },
            jsHeapBytes: uw
          }))
        }
        window.addEventListener("pagehide", (() => {
          xn === XC && (XC.refreshStats(), ZF(XC))
        })), window.addEventListener("pagehide", Hq), window.addEventListener("pagehide", Eq), !1;
        const [cC, uC] = (0, vZ.h)();
        Uf = (0, hZ.f)((CC => hC.setChunkAddDistance(CC.horizontal, CC.vertical)), {
          horizontal: cC,
          vertical: uC
        }), hC.setAmbientOcclusion(!0 !== mZ.i.getItem("disableAmbientOcclusion")), hC.setPoseLod(!0 !== mZ.i.getItem(bz.P)), (0, sw.k)("look") && (hC.setDebugLog(Tz.T.Look, !0), hC.setDebugLog(Tz.T.CameraSet, !0), (0, aw.k)("wasm", {
          look: () => hC.takeDebugLog(Tz.T.Look),
          cameraSets: () => hC.takeDebugLog(Tz.T.CameraSet)
        }));
        (0, sw.k)("remesh") && (hC.setDebugLog(Tz.T.Remesh, !0), rC = () => hC.takeDebugLog(Tz.T.Remesh), Lw = new yw((0, tw.l)(), rC));
        var rC;
        const sC = function(CC, zC, ZC, QC) {
          const wC = new FQ,
            bC = CC => mZ.i.getItem(CC);
          wC.sync(bC, zC), (0, hz.W)();
          const nC = (0, oC.q)("customBindingsChanged", (() => {
            wC.sync(bC, zC)
          }));
          (0, lZ.n)(zC);
          const fC = new Set,
            qC = (0, JC.r)((() => {
              var CC;
              fC.size > 0 && gQ() && !0 === (null === (CC = (0, IC.k)()) || void 0 === CC ? void 0 : CC.localPlayerAlive()) && oC.o.bp("usedKeyboard")
            })),
            FC = zQ.d.heldSizer((() => (0, dz.m)(CC))),
            WC = CQ(CC, zC, {
              prevents: CC => wC.prevents(CC),
              keyPressed: CC => {
                wC.moves(CC) && (fC.add(CC), gQ() && oC.o.bp("usedKeyboard"))
              },
              keyReleased: CC => {
                fC.delete(CC)
              },
              keysReleased: () => {
                fC.clear()
              },
              resized: () => {
                NQ.h.measure(CC.getBoundingClientRect()), (0, ZQ.h)()
              },
              sizeCanvas: FC,
              watchRenderScale: zC => {
                const ZC = (0, dz.p)(CC, zC),
                  QC = zQ.d.onRelease(zC);
                return () => {
                  ZC(), QC()
                }
              },
              touchStarting: () => {
                NQ.h.measure(CC.getBoundingClientRect())
              },
              viewShown: ZC,
              touchUiShown: () => jC.b.get("isTouchScreen"),
              ctrlCombosAreGames: gQ,
              inspect: (CC, zC, ZC) => {
                wC.checks(zC, ZC) && QC(CC)
              },
              canLock: () => yZ(CC)
            }),
            NC = (0, qZ.b)(zC);
          return () => {
            nC(), qC(), (0, lZ.n)(null), NC(), WC()
          }
        }(pC, ((CC, zC, ZC, QC, wC) => {
          QF(hC, (() => {
            hC.rings.input.writeRecord(CC, zC, ZC, QC, wC)
          })), !kn && (0, RQ.d)(CC, wC) && (0, RQ.b)((() => {
            Qn !== hC || Fo || hC.isStopped || !tq() || lq(hC, !1, "budget", !1)
          }))
        }), (() => no), (CC => {
          var zC;
          null === (zC = hn) || void 0 === zC || zC.onEvent(CC)
        }));
        if (hC.isStopped) return sC(), null;
        Pn = sC;
        const TC = () => !hC.isStopped && !oo;
        if (hC.isStopped) return null;
        (0, fz.U)((() => {
          "call" === (0, fz.q)() && hC.crash(QZ.u, (0, fz.o)())
        }));
        const aC = (0, QZ.L)(hC.rings.worker, (() => {
          lq(hC, !1, document.hidden ? "all" : "budget")
        }));
        Gn = function(CC, zC) {
          return wF().then((CC => {
            let {
              prefetchWorldgenWorker: zC
            } = CC;
            zC()
          }), (() => {})), new kw({
            module: (0, fz.w)(),
            decodeSettings: CC => {
              const zC = (0, IC.u)();
              if (null === zC) throw new Error("no game code to decode the world-gen seed with");
              return zC.decodeMapSettings(CC)
            },
            loadWorker: bF,
            onMapWithoutWorldgen: () => {
              nF((CC => {
                let {
                  stopWorldgenWorkerPrefetch: zC
                } = CC;
                zC()
              }))
            },
            onLoadFailed: CC => {
              (0, JZ.reportWorldgenLoadFailure)(CC, qn)
            },
            onWorkerLost: CC => {
              (0, JZ.reportWorkerLost)(QZ.B, CC, qn)
            },
            onStartTimeout: CC => {
              (0, JZ.reportWorkerStartTimeout)(QZ.B, CC, qn)
            },
            onGaveUp: CC => {
              (0, JZ.reportWorldgenGaveUp)(CC, qn)
            },
            onMemoryStats: CC => {
              var zC;
              null === (zC = xn) || void 0 === zC || zC.noteWorldgen(CC)
            },
            onMemoryGone: () => {
              var CC;
              null === (CC = xn) || void 0 === CC || CC.worldgenGone()
            },
            write: (ZC, QC, wC, bC, nC) => {
              QF(CC, (() => {
                CC.rings.worker.writeWorkerRecord(ZC, QC, wC, 0, bC, nC) || CC.crash(QZ.B, `a world-gen record of kind ${QC} did not fit the worker-in ring`)
              })), zC()
            }
          })
        }(hC, aC), An = function(CC, zC) {
          return new tQ({
            module: (0, fz.w)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: CC
              }, zC] = await Promise.all([ZC.e(40).then((() => ZC(50769))), Promise.resolve().then((() => ZC(77))).then((CC => {
                let {
                  isMobile: zC
                } = CC;
                return zC()
              }), (() => !1))]);
              return {
                create: CC,
                count: (0, Jz.c)(navigator.hardwareConcurrency, zC),
                maxKeptLightStates: zC ? 1 : void 0
              }
            },
            write: (ZC, QC, wC, bC, nC, fC) => {
              (0, ZQ.f)(), QF(CC, (() => {
                CC.rings.worker.writeWorkerRecord(ZC, QC, wC, bC, nC, fC) || CC.crash(QZ.m, `a meshing record of kind ${QC} did not fit the worker-in ring`)
              })), zC()
            },
            onWorkerLost: CC => {
              (0, JZ.reportWorkerLost)(QZ.m, CC, qn)
            },
            onLightFault: (CC, zC) => {
              (0, JZ.reportLightFault)(CC, zC, qn)
            },
            onStartTimeout: CC => {
              (0, JZ.reportWorkerStartTimeout)(QZ.m, CC, qn)
            },
            onMemoryStats: (CC, zC) => {
              var ZC;
              null === (ZC = xn) || void 0 === ZC || ZC.noteMeshWorker(CC, zC)
            },
            onMemoryGone: CC => {
              var zC;
              null === (zC = xn) || void 0 === zC || zC.meshWorkerGone(CC)
            },
            fail: (zC, ZC) => {
              const QC = () => {
                CC.crash(QZ.m, void 0 === ZC ? zC : new Error(zC, {
                  cause: ZC
                }))
              };
              void 0 !== ZC ? FF({
                site: QZ.m,
                error: ZC
              }, QC) : QC()
            }
          })
        }(hC, aC), Xo();
        const yC = (0, bw.p)(Az.clientSideServerUrls.staticUrl, {
            onTableFailed: CC => {
              FF({
                site: JZ.MODEL_FEED_SITE,
                error: CC
              }, (() => {}), {
                stillWanted: TC
              })
            },
            packUrl: CC => {
              var zC, ZC;
              return null !== (zC = null === (ZC = Pq()) || void 0 === ZC ? void 0 : ZC.modelUrl(CC)) && void 0 !== zC ? zC : null
            }
          }),
          LC = function(CC, zC, ZC) {
            const QC = ZC => {
              var QC, wC;
              return null !== (QC = null === (wC = zC()) || void 0 === wC ? void 0 : wC.drawnUrl(ZC)) && void 0 !== QC ? QC : CC.url(ZC)
            };
            return (0, Qw.m)((0, LQ.l)(QC), ZC)
          }(yC, (() => Yn), Pq),
          UC = new LQ.e(LC, (CC => {
            console.warn(`${hb} image ${CC.key.kind}:${CC.key.index}:${CC.key.word} failed`, CC.error)
          }));
        Xn = UC, cn = new Cw(hC, LC, ((CC, zC) => {
          void 0 === zC ? console.warn(`${hb} ${CC}`) : Rq(CC, zC)
        }));
        const BC = new Zw.h(yC, function(CC, zC) {
          let QC = !1,
            wC = null,
            bC = null;
          const nC = {
              onUnavailable: (ZC, QC) => {
                bC ??= FF({
                  site: JZ.MODEL_POOL_SITE,
                  error: ZC,
                  urls: QC
                }, (() => {
                  (0, JZ.reportModelPoolFailure)(ZC, CC)
                }), {
                  stillWanted: zC
                })
              },
              onDecoderFailed: (ZC, QC) => {
                const wC = () => {
                  (0, JZ.reportDracoDecoderFailure)(ZC, CC)
                };
                void 0 !== QC ? FF({
                  site: JZ.MODEL_POOL_SITE,
                  error: ZC,
                  urls: QC
                }, wC, {
                  stillWanted: zC
                }) : wC()
              },
              onWorkerLost: zC => {
                (0, JZ.reportWorkerLost)(JZ.MODEL_POOL_SITE, zC, CC)
              },
              onModuleRetry: (zC, ZC) => {
                (0, JZ.reportModelsModuleRetry)(zC, ZC, CC)
              }
            },
            fC = ZC.e(42).then((() => ZC(50772))).then((CC => {
              let {
                pageModelPool: zC
              } = CC;
              if (QC) return null;
              const ZC = zC(nC);
              return wC = ZC.unlisten, dn = ZC.pool, Xo(), ZC.pool
            }), (CC => (QC || nC.onUnavailable(CC, void 0), null)));
          return mn = () => {
            var CC;
            QC = !0, null === (CC = wC) || void 0 === CC || CC(), dn = null
          }, (CC, zC) => fC.then((ZC => {
            var QC;
            return null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.build(CC, zC)) && void 0 !== QC ? QC : (0, nw.u)(CC, "the model workers did not load")
          })).then((CC => null !== bC && (0, nw.n)(CC) ? bC.then((() => CC)) : CC))
        }(eC, TC), (CC => {
          CC.startup ? (Lq(), FF({
            site: JZ.MODEL_FEED_SITE,
            error: CC.error,
            urls: "" === CC.url ? void 0 : [CC.url]
          }, (() => {
            (0, JZ.reportModelFailure)(CC, eC)
          }))) : (0, JZ.reportModelFailure)(CC, eC)
        }), {
          onWritten: (CC, zC) => {
            UC.glbWritten(CC, zC)
          },
          onTaken: (CC, zC) => {
            UC.glbTaken(CC, zC)
          },
          onPackFileFailed: (CC, zC) => {
            console.warn(`${hb} the texture pack's model file ${CC} failed: the shipped one loads`, zC)
          }
        });
        Yn = BC;
        const OC = new OQ.c(hC);
        nn = OC, OC.swap((CC => {
          const zC = () => {
            (0, JZ.reportTerrainTextureFailure)(CC, eC)
          };
          if (Bf) return void zC();
          const ZC = () => !Bf,
            QC = null === CC.url ? void 0 : [CC.url];
          FF({
            site: QZ.A,
            error: CC.error,
            urls: QC
          }, zC, {
            stillWanted: ZC
          })
        })).then((CC => {
          null !== CC && (CC || hC.isStopped || console.warn(`${hb} the core refused the terrain textures: terrain draws untextured`), tn(hC))
        }));
        const kC = new rz(hC, ((CC, zC) => {
          console.warn(`${hb} ${CC}`, ...void 0 === zC ? [] : [zC])
        }));
        kC.feed(), null !== NC && function(CC, zC, QC, wC, bC, nC) {
          let fC = null,
            qC = null,
            FC = !1;
          const WC = {
            textures: null,
            stop: () => {
              var CC, zC;
              FC = !0, null === (CC = qC) || void 0 === CC || CC(), null === (zC = fC) || void 0 === zC || zC(), ww.e.setSettled(null), null !== Fn && Go.clear(Fn)
            }
          };
          bn = WC, qC = Aq().follow((qC => {
            null !== qC && Promise.all([ZC.e(201), ZC.e(45)]).then((() => ZC(50734))).then((ZC => {
              let {
                PackTextures: NC
              } = ZC;
              if (FC || CC.isStopped) return;
              const MC = new NC({
                feed: qC,
                terrain: zC,
                backend: QC,
                stopped: () => CC.isStopped,
                landed: () => {
                  tn(CC)
                },
                packSwapped: () => {
                  (0, Qw.i)(wC), nC.feed((() => async function(CC) {
                    const zC = null === CC ? null : await CC.averageColours;
                    return null === zC ? sz() : uz(zC)
                  }(MC.assets))), (0, zw.m)(MC.files()), bC.refresh().then((CC => {
                    null !== CC && console.info(`${hb} texture pack models: ${CC.resent} of ${CC.delivered} files written again, ${CC.refetched} refetched`)
                  }))
                },
                settled: (CC, zC, ZC) => {
                  var QC;
                  (ww.e.setSettled({
                    state: CC,
                    files: zC
                  }), function(CC, zC, ZC) {
                    const QC = null === CC.gameSource && (0, IZ.d)(CC.pack);
                    if (null === zC) return;
                    const wC = (0, xZ.g)(zC.error),
                      bC = QC ? "settings" : zC.source;
                    oC.o.bp(xZ.b, {
                      failure: wC,
                      source: bC,
                      pack: iZ(CC)
                    }), (0, JZ.reportTexturePackKeptOut)(bC, wC, zC.error, ZC)
                  }(CC, ZC, qn), null === ZC) && function(CC) {
                    const zC = Fn;
                    null !== zC && Go.apply(zC, CC).then((zC => {
                      zC && CC && console.info(`${hb} the texture pack's animations are in (${Object.keys(CC).length} files)`)
                    }))
                  }(null === (QC = CC.pack) || void 0 === QC ? void 0 : QC.animations)
                },
                settling: () => {
                  ww.e.setSettled(null)
                },
                warn: Rq,
                maxTextureSize: () => Promise.resolve((0, ZZ.db)(document.createElement("canvas")))
              });
              WC.textures = MC, fC = MC.start()
            }), (CC => {
              console.warn(`${hb} the texture pack's terrain didn't load: the built atlas stays`, CC)
            }))
          }))
        }(hC, OC, NC, UC, BC, kC);
        const VC = () => {
            hC.setTextureLayers("")
          },
          Cz = CC => {
            (Rz ??= ZC.e(53).then((() => ZC(50777))).then((CC => {
              let {
                TEXTURE_NAMES: zC
              } = CC;
              return zC
            }), (CC => {
              throw Rz = null, CC
            })), Rz).then((CC => {
              hC.setTextureLayers(CC) || hC.isStopped || (console.warn(`${hb} the core refused the texture names: textured Boxes draw textureNotFound`), VC())
            }), (zC => {
              if (hC.isStopped) return;
              const [ZC, ...QC] = CC;
              void 0 === ZC ? FF({
                site: JZ.TEXTURE_NAMES_SITE,
                error: zC
              }, (() => {
                console.warn(`${hb} the texture names didn't load, so textured Boxes draw textureNotFound`, zC), VC()
              }), {
                stillWanted: TC
              }) : setTimeout((() => {
                Cz(QC)
              }), ZC)
            }))
          };
        if (Cz(yb), null !== NC && !await async function(CC, zC, ZC, QC, bC, nC) {
            var fC;
            const oC = (0, ZZ.O)(ZC);
            if (null === oC) return CC.crash(Yb, new Error(`this ${QC} build has no openRenderer`)), !1;
            let qC;
            lf = oC;
            try {
              var FC, WC, NC, MC;
              const wC = null !== (FC = null === (WC = zn) || void 0 === WC ? void 0 : WC.pagePreviews()) && void 0 !== FC ? FC : null,
                fC = null !== (NC = null === (MC = zn) || void 0 === MC ? void 0 : MC.previewModule(ZC)) && void 0 !== NC ? NC : null;
              if (null === wC || null === fC) {
                null === wC || void 0 === wC || wC.endSession(!1), qC = (0, dz.h)().sampleCount, await (0, ZZ.h)(zC, oC, nC, Sq, qC, await bC);
                const CC = (0, ZZ.o)(ZC);
                null === CC && console.warn(`${hb} this ${QC} build has no image registry: sky and model images won't show`), (0, BQ.i)(CC)
              } else {
                (0, Mw.b)() && await (0, DC.l)();
                const ZC = (0, Mw.K)();
                if (null !== ZC) {
                  const zC = (0, ZZ.Z)(oC);
                  return CC.crash(JZ.RENDER_RELOAD_SITE, new Error(`${ZC}${void 0===zC?"":` (${zC.message})`}`)), !1
                }
                qC = await wC.bindSession(fC, zC, (async CC => (0, ZZ.y)(oC, Yb, nC, CC, Sq, await bC)))
              }
            } catch (wC) {
              return CC.crash(Yb, wC), !1
            }(function(CC, zC) {
              const ZC = CC,
                {
                  requestCapture: QC,
                  takeCapture: wC
                } = ZC;
              if ("function" !== typeof QC || "function" !== typeof wC) return;
              const bC = {
                request() {
                  QC.call(ZC, zC)
                },
                take() {
                  var CC;
                  return null !== (CC = wC.call(ZC)) && void 0 !== CC ? CC : null
                }
              };
              window[xw] = bC
            })(zC, qC), tf = qC, Hf = !0;
            const gC = performance.now();
            return Ef.boundAtMs = null !== (fC = (0, Mw.L)()) && void 0 !== fC ? fC : gC, Ef.indirectHangs = (0, Mw.B)(), Ef.restoresSkipped = (0, Mw.M)(), console.info(`${hb} ${QC} renderer bound at ${Math.round(gC)} ms`), !CC.isStopped
          }(hC, vC, iC, NC, gC, pC)) return null;
        if (null !== NC) {
          var zz, Zz, Qz;
          (0, Fz.E)(NC);
          const CC = () => !hC.isStopped && aq();
          ZC.e(194).then((() => ZC(34040))).then((zC => {
            let {
              devTools: ZC
            } = zC;
            hC.isStopped || ZC.setHost(function(CC) {
              return {
                tools: Nw,
                async downloadScene(zC, ZC) {
                  let {
                    width: QC,
                    height: wC,
                    colouring: bC
                  } = ZC;
                  "screenshot" === zC && null === bC ? await (0, qw.e)(CC, QC, wC) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (zC, ZC, QC) => (0, qw.d)(CC, zC, ZC, QC)
              }
            }(function(CC, zC) {
              return {
                canvas: CC,
                maxTextureSize: Fw,
                drawing: zC,
                resize: (CC, zC, ZC) => {
                  (0, lZ.s)(Tz.wb.Resize, 0, CC / ZC, zC / ZC, (0, lZ.j)(ZC))
                },
                restoreSize: () => {
                  const zC = (0, dz.m)(CC);
                  null !== zC && (0, lZ.s)(Tz.wb.Resize, 0, zC.cssWidth, zC.cssHeight, (0, lZ.j)(zC.renderScale))
                },
                onFrameDrawn: CC => (Ww.add(CC), () => {
                  Ww.delete(CC)
                })
              }
            }(pC, CC)))
          }), (CC => {
            console.warn(`${hb} the developer tools didn't load: no captures this session`, CC)
          }));
          const zC = "webgpu" === NC && null !== (zz = null === FC || void 0 === FC || null === (Zz = FC.adapter) || void 0 === Zz ? void 0 : Zz.vendor) && void 0 !== zz ? zz : null;
          Df = {
            backend: NC,
            canvas: pC,
            fallbackReason: null !== (Qz = null === FC || void 0 === FC ? void 0 : FC.reason) && void 0 !== Qz ? Qz : null,
            adapterVendor: zC
          }, eq();
          try {
            (0, ZQ.t)(NC, pC, zC)
          } catch (wC) {
            (0, ZQ.u)(), console.error(`${hb} the quality steps didn't start`, wC)
          }
        }
        const {
          storagePullBreaks: wz,
          splitPassBreaks: nz
        } = await gC;
        nz && console.warn(`${hb} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Nz = (0, tC.e)(FC, (0, ez.k)());
        if ((0, sw.k)("webgpuloss")) {
          var Pz, Gz;
          const CC = {
            backend: NC,
            reason: null !== (Pz = null === FC || void 0 === FC ? void 0 : FC.reason) && void 0 !== Pz ? Pz : null,
            source: null !== (Gz = null === FC || void 0 === FC ? void 0 : FC.source) && void 0 !== Gz ? Gz : null,
            storagePullBreaks: wz,
            noWebGpu: Nz.messageKey
          };
          (0, Tw.d)((zC => {
            zC.noteWasmPick(CC)
          }))
        }
        const xz = "webgpu" === NC;
        if (rn = (0, tC.i)(xz ? hC : null, xz && null !== (fC = null === (qC = zn) || void 0 === qC ? void 0 : qC.pagePreviews().zg) && void 0 !== fC ? fC : null, Nz, Rq), Fo) return null;
        if (XC.reserveAtJoin((0, jQ.n)(null !== dC && void 0 !== dC ? dC : PZ.d)), hC.isStopped) return null;
        const Iz = CC => {
          if (Ln = performance.now(), Un = !1, null !== jf) try {
            jf.animationFrame(CC)
          } catch (wC) {
            Yq(wC)
          }
          if (function(CC, zC) {
              return zC && !Fo && !kn && tq() && aq() && CC.framePaces(performance.now())
            }(hC, no)) {
            if (hC.writePendingInput(), (0, JC.e)(CC, Xq), hq(!1, CC), null !== jf) try {
              jf.framePaced()
            } catch (wC) {
              Yq(wC)
            }
            requestAnimationFrame(Iz)
          } else lq(hC, no, "budget") && ((0, Kz.i)(hC.lastFrameKind) && aq() && (0, JC.e)(CC, Xq), hq(no && Qo, CC), wo.frame(hC.lastFrameKind, no && aq(), CC), (0, Kz.d)(hC.lastFrameKind) && ez.G.drew(), Oq(hC), XC.afterFrame(), requestAnimationFrame(Iz))
        };
        requestAnimationFrame(Iz);
        return function(CC) {
          if (CC.has("inputLog") && (0, WQ.k)((CC => {
              let {
                action: zC,
                down: ZC,
                press: QC
              } = CC;
              console.info(`${MQ} input ${zC} ${ZC?"down":"up"} press ${QC} at ${performance.now().toFixed(1)}`)
            })), CC.has("inputDump")) {
            const CC = [];
            SQ = CC, Object.assign(window, {
              bloxdInputDump: () => CC.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), en = function(CC) {
          let zC = null;
          const ZC = () => {
              null !== zC && (clearInterval(zC), zC = null)
            },
            QC = () => {
              document.hidden ? zC ??= setInterval((() => {
                oF(CC) || ZC()
              }), jb) : ZC()
            };
          return document.addEventListener("visibilitychange", QC), QC(), () => {
            ZC(), document.removeEventListener("visibilitychange", QC)
          }
        }(hC), hC
      }(zC).then((CC => {
        var zC;
        (QC(qn), Mn(null !== CC), null !== CC && (ew = performance.now()), Wn(CC), null === CC) ? null === (zC = zn) || void 0 === zC || zC.pagePreviews().endSession(null === (0, fz.q)()): an("booted")
      }), (CC => {
        QC(qn), Mn(!1), Wn(null), Uq({
          site: db,
          error: CC,
          header: null
        }, qn)
      }))
    }

    function Po() {
      const CC = Fn;
      null !== CC && Wo().then((zC => {
        let {
          pageBuiltInAnimationPack: ZC
        } = zC;
        ZC().provide(CC)
      }), (CC => {
        console.warn(`${hb} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, CC)
      }))
    }
    const Go = new class {
      constructor(CC) {
        this.deps = CC, this.latest = 0, this.vq = null
      }
      apply(CC, zC) {
        return this.load(CC, zC, 0)
      }
      async load(CC, zC, ZC) {
        var QC;
        const wC = ++this.latest,
          bC = this.deps.compiler;
        if (void 0 === zC || null === zC || "object" !== typeof zC || 0 === Object.keys(zC).length || null === bC) return this.drop(CC), !1;
        if ((null === (QC = this.vq) || void 0 === QC ? void 0 : QC.module) === CC && (0, Oz.Td)(this.vq.files, zC)) return !1;
        try {
          const [ZC, QC] = await Promise.all([bC(), this.deps.builtIns()]);
          if (wC !== this.latest) return !1;
          const nC = await ZC(zC, zZ, {
            builtIns: QC
          });
          if (wC !== this.latest) return !1;
          const fC = this.call(CC, nC);
          if (void 0 === fC) throw new CZ("the compiled animations didn't read against the built-in pack");
          return this.vq = {
              module: CC,
              files: zC
            },
            function(CC) {
              for (let zC = 0; zC + 2 < CC.length; zC += 3) {
                ("error" === CC[zC] ? console.error : console.warn)(`Animation for the texture pack: ${CC[zC+1]}: ${CC[zC+2]}`)
              }
            }(fC), !0
        } catch (fC) {
          var nC;
          if (wC !== this.latest) return !1;
          this.drop(CC), 0 === ZC && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", fC);
          const QC = (null !== (nC = this.deps.retryAfterMs) && void 0 !== nC ? nC : Vz)[ZC];
          return void 0 === QC || fC instanceof CZ || (0, kz.j)(CC) || setTimeout((() => {
            wC === this.latest && this.load(CC, zC, ZC + 1)
          }), QC), !1
        }
      }
      call(CC, zC) {
        try {
          return CC.DZC(zC)
        } catch (ZC) {
          throw (0, kz.k)(CC, ZC), ZC
        }
      }
      clear(CC) {
        this.latest++, this.drop(CC)
      }
      drop(CC) {
        const zC = this.vq;
        if (this.vq = null, (null === zC || void 0 === zC ? void 0 : zC.module) === CC && !(0, kz.j)(CC)) try {
          this.call(CC, null)
        } catch {}
      }
    }({
      compiler: yz.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: CC
        } = await Wo();
        return CC().whenSet()
      },
      warn: Rq
    });
    async function Ro(CC, zC) {
      let QC = !1;
      await Ao({
        matchmake: async () => {
          const {
            guestJoinTarget: wC,
            guestJoinWithPack: bC
          } = await ZC.e(272).then((() => ZC(50720)));
          return QC ? wC(CC, zC, Jq()) : (QC = !0, bC(CC, zC, (zC => Iq(CC, zC)), Jq))
        },
        onFailure: CC => {
          (0, JZ.showJoinFailure)(CC, qn)
        },
        rejoin: ro,
        invalidateTrafficCode: so
      })
    }
    async function Ao(CC) {
      let {
        matchmake: zC,
        onFailure: ZC,
        rejoin: wC,
        invalidateTrafficCode: bC,
        pageReady: nC,
        signal: fC
      } = CC;
      const oC = () => !0 === (null === fC || void 0 === fC ? void 0 : fC.aborted);
      let qC;
      const FC = ww.e.rejoinHold();
      Wf = null;
      const WC = (0, KZ.U)("wasm", zF);
      let NC = !1,
        MC = performance.now();
      try {
        if (!await gn) return {
          kind: "stopped"
        };
        if (oC()) return {
          kind: "wZ"
        };
        No().catch((() => {}));
        let CC = await zC();
        var SC, pC;
        if (MC = performance.now(), !oC()) CF(null !== (SC = null === (pC = CC.target.session) || void 0 === pC ? void 0 : pC.gameNameWithVariation) && void 0 !== SC ? SC : null);
        const ZC = () => performance.now() - CC.matchedAt <= CC.freshMs,
          QC = Jo(CC.target).catch((() => {}));
        ZC() && !oC() && (qC = new sQ(CC.target, {
          signal: fC
        }));
        const bC = performance.now();
        if (null === await Nn) return {
          kind: "stopped"
        };
        var PC, GC;
        if (function(CC) {
            var zC, ZC;
            if (Jw.d.markGameEngineConstructed(), hw) return;
            hw = !0;
            const QC = Math.max(CC, null !== (zC = iw) && void 0 !== zC ? zC : CC);
            (0, Iw.j)("ready", Math.max(0, (null !== (ZC = vw) && void 0 !== ZC ? ZC : QC) - QC) / 1e3)
          }(bC), !oC())
          if (null !== vw && null !== ew ? ((0, gC.o)("wasm_loaded", vw), (0, gC.o)("wasm_core_ready", ew)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), CC.target.session && (0, Bw.b)(CC.target.session.gameNameWithVariation)) null === (PC = Gn) || void 0 === PC || PC.prestart();
        if (await QC, !ZC() && !oC()) null === (GC = qC) || void 0 === GC || GC.rematched(), CC = await zC(), MC = performance.now();
        if (oC()) return {
          kind: "wZ"
        };
        const FC = await async function(CC) {
          var zC, ZC, QC;
          let {
            signal: wC,
            rejoin: bC = null,
            early: nC,
            pageReady: fC
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== wC && void 0 !== wC && wC.aborted) throw new DOMException("the join was left", "AbortError");
          const oC = (qC = xf, FC = performance.now(), null !== qC && FC - qC < eQ);
          var qC, FC;
          xf = null;
          const WC = new AbortController,
            NC = null !== (zC = null === (ZC = CC.session) || void 0 === ZC ? void 0 : ZC.gameNameWithVariation) && void 0 !== zC ? zC : null;
          CF(NC), vo({
            controller: WC,
            game: NC
          }), Jf = null, null === (QC = ef) || void 0 === QC || QC.abort(), ef = null, Kf = !1, Yf = null, df.clear();
          const MC = () => {
            (0, xz.i)(WC, (0, xz.g)(wC))
          };
          null === wC || void 0 === wC || wC.addEventListener("abort", MC, {
            once: !0
          });
          try {
            var SC, pC, PC;
            const zC = await Nn;
            if (null === zC || zC.isStopped || Fo) throw new Error("no core is running to join a game with");
            if (CC.session && null !== rn) {
              const zC = await Io(rn.join(CC.session.gameNameWithVariation), WC.signal);
              if ((0, sw.k)("webgpuloss")) {
                const ZC = CC.session.gameNameWithVariation,
                  QC = rn.couldntRunInJoinedGame();
                (0, Tw.d)((CC => CC.noteWasmJoin(ZC, zC, QC)))
              }
              if (null !== zC) throw new tC.b(zC)
            }
            const [, , , {
              joinRoom: ZC
            }] = await Io(Promise.all([(0, IC.l)(zC), Jo(CC), null === fC || void 0 === fC ? void 0 : fC(), No()]), WC.signal), QC = CC.session, wC = QC ? {
              ...to,
              attachSocket: zC => {
                const ZC = Oo(zC, CC.endpoint);
                var wC;
                null !== ZC && (gf = {
                  conn: ZC,
                  info: QC
                }, null === (wC = Sf) || void 0 === wC || wC(QC.playerDbId));
                return ZC
              }
            } : to, qC = await ZC(wC, CC, {
              signal: WC.signal,
              early: nC
            }).catch((CC => {
              throw function(CC) {
                if (!(CC instanceof EC.d)) return CC;
                if ("roomError" === CC.stage && null !== Yf) return xo(new EC.d(CC.message, CC.stage, CC.code, Yf), CC);
                const zC = "closed" === CC.stage && null !== If ? df.get(If.conn) : void 0;
                return void 0 === zC ? CC : xo(new EC.d(CC.message, CC.stage, zC.code, null, CC.socketOpened), CC)
              }(CC)
            }));
            if (Ff !== WC) throw qC.leave(), new DOMException("the join was left", "AbortError");
            ho(qC), null === (SC = An) || void 0 === SC || SC.newGame();
            const FC = function(CC) {
              var zC, ZC;
              const {
                session: QC
              } = CC, wC = void 0 === QC ? CC.joinOptions.lobbyName : QC.lobbyName;
              return {
                endpoint: CC.endpoint,
                game: null !== (zC = null === QC || void 0 === QC ? void 0 : QC.gameNameWithVariation) && void 0 !== zC ? zC : CC.roomName,
                lobby: String(null !== wC && void 0 !== wC ? wC : null),
                postCookies: null !== (ZC = CC.postCookies) && void 0 !== ZC ? ZC : null
              }
            }(CC);
            qf.set(qC, FC), XQ(FC);
            const NC = performance.now(),
              MC = {
                conn: qC.conn,
                rejoin: bC,
                game: null !== (pC = null === (PC = CC.session) || void 0 === PC ? void 0 : PC.gameNameWithVariation) && void 0 !== pC ? pC : "",
                joinedAt: NC,
                rejoinedAt: oC ? NC : null,
                overflow: null
              };
            pf = MC,
              function(CC, zC) {
                bq();
                const ZC = {
                  endpoint: zC,
                  roomId: CC.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new gZ({
                    reconnect: (CC, zC, QC) => async function(CC, zC, ZC, QC) {
                      const {
                        roomId: wC,
                        roomToken: bC
                      } = fq(CC, zC), nC = Qn;
                      if (null === nC || nC.isStopped || Fo) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: fC
                      } = await Io(No(), ZC), oC = {
                        ...to,
                        attachSocket: zC => Pf !== CC || 0 === CC.heldConn ? (zC.close(), null) : Oo(zC, CC.endpoint, !0)
                      };
                      return fC(oC, CC.endpoint, wC, bC, {
                        signal: ZC,
                        onAttached: QC
                      })
                    }(ZC, CC, zC, QC),
                    releaseSeat: CC => {
                      !async function(CC, zC) {
                        const {
                          roomId: ZC,
                          roomToken: QC
                        } = fq(CC, zC);
                        try {
                          const {
                            leaveHeldSeat: zC
                          } = await No();
                          await zC(CC.endpoint, ZC, QC)
                        } catch (wC) {
                          console.warn(`${hb} the held seat of a game left while it reconnected couldn't be released`, wC)
                        }
                      }(ZC, CC)
                    },
                    isLive: () => Pf === ZC && null !== pf && !Fo,
                    qY: CC => {
                      Af = CC, wq()
                    },
                    onReconnected: CC => {
                      ! function(CC) {
                        const zC = of;
                        if (null !== zC && zC !== CC) {
                          const ZC = qf.get(zC);
                          void 0 !== ZC && qf.set(CC, ZC), Zo === zC && (Zo = CC), zC.detach()
                        }
                        ho(CC)
                      }(CC)
                    },
                    onGaveUp: (CC, zC) => {
                      ! function(CC, zC, ZC) {
                        var QC, wC;
                        console.warn(`${hb} gave up reconnecting (${ZC.reason}, ${ZC.attempts} attempts)`, ZC.lastError), (0, JZ.reportReconnectGaveUp)(ZC, qn);
                        const bC = null !== (QC = null === (wC = pf) || void 0 === wC ? void 0 : wC.rejoin) && void 0 !== QC ? QC : null;
                        nq(CC, "gaveUp"), Yo();
                        const nC = {
                          code: CC.dropCode,
                          name: null,
                          reason: Tb,
                          canReconnect: !zC,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        ao(nC, zC ? null : bC, !1, {
                          reasonKey: ab,
                          canPlayAgain: zC
                        })
                      }(ZC, CC, zC)
                    }
                  })
                };
                Pf = ZC, null !== Gf && Gf.conn === CC.conn && ZC.resume.onInitialInfo(Gf)
              }(qC, CC.endpoint), performance.mark(Eb), (0, gC.o)("wasm_joined", NC), setTimeout((() => {
                of === qC && (0, gC.f)()
              }), 0), Po(), console.info(`${hb} joined ${CC.roomName} as ${qC.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const GC = Jf;
            Jf = null, null !== GC && Eo(MC, GC.mask, GC.frames);
            const RC = df.get(qC.conn);
            return df.clear(), void 0 !== RC && (ho(null), To(qC.conn, RC.code, RC.reason)), qC
          } finally {
            var GC;
            null === wC || void 0 === wC || wC.removeEventListener("abort", MC), Ff === WC && eo(of, null), (null === (GC = If) || void 0 === GC ? void 0 : GC.join) === WC && (If = null)
          }
        }(CC.target, {
          signal: fC,
          rejoin: wC(CC.target),
          early: qC,
          pageReady: nC
        });
        return NC = !0, {
          kind: "joined",
          game: FC
        }
      } catch (AC) {
        if (AC instanceof DOMException && "AbortError" === AC.name || oC()) return {
          kind: "wZ"
        };
        if (Fo) return {
          kind: "stopped"
        };
        if (Kf && (Kf = !1, await bC().catch((CC => {
            console.warn(`${hb} the cached traffic code could not be dropped`, CC)
          }))), null === await Nn) return {
          kind: "stopped"
        };
        if (AC instanceof tC.b) return ZC(AC, performance.now() - MC), {
          kind: "failed",
          error: AC,
          reloading: !1
        };
        if (AC instanceof EC.d && AC.code === QC.e.wasmClientNotAllowed.code && bo) return gq("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: AC,
          reloading: !0
        };
        const CC = AC instanceof EC.d && AC.code === QC.e.outdatedVersion.code,
          zC = () => null === of,
          wC = await FF({
            site: JZ.JOIN_SITE,
            error: AC,
            outdated: CC
          }, (() => {
            ZC(AC, performance.now() - MC)
          }), {
            stillWanted: zC
          });
        return {
          kind: "failed",
          error: AC,
          reloading: wC
        }
      } finally {
        var RC;
        NC || WC.end(), ww.e.releaseHold(FC);
        const CC = null === (RC = qC) || void 0 === RC ? void 0 : RC.release();
        CC && (0, JZ.reportUnusedSeat)(CC, qn)
      }
    }

    function xo(CC, zC) {
      return CC.stack = zC.stack, CC
    }

    function Jo(CC) {
      return CC.session ? (0, IC.r)(fn, CC.session.gameNameWithVariation) : Promise.resolve()
    }

    function Io(CC, zC) {
      return (0, xz.n)(zC), new Promise(((ZC, QC) => {
        const wC = () => {
          QC((0, xz.g)(zC))
        };
        zC.addEventListener("abort", wC, {
          once: !0
        }), CC.then((CC => {
          zC.removeEventListener("abort", wC), ZC(CC)
        }), (CC => {
          zC.removeEventListener("abort", wC), QC(CC)
        }))
      }))
    }

    function io() {
      vo(null)
    }

    function vo(CC) {
      var zC, ZC, QC;
      (function() {
        const CC = Pf;
        null !== CC && nq(CC, "left")
      }(), null === pn || pn.left) || (pn.left = !0, null === (QC = (0, IC.k)()) || void 0 === QC || QC.socketLeft(), (0, NC.r)({
        websocketUrl: null
      }));
      Ff && (0, xz.i)(Ff, new DOMException("the join was left", "AbortError")), Yo(null !== CC), null === (zC = rn) || void 0 === zC || zC.leave();
      const wC = of;
      null !== CC && ww.e.setGame(CC.game), eo(null, null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.controller) && void 0 !== ZC ? ZC : null), null === wC || void 0 === wC || wC.leave(), Ko(0), (0, Pz.f)()
    }

    function eo(CC, zC) {
      of = CC, Ff = zC, null === of && null === Ff && ww.e.setGame(void 0)
    }

    function ho(CC) {
      eo(CC, Ff)
    }

    function Ko(CC) {
      const zC = Qn;
      return null !== Ub && !Fo && null !== zC && !zC.isStopped && (!!Ub(EC.i, 0, (0, EC.D)(CC)) && (zf = !0, 0 === CC || kn || lq(zC, !1, "all"), !0))
    }

    function Yo() {
      var CC, zC;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, KZ.d)();
      const ZC = null !== (CC = null === (zC = pf) || void 0 === zC ? void 0 : zC.overflow) && void 0 !== CC ? CC : null;
      pf = null, null !== ZC && (0, JZ.reportEventOverflow)(ZC, qn)
    }

    function mo() {
      null !== of || null !== Ff ? io() : ko()
    }

    function Ho(CC, zC) {
      console.warn(`${hb} the event buffer refused records in ${zC} frames (categories ${CC})`), Fo || (null !== pf ? Eo(pf, CC, zC) : null !== Ff && function(CC, zC, ZC) {
        var QC;
        const wC = function(CC, zC) {
          return null === CC ? "drop" : CC.activated ? "keep" : 0 !== (zC & az.C.NetSession) ? "fail" : "drop"
        }((null === (QC = If) || void 0 === QC ? void 0 : QC.join) === CC ? If : null, zC);
        "keep" === wC ? Jf = {
          mask: zC,
          frames: ZC
        } : "fail" === wC && (0, xz.i)(CC, new Error("the join's net session was lost to an event overflow"))
      }(Ff, CC, zC))
    }

    function Eo(CC, zC, ZC) {
      const QC = CC.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      QC.frames += ZC, QC.acks++, QC.mask |= zC;
      const wC = function(CC, zC, ZC) {
        if (0 === (CC & az.C.NetSession)) return "none";
        const QC = null !== zC.rejoinedAt && ZC - zC.rejoinedAt < hQ;
        return null === zC.rejoin || QC ? "fail" : "rejoin"
      }(zC, CC, performance.now());
      "none" !== wC && queueMicrotask((() => {
        if (pf !== CC) return;
        const zC = "rejoin" === wC && performance.now() - vf >= HC.e;
        QC.outcome = zC ? "rejoined" : "failed", ao(function(CC, zC) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: CC,
            automaticallyReconnect: zC,
            requiresRefresh: !1
          }
        }(null !== CC.rejoin, zC), CC.rejoin, zC), io(), zC && (xf = performance.now())
      }))
    }

    function Xo() {
      bo && function(CC, zC) {
        let {
          mesh: ZC,
          worldgen: QC,
          modelPool: wC
        } = CC;
        "landingPage" === zC ? (null === ZC || void 0 === ZC || ZC.stopWorkers(), null === QC || void 0 === QC || QC.stopWorker(), null === wC || void 0 === wC || wC.stopWorkers()) : ((0, jC.f)(zC) || "inGame" === zC) && (null === ZC || void 0 === ZC || ZC.restartWorkers(), null === wC || void 0 === wC || wC.startWorkers())
      }({
        mesh: An,
        worldgen: Gn,
        modelPool: dn
      }, jC.b.get("gameState"))
    }

    function co(CC) {
      no = CC, fo && uo(fo, CC)
    }

    function uo(CC, zC) {
      CC.style.visibility = zC ? "visible" : "hidden"
    }

    function ro(CC) {
      var zC;
      const ZC = CC.roomName,
        QC = null !== (zC = CC.joinOptions.lobbyName) && void 0 !== zC ? zC : null;
      return () => {
        Ro(ZC, QC)
      }
    }

    function so() {
      return ZC.e(272).then((() => ZC(50720))).then((CC => {
        let {
          invalidateGuestTrafficCode: zC
        } = CC;
        return zC()
      })).catch((CC => {
        console.warn(`${hb} the cached traffic code could not be dropped`, CC)
      }))
    }

    function To(CC, zC, ZC) {
      var wC, bC;
      let nC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Fo) return;
      if ((null === (wC = pf) || void 0 === wC ? void 0 : wC.conn) !== CC) return void(null !== Ff && df.set(CC, {
        code: zC,
        reason: ZC
      }));
      const {
        rejoin: fC,
        game: oC,
        joinedAt: qC
      } = pf;
      Yo(), bq();
      const FC = (0, HC.j)(zC, (0, YQ.h)(CC));
      if (console.info(`${hb} the game's connection closed with code ${zC} (${null!==(bC=FC.name)&&void 0!==bC?bC:"unrecognised"})`), zC === QC.e.gameOrPluginKick.code || nC || (0, JZ.reportDisconnect)(FC, qn, {
          closeReason: ZC,
          sinceJoinedMs: performance.now() - qC,
          game: oC
        }), FC.requiresRefresh) {
        const CC = "outdatedVersion" === FC.name,
          ZC = new Error(`the game's connection closed with code ${zC}`),
          QC = () => null === pf && null === Ff;
        return void FF({
          site: JZ.JOIN_SITE,
          error: ZC,
          outdated: CC
        }, (() => {
          QC() && ao(FC, null, !1)
        }), {
          stillWanted: QC
        })
      }
      const WC = FC.canReconnect ? fC : null,
        NC = null !== WC && FC.automaticallyReconnect && performance.now() - vf >= HC.e;
      ao(FC, WC, NC)
    }

    function ao(CC, zC, ZC) {
      var QC;
      let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (oo) return;
      ww.e.unwantedLeave(ZC && null !== zC && 0 === hf.size), null === (QC = ef) || void 0 === QC || QC.abort();
      const bC = new AbortController;
      ef = bC;
      const nC = null === zC ? null : () => {
        bC.signal.aborted || (bC.abort(), zC())
      };
      if (ZC && null !== nC) {
        vf = performance.now();
        const CC = setTimeout(nC, HC.d);
        bC.signal.addEventListener("abort", (() => {
          clearTimeout(CC)
        }))
      }
      const fC = {
        code: CC.code,
        name: CC.name,
        reason: CC.reason,
        reasonKey: wC.reasonKey,
        reconnect: nC,
        reconnecting: ZC,
        requiresRefresh: CC.requiresRefresh,
        canPlayAgain: wC.canPlayAgain
      };
      if (hf.size > 0)
        for (const qC of [...hf]) try {
          qC(fC)
        } catch (oC) {
          console.error(`${hb} an unwanted-leave listener threw`, oC)
        } else iQ((0, xQ.g)(CC, null !== nC, ZC), bC.signal).then((zC => {
          zC && (null !== nC ? nC() : CC.requiresRefresh && (0, DC.j)())
        }))
    }
    const to = {
      attachSocket: CC => Oo(CC),
      onConnection: CC => (mf.add(CC), () => {
        mf.delete(CC)
      }),
      sendRaw: (CC, zC) => {
        const ZC = pn;
        return null !== ZC && ZC.conn === CC && yq(ZC, zC)
      },
      leaveRoom: Ko,
      closeSocket: CC => {
        var zC;
        (null === (zC = pn) || void 0 === zC ? void 0 : zC.conn) === CC && ko()
      },
      flushNet: Vo
    };

    function Do(CC) {
      var zC;
      let {
        aux: ZC,
        payload: QC
      } = CC;
      null === (zC = Qn) || void 0 === zC || zC.queueOptions(ZC, QC)
    }

    function jo(CC, zC) {
      Do(function(CC, zC) {
        return Pw = CC ? {
          preventMovement: zC
        } : null, CC ? Gw(zC) : {
          aux: Tz.dc.AdEnd,
          payload: pw
        }
      }(CC, zC))
    }

    function yo(CC) {
      var zC;
      bf = CC, null === (zC = Qn) || void 0 === zC || zC.setUiPrefs(CC)
    }

    function Lo(CC, zC) {
      fn.setMaster(CC, zC)
    }

    function Uo(CC) {
      var zC;
      nf = CC, null === (zC = Qn) || void 0 === zC || zC.setEnvPrefs(CC)
    }

    function Bo(CC) {
      var zC;
      ff = CC, null === (zC = Qn) || void 0 === zC || zC.setLookPrefs(CC)
    }

    function Oo(CC) {
      var zC;
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(CC.url).origin,
        QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (CC.readyState === WebSocket.CLOSING || CC.readyState === WebSocket.CLOSED) return console.warn(`${hb} a closing or closed socket can't be attached`), null;
      const wC = Qn;
      if (!wC || wC.isStopped) return console.warn(`${hb} no core is running to attach a socket to`), CC.close(), null;
      if (null === (0, IC.k)()) return console.warn(`${hb} the game has not started to attach a socket to`), CC.close(), null;
      if (Dn > Tz.B) return console.warn(`${hb} this core has attached all the sockets it can; reload to play on`), CC.close(), null;
      if (zf && !kn && (lq(wC, !1, "all"), wC.isStopped || Fo)) return CC.close(), null;
      ko();
      const bC = Dn++;
      if (!Wq(wC, "open", bC, QC ? Tz.ac.Resume : 0)) return CC.close(), null;
      QC || pz.e.reset(), If = null === Ff ? null : {
        join: Ff,
        conn: bC,
        activated: !1
      }, CC.binaryType = "arraybuffer";
      const nC = new SZ.d((() => {
          ! function(CC, zC) {
            if (pn !== zC || CC.isStopped || null === Zq(zC, rb)) return;
            zC.detach(), pn = null, zq(CC, zC, rb, "", !0), zC.ws.close()
          }(wC, fC)
        })),
        fC = {
          ws: CC,
          conn: bC,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: QC,
          token: null,
          detach: () => {
            nC.dispose(), CC.removeEventListener("message", oC), CC.removeEventListener("open", qC), CC.removeEventListener("close", FC)
          }
        },
        oC = CC => {
          if (CC.data instanceof ArrayBuffer) {
            var zC;
            const ZC = new Uint8Array(CC.data);
            nC.heard(), fC.token = null !== (zC = (0, pZ.e)(ZC)) && void 0 !== zC ? zC : fC.token,
              function(CC, zC, ZC) {
                QF(CC, (() => {
                  CC.rings.net.writeFrame(zC, ZC) || CC.crash(QZ.q, `a socket frame of ${ZC.byteLength} bytes did not fit the net-in ring`)
                }));
                const QC = CC.rings.net.cursor >= ub;
                !fF() && (QC || CC.netWrittenSinceFrame >= cb) && lq(CC, !1, document.hidden ? "all" : "budget");
                qF(CC)
              }(wC, bC, ZC)
          }
        },
        qC = () => {
          QC || (0, gC.o)("wasm_socket_open", performance.now());
          for (const zC of fC.pending.splice(0)) CC.send(zC);
          fC.pendingBytes = 0
        },
        FC = CC => {
          if (pn === fC && wC.rings.net.cursor > 0 && lq(wC, !1, "all"), pn === fC) {
            if (fC.detach(), pn = null, zq(wC, fC, CC.code, CC.reason) || Cq(wC, fC)) return;
            Wq(wC, "close", bC), Qq(bC, fC.left), To(bC, CC.code, CC.reason)
          }
        };
      return CC.addEventListener("message", oC), CC.addEventListener("open", qC), CC.addEventListener("close", FC), pn = fC, null === (zC = (0, IC.k)()) || void 0 === zC || zC.socketAttached(bC), (0, NC.r)({
        websocketUrl: ZC
      }), bC
    }

    function ko() {
      const CC = pn;
      if (!CC) return;
      const zC = Qn,
        ZC = CC.resume;
      ZC && (Vo(), pn !== CC) || (pn = null, CC.detach(), CC.ws.close(), null !== zC && (Cq(zC, CC) || ZC && zq(zC, CC, sb)) || (null !== zC && Wq(zC, "close", CC.conn), Qq(CC.conn, CC.left)))
    }

    function Vo() {
      const CC = Qn;
      null !== CC && !CC.isStopped && !Fo && !kn && CC.rings.net.cursor > 0 && lq(CC, !1, "all")
    }

    function Cq(CC, zC) {
      var ZC;
      if (!zC.resume) return !1;
      const QC = Pf;
      return null !== QC && null !== zC.token && "" !== zC.token && (QC.pendingHold = {
        conn: zC.conn,
        token: `${QC.roomId}:${zC.token}`
      }), Wq(CC, "close", zC.conn), null === (ZC = (0, IC.k)()) || void 0 === ZC || ZC.socketDetached(zC.conn), !0
    }

    function zq(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const bC = Zq(zC, ZC);
      if (null === bC) return !1;
      const {
        vq: nC,
        token: fC,
        game: oC,
        joinedAt: qC
      } = bC;
      if (!Wq(CC, "close", zC.conn, Tz.G.Held)) return !0;
      console.warn(`${hb} the game's connection ${wC?"went silent":`dropped with code ${ZC}`}, holding it`);
      const FC = {
        closeReason: QC,
        sinceJoinedMs: performance.now() - qC,
        game: oC
      };
      return (0, JZ.reportDisconnect)((0, HC.j)(ZC), qn, FC, wC ? "silent" : void 0), nC.heldConn = zC.conn, nC.dropCode = ZC, nC.pendingHold = {
        conn: zC.conn,
        token: `${nC.roomId}:${fC}`
      }, kn || lq(CC, !1, "all"), !0
    }

    function Zq(CC, zC) {
      const ZC = Pf,
        wC = pf,
        bC = CC.token;
      return null === ZC || null === wC || Fo || CC.left || wC.conn !== CC.conn || null === bC || "" === bC ? null : (0, QC.h)(zC) && ZC.resume.canHoldSeat() ? {
        vq: ZC,
        token: bC,
        game: wC.game,
        joinedAt: wC.joinedAt
      } : null
    }

    function Qq(CC, zC) {
      var ZC;
      null === (ZC = (0, IC.k)()) || void 0 === ZC || ZC.closeGame(CC), (0, Sw.d)().close(CC), zC || (0, NC.r)({
        websocketUrl: null
      })
    }

    function wq() {
      const CC = Af;
      if (null === CC) return;
      const zC = (0, IC.k)();
      Fo || null === zC || zC.qY(CC) ? Af = null : performance.now() - Zf.pause >= Db && (Zf.pause = performance.now(), console.warn(`${hb} the cmd ring had no room for SetPaused(${CC}): written before the next frame`))
    }

    function bq() {
      const CC = Pf;
      Pf = null, null === CC || void 0 === CC || CC.resume.dispose()
    }

    function nq(CC, zC) {
      var ZC, QC;
      const {
        heldConn: wC
      } = CC, bC = CC.resume.resumingConn;
      CC.heldConn = 0, CC.pendingHold = null, Pf === CC && (Pf = null), "left" === zC ? CC.resume.leave() : CC.resume.dispose(), 0 === Rf || (null === (ZC = pn) || void 0 === ZC ? void 0 : ZC.conn) !== Rf || "left" === zC && (null === (QC = of) || void 0 === QC ? void 0 : QC.conn) === Rf || Fq(Rf), "gaveUp" === zC && 0 !== bC && Fq(bC), 0 !== wC && "refused" !== zC && (console.info(`${hb} the game held through its drop ${"left"===zC?"was left":"is given up"}`), null === Qn || Qn.isStopped || Wq(Qn, "close", wC), Qq(wC, !1))
    }

    function fq(CC, zC) {
      const ZC = zC.indexOf(":");
      return {
        roomId: ZC < 0 ? CC.roomId : zC.slice(0, ZC),
        roomToken: zC.slice(ZC + 1)
      }
    }

    function oq(CC) {
      (0, wZ.logClientMeasurement)("join_preload", CC, {
        client: "wasm"
      })
    }

    function qq(CC) {
      var zC;
      Gf = CC, CC.conn === Rf && (Rf = 0);
      const ZC = Pf;
      null !== ZC && (null === (zC = pf) || void 0 === zC ? void 0 : zC.conn) === CC.conn && ZC.resume.onInitialInfo(CC)
    }

    function Fq(CC) {
      var zC;
      const ZC = pn;
      (null === ZC || void 0 === ZC ? void 0 : ZC.conn) === CC && (ZC.left = !0, null === (zC = (0, IC.k)()) || void 0 === zC || zC.socketLeft(), (0, NC.r)({
        websocketUrl: null
      }), Ko(CC) ? setTimeout((() => {
        pn === ZC && ko()
      }), EC.g) : ko())
    }

    function Wq(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        wC = !1;
      return QF(CC, (() => {
        const {
          net: bC
        } = CC.rings;
        wC = "open" === zC ? bC.writeOpen(ZC, QC) : bC.writeClose(ZC, QC), wC || CC.crash(QZ.q, `a socket ${zC} did not fit the net-in ring`)
      })), wC
    }

    function Nq(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (Mq()) {
        const QC = "browser" === CC && (0, Mw.V)() ? "blockedAfterLoss" : "unsupported";
        return (0, JZ.reportUnsupportedFallback)(CC, QC, zC, ZC), void gq(`the wasm client can't run here (${zC}; ${QC})`, QC)
      }(0, JZ.showUnsupported)(CC, "unsupported", zC, ZC)
    }

    function Mq() {
      return bo && "wasm" !== (0, Mz.h)(window.location.search)
    }

    function gq(CC, zC) {
      console.warn(`${hb} ${CC}: reloading on the JS client`), null !== zC && (0, Mz.x)(zC), (0, Mz.w)(null === zC ? "reloadOntoJs" : "decline");
      const ZC = () => {
        (0, DC.h)(Mz.C)
      };
      (0, JZ.flushCrashReports)(DC.b).then(ZC, ZC)
    }

    function Sq(CC, zC, ZC, QC) {
      return Xf(CC, zC, ZC, QC)
    }

    function pq() {
      null === sf || null === Qn || Qn.isStopped || Fo || null !== Hn || null === Ub || (Hn = sf(Ub, Rq, Aq().follow))
    }

    function Pq() {
      var CC, zC, ZC;
      return null !== (CC = null === (zC = bn) || void 0 === zC || null === (ZC = zC.textures) || void 0 === ZC ? void 0 : ZC.files()) && void 0 !== CC ? CC : null
    }

    function Gq(CC) {
      Aq().follow((zC => {
        null !== zC && Promise.all([Promise.all([ZC.e(201), ZC.e(45)]).then((() => ZC(50750))), (0, Mw.P)()]).then((CC => {
          let [{
            followPagePackFiles: ZC
          }, QC] = CC;
          const wC = null === QC || (0, ZZ.q)(QC) ? "webgl" : QC.backend;
          ZC(zC, Qw.g, wC, (CC => {
            Qw.g.setPageFiles(CC)
          }), Rq)
        }), (zC => {
          console.warn(`${hb} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, zC), CC()
        }))
      }))
    }

    function Rq(CC, zC) {
      console.warn(`${hb} ${CC}`, zC)
    }

    function Aq() {
      return wn ??= new dw({
        load: CC => Promise.all([ZC.e(201), ZC.e(54)]).then((() => ZC(50754))).then((zC => {
          let {
            startPageTexturePackFeed: ZC
          } = zC;
          return ZC(Rq, CC)
        })),
        store: mZ.g,
        Cg: CC => {
          Nn.then((() => {
            (0, JZ.reportTexturePackFeedLoadFailure)(CC, qn)
          }))
        }
      }), wn
    }
    const xq = CC => Aq().follow(CC);

    function Jq() {
      return Aq().loaded()
    }
    const Iq = function(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          wC = 0;
        return async function(bC, nC) {
          let fC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const oC = ++wC,
            qC = QC() + zC,
            FC = await
          function(CC, zC) {
            let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((QC => {
              const wC = setTimeout((() => {
                QC(null), CC.then((CC => {
                  null !== CC && (CC.joinedWithout(), ZC(CC))
                }))
              }), zC);
              CC.then((CC => {
                clearTimeout(wC), QC(CC)
              }))
            }))
          }(CC(bC), zC, (CC => {
            oC === wC && fC() && nC(CC, QC() + zC).catch((CC => {
              ZC("the texture pack step after the join failed", CC)
            }))
          }));
          return null === FC ? null : nC(FC, qC)
        }
      }((CC => (0, Qz.i)(CC) ? Aq().request() : Aq().forJoin()), Yw.b, Rq),
      iq = function(CC, zC) {
        let ZC = !1;
        return {
          setGamePackConfirm: CC => {
            ZC = null !== CC, zC(CC)
          },
          packStep: (zC, QC, wC) => CC(zC, QC, (() => ZC && wC()))
        }
      }(Iq, (CC => {
        Aq().setGamePackConfirm(CC)
      }));

    function vq(CC) {
      iq.setGamePackConfirm(CC)
    }

    function eq() {
      if (Fo || null !== jf || null === Tf || null === Df) return;
      const {
        backend: CC,
        canvas: zC,
        fallbackReason: ZC,
        adapterVendor: QC
      } = Df, wC = Tf;
      Tf = null;
      try {
        jf = wC({
          backend: CC,
          canvas: zC,
          fallbackReason: ZC,
          adapterVendor: QC,
          joinedGame: () => Fo ? null : of,
          inGame: Kq,
          shaderPackReach: () => {
            var CC, zC;
            return null !== (CC = null === (zC = rn) || void 0 === zC ? void 0 : zC.reachInJoinedGame()) && void 0 !== CC ? CC : null
          },
          lS: () => En,
          msaa: () => tf > 1,
          writeCmd: (CC, zC, ZC) => null !== Ub && Ub(CC, zC, ZC),
          takeFailedMeshJobs: () => {
            var CC, zC;
            return null !== (CC = null === (zC = An) || void 0 === zC ? void 0 : zC.takeFailedMeshJobs()) && void 0 !== CC ? CC : 0
          },
          readLoadCounts: CC => {
            var zC, ZC;
            return null !== (zC = null === (ZC = Qn) || void 0 === ZC ? void 0 : ZC.readLoadCounts(CC)) && void 0 !== zC && zC
          },
          mainStalled: (CC, zC, ZC) => {
            (0, JZ.reportMainStall)(CC, zC, ZC, qn)
          }
        })
      } catch (bC) {
        console.error(`${hb} the frame telemetry didn't start`, bC)
      }
    }

    function hq(CC, zC) {
      try {
        var ZC, QC, wC;
        const bC = Hf && null !== (ZC = null === (QC = Qn) || void 0 === QC || null === (wC = QC.lastHeader) || void 0 === wC ? void 0 : wC.renderPending) && void 0 !== ZC ? ZC : 0;
        (0, ZQ.d)(zC, CC, Kq() && !(null !== Pw), bC)
      } catch (bC) {
        (0, ZQ.u)(), console.error(`${hb} the quality steps stopped`, bC)
      }
    }

    function Kq() {
      return null !== of && Zo === of && !Fo
    }

    function Yq(CC) {
      const zC = jf;
      jf = null;
      try {
        null === zC || void 0 === zC || zC.stop()
      } catch {}
      console.error(`${hb} the frame telemetry threw: it stops`, CC)
    }

    function dq(CC) {
      var zC, ZC, QC, wC;
      if ((0, Sw.d)().fire(CC), "message" === CC.type) {
        if (Vn++, CC.cq === Tz.Kc.ERROR && null !== Ff) {
          var bC;
          const {
            text: zC,
            dropsCache: ZC
          } = (0, HC.o)((new TextDecoder).decode(CC.payload));
          Kf ||= ZC, (null === (bC = If) || void 0 === bC ? void 0 : bC.conn) === CC.conn && (Yf = zC)
        } else if (CC.cq === az.Bc.ResumeComplete) {
          var nC;
          null === (nC = Pf) || void 0 === nC || nC.resume.onResumeComplete(CC.conn)
        }
        return
      }
      CC.phase === Tz.J.Left ? Cf = CC.conn : CC.phase === Tz.J.Activated && (null === (zC = If) || void 0 === zC ? void 0 : zC.conn) === CC.conn ? If.activated = !0 : CC.phase === Tz.J.Resumed ? function(CC) {
        var zC, ZC;
        Rf = CC;
        const QC = Pf;
        if (null === QC || 0 === QC.heldConn || (null === (zC = pn) || void 0 === zC ? void 0 : zC.conn) !== CC || !pn.resume || null === pf) return;
        console.info(`${hb} the game resumed on conn ${CC}, waiting for its InitialInfo`);
        const wC = QC.heldConn;
        QC.heldConn = 0, pn.resume = !1, pf.conn = CC, (null === (ZC = gf) || void 0 === ZC ? void 0 : ZC.conn) === wC && (gf = {
          conn: CC,
          info: gf.info
        }), pz.e.apply({
          shopInfo: null,
          _shopVersion: wz.c
        })
      }(CC.conn) : CC.phase === Tz.J.Held ? function(CC) {
        var zC;
        const ZC = Pf,
          QC = null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.pendingHold) && void 0 !== zC ? zC : null;
        if (null !== ZC && null !== QC && QC.conn === CC) return ZC.pendingHold = null, ZC.heldConn = CC, Rf = 0, console.warn(`${hb} the core holds the game, reconnecting`), void ZC.resume.onDropped(QC.token);
        if (CC === Rf) {
          Rf = 0;
          const zC = Qn;
          null === zC || zC.isStopped || (console.info(`${hb} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Wq(zC, "close", CC))
        }
      }(CC.conn) : CC.phase === Tz.J.Closed && (null === (ZC = Pf) || void 0 === ZC || null === (QC = ZC.pendingHold) || void 0 === QC ? void 0 : QC.conn) === CC.conn && (Pf.heldConn === CC.conn ? function(CC) {
        const zC = CC.heldConn,
          ZC = CC.dropCode;
        nq(CC, "refused"), console.info(`${hb} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          Qq(zC, !1), To(zC, ZC, "", !0)
        }))
      }(Pf) : Pf.pendingHold = null);
      const fC = Object.keys(Tz.J).find((zC => Tz.J[zC] === CC.phase)),
        oC = 0 === CC.code ? "" : ` (code ${CC.code})`;
      console.info(`${hb} conn ${CC.conn}: ${null!==fC&&void 0!==fC?fC:CC.phase}${oC}, ${Vn} raw messages so far`), (null === (wC = of) || void 0 === wC ? void 0 : wC.conn) !== CC.conn || CC.phase !== Tz.J.Left && CC.phase !== Tz.J.Closed || ho(null), Mf !== CC.conn || CC.phase !== Tz.J.Left && CC.phase !== Tz.J.Closed || (Mf = null, null === of && null === Ff && ww.e.setGame(void 0));
      for (const FC of [...mf]) try {
        FC(CC.conn, CC.phase, CC.code)
      } catch (qC) {
        (0, tz.k)(qC, `${hb} a connection listener threw`)
      }
    }

    function mq() {
      (0, Mw.o)(), queueMicrotask((() => {
        try {
          Lq()
        } catch (CC) {
          console.warn(`${hb} stopping before the reload threw`, CC)
        }(0, JZ.flushCrashReports)(DC.b).then(DC.j, DC.j)
      }))
    }

    function Hq() {
      const CC = Qn;
      null === CC || CC.isStopped || null === pn || kn || !CC.hasPendingCommands() || lq(CC, !1, "budget")
    }

    function Eq(CC) {
      var zC;
      const ZC = of;
      CC.persisted || null === ZC || (null === (zC = pn) || void 0 === zC ? void 0 : zC.conn) !== ZC.conn || pn.left || ZC.leave()
    }

    function lq(CC, zC, QC) {
      let wC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const bC = kn;
      kn = !0;
      try {
        const bC = CC.rings.net.cursor >= ub;
        bC && "all" !== QC && !document.hidden && Bq("backlog", `a shown tab's net-in is ${CC.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(CC, zC, QC, wC) {
          var bC, nC, fC, oC;
          if (Fo) return !1;
          if (QF(CC, cq), Fo || CC.isStopped) return !1;
          Dq() && an("modelsIn");
          wq(), jn = performance.now(), Cf = null, zf = !1, (0, JC.G)(), null === (bC = hn) || void 0 === bC || bC.beforeFrame(), pQ(jn, CC), (0, JC.A)(jn, uq), On = !0;
          const qC = zC && tq();
          let FC;
          try {
            FC = CC.frame(jn, qC, QC)
          } finally {
            On = !1
          }
          if (!FC) return !1;
          af.observe(null !== (nC = null === (fC = CC.lastHeader) || void 0 === fC ? void 0 : fC.chunksCancelled) && void 0 !== nC ? nC : 0);
          const WC = CC.lastFrameKind,
            NC = (0, Kz.d)(WC);
          (function(CC) {
            null !== Lw && Lw.afterFrame(performance.now(), CC)
          })(NC), null === (oC = yf) || void 0 === oC || oC.frame(CC, jn, WC), zC && (Qo = NC);
          NC && (0, vz.b)(jn);
          if (null !== jf) try {
            jf.frameRan(CC, jn, performance.now(), WC)
          } catch (SC) {
            Yq(SC)
          }
          "drawn" === WC && aq() && function() {
            for (const CC of [...Ww]) CC()
          }();
          CC.forEachNetOut(jq);
          const MC = pn;
          null !== Cf && (null === MC || void 0 === MC ? void 0 : MC.conn) === Cf && yq(MC, EC.m);
          Tq(CC),
            function(CC) {
              const zC = 0 !== (CC.headerWord(az.O.LoadSteps) & az.ab.JoinPreload);
              zC !== Nf && (Nf = zC, (0, JZ.setCrashAdPreload)(zC), (0, KZ.L)())
            }(CC), zC && function(CC) {
              var zC, QC, wC;
              if (null === of || !tq()) return;
              const bC = CC.headerWord(az.O.LoadSteps);
              null === zo || Zo === of && !zo.frame(jn, 0 !== (bC & az.eb.TerrainDrawn)) || (zo = null);
              if (0 === (bC & az.ab.PlayerBound)) return;
              const nC = CC.lastHeader,
                fC = !Hf || 0 === (null === nC || void 0 === nC ? void 0 : nC.renderPending);
              !Of && fC && (Of = !0, performance.mark(Xb));
              if (Zo === of) return;
              const oC = null !== (zC = null === nC || void 0 === nC ? void 0 : nC.firstView) && void 0 !== zC ? zC : Tz.db.NotYet;
              if (Hf && oC === Tz.db.NotYet) return;
              if (Bf && (!0 !== (null === (QC = (0, IC.k)()) || void 0 === QC ? void 0 : QC.isSessionLive) || !fC)) return;
              Zo = of;
              const qC = of;
              if (setTimeout((() => {
                  of === qC && (0, gC.h)()
                }), 0), null === (wC = rn) || void 0 === wC || wC.playable(), function() {
                  clearTimeout(Sn), Sn = setTimeout((() => {
                    Kq() && nF((CC => {
                      let {
                        prefetchWorldgenWorker: zC
                      } = CC;
                      zC()
                    }))
                  }), Lb)
                }(), Bf) return;
              Bf = !0, performance.mark(lb), (0, sw.k)("render") && Promise.all([ZC.e(77), ZC.e(48)]).then((() => ZC(4621))).then((CC => {
                let {
                  renderDebugPlayable: zC
                } = CC;
                zC()
              }), (CC => {
                console.warn("The render debug topic didn't load", CC)
              }));
              const FC = Math.round(performance.now()),
                WC = CC.readViewQueuedPrograms();
              null !== WC && (0, gC.o)("wasm_view_links", FC, (0, nz.ub)(WC));
              if (Hf && oC !== Tz.db.Drawn) {
                const zC = oC === Tz.db.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: ZC
                  } = rq(CC);
                if (console.warn(`${hb} playable at ${FC} ms on the first view's ${zC} backstop, ${ZC}: it wasn't drawn whole in time`), (0, gC.o)("wasm_view_backstop", FC, `${zC}:${ZC}`), "long" === zC) {
                  var NC, MC;
                  const zC = null !== (NC = null === (MC = pf) || void 0 === MC ? void 0 : MC.game) && void 0 !== NC ? NC : "";
                  zo = new HZ.c((() => {
                    const {
                      cause: ZC,
                      census: QC
                    } = rq(CC);
                    (0, JZ.reportFirstViewNoTerrain)(zC, ZC, QC, qn), (0, Nz.v)("noTerrain")
                  }))
                }
              } else console.info(`${hb} playable at ${FC} ms${Hf?"":" (no renderer)"}`);
              setTimeout(rf, 0), (0, Gz.i)().catch((CC => {
                console.error(`${hb} item sprites didn't load, so item particles show the missing texture`, CC)
              })), UQ.c.warm()
            }(CC);
          (0, QZ.K)(CC, {
            worldgen: Gn,
            mesh: An
          }),
          function(CC) {
            CC.forEachEvent(GQ);
            for (const zC of PQ) try {
              (0, WQ.e)(zC)
            } catch (SC) {
              if ((0, tz.e)(SC)) {
                CC.crashOn(QZ.h, SC);
                break
              }
              console.error(`${MQ} an input action listener threw`, SC)
            }
            PQ.length = 0
          }(CC), wC && (0, hz.c)();
          return !CC.isStopped
        }(CC, zC, "all" === QC || bC, wC)
      } finally {
        kn = bC, bC || (yn = performance.now())
      }
    }

    function Xq(CC) {
      console.error(`${hb} a frame-start listener threw`, CC)
    }

    function cq() {
      var CC, zC, ZC, QC;
      null === (CC = Yn) || void 0 === CC || CC.drain(Ub, Bb), null === (zC = Xn) || void 0 === zC || zC.drain(Ub), null === (ZC = cn) || void 0 === ZC || ZC.drain(performance.now()), uf(Ub), null === (QC = Hn) || void 0 === QC || QC.drain()
    }

    function uq(CC) {
      console.error(`${hb} a before-frame listener threw`, CC)
    }

    function rq(CC) {
      const zC = (0, IC.k)(),
        ZC = (0, IC.u)(),
        QC = null === zC || null === ZC ? null : ZC.readDrawCensus(zC.api);
      return {
        cause: (0, HZ.h)(CC.headerWord(az.O.LoadSteps), QC),
        census: QC
      }
    }
    const sq = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Tq(CC) {
      var zC;
      if (Bf) return;
      if (null === Vf && tq() && (Vf = performance.now()), null === Ff && null === of) return;
      null === Vf || Co || (Co = !0, (0, gC.o)("wasm_startup_loaded", Vf));
      let ZC = 0;
      null !== of ? ZC = -1 : !0 === (null === (zC = If) || void 0 === zC ? void 0 : zC.activated) && (ZC = ~az.eb.TerrainDrawn);
      const QC = CC.headerWord(az.O.LoadSteps) & ZC & ~kf;
      if (0 === QC) return;
      kf |= QC;
      const wC = performance.now();
      for (const [bC, nC] of Object.entries(sq)) 0 !== (QC & az.eb[bC]) && (0, gC.o)(nC, wC)
    }

    function aq() {
      return Hf && tq()
    }

    function tq() {
      return un && Dq()
    }

    function Dq() {
      return null === Yn || Yn.startupDone
    }

    function jq(CC, zC) {
      const ZC = pn;
      (null === ZC || void 0 === ZC ? void 0 : ZC.conn) === CC ? yq(ZC, zC) : wf++
    }

    function yq(CC, zC) {
      const {
        ws: ZC
      } = CC;
      return ZC.readyState === WebSocket.OPEN ? (ZC.send(zC), !0) : ZC.readyState === WebSocket.CONNECTING && CC.pendingBytes + zC.byteLength <= tb ? (CC.pending.push(zC.slice()), CC.pendingBytes += zC.byteLength, !0) : (wf++, !1)
    }

    function Lq() {
      var CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC;
      Fo = !0, wo.stop(), (0, aw.e)(), Lw = null, bq(), (0, JC.E)().unlockPointer(), (0, JC.B)(null), null === (CC = Kn) || void 0 === CC || CC(), Kn = null, null === (zC = (0, IC.u)()) || void 0 === zC || zC.followCursorAim(null), (0, hz.G)(), (0, IC.g)(), fn.stop(), null === (ZC = Lf) || void 0 === ZC || ZC(), Lf = null, null === (QC = Uf) || void 0 === QC || QC(), Uf = null, null === (wC = jf) || void 0 === wC || wC.stop(), jf = null, (0, lZ.n)(null), null === (bC = Pn) || void 0 === bC || bC(), Pn = null, null === (nC = Gn) || void 0 === nC || nC.stop(), Gn = null, null === (fC = An) || void 0 === fC || fC.stop(), An = null, null !== (oC = bn) && void 0 !== oC && null !== (qC = oC.textures) && void 0 !== qC && qC.assets && (0, zw.m)(null), null === (FC = bn) || void 0 === FC || FC.stop(), bn = null, nn = null;
      const PC = xn;
      xn = null, PC && (PC.stop(), ZF(PC)), null === (WC = Xn) || void 0 === WC || WC.dispose(), Xn = null, null === (NC = cn) || void 0 === NC || NC.dispose(), cn = null, Yn = null, null === (MC = mn) || void 0 === MC || MC(), mn = null, null === (gC = en) || void 0 === gC || gC(), en = null, null !== Bn && (clearTimeout(Bn), Bn = null), null === (SC = hn) || void 0 === SC || SC.stop(), hn = null, io(), ww.e.release(), ko();
      const GC = Hn;
      Hn = null;
      try {
        null === GC || void 0 === GC || GC.dispose()
      } catch (RC) {
        console.warn(`${hb} the sky's images didn't release`, RC)
      }(0, BQ.i)(null), null === (pC = zn) || void 0 === pC || pC.pagePreviews().endSession(null === (0, fz.q)())
    }

    function Uq(CC, zC) {
      var ZC, QC;
      const wC = null !== (ZC = null === (QC = xn) || void 0 === QC ? void 0 : QC.details()) && void 0 !== ZC ? ZC : {},
        bC = CC.site === Yb || CC.site === db || CC.site === JZ.RENDER_RELOAD_SITE || CC.site === mb ? CC.error instanceof WebAssembly.RuntimeError || CC.error instanceof kz.e : !(0, ZZ.t)(CC.error) && (0, QZ.E)(CC);
      bC && CC.error instanceof Error && (0, fz.R)(CC.error);
      const nC = bC || CC.site === QZ.u ? (0, JZ.readTrap)(CC.error) : null,
        fC = null !== nC && (0, jz.i)(nC.kind, nC.refusedBytes) ? nC.refusedBytes : 0,
        oC = (0, GZ.h)(),
        qC = null === Jn ? (0, jQ.t)(function() {
          try {
            return (0, fz.t)().buffer.byteLength
          } catch {
            return 0
          }
        }(), fC, oC) : Jn.ceilingMayRefuse(fC, oC),
        FC = fC > 0 && !qC && Mq();
      var WC;
      if (FC && ((0, Mz.x)("oom"), (0, Mz.w)("decline"), qo = !0), Lq(), (0, Mw.b)()) return console.warn(`${hb} the session stopped at ${CC.site} as the page reloads`, CC.error), void((0, ZZ.t)(CC.error) || (null === (WC = CC.header) || void 0 === WC ? void 0 : WC.lastError) === Tz.N.CoreBusy || (0, JZ.reportStoppedCore)(CC, zC, nC, {
        memoryDetails: wC,
        declined: FC
      }));
      (0, JZ.showCrash)(CC, zC, nC, {
        memoryDetails: wC,
        declined: FC
      })
    }

    function Bq(CC, zC) {
      const ZC = performance.now();
      return !(ZC - Zf[CC] < Db) && (Zf[CC] = ZC, console.warn(`${hb} ${zC}`), !0)
    }

    function Oq(CC) {
      const {
        input: zC,
        net: ZC,
        worker: QC
      } = CC.rings, wC = CC.optionsDropped, bC = zC.dropped + wC + ZC.dropped + QC.dropped + wf;
      bC !== Qf && Bq("dropped", `${bC} records dropped so far (input ${zC.dropped}, options ${wC}, net ${ZC.dropped}, worker ${QC.dropped}, net-out ${wf})`) && (Qf = bC)
    }

    function kq() {
      var CC, zC;
      const ZC = (0, hZ.e)();
      if (null === ZC) return null;
      const QC = (0, dZ.t)(ZC);
      return {
        ...QC,
        horizontal: Math.min(QC.horizontal, null !== (CC = null === (zC = xn) || void 0 === zC ? void 0 : zC.shedDistanceInUse()) && void 0 !== CC ? CC : 1 / 0)
      }
    }

    function Vq(CC) {
      var zC, ZC;
      return {
        samples: Hf ? tf : null,
        sunShadows: CC,
        renderDistance: null !== (zC = null === (ZC = kq()) || void 0 === ZC ? void 0 : ZC.horizontal) && void 0 !== zC ? zC : null
      }
    }

    function CF(CC) {
      Wf = CC, (0, KZ.L)()
    }

    function zF() {
      var CC, zC, ZC;
      const QC = kq();
      return {
        ...null === (CC = xn) || void 0 === CC ? void 0 : CC.pageKillSnapshot(),
        renderDistance: null !== (zC = null === QC || void 0 === QC ? void 0 : QC.horizontal) && void 0 !== zC ? zC : null,
        renderDistanceVertical: null !== (ZC = null === QC || void 0 === QC ? void 0 : QC.vertical) && void 0 !== ZC ? ZC : null,
        chunkCap: In,
        budgetBasis: vn,
        renderBackend: (0, Mw.G)(),
        adPreload: Nf,
        ...(0, YZ.e)(Wf)
      }
    }

    function ZF(CC) {
      console.info(`${hb} wasm memory at the session's end`, CC.details())
    }

    function QF(CC, zC) {
      if (!CC.isStopped) try {
        zC()
      } catch (ZC) {
        CC.crash(QZ.w, ZC)
      }
    }

    function wF() {
      return Rn ??= ZC.e(71).then((() => ZC(50762))).catch((CC => {
        throw Rn = null, CC
      })), Rn
    }
    async function bF() {
      const {
        createWorldgenWorker: CC,
        worldgenWorkerReady: zC
      } = await wF();
      return await zC(), CC
    }

    function nF(CC) {
      var zC;
      null === (zC = Rn) || void 0 === zC || zC.then(CC, (() => {}))
    }

    function fF() {
      return performance.now() - Math.max(yn, Ln) >= jb
    }

    function oF(CC) {
      const zC = document.hidden || Un ? "all" : "budget";
      Un = !0;
      const ZC = lq(CC, !1, zC);
      var QC;
      ZC && (Oq(CC), null === (QC = xn) || void 0 === QC || QC.afterFrame());
      return ZC
    }

    function qF(CC) {
      CC.isStopped || 0 === CC.rings.net.cursor || fF() && !oF(CC) || CC.rings.net.cursor > 0 && performance.now() - Ln >= jb / 2 && function(CC) {
        Bn ??= setTimeout((() => {
          Bn = null, qF(CC)
        }), jb)
      }(CC)
    }

    function FF(CC, zC) {
      return async function(CC, zC, ZC) {
        let {
          stop: QC,
          stillWanted: wC,
          beforeReload: bC
        } = ZC;
        const nC = await (0, KQ.j)(CC, {
          stillWanted: wC,
          beforeReload: async () => {
            QC(), await Promise.all([(0, JZ.flushCrashReports)(DC.b), null === bC || void 0 === bC ? void 0 : bC()])
          },
          reload: DC.j
        });
        return nC || zC(), nC
      }(CC, zC, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: Lq
      })
    }
    let WF = !1;

    function NF() {
      return WF = !0, async function(CC, zC, QC) {
        const {
          gamePackSource: wC
        } = await ZC.e(271).then((() => ZC(40888)));
        await iq.packStep(CC, ((ZC, QC) => ZC.packForGame(CC, wC(zC), QC)), QC)
      }(...arguments)
    }

    function MF(CC) {
      ! function(CC, zC) {
        CC((CC => {
          null === CC || void 0 === CC || CC.subscribe((CC => {
            let {
              pack: ZC,
              gameSource: QC
            } = CC;
            zC(null === QC || null === ZC ? null : {
              pack: ZC,
              source: "" === QC ? null : QC
            })
          }))
        }))
      }(xq, CC)
    }
    let gF = !1,
      SF = null,
      pF = !1,
      PF = !1;

    function GF() {
      var CC;
      gF || (gF = !0, po("play", aC), (0, NC.o)(new dF), fC.gameBridge.attach(mC), iF().catch((() => {})), (0, IC.y)((CC => {
        zz(CC.setTextHost)
      })), CC = xF, hf.add(CC), function(CC) {
        for (const zC of sn) CC(zC);
        Tn.add(CC)
      }((CC => {
        AF(RF[CC])
      })))
    }
    const RF = {
      booted: bC.l.INITIALISE_NOA,
      texturesIn: bC.l.REGISTRATION,
      modelsIn: bC.l.SETUP_LIFEFORMS
    };

    function AF(CC) {
      oC.o.bp("matchmakeAndPlayStepCompleted", {
        step: CC,
        totalSubSteps: 1
      })
    }

    function xF(CC) {
      if (!pF) return;
      const {
        gameNameWithVariation: zC,
        lobbyName: ZC
      } = (0, NC.d)();
      if (CC.code === QC.e.serverUpdating.code) return (new dF).leaveLive(), void IF(zC, ZC);
      oC.o.bp("unwantedLeftGame", {
        reason: JF(CC),
        requiresRefresh: CC.requiresRefresh,
        canReconnect: null !== CC.reconnect,
        automaticallyReconnect: CC.reconnecting,
        canPlayAgain: CC.canPlayAgain,
        gameNameWithVariation: zC,
        lobbyName: ZC
      }), (new dF).leaveLive()
    }

    function JF(CC) {
      return null !== CC.reasonKey ? {
        translationKey: CC.reasonKey
      } : "gameOrPluginKick" === CC.name ? CC.reason : `You have disconnected from the server.\n${CC.reason}`
    }

    function IF(CC, zC) {
      var QC;
      QC = (0, qC.y)(CC, zC), Promise.resolve().then((() => ZC(1453))).then((CC => {
        let {
          navigatePreserveSearch: zC
        } = CC;
        zC(QC)
      })).catch((CC => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", CC), (0, DC.e)(QC)
      }))
    }

    function iF() {
      return SF ??= Promise.all([ZC.e(72), ZC.e(75), ZC.e(74), ZC.e(73), ZC.e(89), ZC.e(86), ZC.e(269), ZC.e(189), ZC.e(223), ZC.e(247), ZC.e(218), ZC.e(46)]).then((() => ZC(40832))).then((CC => {
        try {
          CC.attachPlayGameSources()
        } catch (zC) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", zC),
            function(CC) {
              Nn.then((zC => {
                null === zC || zC.isStopped || Fo ? console.warn(`${hb} the play sources threw as they attached, after the client stopped`, CC) : Uq({
                  site: mb,
                  error: CC,
                  header: null
                }, qn)
              }))
            }(zC), zC
        }
      }), (CC => {
        throw SF = null, new IC.c(CC)
      })), SF
    }
    async function vF(CC, zC) {
      GF(), WF = !0, pF = !0;
      let ZC = {
          place: CC.place,
          matchedAt: CC.matchedAt
        },
        nC = CC.place.gameNameWithVariation;
      const fC = (0, WC.f)();
      let oC = null;
      const qC = await Ao({
        matchmake: async () => {
          let zC = ZC;
          if (ZC = null, null === zC) {
            const ZC = await CC.rematch();
            if (ZC.isError()) throw oC = ZC.asError().forward(), new Error(ZC.asError().message);
            zC = {
              place: ZC.getValue(),
              matchedAt: performance.now()
            }
          }
          nC = zC.place.gameNameWithVariation;
          return {
            target: await (0, XC.c)(CC.userContext, zC.place, Jq(), fC),
            matchedAt: zC.matchedAt,
            freshMs: XC.b
          }
        },
        pageReady: iF,
        onFailure: (CC, zC) => {
          null === oC && function(CC, zC) {
            (0, JZ.reportPageJoinFailure)(CC, qn, zC)
          }(CC, {
            sinceJoinStartMs: zC,
            game: nC
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => CC.userContext.invalidateTrafficCode(),
        signal: zC
      });
      switch (qC.kind) {
        case "joined":
          if (fC) {
            const {
              game: CC
            } = qC;
            (0, WC.p)((() => {
              CC.endJoinAd() && (0, gC.l)()
            }))
          }
          return PF || (PF = !0, (0, pC.d)()), pF ? (AF(bC.l.CONNECT_TO_GAME_SERVER), AF(bC.l.SHADER_PACK), function() {
            var CC, zC;
            return null !== (CC = null === (zC = rn) || void 0 === zC ? void 0 : zC.runsInJoinedGame()) && void 0 !== CC && CC
          }() && (0, SC.f)(CC.userContext, nC).catch((CC => {
            console.error("Failed to report the shader pack session", CC)
          })), function() {
            const CC = function() {
              var CC, zC;
              return null !== (CC = null === (zC = rn) || void 0 === zC ? void 0 : zC.couldntRunInJoinedGame()) && void 0 !== CC ? CC : null
            }();
            null !== CC && (0, SC.c)(CC)
          }(), wC.e.value(void 0)) : YF("The server ended the game as it joined");
        case "failed":
          if (!qC.reloading) {
            if (null !== oC) return oC;
            if ((qC.error instanceof EC.q || qC.error instanceof EC.d) && qC.error.code === QC.e.serverUpdating.code) {
              if (zC.aborted) return YF("Left the game while it loaded");
              const {
                gameNameWithVariation: CC,
                lobbyName: ZC
              } = (0, NC.d)();
              return IF(CC, ZC), YF("The server is updating")
            }
            return qC.error instanceof tC.b ? wC.e.errorWithCode(qC.error.messageKey, bC.l.SHADER_PACK, {
              severity: "medium"
            }) : wC.e.errorWithCode(function(CC) {
              if (CC instanceof EC.A || CC instanceof AC.f) return CC.message;
              if (eF(CC)) return (0, HC.k)(CC.code, CC.serverText);
              return HC.f
            }(qC.error), bC.l.CONNECT_TO_GAME_SERVER, {
              error: hF(qC.error) ? qC.error : void 0,
              severity: KF(qC.error),
              gameServerUnreachable: (0, lC.c)(qC.error),
              joinFailure: (0, lC.k)(qC.error),
              rematch: (0, GC.c)(qC.error),
              gameRefused: (0, RC.b)(qC.error)
            })
          }
          return YF("Reloading into the new build");
        case "stopped":
          return YF("The game client stopped, and shows why");
        case "wZ":
          return YF("Left the game while it loaded")
      }
    }

    function eF(CC) {
      return CC instanceof EC.q || CC instanceof EC.d && "attach" !== CC.stage
    }

    function hF(CC) {
      return !(CC instanceof EC.A) && !eF(CC) && void 0 === (0, lC.c)(CC)
    }

    function KF(CC) {
      return eF(CC) ? CC instanceof EC.d && (0, HC.j)(CC.code).requiresRefresh ? "medium" : "low" : hF(CC) || CC instanceof EC.A ? "medium" : "low"
    }

    function YF(CC) {
      return wC.e.errorWithCode(CC, bC.l.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        wZ: !0
      })
    }
    class dF {
      leave(CC) {
        if ((0, xC.c)()) {
          var zC, ZC;
          if ((0, nC.e)()) return;
          (0, MC.c)(!0 === (null === (zC = (0, xC.k)()) || void 0 === zC || null === (ZC = zC.currentViewer) || void 0 === ZC ? void 0 : ZC.unsavedChanges), CC)
        } else this.leaveLive()
      }
      leaveLive() {
        var CC;
        WF && (null === (CC = Jq()) || void 0 === CC || CC.endGamePack());
        if (!pF) return;
        pF = !1, (0, PC.h)();
        try {
          var zC;
          null === (zC = (0, IC.u)()) || void 0 === zC || zC.clearWasmCameraScreen()
        } catch (QC) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", QC)
        }
        const {
          gameNameWithVariation: ZC
        } = (0, NC.d)();
        try {
          mo()
        } finally {
          (0, NC.r)({
            websocketUrl: null
          }), oC.o.bp("leaveGame", {
            gameNameWithVariation: ZC
          }), (0, FC.K)()
        }
      }
      isReplay() {
        return (0, xC.c)()
      }
    }
  },
  40758: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      d: () => QC,
      g: () => fC,
      j: () => nC
    });
    const QC = 12e4,
      wC = 3e4,
      bC = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: CC => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", CC), () => {
          document.removeEventListener("visibilitychange", CC)
        })
      };

    function nC(CC) {
      return `it sent no start within ${Math.round(CC)} ms`
    }
    class fC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bC;
        this.timeoutMs = CC, this.onTimeout = zC, this.now = ZC, this.visibility = QC, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = QC.listen((() => {
          this.onVisibility()
        })), QC.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const CC = this.step;
        return null === CC ? 0 : Math.min(this.now() - CC.at, CC.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const CC = this.timeoutMs - this.counted;
        if (CC <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const zC = Math.min(CC, 5e3);
        this.step = {
          at: this.now(),
          ms: zC
        }, this.arm(zC, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(CC, zC) {
        this.timer = setTimeout((() => {
          this.timer = null, zC()
        }), CC)
      }
    }
  },
  39466: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC
    });
    var QC = ZC(326),
      wC = ZC(970);
    const bC = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      nC = new Set(["creativeFlat", "skyGrid"]);

    function fC(CC) {
      const zC = (0, QC.Cb)(CC);
      return "classic" !== zC ? bC.has(zC) : !(0, wC.i)(CC) && !nC.has((0, QC.zb)(CC))
    }
  },
  40667: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    const QC = {
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
  38554: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(2848);
    const wC = ["none", "idle", "now"];

    function bC() {
      const CC = () => (0, QC.z)();
      return {
        memoryBytes: () => (0, QC.t)().buffer.byteLength,
        reserveUpFront: zC => CC().RW(zC),
        reserveAhead: zC => CC().GW(zC),
        setCeiling: zC => {
          CC().AW(zC)
        },
        lowWater: () => wC[CC().PW()] ?? "none",
        stats: () => function(CC) {
          const zC = new Uint32Array((0, QC.t)().buffer, CC, 17),
            ZC = CC => zC[CC] ?? 0,
            wC = CC => ({
              upFront: ZC(CC),
              ahead: ZC(CC + 1),
              onDemandInFrame: ZC(CC + 2),
              onDemand: ZC(CC + 3)
            });
          return {
            memoryBytes: ZC(0),
            initialBytes: ZC(1),
            liveBytes: ZC(2),
            peakLiveBytes: ZC(3),
            headroomBytes: ZC(4),
            unusedBytes: ZC(5),
            ceilingBytes: ZC(6),
            reservesRefused: ZC(7),
            grows: wC(8),
            grownBytes: wC(12),
            allocationsRefused: ZC(16)
          }
        }(CC().xW()),
        takeBallast: () => CC().JW(),
        takePressure: () => CC().IW()
      }
    }
  },
  5002: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      g: () => nC,
      j: () => QC,
      k: () => SC,
      m: () => WC,
      q: () => wC,
      r: () => bC,
      s: () => qC,
      w: () => FC,
      y: () => NC
    });
    const QC = 5;

    function wC(CC) {
      return CC === QC
    }

    function bC(CC) {
      return [...CC.features]
    }
    const nC = 262144,
      fC = 256,
      oC = 256;

    function qC(CC) {
      if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
      const zC = [];
      for (const [ZC, QC] of Object.entries(CC)) {
        if ("string" !== typeof QC) return `${ZC} isn't text.`;
        zC.push({
          path: ZC,
          source: QC
        })
      }
      return zC.sort(((CC, zC) => WC(CC.path, zC.path))),
        function(CC) {
          if (0 === CC.length) return "The pack has no .wgsl files.";
          if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
          const zC = new Set;
          for (const {
              path: ZC
            }
            of CC) {
            const CC = MC(ZC);
            if (null !== CC) return CC;
            if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
            zC.add(ZC)
          }
          return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
        }(zC) ?? zC
    }

    function FC(CC) {
      const zC = {};
      for (const ZC of CC) zC[ZC.path] = ZC.source;
      return zC
    }

    function WC(CC, zC) {
      return CC < zC ? -1 : CC > zC ? 1 : 0
    }

    function NC(CC) {
      const zC = new TextEncoder;
      let ZC = 0;
      for (const {
          source: QC
        }
        of CC) ZC += zC.encode(QC).byteLength;
      return ZC
    }

    function MC(CC) {
      if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
      if (CC.length > oC) return `A file path is over ${oC} characters.`;
      if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
      return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
    }
    const gC = /^(.*)\[rot\[([1-4])$/;

    function SC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const QC = new Map;
      zC.forEach(((CC, zC) => {
        let {
          numAnimStates: ZC,
          animStartIdx: wC
        } = CC;
        for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
      }));
      const wC = Object.entries(CC),
        bC = new Map;
      for (const [SC, pC] of wC) {
        const CC = gC.exec(SC);
        "1" === CC?.[2] && bC.set(CC[1], pC + 1)
      }
      const nC = CC => {
          const zC = gC.exec(CC);
          return zC && bC.has(zC[1]) ? {
            root: zC[1],
            rotation: Number(zC[2]) - 1
          } : null
        },
        fC = new Set(wC.map((CC => {
          let [zC] = CC;
          return nC(zC)?.root ?? zC
        }))),
        oC = (CC, ZC) => {
          const QC = CC.replace(/_?0$/, "");
          return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
        },
        qC = new Map;
      for (const [gC, SC] of wC) qC.set(SC, oC(nC(gC)?.root ?? gC, SC));
      const FC = wC.reduce(((CC, zC) => {
          let [, ZC] = zC;
          return Math.max(CC, ZC + 1)
        }), 0),
        WC = Array.from({
          length: FC
        }, ((CC, zC) => ({
          id: zC + 1,
          rotation: 0
        }))),
        NC = new Map,
        MC = new Map;
      for (const [gC, SC] of wC) {
        const CC = nC(gC),
          zC = QC.get(SC);
        if (void 0 !== zC) {
          const ZC = qC.get(zC);
          MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "frame"
          }), CC && !MC.has(CC.root) && MC.set(CC.root, {
            name: CC.root,
            texture: ZC,
            kind: "frame"
          });
          continue
        }
        const ZC = qC.get(SC),
          wC = CC?.root ?? gC;
        if (ZC !== wC && MC.set(wC, {
            name: wC,
            texture: ZC,
            kind: "frame"
          }), CC) {
          const zC = bC.get(CC.root);
          WC[SC] = {
            id: zC,
            rotation: CC.rotation
          }, NC.set(ZC, zC), MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "rotation"
          })
        } else NC.set(ZC, SC + 1)
      }
      for (const gC of NC.keys()) MC.delete(gC);
      for (const [gC, SC] of ZC) {
        const CC = NC.get(SC);
        void 0 === CC || NC.has(gC) || (NC.set(gC, CC), MC.delete(gC))
      }
      return {
        named: [...NC].sort(((CC, zC) => {
          let [ZC] = CC, [QC] = zC;
          return ZC < QC ? -1 : ZC > QC ? 1 : 0
        })).map((CC => {
          let [zC, ZC] = CC;
          return {
            name: zC,
            id: ZC
          }
        })),
        aliases: [...MC.values()],
        layers: WC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);