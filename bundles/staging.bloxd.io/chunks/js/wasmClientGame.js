export const id = 57;
export const ids = [57];
export const modules = {
  36451: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      e: () => nT,
      f: () => kT,
      h: () => HT,
      k: () => qT
    });
    var WT = mT(662),
      zT = mT(1876),
      MT = mT(4904);
    class gT {
      constructor(TT, UT) {
        this.width = TT, this.fl = UT, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(TT * UT)
      }
      push(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = this.data,
          WT = this.next * this.width;
        for (let zT = 0; zT < this.width; zT++) mT[WT + zT] = TT[UT + zT];
        this.next = (this.next + 1) % this.fl, this.size = Math.min(this.size + 1, this.fl)
      }
      rows() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const mT = [],
          WT = (this.next - this.size + this.fl) % this.fl;
        for (let zT = 0; zT < this.size; zT++) {
          const MT = (WT + zT) % this.fl * this.width;
          this.data[MT + TT] >= UT && mT.push(Array.from(this.data.subarray(MT, MT + this.width)))
        }
        return mT
      }
      lines() {
        return this.rows().map((TT => TT.join(",")))
      }
    }
    const nT = 10,
      HT = {
        idle: 0,
        Jp: 1,
        ZF: 2,
        vF: 3,
        Uc: 4
      },
      kT = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      jT = {
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
      lT = 12e3,
      LT = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      pT = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      BT = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      ZT = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      cT = ["nowMs", "change", "count"];

    function vT(TT) {
      return "js" === TT ? jT.jsClient : jT.wasmClient
    }
    class fT {
      constructor() {
        this.steps = new gT(nT, lT), this.events = new gT(pT.length, lT), this.frames = new gT(BT.length, lT), this.cameraSets = new gT(MT.f, 256), this.changes = new gT(cT.length, 256)
      }
    }
    const qT = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(pT.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(TT, UT) {
        this.startedClient = TT, this.startedAtMs = performance.now(), null !== this.rings ? this.change(vT(TT)) : UT && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(jT.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new fT, null !== this.startedClient && this.changeAt(this.startedAtMs, vT(this.startedClient), 1))
      }
      step(TT, UT) {
        var mT;
        TT[UT + 6] !== HT.Uc && (null === (mT = this.rings) || void 0 === mT || mT.steps.push(TT, UT))
      }
      cameraSet(TT, UT) {
        var mT;
        null === (mT = this.rings) || void 0 === mT || mT.cameraSets.push(TT, UT)
      }
      mouseMove(TT, UT) {
        const mT = this.rings;
        if (null === mT) return;
        const WT = this.sample;
        WT[0] = TT.timeStamp, WT[1] = performance.now(), WT[2] = TT.movementX, WT[3] = TT.movementY, WT[4] = UT ? 1 : 0, mT.events.push(WT)
      }
      frame(TT, UT, mT, WT) {
        const zT = this.rings;
        if (null === zT || WT === kT.none) return;
        const MT = this.sample;
        MT[0] = performance.now(), MT[1] = TT, MT[2] = UT, MT[3] = mT, MT[4] = WT, zT.frames.push(MT)
      }
      change(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), TT, UT)
      }
      changeAt(TT, UT, mT) {
        const WT = this.rings;
        if (null === WT) return;
        const zT = this.sample;
        zT[0] = TT, zT[1] = UT, zT[2] = mT, WT.changes.push(zT)
      }
      dumpText() {
        var TT, UT;
        const mT = this.rings;
        return [`look records (${this.startedClient}): ${LT.join(",")}`, ...null !== (TT = null === mT || void 0 === mT ? void 0 : mT.steps.lines()) && void 0 !== TT ? TT : [], `mousemove events: ${pT.join(",")}`, ...null !== (UT = null === mT || void 0 === mT ? void 0 : mT.events.lines()) && void 0 !== UT ? UT : []].join("\n")
      }
      toJson(TT, UT) {
        var mT;
        const zT = TT - 6e4,
          MT = this.rings,
          gT = function(TT, UT) {
            var mT;
            let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const MT = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.rows(WT, zT)) && void 0 !== mT ? mT : [];
            return {
              columns: UT,
              fromMs: 0 === MT.length ? null : MT[0][WT],
              rows: MT
            }
          };
        return {
          version: WT.d,
          client: null !== (mT = this.startedClient) && void 0 !== mT ? mT : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: TT,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          yc: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...UT,
          outcomes: HT,
          frameKinds: kT,
          changes: jT,
          lookSteps: gT(null === MT || void 0 === MT ? void 0 : MT.steps, LT),
          mouseMoves: gT(null === MT || void 0 === MT ? void 0 : MT.events, pT, 1),
          frames: gT(null === MT || void 0 === MT ? void 0 : MT.frames, BT),
          cameraSets: gT(null === MT || void 0 === MT ? void 0 : MT.cameraSets, ZT),
          pageChanges: gT(null === MT || void 0 === MT ? void 0 : MT.changes, cT)
        }
      }
      save(TT) {
        const UT = JSON.stringify(this.toJson(performance.now(), TT));
        (0, zT.c)(new Blob([UT], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  39167: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      i: () => zT
    });
    var WT = mT(31);

    function zT(TT) {
      return "refetchCode" === TT || "devDownloadJson" === TT || TT.startsWith("Plugin")
    }

    function MT(TT, UT) {
      "refetchCode" !== TT ? "Plugin|MobAiPlugin|ShowPetUi" !== TT ? Promise.all([mT.e(109), mT.e(110), mT.e(105), mT.e(107), mT.e(218)]).then((() => mT(41871))).then((mT => {
        let {
          runClientGameMessage: WT
        } = mT;
        WT(TT, UT)
      })).catch((UT => {
        console.error(`Game message ${TT} failed`, UT)
      })) : WT.j.EZ("showPetUi", UT) : WT.j.EZ("refetchCode")
    }
  },
  42746: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      e: () => zT
    });
    const WT = ["recording", "freecam", "keyframe"];

    function zT() {
      const TT = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(TT[1]) << 32n | BigInt(TT[0])
    }
  },
  34204: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      f: () => HT
    });
    var WT = mT(25);
    const zT = 24,
      MT = "farNametags",
      gT = 1e5;

    function nT() {
      var TT;
      return null === (TT = WT.b.get("showDistantNametags")) || void 0 === TT || TT
    }

    function HT() {
      var TT;
      return null !== (TT = function() {
        const TT = new URLSearchParams(window.location.search).get(MT),
          UT = null === TT || "" === TT ? NaN : Number(TT);
        return Number.isFinite(UT) && UT >= 0 ? Math.min(UT, gT) : null
      }()) && void 0 !== TT ? TT : nT() ? 0 : zT
    }
  },
  42743: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      blockIdOf: () => hH.b,
      clearWasmCameraScreen: () => Wz,
      creativeItemIds: () => WW.creativeItemIds,
      decodeMapSettings: () => AH,
      drainTextRerasters: () => un.e,
      enchantmentPerksOf: () => WW.enchantmentPerksOf,
      endGameHost: () => kk,
      followCursorAim: () => oH,
      followMenuPrefs: () => mM,
      loadAudio: () => zk,
      loadClientGame: () => Wk,
      loadTextIcons: () => un.i,
      rasterText: () => Vn.b,
      readBoardToEdit: () => EH,
      readDrawCensus: () => RH.d,
      setTextHost: () => un.l,
      setTextLocalPlayer: () => un.m,
      showInCreativeInvenOf: () => WW.showInCreativeInvenOf,
      startGameHost: () => Hk,
      startShellAnalytics: () => SH,
      startSkyFeed: () => jH,
      textChanged: () => un.r,
      warmText: () => Vn.f,
      wasmCameraScreen: () => mz
    });
    mT(36593);
    var WT = mT(25),
      zT = mT(36918),
      MT = mT(39287),
      gT = mT(31),
      nT = mT(3508),
      HT = mT(36910),
      kT = mT(1388),
      jT = mT(643),
      lT = mT(38372),
      LT = mT(4895),
      pT = mT(40786),
      BT = mT(40709);
    const ZT = BT.Hb / 4,
      cT = BT.q.PlaySound,
      vT = BT.q.SoundReset,
      fT = LT.hb.ReplayFailed,
      qT = LT.hb.RecorderEvent;
    class iT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = TT, this.memory = UT, this.audio = mT, this.serverIds = new Int32Array(256).fill(BT.Uc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(BT.x.BYTES)), this.renderPtr = 0, this.fl = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new BT.ab(TT, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.wzT(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(TT, UT) {
        const mT = this.eventView();
        return new Uint8Array(mT.buffer, mT.byteOffset + TT, UT)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return BT.x.localId(this.apiView, 0)
      }
      localDeaths() {
        return BT.x.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const TT = this.apiView,
          UT = BT.x.entRenderPtr(TT, 0),
          mT = BT.x.entVisPtr(TT, 0),
          WT = BT.x.entCapacity(TT, 0);
        if (UT !== this.renderPtr || mT !== this.visPtr || WT !== this.fl || this.renderBuffer !== this.buffer) {
          this.renderPtr = UT, this.visPtr = mT, this.fl = WT, this.renderBuffer = this.buffer;
          const TT = this.memoryView(Float32Array, UT, WT * ZT, "the render array"),
            zT = this.memoryView(Uint8Array, mT, WT, "the visibility array");
          this.renderCapacity = TT && zT ? WT : 0, this.render = TT && zT ? TT : new Float32Array(0), this.vis = TT && zT ? zT : new Uint8Array(0)
        }
      }
      memoryView(TT, UT, mT, WT) {
        try {
          return (0, pT.o)(TT, this.memory().buffer, UT, mT, WT)
        } catch (zT) {
          return this.keepCorruption(zT), null
        }
      }
      memoryData(TT, UT, mT, WT) {
        try {
          return (0, pT.e)(this.memory().buffer, TT, UT, mT, WT)
        } catch (zT) {
          return this.keepCorruption(zT), null
        }
      }
      reportCorruption(TT) {
        this.keepCorruption(new pT.c(TT))
      }
      keepCorruption(TT) {
        if (!(TT instanceof pT.c)) throw TT;
        this.corruption ??= TT
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(TT, UT, mT) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: WT,
          len: zT
        } = TT;
        this.eventsPtr = WT, this.eventsLen = zT, this.eventsBuffer = null;
        const MT = this.eventView();
        for (let kT = 0; kT < zT;) {
          const TT = MT.getUint32(kT, !0),
            mT = 65535 & TT,
            WT = TT >>> 16,
            zT = kT + LT.gb;
          if (mT === BT.q.EntitySpawned) {
            var gT;
            if (WT !== BT.Kb.BYTES) throw JT(mT, kT, WT);
            const TT = BT.Kb.serverId(MT, zT);
            this.spawned(TT, BT.Kb.index(MT, zT), BT.Kb.kind(MT, zT)), null === (gT = UT.entityAdded) || void 0 === gT || gT.call(UT, TT)
          } else if ((mT === BT.q.ChunkSlot || mT === BT.q.EntityInfoChanged) && !(0, BT.he)(mT, MT, zT, WT, UT)) throw JT(mT, kT, WT);
          kT = zT + (0, LT.Ge)(WT)
        }
        try {
          var nT;
          null === (nT = UT.afterPrescan) || void 0 === nT || nT.call(UT), this.throwCorruption(), !mT() && this.dispatch(TT, UT, mT) && (this.throwCorruption(), this.applyListener(), UT.afterWalk(TT.kind)), this.throwCorruption()
        } catch (HT) {
          throw HT instanceof pT.c && (this.corruption ??= HT), HT
        } finally {
          mT() || null !== this.corruption || this.applyDespawns(zT, UT)
        }
      }
      applyDespawns(TT, UT) {
        const mT = this.eventView();
        for (let zT = 0; zT < TT;) {
          const TT = mT.getUint32(zT, !0),
            MT = zT + LT.gb;
          if ((65535 & TT) === BT.q.EntityDespawned && TT >>> 16 === BT.Kb.BYTES) {
            const TT = BT.Kb.serverId(mT, MT);
            var WT;
            if (this.despawned(TT, BT.Kb.index(mT, MT))) null === (WT = UT.entityRemoved) || void 0 === WT || WT.call(UT, TT)
          }
          zT = MT + (0, LT.Ge)(TT >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(TT, UT, mT) {
        const {
          len: WT,
          net: zT,
          netOffsets: MT
        } = TT;
        let gT = this.eventView(),
          nT = 0;
        for (let OT = 0; OT < WT;) {
          const TT = gT.getUint32(OT, !0),
            WT = 65535 & TT,
            eT = TT >>> 16,
            xT = OT + LT.gb;
          let dT = !1;
          if (nT < zT.length && MT[nT] === OT) UT.netEvent(zT[nT]), nT++, dT = !0;
          else if (WT === LT.hb.LocalPlayerBound) {
            var HT;
            if (eT !== LT.Qb) throw JT(WT, OT, eT);
            null === (HT = UT.localPlayerBound) || void 0 === HT || HT.call(UT, gT.getInt32(xT, !0)), dT = !0
          } else if (WT === LT.hb.LocalHurt) {
            var kT;
            if (eT !== LT.Ob) throw JT(WT, OT, eT);
            null === (kT = UT.localHurt) || void 0 === kT || kT.call(UT, gT.getInt32(xT, !0), gT.getFloat32(xT + 4, !0), gT.getUint32(xT + 8, !0)), dT = !0
          } else if (WT === LT.hb.AttackHit) {
            var jT;
            if (eT !== LT.b) throw JT(WT, OT, eT);
            const TT = gT.getFloat32(xT, !0),
              mT = gT.getFloat32(xT + 4, !0),
              zT = gT.getFloat32(xT + 8, !0),
              MT = gT.getUint32(xT + 12, !0);
            null === (jT = UT.attackHit) || void 0 === jT || jT.call(UT, TT, mT, zT, 0 !== (MT & LT.m.Crit), 0 !== (MT & LT.m.HitSelf))
          } else if (WT === LT.hb.PhysicsType) {
            var lT;
            if (eT !== LT.jc) throw JT(WT, OT, eT);
            null === (lT = UT.physicsType) || void 0 === lT || lT.call(UT, gT.getUint32(xT, !0), gT.getInt32(xT + 4, !0)), dT = !0
          } else if (WT === LT.hb.VehicleEffect) {
            var pT;
            const TT = YT(gT, xT, eT);
            if (null === TT) throw JT(WT, OT, eT);
            null === (pT = UT.vehicleEffect) || void 0 === pT || pT.call(UT, TT.op, TT.name, TT.icon, TT.level, TT.durationMs), dT = !0
          } else if (WT === LT.hb.ZoomChanged) {
            var ZT;
            if (eT !== LT.ne) throw JT(WT, OT, eT);
            null === (ZT = UT.zoomChanged) || void 0 === ZT || ZT.call(UT, gT.getFloat32(xT, !0), gT.getUint8(xT + 4)), dT = !0
          } else if (WT === LT.hb.ZoomDisabled) {
            var iT;
            if (0 !== eT) throw JT(WT, OT, eT);
            null === (iT = UT.zoomDisabled) || void 0 === iT || iT.call(UT), dT = !0
          } else if (WT === LT.hb.GameCamera) {
            var bT;
            null === (bT = UT.gameCamera) || void 0 === bT || bT.call(UT, new Uint8Array(gT.buffer, gT.byteOffset + xT, eT).slice()), dT = !0
          } else if (WT === BT.q.ChunkSlot || WT === BT.q.EntityInfoChanged);
          else if (WT >= cT && WT <= vT) {
            if (this.audio && !this.audio.onAudioEvent(WT, gT, xT, eT)) throw JT(WT, OT, eT)
          } else if (WT >= fT && WT <= qT) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(WT, gT, xT, eT)) throw JT(WT, OT, eT);
              dT = !0
            }
          } else if (WT >= BT.id && WT <= BT.md && WT !== LT.hb.EnvLighting) {
            if (!(0, BT.he)(WT, gT, xT, eT, UT)) throw JT(WT, OT, eT);
            dT = !0
          }
          if (dT) {
            if (mT()) return !1;
            gT = this.eventView()
          }
          OT = xT + (0, LT.Ge)(eT)
        }
        return !mT()
      }
      applyListener() {
        var TT;
        if (!this.audio) return;
        const UT = BT.x.audioViewPtr(this.apiView, 0),
          mT = this.memory().buffer;
        let WT = this.audioView;
        (null === (TT = WT) || void 0 === TT ? void 0 : TT.buffer) === mT && WT.byteOffset === UT || (WT = (0, pT.e)(mT, UT, BT.B.BYTES, 8, "the audio view"), this.audioView = WT), WT && this.audio.applyListener(WT)
      }
      indexOf(TT) {
        return this.indexById.get("number" === typeof TT ? TT : +TT)
      }
      isLocal(TT) {
        return TT !== BT.Uc && TT === BT.x.localId(this.apiView, 0)
      }
      Aq(TT) {
        const UT = [0, 0, 0];
        return this.readPosition("number" === typeof TT ? TT : +TT, UT) ? UT : null
      }
      readPosition(TT, UT) {
        const mT = this.apiView;
        if (void 0 !== this.indexById.get(TT) && this.isLocal(TT)) {
          for (let TT = 0; TT < 3; TT++) UT[TT] = BT.x.localPos(mT, 0, TT);
          return !0
        }
        return this.readDrawnPosition(TT, UT)
      }
      readDrawnPosition(TT, UT) {
        const mT = this.apiView,
          WT = this.indexById.get(TT);
        if (void 0 === WT || WT >= this.renderCapacity) return UT[0] = UT[1] = UT[2] = NaN, !1;
        const zT = WT * ZT;
        for (let MT = 0; MT < 3; MT++) UT[MT] = this.render[zT + MT] + BT.x.origin(mT, 0, MT);
        return !0
      }
      checkValid(TT) {
        return void 0 !== this.indexOf(TT)
      }
      isAlive(TT) {
        const UT = this.indexOf(TT);
        if (void 0 === UT) return null;
        if (this.ensureViews(), UT >= this.renderCapacity) return null;
        const mT = this.vis[UT];
        return 0 === mT ? null : 0 !== (mT & BT.ee.Alive)
      }
      getEntityType(TT) {
        const UT = this.indexOf(TT);
        return void 0 === UT ? this.isLocal("number" === typeof TT ? TT : +TT) ? "Player" : null : OT(this.kinds[UT])
      }
      spawned(TT, UT, mT) {
        if (UT >= 1048576) throw new pT.c(`entity ${TT} spawned at index ${UT}`);
        this.ensureIndex(UT), this.serverIds[UT] === TT && null !== this.idStr[UT] || (this.idStr[UT] = String(TT)), this.serverIds[UT] = TT, this.kinds[UT] = mT, this.indexById.set(TT, UT)
      }
      despawned(TT, UT) {
        let mT = !1;
        return this.indexById.get(TT) === UT && (this.indexById.delete(TT), mT = !0), UT < this.serverIds.length && this.serverIds[UT] === TT && (this.serverIds[UT] = BT.Uc, this.kinds[UT] = 0, this.idStr[UT] = null), mT
      }
      ensureIndex(TT) {
        const UT = this.serverIds.length;
        if (TT < UT) return;
        let mT = 2 * UT;
        for (; mT <= TT;) mT *= 2;
        const WT = new Int32Array(mT).fill(BT.Uc);
        WT.set(this.serverIds), this.serverIds = WT;
        const zT = new Uint16Array(mT);
        zT.set(this.kinds), this.kinds = zT;
        for (let MT = UT; MT < mT; MT++) this.idStr.push(null)
      }
      eventView() {
        const TT = this.memory().buffer;
        return TT !== this.eventsBuffer && (this.eventsBuffer = TT, this.events = new DataView(TT, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const TT = this.memory().buffer;
        this.buffer = TT, this.viewPtr < 0 && (this.viewPtr = this.core.tzT()), this.view = new DataView(TT, this.viewPtr, BT.x.BYTES), this.rereadDirectory()
      }
    }

    function bT(TT) {
      return TT >>> BT.e === BT.u.Item
    }

    function OT(TT) {
      var UT, mT;
      const WT = TT & BT.h;
      switch (TT >>> BT.e) {
        case BT.u.Lifeform:
          return null !== (UT = jT.j[WT]) && void 0 !== UT ? UT : null;
        case BT.u.Throwable:
          return null !== (mT = lT.n[WT]) && void 0 !== mT ? mT : null;
        case BT.u.Mesh:
          return "Mesh";
        case BT.u.Audio:
          return "AudioEntity";
        case BT.u.Item:
          return "Item";
        default:
          return null
      }
    }
    const eT = new TextDecoder;

    function YT(TT, UT, mT) {
      if (mT < LT.Rd.HEAD_BYTES) return null;
      const WT = TT.getUint32(UT, !0),
        zT = TT.getUint32(UT + 20, !0),
        MT = TT.getUint32(UT + 24, !0),
        gT = LT.Rd.HEAD_BYTES + (0, LT.Ge)(zT);
      if (WT !== LT.Rd.UPDATE && WT !== LT.Rd.REMOVE || zT > mT || gT + MT > mT) return null;
      const nT = (mT, WT) => eT.decode(new Uint8Array(TT.buffer, TT.byteOffset + UT + mT, WT)),
        HT = TT.getFloat64(UT + 12, !0);
      return {
        op: WT,
        level: TT.getFloat64(UT + 4, !0),
        durationMs: Number.isNaN(HT) ? null : HT,
        name: nT(LT.Rd.HEAD_BYTES, zT),
        icon: nT(gT, MT)
      }
    }

    function JT(TT, UT, mT) {
      return new pT.c(`event ${TT} at ${UT} of ${mT} bytes`)
    }
    var xT = mT(366),
      dT = mT(1321),
      wT = mT(39167),
      tT = mT(2060),
      aT = mT(41153),
      yT = mT(2014),
      XT = mT(39300),
      IT = mT(39331),
      QT = mT(39313),
      sT = mT(40765),
      FT = mT(2525),
      PT = mT(39293),
      VT = mT(39325);
    const uT = Math.max(BT.Ab.BYTES, BT.vb.BYTES, BT.yb.BYTES);

    function CT(TT) {
      if (!(0, VT.e)(TT)) return null;
      const UT = Number(TT);
      return (0 | UT) === UT ? UT : null
    }
    class rT {
      constructor(TT) {
        this.api = TT, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, PT.m)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.FW = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = BT.Uc, this.localName = String(BT.Uc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.FW = null;
        const TT = this.api.queries.directorView() >= BT.Ab.BYTES ? this.scratchView() : null;
        null !== TT && (this.defaultFov = (0, yT.D)(BT.Ab.fov(TT, 0)), this.baseFov = (0, yT.D)(BT.Ab.baseFov(TT, 0)), this.aspect = BT.Ab.aspect(TT, 0), this.bodyHeading = BT.Ab.bodyHeading(TT, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(TT) {
        this.viewHeading = TT
      }
      get localPlayerId() {
        const TT = BT.x.localId(this.api.apiView, 0);
        return TT !== this.localId && (this.localId = TT, this.localName = String(TT)), this.localName
      }
      getEntityPosition(TT) {
        return this.readEntity(TT) ? this.entityFeet : null
      }
      getEntityAimPoint(TT) {
        return this.readEntity(TT) ? this.entityAim : null
      }
      getEntityHeading(TT) {
        const UT = CT(TT);
        if (null === UT) return null;
        const mT = BT.x.localId(this.api.apiView, 0);
        return UT === mT && mT !== BT.Uc ? this.viewHeading : this.readEntity(TT) ? this.entityHeading : null
      }
      raycastTerrain(TT, UT, mT) {
        const WT = this.api.queries.cameraSweep(TT[0], TT[1], TT[2], UT[0], UT[1], UT[2], mT);
        return WT < mT - 1e-6 ? WT : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const TT = this.defaultPose;
        TT.fov = this.defaultFov;
        const UT = this.api.queries.directorDefaultPose() >= BT.vb.BYTES ? this.scratchView() : null;
        if (null === UT) return TT;
        for (let mT = 0; mT < 3; mT++) TT.position[mT] = BT.vb.eye(UT, 0, mT);
        return TT.heading = BT.vb.heading(UT, 0), TT.pitch = BT.vb.pitch(UT, 0), TT
      }
      getDefaultFov() {
        return this.defaultFov
      }
      getBaseFov() {
        return this.baseFov
      }
      getAspectRatio() {
        return this.aspect
      }
      readEntity(TT) {
        const UT = CT(TT);
        if (null === UT) return !1;
        if (UT === this.FW) return this.entityLive;
        this.FW = UT;
        const mT = this.api.queries.directorEntity(UT) >= BT.yb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== mT, null === mT) return !1;
        for (let WT = 0; WT < 3; WT++) this.entityFeet[WT] = BT.yb.feet(mT, 0, WT), this.entityAim[WT] = this.entityFeet[WT];
        return this.entityAim[1] += BT.yb.eyeHeight(mT, 0), this.entityHeading = BT.yb.heading(mT, 0), !0
      }
      scratchView() {
        const TT = this.api.scratch(),
          UT = this.api.memory().buffer,
          mT = this.scratch;
        return null !== mT && mT.buffer === UT && mT.byteOffset === TT ? mT : (this.scratch = this.api.memoryData(TT, uT, 8, "the director's record"), this.scratch)
      }
    }
    const KT = {
        mode: "default"
      },
      ST = {
        show: () => {},
        clear: () => {}
      };

    function GT() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class NT {
      constructor(TT) {
        this.options = TT, this.Nl = void 0, this.director = void 0, this.latest = KT, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          Xs: 0,
          Qs: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.fp = new Int32Array(3 * BT.Md), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * BT.Md), this.Nl = new rT(TT.api), this.director = new QT.b(this.Nl)
      }
      settingsChanged(TT) {
        let UT = KT;
        if (TT.length > 0) try {
          UT = (0, sT.c)(TT)
        } catch {}
        this.latest = UT, this.pending = UT
      }
      call(TT, UT, mT, WT, zT, MT) {
        var gT, nT;
        let HT;
        this.holding = !1;
        try {
          HT = this.answer(TT, UT, mT, WT, zT, MT)
        } catch (LT) {
          var kT, jT;
          throw this.answeredPose = !1, null === (kT = (jT = this.options).showFacing) || void 0 === kT || kT.call(jT, null), LT
        }
        const lT = this.answeredPose && 0 === (WT & BT.zb.Held);
        return this.answeredPose = HT !== BT.ub.None, this.holding = this.answeredPose && !lT, null === (gT = (nT = this.options).showFacing) || void 0 === gT || gT.call(nT, this.holding ? this.facing : null), HT
      }
      holdsView() {
        return this.holding
      }
      answer(TT, UT, mT, WT, zT, MT) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          Nl: gT
        } = this;
        gT.readView();
        if (0 !== (WT & BT.zb.Held) || gT.setViewHeading((0, XT.s)(gT.bodyHeading)), void 0 !== this.pending) {
          const TT = this.pending;
          this.pending = void 0, this.director.setSettings(TT), this.syncShownSettings()
        }
        this.readLook((0, FT.g)(UT), (0, FT.g)(mT), WT, (0, FT.g)(zT), (0, FT.g)(MT));
        const nT = this.director.update(TT / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !nT) return BT.ub.None;
        const [HT, kT, jT] = nT.position;
        if (0 === this.options.api.queries.directorPose(HT, kT, jT, (0, XT.s)(nT.heading), (0, XT.i)(nT.pitch), (0, yT.m)(nT.fov))) return BT.ub.None;
        if ("default" === this.director.getSettings().mode) return BT.ub.Pose;
        switch (this.facing) {
          case "camera":
            return BT.ub.FaceCamera;
          case "cursor":
            return BT.ub.FaceCursor;
          default:
            return BT.ub.FaceMovement
        }
      }
      afterFrame(TT) {
        TT ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = KT, this.idle()
      }
      restart() {
        const TT = this.holding;
        this.idle(), this.holding = TT
      }
      idle() {
        var TT, UT;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new QT.b(this.Nl), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (TT = (UT = this.options).showFacing) || void 0 === TT || TT.call(UT, null), this.setCentres(0)
      }
      syncShownSettings() {
        const TT = this.director.getSettings();
        if (TT === this.shownSettings) return;
        this.shownSettings = TT;
        const UT = (0, IT.d)(TT);
        this.facing = UT.facing, this.mouseTurns = UT.mouseTurns
      }
      readLook(TT, UT, mT, WT, zT) {
        const MT = this.look,
          gT = 0 !== (mT & BT.zb.LookPointed);
        if (null === this.mouseTurns && !gT) return MT.Xs = 0, MT.Qs = 0, void(MT.pointedAt = void 0);
        let nT;
        gT && (this.pointedAt.heading = WT, this.pointedAt.pitch = zT, nT = this.pointedAt);
        const {
          Nl: HT
        } = this;
        HT.setViewHeading((0, IT.c)(HT.getViewHeading(), TT, UT, nT, "look" === this.mouseTurns, MT))
      }
      writeCentres(TT) {
        const UT = this.next,
          mT = Math.min(TT.length, BT.Md);
        for (let WT = 0; WT < mT; WT++)
          for (let mT = 0; mT < 3; mT++) UT[3 * WT + mT] = Math.floor(TT[WT][mT] / BT.H);
        this.setCentres(mT)
      }
      setCentres(TT) {
        const {
          fp: UT,
          next: mT
        } = this;
        let WT = TT === this.centresLen;
        for (let zT = 0; WT && zT < 3 * TT; zT++) WT = UT[zT] === mT[zT];
        WT || (UT.fill(0), UT.set(mT.subarray(0, 3 * TT)), this.centresLen = TT, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const TT = this.options.cmd();
        null !== TT && (0, BT.Of)(TT, 0, this.fp, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var TT, UT, mT;
        return null !== (TT = null === (UT = (mT = this.options).screen) || void 0 === UT ? void 0 : UT.call(mT)) && void 0 !== TT ? TT : ST
      }
      hidden() {
        var TT;
        return (null !== (TT = this.options.isPageHidden) && void 0 !== TT ? TT : GT)()
      }
      now() {
        var TT, UT, mT;
        return null !== (TT = null === (UT = (mT = this.options).now) || void 0 === UT ? void 0 : UT.call(mT)) && void 0 !== TT ? TT : performance.now()
      }
    }
    var ET = mT(40915);
    const hT = BT.H * BT.H * BT.H,
      DT = Math.log2(BT.H),
      oT = BT.H - 1,
      AT = BT.W.BYTES / 4,
      RT = new Uint16Array(hT);

    function TU(TT, UT, mT) {
      return TT * BT.H * BT.H + UT * BT.H + mT
    }
    class UU {
      constructor(TT) {
        this.chunk = TT
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(TT, UT, mT) {
        return TU(TT, UT, mT)
      }
    }
    class mU {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class WU {
      constructor(TT, UT, mT, WT) {
        this.table = TT, this.slot = UT, this.generation = mT, this.epoch = WT, this.iL = new UU(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = RT, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get uB() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get ip() {
        const TT = this.gameVoxels(),
          UT = this.layers ??= new Uint16Array(BT.H);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let mT = 0; 0 !== this.staleLayers; mT++) {
          const WT = 1 << mT;
          0 !== (this.staleLayers & WT) && (this.staleLayers &= ~WT, UT[mT] = zU(TT, mT))
        }
        return UT
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const TT = this.voxelData(),
          UT = this.writes;
        if (null === UT || 0 === UT.ids.size) return TT;
        if (UT.from !== TT) {
          const mT = UT.patched ??= new Uint16Array(hT);
          mT.set(TT);
          for (const [TT, WT] of UT.ids) mT[TT] = WT;
          UT.from = TT
        }
        return UT.patched
      }
      written(TT) {
        var UT;
        return null === (UT = this.writes) || void 0 === UT ? void 0 : UT.ids.get(TT)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(TT, UT, mT) {
        const WT = this.writes ??= new mU;
        WT.ids.set(TT, UT), mT && WT.cleared.add(TT), null !== WT.from && (WT.patched[TT] = UT);
        const zT = 1 << (TT >> DT & oT);
        WT.layers |= zT, this.staleLayers |= zT, this.writeCount++
      }
      clearWrites() {
        const TT = this.writes;
        null !== TT && (this.staleLayers |= TT.layers, TT.ids.clear(), TT.cleared.clear(), TT.layers = 0, TT.from = null)
      }
      dataCleared(TT) {
        var UT;
        return !0 === (null === (UT = this.writes) || void 0 === UT ? void 0 : UT.cleared.has(TT))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const TT = this.table.slotWords(),
          UT = this.slot * AT;
        if (this.epoch !== this.table.epoch || UT + AT > TT.length || 0 === TT[UT + 3] || TT[UT + 2] !== this.generation) return this.data = RT, this.dataPtr = 0, RT;
        this.version = TT[UT + 1];
        const mT = TT[UT + 0],
          WT = TT.buffer;
        return mT === this.dataPtr && WT === this.dataBuffer || (this.dataPtr = mT, this.dataBuffer = WT, this.data = this.table.voxelsAt(WT, mT)), this.data
      }
    }

    function zU(TT, UT) {
      const mT = TT[UT * BT.H];
      for (let WT = 0; WT < BT.H; WT++) {
        const zT = TU(WT, UT, 0);
        for (let UT = 0; UT < BT.H; UT++)
          if (TT[zT + UT] !== mT) return 65535
      }
      return mT
    }
    const MU = new Uint32Array(0);

    function gU(TT, UT, mT) {
      return TU(TT & oT, UT & oT, mT & oT)
    }
    class nU {
      constructor(TT, UT) {
        this.memory = TT, this.apiView = UT, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = MU, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = MU, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(TT, UT, mT, WT, zT, MT) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, MT === BT.Z.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (MT !== BT.Z.Stored && MT !== BT.Z.Unloaded) throw new pT.c(`ChunkSlot flags ${MT}`);
        const gT = (0, ET.b)(TT, UT, mT);
        if (gT < 0) return;
        if (MT === BT.Z.Unloaded) return void this.chunks.delete(gT);
        const nT = this.chunks.get(gT);
        (null === nT || void 0 === nT ? void 0 : nT.slot) === WT && nT.generation === zT || this.chunks.set(gT, new WU(this, WT, zT, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const TT = this.apiView(),
          UT = BT.x.chunkSlotsPtr(TT, 0),
          mT = BT.x.chunkSlotsLen(TT, 0);
        UT === this.slotsPtr && mT === this.slotsLen || (this.slotsPtr = UT, this.slotsLen = mT, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const TT = this.apiView(),
          UT = BT.x.walkThroughPtr(TT, 0),
          mT = BT.x.walkThroughLen(TT, 0);
        UT === this.walkPtr && mT === this.walkLen || (this.walkPtr = UT, this.walkLen = mT, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const TT of this.written) TT.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const TT = this.memory().buffer;
        var UT;
        TT !== this.slotsBuffer && (this.slotsBuffer = TT, this.slots = null !== (UT = (0, pT.o)(Uint32Array, TT, this.slotsPtr, this.slotsLen * AT, "the chunk directory")) && void 0 !== UT ? UT : MU);
        return this.slots
      }
      voxelsAt(TT, UT) {
        try {
          var mT;
          return null !== (mT = (0, pT.o)(Uint16Array, TT, UT, hT, "a chunk's voxels")) && void 0 !== mT ? mT : RT
        } catch (WT) {
          if (!(WT instanceof pT.c)) throw WT;
          return this.corruption ??= WT, RT
        }
      }
      chunk(TT, UT, mT) {
        var WT;
        return null !== (WT = this.chunks.get((0, ET.b)(TT, UT, mT))) && void 0 !== WT ? WT : null
      }
      isLoaded(TT, UT, mT) {
        return void 0 !== this.chunkAt(Math.floor(TT), Math.floor(UT), Math.floor(mT))
      }
      Gg(TT, UT, mT) {
        var WT;
        const zT = Math.floor(TT),
          MT = Math.floor(UT),
          gT = Math.floor(mT),
          nT = this.chunkAt(zT, MT, gT);
        if (!nT) return 0;
        const HT = gU(zT, MT, gT);
        return null !== (WT = nT.written(HT)) && void 0 !== WT ? WT : nT.voxelData()[HT]
      }
      setOverlay(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const MT = this.chunkAt(TT, UT, mT);
        return !!MT && (MT.hasWrites() || this.written.push(MT), MT.write(gU(TT, UT, mT), WT, zT), !0)
      }
      version(TT, UT, mT) {
        var WT, zT;
        return null !== (WT = null === (zT = this.chunks.get((0, ET.b)(TT, UT, mT))) || void 0 === zT ? void 0 : zT.uB) && void 0 !== WT ? WT : null
      }
      scan(TT, UT, mT, WT, zT, MT, gT, nT) {
        const HT = BT.H;
        let kT = 0;
        for (let jT = Math.floor(UT / HT); jT * HT < zT; jT++) {
          const lT = jT * HT,
            LT = Math.min(zT - lT, HT);
          for (let zT = Math.floor(TT / HT); zT * HT < WT; zT++) {
            const pT = zT * HT,
              BT = Math.min(WT - pT, HT);
            for (let WT = Math.floor(mT / HT); WT * HT < MT; WT++) {
              const ZT = this.chunks.get((0, ET.b)(zT, jT, WT));
              if (!ZT) continue;
              const cT = WT * HT,
                vT = Math.max(mT - cT, 0),
                fT = Math.min(MT - cT, HT),
                qT = ZT.ip,
                iT = ZT.gameVoxels();
              for (let mT = Math.max(UT - lT, 0); mT < LT; mT++) {
                const UT = qT[mT];
                if (65535 === UT || 0 !== gT[UT]) {
                  kT++;
                  for (let UT = Math.max(TT - pT, 0); UT < BT; UT++) {
                    const TT = TU(UT, mT, 0);
                    for (let WT = vT; WT < fT; WT++) {
                      const zT = iT[TT + WT];
                      0 !== gT[zT] && nT.push(pT + UT, lT + mT, cT + WT, zT)
                    }
                  }
                }
              }
            }
          }
        }
        return kT
      }
      dataCleared(TT, UT, mT) {
        var WT;
        const zT = Math.floor(TT),
          MT = Math.floor(UT),
          gT = Math.floor(mT);
        return !0 === (null === (WT = this.chunkAt(zT, MT, gT)) || void 0 === WT ? void 0 : WT.dataCleared(gU(zT, MT, gT)))
      }
      isWalkThrough(TT) {
        if (!Number.isInteger(TT) || TT < 0 || TT > 65535) return !1;
        const UT = this.walkWords(),
          mT = TT >>> 5;
        return mT < UT.length && 1 === (UT[mT] >>> (31 & TT) & 1)
      }
      walkWords() {
        const TT = this.memory().buffer;
        var UT;
        TT !== this.walkBuffer && (this.walkBuffer = TT, this.walk = null !== (UT = (0, pT.o)(Uint32Array, TT, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== UT ? UT : MU);
        return this.walk
      }
      chunkAt(TT, UT, mT) {
        if ((0 | TT) !== TT || (0 | UT) !== UT || (0 | mT) !== mT) return;
        const WT = (0, ET.b)(TT >> DT, UT >> DT, mT >> DT);
        return WT !== this.lastKey && (this.lastKey = WT, this.lastChunk = this.chunks.get(WT)), this.lastChunk
      }
    }
    var HU = mT(38641),
      kU = mT(37936),
      jU = mT(36901),
      lU = mT(36710),
      LU = mT(34227),
      pU = mT(39264),
      BU = mT(208);
    const ZU = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      cU = [
        ["ZombieGrunt1", 33],
        ["ZombieGrunt2", 33],
        ["ZombieGrunt3", 33],
        ["ZombieHurt1", 33],
        ["ZombieHurt2", 33],
        ["ZombieHurt3", 33],
        ["ZombieHurt4", 33],
        ["bass", 34],
        ["bassattack", 34],
        ["bd", 34],
        ["bearRoar1", 14],
        ["bearRoar2", 14],
        ["bearRoar3", 14],
        ["bearRoar4", 14],
        ["bearRoar5", 14],
        ["beep", 37],
        ["bigDrumSwish1", 34],
        ["bigDrumSwish2", 34],
        ["bigDrumSwish3", 34],
        ["bow", 44],
        ["bucketEmpty1", 44],
        ["bucketEmpty2", 44],
        ["bucketEmpty3", 44],
        ["bucketFill1", 44],
        ["bucketFill2", 44],
        ["bucketFill3", 44],
        ["bullet_shell_bounce_general_07", 8],
        ["bullet_shell_bounce_general_08", 8],
        ["burp", 44],
        ["cameraShutter", 35],
        ["cannonFire1", 38],
        ["cannonFire2", 38],
        ["cannonFire3", 38],
        ["carCrash", 1],
        ["carDoorClose", 1],
        ["carDoorOpen", 1],
        ["carDriveLoop", 1],
        ["carEngineStart", 1],
        ["carHorn", 1],
        ["carIdleLoop", 1],
        ["carLockChirp", 1],
        ["cashRegister", 39],
        ["catHiss1", 15],
        ["catHiss2", 15],
        ["catHiss3", 15],
        ["catHiss4", 15],
        ["catHurt1", 15],
        ["catHurt2", 15],
        ["catHurt3", 15],
        ["catMeow1", 15],
        ["catMeow2", 15],
        ["catMeow3", 15],
        ["catMeow4", 15],
        ["catMeow5", 15],
        ["caughtFish", 6],
        ["chestClose", 44],
        ["chestOpen", 44],
        ["cloth1", 4],
        ["cloth2", 4],
        ["cloth3", 4],
        ["cloth4", 4],
        ["coinsDrop", 35],
        ["cowHurt1", 16],
        ["cowMoo1", 16],
        ["cowMoo2", 16],
        ["cowMoo3", 16],
        ["croneAttack1", 17],
        ["croneHurt1", 17],
        ["croneIdle1", 17],
        ["crowdAmbience", 2],
        ["crowdCheer", 2],
        ["crowdMurmur", 51],
        ["cryptWhoosh", 3],
        ["deerGrunt1", 18],
        ["deerHurt1", 18],
        ["dogBark1", 19],
        ["dogBark2", 19],
        ["dogBark3", 19],
        ["dogGrowl1", 19],
        ["dogGrowl2", 19],
        ["dogGrowl3", 19],
        ["dogHurt1", 19],
        ["dogHurt2", 19],
        ["doorClose", 44],
        ["doorClose2", 44],
        ["doorKnock", 3],
        ["doorOpen-bloxd1", 44],
        ["doorOpen-bloxd2", 44],
        ["doorbell", 51],
        ["drink", 44],
        ["drumSwish1", 34],
        ["drumSwish2", 34],
        ["eat1", 44],
        ["equip_leather1", 44],
        ["exp_collect", 40],
        ["exp_levelup", 40],
        ["extinguisherSpray", 5],
        ["fallsmall", 41],
        ["fennecYip1", 20],
        ["fennecYip2", 20],
        ["fennecYip3", 20],
        ["fireAlarmBell", 5],
        ["fireBurn", 42],
        ["fireCrackle", 5],
        ["fireTruckHorn", 5],
        ["firecracker1", 43],
        ["firecracker2", 43],
        ["firecracker3", 43],
        ["firecracker4", 43],
        ["futureStrangePulse", 3],
        ["game_start_countdown_01", 7],
        ["game_start_countdown_02", 7],
        ["game_start_countdown_03", 7],
        ["game_start_countdown_final", 7],
        ["gateCreak", 51],
        ["glass1", 4],
        ["glass2", 4],
        ["glass3", 4],
        ["golemGrunt1", 21],
        ["golemGrunt2", 21],
        ["gorillaIdle1", 22],
        ["gorillaIdle2", 22],
        ["gorillaIdle3", 22],
        ["gorillaIdle4", 22],
        ["gorillaRoar1", 22],
        ["grass1", 4],
        ["grass2", 4],
        ["grass3", 4],
        ["grass4", 4],
        ["gravel1", 4],
        ["gravel2", 4],
        ["gravel3", 4],
        ["gravel4", 4],
        ["handcuffsLock", 36],
        ["harp_pling", 34],
        ["hat", 34],
        ["hauntedHorrorImpact", 3],
        ["headshot_04", 8],
        ["headshot_06", 8],
        ["headshot_08", 8],
        ["headshot_11", 8],
        ["hit1", 49],
        ["hit2", 49],
        ["hit3", 49],
        ["hoeTill1", 44],
        ["hoeTill2", 44],
        ["hoeTill3", 44],
        ["hoeTill4", 44],
        ["horrorAccent1", 3],
        ["horrorFright", 3],
        ["horrorMaleDrone", 3],
        ["horseHurt1", 23],
        ["horseHurt2", 23],
        ["horseIdle1", 23],
        ["horseIdle2", 23],
        ["horseIdle3", 23],
        ["indicatorTick", 1],
        ["intensiveRainLoop", 3],
        ["jobComplete", 35],
        ["keysJingle", 51],
        ["kidsPlaying", 51],
        ["knightGrunt1", 24],
        ["knightGrunt2", 24],
        ["knightGrunt3", 24],
        ["laugh1", 45],
        ["laugh2", 45],
        ["laugh3", 45],
        ["lavaFlow", 0],
        ["levelup", 34],
        ["lowDrum1", 34],
        ["lowDrum2", 34],
        ["lowDrum3", 34],
        ["magicAccent1", 46],
        ["magicAccent2", 46],
        ["magicAccent3", 46],
        ["magicAccent4", 46],
        ["messageReceive", 35],
        ["metalDoorKnock", 3],
        ["ominousBellHit", 3],
        ["parkBirds", 51],
        ["phoneNotify", 35],
        ["phoneTap", 35],
        ["phoneVibrate", 35],
        ["pickUp", 4],
        ["pigHurt1", 25],
        ["pigHurt2", 25],
        ["pigHurt3", 25],
        ["pigOink1", 25],
        ["pigOink2", 25],
        ["pigOink3", 25],
        ["pigOink4", 25],
        ["pigOink5", 25],
        ["pistol_cock_01", 9],
        ["pistol_cock_02", 9],
        ["pistol_cock_03", 9],
        ["pistol_cock_06", 9],
        ["pistol_magazine_load_01", 9],
        ["pistol_magazine_load_02", 9],
        ["pistol_magazine_load_03", 9],
        ["pistol_magazine_unload_01", 9],
        ["pistol_magazine_unload_02", 9],
        ["pistol_magazine_unload_03", 9],
        ["pistol_shot_01", 9],
        ["pistol_shot_02", 9],
        ["pistol_shot_03", 9],
        ["pistol_shot_04", 9],
        ["pistol_shot_05", 9],
        ["pulseFromTheDark", 3],
        ["radioBeep", 36],
        ["radioChatter", 36],
        ["reaverAttack1", 26],
        ["reaverAttack2", 26],
        ["reaverAttack3", 26],
        ["reaverGrunt1", 26],
        ["reaverGrunt2", 26],
        ["reaverGrunt3", 26],
        ["reel", 6],
        ["refereeWhistle", 2],
        ["reverseBeep", 1],
        ["rifle_cock_01", 10],
        ["rifle_cock_02", 10],
        ["rifle_magazine_load_01", 10],
        ["rifle_magazine_load_02", 10],
        ["rifle_magazine_load_03", 10],
        ["rifle_magazine_unload_01", 10],
        ["rifle_magazine_unload_02", 10],
        ["rifle_magazine_unload_04", 10],
        ["rifle_shot_01", 10],
        ["rifle_shot_02", 10],
        ["rifle_shot_03", 10],
        ["rifle_shot_04", 10],
        ["rocketEngineLoop", 50],
        ["rpgBeltCloth1", 48],
        ["rpgBeltCloth2", 48],
        ["rpgBeltHandle1", 48],
        ["rpgBeltHandle2", 48],
        ["rpgBookClose", 48],
        ["rpgBookFlip1", 48],
        ["rpgBookFlip2", 48],
        ["rpgBookFlip3", 48],
        ["rpgBookOpen", 48],
        ["rpgBookPlace1", 48],
        ["rpgBookPlace2", 48],
        ["rpgBookPlace3", 48],
        ["rpgChop", 48],
        ["rpgCloth1", 48],
        ["rpgCloth2", 48],
        ["rpgCloth3", 48],
        ["rpgCloth4", 48],
        ["rpgCreak1", 48],
        ["rpgCreak2", 48],
        ["rpgCreak3", 48],
        ["rpgDoorClose1", 48],
        ["rpgDoorClose2", 48],
        ["rpgDoorClose3", 48],
        ["rpgDoorClose4", 48],
        ["rpgDoorOpen1", 48],
        ["rpgDoorOpen2", 48],
        ["rpgDrawKnife1", 48],
        ["rpgDrawKnife2", 48],
        ["rpgDrawKnife3", 48],
        ["rpgDropLeather", 48],
        ["rpgFootstep00", 48],
        ["rpgFootstep01", 48],
        ["rpgFootstep02", 48],
        ["rpgFootstep03", 48],
        ["rpgFootstep04", 48],
        ["rpgFootstep05", 48],
        ["rpgFootstep06", 48],
        ["rpgFootstep07", 48],
        ["rpgFootstep08", 48],
        ["rpgFootstep09", 48],
        ["rpgHandleCoins1", 48],
        ["rpgHandleCoins2", 48],
        ["rpgHandleSmallLeather1", 48],
        ["rpgHandleSmallLeather2", 48],
        ["rpgKnifeSlice1", 48],
        ["rpgKnifeSlice2", 48],
        ["rpgMetalClick", 48],
        ["rpgMetalLatch", 48],
        ["rpgMetalPot1", 48],
        ["rpgMetalPot2", 48],
        ["rpgMetalPot3", 48],
        ["runningSteps", 36],
        ["sand1", 4],
        ["sand2", 4],
        ["sand3", 4],
        ["sand4", 4],
        ["seatbeltClick", 1],
        ["semiAuto_cock_01", 11],
        ["semiAuto_cock_02", 11],
        ["semiAuto_cock_03", 11],
        ["semiAuto_cock_04", 11],
        ["semiAuto_cock_05", 11],
        ["semiAuto_first_shot_01", 11],
        ["semiAuto_magazine_load_01", 11],
        ["semiAuto_magazine_load_02", 11],
        ["semiAuto_magazine_load_03", 11],
        ["semiAuto_magazine_load_04", 11],
        ["semiAuto_magazine_load_05", 11],
        ["semiAuto_magazine_unload_01", 11],
        ["semiAuto_magazine_unload_02", 11],
        ["semiAuto_magazine_unload_03", 11],
        ["semiAuto_magazine_unload_04", 11],
        ["semiAuto_shot_01", 11],
        ["semiAuto_shot_02", 11],
        ["semiAuto_shot_03", 11],
        ["semiAuto_shot_04", 11],
        ["semiAuto_shot_05", 11],
        ["semiAuto_shot_06", 11],
        ["semiAuto_shot_07", 11],
        ["semiAuto_shot_08", 11],
        ["semiAuto_tail_only_shot_01", 11],
        ["sheepBaa1", 27],
        ["sheepBaa2", 27],
        ["sheepBaa3", 27],
        ["sheepBaa4", 27],
        ["sheepHurt1", 27],
        ["shopDoorbell", 51],
        ["shotgun_cock_01", 12],
        ["shotgun_cock_02", 12],
        ["shotgun_cock_03", 12],
        ["shotgun_cock_04", 12],
        ["shotgun_cock_05", 12],
        ["shotgun_load_bullet_01", 12],
        ["shotgun_load_bullet_02", 12],
        ["shotgun_load_bullet_03", 12],
        ["shotgun_load_bullet_04", 12],
        ["shotgun_load_bullet_05", 12],
        ["shotgun_load_bullet_06", 12],
        ["shotgun_load_bullet_07", 12],
        ["shotgun_load_bullet_08", 12],
        ["shotgun_shot_01", 12],
        ["shotgun_shot_02", 12],
        ["shotgun_shot_03", 12],
        ["shotgun_shot_04", 12],
        ["sirenChirp", 36],
        ["sirenWail", 36],
        ["sirenYelp", 36],
        ["skeletonRattle1", 28],
        ["skeletonRattle2", 28],
        ["skeletonRattle3", 28],
        ["skeletonRattle4", 28],
        ["snare", 34],
        ["snow1", 4],
        ["snow2", 4],
        ["snow3", 4],
        ["snow4", 4],
        ["sonarBeep", 34],
        ["splash1", 47],
        ["stagGrunt1", 29],
        ["stagHurt1", 29],
        ["stalkerAttack1", 30],
        ["stalkerIdle1", 30],
        ["step_cloth1", 49],
        ["step_cloth2", 49],
        ["step_cloth3", 49],
        ["step_cloth4", 49],
        ["step_grass1", 49],
        ["step_grass2", 49],
        ["step_grass3", 49],
        ["step_grass4", 49],
        ["step_grass5", 49],
        ["step_gravel1", 49],
        ["step_gravel2", 49],
        ["step_gravel3", 49],
        ["step_gravel4", 49],
        ["step_sand2", 49],
        ["step_sand3", 49],
        ["step_sand4", 49],
        ["step_sand5", 49],
        ["step_snow1", 49],
        ["step_snow2", 49],
        ["step_snow3", 49],
        ["step_snow4", 49],
        ["step_stone1", 49],
        ["step_stone2", 49],
        ["step_stone3", 49],
        ["step_stone4", 49],
        ["step_stone5", 49],
        ["step_stone6", 49],
        ["step_wood1", 49],
        ["step_wood2", 49],
        ["step_wood3", 49],
        ["step_wood4", 49],
        ["step_wood5", 49],
        ["step_wood6", 49],
        ["stone1", 4],
        ["stone2", 4],
        ["stone3", 4],
        ["stone4", 4],
        ["stunZap", 36],
        ["submachine_cock_01", 13],
        ["submachine_cock_02", 13],
        ["submachine_cock_03", 13],
        ["submachine_cock_04", 13],
        ["submachine_first_shot_01", 13],
        ["submachine_magazine_load_01", 13],
        ["submachine_magazine_load_02", 13],
        ["submachine_magazine_load_03", 13],
        ["submachine_magazine_load_04", 13],
        ["submachine_magazine_unload_01", 13],
        ["submachine_magazine_unload_02", 13],
        ["submachine_magazine_unload_03", 13],
        ["submachine_shot_01", 13],
        ["submachine_shot_02", 13],
        ["submachine_shot_03", 13],
        ["submachine_shot_04", 13],
        ["submachine_shot_05", 13],
        ["submachine_shot_06", 13],
        ["submachine_shot_07", 13],
        ["submachine_shot_08", 13],
        ["submachine_shot_09", 13],
        ["submachine_tail_only_shot_01", 13],
        ["successfulBowHit", 44],
        ["suspenseRiser", 3],
        ["sweep6", 49],
        ["thunderRain", 3],
        ["tillPurchase", 35],
        ["trapdoorOpen", 44],
        ["trumpetFlare", 34],
        ["trumpetNote1", 34],
        ["trumpetNote2", 34],
        ["trumpetNote3", 34],
        ["tyreScreech", 1],
        ["vanIdleLoop", 1],
        ["warperGrunt1", 31],
        ["warperGrunt2", 31],
        ["warperGrunt3", 31],
        ["warperGrunt4", 31],
        ["warperGrunt5", 31],
        ["warperPhase1", 31],
        ["warperPhase2", 31],
        ["whistle", 36],
        ["wood1", 4],
        ["wood2", 4],
        ["wood3", 4],
        ["wood4", 4],
        ["wraithGrunt1", 32],
        ["wraithGrunt2", 32],
        ["wraithHurt", 32],
        ["zapAccent1", 3],
        ["zapAccent2", 3]
      ],
      vU = cU.map((TT => {
        let [UT] = TT;
        return UT
      })),
      fU = Uint8Array.from(cU, (TT => {
        let [, UT] = TT;
        return UT
      })),
      qU = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      iU = 8;
    var bU = mT(36862),
      OU = mT(36882),
      eU = mT(36875),
      YU = mT(265);
    class JU {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YU.e;
        this.sheet = TT, this.onError = UT, this.idle = mT, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = TT => {
          this.cancelIdle = null;
          try {
            if (TT.timeRemaining() >= 1) {
              let TT = this.queue.shift();
              for (; void 0 !== TT && !this.load(TT);) TT = this.queue.shift()
            }
          } catch (UT) {
            this.onError(UT)
          } finally {
            this.schedule()
          }
        }
      }
      preload(TT) {
        const UT = [...TT].sort(((TT, UT) => TT - UT));
        for (const mT of UT) this.asked.has(mT) || (this.asked.add(mT), this.queue.push(mT));
        this.schedule()
      }
      cancel() {
        var TT;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (TT = this.cancelIdle) || void 0 === TT || TT.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(TT) {
        const UT = this.sheet(TT, !1),
          mT = this.sheet(TT, !0),
          [WT, zT] = "unloaded" === UT.state() && "unloaded" !== mT.state() ? [mT, UT] : [UT, mT],
          MT = this.gen,
          gT = () => {
            try {
              MT === this.gen && "unloaded" === zT.state() && zT.load()
            } catch (TT) {
              this.onError(TT)
            }
          },
          nT = WT.state();
        return "unloaded" === nT ? (WT.once("load", gT), WT.load(), !0) : "unloaded" === zT.state() && ("loading" === nT ? (WT.once("load", gT), !1) : (zT.load(), !0))
      }
    }
    var xU = mT(41030);
    const dU = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      wU = BU.f.Fc * BU.f.playerEyeToHeightRatio,
      tU = [0, 0, -1, 0, 1, 0],
      aU = ZU.indexOf("note");

    function yU(TT) {
      return TT >= 0 ? Math.min(1, TT) : 0
    }

    function XU(TT) {
      var UT;
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const WT = function(TT) {
        let UT = 0,
          mT = vU.length;
        for (; UT < mT;) {
          const WT = UT + mT >>> 1;
          vU[WT] < TT ? UT = WT + 1 : mT = WT
        }
        return UT
      }(TT);
      if ("" === TT || null === (UT = vU[WT]) || void 0 === UT || !UT.startsWith(TT)) return -1;
      if (vU[WT] === TT) return WT;
      let zT = WT + 1;
      for (; zT < vU.length && vU[zT].startsWith(TT);) zT++;
      return WT + Math.floor(mT() * (zT - WT))
    }
    class IU {
      constructor(TT, UT, mT, WT, zT) {
        this.group = TT, this.loudness = UT, this.startMs = mT, this.howl = WT, this.host = zT, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const TT = this.host.alive(this.id);
        return TT ? 1e3 * this.howl.duration(this.id) / TT.rate : 0
      }
      isAlive() {
        return void 0 !== this.host.alive(this.id)
      }
      canStop() {
        return this.isAlive() && (this.direct || this.host.started(this.id)) && this.howl.playing(this.id) && !this.howl._playLock
      }
      stop() {
        this.host.drop(this.id)
      }
    }
    class QU {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          WT = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = TT, this.listener = UT, this.now = mT, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(ZU.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new eU.b, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: TT => this.aliveVoice(TT),
          started: TT => this.started.has(TT),
          drop: TT => {
            var UT;
            null === (UT = this.live.get(TT)) || void 0 === UT || UT.howl.stop(TT), this.forget(TT)
          }
        }, this.handlers = {
          playSound: (TT, UT, mT, WT, zT, MT, gT, nT, HT) => {
            if (WT >= vU.length) return;
            const kT = 0 !== (zT & BT.Zd.Loop);
            zT & BT.Zd.TwoD ? this.start(WT, !1, gT, MT, nT, kT) : this.startSpatial(WT, gT, MT, nT, kT, TT, UT, mT, HT, this.earDistSq(TT, UT, mT))
          },
          soundPos: (TT, UT, mT, WT) => {
            const zT = this.core.get(WT);
            var MT;
            void 0 !== zT && (null === (MT = this.live.get(zT)) || void 0 === MT || MT.howl.pos(mT, UT, TT, zT))
          },
          soundSet: (TT, UT, mT, WT) => {
            const zT = this.core.get(TT),
              MT = void 0 === zT ? void 0 : this.live.get(zT);
            void 0 !== zT && MT && (this.setRel(zT, UT), MT.rate = mT, MT.howl.rate(mT, zT), MT.spatial && MT.howl.pannerAttr({
              refDistance: WT
            }, zT))
          },
          soundFade: (TT, UT, mT, WT) => {
            const zT = this.core.get(TT);
            void 0 !== zT && this.fade(zT, UT, mT, 0 !== (WT & BT.Wd.StopAfter))
          },
          soundStop: TT => {
            const UT = this.core.get(TT);
            var mT;
            void 0 !== UT && (null === (mT = this.live.get(UT)) || void 0 === mT || mT.howl.stop(UT), this.forget(UT))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new JU(((TT, UT) => this.sheet(TT, UT)), (TT => {
          this.errors++, console.error("Audio preload failed", TT)
        }), WT)
      }
      prepare() {
        for (let TT = 0; TT < ZU.length; TT++) this.prepareSheet(TT)
      }
      prepareSheet(TT) {
        this.sheet(TT, !1), this.sheet(TT, !0)
      }
      preload(TT) {
        this.loader.preload(TT)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let TT = 0; TT < ZU.length; TT++) {
          if (OU.c.has(ZU[TT])) continue;
          const UT = [];
          for (const WT of [!1, !0]) {
            const mT = sU(TT, WT),
              zT = this.sheets.get(mT);
            void 0 !== zT && "loading" !== zT.state() && UT.push({
              key: mT,
              howl: zT
            })
          }
          if (!UT.some((TT => {
              let {
                howl: UT
              } = TT;
              return "loaded" === UT.state()
            }))) continue;
          this.unloading[TT] += UT.length;
          const mT = () => {
            this.unloading[TT]--, 0 === this.unloading[TT] && this.prepareSheet(TT)
          };
          for (const {
              key: TT,
              howl: WT
            }
            of UT) this.sheets.delete(TT), "loaded" === WT.state() ? (0, bU.d)(WT, mT) : (WT.unload(), mT())
        }
      }
      onAudioEvent(TT, UT, mT, WT) {
        if (TT < BT.q.PlaySound || TT > BT.q.SoundReset) return !1;
        try {
          return (0, BT.he)(TT, UT, mT, WT, this.handlers)
        } catch (zT) {
          return this.errors++, console.error("Audio event failed", zT), !0
        }
      }
      applyListener(TT) {
        const UT = this.nextPose;
        for (let WT = 0; WT < 3; WT++) UT[2 - WT] = BT.B.listener(TT, 0, WT), UT[5 - WT] = BT.B.forward(TT, 0, WT), UT[8 - WT] = BT.B.up(TT, 0, WT);
        0 === UT[3] && 0 === UT[4] && 0 === UT[5] && UT.set(this.posed ? this.pose.subarray(3) : tU, 3);
        for (let WT = 0; WT < 9; WT++)
          if (!Number.isFinite(UT[WT])) return;
        const mT = this.pose;
        if (this.posed) {
          let TT = !0;
          for (let WT = 0; WT < 9 && TT; WT++) TT = UT[WT] === mT[WT];
          if (TT) return
        }
        this.listener.apply(UT) && (mT.set(UT), this.posed = !0)
      }
      playGame(TT, UT, mT, WT, zT, MT, gT) {
        const nT = XU(TT);
        if (nT < 0) return xU.b;
        if (!mT) {
          const {
            howl: TT,
            id: mT
          } = this.start(nT, !1, UT, 0, 1, gT);
          return this.gameSound(TT, mT, !1)
        }
        const HT = mT[0],
          kT = mT[1] + wU,
          jT = mT[2];
        if (!Number.isFinite(HT) || !Number.isFinite(kT) || !Number.isFinite(jT)) return xU.b;
        let lT;
        if (WT) {
          const TT = HT - WT[0],
            UT = kT - WT[1],
            mT = jT - WT[2];
          if (lT = TT * TT + UT * UT + mT * mT, lT > zT * zT) return xU.b
        } else lT = this.earDistSq(HT, kT, jT);
        const LT = this.startSpatial(nT, UT, 0, 1, gT, HT, kT, jT, MT, lT);
        return LT ? this.gameSound(LT.howl, LT.id, !0) : xU.b
      }
      setMaster(TT, UT) {
        this.level = yU(TT);
        const mT = UT ? this.level : 0;
        if (mT !== this.master) {
          this.master = mT;
          for (const [TT, UT] of this.live) UT.fadeMs = 0, UT.gain = UT.rel * this.master, UT.howl.volume(UT.gain, TT)
        }
      }
      stopCore() {
        for (const UT of [...this.core.values()]) {
          var TT;
          null === (TT = this.live.get(UT)) || void 0 === TT || TT.howl.stop(UT)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [TT, UT] of [...this.live]) UT.howl.stop(TT), this.forget(TT);
        this.core.clear()
      }
      gameSound(TT, UT, mT) {
        const WT = {
          stop: () => (this.live.has(UT) && TT.stop(UT), WT),
          fade: (TT, mT, zT) => {
            var MT, gT;
            const nT = this.level > 0 ? mT / this.level : mT > 0 && null !== (MT = null === (gT = this.live.get(UT)) || void 0 === gT ? void 0 : gT.rel) && void 0 !== MT ? MT : 0;
            return this.fade(UT, nT, zT, !1), WT
          },
          rate: mT => {
            const zT = this.live.get(UT);
            return zT && (zT.rate = function(TT) {
              return TT > 0 && TT < 1 / 0 ? TT : 1
            }(mT), TT.rate(zT.rate, UT)), WT
          },
          getVolume: () => {
            var TT, mT;
            return (null !== (TT = null === (mT = this.live.get(UT)) || void 0 === mT ? void 0 : mT.rel) && void 0 !== TT ? TT : 0) * this.level
          },
          getRelativeVolume: () => {
            var TT, mT;
            return null !== (TT = null === (mT = this.live.get(UT)) || void 0 === mT ? void 0 : mT.rel) && void 0 !== TT ? TT : 0
          },
          setRelativeVolume: TT => (this.setRel(UT, TT), WT),
          setPannerAttr: zT => {
            if (mT && this.live.has(UT)) {
              const mT = {
                ...dU,
                refDistance: jU.k
              };
              for (const [TT, UT] of Object.entries(zT)) "number" !== typeof UT && "string" !== typeof UT || (mT[TT] = UT);
              TT.pannerAttr({
                coneOuterAngle: mT.coneOuterAngle
              }, UT), TT.pannerAttr(mT, UT)
            }
            return WT
          },
          setPosition: zT => (mT && this.live.has(UT) && Number.isFinite(zT[0] + zT[1] + zT[2]) && TT.pos(zT[2], zT[1], zT[0], UT), WT)
        };
        return WT
      }
      startSpatial(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
        const jT = this.sheet(fU[TT], !0);
        let lT = null;
        if (!zT) {
          if (this.failed.has(jT)) return null;
          const mT = fU[TT] === aU ? null : (0, eU.h)(vU[TT]),
            WT = (0, eU.e)(yU(UT), Math.sqrt(kT), HT);
          if (lT = new IU(mT, WT, this.now(), jT, this.voiceHost), !this.voices.admit(lT)) return null
        }
        const LT = this.start(TT, !0, UT, mT, WT, zT);
        return lT && (lT.id = LT.id, lT.direct = "loaded" === jT.state() && !jT._playLock), jT.pannerAttr({
          coneOuterAngle: 360
        }, LT.id), jT.pannerAttr({
          ...dU,
          refDistance: HT
        }, LT.id), jT.pos(nT, gT, MT, LT.id), LT
      }
      aliveVoice(TT) {
        const UT = this.live.get(TT);
        if (!UT) return;
        const mT = UT.howl._soundById(TT);
        if (mT && !mT._ended) return UT;
        this.forget(TT)
      }
      earDistSq(TT, UT, mT) {
        if (!this.posed) return 0;
        const WT = TT - this.pose[2],
          zT = UT - this.pose[1],
          MT = mT - this.pose[0];
        return WT * WT + zT * zT + MT * MT
      }
      start(TT, UT, mT, WT, zT, MT) {
        const gT = yU(mT),
          nT = this.sheet(fU[TT], UT);
        "unloaded" === nT.state() && nT.load();
        const HT = nT.play(vU[TT]),
          kT = gT * this.master;
        return nT.volume(kT, HT), this.live.set(HT, {
          howl: nT,
          rel: gT,
          gain: kT,
          fadeFrom: kT,
          fadeAt: 0,
          fadeMs: 0,
          rate: zT,
          handle: WT,
          spatial: UT,
          stopTimer: void 0
        }), 0 !== WT && this.core.set(WT, HT), 1 !== zT && nT.rate(zT, HT), MT && nT.loop(!0, HT), {
          howl: nT,
          id: HT
        }
      }
      sheet(TT, UT) {
        const mT = sU(TT, UT);
        let WT = this.sheets.get(mT);
        if (!WT) {
          const zT = this.createHowl(ZU[TT], UT);
          zT.on("end", (TT => {
            zT.loop(TT) || this.forget(TT)
          })), zT.on("stop", (TT => {
            this.forget(TT)
          })), zT.on("play", (TT => {
            this.live.has(TT) && this.started.add(TT)
          })), zT.on("loaderror", (TT => {
            if ("loaded" !== zT.state()) {
              this.failed.add(zT);
              for (const [TT, UT] of this.live) UT.howl === zT && this.forget(TT)
            } else "number" === typeof TT && this.forget(TT)
          })), this.sheets.set(mT, zT), WT = zT
        }
        return WT
      }
      setRel(TT, UT) {
        const mT = this.live.get(TT);
        mT && (FU(mT), mT.fadeMs = 0, mT.rel = yU(UT), mT.gain = mT.rel * this.master, mT.howl.volume(mT.gain, TT))
      }
      fade(TT, UT, mT, WT) {
        const zT = this.live.get(TT);
        if (!zT) return;
        FU(zT);
        const {
          howl: MT
        } = zT, gT = this.gainNow(zT);
        zT.rel = yU(UT), zT.gain = zT.rel * this.master;
        const nT = mT > 0 ? Math.min(mT, 65535) : 0,
          HT = 0 === nT || gT === zT.gain;
        zT.fadeMs = HT ? 0 : nT, HT ? MT.volume(zT.gain, TT) : (zT.fadeFrom = gT, zT.fadeAt = this.now(), MT.fade(gT, zT.gain, nT, TT)), WT && (HT ? MT.stop(TT) : zT.stopTimer = setTimeout((() => {
          zT.stopTimer = void 0, MT.stop(TT)
        }), nT))
      }
      gainNow(TT) {
        if (TT.fadeMs > 0) {
          const UT = (this.now() - TT.fadeAt) / TT.fadeMs;
          if (UT < 1) return TT.fadeFrom + (TT.gain - TT.fadeFrom) * Math.max(0, UT);
          TT.fadeMs = 0
        }
        return TT.gain
      }
      forget(TT) {
        this.started.delete(TT);
        const UT = this.live.get(TT);
        UT && (FU(UT), this.live.delete(TT), 0 !== UT.handle && this.core.get(UT.handle) === TT && this.core.delete(UT.handle))
      }
    }

    function sU(TT, UT) {
      return 2 * TT + (UT ? 1 : 0)
    }

    function FU(TT) {
      void 0 !== TT.stopTimer && (clearTimeout(TT.stopTimer), TT.stopTimer = void 0)
    }
    var PU = mT(40743),
      VU = mT(39267);
    class uU {
      constructor(TT, UT, mT, WT) {
        this.key = TT, this.model = UT, this.host = WT, this.fl = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.FzT = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.kB = !1, this.fl = Math.max(1, Math.ceil(mT)), this.records = new Float32Array(this.fl * HU.b), this.isDirty = new Uint8Array(this.fl), this.tail = new Uint8Array(this.fl * BT.oc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(WT.cmd())
      }
      setOrigin(TT, UT, mT) {
        this.origin[0] = TT, this.origin[1] = UT, this.origin[2] = mT
      }
      markDirty(TT) {
        !this.kB && TT >= 0 && TT < this.fl && TT < BT.oc.Max && this.aB(TT, TT + 1)
      }
      commit(TT) {
        if (this.kB) return;
        (TT = Math.min(Math.max(Math.floor(TT), 0), this.fl, BT.oc.Max)) > this.count && this.aB(this.count, TT), this.count = TT;
        const {
          origin: UT,
          sentOrigin: mT,
          dirtyList: WT
        } = this, zT = this.FzT !== TT, MT = mT[0] !== UT[0] || mT[1] !== UT[1] || mT[2] !== UT[2];
        if (0 === WT.length && !zT && !MT) return;
        const gT = this.host.cmd();
        if (!gT || !this.make(gT)) return;
        const nT = WT.length,
          {
            records: HT,
            tailView: kT
          } = this;
        for (let jT = 0; jT < nT; jT++) {
          const TT = WT[jT],
            UT = TT * HU.b,
            mT = jT * BT.oc.Bytes,
            zT = 0 !== HT[UT + HU.f] ? BT.oc.Hidden : 0;
          kT.setUint32(mT, (TT | zT) >>> 0, !0), kT.setFloat32(mT + 4, HT[UT], !0), kT.setFloat32(mT + 8, HT[UT + 1], !0), kT.setFloat32(mT + 12, HT[UT + 2], !0)
        }
        if ((0, BT.Ge)(gT, 0, this.key, TT, UT, nT, this.tailOf(nT))) {
          for (let TT = 0; TT < nT; TT++) this.isDirty[WT[TT]] = 0;
          WT.length = 0, this.FzT = TT, mT[0] = UT[0], mT[1] = UT[1], mT[2] = UT[2]
        }
      }
      grow(TT) {
        (TT = Math.ceil(TT)) <= this.fl || this.kB || (this.records = (0, VU.e)(this.records, new Float32Array(TT * HU.b)), this.isDirty = (0, VU.e)(this.isDirty, new Uint8Array(TT)), this.tail = new Uint8Array(TT * BT.oc.Bytes), this.tailView = new DataView(this.tail.buffer), this.fl = TT)
      }
      dispose() {
        this.kB || (this.kB = !0, this.host.kB(this, this.made ? this.key : null))
      }
      make(TT) {
        if (!this.made && TT) {
          const {
            item: UT,
            scale: mT,
            yaw: WT
          } = this.model;
          this.made = (0, BT.Je)(TT, 0, this.key, UT, mT, WT)
        }
        return this.made
      }
      tailOf(TT) {
        const UT = TT * BT.oc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === UT || (this.tailCut = this.tail.subarray(0, UT)), this.tailCut
      }
      aB(TT, UT) {
        const {
          dirtyList: mT,
          isDirty: WT
        } = this;
        for (let zT = TT; zT < UT; zT++) 0 === WT[zT] && (WT[zT] = 1, mT.push(zT))
      }
    }
    var CU = mT(649);
    class rU {
      constructor(TT) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: TT,
          owes: TT => {
            this.owing.add(TT)
          },
          settled: (TT, UT) => {
            this.owing.delete(TT), UT && this.live.delete(TT)
          }
        }
      }
      create(TT, UT) {
        if (mT = TT, !CU.m.includes(mT)) return null;
        var mT;
        const WT = new KU(++this.keys, jT.j.indexOf(TT), UT, this.host);
        return this.live.add(WT), WT
      }
      disposeAll() {
        for (const TT of [...this.live]) TT.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const TT = this.host.cmd();
        for (const UT of this.owing)
          if (!UT.sync(TT)) return
      }
    }
    class KU {
      constructor(TT, UT, mT, WT) {
        this.key = TT, this.lifeform = UT, this.scale = mT, this.host = WT, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.kB = !1, this.sync()
      }
      setPose(TT, UT) {
        this.kB || (this.feet[0] = TT[0], this.feet[1] = TT[1], this.feet[2] = TT[2], this.yaw = UT, this.owed |= 2, this.sync())
      }
      setVisible(TT) {
        this.kB || TT === this.visible || (this.visible = TT, this.owed |= 4, this.sync())
      }
      dispose() {
        this.kB || (this.kB = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(TT) ? (this.host.settled(this, this.kB), !0) : (this.host.owes(this), !1)
      }
      write(TT) {
        if (!TT) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, BT.Re)(TT, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const UT = (2 & this.owed ? BT.Pc.Pose : 0) | (4 & this.owed ? BT.Pc.Visible : 0);
        if (0 !== UT) {
          if (!(0, BT.Pe)(TT, 0, this.key, UT, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, BT.Le)(TT, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var SU = mT(41130);

    function GU(TT, UT, mT, WT) {
      return (0, SU.d)(), (0, BT.Pf)(TT, UT, mT, WT)
    }
    var NU = mT(39271),
      EU = mT(40731);
    const hU = [0, 0, 0],
      DU = [0, 0, 0],
      oU = [0, 0, 0],
      AU = [0, 0, 0],
      RU = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Tm = [0, 0, 0],
      Um = [0, 0],
      mm = [1, 1, 1],
      Wm = 1 / 3;
    const zm = kU.i;

    function Mm(TT) {
      const UT = kU.e[TT],
        mT = UT && kU.i[UT.mainMultiblock];
      return mT && {
        main: mT,
        x: UT.compX,
        y: UT.compY,
        z: UT.compZ
      }
    }

    function gm(TT) {
      if (null === TT || void 0 === TT) return BT.Uc;
      const UT = +TT;
      return Number.isInteger(UT) && UT >= -2147483648 && UT <= 2147483647 && String(UT) === String(TT) ? UT : BT.Uc
    }

    function nm(TT, UT, mT) {
      return (0, BT.Xf)(TT, 0, UT, null !== mT && void 0 !== mT ? mT : Number.NaN)
    }
    class Hm {
      constructor(TT) {
        this.deps = TT, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new NU.c((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (TT => {
          var UT, mT;
          null === (UT = (mT = this.deps).setLocalOptions) || void 0 === UT || UT.call(mT, TT)
        })), this.mobModels = new rU((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          kB: (TT, UT) => {
            this.livePools.delete(TT), null !== UT && (this.owedFrees.push(UT), this.flushOwed())
          }
        }, this.api = TT.api, this.live = TT.live, this.chunks = TT.chunks, this.items = TT.items, this.tables = TT.tables
      }
      isLocal(TT) {
        return null !== TT && void 0 !== TT && +TT === this.api.localId
      }
      assertLocal(TT, UT) {
        if (!this.isLocal(TT)) throw new Error(`Attempted to ${UT} for a player that is not the local player`)
      }
      Aq(TT) {
        const UT = this.api.Aq(TT);
        if (!UT) throw new Error(`Entity ${TT} has no replicated position`);
        return UT
      }
      checkValid(TT) {
        return !!this.deps.isSessionLive() && (null === TT || void 0 === TT || this.api.checkValid(TT))
      }
      isAlive(TT) {
        return !1 !== this.api.isAlive(TT)
      }
      getItemStat(TT, UT, mT) {
        return this.isLocal(TT) || null !== TT && "Player" === this.api.getEntityType(TT) ? this.tables.getItemStat(UT, mT) : this.tables.getDefaultItemStat(UT, mT)
      }
      getClientOption(TT, UT) {
        return this.assertLocal(TT, "get a client option"), this.tables.getClientOption(UT)
      }
      openShop(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(TT, "open shop"), gT.j.EZ("showShopFromServer", {
          toggle: UT,
          HT: mT
        }, !0)
      }
      sendMessage(TT, UT, mT) {
        this.assertLocal(TT, "send a message");
        const WT = "string" === typeof UT ? [{
          str: UT,
          style: mT
        }] : UT;
        gT.j.EZ("chat", {
          content: WT
        }, !0)
      }
      getEntityType(TT) {
        return this.api.getEntityType(TT)
      }
      getEntityName(TT) {
        const UT = gm(TT);
        return UT === BT.Uc ? void 0 : (0, PU.j)(this.api, UT)
      }
      hasEffect(TT, UT) {
        const mT = gm(TT);
        return mT !== BT.Uc && (0, PU.h)(this.api, mT, UT)
      }
      getMetaInfo(TT) {
        return this.tables.getMetaInfo(TT)
      }
      getPlayerDbId(TT) {
        return this.assertLocal(TT, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(TT, UT, mT) {
        if (!this.chunks.dataCleared(TT, UT, mT)) return (0, PU.e)(this.api, TT, UT, mT)
      }
      EQ(TT, UT, mT, WT) {
        this.setBlockId(TT, UT, mT, this.tables.getItemId(WT))
      }
      setOtherEntitySetting(TT, UT, mT, WT) {
        if (!this.isLocal(TT)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(BT.gd, mT)) throw new Error(`Unknown other-entity setting ${mT}`);
        const zT = BT.gd[mT],
          MT = gm(UT);
        if (MT === BT.Uc || !this.deps.beforeWrite()) return;
        const gT = (0, sT.g)(WT);
        if (gT.length > 16384) throw new Error(`The other-entity setting ${mT}'s value is over 16384 bytes`);
        const nT = this.api.memoryView(Uint8Array, this.api.scratch(), gT.length, "set_other_entity_setting's value");
        nT && (nT.set(gT), this.api.queries.setOtherEntitySetting(MT, zT, gT.length))
      }
      getPositionView(TT) {
        return this.live.position(+TT)
      }
      readDrawnPosition(TT, UT) {
        return this.api.readDrawnPosition(gm(TT), UT)
      }
      getDrawnHeading(TT) {
        const UT = gm(TT),
          mT = (UT === BT.Uc ? 0 : this.api.queries.directorEntity(UT)) >= BT.yb.BYTES ? this.api.memoryData(this.api.scratch(), BT.yb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!mT) return null;
        if (1 === BT.yb.headingIsDrawn(mT, 0)) return BT.yb.heading(mT, 0);
        const WT = this.api.apiView;
        return this.isLocal(TT) && 0 === (BT.x.playerFlags(WT, 0) & BT.Cd.FreeCam) ? BT.x.heading(WT, 0) : null
      }
      getLocalPlayerMovement() {
        const TT = BT.x.playerFlags(this.api.apiView, 0);
        return 0 === (TT & BT.Cd.Replay) && this.api.readDrawnPosition(this.api.localId, oU) ? {
          onGround: 0 !== (TT & BT.Cd.OnGround),
          jumpHeld: 0 !== (TT & BT.Cd.JumpHeld)
        } : null
      }
      RUT(TT) {
        return this.isLocal(TT) ? this.items.fn() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var TT, UT;
        return "Gun" === (null === (TT = this.aliveHeld()) || void 0 === TT || null === (UT = TT.typeObj) || void 0 === UT ? void 0 : UT.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.fn()
      }
      isCrosshairShown() {
        var TT, UT;
        const mT = (0, lU.e)(WT.b.get("crosshairGameView"), WT.b.get("crosshairShownOverride"));
        if (null !== mT) return mT;
        const zT = null === (TT = this.aliveHeld()) || void 0 === TT ? void 0 : TT.typeObj,
          MT = "Gun" === (null === zT || void 0 === zT ? void 0 : zT.type),
          gT = MT || !0 === (null === zT || void 0 === zT ? void 0 : zT.showsAimingUi),
          nT = 0 === (BT.x.playerFlags(this.api.apiView, 0) & BT.Cd.ZoomFirstPerson),
          HT = null !== (UT = this.tables.getClientOption("gunshotOrigin")) && void 0 !== UT ? UT : null;
        return (0, lU.i)({
          gun: MT,
          aimable: gT
        }, nT, (0, LU.e)(), HT)
      }
      setCrosshairShown(TT) {
        WT.b.set({
          crosshairShownOverride: TT
        })
      }
      getInventoryFreeSlotCount(TT) {
        return this.isLocal(TT) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(TT) {
        return this.isLocal(TT) ? this.items.selectedSlot : null
      }
      getItemSlot(TT, UT) {
        return this.isLocal(TT) ? this.items.slot(UT) : null
      }
      swapInventorySlots(TT, UT) {
        return this.items.swap(TT, UT)
      }
      isPlayerCrouching(TT) {
        if (this.isLocal(TT)) return 0 !== (BT.x.playerFlags(this.api.apiView, 0) & BT.Cd.Crouching);
        const UT = gm(TT);
        return UT !== BT.Uc && 1 === this.api.queries.entityCrouching(UT)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (BT.x.playerFlags(this.api.apiView, 0) & BT.Cd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.xTT()
      }
      getActionRay() {
        const TT = this.api.apiView;
        for (let UT = 0; UT < 3; UT++) RU.origin[UT] = BT.x.KTT(TT, 0, UT), RU.direction[UT] = BT.x.actionDir(TT, 0, UT);
        return RU
      }
      canModifyBlockAt(TT, UT, mT) {
        return 1 === this.api.queries.canModify(TT, UT, mT)
      }
      isSolidToPlayerBlockId(TT) {
        return this.tables.isSolidBlockId(TT) && !this.chunks.isWalkThrough(TT)
      }
      blockNameToBlockId(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(TT, UT)
      }
      blockIdToBlockName(TT) {
        return this.tables.nameOfId(TT)
      }
      fUT(TT, UT, mT, WT, zT) {
        return 1 === this.api.queries.terrainBlocked(WT, TT, UT, mT, gm(null !== zT && void 0 !== zT ? zT : null))
      }
      getChunkVersion(TT, UT, mT) {
        return this.chunks.version(TT, UT, mT)
      }
      scanBlocks(TT, UT, mT, WT, zT, MT, gT, nT) {
        return this.chunks.scan(TT, UT, mT, WT, zT, MT, gT, nT)
      }
      isBlockInLoadedChunk(TT, UT, mT) {
        return this.chunks.isLoaded(TT, UT, mT)
      }
      getBlockId(TT, UT, mT) {
        return this.chunks.Gg(TT, UT, mT)
      }
      playSound(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(TT)) return null;
        const gT = this.playSoundFrom(UT, mT, zT, MT);
        return 1 === WT ? gT : gT.rate(WT)
      }
      preloadSounds(TT) {
        var UT, mT;
        null === (UT = (mT = this.deps).preloadSounds) || void 0 === UT || UT.call(mT, TT)
      }
      playSoundFrom(TT, UT, mT, WT) {
        var zT, MT;
        const gT = this.deps.playSound;
        if (!gT) return xU.b;
        const nT = null === mT || void 0 === mT ? void 0 : mT.zT,
          HT = null !== (zT = null === mT || void 0 === mT ? void 0 : mT.maxHearDist) && void 0 !== zT ? zT : jU.g,
          kT = null !== (MT = null === mT || void 0 === mT ? void 0 : mT.refDistance) && void 0 !== MT ? MT : jU.k;
        let jT = null;
        if (Array.isArray(nT)) hU[0] = nT[0], hU[1] = nT[1], hU[2] = nT[2], jT = hU;
        else if (void 0 !== nT && null !== nT) {
          const TT = gm(nT);
          if (!this.api.isLocal(TT)) {
            if (!this.api.readPosition(TT, hU)) return xU.b;
            jT = hU
          }
        }
        return gT(TT, UT, jT, jT && this.ear(), HT, kT, WT)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, DU)) DU[1] += wU;
        else {
          const TT = this.api.apiView;
          if (0 === BT.x.viewProj(TT, 0, 3) && 0 === BT.x.viewProj(TT, 0, 7) && 0 === BT.x.viewProj(TT, 0, 11)) return null;
          for (let UT = 0; UT < 3; UT++) DU[UT] = BT.x.eye(TT, 0, UT)
        }
        return Number.isFinite(DU[0] + DU[1] + DU[2]) ? DU : null
      }
      setBlockId(TT, UT, mT, WT) {
        if (!Number.isInteger(WT) || WT < 0 || WT > 65535) throw new Error(`Invalid block id ${WT}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(TT, UT, mT)) return;
        const zT = Math.floor(TT),
          MT = Math.floor(UT),
          gT = Math.floor(mT),
          nT = this.predictedCells(zT, MT, gT, WT);
        if (1 === this.api.queries.EQ(zT, MT, gT, WT)) {
          for (let TT = 0; TT < nT.length; TT += 5) this.chunks.setOverlay(nT[TT], nT[TT + 1], nT[TT + 2], nT[TT + 3], 1 === nT[TT + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(TT, UT) {
        return this.deps.particles.create(TT, UT)
      }
      playParticleEffect(TT) {
        this.deps.particles.playEffect(TT)
      }
      burstParticlePreset(TT, UT, mT) {
        this.deps.particles.burstPreset(TT, UT, mT)
      }
      createGameMesh(TT, UT, mT) {
        const WT = ++this.meshKeys,
          zT = this.deps.cmd();
        if (!zT) return WT;
        const {
          look: MT,
          colour: gT
        } = function(TT) {
          switch (TT.kind) {
            case void 0:
            case "flatEmissive":
              return TT.onTop ? {
                look: BT.Vb.FlatOnTop,
                colour: [...TT.rgb, TT.alpha]
              } : TT.opaque ? {
                look: BT.Vb.FlatOpaque,
                colour: [...TT.rgb, 1]
              } : {
                look: BT.Vb.Flat,
                colour: [...TT.rgb, TT.alpha]
              };
            case "chevronPath":
              return {
                look: BT.Vb.Chevrons, colour: [...(0, pU.d)(TT.colour), TT.alpha]
              };
            case "furnaceFire":
              return {
                look: BT.Vb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(UT), nT = Math.floor(TT.positions.length / 3), HT = function(TT, UT) {
          const mT = Math.floor(TT.positions.length / 3),
            WT = TT.indices.length,
            zT = mT * (UT ? 5 : 3),
            MT = new Uint8Array(4 * (zT + WT)),
            gT = new DataView(MT.buffer);
          for (let kT = 0; kT < 3 * mT; kT++) gT.setFloat32(4 * kT, TT.positions[kT], !0);
          if (UT) {
            var nT;
            const UT = null !== (nT = TT.uvs) && void 0 !== nT ? nT : [];
            for (let TT = 0; TT < 2 * mT; TT++) {
              var HT;
              gT.setFloat32(4 * (3 * mT + TT), null !== (HT = UT[TT]) && void 0 !== HT ? HT : 0, !0)
            }
          }
          for (let kT = 0; kT < WT; kT++) gT.setUint32(4 * (zT + kT), TT.indices[kT], !0);
          return MT
        }(TT, (0, HU.g)(UT));
        return (0, BT.ve)(zT, 0, WT, MT, gT, mT, nT, TT.indices.length, HT) && this.liveMeshes.add(WT), WT
      }
      setGameMesh(TT, UT) {
        var mT;
        const WT = this.deps.cmd();
        if (!WT) return;
        let zT = 0;
        UT.anchor && (zT |= BT.Yb.Anchor, Tm[0] = UT.anchor[0], Tm[1] = UT.anchor[1], Tm[2] = UT.anchor[2]), void 0 !== UT.visible && (zT |= BT.Yb.Visible), UT.uvOffset && (zT |= BT.Yb.UvOffset, Um[0] = UT.uvOffset[0], Um[1] = UT.uvOffset[1]);
        const MT = null !== (mT = UT.visibility) && void 0 !== mT ? mT : 1;
        void 0 !== UT.visibility && (zT |= BT.Yb.Visibility), UT.scale && (zT |= BT.Yb.Scale, mm[0] = UT.scale[0], mm[1] = UT.scale[1], mm[2] = UT.scale[2]), 0 !== zT && (0, BT.Ae)(WT, 0, TT, zT, UT.visible ? 1 : 0, Tm, Um, MT, mm)
      }
      disposeGameMesh(TT) {
        const UT = this.deps.cmd();
        UT && !(0, BT.xe)(UT, 0, TT) || this.liveMeshes.delete(TT)
      }
      hasPackModel(TT) {
        var UT, mT, WT;
        return null !== (UT = null === (mT = (WT = this.deps).hasPackModel) || void 0 === mT ? void 0 : mT.call(WT, TT)) && void 0 !== UT && UT
      }
      disposeGameOutput() {
        const TT = TT => {
          try {
            TT()
          } catch (UT) {
            console.error("Error freeing client game output", UT)
          }
        };
        for (const UT of [...this.liveMeshes]) TT((() => {
          this.disposeGameMesh(UT)
        }));
        for (const UT of [...this.livePools]) TT((() => {
          UT.dispose()
        }));
        TT((() => {
          this.mobModels.disposeAll()
        })), TT((() => {
          this.setGroundArrowStyle(null)
        })), TT((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), TT((() => {
          this.setCrosshairShown(null)
        })), TT((() => {
          this.cameraTurn.dispose()
        })), TT((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(TT, UT) {
        const mT = this.tables.idOf(TT.item);
        if (void 0 === mT) return null;
        const WT = new uU(++this.poolKeys, {
          item: mT,
          scale: TT.scale,
          yaw: TT.yaw
        }, UT, this.poolHost);
        return this.livePools.add(WT), WT
      }
      createMobModel(TT, UT) {
        return this.mobModels.create(TT, UT)
      }
      setRouteChevrons(TT) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !TT || 0 === TT.cells.length) return;
        const UT = `${TT.colour} ${TT.alpha}`;
        UT !== this.routeLook && (this.routeLook = UT, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(TT) {
          const [UT, mT, WT] = TT[0].pos, zT = [], MT = [], gT = [];
          return TT.forEach(((TT, nT) => {
            let {
              pos: HT,
              way: [kT, jT]
            } = TT;
            const lT = HT[0] - UT + .5,
              LT = HT[1] - mT + .04,
              pT = HT[2] - WT + .5,
              [BT, ZT] = [.35 * -jT, .35 * kT],
              [cT, vT] = [nT * Wm, (nT + 1) * Wm],
              fT = zT.length / 3;
            zT.push(lT - .5 * kT + BT, LT, pT - .5 * jT + ZT), zT.push(lT - .5 * kT - BT, LT, pT - .5 * jT - ZT), zT.push(lT + .5 * kT + BT, LT, pT + .5 * jT + ZT), zT.push(lT + .5 * kT - BT, LT, pT + .5 * jT - ZT), MT.push(0, cT, 1, cT, 0, vT, 1, vT), gT.push(fT, fT + 1, fT + 2, fT + 1, fT + 3, fT + 2)
          })), {
            positions: zT,
            uvs: MT,
            indices: gT
          }
        }(TT.cells), {
          kind: "chevronPath",
          colour: TT.colour,
          alpha: TT.alpha
        }, TT.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(TT) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(TT, 250) / 1e3 * 1.2 * Wm) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(TT) {
        this.pendingStyle = TT, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const TT = this.owedFrees;
        if (0 === TT.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const UT = this.deps.cmd();
        if (!UT) return TT.length = 0, void(this.pendingFar = void 0);
        let mT = 0;
        for (; mT < TT.length && (0, BT.He)(UT, 0, TT[mT]);) mT++;
        TT.splice(0, mT);
        const WT = this.pendingStyle;
        if (void 0 !== WT) {
          (WT ? (0, BT.$f)(UT, 0, WT.width, WT.alpha, 1, WT.endAtSolidFace ? 1 : 0) : (0, BT.$f)(UT, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const zT = this.pendingFar;
        void 0 !== zT && (0, BT.Tf)(UT, 0, null !== zT && void 0 !== zT ? zT : 0, null === zT ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(TT, UT) {
        const mT = this.deps.cmd(),
          WT = gm(TT);
        mT && WT !== BT.Uc && (0, BT.fg)(mT, 0, WT, UT)
      }
      setFacingTolerance(TT, UT) {
        const mT = this.deps.cmd(),
          WT = gm(TT);
        mT && WT !== BT.Uc && nm(mT, WT, UT)
      }
      forEachEntity(TT) {
        const {
          api: UT
        } = this;
        for (let mT = 0; mT < UT.idStr.length; mT++) {
          const WT = UT.idStr[mT];
          null === WT || bT(UT.kinds[mT]) || TT(WT)
        }
      }
      getEntityInfo(TT) {
        return this.deps.entityInfo.get(TT)
      }
      isEntityInteractable(TT) {
        const UT = gm(TT);
        return UT !== BT.Uc && 1 === this.api.queries.entityInteractable(UT)
      }
      isLocalPlayer(TT) {
        return this.isLocal(TT)
      }
      getLineOwner(TT) {
        var UT;
        const mT = null === (UT = this.deps.entityInfo.get(TT)) || void 0 === UT ? void 0 : UT.meshOpts;
        if (!mT) return null;
        try {
          const {
            lineToEId: TT
          } = JSON.parse(mT);
          return null !== TT && void 0 !== TT ? TT : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const TT = this.api.apiView;
        return AU[0] = BT.x.eye(TT, 0, 0), AU[1] = BT.x.eye(TT, 0, 1), AU[2] = BT.x.eye(TT, 0, 2), AU
      }
      getCameraFar() {
        return BT.x.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(TT) {
        null !== TT && (this.farSet = !0), this.pendingFar = TT, this.flushOwed()
      }
      turnCamera(TT, UT) {
        this.cameraTurn.turn(TT, UT)
      }
      clearPickupDelay(TT) {
        const UT = this.deps.cmd(),
          mT = gm(TT);
        UT && mT !== BT.Uc && (0, BT.me)(UT, 0, mT)
      }
      sendChat(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const mT = this.deps.sendCmd();
        mT && GU(mT, 0, EU.e.Chat, (0, sT.g)((0, EU.l)({
          Xj: TT,
          Ij: UT
        })))
      }
      sendCommand(TT) {
        TT.length <= 119 && this.sendChat(`/${TT}`)
      }
      predictedCells(TT, UT, mT, WT) {
        const zT = this.chunks,
          MT = [],
          gT = (TT, UT, mT, WT, zT) => {
            MT.push(TT, UT, mT, WT, this.tables.blockRootId(zT) === this.tables.blockRootId(WT) ? 0 : 1)
          },
          nT = zT.Gg(TT, UT, mT),
          HT = Mm(nT);
        if (HT) {
          const [WT, MT, kT] = [TT - HT.x, UT - HT.y, mT - HT.z], jT = zm[zT.Gg(WT, MT, kT)], lT = null === jT || void 0 === jT ? void 0 : jT.positions.some((TT => TT.id === nT && TT.x === HT.x && TT.y === HT.y && TT.z === HT.z));
          for (const TT of (lT && jT ? jT : HT.main).positions) zT.Gg(WT + TT.x, MT + TT.y, kT + TT.z) === TT.id && gT(WT + TT.x, MT + TT.y, kT + TT.z, 0, TT.id)
        }
        const kT = Mm(WT);
        if (kT)
          for (const lT of kT.main.positions) {
            const [WT, MT, nT] = [TT + lT.x - kT.x, UT + lT.y - kT.y, mT + lT.z - kT.z];
            gT(WT, MT, nT, lT.id, zT.Gg(WT, MT, nT))
          } else gT(TT, UT, mT, WT, nT);
        const jT = this.tables;
        if ((0 !== jT.attachedTopOf(nT) || 0 !== jT.attachedTopOf(WT)) && zT.isLoaded(TT, UT + 1, mT)) {
          let HT = zT.Gg(TT, UT + 1, mT);
          for (let WT = 0; WT < MT.length; WT += 5) MT[WT] === TT && MT[WT + 1] === UT + 1 && MT[WT + 2] === mT && (HT = MT[WT + 3]);
          const kT = this.attachedTopWrite(nT, WT, HT);
          void 0 !== kT && gT(TT, UT + 1, mT, kT, HT)
        }
        return MT
      }
      attachedTopWrite(TT, UT, mT) {
        const WT = this.tables,
          zT = WT.attachedTopOf(TT),
          MT = WT.attachedTopOf(UT),
          gT = 0 !== zT && 0 !== mT && WT.blockRootId(mT) === WT.blockRootId(zT);
        return 0 !== zT && 0 !== MT && WT.blockRootId(TT) === WT.blockRootId(UT) ? gT && mT !== MT ? MT : void 0 : 0 === MT || !gT && 0 !== mT ? gT ? 0 : void 0 : MT
      }
    }
    const km = BT.ic + BT.mc * BT.tc.BYTES,
      jm = 2147483647,
      lm = new TextDecoder,
      Lm = new TextEncoder,
      pm = Object.freeze({
        Yj: 0,
        Dn: null,
        amountAddedToSlot: 0
      }),
      Bm = new Proxy({}, {
        get: () => () => BT.cd
      });

    function Zm(TT) {
      return Number.isInteger(TT) && TT >= 0 && TT <= 65535
    }

    function cm(TT) {
      return Number.isInteger(TT) && TT >= 0 && TT <= 4294967295
    }
    class fm {
      constructor(TT) {
        this.deps = TT, this.Kz = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(BT.mc), this.ids = new Uint16Array(BT.mc), this.amounts = new Uint16Array(BT.mc), this.attrRead = new Float64Array(BT.mc).fill(-1), this.stale = new Uint16Array(BT.mc), this.staleVersion = new Uint32Array(BT.mc), this.instances = new Uint32Array(BT.mc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
      }
      get length() {
        return this.len
      }
      get selectedSlot() {
        return this.selected
      }
      get slotIcon() {
        return this.slotIconId
      }
      get changes() {
        return this.version
      }
      slot(TT) {
        var UT;
        return Number.isInteger(TT) && TT >= 0 && TT < this.len && 0 !== this.ids[TT] && null !== (UT = this.facades[TT]) && void 0 !== UT ? UT : null
      }
      fn() {
        return this.slot(this.selected)
      }
      playerItems() {
        const TT = [];
        for (let UT = 0; UT < Math.min(BT.nd, this.len); UT++) TT.push(this.slot(UT));
        return TT
      }
      freeSlots() {
        let TT = 0;
        for (let UT = 0; UT < Math.min(BT.nd - BT.j, this.len); UT++) 0 === this.ids[UT] && TT++;
        return TT
      }
      amountOf(TT) {
        let UT = 0;
        for (let WT = 0; WT < Math.min(BT.nd, this.len); WT++) {
          const zT = this.slot(WT);
          var mT;
          if ((null === zT || void 0 === zT ? void 0 : zT.name) === TT) UT += null !== (mT = zT.amount) && void 0 !== mT ? mT : 1
        }
        return UT
      }
      instance(TT) {
        var UT;
        return null !== (UT = this.instances[TT]) && void 0 !== UT ? UT : 0
      }
      watch(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      touch() {
        this.version++
      }
      flush(TT) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const mT of [...this.listeners]) try {
            mT()
          } catch (UT) {
            TT(UT)
          }
        }
      }
      chestOpened(TT, UT, mT) {
        this.Kz[0] = TT, this.Kz[1] = UT, this.Kz[2] = mT, this.version++
      }
      refresh() {
        const TT = this.deps.api.apiView,
          UT = BT.x.inventoryViewPtr(TT, 0),
          mT = BT.x.inventoryVersion(TT, 0),
          WT = BT.x.selectedSlot(TT, 0);
        WT !== this.selected && (this.selected = WT, this.version++);
        const zT = BT.x.slotIcon(TT, 0);
        if (zT !== this.slotIconId && (this.slotIconId = zT, this.iconChanged = !0), UT === this.viewPtr && mT === this.viewVersion) return;
        this.viewPtr = UT, this.viewVersion = mT;
        const MT = this.deps.api.memoryData(UT, km, 4, "the inventory view"),
          gT = MT ? Math.min(MT.getUint32(0, !0), BT.mc) : 0;
        gT !== this.len && (this.len = gT, this.version++);
        let nT = 0;
        for (let HT = 0; HT < BT.mc; HT++) {
          const TT = BT.ic + HT * BT.tc.BYTES,
            UT = null !== MT && HT < gT ? BT.tc.item(MT, TT) : 0;
          if (0 === UT || null === MT) {
            0 !== this.ids[HT] && (this.ids[HT] = 0, this.attrRead[HT] = -1, this.instances[HT]++, this.version++);
            continue
          }
          const mT = BT.tc.amount(MT, TT),
            WT = BT.tc.attrVersion(MT, TT);
          UT === this.ids[HT] && mT === this.amounts[HT] || this.fill(HT, UT, mT), WT !== this.attrRead[HT] && (this.stale[nT] = HT, this.staleVersion[nT] = WT, nT++)
        }
        nT > 0 && this.fetchAttributes(nT)
      }
      fill(TT, UT, mT) {
        const {
          tables: WT
        } = this.deps, zT = UT !== this.ids[TT];
        let MT = this.facades[TT];
        MT || (MT = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[TT] = MT), zT && (MT.name = WT.nameOfId(UT), MT.typeObj = WT.itemType(UT), MT.attributes = {
          customAttributes: {}
        }, this.attrRead[TT] = -1, this.instances[TT]++), MT.amount = 0 === mT ? null : mT, this.ids[TT] = UT, this.amounts[TT] = mT, this.version++
      }
      fetchAttributes(TT) {
        const {
          api: UT,
          onError: mT
        } = this.deps, WT = UT.memoryView(Uint16Array, UT.scratch(), TT, "item_attributes_batch's slots");
        if (!WT) return void this.markRead(TT);
        WT.set(this.stale.subarray(0, TT));
        const zT = UT.queries.itemAttributesBatch(TT),
          MT = 4294967295 === zT ? null : UT.memoryData(UT.scratch(), zT, 4, "item_attributes_batch's answer");
        if (!MT) return void this.markRead(TT);
        const gT = new Uint8Array(MT.buffer, MT.byteOffset, zT);
        for (let HT = 0; HT + 8 <= zT;) {
          const TT = MT.getUint16(HT, !0),
            UT = MT.getUint32(HT + 4, !0),
            WT = gT.subarray(HT + 8, HT + 8 + UT);
          HT += 8 + (0, LT.Ge)(UT);
          const zT = this.facades[TT];
          if (zT && 0 !== this.ids[TT] && 0 !== UT) {
            try {
              zT.attributes = JSON.parse(lm.decode(WT))
            } catch (nT) {
              mT(nT)
            }
            this.version++
          }
        }
        this.markRead(TT)
      }
      markRead(TT) {
        for (let UT = 0; UT < TT; UT++) this.attrRead[this.stale[UT]] = this.staleVersion[UT]
      }
      swap(TT, UT) {
        return Zm(TT) && Zm(UT) && this.settle(this.queries().invSwap(TT, UT))
      }
      move(TT, UT, mT) {
        return Zm(TT) && Zm(UT) && cm(mT) && this.settle(this.queries().invMove(TT, UT, mT))
      }
      quickMove(TT, UT, mT, WT) {
        var zT, MT;
        if (!Zm(TT) || !Zm(UT) || !Zm(mT) || null !== WT && !cm(WT)) return null;
        const gT = this.queries().invQuickMove(TT, UT, mT, null === WT ? -1 : Math.min(WT, jm)),
          nT = gT === BT.cd ? BT.Ib : null !== (zT = null === (MT = this.extras()) || void 0 === MT ? void 0 : MT[1]) && void 0 !== zT ? zT : BT.Ib;
        return this.settle(gT), nT === BT.Ib ? null : nT
      }
      remove(TT, UT, mT) {
        return Zm(TT) && cm(UT) && this.settle(this.queries().invRemove(TT, UT, mT ? 1 : 0))
      }
      selectSlot(TT) {
        return Zm(TT) && this.settle(this.queries().selectSlot(TT))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(TT, UT, mT) {
        if (!Zm(TT) || !Number.isInteger(UT)) return !1;
        const [WT, zT, MT] = mT;
        return this.settle(this.queries().invEnchant(TT, UT, Math.floor(WT), Math.floor(zT), Math.floor(MT)))
      }
      craft(TT, UT, mT) {
        let WT;
        try {
          WT = this.deps.tables.getItemId(TT)
        } catch {
          return pm
        }
        if (!Zm(UT) || null !== mT && (Number.isNaN(mT) || mT < 0)) return pm;
        const zT = null === mT || mT > jm ? -1 : Math.floor(mT),
          MT = this.queries().craft(WT, UT, zT);
        let gT = pm;
        const nT = MT === BT.cd ? null : this.extras();
        if (nT) {
          const [TT, UT, mT] = nT;
          gT = {
            Yj: TT,
            Dn: UT === BT.Ib ? null : UT,
            amountAddedToSlot: mT
          }
        }
        return this.settle(MT), gT
      }
      salvage(TT, UT, mT) {
        let WT;
        try {
          WT = this.deps.tables.getItemId(UT)
        } catch {
          return !1
        }
        return Zm(TT) && Number.isInteger(mT) && this.settle(this.queries().salvage(TT, WT, Math.max(Math.min(mT, jm), -jm)))
      }
      craftingView(TT, UT, mT) {
        var WT;
        if (this.stopped) return null;
        const {
          api: zT,
          onError: MT
        } = this.deps, gT = TT ? Lm.encode(TT) : null;
        if (null !== gT) {
          if (gT.length > 1024) return MT(new Error(`The crafting station ${TT}'s name is over 1024 bytes`)), null;
          const UT = zT.memoryView(Uint8Array, zT.scratch(), gT.length, "crafting_view's station");
          if (!UT) return null;
          UT.set(gT)
        }
        const nT = Zm(UT) && Zm(mT),
          HT = zT.queries.craftingView(null !== (WT = null === gT || void 0 === gT ? void 0 : gT.length) && void 0 !== WT ? WT : 0, nT ? UT : 0, nT ? mT : 0);
        return HT < BT.sb.BYTES ? (zT.reportCorruption(`crafting_view's answer of ${HT} bytes`), null) : zT.memoryData(zT.scratch(), HT, 1, "crafting_view's answer")
      }
      queries() {
        var TT, UT;
        return !1 === (null === (TT = (UT = this.deps).beforeOp) || void 0 === TT ? void 0 : TT.call(UT)) ? (this.stopped = !0, Bm) : this.deps.api.queries
      }
      extras() {
        const {
          api: TT
        } = this.deps;
        return TT.memoryView(Uint32Array, TT.scratch(), 3, "a sync query's extra words")
      }
      settle(TT) {
        if (TT === BT._c)(0, SU.d)();
        else if (TT !== BT.cd) {
          const UT = this.deps.cmd();
          UT && function(TT, UT, mT) {
            return (0, SU.d)(), (0, BT.rg)(TT, UT, mT)
          }(UT, 0, TT) || this.deps.onError(new Error(`Sync op ${TT}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), TT !== BT.cd
      }
    }
    const qm = 1 / .6,
      im = [0, 1, 0],
      bm = [0, 0, 0],
      Om = new Uint8Array(0),
      em = 1.2 * BU.f.sc,
      Ym = new TextEncoder,
      Jm = [0, 0, 0],
      xm = [0, 0, 0],
      dm = new Map;

    function wm(TT) {
      let UT = dm.get(TT);
      return UT || (dm.size >= 64 && dm.clear(), UT = Ym.encode(`{"emitRate":${TT}}`), dm.set(TT, UT)), UT
    }

    function tm(TT) {
      return Number.isFinite(TT) && TT > 0 ? TT : 0
    }

    function am(TT, UT) {
      for (let mT = 0; mT < 3; mT++) {
        const WT = Math.abs(UT[mT]);
        Jm[mT] = TT[mT] - WT, xm[mT] = 2 * WT
      }
      return Number.isFinite(Jm[0] + Jm[1] + Jm[2] + xm[0] + xm[1] + xm[2])
    }

    function ym(TT, UT) {
      return "pos1" === TT || "pos2" === TT ? void 0 : UT
    }

    function Xm(TT, UT, mT) {
      return TT.length > BT.Ad.MaxOpts ? (mT(new Error(`${UT}'s particle opts are over ${BT.Ad.MaxOpts} bytes of JSON`)), null) : TT
    }
    const Im = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class Qm {
      constructor(TT) {
        this.deps = TT, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(TT, UT) {
        var mT;
        const WT = this.sink(),
          zT = null !== (mT = UT.half) && void 0 !== mT ? mT : bm;
        if (!WT || this.live >= BT.Ad.MaxLiveKeys || this.nextKey > BT.Ad.MaxKey || !am(UT.pos, zT)) return Im;
        const MT = this.nextKey,
          gT = Xm(function(TT) {
            var UT, mT, WT;
            const zT = JSON.stringify({
              texture: "string" === typeof TT.texture ? TT.texture : "smokePuff",
              fl: TT.fl,
              minLifeTime: TT.minLifeTime,
              maxLifeTime: TT.maxLifeTime,
              minSize: TT.minSize,
              maxSize: TT.maxSize,
              minEmitPower: TT.minEmitPower,
              maxEmitPower: TT.maxEmitPower,
              emitRate: tm(TT.emitRate),
              gravity: null !== (UT = TT.gravity) && void 0 !== UT ? UT : bm,
              dir1: null !== (mT = TT.dir1) && void 0 !== mT ? mT : im,
              dir2: null !== (WT = TT.dir2) && void 0 !== WT ? WT : im,
              colorGradients: TT.colorGradients,
              blendMode: TT.blendMode
            });
            return Ym.encode(zT)
          }(TT), "createParticles", this.deps.onError);
        return gT && (0, BT.ef)(WT, 0, MT, 0, BT.Ad.PresetNone, 0, Jm, xm, gT) ? (this.nextKey++, this.live++, this.started = !0, new sm(this, this.session, MT, TT, zT)) : Im
      }
      playEffect(TT) {
        const UT = this.sink(),
          {
            pos1: mT,
            pos2: WT
          } = TT;
        if (!UT || !mT || !WT) return;
        for (let MT = 0; MT < 3; MT++) Jm[MT] = Math.min(mT[MT], WT[MT]), xm[MT] = Math.abs(WT[MT] - mT[MT]);
        if (!Number.isFinite(Jm[0] + Jm[1] + Jm[2] + xm[0] + xm[1] + xm[2])) return;
        const zT = Xm(Ym.encode(JSON.stringify(TT, ym)), "playParticleEffect", this.deps.onError);
        zT && (0, BT.Ze)(UT, 0, 0, BT.Ad.PresetNone, BT.Ad.HasBox, 0, Jm, xm, zT)
      }
      burstPreset(TT, UT, mT) {
        const WT = this.sink(),
          zT = Math.min(Math.floor(mT), BT.Ad.MaxBurst);
        if (!WT || !Object.hasOwn(BT.Zb, TT) || !(zT > 0)) return;
        const MT = em;
        for (let gT = 0; gT < 3; gT++) Jm[gT] = UT[gT] - MT / 2, xm[gT] = MT;
        Number.isFinite(Jm[0] + Jm[1] + Jm[2]) && (0, BT.Ze)(WT, 0, 0, BT.Zb[TT], BT.Ad.HasBox, zT, Jm, xm, Om)
      }
      sessionEnded() {
        this.session++;
        const TT = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !TT || (0, BT.if)(TT, 0)
      }
      sinkFor(TT) {
        return TT === this.session ? this.deps.cmd() : null
      }
      stop(TT, UT) {
        const mT = this.sinkFor(TT);
        mT && (0, BT.mf)(mT, 0, UT) && this.live--
      }
    }
    class sm {
      constructor(TT, UT, mT, WT, zT) {
        this.owner = TT, this.session = UT, this.key = mT, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(zT[0]), Math.abs(zT[1]), Math.abs(zT[2])], this.rate = tm(WT.emitRate), this.emitted = this.rate > 0;
        const MT = WT.maxLifeTime * qm * 1e3 + 250;
        this.stopDelayMs = MT >= 0 ? Math.min(MT, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(TT, UT) {
        const mT = this.sink();
        if (mT) {
          if (UT)
            for (let TT = 0; TT < 3; TT++) this.half[TT] = Math.abs(UT[TT]);
          am(TT, this.half) && (0, BT.qf)(mT, 0, this.key, BT.Ad.HasBox, Jm, xm, Om)
        }
      }
      setEmitRate(TT) {
        const UT = this.sink(),
          mT = tm(TT);
        UT && mT !== this.rate && (0, BT.qf)(UT, 0, this.key, 0, bm, bm, wm(mT)) && (this.rate = mT, this.emitted ||= mT > 0)
      }
      emit(TT) {
        const UT = this.sink(),
          mT = Math.min(Math.floor(TT), BT.Ad.MaxBurst);
        UT && mT > 0 && (0, BT.Ze)(UT, 0, this.key, BT.Ad.PresetNone, 0, mT, bm, bm, Om) && (this.emitted = !0)
      }
      emitPoints(TT, UT, mT) {
        const WT = this.sink(),
          zT = Math.min(Math.floor(mT), BT.Ad.MaxPoints, Math.floor(UT.length / 4));
        if (!WT || !(zT > 0) || !Number.isFinite(TT[0] + TT[1] + TT[2])) return;
        const MT = new Uint8Array(UT.buffer, UT.byteOffset, zT * BT.Ad.PointBytes);
        (0, BT.af)(WT, 0, this.key, zT, TT, MT) && (this.emitted = !0)
      }
      setDirections(TT, UT) {
        const mT = this.sink();
        if (!mT || !Number.isFinite(TT[0] + TT[1] + TT[2] + UT[0] + UT[1] + UT[2])) return;
        const WT = Ym.encode(JSON.stringify({
          dir1: [TT[0], TT[1], TT[2]],
          dir2: [UT[0], UT[1], UT[2]]
        }));
        (0, BT.qf)(mT, 0, this.key, 0, bm, bm, WT)
      }
      stop() {
        const TT = this.sink();
        this.stopped = !0, TT && (this.emitted ? (this.rate > 0 && (0, BT.qf)(TT, 0, this.key, 0, bm, bm, wm(0)), setTimeout((() => {
          this.free()
        }), this.stopDelayMs)) : this.free())
      }
      dispose() {
        this.stopped = !0, this.free()
      }
      free() {
        this.freed || (this.freed = !0, this.owner.stop(this.session, this.key))
      }
    }
    const Fm = CU.o,
      Pm = new TextDecoder;

    function Vm(TT, UT) {
      const {
        serverIds: mT,
        kinds: WT
      } = TT;
      let zT = 0;
      for (let MT = 0; MT < mT.length; MT++) {
        const TT = mT[MT];
        if (TT !== BT.Uc && !bT(WT[MT])) {
          if (zT === UT.length) {
            const TT = new Int32Array(Math.max(64, 2 * zT));
            TT.set(UT), UT = TT
          }
          UT[zT++] = TT
        }
      }
      return {
        ids: UT,
        count: zT
      }
    }

    function um(TT, UT) {
      return TT.length >= UT ? TT : new Int32Array(Math.max(UT, 2 * TT.length))
    }

    function Cm(TT, UT, mT, WT) {
      for (let zT = 0; zT < mT; zT += 4096) {
        const MT = Math.min(4096, mT - zT),
          gT = TT.memoryView(Int32Array, TT.scratch(), MT, "entity_info_batch's ids");
        if (!gT) return !1;
        gT.set(UT.subarray(zT, zT + MT));
        const nT = TT.queries.entityInfoBatch(MT),
          HT = 4294967295 === nT ? null : TT.memoryData(TT.scratch(), nT, 4, "entity_info_batch's records");
        if (!HT) return !1;
        for (let TT = 0; TT + BT.Ob.BYTES <= nT;) {
          const UT = BT.Ob.len(HT, TT);
          WT(BT.Ob.serverId(HT, TT), rm(HT, TT, UT)), TT += BT.Ob.BYTES + (0, LT.Ge)(UT)
        }
      }
      return !0
    }

    function rm(TT, UT, mT) {
      var WT, zT, MT;
      const gT = BT.Ob.kind(TT, UT),
        nT = 0 === gT ? null : OT(gT);
      if (null === nT) return null;
      const HT = BT.Ob.variation(TT, UT),
        kT = BT.Ob.pose(TT, UT),
        jT = BT.Ob.meta(TT, UT),
        lT = BT.Ob.mesh(TT, UT),
        LT = 0 !== (BT.Ob.flags(TT, UT) & BT.Nb.HasOpts),
        pT = Fm[nT];
      return Object.freeze({
        type: nT,
        variation: HT === BT.Yc ? void 0 : null !== (WT = null !== (zT = null === pT || void 0 === pT ? void 0 : pT[HT]) && void 0 !== zT ? zT : null === pT || void 0 === pT ? void 0 : pT[0]) && void 0 !== WT ? WT : "default",
        pose: kT === BT.fc ? void 0 : null !== (MT = BT.Gb[kT]) && void 0 !== MT ? MT : BT.Gb[0],
        metaInfo: jT === BT.fc ? void 0 : BT.Mc[jT],
        meshKind: lT === BT.fc ? void 0 : BT.Kc[lT],
        meshOpts: LT ? Pm.decode(new Uint8Array(TT.buffer, TT.byteOffset + UT + BT.Ob.BYTES, mT)) : void 0
      })
    }
    const Km = 1,
      Sm = 2;
    class Gm {
      constructor(TT) {
        this.deps = TT, this.wanted = 0, this.fn = !1, this.refused = !1
      }
      get on() {
        return this.fn
      }
      want(TT, UT) {
        this.wanted = UT ? this.wanted | TT : this.wanted & ~TT;
        const mT = 0 !== this.wanted;
        if (mT === this.fn) return;
        const WT = this.deps.cmd();
        null !== WT ? (0, BT.wg)(WT, 0, mT ? 1 : 0) ? (this.fn = mT, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.fn = !1
      }
    }
    class Nm {
      constructor(TT) {
        this.deps = TT, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(TT) {
        var UT;
        return this.complete || this.fill(), null !== (UT = this.entries.get("string" === typeof TT ? TT : String(TT))) && void 0 !== UT ? UT : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(TT) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const TT = new Int32Array(2 * this.pending.length);
            TT.set(this.pending), this.pending = TT
          }
          this.pending[this.pendingCount++] = TT
        }
      }
      removed(TT) {
        this.entries.size > 0 && this.entries.delete(String(TT))
      }
      refresh() {
        const TT = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (TT > 0 && this.complete) {
          const {
            api: UT
          } = this.deps;
          let mT = 0;
          const WT = this.ids = um(this.ids, TT);
          for (let zT = 0; zT < TT; zT++) {
            const TT = this.pending[zT],
              MT = UT.indexById.get(TT);
            void 0 === MT || bT(UT.kinds[MT]) ? this.entries.delete(String(TT)) : WT[mT++] = TT
          }
          mT > 0 && !this.batch(WT, mT) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(Km, !1)
      }
      fill() {
        const {
          api: TT
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: TT
          } = this.deps, UT = TT.on;
          TT.want(Km, !0), !UT && TT.on && (this.refill = this.midFrame)
        }
        const {
          ids: UT,
          count: mT
        } = Vm(TT, this.ids);
        this.ids = UT, mT > 0 && !this.batch(UT, mT) && (this.refill = !0)
      }
      batch(TT, UT) {
        return Cm(this.deps.api, TT, UT, ((TT, UT) => {
          null === UT ? this.entries.delete(String(TT)) : this.entries.set(String(TT), UT)
        }))
      }
    }
    var Em = mT(4904);

    function hm(TT) {
      if ("message" !== TT.type || TT.Xj !== Em.$b.NewClientOptions || TT.payloadKind !== LT.lc.Msgpack) return null;
      const UT = (0, sT.c)(TT.payload);
      if (null === UT || "object" !== typeof UT || Array.isArray(UT)) throw new Error("NewClientOptions whose body isn't an object of options");
      return UT
    }
    var Dm = mT(1336),
      om = mT(36716);

    function Am(TT, UT, mT, WT, zT, MT, nT) {
      var HT, kT, jT;
      switch (TT) {
        case BT.$d.ToggleMenu: {
          const TT = BT.N[UT];
          gT.j.EZ("toggleMenu", void 0 === TT ? "inventory" : `inventory|${TT}`);
          break
        }
        case BT.$d.EditBoard:
          gT.j.EZ("EditBoard", {
            pos: 0 === UT ? null : mT
          });
          break;
        case BT.$d.EditCodeBlock:
        case BT.$d.ViewCodeBlock:
          gT.j.EZ("EditCodeBlock", {
            pos: mT,
            canChangePos: TT === BT.$d.EditCodeBlock
          });
          break;
        case BT.$d.EditCustomLobbyBlock:
          gT.j.EZ("EditCustomLobbyBlock", {
            pos: mT
          });
          break;
        case BT.$d.OpenIronChest:
          gT.j.EZ("OpenIronChest", {
            pos: mT
          });
          break;
        case BT.$d.EditNameTag:
          gT.j.EZ("EditNameTag", null !== (HT = null === (kT = zT.fn()) || void 0 === kT || null === (jT = kT.attributes.customAttributes) || void 0 === jT ? void 0 : jT.text) && void 0 !== HT ? HT : "");
          break;
        case BT.$d.EditBook: {
          var lT, LT, ZT;
          const TT = null === (lT = zT.fn()) || void 0 === lT ? void 0 : lT.attributes;
          gT.j.EZ("EditBook", {
            pages: (0, Dm.N)(null === TT || void 0 === TT || null === (LT = TT.customAttributes) || void 0 === LT ? void 0 : LT.pages),
            title: null !== (ZT = null === TT || void 0 === TT ? void 0 : TT.customDisplayName) && void 0 !== ZT ? ZT : "Title",
            isPublished: !(null === TT || void 0 === TT || !TT.customDescription)
          });
          break
        }
        case BT.$d.CantChangeBlock:
          ! function(TT, UT) {
            const mT = UT.getClientOption("cantChangeError"),
              WT = UT.getClientOption(TT ? "cantBuildError" : "cantBreakError"),
              zT = TT ? mT : WT;
            (UT.getClientOption("canChange") || zT || "You cannot modify this block" !== mT) && gT.j.EZ("showBottomMessage", {
              message: WT || mT,
              type: "Error"
            })
          }(1 === UT, MT);
          break;
        case BT.$d.MiddleBarStart:
          gT.j.EZ("middleScreenBarInitiate", {
            duration: WT,
            Xz: 1 === mT[0],
            horizBarRemOffset: UT
          });
          break;
        case BT.$d.MiddleBarStop:
          gT.j.EZ("middleScreenBarRemove");
          break;
        case BT.$d.Hitmarker:
          gT.j.EZ("localGunHitmarker", {
            PU: 1 === UT
          });
          break;
        case BT.$d.ShotsLeft:
          gT.j.EZ("localPlayerNewShotsLeft", WT);
          break;
        case BT.$d.AimingOverlay:
          gT.j.EZ("aimingOverlay", 3 === (3 & UT) ? "sniper" : "none");
          break;
        case BT.$d.BottomMessage:
          gT.j.EZ("showBottomMessage", JSON.parse(nT()));
          break;
        case BT.$d.Crosshair:
          zT.inaccuracy = (0, FT.g)(WT), (0, om.d)().crosshairAccuracy(zT.inaccuracy);
          break;
        case BT.$d.ChargeStage:
          break;
        case BT.$d.EmoteWheelClose:
          gT.j.EZ("requestEmoteWheelClose");
          break;
        case BT.$d.BlockMined:
          gT.j.EZ("localBlockMined");
          break;
        default:
          throw new pT.c(`UiEvent of no kind: what ${TT}`)
      }
    }
    var Rm = mT(38136),
      TW = mT(34280),
      UW = mT(2085),
      mW = mT(36907),
      WW = mT(34291),
      zW = mT(4883);
    const MW = 10,
      gW = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      nW = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      HW = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function kW(TT, UT) {
      let mT, WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const MT = () => (mT = (0, UW.o)(mT, UT()), mT);
      return {
        current: MT,
        watch(UT) {
          const mT = () => {
              UT(MT())
            },
            gT = [TT.watch(mT)];
          return null !== WT && gT.push((0, UW.s)((TT => {
            TT.some(WT) && mT()
          }))), null !== zT && gT.push(zT(mT)), () => {
            for (const TT of gT) TT()
          }
        }
      }
    }

    function jW(TT) {
      return TT && {
        name: TT.name,
        amount: TT.amount,
        attributes: TT.attributes
      }
    }
    const lW = new WeakMap;

    function LW(TT) {
      let UT = lW.get(TT);
      return void 0 === UT && (UT = (0, WW.creativeItemIds)().map((UT => ({
        name: TT.nameOfId(UT),
        amount: TT.isStackableId(UT) ? 1 : null,
        attributes: (0, Rm.c)("Gun" === (0, WW.itemTypeOf)(UT) ? {
          type: "Gun",
          clipSize: (0, WW.clipSizeOf)(UT)
        } : void 0)
      }))), lW.set(TT, UT)), UT
    }

    function pW(TT, UT, mT, WT) {
      const zT = UT => (TT.flush(WT), UT),
        MT = mT => {
          var WT, zT, MT, gT, nT, HT, kT;
          const jT = TT.slot(mT);
          if (!jT) return null;
          const {
            rootName: lT,
            metaStr: LT
          } = UT.getMetaInfo(jT.name);
          return {
            name: jT.name,
            amount: jT.amount,
            attributes: jT.attributes,
            instance: TT.instance(mT),
            displayName: null !== (WT = jT.attributes.customDisplayName) && void 0 !== WT ? WT : UT.getDisplayName(lT),
            requiresAmmo: "RequiresAmmo" === LT,
            clipSize: null !== (zT = null !== (MT = null === (gT = jT.attributes.customAttributes) || void 0 === gT || null === (nT = gT.gunStats) || void 0 === nT ? void 0 : nT.clipSize) && void 0 !== MT ? MT : null === (HT = UT.getGunStats(lT)) || void 0 === HT ? void 0 : HT.clipSize) && void 0 !== zT ? zT : null === (kT = jT.typeObj) || void 0 === kT ? void 0 : kT.clipSize
          }
        },
        nT = function(TT, UT) {
          let mT = null,
            WT = {
              focus: null,
              recipes: [],
              detail: null
            },
            zT = -1;
          const MT = new Set;
          return {
            read() {
              var MT, gT;
              if (null === mT) return null !== WT.focus && (WT = {
                ...WT,
                focus: null
              }), WT;
              if (WT.focus === mT && zT === TT.changes) return WT;
              if (zT = TT.changes, 0 === TT.length) return WT = {
                focus: mT,
                recipes: [],
                detail: null
              }, WT;
              let nT = 0;
              if (null !== mT.recipe) try {
                nT = UT.getItemId(mT.recipe.name)
              } catch {}
              const HT = TT.craftingView(mT.station, nT, null !== (MT = null === (gT = mT.recipe) || void 0 === gT ? void 0 : gT.ej) && void 0 !== MT ? MT : 0);
              return WT = null === HT ? {
                focus: mT,
                recipes: [],
                detail: null
              } : function(TT, UT, mT) {
                let WT = BT.sb.BYTES;
                const zT = [];
                for (let jT = BT.sb.recipes(TT, 0); jT > 0; jT--) {
                  const mT = BT.kb.flags(TT, WT),
                    MT = {
                      name: UT.nameOfId(BT.kb.item(TT, WT)),
                      ej: BT.kb.recipe(TT, WT),
                      requires: [],
                      produces: BT.kb.produces(TT, WT),
                      haveIngredients: 0 !== (mT & BT.gb.HaveIngredients),
                      listed: 0 !== (mT & BT.gb.Listed)
                    };
                  let gT = BT.kb.requires(TT, WT);
                  for (WT += BT.kb.BYTES; gT > 0; gT--) {
                    const mT = BT.mb.items(TT, WT);
                    MT.requires.push({
                      items: cW(TT, WT + BT.mb.BYTES, mT, UT),
                      amt: BT.mb.amount(TT, WT)
                    }), WT += BT.mb.BYTES + 2 * mT
                  }
                  zT.push(MT)
                }
                const MT = BT.sb.flags(TT, 0);
                if (null === mT.recipe || 0 === (MT & BT.qb.Detail)) return {
                  focus: mT,
                  recipes: zT,
                  detail: null
                };
                const gT = {},
                  nT = {};
                for (let jT = BT.sb.ingredients(TT, 0); jT > 0; jT--) {
                  const mT = BT.eb.item(TT, WT),
                    zT = BT.eb.from(TT, WT),
                    MT = BT.eb.amount(TT, WT);
                  WT += BT.eb.BYTES;
                  const HT = zT === BT.K ? null : cW(TT, WT, zT, UT);
                  if (null !== HT && (WT += 2 * zT), 0 === mT) continue;
                  const kT = UT.nameOfId(mT);
                  gT[kT] = MT, null !== HT && (nT[kT] = HT)
                }
                const {
                  name: HT,
                  ej: kT
                } = mT.recipe;
                return {
                  focus: mT,
                  recipes: zT,
                  detail: {
                    name: HT,
                    ej: kT,
                    craftAllTimes: BT.sb.craftAllTimes(TT, 0),
                    roomForOne: 0 !== (MT & BT.qb.RoomForOne),
                    resultStackable: Boolean(UT.getItemStat(HT, "stackable")),
                    amounts: gT,
                    ingredientsCraftedFrom: nT
                  }
                }
              }(HT, UT, mT), WT
            },
            setFocus(TT) {
              mT = TT;
              for (const UT of [...MT]) UT()
            },
            watchFocus: TT => (MT.add(TT), () => {
              MT.delete(TT)
            })
          }
        }(TT, UT);
      return {
        states: {
          inventory: kW(TT, (() => {
            const mT = TT.length;
            if (0 === mT) return gW;
            const WT = [];
            for (let UT = 0; UT < BT.nd; UT++) WT.push(jW(TT.slot(UT)));
            const zT = TT.slotIcon,
              MT = WT[TT.selectedSlot];
            0 !== zT && MT && (WT[TT.selectedSlot] = {
              ...MT,
              icon: UT.nameOfId(zT)
            });
            const gT = !0 === UT.getClientOption("creative");
            let nT = [],
              HT = null;
            if (mT > BT.nd) {
              for (let UT = BT.nd; UT < mT; UT++) nT.push(jW(TT.slot(UT)));
              HT = {
                type: null,
                pos: [...TT.Kz],
                numSlots: mT - BT.nd,
                ironChest: null
              }
            } else gT && (nT = LW(UT));
            return {
              player: WT,
              chestOrCreative: nT,
              chest: HT,
              creative: gT,
              selectedSlot: TT.selectedSlot,
              freeSlots: TT.freeSlots()
            }
          }), (0, UW.l)("creative")),
          hotbar: kW(TT, (() => {
            if (0 === TT.length) return nW;
            const UT = [];
            for (let TT = 0; TT < MW; TT++) UT.push(MT(TT));
            return {
              items: UT,
              ammo: TT.amountOf("Ammo"),
              selectedSlot: TT.selectedSlot
            }
          }), (0, UW.k)("DisplayName", "GunStats")),
          crafting: kW(TT, nT.read, null, nT.watchFocus),
          heldItemAim: kW(TT, (() => {
            var UT;
            if (!mT()) return HW;
            const WT = null === (UT = TT.fn()) || void 0 === UT ? void 0 : UT.typeObj,
              zT = "Gun" === (null === WT || void 0 === WT ? void 0 : WT.type);
            return {
              gun: zT,
              aimable: zT || !0 === (null === WT || void 0 === WT ? void 0 : WT.showsAimingUi),
              chargeName: "Chargeable" === (null === WT || void 0 === WT ? void 0 : WT.type) ? WT.name : null
            }
          }), null, (TT => function(TT, UT) {
            let mT = TT();
            return (0, zW.C)((() => {
              const WT = TT();
              WT !== mT && (mT = WT, UT(WT))
            }))
          }(mT, TT)))
        },
        events: {
          hotbarSlotRequested: (0, UW.e)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, UW.e)("ScrollInventorySlot"),
          numberKeyPressed: (0, UW.e)("numkeyPressed"),
          inventoryDropRequested: (0, UW.e)("DropInvenItem"),
          chestToggled: (0, UW.e)("chestToggleFromServer"),
          chestRefreshed: (0, UW.e)("chestRefreshedFromServer", ZW),
          inventorySynced: (0, UW.e)("syncedInvenFromServer", ZW),
          enchantingTableOpened: (0, UW.e)("enchantingTable", (TT => {
            let {
              position: mT,
              Gg: WT
            } = TT;
            return {
              position: [...mT],
              blockName: UT.getMetaInfo(WT).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(UT) {
            TT.selectSlot(UT), TT.flush(WT)
          },
          removeInventoryItem(UT) {
            let {
              slot: mT,
              amount: WT,
              drop: MT
            } = UT;
            return zT(TT.remove(mT, WT, MT))
          },
          swapInventorySlots(UT) {
            let {
              a: mT,
              b: WT
            } = UT;
            return zT(TT.swap(mT, WT))
          },
          moveInventoryItem(UT) {
            let {
              from: mT,
              to: WT,
              amount: MT
            } = UT;
            return zT(TT.move(mT, WT, MT))
          },
          quickMoveInventoryItem(UT) {
            let {
              slot: mT,
              start: WT,
              end: MT,
              amount: gT
            } = UT;
            return zT(TT.quickMove(mT, WT, MT, gT))
          },
          closeChest() {
            TT.closeChest(), TT.flush(WT), gT.j.EZ("chestClosedByPlayer")
          },
          focusCrafting(TT) {
            nT.setFocus(TT)
          },
          craftRecipe(UT) {
            let {
              name: mT,
              ej: WT,
              times: MT
            } = UT;
            return zT(TT.craft(mT, WT, MT))
          },
          salvageItem(UT) {
            let {
              slot: mT,
              name: WT,
              amount: MT
            } = UT;
            return zT(TT.salvage(mT, WT, MT))
          },
          enchantItem(UT) {
            let {
              slot: mT,
              level: WT,
              tablePos: zT
            } = UT;
            TT.enchant(mT, WT, zT)
          }
        },
        queries: {
          enchantingOffer(mT) {
            let {
              slot: WT,
              blockName: zT
            } = mT;
            return function(TT, UT, mT, WT) {
              const zT = TT.slot(mT);
              if (!zT || !UT.getClientOption("canCraft") || !(0, TW.q)(WT) || (0, TW.p)(zT.attributes)) return BW;
              const MT = (0, WW.enchantmentPerksOf)(UT.getItemId(zT.name));
              if (0 === MT.length) return BW;
              const gT = [];
              for (let nT = 0; nT < mW.b; nT++) {
                const {
                  commonProb: TT,
                  uncommonProb: UT,
                  rareProb: mT,
                  epicProb: zT,
                  legendaryProb: MT,
                  level: HT
                } = (0, TW.i)(WT, nT);
                gT.push({
                  level: HT,
                  odds: [TT, UT, mT, zT, MT].map((TT => 100 * TT))
                })
              }
              return {
                perks: [...MT],
                options: gT
              }
            }(TT, UT, WT, zT)
          }
        }
      }
    }
    const BW = Object.freeze({
      perks: [],
      options: []
    });

    function ZW() {
      return null
    }

    function cW(TT, UT, mT, WT) {
      const zT = [];
      for (let MT = 0; MT < mT; MT++) {
        const mT = TT.getUint16(UT + 2 * MT, !0);
        0 !== mT && zT.push(WT.nameOfId(mT))
      }
      return zT
    }
    class vW {
      constructor(TT) {
        this.api = TT, this.positions = new Map, this.targeted = {
          oR: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          NZ: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(TT) {
        let UT = this.positions.get(TT);
        return UT || (this.api.checkValid(TT) || this.api.isLocal(TT) ? (UT = [NaN, NaN, NaN], this.api.readPosition(TT, UT), this.positions.set(TT, UT), UT) : null)
      }
      xTT() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [UT, mT] of this.positions) this.api.readPosition(UT, mT) || this.api.checkValid(UT) || this.api.isLocal(UT) || this.positions.delete(UT);
        const TT = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (BT.x.playerFlags(TT, 0) & BT.Cd.Breaking) && BT.x.breakingProgress(TT, 0) >= 0, this.isBreaking)
          for (let UT = 0; UT < 3; UT++) this.breaking[UT] = BT.x.breakingPos(TT, 0, UT)
      }
      refreshTarget() {
        const TT = this.api.apiView,
          UT = BT.x.targetBlockId(TT, 0);
        if (this.hasTarget = UT !== BT.Wc, this.hasTarget) {
          const mT = this.targeted;
          mT.oR = UT;
          for (let UT = 0; UT < 3; UT++) mT.position[UT] = BT.x.targetBlock(TT, 0, UT), mT.normal[UT] = BT.x.targetNormal(TT, 0, UT), mT.NZ[UT] = BT.x.targetAdjacent(TT, 0, UT)
        }
      }
      despawned(TT) {
        const UT = this.positions.get(TT);
        UT && !this.api.isLocal(TT) && (UT.fill(NaN), this.positions.delete(TT))
      }
    }
    var fW = mT(40771),
      qW = mT(40752),
      iW = mT(36451),
      bW = mT(36904);
    const OW = 1,
      eW = 2;
    class YW {
      constructor() {
        this.game = new bW.e, this.client = new bW.e, this.fn = 0, this.movesFly = null
      }
      setGame(TT) {
        if (null === TT || "object" !== typeof TT) return !1;
        const {
          key: UT,
          value: mT
        } = TT;
        return "string" === typeof UT && (this.game.setBooleanType(UT, Boolean(mT)), !0)
      }
      setClient(TT, UT) {
        this.client.setBooleanType(TT, UT)
      }
      clearGame() {
        this.game = new bW.e, this.movesFly = null
      }
      setMovesFly(TT) {
        this.movesFly = TT
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? OW : 0) | (this.client._getTotalBooleanVal() ? eW : 0)
      }
      write(TT) {
        const UT = this.perms(),
          {
            movesFly: mT
          } = this;
        if (UT === this.fn && null === mT) return !0;
        let WT = BT.Pb.Keep;
        return null !== mT && (WT = mT ? BT.Pb.On : BT.Pb.Off), !(!TT || !(0, BT.pe)(TT, 0, WT, UT, mT ? 1 : 0)) && (this.fn = UT, this.movesFly = null, !0)
      }
    }
    class JW {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = TT, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: nT.d,
          get y() {
            return UT()
          }
        }
      }
      get hasView() {
        const TT = this.api.apiView,
          UT = BT.x.viewProj;
        return 0 !== UT(TT, 0, 3) || 0 !== UT(TT, 0, 7) || 0 !== UT(TT, 0, 11) || 0 !== UT(TT, 0, 15)
      }
      get cameraPosition() {
        const TT = this.api.apiView,
          {
            eye: UT
          } = this;
        for (let mT = 0; mT < 3; mT++) UT[mT] = BT.x.eye(TT, 0, mT);
        return UT
      }
      get cameraDirection() {
        const TT = this.api.apiView,
          UT = BT.x.viewProj,
          mT = UT(TT, 0, 3),
          WT = UT(TT, 0, 7),
          zT = UT(TT, 0, 11),
          MT = Math.hypot(mT, WT, zT),
          {
            forward: gT
          } = this;
        return MT > 0 && (gT[0] = mT / MT, gT[1] = WT / MT, gT[2] = zT / MT), gT
      }
      get cameraHeading() {
        return BT.x.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return BT.x.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return BT.x.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return BT.x.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(TT) {
        this.clip(TT);
        const {
          clipX: UT,
          clipY: mT,
          clipW: WT
        } = this;
        if (WT > 0) {
          const TT = UT / WT * 50,
            zT = -mT / WT * 50;
          return Math.abs(TT) <= this.screenBandPct.x && Math.abs(zT) <= this.screenBandPct.y ? {
            x: 50 + TT,
            y: 50 + zT
          } : this.clampToBand(TT, zT)
        }
        const zT = this.cameraPosition,
          MT = Math.hypot(TT[0] - zT[0], TT[1] - zT[1], TT[2] - zT[2]),
          gT = this.api.apiView,
          nT = BT.x.viewProj,
          HT = MT > 0 ? UT / MT : 0,
          kT = MT > 0 ? -mT / MT : 0,
          jT = Math.hypot(nT(gT, 0, 1), nT(gT, 0, 5), nT(gT, 0, 9)),
          lT = HT / Math.hypot(nT(gT, 0, 0), nT(gT, 0, 4), nT(gT, 0, 8)),
          LT = kT / jT,
          pT = !(Math.abs(lT) >= .001 || Math.abs(LT) >= .001);
        return this.clampToBand(HT, pT ? -(jT || 1) : kT)
      }
      projectDirectionToScreenPos(TT) {
        if (!this.hasView) return;
        const UT = this.cameraPosition,
          mT = this.along;
        for (let WT = 0; WT < 3; WT++) mT[WT] = UT[WT] + 10 * TT[WT];
        return this.projectWorldPosToScreenPos(mT)
      }
      projectWorldPosToViewport(TT) {
        this.clip(TT);
        const {
          clipX: UT,
          clipY: mT,
          clipW: WT
        } = this;
        return WT > 0 ? {
          x: 50 + UT / WT * 50,
          y: 50 - mT / WT * 50
        } : null
      }
      clip(TT) {
        const UT = this.api.apiView,
          mT = TT[0] - BT.x.origin(UT, 0, 0),
          WT = TT[1] - BT.x.origin(UT, 0, 1),
          zT = TT[2] - BT.x.origin(UT, 0, 2),
          MT = BT.x.viewProj;
        this.clipX = MT(UT, 0, 0) * mT + MT(UT, 0, 4) * WT + MT(UT, 0, 8) * zT + MT(UT, 0, 12), this.clipY = MT(UT, 0, 1) * mT + MT(UT, 0, 5) * WT + MT(UT, 0, 9) * zT + MT(UT, 0, 13), this.clipW = MT(UT, 0, 3) * mT + MT(UT, 0, 7) * WT + MT(UT, 0, 11) * zT + MT(UT, 0, 15)
      }
      clampToBand(TT, UT) {
        return (0, nT.g)(TT, UT, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var xW = mT(4912);
    const dW = new TextEncoder,
      wW = new Uint8Array(BT.V * BT.R);
    class tW {
      constructor() {
        this.buttons = [], this.fn = !0
      }
      set(TT) {
        this.buttons = TT, this.fn = !1
      }
      attached() {
        this.fn = 0 === this.buttons.length
      }
      write(TT) {
        if (this.fn) return;
        const UT = new Uint8Array(BT.V),
          mT = new Uint8Array(BT.V);
        let WT = 0,
          zT = 0;
        for (const {
            id: MT,
            keycode: gT
          }
          of this.buttons) {
          if (WT === BT.V) break;
          const {
            read: TT,
            written: nT
          } = dW.encodeInto(MT, wW.subarray(zT, zT + BT.R));
          if (TT < MT.length) continue;
          const HT = xW.g[gT];
          UT[WT] = "number" === typeof HT ? HT : 0, mT[WT] = nT, WT++, zT += nT
        }
        this.fn = (0, BT.ie)(TT, 0, WT, UT, mT, wW.subarray(0, zT))
      }
    }

    function aW(TT, UT, mT) {
      const WT = dW.encode(UT);
      return WT.length <= BT.R && function(TT, UT, mT, WT) {
        return (0, SU.d)(), (0, BT.uf)(TT, UT, mT, WT)
      }(TT, 0, mT ? 1 : 0, WT)
    }
    const yW = new TextDecoder,
      XW = new TextEncoder,
      IW = new Uint8Array(0),
      QW = [0, 0, 0],
      sW = {
        off: BT.Dd.Off,
        key: BT.Dd.Key,
        touch: BT.Dd.Touch
      };
    class FW {
      constructor(TT) {
        var UT;
        this.options = TT, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new tW, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new YW, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.Gp = TT => {
          if ((0, pT.h)(TT)) throw TT;
          this.onError(TT)
        }, this.api = TT.api, this.tables = TT.tables, this.onError = null !== (UT = TT.onError) && void 0 !== UT ? UT : TT => {
          console.error("Error in client game callback", TT)
        }, this.renderFrame = new JW(this.api, TT.screenBandY), this.live = new vW(this.api), this.chunks = new nU(this.api.memory, (() => this.api.apiView)), this.items = new fm({
          api: this.api,
          tables: TT.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: TT.beforeOp
        });
        const mT = () => this.stopped() ? null : this.cmd,
          WT = () => this.sessionLive;
        this.entityInfoWatch = new Gm({
          cmd: mT,
          onError: this.onError
        }), this.entityInfo = new Nm({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: WT
        }), this.particles = new Qm({
          cmd: mT,
          isSessionLive: WT,
          onError: this.onError
        }), this.clientApi = new Hm({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: TT.tables,
          cmd: mT,
          sendCmd: () => this.sendCmd(),
          isSessionLive: WT,
          beforeWrite: () => {
            var UT;
            if (this.stopped()) return !1;
            const mT = this.generation;
            return !1 !== (null === (UT = TT.beforeWrite) || void 0 === UT ? void 0 : UT.call(TT)) && mT === this.generation
          },
          playerDbId: () => {
            const TT = this.session;
            if (null === TT) throw new Error("No game session has started, so the local player has no DB id");
            return TT.playerDbId
          },
          playSound: TT.playSound,
          preloadSounds: TT.preloadSounds,
          setLocalOptions: TT.setLocalOptions,
          hasPackModel: TT.hasPackModel
        }), this.scriptedCamera = new NT({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: TT.cameraScreen,
          showFacing: TT.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= pW(this.items, this.tables, (() => this.localPlayerAlive()), this.Gp), this.itemSources
      }
      get isSessionLive() {
        return this.sessionLive
      }
      get isCoreRunning() {
        return this.sessionLive && !this.stopped()
      }
      localPlayerAlive() {
        return !this.sessionLive || this.stopped() || !1 !== this.api.isAlive(this.boundId)
      }
      localDeaths() {
        return this.isCoreRunning ? this.api.localDeaths() : null
      }
      clickCodeBlock(TT) {
        const UT = this.sessionLive ? this.sendCmd() : null;
        return null !== UT && (mT = UT, WT = 0, zT = TT[0], MT = TT[1], gT = TT[2], (0, SU.d)(), (0, BT.ne)(mT, WT, zT, MT, gT));
        var mT, WT, zT, MT, gT
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(TT) {
        const UT = this.liveCmd();
        return null === UT ? (this.pendingZoom = TT, !1) : (this.pendingZoom = null, (0, BT.ng)(UT, 0, TT, 1))
      }
      MI(TT) {
        const UT = this.stopped() ? null : this.cmd;
        return null !== UT && (0, BT.hg)(UT, 0, TT ? 1 : 0)
      }
      respawn() {
        const TT = this.sessionLive ? this.sendCmd() : null;
        return null !== TT && (UT = TT, mT = 0, (0, SU.d)(), (0, BT.Mf)(UT, mT));
        var UT, mT
      }
      bindCustomButtonKeys(TT) {
        this.customButtons.set(TT)
      }
      pressCustomButton(TT, UT) {
        const mT = this.sessionLive ? this.sendCmd() : null;
        return null !== mT && aW(mT, TT, UT)
      }
      padMove(TT, UT, mT, WT, zT, MT) {
        const gT = this.liveCmd();
        return null !== gT && (0, BT.Ve)(gT, 0, TT, UT, mT, WT, zT, MT)
      }
      thirdPersonFor(TT) {
        const UT = this.liveCmd();
        return null !== UT && (0, BT.ug)(UT, 0, null !== TT && void 0 !== TT ? TT : 1 / 0)
      }
      send(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== WT && GU(WT, mT ? LT.xd : 0, TT, (0, sT.g)(UT))
      }
      socketAttached(TT) {
        this.openSocket = TT, this.socketLeftSinceAttach = !1
      }
      socketDetached(TT) {
        this.openSocket === TT && (this.openSocket = 0)
      }
      socketLeft() {
        this.openSocket = 0, this.socketLeftSinceAttach = !0
      }
      sendCmd() {
        return this.socketLeftSinceAttach || this.stopped() ? null : this.cmd
      }
      liveCmd() {
        return this.isCoreRunning ? this.cmd : null
      }
      attach(TT) {
        const UT = () => TT.isStopped;
        this.stopped = UT, this.cmd = TT.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const mT = this.api.apiView;
        this.overflowGen = BT.x.eventOverflowGen(mT, 0), this.resyncOwed = 0 !== BT.x.eventOverflowMask(mT, 0), TT.setGameHost(this), TT.setEventWalker((TT => {
          this.api.walk(TT, this, UT)
        }))
      }
      watchPromptPick(TT) {
        this.promptWatch = TT, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : PW(BT.x.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? BT.pc.None : BT.x.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : BT.x.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === TT || TT >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, TT, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(TT) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(TT)
      }
      netEvent(TT) {
        "connection" === TT.type ? TT.phase === LT.O.Activated && TT.conn !== this.activeConn && TT.conn > this.closedThrough ? (this.endSession(), this.activeConn = TT.conn, this.endGameGrants(), this.dropGameCamera()) : TT.phase !== LT.O.Left && TT.phase !== LT.O.Closed || TT.conn !== this.activeConn ? TT.phase === LT.O.Resumed && 0 !== this.activeConn && TT.conn > this.closedThrough && (this.activeConn = TT.conn) : this.closeGame() : TT.conn === this.activeConn && 0 !== TT.conn && (TT.Xj === qW.u ? this.gunHit(TT.payload) : TT.Xj === Em.$b.EditItemCraftingRecipes || TT.Xj === qW.X ? this.items.touch() : (this.serverOptions(TT), this.gameMessage(TT)));
        const UT = this.options.onNetEvent;
        UT && this.guard((() => {
          UT(TT)
        }))
      }
      serverOptions(TT) {
        const UT = this.options.serverOptions,
          mT = UT ? this.decoded(hm, TT) : null;
        UT && mT && this.guard((() => {
          UT.applyNewClientOptions(mT)
        }))
      }
      gameMessage(TT) {
        let UT = null;
        try {
          UT = function(TT) {
            if ("message" !== TT.type || TT.Xj !== Em.$b.GameCodeMessage || TT.payloadKind !== LT.lc.Msgpack) return null;
            const UT = (0, sT.c)(TT.payload);
            if (null === UT || "object" !== typeof UT || "string" !== typeof UT.messageType) throw new Error("GameCodeMessage without a messageType");
            return UT
          }(TT)
        } catch (mT) {
          this.sessionLive && this.onError(mT)
        }
        if (UT) {
          const {
            messageType: TT,
            data: mT
          } = UT;
          if ((0, wT.i)(TT)) return void this.guard((() => {
            (0, wT.e)(TT, mT)
          }));
          "freeCamPerms" === TT && this.freeCam.setGame(mT) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (UT => {
            UT.onReceivedMessageFromServer(TT, mT)
          }))
        }
      }
      decoded(TT, UT) {
        try {
          return TT(UT)
        } catch (mT) {
          return this.onError(mT), null
        }
      }
      setClientFreeCameraGrant(TT, UT) {
        this.freeCam.setClient(TT, UT), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(TT) {
        this.freeCam.setMovesFly(TT), this.writeFreeCam()
      }
      setBlockHighlight(TT) {
        this.highlight = TT, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const TT = this.liveCmd();
        if (null === TT || !this.highlightOwed) return;
        const UT = this.highlight;
        this.highlightOwed = null === UT ? !(0, BT.De)(TT, 0, QW, QW, 0) : !(0, BT.De)(TT, 0, UT.pos, UT.normal, 1)
      }
      localPlayerBound(TT) {
        var UT, mT;
        if (0 === this.activeConn || this.sessionLive && TT === this.boundId) return;
        const WT = this.sessionLive;
        let zT, MT, gT, nT;
        this.endSession(), WT && this.restartGameCamera();
        try {
          var HT;
          this.session = null;
          const TT = this.options.sessionInfo(this.activeConn);
          if (this.session = TT, !TT) return;
          zT = TT.gameNameWithVariation, MT = null !== (HT = (0, xT._b)(zT)) && void 0 !== HT ? HT : void 0, gT = (0, dT.w)(TT.lobbyName), nT = (0, dT.S)(TT.lobbyName)
        } catch (fT) {
          return void this.onError(fT)
        }
        const kT = {
          localPlayerId: String(TT)
        };
        let jT = {},
          lT = {};
        try {
          var LT, pT;
          jT = null !== (LT = null === (pT = this.options.gameFactory((0, xT.dc)(zT))) || void 0 === pT ? void 0 : pT(nT, gT, MT, kT)) && void 0 !== LT ? LT : {}
        } catch (fT) {
          this.Gp(fT)
        }
        try {
          var BT, ZT;
          lT = {
            ...null === (BT = (ZT = this.options).defaultPlugins) || void 0 === BT ? void 0 : BT.call(ZT, nT, gT, MT, kT),
            ...jT.plugins
          }
        } catch (fT) {
          this.Gp(fT)
        }
        const cT = [jT, ...Object.values(lT)];
        this.owners = cT, this.tickers = cT.filter((TT => void 0 !== TT.Cl)), this.renderers = cT.filter((TT => void 0 !== TT.onAfterRender)), this.receivers = cT.filter((TT => void 0 !== TT.onReceivedMessageFromServer)), this.writeAltVeto(cT), this.writeHooks(cT), this.writePublicLobby(nT), this.writeLocalDbId(null !== (UT = null === (mT = this.session) || void 0 === mT ? void 0 : mT.playerDbId) && void 0 !== UT ? UT : null), this.boundId = TT, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(cT, (TT => {
          var UT;
          null === (UT = TT.onCreate) || void 0 === UT || UT.call(TT, this.clientApi)
        }));
        const vT = this.generation;
        setTimeout((() => {
          vT === this.generation && !0 === this.tables.getClientOption("creative") && LW(this.tables)
        }), 0)
      }
      chunkSlot(TT, UT, mT, WT, zT, MT) {
        this.chunks.apply(TT, UT, mT, WT, zT, MT)
      }
      entityAdded(TT) {
        var UT;
        this.entityInfo.stale(TT), null === (UT = this.options.replayEntities) || void 0 === UT || UT.entityAdded(TT)
      }
      entityInfoChanged(TT) {
        var UT;
        this.entityInfo.stale(TT), null === (UT = this.options.replayEntities) || void 0 === UT || UT.entityInfoChanged(TT)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const TT = performance.now();
          this.round(this.tickers, VW), (0, zW.c)(performance.now() - TT)
        }
      }
      afterWalk(TT) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const UT = this.options.replayEntities;
        UT && this.guard((() => {
          this.entityInfoWatch.want(Sm, UT.wantsWatch), UT.flush(this.entityInfoWatch.on)
        }));
        const mT = this.api.apiView,
          WT = BT.x.frameMs(mT, 0);
        iW.k.frame(WT, BT.x.heading(mT, 0), BT.x.pitch(mT, 0), iW.f[TT]);
        const zT = (0, zW.n)(TT, WT);
        if (null !== zT) {
          const TT = this.renderFrame;
          this.guard((() => {
            (0, om.d)().turnDamageIndicators(TT.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(zT)
          })), this.round(this.renderers, (UT => {
            UT.onAfterRender(zT, TT)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== zT)
        } catch (gT) {
          this.Gp(gT)
        }
        this.showZoom(), this.items.flush(this.Gp), this.writePromptWatch(), this.writeCustomButtons();
        const MT = this.ticks;
        this.ticks = 0, (0, zW.k)(MT, TT, zT, this.Gp)
      }
      entityRemoved(TT) {
        this.live.despawned(TT), this.entityInfo.removed(TT)
      }
      ackEventOverflow() {
        const TT = this.api.apiView,
          UT = BT.x.eventOverflowGen(TT, 0),
          mT = UT - this.overflowGen >>> 0;
        if (0 === mT && !this.resyncOwed) return;
        this.overflowGen = UT;
        const WT = BT.x.eventOverflowMask(TT, 0),
          zT = this.cmd;
        0 === WT || null === zT || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, BT.oe)(zT, 0, WT);
        const MT = this.options.onEventOverflow;
        0 !== mT && MT && this.guard((() => {
          MT(WT, mT)
        }))
      }
      gameCall(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        if (TT === BT.ec.Director) try {
          return this.scriptedCamera.call(UT, mT, WT, zT, MT, gT)
        } catch (kT) {
          return this.Gp(kT), BT.ub.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return TT === BT.ec.AltVeto ? BT.l.Allow : 0;
        try {
          return this.callGames(TT, UT, mT, WT, zT, MT, gT, nT)
        } catch (kT) {
          throw (0, pT.h)(kT) && (this.fault = kT), kT
        }
      }
      takeFault() {
        const TT = this.fault;
        return this.fault = void 0, TT
      }
      callGames(TT, UT, mT, WT, zT, MT, gT, nT) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: HT
        } = this.options, kT = String(this.boundId);
        switch (TT) {
          case BT.ec.AltVeto:
          case BT.ec.AltAction: {
            const nT = 0 !== gT,
              [jT, lT, LT] = nT ? [UT, mT, WT] : [void 0, void 0, void 0],
              pT = nT ? HT.nameOfId(zT) : "Air",
              ZT = PW(MT);
            if (TT === BT.ec.AltAction) return this.first((TT => {
              var UT;
              return null === (UT = TT.onPlayerAltAction) || void 0 === UT ? void 0 : UT.call(TT, kT, jT, lT, LT, pT, ZT)
            })), 0;
            const cT = this.first((TT => {
              var UT;
              return null === (UT = TT.onPlayerAttemptAltAction) || void 0 === UT ? void 0 : UT.call(TT, kT, jT, lT, LT, pT, ZT)
            }));
            return "preventAction" === cT ? BT.l.Prevent : "preventPlacement" === cT ? BT.l.PreventPlacement : BT.l.Allow
          }
          case BT.ec.Click: {
            const TT = nT,
              jT = 0 !== (TT & BT.$.Alt),
              lT = 0 !== (TT & BT.$.HasPos),
              LT = lT ? HT.nameOfId(zT) : "Air",
              [pT, ZT, cT] = lT ? [UT, mT, WT] : [null, null, null],
              vT = PW(MT),
              fT = 0 !== (TT & BT.$.Up),
              qT = PW(gT);
            if (0 === (TT & BT.$.AttackOnly) && this.first((TT => {
                var UT, mT;
                return fT ? null === (UT = TT.onPlayerClickUp) || void 0 === UT ? void 0 : UT.call(TT, kT, jT, pT, ZT, cT, LT, vT) : null === (mT = TT.onPlayerClick) || void 0 === mT ? void 0 : mT.call(TT, kT, jT, pT, ZT, cT, LT, vT)
              })), !fT && !jT && null !== qT) {
              const TT = this.clientApi.getPositionView(qT),
                UT = TT ? [TT[0], TT[1], TT[2]] : [0, 0, 0];
              this.first((TT => {
                var mT;
                return null === (mT = TT.onPlayerAttackEntity) || void 0 === mT ? void 0 : mT.call(TT, kT, qT, UT)
              }))
            }
            return 0
          }
          case BT.ec.ChangeBlock: {
            const TT = HT.nameOfId(zT),
              gT = HT.nameOfId(MT);
            return this.first((zT => {
              var MT;
              return null === (MT = zT.onPlayerChangeBlock) || void 0 === MT ? void 0 : MT.call(zT, kT, UT, mT, WT, TT, gT)
            })), 0
          }
          case BT.ec.DropItem: {
            const TT = HT.nameOfId(UT);
            return this.first((UT => {
              var zT;
              return null === (zT = UT.onPlayerDropItem) || void 0 === zT ? void 0 : zT.call(UT, kT, TT, mT, WT)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${TT}`)), 0
        }
      }
      changeBlockFail(TT, UT, mT, WT, zT, MT, gT) {
        const nT = zT === BT.Qc ? null : yW.decode(this.api.eventBytes(MT, Math.min(zT, gT)));
        this.failures.push({
          fT: [TT, UT, mT],
          qT: WT,
          iT: nT
        })
      }
      changeBlockFailEnd() {
        const TT = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (UT => {
          var mT;
          null === (mT = UT.onChangeBlockFail) || void 0 === mT || mT.call(UT, TT)
        })), this.EZ("EditBoard", {
          pos: null
        }), this.EZ("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(TT, UT, mT, WT, zT, MT) {
        TT === BT.uc.ChestOpened ? this.items.chestOpened(mT, WT, zT) : TT !== BT.uc.Synced && TT !== BT.uc.ChestClosed && TT !== BT.uc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(TT, UT, mT, WT) {
            switch (TT) {
              case BT.uc.Synced:
                gT.j.EZ("syncedInvenFromServer");
                break;
              case BT.uc.ChestOpened:
              case BT.uc.ChestClosed:
                gT.j.EZ("chestToggleFromServer", TT === BT.uc.ChestOpened, !0);
                break;
              case BT.uc.ChestRefreshed:
                gT.j.EZ("chestRefreshedFromServer");
                break;
              case BT.uc.EnchantingTable:
                gT.j.EZ("enchantingTable", {
                  Gg: WT,
                  position: mT
                });
                break;
              case BT.uc.HotbarRequest:
                gT.j.EZ("setSelectedInventorySlotI", UT, !0);
                break;
              case BT.uc.Scrolled:
                gT.j.EZ("ScrollInventorySlot", UT);
                break;
              case BT.uc.NumberKey:
                gT.j.EZ("numkeyPressed", UT + 1);
                break;
              case BT.uc.DropRequested:
                gT.j.EZ("DropInvenItem", 0 !== UT);
                break;
              default:
                throw new pT.c(`InventoryEvent of no kind: what ${TT}`)
            }
          }(TT, UT, [mT, WT, zT], MT)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(TT, UT, mT, WT) {
        this.EZ("shotPlayer", {
          playerId: String(TT),
          damage: UT,
          wasCrit: 0 !== WT,
          distance: mT
        })
      }
      localHurt(TT, UT) {
        this.EZ("closeShopOnDamaged", null), this.guard((() => {
          gT.j.EZ("damagedByOtherPlayer", {
            Bm: null,
            direction: Number.isNaN(UT) ? null : UT,
            tT: TT
          })
        }))
      }
      attackHit(TT, UT, mT, WT, zT) {
        this.guard((() => {
          gT.j.EZ("yourAttackHit", {
            PU: WT,
            screenPos: this.renderFrame.projectDirectionToScreenPos([TT, UT, mT]),
            hitSelf: zT
          })
        }))
      }
      physicsType(TT) {
        this.EZ("PlayerPhysicsTypeUpdate", TT)
      }
      vehicleEffect(TT, UT, mT, WT, zT) {
        this.guard((() => {
          TT === LT.Rd.UPDATE ? (0, aT.i)(UT, {
            icon: mT,
            level: WT,
            displayName: null,
            durationMs: zT
          }) : tT.b.remove(UT)
        }))
      }
      zoomChanged(TT) {
        this.zoom = TT, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.EZ("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const TT = this.scriptedCamera.holdsView();
        !this.zoomUnshown || TT && this.zoomHeld || (this.zoomUnshown = !1, this.EZ("cameraZoomSet", this.zoom)), this.zoomHeld = TT
      }
      gunHit(TT) {
        this.guard((() => {
          const {
            Bm: UT,
            Zm: mT
          } = (0, fW.c)(qW.u, TT);
          gT.j.EZ("damagedByOtherPlayer", {
            Bm: UT,
            direction: mT
          })
        }))
      }
      uiEvent(TT, UT, mT, WT, zT, MT, gT, nT) {
        this.guard((() => {
          Am(TT, UT, [mT, WT, zT], MT, this.items, this.options.tables, (() => yW.decode(this.api.eventBytes(gT, nT))))
        }))
      }
      writeAltVeto(TT) {
        const UT = this.cmd;
        if (!UT) return;
        let mT;
        try {
          mT = function(TT, UT) {
            const mT = new Set;
            let WT = !1;
            for (const zT of TT)
              if (zT.onPlayerAttemptAltAction) {
                if (WT = !0, !zT.altVetoBlocks) return {
                  mode: BT.ce.All,
                  roots: []
                };
                for (const TT of zT.altVetoBlocks) mT.add(UT.getMetaInfo(TT).rootId)
              } return WT ? mT.size > BT.Hc ? {
              mode: BT.ce.All,
              roots: []
            } : {
              mode: BT.ce.Filter,
              roots: [...mT]
            } : {
              mode: BT.ce.Off,
              roots: []
            }
          }(TT, this.options.tables)
        } catch (zT) {
          this.onError(zT), mT = {
            mode: BT.ce.All,
            roots: []
          }
        }
        if (mT.mode === BT.ce.Off && !this.vetoSet) return;
        const WT = new Uint8Array(new Uint32Array(mT.roots).buffer);
        (0, BT.Qf)(UT, 0, mT.mode, mT.roots.length, WT) ? this.vetoSet = mT.mode !== BT.ce.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(TT) {
        const UT = this.cmd;
        if (!UT) return;
        const mT = function(TT) {
          let UT = 0;
          for (const mT of TT) mT.onPlayerAltAction && (UT |= 1 << BT.ec.AltAction), (mT.onPlayerClick || mT.onPlayerClickUp || mT.onPlayerAttackEntity) && (UT |= 1 << BT.ec.Click), mT.onPlayerChangeBlock && (UT |= 1 << BT.ec.ChangeBlock), mT.onPlayerDropItem && (UT |= 1 << BT.ec.DropItem);
          return UT
        }(TT);
        (0 !== mT || this.hooksSet) && ((0, BT.cg)(UT, 0, mT) ? this.hooksSet = 0 !== mT : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const TT = this.cmd;
        TT && !this.stopped() && this.customButtons.write(TT)
      }
      writePromptWatch() {
        const TT = this.cmd,
          UT = this.promptWatch;
        UT !== this.promptWatchSent && TT && !this.stopped() && (0, BT.xg)(TT, 0, sW[UT]) && (this.promptWatchSent = UT)
      }
      writePublicLobby(TT) {
        const UT = this.cmd;
        UT && TT !== this.writtenPublicLobby && ((0, BT.jg)(UT, 0, TT ? 1 : 0) ? this.writtenPublicLobby = TT : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(TT) {
        const UT = this.cmd;
        UT && ((0, BT.dg)(UT, 0, null === TT ? 0 : 1, null === TT ? IW : XW.encode(TT)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(TT) {
        const UT = this.generation;
        for (const WT of this.owners) {
          if (UT !== this.generation) break;
          try {
            const UT = TT(WT);
            if (void 0 !== UT) return UT
          } catch (mT) {
            this.Gp(mT)
          }
        }
      }
      EZ(TT, UT) {
        this.guard((() => {
          gT.j.EZ(TT, UT)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (TT) {
          this.Gp(TT)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (TT) {
          this.Gp(TT)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const TT = this.owners;
        let UT;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (WT) {
          UT = WT
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (WT) {
          UT ??= WT
        }
        this.round(TT, uW, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (WT) {
          UT ??= WT
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (WT) {
          UT ??= WT
        }
        const mT = this.options.onSessionEnd;
        if (mT) try {
          mT()
        } catch (WT) {
          this.onError(WT)
        }
        void 0 !== UT && this.Gp(UT)
      }
      round(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = this.generation;
        for (const MT of TT) {
          if (WT !== this.generation) break;
          try {
            UT(MT)
          } catch (zT) {
            mT ? this.onError(zT) : this.Gp(zT)
          }
        }
      }
      guard(TT) {
        try {
          TT()
        } catch (UT) {
          this.Gp(UT)
        }
      }
    }

    function PW(TT) {
      return TT === BT.Rc ? null : String(TT)
    }

    function VW(TT) {
      TT.Cl(LT.Id)
    }

    function uW(TT) {
      var UT;
      null === (UT = TT.onClose) || void 0 === UT || UT.call(TT)
    }

    function CW(TT, UT) {
      TT.watch((() => {
        const mT = function(TT) {
          const UT = [],
            mT = Math.min(MW, TT.length);
          for (let zT = 0; zT < mT; zT++) {
            var WT;
            const mT = null === (WT = TT.slot(zT)) || void 0 === WT ? void 0 : WT.typeObj,
              MT = mT ? (0, WW.gunTypeOf)(mT.id) : void 0;
            void 0 !== MT && UT.push(qU[MT])
          }
          return UT
        }(TT);
        mT.length > 0 && (UT.preload(mT), UT.preload([iU]))
      }))
    }
    var rW = mT(36513),
      KW = mT(4959),
      SW = mT(36855),
      GW = mT(36889);

    function NW(TT) {
      const UT = (0, rW.countDecodesAs)(new KW.Howl({
          ...(0, SW.h)(TT),
          pool: 15,
          preload: !1
        }), "sheet"),
        mT = UT.load.bind(UT);
      return UT.load = () => (UT._preload = !0, (0, GW.d)(TT), mT()), UT
    }

    function EW(TT, UT, mT) {
      const WT = TT.listener;
      if (WT.positionX) hW(WT.positionX, UT, mT, 0), hW(WT.positionY, UT, mT, 1), hW(WT.positionZ, UT, mT, 2), hW(WT.forwardX, UT, mT, 3), hW(WT.forwardY, UT, mT, 4), hW(WT.forwardZ, UT, mT, 5), hW(WT.upX, UT, mT, 6), hW(WT.upY, UT, mT, 7), hW(WT.upZ, UT, mT, 8);
      else {
        let TT = !1;
        for (let WT = 0; WT < 9; WT++) TT ||= UT[WT] !== mT[WT];
        TT && (WT.setPosition(UT[0], UT[1], UT[2]), WT.setOrientation(UT[3], UT[4], UT[5], UT[6], UT[7], UT[8]), mT.set(UT))
      }
    }

    function hW(TT, UT, mT, WT) {
      UT[WT] !== mT[WT] && (TT.value = UT[WT], mT[WT] = UT[WT])
    }
    class DW {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(TT) {
        this.pose.set(TT);
        const UT = KW.Howler.ctx;
        return !!UT && (UT !== this.watchedCtx && (this.watchedCtx = UT, this.written.fill(Number.NaN), UT.addEventListener("statechange", (() => {
          "running" === UT.state && EW(UT, this.pose, this.written)
        }))), "running" === UT.state && EW(UT, TT, this.written), !0)
      }
    }
    var oW = mT(36658),
      AW = mT(39334);
    let RW = null,
      Tz = null;

    function Uz() {
      return null === RW && (RW = document.createElement("div"), RW.className = "WasmCameraLayer", RW.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(RW)), RW
    }

    function mz() {
      return Tz ??= new AW.e(new oW.e(Uz)), Tz
    }

    function Wz() {
      var TT;
      null === (TT = Tz) || void 0 === TT || TT.clear(), zz(null)
    }

    function zz(TT) {
      WT.b.get("scriptedCameraFacing") !== TT && WT.b.set({
        scriptedCameraFacing: TT
      })
    }
    var Mz = mT(9411),
      gz = mT(9369),
      nz = mT(39366),
      Hz = mT(41169),
      kz = mT(3411);
    const jz = Object.entries(BT.bc).reduce(((TT, UT) => {
      let [mT, WT] = UT;
      return TT[WT] = mT, TT
    }), []);

    function lz(TT, UT) {
      var mT;
      return 0 !== ((null !== (mT = TT.itemFlags[UT]) && void 0 !== mT ? mT : 0) & BT.vc.Stackable)
    }
    const Lz = /^(0|[1-9][0-9]*)$/,
      pz = {
        displayName: (TT, UT) => (0, WW.displayNameOf)(UT),
        description: (TT, UT) => (0, WW.descriptionOf)(UT),
        type: (TT, UT) => (0, WW.itemTypeOf)(UT),
        clipSize: (TT, UT) => (0, WW.clipSizeOf)(UT),
        armourReduction: (TT, UT) => (0, WW.armourReductionOf)(UT),
        scopeType: (TT, UT) => (0, WW.scopeTypeOf)(UT),
        stackable: lz,
        harvestType: (TT, UT) => jz[TT.blockHarvestTypes[UT]],
        harvestLevel: (TT, UT) => {
          const mT = TT.blockHarvestLevels[UT];
          return mT === BT.Bc ? void 0 : mT
        },
        harvests: (TT, UT) => {
          var mT;
          const WT = null !== (mT = TT.itemHarvests[UT]) && void 0 !== mT ? mT : 0;
          return 0 !== WT ? jz[WT] : void 0 === (0, WW.harvestsNullLevelOf)(UT) ? void 0 : null
        },
        level: (TT, UT) => {
          var mT, WT;
          const zT = null !== (mT = TT.itemLevels[UT]) && void 0 !== mT ? mT : BT.Bc;
          return zT !== BT.Bc ? zT : null !== (WT = (0, WW.harvestsNullLevelOf)(UT)) && void 0 !== WT ? WT : void 0
        }
      };

    function Bz(TT, UT, mT) {
      return cz(new Uint8Array(Math.floor(TT.length / UT)), TT, UT, mT)
    }

    function Zz(TT, UT, mT) {
      return cz(new Uint16Array(Math.floor(TT.length / UT)), TT, UT, mT)
    }

    function cz(TT, UT, mT, WT) {
      const zT = new DataView(UT.buffer, UT.byteOffset, UT.byteLength);
      for (let MT = 0; MT < TT.length; MT++) TT[MT] = WT(zT, MT * mT);
      return TT
    }
    class vz {
      constructor(TT, UT) {
        this.options = UT, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = TT => {
          const UT = this.idOf(TT);
          if (void 0 === UT) throw new Error(`No item is named ${TT}, an item's root`);
          return UT
        };
        const mT = UT => {
            const mT = UT();
            return new Uint8Array(TT.memory().buffer, TT.scratch(), mT).slice()
          },
          WT = (new TextDecoder).decode(mT((() => TT.queries.itemNames()))).split("\n"),
          zT = mT((() => TT.queries.blockProps())),
          MT = mT((() => TT.queries.itemProps()));
        this.props = {
          blockFlags: Bz(zT, BT.E.BYTES, BT.E.flags),
          blockHarvestTypes: Bz(zT, BT.E.BYTES, BT.E.harvestType),
          blockHarvestLevels: Bz(zT, BT.E.BYTES, BT.E.harvestLevel),
          blockAttachedTops: Zz(zT, BT.E.BYTES, BT.E.attachedTop),
          itemFlags: Bz(MT, BT.yc.BYTES, BT.yc.flags),
          itemHarvests: Bz(MT, BT.yc.BYTES, BT.yc.harvests),
          itemLevels: Bz(MT, BT.yc.BYTES, BT.yc.level)
        }, (0, kz.k)(Object.freeze(WT)), (0, Hz.f)()
      }
      idOf(TT) {
        if ("number" === typeof TT) return void 0 === (0, kz.f)(TT) ? void 0 : TT;
        const UT = (0, kz.c)(TT);
        return void 0 === UT && Lz.test(TT) ? void 0 === (0, kz.f)(+TT) ? void 0 : +TT : UT
      }
      getMetaInfo(TT) {
        if (!TT || TT === Mz.e) return Mz.i;
        const UT = this.idOf(TT);
        if (void 0 === UT) throw new Error(`Item ${TT} not found in registry`);
        return this.metaOf(UT)
      }
      blockRootId(TT) {
        return 0 !== TT && void 0 !== (0, kz.f)(TT) ? this.metaOf(TT).rootId : TT
      }
      metaOf(TT) {
        return this.metas[TT] ??= (0, gz.o)((0, kz.f)(TT), TT, this.rootIdOf, (0, WW.rootMetaDescOf)(TT))
      }
      getItemId(TT) {
        if (!TT || TT === Mz.e) return 0;
        const UT = this.idOf(TT);
        if (void 0 === UT) throw new Error(`Invalid block name. You sent ${TT}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return UT
      }
      getItemName(TT) {
        if (!TT || TT === Mz.e) return Mz.e;
        const UT = this.idOf(TT);
        if (void 0 === UT) throw new Error(`Item ${TT} not found in registry`);
        return (0, kz.f)(UT)
      }
      blockNameToBlockId(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (TT === Mz.e) return 0;
        let mT = this.idOf(TT);
        if (void 0 === mT || !this.isBlockId(mT)) {
          const UT = TT.indexOf("|"),
            WT = UT > 0 ? (0, kz.c)(TT.slice(0, UT)) : void 0;
          mT = void 0 !== WT && this.isBlockId(WT) && (0, WW.rootMetaDescOf)(WT) === TT ? WT : void 0
        }
        if (void 0 !== mT) return mT;
        if (!UT) throw new Error(`Invalid block name. You sent ${TT}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(TT) {
        return TT > 0 && TT < this.props.blockFlags.length
      }
      nameOfId(TT) {
        return 0 !== TT && (0, kz.f)(TT) || Mz.e
      }
      itemType(TT) {
        const UT = TT ? this.idOf(TT) : void 0;
        if (!UT) return null;
        let mT = this.types.get(UT);
        return void 0 === mT && (mT = Object.freeze({
          id: UT,
          name: (0, kz.f)(UT),
          meta: this.getMetaInfo(UT),
          stackable: lz(this.props, UT),
          type: (0, WW.itemTypeNameOf)(UT),
          clipSize: (0, WW.clipSizeOf)(UT),
          scopeType: (0, WW.scopeTypeOf)(UT),
          showsAimingUi: (0, WW.showsAimingUi)(UT)
        }), this.types.set(UT, mT)), mT
      }
      getItemStat(TT, UT) {
        if (nz.c.has(UT)) {
          const mT = "minChargeStateToUse" === UT ? this.getMetaInfo(TT).rootName : this.getItemName(TT),
            WT = this.options.get((0, nz.e)(mT, UT));
          if (null !== WT && void 0 !== WT) return WT
        }
        return this.defaultStat(TT, UT, this.statOf(UT))
      }
      getDisplayName(TT) {
        return this.getItemStat(TT, "displayName")
      }
      getDefaultItemStat(TT, UT) {
        return this.defaultStat(TT, UT, this.statOf(UT))
      }
      statOf(TT) {
        const UT = pz[TT];
        return void 0 === UT && function(TT, UT) {
          throw new Error(`ClientApi.${TT} is not available yet in the wasm client (${UT})`)
        }(`getItemStat("${TT}")`, `a table of the stat: the wasm client answers ${Object.keys(pz).join(", ")}`), UT
      }
      defaultStat(TT, UT, mT) {
        const WT = this.idOf(TT),
          zT = void 0 === WT ? void 0 : mT(this.props, WT);
        return null !== zT && void 0 !== zT || "displayName" !== UT ? zT : this.getItemName(TT)
      }
      getClientOption(TT) {
        return this.options.get(TT)
      }
      getGunStats(TT) {
        return this.getClientOption(`${TT}GunStats`)
      }
      watchClientOption(TT, UT) {
        return this.options.subscribe(TT, UT)
      }
      isSolidBlockId(TT) {
        var UT;
        return 0 !== ((null !== (UT = this.props.blockFlags[TT]) && void 0 !== UT ? UT : 0) & BT.C.Solid)
      }
      isStackableId(TT) {
        return lz(this.props, TT)
      }
      isFluidBlockId(TT) {
        var UT;
        return 0 !== ((null !== (UT = this.props.blockFlags[TT]) && void 0 !== UT ? UT : 0) & BT.C.Fluid)
      }
      canPlaceOverBlockId(TT) {
        var UT;
        return 0 !== ((null !== (UT = this.props.blockFlags[TT]) && void 0 !== UT ? UT : 0) & BT.C.PlaceOver)
      }
      attachedTopOf(TT) {
        var UT;
        return null !== (UT = this.props.blockAttachedTops[TT]) && void 0 !== UT ? UT : 0
      }
      isDroplessBlockId(TT) {
        return (0, WW.dropsNothing)(TT)
      }
    }

    function fz(TT, UT) {
      const mT = new Map;
      return (WT, zT) => {
        const MT = UT.idOf(WT),
          gT = void 0 === MT ? null : (WT => {
            let zT = mT.get(WT);
            if (void 0 === zT) {
              const MT = TT.queries.salvageRecipe(WT),
                gT = new DataView(TT.memory().buffer, TT.scratch(), MT),
                nT = [];
              for (let TT = 0; TT + BT.Rd.BYTES <= MT; TT += BT.Rd.BYTES) nT.push(Object.freeze({
                item: UT.nameOfId(BT.Rd.item(gT, TT)),
                amt: BT.Rd.amount(gT, TT)
              }));
              zT = 0 === nT.length ? null : Object.freeze(nT), mT.set(WT, zT)
            }
            return zT
          })(MT);
        if (null === gT || void 0 === zT) return gT;
        const nT = zT <= 0 ? 1 : zT;
        return gT.map((TT => {
          let {
            item: UT,
            amt: mT
          } = TT;
          return {
            item: UT,
            amt: mT * nT
          }
        }))
      }
    }
    var qz = mT(40907),
      iz = mT(37050),
      bz = mT(37038),
      Oz = mT(37042),
      ez = mT(36579),
      Yz = mT(40820),
      Jz = mT(42746);
    const xz = -1,
      dz = new Uint8Array(0),
      wz = new TextEncoder;

    function tz(TT) {
      if (null === TT) return null;
      const UT = wz.encode(TT);
      return UT.byteLength < LT.Jc ? UT : UT.subarray(0, LT.Jc - 1)
    }
    class az {
      constructor(TT) {
        this.deps = TT, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = xz, this.keyframesSettled = !1, this.reloadFrom = xz
      }
      reloadKeyframes() {
        var TT, UT;
        this.keyframesVersion = xz, this.reloadFrom = null !== (TT = null === (UT = this.view()) || void 0 === UT ? void 0 : UT.version) && void 0 !== TT ? TT : xz
      }
      setPlayback(TT) {
        const UT = 1 === this.deps.core.GzT(TT);
        return UT && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = xz, this.reloadFrom = xz), UT
      }
      async open(TT, UT) {
        const mT = await this.deps.replay.open(TT, UT);
        return "opening" === mT && (this.reloadKeyframes(), this.deps.recorder.prefetch()), mT
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(TT)), UT)
      }
      setSpeed(TT) {
        this.deps.replay.setSpeed(TT)
      }
      setCameraMode(TT) {
        this.deps.replay.setCameraMode(Jz.c.indexOf(TT))
      }
      view() {
        var TT;
        const UT = BT.x.replayViewPtr(this.deps.apiView(), 0);
        if (0 === UT) return this.lastView = null, null;
        const mT = new DataView(this.deps.buffer(), UT, BT.Ld.BYTES),
          WT = BT.Ld.version(mT, 0),
          zT = this.lastView;
        if (null !== zT && zT.version === WT) return zT;
        const MT = BT.Ld.markIn(mT, 0),
          gT = {
            version: WT,
            state: BT.Ld.state(mT, 0),
            cameraMode: null !== (TT = Jz.c[BT.Ld.cameraMode(mT, 0)]) && void 0 !== TT ? TT : "recording",
            Cl: BT.Ld.Cl(mT, 0),
            totalTicks: BT.Ld.totalTicks(mT, 0),
            speed: BT.Ld.speed(mT, 0),
            mark: MT === BT.Hd ? null : {
              inTick: MT,
              outTick: BT.Ld.markOut(mT, 0)
            },
            editVersion: BT.Ld.editVersion(mT, 0)
          };
        return this.lastView = gT, gT
      }
      keyframes() {
        const TT = this.view();
        if (null === TT) return [];
        TT.version !== this.reloadFrom && (this.reloadFrom = xz);
        const UT = this.reloadFrom === xz && TT.state !== LT.qd.Cropping && TT.state !== LT.qd.None,
          mT = UT ? TT.editVersion : TT.version;
        if (mT === this.keyframesVersion && UT === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: WT
        } = this.deps, zT = WT.NzT(), MT = WT.tc(), gT = [];
        if (0 !== MT && zT > 0) {
          const TT = new DataView(this.deps.buffer(), MT, zT * LT.Ac);
          for (let UT = 0; UT < zT; UT++) {
            const mT = UT * LT.Ac,
              WT = UT => TT.getFloat64(mT + UT, !0);
            gT.push({
              Cl: TT.getUint32(mT + LT.Ic, !0),
              position: [WT(LT.Hc), WT(LT.Hc + 8), WT(LT.Hc + 16)],
              direction: [WT(LT.Dc), WT(LT.Dc + 8), WT(LT.Dc + 16)],
              easing: [WT(LT.Fc), WT(LT.Fc + 8), WT(LT.Fc + 16), WT(LT.Fc + 24)]
            })
          }
        }
        return this.keyframesVersion = mT, this.keyframesSettled = UT, this.lastKeyframes = gT, gT
      }
      addKeyframe() {
        const TT = this.deps.apiView(),
          UT = [BT.x.eye(TT, 0, 0), BT.x.eye(TT, 0, 1), BT.x.eye(TT, 0, 2)];
        return this.deps.replay.addKeyframe(UT, function(TT, UT) {
          const mT = Math.cos(UT);
          return [mT * Math.sin(TT), -Math.sin(UT), mT * Math.cos(TT)]
        }(BT.x.heading(TT, 0), BT.x.pitch(TT, 0)))
      }
      setKeyframe(TT) {
        return this.deps.replay.setKeyframe(TT.Cl, Float64Array.from([...TT.position, ...TT.direction, ...TT.easing]))
      }
      moveKeyframe(TT, UT) {
        return this.deps.replay.moveKeyframe(TT, UT)
      }
      deleteKeyframes(TT, UT) {
        return this.deps.replay.deleteKeyframes(TT, UT)
      }
      setMark(TT) {
        var UT, mT;
        return this.deps.replay.setMark(null !== (UT = null === TT || void 0 === TT ? void 0 : TT.inTick) && void 0 !== UT ? UT : -1, null !== (mT = null === TT || void 0 === TT ? void 0 : TT.outTick) && void 0 !== mT ? mT : -1)
      }
      crop(TT, UT) {
        const mT = this.deps.replay.crop(TT, UT);
        return mT && this.reloadKeyframes(), mT
      }
      save(TT) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(TT)
      }
      recorderControl(TT) {
        this.deps.recorder.control(TT)
      }
      recorderPrefs(TT, UT) {
        this.deps.recorder.prefs(TT, UT)
      }
      recorderOption(TT, UT) {
        const mT = this.deps.cmd();
        return null !== mT && (0, BT.Gf)(mT, 0, TT, null === UT ? dz : wz.encode(UT))
      }
      recordFlyingText(TT, UT, mT, WT) {
        const zT = this.deps.cmd(),
          MT = Math.max(0, Math.min(4294967295, Math.round(WT)));
        return null !== zT && (0, BT.yf)(zT, 0, UT, mT, MT, wz.encode(TT))
      }
      recordPlayerKilled(TT, UT, mT, WT) {
        const zT = this.deps.cmd();
        return null !== zT && (0, BT.Jf)(zT, 0, TT, UT, Math.max(0, mT), wz.encode(WT))
      }
      recordKillfeed(TT, UT, mT) {
        var WT, zT;
        const MT = this.deps.cmd(),
          gT = function(TT) {
            const UT = TT.reduce(((TT, UT) => {
                var mT;
                return TT + Em.qb + (null !== (mT = null === UT || void 0 === UT ? void 0 : UT.byteLength) && void 0 !== mT ? mT : 0)
              }), 0),
              mT = new Uint8Array(UT),
              WT = new DataView(mT.buffer);
            let zT = 0;
            for (const gT of TT) {
              var MT;
              WT.setUint16(zT, null !== (MT = null === gT || void 0 === gT ? void 0 : gT.byteLength) && void 0 !== MT ? MT : LT.Jc, !0), zT += Em.qb, null !== gT && (mT.set(gT, zT), zT += gT.byteLength)
            }
            return mT
          }([tz(TT.name), tz(TT.colour), tz(UT.name), tz(UT.colour), tz(mT)]);
        return null !== MT && (0, BT.Cf)(MT, 0, null !== (WT = TT.id) && void 0 !== WT ? WT : BT.Uc, null !== (zT = UT.id) && void 0 !== zT ? zT : BT.Uc, gT)
      }
      recorderSession(TT, UT) {
        this.deps.recorder.session({
          session: UT,
          lobbyType: TT.lobbyType,
          game: TT.gameNameWithVariation,
          lobby: TT.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.EzT()
      }
      filePartDone(TT, UT) {
        this.deps.recorder.filePartDone(TT, UT)
      }
      fileDone(TT) {
        this.deps.recorder.fileDone(TT)
      }
    }
    const yz = -2147483648;
    class Xz {
      constructor(TT) {
        var UT;
        this.deps = TT, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (UT = TT.now) && void 0 !== UT ? UT : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var TT, UT, mT;
        return null === (TT = null === (UT = (mT = this.deps).live) || void 0 === UT ? void 0 : UT.call(mT)) || void 0 === TT || TT
      }
      activated(TT) {
        var UT, mT;
        this.live && (this.viewerShown(!0 === (null === (UT = (mT = this.deps).viewerOpen) || void 0 === UT ? void 0 : UT.call(mT))), this.deps.client.recorderSession(TT, (0, Jz.e)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var TT, UT;
        this.live && (this.state.recording || !0 !== (null === (TT = (UT = this.deps).viewerOpen) || void 0 === TT ? void 0 : TT.call(UT))) ? this.deps.client.recorderControl(LT.Zc.ToggleRecording) : this.deps.notify(Oz.c.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(LT.Zc.SaveClip) : this.deps.notify(Oz.c.clippingNotOn)
      }
      viewerShown(TT) {
        this.live && this.deps.client.recorderControl(TT ? LT.Zc.ViewerOpened : LT.Zc.ViewerClosed)
      }
      setPrefs(TT, UT) {
        this.live && this.deps.client.recorderPrefs(TT, UT)
      }
      setOption(TT, UT) {
        this.live && this.deps.client.recorderOption(TT, UT)
      }
      recordFlyingText(TT, UT, mT, WT) {
        this.live && this.deps.client.recordFlyingText(TT, UT, mT, WT)
      }
      recordPlayerKilled(TT, UT, mT, WT) {
        this.live && this.deps.client.recordPlayerKilled(TT, UT, mT, WT)
      }
      recordKillfeed(TT, UT, mT) {
        this.live && this.deps.client.recordKillfeed(TT, UT, mT)
      }
      Cl() {
        let TT = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, TT = {
            ...TT,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const UT = Math.floor((this.now() - this.recordingSince) / 1e3);
          UT !== TT.seconds && (TT = {
            ...TT,
            seconds: UT
          })
        }
        this.set(TT)
      }
      onEvent(TT) {
        var UT, mT;
        const {
          notify: WT
        } = this.deps, zT = Oz.c;
        switch (TT.what) {
          case LT.Xc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), WT(zT.recordingStarted);
            break;
          case LT.Xc.RecordingStopped:
            this.stopRecording(), WT(zT.recordingStopped), this.saveState(LT.hd.Recording, "saving");
            break;
          case LT.Xc.RecordingDiscarded:
            this.stopRecording(), WT(zT.recordingDiscarded);
            break;
          case LT.Xc.RecordingTurnedOff:
            this.stopRecording(), WT(zT.recordingTurnedOff);
            break;
          case LT.Xc.LimitReached:
            WT(zT.limitReached);
            break;
          case LT.Xc.ClipSaved:
            this.saveState(LT.hd.Clip, "saving");
            break;
          case LT.Xc.ClipEmpty:
            WT(zT.clipEmpty);
            break;
          case LT.Xc.ClippingNotOn:
            WT(zT.clippingNotOn);
            break;
          case LT.Xc.Disallowed:
            WT(zT.disallowed);
            break;
          case LT.Xc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case LT.Xc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case LT.Xc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case LT.Xc.SaveBusy:
            null === (UT = (mT = this.deps).onSaveState) || void 0 === UT || UT.call(mT, TT.kind, "busy"), WT(zT.saveBusy);
            break;
          case LT.Xc.CloseViewerFirst:
            WT(zT.closeViewerFirst)
        }
      }
      fileReady(TT, UT) {
        this.deps.download(UT), this.saveState(TT, "done"), this.deps.notify(TT === LT.hd.Clip ? Oz.c.clipSaved : Oz.c.recordingSaved)
      }
      failed(TT) {
        this.saveState(TT, "failed"), this.deps.notify(TT === LT.hd.Clip ? Oz.c.clipFailed : Oz.c.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(TT, UT) {
        var mT, WT;
        null === (mT = (WT = this.deps).onSaveState) || void 0 === mT || mT.call(WT, TT, UT)
      }
      set(TT) {
        TT !== this.state && (this.state = TT, this.deps.onState(TT))
      }
    }
    const Iz = new TextDecoder;

    function Qz(TT, UT, mT, WT) {
      const zT = [];
      for (let MT = 0; MT < WT; MT++) {
        if (UT + Em.qb > mT) return null;
        const WT = TT.getUint16(UT, !0);
        if (UT += Em.qb, WT !== LT.Jc) {
          if (UT + WT > mT) return null;
          zT.push(Iz.decode(new Uint8Array(TT.buffer, TT.byteOffset + UT, WT))), UT += WT
        } else zT.push(null)
      }
      return UT === mT ? zT : null
    }

    function sz(TT, UT) {
      let mT = new DataView(new ArrayBuffer(0)),
        WT = !0;
      const zT = {
        replayFailed: (UT, mT, WT) => {
          TT.replayFailed({
            reason: UT,
            code: mT,
            version: WT
          })
        },
        replayOption: (UT, zT, MT, gT) => {
          const nT = function(TT, UT, mT, WT) {
            switch (UT) {
              case LT.jd.Cleared:
                return 0 === WT ? null : void 0;
              case LT.jd.Text:
                return Iz.decode(new Uint8Array(TT.buffer, TT.byteOffset + mT, WT));
              case LT.jd.Int:
                return WT === Int32Array.BYTES_PER_ELEMENT ? TT.getInt32(mT, !0) : void 0;
              case LT.jd.Double:
                return WT === Float64Array.BYTES_PER_ELEMENT ? TT.getFloat64(mT, !0) : void 0;
              default:
                return
            }
          }(mT, zT, MT, gT);
          void 0 !== nT ? TT.replayOption({
            key: UT,
            value: nT
          }) : WT = !1
        },
        replayUiEvent: (UT, zT, MT, gT, nT, HT) => {
          const kT = function(TT, UT, mT, WT, zT, MT, gT) {
            const nT = MT + gT;
            switch (UT) {
              case LT.md.FlyingText: {
                const gT = Qz(TT, MT, nT, 1);
                return null !== gT && null !== gT[0] ? {
                  what: UT,
                  XM: mT,
                  yM: WT,
                  angle: zT,
                  contentJson: gT[0]
                } : null
              }
              case LT.md.PlayerKilled: {
                const WT = Qz(TT, MT, nT, 3);
                return WT ? {
                  what: UT,
                  killstreak: mT,
                  dead: WT[0],
                  killer: WT[1],
                  withItem: WT[2]
                } : null
              }
              case LT.md.Killfeed: {
                const mT = Qz(TT, MT, nT, 7);
                return mT ? {
                  what: UT,
                  killerId: mT[0],
                  killerName: mT[1],
                  killerColour: mT[2],
                  victimId: mT[3],
                  victimName: mT[4],
                  victimColour: mT[5],
                  withItem: mT[6]
                } : null
              }
              default:
                return null
            }
          }(mT, UT, zT, MT, gT, nT, HT);
          null !== kT ? TT.replayUiEvent(kT) : WT = !1
        },
        replayFilePart: (mT, zT, MT, gT) => {
          const nT = UT();
          MT + gT > nT.byteLength ? WT = !1 : TT.filePart(mT, zT, new Uint8Array(nT, MT, gT).slice())
        },
        replayFileReady: (UT, mT, WT, zT) => {
          TT.fileReady({
            save: UT,
            kind: mT,
            parts: WT,
            bytes: zT
          })
        },
        recorderEvent: (UT, mT, WT) => {
          TT.recorderEvent({
            what: UT,
            kind: mT,
            save: WT
          })
        },
        replayOpened: (UT, WT, zT) => {
          TT.replayOpened(Iz.decode(new Uint8Array(mT.buffer, mT.byteOffset + WT, zT)))
        }
      };
      return (TT, UT, MT, gT) => !(TT < LT.hb.ReplayFailed || TT > LT.hb.RecorderEvent) && (mT = UT, WT = !0, (0, BT.he)(TT, UT, MT, gT, zT) && WT)
    }

    function Fz(TT) {
      let UT = null;
      const mT = sz(TT, (() => {
        if (null === UT) throw new Error("a recorder event read outside recorderEventReader's call");
        return UT.buffer
      }));
      return (TT, WT) => {
        UT = WT;
        try {
          ! function(TT, UT) {
            const mT = TT.slice(),
              WT = new DataView(mT.buffer);
            for (let zT = 0; zT < mT.byteLength;) {
              if (zT + LT.gb > mT.byteLength) throw new Error(`the recorder module's events end mid-head at ${zT}`);
              const TT = WT.getUint32(zT, !0),
                MT = 65535 & TT,
                gT = TT >>> 16,
                nT = zT + LT.gb;
              if (nT + gT > mT.byteLength || !UT(MT, WT, nT, gT)) throw new Error(`the recorder module wrote a malformed event ${MT} (${gT} bytes) at ${zT}`);
              zT = nT + (0, LT.Ge)(gT)
            }
          }(TT, mT)
        } finally {
          UT = null
        }
      }
    }
    class Pz {
      constructor(TT, UT) {
        this.acks = TT, this.handlers = UT, this.parts = new Map
      }
      onPart(TT, UT, mT) {
        let WT = this.parts.get(TT);
        WT || (WT = [], this.parts.set(TT, WT)), WT[UT] = mT, this.acks.filePartDone(TT, UT)
      }
      onReady(TT) {
        var UT;
        const mT = null !== (UT = this.parts.get(TT.save)) && void 0 !== UT ? UT : [];
        this.parts.delete(TT.save);
        const WT = function(TT, UT, mT) {
          if (TT.length !== UT) return null;
          let WT = 0;
          for (let gT = 0; gT < UT; gT++) {
            if (void 0 === TT[gT]) return null;
            WT += TT[gT].byteLength
          }
          if (WT !== mT) return null;
          if (1 === UT) return TT[0];
          const zT = new Uint8Array(mT);
          let MT = 0;
          for (const gT of TT) zT.set(gT, MT), MT += gT.byteLength;
          return zT
        }(mT, TT.parts, TT.bytes);
        this.acks.fileDone(TT.save), null === WT ? this.handlers.fileIncomplete(TT.save, TT.kind) : this.handlers.fileReady(TT.save, TT.kind, WT)
      }
      onDiscarded(TT) {
        this.parts.delete(TT)
      }
    }

    function Vz() {
      return mT.e(61).then((() => mT(60490)))
    }
    class uz {
      constructor(TT) {
        this.deps = TT, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: UT
        } = TT;
        this.recorder = new Xz({
          client: UT,
          live: () => {
            var TT;
            return !0 !== (null === (TT = this.viewer) || void 0 === TT ? void 0 : TT.inPlayback)
          },
          viewerOpen: TT.viewerOpen,
          notify: TT.notify,
          download: UT => {
            var mT;
            null === (mT = TT.download) || void 0 === mT || mT.call(TT, UT)
          },
          onState: TT.onRecorderState,
          onSaveState: TT.onSaveState
        }), this.parts = new Pz(UT, {
          fileReady: (TT, UT, mT) => {
            var WT;
            UT === LT.hd.Edited ? null === (WT = this.viewer) || void 0 === WT || WT.saveDone(mT) : this.recorder.fileReady(UT, mT)
          },
          fileIncomplete: (TT, UT) => {
            this.saveFailed(UT)
          }
        });
        const mT = {
          replayFailed: TT => {
            var UT;
            null === (UT = this.viewer) || void 0 === UT || UT.onFailed(TT)
          },
          replayOption: UT => {
            var mT;
            null === (mT = TT.onReplayOption) || void 0 === mT || mT.call(TT, UT)
          },
          replayUiEvent: UT => {
            var mT;
            null === (mT = TT.onReplayUiEvent) || void 0 === mT || mT.call(TT, UT)
          },
          filePart: (TT, UT, mT) => {
            this.parts.onPart(TT, UT, mT)
          },
          fileReady: TT => {
            this.parts.onReady(TT)
          },
          replayOpened: UT => {
            var mT;
            null === (mT = TT.onReplayOpened) || void 0 === mT || mT.call(TT, UT)
          },
          recorderEvent: TT => {
            var UT;
            switch (TT.what) {
              case LT.Xc.FileDiscarded:
                this.parts.onDiscarded(TT.save);
                break;
              case LT.Xc.SaveFailed:
                this.saveFailed(TT.kind);
                break;
              case LT.Xc.SaveBusy:
                if (null !== (UT = this.viewer) && void 0 !== UT && UT.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(TT);
                break;
              default:
                this.recorder.onEvent(TT)
            }
          }
        };
        this.sink = function(TT, UT) {
          return {
            onReplayEvent: sz(TT, UT)
          }
        }(mT, TT.buffer), this.recorderEvents = Fz(mT)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var TT;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (TT = this.deps.loadViewer) && void 0 !== TT ? TT : Vz)().catch((TT => {
          throw this.viewerChunk = null, TT
        })), this.viewerChunk.then((TT => (this.viewer ??= new TT.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var TT, UT;
            null === (TT = (UT = this.deps).onViewerChange) || void 0 === TT || TT.call(UT)
          }
        }), this.viewer))))
      }
      activated(TT) {
        this.recorder.activated(TT)
      }
      afterFrame(TT) {
        try {
          TT > 0 && this.recorder.Cl()
        } finally {
          var UT;
          null === (UT = this.viewer) || void 0 === UT || UT.afterFrame()
        }
      }
      end() {
        var TT;
        null === (TT = this.viewer) || void 0 === TT || TT.end()
      }
      saveFailed(TT) {
        var UT;
        TT === LT.hd.Edited ? null === (UT = this.viewer) || void 0 === UT || UT.saveFailed(!1) : this.recorder.failed(TT)
      }
    }
    var Cz = mT(40756),
      rz = mT(40780),
      Kz = mT(4906),
      Sz = mT(41053);
    class Gz {
      constructor(TT) {
        this.deps = TT, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(TT, UT) {
        if (!this.deps.live() || 0 === TT && 0 === UT) return;
        const mT = (0, FT.r)(0, performance.now()),
          WT = this.deps.dragScale();
        (0, Sz.g)((() => {
          (0, FT.v)(LT.Gb.MouseDown, 0, 0, 0, mT), (0, FT.v)(LT.Gb.MouseMove, 0, TT * WT, UT * WT, 0), (0, FT.v)(LT.Gb.MouseUp, 0, 0, 0, mT)
        }))
      }
      move(TT) {
        var UT, mT;
        this.analogue[0] = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.x) && void 0 !== UT ? UT : 0, this.analogue[1] = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.y) && void 0 !== mT ? mT : 0, this.send()
      }
      holdVertical(TT, UT) {
        const mT = "freeCamUp" === TT ? BT.Tb.Up : BT.Tb.Down;
        this.keys = UT ? this.keys | mT : this.keys & ~mT, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const TT = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== TT && !(0, BT.re)(TT, 0, this.analogue, this.keys)
      }
    }
    var Nz = mT(3672),
      Ez = mT(775),
      hz = mT(291),
      Dz = mT(102),
      oz = mT(34204),
      Az = mT(754),
      Rz = mT(36680);

    function TM() {
      const TT = WT.b.get("clientEscMenuOptions"),
        UT = (0, Ez.k)(TT);
      return {
        mouse: (0, Dz.isMobile)() ? UT : TT.mouseSensitivity,
        touch: UT,
        fovPercent: TT.cameraFOV
      }
    }

    function UM() {
      const TT = WT.b.get("clientEscMenuOptions"),
        UT = WT.b.get("isTouchScreen") ? (0, Ez.k)(TT) : TT.mouseSensitivity,
        mT = TM().mouse;
      return mT > 0 ? UT / mT : 1
    }

    function mM(TT) {
      const UT = () => {
        TT.setSoundPrefs(WT.b.get("soundVolume"), WT.b.get("soundOnFromAd"))
      };
      let mT = null;
      const zT = () => {
        const {
          showFog: UT,
          enableLighting: zT,
          fogChunkDistance: MT,
          chunkFadeIn: gT
        } = WT.b.get("clientEscMenuOptions"), nT = {
          showFog: UT,
          lighting: zT,
          fogChunks: MT,
          chunkFade: gT,
          cellLight: (0, Nz.n)("cellLight") ? (0, Nz.n)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        mT && (0, LT.qe)(mT) === (0, LT.qe)(nT) && mT.fogChunks === MT || (mT = nT, TT.setEnvPrefs(mT))
      };
      let MT = null;
      const nT = () => {
        const UT = function() {
          const TT = WT.b.get("clientEscMenuOptions");
          return {
            nametagsHidden: WT.b.get("areNametagsHidden"),
            crouchToggle: TT.crouchIsToggle,
            bhopDisabled: TT.disableBunnyHopping,
            disableBobbing: TT.disableBobbing,
            ezTowering: TT.ezTowering ? (0, hz.f)() : null,
            ezBridging: TT.ezBridging,
            showChunkBorders: TT.showChunkBorders,
            touchWalk: !(0, Rz.g)(),
            edgeGuard: TT.touchEdgeGuard,
            edgeGuardLong: (0, Az.b)(),
            nametagCutDistance: (0, oz.f)()
          }
        }();
        (0, xT.ye)(MT, UT) || (MT = UT, TT.setUiPrefs(UT))
      };
      let HT = null;
      const kT = () => {
        const UT = TM();
        (0, xT.ye)(HT, UT) || (HT = UT, TT.setLookPrefs(UT))
      };
      UT(), zT(), nT(), kT();
      const jT = [(0, gT.k)("appManagerUpdated|soundVolume", UT), (0, gT.k)("appManagerUpdated|soundOnFromAd", UT), (0, gT.k)("appManagerUpdated|clientEscMenuOptions", (() => {
        zT(), nT(), kT()
      })), (0, gT.k)(Rz.d, nT), (0, gT.k)("appManagerUpdated|enabledDebugFeatures", zT), (0, gT.k)("appManagerUpdated|areNametagsHidden", nT), (0, gT.k)("appManagerUpdated|showDistantNametags", nT)];
      return () => {
        for (const TT of jT) TT()
      }
    }
    var WM = mT(41034),
      zM = mT(41036);
    var MM = (0, zM.c)("lend"),
      gM = (0, zM.c)("starting"),
      nM = (0, zM.c)("generation"),
      HM = (0, zM.c)("end");
    class kM {
      constructor(TT) {
        this.deps = TT, Object.defineProperty(this, HM, {
          value: jM
        }), Object.defineProperty(this, MM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gM, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, nM, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, WM.c)(this, MM)[MM] || (0, WM.c)(this, gM)[gM]
      }
      async start(TT) {
        if (this.active) return "busy";
        const UT = (0, WM.c)(this, nM)[nM];
        (0, WM.c)(this, gM)[gM] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, WM.c)(this, gM)[gM] = !1
        }
        if (UT !== (0, WM.c)(this, nM)[nM]) return "refused";
        const mT = this.deps.beginSave();
        if (!mT) return "refused";
        const WT = Number(BigInt.asUintN(32, TT)),
          zT = Number(BigInt.asUintN(32, TT >> 32n));
        let MT = "refused";
        return this.deps.recorderCall(((TT, UT) => {
          const gT = mT.editState,
            nT = TT.stage(gT.length);
          0 !== nT ? (new Uint8Array(UT.buffer, nT, gT.length).set(gT), TT.hzT(mT.headLen, WT, zT) && (MT = "sealing")) : MT = "tooLarge"
        }), !0), "sealing" !== MT ? (mT.end(), MT) : ((0, WM.c)(this, MM)[MM] = mT, "sealing")
      }
      beforeRecorderStep() {
        const TT = (0, WM.c)(this, MM)[MM];
        if (!TT) return null;
        let UT = -1,
          mT = 0;
        if (!this.deps.recorderCall((TT => {
            UT = TT.DzT(), UT > 0 && (mT = TT.ozT())
          }))) return (0, WM.c)(this, HM)[HM](TT, "stopped");
        if (UT < 0) return (0, WM.c)(this, HM)[HM](TT, "read");
        if (0 === UT) return null;
        const WT = TT.head(mT, UT);
        let zT = !1;
        if (WT && this.deps.recorderCall(((TT, mT) => {
            const MT = TT.stage(UT);
            0 !== MT && (new Uint8Array(mT.buffer, MT, UT).set(WT), zT = !0)
          }), !0), zT) return null;
        const MT = TT.givenUp();
        this.deps.recorderCall((TT => {
          TT.AzT()
        }));
        const gT = (0, WM.c)(this, HM)[HM](TT, MT ? "givenUp" : "stopped");
        return MT && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), gT
      }
      stop() {
        (0, WM.c)(this, nM)[nM]++;
        const TT = (0, WM.c)(this, MM)[MM];
        TT && (this.deps.recorderCall((TT => {
          TT.AzT()
        })), (0, WM.c)(this, HM)[HM](TT, "stopped"))
      }
    }

    function jM(TT, UT) {
      return (0, WM.c)(this, MM)[MM] = null, TT.end(), UT
    }

    function lM(TT, UT) {
      const mT = new Uint8Array(4),
        WT = new DataView(mT.buffer);
      return WT.setUint8(0, TT ? 1 : 0), WT.setUint16(2, Math.max(0, Math.min(65535, Math.round(UT))), !0), mT
    }

    function LM(TT, UT) {
      return TT > function(TT) {
        return 16777216 + 314572.8 * Math.max(0, TT)
      }(UT) + 33554432
    }
    let pM = null;

    function BM(TT) {
      return pM ??= async function(TT) {
        const UT = TT.loadInFlight();
        UT && await UT.catch((() => {}));
        if (TT.trapped()) return "trapped";
        if (TT.busy() || !LM(TT.memoryBytes(), TT.clipSeconds())) return "Jp";
        TT.unload();
        let mT = !1;
        try {
          mT = await TT.load()
        } catch {
          mT = !1
        }
        if (!mT) return TT.trapped() ? "trapped" : TT.kB() ? "kB" : "failed";
        return "recycled"
      }(TT).finally((() => {
        pM = null
      })), pM
    }
    const ZM = "Replay recording couldn't load, so try again.",
      cM = new Set([LT.Zc.ToggleRecording, LT.Zc.SaveClip]);
    var vM = (0, zM.c)("bindings"),
      fM = (0, zM.c)("module"),
      qM = (0, zM.c)("memory"),
      iM = (0, zM.c)("trapped"),
      bM = (0, zM.c)("kB"),
      OM = (0, zM.c)("recycleDue"),
      eM = (0, zM.c)("loading"),
      YM = (0, zM.c)("generation"),
      JM = (0, zM.c)("viewDrawn"),
      xM = (0, zM.c)("clip"),
      dM = (0, zM.c)("session"),
      wM = (0, zM.c)("control"),
      tM = (0, zM.c)("deferred"),
      aM = (0, zM.c)("coreU8"),
      yM = (0, zM.c)("coreU32"),
      XM = (0, zM.c)("moduleU8"),
      IM = (0, zM.c)("edited"),
      QM = (0, zM.c)("sendSession"),
      sM = (0, zM.c)("checkNotInEvents"),
      FM = (0, zM.c)("clipping"),
      PM = (0, zM.c)("busy"),
      VM = (0, zM.c)("use"),
      uM = (0, zM.c)("ensureLoaded"),
      CM = (0, zM.c)("loadOnce"),
      rM = (0, zM.c)("recycleAfterStep"),
      KM = (0, zM.c)("settleRecycle"),
      SM = (0, zM.c)("load"),
      GM = (0, zM.c)("attach"),
      NM = (0, zM.c)("resendHeld"),
      EM = (0, zM.c)("recycle"),
      hM = (0, zM.c)("send"),
      DM = (0, zM.c)("unload"),
      oM = (0, zM.c)("dropModule"),
      AM = (0, zM.c)("coreBytes"),
      RM = (0, zM.c)("coreWords"),
      Tg = (0, zM.c)("moduleBytes"),
      Ug = (0, zM.c)("loadFailed"),
      mg = (0, zM.c)("call"),
      Wg = (0, zM.c)("guard"),
      zg = (0, zM.c)("trapOn");
    class Mg {
      constructor(TT) {
        this.deps = TT, Object.defineProperty(this, zg, {
          value: wg
        }), Object.defineProperty(this, Wg, {
          value: dg
        }), Object.defineProperty(this, mg, {
          value: xg
        }), Object.defineProperty(this, Ug, {
          value: Jg
        }), Object.defineProperty(this, Tg, {
          value: Yg
        }), Object.defineProperty(this, RM, {
          value: eg
        }), Object.defineProperty(this, AM, {
          value: Og
        }), Object.defineProperty(this, oM, {
          value: bg
        }), Object.defineProperty(this, DM, {
          value: ig
        }), Object.defineProperty(this, hM, {
          value: qg
        }), Object.defineProperty(this, EM, {
          value: fg
        }), Object.defineProperty(this, NM, {
          value: vg
        }), Object.defineProperty(this, GM, {
          value: cg
        }), Object.defineProperty(this, SM, {
          value: Zg
        }), Object.defineProperty(this, KM, {
          value: Bg
        }), Object.defineProperty(this, rM, {
          value: pg
        }), Object.defineProperty(this, CM, {
          value: Lg
        }), Object.defineProperty(this, uM, {
          value: lg
        }), Object.defineProperty(this, VM, {
          value: jg
        }), Object.defineProperty(this, PM, {
          value: kg
        }), Object.defineProperty(this, FM, {
          value: Hg
        }), Object.defineProperty(this, sM, {
          value: ng
        }), Object.defineProperty(this, QM, {
          value: gg
        }), Object.defineProperty(this, vM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, fM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, qM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, iM, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, bM, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, OM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, YM, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, JM, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, xM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, tM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, XM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IM, {
          writable: !0,
          value: void 0
        }), (0, WM.c)(this, IM)[IM] = new kM({
          ensureLoaded: () => (0, WM.c)(this, uM)[uM](),
          recorderCall: (TT, UT) => {
            UT && (0, WM.c)(this, sM)[sM]("an edited save's stage");
            const mT = (0, WM.c)(this, mg)[mg](((UT, mT) => (TT(UT, mT), !0)));
            return null !== mT && void 0 !== mT && mT
          },
          beginSave: TT.beginSave,
          givenUp: TT.givenUp
        })
      }
      get active() {
        return null !== (0, WM.c)(this, fM)[fM]
      }
      get trapped() {
        return (0, WM.c)(this, iM)[iM]
      }
      get loading() {
        return null !== (0, WM.c)(this, eM)[eM]
      }
      prefetch() {
        (0, WM.c)(this, bM)[bM] || (0, WM.c)(this, iM)[iM] || (0, WM.c)(this, fM)[fM] || (0, WM.c)(this, eM)[eM] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, WM.c)(this, JM)[JM] = !0, (0, WM.c)(this, FM)[FM]() && (0, WM.c)(this, VM)[VM]()
      }
      prefs(TT, UT) {
        (0, WM.c)(this, xM)[xM] = {
          on: TT,
          seconds: UT
        }, (0, WM.c)(this, hM)[hM](LT.Vc.Prefs, lM(TT, UT)), TT && (0, WM.c)(this, JM)[JM] && (0, WM.c)(this, VM)[VM]()
      }
      control(TT) {
        const UT = function(TT) {
          return new Uint8Array([TT, 0, 0, 0])
        }(TT);
        if (cM.has(TT)) return (0, WM.c)(this, fM)[fM] ? void(0, WM.c)(this, hM)[hM](LT.Vc.Control, UT) : ((0, WM.c)(this, wM)[wM] = UT, void(0, WM.c)(this, VM)[VM]());
        (0, WM.c)(this, bM)[bM] || this.deps.coreCommand(LT.Vc.Control, UT)
      }
      session(TT) {
        (0, WM.c)(this, dM)[dM] = TT, (0, WM.c)(this, QM)[QM](TT)
      }
      filePartDone(TT, UT) {
        (0, WM.c)(this, hM)[hM](LT.Vc.FilePartDone, function(TT, UT) {
          const mT = new Uint8Array(8),
            WT = new DataView(mT.buffer);
          return WT.setUint32(0, TT, !0), WT.setUint32(4, UT, !0), mT
        }(TT, UT))
      }
      fileDone(TT) {
        return (0, WM.c)(this, hM)[hM](LT.Vc.FileDone, function(TT) {
          const UT = new Uint8Array(4);
          return new DataView(UT.buffer).setUint32(0, TT, !0), UT
        }(TT)), (0, WM.c)(this, rM)[rM]()
      }
      saveEdited(TT) {
        return (0, WM.c)(this, sM)[sM]("saveEdited"), (0, WM.c)(this, IM)[IM].start(TT)
      }
      afterFrame() {
        if (!(0, WM.c)(this, fM)[fM]) return;
        "read" === (0, WM.c)(this, IM)[IM].beforeRecorderStep() && (0, WM.c)(this, rM)[rM]();
        const TT = (0, WM.c)(this, OM)[OM];
        (0, WM.c)(this, OM)[OM] = null;
        const UT = (0, WM.c)(this, fM)[fM],
          mT = (0, WM.c)(this, qM)[qM];
        if (!UT || !mT) return void(null === TT || void 0 === TT || TT.resolve((0, WM.c)(this, iM)[iM] ? "trapped" : "Jp"));
        const {
          core: WT
        } = this.deps, zT = WT.WMT(2);
        let MT, gT, nT, HT, kT = 0,
          jT = 0;
        if (0 !== zT) {
          var lT, LT;
          const TT = (0, WM.c)(this, RM)[RM]();
          kT = null !== (lT = TT[zT >>> 2]) && void 0 !== lT ? lT : 0, jT = null !== (LT = TT[1 + (zT >>> 2)]) && void 0 !== LT ? LT : 0
        }
        try {
          if (jT > 0) {
            const TT = UT.feed(jT);
            0 !== TT && (0, WM.c)(this, Tg)[Tg](mT).set((0, WM.c)(this, AM)[AM]().subarray(kT, kT + jT), TT)
          }
          MT = UT.step(), gT = UT.zMT(), nT = UT.MMT(), HT = UT.gMT()
        } catch (pT) {
          if (!(0, WM.c)(this, zg)[zg](pT)) throw null === TT || void 0 === TT || TT.resolve("Jp"), pT;
          return void(null === TT || void 0 === TT || TT.resolve("trapped"))
        }
        if (MT > 0) {
          const TT = WT.nMT(2, MT);
          0 !== TT && (0, WM.c)(this, AM)[AM]().set((0, WM.c)(this, Tg)[Tg](mT).subarray(gT, gT + MT), TT)
        }
        if (nT > 0) {
          (0, WM.c)(this, tM)[tM] = [];
          try {
            this.deps.events(new Uint8Array(mT.buffer, HT, nT), mT)
          } catch (pT) {
            throw null === TT || void 0 === TT || TT.resolve("Jp"), pT
          } finally {
            const TT = (0, WM.c)(this, tM)[tM];
            (0, WM.c)(this, tM)[tM] = null;
            for (const [UT, mT] of TT)(0, WM.c)(this, hM)[hM](UT, mT)
          }
        }
        if (!(0, WM.c)(this, FM)[FM]() && !(0, WM.c)(this, PM)[PM]()) return (0, WM.c)(this, DM)[DM](), void(null === TT || void 0 === TT || TT.resolve("Jp"));
        null === TT || void 0 === TT || TT.resolve((0, WM.c)(this, EM)[EM]())
      }
      dispose() {
        (0, WM.c)(this, bM)[bM] = !0, (0, WM.c)(this, DM)[DM]()
      }
    }

    function gg(TT) {
      (0, WM.c)(this, hM)[hM](LT.Vc.Session, function(TT) {
        const UT = new TextEncoder,
          mT = UT.encode(TT.game).subarray(0, 65535),
          WT = UT.encode(TT.lobby).subarray(0, 65535),
          zT = new Uint8Array(22 + mT.length + 2 + WT.length),
          MT = new DataView(zT.buffer);
        MT.setFloat64(0, TT.unixMs, !0), MT.setBigUint64(8, BigInt.asUintN(64, TT.session), !0), MT.setUint8(16, TT.lobbyType);
        let gT = 20;
        for (const nT of [mT, WT]) MT.setUint16(gT, nT.length, !0), zT.set(nT, gT + 2), gT += 2 + nT.length;
        return zT
      }({
        ...TT,
        unixMs: this.deps.unixNow()
      }))
    }

    function ng(TT) {
      false
    }

    function Hg() {
      var TT, UT;
      return null !== (TT = null === (UT = (0, WM.c)(this, xM)[xM]) || void 0 === UT ? void 0 : UT.on) && void 0 !== TT && TT
    }

    function kg() {
      const TT = (0, WM.c)(this, fM)[fM];
      let UT = !0;
      if (TT) try {
        UT = TT.busy()
      } catch (mT) {
        if (!(0, WM.c)(this, zg)[zg](mT)) throw mT
      }
      return UT || (0, WM.c)(this, IM)[IM].active
    }
    async function jg() {
      !(0, WM.c)(this, bM)[bM] && this.deps.allowed() ? await (0, WM.c)(this, uM)[uM]() : (0, WM.c)(this, wM)[wM] = null
    }

    function lg() {
      return (0, WM.c)(this, iM)[iM] || (0, WM.c)(this, bM)[bM] ? Promise.resolve(!1) : (0, WM.c)(this, fM)[fM] ? Promise.resolve(!0) : ((0, WM.c)(this, eM)[eM] ??= (0, WM.c)(this, CM)[CM](), (0, WM.c)(this, eM)[eM])
    }
    async function Lg() {
      let TT = !1;
      try {
        return TT = await (0, WM.c)(this, SM)[SM](), TT
      } finally {
        TT || ((0, WM.c)(this, wM)[wM] = null), (0, WM.c)(this, eM)[eM] = null
      }
    }

    function pg() {
      if (!(0, WM.c)(this, fM)[fM]) return Promise.resolve((0, WM.c)(this, iM)[iM] ? "trapped" : "Jp");
      if (!(0, WM.c)(this, OM)[OM]) {
        let TT = () => {};
        const UT = new Promise((UT => {
          TT = UT
        }));
        (0, WM.c)(this, OM)[OM] = {
          promise: UT,
          resolve: TT
        }
      }
      return (0, WM.c)(this, OM)[OM].promise
    }

    function Bg(TT) {
      const UT = (0, WM.c)(this, OM)[OM];
      (0, WM.c)(this, OM)[OM] = null, null === UT || void 0 === UT || UT.resolve(TT)
    }
    async function Zg() {
      let TT = (0, WM.c)(this, vM)[vM];
      if (!TT) {
        const UT = (0, WM.c)(this, YM)[YM];
        try {
          TT = await this.deps.load()
        } catch (mT) {
          return UT === (0, WM.c)(this, YM)[YM] && await (0, WM.c)(this, Ug)[Ug](mT), !1
        }
        if (UT !== (0, WM.c)(this, YM)[YM]) return this.deps.unload(), !1;
        const WT = TT,
          zT = (0, WM.c)(this, Wg)[Wg]((() => WT.HMT()));
        if (void 0 === zT) return !1;
        const MT = this.deps.core.kMT();
        if (zT !== MT) return await (0, WM.c)(this, Ug)[Ug](new Error(`recorder port version ${zT}, the core's ${MT}`)), !1;
        (0, WM.c)(this, vM)[vM] = TT
      }
      const UT = TT;
      try {
        if (!(0, WM.c)(this, Wg)[Wg]((() => ((0, WM.c)(this, fM)[fM] = new UT.jMT, (0, WM.c)(this, qM)[qM] = UT.RzT(), !0)))) return !1;
        (0, WM.c)(this, NM)[NM]();
        const TT = (0, WM.c)(this, wM)[wM];
        return (0, WM.c)(this, wM)[wM] = null, TT && (0, WM.c)(this, hM)[hM](LT.Vc.Control, TT), (0, WM.c)(this, GM)[GM]()
      } catch (mT) {
        return (0, WM.c)(this, DM)[DM](), await (0, WM.c)(this, Ug)[Ug](mT), !1
      }
    }

    function cg() {
      return this.deps.core.lMT(0), 1 === this.deps.core.lMT(1) || ((0, WM.c)(this, DM)[DM](), this.deps.failed(ZM), !1)
    }

    function vg() {
      (0, WM.c)(this, xM)[xM] && (0, WM.c)(this, hM)[hM](LT.Vc.Prefs, lM((0, WM.c)(this, xM)[xM].on, (0, WM.c)(this, xM)[xM].seconds)), (0, WM.c)(this, dM)[dM] && (0, WM.c)(this, QM)[QM]((0, WM.c)(this, dM)[dM])
    }

    function fg() {
      return BM({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var TT, UT;
          return null !== (TT = null === (UT = (0, WM.c)(this, xM)[xM]) || void 0 === UT ? void 0 : UT.seconds) && void 0 !== TT ? TT : 0
        },
        trapped: () => (0, WM.c)(this, iM)[iM],
        busy: () => (0, WM.c)(this, PM)[PM](),
        loadInFlight: () => (0, WM.c)(this, eM)[eM],
        kB: () => (0, WM.c)(this, bM)[bM],
        unload: () => {
          (0, WM.c)(this, DM)[DM]()
        },
        load: () => (0, WM.c)(this, uM)[uM]()
      })
    }

    function qg(TT, UT) {
      (0, WM.c)(this, tM)[tM] ? (0, WM.c)(this, tM)[tM].push([TT, UT]): (0, WM.c)(this, mg)[mg](((mT, WT) => {
        const zT = mT.mMT(UT.length);
        0 !== zT && (new Uint8Array(WT.buffer, zT, UT.length).set(UT), mT.command(TT, UT.length))
      }))
    }

    function ig() {
      (0, WM.c)(this, YM)[YM]++, (0, WM.c)(this, KM)[KM]("Jp"), (0, WM.c)(this, IM)[IM].stop(), this.deps.core.lMT(0), (0, WM.c)(this, oM)[oM](), (0, WM.c)(this, iM)[iM] || ((0, WM.c)(this, vM)[vM] = null, this.deps.unload())
    }

    function bg() {
      (0, WM.c)(this, mg)[mg]((TT => {
        TT.free()
      })), (0, WM.c)(this, fM)[fM] = null, (0, WM.c)(this, qM)[qM] = null, (0, WM.c)(this, XM)[XM] = null
    }

    function Og() {
      var TT;
      const UT = this.deps.coreBuffer();
      return (null === (TT = (0, WM.c)(this, aM)[aM]) || void 0 === TT ? void 0 : TT.buffer) !== UT && ((0, WM.c)(this, aM)[aM] = new Uint8Array(UT)), (0, WM.c)(this, aM)[aM]
    }

    function eg() {
      var TT;
      const UT = this.deps.coreBuffer();
      return (null === (TT = (0, WM.c)(this, yM)[yM]) || void 0 === TT ? void 0 : TT.buffer) !== UT && ((0, WM.c)(this, yM)[yM] = new Uint32Array(UT, 0, UT.byteLength >>> 2)), (0, WM.c)(this, yM)[yM]
    }

    function Yg(TT) {
      var UT;
      const mT = TT.buffer;
      return (null === (UT = (0, WM.c)(this, XM)[XM]) || void 0 === UT ? void 0 : UT.buffer) !== mT && ((0, WM.c)(this, XM)[XM] = new Uint8Array(mT)), (0, WM.c)(this, XM)[XM]
    }
    async function Jg(TT) {
      await this.deps.staleOr(TT, (() => {
        this.deps.failed(ZM)
      }))
    }

    function xg(TT) {
      const UT = (0, WM.c)(this, fM)[fM],
        mT = (0, WM.c)(this, qM)[qM];
      if (UT && mT) return (0, WM.c)(this, Wg)[Wg]((() => TT(UT, mT)))
    }

    function dg(TT) {
      if (!(0, WM.c)(this, iM)[iM]) try {
        return TT()
      } catch (UT) {
        if (!(0, WM.c)(this, zg)[zg](UT)) throw UT;
        return
      }
    }

    function wg(TT) {
      return TT instanceof WebAssembly.RuntimeError && ((0, WM.c)(this, iM)[iM] = !0, (0, WM.c)(this, fM)[fM] = null, (0, WM.c)(this, qM)[qM] = null, (0, WM.c)(this, XM)[XM] = null, (0, WM.c)(this, vM)[vM] = null, (0, WM.c)(this, wM)[wM] = null, (0, WM.c)(this, KM)[KM]("trapped"), this.deps.core.lMT(0), (0, WM.c)(this, IM)[IM].stop(), this.deps.crash(this.deps.markTrapped(TT)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var tg = mT(38770);
    const ag = new Map([
      ["skyblock", () => mT.e(52).then((() => mT(38764)))]
    ]);

    function yg(TT) {
      const UT = ag.get(TT);
      return UT ? UT().then((() => {
        const UT = (0, tg.c)(TT);
        if (!UT) throw new Error(`${TT}'s replay hook module registered no hook`);
        return UT
      })) : null
    }
    class Xg {
      constructor(TT) {
        this.deps = TT, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(TT) {
        if (this.pending.clear(), TT === this.game && null !== this.hook) return void(this.all = !0);
        const UT = ++this.generation;
        this.game = TT, this.hook = null, this.all = !1;
        const mT = this.deps.loadHook(TT);
        null === mT || void 0 === mT || mT.then((TT => {
          UT === this.generation && (this.hook = TT, this.all = !0)
        }), (TT => {
          UT === this.generation && this.deps.onError(TT)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(TT) {
        null === this.hook || this.all || this.pending.set(TT, !0)
      }
      entityInfoChanged(TT) {
        null === this.hook || this.all || this.pending.has(TT) || this.pending.set(TT, !1)
      }
      flush(TT) {
        const {
          hook: UT
        } = this;
        if (null === UT || !TT || !this.all && 0 === this.pending.size) return;
        const mT = this.deps.cmd();
        if (null === mT) return;
        const {
          api: WT
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: TT,
            count: UT
          } = Vm(WT, this.ids);
          this.ids = TT;
          for (let mT = 0; mT < UT; mT++) this.pending.set(TT[mT], !0)
        }
        const zT = this.ids = um(this.ids, this.pending.size);
        let MT = 0;
        for (const kT of this.pending.keys()) zT[MT++] = kT;
        const gT = [],
          nT = Cm(WT, zT, MT, ((TT, UT) => {
            null !== UT && gT.push({
              serverId: TT,
              info: UT,
              spawned: !0 === this.pending.get(TT)
            })
          }));
        if (nT) {
          this.pending.clear();
          for (const {
              serverId: TT,
              info: WT,
              spawned: zT
            }
            of gT) try {
            UT(WT, {
              setFacingTolerance: UT => {
                null === UT && zT || nm(mT, TT, UT) || this.pending.set(TT, zT)
              }
            })
          } catch (HT) {
            this.deps.onError(HT)
          }
        }
      }
    }
    var Ig = (0, zM.c)("bindings"),
      Qg = (0, zM.c)("module"),
      sg = (0, zM.c)("memory"),
      Fg = (0, zM.c)("trapped"),
      Pg = (0, zM.c)("generation"),
      Vg = (0, zM.c)("loading"),
      ug = (0, zM.c)("lend"),
      Cg = (0, zM.c)("givenUp"),
      rg = (0, zM.c)("afterSave"),
      Kg = (0, zM.c)("opens"),
      Sg = (0, zM.c)("saveAskedAt"),
      Gg = (0, zM.c)("unload"),
      Ng = (0, zM.c)("dropModule"),
      Eg = (0, zM.c)("loadFailed"),
      hg = (0, zM.c)("saveReadsBody"),
      Dg = (0, zM.c)("command"),
      og = (0, zM.c)("call"),
      Ag = (0, zM.c)("guard"),
      Rg = (0, zM.c)("trapOn");
    class Tn {
      constructor(TT) {
        this.deps = TT, Object.defineProperty(this, Rg, {
          value: Hn
        }), Object.defineProperty(this, Ag, {
          value: nn
        }), Object.defineProperty(this, og, {
          value: gn
        }), Object.defineProperty(this, Dg, {
          value: Mn
        }), Object.defineProperty(this, hg, {
          get: zn,
          set: void 0
        }), Object.defineProperty(this, Eg, {
          value: Wn
        }), Object.defineProperty(this, Ng, {
          value: mn
        }), Object.defineProperty(this, Gg, {
          value: Un
        }), Object.defineProperty(this, Ig, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Qg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fg, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Pg, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Vg, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ug, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Cg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rg, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Kg, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Sg, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, WM.c)(this, Qg)[Qg] && null === (0, WM.c)(this, rg)[rg]
      }
      async open(TT, UT) {
        if ((0, WM.c)(this, Fg)[Fg]) return LT.dd.ModuleTrap;
        let mT = (0, WM.c)(this, Ig)[Ig];
        if (!mT) {
          const TT = (0, WM.c)(this, Pg)[Pg];
          (0, WM.c)(this, Vg)[Vg]++;
          try {
            mT = await this.deps.load()
          } catch (zT) {
            return (0, WM.c)(this, Vg)[Vg]--, TT !== (0, WM.c)(this, Pg)[Pg] ? "stopped" : (0, WM.c)(this, Eg)[Eg](zT, UT)
          }
          if ((0, WM.c)(this, Vg)[Vg]--, TT !== (0, WM.c)(this, Pg)[Pg]) return (0, WM.c)(this, Ig)[Ig] || 0 !== (0, WM.c)(this, Vg)[Vg] || (0, WM.c)(this, Fg)[Fg] || this.deps.unload(), "stopped";
          if ((0, WM.c)(this, Fg)[Fg]) return LT.dd.ModuleTrap;
          const WT = mT.HMT(),
            MT = this.deps.core.kMT();
          if (WT !== MT) return (0, WM.c)(this, Eg)[Eg](new Error(`replay port version ${WT}, the core's ${MT}`), UT);
          (0, WM.c)(this, Ig)[Ig] = mT
        }
        if (!(0, WM.c)(this, Qg)[Qg]) {
          const TT = mT;
          if (!(0, WM.c)(this, Ag)[Ag]((() => {
              (0, WM.c)(this, Qg)[Qg] = new TT.LMT, (0, WM.c)(this, sg)[sg] = TT.pMT()
            }))) return LT.dd.ModuleTrap
        }
        let WT = !1;
        return (0, WM.c)(this, og)[og](((UT, mT) => {
          null !== (0, WM.c)(this, rg)[rg] && UT.step(0, 0);
          const zT = UT.stage(TT.length);
          0 !== zT && (new Uint8Array(mT.buffer, zT, TT.length).set(TT), UT.open(), (0, WM.c)(this, Cg)[Cg] = (0, WM.c)(this, ug)[ug], (0, WM.c)(this, rg)[rg] = null, (0, WM.c)(this, Kg)[Kg]++, WT = !0)
        })) ? WT ? "opening" : LT.dd.TooLarge : LT.dd.ModuleTrap
      }
      beforeFrame(TT) {
        const UT = (0, WM.c)(this, Qg)[Qg],
          mT = (0, WM.c)(this, sg)[sg];
        if (!UT || !mT || null !== (0, WM.c)(this, rg)[rg]) return;
        const {
          core: WT
        } = this.deps, zT = WT.BMT(TT);
        if (zT < 0) return;
        const MT = Math.floor(zT);
        let gT, nT;
        try {
          gT = UT.step(MT, zT - MT), nT = UT.zMT()
        } catch (kT) {
          return void(0, WM.c)(this, Rg)[Rg](kT)
        }
        const HT = WT.nMT(1, gT);
        if (0 === HT) {
          const TT = (0, WM.c)(this, og)[og]((TT => {
            TT.close()
          }));
          if (!TT) return;
          return (0, WM.c)(this, hg)[hg] ? (0, WM.c)(this, rg)[rg] = "drop" : (0, WM.c)(this, Ng)[Ng](), void WT.ZMT(LT.dd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), HT, gT).set(new Uint8Array(mT.buffer, nT, gT))
      }
      play() {
        (0, WM.c)(this, Dg)[Dg]((TT => {
          TT.play()
        }))
      }
      pause() {
        (0, WM.c)(this, Dg)[Dg]((TT => {
          TT.pause()
        }))
      }
      seek(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, WM.c)(this, Dg)[Dg]((mT => {
          mT.seek(TT, UT)
        }))
      }
      setMark(TT, UT) {
        return (0, WM.c)(this, Dg)[Dg]((mT => {
          mT.cMT(TT, UT)
        }))
      }
      addKeyframe(TT, UT) {
        return (0, WM.c)(this, Dg)[Dg]((mT => {
          mT.vMT(TT[0], TT[1], TT[2], UT[0], UT[1], UT[2])
        }))
      }
      setKeyframe(TT, UT) {
        return (0, WM.c)(this, Dg)[Dg]((mT => {
          mT.fMT(TT, UT)
        }))
      }
      moveKeyframe(TT, UT) {
        return (0, WM.c)(this, Dg)[Dg]((mT => {
          mT.qMT(TT, UT)
        }))
      }
      deleteKeyframes(TT, UT) {
        return (0, WM.c)(this, Dg)[Dg]((mT => {
          mT.iMT(TT, UT)
        }))
      }
      crop(TT, UT) {
        return null === (0, WM.c)(this, ug)[ug] && (0, WM.c)(this, Dg)[Dg]((mT => {
          mT.crop(TT, UT)
        }))
      }
      beginSave() {
        const TT = (0, WM.c)(this, Sg)[Sg];
        if ((0, WM.c)(this, Sg)[Sg] = null, null !== TT && TT !== (0, WM.c)(this, Kg)[Kg]) return null;
        let UT = 0,
          mT = null;
        if ((0, WM.c)(this, og)[og](((TT, WT) => {
            UT = TT.save(), 0 !== UT && (mT = new Uint8Array(WT.buffer, TT.bMT(), TT.OMT()).slice())
          })), 0 === UT || !mT) return null;
        const WT = {
          headLen: UT,
          editState: mT,
          givenUp: () => (0, WM.c)(this, Cg)[Cg] === WT,
          head: (TT, UT) => {
            if ((0, WM.c)(this, ug)[ug] !== WT || !(0, WM.c)(this, hg)[hg]) return null;
            let mT = null;
            return (0, WM.c)(this, og)[og](((WT, zT) => {
              const MT = WT.eMT();
              0 !== MT && TT >= 0 && UT >= 0 && TT + UT <= MT && (mT = new Uint8Array(zT.buffer, WT.YMT() + TT, UT))
            })), mT
          },
          end: () => {
            if ((0, WM.c)(this, ug)[ug] !== WT) return;
            (0, WM.c)(this, ug)[ug] = null, (0, WM.c)(this, Cg)[Cg] = null, (0, WM.c)(this, og)[og]((TT => {
              TT.JMT()
            }));
            const TT = (0, WM.c)(this, rg)[rg];
            (0, WM.c)(this, rg)[rg] = null, "unload" === TT ? (0, WM.c)(this, Gg)[Gg]() : "drop" === TT && (0, WM.c)(this, Ng)[Ng]()
          }
        };
        return (0, WM.c)(this, ug)[ug] = WT, WT
      }
      askSave() {
        (0, WM.c)(this, Sg)[Sg] = (0, WM.c)(this, Kg)[Kg]
      }
      setSpeed(TT) {
        (0, WM.c)(this, Dg)[Dg]((UT => {
          UT.xMT(TT)
        }))
      }
      setCameraMode(TT) {
        (0, WM.c)(this, Dg)[Dg]((UT => {
          UT.dMT(TT)
        }))
      }
      close() {
        (0, WM.c)(this, Dg)[Dg]((TT => {
          TT.close()
        }))
      }
      stop() {
        (0, WM.c)(this, Pg)[Pg]++, (0, WM.c)(this, hg)[hg] && ((0, WM.c)(this, og)[og]((TT => {
          TT.close()
        })), (0, WM.c)(this, Qg)[Qg]) ? (0, WM.c)(this, rg)[rg] = "unload" : (0, WM.c)(this, Gg)[Gg]()
      }
    }

    function Un() {
      (0, WM.c)(this, Ng)[Ng](), (0, WM.c)(this, Fg)[Fg] || ((0, WM.c)(this, Ig)[Ig] = null, this.deps.unload())
    }

    function mn() {
      (0, WM.c)(this, og)[og]((TT => {
        TT.free()
      })), (0, WM.c)(this, Qg)[Qg] = null, (0, WM.c)(this, sg)[sg] = null
    }
    async function Wn(TT, UT) {
      return await this.deps.staleOr(TT, (() => {}), {
        beforeReload: UT
      }) ? "reloading" : LT.dd.ModuleLoad
    }

    function zn() {
      return null !== (0, WM.c)(this, ug)[ug] && (0, WM.c)(this, Cg)[Cg] !== (0, WM.c)(this, ug)[ug]
    }

    function Mn(TT) {
      return null === (0, WM.c)(this, rg)[rg] && (0, WM.c)(this, og)[og](TT)
    }

    function gn(TT) {
      const UT = (0, WM.c)(this, Qg)[Qg],
        mT = (0, WM.c)(this, sg)[sg];
      return !(!UT || !mT) && (0, WM.c)(this, Ag)[Ag]((() => {
        TT(UT, mT)
      }))
    }

    function nn(TT) {
      if ((0, WM.c)(this, Fg)[Fg]) return !1;
      try {
        return TT(), !0
      } catch (UT) {
        return (0, WM.c)(this, Rg)[Rg](UT), !1
      }
    }

    function Hn(TT) {
      if (!(TT instanceof WebAssembly.RuntimeError)) throw TT;
      (0, WM.c)(this, Fg)[Fg] = !0, (0, WM.c)(this, Qg)[Qg] = null, (0, WM.c)(this, sg)[sg] = null, (0, WM.c)(this, Ig)[Ig] = null, this.deps.crash(this.deps.markTrapped(TT)), this.deps.core.ZMT(LT.dd.ModuleTrap)
    }
    var kn = mT(6548),
      jn = mT(41160);
    const Ln = "[bloxd-wasm-client]";
    const pn = String(yz);

    function Bn(TT) {
      return null === TT || TT === pn ? void 0 : TT
    }

    function Zn(TT) {
      var UT, mT, WT, zT, MT, nT, HT;
      switch (TT.what) {
        case LT.md.FlyingText: {
          let UT;
          try {
            UT = JSON.parse(TT.contentJson)
          } catch (kT) {
            return void console.warn(`${Ln} a replay's flying text isn't JSON`, kT)
          }
          gT.j.EZ("forceFlyingMiddleMessage", {
            content: UT,
            yM: TT.yM,
            angle: TT.angle,
            XM: TT.XM
          });
          break
        }
        case LT.md.PlayerKilled:
          (0, jn.c)({
            kind: "killed",
            body: {
              deadEId: null !== (UT = Bn(TT.dead)) && void 0 !== UT ? UT : "",
              killerEId: Bn(TT.killer),
              withItem: null !== (mT = TT.withItem) && void 0 !== mT ? mT : "",
              killstreak: TT.killstreak
            }
          });
          break;
        case LT.md.Killfeed:
          (0, jn.c)({
            kind: "custom",
            body: {
              killer: {
                eId: Bn(TT.killerId),
                name: null !== (WT = TT.killerName) && void 0 !== WT ? WT : void 0,
                colour: null !== (zT = TT.killerColour) && void 0 !== zT ? zT : void 0
              },
              victim: {
                eId: Bn(TT.victimId),
                name: null !== (MT = TT.victimName) && void 0 !== MT ? MT : void 0,
                colour: null !== (nT = TT.victimColour) && void 0 !== nT ? nT : void 0
              },
              withItem: null !== (HT = TT.withItem) && void 0 !== HT ? HT : ""
            }
          })
      }
    }
    const cn = "[bloxd-wasm-client]";

    function vn(TT) {
      if (void 0 === TT || null === TT || "" === TT) return null;
      const UT = Number(TT);
      return Number.isInteger(UT) && UT > yz && UT <= 2147483647 ? UT : null
    }

    function fn(TT) {
      return {
        id: vn(TT.eId),
        name: "string" === typeof TT.name ? TT.name : null,
        colour: "string" === typeof TT.colour ? TT.colour : null
      }
    }

    function qn(TT) {
      const UT = (0, rz.m)(Em.$b.PlayerKilled, (UT => {
          var mT, WT;
          const zT = (0, Cz.k)(UT);
          if (!(0, Cz.d)(zT)) return;
          const {
            deadEId: MT,
            killerEId: gT,
            withItem: nT,
            killstreak: HT
          } = zT;
          TT.recordPlayerKilled(null !== (mT = vn(MT)) && void 0 !== mT ? mT : yz, null !== (WT = vn(gT)) && void 0 !== WT ? WT : yz, "number" === typeof HT ? HT : 0, "string" === typeof nT ? nT : "")
        })),
        mT = (0, rz.m)(Em.$b.CustomKillfeed, (UT => {
          const mT = (0, Cz.k)(UT);
          if (!(0, Cz.d)(mT) || !(0, Cz.d)(mT.killer) || !(0, Cz.d)(mT.victim)) return;
          const {
            killer: WT,
            victim: zT,
            withItem: MT
          } = mT;
          TT.recordKillfeed(fn(WT), fn(zT), "string" === typeof MT ? MT : null)
        }));
      return () => {
        UT(), mT()
      }
    }

    function bn(TT) {
      var UT;
      return void 0 === TT || null === TT ? null : null !== (UT = JSON.stringify(TT)) && void 0 !== UT ? UT : null
    }

    function On(TT) {
      let UT = null;
      const mT = () => {
        const {
          enableClipping: mT,
          clipDurationSeconds: zT
        } = WT.b.get("clientEscMenuOptions"), MT = `${mT}:${zT}`;
        MT !== UT && (UT = MT, TT.recorder.setPrefs(mT, zT))
      };
      return mT(), (0, gT.k)("appManagerUpdated|clientEscMenuOptions", mT)
    }
    const en = "replayModule",
      Yn = "recorderModule";

    function Jn(TT, UT, mT) {
      return function() {
        return TT.isStopped ? mT : UT(...arguments)
      }
    }
    const xn = {
      open: () => Promise.reject(new Error(Oz.c.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function dn() {
      return mT.e(65).then((() => mT(61336)))
    }

    function wn(TT) {
      (0, Oz.d)({
        text: TT,
        type: "Error"
      })
    }
    class tn {
      constructor(TT) {
        this.deps = TT, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: UT,
          api: WT,
          core: zT
        } = TT, MT = () => TT.memory().buffer, gT = () => UT.isStopped ? null : UT.rings.cmd, nT = Jn(UT, ((TT, UT) => zT.nMT(TT, UT)), 0), HT = () => zT.kMT();
        let kT = null;
        this.replay = new Tn({
          core: {
            BMT: Jn(UT, (TT => zT.BMT(TT)), -1),
            nMT: nT,
            kMT: HT,
            ZMT: Jn(UT, (TT => {
              zT.ZMT(TT)
            }), void 0)
          },
          coreBuffer: MT,
          load: async () => (kT = await mT.e(66).then((() => mT(61346))), kT.loadReplayModule()),
          unload: () => {
            var TT;
            null === (TT = kT) || void 0 === TT || TT.unloadReplayModule()
          },
          markTrapped: TT => kT ? kT.markReplayTrapped(TT) : new Error(String(TT)),
          staleOr: (UT, mT, WT) => TT.staleOr(en, UT, mT, WT),
          crash: UT => {
            TT.reportFault(en, UT)
          }
        });
        let jT = null;
        this.recorder = new Mg({
          core: {
            lMT: Jn(UT, (TT => zT.lMT(TT)), 0),
            WMT: Jn(UT, (TT => zT.WMT(TT)), 0),
            nMT: nT,
            kMT: HT
          },
          coreCommand: (TT, UT) => {
            var mT, WT;
            return null !== (mT = null === (WT = gT()) || void 0 === WT ? void 0 : WT.writeCmd(TT, 0, UT)) && void 0 !== mT && mT
          },
          coreBuffer: MT,
          load: async () => (jT = await dn(), jT.loadRecorderModule()),
          prefetch: () => {
            dn().then((TT => TT.prefetchRecorderModule())).catch((TT => {
              console.warn(`${cn} the recorder module didn't prefetch, so a save loads it:`, TT)
            }))
          },
          unload: () => {
            var TT;
            null === (TT = jT) || void 0 === TT || TT.unloadRecorderModule()
          },
          markTrapped: TT => jT ? jT.markRecorderTrapped(TT) : new Error(String(TT)),
          memoryBytes: () => {
            var TT, UT;
            return null !== (TT = null === (UT = jT) || void 0 === UT ? void 0 : UT.recorderMemoryBytes()) && void 0 !== TT ? TT : 0
          },
          staleOr: (UT, mT) => TT.staleOr(Yn, UT, mT),
          crash: UT => {
            TT.reportFault(Yn, UT)
          },
          allowed: () => !0 === TT.options.get("canRecordReplays"),
          failed: wn,
          events: (TT, UT) => {
            this.runtime.recorderEvents(TT, UT)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: wn,
          unixNow: () => Date.now()
        });
        const lT = new az({
          core: {
            GzT: Jn(UT, (TT => zT.GzT(TT)), 0),
            EzT: Jn(UT, (() => {
              zT.EzT()
            }), void 0),
            tc: Jn(UT, (() => zT.tc()), 0),
            NzT: Jn(UT, (() => zT.NzT()), 0)
          },
          buffer: MT,
          apiView: () => WT.apiView,
          cmd: gT,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Xg({
          api: WT,
          cmd: gT,
          loadHook: yg,
          onError: TT => {
            console.warn(`${cn} the recorded game's replay hooks:`, TT)
          }
        });
        const LT = new uz({
          client: lT,
          buffer: MT,
          setHoldDraws: TT => {
            UT.setHoldDraws(TT)
          },
          notify: Oz.d,
          onRecorderState: () => {
            var TT;
            null === (TT = (0, Yz.i)()) || void 0 === TT || TT.recorderChanged()
          },
          onViewerChange: () => {
            var TT;
            null === (TT = (0, Yz.i)()) || void 0 === TT || TT.viewerChanged()
          },
          onReplayOption: UT => {
            ! function(TT, UT) {
              var mT, WT;
              const zT = Em.pb[UT.key];
              if (void 0 === zT) return;
              let MT = null !== (mT = UT.value) && void 0 !== mT ? mT : JSON.parse(JSON.stringify(null !== (WT = kn.e[zT]) && void 0 !== WT ? WT : null));
              if (null !== UT.value && UT.key < Em.Ib.Environment && "string" === typeof MT) try {
                MT = JSON.parse(MT)
              } catch (gT) {
                return void console.warn(`${Ln} a replay's ${zT} isn't JSON`, gT)
              }
              TT.applyNewClientOptions({
                [zT]: MT
              })
            }(TT.options, UT)
          },
          onReplayUiEvent: Zn,
          onReplayOpened: UT => {
            this.entityHooks.opened((0, xT.dc)(UT)), TT.replayShaderPack(UT)
          },
          meshPending: () => {
            var TT, mT;
            return null !== (TT = null === (mT = UT.lastHeader) || void 0 === mT ? void 0 : mT.renderPending) && void 0 !== TT ? TT : 0
          },
          viewerOpen: ez.c,
          download: TT => {
            (0, iz.g)(TT)
          }
        });
        this.runtime = LT, WT.replay = LT.sink, (0, Yz.y)(LT);
        const pT = new Gz({
          live: () => {
            var TT;
            return !UT.isStopped && !0 === (null === (TT = LT.currentViewer) || void 0 === TT ? void 0 : TT.inPlayback)
          },
          cmd: gT,
          dragScale: UM
        });
        this.freecam = pT, (0, Yz.v)(pT), this.recordedOptions = function(TT, UT) {
          const mT = Em.pb,
            WT = mT.map(((mT, WT) => UT.subscribe(mT, (UT => {
              TT.setOption(WT, bn(UT))
            }))));
          return {
            sendAll() {
              mT.forEach(((mT, WT) => {
                TT.setOption(WT, bn(UT.get(mT)))
              }))
            },
            stop() {
              for (const TT of WT) TT()
            }
          }
        }(LT.recorder, TT.options), this.stops = [(0, zW.r)((TT => {
          pT.flush();
          try {
            this.replay.beforeFrame(TT)
          } catch (UT) {
            this.deps.reportFault("replayFrame", UT)
          }
        })), (0, zW.G)(((TT, UT) => {
          try {
            this.recorder.afterFrame(), UT && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (mT) {
            this.deps.reportFault("recorderFrame", mT)
          }
          try {
            LT.afterFrame(TT)
          } catch (mT) {
            this.deps.reportFault("replayRuntime", mT)
          }
        })), On(LT), () => {
          this.recordedOptions.stop()
        }, qn(LT.recorder), (0, Kz.h)((TT => {
          let {
            action: UT,
            down: mT
          } = TT;
          var WT;
          mT && (null === (WT = (0, Yz.i)()) || void 0 === WT || WT.keyDown(UT))
        }))];
        const BT = () => {
          const TT = LT.currentViewer;
          return !0 === (null === TT || void 0 === TT ? void 0 : TT.isOpen) ? TT : null
        };
        (0, bz.f)({
          open: (TT, UT) => this.open(TT, UT),
          replayKey: () => {
            var TT, UT;
            return null !== (TT = null === (UT = BT()) || void 0 === UT ? void 0 : UT.id) && void 0 !== TT ? TT : null
          },
          saveRefusal: () => {
            var TT, UT;
            return null !== (TT = null === (UT = BT()) || void 0 === UT ? void 0 : UT.saveRefusal) && void 0 !== TT ? TT : null
          },
          encode: () => {
            var TT, UT;
            return null !== (TT = null === (UT = BT()) || void 0 === UT ? void 0 : UT.save()) && void 0 !== TT ? TT : Promise.resolve(null)
          },
          fileHandle: () => {
            var TT, UT;
            return null !== (TT = null === (UT = LT.currentViewer) || void 0 === UT ? void 0 : UT.fileHandle) && void 0 !== TT ? TT : null
          },
          markSaved: (TT, UT) => {
            var mT;
            null === (mT = LT.currentViewer) || void 0 === mT || mT.markSaved(TT, UT)
          }
        })
      }
      netEvent(TT) {
        if ("connection" === TT.type)
          if (TT.phase === LT.O.Activated) {
            this.activeConn = TT.conn;
            const UT = this.deps.sessionInfo(TT.conn);
            null !== UT && (this.runtime.activated({
              lobbyType: (0, dT.w)(UT.lobbyName),
              gameNameWithVariation: UT.gameNameWithVariation,
              lobbyName: UT.lobbyName
            }), this.recordedOptions.sendAll())
          } else TT.phase !== LT.O.Left && TT.phase !== LT.O.Closed || TT.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const TT of this.stops) TT();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Yz.p)() === this.runtime && (0, Yz.y)(null), (0, Yz.m)() === this.freecam && (0, Yz.v)(null), (0, bz.f)(xn), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(TT, UT) {
        const {
          running: mT
        } = this.deps;
        if (mT.isStopped) throw new Error(Oz.c.coreStopped.text);
        if (TT.byteLength > 67108864) throw new Error(Oz.c.cantOpen.text);
        let WT;
        try {
          WT = await async function(TT) {
            const UT = await TT.loadViewer();
            return UT.inPlayback || (0, zW.N)().leaveGame(null), UT
          }(this.runtime)
        } catch (zT) {
          throw console.warn(`${cn} the replay viewer didn't load`, zT), new Error(Oz.c.viewerLoadFailed.text)
        }
        if (mT.isStopped) throw new Error(Oz.c.coreStopped.text);
        await WT.open(TT, UT)
      }
    }
    var an = mT(2067);

    function yn(TT, UT) {
      const {
        aux: mT,
        payload: WT
      } = function(TT) {
        return {
          aux: TT.reset ? LT.gc.ResetFirst : 0,
          payload: In(TT.changes)
        }
      }(UT);
      TT.queueOptions(mT, WT) && (UT.reset && an.d.reset(), an.d.apply(UT.changes))
    }
    const Xn = new TextEncoder;

    function In(TT) {
      const UT = new Qn;
      return Fn(UT, TT), UT.bytes()
    }
    class Qn {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(TT) {
        if (this.len + TT <= this.buf.length) return;
        const UT = new Uint8Array(Math.max(2 * this.buf.length, this.len + TT));
        UT.set(this.buf.subarray(0, this.len)), this.buf = UT, this.view = new DataView(UT.buffer)
      }
      u8(TT) {
        this.room(1), this.buf[this.len++] = TT
      }
      tagged(TT, UT, mT) {
        this.room(1 + UT), this.buf[this.len++] = TT, 1 === UT ? this.view.setUint8(this.len, mT) : 2 === UT ? this.view.setUint16(this.len, mT) : this.view.setUint32(this.len, mT), this.len += UT
      }
      signed(TT, UT, mT) {
        this.room(1 + UT), this.buf[this.len++] = TT, 1 === UT ? this.view.setInt8(this.len, mT) : 2 === UT ? this.view.setInt16(this.len, mT) : this.view.setInt32(this.len, mT), this.len += UT
      }
      f64(TT) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, TT), this.len += 8
      }
      raw(TT) {
        this.room(TT.length), this.buf.set(TT, this.len), this.len += TT.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function sn(TT, UT, mT, WT, zT, MT, gT) {
      UT < WT ? TT.u8(mT | UT) : null !== zT && UT < 256 ? TT.tagged(zT, 1, UT) : UT < 65536 ? TT.tagged(MT, 2, UT) : TT.tagged(gT, 4, UT)
    }

    function Fn(TT, UT) {
      switch (typeof UT) {
        case "undefined":
          return void TT.raw(Pn);
        case "boolean":
          return void TT.u8(UT ? 195 : 194);
        case "number":
          return void
          function(TT, UT) {
            UT >>> 0 === UT ? UT < 128 ? TT.u8(UT) : UT < 256 ? TT.tagged(204, 1, UT) : UT < 65536 ? TT.tagged(205, 2, UT) : TT.tagged(206, 4, UT) : (UT | 0) === UT ? UT >= -32 ? TT.u8(255 & UT) : UT >= -128 ? TT.signed(208, 1, UT) : UT >= -32768 ? TT.signed(209, 2, UT) : TT.signed(210, 4, UT) : TT.f64(UT)
          }(TT, UT);
        case "string": {
          const mT = Xn.encode(UT);
          return sn(TT, mT.length, 160, 32, 217, 218, 219), void TT.raw(mT)
        }
        case "object":
          break;
        default:
          return void TT.u8(192)
      }
      if (null === UT) TT.u8(192);
      else if (Array.isArray(UT)) {
        sn(TT, UT.length, 144, 16, null, 220, 221);
        for (const mT of UT) Fn(TT, mT)
      } else if (UT instanceof Uint8Array) sn(TT, UT.length, 0, 0, 196, 197, 198), TT.raw(UT);
      else {
        const mT = Object.keys(UT);
        sn(TT, mT.length, 128, 0, null, 222, 223);
        for (const WT of mT) Fn(TT, WT), Fn(TT, UT[WT])
      }
    }
    const Pn = new Uint8Array([212, 0, 0]);
    var Vn = mT(42755),
      un = mT(42761),
      Cn = mT(41080),
      rn = mT(41127),
      Kn = mT(3001);
    const Sn = [1e3, 3e3, 9e3];
    class Gn {
      constructor(TT) {
        this.host = TT, this.sets = new Map, this.table = [], this.generation = 0, this.kB = !1
      }
      onEvent(TT) {
        const UT = function(TT) {
          if (TT.byteLength !== LT.Ad) return null;
          const UT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
          return {
            want: UT.getUint16(0, !0),
            release: UT.getUint16(2, !0)
          }
        }(TT);
        UT && !this.kB && (UT.release !== LT.Ed && this.release(UT.release), UT.want !== LT.Ed && this.want(UT.want))
      }
      reset(TT) {
        if (!this.kB) {
          for (const [TT, UT] of this.sets) "ready" === UT.state && this.releaseAll(UT.distinct), this.sets.delete(TT);
          this.table = TT, this.generation++
        }
      }
      dispose() {
        if (this.kB) return;
        this.kB = !0, this.generation++, this.table = [];
        const TT = [...this.sets.values()];
        this.sets.clear();
        let UT = null;
        for (const WT of TT)
          for (const TT of "ready" === WT.state ? WT.distinct : []) try {
            this.host.gWT(TT)
          } catch (mT) {
            UT ??= {
              error: mT
            }
          }
        if (UT) throw UT.error
      }
      isReady(TT) {
        var UT;
        return "ready" === (null === (UT = this.sets.get(TT)) || void 0 === UT ? void 0 : UT.state)
      }
      want(TT) {
        const UT = this.sets.get(TT);
        if ("loading" === (null === UT || void 0 === UT ? void 0 : UT.state)) return UT.wanted = !0, void this.capAnswer(TT, UT);
        if ("ready" === (null === UT || void 0 === UT ? void 0 : UT.state)) return void this.host.sendReady(En(TT, UT.images, UT.size));
        const mT = this.table[TT];
        if (!mT || 1 !== mT.urls.length && mT.urls.length !== Em.Tb.CubeFaces) return this.host.sendReady(hn(TT)), void this.host.onLoadFailed(TT, "", new Error(`no image set ${TT}`));
        const WT = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(TT, WT), this.load(TT, mT, WT, this.generation, 0), this.capAnswer(TT, WT)
      }
      capAnswer(TT, UT) {
        this.host.wait(4e3, (() => {
          this.sets.get(TT) === UT && UT.wanted && this.host.sendReady(hn(TT))
        }))
      }
      load(TT, UT, mT, WT, zT) {
        const MT = [...new Set(UT.urls)];
        Promise.allSettled(MT.map((TT => this.host.loadImage(TT, UT.orientation)))).then((gT => {
          const nT = gT.flatMap((TT => "fulfilled" === TT.status ? [TT.value] : [])),
            HT = WT === this.generation && this.sets.get(TT) === mT,
            kT = gT.findIndex((TT => "rejected" === TT.status));
          if (!HT || !mT.wanted) return this.kB ? void this.releaseAfterDispose(nT.map(Nn)) : (this.releaseAll(nT.map(Nn)), void(HT && this.sets.delete(TT)));
          kT < 0 ? this.loaded(TT, UT, MT, nT) : (this.releaseAll(nT.map(Nn)), this.host.sendReady(hn(TT)), zT < Sn.length ? this.host.wait(Sn[zT], (() => {
            WT === this.generation && this.sets.get(TT) === mT && (mT.wanted ? this.load(TT, UT, mT, WT, zT + 1) : this.sets.delete(TT))
          })) : (this.sets.delete(TT), this.host.onLoadFailed(TT, MT[kT], gT[kT].reason)))
        }))
      }
      loaded(TT, UT, mT, WT) {
        const [zT] = WT, MT = [zT.width, zT.height], gT = WT.every((TT => TT.width === MT[0] && TT.height === MT[1])), nT = UT.urls.length === Em.Tb.CubeFaces;
        if (!gT || MT[0] <= 0 || MT[1] <= 0 || MT[0] > 65535 || MT[1] > 65535 || nT && MT[0] !== MT[1]) {
          this.releaseAll(WT.map(Nn)), this.sets.delete(TT), this.host.sendReady(hn(TT));
          const mT = WT.map((TT => `${TT.width}x${TT.height}`));
          return void this.host.onLoadFailed(TT, UT.urls[0], new Error(`set ${TT}'s images can't make its texture: ${mT.join(", ")}`))
        }
        const HT = UT.urls.map((TT => WT[mT.indexOf(TT)].id)),
          kT = WT.map(Nn);
        this.sets.set(TT, {
          state: "ready",
          images: HT,
          distinct: kT,
          size: MT
        }), this.host.sendReady(En(TT, HT, MT))
      }
      release(TT) {
        const UT = this.sets.get(TT);
        "loading" === (null === UT || void 0 === UT ? void 0 : UT.state) ? UT.wanted = !1: "ready" === (null === UT || void 0 === UT ? void 0 : UT.state) && (this.releaseAll(UT.distinct), this.sets.delete(TT))
      }
      releaseAll(TT) {
        for (const UT of TT) this.host.gWT(UT)
      }
      releaseAfterDispose(TT) {
        for (const UT of TT) try {
          this.host.gWT(UT)
        } catch {}
      }
    }

    function Nn(TT) {
      return TT.id
    }

    function En(TT, UT, mT) {
      const WT = new Uint8Array(Em.Tb.SkyImagesReadyBytes),
        zT = new DataView(WT.buffer);
      return zT.setUint16(0, TT, !0), zT.setUint16(2, UT.length, !0), zT.setUint16(4, mT[0], !0), zT.setUint16(6, mT[1], !0), UT.slice(0, Em.Tb.CubeFaces).forEach(((TT, UT) => {
        zT.setUint32(8 + 4 * UT, TT, !0)
      })), WT
    }

    function hn(TT) {
      const UT = new Uint8Array(Em.Tb.SkyImagesReadyBytes),
        mT = new DataView(UT.buffer);
      return mT.setUint16(0, TT, !0), mT.setUint16(2, Em.Tb.Failed, !0), UT
    }
    let Dn = Promise.resolve();
    async function An(TT, UT) {
      let mT;
      try {
        mT = await (0, Kn.M)(TT)
      } catch (MT) {
        throw new Cn.d("fetch", TT, {
          cause: MT
        })
      }
      const WT = Dn.then((() => async function(TT, UT) {
        const mT = new Blob([TT.slice()]);
        let WT = await createImageBitmap(mT, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: UT
        });
        const zT = 1024 / Math.max(WT.width, WT.height);
        if (zT < 1) {
          const TT = WT;
          try {
            WT = await createImageBitmap(TT, {
              resizeWidth: Math.max(1, Math.round(TT.width * zT)),
              resizeHeight: Math.max(1, Math.round(TT.height * zT)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            TT.close()
          }
        }
        return WT
      }(mT, UT)));
      let zT;
      Dn = WT.catch((() => {}));
      try {
        zT = await WT
      } catch (MT) {
        throw new Cn.d("decode", TT, {
          cause: MT
        })
      }
      return {
        id: (0, Cn.o)(zT),
        width: zT.width,
        height: zT.height
      }
    }
    var Rn = mT(2273),
      TH = mT(34090),
      UH = mT(39346);
    const mH = Rn.g.length,
      WH = new Set([...Rn.g, "earth"]);

    function zH(TT) {
      const UT = [],
        mT = [],
        WT = (TT, WT) => {
          if ("custom" === WT.type) {
            mT.push({
              id: TT,
              kind: Em.Tb.KindCustom,
              set: UT.length,
              earth: null
            });
            const zT = [WT.px, WT.py, WT.pz, WT.nx, WT.ny, WT.nz];
            UT.push({
              urls: (0, UH.g)(zT),
              orientation: "none"
            })
          } else mT.push({
            id: TT,
            kind: Em.Tb.KindEarth,
            set: 0,
            earth: WT
          })
        };
      Rn.g.forEach(((UT, mT) => {
        var zT;
        WT(mT, null !== (zT = MH(TT[UT])) && void 0 !== zT ? zT : TH.j[UT])
      }));
      const zT = MH(TT.earth);
      "earth" === (null === zT || void 0 === zT ? void 0 : zT.type) && WT(mH, zT);
      const MT = new TextEncoder,
        gT = [],
        nT = [];
      for (const [pT, BT] of Object.entries(TT)) {
        const TT = WH.has(pT) ? null : MH(BT);
        if (null === TT) continue;
        const UT = MT.encode(pT);
        UT.length > 255 ? nT.push(`Ignoring texture pack skybox ${pT}, whose name is over 255 bytes`) : gT.length === Em.Tb.MaxAdded ? nT.push(`Ignoring texture pack skybox ${pT}, past the ${Em.Tb.MaxAdded} skies a pack can add`) : (gT.push(UT), WT(Em.Tb.AddedId, TT))
      }
      const HT = UT.length;
      UT.push({
        urls: TH.f.map((TT => TH.h + TT)),
        orientation: "none"
      }), UT.push({
        urls: [TH.i],
        orientation: "flipY"
      }), UT.push({
        urls: [TH.d],
        orientation: "flipY"
      });
      const kT = Em.Tb.SkyTableHeaderBytes + mT.length * Em.Tb.SkyTableEntryBytes,
        jT = new Uint8Array(kT + gT.reduce(((TT, UT) => TT + 1 + UT.length), 0)),
        lT = new DataView(jT.buffer);
      lT.setUint16(0, HT, !0), lT.setUint16(2, HT + 1, !0), lT.setUint16(4, HT + 2, !0), lT.setUint16(6, mT.length, !0), mT.forEach(((TT, UT) => {
        const mT = Em.Tb.SkyTableHeaderBytes + UT * Em.Tb.SkyTableEntryBytes;
        lT.setUint16(mT, TT.id, !0), lT.setUint8(mT + 2, TT.kind);
        const WT = mT + 4;
        TT.earth ? function(TT, UT, mT) {
          const WT = TT;
          let zT = 0,
            MT = 0;
          for (const [gT, nT] of gH) {
            const TT = WT[gT];
            "number" === typeof TT && Number.isFinite(TT) && (UT.setFloat32(mT + 4 * nT, TT, !0), zT |= 1 << nT)
          }
          for (const [gT, nT, HT] of nH) {
            const TT = WT[gT];
            Array.isArray(TT) && 3 === TT.length && TT.every((TT => "number" === typeof TT && Number.isFinite(TT))) && (TT.forEach(((TT, WT) => {
              UT.setFloat32(mT + HT + 4 * WT, TT, !0)
            })), zT |= nT)
          }
          HH.forEach(((TT, MT) => {
            let [gT, nT] = TT;
            const HT = WT[gT];
            "number" === typeof HT && Number.isFinite(HT) && (UT.setFloat32(mT + Em.q.CameraOffsetAt + 4 * MT, HT, !0), zT |= nT)
          }));
          for (const [gT, nT] of kH) {
            const TT = WT[gT];
            null !== TT && void 0 !== TT && (zT |= nT, TT && (MT |= nT >>> 14))
          }
          UT.setUint32(mT + Em.q.PresentAt, zT, !0), UT.setUint8(mT + Em.q.FlagsAt, MT)
        }(TT.earth, lT, WT) : lT.setUint16(WT, TT.set, !0)
      }));
      let LT = kT;
      for (const pT of gT) jT[LT] = pT.length, jT.set(pT, LT + 1), LT += 1 + pT.length;
      return {
        payload: jT,
        sets: UT,
        leftOut: nT
      }
    }

    function MH(TT) {
      if ("object" !== typeof TT || null === TT) return null;
      const UT = TT;
      if ("earth" === UT.type) return TT;
      return "custom" === UT.type && ["px", "py", "pz", "nx", "ny", "nz"].every((TT => {
        const mT = UT[TT];
        return "string" === typeof mT && mT.length > 0
      })) ? TT : null
    }
    const gH = [
        ["inclination", Em.q.Inclination],
        ["turbidity", Em.q.Turbidity],
        ["luminance", Em.q.Luminance],
        ["rayleigh", Em.q.Rayleigh],
        ["mieCoefficient", Em.q.MieCoefficient],
        ["mieDirectionalG", Em.q.MieDirectionalG],
        ["distance", Em.q.Distance],
        ["azimuth", Em.q.Azimuth]
      ],
      nH = [
        ["sunPosition", Em.q.SunPosition, Em.q.SunPositionAt],
        ["up", Em.q.Up, Em.q.UpAt],
        ["vertexTint", Em.q.VertexTint, Em.q.VertexTintAt]
      ],
      HH = [
        ["xCameraOffset", Em.q.CameraOffsetX],
        ["yCameraOffset", Em.q.CameraOffsetY],
        ["zCameraOffset", Em.q.CameraOffsetZ]
      ],
      kH = [
        ["useSunPosition", Em.q.UseSunPosition],
        ["dithering", Em.q.Dithering],
        ["infiniteDistance", Em.q.InfiniteDistance]
      ];

    function jH(TT, UT, mT) {
      const WT = new LH({
        writeCmd: TT,
        warn: UT,
        followPack: lH(mT, UT)
      });
      return WT.start(), WT
    }

    function lH(TT, UT) {
      return mT => {
        let WT = () => {};
        const zT = TT((TT => {
          WT(), WT = () => {}, null !== TT ? WT = TT.subscribe((TT => {
            mT(function(TT, UT, mT) {
              if ("object" !== typeof TT || null === TT) return null;
              const WT = TT.skyBoxes;
              if ("object" !== typeof WT || null === WT) return null;
              if ("player" === UT) return WT;
              return Object.fromEntries(Object.entries(WT).filter((TT => {
                let [UT, WT] = TT;
                return !! function(TT) {
                  if ("object" !== typeof TT || null === TT) return !1;
                  return "earth" === TT.type || Object.entries(TT).every((TT => {
                    let [UT, mT] = TT;
                    return "type" === UT || ("" === (WT = mT) || null !== function(TT) {
                      var UT, mT, WT;
                      return "string" !== typeof TT ? null : null !== (UT = null === (mT = pH.exec(TT)) || void 0 === mT || null === (WT = mT.groups) || void 0 === WT ? void 0 : WT.base64) && void 0 !== UT ? UT : null
                    }(WT));
                    var WT
                  }))
                }(WT) || (mT(`Ignoring texture pack skybox ${UT}, whose faces are not all data URLs`, null), !1)
              })))
            }(TT.pack, null === TT.gameSource ? "player" : "customGame", UT))
          })) : mT(null)
        }));
        return () => {
          zT(), WT()
        }
      }
    }
    class LH {
      constructor(TT) {
        var UT, mT, WT;
        this.host = TT, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.kB = !1, this.wait = null !== (UT = TT.wait) && void 0 !== UT ? UT : (TT, UT) => {
          setTimeout(UT, TT)
        }, this.loader = new Gn({
          loadImage: null !== (mT = TT.loadImage) && void 0 !== mT ? mT : An,
          gWT: null !== (WT = TT.gWT) && void 0 !== WT ? WT : Cn.s,
          sendReady: TT => {
            this.queue.push({
              kind: Em.Tb.SkyImagesReady,
              payload: TT
            })
          },
          onLoadFailed: (UT, mT, WT) => {
            TT.warn(`sky image set ${UT} (${mT}) didn't load: the last sky stays`, WT)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(rn.c, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((TT => {
          this.write(null !== TT && void 0 !== TT ? TT : {})
        }))
      }
      onEvent(TT) {
        this.loader.onEvent(TT)
      }
      drain() {
        if (0 === this.queue.length) return;
        let TT = 0;
        for (; TT < this.queue.length && this.host.writeCmd(this.queue[TT].kind, 0, this.queue[TT].payload);) TT++;
        TT > 0 && this.queue.splice(0, TT)
      }
      dispose() {
        this.kB = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(TT) {
        if (this.kB) return;
        const UT = zH(TT);
        if (!(this.written && (mT = this.written, WT = UT, mT.payload.length === WT.payload.length && mT.payload.every(((TT, UT) => TT === WT.payload[UT])) && mT.sets.length === WT.sets.length && mT.sets.every(((TT, UT) => {
            const mT = WT.sets[UT];
            return TT.orientation === mT.orientation && TT.urls.length === mT.urls.length && TT.urls.every(((TT, UT) => TT === mT.urls[UT]))
          }))))) {
          var mT, WT;
          for (const TT of UT.leftOut) this.host.warn(TT, null);
          this.written = UT, this.loader.reset(UT.sets), this.queue = this.queue.filter((TT => TT.kind !== Em.Tb.SkyImagesReady)), this.queue.push({
            kind: Em.Tb.SkyTable,
            payload: UT.payload
          })
        }
      }
    }
    const pH = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var BH = mT(2901),
      ZH = mT(3124),
      cH = mT(301),
      vH = mT(184),
      fH = mT(2910),
      qH = mT(2918),
      iH = mT(278),
      bH = mT(280),
      OH = mT(3023),
      eH = mT(3052),
      YH = mT(3064),
      JH = mT(115),
      xH = mT(340),
      dH = mT(40975);
    class wH {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, rz.m)(qW.M, (TT => {
          this.onReply((0, Cz.h)(qW.M, TT), performance.now())
        }))
      }
      onFrame(TT, UT) {
        null === this.id ? this.id = TT : TT !== this.id && (this.id = TT, this.sentMs = document.hidden ? null : UT)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(TT, UT) {
        TT === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(UT - this.sentMs), this.sentMs = null)
      }
      take() {
        const TT = this.roundTripMs;
        return this.roundTripMs = null, TT
      }
      stop() {
        this.stopReplies()
      }
    }
    class tH {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(TT, UT, mT, WT) {
        const zT = TT - this.sampled >>> 0,
          MT = UT - this.timed >>> 0,
          gT = mT - this.frameUs >>> 0,
          nT = this.primed;
        return this.sampled = TT, this.timed = UT, this.frameUs = mT, this.primed = !0, !(!nT || zT > 64 || MT > 64) && (WT && gT <= 1e6 * MT && (this.windowTimed += MT, this.windowUs += gT), WT && zT > 0)
      }
      reset() {}
      snapshotAndReset() {
        const TT = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: TT,
          submitToDoneMs: null
        }
      }
    }
    const aH = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class yH {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(TT, UT) {
        const mT = Math.min(4096, this.count + UT);
        this.samples.fill(TT, this.count, mT), this.count = mT
      }
      clear() {
        this.count = 0
      }
      take() {
        const TT = this.count;
        if (this.count = 0, TT < 30) return aH;
        const UT = this.samples.subarray(0, TT).sort(),
          mT = mT => UT[Math.min(TT - 1, Math.floor(mT * TT))];
        return {
          lagP50Ms: mT(.5),
          lagP90Ms: mT(.9)
        }
      }
    }
    class XH {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new yH
      }
      onFrame(TT, UT) {
        const mT = TT.headerWord(Em.F.Pacing),
          WT = TT.headerWord(Em.F.PacingLagUs),
          zT = (mT >>> Em.Y.LagsShift) - (this.word >>> Em.Y.LagsShift) & Em.Y.CountMask,
          MT = zT > 0 ? (WT - this.lagUs >>> 0) / zT / 1e3 : 0,
          gT = this.primed && zT <= 64 && MT <= 6e4;
        this.word = mT, this.lagUs = WT, this.primed = !0, gT && UT && zT > 0 && 0 !== (mT & Em.Y.Defaulted) && this.lags.add(MT, zT)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(TT) {
        return TT ? this.lags.take() : (this.lags.clear(), aH)
      }
    }
    var IH = mT(321);

    function QH() {
      return Date.now() - performance.now()
    }
    class sH {
      constructor() {
        this.rafs = 0, this.fn = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = QH(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, IH.d)(), this.onBlur = () => {
          this.focused = !1, this.blurred = !0
        }, this.onFocus = () => {
          this.focused = !0
        }, this.onLifecycle = () => {
          this.resumed = !0
        }, window.addEventListener("blur", this.onBlur), window.addEventListener("focus", this.onFocus), document.addEventListener("freeze", this.onLifecycle), document.addEventListener("resume", this.onLifecycle)
      }
      animationFrame() {
        this.rafs++
      }
      paced() {
        (0 === this.fn || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.fn++, this.heldAtRaf = this.rafs
      }
      words(TT) {
        const UT = TT ? this.rafs - 1 : this.rafs;
        return function(TT) {
          let UT = 0 === TT.rafs ? "raf:none" : "raf:some";
          return TT.fn > 0 && (UT += " pace:held"), TT.heldRunMs > 1e4 && (UT += " pace:stalled"), TT.blurred && (UT += " blur"), TT.resumed && (UT += " resumed"), TT.embedded && (UT += " embedded"), TT.clockGainMs > 2e3 && (UT += " clockjump"), UT
        }({
          clockGainMs: QH() - this.startClockOffsetMs,
          rafs: UT,
          fn: this.fn,
          heldRunMs: this.fn > 0 && this.heldAtRaf === UT ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(TT) {
        this.rafs = 0, this.fn = 0, this.heldAtRaf = -1, this.startMs = TT, this.startClockOffsetMs = QH(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var FH = mT(34208),
      PH = mT(3032),
      VH = mT(41025),
      uH = mT(34206),
      CH = mT(2922),
      rH = mT(3038);
    const KH = {
      none: !0,
      compatibility_mode: !0,
      not_requested: !1,
      webgl_holdback: !1,
      off_after_loss: !1,
      old_intel_driver: !1,
      intel_gen9: !1,
      gpu_class_webgl: !1,
      gpu_wasm_arm: !1,
      safari_26: !1,
      no_webgpu_api: !1,
      no_adapter: !0,
      software_adapter: !0,
      adapter_error: !0,
      load_failed: !0,
      start_no_adapter: !0,
      device_failed: !0,
      start_failed: !0,
      _unloaded: null
    };

    function SH(TT) {
      return new GH(TT)
    }
    class GH {
      constructor(TT) {
        this.shell = TT, this.tracker = new qH.b, this.gpu = new tH, this.pacing = new XH, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new wH, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new sH, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, FH.e)(TT.backend, TT.canvas, TT.adapterVendor), this.tracker.start((() => !TT.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, CH.e)("wasm", (() => {
          const {
            n: UT,
            sampleCount: mT
          } = (0, VH.f)();
          return `${TT.backend}, quality steps aim at up to ${rH.b.target.maxFps} fps, pixel n ${UT}, msaa ${mT}`
        }), (UT => {
          UT.setLoadCounts(TT.readLoadCounts), this.frameDebug = UT
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(TT) {
        var UT;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(TT), null === (UT = this.frameDebug) || void 0 === UT || UT.animationFrame()
      }
      sendsWent(TT, UT, mT) {
        this.ping.onFrame(TT.headerWord(Em.F.PingSent), UT), this.sendsStartMs = UT, this.sendsEndMs = mT
      }
      frameRan(TT, UT, mT, WT) {
        var zT;
        this.ping.onFrame(TT.headerWord(Em.F.PingSent), mT);
        const MT = this.tracker;
        this.pacing.onFrame(TT, MT.isSampling());
        const gT = TT.headerWord(Em.F.TickUs) / 1e3 + (0, zW.Q)();
        var nT;
        (MT.hq(gT), null === (zT = this.frameDebug) || void 0 === zT || zT.wasmFrame(TT, UT, mT, WT, MT.isSampling(), gT), null !== this.game) && (null === (nT = this.frameDebug) || void 0 === nT || nT.inGame());
        const HT = this.sendsStartMs >= UT ? this.sendsEndMs - this.sendsStartMs : 0,
          kT = Math.max(0, mT - UT - gT - HT);
        if ("drawn" !== WT) return void("paced" === WT ? (this.pacedCpuMs += kT, this.stallGap.paced()) : "skipped" === WT && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(UT, !0), MT.onFrameStart(UT);
        this.gpu.onFrame(TT.headerWord(Em.F.GpuSampled), TT.headerWord(Em.F.GpuTimed), TT.headerWord(Em.F.GpuFrameUs), MT.isSampling()) && MT.onGpuSampleStarted(), MT.onFrameCpu(kT + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(UT)
      }
      framePaced() {
        var TT;
        this.stallGap.paced(), null === (TT = this.frameDebug) || void 0 === TT || TT.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const TT of this.timers) clearInterval(TT);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const TT = this.shell.joinedGame();
        if (TT !== this.game) {
          var UT;
          if (this.game = TT, null !== TT) null === (UT = this.frameDebug) || void 0 === UT || UT.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== TT
      }
      checkMainStall(TT, UT) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const mT = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          WT = this.lastDrawnMs < 0 ? 0 : TT - this.lastDrawnMs;
        this.lastDrawnMs = TT;
        const zT = !this.stallPending && WT > 5e3,
          MT = zT ? this.stallGap.words(UT) : "";
        this.stallGap.restart(TT), this.stallPending || (zT ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(WT, mT.blockingSinceMark(), MT)
        }), 0)) : mT.markFrame(TT))
      }
      countFpsFrame(TT) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = TT
        }
        this.fpsFrames++;
        const UT = TT - this.fpsSpanStartMs;
        if (!(UT < YH.d)) {
          if (!document.hidden) {
            const TT = 1e3 * this.fpsFrames / UT;
            this.firstSpanFps ??= TT, this.initialFps = this.firstSpanFps, this.fpsOverTime = TT
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = TT
        }
      }
      flush() {
        const TT = this.followGame(),
          {
            cpuFrameMs: UT,
            refreshHz: mT,
            cpuBottleneck: zT,
            frameIntervalCv: MT,
            ...gT
          } = this.tracker.snapshotAndReset(),
          nT = this.shell.inGame(),
          HT = nT && this.inGameAtLastFlush,
          kT = HT ? gT : (0, fH.g)(gT),
          jT = this.pacing.snapshotAndReset(HT);
        if (this.inGameAtLastFlush = nT, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !TT || !this.shell.canSend()) return;
        const lT = performance.now(),
          pT = (0, eH.s)((0, eH.r)(lT), this.unsentPage),
          ZT = function(TT, UT, mT, zT, MT, gT, nT, HT) {
            var kT, jT, lT, LT, pT;
            const BT = {},
              {
                canvas: ZT
              } = TT,
              cT = (0, OH.g)({
                refreshHz: UT.refreshHz,
                msaa: TT.msaa(),
                autoMsaaOff: (0, uH.b)()
              });
            for (const vT of (0, ZH.i)()) {
              const fT = vT.name;
              let qT;
              if ((0, cH.C)(fT)) qT = (0, eH.c)(fT);
              else if ((0, eH.j)(fT)) qT = HT[fT];
              else if ((0, OH.k)(fT)) qT = cT[fT];
              else switch (fT) {
                case "fps":
                  qT = zT;
                  break;
                case "eH":
                  qT = MT;
                  break;
                case "wH":
                  qT = (0, PH.z)((0, VH.f)().n);
                  break;
                case "tH":
                  qT = Math.max(ZT.width, ZT.height);
                  break;
                case "aH":
                  qT = Math.min(ZT.width, ZT.height);
                  break;
                case "yH":
                  qT = navigator.hardwareConcurrency || null;
                  break;
                case "XH":
                  qT = (0, Dz.getWebGpuSupported)();
                  break;
                case "IH":
                  qT = null === TT.fallbackReason ? null : KH[TT.fallbackReason];
                  break;
                case "QH":
                  qT = UT.cpuFrameMs;
                  break;
                case "sH":
                  qT = UT.refreshHz;
                  break;
                case "FH":
                  qT = UT.cpuBottleneck;
                  break;
                case "PH":
                  qT = UT.frameIntervalCv;
                  break;
                case "VH":
                  qT = UT.frameMs;
                  break;
                case "uH":
                  qT = UT.tickMs;
                  break;
                case "SH":
                  qT = UT.mainBusyShare;
                  break;
                case "GH":
                  qT = UT.mainProbeDelayMs;
                  break;
                case "CH":
                  qT = UT.longAnimationFramesPerMin;
                  break;
                case "rH":
                  qT = UT.longAnimationFrameTimeShare;
                  break;
                case "KH":
                  qT = UT.longAnimationFrameScriptShare;
                  break;
                case "NH":
                  qT = UT.gpuPassMs;
                  break;
                case "EH":
                  qT = UT.gpuSubmitToDoneMs;
                  break;
                case "hH":
                  qT = mT.lagP50Ms;
                  break;
                case "DH":
                  qT = mT.lagP90Ms;
                  break;
                case "Hk":
                  qT = (0, BH.f)(gT);
                  break;
                case "dH":
                  qT = nT;
                  break;
                case "oH":
                case "AH":
                case "RH":
                case "Tk":
                case "Uk":
                case "mk":
                case "Wk":
                case "zk":
                case "Mk":
                case "gk":
                case "nk":
                case "kk":
                case "jk":
                case "lk":
                case "Lk":
                  qT = null;
                  break;
                case "ak":
                  qT = (0, Dz.getPlatformType)();
                  break;
                case "yk":
                  qT = (0, Dz.getGpuVendor)();
                  break;
                case "Xk":
                  qT = dH.e[TT.backend];
                  break;
                case "Ik":
                  qT = (0, JH.b)();
                  break;
                case "Qk":
                  qT = (0, Dz.getOperatingSystem)();
                  break;
                case "sk":
                  qT = (0, Dz.getTrafficSource)();
                  break;
                case "Fk":
                  qT = null !== (kT = WT.b.get("gameEntrySource")) && void 0 !== kT ? kT : vH.h;
                  break;
                case "Pk":
                  qT = null !== (jT = UT.frameLimiter) && void 0 !== jT ? jT : vH.h;
                  break;
                case "Vk":
                  qT = (0, iH.i)();
                  break;
                case "uk":
                  qT = null !== (lT = (0, bH.d)()) && void 0 !== lT ? lT : vH.h;
                  break;
                case "Ck":
                  qT = (0, iH.b)(ZT.width, ZT.height);
                  break;
                case "rk":
                  qT = (0, ZH.m)(-(new Date).getTimezoneOffset());
                  break;
                case "Gk":
                  qT = null !== (LT = TT.fallbackReason) && void 0 !== LT ? LT : vH.h;
                  break;
                case "hk":
                  qT = "ready";
                  break;
                case "Dk":
                  qT = (0, Dz.getSoftwareRenderer)();
                  break;
                case "Sk":
                  qT = null !== TT.shaderPackReach() ? "true" : "false";
                  break;
                case "Ak":
                  qT = null !== (pT = TT.shaderPackReach()) && void 0 !== pT && pT.sceneDepth ? "true" : "false";
                  break;
                case "Rk": {
                  const UT = TT.shaderPackReach();
                  qT = null !== UT && void 0 !== UT && UT.sunShadow ? "all" : null !== UT && void 0 !== UT && UT.airShadow ? "air" : "none";
                  break
                }
                case "Tj":
                  qT = xH.v;
                  break;
                case "nj":
                  qT = (0, eH.k)();
                  break;
                case "Kk": {
                  const UT = TT.dZ();
                  qT = null === UT ? vH.h : String(UT);
                  break
                }
                case "Nk":
                case "Ek":
                  qT = vH.h;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${fT}`)
              }
              if (void 0 === qT) throw new Error(`Metric ${fT} has no value`);
              BT[fT] = qT
            }
            return BT
          }(this.shell, {
            cpuFrameMs: UT,
            refreshHz: mT,
            cpuBottleneck: zT,
            frameIntervalCv: MT,
            ...kT
          }, jT, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), pT);
        if (! function(TT, UT, mT) {
            return (0, SU.d)(), TT(BT.n.Send, UT, mT)
          }(this.shell.writeCmd, LT.xd, function(TT) {
            const UT = (0, sT.g)((0, EU.f)(TT)),
              mT = new Uint8Array(BT.Sd.BYTES + UT.length);
            return new DataView(mT.buffer).setUint16(0, EU.e.AnalyticsUpdate, !0), mT.set(UT, BT.Sd.BYTES), mT
          }(ZT))) return this.unsentPage = pT, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, BH.e), (0, eH.q)(ZT, "wasm", lT)
      }
    }
    var NH = mT(39728);

    function EH(TT, UT, mT) {
      const WT = new Map;
      return (0, NH.b)(((TT, mT, WT) => UT.Gg(TT, mT, WT)), ((UT, mT, zT) => {
        const MT = `${UT},${mT},${zT}`;
        return WT.has(MT) || WT.set(MT, (0, PU.e)(TT, UT, mT, zT)), WT.get(MT)
      }), mT)
    }
    var hH = mT(39735),
      DH = mT(41023);

    function oH(TT) {
      const UT = null !== TT && 0 !== (BT.x.playerFlags(TT.api.apiView, 0) & BT.Cd.CursorAim);
      UT !== (0, DH.p)() && (0, DH.H)(UT, null !== TT)
    }

    function AH(TT) {
      return (0, fW.c)(qW.D, TT)
    }
    var RH = mT(41163);
    const Tk = new MT.h((TT => mT(42768)(`./${TT}/${TT}Client`)));
    let Uk = null,
      mk = null;
    async function Wk(TT) {
      Uk ??= mT.e(27).then((() => mT(39278))).then((TT => {
        mk = TT.createDefaultClientPlugins
      }), (TT => {
        throw Uk = null, TT
      })), await Promise.all([Tk.load(TT), Uk])
    }

    function zk(TT) {
      TT.load(new QU(NW, new DW))
    }
    let Mk = !1;
    const gk = new WeakMap;

    function nk(TT) {
      try {
        TT()
      } catch (UT) {
        console.error("[bloxd-wasm-client] a session-end step failed", UT)
      }
    }

    function Hk(TT, UT) {
      ! function() {
        var TT, UT;
        KW.Howler.volume();
        const mT = KW.Howler;
        null === (TT = mT._autoResume) || void 0 === TT || TT.call(mT), null === (UT = mT._autoSuspend) || void 0 === UT || UT.call(mT)
      }(), UT.audio.prepare();
      const mT = new iT(UT.core, UT.memory, UT.audio);
      let MT;
      try {
        MT = new vz(mT, UT.options)
      } catch (LT) {
        return TT.crash(qz.w, LT), null
      }(0, HT.e)(fz(mT, MT));
      const jT = new tn({
        running: TT,
        api: mT,
        core: UT.core,
        memory: UT.memory,
        staleOr: UT.staleOr,
        reportFault: UT.reportReplayFault,
        options: UT.options,
        sessionInfo: UT.sessionInfo,
        replayShaderPack: UT.replayShaderPack
      });
      (0, zW.I)();
      const lT = new FW({
        api: mT,
        tables: MT,
        sessionInfo: UT.sessionInfo,
        gameFactory: TT => Tk.loadedFactory(TT),
        defaultPlugins: (TT, UT, mT, WT) => {
          if (null === mk) throw new Error("The default plugins started before they loaded");
          return mk(TT, UT, mT, WT)
        },
        serverOptions: UT.options,
        onNetEvent: TT => {
          jT.netEvent(TT), UT.onNetEvent(TT)
        },
        setLocalOptions: UT => {
          yn(TT, {
            changes: UT,
            reset: !1
          })
        },
        playSound: (TT, mT, WT, zT, MT, gT, nT) => UT.audio.playGame(TT, mT, WT, zT, MT, gT, nT),
        preloadSounds: TT => {
          UT.audio.preload(function(TT) {
            const UT = [];
            for (const mT of TT) {
              const TT = XU(mT);
              TT >= 0 && UT.push(fU[TT])
            }
            return UT
          }(TT))
        },
        onSessionEnd: () => {
          nk(zT.m), nk(Wz), nk((() => {
            WT.b.set({
              openInGameMenuName: null
            })
          })), nk((() => {
            UT.audio.endSession()
          }))
        },
        beforeWrite: UT.beforeWrite,
        beforeOp: UT.beforeOp,
        cameraScreen: mz,
        showCameraFacing: zz,
        onEventOverflow: UT.onEventOverflow,
        screenBandY: nT.i,
        replayEntities: jT.entityHooks,
        hasPackModel: UT.hasPackModel
      });
      return lT.attach(TT), gk.set(lT, jT), CW(lT.items, UT.audio),
        function(TT) {
          TT.setClientFreeCameraGrant("isDev", !1);
          const UT = UT => {
            TT.setClientFreeCameraGrant("hasDeveloperRank", UT.playerHasRank("developer"))
          };
          (0, gT.k)("userContextUpdated", UT)
        }(lT), Mk || (Mk = !0, (0, gT.k)("appManagerUpdated|openInGameMenuName", (TT => {
          !TT && (0, kT.n)().includes(kT.d) && (0, kT.o)(kT.d)
        }))), lT
    }

    function kk(TT) {
      try {
        TT.closeGame()
      } finally {
        var UT;
        null === (UT = gk.get(TT)) || void 0 === UT || UT.stop(), gk.delete(TT)
      }
    }
  },
  42768: (TT, UT, mT) => {
    var WT = {
      "./bedwars/bedwarsClient": [39390, 9],
      "./bridgeBattle/bridgeBattleClient": [39398, 10],
      "./buildAFactory2/buildAFactory2Client": [38616, 76, 75, 74, 230, 225, 11],
      "./classic/classicClient": [39403, 12],
      "./clutch/clutchClient": [39411, 13],
      "./containmentBreach/containmentBreachClient": [39420, 224, 14],
      "./cooking/cookingClient": [39543, 15],
      "./defusal/defusalClient": [39552, 16],
      "./frontline/frontlineClient": [39557, 76, 75, 74, 17],
      "./goalRush/goalRushClient": [39559, 18],
      "./luckyBedwars/luckyBedwarsClient": [39567, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39574, 20],
      "./oneBlock/oneBlockClient": [39582, 21],
      "./plots/plotsClient": [39589, 247, 224, 22],
      "./pvpCiv/pvpCivClient": [39651, 23],
      "./skyIslands/skyIslandsClient": [39659, 24],
      "./skyblock/skyblockClient": [38663, 76, 239, 230, 192, 25],
      "./tsunami/tsunamiClient": [39666, 26]
    };

    function zT(TT) {
      if (!mT.o(WT, TT)) return Promise.resolve().then((() => {
        var UT = new Error("Cannot find module '" + TT + "'");
        throw UT.code = "MODULE_NOT_FOUND", UT
      }));
      var UT = WT[TT],
        zT = UT[0];
      return Promise.all(UT.slice(1).map(mT.e)).then((() => mT(zT)))
    }
    zT.keys = () => Object.keys(WT), zT.id = 42768, TT.exports = zT
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);