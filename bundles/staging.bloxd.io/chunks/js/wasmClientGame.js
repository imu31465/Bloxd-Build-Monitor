export const id = 57;
export const ids = [57];
export const modules = {
  36707: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => VG,
      g: () => kG,
      k: () => YG,
      l: () => UG,
      m: () => zG
    });
    var wG = ZG(612),
      SG = ZG(1721),
      LG = ZG(4818);
    class yG {
      constructor(GG, bG) {
        this.width = GG, this.rp = bG, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(GG * bG)
      }
      push(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = this.data,
          wG = this.next * this.width;
        for (let SG = 0; SG < this.width; SG++) ZG[wG + SG] = GG[bG + SG];
        this.next = (this.next + 1) % this.rp, this.size = Math.min(this.size + 1, this.rp)
      }
      rows() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
        const ZG = [],
          wG = (this.next - this.size + this.rp) % this.rp;
        for (let SG = 0; SG < this.size; SG++) {
          const LG = (wG + SG) % this.rp * this.width;
          this.data[LG + GG] >= bG && ZG.push(Array.from(this.data.subarray(LG, LG + this.width)))
        }
        return ZG
      }
      lines() {
        return this.rows().map((GG => GG.join(",")))
      }
    }
    const kG = 10,
      UG = {
        idle: 0,
        vQ: 1,
        vF: 2,
        lF: 3,
        Ld: 4
      },
      YG = {
        none: 0,
        skipped: 1,
        paced: 2,
        drawn: 3
      },
      VG = {
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
      pG = 12e3,
      fG = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
      QG = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
      KG = ["nowMs", "dtMs", "heading", "pitch", "kind"],
      hG = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
      dG = ["nowMs", "change", "count"];

    function JG(GG) {
      return "js" === GG ? VG.jsClient : VG.wasmClient
    }
    class rG {
      constructor() {
        this.steps = new yG(kG, pG), this.events = new yG(QG.length, pG), this.frames = new yG(KG.length, pG), this.cameraSets = new yG(LG.h, 256), this.changes = new yG(dG.length, 256)
      }
    }
    const zG = new class {
      constructor() {
        this.rings = null, this.sample = new Float64Array(QG.length), this.startedClient = null, this.startedAtMs = 0
      }
      get client() {
        return this.startedClient
      }
      start(GG, bG) {
        this.startedClient = GG, this.startedAtMs = performance.now(), null !== this.rings ? this.change(JG(GG)) : bG && this.allocate()
      }
      lockGained() {
        this.allocate(), this.change(VG.lockGained)
      }
      allocate() {
        null === this.rings && (this.rings = new rG, null !== this.startedClient && this.changeAt(this.startedAtMs, JG(this.startedClient), 1))
      }
      step(GG, bG) {
        var ZG;
        GG[bG + 6] !== UG.Ld && (null === (ZG = this.rings) || void 0 === ZG || ZG.steps.push(GG, bG))
      }
      cameraSet(GG, bG) {
        var ZG;
        null === (ZG = this.rings) || void 0 === ZG || ZG.cameraSets.push(GG, bG)
      }
      mouseMove(GG, bG) {
        const ZG = this.rings;
        if (null === ZG) return;
        const wG = this.sample;
        wG[0] = GG.timeStamp, wG[1] = performance.now(), wG[2] = GG.movementX, wG[3] = GG.movementY, wG[4] = bG ? 1 : 0, ZG.events.push(wG)
      }
      frame(GG, bG, ZG, wG) {
        const SG = this.rings;
        if (null === SG || wG === YG.none) return;
        const LG = this.sample;
        LG[0] = performance.now(), LG[1] = GG, LG[2] = bG, LG[3] = ZG, LG[4] = wG, SG.frames.push(LG)
      }
      change(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.changeAt(performance.now(), GG, bG)
      }
      changeAt(GG, bG, ZG) {
        const wG = this.rings;
        if (null === wG) return;
        const SG = this.sample;
        SG[0] = GG, SG[1] = bG, SG[2] = ZG, wG.changes.push(SG)
      }
      dumpText() {
        var GG, bG;
        const ZG = this.rings;
        return [`look records (${this.startedClient}): ${fG.join(",")}`, ...null !== (GG = null === ZG || void 0 === ZG ? void 0 : ZG.steps.lines()) && void 0 !== GG ? GG : [], `mousemove events: ${QG.join(",")}`, ...null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.events.lines()) && void 0 !== bG ? bG : []].join("\n")
      }
      toJson(GG, bG) {
        var ZG;
        const SG = GG - 6e4,
          LG = this.rings,
          yG = function(GG, bG) {
            var ZG;
            let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const LG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.rows(wG, SG)) && void 0 !== ZG ? ZG : [];
            return {
              columns: bG,
              fromMs: 0 === LG.length ? null : LG[0][wG],
              rows: LG
            }
          };
        return {
          version: wG.e,
          client: null !== (ZG = this.startedClient) && void 0 !== ZG ? ZG : "not started",
          savedAt: (new Date).toISOString(),
          savedAtMs: GG,
          keptMs: 6e4,
          page: window.location.href,
          userAgent: navigator.userAgent,
          devicePixelRatio: window.devicePixelRatio,
          screen: {
            width: window.screen.width,
            height: window.screen.height
          },
          gd: null !== document.pointerLockElement,
          visibility: document.visibilityState,
          ...bG,
          outcomes: UG,
          frameKinds: YG,
          changes: VG,
          lookSteps: yG(null === LG || void 0 === LG ? void 0 : LG.steps, fG),
          mouseMoves: yG(null === LG || void 0 === LG ? void 0 : LG.events, QG, 1),
          frames: yG(null === LG || void 0 === LG ? void 0 : LG.frames, KG),
          cameraSets: yG(null === LG || void 0 === LG ? void 0 : LG.cameraSets, hG),
          pageChanges: yG(null === LG || void 0 === LG ? void 0 : LG.changes, dG)
        }
      }
      save(GG) {
        const bG = JSON.stringify(this.toJson(performance.now(), GG));
        (0, SG.b)(new Blob([bG], {
          type: "application/json"
        }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
      }
    }
  },
  39426: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      e: () => SG
    });
    var wG = ZG(19);

    function SG(GG) {
      return "refetchCode" === GG || "devDownloadJson" === GG || GG.startsWith("Plugin")
    }

    function LG(GG, bG) {
      "refetchCode" !== GG ? "Plugin|MobAiPlugin|ShowPetUi" !== GG ? Promise.all([ZG.e(109), ZG.e(110), ZG.e(105), ZG.e(107), ZG.e(218)]).then((() => ZG(42179))).then((ZG => {
        let {
          runClientGameMessage: wG
        } = ZG;
        wG(GG, bG)
      })).catch((bG => {
        console.error(`Game message ${GG} failed`, bG)
      })) : wG.l.xh("showPetUi", bG) : wG.l.xh("refetchCode")
    }
  },
  43029: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      d: () => SG
    });
    const wG = ["recording", "freecam", "keyframe"];

    function SG() {
      const GG = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(GG[1]) << 32n | BigInt(GG[0])
    }
  },
  34411: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG,
      g: () => UG
    });
    var wG = ZG(17);
    const SG = 24,
      LG = "farNametags",
      yG = 1e5;

    function kG() {
      var GG;
      return null === (GG = wG.e.get("showDistantNametags")) || void 0 === GG || GG
    }

    function UG() {
      var GG;
      return null !== (GG = function() {
        const GG = new URLSearchParams(window.location.search).get(LG),
          bG = null === GG || "" === GG ? NaN : Number(GG);
        return Number.isFinite(bG) && bG >= 0 ? Math.min(bG, yG) : null
      }()) && void 0 !== GG ? GG : kG() ? 0 : SG
    }
  },
  43025: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      blockIdOf: () => HU.c,
      clearWasmCameraScreen: () => wS,
      creativeItemIds: () => Zw.creativeItemIds,
      decodeMapSettings: () => NU,
      drainTextRerasters: () => sk.d,
      enchantmentPerksOf: () => Zw.enchantmentPerksOf,
      endGameHost: () => kY,
      followCursorAim: () => DU,
      followMenuPrefs: () => ZL,
      loadAudio: () => ZY,
      loadClientGame: () => bY,
      loadTextIcons: () => sk.g,
      rasterText: () => Ak.b,
      readBoardToEdit: () => TU,
      readDrawCensus: () => OU.f,
      setTextHost: () => sk.j,
      setTextLocalPlayer: () => sk.k,
      showInCreativeInvenOf: () => Zw.showInCreativeInvenOf,
      startGameHost: () => yY,
      startShellAnalytics: () => gU,
      startSkyFeed: () => UU,
      textChanged: () => sk.m,
      warmText: () => Ak.c,
      wasmCameraScreen: () => ZS
    });
    ZG(36841);
    var wG = ZG(17),
      SG = ZG(37171),
      LG = ZG(39569),
      yG = ZG(19),
      kG = ZG(3390),
      UG = ZG(37167),
      YG = ZG(1251),
      VG = ZG(589),
      pG = ZG(38649),
      fG = ZG(4810),
      QG = ZG(41018),
      KG = ZG(40954);
    const hG = KG.Jb / 4,
      dG = KG.o.PlaySound,
      JG = KG.o.SoundReset,
      rG = fG.bb.ReplayFailed,
      zG = fG.bb.RecorderEvent;
    class EG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = GG, this.memory = bG, this.audio = ZG, this.serverIds = new Int32Array(256).fill(KG.Wc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(KG.v.BYTES)), this.renderPtr = 0, this.rp = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new KG.W(GG, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.cSG(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(GG, bG) {
        const ZG = this.eventView();
        return new Uint8Array(ZG.buffer, ZG.byteOffset + GG, bG)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return KG.v.localId(this.apiView, 0)
      }
      localDeaths() {
        return KG.v.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const GG = this.apiView,
          bG = KG.v.entRenderPtr(GG, 0),
          ZG = KG.v.entVisPtr(GG, 0),
          wG = KG.v.entCapacity(GG, 0);
        if (bG !== this.renderPtr || ZG !== this.visPtr || wG !== this.rp || this.renderBuffer !== this.buffer) {
          this.renderPtr = bG, this.visPtr = ZG, this.rp = wG, this.renderBuffer = this.buffer;
          const GG = this.memoryView(Float32Array, bG, wG * hG, "the render array"),
            SG = this.memoryView(Uint8Array, ZG, wG, "the visibility array");
          this.renderCapacity = GG && SG ? wG : 0, this.render = GG && SG ? GG : new Float32Array(0), this.vis = GG && SG ? SG : new Uint8Array(0)
        }
      }
      memoryView(GG, bG, ZG, wG) {
        try {
          return (0, QG.o)(GG, this.memory().buffer, bG, ZG, wG)
        } catch (SG) {
          return this.keepCorruption(SG), null
        }
      }
      memoryData(GG, bG, ZG, wG) {
        try {
          return (0, QG.e)(this.memory().buffer, GG, bG, ZG, wG)
        } catch (SG) {
          return this.keepCorruption(SG), null
        }
      }
      reportCorruption(GG) {
        this.keepCorruption(new QG.c(GG))
      }
      keepCorruption(GG) {
        if (!(GG instanceof QG.c)) throw GG;
        this.corruption ??= GG
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(GG, bG, ZG) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: wG,
          len: SG
        } = GG;
        this.eventsPtr = wG, this.eventsLen = SG, this.eventsBuffer = null;
        const LG = this.eventView();
        for (let YG = 0; YG < SG;) {
          const GG = LG.getUint32(YG, !0),
            ZG = 65535 & GG,
            wG = GG >>> 16,
            SG = YG + fG.$;
          if (ZG === KG.o.EntitySpawned) {
            var yG;
            if (wG !== KG.Lb.BYTES) throw CG(ZG, YG, wG);
            const GG = KG.Lb.serverId(LG, SG);
            this.spawned(GG, KG.Lb.index(LG, SG), KG.Lb.kind(LG, SG)), null === (yG = bG.entityAdded) || void 0 === yG || yG.call(bG, GG)
          } else if ((ZG === KG.o.ChunkSlot || ZG === KG.o.EntityInfoChanged) && !(0, KG.ke)(ZG, LG, SG, wG, bG)) throw CG(ZG, YG, wG);
          YG = SG + (0, fG.ve)(wG)
        }
        try {
          var kG;
          null === (kG = bG.afterPrescan) || void 0 === kG || kG.call(bG), this.throwCorruption(), !ZG() && this.dispatch(GG, bG, ZG) && (this.throwCorruption(), this.applyListener(), bG.afterWalk(GG.kind)), this.throwCorruption()
        } catch (UG) {
          throw UG instanceof QG.c && (this.corruption ??= UG), UG
        } finally {
          ZG() || null !== this.corruption || this.applyDespawns(SG, bG)
        }
      }
      applyDespawns(GG, bG) {
        const ZG = this.eventView();
        for (let SG = 0; SG < GG;) {
          const GG = ZG.getUint32(SG, !0),
            LG = SG + fG.$;
          if ((65535 & GG) === KG.o.EntityDespawned && GG >>> 16 === KG.Lb.BYTES) {
            const GG = KG.Lb.serverId(ZG, LG);
            var wG;
            if (this.despawned(GG, KG.Lb.index(ZG, LG))) null === (wG = bG.entityRemoved) || void 0 === wG || wG.call(bG, GG)
          }
          SG = LG + (0, fG.ve)(GG >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(GG, bG, ZG) {
        const {
          len: wG,
          net: SG,
          netOffsets: LG
        } = GG;
        let yG = this.eventView(),
          kG = 0;
        for (let XG = 0; XG < wG;) {
          const GG = yG.getUint32(XG, !0),
            wG = 65535 & GG,
            uG = GG >>> 16,
            WG = XG + fG.$;
          let mG = !1;
          if (kG < SG.length && LG[kG] === XG) bG.netEvent(SG[kG]), kG++, mG = !0;
          else if (wG === fG.bb.LocalPlayerBound) {
            var UG;
            if (uG !== fG.Kb) throw CG(wG, XG, uG);
            null === (UG = bG.localPlayerBound) || void 0 === UG || UG.call(bG, yG.getInt32(WG, !0)), mG = !0
          } else if (wG === fG.bb.LocalHurt) {
            var YG;
            if (uG !== fG.Jb) throw CG(wG, XG, uG);
            null === (YG = bG.localHurt) || void 0 === YG || YG.call(bG, yG.getInt32(WG, !0), yG.getFloat32(WG + 4, !0), yG.getUint32(WG + 8, !0)), mG = !0
          } else if (wG === fG.bb.AttackHit) {
            var VG;
            if (uG !== fG.c) throw CG(wG, XG, uG);
            const GG = yG.getFloat32(WG, !0),
              ZG = yG.getFloat32(WG + 4, !0),
              SG = yG.getFloat32(WG + 8, !0),
              LG = yG.getUint32(WG + 12, !0);
            null === (VG = bG.attackHit) || void 0 === VG || VG.call(bG, GG, ZG, SG, 0 !== (LG & fG.n.Crit), 0 !== (LG & fG.n.HitSelf))
          } else if (wG === fG.bb.PhysicsType) {
            var pG;
            if (uG !== fG.ec) throw CG(wG, XG, uG);
            null === (pG = bG.physicsType) || void 0 === pG || pG.call(bG, yG.getUint32(WG, !0), yG.getInt32(WG + 4, !0)), mG = !0
          } else if (wG === fG.bb.VehicleEffect) {
            var QG;
            const GG = iG(yG, WG, uG);
            if (null === GG) throw CG(wG, XG, uG);
            null === (QG = bG.vehicleEffect) || void 0 === QG || QG.call(bG, GG.op, GG.name, GG.icon, GG.level, GG.durationMs), mG = !0
          } else if (wG === fG.bb.ZoomChanged) {
            var hG;
            if (uG !== fG.ae) throw CG(wG, XG, uG);
            null === (hG = bG.zoomChanged) || void 0 === hG || hG.call(bG, yG.getFloat32(WG, !0), yG.getUint8(WG + 4)), mG = !0
          } else if (wG === fG.bb.ZoomDisabled) {
            var EG;
            if (0 !== uG) throw CG(wG, XG, uG);
            null === (EG = bG.zoomDisabled) || void 0 === EG || EG.call(bG), mG = !0
          } else if (wG === fG.bb.GameCamera) {
            var oG;
            null === (oG = bG.gameCamera) || void 0 === oG || oG.call(bG, new Uint8Array(yG.buffer, yG.byteOffset + WG, uG).slice()), mG = !0
          } else if (wG === KG.o.ChunkSlot || wG === KG.o.EntityInfoChanged);
          else if (wG >= dG && wG <= JG) {
            if (this.audio && !this.audio.onAudioEvent(wG, yG, WG, uG)) throw CG(wG, XG, uG)
          } else if (wG >= rG && wG <= zG) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(wG, yG, WG, uG)) throw CG(wG, XG, uG);
              mG = !0
            }
          } else if (wG >= KG.ld && wG <= KG.od && wG !== fG.bb.EnvLighting) {
            if (!(0, KG.ke)(wG, yG, WG, uG, bG)) throw CG(wG, XG, uG);
            mG = !0
          }
          if (mG) {
            if (ZG()) return !1;
            yG = this.eventView()
          }
          XG = WG + (0, fG.ve)(uG)
        }
        return !ZG()
      }
      applyListener() {
        var GG;
        if (!this.audio) return;
        const bG = KG.v.audioViewPtr(this.apiView, 0),
          ZG = this.memory().buffer;
        let wG = this.audioView;
        (null === (GG = wG) || void 0 === GG ? void 0 : GG.buffer) === ZG && wG.byteOffset === bG || (wG = (0, QG.e)(ZG, bG, KG.x.BYTES, 8, "the audio view"), this.audioView = wG), wG && this.audio.applyListener(wG)
      }
      indexOf(GG) {
        return this.indexById.get("number" === typeof GG ? GG : +GG)
      }
      isLocal(GG) {
        return GG !== KG.Wc && GG === KG.v.localId(this.apiView, 0)
      }
      HJ(GG) {
        const bG = [0, 0, 0];
        return this.readPosition("number" === typeof GG ? GG : +GG, bG) ? bG : null
      }
      readPosition(GG, bG) {
        const ZG = this.apiView;
        if (void 0 !== this.indexById.get(GG) && this.isLocal(GG)) {
          for (let GG = 0; GG < 3; GG++) bG[GG] = KG.v.localPos(ZG, 0, GG);
          return !0
        }
        return this.readDrawnPosition(GG, bG)
      }
      readDrawnPosition(GG, bG) {
        const ZG = this.apiView,
          wG = this.indexById.get(GG);
        if (void 0 === wG || wG >= this.renderCapacity) return bG[0] = bG[1] = bG[2] = NaN, !1;
        const SG = wG * hG;
        for (let LG = 0; LG < 3; LG++) bG[LG] = this.render[SG + LG] + KG.v.origin(ZG, 0, LG);
        return !0
      }
      checkValid(GG) {
        return void 0 !== this.indexOf(GG)
      }
      isAlive(GG) {
        const bG = this.indexOf(GG);
        if (void 0 === bG) return null;
        if (this.ensureViews(), bG >= this.renderCapacity) return null;
        const ZG = this.vis[bG];
        return 0 === ZG ? null : 0 !== (ZG & KG.ge.Alive)
      }
      getEntityType(GG) {
        const bG = this.indexOf(GG);
        return void 0 === bG ? this.isLocal("number" === typeof GG ? GG : +GG) ? "Player" : null : XG(this.kinds[bG])
      }
      spawned(GG, bG, ZG) {
        if (bG >= 1048576) throw new QG.c(`entity ${GG} spawned at index ${bG}`);
        this.ensureIndex(bG), this.serverIds[bG] === GG && null !== this.idStr[bG] || (this.idStr[bG] = String(GG)), this.serverIds[bG] = GG, this.kinds[bG] = ZG, this.indexById.set(GG, bG)
      }
      despawned(GG, bG) {
        let ZG = !1;
        return this.indexById.get(GG) === bG && (this.indexById.delete(GG), ZG = !0), bG < this.serverIds.length && this.serverIds[bG] === GG && (this.serverIds[bG] = KG.Wc, this.kinds[bG] = 0, this.idStr[bG] = null), ZG
      }
      ensureIndex(GG) {
        const bG = this.serverIds.length;
        if (GG < bG) return;
        let ZG = 2 * bG;
        for (; ZG <= GG;) ZG *= 2;
        const wG = new Int32Array(ZG).fill(KG.Wc);
        wG.set(this.serverIds), this.serverIds = wG;
        const SG = new Uint16Array(ZG);
        SG.set(this.kinds), this.kinds = SG;
        for (let LG = bG; LG < ZG; LG++) this.idStr.push(null)
      }
      eventView() {
        const GG = this.memory().buffer;
        return GG !== this.eventsBuffer && (this.eventsBuffer = GG, this.events = new DataView(GG, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const GG = this.memory().buffer;
        this.buffer = GG, this.viewPtr < 0 && (this.viewPtr = this.core.lSG()), this.view = new DataView(GG, this.viewPtr, KG.v.BYTES), this.rereadDirectory()
      }
    }

    function oG(GG) {
      return GG >>> KG.b === KG.r.Item
    }

    function XG(GG) {
      var bG, ZG;
      const wG = GG & KG.c;
      switch (GG >>> KG.b) {
        case KG.r.Lifeform:
          return null !== (bG = VG.m[wG]) && void 0 !== bG ? bG : null;
        case KG.r.Throwable:
          return null !== (ZG = pG.n[wG]) && void 0 !== ZG ? ZG : null;
        case KG.r.Mesh:
          return "Mesh";
        case KG.r.Audio:
          return "AudioEntity";
        case KG.r.Item:
          return "Item";
        default:
          return null
      }
    }
    const uG = new TextDecoder;

    function iG(GG, bG, ZG) {
      if (ZG < fG.Md.HEAD_BYTES) return null;
      const wG = GG.getUint32(bG, !0),
        SG = GG.getUint32(bG + 20, !0),
        LG = GG.getUint32(bG + 24, !0),
        yG = fG.Md.HEAD_BYTES + (0, fG.ve)(SG);
      if (wG !== fG.Md.UPDATE && wG !== fG.Md.REMOVE || SG > ZG || yG + LG > ZG) return null;
      const kG = (ZG, wG) => uG.decode(new Uint8Array(GG.buffer, GG.byteOffset + bG + ZG, wG)),
        UG = GG.getFloat64(bG + 12, !0);
      return {
        op: wG,
        level: GG.getFloat64(bG + 4, !0),
        durationMs: Number.isNaN(UG) ? null : UG,
        name: kG(fG.Md.HEAD_BYTES, SG),
        icon: kG(yG, LG)
      }
    }

    function CG(GG, bG, ZG) {
      return new QG.c(`event ${GG} at ${bG} of ${ZG} bytes`)
    }
    var WG = ZG(352),
      mG = ZG(1177),
      IG = ZG(39426),
      FG = ZG(1915),
      vG = ZG(41410),
      aG = ZG(1873),
      cG = ZG(39586),
      lG = ZG(39620),
      jG = ZG(39602),
      PG = ZG(40999),
      MG = ZG(2388),
      AG = ZG(39582),
      sG = ZG(39614);
    const qG = Math.max(KG.yb.BYTES, KG.qb.BYTES, KG.rb.BYTES);

    function nG(GG) {
      if (!(0, sG.f)(GG)) return null;
      const bG = Number(GG);
      return (0 | bG) === bG ? bG : null
    }
    class gG {
      constructor(GG) {
        this.api = GG, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, AG.j)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.qw = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = KG.Wc, this.localName = String(KG.Wc), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.qw = null;
        const GG = this.api.queries.directorView() >= KG.yb.BYTES ? this.scratchView() : null;
        null !== GG && (this.defaultFov = (0, aG.C)(KG.yb.fov(GG, 0)), this.baseFov = (0, aG.C)(KG.yb.baseFov(GG, 0)), this.aspect = KG.yb.aspect(GG, 0), this.bodyHeading = KG.yb.bodyHeading(GG, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(GG) {
        this.viewHeading = GG
      }
      get localPlayerId() {
        const GG = KG.v.localId(this.api.apiView, 0);
        return GG !== this.localId && (this.localId = GG, this.localName = String(GG)), this.localName
      }
      getEntityPosition(GG) {
        return this.readEntity(GG) ? this.entityFeet : null
      }
      getEntityAimPoint(GG) {
        return this.readEntity(GG) ? this.entityAim : null
      }
      getEntityHeading(GG) {
        const bG = nG(GG);
        if (null === bG) return null;
        const ZG = KG.v.localId(this.api.apiView, 0);
        return bG === ZG && ZG !== KG.Wc ? this.viewHeading : this.readEntity(GG) ? this.entityHeading : null
      }
      raycastTerrain(GG, bG, ZG) {
        const wG = this.api.queries.cameraSweep(GG[0], GG[1], GG[2], bG[0], bG[1], bG[2], ZG);
        return wG < ZG - 1e-6 ? wG : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const GG = this.defaultPose;
        GG.fov = this.defaultFov;
        const bG = this.api.queries.directorDefaultPose() >= KG.qb.BYTES ? this.scratchView() : null;
        if (null === bG) return GG;
        for (let ZG = 0; ZG < 3; ZG++) GG.position[ZG] = KG.qb.eye(bG, 0, ZG);
        return GG.heading = KG.qb.heading(bG, 0), GG.pitch = KG.qb.pitch(bG, 0), GG
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
      readEntity(GG) {
        const bG = nG(GG);
        if (null === bG) return !1;
        if (bG === this.qw) return this.entityLive;
        this.qw = bG;
        const ZG = this.api.queries.directorEntity(bG) >= KG.rb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== ZG, null === ZG) return !1;
        for (let wG = 0; wG < 3; wG++) this.entityFeet[wG] = KG.rb.feet(ZG, 0, wG), this.entityAim[wG] = this.entityFeet[wG];
        return this.entityAim[1] += KG.rb.eyeHeight(ZG, 0), this.entityHeading = KG.rb.heading(ZG, 0), !0
      }
      scratchView() {
        const GG = this.api.scratch(),
          bG = this.api.memory().buffer,
          ZG = this.scratch;
        return null !== ZG && ZG.buffer === bG && ZG.byteOffset === GG ? ZG : (this.scratch = this.api.memoryData(GG, qG, 8, "the director's record"), this.scratch)
      }
    }
    const eG = {
        mode: "default"
      },
      RG = {
        show: () => {},
        clear: () => {}
      };

    function TG() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class HG {
      constructor(GG) {
        this.options = GG, this.Op = void 0, this.director = void 0, this.latest = eG, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          SF: 0,
          kF: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.fp = new Int32Array(3 * KG.Qd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * KG.Qd), this.Op = new gG(GG.api), this.director = new jG.c(this.Op)
      }
      settingsChanged(GG) {
        let bG = eG;
        if (GG.length > 0) try {
          bG = (0, PG.e)(GG)
        } catch {}
        this.latest = bG, this.pending = bG
      }
      call(GG, bG, ZG, wG, SG, LG) {
        var yG, kG;
        let UG;
        this.holding = !1;
        try {
          UG = this.answer(GG, bG, ZG, wG, SG, LG)
        } catch (fG) {
          var YG, VG;
          throw this.answeredPose = !1, null === (YG = (VG = this.options).showFacing) || void 0 === YG || YG.call(VG, null), fG
        }
        const pG = this.answeredPose && 0 === (wG & KG.vb.Held);
        return this.answeredPose = UG !== KG.pb.None, this.holding = this.answeredPose && !pG, null === (yG = (kG = this.options).showFacing) || void 0 === yG || yG.call(kG, this.holding ? this.facing : null), UG
      }
      holdsView() {
        return this.holding
      }
      answer(GG, bG, ZG, wG, SG, LG) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          Op: yG
        } = this;
        yG.readView();
        if (0 !== (wG & KG.vb.Held) || yG.setViewHeading((0, cG.w)(yG.bodyHeading)), void 0 !== this.pending) {
          const GG = this.pending;
          this.pending = void 0, this.director.setSettings(GG), this.syncShownSettings()
        }
        this.readLook((0, MG.g)(bG), (0, MG.g)(ZG), wG, (0, MG.g)(SG), (0, MG.g)(LG));
        const kG = this.director.update(GG / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !kG) return KG.pb.None;
        const [UG, YG, VG] = kG.position;
        if (0 === this.options.api.queries.directorPose(UG, YG, VG, (0, cG.w)(kG.heading), (0, cG.h)(kG.pitch), (0, aG.j)(kG.fov))) return KG.pb.None;
        if ("default" === this.director.getSettings().mode) return KG.pb.Pose;
        switch (this.facing) {
          case "camera":
            return KG.pb.FaceCamera;
          case "cursor":
            return KG.pb.FaceCursor;
          default:
            return KG.pb.FaceMovement
        }
      }
      afterFrame(GG) {
        GG ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = eG, this.idle()
      }
      restart() {
        const GG = this.holding;
        this.idle(), this.holding = GG
      }
      idle() {
        var GG, bG;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new jG.c(this.Op), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (GG = (bG = this.options).showFacing) || void 0 === GG || GG.call(bG, null), this.setCentres(0)
      }
      syncShownSettings() {
        const GG = this.director.getSettings();
        if (GG === this.shownSettings) return;
        this.shownSettings = GG;
        const bG = (0, lG.f)(GG);
        this.facing = bG.facing, this.mouseTurns = bG.mouseTurns
      }
      readLook(GG, bG, ZG, wG, SG) {
        const LG = this.look,
          yG = 0 !== (ZG & KG.vb.LookPointed);
        if (null === this.mouseTurns && !yG) return LG.SF = 0, LG.kF = 0, void(LG.pointedAt = void 0);
        let kG;
        yG && (this.pointedAt.heading = wG, this.pointedAt.pitch = SG, kG = this.pointedAt);
        const {
          Op: UG
        } = this;
        UG.setViewHeading((0, lG.e)(UG.getViewHeading(), GG, bG, kG, "look" === this.mouseTurns, LG))
      }
      writeCentres(GG) {
        const bG = this.next,
          ZG = Math.min(GG.length, KG.Qd);
        for (let wG = 0; wG < ZG; wG++)
          for (let ZG = 0; ZG < 3; ZG++) bG[3 * wG + ZG] = Math.floor(GG[wG][ZG] / KG.A);
        this.setCentres(ZG)
      }
      setCentres(GG) {
        const {
          fp: bG,
          next: ZG
        } = this;
        let wG = GG === this.centresLen;
        for (let SG = 0; wG && SG < 3 * GG; SG++) wG = bG[SG] === ZG[SG];
        wG || (bG.fill(0), bG.set(ZG.subarray(0, 3 * GG)), this.centresLen = GG, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const GG = this.options.cmd();
        null !== GG && (0, KG.Gf)(GG, 0, this.fp, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var GG, bG, ZG;
        return null !== (GG = null === (bG = (ZG = this.options).screen) || void 0 === bG ? void 0 : bG.call(ZG)) && void 0 !== GG ? GG : RG
      }
      hidden() {
        var GG;
        return (null !== (GG = this.options.isPageHidden) && void 0 !== GG ? GG : TG)()
      }
      now() {
        var GG, bG, ZG;
        return null !== (GG = null === (bG = (ZG = this.options).now) || void 0 === bG ? void 0 : bG.call(ZG)) && void 0 !== GG ? GG : performance.now()
      }
    }
    var tG = ZG(41159);
    const DG = KG.A * KG.A * KG.A,
      NG = Math.log2(KG.A),
      OG = KG.A - 1,
      xG = KG.R.BYTES / 4,
      BG = new Uint16Array(DG);

    function Gb(GG, bG, ZG) {
      return GG * KG.A * KG.A + bG * KG.A + ZG
    }
    class bb {
      constructor(GG) {
        this.chunk = GG
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(GG, bG, ZG) {
        return Gb(GG, bG, ZG)
      }
    }
    class Zb {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class wb {
      constructor(GG, bG, ZG, wG) {
        this.table = GG, this.slot = bG, this.generation = ZG, this.epoch = wG, this.Wf = new bb(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = BG, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get gK() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get WQ() {
        const GG = this.gameVoxels(),
          bG = this.layers ??= new Uint16Array(KG.A);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let ZG = 0; 0 !== this.staleLayers; ZG++) {
          const wG = 1 << ZG;
          0 !== (this.staleLayers & wG) && (this.staleLayers &= ~wG, bG[ZG] = Sb(GG, ZG))
        }
        return bG
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const GG = this.voxelData(),
          bG = this.writes;
        if (null === bG || 0 === bG.ids.size) return GG;
        if (bG.from !== GG) {
          const ZG = bG.patched ??= new Uint16Array(DG);
          ZG.set(GG);
          for (const [GG, wG] of bG.ids) ZG[GG] = wG;
          bG.from = GG
        }
        return bG.patched
      }
      written(GG) {
        var bG;
        return null === (bG = this.writes) || void 0 === bG ? void 0 : bG.ids.get(GG)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(GG, bG, ZG) {
        const wG = this.writes ??= new Zb;
        wG.ids.set(GG, bG), ZG && wG.cleared.add(GG), null !== wG.from && (wG.patched[GG] = bG);
        const SG = 1 << (GG >> NG & OG);
        wG.layers |= SG, this.staleLayers |= SG, this.writeCount++
      }
      clearWrites() {
        const GG = this.writes;
        null !== GG && (this.staleLayers |= GG.layers, GG.ids.clear(), GG.cleared.clear(), GG.layers = 0, GG.from = null)
      }
      dataCleared(GG) {
        var bG;
        return !0 === (null === (bG = this.writes) || void 0 === bG ? void 0 : bG.cleared.has(GG))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const GG = this.table.slotWords(),
          bG = this.slot * xG;
        if (this.epoch !== this.table.epoch || bG + xG > GG.length || 0 === GG[bG + 3] || GG[bG + 2] !== this.generation) return this.data = BG, this.dataPtr = 0, BG;
        this.version = GG[bG + 1];
        const ZG = GG[bG + 0],
          wG = GG.buffer;
        return ZG === this.dataPtr && wG === this.dataBuffer || (this.dataPtr = ZG, this.dataBuffer = wG, this.data = this.table.voxelsAt(wG, ZG)), this.data
      }
    }

    function Sb(GG, bG) {
      const ZG = GG[bG * KG.A];
      for (let wG = 0; wG < KG.A; wG++) {
        const SG = Gb(wG, bG, 0);
        for (let bG = 0; bG < KG.A; bG++)
          if (GG[SG + bG] !== ZG) return 65535
      }
      return ZG
    }
    const Lb = new Uint32Array(0);

    function yb(GG, bG, ZG) {
      return Gb(GG & OG, bG & OG, ZG & OG)
    }
    class kb {
      constructor(GG, bG) {
        this.memory = GG, this.apiView = bG, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Lb, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Lb, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(GG, bG, ZG, wG, SG, LG) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, LG === KG.S.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (LG !== KG.S.Stored && LG !== KG.S.Unloaded) throw new QG.c(`ChunkSlot flags ${LG}`);
        const yG = (0, tG.e)(GG, bG, ZG);
        if (yG < 0) return;
        if (LG === KG.S.Unloaded) return void this.chunks.delete(yG);
        const kG = this.chunks.get(yG);
        (null === kG || void 0 === kG ? void 0 : kG.slot) === wG && kG.generation === SG || this.chunks.set(yG, new wb(this, wG, SG, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const GG = this.apiView(),
          bG = KG.v.chunkSlotsPtr(GG, 0),
          ZG = KG.v.chunkSlotsLen(GG, 0);
        bG === this.slotsPtr && ZG === this.slotsLen || (this.slotsPtr = bG, this.slotsLen = ZG, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const GG = this.apiView(),
          bG = KG.v.walkThroughPtr(GG, 0),
          ZG = KG.v.walkThroughLen(GG, 0);
        bG === this.walkPtr && ZG === this.walkLen || (this.walkPtr = bG, this.walkLen = ZG, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const GG of this.written) GG.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const GG = this.memory().buffer;
        var bG;
        GG !== this.slotsBuffer && (this.slotsBuffer = GG, this.slots = null !== (bG = (0, QG.o)(Uint32Array, GG, this.slotsPtr, this.slotsLen * xG, "the chunk directory")) && void 0 !== bG ? bG : Lb);
        return this.slots
      }
      voxelsAt(GG, bG) {
        try {
          var ZG;
          return null !== (ZG = (0, QG.o)(Uint16Array, GG, bG, DG, "a chunk's voxels")) && void 0 !== ZG ? ZG : BG
        } catch (wG) {
          if (!(wG instanceof QG.c)) throw wG;
          return this.corruption ??= wG, BG
        }
      }
      chunk(GG, bG, ZG) {
        var wG;
        return null !== (wG = this.chunks.get((0, tG.e)(GG, bG, ZG))) && void 0 !== wG ? wG : null
      }
      isLoaded(GG, bG, ZG) {
        return void 0 !== this.chunkAt(Math.floor(GG), Math.floor(bG), Math.floor(ZG))
      }
      Gk(GG, bG, ZG) {
        var wG;
        const SG = Math.floor(GG),
          LG = Math.floor(bG),
          yG = Math.floor(ZG),
          kG = this.chunkAt(SG, LG, yG);
        if (!kG) return 0;
        const UG = yb(SG, LG, yG);
        return null !== (wG = kG.written(UG)) && void 0 !== wG ? wG : kG.voxelData()[UG]
      }
      setOverlay(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LG = this.chunkAt(GG, bG, ZG);
        return !!LG && (LG.hasWrites() || this.written.push(LG), LG.write(yb(GG, bG, ZG), wG, SG), !0)
      }
      version(GG, bG, ZG) {
        var wG, SG;
        return null !== (wG = null === (SG = this.chunks.get((0, tG.e)(GG, bG, ZG))) || void 0 === SG ? void 0 : SG.gK) && void 0 !== wG ? wG : null
      }
      scan(GG, bG, ZG, wG, SG, LG, yG, kG) {
        const UG = KG.A;
        let YG = 0;
        for (let VG = Math.floor(bG / UG); VG * UG < SG; VG++) {
          const pG = VG * UG,
            fG = Math.min(SG - pG, UG);
          for (let SG = Math.floor(GG / UG); SG * UG < wG; SG++) {
            const QG = SG * UG,
              KG = Math.min(wG - QG, UG);
            for (let wG = Math.floor(ZG / UG); wG * UG < LG; wG++) {
              const hG = this.chunks.get((0, tG.e)(SG, VG, wG));
              if (!hG) continue;
              const dG = wG * UG,
                JG = Math.max(ZG - dG, 0),
                rG = Math.min(LG - dG, UG),
                zG = hG.WQ,
                EG = hG.gameVoxels();
              for (let ZG = Math.max(bG - pG, 0); ZG < fG; ZG++) {
                const bG = zG[ZG];
                if (65535 === bG || 0 !== yG[bG]) {
                  YG++;
                  for (let bG = Math.max(GG - QG, 0); bG < KG; bG++) {
                    const GG = Gb(bG, ZG, 0);
                    for (let wG = JG; wG < rG; wG++) {
                      const SG = EG[GG + wG];
                      0 !== yG[SG] && kG.push(QG + bG, pG + ZG, dG + wG, SG)
                    }
                  }
                }
              }
            }
          }
        }
        return YG
      }
      dataCleared(GG, bG, ZG) {
        var wG;
        const SG = Math.floor(GG),
          LG = Math.floor(bG),
          yG = Math.floor(ZG);
        return !0 === (null === (wG = this.chunkAt(SG, LG, yG)) || void 0 === wG ? void 0 : wG.dataCleared(yb(SG, LG, yG)))
      }
      isWalkThrough(GG) {
        if (!Number.isInteger(GG) || GG < 0 || GG > 65535) return !1;
        const bG = this.walkWords(),
          ZG = GG >>> 5;
        return ZG < bG.length && 1 === (bG[ZG] >>> (31 & GG) & 1)
      }
      walkWords() {
        const GG = this.memory().buffer;
        var bG;
        GG !== this.walkBuffer && (this.walkBuffer = GG, this.walk = null !== (bG = (0, QG.o)(Uint32Array, GG, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== bG ? bG : Lb);
        return this.walk
      }
      chunkAt(GG, bG, ZG) {
        if ((0 | GG) !== GG || (0 | bG) !== bG || (0 | ZG) !== ZG) return;
        const wG = (0, tG.e)(GG >> NG, bG >> NG, ZG >> NG);
        return wG !== this.lastKey && (this.lastKey = wG, this.lastChunk = this.chunks.get(wG)), this.lastChunk
      }
    }
    var Ub = ZG(38917),
      Yb = ZG(38207),
      Vb = ZG(37146),
      pb = ZG(36965),
      fb = ZG(34432),
      Qb = ZG(39534),
      Kb = ZG(188);
    const hb = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      db = [
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
      Jb = db.map((GG => {
        let [bG] = GG;
        return bG
      })),
      rb = Uint8Array.from(db, (GG => {
        let [, bG] = GG;
        return bG
      })),
      zb = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      Eb = 8;
    var ob = ZG(37114),
      Xb = ZG(37132),
      ub = ZG(37125),
      ib = ZG(252);
    class Cb {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ib.b;
        this.sheet = GG, this.onError = bG, this.idle = ZG, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = GG => {
          this.cancelIdle = null;
          try {
            if (GG.timeRemaining() >= 1) {
              let GG = this.queue.shift();
              for (; void 0 !== GG && !this.load(GG);) GG = this.queue.shift()
            }
          } catch (bG) {
            this.onError(bG)
          } finally {
            this.schedule()
          }
        }
      }
      preload(GG) {
        const bG = [...GG].sort(((GG, bG) => GG - bG));
        for (const ZG of bG) this.asked.has(ZG) || (this.asked.add(ZG), this.queue.push(ZG));
        this.schedule()
      }
      cancel() {
        var GG;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (GG = this.cancelIdle) || void 0 === GG || GG.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(GG) {
        const bG = this.sheet(GG, !1),
          ZG = this.sheet(GG, !0),
          [wG, SG] = "unloaded" === bG.state() && "unloaded" !== ZG.state() ? [ZG, bG] : [bG, ZG],
          LG = this.gen,
          yG = () => {
            try {
              LG === this.gen && "unloaded" === SG.state() && SG.load()
            } catch (GG) {
              this.onError(GG)
            }
          },
          kG = wG.state();
        return "unloaded" === kG ? (wG.once("load", yG), wG.load(), !0) : "unloaded" === SG.state() && ("loading" === kG ? (wG.once("load", yG), !1) : (SG.load(), !0))
      }
    }
    var Wb = ZG(41278);
    const mb = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      Ib = Kb.d.td * Kb.d.playerEyeToHeightRatio,
      Fb = [0, 0, -1, 0, 1, 0],
      vb = hb.indexOf("note");

    function ab(GG) {
      return GG >= 0 ? Math.min(1, GG) : 0
    }

    function cb(GG) {
      var bG;
      let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const wG = function(GG) {
        let bG = 0,
          ZG = Jb.length;
        for (; bG < ZG;) {
          const wG = bG + ZG >>> 1;
          Jb[wG] < GG ? bG = wG + 1 : ZG = wG
        }
        return bG
      }(GG);
      if ("" === GG || null === (bG = Jb[wG]) || void 0 === bG || !bG.startsWith(GG)) return -1;
      if (Jb[wG] === GG) return wG;
      let SG = wG + 1;
      for (; SG < Jb.length && Jb[SG].startsWith(GG);) SG++;
      return wG + Math.floor(ZG() * (SG - wG))
    }
    class lb {
      constructor(GG, bG, ZG, wG, SG) {
        this.group = GG, this.loudness = bG, this.startMs = ZG, this.howl = wG, this.host = SG, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const GG = this.host.alive(this.id);
        return GG ? 1e3 * this.howl.duration(this.id) / GG.rate : 0
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
    class jb {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          wG = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = GG, this.listener = bG, this.now = ZG, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(hb.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new ub.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: GG => this.aliveVoice(GG),
          started: GG => this.started.has(GG),
          drop: GG => {
            var bG;
            null === (bG = this.live.get(GG)) || void 0 === bG || bG.howl.stop(GG), this.forget(GG)
          }
        }, this.handlers = {
          playSound: (GG, bG, ZG, wG, SG, LG, yG, kG, UG) => {
            if (wG >= Jb.length) return;
            const YG = 0 !== (SG & KG.$d.Loop);
            SG & KG.$d.TwoD ? this.start(wG, !1, yG, LG, kG, YG) : this.startSpatial(wG, yG, LG, kG, YG, GG, bG, ZG, UG, this.earDistSq(GG, bG, ZG))
          },
          soundPos: (GG, bG, ZG, wG) => {
            const SG = this.core.get(wG);
            var LG;
            void 0 !== SG && (null === (LG = this.live.get(SG)) || void 0 === LG || LG.howl.pos(ZG, bG, GG, SG))
          },
          soundSet: (GG, bG, ZG, wG) => {
            const SG = this.core.get(GG),
              LG = void 0 === SG ? void 0 : this.live.get(SG);
            void 0 !== SG && LG && (this.setRel(SG, bG), LG.rate = ZG, LG.howl.rate(ZG, SG), LG.spatial && LG.howl.pannerAttr({
              refDistance: wG
            }, SG))
          },
          soundFade: (GG, bG, ZG, wG) => {
            const SG = this.core.get(GG);
            void 0 !== SG && this.fade(SG, bG, ZG, 0 !== (wG & KG.Zd.StopAfter))
          },
          soundStop: GG => {
            const bG = this.core.get(GG);
            var ZG;
            void 0 !== bG && (null === (ZG = this.live.get(bG)) || void 0 === ZG || ZG.howl.stop(bG), this.forget(bG))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new Cb(((GG, bG) => this.sheet(GG, bG)), (GG => {
          this.errors++, console.error("Audio preload failed", GG)
        }), wG)
      }
      prepare() {
        for (let GG = 0; GG < hb.length; GG++) this.prepareSheet(GG)
      }
      prepareSheet(GG) {
        this.sheet(GG, !1), this.sheet(GG, !0)
      }
      preload(GG) {
        this.loader.preload(GG)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let GG = 0; GG < hb.length; GG++) {
          if (Xb.e.has(hb[GG])) continue;
          const bG = [];
          for (const wG of [!1, !0]) {
            const ZG = Pb(GG, wG),
              SG = this.sheets.get(ZG);
            void 0 !== SG && "loading" !== SG.state() && bG.push({
              key: ZG,
              howl: SG
            })
          }
          if (!bG.some((GG => {
              let {
                howl: bG
              } = GG;
              return "loaded" === bG.state()
            }))) continue;
          this.unloading[GG] += bG.length;
          const ZG = () => {
            this.unloading[GG]--, 0 === this.unloading[GG] && this.prepareSheet(GG)
          };
          for (const {
              key: GG,
              howl: wG
            }
            of bG) this.sheets.delete(GG), "loaded" === wG.state() ? (0, ob.e)(wG, ZG) : (wG.unload(), ZG())
        }
      }
      onAudioEvent(GG, bG, ZG, wG) {
        if (GG < KG.o.PlaySound || GG > KG.o.SoundReset) return !1;
        try {
          return (0, KG.ke)(GG, bG, ZG, wG, this.handlers)
        } catch (SG) {
          return this.errors++, console.error("Audio event failed", SG), !0
        }
      }
      applyListener(GG) {
        const bG = this.nextPose;
        for (let wG = 0; wG < 3; wG++) bG[2 - wG] = KG.x.listener(GG, 0, wG), bG[5 - wG] = KG.x.forward(GG, 0, wG), bG[8 - wG] = KG.x.up(GG, 0, wG);
        0 === bG[3] && 0 === bG[4] && 0 === bG[5] && bG.set(this.posed ? this.pose.subarray(3) : Fb, 3);
        for (let wG = 0; wG < 9; wG++)
          if (!Number.isFinite(bG[wG])) return;
        const ZG = this.pose;
        if (this.posed) {
          let GG = !0;
          for (let wG = 0; wG < 9 && GG; wG++) GG = bG[wG] === ZG[wG];
          if (GG) return
        }
        this.listener.apply(bG) && (ZG.set(bG), this.posed = !0)
      }
      playGame(GG, bG, ZG, wG, SG, LG, yG) {
        const kG = cb(GG);
        if (kG < 0) return Wb.d;
        if (!ZG) {
          const {
            howl: GG,
            id: ZG
          } = this.start(kG, !1, bG, 0, 1, yG);
          return this.gameSound(GG, ZG, !1)
        }
        const UG = ZG[0],
          YG = ZG[1] + Ib,
          VG = ZG[2];
        if (!Number.isFinite(UG) || !Number.isFinite(YG) || !Number.isFinite(VG)) return Wb.d;
        let pG;
        if (wG) {
          const GG = UG - wG[0],
            bG = YG - wG[1],
            ZG = VG - wG[2];
          if (pG = GG * GG + bG * bG + ZG * ZG, pG > SG * SG) return Wb.d
        } else pG = this.earDistSq(UG, YG, VG);
        const fG = this.startSpatial(kG, bG, 0, 1, yG, UG, YG, VG, LG, pG);
        return fG ? this.gameSound(fG.howl, fG.id, !0) : Wb.d
      }
      setMaster(GG, bG) {
        this.level = ab(GG);
        const ZG = bG ? this.level : 0;
        if (ZG !== this.master) {
          this.master = ZG;
          for (const [GG, bG] of this.live) bG.fadeMs = 0, bG.gain = bG.rel * this.master, bG.howl.volume(bG.gain, GG)
        }
      }
      stopCore() {
        for (const bG of [...this.core.values()]) {
          var GG;
          null === (GG = this.live.get(bG)) || void 0 === GG || GG.howl.stop(bG)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [GG, bG] of [...this.live]) bG.howl.stop(GG), this.forget(GG);
        this.core.clear()
      }
      gameSound(GG, bG, ZG) {
        const wG = {
          stop: () => (this.live.has(bG) && GG.stop(bG), wG),
          fade: (GG, ZG, SG) => {
            var LG, yG;
            const kG = this.level > 0 ? ZG / this.level : ZG > 0 && null !== (LG = null === (yG = this.live.get(bG)) || void 0 === yG ? void 0 : yG.rel) && void 0 !== LG ? LG : 0;
            return this.fade(bG, kG, SG, !1), wG
          },
          rate: ZG => {
            const SG = this.live.get(bG);
            return SG && (SG.rate = function(GG) {
              return GG > 0 && GG < 1 / 0 ? GG : 1
            }(ZG), GG.rate(SG.rate, bG)), wG
          },
          getVolume: () => {
            var GG, ZG;
            return (null !== (GG = null === (ZG = this.live.get(bG)) || void 0 === ZG ? void 0 : ZG.rel) && void 0 !== GG ? GG : 0) * this.level
          },
          getRelativeVolume: () => {
            var GG, ZG;
            return null !== (GG = null === (ZG = this.live.get(bG)) || void 0 === ZG ? void 0 : ZG.rel) && void 0 !== GG ? GG : 0
          },
          setRelativeVolume: GG => (this.setRel(bG, GG), wG),
          setPannerAttr: SG => {
            if (ZG && this.live.has(bG)) {
              const ZG = {
                ...mb,
                refDistance: Vb.l
              };
              for (const [GG, bG] of Object.entries(SG)) "number" !== typeof bG && "string" !== typeof bG || (ZG[GG] = bG);
              GG.pannerAttr({
                coneOuterAngle: ZG.coneOuterAngle
              }, bG), GG.pannerAttr(ZG, bG)
            }
            return wG
          },
          setPosition: SG => (ZG && this.live.has(bG) && Number.isFinite(SG[0] + SG[1] + SG[2]) && GG.pos(SG[2], SG[1], SG[0], bG), wG)
        };
        return wG
      }
      startSpatial(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
        const VG = this.sheet(rb[GG], !0);
        let pG = null;
        if (!SG) {
          if (this.failed.has(VG)) return null;
          const ZG = rb[GG] === vb ? null : (0, ub.i)(Jb[GG]),
            wG = (0, ub.f)(ab(bG), Math.sqrt(YG), UG);
          if (pG = new lb(ZG, wG, this.now(), VG, this.voiceHost), !this.voices.admit(pG)) return null
        }
        const fG = this.start(GG, !0, bG, ZG, wG, SG);
        return pG && (pG.id = fG.id, pG.direct = "loaded" === VG.state() && !VG._playLock), VG.pannerAttr({
          coneOuterAngle: 360
        }, fG.id), VG.pannerAttr({
          ...mb,
          refDistance: UG
        }, fG.id), VG.pos(kG, yG, LG, fG.id), fG
      }
      aliveVoice(GG) {
        const bG = this.live.get(GG);
        if (!bG) return;
        const ZG = bG.howl._soundById(GG);
        if (ZG && !ZG._ended) return bG;
        this.forget(GG)
      }
      earDistSq(GG, bG, ZG) {
        if (!this.posed) return 0;
        const wG = GG - this.pose[2],
          SG = bG - this.pose[1],
          LG = ZG - this.pose[0];
        return wG * wG + SG * SG + LG * LG
      }
      start(GG, bG, ZG, wG, SG, LG) {
        const yG = ab(ZG),
          kG = this.sheet(rb[GG], bG);
        "unloaded" === kG.state() && kG.load();
        const UG = kG.play(Jb[GG]),
          YG = yG * this.master;
        return kG.volume(YG, UG), this.live.set(UG, {
          howl: kG,
          rel: yG,
          gain: YG,
          fadeFrom: YG,
          fadeAt: 0,
          fadeMs: 0,
          rate: SG,
          handle: wG,
          spatial: bG,
          stopTimer: void 0
        }), 0 !== wG && this.core.set(wG, UG), 1 !== SG && kG.rate(SG, UG), LG && kG.loop(!0, UG), {
          howl: kG,
          id: UG
        }
      }
      sheet(GG, bG) {
        const ZG = Pb(GG, bG);
        let wG = this.sheets.get(ZG);
        if (!wG) {
          const SG = this.createHowl(hb[GG], bG);
          SG.on("end", (GG => {
            SG.loop(GG) || this.forget(GG)
          })), SG.on("stop", (GG => {
            this.forget(GG)
          })), SG.on("play", (GG => {
            this.live.has(GG) && this.started.add(GG)
          })), SG.on("loaderror", (GG => {
            if ("loaded" !== SG.state()) {
              this.failed.add(SG);
              for (const [GG, bG] of this.live) bG.howl === SG && this.forget(GG)
            } else "number" === typeof GG && this.forget(GG)
          })), this.sheets.set(ZG, SG), wG = SG
        }
        return wG
      }
      setRel(GG, bG) {
        const ZG = this.live.get(GG);
        ZG && (Mb(ZG), ZG.fadeMs = 0, ZG.rel = ab(bG), ZG.gain = ZG.rel * this.master, ZG.howl.volume(ZG.gain, GG))
      }
      fade(GG, bG, ZG, wG) {
        const SG = this.live.get(GG);
        if (!SG) return;
        Mb(SG);
        const {
          howl: LG
        } = SG, yG = this.gainNow(SG);
        SG.rel = ab(bG), SG.gain = SG.rel * this.master;
        const kG = ZG > 0 ? Math.min(ZG, 65535) : 0,
          UG = 0 === kG || yG === SG.gain;
        SG.fadeMs = UG ? 0 : kG, UG ? LG.volume(SG.gain, GG) : (SG.fadeFrom = yG, SG.fadeAt = this.now(), LG.fade(yG, SG.gain, kG, GG)), wG && (UG ? LG.stop(GG) : SG.stopTimer = setTimeout((() => {
          SG.stopTimer = void 0, LG.stop(GG)
        }), kG))
      }
      gainNow(GG) {
        if (GG.fadeMs > 0) {
          const bG = (this.now() - GG.fadeAt) / GG.fadeMs;
          if (bG < 1) return GG.fadeFrom + (GG.gain - GG.fadeFrom) * Math.max(0, bG);
          GG.fadeMs = 0
        }
        return GG.gain
      }
      forget(GG) {
        this.started.delete(GG);
        const bG = this.live.get(GG);
        bG && (Mb(bG), this.live.delete(GG), 0 !== bG.handle && this.core.get(bG.handle) === GG && this.core.delete(bG.handle))
      }
    }

    function Pb(GG, bG) {
      return 2 * GG + (bG ? 1 : 0)
    }

    function Mb(GG) {
      void 0 !== GG.stopTimer && (clearTimeout(GG.stopTimer), GG.stopTimer = void 0)
    }
    var Ab = ZG(40986),
      sb = ZG(39542);
    class qb {
      constructor(GG, bG, ZG, wG) {
        this.key = GG, this.model = bG, this.host = wG, this.rp = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.nSG = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.pK = !1, this.rp = Math.max(1, Math.ceil(ZG)), this.records = new Float32Array(this.rp * Ub.b), this.isDirty = new Uint8Array(this.rp), this.tail = new Uint8Array(this.rp * KG.kc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(wG.cmd())
      }
      setOrigin(GG, bG, ZG) {
        this.origin[0] = GG, this.origin[1] = bG, this.origin[2] = ZG
      }
      markDirty(GG) {
        !this.pK && GG >= 0 && GG < this.rp && GG < KG.kc.Max && this.cK(GG, GG + 1)
      }
      commit(GG) {
        if (this.pK) return;
        (GG = Math.min(Math.max(Math.floor(GG), 0), this.rp, KG.kc.Max)) > this.count && this.cK(this.count, GG), this.count = GG;
        const {
          origin: bG,
          sentOrigin: ZG,
          dirtyList: wG
        } = this, SG = this.nSG !== GG, LG = ZG[0] !== bG[0] || ZG[1] !== bG[1] || ZG[2] !== bG[2];
        if (0 === wG.length && !SG && !LG) return;
        const yG = this.host.cmd();
        if (!yG || !this.make(yG)) return;
        const kG = wG.length,
          {
            records: UG,
            tailView: YG
          } = this;
        for (let VG = 0; VG < kG; VG++) {
          const GG = wG[VG],
            bG = GG * Ub.b,
            ZG = VG * KG.kc.Bytes,
            SG = 0 !== UG[bG + Ub.e] ? KG.kc.Hidden : 0;
          YG.setUint32(ZG, (GG | SG) >>> 0, !0), YG.setFloat32(ZG + 4, UG[bG], !0), YG.setFloat32(ZG + 8, UG[bG + 1], !0), YG.setFloat32(ZG + 12, UG[bG + 2], !0)
        }
        if ((0, KG.Je)(yG, 0, this.key, GG, bG, kG, this.tailOf(kG))) {
          for (let GG = 0; GG < kG; GG++) this.isDirty[wG[GG]] = 0;
          wG.length = 0, this.nSG = GG, ZG[0] = bG[0], ZG[1] = bG[1], ZG[2] = bG[2]
        }
      }
      grow(GG) {
        (GG = Math.ceil(GG)) <= this.rp || this.pK || (this.records = (0, sb.b)(this.records, new Float32Array(GG * Ub.b)), this.isDirty = (0, sb.b)(this.isDirty, new Uint8Array(GG)), this.tail = new Uint8Array(GG * KG.kc.Bytes), this.tailView = new DataView(this.tail.buffer), this.rp = GG)
      }
      dispose() {
        this.pK || (this.pK = !0, this.host.pK(this, this.made ? this.key : null))
      }
      make(GG) {
        if (!this.made && GG) {
          const {
            item: bG,
            scale: ZG,
            yaw: wG
          } = this.model;
          this.made = (0, KG.Ne)(GG, 0, this.key, bG, ZG, wG)
        }
        return this.made
      }
      tailOf(GG) {
        const bG = GG * KG.kc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === bG || (this.tailCut = this.tail.subarray(0, bG)), this.tailCut
      }
      cK(GG, bG) {
        const {
          dirtyList: ZG,
          isDirty: wG
        } = this;
        for (let SG = GG; SG < bG; SG++) 0 === wG[SG] && (wG[SG] = 1, ZG.push(SG))
      }
    }
    var nb = ZG(595);
    class gb {
      constructor(GG) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: GG,
          owes: GG => {
            this.owing.add(GG)
          },
          settled: (GG, bG) => {
            this.owing.delete(GG), bG && this.live.delete(GG)
          }
        }
      }
      create(GG, bG) {
        if (ZG = GG, !nb.o.includes(ZG)) return null;
        var ZG;
        const wG = new eb(++this.keys, VG.m.indexOf(GG), bG, this.host);
        return this.live.add(wG), wG
      }
      disposeAll() {
        for (const GG of [...this.live]) GG.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const GG = this.host.cmd();
        for (const bG of this.owing)
          if (!bG.sync(GG)) return
      }
    }
    class eb {
      constructor(GG, bG, ZG, wG) {
        this.key = GG, this.lifeform = bG, this.scale = ZG, this.host = wG, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.pK = !1, this.sync()
      }
      setPose(GG, bG) {
        this.pK || (this.feet[0] = GG[0], this.feet[1] = GG[1], this.feet[2] = GG[2], this.yaw = bG, this.owed |= 2, this.sync())
      }
      setVisible(GG) {
        this.pK || GG === this.visible || (this.visible = GG, this.owed |= 4, this.sync())
      }
      dispose() {
        this.pK || (this.pK = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(GG) ? (this.host.settled(this, this.pK), !0) : (this.host.owes(this), !1)
      }
      write(GG) {
        if (!GG) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, KG.Ve)(GG, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const bG = (2 & this.owed ? KG.Oc.Pose : 0) | (4 & this.owed ? KG.Oc.Visible : 0);
        if (0 !== bG) {
          if (!(0, KG.Re)(GG, 0, this.key, bG, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, KG.Qe)(GG, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var Rb = ZG(41392);

    function Tb(GG, bG, ZG, wG) {
      return (0, Rb.d)(), (0, KG.Jf)(GG, bG, ZG, wG)
    }
    var Hb = ZG(39547),
      tb = ZG(40976);
    const Db = [0, 0, 0],
      Nb = [0, 0, 0],
      Ob = [0, 0, 0],
      xb = [0, 0, 0],
      Bb = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      GZ = [0, 0, 0],
      bZ = [0, 0],
      ZZ = [1, 1, 1],
      wZ = 1 / 3;
    const SZ = Yb.f;

    function LZ(GG) {
      const bG = Yb.e[GG],
        ZG = bG && Yb.f[bG.mainMultiblock];
      return ZG && {
        main: ZG,
        x: bG.compX,
        y: bG.compY,
        z: bG.compZ
      }
    }

    function yZ(GG) {
      if (null === GG || void 0 === GG) return KG.Wc;
      const bG = +GG;
      return Number.isInteger(bG) && bG >= -2147483648 && bG <= 2147483647 && String(bG) === String(GG) ? bG : KG.Wc
    }

    function kZ(GG, bG, ZG) {
      return (0, KG.Pf)(GG, 0, bG, null !== ZG && void 0 !== ZG ? ZG : Number.NaN)
    }
    class UZ {
      constructor(GG) {
        this.deps = GG, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Hb.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (GG => {
          var bG, ZG;
          null === (bG = (ZG = this.deps).setLocalOptions) || void 0 === bG || bG.call(ZG, GG)
        })), this.mobModels = new gb((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          pK: (GG, bG) => {
            this.livePools.delete(GG), null !== bG && (this.owedFrees.push(bG), this.flushOwed())
          }
        }, this.api = GG.api, this.live = GG.live, this.chunks = GG.chunks, this.items = GG.items, this.tables = GG.tables
      }
      isLocal(GG) {
        return null !== GG && void 0 !== GG && +GG === this.api.localId
      }
      assertLocal(GG, bG) {
        if (!this.isLocal(GG)) throw new Error(`Attempted to ${bG} for a player that is not the local player`)
      }
      HJ(GG) {
        const bG = this.api.HJ(GG);
        if (!bG) throw new Error(`Entity ${GG} has no replicated position`);
        return bG
      }
      checkValid(GG) {
        return !!this.deps.isSessionLive() && (null === GG || void 0 === GG || this.api.checkValid(GG))
      }
      isAlive(GG) {
        return !1 !== this.api.isAlive(GG)
      }
      getItemStat(GG, bG, ZG) {
        return this.isLocal(GG) || null !== GG && "Player" === this.api.getEntityType(GG) ? this.tables.getItemStat(bG, ZG) : this.tables.getDefaultItemStat(bG, ZG)
      }
      getClientOption(GG, bG) {
        return this.assertLocal(GG, "get a client option"), this.tables.getClientOption(bG)
      }
      openShop(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(GG, "open shop"), yG.l.xh("showShopFromServer", {
          toggle: bG,
          UG: ZG
        }, !0)
      }
      sendMessage(GG, bG, ZG) {
        this.assertLocal(GG, "send a message");
        const wG = "string" === typeof bG ? [{
          str: bG,
          style: ZG
        }] : bG;
        yG.l.xh("chat", {
          content: wG
        }, !0)
      }
      getEntityType(GG) {
        return this.api.getEntityType(GG)
      }
      getEntityName(GG) {
        const bG = yZ(GG);
        return bG === KG.Wc ? void 0 : (0, Ab.i)(this.api, bG)
      }
      hasEffect(GG, bG) {
        const ZG = yZ(GG);
        return ZG !== KG.Wc && (0, Ab.f)(this.api, ZG, bG)
      }
      getMetaInfo(GG) {
        return this.tables.getMetaInfo(GG)
      }
      getPlayerDbId(GG) {
        return this.assertLocal(GG, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(GG, bG, ZG) {
        if (!this.chunks.dataCleared(GG, bG, ZG)) return (0, Ab.d)(this.api, GG, bG, ZG)
      }
      HI(GG, bG, ZG, wG) {
        this.setBlockId(GG, bG, ZG, this.tables.getItemId(wG))
      }
      setOtherEntitySetting(GG, bG, ZG, wG) {
        if (!this.isLocal(GG)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(KG.id, ZG)) throw new Error(`Unknown other-entity setting ${ZG}`);
        const SG = KG.id[ZG],
          LG = yZ(bG);
        if (LG === KG.Wc || !this.deps.beforeWrite()) return;
        const yG = (0, PG.g)(wG);
        if (yG.length > 16384) throw new Error(`The other-entity setting ${ZG}'s value is over 16384 bytes`);
        const kG = this.api.memoryView(Uint8Array, this.api.scratch(), yG.length, "set_other_entity_setting's value");
        kG && (kG.set(yG), this.api.queries.setOtherEntitySetting(LG, SG, yG.length))
      }
      getPositionView(GG) {
        return this.live.position(+GG)
      }
      readDrawnPosition(GG, bG) {
        return this.api.readDrawnPosition(yZ(GG), bG)
      }
      getDrawnHeading(GG) {
        const bG = yZ(GG),
          ZG = (bG === KG.Wc ? 0 : this.api.queries.directorEntity(bG)) >= KG.rb.BYTES ? this.api.memoryData(this.api.scratch(), KG.rb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!ZG) return null;
        if (1 === KG.rb.headingIsDrawn(ZG, 0)) return KG.rb.heading(ZG, 0);
        const wG = this.api.apiView;
        return this.isLocal(GG) && 0 === (KG.v.playerFlags(wG, 0) & KG.Hd.FreeCam) ? KG.v.heading(wG, 0) : null
      }
      getLocalPlayerMovement() {
        const GG = KG.v.playerFlags(this.api.apiView, 0);
        return 0 === (GG & KG.Hd.Replay) && this.api.readDrawnPosition(this.api.localId, Ob) ? {
          onGround: 0 !== (GG & KG.Hd.OnGround),
          jumpHeld: 0 !== (GG & KG.Hd.JumpHeld)
        } : null
      }
      YZG(GG) {
        return this.isLocal(GG) ? this.items.Ik() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var GG, bG;
        return "Gun" === (null === (GG = this.aliveHeld()) || void 0 === GG || null === (bG = GG.typeObj) || void 0 === bG ? void 0 : bG.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Ik()
      }
      isCrosshairShown() {
        var GG, bG;
        const ZG = (0, pb.d)(wG.e.get("crosshairGameView"), wG.e.get("crosshairShownOverride"));
        if (null !== ZG) return ZG;
        const SG = null === (GG = this.aliveHeld()) || void 0 === GG ? void 0 : GG.typeObj,
          LG = "Gun" === (null === SG || void 0 === SG ? void 0 : SG.type),
          yG = LG || !0 === (null === SG || void 0 === SG ? void 0 : SG.showsAimingUi),
          kG = 0 === (KG.v.playerFlags(this.api.apiView, 0) & KG.Hd.ZoomFirstPerson),
          UG = null !== (bG = this.tables.getClientOption("gunshotOrigin")) && void 0 !== bG ? bG : null;
        return (0, pb.h)({
          gun: LG,
          aimable: yG
        }, kG, (0, fb.e)(), UG)
      }
      setCrosshairShown(GG) {
        wG.e.set({
          crosshairShownOverride: GG
        })
      }
      getInventoryFreeSlotCount(GG) {
        return this.isLocal(GG) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(GG) {
        return this.isLocal(GG) ? this.items.selectedSlot : null
      }
      getItemSlot(GG, bG) {
        return this.isLocal(GG) ? this.items.slot(bG) : null
      }
      swapInventorySlots(GG, bG) {
        return this.items.swap(GG, bG)
      }
      isPlayerCrouching(GG) {
        if (this.isLocal(GG)) return 0 !== (KG.v.playerFlags(this.api.apiView, 0) & KG.Hd.Crouching);
        const bG = yZ(GG);
        return bG !== KG.Wc && 1 === this.api.queries.entityCrouching(bG)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (KG.v.playerFlags(this.api.apiView, 0) & KG.Hd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.RGG()
      }
      getActionRay() {
        const GG = this.api.apiView;
        for (let bG = 0; bG < 3; bG++) Bb.origin[bG] = KG.v.kbG(GG, 0, bG), Bb.direction[bG] = KG.v.actionDir(GG, 0, bG);
        return Bb
      }
      canModifyBlockAt(GG, bG, ZG) {
        return 1 === this.api.queries.canModify(GG, bG, ZG)
      }
      isSolidToPlayerBlockId(GG) {
        return this.tables.isSolidBlockId(GG) && !this.chunks.isWalkThrough(GG)
      }
      blockNameToBlockId(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(GG, bG)
      }
      blockIdToBlockName(GG) {
        return this.tables.nameOfId(GG)
      }
      vbG(GG, bG, ZG, wG, SG) {
        return 1 === this.api.queries.terrainBlocked(wG, GG, bG, ZG, yZ(null !== SG && void 0 !== SG ? SG : null))
      }
      getChunkVersion(GG, bG, ZG) {
        return this.chunks.version(GG, bG, ZG)
      }
      scanBlocks(GG, bG, ZG, wG, SG, LG, yG, kG) {
        return this.chunks.scan(GG, bG, ZG, wG, SG, LG, yG, kG)
      }
      isBlockInLoadedChunk(GG, bG, ZG) {
        return this.chunks.isLoaded(GG, bG, ZG)
      }
      getBlockId(GG, bG, ZG) {
        return this.chunks.Gk(GG, bG, ZG)
      }
      playSound(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(GG)) return null;
        const yG = this.playSoundFrom(bG, ZG, SG, LG);
        return 1 === wG ? yG : yG.rate(wG)
      }
      preloadSounds(GG) {
        var bG, ZG;
        null === (bG = (ZG = this.deps).preloadSounds) || void 0 === bG || bG.call(ZG, GG)
      }
      playSoundFrom(GG, bG, ZG, wG) {
        var SG, LG;
        const yG = this.deps.playSound;
        if (!yG) return Wb.d;
        const kG = null === ZG || void 0 === ZG ? void 0 : ZG.SG,
          UG = null !== (SG = null === ZG || void 0 === ZG ? void 0 : ZG.maxHearDist) && void 0 !== SG ? SG : Vb.i,
          YG = null !== (LG = null === ZG || void 0 === ZG ? void 0 : ZG.refDistance) && void 0 !== LG ? LG : Vb.l;
        let VG = null;
        if (Array.isArray(kG)) Db[0] = kG[0], Db[1] = kG[1], Db[2] = kG[2], VG = Db;
        else if (void 0 !== kG && null !== kG) {
          const GG = yZ(kG);
          if (!this.api.isLocal(GG)) {
            if (!this.api.readPosition(GG, Db)) return Wb.d;
            VG = Db
          }
        }
        return yG(GG, bG, VG, VG && this.ear(), UG, YG, wG)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, Nb)) Nb[1] += Ib;
        else {
          const GG = this.api.apiView;
          if (0 === KG.v.viewProj(GG, 0, 3) && 0 === KG.v.viewProj(GG, 0, 7) && 0 === KG.v.viewProj(GG, 0, 11)) return null;
          for (let bG = 0; bG < 3; bG++) Nb[bG] = KG.v.eye(GG, 0, bG)
        }
        return Number.isFinite(Nb[0] + Nb[1] + Nb[2]) ? Nb : null
      }
      setBlockId(GG, bG, ZG, wG) {
        if (!Number.isInteger(wG) || wG < 0 || wG > 65535) throw new Error(`Invalid block id ${wG}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(GG, bG, ZG)) return;
        const SG = Math.floor(GG),
          LG = Math.floor(bG),
          yG = Math.floor(ZG),
          kG = this.predictedCells(SG, LG, yG, wG);
        if (1 === this.api.queries.HI(SG, LG, yG, wG)) {
          for (let GG = 0; GG < kG.length; GG += 5) this.chunks.setOverlay(kG[GG], kG[GG + 1], kG[GG + 2], kG[GG + 3], 1 === kG[GG + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(GG, bG) {
        return this.deps.particles.create(GG, bG)
      }
      playParticleEffect(GG) {
        this.deps.particles.playEffect(GG)
      }
      burstParticlePreset(GG, bG, ZG) {
        this.deps.particles.burstPreset(GG, bG, ZG)
      }
      createGameMesh(GG, bG, ZG) {
        const wG = ++this.meshKeys,
          SG = this.deps.cmd();
        if (!SG) return wG;
        const {
          look: LG,
          colour: yG
        } = function(GG) {
          switch (GG.kind) {
            case void 0:
            case "flatEmissive":
              return GG.onTop ? {
                look: KG.Yb.FlatOnTop,
                colour: [...GG.rgb, GG.alpha]
              } : GG.opaque ? {
                look: KG.Yb.FlatOpaque,
                colour: [...GG.rgb, 1]
              } : {
                look: KG.Yb.Flat,
                colour: [...GG.rgb, GG.alpha]
              };
            case "chevronPath":
              return {
                look: KG.Yb.Chevrons, colour: [...(0, Qb.b)(GG.colour), GG.alpha]
              };
            case "furnaceFire":
              return {
                look: KG.Yb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(bG), kG = Math.floor(GG.positions.length / 3), UG = function(GG, bG) {
          const ZG = Math.floor(GG.positions.length / 3),
            wG = GG.indices.length,
            SG = ZG * (bG ? 5 : 3),
            LG = new Uint8Array(4 * (SG + wG)),
            yG = new DataView(LG.buffer);
          for (let YG = 0; YG < 3 * ZG; YG++) yG.setFloat32(4 * YG, GG.positions[YG], !0);
          if (bG) {
            var kG;
            const bG = null !== (kG = GG.uvs) && void 0 !== kG ? kG : [];
            for (let GG = 0; GG < 2 * ZG; GG++) {
              var UG;
              yG.setFloat32(4 * (3 * ZG + GG), null !== (UG = bG[GG]) && void 0 !== UG ? UG : 0, !0)
            }
          }
          for (let YG = 0; YG < wG; YG++) yG.setUint32(4 * (SG + YG), GG.indices[YG], !0);
          return LG
        }(GG, (0, Ub.g)(bG));
        return (0, KG.ye)(SG, 0, wG, LG, yG, ZG, kG, GG.indices.length, UG) && this.liveMeshes.add(wG), wG
      }
      setGameMesh(GG, bG) {
        var ZG;
        const wG = this.deps.cmd();
        if (!wG) return;
        let SG = 0;
        bG.anchor && (SG |= KG._b.Anchor, GZ[0] = bG.anchor[0], GZ[1] = bG.anchor[1], GZ[2] = bG.anchor[2]), void 0 !== bG.visible && (SG |= KG._b.Visible), bG.uvOffset && (SG |= KG._b.UvOffset, bZ[0] = bG.uvOffset[0], bZ[1] = bG.uvOffset[1]);
        const LG = null !== (ZG = bG.visibility) && void 0 !== ZG ? ZG : 1;
        void 0 !== bG.visibility && (SG |= KG._b.Visibility), bG.scale && (SG |= KG._b.Scale, ZZ[0] = bG.scale[0], ZZ[1] = bG.scale[1], ZZ[2] = bG.scale[2]), 0 !== SG && (0, KG.Fe)(wG, 0, GG, SG, bG.visible ? 1 : 0, GZ, bZ, LG, ZZ)
      }
      disposeGameMesh(GG) {
        const bG = this.deps.cmd();
        bG && !(0, KG.Ce)(bG, 0, GG) || this.liveMeshes.delete(GG)
      }
      hasPackModel(GG) {
        var bG, ZG, wG;
        return null !== (bG = null === (ZG = (wG = this.deps).hasPackModel) || void 0 === ZG ? void 0 : ZG.call(wG, GG)) && void 0 !== bG && bG
      }
      disposeGameOutput() {
        const GG = GG => {
          try {
            GG()
          } catch (bG) {
            console.error("Error freeing client game output", bG)
          }
        };
        for (const bG of [...this.liveMeshes]) GG((() => {
          this.disposeGameMesh(bG)
        }));
        for (const bG of [...this.livePools]) GG((() => {
          bG.dispose()
        }));
        GG((() => {
          this.mobModels.disposeAll()
        })), GG((() => {
          this.setGroundArrowStyle(null)
        })), GG((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), GG((() => {
          this.setCrosshairShown(null)
        })), GG((() => {
          this.cameraTurn.dispose()
        })), GG((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(GG, bG) {
        const ZG = this.tables.idOf(GG.item);
        if (void 0 === ZG) return null;
        const wG = new qb(++this.poolKeys, {
          item: ZG,
          scale: GG.scale,
          yaw: GG.yaw
        }, bG, this.poolHost);
        return this.livePools.add(wG), wG
      }
      createMobModel(GG, bG) {
        return this.mobModels.create(GG, bG)
      }
      setRouteChevrons(GG) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !GG || 0 === GG.cells.length) return;
        const bG = `${GG.colour} ${GG.alpha}`;
        bG !== this.routeLook && (this.routeLook = bG, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(GG) {
          const [bG, ZG, wG] = GG[0].pos, SG = [], LG = [], yG = [];
          return GG.forEach(((GG, kG) => {
            let {
              pos: UG,
              way: [YG, VG]
            } = GG;
            const pG = UG[0] - bG + .5,
              fG = UG[1] - ZG + .04,
              QG = UG[2] - wG + .5,
              [KG, hG] = [.35 * -VG, .35 * YG],
              [dG, JG] = [kG * wZ, (kG + 1) * wZ],
              rG = SG.length / 3;
            SG.push(pG - .5 * YG + KG, fG, QG - .5 * VG + hG), SG.push(pG - .5 * YG - KG, fG, QG - .5 * VG - hG), SG.push(pG + .5 * YG + KG, fG, QG + .5 * VG + hG), SG.push(pG + .5 * YG - KG, fG, QG + .5 * VG - hG), LG.push(0, dG, 1, dG, 0, JG, 1, JG), yG.push(rG, rG + 1, rG + 2, rG + 1, rG + 3, rG + 2)
          })), {
            positions: SG,
            uvs: LG,
            indices: yG
          }
        }(GG.cells), {
          kind: "chevronPath",
          colour: GG.colour,
          alpha: GG.alpha
        }, GG.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(GG) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(GG, 250) / 1e3 * 1.2 * wZ) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(GG) {
        this.pendingStyle = GG, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const GG = this.owedFrees;
        if (0 === GG.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const bG = this.deps.cmd();
        if (!bG) return GG.length = 0, void(this.pendingFar = void 0);
        let ZG = 0;
        for (; ZG < GG.length && (0, KG.Le)(bG, 0, GG[ZG]);) ZG++;
        GG.splice(0, ZG);
        const wG = this.pendingStyle;
        if (void 0 !== wG) {
          (wG ? (0, KG.Tf)(bG, 0, wG.width, wG.alpha, 1, wG.endAtSolidFace ? 1 : 0) : (0, KG.Tf)(bG, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const SG = this.pendingFar;
        void 0 !== SG && (0, KG.Mf)(bG, 0, null !== SG && void 0 !== SG ? SG : 0, null === SG ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(GG, bG) {
        const ZG = this.deps.cmd(),
          wG = yZ(GG);
        ZG && wG !== KG.Wc && (0, KG.Yf)(ZG, 0, wG, bG)
      }
      setFacingTolerance(GG, bG) {
        const ZG = this.deps.cmd(),
          wG = yZ(GG);
        ZG && wG !== KG.Wc && kZ(ZG, wG, bG)
      }
      forEachEntity(GG) {
        const {
          api: bG
        } = this;
        for (let ZG = 0; ZG < bG.idStr.length; ZG++) {
          const wG = bG.idStr[ZG];
          null === wG || oG(bG.kinds[ZG]) || GG(wG)
        }
      }
      getEntityInfo(GG) {
        return this.deps.entityInfo.get(GG)
      }
      isEntityInteractable(GG) {
        const bG = yZ(GG);
        return bG !== KG.Wc && 1 === this.api.queries.entityInteractable(bG)
      }
      isLocalPlayer(GG) {
        return this.isLocal(GG)
      }
      getLineOwner(GG) {
        var bG;
        const ZG = null === (bG = this.deps.entityInfo.get(GG)) || void 0 === bG ? void 0 : bG.meshOpts;
        if (!ZG) return null;
        try {
          const {
            lineToEId: GG
          } = JSON.parse(ZG);
          return null !== GG && void 0 !== GG ? GG : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const GG = this.api.apiView;
        return xb[0] = KG.v.eye(GG, 0, 0), xb[1] = KG.v.eye(GG, 0, 1), xb[2] = KG.v.eye(GG, 0, 2), xb
      }
      getCameraFar() {
        return KG.v.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(GG) {
        null !== GG && (this.farSet = !0), this.pendingFar = GG, this.flushOwed()
      }
      turnCamera(GG, bG) {
        this.cameraTurn.turn(GG, bG)
      }
      clearPickupDelay(GG) {
        const bG = this.deps.cmd(),
          ZG = yZ(GG);
        bG && ZG !== KG.Wc && (0, KG.ne)(bG, 0, ZG)
      }
      sendChat(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZG = this.deps.sendCmd();
        ZG && Tb(ZG, 0, tb.b.Chat, (0, PG.g)((0, tb.m)({
          vV: GG,
          aV: bG
        })))
      }
      sendCommand(GG) {
        GG.length <= 119 && this.sendChat(`/${GG}`)
      }
      predictedCells(GG, bG, ZG, wG) {
        const SG = this.chunks,
          LG = [],
          yG = (GG, bG, ZG, wG, SG) => {
            LG.push(GG, bG, ZG, wG, this.tables.blockRootId(SG) === this.tables.blockRootId(wG) ? 0 : 1)
          },
          kG = SG.Gk(GG, bG, ZG),
          UG = LZ(kG);
        if (UG) {
          const [wG, LG, YG] = [GG - UG.x, bG - UG.y, ZG - UG.z], VG = SZ[SG.Gk(wG, LG, YG)], pG = null === VG || void 0 === VG ? void 0 : VG.positions.some((GG => GG.id === kG && GG.x === UG.x && GG.y === UG.y && GG.z === UG.z));
          for (const GG of (pG && VG ? VG : UG.main).positions) SG.Gk(wG + GG.x, LG + GG.y, YG + GG.z) === GG.id && yG(wG + GG.x, LG + GG.y, YG + GG.z, 0, GG.id)
        }
        const YG = LZ(wG);
        if (YG)
          for (const pG of YG.main.positions) {
            const [wG, LG, kG] = [GG + pG.x - YG.x, bG + pG.y - YG.y, ZG + pG.z - YG.z];
            yG(wG, LG, kG, pG.id, SG.Gk(wG, LG, kG))
          } else yG(GG, bG, ZG, wG, kG);
        const VG = this.tables;
        if ((0 !== VG.attachedTopOf(kG) || 0 !== VG.attachedTopOf(wG)) && SG.isLoaded(GG, bG + 1, ZG)) {
          let UG = SG.Gk(GG, bG + 1, ZG);
          for (let wG = 0; wG < LG.length; wG += 5) LG[wG] === GG && LG[wG + 1] === bG + 1 && LG[wG + 2] === ZG && (UG = LG[wG + 3]);
          const YG = this.attachedTopWrite(kG, wG, UG);
          void 0 !== YG && yG(GG, bG + 1, ZG, YG, UG)
        }
        return LG
      }
      attachedTopWrite(GG, bG, ZG) {
        const wG = this.tables,
          SG = wG.attachedTopOf(GG),
          LG = wG.attachedTopOf(bG),
          yG = 0 !== SG && 0 !== ZG && wG.blockRootId(ZG) === wG.blockRootId(SG);
        return 0 !== SG && 0 !== LG && wG.blockRootId(GG) === wG.blockRootId(bG) ? yG && ZG !== LG ? LG : void 0 : 0 === LG || !yG && 0 !== ZG ? yG ? 0 : void 0 : LG
      }
    }
    const YZ = KG.ic + KG.jc * KG.qc.BYTES,
      VZ = 2147483647,
      pZ = new TextDecoder,
      fZ = new TextEncoder,
      QZ = Object.freeze({
        uV: 0,
        ZU: null,
        amountAddedToSlot: 0
      }),
      KZ = new Proxy({}, {
        get: () => () => KG.fd
      });

    function hZ(GG) {
      return Number.isInteger(GG) && GG >= 0 && GG <= 65535
    }

    function dZ(GG) {
      return Number.isInteger(GG) && GG >= 0 && GG <= 4294967295
    }
    class JZ {
      constructor(GG) {
        this.deps = GG, this.eS = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(KG.jc), this.ids = new Uint16Array(KG.jc), this.amounts = new Uint16Array(KG.jc), this.attrRead = new Float64Array(KG.jc).fill(-1), this.stale = new Uint16Array(KG.jc), this.staleVersion = new Uint32Array(KG.jc), this.instances = new Uint32Array(KG.jc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(GG) {
        var bG;
        return Number.isInteger(GG) && GG >= 0 && GG < this.len && 0 !== this.ids[GG] && null !== (bG = this.facades[GG]) && void 0 !== bG ? bG : null
      }
      Ik() {
        return this.slot(this.selected)
      }
      playerItems() {
        const GG = [];
        for (let bG = 0; bG < Math.min(KG.qd, this.len); bG++) GG.push(this.slot(bG));
        return GG
      }
      freeSlots() {
        let GG = 0;
        for (let bG = 0; bG < Math.min(KG.qd - KG.f, this.len); bG++) 0 === this.ids[bG] && GG++;
        return GG
      }
      amountOf(GG) {
        let bG = 0;
        for (let wG = 0; wG < Math.min(KG.qd, this.len); wG++) {
          const SG = this.slot(wG);
          var ZG;
          if ((null === SG || void 0 === SG ? void 0 : SG.name) === GG) bG += null !== (ZG = SG.amount) && void 0 !== ZG ? ZG : 1
        }
        return bG
      }
      instance(GG) {
        var bG;
        return null !== (bG = this.instances[GG]) && void 0 !== bG ? bG : 0
      }
      watch(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      touch() {
        this.version++
      }
      flush(GG) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const ZG of [...this.listeners]) try {
            ZG()
          } catch (bG) {
            GG(bG)
          }
        }
      }
      chestOpened(GG, bG, ZG) {
        this.eS[0] = GG, this.eS[1] = bG, this.eS[2] = ZG, this.version++
      }
      refresh() {
        const GG = this.deps.api.apiView,
          bG = KG.v.inventoryViewPtr(GG, 0),
          ZG = KG.v.inventoryVersion(GG, 0),
          wG = KG.v.selectedSlot(GG, 0);
        wG !== this.selected && (this.selected = wG, this.version++);
        const SG = KG.v.slotIcon(GG, 0);
        if (SG !== this.slotIconId && (this.slotIconId = SG, this.iconChanged = !0), bG === this.viewPtr && ZG === this.viewVersion) return;
        this.viewPtr = bG, this.viewVersion = ZG;
        const LG = this.deps.api.memoryData(bG, YZ, 4, "the inventory view"),
          yG = LG ? Math.min(LG.getUint32(0, !0), KG.jc) : 0;
        yG !== this.len && (this.len = yG, this.version++);
        let kG = 0;
        for (let UG = 0; UG < KG.jc; UG++) {
          const GG = KG.ic + UG * KG.qc.BYTES,
            bG = null !== LG && UG < yG ? KG.qc.item(LG, GG) : 0;
          if (0 === bG || null === LG) {
            0 !== this.ids[UG] && (this.ids[UG] = 0, this.attrRead[UG] = -1, this.instances[UG]++, this.version++);
            continue
          }
          const ZG = KG.qc.amount(LG, GG),
            wG = KG.qc.attrVersion(LG, GG);
          bG === this.ids[UG] && ZG === this.amounts[UG] || this.fill(UG, bG, ZG), wG !== this.attrRead[UG] && (this.stale[kG] = UG, this.staleVersion[kG] = wG, kG++)
        }
        kG > 0 && this.fetchAttributes(kG)
      }
      fill(GG, bG, ZG) {
        const {
          tables: wG
        } = this.deps, SG = bG !== this.ids[GG];
        let LG = this.facades[GG];
        LG || (LG = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[GG] = LG), SG && (LG.name = wG.nameOfId(bG), LG.typeObj = wG.itemType(bG), LG.attributes = {
          customAttributes: {}
        }, this.attrRead[GG] = -1, this.instances[GG]++), LG.amount = 0 === ZG ? null : ZG, this.ids[GG] = bG, this.amounts[GG] = ZG, this.version++
      }
      fetchAttributes(GG) {
        const {
          api: bG,
          onError: ZG
        } = this.deps, wG = bG.memoryView(Uint16Array, bG.scratch(), GG, "item_attributes_batch's slots");
        if (!wG) return void this.markRead(GG);
        wG.set(this.stale.subarray(0, GG));
        const SG = bG.queries.itemAttributesBatch(GG),
          LG = 4294967295 === SG ? null : bG.memoryData(bG.scratch(), SG, 4, "item_attributes_batch's answer");
        if (!LG) return void this.markRead(GG);
        const yG = new Uint8Array(LG.buffer, LG.byteOffset, SG);
        for (let UG = 0; UG + 8 <= SG;) {
          const GG = LG.getUint16(UG, !0),
            bG = LG.getUint32(UG + 4, !0),
            wG = yG.subarray(UG + 8, UG + 8 + bG);
          UG += 8 + (0, fG.ve)(bG);
          const SG = this.facades[GG];
          if (SG && 0 !== this.ids[GG] && 0 !== bG) {
            try {
              SG.attributes = JSON.parse(pZ.decode(wG))
            } catch (kG) {
              ZG(kG)
            }
            this.version++
          }
        }
        this.markRead(GG)
      }
      markRead(GG) {
        for (let bG = 0; bG < GG; bG++) this.attrRead[this.stale[bG]] = this.staleVersion[bG]
      }
      swap(GG, bG) {
        return hZ(GG) && hZ(bG) && this.settle(this.queries().invSwap(GG, bG))
      }
      move(GG, bG, ZG) {
        return hZ(GG) && hZ(bG) && dZ(ZG) && this.settle(this.queries().invMove(GG, bG, ZG))
      }
      quickMove(GG, bG, ZG, wG) {
        var SG, LG;
        if (!hZ(GG) || !hZ(bG) || !hZ(ZG) || null !== wG && !dZ(wG)) return null;
        const yG = this.queries().invQuickMove(GG, bG, ZG, null === wG ? -1 : Math.min(wG, VZ)),
          kG = yG === KG.fd ? KG.Kb : null !== (SG = null === (LG = this.extras()) || void 0 === LG ? void 0 : LG[1]) && void 0 !== SG ? SG : KG.Kb;
        return this.settle(yG), kG === KG.Kb ? null : kG
      }
      remove(GG, bG, ZG) {
        return hZ(GG) && dZ(bG) && this.settle(this.queries().invRemove(GG, bG, ZG ? 1 : 0))
      }
      selectSlot(GG) {
        return hZ(GG) && this.settle(this.queries().selectSlot(GG))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(GG, bG, ZG) {
        if (!hZ(GG) || !Number.isInteger(bG)) return !1;
        const [wG, SG, LG] = ZG;
        return this.settle(this.queries().invEnchant(GG, bG, Math.floor(wG), Math.floor(SG), Math.floor(LG)))
      }
      craft(GG, bG, ZG) {
        let wG;
        try {
          wG = this.deps.tables.getItemId(GG)
        } catch {
          return QZ
        }
        if (!hZ(bG) || null !== ZG && (Number.isNaN(ZG) || ZG < 0)) return QZ;
        const SG = null === ZG || ZG > VZ ? -1 : Math.floor(ZG),
          LG = this.queries().craft(wG, bG, SG);
        let yG = QZ;
        const kG = LG === KG.fd ? null : this.extras();
        if (kG) {
          const [GG, bG, ZG] = kG;
          yG = {
            uV: GG,
            ZU: bG === KG.Kb ? null : bG,
            amountAddedToSlot: ZG
          }
        }
        return this.settle(LG), yG
      }
      salvage(GG, bG, ZG) {
        let wG;
        try {
          wG = this.deps.tables.getItemId(bG)
        } catch {
          return !1
        }
        return hZ(GG) && Number.isInteger(ZG) && this.settle(this.queries().salvage(GG, wG, Math.max(Math.min(ZG, VZ), -VZ)))
      }
      craftingView(GG, bG, ZG) {
        var wG;
        if (this.stopped) return null;
        const {
          api: SG,
          onError: LG
        } = this.deps, yG = GG ? fZ.encode(GG) : null;
        if (null !== yG) {
          if (yG.length > 1024) return LG(new Error(`The crafting station ${GG}'s name is over 1024 bytes`)), null;
          const bG = SG.memoryView(Uint8Array, SG.scratch(), yG.length, "crafting_view's station");
          if (!bG) return null;
          bG.set(yG)
        }
        const kG = hZ(bG) && hZ(ZG),
          UG = SG.queries.craftingView(null !== (wG = null === yG || void 0 === yG ? void 0 : yG.length) && void 0 !== wG ? wG : 0, kG ? bG : 0, kG ? ZG : 0);
        return UG < KG.nb.BYTES ? (SG.reportCorruption(`crafting_view's answer of ${UG} bytes`), null) : SG.memoryData(SG.scratch(), UG, 1, "crafting_view's answer")
      }
      queries() {
        var GG, bG;
        return !1 === (null === (GG = (bG = this.deps).beforeOp) || void 0 === GG ? void 0 : GG.call(bG)) ? (this.stopped = !0, KZ) : this.deps.api.queries
      }
      extras() {
        const {
          api: GG
        } = this.deps;
        return GG.memoryView(Uint32Array, GG.scratch(), 3, "a sync query's extra words")
      }
      settle(GG) {
        if (GG === KG.dd)(0, Rb.d)();
        else if (GG !== KG.fd) {
          const bG = this.deps.cmd();
          bG && function(GG, bG, ZG) {
            return (0, Rb.d)(), (0, KG.fg)(GG, bG, ZG)
          }(bG, 0, GG) || this.deps.onError(new Error(`Sync op ${GG}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), GG !== KG.fd
      }
    }
    const rZ = 1 / .6,
      zZ = [0, 1, 0],
      EZ = [0, 0, 0],
      oZ = new Uint8Array(0),
      XZ = 1.2 * Kb.d.Hd,
      uZ = new TextEncoder,
      iZ = [0, 0, 0],
      CZ = [0, 0, 0],
      WZ = new Map;

    function mZ(GG) {
      let bG = WZ.get(GG);
      return bG || (WZ.size >= 64 && WZ.clear(), bG = uZ.encode(`{"emitRate":${GG}}`), WZ.set(GG, bG)), bG
    }

    function IZ(GG) {
      return Number.isFinite(GG) && GG > 0 ? GG : 0
    }

    function FZ(GG, bG) {
      for (let ZG = 0; ZG < 3; ZG++) {
        const wG = Math.abs(bG[ZG]);
        iZ[ZG] = GG[ZG] - wG, CZ[ZG] = 2 * wG
      }
      return Number.isFinite(iZ[0] + iZ[1] + iZ[2] + CZ[0] + CZ[1] + CZ[2])
    }

    function vZ(GG, bG) {
      return "pos1" === GG || "pos2" === GG ? void 0 : bG
    }

    function aZ(GG, bG, ZG) {
      return GG.length > KG.Dd.MaxOpts ? (ZG(new Error(`${bG}'s particle opts are over ${KG.Dd.MaxOpts} bytes of JSON`)), null) : GG
    }
    const cZ = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class lZ {
      constructor(GG) {
        this.deps = GG, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(GG, bG) {
        var ZG;
        const wG = this.sink(),
          SG = null !== (ZG = bG.half) && void 0 !== ZG ? ZG : EZ;
        if (!wG || this.live >= KG.Dd.MaxLiveKeys || this.nextKey > KG.Dd.MaxKey || !FZ(bG.pos, SG)) return cZ;
        const LG = this.nextKey,
          yG = aZ(function(GG) {
            var bG, ZG, wG;
            const SG = JSON.stringify({
              texture: "string" === typeof GG.texture ? GG.texture : "smokePuff",
              rp: GG.rp,
              minLifeTime: GG.minLifeTime,
              maxLifeTime: GG.maxLifeTime,
              minSize: GG.minSize,
              maxSize: GG.maxSize,
              minEmitPower: GG.minEmitPower,
              maxEmitPower: GG.maxEmitPower,
              emitRate: IZ(GG.emitRate),
              gravity: null !== (bG = GG.gravity) && void 0 !== bG ? bG : EZ,
              dir1: null !== (ZG = GG.dir1) && void 0 !== ZG ? ZG : zZ,
              dir2: null !== (wG = GG.dir2) && void 0 !== wG ? wG : zZ,
              colorGradients: GG.colorGradients,
              blendMode: GG.blendMode
            });
            return uZ.encode(SG)
          }(GG), "createParticles", this.deps.onError);
        return yG && (0, KG.gf)(wG, 0, LG, 0, KG.Dd.PresetNone, 0, iZ, CZ, yG) ? (this.nextKey++, this.live++, this.started = !0, new jZ(this, this.session, LG, GG, SG)) : cZ
      }
      playEffect(GG) {
        const bG = this.sink(),
          {
            pos1: ZG,
            pos2: wG
          } = GG;
        if (!bG || !ZG || !wG) return;
        for (let LG = 0; LG < 3; LG++) iZ[LG] = Math.min(ZG[LG], wG[LG]), CZ[LG] = Math.abs(wG[LG] - ZG[LG]);
        if (!Number.isFinite(iZ[0] + iZ[1] + iZ[2] + CZ[0] + CZ[1] + CZ[2])) return;
        const SG = aZ(uZ.encode(JSON.stringify(GG, vZ)), "playParticleEffect", this.deps.onError);
        SG && (0, KG.af)(bG, 0, 0, KG.Dd.PresetNone, KG.Dd.HasBox, 0, iZ, CZ, SG)
      }
      burstPreset(GG, bG, ZG) {
        const wG = this.sink(),
          SG = Math.min(Math.floor(ZG), KG.Dd.MaxBurst);
        if (!wG || !Object.hasOwn(KG.bc, GG) || !(SG > 0)) return;
        const LG = XZ;
        for (let yG = 0; yG < 3; yG++) iZ[yG] = bG[yG] - LG / 2, CZ[yG] = LG;
        Number.isFinite(iZ[0] + iZ[1] + iZ[2]) && (0, KG.af)(wG, 0, 0, KG.bc[GG], KG.Dd.HasBox, SG, iZ, CZ, oZ)
      }
      sessionEnded() {
        this.session++;
        const GG = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !GG || (0, KG.kf)(GG, 0)
      }
      sinkFor(GG) {
        return GG === this.session ? this.deps.cmd() : null
      }
      stop(GG, bG) {
        const ZG = this.sinkFor(GG);
        ZG && (0, KG.lf)(ZG, 0, bG) && this.live--
      }
    }
    class jZ {
      constructor(GG, bG, ZG, wG, SG) {
        this.owner = GG, this.session = bG, this.key = ZG, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(SG[0]), Math.abs(SG[1]), Math.abs(SG[2])], this.rate = IZ(wG.emitRate), this.emitted = this.rate > 0;
        const LG = wG.maxLifeTime * rZ * 1e3 + 250;
        this.stopDelayMs = LG >= 0 ? Math.min(LG, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(GG, bG) {
        const ZG = this.sink();
        if (ZG) {
          if (bG)
            for (let GG = 0; GG < 3; GG++) this.half[GG] = Math.abs(bG[GG]);
          FZ(GG, this.half) && (0, KG.mf)(ZG, 0, this.key, KG.Dd.HasBox, iZ, CZ, oZ)
        }
      }
      setEmitRate(GG) {
        const bG = this.sink(),
          ZG = IZ(GG);
        bG && ZG !== this.rate && (0, KG.mf)(bG, 0, this.key, 0, EZ, EZ, mZ(ZG)) && (this.rate = ZG, this.emitted ||= ZG > 0)
      }
      emit(GG) {
        const bG = this.sink(),
          ZG = Math.min(Math.floor(GG), KG.Dd.MaxBurst);
        bG && ZG > 0 && (0, KG.af)(bG, 0, this.key, KG.Dd.PresetNone, 0, ZG, EZ, EZ, oZ) && (this.emitted = !0)
      }
      emitPoints(GG, bG, ZG) {
        const wG = this.sink(),
          SG = Math.min(Math.floor(ZG), KG.Dd.MaxPoints, Math.floor(bG.length / 4));
        if (!wG || !(SG > 0) || !Number.isFinite(GG[0] + GG[1] + GG[2])) return;
        const LG = new Uint8Array(bG.buffer, bG.byteOffset, SG * KG.Dd.PointBytes);
        (0, KG.cf)(wG, 0, this.key, SG, GG, LG) && (this.emitted = !0)
      }
      setDirections(GG, bG) {
        const ZG = this.sink();
        if (!ZG || !Number.isFinite(GG[0] + GG[1] + GG[2] + bG[0] + bG[1] + bG[2])) return;
        const wG = uZ.encode(JSON.stringify({
          dir1: [GG[0], GG[1], GG[2]],
          dir2: [bG[0], bG[1], bG[2]]
        }));
        (0, KG.mf)(ZG, 0, this.key, 0, EZ, EZ, wG)
      }
      stop() {
        const GG = this.sink();
        this.stopped = !0, GG && (this.emitted ? (this.rate > 0 && (0, KG.mf)(GG, 0, this.key, 0, EZ, EZ, mZ(0)), setTimeout((() => {
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
    const PZ = nb.s,
      MZ = new TextDecoder;

    function AZ(GG, bG) {
      const {
        serverIds: ZG,
        kinds: wG
      } = GG;
      let SG = 0;
      for (let LG = 0; LG < ZG.length; LG++) {
        const GG = ZG[LG];
        if (GG !== KG.Wc && !oG(wG[LG])) {
          if (SG === bG.length) {
            const GG = new Int32Array(Math.max(64, 2 * SG));
            GG.set(bG), bG = GG
          }
          bG[SG++] = GG
        }
      }
      return {
        ids: bG,
        count: SG
      }
    }

    function sZ(GG, bG) {
      return GG.length >= bG ? GG : new Int32Array(Math.max(bG, 2 * GG.length))
    }

    function qZ(GG, bG, ZG, wG) {
      for (let SG = 0; SG < ZG; SG += 4096) {
        const LG = Math.min(4096, ZG - SG),
          yG = GG.memoryView(Int32Array, GG.scratch(), LG, "entity_info_batch's ids");
        if (!yG) return !1;
        yG.set(bG.subarray(SG, SG + LG));
        const kG = GG.queries.entityInfoBatch(LG),
          UG = 4294967295 === kG ? null : GG.memoryData(GG.scratch(), kG, 4, "entity_info_batch's records");
        if (!UG) return !1;
        for (let GG = 0; GG + KG.Rb.BYTES <= kG;) {
          const bG = KG.Rb.len(UG, GG);
          wG(KG.Rb.serverId(UG, GG), nZ(UG, GG, bG)), GG += KG.Rb.BYTES + (0, fG.ve)(bG)
        }
      }
      return !0
    }

    function nZ(GG, bG, ZG) {
      var wG, SG, LG;
      const yG = KG.Rb.kind(GG, bG),
        kG = 0 === yG ? null : XG(yG);
      if (null === kG) return null;
      const UG = KG.Rb.variation(GG, bG),
        YG = KG.Rb.pose(GG, bG),
        VG = KG.Rb.meta(GG, bG),
        pG = KG.Rb.mesh(GG, bG),
        fG = 0 !== (KG.Rb.flags(GG, bG) & KG.Nb.HasOpts),
        QG = PZ[kG];
      return Object.freeze({
        type: kG,
        variation: UG === KG.ad ? void 0 : null !== (wG = null !== (SG = null === QG || void 0 === QG ? void 0 : QG[UG]) && void 0 !== SG ? SG : null === QG || void 0 === QG ? void 0 : QG[0]) && void 0 !== wG ? wG : "default",
        pose: YG === KG.hc ? void 0 : null !== (LG = KG.Hb[YG]) && void 0 !== LG ? LG : KG.Hb[0],
        metaInfo: VG === KG.hc ? void 0 : KG.Lc[VG],
        meshKind: pG === KG.hc ? void 0 : KG.Ic[pG],
        meshOpts: fG ? MZ.decode(new Uint8Array(GG.buffer, GG.byteOffset + bG + KG.Rb.BYTES, ZG)) : void 0
      })
    }
    const gZ = 1,
      eZ = 2;
    class RZ {
      constructor(GG) {
        this.deps = GG, this.wanted = 0, this.Ik = !1, this.refused = !1
      }
      get on() {
        return this.Ik
      }
      want(GG, bG) {
        this.wanted = bG ? this.wanted | GG : this.wanted & ~GG;
        const ZG = 0 !== this.wanted;
        if (ZG === this.Ik) return;
        const wG = this.deps.cmd();
        null !== wG ? (0, KG.kg)(wG, 0, ZG ? 1 : 0) ? (this.Ik = ZG, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Ik = !1
      }
    }
    class TZ {
      constructor(GG) {
        this.deps = GG, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(GG) {
        var bG;
        return this.complete || this.fill(), null !== (bG = this.entries.get("string" === typeof GG ? GG : String(GG))) && void 0 !== bG ? bG : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(GG) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const GG = new Int32Array(2 * this.pending.length);
            GG.set(this.pending), this.pending = GG
          }
          this.pending[this.pendingCount++] = GG
        }
      }
      removed(GG) {
        this.entries.size > 0 && this.entries.delete(String(GG))
      }
      refresh() {
        const GG = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (GG > 0 && this.complete) {
          const {
            api: bG
          } = this.deps;
          let ZG = 0;
          const wG = this.ids = sZ(this.ids, GG);
          for (let SG = 0; SG < GG; SG++) {
            const GG = this.pending[SG],
              LG = bG.indexById.get(GG);
            void 0 === LG || oG(bG.kinds[LG]) ? this.entries.delete(String(GG)) : wG[ZG++] = GG
          }
          ZG > 0 && !this.batch(wG, ZG) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(gZ, !1)
      }
      fill() {
        const {
          api: GG
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: GG
          } = this.deps, bG = GG.on;
          GG.want(gZ, !0), !bG && GG.on && (this.refill = this.midFrame)
        }
        const {
          ids: bG,
          count: ZG
        } = AZ(GG, this.ids);
        this.ids = bG, ZG > 0 && !this.batch(bG, ZG) && (this.refill = !0)
      }
      batch(GG, bG) {
        return qZ(this.deps.api, GG, bG, ((GG, bG) => {
          null === bG ? this.entries.delete(String(GG)) : this.entries.set(String(GG), bG)
        }))
      }
    }
    var HZ = ZG(4818);

    function tZ(GG) {
      if ("message" !== GG.type || GG.vV !== HZ.jc.NewClientOptions || GG.payloadKind !== fG.jc.Msgpack) return null;
      const bG = (0, PG.e)(GG.payload);
      if (null === bG || "object" !== typeof bG || Array.isArray(bG)) throw new Error("NewClientOptions whose body isn't an object of options");
      return bG
    }
    var DZ = ZG(1198),
      NZ = ZG(36973);

    function OZ(GG, bG, ZG, wG, SG, LG, kG) {
      var UG, YG, VG;
      switch (GG) {
        case KG.be.ToggleMenu: {
          const GG = KG.F[bG];
          yG.l.xh("toggleMenu", void 0 === GG ? "inventory" : `inventory|${GG}`);
          break
        }
        case KG.be.EditBoard:
          yG.l.xh("EditBoard", {
            pos: 0 === bG ? null : ZG
          });
          break;
        case KG.be.EditCodeBlock:
        case KG.be.ViewCodeBlock:
          yG.l.xh("EditCodeBlock", {
            pos: ZG,
            canChangePos: GG === KG.be.EditCodeBlock
          });
          break;
        case KG.be.EditCustomLobbyBlock:
          yG.l.xh("EditCustomLobbyBlock", {
            pos: ZG
          });
          break;
        case KG.be.OpenIronChest:
          yG.l.xh("OpenIronChest", {
            pos: ZG
          });
          break;
        case KG.be.EditNameTag:
          yG.l.xh("EditNameTag", null !== (UG = null === (YG = SG.Ik()) || void 0 === YG || null === (VG = YG.attributes.customAttributes) || void 0 === VG ? void 0 : VG.text) && void 0 !== UG ? UG : "");
          break;
        case KG.be.EditBook: {
          var pG, fG, hG;
          const GG = null === (pG = SG.Ik()) || void 0 === pG ? void 0 : pG.attributes;
          yG.l.xh("EditBook", {
            pages: (0, DZ.R)(null === GG || void 0 === GG || null === (fG = GG.customAttributes) || void 0 === fG ? void 0 : fG.pages),
            title: null !== (hG = null === GG || void 0 === GG ? void 0 : GG.customDisplayName) && void 0 !== hG ? hG : "Title",
            isPublished: !(null === GG || void 0 === GG || !GG.customDescription)
          });
          break
        }
        case KG.be.CantChangeBlock:
          ! function(GG, bG) {
            const ZG = bG.getClientOption("cantChangeError"),
              wG = bG.getClientOption(GG ? "cantBuildError" : "cantBreakError"),
              SG = GG ? ZG : wG;
            (bG.getClientOption("canChange") || SG || "You cannot modify this block" !== ZG) && yG.l.xh("showBottomMessage", {
              message: wG || ZG,
              type: "Error"
            })
          }(1 === bG, LG);
          break;
        case KG.be.MiddleBarStart:
          yG.l.xh("middleScreenBarInitiate", {
            duration: wG,
            lS: 1 === ZG[0],
            horizBarRemOffset: bG
          });
          break;
        case KG.be.MiddleBarStop:
          yG.l.xh("middleScreenBarRemove");
          break;
        case KG.be.Hitmarker:
          yG.l.xh("localGunHitmarker", {
            eb: 1 === bG
          });
          break;
        case KG.be.ShotsLeft:
          yG.l.xh("localPlayerNewShotsLeft", wG);
          break;
        case KG.be.AimingOverlay:
          yG.l.xh("aimingOverlay", 3 === (3 & bG) ? "sniper" : "none");
          break;
        case KG.be.BottomMessage:
          yG.l.xh("showBottomMessage", JSON.parse(kG()));
          break;
        case KG.be.Crosshair:
          SG.inaccuracy = (0, MG.g)(wG), (0, NZ.b)().crosshairAccuracy(SG.inaccuracy);
          break;
        case KG.be.ChargeStage:
          break;
        case KG.be.EmoteWheelClose:
          yG.l.xh("requestEmoteWheelClose");
          break;
        case KG.be.BlockMined:
          yG.l.xh("localBlockMined");
          break;
        default:
          throw new QG.c(`UiEvent of no kind: what ${GG}`)
      }
    }
    var xZ = ZG(38409),
      BZ = ZG(34483),
      Gw = ZG(1939),
      bw = ZG(37158),
      Zw = ZG(34492),
      ww = ZG(4800);
    const Sw = 10,
      Lw = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      yw = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      kw = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function Uw(GG, bG) {
      let ZG, wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const LG = () => (ZG = (0, Gw.n)(ZG, bG()), ZG);
      return {
        current: LG,
        watch(bG) {
          const ZG = () => {
              bG(LG())
            },
            yG = [GG.watch(ZG)];
          return null !== wG && yG.push((0, Gw.q)((GG => {
            GG.some(wG) && ZG()
          }))), null !== SG && yG.push(SG(ZG)), () => {
            for (const GG of yG) GG()
          }
        }
      }
    }

    function Yw(GG) {
      return GG && {
        name: GG.name,
        amount: GG.amount,
        attributes: GG.attributes
      }
    }
    const Vw = new WeakMap;

    function pw(GG) {
      let bG = Vw.get(GG);
      return void 0 === bG && (bG = (0, Zw.creativeItemIds)().map((bG => ({
        name: GG.nameOfId(bG),
        amount: GG.isStackableId(bG) ? 1 : null,
        attributes: (0, xZ.e)("Gun" === (0, Zw.itemTypeOf)(bG) ? {
          type: "Gun",
          clipSize: (0, Zw.clipSizeOf)(bG)
        } : void 0)
      }))), Vw.set(GG, bG)), bG
    }

    function fw(GG, bG, ZG, wG) {
      const SG = bG => (GG.flush(wG), bG),
        LG = ZG => {
          var wG, SG, LG, yG, kG, UG, YG;
          const VG = GG.slot(ZG);
          if (!VG) return null;
          const {
            rootName: pG,
            metaStr: fG
          } = bG.getMetaInfo(VG.name);
          return {
            name: VG.name,
            amount: VG.amount,
            attributes: VG.attributes,
            instance: GG.instance(ZG),
            displayName: null !== (wG = VG.attributes.customDisplayName) && void 0 !== wG ? wG : bG.getDisplayName(pG),
            requiresAmmo: "RequiresAmmo" === fG,
            clipSize: null !== (SG = null !== (LG = null === (yG = VG.attributes.customAttributes) || void 0 === yG || null === (kG = yG.gunStats) || void 0 === kG ? void 0 : kG.clipSize) && void 0 !== LG ? LG : null === (UG = bG.getGunStats(pG)) || void 0 === UG ? void 0 : UG.clipSize) && void 0 !== SG ? SG : null === (YG = VG.typeObj) || void 0 === YG ? void 0 : YG.clipSize
          }
        },
        kG = function(GG, bG) {
          let ZG = null,
            wG = {
              focus: null,
              recipes: [],
              detail: null
            },
            SG = -1;
          const LG = new Set;
          return {
            read() {
              var LG, yG;
              if (null === ZG) return null !== wG.focus && (wG = {
                ...wG,
                focus: null
              }), wG;
              if (wG.focus === ZG && SG === GG.changes) return wG;
              if (SG = GG.changes, 0 === GG.length) return wG = {
                focus: ZG,
                recipes: [],
                detail: null
              }, wG;
              let kG = 0;
              if (null !== ZG.recipe) try {
                kG = bG.getItemId(ZG.recipe.name)
              } catch {}
              const UG = GG.craftingView(ZG.station, kG, null !== (LG = null === (yG = ZG.recipe) || void 0 === yG ? void 0 : yG.XV) && void 0 !== LG ? LG : 0);
              return wG = null === UG ? {
                focus: ZG,
                recipes: [],
                detail: null
              } : function(GG, bG, ZG) {
                let wG = KG.nb.BYTES;
                const SG = [];
                for (let VG = KG.nb.recipes(GG, 0); VG > 0; VG--) {
                  const ZG = KG.eb.flags(GG, wG),
                    LG = {
                      name: bG.nameOfId(KG.eb.item(GG, wG)),
                      XV: KG.eb.recipe(GG, wG),
                      requires: [],
                      produces: KG.eb.produces(GG, wG),
                      haveIngredients: 0 !== (ZG & KG.ab.HaveIngredients),
                      listed: 0 !== (ZG & KG.ab.Listed)
                    };
                  let yG = KG.eb.requires(GG, wG);
                  for (wG += KG.eb.BYTES; yG > 0; yG--) {
                    const ZG = KG.gb.items(GG, wG);
                    LG.requires.push({
                      items: hw(GG, wG + KG.gb.BYTES, ZG, bG),
                      amt: KG.gb.amount(GG, wG)
                    }), wG += KG.gb.BYTES + 2 * ZG
                  }
                  SG.push(LG)
                }
                const LG = KG.nb.flags(GG, 0);
                if (null === ZG.recipe || 0 === (LG & KG.kb.Detail)) return {
                  focus: ZG,
                  recipes: SG,
                  detail: null
                };
                const yG = {},
                  kG = {};
                for (let VG = KG.nb.ingredients(GG, 0); VG > 0; VG--) {
                  const ZG = KG._.item(GG, wG),
                    SG = KG._.from(GG, wG),
                    LG = KG._.amount(GG, wG);
                  wG += KG._.BYTES;
                  const UG = SG === KG.C ? null : hw(GG, wG, SG, bG);
                  if (null !== UG && (wG += 2 * SG), 0 === ZG) continue;
                  const YG = bG.nameOfId(ZG);
                  yG[YG] = LG, null !== UG && (kG[YG] = UG)
                }
                const {
                  name: UG,
                  XV: YG
                } = ZG.recipe;
                return {
                  focus: ZG,
                  recipes: SG,
                  detail: {
                    name: UG,
                    XV: YG,
                    craftAllTimes: KG.nb.craftAllTimes(GG, 0),
                    roomForOne: 0 !== (LG & KG.kb.RoomForOne),
                    resultStackable: Boolean(bG.getItemStat(UG, "stackable")),
                    amounts: yG,
                    ingredientsCraftedFrom: kG
                  }
                }
              }(UG, bG, ZG), wG
            },
            setFocus(GG) {
              ZG = GG;
              for (const bG of [...LG]) bG()
            },
            watchFocus: GG => (LG.add(GG), () => {
              LG.delete(GG)
            })
          }
        }(GG, bG);
      return {
        states: {
          inventory: Uw(GG, (() => {
            const ZG = GG.length;
            if (0 === ZG) return Lw;
            const wG = [];
            for (let bG = 0; bG < KG.qd; bG++) wG.push(Yw(GG.slot(bG)));
            const SG = GG.slotIcon,
              LG = wG[GG.selectedSlot];
            0 !== SG && LG && (wG[GG.selectedSlot] = {
              ...LG,
              icon: bG.nameOfId(SG)
            });
            const yG = !0 === bG.getClientOption("creative");
            let kG = [],
              UG = null;
            if (ZG > KG.qd) {
              for (let bG = KG.qd; bG < ZG; bG++) kG.push(Yw(GG.slot(bG)));
              UG = {
                type: null,
                pos: [...GG.eS],
                numSlots: ZG - KG.qd,
                ironChest: null
              }
            } else yG && (kG = pw(bG));
            return {
              player: wG,
              chestOrCreative: kG,
              chest: UG,
              creative: yG,
              selectedSlot: GG.selectedSlot,
              freeSlots: GG.freeSlots()
            }
          }), (0, Gw.i)("creative")),
          hotbar: Uw(GG, (() => {
            if (0 === GG.length) return yw;
            const bG = [];
            for (let GG = 0; GG < Sw; GG++) bG.push(LG(GG));
            return {
              items: bG,
              ammo: GG.amountOf("Ammo"),
              selectedSlot: GG.selectedSlot
            }
          }), (0, Gw.h)("DisplayName", "GunStats")),
          crafting: Uw(GG, kG.read, null, kG.watchFocus),
          heldItemAim: Uw(GG, (() => {
            var bG;
            if (!ZG()) return kw;
            const wG = null === (bG = GG.Ik()) || void 0 === bG ? void 0 : bG.typeObj,
              SG = "Gun" === (null === wG || void 0 === wG ? void 0 : wG.type);
            return {
              gun: SG,
              aimable: SG || !0 === (null === wG || void 0 === wG ? void 0 : wG.showsAimingUi),
              chargeName: "Chargeable" === (null === wG || void 0 === wG ? void 0 : wG.type) ? wG.name : null
            }
          }), null, (GG => function(GG, bG) {
            let ZG = GG();
            return (0, ww.t)((() => {
              const wG = GG();
              wG !== ZG && (ZG = wG, bG(wG))
            }))
          }(ZG, GG)))
        },
        events: {
          hotbarSlotRequested: (0, Gw.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, Gw.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, Gw.c)("numkeyPressed"),
          inventoryDropRequested: (0, Gw.c)("DropInvenItem"),
          chestToggled: (0, Gw.c)("chestToggleFromServer"),
          chestRefreshed: (0, Gw.c)("chestRefreshedFromServer", Kw),
          inventorySynced: (0, Gw.c)("syncedInvenFromServer", Kw),
          enchantingTableOpened: (0, Gw.c)("enchantingTable", (GG => {
            let {
              position: ZG,
              Gk: wG
            } = GG;
            return {
              position: [...ZG],
              blockName: bG.getMetaInfo(wG).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(bG) {
            GG.selectSlot(bG), GG.flush(wG)
          },
          removeInventoryItem(bG) {
            let {
              slot: ZG,
              amount: wG,
              drop: LG
            } = bG;
            return SG(GG.remove(ZG, wG, LG))
          },
          swapInventorySlots(bG) {
            let {
              a: ZG,
              b: wG
            } = bG;
            return SG(GG.swap(ZG, wG))
          },
          moveInventoryItem(bG) {
            let {
              from: ZG,
              to: wG,
              amount: LG
            } = bG;
            return SG(GG.move(ZG, wG, LG))
          },
          quickMoveInventoryItem(bG) {
            let {
              slot: ZG,
              start: wG,
              end: LG,
              amount: yG
            } = bG;
            return SG(GG.quickMove(ZG, wG, LG, yG))
          },
          closeChest() {
            GG.closeChest(), GG.flush(wG), yG.l.xh("chestClosedByPlayer")
          },
          focusCrafting(GG) {
            kG.setFocus(GG)
          },
          craftRecipe(bG) {
            let {
              name: ZG,
              XV: wG,
              times: LG
            } = bG;
            return SG(GG.craft(ZG, wG, LG))
          },
          salvageItem(bG) {
            let {
              slot: ZG,
              name: wG,
              amount: LG
            } = bG;
            return SG(GG.salvage(ZG, wG, LG))
          },
          enchantItem(bG) {
            let {
              slot: ZG,
              level: wG,
              tablePos: SG
            } = bG;
            GG.enchant(ZG, wG, SG)
          }
        },
        queries: {
          enchantingOffer(ZG) {
            let {
              slot: wG,
              blockName: SG
            } = ZG;
            return function(GG, bG, ZG, wG) {
              const SG = GG.slot(ZG);
              if (!SG || !bG.getClientOption("canCraft") || !(0, BZ.o)(wG) || (0, BZ.m)(SG.attributes)) return Qw;
              const LG = (0, Zw.enchantmentPerksOf)(bG.getItemId(SG.name));
              if (0 === LG.length) return Qw;
              const yG = [];
              for (let kG = 0; kG < bw.b; kG++) {
                const {
                  commonProb: GG,
                  uncommonProb: bG,
                  rareProb: ZG,
                  epicProb: SG,
                  legendaryProb: LG,
                  level: UG
                } = (0, BZ.g)(wG, kG);
                yG.push({
                  level: UG,
                  odds: [GG, bG, ZG, SG, LG].map((GG => 100 * GG))
                })
              }
              return {
                perks: [...LG],
                options: yG
              }
            }(GG, bG, wG, SG)
          }
        }
      }
    }
    const Qw = Object.freeze({
      perks: [],
      options: []
    });

    function Kw() {
      return null
    }

    function hw(GG, bG, ZG, wG) {
      const SG = [];
      for (let LG = 0; LG < ZG; LG++) {
        const ZG = GG.getUint16(bG + 2 * LG, !0);
        0 !== ZG && SG.push(wG.nameOfId(ZG))
      }
      return SG
    }
    class dw {
      constructor(GG) {
        this.api = GG, this.positions = new Map, this.targeted = {
          K9: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          Oh: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(GG) {
        let bG = this.positions.get(GG);
        return bG || (this.api.checkValid(GG) || this.api.isLocal(GG) ? (bG = [NaN, NaN, NaN], this.api.readPosition(GG, bG), this.positions.set(GG, bG), bG) : null)
      }
      RGG() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [bG, ZG] of this.positions) this.api.readPosition(bG, ZG) || this.api.checkValid(bG) || this.api.isLocal(bG) || this.positions.delete(bG);
        const GG = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (KG.v.playerFlags(GG, 0) & KG.Hd.Breaking) && KG.v.breakingProgress(GG, 0) >= 0, this.isBreaking)
          for (let bG = 0; bG < 3; bG++) this.breaking[bG] = KG.v.breakingPos(GG, 0, bG)
      }
      refreshTarget() {
        const GG = this.api.apiView,
          bG = KG.v.targetBlockId(GG, 0);
        if (this.hasTarget = bG !== KG.Yc, this.hasTarget) {
          const ZG = this.targeted;
          ZG.K9 = bG;
          for (let bG = 0; bG < 3; bG++) ZG.position[bG] = KG.v.targetBlock(GG, 0, bG), ZG.normal[bG] = KG.v.targetNormal(GG, 0, bG), ZG.Oh[bG] = KG.v.targetAdjacent(GG, 0, bG)
        }
      }
      despawned(GG) {
        const bG = this.positions.get(GG);
        bG && !this.api.isLocal(GG) && (bG.fill(NaN), this.positions.delete(GG))
      }
    }
    var Jw = ZG(41007),
      rw = ZG(40989),
      zw = ZG(36707),
      Ew = ZG(37154);
    const ow = 1,
      Xw = 2;
    class uw {
      constructor() {
        this.game = new Ew.g, this.client = new Ew.g, this.Ik = 0, this.movesFly = null
      }
      setGame(GG) {
        if (null === GG || "object" !== typeof GG) return !1;
        const {
          key: bG,
          value: ZG
        } = GG;
        return "string" === typeof bG && (this.game.setBooleanType(bG, Boolean(ZG)), !0)
      }
      setClient(GG, bG) {
        this.client.setBooleanType(GG, bG)
      }
      clearGame() {
        this.game = new Ew.g, this.movesFly = null
      }
      setMovesFly(GG) {
        this.movesFly = GG
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? ow : 0) | (this.client._getTotalBooleanVal() ? Xw : 0)
      }
      write(GG) {
        const bG = this.perms(),
          {
            movesFly: ZG
          } = this;
        if (bG === this.Ik && null === ZG) return !0;
        let wG = KG.Tb.Keep;
        return null !== ZG && (wG = ZG ? KG.Tb.On : KG.Tb.Off), !(!GG || !(0, KG.te)(GG, 0, wG, bG, ZG ? 1 : 0)) && (this.Ik = bG, this.movesFly = null, !0)
      }
    }
    class iw {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = GG, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: kG.b,
          get y() {
            return bG()
          }
        }
      }
      get hasView() {
        const GG = this.api.apiView,
          bG = KG.v.viewProj;
        return 0 !== bG(GG, 0, 3) || 0 !== bG(GG, 0, 7) || 0 !== bG(GG, 0, 11) || 0 !== bG(GG, 0, 15)
      }
      get cameraPosition() {
        const GG = this.api.apiView,
          {
            eye: bG
          } = this;
        for (let ZG = 0; ZG < 3; ZG++) bG[ZG] = KG.v.eye(GG, 0, ZG);
        return bG
      }
      get cameraDirection() {
        const GG = this.api.apiView,
          bG = KG.v.viewProj,
          ZG = bG(GG, 0, 3),
          wG = bG(GG, 0, 7),
          SG = bG(GG, 0, 11),
          LG = Math.hypot(ZG, wG, SG),
          {
            forward: yG
          } = this;
        return LG > 0 && (yG[0] = ZG / LG, yG[1] = wG / LG, yG[2] = SG / LG), yG
      }
      get cameraHeading() {
        return KG.v.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return KG.v.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return KG.v.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return KG.v.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(GG) {
        this.clip(GG);
        const {
          clipX: bG,
          clipY: ZG,
          clipW: wG
        } = this;
        if (wG > 0) {
          const GG = bG / wG * 50,
            SG = -ZG / wG * 50;
          return Math.abs(GG) <= this.screenBandPct.x && Math.abs(SG) <= this.screenBandPct.y ? {
            x: 50 + GG,
            y: 50 + SG
          } : this.clampToBand(GG, SG)
        }
        const SG = this.cameraPosition,
          LG = Math.hypot(GG[0] - SG[0], GG[1] - SG[1], GG[2] - SG[2]),
          yG = this.api.apiView,
          kG = KG.v.viewProj,
          UG = LG > 0 ? bG / LG : 0,
          YG = LG > 0 ? -ZG / LG : 0,
          VG = Math.hypot(kG(yG, 0, 1), kG(yG, 0, 5), kG(yG, 0, 9)),
          pG = UG / Math.hypot(kG(yG, 0, 0), kG(yG, 0, 4), kG(yG, 0, 8)),
          fG = YG / VG,
          QG = !(Math.abs(pG) >= .001 || Math.abs(fG) >= .001);
        return this.clampToBand(UG, QG ? -(VG || 1) : YG)
      }
      projectDirectionToScreenPos(GG) {
        if (!this.hasView) return;
        const bG = this.cameraPosition,
          ZG = this.along;
        for (let wG = 0; wG < 3; wG++) ZG[wG] = bG[wG] + 10 * GG[wG];
        return this.projectWorldPosToScreenPos(ZG)
      }
      projectWorldPosToViewport(GG) {
        this.clip(GG);
        const {
          clipX: bG,
          clipY: ZG,
          clipW: wG
        } = this;
        return wG > 0 ? {
          x: 50 + bG / wG * 50,
          y: 50 - ZG / wG * 50
        } : null
      }
      clip(GG) {
        const bG = this.api.apiView,
          ZG = GG[0] - KG.v.origin(bG, 0, 0),
          wG = GG[1] - KG.v.origin(bG, 0, 1),
          SG = GG[2] - KG.v.origin(bG, 0, 2),
          LG = KG.v.viewProj;
        this.clipX = LG(bG, 0, 0) * ZG + LG(bG, 0, 4) * wG + LG(bG, 0, 8) * SG + LG(bG, 0, 12), this.clipY = LG(bG, 0, 1) * ZG + LG(bG, 0, 5) * wG + LG(bG, 0, 9) * SG + LG(bG, 0, 13), this.clipW = LG(bG, 0, 3) * ZG + LG(bG, 0, 7) * wG + LG(bG, 0, 11) * SG + LG(bG, 0, 15)
      }
      clampToBand(GG, bG) {
        return (0, kG.c)(GG, bG, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var Cw = ZG(4836);
    const Ww = new TextEncoder,
      mw = new Uint8Array(KG.N * KG.J);
    class Iw {
      constructor() {
        this.buttons = [], this.Ik = !0
      }
      set(GG) {
        this.buttons = GG, this.Ik = !1
      }
      attached() {
        this.Ik = 0 === this.buttons.length
      }
      write(GG) {
        if (this.Ik) return;
        const bG = new Uint8Array(KG.N),
          ZG = new Uint8Array(KG.N);
        let wG = 0,
          SG = 0;
        for (const {
            id: LG,
            keycode: yG
          }
          of this.buttons) {
          if (wG === KG.N) break;
          const {
            read: GG,
            written: kG
          } = Ww.encodeInto(LG, mw.subarray(SG, SG + KG.J));
          if (GG < LG.length) continue;
          const UG = Cw.k[yG];
          bG[wG] = "number" === typeof UG ? UG : 0, ZG[wG] = kG, wG++, SG += kG
        }
        this.Ik = (0, KG.me)(GG, 0, wG, bG, ZG, mw.subarray(0, SG))
      }
    }

    function Fw(GG, bG, ZG) {
      const wG = Ww.encode(bG);
      return wG.length <= KG.J && function(GG, bG, ZG, wG) {
        return (0, Rb.d)(), (0, KG.pf)(GG, bG, ZG, wG)
      }(GG, 0, ZG ? 1 : 0, wG)
    }
    const vw = new TextDecoder,
      aw = new TextEncoder,
      lw = new Uint8Array(0),
      jw = [0, 0, 0],
      Pw = {
        off: KG.Kd.Off,
        key: KG.Kd.Key,
        touch: KG.Kd.Touch
      };
    class Mw {
      constructor(GG) {
        var bG;
        this.options = GG, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new Iw, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new uw, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.NQ = GG => {
          if ((0, QG.h)(GG)) throw GG;
          this.onError(GG)
        }, this.api = GG.api, this.tables = GG.tables, this.onError = null !== (bG = GG.onError) && void 0 !== bG ? bG : GG => {
          console.error("Error in client game callback", GG)
        }, this.renderFrame = new iw(this.api, GG.screenBandY), this.live = new dw(this.api), this.chunks = new kb(this.api.memory, (() => this.api.apiView)), this.items = new JZ({
          api: this.api,
          tables: GG.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: GG.beforeOp
        });
        const ZG = () => this.stopped() ? null : this.cmd,
          wG = () => this.sessionLive;
        this.entityInfoWatch = new RZ({
          cmd: ZG,
          onError: this.onError
        }), this.entityInfo = new TZ({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: wG
        }), this.particles = new lZ({
          cmd: ZG,
          isSessionLive: wG,
          onError: this.onError
        }), this.clientApi = new UZ({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: GG.tables,
          cmd: ZG,
          sendCmd: () => this.sendCmd(),
          isSessionLive: wG,
          beforeWrite: () => {
            var bG;
            if (this.stopped()) return !1;
            const ZG = this.generation;
            return !1 !== (null === (bG = GG.beforeWrite) || void 0 === bG ? void 0 : bG.call(GG)) && ZG === this.generation
          },
          playerDbId: () => {
            const GG = this.session;
            if (null === GG) throw new Error("No game session has started, so the local player has no DB id");
            return GG.playerDbId
          },
          playSound: GG.playSound,
          preloadSounds: GG.preloadSounds,
          setLocalOptions: GG.setLocalOptions,
          hasPackModel: GG.hasPackModel
        }), this.scriptedCamera = new HG({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: GG.cameraScreen,
          showFacing: GG.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= fw(this.items, this.tables, (() => this.localPlayerAlive()), this.NQ), this.itemSources
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
      clickCodeBlock(GG) {
        const bG = this.sessionLive ? this.sendCmd() : null;
        return null !== bG && (ZG = bG, wG = 0, SG = GG[0], LG = GG[1], yG = GG[2], (0, Rb.d)(), (0, KG.oe)(ZG, wG, SG, LG, yG));
        var ZG, wG, SG, LG, yG
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(GG) {
        const bG = this.liveCmd();
        return null === bG ? (this.pendingZoom = GG, !1) : (this.pendingZoom = null, (0, KG.dg)(bG, 0, GG, 1))
      }
      Tm(GG) {
        const bG = this.stopped() ? null : this.cmd;
        return null !== bG && (0, KG.$f)(bG, 0, GG ? 1 : 0)
      }
      respawn() {
        const GG = this.sessionLive ? this.sendCmd() : null;
        return null !== GG && (bG = GG, ZG = 0, (0, Rb.d)(), (0, KG.Cf)(bG, ZG));
        var bG, ZG
      }
      bindCustomButtonKeys(GG) {
        this.customButtons.set(GG)
      }
      pressCustomButton(GG, bG) {
        const ZG = this.sessionLive ? this.sendCmd() : null;
        return null !== ZG && Fw(ZG, GG, bG)
      }
      padMove(GG, bG, ZG, wG, SG, LG) {
        const yG = this.liveCmd();
        return null !== yG && (0, KG.Ye)(yG, 0, GG, bG, ZG, wG, SG, LG)
      }
      thirdPersonFor(GG) {
        const bG = this.liveCmd();
        return null !== bG && (0, KG.jg)(bG, 0, null !== GG && void 0 !== GG ? GG : 1 / 0)
      }
      send(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== wG && Tb(wG, ZG ? fG.wd : 0, GG, (0, PG.g)(bG))
      }
      socketAttached(GG) {
        this.openSocket = GG, this.socketLeftSinceAttach = !1
      }
      socketDetached(GG) {
        this.openSocket === GG && (this.openSocket = 0)
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
      attach(GG) {
        const bG = () => GG.isStopped;
        this.stopped = bG, this.cmd = GG.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const ZG = this.api.apiView;
        this.overflowGen = KG.v.eventOverflowGen(ZG, 0), this.resyncOwed = 0 !== KG.v.eventOverflowMask(ZG, 0), GG.setGameHost(this), GG.setEventWalker((GG => {
          this.api.walk(GG, this, bG)
        }))
      }
      watchPromptPick(GG) {
        this.promptWatch = GG, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : Aw(KG.v.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? KG.mc.None : KG.v.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : KG.v.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === GG || GG >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, GG, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(GG) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(GG)
      }
      netEvent(GG) {
        "connection" === GG.type ? GG.phase === fG.M.Activated && GG.conn !== this.activeConn && GG.conn > this.closedThrough ? (this.endSession(), this.activeConn = GG.conn, this.endGameGrants(), this.dropGameCamera()) : GG.phase !== fG.M.Left && GG.phase !== fG.M.Closed || GG.conn !== this.activeConn ? GG.phase === fG.M.Resumed && 0 !== this.activeConn && GG.conn > this.closedThrough && (this.activeConn = GG.conn) : this.closeGame() : GG.conn === this.activeConn && 0 !== GG.conn && (GG.vV === rw.r ? this.gunHit(GG.payload) : GG.vV === HZ.jc.EditItemCraftingRecipes || GG.vV === rw.V ? this.items.touch() : (this.serverOptions(GG), this.gameMessage(GG)));
        const bG = this.options.onNetEvent;
        bG && this.guard((() => {
          bG(GG)
        }))
      }
      serverOptions(GG) {
        const bG = this.options.serverOptions,
          ZG = bG ? this.decoded(tZ, GG) : null;
        bG && ZG && this.guard((() => {
          bG.applyNewClientOptions(ZG)
        }))
      }
      gameMessage(GG) {
        let bG = null;
        try {
          bG = function(GG) {
            if ("message" !== GG.type || GG.vV !== HZ.jc.GameCodeMessage || GG.payloadKind !== fG.jc.Msgpack) return null;
            const bG = (0, PG.e)(GG.payload);
            if (null === bG || "object" !== typeof bG || "string" !== typeof bG.messageType) throw new Error("GameCodeMessage without a messageType");
            return bG
          }(GG)
        } catch (ZG) {
          this.sessionLive && this.onError(ZG)
        }
        if (bG) {
          const {
            messageType: GG,
            data: ZG
          } = bG;
          if ((0, IG.e)(GG)) return void this.guard((() => {
            (0, IG.c)(GG, ZG)
          }));
          "freeCamPerms" === GG && this.freeCam.setGame(ZG) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (bG => {
            bG.onReceivedMessageFromServer(GG, ZG)
          }))
        }
      }
      decoded(GG, bG) {
        try {
          return GG(bG)
        } catch (ZG) {
          return this.onError(ZG), null
        }
      }
      setClientFreeCameraGrant(GG, bG) {
        this.freeCam.setClient(GG, bG), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(GG) {
        this.freeCam.setMovesFly(GG), this.writeFreeCam()
      }
      setBlockHighlight(GG) {
        this.highlight = GG, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const GG = this.liveCmd();
        if (null === GG || !this.highlightOwed) return;
        const bG = this.highlight;
        this.highlightOwed = null === bG ? !(0, KG.Ge)(GG, 0, jw, jw, 0) : !(0, KG.Ge)(GG, 0, bG.pos, bG.normal, 1)
      }
      localPlayerBound(GG) {
        var bG, ZG;
        if (0 === this.activeConn || this.sessionLive && GG === this.boundId) return;
        const wG = this.sessionLive;
        let SG, LG, yG, kG;
        this.endSession(), wG && this.restartGameCamera();
        try {
          var UG;
          this.session = null;
          const GG = this.options.sessionInfo(this.activeConn);
          if (this.session = GG, !GG) return;
          SG = GG.gameNameWithVariation, LG = null !== (UG = (0, WG.Vb)(SG)) && void 0 !== UG ? UG : void 0, yG = (0, mG.t)(GG.lobbyName), kG = (0, mG.K)(GG.lobbyName)
        } catch (rG) {
          return void this.onError(rG)
        }
        const YG = {
          localPlayerId: String(GG)
        };
        let VG = {},
          pG = {};
        try {
          var fG, QG;
          VG = null !== (fG = null === (QG = this.options.gameFactory((0, WG.Yb)(SG))) || void 0 === QG ? void 0 : QG(kG, yG, LG, YG)) && void 0 !== fG ? fG : {}
        } catch (rG) {
          this.NQ(rG)
        }
        try {
          var KG, hG;
          pG = {
            ...null === (KG = (hG = this.options).defaultPlugins) || void 0 === KG ? void 0 : KG.call(hG, kG, yG, LG, YG),
            ...VG.plugins
          }
        } catch (rG) {
          this.NQ(rG)
        }
        const dG = [VG, ...Object.values(pG)];
        this.owners = dG, this.tickers = dG.filter((GG => void 0 !== GG.Tp)), this.renderers = dG.filter((GG => void 0 !== GG.onAfterRender)), this.receivers = dG.filter((GG => void 0 !== GG.onReceivedMessageFromServer)), this.writeAltVeto(dG), this.writeHooks(dG), this.writePublicLobby(kG), this.writeLocalDbId(null !== (bG = null === (ZG = this.session) || void 0 === ZG ? void 0 : ZG.playerDbId) && void 0 !== bG ? bG : null), this.boundId = GG, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(dG, (GG => {
          var bG;
          null === (bG = GG.onCreate) || void 0 === bG || bG.call(GG, this.clientApi)
        }));
        const JG = this.generation;
        setTimeout((() => {
          JG === this.generation && !0 === this.tables.getClientOption("creative") && pw(this.tables)
        }), 0)
      }
      chunkSlot(GG, bG, ZG, wG, SG, LG) {
        this.chunks.apply(GG, bG, ZG, wG, SG, LG)
      }
      entityAdded(GG) {
        var bG;
        this.entityInfo.stale(GG), null === (bG = this.options.replayEntities) || void 0 === bG || bG.entityAdded(GG)
      }
      entityInfoChanged(GG) {
        var bG;
        this.entityInfo.stale(GG), null === (bG = this.options.replayEntities) || void 0 === bG || bG.entityInfoChanged(GG)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const GG = performance.now();
          this.round(this.tickers, sw), (0, ww.c)(performance.now() - GG)
        }
      }
      afterWalk(GG) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const bG = this.options.replayEntities;
        bG && this.guard((() => {
          this.entityInfoWatch.want(eZ, bG.wantsWatch), bG.flush(this.entityInfoWatch.on)
        }));
        const ZG = this.api.apiView,
          wG = KG.v.frameMs(ZG, 0);
        zw.m.frame(wG, KG.v.heading(ZG, 0), KG.v.pitch(ZG, 0), zw.k[GG]);
        const SG = (0, ww.k)(GG, wG);
        if (null !== SG) {
          const GG = this.renderFrame;
          this.guard((() => {
            (0, NZ.b)().turnDamageIndicators(GG.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(SG)
          })), this.round(this.renderers, (bG => {
            bG.onAfterRender(SG, GG)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== SG)
        } catch (yG) {
          this.NQ(yG)
        }
        this.showZoom(), this.items.flush(this.NQ), this.writePromptWatch(), this.writeCustomButtons();
        const LG = this.ticks;
        this.ticks = 0, (0, ww.j)(LG, GG, SG, this.NQ)
      }
      entityRemoved(GG) {
        this.live.despawned(GG), this.entityInfo.removed(GG)
      }
      ackEventOverflow() {
        const GG = this.api.apiView,
          bG = KG.v.eventOverflowGen(GG, 0),
          ZG = bG - this.overflowGen >>> 0;
        if (0 === ZG && !this.resyncOwed) return;
        this.overflowGen = bG;
        const wG = KG.v.eventOverflowMask(GG, 0),
          SG = this.cmd;
        0 === wG || null === SG || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, KG.re)(SG, 0, wG);
        const LG = this.options.onEventOverflow;
        0 !== ZG && LG && this.guard((() => {
          LG(wG, ZG)
        }))
      }
      gameCall(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        if (GG === KG.ec.Director) try {
          return this.scriptedCamera.call(bG, ZG, wG, SG, LG, yG)
        } catch (YG) {
          return this.NQ(YG), KG.pb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return GG === KG.ec.AltVeto ? KG.i.Allow : 0;
        try {
          return this.callGames(GG, bG, ZG, wG, SG, LG, yG, kG)
        } catch (YG) {
          throw (0, QG.h)(YG) && (this.fault = YG), YG
        }
      }
      takeFault() {
        const GG = this.fault;
        return this.fault = void 0, GG
      }
      callGames(GG, bG, ZG, wG, SG, LG, yG, kG) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: UG
        } = this.options, YG = String(this.boundId);
        switch (GG) {
          case KG.ec.AltVeto:
          case KG.ec.AltAction: {
            const kG = 0 !== yG,
              [VG, pG, fG] = kG ? [bG, ZG, wG] : [void 0, void 0, void 0],
              QG = kG ? UG.nameOfId(SG) : "Air",
              hG = Aw(LG);
            if (GG === KG.ec.AltAction) return this.first((GG => {
              var bG;
              return null === (bG = GG.onPlayerAltAction) || void 0 === bG ? void 0 : bG.call(GG, YG, VG, pG, fG, QG, hG)
            })), 0;
            const dG = this.first((GG => {
              var bG;
              return null === (bG = GG.onPlayerAttemptAltAction) || void 0 === bG ? void 0 : bG.call(GG, YG, VG, pG, fG, QG, hG)
            }));
            return "preventAction" === dG ? KG.i.Prevent : "preventPlacement" === dG ? KG.i.PreventPlacement : KG.i.Allow
          }
          case KG.ec.Click: {
            const GG = kG,
              VG = 0 !== (GG & KG.U.Alt),
              pG = 0 !== (GG & KG.U.HasPos),
              fG = pG ? UG.nameOfId(SG) : "Air",
              [QG, hG, dG] = pG ? [bG, ZG, wG] : [null, null, null],
              JG = Aw(LG),
              rG = 0 !== (GG & KG.U.Up),
              zG = Aw(yG);
            if (0 === (GG & KG.U.AttackOnly) && this.first((GG => {
                var bG, ZG;
                return rG ? null === (bG = GG.onPlayerClickUp) || void 0 === bG ? void 0 : bG.call(GG, YG, VG, QG, hG, dG, fG, JG) : null === (ZG = GG.onPlayerClick) || void 0 === ZG ? void 0 : ZG.call(GG, YG, VG, QG, hG, dG, fG, JG)
              })), !rG && !VG && null !== zG) {
              const GG = this.clientApi.getPositionView(zG),
                bG = GG ? [GG[0], GG[1], GG[2]] : [0, 0, 0];
              this.first((GG => {
                var ZG;
                return null === (ZG = GG.onPlayerAttackEntity) || void 0 === ZG ? void 0 : ZG.call(GG, YG, zG, bG)
              }))
            }
            return 0
          }
          case KG.ec.ChangeBlock: {
            const GG = UG.nameOfId(SG),
              yG = UG.nameOfId(LG);
            return this.first((SG => {
              var LG;
              return null === (LG = SG.onPlayerChangeBlock) || void 0 === LG ? void 0 : LG.call(SG, YG, bG, ZG, wG, GG, yG)
            })), 0
          }
          case KG.ec.DropItem: {
            const GG = UG.nameOfId(bG);
            return this.first((bG => {
              var SG;
              return null === (SG = bG.onPlayerDropItem) || void 0 === SG ? void 0 : SG.call(bG, YG, GG, ZG, wG)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${GG}`)), 0
        }
      }
      changeBlockFail(GG, bG, ZG, wG, SG, LG, yG) {
        const kG = SG === KG.Qc ? null : vw.decode(this.api.eventBytes(LG, Math.min(SG, yG)));
        this.failures.push({
          rG: [GG, bG, ZG],
          zG: wG,
          EG: kG
        })
      }
      changeBlockFailEnd() {
        const GG = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (bG => {
          var ZG;
          null === (ZG = bG.onChangeBlockFail) || void 0 === ZG || ZG.call(bG, GG)
        })), this.xh("EditBoard", {
          pos: null
        }), this.xh("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(GG, bG, ZG, wG, SG, LG) {
        GG === KG.tc.ChestOpened ? this.items.chestOpened(ZG, wG, SG) : GG !== KG.tc.Synced && GG !== KG.tc.ChestClosed && GG !== KG.tc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(GG, bG, ZG, wG) {
            switch (GG) {
              case KG.tc.Synced:
                yG.l.xh("syncedInvenFromServer");
                break;
              case KG.tc.ChestOpened:
              case KG.tc.ChestClosed:
                yG.l.xh("chestToggleFromServer", GG === KG.tc.ChestOpened, !0);
                break;
              case KG.tc.ChestRefreshed:
                yG.l.xh("chestRefreshedFromServer");
                break;
              case KG.tc.EnchantingTable:
                yG.l.xh("enchantingTable", {
                  Gk: wG,
                  position: ZG
                });
                break;
              case KG.tc.HotbarRequest:
                yG.l.xh("setSelectedInventorySlotI", bG, !0);
                break;
              case KG.tc.Scrolled:
                yG.l.xh("ScrollInventorySlot", bG);
                break;
              case KG.tc.NumberKey:
                yG.l.xh("numkeyPressed", bG + 1);
                break;
              case KG.tc.DropRequested:
                yG.l.xh("DropInvenItem", 0 !== bG);
                break;
              default:
                throw new QG.c(`InventoryEvent of no kind: what ${GG}`)
            }
          }(GG, bG, [ZG, wG, SG], LG)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(GG, bG, ZG, wG) {
        this.xh("shotPlayer", {
          playerId: String(GG),
          damage: bG,
          wasCrit: 0 !== wG,
          distance: ZG
        })
      }
      localHurt(GG, bG) {
        this.xh("closeShopOnDamaged", null), this.guard((() => {
          yG.l.xh("damagedByOtherPlayer", {
            rZ: null,
            direction: Number.isNaN(bG) ? null : bG,
            FG: GG
          })
        }))
      }
      attackHit(GG, bG, ZG, wG, SG) {
        this.guard((() => {
          yG.l.xh("yourAttackHit", {
            eb: wG,
            screenPos: this.renderFrame.projectDirectionToScreenPos([GG, bG, ZG]),
            hitSelf: SG
          })
        }))
      }
      physicsType(GG) {
        this.xh("PlayerPhysicsTypeUpdate", GG)
      }
      vehicleEffect(GG, bG, ZG, wG, SG) {
        this.guard((() => {
          GG === fG.Md.UPDATE ? (0, vG.i)(bG, {
            icon: ZG,
            level: wG,
            displayName: null,
            durationMs: SG
          }) : FG.e.remove(bG)
        }))
      }
      zoomChanged(GG) {
        this.zoom = GG, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.xh("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const GG = this.scriptedCamera.holdsView();
        !this.zoomUnshown || GG && this.zoomHeld || (this.zoomUnshown = !1, this.xh("cameraZoomSet", this.zoom)), this.zoomHeld = GG
      }
      gunHit(GG) {
        this.guard((() => {
          const {
            rZ: bG,
            zZ: ZG
          } = (0, Jw.e)(rw.r, GG);
          yG.l.xh("damagedByOtherPlayer", {
            rZ: bG,
            direction: ZG
          })
        }))
      }
      uiEvent(GG, bG, ZG, wG, SG, LG, yG, kG) {
        this.guard((() => {
          OZ(GG, bG, [ZG, wG, SG], LG, this.items, this.options.tables, (() => vw.decode(this.api.eventBytes(yG, kG))))
        }))
      }
      writeAltVeto(GG) {
        const bG = this.cmd;
        if (!bG) return;
        let ZG;
        try {
          ZG = function(GG, bG) {
            const ZG = new Set;
            let wG = !1;
            for (const SG of GG)
              if (SG.onPlayerAttemptAltAction) {
                if (wG = !0, !SG.altVetoBlocks) return {
                  mode: KG.ee.All,
                  roots: []
                };
                for (const GG of SG.altVetoBlocks) ZG.add(bG.getMetaInfo(GG).rootId)
              } return wG ? ZG.size > KG.Hc ? {
              mode: KG.ee.All,
              roots: []
            } : {
              mode: KG.ee.Filter,
              roots: [...ZG]
            } : {
              mode: KG.ee.Off,
              roots: []
            }
          }(GG, this.options.tables)
        } catch (SG) {
          this.onError(SG), ZG = {
            mode: KG.ee.All,
            roots: []
          }
        }
        if (ZG.mode === KG.ee.Off && !this.vetoSet) return;
        const wG = new Uint8Array(new Uint32Array(ZG.roots).buffer);
        (0, KG.Lf)(bG, 0, ZG.mode, ZG.roots.length, wG) ? this.vetoSet = ZG.mode !== KG.ee.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(GG) {
        const bG = this.cmd;
        if (!bG) return;
        const ZG = function(GG) {
          let bG = 0;
          for (const ZG of GG) ZG.onPlayerAltAction && (bG |= 1 << KG.ec.AltAction), (ZG.onPlayerClick || ZG.onPlayerClickUp || ZG.onPlayerAttackEntity) && (bG |= 1 << KG.ec.Click), ZG.onPlayerChangeBlock && (bG |= 1 << KG.ec.ChangeBlock), ZG.onPlayerDropItem && (bG |= 1 << KG.ec.DropItem);
          return bG
        }(GG);
        (0 !== ZG || this.hooksSet) && ((0, KG.Uf)(bG, 0, ZG) ? this.hooksSet = 0 !== ZG : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const GG = this.cmd;
        GG && !this.stopped() && this.customButtons.write(GG)
      }
      writePromptWatch() {
        const GG = this.cmd,
          bG = this.promptWatch;
        bG !== this.promptWatchSent && GG && !this.stopped() && (0, KG.ng)(GG, 0, Pw[bG]) && (this.promptWatchSent = bG)
      }
      writePublicLobby(GG) {
        const bG = this.cmd;
        bG && GG !== this.writtenPublicLobby && ((0, KG.ag)(bG, 0, GG ? 1 : 0) ? this.writtenPublicLobby = GG : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(GG) {
        const bG = this.cmd;
        bG && ((0, KG.Vf)(bG, 0, null === GG ? 0 : 1, null === GG ? lw : aw.encode(GG)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(GG) {
        const bG = this.generation;
        for (const wG of this.owners) {
          if (bG !== this.generation) break;
          try {
            const bG = GG(wG);
            if (void 0 !== bG) return bG
          } catch (ZG) {
            this.NQ(ZG)
          }
        }
      }
      xh(GG, bG) {
        this.guard((() => {
          yG.l.xh(GG, bG)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (GG) {
          this.NQ(GG)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (GG) {
          this.NQ(GG)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const GG = this.owners;
        let bG;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (wG) {
          bG = wG
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (wG) {
          bG ??= wG
        }
        this.round(GG, qw, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (wG) {
          bG ??= wG
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (wG) {
          bG ??= wG
        }
        const ZG = this.options.onSessionEnd;
        if (ZG) try {
          ZG()
        } catch (wG) {
          this.onError(wG)
        }
        void 0 !== bG && this.NQ(bG)
      }
      round(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = this.generation;
        for (const LG of GG) {
          if (wG !== this.generation) break;
          try {
            bG(LG)
          } catch (SG) {
            ZG ? this.onError(SG) : this.NQ(SG)
          }
        }
      }
      guard(GG) {
        try {
          GG()
        } catch (bG) {
          this.NQ(bG)
        }
      }
    }

    function Aw(GG) {
      return GG === KG.Sc ? null : String(GG)
    }

    function sw(GG) {
      GG.Tp(fG.Dd)
    }

    function qw(GG) {
      var bG;
      null === (bG = GG.onClose) || void 0 === bG || bG.call(GG)
    }

    function nw(GG, bG) {
      GG.watch((() => {
        const ZG = function(GG) {
          const bG = [],
            ZG = Math.min(Sw, GG.length);
          for (let SG = 0; SG < ZG; SG++) {
            var wG;
            const ZG = null === (wG = GG.slot(SG)) || void 0 === wG ? void 0 : wG.typeObj,
              LG = ZG ? (0, Zw.gunTypeOf)(ZG.id) : void 0;
            void 0 !== LG && bG.push(zb[LG])
          }
          return bG
        }(GG);
        ZG.length > 0 && (bG.preload(ZG), bG.preload([Eb]))
      }))
    }
    var gw = ZG(36778),
      ew = ZG(4883),
      Rw = ZG(37105),
      Tw = ZG(37134);

    function Hw(GG) {
      const bG = (0, gw.countDecodesAs)(new ew.Howl({
          ...(0, Rw.i)(GG),
          pool: 15,
          preload: !1
        }), "sheet"),
        ZG = bG.load.bind(bG);
      return bG.load = () => (bG._preload = !0, (0, Tw.c)(GG), ZG()), bG
    }

    function tw(GG, bG, ZG) {
      const wG = GG.listener;
      if (wG.positionX) Dw(wG.positionX, bG, ZG, 0), Dw(wG.positionY, bG, ZG, 1), Dw(wG.positionZ, bG, ZG, 2), Dw(wG.forwardX, bG, ZG, 3), Dw(wG.forwardY, bG, ZG, 4), Dw(wG.forwardZ, bG, ZG, 5), Dw(wG.upX, bG, ZG, 6), Dw(wG.upY, bG, ZG, 7), Dw(wG.upZ, bG, ZG, 8);
      else {
        let GG = !1;
        for (let wG = 0; wG < 9; wG++) GG ||= bG[wG] !== ZG[wG];
        GG && (wG.setPosition(bG[0], bG[1], bG[2]), wG.setOrientation(bG[3], bG[4], bG[5], bG[6], bG[7], bG[8]), ZG.set(bG))
      }
    }

    function Dw(GG, bG, ZG, wG) {
      bG[wG] !== ZG[wG] && (GG.value = bG[wG], ZG[wG] = bG[wG])
    }
    class Nw {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(GG) {
        this.pose.set(GG);
        const bG = ew.Howler.ctx;
        return !!bG && (bG !== this.watchedCtx && (this.watchedCtx = bG, this.written.fill(Number.NaN), bG.addEventListener("statechange", (() => {
          "running" === bG.state && tw(bG, this.pose, this.written)
        }))), "running" === bG.state && tw(bG, GG, this.written), !0)
      }
    }
    var Ow = ZG(36917),
      xw = ZG(39629);
    let Bw = null,
      GS = null;

    function bS() {
      return null === Bw && (Bw = document.createElement("div"), Bw.className = "WasmCameraLayer", Bw.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(Bw)), Bw
    }

    function ZS() {
      return GS ??= new xw.c(new Ow.c(bS)), GS
    }

    function wS() {
      var GG;
      null === (GG = GS) || void 0 === GG || GG.clear(), SS(null)
    }

    function SS(GG) {
      wG.e.get("scriptedCameraFacing") !== GG && wG.e.set({
        scriptedCameraFacing: GG
      })
    }
    var LS = ZG(9356),
      yS = ZG(9303),
      kS = ZG(39657),
      US = ZG(41427),
      YS = ZG(3267);
    const VS = Object.entries(KG.cc).reduce(((GG, bG) => {
      let [ZG, wG] = bG;
      return GG[wG] = ZG, GG
    }), []);

    function pS(GG, bG) {
      var ZG;
      return 0 !== ((null !== (ZG = GG.itemFlags[bG]) && void 0 !== ZG ? ZG : 0) & KG.vc.Stackable)
    }
    const fS = /^(0|[1-9][0-9]*)$/,
      QS = {
        displayName: (GG, bG) => (0, Zw.displayNameOf)(bG),
        description: (GG, bG) => (0, Zw.descriptionOf)(bG),
        type: (GG, bG) => (0, Zw.itemTypeOf)(bG),
        clipSize: (GG, bG) => (0, Zw.clipSizeOf)(bG),
        armourReduction: (GG, bG) => (0, Zw.armourReductionOf)(bG),
        scopeType: (GG, bG) => (0, Zw.scopeTypeOf)(bG),
        stackable: pS,
        harvestType: (GG, bG) => VS[GG.blockHarvestTypes[bG]],
        harvestLevel: (GG, bG) => {
          const ZG = GG.blockHarvestLevels[bG];
          return ZG === KG.Bc ? void 0 : ZG
        },
        harvests: (GG, bG) => {
          var ZG;
          const wG = null !== (ZG = GG.itemHarvests[bG]) && void 0 !== ZG ? ZG : 0;
          return 0 !== wG ? VS[wG] : void 0 === (0, Zw.harvestsNullLevelOf)(bG) ? void 0 : null
        },
        level: (GG, bG) => {
          var ZG, wG;
          const SG = null !== (ZG = GG.itemLevels[bG]) && void 0 !== ZG ? ZG : KG.Bc;
          return SG !== KG.Bc ? SG : null !== (wG = (0, Zw.harvestsNullLevelOf)(bG)) && void 0 !== wG ? wG : void 0
        }
      };

    function KS(GG, bG, ZG) {
      return dS(new Uint8Array(Math.floor(GG.length / bG)), GG, bG, ZG)
    }

    function hS(GG, bG, ZG) {
      return dS(new Uint16Array(Math.floor(GG.length / bG)), GG, bG, ZG)
    }

    function dS(GG, bG, ZG, wG) {
      const SG = new DataView(bG.buffer, bG.byteOffset, bG.byteLength);
      for (let LG = 0; LG < GG.length; LG++) GG[LG] = wG(SG, LG * ZG);
      return GG
    }
    class JS {
      constructor(GG, bG) {
        this.options = bG, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = GG => {
          const bG = this.idOf(GG);
          if (void 0 === bG) throw new Error(`No item is named ${GG}, an item's root`);
          return bG
        };
        const ZG = bG => {
            const ZG = bG();
            return new Uint8Array(GG.memory().buffer, GG.scratch(), ZG).slice()
          },
          wG = (new TextDecoder).decode(ZG((() => GG.queries.itemNames()))).split("\n"),
          SG = ZG((() => GG.queries.blockProps())),
          LG = ZG((() => GG.queries.itemProps()));
        this.props = {
          blockFlags: KS(SG, KG.z.BYTES, KG.z.flags),
          blockHarvestTypes: KS(SG, KG.z.BYTES, KG.z.harvestType),
          blockHarvestLevels: KS(SG, KG.z.BYTES, KG.z.harvestLevel),
          blockAttachedTops: hS(SG, KG.z.BYTES, KG.z.attachedTop),
          itemFlags: KS(LG, KG.zc.BYTES, KG.zc.flags),
          itemHarvests: KS(LG, KG.zc.BYTES, KG.zc.harvests),
          itemLevels: KS(LG, KG.zc.BYTES, KG.zc.level)
        }, (0, YS.l)(Object.freeze(wG)), (0, US.f)()
      }
      idOf(GG) {
        if ("number" === typeof GG) return void 0 === (0, YS.f)(GG) ? void 0 : GG;
        const bG = (0, YS.c)(GG);
        return void 0 === bG && fS.test(GG) ? void 0 === (0, YS.f)(+GG) ? void 0 : +GG : bG
      }
      getMetaInfo(GG) {
        if (!GG || GG === LS.b) return LS.f;
        const bG = this.idOf(GG);
        if (void 0 === bG) throw new Error(`Item ${GG} not found in registry`);
        return this.metaOf(bG)
      }
      blockRootId(GG) {
        return 0 !== GG && void 0 !== (0, YS.f)(GG) ? this.metaOf(GG).rootId : GG
      }
      metaOf(GG) {
        return this.metas[GG] ??= (0, yS.n)((0, YS.f)(GG), GG, this.rootIdOf, (0, Zw.rootMetaDescOf)(GG))
      }
      getItemId(GG) {
        if (!GG || GG === LS.b) return 0;
        const bG = this.idOf(GG);
        if (void 0 === bG) throw new Error(`Invalid block name. You sent ${GG}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return bG
      }
      getItemName(GG) {
        if (!GG || GG === LS.b) return LS.b;
        const bG = this.idOf(GG);
        if (void 0 === bG) throw new Error(`Item ${GG} not found in registry`);
        return (0, YS.f)(bG)
      }
      blockNameToBlockId(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (GG === LS.b) return 0;
        let ZG = this.idOf(GG);
        if (void 0 === ZG || !this.isBlockId(ZG)) {
          const bG = GG.indexOf("|"),
            wG = bG > 0 ? (0, YS.c)(GG.slice(0, bG)) : void 0;
          ZG = void 0 !== wG && this.isBlockId(wG) && (0, Zw.rootMetaDescOf)(wG) === GG ? wG : void 0
        }
        if (void 0 !== ZG) return ZG;
        if (!bG) throw new Error(`Invalid block name. You sent ${GG}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(GG) {
        return GG > 0 && GG < this.props.blockFlags.length
      }
      nameOfId(GG) {
        return 0 !== GG && (0, YS.f)(GG) || LS.b
      }
      itemType(GG) {
        const bG = GG ? this.idOf(GG) : void 0;
        if (!bG) return null;
        let ZG = this.types.get(bG);
        return void 0 === ZG && (ZG = Object.freeze({
          id: bG,
          name: (0, YS.f)(bG),
          meta: this.getMetaInfo(bG),
          stackable: pS(this.props, bG),
          type: (0, Zw.itemTypeNameOf)(bG),
          clipSize: (0, Zw.clipSizeOf)(bG),
          scopeType: (0, Zw.scopeTypeOf)(bG),
          showsAimingUi: (0, Zw.showsAimingUi)(bG)
        }), this.types.set(bG, ZG)), ZG
      }
      getItemStat(GG, bG) {
        if (kS.e.has(bG)) {
          const ZG = "minChargeStateToUse" === bG ? this.getMetaInfo(GG).rootName : this.getItemName(GG),
            wG = this.options.get((0, kS.i)(ZG, bG));
          if (null !== wG && void 0 !== wG) return wG
        }
        return this.defaultStat(GG, bG, this.statOf(bG))
      }
      getDisplayName(GG) {
        return this.getItemStat(GG, "displayName")
      }
      getDefaultItemStat(GG, bG) {
        return this.defaultStat(GG, bG, this.statOf(bG))
      }
      statOf(GG) {
        const bG = QS[GG];
        return void 0 === bG && function(GG, bG) {
          throw new Error(`ClientApi.${GG} is not available yet in the wasm client (${bG})`)
        }(`getItemStat("${GG}")`, `a table of the stat: the wasm client answers ${Object.keys(QS).join(", ")}`), bG
      }
      defaultStat(GG, bG, ZG) {
        const wG = this.idOf(GG),
          SG = void 0 === wG ? void 0 : ZG(this.props, wG);
        return null !== SG && void 0 !== SG || "displayName" !== bG ? SG : this.getItemName(GG)
      }
      getClientOption(GG) {
        return this.options.get(GG)
      }
      getGunStats(GG) {
        return this.getClientOption(`${GG}GunStats`)
      }
      watchClientOption(GG, bG) {
        return this.options.subscribe(GG, bG)
      }
      isSolidBlockId(GG) {
        var bG;
        return 0 !== ((null !== (bG = this.props.blockFlags[GG]) && void 0 !== bG ? bG : 0) & KG.y.Solid)
      }
      isStackableId(GG) {
        return pS(this.props, GG)
      }
      isFluidBlockId(GG) {
        var bG;
        return 0 !== ((null !== (bG = this.props.blockFlags[GG]) && void 0 !== bG ? bG : 0) & KG.y.Fluid)
      }
      canPlaceOverBlockId(GG) {
        var bG;
        return 0 !== ((null !== (bG = this.props.blockFlags[GG]) && void 0 !== bG ? bG : 0) & KG.y.PlaceOver)
      }
      attachedTopOf(GG) {
        var bG;
        return null !== (bG = this.props.blockAttachedTops[GG]) && void 0 !== bG ? bG : 0
      }
      isDroplessBlockId(GG) {
        return (0, Zw.dropsNothing)(GG)
      }
    }

    function rS(GG, bG) {
      const ZG = new Map;
      return (wG, SG) => {
        const LG = bG.idOf(wG),
          yG = void 0 === LG ? null : (wG => {
            let SG = ZG.get(wG);
            if (void 0 === SG) {
              const LG = GG.queries.salvageRecipe(wG),
                yG = new DataView(GG.memory().buffer, GG.scratch(), LG),
                kG = [];
              for (let GG = 0; GG + KG.Vd.BYTES <= LG; GG += KG.Vd.BYTES) kG.push(Object.freeze({
                item: bG.nameOfId(KG.Vd.item(yG, GG)),
                amt: KG.Vd.amount(yG, GG)
              }));
              SG = 0 === kG.length ? null : Object.freeze(kG), ZG.set(wG, SG)
            }
            return SG
          })(LG);
        if (null === yG || void 0 === SG) return yG;
        const kG = SG <= 0 ? 1 : SG;
        return yG.map((GG => {
          let {
            item: bG,
            amt: ZG
          } = GG;
          return {
            item: bG,
            amt: ZG * kG
          }
        }))
      }
    }
    var zS = ZG(41143),
      ES = ZG(37317),
      oS = ZG(37295),
      XS = ZG(37301),
      uS = ZG(36836),
      iS = ZG(41056),
      CS = ZG(43029);
    const WS = -1,
      mS = new Uint8Array(0),
      IS = new TextEncoder;

    function FS(GG) {
      if (null === GG) return null;
      const bG = IS.encode(GG);
      return bG.byteLength < fG.Lc ? bG : bG.subarray(0, fG.Lc - 1)
    }
    class vS {
      constructor(GG) {
        this.deps = GG, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = WS, this.keyframesSettled = !1, this.reloadFrom = WS
      }
      reloadKeyframes() {
        var GG, bG;
        this.keyframesVersion = WS, this.reloadFrom = null !== (GG = null === (bG = this.view()) || void 0 === bG ? void 0 : bG.version) && void 0 !== GG ? GG : WS
      }
      setPlayback(GG) {
        const bG = 1 === this.deps.core.DSG(GG);
        return bG && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = WS, this.reloadFrom = WS), bG
      }
      async open(GG, bG) {
        const ZG = await this.deps.replay.open(GG, bG);
        return "opening" === ZG && (this.reloadKeyframes(), this.deps.recorder.prefetch()), ZG
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(GG)), bG)
      }
      setSpeed(GG) {
        this.deps.replay.setSpeed(GG)
      }
      setCameraMode(GG) {
        this.deps.replay.setCameraMode(CS.b.indexOf(GG))
      }
      view() {
        var GG;
        const bG = KG.v.replayViewPtr(this.deps.apiView(), 0);
        if (0 === bG) return this.lastView = null, null;
        const ZG = new DataView(this.deps.buffer(), bG, KG.Pd.BYTES),
          wG = KG.Pd.version(ZG, 0),
          SG = this.lastView;
        if (null !== SG && SG.version === wG) return SG;
        const LG = KG.Pd.markIn(ZG, 0),
          yG = {
            version: wG,
            state: KG.Pd.state(ZG, 0),
            cameraMode: null !== (GG = CS.b[KG.Pd.cameraMode(ZG, 0)]) && void 0 !== GG ? GG : "recording",
            Tp: KG.Pd.Tp(ZG, 0),
            totalTicks: KG.Pd.totalTicks(ZG, 0),
            speed: KG.Pd.speed(ZG, 0),
            mark: LG === KG.Od ? null : {
              inTick: LG,
              outTick: KG.Pd.markOut(ZG, 0)
            },
            editVersion: KG.Pd.editVersion(ZG, 0)
          };
        return this.lastView = yG, yG
      }
      keyframes() {
        const GG = this.view();
        if (null === GG) return [];
        GG.version !== this.reloadFrom && (this.reloadFrom = WS);
        const bG = this.reloadFrom === WS && GG.state !== fG.sd.Cropping && GG.state !== fG.sd.None,
          ZG = bG ? GG.editVersion : GG.version;
        if (ZG === this.keyframesVersion && bG === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: wG
        } = this.deps, SG = wG.NSG(), LG = wG.qd(), yG = [];
        if (0 !== LG && SG > 0) {
          const GG = new DataView(this.deps.buffer(), LG, SG * fG.vc);
          for (let bG = 0; bG < SG; bG++) {
            const ZG = bG * fG.vc,
              wG = bG => GG.getFloat64(ZG + bG, !0);
            yG.push({
              Tp: GG.getUint32(ZG + fG.Hc, !0),
              position: [wG(fG.Dc), wG(fG.Dc + 8), wG(fG.Dc + 16)],
              direction: [wG(fG.xc), wG(fG.xc + 8), wG(fG.xc + 16)],
              easing: [wG(fG.zc), wG(fG.zc + 8), wG(fG.zc + 16), wG(fG.zc + 24)]
            })
          }
        }
        return this.keyframesVersion = ZG, this.keyframesSettled = bG, this.lastKeyframes = yG, yG
      }
      addKeyframe() {
        const GG = this.deps.apiView(),
          bG = [KG.v.eye(GG, 0, 0), KG.v.eye(GG, 0, 1), KG.v.eye(GG, 0, 2)];
        return this.deps.replay.addKeyframe(bG, function(GG, bG) {
          const ZG = Math.cos(bG);
          return [ZG * Math.sin(GG), -Math.sin(bG), ZG * Math.cos(GG)]
        }(KG.v.heading(GG, 0), KG.v.pitch(GG, 0)))
      }
      setKeyframe(GG) {
        return this.deps.replay.setKeyframe(GG.Tp, Float64Array.from([...GG.position, ...GG.direction, ...GG.easing]))
      }
      moveKeyframe(GG, bG) {
        return this.deps.replay.moveKeyframe(GG, bG)
      }
      deleteKeyframes(GG, bG) {
        return this.deps.replay.deleteKeyframes(GG, bG)
      }
      setMark(GG) {
        var bG, ZG;
        return this.deps.replay.setMark(null !== (bG = null === GG || void 0 === GG ? void 0 : GG.inTick) && void 0 !== bG ? bG : -1, null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.outTick) && void 0 !== ZG ? ZG : -1)
      }
      crop(GG, bG) {
        const ZG = this.deps.replay.crop(GG, bG);
        return ZG && this.reloadKeyframes(), ZG
      }
      save(GG) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(GG)
      }
      recorderControl(GG) {
        this.deps.recorder.control(GG)
      }
      recorderPrefs(GG, bG) {
        this.deps.recorder.prefs(GG, bG)
      }
      recorderOption(GG, bG) {
        const ZG = this.deps.cmd();
        return null !== ZG && (0, KG.xf)(ZG, 0, GG, null === bG ? mS : IS.encode(bG))
      }
      recordFlyingText(GG, bG, ZG, wG) {
        const SG = this.deps.cmd(),
          LG = Math.max(0, Math.min(4294967295, Math.round(wG)));
        return null !== SG && (0, KG.sf)(SG, 0, bG, ZG, LG, IS.encode(GG))
      }
      recordPlayerKilled(GG, bG, ZG, wG) {
        const SG = this.deps.cmd();
        return null !== SG && (0, KG.Af)(SG, 0, GG, bG, Math.max(0, ZG), IS.encode(wG))
      }
      recordKillfeed(GG, bG, ZG) {
        var wG, SG;
        const LG = this.deps.cmd(),
          yG = function(GG) {
            const bG = GG.reduce(((GG, bG) => {
                var ZG;
                return GG + HZ.sb + (null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.byteLength) && void 0 !== ZG ? ZG : 0)
              }), 0),
              ZG = new Uint8Array(bG),
              wG = new DataView(ZG.buffer);
            let SG = 0;
            for (const yG of GG) {
              var LG;
              wG.setUint16(SG, null !== (LG = null === yG || void 0 === yG ? void 0 : yG.byteLength) && void 0 !== LG ? LG : fG.Lc, !0), SG += HZ.sb, null !== yG && (ZG.set(yG, SG), SG += yG.byteLength)
            }
            return ZG
          }([FS(GG.name), FS(GG.colour), FS(bG.name), FS(bG.colour), FS(ZG)]);
        return null !== LG && (0, KG.tf)(LG, 0, null !== (wG = GG.id) && void 0 !== wG ? wG : KG.Wc, null !== (SG = bG.id) && void 0 !== SG ? SG : KG.Wc, yG)
      }
      recorderSession(GG, bG) {
        this.deps.recorder.session({
          session: bG,
          lobbyType: GG.lobbyType,
          game: GG.gameNameWithVariation,
          lobby: GG.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.OSG()
      }
      filePartDone(GG, bG) {
        this.deps.recorder.filePartDone(GG, bG)
      }
      fileDone(GG) {
        this.deps.recorder.fileDone(GG)
      }
    }
    const aS = -2147483648;
    class cS {
      constructor(GG) {
        var bG;
        this.deps = GG, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (bG = GG.now) && void 0 !== bG ? bG : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var GG, bG, ZG;
        return null === (GG = null === (bG = (ZG = this.deps).live) || void 0 === bG ? void 0 : bG.call(ZG)) || void 0 === GG || GG
      }
      activated(GG) {
        var bG, ZG;
        this.live && (this.viewerShown(!0 === (null === (bG = (ZG = this.deps).viewerOpen) || void 0 === bG ? void 0 : bG.call(ZG))), this.deps.client.recorderSession(GG, (0, CS.d)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var GG, bG;
        this.live && (this.state.recording || !0 !== (null === (GG = (bG = this.deps).viewerOpen) || void 0 === GG ? void 0 : GG.call(bG))) ? this.deps.client.recorderControl(fG.cd.ToggleRecording) : this.deps.notify(XS.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(fG.cd.SaveClip) : this.deps.notify(XS.e.clippingNotOn)
      }
      viewerShown(GG) {
        this.live && this.deps.client.recorderControl(GG ? fG.cd.ViewerOpened : fG.cd.ViewerClosed)
      }
      setPrefs(GG, bG) {
        this.live && this.deps.client.recorderPrefs(GG, bG)
      }
      setOption(GG, bG) {
        this.live && this.deps.client.recorderOption(GG, bG)
      }
      recordFlyingText(GG, bG, ZG, wG) {
        this.live && this.deps.client.recordFlyingText(GG, bG, ZG, wG)
      }
      recordPlayerKilled(GG, bG, ZG, wG) {
        this.live && this.deps.client.recordPlayerKilled(GG, bG, ZG, wG)
      }
      recordKillfeed(GG, bG, ZG) {
        this.live && this.deps.client.recordKillfeed(GG, bG, ZG)
      }
      Tp() {
        let GG = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, GG = {
            ...GG,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const bG = Math.floor((this.now() - this.recordingSince) / 1e3);
          bG !== GG.seconds && (GG = {
            ...GG,
            seconds: bG
          })
        }
        this.set(GG)
      }
      onEvent(GG) {
        var bG, ZG;
        const {
          notify: wG
        } = this.deps, SG = XS.e;
        switch (GG.what) {
          case fG.bd.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), wG(SG.recordingStarted);
            break;
          case fG.bd.RecordingStopped:
            this.stopRecording(), wG(SG.recordingStopped), this.saveState(fG.nd.Recording, "saving");
            break;
          case fG.bd.RecordingDiscarded:
            this.stopRecording(), wG(SG.recordingDiscarded);
            break;
          case fG.bd.RecordingTurnedOff:
            this.stopRecording(), wG(SG.recordingTurnedOff);
            break;
          case fG.bd.LimitReached:
            wG(SG.limitReached);
            break;
          case fG.bd.ClipSaved:
            this.saveState(fG.nd.Clip, "saving");
            break;
          case fG.bd.ClipEmpty:
            wG(SG.clipEmpty);
            break;
          case fG.bd.ClippingNotOn:
            wG(SG.clippingNotOn);
            break;
          case fG.bd.Disallowed:
            wG(SG.disallowed);
            break;
          case fG.bd.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case fG.bd.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case fG.bd.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case fG.bd.SaveBusy:
            null === (bG = (ZG = this.deps).onSaveState) || void 0 === bG || bG.call(ZG, GG.kind, "busy"), wG(SG.saveBusy);
            break;
          case fG.bd.CloseViewerFirst:
            wG(SG.closeViewerFirst)
        }
      }
      fileReady(GG, bG) {
        this.deps.download(bG), this.saveState(GG, "done"), this.deps.notify(GG === fG.nd.Clip ? XS.e.clipSaved : XS.e.recordingSaved)
      }
      failed(GG) {
        this.saveState(GG, "failed"), this.deps.notify(GG === fG.nd.Clip ? XS.e.clipFailed : XS.e.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(GG, bG) {
        var ZG, wG;
        null === (ZG = (wG = this.deps).onSaveState) || void 0 === ZG || ZG.call(wG, GG, bG)
      }
      set(GG) {
        GG !== this.state && (this.state = GG, this.deps.onState(GG))
      }
    }
    const lS = new TextDecoder;

    function jS(GG, bG, ZG, wG) {
      const SG = [];
      for (let LG = 0; LG < wG; LG++) {
        if (bG + HZ.sb > ZG) return null;
        const wG = GG.getUint16(bG, !0);
        if (bG += HZ.sb, wG !== fG.Lc) {
          if (bG + wG > ZG) return null;
          SG.push(lS.decode(new Uint8Array(GG.buffer, GG.byteOffset + bG, wG))), bG += wG
        } else SG.push(null)
      }
      return bG === ZG ? SG : null
    }

    function PS(GG, bG) {
      let ZG = new DataView(new ArrayBuffer(0)),
        wG = !0;
      const SG = {
        replayFailed: (bG, ZG, wG) => {
          GG.replayFailed({
            reason: bG,
            code: ZG,
            version: wG
          })
        },
        replayOption: (bG, SG, LG, yG) => {
          const kG = function(GG, bG, ZG, wG) {
            switch (bG) {
              case fG.qd.Cleared:
                return 0 === wG ? null : void 0;
              case fG.qd.Text:
                return lS.decode(new Uint8Array(GG.buffer, GG.byteOffset + ZG, wG));
              case fG.qd.Int:
                return wG === Int32Array.BYTES_PER_ELEMENT ? GG.getInt32(ZG, !0) : void 0;
              case fG.qd.Double:
                return wG === Float64Array.BYTES_PER_ELEMENT ? GG.getFloat64(ZG, !0) : void 0;
              default:
                return
            }
          }(ZG, SG, LG, yG);
          void 0 !== kG ? GG.replayOption({
            key: bG,
            value: kG
          }) : wG = !1
        },
        replayUiEvent: (bG, SG, LG, yG, kG, UG) => {
          const YG = function(GG, bG, ZG, wG, SG, LG, yG) {
            const kG = LG + yG;
            switch (bG) {
              case fG.rd.FlyingText: {
                const yG = jS(GG, LG, kG, 1);
                return null !== yG && null !== yG[0] ? {
                  what: bG,
                  lL: ZG,
                  cL: wG,
                  angle: SG,
                  contentJson: yG[0]
                } : null
              }
              case fG.rd.PlayerKilled: {
                const wG = jS(GG, LG, kG, 3);
                return wG ? {
                  what: bG,
                  killstreak: ZG,
                  dead: wG[0],
                  killer: wG[1],
                  withItem: wG[2]
                } : null
              }
              case fG.rd.Killfeed: {
                const ZG = jS(GG, LG, kG, 7);
                return ZG ? {
                  what: bG,
                  killerId: ZG[0],
                  killerName: ZG[1],
                  killerColour: ZG[2],
                  victimId: ZG[3],
                  victimName: ZG[4],
                  victimColour: ZG[5],
                  withItem: ZG[6]
                } : null
              }
              default:
                return null
            }
          }(ZG, bG, SG, LG, yG, kG, UG);
          null !== YG ? GG.replayUiEvent(YG) : wG = !1
        },
        replayFilePart: (ZG, SG, LG, yG) => {
          const kG = bG();
          LG + yG > kG.byteLength ? wG = !1 : GG.filePart(ZG, SG, new Uint8Array(kG, LG, yG).slice())
        },
        replayFileReady: (bG, ZG, wG, SG) => {
          GG.fileReady({
            save: bG,
            kind: ZG,
            parts: wG,
            bytes: SG
          })
        },
        recorderEvent: (bG, ZG, wG) => {
          GG.recorderEvent({
            what: bG,
            kind: ZG,
            save: wG
          })
        },
        replayOpened: (bG, wG, SG) => {
          GG.replayOpened(lS.decode(new Uint8Array(ZG.buffer, ZG.byteOffset + wG, SG)))
        }
      };
      return (GG, bG, LG, yG) => !(GG < fG.bb.ReplayFailed || GG > fG.bb.RecorderEvent) && (ZG = bG, wG = !0, (0, KG.ke)(GG, bG, LG, yG, SG) && wG)
    }

    function MS(GG) {
      let bG = null;
      const ZG = PS(GG, (() => {
        if (null === bG) throw new Error("a recorder event read outside recorderEventReader's call");
        return bG.buffer
      }));
      return (GG, wG) => {
        bG = wG;
        try {
          ! function(GG, bG) {
            const ZG = GG.slice(),
              wG = new DataView(ZG.buffer);
            for (let SG = 0; SG < ZG.byteLength;) {
              if (SG + fG.$ > ZG.byteLength) throw new Error(`the recorder module's events end mid-head at ${SG}`);
              const GG = wG.getUint32(SG, !0),
                LG = 65535 & GG,
                yG = GG >>> 16,
                kG = SG + fG.$;
              if (kG + yG > ZG.byteLength || !bG(LG, wG, kG, yG)) throw new Error(`the recorder module wrote a malformed event ${LG} (${yG} bytes) at ${SG}`);
              SG = kG + (0, fG.ve)(yG)
            }
          }(GG, ZG)
        } finally {
          bG = null
        }
      }
    }
    class AS {
      constructor(GG, bG) {
        this.acks = GG, this.handlers = bG, this.parts = new Map
      }
      onPart(GG, bG, ZG) {
        let wG = this.parts.get(GG);
        wG || (wG = [], this.parts.set(GG, wG)), wG[bG] = ZG, this.acks.filePartDone(GG, bG)
      }
      onReady(GG) {
        var bG;
        const ZG = null !== (bG = this.parts.get(GG.save)) && void 0 !== bG ? bG : [];
        this.parts.delete(GG.save);
        const wG = function(GG, bG, ZG) {
          if (GG.length !== bG) return null;
          let wG = 0;
          for (let yG = 0; yG < bG; yG++) {
            if (void 0 === GG[yG]) return null;
            wG += GG[yG].byteLength
          }
          if (wG !== ZG) return null;
          if (1 === bG) return GG[0];
          const SG = new Uint8Array(ZG);
          let LG = 0;
          for (const yG of GG) SG.set(yG, LG), LG += yG.byteLength;
          return SG
        }(ZG, GG.parts, GG.bytes);
        this.acks.fileDone(GG.save), null === wG ? this.handlers.fileIncomplete(GG.save, GG.kind) : this.handlers.fileReady(GG.save, GG.kind, wG)
      }
      onDiscarded(GG) {
        this.parts.delete(GG)
      }
    }

    function sS() {
      return ZG.e(61).then((() => ZG(61147)))
    }
    class qS {
      constructor(GG) {
        this.deps = GG, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: bG
        } = GG;
        this.recorder = new cS({
          client: bG,
          live: () => {
            var GG;
            return !0 !== (null === (GG = this.viewer) || void 0 === GG ? void 0 : GG.inPlayback)
          },
          viewerOpen: GG.viewerOpen,
          notify: GG.notify,
          download: bG => {
            var ZG;
            null === (ZG = GG.download) || void 0 === ZG || ZG.call(GG, bG)
          },
          onState: GG.onRecorderState,
          onSaveState: GG.onSaveState
        }), this.parts = new AS(bG, {
          fileReady: (GG, bG, ZG) => {
            var wG;
            bG === fG.nd.Edited ? null === (wG = this.viewer) || void 0 === wG || wG.saveDone(ZG) : this.recorder.fileReady(bG, ZG)
          },
          fileIncomplete: (GG, bG) => {
            this.saveFailed(bG)
          }
        });
        const ZG = {
          replayFailed: GG => {
            var bG;
            null === (bG = this.viewer) || void 0 === bG || bG.onFailed(GG)
          },
          replayOption: bG => {
            var ZG;
            null === (ZG = GG.onReplayOption) || void 0 === ZG || ZG.call(GG, bG)
          },
          replayUiEvent: bG => {
            var ZG;
            null === (ZG = GG.onReplayUiEvent) || void 0 === ZG || ZG.call(GG, bG)
          },
          filePart: (GG, bG, ZG) => {
            this.parts.onPart(GG, bG, ZG)
          },
          fileReady: GG => {
            this.parts.onReady(GG)
          },
          replayOpened: bG => {
            var ZG;
            null === (ZG = GG.onReplayOpened) || void 0 === ZG || ZG.call(GG, bG)
          },
          recorderEvent: GG => {
            var bG;
            switch (GG.what) {
              case fG.bd.FileDiscarded:
                this.parts.onDiscarded(GG.save);
                break;
              case fG.bd.SaveFailed:
                this.saveFailed(GG.kind);
                break;
              case fG.bd.SaveBusy:
                if (null !== (bG = this.viewer) && void 0 !== bG && bG.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(GG);
                break;
              default:
                this.recorder.onEvent(GG)
            }
          }
        };
        this.sink = function(GG, bG) {
          return {
            onReplayEvent: PS(GG, bG)
          }
        }(ZG, GG.buffer), this.recorderEvents = MS(ZG)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var GG;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (GG = this.deps.loadViewer) && void 0 !== GG ? GG : sS)().catch((GG => {
          throw this.viewerChunk = null, GG
        })), this.viewerChunk.then((GG => (this.viewer ??= new GG.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var GG, bG;
            null === (GG = (bG = this.deps).onViewerChange) || void 0 === GG || GG.call(bG)
          }
        }), this.viewer))))
      }
      activated(GG) {
        this.recorder.activated(GG)
      }
      afterFrame(GG) {
        try {
          GG > 0 && this.recorder.Tp()
        } finally {
          var bG;
          null === (bG = this.viewer) || void 0 === bG || bG.afterFrame()
        }
      }
      end() {
        var GG;
        null === (GG = this.viewer) || void 0 === GG || GG.end()
      }
      saveFailed(GG) {
        var bG;
        GG === fG.nd.Edited ? null === (bG = this.viewer) || void 0 === bG || bG.saveFailed(!1) : this.recorder.failed(GG)
      }
    }
    var nS = ZG(40993),
      gS = ZG(41012),
      eS = ZG(4827),
      RS = ZG(41311);
    class TS {
      constructor(GG) {
        this.deps = GG, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(GG, bG) {
        if (!this.deps.live() || 0 === GG && 0 === bG) return;
        const ZG = (0, MG.v)(0, performance.now()),
          wG = this.deps.dragScale();
        (0, RS.g)((() => {
          (0, MG.y)(fG.yb.MouseDown, 0, 0, 0, ZG), (0, MG.y)(fG.yb.MouseMove, 0, GG * wG, bG * wG, 0), (0, MG.y)(fG.yb.MouseUp, 0, 0, 0, ZG)
        }))
      }
      move(GG) {
        var bG, ZG;
        this.analogue[0] = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.x) && void 0 !== bG ? bG : 0, this.analogue[1] = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.y) && void 0 !== ZG ? ZG : 0, this.send()
      }
      holdVertical(GG, bG) {
        const ZG = "freeCamUp" === GG ? KG.Vb.Up : KG.Vb.Down;
        this.keys = bG ? this.keys | ZG : this.keys & ~ZG, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const GG = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== GG && !(0, KG.ve)(GG, 0, this.analogue, this.keys)
      }
    }
    var HS = ZG(3543),
      tS = ZG(717),
      DS = ZG(283),
      NS = ZG(80),
      OS = ZG(34411),
      xS = ZG(703),
      BS = ZG(36940);

    function GL() {
      const GG = wG.e.get("clientEscMenuOptions"),
        bG = (0, tS.m)(GG);
      return {
        mouse: (0, NS.isMobile)() ? bG : GG.mouseSensitivity,
        touch: bG,
        fovPercent: GG.cameraFOV
      }
    }

    function bL() {
      const GG = wG.e.get("clientEscMenuOptions"),
        bG = wG.e.get("isTouchScreen") ? (0, tS.m)(GG) : GG.mouseSensitivity,
        ZG = GL().mouse;
      return ZG > 0 ? bG / ZG : 1
    }

    function ZL(GG) {
      const bG = () => {
        GG.setSoundPrefs(wG.e.get("soundVolume"), wG.e.get("soundOnFromAd"))
      };
      let ZG = null;
      const SG = () => {
        const {
          showFog: bG,
          enableLighting: SG,
          fogChunkDistance: LG,
          chunkFadeIn: yG
        } = wG.e.get("clientEscMenuOptions"), kG = {
          showFog: bG,
          lighting: SG,
          fogChunks: LG,
          chunkFade: yG,
          cellLight: (0, HS.h)("cellLight") ? (0, HS.h)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        ZG && (0, fG.fe)(ZG) === (0, fG.fe)(kG) && ZG.fogChunks === LG || (ZG = kG, GG.setEnvPrefs(ZG))
      };
      let LG = null;
      const kG = () => {
        const bG = function() {
          const GG = wG.e.get("clientEscMenuOptions");
          return {
            nametagsHidden: wG.e.get("areNametagsHidden"),
            crouchToggle: GG.crouchIsToggle,
            bhopDisabled: GG.disableBunnyHopping,
            disableBobbing: GG.disableBobbing,
            ezTowering: GG.ezTowering ? (0, DS.g)() : null,
            ezBridging: GG.ezBridging,
            showChunkBorders: GG.showChunkBorders,
            touchWalk: !(0, BS.f)(),
            edgeGuard: GG.touchEdgeGuard,
            edgeGuardLong: (0, xS.d)(),
            nametagCutDistance: (0, OS.g)()
          }
        }();
        (0, WG.ze)(LG, bG) || (LG = bG, GG.setUiPrefs(bG))
      };
      let UG = null;
      const YG = () => {
        const bG = GL();
        (0, WG.ze)(UG, bG) || (UG = bG, GG.setLookPrefs(bG))
      };
      bG(), SG(), kG(), YG();
      const VG = [(0, yG.p)("appManagerUpdated|soundVolume", bG), (0, yG.p)("appManagerUpdated|soundOnFromAd", bG), (0, yG.p)("appManagerUpdated|clientEscMenuOptions", (() => {
        SG(), kG(), YG()
      })), (0, yG.p)(BS.d, kG), (0, yG.p)("appManagerUpdated|enabledDebugFeatures", SG), (0, yG.p)("appManagerUpdated|areNametagsHidden", kG), (0, yG.p)("appManagerUpdated|showDistantNametags", kG)];
      return () => {
        for (const GG of VG) GG()
      }
    }
    var wL = ZG(41284),
      SL = ZG(41292);
    var LL = (0, SL.c)("lend"),
      yL = (0, SL.c)("starting"),
      kL = (0, SL.c)("generation"),
      UL = (0, SL.c)("end");
    class YL {
      constructor(GG) {
        this.deps = GG, Object.defineProperty(this, UL, {
          value: VL
        }), Object.defineProperty(this, LL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, yL, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, kL, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, wL.b)(this, LL)[LL] || (0, wL.b)(this, yL)[yL]
      }
      async start(GG) {
        if (this.active) return "busy";
        const bG = (0, wL.b)(this, kL)[kL];
        (0, wL.b)(this, yL)[yL] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, wL.b)(this, yL)[yL] = !1
        }
        if (bG !== (0, wL.b)(this, kL)[kL]) return "refused";
        const ZG = this.deps.beginSave();
        if (!ZG) return "refused";
        const wG = Number(BigInt.asUintN(32, GG)),
          SG = Number(BigInt.asUintN(32, GG >> 32n));
        let LG = "refused";
        return this.deps.recorderCall(((GG, bG) => {
          const yG = ZG.editState,
            kG = GG.stage(yG.length);
          0 !== kG ? (new Uint8Array(bG.buffer, kG, yG.length).set(yG), GG.xSG(ZG.headLen, wG, SG) && (LG = "sealing")) : LG = "tooLarge"
        }), !0), "sealing" !== LG ? (ZG.end(), LG) : ((0, wL.b)(this, LL)[LL] = ZG, "sealing")
      }
      beforeRecorderStep() {
        const GG = (0, wL.b)(this, LL)[LL];
        if (!GG) return null;
        let bG = -1,
          ZG = 0;
        if (!this.deps.recorderCall((GG => {
            bG = GG.BSG(), bG > 0 && (ZG = GG.GLG())
          }))) return (0, wL.b)(this, UL)[UL](GG, "stopped");
        if (bG < 0) return (0, wL.b)(this, UL)[UL](GG, "read");
        if (0 === bG) return null;
        const wG = GG.head(ZG, bG);
        let SG = !1;
        if (wG && this.deps.recorderCall(((GG, ZG) => {
            const LG = GG.stage(bG);
            0 !== LG && (new Uint8Array(ZG.buffer, LG, bG).set(wG), SG = !0)
          }), !0), SG) return null;
        const LG = GG.givenUp();
        this.deps.recorderCall((GG => {
          GG.bLG()
        }));
        const yG = (0, wL.b)(this, UL)[UL](GG, LG ? "givenUp" : "stopped");
        return LG && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), yG
      }
      stop() {
        (0, wL.b)(this, kL)[kL]++;
        const GG = (0, wL.b)(this, LL)[LL];
        GG && (this.deps.recorderCall((GG => {
          GG.bLG()
        })), (0, wL.b)(this, UL)[UL](GG, "stopped"))
      }
    }

    function VL(GG, bG) {
      return (0, wL.b)(this, LL)[LL] = null, GG.end(), bG
    }

    function pL(GG, bG) {
      const ZG = new Uint8Array(4),
        wG = new DataView(ZG.buffer);
      return wG.setUint8(0, GG ? 1 : 0), wG.setUint16(2, Math.max(0, Math.min(65535, Math.round(bG))), !0), ZG
    }

    function fL(GG, bG) {
      return GG > function(GG) {
        return 16777216 + 314572.8 * Math.max(0, GG)
      }(bG) + 33554432
    }
    let QL = null;

    function KL(GG) {
      return QL ??= async function(GG) {
        const bG = GG.loadInFlight();
        bG && await bG.catch((() => {}));
        if (GG.trapped()) return "trapped";
        if (GG.busy() || !fL(GG.memoryBytes(), GG.clipSeconds())) return "vQ";
        GG.unload();
        let ZG = !1;
        try {
          ZG = await GG.load()
        } catch {
          ZG = !1
        }
        if (!ZG) return GG.trapped() ? "trapped" : GG.pK() ? "pK" : "failed";
        return "recycled"
      }(GG).finally((() => {
        QL = null
      })), QL
    }
    const hL = "Replay recording couldn't load, so try again.",
      dL = new Set([fG.cd.ToggleRecording, fG.cd.SaveClip]);
    var JL = (0, SL.c)("bindings"),
      rL = (0, SL.c)("module"),
      zL = (0, SL.c)("memory"),
      EL = (0, SL.c)("trapped"),
      oL = (0, SL.c)("pK"),
      XL = (0, SL.c)("recycleDue"),
      uL = (0, SL.c)("loading"),
      iL = (0, SL.c)("generation"),
      CL = (0, SL.c)("viewDrawn"),
      WL = (0, SL.c)("clip"),
      mL = (0, SL.c)("session"),
      IL = (0, SL.c)("control"),
      FL = (0, SL.c)("deferred"),
      vL = (0, SL.c)("coreU8"),
      aL = (0, SL.c)("coreU32"),
      cL = (0, SL.c)("moduleU8"),
      lL = (0, SL.c)("edited"),
      jL = (0, SL.c)("sendSession"),
      PL = (0, SL.c)("checkNotInEvents"),
      ML = (0, SL.c)("clipping"),
      AL = (0, SL.c)("busy"),
      sL = (0, SL.c)("use"),
      qL = (0, SL.c)("ensureLoaded"),
      nL = (0, SL.c)("loadOnce"),
      gL = (0, SL.c)("recycleAfterStep"),
      eL = (0, SL.c)("settleRecycle"),
      RL = (0, SL.c)("load"),
      TL = (0, SL.c)("attach"),
      HL = (0, SL.c)("resendHeld"),
      tL = (0, SL.c)("recycle"),
      DL = (0, SL.c)("send"),
      NL = (0, SL.c)("unload"),
      OL = (0, SL.c)("dropModule"),
      xL = (0, SL.c)("coreBytes"),
      BL = (0, SL.c)("coreWords"),
      Gy = (0, SL.c)("moduleBytes"),
      by = (0, SL.c)("loadFailed"),
      Zy = (0, SL.c)("call"),
      wy = (0, SL.c)("guard"),
      Sy = (0, SL.c)("trapOn");
    class Ly {
      constructor(GG) {
        this.deps = GG, Object.defineProperty(this, Sy, {
          value: Iy
        }), Object.defineProperty(this, wy, {
          value: my
        }), Object.defineProperty(this, Zy, {
          value: Wy
        }), Object.defineProperty(this, by, {
          value: Cy
        }), Object.defineProperty(this, Gy, {
          value: iy
        }), Object.defineProperty(this, BL, {
          value: uy
        }), Object.defineProperty(this, xL, {
          value: Xy
        }), Object.defineProperty(this, OL, {
          value: oy
        }), Object.defineProperty(this, NL, {
          value: Ey
        }), Object.defineProperty(this, DL, {
          value: zy
        }), Object.defineProperty(this, tL, {
          value: ry
        }), Object.defineProperty(this, HL, {
          value: Jy
        }), Object.defineProperty(this, TL, {
          value: dy
        }), Object.defineProperty(this, RL, {
          value: hy
        }), Object.defineProperty(this, eL, {
          value: Ky
        }), Object.defineProperty(this, gL, {
          value: Qy
        }), Object.defineProperty(this, nL, {
          value: fy
        }), Object.defineProperty(this, qL, {
          value: py
        }), Object.defineProperty(this, sL, {
          value: Vy
        }), Object.defineProperty(this, AL, {
          value: Yy
        }), Object.defineProperty(this, ML, {
          value: Uy
        }), Object.defineProperty(this, PL, {
          value: ky
        }), Object.defineProperty(this, jL, {
          value: yy
        }), Object.defineProperty(this, JL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, zL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, EL, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, oL, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, XL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, iL, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, CL, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, WL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, FL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, vL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cL, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lL, {
          writable: !0,
          value: void 0
        }), (0, wL.b)(this, lL)[lL] = new YL({
          ensureLoaded: () => (0, wL.b)(this, qL)[qL](),
          recorderCall: (GG, bG) => {
            bG && (0, wL.b)(this, PL)[PL]("an edited save's stage");
            const ZG = (0, wL.b)(this, Zy)[Zy](((bG, ZG) => (GG(bG, ZG), !0)));
            return null !== ZG && void 0 !== ZG && ZG
          },
          beginSave: GG.beginSave,
          givenUp: GG.givenUp
        })
      }
      get active() {
        return null !== (0, wL.b)(this, rL)[rL]
      }
      get trapped() {
        return (0, wL.b)(this, EL)[EL]
      }
      get loading() {
        return null !== (0, wL.b)(this, uL)[uL]
      }
      prefetch() {
        (0, wL.b)(this, oL)[oL] || (0, wL.b)(this, EL)[EL] || (0, wL.b)(this, rL)[rL] || (0, wL.b)(this, uL)[uL] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, wL.b)(this, CL)[CL] = !0, (0, wL.b)(this, ML)[ML]() && (0, wL.b)(this, sL)[sL]()
      }
      prefs(GG, bG) {
        (0, wL.b)(this, WL)[WL] = {
          on: GG,
          seconds: bG
        }, (0, wL.b)(this, DL)[DL](fG._c.Prefs, pL(GG, bG)), GG && (0, wL.b)(this, CL)[CL] && (0, wL.b)(this, sL)[sL]()
      }
      control(GG) {
        const bG = function(GG) {
          return new Uint8Array([GG, 0, 0, 0])
        }(GG);
        if (dL.has(GG)) return (0, wL.b)(this, rL)[rL] ? void(0, wL.b)(this, DL)[DL](fG._c.Control, bG) : ((0, wL.b)(this, IL)[IL] = bG, void(0, wL.b)(this, sL)[sL]());
        (0, wL.b)(this, oL)[oL] || this.deps.coreCommand(fG._c.Control, bG)
      }
      session(GG) {
        (0, wL.b)(this, mL)[mL] = GG, (0, wL.b)(this, jL)[jL](GG)
      }
      filePartDone(GG, bG) {
        (0, wL.b)(this, DL)[DL](fG._c.FilePartDone, function(GG, bG) {
          const ZG = new Uint8Array(8),
            wG = new DataView(ZG.buffer);
          return wG.setUint32(0, GG, !0), wG.setUint32(4, bG, !0), ZG
        }(GG, bG))
      }
      fileDone(GG) {
        return (0, wL.b)(this, DL)[DL](fG._c.FileDone, function(GG) {
          const bG = new Uint8Array(4);
          return new DataView(bG.buffer).setUint32(0, GG, !0), bG
        }(GG)), (0, wL.b)(this, gL)[gL]()
      }
      saveEdited(GG) {
        return (0, wL.b)(this, PL)[PL]("saveEdited"), (0, wL.b)(this, lL)[lL].start(GG)
      }
      afterFrame() {
        if (!(0, wL.b)(this, rL)[rL]) return;
        "read" === (0, wL.b)(this, lL)[lL].beforeRecorderStep() && (0, wL.b)(this, gL)[gL]();
        const GG = (0, wL.b)(this, XL)[XL];
        (0, wL.b)(this, XL)[XL] = null;
        const bG = (0, wL.b)(this, rL)[rL],
          ZG = (0, wL.b)(this, zL)[zL];
        if (!bG || !ZG) return void(null === GG || void 0 === GG || GG.resolve((0, wL.b)(this, EL)[EL] ? "trapped" : "vQ"));
        const {
          core: wG
        } = this.deps, SG = wG.SLG(2);
        let LG, yG, kG, UG, YG = 0,
          VG = 0;
        if (0 !== SG) {
          var pG, fG;
          const GG = (0, wL.b)(this, BL)[BL]();
          YG = null !== (pG = GG[SG >>> 2]) && void 0 !== pG ? pG : 0, VG = null !== (fG = GG[1 + (SG >>> 2)]) && void 0 !== fG ? fG : 0
        }
        try {
          if (VG > 0) {
            const GG = bG.feed(VG);
            0 !== GG && (0, wL.b)(this, Gy)[Gy](ZG).set((0, wL.b)(this, xL)[xL]().subarray(YG, YG + VG), GG)
          }
          LG = bG.step(), yG = bG.LLG(), kG = bG.yLG(), UG = bG.kLG()
        } catch (QG) {
          if (!(0, wL.b)(this, Sy)[Sy](QG)) throw null === GG || void 0 === GG || GG.resolve("vQ"), QG;
          return void(null === GG || void 0 === GG || GG.resolve("trapped"))
        }
        if (LG > 0) {
          const GG = wG.ULG(2, LG);
          0 !== GG && (0, wL.b)(this, xL)[xL]().set((0, wL.b)(this, Gy)[Gy](ZG).subarray(yG, yG + LG), GG)
        }
        if (kG > 0) {
          (0, wL.b)(this, FL)[FL] = [];
          try {
            this.deps.events(new Uint8Array(ZG.buffer, UG, kG), ZG)
          } catch (QG) {
            throw null === GG || void 0 === GG || GG.resolve("vQ"), QG
          } finally {
            const GG = (0, wL.b)(this, FL)[FL];
            (0, wL.b)(this, FL)[FL] = null;
            for (const [bG, ZG] of GG)(0, wL.b)(this, DL)[DL](bG, ZG)
          }
        }
        if (!(0, wL.b)(this, ML)[ML]() && !(0, wL.b)(this, AL)[AL]()) return (0, wL.b)(this, NL)[NL](), void(null === GG || void 0 === GG || GG.resolve("vQ"));
        null === GG || void 0 === GG || GG.resolve((0, wL.b)(this, tL)[tL]())
      }
      dispose() {
        (0, wL.b)(this, oL)[oL] = !0, (0, wL.b)(this, NL)[NL]()
      }
    }

    function yy(GG) {
      (0, wL.b)(this, DL)[DL](fG._c.Session, function(GG) {
        const bG = new TextEncoder,
          ZG = bG.encode(GG.game).subarray(0, 65535),
          wG = bG.encode(GG.lobby).subarray(0, 65535),
          SG = new Uint8Array(22 + ZG.length + 2 + wG.length),
          LG = new DataView(SG.buffer);
        LG.setFloat64(0, GG.unixMs, !0), LG.setBigUint64(8, BigInt.asUintN(64, GG.session), !0), LG.setUint8(16, GG.lobbyType);
        let yG = 20;
        for (const kG of [ZG, wG]) LG.setUint16(yG, kG.length, !0), SG.set(kG, yG + 2), yG += 2 + kG.length;
        return SG
      }({
        ...GG,
        unixMs: this.deps.unixNow()
      }))
    }

    function ky(GG) {
      false
    }

    function Uy() {
      var GG, bG;
      return null !== (GG = null === (bG = (0, wL.b)(this, WL)[WL]) || void 0 === bG ? void 0 : bG.on) && void 0 !== GG && GG
    }

    function Yy() {
      const GG = (0, wL.b)(this, rL)[rL];
      let bG = !0;
      if (GG) try {
        bG = GG.busy()
      } catch (ZG) {
        if (!(0, wL.b)(this, Sy)[Sy](ZG)) throw ZG
      }
      return bG || (0, wL.b)(this, lL)[lL].active
    }
    async function Vy() {
      !(0, wL.b)(this, oL)[oL] && this.deps.allowed() ? await (0, wL.b)(this, qL)[qL]() : (0, wL.b)(this, IL)[IL] = null
    }

    function py() {
      return (0, wL.b)(this, EL)[EL] || (0, wL.b)(this, oL)[oL] ? Promise.resolve(!1) : (0, wL.b)(this, rL)[rL] ? Promise.resolve(!0) : ((0, wL.b)(this, uL)[uL] ??= (0, wL.b)(this, nL)[nL](), (0, wL.b)(this, uL)[uL])
    }
    async function fy() {
      let GG = !1;
      try {
        return GG = await (0, wL.b)(this, RL)[RL](), GG
      } finally {
        GG || ((0, wL.b)(this, IL)[IL] = null), (0, wL.b)(this, uL)[uL] = null
      }
    }

    function Qy() {
      if (!(0, wL.b)(this, rL)[rL]) return Promise.resolve((0, wL.b)(this, EL)[EL] ? "trapped" : "vQ");
      if (!(0, wL.b)(this, XL)[XL]) {
        let GG = () => {};
        const bG = new Promise((bG => {
          GG = bG
        }));
        (0, wL.b)(this, XL)[XL] = {
          promise: bG,
          resolve: GG
        }
      }
      return (0, wL.b)(this, XL)[XL].promise
    }

    function Ky(GG) {
      const bG = (0, wL.b)(this, XL)[XL];
      (0, wL.b)(this, XL)[XL] = null, null === bG || void 0 === bG || bG.resolve(GG)
    }
    async function hy() {
      let GG = (0, wL.b)(this, JL)[JL];
      if (!GG) {
        const bG = (0, wL.b)(this, iL)[iL];
        try {
          GG = await this.deps.load()
        } catch (ZG) {
          return bG === (0, wL.b)(this, iL)[iL] && await (0, wL.b)(this, by)[by](ZG), !1
        }
        if (bG !== (0, wL.b)(this, iL)[iL]) return this.deps.unload(), !1;
        const wG = GG,
          SG = (0, wL.b)(this, wy)[wy]((() => wG.YLG()));
        if (void 0 === SG) return !1;
        const LG = this.deps.core.VLG();
        if (SG !== LG) return await (0, wL.b)(this, by)[by](new Error(`recorder port version ${SG}, the core's ${LG}`)), !1;
        (0, wL.b)(this, JL)[JL] = GG
      }
      const bG = GG;
      try {
        if (!(0, wL.b)(this, wy)[wy]((() => ((0, wL.b)(this, rL)[rL] = new bG.pLG, (0, wL.b)(this, zL)[zL] = bG.ZLG(), !0)))) return !1;
        (0, wL.b)(this, HL)[HL]();
        const GG = (0, wL.b)(this, IL)[IL];
        return (0, wL.b)(this, IL)[IL] = null, GG && (0, wL.b)(this, DL)[DL](fG._c.Control, GG), (0, wL.b)(this, TL)[TL]()
      } catch (ZG) {
        return (0, wL.b)(this, NL)[NL](), await (0, wL.b)(this, by)[by](ZG), !1
      }
    }

    function dy() {
      return this.deps.core.fLG(0), 1 === this.deps.core.fLG(1) || ((0, wL.b)(this, NL)[NL](), this.deps.failed(hL), !1)
    }

    function Jy() {
      (0, wL.b)(this, WL)[WL] && (0, wL.b)(this, DL)[DL](fG._c.Prefs, pL((0, wL.b)(this, WL)[WL].on, (0, wL.b)(this, WL)[WL].seconds)), (0, wL.b)(this, mL)[mL] && (0, wL.b)(this, jL)[jL]((0, wL.b)(this, mL)[mL])
    }

    function ry() {
      return KL({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var GG, bG;
          return null !== (GG = null === (bG = (0, wL.b)(this, WL)[WL]) || void 0 === bG ? void 0 : bG.seconds) && void 0 !== GG ? GG : 0
        },
        trapped: () => (0, wL.b)(this, EL)[EL],
        busy: () => (0, wL.b)(this, AL)[AL](),
        loadInFlight: () => (0, wL.b)(this, uL)[uL],
        pK: () => (0, wL.b)(this, oL)[oL],
        unload: () => {
          (0, wL.b)(this, NL)[NL]()
        },
        load: () => (0, wL.b)(this, qL)[qL]()
      })
    }

    function zy(GG, bG) {
      (0, wL.b)(this, FL)[FL] ? (0, wL.b)(this, FL)[FL].push([GG, bG]): (0, wL.b)(this, Zy)[Zy](((ZG, wG) => {
        const SG = ZG.wLG(bG.length);
        0 !== SG && (new Uint8Array(wG.buffer, SG, bG.length).set(bG), ZG.command(GG, bG.length))
      }))
    }

    function Ey() {
      (0, wL.b)(this, iL)[iL]++, (0, wL.b)(this, eL)[eL]("vQ"), (0, wL.b)(this, lL)[lL].stop(), this.deps.core.fLG(0), (0, wL.b)(this, OL)[OL](), (0, wL.b)(this, EL)[EL] || ((0, wL.b)(this, JL)[JL] = null, this.deps.unload())
    }

    function oy() {
      (0, wL.b)(this, Zy)[Zy]((GG => {
        GG.free()
      })), (0, wL.b)(this, rL)[rL] = null, (0, wL.b)(this, zL)[zL] = null, (0, wL.b)(this, cL)[cL] = null
    }

    function Xy() {
      var GG;
      const bG = this.deps.coreBuffer();
      return (null === (GG = (0, wL.b)(this, vL)[vL]) || void 0 === GG ? void 0 : GG.buffer) !== bG && ((0, wL.b)(this, vL)[vL] = new Uint8Array(bG)), (0, wL.b)(this, vL)[vL]
    }

    function uy() {
      var GG;
      const bG = this.deps.coreBuffer();
      return (null === (GG = (0, wL.b)(this, aL)[aL]) || void 0 === GG ? void 0 : GG.buffer) !== bG && ((0, wL.b)(this, aL)[aL] = new Uint32Array(bG, 0, bG.byteLength >>> 2)), (0, wL.b)(this, aL)[aL]
    }

    function iy(GG) {
      var bG;
      const ZG = GG.buffer;
      return (null === (bG = (0, wL.b)(this, cL)[cL]) || void 0 === bG ? void 0 : bG.buffer) !== ZG && ((0, wL.b)(this, cL)[cL] = new Uint8Array(ZG)), (0, wL.b)(this, cL)[cL]
    }
    async function Cy(GG) {
      await this.deps.staleOr(GG, (() => {
        this.deps.failed(hL)
      }))
    }

    function Wy(GG) {
      const bG = (0, wL.b)(this, rL)[rL],
        ZG = (0, wL.b)(this, zL)[zL];
      if (bG && ZG) return (0, wL.b)(this, wy)[wy]((() => GG(bG, ZG)))
    }

    function my(GG) {
      if (!(0, wL.b)(this, EL)[EL]) try {
        return GG()
      } catch (bG) {
        if (!(0, wL.b)(this, Sy)[Sy](bG)) throw bG;
        return
      }
    }

    function Iy(GG) {
      return GG instanceof WebAssembly.RuntimeError && ((0, wL.b)(this, EL)[EL] = !0, (0, wL.b)(this, rL)[rL] = null, (0, wL.b)(this, zL)[zL] = null, (0, wL.b)(this, cL)[cL] = null, (0, wL.b)(this, JL)[JL] = null, (0, wL.b)(this, IL)[IL] = null, (0, wL.b)(this, eL)[eL]("trapped"), this.deps.core.fLG(0), (0, wL.b)(this, lL)[lL].stop(), this.deps.crash(this.deps.markTrapped(GG)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var Fy = ZG(39068);
    const vy = new Map([
      ["skyblock", () => ZG.e(52).then((() => ZG(39066)))]
    ]);

    function ay(GG) {
      const bG = vy.get(GG);
      return bG ? bG().then((() => {
        const bG = (0, Fy.d)(GG);
        if (!bG) throw new Error(`${GG}'s replay hook module registered no hook`);
        return bG
      })) : null
    }
    class cy {
      constructor(GG) {
        this.deps = GG, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(GG) {
        if (this.pending.clear(), GG === this.game && null !== this.hook) return void(this.all = !0);
        const bG = ++this.generation;
        this.game = GG, this.hook = null, this.all = !1;
        const ZG = this.deps.loadHook(GG);
        null === ZG || void 0 === ZG || ZG.then((GG => {
          bG === this.generation && (this.hook = GG, this.all = !0)
        }), (GG => {
          bG === this.generation && this.deps.onError(GG)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(GG) {
        null === this.hook || this.all || this.pending.set(GG, !0)
      }
      entityInfoChanged(GG) {
        null === this.hook || this.all || this.pending.has(GG) || this.pending.set(GG, !1)
      }
      flush(GG) {
        const {
          hook: bG
        } = this;
        if (null === bG || !GG || !this.all && 0 === this.pending.size) return;
        const ZG = this.deps.cmd();
        if (null === ZG) return;
        const {
          api: wG
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: GG,
            count: bG
          } = AZ(wG, this.ids);
          this.ids = GG;
          for (let ZG = 0; ZG < bG; ZG++) this.pending.set(GG[ZG], !0)
        }
        const SG = this.ids = sZ(this.ids, this.pending.size);
        let LG = 0;
        for (const YG of this.pending.keys()) SG[LG++] = YG;
        const yG = [],
          kG = qZ(wG, SG, LG, ((GG, bG) => {
            null !== bG && yG.push({
              serverId: GG,
              info: bG,
              spawned: !0 === this.pending.get(GG)
            })
          }));
        if (kG) {
          this.pending.clear();
          for (const {
              serverId: GG,
              info: wG,
              spawned: SG
            }
            of yG) try {
            bG(wG, {
              setFacingTolerance: bG => {
                null === bG && SG || kZ(ZG, GG, bG) || this.pending.set(GG, SG)
              }
            })
          } catch (UG) {
            this.deps.onError(UG)
          }
        }
      }
    }
    var ly = (0, SL.c)("bindings"),
      jy = (0, SL.c)("module"),
      Py = (0, SL.c)("memory"),
      My = (0, SL.c)("trapped"),
      Ay = (0, SL.c)("generation"),
      sy = (0, SL.c)("loading"),
      qy = (0, SL.c)("lend"),
      ny = (0, SL.c)("givenUp"),
      gy = (0, SL.c)("afterSave"),
      ey = (0, SL.c)("opens"),
      Ry = (0, SL.c)("saveAskedAt"),
      Ty = (0, SL.c)("unload"),
      Hy = (0, SL.c)("dropModule"),
      ty = (0, SL.c)("loadFailed"),
      Dy = (0, SL.c)("saveReadsBody"),
      Ny = (0, SL.c)("command"),
      Oy = (0, SL.c)("call"),
      xy = (0, SL.c)("guard"),
      By = (0, SL.c)("trapOn");
    class Gk {
      constructor(GG) {
        this.deps = GG, Object.defineProperty(this, By, {
          value: Uk
        }), Object.defineProperty(this, xy, {
          value: kk
        }), Object.defineProperty(this, Oy, {
          value: yk
        }), Object.defineProperty(this, Ny, {
          value: Lk
        }), Object.defineProperty(this, Dy, {
          get: Sk,
          set: void 0
        }), Object.defineProperty(this, ty, {
          value: wk
        }), Object.defineProperty(this, Hy, {
          value: Zk
        }), Object.defineProperty(this, Ty, {
          value: bk
        }), Object.defineProperty(this, ly, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jy, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Py, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, My, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ay, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, sy, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, qy, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ny, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gy, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ey, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Ry, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, wL.b)(this, jy)[jy] && null === (0, wL.b)(this, gy)[gy]
      }
      async open(GG, bG) {
        if ((0, wL.b)(this, My)[My]) return fG.ld.ModuleTrap;
        let ZG = (0, wL.b)(this, ly)[ly];
        if (!ZG) {
          const GG = (0, wL.b)(this, Ay)[Ay];
          (0, wL.b)(this, sy)[sy]++;
          try {
            ZG = await this.deps.load()
          } catch (SG) {
            return (0, wL.b)(this, sy)[sy]--, GG !== (0, wL.b)(this, Ay)[Ay] ? "stopped" : (0, wL.b)(this, ty)[ty](SG, bG)
          }
          if ((0, wL.b)(this, sy)[sy]--, GG !== (0, wL.b)(this, Ay)[Ay]) return (0, wL.b)(this, ly)[ly] || 0 !== (0, wL.b)(this, sy)[sy] || (0, wL.b)(this, My)[My] || this.deps.unload(), "stopped";
          if ((0, wL.b)(this, My)[My]) return fG.ld.ModuleTrap;
          const wG = ZG.YLG(),
            LG = this.deps.core.VLG();
          if (wG !== LG) return (0, wL.b)(this, ty)[ty](new Error(`replay port version ${wG}, the core's ${LG}`), bG);
          (0, wL.b)(this, ly)[ly] = ZG
        }
        if (!(0, wL.b)(this, jy)[jy]) {
          const GG = ZG;
          if (!(0, wL.b)(this, xy)[xy]((() => {
              (0, wL.b)(this, jy)[jy] = new GG.QLG, (0, wL.b)(this, Py)[Py] = GG.KLG()
            }))) return fG.ld.ModuleTrap
        }
        let wG = !1;
        return (0, wL.b)(this, Oy)[Oy](((bG, ZG) => {
          null !== (0, wL.b)(this, gy)[gy] && bG.step(0, 0);
          const SG = bG.stage(GG.length);
          0 !== SG && (new Uint8Array(ZG.buffer, SG, GG.length).set(GG), bG.open(), (0, wL.b)(this, ny)[ny] = (0, wL.b)(this, qy)[qy], (0, wL.b)(this, gy)[gy] = null, (0, wL.b)(this, ey)[ey]++, wG = !0)
        })) ? wG ? "opening" : fG.ld.TooLarge : fG.ld.ModuleTrap
      }
      beforeFrame(GG) {
        const bG = (0, wL.b)(this, jy)[jy],
          ZG = (0, wL.b)(this, Py)[Py];
        if (!bG || !ZG || null !== (0, wL.b)(this, gy)[gy]) return;
        const {
          core: wG
        } = this.deps, SG = wG.hLG(GG);
        if (SG < 0) return;
        const LG = Math.floor(SG);
        let yG, kG;
        try {
          yG = bG.step(LG, SG - LG), kG = bG.LLG()
        } catch (YG) {
          return void(0, wL.b)(this, By)[By](YG)
        }
        const UG = wG.ULG(1, yG);
        if (0 === UG) {
          const GG = (0, wL.b)(this, Oy)[Oy]((GG => {
            GG.close()
          }));
          if (!GG) return;
          return (0, wL.b)(this, Dy)[Dy] ? (0, wL.b)(this, gy)[gy] = "drop" : (0, wL.b)(this, Hy)[Hy](), void wG.dLG(fG.ld.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), UG, yG).set(new Uint8Array(ZG.buffer, kG, yG))
      }
      play() {
        (0, wL.b)(this, Ny)[Ny]((GG => {
          GG.play()
        }))
      }
      pause() {
        (0, wL.b)(this, Ny)[Ny]((GG => {
          GG.pause()
        }))
      }
      seek(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, wL.b)(this, Ny)[Ny]((ZG => {
          ZG.seek(GG, bG)
        }))
      }
      setMark(GG, bG) {
        return (0, wL.b)(this, Ny)[Ny]((ZG => {
          ZG.JLG(GG, bG)
        }))
      }
      addKeyframe(GG, bG) {
        return (0, wL.b)(this, Ny)[Ny]((ZG => {
          ZG.rLG(GG[0], GG[1], GG[2], bG[0], bG[1], bG[2])
        }))
      }
      setKeyframe(GG, bG) {
        return (0, wL.b)(this, Ny)[Ny]((ZG => {
          ZG.zLG(GG, bG)
        }))
      }
      moveKeyframe(GG, bG) {
        return (0, wL.b)(this, Ny)[Ny]((ZG => {
          ZG.ELG(GG, bG)
        }))
      }
      deleteKeyframes(GG, bG) {
        return (0, wL.b)(this, Ny)[Ny]((ZG => {
          ZG.oLG(GG, bG)
        }))
      }
      crop(GG, bG) {
        return null === (0, wL.b)(this, qy)[qy] && (0, wL.b)(this, Ny)[Ny]((ZG => {
          ZG.crop(GG, bG)
        }))
      }
      beginSave() {
        const GG = (0, wL.b)(this, Ry)[Ry];
        if ((0, wL.b)(this, Ry)[Ry] = null, null !== GG && GG !== (0, wL.b)(this, ey)[ey]) return null;
        let bG = 0,
          ZG = null;
        if ((0, wL.b)(this, Oy)[Oy](((GG, wG) => {
            bG = GG.save(), 0 !== bG && (ZG = new Uint8Array(wG.buffer, GG.XLG(), GG.uLG()).slice())
          })), 0 === bG || !ZG) return null;
        const wG = {
          headLen: bG,
          editState: ZG,
          givenUp: () => (0, wL.b)(this, ny)[ny] === wG,
          head: (GG, bG) => {
            if ((0, wL.b)(this, qy)[qy] !== wG || !(0, wL.b)(this, Dy)[Dy]) return null;
            let ZG = null;
            return (0, wL.b)(this, Oy)[Oy](((wG, SG) => {
              const LG = wG.iLG();
              0 !== LG && GG >= 0 && bG >= 0 && GG + bG <= LG && (ZG = new Uint8Array(SG.buffer, wG.CLG() + GG, bG))
            })), ZG
          },
          end: () => {
            if ((0, wL.b)(this, qy)[qy] !== wG) return;
            (0, wL.b)(this, qy)[qy] = null, (0, wL.b)(this, ny)[ny] = null, (0, wL.b)(this, Oy)[Oy]((GG => {
              GG.WLG()
            }));
            const GG = (0, wL.b)(this, gy)[gy];
            (0, wL.b)(this, gy)[gy] = null, "unload" === GG ? (0, wL.b)(this, Ty)[Ty]() : "drop" === GG && (0, wL.b)(this, Hy)[Hy]()
          }
        };
        return (0, wL.b)(this, qy)[qy] = wG, wG
      }
      askSave() {
        (0, wL.b)(this, Ry)[Ry] = (0, wL.b)(this, ey)[ey]
      }
      setSpeed(GG) {
        (0, wL.b)(this, Ny)[Ny]((bG => {
          bG.mLG(GG)
        }))
      }
      setCameraMode(GG) {
        (0, wL.b)(this, Ny)[Ny]((bG => {
          bG.ILG(GG)
        }))
      }
      close() {
        (0, wL.b)(this, Ny)[Ny]((GG => {
          GG.close()
        }))
      }
      stop() {
        (0, wL.b)(this, Ay)[Ay]++, (0, wL.b)(this, Dy)[Dy] && ((0, wL.b)(this, Oy)[Oy]((GG => {
          GG.close()
        })), (0, wL.b)(this, jy)[jy]) ? (0, wL.b)(this, gy)[gy] = "unload" : (0, wL.b)(this, Ty)[Ty]()
      }
    }

    function bk() {
      (0, wL.b)(this, Hy)[Hy](), (0, wL.b)(this, My)[My] || ((0, wL.b)(this, ly)[ly] = null, this.deps.unload())
    }

    function Zk() {
      (0, wL.b)(this, Oy)[Oy]((GG => {
        GG.free()
      })), (0, wL.b)(this, jy)[jy] = null, (0, wL.b)(this, Py)[Py] = null
    }
    async function wk(GG, bG) {
      return await this.deps.staleOr(GG, (() => {}), {
        beforeReload: bG
      }) ? "reloading" : fG.ld.ModuleLoad
    }

    function Sk() {
      return null !== (0, wL.b)(this, qy)[qy] && (0, wL.b)(this, ny)[ny] !== (0, wL.b)(this, qy)[qy]
    }

    function Lk(GG) {
      return null === (0, wL.b)(this, gy)[gy] && (0, wL.b)(this, Oy)[Oy](GG)
    }

    function yk(GG) {
      const bG = (0, wL.b)(this, jy)[jy],
        ZG = (0, wL.b)(this, Py)[Py];
      return !(!bG || !ZG) && (0, wL.b)(this, xy)[xy]((() => {
        GG(bG, ZG)
      }))
    }

    function kk(GG) {
      if ((0, wL.b)(this, My)[My]) return !1;
      try {
        return GG(), !0
      } catch (bG) {
        return (0, wL.b)(this, By)[By](bG), !1
      }
    }

    function Uk(GG) {
      if (!(GG instanceof WebAssembly.RuntimeError)) throw GG;
      (0, wL.b)(this, My)[My] = !0, (0, wL.b)(this, jy)[jy] = null, (0, wL.b)(this, Py)[Py] = null, (0, wL.b)(this, ly)[ly] = null, this.deps.crash(this.deps.markTrapped(GG)), this.deps.core.dLG(fG.ld.ModuleTrap)
    }
    var Yk = ZG(6491),
      Vk = ZG(41421);
    const pk = "[bloxd-wasm-client]";
    const fk = String(aS);

    function Qk(GG) {
      return null === GG || GG === fk ? void 0 : GG
    }

    function Kk(GG) {
      var bG, ZG, wG, SG, LG, kG, UG;
      switch (GG.what) {
        case fG.rd.FlyingText: {
          let bG;
          try {
            bG = JSON.parse(GG.contentJson)
          } catch (YG) {
            return void console.warn(`${pk} a replay's flying text isn't JSON`, YG)
          }
          yG.l.xh("forceFlyingMiddleMessage", {
            content: bG,
            cL: GG.cL,
            angle: GG.angle,
            lL: GG.lL
          });
          break
        }
        case fG.rd.PlayerKilled:
          (0, Vk.d)({
            kind: "killed",
            body: {
              deadEId: null !== (bG = Qk(GG.dead)) && void 0 !== bG ? bG : "",
              killerEId: Qk(GG.killer),
              withItem: null !== (ZG = GG.withItem) && void 0 !== ZG ? ZG : "",
              killstreak: GG.killstreak
            }
          });
          break;
        case fG.rd.Killfeed:
          (0, Vk.d)({
            kind: "custom",
            body: {
              killer: {
                eId: Qk(GG.killerId),
                name: null !== (wG = GG.killerName) && void 0 !== wG ? wG : void 0,
                colour: null !== (SG = GG.killerColour) && void 0 !== SG ? SG : void 0
              },
              victim: {
                eId: Qk(GG.victimId),
                name: null !== (LG = GG.victimName) && void 0 !== LG ? LG : void 0,
                colour: null !== (kG = GG.victimColour) && void 0 !== kG ? kG : void 0
              },
              withItem: null !== (UG = GG.withItem) && void 0 !== UG ? UG : ""
            }
          })
      }
    }
    const hk = "[bloxd-wasm-client]";

    function dk(GG) {
      if (void 0 === GG || null === GG || "" === GG) return null;
      const bG = Number(GG);
      return Number.isInteger(bG) && bG > aS && bG <= 2147483647 ? bG : null
    }

    function Jk(GG) {
      return {
        id: dk(GG.eId),
        name: "string" === typeof GG.name ? GG.name : null,
        colour: "string" === typeof GG.colour ? GG.colour : null
      }
    }

    function rk(GG) {
      const bG = (0, gS.l)(HZ.jc.PlayerKilled, (bG => {
          var ZG, wG;
          const SG = (0, nS.j)(bG);
          if (!(0, nS.d)(SG)) return;
          const {
            deadEId: LG,
            killerEId: yG,
            withItem: kG,
            killstreak: UG
          } = SG;
          GG.recordPlayerKilled(null !== (ZG = dk(LG)) && void 0 !== ZG ? ZG : aS, null !== (wG = dk(yG)) && void 0 !== wG ? wG : aS, "number" === typeof UG ? UG : 0, "string" === typeof kG ? kG : "")
        })),
        ZG = (0, gS.l)(HZ.jc.CustomKillfeed, (bG => {
          const ZG = (0, nS.j)(bG);
          if (!(0, nS.d)(ZG) || !(0, nS.d)(ZG.killer) || !(0, nS.d)(ZG.victim)) return;
          const {
            killer: wG,
            victim: SG,
            withItem: LG
          } = ZG;
          GG.recordKillfeed(Jk(wG), Jk(SG), "string" === typeof LG ? LG : null)
        }));
      return () => {
        bG(), ZG()
      }
    }

    function zk(GG) {
      var bG;
      return void 0 === GG || null === GG ? null : null !== (bG = JSON.stringify(GG)) && void 0 !== bG ? bG : null
    }

    function Ek(GG) {
      let bG = null;
      const ZG = () => {
        const {
          enableClipping: ZG,
          clipDurationSeconds: SG
        } = wG.e.get("clientEscMenuOptions"), LG = `${ZG}:${SG}`;
        LG !== bG && (bG = LG, GG.recorder.setPrefs(ZG, SG))
      };
      return ZG(), (0, yG.p)("appManagerUpdated|clientEscMenuOptions", ZG)
    }
    const Xk = "replayModule",
      uk = "recorderModule";

    function ik(GG, bG, ZG) {
      return function() {
        return GG.isStopped ? ZG : bG(...arguments)
      }
    }
    const Ck = {
      open: () => Promise.reject(new Error(XS.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function Wk() {
      return ZG.e(65).then((() => ZG(62034)))
    }

    function mk(GG) {
      (0, XS.g)({
        text: GG,
        type: "Error"
      })
    }
    class Ik {
      constructor(GG) {
        this.deps = GG, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: bG,
          api: wG,
          core: SG
        } = GG, LG = () => GG.memory().buffer, yG = () => bG.isStopped ? null : bG.rings.cmd, kG = ik(bG, ((GG, bG) => SG.ULG(GG, bG)), 0), UG = () => SG.VLG();
        let YG = null;
        this.replay = new Gk({
          core: {
            hLG: ik(bG, (GG => SG.hLG(GG)), -1),
            ULG: kG,
            VLG: UG,
            dLG: ik(bG, (GG => {
              SG.dLG(GG)
            }), void 0)
          },
          coreBuffer: LG,
          load: async () => (YG = await ZG.e(66).then((() => ZG(62044))), YG.loadReplayModule()),
          unload: () => {
            var GG;
            null === (GG = YG) || void 0 === GG || GG.unloadReplayModule()
          },
          markTrapped: GG => YG ? YG.markReplayTrapped(GG) : new Error(String(GG)),
          staleOr: (bG, ZG, wG) => GG.staleOr(Xk, bG, ZG, wG),
          crash: bG => {
            GG.reportFault(Xk, bG)
          }
        });
        let VG = null;
        this.recorder = new Ly({
          core: {
            fLG: ik(bG, (GG => SG.fLG(GG)), 0),
            SLG: ik(bG, (GG => SG.SLG(GG)), 0),
            ULG: kG,
            VLG: UG
          },
          coreCommand: (GG, bG) => {
            var ZG, wG;
            return null !== (ZG = null === (wG = yG()) || void 0 === wG ? void 0 : wG.writeCmd(GG, 0, bG)) && void 0 !== ZG && ZG
          },
          coreBuffer: LG,
          load: async () => (VG = await Wk(), VG.loadRecorderModule()),
          prefetch: () => {
            Wk().then((GG => GG.prefetchRecorderModule())).catch((GG => {
              console.warn(`${hk} the recorder module didn't prefetch, so a save loads it:`, GG)
            }))
          },
          unload: () => {
            var GG;
            null === (GG = VG) || void 0 === GG || GG.unloadRecorderModule()
          },
          markTrapped: GG => VG ? VG.markRecorderTrapped(GG) : new Error(String(GG)),
          memoryBytes: () => {
            var GG, bG;
            return null !== (GG = null === (bG = VG) || void 0 === bG ? void 0 : bG.recorderMemoryBytes()) && void 0 !== GG ? GG : 0
          },
          staleOr: (bG, ZG) => GG.staleOr(uk, bG, ZG),
          crash: bG => {
            GG.reportFault(uk, bG)
          },
          allowed: () => !0 === GG.options.get("canRecordReplays"),
          failed: mk,
          events: (GG, bG) => {
            this.runtime.recorderEvents(GG, bG)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: mk,
          unixNow: () => Date.now()
        });
        const pG = new vS({
          core: {
            DSG: ik(bG, (GG => SG.DSG(GG)), 0),
            OSG: ik(bG, (() => {
              SG.OSG()
            }), void 0),
            qd: ik(bG, (() => SG.qd()), 0),
            NSG: ik(bG, (() => SG.NSG()), 0)
          },
          buffer: LG,
          apiView: () => wG.apiView,
          cmd: yG,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new cy({
          api: wG,
          cmd: yG,
          loadHook: ay,
          onError: GG => {
            console.warn(`${hk} the recorded game's replay hooks:`, GG)
          }
        });
        const fG = new qS({
          client: pG,
          buffer: LG,
          setHoldDraws: GG => {
            bG.setHoldDraws(GG)
          },
          notify: XS.g,
          onRecorderState: () => {
            var GG;
            null === (GG = (0, iS.g)()) || void 0 === GG || GG.recorderChanged()
          },
          onViewerChange: () => {
            var GG;
            null === (GG = (0, iS.g)()) || void 0 === GG || GG.viewerChanged()
          },
          onReplayOption: bG => {
            ! function(GG, bG) {
              var ZG, wG;
              const SG = HZ.pb[bG.key];
              if (void 0 === SG) return;
              let LG = null !== (ZG = bG.value) && void 0 !== ZG ? ZG : JSON.parse(JSON.stringify(null !== (wG = Yk.b[SG]) && void 0 !== wG ? wG : null));
              if (null !== bG.value && bG.key < HZ.Pb.Environment && "string" === typeof LG) try {
                LG = JSON.parse(LG)
              } catch (yG) {
                return void console.warn(`${pk} a replay's ${SG} isn't JSON`, yG)
              }
              GG.applyNewClientOptions({
                [SG]: LG
              })
            }(GG.options, bG)
          },
          onReplayUiEvent: Kk,
          onReplayOpened: bG => {
            this.entityHooks.opened((0, WG.Yb)(bG)), GG.replayShaderPack(bG)
          },
          meshPending: () => {
            var GG, ZG;
            return null !== (GG = null === (ZG = bG.lastHeader) || void 0 === ZG ? void 0 : ZG.renderPending) && void 0 !== GG ? GG : 0
          },
          viewerOpen: uS.b,
          download: GG => {
            (0, ES.i)(GG)
          }
        });
        this.runtime = fG, wG.replay = fG.sink, (0, iS.q)(fG);
        const QG = new TS({
          live: () => {
            var GG;
            return !bG.isStopped && !0 === (null === (GG = fG.currentViewer) || void 0 === GG ? void 0 : GG.inPlayback)
          },
          cmd: yG,
          dragScale: bL
        });
        this.freecam = QG, (0, iS.n)(QG), this.recordedOptions = function(GG, bG) {
          const ZG = HZ.pb,
            wG = ZG.map(((ZG, wG) => bG.subscribe(ZG, (bG => {
              GG.setOption(wG, zk(bG))
            }))));
          return {
            sendAll() {
              ZG.forEach(((ZG, wG) => {
                GG.setOption(wG, zk(bG.get(ZG)))
              }))
            },
            stop() {
              for (const GG of wG) GG()
            }
          }
        }(fG.recorder, GG.options), this.stops = [(0, ww.l)((GG => {
          QG.flush();
          try {
            this.replay.beforeFrame(GG)
          } catch (bG) {
            this.deps.reportFault("replayFrame", bG)
          }
        })), (0, ww.u)(((GG, bG) => {
          try {
            this.recorder.afterFrame(), bG && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (ZG) {
            this.deps.reportFault("recorderFrame", ZG)
          }
          try {
            fG.afterFrame(GG)
          } catch (ZG) {
            this.deps.reportFault("replayRuntime", ZG)
          }
        })), Ek(fG), () => {
          this.recordedOptions.stop()
        }, rk(fG.recorder), (0, eS.j)((GG => {
          let {
            action: bG,
            down: ZG
          } = GG;
          var wG;
          ZG && (null === (wG = (0, iS.g)()) || void 0 === wG || wG.keyDown(bG))
        }))];
        const KG = () => {
          const GG = fG.currentViewer;
          return !0 === (null === GG || void 0 === GG ? void 0 : GG.isOpen) ? GG : null
        };
        (0, oS.e)({
          open: (GG, bG) => this.open(GG, bG),
          replayKey: () => {
            var GG, bG;
            return null !== (GG = null === (bG = KG()) || void 0 === bG ? void 0 : bG.id) && void 0 !== GG ? GG : null
          },
          saveRefusal: () => {
            var GG, bG;
            return null !== (GG = null === (bG = KG()) || void 0 === bG ? void 0 : bG.saveRefusal) && void 0 !== GG ? GG : null
          },
          encode: () => {
            var GG, bG;
            return null !== (GG = null === (bG = KG()) || void 0 === bG ? void 0 : bG.save()) && void 0 !== GG ? GG : Promise.resolve(null)
          },
          fileHandle: () => {
            var GG, bG;
            return null !== (GG = null === (bG = fG.currentViewer) || void 0 === bG ? void 0 : bG.fileHandle) && void 0 !== GG ? GG : null
          },
          markSaved: (GG, bG) => {
            var ZG;
            null === (ZG = fG.currentViewer) || void 0 === ZG || ZG.markSaved(GG, bG)
          }
        })
      }
      netEvent(GG) {
        if ("connection" === GG.type)
          if (GG.phase === fG.M.Activated) {
            this.activeConn = GG.conn;
            const bG = this.deps.sessionInfo(GG.conn);
            null !== bG && (this.runtime.activated({
              lobbyType: (0, mG.t)(bG.lobbyName),
              gameNameWithVariation: bG.gameNameWithVariation,
              lobbyName: bG.lobbyName
            }), this.recordedOptions.sendAll())
          } else GG.phase !== fG.M.Left && GG.phase !== fG.M.Closed || GG.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const GG of this.stops) GG();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, iS.l)() === this.runtime && (0, iS.q)(null), (0, iS.k)() === this.freecam && (0, iS.n)(null), (0, oS.e)(Ck), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(GG, bG) {
        const {
          running: ZG
        } = this.deps;
        if (ZG.isStopped) throw new Error(XS.e.coreStopped.text);
        if (GG.byteLength > 67108864) throw new Error(XS.e.cantOpen.text);
        let wG;
        try {
          wG = await async function(GG) {
            const bG = await GG.loadViewer();
            return bG.inPlayback || (0, ww.I)().leaveGame(null), bG
          }(this.runtime)
        } catch (SG) {
          throw console.warn(`${hk} the replay viewer didn't load`, SG), new Error(XS.e.viewerLoadFailed.text)
        }
        if (ZG.isStopped) throw new Error(XS.e.coreStopped.text);
        await wG.open(GG, bG)
      }
    }
    var Fk = ZG(1923);

    function vk(GG, bG) {
      const {
        aux: ZG,
        payload: wG
      } = function(GG) {
        return {
          aux: GG.reset ? fG.ac.ResetFirst : 0,
          payload: ck(GG.changes)
        }
      }(bG);
      GG.queueOptions(ZG, wG) && (bG.reset && Fk.c.reset(), Fk.c.apply(bG.changes))
    }
    const ak = new TextEncoder;

    function ck(GG) {
      const bG = new lk;
      return Pk(bG, GG), bG.bytes()
    }
    class lk {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(GG) {
        if (this.len + GG <= this.buf.length) return;
        const bG = new Uint8Array(Math.max(2 * this.buf.length, this.len + GG));
        bG.set(this.buf.subarray(0, this.len)), this.buf = bG, this.view = new DataView(bG.buffer)
      }
      u8(GG) {
        this.room(1), this.buf[this.len++] = GG
      }
      tagged(GG, bG, ZG) {
        this.room(1 + bG), this.buf[this.len++] = GG, 1 === bG ? this.view.setUint8(this.len, ZG) : 2 === bG ? this.view.setUint16(this.len, ZG) : this.view.setUint32(this.len, ZG), this.len += bG
      }
      signed(GG, bG, ZG) {
        this.room(1 + bG), this.buf[this.len++] = GG, 1 === bG ? this.view.setInt8(this.len, ZG) : 2 === bG ? this.view.setInt16(this.len, ZG) : this.view.setInt32(this.len, ZG), this.len += bG
      }
      f64(GG) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, GG), this.len += 8
      }
      raw(GG) {
        this.room(GG.length), this.buf.set(GG, this.len), this.len += GG.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function jk(GG, bG, ZG, wG, SG, LG, yG) {
      bG < wG ? GG.u8(ZG | bG) : null !== SG && bG < 256 ? GG.tagged(SG, 1, bG) : bG < 65536 ? GG.tagged(LG, 2, bG) : GG.tagged(yG, 4, bG)
    }

    function Pk(GG, bG) {
      switch (typeof bG) {
        case "undefined":
          return void GG.raw(Mk);
        case "boolean":
          return void GG.u8(bG ? 195 : 194);
        case "number":
          return void
          function(GG, bG) {
            bG >>> 0 === bG ? bG < 128 ? GG.u8(bG) : bG < 256 ? GG.tagged(204, 1, bG) : bG < 65536 ? GG.tagged(205, 2, bG) : GG.tagged(206, 4, bG) : (bG | 0) === bG ? bG >= -32 ? GG.u8(255 & bG) : bG >= -128 ? GG.signed(208, 1, bG) : bG >= -32768 ? GG.signed(209, 2, bG) : GG.signed(210, 4, bG) : GG.f64(bG)
          }(GG, bG);
        case "string": {
          const ZG = ak.encode(bG);
          return jk(GG, ZG.length, 160, 32, 217, 218, 219), void GG.raw(ZG)
        }
        case "object":
          break;
        default:
          return void GG.u8(192)
      }
      if (null === bG) GG.u8(192);
      else if (Array.isArray(bG)) {
        jk(GG, bG.length, 144, 16, null, 220, 221);
        for (const ZG of bG) Pk(GG, ZG)
      } else if (bG instanceof Uint8Array) jk(GG, bG.length, 0, 0, 196, 197, 198), GG.raw(bG);
      else {
        const ZG = Object.keys(bG);
        jk(GG, ZG.length, 128, 0, null, 222, 223);
        for (const wG of ZG) Pk(GG, wG), Pk(GG, bG[wG])
      }
    }
    const Mk = new Uint8Array([212, 0, 0]);
    var Ak = ZG(43031),
      sk = ZG(43037),
      qk = ZG(41340),
      nk = ZG(41390),
      gk = ZG(2872);
    const ek = [1e3, 3e3, 9e3];
    class Rk {
      constructor(GG) {
        this.host = GG, this.sets = new Map, this.table = [], this.generation = 0, this.pK = !1
      }
      onEvent(GG) {
        const bG = function(GG) {
          if (GG.byteLength !== fG.zd) return null;
          const bG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
          return {
            want: bG.getUint16(0, !0),
            release: bG.getUint16(2, !0)
          }
        }(GG);
        bG && !this.pK && (bG.release !== fG.Ad && this.release(bG.release), bG.want !== fG.Ad && this.want(bG.want))
      }
      reset(GG) {
        if (!this.pK) {
          for (const [GG, bG] of this.sets) "ready" === bG.state && this.releaseAll(bG.distinct), this.sets.delete(GG);
          this.table = GG, this.generation++
        }
      }
      dispose() {
        if (this.pK) return;
        this.pK = !0, this.generation++, this.table = [];
        const GG = [...this.sets.values()];
        this.sets.clear();
        let bG = null;
        for (const wG of GG)
          for (const GG of "ready" === wG.state ? wG.distinct : []) try {
            this.host.JwG(GG)
          } catch (ZG) {
            bG ??= {
              error: ZG
            }
          }
        if (bG) throw bG.error
      }
      isReady(GG) {
        var bG;
        return "ready" === (null === (bG = this.sets.get(GG)) || void 0 === bG ? void 0 : bG.state)
      }
      want(GG) {
        const bG = this.sets.get(GG);
        if ("loading" === (null === bG || void 0 === bG ? void 0 : bG.state)) return bG.wanted = !0, void this.capAnswer(GG, bG);
        if ("ready" === (null === bG || void 0 === bG ? void 0 : bG.state)) return void this.host.sendReady(Hk(GG, bG.images, bG.size));
        const ZG = this.table[GG];
        if (!ZG || 1 !== ZG.urls.length && ZG.urls.length !== HZ.fc.CubeFaces) return this.host.sendReady(tk(GG)), void this.host.onLoadFailed(GG, "", new Error(`no image set ${GG}`));
        const wG = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(GG, wG), this.load(GG, ZG, wG, this.generation, 0), this.capAnswer(GG, wG)
      }
      capAnswer(GG, bG) {
        this.host.wait(4e3, (() => {
          this.sets.get(GG) === bG && bG.wanted && this.host.sendReady(tk(GG))
        }))
      }
      load(GG, bG, ZG, wG, SG) {
        const LG = [...new Set(bG.urls)];
        Promise.allSettled(LG.map((GG => this.host.loadImage(GG, bG.orientation)))).then((yG => {
          const kG = yG.flatMap((GG => "fulfilled" === GG.status ? [GG.value] : [])),
            UG = wG === this.generation && this.sets.get(GG) === ZG,
            YG = yG.findIndex((GG => "rejected" === GG.status));
          if (!UG || !ZG.wanted) return this.pK ? void this.releaseAfterDispose(kG.map(Tk)) : (this.releaseAll(kG.map(Tk)), void(UG && this.sets.delete(GG)));
          YG < 0 ? this.loaded(GG, bG, LG, kG) : (this.releaseAll(kG.map(Tk)), this.host.sendReady(tk(GG)), SG < ek.length ? this.host.wait(ek[SG], (() => {
            wG === this.generation && this.sets.get(GG) === ZG && (ZG.wanted ? this.load(GG, bG, ZG, wG, SG + 1) : this.sets.delete(GG))
          })) : (this.sets.delete(GG), this.host.onLoadFailed(GG, LG[YG], yG[YG].reason)))
        }))
      }
      loaded(GG, bG, ZG, wG) {
        const [SG] = wG, LG = [SG.width, SG.height], yG = wG.every((GG => GG.width === LG[0] && GG.height === LG[1])), kG = bG.urls.length === HZ.fc.CubeFaces;
        if (!yG || LG[0] <= 0 || LG[1] <= 0 || LG[0] > 65535 || LG[1] > 65535 || kG && LG[0] !== LG[1]) {
          this.releaseAll(wG.map(Tk)), this.sets.delete(GG), this.host.sendReady(tk(GG));
          const ZG = wG.map((GG => `${GG.width}x${GG.height}`));
          return void this.host.onLoadFailed(GG, bG.urls[0], new Error(`set ${GG}'s images can't make its texture: ${ZG.join(", ")}`))
        }
        const UG = bG.urls.map((GG => wG[ZG.indexOf(GG)].id)),
          YG = wG.map(Tk);
        this.sets.set(GG, {
          state: "ready",
          images: UG,
          distinct: YG,
          size: LG
        }), this.host.sendReady(Hk(GG, UG, LG))
      }
      release(GG) {
        const bG = this.sets.get(GG);
        "loading" === (null === bG || void 0 === bG ? void 0 : bG.state) ? bG.wanted = !1: "ready" === (null === bG || void 0 === bG ? void 0 : bG.state) && (this.releaseAll(bG.distinct), this.sets.delete(GG))
      }
      releaseAll(GG) {
        for (const bG of GG) this.host.JwG(bG)
      }
      releaseAfterDispose(GG) {
        for (const bG of GG) try {
          this.host.JwG(bG)
        } catch {}
      }
    }

    function Tk(GG) {
      return GG.id
    }

    function Hk(GG, bG, ZG) {
      const wG = new Uint8Array(HZ.fc.SkyImagesReadyBytes),
        SG = new DataView(wG.buffer);
      return SG.setUint16(0, GG, !0), SG.setUint16(2, bG.length, !0), SG.setUint16(4, ZG[0], !0), SG.setUint16(6, ZG[1], !0), bG.slice(0, HZ.fc.CubeFaces).forEach(((GG, bG) => {
        SG.setUint32(8 + 4 * bG, GG, !0)
      })), wG
    }

    function tk(GG) {
      const bG = new Uint8Array(HZ.fc.SkyImagesReadyBytes),
        ZG = new DataView(bG.buffer);
      return ZG.setUint16(0, GG, !0), ZG.setUint16(2, HZ.fc.Failed, !0), bG
    }
    let Dk = Promise.resolve();
    async function Nk(GG, bG) {
      let ZG;
      try {
        ZG = await (0, gk.K)(GG)
      } catch (LG) {
        throw new qk.b("fetch", GG, {
          cause: LG
        })
      }
      const wG = Dk.then((() => async function(GG, bG) {
        const ZG = new Blob([GG.slice()]);
        let wG = await createImageBitmap(ZG, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: bG
        });
        const SG = 1024 / Math.max(wG.width, wG.height);
        if (SG < 1) {
          const GG = wG;
          try {
            wG = await createImageBitmap(GG, {
              resizeWidth: Math.max(1, Math.round(GG.width * SG)),
              resizeHeight: Math.max(1, Math.round(GG.height * SG)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            GG.close()
          }
        }
        return wG
      }(ZG, bG)));
      let SG;
      Dk = wG.catch((() => {}));
      try {
        SG = await wG
      } catch (LG) {
        throw new qk.b("decode", GG, {
          cause: LG
        })
      }
      return {
        id: (0, qk.o)(SG),
        width: SG.width,
        height: SG.height
      }
    }
    var Ok = ZG(2138),
      xk = ZG(34326),
      Bk = ZG(39636);
    const GU = Ok.i.length,
      bU = new Set([...Ok.i, "earth"]);

    function ZU(GG) {
      const bG = [],
        ZG = [],
        wG = (GG, wG) => {
          if ("custom" === wG.type) {
            ZG.push({
              id: GG,
              kind: HZ.fc.KindCustom,
              set: bG.length,
              earth: null
            });
            const SG = [wG.px, wG.py, wG.pz, wG.nx, wG.ny, wG.nz];
            bG.push({
              urls: (0, Bk.g)(SG),
              orientation: "none"
            })
          } else ZG.push({
            id: GG,
            kind: HZ.fc.KindEarth,
            set: 0,
            earth: wG
          })
        };
      Ok.i.forEach(((bG, ZG) => {
        var SG;
        wG(ZG, null !== (SG = wU(GG[bG])) && void 0 !== SG ? SG : xk.m[bG])
      }));
      const SG = wU(GG.earth);
      "earth" === (null === SG || void 0 === SG ? void 0 : SG.type) && wG(GU, SG);
      const LG = new TextEncoder,
        yG = [],
        kG = [];
      for (const [QG, KG] of Object.entries(GG)) {
        const GG = bU.has(QG) ? null : wU(KG);
        if (null === GG) continue;
        const bG = LG.encode(QG);
        bG.length > 255 ? kG.push(`Ignoring texture pack skybox ${QG}, whose name is over 255 bytes`) : yG.length === HZ.fc.MaxAdded ? kG.push(`Ignoring texture pack skybox ${QG}, past the ${HZ.fc.MaxAdded} skies a pack can add`) : (yG.push(bG), wG(HZ.fc.AddedId, GG))
      }
      const UG = bG.length;
      bG.push({
        urls: xk.e.map((GG => xk.f + GG)),
        orientation: "none"
      }), bG.push({
        urls: [xk.j],
        orientation: "flipY"
      }), bG.push({
        urls: [xk.d],
        orientation: "flipY"
      });
      const YG = HZ.fc.SkyTableHeaderBytes + ZG.length * HZ.fc.SkyTableEntryBytes,
        VG = new Uint8Array(YG + yG.reduce(((GG, bG) => GG + 1 + bG.length), 0)),
        pG = new DataView(VG.buffer);
      pG.setUint16(0, UG, !0), pG.setUint16(2, UG + 1, !0), pG.setUint16(4, UG + 2, !0), pG.setUint16(6, ZG.length, !0), ZG.forEach(((GG, bG) => {
        const ZG = HZ.fc.SkyTableHeaderBytes + bG * HZ.fc.SkyTableEntryBytes;
        pG.setUint16(ZG, GG.id, !0), pG.setUint8(ZG + 2, GG.kind);
        const wG = ZG + 4;
        GG.earth ? function(GG, bG, ZG) {
          const wG = GG;
          let SG = 0,
            LG = 0;
          for (const [yG, kG] of SU) {
            const GG = wG[yG];
            "number" === typeof GG && Number.isFinite(GG) && (bG.setFloat32(ZG + 4 * kG, GG, !0), SG |= 1 << kG)
          }
          for (const [yG, kG, UG] of LU) {
            const GG = wG[yG];
            Array.isArray(GG) && 3 === GG.length && GG.every((GG => "number" === typeof GG && Number.isFinite(GG))) && (GG.forEach(((GG, wG) => {
              bG.setFloat32(ZG + UG + 4 * wG, GG, !0)
            })), SG |= kG)
          }
          yU.forEach(((GG, LG) => {
            let [yG, kG] = GG;
            const UG = wG[yG];
            "number" === typeof UG && Number.isFinite(UG) && (bG.setFloat32(ZG + HZ.r.CameraOffsetAt + 4 * LG, UG, !0), SG |= kG)
          }));
          for (const [yG, kG] of kU) {
            const GG = wG[yG];
            null !== GG && void 0 !== GG && (SG |= kG, GG && (LG |= kG >>> 14))
          }
          bG.setUint32(ZG + HZ.r.PresentAt, SG, !0), bG.setUint8(ZG + HZ.r.FlagsAt, LG)
        }(GG.earth, pG, wG) : pG.setUint16(wG, GG.set, !0)
      }));
      let fG = YG;
      for (const QG of yG) VG[fG] = QG.length, VG.set(QG, fG + 1), fG += 1 + QG.length;
      return {
        payload: VG,
        sets: bG,
        leftOut: kG
      }
    }

    function wU(GG) {
      if ("object" !== typeof GG || null === GG) return null;
      const bG = GG;
      if ("earth" === bG.type) return GG;
      return "custom" === bG.type && ["px", "py", "pz", "nx", "ny", "nz"].every((GG => {
        const ZG = bG[GG];
        return "string" === typeof ZG && ZG.length > 0
      })) ? GG : null
    }
    const SU = [
        ["inclination", HZ.r.Inclination],
        ["turbidity", HZ.r.Turbidity],
        ["luminance", HZ.r.Luminance],
        ["rayleigh", HZ.r.Rayleigh],
        ["mieCoefficient", HZ.r.MieCoefficient],
        ["mieDirectionalG", HZ.r.MieDirectionalG],
        ["distance", HZ.r.Distance],
        ["azimuth", HZ.r.Azimuth]
      ],
      LU = [
        ["sunPosition", HZ.r.SunPosition, HZ.r.SunPositionAt],
        ["up", HZ.r.Up, HZ.r.UpAt],
        ["vertexTint", HZ.r.VertexTint, HZ.r.VertexTintAt]
      ],
      yU = [
        ["xCameraOffset", HZ.r.CameraOffsetX],
        ["yCameraOffset", HZ.r.CameraOffsetY],
        ["zCameraOffset", HZ.r.CameraOffsetZ]
      ],
      kU = [
        ["useSunPosition", HZ.r.UseSunPosition],
        ["dithering", HZ.r.Dithering],
        ["infiniteDistance", HZ.r.InfiniteDistance]
      ];

    function UU(GG, bG, ZG) {
      const wG = new VU({
        writeCmd: GG,
        warn: bG,
        followPack: YU(ZG, bG)
      });
      return wG.start(), wG
    }

    function YU(GG, bG) {
      return ZG => {
        let wG = () => {};
        const SG = GG((GG => {
          wG(), wG = () => {}, null !== GG ? wG = GG.subscribe((GG => {
            ZG(function(GG, bG, ZG) {
              if ("object" !== typeof GG || null === GG) return null;
              const wG = GG.skyBoxes;
              if ("object" !== typeof wG || null === wG) return null;
              if ("player" === bG) return wG;
              return Object.fromEntries(Object.entries(wG).filter((GG => {
                let [bG, wG] = GG;
                return !! function(GG) {
                  if ("object" !== typeof GG || null === GG) return !1;
                  return "earth" === GG.type || Object.entries(GG).every((GG => {
                    let [bG, ZG] = GG;
                    return "type" === bG || ("" === (wG = ZG) || null !== function(GG) {
                      var bG, ZG, wG;
                      return "string" !== typeof GG ? null : null !== (bG = null === (ZG = pU.exec(GG)) || void 0 === ZG || null === (wG = ZG.groups) || void 0 === wG ? void 0 : wG.base64) && void 0 !== bG ? bG : null
                    }(wG));
                    var wG
                  }))
                }(wG) || (ZG(`Ignoring texture pack skybox ${bG}, whose faces are not all data URLs`, null), !1)
              })))
            }(GG.pack, null === GG.gameSource ? "player" : "customGame", bG))
          })) : ZG(null)
        }));
        return () => {
          SG(), wG()
        }
      }
    }
    class VU {
      constructor(GG) {
        var bG, ZG, wG;
        this.host = GG, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.pK = !1, this.wait = null !== (bG = GG.wait) && void 0 !== bG ? bG : (GG, bG) => {
          setTimeout(bG, GG)
        }, this.loader = new Rk({
          loadImage: null !== (ZG = GG.loadImage) && void 0 !== ZG ? ZG : Nk,
          JwG: null !== (wG = GG.JwG) && void 0 !== wG ? wG : qk.p,
          sendReady: GG => {
            this.queue.push({
              kind: HZ.fc.SkyImagesReady,
              payload: GG
            })
          },
          onLoadFailed: (bG, ZG, wG) => {
            GG.warn(`sky image set ${bG} (${ZG}) didn't load: the last sky stays`, wG)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(nk.e, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((GG => {
          this.write(null !== GG && void 0 !== GG ? GG : {})
        }))
      }
      onEvent(GG) {
        this.loader.onEvent(GG)
      }
      drain() {
        if (0 === this.queue.length) return;
        let GG = 0;
        for (; GG < this.queue.length && this.host.writeCmd(this.queue[GG].kind, 0, this.queue[GG].payload);) GG++;
        GG > 0 && this.queue.splice(0, GG)
      }
      dispose() {
        this.pK = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(GG) {
        if (this.pK) return;
        const bG = ZU(GG);
        if (!(this.written && (ZG = this.written, wG = bG, ZG.payload.length === wG.payload.length && ZG.payload.every(((GG, bG) => GG === wG.payload[bG])) && ZG.sets.length === wG.sets.length && ZG.sets.every(((GG, bG) => {
            const ZG = wG.sets[bG];
            return GG.orientation === ZG.orientation && GG.urls.length === ZG.urls.length && GG.urls.every(((GG, bG) => GG === ZG.urls[bG]))
          }))))) {
          var ZG, wG;
          for (const GG of bG.leftOut) this.host.warn(GG, null);
          this.written = bG, this.loader.reset(bG.sets), this.queue = this.queue.filter((GG => GG.kind !== HZ.fc.SkyImagesReady)), this.queue.push({
            kind: HZ.fc.SkyTable,
            payload: bG.payload
          })
        }
      }
    }
    const pU = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var fU = ZG(2782),
      QU = ZG(2984),
      KU = ZG(289),
      hU = ZG(169),
      dU = ZG(2786),
      JU = ZG(2792),
      rU = ZG(264),
      zU = ZG(273),
      EU = ZG(2887),
      oU = ZG(2902),
      XU = ZG(2913),
      uU = ZG(95),
      iU = ZG(318),
      CU = ZG(41214);
    class WU {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, gS.l)(rw.P, (GG => {
          this.onReply((0, nS.f)(rw.P, GG), performance.now())
        }))
      }
      onFrame(GG, bG) {
        null === this.id ? this.id = GG : GG !== this.id && (this.id = GG, this.sentMs = document.hidden ? null : bG)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(GG, bG) {
        GG === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(bG - this.sentMs), this.sentMs = null)
      }
      take() {
        const GG = this.roundTripMs;
        return this.roundTripMs = null, GG
      }
      stop() {
        this.stopReplies()
      }
    }
    class mU {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(GG, bG, ZG, wG) {
        const SG = GG - this.sampled >>> 0,
          LG = bG - this.timed >>> 0,
          yG = ZG - this.frameUs >>> 0,
          kG = this.primed;
        return this.sampled = GG, this.timed = bG, this.frameUs = ZG, this.primed = !0, !(!kG || SG > 64 || LG > 64) && (wG && yG <= 1e6 * LG && (this.windowTimed += LG, this.windowUs += yG), wG && SG > 0)
      }
      reset() {}
      snapshotAndReset() {
        const GG = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: GG,
          submitToDoneMs: null
        }
      }
    }
    const IU = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class FU {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(GG, bG) {
        const ZG = Math.min(4096, this.count + bG);
        this.samples.fill(GG, this.count, ZG), this.count = ZG
      }
      clear() {
        this.count = 0
      }
      take() {
        const GG = this.count;
        if (this.count = 0, GG < 30) return IU;
        const bG = this.samples.subarray(0, GG).sort(),
          ZG = ZG => bG[Math.min(GG - 1, Math.floor(ZG * GG))];
        return {
          lagP50Ms: ZG(.5),
          lagP90Ms: ZG(.9)
        }
      }
    }
    class vU {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new FU
      }
      onFrame(GG, bG) {
        const ZG = GG.headerWord(HZ.K.Pacing),
          wG = GG.headerWord(HZ.K.PacingLagUs),
          SG = (ZG >>> HZ.$.LagsShift) - (this.word >>> HZ.$.LagsShift) & HZ.$.CountMask,
          LG = SG > 0 ? (wG - this.lagUs >>> 0) / SG / 1e3 : 0,
          yG = this.primed && SG <= 64 && LG <= 6e4;
        this.word = ZG, this.lagUs = wG, this.primed = !0, yG && bG && SG > 0 && 0 !== (ZG & HZ.$.Defaulted) && this.lags.add(LG, SG)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(GG) {
        return GG ? this.lags.take() : (this.lags.clear(), IU)
      }
    }
    var aU = ZG(304);

    function cU() {
      return Date.now() - performance.now()
    }
    class lU {
      constructor() {
        this.rafs = 0, this.Ik = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = cU(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, aU.f)(), this.onBlur = () => {
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
        (0 === this.Ik || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.Ik++, this.heldAtRaf = this.rafs
      }
      words(GG) {
        const bG = GG ? this.rafs - 1 : this.rafs;
        return function(GG) {
          let bG = 0 === GG.rafs ? "raf:none" : "raf:some";
          return GG.Ik > 0 && (bG += " pace:held"), GG.heldRunMs > 1e4 && (bG += " pace:stalled"), GG.blurred && (bG += " blur"), GG.resumed && (bG += " resumed"), GG.embedded && (bG += " embedded"), GG.clockGainMs > 2e3 && (bG += " clockjump"), bG
        }({
          clockGainMs: cU() - this.startClockOffsetMs,
          rafs: bG,
          Ik: this.Ik,
          heldRunMs: this.Ik > 0 && this.heldAtRaf === bG ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(GG) {
        this.rafs = 0, this.Ik = 0, this.heldAtRaf = -1, this.startMs = GG, this.startClockOffsetMs = cU(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var jU = ZG(34417),
      PU = ZG(2889),
      MU = ZG(41271),
      AU = ZG(34414),
      sU = ZG(2794),
      qU = ZG(2894);
    const nU = {
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

    function gU(GG) {
      return new eU(GG)
    }
    class eU {
      constructor(GG) {
        this.shell = GG, this.tracker = new JU.c, this.gpu = new mU, this.pacing = new vU, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new WU, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new lU, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, jU.c)(GG.backend, GG.canvas, GG.adapterVendor), this.tracker.start((() => !GG.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, sU.b)("wasm", (() => {
          const {
            n: bG,
            sampleCount: ZG
          } = (0, MU.d)();
          return `${GG.backend}, quality steps aim at up to ${qU.c.target.maxFps} fps, pixel n ${bG}, msaa ${ZG}`
        }), (bG => {
          bG.setLoadCounts(GG.readLoadCounts), this.frameDebug = bG
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(GG) {
        var bG;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(GG), null === (bG = this.frameDebug) || void 0 === bG || bG.animationFrame()
      }
      sendsWent(GG, bG, ZG) {
        this.ping.onFrame(GG.headerWord(HZ.K.PingSent), bG), this.sendsStartMs = bG, this.sendsEndMs = ZG
      }
      frameRan(GG, bG, ZG, wG) {
        var SG;
        this.ping.onFrame(GG.headerWord(HZ.K.PingSent), ZG);
        const LG = this.tracker;
        this.pacing.onFrame(GG, LG.isSampling());
        const yG = GG.headerWord(HZ.K.TickUs) / 1e3 + (0, ww.K)();
        var kG;
        (LG.gJ(yG), null === (SG = this.frameDebug) || void 0 === SG || SG.wasmFrame(GG, bG, ZG, wG, LG.isSampling(), yG), null !== this.game) && (null === (kG = this.frameDebug) || void 0 === kG || kG.inGame());
        const UG = this.sendsStartMs >= bG ? this.sendsEndMs - this.sendsStartMs : 0,
          YG = Math.max(0, ZG - bG - yG - UG);
        if ("drawn" !== wG) return void("paced" === wG ? (this.pacedCpuMs += YG, this.stallGap.paced()) : "skipped" === wG && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(bG, !0), LG.onFrameStart(bG);
        this.gpu.onFrame(GG.headerWord(HZ.K.GpuSampled), GG.headerWord(HZ.K.GpuTimed), GG.headerWord(HZ.K.GpuFrameUs), LG.isSampling()) && LG.onGpuSampleStarted(), LG.onFrameCpu(YG + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(bG)
      }
      framePaced() {
        var GG;
        this.stallGap.paced(), null === (GG = this.frameDebug) || void 0 === GG || GG.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const GG of this.timers) clearInterval(GG);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const GG = this.shell.joinedGame();
        if (GG !== this.game) {
          var bG;
          if (this.game = GG, null !== GG) null === (bG = this.frameDebug) || void 0 === bG || bG.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== GG
      }
      checkMainStall(GG, bG) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const ZG = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          wG = this.lastDrawnMs < 0 ? 0 : GG - this.lastDrawnMs;
        this.lastDrawnMs = GG;
        const SG = !this.stallPending && wG > 5e3,
          LG = SG ? this.stallGap.words(bG) : "";
        this.stallGap.restart(GG), this.stallPending || (SG ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(wG, ZG.blockingSinceMark(), LG)
        }), 0)) : ZG.markFrame(GG))
      }
      countFpsFrame(GG) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = GG
        }
        this.fpsFrames++;
        const bG = GG - this.fpsSpanStartMs;
        if (!(bG < XU.c)) {
          if (!document.hidden) {
            const GG = 1e3 * this.fpsFrames / bG;
            this.firstSpanFps ??= GG, this.initialFps = this.firstSpanFps, this.fpsOverTime = GG
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = GG
        }
      }
      flush() {
        const GG = this.followGame(),
          {
            cpuFrameMs: bG,
            refreshHz: ZG,
            cpuBottleneck: SG,
            frameIntervalCv: LG,
            ...yG
          } = this.tracker.snapshotAndReset(),
          kG = this.shell.inGame(),
          UG = kG && this.inGameAtLastFlush,
          YG = UG ? yG : (0, dU.e)(yG),
          VG = this.pacing.snapshotAndReset(UG);
        if (this.inGameAtLastFlush = kG, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !GG || !this.shell.canSend()) return;
        const pG = performance.now(),
          QG = (0, oU.w)((0, oU.u)(pG), this.unsentPage),
          hG = function(GG, bG, ZG, SG, LG, yG, kG, UG) {
            var YG, VG, pG, fG, QG;
            const KG = {},
              {
                canvas: hG
              } = GG,
              dG = (0, EU.h)({
                refreshHz: bG.refreshHz,
                msaa: GG.msaa(),
                autoMsaaOff: (0, AU.b)()
              });
            for (const JG of (0, QU.c)()) {
              const rG = JG.name;
              let zG;
              if ((0, KU.w)(rG)) zG = (0, oU.c)(rG);
              else if ((0, oU.i)(rG)) zG = UG[rG];
              else if ((0, EU.l)(rG)) zG = dG[rG];
              else switch (rG) {
                case "fps":
                  zG = SG;
                  break;
                case "mU":
                  zG = LG;
                  break;
                case "cU":
                  zG = (0, PU.D)((0, MU.d)().n);
                  break;
                case "lU":
                  zG = Math.max(hG.width, hG.height);
                  break;
                case "jU":
                  zG = Math.min(hG.width, hG.height);
                  break;
                case "PU":
                  zG = navigator.hardwareConcurrency || null;
                  break;
                case "MU":
                  zG = (0, NS.getWebGpuSupported)();
                  break;
                case "AU":
                  zG = null === GG.fallbackReason ? null : nU[GG.fallbackReason];
                  break;
                case "sU":
                  zG = bG.cpuFrameMs;
                  break;
                case "qU":
                  zG = bG.refreshHz;
                  break;
                case "nU":
                  zG = bG.cpuBottleneck;
                  break;
                case "gU":
                  zG = bG.frameIntervalCv;
                  break;
                case "eU":
                  zG = bG.frameMs;
                  break;
                case "RU":
                  zG = bG.tickMs;
                  break;
                case "DU":
                  zG = bG.mainBusyShare;
                  break;
                case "NU":
                  zG = bG.mainProbeDelayMs;
                  break;
                case "TU":
                  zG = bG.longAnimationFramesPerMin;
                  break;
                case "HU":
                  zG = bG.longAnimationFrameTimeShare;
                  break;
                case "tU":
                  zG = bG.longAnimationFrameScriptShare;
                  break;
                case "OU":
                  zG = bG.gpuPassMs;
                  break;
                case "xU":
                  zG = bG.gpuSubmitToDoneMs;
                  break;
                case "BU":
                  zG = ZG.lagP50Ms;
                  break;
                case "GY":
                  zG = ZG.lagP90Ms;
                  break;
                case "fY":
                  zG = (0, fU.d)(yG);
                  break;
                case "aU":
                  zG = kG;
                  break;
                case "bY":
                case "ZY":
                case "wY":
                case "SY":
                case "LY":
                case "yY":
                case "kY":
                case "UY":
                case "YY":
                case "VY":
                case "pY":
                case "QY":
                case "KY":
                case "hY":
                case "dY":
                  zG = null;
                  break;
                case "vY":
                  zG = (0, NS.getPlatformType)();
                  break;
                case "aY":
                  zG = (0, NS.getGpuVendor)();
                  break;
                case "cY":
                  zG = CU.c[GG.backend];
                  break;
                case "lY":
                  zG = (0, uU.d)();
                  break;
                case "jY":
                  zG = (0, NS.getOperatingSystem)();
                  break;
                case "PY":
                  zG = (0, NS.getTrafficSource)();
                  break;
                case "MY":
                  zG = null !== (YG = wG.e.get("gameEntrySource")) && void 0 !== YG ? YG : hU.i;
                  break;
                case "AY":
                  zG = null !== (VG = bG.frameLimiter) && void 0 !== VG ? VG : hU.i;
                  break;
                case "sY":
                  zG = (0, rU.f)();
                  break;
                case "qY":
                  zG = null !== (pG = (0, zU.d)()) && void 0 !== pG ? pG : hU.i;
                  break;
                case "gY":
                  zG = (0, rU.c)(hG.width, hG.height);
                  break;
                case "eY":
                  zG = (0, QU.d)(-(new Date).getTimezoneOffset());
                  break;
                case "HY":
                  zG = null !== (fG = GG.fallbackReason) && void 0 !== fG ? fG : hU.i;
                  break;
                case "NY":
                  zG = "ready";
                  break;
                case "OY":
                  zG = (0, NS.getSoftwareRenderer)();
                  break;
                case "TY":
                  zG = null !== GG.shaderPackReach() ? "true" : "false";
                  break;
                case "xY":
                  zG = null !== (QG = GG.shaderPackReach()) && void 0 !== QG && QG.sceneDepth ? "true" : "false";
                  break;
                case "BY": {
                  const bG = GG.shaderPackReach();
                  zG = null !== bG && void 0 !== bG && bG.sunShadow ? "all" : null !== bG && void 0 !== bG && bG.airShadow ? "air" : "none";
                  break
                }
                case "GV":
                  zG = iU.M;
                  break;
                case "kV":
                  zG = (0, oU.m)();
                  break;
                case "RY": {
                  const bG = GG.Fh();
                  zG = null === bG ? hU.i : String(bG);
                  break
                }
                case "tY":
                case "DY":
                  zG = hU.i;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${rG}`)
              }
              if (void 0 === zG) throw new Error(`Metric ${rG} has no value`);
              KG[rG] = zG
            }
            return KG
          }(this.shell, {
            cpuFrameMs: bG,
            refreshHz: ZG,
            cpuBottleneck: SG,
            frameIntervalCv: LG,
            ...YG
          }, VG, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), QG);
        if (! function(GG, bG, ZG) {
            return (0, Rb.d)(), GG(KG.m.Send, bG, ZG)
          }(this.shell.writeCmd, fG.wd, function(GG) {
            const bG = (0, PG.g)((0, tb.e)(GG)),
              ZG = new Uint8Array(KG.Wd.BYTES + bG.length);
            return new DataView(ZG.buffer).setUint16(0, tb.b.AnalyticsUpdate, !0), ZG.set(bG, KG.Wd.BYTES), ZG
          }(hG))) return this.unsentPage = QG, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, fU.c), (0, oU.s)(hG, "wasm", pG)
      }
    }
    var RU = ZG(39990);

    function TU(GG, bG, ZG) {
      const wG = new Map;
      return (0, RU.b)(((GG, ZG, wG) => bG.Gk(GG, ZG, wG)), ((bG, ZG, SG) => {
        const LG = `${bG},${ZG},${SG}`;
        return wG.has(LG) || wG.set(LG, (0, Ab.d)(GG, bG, ZG, SG)), wG.get(LG)
      }), ZG)
    }
    var HU = ZG(39996),
      tU = ZG(41263);

    function DU(GG) {
      const bG = null !== GG && 0 !== (KG.v.playerFlags(GG.api.apiView, 0) & KG.Hd.CursorAim);
      bG !== (0, tU.q)() && (0, tU.K)(bG, null !== GG)
    }

    function NU(GG) {
      return (0, Jw.e)(rw.E, GG)
    }
    var OU = ZG(41423);
    const xU = new LG.h((GG => ZG(43046)(`./${GG}/${GG}Client`)));
    let BU = null,
      GY = null;
    async function bY(GG) {
      BU ??= ZG.e(27).then((() => ZG(39558))).then((GG => {
        GY = GG.createDefaultClientPlugins
      }), (GG => {
        throw BU = null, GG
      })), await Promise.all([xU.load(GG), BU])
    }

    function ZY(GG) {
      GG.load(new jb(Hw, new Nw))
    }
    let wY = !1;
    const SY = new WeakMap;

    function LY(GG) {
      try {
        GG()
      } catch (bG) {
        console.error("[bloxd-wasm-client] a session-end step failed", bG)
      }
    }

    function yY(GG, bG) {
      ! function() {
        var GG, bG;
        ew.Howler.volume();
        const ZG = ew.Howler;
        null === (GG = ZG._autoResume) || void 0 === GG || GG.call(ZG), null === (bG = ZG._autoSuspend) || void 0 === bG || bG.call(ZG)
      }(), bG.audio.prepare();
      const ZG = new EG(bG.core, bG.memory, bG.audio);
      let LG;
      try {
        LG = new JS(ZG, bG.options)
      } catch (fG) {
        return GG.crash(zS.D, fG), null
      }(0, UG.c)(rS(ZG, LG));
      const VG = new Ik({
        running: GG,
        api: ZG,
        core: bG.core,
        memory: bG.memory,
        staleOr: bG.staleOr,
        reportFault: bG.reportReplayFault,
        options: bG.options,
        sessionInfo: bG.sessionInfo,
        replayShaderPack: bG.replayShaderPack
      });
      (0, ww.y)();
      const pG = new Mw({
        api: ZG,
        tables: LG,
        sessionInfo: bG.sessionInfo,
        gameFactory: GG => xU.loadedFactory(GG),
        defaultPlugins: (GG, bG, ZG, wG) => {
          if (null === GY) throw new Error("The default plugins started before they loaded");
          return GY(GG, bG, ZG, wG)
        },
        serverOptions: bG.options,
        onNetEvent: GG => {
          VG.netEvent(GG), bG.onNetEvent(GG)
        },
        setLocalOptions: bG => {
          vk(GG, {
            changes: bG,
            reset: !1
          })
        },
        playSound: (GG, ZG, wG, SG, LG, yG, kG) => bG.audio.playGame(GG, ZG, wG, SG, LG, yG, kG),
        preloadSounds: GG => {
          bG.audio.preload(function(GG) {
            const bG = [];
            for (const ZG of GG) {
              const GG = cb(ZG);
              GG >= 0 && bG.push(rb[GG])
            }
            return bG
          }(GG))
        },
        onSessionEnd: () => {
          LY(SG.k), LY(wS), LY((() => {
            wG.e.set({
              openInGameMenuName: null
            })
          })), LY((() => {
            bG.audio.endSession()
          }))
        },
        beforeWrite: bG.beforeWrite,
        beforeOp: bG.beforeOp,
        cameraScreen: ZS,
        showCameraFacing: SS,
        onEventOverflow: bG.onEventOverflow,
        screenBandY: kG.g,
        replayEntities: VG.entityHooks,
        hasPackModel: bG.hasPackModel
      });
      return pG.attach(GG), SY.set(pG, VG), nw(pG.items, bG.audio),
        function(GG) {
          GG.setClientFreeCameraGrant("isDev", !1);
          const bG = bG => {
            GG.setClientFreeCameraGrant("hasDeveloperRank", bG.playerHasRank("developer"))
          };
          (0, yG.p)("userContextUpdated", bG)
        }(pG), wY || (wY = !0, (0, yG.p)("appManagerUpdated|openInGameMenuName", (GG => {
          !GG && (0, YG.t)().includes(YG.e) && (0, YG.w)(YG.e)
        }))), pG
    }

    function kY(GG) {
      try {
        GG.closeGame()
      } finally {
        var bG;
        null === (bG = SY.get(GG)) || void 0 === bG || bG.stop(), SY.delete(GG)
      }
    }
  },
  43046: (GG, bG, ZG) => {
    var wG = {
      "./bedwars/bedwarsClient": [39692, 9],
      "./bridgeBattle/bridgeBattleClient": [39699, 10],
      "./buildAFactory2/buildAFactory2Client": [38899, 76, 75, 74, 230, 225, 11],
      "./classic/classicClient": [39708, 12],
      "./clutch/clutchClient": [39714, 13],
      "./containmentBreach/containmentBreachClient": [39717, 224, 14],
      "./cooking/cookingClient": [39835, 15],
      "./defusal/defusalClient": [39844, 16],
      "./frontline/frontlineClient": [39851, 76, 75, 74, 17],
      "./goalRush/goalRushClient": [39854, 18],
      "./luckyBedwars/luckyBedwarsClient": [39859, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39862, 20],
      "./oneBlock/oneBlockClient": [39864, 21],
      "./plots/plotsClient": [39868, 247, 224, 22],
      "./pvpCiv/pvpCivClient": [39929, 23],
      "./skyIslands/skyIslandsClient": [39934, 24],
      "./skyblock/skyblockClient": [38941, 76, 239, 230, 192, 25],
      "./tsunami/tsunamiClient": [39939, 26]
    };

    function SG(GG) {
      if (!ZG.o(wG, GG)) return Promise.resolve().then((() => {
        var bG = new Error("Cannot find module '" + GG + "'");
        throw bG.code = "MODULE_NOT_FOUND", bG
      }));
      var bG = wG[GG],
        SG = bG[0];
      return Promise.all(bG.slice(1).map(ZG.e)).then((() => ZG(SG)))
    }
    SG.keys = () => Object.keys(wG), SG.id = 43046, GG.exports = SG
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);