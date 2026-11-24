export const id = 63;
export const ids = [63, 115, 116, 136];
export const modules = {
  39592: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      d: () => sD
    });
    const pD = "The world isn't loaded, so no blocks can be seen.",
      sD = "The world isn't loaded, so nothing in it can be seen."
  },
  39075: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => OD,
      c: () => JD,
      e: () => MD
    });
    var pD = wD(4820),
      sD = wD(2811),
      KD = wD(1886);
    const rD = new Map(Object.entries(pD.m).map((DD => {
      let [zD, wD] = DD;
      return [wD, zD]
    })));

    function LD(DD) {
      return (0, KD.D)(DD).toFixed(1)
    }

    function cD(DD, zD) {
      return `camera set by ${rD.get(DD[zD+1])}: heading ${`${LD(DD[zD+2])} -> ${LD(DD[zD+4])}`} deg, pitch ${`${LD(DD[zD+3])} -> ${LD(DD[zD+5])}`} deg, at ${DD[zD].toFixed(1)} ms`
    }
    class gD {
      constructor(DD, zD) {
        this.width = DD, this.bA = zD, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(DD * zD)
      }
      push(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let pD = 0; pD < this.width; pD++) wD[pD] = DD[zD + pD];
        return this.next = (this.next + 1) % this.bA, this.size = Math.min(this.size + 1, this.bA), wD
      }
      lines() {
        const DD = [],
          zD = (this.next - this.size + this.bA) % this.bA;
        for (let wD = 0; wD < this.size; wD++) {
          const pD = (zD + wD) % this.bA * this.width;
          DD.push(Array.from(this.data.subarray(pD, pD + this.width)).join(","))
        }
        return DD
      }
    }
    const RD = 0,
      AD = 2,
      UD = 3,
      fD = 4;

    function ID(DD) {
      return Number.isFinite(DD) ? String(Math.round(10 * DD) / 10) : String(DD)
    }

    function BD(DD) {
      return Number.isFinite(DD) ? DD.toFixed(1) : String(DD)
    }
    class GD {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Jm = 0, this.pastLimit = 0, this.lockSkips = 0, this.fG = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.Jm > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.Jm > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class hD {
      constructor() {
        var DD = this;
        this.remote = (0, sD.v)(), this.tally = new GD, this.records = new gD(10, this.remote ? 1 : 3600), this.events = new gD(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [pD, sD, KD, rD, LD, cD, gD, GD, hD, nD] = DD.records.push(zD, wD), MD = DD.tally;
          switch (MD.frames++, gD) {
            case RD:
              return void MD.idle++;
            case fD:
              return void MD.fG++;
            case UD:
              return MD.lockSkips++, void(0 === KD && 0 === rD || DD.outlier(`lock skip dropped raw (${ID(KD)}, ${ID(rD)}) at ${BD(pD)} ms`))
          }
          MD.looked++, Number.isFinite(sD) && (MD.dtMin = Math.min(MD.dtMin, sD), MD.dtMax = Math.max(MD.dtMax, sD), MD.dtSum += sD, sD > 0 && (MD.peakRate = Math.max(MD.peakRate, Math.hypot(LD, cD) / sD))), MD.raw[0] += KD, MD.raw[1] += rD, MD.turned[0] += LD, MD.turned[1] += cD;
          const OD = Math.abs(KD) > nD || Math.abs(rD) > nD,
            JD = `raw (${ID(KD)}, ${ID(rD)}) over ${BD(sD)} ms, limit ${ID(nD)}, filter v (${GD.toFixed(3)}, ${hD.toFixed(3)}) px/ms, at ${BD(pD)} ms`;
          gD === AD ? (MD.Jm++, DD.outlier(`spike put right: ${JD} -> turned (${ID(LD)}, ${ID(cD)})`)) : OD ? (MD.pastLimit++, DD.outlier(`kept past limit: ${JD}`)) : sD > 50 && (MD.longFrames++, DD.remote || DD.outlier(`long frame: ${JD}, turned in full`))
        }, this.onMouseMove = DD => {
          const zD = this.tally,
            {
              movementX: wD,
              movementY: pD
            } = DD;
          zD.events++;
          const sD = Math.max(Math.abs(wD), Math.abs(pD));
          zD.eventMax = Math.max(zD.eventMax, sD);
          const KD = null !== document.pointerLockElement,
            rD = this.event;
          rD[0] = DD.timeStamp, rD[1] = wD, rD[2] = pD, rD[3] = KD ? 1 : 0, this.events.push(rD), sD >= 200 && (zD.bigEvents++, this.eventOutlier(`big mousemove (${wD}, ${pD}) at ${BD(DD.timeStamp)} ms, lock ${KD?"Qg":"free"}`))
        }, this.onLockChange = () => {
          const DD = document.pointerLockElement;
          (0, sD.l)("look", `pointer lock ${DD?`gained (${DD.tagName.toLowerCase()})`:"lost"} at ${BD(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, sD.l)("look", `pointer lock request failed at ${BD(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, sD.l)("look", `page ${document.visibilityState} at ${BD(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const DD = this.tally;
          if (this.tally = new GD, !DD.moved() || this.remote && !DD.hasEvent()) return;
          const zD = DD.looked > 0 ? DD.dtSum / DD.looked : NaN,
            wD = [`${DD.frames} frames (${DD.looked} looked, ${DD.idle} idle${"wasm"===this.client?`, ${DD.fG} carried`:""})`, `dt avg ${BD(zD)} min ${BD(DD.dtMin)} max ${BD(DD.dtMax)}, ${DD.longFrames} long`, `${DD.events} mousemoves (max ${ID(DD.eventMax)} px, ${DD.bigEvents} big)`, `raw (${ID(DD.raw[0])}, ${ID(DD.raw[1])}) turned (${ID(DD.turned[0])}, ${ID(DD.turned[1])})`, `peak ${DD.peakRate.toFixed(2)} px/ms`, `put right ${DD.Jm}, past limit ${DD.pastLimit}, lock skips ${DD.lockSkips}`, "lock " + (document.pointerLockElement ? "Qg" : "free")];
          DD.dropped > 0 && wD.push(`${DD.dropped} doubled spike copies dropped`), DD.cameraSets > 0 && wD.push(`${DD.cameraSets} camera sets`), DD.cameraSetsLost > 0 && wD.push(`${DD.cameraSetsLost} camera set records lost`), DD.lost > 0 && wD.push(`${DD.lost} records lost`), DD.suppressed > 0 && wD.push(`${DD.suppressed} outlier lines not shown`), (0, sD.l)("look", `1s: ${wD.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(DD, zD) {
        this.client = DD, this.takes = zD;
        const {
          screen: wD
        } = window;
        (0, sD.l)("look", `start: ${DD} client, dpr ${window.devicePixelRatio}, screen ${wD.width}x${wD.height}, pointer lock ${document.pointerLockElement?"Qg":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, sD.i)("look", this.dump))
      }
      outlier(DD) {
        const zD = this.tally;
        zD.outliers >= 20 ? zD.suppressed++ : (zD.outliers++, (0, sD.l)("look", DD))
      }
      eventOutlier(DD) {
        const zD = this.tally;
        zD.eventLines >= 10 ? zD.suppressed++ : (zD.eventLines++, (0, sD.l)("look", DD))
      }
      takeRecords() {
        if (null === this.takes) return;
        const DD = this.takes.look();
        if (DD.length >= 2) {
          this.tally.lost += DD[0], this.tally.dropped += DD[1];
          for (let zD = 2; zD + 10 <= DD.length; zD += 10) this.record(DD, zD)
        }
        const zD = this.takes.cameraSets();
        if (zD.length >= pD.e) {
          this.tally.cameraSetsLost += zD[0];
          for (let DD = pD.e; DD + pD.h <= zD.length; DD += pD.h) this.tally.cameraSets++, this.outlier(cD(zD, DD))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let nD = null;

    function MD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return nD ??= new hD, nD.start(DD, zD), nD.record
    }

    function OD() {
      var DD;
      null === (DD = nD) || void 0 === DD || DD.endTake()
    }

    function JD() {
      var DD;
      null === (DD = nD) || void 0 === DD || DD.droppedCopy()
    }
  },
  34103: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    const pD = new Set(["chunkBorders"])
  },
  34238: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      h: () => sD,
      j: () => RD
    });
    var pD = wD(1570);

    function sD(DD) {
      var zD;
      return {
        ...rD.store,
        yaw: rD.store.yaw + (null !== (zD = pD.b[DD].previewYaw) && void 0 !== zD ? zD : 0)
      }
    }
    const KD = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      rD = {
        player: KD,
        store: {
          ...KD,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function LD(DD, zD) {
      DD instanceof Promise ? DD.then(zD).catch((DD => {
        console.error("Couldn't open the preview", DD)
      })) : zD(DD)
    }
    class cD {
      constructor(DD) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, LD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
        }))
      }
      show(DD) {
        var zD;
        this.view = DD, null === (zD = this.opened) || void 0 === zD || zD.show(DD)
      }
      resize(DD, zD) {
        var wD;
        this.size = {
          width: DD,
          height: zD
        }, null === (wD = this.opened) || void 0 === wD || wD.resize(DD, zD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    class gD {
      constructor(DD) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), LD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var DD, zD;
        return null !== (DD = null === (zD = this.opened) || void 0 === zD ? void 0 : zD.isReady()) && void 0 !== DD && DD
      }
      setCosmetic(DD, zD) {
        var wD;
        null === (wD = this.opened) || void 0 === wD || wD.setCosmetic(DD, zD)
      }
      playEmote(DD) {
        var zD;
        null === (zD = this.opened) || void 0 === zD || zD.playEmote(DD)
      }
      setOrbit(DD) {
        var zD;
        null === (zD = this.opened) || void 0 === zD || zD.setOrbit(DD)
      }
      resetCamera() {
        var DD;
        null === (DD = this.opened) || void 0 === DD || DD.resetCamera()
      }
      async untilDrawn(DD) {
        var zD;
        await this.ready, await (null === (zD = this.opened) || void 0 === zD ? void 0 : zD.untilDrawn(DD))
      }
      resize(DD, zD) {
        var wD;
        this.size = {
          width: DD,
          height: zD
        }, null === (wD = this.opened) || void 0 === wD || wD.resize(DD, zD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    const RD = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(DD) {
        this.host = DD
      }
      setDefaultHost(DD) {
        this.makeDefault = DD
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(DD) {
        return new cD(this.current().openMob(DD))
      }
      openPet(DD) {
        return new cD(this.current().openPet(DD))
      }
      openMobLineup(DD) {
        return new cD(this.current().openMobLineup(DD))
      }
      openCharacter(DD, zD) {
        return new gD(this.current().openCharacter(DD, zD))
      }
    }
  },
  5076: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.i,
      d: () => sD,
      h: () => pD.q
    });
    var pD = wD(5084);
    const sD = [!1, !0].flatMap((DD => ["terrain", "liquid", "model"].map((zD => ({
      strict: DD,
      program: zD
    })))))
  },
  39186: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      ShaderPackPage: () => cD,
      harnessShaderPackMode: () => UD,
      setHarnessUrlShaderPack: () => AD,
      shaderPackPage: () => RD
    });
    var pD = wD(103),
      sD = wD(35),
      KD = (wD(3466), wD(5076), wD(3462)),
      rD = wD(6693);
    wD(6664);
    const LD = {
      status: "none"
    };
    class cD {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, KD.i)(pD.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), gD().then((DD => {
            DD && sD.h.removeItem(KD.e)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, KD.h)(pD.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const DD = await this.load();
        return "active" === DD.status ? DD.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((DD => (console.error("Failed to load the shader pack", DD), LD))).then((DD => (this.resolved ??= DD, DD))), this.pagePack
      }
      hasNone() {
        var DD;
        return "none" === (null === (DD = this.resolved) || void 0 === DD ? void 0 : DD.status)
      }
      block(DD) {
        this.resolved = {
          status: "blocked",
          messageKey: DD,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([wD.e(77), wD.e(133), wD.e(140)]).then((() => wD(41647))).then((DD => (DD.prefetchCompiler(), DD))), this.compiling
      }
      async readStored() {
        const DD = await gD();
        return DD && this.compiler().then((DD => DD.reconcileHint())).catch((DD => {
          console.error("Failed to correct the shader pack hint", DD)
        })), DD
      }
      async read() {
        const DD = await this.preload();
        return DD ? (await this.compiler()).compilePagePack(DD) : LD
      }
    }
    async function gD() {
      if (!(0, KD.j)(pD.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const DD = await (0, rD.c)(!0);
        return DD || sD.h.setItem(KD.e, !1), DD
      } catch (DD) {
        return console.error("Failed to read the stored shader pack", DD), sD.h.removeItem(KD.e), null
      }
    }
    const RD = new cD;

    function AD(DD, zD) {}

    function UD() {
      return null
    }
  },
  39225: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => AD,
      d: () => UD
    });
    var pD = wD(157),
      sD = wD(186),
      KD = wD(1487),
      rD = wD(2925),
      LD = wD(1495),
      cD = wD(36467),
      gD = wD(655),
      RD = wD(39186);

    function AD(DD) {
      (0, rD.reportClientError)("matchmake_failed", DD, pD.n[pD.n.SHADER_PACK])
    }
    async function UD(DD, zD) {
      var wD;
      const pD = null === (wD = await RD.shaderPackPage.preload()) || void 0 === wD ? void 0 : wD.listing,
        rD = (0, cD.b)();
      pD && null !== rD && await LD.d.reportShaderPackSession(DD, {
        packId: pD.packId,
        sourceHash: pD.sourceHash,
        game: (0, KD.d)(zD, sD.y, "other"),
        playSessionId: rD,
        visitSessionId: (0, gD.d)()
      })
    }
  },
  6693: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      c: () => KD
    });
    var pD = wD(35);
    const sD = "shaderPack";
    async function KD() {
      var DD;
      let zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (DD = await pD.g.getItem(sD, zD)) && void 0 !== DD ? DD : null
    }
  },
  6664: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      loadShaderPackTextures: () => rD,
      shaderPackTextures: () => LD
    });
    var pD = wD(5084);
    let sD = null,
      KD = null;

    function rD() {
      return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zD,
          textureNameToIndex: wD,
          textureAnimationData: KD
        } = DD;
        return sD ??= (0, pD.m)(wD, KD, zD), sD
      })), KD
    }

    function LD() {
      if (null === sD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return sD
    }
  },
  39008: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => LD
    });
    var pD = wD(25),
      sD = wD(1299),
      KD = wD(2962);
    const rD = "Reconnecting";
    class LD {
      constructor(DD) {
        this.hooks = DD, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = DD => {
          DD.persisted || this.leave()
        }, this.controller = new KD.e((zD => DD.reconnect(zD)), {
          isSessionLive: () => !this.ended && DD.isLive(),
          onPhaseChanged: DD => {
            this.onPhaseChanged(DD)
          },
          onReconnected: zD => {
            DD.onReconnected(zD)
          },
          onGaveUp: zD => {
            !this.ended && DD.isLive() && DD.onGaveUp(this.sessionBased, zD)
          }
        })
      }
      onInitialInfo(DD, zD) {
        this.graceMs = DD, this.sessionBased = zD
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(DD) {
        this.ended || this.controller.onConnectionLost(DD, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const DD = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          zD = this.controller.heldToken;
        this.end(), DD && "" !== zD && this.hooks.releaseSeat(zD)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(DD) {
        const zD = (0, KD.t)(DD);
        zD !== this.stopped && (this.stopped = zD, this.hooks.freeze(zD));
        const wD = "frozen" === DD || "resuming" === DD && this.frozen;
        wD && !this.frozen ? (0, sD.p)(rD, {
          overridesPause: !0
        }) : !wD && this.frozen && (0, sD.o)(rD), this.frozen = wD, this.setListening("connected" !== DD), pD.l.KG(KD.q, wD ? "frozen" : DD)
      }
      setListening(DD) {
        DD !== this.listening && (this.listening = DD, DD ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39014: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD
    });
    class pD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = DD, this.now = zD, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const DD = this.now(),
            zD = DD - this.lastCheckAt <= 2e3;
          this.lastCheckAt = DD;
          const wD = "visible" === document.visibilityState;
          !wD || zD && this.wasVisible || (this.resumedAt = DD), this.wasVisible = wD, wD && DD - this.lastHeardAt > 12e3 && DD - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = zD(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  34172: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD
    });
    var pD = wD(1075);

    function sD() {
      var DD, zD;
      return null !== (DD = null === (zD = screen.orientation) || void 0 === zD ? void 0 : zD.type) && void 0 !== DD ? DD : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const KD = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && sD() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = sD(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, pD.CB)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const DD of this.resizers) DD()
          }
        }), 1e3)
      }
      heldSizer(DD) {
        let zD = !1;
        return () => {
          if (zD && this.isHeld()) return null;
          const wD = DD();
          return zD ||= null !== wD, wD
        }
      }
      onRelease(DD) {
        return this.resizers.add(DD), () => {
          this.resizers.delete(DD)
        }
      }
    }
  },
  39212: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    let pD = !1;
    async function sD(DD, zD) {
      if (!pD) {
        pD = !0;
        try {
          const [{
            reloadBloxd: pD
          }, {
            NotificationProvider: sD
          }] = await Promise.all([Promise.resolve().then((() => wD(1737))), Promise.resolve().then((() => wD(1355)))]);
          if (!DD || !0 === await sD.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void pD(zD)
        } catch (sD) {
          console.error("Leaving the replay failed", sD)
        }
        pD = !1
      }
    }
  },
  39029: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD,
      g: () => RD
    });
    var pD = wD(1724),
      sD = wD(197),
      KD = wD(1702),
      rD = wD(1781),
      LD = wD(1211),
      cD = wD(1130);
    async function gD(DD, zD) {
      return function(DD) {
        return "object" === typeof DD && null !== DD && DD.code === sD.e.VpnIp.code
      }(zD) && function(DD) {
        return KD.c.supports("appCheck") && DD.isLoggedIn() && !DD.hasTriedAppAttestation()
      }(DD) && await async function(DD) {
        try {
          const {
            token: zD
          } = await (0, rD.d)(), {
            "3PSIDMCPP": wD
          } = await (0, cD.postJsonWithMetricsCookiesAndJsonResponse)(`${LD.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: zD
          }, {
            retries: 0
          }, DD.getMetricsCookies());
          return DD.setAppAttestedAuthJwt(wD), !0
        } catch (zD) {
          return zD instanceof pD.c && "failed" === zD.code ? (console.warn("The app couldn't get an App Check token:", zD), DD.markAppAttestationTried()) : console.error("Failed to attest the app:", zD), !1
        }
      }(DD)
    }
    async function RD(DD, zD) {
      try {
        return await zD()
      } catch (wD) {
        if (!await gD(DD, wD)) throw wD
      }
      return zD()
    }
  },
  40889: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => cD
    });
    var pD = wD(1753);
    const sD = 33177600,
      KD = 3e4;
    let rD = !1;

    function LD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: LD = 1,
        type: cD = "image/png",
        quality: gD
      } = pD;
      if (!DD.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (rD) return Promise.reject(new Error("A screenshot is already being taken"));
      rD = !0;
      const RD = function(DD, zD, wD) {
        const pD = Math.max(1, DD),
          KD = Math.max(1, zD),
          rD = Math.min(1, wD / Math.max(pD, KD), Math.sqrt(sD / (pD * KD)));
        return {
          width: Math.max(1, Math.floor(pD * rD)),
          height: Math.max(1, Math.floor(KD * rD))
        }
      }(zD, wD, DD.maxTextureSize);
      return DD.resize(RD.width, RD.height, LD * RD.width / Math.max(1, zD)), new Promise(((zD, wD) => {
        let pD, sD = 2,
          LD = null;
        const RD = () => {
          var zD;
          rD = !1, null === (zD = LD) || void 0 === zD || zD(), clearTimeout(pD), DD.restoreSize()
        };
        pD = setTimeout((() => {
          RD(), wD(new Error("No frame was drawn to capture"))
        }), KD), LD = DD.onFrameDrawn((() => {
          if (sD--, sD > 0) return;
          const {
            canvas: pD
          } = DD, KD = {
            width: pD.width,
            height: pD.height
          };
          try {
            pD.toBlob((DD => {
              DD ? zD({
                blob: DD,
                ...KD
              }) : wD(new Error("The canvas gave no image"))
            }), cD, gD)
          } catch (rD) {
            wD(rD)
          } finally {
            RD()
          }
        }))
      }))
    }
    async function cD(DD, zD, wD) {
      try {
        const sD = await LD(DD, zD, wD);
        (0, pD.b)(sD.blob, `bloxd-screenshot-${sD.width}x${sD.height}-${Date.now()}.png`)
      } catch (sD) {
        console.error("Error taking screenshot:", sD)
      }
    }
  },
  39020: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD,
      h: () => RD
    });
    var pD = wD(197),
      sD = wD(1819),
      KD = wD(1217),
      rD = wD(8901);
    const LD = [250, 500, 1e3, 2e3, 1250],
      cD = 406;

    function gD(DD) {
      if ("object" !== typeof DD || null === DD) return !1;
      const {
        code: zD,
        message: wD
      } = DD, sD = pD.e.duplicateLobbyNameError;
      return (zD === sD.code || zD === cD) && (wD === sD.text || wD === sD.text + pD.j)
    }
    async function RD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sD.e;
      for (let sD = 0;; sD++) {
        let rD;
        (0, KD.h)(zD);
        try {
          return await DD()
        } catch (pD) {
          if (rD = LD[sD], void 0 === rD || !gD(pD)) throw pD
        }
        await wD(rD, zD)
      }
    }
    const AD = new Set([pD.e.duplicateLobbyNameError.code, pD.e.lobbyCantBeCreated.code, pD.e.roomDisposedEarlyError.code, pD.e.roomDisposedLateError.code, pD.e.serverRoomLimitReached.code]);

    function UD(DD) {
      if (gD(DD)) return !0;
      const zD = (0, rD.g)(DD);
      return "number" === typeof zD && AD.has(zD)
    }
  },
  39124: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(338),
      sD = wD(128),
      KD = wD(35);

    function rD() {
      KD.h.setItem(pD.vb, KD.h.getItem(pD.vb) + 1), (0, sD.m)() && KD.h.setItem(pD.tb, KD.h.getItem(pD.tb) + 1)
    }
  },
  36463: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => JD,
      d: () => ED
    });
    var pD = wD(1008),
      sD = wD(212),
      KD = wD(348),
      rD = wD(625),
      LD = wD(351),
      cD = wD(1017),
      gD = wD(638),
      RD = wD(676),
      AD = wD(4540),
      UD = wD(103),
      fD = wD(128),
      ID = wD(1737),
      BD = wD(116),
      GD = wD(36467),
      hD = wD(35),
      nD = wD(655),
      MD = wD(323),
      OD = wD(36473);

    function JD() {
      var DD, zD;
      return [...null !== (DD = navigator.languages) && void 0 !== DD ? DD : [null !== (zD = navigator.language) && void 0 !== zD ? zD : "none"], "en-gb"]
    }

    function ED(DD, zD, wD, ED, QD) {
      const XD = (0, pD.l)(zD) ? (0, pD.o)(zD) : null,
        VD = DD.isLoggedIn() && void 0 !== (0, sD.d)(KD.k, fD.v) ? (0, MD.u)() : null,
        PD = {
          cookies: (0, ID.getAllCookiesForGameNameWithVariation)(zD),
          isMobile: (0, UD.isMobile)(),
          isUsingCustomGameTexturePack: null !== XD && QD(XD),
          generalCookies: {
            joinDiscord: !!hD.h.getItem("DiscordPressed"),
            newGo: AD.b,
            ...DD.getMetricsCookies(),
            trafficCode: ED,
            compliance: UD.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, UD.getBrowserName)(),
            version: (0, UD.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, UD.getPlatformType)(),
            deviceType: (0, BD.e)()
          },
          isLoggedIn: DD.isLoggedIn(),
          lobbyName: wD,
          languages: JD(),
          version: rD.e,
          siteUsed: fD.v,
          subsiteUsed: fD.D,
          playSessionId: (0, GD.i)(zD),
          visitSessionId: (0, nD.d)(),
          clientReason: gD.n.reason,
          budgetBasis: (0, OD.i)(),
          ...null !== RD.q && {
            diagClaim: RD.q.claimId
          },
          ...null !== VD && {
            webGpuLoss: VD
          }
        };
      return null !== XD && (0, LD.Dc)(XD) ? (PD.lobbyName = (0, pD.k)(XD, (0, pD.m)(zD), wD), {
        roomName: `classic_${cD.e}`,
        joinOptions: PD
      }) : {
        roomName: zD,
        joinOptions: PD
      }
    }
  },
  39052: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => fD,
      g: () => UD
    });
    const pD = "ue:",
      sD = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      KD = "[A-Za-z0-9]{1,24}",
      rD = 15,
      LD = new RegExp(`^${KD}$`);
    new RegExp(`^${pD}(${[...sD,"other"].join("|")}):(?:n|k(${KD})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function cD(DD, zD, wD, KD, cD) {
      const gD = "string" === typeof DD && sD.includes(DD) ? DD : "other";
      let RD = "n";
      return "string" === typeof zD ? RD = LD.test(zD) ? `k${zD}` : "n" : "number" === typeof wD && Number.isInteger(wD) && wD >= 0 && wD <= rD && (RD = `b${wD}`), `${pD}${gD}:${RD}:${KD?1:0}${cD?1:0}`
    }
    var gD = wD(1681),
      RD = wD(1745);
    let AD = null;

    function UD(DD) {
      const zD = DD instanceof Element && DD !== document.body && DD !== document.documentElement && !(0, gD.s)(DD) && !DD.closest("#root");
      return {
        editable: (0, RD.c)(DD),
        outsideView: zD
      }
    }

    function fD(DD) {
      return AD ??= function(DD) {
        try {
          const {
            editable: zD,
            outsideView: wD
          } = UD(DD.target), pD = DD;
          return cD(DD.type, pD.code, pD.button, zD, wD)
        } catch {
          return cD(null, null, null, !1, !1)
        }
      }(DD), AD
    }
  },
  40578: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD
    });
    var pD = wD(39592);

    function sD(DD) {
      return {
        current: () => DD,
        watch: () => () => {}
      }
    }

    function KD() {}
    const rD = Object.freeze([0, 0, 0]),
      LD = {
        states: {
          health: sD({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: sD({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: sD({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: sD({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: sD({}),
          creativeVisibility: sD({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: sD(null),
          heldItemAim: sD({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: sD(!1),
          gliderBoostFuel: sD(0),
          flight: sD({
            canFly: !1,
            flying: !1
          }),
          crafting: sD({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: sD({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: sD({}),
          fullInventory: sD(!1),
          crosshairTarget: sD({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: sD(!0),
          freeCamera: sD({
            allowed: !1,
            movesFly: !1
          }),
          replay: sD(null),
          replayEdits: sD(null),
          replayRecorder: sD({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: sD(!1)
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
          selectHotbarSlot: KD,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: KD,
          setInventoryOpen: KD,
          changeIronChestPasskey: KD,
          dragReplayCamera: KD,
          applyTemporaryThirdPerson: KD,
          holdEmoteWheel: KD,
          recordFlyingMiddleText: KD,
          focusCrafting: KD,
          craftRecipe: () => ({
            UL: 0,
            Pr: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: KD,
          setShopOpen: KD,
          buyShopItem: KD,
          lobbyManage: KD,
          sendChatMessage: KD,
          ignorePlayer: KD,
          reportPlayer: KD,
          reportWorldCodeChat: KD,
          requestDiscordReportKey: KD,
          reportLobbyOrGame: KD,
          playEmote: KD,
          updateMyCosmetic: KD,
          writeOnBoard: KD,
          writeBook: KD,
          writeNameTag: KD,
          setCustomLobbyBlock: KD,
          openIronChest: KD,
          sendCodeCollab: KD,
          clickCodeBlock: KD,
          bindCustomButtonKeys: KD,
          pressCustomButton: KD,
          moveReplayFreecam: KD,
          holdReplayFreecamVertical: KD,
          respawn: KD,
          wakeUp: KD,
          requestLeaderboard: KD,
          completeTask: KD,
          setServerCookie: KD,
          answerUiRequest: KD,
          chooseRewardedAd: KD,
          setCameraZoom: KD,
          setFreeCameraMovesFly: KD,
          setBlockHighlight: KD,
          setCrosshairInteractPrompt: KD,
          setLookSensitivity: KD,
          replayAction: KD,
          setReplayPlaying: KD,
          seekReplay: KD,
          setReplayCameraMode: KD,
          syncReplayCameraMode: KD,
          setReplayCameraKeyframe: KD,
          moveReplayCameraKeyframe: KD,
          deleteReplayCameraKeyframes: KD,
          setReplayPlaybackMark: KD,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: KD,
          exportReplayVideo: KD,
          toggleRecording: KD,
          saveClip: KD,
          setRecorderPrefs: KD,
          setReplayViewerOpen: KD
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => pD.c,
          worldCodeAiGameState: () => pD.d
        },
        lookups: {
          localPos: () => rD,
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
  40883: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      g: () => KD
    });
    var pD = wD(2130),
      sD = wD(1008);

    function KD(DD, zD) {
      return null !== DD.gameSource && (0, pD.j)(zD, DD.gameSource)
    }

    function rD(DD, zD) {
      if (null === DD.gameSource || "" === DD.gameSource || null === zD) return !0;
      const wD = (0, sD.l)(zD) ? (0, sD.o)(zD) : null;
      return null !== wD && KD(DD, wD)
    }
  },
  40855: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD
    });
    var pD = wD(608),
      sD = wD(40863),
      KD = wD(40732);
    async function rD(DD) {
      const zD = await (0, sD.h)({
        Helmet: wD(37943),
        Chestplate: wD(37947),
        Gauntlets: wD(37966),
        Leggings: wD(37955),
        Boots: wD(37960)
      } [pD.e[DD]]);
      try {
        return (0, KD.l)(zD)
      } finally {
        zD.close()
      }
    }
    const LD = new class {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD.m;
        this.decode = DD, this.register = zD, this.decoded = new Map
      }
      warm() {
        for (let DD = 0; DD < pD.e.length; DD++) this.part(DD).catch((zD => {
          console.warn(`The grayscale armour ${pD.e[DD]} image didn't decode ahead of use`, zD)
        }))
      }
      async load(DD, zD) {
        const {
          width: wD,
          height: KD,
          pixels: rD
        } = await this.part(DD), LD = new ImageData(function(DD, zD) {
          const wD = new Uint8ClampedArray(DD.length);
          for (let pD = 0; pD < DD.length; pD += 4) wD[pD] = Math.round(DD[pD] * zD[0] / 255), wD[pD + 1] = Math.round(DD[pD + 1] * zD[1] / 255), wD[pD + 2] = Math.round(DD[pD + 2] * zD[2] / 255), wD[pD + 3] = DD[pD + 3];
          return wD
        }(rD, function(DD) {
          return [DD >>> 16 & 255, DD >>> 8 & 255, 255 & DD]
        }(zD)), wD, KD);
        let cD;
        try {
          cD = await createImageBitmap(LD, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (gD) {
          throw new sD.d("decode", `grayscale armour ${pD.e[DD]}`, {
            cause: gD
          })
        }
        return {
          id: this.register(cD),
          width: wD,
          height: KD
        }
      }
      part(DD) {
        const zD = this.decoded.get(DD);
        if (void 0 !== zD) return zD;
        const wD = this.decode(DD).catch((zD => {
          throw this.decoded.delete(DD), zD instanceof sD.d ? zD : new sD.d("decode", `grayscale armour ${pD.e[DD]}`, {
            cause: zD
          })
        }));
        return this.decoded.set(DD, wD), wD
      }
    }
  },
  40852: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      d: () => GD,
      f: () => RD,
      h: () => AD,
      l: () => BD
    });
    var pD = wD(40710),
      sD = wD(40855),
      KD = wD(40863);
    const rD = 396,
      LD = 1,
      cD = 2,
      gD = 3,
      RD = {
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
      AD = {
        File: 0,
        Item: 1
      },
      UD = 0,
      fD = 1,
      ID = 2;

    function BD(DD) {
      const zD = (0, pD.n)();
      zD.catch((() => {}));
      let sD = null;
      return {
        glbUrl: DD,
        lifeformAtlasUrl: async DD => (await zD).lifeformAtlasUrl(DD),
        armourAtlasUrl: async () => (await wD.e(204).then((() => wD(34299)))).armourAtlasUrl,
        capeUrl: async DD => (await zD).capeUrl(DD),
        attachmentImageUrl: async DD => (await zD).attachmentImageUrl(DD),
        blockImageUrl: async DD => (await zD).blockImageUrl(DD),
        groupAtlasUrl: async DD => (await zD).groupAtlasUrl(DD),
        particleTextureUrl: async DD => (await zD).particleTextureUrl(DD),
        particleItemUrl: async DD => (sD ??= wD.e(38).then((() => wD(50846))).catch((DD => {
          throw sD = null, DD
        })), (await sD).particleItemUrl(DD))
      }
    }
    class GD {
      constructor(DD, zD) {
        var wD, rD, LD, cD;
        let gD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = DD, this.onFailure = zD, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.MI = !1, this.load = null !== (wD = gD.load) && void 0 !== wD ? wD : (DD, zD) => (0, KD.k)(DD, gD.fetchImage, zD), this.release = null !== (rD = gD.release) && void 0 !== rD ? rD : KD.n, this.fetchFile = null !== (LD = gD.fetchFile) && void 0 !== LD ? LD : DD => (0, pD.g)(DD), this.greyscaleArmour = null !== (cD = gD.greyscaleArmour) && void 0 !== cD ? cD : sD.d
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(DD, zD) {
        this.glbWrittenImages.set(DD, QD(zD))
      }
      glbTaken(DD, zD) {
        const wD = this.glbWrittenImages.get(DD);
        this.glbWrittenImages.delete(DD), zD && this.setGlbImages(DD, void 0 !== wD && wD.length > 0 ? wD : void 0)
      }
      setGlbImages(DD, zD) {
        var wD;
        this.glbTakenCount.set(DD, (null !== (wD = this.glbTakenCount.get(DD)) && void 0 !== wD ? wD : 0) + 1), void 0 === zD ? this.glbImages.delete(DD) : this.glbImages.set(DD, zD);
        const pD = [];
        for (const {
            key: sD
          }
          of this.loading.values()) sD.kind === RD.Glb && sD.word === DD && pD.push(sD);
        for (let sD = this.ready.length - 1; sD >= 0; sD--) {
          const {
            key: zD,
            id: wD
          } = this.ready[sD];
          zD.kind === RD.Glb && zD.word === DD && (this.ready.splice(sD, 1), null !== wD && (this.answered.delete(wD), this.release(wD)), pD.push(zD))
        }
        this.loadAgain(pD)
      }
      onEvent(DD) {
        if (this.MI) return;
        const zD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
        for (let wD = 0; wD + 8 <= DD.byteLength; wD += 8) {
          const DD = zD.getUint8(wD),
            pD = zD.getUint32(wD + 4, !0);
          if (DD === gD) {
            this.answered.delete(pD), this.release(pD);
            continue
          }
          const sD = {
            kind: zD.getUint8(wD + 1),
            index: zD.getUint8(wD + 2),
            word: pD
          };
          DD === LD ? this.want(sD) : DD === cD && this.loading.delete(hD(sD))
        }
      }
      reload(DD, zD) {
        const wD = wD => DD.includes(wD.kind) && (void 0 === zD || zD(wD)),
          pD = new Map;
        for (const sD of this.answered.values()) wD(sD) && pD.set(hD(sD), sD);
        for (const [sD, {
            key: KD
          }] of this.loading) wD(KD) && pD.set(sD, KD);
        this.loadAgain(pD.values())
      }
      loadAgain(DD) {
        for (const zD of DD) this.loading.delete(hD(zD)), this.want(zD)
      }
      drain(DD) {
        if (null !== DD)
          for (; this.ready.length > 0;) {
            if (!DD(rD, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.MI = !0, this.loading.clear(), this.ready.length = 0;
        for (const DD of this.answered.keys()) this.release(DD);
        this.answered.clear()
      }
      want(DD) {
        const zD = hD(DD);
        if (this.loading.has(zD)) return;
        const wD = {
          key: DD
        };
        this.loading.set(zD, wD), this.loadKey(DD).then((pD => {
          this.MI || this.loading.get(zD) !== wD ? this.release(pD.id) : (this.loading.delete(zD), this.answered.set(pD.id, DD), this.ready.push({
            record: MD(DD, UD, pD),
            key: DD,
            id: pD.id
          }))
        }), (pD => {
          if (this.MI || this.loading.get(zD) !== wD) return;
          this.loading.delete(zD), this.onFailure({
            key: DD,
            error: pD
          });
          const sD = pD instanceof KD.d && "decode" === pD.stage ? fD : ID;
          this.ready.push({
            record: MD(DD, sD, null),
            key: DD,
            id: null
          })
        }))
      }
      async loadKey(DD) {
        switch (DD.kind) {
          case RD.Glb:
            return this.load(await this.glbImage(DD), "none");
          case RD.LifeformAtlas:
            return this.load(nD(await this.sources.lifeformAtlasUrl(DD.word), DD), "none");
          case RD.ArmourAtlas:
            return this.load(nD(await this.sources.armourAtlasUrl(), DD), "none");
          case RD.Cape:
            return this.load(nD(await this.sources.capeUrl(DD.word), DD), "none");
          case RD.AttachmentImage:
            return this.load(nD(await this.sources.attachmentImageUrl(DD.word), DD), "none");
          case RD.GroupAtlas:
            return this.load(nD(await this.sources.groupAtlasUrl(DD.word), DD), "none");
          case RD.BlockImage:
            return this.load(nD(await this.sources.blockImageUrl(DD.word), DD), "none");
          case RD.Particle: {
            const zD = await (DD.index === AD.Item ? this.sources.particleItemUrl(DD.word) : this.sources.particleTextureUrl(DD.word));
            return this.load(nD(zD, DD), "flipY")
          }
          case RD.GreyscaleArmour:
            return this.greyscaleArmour.load(DD.index, DD.word);
          default:
            throw new KD.d("fetch", `image kind ${DD.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(DD) {
        var zD;
        let wD = this.glbImages.get(DD.word);
        if (void 0 === wD) {
          const zD = this.glbTakenCount.get(DD.word),
            pD = nD(await this.sources.glbUrl(DD.word), DD);
          try {
            wD = QD(await this.fetchFile(pD))
          } catch (sD) {
            throw new KD.d("fetch", pD, {
              cause: sD
            })
          }
          this.glbTakenCount.get(DD.word) === zD && this.glbImages.set(DD.word, wD)
        }
        const pD = null === (zD = wD) || void 0 === zD ? void 0 : zD[DD.index];
        if (!pD) throw new KD.d("decode", `image ${DD.index} of file ${2147483647&DD.word}`, {
          cause: null
        });
        return pD
      }
    }

    function hD(DD) {
      let {
        kind: zD,
        index: wD,
        word: pD
      } = DD;
      return `${zD}:${wD}:${pD}`
    }

    function nD(DD, zD) {
      if (null === DD) throw new KD.d("fetch", `no URL for image ${hD(zD)}`, {
        cause: null
      });
      return DD
    }

    function MD(DD, zD, wD) {
      var pD, sD, KD;
      const rD = new Uint8Array(16),
        LD = new DataView(rD.buffer);
      return LD.setUint8(0, DD.kind), LD.setUint8(1, DD.index), LD.setUint8(2, zD), LD.setUint32(4, DD.word, !0), LD.setUint32(8, null !== (pD = null === wD || void 0 === wD ? void 0 : wD.id) && void 0 !== pD ? pD : 0, !0), LD.setUint16(12, Math.min(null !== (sD = null === wD || void 0 === wD ? void 0 : wD.width) && void 0 !== sD ? sD : 0, 65535), !0), LD.setUint16(14, Math.min(null !== (KD = null === wD || void 0 === wD ? void 0 : wD.height) && void 0 !== KD ? KD : 0, 65535), !0), rD
    }
    const OD = 1179937895,
      JD = 1313821514,
      ED = 5130562;

    function QD(DD) {
      var zD;
      const wD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      if (DD.byteLength < 20 || wD.getUint32(0, !0) !== OD || wD.getUint32(16, !0) !== JD) return [];
      let pD, sD = 20 + wD.getUint32(12, !0);
      try {
        pD = JSON.parse((new TextDecoder).decode(DD.subarray(20, sD)))
      } catch {
        return []
      }
      for (; sD + 8 <= DD.byteLength && wD.getUint32(sD + 4, !0) !== ED;) sD += 8 + wD.getUint32(sD, !0);
      const KD = null !== (zD = pD.images) && void 0 !== zD ? zD : [];
      if (0 === KD.length || sD + 8 > DD.byteLength) return KD.map((() => null));
      const rD = DD.subarray(sD + 8, Math.min(DD.byteLength, sD + 8 + wD.getUint32(sD, !0)));
      return KD.map((DD => {
        var zD, wD, sD;
        const KD = void 0 === DD.bufferView || null === (zD = pD.bufferViews) || void 0 === zD ? void 0 : zD[DD.bufferView];
        if (!KD || 0 !== (null !== (wD = KD.buffer) && void 0 !== wD ? wD : 0) || void 0 === KD.byteLength) return null;
        const LD = null !== (sD = KD.byteOffset) && void 0 !== sD ? sD : 0,
          cD = LD + KD.byteLength;
        return cD <= rD.byteLength ? rD.slice(LD, cD) : null
      }))
    }
  },
  40582: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      i: () => KD,
      m: () => sD
    });
    let pD = null;

    function sD(DD) {
      pD = DD
    }

    function KD(DD) {
      pD === DD && (pD = null)
    }

    function rD() {
      var DD;
      null === (DD = pD) || void 0 === DD || DD()
    }
  },
  36575: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      h: () => UD,
      j: () => hD,
      n: () => gD
    });
    var pD = wD(20),
      sD = wD(2382),
      KD = wD(2389),
      rD = wD(2394),
      LD = wD(2471),
      cD = wD(25);

    function gD(DD, zD) {
      return (!(0, rD.b)() || 0 === DD && 0 === zD) && (0, KD.u)(sD.h.Joystick, 0, DD, zD, 0)
    }
    const RD = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function AD(DD) {
      return DD.classList.contains("TouchKeyHit") && fD() ? null : DD.firstElementChild
    }

    function UD(DD) {
      return DD.classList.contains("TouchKeyHit") && !DD.classList.contains("CanvasZone") ? {
        whole: !fD(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: ID(AD(DD))
      }
    }

    function fD() {
      return document.documentElement.classList.contains(LD.i)
    }

    function ID(DD) {
      return !(DD instanceof HTMLElement) || DD.offsetWidth <= 0 || DD.offsetHeight <= 0 ? null : {
        width: DD.offsetWidth,
        height: DD.offsetHeight
      }
    }

    function BD(DD, zD) {
      const wD = DD => Math.min(65535, Math.round(4 * DD));
      return (wD(DD) | wD(zD) << 16) >>> 0
    }

    function GD(DD) {
      return {
        x: DD.left + DD.width / 2,
        y: DD.top + DD.height / 2,
        radius: Math.min(DD.width, DD.height) / 2
      }
    }
    const hD = new class {
      constructor(DD) {
        this.write = DD, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        zD ? this.elements.set(DD, {
          element: zD,
          hidden: wD
        }) : this.elements.delete(DD), this.measureOne(DD)
      }
      measure() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = DD.left, this.canvasTop = DD.top;
        for (const zD of this.elements.keys()) this.measureOne(zD)
      }
      hitZone(DD, zD) {
        let wD = null,
          pD = 1;
        for (const sD of this.elements.keys()) {
          const KD = this.shown(sD);
          if (!KD) continue;
          const {
            rect: rD,
            element: LD
          } = KD, cD = GD(rD), gD = Math.max(0, rD.width / 2 - cD.radius), RD = Math.max(0, rD.height / 2 - cD.radius), UD = Math.max(0, Math.abs(DD - cD.x) - gD), fD = Math.max(0, Math.abs(zD - cD.y) - RD), BD = LD.firstElementChild;
          let hD = Math.hypot(UD, fD) / cD.radius;
          const nD = ID(AD(LD));
          nD && (hD = Math.min(hD, Math.max(2 * Math.abs(DD - cD.x) / nD.width, 2 * Math.abs(zD - cD.y) / nD.height))), hD < pD && (wD = {
            code: sD,
            element: LD,
            key: BD,
            ...cD
          }, pD = hD)
        }
        return wD
      }
      measureOne(DD) {
        const zD = this.shown(DD);
        if (!zD) return void this.write(sD.h.TouchZone, DD, 0, 0, 0);
        const {
          rect: wD,
          element: pD
        } = zD, KD = GD(wD);
        this.write(sD.h.TouchZone, DD, KD.x - this.canvasLeft, KD.y - this.canvasTop, BD(wD.width, wD.height));
        const rD = ID(AD(pD));
        this.write(sD.h.TouchZone, 256 | DD, 0, 0, rD ? BD(rD.width, rD.height) : 0)
      }
      shown(DD) {
        const zD = this.elements.get(DD),
          wD = pD.e.get("worldPanelHud");
        if (!zD || zD.hidden || "none" === wD) return null;
        const sD = zD.element.getBoundingClientRect();
        return sD.width <= 0 || sD.height <= 0 ? null : {
          rect: sD,
          element: zD.element
        }
      }
    }(KD.u);
    (0, cD.o)(LD.f, (() => {
      hD.measure()
    }))
  },
  40622: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => cD,
      e: () => gD
    });
    var pD = wD(40752),
      sD = wD(39029),
      KD = wD(36463),
      rD = wD(40630),
      LD = wD(40603);
    const cD = pD.b.timeForPlayerToConnect - 1e4;
    async function gD(DD, zD, wD, pD) {
      let cD;
      try {
        cD = await DD.getTrafficCode()
      } catch (ID) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", ID), new LD.u(ID)
      }
      const {
        gameNameWithVariation: gD,
        lobbyName: RD
      } = zD, AD = () => {
        const zD = (0, KD.d)(DD, gD, RD, cD, (DD => {
          var zD;
          return null !== (zD = null === wD || void 0 === wD ? void 0 : wD.isUsingCustomGameTexturePack(DD)) && void 0 !== zD && zD
        }));
        zD.joinOptions.wasmClient = !0;
        const sD = (0, rD.A)();
        return null !== sD && (zD.joinOptions.renderBackend = sD), zD.joinOptions.joinAdHold = pD, zD
      }, {
        roomName: UD,
        joinOptions: fD
      } = AD();
      return {
        endpoint: zD.endpoint,
        roomName: UD,
        joinOptions: fD,
        session: {
          gameNameWithVariation: gD,
          lobbyName: RD,
          playerDbId: DD.whamm
        },
        optionsAfterRefusal: async zD => await (0, sD.e)(DD, zD) ? AD().joinOptions : null
      }
    }
  },
  40874: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD,
      g: () => KD,
      h: () => AD,
      i: () => rD
    });
    var pD = wD(40852),
      sD = wD(40710);
    const KD = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(DD) {
        this.change((() => {
          this.page = DD
        }))
      }
      setSessionFiles(DD) {
        const zD = void 0 !== this.session && void 0 === DD;
        if (this.change((() => {
            this.session = DD
          })), zD)
          for (const wD of [...this.pageListeners]) wD()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(DD) {
        return this.pageListeners.add(DD), () => {
          this.pageListeners.delete(DD)
        }
      }
      setFollower(DD) {
        this.follower = DD, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const DD of [...this.wantedListeners]) DD();
        this.startFollower()
      }
      onWanted(DD) {
        return this.wantedListeners.add(DD), () => {
          this.wantedListeners.delete(DD)
        }
      }
      onChange(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      startFollower() {
        const DD = this.follower;
        this.isWanted && null !== DD && (this.follower = null, DD((() => {
          this.follower = DD
        })))
      }
      change(DD) {
        const zD = this.current;
        if (DD(), this.current !== zD)
          for (const wD of this.listeners) wD()
      }
    };

    function rD(DD, zD) {
      return {
        ...DD,
        armourAtlasUrl: () => {
          var wD, pD;
          return null !== (wD = null === (pD = zD()) || void 0 === pD ? void 0 : pD.armourAtlasUrl()) && void 0 !== wD ? wD : DD.armourAtlasUrl()
        },
        lifeformAtlasUrl: wD => cD(zD(), (DD => DD.LIFEFORM_ATLAS_PATHS[wD]), (() => DD.lifeformAtlasUrl(wD))),
        groupAtlasUrl: wD => cD(zD(), (DD => DD.GROUP_ATLAS_PATHS[wD]), (() => DD.groupAtlasUrl(wD))),
        particleItemUrl: pD => gD(zD(), (async () => {
          const DD = await wD.e(38).then((() => wD(50846))).catch((() => null));
          return (null === DD || void 0 === DD ? void 0 : DD.particleItemSprite(pD)) || null
        }), (() => DD.particleItemUrl(pD))),
        blockImageUrl: wD => gD(zD(), (async () => {
          var DD, zD;
          return null !== (DD = null === (zD = await LD()) || void 0 === zD ? void 0 : zD.blockImageName(wD)) && void 0 !== DD ? DD : null
        }), (() => DD.blockImageUrl(wD)))
      }
    }

    function LD() {
      return (0, sD.n)().catch((() => null))
    }

    function cD(DD, zD, wD) {
      return gD(DD, (async () => {
        var DD;
        const wD = await LD(),
          pD = null === wD ? null : zD(wD),
          sD = null !== (DD = null === pD || void 0 === pD ? void 0 : pD.slice(pD.lastIndexOf("/") + 1)) && void 0 !== DD ? DD : null;
        return "Player_Atlas" === sD ? null : sD
      }), wD)
    }
    async function gD(DD, zD, wD) {
      if (null !== DD) {
        const wD = await zD(),
          pD = null === wD ? null : DD.textureUrl(wD);
        if (null !== pD) return pD
      }
      return wD()
    }
    const RD = 0;

    function AD(DD) {
      const zD = [pD.f.ArmourAtlas, pD.f.LifeformAtlas, pD.f.GroupAtlas, pD.f.BlockImage, pD.f.Particle];
      DD.reload(zD, (DD => {
        switch (DD.kind) {
          case pD.f.Particle:
            return DD.index === pD.h.Item;
          case pD.f.LifeformAtlas:
            return DD.word !== RD;
          default:
            return !0
        }
      }))
    }
  },
  40760: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD,
      e: () => LD,
      g: () => rD,
      j: () => sD,
      l: () => KD
    });
    const pD = 1e3;

    function sD() {
      cD((() => {
        window.location.reload()
      }))
    }

    function KD() {
      return new Promise((() => {}))
    }

    function rD(DD) {
      cD((() => {
        window.location.replace(DD(window.location.href))
      }))
    }

    function LD(DD) {
      Promise.resolve().then((() => wD(113))).then((zD => {
        let {
          currentUrl: wD
        } = zD;
        rD((() => wD.mergeSearchParamsInto(DD)))
      }), (() => {
        rD((() => DD))
      }))
    }

    function cD(DD) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => wD(1737))).then((zD => {
        let {
          prepareForUnloadWithoutConfirmation: wD
        } = zD;
        try {
          wD()
        } catch (pD) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", pD), window.onbeforeunload = null
        }
        DD()
      }), (() => {
        window.onbeforeunload = null, DD()
      })) : DD()
    }
  },
  5099: (DD, zD, wD) => {
    function pD(DD, zD) {
      return sD(DD, zD)
    }

    function sD(DD, zD) {
      if (DD === zD) return !0;
      if ("object" !== typeof DD || "object" !== typeof zD || null === DD || null === zD || Array.isArray(DD) !== Array.isArray(zD)) return !1;
      const wD = DD,
        pD = zD,
        KD = Object.keys(wD);
      return KD.length === Object.keys(pD).length && KD.every((DD => Object.prototype.hasOwnProperty.call(pD, DD) && sD(wD[DD], pD[DD])))
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  40825: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => ED,
      f: () => OD,
      j: () => BD,
      l: () => ID
    });
    var pD = wD(1819),
      sD = wD(1217),
      KD = wD(39020),
      rD = wD(36486),
      LD = wD(39042),
      cD = wD(40603);
    const gD = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      RD = 3,
      AD = [500, 1500];

    function UD(DD) {
      const zD = new URL(DD);
      return {
        secure: "https:" === zD.protocol || "wss:" === zD.protocol,
        host: zD.host,
        pathname: zD.pathname.replace(/\/+$/, ""),
        search: zD.searchParams.toString()
      }
    }

    function fD(DD, zD, wD) {
      const {
        secure: pD,
        host: sD,
        pathname: KD,
        search: rD
      } = UD(DD);
      return `${pD?"https":"http"}://${sD}${KD}/matchmake/${zD}/${encodeURIComponent(wD)}${rD?`?${rD}`:""}`
    }

    function ID(DD, zD) {
      var wD;
      const pD = null !== (wD = zD.protocol) && void 0 !== wD ? wD : "ws";
      if ("ws" !== pD) throw new Error(`seat reservation asks for the ${pD} transport`);
      const {
        secure: sD,
        host: KD,
        pathname: rD,
        search: LD
      } = UD(DD), cD = new URLSearchParams(LD);
      cD.append("sessionId", zD.sessionId), zD.reconnectionToken && cD.append("reconnectionToken", zD.reconnectionToken);
      return `${sD?"wss":"ws"}://${zD.room.publicAddress||`${KD}${rD}`}/${zD.room.processId}/${zD.room.roomId}?${cD.toString()}`
    }
    async function BD(DD, zD, wD) {
      var LD;
      let gD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const UD = null !== (LD = gD.sleep) && void 0 !== LD ? LD : pD.e,
        ID = new sD.c(gD.signal),
        BD = new rD.b((() => {
          (0, sD.e)(ID.controller, new rD.c("seat"))
        })),
        {
          signal: MD
        } = ID;
      try {
        const pD = await (0, KD.h)((() => async function(DD, zD, wD, pD) {
          var KD;
          const {
            signal: rD,
            sleep: LD
          } = pD, gD = fD(DD, "joinOrCreate", zD), UD = JSON.stringify(wD);
          let ID = null;
          for (let fD = 0; fD < RD; fD++) {
            var BD;
            if (fD > 0) await LD(null !== (BD = AD[fD - 1]) && void 0 !== BD ? BD : 1500, rD);
            let DD;
            (0, sD.h)(rD);
            try {
              DD = await hD(gD, UD, pD)
            } catch (MD) {
              (0, sD.h)(rD), ID = GD(MD);
              continue
            }
            const {
              response: zD,
              answer: wD,
              refusal: KD,
              lost: RD
            } = DD;
            if (null === RD) {
              if (null !== KD) throw nD(KD, wD);
              if (zD.ok && null !== wD && QD(wD)) return wD;
              ID = new cD.s(`seat request answered HTTP ${zD.status}${null===wD?" without JSON":" without a seat"}`, !1, void 0, zD.status)
            } else ID = GD(RD.error)
          }
          throw null !== (KD = ID) && void 0 !== KD ? KD : new cD.s("seat request made no attempt", !1)
        }(DD, zD, wD, {
          ...gD,
          signal: MD,
          sleep: UD
        })), MD, UD);
        return BD.answered(), pD
      } finally {
        BD.stop(), ID.unfollow()
      }
    }

    function GD(DD) {
      return new cD.s(DD instanceof Error ? DD.message : String(DD), !0, DD)
    }
    async function hD(DD, zD, wD) {
      var pD;
      const {
        signal: KD
      } = wD, rD = null !== (pD = wD.fetch) && void 0 !== pD ? pD : fetch, LD = await rD(DD, {
        method: "POST",
        headers: {
          ...gD,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: zD,
        credentials: "include",
        signal: KD
      }), {
        answer: cD,
        lost: RD
      } = await async function(DD) {
        try {
          const zD = await DD.json();
          return {
            answer: "object" === typeof zD && null !== zD ? zD : null,
            lost: null
          }
        } catch (zD) {
          return {
            answer: null,
            lost: zD instanceof SyntaxError ? null : {
              error: zD
            }
          }
        }
      }(LD), AD = null !== cD && "string" === typeof cD.error ? cD.error : null;
      var UD;
      null !== AD && (null === (UD = wD.onRefusal) || void 0 === UD || UD.call(wD));
      return (0, sD.h)(KD), {
        response: LD,
        answer: cD,
        refusal: AD,
        lost: RD
      }
    }

    function nD(DD, zD) {
      return new cD.l(DD, "number" === typeof(null === zD || void 0 === zD ? void 0 : zD.code) ? zD.code : 0, (0, LD.p)(DD).text)
    }
    class MD extends Error {
      constructor(DD, zD) {
        super(DD), this.code = zD, this.name = "SeatHttpError"
      }
    }
    async function OD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: sD,
        answer: KD,
        refusal: rD,
        lost: LD
      } = await hD(fD(DD, "reconnect", zD), JSON.stringify({
        reconnectionToken: wD
      }), pD);
      if (null !== LD) throw LD.error;
      if (!sD.ok) {
        const DD = null !== KD && "number" === typeof KD.code && 0 !== KD.code ? KD.code : sD.status;
        throw new MD(`the seat's reconnect was refused: ${null!==rD&&void 0!==rD?rD:`HTTP ${sD.status}`}`, DD)
      }
      if (null !== rD) throw nD(rD, KD);
      if (null === KD || !QD(KD)) throw new Error("the seat's reconnect answered " + (null === KD ? "without JSON" : "without a seat"));
      return {
        ...KD,
        reconnectionToken: wD
      }
    }
    const JD = 10;

    function ED(DD) {
      if (DD.byteLength < 2 || DD[0] !== JD) return null;
      const zD = 2 + DD[1];
      return zD > DD.byteLength ? null : (new TextDecoder).decode(DD.subarray(2, zD))
    }

    function QD(DD) {
      const zD = DD.room;
      return "string" === typeof DD.sessionId && "object" === typeof zD && null !== zD && "string" === typeof zD.roomId && "string" === typeof zD.processId && "string" === typeof zD.name
    }
  },
  40522: (DD, zD, wD) => {
    wD.d(zD, {
      $: () => nD,
      A: () => VD,
      B: () => QD,
      E: () => TD,
      F: () => OD,
      J: () => JD,
      N: () => GD,
      Q: () => PD,
      U: () => jD,
      Y: () => ID,
      _: () => SD,
      ab: () => hD,
      d: () => sD,
      e: () => dD,
      eb: () => MD,
      fb: () => ED,
      i: () => bD,
      l: () => fD,
      m: () => BD,
      p: () => xD,
      s: () => XD,
      w: () => CD
    });
    var pD = wD(2980);
    const sD = {
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

    function KD(DD, zD) {
      return !ArrayBuffer.isView(DD) || DD instanceof DataView ? Array.isArray(DD) ? DD.map((DD => zD(DD))) : DD : Array.from(DD, (DD => zD(DD)))
    }

    function rD(DD) {
      if ("string" !== typeof DD) return DD;
      for (let zD = 0; zD < DD.length; zD++) {
        const wD = DD.charCodeAt(zD);
        if (wD >= 55296 && wD <= 57343) return cD.decode(LD.encode(DD))
      }
      return DD
    }
    const LD = new TextEncoder,
      cD = new TextDecoder;

    function gD(DD) {
      return DD
    }
    let RD;

    function AD(DD) {
      return null === DD || "object" !== typeof DD ? DD : [rD(DD.Dg), rD(DD.zg)]
    }

    function UD(DD) {
      return null === DD || "object" !== typeof DD ? DD : [KD(DD.jp, gD), KD(DD.Or, gD)]
    }

    function fD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.lg), rD(zD.Wg)];
      var zD
    }

    function ID(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [zD.id, zD.VR];
      var zD
    }

    function BD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [zD.zr, rD(zD.wr), zD.sr, rD(zD.Lr), zD.Ir, zD.Br, zD.wL, rD(zD.pL), rD(zD.sL)];
      var zD
    }

    function GD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [KD(zD.UR, gD), zD.fR];
      var zD
    }

    function hD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [KD(zD.Xg, (DD => rD(DD))), rD(zD.Vg), zD.Pg];
      var zD
    }

    function nD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [KD(zD.qr, gD), rD(zD.DL), zD.zL];
      var zD
    }

    function MD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.Pp), rD(zD.Cp)];
      var zD
    }

    function OD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.gL)];
      var zD
    }

    function JD(DD) {
      return rD(DD)
    }

    function ED(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.DR), rD(zD.zR), rD(zD.Dg), rD(zD.zg)];
      var zD
    }

    function QD(DD) {
      return AD(DD)
    }

    function XD(DD) {
      return AD(DD)
    }

    function VD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.Mr)];
      var zD
    }

    function PD(DD) {
      return DD
    }

    function CD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.kr), rD(zD.mr)];
      var zD
    }

    function xD(DD) {
      return rD(DD)
    }

    function TD(DD) {
      return UD(DD)
    }

    function bD(DD) {
      return UD(DD)
    }

    function jD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.wR)];
      var zD
    }

    function dD(DD) {
      return (RD ??= (0, pD.f)().map((DD => DD.name)), RD).map((zD => {
        return "string" === typeof(wD = DD[zD]) ? rD(wD) : KD(wD, gD);
        var wD
      }))
    }

    function SD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [zD.ag, zD.ug, zD.vg];
      var zD
    }
  },
  40878: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD
    });
    var pD = wD(40883),
      sD = wD(40874);
    const KD = new class {
      constructor(DD) {
        this.pack = DD, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, DD.onWanted((() => {
          this.release()
        }))
      }
      setGame(DD) {
        if (void 0 === DD && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const zD = this.inGame();
        if (this.game = DD, this.update(), this.inGame() !== zD)
          for (const wD of this.gameListeners) wD()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(DD) {
        return this.gameListeners.add(DD), () => {
          this.gameListeners.delete(DD)
        }
      }
      unwantedLeave(DD) {
        DD && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(DD) {
        null !== DD && DD === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const DD = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, DD && this.setGame(void 0)
      }
      setSettled(DD) {
        this.settle = DD, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, pD.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(sD.g)
  },
  5097: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      g: () => LD
    });
    var pD = wD(2130),
      sD = wD(5099);
    let KD = null;

    function rD(DD) {
      KD = {
        pack: DD.metaData.id === pD.c ? null : DD
      }
    }

    function LD(DD) {
      return !(null === KD || !(0, sD.c)(KD.pack, DD)) && (KD = null, !0)
    }
  },
  40590: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      followPageUiPack: () => UR,
      packForGame: () => AR,
      playWasmGame: () => XR,
      prefetchWasmPreviews: () => Gc,
      setGamePackConfirm: () => Xg,
      startWasmPlay: () => hR,
      startWasmPreviews: () => Bc
    });
    var pD = wD(197),
      sD = wD(1251),
      KD = wD(157),
      rD = wD(39055),
      LD = wD(1925),
      cD = wD(25),
      gD = wD(4702),
      RD = wD(1324),
      AD = wD(1727),
      UD = wD(1332),
      fD = wD(39212),
      ID = wD(1309),
      BD = wD(39225),
      GD = wD(39124),
      hD = wD(36467),
      nD = wD(39020),
      MD = wD(8901),
      OD = wD(36486),
      JD = wD(40598),
      ED = wD(4800),
      QD = wD(40516),
      XD = wD(40578),
      VD = wD(40522);
    const PD = {
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

    function CD(DD) {
      const zD = {
        ...XD.b[DD]
      };
      for (const wD of Object.keys(PD[DD])) delete zD[wD];
      return zD
    }

    function xD() {
      var DD, zD;
      return null === (DD = null === (zD = (0, QD.i)()) || void 0 === zD ? void 0 : zD.localPlayerAlive()) || void 0 === DD || DD
    }

    function TD() {
      var DD, zD;
      return null !== (DD = null === (zD = (0, QD.i)()) || void 0 === zD ? void 0 : zD.localDeaths()) && void 0 !== DD ? DD : null
    }
    const bD = {
        current: xD,
        watch: DD => {
          let zD = xD(),
            wD = TD();
          return (0, ED.v)((() => {
            const pD = xD(),
              sD = TD(),
              KD = null !== sD && null !== wD && sD !== wD;
            wD = sD, KD ? (zD || DD(!0), DD(!1), pD && DD(!0), zD = pD) : pD !== zD && (zD = pD, DD(pD))
          }))
        }
      },
      jD = {
        states: {
          ...CD("states"),
          localPlayerAlive: bD
        },
        events: {
          ...CD("events"),
          localPlayerAliveSet: {
            watch: bD.watch
          }
        },
        commands: {
          ...CD("commands"),
          respawn: () => {
            var DD;
            null === (DD = (0, QD.i)()) || void 0 === DD || DD.respawn()
          },
          playEmote: DD => {
            var zD;
            null === (zD = (0, QD.i)()) || void 0 === zD || zD.send(VD.d.PlayEmote, (0, VD.F)({
              gL: DD
            }))
          },
          applyTemporaryThirdPerson: DD => {
            var zD;
            let {
              durationMs: wD
            } = DD;
            null === (zD = (0, QD.i)()) || void 0 === zD || zD.thirdPersonFor(wD)
          },
          bindCustomButtonKeys: DD => {
            var zD;
            null === (zD = (0, QD.i)()) || void 0 === zD || zD.bindCustomButtonKeys(DD)
          },
          pressCustomButton: DD => {
            var zD;
            let {
              id: wD,
              down: pD
            } = DD;
            null === (zD = (0, QD.i)()) || void 0 === zD || zD.pressCustomButton(wD, pD)
          },
          setLookSensitivity: () => {},
          wakeUp: DD => {
            const zD = (0, VD.U)({
                wR: DD
              }),
              wD = () => {
                const DD = (0, QD.i)();
                return !(null !== DD && void 0 !== DD && DD.isSessionLive) || DD.send(VD.d.StopSleeping, zD)
              };
            if (!wD()) {
              const DD = (0, ED.v)((() => {
                wD() && DD()
              }))
            }
          },
          setCameraZoom: DD => {
            var zD;
            null === (zD = (0, QD.i)()) || void 0 === zD || zD.setCameraZoom(DD)
          }
        },
        queries: CD("queries"),
        lookups: {
          ...CD("lookups"),
          cameraZoom: () => {
            var DD, zD;
            return null !== (DD = null === (zD = (0, QD.i)()) || void 0 === zD ? void 0 : zD.cameraZoom()) && void 0 !== DD ? DD : 0
          }
        }
      };
    var dD = wD(39042),
      SD = wD(40603),
      iD = wD(40610),
      lD = wD(40622),
      WD = wD(1265),
      ND = wD(113),
      ZD = wD(4540),
      yD = wD(3736),
      kD = wD(1170);
    const mD = {
      oR: () => (0, WD.e)(),
      inbuiltOverwritten: () => ZD.e,
      reflectApplyHit: () => kD.b,
      definerHit: () => ND.currentUrl.c,
      emitReplaced: () => (0, cD.d)(),
      confirmMesh: () => (0, yD.c)(),
      confirmMeshHitStack: () => (0, yD.e)()
    };
    var eD = wD(40615),
      oD = wD(40760);
    var aD = wD(20),
      uD = wD(1932),
      vD = wD(1981),
      tD = wD(1657),
      FD = wD(2015),
      YD = wD(1200),
      HD = wD(1260),
      qD = wD(40769);

    function Dz() {
      return HD.e.get().getCurrentLanguageCode()
    }

    function zz(DD) {
      const zD = () => {
        DD({
          translate: (DD, zD) => (0, YD.w)(Dz(), DD, zD),
          keyBindingText: DD => {
            const zD = (0, vD.q)(DD, aD.e.get("isTouchScreen"));
            return null !== zD ? (0, YD.z)(Dz(), zD.translationKey, zD.params) : (0, vD.m)((0, vD.p)(DD))
          },
          isFriend: FD.e,
          hiddenNames: uD.d.shown,
          loadsFontRest: (0, qD.d)(Dz())
        })
      };
      let wD = !1;
      const pD = () => {
          const DD = Dz();
          (0, YD.j)(DD).then((() => {
            wD || DD !== Dz() || zD()
          }))
        },
        sD = () => tD.e.getSocialState().friends.map((DD => DD.name.toLowerCase())).sort().join(" ");
      let KD = sD();
      zD(), pD();
      const rD = [(0, HD.h)((() => {
        zD(), pD()
      })), (0, cD.o)("customBindingsChanged", zD), (0, cD.o)("appManagerUpdated|isTouchScreen", zD), (0, FD.c)((() => {
        const DD = sD();
        DD !== KD && (KD = DD, zD())
      })), uD.d.subscribe(zD)];
      return () => {
        wD = !0;
        for (const DD of rD) DD()
      }
    }
    var wz = wD(625),
      pz = wD(1008),
      sz = wD(1962),
      Kz = wD(338),
      rz = wD(186),
      Lz = wD(2861),
      cz = wD(2868),
      gz = wD(38704),
      Rz = wD(4722),
      Az = wD(40780),
      Uz = wD(676),
      fz = wD(638),
      Iz = wD(688),
      Bz = wD(690),
      Gz = wD(1956),
      hz = wD(3744),
      nz = wD(3282);
    let Mz = null;
    var Oz = wD(1211),
      Jz = wD(1217),
      Ez = wD(4460),
      Qz = wD(3458),
      Xz = wD(51),
      Vz = wD(330),
      Pz = wD(323),
      Cz = wD(40796),
      xz = wD(4808);
    var Tz = wD(37678),
      bz = wD(40799);
    class jz {
      constructor(DD, zD) {
        this.showView = DD, this.holdForAd = zD
      }
      pointerUnlockRequestsChanged() {
        (0, Cz.x)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, Cz.m)())
        }]
      }
      setGameViewShown(DD) {
        this.showView(DD)
      }
      setGameView(DD) {
        (0, bz.i)(DD)
      }
      videoAdHold(DD, zD) {
        this.holdForAd(DD, zD)
      }
    }
    class dz {
      leave(DD) {
        ! function(DD) {
          if (null !== (0, UD.c)().websocketUrl) try {
            (0, ED.G)().leaveGame(DD)
          } finally {
            (0, UD.q)({
              websocketUrl: null
            })
          }
        }(DD)
      }
      isReplay() {
        return !1
      }
    }
    class Sz {
      watchFrameStarts(DD) {
        return (0, ED.q)(DD)
      }
      watchFrames(DD) {
        return (0, ED.p)(DD)
      }
      watchTicks(DD) {
        return (0, ED.v)(DD)
      }
    }
    var iz = wD(40801);

    function lz(DD) {
      return DD >= 0 ? Math.min(1, DD) : 0
    }

    function Wz(DD, zD) {
      const {
        fade: wD
      } = DD;
      return null === wD || zD - wD.at >= wD.ms ? DD.volume : wD.from + (DD.volume - wD.from) * Math.max(0, (zD - wD.at) / wD.ms)
    }

    function Nz(DD) {
      const zD = Object.entries(DD),
        wD = new Uint32Array(zD.length);
      let pD = 0;
      for (const [rD, [, LD]] of zD.entries()) wD[rD] = LD.length, pD += LD.length;
      const sD = new Float64Array(3 * pD);
      let KD = 0;
      for (const [, rD] of zD)
        for (const DD of rD) sD.set(DD, KD), KD += 3;
      return {
        blocks: zD.map((DD => {
          let [zD] = DD;
          return zD
        })).join("\0"),
        counts: wD,
        values: sD
      }
    }
    class Zz {
      constructor(DD, zD) {
        this.core = DD, this.warn = zD, this.latest = 0
      }
      async feed() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yz;
        const zD = ++this.latest;
        let wD;
        try {
          wD = await DD()
        } catch (pD) {
          return void(this.core.isStopped || zD !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", pD))
        }
        zD === this.latest && (this.core.setBlockColours(wD) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function yz() {
      return Nz((await wD.e(204).then((() => wD(34299)))).averageColors)
    }
    var kz = wD(4817),
      mz = wD(4820),
      ez = wD(40562),
      oz = wD(3219),
      az = wD(36244),
      uz = wD(40659),
      vz = wD(616),
      tz = wD(37037),
      Fz = wD(608),
      Yz = wD(351),
      Hz = wD(40645);
    const qz = [3e4, 12e4, 3e5];
    class Dw extends Error {}
    const zw = {
      mobTypes: vz.n,
      vehicleTypes: tz.d,
      mobAiStates: vz.l,
      playerPoses: Fz.p
    };
    var ww = wD(40634),
      pw = wD(40686),
      sw = wD(1075),
      Kw = wD(40809),
      rw = wD(40818),
      Lw = wD(2962),
      gw = wD(39008),
      Rw = wD(4832),
      Aw = wD(2382);
    const Uw = Aw.s.KeysDisabled | Aw.s.LookFrozen | Aw.s.ClicksSuppressed,
      fw = Lw.h;
    var Iw = (0, rw.c)("resumingConn");
    class Bw {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = DD, this.now = zD, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, Iw, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new gw.e({
          reconnect: DD => this.reconnect(DD),
          isLive: () => DD.isLive(),
          onReconnected: zD => {
            this.landed = zD, DD.onReconnected(zD), this.landIfResumed()
          },
          onGaveUp: (zD, wD) => {
            this.abortAttempt(), DD.onGaveUp(zD, wD)
          },
          freeze: zD => {
            DD.YC(zD), (0, Rw.j)(Uw, zD ? Uw : 0, "reconnectFreeze")
          },
          releaseSeat: DD => {
            this.releaseSeat(DD)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Kw.e)(this, Iw)[Iw]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(DD) {
        let {
          conn: zD,
          graceMs: wD,
          sessionBased: pD,
          replayOffer: sD
        } = DD;
        this.session.onInitialInfo(wD, pD), this.isResuming() && (this.initialInfoConn = zD, this.initialInfoOffer = sD, this.landIfResumed())
      }
      onResumeComplete(DD) {
        0 !== DD && (DD === (0, Kw.e)(this, Iw)[Iw] ? ((0, Kw.e)(this, Iw)[Iw] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = DD))
      }
      onDropped(DD) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Kw.e)(this, Iw)[Iw] = 0, this.session.onConnectionLost(DD)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Kw.e)(this, Iw)[Iw] = 0, this.session.end()
      }
      reconnect(DD) {
        const zD = this.attempt;
        if (null !== zD && this.awaitingJoinRoom(zD)) return zD.result;
        this.abortAttempt();
        const wD = new AbortController,
          pD = this.drops,
          sD = {
            attachedAt: null
          },
          KD = this.shell.reconnect(DD, wD.signal, (() => {
            sD.attachedAt = this.now()
          })).then((DD => {
            if (this.clearAttempt(rD), this.drops !== pD) throw new Error("the resumed room dropped before its attempt settled");
            return DD
          }), (DD => {
            throw this.clearAttempt(rD), DD
          })),
          rD = {
            abort: wD,
            socket: sD,
            result: KD
          };
        return this.attempt = rD, KD
      }
      clearAttempt(DD) {
        this.attempt === DD && (this.attempt = null)
      }
      abortAttempt() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const zD = this.attempt;
        this.attempt = null, null === zD || void 0 === zD || zD.abort.abort(DD)
      }
      awaitingJoinRoom(DD) {
        const zD = DD.socket.attachedAt;
        return null !== zD && this.now() - zD < fw
      }
      releaseSeat(DD) {
        const zD = this.attempt,
          wD = null !== zD && this.awaitingJoinRoom(zD);
        this.abortAttempt(new SD.q), wD || this.shell.releaseSeat(DD)
      }
      landIfResumed() {
        const DD = this.landed;
        if (null !== DD && DD.conn === this.initialInfoConn) {
          const zD = this.initialInfoOffer && this.completedEarlyConn !== DD.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !zD) return void this.session.onResumed();
          (0, Kw.e)(this, Iw)[Iw] = DD.conn, this.session.onResuming()
        }
      }
    }
    var Gw = wD(39014),
      hw = wD(40825),
      nw = wD(36476),
      Mw = wD(36473),
      Ow = wD(2130),
      Jw = wD(1886),
      Ew = wD(4328),
      Qw = wD(40666),
      Xw = wD(5097);

    function Vw(DD) {
      let {
        pack: zD,
        gameSource: wD
      } = DD;
      if (null !== wD && "" !== wD) return `game:${wD}`;
      if (null === zD) return "default";
      const {
        id: pD,
        version: sD
      } = zD.metaData;
      if (pD !== Ow.m.CUSTOM) return `${pD}@${sD}`;
      const KD = [];
      for (const rD of [zD.textureOverrides, zD.modelOverrides, zD.animations])
        for (const [DD, zD] of Object.entries(null !== rD && void 0 !== rD ? rD : {})) KD.push(`${DD}:${zD.length}`);
      return `${pD}:${(0,Jw.u)(KD.join())}`
    }
    var Pw = wD(4445),
      Cw = wD(3243),
      xw = wD(40833),
      Tw = wD(640),
      bw = wD(3247),
      jw = wD(4518),
      dw = wD(35),
      Sw = wD(40724),
      iw = wD(4472),
      lw = wD(2389),
      Ww = wD(1648),
      Nw = wD(1681),
      Zw = wD(1299),
      yw = wD(116),
      kw = wD(311),
      mw = wD(39052),
      ew = wD(2394),
      ow = wD(4827);
    const aw = new Set([kz.nb.KeyDown, kz.nb.MouseMove, kz.nb.MouseDown, kz.nb.Wheel, kz.nb.TouchStart, kz.nb.TouchMove]);

    function uw(DD) {
      return (DD.shiftKey ? kz.Pb.Shift : 0) | (DD.ctrlKey ? kz.Pb.Ctrl : 0) | (DD.altKey ? kz.Pb.Alt : 0) | (DD.metaKey ? kz.Pb.Meta : 0) | ("repeat" in DD && DD.repeat ? kz.Pb.Repeat : 0) | (DD.isTrusted ? 0 : kz.Pb.Untrusted | function(DD) {
        try {
          const {
            editable: zD,
            outsideView: wD
          } = (0, mw.g)(DD.target);
          return (zD ? kz.Pb.UntrustedEditable : 0) | (wD ? kz.Pb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(DD))
    }

    function vw(DD) {
      return "touchOnly" !== (0, yw.e)() && "function" === typeof DD.requestPointerLock
    }

    function tw(DD) {
      return 0 === DD.button ? DD.altKey ? ow.j["Alt+Left Click"] : ow.j.Mouse1 : 1 === DD.button ? ow.j.Mouse2 : ow.j.Mouse3
    }
    const Fw = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Yw = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      Hw = 32768,
      qw = 1;

    function Dp(DD) {
      return Math.min(Math.max(Math.round(DD), 0), 65535)
    }

    function zp(DD, zD, wD) {
      const pD = [],
        sD = (DD, zD, wD, sD) => {
          const KD = DD => {
            (0, Nw.v)(DD) || wD(DD)
          };
          DD.addEventListener(zD, KD, sD), pD.push((() => {
            DD.removeEventListener(zD, KD, sD)
          }))
        },
        KD = {
          capture: !0,
          passive: !0
        },
        rD = (DD, wD, pD, sD, KD) => (!(0, ew.b)() || !aw.has(DD)) && (zD(DD, wD, pD, sD, KD), !0),
        LD = () => document.pointerLockElement === DD,
        cD = (0, kw.f)(),
        gD = DD => {
          DD.ctrlKey && wD.ctrlCombosAreGames() && !(0, Rw.g)(DD.target) && DD.preventDefault()
        },
        RD = (DD, pD, sD) => {
          wD.inspect(DD, pD, !1), zD(kz.nb.KeyUp, pD, 0, 0, (0, lw.p)(sD, DD.timeStamp)), wD.keyReleased(pD)
        },
        AD = new Map,
        UD = (DD, zD, wD) => DD[wD] || ("AltRight" === zD || "ControlLeft" === zD) && DD.getModifierState("AltGraph"),
        fD = new Map,
        ID = () => {
          AD.clear(), fD.clear()
        },
        BD = DD => {
          if (DD.isTrusted && document.hasFocus())
            for (const [zD, wD] of fD) fD.delete(zD), UD(DD, zD, wD) || (AD.delete(zD), RD(DD, ow.j[zD], uw(DD)))
        };
      DD.tabIndex = -1;
      let GD = 0,
        hD = 0;
      const nD = () => {
        const zD = DD.getBoundingClientRect();
        GD = zD.left, hD = zD.top
      };
      let MD = "mouse";
      const OD = () => !LD() && ("mouse" === MD || !wD.touchUiShown()),
        JD = (DD, zD, wD) => {
          const pD = (Dp(DD.clientX - GD) | Dp(DD.clientY - hD) << 16) >>> 0;
          rD(kz.nb.MouseMove, kz.Qb.Point, zD, wD, pD)
        };
      let ED = !1,
        QD = 0;
      const XD = () => {
        ED && (ED = !1, wD.viewShown() && (0, Cz.P)())
      };
      pD.push((() => {
        clearTimeout(QD)
      })), sD(window, "keydown", (DD => {
        "Escape" === DD.key ? (0, Cz.D)(!0) : DD.repeat || (0, Rw.g)(DD.target) || (ED = !0, clearTimeout(QD), QD = window.setTimeout(XD, 0))
      }), KD), sD(window, "keydown", (DD => {
        XD(), gD(DD), BD(DD);
        const zD = ow.j[DD.code];
        if ("number" !== typeof zD || !wD.viewShown()) return;
        const pD = (0, Rw.g)(DD.target);
        pD || !wD.prevents(zD) && !Fw.has(DD.code) || DD.preventDefault(), DD.repeat || wD.inspect(DD, zD, !0), rD(kz.nb.KeyDown, zD, 0, 0, (0, lw.p)(uw(DD), DD.timeStamp)) && AD.set(DD.code, zD), pD || wD.keyPressed(zD)
      }), {
        capture: !1,
        passive: !1
      }), sD(window, "keyup", (DD => {
        "Escape" === DD.key && (0, Cz.D)(!1), gD(DD), AD.delete(DD.code), fD.delete(DD.code), BD(DD);
        const zD = ow.j[DD.code];
        "number" === typeof zD && RD(DD, zD, uw(DD))
      }), {
        capture: !0,
        passive: !1
      }), sD(window, "mousemove", (DD => {
        "mouse" === MD && OD() ? JD(DD, DD.movementX, DD.movementY) : LD() ? rD(kz.nb.MouseMove, kz.Qb.Stamped, DD.movementX, DD.movementY, (0, lw.p)(0, DD.timeStamp)) : rD(kz.nb.MouseMove, 0, DD.movementX, DD.movementY, 0)
      }), KD);
      let VD = 0,
        PD = 0;
      const CD = [];
      let xD = !1,
        TD = !1;
      sD(DD, "mousedown", (DD => {
        if ((0, ew.b)()) return;
        BD(DD);
        const pD = 1 << DD.button;
        if (!LD() && (0, Cz.N)() && (0, Cz.f)() && (TD = !0, !xD)) return void(VD |= pD);
        VD &= ~pD;
        const sD = DD.button <= 2 ? tw(DD) : void 0;
        void 0 !== sD && (CD[DD.button] = sD, wD.inspect(DD, sD, !0)), OD() && JD(DD, 0, 0), zD(kz.nb.MouseDown, DD.button, DD.clientX, DD.clientY, (0, lw.p)(uw(DD), DD.timeStamp)), PD |= pD, void 0 !== sD && wD.keyPressed(sD)
      }), KD), sD(window, "mouseup", (DD => {
        var pD;
        BD(DD);
        const sD = 1 << DD.button,
          KD = 0 !== (VD & ~PD & sD);
        if (VD &= ~sD, PD &= ~sD, KD) return;
        const rD = DD.button <= 2 ? null !== (pD = CD[DD.button]) && void 0 !== pD ? pD : tw(DD) : void 0;
        void 0 !== rD && wD.inspect(DD, rD, !1), zD(kz.nb.MouseUp, DD.button, DD.clientX, DD.clientY, (0, lw.p)(uw(DD), DD.timeStamp)), void 0 !== rD && wD.keyReleased(rD)
      }), KD), sD(DD, "contextmenu", (DD => {
        DD.preventDefault()
      }), {
        passive: !1
      });
      const bD = DD => {
        (LD() || (0, Cz.l)() && (0, Zw.s)()) && (DD.ctrlKey || cD && !document.fullscreenElement) && DD.preventDefault()
      };
      sD(DD, "wheel", (DD => {
        bD(DD), BD(DD), rD(kz.nb.Wheel, DD.deltaMode, DD.deltaX, DD.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const jD = {
          capture: !0,
          passive: !1
        },
        dD = DD => {
          DD ? window.addEventListener("wheel", bD, jD) : window.removeEventListener("wheel", bD, jD)
        };
      dD((0, Cz.l)()), pD.push((0, Cz.s)(dD)), pD.push((() => {
        dD(!1)
      }));
      const SD = new Map,
        iD = new Set,
        lD = DD => {
          const zD = "stylus" === DD.touchType;
          for (const wD of SD.values())
            if (!wD.touched && (zD || Math.abs(DD.clientX - wD.x) <= qw && Math.abs(DD.clientY - wD.y) <= qw)) return wD.touched = !0, !0;
          return !1
        },
        WD = DD => 32767 & DD,
        ND = new Set,
        ZD = DD => wD => {
          const pD = (0, lw.p)(uw(wD), wD.timeStamp);
          DD !== kz.nb.TouchStart && DD !== kz.nb.TouchMove || ((DD, wD) => {
            const pD = DD.touches;
            if (pD)
              for (const sD of ND) {
                let DD = !1;
                for (let zD = 0; zD < pD.length && !DD; zD++) DD = WD(pD[zD].identifier) === sD;
                DD || (ND.delete(sD), zD(kz.nb.TouchCancel, sD, 0, 0, wD))
              }
          })(wD, pD);
          const sD = wD.changedTouches;
          for (let zD = 0; zD < sD.length; zD++) {
            const wD = sD[zD];
            if (DD === kz.nb.TouchStart && lD(wD) && iD.add(wD.identifier), iD.has(wD.identifier)) {
              DD !== kz.nb.TouchEnd && DD !== kz.nb.TouchCancel || iD.delete(wD.identifier);
              continue
            }
            const KD = WD(wD.identifier),
              LD = rD(DD, KD, wD.clientX - GD, wD.clientY - hD, pD);
            DD === kz.nb.TouchStart ? LD && ND.add(KD) : DD !== kz.nb.TouchMove && ND.delete(KD)
          }
        },
        yD = ZD(kz.nb.TouchStart);
      sD(DD, "touchstart", (DD => {
        DD.preventDefault(), (0, ew.b)() || (wD.touchStarting(), yD(DD))
      }), {
        passive: !1
      }), sD(DD, "touchmove", ZD(kz.nb.TouchMove), KD), sD(DD, "touchend", ZD(kz.nb.TouchEnd), KD), sD(DD, "touchcancel", ZD(kz.nb.TouchCancel), KD);
      const kD = DD => Hw | 32767 & DD,
        mD = (DD, zD) => {
          rD(DD, kD(zD.pointerId), zD.clientX - GD, zD.clientY - hD, (0, lw.p)(uw(zD), zD.timeStamp))
        };
      sD(window, "pointerdown", (zD => {
        MD = zD.pointerType, "mouse" === zD.pointerType && zD.target !== DD && wD.viewShown() && (0, Cz.T)()
      }), KD), sD(DD, "pointerdown", (DD => {
        "pen" === DD.pointerType && 0 === DD.button && (0, Cz.l)() && (0, Zw.s)() && (DD.preventDefault(), (0, ew.b)() || (SD.set(DD.pointerId, {
          x: DD.clientX,
          y: DD.clientY,
          touched: !1
        }), wD.touchStarting(), mD(kz.nb.TouchStart, DD)))
      }), {
        passive: !1
      }), sD(window, "pointermove", (DD => {
        MD = DD.pointerType, SD.has(DD.pointerId) && mD(kz.nb.TouchMove, DD), "mouse" !== DD.pointerType && OD() && JD(DD, 0, 0)
      }), KD);
      const eD = DD => zD => {
        SD.delete(zD.pointerId) && mD(DD, zD)
      };
      sD(window, "pointerup", eD(kz.nb.TouchEnd), KD), sD(window, "pointercancel", eD(kz.nb.TouchCancel), KD);
      let oD = 0;
      const aD = () => {
          oD = 0, nD(), wD.resized()
        },
        uD = () => {
          const DD = wD.sizeCanvas();
          null !== DD && zD(kz.nb.Resize, 0, DD.cssWidth, DD.cssHeight, (0, lw.i)(DD.renderScale)), nD(), wD.resized(), 0 === oD && (oD = requestAnimationFrame(aD))
        };
      sD(window, "resize", uD, KD), pD.push(wD.watchRenderScale(uD)), pD.push((() => {
        cancelAnimationFrame(oD)
      })), sD(window, "focus", (DD => {
        DD.isTrusted && (zD(kz.nb.Focus, 0, 0, 0, 0), wD.viewShown() && (0, Cz.T)())
      }), {
        passive: !0
      });
      const vD = () => {
          (0, Cz.D)(!1), VD = 0
        },
        tD = () => {
          ND.clear(), SD.clear(), iD.clear()
        };
      let FD = 0,
        YD = 0;
      sD(window, "blur", (pD => {
        vD(), (0, Cz.i)();
        for (const DD of AD.keys()) {
          const zD = Yw.get(DD);
          void 0 !== zD && fD.set(DD, zD)
        }
        pD.isTrusted && ((DD => {
          for (const [wD, pD] of SD) zD(kz.nb.TouchCancel, kD(wD), pD.x, pD.y, (0, lw.p)(0, DD));
          SD.clear()
        })(pD.timeStamp), zD(kz.nb.Blur, kz.p.KeepTouches, 0, 0, 0)), cD && pD.isTrusted && (clearTimeout(YD), YD = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const DD of AD.values()) RD(pD, DD, 0);
            ID()
          }
        }), 0)), clearTimeout(FD), FD = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Zw.s)() && wD.viewShown() && DD.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), pD.push((() => {
        clearTimeout(FD), clearTimeout(YD)
      })), sD(window, "mousedown", (zD => {
        cD && zD.isTrusted && !document.hasFocus() && (0, Zw.s)() && wD.viewShown() && (window.focus(), DD.focus({
          preventScroll: !0
        }))
      }), KD), sD(document, "visibilitychange", (() => {
        document.hidden ? (zD(kz.nb.Blur, 0, 0, 0, 0), tD()) : document.hasFocus() && zD(kz.nb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), pD.push((0, ew.j)((() => {
        vD(), zD(kz.nb.Blur, kz.p.Release, 0, 0, 0), wD.keysReleased(), ID(), PD = 0, tD(), zD(kz.nb.Joystick, 0, 0, 0, 0), document.hasFocus() && zD(kz.nb.Focus, 0, 0, 0, 0)
      })));
      const HD = !wD.canLock(),
        qD = () => HD && !(0, Cz.l)() ? kz.qc.Lockless : kz.qc.Released,
        Dz = () => {
          LD() && (xD = !1, TD = !1), zD(kz.nb.PointerLock, LD() ? kz.qc.Locked : qD(), 0, 0, 0), (0, Cz.L)(LD())
        };
      return sD(document, "pointerlockchange", Dz, {
        passive: !0
      }), sD(document, "pointerlockerror", (() => {
        xD ||= TD, TD = !1, (0, Cz.p)()
      }), {
        passive: !0
      }), HD && pD.push((0, Cz.s)((() => {
        zD(kz.nb.PointerLock, qD(), 0, 0, 0)
      }))), uD(), zD(document.hasFocus() ? kz.nb.Focus : kz.nb.Blur, 0, 0, 0, 0), Dz(), () => {
        for (const DD of pD.splice(0)) DD()
      }
    }
    var wp = wD(34172),
      pp = wD(34158),
      sp = wD(1985);
    const Kp = new Map(ow.c.map(((DD, zD) => [DD, zD]))),
      rp = ["jump", "primary-fire", "alt-fire"],
      Lp = ["primary-fire", "alt-fire"];

    function cp(DD) {
      return `${sp.e}${DD}`
    }
    const gp = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Rp(DD) {
      const zD = [];
      for (const wD of DD) {
        const DD = "string" === typeof wD ? ow.j[wD] : void 0;
        "number" === typeof DD && zD.push(DD)
      }
      return zD
    }
    class Ap {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [DD, zD] of Object.entries(ow.f)) this.keys.set(DD, zD);
        this.updateKeySets()
      }
      prevents(DD) {
        return this.preventKeys.has(DD)
      }
      moves(DD) {
        return this.movementKeys.has(DD)
      }
      checks(DD, zD) {
        return (zD ? this.checkedDown : this.checkedUp).has(DD)
      }
      sync(DD, zD) {
        for (const [wD, pD] of this.keys) {
          const sD = DD(cp(wD)),
            KD = Array.isArray(sD) ? Rp(sD) : ow.f[wD];
          (KD.length !== pD.length || KD.some(((DD, zD) => DD !== pD[zD]))) && this.bind(wD, KD, zD)
        }
      }
      bind(DD, zD, wD) {
        const pD = Kp.get(DD);
        if (void 0 !== pD) {
          wD(kz.nb.Binding, 0, 0, 0, pD | kz.o.Clear << 8);
          for (const KD of [...zD, ...null !== (sD = ow.i[DD]) && void 0 !== sD ? sD : []]) {
            var sD;
            wD(kz.nb.Binding, KD, 0, 0, pD | kz.o.Add << 8)
          }
          this.keys.set(DD, zD), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const pD of ow.l)
          for (const zD of null !== (DD = this.keys.get(ow.c[pD])) && void 0 !== DD ? DD : []) {
            var DD;
            this.preventKeys.add(zD)
          }
        this.movementKeys.clear();
        for (const pD of gp)
          for (const DD of null !== (zD = this.keys.get(pD)) && void 0 !== zD ? zD : []) {
            var zD;
            this.movementKeys.add(DD)
          }
        for (const [pD, sD] of [
            [this.checkedDown, rp],
            [this.checkedUp, Lp]
          ]) {
          pD.clear();
          for (const DD of sD)
            for (const zD of null !== (wD = this.keys.get(DD)) && void 0 !== wD ? wD : []) {
              var wD;
              pD.add(zD)
            }
        }
      }
    }
    var Up = wD(4823),
      fp = wD(36575);
    const Ip = "[bloxd-wasm-client]";

    function Bp() {
      return "inGame" === aD.e.get("gameState") && !(0, Ww.r)()
    }
    let Gp = null;

    function hp(DD, zD) {
      Gp && zD.writePendingInput() && Gp.push(function(DD, zD) {
        let wD = "";
        for (const pD of zD) wD += pD.toString(16).padStart(2, "0");
        return wD ? `${DD} ${wD}` : String(DD)
      }(DD, zD.rings.input.written()))
    }
    const np = [];

    function Mp(DD, zD, wD, pD) {
      DD === kz.U.InputAction && pD === kz.ib && np.push(zD.getUint32(wD, !0))
    }
    var Op = wD(40835),
      Jp = wD(1206),
      Ep = wD(36808);
    const Qp = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: Jp.wasmScreens
    };

    function Xp(DD) {
      var zD, wD;
      let pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [sD, KD] = DD.split(":");
      return (null !== (zD = null === (wD = Qp[sD]) || void 0 === wD ? void 0 : wD[KD]) && void 0 !== zD ? zD : DD).replace(/\{\{(\w+)\}\}/g, ((DD, zD) => {
        var wD;
        return null !== (wD = pD[zD]) && void 0 !== wD ? wD : DD
      }))
    }

    function Vp(DD, zD) {
      (0, iw.c)();
      const wD = document.createElement("div");
      wD.setAttribute("role", "alertdialog"), wD.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const pD = document.createElement("div");
      pD.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const sD = document.createElement("h2");
      sD.textContent = Xp(DD.title);
      const KD = document.createElement("p");
      if (KD.textContent = Xp(DD.help, DD.helpValues), KD.style.whiteSpace = "pre-line", pD.append(sD, KD), DD.discordLink) {
        const DD = document.createElement("a");
        DD.href = Ep.b, DD.target = "_blank", DD.rel = "noreferrer", DD.style.color = "#8ab4ff", DD.textContent = Xp("wasmScreens:reportOnDiscord"), pD.append(DD)
      }
      const rD = document.createElement("div");
      return rD.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", pD.append(rD), wD.append(pD), document.body.append(wD), new Promise((pD => {
        const sD = DD => {
            null === zD || void 0 === zD || zD.removeEventListener("abort", KD), wD.remove(), pD(DD)
          },
          KD = () => {
            sD(!1)
          };
        null === zD || void 0 === zD || zD.addEventListener("abort", KD, {
          once: !0
        });
        const LD = (DD, zD) => {
          const wD = document.createElement("button");
          wD.textContent = Xp(DD), wD.style.cssText = "padding:0.5rem 1.25rem;font:inherit", wD.addEventListener("click", (() => {
            sD(zD)
          })), rD.append(wD)
        };
        null !== DD.cancel && LD(DD.cancel, !1), LD(DD.confirm, !0)
      }))
    }
    var Pp = wD(40654);
    const Cp = 6e4,
      xp = 3e5;
    var Tp = wD(3657);
    var bp = wD(40843),
      jp = wD(648),
      dp = wD(9);

    function Sp(DD, zD) {
      const wD = dp.jb.encode(zD);
      ! function(DD, zD) {
        let wD = zD >= 0 ? 2 * zD : 2 * -zD - 1;
        for (; wD >= 128;) DD.push(wD % 128 | 128), wD = Math.floor(wD / 128);
        DD.push(wD)
      }(DD, wD.length);
      for (const pD of wD) DD.push(pD)
    }
    let ip, lp, Wp;
    (() => {
      const DD = [0, "q", "e", "length", null, "resolv", "then", 1, !1, "postCo", "okies", 2, void 0, "a", 181, "b", 5, 7, 3, 4, 169, 32, 54, 202, 55, 189, 115, 19, "Block ", "image "];

      function zD() {}
      const pD = (DD[0], dp[DD[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        sD = (DD[0], dp[DD[1]])("QkFCWUxPTg=="),
        KD = (DD[0], dp[DD[1]])("QW5kZXNpdGU="),
        rD = (DD[0], dp[DD[1]])("U21vb3RoIEdyYW5pdGU="),
        LD = (DD[0], dp[DD[1]])("RGlvcml0ZQ=="),
        cD = async (pD, sD, KD, rD) => {
          const [{
            clientSideServerUrls: LD
          }, {
            HttpPayloadType: cD,
            ["postJsonWithMetricsCookiesAndCustomRespons" + DD[2]]: gD
          }] = await Promise.all([Promise[DD[5] + DD[2]]()[DD[6]](((...pD) => (pD[DD[3]] = DD[0], "eTfAs_" in zD && function(...zD) {
            zD[DD[3]] = DD[0]
          }(), wD(1211)))), Promise[DD[5] + DD[2]]()[DD[6]](((...pD) => (pD[DD[3]] = DD[0], "L2CwaJ" in zD && function(...zD) {
            function wD(...zD) {
              zD[DD[3]] = DD[7];
              const wD = {};
              for (let pD of zD[DD[0]].replace(/[^w]/g, "").toLowerCase()) wD[pD] = wD[pD] + DD[7] || DD[7];
              return wD
            }

            function pD(...zD) {
              zD[DD[3]] = DD[11];
              const wD = buildCharMap(zD[DD[0]]),
                pD = buildCharMap(zD[DD[7]]);
              for (let sD in wD)
                if (wD[sD] !== pD[sD]) return DD[8];
              return Object.keys(wD).length === Object.keys(pD).length || DD[8]
            }

            function sD(...zD) {
              zD[DD[3]] = DD[7];
              return KD(zD[DD[0]]) !== 1 / 0
            }

            function KD(...zD) {
              if (zD[DD[3]] = DD[7], !zD[DD[0]]) return -DD[7];
              const wD = KD(zD[DD[0]].left),
                pD = KD(zD[DD[0]].right),
                sD = Math.abs(wD - pD);
              if (wD === 1 / 0 || pD === 1 / 0 || sD > DD[7]) return 1 / 0;
              return Math.max(wD, pD) + DD[7]
            }
            zD[DD[3]] = DD[0], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: wD,
              isAnagrams: pD,
              isBalanced: sD,
              getHeightBalanced: KD
            }
          }(), wD(1130))))]), RD = LD.getHttpUrlFromWebSocketUrl(pD.endpoint), AD = pD[DD[9] + DD[10]] === DD[4] ? DD[12] : await pD[DD[9] + DD[10]]();
          await gD("" + RD + sD, KD, {
            retries: rD
          }, cD.blob, AD)
        };
      ip = async (zD, wD) => {
        const pD = function(DD, zD, wD, pD) {
          const sD = [];
          Sp(sD, DD), Sp(sD, zD), Sp(sD, wD);
          for (const KD of pD) sD.push(KD);
          return sD
        }(zD.game, zD.lobby, (DD[0], jp[DD[2]])(), wD);
        try {
          await cD(zD, "/persisted/keep-alive", {
            type: "nI",
            data: pD
          }, DD[18])
        } catch (sD) {
          console.warn(sD)
        }
      };
      const gD = (...zD) => (zD[DD[3]] = DD[11], Object.getOwnPropertyDescriptor(zD[DD[0]], zD[DD[7]]));

      function RD() {
        RD = function() {}
      }
      lp = () => {
        if ((DD[0], dp.L)(), gD(navigator, pD) !== DD[12]) {
          function wD(...zD) {
            RD(zD[DD[3]] = DD[0], zD[DD[13]] = function(...wD) {
              return RD(wD[DD[3]] = DD[11], wD[DD[13]] = [], wD[DD[14]] = wD[DD[0]].length, wD[DD[0]].sort(((DD, zD) => DD - zD)), zD[DD[15]](wD[DD[13]], [], DD[0], wD[DD[14]], wD[DD[0]], wD[DD[7]])), wD[DD[13]]
            }, zD[DD[15]] = function(...wD) {
              if (RD(wD[DD[3]] = 6, wD[DD[13]] = DD[4]), !(wD[DD[16]] < DD[0])) {
                if (wD[DD[16]] === DD[0]) return wD[DD[0]].push(wD[DD[7]]);
                for (wD[DD[17]] = wD[DD[11]]; wD[DD[17]] < wD[DD[18]] && !(wD[DD[19]][wD[DD[17]]] > wD[DD[16]]); wD[DD[17]]++) wD[DD[17]] > wD[DD[11]] && wD[DD[19]][wD[DD[17]]] === wD[DD[19]][wD[DD[17]] - DD[7]] || RD(wD[DD[13]] = Array.from(wD[DD[7]]), wD[DD[13]].push(wD[DD[19]][wD[DD[17]]]), zD[DD[15]](wD[DD[0]], wD[DD[13]], wD[DD[17]] + DD[7], wD[DD[18]], wD[DD[19]], wD[DD[16]] - wD[DD[19]][wD[DD[17]]]))
              }
            }, console.log(zD[DD[13]]))
          }
          return "tAcMQuz" in zD && wD(), KD
        }
        if (gD(window, sD) === DD[12]) {
          function cD(...zD) {
            zD[DD[3]] = DD[0]
          }
          return "GOvDZo" + DD[1] in zD && cD(), rD
        }
        return LD
      }, Wp = async pD => {
        "dchwqXQ" in zD && function(...zD) {
          RD(zD[DD[3]] = DD[0], zD[DD[23]] = function(...zD) {
            for (RD(zD[DD[3]] = DD[7], zD[DD[7]] = zD[DD[0]].length, zD[DD[22]] = [], zD[DD[18]] = DD[0], zD[DD[21]] = DD[0], zD[DD[0]].sort(((DD, zD) => DD - zD))), zD[DD[20]] = DD[0]; zD[DD[20]] < zD[DD[7]]; zD[DD[20]]++)
              if (!(zD[DD[20]] > DD[0] && zD[DD[0]][zD[DD[20]]] === zD[DD[0]][zD[DD[20]] - DD[7]]))
                for (RD(zD[DD[18]] = zD[DD[20]] + DD[7], zD[DD[21]] = zD[DD[7]] - DD[7]); zD[DD[18]] < zD[DD[21]];)
                  if (zD[DD[0]][zD[DD[20]]] + zD[DD[0]][zD[DD[18]]] + zD[DD[0]][zD[DD[21]]] < DD[0]) zD[DD[18]]++;
                  else if (zD[DD[0]][zD[DD[20]]] + zD[DD[0]][zD[DD[18]]] + zD[DD[0]][zD[DD[21]]] > DD[0]) zD[DD[21]]--;
            else {
              for (zD[DD[22]].push([zD[DD[0]][zD[DD[20]]], zD[DD[0]][zD[DD[18]]], zD[DD[0]][zD[DD[21]]]]); zD[DD[18]] < zD[DD[21]] && zD[DD[0]][zD[DD[18]]] === zD[DD[0]][zD[DD[18]] + DD[7]];) zD[DD[18]]++;
              for (; zD[DD[18]] < zD[DD[21]] && zD[DD[0]][zD[DD[21]]] === zD[DD[0]][zD[DD[21]] - DD[7]];) zD[DD[21]]--;
              RD(zD[DD[18]]++, zD[DD[21]]--)
            }
            return zD[DD[22]]
          }, console.log(zD[DD[23]]))
        }();
        try {
          const sD = lp(),
            {
              retryTransientHttpFailures: KD
            } = await Promise[DD[5] + DD[2]]()[DD[6]](((...pD) => (pD[DD[3]] = DD[0], "PThVlmX" in zD && function(...zD) {
              RD(zD[DD[3]] = DD[0], zD[-DD[26]] = function(...zD) {
                for (RD(zD[DD[3]] = DD[7], zD[-DD[24]] = zD[DD[0]].length, zD[DD[11]] = [], zD[DD[18]] = DD[0], zD[DD[25]] = DD[0], zD[DD[0]].sort(((DD, zD) => DD - zD))), zD[DD[16]] = DD[0]; zD[DD[16]] < zD[-DD[24]]; zD[DD[16]]++)
                  if (!(zD[DD[16]] > DD[0] && zD[DD[0]][zD[DD[16]]] === zD[DD[0]][zD[DD[16]] - DD[7]]))
                    for (RD(zD[DD[18]] = zD[DD[16]] + DD[7], zD[DD[25]] = zD[-DD[24]] - DD[7]); zD[DD[18]] < zD[DD[25]];)
                      if (zD[DD[0]][zD[DD[16]]] + zD[DD[0]][zD[DD[18]]] + zD[DD[0]][zD[DD[25]]] < DD[0]) zD[DD[18]]++;
                      else if (zD[DD[0]][zD[DD[16]]] + zD[DD[0]][zD[DD[18]]] + zD[DD[0]][zD[DD[25]]] > DD[0]) zD[DD[25]]--;
                else {
                  for (zD[DD[11]].push([zD[DD[0]][zD[DD[16]]], zD[DD[0]][zD[DD[18]]], zD[DD[0]][zD[DD[25]]]]); zD[DD[18]] < zD[DD[25]] && zD[DD[0]][zD[DD[18]]] === zD[DD[0]][zD[DD[18]] + DD[7]];) zD[DD[18]]++;
                  for (; zD[DD[18]] < zD[DD[25]] && zD[DD[0]][zD[DD[25]]] === zD[DD[0]][zD[DD[25]] - DD[7]];) zD[DD[25]]--;
                  RD(zD[DD[18]]++, zD[DD[25]]--)
                }
                return zD[DD[11]]
              }, console.log(zD[-DD[26]]))
            }(), wD(1789))));
          await KD(DD[28] + DD[29] + "post", (() => cD(pD, "/images/" + sD + ".png", {
            block: sD
          }, DD[0])), 8e3)
        } catch (rD) {
          function gD(...zD) {
            var wD;
            RD(zD[DD[3]] = DD[0], wD = function(...zD) {
              RD(zD[DD[3]] = DD[7], this.bA = zD[DD[0]], this.length = DD[0], this.map = {}, this.head = DD[4], this.tail = DD[4])
            }, wD.prototype.get = function(...zD) {
              var wD;
              return RD(zD[DD[3]] = DD[7], wD = this.map[zD[DD[0]]]), wD ? (this.remove(wD), this.insert(wD.key, wD.val), wD.val) : -DD[7]
            }, wD.prototype.put = function(DD, zD) {
              this.map[DD] ? (this.remove(this.map[DD]), this.insert(DD, zD)) : this.length === this.bA ? (this.remove(this.head), this.insert(DD, zD)) : (this.insert(DD, zD), this.length++)
            }, wD.prototype.remove = function(...zD) {
              RD(zD[DD[3]] = DD[7], zD[DD[7]] = zD[DD[0]].prev, zD[DD[15]] = zD[DD[0]].next), zD[DD[15]] && (zD[DD[15]].prev = zD[DD[7]]), zD[DD[7]] && (zD[DD[7]].next = zD[DD[15]]), this.head === zD[DD[0]] && (this.head = zD[DD[15]]), this.tail === zD[DD[0]] && (this.tail = zD[DD[7]]), delete this.map[zD[DD[0]].key]
            }, wD.prototype.insert = function(...zD) {
              RD(zD[DD[3]] = DD[11], zD[-DD[27]] = new List(zD[DD[0]], zD[DD[7]]), this.tail ? (this.tail.next = zD[-DD[27]], zD[-DD[27]].prev = this.tail, this.tail = zD[-DD[27]]) : (this.tail = zD[-DD[27]], this.head = zD[-DD[27]]), this.map[zD[DD[0]]] = zD[-DD[27]])
            }, console.log(wD))
          }
          "WWdtti" in zD && gD(), console.error(DD[28] + DD[29] + "post failed:", rD)
        }
      }
    })();
    var Np = wD(40752),
      Zp = wD(1819);
    const yp = 1e3 * Np.b.seatReservationSeconds - 3e3;
    class kp {
      constructor(DD) {
        var zD, wD, pD, sD;
        let KD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (zD = KD.wallNow) && void 0 !== zD ? zD : Date.now, this.monoNow = null !== (wD = KD.monoNow) && void 0 !== wD ? wD : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (pD = KD.sleep) && void 0 !== pD ? pD : Zp.e, this.follow = new Jz.c(KD.signal);
        const rD = null !== (sD = KD.fetch) && void 0 !== sD ? sD : fetch;
        this.seat = (0, hw.j)(DD.endpoint, DD.roomName, DD.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (DD, zD) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), rD(DD, zD)),
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
      async take(DD) {
        if ("rematched" === this.use) return;
        (0, Jz.h)(DD);
        const zD = "pending" !== this.request,
          wD = () => {
            this.abort((0, Jz.d)(DD))
          };
        let pD;
        null === DD || void 0 === DD || DD.addEventListener("abort", wD, {
          once: !0
        });
        try {
          pD = await this.seat
        } catch (sD) {
          if ((0, Jz.h)(DD), !zD) throw sD;
          return void(this.use = "lost")
        } finally {
          null === DD || void 0 === DD || DD.removeEventListener("abort", wD)
        }
        if ((0, Jz.h)(DD), !(this.ageMs() > yp)) return this.use = "taken", pD;
        this.use = "renewed"
      }
      async reserveInstead(DD, zD) {
        try {
          return await DD()
        } catch (wD) {
          const sD = this.holdLeftMs();
          if (!(wD instanceof SD.l) || wD.code !== pD.e.duplicateLobbyNameError.code || 0 === sD) throw wD;
          return await this.sleep(sD + 500, zD), DD()
        }
      }
      release() {
        const {
          request: DD,
          use: zD
        } = this, wD = this.holdsNoSeat();
        return this.abort(), "taken" === zD || wD ? null : {
          unused: "unused" === zD ? "abandoned" : zD,
          answered: "answered" === DD,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var DD;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const zD = null !== (DD = this.answeredAt) && void 0 !== DD ? DD : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          wD = Math.max(this.wallNow() - zD.wall, this.monoNow() - zD.mono);
        return Math.max(0, 1e3 * Np.b.seatReservationSeconds - wD)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(DD) {
        (0, Jz.e)(this.follow.controller, DD)
      }
    }
    var mp = wD(40850);
    const ep = new Uint8Array(0);
    class op {
      constructor(DD) {
        if (this.options = DD, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === DD.module) return this.stopped = !0, void DD.fail("no wasm module for the meshing workers");
        DD.loadWorkers().then((DD => {
          if (this.stopped) return;
          const {
            count: zD
          } = DD;
          this.workers = DD;
          for (let wD = 0; wD < zD; wD++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let wD = 0; wD < zD; wD++) this.start(wD)
        }), (DD => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", DD))
        }))
      }
      take(DD, zD, wD) {
        const pD = this.slots[zD];
        if (DD === kz.Zd.Retire) return void(pD && !pD.gone && (this.endWorker(zD), pD.started = !1, this.giveUp(zD, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const sD = null === pD || void 0 === pD ? void 0 : pD.worker;
        if (!sD || !pD.started) return;
        const KD = wD.byteLength;
        let rD = null;
        DD === kz.Zd.Mesh && pD.heapRetries > 0 && (pD.heapRetries--, rD = this.pooled(KD, !0)), rD ??= this.buffer(KD), new Uint8Array(rD, 0, KD).set(wD), sD.postMessage({
          type: "job",
          kind: DD,
          bytes: rD,
          len: KD
        }, [rD])
      }
      takeFailedMeshJobs() {
        const DD = this.failedJobs;
        return this.failedJobs = 0, DD
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let DD = 0; DD < this.slots.length; DD++) {
          const zD = this.slots[DD];
          null !== zD.worker && (this.endWorker(DD), zD.startsWithoutResult = 0, zD.trapsWithoutResult = 0, this.tellLost(DD))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let DD = 0; DD < this.slots.length; DD++) this.start(DD)
        }
      }
      stop() {
        this.stopped = !0;
        for (const zD of this.slots) {
          var DD;
          ap(zD), null === (DD = zD.worker) || void 0 === DD || DD.terminate(), zD.worker = null, zD.started = !1
        }
      }
      start(DD) {
        const zD = this.slots[DD],
          {
            module: wD
          } = this.options,
          {
            workers: pD
          } = this;
        if (this.stopped || this.resting || zD.gone || null === wD || null === pD) return;
        if (zD.startsWithoutResult >= 3) return void this.giveUp(DD, "failed to start 3 times in a row", "no meshing worker would start");
        let sD;
        zD.startsWithoutResult++;
        try {
          sD = pD.create()
        } catch (KD) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${DD} did not start`, KD), void this.start(DD)
        }
        zD.worker = sD, sD.onmessage = wD => {
          let {
            data: pD
          } = wD;
          zD.worker === sD && this.onReply(DD, pD)
        }, sD.onmessageerror = () => {
          zD.worker === sD && this.lose(DD, "a reply could not be read")
        }, sD.onerror = wD => {
          wD.preventDefault(), zD.worker === sD && this.lose(DD, wD.message || "its script failed")
        };
        try {
          sD.postMessage({
            type: "start",
            module: wD,
            maxKeptLightStates: pD.maxKeptLightStates
          })
        } catch (KD) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${DD} could not be sent the module`, KD), sD.terminate(), zD.worker = null, void this.start(DD)
        }
        zD.watch = new mp.i(mp.e, (zD => {
          this.lose(DD, (0, mp.m)(zD), (() => {
            this.options.onStartTimeout(zD)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(DD, zD) {
        const wD = this.slots[DD];
        switch (zD.type) {
          case "started":
            ap(wD), wD.started = !0, this.options.write(0, kz.Yd.WorkerStarted, 0, DD, 0, ep);
            break;
          case "lost":
            this.lose(DD, zD.reason);
            break;
          case "memory":
            var pD, sD;
            null === (pD = (sD = this.options).onMemoryStats) || void 0 === pD || pD.call(sD, DD, zD.stats);
            break;
          case "result": {
            const pD = zD.status === kz.rb.Trapped;
            if (0 !== zD.jobId) {
              if (pD) this.countFailedJob(zD.outOfMemory, "light_trap", zD.trap);
              else if (wD.startsWithoutResult = 0, wD.trapsWithoutResult = 0, zD.status === kz.rb.Refused) {
                const wD = function(DD) {
                  if (DD.byteLength < 32) return "(no reason)";
                  const zD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength),
                    wD = Math.min(zD.getUint32(28, !0), DD.byteLength - 28 - 4);
                  return (new TextDecoder).decode(DD.subarray(32, 32 + wD)).slice(0, 200)
                }(new Uint8Array(zD.bytes, 0, zD.len));
                this.countFailedJob(az.e.test(wD), "light_refused_input", wD), this.logRefusal(DD, wD)
              }
              zD.status === kz.rb.HeapRefused && (wD.heapRetries = Math.min(wD.heapRetries + 1, 4), this.logHeapRefusal(DD))
            }
            if (this.options.write(zD.jobId, kz.Yd.JobResult, zD.status, DD, zD.workerUs, new Uint8Array(zD.bytes, 0, zD.len)), this.recycle(zD.bytes), zD.spare && this.recycle(zD.spare), !pD) break;
            if (wD.startsWithoutResult = 0, 0 === zD.jobId) {
              this.lose(DD, `the tables trapped its wasm: ${zD.trap}`);
              break
            }
            wD.trapsWithoutResult++;
            const sD = wD.trapsWithoutResult > 6;
            wD.gone ||= sD, this.lose(DD, `a job trapped its wasm: ${zD.trap}`), sD && this.giveUp(DD, `trapped ${wD.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(DD, zD, wD) {
        if (DD) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(zD) || (this.faultsReported.add(zD), this.options.onLightFault(zD, wD));
        this.failedJobs++
      }
      logRefusal(DD, zD) {
        var wD;
        !this.refusals.has(zD) && this.refusals.size >= 16 && (zD = "(other reasons)");
        const pD = (null !== (wD = this.refusals.get(zD)) && void 0 !== wD ? wD : 0) + 1;
        this.refusals.set(zD, pD), (0, Jw.B)(pD) && console.warn(`[bloxd-wasm-client] meshing worker ${DD} refused a chunk (${pD} so far for this reason): ${zD}`)
      }
      logHeapRefusal(DD) {
        this.heapRefusals++, (0, Jw.B)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${DD} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(DD, zD, wD) {
        const pD = this.slots[DD];
        if (pD.gone = !0, pD.goneFor = {
            why: zD,
            failure: wD
          }, console.warn(`[bloxd-wasm-client] meshing worker ${DD} ${zD}: giving up on it`), this.slots.every((DD => DD.gone))) {
          this.stop();
          const DD = new Set(this.slots.map((DD => {
              var zD;
              return null === (zD = DD.goneFor) || void 0 === zD ? void 0 : zD.failure
            }))),
            zD = this.slots.map(((DD, zD) => {
              var wD, pD;
              return `worker ${zD} ${null!==(wD=null===(pD=DD.goneFor)||void 0===pD?void 0:pD.why)&&void 0!==wD?wD:"went"}`
            }));
          this.options.fail(1 === DD.size ? wD : `no meshing worker is left (${zD.join(", ")})`)
        }
      }
      lose(DD, zD, wD) {
        console.warn(`[bloxd-wasm-client] meshing worker ${DD} was lost: ${zD}`), this.endWorker(DD), this.stopped || (wD ? wD() : this.options.onWorkerLost(zD), this.tellLost(DD), this.start(DD))
      }
      endWorker(DD) {
        var zD, wD, pD;
        const sD = this.slots[DD];
        ap(sD), null === (zD = sD.worker) || void 0 === zD || zD.terminate(), sD.worker = null, sD.heapRetries = 0, null === (wD = (pD = this.options).onMemoryGone) || void 0 === wD || wD.call(pD, DD)
      }
      tellLost(DD) {
        const zD = this.slots[DD];
        zD.started && (zD.started = !1, this.options.write(0, kz.Yd.WorkerLost, 0, DD, 0, ep))
      }
      buffer(DD) {
        var zD;
        return null !== (zD = this.pooled(DD)) && void 0 !== zD ? zD : new ArrayBuffer(Math.max(16384, DD))
      }
      pooled(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = -1;
        for (let sD = 0; sD < this.pool.length; sD++) {
          const pD = this.pool[sD].byteLength;
          pD >= DD && (wD < 0 || (zD ? pD > this.pool[wD].byteLength : pD < this.pool[wD].byteLength)) && (wD = sD)
        }
        if (wD < 0) return null;
        const pD = this.pool[wD];
        return this.pool[wD] = this.pool[this.pool.length - 1], this.pool.pop(), pD
      }
      recycle(DD) {
        this.pool.length < 4 * this.slots.length && DD.byteLength > 0 && DD.byteLength <= 1048576 && this.pool.push(DD)
      }
    }

    function ap(DD) {
      var zD;
      null === (zD = DD.watch) || void 0 === zD || zD.cancel(), DD.watch = null
    }
    var vp = wD(36483),
      tp = wD(40669),
      Fp = wD(40852),
      Yp = wD(40855),
      Hp = (wD(40689), wD(40863)),
      qp = wD(40732);

    function Ds(DD) {
      const zD = new Uint8Array(DD.length >> 2);
      for (let wD = 0; wD < zD.length; wD++) zD[wD] = DD[4 * wD + 3];
      return zD
    }
    async function zs(DD) {
      const zD = await (0, Hp.h)(DD);
      try {
        const {
          width: DD,
          height: wD,
          pixels: pD
        } = (0, qp.l)(zD);
        return {
          width: DD,
          height: wD,
          alpha: Ds(pD)
        }
      } finally {
        zD.close()
      }
    }
    class ws {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zs;
        this.session = DD, this.sources = zD, this.warn = wD, this.load = pD, this.nextPoll = 0, this.MI = !1, this.warned = new Set
      }
      drain(DD) {
        if (DD < this.nextPoll) return;
        this.nextPoll = DD + 250;
        const zD = this.session.sunShadowWantedTextures();
        if (zD)
          for (let wD = 0; wD + 1 < zD.length; wD += 2) this.hand(zD[wD], zD[wD + 1]);
        for (const wD of this.session.takeSunShadowWarnings()) this.warn(wD)
      }
      dispose() {
        this.MI = !0
      }
      async hand(DD, zD) {
        var wD, pD, sD, KD, rD;
        let LD, cD = null;
        try {
          if (cD = await this.sources.blockImageUrl(DD), null === cD) throw new Error(`block image ${DD} has no URL`);
          LD = await this.load(cD)
        } catch (RD) {
          var gD;
          const zD = null !== (gD = cD) && void 0 !== gD ? gD : `block image ${DD}`;
          this.warned.has(zD) || (this.warned.add(zD), this.warn(`sun shadow plane texture ${zD} didn't load: its blocks cast no shadow`, RD))
        }
        this.MI || this.session.setSunShadowTexture(DD, zD, null !== (wD = null === (pD = LD) || void 0 === pD ? void 0 : pD.width) && void 0 !== wD ? wD : 0, null !== (sD = null === (KD = LD) || void 0 === KD ? void 0 : KD.height) && void 0 !== sD ? sD : 0, null === (rD = LD) || void 0 === rD ? void 0 : rD.alpha)
      }
    }
    var ps = wD(40866),
      ss = wD(40707),
      Ks = wD(40874),
      rs = wD(40878),
      Ls = wD(40710),
      cs = wD(40719),
      gs = wD(34238),
      Rs = wD(34103),
      As = wD(40889);
    const Us = 8192,
      fs = new Set;
    const Is = new Set([...Rs.e, "sceneDownload"]);
    var Bs = wD(40630),
      Gs = wD(40895),
      hs = wD(40898);
    const ns = new Uint8Array(0);
    let Ms = null;

    function Os(DD) {
      return {
        aux: kz.fc.AdStart | (DD ? kz.fc.PreventMovement : 0),
        payload: ns
      }
    }
    var Es = wD(2890),
      Qs = wD(309);
    const Xs = "__bloxdSceneCapture";
    var Vs = wD(1806),
      Ps = wD(2916);
    let Cs = null,
      xs = null,
      Ts = null,
      bs = !1;

    function ds() {
      Cs ??= performance.now()
    }
    var Ss = wD(40907);
    class is {
      constructor(DD) {
        var zD, wD;
        this.host = DD, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((DD => {
          this.landRequest = DD
        })), this.follow = DD => {
          let zD = DD;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const DD = null === this.requested && null !== zD;
            var wD;
            DD && (null === (wD = zD) || void 0 === wD || wD(null));
            const pD = await this.landing;
            var sD;
            null === pD && DD || (null === (sD = zD) || void 0 === sD || sD(pD))
          })), () => {
            zD = null
          }
        }, this.startRead = (wD = DD.store, wD.keys().then((DD => ({
          own: DD.includes(Cw.e),
          oneShot: DD.includes(Cw.h)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((DD => {
          let {
            own: zD,
            oneShot: wD
          } = DD;
          this.oneShotStored = wD, (zD || wD) && this.request()
        })), this.channel = (null !== (zD = DD.openChannel) && void 0 !== zD ? zD : Cw.x)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var DD;
        if (null !== this.requested) return this.requested;
        null === (DD = this.channel) || void 0 === DD || DD.close(), this.channel = null;
        const zD = this.oneShotStored;
        return this.requested = function(DD, zD, wD) {
          return new Promise((zD => {
            zD(DD())
          })).catch((DD => (null !== zD && (0, Cw.s)(zD), wD(DD), null)))
        }((() => this.host.load(zD).then((DD => (DD.setGamePackConfirm(this.confirm), this.landed = DD, DD)))), zD ? this.host.store : null, this.host.sI), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var DD;
          return null !== (DD = this.requested) && void 0 !== DD ? DD : null
        }))
      }
      setGamePackConfirm(DD) {
        var zD;
        this.confirm = DD, null === (zD = this.landed) || void 0 === zD || zD.setGamePackConfirm(DD)
      }
    }
    var ls = wD(36248);
    const Ws = 216 * ls.f,
      Ns = 92 * ls.d,
      Zs = 64 * ls.f,
      ys = 16 * ls.f;

    function ks() {
      var DD, zD;
      return null !== (DD = null === (zD = performance.memory) || void 0 === zD ? void 0 : zD.LJ) && void 0 !== DD ? DD : null
    }
    class ms {
      constructor(DD, zD) {
        this.budgetBytes = DD, this.reads = zD, this.estimate = null, this.shedAt = null
      }
      read(DD) {
        var zD;
        const wD = this.reads.storedChunks(),
          pD = this.reads.gpuBytes(),
          sD = Math.max(null !== (zD = this.reads.jsHeapBytes()) && void 0 !== zD ? zD : 0, Zs),
          KD = Ws + DD + sD + pD + wD * Ns;
        this.estimate = {
          wasmBytes: DD,
          jsHeapBytes: sD,
          gpuBytes: pD,
          storedChunks: wD,
          totalBytes: KD
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: DD,
          budgetBytes: zD,
          shedAt: wD
        } = this;
        return !(null === DD || null === zD || DD.totalBytes < zD || null !== wD && DD.totalBytes < wD + ys) && (this.shedAt = DD.totalBytes, !0)
      }
      describe() {
        const {
          estimate: DD,
          budgetBytes: zD
        } = this;
        return null === DD ? null : `estimate ${(0,ls.i)(DD.totalBytes)} MiB of budget ${null===zD?"none":(0,ls.i)(zD)}: wasm ${(0,ls.i)(DD.wasmBytes)} js ${(0,ls.i)(DD.jsHeapBytes)} gpu ${(0,ls.i)(DD.gpuBytes)} chunks ${DD.storedChunks}`
      }
      snapshot() {
        const {
          estimate: DD,
          budgetBytes: zD
        } = this;
        return {
          ...null === DD ? {} : {
            footprintMiB: Number((0, ls.i)(DD.totalBytes)),
            gpuMiB: Number((0, ls.i)(DD.gpuBytes)),
            storedChunks: DD.storedChunks
          },
          footprintBudgetMiB: null === zD ? -1 : Number((0, ls.i)(zD))
        }
      }
    }
    var es = wD(2811),
      os = wD(4536),
      as = wD(39075),
      us = wD(37927);
    const vs = mz.eb + 1,
      ts = 4096 * vs;
    class Fs {
      constructor(DD, zD) {
        this.log = DD, this.take = zD, this.Qg = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(DD, zD) {
        const wD = this.take();
        wD.length >= mz.bb && wD[0] > 0 && (0, es.l)("remesh", `${wD[0]} core records lost to a full log`);
        const pD = this.Qg;
        for (let sD = mz.bb; sD + mz.eb <= wD.length; sD += mz.eb) {
          for (let DD = sD; DD < sD + mz.eb; DD++) pD.push(wD[DD]);
          pD.push(DD)
        }
        if (zD || !(pD.length < ts)) {
          for (let zD = 0; zD < pD.length; zD += vs) this.feed(zD, DD);
          pD.length = 0, zD && this.log.frame(DD)
        }
      }
      feed(DD, zD) {
        var wD;
        const pD = this.Qg,
          sD = (0, us.f)(pD[DD + 1], pD[DD + 2], pD[DD + 3]),
          KD = pD[DD + 4],
          rD = pD[DD + mz.eb];
        switch (pD[DD]) {
          case mz.Ib.Edit:
            this.log.edit(sD, rD);
            break;
          case mz.Ib.Sent:
            this.latest.set(sD, KD), this.log.sent(sD, KD, pD[DD + 5], pD[DD + 6], pD[DD + 7], null !== (wD = this.unshown.get(sD)) && void 0 !== wD ? wD : us.e, rD);
            break;
          case mz.Ib.Done: {
            this.log.received(KD, pD[DD + 5] / 1e3, rD);
            const zD = this.unshown.get(sD);
            void 0 === zD ? this.unshown.set(sD, [KD]) : zD.push(KD);
            break
          }
          case mz.Ib.Failed: {
            const DD = this.latest.get(sD);
            void 0 !== DD && DD !== KD ? this.log.reassign(sD, KD, DD) : this.log.failed(KD), this.ended(sD, KD);
            break
          }
          case mz.Ib.Shown:
            this.log.applied(sD, KD, zD), this.ended(sD, KD);
            break;
          case mz.Ib.Replaced:
            this.log.reassign(sD, KD, pD[DD + 5]), this.ended(sD, KD);
            break;
          case mz.Ib.Emptied:
            this.log.emptied(sD, zD);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${pD[DD]}`)
        }
      }
      ended(DD, zD) {
        this.latest.get(DD) === zD && this.latest.delete(DD);
        const wD = this.unshown.get(DD);
        if (void 0 === wD) return;
        const pD = wD.indexOf(zD);
        pD >= 0 && wD.splice(pD, 1), 0 === wD.length && this.unshown.delete(DD)
      }
    }
    let Ys = null;
    var Hs = wD(3214),
      qs = wD(39597);
    const DK = new Uint8Array(0);
    class zK {
      constructor(DD) {
        this.options = DD, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Qg = [], this.startsWithoutResult = 0, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== DD.module ? DD.write(0, kz.Yd.WorldgenStarted, 0, 0, DK) : this.giveUp()
      }
      take(DD, zD) {
        if (!(this.gone || null === this.worker && null === this.Qg))
          if (DD === kz.Zd.WorldgenSeed) {
            const DD = 0 === zD.byteLength ? null : this.options.decodeSettings(zD);
            null === DD ? this.release() : function(DD, zD) {
              if ((null === DD || void 0 === DD ? void 0 : DD.byteLength) !== zD.byteLength) return !1;
              for (let wD = 0; wD < DD.byteLength; wD++)
                if (DD[wD] !== zD[wD]) return !1;
              return !0
            }(this.seed, zD) || (this.seed = zD.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: DD
            }, []), null !== DD ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (DD === kz.Zd.Generate) {
          var wD;
          const DD = new DataView(zD.buffer, zD.byteOffset, kz.Vd),
            pD = null !== (wD = this.pool.pop()) && void 0 !== wD ? wD : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: DD.getUint32(0, !0),
            x: DD.getInt32(4, !0),
            y: DD.getInt32(8, !0),
            z: DD.getInt32(12, !0),
            bytes: pD
          }, [pD])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, kz.Yd.WorldgenStarted, 0, 0, DK)))
      }
      stop() {
        var DD;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (DD = this.worker) || void 0 === DD || DD.terminate(), this.worker = null
      }
      post(DD, zD) {
        var wD;
        null !== this.Qg ? this.Qg.push({
          message: DD,
          transfer: zD
        }) : null === (wD = this.worker) || void 0 === wD || wD.postMessage(DD, zD)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Qg ??= [])
      }
      endWorker() {
        var DD, zD, wD;
        this.endWatch(), null === (DD = this.worker) || void 0 === DD || DD.terminate(), this.worker = null, null === (zD = (wD = this.options).onMemoryGone) || void 0 === zD || zD.call(wD)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((DD => {
          this.createWorker = DD, this.wanted && this.start()
        }), (DD => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(DD))
        })))
      }
      start() {
        const {
          module: DD
        } = this.options, zD = this.createWorker;
        if (this.gone || null === DD || null === zD) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let wD;
        this.startsWithoutResult++;
        try {
          wD = zD()
        } catch (sD) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", sD), this.lastLoss = `it did not start (${String(sD)})`, void this.start()
        }
        this.worker = wD, wD.onmessage = DD => {
          let {
            data: zD
          } = DD;
          this.worker === wD && this.onReply(wD, zD)
        }, wD.onerror = DD => {
          DD.preventDefault(), this.worker === wD && this.lose(DD.message || "its script failed")
        };
        try {
          wD.postMessage({
            type: "start",
            module: DD,
            CI: pD.f.CI
          })
        } catch (sD) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", sD), this.lastLoss = `it could not be sent the module (${String(sD)})`, wD.terminate(), this.worker = null, void this.start()
        }
        this.watch = new mp.i(mp.f, (DD => {
          this.lose((0, mp.m)(DD), (() => {
            this.options.onStartTimeout(DD)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(DD, zD) {
        switch (zD.type) {
          case "started": {
            this.endWatch();
            const zD = this.Qg;
            if (null === zD) {
              this.coreWaits = !1, this.options.write(0, kz.Yd.WorldgenStarted, 0, 0, DK);
              break
            }
            this.Qg = null;
            for (const {
                message: wD,
                transfer: pD
              }
              of zD) DD.postMessage(wD, pD);
            break
          }
          case "lost":
            this.lose(zD.reason);
            break;
          case "memory":
            var wD, pD;
            null === (wD = (pD = this.options).onMemoryStats) || void 0 === wD || wD.call(pD, zD.stats);
            break;
          case "result":
            zD.status !== kz.rb.Trapped && (this.startsWithoutResult = 0), this.options.write(zD.ticket, kz.Yd.WorldgenResult, zD.status, zD.workerUs, new Uint8Array(zD.bytes, 0, zD.len)), this.recycle(zD.bytes), zD.spare && this.recycle(zD.spare)
        }
      }
      lose(DD, zD) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${DD}`), this.lastLoss = DD, this.endWorker(), this.gone || (zD ? zD() : this.options.onWorkerLost(DD), this.dropHeld(), this.Qg = null, this.options.write(0, kz.Yd.WorldgenLost, kz.ae.Lost, 0, DK), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, kz.Yd.WorldgenLost, kz.ae.Gone, 0, DK)
      }
      endWatch() {
        var DD;
        null === (DD = this.watch) || void 0 === DD || DD.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Qg) {
          for (const {
              message: DD
            }
            of this.Qg) "generate" === DD.type && this.recycle(DD.bytes);
          this.Qg.length = 0
        }
      }
      recycle(DD) {
        this.pool.length < 16 && DD.byteLength > 0 && DD.byteLength <= 16384 && this.pool.push(DD)
      }
    }
    var wK = wD(37724),
      pK = wD(3729),
      sK = wD(40582),
      KK = wD(40909),
      rK = wD(40700);
    const LK = /[(@\s]([^\s(@]+)$/,
      cK = /:\d/;

    function gK(DD, zD) {
      for (let wD = 0; wD + zD.length <= DD.length; wD++) {
        let pD = 0;
        for (; pD < zD.length && DD[wD + pD] === zD[pD];) pD++;
        if (pD === zD.length) return wD
      }
      return -1
    }

    function RK(DD) {
      return "(" === DD || ")" === DD || "@" === DD || "," === DD || " " === DD || "\t" === DD
    }

    function AK(DD, zD) {
      let wD = zD;
      for (; wD > 0 && !RK(DD[wD - 1]);) wD--;
      let pD = zD;
      for (; pD < DD.length && !RK(DD[pD]);) pD++;
      let sD = "";
      for (let KD = wD; KD < pD; KD++) sD += DD[KD];
      return sD
    }
    const UK = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      fK = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      IK = ".user.js";

    function BK(DD, zD) {
      let wD = 0;
      for (; wD < UK.length && UK[wD].origin !== zD[0];) wD++;
      if (wD === UK.length) return zD[0];
      let pD = "";
      for (let rD = zD.index + zD[0].length; rD < DD.length; rD++) pD += DD[rD];
      const sD = (0, dp.m)(dp.Y, fK, [pD]),
        KD = null === sD ? "" : function(DD) {
          let zD = DD.length,
            wD = 0;
          for (; wD < 8 && zD > 8 && DD[zD - 8 + wD] === IK[wD];) wD++;
          8 === wD && (zD -= 8);
          let pD = "",
            sD = !1;
          for (let KD = 0; KD < zD; KD++) {
            let zD = DD[KD];
            "+" === zD ? zD = " " : "%" === zD && (zD = "2" === DD[KD + 1] && "0" === DD[KD + 2] ? " " : "_", KD += 2), -1 !== gK("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", zD) ? (pD += zD, sD = !1) : sD || (pD += "_", sD = !0)
          }
          return pD
        }(sD[1]);
      return "" === KD ? zD[0] : UK[wD].tag + " " + KD
    }

    function GK(DD, zD) {
      var wD;
      const pD = /[^\n]+/g,
        sD = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        KD = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let rD = null,
        LD = null,
        cD = (0, dp.m)(dp.Y, pD, [DD]);
      for (; null !== cD;) {
        const wD = (0, dp.m)(dp.Y, sD, [cD[0]]),
          gD = null === zD ? -1 : gK(cD[0], zD);
        if (-1 !== gD) {
          if (null !== wD) return BK(cD[0], wD);
          const DD = AK(cD[0], gD),
            zD = (0, dp.m)(dp.Y, LK, [cD[0]]),
            pD = null !== (0, dp.m)(dp.Y, cK, [DD]) ? DD : null === zD ? null : zD[1],
            sD = null === pD ? null : (0, dp.m)(dp.Y, KD, [pD]);
          if (null !== sD && "" !== sD[1]) return sD[1]
        }
        null !== wD && (null === rD ? rD = wD[0] : null === LD && wD[0] !== rD && (LD = wD[0])), cD = (0, dp.m)(dp.Y, pD, [DD])
      }
      return null !== (wD = LD) && void 0 !== wD ? wD : null === rD ? "none" : "own"
    }
    const hK = /:(\d+):(\d+)\)?$/;

    function nK(DD, zD) {
      const wD = (0, dp.m)(dp.Y, hK, [zD]);
      return null === wD ? DD : DD + ":" + wD[1] + ":" + wD[2]
    }

    function MK(DD) {
      const zD = /[^\n]+/g,
        wD = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let pD = null,
        sD = "",
        KD = !1,
        rD = (0, dp.m)(dp.Y, zD, [DD]);
      for (; null !== rD;) {
        const LD = (0, dp.m)(dp.Y, wD, [rD[0]]),
          cD = null === LD ? (0, dp.m)(dp.Y, LK, [rD[0]]) : null,
          gD = null !== cD && null !== (0, dp.m)(dp.Y, cK, [cD[1]]) && 0 !== gK(cD[1], "wasm:") ? cD[1] : null;
        if (null === pD) null !== LD ? (pD = LD[2], sD = LD[4]) : null !== gD && (pD = "");
        else if (null !== LD) {
          if (KD = !0, "" !== LD[1]) return {
            reader: "inline",
            frame: nK("blob", rD[0])
          };
          if (LD[2] !== pD) {
            const DD = "moz-extension" === LD[3] || "safari-web-extension" === LD[3];
            let zD = "";
            for (let wD = 0; wD < LD[5].length && wD < 20; wD++) zD += LD[5][wD];
            return {
              reader: DD ? LD[3] : LD[2],
              frame: nK("" === zD ? "-" : zD, rD[0])
            }
          }
          if (LD[4] !== sD) return {
            reader: "inline",
            frame: nK("inline", rD[0])
          }
        } else if (null !== gD) {
          const DD = -1 !== gK(rD[0], "userscript") || -1 !== gK(rD[0], ".user.js");
          return {
            reader: DD ? "userscript" : "inline",
            frame: nK(DD ? "userscript" : "eval", rD[0])
          }
        }
        rD = (0, dp.m)(dp.Y, zD, [DD])
      }
      const LD = KD ? "own" : "unknown";
      return {
        reader: LD,
        frame: LD
      }
    }

    function OK(DD, zD) {
      return (0, wK.c)(function(DD) {
        if ("string" !== typeof DD || 0 === DD.length) return "-";
        let zD = 2166136261;
        const wD = DD.length < 4096 ? DD.length : 4096;
        for (let sD = 0; sD <= wD; sD++) zD ^= sD === wD ? DD.length : (0, dp.m)(dp.fb, DD, [sD]), zD = zD + (zD << 1) + (zD << 4) + (zD << 7) + (zD << 8) + (zD << 24) >>> 0;
        let pD = "";
        for (let sD = 28; sD >= 0; sD -= 4) pD += "0123456789abcdef" [zD >>> sD & 15];
        return pD
      }(zD), MK(DD).frame)
    }
    const JK = (DD, zD) => DD.includes(zD),
      EK = DD => {
        try {
          return DD()
        } catch {
          return !1
        }
      },
      QK = -1,
      XK = DD => {
        try {
          return DD()
        } catch {
          return QK
        }
      };

    function VK(DD, zD) {
      return {
        probe: (wD, pD, sD) => {
          try {
            return ((wD, pD, sD) => {
              switch (wD) {
                case kz.sc.StackCheck:
                  return zD.stackCheck() ? 1 : 0;
                case kz.sc.ConfirmMesh:
                  return zD.confirmMesh();
                case kz.sc.IndexPassReplaced:
                  return zD.indexPassReplaced() ? 1 : 0;
                case kz.sc.ProductSubChanged:
                  return zD.productSubChanged() ? 1 : 0;
                case kz.sc.RenderStatus:
                  return zD.qg();
                case kz.sc.Held:
                  return zD.Qg();
                case kz.sc.PlayerKilledSubs:
                  return zD.playerKilledSubs();
                case kz.cb: {
                  const wD = zD.getComplete();
                  return null === wD ? 0 : (0, dp.m)(dp.y, dp.jb, [wD, new dp.d((0, dp.K)(DD()), pD, sD)]).written
                }
                default:
                  return 0
              }
            })(wD, pD, sD)
          } catch {
            return kz.lc
          }
        }
      }
    }
    class PK {
      constructor(DD) {
        this.write = DD, this.flagsWritten = 0, this.written = (0, dp.o)(null)
      }
      DU(DD) {
        let {
          flags: zD,
          values: wD
        } = DD;
        for (let pD = 0; pD < wD.length; pD++) this.value(wD[pD][0], wD[pD][1]);
        this.setFlags(zD | kz.f.Ready)
      }
      value(DD, zD) {
        this.written[DD] !== zD && this.write(DD, zD, 0) && (this.written[DD] = zD)
      }
      setFlags(DD) {
        const zD = DD & ~this.flagsWritten;
        0 !== zD && this.write(kz.i.Flags, zD, zD) && (this.flagsWritten |= zD)
      }
      originStackHit() {
        return this.write(kz.i.Flags, kz.f.OriginStackHit, kz.f.OriginStackHit)
      }
    }
    const CK = {
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
      xK = 1e3;
    let TK;
    const bK = [1, "length", 0, !1, 2, void 0, null, 3, "q", "c3RhY2", "cw==", 1e5, 91, 238, 213, 172, 4, 5, 108, "i", "j", "stack", "name", "b", "a", !0, 16, 6, 17, 10, "c", 179, 175, 187, 51, 33554432, 67108864, 156, 236, 159, 214, "o", "string", "Q", "h", "m", 50, "k", "functi", "on", "__GLOB", "AL__HE", "LPERS_", "_", 237, 1023, 58, 65536, 55296, 56320, 7, 12, 63, 128, 163, 192, 227, "Invalid byte index", 255, 224, "e", 31, "Invalid continuation byte", 240, 15, "d", 18, 132, "protot", "ype", "decode", "I=", "p", "eTR5bm", "u", "s", "../red", "acted.", "js", "t", "r", "F", 174, 222, 185, "I", 60, "s=", "=", ";", "Fd", 100, "f", "chEven", "dispat", "w", "now", 80, "confir", "mMesh", "produc", "l", "player", "Killed", "number", 65535, "toString", "get", "v", "None", 11, "En", "tOverw", "ritten", "plete"];

    function jK() {}

    function dK() {
      dK = function() {}
    }
    TK = function(DD) {
      let zD = arguments[bK[1]] > bK[0] && arguments[bK[0]] !== bK[5] ? arguments[bK[0]] : () => bK[6],
        wD = arguments[bK[1]] > bK[4] && arguments[bK[4]] !== bK[5] ? arguments[bK[4]] : bK[6],
        pD = arguments[bK[1]] > bK[7] && arguments[bK[7]] !== bK[5] ? arguments[bK[7]] : "";
      const sD = window,
        KD = (bK[2], dp[bK[8]])("RXJyb3" + bK[81]),
        rD = (bK[2], dp[bK[8]])(bK[9] + bK[97]),
        LD = (bK[2], dp[bK[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        gD = (bK[2], dp[bK[8]])(bK[9] + "tUcmFjZUxpbWl0"),
        RD = (bK[2], dp[bK[8]])("bmF0aXZl"),
        AD = [(bK[2], dp[bK[8]])("bWFpbi5qcw=="), (bK[2], dp[bK[8]])("aW5kZXguanM="), (bK[2], dp[bK[8]])("dXNlcnNjcmlwdA=="), (bK[2], dp[bK[8]])("Y29udGVudC5q" + bK[10]), (bK[2], dp[bK[8]])("b3B0aW9ucy5q" + bK[10]), (bK[2], dp[bK[8]])("cG9wdXAuanM="), (bK[2], dp[bK[8]])("LnVzZXIuanM="), (bK[2], dp[bK[8]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        UD = (...DD) => {
          DD[bK[1]] = bK[0];
          const zD = sD[KD],
            wD = zD;
          wD[gD] < bK[11] && (wD[gD] = bK[11]);
          const pD = "string" === typeof(UD = (new zD)[rD]) ? UD : `${UD}`,
            cD = {},
            RD = wD[LD];
          var UD;
          typeof RD === bK[48] + bK[49] && (bK[2], dp[bK[45]])(RD, zD, [cD]);
          const fD = cD[rD],
            ID = DD[bK[2]] ? AD[bK[1]] : AD[bK[1]] - bK[0];
          for (let BD = bK[2]; BD < ID; BD++) {
            if (JK(pD, AD[BD])) return {
              [bK[21]]: pD,
              [bK[22]]: AD[BD]
            };
            if (typeof fD === bK[42] && JK(fD, AD[BD])) {
              function GD() {
                console.log((function(...DD) {
                  if (dK(DD[bK[1]] = bK[0], DD[bK[0]] = DD[bK[2]].length), DD[bK[0]] < bK[4]) return bK[2];
                  if (dK(DD[-bK[12]] = Math.max(...DD[bK[2]]), DD[bK[13]] = Math.min(...DD[bK[2]])), DD[-bK[12]] === DD[bK[13]]) return bK[2];
                  for (dK(DD[bK[16]] = Array(DD[bK[0]] - bK[0]).fill(Number.MAX_SAFE_INTEGER), DD[bK[17]] = Array(DD[bK[0]] - bK[0]).fill(Number.MIN_SAFE_INTEGER), DD[-bK[15]] = Math.ceil((DD[-bK[12]] - DD[bK[13]]) / (DD[bK[0]] - bK[0])), DD[bK[14]] = bK[2]), DD[-bK[13]] = bK[2]; DD[-bK[13]] < DD[bK[0]]; DD[-bK[13]]++) DD[bK[2]][DD[-bK[13]]] !== DD[bK[13]] && DD[bK[2]][DD[-bK[13]]] !== DD[-bK[12]] && dK(DD[bK[14]] = Math.floor((DD[bK[2]][DD[-bK[13]]] - DD[bK[13]]) / DD[-bK[15]]), DD[bK[16]][DD[bK[14]]] = Math.min(DD[bK[16]][DD[bK[14]]], DD[bK[2]][DD[-bK[13]]]), DD[bK[17]][DD[bK[14]]] = Math.max(DD[bK[17]][DD[bK[14]]], DD[bK[2]][DD[-bK[13]]]));
                  for (dK(DD[bK[19]] = Number.MIN_SAFE_INTEGER, DD[bK[20]] = DD[bK[13]]), DD[bK[18]] = bK[2]; DD[bK[18]] < DD[bK[0]] - bK[0]; DD[bK[18]]++) DD[bK[16]][DD[bK[18]]] === Number.MAX_SAFE_INTEGER && DD[bK[17]][DD[bK[18]]] === Number.MIN_SAFE_INTEGER || dK(DD[bK[19]] = Math.max(DD[bK[19]], DD[bK[16]][DD[bK[18]]] - DD[bK[20]]), DD[bK[20]] = DD[bK[17]][DD[bK[18]]]);
                  return DD[bK[19]] = Math.max(DD[bK[19]], DD[-bK[12]] - DD[bK[20]]), DD[bK[19]]
                }))
              }
              return "Db7dj5" + bK[105] in jK && GD(), {
                [bK[21]]: fD,
                [bK[22]]: AD[BD]
              }
            }
          }
          return bK[6]
        },
        fD = (...DD) => (DD[bK[1]] = bK[0], UD(DD[bK[2]]) !== bK[6]);
      let ID = bK[6],
        BD = bK[6],
        GD = bK[6],
        hD = bK[6];
      const nD = (...DD) => {
        DD[bK[1]] = bK[0];
        try {
          return DD[bK[2]]()
        } catch {
          function zD(...DD) {
            var zD;
            dK(DD[bK[1]] = bK[2], zD = function(...DD) {
              dK(DD[bK[1]] = bK[0], this.bA = DD[bK[2]], this.length = bK[2], this.map = {}, this.head = bK[6], this.tail = bK[6])
            }, zD.prototype.get = function(...DD) {
              var zD;
              return dK(DD[bK[1]] = bK[0], zD = this.map[DD[bK[2]]]), zD ? (this.remove(zD), this.insert(zD.key, zD.val), zD.val) : -bK[0]
            }, zD.prototype.put = function(DD, zD) {
              this.map[DD] ? (this.remove(this.map[DD]), this.insert(DD, zD)) : this.length === this.bA ? (this.remove(this.head), this.insert(DD, zD)) : (this.insert(DD, zD), this.length++)
            }, zD.prototype.remove = function(...DD) {
              dK(DD[bK[1]] = bK[0], DD[bK[0]] = DD[bK[2]].prev, DD[bK[23]] = DD[bK[2]].next), DD[bK[23]] && (DD[bK[23]].prev = DD[bK[0]]), DD[bK[0]] && (DD[bK[0]].next = DD[bK[23]]), this.head === DD[bK[2]] && (this.head = DD[bK[23]]), this.tail === DD[bK[2]] && (this.tail = DD[bK[0]]), delete this.map[DD[bK[2]].key]
            }, zD.prototype.insert = function(...DD) {
              dK(DD[bK[1]] = bK[4], DD[bK[24]] = new List(DD[bK[2]], DD[bK[0]]), this.tail ? (this.tail.next = DD[bK[24]], DD[bK[24]].prev = this.tail, this.tail = DD[bK[24]]) : (this.tail = DD[bK[24]], this.head = DD[bK[24]]), this.map[DD[bK[2]]] = DD[bK[24]])
            }, console.log(zD))
          }
          return "h2I7Sc" in jK && zD(), bK[25]
        }
      };
      let MD = bK[3];
      const OD = () => {
          !MD && (bK[2], dp[bK[84]])() && (MD = bK[25])
        },
        JD = (...DD) => {
          DD[bK[1]] = bK[0], "setXfd" in jK && function() {
            var DD;

            function zD() {}
            dK(DD = function(...DD) {
              for (dK(DD[bK[1]] = bK[4], DD[bK[24]] = bK[2], DD[bK[23]] = bK[2], DD[bK[26]] = new zD(bK[2]), DD[bK[17]] = DD[bK[26]], DD[bK[27]] = DD[bK[2]], DD[-bK[28]] = DD[bK[0]]); DD[bK[27]] !== bK[6] || DD[-bK[28]] !== bK[6];) dK(DD[bK[23]] = (DD[bK[27]] ? DD[bK[27]].val : bK[2]) + (DD[-bK[28]] ? DD[-bK[28]].val : bK[2]) + DD[bK[24]], DD[bK[24]] = Math.floor(DD[bK[23]] / bK[29]), DD[bK[17]].next = new zD(DD[bK[23]] % bK[29]), DD[bK[17]] = DD[bK[17]].next, DD[bK[27]] = DD[bK[27]] ? DD[bK[27]].next : bK[6], DD[-bK[28]] = DD[-bK[28]] ? DD[-bK[28]].next : bK[6]);
              return DD[bK[24]] && (DD[bK[17]].next = new zD(DD[bK[24]])), DD[bK[26]].next
            }, console.log(DD))
          }();
          try {
            return DD[bK[2]]()
          } catch {
            function zD(...DD) {
              dK(DD[bK[1]] = bK[2], DD[bK[34]] = function(...zD) {
                return dK(zD[bK[1]] = bK[0], zD[bK[24]] = []), (zD[bK[2]] === bK[0] || zD[bK[2]] >= bK[16]) && DD[bK[30]](zD[bK[24]], [], zD[bK[2]], bK[2]), zD[bK[24]]
              }, DD[bK[30]] = function(...zD) {
                for (zD[bK[1]] = bK[16], zD[bK[16]] = zD[bK[7]]; zD[bK[16]] < zD[bK[4]]; zD[bK[16]]++) {
                  if (zD[bK[0]].length !== zD[bK[16]]) return;
                  for (zD[bK[23]] = bK[2]; zD[bK[23]] < zD[bK[4]]; zD[bK[23]]++) DD[bK[33]](zD[bK[0]], [zD[bK[16]], zD[bK[23]]]) && (dK(zD[bK[0]].push([zD[bK[16]], zD[bK[23]]]), DD[bK[30]](zD[bK[2]], zD[bK[0]], zD[bK[4]], zD[bK[16]] + bK[0])), zD[bK[0]].length === zD[bK[4]] && zD[bK[2]].push(DD[bK[31]](zD[bK[0]])), zD[bK[0]].pop())
                }
              }, DD[bK[31]] = function(...DD) {
                for (dK(DD[bK[1]] = bK[0], DD[bK[24]] = [], DD[-bK[32]] = DD[bK[2]].length), DD[bK[30]] = bK[2]; DD[bK[30]] < DD[-bK[32]]; DD[bK[30]]++)
                  for (DD[bK[24]][DD[bK[30]]] = "", DD[bK[16]] = bK[2]; DD[bK[16]] < DD[-bK[32]]; DD[bK[16]]++) DD[bK[24]][DD[bK[30]]] += DD[bK[2]][DD[bK[30]]][bK[0]] === DD[bK[16]] ? bK[43] : ".";
                return DD[bK[24]]
              }, DD[bK[33]] = function(...DD) {
                for (dK(DD[bK[1]] = bK[4], DD[bK[4]] = DD[bK[2]].length), DD[bK[23]] = bK[2]; DD[bK[23]] < DD[bK[4]]; DD[bK[23]]++) {
                  if (DD[bK[2]][DD[bK[23]]][bK[2]] === DD[bK[0]][bK[2]] || DD[bK[2]][DD[bK[23]]][bK[0]] === DD[bK[0]][bK[0]]) return bK[3];
                  if (Math.abs((DD[bK[2]][DD[bK[23]]][bK[2]] - DD[bK[0]][bK[2]]) / (DD[bK[2]][DD[bK[23]]][bK[0]] - DD[bK[0]][bK[0]])) === bK[0]) return bK[3]
                }
                return bK[25]
              }, console.log(DD[bK[34]]))
            }
            return "K_d9bUx" in jK && zD(), bK[5]
          }
        },
        ED = (...DD) => {
          DD[bK[1]] = bK[0];
          try {
            function zD(...DD) {
              function zD(...DD) {
                return DD[bK[1]] = bK[0], DD[bK[2]][bK[0]] * bK[36] + (DD[bK[2]][bK[2]] < bK[2] ? bK[35] | DD[bK[2]][bK[2]] : DD[bK[2]][bK[2]])
              }

              function wD(DD) {
                switch (((DD & bK[35]) !== bK[2]) * bK[0] + (DD < bK[2]) * bK[4]) {
                  case bK[2]:
                    return [DD % bK[35], Math.trunc(DD / bK[36])];
                  case bK[0]:
                    return [DD % bK[35] - bK[35], Math.trunc(DD / bK[36]) + bK[0]];
                  case bK[4]:
                    return [((DD + bK[35]) % bK[35] + bK[35]) % bK[35], Math.round(DD / bK[36])];
                  case bK[7]:
                    return [DD % bK[35], Math.trunc(DD / bK[36])]
                }
              }
              DD[bK[1]] = bK[2], dK(DD[bK[24]] = zD([bK[4], bK[16]]), DD[-bK[37]] = zD([bK[0], bK[4]]), DD[bK[30]] = DD[bK[24]] + DD[-bK[37]], DD[-bK[38]] = DD[bK[30]] - DD[-bK[37]], DD[-bK[39]] = DD[-bK[38]] * bK[4], DD[-bK[40]] = DD[-bK[39]] / bK[4], console.log(wD(DD[bK[30]])), console.log(wD(DD[-bK[38]])), console.log(wD(DD[-bK[39]])), console.log(wD(DD[-bK[40]])))
            }
            return "CsHwrCE" in jK && zD(), DD[bK[2]](), bK[25]
          } catch {
            return bK[3]
          }
        },
        QD = (bK[2], dp[bK[8]])("a29qbzYzb25i"),
        XD = (bK[2], dp[bK[41]])(bK[6]);
      let VD = bK[6],
        PD = bK[3],
        CD = bK[3];
      const xD = (bK[2], dp[bK[41]])(bK[6]);
      let TD = bK[2];
      const bD = (bK[2], dp[bK[41]])(bK[6]);
      let jD = bK[2];
      const dD = (bK[2], dp[bK[41]])(bK[6]);
      let SD = bK[3],
        iD = bK[3];
      const lD = (...zD) => {
          if (zD[bK[1]] = bK[4], zD[bK[2]] === DD) {
            function sD(...DD) {
              DD[bK[1]] = bK[2]
            }
            if ("CRkCk0" + bK[82] in jK && sD(), VD === bK[6]) {
              function KD(...DD) {
                DD[bK[1]] = bK[2];
                const zD = require("path"),
                  {
                    version: wD
                  } = require("../../package"),
                  {
                    version: pD
                  } = require("@redacted/enterprise-plugin/package"),
                  {
                    version: sD
                  } = require("@redacted/components/package"),
                  {
                    sdkVersion: KD
                  } = require("@redacted/enterprise-plugin");
                require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), zD.resolve(__dirname, bK[86] + bK[87] + bK[88])
              }
              "hNZDp6" + bK[43] in jK && KD(), VD = typeof zD[bK[0]] === bK[114] ? zD[bK[0]] : -bK[0]
            } else PD = bK[25];
            return
          }
          const wD = XD[zD[bK[2]]];
          if (!zD[bK[0]]) return void(wD && (CD = bK[25]));
          if (zD[bK[2]] !== QD) return void(XD[zD[bK[2]]] = zD[bK[0]]);
          XD[zD[bK[2]]] = bK[25];
          const pD = typeof zD[bK[0]] === bK[42] ? zD[bK[0]] : "" + zD[bK[0]];
          if (!dD[pD])
            if ((bK[2], wK[bK[47]])(pD)) iD = bK[25];
            else if ((bK[2], wK[bK[111]])(pD)) {
            if (TD < 8) dK(dD[pD] = bK[25], xD[TD++] = pD, SD ||= (bK[2], wK[bK[44]])(pD));
            else if (!SD && (bK[2], wK[bK[44]])(pD)) {
              function rD() {
                var DD;
                dK(DD = function(...zD) {
                  return dK(zD[bK[1]] = bK[60], zD[bK[24]] = bK[3]), zD[bK[17]] >= zD[bK[4]].length ? bK[25] : zD[bK[27]]["" + zD[bK[7]] + zD[bK[16]] + zD[bK[17]]] !== bK[5] ? zD[bK[27]]["" + zD[bK[7]] + zD[bK[16]] + zD[bK[17]]] : (zD[bK[4]][zD[bK[17]]] === zD[bK[2]][zD[bK[7]]] && zD[bK[4]][zD[bK[17]]] === zD[bK[0]][zD[bK[16]]] ? zD[bK[24]] = DD(zD[bK[2]], zD[bK[0]], zD[bK[4]], zD[bK[7]] + bK[0], zD[bK[16]], zD[bK[17]] + bK[0], zD[bK[27]]) || DD(zD[bK[2]], zD[bK[0]], zD[bK[4]], zD[bK[7]], zD[bK[16]] + bK[0], zD[bK[17]] + bK[0], zD[bK[27]]) : zD[bK[4]][zD[bK[17]]] === zD[bK[2]][zD[bK[7]]] ? zD[bK[24]] = DD(zD[bK[2]], zD[bK[0]], zD[bK[4]], zD[bK[7]] + bK[0], zD[bK[16]], zD[bK[17]] + bK[0], zD[bK[27]]) : zD[bK[4]][zD[bK[17]]] === zD[bK[0]][zD[bK[16]]] && (zD[bK[24]] = DD(zD[bK[2]], zD[bK[0]], zD[bK[4]], zD[bK[7]], zD[bK[16]] + bK[0], zD[bK[17]] + bK[0], zD[bK[27]])), zD[bK[27]]["" + zD[bK[7]] + zD[bK[16]] + zD[bK[17]]] = zD[bK[24]], zD[bK[24]])
                }, console.log((function(...zD) {
                  return dK(zD[bK[1]] = bK[7], zD[-bK[46]] = {}), zD[bK[4]].length !== zD[bK[2]].length + zD[bK[0]].length ? bK[3] : DD(zD[bK[2]], zD[bK[0]], zD[bK[4]], bK[2], bK[2], bK[2], zD[-bK[46]])
                })))
              }
              "OyU3E4" + bK[45] in jK && rD(), dK(dD[pD] = bK[25], xD[8 - bK[0]] = pD, SD = bK[25])
            }
          } else jD < 4 && dK(dD[pD] = bK[25], bD[jD++] = pD)
        },
        WD = (bK[2], pK[bK[47]])(DD),
        ND = WD ? WD.replaced : (() => {
          try {
            return sD[DD]
          } catch {
            return bK[5]
          }
        })();
      if (ED((() => {
          sD[DD] = lD
        })), typeof ND === bK[48] + bK[49]) {
        const DD = ND;
        ED(((...zD) => {
          zD[bK[1]] = bK[2], "l1JbVTL" in jK && function(...DD) {
            function zD(...DD) {
              DD[bK[1]] = bK[0];
              const zD = {};
              for (let wD of DD[bK[2]].replace(/[^w]/g, "").toLowerCase()) zD[wD] = zD[wD] + bK[0] || bK[0];
              return zD
            }

            function wD(...DD) {
              DD[bK[1]] = bK[4];
              const zD = buildCharMap(DD[bK[2]]),
                wD = buildCharMap(DD[bK[0]]);
              for (let pD in zD)
                if (zD[pD] !== wD[pD]) return bK[3];
              return Object.keys(zD).length !== Object.keys(wD).length ? bK[3] : bK[25]
            }

            function pD(...DD) {
              DD[bK[1]] = bK[0];
              return sD(DD[bK[2]]) !== 1 / 0
            }

            function sD(...DD) {
              if (DD[bK[1]] = bK[0], !DD[bK[2]]) return -bK[0];
              const zD = sD(DD[bK[2]].left),
                wD = sD(DD[bK[2]].right),
                pD = Math.abs(zD - wD);
              if (zD === 1 / 0 || wD === 1 / 0 || pD > bK[0]) return 1 / 0;
              return Math.max(zD, wD) + bK[0]
            }
            DD[bK[1]] = bK[2], window[bK[50] + bK[51] + bK[52] + bK[53]] = {
              buildCharacterMap: zD,
              isAnagrams: wD,
              isBalanced: pD,
              getHeightBalanced: sD
            }
          }(), DD(lD)
        }))
      }
      if (WD) {
        const zD = WD.reports;
        ED((() => {
          for (const wD in zD) {
            function pD(...DD) {
              DD[bK[1]] = bK[2]
            }
            "y0NErwK" in jK && pD(), (bK[2], dp[bK[45]])(dp[bK[91]], zD, [wD]) && wD !== DD && lD(wD, zD[wD])
          }
        }))
      }
      const ZD = WD ? bK[4] : bK[0];
      let yD = bK[3];
      const kD = () => {
          if (PD) return bK[25];
          let zD = bK[3];
          return yD = !ED((() => {
            zD = sD[DD] !== lD
          })), zD
        },
        mD = nD(((...zD) => {
          zD[bK[1]] = bK[2], "UuGkRW" + bK[53] in jK && function() {
            ! function(...DD) {
              function zD(...DD) {
                for (dK(DD[bK[1]] = bK[0], DD[bK[24]] = [], DD[bK[23]] = bK[2], DD[bK[7]] = DD[bK[2]].length, DD[bK[54]] = bK[5], DD[bK[17]] = bK[5]); DD[bK[23]] < DD[bK[7]];) dK(DD[bK[54]] = DD[bK[2]].charCodeAt(DD[bK[23]]++), DD[bK[54]] >= bK[58] && DD[bK[54]] <= 56319 && DD[bK[23]] < DD[bK[7]] ? (DD[bK[17]] = DD[bK[2]].charCodeAt(DD[bK[23]]++), (64512 & DD[bK[17]]) == bK[59] ? DD[bK[24]].push(((DD[bK[54]] & bK[55]) << bK[29]) + (DD[bK[17]] & bK[55]) + bK[57]) : (DD[bK[24]].push(DD[bK[54]]), DD[bK[23]]--)) : DD[bK[24]].push(DD[bK[54]]));
                return DD[bK[24]]
              }

              function wD(...zD) {
                for (dK(zD[bK[1]] = bK[0], zD[bK[0]] = zD[bK[2]].length, zD[bK[56]] = -bK[0], zD[bK[30]] = bK[5], zD[bK[16]] = ""); ++zD[bK[56]] < zD[bK[0]];) zD[bK[30]] = zD[bK[2]][zD[bK[56]]], zD[bK[30]] > bK[115] && dK(zD[bK[30]] -= bK[57], zD[bK[16]] += DD[bK[24]](zD[bK[30]] >>> bK[29] & bK[55] | bK[58]), zD[bK[30]] = bK[59] | zD[bK[30]] & bK[55]), zD[bK[16]] += DD[bK[24]](zD[bK[30]]);
                return zD[bK[16]]
              }

              function pD(...DD) {
                if (DD[bK[1]] = bK[0], DD[bK[2]] >= bK[58] && DD[bK[2]] <= 57343) throw Error("Lone surrogate U+" + DD[bK[2]].toString(bK[26]).toUpperCase() + " is not a scalar value")
              }

              function sD(...zD) {
                return zD[bK[1]] = bK[4], DD[bK[24]](zD[bK[2]] >> zD[bK[0]] & bK[62] | bK[63])
              }

              function KD(zD) {
                var wD;
                return (4294967168 & zD) == bK[2] ? DD[bK[24]](zD) : (wD = "", (4294965248 & zD) == bK[2] ? wD = DD[bK[24]](zD >> bK[27] & bK[71] | bK[65]) : (4294901760 & zD) == bK[2] ? dK(pD(zD), wD = DD[bK[24]](zD >> bK[61] & bK[74] | bK[69]), wD += sD(zD, bK[27])) : (4292870144 & zD) == bK[2] && dK(wD = DD[bK[24]](zD >> bK[76] & bK[60] | bK[73]), wD += sD(zD, bK[61]), wD += sD(zD, bK[27])), wD += DD[bK[24]](zD & bK[62] | bK[63]))
              }

              function rD(DD) {
                var wD, pD, sD, rD, LD = zD(DD);
                for (dK(wD = LD.length, pD = -bK[0], sD = void 0, rD = ""); ++pD < wD;) dK(sD = LD[pD], rD += KD(sD));
                return rD
              }

              function LD() {
                var zD;
                if (DD[-bK[64]] >= DD[-bK[66]]) throw Error(bK[67]);
                if (dK(zD = DD[-bK[38]][DD[-bK[64]]] & bK[68], DD[-bK[64]]++), (zD & bK[65]) == bK[63]) return zD & bK[62];
                throw Error(bK[72])
              }

              function cD(...zD) {
                if (dK(zD[bK[1]] = bK[2], zD[bK[24]] = bK[5], zD[bK[23]] = bK[5], zD[bK[4]] = bK[5], zD[bK[75]] = bK[5], zD[bK[70]] = bK[5]), DD[-bK[64]] > DD[-bK[66]]) throw Error(bK[67]);
                if (DD[-bK[64]] == DD[-bK[66]]) return bK[3];
                if (dK(zD[bK[24]] = DD[-bK[38]][DD[-bK[64]]] & bK[68], DD[-bK[64]]++), (zD[bK[24]] & bK[63]) == bK[2]) return zD[bK[24]];
                if ((zD[bK[24]] & bK[69]) == bK[65]) {
                  if (dK(zD[bK[23]] = LD(), zD[bK[70]] = (zD[bK[24]] & bK[71]) << bK[27] | zD[bK[23]]), zD[bK[70]] >= bK[63]) return zD[bK[70]];
                  throw Error(bK[72])
                }
                if ((zD[bK[24]] & bK[73]) == bK[69]) {
                  if (dK(zD[bK[23]] = LD(), zD[bK[4]] = LD(), zD[bK[70]] = (zD[bK[24]] & bK[74]) << bK[61] | zD[bK[23]] << bK[27] | zD[bK[4]]), zD[bK[70]] >= 2048) return pD(zD[bK[70]]), zD[bK[70]];
                  throw Error(bK[72])
                }
                if ((248 & zD[bK[24]]) == bK[73] && (dK(zD[bK[23]] = LD(), zD[bK[4]] = LD(), zD[bK[75]] = LD(), zD[bK[70]] = (zD[bK[24]] & bK[60]) << bK[76] | zD[bK[23]] << bK[61] | zD[bK[4]] << bK[27] | zD[bK[75]]), zD[bK[70]] >= bK[57] && zD[bK[70]] <= 1114111)) return zD[bK[70]];
                throw Error("Invalid UTF-8 detected")
              }

              function gD(...pD) {
                for (dK(pD[bK[1]] = bK[0], DD[-bK[38]] = zD(pD[bK[2]]), DD[-bK[66]] = DD[-bK[38]].length, DD[-bK[64]] = bK[2], pD[bK[0]] = [], pD[bK[23]] = bK[5]);
                  (pD[bK[23]] = cD()) !== bK[3];) pD[bK[0]].push(pD[bK[23]]);
                return wD(pD[bK[0]])
              }
              dK(DD[bK[1]] = bK[0], DD[bK[24]] = String.fromCharCode), dK(DD[-bK[38]] = bK[5], DD[-bK[66]] = bK[5], DD[-bK[64]] = bK[5]), dK(DD[bK[2]].version = "3.0.0", DD[bK[2]].encode = rD, DD[bK[2]].decode = gD)
            }("undefined" === typeof exports ? this.utf8 = {} : exports)
          }();
          const wD = (bK[2], dp.O)(sD, DD);
          return (wD === bK[6] || wD === void bK[2] ? void bK[2] : wD.configurable) !== bK[3] || typeof wD[bK[117]] !== bK[48] + bK[49] || VD !== ZD
        })),
        eD = {},
        oD = () => {
          try {
            return navigator[bK[110] + "tSub"]
          } catch {
            return eD
          }
        },
        aD = oD(),
        uD = wD,
        vD = uD === bK[6] ? ((...DD) => {
          DD[bK[1]] = bK[2];
          const zD = bK[96];
          dK(DD[bK[24]] = bK[3], DD[-bK[64]] = zD - bK[0]);
          const wD = TextDecoder[bK[78] + bK[79]][bK[80]],
            pD = function() {
              if (DD[-bK[64]]++, DD[-bK[64]] === zD) {
                if (EK((() => fD(bK[3])))) {
                  function rD(...DD) {
                    dK(DD[bK[1]] = bK[2], DD[bK[23]] = function(...DD) {
                      for (dK(DD[bK[1]] = bK[0], DD[bK[24]] = DD[bK[2]].length, DD[bK[23]] = [], DD[bK[7]] = bK[2], DD[bK[77]] = bK[2], DD[bK[2]].sort(((DD, zD) => DD - zD))), DD[bK[17]] = bK[2]; DD[bK[17]] < DD[bK[24]]; DD[bK[17]]++)
                        if (!(DD[bK[17]] > bK[2] && DD[bK[2]][DD[bK[17]]] === DD[bK[2]][DD[bK[17]] - bK[0]]))
                          for (dK(DD[bK[7]] = DD[bK[17]] + bK[0], DD[bK[77]] = DD[bK[24]] - bK[0]); DD[bK[7]] < DD[bK[77]];)
                            if (DD[bK[2]][DD[bK[17]]] + DD[bK[2]][DD[bK[7]]] + DD[bK[2]][DD[bK[77]]] < bK[2]) DD[bK[7]]++;
                            else if (DD[bK[2]][DD[bK[17]]] + DD[bK[2]][DD[bK[7]]] + DD[bK[2]][DD[bK[77]]] > bK[2]) DD[bK[77]]--;
                      else {
                        for (DD[bK[23]].push([DD[bK[2]][DD[bK[17]]], DD[bK[2]][DD[bK[7]]], DD[bK[2]][DD[bK[77]]]]); DD[bK[7]] < DD[bK[77]] && DD[bK[2]][DD[bK[7]]] === DD[bK[2]][DD[bK[7]] + bK[0]];) DD[bK[7]]++;
                        for (; DD[bK[7]] < DD[bK[77]] && DD[bK[2]][DD[bK[77]]] === DD[bK[2]][DD[bK[77]] - bK[0]];) DD[bK[77]]--;
                        dK(DD[bK[7]]++, DD[bK[77]]--)
                      }
                      return DD[bK[23]]
                    }, console.log(DD[bK[23]]))
                  }
                  "jTQJnR" in jK && rD(), DD[bK[24]] = bK[25]
                }
                DD[-bK[64]] = bK[2]
              }
              for (var pD = arguments[bK[1]], sD = new Array(pD), KD = bK[2]; KD < pD; KD++) sD[KD] = arguments[KD];
              return (bK[2], dp[bK[45]])(wD, this, sD)
            };
          return ED((() => {
            TextDecoder[bK[78] + bK[79]][bK[80]] = pD
          })), () => {
            if (DD[bK[24]]) {
              function zD(...DD) {
                DD[bK[1]] = bK[2]
              }
              return "YCZ7N6" in jK && zD(), bK[4]
            }
            return XK((() => TextDecoder[bK[78] + bK[79]][bK[80]] !== pD ? bK[27] : bK[2]))
          }
        })() : () => XK((() => uD[bK[108] + bK[109]]())),
        tD = (bK[2], Qz[bK[19]])(),
        FD = (bK[2], dp[bK[41]])(bK[6]),
        YD = (bK[2], dp[bK[41]])(bK[6]);
      let HD = bK[2],
        qD = bK[2],
        Dz = bK[2];
      const zz = (bK[2], dp[bK[41]])(bK[6]),
        wz = (bK[2], dp[bK[41]])(bK[6]);
      let pz = bK[6],
        sz = (bK[2], dp[bK[41]])(bK[6]);
      const Kz = (...DD) => {
          dK(DD[bK[1]] = bK[4], FD[HD] = DD[bK[2]], YD[HD] = DD[bK[0]], HD++)
        },
        rz = (...DD) => (dK(DD[bK[1]] = bK[0], DD[bK[0]] = bK[5]), (DD[bK[0]] = (YD[DD[bK[2]]] ? wz : zz)[FD[DD[bK[2]]]]) !== bK[6] && DD[bK[0]] !== void bK[2] ? DD[bK[0]] : -bK[0]),
        Lz = (bK[2], dp[bK[8]])("d2lvNjQz"),
        cz = (bK[2], dp[bK[8]])("amtsa2plZndu"),
        gz = [
          [(bK[2], dp[bK[8]])("aW9qZndlODNq"), "2"],
          [(bK[2], dp[bK[8]])("a3Bq"), "4"],
          [(bK[2], dp[bK[8]])("dXJocmZm"), "5"]
        ],
        Az = [
          [(bK[2], dp[bK[8]])(bK[83] + bK[81]), bK[82]],
          [(bK[2], dp[bK[8]])(bK[83] + "w="), bK[41]]
        ],
        Uz = (bK[2], dp[bK[8]])("eTR5bnM="),
        fz = (bK[2], dp[bK[8]])("aHRleWpldA=="),
        Iz = (bK[2], dp[bK[8]])("c2RmbGpneGxmY2pr"),
        Bz = [
          [(bK[2], dp[bK[8]])("a3NhZmR1"), bK[90]],
          [(bK[2], dp[bK[8]])("ZGZnYWFzZGFz"), bK[85]],
          [Iz, bK[89]],
          [(bK[2], dp[bK[8]])("bGFzZWRraGFz"), bK[84]],
          [(bK[2], dp[bK[8]])("cW16ZjhrM24="), bK[24]]
        ],
        Gz = [
          [Uz, bK[118]],
          [fz, bK[8]],
          [(bK[2], dp[bK[8]])("bmI3ZnEy"), bK[23]]
        ],
        hz = (bK[2], dp[bK[8]])("bGtxM20="),
        nz = (bK[2], dp[bK[8]])("bWtxN3" + bK[81]),
        Mz = ["mk:tw", "mk:jf"],
        Oz = ((...DD) => {
          DD[bK[1]] = bK[2], "PQ2KSP" in jK && function() {
            var DD = function(DD) {
              var zD, wD, pD, sD, KD = DD.length;
              for (dK(zD = [], wD = bK[2]), pD = bK[2]; pD < KD; pD++) zD.push(pD !== bK[2] && DD[pD] > DD[pD - bK[0]] ? zD[pD - bK[0]] + bK[0] : bK[0]);
              for (sD = KD - bK[0]; sD >= bK[2]; sD--) sD !== KD - bK[0] && DD[sD] > DD[sD + bK[0]] && (zD[sD] = Math.max(zD[sD], zD[sD + bK[0]] + bK[0])), wD += zD[sD];
              return wD
            };
            console.log(DD)
          }();
          try {
            function zD(...DD) {
              DD[bK[1]] = bK[2];
              const zD = require("path"),
                {
                  version: wD
                } = require("../../package"),
                {
                  version: pD
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: sD
                } = require("@redacted/components/package"),
                {
                  sdkVersion: KD
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), zD.resolve(__dirname, bK[86] + bK[87] + bK[88])
            }
            return "rCzhu9" + bK[95] in jK && zD(), DD[bK[24]] = bK[5], (DD[bK[24]] = sD[(bK[2], dp[bK[8]])("V2ViU29ja2V0")]) === bK[6] || DD[bK[24]] === void bK[2] ? void bK[2] : DD[bK[24]][bK[78] + bK[79]]
          } catch {
            return bK[5]
          }
        })(),
        Jz = ["send", "close", "addEventListener", "removeEventListener", bK[104] + bK[103] + bK[89]],
        Ez = ["onmessage", "onopen", "onclos" + bK[70], "onerro" + bK[90]];
      let Xz = bK[3];
      const Vz = (...DD) => {
          DD[bK[1]] = bK[2];
          const wD = zD();
          wD === bK[6] || Xz || (Xz = nD((() => {
            if (Oz !== bK[5] && (bK[2], dp.S)(wD) !== Oz) return bK[25];
            for (let DD = bK[2]; DD < Jz[bK[1]]; DD++)
              if ((bK[2], dp[bK[45]])(dp[bK[91]], wD, [Jz[DD]])) return bK[25];
            for (let DD = bK[2]; DD < Ez[bK[1]]; DD++)
              if (wD[Ez[DD]] !== bK[6] && wD[Ez[DD]] !== bK[5]) return bK[25];
            return bK[3]
          })))
        },
        Pz = (bK[2], dp[bK[8]])("RXZlbnQ=");
      let Cz = kz[bK[100]][bK[119]],
        xz = bK[2];
      const Tz = () => xz++ === bK[17] ? (xz = bK[2], fD(bK[3]) ? kz[bK[102]].CheckFuncHit : bK[2]) : bK[2],
        bz = (bK[2], dp[bK[41]])(bK[6]),
        jz = pD[bK[1]];
      for (let cD = bK[2]; cD < jz; cD++) {
        const DD = (bK[2], dp[bK[45]])(dp.fb, pD, [cD]);
        bz[cD] = DD >= 99 && DD <= 122 ? DD : bK[2]
      }
      const dz = (DD, zD) => {
          return typeof DD === bK[48] + bK[49] && (bK[2], dp[bK[45]])(dp.Y, zD, [(wD = DD, (0, dp.m)(dp.C, wD, []))]) !== bK[6];
          var wD
        },
        Sz = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        iz = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        lz = [
          [CK["Dispat" + bK[103] + bK[89]], () => !dz(EventTarget[bK[78] + bK[79]][bK[104] + bK[103] + bK[89]], Sz)],
          [CK.PerformanceNow, () => !dz(performance[bK[106]], iz)],
          [CK["DateNo" + bK[105]], () => !dz(Date[bK[106]], iz)]
        ],
        Wz = (bK[2], dp[bK[41]])(bK[6]);
      let Nz = bK[2];
      const Zz = {
        stackCheck: (...DD) => {
          dK(DD[bK[1]] = bK[2], DD[bK[24]] = bK[6]);
          const zD = EK((() => (DD[bK[24]] = UD(bK[25]), DD[bK[24]] !== bK[6])));
          var wD, pD;
          return DD[bK[24]] !== bK[6] && ID === bK[6] && (wD = DD[bK[24]][bK[21]], pD = DD[bK[24]][bK[22]], ID = (0, wK.q)(GK(wD, pD))), zD
        },
        [bK[108] + bK[109]]: (...DD) => {
          DD[bK[1]] = bK[2];
          const zD = vD();
          if (zD === bK[4]) return bK[4];
          if (XD[Lz]) return bK[7];
          const wD = XK((() => sD[cz] ? bK[16] : bK[2]));
          return wD !== bK[2] ? wD === bK[16] ? bK[16] : bK[2] : zD === QK ? bK[2] : zD === bK[27] ? bK[27] : (OD(), pD = Function[bK[78] + bK[79]], KD = bK[116], rD = DD => DD.writable !== bK[25], EK((() => {
            const DD = Object.getOwnPropertyDescriptor(pD, KD);
            return void 0 !== DD && rD(DD)
          })) ? bK[60] : bK[2]);
          var pD, KD, rD
        },
        indexPassReplaced: kD,
        [bK[110] + "tSubChanged"]: (...DD) => {
          if (DD[bK[1]] = bK[2], aD === eD || yD) return bK[3];
          const zD = oD();
          return zD !== eD && zD !== aD
        },
        Qg: (...DD) => {
          dK(DD[bK[1]] = bK[2], DD[bK[107]] = jz);
          for (let zD = bK[2]; zD < lz[bK[1]] + Nz; zD++) {
            const wD = zD < lz[bK[1]] ? lz[zD] : Wz[zD - lz[bK[1]]];
            wD[bK[2]] < DD[bK[107]] && nD(wD[bK[0]]) && (DD[bK[107]] = wD[bK[2]])
          }
          return DD[bK[107]] < jz ? bz[DD[bK[107]]] : bK[2]
        },
        qg: () => tD ? Qz[bK[47]] : 8,
        [bK[112] + bK[113] + "Subs"]: (...DD) => {
          DD[bK[1]] = bK[2];
          const zD = cD[bK[111]].pM[bK[112] + bK[113]];
          return typeof zD === bK[114] && zD > bK[2] ? zD > bK[115] ? bK[115] : zD : bK[2]
        },
        ["getCom" + bK[124]]: () => {
          var DD;
          HD = bK[2];
          for (let wD = bK[2]; wD < TD; wD++) Kz(xD[wD], bK[25]);
          for (let wD = bK[2]; wD < gz[bK[1]]; wD++) XD[gz[wD][bK[2]]] && Kz(gz[wD][bK[0]], bK[25]);
          const zD = XK((() => JK(atob[bK[116]](), RD) ? bK[2] : bK[0]));
          zD === bK[0] && Kz("g", bK[25]), OD();
          const pD = zD === QK ? QK : XK(((...DD) => {
            DD[bK[1]] = bK[2];
            const zD = Object.getOwnPropertyDescriptor(window, "atob");
            return zD === bK[5] ? QK : zD[bK[117]] !== bK[5] ? bK[0] : bK[2]
          }));
          pD === bK[0] && Kz(bK[102], bK[25]);
          const sD = pD === QK;
          for (let wD = bK[2]; wD < Az[bK[1]] && !sD; wD++) XD[Az[wD][bK[2]]] && Kz(Az[wD][bK[0]], bK[25]);
          const KD = HD > TD;
          let rD = bK[6];
          TD === bK[2] && (jD > bK[2] ? rD = bD[bK[2]] : iD ? rD = "fp" : KD || (rD = XD[Uz] ? bK[118] : XD[fz] ? bK[8] : bK[6]));
          for (let wD = bK[2]; wD < Bz[bK[1]] && !sD; wD++) XD[Bz[wD][bK[2]]] && Kz(Bz[wD][bK[0]], bK[25]);
          const LD = HD,
            cD = (bK[2], rK[bK[30]])(),
            gD = cD !== bK[6] && (bK[2], Rz[bK[8]])(cD);
          gD && !sD && Kz(cD, bK[3]), mD && Kz("ix", bK[3]), CD && Kz("il", bK[3]);
          for (let wD = bK[2]; wD < jD; wD++) Kz(bD[wD], bK[25]);
          for (let wD = bK[2]; wD < Gz[bK[1]]; wD++) XD[Gz[wD][bK[2]]] && Kz(Gz[wD][bK[0]], bK[25]);
          XD[hz] && Kz("mk:lk", bK[25]);
          const UD = (DD => {
            "YS2KNu" + bK[85] in jK && function(...DD) {
              dK(DD[bK[1]] = bK[2], DD[bK[24]] = function(DD) {
                var zD, wD, pD, sD, KD = DD.length;
                for (dK(zD = [], wD = bK[2], pD = bK[2], DD.sort(((DD, zD) => DD - zD))), sD = bK[2]; sD < KD; sD++)
                  if (!(sD > bK[2] && DD[sD] === DD[sD - bK[0]]))
                    for (dK(wD = sD + bK[0], pD = KD - bK[0]); wD < pD;)
                      if (DD[sD] + DD[wD] + DD[pD] < bK[2]) wD++;
                      else if (DD[sD] + DD[wD] + DD[pD] > bK[2]) pD--;
                else {
                  for (zD.push([DD[sD], DD[wD], DD[pD]]); wD < pD && DD[wD] === DD[wD + bK[0]];) wD++;
                  for (; wD < pD && DD[pD] === DD[pD - bK[0]];) pD--;
                  dK(wD++, pD--)
                }
                return zD
              }, console.log(DD[bK[24]]))
            }();
            for (let zD = bK[2]; zD < Mz[bK[1]]; zD++)
              if (DD === Mz[zD]) return Mz[zD];
            return bK[6]
          })(XD[nz]);
          if (UD !== bK[6] && Kz(UD, bK[25]), wD !== bK[6] && JD(wD.emitReplaced) === bK[25] && Kz("mk:em", bK[25]), Xz && Kz("3s", bK[3]), dp.$ && Kz("3b", bK[3]), OD(), MD && Kz("3d", bK[3]), sD && Kz("3g", bK[3]), cD === bK[6] || gD || Kz(cD, bK[3]), ID !== bK[6] && Kz(ID, bK[3]), hD === bK[6] && wD !== bK[6]) {
            const DD = JD(wD[bK[108] + "mMeshHitStac" + bK[47]]);
            typeof DD === bK[42] && (hD = function(DD, zD, wD) {
              let pD = 0;
              for (; pD < wD && -1 === gK(DD, zD[pD]);) pD++;
              return (0, wK.f)(GK(DD, pD < wD ? zD[pD] : null))
            }(DD, AD, AD[bK[1]] - bK[0]))
          }
          var fD;
          if (hD !== bK[6] && Kz(hD, bK[3]), BD === bK[6] && Qz[bK[102]] !== bK[6] && dK((fD = Qz[bK[102]], BD = (0, wK.e)(MK(fD).reader)), GD = OK(Qz[bK[102]], JD((() => Qz[bK[30]] === bK[6] ? bK[6] : (bK[2], dp.hb)(Qz[bK[30]]))))), BD !== bK[6] && Kz(BD, bK[3]), GD !== bK[6] && Kz(GD, bK[3]), HD === bK[2]) return bK[6];
          if (rD === bK[6] && YD[bK[2]] && !(bK[2], wK[bK[44]])(FD[bK[2]]))
            for (let wD = bK[0]; wD < LD; wD++)
              if (YD[wD] && (bK[2], wK[bK[44]])(FD[wD])) {
                const DD = FD[wD];
                for (let zD = wD; zD > bK[2]; zD--) dK(FD[zD] = FD[zD - bK[0]], YD[zD] = YD[zD - bK[0]]);
                dK(FD[bK[2]] = DD, YD[bK[2]] = bK[25]);
                break
              } let nD = bK[2],
            ED = rD === bK[6] ? bK[2] : LD;
          if (ED > bK[2] && cD !== bK[6] && gD && !sD) {
            for (let DD = ED; DD > bK[2]; DD--) dK(FD[DD] = FD[DD - bK[0]], YD[DD] = YD[DD - bK[0]]);
            dK(FD[bK[2]] = cD, YD[bK[2]] = bK[3], nD = bK[0], ED++)
          }
          let QD = bK[2];
          if (qD++ % bK[4] === bK[0])
            for (let wD = bK[0]; wD < HD; wD++) rz(wD) < rz(QD) && (QD = wD);
          const VD = FD[QD];
          (YD[QD] ? wz : zz)[VD] = Dz++;
          const PD = QD >= nD && QD < ED;
          if (!YD[QD] || VD === rD || QD === bK[2] && !PD) return VD === bK[89] ? (bK[2], wK[bK[84]])(XD[Iz], wK[bK[23]]) : VD;
          const dD = (DD = rD) !== bK[6] && DD !== void bK[2] ? DD : FD[bK[2]];
          return dD !== pz && dK(pz = dD, sz = (bK[2], dp[bK[41]])(bK[6])), sz[VD] ??= (bK[2], wK[bK[45]])(VD, dD)
        }
      };
      let yz = kz[bK[100]][bK[119]];
      const mz = () => Cz !== kz[bK[100]][bK[119]] ? Cz : yz;
      let ez = bK[2],
        oz = bK[4],
        az = bK[2],
        uz = bK[2];
      return {
        checks: Zz,
        checkEvent: DD => {
          try {
            function zD() {
              var DD;
              dK(DD = function(...zD) {
                if (dK(zD[bK[1]] = bK[7], zD[bK[93]] = {}), zD[bK[2]][zD[bK[0]] + zD[bK[4]]] !== bK[5]) return zD[bK[2]][zD[bK[0]] + zD[bK[4]]];
                if (zD[bK[0]] === zD[bK[4]]) return bK[25];
                for (zD[-bK[92]] = bK[2]; zD[-bK[92]] < zD[bK[0]].length; zD[-bK[92]]++) zD[bK[93]][zD[bK[0]][zD[-bK[92]]]] === bK[5] && (zD[bK[93]][zD[bK[0]][zD[-bK[92]]]] = bK[2]), zD[bK[93]][zD[bK[4]][zD[-bK[92]]]] === bK[5] && (zD[bK[93]][zD[bK[4]][zD[-bK[92]]]] = bK[2]), dK(zD[bK[93]][zD[bK[0]][zD[-bK[92]]]]++, zD[bK[93]][zD[bK[4]][zD[-bK[92]]]]--);
                for (zD[-bK[94]] in zD[bK[93]])
                  if (zD[bK[93]][zD[-bK[94]]] !== bK[2]) return zD[bK[2]][zD[bK[0]] + zD[bK[4]]] = bK[3], bK[3];
                for (zD[bK[27]] = bK[0]; zD[bK[27]] < zD[bK[0]].length; zD[bK[27]]++)
                  if (DD(zD[bK[2]], zD[bK[0]].substr(bK[2], zD[bK[27]]), zD[bK[4]].substr(bK[2], zD[bK[27]])) && DD(zD[bK[2]], zD[bK[0]].substr(zD[bK[27]]), zD[bK[4]].substr(zD[bK[27]])) || DD(zD[bK[2]], zD[bK[0]].substr(bK[2], zD[bK[27]]), zD[bK[4]].substr(zD[bK[4]].length - zD[bK[27]])) && DD(zD[bK[2]], zD[bK[0]].substr(zD[bK[27]]), zD[bK[4]].substr(bK[2], zD[bK[4]].length - zD[bK[27]]))) return zD[bK[2]][zD[bK[0]] + zD[bK[4]]] = bK[25], bK[25];
                return zD[bK[2]][zD[bK[0]] + zD[bK[4]]] = bK[3], bK[3]
              }, console.log((function(...zD) {
                return zD[bK[1]] = bK[4], DD({}, zD[bK[2]], zD[bK[0]])
              })))
            }
            "VqsB0p" in jK && zD();
            const wD = sD[Pz];
            if (typeof wD === bK[48] + bK[49] && !(DD instanceof wD) && !(bK[2], dp[bK[95]])(DD)) {
              function KD(...DD) {
                DD[bK[1]] = bK[2]
              }
              return "EMrh6z" in jK && KD(), Cz = kz[bK[100]].NotEvent, bK[2]
            }
            if (DD.isTrusted === bK[3]) return bK[2];
            let pD = bK[2];
            for (const rD in DD) pD++;
            return pD < bK[29] ? (Cz = kz[bK[100]]["FewPropertie" + bK[85]], bK[2]) : Tz()
          } catch {
            function LD(...DD) {
              function zD() {}
              DD[bK[1]] = bK[2], dK(DD[bK[24]] = function(...DD) {
                for (dK(DD[bK[1]] = bK[4], DD[bK[24]] = bK[2], DD[bK[23]] = bK[2], DD[bK[30]] = new zD(bK[2]), DD[bK[96]] = DD[bK[30]], DD[-bK[101]] = DD[bK[2]], DD[bK[102]] = DD[bK[0]]); DD[-bK[101]] !== bK[6] || DD[bK[102]] !== bK[6];) dK(DD[bK[23]] = (DD[-bK[101]] ? DD[-bK[101]].val : bK[2]) + (DD[bK[102]] ? DD[bK[102]].val : bK[2]) + DD[bK[24]], DD[bK[24]] = Math.floor(DD[bK[23]] / bK[29]), DD[bK[96]].next = new zD(DD[bK[23]] % bK[29]), DD[bK[96]] = DD[bK[96]].next, DD[-bK[101]] = DD[-bK[101]] ? DD[-bK[101]].next : bK[6], DD[bK[102]] = DD[bK[102]] ? DD[bK[102]].next : bK[6]);
                return DD[bK[24]] && (DD[bK[96]].next = new zD(DD[bK[24]])), DD[bK[30]].next
              }, console.log(DD[bK[24]]))
            }
            "vNp32r" + bK[20] in jK && LD()
          }
          return bK[2]
        },
        checkPadCall: () => {
          try {
            return Tz()
          } catch {
            return bK[2]
          }
        },
        usedProp: mz,
        watchHeld: (...DD) => {
          dK(DD[bK[1]] = bK[4], DD[bK[24]] = bK[5]);
          const zD = ED((() => {
            DD[bK[24]] = DD[bK[0]]()
          }));
          Wz[Nz++] = [DD[bK[2]], () => !zD || DD[bK[0]]() !== DD[bK[24]]]
        },
        DU: (...DD) => {
          DD[bK[1]] = bK[2];
          const zD = kD();
          return ((...DD) => {
            if (dK(DD[bK[1]] = bK[0], DD[bK[24]] = bK[5], DD[bK[23]] = bK[5]), wD !== bK[6]) {
              const zD = JD(wD.oR),
                pD = "v3" === zD ? bK[7] : "v5" === zD ? bK[17] : "v6" === zD ? bK[27] : bK[4];
              pD !== bK[4] && (oz = pD);
              const sD = JD(wD["inbuil" + bK[122] + bK[123]]);
              typeof sD === bK[114] && sD >= bK[2] && sD <= bK[120] && (sD | bK[2]) === sD && (az = sD), dK(DD[bK[24]] = JD(wD.reflectApplyHit), DD[bK[23]] = JD(wD.definerHit))
            }
            const zD = DD[bK[2]] ? bK[74] : "11" === DD[bK[23]] ? bK[120] : "13" === DD[bK[23]] ? 13 : DD[bK[24]] !== bK[5] && DD[bK[24]] !== bK[6] ? bK[4] : "10" === DD[bK[23]] ? bK[29] : "12" === DD[bK[23]] ? bK[61] : bK[2];
            zD !== bK[2] && (uz = zD)
          })(zD), ez++ % 10 === bK[2] && (Vz(), EK((() => !JK(sD[KD][bK[116]][bK[116]](), RD))) && (yz = yz === kz[bK[100]][bK[121]] ? kz[bK[100]][bK[121]] : kz[bK[100]].Fr), EK((() => !JK(sD[KD][bK[116]](), RD))) && (yz = kz[bK[100]][bK[121]])), {
            flags: zD ? kz[bK[102]].Butto : bK[2],
            values: [
              [kz[bK[19]].PhysicsVersion, oz],
              [kz[bK[19]]["Inbuil" + bK[122] + bK[123]], az],
              [kz[bK[19]]["AltCom" + bK[124]], uz],
              [kz[bK[19]]["ProbeUsedPro" + bK[82]], mz()]
            ]
          }
        }
      }
    };
    const SK = "[bloxd-wasm-client]",
      iK = "bloxdWasmDownloadFailed",
      lK = ww.c,
      WK = "boot",
      NK = "playSources",
      ZK = "wasmBuild",
      yK = "bloxd-wasm-joined",
      kK = "bloxd-wasm-first-view",
      mK = "bloxd-wasm-playable-legacy",
      eK = 1048576,
      oK = 8 * eK,
      aK = 1006,
      uK = 1e3,
      vK = "You lost connection to the server.",
      tK = "general:lostConnection",
      FK = 1048576,
      YK = 5e3,
      HK = 100,
      qK = [2e3, 1e4, 3e4],
      Dr = 3e4;
    let zr = null,
      wr = null,
      pr = !1,
      sr = !1,
      Kr = !1,
      rr = null,
      Lr = null,
      cr = null,
      gr = null,
      Rr = null,
      Ar = null,
      Ur = null;
    const fr = new class {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = DD, this.soundOn = zD, this.now = wD, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var DD;
        null === (DD = this.player) || void 0 === DD || DD.prepare()
      }
      preload(DD) {
        var zD;
        this.stopped || (null === (zD = this.player) || void 0 === zD || zD.preload(DD))
      }
      endSession() {
        var DD, zD;
        null === (DD = this.player) || void 0 === DD || DD.cancelPreload(), null === (zD = this.player) || void 0 === zD || zD.freeSheetsAfterGame()
      }
      load(DD) {
        if (null !== this.player || this.stopped) return;
        this.player = DD, DD.setMaster(this.master, this.soundOn);
        const zD = this.now(),
          wD = this.local;
        this.local = [];
        for (const sD of wD)
          if (!(sD.stopped || !sD.loop && zD - sD.at >= 300)) try {
            this.start(sD, DD, zD)
          } catch (pD) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", pD)
          }
      }
      start(DD, zD, wD) {
        const {
          name: pD,
          pos: sD,
          ear: KD,
          maxHearDist: rD,
          refDistance: LD,
          loop: cD,
          fade: gD
        } = DD, RD = zD.playGame(pD, Wz(DD, wD), sD, KD, rD, LD, cD);
        if (DD.sound = RD, 1 !== DD.rate && RD.rate(DD.rate), null !== DD.panner && RD.setPannerAttr(DD.panner), null !== DD.moved && RD.setPosition(DD.moved), null !== gD && wD - gD.at < gD.ms) {
          const zD = lz(this.master);
          zD > 0 ? RD.fade(0, DD.volume * zD, gD.at + gD.ms - wD) : RD.setRelativeVolume(DD.volume)
        }
      }
      onAudioEvent(DD, zD, wD, pD) {
        var sD, KD;
        return null === (sD = null === (KD = this.player) || void 0 === KD ? void 0 : KD.onAudioEvent(DD, zD, wD, pD)) || void 0 === sD || sD
      }
      applyListener(DD) {
        var zD;
        null === (zD = this.player) || void 0 === zD || zD.applyListener(DD)
      }
      playGame(DD, zD, wD, pD, sD, KD, rD) {
        if (this.stopped) return iz.d;
        if (this.player) return this.player.playGame(DD, zD, wD, pD, sD, KD, rD);
        const LD = this.now();
        this.local = this.local.filter((DD => !DD.stopped && (DD.loop || LD - DD.at < 300)));
        const cD = {
          name: DD,
          volume: lz(zD),
          fade: null,
          pos: wD && [wD[0], wD[1], wD[2]],
          ear: pD && [pD[0], pD[1], pD[2]],
          maxHearDist: sD,
          refDistance: KD,
          loop: rD,
          rate: 1,
          panner: null,
          moved: null,
          at: LD,
          stopped: !1,
          sound: null
        };
        this.local.push(cD);
        const gD = {
          stop: () => {
            var DD;
            return cD.stopped = !0, null === (DD = cD.sound) || void 0 === DD || DD.stop(), gD
          },
          fade: (DD, zD, wD) => {
            if (cD.sound) return cD.sound.fade(DD, zD, wD), gD;
            const pD = lz(this.master),
              sD = lz(pD > 0 ? zD / pD : zD > 0 ? cD.volume : 0),
              KD = this.now(),
              rD = Wz(cD, KD);
            return cD.volume = sD, cD.fade = wD > 0 && rD !== sD ? {
              from: rD,
              at: KD,
              ms: wD
            } : null, gD
          },
          rate: DD => (cD.sound ? cD.sound.rate(DD) : cD.rate = DD, gD),
          getVolume: () => cD.sound ? cD.sound.getVolume() : cD.volume * lz(this.master),
          getRelativeVolume: () => cD.sound ? cD.sound.getRelativeVolume() : cD.volume,
          setRelativeVolume: DD => (cD.sound ? cD.sound.setRelativeVolume(DD) : (cD.volume = lz(DD), cD.fade = null), gD),
          setPannerAttr: DD => (cD.sound ? cD.sound.setPannerAttr(DD) : cD.panner = {
            ...DD
          }, gD),
          setPosition: DD => (cD.sound ? cD.sound.setPosition(DD) : cD.moved = [DD[0], DD[1], DD[2]], gD)
        };
        return gD
      }
      setMaster(DD, zD) {
        var wD;
        this.master = DD, this.soundOn = zD, null === (wD = this.player) || void 0 === wD || wD.setMaster(DD, zD)
      }
      stop() {
        var DD;
        this.stopped = !0, null === (DD = this.player) || void 0 === DD || DD.stopAll();
        for (const zD of this.local) zD.stopped = !0;
        this.local = []
      }
    }((0, Xz.b)(), !0);
    let Ir = {
        wasm: "unknown",
        client: String(wz.e)
      },
      Br = null,
      Gr = () => {};
    const hr = new Promise((DD => {
      Gr = DD
    }));
    let nr = () => {};
    const Mr = new Promise((DD => {
      nr = DD
    }));
    let Or, Jr = null,
      Er = null,
      Qr = null,
      Xr = null,
      Vr = null,
      Pr = null,
      Cr = null,
      xr = null,
      Tr = null,
      br = null,
      jr = null,
      dr = null,
      Sr = null,
      ir = null,
      lr = null,
      Wr = null,
      Nr = null,
      Zr = null,
      yr = null,
      kr = !1,
      mr = null;
    const er = new Set,
      or = new Set;

    function ar(DD) {
      if (!er.has(DD)) {
        er.add(DD);
        for (const wD of or) try {
          wD(DD)
        } catch (zD) {
          console.error(`${SK} a startup listener threw`, zD)
        }
      }
    }

    function ur(DD) {
      kr = !0, DD.isStopped || ar("texturesIn")
    }
    let vr = 1,
      tr = -1 / 0,
      Fr = -1 / 0,
      Yr = -1 / 0,
      Hr = !1,
      qr = null,
      DL = !1,
      zL = !1,
      wL = 0,
      pL = null,
      sL = !1;
    const KL = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let rL = 0,
      LL = 0,
      cL = null,
      gL = null,
      RL = null,
      AL = null;
    const UL = new WeakMap;
    let fL = null,
      IL = null,
      BL = !1,
      GL = null,
      hL = null,
      nL = null,
      ML = null,
      OL = null,
      JL = null,
      EL = 0,
      QL = null,
      XL = null,
      VL = null,
      PL = null,
      CL = -1 / 0,
      xL = null;
    const TL = new Set;
    let bL = !1,
      jL = null;
    const dL = new Map,
      SL = new Set;
    let iL = !1;
    const lL = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let WL = null,
      NL = () => [0, 0],
      ZL = () => {},
      yL = () => {},
      kL = null,
      mL = null;
    const eL = new class {
      constructor(DD) {
        this.reached = DD, this.next = 1
      }
      observe(DD) {
        if (!(DD < this.next)) {
          for (; this.next <= DD;) this.next *= 2;
          this.reached(DD)
        }
      }
    }((DD => {
      console.warn(`${SK} chunk cancels from the server this session: ${DD}`)
    }));
    let oL = 1,
      aL = null,
      uL = null,
      vL = null,
      tL = null,
      FL = null,
      YL = !1,
      HL = !1,
      qL = 0,
      Dc = null,
      zc = !1,
      wc = null,
      pc = null,
      sc = !1;
    const Kc = new class {
      constructor(DD) {
        this.KG = DD, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(DD, zD, wD) {
        (0, xz.b)(DD) && (this.lossPending = !1);
        const pD = wD - this.lastFrameMs;
        this.lastFrameMs = wD, this.lossPending && zD && (0, xz.f)(DD) ? (null === this.undrawnSinceMs || pD > 1e3) && (this.undrawnSinceMs = wD) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && wD - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(DD) {
        DD !== this.shown && (this.shown = DD, this.KG(DD))
      }
    }((DD => {
      cD.l.KG(ID.d, DD)
    }));
    let rc = !1,
      Lc = !0,
      cc = null,
      gc = !1,
      Rc = !1,
      Ac = !1;

    function Uc() {
      return cr ??= Promise.all([wD.e(198), wD.e(142), wD.e(59)]).then((() => wD(50757))).then((DD => (Lr = DD, Object.assign(globalThis, {
        bloxdPreviewPage: DD.pagePreviews()
      }), DD)), (DD => {
        throw cr = null, DD
      })), cr
    }

    function fc() {
      return rr ??= wD.e(57).then((() => wD(50768))).catch((DD => {
        throw rr = null, new QD.c(DD)
      })), rr
    }
    class Ic {
      constructor() {
        this.host = null
      }
      open(DD) {
        return null !== this.host ? DD(this.host) : Uc().then((zD => (this.host ??= new zD.WasmPreviewHost(zD.pagePreviews()), DD(this.host))))
      }
      openMob(DD) {
        return this.open((zD => zD.openMob(DD)))
      }
      openPet(DD) {
        return this.open((zD => zD.openPet(DD)))
      }
      openMobLineup(DD) {
        return this.open((zD => zD.openMobLineup(DD)))
      }
      openCharacter(DD, zD) {
        return this.open((wD => wD.openCharacter(DD, zD)))
      }
    }

    function Bc() {
      Kr || (Kr = !0, gs.j.setHost(new Ic), (0, Cw.p)(), Ks.g.setFollower(hg), Object.assign(globalThis, {
        bloxdPreviews: gs.j
      }))
    }

    function Gc() {
      Uc().then((DD => {
        DD.pagePreviews().prefetch()
      }), (() => {}))
    }

    function hc() {
      let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (sr) return;
      sr = !0, rc = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Lc = !rc, console.info(`${SK} starting`), pr || (pr = !0, (0, ID.L)(new jz(lc, oc)), (0, UD.o)(new dz), (0, ID.K)(new Sz), (0, ID.A)()), rc && cD.l.subscribe("appManagerUpdated|gameState", ic), Bc(), (0, Qw.setCrashScreen)((DD => {
        let {
          text: zD,
          reload: wD
        } = DD;
        ! function(DD, zD) {
          var wD, pD;
          if (gc) return;
          gc = !0, (0, Tw._)(), null === (wD = xL) || void 0 === wD || wD.abort(), xL = null, rs.c.release();
          const sD = rc ? null !== (pD = DD.cancel) && void 0 !== pD ? pD : "general:back" : null;
          Vp({
            ...DD,
            cancel: sD
          }).then((DD => {
            DD && zD && Rc ? ((0, fz.s)("reloadOntoJs"), (0, oD.g)(fz.w)) : DD && zD ? (0, oD.j)() : rc && (0, oD.e)("/")
          }))
        }(zD, wD)
      })), (0, tp.i)(), (0, Qz.i)();
      let zD = null;
      try {
        zD = TK("38gcjt0lwbe", (() => {
          var DD, zD;
          return null !== (DD = null === (zD = Jr) || void 0 === zD ? void 0 : zD.ws) && void 0 !== DD ? DD : null
        }), DD, "gyshxeimfd")
      } catch (sD) {
        console.error(`${SK} probes`, sD)
      }
      const pD = function() {
        const DD = (0, Tp.l)(),
          zD = (0, Tp.i)();
        let wD = !1;
        return pD => {
          DD && !wD && (wD = !0, (0, Qw.reportStaleBuildReload)(DD, zD, pD))
        }
      }();
      Mg(), rc || function() {
        const DD = function(DD) {
          var zD;
          const wD = new URLSearchParams(DD),
            pD = wD.get("game");
          return pD ? {
            game: pD,
            lobby: null !== (zD = wD.get("lobby")) && void 0 !== zD ? zD : null
          } : null
        }(window.location.search);
        if (DD) return (0, pz.l)(DD.game) && Mg().request(), void Oc(DD.game, DD.lobby);
        const zD = new URLSearchParams(window.location.search).get("ws");
        if (!zD) return;
        hr.then((DD => {
          DD && async function(DD, zD) {
            try {
              await (0, QD.k)(DD), GL = Fc(new WebSocket(zD)), null !== GL && rs.c.setGame(null), nc()
            } catch (sD) {
              console.error(`${SK} ?ws=${zD} did not attach`, sD)
            }
          }(DD, zD)
        }))
      }(), async function(DD) {
        var zD, pD, KD, rD, LD, gD;
        if ("undefined" === typeof WebAssembly) return Ag("noWebAssembly", "This browser has no WebAssembly"), null;
        const RD = await (0, Bs.N)();
        if ((0, Qw.setCrashBackend)((0, ww.n)(RD) ? "unsupported" : null !== (zD = null === RD || void 0 === RD ? void 0 : RD.backend) && void 0 !== zD ? zD : "none"), (0, ww.n)(RD)) return Ag("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${RD.missing.join(", ")}`, {
          missing: RD.missing.join(",")
        }), null;
        if ((0, es.t)("render")) try {
          const {
            startRenderDebug: DD
          } = await Promise.all([wD.e(77), wD.e(48)]).then((() => wD(4710)));
          DD(RD)
        } catch (Xz) {
          console.warn("The render debug topic didn't load", Xz)
        }
        if ((0, es.t)("renderlite")) try {
          const {
            startRenderLite: DD
          } = await Promise.all([wD.e(269), wD.e(49)]).then((() => wD(50786)));
          vL = DD(RD)
        } catch (Xz) {
          console.warn("The renderlite debug topic didn't load", Xz)
        }
        if ((0, es.t)("renderprobe")) try {
          const {
            startRenderProbe: DD
          } = await wD.e(50).then((() => wD(50792)));
          DD(RD)
        } catch (Xz) {
          console.warn("The renderprobe debug topic didn't load", Xz)
        }
        let AD = null;
        if (null !== RD && Ug()) {
          const DD = (0, Pp.c)(RD);
          null === DD || "webgl" !== RD.backend && !(0, Iz.r)(DD) || (0, Bz.o)(DD, Qw.reportGpuWasmPopulation), null !== DD && (0, Iz.l)(DD), AD = (0, Pp.b)(RD, DD)
        }
        if (null !== RD && null !== AD) return (0, Qw.reportGpuFallback)(AD, RD.backend), fg(`the wasm client's renderer plays this GPU (${AD}) on ${RD.backend} worse than the JS client`, "gpu"), null;
        const UD = null !== (pD = null === RD || void 0 === RD ? void 0 : RD.backend) && void 0 !== pD ? pD : null;
        lL.adapter = null !== (KD = null === RD || void 0 === RD ? void 0 : RD.adapter) && void 0 !== KD ? KD : null, lL.boundAtMs = null, lL.indirectHangs = null, lL.restoresSkipped = null;
        const fD = !(0, ww.eb)();
        null !== RD && "none" !== RD.reason && console.info(`${SK} drawing with ${RD.backend}: ${RD.reason}`);
        const ID = (0, Bs.y)();
        nr(!0), (0, QD.w)((DD => {
          try {
            null !== UD && (kL = DD.startSkyFeed, Bg(), function(DD) {
              var zD, wD;
              NL = DD.rasterText, nL = DD.setTextLocalPlayer, DD.setTextLocalPlayer(null !== (zD = null === (wD = hL) || void 0 === wD ? void 0 : wD.info.playerDbId) && void 0 !== zD ? zD : null), ZL = DD.drainTextRerasters, yL = DD.loadTextIcons, DD.warmText((() => YL)), DD.textChanged(), YL && setTimeout(yL, 0)
            }(DD), mL = DD.startShellAnalytics, Vg())
          } finally {
            Ac || (tL = DD.followMenuPrefs({
              setSoundPrefs: uc,
              setEnvPrefs: vc,
              setUiPrefs: ac,
              setLookPrefs: tc
            }))
          }
        })), (0, QD.o)(fr).catch((DD => {
          console.warn(`${SK} the game code did not load: a join asks again`, DD)
        }));
        const BD = (0, Bs.h)(RD);
        let GD, hD;
        BD.catch((() => {})), "loading" === (0, Lz.y)() && ds();
        try {
          GD = function(DD) {
            const zD = null !== DD && void 0 !== DD ? DD : document.createElement("canvas");
            zD.id = "wasm-game-canvas", (0, Qs.g)();
            const wD = (0, bz.e)(),
              pD = (0, bz.f)(wD);
            zD.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Es.f)(zD, pD), (0, bz.d)(zD, wD), zD.width = pD.bufferWidth, zD.height = pD.bufferHeight;
            const sD = document.createElement("div");
            return sD.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", sD.append(zD), Wc(sD, Lc), cc = sD, document.body.append(sD), zD
          }(null === UD ? null : await (await Uc()).pagePreviews().beginSession())
        } catch (sD) {
          return await gR({
            site: ZK,
            error: sD
          }, (() => {
            (0, Qw.showUnsupported)((0, Ep.k)("fetch"), Hs.h.fetch, `the previews did not load: ${String(sD)}`)
          })), null
        }
        ds();
        try {
          hD = await BD
        } catch (sD) {
          return await gR({
            site: ZK,
            error: sD
          }, (() => {
            (0, Qw.showUnsupported)((0, Ep.k)("fetch"), Hs.h.fetch, `the ${null!==UD&&void 0!==UD?UD:"client"} build did not load: ${String(sD)}`)
          })), null
        }
        const nD = (0, Bs.d)(),
          MD = !nD && !0 !== dw.k.getItem(iK),
          OD = !nD && "loading" === (0, Lz.y)();
        await (0, Gs.d)(hD, {
          reloadFailedDownload: MD
        }), OD && !(0, Lz.P)() && await (0, Gs.d)(hD, {
          reloadFailedDownload: MD
        });
        xs = performance.now();
        const JD = Ir;
        if (!(0, Lz.P)()) {
          (0, Lz.M)() && dw.k.setItem(iK, !0);
          const DD = (0, Lz.m)();
          if ("call" === DD) vg({
            site: pw.w,
            error: (0, Lz.k)(),
            header: null
          }, JD);
          else {
            const zD = null !== DD && void 0 !== DD ? DD : "instantiate",
              wD = () => {
                (0, Qw.showUnsupported)((0, Ep.k)(zD), Hs.h[zD], (0, Lz.h)())
              };
            if ("compile" !== DD && "instantiate" !== DD || !Ug())
              if ("fetch" === zD) {
                const DD = [hD.url().href, Az.e.url().href];
                await gR({
                  site: ZK,
                  error: (0, Lz.h)(),
                  urls: DD
                }, wD)
              } else wD();
            else {
              const zD = (0, Lz.h)(),
                wD = (0, oz.e)((0, Lz.k)());
              (0, Qw.reportCountedLoadFallback)((0, Ep.k)(DD), Hs.h[DD], zD, wD), fg(`the wasm client did not ${DD} here (${zD})`, wD ? "oom" : null)
            }
          }
          return null
        }(0, cz.K)(hD.url()) && (0, Qw.reportUnstreamedCoreLoad)();
        const XD = (0, Lz.z)();
        let VD, PD = JD;
        try {
          PD = {
            ...JD,
            wasm: XD.CA()
          };
          const {
            jG: DD
          } = hD.bindings, zD = DD.GpD();
          if (zD !== kz.x) return vg({
            site: pw.b,
            error: `core ABI ${zD}, page ABI ${kz.x}`,
            header: null
          }, PD), null;
          const [wD, pD] = (0, kz.se)();
          VD = new DD(wD, pD)
        } catch (sD) {
          return vg({
            site: pw.b,
            error: sD,
            header: null
          }, PD), null
        }
        Ir = PD, Br = hD.bindings;
        const CD = new pw.g(VD, Lz.r, {
          onCrash: DD => {
            var zD;
            null === (zD = vL) || void 0 === zD || zD.crashed(DD),
              function(DD, zD, wD, pD) {
                if ("webgpu" !== zD || (0, Bs.b)()) return !1;
                const sD = function(DD) {
                  if (DD.site === pw.f && (0, ww.o)(DD.error)) return "frames_refused";
                  return DD.site === lK && (0, ww.s)(DD.error) ? "start_failed" : null
                }(DD);
                if (null === sD) return !1;
                if (null !== (0, ww.$)(sD, pD)) return (0, Qw.countRenderLost)(sD, DD.error, lL), !1;
                return Pz.F.reloaded(null, !1), (0, Qw.reportRenderReload)("webgpu", "start_failed" === sD ? 0 : 1, wD, {
                  cause: sD,
                  error: DD.error,
                  context: lL,
                  session: Hg(null)
                }), bg(), !0
              }(DD, UD, PD, fD) || vg(DD, PD)
          },
          onNetEvent: Tg,
          onReconnectGrace: cg,
          onJoinPreloadEnded: Lg,
          onCoreErrors: (DD, zD) => {
            var wD, pD;
            DD.some((DD => {
              let {
                code: zD
              } = DD;
              return zD === kz.F.RenderDeviceLost
            })) && ((0, Bs.w)(), Kc.deviceLost(), "webgpu" === UD && Pz.F.lost()), null === (wD = vL) || void 0 === wD || wD.coreErrors(DD);
            const sD = () => {
              (0, Qw.reportCoreErrors)(DD, zD, PD, ((DD, zD) => {
                var wD;
                return DD === kz.F.EnvUnknownSky ? (0, Qw.unknownSkyWords)(Gz.e.get("skyBox")) : DD === kz.F.RenderDeviceLost ? (0, Qw.deviceLossWords)(zD, lL.boundAtMs) : null === (wD = WL) || void 0 === wD ? void 0 : wD.hpD(DD, zD)
              }))
            };
            DD.some((DD => {
              let {
                code: zD
              } = DD;
              return zD === kz.F.EnvUnknownSky
            })) ? queueMicrotask(sD) : sD(), null === (pD = mr) || void 0 === pD || pD.coreErrors(DD)
          },
          onRenderReload: (DD, zD, wD) => {
            ! function(DD, zD, wD, pD, sD, KD) {
              var rD;
              if ((0, Bs.b)()) return;
              const LD = zD === kz.Zc.WEBGPU,
                cD = pD === kz.Zc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                gD = pD === kz.Zc.RESTORE_LOST,
                RD = LD && (0, Pz.m)(lL.adapter, wD, "lost" === cD, gD),
                AD = (0, ww.ab)(WL);
              null === (rD = vL) || void 0 === rD || rD.reload(LD, wD, cD, null === AD || void 0 === AD ? void 0 : AD.message);
              const UD = LD ? (0, ww.$)(cD, sD) : null;
              if (null !== UD) {
                (0, Qw.countRenderLost)(cD, AD, lL);
                const zD = void 0 === AD ? "" : ` (${AD.message})`;
                return void DD.crash(Qw.RENDER_RELOAD_SITE, new Error(`${(0,Qw.renderReloadMessage)("webgpu",cD,wD)} and ${UD}${zD}`))
              }
              const fD = LD ? "webgpu" : "webgl1" === KD ? "webgl1" : "webgl";
              "lost" === cD && (0, Bs.w)();
              LD || (0, fz.p)();
              (0, Qw.reportRenderReload)(fD, wD, Ir, {
                from: "game",
                cause: cD,
                restoreLost: gD,
                adapterRemembered: RD,
                error: AD,
                context: lL,
                session: Hg(DD.sunShadowsHeld())
              }), bg()
            }(CD, DD, zD, wD, fD, UD)
          },
          onEnvEvent: DD => {
            var zD;
            DD.kind === kz.U.SkyImages ? null === (zD = Wr) || void 0 === zD || zD.onEvent(DD.payload) : DD.kind === kz.U.EnvLighting && (Nr = 1 === DD.payload[0])
          },
          onImages: DD => {
            var zD;
            null === (zD = Zr) || void 0 === zD || zD.onEvent(DD)
          },
          onModelRequest: DD => {
            var zD;
            null === (zD = Sr) || void 0 === zD || zD.request(DD)
          },
          onModelTaken: (DD, zD) => {
            var wD;
            null === (wD = Sr) || void 0 === wD || wD.taken(DD, zD)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(DD, zD) {
                const wD = Ur;
                if (null === wD || DD.isStopped) return;
                wD.restore((DD => {
                  (0, Qw.reportTerrainTextureFailure)(DD, zD)
                })).then((zD => {
                  !1 !== zD || DD.isStopped ? !0 === zD && console.info(`${SK} terrain textures handed over again after the renderer lost them`) : console.warn(`${SK} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(CD, PD)
            }))
          },
          onKeepAlive: DD => {
            const zD = null === AL ? void 0 : UL.get(AL);
            void 0 !== zD && ip(zD, DD)
          },
          onSends: () => {
            ! function(DD) {
              const zD = performance.now();
              if (DD.forEachNetOut(og), yg(DD), (0, pw.M)(DD, {
                  worldgen: Qr,
                  mesh: Vr
                }), null !== uL) try {
                uL.sendsWent(DD, zD, performance.now())
              } catch (sD) {
                xg(sD)
              }
            }(CD)
          }
        });
        if (gr = CD, null === (rD = Tz.b.wasmNetReady) || void 0 === rD || rD.call(Tz.b, (() => CD.isStopped ? 0 : CD.netKeptFrames)), null !== DD) {
          CD.setAntiCheatProbes(VK(Lz.r, DD.checks)), DD.watchHeld(CK.CoreFrame, (() => CD.frame)), DD.watchHeld(CK.GlueFrame, (() => VD.frame));
          const zD = function(DD, zD) {
            const wD = new PK(zD);
            let pD = !1;
            wD.DU(DD.DU());
            const sD = (0, dp.cb)((() => {
              wD.DU(DD.DU())
            }), xK);
            let KD = 6 * (0, dp.V)() | 0;
            const rD = () => {
              ++KD < 6 || (KD = 0, DD.checks.stackCheck() && (pD = !0))
            };
            (0, KK.h)(rD);
            const LD = () => {
              const zD = DD.checkPadCall();
              0 !== zD && wD.setFlags(zD)
            };
            return (0, sK.m)(LD), {
              onSend: rD,
              beforeFrame: () => {
                pD && wD.originStackHit() && (pD = !1)
              },
              onEvent: zD => {
                const pD = DD.checkEvent(zD);
                wD.value(kz.i.ProbeUsedProp, DD.usedProp()), 0 !== pD && wD.setFlags(pD)
              },
              stop: () => {
                (0, dp.eb)(sD), (0, KK.e)(rD), (0, sK.i)(LD)
              }
            }
          }(DD, ((DD, zD, wD) => {
            let pD = !1;
            return wR(CD, (() => {
              pD = CD.rings.input.writeRecord(kz.nb.AntiCheat, DD, zD, wD, 0)
            })), pD
          }));
          CD.isStopped ? zD.stop() : jr = zD
        }
        zr = (DD, zD, wD) => CD.rings.cmd.writeCmd(DD, zD, wD), wr = DD => CD.rings.cmd.growForCmd(DD), sL = !1, Bg(), (0, QD.y)(CD, {
          core: VD,
          memory: Lz.r,
          staleOr: (DD, zD, wD, pD) => gR({
            site: DD,
            error: zD
          }, wD, pD),
          reportReplayFault: (DD, zD) => {
            (0, Qw.reportReplayFault)(DD, zD, Ir)
          },
          audio: fr,
          options: Gz.e,
          onNetEvent: Tg,
          sessionInfo: DD => {
            var zD;
            return (null === (zD = hL) || void 0 === zD ? void 0 : zD.conn) === DD ? hL.info : null
          },
          onEventOverflow: dc,
          replayShaderPack: DD => {
            var zD;
            null === (zD = mr) || void 0 === zD || zD.replay(DD)
          },
          hasPackModel: DD => {
            var zD, wD;
            return null !== (null !== (zD = null === (wD = Gg()) || void 0 === wD ? void 0 : wD.modelUrl(DD)) && void 0 !== zD ? zD : null)
          },
          beforeWrite: () => (!DL && CD.rings.net.cursor > 0 && Sg(CD, !1, "all"), !CD.isStopped),
          beforeOp: () => (!DL && CD.netWrittenSinceFrame > 0 && Sg(CD, !1, "budget"), !CD.isStopped)
        }), (0, ED.C)({
          lockPointer: () => {
            if (!vw(GD)) return !1;
            try {
              Promise.resolve(GD.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, iw.c)()
          },
          leaveGame: () => {
            jc()
          },
          canvas: () => GD
        }), dr = (0, ED.v)((() => {
          var DD;
          const zD = (0, QD.i)();
          null === (DD = (0, QD.t)()) || void 0 === DD || DD.followCursorAim(!0 === (null === zD || void 0 === zD ? void 0 : zD.isSessionLive) ? zD : null)
        })), cL && CD.setUiPrefs(cL);
        gL && CD.setEnvPrefs(gL);
        RL && CD.setLookPrefs(RL);
        const xD = Ms ? Os(Ms.preventMovement) : null;
        xD && ec(xD);
        const TD = (0, Mw.m)(),
          bD = (0, Mw.f)(CD, TD);
        Tr = TD.basis, (0, jw.j)(null === bD ? null : (0, nw.o)(bD)), xr = bD;
        const jD = (0, gz.e)();
        let dD = 1 / 0,
          SD = !0,
          iD = TD.shedFootprintBytes;
        const lD = new vp.c(jD, (() => VD.uG()), (DD => {
          CD.crash(pw.o, DD)
        }));
        Pr = lD, Cr = lD, null !== bD && lD.setCeiling(Math.min((0, vp.q)(bD), dD, (0, Mw.o)()));
        if (SD) {
          lD.setShed((DD => {
            const zD = CD.shedMemory("joinReserve" !== DD);
            return null !== zD && (null === xr || zD < xr) && (xr = zD, (0, jw.j)((0, nw.o)(zD))), zD
          }), ((DD, zD, wD) => {
            1 === zD ? (0, Qw.reportMemoryShed)(DD, wD, Ir) : console.warn(`${SK} wasm memory: shed again (${DD}): shed ${zD}`, wD.wasmMemoryShed)
          }), (() => CD.addDistanceInUse()));
          const DD = (0, ww.N)(XD);
          lD.setFootprint(new ms(iD, {
            storedChunks: () => VD.npD(),
            gpuBytes: () => {
              var zD;
              return null !== (zD = null === DD || void 0 === DD ? void 0 : DD.MpD()) && void 0 !== zD ? zD : 0
            },
            jsHeapBytes: ks
          }))
        }
        window.addEventListener("pagehide", (() => {
          Pr === lD && (lD.refreshStats(), zR(lD))
        })), window.addEventListener("pagehide", jg), window.addEventListener("pagehide", dg), !1;
        const [WD, ND] = (0, Pw.h)();
        FL = (0, xw.g)((DD => CD.setChunkAddDistance(DD.horizontal, DD.vertical)), {
          horizontal: WD,
          vertical: ND
        }), CD.setAmbientOcclusion(!0 !== dw.h.getItem("disableAmbientOcclusion")), CD.setPoseLod(!0 !== dw.h.getItem(Kz.R)), (0, es.t)("look") && (CD.setDebugLog(kz.K.Look, !0), CD.setDebugLog(kz.K.CameraSet, !0), (0, as.e)("wasm", {
          look: () => CD.takeDebugLog(kz.K.Look),
          cameraSets: () => CD.takeDebugLog(kz.K.CameraSet)
        }));
        (0, es.t)("remesh") && (CD.setDebugLog(kz.K.Remesh, !0), ZD = () => CD.takeDebugLog(kz.K.Remesh), Ys = new Fs((0, us.n)(), ZD));
        var ZD;
        const yD = function(DD, zD, wD, pD) {
          const sD = new Ap,
            KD = DD => dw.h.getItem(DD);
          sD.sync(KD, zD), (0, Cz.U)();
          const rD = (0, cD.o)("customBindingsChanged", (() => {
            sD.sync(KD, zD)
          }));
          (0, lw.l)(zD);
          const LD = new Set,
            gD = (0, ED.v)((() => {
              var DD;
              LD.size > 0 && Bp() && !0 === (null === (DD = (0, QD.i)()) || void 0 === DD ? void 0 : DD.localPlayerAlive()) && cD.l.KG("usedKeyboard")
            })),
            RD = wp.c.heldSizer((() => (0, bz.k)(DD))),
            AD = zp(DD, zD, {
              prevents: DD => sD.prevents(DD),
              keyPressed: DD => {
                sD.moves(DD) && (LD.add(DD), Bp() && cD.l.KG("usedKeyboard"))
              },
              keyReleased: DD => {
                LD.delete(DD)
              },
              keysReleased: () => {
                LD.clear()
              },
              resized: () => {
                fp.j.measure(DD.getBoundingClientRect()), (0, pp.j)()
              },
              sizeCanvas: RD,
              watchRenderScale: zD => {
                const wD = (0, bz.n)(DD, zD),
                  pD = wp.c.onRelease(zD);
                return () => {
                  wD(), pD()
                }
              },
              touchStarting: () => {
                fp.j.measure(DD.getBoundingClientRect())
              },
              viewShown: wD,
              touchUiShown: () => aD.e.get("isTouchScreen"),
              ctrlCombosAreGames: Bp,
              inspect: (DD, zD, wD) => {
                sD.checks(zD, wD) && pD(DD)
              },
              canLock: () => vw(DD)
            }),
            UD = (0, Rw.d)(zD);
          return () => {
            rD(), gD(), (0, lw.l)(null), UD(), AD()
          }
        }(GD, ((DD, zD, wD, pD, sD) => {
          wR(CD, (() => {
            CD.rings.input.writeRecord(DD, zD, wD, pD, sD)
          })), !zL && (0, Op.e)(DD, sD) && (0, Op.c)((() => {
            gr !== CD || Ac || CD.isStopped || !mg() || Sg(CD, !1, "budget", !1)
          }))
        }), (() => Lc), (DD => {
          var zD;
          null === (zD = jr) || void 0 === zD || zD.onEvent(DD)
        }));
        if (CD.isStopped) return yD(), null;
        Er = yD;
        const kD = () => !CD.isStopped && !gc;
        if (CD.isStopped) return null;
        (0, Lz.W)((() => {
          "call" === (0, Lz.m)() && CD.crash(pw.w, (0, Lz.k)())
        }));
        const mD = (0, pw.P)(CD.rings.worker, (() => {
          Sg(CD, !1, document.hidden ? "all" : "budget")
        }));
        Qr = function(DD, zD) {
          return pR().then((DD => {
            let {
              prefetchWorldgenWorker: zD
            } = DD;
            zD()
          }), (() => {})), new zK({
            module: (0, Lz.u)(),
            decodeSettings: DD => {
              const zD = (0, QD.t)();
              if (null === zD) throw new Error("no game code to decode the world-gen seed with");
              return zD.decodeMapSettings(DD)
            },
            loadWorker: sR,
            onMapWithoutWorldgen: () => {
              KR((DD => {
                let {
                  stopWorldgenWorkerPrefetch: zD
                } = DD;
                zD()
              }))
            },
            onLoadFailed: DD => {
              (0, Qw.reportWorldgenLoadFailure)(DD, Ir)
            },
            onWorkerLost: DD => {
              (0, Qw.reportWorkerLost)(pw.H, DD, Ir)
            },
            onStartTimeout: DD => {
              (0, Qw.reportWorkerStartTimeout)(pw.H, DD, Ir)
            },
            onGaveUp: DD => {
              (0, Qw.reportWorldgenGaveUp)(DD, Ir)
            },
            onMemoryStats: DD => {
              var zD;
              null === (zD = Pr) || void 0 === zD || zD.noteWorldgen(DD)
            },
            onMemoryGone: () => {
              var DD;
              null === (DD = Pr) || void 0 === DD || DD.worldgenGone()
            },
            write: (wD, pD, sD, KD, rD) => {
              wR(DD, (() => {
                DD.rings.worker.writeWorkerRecord(wD, pD, sD, 0, KD, rD) || DD.crash(pw.H, `a world-gen record of kind ${pD} did not fit the worker-in ring`)
              })), zD()
            }
          })
        }(CD, mD), Vr = function(DD, zD) {
          return new op({
            module: (0, Lz.u)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: DD
              }, zD] = await Promise.all([wD.e(40).then((() => wD(50829))), Promise.resolve().then((() => wD(103))).then((DD => {
                let {
                  isMobile: zD
                } = DD;
                return zD()
              }), (() => !1))]);
              return {
                create: DD,
                count: (0, Ez.c)(navigator.hardwareConcurrency, zD),
                maxKeptLightStates: zD ? 1 : void 0
              }
            },
            write: (wD, pD, sD, KD, rD, LD) => {
              (0, pp.i)(), wR(DD, (() => {
                DD.rings.worker.writeWorkerRecord(wD, pD, sD, KD, rD, LD) || DD.crash(pw.s, `a meshing record of kind ${pD} did not fit the worker-in ring`)
              })), zD()
            },
            onWorkerLost: DD => {
              (0, Qw.reportWorkerLost)(pw.s, DD, Ir)
            },
            onLightFault: (DD, zD) => {
              (0, Qw.reportLightFault)(DD, zD, Ir)
            },
            onStartTimeout: DD => {
              (0, Qw.reportWorkerStartTimeout)(pw.s, DD, Ir)
            },
            onMemoryStats: (DD, zD) => {
              var wD;
              null === (wD = Pr) || void 0 === wD || wD.noteMeshWorker(DD, zD)
            },
            onMemoryGone: DD => {
              var zD;
              null === (zD = Pr) || void 0 === zD || zD.meshWorkerGone(DD)
            },
            fail: (zD, wD) => {
              const pD = () => {
                DD.crash(pw.s, void 0 === wD ? zD : new Error(zD, {
                  cause: wD
                }))
              };
              void 0 !== wD ? gR({
                site: pw.s,
                error: wD
              }, pD) : pD()
            }
          })
        }(CD, mD), ic();
        const uD = (0, Ls.q)(Oz.clientSideServerUrls.staticUrl, {
            onTableFailed: DD => {
              gR({
                site: Qw.MODEL_FEED_SITE,
                error: DD
              }, (() => {}), {
                stillWanted: kD
              })
            },
            packUrl: DD => {
              var zD, wD;
              return null !== (zD = null === (wD = Gg()) || void 0 === wD ? void 0 : wD.modelUrl(DD)) && void 0 !== zD ? zD : null
            }
          }),
          vD = function(DD, zD, wD) {
            const pD = wD => {
              var pD, sD;
              return null !== (pD = null === (sD = zD()) || void 0 === sD ? void 0 : sD.drawnUrl(wD)) && void 0 !== pD ? pD : DD.url(wD)
            };
            return (0, Ks.i)((0, Fp.l)(pD), wD)
          }(uD, (() => Sr), Gg),
          tD = new Fp.d(vD, (DD => {
            console.warn(`${SK} image ${DD.key.kind}:${DD.key.index}:${DD.key.word} failed`, DD.error)
          }));
        Zr = tD, yr = new ws(CD, vD, ((DD, zD) => {
          void 0 === zD ? console.warn(`${SK} ${DD}`) : ng(DD, zD)
        }));
        const FD = new ss.g(uD, function(DD, zD) {
          let pD = !1,
            sD = null,
            KD = null;
          const rD = {
              onUnavailable: (wD, pD) => {
                KD ??= gR({
                  site: Qw.MODEL_POOL_SITE,
                  error: wD,
                  urls: pD
                }, (() => {
                  (0, Qw.reportModelPoolFailure)(wD, DD)
                }), {
                  stillWanted: zD
                })
              },
              onDecoderFailed: (wD, pD) => {
                const sD = () => {
                  (0, Qw.reportDracoDecoderFailure)(wD, DD)
                };
                void 0 !== pD ? gR({
                  site: Qw.MODEL_POOL_SITE,
                  error: wD,
                  urls: pD
                }, sD, {
                  stillWanted: zD
                }) : sD()
              },
              onWorkerLost: zD => {
                (0, Qw.reportWorkerLost)(Qw.MODEL_POOL_SITE, zD, DD)
              },
              onModuleRetry: (zD, wD) => {
                (0, Qw.reportModelsModuleRetry)(zD, wD, DD)
              }
            },
            LD = wD.e(42).then((() => wD(50834))).then((DD => {
              let {
                pageModelPool: zD
              } = DD;
              if (pD) return null;
              const wD = zD(rD);
              return sD = wD.unlisten, ir = wD.pool, ic(), wD.pool
            }), (DD => (pD || rD.onUnavailable(DD, void 0), null)));
          return lr = () => {
            var DD;
            pD = !0, null === (DD = sD) || void 0 === DD || DD(), ir = null
          }, (DD, zD) => LD.then((wD => {
            var pD;
            return null !== (pD = null === wD || void 0 === wD ? void 0 : wD.build(DD, zD)) && void 0 !== pD ? pD : (0, cs.q)(DD, "the model workers did not load")
          })).then((DD => null !== KD && (0, cs.k)(DD) ? KD.then((() => DD)) : DD))
        }(PD, kD), (DD => {
          DD.startup ? (ug(), gR({
            site: Qw.MODEL_FEED_SITE,
            error: DD.error,
            urls: "" === DD.url ? void 0 : [DD.url]
          }, (() => {
            (0, Qw.reportModelFailure)(DD, PD)
          }))) : (0, Qw.reportModelFailure)(DD, PD)
        }), {
          onWritten: (DD, zD) => {
            tD.glbWritten(DD, zD)
          },
          onTaken: (DD, zD) => {
            tD.glbTaken(DD, zD)
          },
          onPackFileFailed: (DD, zD) => {
            console.warn(`${SK} the texture pack's model file ${DD} failed: the shipped one loads`, zD)
          }
        });
        Sr = FD;
        const YD = new qp.f(CD);
        Ur = YD, YD.swap((DD => {
          const zD = () => {
            (0, Qw.reportTerrainTextureFailure)(DD, PD)
          };
          if (YL) return void zD();
          const wD = () => !YL,
            pD = null === DD.url ? void 0 : [DD.url];
          gR({
            site: pw.G,
            error: DD.error,
            urls: pD
          }, zD, {
            stillWanted: wD
          })
        })).then((DD => {
          null !== DD && (DD || CD.isStopped || console.warn(`${SK} the core refused the terrain textures: terrain draws untextured`), ur(CD))
        }));
        const HD = new Zz(CD, ((DD, zD) => {
          console.warn(`${SK} ${DD}`, ...void 0 === zD ? [] : [zD])
        }));
        HD.feed(), null !== UD && function(DD, zD, pD, sD, KD, rD) {
          let LD = null,
            gD = null,
            RD = !1;
          const AD = {
            textures: null,
            stop: () => {
              var DD, zD;
              RD = !0, null === (DD = gD) || void 0 === DD || DD(), null === (zD = LD) || void 0 === zD || zD(), rs.c.setSettled(null), null !== Br && Mc.clear(Br)
            }
          };
          Ar = AD, gD = Mg().follow((gD => {
            null !== gD && Promise.all([wD.e(201), wD.e(45)]).then((() => wD(50800))).then((wD => {
              let {
                PackTextures: UD
              } = wD;
              if (RD || DD.isStopped) return;
              const fD = new UD({
                feed: gD,
                terrain: zD,
                backend: pD,
                stopped: () => DD.isStopped,
                landed: () => {
                  ur(DD)
                },
                packSwapped: () => {
                  (0, Ks.h)(sD), rD.feed((() => async function(DD) {
                    const zD = null === DD ? null : await DD.averageColours;
                    return null === zD ? yz() : Nz(zD)
                  }(fD.assets))), (0, ps.f)(fD.files()), KD.refresh().then((DD => {
                    null !== DD && console.info(`${SK} texture pack models: ${DD.resent} of ${DD.delivered} files written again, ${DD.refetched} refetched`)
                  }))
                },
                settled: (DD, zD, wD) => {
                  var pD;
                  (rs.c.setSettled({
                    state: DD,
                    files: zD
                  }), function(DD, zD, wD) {
                    const pD = null === DD.gameSource && (0, Xw.g)(DD.pack);
                    if (null === zD) return;
                    const sD = (0, Ew.h)(zD.error),
                      KD = pD ? "settings" : zD.source;
                    cD.l.KG(Ew.b, {
                      failure: sD,
                      source: KD,
                      pack: Vw(DD)
                    }), (0, Qw.reportTexturePackKeptOut)(KD, sD, zD.error, wD)
                  }(DD, wD, Ir), null === wD) && function(DD) {
                    const zD = Br;
                    null !== zD && Mc.apply(zD, DD).then((zD => {
                      zD && DD && console.info(`${SK} the texture pack's animations are in (${Object.keys(DD).length} files)`)
                    }))
                  }(null === (pD = DD.pack) || void 0 === pD ? void 0 : pD.animations)
                },
                settling: () => {
                  rs.c.setSettled(null)
                },
                warn: ng,
                maxTextureSize: () => Promise.resolve((0, ww.gb)(document.createElement("canvas")))
              });
              AD.textures = fD, LD = fD.start()
            }), (DD => {
              console.warn(`${SK} the texture pack's terrain didn't load: the built atlas stays`, DD)
            }))
          }))
        }(CD, YD, UD, tD, FD, HD);
        const qD = () => {
            CD.setTextureLayers("")
          },
          Dz = DD => {
            (Mz ??= wD.e(53).then((() => wD(50843))).then((DD => {
              let {
                TEXTURE_NAMES: zD
              } = DD;
              return zD
            }), (DD => {
              throw Mz = null, DD
            })), Mz).then((DD => {
              CD.setTextureLayers(DD) || CD.isStopped || (console.warn(`${SK} the core refused the texture names: textured Boxes draw textureNotFound`), qD())
            }), (zD => {
              if (CD.isStopped) return;
              const [wD, ...pD] = DD;
              void 0 === wD ? gR({
                site: Qw.TEXTURE_NAMES_SITE,
                error: zD
              }, (() => {
                console.warn(`${SK} the texture names didn't load, so textured Boxes draw textureNotFound`, zD), qD()
              }), {
                stillWanted: kD
              }) : setTimeout((() => {
                Dz(pD)
              }), wD)
            }))
          };
        if (Dz(qK), null !== UD && !await async function(DD, zD, wD, pD, KD, rD) {
            var LD;
            const cD = (0, ww.N)(wD);
            if (null === cD) return DD.crash(lK, new Error(`this ${pD} build has no openRenderer`)), !1;
            let gD;
            WL = cD;
            try {
              var RD, AD, UD, fD;
              const sD = null !== (RD = null === (AD = Lr) || void 0 === AD ? void 0 : AD.pagePreviews()) && void 0 !== RD ? RD : null,
                LD = null !== (UD = null === (fD = Lr) || void 0 === fD ? void 0 : fD.previewModule(wD)) && void 0 !== UD ? UD : null;
              if (null === sD || null === LD) {
                null === sD || void 0 === sD || sD.endSession(!1), gD = (0, bz.e)().sampleCount, await (0, ww.e)(zD, cD, rD, Ig, gD, await KD);
                const DD = (0, ww.m)(wD);
                null === DD && console.warn(`${SK} this ${pD} build has no image registry: sky and model images won't show`), (0, Hp.f)(DD)
              } else {
                (0, Bs.b)() && await (0, oD.l)();
                const wD = (0, Bs.D)();
                if (null !== wD) {
                  const zD = (0, ww.ab)(cD);
                  return DD.crash(Qw.RENDER_RELOAD_SITE, new Error(`${wD}${void 0===zD?"":` (${zD.message})`}`)), !1
                }
                gD = await sD.bindSession(LD, zD, (async DD => (0, ww.v)(cD, lK, rD, DD, Ig, await KD)))
              }
            } catch (sD) {
              return DD.crash(lK, sD), !1
            }(function(DD, zD) {
              const wD = DD,
                {
                  requestCapture: pD,
                  takeCapture: sD
                } = wD;
              if ("function" !== typeof pD || "function" !== typeof sD) return;
              const KD = {
                request() {
                  pD.call(wD, zD)
                },
                take() {
                  var DD;
                  return null !== (DD = sD.call(wD)) && void 0 !== DD ? DD : null
                }
              };
              window[Xs] = KD
            })(zD, gD), oL = gD, iL = !0;
            const ID = performance.now();
            return lL.boundAtMs = null !== (LD = (0, Bs.H)()) && void 0 !== LD ? LD : ID, lL.indirectHangs = (0, Bs.x)(), lL.restoresSkipped = (0, Bs.L)(), console.info(`${SK} ${pD} renderer bound at ${Math.round(ID)} ms`), !DD.isStopped
          }(CD, VD, XD, UD, ID, GD)) return null;
        if (null !== UD) {
          var zz, wz, pz;
          (0, Rz.H)(UD);
          const DD = () => !CD.isStopped && kg();
          wD.e(194).then((() => wD(34095))).then((zD => {
            let {
              devTools: wD
            } = zD;
            CD.isStopped || wD.setHost(function(DD) {
              return {
                tools: Is,
                async downloadScene(zD, wD) {
                  let {
                    width: pD,
                    height: sD,
                    colouring: KD
                  } = wD;
                  "screenshot" === zD && null === KD ? await (0, As.g)(DD, pD, sD) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (zD, wD, pD) => (0, As.c)(DD, zD, wD, pD)
              }
            }(function(DD, zD) {
              return {
                canvas: DD,
                maxTextureSize: Us,
                drawing: zD,
                resize: (DD, zD, wD) => {
                  (0, lw.u)(kz.nb.Resize, 0, DD / wD, zD / wD, (0, lw.i)(wD))
                },
                restoreSize: () => {
                  const zD = (0, bz.k)(DD);
                  null !== zD && (0, lw.u)(kz.nb.Resize, 0, zD.cssWidth, zD.cssHeight, (0, lw.i)(zD.renderScale))
                },
                onFrameDrawn: DD => (fs.add(DD), () => {
                  fs.delete(DD)
                })
              }
            }(GD, DD)))
          }), (DD => {
            console.warn(`${SK} the developer tools didn't load: no captures this session`, DD)
          }));
          const zD = "webgpu" === UD && null !== (zz = null === RD || void 0 === RD || null === (wz = RD.adapter) || void 0 === wz ? void 0 : wz.vendor) && void 0 !== zz ? zz : null;
          aL = {
            backend: UD,
            canvas: GD,
            fallbackReason: null !== (pz = null === RD || void 0 === RD ? void 0 : RD.reason) && void 0 !== pz ? pz : null,
            adapterVendor: zD
          }, Vg();
          try {
            (0, pp.u)(UD, GD, zD)
          } catch (sD) {
            (0, pp.y)(), console.error(`${SK} the quality steps didn't start`, sD)
          }
        }
        const {
          storagePullBreaks: sz,
          splitPassBreaks: rz
        } = await ID;
        rz && console.warn(`${SK} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Uz = (0, eD.f)(RD, (0, Pz.i)());
        if ((0, es.t)("webgpuloss")) {
          var hz, nz;
          const DD = {
            backend: UD,
            reason: null !== (hz = null === RD || void 0 === RD ? void 0 : RD.reason) && void 0 !== hz ? hz : null,
            source: null !== (nz = null === RD || void 0 === RD ? void 0 : RD.source) && void 0 !== nz ? nz : null,
            storagePullBreaks: sz,
            noWebGpu: Uz.messageKey
          };
          (0, os.e)((zD => {
            zD.noteWasmPick(DD)
          }))
        }
        const Jz = "webgpu" === UD;
        if (mr = (0, eD.j)(Jz ? CD : null, Jz && null !== (LD = null === (gD = Lr) || void 0 === gD ? void 0 : gD.pagePreviews().KI) && void 0 !== LD ? LD : null, Uz, ng), Ac) return null;
        if (lD.reserveAtJoin((0, vp.n)(null !== bD && void 0 !== bD ? bD : nw.i)), CD.isStopped) return null;
        const Qz = DD => {
          if (Yr = performance.now(), Hr = !1, null !== uL) try {
            uL.animationFrame(DD)
          } catch (sD) {
            xg(sD)
          }
          if (function(DD, zD) {
              return zD && !Ac && !zL && mg() && kg() && DD.framePaces(performance.now())
            }(CD, Lc)) {
            if (CD.writePendingInput(), (0, ED.c)(DD, ig), Pg(!1, DD), null !== uL) try {
              uL.framePaced()
            } catch (sD) {
              xg(sD)
            }
            requestAnimationFrame(Qz)
          } else Sg(CD, Lc, "budget") && ((0, xz.f)(CD.lastFrameKind) && kg() && (0, ED.c)(DD, ig), Pg(Lc && sc, DD), Kc.frame(CD.lastFrameKind, Lc && kg(), DD), (0, xz.b)(CD.lastFrameKind) && Pz.F.drew(), Fg(CD), lD.afterFrame(), requestAnimationFrame(Qz))
        };
        requestAnimationFrame(Qz);
        return function(DD) {
          if (DD.has("inputLog") && (0, Up.l)((DD => {
              let {
                action: zD,
                down: wD,
                press: pD
              } = DD;
              console.info(`${Ip} input ${zD} ${wD?"down":"up"} press ${pD} at ${performance.now().toFixed(1)}`)
            })), DD.has("inputDump")) {
            const DD = [];
            Gp = DD, Object.assign(window, {
              bloxdInputDump: () => DD.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), br = function(DD) {
          let zD = null;
          const wD = () => {
              null !== zD && (clearInterval(zD), zD = null)
            },
            pD = () => {
              document.hidden ? zD ??= setInterval((() => {
                LR(DD) || wD()
              }), HK) : wD()
            };
          return document.addEventListener("visibilitychange", pD), pD(), () => {
            wD(), document.removeEventListener("visibilitychange", pD)
          }
        }(CD), CD
      }(zD).then((DD => {
        var zD;
        (pD(Ir), nr(null !== DD), null !== DD && (Ts = performance.now()), Gr(DD), null === DD) ? null === (zD = Lr) || void 0 === zD || zD.pagePreviews().endSession(null === (0, Lz.m)()): ar("booted")
      }), (DD => {
        pD(Ir), nr(!1), Gr(null), vg({
          site: WK,
          error: DD,
          header: null
        }, Ir)
      }))
    }

    function nc() {
      const DD = Br;
      null !== DD && Uc().then((zD => {
        let {
          pageBuiltInAnimationPack: wD
        } = zD;
        wD().provide(DD)
      }), (DD => {
        console.warn(`${SK} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, DD)
      }))
    }
    const Mc = new class {
      constructor(DD) {
        this.deps = DD, this.latest = 0, this.Qg = null
      }
      apply(DD, zD) {
        return this.load(DD, zD, 0)
      }
      async load(DD, zD, wD) {
        var pD;
        const sD = ++this.latest,
          KD = this.deps.compiler;
        if (void 0 === zD || null === zD || "object" !== typeof zD || 0 === Object.keys(zD).length || null === KD) return this.drop(DD), !1;
        if ((null === (pD = this.Qg) || void 0 === pD ? void 0 : pD.module) === DD && (0, Yz._d)(this.Qg.files, zD)) return !1;
        try {
          const [wD, pD] = await Promise.all([KD(), this.deps.builtIns()]);
          if (sD !== this.latest) return !1;
          const rD = await wD(zD, zw, {
            builtIns: pD
          });
          if (sD !== this.latest) return !1;
          const LD = this.call(DD, rD);
          if (void 0 === LD) throw new Dw("the compiled animations didn't read against the built-in pack");
          return this.Qg = {
              module: DD,
              files: zD
            },
            function(DD) {
              for (let zD = 0; zD + 2 < DD.length; zD += 3) {
                ("error" === DD[zD] ? console.error : console.warn)(`Animation for the texture pack: ${DD[zD+1]}: ${DD[zD+2]}`)
              }
            }(LD), !0
        } catch (LD) {
          var rD;
          if (sD !== this.latest) return !1;
          this.drop(DD), 0 === wD && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", LD);
          const pD = (null !== (rD = this.deps.retryAfterMs) && void 0 !== rD ? rD : qz)[wD];
          return void 0 === pD || LD instanceof Dw || (0, Hz.i)(DD) || setTimeout((() => {
            sD === this.latest && this.load(DD, zD, wD + 1)
          }), pD), !1
        }
      }
      call(DD, zD) {
        try {
          return DD.BpD(zD)
        } catch (wD) {
          throw (0, Hz.k)(DD, wD), wD
        }
      }
      clear(DD) {
        this.latest++, this.drop(DD)
      }
      drop(DD) {
        const zD = this.Qg;
        if (this.Qg = null, (null === zD || void 0 === zD ? void 0 : zD.module) === DD && !(0, Hz.i)(DD)) try {
          this.call(DD, null)
        } catch {}
      }
    }({
      compiler: uz.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: DD
        } = await Uc();
        return DD().whenSet()
      },
      warn: ng
    });
    async function Oc(DD, zD) {
      let pD = !1;
      await Jc({
        matchmake: async () => {
          const {
            guestJoinTarget: sD,
            guestJoinWithPack: KD
          } = await wD.e(272).then((() => wD(50777)));
          return pD ? sD(DD, zD, Jg()) : (pD = !0, KD(DD, zD, (zD => Eg(DD, zD)), Jg))
        },
        onFailure: DD => {
          (0, Qw.showJoinFailure)(DD, Ir)
        },
        rejoin: Nc,
        invalidateTrafficCode: Zc
      })
    }
    async function Jc(DD) {
      let {
        matchmake: zD,
        onFailure: wD,
        rejoin: sD,
        invalidateTrafficCode: KD,
        pageReady: rD,
        signal: LD
      } = DD;
      const cD = () => !0 === (null === LD || void 0 === LD ? void 0 : LD.aborted);
      let gD;
      const RD = rs.c.rejoinHold();
      IL = null;
      const AD = (0, Tw.X)("wasm", DR);
      let UD = !1,
        fD = performance.now();
      try {
        if (!await Mr) return {
          kind: "stopped"
        };
        if (cD()) return {
          kind: "sw"
        };
        fc().catch((() => {}));
        let DD = await zD();
        var BD, GD;
        if (fD = performance.now(), !cD()) qg(null !== (BD = null === (GD = DD.target.session) || void 0 === GD ? void 0 : GD.gameNameWithVariation) && void 0 !== BD ? BD : null);
        const wD = () => performance.now() - DD.matchedAt <= DD.freshMs,
          pD = Qc(DD.target).catch((() => {}));
        wD() && !cD() && (gD = new kp(DD.target, {
          signal: LD
        }));
        const KD = performance.now();
        if (null === await hr) return {
          kind: "stopped"
        };
        var hD, nD;
        if (function(DD) {
            var zD, wD;
            if (Vs.c.markGameEngineConstructed(), bs) return;
            bs = !0;
            const pD = Math.max(DD, null !== (zD = Cs) && void 0 !== zD ? zD : DD);
            (0, Ps.i)("ready", Math.max(0, (null !== (wD = xs) && void 0 !== wD ? wD : pD) - pD) / 1e3)
          }(KD), !cD())
          if (null !== xs && null !== Ts ? ((0, ID.o)("wasm_loaded", xs), (0, ID.o)("wasm_core_ready", Ts)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), DD.target.session && (0, qs.c)(DD.target.session.gameNameWithVariation)) null === (hD = Qr) || void 0 === hD || hD.prestart();
        if (await pD, !wD() && !cD()) null === (nD = gD) || void 0 === nD || nD.rematched(), DD = await zD(), fD = performance.now();
        if (cD()) return {
          kind: "sw"
        };
        const RD = await async function(DD) {
          var zD, wD, pD;
          let {
            signal: sD,
            rejoin: KD = null,
            early: rD,
            pageReady: LD
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== sD && void 0 !== sD && sD.aborted) throw new DOMException("the join was left", "AbortError");
          const cD = (gD = XL, RD = performance.now(), null !== gD && RD - gD < Cp);
          var gD, RD;
          XL = null;
          const AD = new AbortController,
            UD = null !== (zD = null === (wD = DD.session) || void 0 === wD ? void 0 : wD.gameNameWithVariation) && void 0 !== zD ? zD : null;
          qg(UD), Pc({
            controller: AD,
            game: UD
          }), VL = null, null === (pD = xL) || void 0 === pD || pD.abort(), xL = null, bL = !1, jL = null, dL.clear();
          const fD = () => {
            (0, Jz.e)(AD, (0, Jz.d)(sD))
          };
          null === sD || void 0 === sD || sD.addEventListener("abort", fD, {
            once: !0
          });
          try {
            var BD, GD, hD;
            const zD = await hr;
            if (null === zD || zD.isStopped || Ac) throw new Error("no core is running to join a game with");
            if (DD.session && null !== mr) {
              const zD = await Xc(mr.join(DD.session.gameNameWithVariation), AD.signal);
              if ((0, es.t)("webgpuloss")) {
                const wD = DD.session.gameNameWithVariation,
                  pD = mr.couldntRunInJoinedGame();
                (0, os.e)((DD => DD.noteWasmJoin(wD, zD, pD)))
              }
              if (null !== zD) throw new eD.e(zD)
            }
            const [, , , {
              joinRoom: wD
            }] = await Xc(Promise.all([(0, QD.k)(zD), Qc(DD), null === LD || void 0 === LD ? void 0 : LD(), fc()]), AD.signal), pD = DD.session, sD = pD ? {
              ...mc,
              attachSocket: zD => {
                const wD = Fc(zD, DD.endpoint);
                var sD;
                null !== wD && (hL = {
                  conn: wD,
                  info: pD
                }, null === (sD = nL) || void 0 === sD || sD(pD.playerDbId));
                return wD
              }
            } : mc, gD = await wD(sD, DD, {
              signal: AD.signal,
              early: rD
            }).catch((DD => {
              throw function(DD) {
                if (!(DD instanceof SD.c)) return DD;
                if ("roomError" === DD.stage && null !== jL) return Ec(new SD.c(DD.message, DD.stage, DD.code, jL), DD);
                const zD = "closed" === DD.stage && null !== PL ? dL.get(PL.conn) : void 0;
                return void 0 === zD ? DD : Ec(new SD.c(DD.message, DD.stage, zD.code, null, DD.socketOpened), DD)
              }(DD)
            }));
            if (fL !== AD) throw gD.leave(), new DOMException("the join was left", "AbortError");
            xc(gD), null === (BD = Vr) || void 0 === BD || BD.newGame();
            const RD = function(DD) {
              var zD, wD;
              const {
                session: pD
              } = DD, sD = void 0 === pD ? DD.joinOptions.lobbyName : pD.lobbyName;
              return {
                endpoint: DD.endpoint,
                game: null !== (zD = null === pD || void 0 === pD ? void 0 : pD.gameNameWithVariation) && void 0 !== zD ? zD : DD.roomName,
                lobby: String(null !== sD && void 0 !== sD ? sD : null),
                postCookies: null !== (wD = DD.postCookies) && void 0 !== wD ? wD : null
              }
            }(DD);
            UL.set(gD, RD), Wp(RD);
            const UD = performance.now(),
              fD = {
                conn: gD.conn,
                rejoin: KD,
                game: null !== (GD = null === (hD = DD.session) || void 0 === hD ? void 0 : hD.gameNameWithVariation) && void 0 !== GD ? GD : "",
                joinedAt: UD,
                rejoinedAt: cD ? UD : null,
                overflow: null
              };
            ML = fD,
              function(DD, zD) {
                sg();
                const wD = {
                  endpoint: zD,
                  roomId: DD.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Bw({
                    reconnect: (DD, zD, pD) => async function(DD, zD, wD, pD) {
                      const {
                        roomId: sD,
                        roomToken: KD
                      } = rg(DD, zD), rD = gr;
                      if (null === rD || rD.isStopped || Ac) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: LD
                      } = await Xc(fc(), wD), cD = {
                        ...mc,
                        attachSocket: zD => OL !== DD || 0 === DD.heldConn ? (zD.close(), null) : Fc(zD, DD.endpoint, !0)
                      };
                      return LD(cD, DD.endpoint, sD, KD, {
                        signal: wD,
                        onAttached: pD
                      })
                    }(wD, DD, zD, pD),
                    releaseSeat: DD => {
                      !async function(DD, zD) {
                        const {
                          roomId: wD,
                          roomToken: pD
                        } = rg(DD, zD);
                        try {
                          const {
                            leaveHeldSeat: zD
                          } = await fc();
                          await zD(DD.endpoint, wD, pD)
                        } catch (sD) {
                          console.warn(`${SK} the held seat of a game left while it reconnected couldn't be released`, sD)
                        }
                      }(wD, DD)
                    },
                    isLive: () => OL === wD && null !== ML && !Ac,
                    YC: DD => {
                      QL = DD, pg()
                    },
                    onReconnected: DD => {
                      ! function(DD) {
                        const zD = AL;
                        if (null !== zD && zD !== DD) {
                          const wD = UL.get(zD);
                          void 0 !== wD && UL.set(DD, wD), pc === zD && (pc = DD), zD.detach()
                        }
                        xc(DD)
                      }(DD)
                    },
                    onGaveUp: (DD, zD) => {
                      ! function(DD, zD, wD) {
                        var pD, sD;
                        console.warn(`${SK} gave up reconnecting (${wD.reason}, ${wD.attempts} attempts)`, wD.lastError), (0, Qw.reportReconnectGaveUp)(wD, Ir);
                        const KD = null !== (pD = null === (sD = ML) || void 0 === sD ? void 0 : sD.rejoin) && void 0 !== pD ? pD : null;
                        Kg(DD, "gaveUp"), bc();
                        const rD = {
                          code: DD.dropCode,
                          name: null,
                          reason: vK,
                          canReconnect: !zD,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        kc(rD, zD ? null : KD, !1, {
                          reasonKey: tK,
                          canPlayAgain: zD
                        })
                      }(wD, DD, zD)
                    }
                  })
                };
                OL = wD, null !== JL && JL.conn === DD.conn && wD.resume.onInitialInfo(JL)
              }(gD, DD.endpoint), performance.mark(yK), (0, ID.o)("wasm_joined", UD), setTimeout((() => {
                AL === gD && (0, ID.g)()
              }), 0), nc(), console.info(`${SK} joined ${DD.roomName} as ${gD.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const nD = VL;
            VL = null, null !== nD && Sc(fD, nD.mask, nD.frames);
            const MD = dL.get(gD.conn);
            return dL.clear(), void 0 !== MD && (xc(null), yc(gD.conn, MD.code, MD.reason)), gD
          } finally {
            var nD;
            null === sD || void 0 === sD || sD.removeEventListener("abort", fD), fL === AD && Cc(AL, null), (null === (nD = PL) || void 0 === nD ? void 0 : nD.join) === AD && (PL = null)
          }
        }(DD.target, {
          signal: LD,
          rejoin: sD(DD.target),
          early: gD,
          pageReady: rD
        });
        return UD = !0, {
          kind: "joined",
          game: RD
        }
      } catch (OD) {
        if (OD instanceof DOMException && "AbortError" === OD.name || cD()) return {
          kind: "sw"
        };
        if (Ac) return {
          kind: "stopped"
        };
        if (bL && (bL = !1, await KD().catch((DD => {
            console.warn(`${SK} the cached traffic code could not be dropped`, DD)
          }))), null === await hr) return {
          kind: "stopped"
        };
        if (OD instanceof eD.e) return wD(OD, performance.now() - fD), {
          kind: "failed",
          error: OD,
          reloading: !1
        };
        if (OD instanceof SD.c && OD.code === pD.e.wasmClientNotAllowed.code && rc) return fg("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: OD,
          reloading: !0
        };
        const DD = OD instanceof SD.c && OD.code === pD.e.outdatedVersion.code,
          zD = () => null === AL,
          sD = await gR({
            site: Qw.JOIN_SITE,
            error: OD,
            outdated: DD
          }, (() => {
            wD(OD, performance.now() - fD)
          }), {
            stillWanted: zD
          });
        return {
          kind: "failed",
          error: OD,
          reloading: sD
        }
      } finally {
        var MD;
        UD || AD.end(), rs.c.releaseHold(RD);
        const DD = null === (MD = gD) || void 0 === MD ? void 0 : MD.release();
        DD && (0, Qw.reportUnusedSeat)(DD, Ir)
      }
    }

    function Ec(DD, zD) {
      return DD.stack = zD.stack, DD
    }

    function Qc(DD) {
      return DD.session ? (0, QD.p)(fr, DD.session.gameNameWithVariation) : Promise.resolve()
    }

    function Xc(DD, zD) {
      return (0, Jz.h)(zD), new Promise(((wD, pD) => {
        const sD = () => {
          pD((0, Jz.d)(zD))
        };
        zD.addEventListener("abort", sD, {
          once: !0
        }), DD.then((DD => {
          zD.removeEventListener("abort", sD), wD(DD)
        }), (DD => {
          zD.removeEventListener("abort", sD), pD(DD)
        }))
      }))
    }

    function Vc() {
      Pc(null)
    }

    function Pc(DD) {
      var zD, wD, pD;
      (function() {
        const DD = OL;
        null !== DD && Kg(DD, "left")
      }(), null === Jr || Jr.left) || (Jr.left = !0, null === (pD = (0, QD.i)()) || void 0 === pD || pD.socketLeft(), (0, UD.q)({
        websocketUrl: null
      }));
      fL && (0, Jz.e)(fL, new DOMException("the join was left", "AbortError")), bc(null !== DD), null === (zD = mr) || void 0 === zD || zD.leave();
      const sD = AL;
      null !== DD && rs.c.setGame(DD.game), Cc(null, null !== (wD = null === DD || void 0 === DD ? void 0 : DD.controller) && void 0 !== wD ? wD : null), null === sD || void 0 === sD || sD.leave(), Tc(0), (0, hz.f)()
    }

    function Cc(DD, zD) {
      AL = DD, fL = zD, null === AL && null === fL && rs.c.setGame(void 0)
    }

    function xc(DD) {
      Cc(DD, fL)
    }

    function Tc(DD) {
      const zD = gr;
      return null !== zr && !Ac && null !== zD && !zD.isStopped && (!!zr(SD.f, 0, (0, SD.w)(DD)) && (sL = !0, 0 === DD || zL || Sg(zD, !1, "all"), !0))
    }

    function bc() {
      var DD, zD;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Tw.d)();
      const wD = null !== (DD = null === (zD = ML) || void 0 === zD ? void 0 : zD.overflow) && void 0 !== DD ? DD : null;
      ML = null, null !== wD && (0, Qw.reportEventOverflow)(wD, Ir)
    }

    function jc() {
      null !== AL || null !== fL ? Vc() : Yc()
    }

    function dc(DD, zD) {
      console.warn(`${SK} the event buffer refused records in ${zD} frames (categories ${DD})`), Ac || (null !== ML ? Sc(ML, DD, zD) : null !== fL && function(DD, zD, wD) {
        var pD;
        const sD = function(DD, zD) {
          return null === DD ? "drop" : DD.activated ? "keep" : 0 !== (zD & mz.x.NetSession) ? "fail" : "drop"
        }((null === (pD = PL) || void 0 === pD ? void 0 : pD.join) === DD ? PL : null, zD);
        "keep" === sD ? VL = {
          mask: zD,
          frames: wD
        } : "fail" === sD && (0, Jz.e)(DD, new Error("the join's net session was lost to an event overflow"))
      }(fL, DD, zD))
    }

    function Sc(DD, zD, wD) {
      const pD = DD.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      pD.frames += wD, pD.acks++, pD.mask |= zD;
      const sD = function(DD, zD, wD) {
        if (0 === (DD & mz.x.NetSession)) return "none";
        const pD = null !== zD.rejoinedAt && wD - zD.rejoinedAt < xp;
        return null === zD.rejoin || pD ? "fail" : "rejoin"
      }(zD, DD, performance.now());
      "none" !== sD && queueMicrotask((() => {
        if (ML !== DD) return;
        const zD = "rejoin" === sD && performance.now() - CL >= dD.c;
        pD.outcome = zD ? "rejoined" : "failed", kc(function(DD, zD) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: DD,
            automaticallyReconnect: zD,
            requiresRefresh: !1
          }
        }(null !== DD.rejoin, zD), DD.rejoin, zD), Vc(), zD && (XL = performance.now())
      }))
    }

    function ic() {
      rc && function(DD, zD) {
        let {
          mesh: wD,
          worldgen: pD,
          modelPool: sD
        } = DD;
        "landingPage" === zD ? (null === wD || void 0 === wD || wD.stopWorkers(), null === pD || void 0 === pD || pD.stopWorker(), null === sD || void 0 === sD || sD.stopWorkers()) : ((0, aD.i)(zD) || "inGame" === zD) && (null === wD || void 0 === wD || wD.restartWorkers(), null === sD || void 0 === sD || sD.startWorkers())
      }({
        mesh: Vr,
        worldgen: Qr,
        modelPool: ir
      }, aD.e.get("gameState"))
    }

    function lc(DD) {
      Lc = DD, cc && Wc(cc, DD)
    }

    function Wc(DD, zD) {
      DD.style.visibility = zD ? "visible" : "hidden"
    }

    function Nc(DD) {
      var zD;
      const wD = DD.roomName,
        pD = null !== (zD = DD.joinOptions.lobbyName) && void 0 !== zD ? zD : null;
      return () => {
        Oc(wD, pD)
      }
    }

    function Zc() {
      return wD.e(272).then((() => wD(50777))).then((DD => {
        let {
          invalidateGuestTrafficCode: zD
        } = DD;
        return zD()
      })).catch((DD => {
        console.warn(`${SK} the cached traffic code could not be dropped`, DD)
      }))
    }

    function yc(DD, zD, wD) {
      var sD, KD;
      let rD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Ac) return;
      if ((null === (sD = ML) || void 0 === sD ? void 0 : sD.conn) !== DD) return void(null !== fL && dL.set(DD, {
        code: zD,
        reason: wD
      }));
      const {
        rejoin: LD,
        game: cD,
        joinedAt: gD
      } = ML;
      bc(), sg();
      const RD = (0, dD.j)(zD, (0, bp.h)(DD));
      if (console.info(`${SK} the game's connection closed with code ${zD} (${null!==(KD=RD.name)&&void 0!==KD?KD:"unrecognised"})`), zD === pD.e.gameOrPluginKick.code || rD || (0, Qw.reportDisconnect)(RD, Ir, {
          closeReason: wD,
          sinceJoinedMs: performance.now() - gD,
          game: cD
        }), RD.requiresRefresh) {
        const DD = "outdatedVersion" === RD.name,
          wD = new Error(`the game's connection closed with code ${zD}`),
          pD = () => null === ML && null === fL;
        return void gR({
          site: Qw.JOIN_SITE,
          error: wD,
          outdated: DD
        }, (() => {
          pD() && kc(RD, null, !1)
        }), {
          stillWanted: pD
        })
      }
      const AD = RD.canReconnect ? LD : null,
        UD = null !== AD && RD.automaticallyReconnect && performance.now() - CL >= dD.c;
      kc(RD, AD, UD)
    }

    function kc(DD, zD, wD) {
      var pD;
      let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (gc) return;
      rs.c.unwantedLeave(wD && null !== zD && 0 === TL.size), null === (pD = xL) || void 0 === pD || pD.abort();
      const KD = new AbortController;
      xL = KD;
      const rD = null === zD ? null : () => {
        KD.signal.aborted || (KD.abort(), zD())
      };
      if (wD && null !== rD) {
        CL = performance.now();
        const DD = setTimeout(rD, dD.b);
        KD.signal.addEventListener("abort", (() => {
          clearTimeout(DD)
        }))
      }
      const LD = {
        code: DD.code,
        name: DD.name,
        reason: DD.reason,
        reasonKey: sD.reasonKey,
        reconnect: rD,
        reconnecting: wD,
        requiresRefresh: DD.requiresRefresh,
        canPlayAgain: sD.canPlayAgain
      };
      if (TL.size > 0)
        for (const gD of [...TL]) try {
          gD(LD)
        } catch (cD) {
          console.error(`${SK} an unwanted-leave listener threw`, cD)
        } else Vp((0, Ep.h)(DD, null !== rD, wD), KD.signal).then((zD => {
          zD && (null !== rD ? rD() : DD.requiresRefresh && (0, oD.j)())
        }))
    }
    const mc = {
      attachSocket: DD => Fc(DD),
      onConnection: DD => (SL.add(DD), () => {
        SL.delete(DD)
      }),
      sendRaw: (DD, zD) => {
        const wD = Jr;
        return null !== wD && wD.conn === DD && ag(wD, zD)
      },
      leaveRoom: Tc,
      closeSocket: DD => {
        var zD;
        (null === (zD = Jr) || void 0 === zD ? void 0 : zD.conn) === DD && Yc()
      },
      flushNet: Hc
    };

    function ec(DD) {
      var zD;
      let {
        aux: wD,
        payload: pD
      } = DD;
      null === (zD = gr) || void 0 === zD || zD.queueOptions(wD, pD)
    }

    function oc(DD, zD) {
      ec(function(DD, zD) {
        return Ms = DD ? {
          preventMovement: zD
        } : null, DD ? Os(zD) : {
          aux: kz.fc.AdEnd,
          payload: ns
        }
      }(DD, zD))
    }

    function ac(DD) {
      var zD;
      cL = DD, null === (zD = gr) || void 0 === zD || zD.setUiPrefs(DD)
    }

    function uc(DD, zD) {
      fr.setMaster(DD, zD)
    }

    function vc(DD) {
      var zD;
      gL = DD, null === (zD = gr) || void 0 === zD || zD.setEnvPrefs(DD)
    }

    function tc(DD) {
      var zD;
      RL = DD, null === (zD = gr) || void 0 === zD || zD.setLookPrefs(DD)
    }

    function Fc(DD) {
      var zD;
      let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(DD.url).origin,
        pD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (DD.readyState === WebSocket.CLOSING || DD.readyState === WebSocket.CLOSED) return console.warn(`${SK} a closing or closed socket can't be attached`), null;
      const sD = gr;
      if (!sD || sD.isStopped) return console.warn(`${SK} no core is running to attach a socket to`), DD.close(), null;
      if (null === (0, QD.i)()) return console.warn(`${SK} the game has not started to attach a socket to`), DD.close(), null;
      if (vr > kz.v) return console.warn(`${SK} this core has attached all the sockets it can; reload to play on`), DD.close(), null;
      if (sL && !zL && (Sg(sD, !1, "all"), sD.isStopped || Ac)) return DD.close(), null;
      Yc();
      const KD = vr++;
      if (!Rg(sD, "open", KD, pD ? kz.ec.Resume : 0)) return DD.close(), null;
      pD || Gz.e.reset(), PL = null === fL ? null : {
        join: fL,
        conn: KD,
        activated: !1
      }, DD.binaryType = "arraybuffer";
      const rD = new Gw.c((() => {
          ! function(DD, zD) {
            if (Jr !== zD || DD.isStopped || null === zg(zD, aK)) return;
            zD.detach(), Jr = null, Dg(DD, zD, aK, "", !0), zD.ws.close()
          }(sD, LD)
        })),
        LD = {
          ws: DD,
          conn: KD,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: pD,
          token: null,
          detach: () => {
            rD.dispose(), DD.removeEventListener("message", cD), DD.removeEventListener("open", gD), DD.removeEventListener("close", RD)
          }
        },
        cD = DD => {
          if (DD.data instanceof ArrayBuffer) {
            var zD;
            const wD = new Uint8Array(DD.data);
            rD.heard(), LD.token = null !== (zD = (0, hw.d)(wD)) && void 0 !== zD ? zD : LD.token,
              function(DD, zD, wD) {
                wR(DD, (() => {
                  DD.rings.net.writeFrame(zD, wD) || DD.crash(pw.u, `a socket frame of ${wD.byteLength} bytes did not fit the net-in ring`)
                }));
                const pD = DD.rings.net.cursor >= oK;
                !rR() && (pD || DD.netWrittenSinceFrame >= eK) && Sg(DD, !1, document.hidden ? "all" : "budget");
                cR(DD)
              }(sD, KD, wD)
          }
        },
        gD = () => {
          pD || (0, ID.o)("wasm_socket_open", performance.now());
          for (const zD of LD.pending.splice(0)) DD.send(zD);
          LD.pendingBytes = 0
        },
        RD = DD => {
          if (Jr === LD && sD.rings.net.cursor > 0 && Sg(sD, !1, "all"), Jr === LD) {
            if (LD.detach(), Jr = null, Dg(sD, LD, DD.code, DD.reason) || qc(sD, LD)) return;
            Rg(sD, "close", KD), wg(KD, LD.left), yc(KD, DD.code, DD.reason)
          }
        };
      return DD.addEventListener("message", cD), DD.addEventListener("open", gD), DD.addEventListener("close", RD), Jr = LD, null === (zD = (0, QD.i)()) || void 0 === zD || zD.socketAttached(KD), (0, UD.q)({
        websocketUrl: wD
      }), KD
    }

    function Yc() {
      const DD = Jr;
      if (!DD) return;
      const zD = gr,
        wD = DD.resume;
      wD && (Hc(), Jr !== DD) || (Jr = null, DD.detach(), DD.ws.close(), null !== zD && (qc(zD, DD) || wD && Dg(zD, DD, uK)) || (null !== zD && Rg(zD, "close", DD.conn), wg(DD.conn, DD.left)))
    }

    function Hc() {
      const DD = gr;
      null !== DD && !DD.isStopped && !Ac && !zL && DD.rings.net.cursor > 0 && Sg(DD, !1, "all")
    }

    function qc(DD, zD) {
      var wD;
      if (!zD.resume) return !1;
      const pD = OL;
      return null !== pD && null !== zD.token && "" !== zD.token && (pD.pendingHold = {
        conn: zD.conn,
        token: `${pD.roomId}:${zD.token}`
      }), Rg(DD, "close", zD.conn), null === (wD = (0, QD.i)()) || void 0 === wD || wD.socketDetached(zD.conn), !0
    }

    function Dg(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const KD = zg(zD, wD);
      if (null === KD) return !1;
      const {
        Qg: rD,
        token: LD,
        game: cD,
        joinedAt: gD
      } = KD;
      if (!Rg(DD, "close", zD.conn, kz.A.Held)) return !0;
      console.warn(`${SK} the game's connection ${sD?"went silent":`dropped with code ${wD}`}, holding it`);
      const RD = {
        closeReason: pD,
        sinceJoinedMs: performance.now() - gD,
        game: cD
      };
      return (0, Qw.reportDisconnect)((0, dD.j)(wD), Ir, RD, sD ? "silent" : void 0), rD.heldConn = zD.conn, rD.dropCode = wD, rD.pendingHold = {
        conn: zD.conn,
        token: `${rD.roomId}:${LD}`
      }, zL || Sg(DD, !1, "all"), !0
    }

    function zg(DD, zD) {
      const wD = OL,
        sD = ML,
        KD = DD.token;
      return null === wD || null === sD || Ac || DD.left || sD.conn !== DD.conn || null === KD || "" === KD ? null : (0, pD.h)(zD) && wD.resume.canHoldSeat() ? {
        Qg: wD,
        token: KD,
        game: sD.game,
        joinedAt: sD.joinedAt
      } : null
    }

    function wg(DD, zD) {
      var wD;
      null === (wD = (0, QD.i)()) || void 0 === wD || wD.closeGame(DD), (0, hs.e)().close(DD), zD || (0, UD.q)({
        websocketUrl: null
      })
    }

    function pg() {
      const DD = QL;
      if (null === DD) return;
      const zD = (0, QD.i)();
      Ac || null === zD || zD.YC(DD) ? QL = null : performance.now() - KL.pause >= YK && (KL.pause = performance.now(), console.warn(`${SK} the cmd ring had no room for SetPaused(${DD}): written before the next frame`))
    }

    function sg() {
      const DD = OL;
      OL = null, null === DD || void 0 === DD || DD.resume.dispose()
    }

    function Kg(DD, zD) {
      var wD, pD;
      const {
        heldConn: sD
      } = DD, KD = DD.resume.resumingConn;
      DD.heldConn = 0, DD.pendingHold = null, OL === DD && (OL = null), "left" === zD ? DD.resume.leave() : DD.resume.dispose(), 0 === EL || (null === (wD = Jr) || void 0 === wD ? void 0 : wD.conn) !== EL || "left" === zD && (null === (pD = AL) || void 0 === pD ? void 0 : pD.conn) === EL || gg(EL), "gaveUp" === zD && 0 !== KD && gg(KD), 0 !== sD && "refused" !== zD && (console.info(`${SK} the game held through its drop ${"left"===zD?"was left":"is given up"}`), null === gr || gr.isStopped || Rg(gr, "close", sD), wg(sD, !1))
    }

    function rg(DD, zD) {
      const wD = zD.indexOf(":");
      return {
        roomId: wD < 0 ? DD.roomId : zD.slice(0, wD),
        roomToken: zD.slice(wD + 1)
      }
    }

    function Lg(DD) {
      (0, sw.logClientMeasurement)("join_preload", DD, {
        client: "wasm"
      })
    }

    function cg(DD) {
      var zD;
      JL = DD, DD.conn === EL && (EL = 0);
      const wD = OL;
      null !== wD && (null === (zD = ML) || void 0 === zD ? void 0 : zD.conn) === DD.conn && wD.resume.onInitialInfo(DD)
    }

    function gg(DD) {
      var zD;
      const wD = Jr;
      (null === wD || void 0 === wD ? void 0 : wD.conn) === DD && (wD.left = !0, null === (zD = (0, QD.i)()) || void 0 === zD || zD.socketLeft(), (0, UD.q)({
        websocketUrl: null
      }), Tc(DD) ? setTimeout((() => {
        Jr === wD && Yc()
      }), SD.e) : Yc())
    }

    function Rg(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        sD = !1;
      return wR(DD, (() => {
        const {
          net: KD
        } = DD.rings;
        sD = "open" === zD ? KD.writeOpen(wD, pD) : KD.writeClose(wD, pD), sD || DD.crash(pw.u, `a socket ${zD} did not fit the net-in ring`)
      })), sD
    }

    function Ag(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (Ug()) {
        const pD = "browser" === DD && (0, Bs.R)() ? "blockedAfterLoss" : "unsupported";
        return (0, Qw.reportUnsupportedFallback)(DD, pD, zD, wD), void fg(`the wasm client can't run here (${zD}; ${pD})`, pD)
      }(0, Qw.showUnsupported)(DD, "unsupported", zD, wD)
    }

    function Ug() {
      return rc && "wasm" !== (0, fz.f)(window.location.search)
    }

    function fg(DD, zD) {
      console.warn(`${SK} ${DD}: reloading on the JS client`), null !== zD && (0, fz.t)(zD), (0, fz.s)(null === zD ? "reloadOntoJs" : "decline");
      const wD = () => {
        (0, oD.g)(fz.w)
      };
      (0, Qw.flushCrashReports)(oD.d).then(wD, wD)
    }

    function Ig(DD, zD, wD, pD) {
      return NL(DD, zD, wD, pD)
    }

    function Bg() {
      null === kL || null === gr || gr.isStopped || Ac || null !== Wr || null === zr || (Wr = kL(zr, ng, Mg().follow))
    }

    function Gg() {
      var DD, zD, wD;
      return null !== (DD = null === (zD = Ar) || void 0 === zD || null === (wD = zD.textures) || void 0 === wD ? void 0 : wD.files()) && void 0 !== DD ? DD : null
    }

    function hg(DD) {
      Mg().follow((zD => {
        null !== zD && Promise.all([Promise.all([wD.e(201), wD.e(45)]).then((() => wD(50811))), (0, Bs.N)()]).then((DD => {
          let [{
            followPagePackFiles: wD
          }, pD] = DD;
          const sD = null === pD || (0, ww.n)(pD) ? "webgl" : pD.backend;
          wD(zD, Ks.g, sD, (DD => {
            Ks.g.setPageFiles(DD)
          }), ng)
        }), (zD => {
          console.warn(`${SK} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, zD), DD()
        }))
      }))
    }

    function ng(DD, zD) {
      console.warn(`${SK} ${DD}`, zD)
    }

    function Mg() {
      return Rr ??= new is({
        load: DD => Promise.all([wD.e(201), wD.e(54)]).then((() => wD(50816))).then((zD => {
          let {
            startPageTexturePackFeed: wD
          } = zD;
          return wD(ng, DD)
        })),
        store: dw.g,
        sI: DD => {
          hr.then((() => {
            (0, Qw.reportTexturePackFeedLoadFailure)(DD, Ir)
          }))
        }
      }), Rr
    }
    const Og = DD => Mg().follow(DD);

    function Jg() {
      return Mg().loaded()
    }
    const Eg = function(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          sD = 0;
        return async function(KD, rD) {
          let LD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const cD = ++sD,
            gD = pD() + zD,
            RD = await
          function(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((pD => {
              const sD = setTimeout((() => {
                pD(null), DD.then((DD => {
                  null !== DD && (DD.joinedWithout(), wD(DD))
                }))
              }), zD);
              DD.then((DD => {
                clearTimeout(sD), pD(DD)
              }))
            }))
          }(DD(KD), zD, (DD => {
            cD === sD && LD() && rD(DD, pD() + zD).catch((DD => {
              wD("the texture pack step after the join failed", DD)
            }))
          }));
          return null === RD ? null : rD(RD, gD)
        }
      }((DD => (0, pz.l)(DD) ? Mg().request() : Mg().forJoin()), Ss.b, ng),
      Qg = function(DD, zD) {
        let wD = !1;
        return {
          setGamePackConfirm: DD => {
            wD = null !== DD, zD(DD)
          },
          packStep: (zD, pD, sD) => DD(zD, pD, (() => wD && sD()))
        }
      }(Eg, (DD => {
        Mg().setGamePackConfirm(DD)
      }));

    function Xg(DD) {
      Qg.setGamePackConfirm(DD)
    }

    function Vg() {
      if (Ac || null !== uL || null === mL || null === aL) return;
      const {
        backend: DD,
        canvas: zD,
        fallbackReason: wD,
        adapterVendor: pD
      } = aL, sD = mL;
      mL = null;
      try {
        uL = sD({
          backend: DD,
          canvas: zD,
          fallbackReason: wD,
          adapterVendor: pD,
          joinedGame: () => Ac ? null : AL,
          inGame: Cg,
          shaderPackReach: () => {
            var DD, zD;
            return null !== (DD = null === (zD = mr) || void 0 === zD ? void 0 : zD.reachInJoinedGame()) && void 0 !== DD ? DD : null
          },
          ZB: () => Nr,
          msaa: () => oL > 1,
          writeCmd: (DD, zD, wD) => null !== zr && zr(DD, zD, wD),
          takeFailedMeshJobs: () => {
            var DD, zD;
            return null !== (DD = null === (zD = Vr) || void 0 === zD ? void 0 : zD.takeFailedMeshJobs()) && void 0 !== DD ? DD : 0
          },
          readLoadCounts: DD => {
            var zD, wD;
            return null !== (zD = null === (wD = gr) || void 0 === wD ? void 0 : wD.readLoadCounts(DD)) && void 0 !== zD && zD
          },
          mainStalled: (DD, zD, wD) => {
            (0, Qw.reportMainStall)(DD, zD, wD, Ir)
          }
        })
      } catch (KD) {
        console.error(`${SK} the frame telemetry didn't start`, KD)
      }
    }

    function Pg(DD, zD) {
      try {
        var wD, pD, sD;
        const KD = iL && null !== (wD = null === (pD = gr) || void 0 === pD || null === (sD = pD.lastHeader) || void 0 === sD ? void 0 : sD.renderPending) && void 0 !== wD ? wD : 0;
        (0, pp.f)(zD, DD, Cg() && !(null !== Ms), KD)
      } catch (KD) {
        (0, pp.y)(), console.error(`${SK} the quality steps stopped`, KD)
      }
    }

    function Cg() {
      return null !== AL && pc === AL && !Ac
    }

    function xg(DD) {
      const zD = uL;
      uL = null;
      try {
        null === zD || void 0 === zD || zD.stop()
      } catch {}
      console.error(`${SK} the frame telemetry threw: it stops`, DD)
    }

    function Tg(DD) {
      var zD, wD, pD, sD;
      if ((0, hs.e)().fire(DD), "message" === DD.type) {
        if (wL++, DD.lg === kz.Lc.ERROR && null !== fL) {
          var KD;
          const {
            text: zD,
            dropsCache: wD
          } = (0, dD.p)((new TextDecoder).decode(DD.payload));
          bL ||= wD, (null === (KD = PL) || void 0 === KD ? void 0 : KD.conn) === DD.conn && (jL = zD)
        } else if (DD.lg === mz.ec.ResumeComplete) {
          var rD;
          null === (rD = OL) || void 0 === rD || rD.resume.onResumeComplete(DD.conn)
        }
        return
      }
      DD.phase === kz.D.Left ? pL = DD.conn : DD.phase === kz.D.Activated && (null === (zD = PL) || void 0 === zD ? void 0 : zD.conn) === DD.conn ? PL.activated = !0 : DD.phase === kz.D.Resumed ? function(DD) {
        var zD, wD;
        EL = DD;
        const pD = OL;
        if (null === pD || 0 === pD.heldConn || (null === (zD = Jr) || void 0 === zD ? void 0 : zD.conn) !== DD || !Jr.resume || null === ML) return;
        console.info(`${SK} the game resumed on conn ${DD}, waiting for its InitialInfo`);
        const sD = pD.heldConn;
        pD.heldConn = 0, Jr.resume = !1, ML.conn = DD, (null === (wD = hL) || void 0 === wD ? void 0 : wD.conn) === sD && (hL = {
          conn: DD,
          info: hL.info
        }), Gz.e.apply({
          shopInfo: null,
          _shopVersion: sz.c
        })
      }(DD.conn) : DD.phase === kz.D.Held ? function(DD) {
        var zD;
        const wD = OL,
          pD = null !== (zD = null === wD || void 0 === wD ? void 0 : wD.pendingHold) && void 0 !== zD ? zD : null;
        if (null !== wD && null !== pD && pD.conn === DD) return wD.pendingHold = null, wD.heldConn = DD, EL = 0, console.warn(`${SK} the core holds the game, reconnecting`), void wD.resume.onDropped(pD.token);
        if (DD === EL) {
          EL = 0;
          const zD = gr;
          null === zD || zD.isStopped || (console.info(`${SK} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Rg(zD, "close", DD))
        }
      }(DD.conn) : DD.phase === kz.D.Closed && (null === (wD = OL) || void 0 === wD || null === (pD = wD.pendingHold) || void 0 === pD ? void 0 : pD.conn) === DD.conn && (OL.heldConn === DD.conn ? function(DD) {
        const zD = DD.heldConn,
          wD = DD.dropCode;
        Kg(DD, "refused"), console.info(`${SK} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          wg(zD, !1), yc(zD, wD, "", !0)
        }))
      }(OL) : OL.pendingHold = null);
      const LD = Object.keys(kz.D).find((zD => kz.D[zD] === DD.phase)),
        cD = 0 === DD.code ? "" : ` (code ${DD.code})`;
      console.info(`${SK} conn ${DD.conn}: ${null!==LD&&void 0!==LD?LD:DD.phase}${cD}, ${wL} raw messages so far`), (null === (sD = AL) || void 0 === sD ? void 0 : sD.conn) !== DD.conn || DD.phase !== kz.D.Left && DD.phase !== kz.D.Closed || xc(null), GL !== DD.conn || DD.phase !== kz.D.Left && DD.phase !== kz.D.Closed || (GL = null, null === AL && null === fL && rs.c.setGame(void 0));
      for (const RD of [...SL]) try {
        RD(DD.conn, DD.phase, DD.code)
      } catch (gD) {
        (0, ez.k)(gD, `${SK} a connection listener threw`)
      }
    }

    function bg() {
      (0, Bs.n)(), queueMicrotask((() => {
        try {
          ug()
        } catch (DD) {
          console.warn(`${SK} stopping before the reload threw`, DD)
        }(0, Qw.flushCrashReports)(oD.d).then(oD.j, oD.j)
      }))
    }

    function jg() {
      const DD = gr;
      null === DD || DD.isStopped || null === Jr || zL || !DD.hasPendingCommands() || Sg(DD, !1, "budget")
    }

    function dg(DD) {
      var zD;
      const wD = AL;
      DD.persisted || null === wD || (null === (zD = Jr) || void 0 === zD ? void 0 : zD.conn) !== wD.conn || Jr.left || wD.leave()
    }

    function Sg(DD, zD, pD) {
      let sD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const KD = zL;
      zL = !0;
      try {
        const KD = DD.rings.net.cursor >= oK;
        KD && "all" !== pD && !document.hidden && tg("backlog", `a shown tab's net-in is ${DD.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(DD, zD, pD, sD) {
          var KD, rD, LD, cD;
          if (Ac) return !1;
          if (wR(DD, lg), Ac || DD.isStopped) return !1;
          eg() && ar("modelsIn");
          pg(), tr = performance.now(), pL = null, sL = !1, (0, ED.I)(), null === (KD = jr) || void 0 === KD || KD.beforeFrame(), hp(tr, DD), (0, ED.A)(tr, Wg), DL = !0;
          const gD = zD && mg();
          let RD;
          try {
            RD = DD.frame(tr, gD, pD)
          } finally {
            DL = !1
          }
          if (!RD) return !1;
          eL.observe(null !== (rD = null === (LD = DD.lastHeader) || void 0 === LD ? void 0 : LD.chunksCancelled) && void 0 !== rD ? rD : 0);
          const AD = DD.lastFrameKind,
            UD = (0, xz.b)(AD);
          (function(DD) {
            null !== Ys && Ys.afterFrame(performance.now(), DD)
          })(UD), null === (cD = vL) || void 0 === cD || cD.frame(DD, tr, AD), zD && (sc = UD);
          UD && (0, Vz.d)(tr);
          if (null !== uL) try {
            uL.frameRan(DD, tr, performance.now(), AD)
          } catch (BD) {
            xg(BD)
          }
          "drawn" === AD && kg() && function() {
            for (const DD of [...fs]) DD()
          }();
          DD.forEachNetOut(og);
          const fD = Jr;
          null !== pL && (null === fD || void 0 === fD ? void 0 : fD.conn) === pL && ag(fD, SD.i);
          yg(DD),
            function(DD) {
              const zD = 0 !== (DD.headerWord(mz.G.LoadSteps) & mz.T.JoinPreload);
              zD !== BL && (BL = zD, (0, Qw.setCrashAdPreload)(zD), (0, Tw.N)())
            }(DD), zD && function(DD) {
              var zD, pD, sD;
              if (null === AL || !mg()) return;
              const KD = DD.headerWord(mz.G.LoadSteps);
              null === wc || pc === AL && !wc.frame(tr, 0 !== (KD & mz.V.TerrainDrawn)) || (wc = null);
              if (0 === (KD & mz.T.PlayerBound)) return;
              const rD = DD.lastHeader,
                LD = !iL || 0 === (null === rD || void 0 === rD ? void 0 : rD.renderPending);
              !HL && LD && (HL = !0, performance.mark(mK));
              if (pc === AL) return;
              const cD = null !== (zD = null === rD || void 0 === rD ? void 0 : rD.firstView) && void 0 !== zD ? zD : kz.W.NotYet;
              if (iL && cD === kz.W.NotYet) return;
              if (YL && (!0 !== (null === (pD = (0, QD.i)()) || void 0 === pD ? void 0 : pD.isSessionLive) || !LD)) return;
              pc = AL;
              const gD = AL;
              if (setTimeout((() => {
                  AL === gD && (0, ID.k)()
                }), 0), null === (sD = mr) || void 0 === sD || sD.playable(), function() {
                  clearTimeout(Or), Or = setTimeout((() => {
                    Cg() && KR((DD => {
                      let {
                        prefetchWorldgenWorker: zD
                      } = DD;
                      zD()
                    }))
                  }), Dr)
                }(), YL) return;
              YL = !0, performance.mark(kK), (0, es.t)("render") && Promise.all([wD.e(77), wD.e(48)]).then((() => wD(4710))).then((DD => {
                let {
                  renderDebugPlayable: zD
                } = DD;
                zD()
              }), (DD => {
                console.warn("The render debug topic didn't load", DD)
              }));
              const RD = Math.round(performance.now()),
                AD = DD.readViewQueuedPrograms();
              null !== AD && (0, ID.o)("wasm_view_links", RD, (0, rz.ib)(AD));
              if (iL && cD !== kz.W.Drawn) {
                const zD = cD === kz.W.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: wD
                  } = Ng(DD);
                if (console.warn(`${SK} playable at ${RD} ms on the first view's ${zD} backstop, ${wD}: it wasn't drawn whole in time`), (0, ID.o)("wasm_view_backstop", RD, `${zD}:${wD}`), "long" === zD) {
                  var UD, fD;
                  const zD = null !== (UD = null === (fD = ML) || void 0 === fD ? void 0 : fD.game) && void 0 !== UD ? UD : "";
                  wc = new Sw.e((() => {
                    const {
                      cause: wD,
                      census: pD
                    } = Ng(DD);
                    (0, Qw.reportFirstViewNoTerrain)(zD, wD, pD, Ir), (0, Uz.u)("noTerrain")
                  }))
                }
              } else console.info(`${SK} playable at ${RD} ms${iL?"":" (no renderer)"}`);
              setTimeout(yL, 0), (0, nz.g)().catch((DD => {
                console.error(`${SK} item sprites didn't load, so item particles show the missing texture`, DD)
              })), Yp.d.warm()
            }(DD);
          (0, pw.M)(DD, {
            worldgen: Qr,
            mesh: Vr
          }),
          function(DD) {
            DD.forEachEvent(Mp);
            for (const zD of np) try {
              (0, Up.e)(zD)
            } catch (BD) {
              if ((0, ez.d)(BD)) {
                DD.crashOn(pw.k, BD);
                break
              }
              console.error(`${Ip} an input action listener threw`, BD)
            }
            np.length = 0
          }(DD), sD && (0, Cz.c)();
          return !DD.isStopped
        }(DD, zD, "all" === pD || KD, sD)
      } finally {
        zL = KD, KD || (Fr = performance.now())
      }
    }

    function ig(DD) {
      console.error(`${SK} a frame-start listener threw`, DD)
    }

    function lg() {
      var DD, zD, wD, pD;
      null === (DD = Sr) || void 0 === DD || DD.drain(zr, wr), null === (zD = Zr) || void 0 === zD || zD.drain(zr), null === (wD = yr) || void 0 === wD || wD.drain(performance.now()), ZL(zr), null === (pD = Wr) || void 0 === pD || pD.drain()
    }

    function Wg(DD) {
      console.error(`${SK} a before-frame listener threw`, DD)
    }

    function Ng(DD) {
      const zD = (0, QD.i)(),
        wD = (0, QD.t)(),
        pD = null === zD || null === wD ? null : wD.readDrawCensus(zD.api);
      return {
        cause: (0, Sw.k)(DD.headerWord(mz.G.LoadSteps), pD),
        census: pD
      }
    }
    const Zg = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function yg(DD) {
      var zD;
      if (YL) return;
      if (null === Dc && mg() && (Dc = performance.now()), null === fL && null === AL) return;
      null === Dc || zc || (zc = !0, (0, ID.o)("wasm_startup_loaded", Dc));
      let wD = 0;
      null !== AL ? wD = -1 : !0 === (null === (zD = PL) || void 0 === zD ? void 0 : zD.activated) && (wD = ~mz.V.TerrainDrawn);
      const pD = DD.headerWord(mz.G.LoadSteps) & wD & ~qL;
      if (0 === pD) return;
      qL |= pD;
      const sD = performance.now();
      for (const [KD, rD] of Object.entries(Zg)) 0 !== (pD & mz.V[KD]) && (0, ID.o)(rD, sD)
    }

    function kg() {
      return iL && mg()
    }

    function mg() {
      return kr && eg()
    }

    function eg() {
      return null === Sr || Sr.startupDone
    }

    function og(DD, zD) {
      const wD = Jr;
      (null === wD || void 0 === wD ? void 0 : wD.conn) === DD ? ag(wD, zD) : LL++
    }

    function ag(DD, zD) {
      const {
        ws: wD
      } = DD;
      return wD.readyState === WebSocket.OPEN ? (wD.send(zD), !0) : wD.readyState === WebSocket.CONNECTING && DD.pendingBytes + zD.byteLength <= FK ? (DD.pending.push(zD.slice()), DD.pendingBytes += zD.byteLength, !0) : (LL++, !1)
    }

    function ug() {
      var DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD;
      Ac = !0, Kc.stop(), (0, as.b)(), Ys = null, sg(), (0, ED.G)().unlockPointer(), (0, ED.C)(null), null === (DD = dr) || void 0 === DD || DD(), dr = null, null === (zD = (0, QD.t)()) || void 0 === zD || zD.followCursorAim(null), (0, Cz.z)(), (0, QD.f)(), fr.stop(), null === (wD = tL) || void 0 === wD || wD(), tL = null, null === (pD = FL) || void 0 === pD || pD(), FL = null, null === (sD = uL) || void 0 === sD || sD.stop(), uL = null, (0, lw.l)(null), null === (KD = Er) || void 0 === KD || KD(), Er = null, null === (rD = Qr) || void 0 === rD || rD.stop(), Qr = null, null === (LD = Vr) || void 0 === LD || LD.stop(), Vr = null, null !== (cD = Ar) && void 0 !== cD && null !== (gD = cD.textures) && void 0 !== gD && gD.assets && (0, ps.f)(null), null === (RD = Ar) || void 0 === RD || RD.stop(), Ar = null, Ur = null;
      const hD = Pr;
      Pr = null, hD && (hD.stop(), zR(hD)), null === (AD = Zr) || void 0 === AD || AD.dispose(), Zr = null, null === (UD = yr) || void 0 === UD || UD.dispose(), yr = null, Sr = null, null === (fD = lr) || void 0 === fD || fD(), lr = null, null === (ID = br) || void 0 === ID || ID(), br = null, null !== qr && (clearTimeout(qr), qr = null), null === (BD = jr) || void 0 === BD || BD.stop(), jr = null, Vc(), rs.c.release(), Yc();
      const nD = Wr;
      Wr = null;
      try {
        null === nD || void 0 === nD || nD.dispose()
      } catch (MD) {
        console.warn(`${SK} the sky's images didn't release`, MD)
      }(0, Hp.f)(null), null === (GD = Lr) || void 0 === GD || GD.pagePreviews().endSession(null === (0, Lz.m)())
    }

    function vg(DD, zD) {
      var wD, pD;
      const sD = null !== (wD = null === (pD = Pr) || void 0 === pD ? void 0 : pD.details()) && void 0 !== wD ? wD : {},
        KD = DD.site === lK || DD.site === WK || DD.site === Qw.RENDER_RELOAD_SITE || DD.site === NK ? DD.error instanceof WebAssembly.RuntimeError || DD.error instanceof Hz.d : !(0, ww.o)(DD.error) && (0, pw.J)(DD);
      KD && DD.error instanceof Error && (0, Lz.T)(DD.error);
      const rD = KD || DD.site === pw.w ? (0, Qw.readTrap)(DD.error) : null,
        LD = null !== rD && (0, az.h)(rD.kind, rD.refusedBytes) ? rD.refusedBytes : 0,
        cD = (0, Mw.o)(),
        gD = null === Cr ? (0, vp.r)(function() {
          try {
            return (0, Lz.r)().buffer.byteLength
          } catch {
            return 0
          }
        }(), LD, cD) : Cr.ceilingMayRefuse(LD, cD),
        RD = LD > 0 && !gD && Ug();
      var AD;
      if (RD && ((0, fz.t)("oom"), (0, fz.s)("decline"), Rc = !0), ug(), (0, Bs.b)()) return console.warn(`${SK} the session stopped at ${DD.site} as the page reloads`, DD.error), void((0, ww.o)(DD.error) || (null === (AD = DD.header) || void 0 === AD ? void 0 : AD.lastError) === kz.F.CoreBusy || (0, Qw.reportStoppedCore)(DD, zD, rD, {
        memoryDetails: sD,
        declined: RD
      }));
      (0, Qw.showCrash)(DD, zD, rD, {
        memoryDetails: sD,
        declined: RD
      })
    }

    function tg(DD, zD) {
      const wD = performance.now();
      return !(wD - KL[DD] < YK) && (KL[DD] = wD, console.warn(`${SK} ${zD}`), !0)
    }

    function Fg(DD) {
      const {
        input: zD,
        net: wD,
        worker: pD
      } = DD.rings, sD = DD.optionsDropped, KD = zD.dropped + sD + wD.dropped + pD.dropped + LL;
      KD !== rL && tg("dropped", `${KD} records dropped so far (input ${zD.dropped}, options ${sD}, net ${wD.dropped}, worker ${pD.dropped}, net-out ${LL})`) && (rL = KD)
    }

    function Yg() {
      var DD, zD;
      const wD = (0, xw.c)();
      if (null === wD) return null;
      const pD = (0, jw.l)(wD);
      return {
        ...pD,
        horizontal: Math.min(pD.horizontal, null !== (DD = null === (zD = Pr) || void 0 === zD ? void 0 : zD.shedDistanceInUse()) && void 0 !== DD ? DD : 1 / 0)
      }
    }

    function Hg(DD) {
      var zD, wD;
      return {
        samples: iL ? oL : null,
        sunShadows: DD,
        renderDistance: null !== (zD = null === (wD = Yg()) || void 0 === wD ? void 0 : wD.horizontal) && void 0 !== zD ? zD : null
      }
    }

    function qg(DD) {
      IL = DD, (0, Tw.N)()
    }

    function DR() {
      var DD, zD, wD;
      const pD = Yg();
      return {
        ...null === (DD = Pr) || void 0 === DD ? void 0 : DD.pageKillSnapshot(),
        renderDistance: null !== (zD = null === pD || void 0 === pD ? void 0 : pD.horizontal) && void 0 !== zD ? zD : null,
        renderDistanceVertical: null !== (wD = null === pD || void 0 === pD ? void 0 : pD.vertical) && void 0 !== wD ? wD : null,
        chunkCap: xr,
        budgetBasis: Tr,
        renderBackend: (0, Bs.A)(),
        adPreload: BL,
        ...(0, bw.c)(IL)
      }
    }

    function zR(DD) {
      console.info(`${SK} wasm memory at the session's end`, DD.details())
    }

    function wR(DD, zD) {
      if (!DD.isStopped) try {
        zD()
      } catch (wD) {
        DD.crash(pw.y, wD)
      }
    }

    function pR() {
      return Xr ??= wD.e(71).then((() => wD(50822))).catch((DD => {
        throw Xr = null, DD
      })), Xr
    }
    async function sR() {
      const {
        createWorldgenWorker: DD,
        worldgenWorkerReady: zD
      } = await pR();
      return await zD(), DD
    }

    function KR(DD) {
      var zD;
      null === (zD = Xr) || void 0 === zD || zD.then(DD, (() => {}))
    }

    function rR() {
      return performance.now() - Math.max(Fr, Yr) >= HK
    }

    function LR(DD) {
      const zD = document.hidden || Hr ? "all" : "budget";
      Hr = !0;
      const wD = Sg(DD, !1, zD);
      var pD;
      wD && (Fg(DD), null === (pD = Pr) || void 0 === pD || pD.afterFrame());
      return wD
    }

    function cR(DD) {
      DD.isStopped || 0 === DD.rings.net.cursor || rR() && !LR(DD) || DD.rings.net.cursor > 0 && performance.now() - Yr >= HK / 2 && function(DD) {
        qr ??= setTimeout((() => {
          qr = null, cR(DD)
        }), HK)
      }(DD)
    }

    function gR(DD, zD) {
      return async function(DD, zD, wD) {
        let {
          stop: pD,
          stillWanted: sD,
          beforeReload: KD
        } = wD;
        const rD = await (0, Tp.k)(DD, {
          stillWanted: sD,
          beforeReload: async () => {
            pD(), await Promise.all([(0, Qw.flushCrashReports)(oD.d), null === KD || void 0 === KD ? void 0 : KD()])
          },
          reload: oD.j
        });
        return rD || zD(), rD
      }(DD, zD, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: ug
      })
    }
    let RR = !1;

    function AR() {
      return RR = !0, async function(DD, zD, pD) {
        const {
          gamePackSource: sD
        } = await wD.e(271).then((() => wD(40972)));
        await Qg.packStep(DD, ((wD, pD) => wD.packForGame(DD, sD(zD), pD)), pD)
      }(...arguments)
    }

    function UR(DD) {
      ! function(DD, zD) {
        DD((DD => {
          null === DD || void 0 === DD || DD.subscribe((DD => {
            let {
              pack: wD,
              gameSource: pD
            } = DD;
            zD(null === pD || null === wD ? null : {
              pack: wD,
              source: "" === pD ? null : pD
            })
          }))
        }))
      }(Og, DD)
    }
    let fR = !1,
      IR = null,
      BR = !1,
      GR = !1;

    function hR() {
      var DD;
      fR || (fR = !0, hc("play", mD), (0, UD.o)(new TR), LD.gameBridge.attach(jD), QR().catch((() => {})), (0, QD.w)((DD => {
        zz(DD.setTextHost)
      })), DD = OR, TL.add(DD), function(DD) {
        for (const zD of er) DD(zD);
        or.add(DD)
      }((DD => {
        MR(nR[DD])
      })))
    }
    const nR = {
      booted: KD.n.INITIALISE_NOA,
      texturesIn: KD.n.REGISTRATION,
      modelsIn: KD.n.SETUP_LIFEFORMS
    };

    function MR(DD) {
      cD.l.KG("matchmakeAndPlayStepCompleted", {
        step: DD,
        totalSubSteps: 1
      })
    }

    function OR(DD) {
      if (!BR) return;
      const {
        gameNameWithVariation: zD,
        lobbyName: wD
      } = (0, UD.c)();
      if (DD.code === pD.e.serverUpdating.code) return (new TR).leaveLive(), void ER(zD, wD);
      cD.l.KG("unwantedLeftGame", {
        reason: JR(DD),
        requiresRefresh: DD.requiresRefresh,
        canReconnect: null !== DD.reconnect,
        automaticallyReconnect: DD.reconnecting,
        canPlayAgain: DD.canPlayAgain,
        gameNameWithVariation: zD,
        lobbyName: wD
      }), (new TR).leaveLive()
    }

    function JR(DD) {
      return null !== DD.reasonKey ? {
        translationKey: DD.reasonKey
      } : "gameOrPluginKick" === DD.name ? DD.reason : `You have disconnected from the server.\n${DD.reason}`
    }

    function ER(DD, zD) {
      var pD;
      pD = (0, gD.z)(DD, zD), Promise.resolve().then((() => wD(1511))).then((DD => {
        let {
          navigatePreserveSearch: zD
        } = DD;
        zD(pD)
      })).catch((DD => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", DD), (0, oD.e)(pD)
      }))
    }

    function QR() {
      return IR ??= Promise.all([wD.e(72), wD.e(75), wD.e(74), wD.e(73), wD.e(89), wD.e(86), wD.e(269), wD.e(189), wD.e(223), wD.e(247), wD.e(218), wD.e(46)]).then((() => wD(40914))).then((DD => {
        try {
          DD.attachPlayGameSources()
        } catch (zD) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", zD),
            function(DD) {
              hr.then((zD => {
                null === zD || zD.isStopped || Ac ? console.warn(`${SK} the play sources threw as they attached, after the client stopped`, DD) : vg({
                  site: NK,
                  error: DD,
                  header: null
                }, Ir)
              }))
            }(zD), zD
        }
      }), (DD => {
        throw IR = null, new QD.c(DD)
      })), IR
    }
    async function XR(DD, zD) {
      hR(), RR = !0, BR = !0;
      let wD = {
          place: DD.place,
          matchedAt: DD.matchedAt
        },
        rD = DD.place.gameNameWithVariation;
      const LD = (0, AD.e)();
      let cD = null;
      const gD = await Jc({
        matchmake: async () => {
          let zD = wD;
          if (wD = null, null === zD) {
            const wD = await DD.rematch();
            if (wD.isError()) throw cD = wD.asError().forward(), new Error(wD.asError().message);
            zD = {
              place: wD.getValue(),
              matchedAt: performance.now()
            }
          }
          rD = zD.place.gameNameWithVariation;
          return {
            target: await (0, lD.e)(DD.userContext, zD.place, Jg(), LD),
            matchedAt: zD.matchedAt,
            freshMs: lD.d
          }
        },
        pageReady: QR,
        onFailure: (DD, zD) => {
          null === cD && function(DD, zD) {
            (0, Qw.reportPageJoinFailure)(DD, Ir, zD)
          }(DD, {
            sinceJoinStartMs: zD,
            game: rD
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => DD.userContext.invalidateTrafficCode(),
        signal: zD
      });
      switch (gD.kind) {
        case "joined":
          if (LD) {
            const {
              game: DD
            } = gD;
            (0, AD.n)((() => {
              DD.endJoinAd() && (0, ID.l)()
            }))
          }
          return GR || (GR = !0, (0, GD.c)()), BR ? (MR(KD.n.CONNECT_TO_GAME_SERVER), MR(KD.n.SHADER_PACK), function() {
            var DD, zD;
            return null !== (DD = null === (zD = mr) || void 0 === zD ? void 0 : zD.runsInJoinedGame()) && void 0 !== DD && DD
          }() && (0, BD.d)(DD.userContext, rD).catch((DD => {
            console.error("Failed to report the shader pack session", DD)
          })), function() {
            const DD = function() {
              var DD, zD;
              return null !== (DD = null === (zD = mr) || void 0 === zD ? void 0 : zD.couldntRunInJoinedGame()) && void 0 !== DD ? DD : null
            }();
            null !== DD && (0, BD.c)(DD)
          }(), sD.e.value(void 0)) : xR("The server ended the game as it joined");
        case "failed":
          if (!gD.reloading) {
            if (null !== cD) return cD;
            if ((gD.error instanceof SD.l || gD.error instanceof SD.c) && gD.error.code === pD.e.serverUpdating.code) {
              if (zD.aborted) return xR("Left the game while it loaded");
              const {
                gameNameWithVariation: DD,
                lobbyName: wD
              } = (0, UD.c)();
              return ER(DD, wD), xR("The server is updating")
            }
            return gD.error instanceof eD.e ? sD.e.errorWithCode(gD.error.messageKey, KD.n.SHADER_PACK, {
              severity: "medium"
            }) : sD.e.errorWithCode(function(DD) {
              if (DD instanceof SD.u || DD instanceof OD.c) return DD.message;
              if (VR(DD)) return (0, dD.n)(DD.code, DD.serverText);
              return dD.g
            }(gD.error), KD.n.CONNECT_TO_GAME_SERVER, {
              error: PR(gD.error) ? gD.error : void 0,
              severity: CR(gD.error),
              gameServerUnreachable: (0, iD.e)(gD.error),
              joinFailure: (0, iD.m)(gD.error),
              rematch: (0, nD.e)(gD.error),
              gameRefused: (0, MD.e)(gD.error)
            })
          }
          return xR("Reloading into the new build");
        case "stopped":
          return xR("The game client stopped, and shows why");
        case "sw":
          return xR("Left the game while it loaded")
      }
    }

    function VR(DD) {
      return DD instanceof SD.l || DD instanceof SD.c && "attach" !== DD.stage
    }

    function PR(DD) {
      return !(DD instanceof SD.u) && !VR(DD) && void 0 === (0, iD.e)(DD)
    }

    function CR(DD) {
      return VR(DD) ? DD instanceof SD.c && (0, dD.j)(DD.code).requiresRefresh ? "medium" : "low" : PR(DD) || DD instanceof SD.u ? "medium" : "low"
    }

    function xR(DD) {
      return sD.e.errorWithCode(DD, KD.n.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        sw: !0
      })
    }
    class TR {
      leave(DD) {
        if ((0, JD.d)()) {
          var zD, wD;
          if ((0, rD.e)()) return;
          (0, fD.e)(!0 === (null === (zD = (0, JD.m)()) || void 0 === zD || null === (wD = zD.currentViewer) || void 0 === wD ? void 0 : wD.unsavedChanges), DD)
        } else this.leaveLive()
      }
      leaveLive() {
        var DD;
        RR && (null === (DD = Jg()) || void 0 === DD || DD.endGamePack());
        if (!BR) return;
        BR = !1, (0, hD.f)();
        try {
          var zD;
          null === (zD = (0, QD.t)()) || void 0 === zD || zD.clearWasmCameraScreen()
        } catch (pD) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", pD)
        }
        const {
          gameNameWithVariation: wD
        } = (0, UD.c)();
        try {
          jc()
        } finally {
          (0, UD.q)({
            websocketUrl: null
          }), cD.l.KG("leaveGame", {
            gameNameWithVariation: wD
          }), (0, RD.O)()
        }
      }
      isReplay() {
        return (0, JD.d)()
      }
    }
  },
  40850: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD,
      f: () => pD,
      i: () => LD,
      m: () => rD
    });
    const pD = 12e4,
      sD = 3e4,
      KD = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: DD => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", DD), () => {
          document.removeEventListener("visibilitychange", DD)
        })
      };

    function rD(DD) {
      return `it sent no start within ${Math.round(DD)} ms`
    }
    class LD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : KD;
        this.timeoutMs = DD, this.onTimeout = zD, this.now = wD, this.visibility = pD, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = pD.listen((() => {
          this.onVisibility()
        })), pD.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const DD = this.step;
        return null === DD ? 0 : Math.min(this.now() - DD.at, DD.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const DD = this.timeoutMs - this.counted;
        if (DD <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const zD = Math.min(DD, 5e3);
        this.step = {
          at: this.now(),
          ms: zD
        }, this.arm(zD, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(DD, zD) {
        this.timer = setTimeout((() => {
          this.timer = null, zD()
        }), DD)
      }
    }
  },
  39597: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD
    });
    var pD = wD(351),
      sD = wD(1008);
    const KD = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      rD = new Set(["creativeFlat", "skyGrid"]);

    function LD(DD) {
      const zD = (0, pD.Tb)(DD);
      return "classic" !== zD ? KD.has(zD) : !(0, sD.l)(DD) && !rD.has((0, pD.Ob)(DD))
    }
  },
  40752: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD
    });
    const pD = {
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
  38704: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(2861);
    const sD = ["none", "idle", "now"];

    function KD() {
      const DD = () => (0, pD.z)();
      return {
        memoryBytes: () => (0, pD.r)().buffer.byteLength,
        reserveUpFront: zD => DD().hA(zD),
        reserveAhead: zD => DD().BA(zD),
        setCeiling: zD => {
          DD().nA(zD)
        },
        lowWater: () => sD[DD().IA()] ?? "none",
        stats: () => function(DD) {
          const zD = new Uint32Array((0, pD.r)().buffer, DD, 17),
            wD = DD => zD[DD] ?? 0,
            sD = DD => ({
              upFront: wD(DD),
              ahead: wD(DD + 1),
              onDemandInFrame: wD(DD + 2),
              onDemand: wD(DD + 3)
            });
          return {
            memoryBytes: wD(0),
            initialBytes: wD(1),
            liveBytes: wD(2),
            peakLiveBytes: wD(3),
            headroomBytes: wD(4),
            unusedBytes: wD(5),
            ceilingBytes: wD(6),
            reservesRefused: wD(7),
            grows: sD(8),
            grownBytes: sD(12),
            allocationsRefused: wD(16)
          }
        }(DD().MA()),
        takeBallast: () => DD().OA(),
        takePressure: () => DD().JA()
      }
    }
  },
  5084: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => UD,
      d: () => LD,
      e: () => rD,
      i: () => pD,
      m: () => BD,
      n: () => AD,
      q: () => sD,
      r: () => KD,
      v: () => gD,
      z: () => RD
    });
    const pD = 5;

    function sD(DD) {
      return DD === pD
    }

    function KD(DD) {
      return [...DD.features]
    }
    const rD = 262144,
      LD = 256,
      cD = 256;

    function gD(DD) {
      if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
      const zD = [];
      for (const [wD, pD] of Object.entries(DD)) {
        if ("string" !== typeof pD) return `${wD} isn't text.`;
        zD.push({
          path: wD,
          source: pD
        })
      }
      return zD.sort(((DD, zD) => AD(DD.path, zD.path))),
        function(DD) {
          if (0 === DD.length) return "The pack has no .wgsl files.";
          if (DD.length > LD) return `The pack has more than ${LD} .wgsl files.`;
          const zD = new Set;
          for (const {
              path: wD
            }
            of DD) {
            const DD = fD(wD);
            if (null !== DD) return DD;
            if (zD.has(wD)) return `The pack has two files at ${wD}.`;
            zD.add(wD)
          }
          return UD(DD) > rD ? `The pack's .wgsl files are over ${rD/1024} KB in total.` : null
        }(zD) ?? zD
    }

    function RD(DD) {
      const zD = {};
      for (const wD of DD) zD[wD.path] = wD.source;
      return zD
    }

    function AD(DD, zD) {
      return DD < zD ? -1 : DD > zD ? 1 : 0
    }

    function UD(DD) {
      const zD = new TextEncoder;
      let wD = 0;
      for (const {
          source: pD
        }
        of DD) wD += zD.encode(pD).byteLength;
      return wD
    }

    function fD(DD) {
      if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
      if (DD.length > cD) return `A file path is over ${cD} characters.`;
      if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
      return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
    }
    const ID = /^(.*)\[rot\[([1-4])$/;

    function BD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const pD = new Map;
      zD.forEach(((DD, zD) => {
        let {
          numAnimStates: wD,
          animStartIdx: sD
        } = DD;
        for (let KD = 1; KD < wD; KD++) pD.set(sD + KD - 1, zD)
      }));
      const sD = Object.entries(DD),
        KD = new Map;
      for (const [BD, GD] of sD) {
        const DD = ID.exec(BD);
        "1" === DD?.[2] && KD.set(DD[1], GD + 1)
      }
      const rD = DD => {
          const zD = ID.exec(DD);
          return zD && KD.has(zD[1]) ? {
            root: zD[1],
            rotation: Number(zD[2]) - 1
          } : null
        },
        LD = new Set(sD.map((DD => {
          let [zD] = DD;
          return rD(zD)?.root ?? zD
        }))),
        cD = (DD, wD) => {
          const pD = DD.replace(/_?0$/, "");
          return (zD[wD]?.numAnimStates ?? 0) > 1 && !LD.has(pD) ? pD : DD
        },
        gD = new Map;
      for (const [ID, BD] of sD) gD.set(BD, cD(rD(ID)?.root ?? ID, BD));
      const RD = sD.reduce(((DD, zD) => {
          let [, wD] = zD;
          return Math.max(DD, wD + 1)
        }), 0),
        AD = Array.from({
          length: RD
        }, ((DD, zD) => ({
          id: zD + 1,
          rotation: 0
        }))),
        UD = new Map,
        fD = new Map;
      for (const [ID, BD] of sD) {
        const DD = rD(ID),
          zD = pD.get(BD);
        if (void 0 !== zD) {
          const wD = gD.get(zD);
          fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "frame"
          }), DD && !fD.has(DD.root) && fD.set(DD.root, {
            name: DD.root,
            texture: wD,
            kind: "frame"
          });
          continue
        }
        const wD = gD.get(BD),
          sD = DD?.root ?? ID;
        if (wD !== sD && fD.set(sD, {
            name: sD,
            texture: wD,
            kind: "frame"
          }), DD) {
          const zD = KD.get(DD.root);
          AD[BD] = {
            id: zD,
            rotation: DD.rotation
          }, UD.set(wD, zD), fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "rotation"
          })
        } else UD.set(wD, BD + 1)
      }
      for (const ID of UD.keys()) fD.delete(ID);
      for (const [ID, BD] of wD) {
        const DD = UD.get(BD);
        void 0 === DD || UD.has(ID) || (UD.set(ID, DD), fD.delete(ID))
      }
      return {
        named: [...UD].sort(((DD, zD) => {
          let [wD] = DD, [pD] = zD;
          return wD < pD ? -1 : wD > pD ? 1 : 0
        })).map((DD => {
          let [zD, wD] = DD;
          return {
            name: zD,
            id: wD
          }
        })),
        aliases: [...fD.values()],
        layers: AD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);